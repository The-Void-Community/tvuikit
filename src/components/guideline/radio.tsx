import { Radio as RadioComponent } from "../radio"

export const Radio = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <RadioComponent checked />
      <RadioComponent />
    </div>
  )
}