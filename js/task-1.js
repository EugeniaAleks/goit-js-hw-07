"use strict";

const eachCategory = categories.querySelectorAll(".item");

console.log(`Number of categories: ${eachCategory.length}`);
eachCategory.forEach(function (category) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  const categoryItem = category.querySelector("ul");

  console.log(`Elements: ${categoryItem.querySelectorAll("li").length}`);
});
