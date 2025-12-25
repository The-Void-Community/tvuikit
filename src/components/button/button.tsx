import type { ReactNode } from "react";
import type { BUTTON_VARIANTS } from "../../variables/colors/button";

type Props = {
  children: ReactNode;
  variant: keyof typeof BUTTON_VARIANTS;
};

export const Button = ({ children, variant }: Props) => {
  return (
    <button
      className={[
        "bg-(--fg-card) px-1 py-2 rounded-lg page",
        `color-${variant}`,
      ].join(" ")}
    >
      {children}
    </button>
  );
};
