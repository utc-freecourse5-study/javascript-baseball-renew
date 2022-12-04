const BaseBallGame = require('./BaseBallGame');

class App {
  #baseBallGame;
  constructor() {
    this.#baseBallGame = new BaseBallGame();
  }
  play() {
    this.#baseBallGame.start();
  }
}
const app = new App();
app.play();
module.exports = App;
