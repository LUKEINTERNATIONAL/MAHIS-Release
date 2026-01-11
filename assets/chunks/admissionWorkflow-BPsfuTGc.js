const normalizeEncounterName = (name) => {
  return (name ?? "").toString().trim().toUpperCase();
};
const buildNormalizedEncounterSet = (names) => {
  if (!names?.length) return /* @__PURE__ */ new Set();
  const normalizedSet = /* @__PURE__ */ new Set();
  names.forEach((name) => normalizedSet.add(normalizeEncounterName(name)));
  return normalizedSet;
};
const getSequentiallyCompletedStepCount = (savedEncounterNames, steps) => {
  if (!steps.length) {
    return 0;
  }
  const normalizedEncounters = buildNormalizedEncounterSet(savedEncounterNames);
  let completedSteps = 0;
  for (const step of steps) {
    const hasEncounter = step.encounterNames.some((name) => normalizedEncounters.has(normalizeEncounterName(name)));
    if (!hasEncounter) {
      break;
    }
    completedSteps += 1;
  }
  return completedSteps;
};

export { getSequentiallyCompletedStepCount as g };
