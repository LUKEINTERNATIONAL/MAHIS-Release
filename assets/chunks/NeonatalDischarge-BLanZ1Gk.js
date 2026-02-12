import { s as defineComponent, a2 as onMounted, y as openBlock, z as createElementBlock, C as createBaseVNode, a4 as normalizeClass, A as createVNode, F as unref, d2 as person, L as IonIcon, D as toDisplayString, a5 as createTextVNode, f as ref, c as computed, h as inject, w as watch, O as createBlock, M as IonSpinner, Q as alertCircleOutline, N as IonButton, B as withCtx, a_ as medkitOutline, J as Fragment, R as renderList, H as createCommentVNode, e$ as chevronUpOutline, a9 as chevronDownOutline, a3 as onUnmounted, aS as medicalOutline, b8 as calendarOutline, bT as trashOutline, bA as createStaticVNode, ab as checkmarkOutline, x as resolveComponent, aG as IonContent, bu as IonPage, aL as useRouter, b1 as printOutline, f0 as provide } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { u as useDemographicsStore, ck as InputField, H as HisDate, P as PatientService, _ as _export_sfc, K as ObservationService, z as StandardForm, bH as DrugOrderService, cl as SearchableDropdown, cm as DateInputField, T as Toolbar, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-PMl5GQCx.js';
import { N as NeonatalService } from './neonatal_service-COEmOVsO.js';
import { D as DemographicBar } from './DemographicBar-Ci63JpJo.js';
import { t as getDischargeSectionByName, v as neonatalDischargeFormKey, w as neonatalDischargeSections, b as neonatalClinicalReviewOutcomesFormKey, N as NeonatalStepper, x as useNeonatalDischargeStore, y as getDischargeSectionIndexByName } from './NeonatalStepper-CDuygvRM.js';
import { u as useClinicalReviewSignOff, n as neonatalClinicalReviewSignOffSections, R as ReportFooter, a as ReportHeader, b as ReportRow, c as ReportSection, N as NeonatalReportService } from './ReportFooter-Ck9MKexg.js';

const _hoisted_1$a = { class: "profile-card" };
const _hoisted_2$7 = { class: "profile-content" };
const _hoisted_3$6 = { class: "avatar-column" };
const _hoisted_4$6 = { class: "details-column" };
const _hoisted_5$4 = { class: "patient-name" };
const _hoisted_6$4 = { class: "bio-line" };
const _hoisted_7$4 = {
  key: 0,
  class: "info-row"
};
const _hoisted_8$3 = { class: "value" };
const _hoisted_9$3 = { class: "info-row" };
const _hoisted_10$2 = { class: "value" };
const _hoisted_11$2 = { class: "mother-name-section" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ProfileInformation",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const admissionDate = ref("");
    const motherName = ref("");
    const genderClass = computed(() => {
      return patient.value?.personInformation?.gender === "M" ? "male-bg" : "female-bg";
    });
    const genderLabel = computed(() => {
      const g = patient.value?.personInformation?.gender;
      return g === "M" ? "Male" : g === "F" ? "Female" : g;
    });
    const ageLabel = computed(() => {
      const dob = patient.value?.personInformation?.birthdate;
      if (!dob) return "";
      return HisDate.calculateDisplayAge(HisDate.toStandardHisFormat(dob));
    });
    const dobLabel = computed(() => {
      const dob = patient.value?.personInformation?.birthdate;
      if (!dob) return "";
      return HisDate.toStandardHisDisplayFormat(dob);
    });
    const motherInputConfig = computed(() => ({
      header: "Mother's Full Name",
      value: motherName.value,
      disabled: true,
      type: "text",
      placeholder: "Searching..."
    }));
    const fetchAdmissionDate = async () => {
      const patientId = patient.value?.patientID;
      if (!patientId) return;
      try {
        const result = await NeonatalService.checkEnrollment(patientId);
        if (result && result.enrollment_data?.date_enrolled) {
          admissionDate.value = HisDate.toStandardHisDisplayFormat(result.enrollment_data.date_enrolled);
        }
      } catch (error) {
        console.error("Failed to fetch admission date", error);
      }
    };
    const fetchMotherName = async () => {
      try {
        const patientService = new PatientService();
        const relationships = await patientService.getGuardian();
        if (relationships && relationships.length > 0) {
          const motherRel = relationships.find((rel) => {
            const type = rel.type?.b_is_to_a || "";
            return type === "Mother" || type === "Parent";
          });
          if (motherRel && motherRel.relation && motherRel.relation.names && motherRel.relation.names.length > 0) {
            const name = motherRel.relation.names[0];
            motherName.value = [name.given_name, name.middle_name, name.family_name].filter(Boolean).join(" ");
          } else {
            motherName.value = "N/A";
          }
        } else {
          motherName.value = "N/A";
        }
      } catch (error) {
        console.error("Failed to fetch mother's name", error);
        motherName.value = "Unknown";
      }
    };
    onMounted(() => {
      fetchAdmissionDate();
      fetchMotherName();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("div", {
              class: normalizeClass(["avatar-box", genderClass.value])
            }, [
              createVNode(unref(IonIcon), {
                icon: unref(person),
                class: "avatar-icon"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_4$6, [
            createBaseVNode("div", _hoisted_5$4, [
              createBaseVNode("div", null, toDisplayString(unref(patient)?.personInformation?.given_name), 1),
              createBaseVNode("div", null, toDisplayString(unref(patient)?.personInformation?.family_name), 1)
            ]),
            createBaseVNode("div", _hoisted_6$4, [
              createTextVNode(toDisplayString(genderLabel.value) + " ", 1),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "bullet" }, "•", -1)),
              createTextVNode(" " + toDisplayString(ageLabel.value) + " ", 1),
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "bullet" }, "•", -1)),
              createTextVNode(" " + toDisplayString(dobLabel.value), 1)
            ]),
            (openBlock(), createElementBlock("div", _hoisted_7$4, [
              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "label" }, "Admission Date:", -1)),
              createBaseVNode("span", _hoisted_8$3, toDisplayString(admissionDate.value), 1)
            ])) ,
            createBaseVNode("div", _hoisted_9$3, [
              _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "MRN:", -1)),
              createBaseVNode("span", _hoisted_10$2, toDisplayString(unref(patient)?.ID), 1)
            ])
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "form-title" }, "DISCHARGE FORM", -1)),
        createBaseVNode("div", _hoisted_11$2, [
          createVNode(InputField, {
            config: motherInputConfig.value,
            allFormValues: {}
          }, null, 8, ["config"])
        ])
      ]);
    };
  }
});

