class BaseBallConvert {
  #guessData;

  constructor({ guessData }) {
    this.#guessData = guessData;
  }

  #convertStrike() {
    const result = this.#guessData.strike;

    return result > 0 ? `${result}스트라이크` : '';
  }

  #convertBall() {
    const result = this.#guessData.ball;

    return result > 0 ? `${result}볼` : '';
  }

  getResult() {
    const result = `${this.#convertBall()} ${this.#convertStrike()}`.trim();

    if (result === '') return '낫싱';
    return result;
  }
}

module.exports = BaseBallConvert;
