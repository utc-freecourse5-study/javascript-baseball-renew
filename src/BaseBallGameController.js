const BaseBallGame = require('./BaseBallGame');
const { CONFIRM } = require('./utils/constants');
const HandleValidation = require('./utils/HandleValidation');
const Validation = require('./utils/Validation');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class BaseBallGameController {
  #baseBallGame;
  constructor() {
    this.#baseBallGame = new BaseBallGame();
  }
  start() {
    OutputView.printStart();
    this.requestBaseBallNumber();
  }

  requestBaseBallNumber() {
    InputView.readBaseBallNumbers(this.checkInputNumber.bind(this));
  }

  checkInputNumber(number) {
    if (!HandleValidation.checkValidation(Validation.inputNumber, number)) {
      return this.requestBaseBallNumber();
    }
    this.judgeBallAndStrike(number);
  }

  judgeBallAndStrike(number) {
    this.#baseBallGame.makeRandomNumber();
    const guess = this.#baseBallGame.guess(number);
    OutputView.printGuessResult(guess);
    this.checkThreeStrike(guess);
  }

  checkThreeStrike(guess) {
    if (guess.ball === 0 && guess.strike === 3) {
      const attemps = this.#baseBallGame.getAttempts();
      OutputView.printFinalResult(attemps);
      this.requestGameCommand();
    }

    this.#baseBallGame.addAttempts();
    this.requestBaseBallNumber();
  }

  requestGameCommand() {
    InputView.readGameCommand(this.reTryOrQuit.bind(this));
  }

  reTryOrQuit(input) {
    if (!HandleValidation.checkValidation(Validation.reTryOrQuit, input)) {
      return this.requestGameCommand();
    }

    if (input === CONFIRM.reStart) {
      this.#baseBallGame.retry();
      return this.requestBaseBallNumber();
    }
    return this.#baseBallGame.quit();
  }
}

module.exports = BaseBallGameController;
