import O from"./DocsAside.075a76bd.js";import R from"./ProseCodeInline.24ad096e.js";import U from"./Alert.2e09e781.js";import X from"./DocsPageBottom.b1f0e44d.js";import Z from"./DocsPrevNext.b5d2ebd3.js";import{d as G,V as K,ad as Q,j as W,I as m,r as V,q as Y,o as ee,ag as oe,c as u,X as A,w as h,J as t,e as g,h as r,g as y,f as p,Z as te,D as x,t as ne,F as se,n as k,$ as ae,ah as ce,p as le,k as re,l as _e}from"./entry.20ba868a.js";import ie from"./DocsToc.bd50e287.js";import"./ContentSlot.a6318ae0.js";import"./ProseA.371085e1.js";import"./EditOnLink.vue.7f7c53ff.js";import"./DocsTocLinks.ae4f2280.js";const ue=d=>(le("data-v-19c38a56"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=G({__name:"DocsPageLayout",setup(d){const{page:s}=K(),{config:f,tree:T}=Q(),j=W(),F=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},P=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),C=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),H=m(()=>F("bottom",!0)),_=V(!1),a=V(null),v=()=>j.path.split("/").slice(0,2).join("/"),i=Y("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function D(){a.value&&(a.value.scrollHeight===0&&setTimeout(D,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):D()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var b,w,B,I,N,$;const n=O,c=R,l=U,L=X,M=Z,q=ae,z=ie,E=ce;return u(),A(E,{fluid:(w=(b=t(f))==null?void 0:b.main)==null?void 0:w.fluid,padded:(I=(B=t(f))==null?void 0:B.main)==null?void 0:I.padded,class:k(["docs-page-content",{fluid:($=(N=t(f))==null?void 0:N.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(C)}])},{default:h(()=>[t(C)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(s)&&t(H)?(u(),g(se,{key:2},[r(L),r(M)],64)):y("",!0)]),t(S)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=J=>_.value=!t(_))},[fe,r(q,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(z,{onMove:o[1]||(o[1]=J=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const we=_e(ve,[["__scopeId","data-v-19c38a56"]]);export{we as default};
