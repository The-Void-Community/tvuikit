import { Wrapper } from "../wrapper";

import { Modal } from "./modal";

export type PageProps = {
  zIndex: number
}

export const Page = ({ zIndex }: PageProps) => {
  return (
    <Wrapper>
      <Modal container={document.body} zIndex={zIndex}>
        I'm modal, hello!
      </Modal>
    </Wrapper>
  )
};