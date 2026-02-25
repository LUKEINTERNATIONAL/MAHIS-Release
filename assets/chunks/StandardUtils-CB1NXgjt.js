const syncChildUIs = (refs, data) => {
  if (!refs || !data) return;
  Object.entries(data).forEach(([key, value]) => {
    const fieldRef = refs.get(key);
    if (fieldRef && typeof fieldRef.setValue === "function") {
      fieldRef.setValue(value);
    }
  });
};

export { syncChildUIs as s };
