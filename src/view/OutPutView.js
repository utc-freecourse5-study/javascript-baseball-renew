const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
