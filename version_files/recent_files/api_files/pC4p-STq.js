import {
  d as V,
  aq as x,
  w as h,
  bP as q,
  o as n,
  c as r,
  f as L,
  ap as B,
  L as i,
  Q as I,
  a9 as D,
  V as F,
  j as R,
  am as T,
  O as $,
  a as t,
  F as z,
  q as U,
  n as w,
  C as A,
  t as G,
  e as _,
  bq as N,
  bm as O
} from "./BrLCGJDp.js";
const W = V({
    __name: "CheckboxLegal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(c) {
      const v = x(c, "modelValue");
      return (a, o) => h((n(), r("input", {
        "onUpdate:modelValue": o[0] || (o[0] = f => v.value = f),
        type: "checkbox",
        class: "checkbox-legal"
      }, null, 512)), [
        [q, v.value]
      ])
    }
  }),
  Z = L(W, [
    ["__scopeId", "data-v-f5d0d034"]
  ]),
  j = {
    class: "list"
  },
  H = ["data-tab"],
  K = {
    key: 0,
    class: "ping-dot"
  },
  P = {
    class: "label"
  },
  Q = ["value", "name"],
  k = .4,
  J = V({
    __name: "KitTabsInline",
    props: B({
      items: {
        type: Array,
        default: void 0
      }
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(c) {
      const v = c,
        a = x(c, "modelValue"),
        o = i(null),
        f = () => {
          var m;
          const l = a.value,
            e = (m = o.value) == null ? void 0 : m.querySelector(`label[data-tab="${l}"]`);
          if (e) {
            const s = e.getBoundingClientRect(),
              b = window.innerWidth - s.right,
              M = s.left,
              S = e.offsetLeft;
            (b < 50 || M < 50) && (o.value.scrollLeft = S - window.innerWidth / 2 + s.width / 2)
          }
        };
      setTimeout(() => f(), 10), I(a, f);
      const y = i(!1),
        g = i(!1),
        d = i(null),
        u = i(null),
        p = new IntersectionObserver(([l]) => {
          const e = l.intersectionRatio < k;
          l.target.classList.contains("start") ? g.value = !e : y.value = !e
        }, {
          threshold: k
        });
      D(() => {
        d.value && p.observe(d.value), u.value && p.observe(u.value)
      }), F(() => {
        d.value && p.unobserve(d.value), u.value && p.unobserve(u.value)
      });
      const C = R(() => {
          var l;
          return ((l = v.items) == null ? void 0 : l.map(e => typeof e == "string" ? {
            value: e,
            label: e
          } : e)) ?? []
        }),
        E = T();
      return (l, e) => {
        const m = $("horizontal-wheel-scroll");
        return n(), r("div", {
          class: w(["kit-tabs-inline", {
            "is-fully-right-scrolled": _(y),
            "is-fully-left-scrolled": _(g)
          }])
        }, [e[2] || (e[2] = t("div", {
          class: "shadow left-shadow"
        }, null, -1)), e[3] || (e[3] = t("div", {
          class: "shadow right-shadow"
        }, null, -1)), h((n(), r("div", {
          ref_key: "tabsEl",
          ref: o,
          class: "content"
        }, [t("div", j, [t("div", {
          ref_key: "startEl",
          ref: d,
          class: "start"
        }, null, 512), (n(!0), r(z, null, U(_(C), s => (n(), r("label", {
          key: s.value,
          class: w(["tab", {
            "is-active": a.value === s.value,
            "show-dot": s.dot
          }]),
          "data-tab": s.value
        }, [s.pingDot ? (n(), r("div", K)) : A("", !0), t("span", P, G(s.label), 1), e[1] || (e[1] = t("div", {
          class: "dot"
        }, null, -1)), h(t("input", {
          "onUpdate:modelValue": e[0] || (e[0] = b => a.value = b),
          type: "radio",
          value: s.value,
          name: _(E)
        }, null, 8, Q), [
          [N, a.value]
        ])], 10, H))), 128)), t("div", {
          ref_key: "endEl",
          ref: u,
          class: "end"
        }, null, 512)]), O(l.$slots, "after", {}, void 0, !0)])), [
          [m]
        ])], 2)
      }
    }
  }),
  ee = L(J, [
    ["__scopeId", "data-v-5192c793"]
  ]);
export {
  Z as _, ee as a
};