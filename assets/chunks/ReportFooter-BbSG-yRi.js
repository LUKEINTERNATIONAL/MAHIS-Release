import { a7 as useUserStore, H as HisDate, _ as _export_sfc } from '../index-BEwz2zkV.js';
import { w as watch, s as defineComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, D as toDisplayString, E as renderSlot, c as computed, a3 as onMounted, f as ref, bG as QRCode, H as createCommentVNode } from './vendor-DEu2hKw1.js';

const signoffSections = [
  {
    title: "Clinical Review Sign-Off",
    subtitle: "Your details will be auto populated. Please confirm.",
    formData: [
      {
        componentType: "inputField",
        header: "Healthcare Worker/Student ID",
        name: "healthcareWorkerId",
        placeholder: "Enter your ID",
        validation: (value) => value ? null : "Healthcare Worker/Student ID is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Electronic Signature",
        name: "electronicSignature",
        placeholder: "Certified User Name",
        validation: (value) => value ? null : "Electronic signature is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Role/Cadre",
        name: "userRole",
        placeholder: "Your role",
        validation: (value) => value ? null : "Role/Cadre is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "dateInputField",
        header: "Date & Time",
        name: "signOffDate",
        validation: (value) => value ? null : "Date & Time is required",
        disabled: true,
        padding: true
      }
    ]
  }
];
const neonatalClinicalReviewSignOffSections = signoffSections;

function useClinicalReviewSignOff(formRef) {
  const userStore = useUserStore();
  const populateSignOffData = () => {
    if (!formRef.value || !userStore.user) {
      return null;
    }
    const updates = {
      healthcareWorkerId: userStore.user.username || "",
      electronicSignature: getFullName(),
      userRole: getUserRole(),
      signOffDate: HisDate.todayDateFormatted()
    };
    Object.entries(updates).forEach(([field, value]) => {
      if (formRef.value.setFormValue) {
        formRef.value.setFormValue(field, value);
      }
    });
    return updates;
  };
  const getFullName = () => {
    if (!userStore.user) return "";
    const nameParts = [
      userStore.user.given_name,
      userStore.user.family_name
    ].filter(Boolean);
    return nameParts.length > 0 ? nameParts.join(" ") : userStore.user.username || "";
  };
  const getUserRole = () => {
    return userStore.user?.user_type || "Clinician";
  };
  watch(
    () => formRef.value,
    (instance) => {
      if (instance && instance.setFormValue) {
        setTimeout(() => {
          populateSignOffData();
        }, 100);
      }
    },
    { immediate: true }
  );
  watch(
    () => userStore.user,
    (newUser) => {
      if (newUser && formRef.value) {
        populateSignOffData();
      }
    },
    { deep: true }
  );
  return {
    populateSignOffData,
    userStore,
    getFullName,
    getUserRole
  };
}

const _sfc_main$3 = defineComponent({
  name: "ReportSection",
  props: {
    title: {
      type: String,
      required: true
    }
  }
});

const _hoisted_1$3 = { class: "report-section" };
const _hoisted_2$3 = { class: "section-header" };
const _hoisted_3$2 = { class: "header-text" };
const _hoisted_4$1 = { class: "section-content" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("span", _hoisted_3$2, toDisplayString(_ctx.title), 1),
      _cache[0] || (_cache[0] = createBaseVNode("span", { class: "header-spacer" }, null, -1))
    ]),
    createBaseVNode("div", _hoisted_4$1, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const ReportSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-36df177d"]]);

const _sfc_main$2 = defineComponent({
  name: "ReportRow",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: "-"
    }
  },
  setup(props) {
    const formattedValue = computed(() => {
      const v = props.value;
      if (v === void 0 || v === null || v === "") return "-";
      if (Array.isArray(v)) {
        return v.length ? v.map((d) => typeof d === "string" ? d : d.label || d.value).join(", ") : "-";
      }
      if (typeof v === "boolean") return v ? "Yes" : "No";
      return String(v);
    });
    return { formattedValue };
  }
});

