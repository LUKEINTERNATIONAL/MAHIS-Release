import { s as defineComponent, y as openBlock, z as createElementBlock, A as createVNode, F as unref, M as IonSpinner, C as createBaseVNode, H as createCommentVNode, B as withCtx, aD as IonToolbar, aE as IonTitle, a5 as createTextVNode, be as IonButtons, N as IonButton, L as IonIcon, ag as close, I as IonHeader, J as Fragment, R as renderList, O as createBlock, ap as IonList, bb as IonCardHeader, ba as IonCardTitle, D as toDisplayString, cD as IonCardSubtitle, dF as ellipsisVertical, al as IonPopover, aG as IonContent, aq as IonItem, a7 as IonLabel, f as ref, K as modalController, w as watch, a2 as onMounted, x as resolveComponent, S as withDirectives, T as vShow, dG as IonLoading, a6 as IonInput, au as script, dr as calendar, bf as IonFooter, c as computed, at as format, dH as differenceInDays, af as IonRow, aA as IonCol, dI as createViewMonthGrid, dJ as createCalendar, dK as createViewDay, dL as createViewWeek, dM as createViewMonthAgenda, dN as so, dD as IonFab, dC as IonFabButton, d3 as add, a4 as normalizeClass, bu as IonPage, dO as parse, dP as startOfDay, dQ as addDays, dR as isSunday, dS as addWeeks, dT as startOfMonth, dU as addMonths } from './vendor-6OQ3r7Vr.js';
import { S as Service, G as toastSuccess, t as toastWarning, _ as _export_sfc, n as icons, F as DynamicButton, U as UserService, T as Toolbar, o as createModal } from '../index-_KKpPwbo.js';
import { v as voidReason } from './voidReason-DudYMZOM.js';
import { d as defineStore } from './pinia-BATJJgGh.js';
import { l as lodashExports } from './lodash-CuxQuz9v.js';

class SessionScheduleService extends Service {
  constructor() {
    super();
  }
  ENDPOINT = "eir/session_schedule";
  /**
   * @method create create a session schedule
   * @param session {SessionSchedule}
   * @returns @typeof Service
   */
  async create(session) {
    return Service.postJson(this.ENDPOINT, session);
  }
  /**
   * @method get get a session schedule by id
   * @param sessionId session id
   * @returns @typeof Service
   */
  async get(sessionId) {
    return Service.getJson(this.ENDPOINT, { session_id: sessionId });
  }
  async update(session, sessionId) {
    return Service.putJson(`${this.ENDPOINT}/${sessionId}`, session);
  }
  /**
   * @method delete delete a session schedule
   * @param sessionId 
   * @returns 
   */
  async delete(sessionId, reason) {
    return Service.delete(`${this.ENDPOINT}?id=${sessionId}`, { void_reason: reason });
  }
  /**
   * @method getSession get all session schedules paginated and filtered
   * @param _start_date
   * @param _end_date
   * @param _session_name
   * @param _page
   * @param _perPage
   * @returns @typeof Service
   */
  async getSessions(_start_date = "", _end_date = "", _session_name = "", _page = 1, _perPage = 10) {
    return Service.getJson(this.ENDPOINT);
  }
}

