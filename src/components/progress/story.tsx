import { Wrapper } from "../wrapper";

import { CircleProgress } from "./circle-progress";
import { LinearProgress } from "./linear-progress";

type PageProps = {
  size: number;
};

export const Page = ({ size }: PageProps) => {
  return (
    <Wrapper flexDirection="col">
      <CircleProgress size={size} />
      <LinearProgress height={size} value={80} />
    </Wrapper>
  );
};
