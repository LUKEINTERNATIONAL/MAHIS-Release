import{d as y,b as k,o,x as m,v as d,a4 as f,a5 as V,a1 as C,a6 as D,a7 as A,a8 as b,c,e as _,f as r,q as h,a2 as $,a3 as g}from"./index-b7c786c2.js";import B from"./SelectMixin-2e9de8f2.js";import"./KbHandler-d2e78bb0.js";import"./BaseTextInput-653a8ff8.js";import"./FieldMixin.vue_vue_type_script_lang-ec3ff286.js";const z=y({props:{showTitle:{type:Boolean,default:!0},enabled:{type:Boolean,default:!0},color:{type:String},label:{type:String,required:!0},value:{type:String,required:!0}},computed:{state(){return this.enabled?"".concat(this.color," clickable"):"disabled-card-color"}},methods:{onclick(){this.enabled&&this.$emit("onclick")}}});const E={class:"title"},R={class:"his-sm-text",style:{textAlign:"center"}};function O(e,t,l,a,i,u){return o(),m("div",{class:V("his-card ".concat(e.state)),onClick:t[0]||(t[0]=(...n)=>e.onclick&&e.onclick(...n))},[d("table",null,[d("td",E,f(e.value)+"  ",1),d("td",R,f(e.label),1)])],2)}const q=k(z,[["render",O],["__scopeId","data-v-7146cdca"]]),x=y({components:{ViewPort:C,RegimenCard:q,IonRow:D,IonCol:A},mixins:[B],watch:{clear(e){e&&this.clearSelection()}},computed:{leftItems(){return b.isEmpty(this.listData)?[]:this.listData[0]},rightItems(){return b.isEmpty(this.listData)?[]:this.listData[1]}},async mounted(){this.init()},activated(){this.$emit("onFieldActivated",this)},methods:{async init(){this.$emit("onFieldActivated",this);const e=await this.options(this.fdata);this.listData=this.buildList(e)},buildList(e){const t=[[],[]],l=a=>a.sort((i,u)=>i.value>u.value?1:-1);return e.forEach(a=>{parseInt(a.value.toString())<10?t[0].push(a):t[1].push(a)}),[l(t[0]),l(t[1])]},async onselect(e){if(this.selected=e.label,this.onValue&&!await this.onValue(e)){this.selected="",this.$emit("onValue",null);return}this.onValueUpdate&&(this.listData=await this.onValueUpdate([...this.listData],e)),this.$emit("onValue",e)}}});const F={class:"view-port-content"};function L(e,t,l,a,i,u){const n=c("regimen-card"),v=c("ion-col"),w=c("ion-row"),I=c("view-port");return o(),_(I,null,{default:r(()=>[d("div",F,[h(w,null,{default:r(()=>[h(v,{"size-md":"6","size-sm":"12"},{default:r(()=>[(o(!0),m($,null,g(e.leftItems,(s,p)=>(o(),_(n,{class:"regimen-item",key:p,label:s.label,value:s.value,onOnclick:S=>e.onselect(s),color:s.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["label","value","onOnclick","color"]))),128))]),_:1}),h(v,{"size-md":"6","size-sm":"12"},{default:r(()=>[(o(!0),m($,null,g(e.rightItems,(s,p)=>(o(),_(n,{class:"regimen-item",key:p,label:s.label,value:s.value,onOnclick:S=>e.onselect(s),color:s.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["label","value","onOnclick","color"]))),128))]),_:1})]),_:1})])]),_:1})}const T=k(x,[["render",L],["__scopeId","data-v-63d39285"]]);export{T as default};