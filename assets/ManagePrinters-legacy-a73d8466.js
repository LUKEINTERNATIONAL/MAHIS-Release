System.register(["./index-legacy-9282febe.js"],(function(e,t){"use strict";var n,a,l,r,s,i,o,c,u,d,v,f,m,g,p,h,_,x,y,b,P,w,C,k,M,z,D;return{setters:[e=>{n=e.d,a=e.u,l=e.r,r=e.P,s=e.o,i=e.a,o=e.b,c=e.c,u=e.w,d=e.e,v=e.f,f=e.g,m=e.h,g=e.T,p=e.i,h=e.I,_=e.j,x=e.k,y=e.l,b=e.m,P=e.t,w=e.n,C=e.F,k=e.p,M=e.q,z=e.s,D=e._}],execute:function(){var t=document.createElement("style");t.textContent="#container[data-v-136c2001]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong[data-v-136c2001]{font-size:20px;line-height:26px}#container p[data-v-136c2001]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-136c2001]{text-decoration:none}\n",document.head.appendChild(t);const S={key:0,class:"spinner-overlay"},T={class:"container"};e("default",D(n({__name:"ManagePrinters",setup(e){a();const t=l(!1),n=l(Math.random()),D=l([]),j=l({}),I=new r;async function q(){if(t.value)return;t.value=!0;const e=await I.getAllPrinters();console.log("Discovered printers",JSON.stringify(e)),D.value=e.sort(((e,t)=>E(e)&&!E(t)?-1:!E(e)&&E(t)?1:A(e,t))),t.value=!1,n.value=Math.random()}function A(e,t){return(e.name||e.address).localeCompare(t.name||t.address)}function E(e){return 0===A(e,j.value)}return s((async()=>{j.value=await I.getDefaultPrinter()||{},D.value.push(j.value),q()})),(e,a)=>{const l=i("ion-spinner");return o(),c(p(z),{class:M({loading:t.value})},{default:u((()=>[t.value?(o(),d("div",S,[v(l,{name:"bubbles"}),a[0]||(a[0]=f("div",{class:"loading-text"},"Please wait...",-1))])):m("",!0),v(g),v(p(k),null,{default:u((()=>[f("div",T,[a[3]||(a[3]=f("h4",{style:{width:"100%","text-align":"center","font-weight":"700"}},"Printer Management",-1)),v(p(h),null,{default:u((()=>[(o(!0),d(C,null,_(D.value,(e=>(o(),c(p(x),null,{default:u((()=>[v(p(y),null,{default:u((()=>[b(P(e.name),1)])),_:2},1024),v(p(w),{size:"small",color:E(e)?"success":"primary",onClick:t=>function(e){I.setDefaultPrinter(e),j.value=e,n.value=Math.random(),q()}(e),disabled:E(e)},{default:u((()=>a[1]||(a[1]=[b(" Set as Default ")]))),_:2},1032,["color","onClick","disabled"]),v(p(w),{onClick:t=>p(I).printTestLbl(e),size:"small"},{default:u((()=>a[2]||(a[2]=[b(" Test Print ")]))),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1})])])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-136c2001"]]))}}}));