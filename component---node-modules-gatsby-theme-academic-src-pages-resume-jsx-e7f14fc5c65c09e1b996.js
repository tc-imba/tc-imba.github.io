(self.webpackChunktc_imba_github_io=self.webpackChunktc_imba_github_io||[]).push([[42],{1815:function(){},2787:function(){},3237:function(){},3855:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ae}});var r=t(7387),o=t(5035),a=t(5196),i=t(5300),s=t(6540),c=t(5556),u=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},l=u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u([],["onCopy","onCut","onPaste"],!0),["onCompositionEnd","onCompositionStart","onCompositionUpdate"],!0),["onFocus","onBlur"],!0),["onInput","onInvalid","onReset","onSubmit"],!0),["onLoad","onError"],!0),["onKeyDown","onKeyPress","onKeyUp"],!0),["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],!0),["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],!0),["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],!0),["onSelect"],!0),["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],!0),["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],!0),["onScroll"],!0),["onWheel"],!0),["onAnimationStart","onAnimationEnd","onAnimationIteration"],!0),["onTransitionEnd"],!0),["onChange"],!0),["onToggle"],!0);function f(e,n){var t={};return l.forEach((function(r){var o=e[r];o&&(t[r]=n?function(e){return o(e,n(r))}:o)})),t}function d(e){var n=!1;return{promise:new Promise((function(t,r){e.then((function(e){return!n&&t(e)})).catch((function(e){return!n&&r(e)}))})),cancel:function(){n=!0}}}function p(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=p(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var g=function(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=p(e))&&(r&&(r+=" "),r+=n);return r},m="Invariant failed";function h(e,n){if(!e)throw new Error(m)}var y=t(9771),E=Object.prototype.hasOwnProperty;function b(e,n,t){for(t of e.keys())if(v(t,n))return t}function v(e,n){var t,r,o;if(e===n)return!0;if(e&&n&&(t=e.constructor)===n.constructor){if(t===Date)return e.getTime()===n.getTime();if(t===RegExp)return e.toString()===n.toString();if(t===Array){if((r=e.length)===n.length)for(;r--&&v(e[r],n[r]););return-1===r}if(t===Set){if(e.size!==n.size)return!1;for(r of e){if((o=r)&&"object"==typeof o&&!(o=b(n,o)))return!1;if(!n.has(o))return!1}return!0}if(t===Map){if(e.size!==n.size)return!1;for(r of e){if((o=r[0])&&"object"==typeof o&&!(o=b(n,o)))return!1;if(!v(r[1],n.get(o)))return!1}return!0}if(t===ArrayBuffer)e=new Uint8Array(e),n=new Uint8Array(n);else if(t===DataView){if((r=e.byteLength)===n.byteLength)for(;r--&&e.getInt8(r)===n.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===n.byteLength)for(;r--&&e[r]===n[r];);return-1===r}if(!t||"object"==typeof e){for(t in r=0,e){if(E.call(e,t)&&++r&&!E.call(n,t))return!1;if(!(t in n)||!v(e[t],n[t]))return!1}return Object.keys(n).length===r}}return e!=e&&n!=n}var R=t(748);var S=R,w=(0,s.createContext)(null);function T({children:e,type:n}){return s.createElement("div",{className:`react-pdf__message react-pdf__message--${n}`},e)}class x{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(e){this.pdfDocument=e}setViewer(e){this.pdfViewer=e}setExternalLinkRel(e){this.externalLinkRel=e}setExternalLinkTarget(e){this.externalLinkTarget=e}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return h(this.pdfViewer),this.pdfViewer.currentPageNumber||0}set page(e){h(this.pdfViewer),this.pdfViewer.currentPageNumber=e}get rotation(){return 0}set rotation(e){}goToDestination(e){return new Promise((n=>{h(this.pdfDocument),h(e),"string"==typeof e?this.pdfDocument.getDestination(e).then(n):Array.isArray(e)?n(e):e.then(n)})).then((e=>{h(Array.isArray(e));const n=e[0];new Promise((e=>{h(this.pdfDocument),n instanceof Object?this.pdfDocument.getPageIndex(n).then((n=>{e(n)})).catch((()=>{h(!1)})):"number"==typeof n?e(n):h(!1)})).then((n=>{const t=n+1;h(this.pdfViewer),h(t>=1&&t<=this.pagesCount),this.pdfViewer.scrollPageIntoView({dest:e,pageIndex:n,pageNumber:t})}))}))}navigateTo(e){this.goToDestination(e)}goToPage(e){const n=e-1;h(this.pdfViewer),h(e>=1&&e<=this.pagesCount),this.pdfViewer.scrollPageIntoView({pageIndex:n,pageNumber:e})}addLinkAttributes(e,n,t){e.href=n,e.rel=this.externalLinkRel||"noopener noreferrer nofollow",e.target=t?"_blank":this.externalLinkTarget||""}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}setHash(){}executeNamedAction(){}cachePageRef(){}isPageVisible(){return!0}isPageCached(){return!0}executeSetOCGState(){}}var P={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};const O="undefined"!=typeof document,L=O&&"file:"===window.location.protocol;function A(e){return void 0!==e}function C(e){return A(e)&&null!==e}function k(e){return function(e){return"string"==typeof e}(e)&&/^data:/.test(e)}function D(e){h(k(e));const[n="",t=""]=e.split(",");return-1!==n.split(";").indexOf("base64")?atob(t):unescape(t)}function _(){return O&&window.devicePixelRatio||1}const N="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function j(){y(!L,`Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${N}`)}function M(e){e&&e.cancel&&e.cancel()}function I(e,n){return Object.defineProperty(e,"width",{get(){return this.view[2]*n},configurable:!0}),Object.defineProperty(e,"height",{get(){return this.view[3]*n},configurable:!0}),Object.defineProperty(e,"originalWidth",{get(){return this.view[2]},configurable:!0}),Object.defineProperty(e,"originalHeight",{get(){return this.view[3]},configurable:!0}),e}function F(e){return"RenderingCancelledException"===e.name}function V(e,n){switch(n.type){case"RESOLVE":return{value:n.value,error:void 0};case"REJECT":return{value:!1,error:n.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function $(){return(0,s.useReducer)(V,{value:void 0,error:void 0})}const{PDFDataRangeTransport:G}=S,B=(()=>{const e={};return l.forEach((n=>{e[n]=c.func})),e})(),U=c.oneOfType([c.instanceOf(Int8Array),c.instanceOf(Uint8Array),c.instanceOf(Uint8ClampedArray),c.instanceOf(Int16Array),c.instanceOf(Uint16Array),c.instanceOf(Int32Array),c.instanceOf(Uint32Array),c.instanceOf(Float32Array),c.instanceOf(Float64Array)]),q=[c.string,c.instanceOf(ArrayBuffer),c.shape({data:c.oneOfType([c.string,c.instanceOf(ArrayBuffer),c.arrayOf(c.number.isRequired),U]).isRequired}),c.shape({range:c.instanceOf(G).isRequired}),c.shape({url:c.string.isRequired})];"undefined"!=typeof Blob&&q.push(c.instanceOf(Blob));const H=c.oneOfType([c.string,c.arrayOf(c.string)]),W=c.oneOfType(q),z=(c.instanceOf(x),c.oneOf(["_self","_blank","_parent","_top"]),c.shape({commonObjs:c.shape({}).isRequired,getAnnotations:c.func.isRequired,getTextContent:c.func.isRequired,getViewport:c.func.isRequired,render:c.func.isRequired}),c.oneOfType([c.any,c.oneOf([!1])])),J=c.oneOfType([c.func,c.exact({current:c.any})]),K=c.oneOf(["canvas","custom","none","svg"]),Y=c.oneOf([0,90,180,270]);var X=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function s(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}c((r=r.apply(e,n||[])).next())}))},Q=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const{PDFDataRangeTransport:Z}=S,ee=(e,n)=>{switch(n){case P.NEED_PASSWORD:e(prompt("Enter the password to open this PDF file."));break;case P.INCORRECT_PASSWORD:e(prompt("Invalid password. Please try again."));break}};function ne(e){return"object"==typeof e&&null!==e&&("data"in e||"range"in e||"url"in e)}const te=(0,s.forwardRef)((function(e,n){var{children:t,className:r,error:o="Failed to load PDF file.",externalLinkRel:a,externalLinkTarget:i,file:c,inputRef:u,imageResourcesPath:l,loading:p="Loading PDF…",noData:m="No PDF file specified.",onItemClick:E,onLoadError:b,onLoadProgress:R,onLoadSuccess:P,onPassword:L=ee,onSourceError:A,onSourceSuccess:C,options:_,renderMode:N,rotate:I}=e,F=Q(e,["children","className","error","externalLinkRel","externalLinkTarget","file","inputRef","imageResourcesPath","loading","noData","onItemClick","onLoadError","onLoadProgress","onLoadSuccess","onPassword","onSourceError","onSourceSuccess","options","renderMode","rotate"]);const[V,G]=$(),{value:B,error:U}=V,[q,H]=$(),{value:W,error:z}=q,J=(0,s.useRef)(new x),K=(0,s.useRef)([]),Y=(0,s.useRef)(),te=(0,s.useRef)();(0,s.useEffect)((()=>{c&&c!==Y.current&&ne(c)&&(y(!v(c,Y.current),'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'),Y.current=c)}),[c]),(0,s.useEffect)((()=>{_&&_!==te.current&&(y(!v(_,te.current),'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'),te.current=_)}),[_]);const re=(0,s.useRef)({scrollPageIntoView:e=>{const{dest:n,pageNumber:t,pageIndex:r=t-1}=e;if(E)return void E({dest:n,pageIndex:r,pageNumber:t});const o=K.current[r];o?o.scrollIntoView():y(!1,`An internal link leading to page ${t} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`)}});(0,s.useImperativeHandle)(n,(()=>({linkService:J,pages:K,viewer:re})),[]),(0,s.useEffect)((function(){G({type:"RESET"})}),[c,G]);const oe=(0,s.useCallback)((()=>X(this,void 0,void 0,(function*(){if(!c)return null;if("string"==typeof c){if(k(c)){return{data:D(c)}}return j(),{url:c}}if(c instanceof Z)return{range:c};if(c instanceof ArrayBuffer)return{data:c};if(O&&function(e){return h(O),e instanceof Blob}(c)){const e=yield function(e){return new Promise(((n,t)=>{const r=new FileReader;r.onload=()=>{if(!r.result)return t(new Error("Error while reading a file."));n(r.result)},r.onerror=e=>{if(!e.target)return t(new Error("Error while reading a file."));const{error:n}=e.target;if(!n)return t(new Error("Error while reading a file."));switch(n.code){case n.NOT_FOUND_ERR:return t(new Error("Error while reading a file: File not found."));case n.SECURITY_ERR:return t(new Error("Error while reading a file: Security error."));case n.ABORT_ERR:return t(new Error("Error while reading a file: Aborted."));default:return t(new Error("Error while reading a file."))}},r.readAsArrayBuffer(e)}))}(c);return{data:e}}if(h("object"==typeof c),h(ne(c)),"url"in c&&"string"==typeof c.url){if(k(c.url)){const{url:e}=c,n=Q(c,["url"]),t=D(e);return Object.assign({data:t},n)}j()}return c}))),[c]);function ae(e,n){K.current[e]=n}function ie(e){delete K.current[e]}(0,s.useEffect)((()=>{const e=d(oe());return e.promise.then((e=>{G({type:"RESOLVE",value:e})})).catch((e=>{G({type:"REJECT",error:e})})),()=>{M(e)}}),[oe,G]),(0,s.useEffect)((()=>{void 0!==B&&(!1!==B?C&&C():U&&(y(!1,U.toString()),A&&A(U)))}),[B]),(0,s.useEffect)((function(){H({type:"RESET"})}),[H,B]),(0,s.useEffect)((function(){if(!B)return;const e=Object.assign(Object.assign({},_),{isEvalSupported:!1}),n=Object.assign(Object.assign({},B),e),t=S.getDocument(n);R&&(t.onProgress=R),L&&(t.onPassword=L);const r=t;return r.promise.then((e=>{H({type:"RESOLVE",value:e})})).catch((e=>{r.destroyed||H({type:"REJECT",error:e})})),()=>{r.destroy()}}),[_,H,B]),(0,s.useEffect)((()=>{void 0!==W&&(!1!==W?W&&(P&&P(W),K.current=new Array(W.numPages),J.current.setDocument(W)):z&&(y(!1,z.toString()),b&&b(z)))}),[W]),(0,s.useEffect)((function(){J.current.setViewer(re.current),J.current.setExternalLinkRel(a),J.current.setExternalLinkTarget(i)}),[a,i]);const se=(0,s.useMemo)((()=>({imageResourcesPath:l,linkService:J.current,onItemClick:E,pdf:W,registerPage:ae,renderMode:N,rotate:I,unregisterPage:ie})),[l,E,W,N,I]),ce=(0,s.useMemo)((()=>f(F,(()=>W))),[F,W]);return s.createElement("div",Object.assign({className:g("react-pdf__Document",r),ref:u,style:{"--scale-factor":"1"}},ce),c?null==W?s.createElement(T,{type:"loading"},"function"==typeof p?p():p):!1===W?s.createElement(T,{type:"error"},"function"==typeof o?o():o):s.createElement(w.Provider,{value:se},t):s.createElement(T,{type:"no-data"},"function"==typeof m?m():m))})),re=c.oneOfType([c.func,c.node]);te.propTypes=Object.assign(Object.assign({},B),{children:c.node,className:H,error:re,externalLinkRel:c.string,externalLinkTarget:c.oneOf(["_self","_blank","_parent","_top"]),file:W,imageResourcesPath:c.string,inputRef:J,loading:re,noData:re,onItemClick:c.func,onLoadError:c.func,onLoadProgress:c.func,onLoadSuccess:c.func,onPassword:c.func,onSourceError:c.func,onSourceSuccess:c.func,options:c.shape({canvasFactory:c.any,canvasMaxAreaInBytes:c.number,cMapPacked:c.bool,CMapReaderFactory:c.any,cMapUrl:c.string,disableAutoFetch:c.bool,disableFontFace:c.bool,disableRange:c.bool,disableStream:c.bool,docBaseUrl:c.string,enableXfa:c.bool,filterFactory:c.any,fontExtraProperties:c.bool,httpHeaders:c.object,isEvalSupported:c.bool,isOffscreenCanvasSupported:c.bool,length:c.number,maxImageSize:c.number,ownerDocument:c.any,password:c.string,pdfBug:c.bool,rangeChunkSize:c.number,StandardFontDataFactory:c.any,standardFontDataUrl:c.string,stopAtErrors:c.bool,useSystemFonts:c.bool,useWorkerFetch:c.bool,verbosity:c.number,withCredentials:c.bool,worker:c.any}),rotate:c.number});var oe=te;function ae(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.filter(Boolean);return t.length<=1?t[0]||null:function(e){t.forEach((function(n){"function"==typeof n?n(e):n&&(n.current=e)}))}}var ie=(0,s.createContext)(null);const se={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},ce=/^H(\d+)$/;function ue(e){return"children"in e}function le(e){return!!ue(e)&&(1===e.children.length&&0 in e.children&&"id"in e.children[0])}function fe(e){const n={};if(ue(e)){const{role:t}=e,r=t.match(ce);if(r)n.role="heading",n["aria-level"]=Number(r[1]);else if(function(e){return e in se}(t)){const e=se[t];e&&(n.role=e)}}return n}function de(e){const n={};if(ue(e)){if(void 0!==e.alt&&(n["aria-label"]=e.alt),void 0!==e.lang&&(n.lang=e.lang),le(e)){const[t]=e.children;if(t){const e=de(t);return Object.assign(Object.assign({},n),e)}}}else"id"in e&&(n["aria-owns"]=e.id);return n}function pe(e){return e?Object.assign(Object.assign({},fe(e)),de(e)):null}function ge({className:e,node:n}){const t=(0,s.useMemo)((()=>pe(n)),[n]),r=(0,s.useMemo)((()=>ue(n)?le(n)?null:n.children.map(((e,n)=>s.createElement(ge,{key:n,node:e}))):null),[n]);return s.createElement("span",Object.assign({className:e},t),r)}function me(){return(0,s.useContext)(ie)}function he(){const e=me();h(e);const{onGetStructTreeError:n,onGetStructTreeSuccess:t}=e,[r,o]=$(),{value:a,error:i}=r,{customTextRenderer:c,page:u}=e;return(0,s.useEffect)((function(){o({type:"RESET"})}),[o,u]),(0,s.useEffect)((function(){if(c)return;if(!u)return;const e=d(u.getStructTree()),n=e;return e.promise.then((e=>{o({type:"RESOLVE",value:e})})).catch((e=>{o({type:"REJECT",error:e})})),()=>M(n)}),[c,u,o]),(0,s.useEffect)((()=>{void 0!==a&&(!1!==a?a&&t&&t(a):i&&(y(!1,i.toString()),n&&n(i)))}),[a]),a?s.createElement(ge,{className:"react-pdf__Page__structTree structTree",node:a}):null}const ye=S.AnnotationMode;function Ee(e){const n=me();h(n);const t=Object.assign(Object.assign({},n),e),{_className:r,canvasBackground:o,devicePixelRatio:a=_(),onRenderError:i,onRenderSuccess:c,page:u,renderForms:l,renderTextLayer:f,rotate:d,scale:p}=t,{canvasRef:g}=e;h(u);const m=(0,s.useRef)(null);function E(e){F(e)||(y(!1,e.toString()),i&&i(e))}const b=(0,s.useMemo)((()=>u.getViewport({scale:p*a,rotation:d})),[a,u,d,p]),v=(0,s.useMemo)((()=>u.getViewport({scale:p,rotation:d})),[u,d,p]);(0,s.useEffect)((function(){if(!u)return;u.cleanup();const{current:e}=m;if(!e)return;e.width=b.width,e.height=b.height,e.style.width=`${Math.floor(v.width)}px`,e.style.height=`${Math.floor(v.height)}px`,e.style.visibility="hidden";const n={annotationMode:l?ye.ENABLE_FORMS:ye.ENABLE,canvasContext:e.getContext("2d",{alpha:!1}),viewport:b};o&&(n.background=o);const t=u.render(n),r=t;return t.promise.then((()=>{e.style.visibility="",u&&c&&c(I(u,p))})).catch(E),()=>M(r)}),[o,m,a,u,l,b,v]);const R=(0,s.useCallback)((()=>{const{current:e}=m;e&&(e.width=0,e.height=0)}),[m]);return(0,s.useEffect)((()=>R),[R]),s.createElement("canvas",{className:`${r}__canvas`,dir:"ltr",ref:ae(g,m),style:{display:"block",userSelect:"none"}},f?s.createElement(he,null):null)}function be(){const e=me();h(e);const{_className:n,onRenderSuccess:t,onRenderError:r,page:o,rotate:a,scale:i}=e;h(o);const[c,u]=$(),{value:l,error:f}=c;const p=(0,s.useMemo)((()=>o.getViewport({scale:i,rotation:a})),[o,a,i]);(0,s.useEffect)((function(){u({type:"RESET"})}),[o,u,p]),(0,s.useEffect)((function(){if(!o)return;const e=d(o.getOperatorList());return e.promise.then((e=>{new S.SVGGraphics(o.commonObjs,o.objs).getSVG(e,p).then((e=>{if(!(e instanceof SVGElement))throw new Error("getSVG returned unexpected result.");u({type:"RESOLVE",value:e})})).catch((e=>{u({type:"REJECT",error:e})}))})).catch((e=>{u({type:"REJECT",error:e})})),()=>M(e)}),[o,u,p]),(0,s.useEffect)((()=>{void 0!==l&&(!1!==l?o&&t&&t(I(o,i)):f&&(F(f)||(y(!1,f.toString()),r&&r(f))))}),[l]);const{width:g,height:m}=p;return s.createElement("div",{className:`${n}__svg`,ref:e=>function(e){if(!e||!l)return;e.firstElementChild||e.appendChild(l);const{width:n,height:t}=p;l.setAttribute("width",`${n}`),l.setAttribute("height",`${t}`)}(e),style:{display:"block",backgroundColor:"white",overflow:"hidden",width:g,height:m,userSelect:"none"}})}function ve(){const e=me();h(e);const{customTextRenderer:n,onGetTextError:t,onGetTextSuccess:r,onRenderTextLayerError:o,onRenderTextLayerSuccess:a,page:i,pageIndex:c,pageNumber:u,rotate:l,scale:f}=e;h(i);const[p,m]=$(),{value:E,error:b}=p,v=(0,s.useRef)(null),R=(0,s.useRef)();y(1===parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10),"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer"),(0,s.useEffect)((function(){m({type:"RESET"})}),[i,m]),(0,s.useEffect)((function(){if(!i)return;const e=d(i.getTextContent()),n=e;return e.promise.then((e=>{m({type:"RESOLVE",value:e})})).catch((e=>{m({type:"REJECT",error:e})})),()=>M(n)}),[i,m]),(0,s.useEffect)((()=>{void 0!==E&&(!1!==E?E&&r&&r(E):b&&(y(!1,b.toString()),t&&t(b)))}),[E]);const w=(0,s.useCallback)((()=>{a&&a()}),[a]),T=(0,s.useCallback)((e=>{y(!1,e.toString()),o&&o(e)}),[o]);const x=(0,s.useMemo)((()=>i.getViewport({scale:f,rotation:l})),[i,l,f]);return(0,s.useLayoutEffect)((function(){if(!i||!E)return;const{current:e}=v;if(!e)return;e.innerHTML="";const t=i.streamTextContent({includeMarkedContent:!0}),r={container:e,textContentSource:t,viewport:x},o=S.renderTextLayer(r),a=o;return o.promise.then((()=>{const t=document.createElement("div");t.className="endOfContent",e.append(t),R.current=t;const r=e.querySelectorAll('[role="presentation"]');if(n){let e=0;E.items.forEach(((t,o)=>{if(!function(e){return"str"in e}(t))return;const a=r[e];if(!a)return;const i=n(Object.assign({pageIndex:c,pageNumber:u,itemIndex:o},t));a.innerHTML=i,e+=t.str&&t.hasEOL?2:1}))}w()})).catch(T),()=>M(a)}),[n,T,w,i,c,u,E,x]),s.createElement("div",{className:g("react-pdf__Page__textContent","textLayer"),onMouseUp:function(){const e=R.current;e&&e.classList.remove("active")},onMouseDown:function(){const e=R.current;e&&e.classList.add("active")},ref:v})}function Re(){return(0,s.useContext)(w)}function Se(){const e=Re(),n=me();h(n);const t=Object.assign(Object.assign({},e),n),{imageResourcesPath:r,linkService:o,onGetAnnotationsError:a,onGetAnnotationsSuccess:i,onRenderAnnotationLayerError:c,onRenderAnnotationLayerSuccess:u,page:l,pdf:f,renderForms:p,rotate:m,scale:E=1}=t;h(f),h(l),h(o);const[b,v]=$(),{value:R,error:w}=b,T=(0,s.useRef)(null);y(1===parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10),"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations"),(0,s.useEffect)((function(){v({type:"RESET"})}),[v,l]),(0,s.useEffect)((function(){if(!l)return;const e=d(l.getAnnotations()),n=e;return e.promise.then((e=>{v({type:"RESOLVE",value:e})})).catch((e=>{v({type:"REJECT",error:e})})),()=>{M(n)}}),[v,l,p]),(0,s.useEffect)((()=>{void 0!==R&&(!1!==R?R&&i&&i(R):w&&(y(!1,w.toString()),a&&a(w)))}),[R]);const x=(0,s.useMemo)((()=>l.getViewport({scale:E,rotation:m})),[l,m,E]);return(0,s.useEffect)((function(){if(!(f&&l&&o&&R))return;const{current:e}=T;if(!e)return;const n=x.clone({dontFlip:!0}),t={accessibilityManager:null,annotationCanvasMap:null,div:e,l10n:null,page:l,viewport:n},a={annotations:R,annotationStorage:f.annotationStorage,div:e,downloadManager:null,imageResourcesPath:r,linkService:o,page:l,renderForms:p,viewport:n};e.innerHTML="";try{new S.AnnotationLayer(t).render(a),u&&u()}catch(i){!function(e){y(!1,`${e}`),c&&c(e)}(i)}return()=>{}}),[R,r,o,l,p,x]),s.createElement("div",{className:g("react-pdf__Page__annotations","annotationLayer"),ref:T})}var we=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const Te=1,xe=function(e){const n=Re(),t=Object.assign(Object.assign({},n),e),{_className:r="react-pdf__Page",_enableRegisterUnregisterPage:o=!0,canvasBackground:a,canvasRef:i,children:c,className:u,customRenderer:l,customTextRenderer:p,devicePixelRatio:m,error:E="Failed to load the page.",height:b,inputRef:v,loading:R="Loading page…",noData:S="No page specified.",onGetAnnotationsError:w,onGetAnnotationsSuccess:x,onGetStructTreeError:P,onGetStructTreeSuccess:O,onGetTextError:L,onGetTextSuccess:A,onLoadError:k,onLoadSuccess:D,onRenderAnnotationLayerError:_,onRenderAnnotationLayerSuccess:N,onRenderError:j,onRenderSuccess:F,onRenderTextLayerError:V,onRenderTextLayerSuccess:G,pageIndex:B,pageNumber:U,pdf:q,registerPage:H,renderAnnotationLayer:W=!0,renderForms:z=!1,renderMode:J="canvas",renderTextLayer:K=!0,rotate:Y,scale:X=Te,unregisterPage:Q,width:Z}=t,ee=we(t,["_className","_enableRegisterUnregisterPage","canvasBackground","canvasRef","children","className","customRenderer","customTextRenderer","devicePixelRatio","error","height","inputRef","loading","noData","onGetAnnotationsError","onGetAnnotationsSuccess","onGetStructTreeError","onGetStructTreeSuccess","onGetTextError","onGetTextSuccess","onLoadError","onLoadSuccess","onRenderAnnotationLayerError","onRenderAnnotationLayerSuccess","onRenderError","onRenderSuccess","onRenderTextLayerError","onRenderTextLayerSuccess","pageIndex","pageNumber","pdf","registerPage","renderAnnotationLayer","renderForms","renderMode","renderTextLayer","rotate","scale","unregisterPage","width"]),[ne,te]=$(),{value:re,error:oe}=ne,se=(0,s.useRef)(null);h(q);const ce=C(U)?U-1:null!=B?B:null,ue=null!=U?U:C(B)?B+1:null,le=null!=Y?Y:re?re.rotate:null,fe=(0,s.useMemo)((()=>{if(!re)return null;let e=1;const n=null!=X?X:Te;if(Z||b){const n=re.getViewport({scale:1,rotation:le});Z?e=Z/n.width:b&&(e=b/n.height)}return n*e}),[b,re,le,X,Z]);(0,s.useEffect)((function(){return()=>{C(ce)&&o&&Q&&Q(ce)}}),[o,q,ce,Q]),(0,s.useEffect)((function(){te({type:"RESET"})}),[te,q,ce]),(0,s.useEffect)((function(){if(!q||!ue)return;const e=d(q.getPage(ue)),n=e;return e.promise.then((e=>{te({type:"RESOLVE",value:e})})).catch((e=>{te({type:"REJECT",error:e})})),()=>M(n)}),[te,q,ce,ue,H]),(0,s.useEffect)((()=>{void 0!==re&&(!1!==re?function(){if(D){if(!re||!fe)return;D(I(re,fe))}if(o&&H){if(!C(ce)||!se.current)return;H(ce,se.current)}}():oe&&(y(!1,oe.toString()),k&&k(oe)))}),[re,fe]);const de=(0,s.useMemo)((()=>re&&C(ce)&&ue&&C(le)&&C(fe)?{_className:r,canvasBackground:a,customTextRenderer:p,devicePixelRatio:m,onGetAnnotationsError:w,onGetAnnotationsSuccess:x,onGetStructTreeError:P,onGetStructTreeSuccess:O,onGetTextError:L,onGetTextSuccess:A,onRenderAnnotationLayerError:_,onRenderAnnotationLayerSuccess:N,onRenderError:j,onRenderSuccess:F,onRenderTextLayerError:V,onRenderTextLayerSuccess:G,page:re,pageIndex:ce,pageNumber:ue,renderForms:z,renderTextLayer:K,rotate:le,scale:fe}:null),[r,a,p,m,w,x,P,O,L,A,_,N,j,F,V,G,re,ce,ue,z,K,le,fe]),pe=(0,s.useMemo)((()=>f(ee,(()=>re?fe?I(re,fe):void 0:re))),[ee,re,fe]),ge=`${ce}@${fe}/${le}`,me=`${ce}/${le}`;function he(){return s.createElement(ie.Provider,{value:de},function(){switch(J){case"custom":return h(l),s.createElement(l,{key:`${ge}_custom`});case"none":return null;case"svg":return s.createElement(be,{key:`${me}_svg`});default:return s.createElement(Ee,{key:`${ge}_canvas`,canvasRef:i})}}(),K?s.createElement(ve,{key:`${ge}_text`}):null,W?s.createElement(Se,{key:`${ge}_annotations`}):null,c)}return s.createElement("div",Object.assign({className:g(r,u),"data-page-number":ue,ref:ae(v,se),style:{"--scale-factor":`${fe}`,backgroundColor:a||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"}},pe),ue?null===q||null==re?s.createElement(T,{type:"loading"},"function"==typeof R?R():R):!1===q||!1===re?s.createElement(T,{type:"error"},"function"==typeof E?E():E):he():s.createElement(T,{type:"no-data"},"function"==typeof S?S():S))},Pe=c.oneOfType([c.func,c.node]);xe.propTypes=Object.assign(Object.assign({},B),{canvasBackground:c.string,canvasRef:J,children:c.node,className:H,customRenderer:c.func,customTextRenderer:c.func,devicePixelRatio:c.number,error:Pe,height:c.number,imageResourcesPath:c.string,inputRef:J,loading:Pe,noData:Pe,onGetTextError:c.func,onGetTextSuccess:c.func,onLoadError:c.func,onLoadSuccess:c.func,onRenderError:c.func,onRenderSuccess:c.func,onRenderTextLayerError:c.func,onRenderTextLayerSuccess:c.func,pageIndex:function(e,n,t){const{[n]:r,pageNumber:o,pdf:a}=e;if(!A(a))return null;if(A(r)){if("number"!=typeof r)return new Error(`\`${n}\` of type \`${typeof r}\` supplied to \`${t}\`, expected \`number\`.`);if(r<0)return new Error(`Expected \`${n}\` to be greater or equal to 0.`);const{numPages:e}=a;if(r+1>e)return new Error(`Expected \`${n}\` to be less or equal to ${e-1}.`)}else if(!A(o))return new Error(`\`${n}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${t}\`.`);return null},pageNumber:function(e,n,t){const{[n]:r,pageIndex:o,pdf:a}=e;if(!A(a))return null;if(A(r)){if("number"!=typeof r)return new Error(`\`${n}\` of type \`${typeof r}\` supplied to \`${t}\`, expected \`number\`.`);if(r<1)return new Error(`Expected \`${n}\` to be greater or equal to 1.`);const{numPages:e}=a;if(r>e)return new Error(`Expected \`${n}\` to be less or equal to ${e}.`)}else if(!A(o))return new Error(`\`${n}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${t}\`.`);return null},pdf:z,renderAnnotationLayer:c.bool,renderForms:c.bool,renderMode:K,renderTextLayer:c.bool,rotate:Y,scale:c.number,width:c.number});var Oe=xe,Le=t(2394);let Ae=function(e){function n(){var n;return(n=e.call(this)||this).state={numPages:null,pageNumber:1},n.onDocumentLoadSuccess=n.onDocumentLoadSuccess.bind(n),n}(0,r.A)(n,e);var t=n.prototype;return t.onDocumentLoadSuccess=function(e){let{numPages:n}=e;this.setState({numPages:n})},t.render=function(){const{pageNumber:e,numPages:n}=this.state;return s.createElement("div",null,s.createElement(Le.A,{title:"Resume",description:"My resume consists of my biodata of experience. You can hire me if you feel I'm good for any position in your organization. I'm open to various challenges that come in the way of building various web applications.",path:"resume"}),s.createElement(oe,{file:"../resume.pdf",onLoadSuccess:this.onDocumentLoadSuccess},s.createElement(Oe,{pageNumber:e})),s.createElement(o.A,{justify:"center",style:{background:"lightslategray"},type:"flex"},s.createElement(a.A,{span:2},s.createElement("p",null,`Page ${e} of ${n}`)),s.createElement(a.A,{span:2},s.createElement(i.A,{type:"primary",onClick:()=>(1===e?this.setState({pageNumber:2}):this.setState({pageNumber:1}),1)},1===e?"Next Page":"Previous Page"))))},n}(s.Component)},6671:function(){},7492:function(){},7640:function(){},9771:function(e){"use strict";var n=function(){};e.exports=n}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-academic-src-pages-resume-jsx-e7f14fc5c65c09e1b996.js.map