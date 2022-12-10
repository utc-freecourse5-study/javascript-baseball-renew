const BaseBallGameController = require('./baseBallGameController');

class App {
  #baseBallGame;
  constructor() {
    this.#baseBallGame = new BaseBallGameController();
  }
  play() {
    this.#baseBallGame.start();
  }
}
const app = new App();
app.play();
module.exports = App;
