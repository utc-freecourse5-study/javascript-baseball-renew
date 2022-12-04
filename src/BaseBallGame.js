const { Random } = require('@woowacourse/mission-utils');

class BaseBallGame {
  #computerRandomNumber;
  #attempts;

  constructor() {
    this.#computerRandomNumber = [];
    this.#attempts = 1;
  }

  makeRandomNumber() {
    while (this.#computerRandomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computerRandomNumber.includes(number)) {
        this.#computerRandomNumber.push(number);
      }
    }
  }

  guess(number) {}

  getAttempts() {}

  retry() {}
}

module.exports = BaseBallGame;
