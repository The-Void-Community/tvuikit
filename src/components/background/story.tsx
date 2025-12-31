import Background from "./background";

export type PageProps = {
  imageVar: string;
  height: string;
  width: string;
};

export const Page = ({ imageVar, ...props }: PageProps) => {
  return <Background style={{ ...props }} imageVar={imageVar} />;
};
