import * as ufo from 'ufo';
import { g as getDefaultExportFromNamespaceIfNotNamed, c as commonjsGlobal } from '../_commonjsHelpers.mjs';
import * as axios from 'axios';
import * as cookieEs from 'cookie-es';
import * as defu from 'defu';
import * as apolloLink from 'apollo-link';
import * as destr from 'destr';
import * as apolloCacheInmemory from 'apollo-cache-inmemory';
import * as suncalc from 'suncalc';
import * as graphqlTag from 'graphql-tag';
import * as radix3 from 'radix3';
import * as ohash from 'ohash';
import * as deepmerge$1 from 'deepmerge';
import * as hookable from 'hookable';
import * as apolloClient from 'apollo-client';
import * as apolloUploadClient from 'apollo-upload-client';
import * as subscriptionsTransportWs from 'subscriptions-transport-ws';
import * as messageTypes from 'subscriptions-transport-ws/dist/message-types';
import * as apolloLinkWs from 'apollo-link-ws';
import * as apolloUtilities from 'apollo-utilities';
import * as apolloLinkPersistedQueries from 'apollo-link-persisted-queries';
import * as apolloLinkContext from 'apollo-link-context';
import * as apolloLinkState from 'apollo-link-state';
import * as universalCookie from 'universal-cookie';
import * as esnext_weakMap_deleteAll from 'core-js/modules/esnext.weak-map.delete-all.js';
import * as esnext_set_addAll from 'core-js/modules/esnext.set.add-all.js';
import * as esnext_set_deleteAll from 'core-js/modules/esnext.set.delete-all.js';
import * as esnext_set_difference from 'core-js/modules/esnext.set.difference.js';
import * as esnext_set_every from 'core-js/modules/esnext.set.every.js';
import * as esnext_set_filter from 'core-js/modules/esnext.set.filter.js';
import * as esnext_set_find from 'core-js/modules/esnext.set.find.js';
import * as esnext_set_intersection from 'core-js/modules/esnext.set.intersection.js';
import * as esnext_set_isDisjointFrom from 'core-js/modules/esnext.set.is-disjoint-from.js';
import * as esnext_set_isSubsetOf from 'core-js/modules/esnext.set.is-subset-of.js';
import * as esnext_set_isSupersetOf from 'core-js/modules/esnext.set.is-superset-of.js';
import * as esnext_set_join from 'core-js/modules/esnext.set.join.js';
import * as esnext_set_map from 'core-js/modules/esnext.set.map.js';
import * as esnext_set_reduce from 'core-js/modules/esnext.set.reduce.js';
import * as esnext_set_some from 'core-js/modules/esnext.set.some.js';
import * as esnext_set_symmetricDifference from 'core-js/modules/esnext.set.symmetric-difference.js';
import * as esnext_set_union from 'core-js/modules/esnext.set.union.js';
import * as esnext_map_deleteAll from 'core-js/modules/esnext.map.delete-all.js';
import * as esnext_map_every from 'core-js/modules/esnext.map.every.js';
import * as esnext_map_filter from 'core-js/modules/esnext.map.filter.js';
import * as esnext_map_find from 'core-js/modules/esnext.map.find.js';
import * as esnext_map_findKey from 'core-js/modules/esnext.map.find-key.js';
import * as esnext_map_includes from 'core-js/modules/esnext.map.includes.js';
import * as esnext_map_keyOf from 'core-js/modules/esnext.map.key-of.js';
import * as esnext_map_mapKeys from 'core-js/modules/esnext.map.map-keys.js';
import * as esnext_map_mapValues from 'core-js/modules/esnext.map.map-values.js';
import * as esnext_map_merge from 'core-js/modules/esnext.map.merge.js';
import * as esnext_map_reduce from 'core-js/modules/esnext.map.reduce.js';
import * as esnext_map_some from 'core-js/modules/esnext.map.some.js';
import * as esnext_map_update from 'core-js/modules/esnext.map.update.js';
import * as url from 'url';
import * as polyfill from 'cross-fetch/polyfill';
import require$$0$2 from 'unenv/runtime/mock/proxy';
import * as dayjs from 'dayjs';

var server$2 = {exports: {}};

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ufo);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(axios);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cookieEs);

var vue_runtime_common = {exports: {}};

var vue_runtime_common_prod = {exports: {}};

/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var t=Object.freeze({});function e(t){return null==t}function n(t){return null!=t}function r(t){return !0===t}function o(t){return "string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function i(t){return null!==t&&"object"==typeof t}var a=Object.prototype.toString;function s(t){return "[object Object]"===a.call(t)}function c(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function u(t){return n(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function l(t){return null==t?"":Array.isArray(t)||s(t)&&t.toString===a?JSON.stringify(t,null,2):String(t)}function f(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var p=d("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var h=Object.prototype.hasOwnProperty;function m(t,e){return h.call(t,e)}function y(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var g=/-(\w)/g,_=y(function(t){return t.replace(g,function(t,e){return e?e.toUpperCase():""})}),b=y(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),C=/\B([A-Z])/g,$=y(function(t){return t.replace(C,"-$1").toLowerCase()});var w=Function.prototype.bind?function(t,e){return t.bind(e)}:function(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n};function A(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function x(t,e){for(var n in e)t[n]=e[n];return t}function k(t){for(var e={},n=0;n<t.length;n++)t[n]&&x(e,t[n]);return e}function O(t,e,n){}var S=function(t,e,n){return !1},E=function(t){return t};function T(t,e){if(t===e)return !0;var n=i(t),r=i(e);if(!n||!r)return !n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),a=Array.isArray(e);if(o&&a)return t.length===e.length&&t.every(function(t,n){return T(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||a)return !1;var s=Object.keys(t),c=Object.keys(e);return s.length===c.length&&s.every(function(n){return T(t[n],e[n])})}catch(t){return !1}}function j(t,e){for(var n=0;n<t.length;n++)if(T(t[n],e))return n;return -1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments));}}var D="data-server-rendered",N=["component","directive","filter"],P=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:S,isReservedAttr:S,isUnknownElement:S,getTagNamespace:O,parsePlatformTagName:E,mustUseProp:S,async:!0,_lifecycleHooks:P};function M(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0});}var F=new RegExp("[^"+/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source+".$_\\d]");var R,V="__proto__"in{},U="undefined"!="undefined",H="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,B=H&&WXEnvironment.platform.toLowerCase(),z=U,q=z,X=("ios"===B),G=(z),Z={}.watch;var Y=function(){return void 0===R&&(R=!H&&"undefined"!=typeof commonjsGlobal&&(globalThis.process&&"server"===globalThis.process.env.VUE_ENV)),R};function et(t){return "function"==typeof t&&/native code/.test(t.toString())}var nt,rt="undefined"!=typeof Symbol&&et(Symbol)&&"undefined"!=typeof Reflect&&et(Reflect.ownKeys);nt="undefined"!=typeof Set&&et(Set)?Set:function(){function t(){this.set=Object.create(null);}return t.prototype.has=function(t){return !0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0;},t.prototype.clear=function(){this.set=Object.create(null);},t}();var ot=O,it=0,at=function(){this.id=it++,this.subs=[];};at.prototype.addSub=function(t){this.subs.push(t);},at.prototype.removeSub=function(t){v(this.subs,t);},at.prototype.depend=function(){at.target&&at.target.addDep(this);},at.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update();},at.target=null;var st=[];function ct(t){st.push(t),at.target=t;}function ut(){st.pop(),at.target=st[st.length-1];}var lt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1;},ft={child:{configurable:!0}};ft.child.get=function(){return this.componentInstance},Object.defineProperties(lt.prototype,ft);var dt=function(t){void 0===t&&(t="");var e=new lt;return e.text=t,e.isComment=!0,e};function pt(t){return new lt(void 0,void 0,void 0,String(t))}function vt(t){var e=new lt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var ht=Array.prototype,mt=Object.create(ht);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ht[t];M(mt,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);}return o&&a.observeArray(o),a.dep.notify(),i});});var yt=Object.getOwnPropertyNames(mt),gt=!0;function _t(t){gt=t;}var bt=function(t){var e;this.value=t,this.dep=new at,this.vmCount=0,M(t,"__ob__",this),Array.isArray(t)?(V?(e=mt,t.__proto__=e):function(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];M(t,i,e[i]);}}(t,mt,yt),this.observeArray(t)):this.walk(t);};function Ct(t,e){var n;if(i(t)&&!(t instanceof lt))return m(t,"__ob__")&&t.__ob__ instanceof bt?n=t.__ob__:gt&&!Y()&&(Array.isArray(t)||s(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new bt(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new at,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!o&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return at.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n);}(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||s&&!c||(c?c.call(t,e):n=e,u=!o&&Ct(e),i.notify());}});}}function wt(t,e,n){if(Array.isArray(t)&&c(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function At(t,e){if(Array.isArray(t)&&c(e))t.splice(e,1);else {var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify());}}bt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n]);},bt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e]);};var xt=L.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=rt?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)"__ob__"!==(n=i[a])&&(r=t[n],o=e[n],m(t,n)?r!==o&&s(r)&&s(o)&&kt(r,o):wt(t,n,o));return t}function Ot(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,o="function"==typeof t?t.call(n,n):t;return r?kt(r,o):o}:e?t?function(){return kt("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function St(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(n):n}function Et(t,e,n,r){var o=Object.create(t||null);return e?x(o,e):o}xt.data=function(t,e,n){return n?Ot(t,e,n):e&&"function"!=typeof e?t:Ot(t,e)},P.forEach(function(t){xt[t]=St;}),N.forEach(function(t){xt[t+"s"]=Et;}),xt.watch=function(t,e,n,r){if(t===Z&&(t=void 0),e===Z&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in x(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s];}return o},xt.props=xt.methods=xt.inject=xt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return x(o,t),e&&x(o,e),o},xt.provide=Ot;var Tt=function(t,e){return void 0===e?t:e};function jt(t,e,n){if("function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,o,i={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(o=n[r])&&(i[_(o)]={type:null});else if(s(n))for(var a in n)o=n[a],i[_(a)]=s(o)?o:{type:o};t.props=i;}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(s(n))for(var i in n){var a=n[i];r[i]=s(a)?x({from:i},a):{from:a};}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r});}}(e),!e._base&&(e.extends&&(t=jt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=jt(t,e.mixins[r],n);var i,a={};for(i in t)c(i);for(i in e)m(t,i)||c(i);function c(r){var o=xt[r]||Tt;a[r]=o(t[r],e[r],n,r);}return a}function It(t,e,n,r){if("string"==typeof n){var o=t[e];if(m(o,n))return o[n];var i=_(n);if(m(o,i))return o[i];var a=b(i);return m(o,a)?o[a]:o[n]||o[i]||o[a]}}function Dt(t,e,n,r){var o=e[t],i=!m(n,t),a=n[t],s=Mt(Boolean,o.type);if(s>-1)if(i&&!m(o,"default"))a=!1;else if(""===a||a===$(t)){var c=Mt(String,o.type);(c<0||s<c)&&(a=!0);}if(void 0===a){a=function(t,e,n){if(!m(e,"default"))return;var r=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return "function"==typeof r&&"Function"!==Pt(e.type)?r.call(t):r}(r,o,t);var u=gt;_t(!0),Ct(a),_t(u);}return a}var Nt=/^\s*function (\w+)/;function Pt(t){var e=t&&t.toString().match(Nt);return e?e[1]:""}function Lt(t,e){return Pt(t)===Pt(e)}function Mt(t,e){if(!Array.isArray(e))return Lt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Lt(e[n],t))return n;return -1}function Ft(t,e,n){ct();try{if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{if(!1===o[i].call(r,t,e,n))return}catch(t){Vt(t,r,"errorCaptured hook");}}Vt(t,e,n);}finally{ut();}}function Rt(t,e,n,r,o){var i;try{(i=n?t.apply(e,n):t.call(e))&&!i._isVue&&u(i)&&!i._handled&&(i.catch(function(t){return Ft(t,r,o+" (Promise/async)")}),i._handled=!0);}catch(t){Ft(t,r,o);}return i}function Vt(t,e,n){if(L.errorHandler)try{return L.errorHandler.call(null,t,e,n)}catch(e){e!==t&&Ut(e);}Ut(t);}function Ut(t,e,n){if(!H||"undefined"==typeof console)throw t;console.error(t);}var Ht,Bt=!1,zt=[],Wt=!1;function qt(){Wt=!1;var t=zt.slice(0);zt.length=0;for(var e=0;e<t.length;e++)t[e]();}if("undefined"!=typeof Promise&&et(Promise)){var Kt=Promise.resolve();Ht=function(){Kt.then(qt),X&&setTimeout(O);},Bt=!0;}else if("undefined"==typeof MutationObserver||!et(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ht="undefined"!=typeof setImmediate&&et(setImmediate)?function(){setImmediate(qt);}:function(){setTimeout(qt,0);};else {var Xt=1,Gt=new MutationObserver(qt),Zt=document.createTextNode(String(Xt));Gt.observe(Zt,{characterData:!0}),Ht=function(){Xt=(Xt+1)%2,Zt.data=String(Xt);},Bt=!0;}function Jt(t,e){var n;if(zt.push(function(){if(t)try{t.call(e);}catch(t){Ft(t,e,"nextTick");}else n&&n(e);}),Wt||(Wt=!0,Ht()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t;})}var Qt=new nt;function Yt(t){!function t(e,n){var r,o;var a=Array.isArray(e);if(!a&&!i(e)||Object.isFrozen(e)||e instanceof lt)return;if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s);}if(a)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n);}(t,Qt),Qt.clear();}var te=y(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return {name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function ee(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Rt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Rt(o[i],null,t,e,"v-on handler");}return n.fns=t,n}function ne(t,n,o,i,a,s){var c,u,l,f;for(c in t)u=t[c],l=n[c],f=te(c),e(u)||(e(l)?(e(u.fns)&&(u=t[c]=ee(u,s)),r(f.once)&&(u=t[c]=a(f.name,u,f.capture)),o(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in n)e(t[c])&&i((f=te(c)).name,n[c],f.capture);}function re(t,o,i){var a;t instanceof lt&&(t=t.data.hook||(t.data.hook={}));var s=t[o];function c(){i.apply(this,arguments),v(a.fns,c);}e(s)?a=ee([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=ee([s,c]),a.merged=!0,t[o]=a;}function oe(t,e,r,o,i){if(n(e)){if(m(e,r))return t[r]=e[r],i||delete e[r],!0;if(m(e,o))return t[r]=e[o],i||delete e[o],!0}return !1}function ie(t){return o(t)?[pt(t)]:Array.isArray(t)?function t(i,a){var s=[];var c,u,l,f;for(c=0;c<i.length;c++)e(u=i[c])||"boolean"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(ae((u=t(u,(a||"")+"_"+c))[0])&&ae(f)&&(s[l]=pt(f.text+u[0].text),u.shift()),s.push.apply(s,u)):o(u)?ae(f)?s[l]=pt(f.text+u):""!==u&&s.push(pt(u)):ae(u)&&ae(f)?s[l]=pt(f.text+u.text):(r(i._isVList)&&n(u.tag)&&e(u.key)&&n(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(t):void 0}function ae(t){return n(t)&&n(t.text)&&!1===t.isComment}function se(t,e){if(t){for(var n=Object.create(null),r=rt?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){for(var a=t[i].from,s=e;s;){if(s._provided&&m(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent;}if(!s&&"default"in t[i]){var c=t[i].default;n[i]="function"==typeof c?c.call(e):c;}}}return n}}function ce(t,e){if(!t||!t.length)return {};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else {var s=a.slot,c=n[s]||(n[s]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i);}}for(var u in n)n[u].every(ue)&&delete n[u];return n}function ue(t){return t.isComment&&!t.asyncFactory||" "===t.text}function le(t){return t.isComment&&t.asyncFactory}function fe(e,n,r){var o,i=Object.keys(n).length>0,a=e?!!e.$stable:!i,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&r&&r!==t&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},e)e[c]&&"$"!==c[0]&&(o[c]=de(n,c,e[c]));}else o={};for(var u in n)u in o||(o[u]=pe(n,u));return e&&Object.isExtensible(e)&&(e._normalized=o),M(o,"$stable",a),M(o,"$key",s),M(o,"$hasNormal",i),o}function de(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({}),e=(t=t&&"object"==typeof t&&!Array.isArray(t)?[t]:ie(t))&&t[0];return t&&(!e||1===t.length&&e.isComment&&!le(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function pe(t,e){return function(){return t[e]}}function ve(t,e){var r,o,a,s,c;if(Array.isArray(t)||"string"==typeof t)for(r=new Array(t.length),o=0,a=t.length;o<a;o++)r[o]=e(t[o],o);else if("number"==typeof t)for(r=new Array(t),o=0;o<t;o++)r[o]=e(o+1,o);else if(i(t))if(rt&&t[Symbol.iterator]){r=[];for(var u=t[Symbol.iterator](),l=u.next();!l.done;)r.push(e(l.value,r.length)),l=u.next();}else for(s=Object.keys(t),r=new Array(s.length),o=0,a=s.length;o<a;o++)c=s[o],r[o]=e(t[c],c,o);return n(r)||(r=[]),r._isVList=!0,r}function he(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=x(x({},r),n)),o=i(n)||("function"==typeof e?e():e)):o=this.$slots[t]||("function"==typeof e?e():e);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function me(t){return It(this.$options,"filters",t)||E}function ye(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ge(t,e,n,r,o){var i=L.keyCodes[e]||n;return o&&r&&!L.keyCodes[e]?ye(o,r):i?ye(i,t):r?$(r)!==e:void 0===t}function _e(t,e,n,r,o){if(n)if(i(n)){var a;Array.isArray(n)&&(n=k(n));var s=function(i){if("class"===i||"style"===i||p(i))a=t;else {var s=t.attrs&&t.attrs.type;a=r||L.mustUseProp(e,s,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={});}var c=_(i),u=$(i);c in a||u in a||(a[i]=n[i],o&&((t.on||(t.on={}))["update:"+i]=function(t){n[i]=t;}));};for(var c in n)s(c);}return t}function be(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:($e(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r)}function Ce(t,e,n){return $e(t,"__once__"+e+(n?"_"+n:""),!0),t}function $e(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&we(t[r],e+"_"+r,n);else we(t,e,n);}function we(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n;}function Ae(t,e){if(e)if(s(e)){var n=t.on=t.on?x({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i;}}return t}function xe(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?xe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn);}return r&&(e.$key=r),e}function ke(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"==typeof r&&r&&(t[e[n]]=e[n+1]);}return t}function Oe(t,e){return "string"==typeof t?e+t:t}function Se(t){t._o=Ce,t._n=f,t._s=l,t._l=ve,t._t=he,t._q=T,t._i=j,t._m=be,t._f=me,t._k=ge,t._b=_e,t._v=pt,t._e=dt,t._u=xe,t._g=Ae,t._d=ke,t._p=Oe;}function Ee(e,n,o,i,a){var s,c=this,u=a.options;m(i,"_uid")?(s=Object.create(i))._original=i:(s=i,i=i._original);var l=r(u._compiled),f=!l;this.data=e,this.props=n,this.children=o,this.parent=i,this.listeners=e.on||t,this.injections=se(u.inject,i),this.slots=function(){return c.$slots||fe(e.scopedSlots,c.$slots=ce(o,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return fe(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=fe(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=Fe(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return Fe(s,t,e,n,r,f)};}function Te(t,e,n,r,o){var i=vt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function je(t,e){for(var n in e)t[_(n)]=e[n];}Se(Ee.prototype);var Ie={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var r=t;Ie.prepatch(r,r);}else {(t.componentInstance=function(t,e){var r={_isComponent:!0,_parentVnode:t,parent:e},o=t.data.inlineTemplate;n(o)&&(r.render=o.render,r.staticRenderFns=o.staticRenderFns);return new t.componentOptions.Ctor(r)}(t,Ke)).$mount(e?t.elm:void 0,e);}},prepatch:function(e,n){var r=n.componentOptions;!function(e,n,r,o,i){var a=o.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==t&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),u=!!(i||e.$options._renderChildren||c);e.$options._parentVnode=o,e.$vnode=o,e._vnode&&(e._vnode.parent=o);if(e.$options._renderChildren=i,e.$attrs=o.data.attrs||t,e.$listeners=r||t,n&&e.$options.props){_t(!1);for(var l=e._props,f=e.$options._propKeys||[],d=0;d<f.length;d++){var p=f[d],v=e.$options.props;l[p]=Dt(p,v,n,e);}_t(!0),e.$options.propsData=n;}r=r||t;var h=e.$options._parentListeners;e.$options._parentListeners=r,qe(e,r,h),u&&(e.$slots=ce(i,o.context),e.$forceUpdate());}(n.componentInstance=e.componentInstance,r.propsData,r.listeners,n,r.children);},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Je(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Ye.push(e)):Ze(r,!0));},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(n&&(e._directInactive=!0,Ge(e)))return;if(!e._inactive){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);Je(e,"deactivated");}}(e,!0):e.$destroy());}},De=Object.keys(Ie);function Ne(o,a,s,c,l){if(!e(o)){var f=s.$options._base;if(i(o)&&(o=f.extend(o)),"function"==typeof o){var d;if(e(o.cid)&&void 0===(o=function(t,o){if(r(t.error)&&n(t.errorComp))return t.errorComp;if(n(t.resolved))return t.resolved;var a=Ve;a&&n(t.owners)&&-1===t.owners.indexOf(a)&&t.owners.push(a);if(r(t.loading)&&n(t.loadingComp))return t.loadingComp;if(a&&!n(t.owners)){var s=t.owners=[a],c=!0,l=null,f=null;a.$on("hook:destroyed",function(){return v(s,a)});var d=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null));},p=I(function(e){t.resolved=Ue(e,o),c?s.length=0:d(!0);}),h=I(function(e){n(t.errorComp)&&(t.error=!0,d(!0));}),m=t(p,h);return i(m)&&(u(m)?e(t.resolved)&&m.then(p,h):u(m.component)&&(m.component.then(p,h),n(m.error)&&(t.errorComp=Ue(m.error,o)),n(m.loading)&&(t.loadingComp=Ue(m.loading,o),0===m.delay?t.loading=!0:l=setTimeout(function(){l=null,e(t.resolved)&&e(t.error)&&(t.loading=!0,d(!1));},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,e(t.resolved)&&h(null);},m.timeout)))),c=!1,t.loading?t.loadingComp:t.resolved}}(d=o,f)))return function(t,e,n,r,o){var i=dt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(d,a,s,c,l);a=a||{},bn(o),n(a.model)&&function(t,e){var r=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[r]=e.model.value;var i=e.on||(e.on={}),a=i[o],s=e.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[o]=[s].concat(a)):i[o]=s;}(o.options,a);var p=function(t,r,o){var i=r.options.props;if(!e(i)){var a={},s=t.attrs,c=t.props;if(n(s)||n(c))for(var u in i){var l=$(u);oe(a,c,u,l,!0)||oe(a,s,u,l,!1);}return a}}(a,o);if(r(o.options.functional))return function(e,r,o,i,a){var s=e.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Dt(l,u,r||t);else n(o.attrs)&&je(c,o.attrs),n(o.props)&&je(c,o.props);var f=new Ee(o,c,a,i,e),d=s.render.call(null,f._c,f);if(d instanceof lt)return Te(d,o,f.parent,s);if(Array.isArray(d)){for(var p=ie(d)||[],v=new Array(p.length),h=0;h<p.length;h++)v[h]=Te(p[h],o,f.parent,s);return v}}(o,p,a,s,c);var h=a.on;if(a.on=a.nativeOn,r(o.options.abstract)){var m=a.slot;a={},m&&(a.slot=m);}!function(t){for(var e=t.hook||(t.hook={}),n=0;n<De.length;n++){var r=De[n],o=e[r],i=Ie[r];o===i||o&&o._merged||(e[r]=o?Pe(i,o):i);}}(a);var y=o.options.name||l;return new lt("vue-component-"+o.cid+(y?"-"+y:""),a,void 0,void 0,void 0,s,{Ctor:o,propsData:p,listeners:h,tag:l,children:c},d)}}}function Pe(t,e){var n=function(n,r){t(n,r),e(n,r);};return n._merged=!0,n}var Le=1,Me=2;function Fe(t,a,s,c,u,l){return (Array.isArray(s)||o(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Me),function(t,o,a,s,c){if(n(a)&&n(a.__ob__))return dt();n(a)&&n(a.is)&&(o=a.is);if(!o)return dt();Array.isArray(s)&&"function"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Me?s=ie(s):c===Le&&(s=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(s));var u,l;if("string"==typeof o){var f;l=t.$vnode&&t.$vnode.ns||L.getTagNamespace(o),u=L.isReservedTag(o)?new lt(L.parsePlatformTagName(o),a,s,void 0,void 0,t):a&&a.pre||!n(f=It(t.$options,"components",o))?new lt(o,a,s,void 0,void 0,t):Ne(f,a,t,s,o);}else u=Ne(o,a,t,s);return Array.isArray(u)?u:n(u)?(n(l)&&function t(o,i,a){o.ns=i;"foreignObject"===o.tag&&(i=void 0,a=!0);if(n(o.children))for(var s=0,c=o.children.length;s<c;s++){var u=o.children[s];n(u.tag)&&(e(u.ns)||r(a)&&"svg"!==u.tag)&&t(u,i,a);}}(u,l),n(a)&&function(t){i(t.style)&&Yt(t.style);i(t.class)&&Yt(t.class);}(a),u):dt()}(t,a,s,c,u)}var Re,Ve=null;function Ue(t,e){return (t.__esModule||rt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),i(t)?e.extend(t):t}function He(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var r=t[e];if(n(r)&&(n(r.componentOptions)||le(r)))return r}}function Be(t,e){Re.$on(t,e);}function ze(t,e){Re.$off(t,e);}function We(t,e){var n=Re;return function r(){null!==e.apply(null,arguments)&&n.$off(t,r);}}function qe(t,e,n){Re=t,ne(e,n||{},Be,ze,We,t),Re=void 0;}var Ke=null;function Xe(t){var e=Ke;return Ke=t,function(){Ke=e;}}function Ge(t){for(;t&&(t=t.$parent);)if(t._inactive)return !0;return !1}function Ze(t,e){if(e){if(t._directInactive=!1,Ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Ze(t.$children[n]);Je(t,"activated");}}function Je(t,e){ct();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Rt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ut();}var Qe=[],Ye=[],tn={},en=!1,nn=!1,rn=0;var on=0,an=Date.now;function cn(){var t,e;for(on=an(),nn=!0,Qe.sort(function(t,e){return t.id-e.id}),rn=0;rn<Qe.length;rn++)(t=Qe[rn]).before&&t.before(),e=t.id,tn[e]=null,t.run();var n=Ye.slice(),r=Qe.slice();rn=Qe.length=Ye.length=0,tn={},en=nn=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ze(t[e],!0);}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Je(r,"updated");}}(r);}var un=0,ln=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++un,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new nt,this.newDepIds=new nt,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!F.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]];}return t}}}(e),this.getter||(this.getter=O)),this.value=this.lazy?void 0:this.get();};ln.prototype.get=function(){var t;ct(this);var e=this.vm;try{t=this.getter.call(e,e);}catch(t){if(!this.user)throw t;Ft(t,e,'getter for watcher "'+this.expression+'"');}finally{this.deep&&Yt(t),ut(),this.cleanupDeps();}return t},ln.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this));},ln.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this);}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0;},ln.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==tn[e]){if(tn[e]=!0,nn){for(var n=Qe.length-1;n>rn&&Qe[n].id>t.id;)n--;Qe.splice(n+1,0,t);}else Qe.push(t);en||(en=!0,Jt(cn));}}(this);},ln.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||i(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';Rt(this.cb,this.vm,[t,e],this.vm,n);}else this.cb.call(this.vm,t,e);}}},ln.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1;},ln.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend();},ln.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1;}};var fn={enumerable:!0,configurable:!0,get:O,set:O};function dn(t,e,n){fn.get=function(){return this[e][n]},fn.set=function(t){this[e][n]=t;},Object.defineProperty(t,n,fn);}function pn(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[];t.$parent&&_t(!1);var i=function(i){o.push(i);var a=Dt(i,e,n,t);$t(r,i,a),i in t||dn(t,"_props",i);};for(var a in e)i(a);_t(!0);}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]="function"!=typeof e[n]?O:w(e[n],t);}(t,e.methods),e.data?function(t){var e=t.$options.data;s(e=t._data="function"==typeof e?function(t,e){ct();try{return t.call(e,e)}catch(t){return Ft(t,e,"data()"),{}}finally{ut();}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);for(;o--;){var i=n[o];r&&m(r,i)||(a=void 0,36!==(a=(i+"").charCodeAt(0))&&95!==a&&dn(t,"_data",i));}var a;Ct(e,!0);}(t):Ct(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=Y();for(var o in e){var i=e[o],a="function"==typeof i?i:i.get;r||(n[o]=new ln(t,a||O,O,vn)),o in t||hn(t,o,i);}}(t,e.computed),e.watch&&e.watch!==Z&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)gn(t,n,r[o]);else gn(t,n,r);}}(t,e.watch);}var vn={lazy:!0};function hn(t,e,n){var r=!Y();"function"==typeof n?(fn.get=r?mn(e):yn(n),fn.set=O):(fn.get=n.get?r&&!1!==n.cache?mn(e):yn(n.get):O,fn.set=n.set||O),Object.defineProperty(t,e,fn);}function mn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),at.target&&e.depend(),e.value}}function yn(t){return function(){return t.call(this,this)}}function gn(t,e,n,r){return s(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}var _n=0;function bn(t){var e=t.options;if(t.super){var n=bn(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}(t);r&&x(t.extendOptions,r),(e=t.options=jt(n,t.extendOptions)).name&&(e.components[e.name]=t);}}return e}function Cn(t){this._init(t);}function $n(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t);};return (a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=jt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)dn(t.prototype,"_props",n);}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)hn(t.prototype,n,e[n]);}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,N.forEach(function(t){a[t]=n[t];}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=x({},a.options),o[r]=a,a};}function wn(t){return t&&(t.Ctor.options.name||t.tag)}function An(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===a.call(n)&&t.test(e));var n;}function xn(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=a.name;s&&!e(s)&&kn(n,i,r,o);}}}function kn(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,v(n,e);}!function(e){e.prototype._init=function(e){var n=this;n._uid=_n++,n._isVue=!0,e&&e._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns);}(n,e):n.$options=jt(bn(n.constructor),e||{},n),n._renderProxy=n,n._self=n,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t);}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1;}(n),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&qe(t,e);}(n),function(e){e._vnode=null,e._staticTrees=null;var n=e.$options,r=e.$vnode=n._parentVnode,o=r&&r.context;e.$slots=ce(n._renderChildren,o),e.$scopedSlots=t,e._c=function(t,n,r,o){return Fe(e,t,n,r,o,!1)},e.$createElement=function(t,n,r,o){return Fe(e,t,n,r,o,!0)};var i=r&&r.data;$t(e,"$attrs",i&&i.attrs||t,null,!0),$t(e,"$listeners",n._parentListeners||t,null,!0);}(n),Je(n,"beforeCreate"),function(t){var e=se(t.$options.inject,t);e&&(_t(!1),Object.keys(e).forEach(function(n){$t(t,n,e[n]);}),_t(!0));}(n),pn(n),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e);}(n),Je(n,"created"),n.$options.el&&n.$mount(n.$options.el);};}(Cn),function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=At,t.prototype.$watch=function(t,e,n){if(s(e))return gn(this,t,e,n);(n=n||{}).user=!0;var r=new ln(this,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+r.expression+'"';ct(),Rt(e,this,[r.value],this,o),ut();}return function(){r.teardown();}};}(Cn),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else (r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments);}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;for(var s=a.length;s--;)if((i=a[s])===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?A(e):e;for(var n=A(arguments,1),r='event handler for "'+t+'"',o=0,i=e.length;o<i;o++)Rt(e[o],this,n,this,r);}return this};}(Cn),function(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Xe(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el);},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update();},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Je(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Je(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null);}};}(Cn),function(t){Se(t.prototype),t.prototype.$nextTick=function(t){return Jt(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=fe(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{Ve=e,t=r.call(e._renderProxy,e.$createElement);}catch(n){Ft(n,e,"render"),t=e._vnode;}finally{Ve=null;}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof lt||(t=dt()),t.parent=o,t};}(Cn);var On=[String,RegExp,Array],Sn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:On,exclude:On,max:[String,Number]},methods:{cacheVNode:function(){var t=this.cache,e=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var o=n.tag,i=n.componentInstance,a=n.componentOptions;t[r]={name:wn(a),tag:o,componentInstance:i},e.push(r),this.max&&e.length>parseInt(this.max)&&kn(t,e[0],e,this._vnode),this.vnodeToCache=null;}}},created:function(){this.cache=Object.create(null),this.keys=[];},destroyed:function(){for(var t in this.cache)kn(this.cache,t,this.keys);},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",function(e){xn(t,function(t){return An(e,t)});}),this.$watch("exclude",function(e){xn(t,function(t){return !An(e,t)});});},updated:function(){this.cacheVNode();},render:function(){var t=this.$slots.default,e=He(t),n=e&&e.componentOptions;if(n){var r=wn(n),o=this.include,i=this.exclude;if(o&&(!r||!An(o,r))||i&&r&&An(i,r))return e;var a=this.cache,s=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;a[c]?(e.componentInstance=a[c].componentInstance,v(s,c),s.push(c)):(this.vnodeToCache=e,this.keyToCache=c),e.data.keepAlive=!0;}return e||t&&t[0]}}};!function(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:ot,extend:x,mergeOptions:jt,defineReactive:$t},t.set=wt,t.delete=At,t.nextTick=Jt,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null);}),t.options._base=t,x(t.options.components,Sn),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this};}(t),function(t){t.mixin=function(t){return this.options=jt(this.options,t),this};}(t),$n(t),function(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&s(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]};});}(t);}(Cn),Object.defineProperty(Cn.prototype,"$isServer",{get:Y}),Object.defineProperty(Cn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cn,"FunctionalRenderContext",{value:Ee}),Cn.version="2.6.14";var En=d("style,class"),Tn=d("input,textarea,option,select,progress"),jn=d("contenteditable,draggable,spellcheck"),In=d("events,caret,typing,plaintext-only"),Dn=function(t,e){return Fn(e)||"false"===e?"false":"contenteditable"===t&&In(e)?e:"true"},Nn=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Pn="http://www.w3.org/1999/xlink",Ln=function(t){return ":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Mn=function(t){return Ln(t)?t.slice(6,t.length):""},Fn=function(t){return null==t||!1===t};function Rn(t){for(var e=t.data,r=t,o=t;n(o.componentInstance);)(o=o.componentInstance._vnode)&&o.data&&(e=Vn(o.data,e));for(;n(r=r.parent);)r&&r.data&&(e=Vn(e,r.data));return function(t,e){if(n(t)||n(e))return Un(t,Hn(e));return ""}(e.staticClass,e.class)}function Vn(t,e){return {staticClass:Un(t.staticClass,e.staticClass),class:n(t.class)?[t.class,e.class]:e.class}}function Un(t,e){return t?e?t+" "+e:t:e||""}function Hn(t){return Array.isArray(t)?function(t){for(var e,r="",o=0,i=t.length;o<i;o++)n(e=Hn(t[o]))&&""!==e&&(r&&(r+=" "),r+=e);return r}(t):i(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var Bn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},zn=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Wn=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),qn=function(t){return zn(t)||Wn(t)};var Xn=d("text,number,password,search,email,tel,url");var Gn=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return "select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Bn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n);},removeChild:function(t,e){t.removeChild(e);},appendChild:function(t,e){t.appendChild(e);},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e;},setStyleScope:function(t,e){t.setAttribute(e,"");}}),Zn={create:function(t,e){Jn(e);},update:function(t,e){t.data.ref!==e.data.ref&&(Jn(t,!0),Jn(e));},destroy:function(t){Jn(t,!0);}};function Jn(t,e){var r=t.data.ref;if(n(r)){var o=t.context,i=t.componentInstance||t.elm,a=o.$refs;e?Array.isArray(a[r])?v(a[r],i):a[r]===i&&(a[r]=void 0):t.data.refInFor?Array.isArray(a[r])?a[r].indexOf(i)<0&&a[r].push(i):a[r]=[i]:a[r]=i;}}var Qn=new lt("",{},[]),Yn=["create","activate","update","remove","destroy"];function tr(t,o){return t.key===o.key&&t.asyncFactory===o.asyncFactory&&(t.tag===o.tag&&t.isComment===o.isComment&&n(t.data)===n(o.data)&&function(t,e){if("input"!==t.tag)return !0;var r,o=n(r=t.data)&&n(r=r.attrs)&&r.type,i=n(r=e.data)&&n(r=r.attrs)&&r.type;return o===i||Xn(o)&&Xn(i)}(t,o)||r(t.isAsyncPlaceholder)&&e(o.asyncFactory.error))}function er(t,e,r){var o,i,a={};for(o=e;o<=r;++o)n(i=t[o].key)&&(a[i]=o);return a}var nr={create:rr,update:rr,destroy:function(t){rr(t,Qn);}};function rr(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,o,i=t===Qn,a=e===Qn,s=ir(t.data.directives,t.context),c=ir(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],o=c[n],r?(o.oldValue=r.value,o.oldArg=r.arg,sr(o,"update",e,t),o.def&&o.def.componentUpdated&&l.push(o)):(sr(o,"bind",e,t),o.def&&o.def.inserted&&u.push(o));if(u.length){var f=function(){for(var n=0;n<u.length;n++)sr(u[n],"inserted",e,t);};i?re(e,"insert",f):f();}l.length&&re(e,"postpatch",function(){for(var n=0;n<l.length;n++)sr(l[n],"componentUpdated",e,t);});if(!i)for(n in s)c[n]||sr(s[n],"unbind",t,t,a);}(t,e);}var or=Object.create(null);function ir(t,e){var n,r,o=Object.create(null);if(!t)return o;for(n=0;n<t.length;n++)(r=t[n]).modifiers||(r.modifiers=or),o[ar(r)]=r,r.def=It(e.$options,"directives",r.name);return o}function ar(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function sr(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o);}catch(r){Ft(r,n.context,"directive "+t.name+" "+e+" hook");}}var cr=[Zn,nr];function ur(t,r){var o=r.componentOptions;if(!(n(o)&&!1===o.Ctor.options.inheritAttrs||e(t.data.attrs)&&e(r.data.attrs))){var i,a,s=r.elm,c=t.data.attrs||{},u=r.data.attrs||{};for(i in n(u.__ob__)&&(u=r.data.attrs=x({},u)),u)a=u[i],c[i]!==a&&lr(s,i,a,r.data.pre);for(i in c)e(u[i])&&(Ln(i)?s.removeAttributeNS(Pn,Mn(i)):jn(i)||s.removeAttribute(i));}}function lr(t,e,n,r){r||t.tagName.indexOf("-")>-1?fr(t,e,n):Nn(e)?Fn(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):jn(e)?t.setAttribute(e,Dn(e,n)):Ln(e)?Fn(n)?t.removeAttributeNS(Pn,Mn(e)):t.setAttributeNS(Pn,e,n):fr(t,e,n);}function fr(t,e,n){if(Fn(n))t.removeAttribute(e);else {t.setAttribute(e,n);}}var dr={create:ur,update:ur};function pr(t,r){var o=r.elm,i=r.data,a=t.data;if(!(e(i.staticClass)&&e(i.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=Rn(r),c=o._transitionClasses;n(c)&&(s=Un(s,Hn(c))),s!==o._prevClass&&(o.setAttribute("class",s),o._prevClass=s);}}var vr,hr={create:pr,update:pr},mr="__r",yr="__c";function gr(t,e,n){var r=vr;return function o(){null!==e.apply(null,arguments)&&Cr(t,o,n,r);}}var _r=Bt&&!(G);function br(t,e,n,r){if(_r){var o=on,i=e;e=i._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=o||t.timeStamp<=0||t.target.ownerDocument!==document)return i.apply(this,arguments)};}vr.addEventListener(t,e,n);}function Cr(t,e,n,r){(r||vr).removeEventListener(t,e._wrapper||e,n);}function $r(t,r){if(!e(t.data.on)||!e(r.data.on)){var o=r.data.on||{},i=t.data.on||{};vr=r.elm,function(t){if(n(t[mr])){var e="input";t[e]=[].concat(t[mr],t[e]||[]),delete t[mr];}n(t[yr])&&(t.change=[].concat(t[yr],t.change||[]),delete t[yr]);}(o),ne(o,i,br,Cr,gr,r.context),vr=void 0;}}var wr,Ar={create:$r,update:$r};function xr(t,r){if(!e(t.data.domProps)||!e(r.data.domProps)){var o,i,a=r.elm,s=t.data.domProps||{},c=r.data.domProps||{};for(o in n(c.__ob__)&&(c=r.data.domProps=x({},c)),s)o in c||(a[o]="");for(o in c){if(i=c[o],"textContent"===o||"innerHTML"===o){if(r.children&&(r.children.length=0),i===s[o])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0]);}if("value"===o&&"PROGRESS"!==a.tagName){a._value=i;var u=e(i)?"":String(i);kr(a,u)&&(a.value=u);}else if("innerHTML"===o&&Wn(a.tagName)&&e(a.innerHTML)){(wr=wr||document.createElement("div")).innerHTML="<svg>"+i+"</svg>";for(var l=wr.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild);}else if(i!==s[o])try{a[o]=i;}catch(t){}}}}function kr(t,e){return !t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t;}catch(t){}return n&&t.value!==e}(t,e)||function(t,e){var r=t.value,o=t._vModifiers;if(n(o)){if(o.number)return f(r)!==f(e);if(o.trim)return r.trim()!==e.trim()}return r!==e}(t,e))}var Or={create:xr,update:xr},Sr=y(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim());}}),e});function Er(t){var e=Tr(t.style);return t.staticStyle?x(t.staticStyle,e):e}function Tr(t){return Array.isArray(t)?k(t):"string"==typeof t?Sr(t):t}var jr,Ir=/^--/,Dr=/\s*!important$/,Nr=function(t,e,n){if(Ir.test(e))t.style.setProperty(e,n);else if(Dr.test(n))t.style.setProperty($(e),n.replace(Dr,""),"important");else {var r=Lr(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n;}},Pr=["Webkit","Moz","ms"],Lr=y(function(t){if(jr=jr||document.createElement("div").style,"filter"!==(t=_(t))&&t in jr)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Pr.length;n++){var r=Pr[n]+e;if(r in jr)return r}});function Mr(t,r){var o=r.data,i=t.data;if(!(e(o.staticStyle)&&e(o.style)&&e(i.staticStyle)&&e(i.style))){var a,s,c=r.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},f=u||l,d=Tr(r.data.style)||{};r.data.normalizedStyle=n(d.__ob__)?x({},d):d;var p=function(t,e){var n,r={};if(e)for(var o=t;o.componentInstance;)(o=o.componentInstance._vnode)&&o.data&&(n=Er(o.data))&&x(r,n);(n=Er(t.data))&&x(r,n);for(var i=t;i=i.parent;)i.data&&(n=Er(i.data))&&x(r,n);return r}(r,!0);for(s in f)e(p[s])&&Nr(c,s,"");for(s in p)(a=p[s])!==f[s]&&Nr(c,s,null==a?"":a);}}var Fr={create:Mr,update:Mr},Rr=/\s+/;function Vr(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Rr).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else {var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim());}}function Ur(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Rr).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else {for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class");}}function Hr(t){if(t){if("object"==typeof t){var e={};return !1!==t.css&&x(e,Br(t.name||"v")),x(e,t),e}return "string"==typeof t?Br(t):void 0}}var Br=y(function(t){return {enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Wr="transition",qr="animation",Kr="transition",Xr="transitionend",Gr="animation",Zr="animationend";var Jr=function(t){return t()};function Qr(t){Jr(function(){Jr(t);});}function Yr(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Vr(t,e));}function to(t,e){t._transitionClasses&&v(t._transitionClasses,e),Ur(t,e);}function eo(t,e,n){var r=ro(t,e),o=r.type,i=r.timeout,a=r.propCount;if(!o)return n();var s=o===Wr?Xr:Zr,c=0,u=function(){t.removeEventListener(s,l),n();},l=function(e){e.target===t&&++c>=a&&u();};setTimeout(function(){c<a&&u();},i+1),t.addEventListener(s,l);}var no=/\b(transform|all)(,|$)/;function ro(t,e){var n,r=window.getComputedStyle(t),o=(r[Kr+"Delay"]||"").split(", "),i=(r[Kr+"Duration"]||"").split(", "),a=oo(o,i),s=(r[Gr+"Delay"]||"").split(", "),c=(r[Gr+"Duration"]||"").split(", "),u=oo(s,c),l=0,f=0;return e===Wr?a>0&&(n=Wr,l=a,f=i.length):e===qr?u>0&&(n=qr,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Wr:qr:null)?n===Wr?i.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Wr&&no.test(r[Kr+"Property"])}}function oo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return io(e)+io(t[n])}))}function io(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ao(t,r){var o=t.elm;n(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var a=Hr(t.data.transition);if(!e(a)&&!n(o._enterCb)&&1===o.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,d=a.enterActiveClass,p=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,C=a.appear,$=a.afterAppear,w=a.appearCancelled,A=a.duration,x=Ke,k=Ke.$vnode;k&&k.parent;)x=k.context,k=k.parent;var O=!x._isMounted||!t.isRootInsert;if(!O||C||""===C){var S=O&&p?p:u,E=O&&h?h:d,T=O&&v?v:l,j=O&&b||m,D=O&&"function"==typeof C?C:y,N=O&&$||g,P=O&&w||_,L=f(i(A)?A.enter:A),M=!1!==s&&!q,F=uo(D),R=o._enterCb=I(function(){M&&(to(o,T),to(o,E)),R.cancelled?(M&&to(o,S),P&&P(o)):N&&N(o),o._enterCb=null;});t.data.show||re(t,"insert",function(){var e=o.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),D&&D(o,R);}),j&&j(o),M&&(Yr(o,S),Yr(o,E),Qr(function(){to(o,S),R.cancelled||(Yr(o,T),F||(co(L)?setTimeout(R,L):eo(o,c,R)));})),t.data.show&&(r&&r(),D&&D(o,R)),M||F||R();}}}function so(t,r){var o=t.elm;n(o._enterCb)&&(o._enterCb.cancelled=!0,o._enterCb());var a=Hr(t.data.transition);if(e(a)||1!==o.nodeType)return r();if(!n(o._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,d=a.leaveActiveClass,p=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!q,b=uo(v),C=f(i(g)?g.leave:g),$=o._leaveCb=I(function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[t.key]=null),_&&(to(o,l),to(o,d)),$.cancelled?(_&&to(o,u),m&&m(o)):(r(),h&&h(o)),o._leaveCb=null;});y?y(w):w();}function w(){$.cancelled||(!t.data.show&&o.parentNode&&((o.parentNode._pending||(o.parentNode._pending={}))[t.key]=t),p&&p(o),_&&(Yr(o,u),Yr(o,d),Qr(function(){to(o,u),$.cancelled||(Yr(o,l),b||(co(C)?setTimeout($,C):eo(o,c,$)));})),v&&v(o,$),_||b||$());}}function co(t){return "number"==typeof t&&!isNaN(t)}function uo(t){if(e(t))return !1;var r=t.fns;return n(r)?uo(Array.isArray(r)?r[0]:r):(t._length||t.length)>1}(function(t){var i,a,s={},c=t.modules,u=t.nodeOps;for(i=0;i<Yn.length;++i)for(s[Yn[i]]=[],a=0;a<c.length;++a)n(c[a][Yn[i]])&&s[Yn[i]].push(c[a][Yn[i]]);function l(t){var e=u.parentNode(t);n(e)&&u.removeChild(e,t);}function f(t,e,o,i,a,c,l){if(n(t.elm)&&n(c)&&(t=c[l]=vt(t)),t.isRootInsert=!a,!function(t,e,o,i){var a=t.data;if(n(a)){var c=n(t.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(t,!1),n(t.componentInstance))return p(t,e),v(o,t.elm,i),r(c)&&function(t,e,r,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,n(i=a.data)&&n(i=i.transition)){for(i=0;i<s.activate.length;++i)s.activate[i](Qn,a);e.push(a);break}v(r,t.elm,o);}(t,e,o,i),!0}}(t,e,o,i)){var f=t.data,d=t.children,m=t.tag;n(m)?(t.elm=t.ns?u.createElementNS(t.ns,m):u.createElement(m,t),g(t),h(t,d,e),n(f)&&y(t,e),v(o,t.elm,i)):r(t.isComment)?(t.elm=u.createComment(t.text),v(o,t.elm,i)):(t.elm=u.createTextNode(t.text),v(o,t.elm,i));}}function p(t,e){n(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,m(t)?(y(t,e),g(t)):(Jn(t),e.push(t));}function v(t,e,r){n(t)&&(n(r)?u.parentNode(r)===t&&u.insertBefore(t,e,r):u.appendChild(t,e));}function h(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r);else o(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)));}function m(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return n(t.tag)}function y(t,e){for(var r=0;r<s.create.length;++r)s.create[r](Qn,t);n(i=t.data.hook)&&(n(i.create)&&i.create(Qn,t),n(i.insert)&&e.push(t));}function g(t){var e;if(n(e=t.fnScopeId))u.setStyleScope(t.elm,e);else for(var r=t;r;)n(e=r.context)&&n(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),r=r.parent;n(e=Ke)&&e!==t.context&&e!==t.fnContext&&n(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e);}function _(t,e,n,r,o,i){for(;r<=o;++r)f(n[r],i,t,e,!1,n,r);}function b(t){var e,r,o=t.data;if(n(o))for(n(e=o.hook)&&n(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(n(e=t.children))for(r=0;r<t.children.length;++r)b(t.children[r]);}function C(t,e,r){for(;e<=r;++e){var o=t[e];n(o)&&(n(o.tag)?($(o),b(o)):l(o.elm));}}function $(t,e){if(n(e)||n(t.data)){var r,o=s.remove.length+1;for(n(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&l(t);}return n.listeners=e,n}(t.elm,o),n(r=t.componentInstance)&&n(r=r._vnode)&&n(r.data)&&$(r,e),r=0;r<s.remove.length;++r)s.remove[r](t,e);n(r=t.data.hook)&&n(r=r.remove)?r(t,e):e();}else l(t.elm);}function w(t,e,r,o){for(var i=r;i<o;i++){var a=e[i];if(n(a)&&tr(t,a))return i}}function A(t,o,i,a,c,l){if(t!==o){n(o.elm)&&n(a)&&(o=a[c]=vt(o));var d=o.elm=t.elm;if(r(t.isAsyncPlaceholder))n(o.asyncFactory.resolved)?O(t.elm,o,i):o.isAsyncPlaceholder=!0;else if(r(o.isStatic)&&r(t.isStatic)&&o.key===t.key&&(r(o.isCloned)||r(o.isOnce)))o.componentInstance=t.componentInstance;else {var p,v=o.data;n(v)&&n(p=v.hook)&&n(p=p.prepatch)&&p(t,o);var h=t.children,y=o.children;if(n(v)&&m(o)){for(p=0;p<s.update.length;++p)s.update[p](t,o);n(p=v.hook)&&n(p=p.update)&&p(t,o);}e(o.text)?n(h)&&n(y)?h!==y&&function(t,r,o,i,a){for(var s,c,l,d=0,p=0,v=r.length-1,h=r[0],m=r[v],y=o.length-1,g=o[0],b=o[y],$=!a;d<=v&&p<=y;)e(h)?h=r[++d]:e(m)?m=r[--v]:tr(h,g)?(A(h,g,i,o,p),h=r[++d],g=o[++p]):tr(m,b)?(A(m,b,i,o,y),m=r[--v],b=o[--y]):tr(h,b)?(A(h,b,i,o,y),$&&u.insertBefore(t,h.elm,u.nextSibling(m.elm)),h=r[++d],b=o[--y]):tr(m,g)?(A(m,g,i,o,p),$&&u.insertBefore(t,m.elm,h.elm),m=r[--v],g=o[++p]):(e(s)&&(s=er(r,d,v)),e(c=n(g.key)?s[g.key]:w(g,r,d,v))?f(g,i,t,h.elm,!1,o,p):tr(l=r[c],g)?(A(l,g,i,o,p),r[c]=void 0,$&&u.insertBefore(t,l.elm,h.elm)):f(g,i,t,h.elm,!1,o,p),g=o[++p]);d>v?_(t,e(o[y+1])?null:o[y+1].elm,o,p,y,i):p>y&&C(r,d,v);}(d,h,y,i,l):n(y)?(n(t.text)&&u.setTextContent(d,""),_(d,null,y,0,y.length-1,i)):n(h)?C(h,0,h.length-1):n(t.text)&&u.setTextContent(d,""):t.text!==o.text&&u.setTextContent(d,o.text),n(v)&&n(p=v.hook)&&n(p=p.postpatch)&&p(t,o);}}}function x(t,e,o){if(r(o)&&n(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i]);}var k=d("attrs,class,staticClass,staticStyle,key");function O(t,e,o,i){var a,s=e.tag,c=e.data,u=e.children;if(i=i||c&&c.pre,e.elm=t,r(e.isComment)&&n(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(e,!0),n(a=e.componentInstance)))return p(e,o),!0;if(n(s)){if(n(u))if(t.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==t.innerHTML)return !1}else {for(var l=!0,f=t.firstChild,d=0;d<u.length;d++){if(!f||!O(f,u[d],o,i)){l=!1;break}f=f.nextSibling;}if(!l||f)return !1}else h(e,u,o);if(n(c)){var v=!1;for(var m in c)if(!k(m)){v=!0,y(e,o);break}!v&&c.class&&Yt(c.class);}}else t.data!==e.text&&(t.data=e.text);return !0}return function(t,o,i,a){if(!e(o)){var c,l=!1,d=[];if(e(t))l=!0,f(o,d);else {var p=n(t.nodeType);if(!p&&tr(t,o))A(t,o,d,null,null,a);else {if(p){if(1===t.nodeType&&t.hasAttribute(D)&&(t.removeAttribute(D),i=!0),r(i)&&O(t,o,d))return x(o,d,!0),t;c=t,t=new lt(u.tagName(c).toLowerCase(),{},[],void 0,c);}var v=t.elm,h=u.parentNode(v);if(f(o,d,v._leaveCb?null:h,u.nextSibling(v)),n(o.parent))for(var y=o.parent,g=m(o);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=o.elm,g){for(var $=0;$<s.create.length;++$)s.create[$](Qn,y);var w=y.data.hook.insert;if(w.merged)for(var k=1;k<w.fns.length;k++)w.fns[k]();}else Jn(y);y=y.parent;}n(h)?C([t],0,0):n(t.tag)&&b(t);}}return x(o,d,l),o.elm}n(t)&&b(t);}})({nodeOps:Gn,modules:[dr,hr,Ar,Or,Fr,{}].concat(cr)});var po={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?re(n,"postpatch",function(){po.componentUpdated(t,e,n);}):vo(t,e,n.context),t._vOptions=[].map.call(t.options,yo)):("textarea"===n.tag||Xn(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",go),t.addEventListener("compositionend",_o),t.addEventListener("change",_o),q));},componentUpdated:function(t,e,n){if("select"===n.tag){vo(t,e,n.context);var r=t._vOptions,o=t._vOptions=[].map.call(t.options,yo);if(o.some(function(t,e){return !T(t,r[e])}))(t.multiple?e.value.some(function(t){return mo(t,o)}):e.value!==e.oldValue&&mo(e.value,o))&&bo(t,"change");}}};function vo(t,e,n){ho(t,e);}function ho(t,e,n){var r=e.value,o=t.multiple;if(!o||Array.isArray(r)){for(var i,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],o)i=j(r,yo(a))>-1,a.selected!==i&&(a.selected=i);else if(T(yo(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));o||(t.selectedIndex=-1);}}function mo(t,e){return e.every(function(e){return !T(e,t)})}function yo(t){return "_value"in t?t._value:t.value}function go(t){t.target.composing=!0;}function _o(t){t.target.composing&&(t.target.composing=!1,bo(t.target,"input"));}function bo(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n);}function Co(t){return !t.componentInstance||t.data&&t.data.transition?t:Co(t.componentInstance._vnode)}var $o={model:po,show:{bind:function(t,e,n){var r=e.value,o=(n=Co(n)).data&&n.data.transition,i=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&o?(n.data.show=!0,ao(n,function(){t.style.display=i;})):t.style.display=r?i:"none";},update:function(t,e,n){var r=e.value;!r!=!e.oldValue&&((n=Co(n)).data&&n.data.transition?(n.data.show=!0,r?ao(n,function(){t.style.display=t.__vOriginalDisplay;}):so(n,function(){t.style.display="none";})):t.style.display=r?t.__vOriginalDisplay:"none");},unbind:function(t,e,n,r,o){o||(t.style.display=t.__vOriginalDisplay);}}},wo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ao(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ao(He(e.children)):t}function xo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var i in o)e[_(i)]=o[i];return e}function ko(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var Oo=function(t){return t.tag||le(t)},So=function(t){return "show"===t.name},Eo={name:"transition",props:wo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Oo)).length){var r=this.mode,i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return !0}(this.$vnode))return i;var a=Ao(i);if(!a)return i;if(this._leaving)return ko(t,i);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=xo(this),u=this._vnode,l=Ao(u);if(a.data.directives&&a.data.directives.some(So)&&(a.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(a,l)&&!le(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=x({},c);if("out-in"===r)return this._leaving=!0,re(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate();}),ko(t,i);if("in-out"===r){if(le(a))return u;var d,p=function(){d();};re(c,"afterEnter",p),re(c,"enterCancelled",p),re(f,"delayLeave",function(t){d=t;});}}return i}}},To=x({tag:String,moveClass:String},wo);function jo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb();}function Io(t){t.data.newPos=t.elm.getBoundingClientRect();}function Do(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s";}}delete To.mode;var No={Transition:Eo,TransitionGroup:{props:To,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var o=Xe(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,o(),e.call(t,n,r);};},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,o=this.$slots.default||[],i=this.children=[],a=xo(this),s=0;s<o.length;s++){var c=o[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(i.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a);}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d);}this.kept=t(e,null,u),this.removed=l;}return t(e,null,i)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(jo),t.forEach(Io),t.forEach(Do),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;Yr(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Xr,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Xr,t),n._moveCb=null,to(n,e));});}}));},methods:{hasMove:function(t,e){return !1;}}}};Cn.config.mustUseProp=function(t,e,n){return "value"===n&&Tn(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Cn.config.isReservedTag=qn,Cn.config.isReservedAttr=En,Cn.config.getTagNamespace=function(t){return Wn(t)?"svg":"math"===t?"math":void 0},Cn.config.isUnknownElement=function(t){return !0;},x(Cn.options.directives,$o),x(Cn.options.components,No),Cn.prototype.__patch__=O,Cn.prototype.$mount=function(t,e){return function(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=dt),Je(t,"beforeMount"),r=function(){t._update(t._render(),n);},new ln(t,r,O,{before:function(){t._isMounted&&!t._isDestroyed&&Je(t,"beforeUpdate");}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Je(t,"mounted")),t}(this,t=t&&U?function(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}(t):void 0,e)},vue_runtime_common_prod.exports=Cn;

{
  vue_runtime_common.exports = vue_runtime_common_prod.exports;
}

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(defu);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloLink);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(destr);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloCacheInmemory);

