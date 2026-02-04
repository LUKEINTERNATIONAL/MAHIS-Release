import { aq as ConceptService, a2 as getFieldValue, H as HisDate } from '../index-CMNG45JS.js';

async function formatRadioButtonData(data, date = ConceptService.getSessionDate(), childData = []) {
  const buildObjPromises = data.map(async (item) => {
    if (item && item.radioBtnContent && item.radioBtnContent.header && item.radioBtnContent.header.selectedValue) {
      const value_coded = await ConceptService.getConceptID(item.radioBtnContent.header.selectedValue, true);
      const concept_id = await ConceptService.getConceptID(item.radioBtnContent.header.name, true);
      const obs_datetime = getFieldValue(data, item.radioBtnContent.header.name + " date", "value") || date;
      const childNames = childData.map((item2) => {
        return {
          concept_id: value_coded,
          value_coded: item2.drug_inventory_id,
          obs_datetime
        };
      });
      if (childData) {
        return {
          concept_id,
          value_coded,
          obs_datetime,
          child: childNames
        };
      } else {
        return {
          concept_id,
          value_coded,
          obs_datetime
        };
      }
    } else {
      return null;
    }
  });
  return (await Promise.all(buildObjPromises)).filter((obj) => obj !== null);
}
async function formatGroupRadioButtonData(data, date = ConceptService.getSessionDate(), childData = []) {
  const buildObjPromises = data.map(async (item) => {
    if (item && item.groupedRadioBtnContent && item.groupedRadioBtnContent.groupedData && item.groupedRadioBtnContent.groupedData[0]?.header?.selectedValue) {
      const value_coded = await ConceptService.getConceptID(item.groupedRadioBtnContent.groupedData[0]?.header?.selectedValue, true);
      const concept_id = await ConceptService.getConceptID(item.groupedRadioBtnContent.groupedData[0]?.header?.name, true);
      const obs_datetime = date || ConceptService.getSessionDate();
      return {
        concept_id,
        value_coded,
        obs_datetime
      };
    } else {
      return null;
    }
  });
  return (await Promise.all(buildObjPromises)).filter((obj) => obj !== null);
}
async function formatInputFiledData(data, obs_datetime = HisDate.sessionDate(), childData = "") {
  const buildObjPromises = data.map(async (item) => {
    if (!item?.data?.rowData) return [];
    return Promise.all(
      item.data.rowData[0].colData.map(async (element) => {
        let value = [];
        if (element.isMultiSelect && element?.value) {
          value = await Promise.all(
            element?.value.map(async (item2) => {
              return await getValue(element, item2.concept_id, obs_datetime, childData);
            })
          );
        } else if (element.isSingleSelect) {
          value = element?.value?.name;
        } else {
          value = element?.value;
        }
        if (element.buildConceptIgnore || !value) return null;
        if (typeof value === "object") {
          return value;
        } else {
          return await getValue(element, value, obs_datetime);
        }
      })
    ).then((dataArray) => dataArray.filter(Boolean));
  });
  const results = await Promise.all(buildObjPromises);
  return results.flat().flat();
}
async function getValue(element, value, obs_datetime, childData = "") {
  const concept_id = await ConceptService.getConceptID(element.name, true);
  if (element.valueType === "coded") {
    const value_concept_id = await ConceptService.getConceptID(value, true);
    if (childData) {
      return {
        concept_id,
        value_coded: value_concept_id,
        obs_datetime,
        child: [
          {
            concept_id,
            value_text: childData,
            obs_datetime
          }
        ]
      };
    } else {
      return { concept_id, value_coded: value_concept_id, obs_datetime };
    }
  } else if (element.valueType === "text") {
    return { concept_id, value_text: value, obs_datetime };
  } else if (element.valueType === "number") {
    return { concept_id, value_numeric: value, obs_datetime };
  } else {
    return null;
  }
}
async function formatCheckBoxData(data, obs_datetime = ConceptService.getSessionDate(), childData = []) {
  if (!Array.isArray(data)) {
    return [];
  }
  const buildObjPromises = await Promise.all(
    data.map(async (item) => {
      if (!item?.checkboxBtnContent?.data?.length) {
        return [];
      }
      const checkboxPromises = item.checkboxBtnContent.data.map(async (checkboxData) => {
        if (!checkboxData?.checked || checkboxData?.buildConceptIgnore) {
          return null;
        }
        try {
          const value_coded = await ConceptService.getConceptID(checkboxData.value, true);
          const concept_id = await ConceptService.getConceptID(item.checkboxBtnContent.header.name, true);
          const date = getFieldValue(data, checkboxData.name + " date", "value");
          obs_datetime = date || obs_datetime;
          if (!value_coded || !concept_id) {
            return null;
          }
          const baseObj = {
            concept_id,
            value_coded,
            obs_datetime
          };
          if (childData.length > 0) {
            const childNames = childData.map((child) => ({
              concept_id: value_coded,
              value_coded: child.drug_inventory_id,
              obs_datetime
            }));
            return {
              ...baseObj,
              child: childNames
            };
          }
          return baseObj;
        } catch (error) {
          console.error("Error processing checkbox data:", error);
          return null;
        }
      });
      return (await Promise.all(checkboxPromises)).filter(Boolean);
    })
  );
  return buildObjPromises.flat().filter(Boolean);
}

export { formatGroupRadioButtonData as a, formatCheckBoxData as b, formatRadioButtonData as c, formatInputFiledData as f };
