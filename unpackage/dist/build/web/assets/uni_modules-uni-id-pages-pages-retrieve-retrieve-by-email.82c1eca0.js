import{_ as e,W as a,n as o,r as s,o as t,c as r,w as i,i as l,a as u,d as m,q as d,u as n,g as c,h as p,v as f}from"./index-b4e560e4.js";import{_ as h}from"./uni-match-media.80fd3f81.js";import{_ as w}from"./uni-easyinput.a8fa748d.js";import{_ as g}from"./uni-forms-item.65d5ea4b.js";import{_}from"./uni-id-pages-email-form.a82fe71b.js";import{_ as b}from"./uni-forms.74dc0c32.js";import{_ as D}from"./uni-popup-captcha.2067bb18.js";import{m as k}from"./login-page.mixin.454a16c5.js";import{p as y}from"./password.d305cfaf.js";import"./uni-captcha.4b64f71f.js";const C=a.importObject("uni-id-co",{errorOptions:{type:"toast"}});const V=e({mixins:[k],data:()=>({lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:{email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]},...y.getPwdRules()},logo:"/static/logo.png"}),computed:{isEmail(){return/@/.test(this.formData.email)},isPwd(){return/^.{6,20}$/.test(this.formData.password)},isCode(){return/^\d{6}$/.test(this.formData.code)}},onLoad(e){e&&e.emailNumber&&(this.formData.email=e.emailNumber,e.lock&&(this.lock=e.lock,this.focusEmail=!0))},onReady(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{let a=e||window.event;a&&13==a.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((e=>{let{email:a,password:s,captcha:t,code:r}=this.formData;C.resetPwdByEmail({email:a,code:r,password:s,captcha:t}).then((e=>{o({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:e=>{}})})).catch((e=>{"uni-id-captcha-required"==e.errCode&&this.$refs.popup.open()})).finally((e=>{this.formData.captcha=""}))})).catch((e=>{let a=e[0].key;if("code"==a)return this.$refs.shortCode.focusSmsCodeInput=!0;a=a.replace(a[0],a[0].toUpperCase()),this["focus"+a]=!0}))},retrieveByPhone(){o({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin(){s({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}},[["render",function(e,a,o,s,k,y){const C=d,V=l,j=n,x=c(p("uni-match-media"),h),P=c(p("uni-easyinput"),w),v=c(p("uni-forms-item"),g),B=c(p("uni-id-pages-email-form"),_),$=f,E=c(p("uni-forms"),b),U=c(p("uni-popup-captcha"),D);return t(),r(V,{class:"uni-content"},{default:i((()=>[u(x,{"min-width":690},{default:i((()=>[u(V,{class:"login-logo"},{default:i((()=>[u(C,{src:k.logo},null,8,["src"])])),_:1}),u(j,{class:"title title-box"},{default:i((()=>[m("通过邮箱验证码找回密码")])),_:1})])),_:1}),u(E,{ref:"form",value:k.formData,"err-show-type":"toast"},{default:i((()=>[u(v,{name:"email"},{default:i((()=>[u(P,{focus:k.focusEmail,onBlur:a[0]||(a[0]=e=>k.focusEmail=!1),class:"input-box",disabled:k.lock,inputBorder:!1,modelValue:k.formData.email,"onUpdate:modelValue":a[1]||(a[1]=e=>k.formData.email=e),placeholder:"请输入邮箱"},null,8,["focus","disabled","modelValue"])])),_:1}),u(v,{name:"code"},{default:i((()=>[u(B,{ref:"shortCode",email:k.formData.email,type:"reset-pwd-by-email",modelValue:k.formData.code,"onUpdate:modelValue":a[2]||(a[2]=e=>k.formData.code=e)},null,8,["email","modelValue"])])),_:1}),u(v,{name:"password"},{default:i((()=>[u(P,{focus:k.focusPassword,onBlur:a[3]||(a[3]=e=>k.focusPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:k.formData.password,"onUpdate:modelValue":a[4]||(a[4]=e=>k.formData.password=e),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),u(v,{name:"password2"},{default:i((()=>[u(P,{focus:k.focusPassword2,onBlur:a[5]||(a[5]=e=>k.focusPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:k.formData.password2,"onUpdate:modelValue":a[6]||(a[6]=e=>k.formData.password2=e),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),u($,{class:"uni-btn send-btn-box",type:"primary",onClick:y.submit},{default:i((()=>[m("提交")])),_:1},8,["onClick"]),u(x,{"min-width":690},{default:i((()=>[u(V,{class:"link-box"},{default:i((()=>[u(j,{class:"link",onClick:y.retrieveByPhone},{default:i((()=>[m("通过手机验证码找回密码")])),_:1},8,["onClick"]),u(V),u(j,{class:"link",onClick:y.backLogin},{default:i((()=>[m("返回登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value"]),u(U,{onConfirm:y.submit,modelValue:k.formData.captcha,"onUpdate:modelValue":a[7]||(a[7]=e=>k.formData.captcha=e),scene:"reset-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-3bc950cf"]]);export{V as default};
