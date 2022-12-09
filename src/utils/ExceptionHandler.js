const { OutputView } = require('../view/OutputView');

const exceptionHandler = (nextGameStep, replayGameStep) => {
  try {
    nextGameStep();
  } catch (error) {
    OutputView.printUserInputError(error.message);
    replayGameStep();
  }
};

module.exports = { exceptionHandler };
