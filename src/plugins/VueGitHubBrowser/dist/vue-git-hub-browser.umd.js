(function(x,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],y):(x=typeof globalThis<"u"?globalThis:x||self,y(x.VueGitHubBrowser={},x.Vue))})(this,function(x,y){"use strict";const st={class:"card"},ot=["href"],it=["src"],at={class:"card-content ghb-bg-card-background"},ct={class:"ghb-txt-card-title"},lt={class:"ghb-txt-card-text"},ut=y.defineComponent({__name:"GitHubProjectBox",props:{cardDetails:Object,fallbackImage:{type:String,default:"https://wallup.net/wp-content/uploads/2018/10/06/708179-kittens-kitten-cat-cats-baby-cute-s.jpg"}},setup(e){const t=e;function n(){var r,s,o;return(r=t.cardDetails)!=null&&r.CustomData&&t.cardDetails.CustomData.image_url&&t.cardDetails.CustomData.image_url.length>0?t.cardDetails.CustomData.image_url[0]:(s=t.cardDetails)!=null&&s.owner&&((o=t.cardDetails)!=null&&o.owner.avatar_url)?t.cardDetails.owner.avatar_url:t.fallbackImage}return(r,s)=>{var o,i,c;return y.openBlock(),y.createElementBlock("div",st,[y.createElementVNode("a",{href:(o=e.cardDetails)==null?void 0:o.html_url,target:"_blank",class:"card-link"},[y.createElementVNode("img",{src:n(),alt:"Card Image",class:"card-image"},null,8,it),y.createElementVNode("div",at,[y.createElementVNode("h3",ct,y.toDisplayString((i=e.cardDetails)==null?void 0:i.name),1),y.createElementVNode("p",lt,y.toDisplayString((c=e.cardDetails)==null?void 0:c.description),1)])],8,ot)])}}}),Vn="",be=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},we=be(ut,[["__scopeId","data-v-99fc2410"]]);function ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:Q}=Object,q=(e=>t=>{const n=ft.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>q(t)===e),I=e=>t=>typeof t===e,{isArray:B}=Array,L=I("undefined");function dt(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=T("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const ht=I("string"),O=I("function"),Se=I("number"),M=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,V=e=>{if(q(e)!=="object")return!1;const t=Q(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=T("Date"),bt=T("File"),wt=T("Blob"),gt=T("FileList"),Et=e=>M(e)&&O(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=q(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},Rt=T("URLSearchParams"),[Ot,Tt,_t,At]=["ReadableStream","Request","Response","Headers"].map(T),xt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Oe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!L(e)&&e!==Oe;function Z(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,s)=>{const o=e&&Re(t,s)||s;V(t[o])&&V(r)?t[o]=Z(t[o],r):V(r)?t[o]=Z({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const Pt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,o)=>{n&&O(s)?e[o]=ge(s,n):e[o]=s},{allOwnKeys:r}),e),Ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Nt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Q(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ft=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Q(Uint8Array)),Lt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},kt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ut=T("HTMLFormElement"),Ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),_e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),qt=T("RegExp"),Ae=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},It=e=>{Ae(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Mt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Vt=()=>{},$t=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Y="abcdefghijklmnopqrstuvwxyz",xe="0123456789",Pe={DIGIT:xe,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+xe},Gt=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function zt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Jt=e=>{const t=new Array(10),n=(r,s)=>{if(M(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return k(r,(i,c)=>{const f=n(i,s+1);!L(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Wt=T("AsyncFunction"),a={isArray:B,isArrayBuffer:Ee,isBuffer:dt,isFormData:St,isArrayBufferView:pt,isString:ht,isNumber:Se,isBoolean:mt,isObject:M,isPlainObject:V,isReadableStream:Ot,isRequest:Tt,isResponse:_t,isHeaders:At,isUndefined:L,isDate:yt,isFile:bt,isBlob:wt,isRegExp:qt,isFunction:O,isStream:Et,isURLSearchParams:Rt,isTypedArray:jt,isFileList:gt,forEach:k,merge:Z,extend:Pt,trim:xt,stripBOM:Ct,inherits:Nt,toFlatObject:Dt,kindOf:q,kindOfTest:T,endsWith:Bt,toArray:Ft,forEachEntry:Lt,matchAll:kt,isHTMLForm:Ut,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:Ae,freezeMethods:It,toObjectSet:Mt,toCamelCase:Ht,noop:Vt,toFiniteNumber:$t,findKey:Re,global:Oe,isContextDefined:Te,ALPHABET:Pe,generateString:Gt,isSpecCompliantForm:zt,toJSONObject:Jt,isAsyncFn:Wt,isThenable:e=>e&&(M(e)||O(e))&&O(e.then)&&O(e.catch)};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=h.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}}),Object.defineProperties(h,Ne),Object.defineProperty(Ce,"isAxiosError",{value:!0}),h.from=(e,t,n,r,s,o)=>{const i=Object.create(Ce);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Kt=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Be(e,t,n){return e?e.concat(t).map(function(s,o){return s=De(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function vt(e){return a.isArray(e)&&!e.some(ee)}const Xt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,S){return!a.isUndefined(S[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,S){let R=d;if(d&&!S&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&vt(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(R=a.toArray(d)))return m=De(m),R.forEach(function(w,H){!(a.isUndefined(w)||w===null)&&t.append(i===!0?Be([m],H,o):i===null?m:m+"[]",u(w))}),!1}return ee(d)?!0:(t.append(Be(S,m,o),u(d)),!1)}const p=[],E=Object.assign(Xt,{defaultVisitor:l,convertValue:u,isVisitable:ee});function b(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(R,P){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(P)?P.trim():P,m,E))===!0&&b(R,m?m.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&$(e,this,t)}const je=te.prototype;je.append=function(t,n){this._pairs.push([t,n])},je.toString=function(t){const n=t?function(r){return t.call(this,r,Fe)}:Fe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Qt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||Qt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Zt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ke=Zt,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Yt={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:te,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},ne=typeof window<"u"&&typeof document<"u",en=(e=>ne&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),tn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),nn=ne&&window.location.href||"http://localhost",_={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ne,hasStandardBrowserEnv:en,hasStandardBrowserWebWorkerEnv:tn,origin:nn},Symbol.toStringTag,{value:"Module"})),...Yt};function rn(e,t){return $(e,new _.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return _.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function on(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=on(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(sn(r),s,n,0)}),n}return null}function an(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Ue,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return $(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),an(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,cn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ln=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&cn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},qe=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:a.isArray(e)?e.map(G):String(e)}function un(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=U(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=G(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!fn(t))i(ln(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return un(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=G(s),delete n[o];return}const c=t?dn(o):String(o).trim();c!==o&&delete n[o],n[c]=G(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[qe]=this[qe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=U(i);r[c]||(pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),a.reduceDescriptors(z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}}),a.freezeMethods(z);const A=z;function ie(e,t){const n=this||se,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,h,{__CANCEL__:!0});function Me(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const b=l&&u-l;return b?Math.round(E*1e3/b):void 0}}function yn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const J=(e,t,n=3)=>{let r=0;const s=mn(50,250);return yn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},bn=_.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),wn=_.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function En(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!gn(t)?En(e,t):t}const $e=e=>e instanceof A?{...e}:e;function D(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s($e(u),$e(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,E=p(e[l],t[l],l);a.isUndefined(E)&&p!==c||(n[l]=E)}),n}const Ge=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Le(Ve(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(_.hasStandardBrowserEnv||_.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(_.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&bn(t.url))){const u=s&&o&&wn.read(o);u&&i.set(s,u)}return t},Sn=typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(n,r){const s=Ge(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c}=s,f;function u(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function p(){if(!l)return;const b=A.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:b,config:e,request:l};Me(function(R){n(R),u()},function(R){r(R),u()},m),l=null}"onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,s,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||Ue;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(d,m){l.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",J(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",J(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=b=>{l&&(r(!b||b.type?new F(null,e,l):b),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const E=hn(s.url);if(E&&_.protocols.indexOf(E)===-1){r(new h("Unsupported protocol "+E+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Rn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const u=f instanceof Error?f:this.reason;n.abort(u instanceof h?u:new F(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},On=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Tn=async function*(e,t,n){for await(const r of e)yield*On(ArrayBuffer.isView(r)?r:await n(String(r)),t)},ze=(e,t,n,r,s)=>{const o=Tn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:u}=await o.next();if(f){c.close(),r();return}let l=u.byteLength;n&&n(i+=l),c.enqueue(new Uint8Array(u))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},Je=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},W=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",We=W&&typeof ReadableStream=="function",ae=W&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),_n=We&&(()=>{let e=!1;const t=new Request(_.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ke=64*1024,ce=We&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),K={stream:ce&&(e=>e.body)};W&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const An=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ae(e)).byteLength},xn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??An(t)},le={http:Kt,xhr:Sn,fetch:W&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:p="same-origin",fetchOptions:E}=Ge(e);u=u?(u+"").toLowerCase():"text";let[b,d]=s||o||i?Rn([s,o],i):[],m,S;const R=()=>{!m&&setTimeout(()=>{b&&b.unsubscribe()}),m=!0};let P;try{if(f&&_n&&n!=="get"&&n!=="head"&&(P=await xn(l,r))!==0){let N=new Request(t,{method:"POST",body:r,duplex:"half"}),j;a.isFormData(r)&&(j=N.headers.get("content-type"))&&l.setContentType(j),N.body&&(r=ze(N.body,Ke,Je(P,J(f)),null,ae))}a.isString(p)||(p=p?"cors":"omit"),S=new Request(t,{...E,signal:b,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let w=await fetch(S);const H=ce&&(u==="stream"||u==="response");if(ce&&(c||H)){const N={};["status","statusText","headers"].forEach(rt=>{N[rt]=w[rt]});const j=a.toFiniteNumber(w.headers.get("content-length"));w=new Response(ze(w.body,Ke,c&&Je(j,J(c,!0)),H&&R,ae),N)}u=u||"text";let Mn=await K[a.findKey(K,u)||"text"](w,e);return!H&&R(),d&&d(),await new Promise((N,j)=>{Me(N,j,{data:Mn,headers:A.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:S})})}catch(w){throw R(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,S),{cause:w.cause||w}):h.from(w,w&&w.code,e,S)}})};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ve=e=>`- ${e}`,Pn=e=>a.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Pn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(ve).join(`
`):" "+ve(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function ue(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function Qe(e){return ue(e),e.headers=A.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||se.adapter)(e).then(function(r){return ue(e),r.data=ie.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ie(r)||(ue(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Ze="1.7.2",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ye={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Ye[i]&&(Ye[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Cn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const de={assertOptions:Cn,validators:fe},C=de.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new ke,response:new ke}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&de.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:de.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let l,p=0,E;if(!f){const d=[Qe.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,u),E=d.length,l=Promise.resolve(n);p<E;)l=l.then(d[p++],d[p++]);return l}E=c.length;let b=n;for(p=0;p<E;){const d=c[p++],m=c[p++];try{b=d(b)}catch(S){m.call(this,S);break}}try{l=Qe.call(this,b)}catch(d){return Promise.reject(d)}for(p=0,E=u.length;p<E;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=D(this.defaults,t);const n=Ve(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}}),a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const X=v;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new F(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}const Nn=pe;function Dn(e){return function(n){return e.apply(null,n)}}function Bn(e){return a.isObject(e)&&e.isAxiosError===!0}const he={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(he).forEach(([e,t])=>{he[t]=e});const Fn=he;function et(e){const t=new X(e),n=ge(X.prototype.request,t);return a.extend(n,X.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return et(D(e,s))},n}const g=et(se);g.Axios=X,g.CanceledError=F,g.CancelToken=Nn,g.isCancel=Ie,g.VERSION=Ze,g.toFormData=$,g.AxiosError=h,g.Cancel=g.CanceledError,g.all=function(t){return Promise.all(t)},g.spread=Dn,g.isAxiosError=Bn,g.mergeConfig=D,g.AxiosHeaders=A,g.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e),g.getAdapter=Xe.getAdapter,g.HttpStatusCode=Fn,g.default=g;const me=g;class ye{static GetUserProjects(t){return me.get(`https://api.github.com/users/${t}/repos`).then(n=>n.data)}static GetOrgProjects(t){return me.get(`https://api.github.com/orgs/${t}/repos`).then(n=>n.data)}static GetCustomProjectData(t){let n=t.html_url;return n=n.substring(19),n=`https://raw.githubusercontent.com/${n}/${t.default_branch}/.viewer/data.json`,me.get(n).then(r=>r.data?r.data:[]).catch(function(r){return[]})}}const tt=y.reactive({projects:[]});async function jn(){var t;const e=y.inject("GitHubGlobalProperties");try{let n=[];for(let r=0;r<e.options.userRepos.length;r++){let s=await ye.GetUserProjects(e.options.userRepos[r]);n=n.concat(s)}for(let r=0;r<e.options.orgRepos.length;r++){let s=await ye.GetOrgProjects(e.options.orgRepos[r]);n=n.concat(s)}((t=e.options.exclude)==null?void 0:t.length)>0&&(n=n.filter(r=>!e.options.exclude.includes(r.name)));for(let r=0;r<n.length;r++)await this.FetchProjectCustomData(n[r]);tt.projects=n}catch(n){alert(n),console.log(n)}}async function Ln(e){e.CustomData=await ye.GetCustomProjectData(e)}const nt={state:tt,FetchProjectCustomData:Ln,FetchProjects:jn},Qn="",kn={key:0,class:"card-grid"},Un={__name:"GitHubGridView",props:{projectsToShow:Array|void 0},setup(e){const t=e;y.onMounted(async()=>{t.projectsToShow||await nt.FetchProjects()});const n=y.computed(()=>t.projectsToShow?t.projectsToShow:nt.state.projects);return(r,s)=>n.value?(y.openBlock(),y.createElementBlock("div",kn,[(y.openBlock(!0),y.createElementBlock(y.Fragment,null,y.renderList(n.value,o=>(y.openBlock(),y.createBlock(we,{"card-details":o,key:o.id},null,8,["card-details"]))),128))])):y.createCommentVNode("",!0)}},Hn=be(Un,[["__scopeId","data-v-08b20c2b"]]),Zn="";class qn{constructor(t){this.options=t||{userRepos:[],orgRepos:[],exclude:[]}}}const In={install(e,t){e.provide("GitHubGlobalProperties",new qn(t))}};x.GitHubGridView=Hn,x.GitHubProjectBox=we,x.default=In,Object.defineProperties(x,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
