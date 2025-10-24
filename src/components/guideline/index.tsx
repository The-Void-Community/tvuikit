import { ButtonGuildline } from "./button"
import { TextGuideline } from "./text"

export const Guideline = () => {
  return (
    <div className="bg-(image:--image-bg) flex flex-row gap-8 px-12 py-4 rounded-lg">
      <TextGuideline />
      <ButtonGuildline />
    </div>
  )
}