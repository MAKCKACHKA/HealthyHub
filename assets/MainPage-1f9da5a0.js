import{s as h,j as o,r as $,g as et,a as tt,b as nt,R as ot,L as rt}from"./index-0bf8f875.js";import{C as at,A as it,D as lt}from"./index-183bc364.js";import{i as st}from"./icons-ea87fa96.js";const ct=h.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,ut=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;

  @media (min-width: 834px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 32px;
  }
`,we=h.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,Oe=h.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Ce=h.p`
  color: var(--primary-title-text-color);
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.11;
  margin: 0;

  span {
    color: var(--primary-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`,dt=h.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function pt(){return o.jsxs(dt,{children:[o.jsx(ct,{children:"Daily Goal"}),o.jsxs(ut,{children:[o.jsxs(we,{children:[o.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:o.jsx("use",{href:"/healthy_hub/src/assets/icons.svg#icon-bubble"})}),o.jsxs("div",{children:[o.jsx(Oe,{children:"Calories"}),o.jsx(Ce,{children:"1700"})]})]}),o.jsxs(we,{children:[o.jsx("svg",{style:{stroke:"var(--water-color)"},children:o.jsx("use",{href:"/healthy_hub/src/assets/icons.svg#icon-milk"})}),o.jsxs("div",{children:[o.jsx(Oe,{children:"Water"}),o.jsxs(Ce,{children:["1500 ",o.jsx("span",{children:"ml"})]})]})]})]})]})}var fe={exports:{}},W={},De={exports:{}},ft="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ht=ft,mt=ht;function Ne(){}function Fe(){}Fe.resetWarningCache=Ne;var vt=function(){function t(i,l,f,b,a,g){if(g!==mt){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Fe,resetWarningCache:Ne};return r.PropTypes=r,r};De.exports=vt();var Ae=De.exports,he={exports:{}},P={},me={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=x;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",i="contents",l=/input|select|textarea|button|object|iframe/;function f(d,m){return m.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function b(d){var m=d.offsetWidth<=0&&d.offsetHeight<=0;if(m&&!d.innerHTML)return!0;try{var y=window.getComputedStyle(d),S=y.getPropertyValue("display");return m?S!==i&&f(d,y):S===r}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var m=d,y=d.getRootNode&&d.getRootNode();m&&m!==document.body;){if(y&&m===y&&(m=y.host.parentNode),b(m))return!1;m=m.parentNode}return!0}function g(d,m){var y=d.nodeName.toLowerCase(),S=l.test(y)&&!d.disabled||y==="a"&&d.href||m;return S&&a(d)}function v(d){var m=d.getAttribute("tabindex");m===null&&(m=void 0);var y=isNaN(m);return(y||m>=0)&&g(d,!y)}function x(d){var m=[].slice.call(d.querySelectorAll("*"),0).reduce(function(y,S){return y.concat(S.shadowRoot?x(S.shadowRoot):[S])},[]);return m.filter(v)}t.exports=e.default})(me,me.exports);var ke=me.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=bt;P.log=wt;P.handleBlur=G;P.handleFocus=Y;P.markForFocusLater=Ot;P.returnFocus=Ct;P.popWithoutFocus=_t;P.setupScopedFocus=St;P.teardownScopedFocus=Et;var xt=ke,gt=yt(xt);function yt(t){return t&&t.__esModule?t:{default:t}}var I=[],H=null,ve=!1;function bt(){I=[]}function wt(){}function G(){ve=!0}function Y(){if(ve){if(ve=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var t=(0,gt.default)(H)[0]||H;t.focus()}},0)}}function Ot(){I.push(document.activeElement)}function Ct(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{I.length!==0&&(e=I.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function _t(){I.length>0&&I.pop()}function St(t){H=t,window.addEventListener?(window.addEventListener("blur",G,!1),document.addEventListener("focus",Y,!0)):(window.attachEvent("onBlur",G),document.attachEvent("onFocus",Y))}function Et(){H=null,window.addEventListener?(window.removeEventListener("blur",G),document.removeEventListener("focus",Y)):(window.detachEvent("onBlur",G),document.detachEvent("onFocus",Y))}var xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var r=ke,i=l(r);function l(a){return a&&a.__esModule?a:{default:a}}function f(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?f(a.activeElement.shadowRoot):a.activeElement}function b(a,g){var v=(0,i.default)(a);if(!v.length){g.preventDefault();return}var x=void 0,d=g.shiftKey,m=v[0],y=v[v.length-1],S=f();if(a===S){if(!d)return;x=y}if(y===S&&!d&&(x=m),m===S&&d&&(x=y),x){g.preventDefault(),x.focus();return}var D=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),z=D!=null&&D[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(z){var U=v.indexOf(S);if(U>-1&&(U+=d?-1:1),x=v[U],typeof x>"u"){g.preventDefault(),x=d?y:m,x.focus();return}g.preventDefault(),x.focus()}}t.exports=e.default})(xe,xe.exports);var jt=xe.exports,T={},Mt=function(){},Rt=Mt,R={},Le={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=r:window.ExecutionEnvironment=r})()})(Le);var Pt=Le.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Tt=Pt,Dt=Nt(Tt);function Nt(t){return t&&t.__esModule?t:{default:t}}var ie=Dt.default,Ft=ie.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=ie.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=ie.canUseDOM?window.NodeList:{};R.canUseDOM=ie.canUseDOM;R.default=Ft;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Ut;T.log=$t;T.assertNodeList=We;T.setElement=Ht;T.validateElement=ge;T.hide=It;T.show=qt;T.documentNotReadyOrSSRTesting=Bt;var At=Rt,kt=Wt(At),Lt=R;function Wt(t){return t&&t.__esModule?t:{default:t}}var j=null;function Ut(){j&&(j.removeAttribute?j.removeAttribute("aria-hidden"):j.length!=null?j.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(j).forEach(function(t){return t.removeAttribute("aria-hidden")})),j=null}function $t(){}function We(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Ht(t){var e=t;if(typeof e=="string"&&Lt.canUseDOM){var r=document.querySelectorAll(e);We(r,e),e=r}return j=e||j,j}function ge(t){var e=t||j;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,kt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function It(t){var e=!0,r=!1,i=void 0;try{for(var l=ge(t)[Symbol.iterator](),f;!(e=(f=l.next()).done);e=!0){var b=f.value;b.setAttribute("aria-hidden","true")}}catch(a){r=!0,i=a}finally{try{!e&&l.return&&l.return()}finally{if(r)throw i}}}function qt(t){var e=!0,r=!1,i=void 0;try{for(var l=ge(t)[Symbol.iterator](),f;!(e=(f=l.next()).done);e=!0){var b=f.value;b.removeAttribute("aria-hidden")}}catch(a){r=!0,i=a}finally{try{!e&&l.return&&l.return()}finally{if(r)throw i}}}function Bt(){j=null}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.resetState=zt;q.log=Kt;var K={},V={};function _e(t,e){t.classList.remove(e)}function zt(){var t=document.getElementsByTagName("html")[0];for(var e in K)_e(t,K[e]);var r=document.body;for(var i in V)_e(r,V[i]);K={},V={}}function Kt(){}var Vt=function(e,r){return e[r]||(e[r]=0),e[r]+=1,r},Gt=function(e,r){return e[r]&&(e[r]-=1),r},Yt=function(e,r,i){i.forEach(function(l){Vt(r,l),e.add(l)})},Jt=function(e,r,i){i.forEach(function(l){Gt(r,l),r[l]===0&&e.remove(l)})};q.add=function(e,r){return Yt(e.classList,e.nodeName.toLowerCase()=="html"?K:V,r.split(" "))};q.remove=function(e,r){return Jt(e.classList,e.nodeName.toLowerCase()=="html"?K:V,r.split(" "))};var B={};Object.defineProperty(B,"__esModule",{value:!0});B.log=Xt;B.resetState=Zt;function Qt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ue=function t(){var e=this;Qt(this,t),this.register=function(r){e.openInstances.indexOf(r)===-1&&(e.openInstances.push(r),e.emit("register"))},this.deregister=function(r){var i=e.openInstances.indexOf(r);i!==-1&&(e.openInstances.splice(i,1),e.emit("deregister"))},this.subscribe=function(r){e.subscribers.push(r)},this.emit=function(r){e.subscribers.forEach(function(i){return i(r,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},oe=new Ue;function Xt(){console.log("portalOpenInstances ----------"),console.log(oe.openInstances.length),oe.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Zt(){oe=new Ue}B.default=oe;var ye={};Object.defineProperty(ye,"__esModule",{value:!0});ye.resetState=on;ye.log=rn;var en=B,tn=nn(en);function nn(t){return t&&t.__esModule?t:{default:t}}var _=void 0,M=void 0,L=[];function on(){for(var t=[_,M],e=0;e<t.length;e++){var r=t[e];r&&r.parentNode&&r.parentNode.removeChild(r)}_=M=null,L=[]}function rn(){console.log("bodyTrap ----------"),console.log(L.length);for(var t=[_,M],e=0;e<t.length;e++){var r=t[e],i=r||{};console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function Se(){L.length!==0&&L[L.length-1].focusContent()}function an(t,e){!_&&!M&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Se),M=_.cloneNode(),M.addEventListener("focus",Se)),L=e,L.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(_.parentElement&&_.parentElement.removeChild(_),M.parentElement&&M.parentElement.removeChild(M))}tn.default.subscribe(an);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(p){for(var u=1;u<arguments.length;u++){var w=arguments[u];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(p[n]=w[n])}return p},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},l=function(){function p(u,w){for(var n=0;n<w.length;n++){var s=w[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,w,n){return w&&p(u.prototype,w),n&&p(u,n),u}}(),f=$,b=Ae,a=X(b),g=P,v=le(g),x=jt,d=X(x),m=T,y=le(m),S=q,D=le(S),z=R,U=X(z),ze=B,be=X(ze);function le(p){if(p&&p.__esModule)return p;var u={};if(p!=null)for(var w in p)Object.prototype.hasOwnProperty.call(p,w)&&(u[w]=p[w]);return u.default=p,u}function X(p){return p&&p.__esModule?p:{default:p}}function Ke(p,u){if(!(p instanceof u))throw new TypeError("Cannot call a class as a function")}function Ve(p,u){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:p}function Ge(p,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);p.prototype=Object.create(u&&u.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(p,u):p.__proto__=u)}var se={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ye=function(u){return u.code==="Tab"||u.keyCode===9},Je=function(u){return u.code==="Escape"||u.keyCode===27},Z=0,ce=function(p){Ge(u,p);function u(w){Ke(this,u);var n=Ve(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,w));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,C=s.appElement,E=s.ariaHideApp,O=s.htmlOpenClassName,F=s.bodyOpenClassName,A=s.parentSelector,ee=A&&A().ownerDocument||document;F&&D.remove(ee.body,F),O&&D.remove(ee.getElementsByTagName("html")[0],O),E&&Z>0&&(Z-=1,Z===0&&y.show(C)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),be.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){Ye(s)&&(0,d.default)(n.content,s),n.props.shouldCloseOnEsc&&Je(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,C){var E=(typeof C>"u"?"undefined":i(C))==="object"?C:{base:se[s],afterOpen:se[s]+"--after-open",beforeClose:se[s]+"--before-close"},O=E.base;return n.state.afterOpen&&(O=O+" "+E.afterOpen),n.state.beforeClose&&(O=O+" "+E.beforeClose),typeof C=="string"&&C?O+" "+C:O},n.attributesFromObject=function(s,C){return Object.keys(C).reduce(function(E,O){return E[s+"-"+O]=C[O],E},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,C=n.ariaHideApp,E=n.htmlOpenClassName,O=n.bodyOpenClassName,F=n.parentSelector,A=F&&F().ownerDocument||document;O&&D.add(A.body,O),E&&D.add(A.getElementsByTagName("html")[0],E),C&&(Z+=1,y.hide(s)),be.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,C=n.className,E=n.overlayClassName,O=n.defaultStyles,F=n.children,A=C?{}:O.content,ee=E?{}:O.overlay;if(this.shouldBeClosed())return null;var Qe={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:r({},ee,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Xe=r({id:s,ref:this.setContentRef,style:r({},A,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ze=this.props.contentElement(Xe,F);return this.props.overlayElement(Qe,Ze)}}]),u}(f.Component);ce.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ce.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(U.default),a.default.instanceOf(z.SafeHTMLCollection),a.default.instanceOf(z.SafeNodeList),a.default.arrayOf(a.default.instanceOf(U.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=ce,t.exports=e.default})(he,he.exports);var ln=he.exports;function $e(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function He(t){function e(r){var i=this.constructor.getDerivedStateFromProps(t,r);return i??null}this.setState(e.bind(this))}function Ie(t,e){try{var r=this.props,i=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,i)}finally{this.props=r,this.state=i}}$e.__suppressDeprecationWarning=!0;He.__suppressDeprecationWarning=!0;Ie.__suppressDeprecationWarning=!0;function sn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var r=null,i=null,l=null;if(typeof e.componentWillMount=="function"?r="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?i="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(i="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),r!==null||i!==null||l!==null){var f=t.displayName||t.name,b=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+f+" uses "+b+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=$e,e.componentWillReceiveProps=He),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ie;var a=e.componentDidUpdate;e.componentDidUpdate=function(v,x,d){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,v,x,m)}}return t}const cn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:sn},Symbol.toStringTag,{value:"Module"})),un=et(cn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var Ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},dn=function(){function t(e,r){for(var i=0;i<r.length;i++){var l=r[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),qe=$,re=J(qe),pn=tt,ae=J(pn),fn=Ae,c=J(fn),hn=ln,je=J(hn),mn=T,vn=gn(mn),N=R,Me=J(N),xn=un;function gn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function J(t){return t&&t.__esModule?t:{default:t}}function yn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Re(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function bn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var wn=W.portalClassName="ReactModalPortal",On=W.bodyOpenClassName="ReactModal__Body--open",k=N.canUseDOM&&ae.default.createPortal!==void 0,Pe=function(e){return document.createElement(e)},Te=function(){return k?ae.default.createPortal:ae.default.unstable_renderSubtreeIntoContainer};function te(t){return t()}var Q=function(t){bn(e,t);function e(){var r,i,l,f;yn(this,e);for(var b=arguments.length,a=Array(b),g=0;g<b;g++)a[g]=arguments[g];return f=(i=(l=Re(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(a))),l),l.removePortal=function(){!k&&ae.default.unmountComponentAtNode(l.node);var v=te(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var x=Te(),d=x(l,re.default.createElement(je.default,Ee({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(d)},i),Re(l,f)}return dn(e,[{key:"componentDidMount",value:function(){if(N.canUseDOM){k||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var i=te(this.props.parentSelector);i.appendChild(this.node),!k&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(i){var l=te(i.parentSelector),f=te(this.props.parentSelector);return{prevParent:l,nextParent:f}}},{key:"componentDidUpdate",value:function(i,l,f){if(N.canUseDOM){var b=this.props,a=b.isOpen,g=b.portalClassName;i.portalClassName!==g&&(this.node.className=g);var v=f.prevParent,x=f.nextParent;x!==v&&(v.removeChild(this.node),x.appendChild(this.node)),!(!i.isOpen&&!a)&&!k&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!N.canUseDOM||!this.node||!this.portal)){var i=this.portal.state,l=Date.now(),f=i.isOpen&&this.props.closeTimeoutMS&&(i.closesAt||l+this.props.closeTimeoutMS);f?(i.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,f-l)):this.removePortal()}}},{key:"render",value:function(){if(!N.canUseDOM||!k)return null;!this.node&&k&&(this.node=Pe("div"));var i=Te();return i(re.default.createElement(je.default,Ee({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(i){vn.setElement(i)}}]),e}(qe.Component);Q.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(Me.default),c.default.instanceOf(N.SafeHTMLCollection),c.default.instanceOf(N.SafeNodeList),c.default.arrayOf(c.default.instanceOf(Me.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};Q.defaultProps={isOpen:!1,portalClassName:wn,bodyOpenClassName:On,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,r){return re.default.createElement("div",e,r)},contentElement:function(e,r){return re.default.createElement("div",e,r)}};Q.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,xn.polyfill)(Q);W.default=Q;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=W,i=l(r);function l(f){return f&&f.__esModule?f:{default:f}}e.default=i.default,t.exports=e.default})(fe,fe.exports);var Cn=fe.exports;const Be=nt(Cn),_n=h.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Sn=h.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 40px;
  }
`,En=h.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background: var(--primary-btn-color);
  border: none;
  outline: none;
  padding: 8px 10px;
  width: 166px;
  font-weight: 500;

  svg {
    height: 16px;
    width: 16px;
    fill: #0f0f0f;
  }
`,jn=h.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Mn=h.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,Rn=h.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Pn=h.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Tn=h.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,Dn=h.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Nn=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Fn=h.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,An=h.form`
  label {
    display: flex;
    flex-direction: column;
    color: var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 32px;
  }

  input {
    margin-top: 12px;
    outline: none;
    background-color: transparent;
    border: 1px solid var(--primary-btn-color);
    border-radius: 12px;
    padding: 8px 10px;
    color: #fff;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    border-radius: 12px;
    background: var(--primary-btn-color);
    color: var(--secondary-text-color);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 16px;
  }
`,kn=h.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Ln=h.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Wn=h.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Un=h.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37; /* 137.5% */
  margin: 0;
  margin-bottom: 6px;
`,$n=({percentage:t})=>o.jsxs(Ln,{children:[o.jsxs(Un,{children:[t," %"]}),o.jsx(Wn,{$percentage:t})]}),Hn=$n,In={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Be.setAppElement("#root");function qn(){const[t,e]=$.useState(0),[r,i]=$.useState(1500),[l,f]=$.useState(0),[b,a]=ot.useState(!1);$.useEffect(()=>{t<=r&&f(Math.round(t*100/r))},[t,r]);function g(d){d.preventDefault();let m=d.target.children[0].children[0].value;f(l+Math.round(m*100/r)),e(t+Math.round(d.target.children[0].children[0].value)),x()}function v(){a(!0)}function x(){a(!1)}return o.jsxs(Tn,{children:[o.jsx(_n,{children:"Water"}),o.jsxs(Sn,{children:[o.jsx(Hn,{percentage:l}),o.jsxs(Pn,{children:[o.jsx(jn,{children:"Water consumption"}),o.jsxs(Nn,{children:[o.jsxs(Mn,{children:[t," ",o.jsx("span",{children:"ml"})]}),o.jsxs(Rn,{children:[o.jsx("span",{children:"left : "}),r-t>=0?r-t:0,"ml"]})]}),o.jsxs(En,{onClick:v,children:[o.jsx("svg",{stroke:"#0f0f0f",children:o.jsx("use",{href:"/healthy_hub/src/assets/icons.svg#icon-add"})}),"Add Water Intake"]})]})]}),o.jsx(Dn,{width:"20",height:"20",fill:"none",onClick:()=>e(0),children:o.jsx("use",{href:"/healthy_hub/src/assets/icons.svg#icon-trash"})}),o.jsxs(Be,{isOpen:b,onRequestClose:x,style:In,contentLabel:"Example Modal",children:[o.jsx(Fn,{children:"Add water Intake"}),o.jsxs(An,{onSubmit:g,children:[o.jsxs("label",{children:["How much water",o.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),o.jsx("button",{children:"Confirm"})]}),o.jsx(kn,{onClick:x,children:"Cancel"})]})]})}const Bn=h.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,zn=h.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 834px) {
    flex-direction: row;
    justify-content: start;
    gap: 40px;
    padding: 36px 40px;
  }
`,Kn=h.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Vn=h.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ue=h.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,de=h.p`
  margin: 0;
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  position: relative;
  right: 50px;
`,pe=h.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--primary-title-text-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  div > p {
    color: var(--primary-title-text-color);

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
    margin: 0;
  }

  div > p > span {
    color: var(--primary-text-color);

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
  }
`,Gn=h(lt)`
  width: ${t=>t.$widthpx}px;
  height: ${t=>t.$heightpx}px;
`;at.register(it);const Yn=t=>{const e={labels:["Filled","Empty"],datasets:[{data:[75,25],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},r={cutout:"80%",legend:{display:!1},hover:!1},i={id:"backgroundCircle",beforeDatasetsDraw(l,f,b){const{ctx:a}=l;a.save();const g=l.getDatasetMeta(0).data[0].x,v=l.getDatasetMeta(0).data[0].y,x=l.getDatasetMeta(0).data[0].innerRadius,d=l.getDatasetMeta(0).data[0].outerRadius,m=d-x,y=Math.PI/180;a.beginPath(),a.lineWidth=m,a.strokeStyle="#292928",a.arc(g,v,d-m/2,0,y*360,!1),a.stroke()}};return o.jsx(Gn,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:e,options:r,plugins:[i]})},ne=Yn,Jn=h.p`
  color: var(--primary-title-text-color);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.18;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50px;

  span {
    color: var(--primary-text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`,Qn=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,Xn=()=>o.jsxs(Qn,{children:[o.jsx(ne,{color:"#45FFBC",widthpx:168,heightpx:168}),o.jsxs(Jn,{children:["1360 ",o.jsx("span",{children:"calories"})]})]}),Zn=Xn;function eo(){return o.jsxs(Kn,{children:[o.jsx(Bn,{children:"Food"}),o.jsxs(zn,{children:[o.jsx(Zn,{}),o.jsxs(Vn,{children:[o.jsxs(ue,{children:[o.jsx(ne,{heightpx:48,widthpx:48,color:"#FFC4F7"}),o.jsx(de,{children:"80%"}),o.jsxs(pe,{children:[o.jsx("h3",{children:"Carbohidrates"}),o.jsxs("div",{children:[o.jsxs("p",{children:["Goal: ",o.jsx("span",{children:"170"})]}),o.jsxs("p",{children:["left: ",o.jsx("span",{children:"34"})]})]})]})]}),o.jsxs(ue,{children:[o.jsx(ne,{heightpx:48,widthpx:48,color:"#FFF3B7"}),o.jsx(de,{children:"80%"}),o.jsxs(pe,{children:[o.jsx("h3",{children:"Protein"}),o.jsxs("div",{children:[o.jsxs("p",{children:["Goal: ",o.jsx("span",{children:"127.5"})]}),o.jsxs("p",{children:["left: ",o.jsx("span",{children:"8"})]})]})]})]}),o.jsxs(ue,{children:[o.jsx(ne,{heightpx:48,widthpx:48,color:"#B6B6B6"}),o.jsx(de,{children:"80%"}),o.jsxs(pe,{children:[o.jsx("h3",{children:"Fat"}),o.jsxs("div",{children:[o.jsxs("p",{children:["Goal: ",o.jsx("span",{children:"56"})]}),o.jsxs("p",{children:["left: ",o.jsx("span",{children:"11,2"})]})]})]})]})]})]})]})}const to=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,no=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: var(--primary-title-text-color);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`,oo=h(rt)`
  color: var(--primary-text-color);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    height: 16px;
    width: 16px;
    fill: var(--primary-text-color);
  }
`;function ro(){return o.jsxs("div",{children:[o.jsxs(no,{children:[o.jsx("h2",{children:"Today"}),o.jsxs(oo,{to:"/dashboard",children:["On the way to the goal"," ",o.jsx("svg",{stroke:"grey",children:o.jsx("use",{href:"/healthy_hub/src/assets/icons.svg#icon-arrow-right"})})]})]}),o.jsxs(to,{children:[o.jsx(pt,{}),o.jsx(qn,{}),o.jsx(eo,{})]})]})}function ao(){return o.jsx(o.Fragment,{children:o.jsx("p",{children:"Diary"})})}const io=h.section`
  width: 320px;
  margin: 0 auto;

  p {
    color: var(--primary-title-text-color);
    font-size: 14px;
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 16px;
    height: 182px;
    overflow: hidden;
  }

  ul > li {
    display: block;
    width: 100%;
    height: 86px;
    padding: 20px 80px 20px 24px;
    background: var(--secondary-text-color);
    border-radius: 12px;
  }

  .description {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .description h4 {
    font-size: 18px;
    font-weight: 500;
  }

  .small_img_div {
    width: 46px;
    height: 46px;
  }

  .description section {
    width: 130px;
    height: 46px;
  }

  .description span {
    margin-left: 6px;
    color: #b6b6b6;
    font-weight: 500;
  }

  .href {
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    font-size: 14px;
    font-weight: 500px;
    color: #b6b6b6;
  }

  .svg {
    stroke: #b6b6b6;
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 834px) {
    width: calc(834px - (27px * 2));
    margin: 0 auto;

    h2 {
      font-size: 18px;
    }

    .wrapper {
      padding-left: 0px;
      padding-right: 0px;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      gap: 20px;
      width: 100%;
      max-width: 100%;
    }

    ul > li {
      width: 380px;
      height: 86px;
      padding: 20px 160px 20px 24px;
    }

    .href {
      font-size: 16px;
    }

    @media screen and (min-width: 1440px) {
      width: 676px;

      ul {
        width: 100%;
      }

      ul > li {
        width: 328px;
        padding: 20px 108px 20px 24px;
      }
    }
  }
`,lo=io;function so(){const t=[1,2,3,4],e={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:r,amount:i,img:l,calories:f}=e;return o.jsxs(lo,{children:[o.jsx("h2",{children:"Recommended Food"}),o.jsxs("div",{className:"wrapper",children:[o.jsx("ul",{children:t.map(b=>o.jsx("li",{children:o.jsxs("div",{className:"description",children:[o.jsx("div",{className:"small_img_div",children:o.jsx("img",{src:l,alt:"",width:46,height:46})}),o.jsxs("section",{children:[o.jsx("h4",{children:r}),o.jsxs("p",{children:[i,o.jsxs("span",{children:[f," calories"]})]})]})]})},b))}),o.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",o.jsx("svg",{className:"svg",children:o.jsx("use",{href:`${st}#icon-arrow-right`})})]})]})]})}function fo(){return o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"MainPage"}),o.jsx(ro,{}),o.jsx(ao,{}),o.jsx(so,{})]})}export{fo as default};
