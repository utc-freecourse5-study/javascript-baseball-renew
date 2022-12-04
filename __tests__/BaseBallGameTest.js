const BaseBallGame = require('../src/BaseBallGame');
const { Console } = require('@woowacourse/mission-utils');

afterEach(() => {
  Console.close();
});

describe('야구 게임 정답인 컴퓨터 랜덤 숫자 생성 테스트', () => {
  test('createWinningNubmers() 기능 길이 테스트', () => {
    const baseBallGame = new BaseBallGame();
    const winningNumbers = baseBallGame.createWinningNubmers();

    expect(winningNumbers.length).toEqual(3);
  });
  test('createWinningNubmers() 기능 숫자 중복 유무 테스트', () => {
    const baseBallGame = new BaseBallGame();
    const winningNumbers = baseBallGame.createWinningNubmers();
    const duplicatedNumberCheck = new Set(winningNumbers);

    expect(duplicatedNumberCheck.size).toEqual(3);
  });
  test.failing('createWinningNubmers() 기능 실패 테스트', () => {
    const baseBallGame = new BaseBallGame();
    const winningNumbers = baseBallGame.createWinningNubmers();
    const duplicatedNumberCheck = new Set(winningNumbers);

    expect(duplicatedNumberCheck.size).toEqual(2);
  });
});
