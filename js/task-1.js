const categoryItems = document.querySelectorAll(".item");
categoryItems.forEach((li) => {
    const titleOfItem = li.querySelector("h2");
    const itemsOfList = li.querySelectorAll("ul li");
    console.log(`Кількість категорій: ${categoryItems.length} Заголовок: ${titleOfItem.textContent} Кількість елементів у списку: ${itemsOfList.length}`);
});
