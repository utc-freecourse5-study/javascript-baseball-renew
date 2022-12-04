class BaseBallConvert {
  #guessData;

  #trial;

  constructor({ controller }) {
    this.#guessData = controller.outputGuess();
    this.#trial = controller.outputTrial();
  }

  #convertStrike() {
    const result = this.#guessData.strike;

    return result > 0 ? `${result}스트라이크` : '';
  }

  #convertBall() {
    const result = this.#guessData.ball;

    return result > 0 ? `${result}볼` : '';
  }

  getGuessResult() {
    const result = `${this.#convertBall()} ${this.#convertStrike()}`.trim();

    if (result === '') return '낫싱';
    return result;
  }

  getTrialResult() {
    return `시도한 횟수: ${this.#trial}번`;
  }
}

module.exports = BaseBallConvert;
