const categoryItems = document.querySelectorAll(".item");
console.log(categoryItems.length);
categoryItems.forEach((li) => {
    let titleOfItem = li.querySelector("h2");
    console.log(titleOfItem.textContent);
    let itemsOfList = li.querySelectorAll("ul li");
    console.log(itemsOfList.length);
});