/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */

var index$2 = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;

    var ref$1 = slots();
    var defaultSlot = ref$1.default; if ( defaultSlot === void 0 ) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['no-ssr-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () { return h(false); }) : h(false)
  }
};

var vueNoSsr_common = index$2;

/*!
 * vue-client-only v0.0.0-semantic-release
 * (c) 2021-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */

var index$1 = {
  name: 'ClientOnly',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;

    var ref$1 = slots();
    var defaultSlot = ref$1.default; if ( defaultSlot === void 0 ) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['client-only-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () { return h(false); }) : h(false)
  }
};

var vueClientOnly_common = index$1;

/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ','); };

function decode (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
  }
  return str
}

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value)
      ? value.map(castQueryParamValue)
      : castQueryParamValue(value);
  }
  return parsedQuery
}

var castQueryParamValue = function (value) { return (value == null || typeof value === 'object' ? value : String(value)); };

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj
    ? Object.keys(obj)
      .map(function (key) {
        var val = obj[key];

        if (val === undefined) {
          return ''
        }

        if (val === null) {
          return encode(key)
        }

        if (Array.isArray(val)) {
          var result = [];
          val.forEach(function (val2) {
            if (val2 === undefined) {
              return
            }
            if (val2 === null) {
              result.push(encode(key));
            } else {
              result.push(encode(key) + '=' + encode(val2));
            }
          });
          return result.join('&')
        }

        return encode(key) + '=' + encode(val)
      })
      .filter(function (x) { return x.length > 0; })
      .join('&')
    : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b, onlyPath) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath ||
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query))
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      (onlyPath || (
        a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params))
      )
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) { return false }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) { return aVal === bVal }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

