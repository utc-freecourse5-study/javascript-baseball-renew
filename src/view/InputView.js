const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBaseBallNumbers(callback) {
    Console.readLine('\n숫자를 입력해주세요 : ', callback);
  },
  readGameCommand() {},
};
module.exports = InputView;
