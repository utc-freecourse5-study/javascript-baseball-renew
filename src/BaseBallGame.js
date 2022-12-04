const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class BaseBallGame {
  start() {
    OutputView.printStart();
    this.requestBaseBallNumber();
  }

  requestBaseBallNumber() {
    InputView.readBaseBallGameNumber(this.test.bind(this));
  }

  test(number) {
    console.log(number);
    return this.requestBaseBallNumber();
  }
}

module.exports = BaseBallGame;
