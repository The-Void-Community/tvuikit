import { Wrapper } from "../wrapper";

import { Button } from "./button";
import { Text } from "./text";
import { Checkbox } from "./checkbox";
import { Switch } from "./switch";

export const Page = () => {
  return (
    <Wrapper>
      <Text />
      <Button />
      <Switch />
      <Checkbox />
    </Wrapper>
  );
};
