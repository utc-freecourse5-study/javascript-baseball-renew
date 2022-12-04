const HandleValidation = require('./utils/HandleValidation');
const Validation = require('./utils/Validation');
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
    if (!HandleValidation.checkValidation(Validation.inputNumber, number)) {
      return this.requestBaseBallNumber();
    }
    console.log('no error');
  }
}

module.exports = BaseBallGame;
