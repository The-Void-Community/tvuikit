import { FONT_SIZE } from "../../variables";

export const TextGuideline = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg">
      <div>
        <h1>H1 text, {FONT_SIZE.h1}</h1>
        <span>Пока не знаю</span>
      </div>

      <div>
        <h2>H2 text, {FONT_SIZE.h2}</h2>
        <span>Пока не знаю</span>
      </div>

      <div>
        <h3>H3 text, {FONT_SIZE.h3}</h3>
        <span>Пока не знаю</span>
      </div>

      <div>
        <h4>H4 text, {FONT_SIZE.h4}</h4>
        <span>Пока не знаю</span>
      </div>

      <div>
        <h5>H5 text, {FONT_SIZE.h5}</h5>
        <span>Пока не знаю</span>
      </div>

      <div className="flex flex-col">
        <span>Base text, {FONT_SIZE.base}</span>
        <span>Пока не знаю</span>
      </div>

      <div className="flex flex-col">
        <span className="text-mini">Mini text, {FONT_SIZE.mini}</span>
        <span>Пока не знаю</span>
      </div>
    </div>
  );
};

export default TextGuideline;
