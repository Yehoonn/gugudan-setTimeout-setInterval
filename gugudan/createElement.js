import Setting from "./setting.js";

const createElement = (data) => {
  const root = document.getElementById("root");
  let deleteCount = 0;
  let deleteValue = 0;

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

  root.addEventListener("click", function (event) {
    if (event.target.id === "box") {
      event.target.style.display = "none";

      deleteValue += parseInt(event.target.children[1].textContent);

      deleteCount++;

      if (deleteCount === 5) {
        alert(`삭제된 요소의 총합은 ${deleteValue}입니다`);
        deleteCount = 0;
        deleteValue = 0;
      }
    }
  });
};

export default createElement;
