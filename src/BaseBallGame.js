const OutputView = require('./view/OutputView');

class BaseBallGame {
  start() {
    OutputView.printStart();
  }
}

module.exports = BaseBallGame;
