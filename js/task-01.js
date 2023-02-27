const itemEl = document.querySelectorAll(".item");
console.log('Number of categories:', itemEl.length);
itemEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const quantityEl = element.lastElementChild.children;
    console.log('Category:', titleEl.textContent);
    console.log('Elements:', quantityEl.length);
});
