"use client";

import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

import { Checkmark } from "./checker.svg";
import { Round } from "./round.svg";

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type CheckbuttonProps = {
  inputName?: string;
  inputId?: string;
  size?: number;
  checked?: boolean;
  type: "checkbox" | "radio";
} & DivProps;

const PADDING_OFFSET = 8;
const BORDER_OFFSET = 1;
const OFFSET = (PADDING_OFFSET + BORDER_OFFSET) * 2;

export const Checkbutton = ({
  inputName,
  inputId,
  className,
  style,
  onClick,
  size = 24,
  checked = false,
  type,
  ...props
}: CheckbuttonProps) => {
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
    }, 100);
  }, [actived, style?.display]);

  return (
    <div
      className={[
        "bg-(--bg-card) border-(--fg-mini-text) border-1 p-[8px] cursor-pointer",
        type === "checkbox" ? "rounded-[20%]" : "rounded-[100%]",
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
      {
        type === "checkbox"
          ? <Checkmark className="duration-300" ref={ref} size={size} />
          : <Round className="duration-300" ref={ref} size={size} />
      }

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

export default Checkbutton;
