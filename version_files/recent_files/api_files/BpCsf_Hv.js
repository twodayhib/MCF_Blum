import {
  d as f,
  ap as y,
  aq as $,
  Q as x,
  h,
  j as T,
  o as n,
  c as o,
  a as C,
  ay as b,
  e as p,
  F as _,
  q as k,
  n as I,
  t as V,
  f as g,
  L as m,
  b as v,
  I as w,
  bm as M,
  C as S,
  aU as B
} from "./BrLCGJDp.js";
const N = ["onClick"],
  q = f({
    __name: "KitTabsToggle",
    props: y({
      tabs: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(i) {
      const l = i,
        s = $(i, "modelValue");
      x(s, () => h().$webApp.HapticFeedback.impactOccurred("light"));
      const u = T(() => {
        const c = l.tabs.length,
          e = 0,
          a = l.tabs.findIndex(t => t.key === s.value),
          r = `(100% - ${2*2}px - ${c-1} * ${e}px) / ${c}`;
        return {
          width: `calc(${r})`,
          left: `calc(${r} * ${a} + 2px + ${e*a}px)`
        }
      });
      return (d, c) => (n(), o("div", {
        class: "kit-tabs-toggle",
        style: b({
          gridTemplateColumns: `repeat(${d.tabs.length}, 1fr)`
        })
      }, [C("div", {
        class: "active-back",
        style: b(p(u))
      }, null, 4), (n(!0), o(_, null, k(d.tabs, e => (n(), o("button", {
        key: e.key,
        class: I(["tab reset", {
          "is-active": s.value === e.key
        }]),
        onClick: a => s.value = e.key
      }, V(e.label), 11, N))), 128))], 4))
    }
  }),
  F = g(q, [
    ["__scopeId", "data-v-8fb6ab30"]
  ]),
  K = {
    class: "kit-tabs-slider"
  },
  z = {
    key: 0,
    class: "slide"
  },
  A = f({
    __name: "KitTabsSlider",
    props: {
      tabs: {}
    },
    setup(i) {
      const l = i,
        s = m(l.tabs[0].key),
        u = m("left"),
        d = m(),
        c = e => {
          if (e === s.value) return;
          const a = l.tabs.findIndex(t => t.key === s.value),
            r = l.tabs.findIndex(t => t.key === e);
          u.value = a < r ? "right" : "left", d.value && (d.value.scrollTop = 0), s.value = e
        };
      return (e, a) => {
        const r = F;
        return n(), o("div", K, [v(r, {
          "model-value": p(s),
          tabs: e.tabs,
          "onUpdate:modelValue": a[0] || (a[0] = t => c(t))
        }, null, 8, ["model-value", "tabs"]), v(B, {
          tag: "div",
          class: "slider-wrapper",
          name: `slider-transition-from-${p(u)}`
        }, {
          default: w(() => [(n(!0), o(_, null, k(e.tabs, t => (n(), o(_, {
            key: t.key
          }, [t.key === p(s) ? (n(), o("div", z, [M(e.$slots, t.key, {}, void 0, !0)])) : S("", !0)], 64))), 128))]),
          _: 3
        }, 8, ["name"])])
      }
    }
  }),
  U = g(A, [
    ["__scopeId", "data-v-84da8c16"]
  ]);
export {
  U as _
};