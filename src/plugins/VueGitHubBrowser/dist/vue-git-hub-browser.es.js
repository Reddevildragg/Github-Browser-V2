import { defineComponent as Sn, openBlock as fe, createElementBlock as Be, createElementVNode as ne, toDisplayString as ct, effectScope as vt, ref as Qe, markRaw as G, toRaw as Se, hasInjectionContext as On, inject as Ct, getCurrentInstance as Rn, watch as Dt, unref as jt, reactive as Tn, isRef as ie, isReactive as Ye, toRef as Ce, nextTick as ut, computed as Lt, getCurrentScope as Pn, onScopeDispose as An, toRefs as lt, onMounted as Nn, Fragment as xn, renderList as vn, createBlock as Cn } from "vue";
const Dn = { class: "card" }, jn = ["href"], Ln = ["src"], In = { class: "card-content ghb-bg-card-background" }, kn = { class: "ghb-txt-card-title" }, Un = { class: "ghb-txt-card-text" }, Fn = /* @__PURE__ */ Sn({
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
      var o, i, a;
      return fe(), Be("div", Dn, [
        ne("a", {
          href: (o = e.cardDetails) == null ? void 0 : o.html_url,
          target: "_blank",
          class: "card-link"
        }, [
          ne("img", {
            src: n(),
            alt: "Card Image",
            class: "card-image"
          }, null, 8, Ln),
          ne("div", In, [
            ne("h3", kn, ct((i = e.cardDetails) == null ? void 0 : i.name), 1),
            ne("p", Un, ct((a = e.cardDetails) == null ? void 0 : a.description), 1)
          ])
        ], 8, jn)
      ]);
    };
  }
});
const It = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Bn = /* @__PURE__ */ It(Fn, [["__scopeId", "data-v-9708b11a"]]);
var kt = !1;
function le(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function De(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function $n() {
  return Ut().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Ut() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Vn = typeof Proxy == "function", Hn = "devtools-plugin:setup", Mn = "plugin:settings:set";
let K, $e;
function qn() {
  var e;
  return K !== void 0 || (typeof window < "u" && window.performance ? (K = !0, $e = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (K = !0, $e = globalThis.perf_hooks.performance) : K = !1), K;
}
function Gn() {
  return qn() ? $e.now() : Date.now();
}
class Jn {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const a = t.settings[i];
        r[i] = a.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, r);
    try {
      const i = localStorage.getItem(s), a = JSON.parse(i);
      Object.assign(o, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {
        }
        o = i;
      },
      now() {
        return Gn();
      }
    }, n && n.on(Mn, (i, a) => {
      i === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((f) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ft(e, t) {
  const n = e, r = Ut(), s = $n(), o = Vn && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    s.emit(Hn, e, t);
  else {
    const i = o ? new Jn(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let se;
const ae = (e) => se = e, Bt = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function J(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var F;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(F || (F = {}));
const Oe = typeof window < "u", oe = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && Oe, ft = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function zn(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function Ze(e, t, n) {
  const r = new XMLHttpRequest();
  r.open("GET", e), r.responseType = "blob", r.onload = function() {
    Ht(r.response, t, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function $t(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function de(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const pe = typeof navigator == "object" ? navigator : { userAgent: "" }, Vt = /* @__PURE__ */ (() => /Macintosh/.test(pe.userAgent) && /AppleWebKit/.test(pe.userAgent) && !/Safari/.test(pe.userAgent))(), Ht = Oe ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Vt ? Wn : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in pe ? Kn : (
      // Fallback to using FileReader and a popup
      Xn
    )
  )
) : () => {
};
function Wn(e, t = "download", n) {
  const r = document.createElement("a");
  r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? $t(r.href) ? Ze(e, t, n) : (r.target = "_blank", de(r)) : de(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    de(r);
  }, 0));
}
function Kn(e, t = "download", n) {
  if (typeof e == "string")
    if ($t(e))
      Ze(e, t, n);
    else {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", setTimeout(function() {
        de(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(zn(e, n), t);
}
function Xn(e, t, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
    return Ze(e, t, n);
  const s = e.type === "application/octet-stream", o = /constructor/i.test(String(ft.HTMLElement)) || "safari" in ft, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || s && o || Vt) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let l = a.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = i ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    r ? r.location.assign(a) : location.href = a, r = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function P(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function et(e) {
  return "_a" in e && "install" in e;
}
function Mt() {
  if (!("clipboard" in navigator))
    return P("Your browser doesn't support the Clipboard API", "error"), !0;
}
function qt(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (P('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Qn(e) {
  if (!Mt())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), P("Global state copied to clipboard.");
    } catch (t) {
      if (qt(t))
        return;
      P("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Yn(e) {
  if (!Mt())
    try {
      Gt(e, JSON.parse(await navigator.clipboard.readText())), P("Global state pasted from clipboard.");
    } catch (t) {
      if (qt(t))
        return;
      P("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Zn(e) {
  try {
    Ht(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    P("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let B;
function er() {
  B || (B = document.createElement("input"), B.type = "file", B.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      B.onchange = async () => {
        const r = B.files;
        if (!r)
          return t(null);
        const s = r.item(0);
        return t(s ? { text: await s.text(), file: s } : null);
      }, B.oncancel = () => t(null), B.onerror = n, B.click();
    });
  }
  return e;
}
async function tr(e) {
  try {
    const n = await er()();
    if (!n)
      return;
    const { text: r, file: s } = n;
    Gt(e, JSON.parse(r)), P(`Global state imported from "${s.name}".`);
  } catch (t) {
    P("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Gt(e, t) {
  for (const n in t) {
    const r = e.state.value[n];
    r ? Object.assign(r, t[n]) : e.state.value[n] = t[n];
  }
}
function L(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Jt = "🍍 Pinia (root)", Ve = "_root";
function nr(e) {
  return et(e) ? {
    id: Ve,
    label: Jt
  } : {
    id: e.$id,
    label: e.$id
  };
}
function rr(e) {
  if (et(e)) {
    const n = Array.from(e._s.keys()), r = e._s;
    return {
      state: n.map((o) => ({
        editable: !0,
        key: o,
        value: e.state.value[o]
      })),
      getters: n.filter((o) => r.get(o)._getters).map((o) => {
        const i = r.get(o);
        return {
          editable: !1,
          key: o,
          value: i._getters.reduce((a, l) => (a[l] = i[l], a), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function sr(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: L(e.type),
    key: L(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function or(e) {
  switch (e) {
    case F.direct:
      return "mutation";
    case F.patchFunction:
      return "$patch";
    case F.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Q = !0;
const he = [], q = "pinia:mutations", A = "pinia", { assign: ir } = Object, be = (e) => "🍍 " + e;
function ar(e, t) {
  Ft({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: he,
    app: e
  }, (n) => {
    typeof n.now != "function" && P("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: q,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: A,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Qn(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Yn(t), n.sendInspectorTree(A), n.sendInspectorState(A);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Zn(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await tr(t), n.sendInspectorTree(A), n.sendInspectorState(A);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const s = t._s.get(r);
            s ? typeof s.$reset != "function" ? P(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (s.$reset(), P(`Store "${r}" reset.`)) : P(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, s) => {
      const o = r.componentInstance && r.componentInstance.proxy;
      if (o && o._pStores) {
        const i = r.componentInstance.proxy._pStores;
        Object.values(i).forEach((a) => {
          r.instanceData.state.push({
            type: be(a.$id),
            key: "state",
            editable: !0,
            value: a._isOptionsAPI ? {
              _custom: {
                value: Se(a.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => a.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(a.$state).reduce((l, f) => (l[f] = a.$state[f], l), {})
            )
          }), a._getters && a._getters.length && r.instanceData.state.push({
            type: be(a.$id),
            key: "getters",
            editable: !1,
            value: a._getters.reduce((l, f) => {
              try {
                l[f] = a[f];
              } catch (u) {
                l[f] = u;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === e && r.inspectorId === A) {
        let s = [t];
        s = s.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? s.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(r.filter.toLowerCase()) : Jt.toLowerCase().includes(r.filter.toLowerCase())) : s).map(nr);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === A) {
        const s = r.nodeId === Ve ? t : t._s.get(r.nodeId);
        if (!s)
          return;
        s && (r.state = rr(s));
      }
    }), n.on.editInspectorState((r, s) => {
      if (r.app === e && r.inspectorId === A) {
        const o = r.nodeId === Ve ? t : t._s.get(r.nodeId);
        if (!o)
          return P(`store "${r.nodeId}" not found`, "error");
        const { path: i } = r;
        et(o) ? i.unshift("state") : (i.length !== 1 || !o._customProperties.has(i[0]) || i[0] in o.$state) && i.unshift("$state"), Q = !1, r.set(o, i, r.state.value), Q = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("🍍")) {
        const s = r.type.replace(/^🍍\s*/, ""), o = t._s.get(s);
        if (!o)
          return P(`store "${s}" not found`, "error");
        const { path: i } = r;
        if (i[0] !== "state")
          return P(`Invalid path for store "${s}":
${i}
Only state can be modified.`);
        i[0] = "$state", Q = !1, r.set(o, i, r.state.value), Q = !0;
      }
    });
  });
}
function cr(e, t) {
  he.includes(be(t.$id)) || he.push(be(t.$id)), Ft({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: he,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: i, onError: a, name: l, args: f }) => {
      const u = zt++;
      n.addTimelineEvent({
        layerId: q,
        event: {
          time: r(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: L(t.$id),
            action: L(l),
            args: f
          },
          groupId: u
        }
      }), i((d) => {
        M = void 0, n.addTimelineEvent({
          layerId: q,
          event: {
            time: r(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: L(t.$id),
              action: L(l),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        M = void 0, n.addTimelineEvent({
          layerId: q,
          event: {
            time: r(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: L(t.$id),
              action: L(l),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Dt(() => jt(t[i]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(A), Q && n.addTimelineEvent({
          layerId: q,
          event: {
            time: r(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: M
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(A), !Q)
        return;
      const f = {
        time: r(),
        title: or(a),
        data: ir({ store: L(t.$id) }, sr(i)),
        groupId: M
      };
      a === F.patchFunction ? f.subtitle = "⤵️" : a === F.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: q,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const s = t._hotUpdate;
    t._hotUpdate = G((i) => {
      s(i), n.addTimelineEvent({
        layerId: q,
        event: {
          time: r(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: L(t.$id),
            info: L("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(A), n.sendInspectorState(A);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(A), n.sendInspectorState(A), n.getSettings().logStoreChanges && P(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(A), n.sendInspectorState(A), n.getSettings().logStoreChanges && P(`"${t.$id}" store installed 🆕`);
  });
}
let zt = 0, M;
function dt(e, t, n) {
  const r = t.reduce((s, o) => (s[o] = Se(e)[o], s), {});
  for (const s in r)
    e[s] = function() {
      const o = zt, i = n ? new Proxy(e, {
        get(...l) {
          return M = o, Reflect.get(...l);
        },
        set(...l) {
          return M = o, Reflect.set(...l);
        }
      }) : e;
      M = o;
      const a = r[s].apply(i, arguments);
      return M = void 0, a;
    };
}
function ur({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, dt(t, Object.keys(n.actions), t._isOptionsAPI);
  const r = t._hotUpdate;
  Se(t)._hotUpdate = function(s) {
    r.apply(this, arguments), dt(t, Object.keys(s._hmrPayload.actions), !!t._isOptionsAPI);
  }, cr(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function lr() {
  const e = vt(!0), t = e.run(() => Qe({}));
  let n = [], r = [];
  const s = G({
    install(o) {
      ae(s), s._a = o, o.provide(Bt, s), o.config.globalProperties.$pinia = s, oe && ar(o, s), r.forEach((i) => n.push(i)), r = [];
    },
    use(o) {
      return !this._a && !kt ? r.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return oe && typeof Proxy < "u" && s.use(ur), s;
}
function Wt(e, t) {
  for (const n in t) {
    const r = t[n];
    if (!(n in e))
      continue;
    const s = e[n];
    J(s) && J(r) && !ie(r) && !Ye(r) ? e[n] = Wt(s, r) : e[n] = r;
  }
  return e;
}
const Kt = () => {
};
function pt(e, t, n, r = Kt) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && Pn() && An(s), s;
}
function X(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const fr = (e) => e();
function He(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], s = e[n];
    J(s) && J(r) && e.hasOwnProperty(n) && !ie(r) && !Ye(r) ? e[n] = He(s, r) : e[n] = r;
  }
  return e;
}
const dr = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function pr(e) {
  return !J(e) || !e.hasOwnProperty(dr);
}
const { assign: v } = Object;
function ht(e) {
  return !!(ie(e) && e.effect);
}
function mt(e, t, n, r) {
  const { state: s, actions: o, getters: i } = t, a = n.state.value[e];
  let l;
  function f() {
    !a && (process.env.NODE_ENV === "production" || !r) && (n.state.value[e] = s ? s() : {});
    const u = process.env.NODE_ENV !== "production" && r ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      lt(Qe(s ? s() : {}).value)
    ) : lt(n.state.value[e]);
    return v(u, o, Object.keys(i || {}).reduce((d, E) => (process.env.NODE_ENV !== "production" && E in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${E}" in store "${e}".`), d[E] = G(Lt(() => {
      ae(n);
      const w = n._s.get(e);
      return i[E].call(w, w);
    })), d), {}));
  }
  return l = Me(e, f, t, n, r, !0), l;
}
function Me(e, t, n = {}, r, s, o) {
  let i;
  const a = v({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !kt && (l.onTrigger = (m) => {
    f ? w = m : f == !1 && !g._hotUpdating && (Array.isArray(w) ? w.push(m) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], E = [], w;
  const p = r.state.value[e];
  !o && !p && (process.env.NODE_ENV === "production" || !s) && (r.state.value[e] = {});
  const y = Qe({});
  let R;
  function T(m) {
    let h;
    f = u = !1, process.env.NODE_ENV !== "production" && (w = []), typeof m == "function" ? (m(r.state.value[e]), h = {
      type: F.patchFunction,
      storeId: e,
      events: w
    }) : (He(r.state.value[e], m), h = {
      type: F.patchObject,
      payload: m,
      storeId: e,
      events: w
    });
    const S = R = Symbol();
    ut().then(() => {
      R === S && (f = !0);
    }), u = !0, X(d, h, r.state.value[e]);
  }
  const D = o ? function() {
    const { state: h } = n, S = h ? h() : {};
    this.$patch((N) => {
      v(N, S);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Kt
  );
  function _() {
    i.stop(), d = [], E = [], r._s.delete(e);
  }
  function $(m, h) {
    return function() {
      ae(r);
      const S = Array.from(arguments), N = [], ee = [];
      function En(x) {
        N.push(x);
      }
      function _n(x) {
        ee.push(x);
      }
      X(E, {
        args: S,
        name: m,
        store: g,
        after: En,
        onError: _n
      });
      let te;
      try {
        te = h.apply(this && this.$id === e ? this : g, S);
      } catch (x) {
        throw X(ee, x), x;
      }
      return te instanceof Promise ? te.then((x) => (X(N, x), x)).catch((x) => (X(ee, x), Promise.reject(x))) : (X(N, te), te);
    };
  }
  const W = /* @__PURE__ */ G({
    actions: {},
    getters: {},
    state: [],
    hotState: y
  }), j = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: pt.bind(null, E),
    $patch: T,
    $reset: D,
    $subscribe(m, h = {}) {
      const S = pt(d, m, h.detached, () => N()), N = i.run(() => Dt(() => r.state.value[e], (ee) => {
        (h.flush === "sync" ? u : f) && m({
          storeId: e,
          type: F.direct,
          events: w
        }, ee);
      }, v({}, l, h)));
      return S;
    },
    $dispose: _
  }, g = Tn(process.env.NODE_ENV !== "production" || oe ? v(
    {
      _hmrPayload: W,
      _customProperties: G(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    j
    // must be added later
    // setupStore
  ) : j);
  r._s.set(e, g);
  const V = (r._a && r._a.runWithContext || fr)(() => r._e.run(() => (i = vt()).run(t)));
  for (const m in V) {
    const h = V[m];
    if (ie(h) && !ht(h) || Ye(h))
      process.env.NODE_ENV !== "production" && s ? le(y.value, m, Ce(V, m)) : o || (p && pr(h) && (ie(h) ? h.value = p[m] : He(h, p[m])), r.state.value[e][m] = h), process.env.NODE_ENV !== "production" && W.state.push(m);
    else if (typeof h == "function") {
      const S = process.env.NODE_ENV !== "production" && s ? h : $(m, h);
      V[m] = S, process.env.NODE_ENV !== "production" && (W.actions[m] = h), a.actions[m] = h;
    } else
      process.env.NODE_ENV !== "production" && ht(h) && (W.getters[m] = o ? (
        // @ts-expect-error
        n.getters[m]
      ) : h, Oe && (V._getters || // @ts-expect-error: same
      (V._getters = G([]))).push(m));
  }
  if (v(g, V), v(Se(g), V), Object.defineProperty(g, "$state", {
    get: () => process.env.NODE_ENV !== "production" && s ? y.value : r.state.value[e],
    set: (m) => {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error("cannot set hotState");
      T((h) => {
        v(h, m);
      });
    }
  }), process.env.NODE_ENV !== "production" && (g._hotUpdate = G((m) => {
    g._hotUpdating = !0, m._hmrPayload.state.forEach((h) => {
      if (h in g.$state) {
        const S = m.$state[h], N = g.$state[h];
        typeof S == "object" && J(S) && J(N) ? Wt(S, N) : m.$state[h] = N;
      }
      le(g, h, Ce(m.$state, h));
    }), Object.keys(g.$state).forEach((h) => {
      h in m.$state || De(g, h);
    }), f = !1, u = !1, r.state.value[e] = Ce(m._hmrPayload, "hotState"), u = !0, ut().then(() => {
      f = !0;
    });
    for (const h in m._hmrPayload.actions) {
      const S = m[h];
      le(g, h, $(h, S));
    }
    for (const h in m._hmrPayload.getters) {
      const S = m._hmrPayload.getters[h], N = o ? (
        // special handling of options api
        Lt(() => (ae(r), S.call(g, g)))
      ) : S;
      le(g, h, N);
    }
    Object.keys(g._hmrPayload.getters).forEach((h) => {
      h in m._hmrPayload.getters || De(g, h);
    }), Object.keys(g._hmrPayload.actions).forEach((h) => {
      h in m._hmrPayload.actions || De(g, h);
    }), g._hmrPayload = m._hmrPayload, g._getters = m._getters, g._hotUpdating = !1;
  })), oe) {
    const m = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((h) => {
      Object.defineProperty(g, h, v({ value: g[h] }, m));
    });
  }
  return r._p.forEach((m) => {
    if (oe) {
      const h = i.run(() => m({
        store: g,
        app: r._a,
        pinia: r,
        options: a
      }));
      Object.keys(h || {}).forEach((S) => g._customProperties.add(S)), v(g, h);
    } else
      v(g, i.run(() => m({
        store: g,
        app: r._a,
        pinia: r,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && g.$state && typeof g.$state == "object" && typeof g.$state.constructor == "function" && !g.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${g.$id}".`), p && o && n.hydrate && n.hydrate(g.$state, p), f = !0, u = !0, g;
}
function hr(e, t, n) {
  let r, s;
  const o = typeof t == "function";
  if (typeof e == "string")
    r = e, s = o ? n : t;
  else if (s = e, r = e.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(a, l) {
    const f = On();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && se && se._testing ? null : a) || (f ? Ct(Bt, null) : null), a && ae(a), process.env.NODE_ENV !== "production" && !se)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = se, a._s.has(r) || (o ? Me(r, t, s, a) : mt(r, s, a), process.env.NODE_ENV !== "production" && (i._pinia = a));
    const u = a._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const d = "__hot:" + r, E = o ? Me(d, t, s, a, !0) : mt(d, v({}, s), a, !0);
      l._hotUpdate(E), delete a.state.value[d], a._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && Oe) {
      const d = Rn();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const E = d.proxy, w = "_pStores" in E ? E._pStores : E._pStores = {};
        w[r] = u;
      }
    }
    return u;
  }
  return i.$id = r, i;
}
function Xt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mr } = Object.prototype, { getPrototypeOf: tt } = Object, Re = ((e) => (t) => {
  const n = mr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), U = (e) => (e = e.toLowerCase(), (t) => Re(t) === e), Te = (e) => (t) => typeof t === e, { isArray: Y } = Array, ce = Te("undefined");
function gr(e) {
  return e !== null && !ce(e) && e.constructor !== null && !ce(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qt = U("ArrayBuffer");
function yr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qt(e.buffer), t;
}
const br = Te("string"), C = Te("function"), Yt = Te("number"), Pe = (e) => e !== null && typeof e == "object", wr = (e) => e === !0 || e === !1, me = (e) => {
  if (Re(e) !== "object")
    return !1;
  const t = tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Er = U("Date"), _r = U("File"), Sr = U("Blob"), Or = U("FileList"), Rr = (e) => Pe(e) && C(e.pipe), Tr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = Re(e)) === "formdata" || // detect form-data instance
  t === "object" && C(e.toString) && e.toString() === "[object FormData]"));
}, Pr = U("URLSearchParams"), [Ar, Nr, xr, vr] = ["ReadableStream", "Request", "Response", "Headers"].map(U), Cr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ue(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Y(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Zt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const en = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), tn = (e) => !ce(e) && e !== en;
function qe() {
  const { caseless: e } = tn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Zt(t, s) || s;
    me(t[o]) && me(r) ? t[o] = qe(t[o], r) : me(r) ? t[o] = qe({}, r) : Y(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ue(arguments[r], n);
  return t;
}
const Dr = (e, t, n, { allOwnKeys: r } = {}) => (ue(t, (s, o) => {
  n && C(s) ? e[o] = Xt(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), jr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ir = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && tt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, kr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ur = (e) => {
  if (!e)
    return null;
  if (Y(e))
    return e;
  let t = e.length;
  if (!Yt(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Fr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tt(Uint8Array)), Br = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, $r = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Vr = U("HTMLFormElement"), Hr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), gt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Mr = U("RegExp"), nn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ue(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, qr = (e) => {
  nn(e, (t, n) => {
    if (C(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (C(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Gr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Y(e) ? r(e) : r(String(e).split(t)), n;
}, Jr = () => {
}, zr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, je = "abcdefghijklmnopqrstuvwxyz", yt = "0123456789", rn = {
  DIGIT: yt,
  ALPHA: je,
  ALPHA_DIGIT: je + je.toUpperCase() + yt
}, Wr = (e = 16, t = rn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Kr(e) {
  return !!(e && C(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Xr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Pe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Y(r) ? [] : {};
        return ue(r, (i, a) => {
          const l = n(i, s + 1);
          !ce(l) && (o[a] = l);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Qr = U("AsyncFunction"), Yr = (e) => e && (Pe(e) || C(e)) && C(e.then) && C(e.catch), c = {
  isArray: Y,
  isArrayBuffer: Qt,
  isBuffer: gr,
  isFormData: Tr,
  isArrayBufferView: yr,
  isString: br,
  isNumber: Yt,
  isBoolean: wr,
  isObject: Pe,
  isPlainObject: me,
  isReadableStream: Ar,
  isRequest: Nr,
  isResponse: xr,
  isHeaders: vr,
  isUndefined: ce,
  isDate: Er,
  isFile: _r,
  isBlob: Sr,
  isRegExp: Mr,
  isFunction: C,
  isStream: Rr,
  isURLSearchParams: Pr,
  isTypedArray: Fr,
  isFileList: Or,
  forEach: ue,
  merge: qe,
  extend: Dr,
  trim: Cr,
  stripBOM: jr,
  inherits: Lr,
  toFlatObject: Ir,
  kindOf: Re,
  kindOfTest: U,
  endsWith: kr,
  toArray: Ur,
  forEachEntry: Br,
  matchAll: $r,
  isHTMLForm: Vr,
  hasOwnProperty: gt,
  hasOwnProp: gt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nn,
  freezeMethods: qr,
  toObjectSet: Gr,
  toCamelCase: Hr,
  noop: Jr,
  toFiniteNumber: zr,
  findKey: Zt,
  global: en,
  isContextDefined: tn,
  ALPHABET: rn,
  generateString: Wr,
  isSpecCompliantForm: Kr,
  toJSONObject: Xr,
  isAsyncFn: Qr,
  isThenable: Yr
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
c.inherits(b, Error, {
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
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const sn = b.prototype, on = {};
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
  on[e] = { value: e };
});
Object.defineProperties(b, on);
Object.defineProperty(sn, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, o) => {
  const i = Object.create(sn);
  return c.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), b.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Zr = null;
function Ge(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function an(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function bt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = an(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function es(e) {
  return c.isArray(e) && !e.some(Ge);
}
const ts = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ae(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, R) {
    return !c.isUndefined(R[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null)
      return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!l && c.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, y, R) {
    let T = p;
    if (p && !R && typeof p == "object") {
      if (c.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && es(p) || (c.isFileList(p) || c.endsWith(y, "[]")) && (T = c.toArray(p)))
        return y = an(y), T.forEach(function(_, $) {
          !(c.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bt([y], $, o) : i === null ? y : y + "[]",
            f(_)
          );
        }), !1;
    }
    return Ge(p) ? !0 : (t.append(bt(R, y, o), f(p)), !1);
  }
  const d = [], E = Object.assign(ts, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: Ge
  });
  function w(p, y) {
    if (!c.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), c.forEach(p, function(T, D) {
        (!(c.isUndefined(T) || T === null) && s.call(
          t,
          T,
          c.isString(D) ? D.trim() : D,
          y,
          E
        )) === !0 && w(T, y ? y.concat(D) : [D]);
      }), d.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function wt(e) {
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
function nt(e, t) {
  this._pairs = [], e && Ae(e, this, t);
}
const cn = nt.prototype;
cn.append = function(t, n) {
  this._pairs.push([t, n]);
};
cn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, wt);
  } : wt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function un(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ns, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = c.isURLSearchParams(t) ? t.toString() : new nt(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class rs {
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
    c.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Et = rs, ln = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ss = typeof URLSearchParams < "u" ? URLSearchParams : nt, os = typeof FormData < "u" ? FormData : null, is = typeof Blob < "u" ? Blob : null, as = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ss,
    FormData: os,
    Blob: is
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, rt = typeof window < "u" && typeof document < "u", cs = ((e) => rt && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), us = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ls = rt && window.location.href || "http://localhost", fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: rt,
  hasStandardBrowserEnv: cs,
  hasStandardBrowserWebWorkerEnv: us,
  origin: ls
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...fs,
  ...as
};
function ds(e, t) {
  return Ae(e, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return I.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ps(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function fn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), l = o >= n.length;
    return i = !i && c.isArray(s) ? s.length : i, l ? (c.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !c.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && c.isArray(s[i]) && (s[i] = hs(s[i])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, s) => {
      t(ps(r), s, n, 0);
    }), n;
  }
  return null;
}
function ms(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const st = {
  transitional: ln,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify(fn(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ds(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ae(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ms(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || st.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
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
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  st.headers[e] = {};
});
const ot = st, gs = c.toObjectSet([
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
]), ys = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && gs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, _t = Symbol("internals");
function re(e) {
  return e && String(e).trim().toLowerCase();
}
function ge(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ge) : String(e);
}
function bs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ws = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Le(e, t, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function Es(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _s(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class Ne {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, l, f) {
      const u = re(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = c.findKey(s, u);
      (!d || s[d] === void 0 || f === !0 || f === void 0 && s[d] !== !1) && (s[d || l] = ge(a));
    }
    const i = (a, l) => c.forEach(a, (f, u) => o(f, u, l));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (c.isString(t) && (t = t.trim()) && !ws(t))
      i(ys(t), n);
    else if (c.isHeaders(t))
      for (const [a, l] of t.entries())
        o(l, a, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = re(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return bs(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = re(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Le(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = re(i), i) {
        const a = c.findKey(r, i);
        a && (!n || Le(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Le(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, o) => {
      const i = c.findKey(r, o);
      if (i) {
        n[i] = ge(s), delete n[o];
        return;
      }
      const a = t ? Es(o) : String(o).trim();
      a !== o && delete n[o], n[a] = ge(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && c.isArray(r) ? r.join(", ") : r);
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
    const r = (this[_t] = this[_t] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = re(i);
      r[a] || (_s(s, i), r[a] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ne.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(Ne);
const k = Ne;
function Ie(e, t) {
  const n = this || ot, r = t || n, s = k.from(r.headers);
  let o = r.data;
  return c.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function dn(e) {
  return !!(e && e.__CANCEL__);
}
function Z(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(Z, b, {
  __CANCEL__: !0
});
function pn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ss(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Os(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), u = r[o];
    i || (i = f), n[s] = l, r[s] = f;
    let d = o, E = 0;
    for (; d !== s; )
      E += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const w = u && f - u;
    return w ? Math.round(E * 1e3 / w) : void 0;
  };
}
function Rs(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let s = null;
  return function() {
    const i = this === !0, a = Date.now();
    if (i || a - n > r)
      return s && (clearTimeout(s), s = null), n = a, e.apply(null, arguments);
    s || (s = setTimeout(() => (s = null, n = Date.now(), e.apply(null, arguments)), r - (a - n)));
  };
}
const we = (e, t, n = 3) => {
  let r = 0;
  const s = Os(50, 250);
  return Rs((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, f = s(l), u = i <= a;
    r = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && a && u ? (a - i) / f : void 0,
      event: o,
      lengthComputable: a != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, n);
}, Ts = I.hasStandardBrowserEnv ? (
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
      const a = c.isString(i) ? s(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), Ps = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      c.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), c.isString(r) && i.push("path=" + r), c.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function As(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ns(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hn(e, t) {
  return e && !As(t) ? Ns(e, t) : t;
}
const St = (e) => e instanceof k ? { ...e } : e;
function z(e, t) {
  t = t || {};
  const n = {};
  function r(f, u, d) {
    return c.isPlainObject(f) && c.isPlainObject(u) ? c.merge.call({ caseless: d }, f, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
  }
  function s(f, u, d) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(f))
        return r(void 0, f, d);
    } else
      return r(f, u, d);
  }
  function o(f, u) {
    if (!c.isUndefined(u))
      return r(void 0, u);
  }
  function i(f, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, u);
  }
  function a(f, u, d) {
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
    validateStatus: a,
    headers: (f, u) => s(St(f), St(u), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || s, E = d(e[u], t[u], u);
    c.isUndefined(E) && d !== a || (n[u] = E);
  }), n;
}
const mn = (e) => {
  const t = z({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  t.headers = i = k.from(i), t.url = un(hn(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (c.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || r !== !1 && Ts(t.url))) {
    const f = s && o && Ps.read(o);
    f && i.set(s, f);
  }
  return t;
}, xs = typeof XMLHttpRequest < "u", vs = xs && function(e) {
  return new Promise(function(n, r) {
    const s = mn(e);
    let o = s.data;
    const i = k.from(s.headers).normalize();
    let { responseType: a } = s, l;
    function f() {
      s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let u = new XMLHttpRequest();
    u.open(s.method.toUpperCase(), s.url, !0), u.timeout = s.timeout;
    function d() {
      if (!u)
        return;
      const w = k.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: w,
        config: e,
        request: u
      };
      pn(function(T) {
        n(T), f();
      }, function(T) {
        r(T), f();
      }, y), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new b("Request aborted", b.ECONNABORTED, s, u)), u = null);
    }, u.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, s, u)), u = null;
    }, u.ontimeout = function() {
      let p = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const y = s.transitional || ln;
      s.timeoutErrorMessage && (p = s.timeoutErrorMessage), r(new b(
        p,
        y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        s,
        u
      )), u = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in u && c.forEach(i.toJSON(), function(p, y) {
      u.setRequestHeader(y, p);
    }), c.isUndefined(s.withCredentials) || (u.withCredentials = !!s.withCredentials), a && a !== "json" && (u.responseType = s.responseType), typeof s.onDownloadProgress == "function" && u.addEventListener("progress", we(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", we(s.onUploadProgress)), (s.cancelToken || s.signal) && (l = (w) => {
      u && (r(!w || w.type ? new Z(null, e, u) : w), u.abort(), u = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const E = Ss(s.url);
    if (E && I.protocols.indexOf(E) === -1) {
      r(new b("Unsupported protocol " + E + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, Cs = (e, t) => {
  let n = new AbortController(), r;
  const s = function(l) {
    if (!r) {
      r = !0, i();
      const f = l instanceof Error ? l : this.reason;
      n.abort(f instanceof b ? f : new Z(f instanceof Error ? f.message : f));
    }
  };
  let o = t && setTimeout(() => {
    s(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l && (l.removeEventListener ? l.removeEventListener("abort", s) : l.unsubscribe(s));
    }), e = null);
  };
  e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", s));
  const { signal: a } = n;
  return a.unsubscribe = i, [a, () => {
    o && clearTimeout(o), o = null;
  }];
}, Ds = Cs, js = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Ls = async function* (e, t, n) {
  for await (const r of e)
    yield* js(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Ot = (e, t, n, r, s) => {
  const o = Ls(e, t, s);
  let i = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(a) {
      const { done: l, value: f } = await o.next();
      if (l) {
        a.close(), r();
        return;
      }
      let u = f.byteLength;
      n && n(i += u), a.enqueue(new Uint8Array(f));
    },
    cancel(a) {
      return r(a), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Rt = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, xe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gn = xe && typeof ReadableStream == "function", Je = xe && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Is = gn && (() => {
  let e = !1;
  const t = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), Tt = 64 * 1024, ze = gn && !!(() => {
  try {
    return c.isReadableStream(new Response("").body);
  } catch {
  }
})(), Ee = {
  stream: ze && ((e) => e.body)
};
xe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ee[t] && (Ee[t] = c.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new b(`Response type '${t}' is not supported`, b.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ks = async (e) => {
  if (e == null)
    return 0;
  if (c.isBlob(e))
    return e.size;
  if (c.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(e))
    return e.byteLength;
  if (c.isURLSearchParams(e) && (e = e + ""), c.isString(e))
    return (await Je(e)).byteLength;
}, Us = async (e, t) => {
  const n = c.toFiniteNumber(e.getContentLength());
  return n ?? ks(t);
}, Fs = xe && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: f,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: E
  } = mn(e);
  f = f ? (f + "").toLowerCase() : "text";
  let [w, p] = s || o || i ? Ds([s, o], i) : [], y, R;
  const T = () => {
    !y && setTimeout(() => {
      w && w.unsubscribe();
    }), y = !0;
  };
  let D;
  try {
    if (l && Is && n !== "get" && n !== "head" && (D = await Us(u, r)) !== 0) {
      let j = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), g;
      c.isFormData(r) && (g = j.headers.get("content-type")) && u.setContentType(g), j.body && (r = Ot(j.body, Tt, Rt(
        D,
        we(l)
      ), null, Je));
    }
    c.isString(d) || (d = d ? "cors" : "omit"), R = new Request(t, {
      ...E,
      signal: w,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: d
    });
    let _ = await fetch(R);
    const $ = ze && (f === "stream" || f === "response");
    if (ze && (a || $)) {
      const j = {};
      ["status", "statusText", "headers"].forEach((ve) => {
        j[ve] = _[ve];
      });
      const g = c.toFiniteNumber(_.headers.get("content-length"));
      _ = new Response(
        Ot(_.body, Tt, a && Rt(
          g,
          we(a, !0)
        ), $ && T, Je),
        j
      );
    }
    f = f || "text";
    let W = await Ee[c.findKey(Ee, f) || "text"](_, e);
    return !$ && T(), p && p(), await new Promise((j, g) => {
      pn(j, g, {
        data: W,
        headers: k.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: e,
        request: R
      });
    });
  } catch (_) {
    throw T(), _ && _.name === "TypeError" && /fetch/i.test(_.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, R),
      {
        cause: _.cause || _
      }
    ) : b.from(_, _ && _.code, e, R);
  }
}), We = {
  http: Zr,
  xhr: vs,
  fetch: Fs
};
c.forEach(We, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Pt = (e) => `- ${e}`, Bs = (e) => c.isFunction(e) || e === null || e === !1, yn = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Bs(n) && (r = We[(i = String(n)).toLowerCase()], r === void 0))
        throw new b(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Pt).join(`
`) : " " + Pt(o[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: We
};
function ke(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Z(null, e);
}
function At(e) {
  return ke(e), e.headers = k.from(e.headers), e.data = Ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yn.getAdapter(e.adapter || ot.adapter)(e).then(function(r) {
    return ke(e), r.data = Ie.call(
      e,
      e.transformResponse,
      r
    ), r.headers = k.from(r.headers), r;
  }, function(r) {
    return dn(r) || (ke(e), r && r.response && (r.response.data = Ie.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = k.from(r.response.headers))), Promise.reject(r);
  });
}
const bn = "1.7.2", it = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  it[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nt = {};
it.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + bn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new b(
        s(i, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Nt[i] && (Nt[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
function $s(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], l = a === void 0 || i(a, o, e);
      if (l !== !0)
        throw new b("option " + o + " must be " + l, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const Ke = {
  assertOptions: $s,
  validators: it
}, H = Ke.validators;
class _e {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Et(),
      response: new Et()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = z(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ke.assertOptions(r, {
      silentJSONParsing: H.transitional(H.boolean),
      forcedJSONParsing: H.transitional(H.boolean),
      clarifyTimeoutError: H.transitional(H.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ke.assertOptions(s, {
      encode: H.function,
      serialize: H.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = k.concat(i, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (l = l && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(y) {
      f.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, E;
    if (!l) {
      const p = [At.bind(this), void 0];
      for (p.unshift.apply(p, a), p.push.apply(p, f), E = p.length, u = Promise.resolve(n); d < E; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    E = a.length;
    let w = n;
    for (d = 0; d < E; ) {
      const p = a[d++], y = a[d++];
      try {
        w = p(w);
      } catch (R) {
        y.call(this, R);
        break;
      }
    }
    try {
      u = At.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, E = f.length; d < E; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const n = hn(t.baseURL, t.url);
    return un(n, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  _e.prototype[t] = function(n, r) {
    return this.request(z(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(z(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  _e.prototype[t] = n(), _e.prototype[t + "Form"] = n(!0);
});
const ye = _e;
class at {
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
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new Z(o, i, a), n(r.reason));
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
      token: new at(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Vs = at;
function Hs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ms(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const Xe = {
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
Object.entries(Xe).forEach(([e, t]) => {
  Xe[t] = e;
});
const qs = Xe;
function wn(e) {
  const t = new ye(e), n = Xt(ye.prototype.request, t);
  return c.extend(n, ye.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return wn(z(e, s));
  }, n;
}
const O = wn(ot);
O.Axios = ye;
O.CanceledError = Z;
O.CancelToken = Vs;
O.isCancel = dn;
O.VERSION = bn;
O.toFormData = Ae;
O.AxiosError = b;
O.Cancel = O.CanceledError;
O.all = function(t) {
  return Promise.all(t);
};
O.spread = Hs;
O.isAxiosError = Ms;
O.mergeConfig = z;
O.AxiosHeaders = k;
O.formToJSON = (e) => fn(c.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = yn.getAdapter;
O.HttpStatusCode = qs;
O.default = O;
const Ue = O;
class Fe {
  static GetUserProjects(t) {
    return Ue.get(`https://api.github.com/users/${t}/repos`).then((n) => n.data);
  }
  static GetOrgProjects(t) {
    return Ue.get(`https://api.github.com/orgs/${t}/repos`).then((n) => n.data);
  }
  static GetCustomProjectData(t) {
    let n = t.html_url;
    return n = n.substring(19), n = `https://raw.githubusercontent.com/${n}/${t.default_branch}/.viewer/data.json`, Ue.get(n).then((r) => r.data ? r.data : []).catch(function(r) {
      return [];
    });
  }
}
const xt = hr("Projects", {
  state: () => ({
    projects: void 0
  }),
  getters: {},
  actions: {
    async FetchProjects() {
      const e = Ct("GitHubGlobalProperties");
      try {
        let t = [];
        for (let n = 0; n < e.options.userRepos.length; n++) {
          let r = await Fe.GetUserProjects(e.options.userRepos[n]);
          t = t.concat(r);
        }
        for (let n = 0; n < e.options.orgRepos.length; n++) {
          let r = await Fe.GetOrgProjects(e.options.orgRepos[n]);
          t = t.concat(r);
        }
        e.options.exclude.length > 0 && (t = t.filter((n) => !e.options.exclude.includes(n.name)));
        for (let n = 0; n < t.length; n++)
          await this.FetchProjectCustomData(t[n]);
        this.projects = t;
      } catch (t) {
        alert(t), console.log(t);
      }
    },
    async FetchProjectCustomData(e) {
      e.CustomData = await Fe.GetCustomProjectData(e);
    }
  }
});
const Gs = { class: "card-grid" }, Js = {
  __name: "GitHubGridView",
  setup(e) {
    return Nn(async () => {
      await xt().FetchProjects();
    }), (t, n) => (fe(), Be("div", Gs, [
      (fe(!0), Be(xn, null, vn(jt(xt)().projects, (r) => (fe(), Cn(Bn, {
        "card-details": r,
        key: r.id
      }, null, 8, ["card-details"]))), 128))
    ]));
  }
}, Ks = /* @__PURE__ */ It(Js, [["__scopeId", "data-v-643558d7"]]);
class zs {
  constructor(t) {
    this.options = t || { userRepos: [], orgRepos: [], exclude: [] };
  }
}
const Xs = {
  install(e, t) {
    const n = lr();
    e.use(n), e.provide("GitHubGlobalProperties", new zs(t));
  }
};
export {
  Ks as GitHubGridView,
  Bn as GitHubProjectBox,
  Xs as default
};
