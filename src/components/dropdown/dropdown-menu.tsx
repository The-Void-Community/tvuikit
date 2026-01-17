import {
  useCallback,
  useLayoutEffect,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";
import { createPortal } from "react-dom";

import { useDropdown } from "./dropdown.context";
import { cn } from "../../utils/cn";

export type DropdownMenuProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const DropdownMenu = ({
  children,
  className,
  style,
  ...props
}: DropdownMenuProps) => {
  const {
    opened,
    menuRef,
    triggerRef,
    defaultHorizontalPosition,
    defaultVertialPosition,
    openToOtherSide,
    menuAlign
  } = useDropdown();

  const correctPosition = useCallback(
    (align: "x" | "y") => {
      const windowProperty = align === "x" ? "innerWidth" : "innerHeight";
      const positionScale = align === "x" ? "width" : "height";
      const inverseAlign = align === "x" ? "right" : "bottom";

      return (position: DOMRect, triggerHeight: number) => {
        if (!menuRef.current) {
          return;
        }

        if (position[inverseAlign] < window[windowProperty]) {
          return;
        }

        const beyondBorder = position[inverseAlign] - window[windowProperty];
        if (openToOtherSide) {
          const vertical = align === "y" ? triggerHeight : 0;
          menuRef.current.style[align] =
            `${position[align] - beyondBorder - vertical}px`;
          return;
        }

        const newPosition = position[align] - position[positionScale];
        if (newPosition >= 0) {
          menuRef.current.style[align] = `${newPosition}px`;
          return;
        }

        menuRef.current.style[align] = `${position[align] - beyondBorder}px`;
      };
    },
    [menuRef, openToOtherSide],
  );

  useLayoutEffect(() => {
    if (!menuRef.current || !triggerRef.current || !opened) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const position = menuRef.current.getBoundingClientRect();

    const multipliyer = menuAlign === "center"
      ? triggerRect.width / 2
      : menuAlign === "right"
        ? triggerRect.width
        : 0

    const leftOffset = triggerRect.left + window.scrollX + multipliyer;
    const topOffset = triggerRect.top + triggerRect.height + window.scrollY;

    if (defaultHorizontalPosition === "right") {
      menuRef.current.style.left = `${leftOffset}px`;
    } else {
      menuRef.current.style.left = `${leftOffset - position.width}px`;
    }

    if (defaultVertialPosition === "bottom") {
      menuRef.current.style.top = `${topOffset}px`;
    } else {
      menuRef.current.style.top = `${topOffset - position.height - triggerRect.height}px`;
    }

    const newPosition = menuRef.current.getBoundingClientRect();

    correctPosition("x")(newPosition, triggerRect.height);
    correctPosition("y")(newPosition, triggerRect.height);
  }, [opened, correctPosition, menuRef, triggerRef, defaultHorizontalPosition, defaultVertialPosition, menuAlign]);

  if (!opened) {
    return null;
  }

  const content = (
    <div
      ref={menuRef}
      className={cn(
        "bg-(--bg-smooth-light) absolute z-100 rounded-lg shadow-lg",
        "flex flex-col min-w-40",
        className,
      )}
      style={{
        ...style,
      }}
      role="menu"
      aria-orientation="vertical"
      {...props}
    >
      {children}
    </div>
  );

  return createPortal(content, document.body);
};
