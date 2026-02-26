import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { CrossIcon } from "tvicons";
import { cn } from "../../utils";

export type LastNotification = {
  id: string;
  text: ReactNode;
  position: number;
};

export type LastNotificationsProps = {
  notifications: LastNotification[];
  showed: boolean;
  setShowed: (state: boolean) => void;
  close: (id: string) => void;
  closeAll: () => void;
  heightMultipliyer?: number;
  notificationComponentClassName?: string;
  maxHeightTwClass?: string;
  maxWidthTwClass?: string;
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "children"
>;

export const LastNotifications = ({
  showed,
  notifications,
  close,
  setShowed,
  className,
  heightMultipliyer: multipliyer = 4.5,
  maxHeightTwClass: maxHeight = "max-h-100",
  maxWidthTwClass: maxWidth = "max-w-160",
  notificationComponentClassName,
  ...props
}: LastNotificationsProps) => {
  return (
    <div
      className={cn(
        "bg-(--bg-smooth) py-2 px-4 rounded-xl text-base",
        "fixed left-1 bottom-1",
        "transition-all duration-400 ease-out",
        showed
          ? "opacity-100 scale-100 translate-x-0"
          : "opacity-0 scale-95 -translate-x-20 pointer-events-none",
        className,
      )}
      {...props}
    >
      <div className="flex gap-2 items-center">
        <h3>Ваши уведомления</h3>
        <CrossIcon className="cursor-pointer" onClick={() => setShowed(false)} />
      </div>
      <div
        className={cn(
          "transition-[height] duration-400 ease-in-out",
          "w-120 overflow-auto pr-2",
          "flex flex-col gap-2",
          "min-h-30 min-w-40",
          "resize",
          maxHeight, maxWidth,
          notificationComponentClassName,
        )}
        style={{
          height: `calc(var(--spacing) * ${notifications.length <= 3 ? 3 : notifications.length} * ${multipliyer})`,
        }}
      >
        {notifications.map((element, index) => (
          <div
            className={cn(
              "bg-(--bg-card) py-1 px-2 rounded-lg",
              "flex gap-2 w-full justify-between",
            )}
            key={index}
          >
            <span>{element.position}.</span>
            <div>{element.text}</div>
            <CrossIcon className="cursor-pointer" onClick={() => close(element.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
