const MissionUtils = require("@woowacourse/mission-utils");
const NumberMaker = require("./NumberMaker");
const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  #tryCount;
  #computerNumbers;

  constructor() {
    this.#tryCount = 0;
    OutputView.printOpening();
  }

  play() {
    this.#computerNumbers = NumberMaker.makeRandomNumber();
    this.requestBaseBallNumber();
  }

  requestBaseBallNumber() {
    InputView.readBaseBallNumbers((number) => {
      this.tryValidate(Validator.validateNumber, number, this.requestBaseBallNumber);
      this.#tryCount++;
      this.checkNumber(number);
    });
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

    const output = "";
    if (ball.length > 0) output += ball + "볼 ";
    if (strike.length > 0) output += strike + "스트라이크";
    return output.trim();
  }

  end() {
    OutputView.printEnding();
    OutputView.printFinalResult(this.#tryCount);
    this.requestCommand();
  }

  requestCommand() {
    InputView.readGameCommand((command) => {
      this.tryValidate(Validator.validateCommand, command, this.requestCommand);
      if (command === "1") {
        this.play();
      }
      if (command === "2") {
        MissionUtils.Console.close();
      }
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
