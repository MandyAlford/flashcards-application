const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

  it('should be a function', function(){
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function(){
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return the first argument', function(){
    const turn = new Turn('a', new Card);
    expect(turn.returnGuess()).to.equal('a');
  });

  it('should be able to return the second argument', function(){
    const card = new Card;
    const turn = new Turn('a', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to compare the users guess to the correct answer', function(){
    const card = new Card(1, 'What is the first letter of the alphabet?', ['a', 'b', 'c'], 'a');
    const turn = new Turn('a', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give the user feedback on the guess', function(){
    const card = new Card(1, 'What is the first letter of the alphabet?', ['a', 'b', 'c'], 'a');
    const turn = new Turn('a', card);
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should give the user a different feedback on the guess', function(){
    const card = new Card(1, 'What is the first letter of the alphabet?', ['a', 'b', 'c'], 'a');
    const turn = new Turn('b', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
