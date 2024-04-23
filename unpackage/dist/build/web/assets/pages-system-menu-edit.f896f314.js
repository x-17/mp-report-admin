import{_ as e,W as a,M as l,p as o,G as t,s as n,N as s,o as i,c as m,w as r,i as u,a as d,J as c,d as p,t as f,g as b,h,U as _,v as D,Z as V,B as g,a5 as x}from"./index-b4e560e4.js";import{_ as k}from"./uni-easyinput.a8fa748d.js";import{_ as y}from"./uni-forms-item.65d5ea4b.js";import{_ as U}from"./uni-link.ec5cc8be.js";import{_ as w}from"./uni-data-checkbox.243763bc.js";import{_ as I}from"./uni-forms.74dc0c32.js";import{v as j}from"./opendb-admin-menus.15154d25.js";import v from"./pages-demo-icons-icons.7cf12f77.js";import"./uni-load-more.8ea9dd4c.js";const C=a.database();C.command;function P(e){let a={};for(let l in j)e.includes(l)&&(a[l]=j[l]);return a}const L=e({components:{Icons:v},data:()=>({formData:{menu_id:"",name:"",icon:"",url:"",sort:"",parent_id:"",permission:[],enable:null},rules:{...P(["menu_id","name","icon","url","sort","parent_id","permission","enable"])}}),onLoad(e){const a=e.id;this.formDataId=a,this.getDetail(a)},methods:{submitForm(e){this.$refs.form.submit()},submit(e){const{value:a,errors:i}=e.detail;i||(l({title:"修改中...",mask:!0}),C.collection("opendb-admin-menus").doc(this.formDataId).update(a).then((e=>{o({title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>t()),500)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()})))},getDetail(e){l({mask:!0}),C.collection("opendb-admin-menus").where({_id:e}).get().then((e=>{const a=e.result.data[0];a&&(this.formData=a)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()}))},showIconPopup(){this.$refs.iconPopup.open()}}},[["render",function(e,a,l,o,t,n){const s=b(h("uni-easyinput"),k),j=b(h("uni-forms-item"),y),v=b(h("uni-link"),U),C=b(h("uni-data-checkbox"),w),P=u,L=_,$=D,B=V,R=g("Icons"),q=b(h("uni-popup"),x),z=b(h("uni-forms"),I);return i(),m(P,{class:"uni-container"},{default:r((()=>[d(z,{labelWidth:"80",ref:"form",modelValue:t.formData,"onUpdate:modelValue":a[9]||(a[9]=e=>t.formData=e),rules:t.rules,validateTrigger:"bind",onSubmit:n.submit},{default:r((()=>[d(j,{name:"menu_id",label:"标识",required:""},{default:r((()=>[d(s,{modelValue:t.formData.menu_id,"onUpdate:modelValue":a[0]||(a[0]=e=>t.formData.menu_id=e),clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},null,8,["modelValue"])])),_:1}),d(j,{name:"name",label:"显示名称",required:""},{default:r((()=>[d(s,{modelValue:t.formData.name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.formData.name=e),clearable:!1,placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),d(j,{name:"icon",label:"图标 class",style:{"margin-bottom":"40px"}},{default:r((()=>[d(s,{modelValue:t.formData.icon,"onUpdate:modelValue":a[3]||(a[3]=e=>t.formData.icon=e),clearable:!1,placeholder:"请输入菜单图标css样式类名"},{default:r((()=>[c("span",{slot:"right",style:{color:"#007aff",cursor:"pointer","padding-right":"10px"},onClick:a[2]||(a[2]=(...e)=>n.showIconPopup&&n.showIconPopup(...e))},"内置图标")])),_:1},8,["modelValue"]),d(v,{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？",class:"uni-form-item-tips"})])),_:1}),d(j,{name:"url",label:"页面URL"},{default:r((()=>[d(s,{modelValue:t.formData.url,"onUpdate:modelValue":a[4]||(a[4]=e=>t.formData.url=e),clearable:!1,placeholder:"URL必须是/开头，URL为空代表是目录而不是叶子节点"},null,8,["modelValue"])])),_:1}),d(j,{name:"sort",label:"序号"},{default:r((()=>[d(s,{modelValue:t.formData.sort,"onUpdate:modelValue":a[5]||(a[5]=e=>t.formData.sort=e),clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},null,8,["modelValue"])])),_:1}),d(j,{name:"parent_id",label:"父菜单标识"},{default:r((()=>[d(s,{modelValue:t.formData.parent_id,"onUpdate:modelValue":a[6]||(a[6]=e=>t.formData.parent_id=e),clearable:!1,placeholder:"请输入父级菜单标识, 一级菜单不需要填写"},null,8,["modelValue"])])),_:1}),d(j,{name:"permission",label:"权限列表",class:"flex-center-x"},{default:r((()=>[d(C,{multiple:!0,modelValue:t.formData.permission,"onUpdate:modelValue":a[7]||(a[7]=e=>t.formData.permission=e),collection:"uni-id-permissions","page-size":500,field:"permission_name as text, permission_id as value"},null,8,["modelValue"]),d(P,{class:"uni-form-item-tips"},{default:r((()=>[p(" 当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单 ")])),_:1})])),_:1}),d(j,{name:"enable",label:"是否启用"},{default:r((()=>[d(L,{onChange:a[8]||(a[8]=a=>e.binddata("enable",a.detail.value)),checked:t.formData.enable},null,8,["checked"])])),_:1}),d(P,{class:"uni-button-group"},{default:r((()=>[d($,{type:"primary",class:"uni-button",onClick:n.submitForm,style:{width:"100px"}},{default:r((()=>[p(f(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),d(B,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:r((()=>[d($,{class:"uni-button",style:{width:"100px"}},{default:r((()=>[p(f(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1}),d(q,{class:"icon-modal-box",ref:"iconPopup",type:"center"},{default:r((()=>[d(P,{class:"icon-modal icon-modal-pc"},{default:r((()=>[d(R,{tag:!1,"fix-window":!1})])),_:1})])),_:1},512)])),_:1},8,["modelValue","rules","onSubmit"])])),_:1})}],["__scopeId","data-v-44dcf2da"]]);export{L as default};
