import type { ReactNode } from "react";
import { Activity } from "react";

export type AcitveProps = {
  children: ReactNode;
  name?: string;
  actived: boolean;
  disableReactActivity?: boolean;
};

export const Active = ({
  actived,
  children,
  name,
  disableReactActivity = false,
}: AcitveProps) => {
  if (disableReactActivity) {
    return actived ? children : null;
  }

  return (
    <Activity name={name} mode={actived ? "visible" : "hidden"}>
      {children}
    </Activity>
  );
};
