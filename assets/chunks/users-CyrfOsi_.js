import { s as defineComponent, L as IonIcon, by as IonText, M as IonSpinner, bf as IonFooter, a7 as IonLabel, aq as IonItem, ap as IonList, bd as IonCardContent, ba as IonCardTitle, cD as IonCardSubtitle, bb as IonCardHeader, bK as IonCard, aA as IonCol, af as IonRow, aB as IonGrid, bu as IonPage, aG as IonContent, a2 as onMounted, w as watch, ca as appsOutline, e3 as createOutline, bv as personCircleOutline, f as ref, r as reactive, c as computed, x as resolveComponent, y as openBlock, z as createElementBlock, A as createVNode, B as withCtx, O as createBlock, C as createBaseVNode, D as toDisplayString, J as Fragment, R as renderList, a5 as createTextVNode, F as unref, a$ as personOutline, H as createCommentVNode, b4 as peopleOutline, au as script, e5 as keyOutline, bF as IonModal, I as IonHeader, aD as IonToolbar, aE as IonTitle, cc as personAddOutline, be as IonButtons, N as IonButton, G as closeCircleOutline, bH as saveOutline, K as modalController, ax as searchOutline, bX as chevronBackOutline } from './vendor-DrpjccQs.js';
import { ay as editUserModal, U as UserService, _ as _export_sfc, a6 as useUserStore, ai as ProgramService, V as LocationService, B as BasicInputField, az as sselectionList, aA as userPhoneInput, aB as ListPicker, aC as areFieldsValid, ac as isPasswordValid, aD as getFieldsValuesObj, aE as getGenderCode, x as toastDanger, aF as PersonService, G as toastSuccess, T as Toolbar, am as router } from '../index-C8caYnJd.js';
import { B as BottomNavBar } from './bottomNavBar-BeAt3hXP.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';
import { N as NavigationMenu } from './NavigationMenu-BFiHzwP8.js';
import { E as EIRreportsStore } from './EIRreportsStore-BUJuzJ34.js';
import { T as TableSkeletonLoader } from './TableSkeletonLoader-DMBLMYRA.js';

const _sfc_main$4 = defineComponent({
  name: "UserCardList",
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    bottomNavBar: BottomNavBar,
    IonFooter,
    IonSpinner,
    IonText,
    IonIcon,
    editUserModal
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    filterValue: {
      type: String,
      required: true
    },
    search: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const isPopoverOpen = ref(false);
    const pagination = reactive({
      page: 1,
      itemsPerPage: 10
    });
    const isLoading = ref(true);
    const error = ref("");
    const user_id = ref("");
    const _items_ = ref([]);
    const totalCount = ref(0);
    onMounted(() => {
      getUsers();
    });
    watch(
      () => props.search,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          pagination.page = 1;
          getUsers();
        }
      }
    );
    watch(
      () => props.filterValue,
      () => {
      }
    );
    const getUsers = async () => {
      try {
        isLoading.value = true;
        error.value = "";
        const userData = await UserService.getAllUsers(pagination.page, pagination.itemsPerPage, props.search);
        totalCount.value = userData.count || 0;
        _items_.value = userData.results.map((item) => ({
          userId: item.user_id,
          username: item.username,
          roles: userRolesStr(item.roles),
          programs: userProgramsStr(item.programs),
          gender: item.person.gender,
          status: item.deactivated_on,
          firstName: userFirstname(item.person.names),
          lastName: userLastname(item.person.names)
        }));
      } catch (err) {
        error.value = "Failed to fetch users. Please try again later.";
        console.error("Error fetching users:", err);
        _items_.value = [];
        totalCount.value = 0;
      } finally {
        isLoading.value = false;
      }
    };
    const handlePaginationUpdate = ({ page, itemsPerPage }) => {
      pagination.page = page;
      pagination.itemsPerPage = itemsPerPage;
      getUsers();
    };
    const filteredUsers = computed(() => {
      if (!props.filterValue) return _items_.value;
      const filterLower = props.filterValue.toLowerCase();
      return _items_.value.filter(
        (user) => user.username.toLowerCase().includes(filterLower) || user.firstName.toLowerCase().includes(filterLower) || user.lastName.toLowerCase().includes(filterLower) || user.userId.toLowerCase().includes(filterLower) || user.roles.some((role) => role.toLowerCase().includes(filterLower)) || user.programs.some((program) => program.toLowerCase().includes(filterLower))
      );
    });
    const openUserProfile = (userId) => {
      isPopoverOpen.value = true;
      user_id.value = userId;
    };
    const modalClosed = () => {
      isPopoverOpen.value = false;
      emit("reload", isPopoverOpen.value);
      getUsers();
    };
    const softModalClosed = () => {
      isPopoverOpen.value = false;
    };
    const userRolesStr = (items) => {
      if (!items || !Array.isArray(items)) return [];
      return items.map((item) => item.role || "");
    };
    const userFirstname = (items) => {
      if (!items || !Array.isArray(items) || items.length === 0) return "";
      return items[items.length - 1].given_name || "";
    };
    const userLastname = (items) => {
      if (!items || !Array.isArray(items) || items.length === 0) return "";
      return items[items.length - 1].family_name || "";
    };
    const userProgramsStr = (items) => {
      if (!items || !Array.isArray(items)) return [];
      return items.map((item) => item.name || "");
    };
    return {
      filteredUsers,
      pagination,
      handlePaginationUpdate,
      isLoading,
      error,
      personCircleOutline,
      createOutline,
      appsOutline,
      openUserProfile,
      user_id,
      isPopoverOpen,
      modalClosed,
      softModalClosed,
      _items_,
      totalCount
    };
  }
});

