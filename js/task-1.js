const liItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItems.length}`);
liItems.forEach((li) => {
  console.log(` Category: ${li.firstElementChild.textContent}`);
  console.log(` Category: ${li.lastElementChild.children.length}`);
});
