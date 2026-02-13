import type { ReactNode } from "react";
import type { NotificationProps } from "./notification.component";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Notification } from "./notification.component";

export type NotificationType = NotificationProps & {
  id: string;
};

type FunctionOfNotificationParameter = (data: {
  current: ExtendedNotificationType;
  count: number;
  queue: ExtendedNotificationType[];
}) => ReactNode;

type NotificateParameter = ReactNode | FunctionOfNotificationParameter;
type ExtendedNotificationType = Omit<NotificationType, "text"> & {
  text: NotificateParameter;
};

export const useNotifications = ({
  duration,
  delay = 1000,
  usePortal,
}: {
  /** duration of notification in miliseconds */
  duration: number,
  /** delay between notifications in miliseconds */
  delay?: number,
  usePortal?: boolean,
}) => {
  const notifications = useRef<{ [key: string]: NotificationType }>({});

  const [queue, setQueue] = useState<ExtendedNotificationType[]>([]);
  const [closed, setClosed] = useState<boolean>(true);

  const [current, setCurrent] = useState<ExtendedNotificationType | null>(null);
  const currentRef = useRef<ExtendedNotificationType | null>(current);

  const count = useRef<number>(0);
  const timeoutsRef = useRef<Map<string, number>>(new Map());
  const delayTimeoutRef = useRef<number | null>(null);

  const documentElement = useRef<Document|null>(null);

  const close = useCallback(
    (id: string) => {
      if (!currentRef.current) {
        return;
      }

      if (currentRef.current.id !== id) {
        setQueue((previous) => {
          return previous.filter((notification) => notification.id !== id);
        });
        return timeoutsRef.current.delete(id);
      }

      setClosed(true);

      const timeout = timeoutsRef.current.get(id);
      if (timeout) {
        window.clearTimeout(timeout);
        timeoutsRef.current.delete(id);
      }

      if (delayTimeoutRef.current) {
        window.clearTimeout(delayTimeoutRef.current);
      }

      delayTimeoutRef.current = window.setTimeout(() => {
        setQueue((previuos) => {
          return previuos.filter((notification) => notification.id !== id);
        });
        setCurrent(null);
        delayTimeoutRef.current = null;
      }, delay);
    },
    [currentRef, delay],
  );

  const closeAll = useCallback(() => {
    timeoutsRef.current.forEach(window.clearTimeout);
    if (delayTimeoutRef.current) {
      window.clearTimeout(delayTimeoutRef.current);
    }

    if (current) {
      close(current.id);
    }

    setQueue([]);
    setClosed(true);
  }, [close, current]);

  const showNext = useCallback(() => {
    if (queue.length === 0) {
      return setCurrent(null);
    }

    const next = queue[0];
    setCurrent(next);
    setClosed(false);

    const timeout = window.setTimeout(() => {
      close(next.id);
    }, duration);
    timeoutsRef.current.set(next.id, timeout);
  }, [close, duration, queue]);

  const notificate = useCallback(
    (data: NotificateParameter) => {
      count.current++;
      const id = String(count.current);
      const newNotification: ExtendedNotificationType = {
        id,
        text: data,
        close,
      };

      setQueue((previous) => [...previous, newNotification]);
    },
    [close],
  );

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    if (!current && queue.length > 0) {
      showNext();
    }
  }, [current, queue, showNext]);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutsRef.current.forEach(window.clearTimeout);
      if (delayTimeoutRef.current) {
        window.clearTimeout(delayTimeoutRef.current);
      }
    };
  }, []);

  const Component = (
    <div className="fixed w-0 h-0">
      <Notification
        {...(current || {})}
        close={close}
        closed={closed}
        text={
          current
            ? current.text instanceof Function
              ? current.text({ count: count.current, current, queue })
              : current.text
            : null
        }
      />
    </div>
  );

  useLayoutEffect(() => {
    documentElement.current = document;
  }, []);

  const NotificationComponent = usePortal
    ? documentElement.current
      ? createPortal(Component, documentElement.current.body)
      : null
    : Component;

  return {
    NotificationComponent,
    notifications,
    notificate,
    count,
    queue,
    current,
    closeAll,
    close: close,
  };
};
