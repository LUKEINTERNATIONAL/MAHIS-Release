import { s as defineComponent, y as openBlock, O as createBlock, F as unref, bK as IonCard, a4 as normalizeClass, B as withCtx, A as createVNode, bd as IonCardContent, z as createElementBlock, J as Fragment, C as createBaseVNode, H as createCommentVNode, D as toDisplayString, a5 as createTextVNode, N as IonButton, a8 as withModifiers, L as IonIcon, e3 as createOutline, c as computed, bF as IonModal, I as IonHeader, aD as IonToolbar, aE as IonTitle, be as IonButtons, ag as close, aG as IonContent, E as renderSlot, aL as useRouter, f as ref, a2 as onMounted, bN as IonSelectOption, bO as IonSelect, af as IonRow, R as renderList, aA as IonCol, aB as IonGrid, dZ as IonSkeletonText, a9 as chevronDownOutline } from './vendor-DpSS1aB1.js';
import { _ as _export_sfc, u as useDemographicsStore } from '../index-BMUY4QS-.js';
import { N as NeonatalService } from './neonatal_service-DuMTBbv7.js';
import { I as IMAGES } from './images-BHsiaMgy.js';

class NeonatalHelpers {
  static instance;
  statusColorMap = {
    admitted: "primary",
    discharged: "success",
    critical: "danger"
  };
  constructor() {
  }
  /**
   * Returns a color corresponding to a patient's status.
   * @param status - The current neonatal patient status
   * @returns Color string corresponding to the status
   */
  getStatusColor(status) {
    return this.statusColorMap[status.toLowerCase()] ?? "medium";
  }
  formatWeight(weightGrams) {
    return `${(weightGrams / 1e3).toFixed(2)} kg`;
  }
  static getInstance() {
    if (!NeonatalHelpers.instance) {
      NeonatalHelpers.instance = new NeonatalHelpers();
    }
    return NeonatalHelpers.instance;
  }
}
const neonatalHelpers = NeonatalHelpers.getInstance();

const STAT_CARDS = [
  {
    label: "Pending Registration",
    key: "triage_only",
    iconSrc: IMAGES.icons.triaged
  },
  {
    label: "Admitted Today",
    key: "admitted",
    iconSrc: IMAGES.icons.newborn
  },
  {
    label: "Discharged Today",
    key: "discharged",
    iconSrc: IMAGES.icons.babyCarriage
  },
  {
    label: "Critical",
    key: "critical",
    iconSrc: IMAGES.icons.warningSign,
    isCritical: true
  }
];
const ACTION_CARDS = [
  {
    label: "Start Emergency Triage",
    iconSrc: IMAGES.icons.electrocardiogram,
    iconClass: "emergency-icon",
    route: "/neonatal/triage",
    query: { source: "dashboard" }
  },
  {
    label: "Instruction Guides",
    iconSrc: IMAGES.icons.info,
    route: "/neonatal/guides"
  }
];

const _hoisted_1$4 = { class: "stat-icon-wrapper" };
const _hoisted_2$4 = ["innerHTML"];
const _hoisted_3$4 = ["src", "alt"];
const _hoisted_4$3 = { class: "stat-label" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "card",
  props: {
    label: {},
    value: {},
    iconSrc: {},
    svgIcon: {},
    isCritical: { type: Boolean },
    clickable: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleClick = () => {
      if (props.clickable) {
        emit("click");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), {
        class: normalizeClass(["stat-card", { "is-clickable": __props.clickable, "is-loading": __props.loading }]),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), { class: "stat-content" }, {
            default: withCtx(() => [
              __props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "stat-icon-wrapper" }, [
                  createBaseVNode("div", { class: "stat-skeleton stat-skeleton-icon" })
                ], -1)),
                _cache[1] || (_cache[1] = createBaseVNode("div", { class: "stat-skeleton stat-skeleton-label" }, null, -1)),
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "stat-skeleton stat-skeleton-value" }, null, -1))
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_1$4, [
                  __props.svgIcon ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    innerHTML: __props.svgIcon,
                    class: "stat-icon"
                  }, null, 8, _hoisted_2$4)) : __props.iconSrc ? (openBlock(), createElementBlock("img", {
                    key: 1,
                    src: __props.iconSrc,
                    class: normalizeClass(["stat-icon critical-icon", { "critical-pulse": __props.isCritical }]),
                    alt: __props.label
                  }, null, 10, _hoisted_3$4)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_4$3, toDisplayString(__props.label), 1),
                createBaseVNode("div", {
                  class: normalizeClass(["stat-value", { "critical-value": __props.isCritical }])
                }, toDisplayString(__props.value), 3)
              ], 64))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const StatCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-96451bed"]]);

