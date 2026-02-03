import { s as defineComponent, a2 as onMounted, ej as Picker, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, F as unref, aA as IonCol, C as createBaseVNode, af as IonRow, f as ref } from './vendor-D523m2MA.js';
import { P as PatientService, S as Service, _ as _export_sfc } from '../index-Cl_dwGxG.js';

const _hoisted_1 = { style: { "margin-top": "40px" } };
const _hoisted_2 = ["id"];
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  emits: ["dateChange"],
  setup(__props, { emit: __emit }) {
    const uniqId = ref("0");
    let pickerInstance = null;
    const patient = new PatientService();
    onMounted(() => {
      const _input_ = document.getElementById("0");
      _input_.id = generateUniqueString();
      initPicker(_input_);
    });
    function initPicker(input) {
      var picker = new Picker(input, {
        headers: false,
        container: document.getElementById("picker-container"),
        inline: true,
        rows: 3,
        format: "DD-MMM-YYYY",
        pick: datePickerEventListener
      });
      pickerInstance = picker;
      const init_date = new Date(Service.getSessionDate());
      pickerInstance.setDate(init_date);
    }
    const emit = __emit;
    function dateChange() {
      const clientBODYear = getYearFromDateString(patient.getBirthdate());
      const clientBODMonth = removeLeadingZero(getMonthFromDateString(patient.getBirthdate()));
      const clientBODDay = removeLeadingZero(getDayFromDateString(patient.getBirthdate()));
      const sessionYear = getYearFromDateString(Service.getSessionDate());
      const pickerYear = pickerInstance.getDate().getFullYear();
      const pickerMonth = pickerInstance.getDate().getMonth() + 1;
      const pickerDay = pickerInstance.getDate().getDate();
      if (pickerYear <= sessionYear) {
        if (parseInt(pickerYear) == parseInt(clientBODYear)) {
          if (parseInt(pickerMonth) < parseInt(clientBODMonth)) {
            const corrected_date = pickerInstance.getDate();
            corrected_date.setMonth(parseInt(clientBODMonth) - 1);
            pickerInstance.setDate(corrected_date);
          }
          if (parseInt(pickerMonth) === parseInt(clientBODMonth) && parseInt(pickerDay) < parseInt(clientBODDay)) {
            const corrected_date = pickerInstance.getDate();
            corrected_date.setDate(parseInt(clientBODDay));
            pickerInstance.setDate(corrected_date);
          }
        }
        if (parseInt(pickerYear) < parseInt(clientBODYear)) {
          const corrected_date = pickerInstance.getDate();
          corrected_date.setFullYear(sessionYear);
          pickerInstance.setDate(corrected_date);
        }
        const sessionDate = new Date(Service.getSessionDate());
        if (pickerInstance.getDate() > sessionDate) {
          pickerInstance.setDate(sessionDate);
        }
      } else {
        const corrected_date = pickerInstance.getDate();
        corrected_date.setFullYear(sessionYear);
        pickerInstance.setDate(corrected_date);
      }
      emit("dateChange", pickerInstance.getDate());
    }
    function datePickerEventListener(event) {
      dateChange();
    }
    function getYearFromDateString(dateString) {
      return dateString.split("-")[0];
    }
    function getMonthFromDateString(dateString) {
      return dateString.split("-")[1];
    }
    function getDayFromDateString(dateString) {
      return dateString.split("-")[2];
    }
    function removeLeadingZero(str) {
      return String(Number(str));
    }
    function generateUniqueString() {
      const timestamp = Date.now().toString(20);
      const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let uniqueString = "";
      for (let i = 0; i < timestamp.length; i++) {
        uniqueString += timestamp[i];
        const randomIndex = Math.floor(Math.random() * randomChars.length);
        uniqueString += randomChars[randomIndex];
      }
      return uniqueString;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { size: "5" }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createBaseVNode("span", { style: { "color": "grey", "font-size": "16px", "margin-left": "0px" } }, " Pick visit date: ", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(IonCol), null, {
              default: withCtx(() => [
                createBaseVNode("input", {
                  type: "text",
                  id: uniqId.value,
                  style: { "display": "none" }
                }, null, 8, _hoisted_2),
                _cache[1] || (_cache[1] = createBaseVNode("div", { id: "picker-container" }, null, -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const customDatePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5770532"]]);

export { customDatePicker as c };
