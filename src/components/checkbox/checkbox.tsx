"use client";

import type { CheckbuttonProps } from "../../assets/checkbutton";
import { Checkbutton } from "../../assets/checkbutton";

export type CheckboxProps = Omit<CheckbuttonProps, "type">;

export const Checkbox = (props: CheckboxProps) => {
  return <Checkbutton type="checkbox" {...props} />;
};

export default Checkbox;