const _hoisted_1$2 = { class: "report-row" };
const _hoisted_2$2 = { class: "row-label" };
const _hoisted_3$1 = { class: "row-value" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, toDisplayString(_ctx.label), 1),
    createBaseVNode("div", _hoisted_3$1, toDisplayString(_ctx.formattedValue), 1)
  ]);
}
const ReportRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-ccf289c6"]]);

const _sfc_main$1 = defineComponent({
  name: "ReportHeader",
  props: {
    facilityName: {
      type: String,
      default: ""
    },
    reportTitle: {
      type: String,
      required: true
    },
    patientName: {
      type: String,
      default: ""
    },
    npid: {
      type: String,
      default: ""
    },
    dob: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const qrCodeUrl = ref("");
    const generateQrCode = async () => {
      if (props.npid) {
        try {
          qrCodeUrl.value = await QRCode.toDataURL(String(props.npid), { width: 140, margin: 1 });
        } catch (error) {
          console.error("Failed to generate QR code", error);
          qrCodeUrl.value = "";
        }
      } else {
        qrCodeUrl.value = "";
      }
    };
    onMounted(generateQrCode);
    watch(() => props.npid, generateQrCode);
    const formatValue = (value) => {
      if (value === void 0 || value === null || value === "") return "-";
      return String(value);
    };
    return {
      qrCodeUrl,
      formatValue
    };
  }
});

const _imports_0 = "/mw.png";

const _hoisted_1$1 = { class: "report-header" };
const _hoisted_2$1 = { class: "header-top" };
const _hoisted_3 = { class: "facility-info" };
const _hoisted_4 = { class: "facility-name" };
const _hoisted_5 = { class: "report-title" };
const _hoisted_6 = { class: "logo-side right" };
const _hoisted_7 = {
  key: 0,
  class: "qr-code"
};
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "patient-header-info" };
const _hoisted_10 = { class: "info-row" };
const _hoisted_11 = { class: "value" };
const _hoisted_12 = { class: "info-row" };
const _hoisted_13 = { class: "value" };
const _hoisted_14 = { class: "info-row" };
const _hoisted_15 = { class: "value" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "logo-side left" }, [
        createBaseVNode("img", {
          src: _imports_0,
          alt: "Malawi Coat of Arms",
          class: "logo mw-logo"
        })
      ], -1)),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.facilityName), 1),
        createBaseVNode("h2", _hoisted_5, toDisplayString(_ctx.reportTitle), 1)
      ]),
      createBaseVNode("div", _hoisted_6, [
        _ctx.qrCodeUrl ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("img", {
            src: _ctx.qrCodeUrl,
            alt: "QR Code"
          }, null, 8, _hoisted_8)
        ])) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("div", _hoisted_10, [
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "label" }, "Patient:", -1)),
        createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.formatValue(_ctx.patientName)), 1)
      ]),
      createBaseVNode("div", _hoisted_12, [
        _cache[2] || (_cache[2] = createBaseVNode("span", { class: "label" }, "NPID:", -1)),
        createBaseVNode("span", _hoisted_13, toDisplayString(_ctx.formatValue(_ctx.npid)), 1)
      ]),
      createBaseVNode("div", _hoisted_14, [
        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "label" }, "DOB:", -1)),
        createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.formatValue(_ctx.dob)), 1)
      ])
    ]),
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "header-divider" }, null, -1))
  ]);
}
const ReportHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-754b1a29"]]);

const _sfc_main = defineComponent({
  name: "ReportFooter",
  props: {
    generatedDate: {
      type: String,
      required: true
    },
    facilityInfo: {
      type: String,
      default: ""
    }
  }
});

const _hoisted_1 = { class: "report-footer" };
const _hoisted_2 = { class: "footer-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("span", null, "Generated: " + toDisplayString(_ctx.generatedDate), 1),
      createBaseVNode("span", null, toDisplayString(_ctx.facilityInfo), 1),
      _cache[0] || (_cache[0] = createBaseVNode("span", null, "Page 1 of 1", -1))
    ])
  ]);
}
const ReportFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3b6cd028"]]);

export { ReportFooter as R, ReportHeader as a, ReportRow as b, ReportSection as c, neonatalClinicalReviewSignOffSections as n, useClinicalReviewSignOff as u };
