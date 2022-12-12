const { MODEL_KEY } = require('../../utils/constants');

class BaseballInput {
  #input;

  #repo;

  constructor({ input, repo }) {
    this.#input = input;
    this.#repo = repo;
  }

  #refineNumberType() {
    this.#input = this.#input.split('').map((value) => Number(value));

    return this;
  }

  #increaseTrial() {
    const oldTrialData = this.#repo.read(MODEL_KEY.trial);

    this.#repo.update(MODEL_KEY.trial, oldTrialData + 1);

    return this;
  }

  #setInputNumber() {
    this.#repo.update(MODEL_KEY.inputNumber, this.#input);

    return this;
  }

  storeData() {
    this.#refineNumberType().#increaseTrial().#setInputNumber();
  }
}

module.exports = BaseballInput;
