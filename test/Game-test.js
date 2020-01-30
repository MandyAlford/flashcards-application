const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function(){

  xit('should be able to know the current round', function(){
    const game = new Game;
    game.start();
    // expect(game.currentRound).to.equal(card1);
  });
});
