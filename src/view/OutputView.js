const { Console } = require('@woowacourse/mission-utils');
const BaseBallConvert = require('./Convert');

const { BASEBALL_TEXT } = require('../utils/constants');

const OutputView = {
  printGuessResult(controllerInstance) {
    const convert = new BaseBallConvert({
      controller: controllerInstance,
    });

    Console.print(convert.getGuessResult());
    Console.print('');
  },

  printFinalResult(controllerInstance) {
    const convert = new BaseBallConvert({
      controller: controllerInstance,
    });

    Console.print(BASEBALL_TEXT.final);
    Console.print(convert.getTrialResult());
    Console.print('');
  },
};

module.exports = OutputView;
