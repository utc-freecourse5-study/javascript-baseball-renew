const { Random, Console } = require('@woowacourse/mission-utils');
const { COMPUTER_NUMBER_RANGE } = require('./utils/constants');

class BaseBallGame {
  #computerRandomNumber;
  #attempts;

  constructor() {
    this.#computerRandomNumber = [];
    this.#attempts = 1;
  }

  makeRandomNumber() {
    while (this.#computerRandomNumber.length < COMPUTER_NUMBER_RANGE.length) {
      const number = Random.pickNumberInRange(
        COMPUTER_NUMBER_RANGE.minimum,
        COMPUTER_NUMBER_RANGE.maximum
      );
      if (!this.#computerRandomNumber.includes(number)) this.#computerRandomNumber.push(number);
    }
  }

  guess(number) {
    const strike = this.#countStrike(number);
    const ball = this.#countBall(number);
    return { strike, ball };
  }

  #countStrike(number) {
    return this.#computerRandomNumber.reduce((count, comCurNum, index) => {
      const oneLetterOfInputNumber = Number(number[index]);
      if (oneLetterOfInputNumber === comCurNum) return count + 1;
      return count;
    }, 0);
  }

  #countBall(number) {
    return this.#computerRandomNumber.reduce((count, comCurNum, index) => {
      if (
        this.#computerRandomNumber.includes(Number(number[index])) &&
        comCurNum !== Number(number[index])
      ) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  getAttempts() {
    return this.#attempts;
  }

  addAttempts() {
    return (this.#attempts += 1);
  }

  retry() {
    this.#computerRandomNumber = [];
    this.#attempts = 1;
    this.makeRandomNumber();
  }

  quit() {
    Console.close();
  }
}

module.exports = BaseBallGame;
