System.register(["./index-legacy-535a8fa1.js","./FieldMixin.vue_vue_type_script_lang-legacy-44f0b4ca.js"],(function(t,e){"use strict";var a,n,i,l,d,c,u,o,r,s,f,v,m;return{setters:[t=>{a=t.d,n=t.ac,i=t._,l=t.a,d=t.b,c=t.c,u=t.w,o=t.g,r=t.e,s=t.F,f=t.j,v=t.t},t=>{m=t._}],execute:function(){var e=document.createElement("style");e.textContent=".f-active-col[data-v-1756a70f]{background-color:#90ee90}.f-inactive-col[data-v-1756a70f]{background-color:#ffffe0}.f-number[data-v-1756a70f]{padding:3em;font-size:1.2em;font-weight:700;border:solid 2px #ccc}table[data-v-1756a70f]{width:100%}th[data-v-1756a70f],td[data-v-1756a70f]{padding:2em;text-align:center}\n",document.head.appendChild(e);const h=a({components:{ViewPort:n},mixins:[m],data:()=>({listData:[]}),methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this.cdata)}},mounted(){this.init()},activated(){this.init()}}),b={class:"f-number f-active-col"},g={class:"f-number f-inactive-col"};t("default",i(h,[["render",function(t,e,a,n,i,m){const h=l("view-port");return d(),c(h,null,{default:u((()=>[o("table",null,[e[0]||(e[0]=o("tr",null,[o("th",null,"   "),o("th",null," Name "),o("th",null," New Number "),o("th",null," Old Number ")],-1)),(d(!0),r(s,null,f(t.listData,((t,e)=>(d(),r("tr",{key:e},[o("td",null,v(t.label),1),o("td",null,v(t.value),1),o("td",null,[o("div",b,v(t.other.activeNumber),1)]),o("td",null,[o("div",g,v(t.other.dormantNumber),1)])])))),128))])])),_:1})}],["__scopeId","data-v-1756a70f"]]))}}}));