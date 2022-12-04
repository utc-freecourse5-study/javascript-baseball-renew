const { REGEX, ERROR_MESSAGE } = require('../utils/constants');

class BaseBallInputException {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    if (!REGEX.baseballInput.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.baseballInput);
    }
  }
}

module.exports = BaseBallInputException;
