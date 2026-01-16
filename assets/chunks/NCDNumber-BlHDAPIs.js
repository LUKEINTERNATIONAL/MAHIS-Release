import { q as defineComponent, ad as IonCheckbox, aA as IonToolbar, aB as IonTitle, aC as IonMenu, am as IonList, an as IonItem, I as IonHeader, aD as IonContent, v as resolveComponent, N as createBlock, y as openBlock } from './vendor-Dvd0YFIr.js';
import { aT as modifyCheckboxInputField, i as useEnrollementStore, o as createModal, n as icons, _ as _export_sfc, br as getCheckboxSelectedValue, a1 as modifyFieldValue, aX as modifyCheckboxValue, ai as ProgramService, f as useStatusStore } from '../index-BQO1lu0i.js';
import { D as DispositionModal } from './OutcomeModal-CKacg3--.js';
import { m as mapState } from './pinia-CBckhk5W.js';
import { B as BasicForm } from './BasicForm-DnoKyUJU.js';
import { B as BasicCard } from './BasicCard-pqiPrt5I.js';

const _sfc_main$2 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["patientHistory"])
  },
  watch: {
    patientHistory: {
      handler() {
        this.buildCards();
      },
      deep: true
    }
  },
  mounted() {
    this.updateEnrollmentStores();
    this.buildCards();
  },
  methods: {
    buildCards() {
      const enrollment = useEnrollementStore();
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "Patient history & Complications ",
            content: this.patientHistory,
            initialData: enrollment.getInitialPatientHistory()
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setPatientHistory(this.patientHistory);
    },
    async handleInputData(event) {
      if (event.al) {
        if (event.value.detail.checked) modifyCheckboxInputField(this.patientHistory, event.al.name, "displayNone", false);
        else modifyCheckboxInputField(this.patientHistory, event.al.name, "displayNone", true);
      }
    }
  }
});

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, {
    content: _ctx.cardData,
    "onUpdate:inputValue": _ctx.handleInputData
  }, null, 8, ["content", "onUpdate:inputValue"]);
}
const PatientHistory = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-f4f62de9"]]);

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
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useEnrollementStore, ["enrollmentDiagnosis"])
  },
  watch: {
    enrollmentDiagnosis: {
      handler() {
        this.buildCards();
      },
      deep: true
    }
  },
  mounted() {
    this.updateEnrollmentStores();
    this.buildCards();
  },
  methods: {
    buildCards() {
      const enrollment = useEnrollementStore();
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "Diagnosis",
            content: this.enrollmentDiagnosis,
            initialData: enrollment.getInitialEnrollmentDiagnosis()
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setDiagnosis(this.enrollmentDiagnosis);
    },
    testF(data) {
      console.log(data);
    },
    async handleInputData(event) {
      const type2 = getCheckboxSelectedValue(this.enrollmentDiagnosis, "Type 2 DM");
      const type1 = getCheckboxSelectedValue(this.enrollmentDiagnosis, "Type 1 DM");
      if (type2 && type1) {
        modifyFieldValue(this.enrollmentDiagnosis, "Type 1 DM date", "displayNone", true);
        modifyFieldValue(this.enrollmentDiagnosis, "Type 2 DM date", "displayNone", true);
        modifyCheckboxValue(this.enrollmentDiagnosis, "Type 2 DM", "checked", false);
        modifyCheckboxValue(this.enrollmentDiagnosis, "Type 1 DM", "checked", false);
        modifyCheckboxValue(this.enrollmentDiagnosis, event?.col?.name, "checked", true);
        modifyFieldValue(this.enrollmentDiagnosis, event?.col?.name + " date", "displayNone", false);
        this.buildCards();
      }
    }
  }
});

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, {
    content: _ctx.cardData,
    "onUpdate:inputValue": _ctx.handleInputData
  }, null, 8, ["content", "onUpdate:inputValue"]);
}
const SubstanceDiagnosis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c54c0205"]]);

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    BasicForm,
    BasicCard
  },
  data() {
    return {
      iconsContent: icons,
      test: "",
      cardData: {}
    };
  },
  computed: {
    ...mapState(useStatusStore, ["apiStatus"]),
    ...mapState(useEnrollementStore, ["NCDNumber"])
  },
  watch: {
    NCDNumber: {
      handler() {
        this.buildCards();
      },
      deep: true
    },
    $route: {
      async handler() {
        await this.setNCDNumber();
      },
      deep: true
    }
  },
  async mounted() {
    await this.setNCDNumber();
    this.buildCards();
  },
  methods: {
    async setNCDNumber() {
      if (this.apiStatus) {
        const j = await ProgramService.getNextSuggestedNCDNumber();
        if (j) {
          modifyFieldValue(this.NCDNumber, "NCDNumber", "value", j.ncd_number.replace(/^\D+|\s/g, ""));
          modifyFieldValue(this.NCDNumber, "NCDNumber", "leftText", `${j.ncd_number.replace(/\d+/g, "")}-NCD-`);
        }
      } else {
        modifyFieldValue(this.NCDNumber, "NCDNumber", "value", "");
        modifyFieldValue(this.NCDNumber, "NCDNumber", "disabled", true);
        modifyFieldValue(this.NCDNumber, "leftText", "disabled", true);
      }
    },
    buildCards() {
      this.cardData = {
        mainTitle: "Enrollment",
        cards: [
          {
            cardTitle: "NCD number",
            content: this.NCDNumber
          }
        ]
      };
    },
    openModal() {
      createModal(DispositionModal);
    },
    updateEnrollmentStores() {
      const enrollmentStore = useEnrollementStore();
      enrollmentStore.setNCDNumber(this.NCDNumber);
    },
    testF(data) {
      console.log(data);
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_basic_card = resolveComponent("basic-card");
  return openBlock(), createBlock(_component_basic_card, { content: _ctx.cardData }, null, 8, ["content"]);
}
const FamilyHistoryNCDNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d8ffbbd3"]]);

export { FamilyHistoryNCDNumber as F, PatientHistory as P, SubstanceDiagnosis as S };
