const BaseBallRepository = require('../repository/BaseBallRepository');

const BaseballGuess = require('./domain/BaseBallGuess');
const BaseballStart = require('./domain/BaseballStart');
const BaseBallTrial = require('./domain/BaseBallTrial');
const BaseBallInput = require('./domain/BaseBallInput');

class BaseBallGame {
  #repo;

  constructor() {
    this.#repo = new BaseBallRepository();
  }

  retry() {
    const baseballStart = new BaseballStart({
      repo: this.#repo,
    });

    baseballStart.storeData();
  }

  inputNumber(input) {
    const baseballInput = new BaseBallInput({
      input,
      repo: this.#repo,
    });

    baseballInput.storeData();
  }

  guess() {
    const baseBallGuess = new BaseballGuess({
      repo: this.#repo,
    });

    return baseBallGuess.getOutput();
  }

  getTrial() {
    const baseballTrial = new BaseBallTrial({
      repo: this.#repo,
    });

    return baseballTrial.getOutput();
  }
}

module.exports = BaseBallGame;
