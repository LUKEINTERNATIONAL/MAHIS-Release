import { s as defineComponent, a2 as onMounted, y as openBlock, z as createElementBlock, C as createBaseVNode, a4 as normalizeClass, A as createVNode, F as unref, d3 as person, L as IonIcon, D as toDisplayString, a5 as createTextVNode, f as ref, c as computed, h as inject, w as watch, O as createBlock, M as IonSpinner, Q as alertCircleOutline, N as IonButton, B as withCtx, a_ as medkitOutline, J as Fragment, R as renderList, H as createCommentVNode, eS as chevronUpOutline, a9 as chevronDownOutline, a3 as onUnmounted, aS as medicalOutline, b8 as calendarOutline, bU as trashOutline, bB as createStaticVNode, ab as checkmarkOutline, ck as onBeforeUnmount, S as withDirectives, T as vShow, cA as E, bF as QRCode, cB as autoTable, aG as IonContent, bu as IonPage, aL as useRouter, b1 as printOutline, eT as provide, x as resolveComponent } from './vendor-D7CYpxMc.js';
import { s as storeToRefs } from './pinia-L6vL2rFe.js';
import { u as useDemographicsStore, ci as InputField, H as HisDate, P as PatientService, _ as _export_sfc, K as ObservationService, z as StandardForm, bH as DrugOrderService, cj as SearchableDropdown, ck as DateInputField, a6 as useUserStore, T as Toolbar, t as toastWarning, G as toastSuccess, x as toastDanger } from '../index-DB91Rv2f.js';
import { N as NeonatalService } from './neonatal_service-CAOXAVsi.js';
import { D as DemographicBar } from './DemographicBar-Cjpp3ybj.js';
import { i as getDischargeSectionByName, j as neonatalDischargeFormKey, k as neonatalDischargeSections, l as neonatalAdmissionOutcomesFormKey, m as useNeonatalDischargeStore, N as NeonatalStepper, o as getDischargeSectionIndexByName } from './NeonatalStepper-DxjwTHNX.js';
import { u as useAdmissionSignOff, n as neonatalAdmissionSignOffSections } from './useAdmissionSignOff-BNeJV16G.js';

