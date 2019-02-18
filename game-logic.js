

//12 global Variables
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


//function that sets players moves

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType,
  moveTwoValue, moveThreeType, moveThreeValue) => {
  if (!moveOneType || !moveOneValue || !moveTwoType ||
    !moveTwoValue || !moveThreeType || !moveThreeValue){
      return;
    }
  if (!validTypes(oveOneType, moveTwoType, moveThreeType)){
    return;
  }
  if (!validValues(moveOneValue, moveTwoValue, moveThreeValue))
  }

  switch (player) {
    case P1:
      playerOneMoveOneType = moveOneType;
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
      break;

    case P2:
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
      break;
  }
};

const validTypes = (t1, t2, t3) =>
  validType(t1) && validType (t2) validType (t3);

//predicate function. Returns to true if type = rock, paper or scissors
const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS;

//predicate that return true if the values are good(more than 1 and max 99 total)
const validValues = (v1, v2, v3) =>
v1 >= 1 && v2 >=1 && v2 >=1 && v1 + v2 + v3 <= 99;


//Function that evaluates round winner
const getRoundWinner = round =>{
  let p1t;
  let p1v;
  let p2t;
  let p2v;

switch (round) {
  case 1:
    p1t = playerOneMoveOneType;
    p1v = playerOneMoveOneValue;
    p2t = playerTwoMoveOneType;
    p2v = playerTwoMoveOneValue;
    break;

  case 2:
    p1t = playerOneMoveTwoType;
    p1v = playerOneMoveTwoValue;
    p2t = playerTwoMoveTwoType;
    p2v = playerTwoMoveTwoValue;
    break;

  case 3:
    p1t = playerOneMoveThreeType;
    p1v = playerOneMoveThreeValue;
    p2t = playerTwoMoveThreeType;
    p2v = playerTwoMoveThreeValue;
    break;

  default:
    return null;
  }
  return evaluateMove(p1t, p1v, p2t, p2v)
};

const evaluateMove = (p1t, p1v, p2t, p2v) => {
  //ensure that all moves are present

  if (!p1t || !p1v || !p2t || !p2v) {
    return null;
  }

  //if types are the same, winner is based on higher value
  if (p1t === p2t){
    if ( p1v === p2v){
      return TIE;
    }

    return p1v > p2v ? P1 : P2;
  }

  //types different, usual RPS ruLEs apply
switch (p1t) {
  case ROCK:
    return p2t === SCISSORS ? P1 : P2;

  case PAPER:
    return p2t === ROCK ? P1 : P2;

  case SCISSORS:
    return p2t === PAPER ? P1 : P2;
  }
};

let p1wins;
let p2wins;

const allGlobalsDefined = () =>
  playerTwoMoveOneType &&
  playerOneMoveOneValue &&
  playerOneMoveTwoType &&
  playerOneMoveTwoValue &&
  playerOneMoveThreeType &&
  playerOneMoveThreeValue &&
  playerTwoMoveOneType &&
  playerTwoMoveOneValue &&
  playerTwoMoveTwoType &&
  playerTwoMoveTwoValue &&
  playerTwoMoveThreeType &&
  playerTwoMoveThreeValue &&

//function that determines Game winner
const getGameWinner = () => {
  if(!allGlobalsDefined()) {
    return null;
  }

  let r1winner = getRoundWinner(1);
  let r2winner = getRoundWinner(2);
  let r3winner = getRoundWinner(3);

  p1wins = 0;
  p2wins = 0;
  incrementScores(r1winner);
  incrementScores(r2winner);
  incrementScores(r3winner);

  if (p1wins === p2wins){
    return TIE;
  }
  return  p1Wins > p2Wins ? P1 : P2;
};

const incrementScores = (winner) => {
  switch (winner) {
    case P1:
      p1wins +=1;
      break;

    case P2:
      p2wins +=1;
      break;
  }
};

//function to set ramdom moves for cumputer (different from correction)
const setComputerMoves = () => {
  setPlayer2MoveTypes();
  setPlayer2MoveValues();
};

const setPlayer2MoveTypes = ()=> {
  playerTwoMoveOneType = getComputerType1();
  playerTwoMoveTwoType = getComputerType2();
  playerTwoMovethreeType = getComputerType3();
};

const getComputerType1 = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

  const getComputerType2 = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
};

const getComputerType3 = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
};

//generates random number 1-97 minimum 1, maximum 97, totalling 99 for the 3
const getComputerValues = () => {
  let playerTwoMoveOneValue = Math.floor(Math.random() * 98);
  let playerTwoMoveTwoValue = Math.floor(Math.random() * 98) - cpuValue1;
  let playerTwoMovethreeValue = 99 - (cpuValue1 + cpuValue2);
}
/*
console.log(`
  p2v1 = ${playerTwoMoveOneValue}
  p2v2 = ${playerTwoMoveTwoValue}
  p2v3 = ${playerTwoMoveThreeValue}`);
  */
};
