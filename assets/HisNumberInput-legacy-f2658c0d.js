System.register(["./BaseTextInput-legacy-b997390b.js","./KbHandler-legacy-e3947e99.js","./index-legacy-0c5a8d1f.js","./FieldMixin.vue_vue_type_script_lang-legacy-e22f98b3.js"],(function(e,t){"use strict";var a,i,s,n,l,u,o,d,r,c,h,f,y,v,b;return{setters:[e=>{a=e.default},e=>{i=e.H,s=e.k},e=>{n=e.d,l=e.$,u=e.az,o=e.aA,d=e.b,r=e.c,c=e.o,h=e.a0,f=e.q,y=e.f,v=e.a1},e=>{b=e._}],execute:function(){const t=n({components:{BaseInput:a,HisKeyboard:i,ViewPort:l},mixins:[b],data:()=>({value:"",keyboard:u}),activated(){this.init()},async mounted(){await this.init(),await this.setDefaultValue()},methods:{init(){this.$emit("onFieldActivated",this),"boolean"==typeof this.config.noChars?this.keyboard=this.config.noChars?u:o:this.config.keypad&&(this.keyboard=this.config.keypad)},async setDefaultValue(){if("function"==typeof this.defaultValue){const e=await this.defaultValue(this.fdata,this.cdata);e&&(this.value=`${e}`)}},onKbValue(e){this.value=e},keypress(e){this.value=s(e,this.value)}},watch:{value(e){this.$emit("onValue",e?{label:e,value:e}:null)},clear(){this.value=""}}});e("default",d(t,[["render",function(e,t,a,i,s,n){const l=r("base-input"),u=r("view-port"),o=r("his-keyboard");return c(),h(v,null,[f(u,null,{default:y((()=>[f(l,{value:e.value,onOnValue:e.onKbValue},null,8,["value","onOnValue"])])),_:1}),f(o,{kbConfig:e.keyboard,onKeyPress:e.keypress,disabled:!1},null,8,["kbConfig","onKeyPress"])],64)}]]))}}}));