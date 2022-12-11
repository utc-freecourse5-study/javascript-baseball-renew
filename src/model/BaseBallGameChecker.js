const BaseBallGameChecker = {
  strike(userInputNumbers, computerNumbers) {
    return [...userInputNumbers].filter((number, index) => number === computerNumbers[index])
      .length;
  },

  ball(userInputNumbers, computerNumbers) {
    return [...userInputNumbers].filter(
      (number, index) => computerNumbers.includes(number) && !(number === computerNumbers[index])
    ).length;
  },

  nothing(userInputNumbers, computerNumbers) {
    return [...userInputNumbers].every((number) => {
      !computerNumbers.includes(number);
    });
  },
};

module.exports = { BaseBallGameChecker };
