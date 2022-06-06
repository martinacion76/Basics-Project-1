var choices = ['scissors', 'paper', 'stone'];

var userWinCount = 0;
var userLoseCount = 0;

var userName = '';
var userMode = 'waiting for user name';

var main = function (input) {
  var myOutputValue = '';

  if (userMode == 'waiting for user name') {
    userName = input;
    console.log(userName)
    userMode = 'game on';
    myOutputValue = 'Hello ' + userName;
  }
  
  else if (userMode == 'game on'){
    myOutputValue = normalGame(userName, input);
  }

  return myOutputValue;
};

var randomMove = function () {
  var randomDecimal = Math.random() * 3;
  var choiceNumber = Math.floor(randomDecimal);

  programMove = choices[choiceNumber];

  console.log('program plays ' + programMove);
  return programMove;
}

var normalGame = function(userName, userChoice) {
  if (choices.includes(userChoice)) {
    // user plays scissors
    if (userChoice == choices[0]) {
      if (randomMove() == choices[0]) {
        result = 'Draw!';
      } else if (randomMove() == choices[1]) {
        result = 'You win!';
        userWinCount += 1;
      } else {
        result = 'You lose!';
        userLoseCount += 1;
      }
    } 
    // user plays paper
    else if (userChoice == choices[1]) {
      if (randomMove() == choices[0]) {
        result = 'You lose!';
        userLoseCount += 1;
      } else if (randomMove() == choices[1]) {
        result = 'Draw!';
      } else {
        result = 'You win!';
        userWinCount += 1;
      }
    } 
    // user plays stone
    else {
      if (randomMove() == choices[0]) {
        result = 'You win!';
        userWinCount += 1;
      } else if (randomMove() == choices[1]) {
        result = 'You lose!';
        userLoseCount += 1;
      } else {
        result = 'Draw!';
      }
    }
    message = result + '<br><br> Number of games won: ' + userWinCount + '<br> Number of games lost: ' + userLoseCount;;
  }
  else {
    message = 'Invalid input. Please choose among scissors, paper, or stone. You have won ' + '<br><br> Number of games won: ' + userWinCount + '<br> Number of games lost: ' + userLoseCount;
  }
  
  console.log('user has won: ' + userWinCount + ' times')
  console.log('program has won: ' + userLoseCount + ' times')
  return message;
}
