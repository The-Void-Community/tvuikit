import type { RefObject } from "react";
import { createContext, useContext } from "react";

type DropdownContextType = {
  opened: boolean;
  toggle: (state?: boolean) => void;
  dropdownRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export const DropdownContext = createContext<DropdownContextType | null>(null);
export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within DropdownProvider");
  }
  
  return context;
};
