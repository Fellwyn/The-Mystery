const secondContainer = document.querySelector('.secondContainer');

const returnHomeButton = document.createElement('button');
secondContainer.appendChild(returnHomeButton);
returnHomeButton.textContent = "back to Homepage"

returnHomeButton.addEventListener('click', history_back);

function history_back() {
  window.history.back();
} 