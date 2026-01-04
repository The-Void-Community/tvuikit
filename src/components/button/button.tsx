import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import type { BUTTONS } from "../../variables/colors";

import { cn } from "../../utils/cn";

export type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof BUTTONS;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  const booleanClassNames = {
    diabled: props.disabled
      ? "bg-(--bg-smooth) text-(--fg-mini-text)"
      : `bg-(--bg-card) color-${variant} cursor-pointer`,

    "hover:disabled": props.disabled ? "" : "hover:px-5 hover:py-3",

    "active:disabled": props.disabled
      ? ""
      : "active:px-3 active:py-1 active:bg-(--fg-component) active:opacity-[0.7]",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 w-fit rounded-lg page duration-200",
        booleanClassNames.diabled,
        booleanClassNames["hover:disabled"],
        booleanClassNames["active:disabled"],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
