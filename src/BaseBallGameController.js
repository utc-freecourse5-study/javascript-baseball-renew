const BaseBallGame = require('./BaseBallGame');
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
    InputView.readBaseBallNumbers(this.judgeStrikeAndBall.bind(this));
  }

  checkInputNumber(number) {
    if (!HandleValidation.checkValidation(Validation.inputNumber, number)) {
      return this.requestBaseBallNumber();
    }
    this.judgeBallAndStrike();
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
    }

    this.#baseBallGame.retry();
    this.requestBaseBallNumber();
  }
}

module.exports = BaseBallGameController;
