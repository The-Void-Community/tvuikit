import type { ReactNode } from "react";

import { Wrapper } from "../wrapper/wrapper";
import { Button } from "./button";
import { BUTTON_VARIANTS } from "../../variables/colors/button";

export type PageProps = {
  buttonChildren: ReactNode;
  buttonType: keyof typeof BUTTON_VARIANTS;
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
