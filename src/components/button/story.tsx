import type { ReactNode } from "react";

import { Wrapper } from "../wrapper/wrapper";
import { Button } from "./button";
import { button } from "../../variables/colors/button";

export type PageProps = {
  buttonChildren: ReactNode;
  buttonType: keyof typeof button;
};

export const Page = ({
  buttonChildren: children,
  buttonType: type,
}: PageProps) => {
  return (
    <Wrapper>
      <Button {...{ children, type }} />
    </Wrapper>
  );
};
