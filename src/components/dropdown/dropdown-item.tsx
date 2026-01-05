import type { MouseEvent } from "react";

import { useDropdown } from "./dropdown.context";
import { Button, ButtonProps } from "../button";
import { cn } from "../../utils/cn";

export type DropdownItemProps = ButtonProps;
export const DropdownItem = ({
  children,
  onClick,
  className,
  variant,
  ...props
}: DropdownItemProps) => {
  const { toggle } = useDropdown();

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    if (props.disabled) {
      return;
    }

    onClick?.(event);
    toggle(false);
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "px-4 py-2 w-full text-left rounded-lg page duration-300",
        props.disabled
          ? "text-(--fg-mini-text)"
          : `color-${variant} cursor-pointer`,
        "hover:bg-(--fg-mini-text-30)",
        className,
      )}
      overwriteClassName
      role="menuitem"
      {...props}
    >
      {children}
    </Button>
  );
};
