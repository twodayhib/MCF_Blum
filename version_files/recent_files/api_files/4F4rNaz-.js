import {
  d,
  z as f,
  L as y,
  j as k,
  o as n,
  c as C,
  a as v,
  t as b,
  n as i,
  e,
  G as o,
  aW as m,
  C as B,
  aX as $,
  _ as g,
  f as I
} from "./BrLCGJDp.js";
const N = d({
    __name: "PillClaim",
    props: {
      label: {
        default: () => f("base.claim")
      },
      type: {
        default: "default"
      },
      canClaim: {
        type: Boolean
      },
      claimFn: {}
    },
    setup(r) {
      const t = r,
        s = y(!1),
        a = k(() => s.value ? {
          state: "claiming"
        } : t.canClaim ? {
          state: "claim"
        } : {
          state: "claimed"
        }),
        p = async () => {
          a.value.state === "claim" && (s.value = !0, await t.claimFn(), s.value = !1)
        };
      return (l, c) => {
        const _ = $,
          u = g;
        return n(), C("button", {
          class: i(["kit-pill-claim reset", [`is-state-${e(a).state}`, `is-type-${l.type}`]]),
          onClick: c[0] || (c[0] = x => p())
        }, [v("div", {
          class: i(["label", {
            "is-hidden": e(a).state !== "claim"
          }])
        }, b(l.label), 3), e(a).state === "claiming" ? (n(), o(_, {
          key: 0,
          size: 16,
          class: "spinner",
          type: t.type === "dark" ? e(m).LIGHT : e(m).DARK
        }, null, 8, ["type"])) : e(a).state === "claimed" ? (n(), o(u, {
          key: 1,
          name: "circle-check-white",
          class: "claimed-icon"
        })) : B("", !0)], 2)
      }
    }
  }),
  E = I(N, [
    ["__scopeId", "data-v-af24ff4e"]
  ]);
export {
  E as _
};