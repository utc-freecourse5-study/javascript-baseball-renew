const { Console } = require('@woowacourse/mission-utils');
const controller = require('../controller/BaseballController');
const BaseBallConvert = require('./Convert');

const { BASEBALL_TEXT } = require('../utils/constants');

const OutputView = {
  printGuessResult() {
    const convert = new BaseBallConvert({
      guessData: controller.guess(),
    });

    Console.print(convert.getResult());
    Console.print('');
  },

  printFinalResult() {
    Console.print(BASEBALL_TEXT.final);
    Console.print(`시도한 횟수: ${controller.exit()}번`);
    Console.print('');
  },
};

module.exports = OutputView;
