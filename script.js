'use strict';

const projects = document.querySelector('.projects-area');
const home = document.querySelector('.home');
const projectButton = document.querySelector('.btn-projects');
const feritButton = document.querySelector('.Navbar__Link-brand');
const gameButton = document.querySelector('.btn-game');
const game = document.querySelector('.game');
const contactButton = document.querySelector('.btn-contact');
const contact = document.querySelector('.contact');

const scrollInto = function (e) {
  e.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

//Click Ferit Yikar to go to top

feritButton.addEventListener('click', function () {
  scrollInto(home);
});

//Click Projects to go to the portfolio

projectButton.addEventListener('click', function () {
  scrollInto(projects);
});

//Click Game to go to the Python Library/Framework memory game
gameButton.addEventListener('click', function () {
  scrollInto(game);
});

//Click Game to go to the Python Library/Framework memory game
contactButton.addEventListener('click', function () {
  scrollInto(contact);
});

//Navbar Toggle
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document
  .querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

// Game
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = function () {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
};

const checkForMatch = function () {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
};

const disableCards = function () {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  reserBoard();
};

const unflipCards = function () {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
  }, 1000);
};

const reserBoard = function () {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 50);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));
