import { s as defineComponent, L as IonIcon, aE as IonToolbar, aF as IonTitle, aG as IonMenu, ap as IonList, aq as IonItem, I as IonHeader, aI as IonContent, bN as IonCard, aL as p, e2 as ellipsisVerticalSharp, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, a5 as createTextVNode, D as toDisplayString } from './vendor-QOXikrLM.js';
import { H as HisDate, K as ObservationService, b as EncounterTypeId, u as useDemographicsStore, _ as _export_sfc } from '../index-Biv93APm.js';
import { m as mapState } from './pinia-BRP2SQHv.js';

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonCard,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonIcon
  },
  setup() {
    return {
      ellipsisVerticalSharp
    };
  },
  data: () => ({
    gestationAgeWeeks: ""
  }),
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  watch: {
    "patient.patientID": {
      immediate: true,
      handler() {
        this.loadGestationAge();
      }
    },
    // Also handle cases where patient record is replaced without changing ID
    patient: {
      deep: false,
      handler() {
        this.loadGestationAge();
      }
    }
  },
  methods: {
    navigationMenu(url) {
      p.close();
      this.$router.push(url);
    },
    getObsPrimaryValue(obs) {
      if (!obs) return "";
      if (obs.value_numeric != null) return String(obs.value_numeric);
      if (obs.value_text != null) return String(obs.value_text);
      if (obs.value_datetime != null) return String(obs.value_datetime);
      if (obs.value_coded != null) return String(obs.value_coded);
      return "";
    },
    async loadGestationAge() {
      try {
        const patientRecord = this.patient;
        if (!patientRecord) {
          this.gestationAgeWeeks = "";
          return;
        }
        const latest = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.CURRENT_PREGNANCY, patientRecord);
        const byConceptName = /* @__PURE__ */ new Map();
        (latest || []).forEach((o) => byConceptName.set(o.concept_name, o));
        const method = this.getObsPrimaryValue(byConceptName.get("Gestation age to be used")) || this.getObsPrimaryValue(byConceptName.get("Gestation age to be used "));
        const gaByLnmp = this.getObsPrimaryValue(byConceptName.get("Gestation weeks")) || this.getObsPrimaryValue(byConceptName.get("Gestation Weeks"));
        const gaByUltrasound = this.getObsPrimaryValue(byConceptName.get("Gestation in weeks")) || this.getObsPrimaryValue(byConceptName.get("Gestation in Weeks")) || this.getObsPrimaryValue(byConceptName.get("Gestation in weeks "));
        const gaByPalpation = this.getObsPrimaryValue(byConceptName.get("Gestation age by palpation")) || this.getObsPrimaryValue(byConceptName.get("Gestation age by palpation "));
        const selected = method === "GA by ultrasound" ? gaByUltrasound : method === "GA by palpation" ? gaByPalpation : gaByLnmp;
        this.gestationAgeWeeks = selected ? `${selected} weeks` : "";
      } catch (e) {
        this.gestationAgeWeeks = "";
      }
    },
    covertGender(gender) {
      return ["Male", "M"].includes(gender) ? "Male" : ["Female", "F"].includes(gender) ? "Female" : "";
    },
    formatBirthdate() {
      return HisDate.getBirthdateAge(this.patient?.personInformation?.birthdate);
    }
  }
});

const _hoisted_1 = { class: "second_bar_list desktop position_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, { class: "second_bar" }, {
    default: withCtx(() => [
      createBaseVNode("ul", _hoisted_1, [
        createBaseVNode("li", null, [
          _cache[0] || (_cache[0] = createTextVNode(" Fullname: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient?.personInformation?.given_name) + " " + toDisplayString(_ctx.patient?.personInformation?.middle_name) + " " + toDisplayString(_ctx.patient?.personInformation?.family_name), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[1] || (_cache[1] = createTextVNode(" MRN: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.patient.ID), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[2] || (_cache[2] = createTextVNode(" Birthday: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.formatBirthdate()), 1)
        ]),
        createBaseVNode("li", null, [
          _cache[3] || (_cache[3] = createTextVNode(" Gestation age: ", -1)),
          createBaseVNode("b", null, toDisplayString(_ctx.gestationAgeWeeks), 1)
        ])
      ])
    ]),
    _: 1
  });
}
const DemographicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74e08d64"]]);

export { DemographicBar as D };
