const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
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
  endRound(){
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