function handleRouteEntered (route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) { continue }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) { cbs[i$1](instance); }
      }
    }
  }
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
  }
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/+/g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else ;
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install$1 (Vue) {
  if (install$1.installed && _Vue === Vue) { return }
  install$1.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = "undefined" !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap,
  parentRoute
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    alias: route.alias
      ? typeof route.alias === 'string'
        ? [route.alias]
        : route.alias
      : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function addRoute (parentOrRoute, route) {
    var parent = (typeof parentOrRoute !== 'object') ? nameMap[parentOrRoute] : undefined;
    // $flow-disable-line
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);

    // add aliases of parent
    if (parent && parent.alias.length) {
      createRouteMap(
        // $flow-disable-line route is defined if parent is
        parent.alias.map(function (alias) { return ({ path: alias, children: [route] }); }),
        pathList,
        pathMap,
        nameMap,
        parent
      );
    }
  }

  function getRoutes () {
    return pathList.map(function (path) { return pathMap[path]; })
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params);
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      nameMap[name];
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params);
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params);
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState =
  inBrowser ;

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  );
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isNavigationFailure (err, errorType) {
  return (
    isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
  )
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1$1 = this;

  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e
  }
  var prev = this.current;
  this.confirmTransition(
    route,
    function () {
      this$1$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1$1.ensureURL();
      this$1$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1$1.ready) {
        this$1$1.ready = true;
        this$1$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1$1.ready) {
        // Initial redirection should not mark the history as ready yet
        // because it's triggered by the redirection instead
        // https://github.com/vuejs/vue-router/issues/3225
        // https://github.com/vuejs/vue-router/issues/3331
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this$1$1.ready = true;
          this$1$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1$1 = this;

  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1$1.errorCbs.length) {
        this$1$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    if (route.hash) {
      handleScroll(this.router, current, route, false);
    }
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  var iterator = function (hook, next) {
    if (this$1$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1$1.replace(to);
          } else {
            this$1$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1$1.pending = null;
      onComplete(route);
      if (this$1$1.router.app) {
        this$1$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardown = function teardown () {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};

function normalizeBase (base) {
  if (!base) {
    {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    })
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    router.options.scrollBehavior;

    var handleRoutingEvent = function () {
      this$1$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1$1.base);
      if (this$1$1.current === START && location === this$1$1._startLocation) {
        return
      }

      this$1$1.transitionTo(location, function (route) {
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  var pathLowerCase = path.toLowerCase();
  var baseLowerCase = base.toLowerCase();
  // base="/a" shouldn't turn path="/app" into "/a/pp"
  // https://github.com/vuejs/vue-router/issues/3555
  // so we ensure the trailing slash in the base
  if (base && ((pathLowerCase === baseLowerCase) ||
    (pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0))) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    router.options.scrollBehavior;

    var handleRoutingEvent = function () {
      this$1$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1$1.transitionTo(getHash(), function (route) {
        {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
        this$1$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        var prev = this$1$1.current;
        this$1$1.index = targetIndex;
        this$1$1.updateRoute(route);
        this$1$1.router.afterHooks.forEach(function (hook) {
          hook && hook(route, prev);
        });
      },
      function (err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};
  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1$1 = this;

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1$1.apps.indexOf(app);
    if (index > -1) { this$1$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1$1.app === app) { this$1$1.app = this$1$1.apps[0] || null; }

    if (!this$1$1.app) { this$1$1.history.teardown(); }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      history.current;
      this$1$1.options.scrollBehavior;
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    );
  }

  history.listen(function (route) {
    this$1$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply(
    [],
    route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    })
  )
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.getRoutes = function getRoutes () {
  return this.matcher.getRoutes()
};

VueRouter.prototype.addRoute = function addRoute (parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install$1;
VueRouter.version = '3.5.3';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;

var vueRouter_common = VueRouter;

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(suncalc);

var vueApollo_umd = {exports: {}};

const require$$13 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(graphqlTag);

(function (module, exports) {
(function (global, factory) {
  factory(exports, require$$13) ;
}(commonjsGlobal, (function (exports, gql) {
  gql = gql && Object.prototype.hasOwnProperty.call(gql, 'default') ? gql['default'] : gql;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var index_umd = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
       factory(exports) ;
    })(commonjsGlobal$1, function (exports) {
      /* eslint-disable no-undefined,no-param-reassign,no-shadow */

      /**
       * Throttle execution of a function. Especially useful for rate limiting
       * execution of handlers on events like resize and scroll.
       *
       * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
       * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
       *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
       *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
       *                                    the internal counter is reset).
       * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
       *                                    to `callback` when the throttled-function is executed.
       * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
       *                                    schedule `callback` to execute after `delay` ms.
       *
       * @returns {Function}  A new, throttled, function.
       */

      function throttle(delay, noTrailing, callback, debounceMode) {
        /*
         * After wrapper has stopped being called, this timeout ensures that
         * `callback` is executed at the proper times in `throttle` and `end`
         * debounce modes.
         */
        var timeoutID;
        var cancelled = false; // Keep track of the last time `callback` was executed.

        var lastExec = 0; // Function to clear existing timeout

        function clearExistingTimeout() {
          if (timeoutID) {
            clearTimeout(timeoutID);
          }
        } // Function to cancel next exec


        function cancel() {
          clearExistingTimeout();
          cancelled = true;
        } // `noTrailing` defaults to falsy.


        if (typeof noTrailing !== 'boolean') {
          debounceMode = callback;
          callback = noTrailing;
          noTrailing = undefined;
        }
        /*
         * The `wrapper` function encapsulates all of the throttling / debouncing
         * functionality and when executed will limit the rate at which `callback`
         * is executed.
         */


        function wrapper() {
          for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
            arguments_[_key] = arguments[_key];
          }

          var self = this;
          var elapsed = Date.now() - lastExec;

          if (cancelled) {
            return;
          } // Execute `callback` and update the `lastExec` timestamp.


          function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
          }
          /*
           * If `debounceMode` is true (at begin) this is used to clear the flag
           * to allow future `callback` executions.
           */


          function clear() {
            timeoutID = undefined;
          }

          if (debounceMode && !timeoutID) {
            /*
             * Since `wrapper` is being called for the first time and
             * `debounceMode` is true (at begin), execute `callback`.
             */
            exec();
          }

          clearExistingTimeout();

          if (debounceMode === undefined && elapsed > delay) {
            /*
             * In throttle mode, if `delay` time has been exceeded, execute
             * `callback`.
             */
            exec();
          } else if (noTrailing !== true) {
            /*
             * In trailing throttle mode, since `delay` time has not been
             * exceeded, schedule `callback` to execute `delay` ms after most
             * recent execution.
             *
             * If `debounceMode` is true (at begin), schedule `clear` to execute
             * after `delay` ms.
             *
             * If `debounceMode` is false (at end), schedule `callback` to
             * execute after `delay` ms.
             */
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
          }
        }

        wrapper.cancel = cancel; // Return the wrapper function.

        return wrapper;
      }
      /* eslint-disable no-undefined */

      /**
       * Debounce execution of a function. Debouncing, unlike throttling,
       * guarantees that a function is only executed a single time, either at the
       * very beginning of a series of calls, or at the very end.
       *
       * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
       * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
       *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
       *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
       * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
       *                                  to `callback` when the debounced-function is executed.
       *
       * @returns {Function} A new, debounced function.
       */


      function debounce(delay, atBegin, callback) {
        return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
      }

      exports.debounce = debounce;
      exports.throttle = throttle;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
  });
  unwrapExports(index_umd);

  var utils = createCommonjsModule(function (module, exports) {
    var Globals = exports.Globals = {};

    function factory(action) {
      return function (cb, time) {
        return action(time, cb);
      };
    }

    exports.throttle = factory(index_umd.throttle);
    exports.debounce = factory(index_umd.debounce);

    exports.getMergedDefinition = function (def) {
      return Globals.Vue.util.mergeOptions({}, def);
    };

    exports.reapply = function (options, context) {
      while (typeof options === 'function') {
        options = options.call(context);
      }

      return options;
    };

    exports.omit = function (obj, properties) {
      return Object.entries(obj).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];

        return !properties.includes(key);
      }).reduce(function (c, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        c[key] = val;
        return c;
      }, {});
    };

    exports.addGqlError = function (error) {
      if (error.graphQLErrors && error.graphQLErrors.length) {
        error.gqlError = error.graphQLErrors[0];
      }
    }; // eslint-disable-next-line @typescript-eslint/no-empty-function


    exports.noop = function () {};
  });
  var utils_1 = utils.Globals;
  var utils_2 = utils.throttle;
  var utils_3 = utils.debounce;
  utils.getMergedDefinition;
  var utils_5 = utils.reapply;
  var utils_6 = utils.omit;
  var utils_7 = utils.addGqlError;
  utils.noop;

  var skippAllKeys = {
    query: '_skipAllQueries',
    subscription: '_skipAllSubscriptions'
  };

  var SmartApollo = /*#__PURE__*/function () {
    function SmartApollo(vm, key, options) {
      _classCallCheck(this, SmartApollo);

      _defineProperty(this, "type", null);

      _defineProperty(this, "vueApolloSpecialKeys", []);

      this.vm = vm;
      this.key = key;
      this.initialOptions = options;
      this.options = Object.assign({}, options);
      this._skip = false;
      this._pollInterval = null;
      this._watchers = [];
      this._destroyed = false;
      this.lastApolloOptions = null;
    }

    _createClass(SmartApollo, [{
      key: "autostart",
      value: function autostart() {
        var _this = this;

        if (typeof this.options.skip === 'function') {
          this._skipWatcher = this.vm.$watch(function () {
            return _this.options.skip.call(_this.vm, _this.vm, _this.key);
          }, this.skipChanged.bind(this), {
            immediate: true,
            deep: this.options.deep
          });
        } else if (!this.options.skip && !this.allSkip) {
          this.start();
        } else {
          this._skip = true;
        }

        if (typeof this.options.pollInterval === 'function') {
          this._pollWatcher = this.vm.$watch(this.options.pollInterval.bind(this.vm), this.pollIntervalChanged.bind(this), {
            immediate: true
          });
        }
      }
    }, {
      key: "pollIntervalChanged",
      value: function pollIntervalChanged(value, oldValue) {
        if (value !== oldValue) {
          this.pollInterval = value;

          if (value == null) {
            this.stopPolling();
          } else {
            this.startPolling(value);
          }
        }
      }
    }, {
      key: "skipChanged",
      value: function skipChanged(value, oldValue) {
        if (value !== oldValue) {
          this.skip = value;
        }
      }
    }, {
      key: "pollInterval",
      get: function get() {
        return this._pollInterval;
      },
      set: function set(value) {
        this._pollInterval = value;
      }
    }, {
      key: "skip",
      get: function get() {
        return this._skip;
      },
      set: function set(value) {
        if (value || this.allSkip) {
          this.stop();
        } else {
          this.start();
        }

        this._skip = value;
      }
    }, {
      key: "allSkip",
      get: function get() {
        return this.vm.$apollo[skippAllKeys[this.type]];
      }
    }, {
      key: "refresh",
      value: function refresh() {
        if (!this._skip) {
          this.stop();
          this.start();
        }
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        this.starting = true; // Reactive options

        var _loop = function _loop(_i2, _ref2) {
          var prop = _ref2[_i2];

          if (typeof _this2.initialOptions[prop] === 'function') {
            var queryCb = _this2.initialOptions[prop].bind(_this2.vm);

            _this2.options[prop] = queryCb();

            var cb = function cb(query) {
              _this2.options[prop] = query;

              _this2.refresh();
            };

            if (!_this2.vm.$isServer) {
              cb = _this2.options.throttle ? utils_2(cb, _this2.options.throttle) : cb;
              cb = _this2.options.debounce ? utils_3(cb, _this2.options.debounce) : cb;
            }

            _this2._watchers.push(_this2.vm.$watch(queryCb, cb, {
              deep: _this2.options.deep
            }));
          }
        };

        for (var _i2 = 0, _ref2 = ['query', 'document', 'context']; _i2 < _ref2.length; _i2++) {
          _loop(_i2, _ref2);
        } // GraphQL Variables


        if (typeof this.options.variables === 'function') {
          var cb = this.executeApollo.bind(this);

          if (!this.vm.$isServer) {
            cb = this.options.throttle ? utils_2(cb, this.options.throttle) : cb;
            cb = this.options.debounce ? utils_3(cb, this.options.debounce) : cb;
          }

          this._watchers.push(this.vm.$watch(function () {
            return typeof _this2.options.variables === 'function' ? _this2.options.variables.call(_this2.vm) : _this2.options.variables;
          }, cb, {
            immediate: true,
            deep: this.options.deep
          }));
        } else {
          this.executeApollo(this.options.variables);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        for (var _i4 = 0, _this$_watchers2 = this._watchers; _i4 < _this$_watchers2.length; _i4++) {
          var unwatch = _this$_watchers2[_i4];
          unwatch();
        }

        if (this.sub) {
          this.sub.unsubscribe();
          this.sub = null;
        }
      }
    }, {
      key: "generateApolloOptions",
      value: function generateApolloOptions(variables) {
        var apolloOptions = utils_6(this.options, this.vueApolloSpecialKeys);
        apolloOptions.variables = variables;
        this.lastApolloOptions = apolloOptions;
        return apolloOptions;
      }
    }, {
      key: "executeApollo",
      value: function executeApollo(variables) {
        this.starting = false;
      }
    }, {
      key: "nextResult",
      value: function nextResult(result) {
        var error = result.error;
        if (error) utils_7(error);
      }
    }, {
      key: "callHandlers",
      value: function callHandlers(handlers) {
        var catched = false;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var _i6 = 0; _i6 < handlers.length; _i6++) {
          var handler = handlers[_i6];

          if (handler) {
            catched = true;
            var result = handler.apply(this.vm, args);

            if (typeof result !== 'undefined' && !result) {
              break;
            }
          }
        }

        return catched;
      }
    }, {
      key: "errorHandler",
      value: function errorHandler() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.callHandlers.apply(this, [[this.options.error, this.vm.$apollo.error, this.vm.$apollo.provider.errorHandler]].concat(args));
      }
    }, {
      key: "catchError",
      value: function catchError(error) {
        utils_7(error);
        var catched = this.errorHandler(error, this.vm, this.key, this.type, this.lastApolloOptions);
        if (catched) return;

        if (error.graphQLErrors && error.graphQLErrors.length !== 0) {
          console.error("GraphQL execution errors for ".concat(this.type, " '").concat(this.key, "'"));

          for (var _i8 = 0, _error$graphQLErrors2 = error.graphQLErrors; _i8 < _error$graphQLErrors2.length; _i8++) {
            var e = _error$graphQLErrors2[_i8];
            console.error(e);
          }
        } else if (error.networkError) {
          console.error("Error sending the ".concat(this.type, " '").concat(this.key, "'"), error.networkError);
        } else {
          console.error("[vue-apollo] An error has occurred for ".concat(this.type, " '").concat(this.key, "'"));

          if (Array.isArray(error)) {
            var _console;

            (_console = console).error.apply(_console, _toConsumableArray(error));
          } else {
            console.error(error);
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this._destroyed) return;
        this._destroyed = true;
        this.stop();

        if (this._skipWatcher) {
          this._skipWatcher();
        }
      }
    }]);

    return SmartApollo;
  }();

  var VUE_APOLLO_QUERY_KEYWORDS = ['variables', 'watch', 'update', 'result', 'error', 'loadingKey', 'watchLoading', 'skip', 'throttle', 'debounce', 'subscribeToMore', 'prefetch', 'manual'];

  var SmartQuery = /*#__PURE__*/function (_SmartApollo) {
    _inherits(SmartQuery, _SmartApollo);

    var _super = _createSuper(SmartQuery);

    function SmartQuery(vm, key, options) {
      var _this;

      var autostart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      _classCallCheck(this, SmartQuery);

      // Add reactive data related to the query
      if (vm.$data.$apolloData && !vm.$data.$apolloData.queries[key]) {
        vm.$set(vm.$data.$apolloData.queries, key, {
          loading: false
        });
      }

      _this = _super.call(this, vm, key, options);

      _defineProperty(_assertThisInitialized(_this), "type", 'query');

      _defineProperty(_assertThisInitialized(_this), "vueApolloSpecialKeys", VUE_APOLLO_QUERY_KEYWORDS);

      _defineProperty(_assertThisInitialized(_this), "_loading", false);

      _defineProperty(_assertThisInitialized(_this), "_linkedSubscriptions", []);

      if (vm.$isServer) {
        _this.firstRun = new Promise(function (resolve, reject) {
          _this._firstRunResolve = resolve;
          _this._firstRunReject = reject;
        });
      }

      if (_this.vm.$isServer) {
        _this.options.fetchPolicy = 'network-only';
      }

      if (!options.manual) {
        _this.hasDataField = Object.prototype.hasOwnProperty.call(_this.vm.$data, key);

        if (_this.hasDataField) {
          Object.defineProperty(_this.vm.$data.$apolloData.data, key, {
            get: function get() {
              return _this.vm.$data[key];
            },
            enumerable: true,
            configurable: true
          });
        } else {
          Object.defineProperty(_this.vm.$data, key, {
            get: function get() {
              return _this.vm.$data.$apolloData.data[key];
            },
            enumerable: true,
            configurable: true
          });
        }
      }

      if (autostart) {
        _this.autostart();
      }

      return _this;
    }

    _createClass(SmartQuery, [{
      key: "client",
      get: function get() {
        return this.vm.$apollo.getClient(this.options);
      }
    }, {
      key: "loading",
      get: function get() {
        return this.vm.$data.$apolloData && this.vm.$data.$apolloData.queries[this.key] ? this.vm.$data.$apolloData.queries[this.key].loading : this._loading;
      },
      set: function set(value) {
        if (this._loading !== value) {
          this._loading = value;

          if (this.vm.$data.$apolloData && this.vm.$data.$apolloData.queries[this.key]) {
            this.vm.$data.$apolloData.queries[this.key].loading = value;
            this.vm.$data.$apolloData.loading += value ? 1 : -1;
          }
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        _get(_getPrototypeOf(SmartQuery.prototype), "stop", this).call(this);

        this.loadingDone();

        if (this.observer) {
          this.observer.stopPolling();
          this.observer = null;
        }
      }
    }, {
      key: "generateApolloOptions",
      value: function generateApolloOptions(variables) {
        var apolloOptions = _get(_getPrototypeOf(SmartQuery.prototype), "generateApolloOptions", this).call(this, variables);

        if (this.vm.$isServer) {
          // Don't poll on the server, that would run indefinitely
          delete apolloOptions.pollInterval;
        }

        return apolloOptions;
      }
    }, {
      key: "executeApollo",
      value: function executeApollo(variables) {
        var variablesJson = JSON.stringify(variables);

        if (this.sub) {
          if (variablesJson === this.previousVariablesJson) {
            return;
          }

          this.sub.unsubscribe(); // Subscribe to more subs

          for (var _i2 = 0, _this$_linkedSubscrip2 = this._linkedSubscriptions; _i2 < _this$_linkedSubscrip2.length; _i2++) {
            var sub = _this$_linkedSubscrip2[_i2];
            sub.stop();
          }
        }

        this.previousVariablesJson = variablesJson; // Create observer

        this.observer = this.vm.$apollo.watchQuery(this.generateApolloOptions(variables));
        this.startQuerySubscription();

        if (this.options.fetchPolicy !== 'no-cache' || this.options.notifyOnNetworkStatusChange) {
          var currentResult = this.retrieveCurrentResult();

          if (this.options.notifyOnNetworkStatusChange || // Initial call of next result when it's not loading (for Apollo Client 3)
          this.observer.getCurrentResult && !currentResult.loading) {
            this.nextResult(currentResult);
          }
        }

        _get(_getPrototypeOf(SmartQuery.prototype), "executeApollo", this).call(this, variables); // Subscribe to more subs


        for (var _i4 = 0, _this$_linkedSubscrip4 = this._linkedSubscriptions; _i4 < _this$_linkedSubscrip4.length; _i4++) {
          var _sub = _this$_linkedSubscrip4[_i4];

          _sub.start();
        }
      }
    }, {
      key: "startQuerySubscription",
      value: function startQuerySubscription() {
        if (this.sub && !this.sub.closed) return; // Create subscription

        this.sub = this.observer.subscribe({
          next: this.nextResult.bind(this),
          error: this.catchError.bind(this)
        });
      }
      /**
       * May update loading state
       */

    }, {
      key: "retrieveCurrentResult",
      value: function retrieveCurrentResult() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentResult = this.observer.getCurrentResult ? this.observer.getCurrentResult() : this.observer.currentResult();

        if (force || currentResult.loading) {
          if (!this.loading) {
            this.applyLoadingModifier(1);
          }

          this.loading = true;
        }

        return currentResult;
      }
    }, {
      key: "nextResult",
      value: function nextResult(result) {
        _get(_getPrototypeOf(SmartQuery.prototype), "nextResult", this).call(this, result);

        var data = result.data,
            loading = result.loading,
            error = result.error,
            errors = result.errors;
        var anyErrors = errors && errors.length;

        if (error || anyErrors) {
          this.firstRunReject(error);
        }

        if (!loading) {
          this.loadingDone();
        } // If `errorPolicy` is set to `all`, an error won't be thrown
        // Instead result will have an `errors` array of GraphQL Errors
        // so we need to reconstruct an error object similar to the normal one


        if (anyErrors) {
          var e = new Error("GraphQL error: ".concat(errors.map(function (e) {
            return e.message;
          }).join(' | ')));
          Object.assign(e, {
            graphQLErrors: errors,
            networkError: null
          }); // We skip query catchError logic
          // as we only want to dispatch the error

          _get(_getPrototypeOf(SmartQuery.prototype), "catchError", this).call(this, e);
        }

        if (this.observer.options.errorPolicy === 'none' && (error || anyErrors)) {
          // Don't apply result
          return;
        }

        var hasResultCallback = typeof this.options.result === 'function';

        if (data == null) ; else if (!this.options.manual) {
          if (typeof this.options.update === 'function') {
            this.setData(this.options.update.call(this.vm, data));
          } else if (typeof data[this.key] === 'undefined' && Object.keys(data).length) {
            console.error("Missing ".concat(this.key, " attribute on result"), data);
          } else {
            this.setData(data[this.key]);
          }
        } else if (!hasResultCallback) {
          console.error("".concat(this.key, " query must have a 'result' hook in manual mode"));
        }

        if (hasResultCallback) {
          this.options.result.call(this.vm, result, this.key);
        }
      }
    }, {
      key: "setData",
      value: function setData(value) {
        this.vm.$set(this.hasDataField ? this.vm.$data : this.vm.$data.$apolloData.data, this.key, value);
      }
    }, {
      key: "catchError",
      value: function catchError(error) {
        _get(_getPrototypeOf(SmartQuery.prototype), "catchError", this).call(this, error);

        this.firstRunReject(error);
        this.loadingDone(error);
        this.nextResult(this.observer.getCurrentResult ? this.observer.getCurrentResult() : this.observer.currentResult()); // The observable closes the sub if an error occurs

        this.resubscribeToQuery();
      }
    }, {
      key: "resubscribeToQuery",
      value: function resubscribeToQuery() {
        var lastError = this.observer.getLastError();
        var lastResult = this.observer.getLastResult();
        this.observer.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.observer, {
          lastError: lastError,
          lastResult: lastResult
        });
      }
    }, {
      key: "loadingKey",
      get: function get() {
        return this.options.loadingKey || this.vm.$apollo.loadingKey;
      }
    }, {
      key: "watchLoading",
      value: function watchLoading() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.callHandlers.apply(this, [[this.options.watchLoading, this.vm.$apollo.watchLoading, this.vm.$apollo.provider.watchLoading]].concat(args, [this]));
      }
    }, {
      key: "applyLoadingModifier",
      value: function applyLoadingModifier(value) {
        var loadingKey = this.loadingKey;

        if (loadingKey && typeof this.vm[loadingKey] === 'number') {
          this.vm[loadingKey] += value;
        }

        this.watchLoading(value === 1, value);
      }
    }, {
      key: "loadingDone",
      value: function loadingDone() {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (this.loading) {
          this.applyLoadingModifier(-1);
        }

        this.loading = false;

        if (!error) {
          this.firstRunResolve();
        }
      }
    }, {
      key: "fetchMore",
      value: function fetchMore() {
        var _this2 = this;

        if (this.observer) {
          var _this$observer;

          this.retrieveCurrentResult(true);
          return (_this$observer = this.observer).fetchMore.apply(_this$observer, arguments).then(function (result) {
            if (!result.loading) {
              _this2.loadingDone();
            }

            return result;
          });
        }
      }
    }, {
      key: "subscribeToMore",
      value: function subscribeToMore() {
        if (this.observer) {
          var _this$observer2;

          return {
            unsubscribe: (_this$observer2 = this.observer).subscribeToMore.apply(_this$observer2, arguments)
          };
        }
      }
    }, {
      key: "refetch",
      value: function refetch(variables) {
        var _this3 = this;

        variables && (this.options.variables = variables);

        if (this.observer) {
          var result = this.observer.refetch(variables).then(function (result) {
            if (!result.loading) {
              _this3.loadingDone();
            }

            return result;
          });
          this.retrieveCurrentResult();
          return result;
        }
      }
    }, {
      key: "setVariables",
      value: function setVariables(variables, tryFetch) {
        this.options.variables = variables;

        if (this.observer) {
          var result = this.observer.setVariables(variables, tryFetch);
          this.retrieveCurrentResult();
          return result;
        }
      }
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        Object.assign(this.options, options);

        if (this.observer) {
          var result = this.observer.setOptions(options);
          this.retrieveCurrentResult();
          return result;
        }
      }
    }, {
      key: "startPolling",
      value: function startPolling() {
        if (this.observer) {
          var _this$observer3;

          return (_this$observer3 = this.observer).startPolling.apply(_this$observer3, arguments);
        }
      }
    }, {
      key: "stopPolling",
      value: function stopPolling() {
        if (this.observer) {
          var _this$observer4;

          return (_this$observer4 = this.observer).stopPolling.apply(_this$observer4, arguments);
        }
      }
    }, {
      key: "firstRunResolve",
      value: function firstRunResolve() {
        if (this._firstRunResolve) {
          this._firstRunResolve();

          this._firstRunResolve = null;
        }
      }
    }, {
      key: "firstRunReject",
      value: function firstRunReject(error) {
        if (this._firstRunReject) {
          this._firstRunReject(error);

          this._firstRunReject = null;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(SmartQuery.prototype), "destroy", this).call(this);

        if (this.loading) {
          this.watchLoading(false, -1);
        }

        this.loading = false;
      }
    }]);

    return SmartQuery;
  }(SmartApollo);

  var SmartSubscription = /*#__PURE__*/function (_SmartApollo) {
    _inherits(SmartSubscription, _SmartApollo);

    var _super = _createSuper(SmartSubscription);

    function SmartSubscription(vm, key, options) {
      var _this;

      var autostart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      _classCallCheck(this, SmartSubscription);

      _this = _super.call(this, vm, key, options);

      _defineProperty(_assertThisInitialized(_this), "type", 'subscription');

      _defineProperty(_assertThisInitialized(_this), "vueApolloSpecialKeys", ['variables', 'result', 'error', 'throttle', 'debounce', 'linkedQuery']);

      if (autostart) {
        _this.autostart();
      }

      return _this;
    }

    _createClass(SmartSubscription, [{
      key: "generateApolloOptions",
      value: function generateApolloOptions(variables) {
        var apolloOptions = _get(_getPrototypeOf(SmartSubscription.prototype), "generateApolloOptions", this).call(this, variables);

        apolloOptions.onError = this.catchError.bind(this);
        return apolloOptions;
      }
    }, {
      key: "executeApollo",
      value: function executeApollo(variables) {
        var variablesJson = JSON.stringify(variables);

        if (this.sub) {
          // do nothing if subscription is already running using exactly the same variables
          if (variablesJson === this.previousVariablesJson) {
            return;
          }

          this.sub.unsubscribe();
        }

        this.previousVariablesJson = variablesJson;
        var apolloOptions = this.generateApolloOptions(variables);

        if (typeof apolloOptions.updateQuery === 'function') {
          apolloOptions.updateQuery = apolloOptions.updateQuery.bind(this.vm);
        }

        if (this.options.linkedQuery) {
          if (typeof this.options.result === 'function') {
            var rcb = this.options.result.bind(this.vm);
            var ucb = apolloOptions.updateQuery && apolloOptions.updateQuery.bind(this.vm);

            apolloOptions.updateQuery = function () {
              rcb.apply(void 0, arguments);
              return ucb && ucb.apply(void 0, arguments);
            };
          }

          this.sub = this.options.linkedQuery.subscribeToMore(apolloOptions);
        } else {
          // Create observer
          this.observer = this.vm.$apollo.subscribe(apolloOptions); // Create subscription

          this.sub = this.observer.subscribe({
            next: this.nextResult.bind(this),
            error: this.catchError.bind(this)
          });
        }

        _get(_getPrototypeOf(SmartSubscription.prototype), "executeApollo", this).call(this, variables);
      }
    }, {
      key: "nextResult",
      value: function nextResult(data) {
        _get(_getPrototypeOf(SmartSubscription.prototype), "nextResult", this).call(this, data);

        if (typeof this.options.result === 'function') {
          this.options.result.call(this.vm, data, this.key);
        }
      }
    }, {
      key: "catchError",
      value: function catchError(error) {
        _get(_getPrototypeOf(SmartSubscription.prototype), "catchError", this).call(this, error); // Restart the subscription


        if (!this.skip) {
          this.stop();
          this.start();
        }
      }
    }]);

    return SmartSubscription;
  }(SmartApollo);

  var DollarApollo = /*#__PURE__*/function () {
    function DollarApollo(vm) {
      _classCallCheck(this, DollarApollo);

      this._apolloSubscriptions = [];
      this._watchers = [];
      this.vm = vm;
      this.queries = {};
      this.subscriptions = {};
      this.client = undefined;
      this.loadingKey = undefined;
      this.error = undefined;
    }

    _createClass(DollarApollo, [{
      key: "provider",
      get: function get() {
        return this.vm.$apolloProvider;
      }
    }, {
      key: "getClient",
      value: function getClient() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!options || !options.client) {
          if (_typeof(this.client) === 'object') {
            return this.client;
          }

          if (this.client) {
            if (!this.provider.clients) {
              throw new Error('[vue-apollo] Missing \'clients\' options in \'apolloProvider\'');
            } else {
              var _client = this.provider.clients[this.client];

              if (!_client) {
                throw new Error("[vue-apollo] Missing client '".concat(this.client, "' in 'apolloProvider'"));
              }

              return _client;
            }
          }

          return this.provider.defaultClient;
        }

        var client = this.provider.clients[options.client];

        if (!client) {
          throw new Error("[vue-apollo] Missing client '".concat(options.client, "' in 'apolloProvider'"));
        }

        return client;
      }
    }, {
      key: "query",
      value: function query(options) {
        return this.getClient(options).query(options);
      }
    }, {
      key: "watchQuery",
      value: function watchQuery(options) {
        var _this = this;

        var observable = this.getClient(options).watchQuery(options);

        var _subscribe = observable.subscribe.bind(observable);

        observable.subscribe = function (options) {
          var sub = _subscribe(options);

          _this._apolloSubscriptions.push(sub);

          return sub;
        };

        return observable;
      }
    }, {
      key: "mutate",
      value: function mutate(options) {
        return this.getClient(options).mutate(options);
      }
    }, {
      key: "subscribe",
      value: function subscribe(options) {
        var _this2 = this;

        if (!this.vm.$isServer) {
          var observable = this.getClient(options).subscribe(options);

          var _subscribe = observable.subscribe.bind(observable);

          observable.subscribe = function (options) {
            var sub = _subscribe(options);

            _this2._apolloSubscriptions.push(sub);

            return sub;
          };

          return observable;
        }
      }
    }, {
      key: "loading",
      get: function get() {
        return this.vm.$data.$apolloData.loading !== 0;
      }
    }, {
      key: "data",
      get: function get() {
        return this.vm.$data.$apolloData.data;
      }
    }, {
      key: "addSmartQuery",
      value: function addSmartQuery(key, options) {
        var _this3 = this;

        var finalOptions = utils_5(options, this.vm); // Simple query

        if (!finalOptions.query) {
          var query = finalOptions;
          finalOptions = {
            query: query
          };
        }

        var apollo = this.vm.$options.apollo;
        var defaultOptions = this.provider.defaultOptions;
        var $query;

        if (defaultOptions && defaultOptions.$query) {
          $query = defaultOptions.$query;
        }

        if (apollo && apollo.$query) {
          $query = _objectSpread2(_objectSpread2({}, $query || {}), apollo.$query);
        }

        if ($query) {
          // Also replaces 'undefined' values
          for (var _key in $query) {
            if (typeof finalOptions[_key] === 'undefined') {
              finalOptions[_key] = $query[_key];
            }
          }
        }

        var smart = this.queries[key] = new SmartQuery(this.vm, key, finalOptions, false);

        if (!this.vm.$isServer || finalOptions.prefetch !== false) {
          smart.autostart();
        }

        if (!this.vm.$isServer) {
          var subs = finalOptions.subscribeToMore;

          if (subs) {
            if (Array.isArray(subs)) {
              subs.forEach(function (sub, index) {
                _this3.addSmartSubscription("".concat(key).concat(index), _objectSpread2(_objectSpread2({}, sub), {}, {
                  linkedQuery: smart
                }));
              });
            } else {
              this.addSmartSubscription(key, _objectSpread2(_objectSpread2({}, subs), {}, {
                linkedQuery: smart
              }));
            }
          }
        }

        return smart;
      }
    }, {
      key: "addSmartSubscription",
      value: function addSmartSubscription(key, options) {
        if (!this.vm.$isServer) {
          options = utils_5(options, this.vm);
          var smart = this.subscriptions[key] = new SmartSubscription(this.vm, key, options, false);
          smart.autostart();

          if (options.linkedQuery) {
            options.linkedQuery._linkedSubscriptions.push(smart);
          }

          return smart;
        }
      }
    }, {
      key: "defineReactiveSetter",
      value: function defineReactiveSetter(key, func, deep) {
        var _this4 = this;

        this._watchers.push(this.vm.$watch(func, function (value) {
          _this4[key] = value;
        }, {
          immediate: true,
          deep: deep
        }));
      } // eslint-disable-next-line accessor-pairs

    }, {
      key: "skipAllQueries",
      set: function set(value) {
        this._skipAllQueries = value;

        for (var key in this.queries) {
          this.queries[key].skip = value;
        }
      } // eslint-disable-next-line accessor-pairs

    }, {
      key: "skipAllSubscriptions",
      set: function set(value) {
        this._skipAllSubscriptions = value;

        for (var key in this.subscriptions) {
          this.subscriptions[key].skip = value;
        }
      } // eslint-disable-next-line accessor-pairs

    }, {
      key: "skipAll",
      set: function set(value) {
        this.skipAllQueries = value;
        this.skipAllSubscriptions = value;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        for (var _i2 = 0, _this$_watchers2 = this._watchers; _i2 < _this$_watchers2.length; _i2++) {
          var unwatch = _this$_watchers2[_i2];
          unwatch();
        }

        for (var key in this.queries) {
          this.queries[key].destroy();
        }

        for (var _key2 in this.subscriptions) {
          this.subscriptions[_key2].destroy();
        }

        this._apolloSubscriptions.forEach(function (sub) {
          sub.unsubscribe();
        });
      }
    }]);

    return DollarApollo;
  }();

  var ApolloProvider = /*#__PURE__*/function () {
    function ApolloProvider(options) {
      _classCallCheck(this, ApolloProvider);

      if (!options) {
        throw new Error('Options argument required');
      }

      this.clients = options.clients || {};

      if (options.defaultClient) {
        this.clients.defaultClient = this.defaultClient = options.defaultClient;
      }

      this.defaultOptions = options.defaultOptions;
      this.watchLoading = options.watchLoading;
      this.errorHandler = options.errorHandler;
      this.prefetch = options.prefetch;
    }

    _createClass(ApolloProvider, [{
      key: "provide",
      value: function provide() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$apolloProvider';
        console.warn('<ApolloProvider>.provide() is deprecated. Use the \'apolloProvider\' option instead with the provider object directly.');
        return _defineProperty({}, key, this);
      }
    }]);

    return ApolloProvider;
  }();

  function isDataFilled(data) {
    return data && Object.keys(data).length > 0;
  }

  var CApolloQuery = {
    name: 'ApolloQuery',
    provide: function provide() {
      return {
        getDollarApollo: this.getDollarApollo,
        getApolloQuery: this.getApolloQuery
      };
    },
    props: {
      query: {
        type: [Function, Object],
        required: true
      },
      variables: {
        type: Object,
        "default": undefined
      },
      fetchPolicy: {
        type: String,
        "default": undefined
      },
      pollInterval: {
        type: Number,
        "default": undefined
      },
      notifyOnNetworkStatusChange: {
        type: Boolean,
        "default": undefined
      },
      context: {
        type: Object,
        "default": undefined
      },
      update: {
        type: Function,
        "default": function _default(data) {
          return data;
        }
      },
      skip: {
        type: Boolean,
        "default": false
      },
      debounce: {
        type: Number,
        "default": 0
      },
      throttle: {
        type: Number,
        "default": 0
      },
      clientId: {
        type: String,
        "default": undefined
      },
      deep: {
        type: Boolean,
        "default": undefined
      },
      tag: {
        type: String,
        "default": 'div'
      },
      prefetch: {
        type: Boolean,
        "default": true
      },
      options: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    },
    data: function data() {
      return {
        result: {
          data: null,
          loading: false,
          networkStatus: 7,
          error: null
        },
        times: 0
      };
    },
    watch: {
      fetchPolicy: function fetchPolicy(value) {
        this.$apollo.queries.query.setOptions({
          fetchPolicy: value
        });
      },
      pollInterval: function pollInterval(value) {
        this.$apollo.queries.query.setOptions({
          pollInterval: value
        });
      },
      notifyOnNetworkStatusChange: function notifyOnNetworkStatusChange(value) {
        this.$apollo.queries.query.setOptions({
          notifyOnNetworkStatusChange: value
        });
      },
      '$data.$apolloData.loading': function $data$apolloDataLoading(value) {
        this.$emit('loading', !!value);
      }
    },
    apollo: {
      $client: function $client() {
        return this.clientId;
      },
      query: function query() {
        return _objectSpread2(_objectSpread2({
          query: function query() {
            if (typeof this.query === 'function') {
              return this.query(gql);
            }

            return this.query;
          },
          variables: function variables() {
            return this.variables;
          },
          fetchPolicy: this.fetchPolicy,
          pollInterval: this.pollInterval,
          debounce: this.debounce,
          throttle: this.throttle,
          notifyOnNetworkStatusChange: this.notifyOnNetworkStatusChange,
          context: function context() {
            return this.context;
          },
          skip: function skip() {
            return this.skip;
          },
          deep: this.deep,
          prefetch: this.prefetch
        }, this.options), {}, {
          manual: true,
          result: function result(_result) {
            var _result2 = _result,
                errors = _result2.errors,
                loading = _result2.loading,
                networkStatus = _result2.networkStatus;
            var _result3 = _result,
                error = _result3.error;
            _result = Object.assign({}, _result);

            if (errors && errors.length) {
              error = new Error("Apollo errors occurred (".concat(errors.length, ")"));
              error.graphQLErrors = errors;
            }

            var data = {};

            if (loading) {
              Object.assign(data, this.$_previousData, _result.data);
            } else if (error) {
              Object.assign(data, this.$apollo.queries.query.observer.getLastResult() || {}, _result.data);
            } else {
              data = _result.data;
              this.$_previousData = _result.data;
            }

            var dataNotEmpty = isDataFilled(data);
            this.result = {
              data: dataNotEmpty ? this.update(data) : undefined,
              fullData: dataNotEmpty ? data : undefined,
              loading: loading,
              error: error,
              networkStatus: networkStatus
            };
            this.times = ++this.$_times;
            this.$emit('result', this.result);
          },
          error: function error(_error) {
            this.result.loading = false;
            this.result.error = _error;
            this.$emit('error', _error);
          }
        });
      }
    },
    created: function created() {
      this.$_times = 0;
    },
    methods: {
      getDollarApollo: function getDollarApollo() {
        return this.$apollo;
      },
      getApolloQuery: function getApolloQuery() {
        return this.$apollo.queries.query;
      }
    },
    render: function render(h) {
      var result = this.$scopedSlots["default"]({
        result: this.result,
        times: this.times,
        query: this.$apollo.queries.query,
        isLoading: this.$apolloData.loading,
        gqlError: this.result && this.result.error && this.result.error.gqlError
      });

      if (Array.isArray(result)) {
        result = result.concat(this.$slots["default"]);
      } else {
        result = [result].concat(this.$slots["default"]);
      }

      return this.tag ? h(this.tag, result) : result[0];
    }
  };

  var uid = 0;
  var CApolloSubscribeToMore = {
    name: 'ApolloSubscribeToMore',
    inject: ['getDollarApollo', 'getApolloQuery'],
    props: {
      document: {
        type: [Function, Object],
        required: true
      },
      variables: {
        type: Object,
        "default": undefined
      },
      updateQuery: {
        type: Function,
        "default": undefined
      }
    },
    watch: {
      document: 'refresh',
      variables: 'refresh'
    },
    created: function created() {
      this.$_key = "sub_component_".concat(uid++);
    },
    mounted: function mounted() {
      this.refresh();
    },
    beforeDestroy: function beforeDestroy() {
      this.destroy();
    },
    methods: {
      destroy: function destroy() {
        if (this.$_sub) {
          this.$_sub.destroy();
        }
      },
      refresh: function refresh() {
        this.destroy();
        var document = this.document;

        if (typeof document === 'function') {
          document = document(gql);
        }

        this.$_sub = this.getDollarApollo().addSmartSubscription(this.$_key, {
          document: document,
          variables: this.variables,
          updateQuery: this.updateQuery,
          linkedQuery: this.getApolloQuery()
        });
      }
    },
    render: function render(h) {
      return null;
    }
  };

  var CApolloMutation = {
    props: {
      mutation: {
        type: [Function, Object],
        required: true
      },
      variables: {
        type: Object,
        "default": undefined
      },
      optimisticResponse: {
        type: Object,
        "default": undefined
      },
      update: {
        type: Function,
        "default": undefined
      },
      refetchQueries: {
        type: Function,
        "default": undefined
      },
      clientId: {
        type: String,
        "default": undefined
      },
      tag: {
        type: String,
        "default": 'div'
      },
      context: {
        type: Object,
        "default": undefined
      }
    },
    data: function data() {
      return {
        loading: false,
        error: null
      };
    },
    watch: {
      loading: function loading(value) {
        this.$emit('loading', value);
      }
    },
    methods: {
      mutate: function mutate(options) {
        var _this = this;

        this.loading = true;
        this.error = null;
        var mutation = this.mutation;

        if (typeof mutation === 'function') {
          mutation = mutation(gql);
        }

        return this.$apollo.mutate(_objectSpread2({
          mutation: mutation,
          client: this.clientId,
          variables: this.variables,
          optimisticResponse: this.optimisticResponse,
          update: this.update,
          refetchQueries: this.refetchQueries,
          context: this.context
        }, options)).then(function (result) {
          _this.$emit('done', result);

          _this.loading = false;
        })["catch"](function (e) {
          utils_7(e);
          _this.error = e;

          _this.$emit('error', e);

          _this.loading = false;
        });
      }
    },
    render: function render(h) {
      var result = this.$scopedSlots["default"]({
        mutate: this.mutate,
        loading: this.loading,
        error: this.error,
        gqlError: this.error && this.error.gqlError
      });

      if (Array.isArray(result)) {
        result = result.concat(this.$slots["default"]);
      } else {
        result = [result].concat(this.$slots["default"]);
      }

      return this.tag ? h(this.tag, result) : result[0];
    }
  };

  function hasProperty(holder, key) {
    return typeof holder !== 'undefined' && Object.prototype.hasOwnProperty.call(holder, key);
  }

  function initProvider() {
    var options = this.$options; // ApolloProvider injection

    var optionValue = options.apolloProvider;

    if (optionValue) {
      this.$apolloProvider = typeof optionValue === 'function' ? optionValue() : optionValue;
    } else if (options.parent && options.parent.$apolloProvider) {
      this.$apolloProvider = options.parent.$apolloProvider;
    } else if (options.provide) {
      // TODO remove
      // Temporary retro-compatibility
      var provided = typeof options.provide === 'function' ? options.provide.call(this) : options.provide;

      if (provided && provided.$apolloProvider) {
        this.$apolloProvider = provided.$apolloProvider;
      }
    }
  }

  function proxyData() {
    var _this = this;

    this.$_apolloInitData = {};
    var apollo = this.$options.apollo;

    if (apollo) {
      var _loop = function _loop(key) {
        if (key.charAt(0) !== '$') {
          var options = apollo[key]; // Property proxy

          if (!options.manual && !hasProperty(_this.$options.props, key) && !hasProperty(_this.$options.computed, key) && !hasProperty(_this.$options.methods, key)) {
            Object.defineProperty(_this, key, {
              get: function get() {
                return _this.$data.$apolloData.data[key];
              },
              // For component class constructor
              set: function set(value) {
                return _this.$_apolloInitData[key] = value;
              },
              enumerable: true,
              configurable: true
            });
          }
        }
      };

      // watchQuery
      for (var key in apollo) {
        _loop(key);
      }
    }
  }

  function launch() {
    var _this2 = this;

    var apolloProvider = this.$apolloProvider;
    if (this._apolloLaunched || !apolloProvider) return;
    this._apolloLaunched = true; // Prepare properties

    var apollo = this.$options.apollo;

    if (apollo) {
      this.$_apolloPromises = [];

      if (!apollo.$init) {
        apollo.$init = true; // Default options applied to `apollo` options

        if (apolloProvider.defaultOptions) {
          apollo = this.$options.apollo = Object.assign({}, apolloProvider.defaultOptions, apollo);
        }
      }

      defineReactiveSetter(this.$apollo, 'skipAll', apollo.$skipAll, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'skipAllQueries', apollo.$skipAllQueries, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'skipAllSubscriptions', apollo.$skipAllSubscriptions, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'client', apollo.$client, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'loadingKey', apollo.$loadingKey, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'error', apollo.$error, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'watchLoading', apollo.$watchLoading, apollo.$deep); // Apollo Data

      Object.defineProperty(this, '$apolloData', {
        get: function get() {
          return _this2.$data.$apolloData;
        },
        enumerable: true,
        configurable: true
      }); // watchQuery

      for (var key in apollo) {
        if (key.charAt(0) !== '$') {
          var options = apollo[key];
          var smart = this.$apollo.addSmartQuery(key, options);

          if (this.$isServer) {
            options = utils_5(options, this);

            if (apolloProvider.prefetch !== false && options.prefetch !== false && apollo.$prefetch !== false && !smart.skip) {
              this.$_apolloPromises.push(smart.firstRun);
            }
          }
        }
      }

      if (apollo.subscribe) {
        utils_1.Vue.util.warn('vue-apollo -> `subscribe` option is deprecated. Use the `$subscribe` option instead.');
      }

      if (apollo.$subscribe) {
        for (var _key in apollo.$subscribe) {
          this.$apollo.addSmartSubscription(_key, apollo.$subscribe[_key]);
        }
      }
    }
  }

  function defineReactiveSetter($apollo, key, value, deep) {
    if (typeof value !== 'undefined') {
      if (typeof value === 'function') {
        $apollo.defineReactiveSetter(key, value, deep);
      } else {
        $apollo[key] = value;
      }
    }
  }

  function destroy() {
    if (this.$_apollo) {
      this.$_apollo.destroy();
    }
  }

  function installMixin(Vue, vueVersion) {
    Vue.mixin(_objectSpread2(_objectSpread2(_objectSpread2({}, vueVersion === '1' ? {
      init: initProvider
    } : {}), vueVersion === '2' ? {
      data: function data() {
        return {
          $apolloData: {
            queries: {},
            loading: 0,
            data: this.$_apolloInitData
          }
        };
      },
      beforeCreate: function beforeCreate() {
        initProvider.call(this);
        proxyData.call(this);
      },
      serverPrefetch: function serverPrefetch() {
        var _this3 = this;

        if (this.$_apolloPromises) {
          return Promise.all(this.$_apolloPromises).then(function () {
            destroy.call(_this3);
          })["catch"](function (e) {
            destroy.call(_this3);
            return Promise.reject(e);
          });
        }
      }
    } : {}), {}, {
      created: launch,
      destroyed: destroy
    }));
  }

  var keywords = ['$subscribe'];
  function install(Vue, options) {
    if (install.installed) return;
    install.installed = true;
    utils_1.Vue = Vue;
    var vueVersion = Vue.version.substr(0, Vue.version.indexOf('.')); // Options merging

    var merge = Vue.config.optionMergeStrategies.methods;

    Vue.config.optionMergeStrategies.apollo = function (toVal, fromVal, vm) {
      if (!toVal) return fromVal;
      if (!fromVal) return toVal;
      var toData = Object.assign({}, utils_6(toVal, keywords), toVal.data);
      var fromData = Object.assign({}, utils_6(fromVal, keywords), fromVal.data);
      var map = {};

      for (var i = 0; i < keywords.length; i++) {
        var key = keywords[i];
        map[key] = merge(toVal[key], fromVal[key]);
      }

      return Object.assign(map, merge(toData, fromData));
    }; // Lazy creation


    if (!Object.prototype.hasOwnProperty.call(Vue, '$apollo')) {
      Object.defineProperty(Vue.prototype, '$apollo', {
        get: function get() {
          if (!this.$_apollo) {
            this.$_apollo = new DollarApollo(this);
          }

          return this.$_apollo;
        }
      });
    }

    installMixin(Vue, vueVersion);

    if (vueVersion === '2') {
      Vue.component('ApolloQuery', CApolloQuery);
      Vue.component('ApolloQuery', CApolloQuery);
      Vue.component('ApolloSubscribeToMore', CApolloSubscribeToMore);
      Vue.component('ApolloSubscribeToMore', CApolloSubscribeToMore);
      Vue.component('ApolloMutation', CApolloMutation);
      Vue.component('ApolloMutation', CApolloMutation);
    }
  }
  ApolloProvider.install = install; // eslint-disable-next-line no-undef

  ApolloProvider.version = "3.1.0"; // Apollo provider

  var ApolloProvider$1 = ApolloProvider; // Components

  var ApolloQuery = CApolloQuery;
  var ApolloSubscribeToMore = CApolloSubscribeToMore;
  var ApolloMutation = CApolloMutation; // Auto-install

  var GlobalVue = null;

  if (typeof commonjsGlobal !== 'undefined') {
    GlobalVue = globalThis.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(ApolloProvider);
  }

  exports.ApolloMutation = ApolloMutation;
  exports.ApolloProvider = ApolloProvider$1;
  exports.ApolloQuery = ApolloQuery;
  exports.ApolloSubscribeToMore = ApolloSubscribeToMore;
  exports.default = ApolloProvider;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
}(vueApollo_umd, vueApollo_umd.exports));

const require$$14 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(radix3);

const require$$15 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ohash);

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(deepmerge$1);

/**
 * vue-meta v2.4.0
 * (c) 2020
 * - Declan de Wet
 * - Sébastien Chopin (@Atinux)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * @license MIT
 */

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepmerge = _interopDefault(require$$0);

var version = "2.4.0";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * checks if passed argument is an array
 * @param  {any}  arg - the object to check
 * @return {Boolean} - true if `arg` is an array
 */
function isArray(arg) {
  return Array.isArray(arg);
}
function isUndefined(arg) {
  return typeof arg === 'undefined';
}
function isObject(arg) {
  return _typeof(arg) === 'object';
}
function isPureObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isString(arg) {
  return typeof arg === 'string';
}

function hasGlobalWindowFn() {
  try {
    return !isUndefined(window);
  } catch (e) {
    return false;
  }
}
var hasGlobalWindow = hasGlobalWindowFn();

var _global = hasGlobalWindow ? window : commonjsGlobal;

var console$1 = _global.console || {};
function warn(str) {
  /* istanbul ignore next */
  if (!console$1 || !console$1.warn) {
    return;
  }

  console$1.warn(str);
}
var showWarningNotSupported = function showWarningNotSupported() {
  return warn('This vue app/component has no vue-meta configuration');
};

/**
 * These are constant variables used throughout the application.
 */
// set some sane defaults
var defaultInfo = {
  title: undefined,
  titleChunk: '',
  titleTemplate: '%s',
  htmlAttrs: {},
  bodyAttrs: {},
  headAttrs: {},
  base: [],
  link: [],
  meta: [],
  style: [],
  script: [],
  noscript: [],
  __dangerouslyDisableSanitizers: [],
  __dangerouslyDisableSanitizersByTagID: {}
};
var rootConfigKey = '_vueMeta'; // This is the name of the component option that contains all the information that
// gets converted to the various meta tags & attributes for the page.

var keyName = 'metaInfo'; // This is the attribute vue-meta arguments on elements to know which it should
// manage and which it should ignore.

var attribute = 'data-vue-meta'; // This is the attribute that goes on the `html` tag to inform `vue-meta`
// that the server has already generated the meta tags for the initial render.

var ssrAttribute = 'data-vue-meta-server-rendered'; // This is the property that tells vue-meta to overwrite (instead of append)
// an item in a tag list. For example, if you have two `meta` tag list items
// that both have `vmid` of "description", then vue-meta will overwrite the
// shallowest one with the deepest one.

var tagIDKeyName = 'vmid'; // This is the key name for possible meta templates

var metaTemplateKeyName = 'template'; // This is the key name for the content-holding property

var contentKeyName = 'content'; // The id used for the ssr app

var ssrAppId = 'ssr'; // How long meta update

var debounceWait = 10; // How long meta update

var waitOnDestroyed = true;
var defaultOptions = {
  keyName: keyName,
  attribute: attribute,
  ssrAttribute: ssrAttribute,
  tagIDKeyName: tagIDKeyName,
  contentKeyName: contentKeyName,
  metaTemplateKeyName: metaTemplateKeyName,
  waitOnDestroyed: waitOnDestroyed,
  debounceWait: debounceWait,
  ssrAppId: ssrAppId
}; // might be a bit ugly, but minimizes the browser bundles a bit

var defaultInfoKeys = Object.keys(defaultInfo); // The metaInfo property keys which are used to disable escaping

var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]]; // List of metaInfo property keys which are configuration options (and dont generate html)

var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], 'changed'].concat(disableOptionKeys); // List of metaInfo property keys which only generates attributes and no tags

