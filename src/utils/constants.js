const REGEX = Object.freeze({
  gameCommand: /^1{1}$|^2{1}$/,
});

const ERROR_MESSAGE = Object.freeze({
  gameCommand: '[ERROR] 재시작/종료 명령어는 각각 1, 2이어야만 합니다.',
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
};