const ProfileInformation = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-cfe6341c"]]);

const _hoisted_1$9 = { class: "vitals-header" };
const _hoisted_2$6 = { class: "info-card" };
const _hoisted_3$5 = { class: "info-row" };
const _hoisted_4$5 = { class: "detail-value status-value" };
const _hoisted_5$3 = { class: "info-row" };
const _hoisted_6$3 = { class: "birth-weight-card" };
const _hoisted_7$3 = { class: "weight-value" };
const _hoisted_8$2 = { class: "weight-date" };
const _hoisted_9$2 = { class: "section-subtitle" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DischargeVitals",
  setup(__props, { expose: __expose }) {
    const sectionConfig = getDischargeSectionByName("Vitals");
    const formRef = ref(null);
    const dischargeForm = inject(neonatalDischargeFormKey);
    const demographicsStore = useDemographicsStore();
    const hivStatus = ref("");
    const birthWeight = ref("");
    const birthDate = ref("");
    onMounted(async () => {
      const patientId = demographicsStore.patient?.patientID;
      if (patientId) {
        try {
          const hivObs = await ObservationService.getFirstObs(patientId, "Mother HIV status");
          if (hivObs) {
            let value = hivObs.value_text;
            if (!value && hivObs.value_coded) {
              value = String(hivObs.value_coded);
            }
            hivStatus.value = value || "Unknown";
          } else {
            hivStatus.value = "Unknown";
          }
          const weightObs = await ObservationService.getFirstObs(patientId, "Birth weight");
          if (weightObs) {
            birthWeight.value = weightObs.value_numeric?.toString() || "";
            if (weightObs.obs_datetime) {
              birthDate.value = HisDate.toStandardHisDisplayFormat(weightObs.obs_datetime);
            }
          }
        } catch (e) {
          console.error("Error fetching vitals details", e);
        }
      }
    });
    const syncFormValues = (values) => {
      if (!dischargeForm) return;
      dischargeForm.weight = values.weight;
      dischargeForm.heartRate = values.heartRate;
      dischargeForm.respiratoryRate = values.respiratoryRate;
      dischargeForm.oxygenSaturation = values.oxygenSaturation;
      dischargeForm.temperature = values.temperature;
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormValues: () => formRef.value?.getFormValues?.() || {},
      validateForm: () => formRef.value?.validateForm?.() || null
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("div", _hoisted_2$6, [
            createBaseVNode("div", _hoisted_3$5, [
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "detail-label" }, "HIV status", -1)),
              createBaseVNode("span", _hoisted_4$5, toDisplayString(hivStatus.value || "Loading..."), 1)
            ]),
            createBaseVNode("div", _hoisted_5$3, [
              _cache[1] || (_cache[1] = createBaseVNode("div", null, [
                createBaseVNode("span", { class: "detail-label" }, "Birth Weight")
              ], -1)),
              createBaseVNode("div", _hoisted_6$3, [
                createBaseVNode("span", _hoisted_7$3, toDisplayString(birthWeight.value ? birthWeight.value + " kg" : "..."), 1),
                createBaseVNode("span", _hoisted_8$2, "Date: " + toDisplayString(birthDate.value || "..."), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_9$2, toDisplayString(unref(sectionConfig).subtitle), 1)
        ]),
        createVNode(StandardForm, {
          formData: unref(sectionConfig).formData,
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const DischargeVitals = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-ba2a9564"]]);

const _hoisted_1$8 = { class: "reconsider-discharge-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ReconsiderDischarge",
  setup(__props, { expose: __expose }) {
    const sectionConfig = getDischargeSectionByName("ReconsiderDischarge");
    const formRef = ref(null);
    const dischargeForm = inject(neonatalDischargeFormKey) || {};
    __expose({
      getFormValues: () => formRef.value?.getFormValues?.() || {},
      validateForm: () => formRef.value?.validateForm?.() || null
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createVNode(StandardForm, {
          formData: unref(sectionConfig).formData,
          subtitle: unref(sectionConfig).subtitle,
          allFormValues: unref(dischargeForm),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData", "subtitle", "allFormValues"])
      ]);
    };
  }
});

const ReconsiderDischarge = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-0151f675"]]);

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DischargeDiagnosis",
  setup(__props, { expose: __expose }) {
    const sectionConfig = getDischargeSectionByName("Diagnosis");
    const formRef = ref(null);
    const dischargeForm = inject(neonatalDischargeFormKey);
    const syncFormValues = (values) => {
      if (!dischargeForm) return;
      dischargeForm.mainDiagnosis = values.mainDiagnosis || null;
      dischargeForm.otherProblems = Array.isArray(values.otherProblems) ? values.otherProblems : [];
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: unref(sectionConfig).formData,
        ref_key: "formRef",
        ref: formRef
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$7 = { class: "past-medications-section" };
const _hoisted_2$5 = {
  key: 0,
  class: "loading-container"
};
const _hoisted_3$4 = {
  key: 1,
  class: "error-container"
};
const _hoisted_4$4 = { class: "error-text" };
const _hoisted_5$2 = {
  key: 2,
  class: "empty-container"
};
const _hoisted_6$2 = {
  key: 3,
  class: "medications-list"
};
const _hoisted_7$2 = { class: "medication-header" };
const _hoisted_8$1 = { class: "medication-name" };
const _hoisted_9$1 = { class: "medication-date" };
const _hoisted_10$1 = { class: "medication-details" };
const _hoisted_11$1 = {
  key: 0,
  class: "detail-item"
};
const _hoisted_12$1 = { class: "detail-value" };
const _hoisted_13$1 = {
  key: 1,
  class: "detail-item"
};
const _hoisted_14$1 = { class: "detail-value" };
const _hoisted_15 = {
  key: 2,
  class: "detail-item"
};
const _hoisted_16 = { class: "detail-value" };
const _hoisted_17 = {
  key: 0,
  class: "show-more-container"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PastMedications",
  props: {
    initialDisplayCount: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const initialDisplayCount = props.initialDisplayCount ?? 3;
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isLoading = ref(false);
    const error = ref(null);
    const medications = ref([]);
    const showAll = ref(false);
    const displayedMedications = computed(() => {
      if (showAll.value) {
        return medications.value;
      }
      return medications.value.slice(0, initialDisplayCount);
    });
    const toggleShowAll = () => {
      showAll.value = !showAll.value;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      } catch {
        return dateString;
      }
    };
    const parseDrugOrders = (orders) => {
      if (!Array.isArray(orders)) return [];
      return orders.map((order) => ({
        drugName: order.drug?.name || order.drug_name || order.name || "Unknown Drug",
        dose: order.dose || order.equivalent_daily_dose,
        units: order.units || order.drug?.units || "",
        frequency: order.frequency || "",
        instructions: order.instructions || "",
        startDate: order.start_date || order.order_date || order.created_at,
        endDate: order.auto_expire_date || order.end_date
      }));
    };
    const fetchMedicationHistory = async () => {
      if (!patient.value?.patientID) {
        error.value = "No patient selected";
        return;
      }
      isLoading.value = true;
      error.value = null;
      try {
        const response = await DrugOrderService.getDrugOrderHistory(patient.value.patientID);
        let orders = [];
        if (Array.isArray(response)) {
          orders = response;
        } else if (response?.drug_orders) {
          orders = response.drug_orders;
        } else if (response?.data) {
          orders = Array.isArray(response.data) ? response.data : [];
        }
        medications.value = parseDrugOrders(orders);
        medications.value.sort((a, b) => {
          const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
          const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
          return dateB - dateA;
        });
      } catch (err) {
        console.error("[PastMedications] Failed to fetch medication history:", err);
        error.value = "Failed to load medication history";
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(() => {
      fetchMedicationHistory();
    });
    __expose({
      refresh: fetchMedicationHistory,
      medications
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "section-header" }, [
          createBaseVNode("h3", { class: "section-title" }, "Medications Given in the Past"),
          createBaseVNode("p", { class: "section-subtitle" }, "Recent medications administered to this patient")
        ], -1)),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          createVNode(unref(IonSpinner), {
            name: "crescent",
            color: "primary"
          }),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "loading-text" }, "Loading medication history...", -1))
        ])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createVNode(unref(IonIcon), {
            icon: unref(alertCircleOutline),
            class: "error-icon"
          }, null, 8, ["icon"]),
          createBaseVNode("span", _hoisted_4$4, toDisplayString(error.value), 1),
          createVNode(unref(IonButton), {
            fill: "clear",
            size: "small",
            onClick: fetchMedicationHistory
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode(" Retry ", -1)
            ])]),
            _: 1
          })
        ])) : medications.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          createVNode(unref(IonIcon), {
            icon: unref(medkitOutline),
            class: "empty-icon"
          }, null, 8, ["icon"]),
          _cache[2] || (_cache[2] = createBaseVNode("span", { class: "empty-text" }, "No past medications found", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_6$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayedMedications.value, (medication, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "medication-card"
            }, [
              createBaseVNode("div", _hoisted_7$2, [
                createBaseVNode("span", _hoisted_8$1, toDisplayString(medication.drugName), 1),
                createBaseVNode("span", _hoisted_9$1, toDisplayString(formatDate(medication.startDate)), 1)
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                medication.dose ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "detail-label" }, "Dose:", -1)),
                  createBaseVNode("span", _hoisted_12$1, toDisplayString(medication.dose) + " " + toDisplayString(medication.units), 1)
                ])) : createCommentVNode("", true),
                medication.frequency ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
                  _cache[4] || (_cache[4] = createBaseVNode("span", { class: "detail-label" }, "Frequency:", -1)),
                  createBaseVNode("span", _hoisted_14$1, toDisplayString(medication.frequency), 1)
                ])) : createCommentVNode("", true),
                medication.instructions ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  _cache[5] || (_cache[5] = createBaseVNode("span", { class: "detail-label" }, "Instructions:", -1)),
                  createBaseVNode("span", _hoisted_16, toDisplayString(medication.instructions), 1)
                ])) : createCommentVNode("", true)
              ])
            ]);
          }), 128)),
          medications.value.length > unref(initialDisplayCount) ? (openBlock(), createElementBlock("div", _hoisted_17, [
            createVNode(unref(IonButton), {
              fill: "clear",
              size: "small",
              onClick: toggleShowAll,
              class: "show-more-btn"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonIcon), {
                  icon: showAll.value ? unref(chevronUpOutline) : unref(chevronDownOutline),
                  slot: "start"
                }, null, 8, ["icon"]),
                createTextVNode(" " + toDisplayString(showAll.value ? "Show Less" : `Show More (${medications.value.length - unref(initialDisplayCount)} more)`), 1)
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});

const PastMedications = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f2f5acf5"]]);

const _hoisted_1$6 = { class: "discharge-medications-wrapper" };
const _hoisted_2$4 = { class: "new-prescriptions-section" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DischargeMedications",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const pastMedicationsRef = ref(null);
    const sectionConfig = neonatalDischargeSections[2];
    const formData = sectionConfig.formData;
    const dischargeForm = inject(neonatalDischargeFormKey);
    const syncFormValues = (values) => {
      if (!dischargeForm) return;
      dischargeForm.medications = values.prescriptions || [];
    };
    const initializeFormFromState = () => {
      if (!formRef.value || !dischargeForm) return;
      const existingValues = formRef.value.getFormValues?.() ?? {};
      if ((dischargeForm.medications?.length ?? 0) && !(existingValues.prescriptions?.length ?? 0)) {
        formRef.value.setFormValue?.("prescriptions", [...dischargeForm.medications || []]);
      }
    };
    watch(
      () => formRef.value?.formValues?.value,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance) {
          initializeFormFromState();
          syncFormValues(instance.getFormValues?.() ?? {});
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {},
      refreshPastMedications: () => pastMedicationsRef.value?.refresh?.()
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(PastMedications, {
          initialDisplayCount: 3,
          ref_key: "pastMedicationsRef",
          ref: pastMedicationsRef
        }, null, 512),
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(StandardForm, {
            formData: unref(formData),
            ref_key: "formRef",
            ref: formRef
          }, null, 8, ["formData"])
        ])
      ]);
    };
  }
});

