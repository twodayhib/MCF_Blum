import {
  d as B,
  L as V,
  o,
  c as _,
  a as r,
  cy as P,
  cG as j,
  e,
  z as i,
  m as h,
  t as k,
  b as m,
  I as g,
  G as b,
  C as w,
  ae as v,
  F as T,
  q as L,
  p as N,
  J as S,
  f as C,
  aW as E,
  W as I,
  B as O,
  aX as F,
  x as K,
  aF as M,
  j as R,
  bK as U,
  R as z,
  V as A
} from "./BrLCGJDp.js";
import {
  _ as q,
  a as D
} from "./DTPbsjEv.js";
import {
  _ as W
} from "./BCtnKHIR.js";
import {
  _ as G,
  a as H
} from "./3ibBY_JW.js";
import {
  _ as Y
} from "./D5xYi2j3.js";
import {
  _ as Z,
  a as J
} from "./B_QazZlf.js";
import {
  _ as X
} from "./B3q5VDfN.js";
import "./CLpPtEtU.js";
import "./BLM1vbSc.js";
import "./D4UgHPqA.js";
import "./BiY0FrNC.js";
import "./BbMUJ-Yp.js";
import "./LPIV59H5.js";
const Q = {
    class: "pages-tribe-welcome"
  },
  x = {
    class: "container"
  },
  ee = ["innerHTML"],
  te = {
    class: "subtitle"
  },
  ne = {
    class: "buttons"
  },
  se = {
    key: 0,
    class: "top-tribes"
  },
  ie = {
    class: "list"
  },
  oe = B({
    __name: "TribeWelcome",
    props: {
      canCreateTribe: {
        type: Boolean,
        required: !0
      },
      leaderboard: {
        type: Array,
        default: void 0
      }
    },
    setup(a) {
      const l = V(!1);
      return (n, s) => {
        const u = S,
          t = q,
          d = W,
          p = D;
        return o(), _(T, null, [r("div", Q, [s[3] || (s[3] = r("video", {
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: "",
          poster: P
        }, [r("source", {
          src: G,
          type: "video/webm"
        }), r("source", {
          src: H,
          type: "video/mp4"
        })], -1)), r("div", x, [s[2] || (s[2] = r("img", {
          src: j,
          alt: "Dizzy emoji"
        }, null, -1)), r("div", {
          class: "title",
          innerHTML: ("t" in n ? n.t : e(i))("tribes.welcome.title")
        }, null, 8, ee), r("div", te, [s[1] || (s[1] = r("i", {
          class: "lightning"
        }, null, -1)), h(" " + k(("t" in n ? n.t : e(i))("tribes.welcome.subtitle_old_version")), 1)]), r("div", ne, [m(u, {
          class: "is-white",
          to: {
            name: "tribe-join-list"
          }
        }, {
          default: g(() => [h(k(("t" in n ? n.t : e(i))("tribes.welcome.buttons.join")), 1)]),
          _: 1
        }), a.canCreateTribe ? (o(), b(u, {
          key: 0,
          class: "is-gray",
          to: {
            name: "tribe-join-new"
          }
        }, {
          default: g(() => [h(k(("t" in n ? n.t : e(i))("tribes.welcome.buttons.new")), 1)]),
          _: 1
        })) : w("", !0)]), a.leaderboard ? (o(), _("div", se, [m(t, {
          label: ("t" in n ? n.t : e(i))("tribes.welcome.leaderboard.label"),
          to: ("useRouter" in n ? n.useRouter : e(v))().resolve({
            name: "tribe-top"
          }).fullPath
        }, null, 8, ["label", "to"]), r("div", ie, [(o(!0), _(T, null, L(a.leaderboard.slice(0, 3), (c, f) => (o(), b(d, {
          key: c.id,
          tribe: c,
          rank: f + 1
        }, null, 8, ["tribe", "rank"]))), 128))])])) : w("", !0)])]), m(p, {
          modelValue: e(l),
          "onUpdate:modelValue": s[0] || (s[0] = c => N(l) ? l.value = c : null)
        }, null, 8, ["modelValue"])], 64)
      }
    }
  }),
  ae = C(oe, [
    ["__scopeId", "data-v-58df8947"]
  ]),
  re = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%2357BC18'/%3e%3cpath%20d='M17%2033L26.8995%2042.8995L48.1145%2021.6865'%20stroke='white'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  le = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='64'%20height='64'%20rx='32'%20fill='%23E53935'/%3e%3cpath%20d='M32%2020V36M32.0996%2044V44.2L31.9004%2044.2004V44H32.0996Z'%20stroke='white'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  ue = {
    class: "pages-tribe-create-statuses"
  },
  ce = {
    class: "note"
  },
  be = B({
    __name: "TribeCreateStatuses",
    props: {
      tribe: {
        type: Object,
        required: !0
      },
      tribeValidationBot: {
        type: Object,
        required: !0
      }
    },
    setup(a) {
      const l = a,
        n = () => {
          l.tribe.type === "not_created" && l.tribe.reset(), v().push({
            name: "index"
          })
        },
        s = V(!1),
        u = async () => {
          s.value || (s.value = !0, l.tribe.type === "validating" && await l.tribe.cancel(), s.value = !1)
        };
      return (t, d) => {
        const p = Y,
          c = F,
          f = Z,
          y = J,
          $ = K;
        return o(), _("div", ue, [a.tribe.type === "ok" ? (o(), b(p, {
          key: 0,
          icon: e(re),
          title: ("t" in t ? t.t : e(i))("tribes.new.statuses.ok.title"),
          subtitle: ("t" in t ? t.t : e(i))("tribes.new.statuses.ok.subtitle"),
          "button-label": ("t" in t ? t.t : e(i))("tribes.new.statuses.ok.button_label"),
          onButton: d[0] || (d[0] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "tribe-slug"
          }))
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : w("", !0), a.tribe.type === "validating" ? (o(), b(p, {
          key: 1,
          title: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.title"),
          subtitle: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.subtitle"),
          "button-label": ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.button_label"),
          onButton: d[1] || (d[1] = () => ("useRouter" in t ? t.useRouter : e(v))().push({
            name: "index"
          }))
        }, {
          icon: g(() => [m(c, {
            size: 64,
            type: e(E).DARK,
            "track-dimmed": "",
            class: "spinner"
          }, null, 8, ["type"])]),
          "before-button": g(() => [r("div", ce, [m(y, {
            title: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.note.title"),
            subtitle: a.tribeValidationBot.name,
            class: "bot-info"
          }, {
            default: g(() => [m(f, {
              value: a.tribeValidationBot.name
            }, null, 8, ["value"])]),
            _: 1
          }, 8, ["title", "subtitle"])]), m($, {
            label: ("t" in t ? t.t : e(i))("tribes.new.statuses.validating.cancel_btn_label"),
            fill: "",
            size: e(I).LARGE,
            type: e(O).SECONDARY,
            disabled: e(s),
            class: "cancel-verification-btn",
            onClick: u
          }, null, 8, ["label", "size", "type", "disabled"])]),
          _: 1
        }, 8, ["title", "subtitle", "button-label"])) : w("", !0), a.tribe.type === "not_created" ? (o(), b(p, {
          key: 2,
          icon: e(le),
          title: ("t" in t ? t.t : e(i))("tribes.new.statuses.not_created.title"),
          subtitle: a.tribe.messages.screen,
          "button-label": ("t" in t ? t.t : e(i))("tribes.new.statuses.not_created.button_label"),
          onButton: n
        }, null, 8, ["icon", "title", "subtitle", "button-label"])) : w("", !0)])
      }
    }
  }),
  de = C(be, [
    ["__scopeId", "data-v-b8232daf"]
  ]),
  me = {
    class: "tribe-join-page page"
  },
  pe = B({
    __name: "index",
    setup(a) {
      const l = V(!1),
        n = M();
      n.getBot();
      const s = n.emitter("created", () => l.value = !0),
        u = R(() => n.myTribeRes.value),
        t = R(() => n.tribeValidationBot.value);
      return U(() => n.tribeOrUndefined.value && !l.value && v().replace({
        name: "tribe-slug"
      })), z().meta.back = () => v().push({
        name: "index"
      }), A(() => s()), (d, p) => {
        const c = ae,
          f = de,
          y = X;
        return o(), _("div", me, [e(u) && e(t) ? (o(), _(T, {
          key: 0
        }, [e(u).type === "not_found" ? (o(), b(c, {
          key: 0,
          "can-create-tribe": e(n).canCreateTribe.value,
          leaderboard: e(n).leaderboard.value
        }, null, 8, ["can-create-tribe", "leaderboard"])) : (o(), b(f, {
          key: 1,
          tribe: e(u),
          "tribe-validation-bot": e(t),
          class: "create-statuses"
        }, null, 8, ["tribe", "tribe-validation-bot"]))], 64)) : (o(), b(y, {
          key: 1
        }))])
      }
    }
  }),
  $e = C(pe, [
    ["__scopeId", "data-v-107dcf0e"]
  ]);
export {
  $e as
  default
};