System.register(["./index-legacy-535a8fa1.js"],(function(e,t){"use strict";var n,a,s,i,r,o,c,y,u,l,d,h,b,k,m,p,f,g;return{setters:[e=>{n=e.d,a=e.n,s=e._,i=e.a,r=e.b,o=e.e,c=e.F,y=e.j,u=e.c,l=e.w,d=e.m,h=e.t,b=e.ag,k=e.q,m=e.h,p=e.aF,f=e.g,g=e.f}],execute:function(){e("k",(function(e,t,n){let a=t;if(e.match(/enter/i))return`${a}\r\n`;if(e.match(/clear/i))return"";if(a=e.match(/delete|del/i)?a.match(/unknown/i)||a.match(/n\/a/i)?"":a.substring(0,a.length-1):e.match(/space/i)?`${t} `:e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":a.match(/unknown/i)||a.match(/n\/a/i)?e:`${t}${e}`,"string"==typeof a&&a)switch(n){case"lowercase":a=a.toLowerCase();break;case"uppercase":a=a.toUpperCase();break;default:a=a.charAt(0).toUpperCase()+a.slice(1)}return a}));const t=n({components:{IonButton:a},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)},dynamicClass:e=>3==e.length&&"Unknown"==e[0]?"Keypad":e[0]}}),K=n({components:{BaseKeyboard:s(t,[["render",function(e,t,n,a,s,p){const f=i("ion-button");return r(),o("table",null,[(r(!0),o(c,null,y(e.layout,((t,n)=>(r(),o("tr",{key:n},[(r(!0),o(c,null,y(t,((n,a)=>(r(),o("td",{class:"his-keyboard-margin",key:`btn-${a}`},[n?(r(),u(f,{key:0,style:b({width:e.btnSize}),class:k(`his-keyboard-btn btn-${n}-${e.dynamicClass(t)}`),onClick:()=>e.keyPress(n)},{default:l((()=>[d(h(n),1)])),_:2},1032,["style","class","onClick"])):m("",!0)])))),128))])))),128))])}]])},props:{initalKeyboardName:{type:String},kbConfig:{type:Array,required:!0},onKeyPress:{type:Function,required:!0}},data:()=>({activeLayout:{}}),watch:{initalKeyboardName:{handler(e){e&&this.$nextTick((()=>this.switchKeyboard(e)))},immediate:!0},kbConfig:{handler(e){e&&(this.activeLayout=e)},deep:!0,immediate:!0}},methods:{keypress(e){this.isFunctionKey(e)||this.onKeyPress(e)},isFunctionKey(e){return!!this.switchKeyboard(e)},switchKeyboard(e){const t=p.map((e=>e.btn)).indexOf(e);return t>=0&&(this.activeLayout=p[t].keyboard,!0)}}}),w={class:"his-floating-keyboard"},C={class:"his-floating-keyboard-content"};e("H",s(K,[["render",function(e,t,n,a,s,u){const l=i("base-keyboard");return r(),o("div",w,[f("div",C,[(r(!0),o(c,null,y(e.activeLayout,((t,n)=>(r(),o("div",{key:n},[g(l,{layout:t,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])))),128))])])}]]))}}}));