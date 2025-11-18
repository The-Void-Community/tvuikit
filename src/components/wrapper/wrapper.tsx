import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type WrapperProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Wrapper = ({ className, ...props }: WrapperProps) => {
  return (
    <div
      {...props}
      className={[
        "bg-(image:--image-bg) flex flex-row gap-8 px-12 py-4 rounded-lg page",
        className,
      ].join(" ")}
    />
  );
};

export default Wrapper;
