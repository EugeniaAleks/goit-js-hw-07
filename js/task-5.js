function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");

const spanEl = document.querySelector(".color");
console.log(spanEl);
console.log(spanEl.textContent);
const changeBodyBg = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  const bgColor = bodyEl.style.backgroundColor;
  spanEl.textContent = `${bgColor}`;
};

btnEl.addEventListener("click", changeBodyBg);
