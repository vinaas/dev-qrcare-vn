var K=Object.defineProperty,Z=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var O=(n,l,a)=>l in n?K(n,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[l]=a,S=(n,l)=>{for(var a in l||(l={}))X.call(l,a)&&O(n,a,l[a]);if(z)for(var a of z(l))J.call(l,a)&&O(n,a,l[a]);return n},B=(n,l)=>Z(n,W(l));import{r as o,o as b,c as k,w as t,a as e,b as s,d as c,e as R,v as D,f as U,t as E,g as y,h as g,p as C,i as F,j as I,F as N,V,k as ee,l as A,m as te,n as oe,q as ne,s as ae,u as j,x as le,y as se,z as re,A as ce,Q as ie,B as _e}from"./vendor.92575bca.js";const ue=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const _ of p.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function a(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerpolicy&&(p.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?p.credentials="include":r.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function i(r){if(r.ep)return;r.ep=!0;const p=a(r);fetch(r.href,p)}};ue();var v=(n,l)=>{for(const[a,i]of l)n[a]=i;return n};const de={},pe=s("QRCare VN"),fe=s("QRCare VN"),me=s("Left Link"),he=s("Right Link"),be=c("p",null,"Here is your blank Framework7 app. Let's see what we have here.",-1),ge=s("Navigation"),ve=s("Modals"),ke=s("Popup"),$e=s("Login Screen"),ye=s("Panels"),xe=s("Left Panel"),qe=s("Right Panel");function we(n,l){const a=o("f7-link"),i=o("f7-nav-left"),r=o("f7-nav-title"),p=o("f7-nav-right"),_=o("f7-nav-title-large"),h=o("f7-navbar"),f=o("f7-toolbar"),u=o("f7-block"),d=o("f7-block-title"),m=o("f7-list-item"),$=o("f7-list"),x=o("f7-button"),q=o("f7-col"),w=o("f7-row"),Q=o("f7-page");return b(),k(Q,{name:"home"},{default:t(()=>[e(h,{large:"",sliding:!1},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"left"})]),_:1}),e(r,{sliding:""},{default:t(()=>[pe]),_:1}),e(p,null,{default:t(()=>[e(a,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"right"})]),_:1}),e(_,null,{default:t(()=>[fe]),_:1})]),_:1}),e(f,{bottom:""},{default:t(()=>[e(a,null,{default:t(()=>[me]),_:1}),e(a,null,{default:t(()=>[he]),_:1})]),_:1}),e(u,{strong:""},{default:t(()=>[be]),_:1}),e(d,null,{default:t(()=>[ge]),_:1}),e($,null,{default:t(()=>[e(m,{link:"/about/",title:"vue3Reader"}),e(m,{link:"/qrreader/",title:"reader"}),e(m,{link:"/l/100010010200184/p/62537836",title:"200184"}),e(m,{link:"/form/",title:"Form"})]),_:1}),e(d,null,{default:t(()=>[ve]),_:1}),e(u,{strong:""},{default:t(()=>[e(w,null,{default:t(()=>[e(q,{width:"50"},{default:t(()=>[e(x,{fill:"",raised:"","popup-open":"#my-popup"},{default:t(()=>[ke]),_:1})]),_:1}),e(q,{width:"50"},{default:t(()=>[e(x,{fill:"",raised:"","login-screen-open":"#my-login-screen"},{default:t(()=>[$e]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[ye]),_:1}),e(u,{strong:""},{default:t(()=>[e(w,null,{default:t(()=>[e(q,{width:"50"},{default:t(()=>[e(x,{fill:"",raised:"","panel-open":"left"},{default:t(()=>[xe]),_:1})]),_:1}),e(q,{width:"50"},{default:t(()=>[e(x,{fill:"",raised:"","panel-open":"right"},{default:t(()=>[qe]),_:1})]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(m,{title:"Dynamic (Component) Route",link:"/dynamic-route/blog/45/post/125/?foo=bar#about"}),e(m,{title:"Default Route (404)",link:"/load-something-that-doesnt-exist/"}),e(m,{title:"Request Data & Load",link:"/request-and-load/user/123456/"})]),_:1})]),_:1})}var Re=v(de,[["render",we]]);const Qe=R({name:"QrCaptureExample",components:{QrCapture:D.exports.QrCapture},setup(){const n=U({data:null});function l(a){console.log("QrCapture",a),n.data=a}return B(S({},E(n)),{onDecode:l})}}),De=c("div",{class:"mb"}," Qr Capture ",-1),Pe={class:"result"};function Le(n,l,a,i,r,p){const _=o("qr-capture",!0);return b(),y("div",null,[De,e(_,{onDecode:n.onDecode,class:"mb"},null,8,["onDecode"]),c("div",Pe," Result: "+g(n.data),1)])}var Se=v(Qe,[["render",Le]]);const Be=R({name:"QrStreamExample",components:{QrStream:D.exports.QrStream},setup(){const n=U({data:null});function l(a){console.log("QrStream",a),n.data=a}return B(S({},E(n)),{onDecode:l})}}),H=n=>(C("data-v-7575dc06"),n=n(),F(),n),Ce=H(()=>c("div",{class:"mb"}," Qr Stream ",-1)),Fe={class:"center stream"},Ie=H(()=>c("div",{style:{color:"red"},class:"frame"},null,-1)),Ne={class:"result"};function Ve(n,l,a,i,r,p){const _=o("qr-stream",!0);return b(),y("div",null,[Ce,c("div",Fe,[e(_,{onDecode:n.onDecode,class:"mb"},{default:t(()=>[Ie]),_:1},8,["onDecode"])]),c("div",Ne," Result: "+g(n.data),1)])}var ze=v(Be,[["render",Ve],["__scopeId","data-v-7575dc06"]]);const Oe=R({name:"QrDropzoneExample",components:{QrDropzone:D.exports.QrDropzone},setup(){function n(l){this.data=l}return{onDecode:n}},data(){return{data:""}}}),Ue=n=>(C("data-v-18427151"),n=n(),F(),n),Ee=Ue(()=>c("div",{class:"mb"}," Qr Dropzone ",-1)),Ae=s(" Drop image here. "),je={class:"result"};function He(n,l,a,i,r,p){const _=o("qr-dropzone",!0);return b(),y("div",null,[Ee,e(_,{class:"dropzone mb",onDecode:n.onDecode},{default:t(()=>[Ae]),_:1},8,["onDecode"]),c("div",je," Result: "+g(n.data),1)])}var Me=v(Oe,[["render",He],["__scopeId","data-v-18427151"]]);const Te=R({components:{QrCaptureExample:Se,QrStreamExample:ze,QrDropzoneExample:Me}}),Ge={class:"reader"};function Ye(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("qr-stream-example"),f=o("qr-capture-example"),u=o("qr-dropzone-example"),d=o("f7-page");return b(),k(d,{name:"about"},{default:t(()=>[e(_,{title:"About","back-link":"Back"}),c("div",Ge,[e(h,{class:"pb"}),e(f,{class:"pb"}),e(u,{class:"pb"})])]),_:1})}var Ke=v(Te,[["render",Ye],["__scopeId","data-v-eb5ca998"]]);const Ze={},We=s("Form Example"),Xe=c("option",null,"Male",-1),Je=c("option",null,"Female",-1),et=s("Buttons"),tt=s("Button"),ot=s("Fill"),nt=s("Raised"),at=s("Raised Fill"),lt=s("Round"),st=s("Round Fill"),rt=s("Outline"),ct=s("Outline Round"),it=s("Small"),_t=s("Small Round"),ut=s("Small"),dt=s("Small Round"),pt=s("Large"),ft=s("Large Fill"),mt=s("Large Red"),ht=s("Large Green"),bt=s("Checkbox group"),gt=s("Radio buttons group");function vt(n,l){const a=o("f7-navbar"),i=o("f7-block-title"),r=o("f7-list-input"),p=o("f7-toggle"),_=o("f7-list-item"),h=o("f7-range"),f=o("f7-list"),u=o("f7-button"),d=o("f7-row"),m=o("f7-block"),$=o("f7-page");return b(),k($,{name:"form"},{default:t(()=>[e(a,{title:"Form","back-link":"Back"}),e(i,null,{default:t(()=>[We]),_:1}),e(f,{"no-hairlines-md":""},{default:t(()=>[e(r,{label:"Name",type:"text",placeholder:"Your name"}),e(r,{label:"E-mail",type:"email",placeholder:"E-mail"}),e(r,{label:"URL",type:"url",placeholder:"URL"}),e(r,{label:"Password",type:"password",placeholder:"Password"}),e(r,{label:"Phone",type:"tel",placeholder:"Phone"}),e(r,{label:"Gender",type:"select"},{default:t(()=>[Xe,Je]),_:1}),e(r,{label:"Birth date",type:"date",placeholder:"Birth day",defaultValue:"2014-04-30"}),e(_,{title:"Toggle"},{after:t(()=>[e(p)]),_:1}),e(r,{label:"Range",input:!1},{input:t(()=>[e(h,{value:50,min:0,max:100,step:1})]),_:1}),e(r,{type:"textarea",label:"Textarea",placeholder:"Bio"}),e(r,{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:""})]),_:1}),e(i,null,{default:t(()=>[et]),_:1}),e(m,{strong:""},{default:t(()=>[e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col"},{default:t(()=>[tt]),_:1}),e(u,{class:"col",fill:""},{default:t(()=>[ot]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",raised:""},{default:t(()=>[nt]),_:1}),e(u,{class:"col",raised:"",fill:""},{default:t(()=>[at]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",round:""},{default:t(()=>[lt]),_:1}),e(u,{class:"col",round:"",fill:""},{default:t(()=>[st]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",outline:""},{default:t(()=>[rt]),_:1}),e(u,{class:"col",round:"",outline:""},{default:t(()=>[ct]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",small:"",outline:""},{default:t(()=>[it]),_:1}),e(u,{class:"col",small:"",round:"",outline:""},{default:t(()=>[_t]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",small:"",fill:""},{default:t(()=>[ut]),_:1}),e(u,{class:"col",small:"",round:"",fill:""},{default:t(()=>[dt]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",large:"",raised:""},{default:t(()=>[pt]),_:1}),e(u,{class:"col",large:"",fill:"",raised:""},{default:t(()=>[ft]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(u,{class:"col",large:"",fill:"",raised:"",color:"red"},{default:t(()=>[mt]),_:1}),e(u,{class:"col",large:"",fill:"",raised:"",color:"green"},{default:t(()=>[ht]),_:1})]),_:1})]),_:1}),e(i,null,{default:t(()=>[bt]),_:1}),e(f,null,{default:t(()=>[e(_,{checkbox:"",name:"my-checkbox",value:"Books",title:"Books"}),e(_,{checkbox:"",name:"my-checkbox",value:"Movies",title:"Movies"}),e(_,{checkbox:"",name:"my-checkbox",value:"Food",title:"Food"})]),_:1}),e(i,null,{default:t(()=>[gt]),_:1}),e(f,null,{default:t(()=>[e(_,{radio:"",name:"radio",value:"Books",title:"Books"}),e(_,{radio:"",name:"radio",value:"Movies",title:"Movies"}),e(_,{radio:"",name:"radio",value:"Food",title:"Food"})]),_:1})]),_:1})}var kt=v(Ze,[["render",vt]]);const $t={props:{f7route:Object,f7router:Object}},yt=c("b",null,"Url:",-1),xt=c("b",null,"Path:",-1),qt=c("b",null,"Hash:",-1),wt=c("b",null,"Params:",-1),Rt=c("b",null,"Query:",-1),Qt=c("b",null,"Route:",-1),Dt=s("Go back via Router API");function Pt(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("f7-block"),f=o("f7-link"),u=o("f7-page");return b(),k(u,null,{default:t(()=>[e(_,{title:"Dynamic Route","back-link":"Back"}),e(h,{strong:""},{default:t(()=>[c("ul",null,[c("li",null,[yt,s(" "+g(a.f7route.url),1)]),c("li",null,[xt,s(" "+g(a.f7route.path),1)]),c("li",null,[qt,s(" "+g(a.f7route.hash),1)]),c("li",null,[wt,c("ul",null,[(b(!0),y(N,null,I(a.f7route.params,(d,m)=>(b(),y("li",{key:m},[c("b",null,g(m)+":",1),s(" "+g(d),1)]))),128))])]),c("li",null,[Rt,c("ul",null,[(b(!0),y(N,null,I(a.f7route.query,(d,m)=>(b(),y("li",{key:m},[c("b",null,g(m)+":",1),s(" "+g(d),1)]))),128))])]),c("li",null,[Qt,s(" "+g(a.f7route.route.path),1)])])]),_:1}),e(h,{strong:""},{default:t(()=>[e(f,{onClick:l[0]||(l[0]=d=>a.f7router.back())},{default:t(()=>[Dt]),_:1})]),_:1})]),_:1})}var Lt=v($t,[["render",Pt]]);const St={props:{user:Object}};function Bt(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("f7-block"),f=o("f7-list-item"),u=o("f7-list"),d=o("f7-page");return b(),k(d,null,{default:t(()=>[e(_,{title:`${a.user.firstName} ${a.user.lastName}`,"back-link":"Back"},null,8,["title"]),e(h,{strong:""},{default:t(()=>[s(g(a.user.about),1)]),_:1}),e(u,null,{default:t(()=>[(b(!0),y(N,null,I(a.user.links,(m,$)=>(b(),k(f,{key:$,link:m.url,title:m.title,external:"",target:"_blank"},null,8,["link","title"]))),128))]),_:1})]),_:1})}var Ct=v(St,[["render",Bt]]);const Ft={},It=c("p",null,"Sorry",-1),Nt=c("p",null,"Requested content not found.",-1);function Vt(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("f7-block"),f=o("f7-page");return b(),k(f,null,{default:t(()=>[e(_,{title:"Not found","back-link":"Back"}),e(h,{strong:""},{default:t(()=>[It,Nt]),_:1})]),_:1})}var zt=v(Ft,[["render",Vt]]);const Ot={props:{f7route:Object,f7router:Object,axios:Object},data(){return{listSupplier:[],qrid:{},history:[],org:{},qrpackage:{},listQRTask:[],listQRRequest:[],loading:!0,staffUser:null,swiperOptions1:{slidesPerView:1,spaceBetween:15,speed:2e3,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",dynamicBullets:!0}},swiperOptions2:{slidesPerView:2,spaceBetween:15,speed:2e3,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",dynamicBullets:!0}}}},methods:{async getDeviceData(){try{var n=this.f7route.params.id,l=this.f7route.params.privateCode;this.$axios.defaults.baseURL="https://backend.qrcare.net/api";var a=await this.$axios.get("/QRIDs/getLifecycle",{params:{qrid:n,privateCode:l}}),i=a.data;console.log("lifecycle",i),i&&i.id&&(this.qrid=i,this.org=this.qrid.supporter,this.history=this.qrid.history)}catch(r){console.log("error",r)}}},async created(){await Promise.all([this.getDeviceData()]),this.loading=!1}},Ut={class:"mb-1 fs-14 text-center text-warning font-weight-bold text-uppercase"},Et=c("span",{class:"material-icons",style:{top:"4px",position:"relative"}},"report_problem",-1),At=s(" Th\u1EBB ch\u01B0a \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t"),jt=c("br",null,null,-1),Ht=c("p",{class:"mb-1 fs-14 text-dark",style:{opacity:"0.7"}}," \u0110\u1EC3 k\xEDch ho\u1EA1t th\u1EBB vui l\xF2ng li\xEAn h\u1EC7 ",-1),Mt={class:"mb-1 fs-14 font-weight-bold"},Tt={class:"mb-1 fs-14"},Gt={class:"mb-1 fs-14"};function Yt(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("b-jumbotron"),f=o("f7-block"),u=o("f7-list-item"),d=o("f7-list"),m=o("f7-page");return b(),k(m,null,{default:t(()=>[e(_,{title:"V\xF2ng \u0111\u1EDDi thi\u1EBFt b\u1ECB","back-link":"Back"}),e(f,null,{default:t(()=>[e(h,{class:"mb-3 border-radius-0 px-3 bg-white mt-3"},{default:t(()=>[c("p",Ut,[Et,At,jt,s(" ID Thi\u1EBFt b\u1ECB: "+g(r.qrid.id),1)]),Ht,c("p",Mt,g(r.org.name),1),c("p",Tt,"\u0110\u1ECBa ch\u1EC9: "+g(r.org.address),1),c("p",Gt,"Hotline: "+g(r.org.hotline),1)]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(u,{link:"/about/",title:"Qu\xE9t Login"}),e(u,{link:"/l/100010010200184/p/62537836",title:"200184"})]),_:1})]),_:1})}var Kt=v(Ot,[["render",Yt]]);const Zt=R({components:{QrStream:D.exports.QrStream,QrcodeStream:V.exports.QrcodeStream,QrcodeDropZone:V.exports.QrcodeDropZone,QrcodeCapture:V.exports.QrcodeCapture},data(){return{qrUrl:"1212"}},methods:{onDecode(n){console.log(n),this.qrUrl=n}}}),Wt=n=>(C("data-v-09586320"),n=n(),F(),n),Xt={class:"center stream"},Jt=Wt(()=>c("div",{style:{color:"red"},class:"frame"},null,-1));function eo(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("qr-stream"),f=o("f7-page");return b(),k(f,{name:"reader",class:"reader"},{default:t(()=>[e(_,{title:"reader","back-link":"Back"}),c("div",Xt,[e(h,{onDecode:n.onDecode,class:"mb"},{default:t(()=>[Jt]),_:1},8,["onDecode"])])]),_:1})}var to=v(Zt,[["render",eo],["__scopeId","data-v-09586320"]]),oo=[{path:"/",component:Re},{path:"/l/:id/p/:privateCode",component:Kt},{path:"/about/",component:Ke},{path:"/qrreader/",component:to},{path:"/form/",component:kt},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:Lt},{path:"/request-and-load/user/:userId/",async:function({router:n,to:l,resolve:a}){var i=n.app;i.preloader.show(),l.params.userId,setTimeout(function(){var r={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};i.preloader.hide(),a({component:Ct},{props:{user:r}})},1e3)}},{path:"(.*)",component:zt}];const no=ee({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}],listUrls:["https://qrcare.net/lifecycle/100010010000000/private/24135380","https://qrcare.net/authentic/100010010000000/private/241353","https://qrcare.net/lifecycle/100010010000002/private/20549215","https://qrcare.net/authentic/100010010000002/private/205492","https://qrcare.net/lifecycle/100010010000001/private/24197092","https://qrcare.net/authentic/100010010000001/private/24197092","https://qrcare.net/lifecycle/100010010020000/private/33249616","https://qrcare.net/lifecycle/100010010020002/private/19647305","https://qrcare.net/lifecycle/100010010020001/private/87957579","https://qrcare.net/lifecycle/100010010020003/private/36250781"]},getters:{products({state:n}){return n.products},listUrls({state:n}){return n.listUrls}},actions:{addProduct({state:n},l){n.products=[...n.products,l]}}}),ao={setup(){const n={name:"QRCare VN",theme:"auto",view:{browserHistory:!0,browserHistorySeparator:""},store:no,routes:oo},l=A(""),a=A(""),i=()=>{j.dialog.alert("Username: "+l.value+"<br>Password: "+a.value,()=>{j.loginScreen.close()})};return te(()=>{oe(()=>{})}),{f7params:n,username:l,password:a,alertLoginData:i}}},lo=s("Left panel content goes here"),so=s("Right panel content goes here"),ro=s("Close"),co=c("p",null,"Popup content goes here.",-1),io=s("Login"),_o=s(" Some text about login information."),uo=c("br",null,null,-1),po=s('Click "Sign In" to close Login Screen ');function fo(n,l,a,i,r,p){const _=o("f7-navbar"),h=o("f7-block"),f=o("f7-page"),u=o("f7-view"),d=o("f7-panel"),m=o("f7-link"),$=o("f7-nav-right"),x=o("f7-popup"),q=o("f7-login-screen-title"),w=o("f7-list-input"),Q=o("f7-list"),M=o("f7-list-button"),T=o("f7-block-footer"),G=o("f7-login-screen"),Y=o("f7-app");return b(),k(Y,ne(ae(i.f7params)),{default:t(()=>[e(d,{left:"",cover:"","theme-dark":""},{default:t(()=>[e(u,null,{default:t(()=>[e(f,null,{default:t(()=>[e(_,{title:"Left Panel"}),e(h,null,{default:t(()=>[lo]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{right:"",reveal:"","theme-dark":""},{default:t(()=>[e(u,null,{default:t(()=>[e(f,null,{default:t(()=>[e(_,{title:"Right Panel"}),e(h,null,{default:t(()=>[so]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{main:"",class:"safe-areas",url:"/"}),e(x,{id:"my-popup"},{default:t(()=>[e(u,null,{default:t(()=>[e(f,null,{default:t(()=>[e(_,{title:"Popup"},{default:t(()=>[e($,null,{default:t(()=>[e(m,{"popup-close":""},{default:t(()=>[ro]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[co]),_:1})]),_:1})]),_:1})]),_:1}),e(G,{id:"my-login-screen"},{default:t(()=>[e(u,null,{default:t(()=>[e(f,{"login-screen":""},{default:t(()=>[e(q,null,{default:t(()=>[io]),_:1}),e(Q,{form:""},{default:t(()=>[e(w,{type:"text",name:"username",placeholder:"Your username",value:i.username,"onUpdate:value":l[0]||(l[0]=L=>i.username=L)},null,8,["value"]),e(w,{type:"password",name:"password",placeholder:"Your password",value:i.password,"onUpdate:value":l[1]||(l[1]=L=>i.password=L)},null,8,["value"])]),_:1}),e(Q,null,{default:t(()=>[e(M,{title:"Sign In",onClick:i.alertLoginData},null,8,["onClick"]),e(T,null,{default:t(()=>[_o,uo,po]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16)}var mo=v(ao,[["render",fo]]);le.use(se);const P=re(mo);P.config.globalProperties.$axios=ce;P.use(ie);_e(P);P.mount("#app");
