const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printGuessResult() {},

  printFinalResult() {},

  printGameStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },
  printUserInputError(errorMessage) {
    Console.print(`${errorMessage}`);
  },
};

module.exports = { OutputView };
