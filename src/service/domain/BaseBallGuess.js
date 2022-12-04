const { MODEL_KEY } = require('../../utils/constants');
const BaseBallInputException = require('../../validation/BaseBallInputException');

class BaseballGuess {
  #repo;

  #input;

  constructor({ input, repo }) {
    this.#repo = repo;
    this.#input = input;
  }

  #validateInputData() {
    const inputException = new BaseBallInputException(this.#input);
    inputException.validate();

    return this;
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

  #isStrike(data, index) {
    return data === this.#input[index];
  }

  #countStrike() {
    const answerNumber = this.#repo.read(MODEL_KEY.randomNumber);

    return answerNumber.filter(this.#isStrike.bind(this)).length;
  }

  #isBall(data, index) {
    return !this.#isStrike(data, index) && this.#input.includes(data);
  }

  #countBall() {
    const answerNumber = this.#repo.read(MODEL_KEY.randomNumber);

    return answerNumber.filter(this.#isBall.bind(this)).length;
  }

  getOutput() {
    this.#validateInputData().#refineNumberType().#increaseTrial();

    return { ball: this.#countBall(), strike: this.#countStrike() };
  }
}

module.exports = BaseballGuess;
