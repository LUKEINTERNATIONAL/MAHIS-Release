import { l as lodashExports } from './lodash-D-_KzUJJ.js';

function validateSeries(conditions) {
  try {
    for (const i in conditions) {
      const condition = conditions[i]();
      if (condition) return condition;
    }
  } catch (e) {
    return [e];
  }
}
function required(value) {
  return lodashExports.isEmpty(value) ? ["Value is required"] : null;
}
function isFloatingPointNumber(val) {
  return lodashExports.isPlainObject(val) && !/^[-+]?[0-9]*\.?[0-9]+$/.test(`${val?.value}`) ? ["Not a valid number"] : null;
}
function isMWPhoneNumber(val) {
  const validation = /^(\+?265|0)(((8[89]|9[89])\d{7})|(1\d{6})|(2\d{8})|(31\d{8}))$/;
  return !val || !val.value.match(validation) ? ["Not a valid phone number"] : null;
}
function isMWNationalID(nationalId) {
  const nationalIDRegex = /^(?=[a-zA-Z0-9]*$)(?=\d+[a-zA-Z]|[a-zA-Z]+\d)([a-zA-Z\d]){8}$/;
  return lodashExports.isEmpty(nationalId) || !nationalId.value.toString().match(nationalIDRegex) ? ["Not a valid Malawi National ID number"] : null;
}
function isIPAddress(val) {
  const validation = /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/;
  return !val || !val.value.match(validation) ? ["Not a valid IP address"] : null;
}
function isName(value) {
  const validation = /^(?=.{2,100}$)[a-z!A-Z]+(?:['_.\-!\][a-z]+[a-z!A-Z])*$/;
  return !value || !value.label.match(validation) ? ["Invalid name Input"] : null;
}
function isNumber(val) {
  return isNaN(parseInt(val.value)) ? ["Value must be a number"] : null;
}
function hasLengthRangeOf(val, min, max) {
  const len = val ? val.label.length : 0;
  return len >= min && len <= max ? null : [`Value length not within range of ${min} - ${max}`];
}
function rangeOf(val, min, max) {
  const value = parseInt(val.label);
  return value >= min && value <= max ? null : [`${value} not within range of ${min} - ${max}`];
}
function neitherOr(val) {
  const allNo = val.filter((arr) => {
    const val2 = arr.value || arr.other.value;
    return val2 === "No";
  });
  if (allNo.length == val.length) {
    return ["All values can not be no"];
  }
  return null;
}
function anyEmpty(val) {
  const error = ["all must be selected"];
  if (!val) return error;
  const allNo = val.filter((i) => i.value === "");
  return allNo.length > 0 ? error : null;
}
function notTheSame(val, comparison) {
  return val === comparison ? ["Values can not be the same"] : null;
}
const Validation = {
  isFloatingPointNumber,
  validateSeries,
  required,
  isMWPhoneNumber,
  isName,
  isNumber,
  hasLengthRangeOf,
  rangeOf,
  neitherOr,
  anyEmpty,
  notTheSame,
  isIPAddress,
  isMWNationalID
};

export { Validation as V };
