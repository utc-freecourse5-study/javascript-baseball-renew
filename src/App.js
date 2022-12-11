const NumberMaker = require("./NumberMaker");
const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  #computerNumbers;

  play() {
    this.#computerNumbers = NumberMaker.makeRandomNumber();
    this.requestBaseBallNumber();
  }

  requestBaseBallNumber() {
    InputView.readBaseBallNumbers((number) => {
      this.tryValidate(Validator.validateNumber, number, this.requestBaseBallNumber);
    });
  }

  tryValidate(validate, input, readLine) {
    try {
      validate(input);
    } catch (error) {
      OutputView.printErrorMessage(error);
      readLine();
    }
  }
}

module.exports = App;
