import type { ReactNode } from "react";

import { Wrapper } from "../wrapper";
import { BUTTONS } from "../../variables/colors";

import { Button } from "./button";

export type PageProps = {
  buttonChildren: ReactNode;
  buttonType: keyof typeof BUTTONS;
};

export const Page = ({
  buttonChildren: children,
  buttonType: type,
}: PageProps) => {
  return (
    <Wrapper>
      <Button {...{ children, variant: type }} />
    </Wrapper>
  );
};
