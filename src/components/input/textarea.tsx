import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      placeholder="write here..."
      {...props}
      className={cn(
        "bg-(--bg-card) px-4 py-2 rounded-lg min-w-30 max-w-150 min-h-10 resize",
        className,
      )}
    />
  );
};

export default Textarea;
