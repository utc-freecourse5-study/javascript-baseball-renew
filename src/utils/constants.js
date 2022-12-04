const REGEX = Object.freeze({
  gameCommand: /^1{1}$|^2{1}$/,
  baseballInput: /^[1-9]{3}$/,
});

const ERROR_MESSAGE = Object.freeze({
  gameCommand: '[ERROR] 재시작/종료 명령어는 각각 1, 2이어야만 합니다.',
  baseballInput: '[ERROR] [ERROR]: 서로 다른 세자리 숫자를 입력해주세요',
});

const MODEL_KEY = Object.freeze({
  trial: 'BASEBALL_TRY_COUNT',
  randomNumber: 'BASEBALL_RANDOM_NUMBER',
  inputNumber: 'BASEBALL_INPUT_NUMBER',
});

const BASEBALL_TEXT = Object.freeze({
  baseballInput: '숫자를 입력하세요 : ',
  gameCommand: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  final: '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n',
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
  BASEBALL_TEXT,
};
