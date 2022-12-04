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

  #validateBaseballNumberLogic(input) {
    const baseBallInputException = new BaseBallInputException(input);
    baseBallInputException.validate();

    this.#controller.inputNumber(input);
    OutputView.printGuessResult(this.#controller);

    this.#strikeOutEvent(this.#controller.outputGuess());
  }

  #requestBaseballNumberEvent(input) {
    errorCheckFor(
      () => this.#validateBaseballNumberLogic(input),
      () => this.requestBaseballNumber()
    );
  }

  requestBaseballNumber() {
    InputView.readBaseBallNumbers(this.#requestBaseballNumberEvent.bind(this));
  }

  #validateGameCommandLogic(input) {
    const gameCommandException = new GameCommandException(input);
    gameCommandException.validate();
    if (input === '1') {
      this.start();
      this.requestBaseballNumber();
    } else {
      Console.close();
    }
  }

  #requestGameCommandEvent(input) {
    errorCheckFor(
      () => this.#validateGameCommandLogic(input),
      () => this.requestGameCommandEvent()
    );
  }

  requestGameCommand() {
    InputView.readGameCommand(this.#requestGameCommandEvent.bind(this));
  }
}

module.exports = View;