const DischargeMedications = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5df2fa4a"]]);

const _hoisted_1$5 = { class: "clinic-follow-up-wrapper" };
const _hoisted_2$3 = {
  key: 0,
  class: "saved-appointments"
};
const _hoisted_3$3 = { class: "appointment-header" };
const _hoisted_4$3 = { class: "clinic-info" };
const _hoisted_5$1 = { class: "clinic-name" };
const _hoisted_6$1 = { class: "appointment-date" };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8 = { class: "clinic-type" };
const _hoisted_9 = { class: "add-clinic-section" };
const _hoisted_10 = { class: "form-container" };
const _hoisted_11 = { class: "clinic-label" };
const _hoisted_12 = { class: "form-field" };
const _hoisted_13 = { class: "form-field" };
const _hoisted_14 = ["disabled"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ClinicFollowUp",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const savedAppointments = computed(() => {
      if (!dischargeForm || !dischargeForm.appointments) {
        return [];
      }
      return dischargeForm.appointments;
    });
    const currentClinicNumber = computed(() => {
      return savedAppointments.value.length + 1;
    });
    const currentClinicName = computed(() => {
      return `Clinic ${currentClinicNumber.value}`;
    });
    const clinicTypeOptions = ["Health Center follow up", "Specialist Clinic", "General Outpatient", "Immunization"];
    const dropdownConfig = computed(() => ({
      componentType: "searchableDropdown",
      name: "clinicType",
      header: "Clinic type",
      placeholder: "Select clinic type",
      options: clinicTypeOptions.map((opt) => ({ label: opt, value: opt })),
      mode: "neonatal"
    }));
    const handleClinicTypeChange = (option) => {
      if (option) {
        newAppointment.value.clinicType = option.value;
      } else {
        newAppointment.value.clinicType = "";
      }
    };
    const newAppointment = ref({
      clinicName: "",
      clinicType: "",
      date: ""
    });
    const dateFieldConfig = computed(() => ({
      componentType: "dateInputField",
      name: "clinicDate",
      header: "Clinic date",
      placeholder: "Select date",
      mode: "neonatal",
      minDate: HisDate.currentDate(),
      maxDate: HisDate.add(HisDate.currentDate(), "years", 10).toISOString(),
      initialValue: newAppointment.value.date ? HisDate.toStandardHisDisplayFormat(newAppointment.value.date) : ""
    }));
    const handleDateChange = (formattedDate, rawDate) => {
      if (rawDate) {
        newAppointment.value.date = HisDate.toStandardHisFormat(rawDate);
      } else {
        newAppointment.value.date = "";
      }
    };
    const isFormValid = computed(() => {
      return newAppointment.value.clinicType !== "" && newAppointment.value.date !== "";
    });
    const saveAppointment = () => {
      if (!isFormValid.value || !dischargeForm) {
        return;
      }
      if (!dischargeForm.appointments) {
        dischargeForm.appointments = [];
      }
      dischargeForm.appointments.push({
        clinicName: currentClinicName.value,
        clinicType: newAppointment.value.clinicType,
        date: newAppointment.value.date
      });
      newAppointment.value = {
        clinicName: "",
        clinicType: "",
        date: ""
      };
    };
    const removeAppointment = (index) => {
      if (dischargeForm && dischargeForm.appointments) {
        dischargeForm.appointments.splice(index, 1);
      }
    };
    onMounted(() => {
      if (dischargeForm && dischargeForm.appointments) {
        const uniqueAppts = /* @__PURE__ */ new Map();
        dischargeForm.appointments.forEach((appt) => {
          const key = `${appt.date}-${appt.clinicType}`;
          if (!uniqueAppts.has(key)) {
            uniqueAppts.set(key, appt);
          }
        });
        if (uniqueAppts.size !== dischargeForm.appointments.length) {
          dischargeForm.appointments = Array.from(uniqueAppts.values());
        }
      }
    });
    onUnmounted(() => {
    });
    const validateForm = () => {
      return null;
    };
    __expose({
      validateForm,
      getFormValues: () => ({})
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "info-banner" }, "You can assign clinic days for the baby.", -1)),
        savedAppointments.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "section-title" }, "Saved Appointments", -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(savedAppointments.value, (appt, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "appointment-item"
            }, [
              createBaseVNode("div", _hoisted_3$3, [
                createBaseVNode("div", _hoisted_4$3, [
                  createVNode(unref(IonIcon), {
                    icon: unref(medicalOutline),
                    class: "clinic-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("span", _hoisted_5$1, toDisplayString(appt.clinicName), 1)
                ]),
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("span", null, toDisplayString(unref(HisDate).toStandardHisDisplayFormat(appt.date)), 1),
                  createVNode(unref(IonIcon), {
                    icon: unref(calendarOutline),
                    class: "calendar-icon"
                  }, null, 8, ["icon"]),
                  createBaseVNode("button", {
                    class: "delete-button",
                    onClick: ($event) => removeAppointment(index),
                    title: "Remove appointment"
                  }, [
                    createVNode(unref(IonIcon), { icon: unref(trashOutline) }, null, 8, ["icon"])
                  ], 8, _hoisted_7$1)
                ])
              ]),
              createBaseVNode("div", _hoisted_8, toDisplayString(appt.clinicType), 1)
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_9, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "section-title" }, "Add a clinic day", -1)),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createVNode(unref(IonIcon), {
                icon: unref(medicalOutline),
                class: "label-icon"
              }, null, 8, ["icon"]),
              createBaseVNode("span", null, toDisplayString(currentClinicName.value), 1)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(SearchableDropdown, {
                config: dropdownConfig.value,
                allFormValues: {},
                "onUpdate:value": handleClinicTypeChange
              }, null, 8, ["config"])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createVNode(DateInputField, {
                config: dateFieldConfig.value,
                allFormValues: {},
                "onUpdate:rawValue": _cache[0] || (_cache[0] = (date) => handleDateChange("", date))
              }, null, 8, ["config"])
            ]),
            createBaseVNode("button", {
              onClick: saveAppointment,
              disabled: !isFormValid.value,
              class: "save-button",
              type: "button"
            }, "save appointment", 8, _hoisted_14)
          ])
        ])
      ]);
    };
  }
});

