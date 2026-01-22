import { v as defineComponent, a3 as onMounted, bE as JsBarcode, dC as domtoimage, z as openBlock, A as createElementBlock, D as createBaseVNode, E as toDisplayString, f as ref, P as createBlock, G as unref, bL as IonCard, C as withCtx, B as createVNode, b9 as IonCardTitle, a6 as createTextVNode, ba as IonCardHeader, a8 as IonLabel, O as IonButton, M as IonIcon, b0 as printOutline, bc as IonCardContent, aF as IonContent, bu as IonPage } from './vendor-Cbv9TWZo.js';
import { N as NavigationMenu } from './NavigationMenu-QIhmfxmm.js';
import { _ as _export_sfc, Z as printLabel, $ as SelectFacility, x as toastDanger, G as toastSuccess } from '../index-DIdCIGDg.js';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LocationLbl",
  props: {
    imageOut: {
      type: Object
    },
    location_id: {
      type: Number,
      required: true
    },
    location_name: {
      type: String,
      required: true
    }
  },
  emits: ["label-out"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const labelComponent = ref(null);
    const props = __props;
    onMounted(() => {
      JsBarcode("#location-barcode", `${props.location_id}`, {
        height: 70,
        width: 3,
        displayValue: false,
        format: "CODE128"
      });
      domtoimage.toPng(labelComponent.value, { width: 500, height: 250 }).then((dataUrl) => {
        emit("label-out", dataUrl);
        if (typeof props.imageOut === "function") props.imageOut([dataUrl]);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "labelComponent",
        ref: labelComponent,
        id: "container"
      }, [
        createBaseVNode("div", null, toDisplayString(__props.location_name), 1),
        _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "padding": "1%" } }, null, -1)),
        _cache[1] || (_cache[1] = createBaseVNode("svg", { id: "location-barcode" }, null, -1))
      ], 512);
    };
  }
});

const LocationLbl = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-be7e2966"]]);

async function printLocationLbl(locationID) {
  return printLabel(LocationLbl, {
    scaleHeight: 280,
    useImage: false,
    lblUrl: `labels/location?location_id=${locationID}`
  });
}

const _hoisted_1 = { class: "ion-margin-top" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PrintLocation",
  setup(__props) {
    const selectedFacilityName = ref("");
    const selectedFacility = ref(null);
    function onFacilitySelected(value) {
      selectedFacility.value = value.selected_location;
      selectedFacilityName.value = value.selected_location?.name || "";
    }
    async function printSelectedLocation() {
      if (!selectedFacility.value) {
        toastDanger("Please select a facility first");
        return;
      }
      try {
        printLocationLbl(selectedFacility.value.location_id);
        toastSuccess("Location label sent to printer");
      } catch (error) {
        console.error("Error printing location:", error);
        toastDanger("Failed to print location label");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Select Facility to Print", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonLabel), null, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createBaseVNode("h3", null, [
                    createTextVNode("Select Facility "),
                    createBaseVNode("span", { style: { "color": "red" } }, "*")
                  ], -1)
                ])]),
                _: 1
              }),
              createVNode(SelectFacility, {
                show_error: false,
                selected_district_ids: [],
                selected_location: null,
                onFacilitySelected
              }),
              createBaseVNode("div", _hoisted_1, [
                createVNode(unref(IonButton), {
                  expand: "block",
                  disabled: !selectedFacility.value,
                  onClick: printSelectedLocation,
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(printOutline),
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[2] || (_cache[2] = createTextVNode(" Print Location ", -1))
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const PrintLocation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ad44e450"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PrintLocationPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu, { title: "Print location" }),
          _cache[0] || (_cache[0] = createBaseVNode("p", { class: "ion-padding" }, null, -1)),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createVNode(PrintLocation)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
