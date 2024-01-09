/* eslint-disable max-len */
var readlineSync = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

let board = initializeBoard();

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readlineSync.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break; // break if it's a valid square

    prompt("Sorry, that's not a valid choice.");

  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

playerChoosesSquare(board);
computerChoosesSquare(board);

displayBoard(board);
playerChoosesSquare(board);
computerChoosesSquare(board);

displayBoard(board);
playerChoosesSquare(board);
computerChoosesSquare(board);

displayBoard(board);
