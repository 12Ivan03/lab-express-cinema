document.addEventListener('DOMContentLoaded', () => {

  console.log('lab-express-cinema JS imported successfully!');

}, false);

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', () => {
  window.location.href = '/'
})