const MissionUtils = require('@woowacourse/mission-utils');

const BaseBallRepository = require('../../src/repository/BaseBallRepository');
const BaseballGuess = require('../../src/service/domain/BaseballGuess');
const { MODEL_KEY } = require('../../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BaseBallGuess 테스트', () => {
  test('숫자 입력 시 시도횟수 증가, 제대로 스트라이크 볼 판별하는 지 확인', () => {
    const input = '123';
    const randoms = [1, 3, 3, 3, 4];
    mockRandoms(randoms);

    const repo = new BaseBallRepository();
    repo.create();

    const baseballGuess = new BaseballGuess({
      input: input,
      repo: repo,
    });

    expect(baseballGuess.getOutput()).toEqual({ ball: 1, strike: 1 });
    expect(repo.read(MODEL_KEY.trial)).toEqual(1);
  });
});
