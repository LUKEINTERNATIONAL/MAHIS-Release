import { cu as useFacility, _ as _export_sfc, R as ReportService, p as parameterizeUrl, cv as ApiClient, cw as getReportQuarters, aO as toastWarning, aP as loader, X as modal, cx as DrilldownTable, cy as getCsvExportBtn, cz as getPdfExportBtn, P as PatientService, bM as resetPatientData, u as useDemographicsStore, cs as parseARVNumber, cd as toDisplayFmt, cp as toDisplayGenderFmt, cA as exportToCSV, cB as isValidDateRange } from '../index-UzX4smS4.js';
import { s as defineComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, D as toDisplayString, F as unref, J as Fragment, R as renderList, a5 as createTextVNode, c as computed, a8 as withModifiers, aL as useRouter, w as watch, O as createBlock, B as withCtx, A as createVNode, bb as IonCardHeader, ba as IonCardTitle, bd as IonCardContent, aB as IonGrid, af as IonRow, aA as IonCol, cW as Ce, aj as Hn, H as createCommentVNode, N as IonButton, bK as IonCard, f as ref, bx as eye } from './vendor-DrpjccQs.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';

const _hoisted_1$2 = {
  class: "row-title",
  colspan: "3",
  style: { "border-bottom-style": "solid" }
};
const _hoisted_2$1 = { class: "numbers" };
const _hoisted_3$1 = {
  class: "row-name name-left",
  style: { "border-bottom-style": "solid" }
};
const _hoisted_4$1 = {
  colspan: "2",
  class: "signatures",
  style: { "border-bottom-style": "solid" }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CohortHeader",
  props: {
    reportparams: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { facilityName } = useFacility();
    const items = ["3.", "4.", "5.", "6.", "7.", "8.", "9."];
    const period = computed(() => {
      const [quarter, startPeriod, , endPeriod] = props.reportparams.split(" ");
      return {
        quarterStr: quarter ?? "",
        quarterYr: quarter.match(/custom/i) ? `${startPeriod} - ${endPeriod}` : startPeriod
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", null, [
        _cache[9] || (_cache[9] = createBaseVNode("tr", { id: "version-row" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            colspan: "4",
            id: "version"
          }, "Version 28")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[0] || (_cache[0] = createBaseVNode("td", { class: "numbers" }, "1.", -1)),
          _cache[1] || (_cache[1] = createBaseVNode("td", {
            class: "row-title",
            style: { "border-right-style": "solid", "border-bottom": "0px !important", "font-weight": "bold" }
          }, "Clinic name", -1)),
          createBaseVNode("td", _hoisted_1$2, toDisplayString(unref(facilityName)), 1)
        ]),
        _cache[10] || (_cache[10] = createBaseVNode("tr", null, [
          createBaseVNode("td", { class: "numbers" }, "2."),
          createBaseVNode("td", {
            class: "row-title",
            style: { "border": "0px !important" }
          }, "Supervisors"),
          createBaseVNode("td", {
            class: "row-name",
            style: { "font-weight": "bold" }
          }, "Name"),
          createBaseVNode("td", {
            colspan: "2",
            class: "signatures",
            style: { "font-weight": "bold" }
          }, "Signature")
        ], -1)),
        (openBlock(), createElementBlock(Fragment, null, renderList(items, (sign) => {
          return createBaseVNode("tr", { key: sign }, [
            createBaseVNode("td", _hoisted_2$1, toDisplayString(sign), 1),
            _cache[2] || (_cache[2] = createBaseVNode("td", { class: "row-title no-borders" }, " ", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("td", { class: "row-name name-left" }, " ", -1)),
            _cache[4] || (_cache[4] = createBaseVNode("td", {
              colspan: "2",
              class: "signatures"
            }, " ", -1))
          ]);
        }), 64)),
        createBaseVNode("tr", null, [
          _cache[7] || (_cache[7] = createBaseVNode("td", { class: "numbers" }, "10.", -1)),
          _cache[8] || (_cache[8] = createBaseVNode("td", {
            class: "row-title",
            style: { "border-bottom-style": "solid", "border-top-style": "none" }
          }, "Quarter evaluated", -1)),
          createBaseVNode("td", _hoisted_3$1, [
            _cache[5] || (_cache[5] = createTextVNode("Year: ", -1)),
            createBaseVNode("b", null, toDisplayString(period.value.quarterYr), 1)
          ]),
          createBaseVNode("td", _hoisted_4$1, [
            _cache[6] || (_cache[6] = createTextVNode("Quarter: ", -1)),
            createBaseVNode("b", null, toDisplayString(period.value.quarterStr), 1)
          ])
        ])
      ]);
    };
  }
});

const CohortH = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d4f62176"]]);

function createValidationRule(indicators, comparator, error) {
  return { indicators, comparator, error };
}
function createSectionValidationRules(indicators, section, error, altValues = {}) {
  return [
    createValidationRule(indicators, "total_registered", `Section ${section}: Total registered (Quartely) is not equal to ${error}`),
    createValidationRule(
      indicators.map((indicator, index) => altValues[index] ?? `cum_${indicator}`),
      "cum_total_registered",
      `Section ${section}: Total registered (Cummulative) is not equal to ${error}`
    )
  ];
}
const VALIDATION_RULES = [
  ...createSectionValidationRules(
    [
      "initial_non_pregnant_females_all_ages",
      "males_initiated_on_art_first_time",
      "initial_pregnant_females_all_ages",
      "unknown_gender",
      "re_initiated_on_art",
      "transfer_in"
    ],
    "26 - 32",
    "Total FT + Re Patients re-initiated on ART + TI Patients transferred in on ART"
  ),
  ...createSectionValidationRules(
    ["quarterly_all_males", "non_pregnant_females", "pregnant_females_all_ages"],
    "33 - 35",
    "M Males (all ages) + FNP Non-pregnant Females (all ages)  + FP Pregnant Females (all ages)",
    { 0: "cum_all_males" }
  ),
  ...createSectionValidationRules(
    ["children_below_24_months_at_art_initiation", "children_24_months_14_years_at_art_initiation", "adults_at_art_initiation"],
    "36 - 38",
    "A Children below 24 m at ART initiation + B Children 24 m - 14 yrs at ART initiation + C Adults 15 years+ at ART initiation"
  ),
  ...createSectionValidationRules(
    [
      "presumed_severe_hiv_disease_in_infants",
      "confirmed_hiv_infection_in_infants_pcr",
      "quarterly_children_12_59_months",
      "pregnant_women",
      "breastfeeding_mothers",
      "who_stage_two",
      "asymptomatic",
      "who_stage_three",
      "who_stage_four",
      "unknown_other_reason_outside_guidelines"
    ],
    "39 - 48",
    `Pres. Sev. HIV disease age <12 m + PCR Infants <12 mths PCR + U5 Children 12-59 + mths Preg Pregnant women + BF Breastfeeding mothers 
    + CD4 CD4 below threshold + Asy Asymptomatic / mild + WHO stage 3 + WHO stage 4 + Unknown / reason outside guidelines`,
    { 2: "cum_children_12_59_months" }
  ),
  ...createSectionValidationRules(
    ["no_tb", "tb_within_the_last_two_years", "current_episode_of_tb"],
    "49 - 51",
    "Nev/>2yrs	Never TB / TB over 2 years ago + Last 2yrs	TB within the last 2 years + Curr Current episode of TB"
  ),
  createValidationRule(
    ["total_alive_and_on_art", "died_total", "defaulted", "stopped_art", "transfered_out"],
    "cum_total_registered",
    `Section 53 - 61: Total registered (Cummulative) is not equal to
    Total alive and on ART + Died total + Defaulted (more than 2 months overdue after expected to have run out of ARVs 
      + Stopped taking ARVs (clinician or patient own decision, last known alive
      + Transferred Out`
  ),
  createValidationRule(
    [
      "zero_p",
      "zero_a",
      "two_p",
      "two_a",
      "four_pp",
      "four_pa",
      "four_a",
      "five_a",
      "six_a",
      "seven_a",
      "eight_a",
      "nine_pp",
      "nine_pa",
      "nine_a",
      "ten_a",
      "eleven_pp",
      "eleven_pa",
      "eleven_a",
      "twelve_pp",
      "twelve_pa",
      "twelve_a",
      "unknown_regimen",
      "thirteen_a",
      "fourteen_a",
      "sixteen_a",
      "seventeen_a",
      "fourteen_pp",
      "fourteen_pa",
      "fifteen_p",
      "fifteen_pp",
      "fifteen_pa",
      "fifteen_a",
      "sixteen_p",
      "seventeen_pa",
      "seventeen_pp"
    ],
    "total_alive_and_on_art",
    "Section 64 - 80: Total alive and on ART is not equal to Regimens sections"
  ),
  createValidationRule(
    ["total_pregnant_women", "total_breastfeeding_women", "total_other_patients"],
    "total_alive_and_on_art",
    "Section 81 - 83: Total alive and on ART is not equal to Pregnant + Breastfeeding + All others (not circled)"
  ),
  createValidationRule(
    ["tb_not_suspected", "tb_suspected", "tb_confirmed_currently_not_yet_on_tb_treatment", "tb_confirmed_on_tb_treatment", "unknown_tb_status"],
    "total_alive_and_on_art",
    "Section 84 - 88: Total alive and on ART is not equal to TB not suspected + TB suspected + TB conf., not on Rx + TB conf., on TB Rx + Unknown (not circled)"
  ),
  createValidationRule(
    ["total_patients_without_side_effects", "total_patients_with_side_effects", "unknown_side_effects"],
    "total_alive_and_on_art",
    "Section 88 - 91: Total alive and on ART is not equal to None + Any side effects + Unknown (not circled)"
  ),
  createValidationRule(
    [
      "patients_with_0_6_doses_missed_at_their_last_visit",
      "patients_with_7_plus_doses_missed_at_their_last_visit",
      "patients_with_unknown_adhrence"
    ],
    "total_alive_and_on_art",
    "Section 92 - 94: Total alive and on ART is not equal to 0 - 3 doses missed + 4+ doses missed + Unknown (not circled)"
  )
];
function useCohortValidator(data) {
  return VALIDATION_RULES.filter((rule) => {
    if (rule.indicators) {
      const sum = rule.indicators.reduce((sum2, i) => sum2 + data[i], 0);
      return data[rule.comparator] !== sum;
    }
    return false;
  }).map(({ error }) => error);
}

const _hoisted_1$1 = { id: "consistency_check" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CohortValidator",
  props: {
    indicators: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const reportConsistency = computed(() => {
      if (lodashExports.isEmpty(props.indicators)) return [];
      return useCohortValidator(props.indicators);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(reportConsistency.value, (text, index) => {
          return openBlock(), createElementBlock("div", { key: index }, toDisplayString(text), 1);
        }), 128))
      ]);
    };
  }
});

const CohortV = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bd930c14"]]);

const _imports_0 = ""+new URL('../../images/sum-arrow.png', import.meta.url).href+"";

