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

    expect(baseBallGame.guess(inputs[0])).toEqual({ ball: 1, strike: 1 });
    expect(baseBallGame.guess(inputs[1])).toEqual({ ball: 1, strike: 0 });
    expect(baseBallGame.guess(inputs[2])).toEqual({ ball: 0, strike: 0 });
    expect(baseBallGame.guess(inputs[3])).toEqual({ ball: 0, strike: 2 });

    expect(baseBallGame.getTrial()).toEqual(4);
  });
});
