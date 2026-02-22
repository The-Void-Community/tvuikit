import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import { X } from "tvicons";

import { cn } from "../../utils";

export type NotificationProps = (
  | {
      text?: ReactNode | null | undefined;
      closed?: true;
    }
  | {
      text: ReactNode;
      closed?: false;
    }
) & {
  close: (id: string) => void;
  closeAll?: () => void;
  showAll?: () => void;
  overwriteClassName?: boolean;
  disablePositionAndInset?: boolean;
  id?: string;
  count?: number;
  openListButtonVisible?: boolean;
} & Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "children" | "id"
  >;

export const Notification = ({
  text,
  closed = false,
  className = "",
  disablePositionAndInset = false,
  id = uuid(),
  close,
  closeAll,
  showAll,
  openListButtonVisible = false,
  count,
  ...props
}: NotificationProps) => {
  const CloseAllElement =
    count && closeAll ? (
      <div
        className={cn(
          "bg-(--bg-card) rounded-lg py-1 px-5",
          "flex gap-1",
          "w-fit h-fit text-mini",
          "noselect",
        )}
      >
        <span>Уведомлений: {count}</span>
        <span onClick={closeAll} className="cursor-pointer">
          Закрыть всё? ×
        </span>
      </div>
    ) : null;

  const List =
    openListButtonVisible && showAll ? (
      <div className={cn("bg-(--bg-card) rounded-lg py-1 px-5", "text-mini")}>
        <span className="cursor-pointer" onClick={showAll}>
          Открыть список
        </span>
      </div>
    ) : null;

  return (
    <div
      className={cn(
        !disablePositionAndInset && "fixed left-1/2 -translate-x-1/2 top-3/4",
        "transition-all duration-500 ease-out",
        "flex flex-col gap-2",
        closed
          ? "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          : "opacity-100 scale-100 translate-y-0",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-(--bg-card) text-base rounded-lg py-2 px-5",
          "flex gap-3 items-center shadow-lg",
        )}
      >
        {typeof text === "string" ? <span>{text}</span> : text}
        <X
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => close(id)}
        />
      </div>
      <div className="flex justify-center items-center gap-1 self-end">
        {List}
        {CloseAllElement}
      </div>
    </div>
  );
};
