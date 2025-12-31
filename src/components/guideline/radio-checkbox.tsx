import { Radiocheckbox as RadiocheckboxComponent } from "../radio-checkbox"

export const Radiocheckbox = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <RadiocheckboxComponent checked />
      <RadiocheckboxComponent />
    </div>
  )
}