import y from"./SelectMixin-6146dd2f.js";import{d as k,af as l,_ as w,a as i,b as o,e as d,f as a,w as n,F as r,j as v,c,m as V,t as C,h as K}from"./index-60ed6206.js";import"./KbHandler-c7388c8f.js";import"./BaseTextInput-153eecd1.js";import"./FieldMixin.vue_vue_type_script_lang-5b0d5ac1.js";const $=k({name:"HisSelect",mixins:[y],data:()=>({isInit:!1}),watch:{clear(){this.clearSelection()}},mounted(){this.init()},activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata),this.isInit||await this.setDefaultValue(),this.isInit=!0},async setDefaultValue(){if(this.defaultValue){const e=await this.defaultValue(this.fdata,this.cdata,this.selected);if(e){const s=l.find(this.listData,{label:e})||l.find(this.listData,{value:e});s?this.onselect(s):(this.selected=e,this.filter=e)}}},async onselect(e){if(this.selected=e.label,this.onValue&&!await this.onValue(e,this)){this.selected="";return}this.$emit("onValue",e)}}});function g(e,s,D,S,F,I){const u=i("his-text-input"),h=i("ion-label"),f=i("ion-item"),p=i("ion-list"),_=i("view-port"),b=i("his-keyboard");return o(),d(r,null,[a(_,{showFull:!e.showKeyboard},{default:n(()=>[a(u,{readonly:!e.showKeyboard,value:e.selected,onOnValue:s[0]||(s[0]=t=>e.onKbValue(t,e.showKeyboard))},null,8,["readonly","value"]),a(p,{class:"view-port-content"},{default:n(()=>[(o(!0),d(r,null,v(e.filtered,(t,m)=>(o(),c(f,{class:"his-md-text",button:"",color:t.label===e.selected?"lightblue":"",lines:t.isChecked?"none":"",key:m,disabled:!!("disabled"in t&&t.disabled),onClick:B=>e.onselect(t)},{default:n(()=>[a(h,null,{default:n(()=>[V(C(t.label),1)]),_:2},1024)]),_:2},1032,["color","lines","disabled","onClick"]))),128))]),_:1})]),_:1},8,["showFull"]),e.showKeyboard?(o(),c(b,{key:0,kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])):K("",!0)],64)}const x=w($,[["render",g],["__scopeId","data-v-99e4c817"]]);export{x as default};