const { Random } = require('@woowacourse/mission-utils');

class BaseBallGame {
  #winningNumbers;

  createWinningNubmers() {
    const winningNumbers = new Set();
    while (winningNumbers.size < 3) {
      winningNumbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...winningNumbers];
  }

  guess() {}
  retry() {}
}

module.exports = BaseBallGame;
