import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { createPortal } from 'react-dom';

import { useDropdown } from './dropdown.context';
import { cn } from '../../utils/cn';

export type DropdownMenuProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const DropdownMenu = ({
  children,
  className,
  style,
  ...props
}: DropdownMenuProps) => {
  const { opened, triggerRef } = useDropdown();

  // eslint-disable-next-line react-hooks/refs
  if (!triggerRef.current) {
    return null;
  }
  
  // eslint-disable-next-line react-hooks/refs
  const position = triggerRef.current.getBoundingClientRect();
  
  const content = (
    <div
      className={cn(
        "bg-(--bg-smooth-light) absolute z-100 rounded-lg",
        "flex flex-col min-w-40",
        className
      )}
      style={{
        left: position.left + position.width/2 + window.scrollX,
        top: position.top + position.height + window.scrollY,
        ...style
      }}
      role="menu"
      aria-orientation="vertical"
      {...props}
    >
      {children}
    </div>
  );

  if (!opened) {
    return null;
  }

  return createPortal(content, document.body);
};