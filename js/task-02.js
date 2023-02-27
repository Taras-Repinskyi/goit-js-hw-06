const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const elements = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = el;
  list.append(itemEl);
});

console.log(list);

