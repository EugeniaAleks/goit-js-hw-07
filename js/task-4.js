"use strict";

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formLogin = event.target;
  const emailInp = formLogin.elements.email.value.trim();
  const passwordInp = formLogin.elements.password.value.trim();

  if (emailInp === "" || passwordInp === "") {
    return alert("All form fields must be filled in");
  }

  const formLoginObj = {
    email: emailInp,
    password: passwordInp,
  };

  console.log(formLoginObj);
  formEl.reset();
}
