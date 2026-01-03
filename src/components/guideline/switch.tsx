import { Switch as SwitchComponent } from "../switch";

export const Switch = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <SwitchComponent checked />
      <SwitchComponent />
    </div>
  );
};
