const { REGEX, ERROR_MESSAGE } = require('../utils/constants');

class BaseBallInputException {
  #input;

  constructor(input) {
    this.#input = input;
  }

  #isOverlap() {
    return new Set(this.#input.split('')).size === this.#input.length;
  }

  #isNumber() {
    return REGEX.baseballInput.test(this.#input);
  }

  validate() {
    if (!(this.#isOverlap() && this.#isNumber())) {
      throw new Error(ERROR_MESSAGE.baseballInput);
    }
  }
}

module.exports = BaseBallInputException;
