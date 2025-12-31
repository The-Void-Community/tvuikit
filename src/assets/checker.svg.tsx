import type { Ref } from "react";

export type CheckmarkProps = {
  size: number | string;
  ref: Ref<SVGSVGElement | null>;
  className: string;
};

export const Checkmark = ({ size, ref, className }: CheckmarkProps) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(4 6)">
        <path
          d="M1 6L6 11L16 1"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
