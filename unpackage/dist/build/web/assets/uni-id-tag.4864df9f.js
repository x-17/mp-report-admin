const e={tagid:{rules:[{required:!0},{format:"string"}],label:"标签的tagid"},name:{rules:[{required:!0},{format:"string"}],label:"标签名称"},description:{rules:[{format:"string"}],label:"标签描述"}},t={};function a(e,t){let a={};for(let l in e){let{type:r,value:n}=e[l];switch(r){case"search":"string"==typeof n&&n.length&&(a[l]=new RegExp(n));break;case"select":if(n.length){let e=[];for(let a of n)e.push(t.eq(a));a[l]=t.or(e)}break;case"range":if(n.length){let e=n[0],r=n[1];a[l]=t.and([t.gte(e),t.lte(r)])}break;case"date":if(n.length){let[e,r]=n,s=new Date(e),i=new Date(r);a[l]=t.and([t.gte(s),t.lte(i)])}break;case"timestamp":if(n.length){let[e,r]=n;a[l]=t.and([t.gte(e),t.lte(r)])}}}return a}export{t as e,a as f,e as v};
