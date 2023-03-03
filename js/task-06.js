const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', (el) => {
    el.target.classList.add('invalid');
    el.target.classList.remove('valid');
    if (el.target.value.length === Number(el.target.dataset.length)) {
        el.target.classList.add('valid');
        el.target.classList.remove('invalid');
    }
});
