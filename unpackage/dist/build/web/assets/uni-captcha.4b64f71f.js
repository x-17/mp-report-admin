import{_ as a,p as e,W as t,g as s,A as c,h as o,o as l,c as n,w as i,a as p,b as h,z as u,q as g,i as d,L as m}from"./index-b4e560e4.js";const r=a({props:{modelValue:String,value:String,scene:{type:String,default:()=>""},focus:{type:Boolean,default:()=>!1}},computed:{val:{get(){return this.value||this.modelValue},set(a){this.$emit("update:modelValue",a)}}},data:()=>({focusCaptchaInput:!1,captchaBase64:"",loging:!1}),watch:{scene:{handler(a){a?this.getImageCaptcha(this.focus):e({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha(a=!0){this.loging=!0,a&&(this.val="",this.focusCaptchaInput=!0);t.importObject("uni-captcha-co",{customUI:!0}).getImageCaptcha({scene:this.scene}).then((a=>{this.captchaBase64=a.captchaBase64})).catch((a=>{e({title:a.message,icon:"none"})})).finally((a=>{this.loging=!1}))}}},[["render",function(a,e,t,r,f,B){const C=s(o("uni-icons"),c),I=g,x=d,y=m;return l(),n(x,{class:"captcha-box"},{default:i((()=>[p(x,{class:"captcha-img-box"},{default:i((()=>[f.loging?(l(),n(C,{key:0,class:"loding",size:"20px",color:"#BBB",type:"spinner-cycle"})):h("",!0),p(I,{class:u(["captcha-img",{opacity:f.loging}]),onClick:B.getImageCaptcha,src:f.captchaBase64,mode:"widthFix"},null,8,["class","onClick","src"])])),_:1}),p(y,{onBlur:e[0]||(e[0]=a=>f.focusCaptchaInput=!1),focus:f.focusCaptchaInput,type:"text",class:"captcha",inputBorder:!1,maxlength:"4",modelValue:B.val,"onUpdate:modelValue":e[1]||(e[1]=a=>B.val=a),placeholder:"请输入验证码"},null,8,["focus","modelValue"])])),_:1})}],["__scopeId","data-v-07444ffa"]]);export{r as _};