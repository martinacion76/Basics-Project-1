choices = ['scissors', 'paper', 'stone']
gameMode = 'normal';

var main = function (chosenGameMode, userChoice) {
  var myOutputValue = '';

  if (choices.includes(userChoice)) {
    if (chosenGameMode == 'normal') { 
      console.log('game mode is normal');
      normalGameMode();
    }
  
    else if (chosenGameMode == 'reversed') {
      console.log('game mode is reversed');
      reversedGameMode();
    }
  }  
  
  else {
    myOutputValue = 'invalid input'
  }
  
  return myOutputValue;
};

var randomMove = function () {
  var randomDecimal = Math.random() * 3;
  var choiceNumber = Math.floor(randomDecimal);
  console.log(choiceNumber);

  programMove = choices[choiceNumber]

  console.log('program plays ' + programMove);
  return programMove;
}

var reversedGameMode = function (userChoice) {
  // rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors
  gameMode = 'reversed';
  // user plays scissors
  if (userChoice == choices[0]) {
    if (randomMove() == choices[0]) {
      myOutputValue = 'draw';
    } else if (randomMove() == choices[1]) {
      myOutputValue = 'you lose';
    } else {
      myOutputValue = 'you win';
    }
  } 
  // user plays paper
  else if (userChoice == choices[1]) {
    if (randomMove() == choices[0]) {
      myOutputValue = 'you win';
    } else if (randomMove() == choices[1]) {
      myOutputValue = 'draw';
    } else {
      myOutputValue = 'you lose';
    }
  } 
  // user plays stone
  else {
    if (randomMove() == choices[0]) {
      myOutputValue = 'you lose';
    } else if (randomMove() == choices[1]) {
      myOutputValue = 'you win';
    } else {
      myOutputValue = 'draw';
    }
  }

  return myOutputValue;
}

var normalGameMode = function (userChoice) {
  gameMode = 'normal';
    // user plays scissors
    if (userChoice == choices[0]) {
      if (randomMove() == choices[0]) {
        myOutputValue = 'draw';
      } else if (randomMove() == choices[1]) {
        myOutputValue = 'you win';
      } else {
        myOutputValue = 'you lose';
      }
    } 
    // user plays paper
    else if (userChoice == choices[1]) {
      if (randomMove() == choices[0]) {
        myOutputValue = 'you lose';
      } else if (randomMove() == choices[1]) {
        myOutputValue = 'draw';
      } else {
        myOutputValue = 'you win';
      }
    } 
    // user plays stone
    else {
      if (randomMove() == choices[0]) {
        myOutputValue = 'you win';
      } else if (randomMove() == choices[1]) {
        myOutputValue = 'you lose';
      } else {
        myOutputValue = 'draw';
      }
    } 
    return myOutputValue;
}