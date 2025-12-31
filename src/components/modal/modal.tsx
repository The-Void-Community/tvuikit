import type { DetailedHTMLProps, HTMLAttributes, Key } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  container: Element | DocumentFragment;
  portalKey?: Key | null;
  zIndex?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Modal = ({
  container,
  children,
  portalKey,
  className = "",
  zIndex,
  style,
  ...props
}: ModalProps) => {
  const zIndexTailwind = zIndex ? "" : "z-100";

  return createPortal((
    <div className={[
      "fixed top-0 h-screen w-screen",
      zIndexTailwind,
      className,
    ].join(" ")} {...props} style={{
      zIndex: zIndex,
      ...style
    }}>
      {children}
    </div>
  ), container, portalKey);
};

export default Modal;
