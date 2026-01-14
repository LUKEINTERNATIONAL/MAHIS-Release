import { q as defineComponent, r as ref, aH as useRouter, d as computed, a2 as onMounted, v as resolveComponent, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, bI as IonCard, b9 as IonCardContent, x as createElementBlock, G as createCommentVNode, dt as IonImg, aB as IonTitle, a5 as createTextVNode, C as toDisplayString, a6 as IonInput, a7 as IonLabel, d1 as person, bP as withKeys, bu as eye, bt as eyeOff, N as IonButton, a8 as withModifiers, a4 as normalizeClass, br as IonPage } from './vendor-BizyHS9K.js';
import { L as useWorkerStore, ab as useUserStore, ac as isPasswordValid, t as toastWarning, V as UserService, G as toastSuccess, ad as InvalidCredentialsError, x as toastDanger, ae as FirstTimeLoginError, af as PasswordNeedsUpdateError, ag as setSessionDate, S as Service, a as useProgramStore, ah as AuthService, _ as _export_sfc } from '../index-B8cwm10e.js';
import { i as img } from './Img-RarZMYTn.js';
import { p as pseudo_recordCurrentLogin, g as getUserFacility } from './userService-F_Q93HDZ.js';
import { u as useWardsStore } from './wardsStore-CCCkIwj9.js';
import { d as defineStore } from './pinia-xTR-gbcT.js';

const useAuthStatusStore = defineStore("authStatusStore", {
  state: () => ({
    emrAuthenticated: false,
    miumAuthenticated: false,
    lastLoginAttempt: null,
    loginTimestamp: null,
    username: ""
  }),
  getters: {
    // Check if at least one system is authenticated
    isPartiallyAuthenticated: (state) => {
      return state.emrAuthenticated || state.miumAuthenticated;
    },
    // Check if both systems are authenticated
    isFullyAuthenticated: (state) => {
      return state.emrAuthenticated && state.miumAuthenticated;
    },
    // Get authentication status summary
    authenticationStatus: (state) => {
      if (state.emrAuthenticated && state.miumAuthenticated) {
        return "full";
      } else if (state.emrAuthenticated || state.miumAuthenticated) {
        return "partial";
      }
      return "none";
    },
    // Get list of authenticated systems
    authenticatedSystems: (state) => {
      const systems = [];
      if (state.emrAuthenticated) systems.push("EMR");
      if (state.miumAuthenticated) systems.push("MIUM");
      return systems;
    },
    // Get list of failed systems
    failedSystems: (state) => {
      const systems = [];
      if (!state.emrAuthenticated) systems.push("EMR");
      if (!state.miumAuthenticated) systems.push("MIUM");
      return systems;
    }
  },
  actions: {
    setEMRAuthenticated(status) {
      this.emrAuthenticated = status;
      if (status) {
        this.loginTimestamp = /* @__PURE__ */ new Date();
      }
    },
    setMIUMAuthenticated(status) {
      this.miumAuthenticated = status;
    },
    setUsername(username) {
      this.username = username;
    },
    recordLoginAttempt() {
      this.lastLoginAttempt = /* @__PURE__ */ new Date();
    },
    // Reset authentication state (for logout)
    clearAuthStatus() {
      this.emrAuthenticated = false;
      this.miumAuthenticated = false;
      this.loginTimestamp = null;
      this.lastLoginAttempt = null;
      this.username = "";
    },
    // Check if user has access to specific system
    hasSystemAccess(system) {
      return system === "EMR" ? this.emrAuthenticated : this.miumAuthenticated;
    }
  },
  persist: true
  // Persists authentication state across page refreshes
});

