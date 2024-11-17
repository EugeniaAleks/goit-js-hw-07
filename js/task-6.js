function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls > input");
const createBtnEl = document.querySelector("#controls button[data-create]");
const destroyBtnEl = document.querySelector("#controls button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

let number;

const getNumber = (event) => {
  number = Number(event.currentTarget.value);
};

inputEl.addEventListener("input", getNumber);

const createBoxes = () => {
  divBoxesEl.querySelectorAll(".box").forEach((box) => {
    box.remove();
  });

  const allBoxesEl = [];
  let width = "30px";
  let height = "30px";

  if (number < 1 || number > 100) {
    alert("Enter a number between 1 and 100");
    return (inputEl.value = "");
  }

  for (let i = 1; i <= number; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = width;
    boxEl.style.height = height;
    width = `${parseInt(boxEl.style.width) + 10}px`;
    height = `${parseInt(boxEl.style.height) + 10}px`;

    allBoxesEl.push(boxEl);
  }

  divBoxesEl.append(...allBoxesEl);
  return (inputEl.value = "");
};

const destroyBoxes = () => {
  divBoxesEl.querySelectorAll(".box").forEach((box) => {
    box.remove();
  });
};

createBtnEl.addEventListener("click", createBoxes);

destroyBtnEl.addEventListener("click", destroyBoxes);
