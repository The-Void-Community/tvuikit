import { Checkbox as CheckboxComponent } from "../checkbox"

export const Checkbox = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <CheckboxComponent />
      <CheckboxComponent checked />
    </div>
  )
}