const ClinicFollowUp = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7a273dd8"]]);

const _hoisted_1$4 = { class: "health-education-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HealthEducation",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const sectionConfig = getDischargeSectionByName("HealthEducation");
    const formData = sectionConfig.formData;
    const dischargeForm = inject(neonatalDischargeFormKey);
    const syncFormValues = (values) => {
      if (!dischargeForm) return;
      dischargeForm.healthEducationGiven = values.healthEducationGiven || "";
      dischargeForm.insecticideTreatedNetGiven = values.insecticideTreatedNetGiven || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => formRef.value?.validateForm?.() || null,
      getFormValues: () => formRef.value?.getFormValues?.() || {}
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[0] || (_cache[0] = createStaticVNode('<div class="info-banner" data-v-c9b9e453>Please educate the mother on the following:</div><div class="education-section" data-v-c9b9e453><h3 class="section-title" data-v-c9b9e453>1. Danger Signs</h3><ul class="education-list" data-v-c9b9e453><li data-v-c9b9e453>Jaundice</li><li data-v-c9b9e453>Convulsions</li><li data-v-c9b9e453>Not able to breast feed</li><li data-v-c9b9e453>Difficulties in breathing</li><li data-v-c9b9e453>Lethargic</li><li data-v-c9b9e453>Fever</li><li data-v-c9b9e453>Hypothermia</li><li data-v-c9b9e453>Abdominal distention</li><li data-v-c9b9e453>Bleeding from the cord and what to do if any</li></ul></div><div class="education-section" data-v-c9b9e453><h3 class="section-title" data-v-c9b9e453>1. GENERAL EDUCATION</h3><ul class="education-list" data-v-c9b9e453><li data-v-c9b9e453>Immunization</li><li data-v-c9b9e453>Family planning</li><li data-v-c9b9e453>Hygiene</li><li data-v-c9b9e453>Keeping baby warm</li><li data-v-c9b9e453>Malaria Prevention</li></ul></div>', 3)),
        createVNode(StandardForm, {
          formData: unref(formData),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])
      ]);
    };
  }
});

