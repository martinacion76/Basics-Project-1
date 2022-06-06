choices = ['scissors', 'paper', 'stone']

var main = function (userChoice) {
  var myOutputValue = '';
  
  if (choices.includes(userChoice)) {
    console.log('user chooses ' + userChoice);
    // myOutputValue = 'valid'
    
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
  }
  else {
    myOutputValue = 'invalid input. please choose among scissors, paper, or stone.';
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
