const Validation = {
  userInput(userInputNumbers) {
    const regExp = new RegExp(/^[1-9]{1,3}$/gm);
    if (userInputNumbers.length !== 3) {
      throw new Error('서로 다른 세자리 숫자를 입력해주세요');
    }
    if (userInputNumbers.length !== [...new Set(userInputNumbers)].length) {
      throw new Error('중복된 숫자는 불가합니다');
    }
    if (regExp.test(userInputNumbers)) {
      throw new Error('숫자만 입력해주세요');
    }
  },
};

module.exports = { Validation };
