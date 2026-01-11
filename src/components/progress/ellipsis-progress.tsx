import { ReactNode } from "react";
import { Round } from "../../assets/round.svg";
import { ANIMATIONS } from "../../variables/animations/all";

export type EllipsisProgressProps = {
  type?: Lowercase<keyof typeof ANIMATIONS>;
  size?: number;
  elements?: number;
  duration?: number;
  delay?: number;
  animation?: string;
  color?: string;
  container?: <T extends { children: ReactNode }>(props: T) => ReactNode,
  autoPaddingDisabled?: boolean;
};

export const EllipsisProgress = ({
  type = "pulse",
  size = 6,
  elements = 3,
  duration = 1,
  color = "var(--bg-smooth)",
  animation: animate,
  delay: multiplier = 0.1,
  container: Container,
  autoPaddingDisabled = false,
}: EllipsisProgressProps) => {
  const additionalClass = type === "orbit" ? "absolute" : "";
  const additionalStyle = autoPaddingDisabled
    ? {}
    : { padding: size * 2 }; 
  const animation = animate ? `var(${animate})` : `var(--animate-ellipse-${type})`;

  if (elements <= 0) {
    throw new Error("Elements can not be zero");
  }

  if (elements > 12) {
    throw new Error("Element can not be more than 12");
  }

  const rounds = new Array(elements).fill(elements).map((count, index) => (
    <Round
      key={count + index}
      size={size}
      fill={color}
      style={{
        animation,
        animationDuration: duration + "s",
        animationDelay: `${multiplier * index}s`,
      }}
      className={additionalClass}
    />
  ));

  if (Container) {
    return (
      <Container>
        {rounds}
      </Container>
    )
  }

  return (
    <div className="flex flex-row gap-2 w-fit h-fit" style={additionalStyle}>
      {rounds}
    </div>
  );
};
