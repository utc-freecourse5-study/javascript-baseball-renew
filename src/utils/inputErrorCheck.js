const { Console } = require('@woowacourse/mission-utils');

const errorCheckFor = (exceptionInstance) => {
  try {
    exceptionInstance.validate();
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};

module.exports = {
  errorCheckFor,
};
