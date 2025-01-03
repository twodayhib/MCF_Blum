import {
  _ as an
} from "./B3q5VDfN.js";
import {
  _ as cn
} from "./oPaS2f8W.js";
import {
  d as ot,
  j as z,
  $ as Ms,
  b0 as Ss,
  L as J,
  aY as un,
  V as ke,
  o as y,
  c as T,
  a as k,
  e as v,
  G as R,
  I as q,
  t as F,
  z as V,
  W as Dt,
  ax as Rt,
  a$ as Cs,
  Z as ge,
  x as Ut,
  f as lt,
  b as x,
  aP as ks,
  p as gt,
  af as dn,
  aQ as js,
  bc as fn,
  aM as mn,
  C as Ct,
  aO as pn,
  u as vn,
  _ as zs,
  bn as Xt,
  bo as Kt,
  bp as bn,
  Q as St,
  ay as ki,
  F as bt,
  q as qt,
  n as Bt,
  w as _e,
  bq as qe,
  br as ji,
  bs as gn,
  h as _n,
  a8 as we,
  bf as wn,
  B as xt,
  aK as yn,
  bt as Mn,
  bu as Ls,
  a3 as Sn,
  ap as Qe,
  bv as ti,
  aq as ei,
  bw as Cn,
  am as kn,
  O as jn,
  bm as zn,
  U as ye,
  bx as H,
  bd as Mt,
  by as zi,
  H as Ln,
  g as xn,
  aR as En,
  ac as Tn,
  ad as ii,
  a7 as $n,
  ag as Pn,
  be as Vn,
  bz as Rn,
  P as In,
  bA as Wn,
  k as Bn,
  bB as he,
  bj as An,
  bC as Dn,
  T as Ft,
  X as Li,
  av as dt
} from "./BrLCGJDp.js";
import {
  _ as xs,
  a as Es,
  b as Ts,
  c as ci,
  d as $s,
  e as Nn,
  f as Ps,
  g as On
} from "./FC_2WuQM.js";
import {
  _ as je
} from "./BiY0FrNC.js";
import {
  _ as Un
} from "./LPIV59H5.js";
import {
  _ as Fn
} from "./1mUkb5B-.js";
import {
  g as Jn
} from "./CBgmpIod.js";
import {
  _ as Kn
} from "./DHJe7qkH.js";
import {
  u as Xn
} from "./BMDMyBOJ.js";
import {
  u as Hn,
  a as Yn
} from "./DpRVLsyc.js";
import "./BIjeZW-I.js";
import "./BHMDW0oD.js";
import "./B8N2krnO.js";
const Zn = {
    class: "memepad-jetton-action-controls-unlock-button"
  },
  Gn = {
    class: "info"
  },
  qn = {
    class: "label"
  },
  Qn = ot({
    __name: "UnlockButton",
    props: {
      jetton: {},
      jettonInformation: {},
      balances: {},
      jettonManagement: {}
    },
    emits: ["unlocked"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        i = z(() => e.jettonManagement.unlockStateControls.getState({
          tonBalance: e.balances.tonBalance,
          jettonBalance: e.balances.jettonBalance,
          jetton: e.jetton
        })),
        s = t,
        o = Ms(),
        h = Ss(),
        r = J(!1),
        l = e.jettonManagement.getWaitForUnlockStatus(e.jetton.address),
        a = un(() => [], "$wcqC8U32np"),
        c = async () => {
          if (u.value) return;
          const d = () => ge().error(V("memepad.jetton.unlock.failed_alert", {
              ticker: e.jetton.ticker
            })),
            m = () => {
              a.value.push(e.jetton.address), a.value = a.value.slice(-3), a.value.length === 3 && a.value.every(S => S === a.value[0]) && (h.disconnect(), a.value = [])
            },
            f = _ => {
              o.memepad.memepadJettonUnlock({
                status: _,
                jettonId: e.jetton.id,
                jettonShortname: e.jetton.shortname,
                jettonAddress: e.jetton.address
              })
            };
          r.value = !0;
          const p = await e.jettonManagement.unlockWallet(e.jetton.address);
          if (!Rt(p)) {
            f("failed"), d(), m();
            return
          }
          await Cs(2e4), await l.exec(p.data) ? (f("success"), s("unlocked"), ge().success(V("memepad.jetton.unlock.success_alert", {
            ticker: e.jetton.ticker
          }))) : (f("failed"), d()), r.value = !1
        }, u = z(() => !!(r.value || !i.value.feesInfo));
      return ke(() => {
        l.destroy()
      }), (d, m) => {
        var L, j;
        const f = xs,
          p = je,
          g = Es,
          _ = Ts,
          S = Ut;
        return y(), T("div", Zn, [k("div", Gn, [v(i).balanceLabel ? (y(), R(f, {
          key: 0,
          balance: v(i).balanceLabel
        }, null, 8, ["balance"])) : (y(), R(p, {
          key: 1,
          class: "skeleton"
        })), v(i).feesInfo ? (y(), R(g, {
          key: 2,
          details: v(i).feesInfo.details,
          "total-label": v(i).feesInfo.totalLabel,
          "error-message": (L = v(i).error) == null ? void 0 : L.message
        }, null, 8, ["details", "total-label", "error-message"])) : (y(), R(p, {
          key: 3,
          class: "skeleton"
        }))]), (j = v(i).error) != null && j.notEnoughTon ? (y(), R(_, {
          key: 0,
          "jetton-shortname": d.jetton.shortname,
          "jetton-address": d.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (y(), R(S, {
          key: 1,
          fill: "",
          icon: "lock-open",
          "icon-align": "left",
          size: v(Dt).LARGE,
          class: "button",
          loading: v(u),
          disabled: !!v(i).error,
          onClick: c
        }, {
          default: q(() => [k("div", qn, F(("t" in d ? d.t : v(V))("memepad.jetton.unlock_btn", {
            ticker: d.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "loading", "disabled"]))])
      }
    }
  }),
  ui = lt(Qn, [
    ["__scopeId", "data-v-85503fa4"]
  ]),
  to = {
    class: "memepad-jetton-moving-to-dex-page"
  },
  eo = {
    class: "content"
  },
  io = {
    class: "image-wrapper"
  },
  so = {
    class: "title"
  },
  no = {
    class: "subtitle"
  },
  oo = {
    class: "wallet-and-button"
  },
  ho = ot({
    __name: "MovingToDexPage",
    props: {
      jetton: {},
      jettonInformation: {},
      unlockEnabled: {
        type: Boolean
      },
      isReleased: {
        type: Boolean
      },
      balances: {},
      jettonManagement: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(n) {
      const t = n,
        e = J(!1);
      return (i, s) => {
        const o = cn,
          h = dn,
          r = js,
          l = ui,
          a = Ut,
          c = ci,
          u = Un,
          d = fn;
        return y(), T("div", to, [x(o), k("div", eo, [k("div", io, [x(h, {
          size: 342,
          name: "animations/Clover",
          class: "animation"
        }), x(r, {
          src: v(ks)(i.jetton.iconFileKey),
          size: 80
        }, null, 8, ["src"])]), k("div", so, F(("t" in i ? i.t : v(V))("memepad.moving_to_dex.title")), 1), k("div", no, F(("t" in i ? i.t : v(V))("memepad.moving_to_dex.subtitle", {
          ticker: i.jetton.ticker
        })), 1)]), x(u, null, {
          default: q(() => [k("div", oo, [x(c, {
            "force-loading": i.unlockEnabled === void 0 && i.isReleased
          }, {
            default: q(() => [i.unlockEnabled ? (y(), R(l, {
              key: 0,
              jetton: i.jetton,
              "jetton-information": i.jettonInformation,
              balances: i.balances,
              "jetton-management": i.jettonManagement,
              onUnlocked: s[0] || (s[0] = m => i.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (y(), R(a, {
              key: 1,
              label: ("t" in i ? i.t : v(V))("memepad.jetton.share_token_link"),
              fill: "",
              size: v(Dt).LARGE,
              onClick: s[1] || (s[1] = m => e.value = !0)
            }, null, 8, ["label", "size"]))]),
            _: 1
          }, 8, ["force-loading"])])]),
          _: 1
        }), x(d, {
          modelValue: v(e),
          "onUpdate:modelValue": s[2] || (s[2] = m => gt(e) ? e.value = m : null),
          "jetton-shortname": t.jetton.shortname,
          ticker: i.jetton.ticker
        }, null, 8, ["modelValue", "jetton-shortname", "ticker"])])
      }
    }
  }),
  ro = lt(ho, [
    ["__scopeId", "data-v-08f5fe7f"]
  ]),
  lo = {
    class: "memepad-jetton-header"
  },
  ao = {
    class: "jetton"
  },
  co = {
    class: "info"
  },
  uo = {
    class: "info-top"
  },
  fo = {
    class: "ticker"
  },
  mo = {
    key: 0,
    class: "spotlight"
  },
  po = {
    class: "info-bottom"
  },
  vo = {
    class: "right"
  },
  bo = {
    class: "label"
  },
  go = ot({
    __name: "Header",
    props: {
      jetton: {},
      jettonInformation: {},
      isReleased: {
        type: Boolean
      },
      jettonModalControls: {}
    },
    emits: ["share"],
    setup(n) {
      const t = n,
        e = z(() => {
          const s = mn(t.jetton.releaseTimestamp).label;
          return t.isReleased ? `${s} • STON.fi` : s
        }),
        i = () => vn().copy(t.jetton.address);
      return (s, o) => {
        var l;
        const h = Fn,
          r = zs;
        return y(), T("div", lo, [k("div", ao, [x(h, {
          "jetton-modal-controls": s.jettonModalControls,
          jetton: s.jetton
        }, null, 8, ["jetton-modal-controls", "jetton"]), k("div", co, [k("div", uo, [k("div", fo, F(s.jetton.ticker), 1), (l = s.jettonInformation) != null && l.inSpotlight ? (y(), T("div", mo, [x(r, {
          name: "fire",
          class: "icon"
        }), o[1] || (o[1] = k("span", {
          class: "label"
        }, "Spotlight", -1))])) : Ct("", !0)]), k("div", po, F(v(e)), 1)])]), k("div", vo, [k("button", {
          type: "button",
          class: "reset copy",
          onClick: i
        }, [x(r, {
          name: "edit-copy",
          class: "icon"
        }), k("span", bo, F(("sliceWalletAddress" in s ? s.sliceWalletAddress : v(pn))(s.jetton.address, 3)), 1)]), k("button", {
          type: "button",
          class: "reset share",
          onClick: o[0] || (o[0] = a => s.$emit("share"))
        }, [x(r, {
          name: "share",
          class: "icon"
        })])])])
      }
    }
  }),
  _o = lt(go, [
    ["__scopeId", "data-v-2bfbc4d5"]
  ]);

function D(n) {
  var t = n.width,
    e = n.height;
  if (t < 0) throw new Error("Negative width is not allowed for Size");
  if (e < 0) throw new Error("Negative height is not allowed for Size");
  return {
    width: t,
    height: e
  }
}

function Lt(n, t) {
  return n.width === t.width && n.height === t.height
}
var wo = function() {
  function n(t) {
    var e = this;
    this._resolutionListener = function() {
      return e._onResolutionChanged()
    }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
  }
  return n.prototype.dispose = function() {
    this._uninstallResolutionListener(), this._window = null
  }, Object.defineProperty(n.prototype, "value", {
    get: function() {
      return this._window.devicePixelRatio
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.subscribe = function(t) {
    var e = this,
      i = {
        next: t
      };
    return this._observers.push(i), {
      unsubscribe: function() {
        e._observers = e._observers.filter(function(s) {
          return s !== i
        })
      }
    }
  }, n.prototype._installResolutionListener = function() {
    if (this._resolutionMediaQueryList !== null) throw new Error("Resolution listener is already installed");
    var t = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
  }, n.prototype._uninstallResolutionListener = function() {
    this._resolutionMediaQueryList !== null && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
  }, n.prototype._reinstallResolutionListener = function() {
    this._uninstallResolutionListener(), this._installResolutionListener()
  }, n.prototype._onResolutionChanged = function() {
    var t = this;
    this._observers.forEach(function(e) {
      return e.next(t._window.devicePixelRatio)
    }), this._reinstallResolutionListener()
  }, n
}();

function yo(n) {
  return new wo(n)
}
var Mo = function() {
  function n(t, e, i) {
    var s;
    this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = D({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    }), this._transformBitmapSize = e ?? function(o) {
      return o
    }, this._allowResizeObserver = (s = i == null ? void 0 : i.allowResizeObserver) !== null && s !== void 0 ? s : !0, this._chooseAndInitObserver()
  }
  return n.prototype.dispose = function() {
    var t, e;
    if (this._canvasElement === null) throw new Error("Object is disposed");
    (t = this._canvasElementResizeObserver) === null || t === void 0 || t.disconnect(), this._canvasElementResizeObserver = null, (e = this._devicePixelRatioObservable) === null || e === void 0 || e.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
  }, Object.defineProperty(n.prototype, "canvasElement", {
    get: function() {
      if (this._canvasElement === null) throw new Error("Object is disposed");
      return this._canvasElement
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "canvasElementClientSize", {
    get: function() {
      return this._canvasElementClientSize
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "bitmapSize", {
    get: function() {
      return D({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      })
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.resizeCanvasElement = function(t) {
    this._canvasElementClientSize = D(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
  }, n.prototype.subscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners.push(t)
  }, n.prototype.unsubscribeBitmapSizeChanged = function(t) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(e) {
      return e !== t
    })
  }, Object.defineProperty(n.prototype, "suggestedBitmapSize", {
    get: function() {
      return this._suggestedBitmapSize
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.subscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners.push(t)
  }, n.prototype.unsubscribeSuggestedBitmapSizeChanged = function(t) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(e) {
      return e !== t
    })
  }, n.prototype.applySuggestedBitmapSize = function() {
    if (this._suggestedBitmapSize !== null) {
      var t = this._suggestedBitmapSize;
      this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize)
    }
  }, n.prototype._resizeBitmap = function(t) {
    var e = this.bitmapSize;
    Lt(e, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(e, t))
  }, n.prototype._emitBitmapSizeChanged = function(t, e) {
    var i = this;
    this._bitmapSizeChangedListeners.forEach(function(s) {
      return s.call(i, t, e)
    })
  }, n.prototype._suggestNewBitmapSize = function(t) {
    var e = this._suggestedBitmapSize,
      i = D(this._transformBitmapSize(t, this._canvasElementClientSize)),
      s = Lt(this.bitmapSize, i) ? null : i;
    e === null && s === null || e !== null && s !== null && Lt(e, s) || (this._suggestedBitmapSize = s, this._emitSuggestedBitmapSizeChanged(e, s))
  }, n.prototype._emitSuggestedBitmapSizeChanged = function(t, e) {
    var i = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function(s) {
      return s.call(i, t, e)
    })
  }, n.prototype._chooseAndInitObserver = function() {
    var t = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return
    }
    Co().then(function(e) {
      return e ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
    })
  }, n.prototype._initDevicePixelRatioObservable = function() {
    var t = this;
    if (this._canvasElement !== null) {
      var e = xi(this._canvasElement);
      if (e === null) throw new Error("No window is associated with the canvas");
      this._devicePixelRatioObservable = yo(e), this._devicePixelRatioObservable.subscribe(function() {
        return t._invalidateBitmapSize()
      }), this._invalidateBitmapSize()
    }
  }, n.prototype._invalidateBitmapSize = function() {
    var t, e;
    if (this._canvasElement !== null) {
      var i = xi(this._canvasElement);
      if (i !== null) {
        var s = (e = (t = this._devicePixelRatioObservable) === null || t === void 0 ? void 0 : t.value) !== null && e !== void 0 ? e : i.devicePixelRatio,
          o = this._canvasElement.getClientRects(),
          h = o[0] !== void 0 ? ko(o[0], s) : D({
            width: this._canvasElementClientSize.width * s,
            height: this._canvasElementClientSize.height * s
          });
        this._suggestNewBitmapSize(h)
      }
    }
  }, n.prototype._initResizeObserver = function() {
    var t = this;
    this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(e) {
      var i = e.find(function(h) {
        return h.target === t._canvasElement
      });
      if (!(!i || !i.devicePixelContentBoxSize || !i.devicePixelContentBoxSize[0])) {
        var s = i.devicePixelContentBoxSize[0],
          o = D({
            width: s.inlineSize,
            height: s.blockSize
          });
        t._suggestNewBitmapSize(o)
      }
    }), this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: "device-pixel-content-box"
    }))
  }, n
}();

function So(n, t) {
  if (t.type === "device-pixel-content-box") return new Mo(n, t.transform, t.options);
  throw new Error("Unsupported binding target")
}

function xi(n) {
  return n.ownerDocument.defaultView
}

function Co() {
  return new Promise(function(n) {
    var t = new ResizeObserver(function(e) {
      n(e.every(function(i) {
        return "devicePixelContentBoxSize" in i
      })), t.disconnect()
    });
    t.observe(document.body, {
      box: "device-pixel-content-box"
    })
  }).catch(function() {
    return !1
  })
}

function ko(n, t) {
  return D({
    width: Math.round(n.left * t + n.width * t) - Math.round(n.left * t),
    height: Math.round(n.top * t + n.height * t) - Math.round(n.top * t)
  })
}
var jo = function() {
  function n(t, e, i) {
    if (e.width === 0 || e.height === 0) throw new TypeError("Rendering target could only be created on a media with positive width and height");
    if (this._mediaSize = e, i.width === 0 || i.height === 0) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
    this._bitmapSize = i, this._context = t
  }
  return n.prototype.useMediaCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
        context: this._context,
        mediaSize: this._mediaSize
      })
    } finally {
      this._context.restore()
    }
  }, n.prototype.useBitmapCoordinateSpace = function(t) {
    try {
      return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({
        context: this._context,
        mediaSize: this._mediaSize,
        bitmapSize: this._bitmapSize,
        horizontalPixelRatio: this._horizontalPixelRatio,
        verticalPixelRatio: this._verticalPixelRatio
      })
    } finally {
      this._context.restore()
    }
  }, Object.defineProperty(n.prototype, "_horizontalPixelRatio", {
    get: function() {
      return this._bitmapSize.width / this._mediaSize.width
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "_verticalPixelRatio", {
    get: function() {
      return this._bitmapSize.height / this._mediaSize.height
    },
    enumerable: !1,
    configurable: !0
  }), n
}();

function Et(n, t) {
  var e = n.canvasElementClientSize;
  if (e.width === 0 || e.height === 0) return null;
  var i = n.bitmapSize;
  if (i.width === 0 || i.height === 0) return null;
  var s = n.canvasElement.getContext("2d", t);
  return s === null ? null : new jo(s, e, i)
}
/*!
 * @license
 * TradingView Lightweight Charts™ v4.2.1
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const zo = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: !0,
    borderVisible: !0,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350"
  },
  Lo = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  xo = {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  Eo = {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    invertFilledArea: !1,
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  To = {
    baseValue: {
      type: "price",
      price: 0
    },
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  $o = {
    color: "#26a69a",
    base: 0
  },
  Vs = {
    color: "#2196f3"
  },
  Rs = {
    title: "",
    visible: !0,
    lastValueVisible: !0,
    priceLineVisible: !0,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: !0,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: {
      type: "price",
      precision: 2,
      minMove: .01
    }
  };
var Ei, Me;

function Tt(n, t) {
  const e = {
    0: [],
    1: [n.lineWidth, n.lineWidth],
    2: [2 * n.lineWidth, 2 * n.lineWidth],
    3: [6 * n.lineWidth, 6 * n.lineWidth],
    4: [n.lineWidth, 4 * n.lineWidth]
  } [t];
  n.setLineDash(e)
}

function Is(n, t, e, i) {
  n.beginPath();
  const s = n.lineWidth % 2 ? .5 : 0;
  n.moveTo(e, t + s), n.lineTo(i, t + s), n.stroke()
}

function kt(n, t) {
  if (!n) throw new Error("Assertion failed" + (t ? ": " + t : ""))
}

function nt(n) {
  if (n === void 0) throw new Error("Value is undefined");
  return n
}

function b(n) {
  if (n === null) throw new Error("Value is null");
  return n
}

function It(n) {
  return b(nt(n))
}(function(n) {
  n[n.Simple = 0] = "Simple", n[n.WithSteps = 1] = "WithSteps", n[n.Curved = 2] = "Curved"
})(Ei || (Ei = {})),
function(n) {
  n[n.Solid = 0] = "Solid", n[n.Dotted = 1] = "Dotted", n[n.Dashed = 2] = "Dashed", n[n.LargeDashed = 3] = "LargeDashed", n[n.SparseDotted = 4] = "SparseDotted"
}(Me || (Me = {}));
const Ti = {
  khaki: "#f0e68c",
  azure: "#f0ffff",
  aliceblue: "#f0f8ff",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gainsboro: "#dcdcdc",
  gray: "#808080",
  green: "#008000",
  honeydew: "#f0fff0",
  floralwhite: "#fffaf0",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lemonchiffon: "#fffacd",
  hotpink: "#ff69b4",
  lightyellow: "#ffffe0",
  greenyellow: "#adff2f",
  lightgoldenrodyellow: "#fafad2",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  lightcyan: "#e0ffff",
  magenta: "#f0f",
  maroon: "#800000",
  olive: "#808000",
  orange: "#ffa500",
  oldlace: "#fdf5e6",
  mediumblue: "#0000cd",
  transparent: "#0000",
  lime: "#0f0",
  lightpink: "#ffb6c1",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  midnightblue: "#191970",
  orchid: "#da70d6",
  mediumorchid: "#ba55d3",
  mediumturquoise: "#48d1cc",
  orangered: "#ff4500",
  royalblue: "#4169e1",
  powderblue: "#b0e0e6",
  red: "#f00",
  coral: "#ff7f50",
  turquoise: "#40e0d0",
  white: "#fff",
  whitesmoke: "#f5f5f5",
  wheat: "#f5deb3",
  teal: "#008080",
  steelblue: "#4682b4",
  bisque: "#ffe4c4",
  aquamarine: "#7fffd4",
  aqua: "#0ff",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  springgreen: "#00ff7f",
  antiquewhite: "#faebd7",
  burlywood: "#deb887",
  brown: "#a52a2a",
  beige: "#f5f5dc",
  chocolate: "#d2691e",
  chartreuse: "#7fff00",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cadetblue: "#5f9ea0",
  tomato: "#ff6347",
  fuchsia: "#f0f",
  blue: "#00f",
  salmon: "#fa8072",
  blanchedalmond: "#ffebcd",
  slateblue: "#6a5acd",
  slategray: "#708090",
  thistle: "#d8bfd8",
  tan: "#d2b48c",
  cyan: "#0ff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  blueviolet: "#8a2be2",
  black: "#000",
  darkmagenta: "#8b008b",
  darkslateblue: "#483d8b",
  darkkhaki: "#bdb76b",
  darkorchid: "#9932cc",
  darkorange: "#ff8c00",
  darkgreen: "#006400",
  darkred: "#8b0000",
  dodgerblue: "#1e90ff",
  darkslategray: "#2f4f4f",
  dimgray: "#696969",
  deepskyblue: "#00bfff",
  firebrick: "#b22222",
  forestgreen: "#228b22",
  indigo: "#4b0082",
  ivory: "#fffff0",
  lavenderblush: "#fff0f5",
  feldspar: "#d19275",
  indianred: "#cd5c5c",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightskyblue: "#87cefa",
  lightslategray: "#789",
  lightslateblue: "#8470ff",
  snow: "#fffafa",
  lightseagreen: "#20b2aa",
  lightsalmon: "#ffa07a",
  darksalmon: "#e9967a",
  darkviolet: "#9400d3",
  mediumpurple: "#9370d8",
  mediumaquamarine: "#66cdaa",
  skyblue: "#87ceeb",
  lavender: "#e6e6fa",
  lightsteelblue: "#b0c4de",
  mediumvioletred: "#c71585",
  mintcream: "#f5fffa",
  navajowhite: "#ffdead",
  navy: "#000080",
  olivedrab: "#6b8e23",
  palevioletred: "#d87093",
  violetred: "#d02090",
  yellow: "#ff0",
  yellowgreen: "#9acd32",
  lawngreen: "#7cfc00",
  pink: "#ffc0cb",
  paleturquoise: "#afeeee",
  palegoldenrod: "#eee8aa",
  darkolivegreen: "#556b2f",
  darkseagreen: "#8fbc8f",
  darkturquoise: "#00ced1",
  peachpuff: "#ffdab9",
  deeppink: "#ff1493",
  violet: "#ee82ee",
  palegreen: "#98fb98",
  mediumseagreen: "#3cb371",
  peru: "#cd853f",
  saddlebrown: "#8b4513",
  sandybrown: "#f4a460",
  rosybrown: "#bc8f8f",
  purple: "#800080",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  papayawhip: "#ffefd5",
  mediumslateblue: "#7b68ee",
  plum: "#dda0dd",
  mediumspringgreen: "#00fa9a"
};

function ct(n) {
  return n < 0 ? 0 : n > 255 ? 255 : Math.round(n) || 0
}

function Ws(n) {
  return n <= 0 || n > 1 ? Math.min(Math.max(n, 0), 1) : Math.round(1e4 * n) / 1e4
}
const Po = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  Vo = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  Ro = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  Io = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d*\.?\d+)\s*\)$/;

function Qt(n) {
  (n = n.toLowerCase()) in Ti && (n = Ti[n]);
  {
    const t = Io.exec(n) || Ro.exec(n);
    if (t) return [ct(parseInt(t[1], 10)), ct(parseInt(t[2], 10)), ct(parseInt(t[3], 10)), Ws(t.length < 5 ? 1 : parseFloat(t[4]))]
  } {
    const t = Vo.exec(n);
    if (t) return [ct(parseInt(t[1], 16)), ct(parseInt(t[2], 16)), ct(parseInt(t[3], 16)), 1]
  } {
    const t = Po.exec(n);
    if (t) return [ct(17 * parseInt(t[1], 16)), ct(17 * parseInt(t[2], 16)), ct(17 * parseInt(t[3], 16)), 1]
  }
  throw new Error(`Cannot parse color: ${n}`)
}

function Bs(n) {
  return .199 * n[0] + .687 * n[1] + .114 * n[2]
}

function ze(n) {
  const t = Qt(n);
  return {
    t: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
    i: Bs(t) > 160 ? "black" : "white"
  }
}
class K {
  constructor() {
    this.h = []
  }
  l(t, e, i) {
    const s = {
      o: t,
      _: e,
      u: i === !0
    };
    this.h.push(s)
  }
  v(t) {
    const e = this.h.findIndex(i => t === i.o);
    e > -1 && this.h.splice(e, 1)
  }
  p(t) {
    this.h = this.h.filter(e => e._ !== t)
  }
  m(t, e, i) {
    const s = [...this.h];
    this.h = this.h.filter(o => !o.u), s.forEach(o => o.o(t, e, i))
  }
  M() {
    return this.h.length > 0
  }
  S() {
    this.h = []
  }
}

function ft(n, ...t) {
  for (const e of t)
    for (const i in e) e[i] !== void 0 && (typeof e[i] != "object" || n[i] === void 0 || Array.isArray(e[i]) ? n[i] = e[i] : ft(n[i], e[i]));
  return n
}

function vt(n) {
  return typeof n == "number" && isFinite(n)
}

function te(n) {
  return typeof n == "number" && n % 1 == 0
}

function ne(n) {
  return typeof n == "string"
}

function re(n) {
  return typeof n == "boolean"
}

function _t(n) {
  const t = n;
  if (!t || typeof t != "object") return t;
  let e, i, s;
  for (i in e = Array.isArray(t) ? [] : {}, t) t.hasOwnProperty(i) && (s = t[i], e[i] = s && typeof s == "object" ? _t(s) : s);
  return e
}

function Wo(n) {
  return n !== null
}

function ee(n) {
  return n === null ? void 0 : n
}
const di = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

function Nt(n, t, e) {
  return t === void 0 && (t = di), `${e=e!==void 0?`${e} `:""}${n}px ${t}`
}
class Bo {
  constructor(t) {
    this.k = {
      C: 1,
      T: 5,
      P: NaN,
      R: "",
      D: "",
      V: "",
      O: "",
      B: 0,
      A: 0,
      I: 0,
      L: 0,
      N: 0
    }, this.F = t
  }
  W() {
    const t = this.k,
      e = this.j(),
      i = this.H();
    return t.P === e && t.D === i || (t.P = e, t.D = i, t.R = Nt(e, i), t.L = 2.5 / 12 * e, t.B = t.L, t.A = e / 12 * t.T, t.I = e / 12 * t.T, t.N = 0), t.V = this.$(), t.O = this.U(), this.k
  }
  $() {
    return this.F.W().layout.textColor
  }
  U() {
    return this.F.q()
  }
  j() {
    return this.F.W().layout.fontSize
  }
  H() {
    return this.F.W().layout.fontFamily
  }
}
class fi {
  constructor() {
    this.Y = []
  }
  Z(t) {
    this.Y = t
  }
  X(t, e, i) {
    this.Y.forEach(s => {
      s.X(t, e, i)
    })
  }
}
class mt {
  X(t, e, i) {
    t.useBitmapCoordinateSpace(s => this.K(s, e, i))
  }
}
class Ao extends mt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    if (this.G === null || this.G.tt === null) return;
    const s = this.G.tt,
      o = this.G,
      h = Math.max(1, Math.floor(e)) % 2 / 2,
      r = l => {
        t.beginPath();
        for (let a = s.to - 1; a >= s.from; --a) {
          const c = o.it[a],
            u = Math.round(c.nt * e) + h,
            d = c.st * i,
            m = l * i + h;
          t.moveTo(u, d), t.arc(u, d, m, 0, 2 * Math.PI)
        }
        t.fill()
      };
    o.et > 0 && (t.fillStyle = o.rt, r(o.ht + o.et)), t.fillStyle = o.lt, r(o.ht)
  }
}

function Do() {
  return {
    it: [{
      nt: 0,
      st: 0,
      ot: 0,
      _t: 0
    }],
    lt: "",
    rt: "",
    ht: 0,
    et: 0,
    tt: null
  }
}
const No = {
  from: 0,
  to: 1
};
class Oo {
  constructor(t, e) {
    this.ut = new fi, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = e, this.ut.Z(this.ct)
  }
  bt(t) {
    const e = this.F.wt();
    e.length !== this.ct.length && (this.dt = e.map(Do), this.ct = this.dt.map(i => {
      const s = new Ao;
      return s.J(i), s
    }), this.ut.Z(this.ct)), this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.ut
  }
  Mt() {
    const t = this.vt.W().mode === 2,
      e = this.F.wt(),
      i = this.vt.xt(),
      s = this.F.St();
    e.forEach((o, h) => {
      var r;
      const l = this.dt[h],
        a = o.kt(i);
      if (t || a === null || !o.yt()) return void(l.tt = null);
      const c = b(o.Ct());
      l.lt = a.Tt, l.ht = a.ht, l.et = a.Pt, l.it[0]._t = a._t, l.it[0].st = o.Dt().Rt(a._t, c.Vt), l.rt = (r = a.Ot) !== null && r !== void 0 ? r : this.F.Bt(l.it[0].st / o.Dt().At()), l.it[0].ot = i, l.it[0].nt = s.It(i), l.tt = No
    })
  }
}
class Uo extends mt {
  constructor(t) {
    super(), this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (this.zt === null) return;
    const o = this.zt.Lt.yt,
      h = this.zt.Et.yt;
    if (!o && !h) return;
    const r = Math.round(this.zt.nt * i),
      l = Math.round(this.zt.st * s);
    t.lineCap = "butt", o && r >= 0 && (t.lineWidth = Math.floor(this.zt.Lt.et * i), t.strokeStyle = this.zt.Lt.V, t.fillStyle = this.zt.Lt.V, Tt(t, this.zt.Lt.Nt), function(a, c, u, d) {
      a.beginPath();
      const m = a.lineWidth % 2 ? .5 : 0;
      a.moveTo(c + m, u), a.lineTo(c + m, d), a.stroke()
    }(t, r, 0, e.height)), h && l >= 0 && (t.lineWidth = Math.floor(this.zt.Et.et * s), t.strokeStyle = this.zt.Et.V, t.fillStyle = this.zt.Et.V, Tt(t, this.zt.Et.Nt), Is(t, l, 0, e.width))
  }
}
class Fo {
  constructor(t) {
    this.ft = !0, this.Ft = {
      Lt: {
        et: 1,
        Nt: 0,
        V: "",
        yt: !1
      },
      Et: {
        et: 1,
        Nt: 0,
        V: "",
        yt: !1
      },
      nt: 0,
      st: 0
    }, this.Wt = new Uo(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.yt(),
      e = b(this.jt.Ht()),
      i = e.$t().W().crosshair,
      s = this.Ft;
    if (i.mode === 2) return s.Et.yt = !1, void(s.Lt.yt = !1);
    s.Et.yt = t && this.jt.Ut(e), s.Lt.yt = t && this.jt.qt(), s.Et.et = i.horzLine.width, s.Et.Nt = i.horzLine.style, s.Et.V = i.horzLine.color, s.Lt.et = i.vertLine.width, s.Lt.Nt = i.vertLine.style, s.Lt.V = i.vertLine.color, s.nt = this.jt.Yt(), s.st = this.jt.Zt()
  }
}

function Jo(n, t, e, i, s, o) {
  n.fillRect(t + o, e, i - 2 * o, o), n.fillRect(t + o, e + s - o, i - 2 * o, o), n.fillRect(t, e, o, s), n.fillRect(t + i - o, e, o, s)
}

function Le(n, t, e, i, s, o) {
  n.save(), n.globalCompositeOperation = "copy", n.fillStyle = o, n.fillRect(t, e, i, s), n.restore()
}

function $i(n, t, e, i, s, o) {
  n.beginPath(), n.roundRect ? n.roundRect(t, e, i, s, o) : (n.lineTo(t + i - o[1], e), o[1] !== 0 && n.arcTo(t + i, e, t + i, e + o[1], o[1]), n.lineTo(t + i, e + s - o[2]), o[2] !== 0 && n.arcTo(t + i, e + s, t + i - o[2], e + s, o[2]), n.lineTo(t + o[3], e + s), o[3] !== 0 && n.arcTo(t, e + s, t, e + s - o[3], o[3]), n.lineTo(t, e + o[0]), o[0] !== 0 && n.arcTo(t, e, t + o[0], e, o[0]))
}

function Pi(n, t, e, i, s, o, h = 0, r = [0, 0, 0, 0], l = "") {
  if (n.save(), !h || !l || l === o) return $i(n, t, e, i, s, r), n.fillStyle = o, n.fill(), void n.restore();
  const a = h / 2;
  var c;
  $i(n, t + a, e + a, i - h, s - h, (c = -a, r.map(u => u === 0 ? u : u + c))), o !== "transparent" && (n.fillStyle = o, n.fill()), l !== "transparent" && (n.lineWidth = h, n.strokeStyle = l, n.closePath(), n.stroke()), n.restore()
}

function As(n, t, e, i, s, o, h) {
  n.save(), n.globalCompositeOperation = "copy";
  const r = n.createLinearGradient(0, 0, 0, s);
  r.addColorStop(0, o), r.addColorStop(1, h), n.fillStyle = r, n.fillRect(t, e, i, s), n.restore()
}
class Vi {
  constructor(t, e) {
    this.J(t, e)
  }
  J(t, e) {
    this.zt = t, this.Xt = e
  }
  At(t, e) {
    return this.zt.yt ? t.P + t.L + t.B : 0
  }
  X(t, e, i, s) {
    if (!this.zt.yt || this.zt.Kt.length === 0) return;
    const o = this.zt.V,
      h = this.Xt.t,
      r = t.useBitmapCoordinateSpace(l => {
        const a = l.context;
        a.font = e.R;
        const c = this.Gt(l, e, i, s),
          u = c.Jt;
        return c.Qt ? Pi(a, u.ti, u.ii, u.ni, u.si, h, u.ei, [u.ht, 0, 0, u.ht], h) : Pi(a, u.ri, u.ii, u.ni, u.si, h, u.ei, [0, u.ht, u.ht, 0], h), this.zt.hi && (a.fillStyle = o, a.fillRect(u.ri, u.li, u.ai - u.ri, u.oi)), this.zt._i && (a.fillStyle = e.O, a.fillRect(c.Qt ? u.ui - u.ei : 0, u.ii, u.ei, u.ci - u.ii)), c
      });
    t.useMediaCoordinateSpace(({
      context: l
    }) => {
      const a = r.di;
      l.font = e.R, l.textAlign = r.Qt ? "right" : "left", l.textBaseline = "middle", l.fillStyle = o, l.fillText(this.zt.Kt, a.fi, (a.ii + a.ci) / 2 + a.pi)
    })
  }
  Gt(t, e, i, s) {
    var o;
    const {
      context: h,
      bitmapSize: r,
      mediaSize: l,
      horizontalPixelRatio: a,
      verticalPixelRatio: c
    } = t, u = this.zt.hi || !this.zt.mi ? e.T : 0, d = this.zt.bi ? e.C : 0, m = e.L + this.Xt.wi, f = e.B + this.Xt.gi, p = e.A, g = e.I, _ = this.zt.Kt, S = e.P, L = i.Mi(h, _), j = Math.ceil(i.xi(h, _)), N = S + m + f, M = e.C + p + g + j + u, C = Math.max(1, Math.floor(c));
    let E = Math.round(N * c);
    E % 2 != C % 2 && (E += 1);
    const B = d > 0 ? Math.max(1, Math.floor(d * a)) : 0,
      w = Math.round(M * a),
      I = Math.round(u * a),
      Y = (o = this.Xt.Si) !== null && o !== void 0 ? o : this.Xt.ki,
      ht = Math.round(Y * c) - Math.floor(.5 * c),
      Z = Math.floor(ht + C / 2 - E / 2),
      $ = Z + E,
      W = s === "right",
      O = W ? l.width - d : d,
      P = W ? r.width - B : B;
    let A, G, U;
    return W ? (A = P - w, G = P - I, U = O - u - p - d) : (A = P + w, G = P + I, U = O + u + p), {
      Qt: W,
      Jt: {
        ii: Z,
        li: ht,
        ci: $,
        ni: w,
        si: E,
        ht: 2 * a,
        ei: B,
        ti: A,
        ri: P,
        ai: G,
        oi: C,
        ui: r.width
      },
      di: {
        ii: Z / c,
        ci: $ / c,
        fi: U,
        pi: L
      }
    }
  }
}
class xe {
  constructor(t) {
    this.yi = {
      ki: 0,
      t: "#000",
      gi: 0,
      wi: 0
    }, this.Ci = {
      Kt: "",
      yt: !1,
      hi: !0,
      mi: !1,
      Ot: "",
      V: "#FFF",
      _i: !1,
      bi: !1
    }, this.Ti = {
      Kt: "",
      yt: !1,
      hi: !1,
      mi: !0,
      Ot: "",
      V: "#FFF",
      _i: !0,
      bi: !0
    }, this.ft = !0, this.Pi = new(t || Vi)(this.Ci, this.yi), this.Ri = new(t || Vi)(this.Ti, this.yi)
  }
  Kt() {
    return this.Di(), this.Ci.Kt
  }
  ki() {
    return this.Di(), this.yi.ki
  }
  bt() {
    this.ft = !0
  }
  At(t, e = !1) {
    return Math.max(this.Pi.At(t, e), this.Ri.At(t, e))
  }
  Vi() {
    return this.yi.Si || 0
  }
  Oi(t) {
    this.yi.Si = t
  }
  Bi() {
    return this.Di(), this.Ci.yt || this.Ti.yt
  }
  Ai() {
    return this.Di(), this.Ci.yt
  }
  gt(t) {
    return this.Di(), this.Ci.hi = this.Ci.hi && t.W().ticksVisible, this.Ti.hi = this.Ti.hi && t.W().ticksVisible, this.Pi.J(this.Ci, this.yi), this.Ri.J(this.Ti, this.yi), this.Pi
  }
  Ii() {
    return this.Di(), this.Pi.J(this.Ci, this.yi), this.Ri.J(this.Ti, this.yi), this.Ri
  }
  Di() {
    this.ft && (this.Ci.hi = !0, this.Ti.hi = !1, this.zi(this.Ci, this.Ti, this.yi))
  }
}
class Ko extends xe {
  constructor(t, e, i) {
    super(), this.jt = t, this.Li = e, this.Ei = i
  }
  zi(t, e, i) {
    if (t.yt = !1, this.jt.W().mode === 2) return;
    const s = this.jt.W().horzLine;
    if (!s.labelVisible) return;
    const o = this.Li.Ct();
    if (!this.jt.yt() || this.Li.Ni() || o === null) return;
    const h = ze(s.labelBackgroundColor);
    i.t = h.t, t.V = h.i;
    const r = 2 / 12 * this.Li.P();
    i.wi = r, i.gi = r;
    const l = this.Ei(this.Li);
    i.ki = l.ki, t.Kt = this.Li.Fi(l._t, o), t.yt = !0
  }
}
const Xo = /[1-9]/g;
class Ds {
  constructor() {
    this.zt = null
  }
  J(t) {
    this.zt = t
  }
  X(t, e) {
    if (this.zt === null || this.zt.yt === !1 || this.zt.Kt.length === 0) return;
    const i = t.useMediaCoordinateSpace(({
      context: d
    }) => (d.font = e.R, Math.round(e.Wi.xi(d, b(this.zt).Kt, Xo))));
    if (i <= 0) return;
    const s = e.ji,
      o = i + 2 * s,
      h = o / 2,
      r = this.zt.Hi;
    let l = this.zt.ki,
      a = Math.floor(l - h) + .5;
    a < 0 ? (l += Math.abs(0 - a), a = Math.floor(l - h) + .5) : a + o > r && (l -= Math.abs(r - (a + o)), a = Math.floor(l - h) + .5);
    const c = a + o,
      u = Math.ceil(0 + e.C + e.T + e.L + e.P + e.B);
    t.useBitmapCoordinateSpace(({
      context: d,
      horizontalPixelRatio: m,
      verticalPixelRatio: f
    }) => {
      const p = b(this.zt);
      d.fillStyle = p.t;
      const g = Math.round(a * m),
        _ = Math.round(0 * f),
        S = Math.round(c * m),
        L = Math.round(u * f),
        j = Math.round(2 * m);
      if (d.beginPath(), d.moveTo(g, _), d.lineTo(g, L - j), d.arcTo(g, L, g + j, L, j), d.lineTo(S - j, L), d.arcTo(S, L, S, L - j, j), d.lineTo(S, _), d.fill(), p.hi) {
        const N = Math.round(p.ki * m),
          M = _,
          C = Math.round((M + e.T) * f);
        d.fillStyle = p.V;
        const E = Math.max(1, Math.floor(m)),
          B = Math.floor(.5 * m);
        d.fillRect(N - B, M, E, C - M)
      }
    }), t.useMediaCoordinateSpace(({
      context: d
    }) => {
      const m = b(this.zt),
        f = 0 + e.C + e.T + e.L + e.P / 2;
      d.font = e.R, d.textAlign = "left", d.textBaseline = "middle", d.fillStyle = m.V;
      const p = e.Wi.Mi(d, "Apr0");
      d.translate(a + s, f + p), d.fillText(m.Kt, 0, 0)
    })
  }
}
class Ho {
  constructor(t, e, i) {
    this.ft = !0, this.Wt = new Ds, this.Ft = {
      yt: !1,
      t: "#4c525e",
      V: "white",
      Kt: "",
      Hi: 0,
      ki: NaN,
      hi: !0
    }, this.vt = t, this.$i = e, this.Ei = i
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt.J(this.Ft), this.Wt
  }
  Mt() {
    const t = this.Ft;
    if (t.yt = !1, this.vt.W().mode === 2) return;
    const e = this.vt.W().vertLine;
    if (!e.labelVisible) return;
    const i = this.$i.St();
    if (i.Ni()) return;
    t.Hi = i.Hi();
    const s = this.Ei();
    if (s === null) return;
    t.ki = s.ki;
    const o = i.Ui(this.vt.xt());
    t.Kt = i.qi(b(o)), t.yt = !0;
    const h = ze(e.labelBackgroundColor);
    t.t = h.t, t.V = h.i, t.hi = i.W().ticksVisible
  }
}
class mi {
  constructor() {
    this.Yi = null, this.Zi = 0
  }
  Xi() {
    return this.Zi
  }
  Ki(t) {
    this.Zi = t
  }
  Dt() {
    return this.Yi
  }
  Gi(t) {
    this.Yi = t
  }
  Ji(t) {
    return []
  }
  Qi() {
    return []
  }
  yt() {
    return !0
  }
}
var si;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Magnet = 1] = "Magnet", n[n.Hidden = 2] = "Hidden"
})(si || (si = {}));
class Yo extends mi {
  constructor(t, e) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map, this.hn = !1, this.ln = NaN, this.an = NaN, this._n = NaN, this.un = NaN, this.$i = t, this.cn = e, this.dn = new Oo(t, this), this.fn = ((s, o) => h => {
      const r = o(),
        l = s();
      if (h === b(this.tn).vn()) return {
        _t: l,
        ki: r
      };
      {
        const a = b(h.Ct());
        return {
          _t: h.pn(r, a),
          ki: r
        }
      }
    })(() => this.nn, () => this.an);
    const i = ((s, o) => () => {
      const h = this.$i.St().mn(s()),
        r = o();
      return h && Number.isFinite(r) ? {
        ot: h,
        ki: r
      } : null
    })(() => this.sn, () => this.Yt());
    this.bn = new Ho(this, t, i), this.wn = new Fo(this)
  }
  W() {
    return this.cn
  }
  gn(t, e) {
    this._n = t, this.un = e
  }
  Mn() {
    this._n = NaN, this.un = NaN
  }
  xn() {
    return this._n
  }
  Sn() {
    return this.un
  }
  kn(t, e, i) {
    this.hn || (this.hn = !0), this.en = !0, this.yn(t, e, i)
  }
  xt() {
    return this.sn
  }
  Yt() {
    return this.ln
  }
  Zt() {
    return this.an
  }
  yt() {
    return this.en
  }
  Cn() {
    this.en = !1, this.Tn(), this.nn = NaN, this.ln = NaN, this.an = NaN, this.tn = null, this.Mn()
  }
  Pn(t) {
    return this.tn !== null ? [this.wn, this.dn] : []
  }
  Ut(t) {
    return t === this.tn && this.cn.horzLine.visible
  }
  qt() {
    return this.cn.vertLine.visible
  }
  Rn(t, e) {
    this.en && this.tn === t || this.rn.clear();
    const i = [];
    return this.tn === t && i.push(this.Dn(this.rn, e, this.fn)), i
  }
  Qi() {
    return this.en ? [this.bn] : []
  }
  Ht() {
    return this.tn
  }
  Vn() {
    this.wn.bt(), this.rn.forEach(t => t.bt()), this.bn.bt(), this.dn.bt()
  }
  On(t) {
    return t && !t.vn().Ni() ? t.vn() : null
  }
  yn(t, e, i) {
    this.Bn(t, e, i) && this.Vn()
  }
  Bn(t, e, i) {
    const s = this.ln,
      o = this.an,
      h = this.nn,
      r = this.sn,
      l = this.tn,
      a = this.On(i);
    this.sn = t, this.ln = isNaN(t) ? NaN : this.$i.St().It(t), this.tn = i;
    const c = a !== null ? a.Ct() : null;
    return a !== null && c !== null ? (this.nn = e, this.an = a.Rt(e, c)) : (this.nn = NaN, this.an = NaN), s !== this.ln || o !== this.an || r !== this.sn || h !== this.nn || l !== this.tn
  }
  Tn() {
    const t = this.$i.wt().map(i => i.In().An()).filter(Wo),
      e = t.length === 0 ? null : Math.max(...t);
    this.sn = e !== null ? e : NaN
  }
  Dn(t, e, i) {
    let s = t.get(e);
    return s === void 0 && (s = new Ko(this, e, i), t.set(e, s)), s
  }
}

function Ee(n) {
  return n === "left" || n === "right"
}
class et {
  constructor(t) {
    this.zn = new Map, this.Ln = [], this.En = t
  }
  Nn(t, e) {
    const i = function(s, o) {
      return s === void 0 ? o : {
        Fn: Math.max(s.Fn, o.Fn),
        Wn: s.Wn || o.Wn
      }
    }(this.zn.get(t), e);
    this.zn.set(t, i)
  }
  jn() {
    return this.En
  }
  Hn(t) {
    const e = this.zn.get(t);
    return e === void 0 ? {
      Fn: this.En
    } : {
      Fn: Math.max(this.En, e.Fn),
      Wn: e.Wn
    }
  }
  $n() {
    this.Un(), this.Ln = [{
      qn: 0
    }]
  }
  Yn(t) {
    this.Un(), this.Ln = [{
      qn: 1,
      Vt: t
    }]
  }
  Zn(t) {
    this.Xn(), this.Ln.push({
      qn: 5,
      Vt: t
    })
  }
  Un() {
    this.Xn(), this.Ln.push({
      qn: 6
    })
  }
  Kn() {
    this.Un(), this.Ln = [{
      qn: 4
    }]
  }
  Gn(t) {
    this.Un(), this.Ln.push({
      qn: 2,
      Vt: t
    })
  }
  Jn(t) {
    this.Un(), this.Ln.push({
      qn: 3,
      Vt: t
    })
  }
  Qn() {
    return this.Ln
  }
  ts(t) {
    for (const e of t.Ln) this.ns(e);
    this.En = Math.max(this.En, t.En), t.zn.forEach((e, i) => {
      this.Nn(i, e)
    })
  }
  static ss() {
    return new et(2)
  }
  static es() {
    return new et(3)
  }
  ns(t) {
    switch (t.qn) {
      case 0:
        this.$n();
        break;
      case 1:
        this.Yn(t.Vt);
        break;
      case 2:
        this.Gn(t.Vt);
        break;
      case 3:
        this.Jn(t.Vt);
        break;
      case 4:
        this.Kn();
        break;
      case 5:
        this.Zn(t.Vt);
        break;
      case 6:
        this.Xn()
    }
  }
  Xn() {
    const t = this.Ln.findIndex(e => e.qn === 5);
    t !== -1 && this.Ln.splice(t, 1)
  }
}
const Ri = ".";

function wt(n, t) {
  if (!vt(n)) return "n/a";
  if (!te(t)) throw new TypeError("invalid length");
  if (t < 0 || t > 16) throw new TypeError("invalid length");
  return t === 0 ? n.toString() : ("0000000000000000" + n.toString()).slice(-t)
}
class Te {
  constructor(t, e) {
    if (e || (e = 1), vt(t) && te(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Li = t, this.rs = e, this.hs()
  }
  format(t) {
    const e = t < 0 ? "−" : "";
    return t = Math.abs(t), e + this.ls(t)
  }
  hs() {
    if (this.os = 0, this.Li > 0 && this.rs > 0) {
      let t = this.Li;
      for (; t > 1;) t /= 10, this.os++
    }
  }
  ls(t) {
    const e = this.Li / this.rs;
    let i = Math.floor(t),
      s = "";
    const o = this.os !== void 0 ? this.os : NaN;
    if (e > 1) {
      let h = +(Math.round(t * e) - i * e).toFixed(this.os);
      h >= e && (h -= e, i += 1), s = Ri + wt(+h.toFixed(this.os) * this.rs, o)
    } else i = Math.round(i * e) / e, o > 0 && (s = Ri + wt(0, o));
    return i.toFixed(0) + s
  }
}
class Ns extends Te {
  constructor(t = 100) {
    super(t)
  }
  format(t) {
    return `${super.format(t)}%`
  }
}
class Zo {
  constructor(t) {
    this._s = t
  }
  format(t) {
    let e = "";
    return t < 0 && (e = "-", t = -t), t < 995 ? e + this.us(t) : t < 999995 ? e + this.us(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), e + this.us(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), e + this.us(t / 1e9) + "B")
  }
  us(t) {
    let e;
    const i = Math.pow(10, this._s);
    return e = (t = Math.round(t * i) / i) >= 1e-15 && t < 1 ? t.toFixed(this._s).replace(/\.?0+$/, "") : String(t), e.replace(/(\.[1-9]*)0+$/, (s, o) => o)
  }
}

function Os(n, t, e, i, s, o, h) {
  if (t.length === 0 || i.from >= t.length || i.to <= 0) return;
  const {
    context: r,
    horizontalPixelRatio: l,
    verticalPixelRatio: a
  } = n, c = t[i.from];
  let u = o(n, c),
    d = c;
  if (i.to - i.from < 2) {
    const m = s / 2;
    r.beginPath();
    const f = {
        nt: c.nt - m,
        st: c.st
      },
      p = {
        nt: c.nt + m,
        st: c.st
      };
    r.moveTo(f.nt * l, f.st * a), r.lineTo(p.nt * l, p.st * a), h(n, u, f, p)
  } else {
    const m = (p, g) => {
      h(n, u, d, g), r.beginPath(), u = p, d = g
    };
    let f = d;
    r.beginPath(), r.moveTo(c.nt * l, c.st * a);
    for (let p = i.from + 1; p < i.to; ++p) {
      f = t[p];
      const g = o(n, f);
      switch (e) {
        case 0:
          r.lineTo(f.nt * l, f.st * a);
          break;
        case 1:
          r.lineTo(f.nt * l, t[p - 1].st * a), g !== u && (m(g, f), r.lineTo(f.nt * l, t[p - 1].st * a)), r.lineTo(f.nt * l, f.st * a);
          break;
        case 2: {
          const [_, S] = Go(t, p - 1, p);
          r.bezierCurveTo(_.nt * l, _.st * a, S.nt * l, S.st * a, f.nt * l, f.st * a);
          break
        }
      }
      e !== 1 && g !== u && (m(g, f), r.moveTo(f.nt * l, f.st * a))
    }(d !== f || d === f && e === 1) && h(n, u, d, f)
  }
}
const Ii = 6;

function Pe(n, t) {
  return {
    nt: n.nt - t.nt,
    st: n.st - t.st
  }
}

function Wi(n, t) {
  return {
    nt: n.nt / t,
    st: n.st / t
  }
}

function Go(n, t, e) {
  const i = Math.max(0, t - 1),
    s = Math.min(n.length - 1, e + 1);
  var o, h;
  return [(o = n[t], h = Wi(Pe(n[e], n[i]), Ii), {
    nt: o.nt + h.nt,
    st: o.st + h.st
  }), Pe(n[e], Wi(Pe(n[s], n[t]), Ii))]
}

function qo(n, t, e, i, s) {
  const {
    context: o,
    horizontalPixelRatio: h,
    verticalPixelRatio: r
  } = t;
  o.lineTo(s.nt * h, n * r), o.lineTo(i.nt * h, n * r), o.closePath(), o.fillStyle = e, o.fill()
}
class Us extends mt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K(t) {
    var e;
    if (this.G === null) return;
    const {
      it: i,
      tt: s,
      cs: o,
      et: h,
      Nt: r,
      ds: l
    } = this.G, a = (e = this.G.fs) !== null && e !== void 0 ? e : this.G.vs ? 0 : t.mediaSize.height;
    if (s === null) return;
    const c = t.context;
    c.lineCap = "butt", c.lineJoin = "round", c.lineWidth = h, Tt(c, r), c.lineWidth = 1, Os(t, i, l, s, o, this.ps.bind(this), qo.bind(null, a))
  }
}

function ni(n, t, e) {
  return Math.min(Math.max(n, t), e)
}

function le(n, t, e) {
  return t - n <= e
}

function Fs(n) {
  const t = Math.ceil(n);
  return t % 2 == 0 ? t - 1 : t
}
class pi {
  bs(t, e) {
    const i = this.ws,
      {
        gs: s,
        Ms: o,
        xs: h,
        Ss: r,
        ks: l,
        fs: a
      } = e;
    if (this.ys === void 0 || i === void 0 || i.gs !== s || i.Ms !== o || i.xs !== h || i.Ss !== r || i.fs !== a || i.ks !== l) {
      const c = t.context.createLinearGradient(0, 0, 0, l);
      if (c.addColorStop(0, s), a != null) {
        const u = ni(a * t.verticalPixelRatio / l, 0, 1);
        c.addColorStop(u, o), c.addColorStop(u, h)
      }
      c.addColorStop(1, r), this.ys = c, this.ws = e
    }
    return this.ys
  }
}
class Qo extends Us {
  constructor() {
    super(...arguments), this.Cs = new pi
  }
  ps(t, e) {
    return this.Cs.bs(t, {
      gs: e.Ts,
      Ms: "",
      xs: "",
      Ss: e.Ps,
      ks: t.bitmapSize.height
    })
  }
}

function th(n, t) {
  const e = n.context;
  e.strokeStyle = t, e.stroke()
}
class Js extends mt {
  constructor() {
    super(...arguments), this.G = null
  }
  J(t) {
    this.G = t
  }
  K(t) {
    if (this.G === null) return;
    const {
      it: e,
      tt: i,
      cs: s,
      ds: o,
      et: h,
      Nt: r,
      Rs: l
    } = this.G;
    if (i === null) return;
    const a = t.context;
    a.lineCap = "butt", a.lineWidth = h * t.verticalPixelRatio, Tt(a, r), a.lineJoin = "round";
    const c = this.Ds.bind(this);
    o !== void 0 && Os(t, e, o, i, s, c, th), l && function(u, d, m, f, p) {
      const {
        horizontalPixelRatio: g,
        verticalPixelRatio: _,
        context: S
      } = u;
      let L = null;
      const j = Math.max(1, Math.floor(g)) % 2 / 2,
        N = m * _ + j;
      for (let M = f.to - 1; M >= f.from; --M) {
        const C = d[M];
        if (C) {
          const E = p(u, C);
          E !== L && (S.beginPath(), L !== null && S.fill(), S.fillStyle = E, L = E);
          const B = Math.round(C.nt * g) + j,
            w = C.st * _;
          S.moveTo(B, w), S.arc(B, w, N, 0, 2 * Math.PI)
        }
      }
      S.fill()
    }(t, e, l, i, c)
  }
}
class Ks extends Js {
  Ds(t, e) {
    return e.lt
  }
}

function Xs(n, t, e, i, s = 0, o = t.length) {
  let h = o - s;
  for (; 0 < h;) {
    const r = h >> 1,
      l = s + r;
    i(t[l], e) === n ? (s = l + 1, h -= r + 1) : h = r
  }
  return s
}
const oe = Xs.bind(null, !0),
  Hs = Xs.bind(null, !1);

function eh(n, t) {
  return n.ot < t
}

function ih(n, t) {
  return t < n.ot
}

function Ys(n, t, e) {
  const i = t.Vs(),
    s = t.ui(),
    o = oe(n, i, eh),
    h = Hs(n, s, ih);
  if (!e) return {
    from: o,
    to: h
  };
  let r = o,
    l = h;
  return o > 0 && o < n.length && n[o].ot >= i && (r = o - 1), h > 0 && h < n.length && n[h - 1].ot <= s && (l = h + 1), {
    from: r,
    to: l
  }
}
class vi {
  constructor(t, e, i) {
    this.Os = !0, this.Bs = !0, this.As = !0, this.Is = [], this.zs = null, this.Ls = t, this.Es = e, this.Ns = i
  }
  bt(t) {
    this.Os = !0, t === "data" && (this.Bs = !0), t === "options" && (this.As = !0)
  }
  gt() {
    return this.Ls.yt() ? (this.Fs(), this.zs === null ? null : this.Ws) : null
  }
  js() {
    this.Is = this.Is.map(t => Object.assign(Object.assign({}, t), this.Ls.$s().Hs(t.ot)))
  }
  Us() {
    this.zs = null
  }
  Fs() {
    this.Bs && (this.qs(), this.Bs = !1), this.As && (this.js(), this.As = !1), this.Os && (this.Ys(), this.Os = !1)
  }
  Ys() {
    const t = this.Ls.Dt(),
      e = this.Es.St();
    if (this.Us(), e.Ni() || t.Ni()) return;
    const i = e.Zs();
    if (i === null || this.Ls.In().Xs() === 0) return;
    const s = this.Ls.Ct();
    s !== null && (this.zs = Ys(this.Is, i, this.Ns), this.Ks(t, e, s.Vt), this.Gs())
  }
}
class $e extends vi {
  constructor(t, e) {
    super(t, e, !0)
  }
  Ks(t, e, i) {
    e.Js(this.Is, ee(this.zs)), t.Qs(this.Is, i, ee(this.zs))
  }
  te(t, e) {
    return {
      ot: t,
      _t: e,
      nt: NaN,
      st: NaN
    }
  }
  qs() {
    const t = this.Ls.$s();
    this.Is = this.Ls.In().ie().map(e => {
      const i = e.Vt[3];
      return this.ne(e.se, i, t)
    })
  }
}
class sh extends $e {
  constructor(t, e) {
    super(t, e), this.Ws = new fi, this.ee = new Qo, this.re = new Ks, this.Ws.Z([this.ee, this.re])
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W();
    this.ee.J({
      ds: t.lineType,
      it: this.Is,
      Nt: t.lineStyle,
      et: t.lineWidth,
      fs: null,
      vs: t.invertFilledArea,
      tt: this.zs,
      cs: this.Es.St().he()
    }), this.re.J({
      ds: t.lineVisible ? t.lineType : void 0,
      it: this.Is,
      Nt: t.lineStyle,
      et: t.lineWidth,
      tt: this.zs,
      cs: this.Es.St().he(),
      Rs: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0
    })
  }
}
class nh extends mt {
  constructor() {
    super(...arguments), this.zt = null, this.le = 0, this.ae = 0
  }
  J(t) {
    this.zt = t
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    this.le = this.oe(e), this.le >= 2 && Math.max(1, Math.floor(e)) % 2 != this.le % 2 && this.le--, this.ae = this.zt._e ? Math.min(this.le, Math.floor(e)) : this.le;
    let s = null;
    const o = this.ae <= this.le && this.zt.he >= Math.floor(1.5 * e);
    for (let h = this.zt.tt.from; h < this.zt.tt.to; ++h) {
      const r = this.zt.In[h];
      s !== r.ue && (t.fillStyle = r.ue, s = r.ue);
      const l = Math.floor(.5 * this.ae),
        a = Math.round(r.nt * e),
        c = a - l,
        u = this.ae,
        d = c + u - 1,
        m = Math.min(r.ce, r.de),
        f = Math.max(r.ce, r.de),
        p = Math.round(m * i) - l,
        g = Math.round(f * i) + l,
        _ = Math.max(g - p, this.ae);
      t.fillRect(c, p, u, _);
      const S = Math.ceil(1.5 * this.le);
      if (o) {
        if (this.zt.fe) {
          const M = a - S;
          let C = Math.max(p, Math.round(r.ve * i) - l),
            E = C + u - 1;
          E > p + _ - 1 && (E = p + _ - 1, C = E - u + 1), t.fillRect(M, C, c - M, E - C + 1)
        }
        const L = a + S;
        let j = Math.max(p, Math.round(r.pe * i) - l),
          N = j + u - 1;
        N > p + _ - 1 && (N = p + _ - 1, j = N - u + 1), t.fillRect(d + 1, j, L - d, N - j + 1)
      }
    }
  }
  oe(t) {
    const e = Math.floor(t);
    return Math.max(e, Math.floor(function(i, s) {
      return Math.floor(.3 * i * s)
    }(b(this.zt).he, t)))
  }
}
class Zs extends vi {
  constructor(t, e) {
    super(t, e, !1)
  }
  Ks(t, e, i) {
    e.Js(this.Is, ee(this.zs)), t.me(this.Is, i, ee(this.zs))
  }
  be(t, e, i) {
    return {
      ot: t,
      we: e.Vt[0],
      ge: e.Vt[1],
      Me: e.Vt[2],
      xe: e.Vt[3],
      nt: NaN,
      ve: NaN,
      ce: NaN,
      de: NaN,
      pe: NaN
    }
  }
  qs() {
    const t = this.Ls.$s();
    this.Is = this.Ls.In().ie().map(e => this.ne(e.se, e, t))
  }
}
class oh extends Zs {
  constructor() {
    super(...arguments), this.Ws = new nh
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.be(t, e, i)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W();
    this.Ws.J({
      In: this.Is,
      he: this.Es.St().he(),
      fe: t.openVisible,
      _e: t.thinBars,
      tt: this.zs
    })
  }
}
class hh extends Us {
  constructor() {
    super(...arguments), this.Cs = new pi
  }
  ps(t, e) {
    const i = this.G;
    return this.Cs.bs(t, {
      gs: e.Se,
      Ms: e.ke,
      xs: e.ye,
      Ss: e.Ce,
      ks: t.bitmapSize.height,
      fs: i.fs
    })
  }
}
class rh extends Js {
  constructor() {
    super(...arguments), this.Te = new pi
  }
  Ds(t, e) {
    const i = this.G;
    return this.Te.bs(t, {
      gs: e.Pe,
      Ms: e.Pe,
      xs: e.Re,
      Ss: e.Re,
      ks: t.bitmapSize.height,
      fs: i.fs
    })
  }
}
class lh extends $e {
  constructor(t, e) {
    super(t, e), this.Ws = new fi, this.De = new hh, this.Ve = new rh, this.Ws.Z([this.De, this.Ve])
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.Ct();
    if (t === null) return;
    const e = this.Ls.W(),
      i = this.Ls.Dt().Rt(e.baseValue.price, t.Vt),
      s = this.Es.St().he();
    this.De.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineType,
      fs: i,
      vs: !1,
      tt: this.zs,
      cs: s
    }), this.Ve.J({
      it: this.Is,
      et: e.lineWidth,
      Nt: e.lineStyle,
      ds: e.lineVisible ? e.lineType : void 0,
      Rs: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0,
      fs: i,
      tt: this.zs,
      cs: s
    })
  }
}
class ah extends mt {
  constructor() {
    super(...arguments), this.zt = null, this.le = 0
  }
  J(t) {
    this.zt = t
  }
  K(t) {
    if (this.zt === null || this.zt.In.length === 0 || this.zt.tt === null) return;
    const {
      horizontalPixelRatio: e
    } = t;
    this.le = function(o, h) {
      if (o >= 2.5 && o <= 4) return Math.floor(3 * h);
      const r = 1 - .2 * Math.atan(Math.max(4, o) - 4) / (.5 * Math.PI),
        l = Math.floor(o * r * h),
        a = Math.floor(o * h),
        c = Math.min(l, a);
      return Math.max(Math.floor(h), c)
    }(this.zt.he, e), this.le >= 2 && Math.floor(e) % 2 != this.le % 2 && this.le--;
    const i = this.zt.In;
    this.zt.Oe && this.Be(t, i, this.zt.tt), this.zt._i && this.Ae(t, i, this.zt.tt);
    const s = this.Ie(e);
    (!this.zt._i || this.le > 2 * s) && this.ze(t, i, this.zt.tt)
  }
  Be(t, e, i) {
    if (this.zt === null) return;
    const {
      context: s,
      horizontalPixelRatio: o,
      verticalPixelRatio: h
    } = t;
    let r = "",
      l = Math.min(Math.floor(o), Math.floor(this.zt.he * o));
    l = Math.max(Math.floor(o), Math.min(l, this.le));
    const a = Math.floor(.5 * l);
    let c = null;
    for (let u = i.from; u < i.to; u++) {
      const d = e[u];
      d.Le !== r && (s.fillStyle = d.Le, r = d.Le);
      const m = Math.round(Math.min(d.ve, d.pe) * h),
        f = Math.round(Math.max(d.ve, d.pe) * h),
        p = Math.round(d.ce * h),
        g = Math.round(d.de * h);
      let _ = Math.round(o * d.nt) - a;
      const S = _ + l - 1;
      c !== null && (_ = Math.max(c + 1, _), _ = Math.min(_, S));
      const L = S - _ + 1;
      s.fillRect(_, p, L, m - p), s.fillRect(_, f + 1, L, g - f), c = S
    }
  }
  Ie(t) {
    let e = Math.floor(1 * t);
    this.le <= 2 * e && (e = Math.floor(.5 * (this.le - 1)));
    const i = Math.max(Math.floor(t), e);
    return this.le <= 2 * i ? Math.max(Math.floor(t), Math.floor(1 * t)) : i
  }
  Ae(t, e, i) {
    if (this.zt === null) return;
    const {
      context: s,
      horizontalPixelRatio: o,
      verticalPixelRatio: h
    } = t;
    let r = "";
    const l = this.Ie(o);
    let a = null;
    for (let c = i.from; c < i.to; c++) {
      const u = e[c];
      u.Ee !== r && (s.fillStyle = u.Ee, r = u.Ee);
      let d = Math.round(u.nt * o) - Math.floor(.5 * this.le);
      const m = d + this.le - 1,
        f = Math.round(Math.min(u.ve, u.pe) * h),
        p = Math.round(Math.max(u.ve, u.pe) * h);
      if (a !== null && (d = Math.max(a + 1, d), d = Math.min(d, m)), this.zt.he * o > 2 * l) Jo(s, d, f, m - d + 1, p - f + 1, l);
      else {
        const g = m - d + 1;
        s.fillRect(d, f, g, p - f + 1)
      }
      a = m
    }
  }
  ze(t, e, i) {
    if (this.zt === null) return;
    const {
      context: s,
      horizontalPixelRatio: o,
      verticalPixelRatio: h
    } = t;
    let r = "";
    const l = this.Ie(o);
    for (let a = i.from; a < i.to; a++) {
      const c = e[a];
      let u = Math.round(Math.min(c.ve, c.pe) * h),
        d = Math.round(Math.max(c.ve, c.pe) * h),
        m = Math.round(c.nt * o) - Math.floor(.5 * this.le),
        f = m + this.le - 1;
      if (c.ue !== r) {
        const p = c.ue;
        s.fillStyle = p, r = p
      }
      this.zt._i && (m += l, u += l, f -= l, d -= l), u > d || s.fillRect(m, u, f - m + 1, d - u + 1)
    }
  }
}
class ch extends Zs {
  constructor() {
    super(...arguments), this.Ws = new ah
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.be(t, e, i)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W();
    this.Ws.J({
      In: this.Is,
      he: this.Es.St().he(),
      Oe: t.wickVisible,
      _i: t.borderVisible,
      tt: this.zs
    })
  }
}
class uh {
  constructor(t, e) {
    this.Ne = t, this.Li = e
  }
  X(t, e, i) {
    this.Ne.draw(t, this.Li, e, i)
  }
}
class Ve extends vi {
  constructor(t, e, i) {
    super(t, e, !1), this.wn = i, this.Ws = new uh(this.wn.renderer(), s => {
      const o = t.Ct();
      return o === null ? null : t.Dt().Rt(s, o.Vt)
    })
  }
  Fe(t) {
    return this.wn.priceValueBuilder(t)
  }
  We(t) {
    return this.wn.isWhitespace(t)
  }
  qs() {
    const t = this.Ls.$s();
    this.Is = this.Ls.In().ie().map(e => Object.assign(Object.assign({
      ot: e.se,
      nt: NaN
    }, t.Hs(e.se)), {
      je: e.He
    }))
  }
  Ks(t, e) {
    e.Js(this.Is, ee(this.zs))
  }
  Gs() {
    this.wn.update({
      bars: this.Is.map(dh),
      barSpacing: this.Es.St().he(),
      visibleRange: this.zs
    }, this.Ls.W())
  }
}

function dh(n) {
  return {
    x: n.nt,
    time: n.ot,
    originalData: n.je,
    barColor: n.ue
  }
}
class fh extends mt {
  constructor() {
    super(...arguments), this.zt = null, this.$e = []
  }
  J(t) {
    this.zt = t, this.$e = []
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return;
    this.$e.length || this.Ue(e);
    const s = Math.max(1, Math.floor(i)),
      o = Math.round(this.zt.qe * i) - Math.floor(s / 2),
      h = o + s;
    for (let r = this.zt.tt.from; r < this.zt.tt.to; r++) {
      const l = this.zt.it[r],
        a = this.$e[r - this.zt.tt.from],
        c = Math.round(l.st * i);
      let u, d;
      t.fillStyle = l.ue, c <= o ? (u = c, d = h) : (u = o, d = c - Math.floor(s / 2) + s), t.fillRect(a.Vs, u, a.ui - a.Vs + 1, d - u)
    }
  }
  Ue(t) {
    if (this.zt === null || this.zt.it.length === 0 || this.zt.tt === null) return void(this.$e = []);
    const e = Math.ceil(this.zt.he * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
      i = Math.round(this.zt.he * t) - e;
    this.$e = new Array(this.zt.tt.to - this.zt.tt.from);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const h = this.zt.it[o],
        r = Math.round(h.nt * t);
      let l, a;
      if (i % 2) {
        const c = (i - 1) / 2;
        l = r - c, a = r + c
      } else {
        const c = i / 2;
        l = r - c, a = r + c - 1
      }
      this.$e[o - this.zt.tt.from] = {
        Vs: l,
        ui: a,
        Ye: r,
        Ze: h.nt * t,
        ot: h.ot
      }
    }
    for (let o = this.zt.tt.from + 1; o < this.zt.tt.to; o++) {
      const h = this.$e[o - this.zt.tt.from],
        r = this.$e[o - this.zt.tt.from - 1];
      h.ot === r.ot + 1 && h.Vs - r.ui !== e + 1 && (r.Ye > r.Ze ? r.ui = h.Vs - e - 1 : h.Vs = r.ui + e + 1)
    }
    let s = Math.ceil(this.zt.he * t);
    for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
      const h = this.$e[o - this.zt.tt.from];
      h.ui < h.Vs && (h.ui = h.Vs);
      const r = h.ui - h.Vs + 1;
      s = Math.min(r, s)
    }
    if (e > 0 && s < 4)
      for (let o = this.zt.tt.from; o < this.zt.tt.to; o++) {
        const h = this.$e[o - this.zt.tt.from];
        h.ui - h.Vs + 1 > s && (h.Ye > h.Ze ? h.ui -= 1 : h.Vs += 1)
      }
  }
}
class mh extends $e {
  constructor() {
    super(...arguments), this.Ws = new fh
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = {
      it: this.Is,
      he: this.Es.St().he(),
      tt: this.zs,
      qe: this.Ls.Dt().Rt(this.Ls.W().base, b(this.Ls.Ct()).Vt)
    };
    this.Ws.J(t)
  }
}
class ph extends $e {
  constructor() {
    super(...arguments), this.Ws = new Ks
  }
  ne(t, e, i) {
    return Object.assign(Object.assign({}, this.te(t, e)), i.Hs(t))
  }
  Gs() {
    const t = this.Ls.W(),
      e = {
        it: this.Is,
        Nt: t.lineStyle,
        ds: t.lineVisible ? t.lineType : void 0,
        et: t.lineWidth,
        Rs: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
        tt: this.zs,
        cs: this.Es.St().he()
      };
    this.Ws.J(e)
  }
}
const vh = /[2-9]/g;
class ie {
  constructor(t = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Je = {}, this.Qe = new Map, this.tr = t
  }
  ir() {
    this.Xe = 0, this.Qe.clear(), this.Ke = 1, this.Ge = 1, this.Je = {}
  }
  xi(t, e, i) {
    return this.nr(t, e, i).width
  }
  Mi(t, e, i) {
    const s = this.nr(t, e, i);
    return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2
  }
  nr(t, e, i) {
    const s = i || vh,
      o = String(e).replace(s, "0");
    if (this.Qe.has(o)) return nt(this.Qe.get(o)).sr;
    if (this.Xe === this.tr) {
      const r = this.Je[this.Ge];
      delete this.Je[this.Ge], this.Qe.delete(r), this.Ge++, this.Xe--
    }
    t.save(), t.textBaseline = "middle";
    const h = t.measureText(o);
    return t.restore(), h.width === 0 && e.length || (this.Qe.set(o, {
      sr: h,
      er: this.Ke
    }), this.Je[this.Ke] = o, this.Xe++, this.Ke++), h
  }
}
class bh {
  constructor(t) {
    this.rr = null, this.k = null, this.hr = "right", this.lr = t
  }
  ar(t, e, i) {
    this.rr = t, this.k = e, this.hr = i
  }
  X(t) {
    this.k !== null && this.rr !== null && this.rr.X(t, this.k, this.lr, this.hr)
  }
}
class Gs {
  constructor(t, e, i) {
    this._r = t, this.lr = new ie(50), this.ur = e, this.F = i, this.j = -1, this.Wt = new bh(this.lr)
  }
  gt() {
    const t = this.F.cr(this.ur);
    if (t === null) return null;
    const e = t.dr(this.ur) ? t.vr() : this.ur.Dt();
    if (e === null) return null;
    const i = t.pr(e);
    if (i === "overlay") return null;
    const s = this.F.mr();
    return s.P !== this.j && (this.j = s.P, this.lr.ir()), this.Wt.ar(this._r.Ii(), s, i), this.Wt
  }
}
class gh extends mt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  br(t, e) {
    var i;
    if (!(!((i = this.zt) === null || i === void 0) && i.yt)) return null;
    const {
      st: s,
      et: o,
      wr: h
    } = this.zt;
    return e >= s - o - 7 && e <= s + o + 7 ? {
      gr: this.zt,
      wr: h
    } : null
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (this.zt === null || this.zt.yt === !1) return;
    const o = Math.round(this.zt.st * s);
    o < 0 || o > e.height || (t.lineCap = "butt", t.strokeStyle = this.zt.V, t.lineWidth = Math.floor(this.zt.et * i), Tt(t, this.zt.Nt), Is(t, o, 0, e.width))
  }
}
class bi {
  constructor(t) {
    this.Mr = {
      st: 0,
      V: "rgba(0, 0, 0, 0)",
      et: 1,
      Nt: 0,
      yt: !1
    }, this.Sr = new gh, this.ft = !0, this.Ls = t, this.Es = t.$t(), this.Sr.J(this.Mr)
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.Ls.yt() ? (this.ft && (this.kr(), this.ft = !1), this.Sr) : null
  }
}
class _h extends bi {
  constructor(t) {
    super(t)
  }
  kr() {
    this.Mr.yt = !1;
    const t = this.Ls.Dt(),
      e = t.yr().yr;
    if (e !== 2 && e !== 3) return;
    const i = this.Ls.W();
    if (!i.baseLineVisible || !this.Ls.yt()) return;
    const s = this.Ls.Ct();
    s !== null && (this.Mr.yt = !0, this.Mr.st = t.Rt(s.Vt, s.Vt), this.Mr.V = i.baseLineColor, this.Mr.et = i.baseLineWidth, this.Mr.Nt = i.baseLineStyle)
  }
}
class wh extends mt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  He() {
    return this.zt
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }) {
    const s = this.zt;
    if (s === null) return;
    const o = Math.max(1, Math.floor(e)),
      h = o % 2 / 2,
      r = Math.round(s.Ze.x * e) + h,
      l = s.Ze.y * i;
    t.fillStyle = s.Cr, t.beginPath();
    const a = Math.max(2, 1.5 * s.Tr) * e;
    t.arc(r, l, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = s.Pr, t.beginPath(), t.arc(r, l, s.ht * e, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = o, t.strokeStyle = s.Rr, t.beginPath(), t.arc(r, l, s.ht * e + o / 2, 0, 2 * Math.PI, !1), t.stroke()
  }
}
const yh = [{
  Dr: 0,
  Vr: .25,
  Or: 4,
  Br: 10,
  Ar: .25,
  Ir: 0,
  zr: .4,
  Lr: .8
}, {
  Dr: .25,
  Vr: .525,
  Or: 10,
  Br: 14,
  Ar: 0,
  Ir: 0,
  zr: .8,
  Lr: 0
}, {
  Dr: .525,
  Vr: 1,
  Or: 14,
  Br: 14,
  Ar: 0,
  Ir: 0,
  zr: 0,
  Lr: 0
}];

function Bi(n, t, e, i) {
  return function(s, o) {
    if (s === "transparent") return s;
    const h = Qt(s),
      r = h[3];
    return `rgba(${h[0]}, ${h[1]}, ${h[2]}, ${o*r})`
  }(n, e + (i - e) * t)
}

function Ai(n, t) {
  const e = n % 2600 / 2600;
  let i;
  for (const l of yh)
    if (e >= l.Dr && e <= l.Vr) {
      i = l;
      break
    } kt(i !== void 0, "Last price animation internal logic error");
  const s = (e - i.Dr) / (i.Vr - i.Dr);
  return {
    Pr: Bi(t, s, i.Ar, i.Ir),
    Rr: Bi(t, s, i.zr, i.Lr),
    ht: (o = s, h = i.Or, r = i.Br, h + (r - h) * o)
  };
  var o, h, r
}
class Mh {
  constructor(t) {
    this.Wt = new wh, this.ft = !0, this.Er = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
  }
  jr() {
    this.Fr = this.Nr - 1, this.bt()
  }
  Hr() {
    if (this.bt(), this.Wr.W().lastPriceAnimation === 2) {
      const t = performance.now(),
        e = this.Fr - t;
      if (e > 0) return void(e < 650 && (this.Fr += 2600));
      this.Nr = t, this.Fr = t + 2600
    }
  }
  bt() {
    this.ft = !0
  }
  $r() {
    this.Er = !0
  }
  yt() {
    return this.Wr.W().lastPriceAnimation !== 0
  }
  Ur() {
    switch (this.Wr.W().lastPriceAnimation) {
      case 0:
        return !1;
      case 1:
        return !0;
      case 2:
        return performance.now() <= this.Fr
    }
  }
  gt() {
    return this.ft ? (this.Mt(), this.ft = !1, this.Er = !1) : this.Er && (this.qr(), this.Er = !1), this.Wt
  }
  Mt() {
    this.Wt.J(null);
    const t = this.Wr.$t().St(),
      e = t.Zs(),
      i = this.Wr.Ct();
    if (e === null || i === null) return;
    const s = this.Wr.Yr(!0);
    if (s.Zr || !e.Xr(s.se)) return;
    const o = {
        x: t.It(s.se),
        y: this.Wr.Dt().Rt(s._t, i.Vt)
      },
      h = s.V,
      r = this.Wr.W().lineWidth,
      l = Ai(this.Kr(), h);
    this.Wt.J({
      Cr: h,
      Tr: r,
      Pr: l.Pr,
      Rr: l.Rr,
      ht: l.ht,
      Ze: o
    })
  }
  qr() {
    const t = this.Wt.He();
    if (t !== null) {
      const e = Ai(this.Kr(), t.Cr);
      t.Pr = e.Pr, t.Rr = e.Rr, t.ht = e.ht
    }
  }
  Kr() {
    return this.Ur() ? performance.now() - this.Nr : 2599
  }
}

function Ht(n, t) {
  return Fs(Math.min(Math.max(n, 12), 30) * t)
}

function se(n, t) {
  switch (n) {
    case "arrowDown":
    case "arrowUp":
      return Ht(t, 1);
    case "circle":
      return Ht(t, .8);
    case "square":
      return Ht(t, .7)
  }
}

function qs(n) {
  return function(t) {
    const e = Math.ceil(t);
    return e % 2 != 0 ? e - 1 : e
  }(Ht(n, 1))
}

function Di(n) {
  return Math.max(Ht(n, .1), 3)
}

function Ni(n, t, e) {
  return t ? n : e ? Math.ceil(n / 2) : 0
}

function Qs(n, t, e, i, s) {
  const o = se("square", e),
    h = (o - 1) / 2,
    r = n - h,
    l = t - h;
  return i >= r && i <= r + o && s >= l && s <= l + o
}

function Oi(n, t, e, i) {
  const s = (se("arrowUp", i) - 1) / 2 * e.Gr,
    o = (Fs(i / 2) - 1) / 2 * e.Gr;
  t.beginPath(), n ? (t.moveTo(e.nt - s, e.st), t.lineTo(e.nt, e.st - s), t.lineTo(e.nt + s, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st + s), t.lineTo(e.nt - o, e.st + s), t.lineTo(e.nt - o, e.st)) : (t.moveTo(e.nt - s, e.st), t.lineTo(e.nt, e.st + s), t.lineTo(e.nt + s, e.st), t.lineTo(e.nt + o, e.st), t.lineTo(e.nt + o, e.st - s), t.lineTo(e.nt - o, e.st - s), t.lineTo(e.nt - o, e.st)), t.fill()
}

function Sh(n, t, e, i, s, o) {
  return Qs(t, e, i, s, o)
}
class Ch extends mt {
  constructor() {
    super(...arguments), this.zt = null, this.lr = new ie, this.j = -1, this.H = "", this.Jr = ""
  }
  J(t) {
    this.zt = t
  }
  ar(t, e) {
    this.j === t && this.H === e || (this.j = t, this.H = e, this.Jr = Nt(t, e), this.lr.ir())
  }
  br(t, e) {
    if (this.zt === null || this.zt.tt === null) return null;
    for (let i = this.zt.tt.from; i < this.zt.tt.to; i++) {
      const s = this.zt.it[i];
      if (jh(s, t, e)) return {
        gr: s.Qr,
        wr: s.wr
      }
    }
    return null
  }
  K({
    context: t,
    horizontalPixelRatio: e,
    verticalPixelRatio: i
  }, s, o) {
    if (this.zt !== null && this.zt.tt !== null) {
      t.textBaseline = "middle", t.font = this.Jr;
      for (let h = this.zt.tt.from; h < this.zt.tt.to; h++) {
        const r = this.zt.it[h];
        r.Kt !== void 0 && (r.Kt.Hi = this.lr.xi(t, r.Kt.th), r.Kt.At = this.j, r.Kt.nt = r.nt - r.Kt.Hi / 2), kh(r, t, e, i)
      }
    }
  }
}

function kh(n, t, e, i) {
  t.fillStyle = n.V, n.Kt !== void 0 && function(s, o, h, r, l, a) {
      s.save(), s.scale(l, a), s.fillText(o, h, r), s.restore()
    }(t, n.Kt.th, n.Kt.nt, n.Kt.st, e, i),
    function(s, o, h) {
      if (s.Xs !== 0) {
        switch (s.ih) {
          case "arrowDown":
            return void Oi(!1, o, h, s.Xs);
          case "arrowUp":
            return void Oi(!0, o, h, s.Xs);
          case "circle":
            return void
            function(r, l, a) {
              const c = (se("circle", a) - 1) / 2;
              r.beginPath(), r.arc(l.nt, l.st, c * l.Gr, 0, 2 * Math.PI, !1), r.fill()
            }(o, h, s.Xs);
          case "square":
            return void
            function(r, l, a) {
              const c = se("square", a),
                u = (c - 1) * l.Gr / 2,
                d = l.nt - u,
                m = l.st - u;
              r.fillRect(d, m, c * l.Gr, c * l.Gr)
            }(o, h, s.Xs)
        }
        s.ih
      }
    }(n, t, function(s, o, h) {
      const r = Math.max(1, Math.floor(o)) % 2 / 2;
      return {
        nt: Math.round(s.nt * o) + r,
        st: s.st * h,
        Gr: o
      }
    }(n, e, i))
}

function jh(n, t, e) {
  return !(n.Kt === void 0 || ! function(i, s, o, h, r, l) {
    const a = h / 2;
    return r >= i && r <= i + o && l >= s - a && l <= s + a
  }(n.Kt.nt, n.Kt.st, n.Kt.Hi, n.Kt.At, t, e)) || function(i, s, o) {
    if (i.Xs === 0) return !1;
    switch (i.ih) {
      case "arrowDown":
      case "arrowUp":
        return Sh(0, i.nt, i.st, i.Xs, s, o);
      case "circle":
        return function(h, r, l, a, c) {
          const u = 2 + se("circle", l) / 2,
            d = h - a,
            m = r - c;
          return Math.sqrt(d * d + m * m) <= u
        }(i.nt, i.st, i.Xs, s, o);
      case "square":
        return Qs(i.nt, i.st, i.Xs, s, o)
    }
  }(n, t, e)
}

function zh(n, t, e, i, s, o, h, r, l) {
  const a = vt(e) ? e : e.xe,
    c = vt(e) ? e : e.ge,
    u = vt(e) ? e : e.Me,
    d = vt(t.size) ? Math.max(t.size, 0) : 1,
    m = qs(r.he()) * d,
    f = m / 2;
  switch (n.Xs = m, t.position) {
    case "inBar":
      return n.st = h.Rt(a, l), void(n.Kt !== void 0 && (n.Kt.st = n.st + f + o + .6 * s));
    case "aboveBar":
      return n.st = h.Rt(c, l) - f - i.nh, n.Kt !== void 0 && (n.Kt.st = n.st - f - .6 * s, i.nh += 1.2 * s), void(i.nh += m + o);
    case "belowBar":
      return n.st = h.Rt(u, l) + f + i.sh, n.Kt !== void 0 && (n.Kt.st = n.st + f + o + .6 * s, i.sh += 1.2 * s), void(i.sh += m + o)
  }
  t.position
}
class Lh {
  constructor(t, e) {
    this.ft = !0, this.eh = !0, this.rh = !0, this.hh = null, this.ah = null, this.Wt = new Ch, this.Wr = t, this.$i = e, this.zt = {
      it: [],
      tt: null
    }
  }
  bt(t) {
    this.ft = !0, this.rh = !0, t === "data" && (this.eh = !0, this.ah = null)
  }
  gt(t) {
    if (!this.Wr.yt()) return null;
    this.ft && this.oh();
    const e = this.$i.W().layout;
    return this.Wt.ar(e.fontSize, e.fontFamily), this.Wt.J(this.zt), this.Wt
  }
  _h() {
    if (this.rh) {
      if (this.Wr.uh().length > 0) {
        const t = this.$i.St().he(),
          e = Di(t),
          i = 1.5 * qs(t) + 2 * e,
          s = this.dh();
        this.hh = {
          above: Ni(i, s.aboveBar, s.inBar),
          below: Ni(i, s.belowBar, s.inBar)
        }
      } else this.hh = null;
      this.rh = !1
    }
    return this.hh
  }
  dh() {
    return this.ah === null && (this.ah = this.Wr.uh().reduce((t, e) => (t[e.position] || (t[e.position] = !0), t), {
      inBar: !1,
      aboveBar: !1,
      belowBar: !1
    })), this.ah
  }
  oh() {
    const t = this.Wr.Dt(),
      e = this.$i.St(),
      i = this.Wr.uh();
    this.eh && (this.zt.it = i.map(c => ({
      ot: c.time,
      nt: 0,
      st: 0,
      Xs: 0,
      ih: c.shape,
      V: c.color,
      Qr: c.Qr,
      wr: c.id,
      Kt: void 0
    })), this.eh = !1);
    const s = this.$i.W().layout;
    this.zt.tt = null;
    const o = e.Zs();
    if (o === null) return;
    const h = this.Wr.Ct();
    if (h === null || this.zt.it.length === 0) return;
    let r = NaN;
    const l = Di(e.he()),
      a = {
        nh: l,
        sh: l
      };
    this.zt.tt = Ys(this.zt.it, o, !0);
    for (let c = this.zt.tt.from; c < this.zt.tt.to; c++) {
      const u = i[c];
      u.time !== r && (a.nh = l, a.sh = l, r = u.time);
      const d = this.zt.it[c];
      d.nt = e.It(u.time), u.text !== void 0 && u.text.length > 0 && (d.Kt = {
        th: u.text,
        nt: 0,
        st: 0,
        Hi: 0,
        At: 0
      });
      const m = this.Wr.fh(u.time);
      m !== null && zh(d, u, m, a, s.fontSize, l, t, e, h.Vt)
    }
    this.ft = !1
  }
}
class xh extends bi {
  constructor(t) {
    super(t)
  }
  kr() {
    const t = this.Mr;
    t.yt = !1;
    const e = this.Ls.W();
    if (!e.priceLineVisible || !this.Ls.yt()) return;
    const i = this.Ls.Yr(e.priceLineSource === 0);
    i.Zr || (t.yt = !0, t.st = i.ki, t.V = this.Ls.ph(i.V), t.et = e.priceLineWidth, t.Nt = e.priceLineStyle)
  }
}
class Eh extends xe {
  constructor(t) {
    super(), this.jt = t
  }
  zi(t, e, i) {
    t.yt = !1, e.yt = !1;
    const s = this.jt;
    if (!s.yt()) return;
    const o = s.W(),
      h = o.lastValueVisible,
      r = s.mh() !== "",
      l = o.seriesLastValueMode === 0,
      a = s.Yr(!1);
    if (a.Zr) return;
    h && (t.Kt = this.bh(a, h, l), t.yt = t.Kt.length !== 0), (r || l) && (e.Kt = this.wh(a, h, r, l), e.yt = e.Kt.length > 0);
    const c = s.ph(a.V),
      u = ze(c);
    i.t = u.t, i.ki = a.ki, e.Ot = s.$t().Bt(a.ki / s.Dt().At()), t.Ot = c, t.V = u.i, e.V = u.i
  }
  wh(t, e, i, s) {
    let o = "";
    const h = this.jt.mh();
    return i && h.length !== 0 && (o += `${h} `), e && s && (o += this.jt.Dt().gh() ? t.Mh : t.xh), o.trim()
  }
  bh(t, e, i) {
    return e ? i ? this.jt.Dt().gh() ? t.xh : t.Mh : t.Kt : ""
  }
}

function Ui(n, t, e, i) {
  const s = Number.isFinite(t),
    o = Number.isFinite(e);
  return s && o ? n(t, e) : s || o ? s ? t : e : i
}
class rt {
  constructor(t, e) {
    this.Sh = t, this.kh = e
  }
  yh(t) {
    return t !== null && this.Sh === t.Sh && this.kh === t.kh
  }
  Ch() {
    return new rt(this.Sh, this.kh)
  }
  Th() {
    return this.Sh
  }
  Ph() {
    return this.kh
  }
  Rh() {
    return this.kh - this.Sh
  }
  Ni() {
    return this.kh === this.Sh || Number.isNaN(this.kh) || Number.isNaN(this.Sh)
  }
  ts(t) {
    return t === null ? this : new rt(Ui(Math.min, this.Th(), t.Th(), -1 / 0), Ui(Math.max, this.Ph(), t.Ph(), 1 / 0))
  }
  Dh(t) {
    if (!vt(t) || this.kh - this.Sh === 0) return;
    const e = .5 * (this.kh + this.Sh);
    let i = this.kh - e,
      s = this.Sh - e;
    i *= t, s *= t, this.kh = e + i, this.Sh = e + s
  }
  Vh(t) {
    vt(t) && (this.kh += t, this.Sh += t)
  }
  Oh() {
    return {
      minValue: this.Sh,
      maxValue: this.kh
    }
  }
  static Bh(t) {
    return t === null ? null : new rt(t.minValue, t.maxValue)
  }
}
class Se {
  constructor(t, e) {
    this.Ah = t, this.Ih = e || null
  }
  zh() {
    return this.Ah
  }
  Lh() {
    return this.Ih
  }
  Oh() {
    return this.Ah === null ? null : {
      priceRange: this.Ah.Oh(),
      margins: this.Ih || void 0
    }
  }
  static Bh(t) {
    return t === null ? null : new Se(rt.Bh(t.priceRange), t.margins)
  }
}
class Th extends bi {
  constructor(t, e) {
    super(t), this.Eh = e
  }
  kr() {
    const t = this.Mr;
    t.yt = !1;
    const e = this.Eh.W();
    if (!this.Ls.yt() || !e.lineVisible) return;
    const i = this.Eh.Nh();
    i !== null && (t.yt = !0, t.st = i, t.V = e.color, t.et = e.lineWidth, t.Nt = e.lineStyle, t.wr = this.Eh.W().id)
  }
}
class $h extends xe {
  constructor(t, e) {
    super(), this.Wr = t, this.Eh = e
  }
  zi(t, e, i) {
    t.yt = !1, e.yt = !1;
    const s = this.Eh.W(),
      o = s.axisLabelVisible,
      h = s.title !== "",
      r = this.Wr;
    if (!o || !r.yt()) return;
    const l = this.Eh.Nh();
    if (l === null) return;
    h && (e.Kt = s.title, e.yt = !0), e.Ot = r.$t().Bt(l / r.Dt().At()), t.Kt = this.Fh(s.price), t.yt = !0;
    const a = ze(s.axisLabelColor || s.color);
    i.t = a.t;
    const c = s.axisLabelTextColor || a.i;
    t.V = c, e.V = c, i.ki = l
  }
  Fh(t) {
    const e = this.Wr.Ct();
    return e === null ? "" : this.Wr.Dt().Fi(t, e.Vt)
  }
}
class Ph {
  constructor(t, e) {
    this.Wr = t, this.cn = e, this.Wh = new Th(t, this), this._r = new $h(t, this), this.jh = new Gs(this._r, t, t.$t())
  }
  Hh(t) {
    ft(this.cn, t), this.bt(), this.Wr.$t().$h()
  }
  W() {
    return this.cn
  }
  Uh() {
    return this.Wh
  }
  qh() {
    return this.jh
  }
  Yh() {
    return this._r
  }
  bt() {
    this.Wh.bt(), this._r.bt()
  }
  Nh() {
    const t = this.Wr,
      e = t.Dt();
    if (t.$t().St().Ni() || e.Ni()) return null;
    const i = t.Ct();
    return i === null ? null : e.Rt(this.cn.price, i.Vt)
  }
}
class Vh extends mi {
  constructor(t) {
    super(), this.$i = t
  }
  $t() {
    return this.$i
  }
}
const Rh = {
  Bar: (n, t, e, i) => {
    var s;
    const o = t.upColor,
      h = t.downColor,
      r = b(n(e, i)),
      l = It(r.Vt[0]) <= It(r.Vt[3]);
    return {
      ue: (s = r.V) !== null && s !== void 0 ? s : l ? o : h
    }
  },
  Candlestick: (n, t, e, i) => {
    var s, o, h;
    const r = t.upColor,
      l = t.downColor,
      a = t.borderUpColor,
      c = t.borderDownColor,
      u = t.wickUpColor,
      d = t.wickDownColor,
      m = b(n(e, i)),
      f = It(m.Vt[0]) <= It(m.Vt[3]);
    return {
      ue: (s = m.V) !== null && s !== void 0 ? s : f ? r : l,
      Ee: (o = m.Ot) !== null && o !== void 0 ? o : f ? a : c,
      Le: (h = m.Zh) !== null && h !== void 0 ? h : f ? u : d
    }
  },
  Custom: (n, t, e, i) => {
    var s;
    return {
      ue: (s = b(n(e, i)).V) !== null && s !== void 0 ? s : t.color
    }
  },
  Area: (n, t, e, i) => {
    var s, o, h, r;
    const l = b(n(e, i));
    return {
      ue: (s = l.lt) !== null && s !== void 0 ? s : t.lineColor,
      lt: (o = l.lt) !== null && o !== void 0 ? o : t.lineColor,
      Ts: (h = l.Ts) !== null && h !== void 0 ? h : t.topColor,
      Ps: (r = l.Ps) !== null && r !== void 0 ? r : t.bottomColor
    }
  },
  Baseline: (n, t, e, i) => {
    var s, o, h, r, l, a;
    const c = b(n(e, i));
    return {
      ue: c.Vt[3] >= t.baseValue.price ? t.topLineColor : t.bottomLineColor,
      Pe: (s = c.Pe) !== null && s !== void 0 ? s : t.topLineColor,
      Re: (o = c.Re) !== null && o !== void 0 ? o : t.bottomLineColor,
      Se: (h = c.Se) !== null && h !== void 0 ? h : t.topFillColor1,
      ke: (r = c.ke) !== null && r !== void 0 ? r : t.topFillColor2,
      ye: (l = c.ye) !== null && l !== void 0 ? l : t.bottomFillColor1,
      Ce: (a = c.Ce) !== null && a !== void 0 ? a : t.bottomFillColor2
    }
  },
  Line: (n, t, e, i) => {
    var s, o;
    const h = b(n(e, i));
    return {
      ue: (s = h.V) !== null && s !== void 0 ? s : t.color,
      lt: (o = h.V) !== null && o !== void 0 ? o : t.color
    }
  },
  Histogram: (n, t, e, i) => {
    var s;
    return {
      ue: (s = b(n(e, i)).V) !== null && s !== void 0 ? s : t.color
    }
  }
};
class Ih {
  constructor(t) {
    this.Xh = (e, i) => i !== void 0 ? i.Vt : this.Wr.In().Kh(e), this.Wr = t, this.Gh = Rh[t.Jh()]
  }
  Hs(t, e) {
    return this.Gh(this.Xh, this.Wr.W(), t, e)
  }
}
var Fi;
(function(n) {
  n[n.NearestLeft = -1] = "NearestLeft", n[n.None = 0] = "None", n[n.NearestRight = 1] = "NearestRight"
})(Fi || (Fi = {}));
const yt = 30;
class Wh {
  constructor() {
    this.Qh = [], this.tl = new Map, this.il = new Map
  }
  nl() {
    return this.Xs() > 0 ? this.Qh[this.Qh.length - 1] : null
  }
  sl() {
    return this.Xs() > 0 ? this.el(0) : null
  }
  An() {
    return this.Xs() > 0 ? this.el(this.Qh.length - 1) : null
  }
  Xs() {
    return this.Qh.length
  }
  Ni() {
    return this.Xs() === 0
  }
  Xr(t) {
    return this.rl(t, 0) !== null
  }
  Kh(t) {
    return this.hl(t)
  }
  hl(t, e = 0) {
    const i = this.rl(t, e);
    return i === null ? null : Object.assign(Object.assign({}, this.ll(i)), {
      se: this.el(i)
    })
  }
  ie() {
    return this.Qh
  }
  al(t, e, i) {
    if (this.Ni()) return null;
    let s = null;
    for (const o of i) s = ae(s, this.ol(t, e, o));
    return s
  }
  J(t) {
    this.il.clear(), this.tl.clear(), this.Qh = t
  }
  el(t) {
    return this.Qh[t].se
  }
  ll(t) {
    return this.Qh[t]
  }
  rl(t, e) {
    const i = this._l(t);
    if (i === null && e !== 0) switch (e) {
      case -1:
        return this.ul(t);
      case 1:
        return this.cl(t);
      default:
        throw new TypeError("Unknown search mode")
    }
    return i
  }
  ul(t) {
    let e = this.dl(t);
    return e > 0 && (e -= 1), e !== this.Qh.length && this.el(e) < t ? e : null
  }
  cl(t) {
    const e = this.fl(t);
    return e !== this.Qh.length && t < this.el(e) ? e : null
  }
  _l(t) {
    const e = this.dl(t);
    return e === this.Qh.length || t < this.Qh[e].se ? null : e
  }
  dl(t) {
    return oe(this.Qh, t, (e, i) => e.se < i)
  }
  fl(t) {
    return Hs(this.Qh, t, (e, i) => e.se > i)
  }
  vl(t, e, i) {
    let s = null;
    for (let o = t; o < e; o++) {
      const h = this.Qh[o].Vt[i];
      Number.isNaN(h) || (s === null ? s = {
        pl: h,
        ml: h
      } : (h < s.pl && (s.pl = h), h > s.ml && (s.ml = h)))
    }
    return s
  }
  ol(t, e, i) {
    if (this.Ni()) return null;
    let s = null;
    const o = b(this.sl()),
      h = b(this.An()),
      r = Math.max(t, o),
      l = Math.min(e, h),
      a = Math.ceil(r / yt) * yt,
      c = Math.max(a, Math.floor(l / yt) * yt);
    {
      const d = this.dl(r),
        m = this.fl(Math.min(l, a, e));
      s = ae(s, this.vl(d, m, i))
    }
    let u = this.tl.get(i);
    u === void 0 && (u = new Map, this.tl.set(i, u));
    for (let d = Math.max(a + 1, r); d < c; d += yt) {
      const m = Math.floor(d / yt);
      let f = u.get(m);
      if (f === void 0) {
        const p = this.dl(m * yt),
          g = this.fl((m + 1) * yt - 1);
        f = this.vl(p, g, i), u.set(m, f)
      }
      s = ae(s, f)
    } {
      const d = this.dl(c),
        m = this.fl(l);
      s = ae(s, this.vl(d, m, i))
    }
    return s
  }
}

function ae(n, t) {
  return n === null ? t : t === null ? n : {
    pl: Math.min(n.pl, t.pl),
    ml: Math.max(n.ml, t.ml)
  }
}
class Bh {
  constructor(t) {
    this.bl = t
  }
  X(t, e, i) {
    this.bl.draw(t)
  }
  wl(t, e, i) {
    var s, o;
    (o = (s = this.bl).drawBackground) === null || o === void 0 || o.call(s, t)
  }
}
class Re {
  constructor(t) {
    this.Qe = null, this.wn = t
  }
  gt() {
    var t;
    const e = this.wn.renderer();
    if (e === null) return null;
    if (((t = this.Qe) === null || t === void 0 ? void 0 : t.gl) === e) return this.Qe.Ml;
    const i = new Bh(e);
    return this.Qe = {
      gl: e,
      Ml: i
    }, i
  }
  xl() {
    var t, e, i;
    return (i = (e = (t = this.wn).zOrder) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : "normal"
  }
}

function tn(n) {
  var t, e, i, s, o;
  return {
    Kt: n.text(),
    ki: n.coordinate(),
    Si: (t = n.fixedCoordinate) === null || t === void 0 ? void 0 : t.call(n),
    V: n.textColor(),
    t: n.backColor(),
    yt: (i = (e = n.visible) === null || e === void 0 ? void 0 : e.call(n)) === null || i === void 0 || i,
    hi: (o = (s = n.tickVisible) === null || s === void 0 ? void 0 : s.call(n)) === null || o === void 0 || o
  }
}
class Ah {
  constructor(t, e) {
    this.Wt = new Ds, this.Sl = t, this.kl = e
  }
  gt() {
    return this.Wt.J(Object.assign({
      Hi: this.kl.Hi()
    }, tn(this.Sl))), this.Wt
  }
}
class Dh extends xe {
  constructor(t, e) {
    super(), this.Sl = t, this.Li = e
  }
  zi(t, e, i) {
    const s = tn(this.Sl);
    i.t = s.t, t.V = s.V;
    const o = 2 / 12 * this.Li.P();
    i.wi = o, i.gi = o, i.ki = s.ki, i.Si = s.Si, t.Kt = s.Kt, t.yt = s.yt, t.hi = s.hi
  }
}
class Nh {
  constructor(t, e) {
    this.yl = null, this.Cl = null, this.Tl = null, this.Pl = null, this.Rl = null, this.Dl = t, this.Wr = e
  }
  Vl() {
    return this.Dl
  }
  Vn() {
    var t, e;
    (e = (t = this.Dl).updateAllViews) === null || e === void 0 || e.call(t)
  }
  Pn() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).paneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.yl) === null || s === void 0 ? void 0 : s.gl) === o) return this.yl.Ml;
    const h = o.map(r => new Re(r));
    return this.yl = {
      gl: o,
      Ml: h
    }, h
  }
  Qi() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).timeAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Cl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Cl.Ml;
    const h = this.Wr.$t().St(),
      r = o.map(l => new Ah(l, h));
    return this.Cl = {
      gl: o,
      Ml: r
    }, r
  }
  Rn() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).priceAxisViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Tl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Tl.Ml;
    const h = this.Wr.Dt(),
      r = o.map(l => new Dh(l, h));
    return this.Tl = {
      gl: o,
      Ml: r
    }, r
  }
  Ol() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).priceAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Pl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Pl.Ml;
    const h = o.map(r => new Re(r));
    return this.Pl = {
      gl: o,
      Ml: h
    }, h
  }
  Bl() {
    var t, e, i, s;
    const o = (i = (e = (t = this.Dl).timeAxisPaneViews) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : [];
    if (((s = this.Rl) === null || s === void 0 ? void 0 : s.gl) === o) return this.Rl.Ml;
    const h = o.map(r => new Re(r));
    return this.Rl = {
      gl: o,
      Ml: h
    }, h
  }
  Al(t, e) {
    var i, s, o;
    return (o = (s = (i = this.Dl).autoscaleInfo) === null || s === void 0 ? void 0 : s.call(i, t, e)) !== null && o !== void 0 ? o : null
  }
  br(t, e) {
    var i, s, o;
    return (o = (s = (i = this.Dl).hitTest) === null || s === void 0 ? void 0 : s.call(i, t, e)) !== null && o !== void 0 ? o : null
  }
}

function Ie(n, t, e, i) {
  n.forEach(s => {
    t(s).forEach(o => {
      o.xl() === e && i.push(o)
    })
  })
}

function We(n) {
  return n.Pn()
}

function Oh(n) {
  return n.Ol()
}

function Uh(n) {
  return n.Bl()
}
class gi extends Vh {
  constructor(t, e, i, s, o) {
    super(t), this.zt = new Wh, this.Wh = new xh(this), this.Il = [], this.zl = new _h(this), this.Ll = null, this.El = null, this.Nl = [], this.Fl = [], this.Wl = null, this.jl = [], this.cn = e, this.Hl = i;
    const h = new Eh(this);
    this.rn = [h], this.jh = new Gs(h, this, t), i !== "Area" && i !== "Line" && i !== "Baseline" || (this.Ll = new Mh(this)), this.$l(), this.Ul(o)
  }
  S() {
    this.Wl !== null && clearTimeout(this.Wl)
  }
  ph(t) {
    return this.cn.priceLineColor || t
  }
  Yr(t) {
    const e = {
        Zr: !0
      },
      i = this.Dt();
    if (this.$t().St().Ni() || i.Ni() || this.zt.Ni()) return e;
    const s = this.$t().St().Zs(),
      o = this.Ct();
    if (s === null || o === null) return e;
    let h, r;
    if (t) {
      const u = this.zt.nl();
      if (u === null) return e;
      h = u, r = u.se
    } else {
      const u = this.zt.hl(s.ui(), -1);
      if (u === null || (h = this.zt.Kh(u.se), h === null)) return e;
      r = u.se
    }
    const l = h.Vt[3],
      a = this.$s().Hs(r, {
        Vt: h
      }),
      c = i.Rt(l, o.Vt);
    return {
      Zr: !1,
      _t: l,
      Kt: i.Fi(l, o.Vt),
      Mh: i.ql(l),
      xh: i.Yl(l, o.Vt),
      V: a.ue,
      ki: c,
      se: r
    }
  }
  $s() {
    return this.El !== null || (this.El = new Ih(this)), this.El
  }
  W() {
    return this.cn
  }
  Hh(t) {
    const e = t.priceScaleId;
    e !== void 0 && e !== this.cn.priceScaleId && this.$t().Zl(this, e), ft(this.cn, t), t.priceFormat !== void 0 && (this.$l(), this.$t().Xl()), this.$t().Kl(this), this.$t().Gl(), this.wn.bt("options")
  }
  J(t, e) {
    this.zt.J(t), this.Jl(), this.wn.bt("data"), this.dn.bt("data"), this.Ll !== null && (e && e.Ql ? this.Ll.Hr() : t.length === 0 && this.Ll.jr());
    const i = this.$t().cr(this);
    this.$t().ta(i), this.$t().Kl(this), this.$t().Gl(), this.$t().$h()
  }
  ia(t) {
    this.Nl = t, this.Jl();
    const e = this.$t().cr(this);
    this.dn.bt("data"), this.$t().ta(e), this.$t().Kl(this), this.$t().Gl(), this.$t().$h()
  }
  na() {
    return this.Nl
  }
  uh() {
    return this.Fl
  }
  sa(t) {
    const e = new Ph(this, t);
    return this.Il.push(e), this.$t().Kl(this), e
  }
  ea(t) {
    const e = this.Il.indexOf(t);
    e !== -1 && this.Il.splice(e, 1), this.$t().Kl(this)
  }
  Jh() {
    return this.Hl
  }
  Ct() {
    const t = this.ra();
    return t === null ? null : {
      Vt: t.Vt[3],
      ha: t.ot
    }
  }
  ra() {
    const t = this.$t().St().Zs();
    if (t === null) return null;
    const e = t.Vs();
    return this.zt.hl(e, 1)
  }
  In() {
    return this.zt
  }
  fh(t) {
    const e = this.zt.Kh(t);
    return e === null ? null : this.Hl === "Bar" || this.Hl === "Candlestick" || this.Hl === "Custom" ? {
      we: e.Vt[0],
      ge: e.Vt[1],
      Me: e.Vt[2],
      xe: e.Vt[3]
    } : e.Vt[3]
  }
  la(t) {
    const e = [];
    Ie(this.jl, We, "top", e);
    const i = this.Ll;
    return i !== null && i.yt() && (this.Wl === null && i.Ur() && (this.Wl = setTimeout(() => {
      this.Wl = null, this.$t().aa()
    }, 0)), i.$r(), e.unshift(i)), e
  }
  Pn() {
    const t = [];
    this.oa() || t.push(this.zl), t.push(this.wn, this.Wh, this.dn);
    const e = this.Il.map(i => i.Uh());
    return t.push(...e), Ie(this.jl, We, "normal", t), t
  }
  _a() {
    return this.ua(We, "bottom")
  }
  ca(t) {
    return this.ua(Oh, t)
  }
  da(t) {
    return this.ua(Uh, t)
  }
  fa(t, e) {
    return this.jl.map(i => i.br(t, e)).filter(i => i !== null)
  }
  Ji(t) {
    return [this.jh, ...this.Il.map(e => e.qh())]
  }
  Rn(t, e) {
    if (e !== this.Yi && !this.oa()) return [];
    const i = [...this.rn];
    for (const s of this.Il) i.push(s.Yh());
    return this.jl.forEach(s => {
      i.push(...s.Rn())
    }), i
  }
  Qi() {
    const t = [];
    return this.jl.forEach(e => {
      t.push(...e.Qi())
    }), t
  }
  Al(t, e) {
    if (this.cn.autoscaleInfoProvider !== void 0) {
      const i = this.cn.autoscaleInfoProvider(() => {
        const s = this.va(t, e);
        return s === null ? null : s.Oh()
      });
      return Se.Bh(i)
    }
    return this.va(t, e)
  }
  pa() {
    return this.cn.priceFormat.minMove
  }
  ma() {
    return this.ba
  }
  Vn() {
    var t;
    this.wn.bt(), this.dn.bt();
    for (const e of this.rn) e.bt();
    for (const e of this.Il) e.bt();
    this.Wh.bt(), this.zl.bt(), (t = this.Ll) === null || t === void 0 || t.bt(), this.jl.forEach(e => e.Vn())
  }
  Dt() {
    return b(super.Dt())
  }
  kt(t) {
    if (!((this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline") && this.cn.crosshairMarkerVisible)) return null;
    const e = this.zt.Kh(t);
    return e === null ? null : {
      _t: e.Vt[3],
      ht: this.wa(),
      Ot: this.ga(),
      Pt: this.Ma(),
      Tt: this.xa(t)
    }
  }
  mh() {
    return this.cn.title
  }
  yt() {
    return this.cn.visible
  }
  Sa(t) {
    this.jl.push(new Nh(t, this))
  }
  ka(t) {
    this.jl = this.jl.filter(e => e.Vl() !== t)
  }
  ya() {
    if (this.wn instanceof Ve) return t => this.wn.Fe(t)
  }
  Ca() {
    if (this.wn instanceof Ve) return t => this.wn.We(t)
  }
  oa() {
    return !Ee(this.Dt().Ta())
  }
  va(t, e) {
    if (!te(t) || !te(e) || this.zt.Ni()) return null;
    const i = this.Hl === "Line" || this.Hl === "Area" || this.Hl === "Baseline" || this.Hl === "Histogram" ? [3] : [2, 1],
      s = this.zt.al(t, e, i);
    let o = s !== null ? new rt(s.pl, s.ml) : null;
    if (this.Jh() === "Histogram") {
      const r = this.cn.base,
        l = new rt(r, r);
      o = o !== null ? o.ts(l) : l
    }
    let h = this.dn._h();
    return this.jl.forEach(r => {
      const l = r.Al(t, e);
      if (l != null && l.priceRange) {
        const m = new rt(l.priceRange.minValue, l.priceRange.maxValue);
        o = o !== null ? o.ts(m) : m
      }
      var a, c, u, d;
      l != null && l.margins && (a = h, c = l.margins, h = {
        above: Math.max((u = a == null ? void 0 : a.above) !== null && u !== void 0 ? u : 0, c.above),
        below: Math.max((d = a == null ? void 0 : a.below) !== null && d !== void 0 ? d : 0, c.below)
      })
    }), new Se(o, h)
  }
  wa() {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.cn.crosshairMarkerRadius
    }
    return 0
  }
  ga() {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline": {
        const t = this.cn.crosshairMarkerBorderColor;
        if (t.length !== 0) return t
      }
    }
    return null
  }
  Ma() {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.cn.crosshairMarkerBorderWidth
    }
    return 0
  }
  xa(t) {
    switch (this.Hl) {
      case "Line":
      case "Area":
      case "Baseline": {
        const e = this.cn.crosshairMarkerBackgroundColor;
        if (e.length !== 0) return e
      }
    }
    return this.$s().Hs(t).ue
  }
  $l() {
    switch (this.cn.priceFormat.type) {
      case "custom":
        this.ba = {
          format: this.cn.priceFormat.formatter
        };
        break;
      case "volume":
        this.ba = new Zo(this.cn.priceFormat.precision);
        break;
      case "percent":
        this.ba = new Ns(this.cn.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.cn.priceFormat.precision);
        this.ba = new Te(t, this.cn.priceFormat.minMove * t)
      }
    }
    this.Yi !== null && this.Yi.Pa()
  }
  Jl() {
    const t = this.$t().St();
    if (!t.Ra() || this.zt.Ni()) return void(this.Fl = []);
    const e = b(this.zt.sl());
    this.Fl = this.Nl.map((i, s) => {
      const o = b(t.Da(i.time, !0)),
        h = o < e ? 1 : -1;
      return {
        time: b(this.zt.hl(o, h)).se,
        position: i.position,
        shape: i.shape,
        color: i.color,
        id: i.id,
        Qr: s,
        text: i.text,
        size: i.size,
        originalTime: i.originalTime
      }
    })
  }
  Ul(t) {
    switch (this.dn = new Lh(this, this.$t()), this.Hl) {
      case "Bar":
        this.wn = new oh(this, this.$t());
        break;
      case "Candlestick":
        this.wn = new ch(this, this.$t());
        break;
      case "Line":
        this.wn = new ph(this, this.$t());
        break;
      case "Custom":
        this.wn = new Ve(this, this.$t(), nt(t));
        break;
      case "Area":
        this.wn = new sh(this, this.$t());
        break;
      case "Baseline":
        this.wn = new lh(this, this.$t());
        break;
      case "Histogram":
        this.wn = new mh(this, this.$t());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.Hl)
    }
  }
  ua(t, e) {
    const i = [];
    return Ie(this.jl, t, e, i), i
  }
}
class Fh {
  constructor(t) {
    this.cn = t
  }
  Va(t, e, i) {
    let s = t;
    if (this.cn.mode === 0) return s;
    const o = i.vn(),
      h = o.Ct();
    if (h === null) return s;
    const r = o.Rt(t, h),
      l = i.Oa().filter(c => c instanceof gi).reduce((c, u) => {
        if (i.dr(u) || !u.yt()) return c;
        const d = u.Dt(),
          m = u.In();
        if (d.Ni() || !m.Xr(e)) return c;
        const f = m.Kh(e);
        if (f === null) return c;
        const p = It(u.Ct());
        return c.concat([d.Rt(f.Vt[3], p.Vt)])
      }, []);
    if (l.length === 0) return s;
    l.sort((c, u) => Math.abs(c - r) - Math.abs(u - r));
    const a = l[0];
    return s = o.pn(a, h), s
  }
}
class Jh extends mt {
  constructor() {
    super(...arguments), this.zt = null
  }
  J(t) {
    this.zt = t
  }
  K({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (this.zt === null) return;
    const o = Math.max(1, Math.floor(i));
    t.lineWidth = o,
      function(h, r) {
        h.save(), h.lineWidth % 2 && h.translate(.5, .5), r(), h.restore()
      }(t, () => {
        const h = b(this.zt);
        if (h.Ba) {
          t.strokeStyle = h.Aa, Tt(t, h.Ia), t.beginPath();
          for (const r of h.za) {
            const l = Math.round(r.La * i);
            t.moveTo(l, -o), t.lineTo(l, e.height + o)
          }
          t.stroke()
        }
        if (h.Ea) {
          t.strokeStyle = h.Na, Tt(t, h.Fa), t.beginPath();
          for (const r of h.Wa) {
            const l = Math.round(r.La * s);
            t.moveTo(-o, l), t.lineTo(e.width + o, l)
          }
          t.stroke()
        }
      })
  }
}
class Kh {
  constructor(t) {
    this.Wt = new Jh, this.ft = !0, this.tn = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    if (this.ft) {
      const t = this.tn.$t().W().grid,
        e = {
          Ea: t.horzLines.visible,
          Ba: t.vertLines.visible,
          Na: t.horzLines.color,
          Aa: t.vertLines.color,
          Fa: t.horzLines.style,
          Ia: t.vertLines.style,
          Wa: this.tn.vn().ja(),
          za: (this.tn.$t().St().ja() || []).map(i => ({
            La: i.coord
          }))
        };
      this.Wt.J(e), this.ft = !1
    }
    return this.Wt
  }
}
class Xh {
  constructor(t) {
    this.wn = new Kh(t)
  }
  Uh() {
    return this.wn
  }
}
const Be = {
  Ha: 4,
  $a: 1e-4
};

function Wt(n, t) {
  const e = 100 * (n - t) / t;
  return t < 0 ? -e : e
}

function Hh(n, t) {
  const e = Wt(n.Th(), t),
    i = Wt(n.Ph(), t);
  return new rt(e, i)
}

function Yt(n, t) {
  const e = 100 * (n - t) / t + 100;
  return t < 0 ? -e : e
}

function Yh(n, t) {
  const e = Yt(n.Th(), t),
    i = Yt(n.Ph(), t);
  return new rt(e, i)
}

function Ce(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const i = Math.log10(e + t.$a) + t.Ha;
  return n < 0 ? -i : i
}

function Zt(n, t) {
  const e = Math.abs(n);
  if (e < 1e-15) return 0;
  const i = Math.pow(10, e - t.Ha) - t.$a;
  return n < 0 ? -i : i
}

function Jt(n, t) {
  if (n === null) return null;
  const e = Ce(n.Th(), t),
    i = Ce(n.Ph(), t);
  return new rt(e, i)
}

function ce(n, t) {
  if (n === null) return null;
  const e = Zt(n.Th(), t),
    i = Zt(n.Ph(), t);
  return new rt(e, i)
}

function Ae(n) {
  if (n === null) return Be;
  const t = Math.abs(n.Ph() - n.Th());
  if (t >= 1 || t < 1e-15) return Be;
  const e = Math.ceil(Math.abs(Math.log10(t))),
    i = Be.Ha + e;
  return {
    Ha: i,
    $a: 1 / Math.pow(10, i)
  }
}
class De {
  constructor(t, e) {
    if (this.Ua = t, this.qa = e, function(i) {
        if (i < 0) return !1;
        for (let s = i; s > 1; s /= 10)
          if (s % 10 != 0) return !1;
        return !0
      }(this.Ua)) this.Ya = [2, 2.5, 2];
    else {
      this.Ya = [];
      for (let i = this.Ua; i !== 1;) {
        if (i % 2 == 0) this.Ya.push(2), i /= 2;
        else {
          if (i % 5 != 0) throw new Error("unexpected base");
          this.Ya.push(2, 2.5), i /= 5
        }
        if (this.Ya.length > 100) throw new Error("something wrong with base")
      }
    }
  }
  Za(t, e, i) {
    const s = this.Ua === 0 ? 0 : 1 / this.Ua;
    let o = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - e)))),
      h = 0,
      r = this.qa[0];
    for (;;) {
      const u = le(o, s, 1e-14) && o > s + 1e-14,
        d = le(o, i * r, 1e-14),
        m = le(o, 1, 1e-14);
      if (!(u && d && m)) break;
      o /= r, r = this.qa[++h % this.qa.length]
    }
    if (o <= s + 1e-14 && (o = s), o = Math.max(1, o), this.Ya.length > 0 && (l = o, a = 1, c = 1e-14, Math.abs(l - a) < c))
      for (h = 0, r = this.Ya[0]; le(o, i * r, 1e-14) && o > s + 1e-14;) o /= r, r = this.Ya[++h % this.Ya.length];
    var l, a, c;
    return o
  }
}
class Ji {
  constructor(t, e, i, s) {
    this.Xa = [], this.Li = t, this.Ua = e, this.Ka = i, this.Ga = s
  }
  Za(t, e) {
    if (t < e) throw new Error("high < low");
    const i = this.Li.At(),
      s = (t - e) * this.Ja() / i,
      o = new De(this.Ua, [2, 2.5, 2]),
      h = new De(this.Ua, [2, 2, 2.5]),
      r = new De(this.Ua, [2.5, 2, 2]),
      l = [];
    return l.push(o.Za(t, e, s), h.Za(t, e, s), r.Za(t, e, s)),
      function(a) {
        if (a.length < 1) throw Error("array is empty");
        let c = a[0];
        for (let u = 1; u < a.length; ++u) a[u] < c && (c = a[u]);
        return c
      }(l)
  }
  Qa() {
    const t = this.Li,
      e = t.Ct();
    if (e === null) return void(this.Xa = []);
    const i = t.At(),
      s = this.Ka(i - 1, e),
      o = this.Ka(0, e),
      h = this.Li.W().entireTextOnly ? this.io() / 2 : 0,
      r = h,
      l = i - 1 - h,
      a = Math.max(s, o),
      c = Math.min(s, o);
    if (a === c) return void(this.Xa = []);
    let u = this.Za(a, c),
      d = a % u;
    d += d < 0 ? u : 0;
    const m = a >= c ? 1 : -1;
    let f = null,
      p = 0;
    for (let g = a - d; g > c; g -= u) {
      const _ = this.Ga(g, e, !0);
      f !== null && Math.abs(_ - f) < this.Ja() || _ < r || _ > l || (p < this.Xa.length ? (this.Xa[p].La = _, this.Xa[p].no = t.so(g)) : this.Xa.push({
        La: _,
        no: t.so(g)
      }), p++, f = _, t.eo() && (u = this.Za(g * m, c)))
    }
    this.Xa.length = p
  }
  ja() {
    return this.Xa
  }
  io() {
    return this.Li.P()
  }
  Ja() {
    return Math.ceil(2.5 * this.io())
  }
}

function en(n) {
  return n.slice().sort((t, e) => b(t.Xi()) - b(e.Xi()))
}
var Ki;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Logarithmic = 1] = "Logarithmic", n[n.Percentage = 2] = "Percentage", n[n.IndexedTo100 = 3] = "IndexedTo100"
})(Ki || (Ki = {}));
const Xi = new Ns,
  Hi = new Te(100, 1);
class Zh {
  constructor(t, e, i, s) {
    this.ro = 0, this.ho = null, this.Ah = null, this.lo = null, this.ao = {
      oo: !1,
      _o: null
    }, this.uo = 0, this.co = 0, this.do = new K, this.fo = new K, this.vo = [], this.po = null, this.mo = null, this.bo = null, this.wo = null, this.ba = Hi, this.Mo = Ae(null), this.xo = t, this.cn = e, this.So = i, this.ko = s, this.yo = new Ji(this, 100, this.Co.bind(this), this.To.bind(this))
  }
  Ta() {
    return this.xo
  }
  W() {
    return this.cn
  }
  Hh(t) {
    if (ft(this.cn, t), this.Pa(), t.mode !== void 0 && this.Po({
        yr: t.mode
      }), t.scaleMargins !== void 0) {
      const e = nt(t.scaleMargins.top),
        i = nt(t.scaleMargins.bottom);
      if (e < 0 || e > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);
      if (i < 0 || i > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${i}`);
      if (e + i > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+i}`);
      this.Ro(), this.mo = null
    }
  }
  Do() {
    return this.cn.autoScale
  }
  eo() {
    return this.cn.mode === 1
  }
  gh() {
    return this.cn.mode === 2
  }
  Vo() {
    return this.cn.mode === 3
  }
  yr() {
    return {
      Wn: this.cn.autoScale,
      Oo: this.cn.invertScale,
      yr: this.cn.mode
    }
  }
  Po(t) {
    const e = this.yr();
    let i = null;
    t.Wn !== void 0 && (this.cn.autoScale = t.Wn), t.yr !== void 0 && (this.cn.mode = t.yr, t.yr !== 2 && t.yr !== 3 || (this.cn.autoScale = !0), this.ao.oo = !1), e.yr === 1 && t.yr !== e.yr && (function(o, h) {
      if (o === null) return !1;
      const r = Zt(o.Th(), h),
        l = Zt(o.Ph(), h);
      return isFinite(r) && isFinite(l)
    }(this.Ah, this.Mo) ? (i = ce(this.Ah, this.Mo), i !== null && this.Bo(i)) : this.cn.autoScale = !0), t.yr === 1 && t.yr !== e.yr && (i = Jt(this.Ah, this.Mo), i !== null && this.Bo(i));
    const s = e.yr !== this.cn.mode;
    s && (e.yr === 2 || this.gh()) && this.Pa(), s && (e.yr === 3 || this.Vo()) && this.Pa(), t.Oo !== void 0 && e.Oo !== t.Oo && (this.cn.invertScale = t.Oo, this.Ao()), this.fo.m(e, this.yr())
  }
  Io() {
    return this.fo
  }
  P() {
    return this.So.fontSize
  }
  At() {
    return this.ro
  }
  zo(t) {
    this.ro !== t && (this.ro = t, this.Ro(), this.mo = null)
  }
  Lo() {
    if (this.ho) return this.ho;
    const t = this.At() - this.Eo() - this.No();
    return this.ho = t, t
  }
  zh() {
    return this.Fo(), this.Ah
  }
  Bo(t, e) {
    const i = this.Ah;
    (e || i === null && t !== null || i !== null && !i.yh(t)) && (this.mo = null, this.Ah = t)
  }
  Ni() {
    return this.Fo(), this.ro === 0 || !this.Ah || this.Ah.Ni()
  }
  Wo(t) {
    return this.Oo() ? t : this.At() - 1 - t
  }
  Rt(t, e) {
    return this.gh() ? t = Wt(t, e) : this.Vo() && (t = Yt(t, e)), this.To(t, e)
  }
  Qs(t, e, i) {
    this.Fo();
    const s = this.No(),
      o = b(this.zh()),
      h = o.Th(),
      r = o.Ph(),
      l = this.Lo() - 1,
      a = this.Oo(),
      c = l / (r - h),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      m = this.jo();
    for (let f = u; f < d; f++) {
      const p = t[f],
        g = p._t;
      if (isNaN(g)) continue;
      let _ = g;
      m !== null && (_ = m(p._t, e));
      const S = s + c * (_ - h),
        L = a ? S : this.ro - 1 - S;
      p.st = L
    }
  }
  me(t, e, i) {
    this.Fo();
    const s = this.No(),
      o = b(this.zh()),
      h = o.Th(),
      r = o.Ph(),
      l = this.Lo() - 1,
      a = this.Oo(),
      c = l / (r - h),
      u = i === void 0 ? 0 : i.from,
      d = i === void 0 ? t.length : i.to,
      m = this.jo();
    for (let f = u; f < d; f++) {
      const p = t[f];
      let g = p.we,
        _ = p.ge,
        S = p.Me,
        L = p.xe;
      m !== null && (g = m(p.we, e), _ = m(p.ge, e), S = m(p.Me, e), L = m(p.xe, e));
      let j = s + c * (g - h),
        N = a ? j : this.ro - 1 - j;
      p.ve = N, j = s + c * (_ - h), N = a ? j : this.ro - 1 - j, p.ce = N, j = s + c * (S - h), N = a ? j : this.ro - 1 - j, p.de = N, j = s + c * (L - h), N = a ? j : this.ro - 1 - j, p.pe = N
    }
  }
  pn(t, e) {
    const i = this.Co(t, e);
    return this.Ho(i, e)
  }
  Ho(t, e) {
    let i = t;
    return this.gh() ? i = function(s, o) {
      return o < 0 && (s = -s), s / 100 * o + o
    }(i, e) : this.Vo() && (i = function(s, o) {
      return s -= 100, o < 0 && (s = -s), s / 100 * o + o
    }(i, e)), i
  }
  Oa() {
    return this.vo
  }
  $o() {
    if (this.po) return this.po;
    let t = [];
    for (let e = 0; e < this.vo.length; e++) {
      const i = this.vo[e];
      i.Xi() === null && i.Ki(e + 1), t.push(i)
    }
    return t = en(t), this.po = t, this.po
  }
  Uo(t) {
    this.vo.indexOf(t) === -1 && (this.vo.push(t), this.Pa(), this.qo())
  }
  Yo(t) {
    const e = this.vo.indexOf(t);
    if (e === -1) throw new Error("source is not attached to scale");
    this.vo.splice(e, 1), this.vo.length === 0 && (this.Po({
      Wn: !0
    }), this.Bo(null)), this.Pa(), this.qo()
  }
  Ct() {
    let t = null;
    for (const e of this.vo) {
      const i = e.Ct();
      i !== null && (t === null || i.ha < t.ha) && (t = i)
    }
    return t === null ? null : t.Vt
  }
  Oo() {
    return this.cn.invertScale
  }
  ja() {
    const t = this.Ct() === null;
    if (this.mo !== null && (t || this.mo.Zo === t)) return this.mo.ja;
    this.yo.Qa();
    const e = this.yo.ja();
    return this.mo = {
      ja: e,
      Zo: t
    }, this.do.m(), e
  }
  Xo() {
    return this.do
  }
  Ko(t) {
    this.gh() || this.Vo() || this.bo === null && this.lo === null && (this.Ni() || (this.bo = this.ro - t, this.lo = b(this.zh()).Ch()))
  }
  Go(t) {
    if (this.gh() || this.Vo() || this.bo === null) return;
    this.Po({
      Wn: !1
    }), (t = this.ro - t) < 0 && (t = 0);
    let e = (this.bo + .2 * (this.ro - 1)) / (t + .2 * (this.ro - 1));
    const i = b(this.lo).Ch();
    e = Math.max(e, .1), i.Dh(e), this.Bo(i)
  }
  Jo() {
    this.gh() || this.Vo() || (this.bo = null, this.lo = null)
  }
  Qo(t) {
    this.Do() || this.wo === null && this.lo === null && (this.Ni() || (this.wo = t, this.lo = b(this.zh()).Ch()))
  }
  t_(t) {
    if (this.Do() || this.wo === null) return;
    const e = b(this.zh()).Rh() / (this.Lo() - 1);
    let i = t - this.wo;
    this.Oo() && (i *= -1);
    const s = i * e,
      o = b(this.lo).Ch();
    o.Vh(s), this.Bo(o, !0), this.mo = null
  }
  i_() {
    this.Do() || this.wo !== null && (this.wo = null, this.lo = null)
  }
  ma() {
    return this.ba || this.Pa(), this.ba
  }
  Fi(t, e) {
    switch (this.cn.mode) {
      case 2:
        return this.n_(Wt(t, e));
      case 3:
        return this.ma().format(Yt(t, e));
      default:
        return this.Fh(t)
    }
  }
  so(t) {
    switch (this.cn.mode) {
      case 2:
        return this.n_(t);
      case 3:
        return this.ma().format(t);
      default:
        return this.Fh(t)
    }
  }
  ql(t) {
    return this.Fh(t, b(this.s_()).ma())
  }
  Yl(t, e) {
    return t = Wt(t, e), this.n_(t, Xi)
  }
  e_() {
    return this.vo
  }
  r_(t) {
    this.ao = {
      _o: t,
      oo: !1
    }
  }
  Vn() {
    this.vo.forEach(t => t.Vn())
  }
  Pa() {
    this.mo = null;
    const t = this.s_();
    let e = 100;
    t !== null && (e = Math.round(1 / t.pa())), this.ba = Hi, this.gh() ? (this.ba = Xi, e = 100) : this.Vo() ? (this.ba = new Te(100, 1), e = 100) : t !== null && (this.ba = t.ma()), this.yo = new Ji(this, e, this.Co.bind(this), this.To.bind(this)), this.yo.Qa()
  }
  qo() {
    this.po = null
  }
  s_() {
    return this.vo[0] || null
  }
  Eo() {
    return this.Oo() ? this.cn.scaleMargins.bottom * this.At() + this.co : this.cn.scaleMargins.top * this.At() + this.uo
  }
  No() {
    return this.Oo() ? this.cn.scaleMargins.top * this.At() + this.uo : this.cn.scaleMargins.bottom * this.At() + this.co
  }
  Fo() {
    this.ao.oo || (this.ao.oo = !0, this.h_())
  }
  Ro() {
    this.ho = null
  }
  To(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    t = this.eo() && t ? Ce(t, this.Mo) : t;
    const i = b(this.zh()),
      s = this.No() + (this.Lo() - 1) * (t - i.Th()) / i.Rh();
    return this.Wo(s)
  }
  Co(t, e) {
    if (this.Fo(), this.Ni()) return 0;
    const i = this.Wo(t),
      s = b(this.zh()),
      o = s.Th() + s.Rh() * ((i - this.No()) / (this.Lo() - 1));
    return this.eo() ? Zt(o, this.Mo) : o
  }
  Ao() {
    this.mo = null, this.yo.Qa()
  }
  h_() {
    const t = this.ao._o;
    if (t === null) return;
    let e = null;
    const i = this.e_();
    let s = 0,
      o = 0;
    for (const l of i) {
      if (!l.yt()) continue;
      const a = l.Ct();
      if (a === null) continue;
      const c = l.Al(t.Vs(), t.ui());
      let u = c && c.zh();
      if (u !== null) {
        switch (this.cn.mode) {
          case 1:
            u = Jt(u, this.Mo);
            break;
          case 2:
            u = Hh(u, a.Vt);
            break;
          case 3:
            u = Yh(u, a.Vt)
        }
        if (e = e === null ? u : e.ts(b(u)), c !== null) {
          const d = c.Lh();
          d !== null && (s = Math.max(s, d.above), o = Math.max(o, d.below))
        }
      }
    }
    if (s === this.uo && o === this.co || (this.uo = s, this.co = o, this.mo = null, this.Ro()), e !== null) {
      if (e.Th() === e.Ph()) {
        const l = this.s_(),
          a = 5 * (l === null || this.gh() || this.Vo() ? 1 : l.pa());
        this.eo() && (e = ce(e, this.Mo)), e = new rt(e.Th() - a, e.Ph() + a), this.eo() && (e = Jt(e, this.Mo))
      }
      if (this.eo()) {
        const l = ce(e, this.Mo),
          a = Ae(l);
        if (h = a, r = this.Mo, h.Ha !== r.Ha || h.$a !== r.$a) {
          const c = this.lo !== null ? ce(this.lo, this.Mo) : null;
          this.Mo = a, e = Jt(l, a), c !== null && (this.lo = Jt(c, a))
        }
      }
      this.Bo(e)
    } else this.Ah === null && (this.Bo(new rt(-.5, .5)), this.Mo = Ae(null));
    var h, r;
    this.ao.oo = !0
  }
  jo() {
    return this.gh() ? Wt : this.Vo() ? Yt : this.eo() ? t => Ce(t, this.Mo) : null
  }
  l_(t, e, i) {
    return e === void 0 ? (i === void 0 && (i = this.ma()), i.format(t)) : e(t)
  }
  Fh(t, e) {
    return this.l_(t, this.ko.priceFormatter, e)
  }
  n_(t, e) {
    return this.l_(t, this.ko.percentageFormatter, e)
  }
}
class Gh {
  constructor(t, e) {
    this.vo = [], this.a_ = new Map, this.ro = 0, this.o_ = 0, this.__ = 1e3, this.po = null, this.u_ = new K, this.kl = t, this.$i = e, this.c_ = new Xh(this);
    const i = e.W();
    this.d_ = this.f_("left", i.leftPriceScale), this.v_ = this.f_("right", i.rightPriceScale), this.d_.Io().l(this.p_.bind(this, this.d_), this), this.v_.Io().l(this.p_.bind(this, this.v_), this), this.m_(i)
  }
  m_(t) {
    if (t.leftPriceScale && this.d_.Hh(t.leftPriceScale), t.rightPriceScale && this.v_.Hh(t.rightPriceScale), t.localization && (this.d_.Pa(), this.v_.Pa()), t.overlayPriceScales) {
      const e = Array.from(this.a_.values());
      for (const i of e) {
        const s = b(i[0].Dt());
        s.Hh(t.overlayPriceScales), t.localization && s.Pa()
      }
    }
  }
  b_(t) {
    switch (t) {
      case "left":
        return this.d_;
      case "right":
        return this.v_
    }
    return this.a_.has(t) ? nt(this.a_.get(t))[0].Dt() : null
  }
  S() {
    this.$t().w_().p(this), this.d_.Io().p(this), this.v_.Io().p(this), this.vo.forEach(t => {
      t.S && t.S()
    }), this.u_.m()
  }
  g_() {
    return this.__
  }
  M_(t) {
    this.__ = t
  }
  $t() {
    return this.$i
  }
  Hi() {
    return this.o_
  }
  At() {
    return this.ro
  }
  x_(t) {
    this.o_ = t, this.S_()
  }
  zo(t) {
    this.ro = t, this.d_.zo(t), this.v_.zo(t), this.vo.forEach(e => {
      if (this.dr(e)) {
        const i = e.Dt();
        i !== null && i.zo(t)
      }
    }), this.S_()
  }
  Oa() {
    return this.vo
  }
  dr(t) {
    const e = t.Dt();
    return e === null || this.d_ !== e && this.v_ !== e
  }
  Uo(t, e, i) {
    const s = i !== void 0 ? i : this.y_().k_ + 1;
    this.C_(t, e, s)
  }
  Yo(t) {
    const e = this.vo.indexOf(t);
    kt(e !== -1, "removeDataSource: invalid data source"), this.vo.splice(e, 1);
    const i = b(t.Dt()).Ta();
    if (this.a_.has(i)) {
      const o = nt(this.a_.get(i)),
        h = o.indexOf(t);
      h !== -1 && (o.splice(h, 1), o.length === 0 && this.a_.delete(i))
    }
    const s = t.Dt();
    s && s.Oa().indexOf(t) >= 0 && s.Yo(t), s !== null && (s.qo(), this.T_(s)), this.po = null
  }
  pr(t) {
    return t === this.d_ ? "left" : t === this.v_ ? "right" : "overlay"
  }
  P_() {
    return this.d_
  }
  R_() {
    return this.v_
  }
  D_(t, e) {
    t.Ko(e)
  }
  V_(t, e) {
    t.Go(e), this.S_()
  }
  O_(t) {
    t.Jo()
  }
  B_(t, e) {
    t.Qo(e)
  }
  A_(t, e) {
    t.t_(e), this.S_()
  }
  I_(t) {
    t.i_()
  }
  S_() {
    this.vo.forEach(t => {
      t.Vn()
    })
  }
  vn() {
    let t = null;
    return this.$i.W().rightPriceScale.visible && this.v_.Oa().length !== 0 ? t = this.v_ : this.$i.W().leftPriceScale.visible && this.d_.Oa().length !== 0 ? t = this.d_ : this.vo.length !== 0 && (t = this.vo[0].Dt()), t === null && (t = this.v_), t
  }
  vr() {
    let t = null;
    return this.$i.W().rightPriceScale.visible ? t = this.v_ : this.$i.W().leftPriceScale.visible && (t = this.d_), t
  }
  T_(t) {
    t !== null && t.Do() && this.z_(t)
  }
  L_(t) {
    const e = this.kl.Zs();
    t.Po({
      Wn: !0
    }), e !== null && t.r_(e), this.S_()
  }
  E_() {
    this.z_(this.d_), this.z_(this.v_)
  }
  N_() {
    this.T_(this.d_), this.T_(this.v_), this.vo.forEach(t => {
      this.dr(t) && this.T_(t.Dt())
    }), this.S_(), this.$i.$h()
  }
  $o() {
    return this.po === null && (this.po = en(this.vo)), this.po
  }
  F_() {
    return this.u_
  }
  W_() {
    return this.c_
  }
  z_(t) {
    const e = t.e_();
    if (e && e.length > 0 && !this.kl.Ni()) {
      const i = this.kl.Zs();
      i !== null && t.r_(i)
    }
    t.Vn()
  }
  y_() {
    const t = this.$o();
    if (t.length === 0) return {
      j_: 0,
      k_: 0
    };
    let e = 0,
      i = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s].Xi();
      o !== null && (o < e && (e = o), o > i && (i = o))
    }
    return {
      j_: e,
      k_: i
    }
  }
  C_(t, e, i) {
    let s = this.b_(e);
    if (s === null && (s = this.f_(e, this.$i.W().overlayPriceScales)), this.vo.push(t), !Ee(e)) {
      const o = this.a_.get(e) || [];
      o.push(t), this.a_.set(e, o)
    }
    s.Uo(t), t.Gi(s), t.Ki(i), this.T_(s), this.po = null
  }
  p_(t, e, i) {
    e.yr !== i.yr && this.z_(t)
  }
  f_(t, e) {
    const i = Object.assign({
        visible: !0,
        autoScale: !0
      }, _t(e)),
      s = new Zh(t, i, this.$i.W().layout, this.$i.W().localization);
    return s.zo(this.At()), s
  }
}
class qh {
  constructor(t, e, i = 50) {
    this.Xe = 0, this.Ke = 1, this.Ge = 1, this.Qe = new Map, this.Je = new Map, this.H_ = t, this.U_ = e, this.tr = i
  }
  q_(t) {
    const e = t.time,
      i = this.U_.cacheKey(e),
      s = this.Qe.get(i);
    if (s !== void 0) return s.Y_;
    if (this.Xe === this.tr) {
      const h = this.Je.get(this.Ge);
      this.Je.delete(this.Ge), this.Qe.delete(nt(h)), this.Ge++, this.Xe--
    }
    const o = this.H_(t);
    return this.Qe.set(i, {
      Y_: o,
      er: this.Ke
    }), this.Je.set(this.Ke, i), this.Xe++, this.Ke++, o
  }
}
class Gt {
  constructor(t, e) {
    kt(t <= e, "right should be >= left"), this.Z_ = t, this.X_ = e
  }
  Vs() {
    return this.Z_
  }
  ui() {
    return this.X_
  }
  K_() {
    return this.X_ - this.Z_ + 1
  }
  Xr(t) {
    return this.Z_ <= t && t <= this.X_
  }
  yh(t) {
    return this.Z_ === t.Vs() && this.X_ === t.ui()
  }
}

function Yi(n, t) {
  return n === null || t === null ? n === t : n.yh(t)
}
class Qh {
  constructor() {
    this.G_ = new Map, this.Qe = null, this.J_ = !1
  }
  Q_(t) {
    this.J_ = t, this.Qe = null
  }
  tu(t, e) {
    this.iu(e), this.Qe = null;
    for (let i = e; i < t.length; ++i) {
      const s = t[i];
      let o = this.G_.get(s.timeWeight);
      o === void 0 && (o = [], this.G_.set(s.timeWeight, o)), o.push({
        index: i,
        time: s.time,
        weight: s.timeWeight,
        originalTime: s.originalTime
      })
    }
  }
  nu(t, e) {
    const i = Math.ceil(e / t);
    return this.Qe !== null && this.Qe.su === i || (this.Qe = {
      ja: this.eu(i),
      su: i
    }), this.Qe.ja
  }
  iu(t) {
    if (t === 0) return void this.G_.clear();
    const e = [];
    this.G_.forEach((i, s) => {
      t <= i[0].index ? e.push(s) : i.splice(oe(i, t, o => o.index < t), 1 / 0)
    });
    for (const i of e) this.G_.delete(i)
  }
  eu(t) {
    let e = [];
    for (const i of Array.from(this.G_.keys()).sort((s, o) => o - s)) {
      if (!this.G_.get(i)) continue;
      const s = e;
      e = [];
      const o = s.length;
      let h = 0;
      const r = nt(this.G_.get(i)),
        l = r.length;
      let a = 1 / 0,
        c = -1 / 0;
      for (let u = 0; u < l; u++) {
        const d = r[u],
          m = d.index;
        for (; h < o;) {
          const f = s[h],
            p = f.index;
          if (!(p < m)) {
            a = p;
            break
          }
          h++, e.push(f), c = p, a = 1 / 0
        }
        if (a - m >= t && m - c >= t) e.push(d), c = m;
        else if (this.J_) return s
      }
      for (; h < o; h++) e.push(s[h])
    }
    return e
  }
}
class At {
  constructor(t) {
    this.ru = t
  }
  hu() {
    return this.ru === null ? null : new Gt(Math.floor(this.ru.Vs()), Math.ceil(this.ru.ui()))
  }
  lu() {
    return this.ru
  }
  static au() {
    return new At(null)
  }
}

function tr(n, t) {
  return n.weight > t.weight ? n : t
}
class er {
  constructor(t, e, i, s) {
    this.o_ = 0, this.ou = null, this._u = [], this.wo = null, this.bo = null, this.uu = new Qh, this.cu = new Map, this.du = At.au(), this.fu = !0, this.vu = new K, this.pu = new K, this.mu = new K, this.bu = null, this.wu = null, this.gu = [], this.cn = e, this.ko = i, this.Mu = e.rightOffset, this.xu = e.barSpacing, this.$i = t, this.U_ = s, this.Su(), this.uu.Q_(e.uniformDistribution)
  }
  W() {
    return this.cn
  }
  ku(t) {
    ft(this.ko, t), this.yu(), this.Su()
  }
  Hh(t, e) {
    var i;
    ft(this.cn, t), this.cn.fixLeftEdge && this.Cu(), this.cn.fixRightEdge && this.Tu(), t.barSpacing !== void 0 && this.$i.Gn(t.barSpacing), t.rightOffset !== void 0 && this.$i.Jn(t.rightOffset), t.minBarSpacing !== void 0 && this.$i.Gn((i = t.barSpacing) !== null && i !== void 0 ? i : this.xu), this.yu(), this.Su(), this.mu.m()
  }
  mn(t) {
    var e, i;
    return (i = (e = this._u[t]) === null || e === void 0 ? void 0 : e.time) !== null && i !== void 0 ? i : null
  }
  Ui(t) {
    var e;
    return (e = this._u[t]) !== null && e !== void 0 ? e : null
  }
  Da(t, e) {
    if (this._u.length < 1) return null;
    if (this.U_.key(t) > this.U_.key(this._u[this._u.length - 1].time)) return e ? this._u.length - 1 : null;
    const i = oe(this._u, this.U_.key(t), (s, o) => this.U_.key(s.time) < o);
    return this.U_.key(t) < this.U_.key(this._u[i].time) ? e ? i : null : i
  }
  Ni() {
    return this.o_ === 0 || this._u.length === 0 || this.ou === null
  }
  Ra() {
    return this._u.length > 0
  }
  Zs() {
    return this.Pu(), this.du.hu()
  }
  Ru() {
    return this.Pu(), this.du.lu()
  }
  Du() {
    const t = this.Zs();
    if (t === null) return null;
    const e = {
      from: t.Vs(),
      to: t.ui()
    };
    return this.Vu(e)
  }
  Vu(t) {
    const e = Math.round(t.from),
      i = Math.round(t.to),
      s = b(this.Ou()),
      o = b(this.Bu());
    return {
      from: b(this.Ui(Math.max(s, e))),
      to: b(this.Ui(Math.min(o, i)))
    }
  }
  Au(t) {
    return {
      from: b(this.Da(t.from, !0)),
      to: b(this.Da(t.to, !0))
    }
  }
  Hi() {
    return this.o_
  }
  x_(t) {
    if (!isFinite(t) || t <= 0 || this.o_ === t) return;
    const e = this.Ru(),
      i = this.o_;
    if (this.o_ = t, this.fu = !0, this.cn.lockVisibleTimeRangeOnResize && i !== 0) {
      const s = this.xu * t / i;
      this.xu = s
    }
    if (this.cn.fixLeftEdge && e !== null && e.Vs() <= 0) {
      const s = i - t;
      this.Mu -= Math.round(s / this.xu) + 1, this.fu = !0
    }
    this.Iu(), this.zu()
  }
  It(t) {
    if (this.Ni() || !te(t)) return 0;
    const e = this.Lu() + this.Mu - t;
    return this.o_ - (e + .5) * this.xu - 1
  }
  Js(t, e) {
    const i = this.Lu(),
      s = e === void 0 ? 0 : e.from,
      o = e === void 0 ? t.length : e.to;
    for (let h = s; h < o; h++) {
      const r = t[h].ot,
        l = i + this.Mu - r,
        a = this.o_ - (l + .5) * this.xu - 1;
      t[h].nt = a
    }
  }
  Eu(t) {
    return Math.ceil(this.Nu(t))
  }
  Jn(t) {
    this.fu = !0, this.Mu = t, this.zu(), this.$i.Fu(), this.$i.$h()
  }
  he() {
    return this.xu
  }
  Gn(t) {
    this.Wu(t), this.zu(), this.$i.Fu(), this.$i.$h()
  }
  ju() {
    return this.Mu
  }
  ja() {
    if (this.Ni()) return null;
    if (this.wu !== null) return this.wu;
    const t = this.xu,
      e = 5 * (this.$i.W().layout.fontSize + 4) / 8 * (this.cn.tickMarkMaxCharacterLength || 8),
      i = Math.round(e / t),
      s = b(this.Zs()),
      o = Math.max(s.Vs(), s.Vs() - i),
      h = Math.max(s.ui(), s.ui() - i),
      r = this.uu.nu(t, e),
      l = this.Ou() + i,
      a = this.Bu() - i,
      c = this.Hu(),
      u = this.cn.fixLeftEdge || c,
      d = this.cn.fixRightEdge || c;
    let m = 0;
    for (const f of r) {
      if (!(o <= f.index && f.index <= h)) continue;
      let p;
      m < this.gu.length ? (p = this.gu[m], p.coord = this.It(f.index), p.label = this.$u(f), p.weight = f.weight) : (p = {
        needAlignCoordinate: !1,
        coord: this.It(f.index),
        label: this.$u(f),
        weight: f.weight
      }, this.gu.push(p)), this.xu > e / 2 && !c ? p.needAlignCoordinate = !1 : p.needAlignCoordinate = u && f.index <= l || d && f.index >= a, m++
    }
    return this.gu.length = m, this.wu = this.gu, this.gu
  }
  Uu() {
    this.fu = !0, this.Gn(this.cn.barSpacing), this.Jn(this.cn.rightOffset)
  }
  qu(t) {
    this.fu = !0, this.ou = t, this.zu(), this.Cu()
  }
  Yu(t, e) {
    const i = this.Nu(t),
      s = this.he(),
      o = s + e * (s / 10);
    this.Gn(o), this.cn.rightBarStaysOnScroll || this.Jn(this.ju() + (i - this.Nu(t)))
  }
  Ko(t) {
    this.wo && this.i_(), this.bo === null && this.bu === null && (this.Ni() || (this.bo = t, this.Zu()))
  }
  Go(t) {
    if (this.bu === null) return;
    const e = ni(this.o_ - t, 0, this.o_),
      i = ni(this.o_ - b(this.bo), 0, this.o_);
    e !== 0 && i !== 0 && this.Gn(this.bu.he * e / i)
  }
  Jo() {
    this.bo !== null && (this.bo = null, this.Xu())
  }
  Qo(t) {
    this.wo === null && this.bu === null && (this.Ni() || (this.wo = t, this.Zu()))
  }
  t_(t) {
    if (this.wo === null) return;
    const e = (this.wo - t) / this.he();
    this.Mu = b(this.bu).ju + e, this.fu = !0, this.zu()
  }
  i_() {
    this.wo !== null && (this.wo = null, this.Xu())
  }
  Ku() {
    this.Gu(this.cn.rightOffset)
  }
  Gu(t, e = 400) {
    if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
    if (!isFinite(e) || e <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
    const i = this.Mu,
      s = performance.now();
    this.$i.Zn({
      Ju: o => (o - s) / e >= 1,
      Qu: o => {
        const h = (o - s) / e;
        return h >= 1 ? t : i + (t - i) * h
      }
    })
  }
  bt(t, e) {
    this.fu = !0, this._u = t, this.uu.tu(t, e), this.zu()
  }
  tc() {
    return this.vu
  }
  nc() {
    return this.pu
  }
  sc() {
    return this.mu
  }
  Lu() {
    return this.ou || 0
  }
  ec(t) {
    const e = t.K_();
    this.Wu(this.o_ / e), this.Mu = t.ui() - this.Lu(), this.zu(), this.fu = !0, this.$i.Fu(), this.$i.$h()
  }
  rc() {
    const t = this.Ou(),
      e = this.Bu();
    t !== null && e !== null && this.ec(new Gt(t, e + this.cn.rightOffset))
  }
  hc(t) {
    const e = new Gt(t.from, t.to);
    this.ec(e)
  }
  qi(t) {
    return this.ko.timeFormatter !== void 0 ? this.ko.timeFormatter(t.originalTime) : this.U_.formatHorzItem(t.time)
  }
  Hu() {
    const {
      handleScroll: t,
      handleScale: e
    } = this.$i.W();
    return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || e.axisDoubleClickReset.time || e.axisPressedMouseMove.time || e.mouseWheel || e.pinch)
  }
  Ou() {
    return this._u.length === 0 ? null : 0
  }
  Bu() {
    return this._u.length === 0 ? null : this._u.length - 1
  }
  lc(t) {
    return (this.o_ - 1 - t) / this.xu
  }
  Nu(t) {
    const e = this.lc(t),
      i = this.Lu() + this.Mu - e;
    return Math.round(1e6 * i) / 1e6
  }
  Wu(t) {
    const e = this.xu;
    this.xu = t, this.Iu(), e !== this.xu && (this.fu = !0, this.ac())
  }
  Pu() {
    if (!this.fu) return;
    if (this.fu = !1, this.Ni()) return void this.oc(At.au());
    const t = this.Lu(),
      e = this.o_ / this.xu,
      i = this.Mu + t,
      s = new Gt(i - e + 1, i);
    this.oc(new At(s))
  }
  Iu() {
    const t = this._c();
    if (this.xu < t && (this.xu = t, this.fu = !0), this.o_ !== 0) {
      const e = .5 * this.o_;
      this.xu > e && (this.xu = e, this.fu = !0)
    }
  }
  _c() {
    return this.cn.fixLeftEdge && this.cn.fixRightEdge && this._u.length !== 0 ? this.o_ / this._u.length : this.cn.minBarSpacing
  }
  zu() {
    const t = this.uc();
    this.Mu > t && (this.Mu = t, this.fu = !0);
    const e = this.cc();
    e !== null && this.Mu < e && (this.Mu = e, this.fu = !0)
  }
  cc() {
    const t = this.Ou(),
      e = this.ou;
    return t === null || e === null ? null : t - e - 1 + (this.cn.fixLeftEdge ? this.o_ / this.xu : Math.min(2, this._u.length))
  }
  uc() {
    return this.cn.fixRightEdge ? 0 : this.o_ / this.xu - Math.min(2, this._u.length)
  }
  Zu() {
    this.bu = {
      he: this.he(),
      ju: this.ju()
    }
  }
  Xu() {
    this.bu = null
  }
  $u(t) {
    let e = this.cu.get(t.weight);
    return e === void 0 && (e = new qh(i => this.dc(i), this.U_), this.cu.set(t.weight, e)), e.q_(t)
  }
  dc(t) {
    return this.U_.formatTickmark(t, this.ko)
  }
  oc(t) {
    const e = this.du;
    this.du = t, Yi(e.hu(), this.du.hu()) || this.vu.m(), Yi(e.lu(), this.du.lu()) || this.pu.m(), this.ac()
  }
  ac() {
    this.wu = null
  }
  yu() {
    this.ac(), this.cu.clear()
  }
  Su() {
    this.U_.updateFormatter(this.ko)
  }
  Cu() {
    if (!this.cn.fixLeftEdge) return;
    const t = this.Ou();
    if (t === null) return;
    const e = this.Zs();
    if (e === null) return;
    const i = e.Vs() - t;
    if (i < 0) {
      const s = this.Mu - i - 1;
      this.Jn(s)
    }
    this.Iu()
  }
  Tu() {
    this.zu(), this.Iu()
  }
}
class ir {
  X(t, e, i) {
    t.useMediaCoordinateSpace(s => this.K(s, e, i))
  }
  wl(t, e, i) {
    t.useMediaCoordinateSpace(s => this.fc(s, e, i))
  }
  fc(t, e, i) {}
}
class sr extends ir {
  constructor(t) {
    super(), this.vc = new Map, this.zt = t
  }
  K(t) {}
  fc(t) {
    if (!this.zt.yt) return;
    const {
      context: e,
      mediaSize: i
    } = t;
    let s = 0;
    for (const h of this.zt.mc) {
      if (h.Kt.length === 0) continue;
      e.font = h.R;
      const r = this.bc(e, h.Kt);
      r > i.width ? h.Yu = i.width / r : h.Yu = 1, s += h.wc * h.Yu
    }
    let o = 0;
    switch (this.zt.gc) {
      case "top":
        o = 0;
        break;
      case "center":
        o = Math.max((i.height - s) / 2, 0);
        break;
      case "bottom":
        o = Math.max(i.height - s, 0)
    }
    e.fillStyle = this.zt.V;
    for (const h of this.zt.mc) {
      e.save();
      let r = 0;
      switch (this.zt.Mc) {
        case "left":
          e.textAlign = "left", r = h.wc / 2;
          break;
        case "center":
          e.textAlign = "center", r = i.width / 2;
          break;
        case "right":
          e.textAlign = "right", r = i.width - 1 - h.wc / 2
      }
      e.translate(r, o), e.textBaseline = "top", e.font = h.R, e.scale(h.Yu, h.Yu), e.fillText(h.Kt, 0, h.xc), e.restore(), o += h.wc * h.Yu
    }
  }
  bc(t, e) {
    const i = this.Sc(t.font);
    let s = i.get(e);
    return s === void 0 && (s = t.measureText(e).width, i.set(e, s)), s
  }
  Sc(t) {
    let e = this.vc.get(t);
    return e === void 0 && (e = new Map, this.vc.set(t, e)), e
  }
}
class nr {
  constructor(t) {
    this.ft = !0, this.Ft = {
      yt: !1,
      V: "",
      mc: [],
      gc: "center",
      Mc: "center"
    }, this.Wt = new sr(this.Ft), this.jt = t
  }
  bt() {
    this.ft = !0
  }
  gt() {
    return this.ft && (this.Mt(), this.ft = !1), this.Wt
  }
  Mt() {
    const t = this.jt.W(),
      e = this.Ft;
    e.yt = t.visible, e.yt && (e.V = t.color, e.Mc = t.horzAlign, e.gc = t.vertAlign, e.mc = [{
      Kt: t.text,
      R: Nt(t.fontSize, t.fontFamily, t.fontStyle),
      wc: 1.2 * t.fontSize,
      xc: 0,
      Yu: 0
    }])
  }
}
class or extends mi {
  constructor(t, e) {
    super(), this.cn = e, this.wn = new nr(this)
  }
  Rn() {
    return []
  }
  Pn() {
    return [this.wn]
  }
  W() {
    return this.cn
  }
  Vn() {
    this.wn.bt()
  }
}
var Zi, Gi, qi, Qi, ts;
(function(n) {
  n[n.OnTouchEnd = 0] = "OnTouchEnd", n[n.OnNextTap = 1] = "OnNextTap"
})(Zi || (Zi = {}));
class hr {
  constructor(t, e, i) {
    this.kc = [], this.yc = [], this.o_ = 0, this.Cc = null, this.Tc = new K, this.Pc = new K, this.Rc = null, this.Dc = t, this.cn = e, this.U_ = i, this.Vc = new Bo(this), this.kl = new er(this, e.timeScale, this.cn.localization, i), this.vt = new Yo(this, e.crosshair), this.Oc = new Fh(e.crosshair), this.Bc = new or(this, e.watermark), this.Ac(), this.kc[0].M_(2e3), this.Ic = this.zc(0), this.Lc = this.zc(1)
  }
  Xl() {
    this.Ec(et.es())
  }
  $h() {
    this.Ec(et.ss())
  }
  aa() {
    this.Ec(new et(1))
  }
  Kl(t) {
    const e = this.Nc(t);
    this.Ec(e)
  }
  Fc() {
    return this.Cc
  }
  Wc(t) {
    const e = this.Cc;
    this.Cc = t, e !== null && this.Kl(e.jc), t !== null && this.Kl(t.jc)
  }
  W() {
    return this.cn
  }
  Hh(t) {
    ft(this.cn, t), this.kc.forEach(e => e.m_(t)), t.timeScale !== void 0 && this.kl.Hh(t.timeScale), t.localization !== void 0 && this.kl.ku(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Tc.m(), this.Ic = this.zc(0), this.Lc = this.zc(1), this.Xl()
  }
  Hc(t, e) {
    if (t === "left") return void this.Hh({
      leftPriceScale: e
    });
    if (t === "right") return void this.Hh({
      rightPriceScale: e
    });
    const i = this.$c(t);
    i !== null && (i.Dt.Hh(e), this.Tc.m())
  }
  $c(t) {
    for (const e of this.kc) {
      const i = e.b_(t);
      if (i !== null) return {
        Ht: e,
        Dt: i
      }
    }
    return null
  }
  St() {
    return this.kl
  }
  Uc() {
    return this.kc
  }
  qc() {
    return this.Bc
  }
  Yc() {
    return this.vt
  }
  Zc() {
    return this.Pc
  }
  Xc(t, e) {
    t.zo(e), this.Fu()
  }
  x_(t) {
    this.o_ = t, this.kl.x_(this.o_), this.kc.forEach(e => e.x_(t)), this.Fu()
  }
  Ac(t) {
    const e = new Gh(this.kl, this);
    t !== void 0 ? this.kc.splice(t, 0, e) : this.kc.push(e);
    const i = t === void 0 ? this.kc.length - 1 : t,
      s = et.es();
    return s.Nn(i, {
      Fn: 0,
      Wn: !0
    }), this.Ec(s), e
  }
  D_(t, e, i) {
    t.D_(e, i)
  }
  V_(t, e, i) {
    t.V_(e, i), this.Gl(), this.Ec(this.Kc(t, 2))
  }
  O_(t, e) {
    t.O_(e), this.Ec(this.Kc(t, 2))
  }
  B_(t, e, i) {
    e.Do() || t.B_(e, i)
  }
  A_(t, e, i) {
    e.Do() || (t.A_(e, i), this.Gl(), this.Ec(this.Kc(t, 2)))
  }
  I_(t, e) {
    e.Do() || (t.I_(e), this.Ec(this.Kc(t, 2)))
  }
  L_(t, e) {
    t.L_(e), this.Ec(this.Kc(t, 2))
  }
  Gc(t) {
    this.kl.Ko(t)
  }
  Jc(t, e) {
    const i = this.St();
    if (i.Ni() || e === 0) return;
    const s = i.Hi();
    t = Math.max(1, Math.min(t, s)), i.Yu(t, e), this.Fu()
  }
  Qc(t) {
    this.td(0), this.nd(t), this.sd()
  }
  ed(t) {
    this.kl.Go(t), this.Fu()
  }
  rd() {
    this.kl.Jo(), this.$h()
  }
  td(t) {
    this.kl.Qo(t)
  }
  nd(t) {
    this.kl.t_(t), this.Fu()
  }
  sd() {
    this.kl.i_(), this.$h()
  }
  wt() {
    return this.yc
  }
  hd(t, e, i, s, o) {
    this.vt.gn(t, e);
    let h = NaN,
      r = this.kl.Eu(t);
    const l = this.kl.Zs();
    l !== null && (r = Math.min(Math.max(l.Vs(), r), l.ui()));
    const a = s.vn(),
      c = a.Ct();
    c !== null && (h = a.pn(e, c)), h = this.Oc.Va(h, r, s), this.vt.kn(r, h, s), this.aa(), o || this.Pc.m(this.vt.xt(), {
      x: t,
      y: e
    }, i)
  }
  ld(t, e, i) {
    const s = i.vn(),
      o = s.Ct(),
      h = s.Rt(t, b(o)),
      r = this.kl.Da(e, !0),
      l = this.kl.It(b(r));
    this.hd(l, h, null, i, !0)
  }
  ad(t) {
    this.Yc().Cn(), this.aa(), t || this.Pc.m(null, null, null)
  }
  Gl() {
    const t = this.vt.Ht();
    if (t !== null) {
      const e = this.vt.xn(),
        i = this.vt.Sn();
      this.hd(e, i, null, t)
    }
    this.vt.Vn()
  }
  od(t, e, i) {
    const s = this.kl.mn(0);
    e !== void 0 && i !== void 0 && this.kl.bt(e, i);
    const o = this.kl.mn(0),
      h = this.kl.Lu(),
      r = this.kl.Zs();
    if (r !== null && s !== null && o !== null) {
      const l = r.Xr(h),
        a = this.U_.key(s) > this.U_.key(o),
        c = t !== null && t > h && !a,
        u = this.kl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
        d = l && (i !== void 0 || u) && this.kl.W().shiftVisibleRangeOnNewBar;
      if (c && !d) {
        const m = t - h;
        this.kl.Jn(this.kl.ju() - m)
      }
    }
    this.kl.qu(t)
  }
  ta(t) {
    t !== null && t.N_()
  }
  cr(t) {
    const e = this.kc.find(i => i.$o().includes(t));
    return e === void 0 ? null : e
  }
  Fu() {
    this.Bc.Vn(), this.kc.forEach(t => t.N_()), this.Gl()
  }
  S() {
    this.kc.forEach(t => t.S()), this.kc.length = 0, this.cn.localization.priceFormatter = void 0, this.cn.localization.percentageFormatter = void 0, this.cn.localization.timeFormatter = void 0
  }
  _d() {
    return this.Vc
  }
  mr() {
    return this.Vc.W()
  }
  w_() {
    return this.Tc
  }
  ud(t, e, i) {
    const s = this.kc[0],
      o = this.dd(e, t, s, i);
    return this.yc.push(o), this.yc.length === 1 ? this.Xl() : this.$h(), o
  }
  fd(t) {
    const e = this.cr(t),
      i = this.yc.indexOf(t);
    kt(i !== -1, "Series not found"), this.yc.splice(i, 1), b(e).Yo(t), t.S && t.S()
  }
  Zl(t, e) {
    const i = b(this.cr(t));
    i.Yo(t);
    const s = this.$c(e);
    if (s === null) {
      const o = t.Xi();
      i.Uo(t, e, o)
    } else {
      const o = s.Ht === i ? t.Xi() : void 0;
      s.Ht.Uo(t, e, o)
    }
  }
  rc() {
    const t = et.ss();
    t.$n(), this.Ec(t)
  }
  vd(t) {
    const e = et.ss();
    e.Yn(t), this.Ec(e)
  }
  Kn() {
    const t = et.ss();
    t.Kn(), this.Ec(t)
  }
  Gn(t) {
    const e = et.ss();
    e.Gn(t), this.Ec(e)
  }
  Jn(t) {
    const e = et.ss();
    e.Jn(t), this.Ec(e)
  }
  Zn(t) {
    const e = et.ss();
    e.Zn(t), this.Ec(e)
  }
  Un() {
    const t = et.ss();
    t.Un(), this.Ec(t)
  }
  pd() {
    return this.cn.rightPriceScale.visible ? "right" : "left"
  }
  md() {
    return this.Lc
  }
  q() {
    return this.Ic
  }
  Bt(t) {
    const e = this.Lc,
      i = this.Ic;
    if (e === i) return e;
    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), this.Rc === null || this.Rc.Ts !== i || this.Rc.Ps !== e) this.Rc = {
      Ts: i,
      Ps: e,
      bd: new Map
    };
    else {
      const o = this.Rc.bd.get(t);
      if (o !== void 0) return o
    }
    const s = function(o, h, r) {
      const [l, a, c, u] = Qt(o), [d, m, f, p] = Qt(h), g = [ct(l + r * (d - l)), ct(a + r * (m - a)), ct(c + r * (f - c)), Ws(u + r * (p - u))];
      return `rgba(${g[0]}, ${g[1]}, ${g[2]}, ${g[3]})`
    }(i, e, t / 100);
    return this.Rc.bd.set(t, s), s
  }
  Kc(t, e) {
    const i = new et(e);
    if (t !== null) {
      const s = this.kc.indexOf(t);
      i.Nn(s, {
        Fn: e
      })
    }
    return i
  }
  Nc(t, e) {
    return e === void 0 && (e = 2), this.Kc(this.cr(t), e)
  }
  Ec(t) {
    this.Dc && this.Dc(t), this.kc.forEach(e => e.W_().Uh().bt())
  }
  dd(t, e, i, s) {
    const o = new gi(this, t, e, i, s),
      h = t.priceScaleId !== void 0 ? t.priceScaleId : this.pd();
    return i.Uo(o, h), Ee(h) || o.Hh(t), o
  }
  zc(t) {
    const e = this.cn.layout;
    return e.background.type === "gradient" ? t === 0 ? e.background.topColor : e.background.bottomColor : e.background.color
  }
}

function oi(n) {
  return !vt(n) && !ne(n)
}

function sn(n) {
  return vt(n)
}(function(n) {
  n[n.Disabled = 0] = "Disabled", n[n.Continuous = 1] = "Continuous", n[n.OnDataUpdate = 2] = "OnDataUpdate"
})(Gi || (Gi = {})),
function(n) {
  n[n.LastBar = 0] = "LastBar", n[n.LastVisible = 1] = "LastVisible"
}(qi || (qi = {})),
function(n) {
  n.Solid = "solid", n.VerticalGradient = "gradient"
}(Qi || (Qi = {})),
function(n) {
  n[n.Year = 0] = "Year", n[n.Month = 1] = "Month", n[n.DayOfMonth = 2] = "DayOfMonth", n[n.Time = 3] = "Time", n[n.TimeWithSeconds = 4] = "TimeWithSeconds"
}(ts || (ts = {}));
const es = n => n.getUTCFullYear();

function rr(n, t, e) {
  return t.replace(/yyyy/g, (i => wt(es(i), 4))(n)).replace(/yy/g, (i => wt(es(i) % 100, 2))(n)).replace(/MMMM/g, ((i, s) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(s, {
    month: "long"
  }))(n, e)).replace(/MMM/g, ((i, s) => new Date(i.getUTCFullYear(), i.getUTCMonth(), 1).toLocaleString(s, {
    month: "short"
  }))(n, e)).replace(/MM/g, (i => wt((s => s.getUTCMonth() + 1)(i), 2))(n)).replace(/dd/g, (i => wt((s => s.getUTCDate())(i), 2))(n))
}
class nn {
  constructor(t = "yyyy-MM-dd", e = "default") {
    this.wd = t, this.gd = e
  }
  q_(t) {
    return rr(t, this.wd, this.gd)
  }
}
class lr {
  constructor(t) {
    this.Md = t || "%h:%m:%s"
  }
  q_(t) {
    return this.Md.replace("%h", wt(t.getUTCHours(), 2)).replace("%m", wt(t.getUTCMinutes(), 2)).replace("%s", wt(t.getUTCSeconds(), 2))
  }
}
const ar = {
  xd: "yyyy-MM-dd",
  Sd: "%h:%m:%s",
  kd: " ",
  yd: "default"
};
class cr {
  constructor(t = {}) {
    const e = Object.assign(Object.assign({}, ar), t);
    this.Cd = new nn(e.xd, e.yd), this.Td = new lr(e.Sd), this.Pd = e.kd
  }
  q_(t) {
    return `${this.Cd.q_(t)}${this.Pd}${this.Td.q_(t)}`
  }
}

function ue(n) {
  return 60 * n * 60 * 1e3
}

function Ne(n) {
  return 60 * n * 1e3
}
const de = [{
  Rd: (is = 1, 1e3 * is),
  Dd: 10
}, {
  Rd: Ne(1),
  Dd: 20
}, {
  Rd: Ne(5),
  Dd: 21
}, {
  Rd: Ne(30),
  Dd: 22
}, {
  Rd: ue(1),
  Dd: 30
}, {
  Rd: ue(3),
  Dd: 31
}, {
  Rd: ue(6),
  Dd: 32
}, {
  Rd: ue(12),
  Dd: 33
}];
var is;

function ss(n, t) {
  if (n.getUTCFullYear() !== t.getUTCFullYear()) return 70;
  if (n.getUTCMonth() !== t.getUTCMonth()) return 60;
  if (n.getUTCDate() !== t.getUTCDate()) return 50;
  for (let e = de.length - 1; e >= 0; --e)
    if (Math.floor(t.getTime() / de[e].Rd) !== Math.floor(n.getTime() / de[e].Rd)) return de[e].Dd;
  return 0
}

function Oe(n) {
  let t = n;
  if (ne(n) && (t = _i(n)), !oi(t)) throw new Error("time must be of type BusinessDay");
  const e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    Vd: Math.round(e.getTime() / 1e3),
    Od: t
  }
}

function ns(n) {
  if (!sn(n)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Vd: n
  }
}

function _i(n) {
  const t = new Date(n);
  if (isNaN(t.getTime())) throw new Error(`Invalid date string=${n}, expected format=yyyy-mm-dd`);
  return {
    day: t.getUTCDate(),
    month: t.getUTCMonth() + 1,
    year: t.getUTCFullYear()
  }
}

function os(n) {
  ne(n.time) && (n.time = _i(n.time))
}
class hs {
  options() {
    return this.cn
  }
  setOptions(t) {
    this.cn = t, this.updateFormatter(t.localization)
  }
  preprocessData(t) {
    Array.isArray(t) ? function(e) {
      e.forEach(os)
    }(t) : os(t)
  }
  createConverterToInternalObj(t) {
    return b(function(e) {
      return e.length === 0 ? null : oi(e[0].time) || ne(e[0].time) ? Oe : ns
    }(t))
  }
  key(t) {
    return typeof t == "object" && "Vd" in t ? t.Vd : this.key(this.convertHorzItemToInternal(t))
  }
  cacheKey(t) {
    const e = t;
    return e.Od === void 0 ? new Date(1e3 * e.Vd).getTime() : new Date(Date.UTC(e.Od.year, e.Od.month - 1, e.Od.day)).getTime()
  }
  convertHorzItemToInternal(t) {
    return sn(e = t) ? ns(e) : oi(e) ? Oe(e) : Oe(_i(e));
    var e
  }
  updateFormatter(t) {
    if (!this.cn) return;
    const e = t.dateFormat;
    this.cn.timeScale.timeVisible ? this.Bd = new cr({
      xd: e,
      Sd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
      kd: "   ",
      yd: t.locale
    }) : this.Bd = new nn(e, t.locale)
  }
  formatHorzItem(t) {
    const e = t;
    return this.Bd.q_(new Date(1e3 * e.Vd))
  }
  formatTickmark(t, e) {
    const i = function(o, h, r) {
        switch (o) {
          case 0:
          case 10:
            return h ? r ? 4 : 3 : 2;
          case 20:
          case 21:
          case 22:
          case 30:
          case 31:
          case 32:
          case 33:
            return h ? 3 : 2;
          case 50:
            return 2;
          case 60:
            return 1;
          case 70:
            return 0
        }
      }(t.weight, this.cn.timeScale.timeVisible, this.cn.timeScale.secondsVisible),
      s = this.cn.timeScale;
    if (s.tickMarkFormatter !== void 0) {
      const o = s.tickMarkFormatter(t.originalTime, i, e.locale);
      if (o !== null) return o
    }
    return function(o, h, r) {
      const l = {};
      switch (h) {
        case 0:
          l.year = "numeric";
          break;
        case 1:
          l.month = "short";
          break;
        case 2:
          l.day = "numeric";
          break;
        case 3:
          l.hour12 = !1, l.hour = "2-digit", l.minute = "2-digit";
          break;
        case 4:
          l.hour12 = !1, l.hour = "2-digit", l.minute = "2-digit", l.second = "2-digit"
      }
      const a = o.Od === void 0 ? new Date(1e3 * o.Vd) : new Date(Date.UTC(o.Od.year, o.Od.month - 1, o.Od.day));
      return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()).toLocaleString(r, l)
    }(t.time, i, e.locale)
  }
  maxTickMarkWeight(t) {
    let e = t.reduce(tr, t[0]).weight;
    return e > 30 && e < 50 && (e = 30), e
  }
  fillWeightsForPoints(t, e) {
    (function(i, s = 0) {
      if (i.length === 0) return;
      let o = s === 0 ? null : i[s - 1].time.Vd,
        h = o !== null ? new Date(1e3 * o) : null,
        r = 0;
      for (let l = s; l < i.length; ++l) {
        const a = i[l],
          c = new Date(1e3 * a.time.Vd);
        h !== null && (a.timeWeight = ss(c, h)), r += a.time.Vd - (o || a.time.Vd), o = a.time.Vd, h = c
      }
      if (s === 0 && i.length > 1) {
        const l = Math.ceil(r / (i.length - 1)),
          a = new Date(1e3 * (i[0].time.Vd - l));
        i[0].timeWeight = ss(new Date(1e3 * i[0].time.Vd), a)
      }
    })(t, e)
  }
  static Ad(t) {
    return ft({
      localization: {
        dateFormat: "dd MMM 'yy"
      }
    }, t ?? {})
  }
}
const Ot = typeof window < "u";

function rs() {
  return !!Ot && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
}

function Ue() {
  return !!Ot && /iPhone|iPad|iPod/.test(window.navigator.platform)
}

function hi(n) {
  return n + n % 2
}

function Fe(n, t) {
  return n.Id - t.Id
}

function Je(n, t, e) {
  const i = (n.Id - t.Id) / (n.ot - t.ot);
  return Math.sign(i) * Math.min(Math.abs(i), e)
}
class ur {
  constructor(t, e, i, s) {
    this.zd = null, this.Ld = null, this.Ed = null, this.Nd = null, this.Fd = null, this.Wd = 0, this.jd = 0, this.Hd = t, this.$d = e, this.Ud = i, this.rs = s
  }
  qd(t, e) {
    if (this.zd !== null) {
      if (this.zd.ot === e) return void(this.zd.Id = t);
      if (Math.abs(this.zd.Id - t) < this.rs) return
    }
    this.Nd = this.Ed, this.Ed = this.Ld, this.Ld = this.zd, this.zd = {
      ot: e,
      Id: t
    }
  }
  Dr(t, e) {
    if (this.zd === null || this.Ld === null || e - this.zd.ot > 50) return;
    let i = 0;
    const s = Je(this.zd, this.Ld, this.$d),
      o = Fe(this.zd, this.Ld),
      h = [s],
      r = [o];
    if (i += o, this.Ed !== null) {
      const a = Je(this.Ld, this.Ed, this.$d);
      if (Math.sign(a) === Math.sign(s)) {
        const c = Fe(this.Ld, this.Ed);
        if (h.push(a), r.push(c), i += c, this.Nd !== null) {
          const u = Je(this.Ed, this.Nd, this.$d);
          if (Math.sign(u) === Math.sign(s)) {
            const d = Fe(this.Ed, this.Nd);
            h.push(u), r.push(d), i += d
          }
        }
      }
    }
    let l = 0;
    for (let a = 0; a < h.length; ++a) l += r[a] / i * h[a];
    Math.abs(l) < this.Hd || (this.Fd = {
      Id: t,
      ot: e
    }, this.jd = l, this.Wd = function(a, c) {
      const u = Math.log(c);
      return Math.log(1 * u / -a) / u
    }(Math.abs(l), this.Ud))
  }
  Qu(t) {
    const e = b(this.Fd),
      i = t - e.ot;
    return e.Id + this.jd * (Math.pow(this.Ud, i) - 1) / Math.log(this.Ud)
  }
  Ju(t) {
    return this.Fd === null || this.Yd(t) === this.Wd
  }
  Yd(t) {
    const e = t - b(this.Fd).ot;
    return Math.min(e, this.Wd)
  }
}
class dr {
  constructor(t, e) {
    this.Zd = void 0, this.Xd = void 0, this.Kd = void 0, this.en = !1, this.Gd = t, this.Jd = e, this.Qd()
  }
  bt() {
    this.Qd()
  }
  tf() {
    this.Zd && this.Gd.removeChild(this.Zd), this.Xd && this.Gd.removeChild(this.Xd), this.Zd = void 0, this.Xd = void 0
  }
  if () {
    return this.en !== this.nf() || this.Kd !== this.sf()
  }
  sf() {
    return Bs(Qt(this.Jd.W().layout.textColor)) > 160 ? "dark" : "light"
  }
  nf() {
    return this.Jd.W().layout.attributionLogo
  }
  ef() {
    const t = new URL(location.href);
    return t.hostname ? "&utm_source=" + t.hostname + t.pathname : ""
  }
  Qd() {
    this.if() && (this.tf(), this.en = this.nf(), this.en && (this.Kd = this.sf(), this.Xd = document.createElement("style"), this.Xd.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.Zd = document.createElement("a"), this.Zd.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.ef()}`, this.Zd.title = "Charting by TradingView", this.Zd.id = "tv-attr-logo", this.Zd.target = "_blank", this.Zd.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 19" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.Zd.toggleAttribute("data-dark", this.Kd === "dark"), this.Gd.appendChild(this.Xd), this.Gd.appendChild(this.Zd)))
  }
}

function $t(n, t) {
  const e = b(n.ownerDocument).createElement("canvas");
  n.appendChild(e);
  const i = So(e, {
    type: "device-pixel-content-box",
    options: {
      allowResizeObserver: !1
    },
    transform: (s, o) => ({
      width: Math.max(s.width, o.width),
      height: Math.max(s.height, o.height)
    })
  });
  return i.resizeCanvasElement(t), i
}

function Pt(n) {
  var t;
  n.width = 1, n.height = 1, (t = n.getContext("2d")) === null || t === void 0 || t.clearRect(0, 0, 1, 1)
}

function ri(n, t, e, i) {
  n.wl && n.wl(t, e, i)
}

function be(n, t, e, i) {
  n.X(t, e, i)
}

function li(n, t, e, i) {
  const s = n(e, i);
  for (const o of s) {
    const h = o.gt();
    h !== null && t(h)
  }
}

function fr(n) {
  Ot && window.chrome !== void 0 && n.addEventListener("mousedown", t => {
    if (t.button === 1) return t.preventDefault(), !1
  })
}
class wi {
  constructor(t, e, i) {
    this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }, this.cf = null, this.df = !1, this.ff = null, this.vf = null, this.pf = !1, this.mf = !1, this.bf = !1, this.wf = null, this.gf = null, this.Mf = null, this.xf = null, this.Sf = null, this.kf = null, this.yf = null, this.Cf = 0, this.Tf = !1, this.Pf = !1, this.Rf = !1, this.Df = 0, this.Vf = null, this.Of = !Ue(), this.Bf = s => {
      this.Af(s)
    }, this.If = s => {
      if (this.zf(s)) {
        const o = this.Lf(s);
        if (++this.af, this._f && this.af > 1) {
          const {
            Ef: h
          } = this.Nf(pt(s), this.uf);
          h < 30 && !this.bf && this.Ff(o, this.jf.Wf), this.Hf()
        }
      } else {
        const o = this.Lf(s);
        if (++this.rf, this.hf && this.rf > 1) {
          const {
            Ef: h
          } = this.Nf(pt(s), this.lf);
          h < 5 && !this.mf && this.$f(o, this.jf.Uf), this.qf()
        }
      }
    }, this.Yf = t, this.jf = e, this.cn = i, this.Zf()
  }
  S() {
    this.wf !== null && (this.wf(), this.wf = null), this.gf !== null && (this.gf(), this.gf = null), this.xf !== null && (this.xf(), this.xf = null), this.Sf !== null && (this.Sf(), this.Sf = null), this.kf !== null && (this.kf(), this.kf = null), this.Mf !== null && (this.Mf(), this.Mf = null), this.Xf(), this.qf()
  }
  Kf(t) {
    this.xf && this.xf();
    const e = this.Gf.bind(this);
    if (this.xf = () => {
        this.Yf.removeEventListener("mousemove", e)
      }, this.Yf.addEventListener("mousemove", e), this.zf(t)) return;
    const i = this.Lf(t);
    this.$f(i, this.jf.Jf), this.Of = !0
  }
  qf() {
    this.hf !== null && clearTimeout(this.hf), this.rf = 0, this.hf = null, this.lf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }
  }
  Hf() {
    this._f !== null && clearTimeout(this._f), this.af = 0, this._f = null, this.uf = {
      nt: Number.NEGATIVE_INFINITY,
      st: Number.POSITIVE_INFINITY
    }
  }
  Gf(t) {
    if (this.Rf || this.vf !== null || this.zf(t)) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Qf), this.Of = !0
  }
  tv(t) {
    const e = Ke(t.changedTouches, b(this.Vf));
    if (e === null || (this.Df = fe(t), this.yf !== null) || this.Pf) return;
    this.Tf = !0;
    const i = this.Nf(pt(e), b(this.vf)),
      {
        iv: s,
        nv: o,
        Ef: h
      } = i;
    if (this.pf || !(h < 5)) {
      if (!this.pf) {
        const r = .5 * s,
          l = o >= r && !this.cn.sv(),
          a = r > o && !this.cn.ev();
        l || a || (this.Pf = !0), this.pf = !0, this.bf = !0, this.Xf(), this.Hf()
      }
      if (!this.Pf) {
        const r = this.Lf(t, e);
        this.Ff(r, this.jf.rv), Vt(t)
      }
    }
  }
  hv(t) {
    if (t.button !== 0) return;
    const e = this.Nf(pt(t), b(this.ff)),
      {
        Ef: i
      } = e;
    if (i >= 5 && (this.mf = !0, this.qf()), this.mf) {
      const s = this.Lf(t);
      this.$f(s, this.jf.lv)
    }
  }
  Nf(t, e) {
    const i = Math.abs(e.nt - t.nt),
      s = Math.abs(e.st - t.st);
    return {
      iv: i,
      nv: s,
      Ef: i + s
    }
  }
  av(t) {
    let e = Ke(t.changedTouches, b(this.Vf));
    if (e === null && t.touches.length === 0 && (e = t.changedTouches[0]), e === null) return;
    this.Vf = null, this.Df = fe(t), this.Xf(), this.vf = null, this.kf && (this.kf(), this.kf = null);
    const i = this.Lf(t, e);
    if (this.Ff(i, this.jf.ov), ++this.af, this._f && this.af > 1) {
      const {
        Ef: s
      } = this.Nf(pt(e), this.uf);
      s < 30 && !this.bf && this.Ff(i, this.jf.Wf), this.Hf()
    } else this.bf || (this.Ff(i, this.jf._v), this.jf._v && Vt(t));
    this.af === 0 && Vt(t), t.touches.length === 0 && this.df && (this.df = !1, Vt(t))
  }
  Af(t) {
    if (t.button !== 0) return;
    const e = this.Lf(t);
    if (this.ff = null, this.Rf = !1, this.Sf && (this.Sf(), this.Sf = null), rs() && this.Yf.ownerDocument.documentElement.removeEventListener("mouseleave", this.Bf), !this.zf(t))
      if (this.$f(e, this.jf.uv), ++this.rf, this.hf && this.rf > 1) {
        const {
          Ef: i
        } = this.Nf(pt(t), this.lf);
        i < 5 && !this.mf && this.$f(e, this.jf.Uf), this.qf()
      } else this.mf || this.$f(e, this.jf.cv)
  }
  Xf() {
    this.cf !== null && (clearTimeout(this.cf), this.cf = null)
  }
  dv(t) {
    if (this.Vf !== null) return;
    const e = t.changedTouches[0];
    this.Vf = e.identifier, this.Df = fe(t);
    const i = this.Yf.ownerDocument.documentElement;
    this.bf = !1, this.pf = !1, this.Pf = !1, this.vf = pt(e), this.kf && (this.kf(), this.kf = null);
    {
      const o = this.tv.bind(this),
        h = this.av.bind(this);
      this.kf = () => {
        i.removeEventListener("touchmove", o), i.removeEventListener("touchend", h)
      }, i.addEventListener("touchmove", o, {
        passive: !1
      }), i.addEventListener("touchend", h, {
        passive: !1
      }), this.Xf(), this.cf = setTimeout(this.fv.bind(this, t), 240)
    }
    const s = this.Lf(t, e);
    this.Ff(s, this.jf.vv), this._f || (this.af = 0, this._f = setTimeout(this.Hf.bind(this), 500), this.uf = pt(e))
  }
  pv(t) {
    if (t.button !== 0) return;
    const e = this.Yf.ownerDocument.documentElement;
    rs() && e.addEventListener("mouseleave", this.Bf), this.mf = !1, this.ff = pt(t), this.Sf && (this.Sf(), this.Sf = null);
    {
      const s = this.hv.bind(this),
        o = this.Af.bind(this);
      this.Sf = () => {
        e.removeEventListener("mousemove", s), e.removeEventListener("mouseup", o)
      }, e.addEventListener("mousemove", s), e.addEventListener("mouseup", o)
    }
    if (this.Rf = !0, this.zf(t)) return;
    const i = this.Lf(t);
    this.$f(i, this.jf.mv), this.hf || (this.rf = 0, this.hf = setTimeout(this.qf.bind(this), 500), this.lf = pt(t))
  }
  Zf() {
    this.Yf.addEventListener("mouseenter", this.Kf.bind(this)), this.Yf.addEventListener("touchcancel", this.Xf.bind(this));
    {
      const t = this.Yf.ownerDocument,
        e = i => {
          this.jf.bv && (i.composed && this.Yf.contains(i.composedPath()[0]) || i.target && this.Yf.contains(i.target) || this.jf.bv())
        };
      this.gf = () => {
        t.removeEventListener("touchstart", e)
      }, this.wf = () => {
        t.removeEventListener("mousedown", e)
      }, t.addEventListener("mousedown", e), t.addEventListener("touchstart", e, {
        passive: !0
      })
    }
    Ue() && (this.Mf = () => {
      this.Yf.removeEventListener("dblclick", this.If)
    }, this.Yf.addEventListener("dblclick", this.If)), this.Yf.addEventListener("mouseleave", this.wv.bind(this)), this.Yf.addEventListener("touchstart", this.dv.bind(this), {
      passive: !0
    }), fr(this.Yf), this.Yf.addEventListener("mousedown", this.pv.bind(this)), this.gv(), this.Yf.addEventListener("touchmove", () => {}, {
      passive: !1
    })
  }
  gv() {
    this.jf.Mv === void 0 && this.jf.xv === void 0 && this.jf.Sv === void 0 || (this.Yf.addEventListener("touchstart", t => this.kv(t.touches), {
      passive: !0
    }), this.Yf.addEventListener("touchmove", t => {
      if (t.touches.length === 2 && this.yf !== null && this.jf.xv !== void 0) {
        const e = ls(t.touches[0], t.touches[1]) / this.Cf;
        this.jf.xv(this.yf, e), Vt(t)
      }
    }, {
      passive: !1
    }), this.Yf.addEventListener("touchend", t => {
      this.kv(t.touches)
    }))
  }
  kv(t) {
    t.length === 1 && (this.Tf = !1), t.length !== 2 || this.Tf || this.df ? this.yv() : this.Cv(t)
  }
  Cv(t) {
    const e = this.Yf.getBoundingClientRect() || {
      left: 0,
      top: 0
    };
    this.yf = {
      nt: (t[0].clientX - e.left + (t[1].clientX - e.left)) / 2,
      st: (t[0].clientY - e.top + (t[1].clientY - e.top)) / 2
    }, this.Cf = ls(t[0], t[1]), this.jf.Mv !== void 0 && this.jf.Mv(), this.Xf()
  }
  yv() {
    this.yf !== null && (this.yf = null, this.jf.Sv !== void 0 && this.jf.Sv())
  }
  wv(t) {
    if (this.xf && this.xf(), this.zf(t) || !this.Of) return;
    const e = this.Lf(t);
    this.$f(e, this.jf.Tv), this.Of = !Ue()
  }
  fv(t) {
    const e = Ke(t.touches, b(this.Vf));
    if (e === null) return;
    const i = this.Lf(t, e);
    this.Ff(i, this.jf.Pv), this.bf = !0, this.df = !0
  }
  zf(t) {
    return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents !== void 0 ? t.sourceCapabilities.firesTouchEvents : fe(t) < this.Df + 500
  }
  Ff(t, e) {
    e && e.call(this.jf, t)
  }
  $f(t, e) {
    e && e.call(this.jf, t)
  }
  Lf(t, e) {
    const i = e || t,
      s = this.Yf.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
    return {
      clientX: i.clientX,
      clientY: i.clientY,
      pageX: i.pageX,
      pageY: i.pageY,
      screenX: i.screenX,
      screenY: i.screenY,
      localX: i.clientX - s.left,
      localY: i.clientY - s.top,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      shiftKey: t.shiftKey,
      metaKey: t.metaKey,
      Rv: !t.type.startsWith("mouse") && t.type !== "contextmenu" && t.type !== "click",
      Dv: t.type,
      Vv: i.target,
      Ov: t.view,
      Bv: () => {
        t.type !== "touchstart" && Vt(t)
      }
    }
  }
}

function ls(n, t) {
  const e = n.clientX - t.clientX,
    i = n.clientY - t.clientY;
  return Math.sqrt(e * e + i * i)
}

function Vt(n) {
  n.cancelable && n.preventDefault()
}

function pt(n) {
  return {
    nt: n.pageX,
    st: n.pageY
  }
}

function fe(n) {
  return n.timeStamp || performance.now()
}

function Ke(n, t) {
  for (let e = 0; e < n.length; ++e)
    if (n[e].identifier === t) return n[e];
  return null
}

function me(n) {
  return {
    jc: n.jc,
    Av: {
      wr: n.Iv.externalId
    },
    zv: n.Iv.cursorStyle
  }
}

function mr(n, t, e) {
  for (const i of n) {
    const s = i.gt();
    if (s !== null && s.br) {
      const o = s.br(t, e);
      if (o !== null) return {
        Ov: i,
        Av: o
      }
    }
  }
  return null
}

function Xe(n, t) {
  return e => {
    var i, s, o, h;
    return ((s = (i = e.Dt()) === null || i === void 0 ? void 0 : i.Ta()) !== null && s !== void 0 ? s : "") !== t ? [] : (h = (o = e.ca) === null || o === void 0 ? void 0 : o.call(e, n)) !== null && h !== void 0 ? h : []
  }
}

function as(n, t, e, i) {
  if (!n.length) return;
  let s = 0;
  const o = e / 2,
    h = n[0].At(i, !0);
  let r = t === 1 ? o - (n[0].Vi() - h / 2) : n[0].Vi() - h / 2 - o;
  r = Math.max(0, r);
  for (let l = 1; l < n.length; l++) {
    const a = n[l],
      c = n[l - 1],
      u = c.At(i, !1),
      d = a.Vi(),
      m = c.Vi();
    if (t === 1 ? d > m - u : d < m + u) {
      const f = m - u * t;
      a.Oi(f);
      const p = f - t * u / 2;
      if ((t === 1 ? p < 0 : p > e) && r > 0) {
        const g = t === 1 ? -1 - p : p - e,
          _ = Math.min(g, r);
        for (let S = s; S < n.length; S++) n[S].Oi(n[S].Vi() + t * _);
        r -= _
      }
    } else s = l, r = t === 1 ? m - u - d : d - (m + u)
  }
}
class cs {
  constructor(t, e, i, s) {
    this.Li = null, this.Lv = null, this.Ev = !1, this.Nv = new ie(200), this.Jr = null, this.Fv = 0, this.Wv = !1, this.jv = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.$v = () => {
      this.Wv || this.tn.Hv().$t().$h()
    }, this.tn = t, this.cn = e, this.So = e.layout, this.Vc = i, this.Uv = s === "left", this.qv = Xe("normal", s), this.Yv = Xe("top", s), this.Zv = Xe("bottom", s), this.Xv = document.createElement("div"), this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Xv.style.width = "25px", this.Xv.style.left = "0", this.Xv.style.position = "relative", this.Kv = $t(this.Xv, D({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const o = this.Kv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.Gv = $t(this.Xv, D({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const h = this.Gv.canvasElement;
    h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0";
    const r = {
      mv: this.Jv.bind(this),
      vv: this.Jv.bind(this),
      lv: this.Qv.bind(this),
      rv: this.Qv.bind(this),
      bv: this.tp.bind(this),
      uv: this.ip.bind(this),
      ov: this.ip.bind(this),
      Uf: this.np.bind(this),
      Wf: this.np.bind(this),
      Jf: this.sp.bind(this),
      Tv: this.ep.bind(this)
    };
    this.rp = new wi(this.Gv.canvasElement, r, {
      sv: () => !this.cn.handleScroll.vertTouchDrag,
      ev: () => !0
    })
  }
  S() {
    this.rp.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Pt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Pt(this.Kv.canvasElement), this.Kv.dispose(), this.Li !== null && this.Li.Xo().p(this), this.Li = null
  }
  hp() {
    return this.Xv
  }
  P() {
    return this.So.fontSize
  }
  lp() {
    const t = this.Vc.W();
    return this.Jr !== t.R && (this.Nv.ir(), this.Jr = t.R), t
  }
  ap() {
    if (this.Li === null) return 0;
    let t = 0;
    const e = this.lp(),
      i = b(this.Kv.canvasElement.getContext("2d"));
    i.save();
    const s = this.Li.ja();
    i.font = this.op(), s.length > 0 && (t = Math.max(this.Nv.xi(i, s[0].no), this.Nv.xi(i, s[s.length - 1].no)));
    const o = this._p();
    for (let l = o.length; l--;) {
      const a = this.Nv.xi(i, o[l].Kt());
      a > t && (t = a)
    }
    const h = this.Li.Ct();
    if (h !== null && this.Lv !== null) {
      const l = this.Li.pn(1, h),
        a = this.Li.pn(this.Lv.height - 2, h);
      t = Math.max(t, this.Nv.xi(i, this.Li.Fi(Math.floor(Math.min(l, a)) + .11111111111111, h)), this.Nv.xi(i, this.Li.Fi(Math.ceil(Math.max(l, a)) - .11111111111111, h)))
    }
    i.restore();
    const r = t || 34;
    return hi(Math.ceil(e.C + e.T + e.A + e.I + 5 + r))
  }
  up(t) {
    this.Lv !== null && Lt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`)
  }
  cp() {
    return b(this.Lv).width
  }
  Gi(t) {
    this.Li !== t && (this.Li !== null && this.Li.Xo().p(this), this.Li = t, t.Xo().l(this.do.bind(this), this))
  }
  Dt() {
    return this.Li
  }
  ir() {
    const t = this.tn.dp();
    this.tn.Hv().$t().L_(t, b(this.Dt()))
  }
  fp(t) {
    if (this.Lv === null) return;
    if (t !== 1) {
      this.vp(), this.Kv.applySuggestedBitmapSize();
      const i = Et(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(s => {
        this.pp(s), this.Ae(s)
      }), this.tn.mp(i, this.Zv), this.bp(i), this.tn.mp(i, this.qv), this.wp(i))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Et(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: s
    }) => {
      i.clearRect(0, 0, s.width, s.height)
    }), this.gp(e), this.tn.mp(e, this.Yv))
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  bt() {
    var t;
    (t = this.Li) === null || t === void 0 || t.ja()
  }
  Jv(t) {
    if (this.Li === null || this.Li.Ni() || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      i = this.tn.dp();
    this.Ev = !0, e.D_(i, this.Li, t.localY)
  }
  Qv(t) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      i = this.tn.dp(),
      s = this.Li;
    e.V_(i, s, t.localY)
  }
  tp() {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const t = this.tn.Hv().$t(),
      e = this.tn.dp(),
      i = this.Li;
    this.Ev && (this.Ev = !1, t.O_(e, i))
  }
  ip(t) {
    if (this.Li === null || !this.cn.handleScale.axisPressedMouseMove.price) return;
    const e = this.tn.Hv().$t(),
      i = this.tn.dp();
    this.Ev = !1, e.O_(i, this.Li)
  }
  np(t) {
    this.cn.handleScale.axisDoubleClickReset.price && this.ir()
  }
  sp(t) {
    this.Li !== null && (!this.tn.Hv().$t().W().handleScale.axisPressedMouseMove.price || this.Li.gh() || this.Li.Vo() || this.Sp(1))
  }
  ep(t) {
    this.Sp(0)
  }
  _p() {
    const t = [],
      e = this.Li === null ? void 0 : this.Li;
    return (i => {
      for (let s = 0; s < i.length; ++s) {
        const o = i[s].Rn(this.tn.dp(), e);
        for (let h = 0; h < o.length; h++) t.push(o[h])
      }
    })(this.tn.dp().$o()), t
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: i,
      height: s
    } = e, o = this.tn.dp().$t(), h = o.q(), r = o.md();
    h === r ? Le(t, 0, 0, i, s, h) : As(t, 0, 0, i, s, h, r)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i
  }) {
    if (this.Lv === null || this.Li === null || !this.Li.W().borderVisible) return;
    t.fillStyle = this.Li.W().borderColor;
    const s = Math.max(1, Math.floor(this.lp().C * i));
    let o;
    o = this.Uv ? e.width - s : 0, t.fillRect(o, 0, s, e.height)
  }
  bp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.Li.ja(),
      i = this.Li.W(),
      s = this.lp(),
      o = this.Uv ? this.Lv.width - s.T : 0;
    i.borderVisible && i.ticksVisible && t.useBitmapCoordinateSpace(({
      context: h,
      horizontalPixelRatio: r,
      verticalPixelRatio: l
    }) => {
      h.fillStyle = i.borderColor;
      const a = Math.max(1, Math.floor(l)),
        c = Math.floor(.5 * l),
        u = Math.round(s.T * r);
      h.beginPath();
      for (const d of e) h.rect(Math.floor(o * r), Math.round(d.La * l) - c, u, a);
      h.fill()
    }), t.useMediaCoordinateSpace(({
      context: h
    }) => {
      var r;
      h.font = this.op(), h.fillStyle = (r = i.textColor) !== null && r !== void 0 ? r : this.So.textColor, h.textAlign = this.Uv ? "right" : "left", h.textBaseline = "middle";
      const l = this.Uv ? Math.round(o - s.A) : Math.round(o + s.T + s.A),
        a = e.map(c => this.Nv.Mi(h, c.no));
      for (let c = e.length; c--;) {
        const u = e[c];
        h.fillText(u.no, l, u.La + a[c])
      }
    })
  }
  vp() {
    if (this.Lv === null || this.Li === null) return;
    const t = [],
      e = this.Li.$o().slice(),
      i = this.tn.dp(),
      s = this.lp();
    this.Li === i.vr() && this.tn.dp().$o().forEach(h => {
      i.dr(h) && e.push(h)
    });
    const o = this.Li;
    e.forEach(h => {
      h.Rn(i, o).forEach(r => {
        r.Oi(null), r.Bi() && t.push(r)
      })
    }), t.forEach(h => h.Oi(h.ki())), this.Li.W().alignLabels && this.kp(t, s)
  }
  kp(t, e) {
    if (this.Lv === null) return;
    const i = this.Lv.height / 2,
      s = t.filter(h => h.ki() <= i),
      o = t.filter(h => h.ki() > i);
    s.sort((h, r) => r.ki() - h.ki()), o.sort((h, r) => h.ki() - r.ki());
    for (const h of t) {
      const r = Math.floor(h.At(e) / 2),
        l = h.ki();
      l > -r && l < r && h.Oi(r), l > this.Lv.height - r && l < this.Lv.height + r && h.Oi(this.Lv.height - r)
    }
    as(s, 1, this.Lv.height, e), as(o, -1, this.Lv.height, e)
  }
  wp(t) {
    if (this.Lv === null) return;
    const e = this._p(),
      i = this.lp(),
      s = this.Uv ? "right" : "left";
    e.forEach(o => {
      o.Ai() && o.gt(b(this.Li)).X(t, i, this.Nv, s)
    })
  }
  gp(t) {
    if (this.Lv === null || this.Li === null) return;
    const e = this.tn.Hv().$t(),
      i = [],
      s = this.tn.dp(),
      o = e.Yc().Rn(s, this.Li);
    o.length && i.push(o);
    const h = this.lp(),
      r = this.Uv ? "right" : "left";
    i.forEach(l => {
      l.forEach(a => {
        a.gt(b(this.Li)).X(t, h, this.Nv, r)
      })
    })
  }
  Sp(t) {
    this.Xv.style.cursor = t === 1 ? "ns-resize" : "default"
  }
  do() {
    const t = this.ap();
    this.Fv < t && this.tn.Hv().$t().Xl(), this.Fv = t
  }
  op() {
    return Nt(this.So.fontSize, this.So.fontFamily)
  }
}

function pr(n, t) {
  var e, i;
  return (i = (e = n._a) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}

function pe(n, t) {
  var e, i;
  return (i = (e = n.Pn) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}

function vr(n, t) {
  var e, i;
  return (i = (e = n.Ji) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}

function br(n, t) {
  var e, i;
  return (i = (e = n.la) === null || e === void 0 ? void 0 : e.call(n, t)) !== null && i !== void 0 ? i : []
}
class yi {
  constructor(t, e) {
    this.Lv = D({
      width: 0,
      height: 0
    }), this.yp = null, this.Cp = null, this.Tp = null, this.Pp = null, this.Rp = !1, this.Dp = new K, this.Vp = new K, this.Op = 0, this.Bp = !1, this.Ap = null, this.Ip = !1, this.zp = null, this.Lp = null, this.Wv = !1, this.jv = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.$v = () => {
      this.Wv || this.Ep === null || this.$i().$h()
    }, this.Jd = t, this.Ep = e, this.Ep.F_().l(this.Np.bind(this), this, !0), this.Fp = document.createElement("td"), this.Fp.style.padding = "0", this.Fp.style.position = "relative";
    const i = document.createElement("div");
    i.style.width = "100%", i.style.height = "100%", i.style.position = "relative", i.style.overflow = "hidden", this.Wp = document.createElement("td"), this.Wp.style.padding = "0", this.jp = document.createElement("td"), this.jp.style.padding = "0", this.Fp.appendChild(i), this.Kv = $t(i, D({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const s = this.Kv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Gv = $t(i, D({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const o = this.Gv.canvasElement;
    o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.Hp = document.createElement("tr"), this.Hp.appendChild(this.Wp), this.Hp.appendChild(this.Fp), this.Hp.appendChild(this.jp), this.$p(), this.rp = new wi(this.Gv.canvasElement, this, {
      sv: () => this.Ap === null && !this.Jd.W().handleScroll.vertTouchDrag,
      ev: () => this.Ap === null && !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.yp !== null && this.yp.S(), this.Cp !== null && this.Cp.S(), this.Tp = null, this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Pt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Pt(this.Kv.canvasElement), this.Kv.dispose(), this.Ep !== null && this.Ep.F_().p(this), this.rp.S()
  }
  dp() {
    return b(this.Ep)
  }
  Up(t) {
    var e, i;
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = t, this.Ep !== null && this.Ep.F_().l(yi.prototype.Np.bind(this), this, !0), this.$p(), this.Jd.qp().indexOf(this) === this.Jd.qp().length - 1 ? (this.Tp = (e = this.Tp) !== null && e !== void 0 ? e : new dr(this.Fp, this.Jd), this.Tp.bt()) : ((i = this.Tp) === null || i === void 0 || i.tf(), this.Tp = null)
  }
  Hv() {
    return this.Jd
  }
  hp() {
    return this.Hp
  }
  $p() {
    if (this.Ep !== null && (this.Yp(), this.$i().wt().length !== 0)) {
      if (this.yp !== null) {
        const t = this.Ep.P_();
        this.yp.Gi(b(t))
      }
      if (this.Cp !== null) {
        const t = this.Ep.R_();
        this.Cp.Gi(b(t))
      }
    }
  }
  Zp() {
    this.yp !== null && this.yp.bt(), this.Cp !== null && this.Cp.bt()
  }
  g_() {
    return this.Ep !== null ? this.Ep.g_() : 0
  }
  M_(t) {
    this.Ep && this.Ep.M_(t)
  }
  Jf(t) {
    if (!this.Ep) return;
    this.Xp();
    const e = t.localX,
      i = t.localY;
    this.Kp(e, i, t)
  }
  mv(t) {
    this.Xp(), this.Gp(), this.Kp(t.localX, t.localY, t)
  }
  Qf(t) {
    var e;
    if (!this.Ep) return;
    this.Xp();
    const i = t.localX,
      s = t.localY;
    this.Kp(i, s, t);
    const o = this.br(i, s);
    this.Jd.Jp((e = o == null ? void 0 : o.zv) !== null && e !== void 0 ? e : null), this.$i().Wc(o && {
      jc: o.jc,
      Av: o.Av
    })
  }
  cv(t) {
    this.Ep !== null && (this.Xp(), this.Qp(t))
  }
  Uf(t) {
    this.Ep !== null && this.tm(this.Vp, t)
  }
  Wf(t) {
    this.Uf(t)
  }
  lv(t) {
    this.Xp(), this.im(t), this.Kp(t.localX, t.localY, t)
  }
  uv(t) {
    this.Ep !== null && (this.Xp(), this.Bp = !1, this.nm(t))
  }
  _v(t) {
    this.Ep !== null && this.Qp(t)
  }
  Pv(t) {
    if (this.Bp = !0, this.Ap === null) {
      const e = {
        x: t.localX,
        y: t.localY
      };
      this.sm(e, e, t)
    }
  }
  Tv(t) {
    this.Ep !== null && (this.Xp(), this.Ep.$t().Wc(null), this.rm())
  }
  hm() {
    return this.Dp
  }
  lm() {
    return this.Vp
  }
  Mv() {
    this.Op = 1, this.$i().Un()
  }
  xv(t, e) {
    if (!this.Jd.W().handleScale.pinch) return;
    const i = 5 * (e - this.Op);
    this.Op = e, this.$i().Jc(t.nt, i)
  }
  vv(t) {
    this.Bp = !1, this.Ip = this.Ap !== null, this.Gp();
    const e = this.$i().Yc();
    this.Ap !== null && e.yt() && (this.zp = {
      x: e.Yt(),
      y: e.Zt()
    }, this.Ap = {
      x: t.localX,
      y: t.localY
    })
  }
  rv(t) {
    if (this.Ep === null) return;
    const e = t.localX,
      i = t.localY;
    if (this.Ap === null) this.im(t);
    else {
      this.Ip = !1;
      const s = b(this.zp),
        o = s.x + (e - this.Ap.x),
        h = s.y + (i - this.Ap.y);
      this.Kp(o, h, t)
    }
  }
  ov(t) {
    this.Hv().W().trackingMode.exitMode === 0 && (this.Ip = !0), this.am(), this.nm(t)
  }
  br(t, e) {
    const i = this.Ep;
    return i === null ? null : function(s, o, h) {
      const r = s.$o(),
        l = function(a, c, u) {
          var d, m;
          let f, p;
          for (const S of a) {
            const L = (m = (d = S.fa) === null || d === void 0 ? void 0 : d.call(S, c, u)) !== null && m !== void 0 ? m : [];
            for (const j of L) g = j.zOrder, (!(_ = f == null ? void 0 : f.zOrder) || g === "top" && _ !== "top" || g === "normal" && _ === "bottom") && (f = j, p = S)
          }
          var g, _;
          return f && p ? {
            Iv: f,
            jc: p
          } : null
        }(r, o, h);
      if ((l == null ? void 0 : l.Iv.zOrder) === "top") return me(l);
      for (const a of r) {
        if (l && l.jc === a && l.Iv.zOrder !== "bottom" && !l.Iv.isBackground) return me(l);
        const c = mr(a.Pn(s), o, h);
        if (c !== null) return {
          jc: a,
          Ov: c.Ov,
          Av: c.Av
        };
        if (l && l.jc === a && l.Iv.zOrder !== "bottom" && l.Iv.isBackground) return me(l)
      }
      return l != null && l.Iv ? me(l) : null
    }(i, t, e)
  }
  om(t, e) {
    b(e === "left" ? this.yp : this.Cp).up(D({
      width: t,
      height: this.Lv.height
    }))
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Lt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Fp.style.width = t.width + "px", this.Fp.style.height = t.height + "px")
  }
  um() {
    const t = b(this.Ep);
    t.T_(t.P_()), t.T_(t.R_());
    for (const e of t.Oa())
      if (t.dr(e)) {
        const i = e.Dt();
        i !== null && t.T_(i), e.Vn()
      }
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  fp(t) {
    if (t === 0 || this.Ep === null) return;
    if (t > 1 && this.um(), this.yp !== null && this.yp.fp(t), this.Cp !== null && this.Cp.fp(t), t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const i = Et(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(s => {
        this.pp(s)
      }), this.Ep && (this.dm(i, pr), this.fm(i), this.vm(i), this.dm(i, pe), this.dm(i, vr)))
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Et(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: s
    }) => {
      i.clearRect(0, 0, s.width, s.height)
    }), this.pm(e), this.dm(e, br))
  }
  bm() {
    return this.yp
  }
  wm() {
    return this.Cp
  }
  mp(t, e) {
    this.dm(t, e)
  }
  Np() {
    this.Ep !== null && this.Ep.F_().p(this), this.Ep = null
  }
  Qp(t) {
    this.tm(this.Dp, t)
  }
  tm(t, e) {
    const i = e.localX,
      s = e.localY;
    t.M() && t.m(this.$i().St().Eu(i), {
      x: i,
      y: s
    }, e)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    const {
      width: i,
      height: s
    } = e, o = this.$i(), h = o.q(), r = o.md();
    h === r ? Le(t, 0, 0, i, s, r) : As(t, 0, 0, i, s, h, r)
  }
  fm(t) {
    const e = b(this.Ep).W_().Uh().gt();
    e !== null && e.X(t, !1)
  }
  vm(t) {
    const e = this.$i().qc();
    this.gm(t, pe, ri, e), this.gm(t, pe, be, e)
  }
  pm(t) {
    this.gm(t, pe, be, this.$i().Yc())
  }
  dm(t, e) {
    const i = b(this.Ep).$o();
    for (const s of i) this.gm(t, e, ri, s);
    for (const s of i) this.gm(t, e, be, s)
  }
  gm(t, e, i, s) {
    const o = b(this.Ep),
      h = o.$t().Fc(),
      r = h !== null && h.jc === s,
      l = h !== null && r && h.Av !== void 0 ? h.Av.gr : void 0;
    li(e, a => i(a, t, r, l), s, o)
  }
  Yp() {
    if (this.Ep === null) return;
    const t = this.Jd,
      e = this.Ep.P_().W().visible,
      i = this.Ep.R_().W().visible;
    e || this.yp === null || (this.Wp.removeChild(this.yp.hp()), this.yp.S(), this.yp = null), i || this.Cp === null || (this.jp.removeChild(this.Cp.hp()), this.Cp.S(), this.Cp = null);
    const s = t.$t()._d();
    e && this.yp === null && (this.yp = new cs(this, t.W(), s, "left"), this.Wp.appendChild(this.yp.hp())), i && this.Cp === null && (this.Cp = new cs(this, t.W(), s, "right"), this.jp.appendChild(this.Cp.hp()))
  }
  Mm(t) {
    return t.Rv && this.Bp || this.Ap !== null
  }
  xm(t) {
    return Math.max(0, Math.min(t, this.Lv.width - 1))
  }
  Sm(t) {
    return Math.max(0, Math.min(t, this.Lv.height - 1))
  }
  Kp(t, e, i) {
    this.$i().hd(this.xm(t), this.Sm(e), i, b(this.Ep))
  }
  rm() {
    this.$i().ad()
  }
  am() {
    this.Ip && (this.Ap = null, this.rm())
  }
  sm(t, e, i) {
    this.Ap = t, this.Ip = !1, this.Kp(e.x, e.y, i);
    const s = this.$i().Yc();
    this.zp = {
      x: s.Yt(),
      y: s.Zt()
    }
  }
  $i() {
    return this.Jd.$t()
  }
  nm(t) {
    if (!this.Rp) return;
    const e = this.$i(),
      i = this.dp();
    if (e.I_(i, i.vn()), this.Pp = null, this.Rp = !1, e.sd(), this.Lp !== null) {
      const s = performance.now(),
        o = e.St();
      this.Lp.Dr(o.ju(), s), this.Lp.Ju(s) || e.Zn(this.Lp)
    }
  }
  Xp() {
    this.Ap = null
  }
  Gp() {
    if (this.Ep) {
      if (this.$i().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) b(document.activeElement).blur();
      else {
        const t = document.getSelection();
        t !== null && t.removeAllRanges()
      }!this.Ep.vn().Ni() && this.$i().St().Ni()
    }
  }
  im(t) {
    if (this.Ep === null) return;
    const e = this.$i(),
      i = e.St();
    if (i.Ni()) return;
    const s = this.Jd.W(),
      o = s.handleScroll,
      h = s.kineticScroll;
    if ((!o.pressedMouseMove || t.Rv) && (!o.horzTouchDrag && !o.vertTouchDrag || !t.Rv)) return;
    const r = this.Ep.vn(),
      l = performance.now();
    if (this.Pp !== null || this.Mm(t) || (this.Pp = {
        x: t.clientX,
        y: t.clientY,
        Vd: l,
        km: t.localX,
        ym: t.localY
      }), this.Pp !== null && !this.Rp && (this.Pp.x !== t.clientX || this.Pp.y !== t.clientY)) {
      if (t.Rv && h.touch || !t.Rv && h.mouse) {
        const a = i.he();
        this.Lp = new ur(.2 / a, 7 / a, .997, 15 / a), this.Lp.qd(i.ju(), this.Pp.Vd)
      } else this.Lp = null;
      r.Ni() || e.B_(this.Ep, r, t.localY), e.td(t.localX), this.Rp = !0
    }
    this.Rp && (r.Ni() || e.A_(this.Ep, r, t.localY), e.nd(t.localX), this.Lp !== null && this.Lp.qd(i.ju(), l))
  }
}
class us {
  constructor(t, e, i, s, o) {
    this.ft = !0, this.Lv = D({
      width: 0,
      height: 0
    }), this.jv = () => this.fp(3), this.Uv = t === "left", this.Vc = i._d, this.cn = e, this.Cm = s, this.Tm = o, this.Xv = document.createElement("div"), this.Xv.style.width = "25px", this.Xv.style.height = "100%", this.Xv.style.overflow = "hidden", this.Kv = $t(this.Xv, D({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv)
  }
  S() {
    this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Pt(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Xv
  }
  _m() {
    return this.Lv
  }
  up(t) {
    Lt(this.Lv, t) || (this.Lv = t, this.Kv.resizeCanvasElement(t), this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.ft = !0)
  }
  fp(t) {
    if (t < 3 && !this.ft || this.Lv.width === 0 || this.Lv.height === 0) return;
    this.ft = !1, this.Kv.applySuggestedBitmapSize();
    const e = Et(this.Kv);
    e !== null && e.useBitmapCoordinateSpace(i => {
      this.pp(i), this.Ae(i)
    })
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  Ae({
    context: t,
    bitmapSize: e,
    horizontalPixelRatio: i,
    verticalPixelRatio: s
  }) {
    if (!this.Cm()) return;
    t.fillStyle = this.cn.timeScale.borderColor;
    const o = Math.floor(this.Vc.W().C * i),
      h = Math.floor(this.Vc.W().C * s),
      r = this.Uv ? e.width - o : 0;
    t.fillRect(r, 0, o, h)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    Le(t, 0, 0, e.width, e.height, this.Tm())
  }
}

function Mi(n) {
  return t => {
    var e, i;
    return (i = (e = t.da) === null || e === void 0 ? void 0 : e.call(t, n)) !== null && i !== void 0 ? i : []
  }
}
const gr = Mi("normal"),
  _r = Mi("top"),
  wr = Mi("bottom");
class yr {
  constructor(t, e) {
    this.Pm = null, this.Rm = null, this.k = null, this.Dm = !1, this.Lv = D({
      width: 0,
      height: 0
    }), this.Vm = new K, this.Nv = new ie(5), this.Wv = !1, this.jv = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.$v = () => {
      this.Wv || this.Jd.$t().$h()
    }, this.Jd = t, this.U_ = e, this.cn = t.W().layout, this.Zd = document.createElement("tr"), this.Om = document.createElement("td"), this.Om.style.padding = "0", this.Bm = document.createElement("td"), this.Bm.style.padding = "0", this.Xv = document.createElement("td"), this.Xv.style.height = "25px", this.Xv.style.padding = "0", this.Am = document.createElement("div"), this.Am.style.width = "100%", this.Am.style.height = "100%", this.Am.style.position = "relative", this.Am.style.overflow = "hidden", this.Xv.appendChild(this.Am), this.Kv = $t(this.Am, D({
      width: 16,
      height: 16
    })), this.Kv.subscribeSuggestedBitmapSizeChanged(this.jv);
    const i = this.Kv.canvasElement;
    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Gv = $t(this.Am, D({
      width: 16,
      height: 16
    })), this.Gv.subscribeSuggestedBitmapSizeChanged(this.$v);
    const s = this.Gv.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.Zd.appendChild(this.Om), this.Zd.appendChild(this.Xv), this.Zd.appendChild(this.Bm), this.Im(), this.Jd.$t().w_().l(this.Im.bind(this), this), this.rp = new wi(this.Gv.canvasElement, this, {
      sv: () => !0,
      ev: () => !this.Jd.W().handleScroll.horzTouchDrag
    })
  }
  S() {
    this.rp.S(), this.Pm !== null && this.Pm.S(), this.Rm !== null && this.Rm.S(), this.Gv.unsubscribeSuggestedBitmapSizeChanged(this.$v), Pt(this.Gv.canvasElement), this.Gv.dispose(), this.Kv.unsubscribeSuggestedBitmapSizeChanged(this.jv), Pt(this.Kv.canvasElement), this.Kv.dispose()
  }
  hp() {
    return this.Zd
  }
  zm() {
    return this.Pm
  }
  Lm() {
    return this.Rm
  }
  mv(t) {
    if (this.Dm) return;
    this.Dm = !0;
    const e = this.Jd.$t();
    !e.St().Ni() && this.Jd.W().handleScale.axisPressedMouseMove.time && e.Gc(t.localX)
  }
  vv(t) {
    this.mv(t)
  }
  bv() {
    const t = this.Jd.$t();
    !t.St().Ni() && this.Dm && (this.Dm = !1, this.Jd.W().handleScale.axisPressedMouseMove.time && t.rd())
  }
  lv(t) {
    const e = this.Jd.$t();
    !e.St().Ni() && this.Jd.W().handleScale.axisPressedMouseMove.time && e.ed(t.localX)
  }
  rv(t) {
    this.lv(t)
  }
  uv() {
    this.Dm = !1;
    const t = this.Jd.$t();
    t.St().Ni() && !this.Jd.W().handleScale.axisPressedMouseMove.time || t.rd()
  }
  ov() {
    this.uv()
  }
  Uf() {
    this.Jd.W().handleScale.axisDoubleClickReset.time && this.Jd.$t().Kn()
  }
  Wf() {
    this.Uf()
  }
  Jf() {
    this.Jd.$t().W().handleScale.axisPressedMouseMove.time && this.Sp(1)
  }
  Tv() {
    this.Sp(0)
  }
  _m() {
    return this.Lv
  }
  Em() {
    return this.Vm
  }
  Nm(t, e, i) {
    Lt(this.Lv, t) || (this.Lv = t, this.Wv = !0, this.Kv.resizeCanvasElement(t), this.Gv.resizeCanvasElement(t), this.Wv = !1, this.Xv.style.width = `${t.width}px`, this.Xv.style.height = `${t.height}px`, this.Vm.m(t)), this.Pm !== null && this.Pm.up(D({
      width: e,
      height: t.height
    })), this.Rm !== null && this.Rm.up(D({
      width: i,
      height: t.height
    }))
  }
  Fm() {
    const t = this.Wm();
    return Math.ceil(t.C + t.T + t.P + t.L + t.B + t.jm)
  }
  bt() {
    this.Jd.$t().St().ja()
  }
  Mp() {
    return this.Kv.bitmapSize
  }
  xp(t, e, i) {
    const s = this.Mp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Kv.canvasElement, e, i)
  }
  fp(t) {
    if (t === 0) return;
    if (t !== 1) {
      this.Kv.applySuggestedBitmapSize();
      const i = Et(this.Kv);
      i !== null && (i.useBitmapCoordinateSpace(s => {
        this.pp(s), this.Ae(s), this.Hm(i, wr)
      }), this.bp(i), this.Hm(i, gr)), this.Pm !== null && this.Pm.fp(t), this.Rm !== null && this.Rm.fp(t)
    }
    this.Gv.applySuggestedBitmapSize();
    const e = Et(this.Gv);
    e !== null && (e.useBitmapCoordinateSpace(({
      context: i,
      bitmapSize: s
    }) => {
      i.clearRect(0, 0, s.width, s.height)
    }), this.$m([...this.Jd.$t().wt(), this.Jd.$t().Yc()], e), this.Hm(e, _r))
  }
  Hm(t, e) {
    const i = this.Jd.$t().wt();
    for (const s of i) li(e, o => ri(o, t, !1, void 0), s, void 0);
    for (const s of i) li(e, o => be(o, t, !1, void 0), s, void 0)
  }
  pp({
    context: t,
    bitmapSize: e
  }) {
    Le(t, 0, 0, e.width, e.height, this.Jd.$t().md())
  }
  Ae({
    context: t,
    bitmapSize: e,
    verticalPixelRatio: i
  }) {
    if (this.Jd.W().timeScale.borderVisible) {
      t.fillStyle = this.Um();
      const s = Math.max(1, Math.floor(this.Wm().C * i));
      t.fillRect(0, 0, e.width, s)
    }
  }
  bp(t) {
    const e = this.Jd.$t().St(),
      i = e.ja();
    if (!i || i.length === 0) return;
    const s = this.U_.maxTickMarkWeight(i),
      o = this.Wm(),
      h = e.W();
    h.borderVisible && h.ticksVisible && t.useBitmapCoordinateSpace(({
      context: r,
      horizontalPixelRatio: l,
      verticalPixelRatio: a
    }) => {
      r.strokeStyle = this.Um(), r.fillStyle = this.Um();
      const c = Math.max(1, Math.floor(l)),
        u = Math.floor(.5 * l);
      r.beginPath();
      const d = Math.round(o.T * a);
      for (let m = i.length; m--;) {
        const f = Math.round(i[m].coord * l);
        r.rect(f - u, 0, c, d)
      }
      r.fill()
    }), t.useMediaCoordinateSpace(({
      context: r
    }) => {
      const l = o.C + o.T + o.L + o.P / 2;
      r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = this.$(), r.font = this.op();
      for (const a of i)
        if (a.weight < s) {
          const c = a.needAlignCoordinate ? this.qm(r, a.coord, a.label) : a.coord;
          r.fillText(a.label, c, l)
        } this.Jd.W().timeScale.allowBoldLabels && (r.font = this.Ym());
      for (const a of i)
        if (a.weight >= s) {
          const c = a.needAlignCoordinate ? this.qm(r, a.coord, a.label) : a.coord;
          r.fillText(a.label, c, l)
        }
    })
  }
  qm(t, e, i) {
    const s = this.Nv.xi(t, i),
      o = s / 2,
      h = Math.floor(e - o) + .5;
    return h < 0 ? e += Math.abs(0 - h) : h + s > this.Lv.width && (e -= Math.abs(this.Lv.width - (h + s))), e
  }
  $m(t, e) {
    const i = this.Wm();
    for (const s of t)
      for (const o of s.Qi()) o.gt().X(e, i)
  }
  Um() {
    return this.Jd.W().timeScale.borderColor
  }
  $() {
    return this.cn.textColor
  }
  j() {
    return this.cn.fontSize
  }
  op() {
    return Nt(this.j(), this.cn.fontFamily)
  }
  Ym() {
    return Nt(this.j(), this.cn.fontFamily, "bold")
  }
  Wm() {
    this.k === null && (this.k = {
      C: 1,
      N: NaN,
      L: NaN,
      B: NaN,
      ji: NaN,
      T: 5,
      P: NaN,
      R: "",
      Wi: new ie,
      jm: 0
    });
    const t = this.k,
      e = this.op();
    if (t.R !== e) {
      const i = this.j();
      t.P = i, t.R = e, t.L = 3 * i / 12, t.B = 3 * i / 12, t.ji = 9 * i / 12, t.N = 0, t.jm = 4 * i / 12, t.Wi.ir()
    }
    return this.k
  }
  Sp(t) {
    this.Xv.style.cursor = t === 1 ? "ew-resize" : "default"
  }
  Im() {
    const t = this.Jd.$t(),
      e = t.W();
    e.leftPriceScale.visible || this.Pm === null || (this.Om.removeChild(this.Pm.hp()), this.Pm.S(), this.Pm = null), e.rightPriceScale.visible || this.Rm === null || (this.Bm.removeChild(this.Rm.hp()), this.Rm.S(), this.Rm = null);
    const i = {
        _d: this.Jd.$t()._d()
      },
      s = () => e.leftPriceScale.borderVisible && t.St().W().borderVisible,
      o = () => t.md();
    e.leftPriceScale.visible && this.Pm === null && (this.Pm = new us("left", e, i, s, o), this.Om.appendChild(this.Pm.hp())), e.rightPriceScale.visible && this.Rm === null && (this.Rm = new us("right", e, i, s, o), this.Bm.appendChild(this.Rm.hp()))
  }
}
const Mr = !!Ot && !!navigator.userAgentData && navigator.userAgentData.brands.some(n => n.brand.includes("Chromium")) && !!Ot && (!((He = navigator == null ? void 0 : navigator.userAgentData) === null || He === void 0) && He.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var He;
class Sr {
  constructor(t, e, i) {
    var s;
    this.Zm = [], this.Xm = 0, this.ro = 0, this.o_ = 0, this.Km = 0, this.Gm = 0, this.Jm = null, this.Qm = !1, this.Dp = new K, this.Vp = new K, this.Pc = new K, this.tb = null, this.ib = null, this.Gd = t, this.cn = e, this.U_ = i, this.Zd = document.createElement("div"), this.Zd.classList.add("tv-lightweight-charts"), this.Zd.style.overflow = "hidden", this.Zd.style.direction = "ltr", this.Zd.style.width = "100%", this.Zd.style.height = "100%", (s = this.Zd).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.nb = document.createElement("table"), this.nb.setAttribute("cellspacing", "0"), this.Zd.appendChild(this.nb), this.sb = this.eb.bind(this), Ye(this.cn) && this.rb(!0), this.$i = new hr(this.Dc.bind(this), this.cn, i), this.$t().Zc().l(this.hb.bind(this), this), this.lb = new yr(this, this.U_), this.nb.appendChild(this.lb.hp());
    const o = e.autoSize && this.ab();
    let h = this.cn.width,
      r = this.cn.height;
    if (o || h === 0 || r === 0) {
      const l = t.getBoundingClientRect();
      h = h || l.width, r = r || l.height
    }
    this.ob(h, r), this._b(), t.appendChild(this.Zd), this.ub(), this.$i.St().sc().l(this.$i.Xl.bind(this.$i), this), this.$i.w_().l(this.$i.Xl.bind(this.$i), this)
  }
  $t() {
    return this.$i
  }
  W() {
    return this.cn
  }
  qp() {
    return this.Zm
  }
  cb() {
    return this.lb
  }
  S() {
    this.rb(!1), this.Xm !== 0 && window.cancelAnimationFrame(this.Xm), this.$i.Zc().p(this), this.$i.St().sc().p(this), this.$i.w_().p(this), this.$i.S();
    for (const t of this.Zm) this.nb.removeChild(t.hp()), t.hm().p(this), t.lm().p(this), t.S();
    this.Zm = [], b(this.lb).S(), this.Zd.parentElement !== null && this.Zd.parentElement.removeChild(this.Zd), this.Pc.S(), this.Dp.S(), this.Vp.S(), this.fb()
  }
  ob(t, e, i = !1) {
    if (this.ro === e && this.o_ === t) return;
    const s = function(r) {
      const l = Math.floor(r.width),
        a = Math.floor(r.height);
      return D({
        width: l - l % 2,
        height: a - a % 2
      })
    }(D({
      width: t,
      height: e
    }));
    this.ro = s.height, this.o_ = s.width;
    const o = this.ro + "px",
      h = this.o_ + "px";
    b(this.Zd).style.height = o, b(this.Zd).style.width = h, this.nb.style.height = o, this.nb.style.width = h, i ? this.pb(et.es(), performance.now()) : this.$i.Xl()
  }
  fp(t) {
    t === void 0 && (t = et.es());
    for (let e = 0; e < this.Zm.length; e++) this.Zm[e].fp(t.Hn(e).Fn);
    this.cn.timeScale.visible && this.lb.fp(t.jn())
  }
  Hh(t) {
    const e = Ye(this.cn);
    this.$i.Hh(t);
    const i = Ye(this.cn);
    i !== e && this.rb(i), this.ub(), this.mb(t)
  }
  hm() {
    return this.Dp
  }
  lm() {
    return this.Vp
  }
  Zc() {
    return this.Pc
  }
  bb() {
    this.Jm !== null && (this.pb(this.Jm, performance.now()), this.Jm = null);
    const t = this.wb(null),
      e = document.createElement("canvas");
    e.width = t.width, e.height = t.height;
    const i = b(e.getContext("2d"));
    return this.wb(i), e
  }
  gb(t) {
    return t === "left" && !this.Mb() || t === "right" && !this.xb() || this.Zm.length === 0 ? 0 : b(t === "left" ? this.Zm[0].bm() : this.Zm[0].wm()).cp()
  }
  Sb() {
    return this.cn.autoSize && this.tb !== null
  }
  kb() {
    return this.Zd
  }
  Jp(t) {
    this.ib = t, this.ib ? this.kb().style.setProperty("cursor", t) : this.kb().style.removeProperty("cursor")
  }
  yb() {
    return this.ib
  }
  Cb() {
    return nt(this.Zm[0])._m()
  }
  mb(t) {
    (t.autoSize !== void 0 || !this.tb || t.width === void 0 && t.height === void 0) && (t.autoSize && !this.tb && this.ab(), t.autoSize === !1 && this.tb !== null && this.fb(), t.autoSize || t.width === void 0 && t.height === void 0 || this.ob(t.width || this.o_, t.height || this.ro))
  }
  wb(t) {
    let e = 0,
      i = 0;
    const s = this.Zm[0],
      o = (r, l) => {
        let a = 0;
        for (let c = 0; c < this.Zm.length; c++) {
          const u = this.Zm[c],
            d = b(r === "left" ? u.bm() : u.wm()),
            m = d.Mp();
          t !== null && d.xp(t, l, a), a += m.height
        }
      };
    this.Mb() && (o("left", 0), e += b(s.bm()).Mp().width);
    for (let r = 0; r < this.Zm.length; r++) {
      const l = this.Zm[r],
        a = l.Mp();
      t !== null && l.xp(t, e, i), i += a.height
    }
    e += s.Mp().width, this.xb() && (o("right", e), e += b(s.wm()).Mp().width);
    const h = (r, l, a) => {
      b(r === "left" ? this.lb.zm() : this.lb.Lm()).xp(b(t), l, a)
    };
    if (this.cn.timeScale.visible) {
      const r = this.lb.Mp();
      if (t !== null) {
        let l = 0;
        this.Mb() && (h("left", l, i), l = b(s.bm()).Mp().width), this.lb.xp(t, l, i), l += r.width, this.xb() && h("right", l, i)
      }
      i += r.height
    }
    return D({
      width: e,
      height: i
    })
  }
  Tb() {
    let t = 0,
      e = 0,
      i = 0;
    for (const f of this.Zm) this.Mb() && (e = Math.max(e, b(f.bm()).ap(), this.cn.leftPriceScale.minimumWidth)), this.xb() && (i = Math.max(i, b(f.wm()).ap(), this.cn.rightPriceScale.minimumWidth)), t += f.g_();
    e = hi(e), i = hi(i);
    const s = this.o_,
      o = this.ro,
      h = Math.max(s - e - i, 0),
      r = this.cn.timeScale.visible;
    let l = r ? Math.max(this.lb.Fm(), this.cn.timeScale.minimumHeight) : 0;
    var a;
    l = (a = l) + a % 2;
    const c = 0 + l,
      u = o < c ? 0 : o - c,
      d = u / t;
    let m = 0;
    for (let f = 0; f < this.Zm.length; ++f) {
      const p = this.Zm[f];
      p.Up(this.$i.Uc()[f]);
      let g = 0,
        _ = 0;
      _ = f === this.Zm.length - 1 ? u - m : Math.round(p.g_() * d), g = Math.max(_, 2), m += g, p.up(D({
        width: h,
        height: g
      })), this.Mb() && p.om(e, "left"), this.xb() && p.om(i, "right"), p.dp() && this.$i.Xc(p.dp(), g)
    }
    this.lb.Nm(D({
      width: r ? h : 0,
      height: l
    }), r ? e : 0, r ? i : 0), this.$i.x_(h), this.Km !== e && (this.Km = e), this.Gm !== i && (this.Gm = i)
  }
  rb(t) {
    t ? this.Zd.addEventListener("wheel", this.sb, {
      passive: !1
    }) : this.Zd.removeEventListener("wheel", this.sb)
  }
  Pb(t) {
    switch (t.deltaMode) {
      case t.DOM_DELTA_PAGE:
        return 120;
      case t.DOM_DELTA_LINE:
        return 32
    }
    return Mr ? 1 / window.devicePixelRatio : 1
  }
  eb(t) {
    if (!(t.deltaX !== 0 && this.cn.handleScroll.mouseWheel || t.deltaY !== 0 && this.cn.handleScale.mouseWheel)) return;
    const e = this.Pb(t),
      i = e * t.deltaX / 100,
      s = -e * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), s !== 0 && this.cn.handleScale.mouseWheel) {
      const o = Math.sign(s) * Math.min(1, Math.abs(s)),
        h = t.clientX - this.Zd.getBoundingClientRect().left;
      this.$t().Jc(h, o)
    }
    i !== 0 && this.cn.handleScroll.mouseWheel && this.$t().Qc(-80 * i)
  }
  pb(t, e) {
    var i;
    const s = t.jn();
    s === 3 && this.Rb(), s !== 3 && s !== 2 || (this.Db(t), this.Vb(t, e), this.lb.bt(), this.Zm.forEach(o => {
      o.Zp()
    }), ((i = this.Jm) === null || i === void 0 ? void 0 : i.jn()) === 3 && (this.Jm.ts(t), this.Rb(), this.Db(this.Jm), this.Vb(this.Jm, e), t = this.Jm, this.Jm = null)), this.fp(t)
  }
  Vb(t, e) {
    for (const i of t.Qn()) this.ns(i, e)
  }
  Db(t) {
    const e = this.$i.Uc();
    for (let i = 0; i < e.length; i++) t.Hn(i).Wn && e[i].E_()
  }
  ns(t, e) {
    const i = this.$i.St();
    switch (t.qn) {
      case 0:
        i.rc();
        break;
      case 1:
        i.hc(t.Vt);
        break;
      case 2:
        i.Gn(t.Vt);
        break;
      case 3:
        i.Jn(t.Vt);
        break;
      case 4:
        i.Uu();
        break;
      case 5:
        t.Vt.Ju(e) || i.Jn(t.Vt.Qu(e))
    }
  }
  Dc(t) {
    this.Jm !== null ? this.Jm.ts(t) : this.Jm = t, this.Qm || (this.Qm = !0, this.Xm = window.requestAnimationFrame(e => {
      if (this.Qm = !1, this.Xm = 0, this.Jm !== null) {
        const i = this.Jm;
        this.Jm = null, this.pb(i, e);
        for (const s of i.Qn())
          if (s.qn === 5 && !s.Vt.Ju(e)) {
            this.$t().Zn(s.Vt);
            break
          }
      }
    }))
  }
  Rb() {
    this._b()
  }
  _b() {
    const t = this.$i.Uc(),
      e = t.length,
      i = this.Zm.length;
    for (let s = e; s < i; s++) {
      const o = nt(this.Zm.pop());
      this.nb.removeChild(o.hp()), o.hm().p(this), o.lm().p(this), o.S()
    }
    for (let s = i; s < e; s++) {
      const o = new yi(this, t[s]);
      o.hm().l(this.Ob.bind(this), this), o.lm().l(this.Bb.bind(this), this), this.Zm.push(o), this.nb.insertBefore(o.hp(), this.lb.hp())
    }
    for (let s = 0; s < e; s++) {
      const o = t[s],
        h = this.Zm[s];
      h.dp() !== o ? h.Up(o) : h.$p()
    }
    this.ub(), this.Tb()
  }
  Ab(t, e, i) {
    var s;
    const o = new Map;
    t !== null && this.$i.wt().forEach(c => {
      const u = c.In().hl(t);
      u !== null && o.set(c, u)
    });
    let h;
    if (t !== null) {
      const c = (s = this.$i.St().Ui(t)) === null || s === void 0 ? void 0 : s.originalTime;
      c !== void 0 && (h = c)
    }
    const r = this.$t().Fc(),
      l = r !== null && r.jc instanceof gi ? r.jc : void 0,
      a = r !== null && r.Av !== void 0 ? r.Av.wr : void 0;
    return {
      Ib: h,
      se: t ?? void 0,
      zb: e ?? void 0,
      Lb: l,
      Eb: o,
      Nb: a,
      Fb: i ?? void 0
    }
  }
  Ob(t, e, i) {
    this.Dp.m(() => this.Ab(t, e, i))
  }
  Bb(t, e, i) {
    this.Vp.m(() => this.Ab(t, e, i))
  }
  hb(t, e, i) {
    this.Pc.m(() => this.Ab(t, e, i))
  }
  ub() {
    const t = this.cn.timeScale.visible ? "" : "none";
    this.lb.hp().style.display = t
  }
  Mb() {
    return this.Zm[0].dp().P_().W().visible
  }
  xb() {
    return this.Zm[0].dp().R_().W().visible
  }
  ab() {
    return "ResizeObserver" in window && (this.tb = new ResizeObserver(t => {
      const e = t.find(i => i.target === this.Gd);
      e && this.ob(e.contentRect.width, e.contentRect.height)
    }), this.tb.observe(this.Gd, {
      box: "border-box"
    }), !0)
  }
  fb() {
    this.tb !== null && this.tb.disconnect(), this.tb = null
  }
}

function Ye(n) {
  return !!(n.handleScroll.mouseWheel || n.handleScale.mouseWheel)
}

function Cr(n) {
  return function(t) {
    return t.open !== void 0
  }(n) || function(t) {
    return t.value !== void 0
  }(n)
}

function on(n, t) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (i = Object.getOwnPropertySymbols(n); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]])
  }
  return e
}

function ds(n, t, e, i) {
  const s = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [s, s, s, s],
      Ib: i
    };
  return e.color !== void 0 && (o.V = e.color), o
}

function kr(n, t, e, i) {
  const s = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [s, s, s, s],
      Ib: i
    };
  return e.lineColor !== void 0 && (o.lt = e.lineColor), e.topColor !== void 0 && (o.Ts = e.topColor), e.bottomColor !== void 0 && (o.Ps = e.bottomColor), o
}

function jr(n, t, e, i) {
  const s = e.value,
    o = {
      se: t,
      ot: n,
      Vt: [s, s, s, s],
      Ib: i
    };
  return e.topLineColor !== void 0 && (o.Pe = e.topLineColor), e.bottomLineColor !== void 0 && (o.Re = e.bottomLineColor), e.topFillColor1 !== void 0 && (o.Se = e.topFillColor1), e.topFillColor2 !== void 0 && (o.ke = e.topFillColor2), e.bottomFillColor1 !== void 0 && (o.ye = e.bottomFillColor1), e.bottomFillColor2 !== void 0 && (o.Ce = e.bottomFillColor2), o
}

function zr(n, t, e, i) {
  const s = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (s.V = e.color), s
}

function Lr(n, t, e, i) {
  const s = {
    se: t,
    ot: n,
    Vt: [e.open, e.high, e.low, e.close],
    Ib: i
  };
  return e.color !== void 0 && (s.V = e.color), e.borderColor !== void 0 && (s.Ot = e.borderColor), e.wickColor !== void 0 && (s.Zh = e.wickColor), s
}

function xr(n, t, e, i, s) {
  const o = nt(s)(e),
    h = Math.max(...o),
    r = Math.min(...o),
    l = o[o.length - 1],
    a = [l, h, r, l],
    c = e,
    {
      time: u,
      color: d
    } = c;
  return {
    se: t,
    ot: n,
    Vt: a,
    Ib: i,
    He: on(c, ["time", "color"]),
    V: d
  }
}

function ve(n) {
  return n.Vt !== void 0
}

function fs(n, t) {
  return t.customValues !== void 0 && (n.Wb = t.customValues), n
}

function zt(n) {
  return (t, e, i, s, o, h) => function(r, l) {
    return l ? l(r) : (a = r).open === void 0 && a.value === void 0;
    var a
  }(i, h) ? fs({
    ot: t,
    se: e,
    Ib: s
  }, i) : fs(n(t, e, i, s, o), i)
}

function ms(n) {
  return {
    Candlestick: zt(Lr),
    Bar: zt(zr),
    Area: zt(kr),
    Baseline: zt(jr),
    Histogram: zt(ds),
    Line: zt(ds),
    Custom: zt(xr)
  } [n]
}

function ps(n) {
  return {
    se: 0,
    jb: new Map,
    ha: n
  }
}

function vs(n, t) {
  if (n !== void 0 && n.length !== 0) return {
    Hb: t.key(n[0].ot),
    $b: t.key(n[n.length - 1].ot)
  }
}

function bs(n) {
  let t;
  return n.forEach(e => {
    t === void 0 && (t = e.Ib)
  }), nt(t)
}
class Er {
  constructor(t) {
    this.Ub = new Map, this.qb = new Map, this.Yb = new Map, this.Zb = [], this.U_ = t
  }
  S() {
    this.Ub.clear(), this.qb.clear(), this.Yb.clear(), this.Zb = []
  }
  Xb(t, e) {
    let i = this.Ub.size !== 0,
      s = !1;
    const o = this.qb.get(t);
    if (o !== void 0)
      if (this.qb.size === 1) i = !1, s = !0, this.Ub.clear();
      else
        for (const l of this.Zb) l.pointData.jb.delete(t) && (s = !0);
    let h = [];
    if (e.length !== 0) {
      const l = e.map(m => m.time),
        a = this.U_.createConverterToInternalObj(e),
        c = ms(t.Jh()),
        u = t.ya(),
        d = t.Ca();
      h = e.map((m, f) => {
        const p = a(m.time),
          g = this.U_.key(p);
        let _ = this.Ub.get(g);
        _ === void 0 && (_ = ps(p), this.Ub.set(g, _), s = !0);
        const S = c(p, _.se, m, l[f], u, d);
        return _.jb.set(t, S), S
      })
    }
    i && this.Kb(), this.Gb(t, h);
    let r = -1;
    if (s) {
      const l = [];
      this.Ub.forEach(a => {
        l.push({
          timeWeight: 0,
          time: a.ha,
          pointData: a,
          originalTime: bs(a.jb)
        })
      }), l.sort((a, c) => this.U_.key(a.time) - this.U_.key(c.time)), r = this.Jb(l)
    }
    return this.Qb(t, r, function(l, a, c) {
      const u = vs(l, c),
        d = vs(a, c);
      if (u !== void 0 && d !== void 0) return {
        Ql: u.$b >= d.$b && u.Hb >= d.Hb
      }
    }(this.qb.get(t), o, this.U_))
  }
  fd(t) {
    return this.Xb(t, [])
  }
  tw(t, e) {
    const i = e;
    (function(p) {
      p.Ib === void 0 && (p.Ib = p.time)
    })(i), this.U_.preprocessData(e);
    const s = this.U_.createConverterToInternalObj([e])(e.time),
      o = this.Yb.get(t);
    if (o !== void 0 && this.U_.key(s) < this.U_.key(o)) throw new Error(`Cannot update oldest data, last time=${o}, new time=${s}`);
    let h = this.Ub.get(this.U_.key(s));
    const r = h === void 0;
    h === void 0 && (h = ps(s), this.Ub.set(this.U_.key(s), h));
    const l = ms(t.Jh()),
      a = t.ya(),
      c = t.Ca(),
      u = l(s, h.se, e, i.Ib, a, c);
    h.jb.set(t, u), this.iw(t, u);
    const d = {
      Ql: ve(u)
    };
    if (!r) return this.Qb(t, -1, d);
    const m = {
        timeWeight: 0,
        time: h.ha,
        pointData: h,
        originalTime: bs(h.jb)
      },
      f = oe(this.Zb, this.U_.key(m.time), (p, g) => this.U_.key(p.time) < g);
    this.Zb.splice(f, 0, m);
    for (let p = f; p < this.Zb.length; ++p) Ze(this.Zb[p].pointData, p);
    return this.U_.fillWeightsForPoints(this.Zb, f), this.Qb(t, f, d)
  }
  iw(t, e) {
    let i = this.qb.get(t);
    i === void 0 && (i = [], this.qb.set(t, i));
    const s = i.length !== 0 ? i[i.length - 1] : null;
    s === null || this.U_.key(e.ot) > this.U_.key(s.ot) ? ve(e) && i.push(e) : ve(e) ? i[i.length - 1] = e : i.splice(-1, 1), this.Yb.set(t, e.ot)
  }
  Gb(t, e) {
    e.length !== 0 ? (this.qb.set(t, e.filter(ve)), this.Yb.set(t, e[e.length - 1].ot)) : (this.qb.delete(t), this.Yb.delete(t))
  }
  Kb() {
    for (const t of this.Zb) t.pointData.jb.size === 0 && this.Ub.delete(this.U_.key(t.time))
  }
  Jb(t) {
    let e = -1;
    for (let i = 0; i < this.Zb.length && i < t.length; ++i) {
      const s = this.Zb[i],
        o = t[i];
      if (this.U_.key(s.time) !== this.U_.key(o.time)) {
        e = i;
        break
      }
      o.timeWeight = s.timeWeight, Ze(o.pointData, i)
    }
    if (e === -1 && this.Zb.length !== t.length && (e = Math.min(this.Zb.length, t.length)), e === -1) return -1;
    for (let i = e; i < t.length; ++i) Ze(t[i].pointData, i);
    return this.U_.fillWeightsForPoints(t, e), this.Zb = t, e
  }
  nw() {
    if (this.qb.size === 0) return null;
    let t = 0;
    return this.qb.forEach(e => {
      e.length !== 0 && (t = Math.max(t, e[e.length - 1].se))
    }), t
  }
  Qb(t, e, i) {
    const s = {
      sw: new Map,
      St: {
        Lu: this.nw()
      }
    };
    if (e !== -1) this.qb.forEach((o, h) => {
      s.sw.set(h, {
        He: o,
        ew: h === t ? i : void 0
      })
    }), this.qb.has(t) || s.sw.set(t, {
      He: [],
      ew: i
    }), s.St.rw = this.Zb, s.St.hw = e;
    else {
      const o = this.qb.get(t);
      s.sw.set(t, {
        He: o || [],
        ew: i
      })
    }
    return s
  }
}

function Ze(n, t) {
  n.se = t, n.jb.forEach(e => {
    e.se = t
  })
}

function Si(n) {
  const t = {
    value: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function gs(n) {
  const t = Si(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function Tr(n) {
  const t = Si(n);
  return n.lt !== void 0 && (t.lineColor = n.lt), n.Ts !== void 0 && (t.topColor = n.Ts), n.Ps !== void 0 && (t.bottomColor = n.Ps), t
}

function $r(n) {
  const t = Si(n);
  return n.Pe !== void 0 && (t.topLineColor = n.Pe), n.Re !== void 0 && (t.bottomLineColor = n.Re), n.Se !== void 0 && (t.topFillColor1 = n.Se), n.ke !== void 0 && (t.topFillColor2 = n.ke), n.ye !== void 0 && (t.bottomFillColor1 = n.ye), n.Ce !== void 0 && (t.bottomFillColor2 = n.Ce), t
}

function hn(n) {
  const t = {
    open: n.Vt[0],
    high: n.Vt[1],
    low: n.Vt[2],
    close: n.Vt[3],
    time: n.Ib
  };
  return n.Wb !== void 0 && (t.customValues = n.Wb), t
}

function Pr(n) {
  const t = hn(n);
  return n.V !== void 0 && (t.color = n.V), t
}

function Vr(n) {
  const t = hn(n),
    {
      V: e,
      Ot: i,
      Zh: s
    } = n;
  return e !== void 0 && (t.color = e), i !== void 0 && (t.borderColor = i), s !== void 0 && (t.wickColor = s), t
}

function ai(n) {
  return {
    Area: Tr,
    Line: gs,
    Baseline: $r,
    Histogram: gs,
    Bar: Pr,
    Candlestick: Vr,
    Custom: Rr
  } [n]
}

function Rr(n) {
  const t = n.Ib;
  return Object.assign(Object.assign({}, n.He), {
    time: t
  })
}
const Ir = {
    vertLine: {
      color: "#9598A1",
      width: 1,
      style: 3,
      visible: !0,
      labelVisible: !0,
      labelBackgroundColor: "#131722"
    },
    horzLine: {
      color: "#9598A1",
      width: 1,
      style: 3,
      visible: !0,
      labelVisible: !0,
      labelBackgroundColor: "#131722"
    },
    mode: 1
  },
  Wr = {
    vertLines: {
      color: "#D6DCDE",
      style: 0,
      visible: !0
    },
    horzLines: {
      color: "#D6DCDE",
      style: 0,
      visible: !0
    }
  },
  Br = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: di,
    attributionLogo: !0
  },
  Ge = {
    autoScale: !0,
    mode: 0,
    invertScale: !1,
    alignLabels: !0,
    borderVisible: !0,
    borderColor: "#2B2B43",
    entireTextOnly: !1,
    visible: !1,
    ticksVisible: !1,
    scaleMargins: {
      bottom: .1,
      top: .2
    },
    minimumWidth: 0
  },
  Ar = {
    rightOffset: 0,
    barSpacing: 6,
    minBarSpacing: .5,
    fixLeftEdge: !1,
    fixRightEdge: !1,
    lockVisibleTimeRangeOnResize: !1,
    rightBarStaysOnScroll: !1,
    borderVisible: !0,
    borderColor: "#2B2B43",
    visible: !0,
    timeVisible: !1,
    secondsVisible: !0,
    shiftVisibleRangeOnNewBar: !0,
    allowShiftVisibleRangeOnWhitespaceReplacement: !1,
    ticksVisible: !1,
    uniformDistribution: !1,
    minimumHeight: 0,
    allowBoldLabels: !0
  },
  Dr = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: di,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
  };

function _s() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: Br,
    crosshair: Ir,
    grid: Wr,
    overlayPriceScales: Object.assign({}, Ge),
    leftPriceScale: Object.assign(Object.assign({}, Ge), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, Ge), {
      visible: !0
    }),
    timeScale: Ar,
    watermark: Dr,
    localization: {
      locale: Ot ? navigator.language : "",
      dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
      mouseWheel: !0,
      pressedMouseMove: !0,
      horzTouchDrag: !0,
      vertTouchDrag: !0
    },
    handleScale: {
      axisPressedMouseMove: {
        time: !0,
        price: !0
      },
      axisDoubleClickReset: {
        time: !0,
        price: !0
      },
      mouseWheel: !0,
      pinch: !0
    },
    kineticScroll: {
      mouse: !1,
      touch: !0
    },
    trackingMode: {
      exitMode: 1
    }
  }
}
class Nr {
  constructor(t, e) {
    this.lw = t, this.aw = e
  }
  applyOptions(t) {
    this.lw.$t().Hc(this.aw, t)
  }
  options() {
    return this.Li().W()
  }
  width() {
    return Ee(this.aw) ? this.lw.gb(this.aw) : 0
  }
  Li() {
    return b(this.lw.$t().$c(this.aw)).Dt
  }
}

function ws(n, t, e) {
  const i = on(n, ["time", "originalTime"]),
    s = Object.assign({
      time: t
    }, i);
  return e !== void 0 && (s.originalTime = e), s
}
const Or = {
  color: "#FF0000",
  price: 0,
  lineStyle: 2,
  lineWidth: 1,
  lineVisible: !0,
  axisLabelVisible: !0,
  title: "",
  axisLabelColor: "",
  axisLabelTextColor: ""
};
class Ur {
  constructor(t) {
    this.Eh = t
  }
  applyOptions(t) {
    this.Eh.Hh(t)
  }
  options() {
    return this.Eh.W()
  }
  ow() {
    return this.Eh
  }
}
class Fr {
  constructor(t, e, i, s, o) {
    this._w = new K, this.Ls = t, this.uw = e, this.cw = i, this.U_ = o, this.dw = s
  }
  S() {
    this._w.S()
  }
  priceFormatter() {
    return this.Ls.ma()
  }
  priceToCoordinate(t) {
    const e = this.Ls.Ct();
    return e === null ? null : this.Ls.Dt().Rt(t, e.Vt)
  }
  coordinateToPrice(t) {
    const e = this.Ls.Ct();
    return e === null ? null : this.Ls.Dt().pn(t, e.Vt)
  }
  barsInLogicalRange(t) {
    if (t === null) return null;
    const e = new At(new Gt(t.from, t.to)).hu(),
      i = this.Ls.In();
    if (i.Ni()) return null;
    const s = i.hl(e.Vs(), 1),
      o = i.hl(e.ui(), -1),
      h = b(i.sl()),
      r = b(i.An());
    if (s !== null && o !== null && s.se > o.se) return {
      barsBefore: t.from - h,
      barsAfter: r - t.to
    };
    const l = {
      barsBefore: s === null || s.se === h ? t.from - h : s.se - h,
      barsAfter: o === null || o.se === r ? r - t.to : r - o.se
    };
    return s !== null && o !== null && (l.from = s.Ib, l.to = o.Ib), l
  }
  setData(t) {
    this.U_, this.Ls.Jh(), this.uw.fw(this.Ls, t), this.pw("full")
  }
  update(t) {
    this.Ls.Jh(), this.uw.mw(this.Ls, t), this.pw("update")
  }
  dataByIndex(t, e) {
    const i = this.Ls.In().hl(t, e);
    return i === null ? null : ai(this.seriesType())(i)
  }
  data() {
    const t = ai(this.seriesType());
    return this.Ls.In().ie().map(e => t(e))
  }
  subscribeDataChanged(t) {
    this._w.l(t)
  }
  unsubscribeDataChanged(t) {
    this._w.v(t)
  }
  setMarkers(t) {
    this.U_;
    const e = t.map(i => ws(i, this.U_.convertHorzItemToInternal(i.time), i.time));
    this.Ls.ia(e)
  }
  markers() {
    return this.Ls.na().map(t => ws(t, t.originalTime, void 0))
  }
  applyOptions(t) {
    this.Ls.Hh(t)
  }
  options() {
    return _t(this.Ls.W())
  }
  priceScale() {
    return this.cw.priceScale(this.Ls.Dt().Ta())
  }
  createPriceLine(t) {
    const e = ft(_t(Or), t),
      i = this.Ls.sa(e);
    return new Ur(i)
  }
  removePriceLine(t) {
    this.Ls.ea(t.ow())
  }
  seriesType() {
    return this.Ls.Jh()
  }
  attachPrimitive(t) {
    this.Ls.Sa(t), t.attached && t.attached({
      chart: this.dw,
      series: this,
      requestUpdate: () => this.Ls.$t().Xl()
    })
  }
  detachPrimitive(t) {
    this.Ls.ka(t), t.detached && t.detached()
  }
  pw(t) {
    this._w.M() && this._w.m(t)
  }
}
class Jr {
  constructor(t, e, i) {
    this.bw = new K, this.pu = new K, this.Vm = new K, this.$i = t, this.kl = t.St(), this.lb = e, this.kl.tc().l(this.ww.bind(this)), this.kl.nc().l(this.gw.bind(this)), this.lb.Em().l(this.Mw.bind(this)), this.U_ = i
  }
  S() {
    this.kl.tc().p(this), this.kl.nc().p(this), this.lb.Em().p(this), this.bw.S(), this.pu.S(), this.Vm.S()
  }
  scrollPosition() {
    return this.kl.ju()
  }
  scrollToPosition(t, e) {
    e ? this.kl.Gu(t, 1e3) : this.$i.Jn(t)
  }
  scrollToRealTime() {
    this.kl.Ku()
  }
  getVisibleRange() {
    const t = this.kl.Du();
    return t === null ? null : {
      from: t.from.originalTime,
      to: t.to.originalTime
    }
  }
  setVisibleRange(t) {
    const e = {
        from: this.U_.convertHorzItemToInternal(t.from),
        to: this.U_.convertHorzItemToInternal(t.to)
      },
      i = this.kl.Au(e);
    this.$i.vd(i)
  }
  getVisibleLogicalRange() {
    const t = this.kl.Ru();
    return t === null ? null : {
      from: t.Vs(),
      to: t.ui()
    }
  }
  setVisibleLogicalRange(t) {
    kt(t.from <= t.to, "The from index cannot be after the to index."), this.$i.vd(t)
  }
  resetTimeScale() {
    this.$i.Kn()
  }
  fitContent() {
    this.$i.rc()
  }
  logicalToCoordinate(t) {
    const e = this.$i.St();
    return e.Ni() ? null : e.It(t)
  }
  coordinateToLogical(t) {
    return this.kl.Ni() ? null : this.kl.Eu(t)
  }
  timeToCoordinate(t) {
    const e = this.U_.convertHorzItemToInternal(t),
      i = this.kl.Da(e, !1);
    return i === null ? null : this.kl.It(i)
  }
  coordinateToTime(t) {
    const e = this.$i.St(),
      i = e.Eu(t),
      s = e.Ui(i);
    return s === null ? null : s.originalTime
  }
  width() {
    return this.lb._m().width
  }
  height() {
    return this.lb._m().height
  }
  subscribeVisibleTimeRangeChange(t) {
    this.bw.l(t)
  }
  unsubscribeVisibleTimeRangeChange(t) {
    this.bw.v(t)
  }
  subscribeVisibleLogicalRangeChange(t) {
    this.pu.l(t)
  }
  unsubscribeVisibleLogicalRangeChange(t) {
    this.pu.v(t)
  }
  subscribeSizeChange(t) {
    this.Vm.l(t)
  }
  unsubscribeSizeChange(t) {
    this.Vm.v(t)
  }
  applyOptions(t) {
    this.kl.Hh(t)
  }
  options() {
    return Object.assign(Object.assign({}, _t(this.kl.W())), {
      barSpacing: this.kl.he()
    })
  }
  ww() {
    this.bw.M() && this.bw.m(this.getVisibleRange())
  }
  gw() {
    this.pu.M() && this.pu.m(this.getVisibleLogicalRange())
  }
  Mw(t) {
    this.Vm.m(t.width, t.height)
  }
}

function Kr(n) {
  if (n === void 0 || n.type === "custom") return;
  const t = n;
  t.minMove !== void 0 && t.precision === void 0 && (t.precision = function(e) {
    if (e >= 1) return 0;
    let i = 0;
    for (; i < 8; i++) {
      const s = Math.round(e);
      if (Math.abs(s - e) < 1e-8) return i;
      e *= 10
    }
    return i
  }(t.minMove))
}

function ys(n) {
  return function(t) {
    if (re(t.handleScale)) {
      const i = t.handleScale;
      t.handleScale = {
        axisDoubleClickReset: {
          time: i,
          price: i
        },
        axisPressedMouseMove: {
          time: i,
          price: i
        },
        mouseWheel: i,
        pinch: i
      }
    } else if (t.handleScale !== void 0) {
      const {
        axisPressedMouseMove: i,
        axisDoubleClickReset: s
      } = t.handleScale;
      re(i) && (t.handleScale.axisPressedMouseMove = {
        time: i,
        price: i
      }), re(s) && (t.handleScale.axisDoubleClickReset = {
        time: s,
        price: s
      })
    }
    const e = t.handleScroll;
    re(e) && (t.handleScroll = {
      horzTouchDrag: e,
      vertTouchDrag: e,
      mouseWheel: e,
      pressedMouseMove: e
    })
  }(n), n
}
class Xr {
  constructor(t, e, i) {
    this.xw = new Map, this.Sw = new Map, this.kw = new K, this.yw = new K, this.Cw = new K, this.Tw = new Er(e);
    const s = i === void 0 ? _t(_s()) : ft(_t(_s()), ys(i));
    this.U_ = e, this.lw = new Sr(t, s, e), this.lw.hm().l(h => {
      this.kw.M() && this.kw.m(this.Pw(h()))
    }, this), this.lw.lm().l(h => {
      this.yw.M() && this.yw.m(this.Pw(h()))
    }, this), this.lw.Zc().l(h => {
      this.Cw.M() && this.Cw.m(this.Pw(h()))
    }, this);
    const o = this.lw.$t();
    this.Rw = new Jr(o, this.lw.cb(), this.U_)
  }
  remove() {
    this.lw.hm().p(this), this.lw.lm().p(this), this.lw.Zc().p(this), this.Rw.S(), this.lw.S(), this.xw.clear(), this.Sw.clear(), this.kw.S(), this.yw.S(), this.Cw.S(), this.Tw.S()
  }
  resize(t, e, i) {
    this.autoSizeActive() || this.lw.ob(t, e, i)
  }
  addCustomSeries(t, e) {
    const i = It(t),
      s = Object.assign(Object.assign({}, Vs), i.defaultOptions());
    return this.Dw("Custom", s, e, i)
  }
  addAreaSeries(t) {
    return this.Dw("Area", Eo, t)
  }
  addBaselineSeries(t) {
    return this.Dw("Baseline", To, t)
  }
  addBarSeries(t) {
    return this.Dw("Bar", Lo, t)
  }
  addCandlestickSeries(t = {}) {
    return function(e) {
      e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor)
    }(t), this.Dw("Candlestick", zo, t)
  }
  addHistogramSeries(t) {
    return this.Dw("Histogram", $o, t)
  }
  addLineSeries(t) {
    return this.Dw("Line", xo, t)
  }
  removeSeries(t) {
    const e = nt(this.xw.get(t)),
      i = this.Tw.fd(e);
    this.lw.$t().fd(e), this.Vw(i), this.xw.delete(t), this.Sw.delete(e)
  }
  fw(t, e) {
    this.Vw(this.Tw.Xb(t, e))
  }
  mw(t, e) {
    this.Vw(this.Tw.tw(t, e))
  }
  subscribeClick(t) {
    this.kw.l(t)
  }
  unsubscribeClick(t) {
    this.kw.v(t)
  }
  subscribeCrosshairMove(t) {
    this.Cw.l(t)
  }
  unsubscribeCrosshairMove(t) {
    this.Cw.v(t)
  }
  subscribeDblClick(t) {
    this.yw.l(t)
  }
  unsubscribeDblClick(t) {
    this.yw.v(t)
  }
  priceScale(t) {
    return new Nr(this.lw, t)
  }
  timeScale() {
    return this.Rw
  }
  applyOptions(t) {
    this.lw.Hh(ys(t))
  }
  options() {
    return this.lw.W()
  }
  takeScreenshot() {
    return this.lw.bb()
  }
  autoSizeActive() {
    return this.lw.Sb()
  }
  chartElement() {
    return this.lw.kb()
  }
  paneSize() {
    const t = this.lw.Cb();
    return {
      height: t.height,
      width: t.width
    }
  }
  setCrosshairPosition(t, e, i) {
    const s = this.xw.get(i);
    if (s === void 0) return;
    const o = this.lw.$t().cr(s);
    o !== null && this.lw.$t().ld(t, e, o)
  }
  clearCrosshairPosition() {
    this.lw.$t().ad(!0)
  }
  Dw(t, e, i = {}, s) {
    Kr(i.priceFormat);
    const o = ft(_t(Rs), _t(e), i),
      h = this.lw.$t().ud(t, o, s),
      r = new Fr(h, this, this, this, this.U_);
    return this.xw.set(r, h), this.Sw.set(h, r), r
  }
  Vw(t) {
    const e = this.lw.$t();
    e.od(t.St.Lu, t.St.rw, t.St.hw), t.sw.forEach((i, s) => s.J(i.He, i.ew)), e.Fu()
  }
  Ow(t) {
    return nt(this.Sw.get(t))
  }
  Pw(t) {
    const e = new Map;
    t.Eb.forEach((s, o) => {
      const h = o.Jh(),
        r = ai(h)(s);
      if (h !== "Custom") kt(Cr(r));
      else {
        const l = o.Ca();
        kt(!l || l(r) === !1)
      }
      e.set(this.Ow(o), r)
    });
    const i = t.Lb !== void 0 && this.Sw.has(t.Lb) ? this.Ow(t.Lb) : void 0;
    return {
      time: t.Ib,
      logical: t.se,
      point: t.zb,
      hoveredSeries: i,
      hoveredObjectId: t.Nb,
      seriesData: e,
      sourceEvent: t.Fb
    }
  }
}

function Hr(n, t, e) {
  let i;
  if (ne(n)) {
    const o = document.getElementById(n);
    kt(o !== null, `Cannot find element in DOM with id=${n}`), i = o
  } else i = n;
  const s = new Xr(i, t, e);
  return t.setOptions(s.options()), s
}

function Yr(n, t) {
  return Hr(n, new hs, hs.Ad(t))
}
Object.assign(Object.assign({}, Rs), Vs);
const Zr = {
    class: "memepad-jetton-chart"
  },
  Gr = {
    class: "controls"
  },
  qr = ["value"],
  Qr = {
    class: "label"
  },
  tl = ["value"],
  el = {
    class: "label"
  },
  il = {
    key: 0,
    class: "chart-empty-wrapper"
  },
  sl = {
    class: "inner"
  },
  nl = {
    class: "label"
  },
  ol = {
    key: 1,
    class: "chart-wrapper"
  },
  hl = ot({
    __name: "Chart",
    props: {
      chart: {},
      chartInterval: {},
      chartType: {},
      jettonPnl: {},
      updateChartInterval: {
        type: Function
      },
      updateChartType: {
        type: Function
      }
    },
    setup(n) {
      const t = n,
        e = J(null),
        i = J(null),
        s = J(null),
        o = J(t.chartInterval),
        h = z(() => [{
          value: Xt.ONE_MINUTE,
          label: `1${V("base.time.abbr.minutes")}`
        }, {
          value: Xt.FIVE_MINUTES,
          label: `5${V("base.time.abbr.minutes")}`
        }, {
          value: Xt.FIFTEEN_MINUTES,
          label: `15${V("base.time.abbr.minutes")}`
        }]),
        r = z(() => [{
          value: Kt.MARKET_CAP,
          label: V("memepad.chart.tabs.market_cap")
        }, {
          value: Kt.PRICE,
          label: V("memepad.chart.tabs.price")
        }]),
        l = z({
          get: () => t.chartInterval,
          set: f => {
            t.updateChartInterval(f)
          }
        }),
        a = z({
          get: () => t.chartType,
          set: f => {
            t.updateChartType(f)
          }
        }),
        c = () => {
          var f;
          (f = i.value) == null || f.resize(e.value.clientWidth, e.value.clientHeight)
        },
        u = () => {
          window.removeEventListener("resize", c)
        },
        d = (f, p) => {
          var C, E;
          const g = (C = _n().$webApp.dataUnsafe.user) == null ? void 0 : C.language_code,
            _ = (E = i.value) == null ? void 0 : E.timeScale().getVisibleLogicalRange();
          s.value && i.value && i.value.removeSeries(s.value), p.innerHTML = "";
          const L = Yr(p, {
            localization: {
              timeFormatter: B => {
                const w = Y => String(Y).padStart(2, "0"),
                  I = new Date(B * 1e3);
                return `${w(I.getUTCHours())}:${w(I.getUTCMinutes())}`
              },
              priceFormatter: B => {
                if (a.value === Kt.MARKET_CAP) return `$${we(B,{accuracy:0})}`;
                {
                  if (Math.abs(B) < 1e-9) return "$0";
                  const [w, I] = B.toFixed(9).split("."), Y = I[0], Z = I.slice(1).match(/^0+/), $ = Z ? Z[0].length : 0, W = $ > 0 ? String.fromCharCode(8321 + $) : "", O = I.slice($ + 1).replace(/0+$/, "").slice(0, 3);
                  return `$${w}.${Y}${W}${O}`
                }
              },
              locale: g
            },
            layout: {
              textColor: "#A6A6A6",
              fontSize: 12,
              attributionLogo: !1,
              background: {
                color: "transparent"
              }
            },
            grid: {
              vertLines: {
                color: "transparent"
              },
              horzLines: {
                color: "transparent"
              }
            },
            rightPriceScale: {
              borderColor: "transparent"
            },
            crosshair: {
              mode: si.Magnet,
              horzLine: {
                color: "#ffffff",
                style: Me.Dashed,
                labelBackgroundColor: "#ffffff"
              },
              vertLine: {
                color: "#ffffff",
                style: Me.Dashed,
                labelBackgroundColor: "#ffffff"
              }
            }
          });
          i.value = L, L.timeScale().applyOptions({
            borderColor: "transparent",
            secondsVisible: !0,
            timeVisible: !0,
            ticksVisible: !0,
            allowBoldLabels: !1
          }), window.addEventListener("resize", c);
          const j = L.addLineSeries({
              color: "#C4F85C",
              baseLineWidth: 2,
              crosshairMarkerBackgroundColor: "#C4F85C",
              crosshairMarkerBorderColor: "#000000",
              crosshairMarkerBorderWidth: 2,
              crosshairMarkerRadius: 3,
              priceFormat: {
                type: "price",
                precision: a.value === Kt.MARKET_CAP ? 0 : 9,
                minMove: 1e-9
              }
            }),
            N = f.map(B => {
              const w = new Date(B.timestamp);
              return {
                time: (w.getTime() - w.getTimezoneOffset() * 60 * 1e3) / 1e3,
                value: B.price.toNumber()
              }
            }).sort((B, w) => B.time - w.time);
          j.setData(N);
          const M = o.value === t.chartInterval;
          _ && M ? L.timeScale().setVisibleLogicalRange(_) : L.timeScale().fitContent(), o.value = t.chartInterval
        },
        m = z(() => {
          var g;
          if (!((g = t.jettonPnl) != null && g.hasPnL)) return;
          const f = bn(t.jettonPnl.pnlAbsoluteUSD, {
              accuracy: 2,
              trim: !0
            }),
            p = Jn(t.jettonPnl.pnlPercent);
          return {
            label: `P&L ${f} ${p.formatted}`,
            cls: p.cls
          }
        });
      return St(() => ({
        container: e.value,
        chart: t.chart
      }), f => {
        !f.container || !f.chart || d(f.chart.points, f.container)
      }, {
        immediate: !0
      }), ke(u), (f, p) => (y(), T("div", Zr, [k("div", Gr, [k("div", {
        class: "section",
        style: ki({
          "grid-template-columns": `repeat(${v(r).length}, 1fr)`
        })
      }, [(y(!0), T(bt, null, qt(v(r), g => (y(), T("label", {
        key: g.value,
        class: Bt(["item", {
          "is-active": f.chartType === g.value
        }])
      }, [_e(k("input", {
        "onUpdate:modelValue": p[0] || (p[0] = _ => gt(a) ? a.value = _ : null),
        type: "radio",
        name: "chart-type",
        value: g.value
      }, null, 8, qr), [
        [qe, v(a)]
      ]), k("span", Qr, F(g.label), 1)], 2))), 128))], 4), k("div", {
        class: "section",
        style: ki({
          "grid-template-columns": `repeat(${v(h).length}, 1fr)`
        })
      }, [(y(!0), T(bt, null, qt(v(h), g => (y(), T("label", {
        key: g.value,
        class: Bt(["item", {
          "is-active": f.chartInterval === g.value
        }])
      }, [_e(k("input", {
        "onUpdate:modelValue": p[1] || (p[1] = _ => gt(l) ? l.value = _ : null),
        type: "radio",
        name: "chart-interval",
        value: g.value
      }, null, 8, tl), [
        [qe, v(l)]
      ]), k("span", el, F(g.label), 1)], 2))), 128))], 4)]), !f.chart || !f.chart.points.length ? (y(), T("div", il, [p[3] || (p[3] = k("img", {
        src: ji,
        class: "lines"
      }, null, -1)), p[4] || (p[4] = k("img", {
        src: gn,
        class: "empty"
      }, null, -1)), k("div", sl, [p[2] || (p[2] = k("div", {
        class: "dot"
      }, null, -1)), k("div", nl, F(("t" in f ? f.t : v(V))("memepad.jetton.chart.coming_text")), 1)])])) : (y(), T("div", ol, [v(m) ? (y(), T("div", {
        key: 0,
        class: Bt(["pnl-label", v(m).cls])
      }, F(v(m).label), 3)) : Ct("", !0), k("div", {
        ref_key: "container",
        ref: e,
        style: {
          width: "100%",
          height: "100%"
        }
      }, null, 512), p[5] || (p[5] = k("img", {
        src: ji,
        class: "lines"
      }, null, -1))]))]))
    }
  }),
  rl = lt(hl, [
    ["__scopeId", "data-v-d9a81f59"]
  ]),
  ll = {
    class: "memepad-jetton-reactions"
  },
  al = ["onClick"],
  cl = ["src"],
  ul = {
    key: 0,
    class: "label"
  },
  dl = ot({
    __name: "Reactions",
    props: {
      reactions: {},
      updateCallback: {
        type: Function
      }
    },
    setup(n) {
      const t = n,
        e = z(() => wn(t.reactions)),
        i = s => {
          var o;
          ((o = t.reactions) == null ? void 0 : o.user) === s ? t.updateCallback(void 0) : t.updateCallback(s)
        };
      return (s, o) => {
        const h = je;
        return y(), T("div", ll, [v(e) ? (y(!0), T(bt, {
          key: 1
        }, qt(v(e), r => (y(), T("button", {
          key: r.type,
          class: Bt([{
            active: r.active
          }, "reset"]),
          type: "button",
          onClick: l => i(r.type)
        }, [k("img", {
          src: r.image
        }, null, 8, cl), r.count.isZero() ? Ct("", !0) : (y(), T("div", ul, F(r.label.full), 1))], 10, al))), 128)) : (y(), T(bt, {
          key: 0
        }, qt(3, r => x(h, {
          key: r,
          class: "skeleton"
        })), 64))])
      }
    }
  }),
  fl = lt(dl, [
    ["__scopeId", "data-v-7771b6d6"]
  ]),
  ml = {
    class: "label"
  },
  pl = {
    class: "memepad-jetton-actions-controls-unlock-sheet"
  },
  vl = {
    class: "icon-wrapper"
  },
  bl = {
    class: "title"
  },
  gl = {
    class: "subtitle"
  },
  _l = {
    class: "buttons-wrapper"
  },
  wl = ot({
    __name: "UnlockSheetAndButton",
    props: {
      jetton: {},
      jettonInformation: {},
      balances: {},
      jettonManagement: {},
      unlockSuccessCallback: {
        type: Function
      }
    },
    setup(n) {
      const t = n,
        e = J(!1),
        i = () => {
          e.value = !1, t.unlockSuccessCallback()
        };
      return (s, o) => {
        const h = Ut,
          r = js,
          l = ui,
          a = yn;
        return y(), T(bt, null, [x(h, {
          class: "memepad-jetton-actions-controls-unlock-button",
          icon: "lock-open",
          type: v(xt).HIGHLIGHT,
          fill: "",
          "icon-align": "left",
          onClick: o[0] || (o[0] = c => e.value = !0)
        }, {
          default: q(() => [k("div", ml, F(("t" in s ? s.t : v(V))("memepad.jetton.unlock.btn")), 1)]),
          _: 1
        }, 8, ["type"]), x(a, {
          modelValue: v(e),
          "onUpdate:modelValue": o[1] || (o[1] = c => gt(e) ? e.value = c : null)
        }, {
          default: q(() => [k("div", pl, [k("div", vl, [x(r, {
            src: v(ks)(s.jetton.iconFileKey),
            size: 80
          }, null, 8, ["src"])]), k("div", bl, F(("t" in s ? s.t : v(V))("memepad.jetton.unlock.sheet.title", {
            ticker: s.jetton.ticker
          })), 1), k("div", gl, F(("t" in s ? s.t : v(V))("memepad.jetton.unlock.sheet.subtitle", {
            ticker: s.jetton.ticker
          })), 1), k("div", _l, [x(l, {
            jetton: s.jetton,
            "jetton-information": s.jettonInformation,
            balances: s.balances,
            "jetton-management": s.jettonManagement,
            onUnlocked: i
          }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])])])]),
          _: 1
        }, 8, ["modelValue"])], 64)
      }
    }
  }),
  yl = lt(wl, [
    ["__scopeId", "data-v-f5a83b7e"]
  ]),
  Ml = {
    class: "label"
  },
  Sl = ["value", "name"],
  Cl = ot({
    __name: "KitTab",
    props: {
      label: {
        type: String,
        required: !0
      },
      value: {
        type: String,
        required: !0
      },
      type: {
        type: String,
        default: void 0
      }
    },
    setup(n) {
      const t = n,
        e = Mn(Ls);
      if (!e) throw Sn("Tabs injection not defined");
      const i = z(() => t.type ?? e.type.value),
        s = z({
          get() {
            return e.value.value === t.value
          },
          set() {
            e.updateValue(t.value)
          }
        });
      return (o, h) => (y(), T("label", {
        class: Bt(["kit-tab", [`is-${v(i).toLowerCase()}`, {
          "is-active": v(s)
        }]])
      }, [k("span", Ml, F(n.label), 1), _e(k("input", {
        "onUpdate:modelValue": h[0] || (h[0] = r => gt(s) ? s.value = r : null),
        type: "radio",
        value: n.value,
        name: v(e).name
      }, null, 8, Sl), [
        [qe, v(s)]
      ])], 2))
    }
  }),
  rn = lt(Cl, [
    ["__scopeId", "data-v-94bc640b"]
  ]),
  kl = {
    class: "list"
  },
  jl = ot({
    __name: "KitTabs",
    props: Qe({
      items: {
        type: Array,
        default: void 0
      },
      type: {
        type: String,
        default: ti.DEFAULT
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(n) {
      const t = n,
        e = ei(n, "modelValue"),
        i = z(() => {
          var s;
          return ((s = t.items) == null ? void 0 : s.map(o => typeof o == "string" ? {
            value: o,
            label: o
          } : o)) ?? []
        });
      return Cn(Ls, {
        value: z(() => e.value),
        updateValue: s => {
          e.value = s
        },
        type: z(() => t.type),
        name: kn()
      }), (s, o) => {
        const h = rn,
          r = jn("horizontal-wheel-scroll");
        return y(), T("div", {
          class: Bt(["kit-tabs", `is-${n.type.toLowerCase()}`])
        }, [_e((y(), T("div", kl, [zn(s.$slots, "default", {}, void 0, !0), (y(!0), T(bt, null, qt(v(i), l => (y(), R(h, {
          key: l.value,
          label: l.label,
          value: l.value,
          type: n.type
        }, null, 8, ["label", "value", "type"]))), 128))])), [
          [r]
        ])], 2)
      }
    }
  }),
  zl = lt(jl, [
    ["__scopeId", "data-v-74a842a0"]
  ]),
  Ll = {
    class: "memepad-jetton-action-controls-action-button"
  },
  xl = {
    class: "info"
  },
  El = {
    class: "label"
  },
  Tl = {
    class: "label"
  },
  $l = ot({
    __name: "ActionButton",
    props: {
      value: {},
      jetton: {},
      tab: {},
      inputState: {},
      tradePendings: {}
    },
    emits: ["trade"],
    setup(n) {
      const t = n,
        e = z(() => new ye(t.value.replaceAll(",", "") || "0")),
        i = z(() => t.tradePendings[t.tab]),
        s = z(() => !!(i.value || !t.inputState || t.inputState.loading)),
        o = z(() => s.value ? !1 : !!(e.value.isZero() || !t.inputState || t.inputState.error));
      return (h, r) => {
        var m, f, p, g, _;
        const l = xs,
          a = je,
          c = Es,
          u = Ts,
          d = Ut;
        return y(), T("div", Ll, [k("div", xl, [h.inputState ? (y(), T(bt, {
          key: 0
        }, [h.inputState.balanceLabel ? (y(), R(l, {
          key: 0,
          balance: h.inputState.balanceLabel
        }, null, 8, ["balance"])) : (y(), R(a, {
          key: 1,
          class: "skeleton"
        })), h.inputState.error || h.inputState.feesInfo ? (y(), R(c, {
          key: 2,
          details: (m = h.inputState.feesInfo) == null ? void 0 : m.details,
          "total-label": (f = h.inputState.feesInfo) == null ? void 0 : f.totalLabel,
          "error-message": (p = h.inputState.error) == null ? void 0 : p.message
        }, null, 8, ["details", "total-label", "error-message"])) : (y(), R(a, {
          key: 3,
          class: "skeleton"
        }))], 64)) : (y(), T(bt, {
          key: 1
        }, [x(a, {
          class: "skeleton"
        }), x(a, {
          class: "skeleton"
        })], 64))]), (_ = (g = h.inputState) == null ? void 0 : g.error) != null && _.notEnoughTon ? (y(), R(u, {
          key: 0,
          "jetton-shortname": h.jetton.shortname,
          "jetton-address": h.jetton.address
        }, null, 8, ["jetton-shortname", "jetton-address"])) : (y(), T(bt, {
          key: 1
        }, [h.tab === v(H).BUY ? (y(), R(d, {
          key: 0,
          fill: "",
          size: v(Dt).LARGE,
          type: v(xt).HIGHLIGHT,
          loading: v(s),
          disabled: v(o),
          onClick: r[0] || (r[0] = S => h.$emit("trade"))
        }, {
          default: q(() => [k("div", El, F(("t" in h ? h.t : v(V))("memepad.jetton.buy_button_label", {
            ticker: h.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : Ct("", !0), h.tab === v(H).SELL ? (y(), R(d, {
          key: 1,
          fill: "",
          size: v(Dt).LARGE,
          type: v(xt).PINK,
          loading: v(s),
          disabled: v(o),
          onClick: r[1] || (r[1] = S => h.$emit("trade"))
        }, {
          default: q(() => [k("div", Tl, F(("t" in h ? h.t : v(V))("memepad.jetton.sell_button_label", {
            ticker: h.jetton.ticker
          })), 1)]),
          _: 1
        }, 8, ["size", "type", "loading", "disabled"])) : Ct("", !0)], 64))])
      }
    }
  }),
  Pl = lt($l, [
    ["__scopeId", "data-v-19301256"]
  ]),
  Vl = {
    class: "content"
  },
  Rl = {
    class: "subtitle"
  },
  Il = {
    key: 0
  },
  Wl = {
    class: "label"
  },
  Bl = ot({
    __name: "TradeModal",
    props: Qe({
      jetton: {},
      jettonInformation: {},
      jettonBclData: {},
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonManagement: {},
      jettonTrading: {},
      tonUsdRate: {},
      jettonModalControls: {},
      tradeSuccessCallback: {
        type: Function
      }
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {},
      tradePendings: {
        required: !0
      },
      tradePendingsModifiers: {}
    }),
    emits: Qe(["trade", "unlock-success", "open-slippage"], ["update:modelValue", "update:tradePendings"]),
    setup(n, {
      emit: t
    }) {
      const e = n,
        i = t,
        s = ei(n, "modelValue"),
        o = ei(n, "tradePendings"),
        h = J(),
        r = Ss(),
        {
          state: l,
          updateInputState: a
        } = j(),
        c = N(),
        u = () => {
          var M;
          e.jettonModalControls.value.value === Mt.TRADE && ((M = h.value) == null || M.focusOnInput())
        },
        d = J(e.jettonTrading.slippage);
      St(() => e.jettonModalControls.isOpened(Mt.SLIPPAGE), M => {
        var C;
        d.value = e.jettonTrading.slippage, a(), M || (C = h.value) == null || C.focusOnInput()
      });
      const m = J("0"),
        f = M => we(M, {
          join: "emptyFractional"
        }),
        p = z({
          get: () => m.value,
          set: M => {
            m.value = M
          }
        }),
        g = z({
          get: () => m.value,
          set: M => {
            m.value = f(M)
          }
        });
      St(() => s.value, () => {
        m.value = "0"
      });
      const _ = z(() => {
          if (!(!l.value || l.value.loading)) {
            if (S.value.isZero()) return s.value === H.BUY ? `0 ${e.jetton.ticker}` : "0 TON";
            if (!l.value.feesInfo || !l.value.ready) return "";
            if (s.value === H.SELL) {
              const M = l.value.tradeInfo.maxReceive,
                C = `${zi(M)} TON`;
              if (!e.tonUsdRate) return C;
              const E = Ln(e.tonUsdRate.mul(M));
              return `${C} (≈$${E})`
            } else {
              const M = l.value.tradeInfo.maxReceive;
              return `≈${we(M,{accuracy:0})} ${e.jetton.ticker}`
            }
          }
        }),
        S = z(() => new ye(m.value.replaceAll(",", "") || "0"));
      let L;
      St(() => [m.value, e.balances.jettonBalance, e.balances.tonBalance], () => a()), ke(() => {
        L == null || L.destroy()
      });

      function j() {
        const M = e.jettonTrading.tradeStateControls,
          C = z(() => M.getImmediateState({
            operation: s.value,
            amount: S.value,
            tonBalance: e.balances.tonBalance,
            jettonBalance: e.balances.jettonBalance,
            jetton: e.jetton
          })),
          E = J(M.getEmptyState({
            operation: s.value,
            jettonBalance: e.balances.jettonBalance,
            tonBalance: e.balances.tonBalance
          })),
          B = z(() => C.value || E.value);
        let w = new AbortController;
        const I = () => {
            w.abort(), w = new AbortController
          },
          {
            debouncedFunction: Y
          } = Tn(async () => {
            if (I(), C.value) return;
            const {
              signal: Z
            } = w, $ = await M.getState({
              operation: s.value,
              amount: S.value,
              tonBalance: e.balances.tonBalance,
              jettonBalance: e.balances.jettonBalance,
              jetton: e.jetton
            });
            Z.aborted || (E.value = $)
          }, 600);
        return {
          state: B,
          updateInputState: () => {
            E.value = void 0, Y()
          }
        }
      }

      function N() {
        const M = Ms();
        let C = [];
        const E = (w, I) => {
          if (C.push({
              amount: w,
              operation: I
            }), C = C.slice(-3), C.length === 3) {
            const Y = C.every(Z => Z.amount.eq(C[0].amount)),
              ht = C.every(Z => Z.operation === C[0].operation);
            Y && ht && r.disconnect()
          }
        };
        return async () => {
          if (!l.value || !l.value.ready) return;
          const w = s.value,
            I = new ye(S.value),
            Y = l.value.tradeInfo,
            ht = e.jetton.ticker,
            Z = e.jetton.id,
            $ = e.jetton.address,
            W = e.jetton.address,
            O = e.jetton.shortname;
          await (async () => {
            o.value[w] = !0;
            const P = () => {
                const ut = ii(w === H.BUY ? Y.minReceive : I, ht),
                  st = ii(w === H.BUY ? I : Y.minReceive, "TON"),
                  tt = w === H.BUY ? V("memepad.jetton.buy.failed_alert", {
                    askLabel: ut.frontendWithSymbol,
                    offerLabel: st.frontendWithSymbol
                  }) : V("memepad.jetton.sell.failed_alert", {
                    askLabel: ut.frontendWithSymbol,
                    offerLabel: st.frontendWithSymbol
                  });
                ge().error(tt)
              },
              A = await (w === H.BUY ? e.jettonTrading.buyJetton(I, Y) : e.jettonTrading.sellJetton(I, Y));
            if (A.err) {
              xn().error("Memepad jetton trade error", A.extra), o.value[w] = !1, P(), E(I, w);
              return
            }
            i("trade");
            const G = A.data;
            L = w === H.BUY ? e.jettonTrading.getWaitForBuyStatus() : e.jettonTrading.getWaitForSellStatus(), await Cs(2e4);
            const U = await L.exec({
                jettonAddress: W,
                transactionHash: G
              }),
              Q = U ? "success" : "failed";
            if (w === H.BUY ? M.memepad.memepadJettonBuy({
                status: Q,
                jettonId: Z,
                jettonShortname: O,
                jettonAddress: $,
                purchaseAmount: I.toNumber()
              }) : M.memepad.memepadJettonSell({
                status: Q,
                jettonId: Z,
                jettonShortname: O,
                jettonAddress: $,
                purchaseAmount: Y.maxReceive.toNumber()
              }), !U) {
              o.value[w] = !1, P();
              return
            }
            const X = w === H.BUY ? V("memepad.jetton.buy.success_alert", {
              ticker: ht,
              label: `${zi(I)} TON`
            }) : V("memepad.jetton.sell.success_alert", {
              label: `${En(I).full} ${ht}`
            });
            ge().success(X), o.value[w] = !1, e.tradeSuccessCallback()
          })()
        }
      }
      return (M, C) => {
        const E = rn,
          B = zl,
          w = $s,
          I = je,
          Y = zs,
          ht = ui,
          Z = Pl,
          $ = ci,
          W = Nn,
          O = Ps;
        return y(), R(O, {
          class: "memepad-jetton-trade-modal"
        }, {
          "top-center": q(() => [x(B, {
            modelValue: s.value,
            "onUpdate:modelValue": C[0] || (C[0] = P => s.value = P),
            class: "tabs"
          }, {
            default: q(() => [x(E, {
              label: ("t" in M ? M.t : v(V))("memepad.jetton.buy_tab"),
              value: v(H).BUY,
              type: v(ti).PRIMARY,
              class: "buy-tab"
            }, null, 8, ["label", "value", "type"]), x(E, {
              label: ("t" in M ? M.t : v(V))("memepad.jetton.sell_tab"),
              value: v(H).SELL,
              type: v(ti).SECONDARY,
              class: "sell-tab"
            }, null, 8, ["label", "value", "type"])]),
            _: 1
          }, 8, ["modelValue"])]),
          default: q(() => [k("div", Vl, [(y(), R(w, {
            ref_key: "actionControlsInputComp",
            ref: h,
            key: s.value,
            modelValue: v(p),
            "onUpdate:modelValue": C[1] || (C[1] = P => gt(p) ? p.value = P : null),
            postfix: s.value === "buy" ? "TON" : M.jetton.ticker,
            modifier: f,
            onBlur: u
          }, null, 8, ["modelValue", "postfix"])), k("div", Rl, [v(_) ? (y(), T("span", Il, F(v(_)), 1)) : v(_) === void 0 ? (y(), R(I, {
            key: 1,
            class: "skeleton"
          })) : Ct("", !0)]), k("button", {
            type: "button",
            class: "reset slippage-btn",
            onClick: C[2] || (C[2] = P => M.$emit("open-slippage"))
          }, [k("span", Wl, F(`${("t"in M?M.t:v(V))("memepad.jetton.slippage_btn")} ${v(d)}%`), 1), x(Y, {
            name: "arrow-caret-down",
            class: "icon"
          })])])]),
          "bottom-action": q(() => [x($, {
            "force-loading": M.unlockEnabled === void 0 && M.isReleased || !M.jettonTrading
          }, {
            default: q(() => [M.unlockEnabled ? (y(), R(ht, {
              key: 0,
              jetton: M.jetton,
              "jetton-information": M.jettonInformation,
              balances: M.balances,
              "jetton-management": M.jettonManagement,
              onUnlocked: C[3] || (C[3] = P => M.$emit("unlock-success"))
            }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (y(), R(Z, {
              key: 1,
              value: v(m),
              tab: s.value,
              jetton: M.jetton,
              "trade-pendings": o.value,
              "input-state": v(l),
              onTrade: v(c)
            }, null, 8, ["value", "tab", "jetton", "trade-pendings", "input-state", "onTrade"]))]),
            _: 1
          }, 8, ["force-loading"])]),
          "bottom-helpers": q(() => [x(W, {
            modelValue: v(g),
            "onUpdate:modelValue": C[4] || (C[4] = P => gt(g) ? g.value = P : null),
            tab: s.value,
            balances: M.balances
          }, null, 8, ["modelValue", "tab", "balances"])]),
          _: 1
        })
      }
    }
  }),
  Al = lt(Bl, [
    ["__scopeId", "data-v-21a4ec2c"]
  ]),
  Dl = {
    class: "title"
  },
  Nl = {
    class: "content"
  },
  Ol = {
    class: "actions"
  },
  Ul = {
    key: 1,
    class: "text"
  },
  Fl = 1,
  Jl = 99,
  Kl = ot({
    __name: "SlippageModal",
    props: {
      jettonTrading: {},
      jettonModalControls: {}
    },
    emits: ["slippage-updated"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        i = t,
        s = J(),
        o = () => {
          var c;
          e.jettonModalControls.value.value === Mt.SLIPPAGE && ((c = s.value) == null || c.focusOnInput())
        },
        h = J(e.jettonTrading.slippage.toString()),
        r = z(() => new ye(h.value.replaceAll(",", "") || "0")),
        l = z(() => r.value.lt(Fl) ? V("memepad.jetton.slippage.error_message.too_low") : r.value.gt(Jl) ? V("memepad.jetton.slippage.error_message.too_high") : ""),
        a = () => {
          l.value || (e.jettonTrading.updateSlippage(parseFloat(h.value)), i("slippage-updated"))
        };
      return (c, u) => {
        const d = $s,
          m = Kn,
          f = Ut,
          p = Ps;
        return y(), R(p, {
          class: "memepad-jetton-action-controls-slippage-modal"
        }, {
          "top-center": q(() => [k("div", Dl, F(("t" in c ? c.t : v(V))("memepad.jetton.slippage.title")), 1)]),
          default: q(() => [k("div", Nl, [x(d, {
            ref_key: "actionControlsInputComp",
            ref: s,
            modelValue: v(h),
            "onUpdate:modelValue": u[0] || (u[0] = g => gt(h) ? h.value = g : null),
            postfix: "%",
            modifier: g => ("formatFloatLine" in c ? c.formatFloatLine : v(we))(g, {
              join: "emptyFractional"
            }),
            onBlur: o
          }, null, 8, ["modelValue", "modifier"]), u[1] || (u[1] = k("div", {
            class: "subtitle-compensator"
          }, null, -1))])]),
          "bottom-action": q(() => [k("div", Ol, [v(l) ? (y(), R(m, {
            key: 0,
            "error-message": v(l)
          }, null, 8, ["error-message"])) : (y(), T("div", Ul, F(("t" in c ? c.t : v(V))("memepad.jetton.slippage.text")), 1)), x(f, {
            label: ("t" in c ? c.t : v(V))("memepad.jetton.slippage.done_btn"),
            fill: "",
            size: v(Dt).LARGE,
            type: v(l) ? v(xt).HIGHLIGHT : v(xt).PRIMARY,
            disabled: !!v(l),
            onClick: a
          }, null, 8, ["label", "size", "type", "disabled"])])]),
          _: 1
        })
      }
    }
  }),
  Xl = lt(Kl, [
    ["__scopeId", "data-v-0736f852"]
  ]),
  Hl = {
    class: "memepad-jetton-action-controls-trade-buttons"
  },
  Yl = {
    class: "label"
  },
  Zl = {
    class: "label"
  },
  Gl = ot({
    __name: "TradeButtons",
    props: {
      tradePendings: {}
    },
    emits: ["click"],
    setup(n) {
      return (t, e) => {
        const i = Ut;
        return y(), T("div", Hl, [x(i, {
          class: "buy-button",
          type: v(xt).HIGHLIGHT,
          loading: t.tradePendings[v(H).BUY],
          onClick: e[0] || (e[0] = s => t.$emit("click", v(H).BUY))
        }, {
          default: q(() => [k("span", Yl, F(("t" in t ? t.t : v(V))("memepad.jetton.buy_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"]), x(i, {
          class: "sell-button",
          type: v(xt).PINK,
          loading: t.tradePendings[v(H).SELL],
          onClick: e[1] || (e[1] = s => t.$emit("click", v(H).SELL))
        }, {
          default: q(() => [k("span", Zl, F(("t" in t ? t.t : v(V))("memepad.jetton.sell_button_preview_label")), 1)]),
          _: 1
        }, 8, ["type", "loading"])])
      }
    }
  }),
  ql = lt(Gl, [
    ["__scopeId", "data-v-7976e3b5"]
  ]),
  Ql = {
    class: "memepad-jetton-action-controls"
  },
  ta = ot({
    __name: "ActionControls",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonBclData: {},
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonManagement: {},
      jettonTrading: {},
      jettonModalControls: {},
      tonUsdRate: {}
    },
    emits: ["trade-success", "unlock-success"],
    setup(n, {
      emit: t
    }) {
      const e = n,
        i = t,
        s = J(H.BUY),
        o = $n({
          [H.BUY]: !1,
          [H.SELL]: !1
        }),
        h = c => {
          s.value = c, e.jettonModalControls.set(Mt.TRADE)
        },
        r = () => {
          e.jettonModalControls.clear()
        },
        l = () => {
          i("trade-success")
        },
        a = () => {
          i("unlock-success")
        };
      return (c, u) => {
        const d = yl,
          m = Al,
          f = Xl,
          p = ql,
          g = ci;
        return y(), T("div", Ql, [x(g, {
          "force-loading": c.unlockEnabled === void 0 && c.isReleased || !c.jettonTrading,
          "button-size": v(Dt).MEDIUM
        }, {
          default: q(() => [c.unlockEnabled ? (y(), R(d, {
            key: 0,
            jetton: c.jetton,
            "jetton-information": c.jettonInformation,
            balances: c.balances,
            "jetton-management": c.jettonManagement,
            "unlock-success-callback": a
          }, null, 8, ["jetton", "jetton-information", "balances", "jetton-management"])) : (y(), T(bt, {
            key: 1
          }, [c.jettonModalControls.isOpened(v(Mt).TRADE) ? (y(), R(m, {
            key: 0,
            modelValue: v(s),
            "onUpdate:modelValue": u[0] || (u[0] = _ => gt(s) ? s.value = _ : null),
            "trade-pendings": v(o),
            "onUpdate:tradePendings": u[1] || (u[1] = _ => gt(o) ? o.value = _ : null),
            jetton: c.jetton,
            "jetton-information": c.jettonInformation,
            "jetton-bcl-data": c.jettonBclData,
            balances: c.balances,
            "jetton-management": c.jettonManagement,
            "jetton-trading": c.jettonTrading,
            "is-released": c.isReleased,
            "unlock-enabled": c.unlockEnabled,
            "ton-usd-rate": c.tonUsdRate,
            "trade-success-callback": l,
            "jetton-modal-controls": c.jettonModalControls,
            onTrade: r,
            onUnlockSuccess: u[2] || (u[2] = _ => c.$emit("unlock-success")),
            onOpenSlippage: u[3] || (u[3] = _ => c.jettonModalControls.add(v(Mt).SLIPPAGE))
          }, null, 8, ["modelValue", "trade-pendings", "jetton", "jetton-information", "jetton-bcl-data", "balances", "jetton-management", "jetton-trading", "is-released", "unlock-enabled", "ton-usd-rate", "jetton-modal-controls"])) : Ct("", !0), c.jettonModalControls.isOpened(v(Mt).SLIPPAGE) ? (y(), R(f, {
            key: 1,
            "jetton-trading": c.jettonTrading,
            "jetton-modal-controls": c.jettonModalControls,
            onSlippageUpdated: u[4] || (u[4] = _ => c.jettonModalControls.set(v(Mt).TRADE))
          }, null, 8, ["jetton-trading", "jetton-modal-controls"])) : Ct("", !0), x(p, {
            "trade-pendings": v(o),
            onClick: h
          }, null, 8, ["trade-pendings"])], 64))]),
          _: 1
        }, 8, ["force-loading", "button-size"])])
      }
    }
  }),
  ea = lt(ta, [
    ["__scopeId", "data-v-433f1ef5"]
  ]),
  ia = {
    class: "memepad-jetton-page-trade"
  },
  sa = ot({
    __name: "PageTrade",
    props: {
      jetton: {},
      jettonInformation: {},
      jettonBclData: {},
      jettonChart: {},
      jettonChartInterval: {},
      jettonChartType: {},
      jettonPnl: {},
      jettonReactions: {},
      updateJettonChartInterval: {
        type: Function
      },
      updateJettonChartType: {
        type: Function
      },
      updateJettonReaction: {
        type: Function
      },
      isReleased: {
        type: Boolean
      },
      unlockEnabled: {
        type: Boolean
      },
      balances: {},
      jettonManagement: {},
      jettonTrading: {},
      jettonModalControls: {},
      tonUsdRate: {}
    },
    emits: ["trade-success", "unlock-success", "share"],
    setup(n) {
      const t = n,
        e = z(() => {
          var r, l, a, c, u;
          const i = t.jettonInformation.marketCap,
            s = t.jettonBclData && t.jettonBclData.tonCollectedPercent,
            o = ((r = t.jettonBclData) == null ? void 0 : r.tonCollected) || ((l = t.jettonInformation) == null ? void 0 : l.tonCollected),
            h = (a = t.jettonBclData) == null ? void 0 : a.tonForDex;
          return {
            isReleased: t.isReleased,
            percent: s,
            collected: o,
            total: h,
            marketDetails: {
              marketCap: i,
              listRows: {
                holdersCount: (c = t.jettonInformation) == null ? void 0 : c.holdersCount,
                transactionsCount: (u = t.jettonInformation) == null ? void 0 : u.transactionsCount,
                transactionsVolume: t.jettonInformation.transactionsVolume
              }
            }
          }
        });
      return (i, s) => {
        const o = _o,
          h = On,
          r = rl,
          l = fl,
          a = ea;
        return y(), T("div", ia, [x(o, {
          jetton: i.jetton,
          "jetton-information": i.jettonInformation,
          "is-released": i.isReleased,
          "jetton-modal-controls": i.jettonModalControls,
          onShare: s[0] || (s[0] = c => i.$emit("share"))
        }, null, 8, ["jetton", "jetton-information", "is-released", "jetton-modal-controls"]), x(h, Pn(v(e), {
          class: "details"
        }), null, 16), x(r, {
          chart: i.jettonChart,
          "chart-interval": i.jettonChartInterval,
          "chart-type": i.jettonChartType,
          "jetton-pnl": i.jettonPnl,
          "update-chart-interval": i.updateJettonChartInterval,
          "update-chart-type": i.updateJettonChartType,
          class: "chart"
        }, null, 8, ["chart", "chart-interval", "chart-type", "jetton-pnl", "update-chart-interval", "update-chart-type"]), x(l, {
          reactions: i.jettonReactions,
          "update-callback": i.updateJettonReaction
        }, null, 8, ["reactions", "update-callback"]), x(a, {
          jetton: i.jetton,
          "jetton-information": i.jettonInformation,
          "is-released": i.isReleased,
          "unlock-enabled": i.unlockEnabled,
          balances: i.balances,
          "jetton-management": i.jettonManagement,
          "jetton-trading": i.jettonTrading,
          "ton-usd-rate": i.tonUsdRate,
          "jetton-modal-controls": i.jettonModalControls,
          class: "action-controls",
          onTradeSuccess: s[1] || (s[1] = c => i.$emit("trade-success")),
          onUnlockSuccess: s[2] || (s[2] = c => i.$emit("unlock-success"))
        }, null, 8, ["jetton", "jetton-information", "is-released", "unlock-enabled", "balances", "jetton-management", "jetton-trading", "ton-usd-rate", "jetton-modal-controls"])])
      }
    }
  }),
  na = lt(sa, [
    ["__scopeId", "data-v-33c740ae"]
  ]),
  Ma = ot({
    inheritAttrs: !1,
    __name: "trade",
    emits: ["share"],
    setup(n) {
      const t = Vn(),
        e = z(() => t.jetton),
        i = z(() => t.jettonShortname),
        s = z(() => t.jettonModalControls),
        o = z(() => t.jettonInformation),
        h = z(() => t.jettonReactions),
        r = z(() => t.updateJettonReaction),
        {
          partnerAddresses: l
        } = Hn(),
        {
          tonUsdRate: a
        } = Rn(),
        {
          getManagementSdk: c,
          getBeforeDexTradingSdk: u,
          getDexTradingSdk: d
        } = Yn(),
        m = In(),
        f = Wn().status,
        p = Bn().getters.getUser,
        {
          jettonBclData: g,
          jettonBalance: _,
          jettonUnlockEnabled: S,
          jettonPnl: L,
          ...j
        } = Z(),
        {
          jettonChart: N,
          jettonChartInterval: M,
          ...C
        } = ht(),
        E = async () => {
          await Promise.all([m.update(), C.update(), j.update()])
        }, B = async () => {
          await j.resetAndUpdateUnlocked()
        }, w = z(() => {
          var U;
          if (!o.value || !l.value) return {
            status: "loading"
          };
          if (!e.value || !o || o.value.status === he.IN_PROGRESS) return {
            status: "loading"
          };
          const $ = e.value.address,
            W = [he.PUBLISHED_ON_DEX, he.LISTED_TO_DEX].includes(o.value.status),
            O = {
              jettonBalance: _.value ? ii(_.value, e.value.ticker) : void 0,
              tonBalance: m.wallet.value.status === "connected" ? (U = m.wallet.value.balance) == null ? void 0 : U.tonBalance.balance : void 0
            },
            P = An(Dn, {
              address: l.value.partnerAddress,
              masterContractAddress: e.value.masterContractAddress.toString()
            }),
            A = c(P),
            G = (() => {
              var X;
              if (!W) return u($, P);
              const Q = (X = p.value) == null ? void 0 : X.referrerToken;
              return d({
                jettonAddress: $,
                referrerToken: Q
              })
            })();
          return o.value.status === he.LISTED_TO_DEX ? {
            status: "moving_to_dex",
            jetton: e.value,
            jettonInformation: o.value,
            isReleased: !0,
            unlockEnabled: S.value,
            balances: O,
            jettonManagement: A,
            jettonTrading: G,
            jettonModalControls: s.value
          } : {
            status: "trade",
            jetton: e.value,
            jettonInformation: o.value,
            jettonBclData: g.value,
            jettonChart: N.value,
            jettonChartInterval: M.value,
            jettonChartType: C.jettonChartType.value,
            jettonPnl: L.value,
            jettonReactions: h.value,
            updateJettonChartInterval: C.updateChartInterval,
            updateJettonChartType: C.updateChartType,
            updateJettonReaction: r.value,
            isReleased: W,
            unlockEnabled: S.value,
            balances: O,
            jettonManagement: A,
            jettonTrading: G,
            jettonModalControls: s.value
          }
        });
      Xn(z(() => w.value.status === "moving_to_dex"), "memepad-jetton-trade-status");
      const I = () => {
          j.init(), C.init()
        },
        Y = () => {
          C.destroy(), j.destroy()
        };
      I(), ke(() => {
        Y()
      });

      function ht() {
        const $ = J(),
          W = J(Xt.ONE_MINUTE),
          O = J(Kt.MARKET_CAP);
        let P = new AbortController;
        const A = () => {
            P.abort(), P = new AbortController
          },
          G = tt => {
            W.value = tt, Q.exec()
          },
          U = tt => {
            O.value = tt, Q.exec()
          },
          Q = Ft(async () => {
            A();
            const tt = await Li.getMemepadJettonChart(i.value, {
              interval: W.value,
              type: O.value
            });
            return P.signal.aborted ? dt($.value) : dt((Rt(tt) ? tt.data : $.value) || $.value)
          }, tt => $.value = tt, 5e3);
        return {
          init: async () => await Q.exec(),
          destroy: () => {
            Q.destroy(), $.value = void 0, W.value = Xt.ONE_MINUTE
          },
          update: async () => await Q.exec(),
          updateChartInterval: G,
          updateChartType: U,
          jettonChartInterval: z(() => W.value),
          jettonChartType: z(() => O.value),
          jettonChart: z(() => $.value)
        }
      }

      function Z() {
        const $ = J(),
          W = J(),
          O = J(),
          P = J();
        let A, G, U, Q, X, ut, st, tt;

        function ln() {
          G = St(w, at => {
            at.status === "loading" || A || at.jettonManagement && (G == null || G(), A = Ft(async () => {
              if (w.value.status === "loading") return dt(void 0);
              const it = w.value.jetton.address,
                jt = await w.value.jettonManagement.getJettonBclData(it);
              return dt((Rt(jt) ? jt.data : $.value) || $.value)
            }, it => $.value = it, 6e4), A == null || A.exec())
          }, {
            immediate: !0
          }), Q = St(w, at => {
            at.status === "loading" || U || !at.jettonTrading || f.value !== "connected" || (Q == null || Q(), U = Ft(async () => {
              if (w.value.status === "loading" || !w.value.jettonTrading || f.value !== "connected") return dt(void 0);
              const it = w.value.jetton.address,
                jt = await w.value.jettonTrading.getUserJettonBalance(it);
              return dt((Rt(jt) ? jt.data : W.value) || W.value)
            }, it => W.value = it, 6e4), U == null || U.exec())
          }, {
            immediate: !0
          }), ut = St(w, at => {
            at.status === "loading" || X || !at.jetton || !at.balances.jettonBalance || !at.isReleased || f.value !== "connected" || (ut == null || ut(), X = Ft(async () => {
              if (w.value.status === "loading" || !w.value.balances.jettonBalance || !w.value.isReleased || f.value !== "connected") return dt(void 0);
              if (w.value.balances.jettonBalance.value.isZero()) return dt(!1);
              const it = await w.value.jettonManagement.getUnlockEnabled(w.value.jetton.address);
              return dt(Rt(it) ? it.data : O.value)
            }, it => O.value = it, 6e4), X == null || X.exec())
          }, {
            immediate: !0
          }), tt = St(w, at => {
            at.status === "loading" || st || m.wallet.value.status === "connected" && (tt == null || tt(), st = Ft(async () => {
              if (w.value.status === "loading" || m.wallet.value.status !== "connected") return dt(void 0);
              const it = w.value.jetton.shortname,
                jt = m.wallet.value.address.default,
                Ci = await Li.getMemepadJettonPnl(it, jt);
              return dt((Rt(Ci) ? Ci.data : P.value) || P.value)
            }, it => P.value = it, 6e4), st == null || st.exec())
          }, {
            immediate: !0
          })
        }
        return {
          init: ln,
          destroy: () => {
            G == null || G(), A == null || A.destroy(), Q == null || Q(), U == null || U.destroy(), ut == null || ut(), X == null || X.destroy(), tt == null || tt(), st == null || st.destroy(), $.value = void 0, W.value = void 0, O.value = void 0, P.value = void 0
          },
          update: async () => {
            await (A == null ? void 0 : A.exec()), await (U == null ? void 0 : U.exec()), await (X == null ? void 0 : X.exec()), st == null || st.exec()
          },
          resetAndUpdateUnlocked: async () => {
            O.value = void 0, await (X == null ? void 0 : X.exec())
          },
          jettonBclData: z(() => $.value),
          jettonBalance: z(() => W.value),
          jettonUnlockEnabled: z(() => O.value),
          jettonPnl: z(() => P.value)
        }
      }
      return ($, W) => {
        const O = an,
          P = ro,
          A = na;
        return v(w).status === "loading" ? (y(), R(O, {
          key: 0
        })) : v(w).status === "moving_to_dex" ? (y(), R(P, {
          key: 1,
          jetton: v(w).jetton,
          "jetton-information": v(w).jettonInformation,
          "unlock-enabled": v(w).unlockEnabled,
          balances: v(w).balances,
          "jetton-management": v(w).jettonManagement,
          "is-released": ""
        }, null, 8, ["jetton", "jetton-information", "unlock-enabled", "balances", "jetton-management"])) : (y(), R(A, {
          key: 2,
          jetton: v(w).jetton,
          "jetton-information": v(w).jettonInformation,
          "jetton-bcl-data": v(w).jettonBclData,
          "jetton-chart": v(w).jettonChart,
          "jetton-chart-interval": v(w).jettonChartInterval,
          "jetton-chart-type": v(w).jettonChartType,
          "jetton-pnl": v(w).jettonPnl,
          "jetton-reactions": v(w).jettonReactions,
          "update-jetton-chart-interval": v(w).updateJettonChartInterval,
          "update-jetton-chart-type": v(w).updateJettonChartType,
          "update-jetton-reaction": v(w).updateJettonReaction,
          "is-released": v(w).isReleased,
          "unlock-enabled": v(w).unlockEnabled,
          "jetton-management": v(w).jettonManagement,
          "jetton-trading": v(w).jettonTrading,
          balances: v(w).balances,
          "jetton-modal-controls": v(w).jettonModalControls,
          "ton-usd-rate": v(a),
          onTradeSuccess: E,
          onUnlockSuccess: B,
          onShare: W[0] || (W[0] = G => $.$emit("share"))
        }, null, 8, ["jetton", "jetton-information", "jetton-bcl-data", "jetton-chart", "jetton-chart-interval", "jetton-chart-type", "jetton-pnl", "jetton-reactions", "update-jetton-chart-interval", "update-jetton-chart-type", "update-jetton-reaction", "is-released", "unlock-enabled", "jetton-management", "jetton-trading", "balances", "jetton-modal-controls", "ton-usd-rate"]))
      }
    }
  });
export {
  Ma as
  default
};