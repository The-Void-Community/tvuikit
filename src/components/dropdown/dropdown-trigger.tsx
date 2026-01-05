import { useDropdown } from './dropdown.context';
import { Button, ButtonProps } from '../button';

export type DropdownTriggerProps = ButtonProps;

export const DropdownTrigger = ({
  children,
  className,
  ...props
}: DropdownTriggerProps) => {
  const { toggle, opened, triggerRef } = useDropdown();

  return (
    <Button
      ref={triggerRef}
      onClick={() => toggle()}
      aria-expanded={opened}
      aria-haspopup="true"
      {...props}
      className={className}
    >
      {children}
    </Button>
  );
};