import {
  _ as B
} from "./CTFQbQro.js";
import {
  d as S,
  F as E,
  r as g,
  a as f,
  c as y,
  k as _,
  x as W,
  b as k,
  m as w,
  e as n,
  f as i,
  Y as R,
  g as O,
  V as $,
  bI as C,
  W as F,
  C as K,
  aU as D,
  j as N,
  az as G,
  aA as M,
  bG as h,
  av as L,
  a8 as q,
  w as x,
  c$ as z,
  t as H,
  L as Y,
  ce as I,
  am as J,
  K as V,
  d0 as P,
  u as j,
  B as Z,
  d1 as Q,
  cr as X,
  P as ee,
  ab as ae,
  S as T,
  O as te,
  J as ne
} from "./2LbcXgIA.js";
import {
  K as oe
} from "./2JGlTBmr.js";
import {
  a as se
} from "./CwiWsMaM.js";
import {
  _ as re
} from "./BW9Nuhfc.js";
import {
  _ as le
} from "./nKoJ2GBN.js";
const ue = {
    class: "account-avatar-modal"
  },
  ie = S({
    __name: "AvatarModal",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      canDelete: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue", "avatar:changed", "avatar:progress"],
    setup(U, {
      emit: u
    }) {
      const s = U,
        r = u,
        t = E({
          get() {
            return s.modelValue
          },
          set(e) {
            r("update:modelValue", e)
          }
        }),
        l = () => t.value = !1,
        m = g(),
        c = () => {
          var e;
          return (e = m.value) == null ? void 0 : e.triggerFileUpload()
        },
        o = () => r("avatar:changed", void 0);
      return (e, a) => {
        const p = K,
          d = D,
          b = oe;
        return f(), y(F, null, [_(d, {
          modelValue: n(t),
          "onUpdate:modelValue": a[3] || (a[3] = v => $(t) ? t.value = v : null),
          title: ("t" in e ? e.t : n(i))("welcome.avatar.modal.title")
        }, {
          default: W(() => [k("div", ue, [U.canDelete ? (f(), w(p, {
            key: 0,
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.delete"),
            fill: "",
            type: n(R).SECONDARY,
            "is-danger": "",
            onClick: a[0] || (a[0] = v => (l(), o()))
          }, null, 8, ["label", "type"])) : O("", !0), _(p, {
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.choose"),
            fill: "",
            onClick: a[1] || (a[1] = v => (l(), c()))
          }, null, 8, ["label"]), _(p, {
            label: ("t" in e ? e.t : n(i))("welcome.avatar.modal.cancel"),
            fill: "",
            type: n(R).GHOST,
            onClick: a[2] || (a[2] = v => l())
          }, null, 8, ["label", "type"])])]),
          _: 1
        }, 8, ["modelValue", "title"]), _(b, {
          ref_key: "fileUploaderRef",
          ref: m,
          accept: [n(C).JPEG, n(C).PNG],
          "max-file-size-mb": 10,
          "hide-ui": "",
          onUploaded: a[4] || (a[4] = v => e.$emit("avatar:changed", v)),
          "onUpdate:progress": a[5] || (a[5] = v => e.$emit("avatar:progress", v))
        }, null, 8, ["accept"])], 64)
      }
    }
  }),
  ce = N(ie, [
    ["__scopeId", "data-v-0cd52560"]
  ]),
  de = {
    class: "account-avatar"
  },
  me = {
    class: "avatar-compose"
  },
  pe = {
    class: "control",
    tabindex: "0"
  },
  ve = S({
    __name: "Avatar",
    props: {
      modelValue: {
        default: void 0
      },
      modelModifiers: {}
    },
    emits: G(["update:lock-by-avatar-uploading"], ["update:modelValue"]),
    setup(U, {
      emit: u
    }) {
      const s = M(U, "modelValue"),
        r = u,
        t = g(!1),
        l = g(),
        m = E(() => {
          if (l.value && l.value.status === h.UPLOADING) return l.value.localUrl;
          if (s.value !== void 0) return typeof s.value == "string" ? s.value : s.value.url
        });
      return L(l, c => r("update:lock-by-avatar-uploading", !!c)), (c, o) => {
        const e = B,
          a = ce,
          p = q("activate");
        return f(), y("div", de, [k("div", me, [_(e, {
          "override-avatar-url": n(m),
          onOnImageError: o[0] || (o[0] = d => s.value = void 0)
        }, null, 8, ["override-avatar-url"]), x((f(), y("div", pe, [o[4] || (o[4] = k("img", {
          src: z,
          alt: "Edit icon"
        }, null, -1)), k("span", null, H(("t" in c ? c.t : n(i))("welcome.avatar.edit")), 1)])), [
          [p, () => t.value = !0]
        ])]), _(a, {
          modelValue: n(t),
          "onUpdate:modelValue": o[1] || (o[1] = d => $(t) ? t.value = d : null),
          "can-delete": !!s.value,
          "onAvatar:changed": o[2] || (o[2] = d => s.value = d),
          "onAvatar:progress": o[3] || (o[3] = d => l.value = d)
        }, null, 8, ["modelValue", "can-delete"])])
      }
    }
  }),
  _e = N(ve, [
    ["__scopeId", "data-v-02d5f2a9"]
  ]),
  fe = S({
    __name: "UsernameInput",
    emits: ["update:username"],
    setup(U, {
      emit: u
    }) {
      const s = u,
        r = g(""),
        t = g("WAITING"),
        l = E(() => {
          switch (t.value) {
            case "WAITING":
              return {
                status: I.REGULAR
              };
            case "SUCCESS":
              return {
                status: I.SUCCESS, caption: i("welcome.username.input.caption.success")
              };
            case "TAKEN":
              return {
                status: I.ERROR, caption: i("welcome.username.input.caption.already_taken")
              };
            case "INVALID":
              return {
                status: I.ERROR, caption: i("welcome.username.input.caption.invalid")
              };
            case "UNKNOWN":
              return {
                status: I.ERROR, caption: i("welcome.username.input.caption.unknown_error")
              };
            default:
              throw t.value, Y("Invalid stage")
          }
        }),
        m = async () => {
          const o = r.value;
          if (!o) return;
          const e = await V.checkUsername({
            username: o
          });
          if (e.err) {
            e.message === P.USERNAME_INVALID ? t.value = "INVALID" : e.message === P.USERNAME_TAKEN ? t.value = "TAKEN" : t.value = "UNKNOWN";
            return
          }
          t.value = "SUCCESS", s("update:username", o)
        }, {
          debouncedFunction: c
        } = J(m, 750);
      return L(r, () => {
        t.value = "WAITING", s("update:username", void 0), c()
      }), (o, e) => {
        const a = se;
        return f(), w(a, {
          modelValue: n(r),
          "onUpdate:modelValue": e[0] || (e[0] = p => $(r) ? r.value = p : null),
          placeholder: ("t" in o ? o.t : n(i))("welcome.username.input.placeholder"),
          label: ("t" in o ? o.t : n(i))("welcome.username.input.label"),
          class: "account-username-input",
          status: n(l).status,
          caption: n(l).caption
        }, null, 8, ["modelValue", "placeholder", "label", "status", "caption"])
      }
    }
  }),
  Ue = N(fe, [
    ["__scopeId", "data-v-2814d794"]
  ]),
  ge = {
    class: "pages-welcome-screen-username"
  },
  Ae = ["innerHTML"],
  ke = {
    key: 0,
    src: Q,
    alt: "Pokras background text",
    class: "pokras-bg-text",
    width: "275",
    height: "125"
  },
  ye = {
    class: "profile"
  },
  be = S({
    __name: "ScreenUsername",
    props: {
      tgAvatarUrl: {
        type: String,
        default: void 0
      }
    },
    emits: ["continue"],
    setup(U, {
      emit: u
    }) {
      const s = U,
        r = u,
        t = g({
          avatar: s.tgAvatarUrl,
          username: void 0
        }),
        l = () => {
          const e = (() => {
            if (t.value.avatar !== void 0) return typeof t.value.avatar == "string" ? t.value.avatar : t.value.avatar.url
          })();
          r("continue", {
            username: X(t.value.username, "username"),
            avatar: e
          })
        },
        m = g(!1),
        c = E(() => !!t.value.username && !m.value),
        o = j().internal.isPokrasTheme;
      return (e, a) => {
        const p = _e,
          d = Ue,
          b = K,
          v = re;
        return f(), y("div", ge, [k("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : n(i))("welcome.title")
        }, null, 8, Ae), n(o) ? (f(), y("img", ke)) : O("", !0), k("div", ye, [_(p, {
          modelValue: n(t).avatar,
          "onUpdate:modelValue": a[0] || (a[0] = A => n(t).avatar = A),
          "onUpdate:lockByAvatarUploading": a[1] || (a[1] = A => m.value = A)
        }, null, 8, ["modelValue"]), _(d, {
          "onUpdate:username": a[2] || (a[2] = A => n(t).username = A)
        })]), _(v, null, {
          default: W(() => [_(b, {
            label: ("t" in e ? e.t : n(i))("base.continue"),
            fill: "",
            size: n(Z).LARGE,
            "has-continue-icon": "",
            disabled: !n(c),
            onClick: a[3] || (a[3] = A => l())
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Ie = N(be, [
    ["__scopeId", "data-v-4a1c597a"]
  ]),
  Se = {
    class: "pages-welcome-welcome"
  },
  Ee = S({
    __name: "Welcome",
    setup(U) {
      const u = ee().$webApp,
        s = ae(),
        r = u.dataUnsafe.query.tribe ? "tribe" : u.dataUnsafe.query.src === "qr" ? "qr" : u.dataUnsafe.query.ref ? "referral" : "direct",
        t = g("LOADING");
      (async () => {
        const e = T().getters.userToSetAfterWelcome.value;
        if (!e) {
          s.tutorial.usernameStep(), t.value = "USERNAME";
          return
        }
        await T().setters.setTokensWithUser(e.tokenWithUser.user, e.tokenWithUser), s.tutorial.accountCreated({
          username: "auto",
          avatar: !1,
          source: r
        }), o()
      })();
      const m = E(() => {
          var a;
          const e = (a = u.dataUnsafe.user) == null ? void 0 : a.id;
          if (e) return V.getTgAvatarUrl(e)
        }),
        c = async e => {
          t.value = "LOADING";
          const a = await V.authOrCreate({
            query: u.data,
            username: e.username,
            avatarFileKey: e.avatar,
            referralToken: u.dataUnsafe.query.ref
          });
          if (a.err) {
            te().error("Failed to create account"), t.value = "USERNAME";
            return
          }
          await T().setters.setTokensWithUser(a.data.tokenWithUser.user, a.data.tokenWithUser), s.tutorial.accountCreated({
            username: "manual",
            avatar: !!e.avatar,
            source: r
          }), o()
        }, o = () => ne().replace({
          name: "daily-reward"
        });
      return (e, a) => {
        const p = Ie,
          d = le;
        return f(), y("div", Se, [n(t) === "USERNAME" ? (f(), w(p, {
          key: "onboarding",
          "tg-avatar-url": n(m),
          onContinue: a[0] || (a[0] = b => c(b))
        }, null, 8, ["tg-avatar-url"])) : (f(), w(d, {
          key: 1
        }))])
      }
    }
  }),
  Ce = N(Ee, [
    ["__scopeId", "data-v-e0b76d96"]
  ]);
export {
  Ce as _
};