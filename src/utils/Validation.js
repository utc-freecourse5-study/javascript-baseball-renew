const { CONFIRM, ERROR_MESSEGE } = require('./constants');

const Validation = {
  naturalNumbersFromOneToNine(number) {
    const regExp = new RegExp('^[1-9]+$');
    if (!regExp.test(number)) throw ERROR_MESSEGE.naturalNumbersFromOneToNine;
  },

  duplicateNumber(number) {
    if (new Set([...number]).size !== 3) throw ERROR_MESSEGE.duplicateNumber;
  },

  inputNumber(number) {
    Validation.naturalNumbersFromOneToNine(number);
    Validation.duplicateNumber(number);
  },

  reTryOrQuit(input) {
    if (input === CONFIRM.reStart) return;
    if (input === CONFIRM.exit) return;
    throw ERROR_MESSEGE.reTryOrQuit;
  },
};
module.exports = Validation;
