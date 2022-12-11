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
    const { strike, ball } = this.baseBallGameSystem.checkUserBaseBallCount(userInput);
    this.requestViewForPrint(strike, ball);
    this.checkGameStatus(strike, ball);
  }

  requestViewForPrint(strike, ball) {
    OutputView.printBaseBallCount(strike, ball);
  }

  checkGameStatus(strike, ball) {
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
    this.computerNumberSetting();
    this.requestNumbersOfUser();
    this.baseBallGameSystem.retry();
  }

  quit() {
    Console.close();
  }
}

module.exports = BaseBallGame;
