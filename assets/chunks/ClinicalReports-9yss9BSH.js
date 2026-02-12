import { R as REPORTS, T as TaskCard } from './programReports-BYH1PwmS.js';
import { T as Toolbar, _ as _export_sfc } from '../index-CzDIs3ea.js';
import { i as img } from './Img-B85mlUNz.js';
import { s as defineComponent, aG as IonContent, bu as IonPage, aA as IonCol, af as IonRow, aB as IonGrid, dw as arrowBack, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, A as createVNode, z as createElementBlock, J as Fragment, R as renderList } from './vendor-DrpjccQs.js';

const _sfc_main = defineComponent({
  emits: ["onSublist"],
  setup() {
    return {
      arrowBack
    };
  },
  components: {
    TaskCard,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    Toolbar
  },
  props: {
    resetList: {
      type: Number,
      required: true
    },
    items: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    defaultIcon: "../../../../public/images/reports.png",
    viewableItems: REPORTS
  }),
  mounted() {
    this.setItems(REPORTS[1].files);
  },
  watch: {
    resetList: {
      handler() {
        this.setItems(this.items);
      }
    },
    items: {
      async handler(items) {
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    async setItems(items) {
      this.viewableItems = await this.filterViewable(items);
    },
    async filterViewable(items) {
      const verified = items.map(async (i) => {
        const d = { ...i };
        d.canShow = d.condition ? await d.condition() : true;
        return d;
      });
      return (await Promise.all(verified)).filter((i) => i.canShow);
    },
    async onClick(item) {
      console.log(item);
      if (item.pathUrl) {
        this.$router.push(item.pathUrl);
      } else if (typeof item.action === "function") {
        item.action();
      } else if (item.pathName) {
        this.$router.push({ name: item.pathName });
      } else if (item.files) {
        this.defaultIcon = "sys-setting.png";
        if (item.defaultFilesIcon) {
          this.defaultIcon = item.defaultFilesIcon;
        }
        this.$emit("onSublist");
        this.setItems(item.files);
      }
    },
    itemIcon(item) {
      return img(item.icon ? item.icon : this.defaultIcon);
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Toolbar = resolveComponent("Toolbar");
  const _component_task_card = resolveComponent("task-card");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_grid = resolveComponent("ion-grid");
  const _component_ion_content = resolveComponent("ion-content");
  const _component_ion_page = resolveComponent("ion-page");
  return openBlock(), createBlock(_component_ion_page, null, {
    default: withCtx(() => [
      createVNode(_component_Toolbar),
      createVNode(_component_ion_content, { fullscreen: true }, {
        default: withCtx(() => [
          createVNode(_component_ion_grid, { style: { "margin-top": "30px", "margin-left": "8%", "margin-right": "8%" } }, {
            default: withCtx(() => [
              createVNode(_component_ion_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.viewableItems, (item, index) => {
                    return openBlock(), createBlock(_component_ion_col, {
                      key: index,
                      "size-lg": "4",
                      "size-sm": "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_task_card, {
                          onClick: ($event) => _ctx.onClick(item),
                          title: item.name,
                          icon: _ctx.itemIcon(item)
                        }, null, 8, ["onClick", "title", "icon"])
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
        _: 1
      })
    ]),
    _: 1
  });
}
const ClinicalReports = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ClinicalReports as default };
