import type {
  ChangeEvent,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "../../utils/cn";

export type TextareaProps = {
  overwriteClassName?: boolean;
  minimalRowsHeight?: number;
  maximalRowsHeight?: number;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea = ({
  className,
  overwriteClassName = false,
  minimalRowsHeight = 1,
  maximalRowsHeight = 10,
  onChange,
  ...props
}: TextareaProps) => {
  const finalClassName = overwriteClassName
    ? className
    : cn(
        "bg-(--bg-card) px-4 py-2 rounded-lg min-w-30 max-w-150 min-h-10 resize",
        "focus:outline-0",
        className,
      );

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget;
    element.style.height = "auto";

    const lineHeight = parseInt(getComputedStyle(element).lineHeight);
    const newHeight = Math.min(
      Math.max(element.scrollHeight, minimalRowsHeight * lineHeight),
      maximalRowsHeight * lineHeight,
    );
    element.style.height = `${newHeight}px`;

    onChange?.(event);
  };

  return (
    <textarea
      placeholder="write here..."
      className={finalClassName}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Textarea;
