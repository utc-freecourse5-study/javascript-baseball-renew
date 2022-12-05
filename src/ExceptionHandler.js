const { OutputView } = require('./OutputView');
const { Validation } = require('./Validation');

function exceptionHandler(nextGameStep, replayGameStep) {
  try {
    nextGameStep();
  } catch (error) {
    OutputView.printUserInputError(error.message);
    replayGameStep();
  }
}

module.exports = exceptionHandler;
