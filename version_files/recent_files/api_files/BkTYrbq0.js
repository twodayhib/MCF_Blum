import {
  d3 as i
} from "./DQp58DI6.js";
const s = r => {
  const t = r.lt(0),
    n = t ? "-" : "+";
  let o = i(r, {
    trim: !0
  }) + "%";
  return n === "+" && (o = `+${o}`), {
    direction: t ? "down" : "up",
    cls: `is-${t?"down":"up"}`,
    directionSymbol: n,
    formatted: o
  }
};
export {
  s as g
};