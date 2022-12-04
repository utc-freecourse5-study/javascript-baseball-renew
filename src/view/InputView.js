const { Console } = require('@woowacourse/mission-utils');

const GameCommandException = require('../validation/GameCommandException');

const controller = require('../controller/BaseballController');
const OutputView = require('./OutputView');

const { BASEBALL_TEXT } = require('../utils/constants');
const { errorCheckFor } = require('../utils/inputErrorCheck');

const InputView = {
  controller,

  start() {
    controller.start();
  },

  readBaseBallNumbers() {
    Console.readLine(BASEBALL_TEXT.baseballInput, (input) => {
      Console.print(input);
      errorCheckFor(
        () => this.strikeOutEvent(this.controller.guess(input)),
        () => this.readBaseBallNumbers()
      );
    });
  },

  readGameCommand() {
    Console.readLine(BASEBALL_TEXT.gameCommand, (input) => {
      errorCheckFor(
        () => this.commandEvent(input),
        () => this.readGameCommand()
      );
    });
  },

  isStrikeOut(guessData) {
    return guessData.strike === 3;
  },

  strikeOutEvent(guessData) {
    if (this.isStrikeOut(guessData)) {
      OutputView.printFinalResult();
      this.readGameCommand();
      return;
    }

    this.readBaseBallNumbers();
  },

  commandEvent(input) {
    const gameCommandException = new GameCommandException(input);
    gameCommandException.validate();

    if (input === '1') {
      this.controller.start();
    }
  },
};

module.exports = InputView;
