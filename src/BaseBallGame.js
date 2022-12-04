const { Random } = require('@woowacourse/mission-utils');

class BaseBallGame {
  #computerNumbers;

  createWinningNubmers() {
    const winningNumbers = new Set();
    while (winningNumbers.size < 3) {
      winningNumbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...winningNumbers];
  }

  assignComputerNumbers() {
    this.#computerNumbers = this.createWinningNubmers();
  }

  guess() {}
  retry() {}
}

module.exports = BaseBallGame;
