const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

// Evento para abrir el formulario de registro
signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

// Evento para regresar al formulario de inicio de sesión
signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);

// Guardar la información de registro en localStorage
signUpForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

  const name = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  // Guardar los datos en localStorage (puedes agregar más validaciones si es necesario)
  const userData = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(userData)); // Guardamos los datos como JSON

  // Limpiar el formulario de registro
  signUpForm.reset();

  // Redirigir al usuario al formulario de inicio de sesión
  container.classList.remove('right-panel-active');
  alert('Registro exitoso, por favor inicia sesión.');
});

// Validar inicio de sesión
signInForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  // Recuperamos los datos guardados en localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  // Validamos si el correo y la contraseña coinciden
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    // Si los datos son correctos, redirigimos a la página principal
    window.location.href = 'principal.html'; // Redirige a la página principal
  } else {
    alert('Correo o contraseña incorrectos.');
  }
});
