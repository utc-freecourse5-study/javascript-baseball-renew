const MissionUtils = require("@woowacourse/mission-utils");
const NumberMaker = require("./NumberMaker");
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
    this.#computerNumbers = NumberMaker.makeRandomNumber();
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

  toArray(number) {
    return number.split("").map((i) => Number(i));
  }

  checkNumber(number) {
    const { strikeCount, ballCount } = this.getStrikeAndBall(this.#computerNumbers, number);
    OutputView.printGuessResult(this.toString(strikeCount, ballCount));
    if (strikeCount === 3) {
      this.end();
      return;
    }
    this.requestBaseBallNumber();
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

  toString(strike, ball) {
    if (strike === 0 && ball === 0) return "낫싱";

    let output = "";
    if (ball > 0) output += ball + "볼 ";
    if (strike > 0) output += strike + "스트라이크";
    return output.trim();
  }

  end() {
    OutputView.printEnding();
    OutputView.printFinalResult(this.#tryCount);
    this.requestCommand();
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
