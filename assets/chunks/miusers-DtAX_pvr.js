import { e6 as createAvatar, e7 as initials, s as defineComponent, w as watch, a2 as onMounted, y as openBlock, O as createBlock, F as unref, bF as IonModal, B as withCtx, A as createVNode, I as IonHeader, aD as IonToolbar, aE as IonTitle, a5 as createTextVNode, D as toDisplayString, be as IonButtons, N as IonButton, L as IonIcon, G as closeCircleOutline, aG as IonContent, C as createBaseVNode, aq as IonItem, a4 as normalizeClass, a6 as IonInput, z as createElementBlock, H as createCommentVNode, ae as IonCheckbox, a7 as IonLabel, ah as IonRadioGroup, ai as IonRadio, bN as IonSelect, J as Fragment, R as renderList, bM as IonSelectOption, a8 as withModifiers, bf as IonFooter, M as IonSpinner, f as ref, p as dayjs, c as computed, bK as IonCard, bb as IonCardHeader, e2 as IonAvatar, ba as IonCardTitle, cD as IonCardSubtitle, d2 as person, dr as calendar, bO as IonChip, cn as checkmarkCircle, cO as closeCircle, bd as IonCardContent, e8 as briefcase, e9 as apps, ea as business, eb as time, ec as create, ed as pause, ee as play, aw as trash, aN as people, cB as toastController, W as alertController, aA as IonCol, bS as IonSearchbar, dp as personAdd, af as IonRow, dg as IonSegment, dh as IonSegmentButton, a3 as onUnmounted, bu as IonPage } from './vendor-6OQ3r7Vr.js';
import { N as NavigationMenu } from './NavigationMenu-D77E_jd2.js';
import { E as EIRreportsStore } from './EIRreportsStore-Bc7R7CTG.js';
import { B as BottomNavBar } from './bottomNavBar-BJlFw2cD.js';
import { ai as ProgramService, aG as MIUMService, U as UserService, aH as ChangePasswordComponent, aI as _sfc_main$4, $ as SelectFacility, H as HisDate, x as toastDanger, ac as isPasswordValid, _ as _export_sfc, aJ as MIUMUserService } from '../index-CgCYPred.js';
import { l as lodashExports } from './lodash-CuxQuz9v.js';

function useAvatar() {
  const getRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const getAvatarUrl = (name, size = 128) => {
    const fullName = `${name}`;
    const avatar = createAvatar(initials, {
      seed: fullName,
      size,
      // Pass a randomly generated color. DiceBear takes an array of colors.
      backgroundColor: [getRandomHexColor()]
    });
    const svgString = avatar.toString();
    const encodedSvgString = unescape(encodeURIComponent(svgString));
    return `data:image/svg+xml;base64,${btoa(encodedSvgString)}`;
  };
  return { getAvatarUrl };
}

const MIUMProgramService = () => {
  const PROGRAM_RESOURCE = "programs";
  const service = MIUMService;
  async function getPrograms(params) {
    const response = await service.getAll(PROGRAM_RESOURCE, params);
    if (response?.ok) {
      return await response.json();
    }
    throw new Error("Failed to retrieve programs.");
  }
  async function getEMRPrograms() {
    const user_programs = await ProgramService.getAllPrograms();
    const temp_array = [];
    user_programs.forEach((item) => {
      temp_array.push({
        name: item.name,
        other: item,
        selected: false
      });
    });
    return user_programs;
  }
  return {
    getPrograms,
    getEMRPrograms
  };
};
const MIUMProgramService$1 = MIUMProgramService();

const MIUMUserRoleService = () => {
  const USER_ROLE_RESOURCE = "roles";
  const service = MIUMService;
  async function getUserRoles(params) {
    const response = await service.getAll(USER_ROLE_RESOURCE, params);
    if (response?.ok) {
      return await response.json();
    }
    throw new Error("Failed to retrieve user roles.");
  }
  async function getEMRUserRoles() {
    const user_roles = await UserService.getAllRoles();
    return user_roles;
  }
  return {
    getUserRoles,
    getEMRUserRoles
  };
};
const MIUMUserRoleService$1 = MIUMUserRoleService();

