const BaseBallGameSystem = require('../model/BaseBallGameSystem');
const { exceptionHandler } = require('../utils/ExceptionHandler');
const { Validation } = require('../utils/Validation');
const { InputView } = require('../view/InputView');
const { OutputView } = require('../view/OutputView');
const { Console } = require('@woowacourse/mission-utils');

class BaseBallGame {
  constructor() {
    this.baseBallGameSystem = new BaseBallGameSystem();
  }

  start() {
    OutputView.printGameStartMessage();
    this.computerNumberSetting();
    this.requestNumbersOfUser();
  }

  computerNumberSetting() {
    this.baseBallGameSystem.assignComputerNumbers();
  }

  requestNumbersOfUser() {
    InputView.readBaseBallNumbers((userInput) => {
      exceptionHandler(
        () => this.checkUserCount(userInput),
        () => this.requestNumbersOfUser()
      );
    });
  }

  checkUserCount(userInput) {
    Validation.userInputOfGameNumbers(userInput);
    const checkedUserCount = this.baseBallGameSystem.checkUserBaseBallCount(userInput);
    OutputView.printBaseBallCount(checkedUserCount);
    this.checkGameStatus(checkedUserCount);
  }

  checkGameStatus({ strike }) {
    this.baseBallGameSystem.guess(strike)
      ? this.userWinBaseBallGame()
      : this.requestNumbersOfUser();
  }

  userWinBaseBallGame() {
    OutputView.printFinalResult(this.baseBallGameSystem.getTryCount());
    InputView.readGameCommand((userCommand) => {
      exceptionHandler(
        () => {
          this.requestRetryOrQuit(userCommand);
        },
        () => {
          this.userWinBaseBallGame();
        }
      );
    });
  }
  requestRetryOrQuit(userCommand) {
    Validation.userInputRetryNumber(userCommand);
    this.baseBallGameSystem.isRetry(userCommand) ? this.retry() : this.quit();
  }

  retry() {
    Console.close();
  }

  quit() {
    Console.close();
  }
}

module.exports = BaseBallGame;
