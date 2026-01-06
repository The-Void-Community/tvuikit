import { cn } from "../../utils/cn";

export type LinearProgressProps = {
  value: number;
  height?: number;
  showPercentage?: boolean;
  className?: string;
};

const borderRadius = 8;
const MAX = 100;

export const LinearProgress = ({
  value,
  height = 24,
  showPercentage = false,
  className,
}: LinearProgressProps) => {
  const clampedValue = Math.max(0, Math.min(value, MAX));
  const percentage = (clampedValue / MAX) * 100;
  const roundedPercentage = Math.round(percentage);

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
          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300"
          style={{
            width: `${percentage}%`,
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

        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-(--fg-card) py-1 px-3 rounded text-(--fg-text)">
              {roundedPercentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinearProgress;
