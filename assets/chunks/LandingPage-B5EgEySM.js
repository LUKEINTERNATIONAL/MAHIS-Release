import { a3 as onMounted, a4 as onUnmounted, c as computed, f as ref, s as defineComponent, y as openBlock, O as createBlock, F as unref, bN as IonCard, Q as normalizeClass, B as withCtx, A as createVNode, bf as IonCardContent, z as createElementBlock, J as Fragment, C as createBaseVNode, H as createCommentVNode, D as toDisplayString, N as IonButton, a8 as withModifiers, e5 as createOutline, L as IonIcon, a5 as createTextVNode, w as watch, S as renderList, aN as useRouter, bO as useRoute, x as resolveComponent, bQ as IonSelectOption, bR as IonSelect, af as IonRow, aB as IonCol, aC as IonGrid, d$ as IonSkeletonText, a9 as chevronDownOutline } from './vendor-DdMq-dB8.js';
import { f as useStatusStore, S as Service, _ as _export_sfc, r as StandardModal, o as createModal, u as useDemographicsStore } from '../index-BGCOT9Zw.js';
import { N as NeonatalService } from './neonatal_service-Bt7uvfRf.js';
import { d as defineStore } from './pinia-C0spauhr.js';
import { NeonatalOfflineService } from './neonatal_offline_service-CHsd-MkO.js';
import { I as IMAGES } from './images-DsIwfyLt.js';

