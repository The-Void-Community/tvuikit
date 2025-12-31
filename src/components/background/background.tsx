import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type BackgroundProps = {
  imageVar: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Background = ({ style, imageVar, className = "", ...props }: BackgroundProps) => {
  const variable = `bg-(image:${imageVar})`;

  return (
    <div
      {...props}
      className={[
        className,
        variable
      ].join(" ")}
      style={{
        ...style,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}

export default Background;
