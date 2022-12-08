"use strict";
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  Name: "per",
  chips: "145",
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + " : $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (21 === sum) {
    message = "wohoo!! you've got blackjack";
    hasBlackjack = true;
  } else {
    message = "you're out of the game,sorry";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "sum: " + sum;
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function startGame() {
  renderGame();
  isAlive = true;
  let card1 = getRandomCard();
  let card2 = getRandomCard();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = Math.floor(Math.random() * 11) + 1;
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
