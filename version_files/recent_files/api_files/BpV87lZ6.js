import {
  _ as M
} from "./CkfeCWPE.js";
import {
  d as E,
  j as I,
  G as g,
  o as f,
  c as y,
  b as _,
  U as O,
  a as k,
  J as S,
  e as o,
  z as i,
  B as $,
  C as K,
  p as V,
  bM as C,
  F as D,
  x as L,
  aR as F,
  f as N,
  aq as G,
  ar as h,
  bK as q,
  am as B,
  P as x,
  w as z,
  d5 as H,
  t as Y,
  a3 as J,
  cg as b,
  ab as Z,
  X as R,
  d6 as P,
  y as j,
  V as X,
  d7 as Q,
  ct as ee,
  h as ae,
  Z as te,
  k as w,
  d8 as W,
  g as ne
} from "./Doz8XXSF.js";
import {
  K as oe
} from "./CnC_Nv6s.js";
import {
  a as se
} from "./wwDsqJ_J.js";
import {
  _ as re
} from "./Ca5vGtTs.js";
import {
  _ as le
} from "./Bk2rUrXC.js";
const ue = {
    class: "account-avatar-modal"
  },
  ie = E({
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
        t = I({
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
        a = () => r("avatar:changed", void 0);
      return (e, n) => {
        const p = L,
          d = F,
          T = oe;
        return f(), y(D, null, [_(d, {
          modelValue: o(t),
          "onUpdate:modelValue": n[3] || (n[3] = v => V(t) ? t.value = v : null),
          title: ("t" in e ? e.t : o(i))("welcome.avatar.modal.title")
        }, {
          default: O(() => [k("div", ue, [U.canDelete ? (f(), S(p, {
            key: 0,
            label: ("t" in e ? e.t : o(i))("welcome.avatar.modal.delete"),
            fill: "",
            type: o($).SECONDARY,
            "is-danger": "",
            onClick: n[0] || (n[0] = v => (l(), a()))
          }, null, 8, ["label", "type"])) : K("", !0), _(p, {
            label: ("t" in e ? e.t : o(i))("welcome.avatar.modal.choose"),
            fill: "",
            onClick: n[1] || (n[1] = v => (l(), c()))
          }, null, 8, ["label"]), _(p, {
            label: ("t" in e ? e.t : o(i))("welcome.avatar.modal.cancel"),
            fill: "",
            type: o($).GHOST,
            onClick: n[2] || (n[2] = v => l())
          }, null, 8, ["label", "type"])])]),
          _: 1
        }, 8, ["modelValue", "title"]), _(T, {
          ref_key: "fileUploaderRef",
          ref: m,
          accept: [o(C).JPEG, o(C).PNG],
          "max-file-size-mb": 10,
          "hide-ui": "",
          onUploaded: n[4] || (n[4] = v => e.$emit("avatar:changed", v)),
          "onUpdate:progress": n[5] || (n[5] = v => e.$emit("avatar:progress", v))
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
  ve = E({
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
      const s = h(U, "modelValue"),
        r = u,
        t = g(!1),
        l = g(),
        m = I(() => {
          if (l.value && l.value.status === q.UPLOADING) return l.value.localUrl;
          if (s.value !== void 0) return typeof s.value == "string" ? s.value : s.value.url
        });
      return B(l, c => r("update:lock-by-avatar-uploading", !!c)), (c, a) => {
        const e = M,
          n = ce,
          p = x("activate");
        return f(), y("div", de, [k("div", me, [_(e, {
          "override-avatar-url": o(m),
          onOnImageError: a[0] || (a[0] = d => s.value = void 0)
        }, null, 8, ["override-avatar-url"]), z((f(), y("div", pe, [a[4] || (a[4] = k("img", {
          src: H,
          alt: "Edit icon"
        }, null, -1)), k("span", null, Y(("t" in c ? c.t : o(i))("welcome.avatar.edit")), 1)])), [
          [p, () => t.value = !0]
        ])]), _(n, {
          modelValue: o(t),
          "onUpdate:modelValue": a[1] || (a[1] = d => V(t) ? t.value = d : null),
          "can-delete": !!s.value,
          "onAvatar:changed": a[2] || (a[2] = d => s.value = d),
          "onAvatar:progress": a[3] || (a[3] = d => l.value = d)
        }, null, 8, ["modelValue", "can-delete"])])
      }
    }
  }),
  _e = N(ve, [
    ["__scopeId", "data-v-02d5f2a9"]
  ]),
  fe = E({
    __name: "UsernameInput",
    emits: ["update:username"],
    setup(U, {
      emit: u
    }) {
      const s = u,
        r = g(""),
        t = g("WAITING"),
        l = I(() => {
          switch (t.value) {
            case "WAITING":
              return {
                status: b.REGULAR
              };
            case "SUCCESS":
              return {
                status: b.SUCCESS, caption: i("welcome.username.input.caption.success")
              };
            case "TAKEN":
              return {
                status: b.ERROR, caption: i("welcome.username.input.caption.already_taken")
              };
            case "INVALID":
              return {
                status: b.ERROR, caption: i("welcome.username.input.caption.invalid")
              };
            case "UNKNOWN":
              return {
                status: b.ERROR, caption: i("welcome.username.input.caption.unknown_error")
              };
            default:
              throw t.value, J("Invalid stage")
          }
        }),
        m = async () => {
          const a = r.value;
          if (!a) return;
          const e = await R.checkUsername({
            username: a
          });
          if (e.err) {
            e.message === P.USERNAME_INVALID ? t.value = "INVALID" : e.message === P.USERNAME_TAKEN ? t.value = "TAKEN" : t.value = "UNKNOWN";
            return
          }
          t.value = "SUCCESS", s("update:username", a)
        }, {
          debouncedFunction: c
        } = Z(m, 750);
      return B(r, () => {
        t.value = "WAITING", s("update:username", void 0), c()
      }), (a, e) => {
        const n = se;
        return f(), S(n, {
          modelValue: o(r),
          "onUpdate:modelValue": e[0] || (e[0] = p => V(r) ? r.value = p : null),
          placeholder: ("t" in a ? a.t : o(i))("welcome.username.input.placeholder"),
          label: ("t" in a ? a.t : o(i))("welcome.username.input.label"),
          class: "account-username-input",
          status: o(l).status,
          caption: o(l).caption
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
  be = E({
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
            username: ee(t.value.username, "username"),
            avatar: e
          })
        },
        m = g(!1),
        c = I(() => !!t.value.username && !m.value),
        a = j().internal.isPokrasTheme;
      return (e, n) => {
        const p = _e,
          d = Ue,
          T = L,
          v = re;
        return f(), y("div", ge, [k("div", {
          class: "title",
          innerHTML: ("t" in e ? e.t : o(i))("welcome.title")
        }, null, 8, Ae), o(a) ? (f(), y("img", ke)) : K("", !0), k("div", ye, [_(p, {
          modelValue: o(t).avatar,
          "onUpdate:modelValue": n[0] || (n[0] = A => o(t).avatar = A),
          "onUpdate:lockByAvatarUploading": n[1] || (n[1] = A => m.value = A)
        }, null, 8, ["modelValue"]), _(d, {
          "onUpdate:username": n[2] || (n[2] = A => o(t).username = A)
        })]), _(v, null, {
          default: O(() => [_(T, {
            label: ("t" in e ? e.t : o(i))("base.continue"),
            fill: "",
            size: o(X).LARGE,
            "has-continue-icon": "",
            disabled: !o(c),
            onClick: n[3] || (n[3] = A => l())
          }, null, 8, ["label", "size", "disabled"])]),
          _: 1
        })])
      }
    }
  }),
  Ee = N(be, [
    ["__scopeId", "data-v-4a1c597a"]
  ]),
  Ie = {
    class: "pages-welcome-welcome"
  },
  Ne = E({
    __name: "Welcome",
    setup(U) {
      const u = ae().$webApp,
        s = te(),
        r = u.dataUnsafe.query.tribe ? "tribe" : u.dataUnsafe.query.src === "qr" ? "qr" : u.dataUnsafe.query.ref ? "referral" : "direct",
        t = g("LOADING");
      (async () => {
        const a = w().getters.userToSetAfterWelcome.value;
        if (!a) {
          s.tutorial.usernameStep(), t.value = "USERNAME";
          return
        }
        await w().setters.setTokensWithUser(a.tokenWithUser.user, a.tokenWithUser), s.tutorial.accountCreated({
          username: "auto",
          avatar: !1,
          source: r
        }), W()
      })();
      const m = I(() => {
          var e;
          const a = (e = u.dataUnsafe.user) == null ? void 0 : e.id;
          if (a) return R.getTgAvatarUrl(a)
        }),
        c = async a => {
          t.value = "LOADING";
          const e = await R.authOrCreate({
            query: u.data,
            username: a.username,
            avatarFileKey: a.avatar,
            referralToken: u.dataUnsafe.query.ref
          });
          if (e.err) {
            ne().error("Failed to create account"), t.value = "USERNAME";
            return
          }
          await w().setters.setTokensWithUser(e.data.tokenWithUser.user, e.data.tokenWithUser), s.tutorial.accountCreated({
            username: "manual",
            avatar: !!a.avatar,
            source: r
          }), W()
        };
      return (a, e) => {
        const n = Ee,
          p = le;
        return f(), y("div", Ie, [o(t) === "USERNAME" ? (f(), S(n, {
          key: "onboarding",
          "tg-avatar-url": o(m),
          onContinue: e[0] || (e[0] = d => c(d))
        }, null, 8, ["tg-avatar-url"])) : (f(), S(p, {
          key: 1
        }))])
      }
    }
  }),
  Ce = N(Ne, [
    ["__scopeId", "data-v-9e402937"]
  ]);
export {
  Ce as _
};