import{W as n,X as t}from"./index-591212df.js";class l extends n{async write(e){if(e.url)return t.expandPath(e.url).then(r=>{document.location=r});throw new TypeError("Undefined url")}async discover(){return{devices:["webPrinter"]}}}export{l as LabelPrinterWeb};