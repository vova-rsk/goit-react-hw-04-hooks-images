(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{19:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,s,l,p,d=t(0),u=t.n(d),b=t(10),x=t.n(b),h=(t(19),t(8)),g=t(5),m=t(3),f=t(4),j=f.a.header(a||(a=Object(m.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),O=t(1),w=function(n){var e=n.onSubmit,t=Object(d.useState)(""),a=Object(g.a)(t,2),r=a[0],o=a[1];return Object(O.jsx)(j,{className:"Searchbar",children:Object(O.jsxs)("form",{className:"SearchForm",onSubmit:function(n){n.preventDefault(),r.trim()?e(r.trim()):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430")},children:[Object(O.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(n){return o(n.target.value)},value:r})]})})},v=f.a.li(r||(r=Object(m.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),y=function(n){var e=n.src,t=n.alt,a=n.onClick;return Object(O.jsx)(v,{className:"ImageGalleryItem",children:Object(O.jsx)("img",{src:e,alt:t,className:"ImageGalleryItem-image",loading:"lazy",onClick:a})})},k=f.a.div(o||(o=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),S=function(n){var e=n.src,t=n.alt,a=n.closeModal;Object(d.useEffect)((function(){var n=function(n){"Escape"===n.code&&a()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[a]);return Object(O.jsx)(k,{className:"Overlay",onClick:function(n){n.currentTarget===n.target&&a()},children:Object(O.jsx)("div",{className:"Modal",children:Object(O.jsx)("img",{src:e,alt:t,width:"1024",height:"768"})})})},I=f.a.ul(i||(i=Object(m.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),z=function(n){var e=n.images,t=Object(d.useState)(null),a=Object(g.a)(t,2),r=a[0],o=a[1],i=null!==r;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{className:"ImageGallery",children:e.map((function(n,e){var t=n.webformatURL,a=n.tags;return Object(O.jsx)(y,{src:t,alt:a,onClick:function(){return o(e)}},e)}))}),i&&Object(O.jsx)(S,{src:e[r].largeImageURL,alt:e[r].tags,closeModal:function(){return o(null)}})]})},F=Object(d.memo)(z),N=f.a.div(c||(c=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),C=t(13),E=t(12),L=t.n(E),P=(t(44),f.a.div(s||(s=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n"])))),G=function(){return Object(O.jsx)(P,{children:Object(O.jsx)(L.a,Object(C.a)({},{type:"ThreeDots",color:"#eb4034",height:100,width:100}))})},M=f.a.button(l||(l=Object(m.a)(["\n  margin: 32px auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    background-color: #303f9f;\n  }\n"]))),R=function(n){var e=n.handleIncrementPage;return Object(O.jsx)(M,{type:"button",onClick:e,children:"Load more"})},T=f.a.div(p||(p=Object(m.a)(["\n  margin: 50px auto;\n  font-size: 20px;\n  font-weight: 700;\n  color: #b7b7b7;\n"]))),U=function(n){var e=n.children;return Object(O.jsx)(T,{children:e})},D={fetchImages:function(n,e){var t=new URLSearchParams({q:n,page:e,key:"22441039-e3c3a22ef42346706974d6393",image_type:"photo",orientation:"horizontal",per_page:12});return fetch("".concat("https://pixabay.com/api/","?").concat(t.toString())).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Oops, something went wrong!"))}))},isLastPageChecking:function(n,e){return 12*n>=e}},H=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},J="idle",W="pending",_="resolved",q="error",B=function(){var n=Object(d.useState)(""),e=Object(g.a)(n,2),t=e[0],a=e[1],r=Object(d.useState)(null),o=Object(g.a)(r,2),i=o[0],c=o[1],s=Object(d.useState)([]),l=Object(g.a)(s,2),p=l[0],u=l[1],b=Object(d.useState)(J),x=Object(g.a)(b,2),m=x[0],f=x[1],j=Object(d.useState)(""),v=Object(g.a)(j,2),y=v[0],k=v[1],S=Object(d.useState)(!1),I=Object(g.a)(S,2),z=I[0],C=I[1];Object(d.useEffect)((function(){t&&(c(1),u([]))}),[t]),Object(d.useEffect)((function(){i&&(C(!1),f(W),D.fetchImages(t,i).then((function(n){var e=n.hits,t=n.totalHits;u(1===i?Object(h.a)(e):function(n){return[].concat(Object(h.a)(n),Object(h.a)(e))}),C(!D.isLastPageChecking(i,t)),f(_)})).catch((function(n){k("Oops, Something Went Wrong"),f(q)})).finally((function(){H()})))}),[i,t]);var E=m===W,L=m===q;return Object(O.jsxs)(N,{children:[Object(O.jsx)(w,{onSubmit:function(n){return a(n)}}),!L&&Object(O.jsx)(F,{images:p}),L&&Object(O.jsx)(U,{children:y}),z&&Object(O.jsx)(R,{handleIncrementPage:function(){return c((function(n){return n+1}))}}),E&&Object(O.jsx)(G,{})]})};x.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.0868e6b3.chunk.js.map