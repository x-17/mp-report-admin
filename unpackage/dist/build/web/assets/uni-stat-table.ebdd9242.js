import{_ as t,g as a,A as e,h as l,j as o,k as i,l as s,m as n,o as d,c as u,w as p,a as f,e as r,F as y,f as c,ay as _,d as k,t as m,b as g,i as b}from"./index-b4e560e4.js";import{_ as h}from"./uni-tooltip.6577854d.js";const j=t({name:"uni-stat-table",data:()=>({}),props:{data:{type:Array,default:()=>[]},filedsMap:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}},[["render",function(t,j,v,x,A,M){const B=a(l("uni-icons"),e),w=b,F=a(l("uni-tooltip"),h),I=a(l("uni-th"),o),T=a(l("uni-tr"),i),q=a(l("uni-td"),s),z=a(l("uni-table"),n);return d(),u(z,{loading:v.loading,border:"",stripe:"",emptyText:"暂无数据"},{default:p((()=>[f(T,null,{default:p((()=>[(d(!0),r(y,null,c(v.filedsMap,((t,a)=>(d(),r(y,{key:a},[t.title?(d(),u(I,{key:a,align:"center"},{default:p((()=>[f(F,null,_({default:p((()=>[k(m(t.title)+" ",1),v.tooltip&&t.tooltip?(d(),u(B,{key:0,type:"help",color:"#666"})):g("",!0)])),_:2},[v.tooltip&&t.tooltip?{name:"content",fn:p((()=>[f(w,{class:"uni-stat-tooltip-s"},{default:p((()=>[k(m(t.tooltip),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1024)):g("",!0)],64)))),128))])),_:1}),(d(!0),r(y,null,c(v.data,((t,a)=>(d(),u(T,{key:a},{default:p((()=>[(d(!0),r(y,null,c(v.filedsMap,((a,e)=>(d(),r(y,{key:e},[a.title?(d(),u(q,{key:e,align:"center"},{default:p((()=>[k(m(void 0!==t[a.field]?t[a.field]:"-"),1)])),_:2},1024)):g("",!0)],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading"])}],["__scopeId","data-v-f1597293"]]);export{j as _};