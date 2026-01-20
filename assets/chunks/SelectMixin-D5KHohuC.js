import { H as HisKeyboard, k as kbHandler } from './KbHandler-DLos1hu-.js';
import BaseInput from './BaseTextInput-BfXp1jw_.js';
import { Q as QWERTY, V as ViewPort } from './ReportMixin.vue_vue_type_script_lang-CdGs4U8x.js';
import { _ as _sfc_main$1 } from './FieldMixin.vue_vue_type_script_lang-CCZmajiR.js';
import { v as defineComponent, aF as IonContent, ft as IonInfiniteScrollContent, fu as IonInfiniteScroll, aA as IonCol, ag as IonRow, az as IonGrid, a8 as IonLabel, ap as IonItem, ao as IonList } from './vendor-B4fW45I4.js';
import { l as lodashExports } from './lodash-YnuECrwU.js';
import { _ as _export_sfc } from '../index-C9DqaTYI.js';

const _sfc_main = defineComponent({
  components: {
    IonList,
    IonItem,
    IonLabel,
    HisTextInput: BaseInput,
    HisKeyboard,
    ViewPort,
    IonGrid,
    IonRow,
    IonCol,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonContent
  },
  mixins: [_sfc_main$1],
  data: () => ({
    showKeyboard: false,
    selected: "",
    filter: "",
    filtered: [],
    keyboard: QWERTY,
    listData: [],
    infiniteScroll: {
      enabled: false,
      page: 1,
      limit: 10,
      threshold: "100px",
      handler: void 0
    }
  }),
  created() {
    this.showKeyboard = this.config?.showKeyboard === true;
    this.infiniteScroll.enabled = this.config?.infiniteScroll?.enabled === true;
    this.infiniteScroll.page = this.config?.infiniteScroll?.page || 1;
    this.infiniteScroll.limit = this.config?.infiniteScroll?.limit || 10;
    this.infiniteScroll.threshold = this.config?.infiniteScroll?.threshold || "100px";
    this.infiniteScroll.handler = this.config?.infiniteScroll?.handler;
  },
  watch: {
    footerButtonEvent: {
      handler(event) {
        if (lodashExports.isPlainObject(event.onClickComponentEvents)) {
          const e = event?.onClickComponentEvents || {};
          if (e && typeof e.setValue === "function") {
            const value = e.setValue(event);
            if (typeof value === "string") {
              this.filter = value;
              this.selected = value;
            }
          }
        }
      },
      deep: true
    },
    listData: {
      handler(data) {
        if (data) this.filtered = data;
      },
      deep: true,
      immediate: true
    },
    filter: {
      async handler(filter) {
        if (!filter) {
          this.filtered = this.listData;
          return;
        }
        if (this.config?.isFilterDataViaApi) {
          this.filtered = await this.options(this.fdata, filter);
          if (this.selected === this.filter) {
            const foundOption = lodashExports.find(this.filtered, { label: this.filter });
            if (foundOption) {
              this.$emit("onValue", foundOption);
            }
          }
          return;
        }
        if (this.infiniteScroll.enabled) {
          this.infiniteScroll.page = 1;
        }
        this.filtered = this.listData.filter((item) => this.isMatch(item.label, this.filter));
      },
      immediate: true
    }
  },
  methods: {
    isMatch(itemA, itemB) {
      return itemA.match(new RegExp(itemB, "i"));
    },
    clearSelection() {
      this.filter = "";
      this.selected = "";
    },
    onKbValue(text, filtered = true) {
      if (!filtered || this.selected === text) return;
      this.filter = text;
      this.selected = this.filter;
    },
    keypress(text) {
      if (!this.filter) this.selected = "";
      this.filter = kbHandler(text, this.selected);
      this.selected = this.filter;
    },
    async pushData(evt) {
      if (this.infiniteScroll.enabled && typeof this.infiniteScroll.handler === "function") {
        this.infiniteScroll.page++;
        const items = await this.infiniteScroll.handler(this.filter, this.infiniteScroll.page, this.infiniteScroll.limit);
        this.listData.push(...items);
      }
      evt.target.complete();
    }
  }
});

const SelectMixin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15cec2ec"]]);

export { SelectMixin as default };
