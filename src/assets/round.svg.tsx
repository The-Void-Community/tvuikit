import type { Ref, SVGProps } from "react";

export type RoundProps = {
  size: number | string;
  ref?: Ref<SVGSVGElement | null>;
  className?: string;
  fill?: string;
} & SVGProps<SVGSVGElement>;

export const Round = ({
  size,
  ref,
  className,
  fill = "#EDEDED",
  ...props
}: RoundProps) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6" cy="6" r="6" fill={fill} />
    </svg>
  );
};
