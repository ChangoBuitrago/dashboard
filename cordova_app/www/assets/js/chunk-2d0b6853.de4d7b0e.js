(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6853"],{"1e09":function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return o});var i=n("26f2");function o(t,e){var n,o,v,l,p=10*-f,L=0,b=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap;function w(t){p=Object(i["b"])(t),g(t)}function h(){clearTimeout(l),l=void 0,o&&(k(!1),o=void 0)}function E(t){o||void 0!==n&&null!==n.parentElement||(n=void 0,j(a(t),t))}function g(t){j(void 0,t)}function j(t,e){if(!t||t!==o){clearTimeout(l),l=void 0;var n=Object(i["j"])(e),a=n.x,c=n.y;if(o){if(m.has(o))throw new Error("internal error");o.classList.contains(s)||T(o,a,c),k(!0)}if(t){var u=m.get(t);u&&(clearTimeout(u),m.delete(t));var f=r(t)?0:d;t.classList.remove(s),l=setTimeout(function(){T(t,a,c),l=void 0},f)}o=t}}function T(t,e,n){L=Date.now(),t.classList.add(s);var i=b&&c(t);i&&i.addRipple&&(v=i.addRipple(e,n))}function k(t){void 0!==v&&v.then(function(t){return t()});var e=o;if(e){var n=u-Date.now()+L;if(t&&n>0&&!r(e)){var i=setTimeout(function(){e.classList.remove(s),m.delete(e)},u);m.set(e,i)}else e.classList.remove(s)}}t.addEventListener("ionScrollStart",function(t){n=t.target,h()}),t.addEventListener("ionScrollEnd",function(){n=void 0}),t.addEventListener("ionGestureCaptured",h),t.addEventListener("touchstart",function(t){p=Object(i["b"])(t),E(t)},!0),t.addEventListener("touchcancel",w,!0),t.addEventListener("touchend",w,!0),t.addEventListener("mousedown",function(t){var e=Object(i["b"])(t)-f;p<e&&E(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(i["b"])(t)-f;p<e&&g(t)},!0)}function a(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}}function r(t){return t.classList.contains("ion-activatable-instant")}function c(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}var s="activated",d=200,u=200,f=2500}}]);