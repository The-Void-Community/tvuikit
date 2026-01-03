import { BUTTONS } from "../../variables/colors";
import { Button as ButtonComponent } from "../button";

export const Button = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {Object.keys(BUTTONS).map((key) => (
        <ButtonComponent key={key} variant={key as keyof typeof BUTTONS}>
          Button {key}
        </ButtonComponent>
      ))}
      <ButtonComponent disabled>Button Disabled</ButtonComponent>
    </div>
  );
};

export default Button;
