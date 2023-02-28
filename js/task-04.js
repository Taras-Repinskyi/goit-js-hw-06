const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');


    


decrementBtnEl.addEventListener('click', () => {
    spanEl.textContent -= 1;
});
incrementBtnEl.addEventListener('click', () => {
    let counterValue = parseInt(spanEl.textContent);
    spanEl.textContent = counterValue += 1;
});