import{d as a,k as r,b as c,c as d,o as i,x as p,q as t,f as n,s,y as _,t as u,u as l,v as f}from"./index-1781e511.js";const h=a({components:{IonButton:r},setup(){return{refresh:()=>location.reload()}},props:{apiStatus:{default:!0}}});const m=e=>(u("data-v-4534a7de"),e=e(),l(),e),C={key:0,id:"api-error",class:"his-card"},v=m(()=>f("p",null,"Cannot connect to the server",-1));function k(e,g,w,x,I,N){const o=d("ion-button");return e.apiStatus?_("",!0):(i(),p("div",C,[v,t(o,{"router-link":"/settings/host",color:"warning"},{default:n(()=>[s(" New Config ")]),_:1}),t(o,{onClick:e.refresh,color:"warning"},{default:n(()=>[s(" Refresh ")]),_:1},8,["onClick"])]))}const y=c(h,[["render",k],["__scopeId","data-v-4534a7de"]]);export{y as default};