const HealthEducation = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c9b9e453"]]);

const _hoisted_1$3 = { class: "discharge-outcome-wrapper" };
const _hoisted_2$2 = { class: "outcome-list padding" };
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = { class: "option-text" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DischargeOutcome",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const outcomeOptions = [
      "Discharged",
      "Death (at LESS than 24 hours of age)",
      "Death (at MORE than 24 hours of age)",
      "Died during Admission",
      "Absconded",
      "Transferred to another ward",
      "Transferred to another hospital",
      "Discharged on request",
      "Discharged on palliative care",
      "Brought in dead - BID",
      "Stillbirth"
    ];
    const selectedOutcome = ref("");
    if (dischargeForm) {
      selectedOutcome.value = dischargeForm.outcome || "";
    }
    const selectOutcome = (option) => {
      selectedOutcome.value = option;
    };
    watch(selectedOutcome, (newValue) => {
      if (dischargeForm) {
        dischargeForm.outcome = newValue;
      }
    });
    const validateForm = () => {
      if (!selectedOutcome.value) {
        return { outcome: "Please select an outcome" };
      }
      return null;
    };
    __expose({
      validateForm,
      getFormValues: () => ({
        outcome: selectedOutcome.value
      })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "question-banner" }, "What happened to the baby?", -1)),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "select-label padding" }, "Select one", -1)),
        createBaseVNode("div", _hoisted_2$2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(outcomeOptions, (option) => {
            return createBaseVNode("div", {
              key: option,
              class: normalizeClass(["outcome-option", { selected: selectedOutcome.value === option }]),
              onClick: ($event) => selectOutcome(option)
            }, [
              createBaseVNode("span", _hoisted_4$2, toDisplayString(option), 1),
              selectedOutcome.value === option ? (openBlock(), createBlock(unref(IonIcon), {
                key: 0,
                icon: unref(checkmarkOutline),
                class: "check-icon"
              }, null, 8, ["icon"])) : createCommentVNode("", true)
            ], 10, _hoisted_3$2);
          }), 64))
        ])
      ]);
    };
  }
});

const DischargeOutcome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-da5e6123"]]);

const _hoisted_1$2 = { class: "signoff-wrapper" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SignOff",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const clinicalReviewOutcomesForm = inject(neonatalClinicalReviewOutcomesFormKey, null);
    const dischargeForm = inject(neonatalDischargeFormKey, null);
    const activeContext = computed(() => {
      if (dischargeForm) {
        return {
          form: dischargeForm,
          config: getDischargeSectionByName("SignOff")
          // Discharge Sign-Off section
        };
      }
      return {
        form: clinicalReviewOutcomesForm,
        config: neonatalClinicalReviewSignOffSections[0]
      };
    });
    const formData = computed(() => activeContext.value.config?.formData || []);
    const subtitle = computed(() => activeContext.value.config?.subtitle || "");
    useClinicalReviewSignOff(formRef);
    const syncFormValues = (values) => {
      const targetForm = activeContext.value.form;
      if (!targetForm) return;
      targetForm.healthcareWorkerId = values.healthcareWorkerId || "";
      targetForm.electronicSignature = values.electronicSignature || "";
      targetForm.userRole = values.userRole || "";
      targetForm.signOffDate = values.signOffDate || "";
    };
    watch(
      () => formRef.value?.formValues,
      (values) => {
        if (values) {
          syncFormValues(values);
        }
      },
      { deep: true }
    );
    watch(
      () => formRef.value,
      (instance) => {
        if (instance?.getFormValues) {
          syncFormValues(instance.getFormValues());
        }
      },
      { immediate: true }
    );
    __expose({
      getFormRef: () => formRef.value,
      validateForm: () => {
        return formRef.value?.validateForm?.() || null;
      },
      getFormValues: () => {
        return formRef.value?.getFormValues?.() || {};
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(StandardForm, {
          formData: formData.value,
          subtitle: subtitle.value,
          ref_key: "formRef",
          ref: formRef,
          class: "main-form"
        }, null, 8, ["formData", "subtitle"])
      ]);
    };
  }
});

