"use client";

import type { CheckbuttonProps } from "../../assets/checkbutton";
import { Checkbutton } from "../../assets/checkbutton";

export type RadioProps = Omit<CheckbuttonProps, "type">;

export const Radio = (props: RadioProps) => {
  return <Checkbutton type="radio" {...props} />;
};

export default Radio;
