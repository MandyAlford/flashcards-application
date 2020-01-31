const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be able to know the current round', function() {
    const game = new Game;
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
