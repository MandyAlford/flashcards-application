const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return the first argument', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
    const turn = new Turn('object', card1);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should be able to return the second argument', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
    const turn = new Turn('object', card1);
    expect(turn.returnCard()).to.equal(card1);
  });

  it('should be able to compare the users guess to the correct answer', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
    const turn = new Turn('object', card1);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give the user feedback on the guess', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
    const turn = new Turn('object', card1);
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should give the user a different feedback on the guess', function() {
    const card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
    const turn = new Turn('array', card1);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