var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]]; // HTML elements which support the onload event

var tagsSupportingOnload = ['link', 'style', 'script']; // HTML elements which dont have a head tag (shortened to our needs)
// see: https://www.w3.org/TR/html52/document-metadata.html

var tagsWithoutEndTag = ['base', 'meta', 'link']; // HTML elements which can have inner content (shortened to our needs)

var tagsWithInnerContent = ['noscript', 'script', 'style']; // Attributes which are inserted as childNodes instead of HTMLAttribute

var tagAttributeAsInnerContent = ['innerHTML', 'cssText', 'json'];
var tagProperties = ['once', 'skip', 'template']; // Attributes which should be added with data- prefix

var commonDataAttributes = ['body', 'pbody']; // from: https://github.com/kangax/html-minifier/blob/gh-pages/src/htmlminifier.js#L202

var booleanHtmlAttributes = ['allowfullscreen', 'amp', 'amp-boilerplate', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible'];

var batchId = null;
function triggerUpdate(_ref, rootVm, hookName) {
  var debounceWait = _ref.debounceWait;

  // if an update was triggered during initialization or when an update was triggered by the
  // metaInfo watcher, set initialized to null
  // then we keep falsy value but know we need to run a triggerUpdate after initialization
  if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === 'watcher')) {
    rootVm[rootConfigKey].initialized = null;
  }

  if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
    // batch potential DOM updates to prevent extraneous re-rendering
    // eslint-disable-next-line no-void
    batchUpdate(function () {
      return void rootVm.$meta().refresh();
    }, debounceWait);
  }
}
/**
 * Performs a batched update.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */

function batchUpdate(callback, timeout) {
  timeout = timeout === undefined ? 10 : timeout;

  if (!timeout) {
    callback();
    return;
  }

  clearTimeout(batchId);
  batchId = setTimeout(function () {
    callback();
  }, timeout);
  return batchId;
}

/*
 * To reduce build size, this file provides simple polyfills without
 * overly excessive type checking and without modifying
 * the global Array.prototype
 * The polyfills are automatically removed in the commonjs build
 * Also, only files in client/ & shared/ should use these functions
 * files in server/ still use normal js function
 */
function find(array, predicate, thisArg) {
  if ( !Array.prototype.find) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return array[idx];
      }
    }

    return;
  }

  return array.find(predicate, thisArg);
}
function findIndex(array, predicate, thisArg) {
  if ( !Array.prototype.findIndex) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return idx;
      }
    }

    return -1;
  }

  return array.findIndex(predicate, thisArg);
}
function toArray(arg) {
  if ( !Array.from) {
    return Array.prototype.slice.call(arg);
  }

  return Array.from(arg);
}
function includes(array, value) {
  if ( !Array.prototype.includes) {
    for (var idx in array) {
      if (array[idx] === value) {
        return true;
      }
    }

    return false;
  }

  return array.includes(value);
}

var querySelector = function querySelector(arg, el) {
  return (el || document).querySelectorAll(arg);
};
function getTag(tags, tag) {
  if (!tags[tag]) {
    tags[tag] = document.getElementsByTagName(tag)[0];
  }

  return tags[tag];
}
function getElementsKey(_ref) {
  var body = _ref.body,
      pbody = _ref.pbody;
  return body ? 'body' : pbody ? 'pbody' : 'head';
}
function queryElements(parentNode, _ref2, attributes) {
  var appId = _ref2.appId,
      attribute = _ref2.attribute,
      type = _ref2.type,
      tagIDKeyName = _ref2.tagIDKeyName;
  attributes = attributes || {};
  var queries = ["".concat(type, "[").concat(attribute, "=\"").concat(appId, "\"]"), "".concat(type, "[data-").concat(tagIDKeyName, "]")].map(function (query) {
    for (var key in attributes) {
      var val = attributes[key];
      var attributeValue = val && val !== true ? "=\"".concat(val, "\"") : '';
      query += "[data-".concat(key).concat(attributeValue, "]");
    }

    return query;
  });
  return toArray(querySelector(queries.join(', '), parentNode));
}
function removeElementsByAppId(_ref3, appId) {
  var attribute = _ref3.attribute;
  toArray(querySelector("[".concat(attribute, "=\"").concat(appId, "\"]"))).map(function (el) {
    return el.remove();
  });
}
function removeAttribute(el, attributeName) {
  el.removeAttribute(attributeName);
}

function hasMetaInfo(vm) {
  vm = vm || this;
  return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
} // a component is in a metaInfo branch when itself has meta info or one of its (grand-)children has

function inMetaInfoBranch(vm) {
  vm = vm || this;
  return vm && !isUndefined(vm[rootConfigKey]);
}

function pause(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = true;
  return function () {
    return resume(rootVm, refresh);
  };
}
function resume(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = false;

  if (refresh || refresh === undefined) {
    return rootVm.$meta().refresh();
  }
}

function addNavGuards(rootVm) {
  var router = rootVm.$router; // return when nav guards already added or no router exists

  if (rootVm[rootConfigKey].navGuards || !router) {
    /* istanbul ignore next */
    return;
  }

  rootVm[rootConfigKey].navGuards = true;
  router.beforeEach(function (to, from, next) {
    pause(rootVm);
    next();
  });
  router.afterEach(function () {
    rootVm.$nextTick(function () {
      var _resume = resume(rootVm),
          metaInfo = _resume.metaInfo;

      if (metaInfo && isFunction(metaInfo.afterNavigation)) {
        metaInfo.afterNavigation(metaInfo);
      }
    });
  });
}

var appId = 1;
function createMixin(Vue, options) {
  // for which Vue lifecycle hooks should the metaInfo be refreshed
  var updateOnLifecycleHook = ['activated', 'deactivated', 'beforeMount'];
  var wasServerRendered = false; // watch for client side component updates

  return {
    beforeCreate: function beforeCreate() {
      var _this2 = this;

      var rootKey = '$root';
      var $root = this[rootKey];
      var $options = this.$options;
      var devtoolsEnabled = Vue.config.devtools;
      Object.defineProperty(this, '_hasMetaInfo', {
        configurable: true,
        get: function get() {
          // Show deprecation warning once when devtools enabled
          if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
            warn('VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead');
            $root[rootConfigKey].deprecationWarningShown = true;
          }

          return hasMetaInfo(this);
        }
      });

      if (this === $root) {
        $root.$once('hook:beforeMount', function () {
          wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute('data-server-rendered'); // In most cases when you have a SSR app it will be the first app thats gonna be
          // initiated, if we cant detect the data-server-rendered attribute from Vue but we
          // do see our own ssrAttribute then _assume_ the Vue app with appId 1 is the ssr app
          // attempted fix for #404 & #562, but we rly need to refactor how we pass appIds from
          // ssr to the client

          if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
            var htmlTag = getTag({}, 'html');
            wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
          }
        });
      } // Add a marker to know if it uses metaInfo
      // _vnode is used to know that it's attached to a real component
      // useful if we use some mixin to add some meta tags (like nuxt-i18n)


      if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
        return;
      }

      if (!$root[rootConfigKey]) {
        $root[rootConfigKey] = {
          appId: appId
        };
        appId++;

        if (devtoolsEnabled && $root.$options[options.keyName]) {
          // use nextTick so the children should be added to $root
          this.$nextTick(function () {
            // find the first child that lists fnOptions
            var child = find($root.$children, function (c) {
              return c.$vnode && c.$vnode.fnOptions;
            });

            if (child && child.$vnode.fnOptions[options.keyName]) {
              warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
            }
          });
        }
      } // to speed up updates we keep track of branches which have a component with vue-meta info defined
      // if _vueMeta = true it has info, if _vueMeta = false a child has info


      if (!this[rootConfigKey]) {
        this[rootConfigKey] = true;
        var parent = this.$parent;

        while (parent && parent !== $root) {
          if (isUndefined(parent[rootConfigKey])) {
            parent[rootConfigKey] = false;
          }

          parent = parent.$parent;
        }
      } // coerce function-style metaInfo to a computed prop so we can observe
      // it on creation


      if (isFunction($options[options.keyName])) {
        $options.computed = $options.computed || {};
        $options.computed.$metaInfo = $options[options.keyName];

        if (!this.$isServer) {
          // if computed $metaInfo exists, watch it for updates & trigger a refresh
          // when it changes (i.e. automatically handle async actions that affect metaInfo)
          // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
          this.$on('hook:created', function () {
            this.$watch('$metaInfo', function () {
              triggerUpdate(options, this[rootKey], 'watcher');
            });
          });
        }
      } // force an initial refresh on page load and prevent other lifecycleHooks
      // to triggerUpdate until this initial refresh is finished
      // this is to make sure that when a page is opened in an inactive tab which
      // has throttled rAF/timers we still immediately set the page title


      if (isUndefined($root[rootConfigKey].initialized)) {
        $root[rootConfigKey].initialized = this.$isServer;

        if (!$root[rootConfigKey].initialized) {
          if (!$root[rootConfigKey].initializedSsr) {
            $root[rootConfigKey].initializedSsr = true;
            this.$on('hook:beforeMount', function () {
              var $root = this[rootKey]; // if this Vue-app was server rendered, set the appId to 'ssr'
              // only one SSR app per page is supported

              if (wasServerRendered) {
                $root[rootConfigKey].appId = options.ssrAppId;
              }
            });
          } // we use the mounted hook here as on page load


          this.$on('hook:mounted', function () {
            var $root = this[rootKey];

            if ($root[rootConfigKey].initialized) {
              return;
            } // used in triggerUpdate to check if a change was triggered
            // during initialization


            $root[rootConfigKey].initializing = true; // refresh meta in nextTick so all child components have loaded

            this.$nextTick(function () {
              var _$root$$meta$refresh = $root.$meta().refresh(),
                  tags = _$root$$meta$refresh.tags,
                  metaInfo = _$root$$meta$refresh.metaInfo; // After ssr hydration (identifier by tags === false) check
              // if initialized was set to null in triggerUpdate. That'd mean
              // that during initilazation changes where triggered which need
              // to be applied OR a metaInfo watcher was triggered before the
              // current hook was called
              // (during initialization all changes are blocked)


              if (tags === false && $root[rootConfigKey].initialized === null) {
                this.$nextTick(function () {
                  return triggerUpdate(options, $root, 'init');
                });
              }

              $root[rootConfigKey].initialized = true;
              delete $root[rootConfigKey].initializing; // add the navigation guards if they havent been added yet
              // they are needed for the afterNavigation callback

              if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                addNavGuards($root);
              }
            });
          }); // add the navigation guards if requested

          if (options.refreshOnceOnNavigation) {
            addNavGuards($root);
          }
        }
      }

      this.$on('hook:destroyed', function () {
        var _this = this;

        // do not trigger refresh:
        // - when user configured to not wait for transitions on destroyed
        // - when the component doesnt have a parent
        // - doesnt have metaInfo defined
        if (!this.$parent || !hasMetaInfo(this)) {
          return;
        }

        delete this._hasMetaInfo;
        this.$nextTick(function () {
          if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
            triggerUpdate(options, _this.$root, 'destroyed');
            return;
          } // Wait that element is hidden before refreshing meta tags (to support animations)


          var interval = setInterval(function () {
            if (_this.$el && _this.$el.offsetParent !== null) {
              /* istanbul ignore next line */
              return;
            }

            clearInterval(interval);
            triggerUpdate(options, _this.$root, 'destroyed');
          }, 50);
        });
      }); // do not trigger refresh on the server side

      if (this.$isServer) {
        /* istanbul ignore next */
        return;
      } // no need to add this hooks on server side


      updateOnLifecycleHook.forEach(function (lifecycleHook) {
        _this2.$on("hook:".concat(lifecycleHook), function () {
          triggerUpdate(options, this[rootKey], lifecycleHook);
        });
      });
    }
  };
}

function setOptions(options) {
  // combine options
  options = isObject(options) ? options : {}; // The options are set like this so they can
  // be minified by terser while keeping the
  // user api intact
  // terser --mangle-properties keep_quoted=strict

  /* eslint-disable dot-notation */

  return {
    keyName: options['keyName'] || defaultOptions.keyName,
    attribute: options['attribute'] || defaultOptions.attribute,
    ssrAttribute: options['ssrAttribute'] || defaultOptions.ssrAttribute,
    tagIDKeyName: options['tagIDKeyName'] || defaultOptions.tagIDKeyName,
    contentKeyName: options['contentKeyName'] || defaultOptions.contentKeyName,
    metaTemplateKeyName: options['metaTemplateKeyName'] || defaultOptions.metaTemplateKeyName,
    debounceWait: isUndefined(options['debounceWait']) ? defaultOptions.debounceWait : options['debounceWait'],
    waitOnDestroyed: isUndefined(options['waitOnDestroyed']) ? defaultOptions.waitOnDestroyed : options['waitOnDestroyed'],
    ssrAppId: options['ssrAppId'] || defaultOptions.ssrAppId,
    refreshOnceOnNavigation: !!options['refreshOnceOnNavigation']
  };
  /* eslint-enable dot-notation */
}
function getOptions(options) {
  var optionsCopy = {};

  for (var key in options) {
    optionsCopy[key] = options[key];
  }

  return optionsCopy;
}

function ensureIsArray(arg, key) {
  if (!key || !isObject(arg)) {
    return isArray(arg) ? arg : [];
  }

  if (!isArray(arg[key])) {
    arg[key] = [];
  }

  return arg;
}

var serverSequences = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/"/g, '&quot;'], [/'/g, '&#x27;']];
var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, "\""], [/'/g, "'"]]; // sanitizes potentially dangerous characters

function escape(info, options, escapeOptions, escapeKeys) {
  var tagIDKeyName = options.tagIDKeyName;
  var _escapeOptions$doEsca = escapeOptions.doEscape,
      doEscape = _escapeOptions$doEsca === void 0 ? function (v) {
    return v;
  } : _escapeOptions$doEsca;
  var escaped = {};

  for (var key in info) {
    var value = info[key]; // no need to escape configuration options

    if (includes(metaInfoOptionKeys, key)) {
      escaped[key] = value;
      continue;
    } // do not use destructuring for disableOptionKeys, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb


    var disableKey = disableOptionKeys[0];

    if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
      // this info[key] doesnt need to escaped if the option is listed in __dangerouslyDisableSanitizers
      escaped[key] = value;
      continue;
    }

    var tagId = info[tagIDKeyName];

    if (tagId) {
      disableKey = disableOptionKeys[1]; // keys which are listed in __dangerouslyDisableSanitizersByTagID for the current vmid do not need to be escaped

      if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
        escaped[key] = value;
        continue;
      }
    }

    if (isString(value)) {
      escaped[key] = doEscape(value);
    } else if (isArray(value)) {
      escaped[key] = value.map(function (v) {
        if (isPureObject(v)) {
          return escape(v, options, escapeOptions, true);
        }

        return doEscape(v);
      });
    } else if (isPureObject(value)) {
      escaped[key] = escape(value, options, escapeOptions, true);
    } else {
      escaped[key] = value;
    }

    if (escapeKeys) {
      var escapedKey = doEscape(key);

      if (key !== escapedKey) {
        escaped[escapedKey] = escaped[key];
        delete escaped[key];
      }
    }
  }

  return escaped;
}
function escapeMetaInfo(options, info, escapeSequences) {
  escapeSequences = escapeSequences || []; // do not use destructuring for seq, it increases transpiled size
  // due to var checks while we are guaranteed the structure of the cb

  var escapeOptions = {
    doEscape: function doEscape(value) {
      return escapeSequences.reduce(function (val, seq) {
        return val.replace(seq[0], seq[1]);
      }, value);
    }
  };
  disableOptionKeys.forEach(function (disableKey, index) {
    if (index === 0) {
      ensureIsArray(info, disableKey);
    } else if (index === 1) {
      for (var key in info[disableKey]) {
        ensureIsArray(info[disableKey], key);
      }
    }

    escapeOptions[disableKey] = info[disableKey];
  }); // begin sanitization

  return escape(info, options, escapeOptions);
}

function applyTemplate(_ref, headObject, template, chunk) {
  var component = _ref.component,
      metaTemplateKeyName = _ref.metaTemplateKeyName,
      contentKeyName = _ref.contentKeyName;

  if (template === true || headObject[metaTemplateKeyName] === true) {
    // abort, template was already applied
    return false;
  }

  if (isUndefined(template) && headObject[metaTemplateKeyName]) {
    template = headObject[metaTemplateKeyName];
    headObject[metaTemplateKeyName] = true;
  } // return early if no template defined


  if (!template) {
    // cleanup faulty template properties
    delete headObject[metaTemplateKeyName];
    return false;
  }

  if (isUndefined(chunk)) {
    chunk = headObject[contentKeyName];
  }

  headObject[contentKeyName] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
  return true;
}

function _arrayMerge(_ref, target, source) {
  var component = _ref.component,
      tagIDKeyName = _ref.tagIDKeyName,
      metaTemplateKeyName = _ref.metaTemplateKeyName,
      contentKeyName = _ref.contentKeyName;
  // we concat the arrays without merging objects contained in,
  // but we check for a `vmid` property on each object in the array
  // using an O(1) lookup associative array exploit
  var destination = [];

  if (!target.length && !source.length) {
    return destination;
  }

  target.forEach(function (targetItem, targetIndex) {
    // no tagID so no need to check for duplicity
    if (!targetItem[tagIDKeyName]) {
      destination.push(targetItem);
      return;
    }

    var sourceIndex = findIndex(source, function (item) {
      return item[tagIDKeyName] === targetItem[tagIDKeyName];
    });
    var sourceItem = source[sourceIndex]; // source doesnt contain any duplicate vmid's, we can keep targetItem

    if (sourceIndex === -1) {
      destination.push(targetItem);
      return;
    } // when sourceItem explictly defines contentKeyName or innerHTML as undefined, its
    // an indication that we need to skip the default behaviour or child has preference over parent
    // which means we keep the targetItem and ignore/remove the sourceItem


    if (contentKeyName in sourceItem && sourceItem[contentKeyName] === undefined || 'innerHTML' in sourceItem && sourceItem.innerHTML === undefined) {
      destination.push(targetItem); // remove current index from source array so its not concatenated to destination below

      source.splice(sourceIndex, 1);
      return;
    } // we now know that targetItem is a duplicate and we should ignore it in favor of sourceItem
    // if source specifies null as content then ignore both the target as the source


    if (sourceItem[contentKeyName] === null || sourceItem.innerHTML === null) {
      // remove current index from source array so its not concatenated to destination below
      source.splice(sourceIndex, 1);
      return;
    } // now we only need to check if the target has a template to combine it with the source


    var targetTemplate = targetItem[metaTemplateKeyName];

    if (!targetTemplate) {
      return;
    }

    var sourceTemplate = sourceItem[metaTemplateKeyName];

    if (!sourceTemplate) {
      // use parent template and child content
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, targetTemplate); // set template to true to indicate template was already applied

      sourceItem.template = true;
      return;
    }

    if (!sourceItem[contentKeyName]) {
      // use parent content and child template
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, undefined, targetItem[contentKeyName]);
    }
  });
  return destination.concat(source);
}
var warningShown = false;
function merge(target, source, options) {
  options = options || {}; // remove properties explicitly set to false so child components can
  // optionally _not_ overwrite the parents content
  // (for array properties this is checked in arrayMerge)

  if (source.title === undefined) {
    delete source.title;
  }

  metaInfoAttributeKeys.forEach(function (attrKey) {
    if (!source[attrKey]) {
      return;
    }

    for (var key in source[attrKey]) {
      if (key in source[attrKey] && source[attrKey][key] === undefined) {
        if (includes(booleanHtmlAttributes, key) && !warningShown) {
          warn('VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details');
          warningShown = true;
        }

        delete source[attrKey][key];
      }
    }
  });
  return deepmerge(target, source, {
    arrayMerge: function arrayMerge(t, s) {
      return _arrayMerge(options, t, s);
    }
  });
}

function getComponentMetaInfo(options, component) {
  return getComponentOption(options || {}, component, defaultInfo);
}
/**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {String} opts.keyName - the name of the option to look for
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */

function getComponentOption(options, component, result) {
  result = result || {};

  if (component._inactive) {
    return result;
  }

  options = options || {};
  var _options = options,
      keyName = _options.keyName;
  var $metaInfo = component.$metaInfo,
      $options = component.$options,
      $children = component.$children; // only collect option data if it exists

  if ($options[keyName]) {
    // if $metaInfo exists then [keyName] was defined as a function
    // and set to the computed prop $metaInfo in the mixin
    // using the computed prop should be a small performance increase
    // because Vue caches those internally
    var data = $metaInfo || $options[keyName]; // only merge data with result when its an object
    // eg it could be a function when metaInfo() returns undefined
    // dueo to the or statement above

    if (isObject(data)) {
      result = merge(result, data, options);
    }
  } // collect & aggregate child options if deep = true


  if ($children.length) {
    $children.forEach(function (childComponent) {
      // check if the childComponent is in a branch
      // return otherwise so we dont walk all component branches unnecessarily
      if (!inMetaInfoBranch(childComponent)) {
        return;
      }

      result = getComponentOption(options, childComponent, result);
    });
  }

  return result;
}

var callbacks = [];
function isDOMComplete(d) {
  return (d || document).readyState === 'complete';
}
function addCallback(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = '';
  }

  callbacks.push([query, callback]);
}
function addCallbacks(_ref, type, tags, autoAddListeners) {
  var tagIDKeyName = _ref.tagIDKeyName;
  var hasAsyncCallback = false;
  tags.forEach(function (tag) {
    if (!tag[tagIDKeyName] || !tag.callback) {
      return;
    }

    hasAsyncCallback = true;
    addCallback("".concat(type, "[data-").concat(tagIDKeyName, "=\"").concat(tag[tagIDKeyName], "\"]"), tag.callback);
  });

  if (!autoAddListeners || !hasAsyncCallback) {
    return hasAsyncCallback;
  }

  return addListeners();
}
function addListeners() {
  if (isDOMComplete()) {
    applyCallbacks();
    return;
  } // Instead of using a MutationObserver, we just apply

  /* istanbul ignore next */


  document.onreadystatechange = function () {
    applyCallbacks();
  };
}
function applyCallbacks(matchElement) {
  callbacks.forEach(function (args) {
    // do not use destructuring for args, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb
    var query = args[0];
    var callback = args[1];
    var selector = "".concat(query, "[onload=\"this.__vm_l=1\"]");
    var elements = [];

    if (!matchElement) {
      elements = toArray(querySelector(selector));
    }

    if (matchElement && matchElement.matches(selector)) {
      elements = [matchElement];
    }

    elements.forEach(function (element) {
      /* __vm_cb: whether the load callback has been called
       * __vm_l: set by onload attribute, whether the element was loaded
       * __vm_ev: whether the event listener was added or not
       */
      if (element.__vm_cb) {
        return;
      }

      var onload = function onload() {
        /* Mark that the callback for this element has already been called,
         * this prevents the callback to run twice in some (rare) conditions
         */
        element.__vm_cb = true;
        /* onload needs to be removed because we only need the
         * attribute after ssr and if we dont remove it the node
         * will fail isEqualNode on the client
         */

        removeAttribute(element, 'onload');
        callback(element);
      };
      /* IE9 doesnt seem to load scripts synchronously,
       * causing a script sometimes/often already to be loaded
       * when we add the event listener below (thus adding an onload event
       * listener has no use because it will never be triggered).
       * Therefore we add the onload attribute during ssr, and
       * check here if it was already loaded or not
       */


      if (element.__vm_l) {
        onload();
        return;
      }

      if (!element.__vm_ev) {
        element.__vm_ev = true;
        element.addEventListener('load', onload);
      }
    });
  });
}

// instead of adding it to the html

var attributeMap = {};
/**
 * Updates the document's html tag attributes
 *
 * @param  {Object} attrs - the new document html attributes
 * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
 */

function updateAttribute(appId, options, type, attrs, tag) {
  var _ref = options || {},
      attribute = _ref.attribute;

  var vueMetaAttrString = tag.getAttribute(attribute);

  if (vueMetaAttrString) {
    attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
    removeAttribute(tag, attribute);
  }

  var data = attributeMap[type] || {};
  var toUpdate = []; // remove attributes from the map
  // which have been removed for this appId

  for (var attr in data) {
    if (data[attr] !== undefined && appId in data[attr]) {
      toUpdate.push(attr);

      if (!attrs[attr]) {
        delete data[attr][appId];
      }
    }
  }

  for (var _attr in attrs) {
    var attrData = data[_attr];

    if (!attrData || attrData[appId] !== attrs[_attr]) {
      toUpdate.push(_attr);

      if (attrs[_attr] !== undefined) {
        data[_attr] = data[_attr] || {};
        data[_attr][appId] = attrs[_attr];
      }
    }
  }

  for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
    var _attr2 = _toUpdate[_i];
    var _attrData = data[_attr2];
    var attrValues = [];

    for (var _appId in _attrData) {
      Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
    }

    if (attrValues.length) {
      var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? '' : attrValues.filter(function (v) {
        return v !== undefined;
      }).join(' ');
      tag.setAttribute(_attr2, attrValue);
    } else {
      removeAttribute(tag, _attr2);
    }
  }

  attributeMap[type] = data;
}

/**
 * Updates the document title
 *
 * @param  {String} title - the new title of the document
 */
function updateTitle(title) {
  if (!title && title !== '') {
    return;
  }

  document.title = title;
}

/**
 * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
 * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - a representation of what tags changed
 */

function updateTag(appId, options, type, tags, head, body) {
  var _ref = options || {},
      attribute = _ref.attribute,
      tagIDKeyName = _ref.tagIDKeyName;

  var dataAttributes = commonDataAttributes.slice();
  dataAttributes.push(tagIDKeyName);
  var newElements = [];
  var queryOptions = {
    appId: appId,
    attribute: attribute,
    type: type,
    tagIDKeyName: tagIDKeyName
  };
  var currentElements = {
    head: queryElements(head, queryOptions),
    pbody: queryElements(body, queryOptions, {
      pbody: true
    }),
    body: queryElements(body, queryOptions, {
      body: true
    })
  };

  if (tags.length > 1) {
    // remove duplicates that could have been found by merging tags
    // which include a mixin with metaInfo and that mixin is used
    // by multiple components on the same page
    var found = [];
    tags = tags.filter(function (x) {
      var k = JSON.stringify(x);
      var res = !includes(found, k);
      found.push(k);
      return res;
    });
  }

  tags.forEach(function (tag) {
    if (tag.skip) {
      return;
    }

    var newElement = document.createElement(type);

    if (!tag.once) {
      newElement.setAttribute(attribute, appId);
    }

    Object.keys(tag).forEach(function (attr) {
      /* istanbul ignore next */
      if (includes(tagProperties, attr)) {
        return;
      }

      if (attr === 'innerHTML') {
        newElement.innerHTML = tag.innerHTML;
        return;
      }

      if (attr === 'json') {
        newElement.innerHTML = JSON.stringify(tag.json);
        return;
      }

      if (attr === 'cssText') {
        if (newElement.styleSheet) {
          /* istanbul ignore next */
          newElement.styleSheet.cssText = tag.cssText;
        } else {
          newElement.appendChild(document.createTextNode(tag.cssText));
        }

        return;
      }

      if (attr === 'callback') {
        newElement.onload = function () {
          return tag[attr](newElement);
        };

        return;
      }

      var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;

      var isBooleanAttribute = includes(booleanHtmlAttributes, attr);

      if (isBooleanAttribute && !tag[attr]) {
        return;
      }

      var value = isBooleanAttribute ? '' : tag[attr];
      newElement.setAttribute(_attr, value);
    });
    var oldElements = currentElements[getElementsKey(tag)]; // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

    var indexToDelete;
    var hasEqualElement = oldElements.some(function (existingTag, index) {
      indexToDelete = index;
      return newElement.isEqualNode(existingTag);
    });

    if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
      oldElements.splice(indexToDelete, 1);
    } else {
      newElements.push(newElement);
    }
  });
  var oldElements = [];

  for (var _type in currentElements) {
    Array.prototype.push.apply(oldElements, currentElements[_type]);
  } // remove old elements


  oldElements.forEach(function (element) {
    element.parentNode.removeChild(element);
  }); // insert new elements

  newElements.forEach(function (element) {
    if (element.hasAttribute('data-body')) {
      body.appendChild(element);
      return;
    }

    if (element.hasAttribute('data-pbody')) {
      body.insertBefore(element, body.firstChild);
      return;
    }

    head.appendChild(element);
  });
  return {
    oldTags: oldElements,
    newTags: newElements
  };
}

/**
 * Performs client-side updates when new meta info is received
 *
 * @param  {Object} newInfo - the meta info to update to
 */

function updateClientMetaInfo(appId, options, newInfo) {
  options = options || {};
  var _options = options,
      ssrAttribute = _options.ssrAttribute,
      ssrAppId = _options.ssrAppId; // only cache tags for current update

  var tags = {};
  var htmlTag = getTag(tags, 'html'); // if this is a server render, then dont update

  if (appId === ssrAppId && htmlTag.hasAttribute(ssrAttribute)) {
    // remove the server render attribute so we can update on (next) changes
    removeAttribute(htmlTag, ssrAttribute); // add load callbacks if the

    var addLoadListeners = false;
    tagsSupportingOnload.forEach(function (type) {
      if (newInfo[type] && addCallbacks(options, type, newInfo[type])) {
        addLoadListeners = true;
      }
    });

    if (addLoadListeners) {
      addListeners();
    }

    return false;
  } // initialize tracked changes


  var tagsAdded = {};
  var tagsRemoved = {};

  for (var type in newInfo) {
    // ignore these
    if (includes(metaInfoOptionKeys, type)) {
      continue;
    }

    if (type === 'title') {
      // update the title
      updateTitle(newInfo.title);
      continue;
    }

    if (includes(metaInfoAttributeKeys, type)) {
      var tagName = type.substr(0, 4);
      updateAttribute(appId, options, type, newInfo[type], getTag(tags, tagName));
      continue;
    } // tags should always be an array, ignore if it isnt


    if (!isArray(newInfo[type])) {
      continue;
    }

    var _updateTag = updateTag(appId, options, type, newInfo[type], getTag(tags, 'head'), getTag(tags, 'body')),
        oldTags = _updateTag.oldTags,
        newTags = _updateTag.newTags;

    if (newTags.length) {
      tagsAdded[type] = newTags;
      tagsRemoved[type] = oldTags;
    }
  }

  return {
    tagsAdded: tagsAdded,
    tagsRemoved: tagsRemoved
  };
}

var appsMetaInfo;
function addApp(rootVm, appId, options) {
  return {
    set: function set(metaInfo) {
      return setMetaInfo(rootVm, appId, options, metaInfo);
    },
    remove: function remove() {
      return removeMetaInfo(rootVm, appId, options);
    }
  };
}
function setMetaInfo(rootVm, appId, options, metaInfo) {
  // if a vm exists _and_ its mounted then immediately update
  if (rootVm && rootVm.$el) {
    return updateClientMetaInfo(appId, options, metaInfo);
  } // store for later, the info
  // will be set on the first refresh


  appsMetaInfo = appsMetaInfo || {};
  appsMetaInfo[appId] = metaInfo;
}
function removeMetaInfo(rootVm, appId, options) {
  if (rootVm && rootVm.$el) {
    var tags = {};

    var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var tagName = type.substr(0, 4);
        updateAttribute(appId, options, type, {}, getTag(tags, tagName));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return removeElementsByAppId(options, appId);
  }

  if (appsMetaInfo[appId]) {
    delete appsMetaInfo[appId];
    clearAppsMetaInfo();
  }
}
function getAppsMetaInfo() {
  return appsMetaInfo;
}
function clearAppsMetaInfo(force) {
  if (force || !Object.keys(appsMetaInfo).length) {
    appsMetaInfo = undefined;
  }
}

/**
 * Returns the correct meta info for the given component
 * (child components will overwrite parent meta info)
 *
 * @param  {Object} component - the Vue instance to get meta info from
 * @return {Object} - returned meta info
 */

function getMetaInfo(options, info, escapeSequences, component) {
  options = options || {};
  escapeSequences = escapeSequences || [];
  var _options = options,
      tagIDKeyName = _options.tagIDKeyName; // Remove all "template" tags from meta
  // backup the title chunk in case user wants access to it

  if (info.title) {
    info.titleChunk = info.title;
  } // replace title with populated template


  if (info.titleTemplate && info.titleTemplate !== '%s') {
    applyTemplate({
      component: component,
      contentKeyName: 'title'
    }, info, info.titleTemplate, info.titleChunk || '');
  } // convert base tag to an array so it can be handled the same way
  // as the other tags


  if (info.base) {
    info.base = Object.keys(info.base).length ? [info.base] : [];
  }

  if (info.meta) {
    // remove meta items with duplicate vmid's
    info.meta = info.meta.filter(function (metaItem, index, arr) {
      var hasVmid = !!metaItem[tagIDKeyName];

      if (!hasVmid) {
        return true;
      }

      var isFirstItemForVmid = index === findIndex(arr, function (item) {
        return item[tagIDKeyName] === metaItem[tagIDKeyName];
      });
      return isFirstItemForVmid;
    }); // apply templates if needed

    info.meta.forEach(function (metaObject) {
      return applyTemplate(options, metaObject);
    });
  }

  return escapeMetaInfo(options, info, escapeSequences);
}

/**
 * When called, will update the current meta info with new meta info.
 * Useful when updating meta info as the result of an asynchronous
 * action that resolves after the initial render takes place.
 *
 * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
 * to implement this method.
 *
 * @return {Object} - new meta info
 */

function refresh(rootVm, options) {
  options = options || {}; // make sure vue-meta was initiated

  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options


  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
  var appId = rootVm[rootConfigKey].appId;
  var tags = updateClientMetaInfo(appId, options, metaInfo); // emit "event" with new info

  if (tags && isFunction(metaInfo.changed)) {
    metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
    tags = {
      addedTags: tags.tagsAdded,
      removedTags: tags.tagsRemoved
    };
  }

  var appsMetaInfo = getAppsMetaInfo();

  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      updateClientMetaInfo(additionalAppId, options, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }

    clearAppsMetaInfo(true);
  }

  return {
    vm: rootVm,
    metaInfo: metaInfo,
    // eslint-disable-line object-shorthand
    tags: tags
  };
}

/**
 * Generates tag attributes for use on the server.
 *
 * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
 * @param  {Object} data - the attributes to generate
 * @return {Object} - the attribute generator
 */

function attributeGenerator(options, type, data, _ref) {
  var addSsrAttribute = _ref.addSsrAttribute;

  var _ref2 = options || {},
      attribute = _ref2.attribute,
      ssrAttribute = _ref2.ssrAttribute;

  var attributeStr = '';

  for (var attr in data) {
    var attrData = data[attr];
    var attrValues = [];

    for (var appId in attrData) {
      attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId])));
    }

    if (attrValues.length) {
      attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, "=\"").concat(attrValues.join(' '), "\"");
      attributeStr += ' ';
    }
  }

  if (attributeStr) {
    attributeStr += "".concat(attribute, "=\"").concat(encodeURI(JSON.stringify(data)), "\"");
  }

  if (type === 'htmlAttrs' && addSsrAttribute) {
    return "".concat(ssrAttribute).concat(attributeStr ? ' ' : '').concat(attributeStr);
  }

  return attributeStr;
}

/**
 * Generates title output for the server
 *
 * @param  {'title'} type - the string "title"
 * @param  {String} data - the title text
 * @return {Object} - the title generator
 */
function titleGenerator(options, type, data, generatorOptions) {
  var _ref = generatorOptions || {},
      ln = _ref.ln;

  if (!data) {
    return '';
  }

  return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? '\n' : '');
}

/**
 * Generates meta, base, link, style, script, noscript tags for use on the server
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - the tag generator
 */

function tagGenerator(options, type, tags, generatorOptions) {
  var _ref = options || {},
      ssrAppId = _ref.ssrAppId,
      attribute = _ref.attribute,
      tagIDKeyName = _ref.tagIDKeyName;

  var _ref2 = generatorOptions || {},
      appId = _ref2.appId,
      _ref2$isSSR = _ref2.isSSR,
      isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR,
      _ref2$body = _ref2.body,
      body = _ref2$body === void 0 ? false : _ref2$body,
      _ref2$pbody = _ref2.pbody,
      pbody = _ref2$pbody === void 0 ? false : _ref2$pbody,
      _ref2$ln = _ref2.ln,
      ln = _ref2$ln === void 0 ? false : _ref2$ln;

  var dataAttributes = [tagIDKeyName].concat(_toConsumableArray(commonDataAttributes));

  if (!tags || !tags.length) {
    return '';
  } // build a string containing all tags of this type


  return tags.reduce(function (tagsStr, tag) {
    if (tag.skip) {
      return tagsStr;
    }

    var tagKeys = Object.keys(tag);

    if (tagKeys.length === 0) {
      return tagsStr; // Bail on empty tag object
    }

    if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
      return tagsStr;
    }

    var attrs = tag.once ? '' : " ".concat(attribute, "=\"").concat(appId || (isSSR === false ? '1' : ssrAppId), "\""); // build a string containing all attributes of this tag

    for (var attr in tag) {
      // these attributes are treated as children on the tag
      if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
        continue;
      }

      if (attr === 'callback') {
        attrs += ' onload="this.__vm_l=1"';
        continue;
      } // these form the attribute list for this tag


      var prefix = '';

      if (dataAttributes.includes(attr)) {
        prefix = 'data-';
      }

      var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);

      if (isBooleanAttr && !tag[attr]) {
        continue;
      }

      attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? '' : "=\"".concat(tag[attr], "\""));
    }

    var json = '';

    if (tag.json) {
      json = JSON.stringify(tag.json);
    } // grab child content from one of these attributes, if possible


    var content = tag.innerHTML || tag.cssText || json; // generate tag exactly without any other redundant attribute
    // these tags have no end tag

    var hasEndTag = !tagsWithoutEndTag.includes(type); // these tag types will have content inserted

    var hasContent = hasEndTag && tagsWithInnerContent.includes(type); // the final string for this specific tag

    return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? '/' : '', ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : '') + (ln ? '\n' : '');
  }, '');
}

/**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */

