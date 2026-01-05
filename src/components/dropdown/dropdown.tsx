import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { DropdownContext } from './dropdown.context';
import { useClickOutside } from './use-outside-click';

interface DropdownProps {
  children: ReactNode;
  onOpenChange?: (isOpen: boolean) => void;
  closeOnClickOutside?: boolean;
  className?: string;
}

export const Dropdown = ({
  children,
  onOpenChange,
  closeOnClickOutside = true,
  className,
}: DropdownProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggle = useCallback((state?: boolean) => {
    if (state) {
      setOpened(state);
      onOpenChange?.(state);
      return;
    }

    setOpened((prev) => {
      const newValue = !prev;
      onOpenChange?.(newValue);
      return newValue;
    });
  }, [setOpened, onOpenChange]);

  useClickOutside(dropdownRef, () => {
    if (closeOnClickOutside && opened) {
      toggle(false);
    }
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (!opened) {
        return;
      }

      if (e.key === 'Escape') {
        toggle(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [opened, toggle]);

  return (
    <DropdownContext.Provider value={{ opened, toggle, dropdownRef, triggerRef }}>
      <div ref={dropdownRef} className={`relative inline-block ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};