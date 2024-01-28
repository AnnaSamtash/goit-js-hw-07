function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const containerOfBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const amount = parseInt(numberInput.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    let boxSize;
    for (let i = 0; i < amount; i++) {
      if (i === 0) {
        boxSize = 30;
      } else {
        boxSize += 10;
      }
      const box = document.createElement("div");
      box.style.height = `${boxSize}px`;
      box.style.width = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      containerOfBoxes.appendChild(box);
    }
  }
  numberInput.value = "";
}

function destroyBoxes() {
  containerOfBoxes.innerHTML = "";
}
