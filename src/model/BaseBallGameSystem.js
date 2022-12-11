const { OutputView } = require('../view/OutputView');
const { BaseBallGameChecker } = require('./BaseBallGameChecker');
const { RandomNumbersCreator } = require('./RandomNumbersCreator');

class BaseBallGameSystem {
  #computerNumbers;
  tryCount = 0;

  assignComputerNumbers() {
    this.#computerNumbers = RandomNumbersCreator.notDuplicated(3);
  }

  checkUserBaseBallCount(userInput) {
    this.tryCount += 1;
    const strike = BaseBallGameChecker.strike(userInput, this.#computerNumbers);
    const ball = BaseBallGameChecker.ball(userInput, this.#computerNumbers);
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
    this.tryCount = 0;
  }
}

module.exports = BaseBallGameSystem;
