const BaseBallGame = require('../service/BaseBallGame');

class BaseballController {
  #service;

  constructor() {
    this.#service = new BaseBallGame();
  }

  start() {
    this.#service.retry();
  }

  guess() {
    return this.#service.guess();
  }

  exit() {
    return this.#service.getTrial();
  }
}

module.exports = BaseballController;
