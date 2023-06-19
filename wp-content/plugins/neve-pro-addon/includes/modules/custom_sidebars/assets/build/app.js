(()=>{var e,t={591:(e,t,n)=>{"use strict";const o=window.wp.element,r=window.React;var a=n.n(r);const l=window.wp.components,i=window.wp.i18n,s=window.wp.apiFetch;var c=n.n(s);const u=window.wp.data,d=e=>{l.Snackbar&&(0,u.dispatch)("core/notices").createNotice("info",e,{isDismissible:!0,type:"snackbar"})},m=({closeModal:e})=>{const[t,n]=(0,o.useState)("");return a().createElement(a().Fragment,null,a().createElement(l.Modal,{title:(0,i.__)("Create new Custom Sidebar","neve"),onRequestClose:e},a().createElement("form",{style:{display:"flex",flexDirection:"column"},className:"nv-cw-form",onSubmit:e=>{e.preventDefault(),c()({path:"/wp/v2/neve_custom_layouts",method:"POST",data:{title:t.trim(),meta:{"cs-layout":!0},status:"publish"}}).then((()=>{d((0,i.__)("Sidebar was created.","neve")),location.reload()})).catch((e=>{d("Error: "+e.message)}))}},a().createElement("p",null,(0,i.__)('Enter a name for the new widget area and click the "Create" button.',"neve")+" ",a().createElement(l.ExternalLink,{href:"https://docs.themeisle.com/article/1770-custom-sidebars-module-documentation"},(0,i.__)("Learn More","neve"))),a().createElement(l.TextControl,{label:(0,i.__)("Name:","neve"),value:t,onChange:e=>n(e)}),a().createElement(l.Button,{style:{alignSelf:"flex-end"},isPrimary:!0,type:"submit",disabled:!t},(0,i.__)("Create","neve")))))},p=()=>{const[e,t]=(0,o.useState)(!1);return a().createElement(a().Fragment,null,a().createElement(l.Tooltip,{text:(0,i.__)("Add new Custom Sidebar","neve")},a().createElement(l.Button,{isSecondary:!0,showTooltip:!0,onClick:()=>t(!0)},a().createElement(l.Icon,{icon:"welcome-add-page",size:24}))),e&&a().createElement(m,{closeModal:()=>t(!1)}))},h="true"===window.neveCustomLayouts.renderDebug||!1,f=e=>(e+"").replace(/^([a-z])|\s+([a-z])/g,(function(e){return e.toUpperCase()})),v=(e,t=!1)=>Object.keys(e).map((n=>({value:n,label:t?f(n):e[n]}))),g=({forLabel:e=""})=>{const t=a().useRef(0);return a().createElement("span",null,a().createElement("b",null,"Renders for ",e,":")," ",t.current++)};var b=n(826),y=n.n(b),w=n(184),E=n.n(w);const S=window.wp.a11y;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}var I=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function x(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!((o=e[n])===(r=t[n])||I(o)&&I(r)))return!1;var o,r;return!0}const k=function(e,t){var n;void 0===t&&(t=x);var o,r=[],a=!1;return function(){for(var l=[],i=0;i<arguments.length;i++)l[i]=arguments[i];return a&&n===this&&t(l,r)||(o=e.apply(this,l),a=!0,n=this,r=l),o}};var R="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function A(e){cancelAnimationFrame(e.id)}var T=null;function M(e){if(void 0===e&&(e=!1),null===T||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var o=document.createElement("div"),r=o.style;return r.width="100px",r.height="100px",t.appendChild(o),document.body.appendChild(t),t.scrollLeft>0?T="positive-descending":(t.scrollLeft=1,T=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),T}return T}var L=function(e,t){return e};function N(e){var t,n=e.getItemOffset,o=e.getEstimatedTotalSize,a=e.getItemSize,l=e.getOffsetForIndexAndAlignment,i=e.getStartIndexForOffset,s=e.getStopIndexForStartIndex,c=e.initInstanceProps,u=e.shouldResetStyleCacheOnItemSizeChange,d=e.validateProps;return(t=function(e){function t(t){var o;return(o=e.call(this,t)||this)._instanceProps=c(o.props,O(o)),o._outerRef=void 0,o._resetIsScrollingTimeoutId=null,o.state={instance:O(o),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof o.props.initialScrollOffset?o.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},o._callOnItemsRendered=void 0,o._callOnItemsRendered=k((function(e,t,n,r){return o.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:n,visibleStopIndex:r})})),o._callOnScroll=void 0,o._callOnScroll=k((function(e,t,n){return o.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:n})})),o._getItemStyle=void 0,o._getItemStyle=function(e){var t,r=o.props,l=r.direction,i=r.itemSize,s=r.layout,c=o._getItemStyleCache(u&&i,u&&s,u&&l);if(c.hasOwnProperty(e))t=c[e];else{var d=n(o.props,e,o._instanceProps),m=a(o.props,e,o._instanceProps),p="horizontal"===l||"horizontal"===s,h="rtl"===l,f=p?d:0;c[e]=t={position:"absolute",left:h?void 0:f,right:h?f:void 0,top:p?0:d,height:p?"100%":m,width:p?m:"100%"}}return t},o._getItemStyleCache=void 0,o._getItemStyleCache=k((function(e,__,t){return{}})),o._onScrollHorizontal=function(e){var t=e.currentTarget,n=t.clientWidth,r=t.scrollLeft,a=t.scrollWidth;o.setState((function(e){if(e.scrollOffset===r)return null;var t=o.props.direction,l=r;if("rtl"===t)switch(M()){case"negative":l=-r;break;case"positive-descending":l=a-n-r}return l=Math.max(0,Math.min(l,a-n)),{isScrolling:!0,scrollDirection:e.scrollOffset<r?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),o._resetIsScrollingDebounced)},o._onScrollVertical=function(e){var t=e.currentTarget,n=t.clientHeight,r=t.scrollHeight,a=t.scrollTop;o.setState((function(e){if(e.scrollOffset===a)return null;var t=Math.max(0,Math.min(a,r-n));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),o._resetIsScrollingDebounced)},o._outerRefSetter=function(e){var t=o.props.outerRef;o._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},o._resetIsScrollingDebounced=function(){var e,t,n,r;null!==o._resetIsScrollingTimeoutId&&A(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=(e=o._resetIsScrolling,t=150,n=R(),r={id:requestAnimationFrame((function o(){R()-n>=t?e.call(null):r.id=requestAnimationFrame(o)}))})},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},(function(){o._getItemStyleCache(-1,null)}))},o}var m,p;p=e,(m=t).prototype=Object.create(p.prototype),m.prototype.constructor=m,C(m,p),t.getDerivedStateFromProps=function(e,t){return z(e,t),d(e),null};var h=t.prototype;return h.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},h.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(l(this.props,e,t,o,this._instanceProps))},h.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,o=e.layout;if("number"==typeof n&&null!=this._outerRef){var r=this._outerRef;"horizontal"===t||"horizontal"===o?r.scrollLeft=n:r.scrollTop=n}this._callPropsCallbacks()},h.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,o=this.state,r=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._outerRef){var a=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(M()){case"negative":a.scrollLeft=-r;break;case"positive-ascending":a.scrollLeft=r;break;default:var l=a.clientWidth,i=a.scrollWidth;a.scrollLeft=i-l-r}else a.scrollLeft=r;else a.scrollTop=r}this._callPropsCallbacks()},h.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&A(this._resetIsScrollingTimeoutId)},h.render=function(){var e=this.props,t=e.children,n=e.className,a=e.direction,l=e.height,i=e.innerRef,s=e.innerElementType,c=e.innerTagName,u=e.itemCount,d=e.itemData,m=e.itemKey,p=void 0===m?L:m,h=e.layout,f=e.outerElementType,v=e.outerTagName,g=e.style,b=e.useIsScrolling,y=e.width,w=this.state.isScrolling,E="horizontal"===a||"horizontal"===h,S=E?this._onScrollHorizontal:this._onScrollVertical,O=this._getRangeToRender(),C=O[0],I=O[1],x=[];if(u>0)for(var k=C;k<=I;k++)x.push((0,r.createElement)(t,{data:d,key:p(k,d),index:k,isScrolling:b?w:void 0,style:this._getItemStyle(k)}));var R=o(this.props,this._instanceProps);return(0,r.createElement)(f||v||"div",{className:n,onScroll:S,ref:this._outerRefSetter,style:_({position:"relative",height:l,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},g)},(0,r.createElement)(s||c||"div",{children:x,ref:i,style:{height:E?"100%":R,pointerEvents:w?"none":void 0,width:E?R:"100%"}}))},h._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],o=e[2],r=e[3];this._callOnItemsRendered(t,n,o,r)}if("function"==typeof this.props.onScroll){var a=this.state,l=a.scrollDirection,i=a.scrollOffset,s=a.scrollUpdateWasRequested;this._callOnScroll(l,i,s)}},h._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,o=this.state,r=o.isScrolling,a=o.scrollDirection,l=o.scrollOffset;if(0===t)return[0,0,0,0];var c=i(this.props,l,this._instanceProps),u=s(this.props,c,l,this._instanceProps),d=r&&"backward"!==a?1:Math.max(1,n),m=r&&"forward"!==a?1:Math.max(1,n);return[Math.max(0,c-d),Math.max(0,Math.min(t-1,u+m)),c,u]},t}(r.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var z=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},P=N({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,o){var r=e.direction,a=e.height,l=e.itemCount,i=e.itemSize,s=e.layout,c=e.width,u="horizontal"===r||"horizontal"===s?c:a,d=Math.max(0,l*i-u),m=Math.min(d,t*i),p=Math.max(0,t*i-u+i);switch("smart"===n&&(n=o>=p-u&&o<=m+u?"auto":"center"),n){case"start":return m;case"end":return p;case"center":var h=Math.round(p+(m-p)/2);return h<Math.ceil(u/2)?0:h>d+Math.floor(u/2)?d:h;default:return o>=p&&o<=m?o:o<p?p:m}},getStartIndexForOffset:function(e,t){var n=e.itemCount,o=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/o)))},getStopIndexForStartIndex:function(e,t,n){var o=e.direction,r=e.height,a=e.itemCount,l=e.itemSize,i=e.layout,s=e.width,c=t*l,u="horizontal"===o||"horizontal"===i?s:r,d=Math.ceil((u+n-c)/l);return Math.max(0,Math.min(a-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});const j=function({icon:e,size:t=24,...n}){return(0,o.cloneElement)(e,{width:t,height:t,...n})},D=window.wp.primitives,F=(0,o.createElement)(D.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(D.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),U=(0,o.createElement)(D.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(D.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),$=window.wp.compose,B=(0,l.withFocusOutside)(class extends r.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}}),G=({index:e,style:t,data:n})=>{var r;const{id:l,options:i,onChange:s,focusedItemIndex:c,query:u}=n,[d,m]=(0,o.useState)(!1);let p=i[e].label;if(i[e].isGroupLabel)return a().createElement("button",{id:`${l}_ls_${e}`,className:"components-form-token-field__suggestion",type:"button",style:{...t,background:"none",color:"#757575",border:"none",padding:"0 0 0 8px",textAlign:"left",cursor:"default"}},a().createElement("strong",null,p));u.length>3&&(p=p.replace(new RegExp(`(${u})`,"gi"),"<strong>$1</strong>"));const h=(null===(r=i[e])||void 0===r?void 0:r.isSubGroup)?24:8;return a().createElement("button",{id:`${l}_ls_${e}`,className:E()("components-form-token-field__suggestion",{"is-selected":d}),type:"button",style:{...t,background:e===c||d?"var(--wp-admin-theme-color)":"none",color:e===c||d?"#fff":"#757575",border:"none",padding:`0 0 0 ${h}px`,textAlign:"left",textOverflow:"ellipsis",overflowX:"hidden",whiteSpace:"nowrap"},onClick:()=>{s(i[e].value)},onFocus:()=>m(!0),onBlur:()=>m(!1),onMouseOver:()=>m(!0),onMouseOut:()=>m(!1),dangerouslySetInnerHTML:{__html:p}})},q=a().memo((({value:e,onChange:t,options:n,label:r="",messages:s={selected:(0,i.__)("Item selected.","neve")},queryOpt:c="",setQueryOpt:u,dynamicQuery:d=!1})=>{var m;const[p,h]=(0,o.useState)(!1),[f,v]=(0,o.useState)(!1),[g,b]=(0,o.useState)(d?c:""),[w,E]=(0,o.useState)(-1),_=n.find((t=>t.value===e)),[O,C]=(0,o.useState)(_||null),I=null!==(m=null==_?void 0:_.label)&&void 0!==m?m:"",x=a().createRef(),k=(0,$.useInstanceId)(q,"virtualized-combobox-control"),R=(e=1)=>{let t=w+e;return t<0?t=n.length-1:t>=n.length&&(t=0),t},A=(e=1)=>{var t;let o=R(e),r=e;for(;(null===(t=n[o])||void 0===t?void 0:t.isGroupLabel)&&(r=e<0?r-1:r+1,o=R(r),0!==o&&o!==n.length-1););C(n[o]),E(o),h(!0)};return a().createElement(B,{onFocusOutside:()=>{h(!1)}},a().createElement(l.BaseControl,{id:k,label:r},a().createElement("div",{className:"components-combobox-control__suggestions-container",tabIndex:-1,onKeyDown:e=>{let n=!1;if(!e.defaultPrevented){switch(e.code){case"Enter":O&&(t((o=O).value),(0,S.speak)(s.selected,"assertive"),C(o),b(""),h(!1),n=!0);break;case"ArrowUp":A(-1),n=!0;break;case"ArrowDown":A(1),n=!0;break;case"Escape":h(!1),C(null),n=!0}var o;n&&e.preventDefault()}},"aria-hidden":"true"},a().createElement(l.Flex,{gap:2,align:"center",justify:"space-between",style:{height:"100%"}},a().createElement(l.FlexItem,{style:{width:"100%"}},a().createElement("input",{type:"text",className:"components-combobox-control__input components-form-token-field__input",value:p?g:I,"aria-label":I?`${I}, ${r}`:void 0,placeholder:"Search...",onBlur:()=>{v(!1)},onFocus:()=>{v(!0),h(!0),b("")},onChange:e=>{d&&u&&u(e.target.value),b(e.target.value);const t=(()=>{const e=y()(g.toLocaleLowerCase());let t=0;for(let o=0;o<n.length;o++)if(-1!==y()(n[o].label).toLocaleLowerCase().indexOf(e)){t=o;break}return t})();f&&h(!0),x.current&&(x.current.scrollToItem(t,"center"),E(t),C(n[t]))}})),a().createElement(l.FlexItem,{style:{height:"20px"}},a().createElement("button",{type:"button",className:"components-select-control__input components-form-token-field__input",style:{border:"0",height:"20px",margin:"0",padding:"0"},onClick:()=>{h(!p)}},a().createElement(j,{size:18,icon:p?F:U})))),p&&a().createElement(P,{id:k,className:"components-form-token-field__suggestions-list",style:{padding:"0",position:"relative"},height:n.length>=5?120:24*n.length,itemCount:n.length,itemData:{options:n,focusedItemIndex:w,query:g,id:k,onChange:e=>{t(e),v(!1),h(!1),b("")}},itemSize:24,width:248,ref:x},G))))})),W=q,H=({value:e,onChange:t,options:n,label:o,disabled:r=!1})=>a().createElement("div",{className:"select-inline font-weight"},o&&a().createElement("span",{className:"customize-control-title"},o),a().createElement(l.SelectControl,{disabled:r,"aria-label":o,value:e,onChange:t},n.map(((e,t)=>{if(Array.isArray(e.value)){const n=e.id||`${e.label}-${t}`;return a().createElement("optgroup",{key:n,label:e.label,disabled:e.disabled},e.value.map(((e,t)=>{const n=e.id||`${e.label}-${e.value}-${t}`;return a().createElement("option",{key:n,value:e.value,disabled:e.disabled},e.label)})))}const n=e.id||`${e.label}-${e.value}-${t}`;return a().createElement("option",{key:n,value:e.value,disabled:e.disabled},e.label)})))),V=(0,o.createElement)(D.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(D.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),X=window.lodash,Y=window.wp.neve.components,J=({ruleset:e,isLast:t,isFirst:n,canAddMore:s,updateRoot:c,updateCondition:u,updateEnd:d,addRuleSet:m,removeRuleSet:p})=>{const{root:h,map:g,end:b}=window.neveCustomLayouts.sidebarOptions.conditions,{root:y,condition:w,end:E}=e,S=window.neveCustomLayouts.conditionMap[y]||window.neveCustomLayouts.conditionMap.default,_=v(S),O=(e,t=!1)=>{const n=Object.keys(e).map((n=>e[n].map((e=>{const{nicename:o,name:r,terms:a}=e;let l=a;if(!l||l.length<1)return!1;if("object"==typeof l&&(l=Object.values(l)),t)return{label:`${o} (${n} - ${r})`,value:r};const i=[];return i.push({label:`${o} (${n} - ${r})`,value:"",isGroupLabel:!0}),l.forEach((e=>{i.push({label:e.name,value:`${r}|${e.slug}`,isSubGroup:!0})})),i})).filter((e=>!1!==e))));return t?Object.values(n).flat():Object.values(n).flat().flat()},C=Object.keys(g).find((e=>g[e].includes(y))),I=b[C];let x=[];if(I){let e;switch(C){case"terms":e=O(I);break;case"taxonomies":e=O(I,!0);break;default:e=v(I)}x=[{value:"",label:(0,i.__)("Select","neve")},...e]}const[k,R]=(0,o.useState)(x),A=(T=h,Object.keys(T).map((e=>{const t=T[e].choices,n=Object.keys(t).map((e=>({label:t[e],value:e})));return{label:T[e].label?T[e].label:f(e),value:n}})));var T;const M=[{value:"",label:(0,i.__)("Select","neve")},...A],L=a().useCallback((e=>c(e)),[c]),N=a().useCallback((e=>u(e)),[u]),z=a().useCallback((e=>d(e)),[d]),[P,j]=(0,o.useState)(""),[D,F]=(0,o.useState)({}),U=window.neveCustomLayouts.ajaxOptions,$={headers:{Accept:"application/json","Content-Type":"application/json","x-wp-nonce":window.neveCustomLayouts.nonce},method:"GET"};(0,r.useEffect)((()=>{if(E&&["pages","posts"].includes(C)){$.method="GET";const e=new AbortController;try{fetch(`${U}/${E}`,{...$,signal:e.signal}).then((async e=>{const t=await e.json(),n=(0,Y.maybeParseJson)(t.data);return F({value:`${n.value}`,label:n.label,type:C}),0===Object.keys(x).filter((e=>x[e].value===E)).length&&(x=[...x,{value:`${n.value}`,label:n.label}]),R(x),t}))}catch(t){e.signal.aborted||console.error(t)}return()=>{e.abort()}}}),[]);const B=(0,r.useCallback)((0,X.debounce)(((e,t,n)=>{const o={...$,method:"POST",body:JSON.stringify({type:"pages"===t?"page":"post",query:e})};fetch(`${U}`,o).then((async e=>{const o=await e.json(),r=v(o.data);return x=[{value:"",label:(0,i.__)("Select","neve")},...r],0===Object.keys(x).filter((e=>x[e].value===E)).length&&t===n.type&&(x=[...x,{value:`${n.value}`,label:n.label}]),R(x),o}))}),250),[]);return(0,r.useEffect)((()=>{["pages","posts"].includes(C)?B(P,C,D):R(x)}),[D,C]),a().createElement(a().Fragment,null,a().createElement("div",{className:"rule-set"},a().createElement(H,{disabled:!1,label:"",value:y,onChange:L,options:M}),a().createElement(l.SelectControl,{disabled:!1,"aria-label":"",value:w,onChange:N,options:_}),I&&a().createElement(W,{options:k,value:E,onChange:z,dynamicQuery:["pages","posts"].includes(C),setQueryOpt:e=>{j(e),B(e,C,D)},queryOpt:P}),a().createElement(l.ButtonGroup,{className:"rule-actions"},!t&&a().createElement("span",{className:"chainer"},(0,i.__)("and","neve")),!(t&&n)&&a().createElement(l.Button,{label:(0,i.__)("Remove Rule","neve"),icon:"minus",iconSize:20,isSecondary:!0,isDestructive:!0,className:"remove-rule is-small",disabled:t&&n,onClick:p}),t&&a().createElement(l.Button,{label:(0,i.__)("Add Rule","neve"),icon:V,iconSize:20,isSecondary:!0,className:"add-rule is-small",disabled:!s,onClick:m}))))},Q=({magicTags:e})=>{const[t,n]=(0,o.useState)(!1);if(!(e&&e.length>0))return null;const r=e.length>6;e.sort(((e,t)=>e.length-t.length));const s=t?(0,i.__)("Show less","neve"):(0,i.__)("Show more","neve");return a().createElement("div",{className:"magic-tags"},a().createElement("div",{className:"heading"},a().createElement(l.Icon,{icon:"clipboard"}),a().createElement("h3",null,(0,i.__)("Available Magic Tags","neve"))),(e=>{if(!r)return e;const n=e.slice(0,6);return t?e:n})(e).map(((e,t)=>a().createElement(l.Button,{type:"button",className:"tag",key:t,"data-tag":e,isTertiary:!0,isSmall:!0,onClick:e=>{if(!(e.target instanceof HTMLButtonElement))return;const t=e.target.getAttribute("data-tag");t&&(e=>{const t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),window.wp.data.dispatch("core/notices").createNotice("info",window.neveCustomLayouts.strings.copiedToClipboard,{type:"snackbar",isDismissible:!0})})(t)}},e))),r&&a().createElement(a().Fragment,null,a().createElement("hr",null),a().createElement(l.Button,{className:"components-button is-link",onClick:()=>n(!t)},a().createElement("span",null,s))))},K=({group:e,isFirst:t,isLast:n,canAddMore:o,magicTags:r,onChange:s,addRuleSet:c,addRuleGroup:u,removeRuleSet:d,removeRuleGroup:m})=>{const p=(e,t,n)=>{s(e,t,n)};return e.length<1?null:a().createElement(a().Fragment,null,a().createElement("div",{className:"rule-group"},a().createElement(Q,{magicTags:r}),Object.values(e).map(((t,n)=>a().createElement(J,{key:n,ruleset:t,isLast:n===e.length-1,isFirst:0===n,canAddMore:e.length<5,updateRoot:e=>{p(e,"root",n)},updateCondition:e=>{p(e,"condition",n)},updateEnd:e=>{p(e,"end",n)},addRuleSet:()=>{c(n)},removeRuleSet:()=>{d(n)}}))),a().createElement("div",{className:"actions"},a().createElement(l.Button,{isSecondary:!0,isSmall:!0,disabled:!o,className:"add-group",onClick:u},(0,i.__)("Add Rule Group","neve")),!(n&&t)&&a().createElement(l.Button,{isLink:!0,isDestructive:!0,isSmall:!0,className:"remove-group",onClick:m},(0,i.__)("Remove Rule Group","neve")))),!n&&a().createElement("span",{className:"chainer"},(0,i.__)("or","neve")))},Z=e=>e&&"object"==typeof e&&!Array.isArray(e),ee=a().memo((({selectedRules:e,onChange:t,updateDb:n,description:r})=>{const l=e=>{const t=[];return Object.values(e).forEach((e=>{Array.isArray(e.end)?e.end.forEach((n=>{const o={root:e.root,condition:e.condition,end:n};t.push(o)})):t.push(e)})),t},s=()=>{let t=e;return(Array.isArray(e)&&0===e.length||!e)&&(t=[[{root:"",condition:"===",end:""}]]),Z(t)&&(t=Object.values(e).map(((e,t)=>Z(e)?Object.values(e):e))),(!Array.isArray(t[0])||0===t[0].length)&&(t=[[{root:"",condition:"===",end:""}]]),Object.values(t).map((e=>l(e)))},c=s(),u=e=>{if(!window.neveCustomLayouts.magicTags)return[];let t=[];for(const n in e){const o=e[n],r=o.root,a=o.condition,l=o.end;if("==="!==a)continue;if(""===r||""===l||"string"!=typeof r||"string"!=typeof l)continue;if(!window.neveCustomLayouts.magicTags.hasOwnProperty(r))continue;window.neveCustomLayouts.magicTags[r].hasOwnProperty("general")&&(t=t.concat(window.neveCustomLayouts.magicTags[r].general));const i=window.neveCustomLayouts.magicTags[r];i.hasOwnProperty(l)&&(t=t.concat(i[l]))}return t.filter(((e,n)=>t.indexOf(e)===n))},[d,m]=(0,o.useState)((()=>{const e=[];for(const t in s()){const n=c[t];e[t]=u(n)}return e}));return a().createElement(a().Fragment,null,a().createElement("div",{className:"neve-white-background-control"},h&&a().createElement(g,{forLabel:"cond"}),a().createElement("label",null,(0,i.__)("Conditional Logic","neve")),a().createElement("span",{style:{display:"block",marginTop:"8px",marginBottom:"8px",color:"#898A8B"}},r&&a().createElement("i",null,r)),c.map(((o,r)=>(o=l(o),a().createElement(K,{key:r,group:o,isFirst:0===r,isLast:r===c.length-1,canAddMore:c.length<5,magicTags:d[r],onChange:(o,a,l)=>{((o,r,a,l)=>{const i=[...c];i[l][a][r]=o,"root"!==r||e||(i[l][a].end=""),d[l]=u(i[l]),m(d),t(i),n(i)})(o,a,l,r)},addRuleSet:e=>{((e,o)=>{const r=[...c];r[o].splice(e+1,0,{root:"",condition:"===",end:""}),t(r),n(r)})(e,r)},addRuleGroup:()=>{(e=>{const o=[...c];o.splice(e+1,0,[{root:"",condition:"===",end:""}]),t(o),n(o)})(r)},removeRuleSet:e=>{((e,o)=>{const r=[...c];r[o].splice(e,1),t(r),n(r)})(e,r)},removeRuleGroup:()=>{(e=>{const o=[...c];o.splice(e,1),t(o),n(o)})(r)}}))))))})),te=({id:e,closeModal:t,data:n,isLoading:r})=>{const s=n[0].meta,[m,p]=(0,o.useState)((()=>{var e;return null!==(e=(0,Y.maybeParseJson)(s["custom-layout-conditional-logic"]))&&void 0!==e?e:[]})),{invalidateResolution:h}=(0,u.useDispatch)("core/data"),f=()=>{h("core","getEntityRecords",["postType","neve_custom_layouts",{include:e}])};return a().createElement(l.Modal,{title:(0,i.__)("Edit sidebar settings","neve"),onRequestClose:()=>{f(),t()}},a().createElement(ee,{description:(0,i.__)("If no conditional logic is selected, the Custom Sidebar will not be displayed anywhere.If two sidebars fulfill the conditions, only the first one created will be displayed.","neve"),selectedRules:m,onChange:p,updateDb:()=>null}),a().createElement("div",{className:"nv-row-wrap right"},a().createElement(l.Button,{isPrimary:!0,onClick:()=>{c()({path:`/wp/v2/neve_custom_layouts/${e}`,method:"POST",data:{meta:{"custom-layout-conditional-logic":JSON.stringify(m)}}}).then((()=>{f(),d((0,i.__)("Settings updated","neve"))})).catch((e=>{d("Error: "+e.message)}))},disabled:r},(0,i.__)("Save","neve"))))},ne=({id:e})=>{const[t,n]=(0,o.useState)(!1),[r,s]=(0,o.useState)(!1),m=()=>n(!t),p=()=>s(!r),h=(0,u.useSelect)((t=>t("core").getEntityRecords("postType","neve_custom_layouts",{include:e}))),f=(0,u.useSelect)((t=>t("core/data").isResolving("core","getEntityRecords",["postType","neve_custom_layouts",{include:e}])));return a().createElement(o.Fragment,null,a().createElement(l.Button,{className:"nv-delete-sidebar",onClick:m,style:{padding:3}},a().createElement(l.Icon,{icon:"trash",size:20})),t&&a().createElement(l.Modal,{title:(0,i.__)("Delete custom sidebar","neve"),onRequestClose:m},(0,i.__)("Are you sure you want to delete this custom sidebar?","neve"),a().createElement("div",{className:"nv-row-wrap right"},a().createElement(l.Button,{isSecondary:!0,onClick:m},(0,i.__)("No","neve")),a().createElement(l.Button,{isDestructive:!0,onClick:()=>{c()({path:"/wp/v2/neve_custom_layouts/"+e,method:"DELETE"}).then((()=>{d((0,i.__)("Sidebar was deleted","neve")),location.reload()})).catch((e=>{d("Error: "+e.message)}))}},(0,i.__)("Yes","neve")))),a().createElement(l.Button,{className:"nv-sidebar-settings",onClick:p,disabled:!(!f||!h),style:{padding:3}},a().createElement(l.Icon,{icon:"admin-settings",size:20})),r&&h&&a().createElement(te,{isLoading:f,data:h,closeModal:p,id:e}))},oe=window.wp.hooks,re=setInterval((()=>{const e=document.querySelector(".components-accessible-toolbar");if(null===e)return;const t=document.createElement("div");e.parentNode.insertBefore(t,e.nextSibling),(0,o.render)((0,o.createElement)(p,null),t),clearInterval(re)}),500),ae=(0,$.createHigherOrderComponent)((e=>t=>{if("core/widget-area"!==t.name)return(0,o.createElement)(e,t);if(-1===t.attributes.id.indexOf("nv-custom-sidebar"))return(0,o.createElement)(e,t);const n=t.attributes.id.replace("nv-custom-sidebar-","");return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(ne,{id:n}),(0,o.createElement)(e,t))}),"withSettings");(0,oe.addFilter)("editor.BlockEdit","neve",ae)},184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)o.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},n=Object.keys(t).join("|"),o=new RegExp(n,"g"),r=new RegExp(n,""),a=function(e){return e.replace(o,(function(e){return t[e]}))};e.exports=a,e.exports.has=function(e){return!!e.match(r)},e.exports.remove=a}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,611:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,l=n[0],i=n[1],s=n[2],c=0;if(l.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var u=s(o)}for(t&&t(n);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[l[c]]=0;return o.O(u)},n=self.webpackChunkneve_pro_addon=self.webpackChunkneve_pro_addon||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[611],(()=>o(591)));r=o.O(r)})();