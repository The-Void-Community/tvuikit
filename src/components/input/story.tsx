import { Wrapper } from "../wrapper";

import { Input } from "./input";
import { Textarea } from "./textarea";

export const Page = () => {
  return (
    <Wrapper flexDirection="col">
      <Input />
      <Textarea />
    </Wrapper>
  );
};
