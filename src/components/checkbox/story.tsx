import { Wrapper } from "../wrapper";

import { Checkbox } from "./checkbox";

type PageProps = {
  size: number
}

export const Page = ({ size }: PageProps) => {
  return (
    <Wrapper flexDirection="col">
      <Checkbox size={size} />
    </Wrapper>
  );
};
