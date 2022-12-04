const BaseBallRepository = require('../repository/BaseBallRepository');
const BaseballGuess = require('./domain/BaseBallGuess');
const BaseballStart = require('./domain/BaseballStart');
const BaseBallTrial = require('./domain/BaseBallTrial');

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

  guess(input) {
    const baseBallGuess = new BaseballGuess({
      input,
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
