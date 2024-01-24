function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const containerOfBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() { 
  const amount = numberInput.value;
  if (amount > 0 && amount < 100) {
    let boxHeight = 30;
    let boxWidth = 30;
    for (let i = 0; i < amount; i++) {
      boxHeight += 10;
      boxWidth += 10;
      const box = document.createElement("div");
      box.style.height = `${boxHeight}px`;
      box.style.width = `${boxWidth}px`;
      box.style.backgroundColor = getRandomHexColor();
      containerOfBoxes.appendChild(box);
      console.log(box);
    }   
  }
  numberInput.value = "";
  console.log(containerOfBoxes);
}

function destroyBoxes() {
  containerOfBoxes.innerHTML = "";
  console.log(containerOfBoxes);
}

