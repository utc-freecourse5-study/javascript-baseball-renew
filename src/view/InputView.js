const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBaseBallGameNumber(callback) {
    Console.readLine('\n숫자를 입력해주세요 : ', callback);
  },
};
module.exports = InputView;
