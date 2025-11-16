import { Wrapper } from "../wrapper"

import { ButtonGuildline } from "./button"
import { TextGuideline } from "./text"

export const Page = () => {
  return (
    <Wrapper>
      <TextGuideline />
      <ButtonGuildline />
    </Wrapper>
  )
}