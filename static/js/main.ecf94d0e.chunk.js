(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(9),i=n.n(s),o=(n(15),n(2)),u=n.n(o),l=n(3),j=n(4);n(17);function d(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(18);var h=function(e){var t=e.statName,n=e.width;return Object(r.jsxs)("div",{className:"bar",children:[Object(r.jsx)("p",{className:"bar-name",children:t}),Object(r.jsx)("div",{className:"bar-wrap",children:Object(r.jsx)("div",{className:"points",style:{width:"".concat(100*n/150,"%")}})}),Object(r.jsx)("span",{children:n})]})};n(8);var m=function(e){var t=e.color;return Object(r.jsx)("div",{className:"add-btn",children:Object(r.jsx)("button",{className:"btn rounded-pill text-light",style:{backgroundColor:t},children:"Add to Collection"})})};n(19);var x=function(e){var t=e.imgUrl,n=e.name,c=e.rank,a=e.stats,s=e.pokeType,i={normal:"#BDBDAF",grass:"#7eb998",fire:"#f09990",water:"#8ab7e2",fighting:"#cc8c7f",flying:"#78A1FF",poison:"#d183c8",ground:" #f1db90",rock:"#e4d699",bug:"#d9e086",ghost:"#9995e4",electric:"#f1e48e",psychic:"#e493bf",ice:"#a2dee7",dragon:"#9c8fe5",dark:"#d8a992",steel:"#a7a3d8",fairy:"#ebacf0"},o="#000";function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object.keys(i).includes(s)&&(o=i[s]),Object(r.jsx)("div",{className:"card-container",children:Object(r.jsxs)("div",{className:"pokeCard",children:[Object(r.jsxs)("div",{className:"front-card",style:{backgroundColor:o},children:[Object(r.jsx)("div",{className:"img-container",children:Object(r.jsx)("img",{src:t,alt:"",className:"img-fluid"})}),Object(r.jsxs)("h4",{className:"rank",children:["# ",c]}),Object(r.jsx)("h4",{children:u(n)}),Object(r.jsx)("h4",{children:u(s)})]}),Object(r.jsx)("div",{className:"back-card",children:Object(r.jsxs)("div",{className:"stats",children:[a.map((function(e,t){return Object(r.jsx)(h,{width:e.base_stat,statName:e.stat.name},t)})),Object(r.jsx)(m,{color:o})]})})]})})},O=(n(20),n.p+"static/media/pokemonLogo.d07ac06b.png");var v=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"col-md-6 pt-3",children:Object(r.jsx)("img",{src:O,alt:"",className:"logo"})})})},k=n(7);var w=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],f=Object(c.useState)(""),h=Object(j.a)(f,2),m=h[0],O=h[1],w=Object(c.useState)(!0),N=Object(j.a)(w,2),y=N[0],g=N[1],C=Object(c.useState)(""),S=Object(j.a)(C,2),A=S[0],P=S[1],F="https://pokeapi.co/api/v2/pokemon";Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(F);case 2:return t=e.sent,p(t.next),O(t.previous),e.next=7,L(t.results);case 7:g(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,d(o);case 3:return t=e.sent,e.next=6,L(t.results);case 6:p(t.next),O(t.previous),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return g(!0),e.next=5,d(m);case 5:return t=e.sent,e.next=8,L(t.results);case 8:p(t.next),O(t.previous),g(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=n.filter((function(e){return e.name.toLowerCase().includes(A.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)(v,{})}),Object(r.jsx)("div",{className:"row search-box justify-content-center pt-4",children:Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return P(e.target.value)},className:"search-bar shadow"})})}),y?Object(r.jsx)("h1",{children:"Loading Pokemon..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"row justify-content-center",children:D.map((function(e,t){return Object(r.jsx)(x,{name:e.name,imgUrl:e.sprites.other["official-artwork"].front_default,rank:e.id,stats:e.stats,pokeType:e.types[0].type.name},t)}))}),Object(r.jsxs)("div",{className:"row justify-content-center pb-4",children:[Object(r.jsx)(k.a,{onClick:U,className:"btn mx-2",children:"Prev"}),Object(r.jsx)(k.a,{onClick:B,className:"btn mx-2",children:"Next"})]})]})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ecf94d0e.chunk.js.map