const Validation = {
  naturalNumbersFromOneToNine(number) {
    const regExp = new RegExp('^[1-9]+$');
    if (!regExp.test(number)) throw '[ERROR]: 1에서 9까지의 자연수를 입력해주세요';
  },

  duplicateNumber(number) {
    if (new Set([...number]).size !== 3) throw '[ERROR]: 서로 다른 세자리 숫자를 입력해주세요';
  },

  inputNumber(number) {
    Validation.naturalNumbersFromOneToNine(number);
    Validation.duplicateNumber(number);
  },

  reTryOrQuit(input) {
    if (input === '1') return;
    if (input === '2') return;
    throw '[ERROR]: 1 또는 2를 입력해주세요';
  },
};
module.exports = Validation;
