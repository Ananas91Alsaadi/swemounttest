import{p as a}from"./productsinfo-a52fd0f9.js";import{_,o as t,c as n,a as e,t as i,F as l,b as d}from"./index-8841e959.js";const p={props:{langIsSe:Boolean},data(){return{en:["We apologize, but this information about this product is not optimized for small screens with a width less than 768 pixels. For the best experience, please visit this page on a device with a larger screen or adjust your screen resolution to at least 768 pixels wide"],se:["Vi beklagar, men denna produkt info är inte anpassad för skärmar med en bredd mindre än 768 pixlar. För bästa upplevelse, vänligen besök denna sida på en enhet med större skärm eller justera skärmens upplösning till minst 768 pixlar bred."],rootBrach:"/swemounttest",isingleProduct:a.productsinfo.find(h=>h.artNum==this.$route.params.id),identifiering:a[this.$route.params.id+"a"]?a[this.$route.params.id+"a"]:"",Prestanda:a[this.$route.params.id+"b"]?a[this.$route.params.id+"b"]:""}},mounted(){console.log(this.Prestanda)},computed:{PrestandaHeadings(){return this.Prestanda[0]?Object.keys(this.Prestanda[0]):""},identifieringHeadings(){return this.identifiering[0]?Object.keys(this.identifiering[0]):""}},methods:{}},m={class:"product-head"},f=["src"],P={class:"second-head",style:{margin:"0"}},k={style:{"text-align":"left","margin-top":"0"}},b=e("hr",{style:{margin:"0"}},null,-1),v={class:"product-list"},y={class:"less768"},x={class:"signup-msg"},B={class:"over768"},H={class:"identifiering"},S=e("div",{class:"second-head"},[e("h1",null,"Ingående artiklar och identifiering"),e("hr")],-1),j={class:"Prestanda"},w=e("h4",null,null,-1),z=e("div",{class:"second-head"},[e("h1",null,"Prestanda"),e("hr")],-1);function F(h,N,g,I,s,u){return t(),n("main",null,[e("div",m,[e("img",{src:s.rootBrach+"/products/"+s.isingleProduct.artNum+"."+s.isingleProduct.pic,alt:"",class:"product-img img-back-box"},null,8,f),e("div",null,[e("div",P,[e("h2",k,i(s.isingleProduct.name),1),b]),e("ul",v,[e("li",null,"Artikelnr: "+i(s.isingleProduct.artNum),1),e("li",null,"Längd: "+i(s.isingleProduct.Längd),1),e("li",null,"Bredd: "+i(s.isingleProduct.Bredd),1),e("li",null,"Höjd: "+i(s.isingleProduct.Höjd),1),e("li",null,"Snözon: "+i(s.isingleProduct.Snözon),1)])])]),e("div",y,[e("div",x,i(g.langIsSe?s.se[0]:s.en[0]),1)]),e("div",B,[e("div",H,[S,e("table",null,[e("tr",null,[(t(!0),n(l,null,d(u.identifieringHeadings,r=>(t(),n("th",{key:r},i(r),1))),128))]),(t(!0),n(l,null,d(s.identifiering,(r,c)=>(t(),n("tr",{key:c},[(t(!0),n(l,null,d(u.identifieringHeadings,o=>(t(),n("td",{key:o},i(r[o]),1))),128))]))),128))])]),e("div",j,[w,z,e("table",null,[e("tr",null,[(t(!0),n(l,null,d(u.PrestandaHeadings,r=>(t(),n("th",{key:r},i(r),1))),128))]),(t(!0),n(l,null,d(s.Prestanda,(r,c)=>(t(),n("tr",{key:c},[(t(!0),n(l,null,d(u.PrestandaHeadings,o=>(t(),n("td",{key:o},i(r[o]),1))),128))]))),128))])])])])}const V=_(p,[["render",F]]);export{V as default};
