class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
    this.correctGuess = false;
  }
  returnGuess(){
    return this.guess;
  }
  returnCard(){
    return this.card;
  }
  evaluateGuess(){
    if (this.guess === this.card.correctAnswer){
      this.correctGuess = true;
      return true;
    } else {
      return false;
    }
  }
  giveFeedback(){
    if (this.correctGuess === true){
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
