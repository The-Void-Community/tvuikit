import type { ReactNode } from "react";
import { button } from "../../variables/colors/button";

type Props = {
  children: ReactNode;
  type: keyof typeof button;
};

export const Button = ({ children, type }: Props) => {
  return (
    <button
      className={[
        "bg-(--fg-card) px-1 py-2 rounded-lg page",
        `color-${type}`,
      ].join(" ")}
    >
      {children}
    </button>
  );
};
