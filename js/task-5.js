function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector(".change-color");
const backgroundColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  backgroundColor.textContent = randomColor;
  backgroundColor.style.color = randomColor;
}
