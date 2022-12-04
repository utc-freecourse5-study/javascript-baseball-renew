const BaseBallGame = require('./BaseBallGame');
const { OutputView } = require('./OutputView');

class App {
  constructor() {
    this.baseBallGame = new BaseBallGame();
  }

  play() {
    this.gameStart();
  }

  gameStart() {
    OutputView.printGameStartMessage();
    this.baseBallGame.assignComputerNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
