const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');


signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);


signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);


signUpForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const name = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  
  const userData = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(userData)); 

  
  signUpForm.reset();

  
  container.classList.remove('right-panel-active');
  alert('Registro exitoso, por favor inicia sesión.');
});


signInForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  
  const storedUser = JSON.parse(localStorage.getItem('user'));

  
  if (storedUser && storedUser.email === email && storedUser.password === password) {
   
    window.location.href = 'principal.html'; // 
  } else {
    alert('Correo o contraseña incorrectos.');
  }
});
