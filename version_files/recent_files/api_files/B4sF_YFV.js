import {
  d as T,
  j as _,
  o as a,
  c as n,
  e as t,
  C as o,
  a as l,
  t as h,
  n as k,
  bI as V,
  f as R,
  c8 as d,
  bN as B,
  c9 as c,
  am as G,
  bL as C,
  a8 as F,
  L as E,
  a3 as M,
  O as z,
  bm as g,
  G as I,
  w as K,
  cb as W,
  p as X,
  b as $,
  I as L,
  aW as j,
  aU as q,
  aa as Y,
  d5 as Z,
  d6 as H,
  aX as J
} from "./BrLCGJDp.js";
const Q = {
    key: 0,
    src: V,
    alt: "Warning icon"
  },
  x = T({
    __name: "KitInputOver",
    props: {
      value: {
        type: String,
        required: !0
      },
      maxLength: {
        type: Number,
        required: !0
      }
    },
    setup(b) {
      const m = b,
        s = _(() => {
          const u = m.value.length,
            r = m.maxLength - u;
          return r < 0 ? {
            type: "danger",
            label: `${r*-1} over`
          } : {
            type: "regular",
            label: r.toString()
          }
        });
      return (u, r) => (a(), n("div", {
        class: k(["kit-input-over", [`is-${t(s).type}`]])
      }, [t(s).type === "danger" ? (a(), n("img", Q)) : o("", !0), l("div", null, h(t(s).label), 1)], 2))
    }
  }),
  ee = R(x, [
    ["__scopeId", "data-v-3535603d"]
  ]),
  se = ["for"],
  te = {
    key: 0
  },
  ae = {
    class: "input-container"
  },
  oe = ["for"],
  ne = {
    key: 0,
    class: "prefix"
  },
  re = ["id", "disabled", "type", "placeholder", "readonly"],
  ie = {
    class: "postfix"
  },
  le = {
    class: "icon-container"
  },
  ue = {
    key: 0,
    src: Z,
    alt: "Check"
  },
  pe = {
    key: 1,
    src: H,
    alt: "Cross"
  },
  de = {
    key: 0,
    class: "caption"
  },
  ce = T({
    __name: "Input",
    props: {
      modelValue: {},
      errorCaption: {},
      isError: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      maxLength: {},
      type: {
        default: d.TEXT
      },
      label: {},
      placeholder: {},
      caption: {},
      prefix: {},
      size: {
        default: B.LARGE
      },
      status: {
        default: c.REGULAR
      },
      modifiers: {}
    },
    emits: ["update:modelValue", "change", "input", "focus", "blur"],
    setup(b, {
      emit: m
    }) {
      const s = b,
        u = m,
        r = G(),
        f = _({
          get() {
            return s.modelValue
          },
          set(e) {
            s.modifiers && (s.modifiers.includes(C.UPPERCASE) && (e = e.toUpperCase()), s.modifiers.includes(C.AMOUNT) && e && (e = F(e, {
              join: "emptyFractional"
            }))), i.value && i.value.value !== e && (i.value.value = e), u("update:modelValue", e)
          }
        }),
        i = E(),
        v = E(!1),
        S = () => {
          v.value = !0, u("focus", i.value)
        },
        U = () => {
          v.value = !1, u("blur", i.value)
        },
        N = _(() => {
          const e = [];
          return e.push(`is-${s.status.toLowerCase()}`), e.push(`is-${s.size.toLowerCase()}`), v.value && e.push("is-focused"), s.disabled && e.push("is-disabled"), (s.errorCaption || s.isError) && e.push("is-error"), e
        }),
        A = _(() => {
          switch (s.type) {
            case d.TEXT:
              return "text";
            case d.PASSWORD:
              return "password";
            case d.EMAIL:
              return "email";
            case d.AMOUNT:
              return "number";
            default:
              throw s.type, M("Unknown input type")
          }
        }),
        P = () => {
          var e;
          return (e = i.value) == null ? void 0 : e.blur()
        };
      return (e, p) => {
        const w = ee,
          O = J,
          D = z("click-outside");
        return a(), n("div", {
          class: k(["kit-input", t(N)])
        }, [e.label || e.$slots["label-right"] || e.$slots.label ? (a(), n("label", {
          key: 0,
          for: t(r),
          class: "label"
        }, [g(e.$slots, "label", {}, () => [l("span", null, h(e.label), 1)], !0), e.maxLength !== void 0 || e.$slots["label-right"] ? (a(), n("span", te, [e.maxLength ? (a(), I(w, {
          key: 0,
          value: t(f),
          "max-length": e.maxLength
        }, null, 8, ["value", "max-length"])) : e.$slots["label-right"] ? g(e.$slots, "label-right", {
          key: 1
        }, void 0, !0) : o("", !0)])) : o("", !0)], 8, se)) : o("", !0), l("div", ae, [l("label", {
          for: t(r),
          class: k(["label-wrapper", {
            "has-icon-offset": e.status !== t(c).REGULAR
          }])
        }, [e.prefix ? (a(), n("div", ne, h(e.prefix), 1)) : o("", !0), K(l("input", {
          id: t(r),
          ref_key: "inputRef",
          ref: i,
          "onUpdate:modelValue": p[0] || (p[0] = y => X(f) ? f.value = y : null),
          disabled: e.disabled,
          type: t(A),
          placeholder: e.placeholder,
          readonly: e.disabled,
          onChange: p[1] || (p[1] = y => e.$emit("change")),
          onInput: p[2] || (p[2] = y => e.$emit("input")),
          onBlur: U,
          onFocus: S
        }, null, 40, re), [
          [W, t(f)],
          [D, P]
        ]), l("div", ie, [g(e.$slots, "postfix", {}, void 0, !0)])], 10, oe), l("div", le, [$(q, {
          name: "change-item-transition"
        }, {
          default: L(() => [e.status === t(c).SUCCESS ? (a(), n("img", ue)) : o("", !0), e.status === t(c).ERROR ? (a(), n("img", pe)) : o("", !0), e.status === t(c).LOADING ? (a(), I(O, {
            key: 2,
            type: t(j).DARK,
            size: 20,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])) : o("", !0)]),
          _: 1
        })])]), $(Y, {
          name: "caption-transition"
        }, {
          default: L(() => [e.errorCaption || e.caption ? (a(), n("p", de, h(e.errorCaption || e.caption), 1)) : o("", !0)]),
          _: 1
        })], 2)
      }
    }
  }),
  fe = R(ce, [
    ["__scopeId", "data-v-62b0230d"]
  ]);
export {
  ee as _, fe as a
};