/* eslint-disable react-hooks/refs */
import { useCallback, useLayoutEffect, type DetailedHTMLProps, type HTMLAttributes } from "react";
import { createPortal } from "react-dom";

import { useDropdown } from "./dropdown.context";
import { cn } from "../../utils/cn";

export type DropdownMenuProps = {
  openToOtherSide?: boolean;
} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const DropdownMenu = ({
  children,
  className,
  style,
  openToOtherSide = true,
  ...props
}: DropdownMenuProps) => {
  const { opened, menuRef, triggerRef } = useDropdown();

  const correctPosition = useCallback((align: "left"|"top") => {
    const windowProperty = align === "left" ? "innerWidth" : "innerHeight";
    const positionScale = align === "left" ? "width" : "height";
    const inverseAlign = align === "left" ? "right" : "bottom";

    return (position: DOMRect) => {
      if (!menuRef.current) {
        return
      }

      if (position[inverseAlign] < window[windowProperty]) {
        return;
      }

      const beyondBorder = position[inverseAlign] - window[windowProperty];
      if (openToOtherSide) {
        menuRef.current.style[align] = `${position[align] - beyondBorder}px`;
        return;
      }

      const newPosition = position[align] - position[positionScale];
      if (newPosition >= 0) {
        menuRef.current.style[align] = `${newPosition}px`;
        return; 
      }
      
      menuRef.current.style[align] = `${position[align] - beyondBorder}px`;
    }
  }, [menuRef, openToOtherSide]);

  useLayoutEffect(() => {
    if (!menuRef.current || !opened) {
      return;
    }

    const position = menuRef.current.getBoundingClientRect();

    correctPosition("left")(position);
    correctPosition("top")(position);
  }, [opened, correctPosition, menuRef]);

  if (!opened || !triggerRef.current) {
    return null;
  }

  const triggerRect = triggerRef.current.getBoundingClientRect();
  
  const content = (
    <div
      ref={menuRef}
      className={cn(
        "bg-(--bg-smooth-light) absolute z-100 rounded-lg shadow-lg",
        "flex flex-col min-w-40",
        className,
      )}
      style={{
        left: `${triggerRect.left + triggerRect.width / 2 + window.scrollX}px`,
        top: `${triggerRect.top + triggerRect.height + window.scrollY}px`,
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