var telegramAnalytics = function() {
  "use strict";
  const t = n;

  function n(t, r) {
    const s = e();
    return (n = function(t, n) {
      return s[t -= 305]
    })(t, r)
  }

  function e() {
    const t = ["disconnection", "hBuEK", "POpFy", "PpHaO", "3855018TFSmaq", "593860rWrCsI", "transaction-sent-for-signature", "https://tganalytics.xyz/", "145tXPvVv", "WwlWH", "EONoU", "split", "30yQWLCt", "iIzMU", "uIKCN", "INIT", "QESST", "WALLET_CONNECT_ERROR", "TRANSACTION_SENT_FOR_SIGNATURE", "12|10|9|3|2|7|1|0|6|11|8|4|5", "connection-started", "custom-event", "PrrXv", "351LEYOGB", "WALLET_CONNECT_STARTED", "LXofb", "app-hide", "44236lAOUzV", "connection-completed", "KHOhd", "445969wazEez", "connection-restoring-completed", "CONNECTION_RESTORING_ERROR", "716254JLAkYV", "transaction-signed", "CONNECTION_RESTORING_SUCCESS", "135288dPbKYj", "6106792CjMNTo", "WALLET_DISCONNECT", "connection-error", "HIDE", "DAAeu"];
    return (e = function() {
      return t
    })()
  }! function(t, e) {
    const r = n,
      s = t();
    for (;;) try {
      if (430596 === parseInt(r(310)) / 1 + parseInt(r(316)) / 2 * (parseInt(r(334)) / 3) + parseInt(r(307)) / 4 * (parseInt(r(330)) / 5) + parseInt(r(326)) / 6 + -parseInt(r(313)) / 7 + parseInt(r(317)) / 8 + -parseInt(r(345)) / 9 * (parseInt(r(327)) / 10)) break;
      s.push(s.shift())
    } catch (o) {
      s.push(s.shift())
    }
  }(e);
  const r = t(329);
  var s = (n => {
    const e = t,
      r = {
        kEjih: e(341),
        QESST: e(312),
        KHOhd: "connection-restoring-error",
        hBuEK: e(315),
        PrrXv: e(311),
        DAAeu: e(308),
        WwlWH: e(346),
        uIKCN: e(342),
        PpHaO: e(322),
        POpFy: e(328),
        IZjDA: e(339),
        LXofb: e(319),
        EONoU: e(343),
        iIzMU: e(320),
        uDDAv: e(306),
        BQDXx: e(314),
        ZaxPl: e(337)
      },
      s = r.kEjih[e(333)]("|");
    let o = 0;
    for (;;) {
      switch (s[o++]) {
        case "0":
          n[r[e(338)]] = r[e(309)];
          continue;
        case "1":
          n[r[e(323)]] = r[e(344)];
          continue;
        case "2":
          n.WALLET_CONNECT_SUCCESS = r[e(321)];
          continue;
        case "3":
          n[r[e(331)]] = r[e(336)];
          continue;
        case "4":
          n[e(318)] = r[e(325)];
          continue;
        case "5":
          return n;
        case "6":
          n[e(340)] = r[e(324)];
          continue;
        case "7":
          n[r.IZjDA] = r[e(305)];
          continue;
        case "8":
          n.TRANSACTION_SIGNING_FAILED = "transaction-signing-failed";
          continue;
        case "9":
          n.CUSTOM_EVENT = r[e(332)];
          continue;
        case "10":
          n[r[e(335)]] = r.uDDAv;
          continue;
        case "11":
          n.TRANSACTION_SIGNED = r.BQDXx;
          continue;
        case "12":
          n[r.ZaxPl] = "app-init";
          continue
      }
      break
    }
  })(s || {});
  const o = i;

  function i(t, n) {
    const e = a();
    return (i = function(t, n) {
      return e[t -= 468]
    })(t, n)
  }

  function a() {
    const t = ["addEventListener", "TRANSACTION_SIGNING_FAILED", "analyticsController", "67515ERMqSp", "3116538IGvCrU", "events", "101748CrICUJ", "TRANSACTION_SENT_FOR_SIGNATURE", "Attach ", "type", "uiScope", "60lEtxSN", "log", "ton-connect-", "tonConnectUiEvents", "1092312MowOBL", "tonConnectSdkEvents", "CONNECTION_RESTORING_STARTED", "138gQEDuV", "sdkScope", "event ", "WALLET_DISCONNECT", "1672730rGRWsF", "WALLET_CONNECT_ERROR", "CONNECTION_RESTORING_SUCCESS", "init", "CUSTOM_EVENT", "CONNECTION_RESTORING_ERROR", "1460292aujhri", "69063eWGquv", "TRANSACTION_SIGNED", "collectEvent", "detail"];
    return (a = function() {
      return t
    })()
  }! function(t, n) {
    const e = i,
      r = t();
    for (;;) try {
      if (411085 === parseInt(e(494)) / 1 + parseInt(e(483)) / 2 + parseInt(e(484)) / 3 * (parseInt(e(499)) / 4) + -parseInt(e(477)) / 5 + -parseInt(e(473)) / 6 * (parseInt(e(491)) / 7) + parseInt(e(470)) / 8 + -parseInt(e(492)) / 9) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(a);
  class c {
    constructor(t) {
      const n = i,
        e = {
          Srbth: n(468)
        };
      this[n(471)] = [s[n(481)], s.WALLET_CONNECT_SUCCESS, s[n(478)], s[n(472)], s[n(479)], s[n(482)], s[n(495)], s[n(485)], s[n(489)], s[n(476)]], this[n(469)] = [s.WALLET_CONNECT_STARTED, s[n(478)], s[n(489)]], this[n(498)] = "ton-connect-ui-", this[n(474)] = e.Srbth, this[n(490)] = t
    } [o(480)]() {
      const t = o;
      for (let n of this[t(493)]) console[t(500)](t(496) + n + " listener"), window[t(488)](n, (e => {
        const r = t;
        console[r(500)](r(475) + n + " received", e[r(487)]);
        const {
          type: s,
          ...o
        } = e[r(487)];
        this[r(490)][r(486)](e.detail[r(497)], {
          ...o
        })
      }))
    }
    get[o(493)]() {
      const t = o;
      return [...this[t(469)].map((t => "" + this.uiScope + t)), ...this[t(471)].map((n => "" + this[t(474)] + n))]
    }
  }

  function u(t, n) {
    const e = p();
    return (u = function(t, n) {
      return e[t -= 411]
    })(t, n)
  }

  function p() {
    const t = ["kPSdv", "HIDE", "624JZyATU", "20bJUoWh", "114PRtdPc", "visibilityState", "116557sGoMPO", "14236tOVQKE", "9KnAaph", "analyticsController", "zZfOc", "633yfiLVy", "nsrRR", "collectEvent", "3621810IoxxCx", "pJZKd", "3421627XIPCDA", "5245144qRZlOS", "216437HcZwGb", "addEventListener", "1509732DWWuiH", "1wQwPhX", "documentEvents", "nyvZd"];
    return (p = function() {
      return t
    })()
  }! function(t, n) {
    const e = u,
      r = t();
    for (;;) try {
      if (434193 === -parseInt(e(416)) / 1 * (parseInt(e(415)) / 2) + -parseInt(e(430)) / 3 * (parseInt(e(426)) / 4) + parseInt(e(433)) / 5 + parseInt(e(423)) / 6 * (parseInt(e(425)) / 7) + parseInt(e(412)) / 8 * (parseInt(e(427)) / 9) + -parseInt(e(422)) / 10 * (parseInt(e(411)) / 11) + parseInt(e(421)) / 12 * (parseInt(e(413)) / 13)) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(p);
  class h {
    constructor(t) {
      const n = u,
        e = function(t, n) {
          return t === n
        };
      this[n(417)] = {
        visibilitychange: () => {
          const t = n;
          e(document[t(424)], "hidden") && this.analyticsController[t(432)](s[t(420)], void 0)
        }
      }, this[n(428)] = t
    }
    init() {
      const t = u,
        n = {
          pJZKd: function(t, n) {
            return t === n
          },
          zZfOc: t(418),
          kPSdv: t(431)
        };
      for (let [e, r] of Object.entries(this[t(417)])) n[t(429)] !== n[t(419)] ? document[t(414)](e, r) : (this[t(417)] = {
        visibilitychange: () => {
          const e = t;
          n[e(434)](_0x176e69.visibilityState, "hidden") && this[e(428)][e(432)](_0x482063[e(420)], void 0)
        }
      }, this[t(428)] = _0x532116)
    }
  }
  var f = I;

  function l() {
    var t = ["3602970DySgTc", "9UAzQsI", "tonConnectObserver", "34WogaVm", "2431275cAfUXd", "1831gRVGaL", "appModule", "2272dwcBGZ", "4888888nzIrwU", "2152506hXWTrd", "init", "2515dxtxVo", "recordEvent", "documentObserver", "collectEvent", "937731tZkJrG"];
    return (l = function() {
      return t
    })()
  }

  function I(t, n) {
    var e = l();
    return (I = function(t, n) {
      return e[t -= 493]
    })(t, n)
  }! function(t, n) {
    for (var e = I, r = t();;) try {
      if (353426 === -parseInt(e(506)) / 1 * (parseInt(e(504)) / 2) + -parseInt(e(500)) / 3 + parseInt(e(508)) / 4 * (-parseInt(e(496)) / 5) + parseInt(e(494)) / 6 + -parseInt(e(505)) / 7 + parseInt(e(493)) / 8 * (parseInt(e(502)) / 9) + parseInt(e(501)) / 10) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(l);
  class d {
    constructor(t) {
      var n = I;
      this[n(507)] = t, this[n(498)] = new h(this), this[n(503)] = new c(this)
    } [f(495)]() {
      var t = f;
      this.documentObserver.init(), this[t(503)][t(495)]()
    } [f(497)](t, n) {
      var e = f;
      this[e(507)][e(497)](t, n).catch((t => console.error(t)))
    } [f(499)](t, n) {
      var e = f;
      this[e(507)][e(499)](t, n)
    }
  }! function(t, n) {
    const e = S,
      r = t();
    for (;;) try {
      if (823573 === -parseInt(e(251)) / 1 + parseInt(e(245)) / 2 + parseInt(e(243)) / 3 + parseInt(e(256)) / 4 + parseInt(e(253)) / 5 * (parseInt(e(247)) / 6) + -parseInt(e(244)) / 7 + parseInt(e(242)) / 8) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(E);
  const m = t => {
    throw new Error(t)
  };
  var g = (t => {
    const n = S,
      e = {
        hlahr: n(255),
        FwsSm: "Token is not provided.",
        lnjEV: n(250),
        tTiTh: n(246)
      };
    return t[e[n(252)]] = e[n(249)], t[e[n(248)]] = e[n(254)], t
  })(g || {});

  function S(t, n) {
    const e = E();
    return (S = function(t, n) {
      return e[t -= 242]
    })(t, n)
  }

  function E() {
    const t = ["10970896HTmnMT", "1008714KlDrZM", "3510493zpuMqx", "404474qnpRBp", "Telegram User data is not provided.", "48FZGHqY", "lnjEV", "FwsSm", "USER_DATA_IS_NOT_PROVIDED", "1637497MUmlzL", "hlahr", "48440rNNYSl", "tTiTh", "TOKEN_IS_NOT_PROVIDED", "3900912RHWytH"];
    return (E = function() {
      return t
    })()
  }
  var T = N;

  function N(t, n) {
    var e = y();
    return (N = function(t, n) {
      return e[t -= 337]
    })(t, n)
  }

  function y() {
    var t = ["assign", "events", "30SebdAC", "recordEvent", "973734cfNYKG", "TOKEN_IS_NOT_PROVIDED", "Gidzj", "zEoBr", "init", "application/json", "kqQJf", "ULNBb", "LXGzr", "hvgWf", "19119726cdJGUM", "102292PqqtaZ", "custom_data", "4CJJMGb", "ANIhz", "1724960kzQgeA", "appModule", "BACKEND_URL", "xdksD", "stringify", "ZDtPa", "eEnCm", "2977560dmVXLW", "getApiToken", "ZqbTT", "2108239nErkEG", "assembleEventSession", "POST", "373190zlCIEN"];
    return (y = function() {
      return t
    })()
  }! function(t, n) {
    for (var e = N, r = t();;) try {
      if (366813 === -parseInt(e(352)) / 1 + parseInt(e(337)) / 2 * (-parseInt(e(357)) / 3) + -parseInt(e(368)) / 4 * (parseInt(e(355)) / 5) + -parseInt(e(346)) / 6 + -parseInt(e(349)) / 7 + parseInt(e(339)) / 8 + parseInt(e(367)) / 9) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(y);
  class _ {
    constructor(t) {
      var n = N;
      this[n(341)] = r, this[n(340)] = t, !this[n(340)].getApiToken() && m(g[n(358)])
    } [T(361)]() {}
    async recordEvents(t) {
      var n = T,
        e = {
          ZDtPa: function(t, n, e) {
            return t(n, e)
          },
          Gidzj: function(t, n) {
            return t + n
          },
          xdksD: n(351),
          ULNBb: "application/json"
        };
      return await e[n(344)](fetch, e[n(359)](this[n(341)], n(354)), {
        method: e[n(342)],
        headers: {
          "TGA-Auth-Token": this[n(340)][n(347)](),
          "Content-Type": e[n(364)]
        },
        body: JSON.stringify(t)
      })
    }
    async [T(356)](t, n, e) {
      var r = T,
        s = {
          hvgWf: r(360),
          ANIhz: function(t, n) {
            return t === n
          },
          ZqbTT: r(363),
          eEnCm: function(t, n, e) {
            return t(n, e)
          },
          LXGzr: function(t, n) {
            return t + n
          },
          ejaoP: r(362)
        };
      (null == n ? void 0 : n.custom_data) && (s[r(366)] == s[r(366)] ? e ? s[r(338)](s[r(348)], s.ZqbTT) ? e = Object[r(353)](n.custom_data, e) : _0x158f8e = _0x26ffe3[r(369)] : e = n.custom_data : _0x5b0d0e ? _0x5ad3b0 = _0x1a9362.assign(_0x42439f.custom_data, _0x4ef6b8) : _0x3ec9f2 = _0x4eb7fe[r(369)]), await s[r(345)](fetch, s[r(365)](this.BACKEND_URL, r(354)), {
        method: r(351),
        headers: {
          "TGA-Auth-Token": this[r(340)][r(347)](),
          "Content-Type": s.ejaoP
        },
        body: JSON[r(343)]({
          ...n,
          event_name: t,
          custom_data: e,
          ...this[r(340)][r(350)]()
        })
      })
    }
  }
  class v extends Error {
    constructor(t, n, e) {
      super(n, {
        cause: e
      }), this.type = t, Object.setPrototypeOf(this, v.prototype)
    }
  }

  function b(t, n, e) {
    return new v(t, n, e)
  }
  const A = "ERR_UNEXPECTED_TYPE",
    O = "ERR_PARSE";

  function C() {
    return b(A, "Value has unexpected type")
  }
  class x {
    constructor(t, n, e) {
      this.parser = t, this.isOptional = n, this.type = e
    }
    parse(t) {
      if (!this.isOptional || void 0 !== t) try {
        return this.parser(t)
      } catch (n) {
        throw b(O, "Unable to parse value" + (this.type ? ` as ${this.type}` : ""), n)
      }
    }
    optional() {
      return this.isOptional = !0, this
    }
  }

  function w(t, n) {
    return () => new x(t, !1, n)
  }
  const R = w((t => {
    if ("boolean" == typeof t) return t;
    const n = String(t);
    if ("1" === n || "true" === n) return !0;
    if ("0" === n || "false" === n) return !1;
    throw C()
  }), "boolean");

  function P(t, n) {
    const e = {};
    for (const s in t) {
      const o = t[s];
      if (!o) continue;
      let i, a;
      if ("function" == typeof o || "parse" in o) i = s, a = "function" == typeof o ? o : o.parse.bind(o);
      else {
        const {
          type: t
        } = o;
        i = o.from || s, a = "function" == typeof t ? t : t.parse.bind(t)
      }
      try {
        const t = a(n(i));
        void 0 !== t && (e[s] = t)
      } catch (r) {
        throw b(O, `Unable to parse field "${s}"`, r)
      }
    }
    return e
  }

  function U(t) {
    let n = t;
    if ("string" == typeof n && (n = JSON.parse(n)), "object" != typeof n || null === n || Array.isArray(n)) throw C();
    return n
  }

  function D(t, n) {
    return new x((n => {
      const e = U(n);
      return P(t, (t => e[t]))
    }), !1, n)
  }
  const k = w((t => {
      if ("number" == typeof t) return t;
      if ("string" == typeof t) {
        const n = Number(t);
        if (!Number.isNaN(n)) return n
      }
      throw C()
    }), "number"),
    L = w((t => {
      if ("string" == typeof t || "number" == typeof t) return t.toString();
      throw C()
    }), "string");
  D({
    req_id: L(),
    data: t => null === t ? t : L().optional().parse(t)
  }), D({
    req_id: L(),
    result: t => t,
    error: L().optional()
  }), D({
    height: k(),
    width: t => null == t ? window.innerWidth : k().parse(t),
    is_state_stable: R(),
    is_expanded: R()
  });
  const G = w((t => t instanceof Date ? t : new Date(1e3 * k().parse(t))), "Date");

  function W(t, n) {
    return new x((n => {
      if ("string" != typeof n && !(n instanceof URLSearchParams)) throw C();
      const e = "string" == typeof n ? new URLSearchParams(n) : n;
      return P(t, (t => {
        const n = e.get(t);
        return null === n ? void 0 : n
      }))
    }), !1, n)
  }
  const Z = D({
      id: k(),
      type: L(),
      title: L(),
      photoUrl: {
        type: L().optional(),
        from: "photo_url"
      },
      username: L().optional()
    }, "Chat").optional(),
    M = D({
      addedToAttachmentMenu: {
        type: R().optional(),
        from: "added_to_attachment_menu"
      },
      allowsWriteToPm: {
        type: R().optional(),
        from: "allows_write_to_pm"
      },
      firstName: {
        type: L(),
        from: "first_name"
      },
      id: k(),
      isBot: {
        type: R().optional(),
        from: "is_bot"
      },
      isPremium: {
        type: R().optional(),
        from: "is_premium"
      },
      languageCode: {
        type: L().optional(),
        from: "language_code"
      },
      lastName: {
        type: L().optional(),
        from: "last_name"
      },
      photoUrl: {
        type: L().optional(),
        from: "photo_url"
      },
      username: L().optional()
    }, "User").optional();
  const J = w((t => function(t) {
    const n = t.replace(/\s/g, "").toLowerCase();
    if (function(t) {
        return /^#[\da-f]{6}$/i.test(t)
      }(n)) return n;
    if (function(t) {
        return /^#[\da-f]{3}$/i.test(t)
      }(n)) {
      let t = "#";
      for (let e = 0; e < 3; e += 1) t += n[1 + e].repeat(2);
      return t
    }
    const e = n.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/) || n.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);
    if (!e) throw new Error(`Value "${t}" does not satisfy any of known RGB formats.`);
    return e.slice(1).reduce(((t, n) => {
      const e = parseInt(n, 10).toString(16);
      return t + (1 === e.length ? "0" : "") + e
    }), "#")
  }(L().parse(t))), "rgb");

  function V(t) {
    return t.replace(/[A-Z]/g, (t => `_${t.toLowerCase()}`))
  }
  const q = w((t => {
    const n = J().optional();
    return Object.entries(U(t)).reduce(((t, [e, r]) => (t[function(t) {
      return t.replace(/_[a-z]/g, (t => t[1].toUpperCase()))
    }(e)] = n.parse(r), t)), {})
  }), "ThemeParams");

  function Q(t) {
    return W({
      botInline: {
        type: R().optional(),
        from: "tgWebAppBotInline"
      },
      initData: {
        type: W({
          authDate: {
            type: G(),
            from: "auth_date"
          },
          canSendAfter: {
            type: k().optional(),
            from: "can_send_after"
          },
          chat: Z,
          chatInstance: {
            type: L().optional(),
            from: "chat_instance"
          },
          chatType: {
            type: L().optional(),
            from: "chat_type"
          },
          hash: L(),
          queryId: {
            type: L().optional(),
            from: "query_id"
          },
          receiver: M,
          startParam: {
            type: L().optional(),
            from: "start_param"
          },
          user: M
        }, "InitData").optional(),
        from: "tgWebAppData"
      },
      initDataRaw: {
        type: L().optional(),
        from: "tgWebAppData"
      },
      platform: {
        type: L(),
        from: "tgWebAppPlatform"
      },
      showSettings: {
        type: R().optional(),
        from: "tgWebAppShowSettings"
      },
      startParam: {
        type: L().optional(),
        from: "tgWebAppStartParam"
      },
      themeParams: {
        type: q(),
        from: "tgWebAppThemeParams"
      },
      version: {
        type: L(),
        from: "tgWebAppVersion"
      }
    }).parse(t)
  }

  function X(t) {
    return Q(t.replace(/^[^?#]*[?#]/, "").replace(/[?#]/g, "&"))
  }

  function B() {
    return X(window.location.href)
  }

  function K() {
    const t = performance.getEntriesByType("navigation")[0];
    if (!t) throw new Error("Unable to get first navigation entry.");
    return X(t.name)
  }

  function j(t) {
    return `telegram-apps/${t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}`
  }

  function H() {
    return Q(function(t) {
      const n = sessionStorage.getItem(j(t));
      try {
        return n ? JSON.parse(n) : void 0
      } catch {}
    }("launchParams") || "")
  }

  function z(t) {
    const {
      initDataRaw: n,
      themeParams: e,
      platform: r,
      version: s,
      showSettings: o,
      startParam: i,
      botInline: a
    } = t, c = new URLSearchParams;
    return c.set("tgWebAppPlatform", r), c.set("tgWebAppThemeParams", function(t) {
      return JSON.stringify(Object.fromEntries(Object.entries(t).map((([t, n]) => [V(t), n]))))
    }(e)), c.set("tgWebAppVersion", s), n && c.set("tgWebAppData", n), i && c.set("tgWebAppStartParam", i), "boolean" == typeof o && c.set("tgWebAppShowSettings", o ? "1" : "0"), "boolean" == typeof a && c.set("tgWebAppBotInline", a ? "1" : "0"), c.toString()
  }

  function F(t) {
    ! function(t, n) {
      sessionStorage.setItem(j(t), JSON.stringify(n))
    }("launchParams", z(t))
  }

  function Y() {
    for (const t of [B, K, H]) try {
      const n = t();
      return F(n), n
    } catch {}
    throw new Error("Unable to retrieve launch parameters from any known source.")
  }

  function $() {
    const t = ["4434IPQfPd", "nqIQu", "FxWXX", "iWEqx", "541NLVJvS", "pwCwx", "7655nyfFIg", "length", "194jVTTkH", "2365880TGjcuY", "floor", "LTxoL", "10476347ZynJQE", "replace", "sNtoG", "slice", "18549560zagYOK", "11oIbraY", "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", "977748sYSunN", "MlmUL", "543060evnYBR", "XMCyJ", "6pZpgpe", "FXgig"];
    return ($ = function() {
      return t
    })()
  }

  function tt(t, n) {
    const e = $();
    return (tt = function(t, n) {
      return e[t -= 373]
    })(t, n)
  }

  function nt(t) {
    const n = tt,
      e = {
        BhRGG: function(t, n) {
          return t + n
        },
        FxWXX: function(t, n) {
          return t - n
        },
        pwCwx: function(t, n) {
          return t << n
        },
        SQeTl: function(t, n) {
          return t | n
        },
        FXgig: function(t, n) {
          return t % n
        },
        XMCyJ: function(t, n) {
          return t + n
        },
        LTxoL: function(t, n, e) {
          return t(n, e)
        },
        MlmUL: function(t, n) {
          return t / n
        },
        Gkjev: function(t, n) {
          return t == n
        },
        sNtoG: function(t, n) {
          return t | n
        },
        WhSVH: function(t, n) {
          return t & n
        },
        MtCgv: n(384),
        nqIQu: function(t, n) {
          return t + n
        },
        iWEqx: function(t, n) {
          return t < n
        }
      };
    let r = e.MtCgv,
      s = (new Date).getTime();
    let o = function(t) {
      const r = n;
      let s = 0;
      for (let n = 0; n < t[r(373)]; n++) {
        const o = t.charCodeAt(n);
        s = e.BhRGG(e[r(393)](e[r(396)](s, 5), s), o), s |= 0
      }
      return s
    }(e[n(392)](t, s)).toString(16);
    for (; e[n(394)](o[n(373)], 32);) o += o;
    o = o[n(381)](0, 32);
    let i = 0;
    return r[n(379)](/[xy]/g, (function(t) {
      const r = n,
        a = e.SQeTl(e[r(390)](e[r(388)](s, e[r(377)](parseInt, o[i], 16)), 16), 0);
      return s = Math[r(376)](e[r(386)](s, 16)), i++, (e.Gkjev(t, "x") ? a : e[r(380)](e.WhSVH(a, 3), 8)).toString(16)
    }))
  }

  function et() {
    const t = ["25304TzNocO", "getSessionId", "TwutR", "userId", "getUserLocale", "languageCode", "now", "441549hxcatI", "init", "678475mFaZqn", "6XjYTIr", "sessionId", "130543hooAGH", "platform", "user", "46204eCSfSi", "isPremium", "145eHyRlJ", "uZTsQ", "2290iPOtFj", "729YoiPfj", "2kVRKJI", "userData", "lastName", "userLocale", "startParam", "qKCxV", "initData", "appModule", "getUserIsPremium", "dsiXW", "getPlatform", "getWebAppStartParam", "webAppStartParam", "getUserData", "17004vGXNVk", "getAppName", "getUserId", "username", "firstName", "USER_DATA_IS_NOT_PROVIDED", "624ABYUQQ", "11561MxTZpz"];
    return (et = function() {
      return t
    })()
  }! function(t, n) {
    const e = tt,
      r = t();
    for (;;) try {
      if (853396 === -parseInt(e(395)) / 1 * (parseInt(e(374)) / 2) + -parseInt(e(389)) / 3 * (-parseInt(e(385)) / 4) + parseInt(e(397)) / 5 * (parseInt(e(391)) / 6) + parseInt(e(378)) / 7 + -parseInt(e(375)) / 8 + -parseInt(e(387)) / 9 + parseInt(e(382)) / 10 * (-parseInt(e(383)) / 11)) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }($);
  const rt = st;

  function st(t, n) {
    const e = et();
    return (st = function(t, n) {
      return e[t -= 162]
    })(t, n)
  }! function(t, n) {
    const e = st,
      r = t();
    for (;;) try {
      if (174172 === parseInt(e(194)) / 1 * (parseInt(e(203)) / 2) + -parseInt(e(189)) / 3 + -parseInt(e(197)) / 4 * (parseInt(e(199)) / 5) + -parseInt(e(192)) / 6 * (-parseInt(e(191)) / 7) + parseInt(e(182)) / 8 * (parseInt(e(202)) / 9) + parseInt(e(201)) / 10 * (parseInt(e(181)) / 11) + parseInt(e(174)) / 12 * (-parseInt(e(180)) / 13)) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(et);
  class ot {
    constructor(t) {
      this[st(167)] = t
    } [rt(190)]() {
      var t;
      const n = rt,
        e = {
          dsiXW: function(t) {
            return t()
          },
          uZTsQ: function(t, n) {
            return t(n)
          }
        },
        r = e[n(169)](Y),
        s = r[n(166)],
        o = null == (t = r[n(166)]) ? void 0 : t[n(196)];
      !o && e[n(200)](m, g[n(179)]), this[n(204)] = {
        id: o.id,
        is_premium: o[n(198)],
        first_name: o[n(178)],
        is_bot: o.isBot,
        last_name: o[n(162)],
        language_code: o.languageCode,
        photo_url: o.photoUrl,
        username: o[n(177)]
      }, this[n(185)] = o.id, this[n(163)] = o[n(187)], this[n(172)] = s[n(164)], this.platform = r[n(195)], this[n(193)] = e[n(200)](nt, e[n(200)](String, this[n(176)]()))
    } [rt(183)]() {
      return this[rt(193)]
    } [rt(176)]() {
      return this[rt(185)]
    } [rt(171)]() {
      return this[rt(172)]
    } [rt(170)]() {
      return this.platform
    } [rt(186)]() {
      return this[rt(163)]
    }
    getUserData() {
      return this.userData
    }
    getUserIsPremium() {
      const t = rt,
        n = this[t(173)]();
      return {
        qKCxV: function(t, n) {
          return t(n)
        }
      } [t(165)](Boolean, null == n ? void 0 : n.is_premium)
    }
    assembleEventSession() {
      const t = rt;
      return {
        session_id: this.getSessionId(),
        user_id: this[t(176)](),
        app_name: this[t(167)][t(175)](),
        is_premium: this[t(168)](),
        platform: this.getPlatform(),
        locale: this[t(186)](),
        start_param: this[t(171)](),
        client_timestamp: {
          TwutR: function(t, n) {
            return t(n)
          }
        } [t(184)](String, Date[t(188)]())
      }
    }
  }
  const it = ct;

  function at() {
    const t = ["11208550pLpKUo", "storage", "getItem", "localStorage", "sessionStorage", "stringify", "4646mQguYJ", "496508lNMlFP", "1111194xLcalV", "filter", "setItem", "parse", "addToStorage", "includes", "719610eAtKUF", "6OuEkyp", "MUKQs", "key", "push", "vHiZp", "null", "persist", "386848fGMZYB", "402XWRKop", "1107585arJbQU", "117OVwYpw", "getBatch"];
    return (at = function() {
      return t
    })()
  }

  function ct(t, n) {
    const e = at();
    return (ct = function(t, n) {
      return e[t -= 172]
    })(t, n)
  }! function(t, n) {
    const e = ct,
      r = t();
    for (;;) try {
      if (600017 === parseInt(e(196)) / 1 + -parseInt(e(188)) / 2 * (-parseInt(e(178)) / 3) + parseInt(e(189)) / 4 + -parseInt(e(179)) / 5 * (parseInt(e(197)) / 6) + parseInt(e(190)) / 7 + parseInt(e(177)) / 8 * (parseInt(e(180)) / 9) + -parseInt(e(182)) / 10) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(at);
  class ut {
    constructor(t) {
      const n = ct,
        e = {
          vHiZp: n(175)
        };
      this[n(186)] = window.sessionStorage, this[n(185)] = window[n(185)], navigator[n(183)][n(176)](), this[n(172)] = t;
      const r = this.localStorage[n(184)](this[n(172)]);
      [null, e[n(174)]][n(195)](r) ? this.setItem([]): this[n(192)](JSON[n(193)](r))
    } [it(181)]() {
      const t = it,
        n = {
          MUKQs: t(175)
        };
      return [null, n.MUKQs].includes(this[t(186)].getItem(this[t(172)])) && [null, n[t(198)]][t(195)](this[t(185)][t(184)](this[t(172)])) ? this.setItem([]) : this[t(192)](JSON[t(193)](this[t(185)][t(184)](this[t(172)]))), this.setItem([...JSON[t(193)](this[t(186)][t(184)](this.key)), ...JSON[t(193)](this.localStorage[t(184)](this.key))][t(191)](((n, e, r) => r.findIndex((e => JSON[t(187)](e) === JSON[t(187)](n))) === e))), JSON[t(193)](this[t(186)][t(184)](this[t(172)]))
    } [it(194)](t, n) {
      const e = it,
        r = this[e(181)]();
      r[e(173)]({
        event_name: t,
        ...n
      }), this.setItem(r)
    } [it(192)](t) {
      const n = it;
      this.localStorage[n(192)](this[n(172)], JSON[n(187)](t)), this[n(186)][n(192)](this[n(172)], JSON[n(187)](t))
    }
  }

  function pt() {
    const t = ["20NlHqzK", "VGbcv", "OUmxd", "setInterval", "1|0|2|3|5|4", "FcRsH", "length", "vZbdQ", "462674VAcTuB", "appModule", "stringify", "filter", "backoff", "log", "addToStorage", "onLine", "7225855YREWsV", "some", "GkqpM", "abprE", "yAhQs", "init", "5275161cXzpIE", "qHSxF", "CQgTw", "jhJbg", "DOMContentLoaded", "5172128HpJXWe", "224193maiJmk", "collect", "getApiToken", "qUvft", "VcXeR", "UYzEK", "slice", "YPueU", "startBatching", "sendBatch", "68aTGdAG", "5ZqxIhD", "navigator", "Fxouq", "BATCH_KEY", "then", "stopBatching", "storage", "readyState", "batchInterval", "2619252rZQcUF", "status", "ZfdFd", "XYGBc", "INIT", "split", "intervalId", "recordEvents", "collectEvent", "2290674iAkAtQ"];
    return (pt = function() {
      return t
    })()
  }
  const ht = ft;

  function ft(t, n) {
    const e = pt();
    return (ft = function(t, n) {
      return e[t -= 313]
    })(t, n)
  }! function(t, n) {
    const e = ft,
      r = t();
    for (;;) try {
      if (666415 === -parseInt(e(318)) / 1 + -parseInt(e(358)) / 2 + -parseInt(e(338)) / 3 * (-parseInt(e(348)) / 4) + parseInt(e(349)) / 5 * (parseInt(e(367)) / 6) + -parseInt(e(326)) / 7 + parseInt(e(337)) / 8 + parseInt(e(332)) / 9 * (parseInt(e(368)) / 10)) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(pt);
  class lt {
    constructor(t) {
      const n = ft,
        e = {
          qUvft: n(314),
          abprE: function(t, n) {
            return t + n
          }
        },
        r = e[n(341)][n(363)]("|");
      let s = 0;
      for (;;) {
        switch (r[s++]) {
          case "0":
            this[n(364)] = null;
            continue;
          case "1":
            this[n(322)] = 1;
            continue;
          case "2":
            this[n(357)] = 2e3;
            continue;
          case "3":
            this[n(352)] = "TGA-Batch-Requests";
            continue;
          case "4":
            this[n(355)] = new ut(e[n(329)](this.BATCH_KEY, "-") + this.appModule[n(340)]());
            continue;
          case "5":
            this[n(319)] = t;
            continue
        }
        break
      }
    } [ht(331)]() {
      const t = ht,
        n = {
          yAhQs: function(t, n) {
            return t !== n
          },
          xPqHM: "loading",
          CQgTw: function(t, n) {
            return t !== n
          },
          VGbcv: t(370)
        };
      n[t(330)](document[t(356)], n.xPqHM) ? (this[t(319)][t(366)](s[t(362)]), this[t(346)]()) : n[t(334)](n[t(369)], "OUmxd") ? (_0x483953.log(_0x3463c1), this[t(346)]()) : document.addEventListener(t(336), (() => {
        const n = t;
        this[n(319)][n(366)](s.INIT), this[n(346)]()
      }))
    } [ht(354)]() {
      const t = ht,
        n = {
          PzmWj: function(t, n) {
            return t !== n
          },
          Fxouq: t(342)
        };
      n.PzmWj(this[t(364)], null) && ("VcXeR" === n[t(351)] ? (clearInterval(this[t(364)]), this[t(364)] = null) : (this[t(319)][t(366)](_0x447b45.INIT), this[t(346)]()))
    } [ht(339)](t, n) {
      const e = ht;
      this[e(355)][e(324)](t, n)
    } [ht(346)]() {
      const t = ht;
      this[t(364)] === null && (this.intervalId = window[t(313)]((() => this.processQueue()), this.batchInterval))
    }
    processQueue() {
      const t = ht,
        n = this.storage.getBatch();
      ({
        ZfdFd: function(t, n) {
          return t !== n
        }
      })[t(360)](n[t(316)], 0) && window[t(350)][t(325)] && this[t(347)](n[t(344)](0, 20))
    } [ht(347)](t) {
      const n = ht,
        e = {
          vZbdQ: function(t, n) {
            return t === n
          },
          GkqpM: function(t, n) {
            return t(n)
          },
          UYzEK: n(361),
          NKxhc: function(t, n) {
            return t === n
          },
          YPueU: function(t, n) {
            return t < n
          },
          jhJbg: function(t, n) {
            return t !== n
          },
          yANuX: n(333),
          FcRsH: function(t, n) {
            return t * n
          }
        };
      this[n(354)](), this.appModule[n(365)](t)[n(353)]((r => {
        const s = n;
        if (e[s(317)](e[s(328)](String, r.status)[0], "4")) {
          if (!e.vZbdQ(e[s(343)], "pcEHm")) return;
          this[s(319)][s(366)](_0x3e25b8[s(362)]), this[s(346)]()
        }
        e.NKxhc(e.GkqpM(String, r[s(359)])[0], "5") ? e[s(345)](this[s(322)], 5) && (e[s(335)](s(333), e.yANuX) ? this.storage[s(324)](_0x4d0c3d, _0x2119e7) : (this[s(322)]++, this.batchInterval = e[s(315)](this[s(357)], 2.71), console.log(this[s(357)]), this[s(346)]())) : (this[s(322)] = 1, this[s(357)] = 2e3, this[s(355)].setItem(this.storage.getBatch()[s(321)]((n => !t[s(327)]((t => JSON[s(320)](n) === JSON[s(320)](t)))))), this[s(346)]())
      }), (t => {
        const e = n;
        console[e(323)](t), this[e(346)]()
      }))
    }
  }

  function It(t, n) {
    var e = mt();
    return (It = function(t, n) {
      return e[t -= 161]
    })(t, n)
  }
  var dt = It;

  function mt() {
    var t = ["sessionController", "networkController", "recordEvents", "801kOUZms", "3691905enCQHu", "split", "123672ZKLscT", "1450088yhVYrg", "550626AZLmHP", "5|2|0|3|1|4", "kxTeO", "batchService", "collectEvent", "init", "analyticsController", "recordEvent", "145371ADVYFe", "getApiToken", "1538FfIClP", "20LQEmue", "appName", "assembleEventSession", "apiToken", "6004809fYYUer"];
    return (mt = function() {
      return t
    })()
  }! function(t, n) {
    for (var e = It, r = t();;) try {
      if (326495 === -parseInt(e(184)) / 1 + -parseInt(e(162)) / 2 * (parseInt(e(171)) / 3) + parseInt(e(174)) / 4 + -parseInt(e(163)) / 5 * (parseInt(e(176)) / 6) + parseInt(e(172)) / 7 + -parseInt(e(175)) / 8 + parseInt(e(167)) / 9) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(mt);
  class gt {
    constructor(t, n) {
      for (var e = It, r = {
          kxTeO: e(177)
        } [e(178)][e(173)]("|"), s = 0;;) {
        switch (r[s++]) {
          case "0":
            this[e(168)] = new ot(this);
            continue;
          case "1":
            this[e(182)] = new d(this);
            continue;
          case "2":
            this[e(164)] = n;
            continue;
          case "3":
            this[e(169)] = new _(this);
            continue;
          case "4":
            this[e(179)] = new lt(this);
            continue;
          case "5":
            this[e(166)] = t;
            continue
        }
        break
      }
    }
    async [dt(181)]() {
      var t = dt;
      this[t(169)].init(), this[t(168)][t(181)](), this.analyticsController[t(181)](), this.batchService[t(181)]()
    } [dt(165)]() {
      return this[dt(168)].assembleEventSession()
    } [dt(183)](t, n, e) {
      var r = dt;
      return this[r(169)][r(183)](t, n, e)
    } [dt(170)](t) {
      var n = dt;
      return this[n(169)][n(170)](t)
    } [dt(180)](t, n) {
      var e = dt;
      this.batchService.collect(t, {
        ...n,
        ...this[e(165)]()
      })
    } [dt(161)]() {
      return this[dt(166)]
    }
    getAppName() {
      return this.appName
    }
  }

  function St() {
    const t = ["1320264szSaRP", "5636WeAKDM", "18KbRqXv", "4839944BZmCgL", "803958kFEjsJ", "489IGxgkO", "20NlfqjY", "810100fHjcxi", "574727EapkXe", "88326IEEGMX"];
    return (St = function() {
      return t
    })()
  }

  function Et(t, n) {
    const e = St();
    return (Et = function(t, n) {
      return e[t -= 105]
    })(t, n)
  }! function(t, n) {
    const e = Et,
      r = t();
    for (;;) try {
      if (498199 === parseInt(e(108)) / 1 + parseInt(e(110)) / 2 + -parseInt(e(105)) / 3 * (-parseInt(e(111)) / 4) + -parseInt(e(106)) / 5 * (parseInt(e(114)) / 6) + parseInt(e(109)) / 7 + -parseInt(e(113)) / 8 + -parseInt(e(112)) / 9 * (-parseInt(e(107)) / 10)) break;
      r.push(r.shift())
    } catch (s) {
      r.push(r.shift())
    }
  }(St);
  return {
    init: async function({
      token: t,
      appName: n
    }) {
      new gt(t, n).init()
    }
  }
}();