const _hoisted_1$2 = {
  key: 0,
  class: "error-message"
};
const _hoisted_2$1 = {
  key: 1,
  class: "error-message"
};
const _hoisted_3$1 = {
  key: 2,
  class: "error-message"
};
const _hoisted_4$1 = {
  key: 3,
  class: "error-message"
};
const _hoisted_5$1 = {
  key: 5,
  class: "password-section"
};
const _hoisted_6$1 = {
  class: "ion-padding",
  slot: "content",
  style: { "background": "rgba(255, 255, 255, 0.5)", "border-bottom-left-radius": "10px", "border-bottom-right-radius": "10px" }
};
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = {
  key: 0,
  class: "error-message"
};
const _hoisted_10$1 = { style: { "display": "flex", "gap": "20px", "margin-top": "8px" } };
const _hoisted_11$1 = {
  key: 6,
  class: "error-message"
};
const _hoisted_12$1 = {
  key: 7,
  class: "error-message"
};
const _hoisted_13$1 = {
  key: 8,
  class: "error-message"
};
const _hoisted_14$1 = { class: "form_el" };
const DEFAULT_PROGRAM_ID = 36;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserFormModal",
  props: {
    isOpen: { type: Boolean },
    editingUser: {},
    isSaving: { type: Boolean }
  },
  emits: ["save", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const show_location_error = ref(false);
    const FacilityData = ref(null);
    const selectedDistrictIds = ref([]);
    const selected_location = ref({});
    const dateOfBirth = ref();
    const propDate = ref();
    const isChangingPassword = ref(false);
    const validationErrors = ref({
      name: false,
      firstName: false,
      lastName: false,
      dateOfBirth: false,
      gender: false,
      roles: false,
      programs: false,
      usernameExists: false
    });
    const formData = ref({
      name: "",
      firstName: "",
      lastName: "",
      password: "",
      gender: "",
      roles: [],
      programs: []
    });
    const availablePrograms = ref([]);
    const availableRoles = ref([]);
    function dateUpdated(data) {
      const formatedDate = data.value.formattedDate;
      const dateObj = dayjs(HisDate.toStandardHisFormat(formatedDate));
      dateOfBirth.value = dateObj.toISOString();
      console.log(dateOfBirth.value);
      validationErrors.value.dateOfBirth = false;
    }
    function validateFacility() {
      const validCodes = ["MZ161098", "BT241293", "LL040529", "MG200829", "MG200829"];
      if (FacilityData.value && validCodes.includes(FacilityData.value.code)) {
        show_location_error.value = false;
      } else {
        show_location_error.value = true;
        toastDanger("Please select a valid facility");
      }
    }
    const facilitySelected = (data) => {
      FacilityData.value = data.selected_location;
      validateFacility();
    };
    const validateForm = () => {
      validationErrors.value.name = false;
      validationErrors.value.firstName = false;
      validationErrors.value.lastName = false;
      validationErrors.value.dateOfBirth = false;
      validationErrors.value.gender = false;
      validationErrors.value.roles = false;
      validationErrors.value.programs = false;
      let isValid = true;
      if (!formData.value.name.trim()) {
        validationErrors.value.name = true;
        isValid = false;
      }
      if (!formData.value.firstName.trim()) {
        validationErrors.value.firstName = true;
        isValid = false;
      }
      if (!formData.value.lastName.trim()) {
        validationErrors.value.lastName = true;
        isValid = false;
      }
      if (!dateOfBirth.value) {
        validationErrors.value.dateOfBirth = true;
        isValid = false;
      }
      if (!formData.value.gender) {
        validationErrors.value.gender = true;
        isValid = false;
      }
      if (!formData.value.roles.length) {
        validationErrors.value.roles = true;
        isValid = false;
      }
      if (!formData.value.programs.length) {
        validationErrors.value.programs = true;
        isValid = false;
      }
      return isValid;
    };
    const preselectDefaultProgram = () => {
      if (!props.editingUser) {
        const defaultProgram = availablePrograms.value.find(
          (p) => p.program_id === DEFAULT_PROGRAM_ID
        );
        if (defaultProgram) {
          formData.value.programs = [defaultProgram.name];
          validationErrors.value.programs = false;
        }
      }
    };
    const fetchPrograms = async () => {
      try {
        const service = MIUMProgramService$1;
        const programs = await service.getEMRPrograms();
        const filteredPrograms = programs.filter((p) => {
          return p.program_id === DEFAULT_PROGRAM_ID;
        });
        availablePrograms.value = filteredPrograms.map((p) => ({
          program_id: p.program_id,
          name: p.name
        }));
        preselectDefaultProgram();
      } catch (error) {
        console.error("Failed to fetch programs:", error);
        toastDanger("Failed to load programs.");
      }
    };
    const fetchRoles = async () => {
      try {
        const service = MIUMUserRoleService$1;
        const roles = await service.getUserRoles();
        availableRoles.value = roles.map((r) => r.name);
      } catch (error) {
        toastDanger("Failed to load roles.");
      }
    };
    const validateUsernameExistence = async (username) => {
      const isNameChanged = props.editingUser ? props.editingUser.name !== username : true;
      if (!username.trim() || !isNameChanged) {
        validationErrors.value.usernameExists = false;
        return true;
      }
      try {
        const does_username_exist = await UserService.doesUsernameExist(username);
        const exists = does_username_exist.exists === true;
        validationErrors.value.usernameExists = exists;
        return !exists;
      } catch (error) {
        console.error("Error checking username existence:", error);
        toastDanger("Failed to verify username availability. Proceeding with caution.");
        validationErrors.value.usernameExists = false;
        return true;
      }
    };
    watch(() => formData.value.name, async (newVal) => {
      if (newVal.trim()) {
        validationErrors.value.name = false;
        await validateUsernameExistence(newVal);
      } else {
        validationErrors.value.name = true;
        validationErrors.value.usernameExists = false;
      }
    });
    watch(() => formData.value.firstName, () => {
      if (formData.value.firstName.trim()) validationErrors.value.firstName = false;
    });
    watch(() => formData.value.lastName, () => {
      if (formData.value.lastName.trim()) validationErrors.value.lastName = false;
    });
    watch(() => formData.value.gender, () => {
      if (formData.value.gender) validationErrors.value.gender = false;
    });
    watch(() => formData.value.roles, () => {
      if (formData.value.roles.length > 0) validationErrors.value.roles = false;
    });
    watch(() => formData.value.programs, () => {
      if (formData.value.programs.length > 0) validationErrors.value.programs = false;
    });
    watch(() => props.isOpen, (isOpen) => {
      if (isOpen && !props.editingUser) {
        clearForm();
        preselectDefaultProgram();
      }
    });
    const handleDismiss = () => {
      emit("close");
    };
    const passwordErrorMsgs = [
      "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character (@#$%^&+=*!-), without spaces",
      "Password does not match"
    ];
    const password_input_properties = [
      {
        placeHolder: "new password",
        dataHandler: passwordInputUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: passwordErrorMsgs[0]
      },
      {
        placeHolder: "repeat password",
        dataHandler: passwordInputUpDated_fn2,
        dataValue: ref(),
        show_error: ref(false),
        error_message: passwordErrorMsgs[0]
      }
    ];
    function passwordInputUpDated_fn1(event) {
      try {
        const input = event.target.value;
        password_input_properties[0].dataValue.value = input;
        ValidatePassword();
      } catch (error) {
      }
    }
    function passwordInputUpDated_fn2(event) {
      try {
        const input = event.target.value;
        password_input_properties[1].dataValue.value = input;
        ValidatePassword();
      } catch (error) {
      }
    }
    function ValidatePassword() {
      const [password1, password2] = password_input_properties.map((prop) => prop.dataValue.value);
      const defaultErrorMsg = passwordErrorMsgs[0];
      const mismatchErrorMsg = passwordErrorMsgs[1];
      password_input_properties.forEach((prop) => {
        prop.error_message = defaultErrorMsg;
        prop.show_error.value = false;
      });
      const emptyPasswords = password_input_properties.map((prop, index) => {
        const isEmpty = !prop.dataValue.value;
        prop.show_error.value = isEmpty;
        return isEmpty;
      });
      if (emptyPasswords.some((isEmpty) => isEmpty)) {
        return false;
      }
      const validPasswords = password_input_properties.map((prop, index) => {
        const isValid = isPasswordValid(prop.dataValue.value);
        prop.show_error.value = !isValid;
        return isValid;
      });
      if (validPasswords.some((isValid) => !isValid)) {
        return false;
      }
      if (password1 !== password2) {
        password_input_properties.forEach((prop) => {
          prop.error_message = mismatchErrorMsg;
          prop.show_error.value = true;
        });
        return false;
      }
      return true;
    }
    const saveUser = async () => {
      const isFormValid = validateForm();
      validateFacility();
      const isUsernameAvailable = await validateUsernameExistence(formData.value.name);
      const needsPasswordValidation = !props.editingUser || isChangingPassword.value;
      let passwordValid = true;
      if (needsPasswordValidation) {
        passwordValid = ValidatePassword();
      }
      if (!isFormValid || show_location_error.value || !isUsernameAvailable || !passwordValid) {
        if (!isFormValid || show_location_error.value) {
          toastDanger("Please fill out all required fields.");
        } else if (!isUsernameAvailable) {
          toastDanger("The chosen username is already taken.");
        } else if (!passwordValid) {
          toastDanger("Please check the password requirements.");
        }
        return;
      }
      const programIDs = formData.value.programs.map((selectedName) => {
        const program = availablePrograms.value.find((p) => p.name === selectedName);
        return program ? program.program_id : null;
      }).filter((id) => id !== null);
      const userData = {
        ...formData.value,
        dateOfBirth: dateOfBirth.value,
        facility: FacilityData.value,
        programIDs,
        /** * Spread the password into the object ONLY if it was required.
         * This prevents sending "password: ''" to the backend during routine edits.
         */
        ...needsPasswordValidation ? { password: password_input_properties[0].dataValue.value } : {}
      };
      emit("save", userData);
    };
    const clearForm = () => {
      formData.value = {
        name: "",
        firstName: "",
        lastName: "",
        password: "",
        dateOfBirth: "",
        gender: "",
        facility: null,
        roles: [],
        programs: []
      };
      dateOfBirth.value = null;
      propDate.value = null;
      FacilityData.value = null;
      selected_location.value = {};
      show_location_error.value = false;
      isChangingPassword.value = false;
      Object.keys(validationErrors.value).forEach((key) => {
        validationErrors.value[key] = false;
      });
      password_input_properties.forEach((prop) => {
        prop.dataValue.value = "";
        prop.show_error.value = false;
      });
    };
    watch(() => props.editingUser, (newUser) => {
      if (newUser) {
        clearForm();
        isChangingPassword.value = false;
        formData.value = {
          name: newUser.name,
          // Username is immutable usually
          firstName: newUser.firstName || "",
          // Use the split logic or direct props
          lastName: newUser.lastName || "",
          dateOfBirth: newUser.dateOfBirth || "",
          gender: (newUser.gender || "").toLowerCase(),
          roles: [...newUser.roles],
          programs: [...newUser.programs]
        };
        if (newUser.facility) {
          FacilityData.value = {
            code: newUser.facility.code,
            name: newUser.facility.name
          };
          console.log(">>: ", newUser.facility);
          selected_location.value = newUser.facility;
        }
        const computedStartDate = computed(() => {
          if (!lodashExports.isPlainObject(formData.value.dateOfBirth)) {
            const dateObj = dayjs(newUser.dateOfBirth);
            return {
              day: dateObj.date(),
              // Note: .date() is for day of month, .day() is day of week
              month: dateObj.month() + 1,
              year: dateObj.year(),
              formattedDate: dateObj.format("DD/MMM/YYYY"),
              standardDate: dateObj.format("YYYY-MM-DD"),
              // CHANGE THIS LINE:
              miumformattedDate: dateObj.toISOString()
            };
          }
          return newUser.dateOfBirth;
        });
        propDate.value = computedStartDate.value;
        dateOfBirth.value = computedStartDate.value.miumformattedDate;
      } else {
        clearForm();
      }
    }, { immediate: true });
    onMounted(() => {
      clearForm();
      fetchPrograms();
      fetchRoles();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonModal), {
        "is-open": __props.isOpen,
        onDidDismiss: handleDismiss
      }, {
        default: withCtx(() => [
          createVNode(unref(IonHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonTitle), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.editingUser ? "Edit User" : "Add New User"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(IonButtons), { slot: "end" }, {
                    default: withCtx(() => [
                      createVNode(unref(IonButton), {
                        onClick: handleDismiss,
                        fill: "clear"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(IonIcon), {
                            style: { "font-size": "35px" },
                            icon: unref(closeCircleOutline)
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
          createVNode(unref(IonContent), { class: "ion-padding" }, {
            default: withCtx(() => [
              createBaseVNode("form", {
                id: "user-form",
                onSubmit: withModifiers(saveUser, ["prevent"])
              }, [
                createVNode(unref(IonItem), {
                  class: normalizeClass({ "error-item": validationErrors.value.name || validationErrors.value.usernameExists })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonInput), {
                      modelValue: formData.value.name,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
                      label: "Username",
                      "label-placement": "stacked",
                      placeholder: "Enter username",
                      required: "",
                      class: normalizeClass({ "error-input": validationErrors.value.name || validationErrors.value.usernameExists })
                    }, null, 8, ["modelValue", "class"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                validationErrors.value.name ? (openBlock(), createElementBlock("div", _hoisted_1$2, " Username is required ")) : validationErrors.value.usernameExists ? (openBlock(), createElementBlock("div", _hoisted_2$1, " This username is already taken. ")) : createCommentVNode("", true),
                createVNode(unref(IonItem), {
                  class: normalizeClass({ "error-item": validationErrors.value.firstName })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonInput), {
                      modelValue: formData.value.firstName,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.firstName = $event),
                      label: "First Name",
                      "label-placement": "stacked",
                      placeholder: "Enter first name",
                      required: "",
                      class: normalizeClass({ "error-input": validationErrors.value.firstName })
                    }, null, 8, ["modelValue", "class"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                validationErrors.value.firstName ? (openBlock(), createElementBlock("div", _hoisted_3$1, " First name is required ")) : createCommentVNode("", true),
                createVNode(unref(IonItem), {
                  class: normalizeClass({ "error-item": validationErrors.value.lastName })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonInput), {
                      modelValue: formData.value.lastName,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.lastName = $event),
                      label: "Last Name",
                      "label-placement": "stacked",
                      placeholder: "Enter last name",
                      required: "",
                      class: normalizeClass({ "error-input": validationErrors.value.lastName })
                    }, null, 8, ["modelValue", "class"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                validationErrors.value.lastName ? (openBlock(), createElementBlock("div", _hoisted_4$1, " Last name is required ")) : createCommentVNode("", true),
                __props.editingUser ? (openBlock(), createBlock(unref(IonItem), {
                  key: 4,
                  lines: "none",
                  class: "toggle-item"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCheckbox), {
                      slot: "start",
                      modelValue: isChangingPassword.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isChangingPassword.value = $event)
                    }, null, 8, ["modelValue"]),
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [..._cache[7] || (_cache[7] = [
                        createTextVNode("Update User Password?", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                !__props.editingUser || isChangingPassword.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                  createVNode(unref(IonItem), {
                    slot: "header",
                    style: { "--background": "rgba(255, 255, 255, 0.5)" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "previousLabel" }, {
                        default: withCtx(() => [..._cache[8] || (_cache[8] = [
                          createTextVNode("Password", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_6$1, [
                    createVNode(ChangePasswordComponent, {
                      placeholder: password_input_properties[0].placeHolder,
                      "new-password": password_input_properties[0].dataValue.value,
                      "repeat-password": password_input_properties[1].dataValue.value,
                      onUpdate_newPassword: password_input_properties[0].dataHandler,
                      onUpdate_repeatPassword: password_input_properties[1].dataHandler
                    }, null, 8, ["placeholder", "new-password", "repeat-password", "onUpdate_newPassword", "onUpdate_repeatPassword"]),
                    password_input_properties[0].show_error.value && password_input_properties[1].show_error.value && password_input_properties[0].error_message === password_input_properties[1].error_message ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                      createVNode(unref(IonLabel), { class: "error-label" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(password_input_properties[0].error_message), 1)
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
                      password_input_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                        key: 0,
                        class: "error-label"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(password_input_properties[0].error_message), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      password_input_properties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                        key: 1,
                        class: "error-label"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(password_input_properties[1].error_message), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]))
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(["form_el", { "error-section": validationErrors.value.dateOfBirth }])
                }, [
                  createBaseVNode("h6", {
                    style: { "font-size": "16px", "font-weight": "400" },
                    class: normalizeClass({ "error-label": validationErrors.value.dateOfBirth })
                  }, " Date Of Birth ", 2),
                  createVNode(_sfc_main$4, {
                    place_holder: "Date Of Birth",
                    onDateUpDated: dateUpdated,
                    date_prop: propDate.value
                  }, null, 8, ["date_prop"]),
                  validationErrors.value.dateOfBirth ? (openBlock(), createElementBlock("div", _hoisted_9$1, " Date of birth is required ")) : createCommentVNode("", true)
                ], 2),
                createVNode(unref(IonItem), {
                  class: normalizeClass({ "error-item": validationErrors.value.gender })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), {
                      position: "stacked",
                      class: normalizeClass({ "error-label": validationErrors.value.gender })
                    }, {
                      default: withCtx(() => [..._cache[9] || (_cache[9] = [
                        createTextVNode("Gender", -1)
                      ])]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(unref(IonRadioGroup), {
                      modelValue: formData.value.gender,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.gender = $event)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_10$1, [
                          createVNode(unref(IonItem), {
                            lines: "none",
                            style: { "--padding-start": "0" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonRadio), {
                                slot: "start",
                                value: "male"
                              }),
                              createVNode(unref(IonLabel), null, {
                                default: withCtx(() => [..._cache[10] || (_cache[10] = [
                                  createTextVNode("Male", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(IonItem), {
                            lines: "none",
                            style: { "--padding-start": "0" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonRadio), {
                                slot: "start",
                                value: "female"
                              }),
                              createVNode(unref(IonLabel), null, {
                                default: withCtx(() => [..._cache[11] || (_cache[11] = [
                                  createTextVNode("Female", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                validationErrors.value.gender ? (openBlock(), createElementBlock("div", _hoisted_11$1, " Gender is required ")) : createCommentVNode("", true),
                createVNode(unref(IonItem), {
                  class: normalizeClass({ "error-item": validationErrors.value.roles })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonSelect), {
                      modelValue: formData.value.roles,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.roles = $event),
                      label: "Roles",
                      "label-placement": "stacked",
                      placeholder: "Select roles",
                      multiple: "",
                      class: normalizeClass({ "error-input": validationErrors.value.roles })
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(availableRoles.value, (role) => {
                          return openBlock(), createBlock(unref(IonSelectOption), {
                            key: role,
                            value: role
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(role), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "class"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                validationErrors.value.roles ? (openBlock(), createElementBlock("div", _hoisted_12$1, " At least one role is required ")) : createCommentVNode("", true),
                createVNode(unref(IonItem), {
                  class: normalizeClass({ "error-item": validationErrors.value.programs })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonSelect), {
                      modelValue: formData.value.programs,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.programs = $event),
                      label: "Programs",
                      "label-placement": "stacked",
                      placeholder: "Select programs",
                      multiple: "",
                      class: normalizeClass({ "error-input": validationErrors.value.programs })
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(availablePrograms.value, (program) => {
                          return openBlock(), createBlock(unref(IonSelectOption), {
                            key: program.id,
                            value: program.name
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(program.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "class"])
                  ]),
                  _: 1
                }, 8, ["class"]),
                validationErrors.value.programs ? (openBlock(), createElementBlock("div", _hoisted_13$1, " At least one program is required ")) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_14$1, [
                  _cache[12] || (_cache[12] = createBaseVNode("h6", { style: { "font-size": "16px", "font-weight": "400" } }, "Facility", -1)),
                  createVNode(SelectFacility, {
                    show_error: show_location_error.value,
                    onFacilitySelected: facilitySelected,
                    selected_district_ids: selectedDistrictIds.value,
                    selected_location: selected_location.value
                  }, null, 8, ["show_error", "selected_district_ids", "selected_location"])
                ])
              ], 32)
            ]),
            _: 1
          }),
          createVNode(unref(IonFooter), null, {
            default: withCtx(() => [
              createVNode(unref(IonToolbar), null, {
                default: withCtx(() => [
                  createVNode(unref(IonButtons), { slot: "end" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(unref(IonButton), {
                          onClick: handleDismiss,
                          fill: "solid",
                          disabled: __props.isSaving
                        }, {
                          default: withCtx(() => [..._cache[13] || (_cache[13] = [
                            createTextVNode(" Cancel ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(unref(IonButton), {
                          onClick: saveUser,
                          fill: "solid",
                          disabled: __props.isSaving,
                          style: { "margin-left": "10px", "margin-right": "10px" }
                        }, {
                          default: withCtx(() => [
                            __props.isSaving ? (openBlock(), createBlock(unref(IonSpinner), {
                              key: 0,
                              style: { "height": "36px" },
                              name: "crescent",
                              slot: "start"
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(__props.editingUser ? "Update" : "Create") + " User ", 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
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
      }, 8, ["is-open"]);
    };
  }
});

const UserFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a9673452"]]);

const _hoisted_1$1 = { class: "users-grid" };
const _hoisted_2 = { class: "user-header" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "user-info" };
const _hoisted_5 = {
  key: 0,
  class: "user-meta"
};
const _hoisted_6 = {
  key: 0,
  class: "meta-item"
};
const _hoisted_7 = {
  key: 1,
  class: "meta-item"
};
const _hoisted_8 = { class: "user-details" };
const _hoisted_9 = {
  key: 0,
  class: "detail-item"
};
const _hoisted_10 = {
  key: 1,
  class: "detail-item"
};
const _hoisted_11 = {
  key: 2,
  class: "detail-item"
};
const _hoisted_12 = { class: "detail-item" };
const _hoisted_13 = { class: "detail-item" };
const _hoisted_14 = { class: "action-buttons" };
const _hoisted_15 = {
  key: 0,
  class: "empty-state"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "miUsersTemplate",
  props: {
    initialSearchTerm: { default: "" },
    initialStatusFilter: { default: "all" },
    initialItemsPerPage: { default: 6 },
    enableSearch: { type: Boolean, default: true },
    enableStatusFilter: { type: Boolean, default: true },
    enablePagination: { type: Boolean, default: true },
    searchPlaceholder: { default: "Search users..." },
    searchDebounceTime: { default: 300 }
  },
  emits: ["search-changed", "status-filter-changed", "users-filtered", "user-edited", "user-deleted", "user-status-changed", "user-created"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const users = ref([]);
    const searchTerm = ref(props.initialSearchTerm);
    const statusFilter = ref(props.initialStatusFilter);
    const currentPage = ref(1);
    const itemsPerPage = ref(props.initialItemsPerPage);
    const isModalOpen = ref(false);
    const editingUser = ref(null);
    let searchTimeout = null;
    const mapMiumUserToComponentUser = (miumUser) => {
      const { getAvatarUrl } = useAvatar();
      return {
        id: miumUser.id,
        name: miumUser.username,
        email: miumUser.username,
        // Using username as a substitute for email
        firstName: miumUser.profile?.firstName,
        lastName: miumUser.profile?.lastName,
        dateOfBirth: miumUser.profile?.dateOfBirth,
        gender: miumUser.profile?.gender,
        facility: miumUser.facilities?.[0]?.facility ? {
          name: miumUser.facilities[0].facility.facility_name,
          code: miumUser.facilities[0].facility.facility_code
        } : null,
        roles: miumUser.roles?.map((role) => role.role.name) || [],
        programs: miumUser.programs?.map((program) => program.program.name) || [],
        status: "active",
        // All fetched users are assumed active
        avatar: getAvatarUrl(miumUser.username),
        createdAt: new Date(miumUser.createdAt),
        lastActive: new Date(miumUser.updatedAt)
        // Using updatedAt as lastActive
      };
    };
    const filteredUsers = computed(() => {
      let filtered = users.value;
      if (props.enableSearch && searchTerm.value) {
        const search = searchTerm.value.toLowerCase();
        filtered = filtered.filter(
          (user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search) || user.roles && user.roles.some((role) => role.toLowerCase().includes(search)) || user.programs && user.programs.some((program) => program.toLowerCase().includes(search)) || user.gender && user.gender.toLowerCase().includes(search) || user.facility && user.facility.name && user.facility.name.toLowerCase().includes(search)
        );
      }
      if (props.enableStatusFilter && statusFilter.value !== "all") {
        filtered = filtered.filter((user) => user.status === statusFilter.value);
      }
      return filtered;
    });
    const paginatedUsers = computed(() => {
      if (!props.enablePagination) {
        return filteredUsers.value;
      }
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredUsers.value.slice(start, end);
    });
    watch(
      () => searchTerm.value,
      (newSearchTerm) => {
        if (searchTimeout) {
          clearTimeout(searchTimeout);
        }
        searchTimeout = setTimeout(() => {
          emit("search-changed", newSearchTerm);
          currentPage.value = 1;
        }, props.searchDebounceTime);
      },
      { immediate: false }
    );
    watch(
      () => statusFilter.value,
      (newStatusFilter) => {
        emit("status-filter-changed", newStatusFilter);
        currentPage.value = 1;
      },
      { immediate: false }
    );
    watch(
      () => filteredUsers.value,
      (newFilteredUsers) => {
        emit("users-filtered", newFilteredUsers);
      },
      { deep: true, immediate: true }
    );
    const handlePaginationUpdate = (event) => {
      currentPage.value = event.page;
      itemsPerPage.value = event.itemsPerPage;
    };
    const formatDate = (date) => {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(date);
    };
    const formatAge = (dateOfBirth) => {
      const today = /* @__PURE__ */ new Date();
      const birthDate = new Date(dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    };
    const editUser = (user) => {
      editingUser.value = user;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
      editingUser.value = null;
    };
    const isSaving = ref(false);
    const saveUser = async (formData) => {
      try {
        isSaving.value = true;
        if (editingUser.value) {
          const updatePayload = {
            roles: formData.roles,
            programs: formData.programs,
            facilities: [formData.facility?.code],
            // Backend expects array of codes
            profile: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              gender: formData.gender,
              dateOfBirth: formData.dateOfBirth
            }
          };
          if (formData.password) {
            updatePayload.password = formData.password;
          }
          const updatedMiumUser = await MIUMUserService.updateUser(editingUser.value.id, updatePayload);
          const index = users.value.findIndex((u) => u.id === editingUser.value.id);
          if (index !== -1) {
            users.value[index] = mapMiumUserToComponentUser(updatedMiumUser);
          }
          toastController.create({
            message: "User updated successfully",
            duration: 2e3,
            color: "success"
          }).then((t) => t.present());
        } else {
          const newUserPayload = await formatUserPayload(formData);
          const newMiumUser = await MIUMUserService.register(newUserPayload);
          const newUser = mapMiumUserToComponentUser(newMiumUser);
          if (newUser) {
            users.value.push(newUser);
            emit("user-created", newUser);
            const toast = await toastController.create({
              message: "User created successfully",
              duration: 2e3,
              color: "success"
            });
            toast.present();
          }
        }
        closeModal();
      } catch (error) {
        const toast = await toastController.create({
          message: `Error saving user: ${error}`,
          duration: 2e3,
          color: "danger"
        });
        toast.present();
      } finally {
        isSaving.value = false;
      }
    };
    const formatUserPayload = async (userData) => {
      if (!userData || !userData.facility) {
        throw new Error("Invalid user data. 'facility' is required.");
      }
      const payload = {
        username: userData.name,
        password: userData.password,
        roles: userData.roles,
        programs: userData.programs,
        programIds: userData.programIDs,
        facilities: [userData.facility.code],
        profile: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          gender: userData.gender,
          dateOfBirth: userData.dateOfBirth
        }
      };
      return payload;
    };
    const toggleUserStatus = async (user) => {
      const alert = await alertController.create({
        header: "Confirm Status Change",
        message: `Are you sure you want to ${user.status === "active" ? "deactivate" : "activate"} ${user.name}?`,
        buttons: [
          { text: "Cancel", role: "cancel" },
          {
            text: "Confirm",
            handler: () => {
              user.status = user.status === "active" ? "inactive" : "active";
              emit("user-status-changed", user);
              toastController.create({
                message: `User ${user.status === "active" ? "activated" : "deactivated"} successfully`,
                duration: 2e3,
                color: "success"
              }).then((toast) => toast.present());
            }
          }
        ]
      });
      alert.present();
    };
    const deleteUser = async (user) => {
      const alert = await alertController.create({
        header: "Confirm Delete",
        message: `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
        buttons: [
          { text: "Cancel", role: "cancel" },
          {
            text: "Delete",
            role: "destructive",
            handler: () => {
              const index = users.value.findIndex((u) => u.id === user.id);
              if (index !== -1) {
                users.value.splice(index, 1);
                emit("user-deleted", user.id);
                toastController.create({
                  message: "User deleted successfully",
                  duration: 2e3,
                  color: "success"
                }).then((toast) => toast.present());
              }
            }
          }
        ]
      });
      alert.present();
    };
    const setSearchTerm = (term) => {
      searchTerm.value = term;
    };
    const setStatusFilter = (filter) => {
      statusFilter.value = filter;
    };
    const refreshUsers = async () => {
      try {
        const miumUsers = await MIUMUserService.getUsers();
        users.value = miumUsers.map(mapMiumUserToComponentUser);
      } catch (error) {
        console.error("Failed to fetch MIUM users:", error);
        toastController.create({
          message: "Failed to load users.",
          duration: 2e3,
          color: "danger"
        }).then((toast) => toast.present());
      }
    };
    const openAddUserModal = () => {
      editingUser.value = null;
      isModalOpen.value = true;
    };
    onMounted(async () => {
      await refreshUsers();
    });
    const cleanup = () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
    __expose({
      setSearchTerm,
      setStatusFilter,
      refreshUsers,
      cleanup,
      openAddUserModal,
      users: users.value,
      filteredUsers,
      paginatedUsers
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonContent), {
          class: "ion-padding",
          style: { "height": "80vh" }
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedUsers.value, (user) => {
                return openBlock(), createBlock(unref(IonCard), {
                  key: user.id,
                  class: "user-card"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardHeader), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_2, [
                          createVNode(unref(IonAvatar), null, {
                            default: withCtx(() => [
                              createBaseVNode("img", {
                                src: user.avatar,
                                alt: user.name
                              }, null, 8, _hoisted_3)
                            ]),
                            _: 2
                          }, 1024),
                          createBaseVNode("div", _hoisted_4, [
                            createVNode(unref(IonCardTitle), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(IonCardSubtitle), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.email), 1)
                              ]),
                              _: 2
                            }, 1024),
                            user.gender || user.dateOfBirth ? (openBlock(), createElementBlock("div", _hoisted_5, [
                              user.gender ? (openBlock(), createElementBlock("span", _hoisted_6, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(person),
                                  class: "meta-icon"
                                }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(user.gender), 1)
                              ])) : createCommentVNode("", true),
                              user.dateOfBirth ? (openBlock(), createElementBlock("span", _hoisted_7, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(calendar),
                                  class: "meta-icon"
                                }, null, 8, ["icon"]),
                                createTextVNode(" " + toDisplayString(formatAge(user.dateOfBirth)) + " years old ", 1)
                              ])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(IonChip), {
                            color: user.status === "active" ? "success" : "medium",
                            class: "status-chip"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: user.status === "active" ? unref(checkmarkCircle) : unref(closeCircle),
                                slot: "start"
                              }, null, 8, ["icon"]),
                              createVNode(unref(IonLabel), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.status), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_8, [
                          user.roles && user.roles.length ? (openBlock(), createElementBlock("div", _hoisted_9, [
                            createVNode(unref(IonIcon), {
                              icon: unref(briefcase),
                              class: "detail-icon"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, toDisplayString(user.roles.join(", ")), 1)
                          ])) : createCommentVNode("", true),
                          user.programs && user.programs.length ? (openBlock(), createElementBlock("div", _hoisted_10, [
                            createVNode(unref(IonIcon), {
                              icon: unref(apps),
                              class: "detail-icon"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, toDisplayString(user.programs.join(", ")), 1)
                          ])) : createCommentVNode("", true),
                          user.facility ? (openBlock(), createElementBlock("div", _hoisted_11, [
                            createVNode(unref(IonIcon), {
                              icon: unref(business),
                              class: "detail-icon"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, toDisplayString(user.facility.name || "Assigned Facility"), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_12, [
                            createVNode(unref(IonIcon), {
                              icon: unref(calendar),
                              class: "detail-icon"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, "Joined " + toDisplayString(formatDate(user.createdAt)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_13, [
                            createVNode(unref(IonIcon), {
                              icon: unref(time),
                              class: "detail-icon"
                            }, null, 8, ["icon"]),
                            createBaseVNode("span", null, "Last active " + toDisplayString(formatDate(user.lastActive)), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_14, [
                          createVNode(unref(IonButton), {
                            onClick: ($event) => editUser(user),
                            fill: "outline",
                            size: "small",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: unref(create),
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[0] || (_cache[0] = createTextVNode(" Edit ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(IonButton), {
                            onClick: ($event) => toggleUserStatus(user),
                            fill: "outline",
                            size: "small",
                            color: user.status === "active" ? "warning" : "success"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: user.status === "active" ? unref(pause) : unref(play),
                                slot: "start"
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(user.status === "active" ? "Deactivate" : "Activate"), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "color"]),
                          createVNode(unref(IonButton), {
                            onClick: ($event) => deleteUser(user),
                            fill: "outline",
                            size: "small",
                            color: "danger"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(IonIcon), {
                                icon: unref(trash),
                                slot: "start"
                              }, null, 8, ["icon"]),
                              _cache[1] || (_cache[1] = createTextVNode(" Delete ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            filteredUsers.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15, [
              createVNode(unref(IonIcon), {
                icon: unref(people),
                class: "empty-icon"
              }, null, 8, ["icon"]),
              _cache[2] || (_cache[2] = createBaseVNode("h3", null, "No users found", -1)),
              _cache[3] || (_cache[3] = createBaseVNode("p", null, "Try adjusting your search or filter criteria", -1))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), null, {
          default: withCtx(() => [
            createVNode(BottomNavBar, {
              "total-items": filteredUsers.value.length,
              "current-page": currentPage.value,
              "items-per-page": itemsPerPage.value,
              "onUpdate:pagination": handlePaginationUpdate
            }, null, 8, ["total-items", "current-page", "items-per-page"])
          ]),
          _: 1
        }),
        createVNode(UserFormModal, {
          "is-open": isModalOpen.value,
          "editing-user": editingUser.value,
          "is-saving": isSaving.value,
          onSave: saveUser,
          onClose: closeModal
        }, null, 8, ["is-open", "editing-user", "is-saving"])
      ], 64);
    };
  }
});

const miUsersTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-deaf844d"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserNav",
  props: {
    searchTerm: {
      type: String,
      required: true
    },
    statusFilter: {
      type: String,
      required: true
    }
  },
  emits: ["update:searchTerm", "update:statusFilter", "openAddUserModal"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonRow), { class: "ion-align-items-center" }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { size: "8" }, {
              default: withCtx(() => [
                createVNode(unref(IonSearchbar), {
                  value: __props.searchTerm,
                  onIonInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:searchTerm", $event.detail.value)),
                  placeholder: "Search users...",
                  "show-clear-button": "focus",
                  debounce: "300"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), {
              size: "4",
              class: "ion-text-right"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonButton), {
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("openAddUserModal")),
                  fill: "solid"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonIcon), {
                      icon: unref(personAdd),
                      slot: "start"
                    }, null, 8, ["icon"]),
                    _cache[3] || (_cache[3] = createTextVNode(" Add User ", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), { class: "ion-padding-start ion-padding-end" }, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { size: "12" }, {
              default: withCtx(() => [
                createVNode(unref(IonSegment), {
                  value: __props.statusFilter,
                  onIonChange: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:statusFilter", $event.detail.value))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonSegmentButton), { value: "all" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode("All", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonSegmentButton), { value: "active" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode("Active", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonSegmentButton), { value: "inactive" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), null, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode("Inactive", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["value"])
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

const _hoisted_1 = { class: "sticky-user-nav" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "miusers",
  setup(__props, { expose: __expose }) {
    const searchTerm = ref("");
    const statusFilter = ref("all");
    const usersList = ref([]);
    const filteredUsersCount = ref(0);
    const usersTemplateRef = ref();
    const handleSearch = (value) => {
      searchTerm.value = value;
      console.log("Search term updated:", value);
    };
    const handleStatusFilter = (value) => {
      statusFilter.value = value;
      console.log("Status filter updated:", value);
    };
    const handleSearchChange = (newSearchTerm) => {
      if (searchTerm.value !== newSearchTerm) {
        searchTerm.value = newSearchTerm;
      }
      console.log("Internal search changed:", newSearchTerm);
    };
    const handleFilterChange = (newStatusFilter) => {
      if (statusFilter.value !== newStatusFilter) {
        statusFilter.value = newStatusFilter;
      }
      console.log("Internal filter changed:", newStatusFilter);
    };
    const handleUsersFiltered = (filteredUsers) => {
      filteredUsersCount.value = filteredUsers.length;
    };
    const handleUserCreated = (user) => {
      console.log("User created:", user);
    };
    const handleUserEdited = (user) => {
      console.log("User edited:", user);
    };
    const handleUserDeleted = (userId) => {
      console.log("User deleted:", userId);
    };
    const handleUserStatusChanged = (user) => {
      console.log("User status changed:", user);
    };
    const openAddUserModal = () => {
      if (usersTemplateRef.value) {
        usersTemplateRef.value.openAddUserModal();
      } else {
        console.log("usersTemplateRef is not yet available.");
      }
    };
    const loadUsers = async () => {
      try {
        console.log("Loading users...");
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    const initNavData = async () => {
      const store = EIRreportsStore();
      store.setNavigationPayload(
        "Manage Integrated Users",
        true,
        false,
        "/",
        "home",
        ""
      );
    };
    const refreshUsers = () => {
      if (usersTemplateRef.value) {
        usersTemplateRef.value.refreshUsers();
      }
      loadUsers();
    };
    const setSearch = (term) => {
      searchTerm.value = term;
      if (usersTemplateRef.value) {
        usersTemplateRef.value.setSearchTerm(term);
      }
    };
    const setFilter = (filter) => {
      statusFilter.value = filter;
      if (usersTemplateRef.value) {
        usersTemplateRef.value.setStatusFilter(filter);
      }
    };
    onMounted(async () => {
      await initNavData();
      await loadUsers();
    });
    onUnmounted(() => {
      if (usersTemplateRef.value && typeof usersTemplateRef.value.cleanup === "function") {
        usersTemplateRef.value.cleanup();
      }
    });
    __expose({
      refreshUsers,
      setSearch,
      setFilter,
      searchTerm,
      statusFilter,
      usersList,
      filteredUsersCount
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(NavigationMenu),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(_sfc_main$1, {
                  fullscreen: true,
                  searchTerm: searchTerm.value,
                  statusFilter: statusFilter.value,
                  "onUpdate:searchTerm": handleSearch,
                  "onUpdate:statusFilter": handleStatusFilter,
                  onOpenAddUserModal: openAddUserModal
                }, null, 8, ["searchTerm", "statusFilter"])
              ]),
              createVNode(miUsersTemplate, {
                ref_key: "usersTemplateRef",
                ref: usersTemplateRef,
                "initial-users": usersList.value,
                "initial-search-term": searchTerm.value,
                "initial-status-filter": statusFilter.value,
                "search-debounce-time": 500,
                "enable-search": true,
                "enable-status-filter": true,
                "enable-pagination": true,
                onSearchChanged: handleSearchChange,
                onStatusFilterChanged: handleFilterChange,
                onUsersFiltered: handleUsersFiltered,
                onUserCreated: handleUserCreated,
                onUserEdited: handleUserEdited,
                onUserDeleted: handleUserDeleted,
                onUserStatusChanged: handleUserStatusChanged
              }, null, 8, ["initial-users", "initial-search-term", "initial-status-filter"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const miusers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5071b8a1"]]);

export { miusers as default };
