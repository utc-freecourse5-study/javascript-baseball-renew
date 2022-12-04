const { Console } = require('@woowacourse/mission-utils');

const { BASEBALL_TEXT } = require('../utils/constants');

const InputView = {
  readBaseBallNumbers(callback) {
    Console.readLine(BASEBALL_TEXT.baseballInput, callback);
  },

  readGameCommand(callback) {
    Console.readLine(BASEBALL_TEXT.gameCommand, callback);
  },
};

module.exports = InputView;
