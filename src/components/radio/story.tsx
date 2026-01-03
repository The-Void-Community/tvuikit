import { Wrapper } from "../wrapper";

import { Radio } from "./radio";

type PageProps = {
  size: number;
};

export const Page = ({ size }: PageProps) => {
  return (
    <Wrapper flexDirection="col">
      <Radio size={size} />
    </Wrapper>
  );
};
