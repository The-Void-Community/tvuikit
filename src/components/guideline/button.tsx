import { BUTTONS } from "@/variables/colors";
import { Button } from "@/components/button";

export const ButtonGuildline = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {Object.keys(BUTTONS).map((key) => (
        <Button key={key} variant={key as keyof typeof BUTTONS}>
          Button {key}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGuildline;
