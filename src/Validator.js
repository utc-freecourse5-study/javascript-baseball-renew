const Validator = {
  validateNumber(input) {
    if (!Number(input)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (input.length !== 3) {
      throw new Error("[ERROR] 세자리 숫자를 입력해주세요.");
    }
  },

  validateCommand(input) {
    if (input !== "1" && input !== "2") {
      throw new Error("[ERROR] 명령어는 1 혹은 2만 입력해주세요.");
    }
  },
};

module.exports = Validator;
