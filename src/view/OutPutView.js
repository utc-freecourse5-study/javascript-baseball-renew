const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, COUNT_MESSAGE } = require('../utils/constants');

const OutputView = {
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },

  printGuessResult(guess) {
    this.printNothing(guess.ball, guess.strike);
    this.printBall(guess.ball, guess.strike);
    this.printBallAndStrike(guess.ball, guess.strike);
    this.printStrike(guess.ball, guess.strike);
  },

  printNothing(ball, strike) {
    if (ball === 0 && strike === 0) Console.print(COUNT_MESSAGE.nothing);
  },

  printStrike(ball, strike) {
    if (ball === 0 && strike) Console.print(`${strike}${COUNT_MESSAGE.strike}`);
  },

  printBall(ball, strike) {
    if (strike === 0 && ball) Console.print(`${ball}${COUNT_MESSAGE.ball}`);
  },

  printBallAndStrike(ball, strike) {
    if (ball && strike)
      Console.print(`${ball}${COUNT_MESSAGE.ball} ${strike}${COUNT_MESSAGE.strike}`);
  },

  printFinalResult(attemps) {
    Console.print(GAME_MESSAGE.correct);
    Console.print(GAME_MESSAGE.attempts(attemps));
  },

  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
