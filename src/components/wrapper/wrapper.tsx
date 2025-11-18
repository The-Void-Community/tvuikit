import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type WrapperProps = {
  flexDirection?: "col" | "row"
} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Wrapper = ({ flexDirection = "row", className, ...props }: WrapperProps) => {
  const direction = flexDirection === "col"
    ? "flex-col"
    : "flex-row";

  return (
    <div
      {...props}
      className={[
        className || "",
        direction,
        "bg-(image:--image-bg) flex gap-8 px-12 py-4 rounded-lg page",
      ].join(" ")}
    />
  );
};

export default Wrapper;
