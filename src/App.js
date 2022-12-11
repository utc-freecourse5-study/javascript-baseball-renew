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

  checkNumber(number) {
    const { strikeCount, ballCount } = this.getStrikeAndBall(this.#computerNumbers, userNumber);
  }

  getStrikeCount(computerNumber, userNumber) {
    return computerNumber.filter((number, index) => number === userNumber[index]).length;
  }

  getBallCount(computerNumber, userNumber) {
    return computerNumber.filter((number, index) => userNumber.includes(number) && number !== userNumber[index]).length;
  }

  getStrikeAndBall(computerNumber, userNumber) {
    const strikeCount = this.getStrikeCount(computerNumber, userNumber);
    const ballCount = this.getBallCount(computerNumber, userNumber);

    return { strikeCount: strikeCount, ballCount: ballCount };
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
