(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(1),r=n(3),i=n.n(r),s=n(16),o=n.n(s),l=n(6),u=n(10),d=n.n(u),j=n(17),b=n(9),h=n(113),f=n(24),O=n(49),m=n.n(O),p=n(50),v=n(22),g=n(12),x=n(13),_=n(5),I=(n(34),n(110),n(66),n(111),n(51)),k=(n(104),Object(r.createContext)({})),N={Loading:function(){return Object(c.jsx)("div",{className:"loading-container",children:Object(c.jsx)("div",{className:"lds-ellipsis",children:Object(a.a)(Array(4)).map((function(e,t){return Object(c.jsx)("div",{},t)}))})})},Switch:function(e){var t=e.on;return Object(c.jsx)("div",{className:"switch "+(t?"on":"off")})}};try{_.a.initializeApp({apiKey:"AIzaSyAzpjpeQgorGwi0JFEwHB4gmnoLCCaLY0k",authDomain:"homepage-407c5.firebaseapp.com",databaseURL:"https://homepage-407c5.firebaseio.com",projectId:"homepage-407c5",storageBucket:"homepage-407c5.appspot.com",messagingSenderId:"837019211462",appId:"1:837019211462:web:cf461d3ab5fa5bec6f69c7",measurementId:"G-2EHD20CHYQ"})}catch(B){console.error(B)}var y=new(function(){function e(){Object(g.a)(this,e),this.default=this.selected="",this.list=[]}return Object(x.a)(e,[{key:"load",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.localization){e.next=15;break}return e.next=3,fetch("".concat("","/localization.json"));case 3:return n=e.sent,e.next=6,n.json();case 6:return this.localization=e.sent,this.default=this.selected=this.localization.default,this.list=this.localization.all,e.next=11,fetch("".concat("","/localization/").concat(this.selected,".json"));case 11:return a=e.sent,e.next=14,a.json();case 14:this.defaultLang=e.sent;case 15:return this.selected=t||this.localization.default,e.prev=16,e.next=19,fetch("".concat("","/localization/").concat(this.selected,".json"));case 19:return c=e.sent,e.t0=l.a,e.t1=Object(l.a)({},this.defaultLang),e.next=24,c.json();case 24:return e.t2=e.sent,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 28:return e.prev=28,e.t3=e.catch(16),e.abrupt("return",this.defaultLang);case 31:case"end":return e.stop()}}),e,this,[[16,28]])})));return function(t){return e.apply(this,arguments)}}()},{key:"name",value:function(e){var t=I.a.getLanguageNativeName(e);return t?t[0].toUpperCase()+t.slice(1):e}}]),e}()),w=(n(105),{});function C(e){var t;return/https:\/\//.test(e.src)?Object(c.jsx)("img",Object(l.a)({alt:"",draggable:"false"},Object(l.a)(Object(l.a)({},e),{},{className:"msg-image"+(e.className?" "+e.className:"")}))):Object(c.jsx)("i",Object(l.a)(Object(l.a)({},Object(l.a)(Object(l.a)({},e),{},{className:"material-icons-round msg-image "+e.className})),{},{children:null!==(t=e.src)&&void 0!==t?t:"person"}))}function R(){var e=Object(r.useContext)(k),t=e.loading,n=e.user,a=e.banned,i=e.uistrings,s=Object(r.useRef)(),o=Object(v.a)(_.a.database().ref("messages")),u=Object(b.a)(o,2),d=u[0],j=u[1],h=Object(v.b)(_.a.database().ref("users")),f=Object(b.a)(h,2),O=f[0],m=f[1];return Object(r.useEffect)((function(){return s.current&&(s.current.parentNode.scrollTop=s.current.offsetTop)})),Object(c.jsxs)("div",{className:"chat",children:[Object(c.jsx)("span",{className:"chat-header",children:i.chat_title}),Object(c.jsxs)("div",{className:"chat-body",children:[t||j||m?Object(c.jsx)(N.Loading,{}):a?Object(c.jsx)(E,{message:{text:i.chat_message_banned_text,displayName:i.chat_message_banned_user,photoURL:"verified_user"}}):null===d||void 0===d?void 0:d.map((function(e,t,a){var r,i,s=[];return(null===(r=a[t-1])||void 0===r?void 0:r.uid)===e.uid&&s.push("top"),(null===(i=a[t+1])||void 0===i?void 0:i.uid)===e.uid&&s.push("bottom"),Object(c.jsx)(E,{meta:{sent:e.uid===n.uid,connect:s},message:Object(l.a)(Object(l.a)({},e),O[e.uid])},t)})),Object(c.jsx)("div",{ref:s})]}),Object(c.jsx)(L,{})]})}function E(e){var t,n,a,r,i,s,o=e.meta,l=e.message;return Object(c.jsxs)("div",{className:"message "+((null===o||void 0===o?void 0:o.sent)?"sent":"received")+(null===o||void 0===o||null===(t=o.connect)||void 0===t||null===(n=t.map)||void 0===n||null===(a=n.call(t,(function(e){return" connect-"+e})))||void 0===a||null===(r=a.join)||void 0===r?void 0:r.call(a,"")),children:[!(null===o||void 0===o||null===(i=o.connect)||void 0===i?void 0:i.includes("top"))&&Object(c.jsx)(C,{src:null===l||void 0===l?void 0:l.photoURL,title:null!==(s=null===l||void 0===l?void 0:l.displayName)&&void 0!==s?s:w.chat_message_default_user}),Object(c.jsx)("span",{className:"msg-text",children:null===l||void 0===l?void 0:l.text})]})}function L(){var e,t,n,a,i,s=Object(r.useContext)(k),o=s.user,l=s.uistrings,u=Object(r.useRef)(),d=function(e){e.key&&"Enter"!==e.key||/^\s*$/.test(u.current.value)||(_.a.database().ref("messages/").push({uid:o.uid,timestamp:_.a.database.ServerValue.TIMESTAMP,text:u.current.value}),u.current.value="")},j=null!==(e=null!==(t=null===o||void 0===o||null===(n=o.providerData)||void 0===n?void 0:n[0])&&void 0!==t?t:o)&&void 0!==e?e:{};return Object(c.jsxs)("div",{className:"chat-footer",children:[Object(c.jsx)(C,{src:j.photoURL,title:"You"}),Object(c.jsx)("input",{className:"chat-input",type:"text",placeholder:j.displayName?null===(a=l.chat_input_placeholder_user)||void 0===a||null===(i=a.replace)||void 0===i?void 0:i.call(a,"{1}",j.displayName):l.chat_input_placeholder_default,onKeyDown:d,ref:u}),Object(c.jsx)("button",{className:"chat-send",onClick:d,children:l.chat_button_send})]})}function S(){var e=Object(r.useContext)(k).uistrings;return Object(c.jsx)("span",{children:e.chat_error_account})}var A=function(){var e=Object(r.useContext)(k),t=e.user;return e.loading||t?Object(c.jsx)(R,{}):Object(c.jsx)(S,{})};n(106);function D(e){var t,n=e.name;return(null===n||void 0===n||null===(t=n.includes)||void 0===t?void 0:t.call(n,"https"))?Object(c.jsx)("img",{alt:"",draggable:"false",className:"user-image",src:n}):Object(c.jsx)("i",{className:"material-icons-round",children:n})}function P(e){var t,n,a,i,s=e.autoLogin,o=Object(r.useContext)(k),l=o.loading,u=o.user,h=o.banned,O=o.uistrings,p=Object(r.useState)(null!==s&&void 0!==s&&s),v=Object(b.a)(p,2),g=v[0],x=v[1];if(l)return Object(c.jsx)(N.Loading,{});if(!u&&!g)return Object(c.jsx)(z,{leftIcon:"login",rightIcon:"keyboard_arrow_right",onClick:function(){return x(!0)},children:O.menubar_account_login});if(!u||g){var I={autoUpgradeAnonymousUsers:!0,callbacks:{signInSuccessWithAuthResult:function(e,t){x(!1)},signInFailure:function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("firebaseui/anonymous-upgrade-merge-conflict"===t.code){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:return x(!1),_.a.auth().currentUser.delete(),e.next=6,_.a.auth().signInWithCredential(t.credential);case 6:return e.next=8,_.a.functions().httpsCallable("upgradeUser")({newUid:u.uid});case 8:return n=e.sent,console.log(n.data),e.abrupt("return");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),signInSuccessUrl:!1},credentialHelper:f.auth.CredentialHelper.GOOGLE_YOLO,signInFlow:_.a.auth().isSignInWithEmailLink(window.location.href)?"redirect":"popup",signInOptions:[{provider:_.a.auth.EmailAuthProvider.PROVIDER_ID,signInMethod:_.a.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD},{provider:_.a.auth.GoogleAuthProvider.PROVIDER_ID,clientId:"837019211462-a62qlmg12ln01fs4ubru65grnp86afup.apps.googleusercontent.com"},_.a.auth.FacebookAuthProvider.PROVIDER_ID,_.a.auth.TwitterAuthProvider.PROVIDER_ID,_.a.auth.GithubAuthProvider.PROVIDER_ID,_.a.auth.PhoneAuthProvider.PROVIDER_ID,!u&&f.auth.AnonymousAuthProvider.PROVIDER_ID]};return Object(c.jsx)(m.a,{uiConfig:I,firebaseAuth:_.a.auth()})}var y=null!==(t=null===(n=u.providerData)||void 0===n?void 0:n[0])&&void 0!==t?t:u;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{leftIcon:null!==(a=y.photoURL)&&void 0!==a?a:"person",children:null!==(i=y.displayName)&&void 0!==i?i:"Anonymous"}),u.isAnonymous&&!h&&Object(c.jsx)(z,{leftIcon:"upgrade",onClick:function(){return x(!0)},children:O.menubar_account_upgrade}),y.email&&Object(c.jsx)(z,{leftIcon:"alternate_email",children:y.email}),y.phoneNumber&&Object(c.jsx)(z,{leftIcon:"phone",children:y.phoneNumber}),Object(c.jsx)(z,{leftIcon:"close",onClick:Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.auth().signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:O.menubar_account_logout})]})}function T(e){var t=Object(r.useRef)();return Object(c.jsx)(h.a,{nodeRef:t,in:e.visible,timeout:200,classNames:"sidebar",children:Object(c.jsx)("aside",{ref:t,className:"sidebar",children:Object(c.jsx)("ul",{className:"sidebar-nav",children:e.children})})})}function M(e){return Object(c.jsxs)("div",{className:"clickable side-item",onClick:e.onClick,children:[e.leftIcon&&Object(c.jsx)("span",{className:"icon-button",children:Object(c.jsx)(D,{name:e.leftIcon})}),e.children,e.rightIcon&&Object(c.jsx)("span",{className:"icon-right",children:Object(c.jsx)(D,{name:e.rightIcon})})]})}var U=i.a.forwardRef((function(e,t){var n=Object(r.useState)("main"),a=Object(b.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(),u=Object(b.a)(o,2),d=u[0],j=u[1],f=function(){return j(e.children[i].ref.current.offsetHeight)};return e.children.$$typeof?Object(c.jsx)("div",Object(l.a)({className:"dropdown",ref:t},e)):Object(c.jsx)("div",{className:"dropdown",ref:t,style:{height:d},children:e.menus.map((function(t,n){return t.map((function(t,a){return Object(c.jsx)(h.a,{nodeRef:e.children[t].ref,in:i===t,unmountOnExit:!0,timeout:500,classNames:"dropdown-"+["primary","secondary"][n],onEnter:f,children:Object(l.a)(Object(l.a)({},e.children[t]),{},{props:Object(l.a)(Object(l.a)({},e.children[t].props),{},{children:e.children[t].props.children.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{props:Object(l.a)(Object(l.a)({},e.props),{},{onClick:e.props.goToMenu?function(){return s(e.props.goToMenu)}:e.props.onClick})})}))})})},n+"-"+a)}))}))})}));function z(e){return Object(c.jsxs)("div",{className:"clickable drop-item",onClick:e.onClick,children:[e.leftIcon&&Object(c.jsx)("span",{className:"icon-button",children:Object(c.jsx)(D,{name:e.leftIcon})}),e.children,e.rightIcon&&Object(c.jsx)("span",{className:"icon-right",children:Object(c.jsx)(D,{name:e.rightIcon})})]})}function V(e){return Object(c.jsx)("header",{className:"navbar",children:Object(c.jsx)("ul",{className:"navbar-nav",children:e.children})})}var G=function(){return Object(c.jsx)("li",{style:{margin:"auto"}})};function H(e){var t,n=Object(r.useState)(null!==(t=e.autoOpen)&&void 0!==t&&t),a=Object(b.a)(n,2),s=a[0],o=a[1],l=Object(r.useRef)(),u=Object(r.useRef)(),d=function(t){var n,a,c,r,i=t.target;return!e.persistent&&!(null===(n=l.current)||void 0===n||null===(a=n.contains)||void 0===a?void 0:a.call(n,i))&&!(null===(c=u.current)||void 0===c||null===(r=c.contains)||void 0===r?void 0:r.call(c,i))&&!i.className.includes("firebaseui")&&o(!1)};return Object(r.useEffect)((function(){return document.addEventListener("mousedown",d),function(){return document.removeEventListener("mousedown",d)}})),Object(c.jsxs)("li",{className:"nav-item"+(s?" open":""),ref:l,children:[Object(c.jsx)("div",{className:"clickable icon-button",onClick:function(){var t;o(!s),null===(t=e.onClick)||void 0===t||t.call(e,!s)},children:Object(c.jsx)(D,{name:e.icon})}),e.badge&&Object(c.jsx)("span",{className:"nav-badge",children:e.badge}),s&&e.children&&i.a.cloneElement(e.children,{ref:u})]})}function F(e){var t;return Object(c.jsx)("section",{className:"main",children:Object(c.jsx)("div",{className:"main-container",children:e.children[null!==(t=e.page)&&void 0!==t?t:0]})})}var J=function(e){var t=e.keys,n=e.accessibility,i=Object(p.a)(_.a.auth()),s=Object(b.a)(i,2),o=s[0],u=s[1],h=Object(v.b)(_.a.database().ref("users/".concat(null===o||void 0===o?void 0:o.uid,"/strikes"))),f=Object(b.a)(h,2),O=f[0],m=f[1],g=m?null:O>2;Object(r.useEffect)((function(){o&&!o.isAnonymous&&Object(j.a)(d.a.mark((function e(){var t,n,a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null!==(t=null===o||void 0===o||null===(n=o.providerData)||void 0===n?void 0:n[0])&&void 0!==t?t:o,c=_.a.storage().ref("users/"+o.uid+".jpg"),e.next=4,c.parent.listAll();case 4:if(!e.sent.items.map((function(e){return e.location.path})).includes("users/"+o.uid+".jpg")){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,fetch(a.photoURL);case 8:if((r=e.sent).ok){e.next=11;break}return e.abrupt("return");case 11:return e.t0=c,e.next=14,r.blob();case 14:return e.t1=e.sent,e.next=17,e.t0.put.call(e.t0,e.t1);case 17:return e.t2=_.a.database().ref("users/"+o.uid),e.t3=a.displayName,e.next=21,c.getDownloadURL();case 21:e.t4=e.sent,e.t5={displayName:e.t3,photoURL:e.t4},e.t2.set.call(e.t2,e.t5);case 24:case"end":return e.stop()}}),e)})))()}),[o]);var x=Object(r.useState)(Object(l.a)({sidebar:!1,location:0,language:y.default,accessibility:Object(l.a)({},Object.fromEntries(Object.values(t).map((function(e){return[e,null]}))))},JSON.parse(window.localStorage.getItem("state")))),I=Object(b.a)(x,2),w=I[0],C=I[1];Object(r.useEffect)((function(){var e=["location","accessibility","language"];window.localStorage.setItem("state",JSON.stringify(Object.fromEntries(Object.entries(w).filter((function(t){var n=Object(b.a)(t,1)[0];return e.includes(n)})))))}),[w]);var R=function(e){var t;return null!==(t=w.accessibility[e])&&void 0!==t?t:window.matchMedia(n[e][1]).matches},E=function(e,t){var a=Object(b.a)(n[e],2),c=a[0],r=a[1];switch(t){case window.matchMedia(r).matches:return c.mediaText=r,null;case!0:return c.mediaText="all",!0;default:return c.mediaText="not all",!1}},L=function(e){var t=w;null===E(e,t.accessibility[e]=!R(e))&&(t.accessibility[e]=null),C(Object(l.a)({},t))};Object.keys(n).forEach((function(e){return E(e,R(e))}));var S=Object(r.useState)({}),D=Object(b.a)(S,2),J=D[0],W=D[1];Object(r.useEffect)((function(){return y.load(w.language).then((function(e){return W(e)}))}),[w.language]);var Y=_.a.auth().isSignInWithEmailLink(window.location.href);return Object(c.jsxs)(k.Provider,{value:{loading:u||m||0===Object.keys(J).length,user:o,banned:g,uistrings:J},children:[Object(c.jsxs)(T,{visible:w.sidebar,children:[Object(c.jsx)(M,{leftIcon:"airplanemode_on",onClick:function(){return C(Object(l.a)(Object(l.a)({},w),{},{location:0}))},children:J.sidebar_default}),Object(c.jsx)(M,{leftIcon:"airplanemode_on",onClick:function(){return C(Object(l.a)(Object(l.a)({},w),{},{location:1}))},children:J.sidebar_default}),Object(c.jsx)(M,{leftIcon:"chat",onClick:function(){return C(Object(l.a)(Object(l.a)({},w),{},{location:2}))},children:J.sidebar_chat})]}),Object(c.jsxs)(V,{children:[Object(c.jsx)(H,{icon:"menu",persistent:!0,onClick:function(e){return C(Object(l.a)(Object(l.a)({},w),{},{sidebar:e}))}}),Object(c.jsx)(G,{}),Object(c.jsx)(H,{icon:"notifications"+(O?"_active":""),badge:O,children:Object(c.jsx)(U,{children:(u||m)&&Object(c.jsx)(N.Loading,{})||g&&Object(c.jsx)(z,{leftIcon:"error",children:J.menubar_status_banned})||O&&Object(c.jsx)(z,{leftIcon:"warning",children:J.menubar_status_strikes.replace("{1}",O)})||Object(c.jsx)(z,{leftIcon:"thumb_up",children:J.menubar_status_ok})})}),Object(c.jsx)(H,{icon:"account_circle",persistent:!1,autoOpen:Y,children:Object(c.jsx)(U,{children:Object(c.jsx)(P,{autoLogin:Y})})}),Object(c.jsx)(H,{icon:"keyboard_arrow_down",children:Object(c.jsx)(U,{menus:[["main"],["lang"]],children:{main:Object(c.jsxs)("div",{ref:Object(r.useRef)(),children:[Object(c.jsx)(z,{leftIcon:"bedtime",onClick:function(){return L("darkTheme")},rightIcon:Object(c.jsx)(N.Switch,{on:R("darkTheme")}),children:J.menubar_accessibility_theme}),Object(c.jsx)(z,{leftIcon:"double_arrow",onClick:function(){return L("reducedMotion")},rightIcon:Object(c.jsx)(N.Switch,{on:R("reducedMotion")}),children:J.menubar_accessibility_motion}),Object(c.jsxs)(z,{leftIcon:"language",goToMenu:"lang",rightIcon:"keyboard_arrow_right",children:[J.menubar_accessibility_language,Object(c.jsx)("span",{style:{flex:1}}),y.name(y.selected)]})]}),lang:Object(c.jsx)("div",{ref:Object(r.useRef)(),children:[Object(c.jsx)(z,{leftIcon:"keyboard_arrow_left",goToMenu:"main",children:J.menubar_accessibility_back},"back")].concat(Object(a.a)(y.list.map((function(e){return Object(c.jsx)(z,{leftIcon:"language",onClick:function(){return C(Object(l.a)(Object(l.a)({},w),{},{language:e}))},children:y.name(e)},e)}))))})}})})]}),Object(c.jsxs)(F,{page:w.location,children:[Object(c.jsx)("span",{children:J.page1}),Object(c.jsx)("span",{children:J.page2}),Object(c.jsx)(A,{})]})]})},W={"(prefers-color-scheme: dark)":"darkTheme","(prefers-reduced-motion: reduce)":"reducedMotion"},Y=Object.fromEntries(Object(a.a)(document.styleSheets).flatMap((function(e){return Object(a.a)(e.rules)})).filter((function(e){return e instanceof CSSMediaRule})).map((function(e){var t=e.media;return[W[t.mediaText],[t,t.mediaText.toString()]]})));o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(J,{keys:W,accessibility:Y})}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.8a1d0c06.chunk.js.map