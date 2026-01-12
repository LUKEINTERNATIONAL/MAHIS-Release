import { q as defineComponent, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, H as IonContent, v as resolveComponent, x as createElementBlock, y as openBlock, z as createVNode, A as withCtx, B as createBaseVNode, J as Fragment, R as renderList, O as createBlock, a5 as createTextVNode, C as toDisplayString, G as createCommentVNode, P as normalizeStyle, br as IonPage, bW as chevronBackOutline, bu as eye, dq as calendar, bo as pulseOutline, b8 as checkmark } from './vendor-BPW-J91F.js';
import { F as DynamicButton, b8 as BMIService, H as HisDate, o as createModal, aq as ConceptService, E as EncounterService, P as PatientService, u as useDemographicsStore, bb as useInvestigationStore, n as icons, _ as _export_sfc, T as Toolbar, K as ObservationService } from '../index-Bam205gA.js';
import { D as DemographicBar } from './DemographicBar-CtWr8jnN.js';
import { N as NextAppointmentModal, L as LandingPage, u as useScheduleNextAppointmentStore } from './NextAppointmentModal-DyF2MxLg.js';
import { U as UpcomingFeature, I as InvestigationsModal, F as FeatusModal } from './UpcomingFeature-DkVtqs1l.js';
import { m as mapState } from './pinia-D-q2_lrU.js';