const _hoisted_1$3 = { class: "action-icon-wrapper" };
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$3 = ["src", "alt"];
const _hoisted_4$2 = { class: "action-label" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "action-card",
  props: {
    label: {},
    svgIcon: {},
    iconSrc: {},
    iconClass: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const onClick = () => {
      emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), {
        class: "action-card",
        onClick
      }, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), { class: "action-content" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                __props.svgIcon ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  innerHTML: __props.svgIcon,
                  class: normalizeClass(["action-icon", __props.iconClass])
                }, null, 10, _hoisted_2$3)) : __props.iconSrc ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  src: __props.iconSrc,
                  class: normalizeClass(["action-icon", __props.iconClass]),
                  alt: __props.label
                }, null, 10, _hoisted_3$3)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_4$2, toDisplayString(__props.label), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ActionCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-588146f9"]]);

const _hoisted_1$2 = { class: "neonate-info" };
const _hoisted_2$2 = { class: "neonate-name" };
const _hoisted_3$2 = { class: "neonate-mrn" };
const _hoisted_4$1 = { class: "neonate-details" };
const _hoisted_5$1 = { class: "detail-item" };
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = { class: "detail-item" };
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = { class: "neonate-actions" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "neonate-card",
  props: {
    neonate: {},
    getStatusColor: { type: Function }
  },
  emits: ["click", "edit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const statusColor = computed(() => props.getStatusColor(props.neonate.status));
    const isPendingRegistration = computed(() => props.neonate.status === "Triaged");
    const onClick = () => {
      emit("click", props.neonate.id, props.neonate.status);
    };
    const onEditClick = () => {
      emit("edit", props.neonate);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), {
        class: "neonate-card",
        onClick
      }, {
        default: withCtx(() => [
          createVNode(unref(IonCardContent), { class: "neonate-content" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$2, [
                createBaseVNode("div", _hoisted_2$2, toDisplayString(__props.neonate.name), 1),
                createBaseVNode("div", _hoisted_3$2, toDisplayString(__props.neonate.mrn), 1),
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("span", _hoisted_5$1, [
                    createBaseVNode("img", {
                      src: unref(IMAGES).icons.deliveryTime,
                      class: "detail-icon"
                    }, null, 8, _hoisted_6$1),
                    createTextVNode(" " + toDisplayString(__props.neonate.age), 1)
                  ]),
                  createBaseVNode("span", _hoisted_7$1, [
                    createBaseVNode("img", {
                      src: unref(IMAGES).icons.babyWeight,
                      class: "detail-icon"
                    }, null, 8, _hoisted_8$1),
                    createTextVNode(" " + toDisplayString(__props.neonate.weight), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_9$1, [
                isPendingRegistration.value ? (openBlock(), createBlock(unref(IonButton), {
                  key: 0,
                  size: "small",
                  fill: "outline",
                  color: "primary",
                  class: "edit-button",
                  onClick: withModifiers(onEditClick, ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(createOutline),
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[0] || (_cache[0] = createTextVNode(" Register ", -1))
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(["status-badge", `status-${statusColor.value}`])
                }, toDisplayString(__props.neonate.status), 3)
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

const NeonateCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2904d9a6"]]);

const _hoisted_1$1 = { class: "drilldown-content" };
const _hoisted_2$1 = {
  key: 0,
  class: "empty-drilldown"
};
const _hoisted_3$1 = {
  key: 1,
  class: "drilldown-list"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DrilldownModal",
  props: {
    isOpen: { type: Boolean },
    title: {},
    isEmpty: { type: Boolean, default: false },
    emptyMessage: { default: "No items available." }
  },
  emits: ["close", "dismiss"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const closeIcon = close;
    const handleClose = () => {
      emit("close");
    };
    const handleDismiss = () => {
      emit("dismiss");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": __props.isOpen,
        onDidDismiss: handleDismiss,
        class: "drilldown-modal"
      }, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonTitle), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonButtons), { slot: "end" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        fill: "clear",
                        onClick: handleClose
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            slot: "icon-only",
                            icon: unref(closeIcon)
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                __props.isEmpty ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(__props.emptyMessage), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]))
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-open"]);
    };
  }
});

const DrilldownModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-912ed09a"]]);

const _hoisted_1 = { class: "neonatal-dashboard" };
const _hoisted_2 = { class: "header-image" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "section-container" };
const _hoisted_5 = { class: "section-header" };
const _hoisted_6 = { class: "section-title" };
const _hoisted_7 = { class: "section-container" };
const _hoisted_8 = { class: "section-container" };
const _hoisted_9 = {
  key: 0,
  class: "neonates-list"
};
const _hoisted_10 = { class: "skeleton-content" };
const _hoisted_11 = {
  key: 1,
  class: "neonates-list"
};
const _hoisted_12 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_13 = {
  key: 2,
  class: "empty-neonates"
};
const INITIAL_NEONATES_COUNT = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  setup(__props) {
    const STAT_STATUS_MAP = {
      enrolled: "In patient",
      admitted: "Admitted",
      discharged: "Discharged",
      critical: "Critical",
      triage_only: "Triaged"
    };
    const createEmptyStats = () => {
      return STAT_CARDS.reduce((acc, card) => {
        acc[card.key] = { count: 0, neonates: [] };
        return acc;
      }, {});
    };
    const router = useRouter();
    const stats = ref(createEmptyStats());
    const recentNeonates = ref([]);
    const isLoadingNeonates = ref(true);
    const isDrilldownOpen = ref(false);
    const selectedStatKey = ref(null);
    const selectedFilter = ref("today");
    const showAllNeonates = ref(false);
    const statsTitle = computed(() => {
      switch (selectedFilter.value) {
        case "yesterday":
          return "Yesterday's Stats";
        case "this_week":
          return "This Week's Stats";
        case "this_month":
          return "This Month's Stats";
        default:
          return "Today's Stats";
      }
    });
    const visibleNeonates = computed(() => {
      if (showAllNeonates.value) {
        return recentNeonates.value;
      }
      return recentNeonates.value.slice(0, INITIAL_NEONATES_COUNT);
    });
    const hasMoreNeonates = computed(() => {
      return recentNeonates.value.length > INITIAL_NEONATES_COUNT && !showAllNeonates.value;
    });
    const drilldownNeonates = computed(() => {
      if (!selectedStatKey.value) return [];
      return stats.value[selectedStatKey.value]?.neonates ?? [];
    });
    const getCardLabel = (key) => {
      if (!key) return "Neonates";
      return STAT_CARDS.find((card) => card.key === key)?.label ?? "Neonates";
    };
    const drilldownTitle = computed(() => {
      const label = getCardLabel(selectedStatKey.value);
      if (!drilldownNeonates.value.length) {
        return label;
      }
      return `${label} (${drilldownNeonates.value.length})`;
    });
    const getCardValue = (key) => stats.value[key]?.count ?? 0;
    const isStatClickable = (_key) => true;
    const handleStatClick = (key) => {
      selectedStatKey.value = key;
      isDrilldownOpen.value = true;
    };
    const closeDrilldown = () => {
      isDrilldownOpen.value = false;
      selectedStatKey.value = null;
    };
    const handleActionNavigation = (action) => {
      router.push({
        path: action.route,
        query: action.query
      });
    };
    const navigateTo = (path) => {
      router.push({ path });
    };
    const handleNeonateClick = async (id, status) => {
      try {
        const demographicsStore = useDemographicsStore();
        await demographicsStore.setPatientRecord({ patientID: Number(id) });
        if (status === "Triaged") {
          navigateTo(`/registration/manual?patientID=${id}`);
        } else {
          navigateTo(`/patient-profile?id=${id}`);
        }
      } catch (error) {
        console.error("[NeonatalLanding] Failed to load patient:", error);
        navigateTo(`/patient-profile?id=${id}`);
      }
    };
    const handleNeonateEdit = async (neonate) => {
      try {
        const demographicsStore = useDemographicsStore();
        await demographicsStore.setPatientRecord({ patientID: Number(neonate.id) });
        const encodedName = encodeURIComponent(neonate.name);
        router.push({
          path: "/registration/manual",
          query: {
            patientID: neonate.id,
            prefillName: encodedName
          }
        });
      } catch (error) {
        console.error("[NeonatalLanding] Failed to load patient for edit:", error);
        router.push({
          path: "/registration/manual",
          query: {
            patientID: neonate.id,
            prefillName: encodeURIComponent(neonate.name)
          }
        });
      }
    };
    const getStatusColor = (status) => neonatalHelpers.getStatusColor(status);
    const fetchStatistics = async () => {
      try {
        isLoadingNeonates.value = true;
        const response = await NeonatalService.getStatistics(void 0, selectedFilter.value);
        stats.value = normalizeStatisticsResponse(response);
        if (response.recent_neonates && Array.isArray(response.recent_neonates)) {
          recentNeonates.value = response.recent_neonates.map((neonate) => ({
            id: String(neonate.id || neonate.patient_id || ""),
            name: neonate.name || "Unknown Neonate",
            mrn: neonate.mrn || "N/A",
            age: neonate.age || "—",
            weight: neonate.weight || "—",
            status: neonate.status || "In patient"
          }));
        } else {
          syncRecentNeonates();
        }
      } catch (error) {
        console.error("[NeonatalLanding] Failed to load statistics", error);
        stats.value = createEmptyStats();
        recentNeonates.value = [];
      } finally {
        isLoadingNeonates.value = false;
      }
    };
    const normalizeStatisticsResponse = (payload) => {
      const normalized = createEmptyStats();
      STAT_CARDS.forEach((card) => {
        const key = card.key;
        const lookupKey = key === "critical" && payload?.critical_attention ? "critical_attention" : key;
        const statValue = payload?.[lookupKey] ?? payload?.stats?.[lookupKey];
        const detailCollection = extractNeonateCollection(payload, lookupKey);
        normalized[key] = buildStatisticEntry(statValue, detailCollection, key);
      });
      return normalized;
    };
    const extractNeonateCollection = (payload, key) => {
      if (!payload) return [];
      const candidates = [
        payload?.neonates?.[key],
        payload?.details?.[key],
        payload?.[`${key}_neonates`],
        payload?.[`${key}_patients`],
        payload?.[`${key}_records`],
        payload?.[key]?.neonates,
        payload?.[key]?.patients
      ];
      return candidates.find((value) => Array.isArray(value)) ?? [];
    };
    const buildStatisticEntry = (statValue, detailCollection, key) => {
      if (typeof statValue === "number") {
        return {
          count: statValue,
          neonates: normalizeNeonates(detailCollection, key)
        };
      }
      if (statValue && typeof statValue === "object") {
        const neonateSource = Array.isArray(statValue.neonates) ? statValue.neonates : Array.isArray(statValue.patients) ? statValue.patients : detailCollection;
        const neonates2 = normalizeNeonates(neonateSource, key);
        const count = typeof statValue.count === "number" ? statValue.count : typeof statValue.total === "number" ? statValue.total : typeof statValue.value === "number" ? statValue.value : neonates2.length;
        return {
          count,
          neonates: neonates2
        };
      }
      const neonates = normalizeNeonates(detailCollection, key);
      return {
        count: neonates.length,
        neonates
      };
    };
    const normalizeNeonates = (collection, key) => {
      if (!Array.isArray(collection)) return [];
      return collection.map((entry, index) => normalizeSingleNeonate(entry, key, index));
    };
    const normalizeSingleNeonate = (entry, key, index) => {
      const fallbackStatus = STAT_STATUS_MAP[key];
      const fallbackId = `${key}-${index}`;
      if (entry?.name && entry?.mrn) {
        return {
          id: String(entry.id ?? fallbackId),
          name: entry.name,
          mrn: entry.mrn,
          age: entry.age ?? "—",
          weight: entry.weight ?? "—",
          status: entry.status ?? fallbackStatus
        };
      }
      const patient = entry?.patient ?? entry;
      const id = entry?.id ?? entry?.patient_id ?? patient?.patient_id ?? fallbackId;
      const nameParts = [entry?.name, patient?.given_name, patient?.family_name].filter(Boolean);
      const name = nameParts.join(" ").trim() || "Unknown Neonate";
      const mrn = entry?.mrn ?? entry?.identifier ?? patient?.identifier ?? "N/A";
      const age = entry?.age ?? formatAgeFromBirthdate(patient?.birthdate) ?? "—";
      const weightValue = entry?.weight ?? entry?.latest_weight ?? entry?.weight_kg;
      const weight = typeof weightValue === "number" ? `${weightValue.toFixed(2)} Kg` : weightValue ?? "—";
      const status = entry?.status ?? fallbackStatus;
      return {
        id: String(id),
        name,
        mrn,
        age,
        weight,
        status
      };
    };
    const formatAgeFromBirthdate = (birthdate) => {
      if (!birthdate) return null;
      const birth = new Date(birthdate);
      if (Number.isNaN(birth.getTime())) {
        return null;
      }
      const diffMs = Date.now() - birth.getTime();
      const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
      if (diffHours < 24) {
        return `${diffHours} hrs old`;
      }
      const diffDays = Math.floor(diffHours / 24);
      if (diffDays < 1) {
        return "Today";
      }
      return `${diffDays} day${diffDays === 1 ? "" : "s"} old`;
    };
    const syncRecentNeonates = () => {
      const neonates = Object.values(stats.value).flatMap((entry) => entry.neonates);
      recentNeonates.value = neonates;
    };
    const handleSeeMore = () => {
      showAllNeonates.value = true;
    };
    onMounted(() => {
      fetchStatistics();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            src: unref(IMAGES).banners.babyHand,
            alt: "baby-hand-banner",
            style: { "object-fit": "cover" }
          }, null, 8, _hoisted_3)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("h2", _hoisted_6, toDisplayString(statsTitle.value), 1),
            createVNode(unref(IonSelect), {
              modelValue: selectedFilter.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFilter.value = $event),
              interface: "popover",
              class: "stats-filter",
              onIonChange: fetchStatistics
            }, {
              default: withCtx(() => [
                createVNode(unref(IonSelectOption), { value: "today" }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Today", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonSelectOption), { value: "yesterday" }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Yesterday", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonSelectOption), { value: "this_week" }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("This Week", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonSelectOption), { value: "this_month" }, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("This Month", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createVNode(unref(IonGrid), { class: "stats-grid" }, {
            default: withCtx(() => [
              isLoadingNeonates.value ? (openBlock(), createBlock(unref(IonRow), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(STAT_CARDS), (card) => {
                    return openBlock(), createBlock(unref(IonCol), {
                      key: `skeleton-${card.key}`,
                      size: "6",
                      "size-md": "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(StatCard, {
                          label: card.label,
                          value: "—",
                          "icon-src": card.iconSrc,
                          "svg-icon": card.svgIcon,
                          "is-critical": card.isCritical,
                          clickable: false,
                          loading: true
                        }, null, 8, ["label", "icon-src", "svg-icon", "is-critical"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock(unref(IonRow), { key: 1 }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(STAT_CARDS), (card) => {
                    return openBlock(), createBlock(unref(IonCol), {
                      key: card.key,
                      size: "6",
                      "size-md": "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(StatCard, {
                          label: card.label,
                          value: getCardValue(card.key),
                          "icon-src": card.iconSrc,
                          "svg-icon": card.svgIcon,
                          "is-critical": card.isCritical,
                          clickable: isStatClickable(card.key),
                          onClick: ($event) => handleStatClick(card.key)
                        }, null, 8, ["label", "value", "icon-src", "svg-icon", "is-critical", "clickable", "onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_7, [
          _cache[5] || (_cache[5] = createBaseVNode("h2", { class: "section-title" }, "Quick Actions", -1)),
          createVNode(unref(IonGrid), { class: "actions-grid" }, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(ACTION_CARDS), (action) => {
                    return openBlock(), createBlock(unref(IonCol), {
                      key: action.route,
                      size: "6",
                      "size-md": "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(ActionCard, {
                          label: action.label,
                          "svg-icon": action.svgIcon,
                          "icon-src": action.iconSrc,
                          "icon-class": action.iconClass,
                          onClick: ($event) => handleActionNavigation(action)
                        }, null, 8, ["label", "svg-icon", "icon-src", "icon-class", "onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_8, [
          _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "section-title" }, "Recent Neonates", -1)),
          isLoadingNeonates.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
            (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
              return createBaseVNode("div", {
                key: `skeleton-${i}`,
                class: "neonate-skeleton"
              }, [
                createVNode(unref(IonSkeletonText), {
                  animated: true,
                  style: { "width": "60px", "height": "60px", "border-radius": "50%" }
                }),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(IonSkeletonText), {
                    animated: true,
                    style: { "width": "70%", "height": "20px", "margin-bottom": "8px" }
                  }),
                  createVNode(unref(IonSkeletonText), {
                    animated: true,
                    style: { "width": "50%", "height": "16px", "margin-bottom": "4px" }
                  }),
                  createVNode(unref(IonSkeletonText), {
                    animated: true,
                    style: { "width": "40%", "height": "16px" }
                  })
                ]),
                createVNode(unref(IonSkeletonText), {
                  animated: true,
                  style: { "width": "80px", "height": "24px", "border-radius": "12px" }
                })
              ]);
            }), 64))
          ])) : recentNeonates.value.length ? (openBlock(), createElementBlock("div", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(visibleNeonates.value, (neonate) => {
              return openBlock(), createBlock(NeonateCard, {
                key: neonate.id,
                neonate,
                "get-status-color": getStatusColor,
                onClick: handleNeonateClick,
                onEdit: handleNeonateEdit
              }, null, 8, ["neonate"]);
            }), 128)),
            hasMoreNeonates.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createVNode(unref(IonButton), {
                fill: "clear",
                onClick: handleSeeMore
              }, {
                default: withCtx(() => [
                  _cache[6] || (_cache[6] = createTextVNode(" See more ", -1)),
                  createVNode(unref(IonIcon), {
                    slot: "end",
                    icon: unref(chevronDownOutline),
                    class: "see-more-icon"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", _hoisted_13, "No recent neonates to display."))
        ]),
        createVNode(DrilldownModal, {
          "is-open": isDrilldownOpen.value,
          title: drilldownTitle.value,
          "is-empty": !drilldownNeonates.value.length,
          "empty-message": "No neonates available for this statistic.",
          onClose: closeDrilldown,
          onDismiss: closeDrilldown
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(drilldownNeonates.value, (neonate) => {
              return openBlock(), createBlock(NeonateCard, {
                key: `${selectedStatKey.value}-${neonate.id}`,
                neonate,
                "get-status-color": getStatusColor,
                onClick: handleNeonateClick,
                onEdit: handleNeonateEdit
              }, null, 8, ["neonate"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["is-open", "title", "is-empty"])
      ]);
    };
  }
});

const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95ed6df7"]]);

export { LandingPage as L };
