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

  start() {
    this.#service.retry();
  }

  guess(input) {
    return this.#service.guess(input);
  }

  exit() {
    return this.#service.getTrial();
  }
}

module.exports = Object.freeze(new BaseballController());
