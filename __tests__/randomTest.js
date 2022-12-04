const { makeRandom } = require('../src/utils/random');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('makeRandom 테스트', () => {
  test('랜덤함수로 서로 다른 3개 숫자가 만들어졌는지 확인', () => {
    const randoms = [1, 2, 2, 3];

    mockRandoms(randoms);

    expect(makeRandom()).toEqual([1, 2, 3]);
  });
});
