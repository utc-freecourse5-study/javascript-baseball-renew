const Validation = {
  userInputOfGameNumbers(userInputNumbers) {
    const regExp = /^[1-9]{1,3}$/gm;
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
  userInputRetryNumber(userInputNumber) {
    if (userInputNumber !== '1' && userInputNumber !== '2') {
      throw new Error('재시작 및 종료 입력은 1 과 2 만 가능합니다.');
    }
  },
};

module.exports = { Validation };
