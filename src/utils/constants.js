const GAME_MESSAGE = {
  start: '숫자 야구 게임을 시작합니다.',
  input: '\n숫자를 입력해주세요 : ',
  confirm: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  correct: '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n',
  attempts: (attemps) => `시도한 횟수: ${attemps}번`,
};

const ERROR_MESSEGE = {
  naturalNumbersFromOneToNine: '[ERROR]: 1에서 9까지의 자연수를 입력해주세요',
  duplicateNumber: '[ERROR]: 서로 다른 3개의 숫자를 입력해주세요',
  reTryOrQuit: '[ERROR]: 새로 시작할려면 1, 종료하려면 2를 입력해주세요.',
};

const COMPUTER_NUMBER_RANGE = {
  minimum: 1,
  maximum: 9,
  length: 3,
};

const COUNT_MESSAGE = {
  nothing: '낫싱',
  ball: '볼',
  strike: '스트라이크',
};

const CONFIRM = {
  reStart: '1',
  exit: '2',
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSEGE,
  COMPUTER_NUMBER_RANGE,
  COUNT_MESSAGE,
  CONFIRM,
};
