import type { ReactNode } from "react";
import type { BUTTONS } from "../../variables/colors";

export type ButtonProps = {
  children: ReactNode;
  variant: keyof typeof BUTTONS;
};

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={[
        "bg-(--fg-card) px-4 py-2 rounded-lg page",
        `color-${variant}`,
      ].join(" ")}
    >
      {children}
    </button>
  );
};
