class BaseBallStart {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  storeData() {
    this.#repo.create();
  }
}

module.exports = BaseBallStart;
