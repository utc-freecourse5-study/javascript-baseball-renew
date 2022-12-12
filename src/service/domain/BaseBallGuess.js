const { MODEL_KEY } = require('../../utils/constants');

class BaseballGuess {
  #random;

  #input;

  constructor({ repo }) {
    this.#random = repo.read(MODEL_KEY.randomNumber);
    this.#input = repo.read(MODEL_KEY.inputNumber);
  }

  #isStrike(data, index) {
    return data === this.#input[index];
  }

  #countStrike() {
    return this.#random.filter(this.#isStrike.bind(this)).length;
  }

  #isBall(data, index) {
    return !this.#isStrike(data, index) && this.#input.includes(data);
  }

  #countBall() {
    return this.#random.filter(this.#isBall.bind(this)).length;
  }

  getOutput() {
    return { ball: this.#countBall(), strike: this.#countStrike() };
  }
}

module.exports = BaseballGuess;
