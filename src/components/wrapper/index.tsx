import type { DetailedHTMLProps, HTMLAttributes } from "react"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Wrapper = ({ className, ...props }: Props) => {
  return (
    <div {...props} className={[
      "bg-(image:--image-bg) flex flex-row gap-8 px-12 py-4 rounded-lg page",
      className
    ].join(" ")} />
  )
}
