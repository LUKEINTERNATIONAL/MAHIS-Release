import { s as defineComponent, w as watch, a3 as onMounted, a4 as onUnmounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, P as normalizeStyle, a5 as createTextVNode, D as toDisplayString, F as unref, z as createElementBlock, H as createCommentVNode, A as createVNode, er as scaleOutline, L as IonIcon, es as resizeOutline, et as thermometerOutline, aW as heartOutline, eu as waterOutline, bs as pulseOutline, ev as bodyOutline, T as withDirectives, U as vShow, e1 as ellipsisVerticalSharp, f as ref, c as computed, n as nextTick } from './vendor-BRtiyW5a.js';
import { s as storeToRefs } from './pinia-BGmPTYET.js';
import { u as useDemographicsStore, a as useProgramStore, H as HisDate, ar as ConceptService, K as ObservationService, P as PatientService, S as Service, W as ProgramId, b7 as BMIService, _ as _export_sfc } from '../index-Cyrcyymo.js';

const _hoisted_1 = { class: "slider-wrapper" };
const _hoisted_2 = { class: "bar-item demographics-item" };
const _hoisted_3 = {
  key: 0,
  class: "bar-item demographics-item"
};
const _hoisted_4 = { class: "bar-item demographics-item" };
const _hoisted_5 = { class: "bar-item demographics-item" };
const _hoisted_6 = { class: "bar-item demographics-item" };
const _hoisted_7 = {
  key: 1,
  class: "bar-item vitals-item"
};
const _hoisted_8 = {
  key: 2,
  class: "bar-item vitals-item"
};
const _hoisted_9 = {
  key: 3,
  class: "bar-item vitals-item"
};
const _hoisted_10 = {
  key: 4,
  class: "bar-item vitals-item"
};
const _hoisted_11 = {
  key: 5,
  class: "bar-item vitals-item"
};
const _hoisted_12 = {
  key: 6,
  class: "bar-item vitals-item"
};
const _hoisted_13 = {
  key: 7,
  class: "bar-item vitals-item"
};
const _hoisted_14 = {
  key: 0,
  class: "navigation-arrows"
};
const _hoisted_15 = ["disabled"];
const _hoisted_16 = ["disabled"];
const _hoisted_17 = {
  key: 1,
  class: "scroll-indicator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemographicBar",
  emits: ["openPopover"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const demographicsStore = useDemographicsStore();
    const programStore = useProgramStore();
    const { patient } = storeToRefs(demographicsStore);
    const { activeProgram } = storeToRefs(programStore);
    const vitalsData = ref({});
    const BMI = ref("");
    const bloodGlucose = ref();
    const currentScrollPosition = ref(0);
    const containerRef = ref(null);
    const scrollProgress = ref(0);
    const isAtStart = ref(true);
    const isAtEnd = ref(false);
    const showNavigation = ref(false);
    const slideContainerStyle = computed(() => ({
      transform: `translateX(-${currentScrollPosition.value}px)`,
      transition: "transform 0.3s ease-in-out"
    }));
    const isNeonatalProgram = () => {
      const programId = activeProgram.value?.program_id ?? activeProgram.value?.program?.program_id ?? activeProgram.value?.id;
      const programName = (activeProgram.value?.name ?? activeProgram.value?.program?.name ?? "").toString().trim().toUpperCase();
      const currentProgramId = Service.getProgramID?.();
      return programId === ProgramId.NEONATAL_PROGRAM || programName === "NEONATAL PROGRAM" || currentProgramId === ProgramId.NEONATAL_PROGRAM;
    };
    const getAge = () => {
      const birthdate = patient.value?.personInformation?.birthdate;
      if (!birthdate) return "";
      const ageYears = HisDate.calculateAge(birthdate, HisDate.sessionDate());
      if (isNeonatalProgram() && ageYears < 1) {
        try {
          const formattedBirthdate = HisDate.toStandardHisFormat(birthdate);
          const displayAge = HisDate.calculateDisplayAge(formattedBirthdate);
          if (displayAge === "0 days") {
            const birthDate = new Date(birthdate);
            const now = /* @__PURE__ */ new Date();
            const diffMs = now.getTime() - birthDate.getTime();
            const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
            if (diffHours < 1) {
              const diffMinutes = Math.floor(diffMs / (1e3 * 60));
              return diffMinutes <= 0 ? "Just born" : `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""}`;
            }
            return `${diffHours} hour${diffHours !== 1 ? "s" : ""}`;
          }
          return displayAge;
        } catch (error) {
          console.warn("[DemographicBar] Error calculating neonatal age:", error);
          return "0 days";
        }
      }
      return `${ageYears} yrs`;
    };
    const getGender = () => {
      const gender = patient.value?.personInformation?.gender;
      if (!gender) return "";
      if (typeof gender === "string") return gender;
      return gender?.value || "";
    };
    const setBMI = async (weight, height) => {
      if (!weight || !height) return;
      if (patient?.value.personInformation?.gender && patient?.value.personInformation?.birthdate) {
        const data = await BMIService.getBMI(
          parseInt(weight),
          parseInt(height),
          patient?.value.personInformation?.gender,
          HisDate.calculateAge(patient?.value.personInformation?.birthdate, HisDate.sessionDate())
        );
        BMI.value = data?.index;
      }
    };
    const updateVitalsData = async () => {
      try {
        const height = await ConceptService.getConceptID("Height (cm)");
        const weight = await ConceptService.getConceptID("Weight (kg)");
        const systolic = await ConceptService.getConceptID("Systolic blood pressure");
        const diastolic = await ConceptService.getConceptID("Diastolic blood pressure");
        const temperature = await ConceptService.getConceptID("Temperature (c)");
        const pulse = await ConceptService.getConceptID("Pulse");
        const vitals = await ObservationService.getLatestObsByEncounterIdAndConcepts(6, [height, weight, systolic, diastolic, temperature, pulse]);
        vitalsData.value = {
          weight: null,
          height: null,
          temperature: null,
          pulse: null,
          diastolic: null,
          systolic: null
        };
        vitals.forEach((item) => {
          if (item.concept_id === height) {
            vitalsData.value.height = item.value_numeric;
          } else if (item.concept_id === weight) {
            vitalsData.value.weight = item.value_numeric;
          } else if (item.concept_id === systolic) {
            vitalsData.value.systolic = item.value_numeric;
          } else if (item.concept_id === diastolic) {
            vitalsData.value.diastolic = item.value_numeric;
          } else if (item.concept_id === temperature) {
            vitalsData.value.temperature = item.value_numeric;
          } else if (item.concept_id === pulse) {
            vitalsData.value.pulse = item.value_numeric;
          }
        });
        bloodGlucose.value = new PatientService().getBloodGlucose(patient.value);
        await setBMI(vitalsData.value.weight, vitalsData.value.height);
        await nextTick();
        checkOverflow();
      } catch (error) {
        console.error("DemographicBar - Error loading vitals:", error);
      }
    };
    const checkOverflow = () => {
      if (!containerRef.value) return;
      const wrapper = containerRef.value.querySelector(".slider-wrapper");
      const list = containerRef.value.querySelector(".second_bar_list");
      if (wrapper && list) {
        const wrapperWidth = wrapper.clientWidth;
        const listWidth = list.scrollWidth;
        showNavigation.value = listWidth > wrapperWidth;
        updateScrollState();
      }
    };
    const updateScrollState = () => {
      if (!containerRef.value) return;
      const wrapper = containerRef.value.querySelector(".slider-wrapper");
      const list = containerRef.value.querySelector(".second_bar_list");
      if (wrapper && list) {
        const wrapperWidth = wrapper.clientWidth;
        const listWidth = list.scrollWidth;
        const maxScroll = listWidth - wrapperWidth;
        isAtStart.value = currentScrollPosition.value <= 0;
        isAtEnd.value = currentScrollPosition.value >= maxScroll;
        if (maxScroll > 0) {
          scrollProgress.value = currentScrollPosition.value / maxScroll * 100;
        } else {
          scrollProgress.value = 0;
        }
      }
    };
    const scrollLeft = () => {
      if (!containerRef.value) return;
      const wrapper = containerRef.value.querySelector(".slider-wrapper");
      const scrollAmount = wrapper.clientWidth * 0.7;
      currentScrollPosition.value = Math.max(0, currentScrollPosition.value - scrollAmount);
      updateScrollState();
    };
    const scrollRight = () => {
      if (!containerRef.value) return;
      const wrapper = containerRef.value.querySelector(".slider-wrapper");
      const list = containerRef.value.querySelector(".second_bar_list");
      const scrollAmount = wrapper.clientWidth * 0.7;
      const maxScroll = list.scrollWidth - wrapper.clientWidth;
      currentScrollPosition.value = Math.min(maxScroll, currentScrollPosition.value + scrollAmount);
      updateScrollState();
    };
    const handleResize = () => {
      checkOverflow();
      updateScrollState();
    };
    watch(
      () => patient,
      async () => {
        await updateVitalsData();
      },
      { deep: true }
    );
    onMounted(async () => {
      await updateVitalsData();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _cache) => {
      const _component_ion_card = resolveComponent("ion-card");
      return openBlock(), createBlock(_component_ion_card, {
        class: "second_bar",
        style: { "display": "flex" }
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "containerRef",
            ref: containerRef,
            style: { "width": "97%", "overflow": "hidden", "position": "relative" }
          }, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("ul", {
                class: "second_bar_list",
                style: normalizeStyle(slideContainerStyle.value)
              }, [
                createBaseVNode("li", _hoisted_2, [
                  _cache[1] || (_cache[1] = createTextVNode(" Fullname: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.personInformation?.given_name) + " " + toDisplayString(unref(patient)?.personInformation?.middle_name) + " " + toDisplayString(unref(patient)?.personInformation?.family_name), 1)
                ]),
                unref(patient)?.NcdID ? (openBlock(), createElementBlock("li", _hoisted_3, [
                  _cache[2] || (_cache[2] = createTextVNode(" NCDNumber: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.NcdID), 1)
                ])) : createCommentVNode("", true),
                createBaseVNode("li", _hoisted_4, [
                  _cache[3] || (_cache[3] = createTextVNode(" MRN: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.ID), 1)
                ]),
                createBaseVNode("li", _hoisted_5, [
                  _cache[4] || (_cache[4] = createTextVNode(" Age: ", -1)),
                  createBaseVNode("b", null, toDisplayString(getAge()), 1)
                ]),
                createBaseVNode("li", _hoisted_6, [
                  _cache[5] || (_cache[5] = createTextVNode(" Gender: ", -1)),
                  createBaseVNode("b", null, toDisplayString(getGender()), 1)
                ]),
                vitalsData.value?.weight ? (openBlock(), createElementBlock("li", _hoisted_7, [
                  createVNode(unref(IonIcon), {
                    icon: unref(scaleOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[7] || (_cache[7] = createTextVNode(" Weight: ", -1)),
                  createBaseVNode("b", null, [
                    createTextVNode(toDisplayString(vitalsData.value?.weight) + " ", 1),
                    _cache[6] || (_cache[6] = createBaseVNode("span", { class: "unit" }, "kg", -1))
                  ])
                ])) : createCommentVNode("", true),
                vitalsData.value?.height ? (openBlock(), createElementBlock("li", _hoisted_8, [
                  createVNode(unref(IonIcon), {
                    icon: unref(resizeOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[9] || (_cache[9] = createTextVNode(" Height: ", -1)),
                  createBaseVNode("b", null, [
                    createTextVNode(toDisplayString(vitalsData.value?.height) + " ", 1),
                    _cache[8] || (_cache[8] = createBaseVNode("span", { class: "unit" }, "cm", -1))
                  ])
                ])) : createCommentVNode("", true),
                vitalsData.value?.temperature ? (openBlock(), createElementBlock("li", _hoisted_9, [
                  createVNode(unref(IonIcon), {
                    icon: unref(thermometerOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[11] || (_cache[11] = createTextVNode(" Temp: ", -1)),
                  createBaseVNode("b", null, [
                    createTextVNode(toDisplayString(vitalsData.value?.temperature) + " ", 1),
                    _cache[10] || (_cache[10] = createBaseVNode("span", { class: "unit" }, "°C", -1))
                  ])
                ])) : createCommentVNode("", true),
                vitalsData.value?.systolic && vitalsData.value?.diastolic ? (openBlock(), createElementBlock("li", _hoisted_10, [
                  createVNode(unref(IonIcon), {
                    icon: unref(heartOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[13] || (_cache[13] = createTextVNode(" BP: ", -1)),
                  createBaseVNode("b", null, [
                    createTextVNode(toDisplayString(vitalsData.value?.systolic) + "/" + toDisplayString(vitalsData.value?.diastolic) + " ", 1),
                    _cache[12] || (_cache[12] = createBaseVNode("span", { class: "unit" }, "mmHg", -1))
                  ])
                ])) : createCommentVNode("", true),
                bloodGlucose.value?.value ? (openBlock(), createElementBlock("li", _hoisted_11, [
                  createVNode(unref(IonIcon), {
                    icon: unref(waterOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[14] || (_cache[14] = createTextVNode(" Blood Glucose: ", -1)),
                  createBaseVNode("b", null, toDisplayString(bloodGlucose.value?.value) + " " + toDisplayString(bloodGlucose.value?.unit), 1)
                ])) : createCommentVNode("", true),
                vitalsData.value?.pulse ? (openBlock(), createElementBlock("li", _hoisted_12, [
                  createVNode(unref(IonIcon), {
                    icon: unref(pulseOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[16] || (_cache[16] = createTextVNode(" Pulse: ", -1)),
                  createBaseVNode("b", null, [
                    createTextVNode(toDisplayString(vitalsData.value?.pulse) + " ", 1),
                    _cache[15] || (_cache[15] = createBaseVNode("span", { class: "unit" }, "bpm", -1))
                  ])
                ])) : createCommentVNode("", true),
                BMI.value ? (openBlock(), createElementBlock("li", _hoisted_13, [
                  createVNode(unref(IonIcon), {
                    icon: unref(bodyOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[17] || (_cache[17] = createTextVNode(" BMI: ", -1)),
                  createBaseVNode("b", null, toDisplayString(BMI.value), 1)
                ])) : createCommentVNode("", true)
              ], 4)
            ]),
            showNavigation.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
              withDirectives(createBaseVNode("button", {
                onClick: scrollLeft,
                class: "nav-arrow nav-arrow-left",
                disabled: isAtStart.value
              }, "‹", 8, _hoisted_15), [
                [vShow, !isAtStart.value]
              ]),
              withDirectives(createBaseVNode("button", {
                onClick: scrollRight,
                class: "nav-arrow nav-arrow-right",
                disabled: isAtEnd.value
              }, "›", 8, _hoisted_16), [
                [vShow, !isAtEnd.value]
              ])
            ])) : createCommentVNode("", true),
            showNavigation.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
              createBaseVNode("div", {
                class: "scroll-progress",
                style: normalizeStyle({ width: scrollProgress.value + "%" })
              }, null, 4)
            ])) : createCommentVNode("", true)
          ], 512),
          createBaseVNode("div", {
            style: { "margin-top": "15px", "cursor": "pointer" },
            onClick: _cache[0] || (_cache[0] = ($event) => emit("openPopover", $event))
          }, [
            createVNode(unref(IonIcon), { icon: unref(ellipsisVerticalSharp) }, null, 8, ["icon"])
          ])
        ]),
        _: 1
      });
    };
  }
});

const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-997f3a74"]]);

export { DemographicBar as D };