const SignOff = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-70b142cd"]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DischargeSummary",
  setup(__props, { expose: __expose }) {
    const dischargeForm = inject(neonatalDischargeFormKey);
    const formData = computed(() => {
      if (!dischargeForm) return [];
      return [
        {
          componentType: "summaryField",
          name: "dischargeSummary",
          builder: () => {
            const rows = [];
            if (dischargeForm.weight) rows.push({ label: "Weight", value: `${dischargeForm.weight} g`, section: "Vitals" });
            if (dischargeForm.heartRate) rows.push({ label: "Heart Rate", value: `${dischargeForm.heartRate} bpm`, section: "Vitals" });
            if (dischargeForm.respiratoryRate)
              rows.push({ label: "Respiratory Rate", value: `${dischargeForm.respiratoryRate} bpm`, section: "Vitals" });
            if (dischargeForm.oxygenSaturation)
              rows.push({ label: "Oxygen Saturation", value: `${dischargeForm.oxygenSaturation} %`, section: "Vitals" });
            if (dischargeForm.temperature) rows.push({ label: "Temperature", value: `${dischargeForm.temperature} °C`, section: "Vitals" });
            const mainDiag = typeof dischargeForm.mainDiagnosis === "object" && dischargeForm.mainDiagnosis !== null ? dischargeForm.mainDiagnosis.label || dischargeForm.mainDiagnosis.value : dischargeForm.mainDiagnosis;
            if (mainDiag) rows.push({ label: "Main Diagnosis", value: String(mainDiag), section: "Diagnosis" });
            if (dischargeForm.otherProblems && dischargeForm.otherProblems.length) {
              const problems = dischargeForm.otherProblems.map((p) => typeof p === "object" ? p.label || p.value : p).join(", ");
              rows.push({ label: "Other Problems", value: problems, section: "Diagnosis" });
            }
            if (dischargeForm.medications && dischargeForm.medications.length) {
              dischargeForm.medications.forEach((med) => {
                rows.push({
                  label: med.name,
                  value: `${med.frequency || ""} ${med.dosage || ""}`,
                  section: "Medications"
                });
              });
            } else {
              rows.push({ label: "Medications", value: "None", section: "Medications" });
            }
            if (dischargeForm.appointments && dischargeForm.appointments.length) {
              dischargeForm.appointments.forEach((appt) => {
                rows.push({
                  label: appt.clinicType,
                  value: appt.date,
                  detail: appt.clinicName,
                  section: "Clinic Follow-up"
                });
              });
            } else {
              rows.push({ label: "Follow Up", value: "None", section: "Clinic Follow-up" });
            }
            if (dischargeForm.outcome) rows.push({ label: "Outcome", value: dischargeForm.outcome, section: "Outcome" });
            if (dischargeForm.healthcareWorkerId)
              rows.push({ label: "Healthcare Worker ID", value: dischargeForm.healthcareWorkerId, section: "Sign Off" });
            if (dischargeForm.electronicSignature)
              rows.push({ label: "Signature", value: dischargeForm.electronicSignature, section: "Sign Off" });
            if (dischargeForm.userRole) rows.push({ label: "Role", value: dischargeForm.userRole, section: "Sign Off" });
            if (dischargeForm.signOffDate) rows.push({ label: "Date", value: dischargeForm.signOffDate, section: "Sign Off" });
            return rows;
          }
        }
      ];
    });
    __expose({
      getFormValues: () => ({})
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: formData.value,
        ref: "formRef"
      }, null, 8, ["formData"]);
    };
  }
});

const _sfc_main$1 = defineComponent({
  name: "DischargeReport",
  components: {
    IonSpinner,
    ReportSection,
    ReportRow,
    ReportHeader,
    ReportFooter
  },
  props: {
    patientId: {
      type: [Number, String],
      required: true
    }
  },
  setup(props) {
    const reportData = ref(null);
    const generatedDate = ref((/* @__PURE__ */ new Date()).toLocaleString());
    const loadData = async () => {
      if (!props.patientId) return;
      try {
        reportData.value = await NeonatalReportService.getDischargeReportData(props.patientId);
      } catch (error) {
        console.error("Failed to load report data", error);
      }
    };
    onMounted(loadData);
    watch(() => props.patientId, loadData);
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "N/A";
      if (Array.isArray(value)) return value.length ? value.join(", ") : "N/A";
      const s = String(value).trim();
      return s ? s : "N/A";
    };
    const formatDate = (dateString) => {
      const raw = String(dateString ?? "").trim();
      if (!raw || raw.toUpperCase() === "N/A") return "N/A";
      const d = new Date(raw);
      if (!Number.isFinite(d.getTime())) return "N/A";
      return d.toLocaleDateString();
    };
    const formatDiagnosis = (diag) => {
      if (!diag) return "-";
      return typeof diag === "string" ? diag : diag.label || diag.value || "-";
    };
    return {
      reportData,
      generatedDate,
      formatValue,
      formatDate,
      formatDiagnosis
    };
  }
});

