import { s as defineComponent, aL as useRouter, w as watch, a2 as onMounted, a3 as onUnmounted, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, P as normalizeStyle, F as unref, z as createElementBlock, a5 as createTextVNode, D as toDisplayString, H as createCommentVNode, A as createVNode, eq as scaleOutline, L as IonIcon, er as resizeOutline, es as thermometerOutline, aW as heartOutline, et as waterOutline, br as pulseOutline, eu as bodyOutline, S as withDirectives, T as vShow, J as Fragment, R as renderList, a4 as normalizeClass, e0 as ellipsisVerticalSharp, f as ref, c as computed, n as nextTick } from './vendor-DrpjccQs.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { u as useDemographicsStore, a as useProgramStore, aq as ConceptService, K as ObservationService, P as PatientService, H as HisDate, b7 as BMIService, _ as _export_sfc } from '../index-Cz8Kw0vP.js';

const _hoisted_1 = { class: "slider-wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "bar-item demographics-item"
};
const _hoisted_3 = {
  key: 1,
  class: "bar-item demographics-item"
};
const _hoisted_4 = {
  key: 2,
  class: "bar-item demographics-item"
};
const _hoisted_5 = {
  key: 3,
  class: "bar-item demographics-item"
};
const _hoisted_6 = {
  key: 4,
  class: "bar-item demographics-item"
};
const _hoisted_7 = {
  key: 5,
  class: "bar-item vitals-item"
};
const _hoisted_8 = {
  key: 6,
  class: "bar-item vitals-item"
};
const _hoisted_9 = {
  key: 7,
  class: "bar-item vitals-item"
};
const _hoisted_10 = {
  key: 8,
  class: "bar-item vitals-item"
};
const _hoisted_11 = {
  key: 9,
  class: "bar-item vitals-item"
};
const _hoisted_12 = {
  key: 10,
  class: "bar-item vitals-item"
};
const _hoisted_13 = {
  key: 11,
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
const _hoisted_18 = {
  key: 2,
  class: "section-indicator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemographicBar",
  emits: ["openPopover"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useRouter();
    const demographicsStore = useDemographicsStore();
    const programStore = useProgramStore();
    const { patient } = storeToRefs(demographicsStore);
    const { activeProgram } = storeToRefs(programStore);
    const vitalsData = ref({});
    const BMI = ref("");
    const bloodGlucose = ref();
    const currentScrollPosition = ref(0);
    const containerRef = ref(null);
    const autoScrollInterval = ref(null);
    const sectionSwitchInterval = ref(null);
    const scrollProgress = ref(0);
    const isAtStart = ref(true);
    const isAtEnd = ref(false);
    const showNavigation = ref(false);
    const isSmallScreen = ref(false);
    const currentSection = ref("vitals");
    const shouldShowVitals = computed(() => {
      return !isSmallScreen.value || currentSection.value === "vitals";
    });
    const shouldShowDemographics = computed(() => {
      return !isSmallScreen.value || currentSection.value === "demographics";
    });
    const slideContainerStyle = computed(() => ({
      transform: `translateX(-${currentScrollPosition.value}px)`,
      transition: "transform 0.8s ease-in-out"
    }));
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
    const formatBirthdate = () => {
      return HisDate.getBirthdateAge(patient.value?.personInformation?.birthdate);
    };
    const checkScreenSize = () => {
      isSmallScreen.value = window.innerWidth <= 768;
      if (isSmallScreen.value) {
        startSectionSwitch();
        stopAutoScroll();
      } else {
        stopSectionSwitch();
        checkOverflow();
      }
    };
    const startSectionSwitch = () => {
      stopSectionSwitch();
      sectionSwitchInterval.value = window.setInterval(() => {
        currentSection.value = currentSection.value === "vitals" ? "demographics" : "vitals";
      }, 1e4);
    };
    const stopSectionSwitch = () => {
      if (sectionSwitchInterval.value) {
        clearInterval(sectionSwitchInterval.value);
        sectionSwitchInterval.value = null;
      }
    };
    const checkOverflow = () => {
      if (!containerRef.value || isSmallScreen.value) return;
      const wrapper = containerRef.value.querySelector(".slider-wrapper");
      const list = containerRef.value.querySelector(".second_bar_list");
      if (wrapper && list) {
        const wrapperWidth = wrapper.clientWidth;
        const listWidth = list.scrollWidth;
        const needsScroll = listWidth > wrapperWidth;
        showNavigation.value = needsScroll;
        if (needsScroll) {
          startAutoScroll();
        } else {
          stopAutoScroll();
        }
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
    const startAutoScroll = () => {
      stopAutoScroll();
      if (!showNavigation.value || isSmallScreen.value) return;
      autoScrollInterval.value = window.setInterval(() => {
        if (!containerRef.value) return;
        const wrapper = containerRef.value.querySelector(".slider-wrapper");
        const list = containerRef.value.querySelector(".second_bar_list");
        if (!wrapper || !list) return;
        const maxScroll = list.scrollWidth - wrapper.clientWidth;
        if (isAtEnd.value) {
          currentScrollPosition.value = 0;
        } else {
          const scrollAmount = wrapper.clientWidth * 0.7;
          currentScrollPosition.value = Math.min(maxScroll, currentScrollPosition.value + scrollAmount);
        }
        updateScrollState();
      }, 4e3);
    };
    const stopAutoScroll = () => {
      if (autoScrollInterval.value) {
        clearInterval(autoScrollInterval.value);
        autoScrollInterval.value = null;
      }
    };
    const handleResize = () => {
      checkScreenSize();
      if (!isSmallScreen.value) {
        checkOverflow();
        updateScrollState();
      }
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
      checkScreenSize();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      stopAutoScroll();
      stopSectionSwitch();
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
                unref(activeProgram).program_id != 32 && shouldShowDemographics.value ? (openBlock(), createElementBlock("li", _hoisted_2, [
                  _cache[1] || (_cache[1] = createTextVNode(" Fullname: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.personInformation?.given_name) + " " + toDisplayString(unref(patient)?.personInformation?.middle_name) + " " + toDisplayString(unref(patient)?.personInformation?.family_name), 1)
                ])) : createCommentVNode("", true),
                unref(patient)?.NcdID && shouldShowDemographics.value ? (openBlock(), createElementBlock("li", _hoisted_3, [
                  _cache[2] || (_cache[2] = createTextVNode(" NCDNumber: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.NcdID), 1)
                ])) : createCommentVNode("", true),
                unref(activeProgram).program_id != 32 && shouldShowDemographics.value ? (openBlock(), createElementBlock("li", _hoisted_4, [
                  _cache[3] || (_cache[3] = createTextVNode(" MRN: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.ID), 1)
                ])) : createCommentVNode("", true),
                shouldShowDemographics.value ? (openBlock(), createElementBlock("li", _hoisted_5, [
                  _cache[4] || (_cache[4] = createTextVNode(" Birthday: ", -1)),
                  createBaseVNode("b", null, toDisplayString(formatBirthdate()), 1)
                ])) : createCommentVNode("", true),
                shouldShowDemographics.value ? (openBlock(), createElementBlock("li", _hoisted_6, [
                  _cache[5] || (_cache[5] = createTextVNode(" Gender: ", -1)),
                  createBaseVNode("b", null, toDisplayString(unref(patient)?.personInformation?.gender), 1)
                ])) : createCommentVNode("", true),
                vitalsData.value?.weight && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_7, [
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
                vitalsData.value?.height && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_8, [
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
                vitalsData.value?.temperature && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_9, [
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
                vitalsData.value?.systolic && vitalsData.value?.diastolic && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_10, [
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
                bloodGlucose.value?.value && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_11, [
                  createVNode(unref(IonIcon), {
                    icon: unref(waterOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[14] || (_cache[14] = createTextVNode(" Blood Glucose: ", -1)),
                  createBaseVNode("b", null, toDisplayString(bloodGlucose.value?.value) + " " + toDisplayString(bloodGlucose.value?.unit), 1)
                ])) : createCommentVNode("", true),
                vitalsData.value?.pulse && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_12, [
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
                BMI.value && shouldShowVitals.value ? (openBlock(), createElementBlock("li", _hoisted_13, [
                  createVNode(unref(IonIcon), {
                    icon: unref(bodyOutline),
                    class: "vital-icon"
                  }, null, 8, ["icon"]),
                  _cache[17] || (_cache[17] = createTextVNode(" BMI: ", -1)),
                  createBaseVNode("b", null, toDisplayString(BMI.value), 1)
                ])) : createCommentVNode("", true)
              ], 4)
            ]),
            showNavigation.value && !isSmallScreen.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
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
            showNavigation.value && !isSmallScreen.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
              createBaseVNode("div", {
                class: "scroll-progress",
                style: normalizeStyle({ width: scrollProgress.value + "%" })
              }, null, 4)
            ])) : createCommentVNode("", true),
            isSmallScreen.value ? (openBlock(), createElementBlock("div", _hoisted_18, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["vitals", "demographics"], (section) => {
                return createBaseVNode("div", {
                  key: section,
                  class: normalizeClass(["indicator-dot", { active: currentSection.value === section }])
                }, null, 2);
              }), 64))
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

const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-14adac09"]]);

export { DemographicBar as D };
