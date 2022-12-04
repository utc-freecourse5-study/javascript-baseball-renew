const { Random, Console } = require('@woowacourse/mission-utils');

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

  guess(number) {
    const strike = this.#countStrike(number);
    const ball = this.#countBall(number);
    return { strike, ball };
  }

  #countStrike(number) {
    let totalStrike = 0;
    totalStrike = this.#computerRandomNumber.reduce((count, comCurNum, index) => {
      const oneLetterOfInputNumber = Number(number[index]);
      if (oneLetterOfInputNumber === comCurNum) return count + 1;
      return count;
    }, 0);
    return totalStrike;
  }

  #countBall(number) {
    let totalBall = 0;
    totalBall = this.#computerRandomNumber.reduce((count, comCurNum, index) => {
      const oneLetterOfInputNumber = Number(number[index]);
      if (
        this.#computerRandomNumber.includes(oneLetterOfInputNumber) &&
        comCurNum !== oneLetterOfInputNumber
      ) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalBall;
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
