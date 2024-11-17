"use strict";

const eachCategory = categories.querySelectorAll(".item");

console.log(eachCategory.length);
eachCategory.forEach(function (category) {
  console.log(category.querySelector("h2").textContent);
  const categoryItem = category.querySelector("ul");

  console.log(categoryItem.querySelectorAll("li").length);
});
