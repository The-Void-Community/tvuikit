import type { ReactNode } from "react";
import { Activity } from "react";

export type AcitveProps = {
  actived: boolean;
  children: ReactNode;
  name?: string;
};

export const Active = ({ actived, children, name }: AcitveProps) => {
  return (
    <Activity
      name={name}
      mode={ actived ? "visible" : "hidden"}
    >
      {children}
    </Activity>
  )
}