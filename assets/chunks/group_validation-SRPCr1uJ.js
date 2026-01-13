import { y as StandardValidations, a1 as modifyFieldValue } from '../index-Be0fRy6M.js';

function validateData(data, col, value, showError = true) {
  if (col.validationFunctionName && !col.disabled) {
    const validationMessage = StandardValidations[col.validationFunctionName](value);
    if (showError) modifyFieldValue(data, col.name, "alertsErrorMassage", validationMessage);
    return validationMessage;
  } else {
    modifyFieldValue(data, col.name, "alertsErrorMassage", "");
    return null;
  }
}
function validateInputFiledData(data, showError = true) {
  let validationMsg = [];
  data?.map((item) => {
    item?.data?.rowData[0]?.colData.map((element) => {
      let value = "";
      if (element.isSingleSelect) {
        value = element?.value?.name;
      } else {
        value = element?.value;
      }
      if (element.buildConceptIgnore) return null;
      validationMsg.push(validateData(data, element, value, showError));
    });
  });
  return validationMsg.every((value) => value === null);
}

export { validateInputFiledData as v };
