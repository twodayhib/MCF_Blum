import {
  aY as n,
  a9 as c,
  Q as i,
  V as d,
  R as u
} from "./BrLCGJDp.js";
const l = o => {
  const e = n(() => 0, "$TkhAoibwfi"),
    s = () => {
      const t = e.value + 1;
      e.value = t, u().meta.back = o ? () => {
        t === e.value && o()
      } : void 0
    };
  let a;
  c(() => {
    s(), a = i(() => u().meta.back, t => {
      t || s()
    })
  }), d(() => {
    a == null || a()
  })
};
export {
  l as u
};