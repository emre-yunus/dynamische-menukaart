(this["webpackJsonpdynamische-menukaart"]=this["webpackJsonpdynamische-menukaart"]||[]).push([[0],{61:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(26),s=n.n(a),i=(n(61),n(62),n(63),n(64),n(74)),u=n(75),o=n(5);function j(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{fixed:"top",bg:"dark",variant:"dark",children:Object(o.jsx)(u.a.Brand,{className:"p-2",children:"Ons cafe"})}),Object(o.jsx)("div",{style:{height:"3em"}})]})}var d=n(72),b=n(17);function l(e){var t=e.note;return t?Object(o.jsx)("div",{className:"note",children:t}):null}var p=n(73);function O(e){var t=e.size;return t?Object(o.jsxs)("span",{className:"productSize",children:[" - ",t,"cl"]}):null}function m(e){var t=e.product;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(d.a,{children:[Object(o.jsxs)(p.a,{children:[t.name,Object(o.jsx)(O,{product:t.size})]}),Object(o.jsxs)(p.a,{xs:3,md:4,className:"text-end",children:[t.price,"\u20ac"]})]}),Object(o.jsx)(d.a,{children:Object(o.jsx)(p.a,{children:Object(o.jsx)(l,{note:t.note})})})]})}var x=n(76),h=n(56);function f(e){var t=e.category,n=Object(c.useState)(!0),r=Object(b.a)(n,2),a=r[0],s=r[1];return Object(o.jsx)(p.a,{xs:12,md:6,lg:4,className:"p-0 p-md-1",children:Object(o.jsxs)(x.a,{className:"mt-2 h-100",children:[Object(o.jsx)(x.a.Header,{className:"bg-dark text-white",onClick:function(){return s(!a)},children:Object(o.jsx)("h2",{children:t.name})}),Object(o.jsx)(h.a,{in:a,children:Object(o.jsxs)(x.a.Body,{children:[Object(o.jsx)(l,{note:t.note}),t.products.map((function(e){return Object(o.jsx)(m,{product:e},e.name)}))]})})]})})}var g=n(1),v=n.n(g),y=n(4),k=n(27),N=n(8),C=(n(52),n(48)),w={apiKey:"AIzaSyC1XiUTyC2tGY2uRg-PN7XQo2LYcag5ejg",authDomain:"menucard-database.firebaseapp.com",projectId:"menucard-database"};console.log({firebaseConfig:w}),C.a.apps.length||C.a.initializeApp(w);var F=w.projectId&&C.a.firestore();F?console.log("connection to database is ok"):console.log("ERROR: no connection to database");var S="products";function B(){return z.apply(this,arguments)}function z(){return(z=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,F.collection(S).orderBy("category","asc").orderBy("sequence","asc").get();case 4:if(!(t=e.sent).empty){e.next=7;break}return e.abrupt("return",[]);case 7:return n=t.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})})),e.abrupt("return",Object(k.a)(new Set(n.map((function(e){return e.category})))).map((function(e){return{name:e,products:n.filter((function(t){return t.category===e}))}})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=Object(c.createContext)();function I(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useMemo)((function(){return{menuData:r,setMenuData:a}}),[r,a]),i=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return i()}),[]),Object(o.jsx)(D.Provider,{value:s,children:e.children})}function M(){var e=Object(c.useContext)(D).menuData;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d.a,{className:"m-0 mt-4 menu-h1",children:Object(o.jsx)("h1",{children:" Menu"})}),Object(o.jsx)(d.a,{className:"m-0",children:e.map((function(e){return Object(o.jsx)(f,{category:e},e.name)}))})]})}function P(){return Object(o.jsxs)(i.a,{fluid:!0,className:"p-0 p-md-3 p-lg-5",children:[Object(o.jsx)(j,{}),Object(o.jsx)(M,{})]})}var R=function(){return Object(o.jsx)(I,{children:Object(o.jsx)(P,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),E()}},[[70,1,2]]]);
//# sourceMappingURL=main.f79b12d4.chunk.js.map