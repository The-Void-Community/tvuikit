import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type WrapperProps = {
  flexDirection?: "col" | "row";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Wrapper = ({
  flexDirection = "row",
  className,
  ...props
}: WrapperProps) => {
  const direction = flexDirection === "col" ? "flex-col" : "flex-row";

  return (
    <div
      {...props}
      className={cn(
        "bg-(image:--image-bg) flex gap-8 px-12 py-4 rounded-lg page",
        direction,
        className,
      )}
    />
  );
};

export default Wrapper;
