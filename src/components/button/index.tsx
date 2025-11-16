import type { ReactNode } from "react"

import { Wrapper } from "../wrapper"
import { Button } from "./button"
import { button } from "../../variables/colors/button"

type Props = {
  buttonChildren: ReactNode,
  buttonType: keyof typeof button
}

export const Page = ({ buttonChildren: children, buttonType: type }: Props) => {
  return (
    <Wrapper>
      <Button {...{children,type}} />
    </Wrapper>
  )
}