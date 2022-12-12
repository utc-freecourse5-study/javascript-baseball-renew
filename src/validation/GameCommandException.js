const { REGEX, ERROR_MESSAGE } = require('../utils/constants');

class GameCommandException {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    if (!REGEX.gameCommand.test(this.#input)) {
      throw new Error(ERROR_MESSAGE.gameCommand);
    }
  }
}

module.exports = GameCommandException;
