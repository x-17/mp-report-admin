import{_ as l,aK as e,p as a,s as i,o as d,c as o,w as s,i as n,a as t,d as c,t as f,e as r,f as p,F as u,z as h,u as m}from"./index-b4e560e4.js";const w=["pulldown","refreshempty","back","forward","more","more-filled","scan","qq","weibo","weixin","pengyouquan","loop","refresh","refresh-filled","arrowthindown","arrowthinleft","arrowthinright","arrowthinup","undo-filled","undo","redo","redo-filled","bars","chatboxes","camera","chatboxes-filled","camera-filled","cart-filled","cart","checkbox-filled","checkbox","arrowleft","arrowdown","arrowright","smallcircle-filled","arrowup","circle","eye-filled","eye-slash-filled","eye-slash","eye","flag-filled","flag","gear-filled","reload","gear","hand-thumbsdown-filled","hand-thumbsdown","hand-thumbsup-filled","heart-filled","hand-thumbsup","heart","home","info","home-filled","info-filled","circle-filled","chat-filled","chat","mail-open-filled","email-filled","mail-open","email","checkmarkempty","list","locked-filled","locked","map-filled","map-pin","map-pin-ellipse","map","minus-filled","mic-filled","minus","micoff","mic","clear","smallcircle","close","closeempty","paperclip","paperplane","paperplane-filled","person-filled","contact-filled","person","contact","images-filled","phone","images","image","image-filled","location-filled","location","plus-filled","plus","plusempty","help-filled","help","navigate-filled","navigate","mic-slash-filled","search","settings","sound","sound-filled","spinner-cycle","download-filled","personadd-filled","videocam-filled","personadd","upload","upload-filled","starhalf","star-filled","star","trash","phone-filled","compose","videocam","trash-filled","download","chatbubble-filled","chatbubble","cloud-download","cloud-upload-filled","cloud-upload","cloud-download-filled","headphones","shop"];const b=l({data:()=>({icons:w}),props:{tag:{type:Boolean,default:!0},fixWindow:{type:Boolean,default:!0}},methods:{setClipboardData(l,d){let o="uni-icons-"+d;this.tag&&"tag"===l&&(o='<view class="'+o+'"></view>'),e({data:o,success(l){a({icon:"none",title:"复制 "+o+" 成功！"})},fail(l){i({content:"复制 "+o+" 失败！",showCancel:!1})}})}}},[["render",function(l,e,a,i,w,b){const g=n,y=m;return d(),o(g,null,{default:s((()=>[t(g,{class:"uni-header"},{default:s((()=>[t(g,{class:"uni-group"},{default:s((()=>[t(g,{class:"uni-title"},{default:s((()=>[c(f(l.$t("demo.icons.title"))+"（uni-icons）",1)])),_:1}),t(g,{class:"uni-sub-title"},{default:s((()=>[c(f(l.$t("demo.icons.describle")),1)])),_:1})])),_:1})])),_:1}),t(g,{class:"uni-container"},{default:s((()=>[t(g,{class:"icons"},{default:s((()=>[(d(!0),r(u,null,p(w.icons,((l,e)=>(d(),o(g,{key:e,class:"icon-item pointer"},{default:s((()=>[t(g,{onClick:e=>b.setClipboardData("tag",l),class:h("uni-icons-"+l)},null,8,["onClick","class"]),t(y,{onClick:e=>b.setClipboardData("class",l),class:"icon-text"},{default:s((()=>[c("uni-icons-"+f(l),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-aa4d76d3"]]);export{b as default};
