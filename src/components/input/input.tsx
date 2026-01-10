import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type InputProps = {
  overwriteClassName?: boolean
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ className, overwriteClassName, ...props }: InputProps) => {
  const finalClassName = overwriteClassName
    ? className
    : cn(
      "bg-(--bg-card) px-4 py-2 rounded-lg min-w-30 max-w-60",
      "focus:outline-0",
      className,
    );

  return (
    <input
      placeholder="input here..."
      {...props}
      className={finalClassName}
    />
  );
};

export default Input;
