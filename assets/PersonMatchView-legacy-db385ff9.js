System.register(["./index-legacy-a87465e7.js","./FieldMixin.vue_vue_type_script_lang-legacy-e0217a09.js"],(function(t,e){"use strict";var l,a,n,o,i,s,u,d,r,c,h,v,b,f,m,p,x,_,g,y,I,w,k;return{setters:[t=>{l=t.d,a=t.ao,n=t.aE,o=t.a6,i=t.aF,s=t.a7,u=t.am,d=t.an,r=t.b,c=t.c,h=t.o,v=t.e,b=t.f,f=t.q,m=t.v,p=t.a4,x=t.x,_=t.a2,g=t.a3,y=t.s,I=t.t,w=t.u},t=>{k=t._}],execute:function(){var e=document.createElement("style");e.textContent=".large-card[data-v-769cbad1]{padding:5%;border-radius:15px;border:1px solid #ccc;height:82vh;background-color:#fff;overflow-y:auto;-webkit-box-shadow:0px -2px 19px -2px rgba(196,190,196,1);-moz-box-shadow:0px -2px 19px -2px rgba(196,190,196,1);box-shadow:0 -2px 19px -2px #c4bec4}\n",document.head.appendChild(e);const D=l({mixins:[k],components:{IonLabel:a,IonAvatar:n,IonRow:o,IonImg:i,IonCol:s,IonList:u,IonItem:d},data:()=>({listData:[],selectedResult:{}}),methods:{async init(){this.$emit("onFieldActivated",this),this.listData=await this.options(this.fdata,this),this.onSelect(this.listData[0]||{})},async onSelect(t){if(t){if(this.onValue&&!(await this.onValue(t,this)))return;this.selectedResult=t,this.$emit("onValue",t)}}},mounted(){this.init()},activated(){this.init()}}),R=t=>(I("data-v-769cbad1"),t=t(),w(),t),C={class:"large-card"},S=R((()=>m("br",null,null,-1))),z=R((()=>m("br",null,null,-1))),A={class:"large-card"};t("default",r(D,[["render",function(t,e,l,a,n,o){const i=c("ion-img"),s=c("ion-avatar"),u=c("ion-label"),d=c("ion-item"),r=c("ion-list"),I=c("ion-col"),w=c("ion-row");return h(),v(w,null,{default:b((()=>[f(I,{size:"5"},{default:b((()=>[m("div",C,[m("h3",null," Matches found: ("+p(t.listData.length)+"): ",1),f(r,null,{default:b((()=>[(h(!0),x(_,null,g(t.listData,((e,l)=>(h(),v(d,{button:"",key:l,detail:!0,color:e.value===t.selectedResult.value?"light":"",onClick:l=>t.onSelect(e)},{default:b((()=>[f(s,null,{default:b((()=>[f(i,{src:"/assets/images/avatar.svg"})])),_:1}),f(u,null,{default:b((()=>{var t;return[y(p(e.label)+" ",1),S,y(" Home District: "),m("b",null,p(e.other.foundPerson.home_district),1),y(),z,y(" Home TA: "),m("b",null,p(e.other.home_traditional_authority),1),y(" Score: "),m("b",null,p((null==e||null===(t=e.other)||void 0===t?void 0:t.score)||"-"),1)]})),_:2},1024)])),_:2},1032,["color","onClick"])))),128))])),_:1})])])),_:1}),f(I,{size:"7"},{default:b((()=>{var e;return[m("div",A,[m("h1",null," Match score: "+p((null===(e=t.selectedResult)||void 0===e||null===(e=e.other)||void 0===e?void 0:e.score)||"-"),1),f(r,null,{default:b((()=>{var e;return[(h(!0),x(_,null,g((null===(e=t.selectedResult)||void 0===e||null===(e=e.other)||void 0===e?void 0:e.comparisons)||[],((t,e)=>(h(),v(d,{key:e,inset:"none"},{default:b((()=>[(h(!0),x(_,null,g(t,((t,e)=>(h(),v(u,{color:"danger",key:e},{default:b((()=>[m("b",null,p(t),1)])),_:2},1024)))),128))])),_:2},1024)))),128))]})),_:1})])]})),_:1})])),_:1})}],["__scopeId","data-v-769cbad1"]]))}}}));