"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

import { Checkmark } from "../../assets/checker.svg";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type CheckboxProps = {
  inputName?: string;
  inputId?: string;
  size?: number;
  checked?: boolean;
} & DivProps;

const PADDING_OFFSET = 4;
const BORDER_OFFSET = 1;
const OFFSET = (PADDING_OFFSET + BORDER_OFFSET) * 2;

export const Checkbox = ({
  inputName,
  inputId,
  className,
  style,
  onClick,
  size = 24,
  checked = false,
  ...props
}: CheckboxProps) => {
  const [actived, setActived] = useState<boolean>(checked);

  const ref = useRef<SVGSVGElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const styleSize = `${size + OFFSET}px`;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.checked = actived;
    }

    if (actived) {
      ref.current.style.display = style?.display || "block";
    } else {
      ref.current.style.opacity = "0";
    }

    setTimeout(() => {
      if (!ref.current) {
        return;
      }

      if (actived) {
        ref.current.style.opacity = "1";
      } else {
        ref.current.style.display = "none";
      }
    }, 50);
  }, [actived, style?.display]);

  return (
    <div
      className={[
        "bg-(--bg-card) border-(--fg-mini-text) border-1 rounded-[100%] p-[4px] cursor-pointer",
        className,
      ].join(" ")}
      style={{
        height: styleSize,
        width: styleSize,
        ...style,
      }}
      onClick={(event) => {
        onClick?.(event);
        setActived(!actived);
      }}
      {...props}
    >
      <Checkmark className="duration-300" ref={ref} size={size} />

      <input
        ref={inputRef}
        name={inputName}
        id={inputId}
        type="checkbox"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Checkbox;
