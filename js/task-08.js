const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert('Будь ласка, заповніть всі поля');
  } else {
    const loginData = {
      email: email,
      password: password
    };
    console.log(loginData);
    loginForm.reset();
  }
});
