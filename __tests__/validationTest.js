const GameCommandException = require('../src/validation/GameCommandException');
const BaseBallInputException = require('../src/validation/BaseBallInputException');

describe('GameCommand 입력값 테스트', () => {
  test.each([['a'], ['3'], ['21'], ['1 ']])(
    '(실패) 재시작/종료 입력값 확인',
    (input) => {
      const gameCommandException = new GameCommandException(input);
      expect(() => gameCommandException.validate()).toThrow('[ERROR]');
    }
  );

  test('(성공) 재시작/종료 입력값 확인', () => {
    const input = '1';
    const gameCommandException = new GameCommandException(input);

    expect(() => gameCommandException.validate()).not.toThrow();
  });
});

describe('BaseBallInputException 입력값 테스트', () => {
  test.each([['13'], ['1a2'], ['123 '], ['122'], ['12 ']])(
    '(실패) 숫자 입력값 확인',
    (input) => {
      const baseBallInputException = new BaseBallInputException(input);
      expect(() => baseBallInputException.validate()).toThrow('[ERROR]');
    }
  );

  test('(성공) 재시작/종료 입력값 확인', () => {
    const input = '123';
    const baseBallInputException = new BaseBallInputException(input);

    expect(() => baseBallInputException.validate()).not.toThrow();
  });
});