const _hoisted_1 = { class: "my-table" };
const _hoisted_2 = { style: { "font-weight": "normal" } };
const _hoisted_3 = { style: { "font-weight": "normal" } };
const _hoisted_4 = { style: { "font-weight": "normal" } };
const _hoisted_5 = { style: { "font-weight": "normal" } };
const _hoisted_6 = { style: { "font-weight": "normal" } };
const _hoisted_7 = { style: { "font-weight": "normal" } };
const _hoisted_8 = { style: { "font-weight": "normal" } };
const _hoisted_9 = { style: { "font-weight": "normal" } };
const _hoisted_10 = { style: { "font-weight": "normal" } };
const _hoisted_11 = { style: { "font-weight": "normal" } };
const _hoisted_12 = { style: { "font-weight": "normal" } };
const _hoisted_13 = { style: { "font-weight": "normal" } };
const _hoisted_14 = { style: { "font-weight": "normal" } };
const _hoisted_15 = { style: { "font-weight": "normal" } };
const _hoisted_16 = { style: { "font-weight": "normal" } };
const _hoisted_17 = { style: { "font-weight": "normal" } };
const _hoisted_18 = { style: { "font-weight": "normal" } };
const _hoisted_19 = { style: { "font-weight": "normal" } };
const _hoisted_20 = { style: { "font-weight": "normal" } };
const _hoisted_21 = { style: { "font-weight": "normal" } };
const _hoisted_22 = { style: { "font-weight": "normal" } };
const _hoisted_23 = { style: { "font-weight": "normal" } };
const _hoisted_24 = { style: { "font-weight": "normal" } };
const _hoisted_25 = { style: { "font-weight": "normal" } };
const _hoisted_26 = { style: { "font-weight": "normal" } };
const _hoisted_27 = { style: { "font-weight": "normal" } };
const _hoisted_28 = { style: { "font-weight": "normal" } };
const _hoisted_29 = { style: { "font-weight": "normal" } };
const _hoisted_30 = { style: { "font-weight": "normal" } };
const _hoisted_31 = { style: { "font-weight": "normal" } };
const _hoisted_32 = { style: { "border-top-width": "0px", "border-bottom-width": "0px", "font-weight": "normal" } };
const _hoisted_33 = { style: { "font-weight": "normal" } };
const _hoisted_34 = { style: { "font-weight": "normal" } };
const _hoisted_35 = { style: { "font-weight": "normal" } };
const _hoisted_36 = { style: { "font-weight": "normal" } };
const _hoisted_37 = { style: { "font-weight": "normal" } };
const _hoisted_38 = { style: { "font-weight": "normal" } };
const _hoisted_39 = { style: { "font-weight": "normal" } };
const _hoisted_40 = { style: { "font-weight": "normal" } };
const _hoisted_41 = { style: { "font-weight": "normal" } };
const _hoisted_42 = { style: { "font-weight": "normal" } };
const _hoisted_43 = { style: { "font-weight": "normal" } };
const _hoisted_44 = { style: { "font-weight": "normal" } };
const _hoisted_45 = { style: { "font-weight": "normal" } };
const _hoisted_46 = { style: { "font-weight": "normal" } };
const _hoisted_47 = { style: { "font-weight": "normal" } };
const _hoisted_48 = { style: { "font-weight": "normal" } };
const _hoisted_49 = { style: { "font-weight": "normal" } };
const _hoisted_50 = { style: { "font-weight": "normal" } };
const _hoisted_51 = { style: { "font-weight": "normal" } };
const _hoisted_52 = { style: { "font-weight": "normal" } };
const _hoisted_53 = { style: { "font-weight": "normal" } };
const _hoisted_54 = { style: { "font-weight": "normal" } };
const _hoisted_55 = { style: { "font-weight": "normal" } };
const _hoisted_56 = { style: { "font-weight": "normal" } };
const _hoisted_57 = { style: { "font-weight": "normal" } };
const _hoisted_58 = { style: { "font-weight": "normal" } };
const _hoisted_59 = { style: { "font-weight": "normal" } };
const _hoisted_60 = { style: { "font-weight": "normal" } };
const _hoisted_61 = { style: { "font-weight": "normal" } };
const _hoisted_62 = { style: { "font-weight": "normal" } };
const _hoisted_63 = { style: { "font-weight": "normal" } };
const _hoisted_64 = { style: { "font-weight": "normal" } };
const _hoisted_65 = { style: { "font-weight": "normal" } };
const _hoisted_66 = { style: { "font-weight": "normal" } };
const _hoisted_67 = { class: "granules" };
const _hoisted_68 = { class: "granules-row" };
const _hoisted_69 = { class: "granules-cell granules-right-td" };
const _hoisted_70 = { class: "granules-cell" };
const _hoisted_71 = { class: "granules" };
const _hoisted_72 = { class: "granules-row" };
const _hoisted_73 = { class: "granules-cell granules-right-td" };
const _hoisted_74 = { class: "granules-cell" };
const _hoisted_75 = { class: "granules" };
const _hoisted_76 = { class: "granules-row" };
const _hoisted_77 = { class: "granules-cell granules-right-td" };
const _hoisted_78 = { class: "granules-cell" };
const _hoisted_79 = { class: "granules" };
const _hoisted_80 = { class: "granules-row" };
const _hoisted_81 = { class: "granules-cell granules-right-td" };
const _hoisted_82 = { class: "granules-cell" };
const _hoisted_83 = { class: "granules" };
const _hoisted_84 = { class: "granules-row" };
const _hoisted_85 = { class: "granules-cell granules-right-td" };
const _hoisted_86 = { class: "granules-cell" };
const _hoisted_87 = { class: "granules" };
const _hoisted_88 = { class: "granules-row" };
const _hoisted_89 = { class: "granules-cell granules-right-td" };
const _hoisted_90 = { class: "granules-cell granules-right-td" };
const _hoisted_91 = { class: "granules-cell" };
const _hoisted_92 = { class: "granules" };
const _hoisted_93 = { class: "granules-row" };
const _hoisted_94 = { class: "granules-cell granules-right-td" };
const _hoisted_95 = { class: "granules-cell" };
const _hoisted_96 = { style: { "page-break-before": "always" } };
const _hoisted_97 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_98 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_99 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_100 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_101 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_102 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_103 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_104 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_105 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_106 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_107 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_108 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_109 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_110 = {
  colspan: "2",
  style: { "font-weight": "normal" }
};
const _hoisted_111 = { style: { "text-align": "right", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px" } };
const _hoisted_112 = { style: { "text-align": "right", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px" } };
const _hoisted_113 = { style: { "text-align": "right", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px" } };
const _hoisted_114 = { style: { "text-align": "right", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px" } };
const _hoisted_115 = {
  colspan: "4",
  style: { "text-align": "right", "padding-right": "10px", "order-top-width": "1px", "border-left-width": "0px", "border-bottom-width": "1px" }
};
const _hoisted_116 = {
  colspan: "4",
  style: { "text-align": "right", "padding-right": "10px", "order-top-width": "1px", "border-left-width": "0px", "border-bottom-width": "1px" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CohortFooter",
  props: {
    indicators: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["onClickIndicator"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function drillDown(indicatorsName) {
      emit("onClickIndicator", indicatorsName);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1, [
        _cache[547] || (_cache[547] = createBaseVNode("tr", { class: "section-description" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            style: { "font-weight": "bold" },
            colspan: "2"
          }, "ART Clinic"),
          createBaseVNode("td", {
            colspan: "3",
            style: { "text-align": "center", "font-weight": "bold" }
          }, "Newly registered in quarter"),
          createBaseVNode("td", { class: "vertical-separator" }, " "),
          createBaseVNode("td", {
            colspan: "3",
            style: { "text-align": "center", "font-weight": "bold" }
          }, "Cumulative ever registered")
        ], -1)),
        _cache[548] || (_cache[548] = createBaseVNode("tr", { class: "section-description" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            style: { "font-weight": "bold" },
            colspan: "2"
          }, "Patients registration details"),
          createBaseVNode("td", { style: { "font-weight": "normal", "text-align": "center" } }, "POC"),
          createBaseVNode("td", { style: { "font-weight": "normal", "text-align": "center" } }, "Clinic own*"),
          createBaseVNode("td", { style: { "font-weight": "normal", "text-align": "center" } }, "Checked data"),
          createBaseVNode("td", { class: "vertical-separator" }, " "),
          createBaseVNode("td", { style: { "font-weight": "normal", "text-align": "center" } }, "POC"),
          createBaseVNode("td", { style: { "font-weight": "normal", "text-align": "center" } }, "Clinic own*"),
          createBaseVNode("td", { style: { "font-weight": "normal", "text-align": "center" } }, "Checked data")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[120] || (_cache[120] = createBaseVNode("td", { class: "numbers" }, "25.", -1)),
          _cache[121] || (_cache[121] = createBaseVNode("td", {
            style: { "font-weight": "normal", "text-align": "left", "padding-left": "5px" },
            colspan: "2"
          }, "Total registered", -1)),
          createBaseVNode("td", _hoisted_2, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => {
                drillDown("total_registered");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_registered || 0), 1)
          ]),
          _cache[122] || (_cache[122] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[123] || (_cache[123] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[124] || (_cache[124] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_3, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => {
                drillDown("cum_total_registered");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_total_registered || 0), 1)
          ]),
          _cache[125] || (_cache[125] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[126] || (_cache[126] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[549] || (_cache[549] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { colspan: "10" }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[127] || (_cache[127] = createBaseVNode("td", { class: "numbers" }, "26.", -1)),
          _cache[128] || (_cache[128] = createBaseVNode("td", { style: { "font-weight": "normal", "border-right-style": "none !important", "border-bottom-style": "none !important", "padding-left": "5px", "text-align": "left" } }, [
            createBaseVNode("b", null, "FT"),
            createTextVNode("  Patients initiated ")
          ], -1)),
          _cache[129] || (_cache[129] = createBaseVNode("td", { style: { "font-weight": "normal", "border-left-style": "none !important", "text-align": "left", "border-bottom-style": "none !important" } }, "Male", -1)),
          createBaseVNode("td", _hoisted_4, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => {
                drillDown("males_initiated_on_art_first_time");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.males_initiated_on_art_first_time || 0), 1)
          ]),
          _cache[130] || (_cache[130] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[131] || (_cache[131] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[132] || (_cache[132] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_5, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => {
                drillDown("cum_males_initiated_on_art_first_time");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_males_initiated_on_art_first_time || 0), 1)
          ]),
          _cache[133] || (_cache[133] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[134] || (_cache[134] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[135] || (_cache[135] = createBaseVNode("td", { class: "numbers" }, "27.", -1)),
          _cache[136] || (_cache[136] = createBaseVNode("td", { style: { "font-weight": "normal", "border-right-style": "none !important", "padding-left": "10px", "text-align": "left", "border-top-style": "none !important", "border-bottom-style": "none !important", "width": "100px" } }, "on ART ", -1)),
          _cache[137] || (_cache[137] = createBaseVNode("td", { style: { "font-weight": "normal", "border-left-style": "none !important", "text-align": "left", "border-top-style": "none !important", "border-bottom-style": "none !important" } }, "Female Non-pregnant", -1)),
          createBaseVNode("td", _hoisted_6, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[4] || (_cache[4] = withModifiers(($event) => {
                drillDown("initial_non_pregnant_females_all_ages");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.initial_non_pregnant_females_all_ages || 0), 1)
          ]),
          _cache[138] || (_cache[138] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[139] || (_cache[139] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[140] || (_cache[140] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_7, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[5] || (_cache[5] = withModifiers(($event) => {
                drillDown("cum_initial_non_pregnant_females_all_ages");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_initial_non_pregnant_females_all_ages || 0), 1)
          ]),
          _cache[141] || (_cache[141] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[142] || (_cache[142] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[143] || (_cache[143] = createBaseVNode("td", { class: "numbers" }, "28.", -1)),
          _cache[144] || (_cache[144] = createBaseVNode("td", { style: { "font-weight": "normal", "border-right-style": "none !important", "padding-left": "10px", "border-top-style": "none !important", "border-bottom-style": "none !important", "text-align": "left" } }, " first time ", -1)),
          _cache[145] || (_cache[145] = createBaseVNode("td", { style: { "font-weight": "normal", "border-left-style": "none !important", "text-align": "left", "border-top-style": "none !important", "border-bottom-style": "none !important" } }, "Female pregnant", -1)),
          createBaseVNode("td", _hoisted_8, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[6] || (_cache[6] = withModifiers(($event) => {
                drillDown("initial_pregnant_females_all_ages");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.initial_pregnant_females_all_ages || 0), 1)
          ]),
          _cache[146] || (_cache[146] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[147] || (_cache[147] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[148] || (_cache[148] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_9, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[7] || (_cache[7] = withModifiers(($event) => {
                drillDown("cum_initial_pregnant_females_all_ages");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_initial_pregnant_females_all_ages || 0), 1)
          ]),
          _cache[149] || (_cache[149] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[150] || (_cache[150] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[151] || (_cache[151] = createBaseVNode("td", { class: "numbers" }, "29.", -1)),
          _cache[152] || (_cache[152] = createBaseVNode("td", { style: { "font-weight": "normal", "border-right-style": "none !important", "padding-left": "28px", "border-top-style": "none !important", "border-bottom-style": "none !important" } }, "   ", -1)),
          _cache[153] || (_cache[153] = createBaseVNode("td", { style: { "font-weight": "normal", "border-left-style": "none !important", "text-align": "left", "border-top-style": "dotted !important", "border-bottom-style": "none !important" } }, "FT Init., Non-disagg.", -1)),
          createBaseVNode("td", _hoisted_10, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[8] || (_cache[8] = withModifiers(($event) => {
                drillDown("unknown_gender");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.unknown_gender || 0), 1)
          ]),
          _cache[154] || (_cache[154] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[155] || (_cache[155] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[156] || (_cache[156] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_11, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[9] || (_cache[9] = withModifiers(($event) => {
                drillDown("cum_unknown_gender");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_unknown_gender || 0), 1)
          ]),
          _cache[157] || (_cache[157] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[158] || (_cache[158] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[159] || (_cache[159] = createBaseVNode("td", { class: "numbers" }, "30.", -1)),
          _cache[160] || (_cache[160] = createBaseVNode("td", { style: { "font-weight": "normal", "border-right-style": "none !important", "padding-left": "28px", "border-top-style": "none !important" } }, "   ", -1)),
          _cache[161] || (_cache[161] = createBaseVNode("td", { style: { "font-weight": "normal", "border-left-style": "none !important", "text-align": "left", "border-top-style": "dotted !important" } }, "CHECK: Total FT", -1)),
          createBaseVNode("td", _hoisted_12, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[10] || (_cache[10] = withModifiers(($event) => {
                drillDown("initiated_on_art_first_time");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.initiated_on_art_first_time || 0), 1)
          ]),
          _cache[162] || (_cache[162] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[163] || (_cache[163] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[164] || (_cache[164] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_13, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[11] || (_cache[11] = withModifiers(($event) => {
                drillDown("cum_initiated_on_art_first_time");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_initiated_on_art_first_time || 0), 1)
          ]),
          _cache[165] || (_cache[165] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[166] || (_cache[166] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[167] || (_cache[167] = createBaseVNode("td", { class: "numbers" }, "31.", -1)),
          _cache[168] || (_cache[168] = createBaseVNode("td", {
            style: { "text-align": "left", "border-bottom-style": "none", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "Re"),
            createTextVNode("  Patients re-initiated on ART")
          ], -1)),
          createBaseVNode("td", _hoisted_14, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[12] || (_cache[12] = withModifiers(($event) => {
                drillDown("re_initiated_on_art");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.re_initiated_on_art || 0), 1)
          ]),
          _cache[169] || (_cache[169] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[170] || (_cache[170] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[171] || (_cache[171] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_15, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[13] || (_cache[13] = withModifiers(($event) => {
                drillDown("cum_re_initiated_on_art");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_re_initiated_on_art || 0), 1)
          ]),
          _cache[172] || (_cache[172] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[173] || (_cache[173] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[174] || (_cache[174] = createBaseVNode("td", { class: "numbers" }, "32.", -1)),
          _cache[175] || (_cache[175] = createBaseVNode("td", {
            style: { "text-align": "left", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "TI"),
            createTextVNode("  Patients transferred in on ART ")
          ], -1)),
          createBaseVNode("td", _hoisted_16, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[14] || (_cache[14] = withModifiers(($event) => {
                drillDown("transfer_in");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.transfer_in || 0), 1)
          ]),
          _cache[176] || (_cache[176] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[177] || (_cache[177] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[178] || (_cache[178] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_17, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[15] || (_cache[15] = withModifiers(($event) => {
                drillDown("cum_transfer_in");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_transfer_in || 0), 1)
          ]),
          _cache[179] || (_cache[179] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[180] || (_cache[180] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[550] || (_cache[550] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { colspan: "10" }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[181] || (_cache[181] = createBaseVNode("td", { class: "numbers" }, "33.", -1)),
          _cache[182] || (_cache[182] = createBaseVNode("td", {
            style: { "text-align": "left", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "M"),
            createTextVNode("  Males (all ages) ")
          ], -1)),
          createBaseVNode("td", _hoisted_18, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[16] || (_cache[16] = withModifiers(($event) => {
                drillDown("quarterly_all_males");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.quarterly_all_males || 0), 1)
          ]),
          _cache[183] || (_cache[183] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[184] || (_cache[184] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[185] || (_cache[185] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_19, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[17] || (_cache[17] = withModifiers(($event) => {
                drillDown("cum_all_males");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_all_males || 0), 1)
          ]),
          _cache[186] || (_cache[186] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[187] || (_cache[187] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[188] || (_cache[188] = createBaseVNode("td", { class: "numbers" }, "34.", -1)),
          _cache[189] || (_cache[189] = createBaseVNode("td", {
            style: { "text-align": "left", "border-top-style": "none", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "FNP"),
            createTextVNode("  Non-pregnant Females (all ages) ")
          ], -1)),
          createBaseVNode("td", _hoisted_20, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[18] || (_cache[18] = withModifiers(($event) => {
                drillDown("non_pregnant_females");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.non_pregnant_females || 0), 1)
          ]),
          _cache[190] || (_cache[190] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[191] || (_cache[191] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[192] || (_cache[192] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_21, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[19] || (_cache[19] = withModifiers(($event) => {
                drillDown("cum_non_pregnant_females");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_non_pregnant_females || 0), 1)
          ]),
          _cache[193] || (_cache[193] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[194] || (_cache[194] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[195] || (_cache[195] = createBaseVNode("td", { class: "numbers" }, "35.", -1)),
          _cache[196] || (_cache[196] = createBaseVNode("td", {
            style: { "text-align": "left", "border-top-style": "none", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "FP"),
            createTextVNode("  Pregnant Females (all ages) ")
          ], -1)),
          createBaseVNode("td", _hoisted_22, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[20] || (_cache[20] = withModifiers(($event) => {
                drillDown("pregnant_females_all_ages");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.pregnant_females_all_ages || 0), 1)
          ]),
          _cache[197] || (_cache[197] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[198] || (_cache[198] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[199] || (_cache[199] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_23, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[21] || (_cache[21] = withModifiers(($event) => {
                drillDown("cum_pregnant_females_all_ages");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_pregnant_females_all_ages || 0), 1)
          ]),
          _cache[200] || (_cache[200] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[201] || (_cache[201] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[551] || (_cache[551] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { colspan: "10" }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[202] || (_cache[202] = createBaseVNode("td", { class: "numbers" }, "36.", -1)),
          _cache[203] || (_cache[203] = createBaseVNode("td", {
            style: { "text-align": "left", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "A"),
            createTextVNode("  Children below 24 m at ART initiation ")
          ], -1)),
          createBaseVNode("td", _hoisted_24, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[22] || (_cache[22] = withModifiers(($event) => {
                drillDown("children_below_24_months_at_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.children_below_24_months_at_art_initiation || 0), 1)
          ]),
          _cache[204] || (_cache[204] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[205] || (_cache[205] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[206] || (_cache[206] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_25, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[23] || (_cache[23] = withModifiers(($event) => {
                drillDown("cum_children_below_24_months_at_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_children_below_24_months_at_art_initiation || 0), 1)
          ]),
          _cache[207] || (_cache[207] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[208] || (_cache[208] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[209] || (_cache[209] = createBaseVNode("td", { class: "numbers" }, "37.", -1)),
          _cache[210] || (_cache[210] = createBaseVNode("td", {
            style: { "text-align": "left", "border-top-style": "none", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "B"),
            createTextVNode("  Children 24 m - 14 yrs at ART initiation ")
          ], -1)),
          createBaseVNode("td", _hoisted_26, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[24] || (_cache[24] = withModifiers(($event) => {
                drillDown("children_24_months_14_years_at_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.children_24_months_14_years_at_art_initiation || 0), 1)
          ]),
          _cache[211] || (_cache[211] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[212] || (_cache[212] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[213] || (_cache[213] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_27, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[25] || (_cache[25] = withModifiers(($event) => {
                drillDown("cum_children_24_months_14_years_at_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_children_24_months_14_years_at_art_initiation || 0), 1)
          ]),
          _cache[214] || (_cache[214] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[215] || (_cache[215] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[216] || (_cache[216] = createBaseVNode("td", { class: "numbers" }, "38.", -1)),
          _cache[217] || (_cache[217] = createBaseVNode("td", {
            style: { "text-align": "left", "border-top-style": "none", "font-weight": "normal", "padding-left": "10px" },
            colspan: "2"
          }, [
            createBaseVNode("b", null, "C"),
            createTextVNode("  Adults 15 years+ at ART initiation ")
          ], -1)),
          createBaseVNode("td", _hoisted_28, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[26] || (_cache[26] = withModifiers(($event) => {
                drillDown("adults_at_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.adults_at_art_initiation || 0), 1)
          ]),
          _cache[218] || (_cache[218] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[219] || (_cache[219] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[220] || (_cache[220] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_29, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[27] || (_cache[27] = withModifiers(($event) => {
                drillDown("cum_adults_at_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_adults_at_art_initiation || 0), 1)
          ]),
          _cache[221] || (_cache[221] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[222] || (_cache[222] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[552] || (_cache[552] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left" }
          }, "Reason for starting ART")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[223] || (_cache[223] = createBaseVNode("td", { class: "numbers" }, "39.", -1)),
          _cache[224] || (_cache[224] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "text-align": "left", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "PSHD")
          ], -1)),
          _cache[225] || (_cache[225] = createBaseVNode("td", { style: { "border-left-style": "none", "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px" } }, "  Pres. Sev. HIV disease age " + toDisplayString("<12") + " m", -1)),
          createBaseVNode("td", _hoisted_30, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[28] || (_cache[28] = withModifiers(($event) => {
                drillDown("presumed_severe_hiv_disease_in_infants");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.presumed_severe_hiv_disease_in_infants || 0), 1)
          ]),
          _cache[226] || (_cache[226] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[227] || (_cache[227] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[228] || (_cache[228] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_31, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[29] || (_cache[29] = withModifiers(($event) => {
                drillDown("cum_presumed_severe_hiv_disease_in_infants");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_presumed_severe_hiv_disease_in_infants || 0), 1)
          ]),
          _cache[229] || (_cache[229] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[230] || (_cache[230] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[231] || (_cache[231] = createBaseVNode("td", { class: "numbers" }, "40.", -1)),
          _cache[232] || (_cache[232] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-width": "0px !important", "border-bottom-style": "none", "border-left-width": "1px", "border-top-width": "0px" } }, " ", -1)),
          _cache[233] || (_cache[233] = createBaseVNode("td", { style: { "border-left-width": "1px !important", "border-right-width": "1px !important", "border-bottom-width": "0px !important", "border-style": "dotted", "text-align": "left", "padding-left": "10px", "border-top-width": "0px" } }, [
            createBaseVNode("b", null, "PCR"),
            createTextVNode(" Infants " + toDisplayString("<12") + " mths PCR")
          ], -1)),
          createBaseVNode("td", _hoisted_32, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[30] || (_cache[30] = withModifiers(($event) => {
                drillDown("confirmed_hiv_infection_in_infants_pcr");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.confirmed_hiv_infection_in_infants_pcr || 0), 1)
          ]),
          _cache[234] || (_cache[234] = createBaseVNode("td", { style: { "border-top-width": "0px", "border-bottom-width": "0px", "font-weight": "normal" } }, " ", -1)),
          _cache[235] || (_cache[235] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[236] || (_cache[236] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_33, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[31] || (_cache[31] = withModifiers(($event) => {
                drillDown("cum_confirmed_hiv_infection_in_infants_pcr");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_confirmed_hiv_infection_in_infants_pcr || 0), 1)
          ]),
          _cache[237] || (_cache[237] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[238] || (_cache[238] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[239] || (_cache[239] = createBaseVNode("td", { class: "numbers" }, "41.", -1)),
          _cache[240] || (_cache[240] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "border-bottom-width": "0px", "border-top-width": "0px" } }, " ", -1)),
          _cache[241] || (_cache[241] = createBaseVNode("td", { style: { "border-left-width": "1px", "border-top-width": "0px", "border-style": "dotted", "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "U5"),
            createTextVNode(" Children 12-59mths")
          ], -1)),
          createBaseVNode("td", _hoisted_34, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[32] || (_cache[32] = withModifiers(($event) => {
                drillDown("quarterly_children_12_59_months");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.quarterly_children_12_59_months || 0), 1)
          ]),
          _cache[242] || (_cache[242] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[243] || (_cache[243] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[244] || (_cache[244] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_35, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[33] || (_cache[33] = withModifiers(($event) => {
                drillDown("cum_children_12_59_months");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_children_12_59_months || 0), 1)
          ]),
          _cache[245] || (_cache[245] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[246] || (_cache[246] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[247] || (_cache[247] = createBaseVNode("td", { class: "numbers" }, "42.", -1)),
          _cache[248] || (_cache[248] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-width": "1px !important", "border-bottom-width": "0px", "border-top-width": "0px", "border-style": "dotted" } }, " ", -1)),
          _cache[249] || (_cache[249] = createBaseVNode("td", { style: { "border-left-style": "none", "border-top-width": "0px", "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "Preg"),
            createTextVNode(" Pregnant women")
          ], -1)),
          createBaseVNode("td", _hoisted_36, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[34] || (_cache[34] = withModifiers(($event) => {
                drillDown("pregnant_women");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.pregnant_women || 0), 1)
          ]),
          _cache[250] || (_cache[250] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[251] || (_cache[251] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[252] || (_cache[252] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_37, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[35] || (_cache[35] = withModifiers(($event) => {
                drillDown("cum_pregnant_women");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_pregnant_women || 0), 1)
          ]),
          _cache[253] || (_cache[253] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[254] || (_cache[254] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[255] || (_cache[255] = createBaseVNode("td", { class: "numbers" }, "43.", -1)),
          _cache[256] || (_cache[256] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "border-style": "dotted", "border-left-width": "1px", "border-top-width": "0px", "border-bottom-width": "0px" } }, " ", -1)),
          _cache[257] || (_cache[257] = createBaseVNode("td", { style: { "border-left-style": "none", "border-top-width": "0px", "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "BF"),
            createTextVNode(" Breastfeeding mothers")
          ], -1)),
          createBaseVNode("td", _hoisted_38, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[36] || (_cache[36] = withModifiers(($event) => {
                drillDown("breastfeeding_mothers");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.breastfeeding_mothers || 0), 1)
          ]),
          _cache[258] || (_cache[258] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[259] || (_cache[259] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[260] || (_cache[260] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_39, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[37] || (_cache[37] = withModifiers(($event) => {
                drillDown("cum_breastfeeding_mothers");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_breastfeeding_mothers || 0), 1)
          ]),
          _cache[261] || (_cache[261] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[262] || (_cache[262] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[263] || (_cache[263] = createBaseVNode("td", { class: "numbers" }, "44.", -1)),
          _cache[264] || (_cache[264] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "border-style": "dotted", "border-left-width": "1px", "border-top-width": "0px", "border-bottom-width": "0px" } }, " ", -1)),
          _cache[265] || (_cache[265] = createBaseVNode("td", { style: { "border-left-style": "none", "border-top-width": "0px", "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "CD4"),
            createTextVNode(" CD4 below threshold")
          ], -1)),
          createBaseVNode("td", _hoisted_40, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[38] || (_cache[38] = withModifiers(($event) => {
                drillDown("who_stage_two");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.who_stage_two || 0), 1)
          ]),
          _cache[266] || (_cache[266] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[267] || (_cache[267] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[268] || (_cache[268] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_41, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[39] || (_cache[39] = withModifiers(($event) => {
                drillDown("cum_who_stage_two");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_who_stage_two || 0), 1)
          ]),
          _cache[269] || (_cache[269] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[270] || (_cache[270] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[271] || (_cache[271] = createBaseVNode("td", { class: "numbers" }, "45.", -1)),
          _cache[272] || (_cache[272] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "border-style": "dotted", "border-left-width": "1px", "border-top-width": "0px", "border-bottom-width": "0px" } }, " ", -1)),
          _cache[273] || (_cache[273] = createBaseVNode("td", { style: { "border-left-style": "none", "border-top-width": "0px", "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "Asy"),
            createTextVNode(" Asymptomatic / mild")
          ], -1)),
          createBaseVNode("td", _hoisted_42, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[40] || (_cache[40] = withModifiers(($event) => {
                drillDown("asymptomatic");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.asymptomatic || 0), 1)
          ]),
          _cache[274] || (_cache[274] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[275] || (_cache[275] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[276] || (_cache[276] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_43, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[41] || (_cache[41] = withModifiers(($event) => {
                drillDown("cum_asymptomatic");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_asymptomatic || 0), 1)
          ]),
          _cache[277] || (_cache[277] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[278] || (_cache[278] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[279] || (_cache[279] = createBaseVNode("td", { class: "numbers" }, "46.", -1)),
          _cache[280] || (_cache[280] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "border-top-width": "0px", "text-align": "left", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "3")
          ], -1)),
          _cache[281] || (_cache[281] = createBaseVNode("td", { style: { "border-left-style": "none", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px", "border-top-width": "0px" } }, "WHO stage 3", -1)),
          createBaseVNode("td", _hoisted_44, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[42] || (_cache[42] = withModifiers(($event) => {
                drillDown("who_stage_three");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.who_stage_three || 0), 1)
          ]),
          _cache[282] || (_cache[282] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[283] || (_cache[283] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[284] || (_cache[284] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_45, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[43] || (_cache[43] = withModifiers(($event) => {
                drillDown("cum_who_stage_three");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_who_stage_three || 0), 1)
          ]),
          _cache[285] || (_cache[285] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[286] || (_cache[286] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[287] || (_cache[287] = createBaseVNode("td", { class: "numbers" }, "47.", -1)),
          _cache[288] || (_cache[288] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "border-top-width": "0px", "text-align": "left", "border-bottom-width": "0px" } }, [
            createBaseVNode("b", null, "4")
          ], -1)),
          _cache[289] || (_cache[289] = createBaseVNode("td", { style: { "border-left-width": "0px", "border-bottom-style": "none", "text-align": "left", "padding-left": "10px", "border-top-width": "0px" } }, "WHO stage 4", -1)),
          createBaseVNode("td", _hoisted_46, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[44] || (_cache[44] = withModifiers(($event) => {
                drillDown("who_stage_four");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.who_stage_four || 0), 1)
          ]),
          _cache[290] || (_cache[290] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[291] || (_cache[291] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[292] || (_cache[292] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_47, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[45] || (_cache[45] = withModifiers(($event) => {
                drillDown("cum_who_stage_four");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_who_stage_four || 0), 1)
          ]),
          _cache[293] || (_cache[293] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[294] || (_cache[294] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[295] || (_cache[295] = createBaseVNode("td", { class: "numbers" }, "48.", -1)),
          _cache[296] || (_cache[296] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "border-right-style": "none !important", "text-align": "left", "border-top-style": "none" } }, [
            createBaseVNode("b", null, "Unk")
          ], -1)),
          _cache[297] || (_cache[297] = createBaseVNode("td", { style: { "border-left-style": "none", "text-align": "left", "padding-left": "10px", "border-top-style": "none" } }, "Unknown / reason outside guidelines", -1)),
          createBaseVNode("td", _hoisted_48, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[46] || (_cache[46] = withModifiers(($event) => {
                drillDown("unknown_other_reason_outside_guidelines");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.unknown_other_reason_outside_guidelines || 0), 1)
          ]),
          _cache[298] || (_cache[298] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[299] || (_cache[299] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[300] || (_cache[300] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_49, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[47] || (_cache[47] = withModifiers(($event) => {
                drillDown("cum_unknown_other_reason_outside_guidelines");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_unknown_other_reason_outside_guidelines || 0), 1)
          ]),
          _cache[301] || (_cache[301] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[302] || (_cache[302] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[553] || (_cache[553] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left" }
          }, "Stage defining conditions at ART initiation")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[303] || (_cache[303] = createBaseVNode("td", { class: "numbers" }, "49.", -1)),
          _cache[304] || (_cache[304] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "text-align": "left", "border-right-style": "none !important" } }, [
            createBaseVNode("b", null, "Nev/>2yrs")
          ], -1)),
          _cache[305] || (_cache[305] = createBaseVNode("td", { style: { "border-left-style": "none", "text-align": "left", "padding-left": "10px" } }, "Never TB / TB over 2 years ago", -1)),
          createBaseVNode("td", _hoisted_50, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[48] || (_cache[48] = withModifiers(($event) => {
                drillDown("no_tb");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.no_tb || 0), 1)
          ]),
          _cache[306] || (_cache[306] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[307] || (_cache[307] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[308] || (_cache[308] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_51, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[49] || (_cache[49] = withModifiers(($event) => {
                drillDown("cum_no_tb");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_no_tb || 0), 1)
          ]),
          _cache[309] || (_cache[309] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[310] || (_cache[310] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[311] || (_cache[311] = createBaseVNode("td", { class: "numbers" }, "50.", -1)),
          _cache[312] || (_cache[312] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "text-align": "left", "border-right-style": "none !important" } }, [
            createBaseVNode("b", null, "Last 2yrs")
          ], -1)),
          _cache[313] || (_cache[313] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-left-style": "none" } }, "TB within the last 2 years", -1)),
          createBaseVNode("td", _hoisted_52, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[50] || (_cache[50] = withModifiers(($event) => {
                drillDown("tb_within_the_last_two_years");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.tb_within_the_last_two_years || 0), 1)
          ]),
          _cache[314] || (_cache[314] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[315] || (_cache[315] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[316] || (_cache[316] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_53, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[51] || (_cache[51] = withModifiers(($event) => {
                drillDown("cum_tb_within_the_last_two_years");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_tb_within_the_last_two_years || 0), 1)
          ]),
          _cache[317] || (_cache[317] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[318] || (_cache[318] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[319] || (_cache[319] = createBaseVNode("td", { class: "numbers" }, "51.", -1)),
          _cache[320] || (_cache[320] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "text-align": "left", "border-right-style": "none !important" } }, [
            createBaseVNode("b", null, "Curr")
          ], -1)),
          _cache[321] || (_cache[321] = createBaseVNode("td", { style: { "border-left-style": "none", "text-align": "left", "padding-left": "10px" } }, "Current episode of TB", -1)),
          createBaseVNode("td", _hoisted_54, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[52] || (_cache[52] = withModifiers(($event) => {
                drillDown("current_episode_of_tb");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.current_episode_of_tb || 0), 1)
          ]),
          _cache[322] || (_cache[322] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[323] || (_cache[323] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[324] || (_cache[324] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_55, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[53] || (_cache[53] = withModifiers(($event) => {
                drillDown("cum_current_episode_of_tb");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_current_episode_of_tb || 0), 1)
          ]),
          _cache[325] || (_cache[325] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[326] || (_cache[326] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[554] || (_cache[554] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", {
            colspan: "10",
            style: { "text-align": "left" }
          }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[327] || (_cache[327] = createBaseVNode("td", { class: "numbers" }, "52.", -1)),
          _cache[328] || (_cache[328] = createBaseVNode("td", { style: { "font-weight": "normal", "padding-left": "10px", "width": "15px", "text-align": "left", "border-right-style": "none !important" } }, [
            createBaseVNode("b", null, "KS")
          ], -1)),
          _cache[329] || (_cache[329] = createBaseVNode("td", { style: { "border-left-style": "none", "text-align": "left", "padding-left": "10px" } }, "Kaposi’s Sarcoma", -1)),
          createBaseVNode("td", _hoisted_56, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[54] || (_cache[54] = withModifiers(($event) => {
                drillDown("kaposis_sarcoma");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.kaposis_sarcoma || 0), 1)
          ]),
          _cache[330] || (_cache[330] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[331] || (_cache[331] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[332] || (_cache[332] = createBaseVNode("td", { class: "vertical-separator" }, " ", -1)),
          createBaseVNode("td", _hoisted_57, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[55] || (_cache[55] = withModifiers(($event) => {
                drillDown("cum_kaposis_sarcoma");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.cum_kaposis_sarcoma || 0), 1)
          ]),
          _cache[333] || (_cache[333] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[334] || (_cache[334] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[555] || (_cache[555] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            colspan: "6",
            style: { "text-align": "left" }
          }, [
            createBaseVNode("b", null, "Primary outcomes as of the end of the quarter evaluated")
          ]),
          createBaseVNode("td", {
            colspan: "3",
            style: { "text-align": "center" }
          }, [
            createBaseVNode("b", null, "Out of all patients ever registered")
          ])
        ], -1)),
        _cache[556] || (_cache[556] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            colspan: "6",
            style: { "text-align": "left" }
          }, " "),
          createBaseVNode("td", { style: { "text-align": "center" } }, "POC"),
          createBaseVNode("td", { style: { "text-align": "center" } }, "Clinic own**"),
          createBaseVNode("td", { style: { "text-align": "center" } }, "Checked data")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[335] || (_cache[335] = createBaseVNode("td", { class: "numbers" }, "53.", -1)),
          _cache[336] || (_cache[336] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px" },
            colspan: "6"
          }, "Total alive and on ART", -1)),
          createBaseVNode("td", _hoisted_58, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[56] || (_cache[56] = withModifiers(($event) => {
                drillDown("total_alive_and_on_art");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_alive_and_on_art || 0), 1)
          ]),
          _cache[337] || (_cache[337] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[338] || (_cache[338] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[557] || (_cache[557] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "center" }
          }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[339] || (_cache[339] = createBaseVNode("td", { class: "numbers" }, "54.", -1)),
          _cache[340] || (_cache[340] = createBaseVNode("td", {
            style: { "font-weight": "bold", "text-align": "right", "border-right-style": "none", "border-bottom-style": "none", "border-left-style": "none" },
            colspan: "2"
          }, "M1", -1)),
          _cache[341] || (_cache[341] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-right-style": "none", "border-bottom-style": "none", "border-left-style": "none" },
            colspan: "4"
          }, "Died within the 1st month after ART initiation", -1)),
          createBaseVNode("td", _hoisted_59, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[57] || (_cache[57] = withModifiers(($event) => {
                drillDown("died_within_the_1st_month_of_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.died_within_the_1st_month_of_art_initiation || 0), 1)
          ]),
          _cache[342] || (_cache[342] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[343] || (_cache[343] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[344] || (_cache[344] = createBaseVNode("td", { class: "numbers" }, "55.", -1)),
          _cache[345] || (_cache[345] = createBaseVNode("td", {
            style: { "font-weight": "bold", "text-align": "right", "border-right-style": "none", "border-top-style": "none", "border-left-style": "none", "border-bottom-style": "none" },
            colspan: "2"
          }, "M2", -1)),
          _cache[346] || (_cache[346] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "none", "border-right-style": "none", "border-bottom-style": "none", "border-left-style": "none" },
            colspan: "4"
          }, "Died within the 2nd month after ART initiation", -1)),
          createBaseVNode("td", _hoisted_60, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[58] || (_cache[58] = withModifiers(($event) => {
                drillDown("died_within_the_2nd_month_of_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.died_within_the_2nd_month_of_art_initiation || 0), 1)
          ]),
          _cache[347] || (_cache[347] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[348] || (_cache[348] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[349] || (_cache[349] = createBaseVNode("td", { class: "numbers" }, "56.", -1)),
          _cache[350] || (_cache[350] = createBaseVNode("td", {
            style: { "font-weight": "bold", "text-align": "right", "border-right-style": "none", "border-bottom-style": "none", "border-left-style": "none", "border-top-style": "none" },
            colspan: "2"
          }, "M3", -1)),
          _cache[351] || (_cache[351] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "none", "border-right-style": "none", "border-bottom-style": "none", "border-left-style": "none" },
            colspan: "4"
          }, "Died within the 3rd month after ART initiation", -1)),
          createBaseVNode("td", _hoisted_61, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[59] || (_cache[59] = withModifiers(($event) => {
                drillDown("died_within_the_3rd_month_of_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.died_within_the_3rd_month_of_art_initiation || 0), 1)
          ]),
          _cache[352] || (_cache[352] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[353] || (_cache[353] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[354] || (_cache[354] = createBaseVNode("td", { class: "numbers" }, "57.", -1)),
          _cache[355] || (_cache[355] = createBaseVNode("td", {
            style: { "font-weight": "bold", "text-align": "right", "border-right-style": "none", "border-left-style": "none", "border-top-style": "none" },
            colspan: "2"
          }, "M4+", -1)),
          _cache[356] || (_cache[356] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-right-style": "none", "border-left-style": "none", "border-top-style": "none" },
            colspan: "4"
          }, "Died after the end of the 3rd month after ART initiation", -1)),
          createBaseVNode("td", _hoisted_62, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[60] || (_cache[60] = withModifiers(($event) => {
                drillDown("died_after_the_3rd_month_of_art_initiation");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.died_after_the_3rd_month_of_art_initiation || 0), 1)
          ]),
          _cache[357] || (_cache[357] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[358] || (_cache[358] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[359] || (_cache[359] = createBaseVNode("td", { class: "numbers" }, "58.", -1)),
          _cache[360] || (_cache[360] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-style": "none" },
            colspan: "6"
          }, "Died total", -1)),
          createBaseVNode("td", _hoisted_63, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[61] || (_cache[61] = withModifiers(($event) => {
                drillDown("died_total");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.died_total || 0), 1)
          ]),
          _cache[361] || (_cache[361] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[362] || (_cache[362] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[363] || (_cache[363] = createBaseVNode("td", { class: "numbers" }, "59.", -1)),
          _cache[364] || (_cache[364] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "none", "border-bottom-style": "none" },
            colspan: "6"
          }, "Defaulted (more than 2 months overdue after expected to have run out of ARVs)", -1)),
          createBaseVNode("td", _hoisted_64, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[62] || (_cache[62] = withModifiers(($event) => {
                drillDown("defaulted");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.defaulted || 0), 1)
          ]),
          _cache[365] || (_cache[365] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[366] || (_cache[366] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[367] || (_cache[367] = createBaseVNode("td", { class: "numbers" }, "60.", -1)),
          _cache[368] || (_cache[368] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "none", "border-bottom-style": "none" },
            colspan: "6"
          }, "Stopped taking ARVs (clinician or patient own decision, last known alive)", -1)),
          createBaseVNode("td", _hoisted_65, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[63] || (_cache[63] = withModifiers(($event) => {
                drillDown("stopped_art");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.stopped_art || 0), 1)
          ]),
          _cache[369] || (_cache[369] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[370] || (_cache[370] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[371] || (_cache[371] = createBaseVNode("td", { class: "numbers" }, "61.", -1)),
          _cache[372] || (_cache[372] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "none" },
            colspan: "6"
          }, "Transferred Out", -1)),
          createBaseVNode("td", _hoisted_66, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[64] || (_cache[64] = withModifiers(($event) => {
                drillDown("transfered_out");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.transfered_out || 0), 1)
          ]),
          _cache[373] || (_cache[373] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1)),
          _cache[374] || (_cache[374] = createBaseVNode("td", { style: { "font-weight": "normal" } }, " ", -1))
        ]),
        _cache[558] || (_cache[558] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "6",
            style: { "font-style": "italic", "text-align": "center" }
          }, "Check completeness of ‘Clinic own data’"),
          createBaseVNode("td", null, [
            createBaseVNode("img", {
              src: _imports_0,
              class: "sum-arrows"
            })
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("img", {
              src: _imports_0,
              class: "sum-arrows"
            })
          ])
        ], -1)),
        _cache[559] || (_cache[559] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, "62."),
          createBaseVNode("td", { colspan: "2" }, " "),
          createBaseVNode("td", {
            colspan: "5",
            style: { "text-align": "left", "border-style": "dotted", "border-width": "1px 1px 0px 1px", "padding-left": "10px" }
          }, "Total adv. outcomes = Died total + Defaulted + Stopped + TO"),
          createBaseVNode("td", { style: { "border-style": "solid", "border-width": "1px" } }, [
            createBaseVNode("span", { class: "postfixes" }, "A")
          ]),
          createBaseVNode("td", { style: { "border-style": "solid", "border-width": "1px" } }, [
            createBaseVNode("span", { class: "postfixes" }, "B")
          ])
        ], -1)),
        _cache[560] || (_cache[560] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, "63."),
          createBaseVNode("td", { colspan: "2" }, " "),
          createBaseVNode("td", {
            colspan: "5",
            style: { "text-align": "left", "border-style": "dotted", "border-width": "0px 0px 1px 1px", "padding-left": "10px" }
          }, "Calculate completeness %   A / B x 100 (Use difference if greater than 100%)"),
          createBaseVNode("td", { style: { "border-style": "dotted", "border-bottom-width": "1px" } }, " "),
          createBaseVNode("td", { style: { "border-style": "solid", "border-width": "1px" } }, [
            createBaseVNode("span", {
              style: { "left": "40px" },
              class: "postfixes"
            }, "%")
          ])
        ], -1)),
        _cache[561] || (_cache[561] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            colspan: "7",
            style: { "text-align": "left", "font-weight": "bold", "padding-left": "10px" }
          }, "Secondary outcomes of those alive on ART"),
          createBaseVNode("td", null, [
            createBaseVNode("b", null, "P"),
            createTextVNode("aeds formul.")
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("b", null, "A"),
            createTextVNode("dults formul.")
          ])
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[375] || (_cache[375] = createBaseVNode("td", { class: "numbers" }, "64.", -1)),
          _cache[376] || (_cache[376] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px" }
          }, "ART Regimens", -1)),
          _cache[377] || (_cache[377] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px" },
            colspan: "3"
          }, " ", -1)),
          _cache[378] || (_cache[378] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px" } }, "Regimen", -1)),
          _cache[379] || (_cache[379] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "0", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[65] || (_cache[65] = withModifiers(($event) => {
                drillDown("zero_p");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.zero_p || 0), 1)
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[66] || (_cache[66] = withModifiers(($event) => {
                drillDown("zero_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.zero_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[380] || (_cache[380] = createBaseVNode("td", { class: "numbers" }, "65.", -1)),
          _cache[381] || (_cache[381] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[382] || (_cache[382] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, " ", -1)),
          _cache[383] || (_cache[383] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[384] || (_cache[384] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "2", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[67] || (_cache[67] = withModifiers(($event) => {
                drillDown("two_p");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.two_p || 0), 1)
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[68] || (_cache[68] = withModifiers(($event) => {
                drillDown("two_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.two_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[386] || (_cache[386] = createBaseVNode("td", { class: "numbers" }, "66.", -1)),
          _cache[387] || (_cache[387] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[388] || (_cache[388] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, [
            createTextVNode("Count regimen for "),
            createBaseVNode("u", null, "all patients registered")
          ], -1)),
          _cache[389] || (_cache[389] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[390] || (_cache[390] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "4", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_67, [
              _cache[385] || (_cache[385] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", _hoisted_69, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[69] || (_cache[69] = withModifiers(($event) => {
                      drillDown("four_pp");
                    }, ["prevent"])),
                    id: "four_pp"
                  }, toDisplayString(__props.indicators.four_pp || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_70, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[70] || (_cache[70] = withModifiers(($event) => {
                      drillDown("four_pa");
                    }, ["prevent"])),
                    id: "four_pa"
                  }, toDisplayString(__props.indicators.four_pa || 0), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[71] || (_cache[71] = withModifiers(($event) => {
                drillDown("four_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.four_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[391] || (_cache[391] = createBaseVNode("td", { class: "numbers" }, "67.", -1)),
          _cache[392] || (_cache[392] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[393] || (_cache[393] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, "at this site, including those who currently", -1)),
          _cache[394] || (_cache[394] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[395] || (_cache[395] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "5", -1)),
          _cache[396] || (_cache[396] = createBaseVNode("td", { style: { "background-color": "#D9D9D9" } }, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[72] || (_cache[72] = withModifiers(($event) => {
                drillDown("five_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.five_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[397] || (_cache[397] = createBaseVNode("td", { class: "numbers" }, "68.", -1)),
          _cache[398] || (_cache[398] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-style": "dotted", "border-bottom-width": "1px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[399] || (_cache[399] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "1px", "border-style": "dotted", "border-left-width": "0px", "border-top-width": "0px", "text-align": "left" },
            colspan: "3"
          }, "get supplies from another site", -1)),
          _cache[400] || (_cache[400] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "1px", "border-style": "dotted", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[401] || (_cache[401] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "1px", "border-style": "dotted", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "6", -1)),
          _cache[402] || (_cache[402] = createBaseVNode("td", { style: { "background-color": "#D9D9D9" } }, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[73] || (_cache[73] = withModifiers(($event) => {
                drillDown("six_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.six_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[403] || (_cache[403] = createBaseVNode("td", { class: "numbers" }, "69.", -1)),
          _cache[404] || (_cache[404] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[405] || (_cache[405] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, " ", -1)),
          _cache[406] || (_cache[406] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[407] || (_cache[407] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "7", -1)),
          _cache[408] || (_cache[408] = createBaseVNode("td", { style: { "background-color": "#D9D9D9" } }, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[74] || (_cache[74] = withModifiers(($event) => {
                drillDown("seven_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.seven_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[409] || (_cache[409] = createBaseVNode("td", { class: "numbers" }, "70.", -1)),
          _cache[410] || (_cache[410] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[411] || (_cache[411] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, " ", -1)),
          _cache[412] || (_cache[412] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[413] || (_cache[413] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "8", -1)),
          _cache[414] || (_cache[414] = createBaseVNode("td", { style: { "background-color": "#D9D9D9" } }, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[75] || (_cache[75] = withModifiers(($event) => {
                drillDown("eight_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.eight_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[416] || (_cache[416] = createBaseVNode("td", { class: "numbers" }, "71.", -1)),
          _cache[417] || (_cache[417] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[418] || (_cache[418] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, " ", -1)),
          _cache[419] || (_cache[419] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[420] || (_cache[420] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "9", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_71, [
              _cache[415] || (_cache[415] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_72, [
                createBaseVNode("div", _hoisted_73, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[76] || (_cache[76] = withModifiers(($event) => {
                      drillDown("nine_pp");
                    }, ["prevent"])),
                    id: "nine_pp"
                  }, toDisplayString(__props.indicators.nine_pp || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_74, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[77] || (_cache[77] = withModifiers(($event) => {
                      drillDown("nine_pa");
                    }, ["prevent"])),
                    id: "nine_pa"
                  }, toDisplayString(__props.indicators.nine_pa || 0), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[78] || (_cache[78] = withModifiers(($event) => {
                drillDown("nine_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.nine_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[421] || (_cache[421] = createBaseVNode("td", { class: "numbers" }, "72.", -1)),
          _cache[422] || (_cache[422] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "0px" }
          }, " ", -1)),
          _cache[423] || (_cache[423] = createBaseVNode("td", {
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "0px" },
            colspan: "3"
          }, " ", -1)),
          _cache[424] || (_cache[424] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[425] || (_cache[425] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "10", -1)),
          _cache[426] || (_cache[426] = createBaseVNode("td", { style: { "background-color": "#D9D9D9" } }, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[79] || (_cache[79] = withModifiers(($event) => {
                drillDown("ten_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.ten_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[428] || (_cache[428] = createBaseVNode("td", { class: "numbers" }, "73.", -1)),
          _cache[429] || (_cache[429] = createBaseVNode("td", {
            colspan: "1",
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[430] || (_cache[430] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "4"
          }, "Specify ‘Other’ Regimens and number of patients on each", -1)),
          _cache[431] || (_cache[431] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[432] || (_cache[432] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "11", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_75, [
              _cache[427] || (_cache[427] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_76, [
                createBaseVNode("div", _hoisted_77, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[80] || (_cache[80] = withModifiers(($event) => {
                      drillDown("eleven_pp");
                    }, ["prevent"])),
                    id: "eleven_pp"
                  }, toDisplayString(__props.indicators.eleven_pp), 1)
                ]),
                createBaseVNode("div", _hoisted_78, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[81] || (_cache[81] = withModifiers(($event) => {
                      drillDown("eleven_pa");
                    }, ["prevent"])),
                    id: "eleven_pa"
                  }, toDisplayString(__props.indicators.eleven_pa), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[82] || (_cache[82] = withModifiers(($event) => {
                drillDown("eleven_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.eleven_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[434] || (_cache[434] = createBaseVNode("td", { class: "numbers" }, "74.", -1)),
          _cache[435] || (_cache[435] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[436] || (_cache[436] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[437] || (_cache[437] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[438] || (_cache[438] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "12", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_79, [
              _cache[433] || (_cache[433] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_80, [
                createBaseVNode("div", _hoisted_81, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[83] || (_cache[83] = withModifiers(($event) => {
                      drillDown("twelve_pp");
                    }, ["prevent"])),
                    id: "twelve_pp"
                  }, toDisplayString(__props.indicators.twelve_pp || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_82, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[84] || (_cache[84] = withModifiers(($event) => {
                      drillDown("twelve_pa");
                    }, ["prevent"])),
                    id: "twelve_pa"
                  }, toDisplayString(__props.indicators.twelve_pa || 0), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[85] || (_cache[85] = withModifiers(($event) => {
                drillDown("twelve_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.twelve_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[439] || (_cache[439] = createBaseVNode("td", { class: "numbers" }, "75.", -1)),
          _cache[440] || (_cache[440] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[441] || (_cache[441] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[442] || (_cache[442] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[443] || (_cache[443] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "13", -1)),
          _cache[444] || (_cache[444] = createBaseVNode("td", { style: { "background-color": "#D9D9D9" } }, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[86] || (_cache[86] = withModifiers(($event) => {
                drillDown("thirteen_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.thirteen_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[446] || (_cache[446] = createBaseVNode("td", { class: "numbers" }, "76.", -1)),
          _cache[447] || (_cache[447] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[448] || (_cache[448] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[449] || (_cache[449] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[450] || (_cache[450] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "14", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_83, [
              _cache[445] || (_cache[445] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_84, [
                createBaseVNode("div", _hoisted_85, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[87] || (_cache[87] = withModifiers(($event) => {
                      drillDown("fourteen_pp");
                    }, ["prevent"])),
                    id: "fourteen_pp"
                  }, toDisplayString(__props.indicators.fourteen_pp || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_86, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[88] || (_cache[88] = withModifiers(($event) => {
                      drillDown("fourteen_pa");
                    }, ["prevent"])),
                    id: "fourteen_pa"
                  }, toDisplayString(__props.indicators.fourteen_pa || 0), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[89] || (_cache[89] = withModifiers(($event) => {
                drillDown("fourteen_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.fourteen_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[452] || (_cache[452] = createBaseVNode("td", { class: "numbers" }, "77.", -1)),
          _cache[453] || (_cache[453] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[454] || (_cache[454] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[455] || (_cache[455] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[456] || (_cache[456] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "15", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_87, [
              _cache[451] || (_cache[451] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "P")
                ]),
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_88, [
                createBaseVNode("div", _hoisted_89, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[90] || (_cache[90] = withModifiers(($event) => {
                      drillDown("fifteen_p");
                    }, ["prevent"])),
                    id: "fifteen_p"
                  }, toDisplayString(__props.indicators.fifteen_p || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_90, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[91] || (_cache[91] = withModifiers(($event) => {
                      drillDown("fifteen_pp");
                    }, ["prevent"])),
                    id: "fifteen_pp"
                  }, toDisplayString(__props.indicators.fifteen_pp || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_91, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[92] || (_cache[92] = withModifiers(($event) => {
                      drillDown("fifteen_pa");
                    }, ["prevent"])),
                    id: "fifteen_pa"
                  }, toDisplayString(__props.indicators.fifteen_pa || 0), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[93] || (_cache[93] = withModifiers(($event) => {
                drillDown("fifteen_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.fifteen_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[457] || (_cache[457] = createBaseVNode("td", { class: "numbers" }, "78.", -1)),
          _cache[458] || (_cache[458] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[459] || (_cache[459] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[460] || (_cache[460] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[461] || (_cache[461] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "16", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[94] || (_cache[94] = withModifiers(($event) => {
                drillDown("sixteen_p");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.sixteen_p || 0), 1)
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[95] || (_cache[95] = withModifiers(($event) => {
                drillDown("sixteen_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.sixteen_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[463] || (_cache[463] = createBaseVNode("td", { class: "numbers" }, "79.", -1)),
          _cache[464] || (_cache[464] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "0px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[465] || (_cache[465] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "0px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[466] || (_cache[466] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px" } }, "Regimen", -1)),
          _cache[467] || (_cache[467] = createBaseVNode("td", { style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "right", "padding-right": "5px", "font-weight": "bold" } }, "17", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("div", _hoisted_92, [
              _cache[462] || (_cache[462] = createBaseVNode("div", { class: "granules-row" }, [
                createBaseVNode("div", { class: "granules-cell granules-right-td" }, [
                  createBaseVNode("span", null, "PP")
                ]),
                createBaseVNode("div", { class: "granules-cell" }, [
                  createBaseVNode("span", null, "PA")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_93, [
                createBaseVNode("div", _hoisted_94, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[96] || (_cache[96] = withModifiers(($event) => {
                      drillDown("seventeen_pp");
                    }, ["prevent"])),
                    id: "seventeen_pp"
                  }, toDisplayString(__props.indicators.seventeen_pp || 0), 1)
                ]),
                createBaseVNode("div", _hoisted_95, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: _cache[97] || (_cache[97] = withModifiers(($event) => {
                      drillDown("seventeen_pa");
                    }, ["prevent"])),
                    id: "seventeen_pa"
                  }, toDisplayString(__props.indicators.seventeen_pa || 0), 1)
                ])
              ])
            ])
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[98] || (_cache[98] = withModifiers(($event) => {
                drillDown("seventeen_a");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.seventeen_a || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[468] || (_cache[468] = createBaseVNode("td", { class: "numbers" }, "80.", -1)),
          _cache[469] || (_cache[469] = createBaseVNode("td", {
            colspan: "2",
            style: { "text-align": "left", "padding-left": "10px", "border-top-style": "dotted", "border-bottom-width": "1px", "border-right-width": "0px", "border-top-width": "1px" }
          }, " ", -1)),
          _cache[470] || (_cache[470] = createBaseVNode("td", {
            style: { "border-right-width": "1px", "border-bottom-width": "1px", "border-top-style": "dotted", "text-align": "left", "border-left-width": "0px", "border-top-width": "1px" },
            colspan: "3"
          }, " ", -1)),
          _cache[471] || (_cache[471] = createBaseVNode("td", {
            colspan: "2",
            style: { "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px", "border-top-width": "0px", "text-align": "left", "padding-left": "10px" }
          }, "Other (paed./adult)", -1)),
          _cache[472] || (_cache[472] = createBaseVNode("td", null, " ", -1)),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[99] || (_cache[99] = withModifiers(($event) => {
                drillDown("unknown_regimen");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.unknown_regimen || 0), 1)
          ])
        ]),
        _cache[562] || (_cache[562] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left" }
          }, " ")
        ], -1)),
        createBaseVNode("tr", _hoisted_96, [
          _cache[473] || (_cache[473] = createBaseVNode("td", { class: "numbers" }, "81.", -1)),
          _cache[474] || (_cache[474] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px" } }, "Pregnant / Breastfeeding", -1)),
          _cache[475] || (_cache[475] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px" },
            colspan: "4"
          }, "(as of the last visit before end of quarter)", -1)),
          _cache[476] || (_cache[476] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "Pregnant", -1)),
          createBaseVNode("td", _hoisted_97, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[100] || (_cache[100] = withModifiers(($event) => {
                drillDown("total_pregnant_women");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_pregnant_women || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[477] || (_cache[477] = createBaseVNode("td", { class: "numbers" }, "82.", -1)),
          _cache[478] || (_cache[478] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[479] || (_cache[479] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[480] || (_cache[480] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "Breastfeeding", -1)),
          createBaseVNode("td", _hoisted_98, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[101] || (_cache[101] = withModifiers(($event) => {
                drillDown("total_breastfeeding_women");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_breastfeeding_women || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[481] || (_cache[481] = createBaseVNode("td", { class: "numbers" }, "83.", -1)),
          _cache[482] || (_cache[482] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[483] || (_cache[483] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "1px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[484] || (_cache[484] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "All others (not circled)", -1)),
          createBaseVNode("td", _hoisted_99, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[102] || (_cache[102] = withModifiers(($event) => {
                drillDown("total_other_patients");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_other_patients || 0), 1)
          ])
        ]),
        _cache[563] || (_cache[563] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left" }
          }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[485] || (_cache[485] = createBaseVNode("td", { class: "numbers" }, "84.", -1)),
          _cache[486] || (_cache[486] = createBaseVNode("td", {
            style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px" },
            colspan: "2"
          }, [
            createTextVNode("Current TB status"),
            createBaseVNode("br"),
            createTextVNode("any form of TB")
          ], -1)),
          _cache[487] || (_cache[487] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px" },
            colspan: "3"
          }, "(as of the last visit before end of quarter)", -1)),
          _cache[488] || (_cache[488] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "TB not suspected", -1)),
          createBaseVNode("td", _hoisted_100, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[103] || (_cache[103] = withModifiers(($event) => {
                drillDown("tb_not_suspected");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.tb_not_suspected || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[489] || (_cache[489] = createBaseVNode("td", { class: "numbers" }, "85.", -1)),
          _cache[490] || (_cache[490] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[491] || (_cache[491] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[492] || (_cache[492] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "TB suspected", -1)),
          createBaseVNode("td", _hoisted_101, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[104] || (_cache[104] = withModifiers(($event) => {
                drillDown("tb_suspected");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.tb_suspected || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[493] || (_cache[493] = createBaseVNode("td", { class: "numbers" }, "86.", -1)),
          _cache[494] || (_cache[494] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[495] || (_cache[495] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[496] || (_cache[496] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, [
            createTextVNode("TB conf., "),
            createBaseVNode("b", null, "not"),
            createTextVNode(" on Rx")
          ], -1)),
          createBaseVNode("td", _hoisted_102, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[105] || (_cache[105] = withModifiers(($event) => {
                drillDown("tb_confirmed_currently_not_yet_on_tb_treatment");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.tb_confirmed_currently_not_yet_on_tb_treatment || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[497] || (_cache[497] = createBaseVNode("td", { class: "numbers" }, "87.", -1)),
          _cache[498] || (_cache[498] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[499] || (_cache[499] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[500] || (_cache[500] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, [
            createTextVNode("TB conf., "),
            createBaseVNode("b", null, "on"),
            createTextVNode(" TB Rx")
          ], -1)),
          createBaseVNode("td", _hoisted_103, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[106] || (_cache[106] = withModifiers(($event) => {
                drillDown("tb_confirmed_on_tb_treatment");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.tb_confirmed_on_tb_treatment || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[501] || (_cache[501] = createBaseVNode("td", { class: "numbers" }, "88.", -1)),
          _cache[502] || (_cache[502] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[503] || (_cache[503] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "1px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[504] || (_cache[504] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "Unknown (not circled)", -1)),
          createBaseVNode("td", _hoisted_104, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[107] || (_cache[107] = withModifiers(($event) => {
                drillDown("unknown_tb_status");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.unknown_tb_status || 0), 1)
          ])
        ]),
        _cache[564] || (_cache[564] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left" }
          }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[505] || (_cache[505] = createBaseVNode("td", { class: "numbers" }, "89.", -1)),
          _cache[506] || (_cache[506] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px" } }, "Side effects", -1)),
          _cache[507] || (_cache[507] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px" },
            colspan: "4"
          }, "(as of the last visit before end of quarter)", -1)),
          _cache[508] || (_cache[508] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "None", -1)),
          createBaseVNode("td", _hoisted_105, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[108] || (_cache[108] = withModifiers(($event) => {
                drillDown("total_patients_without_side_effects");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_patients_without_side_effects || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[509] || (_cache[509] = createBaseVNode("td", { class: "numbers" }, "90.", -1)),
          _cache[510] || (_cache[510] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[511] || (_cache[511] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px", "border-top-width": "0px" },
            colspan: "4"
          }, "ADRReportformfilledforeachcase?(seeQ110.)◄", -1)),
          _cache[512] || (_cache[512] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "Any side effects", -1)),
          createBaseVNode("td", _hoisted_106, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[109] || (_cache[109] = withModifiers(($event) => {
                drillDown("total_patients_with_side_effects");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_patients_with_side_effects || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[513] || (_cache[513] = createBaseVNode("td", { class: "numbers" }, "91.", -1)),
          _cache[514] || (_cache[514] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[515] || (_cache[515] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "1px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[516] || (_cache[516] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "Unknown (not circled)", -1)),
          createBaseVNode("td", _hoisted_107, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[110] || (_cache[110] = withModifiers(($event) => {
                drillDown("unknown_side_effects");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.unknown_side_effects || 0), 1)
          ])
        ]),
        _cache[565] || (_cache[565] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", null, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left" }
          }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[517] || (_cache[517] = createBaseVNode("td", { class: "numbers" }, "92.", -1)),
          _cache[518] || (_cache[518] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-right-width": "0px" } }, "Adherence", -1)),
          _cache[519] || (_cache[519] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px" },
            colspan: "4"
          }, "(as of the last visit before end of quarter)", -1)),
          _cache[520] || (_cache[520] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "0 – 3 doses missed", -1)),
          createBaseVNode("td", _hoisted_108, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[111] || (_cache[111] = withModifiers(($event) => {
                drillDown("patients_with_0_6_doses_missed_at_their_last_visit");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.patients_with_0_6_doses_missed_at_their_last_visit || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[521] || (_cache[521] = createBaseVNode("td", { class: "numbers" }, "93.", -1)),
          _cache[522] || (_cache[522] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "0px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[523] || (_cache[523] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "0px", "border-top-width": "0px" },
            colspan: "4"
          }, null, -1)),
          _cache[524] || (_cache[524] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "0px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "4+ doses missed", -1)),
          createBaseVNode("td", _hoisted_109, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[112] || (_cache[112] = withModifiers(($event) => {
                drillDown("patients_with_7_plus_doses_missed_at_their_last_visit");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.patients_with_7_plus_doses_missed_at_their_last_visit || 0), 1)
          ])
        ]),
        createBaseVNode("tr", null, [
          _cache[525] || (_cache[525] = createBaseVNode("td", { class: "numbers" }, "94.", -1)),
          _cache[526] || (_cache[526] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "0px", "border-right-width": "0px" } }, " ", -1)),
          _cache[527] || (_cache[527] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-left-width": "0px", "border-right-width": "0px", "border-bottom-width": "1px", "border-top-width": "0px" },
            colspan: "4"
          }, " ", -1)),
          _cache[528] || (_cache[528] = createBaseVNode("td", {
            style: { "font-weight": "normal", "border-top-width": "0px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" },
            colspan: "2"
          }, "Unknown (not circled)", -1)),
          createBaseVNode("td", _hoisted_110, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[113] || (_cache[113] = withModifiers(($event) => {
                drillDown("patients_with_unknown_adhrence");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.patients_with_unknown_adhrence || 0), 1)
          ])
        ]),
        _cache[566] || (_cache[566] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", {
            colspan: "9",
            style: { "text-align": "left", "font-weight": "bold", "padding-left": "10px" }
          }, "Preventive services / HIV related diseases")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[529] || (_cache[529] = createBaseVNode("td", { class: "numbers" }, "95.", -1)),
          _cache[530] || (_cache[530] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px", "font-weight": "bold" } }, "TPT", -1)),
          _cache[531] || (_cache[531] = createBaseVNode("td", {
            colspan: "4",
            style: { "font-weight": "normal", "border-top-width": "1px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" }
          }, "Number of ART patients newly started on TB preventive therapy this quarter ", -1)),
          createBaseVNode("td", _hoisted_111, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[114] || (_cache[114] = withModifiers(($event) => {
                drillDown("newly_initiated_on_ipt");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.newly_initiated_on_ipt || 0), 1)
          ]),
          _cache[532] || (_cache[532] = createBaseVNode("td", { style: { "font-weight": "bold", "order-top-width": "1px", "text-align": "right", "border-left-width": "0px", "border-bottom-width": "1px", "padding-right": "5px" } }, "6H", -1)),
          createBaseVNode("td", _hoisted_112, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[115] || (_cache[115] = withModifiers(($event) => {
                drillDown("newly_initiated_on_3hp");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.newly_initiated_on_3hp || 0), 1)
          ]),
          _cache[533] || (_cache[533] = createBaseVNode("td", { style: { "font-weight": "bold", "order-top-width": "1px", "text-align": "right", "border-left-width": "0px", "border-bottom-width": "1px", "padding-right": "5px" } }, "3HP", -1))
        ]),
        createBaseVNode("tr", null, [
          _cache[534] || (_cache[534] = createBaseVNode("td", { class: "numbers" }, "96.", -1)),
          _cache[535] || (_cache[535] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px", "font-weight": "bold" } }, "CPT / IPT", -1)),
          _cache[536] || (_cache[536] = createBaseVNode("td", {
            colspan: "4",
            style: { "font-weight": "normal", "border-top-width": "1px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" }
          }, "Approx. % of patients retained in ART who are currently on CPT / IPT", -1)),
          createBaseVNode("td", _hoisted_113, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[116] || (_cache[116] = withModifiers(($event) => {
                drillDown("total_patients_on_arvs_and_cpt");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_patients_on_arvs_and_cpt || 0), 1)
          ]),
          _cache[537] || (_cache[537] = createBaseVNode("td", { style: { "font-weight": "bold", "order-top-width": "1px", "text-align": "right", "border-left-width": "0px", "border-bottom-width": "1px", "padding-right": "5px" } }, "CPT%", -1)),
          createBaseVNode("td", _hoisted_114, [
            createBaseVNode("a", {
              href: "#",
              onClick: _cache[117] || (_cache[117] = withModifiers(($event) => {
                drillDown("total_patients_on_arvs_and_ipt");
              }, ["prevent"]))
            }, toDisplayString(__props.indicators.total_patients_on_arvs_and_ipt || 0), 1)
          ]),
          _cache[538] || (_cache[538] = createBaseVNode("td", { style: { "font-weight": "bold", "order-top-width": "1px", "text-align": "right", "border-left-width": "0px", "border-bottom-width": "1px", "padding-right": "5px" } }, "IPT%", -1))
        ]),
        _cache[567] || (_cache[567] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", { colspan: "9" }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[540] || (_cache[540] = createBaseVNode("td", { class: "numbers" }, "97.", -1)),
          _cache[541] || (_cache[541] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px", "font-weight": "bold" } }, "PIFP", -1)),
          _cache[542] || (_cache[542] = createBaseVNode("td", {
            colspan: "4",
            style: { "font-weight": "normal", "border-top-width": "1px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" }
          }, "Approx. % of women who received Depo at ART in the last quarter", -1)),
          createBaseVNode("td", _hoisted_115, [
            createBaseVNode("span", null, [
              createBaseVNode("a", {
                href: "#",
                onClick: _cache[118] || (_cache[118] = withModifiers(($event) => {
                  drillDown("total_patients_on_family_planning");
                }, ["prevent"]))
              }, toDisplayString(__props.indicators.total_patients_on_family_planning || 0), 1)
            ]),
            _cache[539] || (_cache[539] = createTextVNode(" %", -1))
          ])
        ]),
        _cache[568] || (_cache[568] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", { colspan: "9" }, " ")
        ], -1)),
        createBaseVNode("tr", null, [
          _cache[544] || (_cache[544] = createBaseVNode("td", { class: "numbers" }, "98.", -1)),
          _cache[545] || (_cache[545] = createBaseVNode("td", { style: { "text-align": "left", "padding-left": "10px", "border-bottom-width": "1px", "border-top-width": "1px", "border-right-width": "0px", "font-weight": "bold" } }, "BP screen", -1)),
          _cache[546] || (_cache[546] = createBaseVNode("td", {
            colspan: "4",
            style: { "font-weight": "normal", "border-top-width": "1px", "border-left-width": "0px", "border-bottom-width": "1px", "text-align": "left", "padding-left": "10px" }
          }, "Approx. % of adult ART patients with BP recorded at least once this year ", -1)),
          createBaseVNode("td", _hoisted_116, [
            createBaseVNode("span", null, [
              createBaseVNode("a", {
                href: "#",
                onClick: _cache[119] || (_cache[119] = withModifiers(($event) => {
                  drillDown("total_patients_on_family_planning");
                }, ["prevent"]))
              }, toDisplayString(__props.indicators.total_patients_with_screened_bp || 0), 1)
            ]),
            _cache[543] || (_cache[543] = createTextVNode(" %", -1))
          ])
        ]),
        _cache[569] || (_cache[569] = createBaseVNode("tr", { class: "horisonatl-separator" }, [
          createBaseVNode("td", { class: "numbers" }, " "),
          createBaseVNode("td", { colspan: "9" }, " ")
        ], -1))
      ]);
    };
  }
});

const CohortFt = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-10bdc7b2"]]);

class CohortReportService extends ReportService {
  quarter;
  regenerate;
  constructor() {
    super();
    this.regenerate = false;
    this.quarter = "";
  }
  setQuarter(quarter) {
    this.quarter = quarter;
  }
  setRegenerate(regenete) {
    this.regenerate = regenete;
  }
  getCohortDrillDown(resourceId) {
    const url = parameterizeUrl("cohort_report_drill_down", {
      id: resourceId,
      date: this.date,
      program_id: this.programId
    });
    return ApiClient.get(url);
  }
  qaurterRequestParams() {
    return {
      name: this.quarter,
      regenerate: this.regenerate
    };
  }
  datePeriodRequestParams() {
    return {
      name: `Cohort-${this.startDate}-${this.endDate}`,
      start_date: this.startDate,
      end_date: this.endDate,
      regenerate: this.regenerate
    };
  }
  async requestCohort(params) {
    const url = parameterizeUrl(`programs/${this.programId}/reports/cohort`, params);
    try {
      const response = await ApiClient.get(url);
      if (!response) {
        return { ok: false, data: null, httpStatusResponse: 0 };
      }
      const httpStatusResponse = response.status;
      if (response.ok) {
        const text = await response.text();
        let data = null;
        if (text && text.trim() !== "") {
          try {
            data = JSON.parse(text);
          } catch (parseError) {
            console.error("Error parsing JSON response:", parseError);
            return { ok: false, data: null, error: parseError, httpStatusResponse };
          }
        }
        return { ok: true, data, httpStatusResponse };
      } else {
        return { ok: false, data: null, httpStatusResponse };
      }
    } catch (error) {
      console.error("Error fetching cohort data:", error);
      return { ok: false, data: null, error, httpStatusResponse: 0 };
    }
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const router = useRouter();
    const componentKey = ref(0);
    const quarter = ref();
    const period = ref("");
    const startDate = ref("");
    const endDate = ref("");
    const indicators = ref({});
    const cohort = ref({});
    const report = new CohortReportService();
    const useCustomQuarter = computed(() => /custom/i.test(quarter.value?.label));
    const hasInvalidFilters = computed(() => {
      if (lodashExports.isEmpty(quarter.value)) return true;
      if (useCustomQuarter.value) {
        return !isValidDateRange(startDate.value, endDate.value);
      }
      return false;
    });
    const quarters = [
      { label: "Custom", value: "Custom" },
      ...getReportQuarters(10).map((q) => ({
        label: q.name,
        value: q.name,
        other: q
      }))
    ];
    watch(useCustomQuarter, (isCustom) => {
      if (isCustom) {
        startDate.value = "";
        endDate.value = "";
      }
    });
    function goDisagreggatedReport() {
      if (!hasInvalidFilters.value) {
        router.push(
          parameterizeUrl("/reports/moh/disaggregated", {
            startDate: report.startDate,
            endDate: report.endDate
          })
        );
      } else {
        toastWarning("Please select a period");
      }
    }
    async function onDrilldown(indicator) {
      const drillColumns = [
        { path: "arv_number", label: "ARV Number", preSort: parseARVNumber, initialSort: true },
        { path: "given_name", label: "First Name", exportable: false },
        { path: "family_name", label: "Last Name", exportable: false },
        { path: "birthdate", label: "Date of Birth", formatter: toDisplayFmt },
        { path: "gender", label: "Gender", formatter: toDisplayGenderFmt },
        { path: "outcome", label: "Outcome" }
      ];
      try {
        loader.show();
        const indicatorData = cohort.value.find((i) => i.name === indicator);
        const title = indicatorData["indicator_name"] || "Drill down";
        const res = await report.getCohortDrillDown(indicatorData.id);
        const resData = await res.json();
        const drillRows = Array.isArray(resData) ? resData : [];
        await loader.hide();
        return modal.show(
          DrilldownTable,
          {
            title,
            columns: drillColumns,
            rows: drillRows,
            rowActionButtons: [
              {
                icon: eye,
                action: async ({ person_id }) => {
                  const patient = await PatientService.findByID(person_id);
                  await resetPatientData();
                  await useDemographicsStore().setPatientRecord(patient);
                  return router.replace({ path: "/patient-profile" });
                }
              }
            ],
            actionButtons: [
              getCsvExportBtn(title, quarter.value?.label, period.value),
              getPdfExportBtn(title, false, quarter.value?.label, period.value)
            ]
          },
          "large-modal"
        );
      } catch (error) {
        await loader.hide();
        console.error(error);
        toastWarning("Unable to drill down the report");
      }
    }
    const setReportPeriod = (quarter2, startDate2, endDate2) => {
      report.setQuarter(quarter2);
      report.setStartDate(startDate2);
      report.setEndDate(endDate2);
    };
    const toIndicators = (params) => {
      return params.reduce((data, indicator) => {
        data[indicator.name] = parseInt(indicator.contents);
        return data;
      }, {});
    };
    async function fetchData(regenerate = false) {
      if (hasInvalidFilters.value) {
        return toastWarning("Please select report period");
      }
      loader.show();
      let data = {};
      indicators.value = {};
      cohort.value = {};
      report.setRegenerate(regenerate);
      if (useCustomQuarter.value) {
        setReportPeriod(quarter.value, startDate.value, endDate.value);
        period.value = `Custom ${report.getDateIntervalPeriod()}`;
        data = report.datePeriodRequestParams();
      } else {
        setReportPeriod(quarter.value?.label, quarter.value?.other.start, quarter.value?.other.end);
        period.value = quarter.value?.label;
        data = report.qaurterRequestParams();
      }
      const response = await report.requestCohort(data);
      if (response?.ok || response.httpStatusResponse === 204) {
        const interval = setInterval(async () => {
          data.regenerate = false;
          const res = await report.requestCohort(data);
          if (res?.httpStatusResponse === 200) {
            const cohortData = res.data;
            cohort.value = cohortData.values;
            indicators.value = toIndicators(cohortData.values);
            loader.hide();
            clearInterval(interval);
            componentKey.value++;
          }
        }, 3e3);
      }
    }
    function printSpec() {
      const printW = open("", "", "width:1024px, height:768px");
      const content = document.getElementById("report-content");
      if (content && printW) {
        printW.document.write(`
        <html>
          <head>
            <title>Print Cohort</title>
            <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `);
        setTimeout(() => {
          printW.print();
          printW.close();
        }, 3500);
      }
    }
    function toCSV() {
      const columns = [
        { label: "Indicator", path: "indicator" },
        { label: "Value", path: "value" }
      ];
      const rows = Object.entries(indicators.value).map(([indicator, value]) => ({
        indicator,
        value
      }));
      const filename = `MOH ${useFacility().facilityName} cohort report ${period.value}`;
      exportToCSV({ columns, rows, filename });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), { style: { "padding": "0 !important" } }, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), { style: { "border-bottom": "1px solid #c2c2c2", "font-weight": "500", "color": "#000" } }, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode("MoH Cohort Report", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), {
            class: "ion-no-padding",
            style: { "min-height": "45vh" }
          }, {
            default: withCtx(() => [
              createVNode(unref(IonGrid), null, {
                default: withCtx(() => [
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonCol), { size: "2" }, {
                        default: withCtx(() => [
                          createVNode(unref(Ce), {
                            modelValue: quarter.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => quarter.value = $event),
                            options: quarters,
                            placeholder: "Select Quarter"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      useCustomQuarter.value ? (openBlock(), createBlock(unref(IonCol), {
                        key: 0,
                        size: "4",
                        style: { "display": "flex", "justify-content": "flex-start" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Hn), {
                            modelValue: startDate.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                            placeholder: "Start Date",
                            "enable-time-picker": false,
                            format: "dd/MMM/yyyy",
                            "auto-apply": "",
                            "text-input": "",
                            class: "ion-margin-end"
                          }, null, 8, ["modelValue"]),
                          createVNode(unref(Hn), {
                            modelValue: endDate.value,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => endDate.value = $event),
                            placeholder: "End Date",
                            "enable-time-picker": false,
                            format: "dd/MMM/yyyy",
                            "auto-apply": "",
                            "text-input": "",
                            class: "ion-margin-end"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(unref(IonCol), {
                        size: useCustomQuarter.value ? "6" : "10"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonButton), {
                            class: "ion-float-right",
                            color: "primary",
                            onClick: toCSV
                          }, {
                            default: withCtx(() => [..._cache[6] || (_cache[6] = [
                              createTextVNode("CSV", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(IonButton), {
                            class: "ion-float-right",
                            color: "primary",
                            onClick: printSpec
                          }, {
                            default: withCtx(() => [..._cache[7] || (_cache[7] = [
                              createTextVNode("PDF", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(IonButton), {
                            class: "ion-float-right",
                            color: "secondary",
                            onClick: goDisagreggatedReport,
                            disabled: hasInvalidFilters.value || unref(lodashExports.isEmpty)(indicators.value)
                          }, {
                            default: withCtx(() => [..._cache[8] || (_cache[8] = [
                              createTextVNode("Disaggregated", -1)
                            ])]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(IonButton), {
                            class: "ion-float-right",
                            color: "warning",
                            onClick: _cache[3] || (_cache[3] = ($event) => fetchData(true))
                          }, {
                            default: withCtx(() => [..._cache[9] || (_cache[9] = [
                              createTextVNode("Fresh Report", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(IonButton), {
                            class: "ion-float-right",
                            color: "success",
                            onClick: _cache[4] || (_cache[4] = ($event) => fetchData())
                          }, {
                            default: withCtx(() => [..._cache[10] || (_cache[10] = [
                              createTextVNode("Archived Report", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["size"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonRow), { class: "his-card" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(unref(IonCol), {
                        size: "12",
                        key: componentKey.value,
                        id: "report-content"
                      }, {
                        default: withCtx(() => [
                          createVNode(CohortV, {
                            indicators: indicators.value,
                            style: { "font-weight": "600" }
                          }, null, 8, ["indicators"]),
                          createVNode(CohortH, { reportparams: period.value }, null, 8, ["reportparams"]),
                          createVNode(CohortFt, {
                            onOnClickIndicator: onDrilldown,
                            indicators: indicators.value
                          }, null, 8, ["indicators"])
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9b4ce90"]]);

export { index as default };
