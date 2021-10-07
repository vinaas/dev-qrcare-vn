var E=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var N=(a,s,n)=>s in a?E(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n,C=(a,s)=>{for(var n in s||(s={}))T.call(s,n)&&N(a,n,s[n]);if(S)for(var n of S(s))z.call(s,n)&&N(a,n,s[n]);return a},D=(a,s)=>H(a,M(s));import{r as o,o as b,c as v,w as t,a as e,b as l,d as i,e as Q,v as G,f as Y,t as K,g as x,h as g,p as W,i as X,j as B,F,k as J,l as I,m as Z,n as ee,q as te,s as oe,u as O,x as ne,y as le,z as ae,A as se,Q as re,B as ie}from"./vendor.8a0f4378.js";const ce=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerpolicy&&(p.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?p.credentials="include":r.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(r){if(r.ep)return;r.ep=!0;const p=n(r);fetch(r.href,p)}};ce();var k=(a,s)=>{for(const[n,c]of s)a[n]=c;return a};const _e={},ue=l("QRCare VN"),de=l("QRCare VN"),pe=l("Left Link"),fe=l("Right Link"),me=i("p",null,"Here is your blank Framework7 app. Let's see what we have here.",-1),he=l("Navigation"),be=l("Modals"),ge=l("Popup"),ve=l("Login Screen"),ke=l("Panels"),ye=l("Left Panel"),$e=l("Right Panel");function we(a,s){const n=o("f7-link"),c=o("f7-nav-left"),r=o("f7-nav-title"),p=o("f7-nav-right"),u=o("f7-nav-title-large"),h=o("f7-navbar"),m=o("f7-toolbar"),_=o("f7-block"),d=o("f7-block-title"),f=o("f7-list-item"),y=o("f7-list"),$=o("f7-button"),w=o("f7-col"),q=o("f7-row"),R=o("f7-page");return b(),v(R,{name:"home"},{default:t(()=>[e(h,{large:"",sliding:!1},{default:t(()=>[e(c,null,{default:t(()=>[e(n,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"left"})]),_:1}),e(r,{sliding:""},{default:t(()=>[ue]),_:1}),e(p,null,{default:t(()=>[e(n,{"icon-ios":"f7:menu","icon-aurora":"f7:menu","icon-md":"material:menu","panel-open":"right"})]),_:1}),e(u,null,{default:t(()=>[de]),_:1})]),_:1}),e(m,{bottom:""},{default:t(()=>[e(n,null,{default:t(()=>[pe]),_:1}),e(n,null,{default:t(()=>[fe]),_:1})]),_:1}),e(_,{strong:""},{default:t(()=>[me]),_:1}),e(d,null,{default:t(()=>[he]),_:1}),e(y,null,{default:t(()=>[e(f,{link:"/about/",title:"About"}),e(f,{link:"/l/100010010200184/p/62537836",title:"200184"}),e(f,{link:"/form/",title:"Form"})]),_:1}),e(d,null,{default:t(()=>[be]),_:1}),e(_,{strong:""},{default:t(()=>[e(q,null,{default:t(()=>[e(w,{width:"50"},{default:t(()=>[e($,{fill:"",raised:"","popup-open":"#my-popup"},{default:t(()=>[ge]),_:1})]),_:1}),e(w,{width:"50"},{default:t(()=>[e($,{fill:"",raised:"","login-screen-open":"#my-login-screen"},{default:t(()=>[ve]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[ke]),_:1}),e(_,{strong:""},{default:t(()=>[e(q,null,{default:t(()=>[e(w,{width:"50"},{default:t(()=>[e($,{fill:"",raised:"","panel-open":"left"},{default:t(()=>[ye]),_:1})]),_:1}),e(w,{width:"50"},{default:t(()=>[e($,{fill:"",raised:"","panel-open":"right"},{default:t(()=>[$e]),_:1})]),_:1})]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(f,{title:"Dynamic (Component) Route",link:"/dynamic-route/blog/45/post/125/?foo=bar#about"}),e(f,{title:"Default Route (404)",link:"/load-something-that-doesnt-exist/"}),e(f,{title:"Request Data & Load",link:"/request-and-load/user/123456/"})]),_:1})]),_:1})}var xe=k(_e,[["render",we]]);const qe=Q({name:"QrStreamExample",components:{QrStream:G.exports.QrStream},setup(){const a=Y({data:null});function s(n){a.data=n}return D(C({},K(a)),{onDecode:s})}}),Re=a=>(W("data-v-934cb234"),a=a(),X(),a),Pe={style:{padding:"5px"}},Le={class:"center stream"},Be=Re(()=>i("div",{style:{color:"red"},class:"frame"},null,-1)),Fe={class:"result"};function Se(a,s,n,c,r,p){const u=o("qr-stream",!0);return b(),x("div",Pe,[i("div",Le,[e(u,{onDecode:a.onDecode,class:"mb"},{default:t(()=>[Be]),_:1},8,["onDecode"])]),i("div",Fe," Result: "+g(a.data),1)])}var Ne=k(qe,[["render",Se],["__scopeId","data-v-934cb234"]]);const Ce=Q({components:{QrStreamExample:Ne}});function De(a,s,n,c,r,p){const u=o("f7-navbar"),h=o("qr-stream-example"),m=o("f7-page");return b(),v(m,{name:"about"},{default:t(()=>[e(u,{title:"About","back-link":"Back"}),i("div",null,[e(h,{class:"pb"})])]),_:1})}var Qe=k(Ce,[["render",De]]);const Ie={},Oe=l("Form Example"),Ve=i("option",null,"Male",-1),Ae=i("option",null,"Female",-1),je=l("Buttons"),Ue=l("Button"),Ee=l("Fill"),He=l("Raised"),Me=l("Raised Fill"),Te=l("Round"),ze=l("Round Fill"),Ge=l("Outline"),Ye=l("Outline Round"),Ke=l("Small"),We=l("Small Round"),Xe=l("Small"),Je=l("Small Round"),Ze=l("Large"),et=l("Large Fill"),tt=l("Large Red"),ot=l("Large Green"),nt=l("Checkbox group"),lt=l("Radio buttons group");function at(a,s){const n=o("f7-navbar"),c=o("f7-block-title"),r=o("f7-list-input"),p=o("f7-toggle"),u=o("f7-list-item"),h=o("f7-range"),m=o("f7-list"),_=o("f7-button"),d=o("f7-row"),f=o("f7-block"),y=o("f7-page");return b(),v(y,{name:"form"},{default:t(()=>[e(n,{title:"Form","back-link":"Back"}),e(c,null,{default:t(()=>[Oe]),_:1}),e(m,{"no-hairlines-md":""},{default:t(()=>[e(r,{label:"Name",type:"text",placeholder:"Your name"}),e(r,{label:"E-mail",type:"email",placeholder:"E-mail"}),e(r,{label:"URL",type:"url",placeholder:"URL"}),e(r,{label:"Password",type:"password",placeholder:"Password"}),e(r,{label:"Phone",type:"tel",placeholder:"Phone"}),e(r,{label:"Gender",type:"select"},{default:t(()=>[Ve,Ae]),_:1}),e(r,{label:"Birth date",type:"date",placeholder:"Birth day",defaultValue:"2014-04-30"}),e(u,{title:"Toggle"},{after:t(()=>[e(p)]),_:1}),e(r,{label:"Range",input:!1},{input:t(()=>[e(h,{value:50,min:0,max:100,step:1})]),_:1}),e(r,{type:"textarea",label:"Textarea",placeholder:"Bio"}),e(r,{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:""})]),_:1}),e(c,null,{default:t(()=>[je]),_:1}),e(f,{strong:""},{default:t(()=>[e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col"},{default:t(()=>[Ue]),_:1}),e(_,{class:"col",fill:""},{default:t(()=>[Ee]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",raised:""},{default:t(()=>[He]),_:1}),e(_,{class:"col",raised:"",fill:""},{default:t(()=>[Me]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",round:""},{default:t(()=>[Te]),_:1}),e(_,{class:"col",round:"",fill:""},{default:t(()=>[ze]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",outline:""},{default:t(()=>[Ge]),_:1}),e(_,{class:"col",round:"",outline:""},{default:t(()=>[Ye]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",small:"",outline:""},{default:t(()=>[Ke]),_:1}),e(_,{class:"col",small:"",round:"",outline:""},{default:t(()=>[We]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",small:"",fill:""},{default:t(()=>[Xe]),_:1}),e(_,{class:"col",small:"",round:"",fill:""},{default:t(()=>[Je]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",large:"",raised:""},{default:t(()=>[Ze]),_:1}),e(_,{class:"col",large:"",fill:"",raised:""},{default:t(()=>[et]),_:1})]),_:1}),e(d,{tag:"p"},{default:t(()=>[e(_,{class:"col",large:"",fill:"",raised:"",color:"red"},{default:t(()=>[tt]),_:1}),e(_,{class:"col",large:"",fill:"",raised:"",color:"green"},{default:t(()=>[ot]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[nt]),_:1}),e(m,null,{default:t(()=>[e(u,{checkbox:"",name:"my-checkbox",value:"Books",title:"Books"}),e(u,{checkbox:"",name:"my-checkbox",value:"Movies",title:"Movies"}),e(u,{checkbox:"",name:"my-checkbox",value:"Food",title:"Food"})]),_:1}),e(c,null,{default:t(()=>[lt]),_:1}),e(m,null,{default:t(()=>[e(u,{radio:"",name:"radio",value:"Books",title:"Books"}),e(u,{radio:"",name:"radio",value:"Movies",title:"Movies"}),e(u,{radio:"",name:"radio",value:"Food",title:"Food"})]),_:1})]),_:1})}var st=k(Ie,[["render",at]]);const rt={props:{f7route:Object,f7router:Object}},it=i("b",null,"Url:",-1),ct=i("b",null,"Path:",-1),_t=i("b",null,"Hash:",-1),ut=i("b",null,"Params:",-1),dt=i("b",null,"Query:",-1),pt=i("b",null,"Route:",-1),ft=l("Go back via Router API");function mt(a,s,n,c,r,p){const u=o("f7-navbar"),h=o("f7-block"),m=o("f7-link"),_=o("f7-page");return b(),v(_,null,{default:t(()=>[e(u,{title:"Dynamic Route","back-link":"Back"}),e(h,{strong:""},{default:t(()=>[i("ul",null,[i("li",null,[it,l(" "+g(n.f7route.url),1)]),i("li",null,[ct,l(" "+g(n.f7route.path),1)]),i("li",null,[_t,l(" "+g(n.f7route.hash),1)]),i("li",null,[ut,i("ul",null,[(b(!0),x(F,null,B(n.f7route.params,(d,f)=>(b(),x("li",{key:f},[i("b",null,g(f)+":",1),l(" "+g(d),1)]))),128))])]),i("li",null,[dt,i("ul",null,[(b(!0),x(F,null,B(n.f7route.query,(d,f)=>(b(),x("li",{key:f},[i("b",null,g(f)+":",1),l(" "+g(d),1)]))),128))])]),i("li",null,[pt,l(" "+g(n.f7route.route.path),1)])])]),_:1}),e(h,{strong:""},{default:t(()=>[e(m,{onClick:s[0]||(s[0]=d=>n.f7router.back())},{default:t(()=>[ft]),_:1})]),_:1})]),_:1})}var ht=k(rt,[["render",mt]]);const bt={props:{user:Object}};function gt(a,s,n,c,r,p){const u=o("f7-navbar"),h=o("f7-block"),m=o("f7-list-item"),_=o("f7-list"),d=o("f7-page");return b(),v(d,null,{default:t(()=>[e(u,{title:`${n.user.firstName} ${n.user.lastName}`,"back-link":"Back"},null,8,["title"]),e(h,{strong:""},{default:t(()=>[l(g(n.user.about),1)]),_:1}),e(_,null,{default:t(()=>[(b(!0),x(F,null,B(n.user.links,(f,y)=>(b(),v(m,{key:y,link:f.url,title:f.title,external:"",target:"_blank"},null,8,["link","title"]))),128))]),_:1})]),_:1})}var vt=k(bt,[["render",gt]]);const kt={},yt=i("p",null,"Sorry",-1),$t=i("p",null,"Requested content not found.",-1);function wt(a,s,n,c,r,p){const u=o("f7-navbar"),h=o("f7-block"),m=o("f7-page");return b(),v(m,null,{default:t(()=>[e(u,{title:"Not found","back-link":"Back"}),e(h,{strong:""},{default:t(()=>[yt,$t]),_:1})]),_:1})}var xt=k(kt,[["render",wt]]);const qt={props:{f7route:Object,f7router:Object,axios:Object},data(){return{listSupplier:[],qrid:{},history:[],org:{},qrpackage:{},listQRTask:[],listQRRequest:[],loading:!0,staffUser:null,swiperOptions1:{slidesPerView:1,spaceBetween:15,speed:2e3,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",dynamicBullets:!0}},swiperOptions2:{slidesPerView:2,spaceBetween:15,speed:2e3,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",dynamicBullets:!0}}}},methods:{async getDeviceData(){try{var a=this.f7route.params.id,s=this.f7route.params.privateCode;this.$axios.defaults.baseURL="https://backend.qrcare.net/api";var n=await this.$axios.get("/QRIDs/getLifecycle",{params:{qrid:a,privateCode:s}}),c=n.data;console.log("lifecycle",c),c&&c.id&&(this.qrid=c,this.org=this.qrid.supporter,this.history=this.qrid.history)}catch(r){console.log("error",r)}}},async created(){await Promise.all([this.getDeviceData()]),this.loading=!1}},Rt={class:"mb-1 fs-14 text-center text-warning font-weight-bold text-uppercase"},Pt=i("span",{class:"material-icons",style:{top:"4px",position:"relative"}},"report_problem",-1),Lt=l(" Th\u1EBB ch\u01B0a \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t"),Bt=i("br",null,null,-1),Ft=i("p",{class:"mb-1 fs-14 text-dark",style:{opacity:"0.7"}}," \u0110\u1EC3 k\xEDch ho\u1EA1t th\u1EBB vui l\xF2ng li\xEAn h\u1EC7 ",-1),St={class:"mb-1 fs-14 font-weight-bold"},Nt={class:"mb-1 fs-14"},Ct={class:"mb-1 fs-14"};function Dt(a,s,n,c,r,p){const u=o("f7-navbar"),h=o("b-jumbotron"),m=o("f7-block"),_=o("f7-list-item"),d=o("f7-list"),f=o("f7-page");return b(),v(f,null,{default:t(()=>[e(u,{title:"V\xF2ng \u0111\u1EDDi thi\u1EBFt b\u1ECB","back-link":"Back"}),e(m,null,{default:t(()=>[e(h,{class:"mb-3 border-radius-0 px-3 bg-white mt-3"},{default:t(()=>[i("p",Rt,[Pt,Lt,Bt,l(" ID Thi\u1EBFt b\u1ECB: "+g(r.qrid.id),1)]),Ft,i("p",St,g(r.org.name),1),i("p",Nt,"\u0110\u1ECBa ch\u1EC9: "+g(r.org.address),1),i("p",Ct,"Hotline: "+g(r.org.hotline),1)]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(_,{link:"/about/",title:"About"}),e(_,{link:"/l/100010010200184/p/62537836",title:"200184"})]),_:1})]),_:1})}var Qt=k(qt,[["render",Dt]]),It=[{path:"/",component:xe},{path:"/l/:id/p/:privateCode",component:Qt},{path:"/about/",component:Qe},{path:"/form/",component:st},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:ht},{path:"/request-and-load/user/:userId/",async:function({router:a,to:s,resolve:n}){var c=a.app;c.preloader.show(),s.params.userId,setTimeout(function(){var r={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};c.preloader.hide(),n({component:vt},{props:{user:r}})},1e3)}},{path:"(.*)",component:xt}];const Ot=J({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}],listUrls:["https://qrcare.net/lifecycle/100010010000000/private/24135380","https://qrcare.net/authentic/100010010000000/private/241353","https://qrcare.net/lifecycle/100010010000002/private/20549215","https://qrcare.net/authentic/100010010000002/private/205492","https://qrcare.net/lifecycle/100010010000001/private/24197092","https://qrcare.net/authentic/100010010000001/private/24197092","https://qrcare.net/lifecycle/100010010020000/private/33249616","https://qrcare.net/lifecycle/100010010020002/private/19647305","https://qrcare.net/lifecycle/100010010020001/private/87957579","https://qrcare.net/lifecycle/100010010020003/private/36250781"]},getters:{products({state:a}){return a.products},listUrls({state:a}){return a.listUrls}},actions:{addProduct({state:a},s){a.products=[...a.products,s]}}}),Vt={setup(){const a={name:"QRCare VN",theme:"auto",view:{browserHistory:!0,browserHistorySeparator:""},store:Ot,routes:It,serviceWorker:{path:"/service-worker.js"}},s=I(""),n=I(""),c=()=>{O.dialog.alert("Username: "+s.value+"<br>Password: "+n.value,()=>{O.loginScreen.close()})};return Z(()=>{ee(()=>{})}),{f7params:a,username:s,password:n,alertLoginData:c}}},At=l("Left panel content goes here"),jt=l("Right panel content goes here"),Ut=l("Close"),Et=i("p",null,"Popup content goes here.",-1),Ht=l("Login"),Mt=l(" Some text about login information."),Tt=i("br",null,null,-1),zt=l('Click "Sign In" to close Login Screen ');function Gt(a,s,n,c,r,p){const u=o("f7-navbar"),h=o("f7-block"),m=o("f7-page"),_=o("f7-view"),d=o("f7-panel"),f=o("f7-link"),y=o("f7-nav-right"),$=o("f7-popup"),w=o("f7-login-screen-title"),q=o("f7-list-input"),R=o("f7-list"),V=o("f7-list-button"),A=o("f7-block-footer"),j=o("f7-login-screen"),U=o("f7-app");return b(),v(U,te(oe(c.f7params)),{default:t(()=>[e(d,{left:"",cover:"","theme-dark":""},{default:t(()=>[e(_,null,{default:t(()=>[e(m,null,{default:t(()=>[e(u,{title:"Left Panel"}),e(h,null,{default:t(()=>[At]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{right:"",reveal:"","theme-dark":""},{default:t(()=>[e(_,null,{default:t(()=>[e(m,null,{default:t(()=>[e(u,{title:"Right Panel"}),e(h,null,{default:t(()=>[jt]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{main:"",class:"safe-areas",url:"/"}),e($,{id:"my-popup"},{default:t(()=>[e(_,null,{default:t(()=>[e(m,null,{default:t(()=>[e(u,{title:"Popup"},{default:t(()=>[e(y,null,{default:t(()=>[e(f,{"popup-close":""},{default:t(()=>[Ut]),_:1})]),_:1})]),_:1}),e(h,null,{default:t(()=>[Et]),_:1})]),_:1})]),_:1})]),_:1}),e(j,{id:"my-login-screen"},{default:t(()=>[e(_,null,{default:t(()=>[e(m,{"login-screen":""},{default:t(()=>[e(w,null,{default:t(()=>[Ht]),_:1}),e(R,{form:""},{default:t(()=>[e(q,{type:"text",name:"username",placeholder:"Your username",value:c.username,"onUpdate:value":s[0]||(s[0]=L=>c.username=L)},null,8,["value"]),e(q,{type:"password",name:"password",placeholder:"Your password",value:c.password,"onUpdate:value":s[1]||(s[1]=L=>c.password=L)},null,8,["value"])]),_:1}),e(R,null,{default:t(()=>[e(V,{title:"Sign In",onClick:c.alertLoginData},null,8,["onClick"]),e(A,null,{default:t(()=>[Mt,Tt,zt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16)}var Yt=k(Vt,[["render",Gt]]);ne.use(le);const P=ae(Yt);P.config.globalProperties.$axios=se;P.use(re);ie(P);P.mount("#app");
