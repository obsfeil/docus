import{d as y,r as l,x as k,c as s,e as p,f as m,h as C,w,X as _,J as f,T as x,n as v,$ as S,p as $,k as b,l as h,t as I,g as P,Z as z}from"./entry.20ba868a.js";import{u as N,o as T}from"./index.d10a65ee.js";const V=e=>($("data-v-3dfe13a1"),e=e(),b(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=N();T(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=k(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(B,d)=>{const r=S;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[C(x,{name:"fade"},{default:w(()=>{var u,i;return[o.value==="copied"?(s(),_(r,{key:0,name:(u=f(c).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(r,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const D=h(R,[["__scopeId","data-v-3dfe13a1"]]),E={key:0,class:"filename"},J=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=D;return s(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",E,I(e.filename),1)):P("",!0),z(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const Z=h(J,[["__scopeId","data-v-143c9c8d"]]);export{Z as default};
