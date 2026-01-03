import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { useState } from "react";

export type RadiocheckboxProps = {
  inputName?: string;
  inputId?: string;
  radioSize?: number;
  dangerousDisableError?: boolean;
  checked?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const MINIMAL_RADIO_SIZE = 12;
const PADDING_OFFSET = 8;

export const Switch = ({
  inputId,
  inputName,
  dangerousDisableError = false,
  style,
  className,
  onClick,
  radioSize = 24,
  checked = false,
  ...props
}: RadiocheckboxProps) => {
  const [actived, setActived] = useState<boolean>(checked);

  if (radioSize < MINIMAL_RADIO_SIZE && !dangerousDisableError) {
    console.error(
      "radio size less than minimal, set radioSize = 12 or more too resolve",
    );
  }

  const containerWidth = radioSize * 4;
  const LEFT_OFFSET = containerWidth - PADDING_OFFSET * 2 - radioSize;

  const background = actived ? "bg-(--bg-card)" : "bg-(--bg-section)"; 
  const roundBackground = actived ? "bg-(--fg-default)" : "bg-(--fg-mini-text)";
  const styleLeft = actived ? LEFT_OFFSET : 0;

  return (
    <div
      style={{
        width: `${containerWidth}px`,
        ...style,
      }}
      className={[
        "rounded-[200px] py-[6px] px-[8px] cursor-pointer duration-300",
        background,
        "hover:bg-(--fg-card)",
        className,
      ].join(" ")}
      onClick={(event) => {
        setActived(!actived);
        onClick?.(event);
      }}
      {...props}
    >
      <div
        className={[
          "relative duration-300 rounded-[100%]",
          roundBackground,
        ].join(" ")}
        style={{
          height: `${radioSize}px`,
          width: `${radioSize}px`,
          left: `${styleLeft}px`,
        }}
      />

      <input
        name={inputName}
        id={inputId}
        type="checkbox"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Switch;
