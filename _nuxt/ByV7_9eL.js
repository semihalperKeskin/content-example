import{d as g,ai as C,H as S,p as b,K as _,ah as k,af as A,Y as N}from"./CX1Xv-pT.js";import{u as O}from"./C3Kl5auL.js";import{q as m}from"./CKHk2a3y.js";import"./pNEh6AeB.js";const Q=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:o,where:u,sort:f,limit:l,skip:d,locale:s,find:p}=C(a),y=S(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!b().public.content.experimental.advanceQuery;_(()=>a,()=>n(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await O(`content-query-${k(a)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),f.value&&(e=e.sort(f.value)),l.value&&(e=e.limit(l.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),p.value==="one"?e.findOne().then(i):p.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:y,data:v,refresh:n}},render(a){var c;const t=A(),{data:r,refresh:o,isPartial:u,path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:v}=a,n={path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:u,props:n,...this.$attrs}):((w,q)=>N("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:u})}}),P=Q;export{P as default};