const _hoisted_1$a = { class: "profile-card" };
const _hoisted_2$7 = { class: "profile-content" };
const _hoisted_3$6 = { class: "avatar-column" };
const _hoisted_4$6 = { class: "details-column" };
const _hoisted_5$5 = { class: "patient-name" };
const _hoisted_6$4 = { class: "bio-line" };
const _hoisted_7$4 = {
  key: 0,
  class: "info-row"
};
const _hoisted_8$4 = { class: "value" };
const _hoisted_9$4 = { class: "info-row" };
const _hoisted_10$3 = { class: "value" };
const _hoisted_11$3 = { class: "mother-name-section" };
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
            createBaseVNode("div", _hoisted_5$5, [
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
              createBaseVNode("span", _hoisted_8$4, toDisplayString(admissionDate.value), 1)
            ])) ,
            createBaseVNode("div", _hoisted_9$4, [
              _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "MRN:", -1)),
              createBaseVNode("span", _hoisted_10$3, toDisplayString(unref(patient)?.ID), 1)
            ])
          ])
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "form-title" }, "DISCHARGE FORM", -1)),
        createBaseVNode("div", _hoisted_11$3, [
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
const _hoisted_5$4 = { class: "info-row" };
const _hoisted_6$3 = { class: "birth-weight-card" };
const _hoisted_7$3 = { class: "weight-value" };
const _hoisted_8$3 = { class: "weight-date" };
const _hoisted_9$3 = { class: "section-subtitle" };
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
            createBaseVNode("div", _hoisted_5$4, [
              _cache[1] || (_cache[1] = createBaseVNode("div", null, [
                createBaseVNode("span", { class: "detail-label" }, "Birth Weight")
              ], -1)),
              createBaseVNode("div", _hoisted_6$3, [
                createBaseVNode("span", _hoisted_7$3, toDisplayString(birthWeight.value ? birthWeight.value + " kg" : "..."), 1),
                createBaseVNode("span", _hoisted_8$3, "Date: " + toDisplayString(birthDate.value || "..."), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_9$3, toDisplayString(unref(sectionConfig).subtitle), 1)
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
const _hoisted_5$3 = {
  key: 2,
  class: "empty-container"
};
const _hoisted_6$2 = {
  key: 3,
  class: "medications-list"
};
const _hoisted_7$2 = { class: "medication-header" };
const _hoisted_8$2 = { class: "medication-name" };
const _hoisted_9$2 = { class: "medication-date" };
const _hoisted_10$2 = { class: "medication-details" };
const _hoisted_11$2 = {
  key: 0,
  class: "detail-item"
};
const _hoisted_12$2 = { class: "detail-value" };
const _hoisted_13$2 = {
  key: 1,
  class: "detail-item"
};
const _hoisted_14$2 = { class: "detail-value" };
const _hoisted_15$1 = {
  key: 2,
  class: "detail-item"
};
const _hoisted_16$1 = { class: "detail-value" };
const _hoisted_17$1 = {
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
        ])) : medications.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
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
                createBaseVNode("span", _hoisted_8$2, toDisplayString(medication.drugName), 1),
                createBaseVNode("span", _hoisted_9$2, toDisplayString(formatDate(medication.startDate)), 1)
              ]),
              createBaseVNode("div", _hoisted_10$2, [
                medication.dose ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "detail-label" }, "Dose:", -1)),
                  createBaseVNode("span", _hoisted_12$2, toDisplayString(medication.dose) + " " + toDisplayString(medication.units), 1)
                ])) : createCommentVNode("", true),
                medication.frequency ? (openBlock(), createElementBlock("div", _hoisted_13$2, [
                  _cache[4] || (_cache[4] = createBaseVNode("span", { class: "detail-label" }, "Frequency:", -1)),
                  createBaseVNode("span", _hoisted_14$2, toDisplayString(medication.frequency), 1)
                ])) : createCommentVNode("", true),
                medication.instructions ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
                  _cache[5] || (_cache[5] = createBaseVNode("span", { class: "detail-label" }, "Instructions:", -1)),
                  createBaseVNode("span", _hoisted_16$1, toDisplayString(medication.instructions), 1)
                ])) : createCommentVNode("", true)
              ])
            ]);
          }), 128)),
          medications.value.length > unref(initialDisplayCount) ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
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
const _hoisted_5$2 = { class: "clinic-name" };
const _hoisted_6$1 = { class: "appointment-date" };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8$1 = { class: "clinic-type" };
const _hoisted_9$1 = { class: "add-clinic-section" };
const _hoisted_10$1 = { class: "form-container" };
const _hoisted_11$1 = { class: "clinic-label" };
const _hoisted_12$1 = { class: "form-field" };
const _hoisted_13$1 = { class: "form-field" };
const _hoisted_14$1 = ["disabled"];
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
                  createBaseVNode("span", _hoisted_5$2, toDisplayString(appt.clinicName), 1)
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
              createBaseVNode("div", _hoisted_8$1, toDisplayString(appt.clinicType), 1)
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_9$1, [
          _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "section-title" }, "Add a clinic day", -1)),
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("div", _hoisted_11$1, [
              createVNode(unref(IonIcon), {
                icon: unref(medicalOutline),
                class: "label-icon"
              }, null, 8, ["icon"]),
              createBaseVNode("span", null, toDisplayString(currentClinicName.value), 1)
            ]),
            createBaseVNode("div", _hoisted_12$1, [
              createVNode(SearchableDropdown, {
                config: dropdownConfig.value,
                allFormValues: {},
                "onUpdate:value": handleClinicTypeChange
              }, null, 8, ["config"])
            ]),
            createBaseVNode("div", _hoisted_13$1, [
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
            }, "save appointment", 8, _hoisted_14$1)
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
    const admissionOutcomesForm = inject(neonatalAdmissionOutcomesFormKey, null);
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
        form: admissionOutcomesForm,
        config: neonatalAdmissionSignOffSections[0]
        // Admission Sign-Off section
      };
    });
    const formData = computed(() => activeContext.value.config?.formData || []);
    const subtitle = computed(() => activeContext.value.config?.subtitle || "");
    useAdmissionSignOff(formRef);
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

const SignOff = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f8c16536"]]);

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

