const { Console } = require('@woowacourse/mission-utils');

const InputView = require('./view/InputView');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.\n');
    InputView.start();
    InputView.readBaseBallNumbers();

    return this;
  }
}

const app = new App();
app.play();

module.exports = App;
