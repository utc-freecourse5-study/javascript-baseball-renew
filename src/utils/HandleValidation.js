const OutputView = require('../view/OutputView');

const HandleValidation = {
  checkValidation(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  },
};

module.exports = HandleValidation;
