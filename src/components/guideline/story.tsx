import { Wrapper } from "../wrapper";

import { Button } from "./button";
import { Text } from "./text";
import { Checkbox } from "./checkbox";
import { Radiocheckbox } from "./radio-checkbox";

export const Page = () => {
  return (
    <Wrapper>
      <Text />
      <Button />
      <Radiocheckbox />
      <Checkbox />
    </Wrapper>
  );
};
