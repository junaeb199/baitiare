// Selecciona los botones
const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

// Mueve el botón "No" al acercar el cursor
noButton.addEventListener('mouseenter', function() {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  noButton.style.position = 'absolute';
  noButton.style.left = ${randomX}px;
  noButton.style.top = ${randomY}px;
});

// Muestra un mensaje al hacer clic en "Sí"
yesButton.addEventListener('click', function() {
  alert('¡Sabía que dirías que sí! 🥰 Nos vemos pronto en el sushi.');
});

// Muestra un mensaje al hacer clic en "No"
noButton.addEventListener('click', function() {
  alert('¡No puedes decir que no! 😜');
});