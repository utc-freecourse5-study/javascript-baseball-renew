const MissionUtils = require('@woowacourse/mission-utils');

const BaseBallGame = require('../../src/service/BaseBallGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BaseBallGame 테스트', () => {
  test('동작 테스트', () => {
    const randoms = [1, 3, 3, 3, 4];
    const inputs = ['123', '456', '789', '135'];
    mockRandoms(randoms);

    const baseBallGame = new BaseBallGame();

    baseBallGame.retry();

    baseBallGame.inputNumber(inputs[0]);
    expect(baseBallGame.guess()).toEqual({ ball: 1, strike: 1 });

    baseBallGame.inputNumber(inputs[1]);
    expect(baseBallGame.guess()).toEqual({ ball: 1, strike: 0 });

    baseBallGame.inputNumber(inputs[2]);
    expect(baseBallGame.guess()).toEqual({ ball: 0, strike: 0 });

    baseBallGame.inputNumber(inputs[3]);
    expect(baseBallGame.guess()).toEqual({ ball: 0, strike: 2 });

    expect(baseBallGame.getTrial()).toEqual(4);
  });
});
