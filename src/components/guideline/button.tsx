import { BUTTON_VARIANTS } from "../../variables/colors/button";
import { Button } from "../button/button";

export const ButtonGuildline = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {Object.keys(BUTTON_VARIANTS).map((key) => (
        <Button key={key} variant={key as keyof typeof BUTTON_VARIANTS}>
          Button {key}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGuildline;
