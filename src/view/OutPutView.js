const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printGuessResult(guess) {
    this.printNothing(guess.ball, guess.strike);
    this.printBall(guess.ball, guess.strike);
    this.printBallAndStrike(guess.ball, guess.strike);
    this.printStrike(guess.ball, guess.strike);
  },

  printNothing(ball, strike) {
    if (ball === 0 && strike === 0) Console.print('낫싱');
  },

  printStrike(ball, strike) {
    if (ball === 0 && strike) Console.print(`${strike}스트라이크`);
  },

  printBall(ball, strike) {
    if (strike === 0 && ball) Console.print(`${ball}볼`);
  },

  printBallAndStrike(ball, strike) {
    if (ball && strike) Console.print(`${ball}볼 ${strike}스트라이크`);
  },

  printFinalResult(attemps) {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
    Console.print(`시도한 횟수: ${attemps}번`);
  },

  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