function generateServerInjector(options, metaInfo, globalInjectOptions) {
  var serverInjector = {
    data: metaInfo,
    extraData: undefined,
    addInfo: function addInfo(appId, metaInfo) {
      this.extraData = this.extraData || {};
      this.extraData[appId] = metaInfo;
    },
    callInjectors: function callInjectors(opts) {
      var m = this.injectors; // only call title for the head

      return (opts.body || opts.pbody ? '' : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
    },
    injectors: {
      head: function head(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln
        }));
      },
      bodyPrepend: function bodyPrepend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          pbody: true
        }));
      },
      bodyAppend: function bodyAppend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          body: true
        }));
      }
    }
  };

  var _loop = function _loop(type) {
    if (metaInfoOptionKeys.includes(type)) {
      return "continue";
    }

    serverInjector.injectors[type] = {
      text: function text(injectOptions) {
        var addSsrAttribute = injectOptions === true;
        injectOptions = _objectSpread2(_objectSpread2({
          addSsrAttribute: addSsrAttribute
        }, globalInjectOptions), injectOptions);

        if (type === 'title') {
          return titleGenerator(options, type, serverInjector.data[type], injectOptions);
        }

        if (metaInfoAttributeKeys.includes(type)) {
          var attributeData = {};
          var data = serverInjector.data[type];

          if (data) {
            var appId = injectOptions.isSSR === false ? '1' : options.ssrAppId;

            for (var attr in data) {
              attributeData[attr] = _defineProperty({}, appId, data[attr]);
            }
          }

          if (serverInjector.extraData) {
            for (var _appId in serverInjector.extraData) {
              var _data = serverInjector.extraData[_appId][type];

              if (_data) {
                for (var _attr in _data) {
                  attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
                }
              }
            }
          }

          return attributeGenerator(options, type, attributeData, injectOptions);
        }

        var str = tagGenerator(options, type, serverInjector.data[type], injectOptions);

        if (serverInjector.extraData) {
          for (var _appId2 in serverInjector.extraData) {
            var _data2 = serverInjector.extraData[_appId2][type];
            var extraStr = tagGenerator(options, type, _data2, _objectSpread2({
              appId: _appId2
            }, injectOptions));
            str = "".concat(str).concat(extraStr);
          }
        }

        return str;
      }
    };
  };

  for (var type in defaultInfo) {
    var _ret = _loop(type);

    if (_ret === "continue") continue;
  }

  return serverInjector;
}

/**
 * Converts the state of the meta info object such that each item
 * can be compiled to a tag string on the server
 *
 * @vm {Object} - Vue instance - ideally the root component
 * @return {Object} - server meta info with `toString` methods
 */

function inject(rootVm, options, injectOptions) {
  // make sure vue-meta was initiated
  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options


  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm); // generate server injector

  var serverInjector = generateServerInjector(options, metaInfo, injectOptions); // add meta info from additional apps

  var appsMetaInfo = getAppsMetaInfo();

  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      serverInjector.addInfo(additionalAppId, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }

    clearAppsMetaInfo(true);
  }

  return serverInjector.injectors;
}

function $meta(options) {
  options = options || {};
  /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */

  var $root = this.$root;
  return {
    getOptions: function getOptions$1() {
      return getOptions(options);
    },
    setOptions: function setOptions(newOptions) {
      var refreshNavKey = 'refreshOnceOnNavigation';

      if (newOptions && newOptions[refreshNavKey]) {
        options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
        addNavGuards($root);
      }

      var debounceWaitKey = 'debounceWait';

      if (newOptions && debounceWaitKey in newOptions) {
        var debounceWait = parseInt(newOptions[debounceWaitKey]);

        if (!isNaN(debounceWait)) {
          options.debounceWait = debounceWait;
        }
      }

      var waitOnDestroyedKey = 'waitOnDestroyed';

      if (newOptions && waitOnDestroyedKey in newOptions) {
        options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
      }
    },
    refresh: function refresh$1() {
      return refresh($root, options);
    },
    inject: function inject$1(injectOptions) {
      return  inject($root, options, injectOptions) ;
    },
    pause: function pause$1() {
      return pause($root);
    },
    resume: function resume$1() {
      return resume($root);
    },
    addApp: function addApp$1(appId) {
      return addApp($root, appId, options);
    }
  };
}

function generate(rawInfo, options) {
  options = setOptions(options);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
  var serverInjector = generateServerInjector(options, metaInfo);
  return serverInjector.injectors;
}

/**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */

function install(Vue, options) {
  if (Vue.__vuemeta_installed) {
    return;
  }

  Vue.__vuemeta_installed = true;
  options = setOptions(options);

  Vue.prototype.$meta = function () {
    return $meta.call(this, options);
  };

  Vue.mixin(createMixin(Vue, options));
}

var index = {
  version: version,
  install: install,
  generate: function generate$1(metaInfo, options) {
    return  generate(metaInfo, options) ;
  },
  hasMetaInfo: hasMetaInfo
};

var vueMeta_common = index;

const require$$17 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(hookable);

const require$$18 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloClient);

const require$$19 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloUploadClient);

const require$$20 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(subscriptionsTransportWs);

const require$$21 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(messageTypes);

const require$$22 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloLinkWs);

const require$$23 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloUtilities);

const require$$24 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloLinkPersistedQueries);

const require$$25 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloLinkContext);

const require$$26 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(apolloLinkState);

const require$$27 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(universalCookie);

const require$$28 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_weakMap_deleteAll);

const require$$29 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_addAll);

const require$$30 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_deleteAll);

const require$$31 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_difference);

const require$$32 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_every);

const require$$33 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_filter);

const require$$34 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_find);

const require$$35 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_intersection);

const require$$36 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isDisjointFrom);

const require$$37 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSubsetOf);

const require$$38 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSupersetOf);

const require$$39 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_join);

const require$$40 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_map);

const require$$41 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_reduce);

const require$$42 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_some);

const require$$43 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_symmetricDifference);

const require$$44 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_union);

const require$$45 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_deleteAll);

const require$$46 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_every);

const require$$47 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_filter);

const require$$48 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_find);

const require$$49 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_findKey);

const require$$50 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_includes);

const require$$51 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_keyOf);

const require$$52 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_mapKeys);

const require$$53 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_mapValues);

const require$$54 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_merge);

const require$$55 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_reduce);

const require$$56 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_some);

const require$$57 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_update);

const require$$58 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(url);

const require$$59 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(polyfill);

var ssr = {};

(function (exports) {
const serializeJs = require$$0$2;

exports.serializeStates = function (apolloProvider, options = {}) {
  const state = exports.getStates(apolloProvider, options);

  return options.useUnsafeSerializer
    ? JSON.stringify(state)
    : serializeJs(state)
};

exports.getStates = function (apolloProvider, options = {}) {
  const finalOptions = Object.assign({}, {
    exportNamespace: '',
  }, options);
  const states = {};
  for (const key in apolloProvider.clients) {
    const client = apolloProvider.clients[key];
    const state = client.cache.extract();
    states[`${finalOptions.exportNamespace}${key}`] = state;
  }
  return states
};

exports.exportStates = function (apolloProvider, options) {
  const finalOptions = Object.assign({}, {
    globalName: '__APOLLO_STATE__',
    attachTo: 'window',
    useUnsafeSerializer: false,
  }, options);

  return `${finalOptions.attachTo}.${finalOptions.globalName} = ${exports.serializeStates(apolloProvider, options)};`
};
}(ssr));

const require$$61 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(dayjs);

