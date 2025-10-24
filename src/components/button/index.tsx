import type { ReactNode } from "react"

type Props = {
  children: ReactNode,
  type: string
}

export const Button = ({
  children,
  type
}: Props) => {
  return (
    <button
      className={[
        "bg-(--fg-card) px-8 py-4 rounded-lg text-(--btn-${type})",
        `text-(--btn-${type})`
      ].join(" ")}
    >
      {children}
    </button>
  )
}