const useNeonatalOfflineStore = defineStore("neonatalOffline", {
  state: () => ({
    queuedEnrollments: [],
    queuedDischarges: [],
    queuedVitals: [],
    queuedObservations: [],
    lastSyncTime: null,
    syncErrors: [],
    isSyncing: false,
    offlineMode: false
  }),
  getters: {
    /**
     * Get total count of pending items across all queues
     */
    pendingCount() {
      return this.queuedEnrollments.filter((e) => e.status === "pending").length + this.queuedDischarges.filter((d) => d.status === "pending").length + this.queuedVitals.filter((v) => v.status === "pending").length + this.queuedObservations.filter((o) => o.status === "pending").length;
    },
    /**
     * Get total count of items with errors
     */
    errorCount() {
      return this.queuedEnrollments.filter((e) => e.status === "error").length + this.queuedDischarges.filter((d) => d.status === "error").length + this.queuedVitals.filter((v) => v.status === "error").length + this.queuedObservations.filter((o) => o.status === "error").length;
    },
    /**
     * Check if there are any items pending sync
     */
    hasPendingItems() {
      return this.pendingCount > 0;
    },
    /**
     * Get all queued items for a specific patient
     */
    getPatientQueuedData: (state) => (patientId) => {
      return {
        enrollments: state.queuedEnrollments.filter((e) => e.patient_id === patientId),
        discharges: state.queuedDischarges.filter((d) => d.patient_id === patientId),
        vitals: state.queuedVitals.filter((v) => v.patient_id === patientId),
        observations: state.queuedObservations.filter((o) => o.patient_id === patientId)
      };
    }
  },
  actions: {
    /**
     * Add enrollment to queue
     */
    queueEnrollment(patientId, enrollmentData, date) {
      const queuedItem = {
        patient_id: patientId,
        enrollment_data: enrollmentData,
        date,
        timestamp: Date.now(),
        status: "pending",
        retry_count: 0
      };
      this.queuedEnrollments.push(queuedItem);
    },
    /**
     * Add discharge to queue
     */
    queueDischarge(patientId, dischargeData, date) {
      const queuedItem = {
        patient_id: patientId,
        discharge_data: dischargeData,
        date,
        timestamp: Date.now(),
        status: "pending",
        retry_count: 0
      };
      this.queuedDischarges.push(queuedItem);
    },
    /**
     * Add vitals to queue
     */
    queueVitals(patientId, vitalsData, date) {
      const queuedItem = {
        patient_id: patientId,
        vitals_data: vitalsData,
        date,
        timestamp: Date.now(),
        status: "pending",
        retry_count: 0
      };
      this.queuedVitals.push(queuedItem);
    },
    /**
     * Add observation to queue
     */
    queueObservation(patientId, observationData, date) {
      const queuedItem = {
        patient_id: patientId,
        observation_data: observationData,
        date,
        timestamp: Date.now(),
        status: "pending",
        retry_count: 0
      };
      this.queuedObservations.push(queuedItem);
    },
    /**
     * Update enrollment status
     */
    updateEnrollmentStatus(patientId, timestamp, status, errorMessage) {
      const index = this.queuedEnrollments.findIndex(
        (e) => e.patient_id === patientId && e.timestamp === timestamp
      );
      if (index !== -1) {
        this.queuedEnrollments[index].status = status;
        if (errorMessage) {
          this.queuedEnrollments[index].error_message = errorMessage;
        }
      }
    },
    /**
     * Update discharge status
     */
    updateDischargeStatus(patientId, timestamp, status, errorMessage) {
      const index = this.queuedDischarges.findIndex(
        (d) => d.patient_id === patientId && d.timestamp === timestamp
      );
      if (index !== -1) {
        this.queuedDischarges[index].status = status;
        if (errorMessage) {
          this.queuedDischarges[index].error_message = errorMessage;
        }
      }
    },
    /**
     * Remove synced items from queues
     */
    clearSyncedItems() {
      this.queuedEnrollments = this.queuedEnrollments.filter((e) => e.status !== "synced");
      this.queuedDischarges = this.queuedDischarges.filter((d) => d.status !== "synced");
      this.queuedVitals = this.queuedVitals.filter((v) => v.status !== "synced");
      this.queuedObservations = this.queuedObservations.filter((o) => o.status !== "synced");
    },
    /**
     * Add sync error
     */
    addSyncError(type, message, data) {
      const error = {
        id: `${type}_${Date.now()}`,
        type,
        message,
        timestamp: Date.now(),
        data
      };
      this.syncErrors.push(error);
      if (this.syncErrors.length > 50) {
        this.syncErrors = this.syncErrors.slice(-50);
      }
    },
    /**
     * Clear all sync errors
     */
    clearSyncErrors() {
      this.syncErrors = [];
    },
    /**
     * Update last sync time
     */
    updateLastSyncTime() {
      this.lastSyncTime = Date.now();
    },
    /**
     * Set syncing state
     */
    setSyncing(isSyncing) {
      this.isSyncing = isSyncing;
    },
    /**
     * Set offline mode
     */
    setOfflineMode(isOffline) {
      this.offlineMode = isOffline;
    },
    /**
     * Reset all queues (use with caution)
     */
    resetQueues() {
      this.queuedEnrollments = [];
      this.queuedDischarges = [];
      this.queuedVitals = [];
      this.queuedObservations = [];
      this.syncErrors = [];
    },
    /**
     * Increment retry count for failed items
     */
    incrementRetryCount(type, patientId, timestamp) {
      let queue;
      switch (type) {
        case "enrollment":
          queue = this.queuedEnrollments;
          break;
        case "discharge":
          queue = this.queuedDischarges;
          break;
        case "vitals":
          queue = this.queuedVitals;
          break;
        case "observation":
          queue = this.queuedObservations;
          break;
      }
      const index = queue.findIndex(
        (item) => item.patient_id === patientId && item.timestamp === timestamp
      );
      if (index !== -1) {
        queue[index].retry_count = (queue[index].retry_count || 0) + 1;
      }
    }
  },
  persist: {
    paths: [
      "queuedEnrollments",
      "queuedDischarges",
      "queuedVitals",
      "queuedObservations",
      "lastSyncTime",
      "syncErrors",
      "offlineMode"
    ]
  }
});

