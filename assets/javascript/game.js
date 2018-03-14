var wins = 0;
var losses = 0;

var difficultyLevels = ["Easy", "Medium", "Difficult"];

for(var i = 0; i < difficultyLevels.length; i++) {
  var button = document.createElement('button');
  button.innerHTML = difficultyLevels[i];
  button.setAttribute('level', difficultyLevels[i]);
  document.getElementById('game').append(button);
  button.onclick = function() {
    playGame(this.getAttribute('level'));
  };
}

function playGame(level) {
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var prevGuesses = [];
  var guessesLeft;
  if(level === "Easy") {
    guessesLeft = 15;
  } else if (level === "Medium") {
    guessesLeft = 10;
  } else {
    guessesLeft = 5;
  }

  var hiddenLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  console.log(hiddenLetter);

  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('guesses-left').textContent = guessesLeft;


  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);
    if(prevGuesses.indexOf(userGuess) === -1) {
      guessesLeft--;
      document.getElementById('guesses-left').textContent = guessesLeft;
      prevGuesses.push(userGuess);
      document.getElementById('current-guess').textContent = userGuess;
      document.getElementById('guessed-letters').textContent = prevGuesses;
      if (hiddenLetter === userGuess) {
        wins++;
        document.getElementById('wins').textContent = wins;
        playGame();
      } else if(guessesLeft === 0) {
        losses++;
        document.getElementById('losses').textContent = losses;
        playGame();
      }
    }
  };
}
