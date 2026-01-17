import type { RefObject } from "react";
import { createContext, useContext } from "react";

type DropdownContextType = {
  opened: boolean;
  toggle: (state?: boolean) => void;
  dropdownRef: RefObject<HTMLDivElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  openToOtherSide: boolean;
  menuAlign: "left" | "center" | "right";
  defaultHorizontalPosition: "left" | "right";
  defaultVertialPosition: "top" | "bottom";
};

export const DropdownContext = createContext<DropdownContextType | null>(null);
export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within DropdownProvider");
  }

  return context;
};
