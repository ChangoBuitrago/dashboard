(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a536e26"],{"0790":function(t,i,e){"use strict";e.d(i,"b",function(){return o}),e.d(i,"a",function(){return r}),e.d(i,"c",function(){return s});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])},n(t,i)};function o(t,i){function e(){this.constructor=t}n(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}function r(t,i,e,n){return new(e||(e=Promise))(function(o,r){function s(t){try{l(n.next(t))}catch(i){r(i)}}function a(t){try{l(n["throw"](t))}catch(i){r(i)}}function l(t){t.done?o(t.value):new e(function(i){i(t.value)}).then(s,a)}l((n=n.apply(t,i||[])).next())})}function s(t,i){var e,n,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(i){return l([t,i])}}function l(r){if(e)throw new TypeError("Generator is already executing.");while(s)try{if(e=1,n&&(o=2&r[0]?n["return"]:r[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;switch(n=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=i.call(t,s)}catch(a){r=[6,a],n=0}finally{e=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}},"26f2":function(t,i,e){"use strict";function n(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function o(t){return!!t.shadowRoot&&!!t.attachShadow}function r(t){var i=t.closest("ion-item");return i?i.querySelector("ion-label"):null}function s(t,i,e,n,r){if(t||o(i)){var s=i.querySelector("input.aux-input");s||((s=i.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),i.appendChild(s)),s.disabled=r,s.name=e,s.value=n||""}}function a(t,i,e){return Math.max(t,Math.min(i,e))}function l(t){return t.timeStamp||Date.now()}function c(t){if(t){var i=t.changedTouches;if(i&&i.length>0){var e=i[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function d(t,i){var e="rtl"===t.document.dir;switch(i){case"start":return e;case"end":return!e;default:throw new Error('"'+i+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function p(t,i){var e=t._original||t;return{_original:t,emit:u(e.emit.bind(e),i)}}function u(t,i){var e;return void 0===i&&(i=0),function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[t,i].concat(n))}}e.d(i,"a",function(){return n}),e.d(i,"b",function(){return l}),e.d(i,"c",function(){return o}),e.d(i,"d",function(){return r}),e.d(i,"e",function(){return s}),e.d(i,"f",function(){return p}),e.d(i,"g",function(){return d}),e.d(i,"h",function(){return a}),e.d(i,"i",function(){return u}),e.d(i,"j",function(){return c})},"5e5b":function(t,i,e){"use strict";e.r(i),e.d(i,"IonItemOption",function(){return l}),e.d(i,"IonItemOptions",function(){return c}),e.d(i,"IonItemSliding",function(){return u});var n,o=e("0790"),r=e("7018"),s=e("77a5"),a=e("26f2"),l=function(){function t(){this.disabled=!1,this.expandable=!1}return t.prototype.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()},t.prototype.hostData=function(){var t,i=this.disabled,e=this.expandable;return{class:Object.assign({},Object(s["c"])(this.color),(t={},t[""+this.mode]=!0,t["item-option-disabled"]=i,t["item-option-expandable"]=e,t["ion-activatable"]=!0,t))}},t.prototype.render=function(){return Object(r["b"])(void 0===this.href?"button":"a",{type:"button",class:"button-native",disabled:this.disabled,href:this.href},Object(r["b"])("span",{class:"button-inner"},Object(r["b"])("slot",{name:"top"}),Object(r["b"])("div",{class:"horizontal-wrapper"},Object(r["b"])("slot",{name:"start"}),Object(r["b"])("slot",{name:"icon-only"}),Object(r["b"])("slot",null),Object(r["b"])("slot",{name:"end"})),Object(r["b"])("slot",{name:"bottom"})),"md"===this.mode&&Object(r["b"])("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-item-option"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},expandable:{type:Boolean,attr:"expandable"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-item-option-ios-h{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}.in-list.item-options-end.sc-ion-item-option-ios-h:last-child{padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-list.item-options-end.sc-ion-item-option-ios-h:last-child{padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}.in-list.item-options-start.sc-ion-item-option-ios-h:first-child{padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-list.item-options-start.sc-ion-item-option-ios-h:first-child{padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}.ion-color.sc-ion-item-option-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native.sc-ion-item-option-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-item-option-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner.sc-ion-item-option-ios{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner.sc-ion-item-option-ios, .horizontal-wrapper.sc-ion-item-option-ios{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper.sc-ion-item-option-ios{-ms-flex-flow:row nowrap;flex-flow:row nowrap}.sc-ion-item-option-ios-s > *{-ms-flex-negative:0;flex-shrink:0}.sc-ion-item-option-ios-s > [slot=start]{margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-ios-s > [slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}.sc-ion-item-option-ios-s > [slot=end]{margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-ios-s > [slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}.sc-ion-item-option-ios-s > [slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-ios-s > [slot=icon-only]{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}.item-option-expandable.sc-ion-item-option-ios-h{-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}.item-option-disabled.sc-ion-item-option-ios-h{pointer-events:none}.item-option-disabled.sc-ion-item-option-ios-h   .button-native.sc-ion-item-option-ios{cursor:default;opacity:.5;pointer-events:none}.sc-ion-item-option-ios-h{font-size:16px}.activated.sc-ion-item-option-ios-h{background:var(--ion-color-primary-shade,#3171e0)}.ion-color.activated.sc-ion-item-option-ios-h{background:var(--ion-color-shade)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.side="end"}return t.prototype.fireSwipeEvent=function(){this.ionSwipe.emit({side:this.side})},t.prototype.hostData=function(){var t,i=Object(a["g"])(this.win,this.side);return{class:(t={},t[""+this.mode]=!0,t["item-options-"+this.mode]=!0,t["item-options-start"]=!i,t["item-options-end"]=i,t)}},Object.defineProperty(t,"is",{get:function(){return"ion-item-options"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},side:{type:String,attr:"side"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),d=30,p=.55,u=function(){function t(){this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return o["a"](this,void 0,void 0,function(){var t,i=this;return o["c"](this,function(n){switch(n.label){case 0:return this.item=this.el.querySelector("ion-item"),[4,this.updateOptions()];case 1:return n.sent(),t=this,[4,e.e("chunk-2d0e5588").then(e.bind(null,"93a9"))];case 2:return t.gesture=n.sent().createGesture({el:this.el,queue:this.queue,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(){return i.canStart()},onStart:function(){return i.onStart()},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,n===this.el&&(n=void 0)},t.prototype.getOpenAmount=function(){return Promise.resolve(this.openAmount)},t.prototype.getSlidingRatio=function(){return Promise.resolve(this.getSlidingRatioSync())},t.prototype.close=function(){return o["a"](this,void 0,void 0,function(){return o["c"](this,function(t){return this.setOpenAmount(0,!0),[2]})})},t.prototype.closeOpened=function(){return o["a"](this,void 0,void 0,function(){return o["c"](this,function(t){return void 0!==n?(n.close(),n=void 0,[2,!0]):[2,!1]})})},t.prototype.updateOptions=function(){return o["a"](this,void 0,void 0,function(){var t,i,e,n;return o["c"](this,function(o){switch(o.label){case 0:t=this.el.querySelectorAll("ion-item-options"),i=0,this.leftOptions=this.rightOptions=void 0,e=0,o.label=1;case 1:return e<t.length?[4,t.item(e).componentOnReady()]:[3,4];case 2:"start"===(n=o.sent()).side?(this.leftOptions=n,i|=1):(this.rightOptions=n,i|=2),o.label=3;case 3:return e++,[3,1];case 4:return this.optsDirty=!0,this.sides=i,[2]}})})},t.prototype.canStart=function(){return n&&n!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)},t.prototype.onStart=function(){n=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},t.prototype.onMove=function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+(e-i)*p:e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+(e-i)*p),this.setOpenAmount(e,!1)},t.prototype.onEnd=function(t){var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;m(this.openAmount>0==!(i<0),Math.abs(i)>.3,Math.abs(this.openAmount)<Math.abs(e/2))&&(e=0);var n=this.state;this.setOpenAmount(e,!0),0!=(32&n)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&n)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},t.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.offsetWidth),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.offsetWidth),this.optsDirty=!1},t.prototype.setOpenAmount=function(t,i){var e=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var o=this.item.style;if(this.openAmount=t,i&&(o.transition=""),t>0)this.state=t>=this.optsWidthRightSide+d?40:8;else{if(!(t<0))return this.tmr=setTimeout(function(){e.state=2,e.tmr=void 0},600),n=void 0,void(o.transform="");this.state=t<=-this.optsWidthLeftSide-d?80:16}o.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}},t.prototype.getSlidingRatioSync=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t["item-sliding-active-slide"]=2!==this.state,t["item-sliding-active-options-end"]=0!=(8&this.state),t["item-sliding-active-options-start"]=0!=(16&this.state),t["item-sliding-active-swipe-end"]=0!=(32&this.state),t["item-sliding-active-swipe-start"]=0!=(64&this.state),t)}},Object.defineProperty(t,"is",{get:function(){return"ion-item-sliding"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},closeOpened:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"},enumerable:!0,configurable:!0}),t}();function m(t,i,e){return!i&&e||t&&i}},"77a5":function(t,i,e){"use strict";e.d(i,"a",function(){return a}),e.d(i,"b",function(){return c}),e.d(i,"c",function(){return r}),e.d(i,"d",function(){return o});var n=e("0790");function o(t,i){return null!==i.closest(t)}function r(t){var i;return"string"==typeof t&&t.length>0?((i={"ion-color":!0})["ion-color-"+t]=!0,i):void 0}function s(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}function a(t){var i={};return s(t).forEach(function(t){return i[t]=!0}),i}var l=/^[a-z][a-z0-9+\-.]*:/;function c(t,i,e,o){return n["a"](this,void 0,void 0,function(){var r;return n["c"](this,function(n){switch(n.label){case 0:return null==i||"#"===i[0]||l.test(i)?[3,2]:(r=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return n.sent(),[2,r.push(i,o)];case 2:return[2,!1]}})})}}}]);