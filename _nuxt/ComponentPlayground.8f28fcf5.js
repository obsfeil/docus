import{u as S}from"./asyncData.89bed9cb.js";import{J as m,I as a,d as _,Y as b,b as $,c as I,n as w,p as P,j as C,e as x,l as u,a8 as E,r as j,N as r}from"./entry.467a38f9.js";import D from"./ComponentPlaygroundData.2b2096ed.js";import"./TabsHeader.e53d0bb3.js";import"./ComponentPlaygroundProps.5a1ecb47.js";import"./ProseH4.869203e7.js";import"./ProseCodeInline.8906a2e9.js";import"./Badge.dfd047e9.js";import"./ContentSlot.f68a803c.js";import"./ProseP.4b79fa00.js";import"./index.7c6eb485.js";import"./ComponentPlaygroundSlots.vue.e19e7e20.js";import"./ComponentPlaygroundTokens.vue.ce545a7c.js";async function z(o){const e=m(o);{const{data:n}=await S(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>n.value)}}const B=o=>(P("data-v-4c29c0d7"),o=o(),C(),o),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),V=[N],k=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(o){const e=o,n=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),c=a(()=>((t=e)=>t.right)()),i=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,p,d;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),{$pinceau:v}=b(e,void 0,{_cCN_top:n,_eih_insetInlineStart:s,_IfB_insetInlineEnd:c,_SsE_zIndex:i,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>($(),I("div",{class:w(["ellipsis",[m(v)]])},V,2))}});const q=u(k,[["__scopeId","data-v-4c29c0d7"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=a(()=>E(o.component)),n=j({...o.props}),s=await z(o.component);return{as:e,formProps:n,componentData:s}},render(o){const e=Object.entries(this.$slots).reduce((n,[s,c])=>{if(s.startsWith("component-")){const i=s.replace("component-","");n[i]=c}return n},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),r(D,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const T=u(A,[["__scopeId","data-v-9c0cb021"]]);export{T as default};