const _hoisted_1$3 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2$3 = { style: { "display": "flex", "justify-content": "space-between", "align-items": "center" } };
const _hoisted_3$3 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_4$2 = {
  slot: "start",
  class: "icon-color"
};
const _hoisted_5$2 = ["width", "height"];
const _hoisted_6$2 = {
  slot: "start",
  class: "icon-color"
};
const _hoisted_7$2 = ["width", "height"];
const _hoisted_8$2 = ["innerHTML"];
const _hoisted_9$2 = {
  slot: "start",
  class: "icon-color"
};
const _hoisted_10$2 = ["width", "height"];
const _hoisted_11$2 = {
  slot: "start",
  class: "icon-color"
};
const _hoisted_12$2 = ["width", "height"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ViewImmunizationSessionModal",
  props: {
    data: {
      type: Array,
      default: [],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const svgIconHeight = ref(40);
    const svgIconWidth = ref(40);
    const loading = ref(false);
    const popoverRefs = ref({});
    const getFormattedVaccines = (schedule) => {
      const vaccines = schedule.session_vaccines?.vaccines || [];
      return vaccines.map((vaccine) => `${vaccine.drug_name} <b>(${vaccine.missed_doses})</b>`).join(", ");
    };
    const handleEdit = async (schedule) => {
      modalController.dismiss({ edit: schedule });
    };
    const handleDelete = async (session) => {
      const modal = await modalController.create({
        component: voidReason,
        cssClass: "otherVitalsModal",
        componentProps: {
          data: props.data
        }
      });
      await modal.present();
      modal.onDidDismiss().then(async (data) => {
        if (data.data) {
          loading.value = true;
          const sessionSchedule = new SessionScheduleService();
          const response = await sessionSchedule.delete(Number(session.session_schedule_id), data.data.name);
          response ? toastSuccess("Immunization schedule deleted successfully!") : toastWarning("An error occurred, please try again later.");
          loading.value = false;
          modalController.dismiss({ update: true });
        }
      });
    };
    const closeModal = () => {
      modalController.dismiss();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          createVNode(unref(IonSpinner), { name: "bubbles" }),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
        ])) : createCommentVNode("", true),
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), null, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("View Immunization Session Schedule", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonButton), { onClick: closeModal }, {
                      default: withCtx(() => [
                        createVNode(unref(IonIcon), {
                          icon: unref(close),
                          color: "white"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _cache[2] || (_cache[2] = createBaseVNode("div", { slot: "start" }, [
                  createBaseVNode("div", { style: { "margin-left": "15px" } }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "25",
                      height: "25",
                      viewBox: "0 0 64 64"
                    }, [
                      createBaseVNode("path", {
                        fill: "currentColor",
                        d: "M33.208 25.544a3.616 3.616 0 0 1 4.548 2.347a3.62 3.62 0 0 1-2.346 4.549l-9.838 3.144a3.62 3.62 0 0 1-3.331-.597l-4.069-3.184l8.835 31.777H1.267V23.208a4.32 4.32 0 0 1 4.319-4.317h6.435c.918 0 1.764.293 2.46.836l10.711 8.379l8.016-2.563zM17.486 37.718h-3.904v-3.909H8.923v3.909h-3.89v4.673h3.89v3.889h4.659v-3.889h3.904zM9.655 16.951a7.77 7.77 0 0 0 0-15.538a7.77 7.77 0 0 0-7.769 7.768a7.77 7.77 0 0 0 7.769 7.77m45.715.028a7.78 7.78 0 0 0 7.779-7.777c0-4.301-3.486-7.787-7.779-7.787a7.783 7.783 0 0 0-7.781 7.787a7.78 7.78 0 0 0 7.781 7.777"
                      }),
                      createBaseVNode("path", {
                        fill: "currentColor",
                        d: "M53.02 19.069c-3.184 0-4.628 1.089-5.837 2.975l-.782 1.504l-4.547-1.328l.192-1.239l-10.857-2.432l-.304 1.354l-2.031-.452l.302-1.358l-.815-.18l-.932 4.16l.811.18l.311-1.358l2.031.454l-.304 1.361l10.86 2.432l.351-1.274l4.399.707l-11.335 21.8a3.545 3.545 0 0 0 1.588 4.757a3.553 3.553 0 0 0 4.764-1.586l9.456-18.351h1.551v32.386h11.147V19.07H53.021z"
                      })
                    ])
                  ])
                ], -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonContent), null, {
          default: withCtx(() => [
            props.data.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(props.data, (schedule, index) => {
              return openBlock(), createBlock(unref(IonList), {
                style: { "margin": "-10px" },
                key: schedule.id
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$3, [
                    createVNode(unref(IonCardHeader), { style: { "flex": "1" } }, {
                      default: withCtx(() => [
                        createBaseVNode("div", null, [
                          createVNode(unref(IonCardTitle), { class: "ion-text-wrap text-mobile" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(schedule.session_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(IonCardSubtitle), null, {
                            default: withCtx(() => [
                              createTextVNode(" Scheduled from: " + toDisplayString(schedule.start_date) + " to " + toDisplayString(schedule.end_date), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("div", _hoisted_3$3, [
                      createVNode(unref(IonButton), {
                        fill: "clear",
                        id: `click-trigger-${index}-`,
                        style: { "margin-left": "auto" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), { icon: unref(ellipsisVertical) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["id"])
                    ]),
                    createVNode(unref(IonPopover), {
                      "dismiss-on-select": "",
                      trigger: `click-trigger-${index}-`,
                      "trigger-action": "click",
                      ref_for: true,
                      ref: (el) => {
                        if (el) popoverRefs.value[index] = el;
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonContent), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonList), null, {
                              default: withCtx(() => [
                                createVNode(unref(IonItem), {
                                  button: "",
                                  onClick: ($event) => handleEdit(schedule)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonLabel), null, {
                                      default: withCtx(() => [..._cache[3] || (_cache[3] = [
                                        createTextVNode("Edit", -1)
                                      ])]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(IonItem), {
                                  button: "",
                                  onClick: ($event) => handleDelete(schedule)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IonLabel), null, {
                                      default: withCtx(() => [..._cache[4] || (_cache[4] = [
                                        createTextVNode("Cancel", -1)
                                      ])]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["trigger"])
                  ]),
                  createVNode(unref(IonList), { style: { "margin": "10px" } }, {
                    default: withCtx(() => [
                      createVNode(unref(IonItem), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_4$2, [
                            (openBlock(), createElementBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: svgIconWidth.value,
                              height: svgIconHeight.value,
                              viewBox: "0 0 20 20"
                            }, [..._cache[5] || (_cache[5] = [
                              createBaseVNode("g", { fill: "currentColor" }, [
                                createBaseVNode("g", { opacity: "0.2" }, [
                                  createBaseVNode("path", { d: "M9.75 7.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0" }),
                                  createBaseVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M6.75 8.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6",
                                    "clip-rule": "evenodd"
                                  }),
                                  createBaseVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M6.8 11.5A1.5 1.5 0 0 0 5.3 13v1.5a1 1 0 0 1-2 0V13a3.5 3.5 0 0 1 7 0v.5a1 1 0 1 1-2 0V13a1.5 1.5 0 0 0-1.5-1.5",
                                    "clip-rule": "evenodd"
                                  }),
                                  createBaseVNode("path", { d: "M12.75 7.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0" }),
                                  createBaseVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M15.75 8.75a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6",
                                    "clip-rule": "evenodd"
                                  }),
                                  createBaseVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M15.7 11.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1 1 0 1 0 2 0V13a3.5 3.5 0 0 0-7 0v.5a1 1 0 1 0 2 0V13a1.5 1.5 0 0 1 1.5-1.5",
                                    "clip-rule": "evenodd"
                                  }),
                                  createBaseVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M11.3 14.25a1.5 1.5 0 0 0-1.5 1.5v1.5a1 1 0 0 1-2 0v-1.5a3.5 3.5 0 0 1 7 0v1.5a1 1 0 1 1-2 0v-1.5a1.5 1.5 0 0 0-1.5-1.5",
                                    "clip-rule": "evenodd"
                                  }),
                                  createBaseVNode("path", { d: "M14.25 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" }),
                                  createBaseVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M11.25 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6",
                                    "clip-rule": "evenodd"
                                  }),
                                  createBaseVNode("path", { d: "M4.25 11.5h5v4h-5zm9 0h5v4h-5z" }),
                                  createBaseVNode("path", { d: "M9.25 13.5h4l.5 4.75h-5z" })
                                ]),
                                createBaseVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6",
                                  "clip-rule": "evenodd"
                                }),
                                createBaseVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0",
                                  "clip-rule": "evenodd"
                                }),
                                createBaseVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5",
                                  "clip-rule": "evenodd"
                                }),
                                createBaseVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6",
                                  "clip-rule": "evenodd"
                                })
                              ], -1)
                            ])], 8, _hoisted_5$2))
                          ]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [
                              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "ion-label-h3" }, "Expected Clients", -1)),
                              createBaseVNode("p", null, toDisplayString(schedule.session_vaccines?.total_clients) + " people (Under 5), " + toDisplayString(schedule.session_vaccines?.total_missed_doses) + " doses required ", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(IonItem), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6$2, [
                            (openBlock(), createElementBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: svgIconWidth.value,
                              height: svgIconHeight.value,
                              viewBox: "0 0 48 48"
                            }, [..._cache[7] || (_cache[7] = [
                              createBaseVNode("g", { fill: "currentColor" }, [
                                createBaseVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M6.818 14.5a1.157 1.157 0 0 1 0-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 1 1 1.637 1.636l-1.637 1.637l13.91 13.91a5.79 5.79 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296l-2.14-2.14l6.767-6.768l-11.77-11.77l-5.353 5.354L17.147 22h-2.829l-.955-.955l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 0 1-1.636 0m5.95-4.313l-2.08 2.08l4.09 4.09l2.08-2.08zM28.687 33.54a3.79 3.79 0 0 0 4.061.847l2.14-2.14a3.79 3.79 0 0 0-.848-4.06l-.504-.505l-5.353 5.354zm6.768 1.414q-.112.113-.229.216l.824.824a.314.314 0 1 0 .445-.444l-.824-.824a6 6 0 0 1-.216.228",
                                  "clip-rule": "evenodd"
                                }),
                                createBaseVNode("path", { d: "M16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1" }),
                                createBaseVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M8.66 37.689A12.12 12.12 0 0 0 15.5 42a12.12 12.12 0 0 0 6.84-4.31A12.35 12.35 0 0 0 25 29.997V26.4c0-.637-.25-1.247-.695-1.697a2.36 2.36 0 0 0-1.68-.703H8.376c-.63 0-1.234.253-1.68.703A2.4 2.4 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69M23 29.999v.004a10.35 10.35 0 0 1-2.228 6.445a10.13 10.13 0 0 1-5.273 3.492a10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 8 30.002V26.4c0-.113.045-.217.117-.29a.36.36 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.4.4 0 0 1 .117.29z",
                                  "clip-rule": "evenodd"
                                })
                              ], -1)
                            ])], 8, _hoisted_7$2))
                          ]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [
                              _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "ion-label-h3" }, "Vaccines", -1)),
                              createBaseVNode("p", {
                                innerHTML: getFormattedVaccines(schedule)
                              }, null, 8, _hoisted_8$2)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(IonItem), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_9$2, [
                            (openBlock(), createElementBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: svgIconWidth.value,
                              height: svgIconHeight.value,
                              viewBox: "0 0 32 32"
                            }, [..._cache[9] || (_cache[9] = [
                              createBaseVNode("path", {
                                fill: "currentColor",
                                d: "m27 25.586l-2-2V21h-2v3.414L25.586 27z"
                              }, null, -1),
                              createBaseVNode("path", {
                                fill: "currentColor",
                                d: "M24 31c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5m4-4h2V5c0-1.103-.897-2-2-2h-3v2h3z"
                              }, null, -1),
                              createBaseVNode("circle", {
                                cx: "9",
                                cy: "13",
                                r: "2",
                                fill: "currentColor"
                              }, null, -1),
                              createBaseVNode("circle", {
                                cx: "16",
                                cy: "13",
                                r: "2",
                                fill: "currentColor"
                              }, null, -1),
                              createBaseVNode("circle", {
                                cx: "23",
                                cy: "13",
                                r: "2",
                                fill: "currentColor"
                              }, null, -1),
                              createBaseVNode("path", {
                                fill: "currentColor",
                                d: "M7 23H4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3v2H4v16h3z"
                              }, null, -1)
                            ])], 8, _hoisted_10$2))
                          ]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [
                              _cache[11] || (_cache[11] = createBaseVNode("h3", { class: "ion-label-h3" }, "Session type", -1)),
                              createBaseVNode("p", null, [
                                createTextVNode(toDisplayString(schedule.session_type) + " (" + toDisplayString(schedule.repeat_type) + " repeat - ", 1),
                                createBaseVNode("span", null, [
                                  createBaseVNode("b", null, toDisplayString(schedule.frequency) + " times", 1)
                                ]),
                                _cache[10] || (_cache[10] = createTextVNode(")", -1))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(IonItem), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_11$2, [
                            (openBlock(), createElementBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: svgIconWidth.value,
                              height: svgIconHeight.value,
                              viewBox: "0 0 256 256"
                            }, [..._cache[12] || (_cache[12] = [
                              createBaseVNode("g", { fill: "currentColor" }, [
                                createBaseVNode("path", {
                                  d: "M112 168a32 32 0 1 1-32-32a32 32 0 0 1 32 32M80 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m96 104a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0-40a32 32 0 1 0-32-32a32 32 0 0 0 32 32",
                                  opacity: "0.2"
                                }),
                                createBaseVNode("path", { d: "M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0a67.3 67.3 0 0 0-21 14.31a67.3 67.3 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.7 7.7 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24" })
                              ], -1)
                            ])], 8, _hoisted_12$2))
                          ]),
                          createVNode(unref(IonLabel), null, {
                            default: withCtx(() => [
                              _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "ion-label-h3" }, "Assignees", -1)),
                              createBaseVNode("p", null, toDisplayString(schedule.assignees.map((assignee) => `${assignee.given_name}
                                ${assignee.family_name}`).join(", ")), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const ViewImmunizationSessionModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2367d70b"]]);

const initialImmunizationSessions = [
  {
    selectedData: {},
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Session name",
              value: "",
              name: "batch",
              eventType: "input",
              alertsErrorMassage: "",
              valueType: "text",
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Start Date",
              icon: icons.calenderPrimary,
              value: "",
              name: "start date",
              eventType: "input",
              alertsErrorMassage: "",
              required: true,
              isDatePopover: true,
              minDate: "",
              maxDate: "",
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "End date",
              icon: icons.calenderPrimary,
              value: "",
              name: "end date",
              eventType: "input",
              alertsErrorMassage: "",
              required: true,
              isDatePopover: true,
              minDate: "",
              maxDate: "",
              validationFunctionName: "required"
            }
          ]
        }
      ]
    }
  },
  {
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Session type",
              icon: icons.search,
              value: "",
              name: "product name",
              eventType: "input",
              alertsErrorMassage: "",
              selectedID: "",
              validationFunctionName: "required",
              isSingleSelect: true,
              trackBy: "id",
              multiSelectData: [
                {
                  id: "1",
                  name: "Static"
                },
                {
                  id: "2",
                  name: "Outreach"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: {},
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Repeat",
              icon: icons.search,
              value: "",
              name: "repeat",
              eventType: "input",
              alertsErrorMassage: "",
              selectedID: "",
              validationFunctionName: "required",
              isSingleSelect: true,
              trackBy: "id",
              multiSelectData: [
                {
                  id: "1",
                  name: "Never"
                },
                {
                  id: "2",
                  name: "Daily"
                },
                {
                  id: "3",
                  name: "Weekly"
                },
                {
                  id: "4",
                  name: "Monthly"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    selectedData: {},
    isFinishBtn: false,
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Assignees",
              icon: icons.search,
              value: [],
              name: "assignees",
              eventType: "input",
              alertsErrorMassage: "",
              selectedID: "",
              validationFunctionName: "required",
              isMultiSelect: true,
              trackBy: "user_id",
              multiSelectData: []
            }
          ]
        }
      ]
    }
  }
];
const useImmunizationSessionsStore = defineStore("immunizationSessionsStore", {
  state: () => ({
    immunizationSessions: [...initialImmunizationSessions]
  }),
  actions: {
    setImmunizationSessions(data) {
      this.immunizationSessions = data;
    },
    getImmunizationSessions() {
      const data = lodashExports.cloneDeep(initialImmunizationSessions);
      return [...data];
    },
    resetFieldValues() {
      const defaultValues = {
        string: "",
        number: 0,
        boolean: false,
        array: new Array(),
        object: {}
      };
      this.immunizationSessions.forEach((session) => {
        session.data.rowData.forEach((row) => {
          row.colData.forEach((col) => {
            col.value = defaultValues[typeof Array.isArray(col.value) ? "array" : typeof col.value];
          });
        });
      });
    }
  }
});

