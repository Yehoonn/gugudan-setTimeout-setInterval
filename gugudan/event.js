const event = () => {
  let deleteCount = 0;
  let deleteValue = 0;

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

export default event;
