const { Random } = require('@woowacourse/mission-utils');

class BaseBallGameSystem {
  #computerNumbers;
  tryCount = 0;

  createWinningNubmers() {
    const winningNumbers = new Set();
    while (winningNumbers.size < 3) {
      winningNumbers.add(Random.pickNumberInRange(1, 9));
    }
    console.log([...winningNumbers]);
    return [...winningNumbers].join('');
  }

  assignComputerNumbers() {
    this.#computerNumbers = this.createWinningNubmers();
  }

  checkStrike(userInputNumbers, computerNumbers) {
    let strike = 0;
    [...userInputNumbers].forEach((number, index) => {
      if (number === computerNumbers[index]) strike++;
    });
    return strike;
  }

  checkBall(userInputNumbers, computerNumbers) {
    let ball = 0;
    [...userInputNumbers].forEach((number, index) => {
      if (computerNumbers.includes(number) && !(number === computerNumbers[index])) ball++;
    });
    return ball;
  }

  checkNothing(userInputNumbers, computerNumbers) {
    return [...userInputNumbers].every((number) => {
      return !computerNumbers.includes(number);
    });
  }

  checkUserBaseBallCount(userInput) {
    this.tryCount += 1;
    const strike = this.checkStrike(userInput, this.#computerNumbers);
    const ball = this.checkBall(userInput, this.#computerNumbers);
    return { strike, ball };
  }

  isRetry(command) {
    return Number(command) === 1;
  }

  guess(strike) {
    return strike === 3;
  }

  getTryCount() {
    return this.tryCount;
  }

  retry() {
    this.tryCount = 1;
    this.assignComputerNumbers();
  }
}

module.exports = BaseBallGameSystem;
