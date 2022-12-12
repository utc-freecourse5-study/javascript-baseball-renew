const View = require('./view/View');

class App {
  #view;

  constructor() {
    this.#view = new View();
  }

  play() {
    this.#view.start();
    this.#view.requestBaseballNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