(function (module) {
module.exports = function(modules) {
  var installedModules = {};
  var installedChunks = {
    0: 0
  };
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module2 = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
    module2.l = true;
    return module2.exports;
  }
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];
    var installedChunkData = installedChunks[chunkId];
    if (installedChunkData !== 0) {
      if (installedChunkData) {
        promises.push(installedChunkData[2]);
      } else {
        var promise = new Promise(function(resolve, reject) {
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
          import('../_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( ({ "1": "pages/Index" }[chunkId] || chunkId) + ".js")).then((chunk) => {
            var moreModules = chunk.modules, chunkIds = chunk.ids;
            for (var moduleId in moreModules) {
              modules[moduleId] = moreModules[moduleId];
            }
            var callbacks = [];
            for (var i = 0; i < chunkIds.length; i++) {
              if (installedChunks[chunkIds[i]])
                callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
              installedChunks[chunkIds[i]] = 0;
            }
            for (i = 0; i < callbacks.length; i++)
              callbacks[i]();
          });
        });
        promises.push(installedChunkData[2] = promise);
      }
    }
    return Promise.all(promises);
  };
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1)
      value = __webpack_require__(value);
    if (mode & 8)
      return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = /* @__PURE__ */ Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(ns, key, function(key2) {
          return value[key2];
        }.bind(null, key));
    return ns;
  };
  __webpack_require__.n = function(module2) {
    var getter = module2 && module2.__esModule ? function getDefault() {
      return module2["default"];
    } : function getModuleExports() {
      return module2;
    };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "/_nuxt/";
  __webpack_require__.oe = function(err) {
    process.nextTick(function() {
      throw err;
    });
  };
  return __webpack_require__(__webpack_require__.s = 42);
}([
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "EffectScope", function() {
      return EffectScope;
    });
    __webpack_require__.d(__webpack_exports__, "computed", function() {
      return computed;
    });
    __webpack_require__.d(__webpack_exports__, "createApp", function() {
      return createApp;
    });
    __webpack_require__.d(__webpack_exports__, "createRef", function() {
      return createRef;
    });
    __webpack_require__.d(__webpack_exports__, "customRef", function() {
      return customRef;
    });
    __webpack_require__.d(__webpack_exports__, "default", function() {
      return Plugin;
    });
    __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() {
      return defineAsyncComponent;
    });
    __webpack_require__.d(__webpack_exports__, "defineComponent", function() {
      return defineComponent;
    });
    __webpack_require__.d(__webpack_exports__, "del", function() {
      return del;
    });
    __webpack_require__.d(__webpack_exports__, "effectScope", function() {
      return effectScope;
    });
    __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() {
      return getCurrentInstance;
    });
    __webpack_require__.d(__webpack_exports__, "getCurrentScope", function() {
      return getCurrentScope;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return createElement;
    });
    __webpack_require__.d(__webpack_exports__, "inject", function() {
      return inject;
    });
    __webpack_require__.d(__webpack_exports__, "isRaw", function() {
      return isRaw;
    });
    __webpack_require__.d(__webpack_exports__, "isReactive", function() {
      return isReactive;
    });
    __webpack_require__.d(__webpack_exports__, "isReadonly", function() {
      return isReadonly;
    });
    __webpack_require__.d(__webpack_exports__, "isRef", function() {
      return isRef;
    });
    __webpack_require__.d(__webpack_exports__, "markRaw", function() {
      return markRaw;
    });
    __webpack_require__.d(__webpack_exports__, "nextTick", function() {
      return nextTick;
    });
    __webpack_require__.d(__webpack_exports__, "onActivated", function() {
      return onActivated;
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() {
      return onBeforeMount;
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() {
      return onBeforeUnmount;
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() {
      return onBeforeUpdate;
    });
    __webpack_require__.d(__webpack_exports__, "onDeactivated", function() {
      return onDeactivated;
    });
    __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() {
      return onErrorCaptured;
    });
    __webpack_require__.d(__webpack_exports__, "onMounted", function() {
      return onMounted;
    });
    __webpack_require__.d(__webpack_exports__, "onScopeDispose", function() {
      return onScopeDispose;
    });
    __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() {
      return onServerPrefetch;
    });
    __webpack_require__.d(__webpack_exports__, "onUnmounted", function() {
      return onUnmounted;
    });
    __webpack_require__.d(__webpack_exports__, "onUpdated", function() {
      return onUpdated;
    });
    __webpack_require__.d(__webpack_exports__, "provide", function() {
      return provide;
    });
    __webpack_require__.d(__webpack_exports__, "proxyRefs", function() {
      return proxyRefs;
    });
    __webpack_require__.d(__webpack_exports__, "reactive", function() {
      return reactive;
    });
    __webpack_require__.d(__webpack_exports__, "readonly", function() {
      return readonly;
    });
    __webpack_require__.d(__webpack_exports__, "ref", function() {
      return ref;
    });
    __webpack_require__.d(__webpack_exports__, "set", function() {
      return set$1;
    });
    __webpack_require__.d(__webpack_exports__, "shallowReactive", function() {
      return shallowReactive;
    });
    __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() {
      return shallowReadonly;
    });
    __webpack_require__.d(__webpack_exports__, "shallowRef", function() {
      return shallowRef;
    });
    __webpack_require__.d(__webpack_exports__, "toRaw", function() {
      return toRaw;
    });
    __webpack_require__.d(__webpack_exports__, "toRef", function() {
      return toRef;
    });
    __webpack_require__.d(__webpack_exports__, "toRefs", function() {
      return toRefs;
    });
    __webpack_require__.d(__webpack_exports__, "triggerRef", function() {
      return triggerRef;
    });
    __webpack_require__.d(__webpack_exports__, "unref", function() {
      return unref;
    });
    __webpack_require__.d(__webpack_exports__, "useAttrs", function() {
      return useAttrs;
    });
    __webpack_require__.d(__webpack_exports__, "useCSSModule", function() {
      return useCSSModule;
    });
    __webpack_require__.d(__webpack_exports__, "useCssModule", function() {
      return useCssModule;
    });
    __webpack_require__.d(__webpack_exports__, "useSlots", function() {
      return useSlots;
    });
    __webpack_require__.d(__webpack_exports__, "version", function() {
      return version;
    });
    __webpack_require__.d(__webpack_exports__, "warn", function() {
      return warn$1;
    });
    __webpack_require__.d(__webpack_exports__, "watch", function() {
      return watch;
    });
    __webpack_require__.d(__webpack_exports__, "watchEffect", function() {
      return watchEffect;
    });
    __webpack_require__.d(__webpack_exports__, "watchPostEffect", function() {
      return watchPostEffect;
    });
    __webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() {
      return watchSyncEffect;
    });
    __webpack_require__(44);
    __webpack_require__(45);
    __webpack_require__(46);
    __webpack_require__(47);
    __webpack_require__(48);
    __webpack_require__(49);
    __webpack_require__(50);
    __webpack_require__(51);
    __webpack_require__(52);
    __webpack_require__(53);
    __webpack_require__(54);
    __webpack_require__(55);
    __webpack_require__(56);
    __webpack_require__(57);
    __webpack_require__(58);
    __webpack_require__(59);
    __webpack_require__(60);
    __webpack_require__(61);
    __webpack_require__(62);
    __webpack_require__(63);
    __webpack_require__(64);
    __webpack_require__(65);
    __webpack_require__(66);
    __webpack_require__(67);
    __webpack_require__(68);
    __webpack_require__(69);
    __webpack_require__(70);
    __webpack_require__(71);
    __webpack_require__(72);
    __webpack_require__(73);
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    function warn$1(message) {
      var _a;
      warn(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    }
    var activeEffectScope;
    var effectScopeStack = [];
    var EffectScopeImpl = function() {
      function EffectScopeImpl2(vm) {
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        this.vm = vm;
      }
      EffectScopeImpl2.prototype.run = function(fn) {
        if (this.active) {
          try {
            this.on();
            return fn();
          } finally {
            this.off();
          }
        }
        return;
      };
      EffectScopeImpl2.prototype.on = function() {
        if (this.active) {
          effectScopeStack.push(this);
          activeEffectScope = this;
        }
      };
      EffectScopeImpl2.prototype.off = function() {
        if (this.active) {
          effectScopeStack.pop();
          activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
        }
      };
      EffectScopeImpl2.prototype.stop = function() {
        if (this.active) {
          this.vm.$destroy();
          this.effects.forEach(function(e) {
            return e.stop();
          });
          this.cleanups.forEach(function(cleanup) {
            return cleanup();
          });
          this.active = false;
        }
      };
      return EffectScopeImpl2;
    }();
    var EffectScope = function(_super) {
      __extends(EffectScope2, _super);
      function EffectScope2(detached) {
        if (detached === void 0) {
          detached = false;
        }
        var _this = this;
        var vm = void 0;
        withCurrentInstanceTrackingDisabled(function() {
          vm = defineComponentInstance(getVueConstructor());
        });
        _this = _super.call(this, vm) || this;
        if (!detached) {
          recordEffectScope(_this);
        }
        return _this;
      }
      return EffectScope2;
    }(EffectScopeImpl);
    function recordEffectScope(effect, scope) {
      var _a;
      scope = scope || activeEffectScope;
      if (scope && scope.active) {
        scope.effects.push(effect);
        return;
      }
      var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
      vm && vm.$on("hook:destroyed", function() {
        return effect.stop();
      });
    }
    function effectScope(detached) {
      return new EffectScope(detached);
    }
    function getCurrentScope() {
      return activeEffectScope;
    }
    function onScopeDispose(fn) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
      }
    }
    function getCurrentScopeVM() {
      var _a, _b;
      return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
    }
    function bindCurrentScopeToVM(vm) {
      if (!vm.scope) {
        var scope_1 = new EffectScopeImpl(vm.proxy);
        vm.scope = scope_1;
        vm.proxy.$on("hook:destroyed", function() {
          return scope_1.stop();
        });
      }
      return vm.scope;
    }
    var vueDependency = void 0;
    try {
      var requiredVue = __webpack_require__(9);
      if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue;
      } else if (requiredVue && "default" in requiredVue && isVue(requiredVue.default)) {
        vueDependency = requiredVue.default;
      }
    } catch (_a) {
    }
    var vueConstructor = null;
    var currentInstance = null;
    var currentInstanceTracking = true;
    var PluginInstalledFlag = "__composition_api_installed__";
    function isVue(obj) {
      return obj && isFunction(obj) && obj.name === "Vue";
    }
    function isVueRegistered(Vue) {
      return vueConstructor && hasOwn(Vue, PluginInstalledFlag);
    }
    function getVueConstructor() {
      return vueConstructor;
    }
    function getRegisteredVueOrDefault() {
      var constructor = vueConstructor || vueDependency;
      return constructor;
    }
    function setVueConstructor(Vue) {
      vueConstructor = Vue;
      Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true
      });
    }
    function withCurrentInstanceTrackingDisabled(fn) {
      var prev = currentInstanceTracking;
      currentInstanceTracking = false;
      try {
        fn();
      } finally {
        currentInstanceTracking = prev;
      }
    }
    function setCurrentInstance(instance) {
      if (!currentInstanceTracking)
        return;
      var prev = currentInstance;
      prev === null || prev === void 0 ? void 0 : prev.scope.off();
      currentInstance = instance;
      currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
    }
    function getCurrentInstance() {
      return currentInstance;
    }
    var instanceMapCache = /* @__PURE__ */ new WeakMap();
    function toVue3ComponentInstance(vm) {
      if (instanceMapCache.has(vm)) {
        return instanceMapCache.get(vm);
      }
      var instance = {
        proxy: vm,
        update: vm.$forceUpdate,
        type: vm.$options,
        uid: vm._uid,
        emit: vm.$emit.bind(vm),
        parent: null,
        root: null
      };
      bindCurrentScopeToVM(instance);
      var instanceProps = ["data", "props", "attrs", "refs", "vnode", "slots"];
      instanceProps.forEach(function(prop) {
        proxy(instance, prop, {
          get: function() {
            return vm["$".concat(prop)];
          }
        });
      });
      proxy(instance, "isMounted", {
        get: function() {
          return vm._isMounted;
        }
      });
      proxy(instance, "isUnmounted", {
        get: function() {
          return vm._isDestroyed;
        }
      });
      proxy(instance, "isDeactivated", {
        get: function() {
          return vm._inactive;
        }
      });
      proxy(instance, "emitted", {
        get: function() {
          return vm._events;
        }
      });
      instanceMapCache.set(vm, instance);
      if (vm.$parent) {
        instance.parent = toVue3ComponentInstance(vm.$parent);
      }
      if (vm.$root) {
        instance.root = toVue3ComponentInstance(vm.$root);
      }
      return instance;
    }
    var toString = function(x) {
      return Object.prototype.toString.call(x);
    };
    function isNative(Ctor) {
      return typeof Ctor === "function" && /native code/.test(Ctor.toString());
    }
    var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
    var noopFn = function(_) {
      return _;
    };
    function proxy(target, key, _a) {
      var get2 = _a.get, set2 = _a.set;
      Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get2 || noopFn,
        set: set2 || noopFn
      });
    }
    function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    function hasOwn(obj, key) {
      return Object.hasOwnProperty.call(obj, key);
    }
    function assert(condition, msg) {
      if (!condition) {
        throw new Error("[vue-composition-api] ".concat(msg));
      }
    }
    function isArray(x) {
      return Array.isArray(x);
    }
    var objectToString = Object.prototype.toString;
    var toTypeString = function(value) {
      return objectToString.call(value);
    };
    var isMap = function(val) {
      return toTypeString(val) === "[object Map]";
    };
    var isSet = function(val) {
      return toTypeString(val) === "[object Set]";
    };
    var MAX_VALID_ARRAY_LENGTH = 4294967295;
    function isValidArrayIndex(val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val) && n <= MAX_VALID_ARRAY_LENGTH;
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(x) {
      return toString(x) === "[object Object]";
    }
    function isFunction(x) {
      return typeof x === "function";
    }
    function warn(msg, vm) {
      var Vue = getRegisteredVueOrDefault();
      if (!Vue || !Vue.util)
        console.warn("[vue-composition-api] ".concat(msg));
      else
        Vue.util.warn(msg, vm);
    }
    function logError(err, vm, info) {
      {
        throw err;
      }
    }
    function isSame(value1, value2) {
      if (value1 === value2) {
        return value1 !== 0 || 1 / value1 === 1 / value2;
      } else {
        return value1 !== value1 && value2 !== value2;
      }
    }
    function getCurrentInstanceForFn(hook, target) {
      target = target || getCurrentInstance();
      return target;
    }
    function defineComponentInstance(Ctor, options) {
      if (options === void 0) {
        options = {};
      }
      var silent = Ctor.config.silent;
      Ctor.config.silent = true;
      var vm = new Ctor(options);
      Ctor.config.silent = silent;
      return vm;
    }
    function isComponentInstance(obj) {
      var Vue = getVueConstructor();
      return Vue && obj instanceof Vue;
    }
    function createSlotProxy(vm, slotName) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
          return;
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
      };
    }
    function resolveSlots(slots, normalSlots) {
      var res;
      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        return slots._normalized;
      } else {
        res = {};
        for (var key in slots) {
          if (slots[key] && key[0] !== "$") {
            res[key] = true;
          }
        }
      }
      for (var key in normalSlots) {
        if (!(key in res)) {
          res[key] = true;
        }
      }
      return res;
    }
    var vueInternalClasses;
    var getVueInternalClasses = function() {
      if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
          computed: {
            value: function() {
              return 0;
            }
          }
        });
        var Watcher = vm._computedWatchers.value.constructor;
        var Dep = vm._data.__ob__.dep.constructor;
        vueInternalClasses = {
          Watcher,
          Dep
        };
        vm.$destroy();
      }
      return vueInternalClasses;
    };
    function createSymbol(name) {
      return hasSymbol ? Symbol.for(name) : name;
    }
    var WatcherPreFlushQueueKey = createSymbol("composition-api.preFlushQueue");
    var WatcherPostFlushQueueKey = createSymbol("composition-api.postFlushQueue");
    var RefKey = "composition-api.refKey";
    var accessModifiedSet = /* @__PURE__ */ new WeakMap();
    var rawSet = /* @__PURE__ */ new WeakMap();
    var readonlySet = /* @__PURE__ */ new WeakMap();
    function set$1(target, key, val) {
      var Vue = getVueConstructor();
      var _a = Vue.util; _a.warn; var defineReactive = _a.defineReactive;
      var ob = target.__ob__;
      function ssrMockReactivity() {
        if (ob && isObject(val) && !hasOwn(val, "__ob__")) {
          mockReactivityDeep(val);
        }
      }
      if (isArray(target)) {
        if (isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key);
          target.splice(key, 1, val);
          ssrMockReactivity();
          return val;
        } else if (key === "length" && val !== target.length) {
          target.length = val;
          ob === null || ob === void 0 ? void 0 : ob.dep.notify();
          return val;
        }
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        ssrMockReactivity();
        return val;
      }
      if (target._isVue || ob && ob.vmCount) {
        return val;
      }
      if (!ob) {
        target[key] = val;
        return val;
      }
      defineReactive(ob.value, key, val);
      defineAccessControl(target, key, val);
      ssrMockReactivity();
      ob.dep.notify();
      return val;
    }
    var _isForceTrigger = false;
    function isForceTrigger() {
      return _isForceTrigger;
    }
    function setForceTrigger(v) {
      _isForceTrigger = v;
    }
    var RefImpl = function() {
      function RefImpl2(_a) {
        var get2 = _a.get, set2 = _a.set;
        proxy(this, "value", {
          get: get2,
          set: set2
        });
      }
      return RefImpl2;
    }();
    function createRef(options, isReadonly2, isComputed) {
      if (isReadonly2 === void 0) {
        isReadonly2 = false;
      }
      if (isComputed === void 0) {
        isComputed = false;
      }
      var r = new RefImpl(options);
      if (isComputed)
        r.effect = true;
      var sealed = Object.seal(r);
      if (isReadonly2)
        readonlySet.set(sealed, true);
      return sealed;
    }
    function ref(raw) {
      var _a;
      if (isRef(raw)) {
        return raw;
      }
      var value = reactive((_a = {}, _a[RefKey] = raw, _a));
      return createRef({
        get: function() {
          return value[RefKey];
        },
        set: function(v) {
          return value[RefKey] = v;
        }
      });
    }
    function isRef(value) {
      return value instanceof RefImpl;
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }
    function toRefs(obj) {
      if (!isPlainObject(obj))
        return obj;
      var ret = {};
      for (var key in obj) {
        ret[key] = toRef(obj, key);
      }
      return ret;
    }
    function customRef(factory) {
      var version2 = ref(0);
      return createRef(factory(function() {
        return void version2.value;
      }, function() {
        ++version2.value;
      }));
    }
    function toRef(object, key) {
      if (!(key in object))
        set$1(object, key, void 0);
      var v = object[key];
      if (isRef(v))
        return v;
      return createRef({
        get: function() {
          return object[key];
        },
        set: function(v2) {
          return object[key] = v2;
        }
      });
    }
    function shallowRef(raw) {
      var _a;
      if (isRef(raw)) {
        return raw;
      }
      var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
      return createRef({
        get: function() {
          return value[RefKey];
        },
        set: function(v) {
          return value[RefKey] = v;
        }
      });
    }
    function triggerRef(value) {
      if (!isRef(value))
        return;
      setForceTrigger(true);
      value.value = value.value;
      setForceTrigger(false);
    }
    function proxyRefs(objectWithRefs) {
      var _a, e_1, _b;
      if (isReactive(objectWithRefs)) {
        return objectWithRefs;
      }
      var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
      def(value, RefKey, value[RefKey], false);
      var _loop_1 = function(key2) {
        proxy(value, key2, {
          get: function() {
            if (isRef(value[RefKey][key2])) {
              return value[RefKey][key2].value;
            }
            return value[RefKey][key2];
          },
          set: function(v) {
            if (isRef(value[RefKey][key2])) {
              return value[RefKey][key2].value = unref(v);
            }
            value[RefKey][key2] = unref(v);
          }
        });
      };
      try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var key = _d.value;
          _loop_1(key);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_b = _c.return))
            _b.call(_c);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return value;
    }
    function isRaw(obj) {
      var _a;
      return Boolean(obj && hasOwn(obj, "__ob__") && typeof obj.__ob__ === "object" && ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
    }
    function isReactive(obj) {
      var _a;
      return Boolean(obj && hasOwn(obj, "__ob__") && typeof obj.__ob__ === "object" && !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
    }
    function setupAccessControl(target) {
      if (!isPlainObject(target) || isRaw(target) || isArray(target) || isRef(target) || isComponentInstance(target) || accessModifiedSet.has(target))
        return;
      accessModifiedSet.set(target, true);
      var keys = Object.keys(target);
      for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
      }
    }
    function defineAccessControl(target, key, val) {
      if (key === "__ob__")
        return;
      if (isRaw(target[key]))
        return;
      var getter;
      var setter;
      var property = Object.getOwnPropertyDescriptor(target, key);
      if (property) {
        if (property.configurable === false) {
          return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) && arguments.length === 2) {
          val = target[key];
        }
      }
      setupAccessControl(val);
      proxy(target, key, {
        get: function getterHandler() {
          var value = getter ? getter.call(target) : val;
          if (key !== RefKey && isRef(value)) {
            return value.value;
          } else {
            return value;
          }
        },
        set: function setterHandler(newVal) {
          if (getter && !setter)
            return;
          if (key !== RefKey && isRef(val) && !isRef(newVal)) {
            val.value = newVal;
          } else if (setter) {
            setter.call(target, newVal);
            val = newVal;
          } else {
            val = newVal;
          }
          setupAccessControl(newVal);
        }
      });
    }
    function observe(obj) {
      var Vue = getRegisteredVueOrDefault();
      var observed;
      if (Vue.observable) {
        observed = Vue.observable(obj);
      } else {
        var vm = defineComponentInstance(Vue, {
          data: {
            $$state: obj
          }
        });
        observed = vm._data.$$state;
      }
      if (!hasOwn(observed, "__ob__")) {
        mockReactivityDeep(observed);
      }
      return observed;
    }
    function mockReactivityDeep(obj, seen) {
      var e_1, _a;
      if (seen === void 0) {
        seen = /* @__PURE__ */ new Set();
      }
      if (seen.has(obj) || hasOwn(obj, "__ob__") || !Object.isExtensible(obj))
        return;
      def(obj, "__ob__", mockObserver(obj));
      seen.add(obj);
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var value = obj[key];
          if (!(isPlainObject(value) || isArray(value)) || isRaw(value) || !Object.isExtensible(value)) {
            continue;
          }
          mockReactivityDeep(value, seen);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    function mockObserver(value) {
      if (value === void 0) {
        value = {};
      }
      return {
        value,
        dep: {
          notify: noopFn,
          depend: noopFn,
          addSub: noopFn,
          removeSub: noopFn
        }
      };
    }
    function createObserver() {
      return observe({}).__ob__;
    }
    function shallowReactive(obj) {
      var e_2, _a;
      if (!isObject(obj)) {
        return obj;
      }
      if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
        return obj;
      }
      var observed = observe(isArray(obj) ? [] : {});
      var ob = observed.__ob__;
      var _loop_1 = function(key2) {
        var val = obj[key2];
        var getter;
        var setter;
        var property = Object.getOwnPropertyDescriptor(obj, key2);
        if (property) {
          if (property.configurable === false) {
            return "continue";
          }
          getter = property.get;
          setter = property.set;
        }
        proxy(observed, key2, {
          get: function getterHandler() {
            var _a2;
            var value = getter ? getter.call(obj) : val;
            (_a2 = ob.dep) === null || _a2 === void 0 ? void 0 : _a2.depend();
            return value;
          },
          set: function setterHandler(newVal) {
            var _a2;
            if (getter && !setter)
              return;
            var value = getter ? getter.call(obj) : val;
            if (!isForceTrigger() && value === newVal)
              return;
            if (setter) {
              setter.call(obj, newVal);
            } else {
              val = newVal;
            }
            (_a2 = ob.dep) === null || _a2 === void 0 ? void 0 : _a2.notify();
          }
        });
      };
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          _loop_1(key);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return observed;
    }
    function reactive(obj) {
      if (!isObject(obj)) {
        return obj;
      }
      if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
        return obj;
      }
      var observed = observe(obj);
      setupAccessControl(observed);
      return observed;
    }
    function markRaw(obj) {
      if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj;
      }
      var ob = createObserver();
      ob.__raw__ = true;
      def(obj, "__ob__", ob);
      rawSet.set(obj, true);
      return obj;
    }
    function toRaw(observed) {
      var _a, _b;
      if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed;
      }
      return ((_b = (_a = observed) === null || _a === void 0 ? void 0 : _a.__ob__) === null || _b === void 0 ? void 0 : _b.value) || observed;
    }
    function isReadonly(obj) {
      return readonlySet.has(obj);
    }
    function readonly(target) {
      {
        readonlySet.set(target, true);
      }
      return target;
    }
    function shallowReadonly(obj) {
      var e_1, _a;
      if (!isObject(obj)) {
        return obj;
      }
      if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj) && !isRef(obj)) {
        return obj;
      }
      var readonlyObj = isRef(obj) ? new RefImpl({}) : isReactive(obj) ? observe({}) : {};
      var source = reactive({});
      var ob = source.__ob__;
      var _loop_1 = function(key2) {
        var val = obj[key2];
        var getter;
        var property = Object.getOwnPropertyDescriptor(obj, key2);
        if (property) {
          if (property.configurable === false && !isRef(obj)) {
            return "continue";
          }
          getter = property.get;
        }
        proxy(readonlyObj, key2, {
          get: function getterHandler() {
            var value = getter ? getter.call(obj) : val;
            ob.dep.depend();
            return value;
          },
          set: function(v) {
          }
        });
      };
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          _loop_1(key);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      readonlySet.set(readonlyObj, true);
      return readonlyObj;
    }
    function del(target, key) {
      var Vue = getVueConstructor();
      Vue.util.warn;
      if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
      }
      var ob = target.__ob__;
      if (target._isVue || ob && ob.vmCount) {
        return;
      }
      if (!hasOwn(target, key)) {
        return;
      }
      delete target[key];
      if (!ob) {
        return;
      }
      ob.dep.notify();
    }
    var genName = function(name) {
      return "on".concat(name[0].toUpperCase() + name.slice(1));
    };
    function createLifeCycle(lifeCyclehook) {
      return function(callback, target) {
        var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
        return instance && injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback);
      };
    }
    function injectHookOption(Vue, instance, hook, val) {
      var options = instance.proxy.$options;
      var mergeFn = Vue.config.optionMergeStrategies[hook];
      var wrappedHook = wrapHookCall(instance, val);
      options[hook] = mergeFn(options[hook], wrappedHook);
      return wrappedHook;
    }
    function wrapHookCall(instance, fn) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var prev = getCurrentInstance();
        setCurrentInstance(instance);
        try {
          return fn.apply(void 0, __spreadArray([], __read(args), false));
        } finally {
          setCurrentInstance(prev);
        }
      };
    }
    var onBeforeMount = createLifeCycle("beforeMount");
    var onMounted = createLifeCycle("mounted");
    var onBeforeUpdate = createLifeCycle("beforeUpdate");
    var onUpdated = createLifeCycle("updated");
    var onBeforeUnmount = createLifeCycle("beforeDestroy");
    var onUnmounted = createLifeCycle("destroyed");
    var onErrorCaptured = createLifeCycle("errorCaptured");
    var onActivated = createLifeCycle("activated");
    var onDeactivated = createLifeCycle("deactivated");
    var onServerPrefetch = createLifeCycle("serverPrefetch");
    var fallbackVM;
    function flushPreQueue() {
      flushQueue(this, WatcherPreFlushQueueKey);
    }
    function flushPostQueue() {
      flushQueue(this, WatcherPostFlushQueueKey);
    }
    function hasWatchEnv(vm) {
      return vm[WatcherPreFlushQueueKey] !== void 0;
    }
    function installWatchEnv(vm) {
      vm[WatcherPreFlushQueueKey] = [];
      vm[WatcherPostFlushQueueKey] = [];
      vm.$on("hook:beforeUpdate", flushPreQueue);
      vm.$on("hook:updated", flushPostQueue);
    }
    function getWatcherOption(options) {
      return __assign({
        immediate: false,
        deep: false,
        flush: "pre"
      }, options);
    }
    function getWatchEffectOption(options) {
      return __assign({
        flush: "pre"
      }, options);
    }
    function getWatcherVM() {
      var vm = getCurrentScopeVM();
      if (!vm) {
        if (!fallbackVM) {
          fallbackVM = defineComponentInstance(getVueConstructor());
        }
        vm = fallbackVM;
      } else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
      }
      return vm;
    }
    function flushQueue(vm, key) {
      var queue = vm[key];
      for (var index = 0; index < queue.length; index++) {
        queue[index]();
      }
      queue.length = 0;
    }
    function queueFlushJob(vm, fn, mode) {
      var fallbackFlush = function() {
        vm.$nextTick(function() {
          if (vm[WatcherPreFlushQueueKey].length) {
            flushQueue(vm, WatcherPreFlushQueueKey);
          }
          if (vm[WatcherPostFlushQueueKey].length) {
            flushQueue(vm, WatcherPostFlushQueueKey);
          }
        });
      };
      switch (mode) {
        case "pre":
          fallbackFlush();
          vm[WatcherPreFlushQueueKey].push(fn);
          break;
        case "post":
          fallbackFlush();
          vm[WatcherPostFlushQueueKey].push(fn);
          break;
        default:
          assert(false, 'flush must be one of ["post", "pre", "sync"], but got '.concat(mode));
          break;
      }
    }
    function createVueWatcher(vm, getter, callback, options) {
      var index = vm._watchers.length;
      vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before
      });
      return vm._watchers[index];
    }
    function patchWatcherTeardown(watcher, runCleanup) {
      var _teardown = watcher.teardown;
      watcher.teardown = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        _teardown.apply(watcher, args);
        runCleanup();
      };
    }
    function createWatcher(vm, source, cb, options) {
      var _a;
      var flushMode = options.flush;
      var isSync = flushMode === "sync";
      var cleanup;
      var registerCleanup = function(fn) {
        cleanup = function() {
          try {
            fn();
          } catch (error) {
            logError(error);
          }
        };
      };
      var runCleanup = function() {
        if (cleanup) {
          cleanup();
          cleanup = null;
        }
      };
      var createScheduler = function(fn) {
        if (isSync || vm === fallbackVM) {
          return fn;
        }
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return queueFlushJob(vm, function() {
            fn.apply(void 0, __spreadArray([], __read(args), false));
          }, flushMode);
        };
      };
      if (cb === null) {
        var running_1 = false;
        var getter_1 = function() {
          if (running_1) {
            return;
          }
          try {
            running_1 = true;
            source(registerCleanup);
          } finally {
            running_1 = false;
          }
        };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
          deep: options.deep || false,
          sync: isSync,
          before: runCleanup
        });
        patchWatcherTeardown(watcher_1, runCleanup);
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        watcher_1.get = createScheduler(originGet);
        return function() {
          watcher_1.teardown();
        };
      }
      var deep = options.deep;
      var isMultiSource = false;
      var getter;
      if (isRef(source)) {
        getter = function() {
          return source.value;
        };
      } else if (isReactive(source)) {
        getter = function() {
          return source;
        };
        deep = true;
      } else if (isArray(source)) {
        isMultiSource = true;
        getter = function() {
          return source.map(function(s) {
            if (isRef(s)) {
              return s.value;
            } else if (isReactive(s)) {
              return traverse(s);
            } else if (isFunction(s)) {
              return s();
            } else {
              return noopFn;
            }
          });
        };
      } else if (isFunction(source)) {
        getter = source;
      } else {
        getter = noopFn;
      }
      if (deep) {
        var baseGetter_1 = getter;
        getter = function() {
          return traverse(baseGetter_1());
        };
      }
      var applyCb = function(n, o) {
        if (!deep && isMultiSource && n.every(function(v, i) {
          return isSame(v, o[i]);
        }))
          return;
        runCleanup();
        return cb(n, o, registerCleanup);
      };
      var callback = createScheduler(applyCb);
      if (options.immediate) {
        var originalCallback_1 = callback;
        var shiftCallback_1 = function(n, o) {
          shiftCallback_1 = originalCallback_1;
          return applyCb(n, isArray(n) ? [] : o);
        };
        callback = function(n, o) {
          return shiftCallback_1(n, o);
        };
      }
      var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep,
        sync: isSync
      });
      var watcher = vm._watchers[vm._watchers.length - 1];
      if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
          update: function() {
            watcher.run();
          }
        });
      }
      patchWatcherTeardown(watcher, runCleanup);
      return function() {
        stop();
      };
    }
    function watchEffect(effect, options) {
      var opts = getWatchEffectOption(options);
      var vm = getWatcherVM();
      return createWatcher(vm, effect, null, opts);
    }
    function watchPostEffect(effect) {
      return watchEffect(effect, {
        flush: "post"
      });
    }
    function watchSyncEffect(effect) {
      return watchEffect(effect, {
        flush: "sync"
      });
    }
    function watch(source, cb, options) {
      var callback = null;
      if (isFunction(cb)) {
        callback = cb;
      } else {
        options = cb;
        callback = null;
      }
      var opts = getWatcherOption(options);
      var vm = getWatcherVM();
      return createWatcher(vm, source, callback, opts);
    }
    function traverse(value, seen) {
      if (seen === void 0) {
        seen = /* @__PURE__ */ new Set();
      }
      if (!isObject(value) || seen.has(value) || rawSet.has(value)) {
        return value;
      }
      seen.add(value);
      if (isRef(value)) {
        traverse(value.value, seen);
      } else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          traverse(value[i], seen);
        }
      } else if (isSet(value) || isMap(value)) {
        value.forEach(function(v) {
          traverse(v, seen);
        });
      } else if (isPlainObject(value)) {
        for (var key in value) {
          traverse(value[key], seen);
        }
      }
      return value;
    }
    function computed(getterOrOptions) {
      var vm = getCurrentScopeVM();
      var getter;
      var setter;
      if (isFunction(getterOrOptions)) {
        getter = getterOrOptions;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      var computedSetter;
      var computedGetter;
      if (vm && !vm.$isServer) {
        var _a = getVueInternalClasses(), Watcher_1 = _a.Watcher, Dep_1 = _a.Dep;
        var watcher_1;
        computedGetter = function() {
          if (!watcher_1) {
            watcher_1 = new Watcher_1(vm, getter, noopFn, {
              lazy: true
            });
          }
          if (watcher_1.dirty) {
            watcher_1.evaluate();
          }
          if (Dep_1.target) {
            watcher_1.depend();
          }
          return watcher_1.value;
        };
        computedSetter = function(v) {
          if (setter) {
            setter(v);
          }
        };
      } else {
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
          computed: {
            $$state: {
              get: getter,
              set: setter
            }
          }
        });
        vm && vm.$on("hook:destroyed", function() {
          return computedHost_1.$destroy();
        });
        computedGetter = function() {
          return computedHost_1.$$state;
        };
        computedSetter = function(v) {
          computedHost_1.$$state = v;
        };
      }
      return createRef({
        get: computedGetter,
        set: computedSetter
      }, !setter, true);
    }
    var NOT_FOUND = {};
    function resolveInject(provideKey, vm) {
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          return source._provided[provideKey];
        }
        source = source.$parent;
      }
      return NOT_FOUND;
    }
    function provide(key, value) {
      var _a;
      var vm = (_a = getCurrentInstanceForFn()) === null || _a === void 0 ? void 0 : _a.proxy;
      if (!vm)
        return;
      if (!vm._provided) {
        var provideCache_1 = {};
        proxy(vm, "_provided", {
          get: function() {
            return provideCache_1;
          },
          set: function(v) {
            return Object.assign(provideCache_1, v);
          }
        });
      }
      vm._provided[key] = value;
    }
    function inject(key, defaultValue, treatDefaultAsFactory) {
      var _a;
      if (treatDefaultAsFactory === void 0) {
        treatDefaultAsFactory = false;
      }
      var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
      if (!vm) {
        return;
      }
      if (!key) {
        return defaultValue;
      }
      var val = resolveInject(key, vm);
      if (val !== NOT_FOUND) {
        return val;
      }
      if (defaultValue === void 0 && false) {
        warn('Injection "'.concat(String(key), '" not found'), vm);
      }
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    var EMPTY_OBJ = {};
    var useCssModule = function(name) {
      var _a;
      if (name === void 0) {
        name = "$style";
      }
      var instance = getCurrentInstance();
      if (!instance) {
        return EMPTY_OBJ;
      }
      var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
      if (!mod) {
        return EMPTY_OBJ;
      }
      return mod;
    };
    var useCSSModule = useCssModule;
    function createApp(rootComponent, rootProps) {
      if (rootProps === void 0) {
        rootProps = void 0;
      }
      var V = getVueConstructor();
      var mountedVM = void 0;
      var app = {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        directive: function(name, dir) {
          if (dir) {
            V.directive(name, dir);
            return app;
          } else {
            return V.directive(name);
          }
        },
        mount: function(el, hydrating) {
          if (!mountedVM) {
            mountedVM = new V(__assign({
              propsData: rootProps
            }, rootComponent));
            mountedVM.$mount(el, hydrating);
            return mountedVM;
          } else {
            return mountedVM;
          }
        },
        unmount: function() {
          if (mountedVM) {
            mountedVM.$destroy();
            mountedVM = void 0;
          }
        }
      };
      return app;
    }
    var nextTick = function nextTick2() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
    };
    var fallbackCreateElement;
    var createElement = function createElement2() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var instance = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
      if (!instance) {
        if (!fallbackCreateElement) {
          fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
      }
      return instance.$createElement.apply(instance, args);
    };
    function useSlots() {
      return getContext().slots;
    }
    function useAttrs() {
      return getContext().attrs;
    }
    function getContext() {
      var i = getCurrentInstance();
      return i.setupContext;
    }
    function set(vm, key, value) {
      var state = vm.__composition_api_state__ = vm.__composition_api_state__ || {};
      state[key] = value;
    }
    function get(vm, key) {
      return (vm.__composition_api_state__ || {})[key];
    }
    var vmStateManager = {
      set,
      get
    };
    function asVmProperty(vm, propName, propValue) {
      var props = vm.$options.props;
      if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
          proxy(vm, propName, {
            get: function() {
              return propValue.value;
            },
            set: function(val) {
              propValue.value = val;
            }
          });
        } else {
          proxy(vm, propName, {
            get: function() {
              if (isReactive(propValue)) {
                propValue.__ob__.dep.depend();
              }
              return propValue;
            },
            set: function(val) {
              propValue = val;
            }
          });
        }
      }
    }
    function updateTemplateRef(vm) {
      var rawBindings = vmStateManager.get(vm, "rawBindings") || {};
      if (!rawBindings || !Object.keys(rawBindings).length)
        return;
      var refs = vm.$refs;
      var oldRefKeys = vmStateManager.get(vm, "refs") || [];
      for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
          setupValue.value = null;
        }
      }
      var newKeys = Object.keys(refs);
      var validNewKeys = [];
      for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
          setupValue.value = refs[key];
          validNewKeys.push(key);
        }
      }
      vmStateManager.set(vm, "refs", validNewKeys);
    }
    function afterRender(vm) {
      var stack = [vm._vnode];
      while (stack.length) {
        var vnode = stack.pop();
        if (vnode.context)
          updateTemplateRef(vnode.context);
        if (vnode.children) {
          for (var i = 0; i < vnode.children.length; ++i) {
            stack.push(vnode.children[i]);
          }
        }
      }
    }
    function updateVmAttrs(vm, ctx) {
      var e_1, _a;
      if (!vm) {
        return;
      }
      var attrBindings = vmStateManager.get(vm, "attrBindings");
      if (!attrBindings && !ctx) {
        return;
      }
      if (!attrBindings) {
        var observedData = reactive({});
        attrBindings = {
          ctx,
          data: observedData
        };
        vmStateManager.set(vm, "attrBindings", attrBindings);
        proxy(ctx, "attrs", {
          get: function() {
            return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data;
          },
          set: function() {
          }
        });
      }
      var source = vm.$attrs;
      var _loop_1 = function(attr2) {
        if (!hasOwn(attrBindings.data, attr2)) {
          proxy(attrBindings.data, attr2, {
            get: function() {
              return vm.$attrs[attr2];
            }
          });
        }
      };
      try {
        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var attr = _c.value;
          _loop_1(attr);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    function resolveScopedSlots(vm, slotsProxy) {
      var parentVNode = vm.$options._parentVnode;
      if (!parentVNode)
        return;
      var prevSlots = vmStateManager.get(vm, "slots") || [];
      var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
      for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
          delete slotsProxy[key];
        }
      }
      var slotNames = Object.keys(curSlots);
      for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
          slotsProxy[key] = createSlotProxy(vm, key);
        }
      }
      vmStateManager.set(vm, "slots", slotNames);
    }
    function activateCurrentInstance(instance, fn, onError) {
      var preVm = getCurrentInstance();
      setCurrentInstance(instance);
      try {
        return fn(instance);
      } catch (err) {
        if (onError) {
          onError(err);
        } else {
          throw err;
        }
      } finally {
        setCurrentInstance(preVm);
      }
    }
    function mixin(Vue) {
      Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function() {
          afterRender(this);
        },
        beforeUpdate: function() {
          updateVmAttrs(this);
        },
        updated: function() {
          afterRender(this);
        }
      });
      function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
          $options.render = function() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return activateCurrentInstance(toVue3ComponentInstance(vm), function() {
              return render.apply(_this, args);
            });
          };
        }
        if (!setup) {
          return;
        }
        if (!isFunction(setup)) {
          return;
        }
        var data = $options.data;
        $options.data = function wrappedData() {
          initSetup(vm, vm.$props);
          return isFunction(data) ? data.call(vm, vm) : data || {};
        };
      }
      function initSetup(vm, props) {
        if (props === void 0) {
          props = {};
        }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        var instance = toVue3ComponentInstance(vm);
        instance.setupContext = ctx;
        def(props, "__ob__", createObserver());
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(instance, function() {
          binding = setup(props, ctx);
        });
        if (!binding)
          return;
        if (isFunction(binding)) {
          var bindingFunc_1 = binding;
          vm.$options.render = function() {
            resolveScopedSlots(vm, ctx.slots);
            return activateCurrentInstance(instance, function() {
              return bindingFunc_1();
            });
          };
          return;
        } else if (isObject(binding)) {
          if (isReactive(binding)) {
            binding = toRefs(binding);
          }
          vmStateManager.set(vm, "rawBindings", binding);
          var bindingObj_1 = binding;
          Object.keys(bindingObj_1).forEach(function(name) {
            var bindingValue = bindingObj_1[name];
            if (!isRef(bindingValue)) {
              if (!isReactive(bindingValue)) {
                if (isFunction(bindingValue)) {
                  var copy_1 = bindingValue;
                  bindingValue = bindingValue.bind(vm);
                  Object.keys(copy_1).forEach(function(ele) {
                    bindingValue[ele] = copy_1[ele];
                  });
                } else if (!isObject(bindingValue)) {
                  bindingValue = ref(bindingValue);
                } else if (hasReactiveArrayChild(bindingValue)) {
                  customReactive(bindingValue);
                }
              } else if (isArray(bindingValue)) {
                bindingValue = ref(bindingValue);
              }
            }
            asVmProperty(vm, name, bindingValue);
          });
          return;
        }
      }
      function customReactive(target, seen) {
        if (seen === void 0) {
          seen = /* @__PURE__ */ new Set();
        }
        if (seen.has(target))
          return;
        if (!isPlainObject(target) || isRef(target) || isReactive(target) || isRaw(target))
          return;
        var Vue2 = getVueConstructor();
        var defineReactive = Vue2.util.defineReactive;
        Object.keys(target).forEach(function(k) {
          var val = target[k];
          defineReactive(target, k, val);
          if (val) {
            seen.add(val);
            customReactive(val, seen);
          }
          return;
        });
      }
      function hasReactiveArrayChild(target, visited) {
        if (visited === void 0) {
          visited = /* @__PURE__ */ new Map();
        }
        if (visited.has(target)) {
          return visited.get(target);
        }
        visited.set(target, false);
        if (isArray(target) && isReactive(target)) {
          visited.set(target, true);
          return true;
        }
        if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
          return false;
        }
        return Object.keys(target).some(function(x) {
          return hasReactiveArrayChild(target[x], visited);
        });
      }
      function createSetupContext(vm) {
        var ctx = {
          slots: {}
        };
        var propsPlain = ["root", "parent", "refs", "listeners", "isServer", "ssrContext"];
        var methodReturnVoid = ["emit"];
        propsPlain.forEach(function(key) {
          var srcKey = "$".concat(key);
          proxy(ctx, key, {
            get: function() {
              return vm[srcKey];
            },
            set: function() {
            }
          });
        });
        updateVmAttrs(vm, ctx);
        methodReturnVoid.forEach(function(key) {
          var srcKey = "$".concat(key);
          proxy(ctx, key, {
            get: function() {
              return function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                var fn = vm[srcKey];
                fn.apply(vm, args);
              };
            }
          });
        });
        return ctx;
      }
    }
    function mergeData(from, to) {
      if (!from)
        return to;
      if (!to)
        return from;
      var key;
      var toVal;
      var fromVal;
      var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        if (key === "__ob__")
          continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          to[key] = fromVal;
        } else if (toVal !== fromVal && isPlainObject(toVal) && !isRef(toVal) && isPlainObject(fromVal) && !isRef(fromVal)) {
          mergeData(fromVal, toVal);
        }
      }
      return to;
    }
    function install(Vue) {
      if (isVueRegistered(Vue)) {
        return;
      }
      Vue.config.optionMergeStrategies.setup = function(parent, child) {
        return function mergedSetupFn(props, context) {
          return mergeData(isFunction(parent) ? parent(props, context) || {} : void 0, isFunction(child) ? child(props, context) || {} : void 0);
        };
      };
      setVueConstructor(Vue);
      mixin(Vue);
    }
    var Plugin = {
      install: function(Vue) {
        return install(Vue);
      }
    };
    function defineComponent(options) {
      return options;
    }
    function defineAsyncComponent(source) {
      if (isFunction(source)) {
        source = {
          loader: source
        };
      }
      var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout; source.suspensible; var userOnError = source.onError;
      var pendingRequest = null;
      var retries = 0;
      var retry = function() {
        retries++;
        pendingRequest = null;
        return load();
      };
      var load = function() {
        var thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch(function(err) {
          err = err instanceof Error ? err : new Error(String(err));
          if (userOnError) {
            return new Promise(function(resolve, reject) {
              var userRetry = function() {
                return resolve(retry());
              };
              var userFail = function() {
                return reject(err);
              };
              userOnError(err, userRetry, userFail, retries + 1);
            });
          } else {
            throw err;
          }
        }).then(function(comp) {
          if (thisRequest !== pendingRequest && pendingRequest) {
            return pendingRequest;
          }
          if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
            comp = comp.default;
          }
          return comp;
        }));
      };
      return function() {
        var component = load();
        return {
          component,
          delay,
          timeout,
          error: errorComponent,
          loading: loadingComponent
        };
      };
    }
    var version = "1.4.9";
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
    var vue__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a;
    });
    var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"];
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"];
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["isRef"];
    });
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onBeforeMount"];
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onServerPrefetch"];
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"];
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"];
    });
    vue__WEBPACK_IMPORTED_MODULE_0___default.a;
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.version;
  },
  function(module2, exports) {
    module2.exports = require$$0$1;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return normalizeComponent;
    });
    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
      var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }
      if (functionalTemplate) {
        options.functional = true;
      }
      if (scopeId) {
        options._scopeId = "data-v-" + scopeId;
      }
      var hook;
      if (moduleIdentifier) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function() {
          injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
        } : injectStyles;
      }
      if (hook) {
        if (options.functional) {
          options._injectStyles = hook;
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
      return {
        exports: scriptExports,
        options
      };
    }
  },
  function(module2, exports) {
    module2.exports = require$$1;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return setNuxtAppInstance;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return callWithNuxt;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return defineNuxtPlugin;
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return useNuxtApp;
    });
    var vue_composition_api = __webpack_require__(0);
    __webpack_require__(13);
    __webpack_require__(10);
    __webpack_require__(1);
    __webpack_require__(29);
    __webpack_require__(8);
    __webpack_require__(14);
    vue_composition_api["defineComponent"];
    let currentNuxtAppInstance;
    const setNuxtAppInstance = (nuxt) => {
      currentNuxtAppInstance = nuxt;
    };
    function callWithNuxt(nuxt, setup, args) {
      setNuxtAppInstance(nuxt);
      const p = args ? setup(...args) : setup();
      {
        setNuxtAppInstance(null);
      }
      return p;
    }
    function defineNuxtPlugin(plugin) {
      return async (ctx, inject) => {
        const result = await callWithNuxt(ctx.$_nuxtApp, plugin, [ctx.$_nuxtApp]);
        if (result && result.provide) {
          for (const key in result.provide) {
            inject(key, result.provide[key]);
          }
        }
        return result;
      };
    }
    const useNuxtApp = () => {
      const vm = Object(vue_composition_api["getCurrentInstance"])();
      if (!vm) {
        if (!currentNuxtAppInstance) {
          throw new Error("nuxt app instance unavailable");
        }
        return currentNuxtAppInstance;
      }
      return vm.proxy.$_nuxtApp;
    };
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = function(cssWithMappingToString) {
      var list = [];
      list.toString = function toString() {
        return this.map(function(item) {
          var content = cssWithMappingToString(item);
          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }
          return content;
        }).join("");
      };
      list.i = function(modules, mediaQuery, dedupe) {
        if (typeof modules === "string") {
          modules = [[null, modules, ""]];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }
        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);
          if (dedupe && alreadyImportedModules[item[0]]) {
            continue;
          }
          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }
          list.push(item);
        }
      };
      return list;
    };
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "default", function() {
      return addStylesServer;
    });
    function listToStyles(parentId, list) {
      var styles = [];
      var newStyles = {};
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          id: parentId + ":" + i,
          css,
          media,
          sourceMap
        };
        if (!newStyles[id]) {
          styles.push(newStyles[id] = { id, parts: [part] });
        } else {
          newStyles[id].parts.push(part);
        }
      }
      return styles;
    }
    function addStylesServer(parentId, list, isProduction, context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (context) {
        if (!context.hasOwnProperty("styles")) {
          Object.defineProperty(context, "styles", {
            enumerable: true,
            get: function() {
              return renderStyles(context._styles);
            }
          });
          context._renderStyles = renderStyles;
        }
        var styles = context._styles || (context._styles = {});
        list = listToStyles(parentId, list);
        if (isProduction) {
          addStyleProd(styles, list);
        } else {
          addStyleDev(styles, list);
        }
      }
    }
    function addStyleProd(styles, list) {
      for (var i = 0; i < list.length; i++) {
        var parts = list[i].parts;
        for (var j = 0; j < parts.length; j++) {
          var part = parts[j];
          var id = part.media || "default";
          var style = styles[id];
          if (style) {
            if (style.ids.indexOf(part.id) < 0) {
              style.ids.push(part.id);
              style.css += "\n" + part.css;
            }
          } else {
            styles[id] = {
              ids: [part.id],
              css: part.css,
              media: part.media
            };
          }
        }
      }
    }
    function addStyleDev(styles, list) {
      for (var i = 0; i < list.length; i++) {
        var parts = list[i].parts;
        for (var j = 0; j < parts.length; j++) {
          var part = parts[j];
          styles[part.id] = {
            ids: [part.id],
            css: part.css,
            media: part.media
          };
        }
      }
    }
    function renderStyles(styles) {
      var css = "";
      for (var key in styles) {
        var style = styles[key];
        css += '<style data-vue-ssr-id="' + style.ids.join(" ") + '"' + (style.media ? ' media="' + style.media + '"' : "") + ">" + style.css + "</style>";
      }
      return css;
    }
  },
  function(module2, exports) {
    module2.exports = require$$2;
  },
  function(module2, exports) {
    module2.exports = vue_runtime_common.exports;
  },
  function(module2, exports) {
    module2.exports = require$$4;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    const middleware = {};
    __webpack_exports__["default"] = middleware;
  },
  function(module2, exports) {
    module2.exports = require$$5;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    (function(URLSearchParams) {
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return appendHeader;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return sendRedirect;
      });
      __webpack_require__(2);
      __webpack_require__(28);
      __webpack_require__(14);
      __webpack_require__(8);
      const MIMES = {
        html: "text/html",
        json: "application/json"
      };
      const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
      function send(event, data, type) {
        if (type) {
          defaultContentType(event, type);
        }
        return new Promise((resolve) => {
          defer(() => {
            event.res.end(data);
            resolve(void 0);
          });
        });
      }
      function defaultContentType(event, type) {
        if (type && !event.res.getHeader("Content-Type")) {
          event.res.setHeader("Content-Type", type);
        }
      }
      function sendRedirect(event, location, code = 302) {
        event.res.statusCode = code;
        event.res.setHeader("Location", location);
        return send(event, "Redirecting to " + location, MIMES.html);
      }
      function appendHeader(event, name, value) {
        let current = event.res.getHeader(name);
        if (!current) {
          event.res.setHeader(name, value);
          return;
        }
        if (!Array.isArray(current)) {
          current = [current.toString()];
        }
        event.res.setHeader(name, current.concat(value));
      }
    }).call(this, __webpack_require__(74)["URLSearchParams"]);
  },
  function(module2, exports) {
    module2.exports = require$$6;
  },
  function(module2, exports) {
    module2.exports = require$$7;
  },
  function(module2, exports) {
    module2.exports = vueNoSsr_common;
  },
  function(module2, exports) {
    module2.exports = vueClientOnly_common;
  },
  function(module2, exports) {
    module2.exports = vueRouter_common;
  },
  function(module2, exports) {
    module2.exports = require$$11;
  },
  function(module2, exports) {
    module2.exports = vueApollo_umd.exports;
  },
  function(module2, exports) {
    module2.exports = require$$13;
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(76);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(7).default;
    module2.exports.__inject__ = function(context) {
      add("cb6e93d4", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(78);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(7).default;
    module2.exports.__inject__ = function(context) {
      add("fda6b954", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(91);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(7).default;
    module2.exports.__inject__ = function(context) {
      add("129b1aef", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(93);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(7).default;
    module2.exports.__inject__ = function(context) {
      add("28b14867", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(95);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(7).default;
    module2.exports.__inject__ = function(context) {
      add("25681cc0", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(97);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(7).default;
    module2.exports.__inject__ = function(context) {
      add("ea9baaf8", content, true, context);
    };
  },
  function(module2, exports) {
    module2.exports = require$$14;
  },
  function(module2, exports) {
    module2.exports = require$$15;
  },
  function(module2, exports) {
    module2.exports = vueMeta_common;
  },
  function(module2, exports) {
    module2.exports = require$$17;
  },
  function(module2, exports) {
    module2.exports = require$$18;
  },
  function(module2, exports) {
    module2.exports = require$$19;
  },
  function(module2, exports) {
    module2.exports = require$$20;
  },
  function(module2, exports) {
    module2.exports = require$$21;
  },
  function(module2, exports) {
    module2.exports = require$$22;
  },
  function(module2, exports) {
    module2.exports = require$$23;
  },
  function(module2, exports) {
    module2.exports = require$$24;
  },
  function(module2, exports) {
    module2.exports = require$$25;
  },
  function(module2, exports) {
    module2.exports = require$$26;
  },
  function(module2, exports) {
    module2.exports = require$$27;
  },
  function(module2, exports, __webpack_require__) {
    __webpack_require__(43);
    module2.exports = __webpack_require__(101);
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _Users_alex_Sites_LosAngelesStar_nuxt_runtime_vue2_bridge_6846c551_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
    var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
    _Users_alex_Sites_LosAngelesStar_nuxt_runtime_vue2_bridge_6846c551_mjs__WEBPACK_IMPORTED_MODULE_0__["b"].use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["default"].default || _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["default"]);
    __webpack_exports__["default"] = Object(_app__WEBPACK_IMPORTED_MODULE_2__["b"])((nuxtApp) => {
      const _originalSetup = nuxtApp.nuxt2Context.app.setup;
      nuxtApp.nuxt2Context.app.setup = function(...args) {
        const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
        nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
        return result;
      };
    });
  },
  function(module2, exports) {
    module2.exports = require$$28;
  },
  function(module2, exports) {
    module2.exports = require$$29;
  },
  function(module2, exports) {
    module2.exports = require$$30;
  },
  function(module2, exports) {
    module2.exports = require$$31;
  },
  function(module2, exports) {
    module2.exports = require$$32;
  },
  function(module2, exports) {
    module2.exports = require$$33;
  },
  function(module2, exports) {
    module2.exports = require$$34;
  },
  function(module2, exports) {
    module2.exports = require$$35;
  },
  function(module2, exports) {
    module2.exports = require$$36;
  },
  function(module2, exports) {
    module2.exports = require$$37;
  },
  function(module2, exports) {
    module2.exports = require$$38;
  },
  function(module2, exports) {
    module2.exports = require$$39;
  },
  function(module2, exports) {
    module2.exports = require$$40;
  },
  function(module2, exports) {
    module2.exports = require$$41;
  },
  function(module2, exports) {
    module2.exports = require$$42;
  },
  function(module2, exports) {
    module2.exports = require$$43;
  },
  function(module2, exports) {
    module2.exports = require$$44;
  },
  function(module2, exports) {
    module2.exports = require$$45;
  },
  function(module2, exports) {
    module2.exports = require$$46;
  },
  function(module2, exports) {
    module2.exports = require$$47;
  },
  function(module2, exports) {
    module2.exports = require$$48;
  },
  function(module2, exports) {
    module2.exports = require$$49;
  },
  function(module2, exports) {
    module2.exports = require$$50;
  },
  function(module2, exports) {
    module2.exports = require$$51;
  },
  function(module2, exports) {
    module2.exports = require$$52;
  },
  function(module2, exports) {
    module2.exports = require$$53;
  },
  function(module2, exports) {
    module2.exports = require$$54;
  },
  function(module2, exports) {
    module2.exports = require$$55;
  },
  function(module2, exports) {
    module2.exports = require$$56;
  },
  function(module2, exports) {
    module2.exports = require$$57;
  },
  function(module2, exports) {
    module2.exports = require$$58;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(80);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    __webpack_require__(7).default("f74c758c", content, true);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, '*,:after,:before{box-sizing:border-box;background-repeat:no-repeat}:after,:before{text-decoration:inherit;vertical-align:inherit}:where(:root){cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%}:where(body){margin:0}:where(h1){font-size:2em;margin:.67em 0}:where(dl,ol,ul) :where(dl,ol,ul){margin:0}:where(hr){color:inherit;height:0}:where(nav) :where(ol,ul){list-style-type:none;padding:0}:where(nav li):before{content:"\\200B";float:left}:where(pre){font-family:monospace,monospace;font-size:1em;overflow:auto}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace,monospace;font-size:1em}:where(small){font-size:80%}:where(audio,canvas,iframe,img,svg,video){vertical-align:middle}:where(iframe){border-style:none}:where(svg:not([fill])){fill:currentColor}:where(table){border-collapse:collapse;border-color:inherit;text-indent:0}:where(button,input,select){margin:0}:where(button,[type=button i],[type=reset i],[type=submit i]){-webkit-appearance:button}:where(fieldset){border:1px solid #a0a0a0}:where(progress){vertical-align:baseline}:where(textarea){margin:0;resize:vertical}:where([type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(dialog){background-color:#fff;border:solid;color:#000;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(details>summary:first-of-type){display:list-item}:where([aria-busy=true i]){cursor:progress}:where([aria-controls]){cursor:pointer}:where([aria-disabled=true i],[disabled]){cursor:not-allowed}:where([aria-hidden=false i][hidden]){display:initial}:where([aria-hidden=false i][hidden]:not(:focus)){clip:rect(0,0,0,0);position:absolute}', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(82);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    __webpack_require__(7).default("435b7828", content, true);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(83);
    var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(84);
    var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(85);
    var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(86);
    var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(87);
    var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(88);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
    var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
    var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
    var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
    var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
    ___CSS_LOADER_EXPORT___.push([module2.i, '@font-face{font-family:"Old Standard TT";font-style:normal;font-weight:400;font-display:swap;src:url(' + ___CSS_LOADER_URL_REPLACEMENT_0___ + ') format("woff2");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:"Old Standard TT";font-style:normal;font-weight:400;font-display:swap;src:url(' + ___CSS_LOADER_URL_REPLACEMENT_1___ + ') format("woff2");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:"Old Standard TT";font-style:normal;font-weight:400;font-display:swap;src:url(' + ___CSS_LOADER_URL_REPLACEMENT_2___ + ') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Old Standard TT";font-style:normal;font-weight:400;font-display:swap;src:url(' + ___CSS_LOADER_URL_REPLACEMENT_3___ + ') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Old Standard TT";font-style:normal;font-weight:400;font-display:swap;src:url(' + ___CSS_LOADER_URL_REPLACEMENT_4___ + ') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = function(url, options) {
      if (!options) {
        options = {};
      }
      url = url && url.__esModule ? url.default : url;
      if (typeof url !== "string") {
        return url;
      }
      if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
      }
      if (options.hash) {
        url += options.hash;
      }
      if (/["'() \t\n]/.test(url) || options.needQuotes) {
        return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"');
      }
      return url;
    };
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__.p + "fonts/Old_Standard_TT-400-cyrillic-ext1.3e4bab2.woff2";
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__.p + "fonts/Old_Standard_TT-400-cyrillic2.942616e.woff2";
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__.p + "fonts/Old_Standard_TT-400-vietnamese3.58f1c11.woff2";
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__.p + "fonts/Old_Standard_TT-400-latin-ext4.308be94.woff2";
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__.p + "fonts/Old_Standard_TT-400-latin5.38a9521.woff2";
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = __webpack_require__.p + "img/los-angeles-star-logo.1a6d20b.svg";
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_WeatherEar_vue_vue_type_style_index_0_id_ac59466a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_WeatherEar_vue_vue_type_style_index_0_id_ac59466a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_WeatherEar_vue_vue_type_style_index_0_id_ac59466a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ".forecast[data-v-ac59466a]{display:flex;align-items:center;justify-content:space-between;max-width:112px;font-size:.625rem;color:#121212}.current[data-v-ac59466a]{font-weight:700;font-size:.8125rem}.low[data-v-ac59466a]{margin-left:2px;color:#717171}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_StockEar_vue_vue_type_style_index_0_id_23d71862_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_StockEar_vue_vue_type_style_index_0_id_23d71862_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_StockEar_vue_vue_type_style_index_0_id_23d71862_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ".stocks dl[data-v-23d71862]{height:1.125em;max-height:1.15em;overflow:hidden;margin:0;position:relative}.stocks .market-index[data-v-23d71862]{position:absolute;display:flex;justify-content:space-between;align-items:baseline;padding:3px 0 4px;opacity:1}@media screen and (min-width:1070px){.stocks .market-index[data-v-23d71862]{align-items:baseline;opacity:1;flex-direction:row;padding:0;display:flex;width:100%}}.stocks .name[data-v-23d71862]{color:#121212;font-size:.75rem}.stocks .change[data-v-23d71862]{margin:0}.stocks .change.positive[data-v-23d71862]{color:#3a7f36}.stocks .change.negative[data-v-23d71862]{color:#a61b1e}.stocks .change span[data-v-23d71862]{font-size:.75rem;margin-right:5px}.fade-enter-active[data-v-23d71862],.fade-leave-active[data-v-23d71862]{transition:opacity 1s ease}.fade-enter-to[data-v-23d71862],.fade-leave-to[data-v-23d71862]{opacity:0}.fade-move[data-v-23d71862]{transition:transform .5s}@media(prefers-reduced-motion){.fade-move[data-v-23d71862]{transition:none 0}}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, 'img.responsive{max-width:100%;height:auto}.nameplate{text-align:center}.nameplate .flag{background-color:var(--color__brand);transition:all 1.5s ease-in-out}.nameplate .flag:before{content:"";background-color:var(--color__brand);position:absolute;bottom:0;left:0;right:0;z-index:1}.nameplate .flag.loading h1{display:inline-block;margin-top:0}.nameplate .flag.loading a{font-size:6vw}.nameplate .flag h1{margin-top:.65625in;margin-bottom:0;font-family:"Old English","Agincourt","Fette Fraktur","FF Brokenscript","Lucida Blackletter",fantasy}.nameplate .flag a{display:inline-block;text-decoration:none}.nameplate .flag .logo{width:73.81643%}@media screen and (min-width:12in){.nameplate .flag .logo{width:auto}}.nameplate .dateline .date{order:1;flex:1 0 auto}@media screen and (min-width:600px){.nameplate .dateline .date{order:0}}.nameplate .dateline:after{order:2}.logo-enter:before{height:100vh}.logo-enter h1{opacity:0;transform:translate3d(0,33vh,50px) scale(1.25)}.logo-enter-active:before{-webkit-animation:reveal-bottom .25s cubic-bezier(.4,0,.2,1) 1.25s backwards;animation:reveal-bottom .25s cubic-bezier(.4,0,.2,1) 1.25s backwards}.logo-enter-active h1{position:relative;z-index:2;-webkit-animation:phase-in .15s cubic-bezier(0,0,.2,1) 0 backwards,zoom-out-up .25s cubic-bezier(0,0,.2,1) 1s backwards;animation:phase-in .15s cubic-bezier(0,0,.2,1) 0 backwards,zoom-out-up .25s cubic-bezier(0,0,.2,1) 1s backwards}@-webkit-keyframes zoom-out-up{0%{transform:translate3d(0,33vh,50px) scale(1.25)}50%{transform:translate3d(0,33vh,50px) scale(1.25)}to{transform:translateZ(0) scale(1)}}@keyframes zoom-out-up{0%{transform:translate3d(0,33vh,50px) scale(1.25)}50%{transform:translate3d(0,33vh,50px) scale(1.25)}to{transform:translateZ(0) scale(1)}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes reveal-bottom{0%{height:100vh}to{height:0}}@keyframes reveal-bottom{0%{height:100vh}to{height:0}}', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_node_modules_nuxt_bridge_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_37_0_Default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ':root{--color__brand:#f7f7f7;--color__text:#2f2f2f;--color__border:var(--color__text);--color__process-cyan:#00b7eb;--color__process-magenta:#cc006b;--color__process-yellow:#fff10c;--color__process-black:#000}html{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}body{font-family:"Old Standard TT",Times,"Times New Roman",serif}main strong{font-weight:400;font-variant:small-caps}.paper{box-sizing:border-box;background-color:var(--color__brand);max-width:12in;margin:0 auto;padding:1em}@media (min-width:12in){.paper{padding:.5in}}.columns{-moz-columns:17em 2;columns:17em 2;-moz-column-gap:.08in;column-gap:.08in;-moz-column-rule:1px solid var(--color__text);column-rule:1px solid var(--color__text)}@media (min-width:12in){.columns{-moz-columns:5;columns:5}}.nameplate .dateline{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;text-transform:uppercase;border-top:2px solid var(--color__border);border-bottom:1px solid var(--color__border);letter-spacing:-.28px}.nameplate .dateline:after,.nameplate .dateline:before{content:"";width:100%;height:.1em;flex:0 0 100%;border:0 solid var(--color__border)}.nameplate .dateline:before{border-bottom-width:1px}.nameplate .dateline:after{border-top-width:2px;margin-bottom:1px}@media (min-width:12in){.nameplate .dateline .volume{padding-left:.25in}}@media (min-width:12in){.nameplate .dateline .issue{padding-right:.25in}}@media (min-width:12in){.nameplate .dateline{line-height:.3875in;font-size:16pt;margin-bottom:.03in}}.entry-title{text-align:center}.entry-summary{text-align:justify}.nav__link{margin-left:20px}.article{max-width:600px;margin:0 auto}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.fade-enter-active{-webkit-animation:coming 1s;animation:coming 1s;-webkit-animation-delay:.5s;animation-delay:.5s;opacity:0}.fade-leave-active{-webkit-animation:going 1s;animation:going 1s}@-webkit-keyframes going{0%{transform:translateZ(0)}to{transform:translate3d(0,50px,0);opacity:0}}@keyframes going{0%{transform:translateZ(0)}to{transform:translate3d(0,50px,0);opacity:0}}@-webkit-keyframes coming{0%{transform:translate3d(0,50px,0);opacity:0}to{transform:translateZ(0);opacity:1}}@keyframes coming{0%{transform:translate3d(0,50px,0);opacity:0}to{transform:translateZ(0);opacity:1}}[v-cloak]{display:none}', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, exports) {
  },
  function(module2, exports) {
    module2.exports = require$$59;
  },
  function(module2, exports) {
    module2.exports = ssr;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var vue_composition_api = __webpack_require__(0);
    var runtime_vue2_bridge_6846c551 = __webpack_require__(1);
    var external_ufo_ = __webpack_require__(2);
    var _nuxt_middleware = __webpack_require__(11);
    function createGetCounter(counterObject, defaultKey = "") {
      return function getCounter(id = defaultKey) {
        if (counterObject[id] === void 0) {
          counterObject[id] = 0;
        }
        return counterObject[id]++;
      };
    }
    function globalHandleError(error) {
      if (runtime_vue2_bridge_6846c551["b"].config.errorHandler) {
        runtime_vue2_bridge_6846c551["b"].config.errorHandler(error);
      }
    }
    function interopDefault(promise) {
      return promise.then((m) => m.default || m);
    }
    function hasFetch(vm) {
      return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
    }
    function purifyData(data2) {
      {
        return data2;
      }
    }
    function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
      const children = vm.$children || [];
      for (const child of children) {
        if (child.$fetch) {
          instances.push(child);
          continue;
        }
        if (child.$children) {
          getChildrenComponentInstancesUsingFetch(child, instances);
        }
      }
      return instances;
    }
    function applyAsyncData(Component, asyncData) {
      if (!asyncData && Component.options.__hasNuxtData) {
        return;
      }
      const ComponentData = Component.options._originDataFn || Component.options.data || function() {
        return {};
      };
      Component.options._originDataFn = ComponentData;
      Component.options.data = function() {
        const data2 = ComponentData.call(this, this);
        if (this.$ssrContext) {
          asyncData = this.$ssrContext.asyncData[Component.cid];
        }
        return {
          ...data2,
          ...asyncData
        };
      };
      Component.options.__hasNuxtData = true;
      if (Component._Ctor && Component._Ctor.options) {
        Component._Ctor.options.data = Component.options.data;
      }
    }
    function sanitizeComponent(Component) {
      if (Component.options && Component._Ctor === Component) {
        return Component;
      }
      if (!Component.options) {
        Component = runtime_vue2_bridge_6846c551["b"].extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      if (!Component.options.name && Component.options.__file) {
        Component.options.name = Component.options.__file;
      }
      return Component;
    }
    function getMatchedComponents(route, matches = false, prop = "components") {
      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
        return Object.keys(m[prop]).map((key) => {
          matches && matches.push(index);
          return m[prop][key];
        });
      }));
    }
    function getMatchedComponentsInstances(route, matches = false) {
      return getMatchedComponents(route, matches, "instances");
    }
    function flatMapComponents(route, fn) {
      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
        return Object.keys(m.components).reduce((promises, key) => {
          if (m.components[key]) {
            promises.push(fn(m.components[key], m.instances[key], m, key, index));
          } else {
            delete m.components[key];
          }
          return promises;
        }, []);
      }));
    }
    function resolveRouteComponents(route, fn) {
      return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
        if (typeof Component === "function" && !Component.options) {
          try {
            Component = await Component();
          } catch (error) {
            if (error && error.name === "ChunkLoadError" && false) {
              const timeNow = Date.now();
              const previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload"));
              if (!previousReloadTime || previousReloadTime + 6e4 < timeNow) {
                window.sessionStorage.setItem("nuxt-reload", timeNow);
                window.location.reload(true);
              }
            }
            throw error;
          }
        }
        match.components[key] = Component = sanitizeComponent(Component);
        return typeof fn === "function" ? fn(Component, instance, match, key) : Component;
      }));
    }
    async function getRouteData(route) {
      if (!route) {
        return;
      }
      await resolveRouteComponents(route);
      return {
        ...route,
        meta: getMatchedComponents(route).map((Component, index) => {
          return {
            ...Component.options.meta,
            ...(route.matched[index] || {}).meta
          };
        })
      };
    }
    async function setContext(app, context) {
      if (!app.context) {
        app.context = {
          isStatic: false,
          isDev: false,
          isHMR: false,
          app,
          payload: context.payload,
          error: context.error,
          base: app.router.options.base,
          env: {}
        };
        if (context.req) {
          app.context.req = context.req;
        }
        if (context.res) {
          app.context.res = context.res;
        }
        if (context.ssrContext) {
          app.context.ssrContext = context.ssrContext;
        }
        app.context.redirect = (status, path, query) => {
          if (!status) {
            return;
          }
          app.context._redirected = true;
          let pathType = typeof path;
          if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
            query = path || {};
            path = status;
            pathType = typeof path;
            status = 302;
          }
          if (pathType === "object") {
            path = app.router.resolve(path).route.fullPath;
          }
          if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
            app.context.next({
              path,
              query,
              status
            });
          } else {
            path = Object(external_ufo_["withQuery"])(path, query);
            {
              app.context.next({
                path,
                status
              });
            }
          }
        };
        {
          app.context.beforeNuxtRender = (fn) => context.beforeRenderFns.push(fn);
          app.context.beforeSerialize = (fn) => context.beforeSerializeFns.push(fn);
        }
      }
      const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
      if (context.route) {
        app.context.route = currentRouteData;
      }
      if (context.from) {
        app.context.from = fromRouteData;
      }
      app.context.next = context.next;
      app.context._redirected = false;
      app.context._errored = false;
      app.context.isHMR = false;
      app.context.params = app.context.route.params || {};
      app.context.query = app.context.route.query || {};
    }
    function middlewareSeries(promises, appContext) {
      if (!promises.length || appContext._redirected || appContext._errored) {
        return Promise.resolve();
      }
      return promisify(promises[0], appContext).then(() => {
        return middlewareSeries(promises.slice(1), appContext);
      });
    }
    function promisify(fn, context) {
      let promise;
      if (fn.length === 2) {
        promise = new Promise((resolve) => {
          fn(context, function(err, data2) {
            if (err) {
              context.error(err);
            }
            data2 = data2 || {};
            resolve(data2);
          });
        });
      } else {
        promise = fn(context);
      }
      if (promise && promise instanceof Promise && typeof promise.then === "function") {
        return promise;
      }
      return Promise.resolve(promise);
    }
    function getLocation(base, mode) {
      if (mode === "hash") {
        return window.location.hash.replace(/^#\//, "");
      }
      base = decodeURI(base).slice(0, -1);
      let path = decodeURI(window.location.pathname);
      if (base && path.startsWith(base)) {
        path = path.slice(base.length);
      }
      const fullPath = (path || "/") + window.location.search + window.location.hash;
      return Object(external_ufo_["normalizeURL"])(fullPath);
    }
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    function normalizeError(err) {
      let message;
      if (!(err.message || typeof err === "string")) {
        try {
          message = JSON.stringify(err, null, 2);
        } catch (e) {
          message = `[${err.constructor.name}]`;
        }
      } else {
        message = err.message || err;
      }
      return {
        ...err,
        message,
        statusCode: err.statusCode || err.status || err.response && err.response.status || 500
      };
    }
    const PATH_REGEXP = new RegExp([
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
    ].join("|"), "g");
    function parse(str, options) {
      const tokens = [];
      let key = 0;
      let index = 0;
      let path = "";
      const defaultDelimiter = options && options.delimiter || "/";
      let res;
      while ((res = PATH_REGEXP.exec(str)) != null) {
        const m = res[0];
        const escaped = res[1];
        const offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        if (escaped) {
          path += escaped[1];
          continue;
        }
        const next = str[index];
        const prefix = res[2];
        const name = res[3];
        const capture = res[4];
        const group = res[5];
        const modifier = res[6];
        const asterisk = res[7];
        if (path) {
          tokens.push(path);
          path = "";
        }
        const partial = prefix != null && next != null && next !== prefix;
        const repeat = modifier === "+" || modifier === "*";
        const optional = modifier === "?" || modifier === "*";
        const delimiter = res[2] || defaultDelimiter;
        const pattern = capture || group;
        tokens.push({
          name: name || key++,
          prefix: prefix || "",
          delimiter,
          optional,
          repeat,
          partial,
          asterisk: Boolean(asterisk),
          pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
        });
      }
      if (index < str.length) {
        path += str.substr(index);
      }
      if (path) {
        tokens.push(path);
      }
      return tokens;
    }
    function encodeURIComponentPretty(str, slashAllowed) {
      const re = slashAllowed ? /[?#]/g : /[/?#]/g;
      return encodeURI(str).replace(re, (c) => {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function encodeAsterisk(str) {
      return encodeURIComponentPretty(str, true);
    }
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function escapeGroup(group) {
      return group.replace(/([=!:$/()])/g, "\\$1");
    }
    function tokensToFunction(tokens, options) {
      const matches = new Array(tokens.length);
      for (let i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === "object") {
          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
        }
      }
      return function(obj, opts) {
        let path = "";
        const data2 = obj || {};
        const options2 = opts || {};
        const encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
        for (let i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          const value = data2[token.name || "pathMatch"];
          let segment;
          if (value == null) {
            if (token.optional) {
              if (token.partial) {
                path += token.prefix;
              }
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined');
            }
          }
          if (Array.isArray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
            }
            if (value.length === 0) {
              if (token.optional) {
                continue;
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty');
              }
            }
            for (let j = 0; j < value.length; j++) {
              segment = encode(value[j]);
              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
              }
              path += (j === 0 ? token.prefix : token.delimiter) + segment;
            }
            continue;
          }
          segment = token.asterisk ? encodeAsterisk(value) : encode(value);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
          }
          path += token.prefix + segment;
        }
        return path;
      };
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function addLifecycleHook(vm, hook, fn) {
      if (!vm.$options[hook]) {
        vm.$options[hook] = [];
      }
      if (!vm.$options[hook].includes(fn)) {
        vm.$options[hook].push(fn);
      }
    }
    external_ufo_["joinURL"];
    external_ufo_["withoutTrailingSlash"];
    external_ufo_["isSamePath"];
    async function serverPrefetch() {
      if (!this._fetchOnServer) {
        return;
      }
      try {
        await this.$options.fetch.call(this);
      } catch (err) {
        this.$fetchState.error = normalizeError(err);
      }
      this.$fetchState.pending = false;
      this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters[""]++;
      const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
      attrs["data-fetch-key"] = this._fetchKey;
      this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
        _error: this.$fetchState.error
      } : purifyData(this._data);
    }
    var fetch_server = {
      created() {
        if (!hasFetch(this)) {
          return;
        }
        if (typeof this.$options.fetchOnServer === "function") {
          this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
        } else {
          this._fetchOnServer = this.$options.fetchOnServer !== false;
        }
        const defaultKey = this.$options._scopeId || this.$options.name || "";
        const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
        if (typeof this.$options.fetchKey === "function") {
          this._fetchKey = this.$options.fetchKey.call(this, getCounter);
        } else {
          const key = typeof this.$options.fetchKey === "string" ? this.$options.fetchKey : defaultKey;
          this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
        }
        this.$fetch = () => {
        };
        runtime_vue2_bridge_6846c551["b"].util.defineReactive(this, "$fetchState", {
          pending: true,
          error: null,
          timestamp: Date.now()
        });
        addLifecycleHook(this, "serverPrefetch", serverPrefetch);
      }
    };
    var external_vue_meta_ = __webpack_require__(30);
    var external_vue_meta_default = /* @__PURE__ */ __webpack_require__.n(external_vue_meta_);
    var external_vue_client_only_ = __webpack_require__(17);
    var external_vue_client_only_default = /* @__PURE__ */ __webpack_require__.n(external_vue_client_only_);
    var external_vue_no_ssr_ = __webpack_require__(16);
    var external_vue_no_ssr_default = /* @__PURE__ */ __webpack_require__.n(external_vue_no_ssr_);
    var external_vue_router_ = __webpack_require__(18);
    var external_vue_router_default = /* @__PURE__ */ __webpack_require__.n(external_vue_router_);
    function shouldScrollToTop(route) {
      const Pages = getMatchedComponents(route);
      if (Pages.length === 1) {
        const {
          options = {}
        } = Pages[0];
        return options.scrollToTop !== false;
      }
      return Pages.some(({
        options
      }) => options && options.scrollToTop);
    }
    var router_scrollBehavior = function(to, from, savedPosition) {
      let position = false;
      const isRouteChanged = to !== from;
      if (savedPosition) {
        position = savedPosition;
      } else if (isRouteChanged && shouldScrollToTop(to)) {
        position = {
          x: 0,
          y: 0
        };
      }
      const nuxt = window.$nuxt;
      if (!isRouteChanged || to.path === from.path && to.hash !== from.hash) {
        nuxt.$nextTick(() => nuxt.$emit("triggerScroll"));
      }
      return new Promise((resolve) => {
        nuxt.$once("triggerScroll", () => {
          if (to.hash) {
            let hash = to.hash;
            if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
              hash = "#" + window.CSS.escape(hash.substr(1));
            }
            try {
              const el = document.querySelector(hash);
              if (el) {
                var _getComputedStyle$scr;
                position = {
                  selector: hash
                };
                const y = Number((_getComputedStyle$scr = getComputedStyle(el)["scroll-margin-top"]) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace("px", ""));
                if (y) {
                  position.offset = {
                    y
                  };
                }
              }
            } catch (e) {
              console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
            }
          }
          resolve(position);
        });
      });
    };
    const _0b143c15 = () => interopDefault(__webpack_require__.e(1).then(__webpack_require__.bind(null, 106)));
    const emptyFn = () => {
    };
    runtime_vue2_bridge_6846c551["b"].use(external_vue_router_default.a);
    const routerOptions = {
      mode: "history",
      base: "/",
      linkActiveClass: "nuxt-link-active",
      linkExactActiveClass: "nuxt-link-exact-active",
      scrollBehavior: router_scrollBehavior,
      routes: [{
        path: "/Index",
        component: _0b143c15,
        name: "Index"
      }],
      fallback: false
    };
    function createRouter(ssrContext, config) {
      const base = config._app && config._app.basePath || routerOptions.base;
      const router = new external_vue_router_default.a({
        ...routerOptions,
        base
      });
      const originalPush = router.push;
      router.push = function push(location, onComplete = emptyFn, onAbort) {
        return originalPush.call(this, location, onComplete, onAbort);
      };
      const resolve = router.resolve.bind(router);
      router.resolve = (to, current, append) => {
        if (typeof to === "string") {
          to = Object(external_ufo_["normalizeURL"])(to);
        }
        return resolve(to, current, append);
      };
      return router;
    }
    var nuxt_child = {
      name: "NuxtChild",
      functional: true,
      props: {
        nuxtChildKey: {
          type: String,
          default: ""
        },
        keepAlive: Boolean,
        keepAliveProps: {
          type: Object,
          default: void 0
        }
      },
      render(_, {
        parent,
        data: data2,
        props
      }) {
        const h = parent.$createElement;
        data2.nuxtChild = true;
        const _parent = parent;
        const transitions = parent.$nuxt.nuxt.transitions;
        const defaultTransition2 = parent.$nuxt.nuxt.defaultTransition;
        let depth = 0;
        while (parent) {
          if (parent.$vnode && parent.$vnode.data.nuxtChild) {
            depth++;
          }
          parent = parent.$parent;
        }
        data2.nuxtChildDepth = depth;
        const transition = transitions[depth] || defaultTransition2;
        const transitionProps = {};
        transitionsKeys.forEach((key) => {
          if (typeof transition[key] !== "undefined") {
            transitionProps[key] = transition[key];
          }
        });
        const listeners = {};
        listenersKeys.forEach((key) => {
          if (typeof transition[key] === "function") {
            listeners[key] = transition[key].bind(_parent);
          }
        });
        if (transition.css === false) {
          const leave = listeners.leave;
          if (!leave || leave.length < 2) {
            listeners.leave = (el, done) => {
              if (leave) {
                leave.call(_parent, el);
              }
              _parent.$nextTick(done);
            };
          }
        }
        let routerView = h("routerView", data2);
        if (props.keepAlive) {
          routerView = h("keep-alive", {
            props: props.keepAliveProps
          }, [routerView]);
        }
        return h("transition", {
          props: transitionProps,
          on: listeners
        }, [routerView]);
      }
    };
    const transitionsKeys = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"];
    const listenersKeys = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"];
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "__nuxt-error-page" }, [_vm._ssrNode('<div class="error">', "</div>", [_vm._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">' + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode('<p class="description">', "</p>", [typeof _vm.$route === "undefined" ? _vm._ssrNode('<a href="/" class="error-link">', "</a>") : _c("NuxtLink", { staticClass: "error-link", attrs: { "to": "/" } }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a></div>')], 2)]);
    };
    var staticRenderFns = [];
    var nuxt_errorvue_type_script_lang_js_ = {
      name: "NuxtError",
      props: {
        error: {
          type: Object,
          default: null
        }
      },
      computed: {
        statusCode() {
          return this.error && this.error.statusCode || 500;
        },
        message() {
          return this.error.message || "Error";
        }
      },
      head() {
        return {
          title: this.message,
          meta: [{
            name: "viewport",
            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
          }]
        };
      }
    };
    var components_nuxt_errorvue_type_script_lang_js_ = nuxt_errorvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    function injectStyles(context) {
      var style0 = __webpack_require__(75);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var nuxt_error_component = Object(componentNormalizer["a"])(components_nuxt_errorvue_type_script_lang_js_, render, staticRenderFns, false, injectStyles, null, "c0a2a92e");
    var nuxt_error = nuxt_error_component.exports;
    var components_nuxt = {
      name: "Nuxt",
      components: {
        NuxtChild: nuxt_child,
        NuxtError: nuxt_error
      },
      props: {
        nuxtChildKey: {
          type: String,
          default: void 0
        },
        keepAlive: Boolean,
        keepAliveProps: {
          type: Object,
          default: void 0
        },
        name: {
          type: String,
          default: "default"
        }
      },
      errorCaptured(error) {
        if (this.displayingNuxtError) {
          this.errorFromNuxtError = error;
          this.$forceUpdate();
        }
      },
      computed: {
        routerViewKey() {
          if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
            return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
          }
          const [matchedRoute] = this.$route.matched;
          if (!matchedRoute) {
            return this.$route.path;
          }
          const Component = matchedRoute.components.default;
          if (Component && Component.options) {
            const {
              options
            } = Component;
            if (options.key) {
              return typeof options.key === "function" ? options.key(this.$route) : options.key;
            }
          }
          const strict = /\/$/.test(matchedRoute.path);
          return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
        }
      },
      beforeCreate() {
        runtime_vue2_bridge_6846c551["b"].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
      },
      render(h) {
        if (!this.nuxt.err) {
          return h("NuxtChild", {
            key: this.routerViewKey,
            props: this.$props
          });
        }
        if (this.errorFromNuxtError) {
          this.$nextTick(() => this.errorFromNuxtError = false);
          return h("div", {}, [h("h2", "An error occurred while showing the error page"), h("p", "Unfortunately an error occurred and while showing the error page another error occurred"), h("p", `Error details: ${this.errorFromNuxtError.toString()}`), h("nuxt-link", {
            props: {
              to: "/"
            }
          }, "Go back to home")]);
        }
        this.displayingNuxtError = true;
        this.$nextTick(() => this.displayingNuxtError = false);
        return h(nuxt_error, {
          props: {
            error: this.nuxt.err
          }
        });
      }
    };
    var nuxt_loadingvue_type_script_lang_js_ = {
      name: "NuxtLoading",
      data() {
        return {
          percent: 0,
          show: false,
          canSucceed: true,
          reversed: false,
          skipTimerCount: 0,
          rtl: false,
          throttle: 200,
          duration: 5e3,
          continuous: false
        };
      },
      computed: {
        left() {
          if (!this.continuous && !this.rtl) {
            return false;
          }
          return this.rtl ? this.reversed ? "0px" : "auto" : !this.reversed ? "0px" : "auto";
        }
      },
      beforeDestroy() {
        this.clear();
      },
      methods: {
        clear() {
          clearInterval(this._timer);
          clearTimeout(this._throttle);
          this._timer = null;
        },
        start() {
          this.clear();
          this.percent = 0;
          this.reversed = false;
          this.skipTimerCount = 0;
          this.canSucceed = true;
          if (this.throttle) {
            this._throttle = setTimeout(() => this.startTimer(), this.throttle);
          } else {
            this.startTimer();
          }
          return this;
        },
        set(num) {
          this.show = true;
          this.canSucceed = true;
          this.percent = Math.min(100, Math.max(0, Math.floor(num)));
          return this;
        },
        get() {
          return this.percent;
        },
        increase(num) {
          this.percent = Math.min(100, Math.floor(this.percent + num));
          return this;
        },
        decrease(num) {
          this.percent = Math.max(0, Math.floor(this.percent - num));
          return this;
        },
        pause() {
          clearInterval(this._timer);
          return this;
        },
        resume() {
          this.startTimer();
          return this;
        },
        finish() {
          this.percent = this.reversed ? 0 : 100;
          this.hide();
          return this;
        },
        hide() {
          this.clear();
          setTimeout(() => {
            this.show = false;
            this.$nextTick(() => {
              this.percent = 0;
              this.reversed = false;
            });
          }, 500);
          return this;
        },
        fail(error) {
          this.canSucceed = false;
          return this;
        },
        startTimer() {
          if (!this.show) {
            this.show = true;
          }
          if (typeof this._cut === "undefined") {
            this._cut = 1e4 / Math.floor(this.duration);
          }
          this._timer = setInterval(() => {
            if (this.skipTimerCount > 0) {
              this.skipTimerCount--;
              return;
            }
            if (this.reversed) {
              this.decrease(this._cut);
            } else {
              this.increase(this._cut);
            }
            if (this.continuous) {
              if (this.percent >= 100) {
                this.skipTimerCount = 1;
                this.reversed = !this.reversed;
              } else if (this.percent <= 0) {
                this.skipTimerCount = 1;
                this.reversed = !this.reversed;
              }
            }
          }, 100);
        }
      },
      render(h) {
        let el = h(false);
        if (this.show) {
          el = h("div", {
            staticClass: "nuxt-progress",
            class: {
              "nuxt-progress-notransition": this.skipTimerCount > 0,
              "nuxt-progress-failed": !this.canSucceed
            },
            style: {
              width: this.percent + "%",
              left: this.left
            }
          });
        }
        return el;
      }
    };
    var components_nuxt_loadingvue_type_script_lang_js_ = nuxt_loadingvue_type_script_lang_js_;
    var nuxt_loading_render, nuxt_loading_staticRenderFns;
    function nuxt_loading_injectStyles(context) {
      var style0 = __webpack_require__(77);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var nuxt_loading_component = Object(componentNormalizer["a"])(components_nuxt_loadingvue_type_script_lang_js_, nuxt_loading_render, nuxt_loading_staticRenderFns, false, nuxt_loading_injectStyles, null, "35ef1b46");
    var nuxt_loading = nuxt_loading_component.exports;
    __webpack_require__(79);
    __webpack_require__(81);
    var Defaultvue_type_template_id_2b6c7d94_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { class: ["paper", _vm.attention ? "" : "idle"], attrs: { "itemscope": "", "itemtype": "http://schema.org/Newspaper", "itemid": "#app" } }, [_vm._ssrNode('<header class="nameplate">', "</header>", [_c("Header", { attrs: { "attention": _vm.attention }, scopedSlots: _vm._u([{ key: "header", fn: function() {
        return void 0;
      }, proxy: true }]) })], 1), _vm._ssrNode(" "), _c("transition", { attrs: { "name": "fade", "appear": "" } }, [_c("main", { attrs: { "tabindex": "-1" } }, [_vm._t("default")], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<footer class="site-footer">', "</footer>", [_c("Footer", { scopedSlots: _vm._u([{ key: "footer", fn: function() {
        return void 0;
      }, proxy: true }]) })], 1)], 2);
    };
    var Defaultvue_type_template_id_2b6c7d94_staticRenderFns = [];
    var Headervue_type_template_id_0c724da6_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode('<meta itemprop="name" content> '), _c("transition", { attrs: { "name": "logo", "appear": "", "duration": 1500 } }, [_vm._m(0)]), _vm._ssrNode(" "), _vm._ssrNode('<aside class="ear">', "</aside>", [_c("WeatherEar", { key: _vm.componentKey, attrs: { "attention": _vm.attention } }), _vm._ssrNode(" "), _c("StockEar", { attrs: { "attention": _vm.attention } })], 2), _vm._ssrNode(' <div class="dateline"><div itemprop="hasPart" itemscope="itemscope" itemtype="http://schema.org/PublicationVolume" itemid="#vol1" class="volume"><abbr title="Volume">Vol.</abbr>\xA0<span itemprop="volumeNumber">1</span>.</div> <div class="date">Los Angeles, <time datetime="1852-02-28" pubdate="pubdate dt-published" itemprop="datePublished">Saturday, February 28, 1852</time>.</div> <div itemprop="hasPart" itemscope="itemscope" itemtype="http://schema.org/PublicationIssue" itemid="#iss42" class="issue"><abbr title="Number">No.</abbr>\xA0<span itemprop="issueNumber">42</span>.</div></div> '), _vm._ssrNode('<nav class="nav">', "</nav>", [_c("g-link", { staticClass: "nav__link", attrs: { "to": { name: "home" } } }, [_vm._v("Home")]), _vm._ssrNode(" "), _c("g-link", { staticClass: "nav__link", attrs: { "to": "/about/" } }, [_vm._v("About")])], 2)], 2);
    };
    var Headervue_type_template_id_0c724da6_staticRenderFns = [function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "flag", class: [_vm.isLoading ? "logo-enter" : "loaded", ""] }, [_c("h1", [_c("g-link", { attrs: { "to": { name: "home" }, "itemprop": "url" } }, [_c("img", { staticClass: "logo responsive", attrs: { "src": __webpack_require__(89), "alt": _vm.$static.metadata.siteName, "itemprop": "logo" } })])], 1)]);
    }];
    var WeatherEarvue_type_template_id_ac59466a_scoped_true_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "forecast" }, [_vm._ssrNode('<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512" data-v-ac59466a><title data-v-ac59466a>' + _vm._ssrEscape("Today's weather: " + _vm._s(_vm._f("fahrenheit")(_vm.weather.temperature)) + "\u2009\xB0F and " + _vm._s(_vm.weather.description)) + "</title> " + ((_vm.weather.description = "Clear") ? "<g data-v-ac59466a>" + (_vm.time == "day" ? '<path fill="#1d1d1b" fill-rule="evenodd" d="M256 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224zm0 192a80 80 0 1 1 0-160 80 80 0 0 1 0 160zm0-224c9 0 16-7 16-16V64a16 16 0 0 0-32 0v32c0 9 7 16 16 16zm0 288c-9 0-16 7-16 16v32a16 16 0 0 0 32 0v-32c0-9-7-16-16-16zm124-246 23-22a16 16 0 1 0-23-23l-22 23a16 16 0 1 0 22 22zM132 358l-23 22a16 16 0 1 0 23 23l22-23a16 16 0 1 0-22-22zm-20-102c0-9-7-16-16-16H64a16 16 0 0 0 0 32h32c9 0 16-7 16-16zm336-16h-32a16 16 0 0 0 0 32h32a16 16 0 0 0 0-32zm-316-86a16 16 0 1 0 22-22l-22-23a16 16 0 1 0-23 23l23 22zm248 204a16 16 0 1 0-22 22l22 23a16 16 0 1 0 23-23l-23-22z" data-v-ac59466a></path>' : "<!---->") + ' <path fill="#1d1d1b" d="M350 343a128 128 0 1 1-133-211 16 16 0 0 1 20 21 95 95 0 0 0 122 122c6-2 13-1 17 4 4 4 6 11 4 16-7 19-17 35-30 48zM191 185a96 96 0 1 0 143 127 127 127 0 0 1-134-134l-9 7z" data-v-ac59466a></path> ' + (_vm.time == "night" ? '<path fill="#c4c4c4" fill-rule="evenodd" d="M248 264c-31-32-40-77-26-117a111 111 0 0 0-42 185 112 112 0 0 0 185-42c-40 14-85 5-117-26z" clip-rule="evenodd" data-v-ac59466a></path>' : "<!---->") + "</g>" : _vm.weather.description == "Partly Cloudy" ? "<g data-v-ac59466a>" + (_vm.time == "day" ? '<path fill="#1d1d1b" d="M208 64c9 0 16-7 16-16V16a16 16 0 0 0-32 0v32c0 9 7 16 16 16zm124 42 23-22a16 16 0 1 0-23-23l-22 23a16 16 0 1 0 22 22zM16 224h32a16 16 0 0 0 0-32H16a16 16 0 0 0 0 32zm336-16c0 9 7 16 16 16h32a16 16 0 0 0 0-32h-32c-9 0-16 7-16 16zM84 106a16 16 0 1 0 22-22L84 61a16 16 0 1 0-23 23l23 22zm316 150-16 1c-17-23-39-40-64-51a112 112 0 0 0-224 2c0 17 4 34 12 48a112 112 0 1 0 44 217 158 158 0 0 0 208 0 112 112 0 1 0 40-217zM208 128c40 0 73 29 79 67a157 157 0 0 0-149 50c-6-11-10-23-10-37 0-44 36-80 80-80zm192 320c-17 0-33-5-46-15a127 127 0 0 1-196 0 80 80 0 1 1-24-142l8 3a130 130 0 0 1 143-66 129 129 0 0 1 84 66 80 80 0 0 1 111 74c0 44-36 80-80 80z" data-v-ac59466a></path>' : "<!---->") + " " + (_vm.time == "night" ? '<path fill="#1d1d1b" d="m435 262 14-11c13-14 24-30 30-48 2-6 1-13-4-17-4-4-11-6-16-4A95 95 0 0 1 337 60a16 16 0 0 0-21-20 127 127 0 0 0-80 153c-43 6-82 29-108 64l-16-1a112 112 0 1 0 40 217 158 158 0 0 0 208 0 112 112 0 0 0 152-105c0-49-32-91-77-106zM291 92l8-7a127 127 0 0 0 135 135 93 93 0 0 1-53 33c-28-35-68-57-112-60-12-34-5-74 22-101zm109 356c-17 0-33-5-46-15a127 127 0 0 1-196 0 80 80 0 1 1-15-139c20-39 59-67 106-69l7-1a127 127 0 0 1 110 63l4 7a80 80 0 0 1 110 74c0 44-36 80-80 80z" data-v-ac59466a></path>' : "<!---->") + "</g>" : (_vm.weather.description = "Fog/Mist") ? "<g data-v-ac59466a>" + (_vm.time == "day" ? '<path fill="#1d1d1b" d="M495 223h-82a144 144 0 0 0-262-64H47a16 16 0 0 0 0 32h89c-4 10-6 21-7 32H79a16 16 0 0 0 0 32h50c1 11 3 22 7 32H50c-11 0-19 7-19 16s8 16 19 16h101a144 144 0 0 0 240 0h37c11 0 19-7 19-16s-8-16-19-16h-22c4-10 6-21 7-32h82a16 16 0 0 0 0-32zm-325-32h101a16 16 0 0 0 0-32h-78a112 112 0 0 1 188 64H161c1-11 4-22 9-32zm101 160c-30 0-58-12-78-32h156c-20 20-48 32-78 32zm101-64H170c-5-10-8-21-9-32h220c-1 11-4 22-9 32z" data-v-ac59466a></path>' : "<!---->") + " " + (_vm.time == "night" ? '<path fill="#1d1d1b" d="M495 223h-82a144 144 0 0 0-262-64H47a16 16 0 0 0 0 32h89c-4 10-6 21-7 32H79a16 16 0 0 0 0 32h50c1 11 3 22 7 32H50c-11 0-19 7-19 16s8 16 19 16h101a144 144 0 0 0 240 0h37c11 0 19-7 19-16s-8-16-19-16h-22c4-10 6-21 7-32h82a16 16 0 0 0 0-32zm-325-32h101a16 16 0 0 0 0-32h-78a112 112 0 0 1 188 64H161c1-11 4-22 9-32zm101 160c-30 0-58-12-78-32h156c-20 20-48 32-78 32zm101-64H170c-5-10-8-21-9-32h220c-1 11-4 22-9 32z" data-v-ac59466a></path>' : "<!---->") + "</g>" : (_vm.weather.description = "Rain") ? '<g data-v-ac59466a><path fill="#1d1d1b" d="m400 64-16 1a159 159 0 0 0-256 0l-16-1a112 112 0 1 0 40 217 158 158 0 0 0 208 0 112 112 0 1 0 40-217zm0 192c-17 0-33-5-46-15a127 127 0 0 1-196 0 80 80 0 1 1-15-139 127 127 0 0 1 227 0 80 80 0 0 1 110 74c0 44-36 80-80 80zM225 480a32 32 0 1 0 64 0c0-18-32-64-32-64s-32 46-32 64zm127-32a32 32 0 1 0 64 0c0-18-32-64-32-64s-32 46-32 64zM96 384a32 32 0 1 0 64 0c0-18-32-64-32-64s-32 46-32 64z" data-v-ac59466a></path></g>' : '<g data-v-ac59466a><path fill="#1d1d1b" d="M350 343a128 128 0 1 1-133-211 16 16 0 0 1 20 21 95 95 0 0 0 122 122c6-2 13-1 17 4 4 4 6 11 4 16-7 19-17 35-30 48zM191 185a96 96 0 1 0 143 127 127 127 0 0 1-134-134l-9 7z" data-v-ac59466a></path></g>') + '</svg> <span class="current"' + _vm._ssrStyle(null, null, { display: _vm.weather.temperature ? "" : "none" }) + ' data-v-ac59466a><span class="visually-hidden" data-v-ac59466a>Current temperature:</span>' + _vm._ssrEscape(_vm._s(_vm._f("integer")(_vm._f("fahrenheit")(_vm.weather.temperature))) + "\u2009") + '<abbr title="degrees Fahrenheit" data-v-ac59466a>\xB0F</abbr></span> <span class="range" data-v-ac59466a><span class="visually-hidden" data-v-ac59466a>Today\u2019s high temperature:</span>' + _vm._ssrEscape(_vm._s(_vm._f("integer")(_vm._f("fahrenheit")(_vm.weather.high))) + "\u2009\xB0 ") + '<span class="low"' + _vm._ssrStyle(null, null, { display: _vm.weather.low ? "" : "none" }) + ' data-v-ac59466a><span class="visually-hidden" data-v-ac59466a>Today\u2019s low temperature:</span>' + _vm._ssrEscape(_vm._s(_vm._f("fahrenheit")(_vm.weather.low)) + "\xB0") + "</span></span>")]);
    };
    var WeatherEarvue_type_template_id_ac59466a_scoped_true_staticRenderFns = [];
    var external_axios_ = __webpack_require__(4);
    var external_axios_default = /* @__PURE__ */ __webpack_require__.n(external_axios_);
    var external_suncalc_ = __webpack_require__(19);
    var external_suncalc_default = /* @__PURE__ */ __webpack_require__.n(external_suncalc_);
    var WeatherEarvue_type_script_lang_js_ = {
      data() {
        return {
          timer: "",
          midnight: null,
          sunrise: null,
          sunset: null,
          time: null,
          weather: {
            description: null,
            temperature: null,
            high: null,
            low: null
          },
          weather_types: ["Clear", "Partly Cloudy", "Fog/Mist"]
        };
      },
      props: {
        attention: Boolean
      },
      created() {
        this.setSunrise();
        this.setSunset();
        this.minutesToMidnight();
        this.timer = setInterval(function() {
          this.getWeather();
          this.minutesToMidnight();
        }.bind(this), 3e5);
      },
      beforeMount() {
        this.setPeriod();
      },
      mounted() {
        this.getWeather();
        this.getForecast();
      },
      watch: {
        attention: function(val, oldVal) {
          if (val === true) {
            this.setPeriod();
            this.getWeather();
          }
        }
      },
      methods: {
        minutesToMidnight() {
          let time = new Date();
          const midnight = new Date().setHours(24, 0, 0, 0);
          const minToMidnight = (midnight - time.getTime()) / 1e3 / 60;
          this.midnight = minToMidnight;
          if (1440 > minToMidnight > 1435) {
            this.setSunrise();
            this.setSunset();
            this.getForecast();
          }
        },
        setPeriod() {
          let d = new Date();
          if (this.sunset >= d.getTime() > this.sunrise) {
            return this.time = "day";
          } else {
            return this.time = "night";
          }
        },
        setSunrise: function() {
          var times = external_suncalc_default.a.getTimes(new Date(), 34.125278, -118.398889);
          var sunriseStr = times.sunrise.getHours() + ":" + times.sunrise.getMinutes();
          this.sunrise = sunriseStr;
          return sunriseStr;
        },
        setSunset: function() {
          var times = external_suncalc_default.a.getTimes(new Date(), 34.125278, -118.398889);
          var sunsetStr = times.sunset.getHours() + ":" + times.sunset.getMinutes();
          this.sunset = sunsetStr;
          return sunsetStr;
        },
        async getWeather() {
          try {
            const results = await external_axios_default.a.get("https://api.weather.gov/stations/ksmo/observations/latest");
            this.weather.description = results.data.properties.textDescription;
            if (results.data.properties.temperature.value != null) {
              this.weather.temperature = results.data.properties.temperature.value;
            } else if (results.data.properties.temperature.value === null && this.weather.temperature !== null) {
              return;
            } else {
              this.weather.temperature = -160 / 9;
            }
          } catch (error) {
            console.log(error);
          }
        },
        async getForecast() {
          try {
            const results = await external_axios_default.a.get("https://api.weather.gov/gridpoints/LOX/149,48");
            this.weather.high = results.data.properties.maxTemperature.values[0].value;
            this.weather.low = results.data.properties.minTemperature.values[0].value;
          } catch (error) {
            console.log(error);
          }
        },
        cancelAutoUpdate() {
          clearInterval(this.timer);
        }
      },
      beforeDestroy() {
        this.cancelAutoUpdate();
      },
      filters: {
        fahrenheit: function(value) {
          if (!value)
            return "";
          return value * 1.8 + 32;
        },
        integer: function(value) {
          if (!value)
            return "";
          return Math.round(value);
        }
      }
    };
    var components_WeatherEarvue_type_script_lang_js_ = WeatherEarvue_type_script_lang_js_;
    function WeatherEar_injectStyles(context) {
      var style0 = __webpack_require__(90);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var WeatherEar_component = Object(componentNormalizer["a"])(components_WeatherEarvue_type_script_lang_js_, WeatherEarvue_type_template_id_ac59466a_scoped_true_render, WeatherEarvue_type_template_id_ac59466a_scoped_true_staticRenderFns, false, WeatherEar_injectStyles, "ac59466a", "c851dece");
    var WeatherEar = WeatherEar_component.exports;
    var StockEarvue_type_template_id_23d71862_scoped_true_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "stocks" }, [_c("transition-group", { attrs: { "name": "fade", "tag": "dl" } }, _vm._l(_vm.markets, function(item, index) {
        return _c("div", { directives: [{ name: "show", rawName: "v-show", value: index == _vm.currentIndex, expression: "index == currentIndex" }], key: item.shortName, staticClass: "market-index", attrs: { "data-index": index } }, [_c("dt", [_c("span", { staticClass: "name" }, [_vm._v(_vm._s(item.shortName))])]), _vm._v(" "), _c("dd", { class: ["change", item.regularMarketChangePercent.raw >= 0 ? "positive" : "negative"] }, [_c("span", [_vm._v(_vm._s(item.regularMarketChangePercent.raw > 0 ? "+" + item.regularMarketChangePercent.raw : item.regularMarketChangePercent.raw) + "%")]), _vm._v(" "), _c("svg", { attrs: { "width": "5", "height": "9" } }, [_c("title", [_vm._v(_vm._s(item.shortName))]), _vm._v(" "), item.regularMarketChangePercent.raw > 0 ? _c("path", { attrs: { "fill": "currentColor", "d": "M2 4.092h1V9H2zm2.863 0L2.5 0 .137 4.092h4.726z" } }) : _vm._e(), _vm._v(" "), item.regularMarketChangePercent.raw < 0 ? _c("path", { attrs: { "fill": "currentColor", "d": "M3 4.908H2V0h1v4.908zm-2.863 0L2.5 9l2.363-4.092H.137z" } }) : _vm._e()])])]);
      }), 0)], 1);
    };
    var StockEarvue_type_template_id_23d71862_scoped_true_staticRenderFns = [];
    const data = {
      currentIndex: 0,
      marketInterval: null,
      markets: {
        0: {
          shortName: "S&P 500",
          regularMarketTime: {
            raw: 1637791540
          },
          regularMarketChangePercent: {
            raw: 0.72
          }
        },
        1: {
          shortName: "Nasdaq",
          regularMarketTime: {
            raw: 1637792159
          },
          regularMarketChangePercent: {
            raw: -1
          }
        },
        2: {
          shortName: "Dow",
          regularMarketTime: {
            raw: 1637791540
          },
          regularMarketChangePercent: {
            raw: -1.26
          }
        }
      }
    };
    var StockEarvue_type_script_lang_js_ = {
      name: "stock-ticker",
      data() {
        return data;
      },
      props: {
        attention: Boolean
      },
      mounted() {
        this.marketInterval = setInterval(() => {
          2 > this.currentIndex ? this.currentIndex += 1 : this.currentIndex = 0;
        }, 5e3);
        this.getMarkets();
      },
      watch: {
        attention: function(val, oldVal) {
          if (val === false) {
            clearInterval(this.marketInterval);
          } else {
            this.marketInterval = setInterval(() => {
              2 > this.currentIndex ? this.currentIndex += 1 : this.currentIndex = 0;
            }, 5e3);
          }
        }
      },
      methods: {
        async getMarkets() {
          try {
            const results = await external_axios_default.a.get("https://query1.finance.yahoo.com/v6/finance/quote/marketSummary?lang=en&region=US");
            console.log(this.results);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
    var components_StockEarvue_type_script_lang_js_ = StockEarvue_type_script_lang_js_;
    function StockEar_injectStyles(context) {
      var style0 = __webpack_require__(92);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var StockEar_component = Object(componentNormalizer["a"])(components_StockEarvue_type_script_lang_js_, StockEarvue_type_template_id_23d71862_scoped_true_render, StockEarvue_type_template_id_23d71862_scoped_true_staticRenderFns, false, StockEar_injectStyles, "23d71862", "16e76af7");
    var StockEar = StockEar_component.exports;
    var external_graphql_tag_ = __webpack_require__(21);
    var external_graphql_tag_default = /* @__PURE__ */ __webpack_require__.n(external_graphql_tag_);
    var Headervue_type_script_lang_js_ = {
      name: "Header",
      props: ["isLoading", "attention"],
      data() {
        return {
          componentKey: 0
        };
      },
      components: {
        WeatherEar,
        StockEar
      },
      watch: {
        attention: function(val, oldVal) {
          if (val === true) {
            this.componentKey += 1;
          }
        }
      },
      apollo: {
        characters: external_graphql_tag_default.a`
		 query {
			metadata {
				siteName
			}
		 }
	 `
      }
    };
    var layouts_Headervue_type_script_lang_js_ = Headervue_type_script_lang_js_;
    function Header_injectStyles(context) {
      var style0 = __webpack_require__(94);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var Header_component = Object(componentNormalizer["a"])(layouts_Headervue_type_script_lang_js_, Headervue_type_template_id_0c724da6_render, Headervue_type_template_id_0c724da6_staticRenderFns, false, Header_injectStyles, null, "32ae9676");
    var Header = Header_component.exports;
    var Footervue_type_template_id_1953f6fc_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode('<small>\xA9 <time datetime="1851-05-17">1851</time>\u2013<time datetime="1864-10-01">1864</time>, <time datetime="1868-05-16">1868</time>\u20131879, 2019\u2013<time' + _vm._ssrAttr("datetime", _vm.currentDate()) + ">" + _vm._ssrEscape(_vm._s(_vm.currentYear())) + "</time></small>")]);
    };
    var Footervue_type_template_id_1953f6fc_staticRenderFns = [];
    var Footervue_type_script_lang_js_ = {
      name: "Footer",
      methods: {
        currentDate() {
          const today = new Date();
          const date = `${today.toISOString("en-US", {
            timeZone: "America/Los_Angeles"
          })}`;
          return date;
        },
        currentYear() {
          const today = new Date();
          const date = `${today.getFullYear()}`;
          return date;
        }
      }
    };
    var layouts_Footervue_type_script_lang_js_ = Footervue_type_script_lang_js_;
    var Footer_component = Object(componentNormalizer["a"])(layouts_Footervue_type_script_lang_js_, Footervue_type_template_id_1953f6fc_render, Footervue_type_template_id_1953f6fc_staticRenderFns, false, null, null, "75135e5a");
    var Footer = Footer_component.exports;
    const Defaultvue_type_script_lang_js_data = {
      attention: true
    };
    var Defaultvue_type_script_lang_js_ = {
      name: "Default",
      components: {
        Header,
        Footer
      },
      data() {
        return Defaultvue_type_script_lang_js_data;
      },
      methods: {
        onFocus: function() {
          return this.attention = true;
        },
        onBlur: function() {
          return this.attention = false;
        }
      },
      created() {
      },
      destroyed: function() {
      }
    };
    var layouts_Defaultvue_type_script_lang_js_ = Defaultvue_type_script_lang_js_;
    function Default_injectStyles(context) {
      var style0 = __webpack_require__(96);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var Default_component = Object(componentNormalizer["a"])(layouts_Defaultvue_type_script_lang_js_, Defaultvue_type_template_id_2b6c7d94_render, Defaultvue_type_template_id_2b6c7d94_staticRenderFns, false, Default_injectStyles, null, "df23d38e");
    var Default = Default_component.exports;
    var defaultvue_type_template_id_0040005c_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("Nuxt");
    };
    var defaultvue_type_template_id_0040005c_staticRenderFns = [];
    var script = {};
    var default_component = Object(componentNormalizer["a"])(script, defaultvue_type_template_id_0040005c_render, defaultvue_type_template_id_0040005c_staticRenderFns, false, null, null, "38403e4d");
    var layouts_default = default_component.exports;
    const layouts = {
      "_Default": sanitizeComponent(Default),
      "_Footer": sanitizeComponent(Footer),
      "_Header": sanitizeComponent(Header),
      "_index": sanitizeComponent(void 0),
      "_default": sanitizeComponent(layouts_default)
    };
    var App = {
      render(h, props) {
        const loadingEl = h("NuxtLoading", {
          ref: "loading"
        });
        const layoutEl = h(this.layout || "nuxt");
        const templateEl = h("div", {
          domProps: {
            id: "__layout"
          },
          key: this.layoutName
        }, [layoutEl]);
        const transitionEl = h("transition", {
          props: {
            name: "layout",
            mode: "out-in"
          },
          on: {
            beforeEnter(el) {
              window.$nuxt.$nextTick(() => {
                window.$nuxt.$emit("triggerScroll");
              });
            }
          }
        }, [templateEl]);
        return h("div", {
          domProps: {
            id: "__nuxt"
          }
        }, [loadingEl, transitionEl]);
      },
      data: () => ({
        isOnline: true,
        layout: null,
        layoutName: "",
        nbFetching: 0
      }),
      beforeCreate() {
        runtime_vue2_bridge_6846c551["b"].util.defineReactive(this, "nuxt", this.$options.nuxt);
      },
      created() {
        this.$root.$options.$nuxt = this;
        this.error = this.nuxt.error;
        this.context = this.$options.context;
      },
      async mounted() {
        this.$loading = this.$refs.loading;
      },
      watch: {
        "nuxt.err": "errorChanged"
      },
      computed: {
        isOffline() {
          return !this.isOnline;
        },
        isFetching() {
          return this.nbFetching > 0;
        }
      },
      methods: {
        refreshOnlineStatus() {
        },
        async refresh() {
          const pages = getMatchedComponentsInstances(this.$route);
          if (!pages.length) {
            return;
          }
          this.$loading.start();
          const promises = pages.map((page) => {
            const p = [];
            if (page.$options.fetch && page.$options.fetch.length) {
              p.push(promisify(page.$options.fetch, this.context));
            }
            if (page.$fetch) {
              p.push(page.$fetch());
            } else {
              for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
                p.push(component.$fetch());
              }
            }
            if (page.$options.asyncData) {
              p.push(promisify(page.$options.asyncData, this.context).then((newData) => {
                for (const key in newData) {
                  runtime_vue2_bridge_6846c551["b"].set(page.$data, key, newData[key]);
                }
              }));
            }
            return Promise.all(p);
          });
          try {
            await Promise.all(promises);
          } catch (error) {
            this.$loading.fail(error);
            globalHandleError(error);
            this.error(error);
          }
          this.$loading.finish();
        },
        errorChanged() {
          if (this.nuxt.err) {
            if (this.$loading) {
              if (this.$loading.fail) {
                this.$loading.fail(this.nuxt.err);
              }
              if (this.$loading.finish) {
                this.$loading.finish();
              }
            }
            let errorLayout = (nuxt_error.options || nuxt_error).layout;
            if (typeof errorLayout === "function") {
              errorLayout = errorLayout(this.context);
            }
            this.setLayout(errorLayout);
          }
        },
        setLayout(layout) {
          if (!layout || !layouts["_" + layout]) {
            layout = "default";
          }
          this.layoutName = layout;
          this.layout = layouts["_" + layout];
          return this.layout;
        },
        loadLayout(layout) {
          if (!layout || !layouts["_" + layout]) {
            layout = "default";
          }
          return Promise.resolve(layouts["_" + layout]);
        }
      },
      components: {
        NuxtLoading: nuxt_loading
      }
    };
    var external_hookable_ = __webpack_require__(31);
    var runtime = __webpack_require__(5);
    function proxiedState(state) {
      state._asyncData = state._asyncData || {};
      state._errors = state._errors || {};
      return new Proxy(state, {
        get(target, prop) {
          if (prop === "data") {
            return target._asyncData;
          }
          if (prop === "_data") {
            return target.state;
          }
          return Reflect.get(target, prop);
        }
      });
    }
    const runOnceWith = (obj, fn) => {
      if (!obj || !["function", "object"].includes(typeof obj)) {
        return fn();
      }
      if (obj.__nuxt_installed) {
        return;
      }
      obj.__nuxt_installed = true;
      return fn();
    };
    var app_plugin = async (ctx, inject) => {
      const nuxtApp = {
        vueApp: {
          component: (id, definition) => runOnceWith(definition, () => runtime_vue2_bridge_6846c551["b"].component(id, definition)),
          config: {
            globalProperties: {}
          },
          directive: (id, definition) => runOnceWith(definition, () => runtime_vue2_bridge_6846c551["b"].directive(id, definition)),
          mixin: (mixin) => runOnceWith(mixin, () => runtime_vue2_bridge_6846c551["b"].mixin(mixin)),
          mount: () => {
          },
          provide: inject,
          unmount: () => {
          },
          use(vuePlugin) {
            runOnceWith(vuePlugin, () => vuePlugin.install(this));
          },
          version: runtime_vue2_bridge_6846c551["b"].version
        },
        provide: inject,
        globalName: "nuxt",
        payload: proxiedState(ctx.ssrContext.nuxt),
        _asyncDataPromises: [],
        isHydrating: true,
        nuxt2Context: ctx
      };
      nuxtApp.hooks = Object(external_hookable_["createHooks"])();
      nuxtApp.hook = nuxtApp.hooks.hook;
      nuxtApp.callHook = nuxtApp.hooks.callHook;
      const middleware = await Promise.resolve().then(__webpack_require__.bind(null, 11)).then((r) => r.default);
      nuxtApp._middleware = nuxtApp._middleware || {
        global: [],
        named: middleware
      };
      ctx.app.router.beforeEach(async (to, from, next) => {
        nuxtApp._processingMiddleware = true;
        for (const middleware2 of nuxtApp._middleware.global) {
          const result = await Object(runtime["a"])(nuxtApp, middleware2, [to, from]);
          if (result || result === false) {
            return next(result);
          }
        }
        next();
      });
      ctx.app.router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      if (!Array.isArray(ctx.app.created)) {
        ctx.app.created = [ctx.app.created].filter(Boolean);
      }
      if (!Array.isArray(ctx.app.mounted)) {
        ctx.app.mounted = [ctx.app.mounted].filter(Boolean);
      }
      {
        nuxtApp.ssrContext = ctx.ssrContext;
      }
      ctx.app.created.push(function() {
        nuxtApp.vue2App = this;
      });
      ctx.app.mounted.push(() => {
        nuxtApp.isHydrating = false;
      });
      const proxiedApp = new Proxy(nuxtApp, {
        get(target, prop) {
          if (prop[0] === "$") {
            var _target$vue2App;
            return target.nuxt2Context[prop] || ((_target$vue2App = target.vue2App) === null || _target$vue2App === void 0 ? void 0 : _target$vue2App[prop]);
          }
          return Reflect.get(target, prop);
        }
      });
      Object(runtime["c"])(proxiedApp);
      inject("_nuxtApp", proxiedApp);
    };
    const vueMetaRenderer = (nuxt) => {
      const meta = nuxt.ssrContext.meta.inject({
        isSSR: nuxt.ssrContext.nuxt.serverRendered,
        ln: false
      });
      return {
        htmlAttrs: meta.htmlAttrs.text(),
        headAttrs: meta.headAttrs.text(),
        headTags: meta.title.text() + meta.base.text() + meta.meta.text() + meta.link.text() + meta.style.text() + meta.script.text() + meta.noscript.text(),
        bodyAttrs: meta.bodyAttrs.text(),
        bodyScriptsPrepend: meta.meta.text({
          pbody: true
        }) + meta.link.text({
          pbody: true
        }) + meta.style.text({
          pbody: true
        }) + meta.script.text({
          pbody: true
        }) + meta.noscript.text({
          pbody: true
        }),
        bodyScripts: meta.meta.text({
          body: true
        }) + meta.link.text({
          body: true
        }) + meta.style.text({
          body: true
        }) + meta.script.text({
          body: true
        }) + meta.noscript.text({
          body: true
        })
      };
    };
    var nitro_bridge_server = Object(runtime["b"])((nuxtApp) => {
      const metaRenderers = [vueMetaRenderer];
      nuxtApp.callHook("meta:register", metaRenderers);
      nuxtApp.ssrContext.renderMeta = async () => {
        const metadata = {
          htmlAttrs: "",
          headAttrs: "",
          headTags: "",
          bodyAttrs: "",
          bodyScriptsPrepend: "",
          bodyScripts: ""
        };
        for await (const renderer of metaRenderers) {
          const result = await renderer(nuxtApp);
          for (const key in result) {
            metadata[key] += result[key];
          }
        }
        return metadata;
      };
    });
    __webpack_require__(98);
    runtime_vue2_bridge_6846c551["b"].use(vue_composition_api["default"].default || vue_composition_api["default"]);
    var capi_plugin = Object(runtime["b"])((nuxtApp) => {
      const _originalSetup = nuxtApp.nuxt2Context.app.setup;
      nuxtApp.nuxt2Context.app.setup = function(...args) {
        const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
        nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
        return result;
      };
    });
    var error_plugin_server = (ctx) => {
      if (ctx.ssrContext.error) {
        ctx.error(ctx.ssrContext.error);
      }
    };
    var external_vue_apollo_ = __webpack_require__(20);
    var external_vue_apollo_default = /* @__PURE__ */ __webpack_require__.n(external_vue_apollo_);
    __webpack_require__(99);
    var external_apollo_client_ = __webpack_require__(32);
    var external_apollo_link_ = __webpack_require__(12);
    var external_apollo_upload_client_ = __webpack_require__(33);
    var external_apollo_cache_inmemory_ = __webpack_require__(15);
    var external_subscriptions_transport_ws_ = __webpack_require__(34);
    var message_types_ = __webpack_require__(35);
    var message_types_default = /* @__PURE__ */ __webpack_require__.n(message_types_);
    var external_apollo_link_ws_ = __webpack_require__(36);
    var external_apollo_utilities_ = __webpack_require__(37);
    var external_apollo_link_persisted_queries_ = __webpack_require__(38);
    var external_apollo_link_context_ = __webpack_require__(39);
    var external_apollo_link_state_ = __webpack_require__(40);
    function createApolloClient({
      clientId = "defaultClient",
      httpEndpoint,
      wsEndpoint = null,
      tokenName = "apollo-token",
      persisting = false,
      ssr = false,
      websocketsOnly = false,
      link = null,
      preAuthLinks = [],
      defaultHttpLink = true,
      httpLinkOptions = {},
      cache = null,
      inMemoryCacheOptions = {},
      apollo = {},
      clientState = null,
      getAuth = src_defaultGetAuth,
      typeDefs = void 0,
      resolvers = void 0,
      onCacheInit = void 0
    }) {
      let wsClient, authLink, stateLink;
      const disableHttp = websocketsOnly && !ssr && wsEndpoint;
      if (!cache) {
        cache = new external_apollo_cache_inmemory_["InMemoryCache"](inMemoryCacheOptions);
      }
      if (!disableHttp) {
        const httpLink = Object(external_apollo_upload_client_["createUploadLink"])({
          uri: httpEndpoint,
          ...httpLinkOptions
        });
        if (!link) {
          link = httpLink;
        } else if (defaultHttpLink) {
          link = Object(external_apollo_link_["from"])([link, httpLink]);
        }
        authLink = Object(external_apollo_link_context_["setContext"])(async (_, { headers }) => {
          const Authorization = await getAuth(tokenName);
          const authorizationHeader = Authorization ? { Authorization } : {};
          return {
            headers: {
              ...headers,
              ...authorizationHeader
            }
          };
        });
        link = authLink.concat(link);
        if (preAuthLinks.length) {
          link = Object(external_apollo_link_["from"])(preAuthLinks).concat(authLink);
        }
      }
      if (!ssr) {
        if (!disableHttp) {
          let persistingOpts = {};
          if (typeof persisting === "object" && persisting != null) {
            persistingOpts = persisting;
            persisting = true;
          }
          if (persisting === true) {
            link = Object(external_apollo_link_persisted_queries_["createPersistedQueryLink"])(persistingOpts).concat(link);
          }
        }
        if (wsEndpoint) {
          wsClient = new external_subscriptions_transport_ws_["SubscriptionClient"](wsEndpoint, {
            reconnect: true,
            connectionParams: () => {
              const Authorization = getAuth(tokenName);
              return Authorization ? { Authorization, headers: { Authorization } } : {};
            }
          });
          const wsLink = new external_apollo_link_ws_["WebSocketLink"](wsClient);
          if (disableHttp) {
            link = link ? link.concat(wsLink) : wsLink;
          } else {
            link = Object(external_apollo_link_["split"])(({ query }) => {
              const { kind, operation } = Object(external_apollo_utilities_["getMainDefinition"])(query);
              return kind === "OperationDefinition" && operation === "subscription";
            }, wsLink, link);
          }
        }
      }
      if (clientState) {
        console.warn("clientState is deprecated, see https://vue-cli-plugin-apollo.netlify.com/guide/client-state.html");
        stateLink = Object(external_apollo_link_state_["withClientState"])({
          cache,
          ...clientState
        });
        link = Object(external_apollo_link_["from"])([stateLink, link]);
      }
      const apolloClient = new external_apollo_client_["ApolloClient"]({
        link,
        cache,
        ...ssr ? {
          ssrMode: true
        } : {
          ssrForceFetchDelay: 100,
          connectToDevTools: false
        },
        typeDefs,
        resolvers,
        ...apollo
      });
      if (stateLink) {
        apolloClient.onResetStore(stateLink.writeDefaults);
      }
      if (onCacheInit) {
        onCacheInit(cache);
        apolloClient.onResetStore(() => onCacheInit(cache));
      }
      return {
        apolloClient,
        wsClient,
        stateLink
      };
    }
    function restartWebsockets(wsClient) {
      const operations = Object.assign({}, wsClient.operations);
      wsClient.close(true);
      wsClient.connect();
      Object.keys(operations).forEach((id) => {
        wsClient.sendMessage(id, message_types_default.a.GQL_START, operations[id].options);
      });
    }
    function src_defaultGetAuth(tokenName) {
    }
    var external_universal_cookie_ = __webpack_require__(41);
    var external_universal_cookie_default = /* @__PURE__ */ __webpack_require__.n(external_universal_cookie_);
    __webpack_require__(0);
    runtime_vue2_bridge_6846c551["b"].use(external_vue_apollo_default.a);
    var apollo_module = (ctx, inject) => {
      const providerOptions = {
        clients: {}
      };
      const {
        app,
        beforeNuxtRender,
        req
      } = ctx;
      const AUTH_TOKEN_NAME = "apollo-token";
      const COOKIE_ATTRIBUTES = {
        "expires": 7,
        "path": "/",
        "secure": false
      };
      const AUTH_TYPE = "Bearer ";
      const cookies = new external_universal_cookie_default.a(req && req.headers.cookie);
      const defaultTokenName = AUTH_TOKEN_NAME;
      function defaultGetAuth() {
        const token = cookies.get(defaultTokenName);
        return token && defaultClientConfig.validateToken(token) ? AUTH_TYPE + token : "";
      }
      let defaultClientConfig;
      defaultClientConfig = {
        "httpEndpoint": "https://thenewinquiry.com/wp-json/wp/v2/",
        "browserHttpEndpoint": "/___explore"
      };
      const defaultValidateToken = () => true;
      if (!defaultClientConfig.validateToken) {
        defaultClientConfig.validateToken = defaultValidateToken;
      }
      const defaultCache = defaultClientConfig.cache ? defaultClientConfig.cache : new external_apollo_cache_inmemory_["InMemoryCache"](defaultClientConfig.inMemoryCacheOptions ? defaultClientConfig.inMemoryCacheOptions : void 0);
      if (!defaultClientConfig.getAuth) {
        defaultClientConfig.getAuth = defaultGetAuth;
      }
      defaultClientConfig.ssr = true;
      defaultClientConfig.cache = defaultCache;
      defaultClientConfig.tokenName = defaultTokenName;
      if (req && req.headers && req.headers.cookie) {
        if (!defaultClientConfig.httpLinkOptions) {
          defaultClientConfig.httpLinkOptions = {};
        }
        if (!defaultClientConfig.httpLinkOptions.headers) {
          defaultClientConfig.httpLinkOptions.headers = {};
        }
        defaultClientConfig.httpLinkOptions.headers.cookie = req.headers.cookie;
      }
      let defaultApolloCreation = createApolloClient({
        ...defaultClientConfig
      });
      defaultApolloCreation.apolloClient.wsClient = defaultApolloCreation.wsClient;
      providerOptions.defaultClient = defaultApolloCreation.apolloClient;
      const vueApolloOptions = Object.assign(providerOptions, {
        errorHandler(error) {
          console.log("%cError", "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;", error.message);
        }
      });
      const apolloProvider = new external_vue_apollo_default.a(vueApolloOptions);
      app.apolloProvider = apolloProvider;
      {
        const ApolloSSR = __webpack_require__(100);
        beforeNuxtRender(({
          nuxtState
        }) => {
          nuxtState.apollo = ApolloSSR.getStates(apolloProvider);
        });
      }
      inject("apolloHelpers", {
        onLogin: async (token, apolloClient = apolloProvider.defaultClient, cookieAttributes = COOKIE_ATTRIBUTES, skipResetStore = false) => {
          if (typeof cookieAttributes === "number")
            cookieAttributes = {
              expires: cookieAttributes
            };
          if (typeof cookieAttributes.expires === "number") {
            cookieAttributes.expires = new Date(Date.now() + 86400 * 1e3 * cookieAttributes.expires);
          }
          if (token) {
            cookies.set(AUTH_TOKEN_NAME, token, cookieAttributes);
          } else {
            cookies.remove(AUTH_TOKEN_NAME, cookieAttributes);
          }
          if (apolloClient.wsClient)
            restartWebsockets(apolloClient.wsClient);
          if (!skipResetStore) {
            try {
              await apolloClient.resetStore();
            } catch (e) {
              console.log("%cError on cache reset (setToken)", "color: orange;", e.message);
            }
          }
        },
        onLogout: async (apolloClient = apolloProvider.defaultClient, skipResetStore = false) => {
          cookies.remove(AUTH_TOKEN_NAME, COOKIE_ATTRIBUTES);
          if (apolloClient.wsClient)
            restartWebsockets(apolloClient.wsClient);
          if (!skipResetStore) {
            try {
              await apolloClient.resetStore();
            } catch (e) {
              console.log("%cError on cache reset (logout)", "color: orange;", e.message);
            }
          }
        },
        getToken: (tokenName = AUTH_TOKEN_NAME) => {
          return cookies.get(tokenName);
        }
      });
    };
    var external_defu_ = __webpack_require__(10);
    var external_defu_default = /* @__PURE__ */ __webpack_require__.n(external_defu_);
    const axiosExtra = {
      setBaseURL(baseURL) {
        this.defaults.baseURL = baseURL;
      },
      setHeader(name, value, scopes = "common") {
        for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
          if (!value) {
            delete this.defaults.headers[scope][name];
            continue;
          }
          this.defaults.headers[scope][name] = value;
        }
      },
      setToken(token, type, scopes = "common") {
        const value = !token ? null : (type ? type + " " : "") + token;
        this.setHeader("Authorization", value, scopes);
      },
      onRequest(fn) {
        this.interceptors.request.use((config) => fn(config) || config);
      },
      onResponse(fn) {
        this.interceptors.response.use((response) => fn(response) || response);
      },
      onRequestError(fn) {
        this.interceptors.request.use(void 0, (error) => fn(error) || Promise.reject(error));
      },
      onResponseError(fn) {
        this.interceptors.response.use(void 0, (error) => fn(error) || Promise.reject(error));
      },
      onError(fn) {
        this.onRequestError(fn);
        this.onResponseError(fn);
      },
      create(options) {
        return createAxiosInstance(external_defu_default()(options, this.defaults));
      }
    };
    for (const method of ["request", "delete", "get", "head", "options", "post", "put", "patch"]) {
      axiosExtra["$" + method] = function() {
        return this[method].apply(this, arguments).then((res) => res && res.data);
      };
    }
    const extendAxiosInstance = (axios) => {
      for (const key in axiosExtra) {
        axios[key] = axiosExtra[key].bind(axios);
      }
    };
    const createAxiosInstance = (axiosOptions) => {
      const axios = external_axios_default.a.create(axiosOptions);
      axios.CancelToken = external_axios_default.a.CancelToken;
      axios.isCancel = external_axios_default.a.isCancel;
      extendAxiosInstance(axios);
      axios.onRequest((config) => {
        config.headers = {
          ...axios.defaults.headers.common,
          ...config.headers
        };
      });
      return axios;
    };
    var _nuxt_axios = (ctx, inject) => {
      const runtimeConfig = ctx.$config && ctx.$config.axios || {};
      const baseURL = runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || "http://localhost:3000/";
      const headers = {
        "common": {
          "Accept": "application/json, text/plain, */*"
        },
        "delete": {},
        "get": {},
        "head": {},
        "post": {},
        "put": {},
        "patch": {}
      };
      const axiosOptions = {
        baseURL,
        headers
      };
      if (ctx.req && ctx.req.headers) {
        const reqHeaders = {
          ...ctx.req.headers
        };
        for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
          delete reqHeaders[h];
        }
        axiosOptions.headers.common = {
          ...reqHeaders,
          ...axiosOptions.headers.common
        };
      }
      {
        axiosOptions.headers.common["accept-encoding"] = "gzip, deflate";
      }
      const axios = createAxiosInstance(axiosOptions);
      ctx.$axios = axios;
      inject("axios", axios);
    };
    runtime_vue2_bridge_6846c551["b"].component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);
    runtime_vue2_bridge_6846c551["b"].component(external_vue_no_ssr_default.a.name, {
      ...external_vue_no_ssr_default.a,
      render(h, ctx) {
        return external_vue_no_ssr_default.a.render(h, ctx);
      }
    });
    runtime_vue2_bridge_6846c551["b"].component(nuxt_child.name, nuxt_child);
    runtime_vue2_bridge_6846c551["b"].component("NChild", nuxt_child);
    runtime_vue2_bridge_6846c551["b"].component(components_nuxt.name, components_nuxt);
    Object.defineProperty(runtime_vue2_bridge_6846c551["b"].prototype, "$nuxt", {
      get() {
        const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
        return globalNuxt;
      },
      configurable: true
    });
    runtime_vue2_bridge_6846c551["b"].use(external_vue_meta_default.a, {
      "keyName": "head",
      "attribute": "data-n-head",
      "ssrAttribute": "data-n-head-ssr",
      "tagIDKeyName": "hid"
    });
    const defaultTransition = {
      "name": "page",
      "mode": "out-in",
      "appear": false,
      "appearClass": "appear",
      "appearActiveClass": "appear-active",
      "appearToClass": "appear-to"
    };
    async function createApp(ssrContext, config = {}) {
      const router = await createRouter(ssrContext, config);
      const app = {
        head: {
          "meta": [],
          "link": [],
          "style": [],
          "script": []
        },
        router,
        nuxt: {
          defaultTransition,
          transitions: [defaultTransition],
          setTransitions(transitions) {
            if (!Array.isArray(transitions)) {
              transitions = [transitions];
            }
            transitions = transitions.map((transition) => {
              if (!transition) {
                transition = defaultTransition;
              } else if (typeof transition === "string") {
                transition = Object.assign({}, defaultTransition, {
                  name: transition
                });
              } else {
                transition = Object.assign({}, defaultTransition, transition);
              }
              return transition;
            });
            this.$options.nuxt.transitions = transitions;
            return transitions;
          },
          err: null,
          dateErr: null,
          error(err) {
            err = err || null;
            app.context._errored = Boolean(err);
            err = err ? normalizeError(err) : null;
            let nuxt = app.nuxt;
            if (this) {
              nuxt = this.nuxt || this.$options.nuxt;
            }
            nuxt.dateErr = Date.now();
            nuxt.err = err;
            if (ssrContext) {
              ssrContext.nuxt.error = err;
            }
            return err;
          }
        },
        ...App
      };
      const next = ssrContext ? ssrContext.next : (location) => app.router.push(location);
      let route;
      if (ssrContext) {
        route = router.resolve(ssrContext.url).route;
      } else {
        const path = getLocation(router.options.base, router.options.mode);
        route = router.resolve(path).route;
      }
      await setContext(app, {
        route,
        next,
        error: app.nuxt.error.bind(app),
        payload: ssrContext ? ssrContext.payload : void 0,
        req: ssrContext ? ssrContext.req : void 0,
        res: ssrContext ? ssrContext.res : void 0,
        beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : void 0,
        beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : void 0,
        ssrContext
      });
      function inject(key, value) {
        if (!key) {
          throw new Error("inject(key, value) has no key provided");
        }
        if (value === void 0) {
          throw new Error(`inject('${key}', value) has no value provided`);
        }
        key = "$" + key;
        app[key] = value;
        if (!app.context[key]) {
          app.context[key] = value;
        }
        const installKey = "__nuxt_" + key + "_installed__";
        if (runtime_vue2_bridge_6846c551["b"][installKey]) {
          return;
        }
        runtime_vue2_bridge_6846c551["b"][installKey] = true;
        runtime_vue2_bridge_6846c551["b"].use(() => {
          if (!Object.prototype.hasOwnProperty.call(runtime_vue2_bridge_6846c551["b"].prototype, key)) {
            Object.defineProperty(runtime_vue2_bridge_6846c551["b"].prototype, key, {
              get() {
                return this.$root.$options[key];
              }
            });
          }
        });
      }
      inject("config", config);
      if (typeof app_plugin === "function") {
        await app_plugin(app.context, inject);
      }
      if (typeof nitro_bridge_server === "function") {
        await nitro_bridge_server(app.context, inject);
      }
      if (typeof capi_plugin === "function") {
        await capi_plugin(app.context, inject);
      }
      if (typeof error_plugin_server === "function") {
        await error_plugin_server(app.context);
      }
      if (typeof apollo_module === "function") {
        await apollo_module(app.context, inject);
      }
      if (typeof _nuxt_axios === "function") {
        await _nuxt_axios(app.context, inject);
      }
      await new Promise((resolve, reject) => {
        router.replace(app.context.route.fullPath, resolve, (err) => {
          if (!err._isRouter)
            return reject(err);
          if (err.type !== 2)
            return resolve();
          const unregister = router.afterEach(async (to, from) => {
            if (ssrContext && ssrContext.url) {
              ssrContext.url = to.fullPath;
            }
            app.context.route = await getRouteData(to);
            app.context.params = to.params || {};
            app.context.query = to.query || {};
            unregister();
            resolve();
          });
        });
      });
      return {
        app,
        router
      };
    }
    var nuxt_link_server = {
      name: "NuxtLink",
      extends: runtime_vue2_bridge_6846c551["b"].component("RouterLink"),
      props: {
        prefetch: {
          type: Boolean,
          default: true
        },
        noPrefetch: {
          type: Boolean,
          default: false
        }
      }
    };
    runtime_vue2_bridge_6846c551["b"].config.optionMergeStrategies.serverPrefetch = runtime_vue2_bridge_6846c551["b"].config.optionMergeStrategies.created;
    if (!runtime_vue2_bridge_6846c551["b"].__nuxt__fetch__mixin__) {
      runtime_vue2_bridge_6846c551["b"].mixin(fetch_server);
      runtime_vue2_bridge_6846c551["b"].__nuxt__fetch__mixin__ = true;
    }
    runtime_vue2_bridge_6846c551["b"].component(nuxt_link_server.name, nuxt_link_server);
    runtime_vue2_bridge_6846c551["b"].component("NLink", nuxt_link_server);
    const noopApp = () => new runtime_vue2_bridge_6846c551["b"]({
      render: (h) => h("div", {
        domProps: {
          id: "__nuxt"
        }
      })
    });
    const createNext = (ssrContext) => (opts) => {
      ssrContext.redirected = opts;
      if (ssrContext.target === "static" || !ssrContext.res) {
        ssrContext.nuxt.serverRendered = false;
        return;
      }
      let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
      const $config = ssrContext.nuxt.config || {};
      const routerBase = $config._app && $config._app.basePath || "/";
      if (!fullPath.startsWith("http") && routerBase !== "/" && !fullPath.startsWith(routerBase)) {
        fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
      }
      if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
        ssrContext.redirected = false;
        return;
      }
      ssrContext.res.writeHead(opts.status, {
        Location: Object(external_ufo_["normalizeURL"])(fullPath)
      });
      ssrContext.res.end();
    };
    __webpack_exports__["default"] = async (ssrContext) => {
      ssrContext.redirected = false;
      ssrContext.next = createNext(ssrContext);
      ssrContext.beforeRenderFns = [];
      ssrContext.beforeSerializeFns = [];
      ssrContext.nuxt = {
        layout: "default",
        data: [],
        fetch: {},
        error: null,
        serverRendered: true,
        routePath: ""
      };
      ssrContext.fetchCounters = {};
      ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
      if (ssrContext.nuxt.config._app) {
        __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
      }
      const {
        app,
        router
      } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
      const _app = new runtime_vue2_bridge_6846c551["b"](app);
      ssrContext.nuxt.routePath = app.context.route.path;
      ssrContext.meta = _app.$meta();
      ssrContext.asyncData = {};
      const beforeRender = async () => {
        await Promise.all(ssrContext.beforeRenderFns.map((fn) => promisify(fn, {
          Components,
          nuxtState: ssrContext.nuxt
        })));
        ssrContext.rendered = () => {
          ssrContext.beforeSerializeFns.forEach((fn) => fn(ssrContext.nuxt));
        };
      };
      const renderErrorPage = async () => {
        if (ssrContext.target === "static") {
          ssrContext.nuxt.serverRendered = false;
        }
        const layout2 = (nuxt_error.options || nuxt_error).layout;
        const errLayout = typeof layout2 === "function" ? layout2.call(nuxt_error, app.context) : layout2;
        ssrContext.nuxt.layout = errLayout || "default";
        await _app.loadLayout(errLayout);
        _app.setLayout(errLayout);
        await beforeRender();
        return _app;
      };
      const render404Page = () => {
        app.context.error({
          statusCode: 404,
          path: ssrContext.url,
          message: "This page could not be found"
        });
        return renderErrorPage();
      };
      const Components = getMatchedComponents(app.context.route);
      let midd = [];
      midd = midd.map((name) => {
        if (typeof name === "function") {
          return name;
        }
        if (typeof _nuxt_middleware["default"][name] !== "function") {
          app.context.error({
            statusCode: 500,
            message: "Unknown middleware " + name
          });
        }
        return _nuxt_middleware["default"][name];
      });
      await middlewareSeries(midd, app.context);
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
      if (typeof layout === "function") {
        layout = layout(app.context);
      }
      await _app.loadLayout(layout);
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      layout = _app.setLayout(layout);
      ssrContext.nuxt.layout = _app.layoutName;
      midd = [];
      layout = sanitizeComponent(layout);
      if (layout.options.middleware) {
        midd = midd.concat(layout.options.middleware);
      }
      Components.forEach((Component) => {
        if (Component.options.middleware) {
          midd = midd.concat(Component.options.middleware);
        }
      });
      midd = midd.map((name) => {
        if (typeof name === "function") {
          return name;
        }
        if (typeof _nuxt_middleware["default"][name] !== "function") {
          app.context.error({
            statusCode: 500,
            message: "Unknown middleware " + name
          });
        }
        return _nuxt_middleware["default"][name];
      });
      await middlewareSeries(midd, app.context);
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      let isValid = true;
      try {
        for (const Component of Components) {
          if (typeof Component.options.validate !== "function") {
            continue;
          }
          isValid = await Component.options.validate(app.context);
          if (!isValid) {
            break;
          }
        }
      } catch (validationError) {
        app.context.error({
          statusCode: validationError.statusCode || "500",
          message: validationError.message
        });
        return renderErrorPage();
      }
      if (!isValid) {
        return render404Page();
      }
      if (!Components.length) {
        return render404Page();
      }
      const asyncDatas = await Promise.all(Components.map((Component) => {
        const promises = [];
        if (Component.options.asyncData && typeof Component.options.asyncData === "function") {
          const promise = promisify(Component.options.asyncData, app.context);
          promise.then((asyncDataResult) => {
            ssrContext.asyncData[Component.cid] = asyncDataResult;
            applyAsyncData(Component);
            return asyncDataResult;
          });
          promises.push(promise);
        } else {
          promises.push(null);
        }
        if (Component.options.fetch && Component.options.fetch.length) {
          promises.push(Component.options.fetch(app.context));
        } else {
          promises.push(null);
        }
        return Promise.all(promises);
      }));
      ssrContext.nuxt.data = asyncDatas.map((r) => r[0] || {});
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      await beforeRender();
      return _app;
    };
  },
  function(module2, exports) {
    module2.exports = require$$61;
  }
]);
}(server$2));

var server = server$2.exports;

const server$1 = server;

export { server$1 as default };
