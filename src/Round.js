const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }
  returnCurrentCard(){
    return this.deck[0];
  }
  takeTurn(guess){
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns += 1;
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false){
      this.incorrectGuesses.push(this.deck[0].id);
    }
    this.deck.shift();
    return turn.giveFeedback();
  }
  calculatePercentCorrect(){
    var percentCorrect = Math.trunc(((this.turns- this.incorrectGuesses.length)/this.turns)*100);
    return percentCorrect;
  }
  calculateGameTime(){
    const gameTime = (Date.now()-this.startTime)/1000;
    const minutes = Math.floor(gameTime/60);
    const seconds = Math.floor(gameTime % 60);
    return `${minutes} minutes and ${seconds} seconds`;
  }
  endRound(){
    const gameTime = this.calculateGameTime();
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Total time was ${gameTime}`);
  }
}

module.exports = Round;
