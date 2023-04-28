const form = document.querySelector('form');
const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (username.value === '' || password.value === '') {
    alert('Please fill in all fields');
  } else {
    alert('Login successful');
  }
});
