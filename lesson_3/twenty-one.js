/* eslint-disable max-statements */
/* eslint-disable indent */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
var readlineSync = require('readline-sync');

let humanHand = [];
let dealerHand = [];

function prompt(message) {
  console.log(`=> ${message}`);
}

//Hearts, Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

let deckOfCards = [['H', 'Ace'],['D', 'Ace'],['C', 'Ace'],['S', 'Ace'],['H', 'King'],['D', 'King'],['C', 'King'],['S', 'King'],
                  ['H', 'Queen'],['D', 'Queen'],['C', 'Queen'],['S', 'Queen'],['H', 'Jack'],['D', 'Jack'],['C', 'Jack'],['S', 'Jack'],
                  ['H', '10'],['D', '10'],['C', '10'],['S', '10'],['H', '9'],['D', '9'],['C', '9'],['S', '9'],
                  ['H', '8'],['D', '8'],['C', '8'],['S', '8'],['H', '7'],['D', '7'],['C', '7'],['S', '7'],
                  ['H', '6'],['D', '6'],['C', '6'],['S', '6'],['H', '5'],['D', '5'],['C', '5'],['S', '5'],
                  ['H', '4'],['D', '4'],['C', '4'],['S', '4'],['H', '3'],['D', '3'],['C', '3'],['S', '3'],
                  ['H', '2'],['D', '2'],['C', '2'],['S', '2'],];

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  return sum;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function initializeDeck() {
  shuffle(deckOfCards);
}

function dealCard(hand) {
  hand.push(deckOfCards[0]);
  deckOfCards.shift();
}

function displayCards(hidden) {
  let humanShowHand = humanHand.map((suite) => suite[1]);
  let dealerShowHand = dealerHand.map((suite) => suite[1]);

  if (hidden) {
    prompt(`Dealer has: ${dealerShowHand.slice(1).join(" and ")} and Unknown Card`);
    prompt(`You have: ${humanShowHand.join(" and ")}`);
  } else {
    prompt(`Dealer has: ${dealerShowHand.join(" and ")}`);
    prompt(`You have: ${humanShowHand.join(" and ")}`);
  }
}

function busted(hand) {
  if (total(hand) > 21) {
    return true;
  }
  return false;
}

function dealFirstHand() {
  initializeDeck();
  humanHand = [];
  dealerHand = [];
  dealCard(humanHand);
  dealCard(dealerHand);
  dealCard(humanHand);
  dealCard(dealerHand);

  displayCards(true);
}

//need to update logic here
function winningHand(dHand, hHand) {
  if (busted(hHand) || (!busted(dHand) && total(dHand) > total(hHand))) {
    prompt(`Dealer wins! Better luck next time`);
    prompt(`Dealer Total: ` + total(dHand));
    prompt(`Your Total: ` + total(hHand));
    displayCards(false);
  } else {
    prompt("You win!");
    prompt(`Your Total: ` + total(hHand));
    prompt(`Dealer Total: ` + total(dHand));
    displayCards(false);
  }
}

function startGame() {
  while (true) {
    dealFirstHand();

    while (true) {
      prompt("hit or stay?");
      let answer = readlineSync.question();
      if (answer === 'stay') break;
      dealCard(humanHand);
      displayCards(true);
      if (busted(humanHand)) break;
    }

    if (!busted(humanHand)) {
      while (total(dealerHand) < 17) {
        dealCard(dealerHand);
        if (busted(dealerHand)) break;
        displayCards(true);
      }
    }

    winningHand(dealerHand, humanHand);

    prompt("Play again?");
    let answer = readlineSync.question();
    if (answer[0].toLowerCase() === 'n') break;
  }
}

startGame();