import { fontSize } from "../../variables"

export const TextGuideline = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg">
      <div>
        <h1>H1 text, {fontSize.h1}</h1>
        <span>Пока не знаю</span>
      </div>

      <div>
        <h2>H2 text, {fontSize.h2}</h2>
        <span>Пока не знаю</span>
      </div>
      
      <div>
        <h3>H3 text, {fontSize.h3}</h3>
        <span>Пока не знаю</span>
      </div>
      
      <div>
        <h4>H4 text, {fontSize.h4}</h4>
        <span>Пока не знаю</span>
      </div>
      
      <div>
        <h5>H5 text, {fontSize.h5}</h5>
        <span>Пока не знаю</span>
      </div>
      
      <div className="flex flex-col">
        <span>Base text, {fontSize.base}</span>
        <span>Пока не знаю</span>
      </div>
      
      <div className="flex flex-col">
        <span className="text-mini">Mini text, {fontSize.mini}</span>
        <span>Пока не знаю</span>
      </div>
    </div>
  )
}