const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');
const count = 0;

    


decrementBtnEl.addEventListener('click', () => {
    spanEl.textContent -= 1;
});
incrementBtnEl.addEventListener('click', () => {
    let count = parseInt(spanEl.textContent);
    spanEl.textContent = count += 1;
});