const _sfc_main$1 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    UpcomingFeature,
    DynamicButton
  },
  data() {
    return {
      iconsContent: icons,
      visits: [],
      BMI: "",
      nextAppointMent: "",
      drugs: "",
      visitDate: [],
      primaryDiagnosis: [],
      presentingComplaint: [],
      secondaryDiagnosis: [],
      labOrders: [],
      vitals: {},
      vitalsWeightHeight: {},
      savedEncounters: [],
      pregnancy: {},
      appointmentDate: ""
    };
  },
  watch: {
    patient: {
      async handler() {
        await this.updateData();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.updateData();
      },
      deep: true
    }
  },
  async mounted() {
    await this.updateData();
  },
  computed: {
    ...mapState(useInvestigationStore, ["investigations"]),
    ...mapState(useDemographicsStore, ["patient"]),
    inputFields() {
      return this.investigations[0].selectedData;
    }
  },
  methods: {
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    covertDate(date) {
      return HisDate.toStandardHisDisplayFormat(date);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setDiagnosisEncounters(encounters);
      await this.setVitalsEncounters(encounters);
      await this.setPresentingComplainsEncounters(encounters);
      await this.setTreatmentEncounters(encounters);
      await this.setANCProfileEncounters(encounters);
      await this.setNextAppointmentEncounter(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setDiagnosisEncounters(data) {
      const observations = this.findEncounter(data, "OUTPATIENT DIAGNOSIS")?.observations;
      this.primaryDiagnosis = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
      this.secondaryDiagnosis = await this.getConceptValues(this.filterObs(observations, "Secondary diagnosis"), "coded");
    },
    async setVitalsEncounters(data) {
      const observations = this.findEncounter(data, "VITALS")?.observations;
      this.vitals.weight = this.filterObs(observations, "Weight")?.[0]?.value_numeric ?? "";
      this.vitals.temperature = this.filterObs(observations, "Temperature")?.[0]?.value_numeric ?? "";
      this.vitals.pulse = this.filterObs(observations, "Pulse")?.[0]?.value_numeric ?? "";
      this.vitals.SAO2 = this.filterObs(observations, "SAO2")?.[0]?.value_numeric ?? "";
      this.vitals.height = this.filterObs(observations, "Height (cm)")?.[0]?.value_numeric ?? "";
      this.vitals.systolic = this.filterObs(observations, "Systolic")?.[0]?.value_numeric ?? "";
      this.vitals.respirationRate = this.filterObs(observations, "Respiration rate")?.[0]?.value_numeric ?? "";
      this.vitals.diastolic = this.filterObs(observations, "Diastolic")?.[0]?.value_numeric ?? "";
      if (this.vitals.weight && this.vitals.height) {
        await this.setBMI(this.vitals.weight, this.vitals.height);
      }
    },
    async setNextAppointmentEncounter(data) {
      const observations = this.findEncounter(data, "APPOINTMENT")?.observations;
      this.appointmentDate["Appointment date"] = this.filterObs(observations, "Appointment date")?.[0]?.value_text ?? "";
    },
    async setANCProfileEncounters(data) {
      const observations = this.findEncounter(data, "CURRENT PREGNANCY")?.observations;
      this.pregnancy.Gravida = this.filterObs(observations, "Gravida")?.[0]?.value_text ?? "";
      this.pregnancy.Stillbirths = this.filterObs(observations, "Stillbirths")?.[0]?.value_text ?? "";
      this.pregnancy["Abortions/Miscarriages"] = this.filterObs(observations, "Abortions/Miscarriages")?.[0]?.value_text ?? "";
      console.log("lets seeee", observations);
      this.pregnancy.test = (await this.getConceptValues(this.filterObs(observations, "past pregnancies complications"), "coded"))?.[0];
      this.pregnancy.surgeries = (await this.getConceptValues(this.filterObs(observations, "Does the woman have any past surgeries done?"), "coded"))?.[0];
      this.pregnancy["Other notes"] = this.filterObs(observations, "Other notes")?.[0]?.value_text ?? "";
      this.pregnancy.allergies = (await this.getConceptValues(this.filterObs(observations, "Does the woman have any allergies?"), "coded"))?.[0];
      this.pregnancy.chronic = (await this.getConceptValues(this.filterObs(observations, "chronic conditions"), "coded"))?.[0];
      this.pregnancy.lnmp = (await this.getConceptValues(this.filterObs(observations, "LNMP Known?"), "coded"))?.[0];
      this.pregnancy["Other"] = this.filterObs(observations, "Other notes")?.[0]?.value_text ?? "";
      this.pregnancy.Ultrasound = (await this.getConceptValues(this.filterObs(observations, "Ultrasound done?"), "coded"))?.[0];
      this.pregnancy.Gestation = (await this.getConceptValues(this.filterObs(observations, "Gestation"), "coded"))?.[0];
      this.pregnancy.gestationUsed = (await this.getConceptValues(this.filterObs(observations, "Gestation age to be used"), "coded"))?.[0];
      this.pregnancy.tetanus = (await this.getConceptValues(this.filterObs(observations, "The woman received tetanus doses for immunization?"), "coded"))?.[0];
      this.pregnancy.prescription = (await this.getConceptValues(this.filterObs(observations, "Which medications is the woman currently prescribed?"), "coded"))?.[0];
      this.pregnancy.caffeine = (await this.getConceptValues(this.filterObs(observations, "Daily caffeine use"), "coded"))?.[0];
      this.pregnancy.tobacco = (await this.getConceptValues(this.filterObs(observations, "Recently quit tobacco products"), "coded"))?.[0];
      this.pregnancy.smoke = (await this.getConceptValues(this.filterObs(observations, "Exposure to second hand smoke"), "coded"))?.[0];
    },
    async setTreatmentEncounters(data) {
    },
    async setPresentingComplainsEncounters(data) {
      const observations = this.findEncounter(data, "PRESENTING COMPLAINTS")?.observations;
      this.presentingComplaint = await this.getConceptValues(this.filterObs(observations, "Presenting complaint"), "coded");
    },
    async setLabOrderEncounters(data) {
      const observations = this.findEncounter(data, "LAB ORDERS")?.observations;
      this.labOrders = await this.getConceptValues(this.filterObs(observations, "Primary diagnosis"), "coded");
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    },
    openModal() {
      createModal(InvestigationsModal);
    },
    async setBMI(weight, height) {
      if (this.patient?.personInformation?.gender && this.patient?.personInformation?.birthdate) {
        this.BMI = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          this.patient?.personInformation?.gender,
          HisDate.calculateAge(this.patient?.personInformation?.birthdate, HisDate.sessionDate())
        );
      }
      this.updateBMI();
    },
    async updateBMI() {
      const bmiColor = this.BMI?.color ?? [];
      this.vitalsWeightHeight.icon = BMIService.iconBMI(bmiColor);
      this.vitalsWeightHeight.backgroundColor = bmiColor[0];
      this.vitalsWeightHeight.textColor = bmiColor[1];
      this.vitalsWeightHeight.index = "BMI " + (this.BMI?.index ?? "");
      this.vitalsWeightHeight.value = this.BMI?.result ?? "";
    }
  }
});

