const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printGuessResult(result) {
    MissionUtils.Console.print(result);
  },
  printFinalResult(count) {
    MissionUtils.Console.print(`시도한 횟수: ${count}번`);
  },
};

module.exports = OutputView;
