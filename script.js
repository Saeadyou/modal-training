'use strict';

const modal = document.querySelectorAll('.modal');
const btn = document.querySelectorAll('.btn');
const close = document.querySelectorAll('.close');
const buttons = document.querySelector('.buttons');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    modal[i].style.display = 'block';
    buttons.classList.add('active');
  });

  close[i].addEventListener('click', function () {
    modal[i].style.display = 'none';
    buttons.classList.remove('active');
  });

  modal[i].addEventListener('click', function () {
    modal[i].style.display = 'none';
    buttons.classList.remove('active');
  });
}

document.addEventListener('keydown', event => {
  for (let i = 0; i < modal.length; i++)
    if (event.key === 'Escape') {
      modal[i].style.display = 'none';
      buttons.classList.remove('active');
    }
});
