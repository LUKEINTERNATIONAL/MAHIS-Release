import { q as defineComponent, r as ref, aI as useRouter, cs as useRoute, a1 as onMounted, d as computed, v as resolveComponent, N as createBlock, y as openBlock, B as withCtx, z as createVNode, E as unref, aD as IonContent, ax as IonGrid, ae as IonRow, x as createElementBlock, H as Fragment, Q as renderList, ay as IonCol, bs as IonPage } from './vendor-DGIzCW4f.js';
import { R as REPORTS, T as TaskCard } from './programReports-ClqO20me.js';
import { T as Toolbar } from '../index-D_1ZD1MC.js';
import { N as NavigationMenu } from './NavigationMenu-CF9Rgsw4.js';

const defaultIcon = "reports.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NewMoHReports",
  setup(__props) {
    const viewableItems = ref(REPORTS);
    const router = useRouter();
    const route = useRoute();
    const itemIcon = (item) => {
      return defaultIcon;
    };
    const onClick = (item) => {
      if (item.pathUrl) {
        router.push(item.pathUrl);
      } else if (typeof item.action === "function") {
        item.action();
      } else if (item.pathName) {
        router.push({ name: item.pathName });
      }
    };
    const filterViewable = async (items) => {
      const verified = items.map(async (i) => {
        const d = { ...i };
        d.canShow = d.condition ? await d.condition() : true;
        return d;
      });
      return (await Promise.all(verified)).filter((i) => i.canShow);
    };
    const setItems = async (items) => {
      viewableItems.value = await filterViewable(items);
    };
    onMounted(async () => {
      setItems(REPORTS[0].files);
    });
    const showNavigationMenu = computed(() => {
      return route.path.startsWith("idsr_weekly");
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(unref(IonPage), null, {
        default: withCtx(() => [
          showNavigationMenu.value ? (openBlock(), createBlock(NavigationMenu, { key: 0 })) : (openBlock(), createBlock(Toolbar, { key: 1 })),
          createVNode(unref(IonContent), { fullscreen: true }, {
            default: withCtx(() => [
              createVNode(unref(IonGrid), { style: { "margin-top": "30px", "margin-left": "8%", "margin-right": "8%" } }, {
                default: withCtx(() => [
                  createVNode(unref(IonRow), null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(viewableItems.value, (item, index) => {
                        return openBlock(), createBlock(unref(IonCol), {
                          key: index,
                          "size-lg": "4",
                          "size-sm": "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(TaskCard, {
                              onClick: ($event) => onClick(item),
                              title: item.name,
                              icon: itemIcon(item)
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
              }),
              createVNode(_component_router_view)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
