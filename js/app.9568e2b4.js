(function(e){function t(t){for(var a,o,r=t[0],i=t[1],l=t[2],s=0,d=[];s<r.length;s++)o=r[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},c={app:0},u=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09a3a2cd":"2a7c86d2","chunk-2d22bcc3":"94bd13ee","chunk-40bb9e58":"232e2385","chunk-490a14fe":"b491a089","chunk-5fe2f10e":"5780e934","chunk-9d24c10e":"228aad2a","chunk-1884eb96":"775c2827","chunk-243f4277":"a392780b","chunk-2fe4eb5e":"b27ebfdb","chunk-6e7bce36":"bc27156e","chunk-c31cc056":"45814376","chunk-0e96b054":"5f14e1b3","chunk-479e363c":"9bd7f065","chunk-7049ec69":"cf3a9c4f","chunk-912f0a9e":"be77833d","chunk-a366d654":"59ca5f3e","chunk-dbc69440":"7b166719"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09a3a2cd":1,"chunk-490a14fe":1,"chunk-2fe4eb5e":1,"chunk-6e7bce36":1,"chunk-0e96b054":1,"chunk-479e363c":1,"chunk-7049ec69":1,"chunk-912f0a9e":1,"chunk-a366d654":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-09a3a2cd":"b0872944","chunk-2d22bcc3":"31d6cfe0","chunk-40bb9e58":"31d6cfe0","chunk-490a14fe":"c0732149","chunk-5fe2f10e":"31d6cfe0","chunk-9d24c10e":"31d6cfe0","chunk-1884eb96":"31d6cfe0","chunk-243f4277":"31d6cfe0","chunk-2fe4eb5e":"81b9db74","chunk-6e7bce36":"19b83bdb","chunk-c31cc056":"31d6cfe0","chunk-0e96b054":"d5b819d1","chunk-479e363c":"6a345e88","chunk-7049ec69":"3300fb8a","chunk-912f0a9e":"06194056","chunk-a366d654":"c0732149","chunk-dbc69440":"31d6cfe0"}[e]+".css",c=i.p+a,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var l=u[r],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],s=l.getAttribute("data-href");if(s===a||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=r(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/myCv/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1dff":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c}));var a={},o={},c={app:{appName:"My online CV",appLogoImage:n("ed29")},layout:{isRTL:!1,skin:"light",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!1},navbar:{type:"floating",backgroundColor:""},footer:{type:"static"},customizer:!0,enableScrollToTop:!0}}},4131:function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62"),c=n("1dff"),u={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1},getters:{currentBreakPoint:function(e){var t=e.windowWidth;return t>=c["a"].xl?"xl":t>=c["a"].lg?"lg":t>=c["a"].md?"md":t>=c["a"].sm?"sm":"xs"}},mutations:{UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},TOGGLE_OVERLAY:function(e,t){e.shallShowOverlay=void 0!==t?t:!e.shallShowOverlay}},actions:{}},r=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:c["c"].layout.isRTL,skin:localStorage.getItem("vuexy-skin")||c["c"].layout.skin,routerTransition:c["c"].layout.routerTransition,type:c["c"].layout.type,contentWidth:c["c"].layout.contentWidth,menu:{hidden:c["c"].layout.menu.hidden},navbar:{type:c["c"].layout.navbar.type,backgroundColor:c["c"].layout.navbar.backgroundColor},footer:{type:c["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(e){e.layout.isRTL=!e.layout.isRTL,document.documentElement.setAttribute("dir",e.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(e,t){e.layout.skin=t,localStorage.setItem("vuexy-skin",t),"dark"===t?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(e,t){e.layout.routerTransition=t},UPDATE_LAYOUT_TYPE:function(e,t){e.layout.type=t},UPDATE_CONTENT_WIDTH:function(e,t){e.layout.contentWidth=t},UPDATE_NAV_MENU_HIDDEN:function(e,t){e.layout.menu.hidden=t},UPDATE_NAVBAR_CONFIG:function(e,t){Object.assign(e.layout.navbar,t)},UPDATE_FOOTER_CONFIG:function(e,t){Object.assign(e.layout.footer,t)}},actions:{}}),i={namespaced:!0,state:{isVerticalMenuCollapsed:c["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(e,t){e.isVerticalMenuCollapsed=t}},actions:{}};a["default"].use(o["a"]);t["a"]=new o["a"].Store({modules:{app:u,appConfig:r,verticalMenu:i},strict:Object({NODE_ENV:"production",VUE_APP_GTAG:"G-G4TMY1FC73",BASE_URL:"/myCv/"}).DEV})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,c=n("2b0e"),u=n("51c2"),r=n("dbbe"),i=n("a6f4"),l=n("a584"),s=n("a18c"),d=n("4360"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",class:[e.skinClasses],attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},p=[],m=(n("fb6a"),n("a9e3"),n("d3b7"),n("498a"),n("1dff")),b=n("04b0"),h=n("b8f2"),g=n("16ce"),y=function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-c31cc056"),n.e("chunk-479e363c"),n.e("chunk-912f0a9e")]).then(n.bind(null,"03d1"))},k=function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-c31cc056"),n.e("chunk-479e363c"),n.e("chunk-7049ec69")]).then(n.bind(null,"2607"))},v=function(){return n.e("chunk-2d22bcc3").then(n.bind(null,"f102"))},T={components:{LayoutHorizontal:k,LayoutVertical:y,LayoutFull:v},computed:{layout:function(){return"full"===this.$route.meta.layout?"layout-full":"layout-".concat(this.contentLayoutType)},contentLayoutType:function(){return this.$store.state.appConfig.layout.type}},beforeCreate:function(){for(var e=["primary","secondary","success","info","warning","danger","light","dark"],t=0,n=e.length;t<n;t++)m["b"][e[t]]=Object(g["a"])("--".concat(e[t]),document.documentElement).value.trim();for(var a=["xs","sm","md","lg","xl"],o=0,c=a.length;o<c;o++)m["a"][a[o]]=Number(Object(g["a"])("--breakpoint-".concat(a[o]),document.documentElement).value.slice(0,-2));var u=m["c"].layout.isRTL;document.documentElement.setAttribute("dir",u?"rtl":"ltr")},setup:function(){var e=Object(h["a"])(),t=e.skin,n=e.skinClasses;"dark"===t.value&&document.body.classList.add("dark-layout"),Object(b["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),d["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var a=Object(g["b"])(),o=a.width;return Object(i["watch"])(o,(function(e){d["a"].commit("app/UPDATE_WINDOW_WIDTH",e)})),{skinClasses:n}}},C=T,O=n("2877"),_=Object(O["a"])(C,f,p,!1,null,null,null),E=_.exports,A=(n("b0c0"),n("5530")),P=n("0a35"),w={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-primary"}},render:function(e,t){var n=t.props,a=t.data,o=e(P[n.icon],Object(A["a"])({props:{size:n.size}},a));if(!n.badge)return o;var c=e("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return e("span",{staticClass:"feather-icon position-relative"},[o,c])}},N=w,D=(n("8bd0"),Object(O["a"])(N,a,o,!1,null,null,null)),L=D.exports;c["default"].component(L.name,L);var j=n("2b88"),I=n.n(j);c["default"].use(I.a);var U=n("6c42");n("cc0f");c["default"].use(U["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),c["default"].use(l["a"],{config:{id:"G-G4TMY1FC73",params:{send_page_view:!1}}}),c["default"].use(u["a"]),c["default"].use(r["a"]),c["default"].use(i["default"]),n("4131"),n("78a7"),c["default"].config.productionTip=!1,new c["default"]({router:s["a"],store:d["a"],render:function(e){return e(E)}}).$mount("#app")},"602d4":function(e,t,n){},"78a7":function(e,t,n){},"8bd0":function(e,t,n){"use strict";n("602d4")},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),o=n("8c4f");a["default"].use(o["a"]);var c=new o["a"]({mode:"history",base:"/myCv/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:function(){return n.e("chunk-40bb9e58").then(n.bind(null,"bb51"))},meta:{pageTitle:"Welcome",breadcrumb:[{text:"My Virtual Curriculum",active:!0}]}},{path:"/digital-cv",name:"digital-cv",component:function(){return n.e("chunk-09a3a2cd").then(n.bind(null,"8eec"))},meta:{pageTitle:"Digital Curriculum",breadcrumb:[{text:"Digital Curriculum",active:!0}]}},{path:"/personal-information",name:"personal-information",component:function(){return n.e("chunk-dbc69440").then(n.bind(null,"90e4"))},meta:{pageTitle:"Interview",breadcrumb:[{text:"Personal Information",active:!0}]}},{path:"/languages",name:"languages",component:function(){return n.e("chunk-5fe2f10e").then(n.bind(null,"6759"))},meta:{pageTitle:"Interview",breadcrumb:[{text:"Languages",active:!0}]}},{path:"/experience",name:"experience",component:function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-6e7bce36")]).then(n.bind(null,"459e"))},meta:{pageTitle:"Interview",breadcrumb:[{text:"Experience",active:!0}]}},{path:"/skills",name:"skills",component:function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-2fe4eb5e")]).then(n.bind(null,"ad83"))},meta:{pageTitle:"Interview",breadcrumb:[{text:"Skills",active:!0}]}},{path:"/my-family",name:"my-family",component:function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-243f4277")]).then(n.bind(null,"9028"))},meta:{pageTitle:"Interview",breadcrumb:[{text:"My Family",active:!0}]}},{path:"/hobbies",name:"hobbies",component:function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-1884eb96")]).then(n.bind(null,"048b"))},meta:{pageTitle:"Interview",breadcrumb:[{text:"Hobbies",active:!0}]}},{path:"/coming-soon",name:"coming-soon",component:function(){return n.e("chunk-a366d654").then(n.bind(null,"7bb1"))},meta:{layout:"full"}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-9d24c10e"),n.e("chunk-c31cc056"),n.e("chunk-0e96b054")]).then(n.bind(null,"a55b"))},meta:{layout:"full"}},{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-490a14fe").then(n.bind(null,"d80f"))},meta:{layout:"full"}},{path:"*",redirect:"error-404"}]});t["a"]=c},b8f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("a6f4"),o=n("4360");function c(){var e=Object(a["computed"])({get:function(){return o["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){o["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),t=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.isRTL},set:function(e){o["a"].commit("appConfig/TOGGLE_RTL",e)}}),n=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.skin},set:function(e){o["a"].commit("appConfig/UPDATE_SKIN",e)}}),c=Object(a["computed"])((function(){return"bordered"===n.value?"bordered-layout":"semi-dark"===n.value?"semi-dark-layout":null})),u=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.routerTransition},set:function(e){o["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",e)}}),r=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.type},set:function(e){o["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",e)}});Object(a["watch"])(r,(function(e){"horizontal"===e&&"semi-dark"===n.value&&(n.value="light")}));var i=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.contentWidth},set:function(e){o["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",e)}}),l=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.menu.hidden},set:function(e){o["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",e)}}),s=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.backgroundColor},set:function(e){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:e})}}),d=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.type},set:function(e){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:e})}}),f=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.footer.type},set:function(e){o["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:e})}});return{isVerticalMenuCollapsed:e,isRTL:t,skin:n,skinClasses:c,routerTransition:u,navbarBackgroundColor:s,navbarType:d,footerType:f,layoutType:r,contentWidth:i,isNavMenuHidden:l}}},cc0f:function(e,t,n){},ed29:function(e,t,n){e.exports=n.p+"img/logo.36f34a9f.svg"}});
//# sourceMappingURL=app.9568e2b4.js.map