import { Wrapper } from "../wrapper";

import { Switch } from "./switch";

type PageProps = {
  size: number;
};

export const Page = ({ size }: PageProps) => {
  return (
    <Wrapper flexDirection="col">
      <Switch radioSize={size} />
    </Wrapper>
  );
};
