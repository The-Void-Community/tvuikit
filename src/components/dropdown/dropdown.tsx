import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { DropdownContext } from "./dropdown.context";
import { useClickOutside } from "./use-outside-click";
import { cn } from "../../utils/cn";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DropdownProps = {
  children: ReactNode;
  onChangeState?: (opened: boolean) => void;
  closeOnClickOutside?: boolean;
  className?: string;
} & Omit<DivProps, "ref">;

export const Dropdown = ({
  children,
  onChangeState,
  closeOnClickOutside = true,
  className,
  ...props
}: DropdownProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggle = useCallback(
    (state?: boolean) => {
      if (state) {
        setOpened(state);
        onChangeState?.(state);
        return;
      }

      setOpened((prev) => {
        const newValue = !prev;
        onChangeState?.(newValue);
        return newValue;
      });
    },
    [setOpened, onChangeState],
  );

  useClickOutside(menuRef, () => {
    if (!closeOnClickOutside) {
      return;
    }
    if (!opened) {
      return;
    }

    toggle(false);
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!opened) {
        return;
      }

      if (event.key === "Escape") {
        toggle(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [opened, toggle]);

  return (
    <DropdownContext.Provider
      value={{ opened, toggle, dropdownRef, menuRef, triggerRef }}
    >
      <div
        ref={dropdownRef}
        className={cn("relative inline-block", className)}
        {...props}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
