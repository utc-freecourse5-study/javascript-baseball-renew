const BaseBallRepository = require('../../src/repository/BaseBallRepository');
const BaseballStart = require('../../src/service/domain/BaseballStart');
const { MODEL_KEY } = require('../../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BaseBallStart 테스트', () => {
  test('게임 시작, 재시작 시 새로운 랜덤함수가 제대로 생성되는지 확인', () => {
    const randoms = [1, 3, 3, 3, 4];
    mockRandoms(randoms);

    const repo = new BaseBallRepository();

    const baseballStart = new BaseballStart({
      repo: repo,
    });

    baseballStart.storeData();

    expect(repo.read(MODEL_KEY.randomNumber)).toEqual([1, 3, 4]);
  });
});
