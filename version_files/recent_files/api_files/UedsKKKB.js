import {
  d as w,
  x as g,
  B as b,
  V as N,
  cf as h,
  cg as G,
  aR as B,
  ah as R,
  bM as A,
  ap as j,
  G as M,
  am as P,
  o,
  c as l,
  a as i,
  F as d,
  q as k,
  e as n,
  J as O,
  bV as Y,
  af as D,
  ai as C,
  C as y,
  ae as q,
  ch as F,
  n as K,
  t as r,
  U as z,
  m as f,
  w as T,
  bW as $,
  ci as J,
  v as W,
  f as X
} from "./CEkQG6G2.js";
import {
  K as Z
} from "./3GkPwSGG.js";
import {
  a as H
} from "./5MP8Pfp8.js";
import {
  _ as Q
} from "./By2rsbFJ.js";
import "./pAV8D-4y.js";
import "./DCKbnw83.js";
import "./CXO-Cdt2.js";
const ee = {
    class: "preview-page page no-wrapper"
  },
  te = {
    class: "menu-components"
  },
  ae = ["onClick"],
  oe = {
    class: "active-components"
  },
  se = {
    key: 0,
    class: "props"
  },
  le = {
    key: 0
  },
  ne = ["onUpdate:modelValue", "label"],
  ue = {
    key: 1
  },
  ce = ["onUpdate:modelValue", "type", "placeholder"],
  ie = {
    key: 2
  },
  pe = ["onUpdate:modelValue", "multiple"];
var S = (v => (v.CLOSE = "close", v))(S || {});
const E = "model-value",
  ye = w({
    __name: "preview",
    setup(v) {
      const U = [{
          component: g,
          key: "kit-button",
          props: [{
            key: "label",
            value: "Button",
            type: "STRING"
          }, {
            key: "type",
            type: "ENUM",
            value: b.PRIMARY,
            options: Object.values(b)
          }, {
            key: "size",
            type: "ENUM",
            value: N.MEDIUM,
            options: Object.values(N)
          }, {
            key: "isDanger",
            type: "TOGGLE",
            value: !1
          }, {
            key: "icon",
            type: "ENUM",
            value: "",
            options: Object.values(S)
          }, {
            key: "link",
            value: "",
            type: "STRING"
          }, {
            key: "disabled",
            value: !1,
            type: "TOGGLE"
          }, {
            key: "fill",
            value: !1,
            type: "TOGGLE"
          }, {
            key: "hasContinueIcon",
            value: !1,
            type: "TOGGLE"
          }]
        }, {
          component: H,
          key: "kit-input",
          props: [{
            key: E,
            value: "",
            type: "STRING"
          }, {
            key: "type",
            value: h.TEXT,
            type: "ENUM",
            options: Object.values(h)
          }, {
            key: "label",
            value: "Label",
            type: "STRING"
          }, {
            key: "placeholder",
            value: "Placeholder",
            type: "STRING"
          }, {
            key: "caption",
            value: "",
            type: "STRING"
          }, {
            key: "status",
            value: G.REGULAR,
            type: "ENUM",
            options: Object.values(G)
          }, {
            key: "disabled",
            value: !1,
            type: "TOGGLE"
          }]
        }, {
          component: B,
          key: "kit-bottom-modal",
          props: [{
            key: E,
            value: !0,
            type: "TOGGLE"
          }, {
            key: "title",
            value: "Modal Title",
            type: "STRING"
          }],
          slots: {
            default: () => R("div", [...Array(50)].map((a, t) => R("div", `${t+1} - Test`)))
          }
        }, {
          component: Z,
          key: "kit-file-uploader",
          props: [{
            key: "hideUi",
            type: "TOGGLE",
            value: !1
          }, {
            key: "accept",
            type: "ENUM_ARRAY",
            value: [],
            options: Object.values(A)
          }, {
            key: "maxFileSizeMb",
            type: "NUMBER",
            value: 10
          }]
        }, {
          component: Q,
          key: "pages-welcome"
        }],
        I = (() => {
          const a = j().query.component;
          if (typeof a == "string") return a
        })(),
        _ = M(I),
        s = M(),
        V = a => a.split("-").map(t => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" "),
        x = a => a && Object.fromEntries(a.map(t => [t.key, t.value])),
        L = a => {
          var c, p;
          const t = (p = (c = s.value) == null ? void 0 : c.props) == null ? void 0 : p.find(e => e.key === E);
          t && typeof t.value == typeof a && (t.value = a)
        };
      return P(() => _.value, a => {
        const t = U.find(c => c.key === a);
        t ? (q().push({
          query: {
            component: a
          }
        }), s.value = {
          ...t,
          component: F(t.component)
        }) : window.history.replaceState({}, "", location.pathname)
      }, {
        immediate: !0
      }), (a, t) => {
        var c, p;
        return o(), l("div", ee, [i("div", te, [(o(), l(d, null, k(U, e => i("div", {
          key: e.key,
          class: K(["menu-components-item", {
            "is-current": n(_) === e.key
          }]),
          onClick: m => _.value = e.key
        }, r(V(e.key)), 11, ae)), 64))]), i("div", oe, [(c = n(s)) != null && c.key ? (o(), O(C(n(s).component), D({
          key: 0,
          style: n(s).customStyle
        }, x(n(s).props), {
          "onUpdate:modelValue": t[0] || (t[0] = e => L(e))
        }), Y({
          _: 2
        }, [k(n(s).slots ? Object.entries(n(s).slots) : [], ([e, m]) => ({
          name: e,
          fn: z(() => [(o(), O(C(m)))])
        }))]), 1040, ["style"])) : y("", !0)]), (p = n(s)) != null && p.props ? (o(), l("div", se, [(o(!0), l(d, null, k(n(s).props, (e, m) => (o(), l(d, {
          key: m
        }, [e.type === "TOGGLE" ? (o(), l("label", le, [f(r(e.key) + " ", 1), T(i("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: "checkbox",
          label: e.key
        }, null, 8, ne), [
          [$, e.value]
        ])])) : y("", !0), e.type === "STRING" || e.type === "NUMBER" ? (o(), l("label", ue, [f(r(e.key) + " ", 1), T(i("input", {
          "onUpdate:modelValue": u => e.value = u,
          type: e.type === "NUMBER" ? "number" : "text",
          placeholder: e.key
        }, null, 8, ce), [
          [J, e.value]
        ])])) : y("", !0), e.type === "ENUM" || e.type === "ENUM_ARRAY" ? (o(), l("label", ie, [f(r(e.key) + " ", 1), T(i("select", {
          "onUpdate:modelValue": u => e.value = u,
          multiple: e.type === "ENUM_ARRAY"
        }, [(o(!0), l(d, null, k(e.options, u => (o(), l("option", {
          key: u
        }, r(u), 1))), 128))], 8, pe), [
          [W, e.value]
        ])])) : y("", !0)], 64))), 128))])) : y("", !0)])
      }
    }
  }),
  Te = X(ye, [
    ["__scopeId", "data-v-eed089be"]
  ]);
export {
  Te as
  default
};