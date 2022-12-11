const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printOpening() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  },

  printEnding() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  },

  printErrorMessage(error) {
    MissionUtils.Console.print(error.message);
  },

  printGuessResult(result) {
    MissionUtils.Console.print(result);
  },

  printFinalResult(count) {
    MissionUtils.Console.print(`시도한 횟수: ${count}번`);
  },
};

module.exports = OutputView;