const _hoisted_1$1 = { class: "visitContent" };
const _hoisted_2$1 = { class: "visitData" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { style: { "max-width": "1000px" } };
const _hoisted_5 = {
  key: 1,
  class: "noData"
};
const _hoisted_6 = { key: 2 };
const _hoisted_7 = { style: { "max-width": "300px" } };
const _hoisted_8 = { class: "position_content alert_content" };
const _hoisted_9 = { style: { "max-width": "300px" } };
const _hoisted_10 = {
  key: 3,
  class: "noData"
};
const _hoisted_11 = { key: 4 };
const _hoisted_12 = { style: { "display": "flex", "flex-wrap": "wrap" } };
const _hoisted_13 = {
  key: 5,
  class: "noData"
};
const _hoisted_14 = { key: 6 };
const _hoisted_15 = { style: { "display": "flex", "flex-wrap": "wrap" } };
const _hoisted_16 = {
  key: 7,
  class: "noData"
};
const _hoisted_17 = { key: 8 };
const _hoisted_18 = { style: { "display": "flex", "flex-wrap": "wrap" } };
const _hoisted_19 = {
  key: 9,
  class: "noData"
};
const _hoisted_20 = { key: 10 };
const _hoisted_21 = {
  key: 11,
  class: "noData"
};
const _hoisted_22 = { key: 12 };
const _hoisted_23 = {
  key: 13,
  class: "noData"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { size: "3" }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.visits, (date, index) => {
                return openBlock(), createBlock(_component_DynamicButton, {
                  class: "",
                  style: { "margin-bottom": "5px", "width": "96%", "height": "45px" },
                  onClick: ($event) => _ctx.loadSavedEncounters(date),
                  key: index,
                  name: _ctx.covertDate(date),
                  fill: _ctx.visitDate != date ? "outline" : "solid",
                  color: _ctx.visitDate == date ? "success" : ""
                }, null, 8, ["onClick", "name", "fill", "color"]);
              }), 128))
            ])
          ]),
          _: 1
        }),
        createVNode(_component_ion_col, {
          offset: "0.1",
          size: "7"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              Object.values(_ctx.pregnancy).every((value) => value !== "") ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  _cache[25] || (_cache[25] = createBaseVNode("div", { class: "heading" }, "ANC PROFILE", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[0] || (_cache[0] = [
                            createTextVNode("GRAVIDA", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                            createTextVNode("STILLBIRTHS", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode("LIVE BIRTHS", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[3] || (_cache[3] = [
                            createTextVNode("PREGNANCY COMPLICATIONS", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Gravida), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Stillbirths), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy["Abortions/Miscarriages"]), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.test), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[20] || (_cache[20] = createBaseVNode("br", null, null, -1)),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode("PAST SURGERIES", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode("OTHER SURGERIES", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode("ALLERGIES", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[7] || (_cache[7] = [
                            createTextVNode("CHRONIC CONDITIONS", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.surgeries), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy["Other notes"]), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.allergies), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.chronic), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[21] || (_cache[21] = createBaseVNode("br", null, null, -1)),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[8] || (_cache[8] = [
                            createTextVNode("LNMP", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[9] || (_cache[9] = [
                            createTextVNode("LIVE BIRTHS", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[10] || (_cache[10] = [
                            createTextVNode("PARITY", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[11] || (_cache[11] = [
                            createTextVNode("OTHER ALLERGIES", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.lnmp), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.LiveBirths), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Parity), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Other), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[22] || (_cache[22] = createBaseVNode("br", null, null, -1)),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[12] || (_cache[12] = [
                            createTextVNode("ULTRASOUND DONE", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[13] || (_cache[13] = [
                            createTextVNode("GESTATION AGE BY PALPATION", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[14] || (_cache[14] = [
                            createTextVNode("GESTATION USED", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[15] || (_cache[15] = [
                            createTextVNode("TETANUS DOSES", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Ultrasound), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.Gestation), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.gestationUsed), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.tetanus), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[23] || (_cache[23] = createBaseVNode("br", null, null, -1)),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[16] || (_cache[16] = [
                            createTextVNode("MEDICATIONS CURRENTLY PRESCRIBED", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[17] || (_cache[17] = [
                            createTextVNode("DAILY CAFFEINE INTAKE", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[18] || (_cache[18] = [
                            createTextVNode("RECENTLY QUIT TOBACCO PRODUCTS", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[19] || (_cache[19] = [
                            createTextVNode("EXPOSURE TO SECOND HAND SMOKE", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.prescription), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.caffeine), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.tobacco), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.pregnancy.smoke), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _cache[24] || (_cache[24] = createBaseVNode("br", null, null, -1)),
                    createVNode(_component_ion_row),
                    createVNode(_component_ion_row)
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_5, "No Profile data was found")),
              Object.values(_ctx.vitals).every((value) => value !== "") ? (openBlock(), createElementBlock("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  _cache[28] || (_cache[28] = createBaseVNode("div", {
                    class: "heading",
                    style: { "margin-top": "0px" }
                  }, "Anthropometric Measurements", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        _ctx.vitals.weight ? (openBlock(), createBlock(_component_ion_col, {
                          key: 0,
                          class: "contentTitle"
                        }, {
                          default: withCtx(() => [..._cache[26] || (_cache[26] = [
                            createTextVNode("Weight", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true),
                        _ctx.vitals.height ? (openBlock(), createBlock(_component_ion_col, {
                          key: 1,
                          class: "contentTitle"
                        }, {
                          default: withCtx(() => [..._cache[27] || (_cache[27] = [
                            createTextVNode("Height", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        _ctx.vitals.weight ? (openBlock(), createBlock(_component_ion_col, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.weight) + " kg", 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        _ctx.vitals.height ? (openBlock(), createBlock(_component_ion_col, { key: 1 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.height) + " cm", 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    _ctx.vitals.weight && _ctx.vitals.height ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
                      default: withCtx(() => [
                        createBaseVNode("span", null, [
                          _ctx.vitalsWeightHeight.value ? (openBlock(), createBlock(_component_ion_row, {
                            key: 0,
                            style: normalizeStyle(
                              "border-radius: 5px;  margin-top:10px; margin-bottom:10px;background-color:" + _ctx.vitalsWeightHeight.backgroundColor
                            )
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("span", _hoisted_8, [
                                createVNode(_component_ion_icon, {
                                  slot: "start",
                                  icon: _ctx.vitalsWeightHeight.icon,
                                  "aria-hidden": "true"
                                }, null, 8, ["icon"]),
                                createBaseVNode("span", {
                                  style: normalizeStyle("color:" + _ctx.vitalsWeightHeight.textColor + "; font-weight:600; margin: 0px 20px;")
                                }, toDisplayString(_ctx.vitalsWeightHeight.index), 5),
                                createBaseVNode("span", {
                                  style: normalizeStyle("color:" + _ctx.vitalsWeightHeight.textColor + ";")
                                }, toDisplayString(_ctx.vitalsWeightHeight.value), 5)
                              ])
                            ]),
                            _: 1
                          }, 8, ["style"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  _cache[35] || (_cache[35] = createBaseVNode("div", { class: "heading" }, "Vital Signs", -1)),
                  createBaseVNode("div", null, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[29] || (_cache[29] = [
                            createTextVNode("Systolic pressure", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[30] || (_cache[30] = [
                            createTextVNode("Diastolic pressure", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.systolic) + " mmHg", 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.diastolic) + " mmHg", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[31] || (_cache[31] = [
                            createTextVNode("Temperature", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[32] || (_cache[32] = [
                            createTextVNode("Oxygen Saturation", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.temperature) + " C", 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.SAO2) + " %", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[33] || (_cache[33] = [
                            createTextVNode("Pulse Rate", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, { class: "contentTitle" }, {
                          default: withCtx(() => [..._cache[34] || (_cache[34] = [
                            createTextVNode("Respiratory Rate", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.pulse) + " BMP", 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ion_col, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.vitals.respirationRate) + " BMP", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_10, "No Vitals were recorded")),
              _ctx.presentingComplaint?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
                _cache[36] || (_cache[36] = createBaseVNode("div", { class: "heading" }, "Complaints Presented", -1)),
                createBaseVNode("div", _hoisted_12, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presentingComplaint, (complaint, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "spanContent",
                      key: index
                    }, toDisplayString(complaint), 1);
                  }), 128))
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_13, "No complaints were recorded")),
              _ctx.primaryDiagnosis?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
                _cache[37] || (_cache[37] = createBaseVNode("div", { class: "heading" }, "Primary Diagnoses", -1)),
                createBaseVNode("div", _hoisted_15, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.primaryDiagnosis, (diagnosis, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "spanContent",
                      key: index
                    }, toDisplayString(diagnosis), 1);
                  }), 128))
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_16, "No primary diagnoses were recorded")),
              _ctx.secondaryDiagnosis?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                _cache[38] || (_cache[38] = createBaseVNode("div", { class: "heading" }, "Secondary Diagnoses", -1)),
                createBaseVNode("div", _hoisted_18, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.secondaryDiagnosis, (diagnosis, index) => {
                    return openBlock(), createElementBlock("div", {
                      class: "spanContent",
                      key: index
                    }, toDisplayString(diagnosis), 1);
                  }), 128))
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_19, "No secondary diagnoses were recorded")),
              _ctx.drugs ? (openBlock(), createElementBlock("div", _hoisted_20, [..._cache[39] || (_cache[39] = [
                createBaseVNode("div", { class: "heading" }, "Treatment Plan", -1),
                createBaseVNode("div", null, null, -1)
              ])])) : (openBlock(), createElementBlock("div", _hoisted_21, "No Treatment were recorded")),
              _ctx.nextAppointMent ? (openBlock(), createElementBlock("div", _hoisted_22, [..._cache[40] || (_cache[40] = [
                createBaseVNode("span", { class: "heading" }, "Next Appointment:", -1),
                createBaseVNode("span", { class: "nextDate" }, "06 September 2024", -1)
              ])])) : (openBlock(), createElementBlock("div", _hoisted_23, "No next appointment was set"))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const AppointmentsHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-e5840482"]]);

const _sfc_main = defineComponent({
  name: "TB screening",
  components: {
    FeatusModal,
    DynamicButton,
    IonContent,
    IonPage,
    Toolbar,
    DemographicBar,
    LandingPage,
    NextAppointmentModal,
    AppointmentsHistory
  },
  props: {
    backBtn: {
      type: String,
      default: "Back to profile"
    },
    backUrl: {
      type: String,
      default: ""
    },
    contact: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isModalOpen: false,
      visitDate: [],
      appointmentDate: "",
      visits: [],
      dateOfAppointment: ""
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  mounted() {
    this.handleAppointment();
  },
  computed: {
    ...mapState(useScheduleNextAppointmentStore, ["nextAppointmentDate"]),
    ...mapState(useDemographicsStore, ["patient"])
  },
  methods: {
    calendar() {
      return calendar;
    },
    eye() {
      return eye;
    },
    chevronBackOutline() {
      return chevronBackOutline;
    },
    openBackController() {
      this.$router.push("/ANCHome");
    },
    async handleAppointment() {
      const dateOfAppointment = await ObservationService.getFirstObsValue(this.patient.patientID, "Appointment date", "value_text");
      this.dateOfAppointment = dateOfAppointment;
    },
    async updateData() {
      const patient = new PatientService();
      this.visits = await PatientService.getPatientVisits(patient.getID(), false);
      await this.loadSavedEncounters(this.visits[0]);
    },
    async loadSavedEncounters(patientVisitDate) {
      this.visitDate = patientVisitDate;
      const encounters = await EncounterService.getEncounters(this.patient.patientID, { date: patientVisitDate });
      await this.setNextAppointmentEncounter(encounters);
    },
    findEncounter(data, encounterType) {
      return data.find((obj) => obj.type && obj.type.name === encounterType);
    },
    async setNextAppointmentEncounter(data) {
      const observations = this.findEncounter(data, "APPOINTMENT")?.observations;
      console.log("Observations:", observations);
      this.appointmentDate["Appointment date"] = this.filterObs(observations, "Appointment date")?.[0]?.value_text ?? "";
      console.log("Appointment Date:", this.appointmentDate["Appointment date"]);
    },
    filterObs(observations, conceptName) {
      return observations?.filter((obs) => obs.concept.concept_names.some((name) => name.name === conceptName));
    },
    async getConceptValues(filteredObservations, type) {
      if (filteredObservations) {
        return await Promise.all(
          filteredObservations?.map(async (item) => {
            return await ConceptService.getConceptName(item.value_coded);
          })
        );
      }
    }
  }
});

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "back_profile" };
const _hoisted_3 = { class: "AppointmentDate" };
const _hoisted_4 = { style: { "color": "#0b5ed7" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_DemographicBar = resolveComponent("DemographicBar");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_AppointmentsHistory = resolveComponent("AppointmentsHistory");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_DemographicBar),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_DynamicButton, {
                name: "Back to home",
                iconSlot: "start",
                fill: "clear",
                icon: _ctx.chevronBackOutline(),
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openBackController())
              }, null, 8, ["icon"]),
              createBaseVNode("div", _hoisted_3, [
                _cache[1] || (_cache[1] = createBaseVNode("span", { style: { "font-size": "14px" } }, "Next Appt. Date: ", -1)),
                createBaseVNode("b", _hoisted_4, toDisplayString(_ctx.dateOfAppointment || "Not scheduled"), 1)
              ])
            ]),
            createVNode(_component_AppointmentsHistory)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Appointments = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-05c287b4"]]);

export { Appointments as default };
