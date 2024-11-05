import{_ as A}from"./j08YQBA1.js";import{_ as T}from"./DZfCsUQ-.js";import{k as G,d as M,c as f,L as p,w as B,O as k,a8 as j,a9 as P,M as m,N as D,f as H,aa as E,ab as F,ac as J,v as Q,H as t,ad as w,D as U,a1 as W,ae as K,S as X,V as N,o as Y,b as Z,a6 as _,E as z,G as ee,I as ae,J as C,n as I,h as S,e as re,t as ie}from"./CX1Xv-pT.js";const q={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},te=e=>Object.keys(q).reduce((a,o)=>(e[o]!==void 0&&(a[o]=e[o]),a),{}),ne=M({inheritAttrs:!1,props:{...q,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function l(a,o,{isActive:i,isExactActive:r}){return e.exactQuery&&!F(a.query,o.query)||e.exactHash&&a.hash!==o.hash?e.inactiveClass:e.exact&&r||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:l}}}),le=["href","aria-disabled","role","rel","target","tabindex","onClick"];function oe(e,l,a,o,i,r){const n=T;return e.to?(f(),p(n,m({key:1},e.$props,{custom:""}),{default:B(({route:u,href:c,target:d,rel:v,navigate:b,isActive:g,isExactActive:h,isExternal:x})=>[H("a",m(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:v,target:d,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[E]||e.$route,{isActive:g,isExactActive:h}),tabindex:e.disabled?-1:void 0,onClick:y=>!x&&!e.disabled&&b(y)}),[k(e.$slots,"default",j(P({isActive:e.active!==void 0?e.active:e.exact?h:g})))],16,le)]),_:3},16)):(f(),p(D(e.as),m({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:B(()=>[k(e.$slots,"default",j(P({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const V=G(ne,[["render",oe]]),se=(e,l,a,o,i=!1)=>{const r=J(),n=Q(),u=t(()=>{var g;const d=w(l),v=w(a),b=w(o);return U((d==null?void 0:d.strategy)||((g=n.ui)==null?void 0:g.strategy),b?{wrapper:b}:{},d||{},i?W(n.ui,e,{}):{},v||{})}),c=t(()=>K(r,["class"]));return{ui:u,attrs:c}};function de({ui:e,props:l}){const a=_();if(X("ButtonGroupContextConsumer",!0),N("ButtonGroupContextConsumer",!1))return{size:t(()=>l.size),rounded:t(()=>e.value.rounded)};let i=a.parent,r;for(;i&&!r;){if(i.type.name==="ButtonGroup"){r=N(`group-${i.uid}`);break}i=i.parent}const n=t(()=>r==null?void 0:r.value.children.indexOf(a));return Y(()=>{r==null||r.value.register(a)}),Z(()=>{r==null||r.value.unregister(a)}),{size:t(()=>r!=null&&r.value?(r==null?void 0:r.value.size)??e.value.default.size:l.size),rounded:t(()=>!r||n.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:n.value===0?r.value.rounded.start:n.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const ue={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},R={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},L={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...R,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},ye={...L,select:"inline-flex items-center text-left cursor-default",input:"block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",required:"absolute inset-0 w-px opacity-0 cursor-default",label:"block truncate",option:{...L.option,create:"block truncate"},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",clearSearchOnClose:!1,showCreateOptionWhen:"empty"},arrow:{...R,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},s=U(z.ui.strategy,z.ui.button,ue),ge=M({components:{UIcon:A,ULink:V},inheritAttrs:!1,props:{...q,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...z.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(l=>Object.keys(l))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:l}){const{ui:a,attrs:o}=se("button",ee(e,"ui"),s),{size:i,rounded:r}=de({ui:a,props:e}),n=t(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=t(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=t(()=>e.square||!l.default&&!e.label),d=t(()=>{var $,O;const y=((O=($=a.value.color)==null?void 0:$[e.color])==null?void 0:O[e.variant])||a.value.variant[e.variant];return ae(C(a.value.base,a.value.font,r.value,a.value.size[i.value],a.value.gap[i.value],e.padded&&a.value[c.value?"square":"padding"][i.value],y==null?void 0:y.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),v=t(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),b=t(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),g=t(()=>C(a.value.icon.base,a.value.icon.size[i.value],e.loading&&a.value.icon.loading)),h=t(()=>C(a.value.icon.base,a.value.icon.size[i.value],e.loading&&!n.value&&a.value.icon.loading)),x=t(()=>te(e));return{ui:a,attrs:o,isLeading:n,isTrailing:u,isSquare:c,buttonClass:d,leadingIconName:v,trailingIconName:b,leadingIconClass:g,trailingIconClass:h,linkProps:x}}});function ce(e,l,a,o,i,r){const n=A,u=V;return f(),p(u,m({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:B(()=>[k(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(f(),p(n,{key:0,name:e.leadingIconName,class:I(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):S("",!0)]),k(e.$slots,"default",{},()=>[e.label?(f(),re("span",{key:0,class:I([e.truncate?e.ui.truncate:""])},ie(e.label),3)):S("",!0)]),k(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(f(),p(n,{key:0,name:e.trailingIconName,class:I(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):S("",!0)])]),_:3},16,["type","disabled","class"])}const pe=G(ge,[["render",ce]]);export{pe as _,de as a,ye as s,se as u};
