"use strict";

const textInput = document.querySelector("#name-input");
const outputSpan = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    outputSpan.textContent = "Anonymous";
    return;
  }

  outputSpan.textContent = inputValue;
});
