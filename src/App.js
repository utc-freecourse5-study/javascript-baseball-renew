const { Console } = require('@woowacourse/mission-utils');
const exceptionHandler = require('./ExceptionHandler');
const BaseBallGame = require('./BaseBallGame');
const { InputView } = require('./InputView');
const { OutputView } = require('./OutputView');
const { Validation } = require('./Validation');

class App {
  constructor() {
    this.baseBallGame = new BaseBallGame();
  }

  play() {
    this.baseBallGameStart();
  }

  baseBallGameStart() {
    OutputView.printGameStartMessage();
    this.baseBallGame.assignComputerNumbers();
    this.requestNumbersOfUser();
  }

  requestNumbersOfUser() {
    InputView.readBaseBallNumbers((userInput) => {
      exceptionHandler(
        () => this.checkBaseBallCountOfUser(userInput),
        () => this.requestNumbersOfUser()
      );
    });
  }

  checkBaseBallCountOfUser(userInput) {
    Validation.userInputOfGameNumbers(userInput);
    const count = this.baseBallGame.checkUserBaseBallCount(userInput);
    OutputView.printBaseBallCount(count);
  }
}

const app = new App();
app.play();

module.exports = App;
