const BaseBallGameController = require('../src/baseBallGameController');

describe('reTryOrQuit Test', () => {
  test('잘못된 입력값을 입력했을때 재요청하는지 test Test', () => {
    const baseBallGameController = new BaseBallGameController();
    const spyFn = jest.spyOn(baseBallGameController, 'requestGameCommand');
    baseBallGameController.reTryOrQuit('a');
    expect(spyFn).toHaveBeenCalledTimes(1);
  });

  test('재시작 입력값을 입력했을때 숫자 입력 요청값이 작동하는지 Test', () => {
    const baseBallGameController = new BaseBallGameController();
    const spyFn = jest.spyOn(baseBallGameController, 'requestBaseBallNumber');
    baseBallGameController.reTryOrQuit('1');
    expect(spyFn).toHaveBeenCalledTimes(1);
  });
});
