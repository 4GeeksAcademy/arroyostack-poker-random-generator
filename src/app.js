/* eslint-disable */
import "bootstrap";
import "./style.css";
import { setSuitIcon } from "./helpers/setSuitIcon.js";

window.onload = function() {
  //write your code
  const icons = document.querySelectorAll(".icons");
  const cardText = document.getElementById("card-text");
  const button = document.getElementById("newCard");
  const cardNumbers = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "King",
    "Queen",
    "Jack",
    "Ace",
  ];
  // Posible numbers
  const getCard = () => {
    // Posible suits
    const suits = ["spades", "clubs", "hearts", "diamons"];

    // Random suit
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    // Random card number
    const randomCardNumber =
      cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

    // Change suit based on random suit variable
    setSuitIcon(icons, randomSuit);
    cardText.innerHTML = randomCardNumber;
  };

  // Gets card on loading
  getCard();
  // Generates a new card when the button is clicked
  button.addEventListener("click", () => {
    getCard();
  });

  setInterval(getCard, 10000);
};