const _hoisted_1$1 = { class: "container" };
const _hoisted_2$1 = { class: "user-lbl" };
const _hoisted_3$1 = { class: "user-lbl" };
const _hoisted_4$1 = { class: "user-lbl" };
const _hoisted_5$1 = { class: "user-lbl" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_text = resolveComponent("ion-text");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_spinner = resolveComponent("ion-spinner");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_card_subtitle = resolveComponent("ion-card-subtitle");
  const _component_ion_card_title = resolveComponent("ion-card-title");
  const _component_ion_card_header = resolveComponent("ion-card-header");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_list = resolveComponent("ion-list");
  const _component_ion_card_content = resolveComponent("ion-card-content");
  const _component_ion_card = resolveComponent("ion-card");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_editUserModal = resolveComponent("editUserModal");
  const _component_bottomNavBar = resolveComponent("bottomNavBar");
  const _component_ion_footer = resolveComponent("ion-footer");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_ion_grid, { class: "dynamic-grid" }, {
      default: withCtx(() => [
        _ctx.error ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_ion_col, {
              size: "12",
              class: "ion-text-center"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_text, { color: "danger" }, {
                  default: withCtx(() => [
                    createBaseVNode("p", null, toDisplayString(_ctx.error), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _ctx.isLoading ? (openBlock(), createBlock(_component_ion_row, { key: 1 }, {
          default: withCtx(() => [
            createVNode(_component_ion_col, {
              size: "12",
              class: "ion-text-center"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_spinner, { name: "circular" }),
                _cache[0] || (_cache[0] = createBaseVNode("p", null, "Loading users...", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _ctx._items_.length === 0 ? (openBlock(), createBlock(_component_ion_row, { key: 2 }, {
          default: withCtx(() => [
            createVNode(_component_ion_col, {
              size: "12",
              class: "ion-text-center"
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createBaseVNode("p", null, "No users found.", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_ion_row, {
          key: 3,
          class: "user-cards-row"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx._items_, (user) => {
              return openBlock(), createBlock(_component_ion_col, {
                "size-xs": "12",
                "size-sm": "6",
                "size-md": "4",
                "size-lg": "3",
                key: user.userId
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_card, { class: "user-card" }, {
                    default: withCtx(() => [
                      createVNode(_component_ion_card_header, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_card_subtitle, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_icon, {
                                icon: _ctx.personCircleOutline,
                                size: "small",
                                style: { "margin-bottom": "-3px" }
                              }, null, 8, ["icon"]),
                              createTextVNode(" " + toDisplayString(user.roles.join(", ")), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_ion_card_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(user.firstName) + " " + toDisplayString(user.lastName) + " ", 1),
                              createVNode(_component_ion_icon, {
                                onClick: ($event) => _ctx.openUserProfile(user.userId),
                                icon: _ctx.createOutline,
                                class: "edit-icon"
                              }, null, 8, ["onClick", "icon"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_ion_card_content, null, {
                        default: withCtx(() => [
                          createVNode(_component_ion_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_ion_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      _cache[2] || (_cache[2] = createBaseVNode("h3", null, "User ID", -1)),
                                      createBaseVNode("p", _hoisted_2$1, toDisplayString(user.userId), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ion_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      _cache[3] || (_cache[3] = createBaseVNode("h3", null, "Username", -1)),
                                      createBaseVNode("p", _hoisted_3$1, toDisplayString(user.username), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ion_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      _cache[4] || (_cache[4] = createBaseVNode("h3", null, "Gender", -1)),
                                      createBaseVNode("p", _hoisted_4$1, toDisplayString(user.gender), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_ion_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_ion_label, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("h3", null, [
                                        createVNode(_component_ion_icon, {
                                          icon: _ctx.appsOutline,
                                          size: "small",
                                          style: { "margin-bottom": "-3px" }
                                        }, null, 8, ["icon"]),
                                        _cache[5] || (_cache[5] = createTextVNode(" Programs ", -1))
                                      ]),
                                      createBaseVNode("p", _hoisted_5$1, toDisplayString(user.programs.join(", ")), 1)
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
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }))
      ]),
      _: 1
    }),
    createVNode(_component_editUserModal, {
      is_open: _ctx.isPopoverOpen,
      user_id: _ctx.user_id,
      onClosePopover: _ctx.softModalClosed,
      onSave: _ctx.modalClosed
    }, null, 8, ["is_open", "user_id", "onClosePopover", "onSave"]),
    createVNode(_component_ion_footer, { class: "sticky-footer" }, {
      default: withCtx(() => [
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_col, null, {
              default: withCtx(() => [
                createVNode(_component_bottomNavBar, {
                  totalItems: _ctx.totalCount,
                  currentPage: _ctx.pagination.page,
                  itemsPerPage: _ctx.pagination.itemsPerPage,
                  "onUpdate:pagination": _ctx.handlePaginationUpdate
                }, null, 8, ["totalItems", "currentPage", "itemsPerPage", "onUpdate:pagination"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const UserCardList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__scopeId", "data-v-d67285b4"]]);

const __default__$1 = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    action: {}
  },
  emits: ["saveEvent"],
  setup(__props, { emit: __emit }) {
    const user_name = ref();
    const first_name = ref();
    const last_name = ref();
    const phone_number = ref();
    const user_roles = ref([]);
    const user_programs = ref([]);
    const selectedRoleNames = [];
    const selectedProgramIds = [];
    const selectedVillageIds = [];
    const selectedTAIds = [];
    const selectedDistrictIds = [];
    const passwordErrorMsgs = [
      "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character (@#$%^&+=*!-), without spaces",
      "Password does not match"
    ];
    const selected_location = ref();
    const locationData = ref([]);
    const location_error_message = ref("Select location");
    const location_show_error = ref(false);
    const village_show_error = ref(false);
    const village_error_message = ref("Select village(s)");
    const district_show_error = ref(false);
    const district_error_message = ref("Select district(s)");
    const TAz_show_error = ref(false);
    const TAz_error_message = ref("Select TA(s)");
    const districtList = ref([]);
    const OLDDistrictsList = ref([]);
    const villageList = ref([]);
    const TAList = ref([]);
    const selected_villages = ref();
    const selected_TAz = ref();
    const selected_Districts = ref();
    const disableVillageSelection = ref(true);
    const HSA_found_for_disabling_button = ref(true);
    const userStore = useUserStore();
    const facilityLocation = computed(() => userStore.facilityLocation);
    const disableFacilitySelection = ref(true);
    const props = __props;
    onMounted(async () => {
      await getUserRoles();
      await getUserPrograms();
      OLDDistrictsList.value = await getdistrictList();
      districtList.value = await getFacilityDistricts();
      if (districtList.value.length > 0) {
        await getFacilityForCurrentuser();
      }
    });
    watch(
      () => props.action,
      async (newValue) => {
        await trigerSaveFn();
      }
    );
    watch(
      () => disableVillageSelection.value,
      async (newValue) => {
        if (disableVillageSelection.value == false) {
          checkIfSelectedIsHSA(user_roles.value);
        }
      }
    );
    async function updateuserPersoninf(personId) {
      const data1 = getFieldsValuesObj(input_properties);
      const updatedData = {
        cell_phone_number: data1.phone_number,
        gender: getGenderCode(isSSelection_properties[0].dataValue.value)
      };
      const personService = new PersonService(updatedData);
      const data = await personService.update(personId);
      return data;
    }
    function selectedLocationF(data) {
      const selectedLocation = locationData.value.find((location) => location.code === data.code);
      const filteredDistricts = selectedLocation ? districtList.value.filter((district) => district.name === selectedLocation.district) : [];
      selected_Districts.value = filteredDistricts;
      selected_location.value = data;
    }
    function selectedVillage(VillagesList) {
      selectedVillageIds.length = 0;
      VillagesList.forEach((village) => {
        selectedVillageIds.push(village.village_id);
      });
    }
    function selectedTA(selectedTAList) {
      selectedTAIds.length = 0;
      selectedTAList.forEach((village) => {
        selectedTAIds.push(village.traditional_authority_id);
      });
      selectedTAList.forEach((TA) => {
        findVillages(TA.district_id);
      });
    }
    function selectedDistrictF(selectedDistrict) {
      selectedDistrictIds.length = 0;
      const filteredDistricts = [];
      OLDDistrictsList.value.forEach((district) => {
        if (selectedDistrict.name.toLowerCase() === district.name.toLowerCase()) {
          filteredDistricts.push(district);
        }
      });
      filteredDistricts.forEach((district) => {
        selectedDistrictIds.push(district.district_id);
      });
      filteredDistricts.forEach((district) => {
        fetchTraditionalAuthorities(district.district_id);
      });
      getDistrictFacilities(selectedDistrict);
    }
    async function getDistrictFacilities(district) {
      locationData.value = [];
      try {
        const temp_data1 = await LocationService.getDistrictFacilities(district.name.toLowerCase());
        locationData.value.push(...temp_data1.facilities);
      } catch (error) {
        console.error(`Error fetching facilities for district ${district.name}:`, error);
      }
      selected_location.value = null;
    }
    async function getFacilityForCurrentuser() {
      try {
        locationData.value.push(facilityLocation.value);
        selectedLocationF(facilityLocation.value);
      } catch (error) {
        console.error(error);
      }
    }
    async function getCurrentUserRoles() {
      try {
        const user = await UserService.getCurrentUser();
        if (user) {
          const userRoles = user.roles.map((role) => role.role);
          userStore.setUserRoles(userRoles);
          if (findUserRoleByName("Superuser,Superuser,") == true) {
            disableFacilitySelection.value = false;
          }
          if (findUserRoleByName("Superuser,Superuser,") == false) {
            user_roles.value = findAndRemoveRoleSSU(user_roles.value);
          }
        }
      } catch (error) {
      }
    }
    function findUserRoleByName(name) {
      const roles = userStore.getUserRoles();
      return roles.some((role) => role.toLowerCase() === name.toLowerCase());
    }
    function findAndRemoveRoleSSU(data) {
      const index = data.findIndex((role) => typeof role.name === "string" && role.name.toLowerCase() === "Superuser,Superuser,".toLowerCase());
      if (index !== -1) {
        data.splice(index, 1);
      }
      return data;
    }
    async function userPhoneChange(data) {
      if (data.is_valid == false) {
        phone_input_properties[0].show_error.value = true;
        phone_number.value = data.phone;
        phone_input_properties[0].dataValue.value = data.phone;
        phone_input_properties[0].is_phone_valid.value = false;
      }
      if (data.is_valid == true) {
        phone_input_properties[0].show_error.value = false;
        phone_number.value = data.phone;
        phone_input_properties[0].dataValue.value = data.phone;
        phone_input_properties[0].is_phone_valid.value = true;
      }
    }
    async function FindLocation(text) {
      if (lodashExports.isEmpty(text) == true) ;
      if (lodashExports.isEmpty(text) == false) ;
    }
    async function trigerSaveFn() {
      const _isRoleSelected_ = isRoleSelected();
      const _isProgramSelected_ = isProgramSelected();
      const _areFieldsValid_ = areFieldsValid(input_properties);
      const _isSSelectionValid_ = isSSelectionValid();
      const _ValidatePassword_ = ValidatePassword();
      const _validateLocation = validateLocation();
      const _validateDistricts = validateDistricts();
      const _validateTAz = validateTAz();
      const _validateVillages = validateVillages();
      const _validate_user_phone = validateUserPhone();
      if (_areFieldsValid_ == true && _ValidatePassword_ == true && _isSSelectionValid_ == true && _isRoleSelected_ == true && _isProgramSelected_ == true && _validateLocation == true && _validateDistricts == true && _validateTAz == true && _validateVillages == true && _validate_user_phone == true) {
        const data1 = getFieldsValuesObj(input_properties);
        const payload = {
          family_name: data1.last_name,
          given_name: data1.firstname,
          username: data1.username,
          must_append_roles: false,
          password: password_input_properties[0].dataValue.value,
          programs: selectedProgramIds,
          villages: selectedVillageIds,
          roles: selectedRoleNames,
          gender: getGenderCode(isSSelection_properties[0].dataValue.value),
          location_id: selected_location.value.code,
          phone: phone_input_properties[0].dataValue.value
        };
        try {
          const { user } = await UserService.createUser(payload);
          if (user) {
            await updateuserPersoninf(user.person.person_id);
            saveEvent(user.user_id);
          }
        } catch (error) {
          saveEvent("");
          toastDanger(error, 2e3);
        }
      }
    }
    const emit = __emit;
    function saveEvent(user_id) {
      emit("saveEvent", user_id);
    }
    async function getUserRoles() {
      user_roles.value = await UserService.getAllRoles();
      const temp_array = [];
      user_roles.value.forEach((item) => {
        temp_array.push({
          name: item.role,
          other: item
        });
      });
      user_roles.value = temp_array;
      await getCurrentUserRoles();
    }
    function isRoleSelected() {
      const selectedRoles = [];
      selectedRoleNames.length = 0;
      user_roles.value.forEach((role) => {
        if (role.selected == true) {
          selectedRoles.push(role);
        }
      });
      selectedRoles.forEach((role) => {
        selectedRoleNames.push(role.other.role);
      });
      if (selectedRoleNames.length > 0) {
        list_picker_prperties[0].show_error.value = false;
        return true;
      }
      if (selectedRoleNames.length == 0) {
        list_picker_prperties[0].show_error.value = true;
        return false;
      }
    }
    function isProgramSelected() {
      const selectedPrograms = [];
      selectedProgramIds.length = 0;
      user_programs.value.forEach((program) => {
        if (program.selected == true) {
          selectedPrograms.push(program);
        }
      });
      selectedPrograms.forEach((program) => {
        selectedProgramIds.push(program.other.program_id);
      });
      if (selectedProgramIds.length > 0) {
        list_picker_prperties[1].show_error.value = false;
        return true;
      }
      if (selectedProgramIds.length == 0) {
        list_picker_prperties[1].show_error.value = true;
        return false;
      }
    }
    async function getUserPrograms() {
      user_programs.value = await ProgramService.getAllPrograms();
      const temp_array = [];
      user_programs.value.forEach((item) => {
        temp_array.push({
          name: item.name,
          other: item,
          selected: false
        });
      });
      user_programs.value = temp_array;
    }
    function isSSelectionValid() {
      let is_valid = false;
      if (isSSelection_properties[0].dataValue.value == void 0) {
        isSSelection_properties[0].show_error.value = true;
      }
      if (isSSelection_properties[0].dataValue.value != void 0) {
        isSSelection_properties[0].show_error.value = false;
        is_valid = true;
      }
      return is_valid;
    }
    function validateLocation() {
      if (lodashExports.isEmpty(selected_location.value) == true) {
        location_show_error.value = true;
        return false;
      }
      if (lodashExports.isEmpty(selected_location.value) == false) {
        location_show_error.value = false;
        return true;
      }
    }
    function validateVillages() {
      if (checkIfSelectedIsHSA(user_roles.value) == false) {
        return true;
      }
      if (checkIfSelectedIsHSA(user_roles.value) == true) {
        if (selectedVillageIds.length == 0) {
          village_show_error.value = true;
          return false;
        }
        if (selectedVillageIds.length > 0) {
          village_show_error.value = false;
          return true;
        }
      }
    }
    function validateDistricts() {
      if (checkIfSelectedIsHSA(user_roles.value) == false) {
        return true;
      }
      if (checkIfSelectedIsHSA(user_roles.value) == true) {
        if (selectedDistrictIds.length == 0) {
          district_show_error.value = true;
          return false;
        }
        if (selectedDistrictIds.length > 0) {
          district_show_error.value = false;
          return true;
        }
      }
    }
    function validateTAz() {
      if (checkIfSelectedIsHSA(user_roles.value) == false) {
        return true;
      }
      if (checkIfSelectedIsHSA(user_roles.value) == true) {
        if (selectedTAIds.length == 0) {
          TAz_show_error.value = true;
          return false;
        }
        if (selectedTAIds.length > 0) {
          TAz_show_error.value = false;
          return true;
        }
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
        const isEmpty2 = !prop.dataValue.value;
        prop.show_error.value = isEmpty2;
        return isEmpty2;
      });
      if (emptyPasswords.some((isEmpty2) => isEmpty2)) {
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
    const input_properties = [
      {
        placeHolder: "username",
        property_name: "username",
        dataHandler: inputUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required, Only letters allowed"
      },
      {
        placeHolder: "firstname",
        property_name: "firstname",
        dataHandler: inputUpDated_fn2,
        dataValue: ref(),
        show_error: ref(false),
        type: "text",
        error_message: "Input required, Only letters allowed"
      },
      {
        placeHolder: "last name",
        property_name: "last_name",
        dataHandler: inputUpDated_fn3,
        dataValue: ref(),
        type: "text",
        show_error: ref(false),
        error_message: "Input required, Only letters allowed"
      }
    ];
    function validateUserPhone() {
      if (phone_input_properties[0].is_phone_valid.value == false) {
        phone_input_properties[0].show_error.value = true;
        return false;
      }
      if (phone_input_properties[0].is_phone_valid.value == true) {
        phone_input_properties[0].show_error.value = false;
        return true;
      }
    }
    const phone_input_properties = [
      {
        placeHolder: "phone number",
        property_name: "phone_number",
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required, input is invalid",
        is_phone_valid: ref(false)
      }
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
    const list_picker_prperties = [
      {
        multi_Selection: true,
        show_list_label: true,
        unqueId: "qwerty_8_3698",
        name_of_list: "Roles",
        placeHolder: "Search for a field",
        items: [],
        listUpdatedFN: listUpdated1,
        listFilteredFN: () => {
        },
        searchTextFN: () => {
        },
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "please select a Role",
        disabled: ref(false)
      },
      {
        multi_Selection: true,
        show_list_label: true,
        unqueId: "qwerty_8_562",
        name_of_list: "Programs",
        placeHolder: "Search for programs",
        items: [],
        listUpdatedFN: listUpdated2,
        listFilteredFN: () => {
        },
        searchTextFN: () => {
        },
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "please select a Program",
        disabled: ref(false)
      }
    ];
    function listUpdated1(data) {
      user_roles.value = data;
      checkIfSelectedIsHSA(user_roles.value);
      isRoleSelected();
    }
    function checkIfSelectedIsHSA(role_list) {
      const HSA_ROLES = ["HSA", "Health Surveillance"];
      village_show_error.value = false;
      let is_found = false;
      role_list.forEach((item) => {
        if (item?.selected == true && HSA_ROLES.includes(item?.name)) {
          HSA_found_for_disabling_button.value = false;
          is_found = true;
        }
      });
      if (is_found == false) {
        village_show_error.value = false;
        HSA_found_for_disabling_button.value = true;
      }
      return is_found;
    }
    function listUpdated2(data) {
      user_programs.value = data;
      user_programs.value.forEach((item) => {
        if (item.selected == true) ;
      });
      isProgramSelected();
    }
    const isSSelection_properties = [
      {
        labels: ["Male", "Female"],
        selectedOption: ref(null),
        dataHandler: sselectionListUpdated,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Please make a selection"
      }
    ];
    function sselectionListUpdated(data) {
      try {
        isSSelection_properties[0].dataValue.value = data.label;
      } catch (error) {
        isSSelection_properties[0].dataValue.value = void 0;
      }
      isSSelectionValid();
    }
    async function validateUsernameIfExists(username) {
      try {
        if (username.length > 0) {
          const does_username_exist = await UserService.doesUsernameExist(username);
          if (does_username_exist.exists == true) {
            input_properties[0].show_error.value = true;
            input_properties[0].error_message = "Username already exists";
          } else if (does_username_exist.exists == false) {
            input_properties[0].show_error.value = false;
            input_properties[0].error_message = "Input required, Only letters allowed";
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    async function inputUpDated_fn1(event) {
      const input = event.target.value;
      input_properties[0].dataValue.value = input;
      await validateUsernameIfExists(input);
    }
    function inputUpDated_fn2(event) {
      const input = event.target.value;
      input_properties[1].dataValue.value = input;
      areFieldsValid([input_properties[1]]);
    }
    function inputUpDated_fn3(event) {
      const input = event.target.value;
      input_properties[2].dataValue.value = input;
      areFieldsValid([input_properties[2]]);
    }
    function passwordInputUpDated_fn1(event) {
      const input = event.target.value;
      password_input_properties[0].dataValue.value = input;
      ValidatePassword();
    }
    function passwordInputUpDated_fn2(event) {
      const input = event.target.value;
      password_input_properties[1].dataValue.value = input;
      ValidatePassword();
    }
    async function getdistrictList() {
      const districtList2 = [];
      for (let i of [1, 2, 3]) {
        const districts = await LocationService.getDistricts(i);
        districtList2.push(...districts);
      }
      districtList2.forEach((district) => {
        selectedDistrictIds.push(district.district_id);
      });
      districtList2.forEach((district) => {
        fetchTraditionalAuthorities(district.district_id);
      });
      return districtList2;
    }
    async function getFacilityDistricts() {
      const data = await LocationService.getFacilityDistricts();
      return data.districts;
    }
    async function fetchTraditionalAuthorities(district_id, name) {
      TAList.value = [];
      var districtVillages = await LocationService.getTraditionalAuthorities(district_id, "");
      const arrayWithIds = districtVillages.map((item, index) => ({
        ...item,
        assigned_id: index
      }));
      TAList.value = TAList.value.concat(arrayWithIds);
    }
    async function fetchVillages(district_id, name) {
      villageList.value = [];
      var districtVillages = await LocationService.getVillages(district_id, "");
      const arrayWithIds = districtVillages.map((item, index) => ({
        ...item,
        assigned_id: index
      }));
      villageList.value = villageList.value.concat(arrayWithIds);
      if (villageList.value.length > 0) {
        disableVillageSelection.value = false;
      }
    }
    function findVillages(district_id) {
      disableVillageSelection.value = true;
      selected_villages.value = [];
      fetchVillages(district_id);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), {
              size: "12",
              "size-md": "6"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[12] || (_cache[12] = [
                            createTextVNode("First name", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(BasicInputField, {
                          placeholder: input_properties[1].placeHolder,
                          icon: unref(personOutline),
                          inputValue: first_name.value,
                          "onUpdate:inputValue": input_properties[1].dataHandler
                        }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                        createBaseVNode("div", null, [
                          input_properties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(input_properties[1].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[13] || (_cache[13] = [
                            createTextVNode("Last name", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(BasicInputField, {
                          placeholder: input_properties[2].placeHolder,
                          icon: unref(peopleOutline),
                          inputValue: last_name.value,
                          "onUpdate:inputValue": input_properties[2].dataHandler
                        }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                        createBaseVNode("div", null, [
                          input_properties[2].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(input_properties[2].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[14] || (_cache[14] = [
                            createTextVNode("Username", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(BasicInputField, {
                          placeholder: input_properties[0].placeHolder,
                          icon: unref(personCircleOutline),
                          inputValue: user_name.value,
                          "onUpdate:inputValue": input_properties[0].dataHandler
                        }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                        createBaseVNode("div", null, [
                          input_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(input_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[15] || (_cache[15] = [
                            createTextVNode("Gender", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(sselectionList, {
                          labels: isSSelection_properties[0].labels,
                          "selected-opt": isSSelection_properties[0].selectedOption.value,
                          onSelectionEvent: isSSelection_properties[0].dataHandler
                        }, null, 8, ["labels", "selected-opt", "onSelectionEvent"]),
                        createBaseVNode("div", null, [
                          isSSelection_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(isSSelection_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(userPhoneInput, { onValidateInput: userPhoneChange }),
                        createBaseVNode("div", null, [
                          phone_input_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(phone_input_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), {
              size: "12",
              "size-md": "6"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    true ? (openBlock(), createBlock(unref(IonCol), { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[16] || (_cache[16] = [
                            createTextVNode("District(s)", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(script), {
                          modelValue: selected_Districts.value,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => selected_Districts.value = $event),
                            _cache[1] || (_cache[1] = ($event) => selectedDistrictF($event))
                          ],
                          multiple: false,
                          taggable: false,
                          "hide-selected": true,
                          "close-on-select": true,
                          openDirection: "bottom",
                          "tag-placeholder": "Find and select District(s)",
                          placeholder: "Find and select District(s)",
                          selectLabel: "",
                          label: "name",
                          searchable: true,
                          onSearchChange: _cache[2] || (_cache[2] = () => {
                          }),
                          "track-by": "name",
                          options: districtList.value,
                          disabled: disableFacilitySelection.value
                        }, null, 8, ["modelValue", "options", "disabled"]),
                        createBaseVNode("div", null, [
                          district_show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(district_error_message.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[17] || (_cache[17] = [
                            createTextVNode("Facility name", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(script), {
                          modelValue: selected_location.value,
                          "onUpdate:modelValue": [
                            _cache[3] || (_cache[3] = ($event) => selected_location.value = $event),
                            _cache[4] || (_cache[4] = ($event) => selectedLocationF($event))
                          ],
                          multiple: false,
                          taggable: false,
                          "hide-selected": true,
                          "close-on-select": true,
                          openDirection: "bottom",
                          "tag-placeholder": "Find and select facility name",
                          placeholder: "Find and select facility name",
                          selectLabel: "",
                          label: "name",
                          searchable: true,
                          disabled: disableFacilitySelection.value,
                          onSearchChange: _cache[5] || (_cache[5] = ($event) => FindLocation($event)),
                          "track-by": "code",
                          options: locationData.value
                        }, null, 8, ["modelValue", "disabled", "options"]),
                        createBaseVNode("div", null, [
                          location_show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(location_error_message.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[18] || (_cache[18] = [
                            createTextVNode("TA(s)", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(script), {
                          modelValue: selected_TAz.value,
                          "onUpdate:modelValue": [
                            _cache[6] || (_cache[6] = ($event) => selected_TAz.value = $event),
                            _cache[7] || (_cache[7] = ($event) => selectedTA($event))
                          ],
                          multiple: true,
                          taggable: false,
                          "hide-selected": true,
                          "close-on-select": true,
                          openDirection: "bottom",
                          "tag-placeholder": "Find and select Traditional Authority (TA)",
                          placeholder: "Find and select Traditional Authority (TA)",
                          selectLabel: "",
                          label: "name",
                          searchable: true,
                          onSearchChange: _cache[8] || (_cache[8] = () => {
                          }),
                          "track-by": "assigned_id",
                          options: TAList.value,
                          disabled: HSA_found_for_disabling_button.value
                        }, null, 8, ["modelValue", "options", "disabled"]),
                        createBaseVNode("div", null, [
                          TAz_show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(TAz_error_message.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[19] || (_cache[19] = [
                            createTextVNode("Village(s)", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(script), {
                          modelValue: selected_villages.value,
                          "onUpdate:modelValue": [
                            _cache[9] || (_cache[9] = ($event) => selected_villages.value = $event),
                            _cache[10] || (_cache[10] = ($event) => selectedVillage($event))
                          ],
                          multiple: true,
                          taggable: false,
                          "hide-selected": true,
                          "close-on-select": true,
                          openDirection: "bottom",
                          "tag-placeholder": "Find and select village(s)",
                          placeholder: "Find and select village(s)",
                          selectLabel: "",
                          label: "name",
                          searchable: true,
                          onSearchChange: _cache[11] || (_cache[11] = () => {
                          }),
                          "track-by": "assigned_id",
                          options: villageList.value,
                          disabled: HSA_found_for_disabling_button.value
                        }, null, 8, ["modelValue", "options", "disabled"]),
                        createBaseVNode("div", null, [
                          village_show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(village_error_message.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
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
        }),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), {
              size: "12",
              "size-md": "6"
            }, {
              default: withCtx(() => [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCol), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
                              default: withCtx(() => [..._cache[20] || (_cache[20] = [
                                createTextVNode("Role(s)", -1),
                                createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                              ])]),
                              _: 1
                            }),
                            createVNode(ListPicker, {
                              multiSelection: list_picker_prperties[0].multi_Selection,
                              show_label: list_picker_prperties[0].show_list_label,
                              uniqueId: list_picker_prperties[0].unqueId,
                              name_of_list: list_picker_prperties[0].name_of_list,
                              choose_place_holder: list_picker_prperties[0].placeHolder,
                              "items_-list": user_roles.value,
                              use_internal_filter: list_picker_prperties[0].use_internal_filter,
                              disabled: list_picker_prperties[0].disabled.value,
                              onItemListUpDated: list_picker_prperties[0].listUpdatedFN,
                              onItemListFiltered: list_picker_prperties[0].listFilteredFN,
                              onItemSearchText: list_picker_prperties[0].searchTextFN
                            }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
                            createBaseVNode("div", null, [
                              list_picker_prperties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                                key: 0,
                                class: "error-label",
                                style: { "margin-top": "-10px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(list_picker_prperties[0].error_message), 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[21] || (_cache[21] = [
                            createTextVNode("Program(s)", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(ListPicker, {
                          multiSelection: list_picker_prperties[1].multi_Selection,
                          show_label: list_picker_prperties[1].show_list_label,
                          uniqueId: list_picker_prperties[1].unqueId,
                          name_of_list: list_picker_prperties[1].name_of_list,
                          choose_place_holder: list_picker_prperties[1].placeHolder,
                          "items_-list": user_programs.value,
                          use_internal_filter: list_picker_prperties[1].use_internal_filter,
                          disabled: list_picker_prperties[1].disabled.value,
                          onItemListUpDated: list_picker_prperties[1].listUpdatedFN,
                          onItemListFiltered: list_picker_prperties[1].listFilteredFN,
                          onItemSearchText: list_picker_prperties[1].searchTextFN
                        }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
                        createBaseVNode("div", null, [
                          list_picker_prperties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(list_picker_prperties[1].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonCol))
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[22] || (_cache[22] = [
                            createTextVNode("Password", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(BasicInputField, {
                          placeholder: password_input_properties[0].placeHolder,
                          icon: unref(keyOutline),
                          inputValue: password_input_properties[0].dataValue.value,
                          "onUpdate:inputValue": password_input_properties[0].dataHandler
                        }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                        createBaseVNode("div", null, [
                          password_input_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(password_input_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "margin-bottom": "10px", "color": "grey" } }, {
                          default: withCtx(() => [..._cache[23] || (_cache[23] = [
                            createTextVNode("Repeat password", -1),
                            createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(BasicInputField, {
                          placeholder: password_input_properties[1].placeHolder,
                          icon: unref(keyOutline),
                          inputValue: password_input_properties[1].dataValue.value,
                          "onUpdate:inputValue": password_input_properties[1].dataHandler
                        }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                        createBaseVNode("div", null, [
                          password_input_properties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(password_input_properties[1].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonCol), {
              size: "12",
              "size-md": "6"
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const adduser = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-731a8d5a"]]);

const _hoisted_1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_3 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_4 = { class: "" };
const _hoisted_5 = { class: "center text_12" };
const _hoisted_6 = { style: { "font-weight": "400", "font-size": "20px" } };
const _hoisted_7 = { style: { "display": "flex", "align-items": "center" } };
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    is_open: {},
    user_id: {}
  },
  emits: ["closePopover", "updated", "reload"],
  setup(__props, { emit: __emit }) {
    const action = ref("");
    const isPopoverOpen = ref(false);
    const user_id = ref();
    const emit = __emit;
    function saveAction() {
      action.value = generateRandomStrings(100, 3);
    }
    function closeModal() {
      modalController.dismiss();
    }
    function reload() {
      emit("reload", "");
    }
    function closeModalAndOpenEditUser(data) {
      user_id.value = data;
      if (data) {
        toastSuccess("User created successfully with id: " + user_id);
      }
      emit("updated", data);
      closeModal();
    }
    function generateRandomStrings(numStrings, stringLength) {
      const getRandomChar = (type) => {
        const start = type === "number" ? 48 : type === "uppercase" ? 65 : 97;
        return String.fromCharCode(Math.floor(Math.random() * (type === "number" ? 10 : 26)) + start);
      };
      return Array.from(
        { length: numStrings },
        () => Array.from({ length: stringLength }, () => getRandomChar(["number", "uppercase", "lowercase"][Math.floor(Math.random() * 3)])).join("")
      );
    }
    return (_ctx, _cache) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonModal), {
          "is-open": __props.is_open,
          "show-backdrop": true,
          onDidDismiss: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("closePopover", false)),
          "keyboard-close": false
        }, {
          default: withCtx(() => [
            createVNode(unref(IonHeader), null, {
              default: withCtx(() => [
                createVNode(unref(IonToolbar), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_1, [
                          createVNode(_component_ion_icon, {
                            icon: unref(personAddOutline),
                            class: "sub-menu-icon"
                          }, null, 8, ["icon"]),
                          _cache[3] || (_cache[3] = createBaseVNode("b", { style: { "margin-left": "6px" } }, "Add User", -1))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(IonButtons), { slot: "end" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonTitle), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonButton), {
                              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("closePopover", false)),
                              fill: "solid"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_2, [
                                  createBaseVNode("div", _hoisted_3, [
                                    createVNode(_component_ion_icon, {
                                      icon: unref(closeCircleOutline),
                                      slot: "start",
                                      class: "sub-menu-icon"
                                    }, null, 8, ["icon"]),
                                    _cache[4] || (_cache[4] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Close", -1))
                                  ])
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
                })
              ]),
              _: 1
            }),
            createVNode(unref(IonContent), { class: "ion-padding" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCol), null, {
                          default: withCtx(() => [
                            createVNode(adduser, {
                              user_id: user_id.value,
                              action: action.value,
                              onSaveEvent: closeModalAndOpenEditUser
                            }, null, 8, ["user_id", "action"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(unref(IonFooter), { translucent: true }, {
              default: withCtx(() => [
                createVNode(unref(IonToolbar), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonButtons), { slot: "end" }, {
                      default: withCtx(() => [
                        createVNode(unref(IonTitle), null, {
                          default: withCtx(() => [
                            createVNode(unref(IonButton), {
                              onClick: saveAction,
                              fill: "solid",
                              color: "success"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_6, [
                                  createBaseVNode("div", _hoisted_7, [
                                    createVNode(_component_ion_icon, {
                                      icon: unref(saveOutline),
                                      slot: "start",
                                      class: "sub-menu-icon"
                                    }, null, 8, ["icon"]),
                                    _cache[5] || (_cache[5] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Save", -1))
                                  ])
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
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(editUserModal, {
          is_open: isPopoverOpen.value,
          user_id: user_id.value,
          onClosePopover: _cache[2] || (_cache[2] = ($event) => isPopoverOpen.value = false),
          onUpdated: reload
        }, null, 8, ["is_open", "user_id"])
      ], 64);
    };
  }
});

const addUserModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-16a0dfa6"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "usersTemplate",
  props: {
    items: {},
    search_fields: {}
  },
  emits: ["reload", "closeModal"],
  setup(__props, { emit: __emit }) {
    const searchValue = ref("");
    const isPopoverOpen = ref(false);
    const user_id = ref("");
    const InnerActionBtnPropeties = {
      name: "add user",
      show: true,
      fn: OpenAddUserModal,
      icon: personAddOutline,
      show_icon: true
    };
    const search_properties = [
      {
        placeHolder: "Search for username",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Please provide a reason"
      }
    ];
    function OpenAddUserModal() {
      isPopoverOpen.value = true;
      user_id.value = "";
    }
    function notesUpDated_fn1(event) {
      searchValue.value = event.target.value;
    }
    function reload(user_id2) {
      emit("reload", user_id2);
    }
    function closeModal(data) {
      emit("closeModal", data);
    }
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonRow), { class: "search-container" }, {
          default: withCtx(() => [
            createVNode(unref(IonRow), { class: "search-row" }, {
              default: withCtx(() => [
                createVNode(unref(IonCol), { class: "input-col" }, {
                  default: withCtx(() => [
                    createVNode(BasicInputField, {
                      placeholder: search_properties[0].placeHolder,
                      icon: unref(searchOutline),
                      inputValue: search_properties[0].dataValue.value,
                      "onUpdate:inputValue": search_properties[0].dataHandler,
                      minHeight: 50,
                      "-inner-action-btn-propeties": InnerActionBtnPropeties,
                      "onUpdate:InnerActionBtnPropetiesAction": InnerActionBtnPropeties.fn
                    }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue", "onUpdate:InnerActionBtnPropetiesAction"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonRow), null, {
          default: withCtx(() => [
            createVNode(unref(IonCol), { size: "12" }, {
              default: withCtx(() => [
                createVNode(UserCardList, {
                  users: __props.items,
                  filterValue: searchValue.value,
                  onReload: closeModal,
                  search: searchValue.value
                }, null, 8, ["users", "filterValue", "search"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(addUserModal, {
          is_open: isPopoverOpen.value,
          user_id: user_id.value,
          onClosePopover: _cache[0] || (_cache[0] = ($event) => isPopoverOpen.value = false),
          onUpdated: reload
        }, null, 8, ["is_open", "user_id"])
      ], 64);
    };
  }
});

const usersTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3c2cb1d1"]]);

const _sfc_main = defineComponent({
  name: "Users",
  components: {
    IonContent,
    IonPage,
    IonRow,
    IonCol,
    IonIcon,
    Toolbar,
    usersTemplate,
    NavigationMenu,
    TableSkeletonLoader
  },
  setup() {
    const isPopoverOpen = ref(false);
    const isLoading = ref(true);
    const search_fields_ = ref([
      {
        value: "username",
        name: "username",
        selected: true
      }
    ]);
    const user_id = ref("");
    const _items_ = ref([]);
    onMounted(async () => {
      initNavData();
      await getUsers();
    });
    async function getUsers() {
      isLoading.value = false;
    }
    function closeModal(data) {
      if (data == false) {
        setTimeout(() => {
          getUsers();
        }, 500);
      }
    }
    function nav(url) {
      router.push(url);
    }
    function initNavData() {
      const store = EIRreportsStore();
      store.setNavigationPayload("Manage Users", true, false, "/", "home", "");
    }
    return {
      isPopoverOpen,
      user_id,
      _items_,
      search_fields_,
      nav,
      chevronBackOutline,
      initNavData,
      getUsers,
      isLoading,
      closeModal,
      peopleOutline
    };
  },
  watch: {
    $route: {
      async handler(data) {
        if (data.name == "users") this.initNavData();
        await this.getUsers();
      },
      deep: true
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavigationMenu = resolveComponent("NavigationMenu");
  const _component_TableSkeletonLoader = resolveComponent("TableSkeletonLoader");
  const _component_usersTemplate = resolveComponent("usersTemplate");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_NavigationMenu, { "title-icon": _ctx.peopleOutline }, null, 8, ["title-icon"]),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          _ctx.isLoading ? (openBlock(), createBlock(_component_TableSkeletonLoader, { key: 0 })) : (openBlock(), createBlock(_component_usersTemplate, {
            key: 1,
            items: _ctx._items_,
            search_fields: _ctx.search_fields_,
            onReload: _ctx.getUsers,
            onCloseModal: _ctx.closeModal
          }, null, 8, ["items", "search_fields", "onReload", "onCloseModal"]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-76cb90fa"]]);

export { users as default };
