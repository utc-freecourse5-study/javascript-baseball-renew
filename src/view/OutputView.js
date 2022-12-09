const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printGuessResult() {},

  printFinalResult(tryCount) {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료\n시도한 횟수: ${tryCount}번`);
  },

  printBaseBallCount({ strike, ball }) {
    if (strike !== 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    if (strike === 0 && ball !== 0) {
      Console.print(`${ball}볼`);
      return;
    }
    if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return;
    }
    Console.print('낫싱');
  },

  printGameStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printUserInputError(errorMessage) {
    Console.print(`${errorMessage}`);
  },
};

module.exports = { OutputView };
