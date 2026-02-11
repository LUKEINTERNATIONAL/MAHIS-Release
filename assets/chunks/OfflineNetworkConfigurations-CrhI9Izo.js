import { s as defineComponent, f as ref, a2 as onMounted, y as openBlock, O as createBlock, B as withCtx, z as createElementBlock, A as createVNode, F as unref, M as IonSpinner, C as createBaseVNode, H as createCommentVNode, aG as IonContent, af as IonRow, aA as IonCol, a4 as normalizeClass, L as IonIcon, cn as checkmarkCircle, co as alertCircle, a5 as createTextVNode, D as toDisplayString, N as IonButton, bu as IonPage, c as computed, W as alertController } from './vendor-DrpjccQs.js';
import { Q as useGlobalPropertyStore, T as Toolbar, z as StandardForm, C as useExposeFromStandardForm, G as toastSuccess, x as toastDanger, S as Service, aN as useNetworkConfig, y as StandardValidations, _ as _export_sfc } from '../index-CLlkGLFm.js';

const _hoisted_1 = {
  key: 0,
  class: "spinner-overlay"
};
const _hoisted_2 = { class: "positionCenter" };
const _hoisted_3 = { class: "registration_ion_card" };
const _hoisted_4 = { class: "_card_content" };
const _hoisted_5 = {
  key: 0,
  class: "connection-status-section"
};
const _hoisted_6 = { class: "status-indicator" };
const _hoisted_7 = {
  key: 0,
  class: "timestamp"
};
const _hoisted_8 = { class: "action-buttons" };
const LAST_TEST_KEY = "network_last_test_result";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OfflineNetworkConfigurations",
  setup(__props) {
    const globalPropertyStore = useGlobalPropertyStore();
    const config = ref(globalPropertyStore.getFacilityNetworkConfig());
    const isLoading = ref(false);
    const isTestingConnection = ref(false);
    const connectionStatus = ref(null);
    const connectionTimestamp = ref(null);
    const networkConfig = useNetworkConfig();
    const { formRef, getFormValues } = useExposeFromStandardForm();
    const networkSettingsForm = computed(() => {
      return [
        {
          componentType: "inputField",
          header: "Username",
          name: "couchdbUsername",
          value: config.value?.couchdbUsername,
          validation: StandardValidations.required,
          grid: { s: "6" }
        },
        {
          componentType: "inputField",
          header: "Password",
          name: "couchdbPassword",
          type: "password",
          value: config.value?.couchdbPassword,
          validation: StandardValidations.required,
          grid: { s: "6" }
        },
        {
          componentType: "inputField",
          header: "IP Address",
          name: "couchdbHost",
          value: config.value?.couchdbHost,
          validation: StandardValidations.required,
          grid: { s: "6" }
        },
        {
          componentType: "inputField",
          header: "Port Number",
          name: "couchdbPort",
          value: config.value?.couchdbPort,
          validation: StandardValidations.required,
          grid: { s: "6" }
        },
        {
          componentType: "Heading",
          name: "Protocol",
          grid: { s: "4" }
        },
        {
          componentType: "radioButtonField",
          name: "couchdbProtocol",
          validation: StandardValidations.required,
          type: "inline",
          grid: { s: "6" },
          value: config.value?.couchdbProtocol,
          options: [
            {
              label: "https",
              value: "https"
            },
            {
              label: "http",
              value: "http"
            }
          ]
        }
      ];
    });
    const handleTestConnection = async () => {
      isTestingConnection.value = true;
      connectionStatus.value = null;
      connectionTimestamp.value = null;
      try {
        const formValues = getFormValues();
        const { couchdbUsername, couchdbPassword, couchdbHost, couchdbPort, couchdbProtocol } = formValues;
        if (!couchdbUsername || !couchdbPassword || !couchdbHost || !couchdbProtocol) {
          throw new Error("Please fill in all required fields");
        }
        const username = couchdbUsername.trim();
        const password = couchdbPassword.trim();
        const host = couchdbHost.trim();
        const protocol = couchdbProtocol.trim();
        const auth = btoa(`${username}:${password}`);
        const port = couchdbPort ? `:${couchdbPort}` : "";
        const baseUrl = `${protocol}://${host}${port}`;
        console.log("Testing connection to:", baseUrl);
        const response = await fetch(`${baseUrl}/`, {
          method: "GET",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json"
          },
          signal: AbortSignal.timeout(1e4)
        });
        if (response.ok) {
          const data = await response.json();
          if (data.couchdb === "Welcome") {
            connectionStatus.value = "available";
            connectionTimestamp.value = (/* @__PURE__ */ new Date()).toLocaleString();
            localStorage.setItem(
              LAST_TEST_KEY,
              JSON.stringify({
                status: "available",
                timestamp: connectionTimestamp.value,
                version: data.version
              })
            );
            toastSuccess(`Connected successfully! CouchDB version: ${data.version}`, 3e3);
            await handleSaveAsGlobal();
          } else {
            throw new Error("Server responded but is not CouchDB");
          }
        } else {
          let errorMessage = "Connection failed";
          switch (response.status) {
            case 401:
              errorMessage = "Authentication failed - Invalid username or password";
              break;
            case 403:
              errorMessage = "Access forbidden - Check user permissions";
              break;
            case 404:
              errorMessage = "CouchDB server not found at this address";
              break;
            case 500:
              errorMessage = "CouchDB server error";
              break;
            default:
              errorMessage = `Connection failed with status: ${response.status}`;
          }
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error("Connection test failed:", error);
        connectionStatus.value = "error";
        connectionTimestamp.value = (/* @__PURE__ */ new Date()).toLocaleString();
        localStorage.setItem(
          LAST_TEST_KEY,
          JSON.stringify({
            status: "error",
            timestamp: connectionTimestamp.value,
            error: error.message
          })
        );
        if (error.name === "AbortError" || error.name === "TimeoutError") {
          toastDanger("Connection timeout - Check your network and server address", 5e3);
        } else if (error.message.includes("fetch")) {
          toastDanger("Network error - Cannot reach the server", 5e3);
        } else {
          toastDanger(error.message, 5e3);
        }
      } finally {
        isTestingConnection.value = false;
      }
    };
    const handleSaveAsGlobal = async () => {
      const alert = await alertController.create({
        header: "Save as Facility Default",
        message: "This will save the configuration for all users at this facility. Other users will automatically use these settings when they log in. Continue?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel"
          },
          {
            text: "Save for All Users",
            handler: async () => {
              isLoading.value = true;
              try {
                const formValues = getFormValues();
                const { couchdbHostRemote } = Service.getCouchdbConfigRemote();
                const { couchdbHost } = Service.getCouchdbConfig();
                const configData = {
                  couchdbUsername: formValues.couchdbUsername,
                  couchdbPassword: formValues.couchdbPassword,
                  couchdbHost: formValues.couchdbHost,
                  couchdbPort: formValues.couchdbPort || "",
                  couchdbProtocol: formValues.couchdbProtocol,
                  locationId: Service.getUserLocationId(),
                  facilityName: "",
                  configuredBy: Service.getUserName(),
                  configuredAt: (/* @__PURE__ */ new Date()).toISOString(),
                  configSource: "global_property"
                };
                await globalPropertyStore.setGlobalProperty("facility_network_config", JSON.stringify(configData));
                networkConfig.setConfig(configData);
                if (couchdbHostRemote != couchdbHost) {
                  await saveReplicationSettings();
                }
                toastSuccess("Facility configuration saved successfully", 3e3);
              } catch (error) {
                console.error("Save error:", error);
                toastDanger("Failed to save facility configuration", 3e3);
              } finally {
                isLoading.value = false;
              }
            }
          }
        ]
      });
      await alert.present();
    };
    const ensureReplicatorDatabase = async () => {
      const { couchdbUsername, couchdbPassword, couchdbPort, couchdbHost, couchdbProtocol } = Service.getCouchdbConfig();
      console.log("🚀 ~ ensureReplicatorDatabase ~ couchdbHost:", couchdbHost);
      const auth = btoa(`${couchdbUsername}:${couchdbPassword}`);
      const port = couchdbPort ? `:${couchdbPort}` : "";
      const checkResponse = await fetch(`${couchdbProtocol}://${couchdbHost}${port}/_replicator`, {
        method: "HEAD",
        headers: {
          Authorization: `Basic ${auth}`
        }
      });
      if (checkResponse.status === 404) {
        const port2 = couchdbPort ? `:${couchdbPort}` : "";
        const createResponse = await fetch(`${couchdbProtocol}://${couchdbHost}${port2}/_replicator`, {
          method: "PUT",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json"
          }
        });
        if (!createResponse.ok) {
          throw new Error(`Failed to create _replicator database: ${createResponse.status}`);
        }
        console.log("_replicator database created successfully");
      }
    };
    const saveReplicationSettings = async () => {
      await ensureReplicatorDatabase();
      const { couchdbUsername, couchdbPassword, couchdbPort, couchdbHost, couchdbProtocol } = Service.getCouchdbConfig();
      const replicationJobs = buildReplicationDoc();
      const auth = btoa(`${couchdbUsername}:${couchdbPassword}`);
      const port = couchdbPort ? `:${couchdbPort}` : "";
      const replicatorUrl = `${couchdbProtocol}://${couchdbHost}${port}/_replicator`;
      const promises = replicationJobs.map(async (job) => {
        try {
          const existingResponse = await fetch(`${replicatorUrl}/${job._id}`, {
            method: "GET",
            headers: {
              Authorization: `Basic ${auth}`,
              "Content-Type": "application/json"
            }
          });
          if (existingResponse.ok) {
            const existingDoc = await existingResponse.json();
            const updatedJob = {
              ...job,
              _rev: existingDoc._rev
              // Include revision for update
            };
            const updateResponse = await fetch(`${replicatorUrl}/${job._id}`, {
              method: "PUT",
              headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(updatedJob)
            });
            if (!updateResponse.ok) {
              throw new Error(`Failed to update replication job ${job._id}: ${updateResponse.status} - ${await updateResponse.text()}`);
            }
            return updateResponse.json();
          } else if (existingResponse.status === 404) {
            const createResponse = await fetch(replicatorUrl, {
              method: "POST",
              headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(job)
            });
            if (!createResponse.ok) {
              throw new Error(`Failed to create replication job ${job._id}: ${createResponse.status} - ${await createResponse.text()}`);
            }
            return createResponse.json();
          } else {
            throw new Error(`Error checking existing replication ${job._id}: ${existingResponse.status} - ${await existingResponse.text()}`);
          }
        } catch (error) {
          console.error(`Error processing replication job ${job._id}:`, error);
          throw error;
        }
      });
      await Promise.all(promises);
    };
    const buildReplicationDoc = () => {
      const { couchdbHostRemote, couchdbPortRemote, couchdbUsernameRemote, couchdbPasswordRemote, couchdbProtocolRemote } = Service.getCouchdbConfigRemote();
      const { couchdbUsername, couchdbPassword, couchdbPort, couchdbHost, couchdbProtocol } = Service.getCouchdbConfig();
      const databaseNames = [...databaseConfig.liveSyncDatabases, ...databaseConfig.periodicSyncDatabases];
      let replicationJobs = [];
      const locationID = Service.getUserLocationId();
      for (const name of databaseNames) {
        const port = couchdbPort ? `:${couchdbPort}` : "";
        const portRemote = couchdbPortRemote ? `:${couchdbPortRemote}` : "";
        let pull_data = {
          _id: `pull_${locationID}_${name}`,
          source: `${couchdbProtocolRemote}://${couchdbUsernameRemote}:${couchdbPasswordRemote}@${couchdbHostRemote}${portRemote}/${name}`,
          target: `${couchdbProtocol}://${couchdbUsername}:${couchdbPassword}@${couchdbHost}${port}/${name}`,
          create_target: true,
          continuous: true
        };
        let push_data = {
          _id: `push_${locationID}_${name}`,
          target: `${couchdbProtocolRemote}://${couchdbUsernameRemote}:${couchdbPasswordRemote}@${couchdbHostRemote}${portRemote}/${name}`,
          source: `${couchdbProtocol}://${couchdbUsername}:${couchdbPassword}@${couchdbHost}${port}/${name}`,
          create_target: true,
          continuous: true
        };
        if (name === "patients_records") {
          pull_data.selector = { location_id: Service.getUserLocationId() };
          push_data.selector = { location_id: Service.getUserLocationId() };
        }
        if (name === "dde") {
          pull_data.selector = { facility_code: Service.getUserLocationId() };
          push_data.selector = { facility_code: Service.getUserLocationId() };
        }
        replicationJobs.push(pull_data);
        replicationJobs.push(push_data);
      }
      return replicationJobs;
    };
    const loadLastTestResult = () => {
      const lastTest = localStorage.getItem(LAST_TEST_KEY);
      if (lastTest) {
        try {
          const result = JSON.parse(lastTest);
          connectionStatus.value = result.status;
          connectionTimestamp.value = result.timestamp;
        } catch (error) {
          console.error("Failed to parse last test result:", error);
        }
      }
    };
    onMounted(async () => {
      loadLastTestResult();
      await globalPropertyStore.loadFacilityNetworkConfig();
      config.value = globalPropertyStore.getFacilityNetworkConfig();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), {
        class: normalizeClass({ loading: isLoading.value })
      }, {
        default: withCtx(() => [
          isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(unref(IonSpinner), { name: "bubbles" }),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "loading-text" }, "Please wait...", -1))
          ])) : createCommentVNode("", true),
          createVNode(Toolbar),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    _cache[1] || (_cache[1] = createBaseVNode("div", { class: "card_header_main" }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h2", { class: "card_hearder" }, "Set Offline Network Configurations")
                      ])
                    ], -1)),
                    createVNode(unref(IonRow), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonCol), { size: "12" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createVNode(StandardForm, {
                                formData: networkSettingsForm.value,
                                ref_key: "formRef",
                                ref: formRef
                              }, null, 8, ["formData"]),
                              connectionStatus.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["connection-result", connectionStatus.value])
                                }, [
                                  createBaseVNode("div", _hoisted_6, [
                                    createVNode(unref(IonIcon), {
                                      icon: connectionStatus.value === "available" ? unref(checkmarkCircle) : unref(alertCircle)
                                    }, null, 8, ["icon"]),
                                    createTextVNode(" " + toDisplayString(connectionStatus.value === "available" ? "Connection Successful" : "Connection Failed"), 1)
                                  ]),
                                  connectionTimestamp.value ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(connectionTimestamp.value), 1)) : createCommentVNode("", true)
                                ], 2)
                              ])) : createCommentVNode("", true),
                              createBaseVNode("div", _hoisted_8, [
                                createVNode(unref(IonButton), {
                                  onClick: handleTestConnection,
                                  disabled: isTestingConnection.value,
                                  class: "primary-btn",
                                  expand: "block",
                                  fill: "solid"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(isTestingConnection.value ? "Testing Connection..." : "Test And Save Connection"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});

const OfflineNetworkConfigurations = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67d0a193"]]);

export { OfflineNetworkConfigurations as default };
