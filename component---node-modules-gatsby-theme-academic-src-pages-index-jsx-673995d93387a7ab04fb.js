(self.webpackChunktc_imba_github_io=self.webpackChunktc_imba_github_io||[]).push([[148],{55169:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(4942),o=n(87462),l=n(29439),a=n(67294),i=n(75900),c=n.n(i),u=n(8613),f=n(15663),s=n(75349),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e){var t,n=e.prefixCls,l=e.className,i=e.checked,u=e.onChange,f=e.onClick,p=d(e,["prefixCls","className","checked","onChange","onClick"]),y=(0,a.useContext(s.E_).getPrefixCls)("tag",n),m=c()(y,(t={},(0,r.Z)(t,"".concat(y,"-checkable"),!0),(0,r.Z)(t,"".concat(y,"-checkable-checked"),i),t),l);return a.createElement("span",(0,o.Z)({},p,{className:m,onClick:function(e){null==u||u(!i),null==f||f(e)}}))},y=n(63949),m=n(43455),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},g=new RegExp("^(".concat(y.Y.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(y.E.join("|"),")$")),v=function(e,t){var n,i=e.prefixCls,d=e.className,p=e.style,y=e.children,v=e.icon,E=e.color,O=e.onClose,S=e.closeIcon,w=e.closable,j=void 0!==w&&w,C=b(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),x=a.useContext(s.E_),P=x.getPrefixCls,k=x.direction,_=a.useState(!0),Z=(0,l.Z)(_,2),T=Z[0],B=Z[1];a.useEffect((function(){"visible"in C&&B(C.visible)}),[C.visible]);var N=function(){return!!E&&(g.test(E)||h.test(E))},M=(0,o.Z)({backgroundColor:E&&!N()?E:void 0},p),A=N(),I=P("tag",i),R=c()(I,(n={},(0,r.Z)(n,"".concat(I,"-").concat(E),A),(0,r.Z)(n,"".concat(I,"-has-color"),E&&!A),(0,r.Z)(n,"".concat(I,"-hidden"),!T),(0,r.Z)(n,"".concat(I,"-rtl"),"rtl"===k),n),d),z=function(e){e.stopPropagation(),null==O||O(e),e.defaultPrevented||"visible"in C||B(!1)},D="onClick"in C||y&&"a"===y.type,F=(0,u.Z)(C,["visible"]),H=v||null,W=H?a.createElement(a.Fragment,null,H,a.createElement("span",null,y)):y,L=a.createElement("span",(0,o.Z)({},F,{ref:t,className:R,style:M}),W,j?S?a.createElement("span",{className:"".concat(I,"-close-icon"),onClick:z},S):a.createElement(f.Z,{className:"".concat(I,"-close-icon"),onClick:z}):null);return D?a.createElement(m.Z,null,L):L},E=a.forwardRef(v);E.displayName="Tag",E.CheckableTag=p;var O=E},33491:function(e,t,n){"use strict";n(95168)},695:function(e,t,n){"use strict";var r=n(74788);e.exports=function(e){return!r(e)}},34151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(67294)),o=a(n(45697)),l=a(n(88455));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var g=function(e){function t(){return d(this,t),y(this,m(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,o=e.children,a=e.lineColor,i=e.lineStyle,f=e.style,d=s(e,["orientation","children","lineColor","lineStyle","style"]),p=r.default.Children.map(o,(function(e){return r.default.cloneElement(e,{orientation:n})})),y=u({},"right"===n?l.default["containerBefore--right"]:l.default["containerBefore--left"]),m=u({},y,i);return m=a?u({},m,{background:a}):m,r.default.createElement("div",null,r.default.createElement("section",c({style:u({},l.default.container,f)},d),r.default.createElement("div",{style:u({},l.default.containerBefore,m)}),p,r.default.createElement("div",{style:l.default.containerAfter})))}}])&&p(n.prototype,o),a&&p(n,a),t}(r.Component);g.propTypes={children:o.default.node.isRequired,orientation:o.default.string,style:o.default.object,lineColor:o.default.string,lineStyle:o.default.object},g.defaultProps={style:{},lineStyle:{}};var h=g;t.default=h},23128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(67294)),o=a(n(45697)),l=a(n(88455));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var g=function(e){function t(){return d(this,t),y(this,m(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"mergeNotificationStyle",value:function(e){return e?f({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType}},{key:"iconStyle",value:function(e){return f({},l.default.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,o=e.icon,a=e.orientation,i=e.iconColor,s=e.style,d=u(e,["title","iconStyle","icon","orientation","iconColor","style"]),p=f({},"right"===a?l.default["event--right"]:l.default["event--left"]);return r.default.createElement("div",{style:f({},l.default.event,{marginBottom:50},s)},r.default.createElement("div",{style:this.mergeNotificationStyle(i)},r.default.createElement("span",{style:this.iconStyle(n)},o)),r.default.createElement("div",c({},d,{style:f({},l.default.blipStyle,p)}),r.default.createElement("div",null,t)),r.default.createElement("div",{style:l.default.eventAfter}))}}])&&p(n.prototype,o),a&&p(n,a),t}(r.Component);g.propTypes={title:o.default.node.isRequired,icon:o.default.node,iconColor:o.default.string,iconStyle:o.default.object,style:o.default.object,orientation:o.default.string},g.defaultProps={iconStyle:{},style:{}};var h=g;t.default=h},69088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(45697)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(67294)),l=a(n(88455));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?y(e):t}(this,d(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(y(y(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var r=e?u({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType,o=u({},"right"===n?l.default["eventType--right"]:l.default["eventType--left"]);return u({},r,o,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?l.default.cardBody:l.default.message;return e?u({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?l.default.time:u({},l.default.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=u({},l.default.eventContainer,e);return this.showAsCard()?u({},l.default.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,r=e.collapsible,o="card"===t?u({},l.default.cardTitle,n):{};return r?u({},l.default.toggleEnabled,o):o}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?o.default.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,o.default.createElement("div",{style:l.default.messageAfter})):o.default.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"…")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,r=e.subtitle,a=e.iconStyle,i=e.bubbleStyle,f=e.buttons,s=e.icon,d=e.iconColor,p=e.titleStyle,y=e.subtitleStyle,m=e.orientation,b=e.collapsible,g=e.onClick,h=e.onIconClick,v=e.className,E=u({},"right"===m?l.default["event--right"]:l.default["event--left"]),O=u({},"left"===m?l.default["actionButtons--right"]:l.default["actionButtons--left"]);return o.default.createElement("div",{style:u({},l.default.event,E)},o.default.createElement("div",{style:this.mergeNotificationStyle(d,i,m)},o.default.createElement("span",{style:u({},l.default.materialIcons,a),onClick:h},s)),o.default.createElement("div",c({style:this.containerStyle()},{onClick:g,className:v}),o.default.createElement("div",{style:l.default.eventContainerBefore}),o.default.createElement("div",{style:this.toggleStyle(),onClick:b&&this.toggleContent},t&&o.default.createElement("div",{style:this.timeStyle()},t),o.default.createElement("div",{style:p},n),r&&o.default.createElement("div",{style:u({},l.default.subtitle,y)},r),o.default.createElement("div",{style:u({},l.default.actionButtons,O)},f)),this.props.children&&this.renderChildren()),o.default.createElement("div",{style:l.default.eventAfter}))}}])&&s(n.prototype,r),a&&s(n,a),t}(o.Component);m.propTypes={title:r.default.node.isRequired,subtitle:r.default.node,createdAt:r.default.node,children:r.default.node,buttons:r.default.node,container:r.default.string,icon:r.default.node,iconColor:r.default.string,iconStyle:r.default.object,bubbleStyle:r.default.object,orientation:r.default.string,contentStyle:r.default.object,cardHeaderStyle:r.default.object,style:r.default.object,titleStyle:r.default.object,subtitleStyle:r.default.object,collapsible:r.default.bool,showContent:r.default.bool,className:r.default.string,onClick:r.default.func,onIconClick:r.default.func},m.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1,className:"",onClick:function(){},onIconClick:function(){}};var b=m;t.default=b},95708:function(e,t,n){"use strict";Object.defineProperty(t,"TY",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"BJ",{enumerable:!0,get:function(){return o.default}});var r=a(n(34151)),o=a(n(69088)),l=a(n(23128));function a(e){return e&&e.__esModule?e:{default:e}}},88455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:2,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",cursor:"pointer",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}};t.default=n},44047:function(e,t,n){"use strict";n(91415);var r=n(56452),o=(n(33491),n(55169)),l=n(67294),a=n(67162),i=n(16238),c=n.n(i);t.Z=function(e){var t=(0,a.$)(),n=e.tag,i=n.color||"",u=n.name||"",f=u?c().generateFullUrl(t,"/tags/"+u):"#";return l.createElement(r.Z,{xs:!0},l.createElement(o.Z,{color:i},l.createElement("a",{href:f},"#"+u)))}},24069:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});n(9655);var r=n(23148),o=(n(51558),n(97345)),l=(n(2712),n(16306)),a=(n(91415),n(56452)),i=(n(24399),n(53558)),c=n(75900),u=n.n(c),f=n(51496),s=n(695),d=n.n(s),p=n(67294),y=n(67162),m=n(16238),b=n.n(m),g=n(44047),h="researchCard-module--divider---v8Rc",v=function(e){var t=e.data.node,n=e.tagsMap,c=t.fields.slug.links,s=t.frontmatter,m=s.title,v=s.authors,E=s.excerpt,O=s.path,S=s.date,w=s.tags,j=s.venue,C=s.cover,x=C?C.childImageSharp.fluid:null,P=(0,y.$)(),k=b().resolvePageUrl(O),_=[];S&&(_=_.concat([p.createElement(a.Z,{xs:!0,key:"date"},p.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},b().formatDate(S))),p.createElement(l.Z,{key:"date-divider",type:"vertical",className:h})])),j&&(_=_.concat([p.createElement(a.Z,{xs:!0,key:"venue"},p.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},j)),p.createElement(l.Z,{key:"venue-divider",type:"vertical",className:h})])),w?_=_.concat(w.map((function(e){return n[e]?p.createElement(g.Z,{key:"tag-"+e,tag:n[e]}):null}))):_.length>0&&_.pop();var Z=b().parseMarkDown(b().trimExcerpt(E),!0);return p.createElement(o.Z,{className:u()("researchCard-module--researchCard--3tZIP","cursor-default"),bodyStyle:{padding:"0.8rem"},hoverable:!0},p.createElement(r.Z,{gutter:[8,0],align:"middle"},p.createElement(a.Z,{xs:24,sm:24,md:24,lg:12,xl:16},p.createElement(o.Z.Meta,{title:p.createElement("span",{className:"researchCard-module--title--3SK_y"},p.createElement("a",{href:b().generateFullUrl(P,k)},m)),style:{marginBottom:"4px"}}),p.createElement(r.Z,{align:"middle",gutter:[8,4]},v?v.map((function(e,t){var n=b().parseMarkDown(e,!0);return t>=0&&t!==v.length-1&&(n+=","),p.createElement(a.Z,{key:t,xs:!0},p.createElement("span",{dangerouslySetInnerHTML:{__html:n}}))})):null),p.createElement(r.Z,{align:"middle",gutter:[0,4]},_),p.createElement("a",{href:b().generateFullUrl(P,k)},p.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:Z}})),p.createElement(r.Z,{gutter:[8,8]},c?c.map((function(e){var t="#";return e.url&&(t=d()(e.url)?b().generateFullUrl(P,e.url):e.url),p.createElement(a.Z,{xs:!0},p.createElement(i.Z,{href:t,target:"_blank",size:"small"},e.name))})):null)),p.createElement(a.Z,{xs:24,sm:24,md:24,lg:12,xl:8},p.createElement("a",{href:b().generateFullUrl(P,k)},x?p.createElement(f.Z,{fluid:x}):p.createElement("div",{className:"researchCard-module--postCardImg--1gYGY"})))))}},27327:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});n(16304);var r=n(98838),o=n(67294),l=n(67162),a=n(16238),i=n.n(a),c=n(54144),u=function(){var e=(0,l.$)().introduction.join("\n\n"),t=i().parseMarkDown(e);return o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement(c.Z,{title:"About",description:e,path:"",keywords:["Rolwin","Reevan","Monteiro","FullStack developer","Javascript","ReactJS","NodeJS","Gatsby"]}),o.createElement("h1",{className:"titleSeparate"},"About Me"),o.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))},f=(n(9655),n(23148)),s=(n(91415),n(56452)),d=n(95708),p=n(65143),y="homePage-module--homepageSection--3y-ak",m=function(e){var t=o.createElement(f.Z,{justify:"space-between",align:"middle"},o.createElement(s.Z,{xs:24,sm:24,md:12,lg:15,style:{fontSize:"12pt",fontWeight:"500"}},e.title),o.createElement(s.Z,{xs:24,sm:24,md:12,lg:9,style:{fontSize:"12pt"}},e.date));return o.createElement(d.BJ,{title:t,style:{paddingBottom:"0.8rem",paddingTop:"0.8px"},icon:o.createElement(p.Z,{size:e.iconSize||"lg",fixedWidth:!0,icon:e.icon||"award"}),iconStyle:{cursor:"default"},iconColor:"#44566C"})},b=function(){var e=(0,l.$)();return o.createElement("div",{className:y},o.createElement("h2",{style:{marginBottom:"0rem"}},"Awards & Scholarships"),o.createElement(f.Z,null,o.createElement(s.Z,{xs:24,style:{marginBottom:"-0.5rem"}},o.createElement(d.TY,{lineStyle:{display:"none"},style:{width:"100%"}},e.awards.map(m)))))},g=(n(99396),n(49319)),h=function(e){return o.createElement(d.BJ,{title:e.title,titleStyle:{fontSize:"12pt",fontWeight:"bold"},subtitle:e.location,subtitleStyle:{fontSize:"13pt",fontWeight:"400"},createdAt:e.date,style:{fontSize:"12pt",fontWeight:"300"},icon:o.createElement(p.Z,{size:"md",fixedWidth:!0,icon:e.icon||"school"}),iconStyle:{cursor:"default"},iconColor:"#44566C"})},v=function(e){return o.createElement(g.ZP.Item,null,o.createElement(g.ZP.Item.Meta,{avatar:o.createElement(p.Z,{size:"lg",fixedWidth:!0,icon:e.icon}),title:e.title}))},E=function(){var e=(0,l.$)(),t=e.education.slice(0,e.education.length-1),n=e.education.slice(e.education.length-1);return o.createElement("div",{className:y},o.createElement(f.Z,null,o.createElement(s.Z,{xs:24,sm:24,md:12,lg:15,style:{marginBottom:"-2rem"}},o.createElement("h2",{style:{marginBottom:"0"}},"Education"),e.education.length>1?o.createElement(d.TY,{lineStyle:{top:"20px"},lineColor:"#44566C",style:{width:"100%"}},t.map(h)):null,e.education.length>0?o.createElement(d.TY,{lineStyle:{display:"none"},style:{top:"-30px",width:"100%"}},n.map(h)):null),o.createElement(s.Z,{xs:24,sm:24,md:12,lg:9},o.createElement("h2",{style:{marginBottom:"0.8rem"},className:"interests"},"Interests"),o.createElement(g.ZP,{itemLayout:"horizontal",split:!1},e.interests.map(v)))))},O=n(24350),S=n.n(O),w=n(66604),j=n.n(w),C=n(25444),x=n(24069),P=function(){var e=(0,C.useStaticQuery)("2494093640"),t=e.allTag?e.allTag.edges:[],n=j()(S()(t,(function(e){return e.node.name})),"node");return e.allMdx&&e.allMdx.edges&&e.allMdx.edges.length?o.createElement("div",{className:y},o.createElement("h2",{style:{marginBottom:"1rem"}},"Selected Research"),o.createElement(f.Z,{gutter:[20,20]},e.allMdx&&e.allMdx.edges.map((function(e,t){return o.createElement(s.Z,{key:t,xs:24,sm:24,md:24,lg:24},o.createElement(x.Z,{data:e,tagsMap:n}))})))):o.createElement(o.Fragment,null)},k=n(15332),_=n(9972),Z=n(55465),T=function(e){var t=e.data;return o.createElement(r.Z,{className:"outerPadding"},o.createElement(r.Z,{className:"container"},o.createElement(_.Z,null),o.createElement(Z.Z,null,o.createElement(u,null),o.createElement(E,null),o.createElement(b,null),o.createElement(P,{data:t}),o.createElement(k.Z,null))))}},44174:function(e){e.exports=function(e,t,n,r){for(var o=-1,l=null==e?0:e.length;++o<l;){var a=e[o];t(r,a,n(a),e)}return r}},81119:function(e,t,n){var r=n(89881);e.exports=function(e,t,n,o){return r(e,(function(e,r,l){t(o,e,n(e),l)})),o}},89465:function(e,t,n){var r=n(38777);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},55189:function(e,t,n){var r=n(44174),o=n(81119),l=n(67206),a=n(1469);e.exports=function(e,t){return function(n,i){var c=a(n)?r:o,u=t?t():{};return c(n,e,l(i,2),u)}}},38777:function(e,t,n){var r=n(10852),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=o},24350:function(e,t,n){var r=n(89465),o=n(55189)((function(e,t,n){r(e,n,t)}));e.exports=o},66604:function(e,t,n){var r=n(89465),o=n(47816),l=n(67206);e.exports=function(e,t){var n={};return t=l(t,3),o(e,(function(e,o,l){r(n,o,t(e,o,l))})),n}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-academic-src-pages-index-jsx-673995d93387a7ab04fb.js.map