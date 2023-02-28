const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};



function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
        if (refs.input.length === 0) {
        refs.span.textContent = "Anonymous";
  };
  
};
refs.input.addEventListener('input', onInputChange);






