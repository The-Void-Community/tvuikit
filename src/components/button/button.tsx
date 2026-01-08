import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import type { BUTTONS } from "../../variables/colors";

import { cn } from "../../utils/cn";

export type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof BUTTONS;
  overwriteClassName?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  variant = "default",
  children,
  className,
  overwriteClassName = false,
  ...props
}: ButtonProps) => {
  const booleanClassNames = {
    diabled: props.disabled
      ? "bg-(--bg-smooth) text-(--fg-mini-text)"
      : `bg-(--bg-card) color-${variant} cursor-pointer`,

    "hover:disabled": props.disabled ? "" : "hover:transform-[scale(1.1)]",

    "active:disabled": props.disabled
      ? ""
      : "active:transform-[scale(0.9)] active:bg-(--fg-component) active:opacity-[0.7]",
  };

  const finalClassName = overwriteClassName
    ? className
    : cn(
        "px-4 py-2 w-fit rounded-lg page duration-200",
        booleanClassNames.diabled,
        booleanClassNames["hover:disabled"],
        booleanClassNames["active:disabled"],
        className,
      );

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
