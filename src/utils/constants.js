const REGEX = Object.freeze({
  gameCommand: /^1{1}$|^2{1}$/,
  baseballInput: /^[1-9]{3}$/,
});

const ERROR_MESSAGE = Object.freeze({
  gameCommand: '[ERROR] 재시작/종료 명령어는 각각 1, 2이어야만 합니다.',
  baseballInput: '[ERROR] [ERROR]: 서로 다른 세자리 숫자를 입력해주세요',
});

const MODEL_KEY = Object.freeze({
  randomNumber: 'BASEBALL_RANDOM_NUMBER',
  trial: 'BASEBALL_TRY_COUNT',
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
  MODEL_KEY,
};
