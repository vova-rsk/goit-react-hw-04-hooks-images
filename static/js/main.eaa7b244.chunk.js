(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{19:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i,s,l,p=t(0),d=t.n(p),u=t(10),b=t.n(u),x=(t(19),t(5)),g=t(3),h=t(4),m=h.a.header(a||(a=Object(g.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),f=t(1),j=function(n){var e=n.onSubmit,t=Object(p.useState)(""),a=Object(x.a)(t,2),r=a[0],o=a[1];return Object(f.jsx)(m,{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:function(n){n.preventDefault(),r.trim()?e(r.trim()):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430")},children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(n){return o(n.target.value)},value:r})]})})},O=t(9),w=h.a.li(r||(r=Object(g.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),v=function(n){var e=n.src,t=n.alt,a=n.dataSrc,r=n.index,o=n.onClick;return Object(f.jsx)(w,{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:e,"data-src":a,"data-index":r,alt:t,className:"ImageGalleryItem-image",loading:"lazy",onClick:o})})},y=h.a.button(o||(o=Object(g.a)(["\n  margin: 32px auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    background-color: #303f9f;\n  }\n"]))),S=function(n){var e=n.handleIncrementPage;return Object(f.jsx)(y,{type:"button",onClick:e,children:"Load more"})},k={fetchImages:function(n,e){var t=new URLSearchParams({q:n,page:e,key:"22441039-e3c3a22ef42346706974d6393",image_type:"photo",orientation:"horizontal",per_page:12});return fetch("".concat("https://pixabay.com/api/","?").concat(t.toString())).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Oops, something went wrong!"))}))}},I=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},z=h.a.div(c||(c=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),E=function(n){var e=n.src,t=n.alt,a=n.closeModal;Object(p.useEffect)((function(){var n=function(n){"Escape"===n.code&&a()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[a]);return Object(f.jsx)(z,{className:"Overlay",onClick:function(n){n.currentTarget===n.target&&a()},children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:e,alt:t,width:"1024",height:"768"})})})},F=h.a.ul(i||(i=Object(g.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),N=function(n){var e=n.query,t=(n.statusChanging,n.setErrorMessage,n.currentStatus),a=Object(p.useState)(null),r=Object(x.a)(a,2),o=r[0],c=r[1],i=Object(p.useState)([]),s=Object(x.a)(i,2),l=s[0],d=s[1],u=Object(p.useState)(!1),b=Object(x.a)(u,2),g=b[0],h=b[1],m=Object(p.useState)(!0),j=Object(x.a)(m,2),w=j[0],y=j[1];Object(p.useEffect)((function(){e&&(c(1),d([]))}),[e]),Object(p.useEffect)((function(){y(!0)}),[t]),Object(p.useEffect)((function(){o&&k.fetchImages(e,o).then((function(n){var e=n.hits;n.totalHits;d((function(n){return[].concat(Object(O.a)(n),Object(O.a)(e))}))})).catch((function(n){})).finally((function(){I()}))}),[o,e]);var z=function(n){var e=Number(n.currentTarget.dataset.index),t=l.find((function(n,t){return t===e}));h(t)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{className:"ImageGallery",children:l.map((function(n,e){var t=n.webformatURL,a=n.largeImageURL,r=n.tags;return Object(f.jsx)(v,{src:t,index:e,dataSrc:a,alt:r,onClick:z},e)}))}),w&&Object(f.jsx)(S,{handleIncrementPage:function(){c((function(n){return n+1}))}}),g&&Object(f.jsx)(E,{src:g.largeImageURL,alt:g.tags,closeModal:function(){h(!1)}})]})},C=h.a.div(s||(s=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),L=t(13),M=t(12),G=t.n(M),P=(t(44),h.a.div(l||(l=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n"])))),R=function(){return Object(f.jsx)(P,{children:Object(f.jsx)(G.a,Object(L.a)({},{type:"ThreeDots",color:"#eb4034",height:100,width:100}))})},T="idle",U="error",q=function(){var n=Object(p.useState)(""),e=Object(x.a)(n,2),t=e[0],a=e[1],r=Object(p.useState)(T),o=Object(x.a)(r,2),c=o[0],i=o[1],s=Object(p.useState)(""),l=Object(x.a)(s,2),d=l[0],u=l[1],b="pending"===c,g=c===U;return Object(f.jsxs)(C,{children:[Object(f.jsx)(j,{onSubmit:function(n){a(n)}}),!g&&Object(f.jsx)(N,{query:t,statusChanging:function(n){i(n)},setErrorMessage:function(n){u(n)},currentStatus:c}),g&&Object(f.jsx)("div",{children:d}),b&&Object(f.jsx)(R,{})]})};b.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.eaa7b244.chunk.js.map