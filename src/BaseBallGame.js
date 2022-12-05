const { Random } = require('@woowacourse/mission-utils');

class BaseBallGame {
  #computerNumbers;

  createWinningNubmers() {
    //createWinningNubmers을 private 설정 해야하나.. 얘도 결국 정답이잖아
    const winningNumbers = new Set();
    while (winningNumbers.size < 3) {
      winningNumbers.add(Random.pickNumberInRange(1, 9));
    }
    console.log([...winningNumbers].join(''));
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
    [...userInputNumbers].forEach((number) => {
      if (!computerNumbers.includes(number)) return '낫싱';
    });
  }

  checkUserBaseBallCount(userInput) {
    const strike = this.checkStrike(userInput, this.#computerNumbers);
    const ball = this.checkBall(userInput, this.#computerNumbers);
    return { strike, ball };
  }

  guess() {}
  retry() {}
}

module.exports = BaseBallGame;
