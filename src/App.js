const MissionUtils = require("@woowacourse/mission-utils");
const ComputerNumber = require("./ComputerNumber");
const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  #tryCount;
  #computerNumbers;

  constructor() {
    OutputView.printOpening();
  }

  play() {
    this.#computerNumbers = new ComputerNumber();
    this.#tryCount = 0;
    this.requestBaseBallNumber();
  }

  requestBaseBallNumber() {
    InputView.readBaseBallNumbers((number) => {
      this.tryValidate(() => {
        Validator.validateNumber(number);
        this.#tryCount++;
        this.checkNumber(this.toArray(number));
      }, this.requestBaseBallNumber.bind(this));
    });
  }

  requestCommand() {
    InputView.readGameCommand((command) => {
      this.tryValidate(() => {
        Validator.validateCommand(command);
        if (command === "1") this.play();
        if (command === "2") MissionUtils.Console.close();
      }, this.requestCommand.bind(this));
    });
  }

  checkNumber(number) {
    OutputView.printGuessResult(this.#computerNumbers.toString(number));
    if (this.#computerNumbers.isOut(number)) {
      this.end();
    }
    this.requestBaseBallNumber();
  }

  end() {
    OutputView.printEnding();
    OutputView.printFinalResult(this.#tryCount);
    this.requestCommand();
  }

  toArray(number) {
    return number.split("").map((i) => Number(i));
  }

  tryValidate(callback, request) {
    try {
      callback();
    } catch (error) {
      OutputView.printErrorMessage(error);
      request();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