function useNeonatalOffline() {
  const offlineStore = useNeonatalOfflineStore();
  const statusStore = useStatusStore();
  const isOnline = ref(true);
  const canUseOffline = ref(false);
  const isSyncing = ref(false);
  const checkOnlineStatus = () => {
    isOnline.value = statusStore.apiStatus === true || navigator.onLine;
    canUseOffline.value = Service.getPouchDbStatus() || Service.getLanConnectionStatus();
  };
  const isOfflineMode = computed(() => {
    return !isOnline.value && canUseOffline.value;
  });
  const canOperate = computed(() => {
    return isOnline.value || canUseOffline.value;
  });
  const pendingSyncCount = computed(() => offlineStore.pendingCount);
  const syncErrorCount = computed(() => offlineStore.errorCount);
  const hasPendingSync = computed(() => offlineStore.hasPendingItems);
  const getStatusMessage = computed(() => {
    if (isOnline.value) {
      return hasPendingSync.value ? `Online - ${pendingSyncCount.value} items pending sync` : "Online";
    } else if (canUseOffline.value) {
      return `Offline Mode - ${pendingSyncCount.value} items queued`;
    } else {
      return "Offline - No connection available";
    }
  });
  const getOfflinePatients = async (locationId) => {
    if (!canUseOffline.value) {
      console.warn("Offline functionality not available");
      return [];
    }
    try {
      return await NeonatalOfflineService.getEnrolledPatients(locationId);
    } catch (error) {
      console.error("Error fetching offline patients:", error);
      return [];
    }
  };
  const getOfflineVisits = async (patientId) => {
    if (!canUseOffline.value) {
      console.warn("Offline functionality not available");
      return [];
    }
    try {
      return await NeonatalOfflineService.getPatientVisits(patientId);
    } catch (error) {
      console.error("Error fetching offline visits:", error);
      return [];
    }
  };
  const searchPatientsOffline = async (searchTerm, locationId) => {
    if (!canUseOffline.value) {
      console.warn("Offline functionality not available");
      return [];
    }
    try {
      return await NeonatalOfflineService.searchPatients(searchTerm, locationId);
    } catch (error) {
      console.error("Error searching patients offline:", error);
      return [];
    }
  };
  const getRecentPatientsOffline = async (locationId, limit = 50) => {
    if (!canUseOffline.value) {
      console.warn("Offline functionality not available");
      return [];
    }
    try {
      return await NeonatalOfflineService.getRecentPatients(locationId, limit);
    } catch (error) {
      console.error("Error fetching recent patients offline:", error);
      return [];
    }
  };
  const hasOfflineData = async (patientId) => {
    if (!canUseOffline.value) return false;
    try {
      return await NeonatalOfflineService.hasOfflineData(patientId);
    } catch (error) {
      console.error("Error checking offline data:", error);
      return false;
    }
  };
  const queueEnrollment = (patientId, enrollmentData, date) => {
    offlineStore.queueEnrollment(patientId, enrollmentData, date);
  };
  const queueDischarge = (patientId, dischargeData, date) => {
    offlineStore.queueDischarge(patientId, dischargeData, date);
  };
  const queueVitals = (patientId, vitalsData, date) => {
    offlineStore.queueVitals(patientId, vitalsData, date);
  };
  const queueObservation = (patientId, observationData, date) => {
    offlineStore.queueObservation(patientId, observationData, date);
  };
  const clearSyncedItems = () => {
    offlineStore.clearSyncedItems();
  };
  const clearSyncErrors = () => {
    offlineStore.clearSyncErrors();
  };
  const getPatientQueuedData = (patientId) => {
    return offlineStore.getPatientQueuedData(patientId);
  };
  const handleOnline = () => {
    console.log("[useNeonatalOffline] Network is online");
    checkOnlineStatus();
    offlineStore.setOfflineMode(false);
  };
  const handleOffline = () => {
    console.log("[useNeonatalOffline] Network is offline");
    checkOnlineStatus();
    offlineStore.setOfflineMode(true);
  };
  onMounted(() => {
    checkOnlineStatus();
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    const statusInterval = setInterval(checkOnlineStatus, 3e4);
    onUnmounted(() => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(statusInterval);
    });
  });
  return {
    // State
    isOnline,
    canUseOffline,
    isOfflineMode,
    canOperate,
    isSyncing,
    // Computed
    pendingSyncCount,
    syncErrorCount,
    hasPendingSync,
    getStatusMessage,
    // Methods
    checkOnlineStatus,
    getOfflinePatients,
    getOfflineVisits,
    searchPatientsOffline,
    getRecentPatientsOffline,
    hasOfflineData,
    queueEnrollment,
    queueDischarge,
    queueVitals,
    queueObservation,
    clearSyncedItems,
    clearSyncErrors,
    getPatientQueuedData
  };
}

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
const _hoisted_4$4 = { class: "stat-label" };
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
                createBaseVNode("div", _hoisted_4$4, toDisplayString(__props.label), 1),
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
const _hoisted_4$3 = { class: "action-label" };
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
              createBaseVNode("div", _hoisted_4$3, toDisplayString(__props.label), 1)
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
const _hoisted_4$2 = { class: "neonate-details" };
const _hoisted_5$2 = { class: "detail-item" };
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
          __props.neonate.status == "Triage Only - Pending Registration" ? (openBlock(), createBlock(unref(IonButton), {
            key: 0,
            size: "small",
            fill: "solid",
            class: "register-button-top",
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
          createVNode(unref(IonCardContent), { class: "neonate-content" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$2, [
                createBaseVNode("div", _hoisted_2$2, toDisplayString(__props.neonate.name), 1),
                createBaseVNode("div", _hoisted_3$2, toDisplayString(__props.neonate.mrn), 1),
                createBaseVNode("div", _hoisted_4$2, [
                  createBaseVNode("span", _hoisted_5$2, [
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

const NeonateCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-324cc063"]]);

const _hoisted_1$1 = { class: "drilldown-content" };
const _hoisted_2$1 = {
  key: 0,
  class: "empty-drilldown"
};
const _hoisted_3$1 = {
  key: 1,
  class: "drilldown-list"
};
const _hoisted_4$1 = { class: "pagination" };
const _hoisted_5$1 = { class: "page-info" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DrilldownModal",
  props: {
    title: {},
    neonates: {},
    emptyMessage: { default: "No items available." },
    pageSize: { default: 7 },
    getStatusColor: {},
    onClick: {},
    onEdit: {}
  },
  setup(__props) {
    const props = __props;
    const currentPage = ref(1);
    const totalPages = computed(() => {
      const total = Math.ceil((props.neonates?.length || 0) / props.pageSize);
      return total > 0 ? total : 1;
    });
    const isEmpty = computed(() => !props.neonates || props.neonates.length === 0);
    const pagedNeonates = computed(() => {
      const start = (currentPage.value - 1) * props.pageSize;
      return props.neonates.slice(start, start + props.pageSize);
    });
    const subtitle = computed(() => {
      const count = props.neonates?.length || 0;
      return count ? `${count} neonate${count === 1 ? "" : "s"}` : "";
    });
    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value -= 1;
    };
    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value += 1;
    };
    const handleNeonateClick = (id) => {
      props.onClick?.(id);
    };
    const handleNeonateEdit = (neonate) => {
      props.onEdit?.(neonate);
    };
    watch(
      () => props.neonates,
      () => {
        currentPage.value = 1;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: __props.title,
        subtitle: subtitle.value
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            isEmpty.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(__props.emptyMessage), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(pagedNeonates.value, (neonate) => {
                return openBlock(), createBlock(NeonateCard, {
                  key: `drilldown-${neonate.id}`,
                  neonate,
                  "get-status-color": __props.getStatusColor,
                  onClick: handleNeonateClick,
                  onEdit: handleNeonateEdit
                }, null, 8, ["neonate", "get-status-color"]);
              }), 128))
            ]))
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(unref(IonButton), {
              fill: "outline",
              size: "small",
              disabled: currentPage.value === 1,
              onClick: prevPage
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode("Previous", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            createBaseVNode("div", _hoisted_5$1, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
            createVNode(unref(IonButton), {
              fill: "outline",
              size: "small",
              disabled: currentPage.value === totalPages.value,
              onClick: nextPage
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode("Next", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ]),
        _: 1
      }, 8, ["title", "subtitle"]);
    };
  }
});

const DrilldownModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-af4b1f7c"]]);

const _hoisted_1 = { class: "neonatal-dashboard" };
const _hoisted_2 = { class: "header-image" };
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  key: 0,
  class: "offline-banner"
};
const _hoisted_5 = { class: "section-container" };
const _hoisted_6 = { class: "section-header" };
const _hoisted_7 = { class: "section-title" };
const _hoisted_8 = { class: "section-container" };
const _hoisted_9 = { class: "section-container" };
const _hoisted_10 = {
  key: 0,
  class: "neonates-list"
};
const _hoisted_11 = { class: "skeleton-content" };
const _hoisted_12 = {
  key: 1,
  class: "neonates-list"
};
const _hoisted_13 = {
  key: 0,
  class: "see-more-container"
};
const _hoisted_14 = {
  key: 2,
  class: "empty-neonates"
};
const INITIAL_NEONATES_COUNT = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  setup(__props, { expose: __expose }) {
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
    const route = useRoute();
    const { isOfflineMode, getStatusMessage } = useNeonatalOffline();
    const stats = ref(createEmptyStats());
    const recentNeonates = ref([]);
    const isLoadingNeonates = ref(true);
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
    const getFilterAdjustedLabel = (card) => {
      const filter = selectedFilter.value;
      if (filter === "today") return card.label;
      const prefix = filter === "yesterday" ? "Yesterday" : filter === "this_week" ? "This Week" : filter === "this_month" ? "This Month" : "";
      if (card.key === "triage_only") return `${prefix} Triaged`;
      if (card.label.includes("Today")) return card.label.replace("Today", prefix);
      if (card.key === "critical") return card.label;
      return `${prefix} ${card.label}`;
    };
    const statCards = computed(
      () => STAT_CARDS.map((card) => ({
        ...card,
        label: getFilterAdjustedLabel(card)
      }))
    );
    const visibleNeonates = computed(() => {
      if (showAllNeonates.value) {
        return recentNeonates.value;
      }
      return recentNeonates.value.slice(0, INITIAL_NEONATES_COUNT);
    });
    const hasMoreNeonates = computed(() => {
      return recentNeonates.value.length > INITIAL_NEONATES_COUNT && !showAllNeonates.value;
    });
    const getCardLabel = (key) => {
      if (!key) return "Neonates";
      const card = STAT_CARDS.find((card2) => card2.key === key);
      return card ? getFilterAdjustedLabel(card) : "Neonates";
    };
    const getCardValue = (key) => stats.value[key]?.count ?? 0;
    const isStatClickable = (_key) => true;
    const handleStatClick = async (key) => {
      const neonates = stats.value[key]?.neonates ?? [];
      const label = getCardLabel(key);
      const title = neonates.length ? `${label} (${neonates.length})` : label;
      await createModal(
        DrilldownModal,
        { class: "large-modal" },
        true,
        {
          title,
          neonates,
          emptyMessage: "No neonates available for this statistic.",
          getStatusColor,
          onClick: handleNeonateClick,
          onEdit: handleNeonateEdit
        }
      );
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
    const handleNeonateClick = async (id) => {
      try {
        const demographicsStore = useDemographicsStore();
        await demographicsStore.setPatientRecord({ patientID: id });
        navigateTo(`/patient-profile`);
      } catch (error) {
        console.error("[NeonatalLanding] Failed to load patient:", error);
        navigateTo(`/patient-profile?id=${id}`);
      }
    };
    const handleNeonateEdit = async (neonate) => {
      try {
        console.log("[NeonatalLanding] Attempting to load patient for registration:", {
          id: neonate.id,
          name: neonate.name,
          idType: typeof neonate.id
        });
        const demographicsStore = useDemographicsStore();
        const patientData = await demographicsStore.getPatientData(neonate.id);
        if (patientData) {
          await demographicsStore.setRecord(patientData);
          router.push({
            path: "/registration/manual"
          });
        } else {
          console.error("[NeonatalLanding] Patient data not found for ID:", neonate.id);
          router.push({
            path: "/registration/manual",
            query: { patientID: neonate.id }
          });
        }
      } catch (error) {
        console.error("[NeonatalLanding] Failed to load patient for edit:", error);
        router.push({
          path: "/registration/manual",
          query: { patientID: neonate.id }
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
            id: String(neonate.id || neonate.patient_id || neonate.patientID),
            name: neonate.name || "Unknown Neonate",
            mrn: neonate.mrn || "N/A",
            age: neonate.age || "—",
            weight: neonate.weight || "—",
            status: neonate.status || "In patient",
            gender: neonate.gender
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
    const extractRecentNeonateCollection = (payload) => {
      if (!payload) return [];
      const candidates = [
        payload?.recent_neonates,
        payload?.recentNeonates,
        payload?.recent_neonates?.neonates,
        payload?.recent_neonates?.patients,
        payload?.recent?.neonates,
        payload?.recent?.patients,
        payload?.recent_patients,
        payload?.recentPatients,
        payload?.recent_patients?.neonates,
        payload?.recent_patients?.patients
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
          status: entry.status ?? fallbackStatus,
          gender: entry.gender
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
      const gender = entry?.gender ?? patient?.gender;
      return {
        id: String(id),
        name,
        mrn,
        age,
        weight,
        status,
        gender
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
    const reloadRecentNeonates = async () => {
      try {
        const response = await NeonatalService.getStatistics(void 0, selectedFilter.value);
        let recentCollection = extractRecentNeonateCollection(response);
        if (!recentCollection.length) {
          try {
            const unfiltered = await NeonatalService.getStatistics(void 0, void 0);
            recentCollection = extractRecentNeonateCollection(unfiltered);
          } catch (e) {
          }
        }
        if (recentCollection.length) {
          recentNeonates.value = normalizeNeonates(recentCollection, "enrolled");
        } else {
          stats.value = normalizeStatisticsResponse(response);
          syncRecentNeonates();
        }
      } catch (error) {
        console.error("[NeonatalLanding] Failed to reload recent neonates silently", error);
      }
    };
    watch(
      () => route.path,
      (newPath) => {
        if (newPath === "/home" || newPath === "/neonatal/home") {
          reloadRecentNeonates();
        }
      }
    );
    onMounted(() => {
      fetchStatistics();
    });
    __expose({
      reloadRecentNeonates
    });
    return (_ctx, _cache) => {
      const _component_NeonateCard = resolveComponent("NeonateCard");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            src: unref(IMAGES).banners.babyHand,
            alt: "baby-hand-banner",
            style: { "object-fit": "cover" }
          }, null, 8, _hoisted_3)
        ]),
        unref(isOfflineMode) ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(unref(IonIcon), { name: "cloud-offline-outline" }),
          createBaseVNode("span", null, toDisplayString(unref(getStatusMessage)), 1)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("h2", _hoisted_7, toDisplayString(statsTitle.value), 1),
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
                  (openBlock(true), createElementBlock(Fragment, null, renderList(statCards.value, (card) => {
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
                  (openBlock(true), createElementBlock(Fragment, null, renderList(statCards.value, (card) => {
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
        createBaseVNode("div", _hoisted_8, [
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
        createBaseVNode("div", _hoisted_9, [
          _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "section-title" }, "Recent Neonates", -1)),
          isLoadingNeonates.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
            (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
              return createBaseVNode("div", {
                key: `skeleton-${i}`,
                class: "neonate-skeleton"
              }, [
                createVNode(unref(IonSkeletonText), {
                  animated: true,
                  style: { "width": "60px", "height": "60px", "border-radius": "50%" }
                }),
                createBaseVNode("div", _hoisted_11, [
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
          ])) : recentNeonates.value.length ? (openBlock(), createElementBlock("div", _hoisted_12, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(visibleNeonates.value, (neonate) => {
              return openBlock(), createBlock(_component_NeonateCard, {
                key: neonate.id,
                neonate,
                "get-status-color": getStatusColor,
                onClick: handleNeonateClick,
                onEdit: handleNeonateEdit
              }, null, 8, ["neonate"]);
            }), 128)),
            hasMoreNeonates.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
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
          ])) : (openBlock(), createElementBlock("div", _hoisted_14, "No recent neonates to display."))
        ])
      ]);
    };
  }
});

const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a04f78f"]]);

export { LandingPage as L };
