import { Wrapper } from "../wrapper";

import { Radiocheckbox } from "./radio-checkbox";

type PageProps = {
  size: number;
};

export const Page = ({ size }: PageProps) => {
  return (
    <Wrapper flexDirection="col">
      <Radiocheckbox radioSize={size} />
    </Wrapper>
  );
};
