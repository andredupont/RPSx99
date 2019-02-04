//code for Rock-Paper-Scisors X99
//by Andre Dupont - andre.dupont@gmail.com

//12 global Variables
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveTreeType;
let playerOneMoveTreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveTreeType;
let playerTwoMoveTreeValue;


//function that sets players moves

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  const playerOne = 'Player One';
  const playerTwo = 'Player Two';

  

  //player One move type input function
  const getPlayerOneType = (playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveTreeType ) => {

    playerOneMoveOneType = playerOneMoveOneType.toLowerCase();
    if (playerOneMoveOneType === 'rock' || playerOneMoveOneType === 'paper' || playerOneMoveOneType === 'scissors'){
      return playerOneMoveOneType;
    } else {
      console.log('Error! Please enter valid entry.')
    }

    playerOneMoveTwoType = playerOneMoveTwoType.toLowerCase();
    if (playerOneMoveTwoType === 'rock' || playerOneMoveTwoType === 'paper' || playerOneMoveTwoType === 'scissors'){
      return playerOneMoveTwoType;
    } else {
      console.log('Error! Please enter valid entry.')
    }

    playerOneMoveTreeType = playerOneMoveTreeType.toLowerCase();
    if (playerOneMoveTreeType === 'rock' || playerOneMoveTreeType === 'paper' || playerOneMoveTreeType === 'scissors'){
      return playerOneMoveTreeType;
    } else {
      console.log('Error! Please enter valid entry.')
    }
//   test console log - not sure if valid
//console.log(getPlayerOneType('rock', 'paper', 'scissors'));
  }


  //function for Player two  move type choices
  const getPlayerTwoChoices = (playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveTreeType ) => {

    playerTwoMoveOneType = playerTwoMoveOneType.toLowerCase();
    if (playerTwoMoveOneType === 'rock' || playerTwoMoveOneType === 'paper' || playerTwoMoveOneType === 'scissors'){
      return playerTwoMoveOneType;
    } else {
      console.log('Error! Please enter valid entry.')
    }

    playerTwoMoveTwoType = playerTwoMoveTwoType.toLowerCase();
    if (playerTwoMoveTwoType === 'rock' || playerTwoMoveTwoType === 'paper' || playerTwoMoveTwoType === 'scissors'){
      return playerTwoMoveTwoType;
    } else {
      console.log('Error! Please enter valid entry.')
    }

    playerTwoMoveTreeType = playerTwoMoveTreeType.toLowerCase();
    if (playerTwoMoveTreeType === 'rock' || playerTwoMoveTreeType === 'paper' || playerTwoMoveTreeType === 'scissors'){
      return playerTwoMoveTreeType;
    } else {
      console.log('Error! Please enter valid entry.')
    }
    //   test console log - not sure if valid
    //console.log(getPlayerTwoChoices('rock', 'paper', 'scissors'));
  };




//function to deternime round winner

//Compare playerOneMoveOneType with playerTwoMoveOneType for round one winner
/*if player 1 wins, count is up by 1, if player 2 wins count down by 1 */
const determineRounOnedWinner = (playerOneMoveOneType, playerTwoMoveOneType) =>{

  if (playerOneMoveOneType === 'rock'){
    if (playerTwoMoveOneType === 'paper'){
      return -1;
    }else {
      return 1';
    }
  }
  	if (playerOneMoveOneType === 'paper'){
    if (playerTwoMoveOneType === 'scissors'){
      return -1;
    }else {
      return 1;
    }
  }
 	 	if (playerOneMoveOneType === 'scissors'){
    if (playerTwoMoveOneType === 'rock'){
      return -1;
    }else {
      return 1;
		}
  }
  if (playerOneMoveOneType === playerTwoMoveOneType){
    if (playerOneMoveOneValue > playerTwoMoveOneValue){
      return 1
    }else if(playerOneMoveOneValue < playerTwoMoveOneValue){
      return -1
    }
    else {
      return 0;
  }
}

//Compare playerOneMoveTwoType with playerTwoMoveTwoType for round two winner
const determineRounTwodWinner = (playerOneMoveTwoType, playerTwoMoveTwoType) =>{

  if (playerOneMoveTwoType === 'rock'){
    if (playerTwoMoveTwoType === 'paper'){
      return -1;
    }else {
      return 1';
    }
  }
  	if (playerOneMoveTwoType === 'paper'){
    if (playerTwoMoveTwoType === 'scissors'){
      return -1;
    }else {
      return 1;
    }
  }
 	 	if (playerOneMoveTwoType === 'scissors'){
    if (playerTwoMoveTwoType === 'rock'){
      return -1;
    }else {
      return 1;
		}
  }
  if (playerOneMoveTwoType === playerTwoMoveTwoType){
    if (playerOneMoveOneValue > playerTwoMoveOneValue){
      return 1
    }else if(playerOneMoveOneValue < playerTwoMoveOneValue){
      return -1
    }
    else {
      return 0;
  }
};

//Compare playerOneMoveTreeType with playerTwoMoveTreeType for round tree winner
const determineRountreedWinner = (playerOneMoveTreeType, playerTwoMoveTreeType) =>{

  if (playerOneMoveTreeType === 'rock'){
    if (playerTwoMoveTreeType === 'paper'){
      return -1;
    }else {
      return 1';
    }
  }
  	if (playerOneMoveTreeType === 'paper'){
    if (playerTwoMoveTreeType === 'scissors'){
      return -1;
    }else {
      return 1;
    }
  }
 	 	if (playerOneMoveTreeType === 'scissors'){
    if (playerTwoMoveTreeType === 'rock'){
      return -1;
    }else {
      return 1;
		}
  }
  if (playerOneMoveTreeType === playerTwoMoveTreeType){
    if (playerOneMoveOneValue > playerTwoMoveOneValue){
      return 1
    }else if(playerOneMoveOneValue < playerTwoMoveOneValue){
      return -1
    }
    else {
      return 0;
  }
};

//function to determine game winner - min 2/3
//verify how to make sum, or how to determine the Game winner otherwise this is not final
const determineGameWinner = (determineRounOnedWinner, determineRounTwodWinner, determineRountreedWinner) =>{
  if ((determineRounOnedWinner + determineRounTwodWinner + determineRountreedWinner) > 0){
    return 'Player One Wins'
  }
  else if ((determineRounOnedWinner + determineRounTwodWinner + determineRountreedWinner) < 0){
    return 'Player two Wins'
  }
  else ((determineRounOnedWinner + determineRounTwodWinner + determineRountreedWinner) = 0){
    return 'Game is a tie'
  }
}


//function to set ramdom moves for cumputer
// got 3 randomized choices. How do I tie it in with the rest? should I change my const name to the variable playerTwoMoveOneType, M2, M3?
//I have to add the Strenght - 1-97 for each, maximum of 99 total.
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
