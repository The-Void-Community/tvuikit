import type { ReactNode } from "react"

type Props = {
  children: ReactNode,
  text: string,
  type: string
}

export const Button = ({
  children,
  text,
  type
}: Props) => {
  return (
    <button
      className={[
        "bg-(--fg-card) px-8 py-4 rounded-lg",
        `text-(--btn-${type})`
      ].join(" ")}
    >
      {children || text}
    </button>
  )
}