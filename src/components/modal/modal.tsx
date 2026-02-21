import type { DetailedHTMLProps, HTMLAttributes, Key, MouseEvent } from "react";
import { createPortal } from "react-dom";

import { v4 as uuid } from "uuid";
import { cn } from "../../utils/cn";

export type ModalProps = {
  container: Element | DocumentFragment;
  portalKey?: Key | null;
  zIndex?: number;
  onModalElementClick: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Modal = ({
  container,
  children,
  portalKey,
  className = "",
  zIndex,
  style,
  id,
  onClick,
  onModalElementClick,
  ...props
}: ModalProps) => {
  const zIndexTailwind = zIndex ? "" : "z-100";
  const modalId = id || uuid();

  return createPortal(
    <div
      id={modalId}
      className={cn("fixed top-0 h-screen w-screen", zIndexTailwind, className)}
      onClick={(event) => {
        onClick?.(event);
        if ((event.target as HTMLElement).id === modalId) {
          onModalElementClick(event);
        }
      }}
      {...props}
      style={{
        zIndex: zIndex,
        ...style,
      }}
    >
      {children}
    </div>,
    container,
    portalKey,
  );
};

export default Modal;
