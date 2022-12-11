const NumberMaker = require("./NumberMaker");

class ComputerNumber {
  #numbers;

  constructor() {
    this.#numbers = NumberMaker.makeRandomNumber();
  }

  isOut(userNumbers) {
    return this.getStrikeCount(userNumbers) === 3;
  }

  getStrikeCount(userNumbers) {
    return this.#numbers.filter((number, index) => number === userNumbers[index]).length;
  }

  getBallCount(userNumbers) {
    return this.#numbers.filter((number, index) => userNumbers.includes(number) && number !== userNumbers[index])
      .length;
  }

  getStrikeAndBall(userNumbers) {
    const strikeCount = this.getStrikeCount(userNumbers);
    const ballCount = this.getBallCount(userNumbers);

    return { strikeCount: strikeCount, ballCount: ballCount };
  }

  toString(userNumbers) {
    const { strikeCount, ballCount } = this.getStrikeAndBall(userNumbers);
    if (strikeCount === 0 && ballCount === 0) return "낫싱";

    let output = "";
    if (ballCount > 0) output += ballCount + "볼 ";
    if (strikeCount > 0) output += strikeCount + "스트라이크";
    return output.trim();
  }
}

module.exports = ComputerNumber;
