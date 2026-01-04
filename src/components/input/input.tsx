import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      placeholder="input here..."
      {...props}
      className={cn(
        "bg-(--bg-card) px-4 py-2 rounded-lg min-w-30 max-w-60",
        className,
      )}
    />
  );
};

export default Input;
