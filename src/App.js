const exceptionHandler = require('./utils/ExceptionHandler');
const BaseBallGame = require('./controller/BaseBallGame');

class App {
  constructor() {
    this.baseBallGame = new BaseBallGame();
  }

  play() {
    this.baseBallGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