const _hoisted_1$1 = { class: "report-view" };
const _hoisted_2$1 = { class: "report-paper" };
const _hoisted_3$1 = { class: "report-body" };
const _hoisted_4$1 = { class: "column" };
const _hoisted_5 = { class: "column" };
const _hoisted_6 = {
  key: 1,
  class: "loading-state"
};
const _hoisted_7 = { class: "spinner-container" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ReportHeader = resolveComponent("ReportHeader");
  const _component_ReportRow = resolveComponent("ReportRow");
  const _component_ReportSection = resolveComponent("ReportSection");
  const _component_ReportFooter = resolveComponent("ReportFooter");
  const _component_ion_spinner = resolveComponent("ion-spinner");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _ctx.reportData ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_component_ReportHeader, {
          facilityName: _ctx.reportData.facility.name,
          reportTitle: "Neonatal · Clinical Review Report",
          patientName: _ctx.reportData.patientInfo.fullName,
          npid: _ctx.reportData.patientInfo.npid,
          dob: _ctx.reportData.patientInfo.dob
        }, null, 8, ["facilityName", "patientName", "npid", "dob"]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_ReportSection, { title: "Discharge Vitals" }, {
              default: withCtx(() => [
                createVNode(_component_ReportRow, {
                  label: "Weight (g)",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.weight)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Heart Rate",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.heartRate)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Resp Rate",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.respiratoryRate)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Oxygen Sat",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.oxygenSaturation)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Temperature",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.temperature)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_ReportSection, { title: "Discharge Diagnoses" }, {
              default: withCtx(() => [
                createVNode(_component_ReportRow, {
                  label: "Main Diagnosis",
                  value: _ctx.formatDiagnosis(_ctx.reportData.dischargeData.mainDiagnosis)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Other Problems",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.otherProblems)
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(_component_ReportSection, { title: "Outcome" }, {
              default: withCtx(() => [
                createVNode(_component_ReportRow, {
                  label: "Discharge Outcome",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.outcome)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Education Given",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.healthEducationGiven)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "ITN Given",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.insecticideTreatedNetGiven)
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_ReportSection, { title: "Medications" }, {
              default: withCtx(() => [
                _ctx.reportData.dischargeData.medications && _ctx.reportData.dischargeData.medications.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.reportData.dischargeData.medications, (med, index) => {
                  return openBlock(), createBlock(_component_ReportRow, {
                    key: index,
                    label: med.name,
                    value: _ctx.formatValue(`${med.frequency || ""} ${med.dosage || ""}`.trim())
                  }, null, 8, ["label", "value"]);
                }), 128)) : (openBlock(), createBlock(_component_ReportRow, {
                  key: 1,
                  label: "None",
                  value: "-"
                }))
              ]),
              _: 1
            }),
            createVNode(_component_ReportSection, { title: "Clinic Follow-up" }, {
              default: withCtx(() => [
                _ctx.reportData.dischargeData.appointments && _ctx.reportData.dischargeData.appointments.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.reportData.dischargeData.appointments, (appt, index) => {
                  return openBlock(), createBlock(_component_ReportRow, {
                    key: index,
                    label: appt.clinicType,
                    value: `${_ctx.formatDate(appt.date)} (${appt.clinicName})`
                  }, null, 8, ["label", "value"]);
                }), 128)) : _ctx.reportData.dischargeData.clinicFollowUp ? (openBlock(), createBlock(_component_ReportRow, {
                  key: 1,
                  label: "Follow-up",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.clinicFollowUp)
                }, null, 8, ["value"])) : (openBlock(), createBlock(_component_ReportRow, {
                  key: 2,
                  label: "None",
                  value: "-"
                }))
              ]),
              _: 1
            }),
            createVNode(_component_ReportSection, { title: "Sign-off" }, {
              default: withCtx(() => [
                createVNode(_component_ReportRow, {
                  label: "Healthcare Worker",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.healthcareWorkerId)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Role/Cadre",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.userRole)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Signature",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.electronicSignature)
                }, null, 8, ["value"]),
                createVNode(_component_ReportRow, {
                  label: "Date",
                  value: _ctx.formatValue(_ctx.reportData.dischargeData.signOffDate)
                }, null, 8, ["value"])
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(_component_ReportFooter, {
          generatedDate: _ctx.generatedDate,
          facilityInfo: _ctx.reportData.facility.info
        }, null, 8, ["generatedDate", "facilityInfo"])
      ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_ion_spinner, { name: "crescent" })
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, [
          createBaseVNode("h3", null, "Generating Report"),
          createBaseVNode("p", null, "Please wait while we gather patient data...")
        ], -1))
      ]))
    ])
  ]);
}
const DischargeReport = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-003e11f6"]]);

