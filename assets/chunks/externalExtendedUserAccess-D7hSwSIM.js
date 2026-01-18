import { q as defineComponent, x as createElementBlock, y as openBlock, A as createBaseVNode, ct as useRoute, aI as useRouter, r as ref, d as computed, a1 as onMounted, w as watch, N as createBlock, B as withCtx, z as createVNode, E as unref, aJ as analyticsOutline, aD as IonContent, G as createCommentVNode, bs as IonPage } from './vendor-CyoemPPl.js';
import { N as NavigationMenu } from './NavigationMenu-CRJv7KxU.js';
import { E as EIRreportsStore } from './EIRreportsStore-CNW856n0.js';
import { T as TableSkeletonLoader } from './TableSkeletonLoader-NwnlkyKt.js';
import { _ as _export_sfc } from '../index-QeoU54UC.js';

const _hoisted_1$1 = { class: "report-dashboard" };
const _hoisted_2 = {
  key: 0,
  class: "no-url-message"
};
const _hoisted_3 = ["src", "title"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "reportDashboard",
  props: {
    url: { default: "" },
    title: { default: "Report Dashboard" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !__props.url ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("p", null, "No report URL provided", -1)
        ])])) : (openBlock(), createElementBlock("iframe", {
          key: 1,
          src: __props.url,
          title: __props.title || "Report Dashboard",
          class: "report-iframe",
          frameborder: "0",
          allowfullscreen: ""
        }, null, 8, _hoisted_3))
      ]);
    };
  }
});

const reportDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-75981e06"]]);

const _hoisted_1 = {
  key: 2,
  class: "no-facility-message"
};
const baseReportUrl = "https://mahistest.health.gov.mw/reports/home";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "externalExtendedUserAccess",
  setup(__props) {
    const route = useRoute();
    useRouter();
    ref(false);
    const isLoading = ref(true);
    ref("");
    ref([]);
    const facilityCode = computed(() => {
      return route.params.facility_code || route.query.facility_code || "";
    });
    const reportUrl = computed(() => {
      if (!facilityCode.value) {
        return "";
      }
      return `${baseReportUrl}?Location=${facilityCode.value}`;
    });
    onMounted(async () => {
      initNavData();
      loadReport();
    });
    async function loadReport() {
      if (!facilityCode.value) {
        console.warn("No facility_code provided in route");
        isLoading.value = false;
        return;
      }
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
    function initNavData() {
      const store = EIRreportsStore();
      store.setNavigationPayload("Reports Dashboard", true, false, "/", "/home", "view mahis reports");
    }
    watch(
      () => route.name,
      async (newRouteName) => {
        if (newRouteName === "ReportDashboard") {
          initNavData();
        }
      },
      { deep: true }
    );
    watch(
      () => facilityCode.value,
      (newCode) => {
        if (newCode) {
          isLoading.value = true;
          loadReport();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu, { "title-icon": unref(analyticsOutline) }, null, 8, ["title-icon"]),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              isLoading.value ? (openBlock(), createBlock(TableSkeletonLoader, { key: 0 })) : createCommentVNode("", true),
              reportUrl.value ? (openBlock(), createBlock(reportDashboard, {
                key: 1,
                url: reportUrl.value
              }, null, 8, ["url"])) : (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [
                createBaseVNode("p", null, "No facility code provided", -1)
              ])]))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const externalExtendedUserAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c942c020"]]);

export { externalExtendedUserAccess as default };
