import { useDropdown } from "./dropdown.context";
import { Button, ButtonProps } from "../button";

export type DropdownTriggerProps = ButtonProps;

export const DropdownTrigger = ({
  children,
  className,
  ...props
}: DropdownTriggerProps) => {
  const { toggle, opened, triggerRef } = useDropdown();

  const handleClick = () => {
    toggle();
  };

  return (
    <Button
      ref={triggerRef}
      onClick={handleClick}
      aria-expanded={opened}
      aria-haspopup="true"
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};
