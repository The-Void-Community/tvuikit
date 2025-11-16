import { button } from "../../variables/colors/button"
import { Button } from "../button/button"

export const ButtonGuildline = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {Object.keys(button).map((key) => (
        <Button
          key={key}
          type={key as keyof typeof button}
        >Button {key}
        </Button>
      ))}
    </div>
  )
}