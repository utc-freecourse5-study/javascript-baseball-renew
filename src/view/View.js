const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');
const controller = require('../controller/BaseballController');
const GameCommandException = require('../validation/GameCommandException');
const BaseBallInputException = require('../validation/BaseBallInputException');

const { errorCheckFor } = require('../utils/inputErrorCheck');
const InputView = require('./InputView');

class View {
  #controller;

  constructor() {
    this.#controller = controller;
  }

  start() {
    this.#controller.inputRandom();
  }

  #strikeOutEvent(guessData) {
    if (guessData.strike === 3) {
      OutputView.printFinalResult(this.#controller);
      this.requestGameCommand();
    } else {
      this.requestBaseballNumber();
    }
  }

  #requestBaseballNumberEvent(input) {
    if (!errorCheckFor(new BaseBallInputException(input))) {
      this.requestBaseballNumber();
    } else {
      this.#controller.inputNumber(input);
      OutputView.printGuessResult(this.#controller);

      this.#strikeOutEvent(this.#controller.outputGuess());
    }
  }

  requestBaseballNumber() {
    InputView.readBaseBallNumbers(this.#requestBaseballNumberEvent.bind(this));
  }

  #requestGameCommandEvent(input) {
    if (!errorCheckFor(new GameCommandException(input)))
      this.requestGameCommand();
    if (input === '1') {
      this.start();
      this.requestBaseballNumber();
    } else {
      Console.close();
    }
  }

  requestGameCommand() {
    InputView.readGameCommand(this.#requestGameCommandEvent.bind(this));
  }
}

module.exports = View;
