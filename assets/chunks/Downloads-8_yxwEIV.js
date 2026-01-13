import { q as defineComponent, aH as useRouter, r as ref, a2 as onMounted, O as createBlock, y as openBlock, A as withCtx, z as createVNode, E as unref, H as IonContent, B as createBaseVNode, x as createElementBlock, G as createCommentVNode, dt as IonImg, aB as IonTitle, a5 as createTextVNode, C as toDisplayString, J as Fragment, R as renderList, bI as IonCard, b9 as IonCardContent, P as normalizeStyle, L as IonIcon, N as IonButton, a4 as normalizeClass, cm as checkmarkCircle, du as downloadOutline, a8 as withModifiers, dv as arrowBack, br as IonPage, dw as desktopOutline, dx as logoApple, dy as phonePortraitOutline } from './vendor-BPW-J91F.js';
import { i as img } from './Img-B85mlUNz.js';
import { _ as _export_sfc } from '../index-D7kYL7Nj.js';

const _hoisted_1 = { class: "download-container" };
const _hoisted_2 = { class: "header-section" };
const _hoisted_3 = { class: "logo-container" };
const _hoisted_4 = {
  key: 0,
  class: "version-info"
};
const _hoisted_5 = {
  key: 1,
  class: "loading-text"
};
const _hoisted_6 = { class: "downloads-grid" };
const _hoisted_7 = { class: "card-header" };
const _hoisted_8 = { class: "platform-info" };
const _hoisted_9 = { class: "platform-name" };
const _hoisted_10 = { class: "platform-description" };
const _hoisted_11 = { class: "file-details" };
const _hoisted_12 = { class: "detail-item" };
const _hoisted_13 = {
  key: 0,
  class: "detail-item"
};
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 3 };
const _hoisted_16 = { class: "help-buttons" };
const _hoisted_17 = { class: "back-link" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Downloads",
  setup(__props) {
    const router = useRouter();
    const selectedPlatform = ref(null);
    const latestVersion = ref("");
    const isLoading = ref(true);
    const mode = ref("test");
    const downloads = ref([
      {
        id: "windows",
        name: "Windows",
        icon: desktopOutline,
        file: "",
        color: "#0078D4",
        description: "For Windows 10 and above"
      },
      {
        id: "mac",
        name: "macOS",
        icon: logoApple,
        file: "",
        color: "#000000",
        description: "For macOS 10.15 and above"
      },
      {
        id: "linux",
        name: "Linux",
        icon: desktopOutline,
        file: "",
        color: "#FCC624",
        description: "For Debian/Ubuntu distributions"
      },
      {
        id: "android",
        name: "Android",
        icon: phonePortraitOutline,
        file: "",
        color: "#3DDC84",
        description: "For Android 8.0 and above"
      }
    ]);
    const formatBytes = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
    };
    const fetchLatestRelease = async () => {
      try {
        isLoading.value = true;
        const repoUrl = mode.value === "production" ? "https://api.github.com/repos/LUKEINTERNATIONAL/MAHIS-Production/releases/latest" : "https://api.github.com/repos/LUKEINTERNATIONAL/MAHIS-Release/releases/latest";
        const response = await fetch(repoUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch latest release");
        }
        const release = await response.json();
        latestVersion.value = release.tag_name;
        release.assets.forEach((asset) => {
          const fileName = asset.name.toLowerCase();
          if (fileName.endsWith(".exe")) {
            const windowsItem = downloads.value.find((d) => d.id === "windows");
            if (windowsItem) {
              windowsItem.file = asset.name;
              windowsItem.size = formatBytes(asset.size);
            }
          } else if (fileName.endsWith(".dmg")) {
            const macItem = downloads.value.find((d) => d.id === "mac");
            if (macItem) {
              macItem.file = asset.name;
              macItem.size = formatBytes(asset.size);
            }
          } else if (fileName.endsWith(".deb") || fileName.endsWith(".appimage")) {
            const linuxItem = downloads.value.find((d) => d.id === "linux");
            if (linuxItem) {
              linuxItem.file = asset.name;
              linuxItem.size = formatBytes(asset.size);
            }
          } else if (fileName.endsWith(".apk")) {
            const androidItem = downloads.value.find((d) => d.id === "android");
            if (androidItem) {
              androidItem.file = asset.name;
              androidItem.size = formatBytes(asset.size);
            }
          }
        });
        console.log("Latest release loaded:", latestVersion.value);
      } catch (error) {
        console.error("Error fetching latest release:", error);
        latestVersion.value = "v1.0.25-alpha.1";
        setFallbackDownloads();
      } finally {
        isLoading.value = false;
      }
    };
    const setFallbackDownloads = () => {
      downloads.value = [
        {
          id: "windows",
          name: "Windows",
          icon: desktopOutline,
          file: "MaHIS-Setup-1.0.25-alpha.1.exe",
          size: "85 MB",
          color: "#0078D4",
          description: "For Windows 10 and above"
        },
        {
          id: "mac",
          name: "macOS",
          icon: logoApple,
          file: "MaHIS-1.0.25-alpha.1.dmg",
          size: "92 MB",
          color: "#000000",
          description: "For macOS 10.15 and above"
        },
        {
          id: "linux",
          name: "Linux",
          icon: desktopOutline,
          file: "mahis_1.0.25-alpha.1_amd64.deb",
          size: "78 MB",
          color: "#FCC624",
          description: "For Debian/Ubuntu distributions"
        },
        {
          id: "android",
          name: "Android",
          icon: phonePortraitOutline,
          file: "MaHIS-1.0.25-alpha.1.apk",
          size: "45 MB",
          color: "#3DDC84",
          description: "For Android 8.0 and above"
        }
      ];
    };
    const handleDownload = (file, platform) => {
      if (!file) {
        console.error("No file available for download");
        return;
      }
      selectedPlatform.value = platform;
      const baseUrl = `https://github.com/LUKEINTERNATIONAL/MAHIS-Release/releases/download/${latestVersion.value}`;
      const downloadUrl = `${baseUrl}/${file}`;
      window.open(downloadUrl, "_blank");
      console.log(`Downloading ${file} from ${downloadUrl}`);
      setTimeout(() => {
        selectedPlatform.value = null;
      }, 3e3);
    };
    const goToLogin = () => {
      router.push("/");
    };
    onMounted(() => {
      fetchLatestRelease();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          createVNode(unref(IonContent), { class: "ion-padding download-page" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(unref(IonImg), {
                      src: unref(img)("mw.png"),
                      class: "logo-img"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(unref(IonTitle), { class: "page-title" }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Download MaHIS", -1)
                    ])]),
                    _: 1
                  }),
                  _cache[1] || (_cache[1] = createBaseVNode("p", { class: "page-subtitle" }, "Malawi Health Information System - Access healthcare data anywhere, anytime", -1)),
                  latestVersion.value ? (openBlock(), createElementBlock("p", _hoisted_4, "Latest Version: " + toDisplayString(latestVersion.value), 1)) : createCommentVNode("", true),
                  isLoading.value ? (openBlock(), createElementBlock("p", _hoisted_5, "Checking for latest version...")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(downloads.value, (item) => {
                    return openBlock(), createBlock(unref(IonCard), {
                      key: item.id,
                      class: "download-card"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(IonCardContent), null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_7, [
                              createBaseVNode("div", {
                                class: "icon-wrapper",
                                style: normalizeStyle({ backgroundColor: item.color + "15" })
                              }, [
                                createVNode(unref(IonIcon), {
                                  icon: item.icon,
                                  style: normalizeStyle({ color: item.color }),
                                  class: "platform-icon"
                                }, null, 8, ["icon", "style"])
                              ], 4),
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("h3", _hoisted_9, toDisplayString(item.name), 1),
                                createBaseVNode("p", _hoisted_10, toDisplayString(item.description), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_11, [
                              createBaseVNode("p", _hoisted_12, [
                                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "detail-label" }, "File:", -1)),
                                createTextVNode(" " + toDisplayString(item.file), 1)
                              ]),
                              item.size ? (openBlock(), createElementBlock("p", _hoisted_13, [
                                _cache[3] || (_cache[3] = createBaseVNode("span", { class: "detail-label" }, "Size:", -1)),
                                createTextVNode(" " + toDisplayString(item.size), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode(unref(IonButton), {
                              expand: "block",
                              disabled: selectedPlatform.value === item.id || isLoading.value,
                              onClick: ($event) => handleDownload(item.file, item.id),
                              class: normalizeClass(["download-button", { downloaded: selectedPlatform.value === item.id }])
                            }, {
                              default: withCtx(() => [
                                selectedPlatform.value === item.id ? (openBlock(), createBlock(unref(IonIcon), {
                                  key: 0,
                                  icon: unref(checkmarkCircle),
                                  slot: "start"
                                }, null, 8, ["icon"])) : (openBlock(), createBlock(unref(IonIcon), {
                                  key: 1,
                                  icon: unref(downloadOutline),
                                  slot: "start"
                                }, null, 8, ["icon"])),
                                selectedPlatform.value === item.id ? (openBlock(), createElementBlock("span", _hoisted_14, "Downloaded!")) : (openBlock(), createElementBlock("span", _hoisted_15, "Download for " + toDisplayString(item.name), 1))
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick", "class"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode(unref(IonCard), { class: "requirements-card" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [..._cache[4] || (_cache[4] = [
                        createBaseVNode("h2", { class: "section-title" }, "System Requirements", -1),
                        createBaseVNode("div", { class: "requirements-grid" }, [
                          createBaseVNode("div", { class: "requirement-section" }, [
                            createBaseVNode("h3", { class: "requirement-title" }, "Desktop Applications"),
                            createBaseVNode("ul", { class: "requirement-list" }, [
                              createBaseVNode("li", null, [
                                createBaseVNode("span", { class: "bullet" }, "•"),
                                createBaseVNode("span", null, "Minimum 4GB RAM (8GB recommended)")
                              ]),
                              createBaseVNode("li", null, [
                                createBaseVNode("span", { class: "bullet" }, "•"),
                                createBaseVNode("span", null, "500MB free disk space")
                              ]),
                              createBaseVNode("li", null, [
                                createBaseVNode("span", { class: "bullet" }, "•"),
                                createBaseVNode("span", null, "Internet connection for sync")
                              ])
                            ])
                          ]),
                          createBaseVNode("div", { class: "requirement-section" }, [
                            createBaseVNode("h3", { class: "requirement-title" }, "Mobile Application"),
                            createBaseVNode("ul", { class: "requirement-list" }, [
                              createBaseVNode("li", null, [
                                createBaseVNode("span", { class: "bullet" }, "•"),
                                createBaseVNode("span", null, "Android 8.0 or higher")
                              ]),
                              createBaseVNode("li", null, [
                                createBaseVNode("span", { class: "bullet" }, "•"),
                                createBaseVNode("span", null, "Minimum 2GB RAM")
                              ]),
                              createBaseVNode("li", null, [
                                createBaseVNode("span", { class: "bullet" }, "•"),
                                createBaseVNode("span", null, "200MB free storage space")
                              ])
                            ])
                          ])
                        ], -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonCard), { class: "help-card" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardContent), null, {
                      default: withCtx(() => [
                        _cache[9] || (_cache[9] = createBaseVNode("h2", { class: "section-title" }, "Need Help Installing?", -1)),
                        _cache[10] || (_cache[10] = createBaseVNode("p", { class: "help-text" }, "Follow our step-by-step installation guides for your platform:", -1)),
                        createBaseVNode("div", _hoisted_16, [
                          createVNode(unref(IonButton), {
                            fill: "outline",
                            class: "guide-button"
                          }, {
                            default: withCtx(() => [..._cache[5] || (_cache[5] = [
                              createTextVNode("Windows Guide", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(IonButton), {
                            fill: "outline",
                            class: "guide-button"
                          }, {
                            default: withCtx(() => [..._cache[6] || (_cache[6] = [
                              createTextVNode("macOS Guide", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(IonButton), {
                            fill: "outline",
                            class: "guide-button"
                          }, {
                            default: withCtx(() => [..._cache[7] || (_cache[7] = [
                              createTextVNode("Linux Guide", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(IonButton), {
                            fill: "outline",
                            class: "guide-button"
                          }, {
                            default: withCtx(() => [..._cache[8] || (_cache[8] = [
                              createTextVNode("Android Guide", -1)
                            ])]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("a", {
                    href: "#",
                    onClick: withModifiers(goToLogin, ["prevent"])
                  }, [
                    createVNode(unref(IonIcon), { icon: unref(arrowBack) }, null, 8, ["icon"]),
                    _cache[11] || (_cache[11] = createTextVNode(" Back to Login ", -1))
                  ])
                ])
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

const Downloads = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cdf06e4c"]]);

export { Downloads as default };
