(this["webpackJsonpdynamische-menukaart"]=this["webpackJsonpdynamische-menukaart"]||[]).push([[0],{61:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(27),s=n.n(a),o=(n(61),n(62),n(63),n(64),n(74)),i=n(75),u=n(4);function j(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.a,{fixed:"top",bg:"dark",variant:"dark",children:Object(u.jsx)(i.a.Brand,{className:"p-2",children:"Ons cafe"})}),Object(u.jsx)("div",{style:{height:"3em"}})]})}var d=n(72),b=n(16);function l(e){var t=e.note;return t?Object(u.jsx)("div",{className:"note",children:t}):null}var O=n(73);function m(e){var t=e.size;return t?Object(u.jsxs)("span",{className:"productSize",children:[" - ",t,"cl"]}):null}function p(e){var t=e.product;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(d.a,{children:[Object(u.jsxs)(O.a,{children:[t.name,Object(u.jsx)(m,{product:t.size})]}),Object(u.jsxs)(O.a,{xs:3,md:4,className:"text-end",children:[t.price,"\u20ac"]})]}),Object(u.jsx)(d.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(l,{note:t.note})})})]})}var x=n(76),f=n(56);function h(e){var t=e.category,n=Object(c.useState)(!0),r=Object(b.a)(n,2),a=r[0],s=r[1];return Object(u.jsx)(O.a,{xs:12,md:6,lg:4,className:"p-0 p-md-1",children:Object(u.jsxs)(x.a,{className:"mt-2 h-100",children:[Object(u.jsx)(x.a.Header,{className:"bg-dark text-white",onClick:function(){return s(!a)},children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsx)(f.a,{in:a,children:Object(u.jsxs)(x.a.Body,{children:[Object(u.jsx)(l,{note:t.note}),t.products.map((function(e){return Object(u.jsx)(p,{product:e},e.name)}))]})})]})})}var g=n(1),v=n.n(g),y=n(5),k=n(25),C=n(8),N=(n(52),n(48)),w={apiKey:"AIzaSyC1XiUTyC2tGY2uRg-PN7XQo2LYcag5ejg",authDomain:"menucard-database.firebaseapp.com",projectId:"menucard-database"};console.log({firebaseConfig:w}),N.a.apps.length||N.a.initializeApp(w);var F=w.projectId&&N.a.firestore();F?console.log("connection to database is ok"):console.log("ERROR: no connection to database");var M="products";function S(){return B.apply(this,arguments)}function B(){return(B=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,F.collection(M).orderBy("category","asc").orderBy("sequence","asc").get();case 4:if(!(t=e.sent).empty){e.next=7;break}return e.abrupt("return",[]);case 7:return n=t.docs.map((function(e){return Object(C.a)(Object(C.a)({},e.data()),{},{id:e.id})})),e.abrupt("return",Object(k.a)(new Set(n.map((function(e){return e.category})))).map((function(e){return{name:e,products:n.filter((function(t){return t.category===e}))}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=Object(c.createContext)();function z(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),r=n[0],a=n[1];console.log({message:r});var s=Object(c.useMemo)((function(){return{message:r,setMessage:a}}),[r,a]);return Object(u.jsx)(P.Provider,{value:s,children:e.children})}var D=Object(c.createContext)();function I(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useContext)(P).setMessage,o=Object(c.useMemo)((function(){var e;return(e=[]).concat.apply(e,Object(k.a)(r.map((function(e){return e.products}))))}),[r]),i=Object(c.useCallback)((function(e){return o.find((function(t){return t.name===e}))}),[o]),j=Object(c.useCallback)(Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("loading"),e.next=3,S();case 3:t=e.sent,a(t),s(t.length?"":"error : network connection problem");case 6:case"end":return e.stop()}}),e)}))),[s,a]);Object(c.useEffect)((function(){j()}),[j]);var d=Object(c.useMemo)((function(){return{menuData:r,setMenuData:a,findProduct:i}}),[r,a,i]);return Object(u.jsx)(D.Provider,{value:d,children:e.children})}function R(){var e=Object(c.useContext)(D).menuData;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{className:"m-0 mt-4 menu-h1",children:Object(u.jsx)("h1",{children:" Menu"})}),Object(u.jsx)(d.a,{className:"m-0",children:e.map((function(e){return Object(u.jsx)(h,{category:e},e.name)}))})]})}function E(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.a,{fluid:!0,className:"p-0 p-md-3 p-lg-5",children:[Object(u.jsx)(j,{}),Object(u.jsx)(R,{})]})})}var L=function(){return Object(u.jsx)(z,{children:Object(u.jsx)(I,{children:Object(u.jsx)(E,{})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.0cdacb66.chunk.js.map