const IMMUNIZATION_SESSION_SCHEDULE_CREATE_SUCCESS = "Immunization session schedule created successfully";
const IMMUNIZATION_SESSION_SCHEDULE_CREATE_ERROR = "Immunization session schedule creation failed";

const useImmunizationSessionFieldsValidator = (sessionName, dateRange, selectedRepeatType, numberOfDays, selectedSessionType, selectedAssignees) => {
  const errors = [];
  if (!sessionName.trim()) {
    errors.push({ field: "sessionName", message: "Session name is required." });
  }
  if (Array.isArray(dateRange)) {
    if (dateRange.length !== 2) {
      errors.push({ field: "dateRange", message: "Date range is required." });
    } else {
      const [startDate, endDate] = dateRange;
      if (startDate > endDate) {
        errors.push({
          field: "dateRange",
          message: "Start date must be before end date."
        });
      }
    }
  } else if (typeof dateRange === "string" && dateRange.trim() === "") {
    errors.push({ field: "dateRange", message: "A date is required." });
  }
  if (!selectedRepeatType) {
    errors.push({ field: "repeatType", message: "Repeat type is required." });
  }
  if (selectedRepeatType !== "Never" && (!numberOfDays || numberOfDays < 1)) {
    const repeatMap = {
      Never: "Never",
      Daily: "days",
      Weekly: "weeks",
      Monthly: "months"
    };
    errors.push({
      field: "numberOfDays",
      message: `Number of ${repeatMap[selectedRepeatType]} is required.`
    });
  }
  if (!selectedSessionType) {
    errors.push({ field: "sessionType", message: "Session type is required." });
  }
  if (selectedAssignees.length === 0) {
    errors.push({
      field: "assignees",
      message: "At least one assignee is required."
    });
  }
  return {
    isValid: errors.length === 0,
    errors
  };
};

