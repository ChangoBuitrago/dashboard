(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ae5baf8"],{"0790":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i});
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
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function a(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r["throw"](e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})}function i(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=2&a[0]?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}},"26f2":function(e,t,n){"use strict";function r(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function o(e){return!!e.shadowRoot&&!!e.attachShadow}function a(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null}function i(e,t,n,r,a){if(e||o(t)){var i=t.querySelector("input.aux-input");i||((i=t.ownerDocument.createElement("input")).type="hidden",i.classList.add("aux-input"),t.appendChild(i)),i.disabled=a,i.name=n,i.value=r||""}}function c(e,t,n){return Math.max(e,Math.min(t,n))}function s(e){return e.timeStamp||Date.now()}function l(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function h(e,t){var n="rtl"===e.document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function u(e,t){var n=e._original||e;return{_original:e,emit:b(n.emit.bind(n),t)}}function b(e,t){var n;return void 0===t&&(t=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,[e,t].concat(r))}}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return c}),n.d(t,"i",function(){return b}),n.d(t,"j",function(){return l})},"441f":function(e,t,n){"use strict";n.r(t),n.d(t,"IonSearchbar",function(){return c});var r=n("7018"),o=n("77a5"),a=n("59fc"),i=n("26f2"),c=function(){function e(){var e=this;this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.noAnimate=!0,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.searchIcon="search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value="",this.onClearInput=function(t){e.ionClear.emit(),t&&(t.preventDefault(),t.stopPropagation()),setTimeout(function(){""!==e.getValue()&&(e.value="",e.ionInput.emit())},64)},this.onCancelSearchbar=function(t){t&&(t.preventDefault(),t.stopPropagation()),e.ionCancel.emit(),e.onClearInput(),e.nativeInput&&e.nativeInput.blur()},this.onInput=function(t){var n=t.target;n&&(e.value=n.value),e.ionInput.emit(t)},this.onBlur=function(){e.focused=!1,e.ionBlur.emit(),e.positionElements()},this.onFocus=function(){e.focused=!0,e.ionFocus.emit(),e.positionElements()}}return e.prototype.debounceChanged=function(){this.ionChange=Object(i["f"])(this.ionChange,this.debounce)},e.prototype.valueChanged=function(){var e=this.nativeInput,t=this.getValue();e&&e.value!==t&&(e.value=t),this.ionChange.emit({value:t})},e.prototype.componentDidLoad=function(){var e=this;this.positionElements(),this.debounceChanged(),setTimeout(function(){e.noAnimate=!1},300)},e.prototype.setFocus=function(){this.nativeInput&&this.nativeInput.focus()},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.positionElements=function(){var e=this.getValue(),t=this.shouldAlignLeft,n=!this.animated||""!==e.trim()||!!this.focused;this.shouldAlignLeft=n,"ios"===this.mode&&(t!==n&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},e.prototype.positionPlaceholder=function(){var e=this.nativeInput;if(e){var t="rtl"===this.doc.dir,n=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),n.removeAttribute("style");else{var r=this.doc,o=r.createElement("span");o.innerHTML=Object(a["a"])(this.placeholder)||"",r.body.appendChild(o);var i=o.offsetWidth;o.remove();var c="calc(50% - "+i/2+"px)",s="calc(50% - "+(i/2+30)+"px)";t?(e.style.paddingRight=c,n.style.marginRight=s):(e.style.paddingLeft=c,n.style.marginLeft=s)}}},e.prototype.positionCancelButton=function(){var e="rtl"===this.doc.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),n=this.focused;if(t&&n!==this.isCancelVisible){var r=t.style;if(this.isCancelVisible=n,n)e?r.marginLeft="0":r.marginRight="0";else{var o=t.offsetWidth;o>0&&(e?r.marginLeft=-o+"px":r.marginRight=-o+"px")}}},e.prototype.getValue=function(){return this.value||""},e.prototype.hostData=function(){var e,t=this.animated&&this.config.getBoolean("animated",!0);return{class:Object.assign({},Object(o["c"])(this.color),(e={},e[""+this.mode]=!0,e["searchbar-animated"]=t,e["searchbar-no-animate"]=t&&this.noAnimate,e["searchbar-has-value"]=""!==this.getValue(),e["searchbar-left-aligned"]=this.shouldAlignLeft,e["searchbar-has-focus"]=this.focused,e))}},e.prototype.render=function(){var e=this,t=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),n=this.searchIcon,o=this.showCancelButton&&Object(r["b"])("button",{type:"button",tabIndex:"ios"!==this.mode||this.focused?void 0:-1,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},Object(r["b"])("div",null,"md"===this.mode?Object(r["b"])("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText));return[Object(r["b"])("div",{class:"searchbar-input-container"},Object(r["b"])("input",{ref:function(t){return e.nativeInput=t},class:"searchbar-input",onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===this.mode&&o,Object(r["b"])("ion-icon",{mode:this.mode,icon:n,lazy:!1,class:"searchbar-search-icon"}),Object(r["b"])("button",{type:"button","no-blur":!0,class:"searchbar-clear-button",onMouseDown:this.onClearInput,onTouchStart:this.onClearInput},Object(r["b"])("ion-icon",{mode:this.mode,icon:t,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===this.mode&&o]},Object.defineProperty(e,"is",{get:function(){return"ion-searchbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},config:{context:"config"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},getInputElement:{method:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},setFocus:{method:!0},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-clear, .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios > div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-color-step-600,#666);--cancel-button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-text-color,#000);--icon-color:var(--ion-color-step-600,#666);--background:rgba(var(--ion-text-color-rgb,0,0,0),0.07);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:8px;top:0;position:absolute;width:16px;height:100%;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl]   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{right:8px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;border-radius:10px;height:100%;font-size:14px;font-weight:400;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:50%;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl]   .sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover:hover){.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color), ion-toolbar.ion-color   .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color)   .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h:not(.ion-color)   .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color)   .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h:not(.ion-color)   .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color)   .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h:not(.ion-color)   .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}()},"59fc":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,c.forEach(function(e){for(var n=t.querySelectorAll(e),r=n.length-1;r>=0;r--){var i=n[r];i.parentNode?i.parentNode.removeChild(i):t.removeChild(i);for(var c=a(i),s=0;s<c.length;s++)o(c[s])}});for(var r=a(t),i=0;i<r.length;i++)o(r[i]);var s=document.createElement("div");s.appendChild(t);var l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},o=function(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var n=e.attributes[t],r=n.name;if(i.includes(r.toLowerCase())){var c=n.value;null!=c&&c.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}else e.removeAttribute(r)}var s=a(e);for(t=0;t<s.length;t++)o(s[t])}},a=function(e){return null!=e.children?e.children:e.childNodes},i=["class","id","href","src"],c=["script","style","iframe","meta","link","object","embed"]},"77a5":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return o});var r=n("0790");function o(e,t){return null!==t.closest(e)}function a(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0}function i(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}function c(e){var t={};return i(e).forEach(function(e){return t[e]=!0}),t}var s=/^[a-z][a-z0-9+\-.]*:/;function l(e,t,n,o){return r["a"](this,void 0,void 0,function(){var a;return r["c"](this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||s.test(t)?[3,2]:(a=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,a.componentOnReady()]):[3,2];case 1:return r.sent(),[2,a.push(t,o)];case 2:return[2,!1]}})})}}}]);