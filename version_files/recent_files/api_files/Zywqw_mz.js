import {
  _ as i
} from "./munGCkoZ.js";
import {
  _ as l
} from "./CRfVlIij.js";
import {
  d as u,
  j as c,
  ae as m,
  o as _,
  J as p,
  U as a,
  b,
  az as d,
  e as f,
  f as v
} from "./Doz8XXSF.js";
const g = u({
    __name: "TribeBaseItem",
    props: {
      tribe: {
        type: Object,
        required: !0
      },
      source: {
        type: String,
        required: !0
      },
      noOpen: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const t = e,
        r = c(() => {
          if (!t.noOpen) return m().resolve({
            name: "tribe-slug",
            params: {
              slug: t.tribe.chatName
            },
            query: {
              from: t.source
            }
          }).fullPath
        });
      return (n, x) => {
        const o = i,
          s = l;
        return _(), p(s, {
          title: e.tribe.title,
          balance: e.tribe.earnBalance,
          link: f(r),
          class: "pages-tribe-base-item"
        }, {
          image: a(() => [b(o, {
            "avatar-url": e.tribe.getAvatarUrl(),
            "default-avatar": e.tribe.defaultAvatar,
            size: 38
          }, null, 8, ["avatar-url", "default-avatar"])]),
          right: a(() => [d(n.$slots, "default", {}, void 0, !0)]),
          _: 3
        }, 8, ["title", "balance", "link"])
      }
    }
  }),
  y = v(g, [
    ["__scopeId", "data-v-b9e78d30"]
  ]);
export {
  y as _
};