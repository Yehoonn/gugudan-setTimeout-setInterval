import Setting from "./setting.js";

const createElement = (data) => {
  const root = document.getElementById("root");

  for (let key of data) {
    let box = document.createElement("div");
    root.appendChild(box);
    box.setAttribute("id", "box");

    let formula = document.createElement("div");
    let result = document.createElement("div");
    let count = document.createElement("div");

    Setting(formula, box, key.formula);
    Setting(result, box, key.result);
    Setting(count, box, key.count);
  }
};

export default createElement;
