const { Random } = require('@woowacourse/mission-utils');

const RandomNumbersCreator = {
  notDuplicated(length) {
    const winningNumbers = new Set();
    while (winningNumbers.size < length) {
      winningNumbers.add(Random.pickNumberInRange(1, 9));
    }
    console.log(winningNumbers);
    return [...winningNumbers].join('');
  },
};

module.exports = { RandomNumbersCreator };
