const Setting = (element, parent, text) => {
  element.textContent = text;
  element.style.pointerEvents = "none";
  parent.appendChild(element);
};

export default Setting;
