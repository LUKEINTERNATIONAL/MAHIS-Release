import{d as o,ap as l,aD as s,aE as p,_ as d,a as r,b as u,c as i}from"./index-125d332f.js";const c=o({name:"HisInput",components:{IonInput:l},setup(){const{activePlatformProfile:e}=s();return{readOnly:p(()=>e.value.keyboard==="HIS_KEYBOARD_ONLY")}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}});function _(e,t,f,y,m,b){const a=r("ion-input");return u(),i(a,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=n=>e.text=n),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}const I=d(c,[["render",_],["__scopeId","data-v-3db33873"]]);export{I as default};