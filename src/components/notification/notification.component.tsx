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
  overwriteClassName?: boolean;
  disablePositionAndInset?: boolean;
  id?: string;
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
  ...props
}: NotificationProps) => {
  return (
    <div
      className={cn(
        !disablePositionAndInset && "fixed left-1/2 -translate-x-1/2 top-3/4",
        "bg-(--bg-card) text-base rounded-lg py-2 px-5",
        "flex gap-3 items-center shadow-lg",
        "transition-all duration-500 ease-out",
        closed
          ? "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          : "opacity-100 scale-100 translate-y-0",
        className,
      )}
      {...props}
    >
      {typeof text === "string" ? <span>{text}</span> : text}
      <X
        className="cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => close(id)}
      />
    </div>
  );
};
