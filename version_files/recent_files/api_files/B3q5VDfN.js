import {
  d as i,
  L as c,
  V as r,
  o as p,
  c as _,
  w as l,
  cK as u,
  e as n,
  b as f,
  aW as m,
  n as d,
  aX as x,
  f as y
} from "./BrLCGJDp.js";
const v = i({
    __name: "KitPageSpinner",
    props: {
      delay: {
        type: Number,
        default: 120
      },
      fixed: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const s = e,
        t = c(!1),
        a = setTimeout(() => t.value = !0, s.delay);
      return r(() => clearTimeout(a)), (S, N) => {
        const o = x;
        return p(), _("div", {
          class: d(["kit-page-spinner", {
            "is-fixed": e.fixed
          }])
        }, [l(f(o, {
          size: 64,
          type: n(m).LIGHT
        }, null, 8, ["type"]), [
          [u, n(t)]
        ])], 2)
      }
    }
  }),
  b = y(v, [
    ["__scopeId", "data-v-f6662c39"]
  ]);
export {
  b as _
};