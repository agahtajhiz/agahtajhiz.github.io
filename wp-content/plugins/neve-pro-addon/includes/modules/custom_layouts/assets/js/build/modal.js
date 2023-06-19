(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.React;var n=e.n(a);const o=window.wp.components,l=window.wp.i18n,A=window.wp.neve.components,s=({value:e,onChange:t,options:a,label:l,disabled:A=!1})=>n().createElement("div",{className:"select-inline font-weight"},l&&n().createElement("span",{className:"customize-control-title"},l),n().createElement(o.SelectControl,{disabled:A,"aria-label":l,value:e,onChange:t},a.map(((e,t)=>{if(Array.isArray(e.value)){const a=e.id||`${e.label}-${t}`;return n().createElement("optgroup",{key:a,label:e.label,disabled:e.disabled},e.value.map(((e,t)=>{const a=e.id||`${e.label}-${e.value}-${t}`;return n().createElement("option",{key:a,value:e.value,disabled:e.disabled},e.label)})))}const a=e.id||`${e.label}-${e.value}-${t}`;return n().createElement("option",{key:a,value:e.value,disabled:e.disabled},e.label)})))),c=(window.neveCustomLayouts.renderDebug,e=>(e+"").replace(/^([a-z])|\s+([a-z])/g,(function(e){return e.toUpperCase()}))),r=(e,t=!1)=>Object.keys(e).map((a=>({value:a,label:t?c(a):e[a]}))),i=({isOpenDefault:e=!1})=>{const[i,m]=(0,t.useState)(e),[u,d]=(0,t.useState)(!1),w=()=>m(!0),p=()=>m(!1),[v,b]=(0,t.useState)(""),[g,h]=(0,t.useState)(""),[D,y]=(0,t.useState)(""),[B,E]=(0,t.useState)(""),[k,C]=(0,t.useState)("");(0,a.useEffect)((()=>(document.addEventListener("nv-open-cl-modal",w),()=>document.removeEventListener("nv-open-cl-modal",w))),[]);const{templates:O,components:M,hooks:f}=window.neveCustomLayouts.customLayoutOptions,L=window.neveCustomLayouts.newLayoutUrl,S=new URL(L),[Y,P]=(0,t.useState)(S.toString()),R=r(O),H=r(M),N=((e,t=!1)=>Object.keys(e).map((a=>{const n=e[a];let o=n;const l=Object.keys(n);return(Array.isArray(n)||"object"==typeof n&&null!==n)&&(o=l.map(((e,a)=>{const o=n[e]||n[a];return{value:parseInt(e,10)===a?o:e,label:t?(l=o,l=l.replace(/_/g," ").replace("neve"," ").replace("nv"," ").replace("woocommerce"," "),c(l)):o};var l}))),{value:o,label:c(a)}})))(f,!0),U={hooks:{name:(0,l.__)("Hooks","neve"),image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJZSURBVHgB7dyxLgNhAMDxj0gsDMKCiURikhBWm4W9HsDiBUg8QRNPYOABdGfpZkQq6SSRMGGRdKil0+k1aV2btnfj13/+v0VOe9zl7+TrffluKmkLwpoOQjMwnIHhDAxnYDgDwxkYzsBwBoabKfKmu9pPUJyOdpbGvu4VDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRhuyscosXkFwxkYzsBwBoYzMFzuIxzOb546Xy9KW2Fhfrb3/crDR3h++3+0w/ryfDg93By6b1f6evq+rnT/9Od0LczNhovjrb59ypV6aDRbve2D7ZVwsLPa237/boar+9e+fS5P9vq2B491d2MxlPbXe9uN31Yo39bHHmu19hmqL19h3PkOHmtpf639u5ZGnu+wY03PJT2nUeebPdbBfYdKcpxdPyaKT9Euuf+is3/FikfRLt7ogHOQBWdgOAPDGRguN/DgZ0zFoWiX3MDZD92KR9EuhR5Gmt6R8k5WfHeyivBzMJyDLDgDwxkYLneQ5dPe45X3tPeUVzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhnC6E8wqGMzCcgeEMDGdgOAPDuQA8uAA8UXxcAA7nAnB1OMiCMzCcgeEMDOcC8AnlAnA4F4BnuABcWA6y4AwMZ2A4A8MZGM4J/+CEf6L4OOEP54S/OhxkwRkYzsBwBoZzwn9COeEP54R/hhP+wnKQBWdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwf9OjikkWpDX2AAAAAElFTkSuQmCC"},templates:{name:(0,l.__)("Templates","neve"),image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgB7d2xShxBHMfxMQSEoIXERlMpKFYHSmztbEx/PoCNLxDhnkDwCVLEB9A+aewsoxiwChG0SmwMFkrAytwc3DG7ubuZW2ZvZ39+PyBh4+3dDr/bce5/O7MTz20Gsl4ZSCNgcQQsjoDFEbA4AhZHwOIIWNxr3wP2Ds86/7aaDTMzPdn7/+PTG3N+ddfbXpybNrtbK3337bK/t4/rsvvb5+mamZo0re1GZp/940tz//DU295cnTeba+9629e3D+bT1x+ZfQ521jPb+WN9v/TWNDcWe9v3j09m/+hy6LGeXPwyJ99/m2HtzR9rc2Oh/VqzZlB7+x2rbYtt06D2usea37evZ4+Pn789Iz2huXi7aPsuRHpCc5mwKRvIYpAljoDFeQN2R4VIR2gu3oDt0B/pCc2FLlocAYsjYHHegG1ZD+kJzYVChzjvlw1lu7r9a362f2Jbnntjlto/w15j1MfUUeV/g8sIN/+8g15j1MfUUeWFjrLODvd5B73GqI9JSXAusb6WwnhF+7oQ9UbA4ghYHAGLo9AhjjNYHAGLI2Bx3oDzF68jDaG5cAaLC/o2yb5bmLqS3tSVILFqnhivaLVo+w5CekJzodAhjkGWOAIWR8DimLpSU9GmrjD5LE3RJp+h3ghYHFNXaoqpK+igixZHwOIIWByFjpqi0CGOQgc6CFicN2D3uiSkIzQXCh3i6KLFyS7CkpqqFnORXYQlNVW10xtw/qLy2Oq8RNEoYrczNBdvF+1eZV8G23Utv5CQYwrNhUGWOAIW5+2i3QlnZWAUXUxoLpUXOr5c3JmX4sParBm3yrtoRtHlolQpjkGWOG/Ax6fXBukJzcU7ij6/+pNZ7iA2RtHFhOZCLXpMkq1Fl41RdLkqL3RQiy6mNoUOlIuPSeK4omNMuKJDXLKjaLuEX5kYRRcTmou3i7brM7prJcbGKLqY0FwYZIkjYHFyo+i630wyNskrOqq4ciJVcrVozt4sSpXiGGSJq7zQgWJCc/EH7NyIAukIzYUuWhwBiyNgcd6PSXY9prIv28HoQnPhc7A4umhxBCzOG7B7U0ekIzSXgLlJNwbpCc2FLlocAYsjYHEUOmqKQgc66KLFEbA4b8Blr1WJYqKtVVn2arMoJtpqs9be4ZlpNRuZUZutpLjlMnsPgd2tlf/2c9nfu/casPu7FZmZqUnT2m5k9rH3B3JvIbO5Op+Zk2PfyfnGHuysZ7bzx2pv7OguYHL/+GT2jy6HHqu9Bsq9TKZfe/PH2txYaL/W7MD29jtW2xb37My3t9+xDsMoWhyDLHEELI6AxRGwOAIWR8DiCFgcAYsjYHEELO4fE2KALUHnQHMAAAAASUVORK5CYII="},components:{name:(0,l.__)("Components","neve"),image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALzSURBVHgB7d2xTlNRHIDxgzEhMTIQXdBJEowTiUZXNhYfoD6Aiy+ACU9A4hM44APYB3BhY0SiCZOxCUzKgmHAkDCVHpI2bVN6/0Pbe/rx/RI0VW65N1978+cUehfaHUlY95LQDAxnYDgDwxkYzsBwBoYzMNz9qk/4+OX7zd/bjfW0vLTY+/fm/kk6bJ31bq+uLKUPb1+M3LYr/3/+vK68fb6fruWHi2n73frANjvNo3R+cdW7vfnySdp89bR3+/j0In3+9mtgm0/v3wzcHt7X12uPUmNjtXf7/P9V2vl6NHZf9378SXs//6Zxxzu8r42NZ52v9Tjddryj9jUfSz6m2463f1+Htx2pXWFr96Ct8kS7LOQ/xj0A8qOp/5GsMkS7VAbWfHPIgjMwXGXg/qlQ5Yh2qQycR3+VJ9rFUzScgeEMDFcZOC+VqTzRLi50wHmKhjMwnIHhXOiYUxNb6HCpskwTW6rUfDMwXGVgf5qjTNEuLnTAeYqGMzCcgeEqAzf3j5PKE+1SGfiw9S+pPNEunqLhDAxnYDgXOuB8BsMZGM7AcIHvg8+SyhPtEljJOkkqT7RL5Xt0ZPm9NnyPjvLeoyPCb5PgHLLgDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8OFXk2aptbpZfrd+aB7vvIgrXU+Zq32Z/BdiJvVdZy1B67jUV2Huo7T14PhHLLgDAznFD0jTtFwTtFwTtGaCocsOAPDOUXPiFM0nFM0nFO0psIhC87AcE7RM+IUDecUDecUralwyIIzMBxuiq5rWi0Vboq+K1N5FG6K9tk7yCkaziELzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcOFrNmRV122IXAvB+5jcfQxf72GkdsDW7kFbZYk28RQNF3o1KV/mpf8SM6pftIkvF8J5ioYzMJyB4QwMFwrcf7FElSHaJBR4+Oqeql+0iadouPBvNkSuIew6cj33MY4LHXCeouEMDGdgOAPDGRjOwHAGhjMwnIHhrgGv/ZLFJDyWsQAAAABJRU5ErkJggg=="}},j=(0,l.__)("Create a custom layout","neve");return n().createElement(n().Fragment,null,i&&n().createElement(o.Modal,{title:j,overlayClassName:"nv-cl-modal-overlay",onRequestClose:p,shouldCloseOnEsc:!0,shouldCloseOnClickOutside:!0},n().createElement("div",{className:"nv-cl-modal-header"},n().createElement("h3",null,j),n().createElement(o.Button,{icon:"no-alt",iconSize:24,onClick:p})),n().createElement("div",{className:"nv-cl-modal-content"},n().createElement("div",{className:"nv-cl-radio-options"},n().createElement(A.RadioImage,{choices:U,onClick:e=>{b(e),"hooks"===e&&S.searchParams.set("layout","hooks")},value:v})),n().createElement("div",{className:"nv-cl-select-options"},("hooks"===v||""===v)&&n().createElement(s,{label:(0,l.__)("Select type","neve"),disabled:""===v||u,onChange:e=>{y(e),S.searchParams.set("layout","hooks"),S.searchParams.set("hook",e),P(S.toString())},value:D,options:N}),"templates"===v&&n().createElement(s,{label:(0,l.__)("Select type","neve"),disabled:u,onChange:e=>{E(e),S.searchParams.set("layout",e),S.searchParams.delete("hook"),P(S.toString())},value:B,options:R}),"components"===v&&n().createElement(s,{label:(0,l.__)("Select type","neve"),disabled:u,onChange:e=>{C(e),S.searchParams.set("layout",e),S.searchParams.delete("hook"),P(S.toString())},value:k,options:H}),n().createElement("span",{className:"customize-control-title"},(0,l.__)("Name (optional)","neve")),n().createElement("input",{className:"components-combobox-control__input components-form-token-field__input",value:g,disabled:u,onChange:e=>{const t=e.target.value;h(t);const a=new URL(Y);a.searchParams.set("title",t),P(a.toString())},placeholder:(0,l.__)("My awesome custom layout","neve")}))),n().createElement("div",{className:"nv-cl-modal-footer"},n().createElement(o.Button,{className:"nv-cl-button button-primary",onClick:()=>{d(!0),location.href=Y},disabled:u},(0,l.__)("Create custom layout","neve")),n().createElement(o.Button,{className:"nv-cl-button button-link",onClick:()=>{if(d(!0),g){const e=new URL(L);return e.searchParams.set("title",g),void(location.href=e.toString())}location.href=L},disabled:u},(0,l.__)("Start from blank","neve")))))};function m(){const e=new URL(window.location.href),a=!!e.searchParams.get("modal");e.searchParams.set("modal","true");const n=document.querySelector("a.page-title-action");n.setAttribute("href",e.toString()),n.addEventListener("click",(e=>{e.preventDefault(),document.dispatchEvent(new window.CustomEvent("nv-open-cl-modal",{detail:{}}))}));const o=document.querySelector("#wpbody-content .wrap"),l=document.createElement("div");l.setAttribute("id","nv-cl-modal"),o.append(l),(0,t.render)((0,t.createElement)(i,{isOpenDefault:a}),l)}"loading"!==document.readyState?m():document.addEventListener("DOMContentLoaded",(function(){m()}))})();