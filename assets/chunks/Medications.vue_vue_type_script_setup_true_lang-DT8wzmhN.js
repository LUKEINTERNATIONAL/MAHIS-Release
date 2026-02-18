import { s as defineComponent, x as resolveComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, B as withCtx, A as createVNode, a5 as createTextVNode, bd as IonCardContent } from './vendor-BmM9kPGp.js';
import { R as ReusableDataTable } from './ReusableDataTable-BH0ClpTA.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Medications",
  setup(__props) {
    const headers = ["Medication", "Name", "Dose", "Frequency", "Duration", "Formulation", "Prescriber"];
    const tableOptions = {
      responsive: true,
      ordering: false,
      layout: {
        topStart: "buttons",
        topEnd: "",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      buttons: [
        {
          text: " <b> Print Medication </b>",
          className: "add-test text-white",
          action: async () => {
          }
        }
      ]
    };
    const tableData = [
      ["Antibiotic", "Amoxicillin", "500 mg", "3 times a day", "7 days", "Capsule", "Dr. Smith"],
      ["Analgesic", "Paracetamol", "650 mg", "4 times a day", "5 days", "Tablet", "Dr. Johnson"],
      ["Antihypertensive", "Lisinopril", "10 mg", "Once daily", "30 days", "Tablet", "Dr. Lee"]
    ];
    return (_ctx, _cache) => {
      const _component_ion_card_title = resolveComponent("ion-card-title");
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(_component_ion_card_title, null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Prescribed Medication", -1)
                ])]),
                _: 1
              }),
              createVNode(ReusableDataTable, {
                data: tableData,
                headers,
                options: tableOptions
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

export { _sfc_main as _ };
