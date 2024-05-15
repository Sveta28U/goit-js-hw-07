function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxDiv = document.querySelector("#boxes");
createBtn.addEventListener("click", () => {
  boxDiv.innerHTML = "";
  const amount = input.value;
  if (amount < 1 || amount > 100) return;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", () => {
  input.value = "";
  boxDiv.innerHTML = "";
});
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement("div");

    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(elem);
  }
  boxDiv.append(fragment);
}
