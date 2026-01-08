import { cn } from "../../utils/cn";

import { borderRadius } from "./linear-progress";

export type IndeterminateLinearProgressProps = {
  width: number;
  height?: number;
  className?: string;
};

export const IndeterminateLinearProgress = ({
  className,
  height,
}: IndeterminateLinearProgressProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full" style={{ height }}>
        <svg
          width="100%"
          height={height}
          style={{ borderRadius }}
          viewBox={`0 0 100 ${height}`}
          preserveAspectRatio="none"
          className="absolute top-0 left-0"
        >
          <rect width="100" height={height} fill={"var(--bg-smooth-ce)"} />
        </svg>

        <div
          className="animate-(--animate-indeterminate-3s) h-full overflow-hidden transition-all duration-300"
          style={{
            width: `20%`,
            borderRadius,
          }}
        >
          <svg
            width="100%"
            height={height}
            viewBox={`0 0 100 ${height}`}
            preserveAspectRatio="none"
          >
            <rect
              width="100"
              height={height}
              fill={"var(--fg-text)"}
              style={{ borderRadius }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
