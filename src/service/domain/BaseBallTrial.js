const { MODEL_KEY } = require('../../utils/constants');

class BaseBallTrial {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  getOutput() {
    return this.#repo.read(MODEL_KEY.trial);
  }
}

module.exports = BaseBallTrial;