const _hoisted_1$2 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2$2 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_3$2 = { style: { "margin-top": "20px" } };
const _hoisted_4$1 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_5$1 = {
  key: 0,
  style: { "margin-top": "20px" }
};
const _hoisted_6$1 = { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } };
const _hoisted_7$1 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_8$1 = { style: { "margin-top": "20px" } };
const _hoisted_9$1 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_10$1 = { style: { "margin-top": "20px" } };
const _hoisted_11$1 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_12$1 = { style: { "margin-top": "20px" } };
const _hoisted_13$1 = {
  key: 0,
  class: "alerts_error"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddImmunizationSessionModal",
  setup(__props) {
    const immunizationSessionsStore = useImmunizationSessionsStore();
    const isSaving = ref(false);
    const dateRange = ref();
    const formatDate = (date) => format(new Date(date), "MM/dd/yyyy");
    const repeatTypes = ref([
      {
        id: "1",
        name: "Never"
      },
      {
        id: "2",
        name: "Daily"
      },
      {
        id: "3",
        name: "Weekly"
      },
      {
        id: "4",
        name: "Monthly"
      }
    ]);
    const selectedRepeatType = ref("");
    const sessionTypes = ref([
      {
        id: "1",
        name: "Static"
      },
      {
        id: "2",
        name: "Outreach"
      }
    ]);
    const selectedSessionType = ref("");
    const showNumberOfDays = ref(false);
    const numberOfDays = ref(1);
    const assigneesHolder = ref([]);
    const sessionName = ref("");
    const selectedAssignees = ref([]);
    const sessionNameError = ref("");
    const dateRangeError = ref("");
    const repeatTypeError = ref("");
    const numberOfDaysError = ref("");
    const sessionTypeError = ref("");
    const assigneesError = ref("");
    const isRangeOrSingle = computed(() => {
      if (selectedRepeatType.value === null) return true;
      if (selectedRepeatType.value.toLowerCase() === "daily") return false;
      return true;
    });
    const formattedDateRange = computed(() => {
      if (!dateRange.value) return "";
      if (Array.isArray(dateRange.value)) {
        const [start, end] = dateRange.value;
        if (!start && !end) return "";
        if (!start || !end) return formatDate(start || end);
        return `${formatDate(start)} - ${formatDate(end)}`;
      }
      return formatDate(dateRange.value);
    });
    const startDate = computed(() => {
      if (Array.isArray(dateRange.value) && dateRange.value !== void 0) {
        return formatDate(dateRange.value[0]);
      }
      if (!Array.isArray(dateRange.value) && dateRange.value !== void 0) {
        return dateRange.value !== void 0 ? formatDate(String(dateRange.value)) : "";
      }
      return "";
    });
    const endDate = computed(() => {
      if (Array.isArray(dateRange.value)) {
        return formatDate(dateRange.value[1]);
      }
      if (!Array.isArray(dateRange.value)) {
        return dateRange.value !== void 0 ? formatDate(String(dateRange.value)) : "";
      }
      return "";
    });
    const formattedRepeatText = computed(() => {
      const repeatMap = {
        "Never": "Never",
        "Daily": "days",
        "Weekly": "weeks",
        "Monthly": "months"
      };
      return repeatMap[selectedRepeatType.value] || "";
    });
    const numberOfDaysPlaceholder = computed(() => {
      return `Enter number of ${formattedRepeatText.value}`;
    });
    const createImmunizationSessionSchedule = async () => {
      const validationResult = useImmunizationSessionFieldsValidator(
        sessionName.value,
        dateRange.value || String,
        selectedRepeatType.value,
        numberOfDays.value,
        selectedSessionType.value,
        selectedAssignees.value
      );
      if (validationResult.isValid) {
        isSaving.value = true;
        const assignees = assigneesHolder.value.filter((user) => selectedAssignees.value.includes(user.username)).map((user) => user.id);
        const data = {
          session_name: sessionName.value,
          start_date: format(new Date(startDate.value), "yyyy-MM-dd"),
          end_date: format(new Date(endDate.value), "yyyy-MM-dd"),
          session_type: selectedSessionType.value,
          repeat: selectedRepeatType.value,
          assignees,
          frequency: numberOfDays.value
        };
        const sessionSchedule = new SessionScheduleService();
        await sessionSchedule.create(data);
        data ? toastSuccess(IMMUNIZATION_SESSION_SCHEDULE_CREATE_SUCCESS) : toastWarning(IMMUNIZATION_SESSION_SCHEDULE_CREATE_ERROR);
        isSaving.value = false;
        immunizationSessionsStore.resetFieldValues();
        modalController.dismiss("dismiss");
      } else {
        handleValidationErrors(validationResult.errors);
        toastWarning("Please make sure to fill all required fields");
        isSaving.value = false;
      }
    };
    const handleValidationErrors = (errors) => {
      const errorFieldsMap = {
        sessionName: sessionNameError,
        dateRange: dateRangeError,
        repeatType: repeatTypeError,
        numberOfDays: numberOfDaysError,
        sessionType: sessionTypeError,
        assignees: assigneesError
      };
      Object.keys(errorFieldsMap).forEach((field) => {
        errorFieldsMap[field].value = "";
      });
      errors.forEach((error) => {
        if (errorFieldsMap[error.field]) {
          errorFieldsMap[error.field].value = error.message;
        }
      });
    };
    const getAssignees = async (_filter = "") => {
      const assignees = await UserService.getUsersByRole({
        role: "Health Surveillance"
      });
      const modifiedAssignees = assignees.map((assignee) => ({
        ...assignee,
        name: assignee.username,
        id: assignee.user_id
      }));
      assigneesHolder.value = modifiedAssignees;
    };
    const dismiss = () => {
      modalController.dismiss({ update: true });
    };
    watch(selectedRepeatType, (newType, oldType) => {
      if (newType === oldType) return;
      const actions = {
        null: () => {
          showNumberOfDays.value = false;
        },
        Never: () => {
          showNumberOfDays.value = false;
        },
        Daily: () => {
          showNumberOfDays.value = true;
          numberOfDays.value = 1;
          dateRange.value = "";
        },
        Weekly: () => {
          showNumberOfDays.value = true;
          numberOfDays.value = 1;
          if (!Array.isArray(dateRange.value)) {
            dateRange.value = [];
          }
        },
        Monthly: () => {
          showNumberOfDays.value = true;
          numberOfDays.value = 1;
          if (!Array.isArray(dateRange.value)) {
            dateRange.value = [];
          }
        },
        default: () => {
          showNumberOfDays.value = true;
          numberOfDays.value = 1;
        }
      };
      (actions[newType] || actions.default)();
    });
    watch([sessionName, dateRange, selectedRepeatType, numberOfDays, selectedSessionType, selectedAssignees], () => {
      const validationResult = useImmunizationSessionFieldsValidator(
        sessionName.value,
        dateRange.value || String,
        selectedRepeatType.value,
        numberOfDays.value,
        selectedSessionType.value,
        selectedAssignees.value
      );
      handleValidationErrors(validationResult.errors);
    });
    const warnWeeklyRepeatType = () => {
      toastWarning("Weekly repeat type is not available for more than 7 days");
      dateRange.value = void 0;
    };
    watch(dateRange, (newDateRange) => {
      if (!Array.isArray(newDateRange) || newDateRange.length !== 2) return;
      const [startDate2, endDate2] = newDateRange;
      const daysDifference = differenceInDays(endDate2, startDate2);
      if (selectedRepeatType.value === "Weekly" && daysDifference > 7) {
        warnWeeklyRepeatType();
      }
    });
    onMounted(async () => {
      await getAssignees();
    });
    return (_ctx, _cache) => {
      const _component_ion_spinner = resolveComponent("ion-spinner");
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      const _component_ion_col = resolveComponent("ion-col");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createElementBlock(Fragment, null, [
        isSaving.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          createVNode(_component_ion_spinner, { name: "bubbles" }),
          _cache[9] || (_cache[9] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
        ])) : createCommentVNode("", true),
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), { class: "modalTitle" }, {
                  default: withCtx(() => [..._cache[10] || (_cache[10] = [
                    createTextVNode("Create Immunization Session Schedule", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  fill: "clear",
                  slot: "end",
                  onClick: _cache[0] || (_cache[0] = ($event) => dismiss())
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(close),
                      color: "white"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        withDirectives(createVNode(unref(IonLoading), {
          trigger: "open-loading",
          message: "Saving, please wait..."
        }, null, 512), [
          [vShow, isSaving.value]
        ]),
        createVNode(unref(IonContent), {
          fullscreen: true,
          class: "ion-padding",
          style: { "--background": "#fff" }
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              _cache[11] || (_cache[11] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Session name", -1)),
              createVNode(unref(IonInput), {
                clear: "",
                fill: "outline",
                placeholder: "Enter the session name",
                modelValue: sessionName.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sessionName.value = $event)
              }, null, 8, ["modelValue"]),
              sessionNameError.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(sessionNameError.value), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_3$2, [
              _cache[12] || (_cache[12] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Repeat type", -1)),
              createVNode(unref(script), {
                "hide-selected": false,
                "close-on-select": true,
                openDirection: "bottom",
                "prevent-autofocus": true,
                options: repeatTypes.value.map((value) => value.name),
                modelValue: selectedRepeatType.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedRepeatType.value = $event),
                searchable: false,
                "show-labels": false,
                placeholder: "Select repeat type"
              }, null, 8, ["options", "modelValue"]),
              repeatTypeError.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(repeatTypeError.value), 1)) : createCommentVNode("", true)
            ]),
            showNumberOfDays.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createBaseVNode("label", _hoisted_6$1, "Number of " + toDisplayString(formattedRepeatText.value), 1),
              createVNode(unref(IonInput), {
                modelValue: numberOfDays.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => numberOfDays.value = $event),
                clear: "",
                fill: "outline",
                placeholder: numberOfDaysPlaceholder.value
              }, null, 8, ["modelValue", "placeholder"]),
              numberOfDaysError.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(numberOfDaysError.value), 1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_8$1, [
              _cache[13] || (_cache[13] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Start & End Date", -1)),
              createVNode(_component_VueDatePicker, {
                required: "",
                position: "left",
                placeholder: "select start & end date",
                range: isRangeOrSingle.value,
                ui: { input: "datepicker" },
                format: "dd/MM/yyyy",
                modelValue: dateRange.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => dateRange.value = $event),
                "min-date": /* @__PURE__ */ new Date()
              }, {
                trigger: withCtx(() => [
                  createVNode(unref(IonInput), {
                    clear: "",
                    fill: "outline",
                    placeholder: "select start & end date",
                    value: `${formattedDateRange.value}`
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), {
                        slot: "start",
                        icon: unref(calendar)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["range", "modelValue", "min-date"]),
              dateRangeError.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, toDisplayString(dateRangeError.value), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_10$1, [
              _cache[14] || (_cache[14] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Session type", -1)),
              createVNode(unref(script), {
                "hide-selected": false,
                "close-on-select": true,
                openDirection: "bottom",
                "prevent-autofocus": true,
                options: sessionTypes.value.map((value) => value.name),
                modelValue: selectedSessionType.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedSessionType.value = $event),
                searchable: false,
                "show-labels": false,
                placeholder: "Select session type"
              }, null, 8, ["options", "modelValue"]),
              sessionTypeError.value ? (openBlock(), createElementBlock("div", _hoisted_11$1, toDisplayString(sessionTypeError.value), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_12$1, [
              _cache[15] || (_cache[15] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Assignees", -1)),
              createVNode(unref(script), {
                "hide-selected": false,
                "close-on-select": true,
                openDirection: "bottom",
                "prevent-autofocus": true,
                options: assigneesHolder.value.map((user) => user.username),
                modelValue: selectedAssignees.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedAssignees.value = $event),
                searchable: false,
                "show-labels": false,
                placeholder: "Select assignees"
              }, null, 8, ["options", "modelValue"]),
              assigneesError.value ? (openBlock(), createElementBlock("div", _hoisted_13$1, toDisplayString(assigneesError.value), 1)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), { collapse: "fade" }, {
          default: withCtx(() => [
            createVNode(_component_ion_row, null, {
              default: withCtx(() => [
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [
                    createVNode(unref(IonButton), {
                      id: "cbtn",
                      class: "btnText cbtn",
                      fill: "solid",
                      style: { "width": "130px" },
                      onClick: _cache[7] || (_cache[7] = ($event) => dismiss())
                    }, {
                      default: withCtx(() => [..._cache[16] || (_cache[16] = [
                        createTextVNode(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_ion_col, null, {
                  default: withCtx(() => [
                    createVNode(DynamicButton, {
                      onClick: _cache[8] || (_cache[8] = ($event) => createImmunizationSessionSchedule()),
                      name: "Save changes",
                      fill: "solid",
                      style: { "float": "right", "margin": "2%", "width": "130px" }
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const AddImmunizationSessionModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-097a281e"]]);

const _hoisted_1$1 = { class: "ion-padding" };
const _hoisted_2$1 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_3$1 = { style: { "margin-top": "20px" } };
const _hoisted_4 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_5 = {
  key: 0,
  style: { "margin-top": "20px" }
};
const _hoisted_6 = { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } };
const _hoisted_7 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_8 = { style: { "margin-top": "20px" } };
const _hoisted_9 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_10 = { style: { "margin-top": "20px" } };
const _hoisted_11 = {
  key: 0,
  class: "alerts_error"
};
const _hoisted_12 = { style: { "margin-top": "20px" } };
const _hoisted_13 = {
  key: 0,
  class: "alerts_error"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EditImmunizationSessionModal",
  props: { data: { required: true, type: Object } },
  setup(__props) {
    const props = __props;
    const isSaving = ref(false);
    const dateRange = ref();
    const repeatTypes = ref([
      {
        id: "1",
        name: "Never"
      },
      {
        id: "2",
        name: "Daily"
      },
      {
        id: "3",
        name: "Weekly"
      },
      {
        id: "4",
        name: "Monthly"
      }
    ]);
    const selectedRepeatType = ref("");
    const sessionTypes = ref([
      {
        id: "1",
        name: "Static"
      },
      {
        id: "2",
        name: "Outreach"
      }
    ]);
    const selectedSessionType = ref("");
    const showNumberOfDays = ref(false);
    const numberOfDays = ref(1);
    const assigneesHolder = ref([]);
    const sessionName = ref("");
    const selectedAssignees = ref([]);
    const sessionNameError = ref("");
    const dateRangeError = ref("");
    const repeatTypeError = ref("");
    const numberOfDaysError = ref("");
    const sessionTypeError = ref("");
    const assigneesError = ref("");
    const formatDate = (date) => format(new Date(date), "MM/dd/yyyy");
    const isRangeOrSingle = computed(() => {
      if (selectedRepeatType.value === null) return true;
      if (selectedRepeatType.value.toLowerCase() === "daily") return false;
      return true;
    });
    const formattedDateRange = computed(() => {
      if (!dateRange.value) return "";
      if (Array.isArray(dateRange.value)) {
        const [start, end] = dateRange.value;
        if (!start && !end) return "";
        if (!start || !end) return formatDate(start || end);
        return `${formatDate(start)} - ${formatDate(end)}`;
      }
      return formatDate(dateRange.value);
    });
    const startDate = computed(() => {
      if (Array.isArray(dateRange.value)) {
        return formatDate(dateRange.value[0]);
      }
      if (!Array.isArray(dateRange.value)) {
        return dateRange.value !== void 0 ? formatDate(String(dateRange.value)) : "";
      }
      return "";
    });
    const endDate = computed(() => {
      if (Array.isArray(dateRange.value)) {
        return formatDate(dateRange.value[1]);
      }
      if (!Array.isArray(dateRange.value)) {
        return dateRange.value !== void 0 ? formatDate(String(dateRange.value)) : "";
      }
      return "";
    });
    const formattedRepeatText = computed(() => {
      const repeatMap = {
        "Never": "Never",
        "Daily": "days",
        "Weekly": "weeks",
        "Monthly": "months"
      };
      return repeatMap[selectedRepeatType.value] || "";
    });
    const handleValidationErrors = (errors) => {
      const errorFieldsMap = {
        sessionName: sessionNameError,
        dateRange: dateRangeError,
        repeatType: repeatTypeError,
        numberOfDays: numberOfDaysError,
        sessionType: sessionTypeError,
        assignees: assigneesError
      };
      Object.keys(errorFieldsMap).forEach((field) => {
        errorFieldsMap[field].value = "";
      });
      errors.forEach((error) => {
        if (errorFieldsMap[error.field]) {
          errorFieldsMap[error.field].value = error.message;
        }
      });
    };
    const editImmunizationSessionSchedule = async () => {
      const validationResult = useImmunizationSessionFieldsValidator(
        sessionName.value,
        dateRange.value,
        selectedRepeatType.value,
        numberOfDays.value,
        selectedSessionType.value,
        selectedAssignees.value
      );
      if (validationResult.isValid) {
        isSaving.value = true;
        const assignees = assigneesHolder.value.filter((user) => selectedAssignees.value.includes(user.username)).map((user) => user.id);
        const data = {
          session_name: sessionName.value,
          start_date: format(new Date(startDate.value), "yyyy-MM-dd"),
          end_date: format(new Date(endDate.value), "yyyy-MM-dd"),
          session_type: selectedSessionType.value,
          repeat: selectedRepeatType.value,
          assignees,
          frequency: numberOfDays.value
        };
        const sessionSchedule = new SessionScheduleService();
        console.log(props.data);
        await sessionSchedule.update(data, props.data.session_schedule_id);
        data ? toastSuccess("Immunization session schedule updated successfully!") : toastWarning("An error occurred, please try again later");
        isSaving.value = false;
        modalController.dismiss("dismiss");
      } else {
        handleValidationErrors(validationResult.errors);
        toastWarning("Please make sure to fill all required fields");
        isSaving.value = false;
      }
    };
    const updateSessionData = () => {
      sessionName.value = props.data.session_name;
      dateRange.value = props.data.repeat_type.toLowerCase() == "daily" ? props.data.start_date : [new Date(props.data.start_date), new Date(props.data.end_date)];
      selectedRepeatType.value = props.data.repeat_type;
      selectedSessionType.value = props.data.session_type;
      numberOfDays.value = props.data.frequency;
      selectedAssignees.value = props.data.assignees.map((assignee) => assignee.username);
    };
    const getAssignees = async (_filter = "") => {
      const assignees = await UserService.getUsersByRole({
        role: "Health Surveillance"
      });
      const modifiedAssignees = assignees.map((assignee) => {
        return {
          ...assignee,
          name: assignee.username,
          id: assignee.user_id
        };
      });
      assigneesHolder.value = modifiedAssignees;
    };
    const dismiss = () => {
      modalController.dismiss({ update: false });
    };
    watch(selectedRepeatType, (newType, oldType) => {
      if (newType === oldType) return;
      const actions = {
        null: () => {
          showNumberOfDays.value = false;
        },
        Never: () => {
          showNumberOfDays.value = false;
        },
        Daily: () => {
          showNumberOfDays.value = true;
          numberOfDays.value = 1;
          dateRange.value = "";
        },
        Weekly: () => {
          showNumberOfDays.value = true;
          if (typeof dateRange.value === "string") {
            dateRange.value = [];
          }
        },
        Monthly: () => {
          showNumberOfDays.value = true;
          if (typeof dateRange.value === "string") {
            dateRange.value = [];
          }
        },
        default: () => {
          showNumberOfDays.value = true;
        }
      };
      (actions[newType] || actions.default)();
    });
    watch([sessionName, dateRange, selectedRepeatType, numberOfDays, selectedSessionType, selectedAssignees], () => {
      const validationResult = useImmunizationSessionFieldsValidator(
        sessionName.value,
        dateRange.value,
        selectedRepeatType.value,
        numberOfDays.value,
        selectedSessionType.value,
        selectedAssignees.value
      );
      handleValidationErrors(validationResult.errors);
    });
    const warnWeeklyRepeatType = () => {
      toastWarning("Weekly repeat type is not available for more than 7 days");
      dateRange.value = void 0;
    };
    watch(dateRange, (newDateRange) => {
      if (!Array.isArray(newDateRange) || newDateRange.length !== 2) return;
      const [startDate2, endDate2] = newDateRange;
      const daysDifference = differenceInDays(endDate2, startDate2);
      if (selectedRepeatType.value === "Weekly" && daysDifference > 7) {
        warnWeeklyRepeatType();
      }
    });
    onMounted(() => {
      getAssignees();
      updateSessionData();
    });
    return (_ctx, _cache) => {
      const _component_VueDatePicker = resolveComponent("VueDatePicker");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), { class: "modalTitle" }, {
                  default: withCtx(() => [..._cache[9] || (_cache[9] = [
                    createTextVNode("Edit Immunization Session Schedule", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButton), {
                  fill: "clear",
                  slot: "end",
                  onClick: _cache[0] || (_cache[0] = ($event) => dismiss())
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(close),
                      color: "white"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        withDirectives(createVNode(unref(IonLoading), {
          trigger: "open-loading",
          message: "Saving, please wait..."
        }, null, 512), [
          [vShow, isSaving.value]
        ]),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", null, [
            _cache[10] || (_cache[10] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Session name", -1)),
            createVNode(unref(IonInput), {
              clear: "",
              fill: "outline",
              placeholder: "Enter the session name",
              modelValue: sessionName.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sessionName.value = $event)
            }, null, 8, ["modelValue"]),
            sessionNameError.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(sessionNameError.value), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            _cache[11] || (_cache[11] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Repeat type", -1)),
            createVNode(unref(script), {
              "hide-selected": false,
              "close-on-select": true,
              openDirection: "bottom",
              "prevent-autofocus": true,
              options: repeatTypes.value.map((value) => value.name),
              modelValue: selectedRepeatType.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedRepeatType.value = $event),
              searchable: false,
              "show-labels": false,
              placeholder: "Select repeat type"
            }, null, 8, ["options", "modelValue"]),
            repeatTypeError.value ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(repeatTypeError.value), 1)) : createCommentVNode("", true)
          ]),
          showNumberOfDays.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("label", _hoisted_6, "Number of " + toDisplayString(formattedRepeatText.value), 1),
            createVNode(unref(IonInput), {
              modelValue: numberOfDays.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => numberOfDays.value = $event),
              clear: "",
              fill: "outline",
              placeholder: "Enter the number of days"
            }, null, 8, ["modelValue"]),
            numberOfDaysError.value ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(numberOfDaysError.value), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_8, [
            _cache[12] || (_cache[12] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Start & End Date", -1)),
            createVNode(_component_VueDatePicker, {
              required: "",
              position: "left",
              placeholder: "select start & end date",
              range: isRangeOrSingle.value,
              ui: { input: "datepicker" },
              format: "dd/MM/yyyy",
              modelValue: dateRange.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => dateRange.value = $event),
              "min-date": /* @__PURE__ */ new Date()
            }, {
              trigger: withCtx(() => [
                createVNode(unref(IonInput), {
                  clear: "",
                  fill: "outline",
                  placeholder: "select start & end date",
                  value: `${formattedDateRange.value}`
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      slot: "start",
                      icon: unref(calendar)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["range", "modelValue", "min-date"]),
            dateRangeError.value ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(dateRangeError.value), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_10, [
            _cache[13] || (_cache[13] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Session type", -1)),
            createVNode(unref(script), {
              "hide-selected": false,
              "close-on-select": true,
              openDirection: "bottom",
              "prevent-autofocus": true,
              options: sessionTypes.value.map((value) => value.name),
              modelValue: selectedSessionType.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedSessionType.value = $event),
              searchable: false,
              "show-labels": false,
              placeholder: "Select session type"
            }, null, 8, ["options", "modelValue"]),
            sessionTypeError.value ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(sessionTypeError.value), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_12, [
            _cache[14] || (_cache[14] = createBaseVNode("label", { style: { "font-size": "18px", "font-weight": "500", "margin-bottom": "10px" } }, "Assignees", -1)),
            createVNode(unref(script), {
              "hide-selected": false,
              "close-on-select": true,
              openDirection: "bottom",
              "prevent-autofocus": true,
              options: assigneesHolder.value.map((user) => user.username),
              modelValue: selectedAssignees.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedAssignees.value = $event),
              searchable: false,
              "show-labels": false,
              placeholder: "Select assignees"
            }, null, 8, ["options", "modelValue"]),
            assigneesError.value ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(assigneesError.value), 1)) : createCommentVNode("", true)
          ])
        ]),
        createVNode(unref(IonFooter), { collapse: "fade" }, {
          default: withCtx(() => [
            createVNode(unref(IonRow), null, {
              default: withCtx(() => [
                createVNode(unref(IonCol), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonButton), {
                      onClick: _cache[7] || (_cache[7] = ($event) => dismiss()),
                      id: "cbtn",
                      class: "btnText cbtn",
                      fill: "solid",
                      style: { "width": "130px" }
                    }, {
                      default: withCtx(() => [..._cache[15] || (_cache[15] = [
                        createTextVNode(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonCol), null, {
                  default: withCtx(() => [
                    createVNode(DynamicButton, {
                      onClick: _cache[8] || (_cache[8] = ($event) => editImmunizationSessionSchedule()),
                      name: "Save changes",
                      fill: "solid",
                      style: { "float": "right", "margin": "2%", "width": "130px" }
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { style: { "margin-top": "15px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ScheduleImmunizationSessions",
  setup(__props) {
    const schedules = ref([]);
    const isLoading = ref(false);
    const monthView = createViewMonthGrid();
    const calendarApp = createCalendar({
      selectedDate: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
      defaultView: monthView.name,
      isDark: false,
      isResponsive: true,
      views: [
        createViewMonthGrid(),
        createViewDay(),
        createViewWeek(),
        createViewMonthAgenda()
      ],
      events: [],
      callbacks: {
        onEventClick(calendarEvent) {
          const eventSchedules = schedules.value.filter(
            (event) => event.session_schedule_id === calendarEvent.id
          );
          onCalendarDayClick(eventSchedules);
        }
      }
    });
    async function getSessionSchedules() {
      isLoading.value = true;
      try {
        const sessionService = new SessionScheduleService();
        const data = await sessionService.getSessions();
        calendarApp.events.getAll().forEach((event) => {
          calendarApp.events.remove(event.id);
        });
        data.forEach((item) => {
          const datesMap = {
            "Weekly": generateDateRangesWeekly(
              format(new Date(item.start_date), "yyyy-MM-dd '08:00'"),
              format(new Date(item.end_date), "yyyy-MM-dd '16:00'"),
              item.frequency || 1
            ),
            "Never": [{ start_date: new Date(item.start_date), end_date: new Date(item.end_date) }],
            "Daily": generateDateRangesDaily(
              format(new Date(item.start_date), "yyyy-MM-dd '08:00'"),
              item.frequency || 1
            ),
            "Monthly": generateDateRangesMonthly(
              format(new Date(item.start_date), "yyyy-MM-dd '08:00'"),
              format(new Date(item.end_date), "yyyy-MM-dd '16:00'"),
              item.frequency || 1
            )
          };
          const repeatType = item.repeat_type?.toString() || "Never";
          datesMap[repeatType].forEach((range) => {
            calendarApp.events.add({
              id: Number(item.session_schedule_id),
              title: item.session_name,
              start: format(new Date(range.start_date), "yyyy-MM-dd HH:mm"),
              end: format(new Date(range.end_date), "yyyy-MM-dd HH:mm"),
              people: item.assignees?.map((assignee) => assignee.username),
              location: item.target
            });
          });
        });
        schedules.value = data;
      } catch (exception) {
        console.error(exception);
      } finally {
        isLoading.value = false;
      }
    }
    const generateDateRangesWeekly = (startDateStr, endDateStr, frequency) => {
      const startDate = parse(startDateStr, "yyyy-MM-dd HH:mm", /* @__PURE__ */ new Date());
      const endDate = parse(endDateStr, "yyyy-MM-dd HH:mm", /* @__PURE__ */ new Date());
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error("Invalid date format");
      }
      const dayDifference = differenceInDays(endDate, startDate);
      const dateRanges = [];
      let currentStartDate = startOfDay(startDate);
      let count = 0;
      while (count < frequency) {
        const currentEndDate = addDays(currentStartDate, dayDifference);
        if (!isSunday(currentStartDate)) {
          dateRanges.push({
            start_date: currentStartDate,
            end_date: currentEndDate
          });
          count++;
        }
        currentStartDate = addWeeks(currentStartDate, 1);
      }
      return dateRanges;
    };
    const generateDateRangesDaily = (startDateStr, frequency) => {
      const startDate = parse(startDateStr, "yyyy-MM-dd HH:mm", /* @__PURE__ */ new Date());
      if (isNaN(startDate.getTime())) {
        throw new Error("Invalid start date format");
      }
      const dateRanges = [];
      let currentStartDate = startDate;
      let count = 0;
      while (count < frequency) {
        if (!isSunday(currentStartDate)) {
          dateRanges.push({
            start_date: new Date(currentStartDate.setHours(0, 0, 0, 0)),
            end_date: new Date(currentStartDate.setHours(23, 59, 59, 999))
          });
          count++;
        }
        currentStartDate = addDays(currentStartDate, 1);
      }
      return dateRanges;
    };
    const generateDateRangesMonthly = (startDateStr, endDateStr, frequency) => {
      const startDate = parse(startDateStr, "yyyy-MM-dd HH:mm", /* @__PURE__ */ new Date());
      const endDate = parse(endDateStr, "yyyy-MM-dd HH:mm", /* @__PURE__ */ new Date());
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error("Invalid date format");
      }
      const dayDifference = differenceInDays(endDate, startDate);
      const dateRanges = [];
      let currentStartDate = startOfMonth(startDate);
      let count = 0;
      while (count < frequency) {
        const rangeEndDate = addDays(currentStartDate, dayDifference);
        if (!isSunday(currentStartDate)) {
          dateRanges.push({
            start_date: currentStartDate,
            end_date: rangeEndDate
          });
          count++;
        }
        currentStartDate = addMonths(currentStartDate, 1);
      }
      return dateRanges;
    };
    async function onCalendarDayClick(selectedCalendarSchedules) {
      if (selectedCalendarSchedules.length > 0) {
        const modal = await modalController.create({
          component: ViewImmunizationSessionModal,
          componentProps: {
            data: selectedCalendarSchedules
          },
          cssClass: "otherVitalsModal largeModal mobileView"
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data) {
          if (data.update) {
            getSessionSchedules();
          }
          if (data.edit) {
            showEditModal(data, "modal");
          }
        }
      }
    }
    const showEditModal = async (props, origin = "view") => {
      const modal = await modalController.create({
        component: _sfc_main$1,
        cssClass: "otherVitalsModal",
        componentProps: {
          data: props.edit,
          showName: ""
        }
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data === "dismiss") {
        getSessionSchedules();
      }
    };
    const openCreateModal = () => {
      const modal = createModal(AddImmunizationSessionModal, { class: "otherVitalsModal largeModal" });
      modal.then((update) => {
        if (update) getSessionSchedules();
      });
    };
    onMounted(async () => {
      await getSessionSchedules();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "heading" }, "Schedule Immunization Sessions", -1)),
                createBaseVNode("div", _hoisted_3, [
                  createVNode(unref(so), { "calendar-app": unref(calendarApp) }, null, 8, ["calendar-app"])
                ])
              ]),
              createVNode(unref(IonFab), {
                slot: "fixed",
                vertical: "bottom",
                horizontal: "end"
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonFabButton), {
                    onClick: _cache[0] || (_cache[0] = ($event) => openCreateModal())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), { icon: unref(add) }, null, 8, ["icon"])
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
      }, 8, ["class"]);
    };
  }
});

const ScheduleImmunizationSessions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2bb2908"]]);

export { ScheduleImmunizationSessions as default };
