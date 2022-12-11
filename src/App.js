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
      if (!this.tryValidate(Validator.validateNumber, number)) {
        this.requestBaseBallNumber();
        return;
      }
      this.#tryCount++;
      this.checkNumber(this.toArray(number));
    });
  }

  requestCommand() {
    InputView.readGameCommand((command) => {
      if (!this.tryValidate(Validator.validateCommand, command)) {
        this.requestCommand();
        return;
      }
      if (command === "1") this.play();
      if (command === "2") MissionUtils.Console.close();
    });
  }

  checkNumber(number) {
    OutputView.printGuessResult(this.toString(number));
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

  tryValidate(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
