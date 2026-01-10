import { Round } from "../../assets/round.svg"
import { ANIMATIONS } from "../../variables/animations/all"

export type EllipsisProgressProps = {
  type?: Lowercase<keyof typeof ANIMATIONS>;
  size?: number;
  elements?: number;
  duration?: number;
  multiplier?: number;
}

export const EllipsisProgress = ({
  type = "pulse",
  size = 6,
  elements = 3,
  duration = 1,
  multiplier = 0.1,
}: EllipsisProgressProps) => {
  const additionalClass = type === "orbit"
    ? "absolute"
    : "";

  if (elements <= 0) {
    throw new Error("Elements can not be zero");
  }

  if (elements > 12) {
    throw new Error("Element can not be more than 12");
  }

  return (
    <div className="flex flex-row gap-2">
      {new Array(elements).fill(elements).map((count, index) => (
        <Round key={count+index} size={size} fill="var(--bg-smooth)" style={{
          animation: `var(--animate-ellipse-${type}-1)`,
          animationDuration: duration + "s",
          animationDelay: `${multiplier * index}s`,
        }} className={additionalClass} />
      ))}
    </div>
  );
}