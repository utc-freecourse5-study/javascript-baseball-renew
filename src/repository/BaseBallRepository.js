const { MODEL_KEY } = require('../utils/constants');
const { makeRandom } = require('../utils/random');

class BaseBallRepository {
  #model;

  constructor() {
    this.#model = new Map();
  }

  create() {
    this.update(MODEL_KEY.randomNumber, makeRandom());
    this.update(MODEL_KEY.trial, 0);
  }

  read(modelKey) {
    return this.#model.get(modelKey);
  }

  update(modelKey, newData) {
    this.#model.set(modelKey, newData);
  }
}

module.exports = BaseBallRepository;