const _sfc_main = defineComponent({
  name: "NeonatalDischarge",
  components: {
    IonPage,
    IonContent,
    IonButton,
    Toolbar,
    DemographicBar,
    ProfileInformation,
    NeonatalStepper,
    DischargeVitals,
    ReconsiderDischarge,
    DischargeDiagnosis: _sfc_main$9,
    DischargeMedications,
    ClinicFollowUp,
    HealthEducation,
    DischargeOutcome,
    SignOff,
    DischargeSummary: _sfc_main$2,
    DischargeReport,
    IonIcon,
    IonSpinner
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const dischargeStore = useNeonatalDischargeStore();
    const isSaving = ref(false);
    const showPrintReport = ref(false);
    const printableContainer = ref(null);
    const normalizePatientId = (rawId) => {
      const parsed = Number(rawId);
      return Number.isFinite(parsed) ? parsed : null;
    };
    const syncDischargeForm = () => {
      const patientId = normalizePatientId(patient.value?.patientID);
      dischargeStore.initializeDischargeForm(patientId);
    };
    syncDischargeForm();
    watch(
      () => patient.value?.patientID,
      () => syncDischargeForm()
    );
    const dischargeFormData = dischargeStore.dischargeForm;
    provide(neonatalDischargeFormKey, dischargeFormData);
    watch(
      () => dischargeStore.dischargeForm,
      () => dischargeStore.saveDischargeSnapshot(),
      { deep: true }
    );
    const wizardData = ref(
      neonatalDischargeSections.map((section, index) => ({
        title: section.title,
        number: index + 1,
        checked: false,
        class: index === 0 ? "open_step common_step" : "common_step",
        last_step: index === neonatalDischargeSections.length - 1 ? "last_step" : ""
      }))
    );
    const stepperData = [
      {
        title: getDischargeSectionByName("Vitals")?.title,
        value: "1",
        component: DischargeVitals,
        configIndex: getDischargeSectionIndexByName("Vitals")
      },
      {
        title: getDischargeSectionByName("ReconsiderDischarge")?.title,
        value: "2",
        component: ReconsiderDischarge,
        configIndex: getDischargeSectionIndexByName("ReconsiderDischarge")
      },
      {
        title: getDischargeSectionByName("Diagnosis")?.title,
        value: "3",
        component: _sfc_main$9,
        configIndex: getDischargeSectionIndexByName("Diagnosis")
      },
      {
        title: getDischargeSectionByName("Medications")?.title,
        value: "4",
        component: DischargeMedications,
        configIndex: getDischargeSectionIndexByName("Medications")
      },
      {
        title: getDischargeSectionByName("Outcome")?.title,
        value: "5",
        component: DischargeOutcome,
        configIndex: getDischargeSectionIndexByName("Outcome")
      },
      {
        title: getDischargeSectionByName("ClinicFollowUp")?.title,
        value: "6",
        component: ClinicFollowUp,
        configIndex: getDischargeSectionIndexByName("ClinicFollowUp")
      },
      {
        title: getDischargeSectionByName("HealthEducation")?.title,
        value: "7",
        component: HealthEducation,
        configIndex: getDischargeSectionIndexByName("HealthEducation")
      },
      {
        title: getDischargeSectionByName("SignOff")?.title,
        value: "8",
        component: SignOff,
        configIndex: getDischargeSectionIndexByName("SignOff")
      },
      {
        title: getDischargeSectionByName("Report")?.title,
        value: "9",
        component: _sfc_main$2,
        configIndex: getDischargeSectionIndexByName("Report")
      }
    ];
    const updateStatus = (event) => {
      if (event && event.value) {
        wizardData.value.forEach((item, index) => {
          if (event.value === (index + 1).toString()) {
            item.class = "open_step common_step";
            item.checked = false;
          } else if (index < parseInt(event.value) - 1) {
            item.class = "common_step color_white";
            item.checked = true;
          } else {
            item.class = "common_step";
            item.checked = false;
          }
        });
      }
    };
    const finishDischarge = () => {
      router.push({ name: "patientProfile" });
    };
    const handlePrintReport = async () => {
      if (patient.value?.patientID) {
        await NeonatalReportService.generateDischargeReport(patient.value.patientID, printableContainer.value || void 0);
      }
    };
    const getSaveFunction = (currentIndex) => {
      const summaryIndex = getDischargeSectionIndexByName("Report");
      if (currentIndex === summaryIndex) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          if (isSaving.value) {
            return;
          }
          try {
            isSaving.value = true;
            if (!dischargeFormData.mainDiagnosis) {
              toastWarning("Please select a discharge diagnosis");
              isSaving.value = false;
              return;
            }
            if (!dischargeFormData.outcome) {
              toastWarning("Please select a discharge outcome");
              isSaving.value = false;
              return;
            }
            await NeonatalService.dischargeNeonate(patient.value.patientID, dischargeFormData, HisDate.sessionDate());
            dischargeFormData.submitted = true;
            dischargeStore.saveDischargeSnapshot();
            toastSuccess("Neonate discharged successfully");
            isSaving.value = false;
            showPrintReport.value = true;
          } catch (error) {
            console.error("Neonatal discharge failed", error);
            toastDanger("Failed to discharge neonate. Please try again.");
            isSaving.value = false;
            throw error;
          }
        };
      }
      return null;
    };
    return {
      router,
      patient,
      dischargeFormData,
      stepperTitle: "Neonatal Discharge",
      currentOpenStepper: "1",
      wizardData,
      stepperData,
      updateStatus,
      getSaveFunction,
      isSaving,
      neonatalDischargeSections,
      showPrintReport,
      finishDischarge,
      handlePrintReport,
      printOutline,
      printableContainer
    };
  }
});

const _hoisted_1 = {
  key: 2,
  class: "print-report-wrapper"
};
const _hoisted_2 = { class: "actions-header" };
const _hoisted_3 = { class: "action-buttons" };
const _hoisted_4 = {
  class: "printable-container",
  ref: "printableContainer"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ProfileInformation = resolveComponent("ProfileInformation");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_DischargeReport = resolveComponent("DischargeReport");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-discharge-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          !_ctx.showPrintReport ? (openBlock(), createBlock(_component_ProfileInformation, { key: 0 })) : createCommentVNode("", true),
          !_ctx.showPrintReport ? (openBlock(), createBlock(_component_NeonatalStepper, {
            key: 1,
            wizardData: _ctx.wizardData,
            StepperData: _ctx.stepperData,
            stepperTitle: _ctx.stepperTitle,
            openStepper: _ctx.currentOpenStepper,
            backUrl: "/patient-profile",
            getSaveFunction: _ctx.getSaveFunction,
            flowType: "discharge",
            headerStyle: "discharge-header",
            onUpdateStatus: _ctx.updateStatus
          }, null, 8, ["wizardData", "StepperData", "stepperTitle", "openStepper", "getSaveFunction", "onUpdateStatus"])) : (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "page-title" }, "Discharge completed successfully.", -1)),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_ion_button, {
                  onClick: _ctx.finishDischarge,
                  fill: "outline",
                  color: "dark"
                }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode(" Return to Profile ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_ion_button, {
                  color: "success",
                  class: "print-btn",
                  onClick: _ctx.handlePrintReport
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_icon, {
                      icon: _ctx.printOutline,
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[1] || (_cache[1] = createTextVNode(" Print Report ", -1))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            createBaseVNode("div", _hoisted_4, [
              _ctx.patient?.patientID ? (openBlock(), createBlock(_component_DischargeReport, {
                key: 0,
                patientId: _ctx.patient.patientID
              }, null, 8, ["patientId"])) : createCommentVNode("", true)
            ], 512)
          ]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalDischarge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fbd3d490"]]);

export { NeonatalDischarge as default };
