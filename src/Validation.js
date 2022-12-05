const Validation = {
  userInput(userInputNumbers) {
    const regExp = new RegExp(/^[1-9]{1,3}$/gm);
    if (userInputNumbers.length !== 3) {
      throw new Error('입력가능한 숫자의 길이는 3자리 입니다.');
    }
    if (!regExp.test(userInputNumbers)) {
      throw new Error('숫자만 입력해주세요');
    }
    if (userInputNumbers.length !== [...new Set(userInputNumbers)].length) {
      throw new Error('중복된 숫자는 불가합니다');
    }
  },
};

module.exports = { Validation };
