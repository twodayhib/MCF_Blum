import {
  _ as ne
} from "./BiY0FrNC.js";
import {
  d as L,
  j as k,
  o as s,
  c as n,
  a,
  F as j,
  q as T,
  ay as x,
  t as h,
  G as M,
  I as D,
  b as y,
  e as i,
  z as P,
  bg as F,
  _ as q,
  f as H,
  U as A,
  aR as J,
  aO as G,
  bh as W,
  ao as Q,
  a6 as V,
  C as B,
  n as z,
  u as X,
  ag as Z,
  P as re,
  k as ae,
  aY as ie,
  L as le,
  Q as ce,
  bi as U,
  bj as de,
  bk as ue,
  a8 as O,
  V as me,
  b6 as pe,
  bl as Y
} from "./BrLCGJDp.js";
import {
  _ as _e
} from "./BIjeZW-I.js";
import {
  M as he
} from "./BHMDW0oD.js";
const ve = {
    class: "memepad-jetton-statistics-card"
  },
  ye = {
    class: "list"
  },
  fe = {
    class: "header"
  },
  ke = {
    class: "title"
  },
  $e = {
    class: "value type-highlighted"
  },
  ge = {
    class: "label"
  },
  Ie = {
    class: "value type-warning"
  },
  Ce = {
    class: "label"
  },
  be = {
    key: 2,
    class: "value"
  },
  Pe = {
    class: "label"
  },
  we = L({
    __name: "HoldersCard",
    props: {
      items: {},
      riskHoldersCount: {},
      riskSupplyPercent: {}
    },
    setup(v) {
      const o = v,
        m = k(() => o.items.filter(t => !t.inChartOnly).sort((t, l) => l.percent.minus(t.percent).toNumber())),
        f = k(() => {
          const l = [...o.items].filter(d => d.percent.gt(0)),
            _ = (100 - 4 * l.length) / 100,
            e = "#1C1C1E";
          return `conic-gradient(${l.sort((d,u)=>+!!d.inChartOnly-+!!u.inChartOnly).reduce((d,u,g,$)=>{const I=[...d.items];I.push(`${u.color} ${d.total}%`);const C=u.percent.mul(_).plus(d.total).toNumber();return I.push(`${u.color} ${C}%`),$.length!==1&&(I.push(`${e} ${C}%`),I.push(`${e} ${C+4}%`)),{total:C+4,items:I}},{total:0,items:[]}).items.join(", ")})`
        });
      return (t, l) => {
        const p = q,
          _ = _e;
        return s(), n("div", ve, [a("div", ye, [(s(!0), n(j, null, T(i(m), e => (s(), n("div", {
          key: e.title,
          class: "item"
        }, [a("div", fe, [a("div", {
          class: "dot",
          style: x({
            "--bg-color": e.color
          })
        }, null, 4), a("div", ke, h(e.title), 1)]), e.listType === "highlighted" ? (s(), M(_, {
          key: 0,
          text: ("t" in t ? t.t : i(P))("memepad.holders.well_supply.tooltip"),
          "text-min-width": 150,
          alignment: i(F).RIGHT
        }, {
          default: D(() => [a("div", $e, [y(p, {
            name: "circle-check-white",
            class: "icon"
          }), a("div", ge, h(e.label), 1)])]),
          _: 2
        }, 1032, ["text", "alignment"])) : e.listType === "warning" ? (s(), M(_, {
          key: 1,
          text: ("t" in t ? t.t : i(P))("memepad.holders.holder_risk.tooltip", {
            count: t.riskHoldersCount,
            percentLabel: `${t.riskSupplyPercent}%+`
          }),
          "text-min-width": 150,
          "text-alignment": "left",
          alignment: i(F).RIGHT
        }, {
          default: D(() => [a("div", Ie, [y(p, {
            name: "triangle-warning",
            class: "icon"
          }), a("div", Ce, h(e.label), 1)])]),
          _: 2
        }, 1032, ["text", "alignment"])) : (s(), n("div", be, [a("div", Pe, h(e.label), 1)]))]))), 128))]), a("div", {
          class: "chart",
          style: x({
            backgroundImage: i(f)
          })
        }, null, 4)])
      }
    }
  }),
  Le = H(we, [
    ["__scopeId", "data-v-9d2d6a38"]
  ]),
  He = {
    class: "user-avatar-wrapper"
  },
  Ae = {
    key: 0,
    class: "logo"
  },
  je = ["src"],
  Ue = ["src"],
  Me = {
    class: "content"
  },
  Te = {
    key: 0,
    class: "blum-name"
  },
  Se = {
    class: "label"
  },
  Oe = {
    class: "label"
  },
  Re = {
    key: 3,
    class: "description"
  },
  qe = {
    class: "values"
  },
  Be = {
    class: "percent"
  },
  Ne = {
    class: "amount"
  },
  Ee = L({
    __name: "HolderImportant",
    props: {
      holder: {},
      user: {},
      isYourShare: {
        type: Boolean
      },
      isCreator: {
        type: Boolean
      },
      isLiquidityPool: {
        type: Boolean
      }
    },
    setup(v) {
      const o = v,
        m = k(() => {
          if (o.isCreator) return P("memepad.holders.list_item.creator");
          if (o.isLiquidityPool) return P("memepad.holders.list_item.liquidity_pool")
        }),
        f = k(() => {
          const e = Math.min(new A(o.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${o.holder.percent.toFixed(e)}%`
        }),
        t = k(() => `${J(o.holder.amount).full} ${o.holder.ticker}`),
        l = k(() => G(W(o.holder.address))),
        p = () => X().copy(o.holder.address),
        _ = Q(`avatars/${V(0,9)}`, "webp");
      return (e, c) => {
        var u, g;
        const d = q;
        return s(), n("div", {
          class: z(["memepad-jetton-holder-important", {
            "is-liquidity-pool": e.isLiquidityPool
          }])
        }, [a("div", He, [e.isLiquidityPool ? (s(), n("div", Ae, [y(d, {
          name: "logo",
          class: "icon"
        })])) : (u = e.user) != null && u.avatarUrl ? (s(), n("img", {
          key: 1,
          src: e.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, je)) : (s(), n("img", {
          key: 2,
          src: i(_),
          class: "user-avatar-empty"
        }, null, 8, Ue))]), a("div", Me, [e.isLiquidityPool ? (s(), n("div", Te, "Blum")) : (g = e.user) != null && g.nickname ? (s(), n("button", {
          key: 1,
          class: "user-name reset",
          type: "button",
          onClick: c[0] || (c[0] = $ => p())
        }, [a("div", Se, h(e.user.nickname), 1), y(d, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), n("button", {
          key: 2,
          class: "user-address reset",
          type: "button",
          onClick: c[1] || (c[1] = $ => p())
        }, [a("div", Oe, h(i(l)), 1), y(d, {
          name: "edit-copy",
          class: "icon"
        })])), i(m) ? (s(), n("div", Re, h(i(m)), 1)) : B("", !0)]), a("div", qe, [a("div", Be, h(i(f)), 1), a("div", Ne, h(i(t)), 1)])], 2)
      }
    }
  }),
  xe = H(Ee, [
    ["__scopeId", "data-v-a75e4c04"]
  ]),
  De = {
    class: "memepad-jetton-page-holders-important"
  },
  Fe = L({
    __name: "HoldersImportant",
    props: {
      items: {}
    },
    setup(v) {
      return (o, m) => {
        const f = xe;
        return s(), n("div", De, [(s(!0), n(j, null, T(o.items, t => (s(), M(f, Z({
          key: t.holder.address,
          ref_for: !0
        }, t), null, 16))), 128))])
      }
    }
  }),
  Ye = H(Fe, [
    ["__scopeId", "data-v-6e4d1dd7"]
  ]),
  Ke = {
    class: "memepad-jetton-holder"
  },
  Je = {
    class: "user-avatar-wrapper"
  },
  Ge = ["src"],
  We = ["src"],
  Qe = {
    class: "content"
  },
  Ve = {
    class: "label"
  },
  ze = {
    class: "label"
  },
  Xe = {
    key: 2,
    class: "description"
  },
  Ze = {
    class: "values"
  },
  et = {
    class: "percent"
  },
  tt = {
    class: "amount"
  },
  st = L({
    __name: "Holder",
    props: {
      holder: {},
      user: {},
      isYourShare: {
        type: Boolean
      },
      isCreator: {
        type: Boolean
      },
      isLiquidityPool: {
        type: Boolean
      }
    },
    setup(v) {
      const o = v,
        m = k(() => {
          const e = [];
          return o.isYourShare && e.push(P("memepad.holders.list_item.your_share")), o.isCreator && e.push(P("memepad.holders.list_item.creator")), e.join(" • ")
        }),
        f = k(() => {
          const e = Math.min(new A(o.holder.percent.toFixed(2)).decimalPlaces(), 2);
          return `${o.holder.percent.toFixed(e)}%`
        }),
        t = k(() => `${J(o.holder.amount).full} ${o.holder.ticker}`),
        l = k(() => G(W(o.holder.address))),
        p = () => X().copy(o.holder.address),
        _ = Q(`avatars/${V(0,9)}`, "webp");
      return (e, c) => {
        var u, g;
        const d = q;
        return s(), n("div", Ke, [a("div", Je, [(u = e.user) != null && u.avatarUrl ? (s(), n("img", {
          key: 0,
          src: e.user.avatarUrl,
          alt: "User avatar",
          class: "user-avatar"
        }, null, 8, Ge)) : (s(), n("img", {
          key: 1,
          src: i(_),
          class: "user-avatar-empty"
        }, null, 8, We))]), a("div", Qe, [(g = e.user) != null && g.nickname ? (s(), n("button", {
          key: 0,
          class: "user-name reset",
          type: "button",
          onClick: c[0] || (c[0] = $ => p())
        }, [a("div", Ve, h(e.user.nickname), 1), y(d, {
          name: "edit-copy",
          class: "icon"
        })])) : (s(), n("button", {
          key: 1,
          class: "user-address reset",
          type: "button",
          onClick: c[1] || (c[1] = $ => p())
        }, [a("div", ze, h(i(l)), 1), y(d, {
          name: "edit-copy",
          class: "icon"
        })])), i(m) ? (s(), n("div", Xe, h(i(m)), 1)) : B("", !0)]), a("div", Ze, [a("div", et, h(i(f)), 1), a("div", tt, h(i(t)), 1)])])
      }
    }
  }),
  ot = H(st, [
    ["__scopeId", "data-v-9a577834"]
  ]),
  nt = {
    class: "memepad-jetton-page-holders"
  },
  rt = L({
    __name: "Holders",
    props: {
      items: {}
    },
    setup(v) {
      return (o, m) => {
        const f = ot;
        return s(), n("div", nt, [(s(!0), n(j, null, T(o.items, t => (s(), M(f, Z({
          key: t.holder.address,
          ref_for: !0
        }, t), null, 16))), 128))])
      }
    }
  }),
  at = H(rt, [
    ["__scopeId", "data-v-2c126f4f"]
  ]),
  R = 5,
  K = 15,
  it = () => {
    const v = re(),
      o = ae().getters.mustGetUser.value,
      m = ie(() => new Map, "$L5sA2BniqD");
    return {
      getHoldersInfo: t => {
        const l = le();
        let p;
        const _ = async () => {
          if (l.value) return;
          const c = m.value.get(t.jetton.address);
          if (c) {
            l.value = c;
            return
          }
          const d = new he({
            jettonAddress: t.jetton.address
          });
          p = pe(async () => await d.getBuyInfo(new A(1)), () => {}, 4e3);
          const u = await p.exec();
          l.value = u.additionalInfo.routerInfo.address, m.value.set(t.jetton.address, l.value)
        };
        ce(() => {
          var c;
          return (c = t.jettonInformation) == null ? void 0 : c.isReleased
        }, c => {
          c && _()
        }, {
          immediate: !0
        });
        const e = k(() => {
          if (!t.jettonHolders || !t.jettonInformation || t.jettonInformation.isReleased && !l.value) return;
          const d = (r, b) => Y.Address.parse(r).equals(Y.Address.parse(b)),
            u = r => v.wallet.value.status !== "connected" ? !1 : d(r, v.wallet.value.address.default),
            g = t.jettonHolders.map(r => !!l.value && d(l.value, r.address) ? {
              ...r,
              affiliation: U.LIQUIDITY_POOL
            } : r),
            $ = g.filter(r => r.affiliation !== U.LIQUIDITY_POOL).slice(0, R).reduce((r, b) => r.plus(b.percent), new A(0)),
            I = $.gte(K),
            C = g.map(r => {
              const b = (() => {
                  if (!(v.wallet.value.status !== "connected" || !u(r.address))) return de(ue, {
                    address: r.address,
                    nickname: o.username,
                    avatarUrl: o.avatarUrl
                  })
                })(),
                te = r.affiliation === U.CREATOR,
                se = r.affiliation === U.LIQUIDITY_POOL,
                oe = u(r.address);
              return {
                holder: r,
                user: b,
                isCreator: te,
                isYourShare: oe,
                isLiquidityPool: se
              }
            }),
            N = C.filter(r => r.isCreator ? u(r.holder.address) : !r.isLiquidityPool),
            w = C.find(r => r.isLiquidityPool),
            ee = C.filter(r => r.isCreator ? !u(r.holder.address) : !1),
            S = [{
              title: P("memepad.about.holders.top_label", {
                count: R
              }),
              color: "#175BCC",
              label: `${O($,{accuracy:2,trim:!0})}%`,
              percent: $,
              listType: I ? "warning" : "highlighted"
            }];
          w && S.push({
            title: P("memepad.holders.list_item.liquidity_pool"),
            color: "#166C3B",
            label: `${O(w.holder.percent,{accuracy:2,trim:!0})}%`,
            percent: w.holder.percent
          });
          const E = new A(100).minus($).minus((w == null ? void 0 : w.holder.percent) ?? 0);
          return S.push({
            title: "",
            color: "#7C3EC3",
            label: `${O(E,{accuracy:2,trim:!0})}%`,
            percent: E,
            inChartOnly: !0
          }), {
            isRiskHolder: I,
            items: N,
            importantItems: ee,
            statisticItems: S
          }
        });
        return me(() => {
          p == null || p.destroy()
        }), {
          state: e,
          riskHoldersCount: R,
          riskSupplyPercent: K
        }
      }
    }
  },
  lt = {
    class: "memepad-jetton-holders-section"
  },
  ct = {
    key: 0,
    class: "items"
  },
  dt = L({
    __name: "HoldersSection",
    props: {
      jetton: {},
      jettonHolders: {},
      jettonModalControls: {},
      jettonInformation: {},
      preview: {
        type: Boolean
      }
    },
    setup(v) {
      const o = v,
        {
          state: m,
          riskHoldersCount: f,
          riskSupplyPercent: t
        } = it().getHoldersInfo(o);
      return (l, p) => {
        const _ = ne,
          e = Le,
          c = Ye,
          d = at;
        return s(), n("div", lt, [i(m) ? (s(), n(j, {
          key: 1
        }, [y(e, {
          items: i(m).statisticItems,
          class: "statistic-card",
          "risk-holders-count": i(f),
          "risk-supply-percent": i(t)
        }, null, 8, ["items", "risk-holders-count", "risk-supply-percent"]), y(c, {
          items: i(m).importantItems
        }, null, 8, ["items"]), l.preview ? B("", !0) : (s(), n("div", ct, [y(d, {
          items: i(m).items
        }, null, 8, ["items"])]))], 64)) : (s(), n("div", {
          key: 0,
          class: z(["skeletons", {
            preview: l.preview
          }])
        }, [(s(!0), n(j, null, T(l.preview ? 2 : 6, u => (s(), n("div", {
          key: u,
          class: "skeleton"
        }, [y(_, {
          class: "image",
          rounded: ""
        }), y(_, {
          class: "title"
        }), y(_, {
          class: "value"
        })]))), 128))], 2))])
      }
    }
  }),
  vt = H(dt, [
    ["__scopeId", "data-v-8b5f2d05"]
  ]);
export {
  vt as _
};