System.register(["./index-legacy-d285e615.js","./SelectMixin-legacy-04841313.js","./KbHandler-legacy-47019475.js","./BaseTextInput-legacy-1234ca42.js","./FieldMixin.vue_vue_type_script_lang-legacy-e23546c8.js"],(function(e,t){"use strict";var l,a,i,n,s,c,o,d,r,u,h,v,m,p,g,b,y,f;return{setters:[e=>{l=e.d,a=e.b,i=e.o,n=e.a0,s=e.t,c=e.a3,o=e.a4,d=e.$,r=e.a5,u=e.a6,h=e.a7,v=e.c,m=e.e,p=e.f,g=e.q,b=e.a1,y=e.a2},e=>{f=e.default},null,null,null],execute:function(){var t=document.createElement("style");t.textContent="table[data-v-7146cdca]{width:100%}.title[data-v-7146cdca]{border-style:solid;border-color:#696969;border-width:0px 2px 0px 0px;text-align:center;width:35px;font-weight:700;padding:5px}.his-card[data-v-7146cdca]{padding:.8em}#view-port[data-v-63d39285]{height:75vh}.view-port-content[data-v-63d39285]{height:99%}.regimen-item[data-v-63d39285]{margin:3.8%}\n",document.head.appendChild(t);const w=l({props:{showTitle:{type:Boolean,default:!0},enabled:{type:Boolean,default:!0},color:{type:String},label:{type:String,required:!0},value:{type:String,required:!0}},computed:{state(){return this.enabled?`${this.color} clickable`:"disabled-card-color"}},methods:{onclick(){this.enabled&&this.$emit("onclick")}}}),x={class:"title"},k={class:"his-sm-text",style:{textAlign:"center"}},_=l({components:{ViewPort:d,RegimenCard:a(w,[["render",function(e,t,l,a,d,r){return i(),n("div",{class:o(`his-card ${e.state}`),onClick:t[0]||(t[0]=(...t)=>e.onclick&&e.onclick(...t))},[s("table",null,[s("td",x,c(e.value)+"  ",1),s("td",k,c(e.label),1)])],2)}],["__scopeId","data-v-7146cdca"]]),IonRow:r,IonCol:u},mixins:[f],watch:{clear(e){e&&this.clearSelection()}},computed:{leftItems(){return h.isEmpty(this.listData)?[]:this.listData[0]},rightItems(){return h.isEmpty(this.listData)?[]:this.listData[1]}},async mounted(){this.init()},activated(){this.$emit("onFieldActivated",this)},methods:{async init(){this.$emit("onFieldActivated",this);const e=await this.options(this.fdata);this.listData=this.buildList(e)},buildList(e){const t=[[],[]],l=e=>e.sort(((e,t)=>e.value>t.value?1:-1));return e.forEach((e=>{parseInt(e.value.toString())<10?t[0].push(e):t[1].push(e)})),[l(t[0]),l(t[1])]},async onselect(e){if(this.selected=e.label,this.onValue&&!(await this.onValue(e)))return this.selected="",void this.$emit("onValue",null);this.onValueUpdate&&(this.listData=await this.onValueUpdate([...this.listData],e)),this.$emit("onValue",e)}}}),I={class:"view-port-content"};e("default",a(_,[["render",function(e,t,l,a,c,o){const d=v("regimen-card"),r=v("ion-col"),u=v("ion-row"),h=v("view-port");return i(),m(h,null,{default:p((()=>[s("div",I,[g(u,null,{default:p((()=>[g(r,{"size-md":"6","size-sm":"12"},{default:p((()=>[(i(!0),n(b,null,y(e.leftItems,((t,l)=>(i(),m(d,{class:"regimen-item",key:l,label:t.label,value:t.value,onOnclick:l=>e.onselect(t),color:t.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["label","value","onOnclick","color"])))),128))])),_:1}),g(r,{"size-md":"6","size-sm":"12"},{default:p((()=>[(i(!0),n(b,null,y(e.rightItems,((t,l)=>(i(),m(d,{class:"regimen-item",key:l,label:t.label,value:t.value,onOnclick:l=>e.onselect(t),color:t.label===e.selected?"active-card-color":"inactive-card-color"},null,8,["label","value","onOnclick","color"])))),128))])),_:1})])),_:1})])])),_:1})}],["__scopeId","data-v-63d39285"]]))}}}));