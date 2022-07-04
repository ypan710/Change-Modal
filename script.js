'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

// function to toggle the modal to open or close
const toggleModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

// clicking on a modal displays the text
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', toggleModal);
}

// clicking on the close button removes the text and overlay
btnCloseModal.addEventListener('click', toggleModal);

// clicking on the overlay removes the text and overlay
overlay.addEventListener('click', toggleModal);

// pressing on the escape button removes the text and overlay
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    toggleModal();
  }
});