const _hoisted_1$1 = { class: "page-header" };
const _hoisted_2$1 = { class: "logo-container" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = { class: "header-meta" };
const _hoisted_5$1 = { class: "facility-name" };
const _hoisted_6 = { class: "facility-details" };
const _hoisted_7 = { class: "patient-meta" };
const _hoisted_8 = {
  key: 0,
  class: "barcode-container"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = { class: "npid-text" };
const _hoisted_11 = { class: "print-page" };
const _hoisted_12 = { class: "print-column" };
const _hoisted_13 = { class: "print-section" };
const _hoisted_14 = { class: "field-row" };
const _hoisted_15 = { class: "field-row" };
const _hoisted_16 = { class: "field-row" };
const _hoisted_17 = { class: "field-row" };
const _hoisted_18 = { class: "field-row" };
const _hoisted_19 = { class: "print-section" };
const _hoisted_20 = { class: "field-row" };
const _hoisted_21 = { class: "highlight" };
const _hoisted_22 = {
  key: 0,
  class: "field-row"
};
const _hoisted_23 = { class: "print-section" };
const _hoisted_24 = { class: "field-row" };
const _hoisted_25 = { class: "highlight" };
const _hoisted_26 = { class: "print-section" };
const _hoisted_27 = { class: "field-row" };
const _hoisted_28 = { class: "field-row" };
const _hoisted_29 = { class: "print-column" };
const _hoisted_30 = { class: "print-section" };
const _hoisted_31 = {
  key: 1,
  class: "field-row"
};
const _hoisted_32 = { class: "print-section" };
const _hoisted_33 = {
  key: 1,
  class: "field-row"
};
const _hoisted_34 = { class: "print-section" };
const _hoisted_35 = { class: "field-row" };
const _hoisted_36 = { class: "field-row" };
const _hoisted_37 = { class: "field-row" };
const _hoisted_38 = { class: "field-row" };
const _hoisted_39 = { class: "print-footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PrintableDischargeForm",
  props: {
    forceShow: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const dischargeStore = useNeonatalDischargeStore();
    const userStore = useUserStore();
    const shouldShowPrintPreview = ref(false);
    const qrDataUrl = ref("");
    const neotreeLogoUrl = new URL(""+new URL('../neotree.4QnvY_lU.png', import.meta.url).href+"", import.meta.url).href;
    const appLogoUrl = `${"./"}mw.png`;
    const imageCache = /* @__PURE__ */ new Map();
    const appLogoSrc = appLogoUrl;
    const loadImageDataUrl = async (src) => {
      if (!src) return null;
      if (imageCache.has(src)) return imageCache.get(src);
      return await new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              resolve(null);
              return;
            }
            ctx.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL("image/png");
            imageCache.set(src, dataUrl);
            resolve(dataUrl);
          } catch (e) {
            console.warn("Image toDataURL failed", e);
            resolve(null);
          }
        };
        img.onerror = () => resolve(null);
        img.src = src;
      });
    };
    const patientFullName = computed(() => {
      const person = patient.value?.personInformation;
      if (!person) return "N/A";
      return `${person.given_name || ""} ${person.family_name || ""}`.trim() || "N/A";
    });
    const patientNPID = computed(() => {
      return patient.value?.nationalId || patient.value?.patientID || "N/A";
    });
    const patientDOB = computed(() => {
      return patient.value?.personInformation?.birthdate || "N/A";
    });
    const dischargeData = computed(() => {
      return dischargeStore.dischargeForm || {};
    });
    const facilityName = computed(() => {
      return userStore.userFacilityName || localStorage.getItem("facilityName") || "Healthcare Facility";
    });
    const facilityCode = computed(() => {
      return userStore.facilityLocation?.code || localStorage.getItem("facility_code") || "-";
    });
    const facilityDistrict = computed(() => {
      return userStore.facilityLocation?.district || localStorage.getItem("locationDistrict") || "-";
    });
    const facilityInfo = computed(() => {
      const parts = [facilityName.value];
      if (facilityDistrict.value && facilityDistrict.value !== "-") {
        parts.push(facilityDistrict.value);
      }
      if (facilityCode.value && facilityCode.value !== "-") {
        parts.push(`Code: ${facilityCode.value}`);
      }
      return parts.join(" · ");
    });
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "-";
      if (Array.isArray(value)) return value.length ? value.join(", ") : "-";
      return String(value);
    };
    const formatDiagnosis = (diag) => {
      if (!diag) return "-";
      return typeof diag === "string" ? diag : diag.label || diag.value || "-";
    };
    const formatDiagnosisArray = (diags) => {
      if (!diags || !diags.length) return "-";
      return diags.map((d) => typeof d === "string" ? d : d.label || d.value).join(", ");
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      return new Date(dateString).toLocaleDateString();
    };
    const exportPdf = async () => {
      const [neotreeLogo, appLogo] = await Promise.all([loadImageDataUrl(neotreeLogoUrl), loadImageDataUrl(appLogoUrl)]);
      const doc = new E({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 28;
      const columnGap = 14;
      const columnWidth = (pageWidth - margin * 2 - columnGap) / 2;
      const leftX = margin;
      const rightX = margin + columnWidth + columnGap;
      const logoSize = 52;
      const coatSize = 52;
      const barcodeWidth = 100;
      const barcodeHeight = 100;
      let leftY;
      let rightY;
      let cursorY = margin + 8;
      let textStartX = margin;
      if (neotreeLogo) {
        doc.addImage(neotreeLogo, "PNG", margin, margin, logoSize, logoSize);
        textStartX = margin + logoSize + 10;
      }
      if (appLogo) {
        const coatX = textStartX;
        doc.addImage(appLogo, "PNG", coatX, margin, coatSize, coatSize);
        textStartX = coatX + coatSize + 10;
      }
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(String(facilityName.value || "Facility"), textStartX, cursorY);
      cursorY += 18;
      doc.text("Neotree Malawi · Neonatal Discharge Form", textStartX, cursorY);
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      cursorY += 16;
      const headerLines = [
        `Patient: ${formatValue(patientFullName.value)}`,
        `NPID: ${formatValue(patientNPID.value)}`,
        `DOB: ${formatValue(patientDOB.value)}`
      ];
      headerLines.forEach((line) => {
        doc.text(line, textStartX, cursorY);
        cursorY += 14;
      });
      const barcodeValue = formatValue(patientNPID.value);
      let barcodeBottom = margin;
      if (barcodeValue && barcodeValue !== "-") {
        try {
          const qrPng = await QRCode.toDataURL(barcodeValue, { width: barcodeWidth, margin: 1 });
          const barcodeX = pageWidth - margin - barcodeWidth;
          const barcodeY = margin;
          doc.addImage(qrPng, "PNG", barcodeX, barcodeY, barcodeWidth, barcodeHeight);
          barcodeBottom = barcodeY + barcodeHeight;
        } catch (e) {
          console.warn("QR generation failed", e);
        }
      }
      const tablesStartY = Math.max(cursorY, barcodeBottom + 6) + 12;
      leftY = tablesStartY;
      rightY = tablesStartY;
      const renderSection = (title, rows, column) => {
        const startX = column === "left" ? leftX : rightX;
        const targetY = column === "left" ? leftY : rightY;
        autoTable(doc, {
          startY: targetY,
          margin: { left: startX, right: pageWidth - startX - columnWidth },
          tableWidth: columnWidth,
          head: [[title, ""]],
          body: rows.map(([label, value]) => [label, formatValue(value)]),
          theme: "grid",
          styles: { fontSize: 9, cellPadding: 3 },
          headStyles: { fillColor: [232, 232, 232], textColor: 20, fontStyle: "bold" },
          columnStyles: {
            0: { cellWidth: columnWidth * 0.48 },
            1: { cellWidth: columnWidth * 0.52, halign: "right" }
          }
        });
        const finalY = doc.lastAutoTable.finalY || targetY;
        if (column === "left") leftY = finalY + 10;
        else rightY = finalY + 10;
      };
      renderSection(
        "Discharge Vitals",
        [
          ["Weight (g)", dischargeData.value.weight],
          ["Heart Rate", dischargeData.value.heartRate],
          ["Resp Rate", dischargeData.value.respiratoryRate],
          ["Oxygen Sat", dischargeData.value.oxygenSaturation],
          ["Temperature", dischargeData.value.temperature]
        ],
        "left"
      );
      renderSection(
        "Discharge Diagnoses",
        [
          ["Main Diagnosis", formatDiagnosis(dischargeData.value.mainDiagnosis)],
          ["Other Problems", formatDiagnosisArray(dischargeData.value.otherProblems)]
        ],
        "left"
      );
      renderSection(
        "Outcome",
        [
          ["Discharge Outcome", dischargeData.value.outcome],
          ["Education Given", dischargeData.value.healthEducationGiven],
          ["ITN Given", dischargeData.value.insecticideTreatedNetGiven]
        ],
        "left"
      );
      const medRows = dischargeData.value.medications?.map((m) => [
        m.name,
        `${m.frequency || ""} ${m.dosage || ""}`
      ]) || [["None", "-"]];
      renderSection("Medications", medRows, "right");
      const apptRows = dischargeData.value.appointments?.map((a) => [
        a.clinicType,
        `${formatDate(a.date)} (${a.clinicName})`
      ]) || [["None", "-"]];
      renderSection("Clinic Follow-up", apptRows, "right");
      renderSection(
        "Sign-off",
        [
          ["Healthcare Worker", dischargeData.value.healthcareWorkerId],
          ["Role/Cadre", dischargeData.value.userRole],
          ["Signature", dischargeData.value.electronicSignature],
          ["Date", dischargeData.value.signOffDate]
        ],
        "right"
      );
      const pageCount = doc.getNumberOfPages();
      const generatedText = `Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        const footerY = pageHeight - 16;
        doc.text(generatedText, margin, footerY, { align: "left" });
        doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, footerY, { align: "right" });
      }
      const filename = `discharge-summary-${patientNPID.value || "patient"}.pdf`;
      doc.save(filename);
    };
    const generateQr = async () => {
      const value = formatValue(patientNPID.value);
      if (!value || value === "-") {
        qrDataUrl.value = "";
        return;
      }
      try {
        qrDataUrl.value = await QRCode.toDataURL(value, { width: 140, margin: 1 });
      } catch (error) {
        console.error("Error generating QR:", error);
        qrDataUrl.value = "";
      }
    };
    const handleBeforePrint = () => {
      shouldShowPrintPreview.value = true;
      setTimeout(generateQr, 50);
    };
    const handleAfterPrint = () => {
      shouldShowPrintPreview.value = false;
    };
    onMounted(async () => {
      window.addEventListener("beforeprint", handleBeforePrint);
      window.addEventListener("afterprint", handleAfterPrint);
      const patientId = patient.value?.patientID;
      if (patientId) {
        dischargeStore.initializeDischargeForm(Number(patientId));
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    });
    watch([patientNPID, shouldShowPrintPreview], () => {
      if (shouldShowPrintPreview.value) {
        setTimeout(generateQr, 50);
      }
    });
    __expose({
      showPreview: () => {
        shouldShowPrintPreview.value = true;
        setTimeout(generateQr, 50);
      },
      hidePreview: () => {
        shouldShowPrintPreview.value = false;
      },
      exportPdf
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["printable-discharge-form", { "preview-mode": __props.forceShow, "print-mode": !__props.forceShow }])
      }, [
        createBaseVNode("header", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("img", {
              src: unref(appLogoSrc),
              alt: "Coat of arms",
              class: "header-logo app-logo"
            }, null, 8, _hoisted_3$1)
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, toDisplayString(facilityName.value), 1),
            createBaseVNode("div", _hoisted_6, toDisplayString(facilityDistrict.value) + " · Code: " + toDisplayString(facilityCode.value), 1),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "form-title" }, "Neotree Malawi · Neonatal Discharge Form", -1)),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("span", null, "Patient: " + toDisplayString(patientFullName.value), 1),
              createBaseVNode("span", null, "NPID: " + toDisplayString(patientNPID.value), 1),
              createBaseVNode("span", null, "DOB: " + toDisplayString(patientDOB.value), 1)
            ])
          ]),
          !__props.forceShow ? (openBlock(), createElementBlock("div", _hoisted_8, [
            qrDataUrl.value ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: qrDataUrl.value,
              class: "qr-img",
              alt: "Patient QR"
            }, null, 8, _hoisted_9)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_10, toDisplayString(patientNPID.value), 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("section", _hoisted_13, [
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "section-title" }, "Discharge Vitals", -1)),
              createBaseVNode("div", _hoisted_14, [
                _cache[1] || (_cache[1] = createBaseVNode("span", null, "Weight (g)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.weight)), 1)
              ]),
              createBaseVNode("div", _hoisted_15, [
                _cache[2] || (_cache[2] = createBaseVNode("span", null, "Heart Rate (bpm)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.heartRate)), 1)
              ]),
              createBaseVNode("div", _hoisted_16, [
                _cache[3] || (_cache[3] = createBaseVNode("span", null, "Respiratory Rate (bpm)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.respiratoryRate)), 1)
              ]),
              createBaseVNode("div", _hoisted_17, [
                _cache[4] || (_cache[4] = createBaseVNode("span", null, "Oxygen Saturation (%)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.oxygenSaturation)), 1)
              ]),
              createBaseVNode("div", _hoisted_18, [
                _cache[5] || (_cache[5] = createBaseVNode("span", null, "Temperature (°C)", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.temperature)), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_19, [
              _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "section-title" }, "Discharge Diagnoses", -1)),
              createBaseVNode("div", _hoisted_20, [
                _cache[7] || (_cache[7] = createBaseVNode("span", null, "Main Diagnosis", -1)),
                createBaseVNode("span", _hoisted_21, toDisplayString(formatDiagnosis(dischargeData.value.mainDiagnosis)), 1)
              ]),
              dischargeData.value.otherProblems && dischargeData.value.otherProblems.length ? (openBlock(), createElementBlock("div", _hoisted_22, [
                _cache[8] || (_cache[8] = createBaseVNode("span", null, "Other Problems", -1)),
                createBaseVNode("span", null, toDisplayString(formatDiagnosisArray(dischargeData.value.otherProblems)), 1)
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_23, [
              _cache[11] || (_cache[11] = createBaseVNode("h3", { class: "section-title" }, "Outcome", -1)),
              createBaseVNode("div", _hoisted_24, [
                _cache[10] || (_cache[10] = createBaseVNode("span", null, "Discharge Outcome", -1)),
                createBaseVNode("span", _hoisted_25, toDisplayString(formatValue(dischargeData.value.outcome)), 1)
              ])
            ]),
            createBaseVNode("section", _hoisted_26, [
              _cache[14] || (_cache[14] = createBaseVNode("h3", { class: "section-title" }, "Health Education", -1)),
              createBaseVNode("div", _hoisted_27, [
                _cache[12] || (_cache[12] = createBaseVNode("span", null, "Education Given", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.healthEducationGiven)), 1)
              ]),
              createBaseVNode("div", _hoisted_28, [
                _cache[13] || (_cache[13] = createBaseVNode("span", null, "ITN Given", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.insecticideTreatedNetGiven)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("section", _hoisted_30, [
              _cache[16] || (_cache[16] = createBaseVNode("h3", { class: "section-title" }, "Medications", -1)),
              dischargeData.value.medications && dischargeData.value.medications.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(dischargeData.value.medications, (med, idx) => {
                return openBlock(), createElementBlock("div", {
                  key: idx,
                  class: "field-row"
                }, [
                  createBaseVNode("span", null, toDisplayString(med.name), 1),
                  createBaseVNode("span", null, toDisplayString(med.frequency) + " " + toDisplayString(med.dosage), 1)
                ]);
              }), 128)) : (openBlock(), createElementBlock("div", _hoisted_31, [..._cache[15] || (_cache[15] = [
                createBaseVNode("span", null, "None", -1),
                createBaseVNode("span", null, "-", -1)
              ])]))
            ]),
            createBaseVNode("section", _hoisted_32, [
              _cache[18] || (_cache[18] = createBaseVNode("h3", { class: "section-title" }, "Clinic Follow-up", -1)),
              dischargeData.value.appointments && dischargeData.value.appointments.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(dischargeData.value.appointments, (appt, idx) => {
                return openBlock(), createElementBlock("div", {
                  key: idx,
                  class: "field-row"
                }, [
                  createBaseVNode("span", null, toDisplayString(appt.clinicType), 1),
                  createBaseVNode("span", null, [
                    createTextVNode(toDisplayString(formatDate(appt.date)) + " ", 1),
                    createBaseVNode("small", null, "(" + toDisplayString(appt.clinicName) + ")", 1)
                  ])
                ]);
              }), 128)) : (openBlock(), createElementBlock("div", _hoisted_33, [..._cache[17] || (_cache[17] = [
                createBaseVNode("span", null, "None", -1),
                createBaseVNode("span", null, "-", -1)
              ])]))
            ]),
            createBaseVNode("section", _hoisted_34, [
              _cache[23] || (_cache[23] = createBaseVNode("h3", { class: "section-title" }, "Sign-off", -1)),
              createBaseVNode("div", _hoisted_35, [
                _cache[19] || (_cache[19] = createBaseVNode("span", null, "Healthcare Worker", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.healthcareWorkerId)), 1)
              ]),
              createBaseVNode("div", _hoisted_36, [
                _cache[20] || (_cache[20] = createBaseVNode("span", null, "Role/Cadre", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.userRole)), 1)
              ]),
              createBaseVNode("div", _hoisted_37, [
                _cache[21] || (_cache[21] = createBaseVNode("span", null, "Signature", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.electronicSignature)), 1)
              ]),
              createBaseVNode("div", _hoisted_38, [
                _cache[22] || (_cache[22] = createBaseVNode("span", null, "Date", -1)),
                createBaseVNode("span", null, toDisplayString(formatValue(dischargeData.value.signOffDate)), 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_39, [
          createBaseVNode("span", null, "Generated: " + toDisplayString((/* @__PURE__ */ new Date()).toLocaleString()), 1),
          createBaseVNode("span", null, toDisplayString(facilityInfo.value), 1)
        ])
      ], 2)), [
        [vShow, __props.forceShow || shouldShowPrintPreview.value]
      ]);
    };
  }
});

const PrintableDischargeForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6389eb76"]]);

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
    PrintableDischargeForm,
    IonIcon
  },
  setup() {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const isDischarging = ref(false);
    const showPrintSummary = ref(false);
    const dischargeStore = useNeonatalDischargeStore();
    const printableFormRef = ref(null);
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
        title: getDischargeSectionByName("Summary")?.title,
        value: "9",
        component: _sfc_main$2,
        configIndex: getDischargeSectionIndexByName("Summary")
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
      dischargeStore.clearDischargeForm(patient.value.patientID);
      router.push("/patient-profile");
    };
    const handlePrintSummary = async () => {
      if (printableFormRef.value?.exportPdf) {
        await printableFormRef.value.exportPdf();
      }
    };
    const getSaveFunction = (currentIndex) => {
      const summaryIndex = getDischargeSectionIndexByName("Summary");
      if (currentIndex === summaryIndex) {
        return async () => {
          if (!patient.value?.patientID) {
            toastWarning("No patient selected");
            return;
          }
          if (isDischarging.value) {
            return;
          }
          try {
            isDischarging.value = true;
            if (!dischargeFormData.mainDiagnosis) {
              toastWarning("Please select a discharge diagnosis");
              isDischarging.value = false;
              return;
            }
            if (!dischargeFormData.outcome) {
              toastWarning("Please select a discharge outcome");
              isDischarging.value = false;
              return;
            }
            await NeonatalService.dischargeNeonate(patient.value.patientID, dischargeFormData, HisDate.sessionDate());
            dischargeFormData.submitted = true;
            dischargeStore.saveDischargeSnapshot();
            toastSuccess("Neonate discharged successfully");
            isDischarging.value = false;
            showPrintSummary.value = true;
          } catch (error) {
            console.error("Neonatal discharge failed", error);
            toastDanger("Failed to discharge neonate. Please try again.");
            isDischarging.value = false;
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
      isDischarging,
      showPrintSummary,
      finishDischarge,
      printableFormRef,
      handlePrintSummary,
      printOutline
    };
  }
});

const _hoisted_1 = {
  key: 2,
  class: "print-summary-wrapper"
};
const _hoisted_2 = { class: "actions-header" };
const _hoisted_3 = { class: "action-buttons" };
const _hoisted_4 = { class: "printable-container" };
const _hoisted_5 = { class: "paper-view" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_ProfileInformation = resolveComponent("ProfileInformation");
  const _component_NeonatalStepper = resolveComponent("NeonatalStepper");
  const _component_ion_button = resolveComponent("ion-button");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_PrintableDischargeForm = resolveComponent("PrintableDischargeForm");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, { class: "neonatal-discharge-page" }, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          !_ctx.showPrintSummary ? (openBlock(), createBlock(_component_ProfileInformation, { key: 0 })) : createCommentVNode("", true),
          !_ctx.showPrintSummary ? (openBlock(), createBlock(_component_NeonatalStepper, {
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
                  onClick: _ctx.handlePrintSummary
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ion_icon, {
                      icon: _ctx.printOutline,
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[1] || (_cache[1] = createTextVNode(" Print Summary ", -1))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_PrintableDischargeForm, {
                  ref: "printableFormRef",
                  forceShow: true
                }, null, 512)
              ])
            ])
          ]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const NeonatalDischarge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3a2f078"]]);

export { NeonatalDischarge as default };
