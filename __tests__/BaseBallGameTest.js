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

describe('checkStrike() 기능 테스트', () => {
  test('user 입력과 computer의 입력을 넘겼을때 스트라이크가 제대로 계산되는지 확인', () => {
    const baseBallGame = new BaseBallGame();
    const userInputNumbers = '123';
    const computerNumbers = '326';
    const strike = baseBallGame.checkStrike(userInputNumbers, computerNumbers);
    expect(strike).toEqual(1);
  });
  test.failing('스트라이크의 개수가 잘못됐을때 실패하는지 확인', () => {
    const baseBallGame = new BaseBallGame();
    const userInputNumbers = '123';
    const computerNumbers = '316';
    const strike = baseBallGame.checkStrike(userInputNumbers, computerNumbers);
    expect(strike).toEqual(1);
  });
});

describe('checkBall() 기능 테스트', () => {
  test('user 입력과 computer의 입력을 넘겼을때 스트라이크가 제대로 계산되는지 확인', () => {
    const baseBallGame = new BaseBallGame();
    const userInputNumbers = '123';
    const computerNumbers = '317';
    const ball = baseBallGame.checkBall(userInputNumbers, computerNumbers);
    expect(ball).toEqual(2);
  });
  test.failing('스트라이크의 개수가 잘못됐을때 실패하는지 확인', () => {
    const baseBallGame = new BaseBallGame();
    const userInputNumbers = '123';
    const computerNumbers = '346';
    const ball = baseBallGame.checkBall(userInputNumbers, computerNumbers);
    expect(ball).toEqual(2);
  });
});
