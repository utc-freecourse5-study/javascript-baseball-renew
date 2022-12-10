const Validation = require('../src/utils/Validation');
const ERROR_MESSAGE = require('../src/utils/constants');
const { Console } = require('@woowacourse/mission-utils');

describe('Validation Test', () => {
  test.each(['0', 'a', '-3', '120'])('1-9까지 숫자 예외 테스트', (input) => {
    expect(() => {
      Validation.naturalNumbersFromOneToNine(input);
    }).toThrow(ERROR_MESSAGE.naturalNumbersFromOneToNine);
  });

  test.each(['122', '133', '455', '788'])('중복 Test', (input) => {
    expect(() => {
      Validation.duplicateNumber(input);
    }).toThrow(ERROR_MESSAGE.duplicateNumber);
  });

  test.each(['3', '0', 'a', '-1'])('중복 Test', (input) => {
    expect(() => {
      Validation.reTryOrQuit(input);
    }).toThrow(ERROR_MESSAGE.reTryOrQuit);
  });
});
