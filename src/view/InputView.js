const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants');

const InputView = {
  readBaseBallNumbers(callback) {
    Console.readLine(GAME_MESSAGE.input, callback);
  },

  readGameCommand(callback) {
    Console.readLine(GAME_MESSAGE.confirm, callback);
  },
};
module.exports = InputView;