const _hoisted_1 = { class: "login-container" };
const _hoisted_2 = {
  key: 0,
  style: { "justify-content": "center", "display": "block" }
};
const _hoisted_3 = { style: { "font-size": "15px" } };
const _hoisted_4 = { style: { "font-size": "12px", "color": "#34af4d" } };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { style: { "font-size": "15px" } };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { style: { "text-align": "left" } };
const _hoisted_9 = { class: "signup-link" };
const _hoisted_10 = { style: { "display": "flex", "justify-content": "center", "align-items": "center" } };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { style: { "text-align": "left" } };
const _hoisted_13 = {
  key: 0,
  class: "password-requirements"
};
const _hoisted_14 = { class: "requirements-list" };
const _hoisted_15 = { class: "signup-link" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const version = ref("");
    const showPassword = ref(false);
    const showPasswordChange = ref(false);
    const mode = ref("test");
    const auth_service = ref(new AuthService());
    const changePasswordData = ref({
      username: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const showCurrentPassword = ref(false);
    const showNewPassword = ref(false);
    const showConfirmPassword = ref(false);
    const router = useRouter();
    const store = useWorkerStore();
    const userStore = useUserStore();
    const isChangePasswordFormValid = computed(() => {
      return changePasswordData.value.username.trim() !== "" && changePasswordData.value.currentPassword.trim() !== "" && changePasswordData.value.newPassword.trim() !== "" && changePasswordData.value.confirmPassword.trim() !== "" && isPasswordValid(changePasswordData.value.newPassword) && changePasswordData.value.newPassword === changePasswordData.value.confirmPassword && changePasswordData.value.newPassword !== changePasswordData.value.currentPassword;
    });
    const checkIfLoggedIn = () => {
      if (userStore.checkLoginStatus()) {
        router.push("/home");
      }
    };
    const setPrograms = async () => {
      store.terminate();
      await useWorkerStore().postData("SET_OFFLINE_PROGRAMS");
    };
    const setVersion = () => {
      version.value = localStorage.getItem("core_version") || "";
    };
    const facilityB = async () => {
      const store2 = useUserStore();
      const data = await getUserFacility();
      if (data) {
        store2.setUserFacilityName(data.name);
        store2.setFacilityLocation(data);
        localStorage.setItem("facility_code", data.code);
      }
    };
    const setAuthorizedPrograms = async () => {
      const userProgamrs = await auth_service.value.checkUserPrograms(void 0);
      if (userProgamrs?.programs) {
        useProgramStore().setAuthorizedPrograms(userProgamrs?.programs);
      }
    };
    const togglePasswordChange = () => {
      showPasswordChange.value = !showPasswordChange.value;
      if (showPasswordChange.value) {
        changePasswordData.value = {
          username: "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        };
      }
    };
    const toggleHelp = () => {
      toastWarning("Help functionality to be implemented");
    };
    const changePasswordAction = async () => {
      if (!isChangePasswordFormValid.value) {
        toastWarning("Please complete all fields correctly");
        toastWarning(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
      }
      try {
        const response = await auth_service.value.requestLogin(changePasswordData.value.currentPassword, changePasswordData.value.username);
        if (response) {
          const { authorization } = response;
          const { token, user } = authorization;
          if (user) {
            localStorage.setItem("apiKey", token);
            await UserService.updateUser(user.user_id, { password: changePasswordData.value.newPassword });
            toastSuccess("Password changed successfully!");
            await auth_service.value.requestLogin(changePasswordData.value.newPassword, changePasswordData.value.username);
            changePasswordData.value = {
              username: "",
              currentPassword: "",
              newPassword: "",
              confirmPassword: ""
            };
            showPasswordChange.value = false;
            localStorage.setItem("apiKey", "");
          }
        }
      } catch (e) {
        if (e instanceof InvalidCredentialsError) {
          toastDanger("Current password is incorrect");
        } else {
          toastDanger(`Error changing password: ${e}`);
        }
      }
    };
    const loginEMR = async () => {
      const authStatusStore = useAuthStatusStore();
      if (!username.value || !password.value) {
        return { success: false, error: null, validationError: true };
      }
      auth_service.value.setUsername(username.value);
      authStatusStore.setUsername(username.value);
      try {
        await auth_service.value.login(password.value);
        await facilityB();
        await setAuthorizedPrograms();
        await setSessionDate();
        await pseudo_recordCurrentLogin();
        await useWardsStore().fetchWards();
        authStatusStore.setEMRAuthenticated(true);
        userStore.setLoginStatus(true);
        return { success: true, error: null };
      } catch (e) {
        authStatusStore.setEMRAuthenticated(false);
        userStore.setLoginStatus(false);
        return { success: false, error: e };
      }
    };
    const loginMIUM = async () => {
      const useOffline = Service.getLanConnectionStatus() || Service.getPouchDbStatus();
      if (useOffline) return { success: true, error: null };
      const authStatusStore = useAuthStatusStore();
      if (!username.value || !password.value) {
        return { success: false, error: null, validationError: true };
      }
      auth_service.value.setUsername(username.value);
      try {
        await auth_service.value.loginToMIUM(password.value);
        authStatusStore.setMIUMAuthenticated(true);
        return { success: true, error: null };
      } catch (e) {
        authStatusStore.setMIUMAuthenticated(false);
        return { success: false, error: e };
      }
    };
    const LoginAction = async () => {
      const authStatusStore = useAuthStatusStore();
      if (!username.value || !password.value) {
        toastWarning("Complete form to log in");
        return;
      }
      authStatusStore.recordLoginAttempt();
      const [emrResult, miumResult] = await Promise.allSettled([loginEMR(), loginMIUM()]);
      const emrSuccess = emrResult.status === "fulfilled" && emrResult.value.success;
      const miumSuccess = miumResult.status === "fulfilled" && miumResult.value.success;
      if (emrSuccess) {
        router.push("/home");
      } else if (!emrSuccess && !miumSuccess) {
        const emrError = emrResult.status === "fulfilled" ? emrResult.value.error : emrResult.reason;
        if (emrError instanceof InvalidCredentialsError) {
          toastDanger("Invalid username or password");
        } else if (emrError instanceof FirstTimeLoginError) {
          togglePasswordChange();
          toastDanger("Please change your password", 5e4);
        } else if (emrError instanceof PasswordNeedsUpdateError) {
          togglePasswordChange();
          toastDanger("Your password has expired. Please change your password", 5e4);
        } else {
          toastDanger(`${emrError}`, 5e4);
        }
      } else if (!emrSuccess && miumSuccess) {
        emrResult.status === "fulfilled" ? emrResult.value.error : emrResult.reason;
        try {
          const authDataString = localStorage.getItem("memisAuthData");
          const authData = JSON.parse(authDataString);
          const memisScheme = `memis?${authData.memis_auth}`;
          navigator(memisScheme);
        } catch (error) {
          console.error(error);
        }
      }
    };
    const navigator = (url) => {
      router.push(url);
    };
    onMounted(async () => {
      checkIfLoggedIn();
      userStore.setLoginStatus(false);
      await auth_service.value.loadConfig();
      setVersion();
      await setPrograms();
    });
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(unref(IonContent), { class: "ion-padding login-page" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(unref(IonCard), { style: { "background-color": "#fff" } }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonImg), {
                          class: "login_img",
                          src: unref(img)("mw.png"),
                          id: "logo"
                        }, null, 8, ["src"]),
                        createVNode(unref(IonTitle), { class: "login-title" }, {
                          default: withCtx(() => [
                            mode.value === "development" || mode.value === "test" ? (openBlock(), createElementBlock("span", _hoisted_2, [
                              createBaseVNode("div", null, [
                                _cache[11] || (_cache[11] = createTextVNode(" MaHIS ", -1)),
                                createBaseVNode("small", _hoisted_3, "(v" + toDisplayString(version.value) + ")", 1)
                              ]),
                              createBaseVNode("div", _hoisted_4, "(" + toDisplayString(mode.value) + ")", 1)
                            ])) : (openBlock(), createElementBlock("span", _hoisted_5, [
                              _cache[12] || (_cache[12] = createTextVNode(" MaHIS ", -1)),
                              createBaseVNode("small", _hoisted_6, "(v" + toDisplayString(version.value) + ")", 1)
                            ]))
                          ]),
                          _: 1
                        }),
                        !showPasswordChange.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createBaseVNode("span", _hoisted_8, [
                            createVNode(unref(IonInput), {
                              value: username.value,
                              onIonInput: _cache[0] || (_cache[0] = ($event) => username.value = $event.target.value || ""),
                              type: "text",
                              label: "Username",
                              ref: "usernameRef",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter Username",
                              class: "input-fields",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { slot: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, { icon: unref(person) }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value"]),
                            createVNode(unref(IonInput), {
                              value: password.value,
                              onIonInput: _cache[2] || (_cache[2] = ($event) => password.value = $event.target.value || ""),
                              type: showPassword.value ? "text" : "password",
                              label: "Password",
                              ref: "passwordRef",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter Password",
                              class: "input-fields",
                              required: "",
                              onKeydown: withKeys(LoginAction, ["enter"])
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { slot: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      icon: showPassword.value ? unref(eye) : unref(eyeOff),
                                      onClick: _cache[1] || (_cache[1] = ($event) => showPassword.value = !showPassword.value)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "type"])
                          ]),
                          createVNode(unref(IonButton), {
                            expand: "block",
                            style: { "--background": "var(--ion-color-primary)", "font-size": "var(--ion-button-font)" },
                            onClick: LoginAction,
                            class: "login-button"
                          }, {
                            default: withCtx(() => [..._cache[13] || (_cache[13] = [
                              createTextVNode(" Login ", -1)
                            ])]),
                            _: 1
                          }),
                          createBaseVNode("p", _hoisted_9, [
                            _cache[17] || (_cache[17] = createTextVNode(" For help click ", -1)),
                            createBaseVNode("a", {
                              href: "#",
                              onClick: withModifiers(toggleHelp, ["prevent"])
                            }, "Here"),
                            _cache[18] || (_cache[18] = createTextVNode()),
                            _cache[19] || (_cache[19] = createBaseVNode("br", null, null, -1)),
                            createBaseVNode("div", _hoisted_10, [
                              createVNode(unref(IonButton), {
                                fill: "clear",
                                size: "small",
                                onClick: togglePasswordChange,
                                style: { "display": "inline", "--padding-start": "2px", "--padding-end": "2px" }
                              }, {
                                default: withCtx(() => [..._cache[14] || (_cache[14] = [
                                  createBaseVNode("span", { style: { "text-decoration": "underline", "color": "#34af4d", "cursor": "pointer" } }, " Change Password ", -1)
                                ])]),
                                _: 1
                              }),
                              _cache[16] || (_cache[16] = createTextVNode(" | ", -1)),
                              createVNode(unref(IonButton), {
                                fill: "clear",
                                size: "small",
                                onClick: _cache[3] || (_cache[3] = ($event) => navigator("/downloads")),
                                style: { "display": "inline", "--padding-start": "2px", "--padding-end": "2px" }
                              }, {
                                default: withCtx(() => [..._cache[15] || (_cache[15] = [
                                  createBaseVNode("span", { style: { "text-decoration": "underline", "color": "#34af4d", "cursor": "pointer" } }, " Download MaHIS ", -1)
                                ])]),
                                _: 1
                              })
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        showPasswordChange.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                          _cache[22] || (_cache[22] = createBaseVNode("h3", { style: { "text-align": "center", "margin-bottom": "20px", "color": "#34af4d" } }, "Change Password", -1)),
                          createBaseVNode("span", _hoisted_12, [
                            createVNode(unref(IonInput), {
                              value: changePasswordData.value.username,
                              onIonInput: _cache[4] || (_cache[4] = ($event) => changePasswordData.value.username = $event.target.value || ""),
                              type: "text",
                              label: "Username",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter Username",
                              class: "input-fields",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { slot: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, { icon: unref(person) }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value"]),
                            createVNode(unref(IonInput), {
                              value: changePasswordData.value.currentPassword,
                              onIonInput: _cache[6] || (_cache[6] = ($event) => changePasswordData.value.currentPassword = $event.target.value || ""),
                              type: showCurrentPassword.value ? "text" : "password",
                              label: "Current Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter Current Password",
                              class: "input-fields",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { slot: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      icon: showCurrentPassword.value ? unref(eye) : unref(eyeOff),
                                      onClick: _cache[5] || (_cache[5] = ($event) => showCurrentPassword.value = !showCurrentPassword.value)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "type"]),
                            createVNode(unref(IonInput), {
                              value: changePasswordData.value.newPassword,
                              onIonInput: _cache[8] || (_cache[8] = ($event) => changePasswordData.value.newPassword = $event.target.value || ""),
                              type: showNewPassword.value ? "text" : "password",
                              label: "New Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Enter New Password",
                              class: normalizeClass(["input-fields", { "invalid-input": changePasswordData.value.newPassword && !unref(isPasswordValid)(changePasswordData.value.newPassword) }]),
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { slot: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      icon: showNewPassword.value ? unref(eye) : unref(eyeOff),
                                      onClick: _cache[7] || (_cache[7] = ($event) => showNewPassword.value = !showNewPassword.value)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "type", "class"]),
                            createVNode(unref(IonInput), {
                              value: changePasswordData.value.confirmPassword,
                              onIonInput: _cache[10] || (_cache[10] = ($event) => changePasswordData.value.confirmPassword = $event.target.value || ""),
                              type: showConfirmPassword.value ? "text" : "password",
                              label: "Confirm New Password",
                              "label-placement": "floating",
                              fill: "outline",
                              placeholder: "Confirm New Password",
                              class: normalizeClass(["input-fields", {
                                "invalid-input": changePasswordData.value.confirmPassword && changePasswordData.value.newPassword !== changePasswordData.value.confirmPassword
                              }]),
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonLabel), { slot: "end" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ion_icon, {
                                      icon: showConfirmPassword.value ? unref(eye) : unref(eyeOff),
                                      onClick: _cache[9] || (_cache[9] = ($event) => showConfirmPassword.value = !showConfirmPassword.value)
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["value", "type", "class"])
                          ]),
                          changePasswordData.value.newPassword ? (openBlock(), createElementBlock("div", _hoisted_13, [
                            _cache[20] || (_cache[20] = createBaseVNode("p", { class: "requirements-title" }, "Password Requirements:", -1)),
                            createBaseVNode("ul", _hoisted_14, [
                              createBaseVNode("li", {
                                class: normalizeClass({ valid: changePasswordData.value.newPassword.length >= 8 })
                              }, "At least 8 characters", 2),
                              createBaseVNode("li", {
                                class: normalizeClass({ valid: /[A-Z]/.test(changePasswordData.value.newPassword) })
                              }, "One uppercase letter", 2),
                              createBaseVNode("li", {
                                class: normalizeClass({ valid: /[0-9]/.test(changePasswordData.value.newPassword) })
                              }, "One number", 2),
                              createBaseVNode("li", {
                                class: normalizeClass({ valid: /[@#$%^&+=*!-]/.test(changePasswordData.value.newPassword) })
                              }, " One special character (@#$%^&+=*!-) ", 2),
                              createBaseVNode("li", {
                                class: normalizeClass({
                                  valid: changePasswordData.value.newPassword !== changePasswordData.value.currentPassword && changePasswordData.value.currentPassword !== ""
                                })
                              }, " Different from current password ", 2)
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode(unref(IonButton), {
                            expand: "block",
                            style: { "--background": "var(--ion-color-primary)", "font-size": "var(--ion-button-font)" },
                            onClick: changePasswordAction,
                            class: "login-button",
                            disabled: !isChangePasswordFormValid.value
                          }, {
                            default: withCtx(() => [..._cache[21] || (_cache[21] = [
                              createTextVNode(" Change Password ", -1)
                            ])]),
                            _: 1
                          }, 8, ["disabled"]),
                          createBaseVNode("p", _hoisted_15, [
                            createBaseVNode("a", {
                              href: "#",
                              onClick: withModifiers(togglePasswordChange, ["prevent"])
                            }, "Back to Login")
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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

const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e91a4a75"]]);

export { Login as default };
