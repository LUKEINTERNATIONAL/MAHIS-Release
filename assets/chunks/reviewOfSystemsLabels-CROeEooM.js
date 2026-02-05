const toneAssessmentLabels = {
  normal: "Normal tone, movement in all limbs",
  hypertonia: "Increased tone + Hypertonia (stiff)",
  hypotonia: "Reduced tone + Hypotonia (floppy)",
  flaccid: "Flaccid (completely floppy)"
};
const suckReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent +/- Bites"
};
const graspReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent"
};
const moroReflexLabels = {
  present_strong: "Present and Strong",
  present_weak: "Present but Weak",
  absent: "Absent"
};
const musculoskeletalDeformityLabels = {
  upper_limb_injury: "Birth injury (upper limbs) e.g Erb's palsy",
  lower_limb_injury: "Birth injury (lower limbs) e.g fracture",
  deformity_talipes: "Musculoskeletal deformities e.g talipes",
  leg_length_difference: "Legs are of different lengths",
  none: "None observed"
};
const skinFindingLabels = {
  pustules: "Pustules all over",
  abscess: "Big boil / Abscess",
  uneven_folds: "Uneven skin folds on thighs",
  mongolian_spot: "Mongolian blue spot",
  bruising: "Bruising",
  petechiae: "Petechiae",
  normal: "Normal skin"
};

const meconiumTimingLabels = {
  within_24_hours: "Within 24 hours",
  more_than_24_hours: "More than 24 hours"
};
const stoolColorLabels = {
  white: "White",
  yellow: "Yellow",
  yellowish_green: "Yellowish-green",
  green: "Green",
  normal: "Normal"
};
const stoolConsistencyLabels = {
  loose: "Loose",
  soft: "Soft",
  hard: "Hard"
};
const urineColorLabels = {
  clear: "Clear",
  cloudy: "Cloudy",
  bloody: "Bloody",
  dark: "Dark",
  pus: "Pus"
};
const feedingTypeLabels = {
  formula: "Formula",
  breast_milk: "Breast Milk",
  mixed_feeds: "Mixed Feeds"
};
const feedingModeLabels = {
  breastfeeding: "Breastfeeding",
  cup: "Cup",
  ngt: "NGT",
  syringe: "Syringe"
};
const feedingFrequencyLabels = {
  two_hourly: "2 hourly",
  three_hourly: "3 hourly",
  others: "Others"
};
const feedingEffortLabels = {
  fatigue: "Fatigue",
  sweating: "Sweating",
  cyanosis: "Cyanosis",
  relatively_effortless: "Relatively Effortless"
};
const weightTrendLabels = {
  weight_loss_above_10: "Weight loss > 10%",
  weight_loss_below_10: "Weight loss < 10%",
  weight_loss_none: "None",
  weight_loss_unknown: "Unknown"
};
const umbilicalConditionLabels = {
  normal: "Normal (healthy and clean)",
  healthy_and_clean: "Health & clean",
  bleeding: "Bleeding",
  red_skin_all_around_umbilicus: "Red skin all around umblicus",
  meconium_stained: "Meconium stained",
  umbilical_hernia: "Umblical hernia",
  abnormal_looking: "Abnormal looking"
};

export { suckReflexLabels as a, moroReflexLabels as b, feedingFrequencyLabels as c, feedingEffortLabels as d, meconiumTimingLabels as e, feedingModeLabels as f, graspReflexLabels as g, stoolColorLabels as h, stoolConsistencyLabels as i, umbilicalConditionLabels as j, feedingTypeLabels as k, musculoskeletalDeformityLabels as m, skinFindingLabels as s, toneAssessmentLabels as t, urineColorLabels as u, weightTrendLabels as w };
