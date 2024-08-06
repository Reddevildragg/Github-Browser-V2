var wt = Object.defineProperty;
var bt = (e, t, n) => t in e ? wt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => (bt(e, typeof t != "symbol" ? t + "" : t, n), n), Ce = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var x = (e, t, n) => (Ce(e, t, "read from private field"), n ? n.call(e) : t.get(e)), z = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, N = (e, t, n, r) => (Ce(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var se = (e, t, n, r) => ({
  set _(s) {
    N(e, t, s, n);
  },
  get _() {
    return x(e, t, r);
  }
});
import { defineComponent as gt, openBlock as $, createElementBlock as le, createElementVNode as I, toDisplayString as Ne, computed as Pe, Fragment as Et, renderList as St, createBlock as Rt, createCommentVNode as Ot, reactive as Tt, inject as _t } from "vue";
const At = { class: "card" }, xt = ["href"], Ct = ["src"], Nt = { class: "card-content ghb-bg-card-background" }, Pt = { class: "ghb-txt-card-title" }, Dt = { class: "ghb-txt-card-text" }, Ft = /* @__PURE__ */ gt({
  __name: "GitHubProjectBox",
  props: {
    cardDetails: Object,
    fallbackImage: {
      type: String,
      default: "https://wallup.net/wp-content/uploads/2018/10/06/708179-kittens-kitten-cat-cats-baby-cute-s.jpg"
    }
  },
  setup(e) {
    const t = e;
    function n() {
      var r, s, o;
      return (r = t.cardDetails) != null && r.CustomData && t.cardDetails.CustomData.image_url && t.cardDetails.CustomData.image_url.length > 0 ? t.cardDetails.CustomData.image_url[0] : (s = t.cardDetails) != null && s.owner && ((o = t.cardDetails) != null && o.owner.avatar_url) ? t.cardDetails.owner.avatar_url : t.fallbackImage;
    }
    return (r, s) => {
      var o, i, c;
      return $(), le("div", At, [
        I("a", {
          href: (o = e.cardDetails) == null ? void 0 : o.html_url,
          target: "_blank",
          class: "card-link"
        }, [
          I("img", {
            src: n(),
            alt: "Card Image",
            class: "card-image"
          }, null, 8, Ct),
          I("div", Nt, [
            I("h3", Pt, Ne((i = e.cardDetails) == null ? void 0 : i.name), 1),
            I("p", Dt, Ne((c = e.cardDetails) == null ? void 0 : c.description), 1)
          ])
        ], 8, xt)
      ]);
    };
  }
});
const Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Lt = /* @__PURE__ */ Ge(Ft, [["__scopeId", "data-v-b01024d8"]]);
const Bt = {
  key: 0,
  class: "card-grid"
}, jt = {
  __name: "GitHubGridView",
  props: {
    projectsToShow: Array | void 0,
    searchQuery: String
  },
  setup(e) {
    const t = e, n = Pe(() => t.projectsToShow ? t.projectsToShow : Ae.projects), r = Pe(() => {
      if (!n)
        return [];
      if (t.searchQuery === void 0 || t.searchQuery === "")
        return n.value;
      const s = t.searchQuery.toLowerCase().split(",").map((o) => o.split(":").map((i) => i.trim()));
      return n.value.filter((o) => s.every(([i, c]) => {
        if (!i || !c)
          return !0;
        const l = mt(o, i);
        return l && l.toString().toLowerCase().includes(c);
      }));
    });
    return (s, o) => n.value ? ($(), le("div", Bt, [
      ($(!0), le(Et, null, St(r.value, (i) => ($(), Rt(Lt, {
        "card-details": i,
        key: i.id
      }, null, 8, ["card-details"]))), 128))
    ])) : Ot("", !0);
  }
}, Or = /* @__PURE__ */ Ge(jt, [["__scopeId", "data-v-012484f3"]]);
class kt {
  constructor(t) {
    this.options = t || { userRepos: [], orgRepos: [], exclude: [], fetchOnInstall: !1 };
  }
}
const Tr = {
  install(e, t) {
    const n = new kt(t);
    e.provide("GitHubGlobalProperties", n), t.fetchOnInstall && br(n);
  }
};
function Ve(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ut } = Object.prototype, { getPrototypeOf: ge } = Object, X = ((e) => (t) => {
  const n = Ut.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => X(t) === e), Z = (e) => (t) => typeof t === e, { isArray: k } = Array, v = Z("undefined");
function qt(e) {
  return e !== null && !v(e) && e.constructor !== null && !v(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Je = A("ArrayBuffer");
function It(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Je(e.buffer), t;
}
const Ht = Z("string"), O = Z("function"), We = Z("number"), Y = (e) => e !== null && typeof e == "object", vt = (e) => e === !0 || e === !1, G = (e) => {
  if (X(e) !== "object")
    return !1;
  const t = ge(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Mt = A("Date"), zt = A("File"), $t = A("Blob"), Gt = A("FileList"), Vt = (e) => Y(e) && O(e.pipe), Jt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || O(e.append) && ((t = X(e)) === "formdata" || // detect form-data instance
  t === "object" && O(e.toString) && e.toString() === "[object FormData]"));
}, Wt = A("URLSearchParams"), [Kt, Qt, Xt, Zt] = ["ReadableStream", "Request", "Response", "Headers"].map(A), Yt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function M(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), k(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Ke(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Qe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Xe = (e) => !v(e) && e !== Qe;
function fe() {
  const { caseless: e } = Xe(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Ke(t, s) || s;
    G(t[o]) && G(r) ? t[o] = fe(t[o], r) : G(r) ? t[o] = fe({}, r) : k(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && M(arguments[r], n);
  return t;
}
const en = (e, t, n, { allOwnKeys: r } = {}) => (M(t, (s, o) => {
  n && O(s) ? e[o] = Ve(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), tn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rn = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ge(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, sn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, on = (e) => {
  if (!e)
    return null;
  if (k(e))
    return e;
  let t = e.length;
  if (!We(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, an = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ge(Uint8Array)), cn = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, un = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ln = A("HTMLFormElement"), fn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), De = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dn = A("RegExp"), Ze = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  M(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, pn = (e) => {
  Ze(e, (t, n) => {
    if (O(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (O(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return k(e) ? r(e) : r(String(e).split(t)), n;
}, mn = () => {
}, yn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, oe = "abcdefghijklmnopqrstuvwxyz", Fe = "0123456789", Ye = {
  DIGIT: Fe,
  ALPHA: oe,
  ALPHA_DIGIT: oe + oe.toUpperCase() + Fe
}, wn = (e = 16, t = Ye.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function bn(e) {
  return !!(e && O(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const gn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Y(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = k(r) ? [] : {};
        return M(r, (i, c) => {
          const l = n(i, s + 1);
          !v(l) && (o[c] = l);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, En = A("AsyncFunction"), Sn = (e) => e && (Y(e) || O(e)) && O(e.then) && O(e.catch), a = {
  isArray: k,
  isArrayBuffer: Je,
  isBuffer: qt,
  isFormData: Jt,
  isArrayBufferView: It,
  isString: Ht,
  isNumber: We,
  isBoolean: vt,
  isObject: Y,
  isPlainObject: G,
  isReadableStream: Kt,
  isRequest: Qt,
  isResponse: Xt,
  isHeaders: Zt,
  isUndefined: v,
  isDate: Mt,
  isFile: zt,
  isBlob: $t,
  isRegExp: dn,
  isFunction: O,
  isStream: Vt,
  isURLSearchParams: Wt,
  isTypedArray: an,
  isFileList: Gt,
  forEach: M,
  merge: fe,
  extend: en,
  trim: Yt,
  stripBOM: tn,
  inherits: nn,
  toFlatObject: rn,
  kindOf: X,
  kindOfTest: A,
  endsWith: sn,
  toArray: on,
  forEachEntry: cn,
  matchAll: un,
  isHTMLForm: ln,
  hasOwnProperty: De,
  hasOwnProp: De,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ze,
  freezeMethods: pn,
  toObjectSet: hn,
  toCamelCase: fn,
  noop: mn,
  toFiniteNumber: yn,
  findKey: Ke,
  global: Qe,
  isContextDefined: Xe,
  ALPHABET: Ye,
  generateString: wn,
  isSpecCompliantForm: bn,
  toJSONObject: gn,
  isAsyncFn: En,
  isThenable: Sn
};
function h(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(h, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const et = h.prototype, tt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  tt[e] = { value: e };
});
Object.defineProperties(h, tt);
Object.defineProperty(et, "isAxiosError", { value: !0 });
h.from = (e, t, n, r, s, o) => {
  const i = Object.create(et);
  return a.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError"), h.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Rn = null;
function de(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function nt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Le(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = nt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function On(e) {
  return a.isArray(e) && !e.some(de);
}
const Tn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ee(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, E) {
    return !a.isUndefined(E[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null)
      return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!l && a.isBlob(p))
      throw new h("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, m, E) {
    let S = p;
    if (p && !E && typeof p == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && On(p) || (a.isFileList(p) || a.endsWith(m, "[]")) && (S = a.toArray(p)))
        return m = nt(m), S.forEach(function(w, q) {
          !(a.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Le([m], q, o) : i === null ? m : m + "[]",
            f(w)
          );
        }), !1;
    }
    return de(p) ? !0 : (t.append(Le(E, m, o), f(p)), !1);
  }
  const d = [], b = Object.assign(Tn, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: de
  });
  function y(p, m) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), a.forEach(p, function(S, C) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(C) ? C.trim() : C,
          m,
          b
        )) === !0 && y(S, m ? m.concat(C) : [C]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Be(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ee(e, t) {
  this._pairs = [], e && ee(e, this, t);
}
const rt = Ee.prototype;
rt.append = function(t, n) {
  this._pairs.push([t, n]);
};
rt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Be);
  } : Be;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function _n(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function st(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || _n, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new Ee(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class An {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const je = An, ot = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xn = typeof URLSearchParams < "u" ? URLSearchParams : Ee, Cn = typeof FormData < "u" ? FormData : null, Nn = typeof Blob < "u" ? Blob : null, Pn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xn,
    FormData: Cn,
    Blob: Nn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Se = typeof window < "u" && typeof document < "u", Dn = ((e) => Se && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Fn = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ln = Se && window.location.href || "http://localhost", Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Se,
  hasStandardBrowserEnv: Dn,
  hasStandardBrowserWebWorkerEnv: Fn,
  origin: Ln
}, Symbol.toStringTag, { value: "Module" })), T = {
  ...Bn,
  ...Pn
};
function jn(e, t) {
  return ee(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return T.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function kn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Un(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function it(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), l = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, l ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Un(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(kn(r), s, n, 0);
    }), n;
  }
  return null;
}
function qn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Re = {
  transitional: ot,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(it(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return jn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ee(
          c ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), qn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Re.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? h.from(c, h.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: T.classes.FormData,
    Blob: T.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Re.headers[e] = {};
});
const Oe = Re, In = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Hn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && In[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ke = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function V(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(V) : String(e);
}
function vn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Mn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ie(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function zn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function $n(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class te {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, l, f) {
      const u = H(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, u);
      (!d || s[d] === void 0 || f === !0 || f === void 0 && s[d] !== !1) && (s[d || l] = V(c));
    }
    const i = (c, l) => a.forEach(c, (f, u) => o(f, u, l));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Mn(t))
      i(Hn(t), n);
    else if (a.isHeaders(t))
      for (const [c, l] of t.entries())
        o(l, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = H(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return vn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = H(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ie(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = H(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ie(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ie(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = V(s), delete n[o];
        return;
      }
      const c = t ? zn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = V(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ke] = this[ke] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = H(i);
      r[c] || ($n(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(te.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(te);
const _ = te;
function ae(e, t) {
  const n = this || Oe, r = t || n, s = _.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function at(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  h.call(this, e ?? "canceled", h.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(U, h, {
  __CANCEL__: !0
});
function ct(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new h(
    "Request failed with status code " + n.status,
    [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Gn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Vn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), u = r[o];
    i || (i = f), n[s] = l, r[s] = f;
    let d = o, b = 0;
    for (; d !== s; )
      b += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const y = u && f - u;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function Jn(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let s = null;
  return function() {
    const i = this === !0, c = Date.now();
    if (i || c - n > r)
      return s && (clearTimeout(s), s = null), n = c, e.apply(null, arguments);
    s || (s = setTimeout(() => (s = null, n = Date.now(), e.apply(null, arguments)), r - (c - n)));
  };
}
const W = (e, t, n = 3) => {
  let r = 0;
  const s = Vn(50, 250);
  return Jn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, l = i - r, f = s(l), u = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && c && u ? (c - i) / f : void 0,
      event: o,
      lengthComputable: c != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, n);
}, Wn = T.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), Kn = T.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Qn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Xn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ut(e, t) {
  return e && !Qn(t) ? Xn(e, t) : t;
}
const Ue = (e) => e instanceof _ ? { ...e } : e;
function B(e, t) {
  t = t || {};
  const n = {};
  function r(f, u, d) {
    return a.isPlainObject(f) && a.isPlainObject(u) ? a.merge.call({ caseless: d }, f, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(f, u, d) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(f))
        return r(void 0, f, d);
    } else
      return r(f, u, d);
  }
  function o(f, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(f, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, u);
  }
  function c(f, u, d) {
    if (d in t)
      return r(f, u);
    if (d in e)
      return r(void 0, f);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (f, u) => s(Ue(f), Ue(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || s, b = d(e[u], t[u], u);
    a.isUndefined(b) && d !== c || (n[u] = b);
  }), n;
}
const lt = (e) => {
  const t = B({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = _.from(i), t.url = st(ut(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let l;
  if (a.isFormData(n)) {
    if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (T.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Wn(t.url))) {
    const f = s && o && Kn.read(o);
    f && i.set(s, f);
  }
  return t;
}, Zn = typeof XMLHttpRequest < "u", Yn = Zn && function(e) {
  return new Promise(function(n, r) {
    const s = lt(e);
    let o = s.data;
    const i = _.from(s.headers).normalize();
    let { responseType: c } = s, l;
    function f() {
      s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let u = new XMLHttpRequest();
    u.open(s.method.toUpperCase(), s.url, !0), u.timeout = s.timeout;
    function d() {
      if (!u)
        return;
      const y = _.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), m = {
        data: !c || c === "text" || c === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      ct(function(S) {
        n(S), f();
      }, function(S) {
        r(S), f();
      }, m), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new h("Request aborted", h.ECONNABORTED, s, u)), u = null);
    }, u.onerror = function() {
      r(new h("Network Error", h.ERR_NETWORK, s, u)), u = null;
    }, u.ontimeout = function() {
      let p = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const m = s.transitional || ot;
      s.timeoutErrorMessage && (p = s.timeoutErrorMessage), r(new h(
        p,
        m.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,
        s,
        u
      )), u = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in u && a.forEach(i.toJSON(), function(p, m) {
      u.setRequestHeader(m, p);
    }), a.isUndefined(s.withCredentials) || (u.withCredentials = !!s.withCredentials), c && c !== "json" && (u.responseType = s.responseType), typeof s.onDownloadProgress == "function" && u.addEventListener("progress", W(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", W(s.onUploadProgress)), (s.cancelToken || s.signal) && (l = (y) => {
      u && (r(!y || y.type ? new U(null, e, u) : y), u.abort(), u = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const b = Gn(s.url);
    if (b && T.protocols.indexOf(b) === -1) {
      r(new h("Unsupported protocol " + b + ":", h.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, er = (e, t) => {
  let n = new AbortController(), r;
  const s = function(l) {
    if (!r) {
      r = !0, i();
      const f = l instanceof Error ? l : this.reason;
      n.abort(f instanceof h ? f : new U(f instanceof Error ? f.message : f));
    }
  };
  let o = t && setTimeout(() => {
    s(new h(`timeout ${t} of ms exceeded`, h.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l && (l.removeEventListener ? l.removeEventListener("abort", s) : l.unsubscribe(s));
    }), e = null);
  };
  e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", s));
  const { signal: c } = n;
  return c.unsubscribe = i, [c, () => {
    o && clearTimeout(o), o = null;
  }];
}, tr = er, nr = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, rr = async function* (e, t, n) {
  for await (const r of e)
    yield* nr(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, qe = (e, t, n, r, s) => {
  const o = rr(e, t, s);
  let i = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(c) {
      const { done: l, value: f } = await o.next();
      if (l) {
        c.close(), r();
        return;
      }
      let u = f.byteLength;
      n && n(i += u), c.enqueue(new Uint8Array(f));
    },
    cancel(c) {
      return r(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ie = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, ne = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ft = ne && typeof ReadableStream == "function", pe = ne && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), sr = ft && (() => {
  let e = !1;
  const t = new Request(T.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), He = 64 * 1024, he = ft && !!(() => {
  try {
    return a.isReadableStream(new Response("").body);
  } catch {
  }
})(), K = {
  stream: he && ((e) => e.body)
};
ne && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !K[t] && (K[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new h(`Response type '${t}' is not supported`, h.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const or = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await pe(e)).byteLength;
}, ir = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? or(t);
}, ar = ne && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: l,
    responseType: f,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: b
  } = lt(e);
  f = f ? (f + "").toLowerCase() : "text";
  let [y, p] = s || o || i ? tr([s, o], i) : [], m, E;
  const S = () => {
    !m && setTimeout(() => {
      y && y.unsubscribe();
    }), m = !0;
  };
  let C;
  try {
    if (l && sr && n !== "get" && n !== "head" && (C = await ir(u, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), j;
      a.isFormData(r) && (j = P.headers.get("content-type")) && u.setContentType(j), P.body && (r = qe(P.body, He, Ie(
        C,
        W(l)
      ), null, pe));
    }
    a.isString(d) || (d = d ? "cors" : "omit"), E = new Request(t, {
      ...b,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: d
    });
    let w = await fetch(E);
    const q = he && (f === "stream" || f === "response");
    if (he && (c || q)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((xe) => {
        P[xe] = w[xe];
      });
      const j = a.toFiniteNumber(w.headers.get("content-length"));
      w = new Response(
        qe(w.body, He, c && Ie(
          j,
          W(c, !0)
        ), q && S, pe),
        P
      );
    }
    f = f || "text";
    let yt = await K[a.findKey(K, f) || "text"](w, e);
    return !q && S(), p && p(), await new Promise((P, j) => {
      ct(P, j, {
        data: yt,
        headers: _.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: E
      });
    });
  } catch (w) {
    throw S(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new h("Network Error", h.ERR_NETWORK, e, E),
      {
        cause: w.cause || w
      }
    ) : h.from(w, w && w.code, e, E);
  }
}), me = {
  http: Rn,
  xhr: Yn,
  fetch: ar
};
a.forEach(me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ve = (e) => `- ${e}`, cr = (e) => a.isFunction(e) || e === null || e === !1, dt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !cr(n) && (r = me[(i = String(n)).toLowerCase()], r === void 0))
        throw new h(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(ve).join(`
`) : " " + ve(o[0]) : "as no adapter specified";
      throw new h(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: me
};
function ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new U(null, e);
}
function Me(e) {
  return ce(e), e.headers = _.from(e.headers), e.data = ae.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), dt.getAdapter(e.adapter || Oe.adapter)(e).then(function(r) {
    return ce(e), r.data = ae.call(
      e,
      e.transformResponse,
      r
    ), r.headers = _.from(r.headers), r;
  }, function(r) {
    return at(r) || (ce(e), r && r.response && (r.response.data = ae.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = _.from(r.response.headers))), Promise.reject(r);
  });
}
const pt = "1.7.2", Te = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Te[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ze = {};
Te.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + pt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new h(
        s(i, " has been removed" + (n ? " in " + n : "")),
        h.ERR_DEPRECATED
      );
    return n && !ze[i] && (ze[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function ur(e, t, n) {
  if (typeof e != "object")
    throw new h("options must be an object", h.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], l = c === void 0 || i(c, o, e);
      if (l !== !0)
        throw new h("option " + o + " must be " + l, h.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new h("Unknown option " + o, h.ERR_BAD_OPTION);
  }
}
const ye = {
  assertOptions: ur,
  validators: Te
}, D = ye.validators;
class Q {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new je(),
      response: new je()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = B(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ye.assertOptions(r, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ye.assertOptions(s, {
      encode: D.function,
      serialize: D.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = _.concat(i, o);
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, b;
    if (!l) {
      const p = [Me.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, f), b = p.length, u = Promise.resolve(n); d < b; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    b = c.length;
    let y = n;
    for (d = 0; d < b; ) {
      const p = c[d++], m = c[d++];
      try {
        y = p(y);
      } catch (E) {
        m.call(this, E);
        break;
      }
    }
    try {
      u = Me.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = f.length; d < b; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = ut(t.baseURL, t.url);
    return st(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  Q.prototype[t] = function(n, r) {
    return this.request(B(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(B(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Q.prototype[t] = n(), Q.prototype[t + "Form"] = n(!0);
});
const J = Q;
class _e {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new U(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new _e(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const lr = _e;
function fr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function dr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const we = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(we).forEach(([e, t]) => {
  we[t] = e;
});
const pr = we;
function ht(e) {
  const t = new J(e), n = Ve(J.prototype.request, t);
  return a.extend(n, J.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ht(B(e, s));
  }, n;
}
const g = ht(Oe);
g.Axios = J;
g.CanceledError = U;
g.CancelToken = lr;
g.isCancel = at;
g.VERSION = pt;
g.toFormData = ee;
g.AxiosError = h;
g.Cancel = g.CanceledError;
g.all = function(t) {
  return Promise.all(t);
};
g.spread = fr;
g.isAxiosError = dr;
g.mergeConfig = B;
g.AxiosHeaders = _;
g.formToJSON = (e) => it(a.isHTMLForm(e) ? new FormData(e) : e);
g.getAdapter = dt.getAdapter;
g.HttpStatusCode = pr;
g.default = g;
const ue = g;
class be {
  static GetUserProjects(t) {
    return ue.get(`https://api.github.com/users/${t}/repos`).then((n) => n.data);
  }
  static GetOrgProjects(t) {
    return ue.get(`https://api.github.com/orgs/${t}/repos`).then((n) => n.data);
  }
  static async GetCustomProjectData(t) {
    let n = t.html_url;
    n = n.substring(19), n = `https://raw.githubusercontent.com/${n}/${t.default_branch}/.viewer/data.json`;
    try {
      const r = await ue.get(n);
      return r.data ? r.data : [];
    } catch {
      return [];
    }
  }
}
class hr {
  constructor(t) {
    re(this, "value");
    re(this, "next");
    this.value = t;
  }
}
var R, F, L;
class mr {
  constructor() {
    z(this, R, void 0);
    z(this, F, void 0);
    z(this, L, void 0);
    this.clear();
  }
  enqueue(t) {
    const n = new hr(t);
    x(this, R) ? (x(this, F).next = n, N(this, F, n)) : (N(this, R, n), N(this, F, n)), se(this, L)._++;
  }
  dequeue() {
    const t = x(this, R);
    if (t)
      return N(this, R, x(this, R).next), se(this, L)._--, t.value;
  }
  peek() {
    if (x(this, R))
      return x(this, R).value;
  }
  clear() {
    N(this, R, void 0), N(this, F, void 0), N(this, L, 0);
  }
  get size() {
    return x(this, L);
  }
  *[Symbol.iterator]() {
    let t = x(this, R);
    for (; t; )
      yield t.value, t = t.next;
  }
}
R = new WeakMap(), F = new WeakMap(), L = new WeakMap();
function yr(e) {
  $e(e);
  const t = new mr();
  let n = 0;
  const r = () => {
    n < e && t.size > 0 && (t.dequeue()(), n++);
  }, s = () => {
    n--, r();
  }, o = async (l, f, u) => {
    const d = (async () => l(...u))();
    f(d);
    try {
      await d;
    } catch {
    }
    s();
  }, i = (l, f, u) => {
    new Promise((d) => {
      t.enqueue(d);
    }).then(
      o.bind(void 0, l, f, u)
    ), (async () => (await Promise.resolve(), n < e && r()))();
  }, c = (l, ...f) => new Promise((u) => {
    i(l, u, f);
  });
  return Object.defineProperties(c, {
    activeCount: {
      get: () => n
    },
    pendingCount: {
      get: () => t.size
    },
    clearQueue: {
      value() {
        t.clear();
      }
    },
    concurrency: {
      get: () => e,
      set(l) {
        $e(l), e = l, queueMicrotask(() => {
          for (; n < e && t.size > 0; )
            r();
        });
      }
    }
  }), c;
}
function $e(e) {
  if (!((Number.isInteger(e) || e === Number.POSITIVE_INFINITY) && e > 0))
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
}
function mt(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n) {
      const s = Object.keys(n).find((o) => o.toLowerCase() === r.toLowerCase());
      return s ? n[s] : void 0;
    }
  }, e);
}
const wr = yr(5), Ae = Tt({
  projects: []
});
async function br(e = void 0) {
  var t;
  if (e === void 0 && (e = _t("GitHubGlobalProperties")), e === void 0)
    return [];
  try {
    let n = [];
    for (let r = 0; r < e.options.userRepos.length; r++) {
      let s = await be.GetUserProjects(e.options.userRepos[r]);
      n = n.concat(s);
    }
    for (let r = 0; r < e.options.orgRepos.length; r++) {
      let s = await be.GetOrgProjects(e.options.orgRepos[r]);
      n = n.concat(s);
    }
    ((t = e.options.exclude) == null ? void 0 : t.length) > 0 && (n = n.filter((r) => !(e != null && e.options.exclude.includes(r.name)))), await gr(n), Ae.projects = n;
  } catch (n) {
    alert(n), console.log(n);
  }
}
async function gr(e) {
  const t = e.map((n) => wr(() => Er(n)));
  await Promise.all(t);
}
async function Er(e) {
  e.CustomData = await be.GetCustomProjectData(e);
}
function _r(e) {
  const t = /* @__PURE__ */ new Set();
  return Ae.projects.forEach((n) => {
    let r = mt(n, e);
    r !== void 0 && t.add(r);
  }), Array.from(t);
}
export {
  br as FetchProjects,
  _r as GetMetaDataValues,
  Or as GitHubGridView,
  Lt as GitHubProjectBox,
  kt as VueGitHubBrowserOptions,
  Tr as default,
  mt as getNestedPropertyIgnoreCase,
  Ae as state
};
