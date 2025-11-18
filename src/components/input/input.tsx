import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ className, ...props }: InputProps ) => {
  return (
    <input
      placeholder="input here..."
      {...props}
      className={[
        className || "",
        "bg-(--bg-card) px-4 py-2 rounded-lg min-w-30 max-w-60",
      ].join(" ")}
    />
  )
};

export default Input;
