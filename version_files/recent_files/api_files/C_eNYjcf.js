import {
  d as o,
  cx as c,
  aF as u,
  bK as _,
  Q as i,
  o as l,
  G as m,
  aJ as f,
  ae as t,
  R as p,
  f as d
} from "./BrLCGJDp.js";
const b = o({
    __name: "[...slug]",
    setup(v) {
      const {
        isMyTribe: s,
        chatName: n
      } = c(), e = u();
      return _(() => {
        s.value && e.myTribeRes.value && !e.tribeOrUndefined.value && t().replace({
          name: "tribe-join"
        })
      }), i(() => e.myTribeRes.value, () => {
        var a;
        !s.value && e.tribeOrUndefined.value && e.tribeOrUndefined.value.chatName === n.value && t().replace({
          name: (a = p().name) == null ? void 0 : a.toString(),
          params: {
            slug: ""
          }
        })
      }), (a, x) => {
        const r = f;
        return l(), m(r)
      }
    }
  }),
  g = d(b, [
    ["__scopeId", "data-v-5718f2d1"]
  ]);
export {
  g as
  default
};