const BaseBallGame = require('../service/BaseBallGame');
const { ERROR_MESSAGE } = require('../utils/constants');

let instance = null;

class BaseballController {
  #service;

  constructor() {
    if (instance) {
      throw new Error(ERROR_MESSAGE.singleton);
    }

    instance = this;

    this.#service = new BaseBallGame();
  }

  inputRandom() {
    this.#service.retry();
  }

  inputNumber(input) {
    this.#service.inputNumber(input);
  }

  outputGuess() {
    return this.#service.guess();
  }

  outputTrial() {
    return this.#service.getTrial();
  }
}

module.exports = Object.freeze(new BaseballController());
