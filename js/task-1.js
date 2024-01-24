const itemsByClass = document.querySelectorAll(".item");
console.log(itemsByClass.length);
itemsByClass.forEach((li) => {
    let titlesOfItems = li.querySelectorAll("h2");
    titlesOfItems.forEach((h2) => {
        console.log(h2.textContent);
    });
    let itemsOfList = li.querySelectorAll("ul li");
    console.log(itemsOfList.length);
});