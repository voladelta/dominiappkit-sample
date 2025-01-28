var _r = Array.isArray, Vs = Array.prototype.indexOf, xr = Array.from, Do = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, Ao = Object.getOwnPropertyDescriptors, qs = Object.prototype, Ws = Array.prototype, kr = Object.getPrototypeOf;
function zs(e) {
  return typeof e == "function";
}
const pt = () => {
};
function Hs(e) {
  return e();
}
function si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const wt = 2, $o = 4, Ln = 8, _i = 16, Nt = 32, En = 64, ai = 128, cn = 256, li = 512, lt = 1024, Yt = 2048, un = 4096, Pt = 8192, Tn = 16384, Io = 32768, Fn = 65536, Ys = 1 << 17, Gs = 1 << 19, Po = 1 << 20, sn = Symbol("$state"), Js = Symbol("legacy props"), Ks = Symbol("");
function Oo(e) {
  return e === this.v;
}
function Sr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Er(e) {
  return !Sr(e, this.v);
}
function Xs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ea() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ta(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function na() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ra() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function oa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Cn = !1;
function sa() {
  Cn = !0;
}
const Tr = 1, Cr = 2, Mo = 4, aa = 8, la = 16, ca = 1, ua = 2, fa = 4, da = 8, ha = 16, pa = 1, ma = 2, ga = 4, va = 1, ya = 2, dt = Symbol();
function yt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Oo,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ue(e) {
  return /* @__PURE__ */ Ro(yt(e));
}
// @__NO_SIDE_EFFECTS__
function xi(e, t = !1) {
  var i;
  const n = yt(e);
  return t || (n.equals = Er), Cn && Ve !== null && Ve.l !== null && ((i = Ve.l).s ?? (i.s = [])).push(n), n;
}
function ba(e, t = !1) {
  return /* @__PURE__ */ Ro(/* @__PURE__ */ xi(e, t));
}
// @__NO_SIDE_EFFECTS__
function Ro(e) {
  return ze !== null && !qt && ze.f & wt && (Ot === null ? Aa([e]) : Ot.push(e)), e;
}
function Y(e, t) {
  return ze !== null && !qt && qn() && ze.f & (wt | _i) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ot === null || !Ot.includes(e)) && oa(), ar(e, t);
}
function ar(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ts(), Uo(e, Yt), qn() && Le !== null && Le.f & lt && !(Le.f & (Nt | En)) && (Lt === null ? $a([e]) : Lt.push(e))), t;
}
function Uo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = qn(), r = n.length, o = 0; o < r; o++) {
      var s = n[o], u = s.f;
      u & Yt || !i && s === Le || (Et(s, t), u & (lt | cn) && (u & wt ? Uo(
        /** @type {Derived} */
        s,
        un
      ) : Di(
        /** @type {Effect} */
        s
      )));
    }
}
let No = !1;
function _e(e, t = null, n) {
  if (typeof e != "object" || e === null || sn in e)
    return e;
  const i = kr(e);
  if (i !== qs && i !== Ws)
    return e;
  var r = /* @__PURE__ */ new Map(), o = _r(e), s = yt(0);
  o && r.set("length", yt(
    /** @type {any[]} */
    e.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, a, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && na();
        var f = r.get(a);
        return f === void 0 ? (f = yt(h.value), r.set(a, f)) : Y(f, _e(h.value, u)), !0;
      },
      deleteProperty(d, a) {
        var h = r.get(a);
        if (h === void 0)
          a in d && r.set(a, yt(dt));
        else {
          if (o && typeof a == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(a);
            Number.isInteger(m) && m < f.v && Y(f, m);
          }
          Y(h, dt), Wr(s);
        }
        return !0;
      },
      get(d, a, h) {
        var x;
        if (a === sn)
          return e;
        var f = r.get(a), m = a in d;
        if (f === void 0 && (!m || (x = vn(d, a)) != null && x.writable) && (f = yt(_e(m ? d[a] : dt, u)), r.set(a, f)), f !== void 0) {
          var g = k(f);
          return g === dt ? void 0 : g;
        }
        return Reflect.get(d, a, h);
      },
      getOwnPropertyDescriptor(d, a) {
        var h = Reflect.getOwnPropertyDescriptor(d, a);
        if (h && "value" in h) {
          var f = r.get(a);
          f && (h.value = k(f));
        } else if (h === void 0) {
          var m = r.get(a), g = m == null ? void 0 : m.v;
          if (m !== void 0 && g !== dt)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return h;
      },
      has(d, a) {
        var g;
        if (a === sn)
          return !0;
        var h = r.get(a), f = h !== void 0 && h.v !== dt || Reflect.has(d, a);
        if (h !== void 0 || Le !== null && (!f || (g = vn(d, a)) != null && g.writable)) {
          h === void 0 && (h = yt(f ? _e(d[a], u) : dt), r.set(a, h));
          var m = k(h);
          if (m === dt)
            return !1;
        }
        return f;
      },
      set(d, a, h, f) {
        var U;
        var m = r.get(a), g = a in d;
        if (o && a === "length")
          for (var x = h; x < /** @type {Source<number>} */
          m.v; x += 1) {
            var E = r.get(x + "");
            E !== void 0 ? Y(E, dt) : x in d && (E = yt(dt), r.set(x + "", E));
          }
        m === void 0 ? (!g || (U = vn(d, a)) != null && U.writable) && (m = yt(void 0), Y(m, _e(h, u)), r.set(a, m)) : (g = m.v !== dt, Y(m, _e(h, u)));
        var L = Reflect.getOwnPropertyDescriptor(d, a);
        if (L != null && L.set && L.set.call(f, h), !g) {
          if (o && typeof a == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), X = Number(a);
            Number.isInteger(X) && X >= q.v && Y(q, X + 1);
          }
          Wr(s);
        }
        return !0;
      },
      ownKeys(d) {
        k(s);
        var a = Reflect.ownKeys(d).filter((m) => {
          var g = r.get(m);
          return g === void 0 || g.v !== dt;
        });
        for (var [h, f] of r)
          f.v !== dt && !(h in d) && a.push(h);
        return a;
      },
      setPrototypeOf() {
        ia();
      }
    }
  );
}
function Wr(e, t = 1) {
  Y(e, e.v + t);
}
var zr, jo, Bo;
function wa() {
  if (zr === void 0) {
    zr = window;
    var e = Element.prototype, t = Node.prototype;
    jo = vn(t, "firstChild").get, Bo = vn(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Dr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  return jo.call(e);
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  return Bo.call(e);
}
function te(e, t) {
  return /* @__PURE__ */ ci(e);
}
function St(e, t) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ci(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ki(n) : n;
  }
}
function he(e, t = 1, n = !1) {
  let i = e;
  for (; t--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ ki(i);
  return i;
}
function _a(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  var t = wt | Yt;
  Le === null ? t |= cn : Le.f |= Po;
  var n = ze !== null && ze.f & wt ? (
    /** @type {Derived} */
    ze
  ) : null;
  const i = {
    children: null,
    ctx: Ve,
    deps: null,
    equals: Oo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Le
  };
  return n !== null && (n.children ?? (n.children = [])).push(i), i;
}
// @__NO_SIDE_EFFECTS__
function ui(e) {
  const t = /* @__PURE__ */ Mn(e);
  return t.equals = Er, t;
}
function Lo(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var n = 0; n < t.length; n += 1) {
      var i = t[n];
      i.f & wt ? Ar(
        /** @type {Derived} */
        i
      ) : Wt(
        /** @type {Effect} */
        i
      );
    }
  }
}
function xa(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & wt))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Fo(e) {
  var t, n = Le;
  _t(xa(e));
  try {
    Lo(e), t = is(e);
  } finally {
    _t(n);
  }
  return t;
}
function Vo(e) {
  var t = Fo(e), n = (rn || e.f & cn) && e.deps !== null ? un : lt;
  Et(e, n), e.equals(t) || (e.v = t, e.wv = ts());
}
function Ar(e) {
  Lo(e), Nn(e, 0), Et(e, Tn), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function qo(e) {
  Le === null && ze === null && Zs(), ze !== null && ze.f & cn && Qs(), Ir && Xs();
}
function ka(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Dn(e, t, n, i = !0) {
  var r = (e & En) !== 0, o = Le, s = {
    ctx: Ve,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Yt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n) {
    var u = yn;
    try {
      Hr(!0), Pr(s), s.f |= Io;
    } catch (h) {
      throw Wt(s), h;
    } finally {
      Hr(u);
    }
  } else t !== null && Di(s);
  var d = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Po | ai)) === 0;
  if (!d && !r && i && (o !== null && ka(s, o), ze !== null && ze.f & wt)) {
    var a = (
      /** @type {Derived} */
      ze
    );
    (a.children ?? (a.children = [])).push(s);
  }
  return s;
}
function Wo(e) {
  const t = Dn(Ln, null, !1);
  return Et(t, lt), t.teardown = e, t;
}
function fi(e) {
  qo();
  var t = Le !== null && (Le.f & Nt) !== 0 && Ve !== null && !Ve.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ve
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Le,
      reaction: ze
    });
  } else {
    var i = Vn(e);
    return i;
  }
}
function Sa(e) {
  return qo(), Si(e);
}
function Ea(e) {
  const t = Dn(En, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? di(t, () => {
      Wt(t), i(void 0);
    }) : (Wt(t), i(void 0));
  });
}
function Vn(e) {
  return Dn($o, e, !1);
}
function Si(e) {
  return Dn(Ln, e, !0);
}
function Je(e, t = [], n = Mn) {
  const i = t.map(n);
  return Ei(() => e(...i.map(k)));
}
function Ei(e, t = 0) {
  return Dn(Ln | _i | t, e, !0);
}
function _n(e, t = !0) {
  return Dn(Ln | Nt, e, !0, t);
}
function zo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ir, i = ze;
    Yr(!0), Rt(null);
    try {
      t.call(null);
    } finally {
      Yr(n), Rt(i);
    }
  }
}
function Ho(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var n = 0; n < t.length; n += 1)
      Ar(t[n]);
  }
}
function Yo(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var i = n.next;
    Wt(n, t), n = i;
  }
}
function Ta(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Nt || Wt(t), t = n;
  }
}
function Wt(e, t = !0) {
  var n = !1;
  if ((t || e.f & Gs) && e.nodes_start !== null) {
    for (var i = e.nodes_start, r = e.nodes_end; i !== null; ) {
      var o = i === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ki(i)
      );
      i.remove(), i = o;
    }
    n = !0;
  }
  Yo(e, t && !n), Ho(e), Nn(e, 0), Et(e, Tn);
  var s = e.transitions;
  if (s !== null)
    for (const d of s)
      d.stop();
  zo(e);
  var u = e.parent;
  u !== null && u.first !== null && Go(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Go(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function di(e, t) {
  var n = [];
  $r(e, n, !0), Jo(n, () => {
    Wt(e), t && t();
  });
}
function Jo(e, t) {
  var n = e.length;
  if (n > 0) {
    var i = () => --n || t();
    for (var r of e)
      r.out(i);
  } else
    t();
}
function $r(e, t, n) {
  if (!(e.f & Pt)) {
    if (e.f ^= Pt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var r = i.next, o = (i.f & Fn) !== 0 || (i.f & Nt) !== 0;
      $r(i, t, o ? n : !1), i = r;
    }
  }
}
function hi(e) {
  Ko(e, !0);
}
function Ko(e, t) {
  if (e.f & Pt) {
    e.f ^= Pt, e.f & lt || (e.f ^= lt), Wn(e) && (Et(e, Yt), Di(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, r = (n.f & Fn) !== 0 || (n.f & Nt) !== 0;
      Ko(n, r ? t : !1), n = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
let pi = !1, lr = [];
function Xo() {
  pi = !1;
  const e = lr.slice();
  lr = [], si(e);
}
function Ti(e) {
  pi || (pi = !0, queueMicrotask(Xo)), lr.push(e);
}
function Ca() {
  pi && Xo();
}
function Qo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Zo = 0, Da = 1;
let ti = !1, ni = Zo, Rn = !1, Un = null, yn = !1, Ir = !1;
function Hr(e) {
  yn = e;
}
function Yr(e) {
  Ir = e;
}
let nn = [], bn = 0;
let ze = null, qt = !1;
function Rt(e) {
  ze = e;
}
let Le = null;
function _t(e) {
  Le = e;
}
let Ot = null;
function Aa(e) {
  Ot = e;
}
let ht = null, vt = 0, Lt = null;
function $a(e) {
  Lt = e;
}
let es = 1, mi = 0, rn = !1, Ve = null;
function ts() {
  return ++es;
}
function qn() {
  return !Cn || Ve !== null && Ve.l === null;
}
function Wn(e) {
  var a;
  var t = e.f;
  if (t & Yt)
    return !0;
  if (t & un) {
    var n = e.deps, i = (t & cn) !== 0;
    if (n !== null) {
      var r, o, s = (t & li) !== 0, u = i && Le !== null && !rn, d = n.length;
      if (s || u) {
        for (r = 0; r < d; r++)
          o = n[r], (s || !((a = o == null ? void 0 : o.reactions) != null && a.includes(e))) && (o.reactions ?? (o.reactions = [])).push(e);
        s && (e.f ^= li);
      }
      for (r = 0; r < d; r++)
        if (o = n[r], Wn(
          /** @type {Derived} */
          o
        ) && Vo(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || Le !== null && !rn) && Et(e, lt);
  }
  return !1;
}
function Ia(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ai)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ai;
      }
    n = n.parent;
  }
  throw ti = !1, e;
}
function Pa(e) {
  return (e.f & Tn) === 0 && (e.parent === null || (e.parent.f & ai) === 0);
}
function Ci(e, t, n, i) {
  if (ti) {
    if (n === null && (ti = !1), Pa(t))
      throw e;
    return;
  }
  n !== null && (ti = !0);
  {
    Ia(e, t);
    return;
  }
}
function ns(e, t, n = 0) {
  var i = e.reactions;
  if (i !== null)
    for (var r = 0; r < i.length; r++) {
      var o = i[r];
      o.f & wt ? ns(
        /** @type {Derived} */
        o,
        t,
        n + 1
      ) : t === o && (n === 0 ? Et(o, Yt) : o.f & lt && Et(o, un), Di(
        /** @type {Effect} */
        o
      ));
    }
}
function is(e) {
  var g;
  var t = ht, n = vt, i = Lt, r = ze, o = rn, s = Ot, u = Ve, d = qt, a = e.f;
  ht = /** @type {null | Value[]} */
  null, vt = 0, Lt = null, ze = a & (Nt | En) ? null : e, rn = !yn && (a & cn) !== 0, Ot = null, Ve = e.ctx, qt = !1, mi++;
  try {
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (ht !== null) {
      var m;
      if (Nn(e, vt), f !== null && vt > 0)
        for (f.length = vt + ht.length, m = 0; m < ht.length; m++)
          f[vt + m] = ht[m];
      else
        e.deps = f = ht;
      if (!rn)
        for (m = vt; m < f.length; m++)
          ((g = f[m]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && vt < f.length && (Nn(e, vt), f.length = vt);
    if (qn() && Lt !== null && !(e.f & (wt | un | Yt)))
      for (m = 0; m < /** @type {Source[]} */
      Lt.length; m++)
        ns(
          Lt[m],
          /** @type {Effect} */
          e
        );
    return r !== null && mi++, h;
  } finally {
    ht = t, vt = n, Lt = i, ze = r, rn = o, Ot = s, Ve = u, qt = d;
  }
}
function Oa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = Vs.call(n, e);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && t.f & wt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ht === null || !ht.includes(t)) && (Et(t, un), t.f & (cn | li) || (t.f ^= li), Nn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Nn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      Oa(e, n[i]);
}
function Pr(e) {
  var t = e.f;
  if (!(t & Tn)) {
    Et(e, lt);
    var n = Le, i = Ve;
    Le = e;
    try {
      t & _i ? Ta(e) : Yo(e), Ho(e), zo(e);
      var r = is(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = es;
      var o = e.deps, s;
    } catch (u) {
      Ci(u, e, n, i || e.ctx);
    } finally {
      Le = n;
    }
  }
}
function rs() {
  if (bn > 1e3) {
    bn = 0;
    try {
      ea();
    } catch (e) {
      if (Un !== null)
        Ci(e, Un, null);
      else
        throw e;
    }
  }
  bn++;
}
function os(e) {
  var t = e.length;
  if (t !== 0) {
    rs();
    var n = yn;
    yn = !0;
    try {
      for (var i = 0; i < t; i++) {
        var r = e[i];
        r.f & lt || (r.f ^= lt);
        var o = [];
        ss(r, o), Ma(o);
      }
    } finally {
      yn = n;
    }
  }
}
function Ma(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var i = e[n];
      if (!(i.f & (Tn | Pt)))
        try {
          Wn(i) && (Pr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Go(i) : i.fn = null));
        } catch (r) {
          Ci(r, i, null, i.ctx);
        }
    }
}
function Ra() {
  if (Rn = !1, bn > 1001)
    return;
  const e = nn;
  nn = [], os(e), Rn || (bn = 0, Un = null);
}
function Di(e) {
  ni === Zo && (Rn || (Rn = !0, queueMicrotask(Ra))), Un = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (En | Nt)) {
      if (!(n & lt)) return;
      t.f ^= lt;
    }
  }
  nn.push(t);
}
function ss(e, t) {
  var n = e.first, i = [];
  e: for (; n !== null; ) {
    var r = n.f, o = (r & Nt) !== 0, s = o && (r & lt) !== 0, u = n.next;
    if (!s && !(r & Pt))
      if (r & Ln) {
        if (o)
          n.f ^= lt;
        else
          try {
            Wn(n) && Pr(n);
          } catch (f) {
            Ci(f, n, null, n.ctx);
          }
        var d = n.first;
        if (d !== null) {
          n = d;
          continue;
        }
      } else r & $o && i.push(n);
    if (u === null) {
      let f = n.parent;
      for (; f !== null; ) {
        if (e === f)
          break e;
        var a = f.next;
        if (a !== null) {
          n = a;
          continue e;
        }
        f = f.parent;
      }
    }
    n = u;
  }
  for (var h = 0; h < i.length; h++)
    d = i[h], t.push(d), ss(d, t);
}
function as(e) {
  var t = ni, n = nn;
  try {
    rs();
    const r = [];
    ni = Da, nn = r, Rn = !1, os(n);
    var i = e == null ? void 0 : e();
    return Ca(), (nn.length > 0 || r.length > 0) && as(), bn = 0, Un = null, i;
  } finally {
    ni = t, nn = n;
  }
}
async function Ua() {
  await Promise.resolve(), as();
}
function k(e) {
  var h;
  var t = e.f, n = (t & wt) !== 0;
  if (n && t & Tn) {
    var i = Fo(
      /** @type {Derived} */
      e
    );
    return Ar(
      /** @type {Derived} */
      e
    ), i;
  }
  if (ze !== null && !qt) {
    Ot !== null && Ot.includes(e) && ra();
    var r = ze.deps;
    e.rv < mi && (e.rv = mi, ht === null && r !== null && r[vt] === e ? vt++ : ht === null ? ht = [e] : ht.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null)
    for (var o = (
      /** @type {Derived} */
      e
    ), s = o.parent, u = o; s !== null; )
      if (s.f & wt) {
        var d = (
          /** @type {Derived} */
          s
        );
        u = d, s = d.parent;
      } else {
        var a = (
          /** @type {Effect} */
          s
        );
        (h = a.deriveds) != null && h.includes(u) || (a.deriveds ?? (a.deriveds = [])).push(u);
        break;
      }
  return n && (o = /** @type {Derived} */
  e, Wn(o) && Vo(o)), e.v;
}
function zt(e) {
  var t = qt;
  try {
    return qt = !0, e();
  } finally {
    qt = t;
  }
}
const Na = ~(Yt | un | lt);
function Et(e, t) {
  e.f = e.f & Na | t;
}
function ja(e) {
  return (
    /** @type {T} */
    ls().get(e)
  );
}
function Ba(e, t) {
  return ls().set(e, t), t;
}
function ls(e) {
  return Ve === null && Qo(), Ve.c ?? (Ve.c = new Map(La(Ve) || void 0));
}
function La(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Gt(e, t = !1, n) {
  Ve = {
    p: Ve,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Cn && !t && (Ve.l = {
    s: null,
    u: null,
    r1: [],
    r2: yt(!1)
  });
}
function Jt(e) {
  const t = Ve;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Le, i = ze;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var o = s[r];
          _t(o.effect), Rt(o.reaction), Vn(o.fn);
        }
      } finally {
        _t(n), Rt(i);
      }
    }
    Ve = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function cs(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (sn in e)
      cr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && sn in n && cr(n);
      }
  }
}
function cr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let i in e)
      try {
        cr(e[i], t);
      } catch {
      }
    const n = kr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const i = Ao(n);
      for (let r in i) {
        const o = i[r].get;
        if (o)
          try {
            o.call(e);
          } catch {
          }
      }
    }
  }
}
const Fa = ["touchstart", "touchmove"];
function Va(e) {
  return Fa.includes(e);
}
let Gr = !1;
function qa() {
  Gr || (Gr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function us(e) {
  var t = ze, n = Le;
  Rt(null), _t(null);
  try {
    return e();
  } finally {
    Rt(t), _t(n);
  }
}
function Wa(e, t, n, i = n) {
  e.addEventListener(t, () => us(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), i(!0);
  } : e.__on_r = () => i(!0), qa();
}
const fs = /* @__PURE__ */ new Set(), ur = /* @__PURE__ */ new Set();
function za(e, t, n, i = {}) {
  function r(o) {
    if (i.capture || Pn.call(t, o), !o.cancelBubble)
      return us(() => n == null ? void 0 : n.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ti(() => {
    t.addEventListener(e, r, i);
  }) : t.addEventListener(e, r, i), r;
}
function Ha(e, t, n, i, r) {
  var o = { capture: i, passive: r }, s = za(e, t, n, o);
  (t === document.body || t === window || t === document) && Wo(() => {
    t.removeEventListener(e, s, o);
  });
}
function zn(e) {
  for (var t = 0; t < e.length; t++)
    fs.add(e[t]);
  for (var n of ur)
    n(e);
}
function Pn(e) {
  var X;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = ((X = e.composedPath) == null ? void 0 : X.call(e)) || [], o = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, u = e.__root;
  if (u) {
    var d = r.indexOf(u);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var a = r.indexOf(t);
    if (a === -1)
      return;
    d <= a && (s = d);
  }
  if (o = /** @type {Element} */
  r[s] || e.target, o !== t) {
    Do(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var h = ze, f = Le;
    Rt(null), _t(null);
    try {
      for (var m, g = []; o !== null; ) {
        var x = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var E = o["__" + i];
          if (E !== void 0 && !/** @type {any} */
          o.disabled)
            if (_r(E)) {
              var [L, ...q] = E;
              L.apply(o, [e, ...q]);
            } else
              E.call(o, e);
        } catch (U) {
          m ? g.push(U) : m = U;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        o = x;
      }
      if (m) {
        for (let U of g)
          queueMicrotask(() => {
            throw U;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Rt(h), _t(f);
    }
  }
}
function Ya(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function fr(e, t) {
  var n = (
    /** @type {Effect} */
    Le
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  var n = (t & va) !== 0, i = (t & ya) !== 0, r, o = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Ya(o ? e : "<!>" + e), n || (r = /** @type {Node} */
    /* @__PURE__ */ ci(r)));
    var s = (
      /** @type {TemplateNode} */
      i ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ci(s)
      ), d = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      fr(u, d);
    } else
      fr(s, s);
    return s;
  };
}
function Or() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dr();
  return e.append(t, n), fr(t, n), e;
}
function Ae(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let dr = !0;
function je(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n == null ? "" : n + "");
}
function Ga(e, t) {
  return Ja(e, t);
}
const pn = /* @__PURE__ */ new Map();
function Ja(e, { target: t, anchor: n, props: i = {}, events: r, context: o, intro: s = !0 }) {
  wa();
  var u = /* @__PURE__ */ new Set(), d = (f) => {
    for (var m = 0; m < f.length; m++) {
      var g = f[m];
      if (!u.has(g)) {
        u.add(g);
        var x = Va(g);
        t.addEventListener(g, Pn, { passive: x });
        var E = pn.get(g);
        E === void 0 ? (document.addEventListener(g, Pn, { passive: x }), pn.set(g, 1)) : pn.set(g, E + 1);
      }
    }
  };
  d(xr(fs)), ur.add(d);
  var a = void 0, h = Ea(() => {
    var f = n ?? t.appendChild(Dr());
    return _n(() => {
      if (o) {
        Gt({});
        var m = (
          /** @type {ComponentContext} */
          Ve
        );
        m.c = o;
      }
      r && (i.$$events = r), dr = s, a = e(f, i) || {}, dr = !0, o && Jt();
    }), () => {
      var x;
      for (var m of u) {
        t.removeEventListener(m, Pn);
        var g = (
          /** @type {number} */
          pn.get(m)
        );
        --g === 0 ? (document.removeEventListener(m, Pn), pn.delete(m)) : pn.set(m, g);
      }
      ur.delete(d), f !== n && ((x = f.parentNode) == null || x.removeChild(f));
    };
  });
  return Ka.set(a, h), a;
}
let Ka = /* @__PURE__ */ new WeakMap();
function at(e, t, n = !1) {
  var i = e, r = null, o = null, s = dt, u = n ? Fn : 0, d = !1;
  const a = (f, m = !0) => {
    d = !0, h(m, f);
  }, h = (f, m) => {
    s !== (s = f) && (s ? (r ? hi(r) : m && (r = _n(() => m(i))), o && di(o, () => {
      o = null;
    })) : (o ? hi(o) : m && (o = _n(() => m(i))), r && di(r, () => {
      r = null;
    })));
  };
  Ei(() => {
    d = !1, t(a), d || h(null, null);
  }, u);
}
function ds(e, t) {
  return t;
}
function Xa(e, t, n, i) {
  for (var r = [], o = t.length, s = 0; s < o; s++)
    $r(t[s].e, r, !0);
  var u = o > 0 && r.length === 0 && n !== null;
  if (u) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    _a(d), d.append(
      /** @type {Element} */
      n
    ), i.clear(), Zt(e, t[0].prev, t[o - 1].next);
  }
  Jo(r, () => {
    for (var a = 0; a < o; a++) {
      var h = t[a];
      u || (i.delete(h.k), Zt(e, h.prev, h.next)), Wt(h.e, !u);
    }
  });
}
function Mr(e, t, n, i, r, o = null) {
  var s = e, u = { items: /* @__PURE__ */ new Map(), first: null }, d = (t & Mo) !== 0;
  if (d) {
    var a = (
      /** @type {Element} */
      e
    );
    s = a.appendChild(Dr());
  }
  var h = null, f = !1, m = /* @__PURE__ */ ui(() => {
    var g = n();
    return _r(g) ? g : g == null ? [] : xr(g);
  });
  Ei(() => {
    var g = k(m), x = g.length;
    if (!(f && x === 0)) {
      f = x === 0;
      {
        var E = (
          /** @type {Effect} */
          ze
        );
        Qa(
          g,
          u,
          s,
          r,
          t,
          (E.f & Pt) !== 0,
          i,
          n
        );
      }
      o !== null && (x === 0 ? h ? hi(h) : h = _n(() => o(s)) : h !== null && di(h, () => {
        h = null;
      })), k(m);
    }
  });
}
function Qa(e, t, n, i, r, o, s, u) {
  var H, N, j, W;
  var d = (r & aa) !== 0, a = (r & (Tr | Cr)) !== 0, h = e.length, f = t.items, m = t.first, g = m, x, E = null, L, q = [], X = [], U, Q, G, ee;
  if (d)
    for (ee = 0; ee < h; ee += 1)
      U = e[ee], Q = s(U, ee), G = f.get(Q), G !== void 0 && ((H = G.a) == null || H.measure(), (L ?? (L = /* @__PURE__ */ new Set())).add(G));
  for (ee = 0; ee < h; ee += 1) {
    if (U = e[ee], Q = s(U, ee), G = f.get(Q), G === void 0) {
      var Ee = g ? (
        /** @type {TemplateNode} */
        g.e.nodes_start
      ) : n;
      E = el(
        Ee,
        t,
        E,
        E === null ? t.first : E.next,
        U,
        Q,
        ee,
        i,
        r,
        u
      ), f.set(Q, E), q = [], X = [], g = E.next;
      continue;
    }
    if (a && Za(G, U, ee, r), G.e.f & Pt && (hi(G.e), d && ((N = G.a) == null || N.unfix(), (L ?? (L = /* @__PURE__ */ new Set())).delete(G))), G !== g) {
      if (x !== void 0 && x.has(G)) {
        if (q.length < X.length) {
          var Z = X[0], D;
          E = Z.prev;
          var ve = q[0], ne = q[q.length - 1];
          for (D = 0; D < q.length; D += 1)
            Jr(q[D], Z, n);
          for (D = 0; D < X.length; D += 1)
            x.delete(X[D]);
          Zt(t, ve.prev, ne.next), Zt(t, E, ve), Zt(t, ne, Z), g = Z, E = ne, ee -= 1, q = [], X = [];
        } else
          x.delete(G), Jr(G, g, n), Zt(t, G.prev, G.next), Zt(t, G, E === null ? t.first : E.next), Zt(t, E, G), E = G;
        continue;
      }
      for (q = [], X = []; g !== null && g.k !== Q; )
        (o || !(g.e.f & Pt)) && (x ?? (x = /* @__PURE__ */ new Set())).add(g), X.push(g), g = g.next;
      if (g === null)
        continue;
      G = g;
    }
    q.push(G), E = G, g = G.next;
  }
  if (g !== null || x !== void 0) {
    for (var be = x === void 0 ? [] : xr(x); g !== null; )
      (o || !(g.e.f & Pt)) && be.push(g), g = g.next;
    var Se = be.length;
    if (Se > 0) {
      var K = r & Mo && h === 0 ? n : null;
      if (d) {
        for (ee = 0; ee < Se; ee += 1)
          (j = be[ee].a) == null || j.measure();
        for (ee = 0; ee < Se; ee += 1)
          (W = be[ee].a) == null || W.fix();
      }
      Xa(t, be, K, f);
    }
  }
  d && Ti(() => {
    var ce;
    if (L !== void 0)
      for (G of L)
        (ce = G.a) == null || ce.apply();
  }), Le.first = t.first && t.first.e, Le.last = E && E.e;
}
function Za(e, t, n, i) {
  i & Tr && ar(e.v, t), i & Cr ? ar(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function el(e, t, n, i, r, o, s, u, d, a) {
  var h = (d & Tr) !== 0, f = (d & la) === 0, m = h ? f ? /* @__PURE__ */ xi(r) : yt(r) : r, g = d & Cr ? yt(s) : s, x = {
    i: g,
    v: m,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: i
  };
  try {
    return x.e = _n(() => u(e, m, g, a), No), x.e.prev = n && n.e, x.e.next = i && i.e, n === null ? t.first = x : (n.next = x, n.e.next = x.e), i !== null && (i.prev = x, i.e.prev = x.e), x;
  } finally {
  }
}
function Jr(e, t, n) {
  for (var i = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, o = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); o !== i; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ki(o)
    );
    r.before(o), o = s;
  }
}
function Zt(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Kr(e, t, ...n) {
  var i = e, r = pt, o;
  Ei(() => {
    r !== (r = t()) && (o && (Wt(o), o = null), o = _n(() => (
      /** @type {SnippetFn} */
      r(i, ...n)
    )));
  }, Fn);
}
function tl(e, t, n) {
  Vn(() => {
    var i = zt(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (i != null && i.update)) {
      var r = !1, o = (
        /** @type {any} */
        {}
      );
      Si(() => {
        var s = n();
        cs(s), r && Sr(o, s) && (o = s, i.update(s));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function hs(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = hs(e[t])) && (i && (i += " "), i += n);
  } else for (n in e) e[n] && (i && (i += " "), i += n);
  return i;
}
function nl() {
  for (var e, t, n = 0, i = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = hs(e)) && (i && (i += " "), i += t);
  return i;
}
function gi(e) {
  return typeof e == "object" ? nl(e) : e ?? "";
}
function Hi(e, t, n, i) {
  var r = e.__attributes ?? (e.__attributes = {});
  r[t] !== (r[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ks] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && il(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var Xr = /* @__PURE__ */ new Map();
function il(e) {
  var t = Xr.get(e.nodeName);
  if (t) return t;
  Xr.set(e.nodeName, t = []);
  for (var n, i = e, r = Element.prototype; r !== i; ) {
    n = Ao(i);
    for (var o in n)
      n[o].set && t.push(o);
    i = kr(i);
  }
  return t;
}
function vi(e, t, n) {
  var i = e.__className, r = rl(t, n);
  (i !== r || No) && (t == null && !n ? e.removeAttribute("class") : e.className = r, e.__className = r);
}
function rl(e, t) {
  return (e ?? "") + (t ? " " + t : "");
}
function st(e, t, n) {
  if (n) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
const ol = () => performance.now(), Ft = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => ol(),
  tasks: /* @__PURE__ */ new Set()
};
function ps() {
  const e = Ft.now();
  Ft.tasks.forEach((t) => {
    t.c(e) || (Ft.tasks.delete(t), t.f());
  }), Ft.tasks.size !== 0 && Ft.tick(ps);
}
function sl(e) {
  let t;
  return Ft.tasks.size === 0 && Ft.tick(ps), {
    promise: new Promise((n) => {
      Ft.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      Ft.tasks.delete(t);
    }
  };
}
function Qn(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function al(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Qr(e) {
  const t = {}, n = e.split(";");
  for (const i of n) {
    const [r, o] = i.split(":");
    if (!r || o === void 0) break;
    const s = al(r.trim());
    t[s] = o.trim();
  }
  return t;
}
const ll = (e) => e;
function Vt(e, t, n, i) {
  var r = (e & pa) !== 0, o = (e & ma) !== 0, s = r && o, u = (e & ga) !== 0, d = s ? "both" : r ? "in" : "out", a, h = t.inert, f = t.style.overflow, m, g;
  function x() {
    var U = ze, Q = Le;
    Rt(null), _t(null);
    try {
      return a ?? (a = n()(t, (i == null ? void 0 : i()) ?? /** @type {P} */
      {}, {
        direction: d
      }));
    } finally {
      Rt(U), _t(Q);
    }
  }
  var E = {
    is_global: u,
    in() {
      var U;
      if (t.inert = h, !r) {
        g == null || g.abort(), (U = g == null ? void 0 : g.reset) == null || U.call(g);
        return;
      }
      o || m == null || m.abort(), Qn(t, "introstart"), m = hr(t, x(), g, 1, () => {
        Qn(t, "introend"), m == null || m.abort(), m = a = void 0, t.style.overflow = f;
      });
    },
    out(U) {
      if (!o) {
        U == null || U(), a = void 0;
        return;
      }
      t.inert = !0, Qn(t, "outrostart"), g = hr(t, x(), m, 0, () => {
        Qn(t, "outroend"), U == null || U();
      });
    },
    stop: () => {
      m == null || m.abort(), g == null || g.abort();
    }
  }, L = (
    /** @type {Effect} */
    Le
  );
  if ((L.transitions ?? (L.transitions = [])).push(E), r && dr) {
    var q = u;
    if (!q) {
      for (var X = (
        /** @type {Effect | null} */
        L.parent
      ); X && X.f & Fn; )
        for (; (X = X.parent) && !(X.f & _i); )
          ;
      q = !X || (X.f & Io) !== 0;
    }
    q && Vn(() => {
      zt(() => E.in());
    });
  }
}
function hr(e, t, n, i, r) {
  var o = i === 1;
  if (zs(t)) {
    var s, u = !1;
    return Ti(() => {
      if (!u) {
        var L = t({ direction: o ? "in" : "out" });
        s = hr(e, L, n, i, r);
      }
    }), {
      abort: () => {
        u = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(t != null && t.duration))
    return r(), {
      abort: pt,
      deactivate: pt,
      reset: pt,
      t: () => i
    };
  const { delay: d = 0, css: a, tick: h, easing: f = ll } = t;
  var m = [];
  if (o && n === void 0 && (h && h(0, 1), a)) {
    var g = Qr(a(0, 1));
    m.push(g, g);
  }
  var x = () => 1 - i, E = e.animate(m, { duration: d });
  return E.onfinish = () => {
    var L = (n == null ? void 0 : n.t()) ?? 1 - i;
    n == null || n.abort();
    var q = i - L, X = (
      /** @type {number} */
      t.duration * Math.abs(q)
    ), U = [];
    if (X > 0) {
      var Q = !1;
      if (a)
        for (var G = Math.ceil(X / 16.666666666666668), ee = 0; ee <= G; ee += 1) {
          var Ee = L + q * f(ee / G), Z = Qr(a(Ee, 1 - Ee));
          U.push(Z), Q || (Q = Z.overflow === "hidden");
        }
      Q && (e.style.overflow = "hidden"), x = () => {
        var D = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          E.currentTime
        );
        return L + q * f(D / X);
      }, h && sl(() => {
        if (E.playState !== "running") return !1;
        var D = x();
        return h(D, 1 - D), !0;
      });
    }
    E = e.animate(U, { duration: X, fill: "forwards" }), E.onfinish = () => {
      x = () => i, h == null || h(i, 1 - i), r();
    };
  }, {
    abort: () => {
      E && (E.cancel(), E.effect = null, E.onfinish = pt);
    },
    deactivate: () => {
      r = pt;
    },
    reset: () => {
      i === 0 && (h == null || h(1, 0));
    },
    t: () => x()
  };
}
function Zr(e, t, n = t) {
  var i = qn();
  Wa(e, "input", (r) => {
    var o = r ? e.defaultValue : e.value;
    if (o = Yi(e) ? Gi(o) : o, n(o), i && o !== (o = t())) {
      var s = e.selectionStart, u = e.selectionEnd;
      e.value = o ?? "", u !== null && (e.selectionStart = s, e.selectionEnd = Math.min(u, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zt(t) == null && e.value && n(Yi(e) ? Gi(e.value) : e.value), Si(() => {
    var r = t();
    Yi(e) && r === Gi(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Yi(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Gi(e) {
  return e === "" ? null : +e;
}
function eo(e, t) {
  return e === t || (e == null ? void 0 : e[sn]) === t;
}
function ln(e = {}, t, n, i) {
  return Vn(() => {
    var r, o;
    return Si(() => {
      r = o, o = [], zt(() => {
        e !== n(...o) && (t(e, ...o), r && eo(n(...r), e) && t(null, ...r));
      });
    }), () => {
      Ti(() => {
        o && eo(n(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function ms(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ve
  ), n = t.l.u;
  if (!n) return;
  let i = () => cs(t.s);
  if (e) {
    let r = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Mn(() => {
      let u = !1;
      const d = t.s;
      for (const a in d)
        d[a] !== o[a] && (o[a] = d[a], u = !0);
      return u && r++, r;
    });
    i = () => k(s);
  }
  n.b.length && Sa(() => {
    to(t, i), si(n.b);
  }), fi(() => {
    const r = zt(() => n.m.map(Hs));
    return () => {
      for (const o of r)
        typeof o == "function" && o();
    };
  }), n.a.length && fi(() => {
    to(t, i), si(n.a);
  });
}
function to(e, t) {
  if (e.l.s)
    for (const n of e.l.s) k(n);
  t();
}
function Rr(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), pt;
  const i = zt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const mn = [];
function cl(e, t) {
  return {
    subscribe: gs(e, t).subscribe
  };
}
function gs(e, t = pt) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (Sr(e, u) && (e = u, n)) {
      const d = !mn.length;
      for (const a of i)
        a[1](), mn.push(a, e);
      if (d) {
        for (let a = 0; a < mn.length; a += 2)
          mn[a][0](mn[a + 1]);
        mn.length = 0;
      }
    }
  }
  function o(u) {
    r(u(
      /** @type {T} */
      e
    ));
  }
  function s(u, d = pt) {
    const a = [u, d];
    return i.add(a), i.size === 1 && (n = t(r, o) || pt), u(
      /** @type {T} */
      e
    ), () => {
      i.delete(a), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: o, subscribe: s };
}
function ul(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return cl(n, (s, u) => {
    let d = !1;
    const a = [];
    let h = 0, f = pt;
    const m = () => {
      if (h)
        return;
      f();
      const x = t(i ? a[0] : a, s, u);
      o ? s(x) : f = typeof x == "function" ? x : pt;
    }, g = r.map(
      (x, E) => Rr(
        x,
        (L) => {
          a[E] = L, h &= ~(1 << E), d && m();
        },
        () => {
          h |= 1 << E;
        }
      )
    );
    return d = !0, m(), function() {
      si(g), f(), d = !1;
    };
  });
}
function fl(e) {
  let t;
  return Rr(e, (n) => t = n)(), t;
}
let Zn = !1, pr = Symbol();
function Hn(e, t, n) {
  const i = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ xi(void 0),
    unsubscribe: pt
  });
  if (i.store !== e && !(pr in n))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = pt;
    else {
      var r = !0;
      i.unsubscribe = Rr(e, (o) => {
        r ? i.source.v = o : Y(i.source, o);
      }), r = !1;
    }
  return e && pr in n ? fl(e) : k(i.source);
}
function Yn() {
  const e = {};
  function t() {
    Wo(() => {
      for (var n in e)
        e[n].unsubscribe();
      Do(e, pr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function dl(e) {
  var t = Zn;
  try {
    return Zn = !1, [e(), Zn];
  } finally {
    Zn = t;
  }
}
function no(e) {
  for (var t = Le, n = Le; t !== null && !(t.f & (Nt | En)); )
    t = t.parent;
  try {
    return _t(t), e();
  } finally {
    _t(n);
  }
}
function Ur(e, t, n, i) {
  var Ee;
  var r = (n & ca) !== 0, o = !Cn || (n & ua) !== 0, s = (n & da) !== 0, u = (n & ha) !== 0, d = !1, a;
  s ? [a, d] = dl(() => (
    /** @type {V} */
    e[t]
  )) : a = /** @type {V} */
  e[t];
  var h = sn in e || Js in e, f = s && (((Ee = vn(e, t)) == null ? void 0 : Ee.set) ?? (h && t in e && ((Z) => e[t] = Z))) || void 0, m = (
    /** @type {V} */
    i
  ), g = !0, x = !1, E = () => (x = !0, g && (g = !1, u ? m = zt(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  a === void 0 && i !== void 0 && (f && o && ta(), a = E(), f && f(a));
  var L;
  if (o)
    L = () => {
      var Z = (
        /** @type {V} */
        e[t]
      );
      return Z === void 0 ? E() : (g = !0, x = !1, Z);
    };
  else {
    var q = no(
      () => (r ? Mn : ui)(() => (
        /** @type {V} */
        e[t]
      ))
    );
    q.f |= Ys, L = () => {
      var Z = k(q);
      return Z !== void 0 && (m = /** @type {V} */
      void 0), Z === void 0 ? m : Z;
    };
  }
  if (!(n & fa))
    return L;
  if (f) {
    var X = e.$$legacy;
    return function(Z, D) {
      return arguments.length > 0 ? ((!o || !D || X || d) && f(D ? L() : Z), Z) : L();
    };
  }
  var U = !1, Q = !1, G = /* @__PURE__ */ xi(a), ee = no(
    () => /* @__PURE__ */ Mn(() => {
      var Z = L(), D = k(G);
      return U ? (U = !1, Q = !0, D) : (Q = !1, G.v = Z);
    })
  );
  return r || (ee.equals = Er), function(Z, D) {
    if (arguments.length > 0) {
      const ve = D ? k(ee) : o && s ? _e(Z) : Z;
      return ee.equals(ve) || (U = !0, Y(G, ve), x && m !== void 0 && (m = ve), zt(() => k(ee))), Z;
    }
    return k(ee);
  };
}
function hl(e) {
  Ve === null && Qo(), Cn && Ve.l !== null ? pl(Ve).m.push(e) : fi(() => {
    const t = zt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function pl(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const ml = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ml);
sa();
const gl = (e) => e;
function vs(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function io(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function on(e, { delay: t = 0, duration: n = 400, easing: i = gl } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (o) => `opacity: ${o * r}`
  };
}
function vl(e, { delay: t = 0, duration: n = 400, easing: i = vs, x: r = 0, y: o = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(e), d = +u.opacity, a = u.transform === "none" ? "" : u.transform, h = d * (1 - s), [f, m] = io(r), [g, x] = io(o);
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (E, L) => `
			transform: ${a} translate(${(1 - E) * f}${m}, ${(1 - E) * g}${x});
			opacity: ${d - h * L}`
  };
}
function yl(e, { delay: t = 0, duration: n = 400, easing: i = vs, axis: r = "y" } = {}) {
  const o = getComputedStyle(e), s = +o.opacity, u = r === "y" ? "height" : "width", d = parseFloat(o[u]), a = r === "y" ? ["top", "bottom"] : ["left", "right"], h = a.map(
    (q) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${q[0].toUpperCase()}${q.slice(1)}`
    )
  ), f = parseFloat(o[`padding${h[0]}`]), m = parseFloat(o[`padding${h[1]}`]), g = parseFloat(o[`margin${h[0]}`]), x = parseFloat(o[`margin${h[1]}`]), E = parseFloat(
    o[`border${h[0]}Width`]
  ), L = parseFloat(
    o[`border${h[1]}Width`]
  );
  return {
    delay: t,
    duration: n,
    easing: i,
    css: (q) => `overflow: hidden;opacity: ${Math.min(q * 20, 1) * s};${u}: ${q * d}px;padding-${a[0]}: ${q * f}px;padding-${a[1]}: ${q * m}px;margin-${a[0]}: ${q * g}px;margin-${a[1]}: ${q * x}px;border-${a[0]}-width: ${q * E}px;border-${a[1]}-width: ${q * L}px;min-${u}: 0`
  };
}
function Nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ji = { exports: {} }, ro;
function bl() {
  return ro || (ro = 1, function(e) {
    ((t) => {
      var n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, o = Object.prototype.hasOwnProperty, s = (c, p) => {
        for (var y in p)
          n(c, y, { get: p[y], enumerable: !0 });
      }, u = (c, p, y, A) => {
        if (p && typeof p == "object" || typeof p == "function")
          for (let F of r(p))
            !o.call(c, F) && F !== y && n(c, F, { get: () => p[F], enumerable: !(A = i(p, F)) || A.enumerable });
        return c;
      }, d = (c) => u(n({}, "__esModule", { value: !0 }), c), a = (c, p, y) => new Promise((A, F) => {
        var J = (O) => {
          try {
            ie(y.next(O));
          } catch (xe) {
            F(xe);
          }
        }, B = (O) => {
          try {
            ie(y.throw(O));
          } catch (xe) {
            F(xe);
          }
        }, ie = (O) => O.done ? A(O.value) : Promise.resolve(O.value).then(J, B);
        ie((y = y.apply(c, p)).next());
      }), h = {};
      s(h, {
        analyzeMetafile: () => dn,
        analyzeMetafileSync: () => Ni,
        build: () => Oi,
        buildSync: () => Ri,
        context: () => Kn,
        default: () => Li,
        formatMessages: () => Mi,
        formatMessagesSync: () => Ui,
        initialize: () => Bi,
        stop: () => ji,
        transform: () => fn,
        transformSync: () => $n,
        version: () => gt
      }), t.exports = d(h);
      function f(c) {
        let p = (A) => {
          if (A === null)
            y.write8(0);
          else if (typeof A == "boolean")
            y.write8(1), y.write8(+A);
          else if (typeof A == "number")
            y.write8(2), y.write32(A | 0);
          else if (typeof A == "string")
            y.write8(3), y.write(x(A));
          else if (A instanceof Uint8Array)
            y.write8(4), y.write(A);
          else if (A instanceof Array) {
            y.write8(5), y.write32(A.length);
            for (let F of A)
              p(F);
          } else {
            let F = Object.keys(A);
            y.write8(6), y.write32(F.length);
            for (let J of F)
              y.write(x(J)), p(A[J]);
          }
        }, y = new g();
        return y.write32(0), y.write32(c.id << 1 | +!c.isRequest), p(c.value), X(y.buf, y.len - 4, 0), y.buf.subarray(0, y.len);
      }
      function m(c) {
        let p = () => {
          switch (y.read8()) {
            case 0:
              return null;
            case 1:
              return !!y.read8();
            case 2:
              return y.read32();
            case 3:
              return E(y.read());
            case 4:
              return y.read();
            case 5: {
              let B = y.read32(), ie = [];
              for (let O = 0; O < B; O++)
                ie.push(p());
              return ie;
            }
            case 6: {
              let B = y.read32(), ie = {};
              for (let O = 0; O < B; O++)
                ie[E(y.read())] = p();
              return ie;
            }
            default:
              throw new Error("Invalid packet");
          }
        }, y = new g(c), A = y.read32(), F = (A & 1) === 0;
        A >>>= 1;
        let J = p();
        if (y.ptr !== c.length)
          throw new Error("Invalid packet");
        return { id: A, isRequest: F, value: J };
      }
      var g = class {
        constructor(c = new Uint8Array(1024)) {
          this.buf = c, this.len = 0, this.ptr = 0;
        }
        _write(c) {
          if (this.len + c > this.buf.length) {
            let p = new Uint8Array((this.len + c) * 2);
            p.set(this.buf), this.buf = p;
          }
          return this.len += c, this.len - c;
        }
        write8(c) {
          let p = this._write(1);
          this.buf[p] = c;
        }
        write32(c) {
          let p = this._write(4);
          X(this.buf, c, p);
        }
        write(c) {
          let p = this._write(4 + c.length);
          X(this.buf, c.length, p), this.buf.set(c, p + 4);
        }
        _read(c) {
          if (this.ptr + c > this.buf.length)
            throw new Error("Invalid packet");
          return this.ptr += c, this.ptr - c;
        }
        read8() {
          return this.buf[this._read(1)];
        }
        read32() {
          return q(this.buf, this._read(4));
        }
        read() {
          let c = this.read32(), p = new Uint8Array(c), y = this._read(p.length);
          return p.set(this.buf.subarray(y, y + c)), p;
        }
      }, x, E, L;
      if (typeof TextEncoder < "u" && typeof TextDecoder < "u") {
        let c = new TextEncoder(), p = new TextDecoder();
        x = (y) => c.encode(y), E = (y) => p.decode(y), L = 'new TextEncoder().encode("")';
      } else if (typeof Buffer < "u")
        x = (c) => Buffer.from(c), E = (c) => {
          let { buffer: p, byteOffset: y, byteLength: A } = c;
          return Buffer.from(p, y, A).toString();
        }, L = 'Buffer.from("")';
      else
        throw new Error("No UTF-8 codec found");
      if (!(x("") instanceof Uint8Array))
        throw new Error(`Invariant violation: "${L} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
      function q(c, p) {
        return c[p++] | c[p++] << 8 | c[p++] << 16 | c[p++] << 24;
      }
      function X(c, p, y) {
        c[y++] = p, c[y++] = p >> 8, c[y++] = p >> 16, c[y++] = p >> 24;
      }
      var U = JSON.stringify, Q = "warning", G = "silent";
      function ee(c) {
        if (Ne(c, "target"), c.indexOf(",") >= 0) throw new Error(`Invalid target: ${c}`);
        return c;
      }
      var Ee = () => null, Z = (c) => typeof c == "boolean" ? null : "a boolean", D = (c) => typeof c == "string" ? null : "a string", ve = (c) => c instanceof RegExp ? null : "a RegExp object", ne = (c) => typeof c == "number" && c === (c | 0) ? null : "an integer", be = (c) => typeof c == "function" ? null : "a function", Se = (c) => Array.isArray(c) ? null : "an array", K = (c) => typeof c == "object" && c !== null && !Array.isArray(c) ? null : "an object", H = (c) => typeof c == "object" && c !== null ? null : "an array or an object", N = (c) => c instanceof WebAssembly.Module ? null : "a WebAssembly.Module", j = (c) => typeof c == "object" && !Array.isArray(c) ? null : "an object or null", W = (c) => typeof c == "string" || typeof c == "boolean" ? null : "a string or a boolean", ce = (c) => typeof c == "string" || typeof c == "object" && c !== null && !Array.isArray(c) ? null : "a string or an object", de = (c) => typeof c == "string" || Array.isArray(c) ? null : "a string or an array", Te = (c) => typeof c == "string" || c instanceof Uint8Array ? null : "a string or a Uint8Array", Pe = (c) => typeof c == "string" || c instanceof URL ? null : "a string or a URL";
      function v(c, p, y, A) {
        let F = c[y];
        if (p[y + ""] = !0, F === void 0) return;
        let J = A(F);
        if (J !== null) throw new Error(`${U(y)} must be ${J}`);
        return F;
      }
      function ge(c, p, y) {
        for (let A in c)
          if (!(A in p))
            throw new Error(`Invalid option ${y}: ${U(A)}`);
      }
      function nt(c) {
        let p = /* @__PURE__ */ Object.create(null), y = v(c, p, "wasmURL", Pe), A = v(c, p, "wasmModule", N), F = v(c, p, "worker", Z);
        return ge(c, p, "in initialize() call"), {
          wasmURL: y,
          wasmModule: A,
          worker: F
        };
      }
      function ct(c) {
        let p;
        if (c !== void 0) {
          p = /* @__PURE__ */ Object.create(null);
          for (let y in c) {
            let A = c[y];
            if (typeof A == "string" || A === !1)
              p[y] = A;
            else
              throw new Error(`Expected ${U(y)} in mangle cache to map to either a string or false`);
          }
        }
        return p;
      }
      function it(c, p, y, A, F) {
        let J = v(p, y, "color", Z), B = v(p, y, "logLevel", D), ie = v(p, y, "logLimit", ne);
        J !== void 0 ? c.push(`--color=${J}`) : A && c.push("--color=true"), c.push(`--log-level=${B || F}`), c.push(`--log-limit=${ie || 0}`);
      }
      function Ne(c, p, y) {
        if (typeof c != "string")
          throw new Error(`Expected value for ${p}${y !== void 0 ? " " + U(y) : ""} to be a string, got ${typeof c} instead`);
        return c;
      }
      function Be(c, p, y) {
        let A = v(p, y, "legalComments", D), F = v(p, y, "sourceRoot", D), J = v(p, y, "sourcesContent", Z), B = v(p, y, "target", de), ie = v(p, y, "format", D), O = v(p, y, "globalName", D), xe = v(p, y, "mangleProps", ve), ke = v(p, y, "reserveProps", ve), pe = v(p, y, "mangleQuoted", Z), Oe = v(p, y, "minify", Z), ye = v(p, y, "minifySyntax", Z), Ce = v(p, y, "minifyWhitespace", Z), De = v(p, y, "minifyIdentifiers", Z), ae = v(p, y, "lineLimit", ne), He = v(p, y, "drop", Se), oe = v(p, y, "dropLabels", Se), se = v(p, y, "charset", D), z = v(p, y, "treeShaking", Z), P = v(p, y, "ignoreAnnotations", Z), b = v(p, y, "jsx", D), T = v(p, y, "jsxFactory", D), R = v(p, y, "jsxFragment", D), _ = v(p, y, "jsxImportSource", D), M = v(p, y, "jsxDev", Z), S = v(p, y, "jsxSideEffects", Z), $ = v(p, y, "define", K), l = v(p, y, "logOverride", K), w = v(p, y, "supported", K), I = v(p, y, "pure", Se), C = v(p, y, "keepNames", Z), V = v(p, y, "platform", D), le = v(p, y, "tsconfigRaw", ce);
        if (A && c.push(`--legal-comments=${A}`), F !== void 0 && c.push(`--source-root=${F}`), J !== void 0 && c.push(`--sources-content=${J}`), B && (Array.isArray(B) ? c.push(`--target=${Array.from(B).map(ee).join(",")}`) : c.push(`--target=${ee(B)}`)), ie && c.push(`--format=${ie}`), O && c.push(`--global-name=${O}`), V && c.push(`--platform=${V}`), le && c.push(`--tsconfig-raw=${typeof le == "string" ? le : JSON.stringify(le)}`), Oe && c.push("--minify"), ye && c.push("--minify-syntax"), Ce && c.push("--minify-whitespace"), De && c.push("--minify-identifiers"), ae && c.push(`--line-limit=${ae}`), se && c.push(`--charset=${se}`), z !== void 0 && c.push(`--tree-shaking=${z}`), P && c.push("--ignore-annotations"), He) for (let me of He) c.push(`--drop:${Ne(me, "drop")}`);
        if (oe && c.push(`--drop-labels=${Array.from(oe).map((me) => Ne(me, "dropLabels")).join(",")}`), xe && c.push(`--mangle-props=${xe.source}`), ke && c.push(`--reserve-props=${ke.source}`), pe !== void 0 && c.push(`--mangle-quoted=${pe}`), b && c.push(`--jsx=${b}`), T && c.push(`--jsx-factory=${T}`), R && c.push(`--jsx-fragment=${R}`), _ && c.push(`--jsx-import-source=${_}`), M && c.push("--jsx-dev"), S && c.push("--jsx-side-effects"), $)
          for (let me in $) {
            if (me.indexOf("=") >= 0) throw new Error(`Invalid define: ${me}`);
            c.push(`--define:${me}=${Ne($[me], "define", me)}`);
          }
        if (l)
          for (let me in l) {
            if (me.indexOf("=") >= 0) throw new Error(`Invalid log override: ${me}`);
            c.push(`--log-override:${me}=${Ne(l[me], "log override", me)}`);
          }
        if (w)
          for (let me in w) {
            if (me.indexOf("=") >= 0) throw new Error(`Invalid supported: ${me}`);
            const ue = w[me];
            if (typeof ue != "boolean") throw new Error(`Expected value for supported ${U(me)} to be a boolean, got ${typeof ue} instead`);
            c.push(`--supported:${me}=${ue}`);
          }
        if (I) for (let me of I) c.push(`--pure:${Ne(me, "pure")}`);
        C && c.push("--keep-names");
      }
      function Qe(c, p, y, A, F) {
        var J;
        let B = [], ie = [], O = /* @__PURE__ */ Object.create(null), xe = null, ke = null;
        it(B, p, O, y, A), Be(B, p, O);
        let pe = v(p, O, "sourcemap", W), Oe = v(p, O, "bundle", Z), ye = v(p, O, "splitting", Z), Ce = v(p, O, "preserveSymlinks", Z), De = v(p, O, "metafile", Z), ae = v(p, O, "outfile", D), He = v(p, O, "outdir", D), oe = v(p, O, "outbase", D), se = v(p, O, "tsconfig", D), z = v(p, O, "resolveExtensions", Se), P = v(p, O, "nodePaths", Se), b = v(p, O, "mainFields", Se), T = v(p, O, "conditions", Se), R = v(p, O, "external", Se), _ = v(p, O, "packages", D), M = v(p, O, "alias", K), S = v(p, O, "loader", K), $ = v(p, O, "outExtension", K), l = v(p, O, "publicPath", D), w = v(p, O, "entryNames", D), I = v(p, O, "chunkNames", D), C = v(p, O, "assetNames", D), V = v(p, O, "inject", Se), le = v(p, O, "banner", K), me = v(p, O, "footer", K), ue = v(p, O, "entryPoints", H), $e = v(p, O, "absWorkingDir", D), we = v(p, O, "stdin", K), Ie = (J = v(p, O, "write", Z)) != null ? J : F, ut = v(p, O, "allowOverwrite", Z), Xe = v(p, O, "mangleCache", K);
        if (O.plugins = !0, ge(p, O, `in ${c}() call`), pe && B.push(`--sourcemap${pe === !0 ? "" : `=${pe}`}`), Oe && B.push("--bundle"), ut && B.push("--allow-overwrite"), ye && B.push("--splitting"), Ce && B.push("--preserve-symlinks"), De && B.push("--metafile"), ae && B.push(`--outfile=${ae}`), He && B.push(`--outdir=${He}`), oe && B.push(`--outbase=${oe}`), se && B.push(`--tsconfig=${se}`), _ && B.push(`--packages=${_}`), z) {
          let re = [];
          for (let We of z) {
            if (Ne(We, "resolve extension"), We.indexOf(",") >= 0) throw new Error(`Invalid resolve extension: ${We}`);
            re.push(We);
          }
          B.push(`--resolve-extensions=${re.join(",")}`);
        }
        if (l && B.push(`--public-path=${l}`), w && B.push(`--entry-names=${w}`), I && B.push(`--chunk-names=${I}`), C && B.push(`--asset-names=${C}`), b) {
          let re = [];
          for (let We of b) {
            if (Ne(We, "main field"), We.indexOf(",") >= 0) throw new Error(`Invalid main field: ${We}`);
            re.push(We);
          }
          B.push(`--main-fields=${re.join(",")}`);
        }
        if (T) {
          let re = [];
          for (let We of T) {
            if (Ne(We, "condition"), We.indexOf(",") >= 0) throw new Error(`Invalid condition: ${We}`);
            re.push(We);
          }
          B.push(`--conditions=${re.join(",")}`);
        }
        if (R) for (let re of R) B.push(`--external:${Ne(re, "external")}`);
        if (M)
          for (let re in M) {
            if (re.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${re}`);
            B.push(`--alias:${re}=${Ne(M[re], "alias", re)}`);
          }
        if (le)
          for (let re in le) {
            if (re.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${re}`);
            B.push(`--banner:${re}=${Ne(le[re], "banner", re)}`);
          }
        if (me)
          for (let re in me) {
            if (re.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${re}`);
            B.push(`--footer:${re}=${Ne(me[re], "footer", re)}`);
          }
        if (V) for (let re of V) B.push(`--inject:${Ne(re, "inject")}`);
        if (S)
          for (let re in S) {
            if (re.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${re}`);
            B.push(`--loader:${re}=${Ne(S[re], "loader", re)}`);
          }
        if ($)
          for (let re in $) {
            if (re.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${re}`);
            B.push(`--out-extension:${re}=${Ne($[re], "out extension", re)}`);
          }
        if (ue)
          if (Array.isArray(ue))
            for (let re = 0, We = ue.length; re < We; re++) {
              let ft = ue[re];
              if (typeof ft == "object" && ft !== null) {
                let tt = /* @__PURE__ */ Object.create(null), Ye = v(ft, tt, "in", D), $t = v(ft, tt, "out", D);
                if (ge(ft, tt, "in entry point at index " + re), Ye === void 0) throw new Error('Missing property "in" for entry point at index ' + re);
                if ($t === void 0) throw new Error('Missing property "out" for entry point at index ' + re);
                ie.push([$t, Ye]);
              } else
                ie.push(["", Ne(ft, "entry point at index " + re)]);
            }
          else
            for (let re in ue)
              ie.push([re, Ne(ue[re], "entry point", re)]);
        if (we) {
          let re = /* @__PURE__ */ Object.create(null), We = v(we, re, "contents", Te), ft = v(we, re, "resolveDir", D), tt = v(we, re, "sourcefile", D), Ye = v(we, re, "loader", D);
          ge(we, re, 'in "stdin" object'), tt && B.push(`--sourcefile=${tt}`), Ye && B.push(`--loader=${Ye}`), ft && (ke = ft), typeof We == "string" ? xe = x(We) : We instanceof Uint8Array && (xe = We);
        }
        let kt = [];
        if (P)
          for (let re of P)
            re += "", kt.push(re);
        return {
          entries: ie,
          flags: B,
          write: Ie,
          stdinContents: xe,
          stdinResolveDir: ke,
          absWorkingDir: $e,
          nodePaths: kt,
          mangleCache: ct(Xe)
        };
      }
      function Ze(c, p, y, A) {
        let F = [], J = /* @__PURE__ */ Object.create(null);
        it(F, p, J, y, A), Be(F, p, J);
        let B = v(p, J, "sourcemap", W), ie = v(p, J, "sourcefile", D), O = v(p, J, "loader", D), xe = v(p, J, "banner", D), ke = v(p, J, "footer", D), pe = v(p, J, "mangleCache", K);
        return ge(p, J, `in ${c}() call`), B && F.push(`--sourcemap=${B === !0 ? "external" : B}`), ie && F.push(`--sourcefile=${ie}`), O && F.push(`--loader=${O}`), xe && F.push(`--banner=${xe}`), ke && F.push(`--footer=${ke}`), {
          flags: F,
          mangleCache: ct(pe)
        };
      }
      function Ge(c) {
        const p = {}, y = { didClose: !1, reason: "" };
        let A = {}, F = 0, J = 0, B = new Uint8Array(16 * 1024), ie = 0, O = (se) => {
          let z = ie + se.length;
          if (z > B.length) {
            let b = new Uint8Array(z * 2);
            b.set(B), B = b;
          }
          B.set(se, ie), ie += se.length;
          let P = 0;
          for (; P + 4 <= ie; ) {
            let b = q(B, P);
            if (P + 4 + b > ie)
              break;
            P += 4, Ce(B.subarray(P, P + b)), P += b;
          }
          P > 0 && (B.copyWithin(0, P, ie), ie -= P);
        }, xe = (se) => {
          y.didClose = !0, se && (y.reason = ": " + (se.message || se));
          const z = "The service was stopped" + y.reason;
          for (let P in A)
            A[P](z, null);
          A = {};
        }, ke = (se, z, P) => {
          if (y.didClose) return P("The service is no longer running" + y.reason, null);
          let b = F++;
          A[b] = (T, R) => {
            try {
              P(T, R);
            } finally {
              se && se.unref();
            }
          }, se && se.ref(), c.writeToStdin(f({ id: b, isRequest: !0, value: z }));
        }, pe = (se, z) => {
          if (y.didClose) throw new Error("The service is no longer running" + y.reason);
          c.writeToStdin(f({ id: se, isRequest: !1, value: z }));
        }, Oe = (se, z) => a(this, null, function* () {
          try {
            if (z.command === "ping") {
              pe(se, {});
              return;
            }
            if (typeof z.key == "number") {
              const P = p[z.key];
              if (!P)
                return;
              const b = P[z.command];
              if (b) {
                yield b(se, z);
                return;
              }
            }
            throw new Error("Invalid command: " + z.command);
          } catch (P) {
            const b = [mt(P, c, null, void 0, "")];
            try {
              pe(se, { errors: b });
            } catch {
            }
          }
        }), ye = !0, Ce = (se) => {
          if (ye) {
            ye = !1;
            let P = String.fromCharCode(...se);
            if (P !== "0.24.2")
              throw new Error(`Cannot start service: Host version "0.24.2" does not match binary version ${U(P)}`);
            return;
          }
          let z = m(se);
          if (z.isRequest)
            Oe(z.id, z.value);
          else {
            let P = A[z.id];
            delete A[z.id], z.value.error ? P(z.value.error, {}) : P(null, z.value);
          }
        };
        return {
          readFromStdout: O,
          afterClose: xe,
          service: {
            buildOrContext: ({ callName: se, refs: z, options: P, isTTY: b, defaultWD: T, callback: R }) => {
              let _ = 0;
              const M = J++, S = {}, $ = {
                ref() {
                  ++_ === 1 && z && z.ref();
                },
                unref() {
                  --_ === 0 && (delete p[M], z && z.unref());
                }
              };
              p[M] = S, $.ref(), rt(
                se,
                M,
                ke,
                pe,
                $,
                c,
                S,
                P,
                b,
                T,
                (l, w) => {
                  try {
                    R(l, w);
                  } finally {
                    $.unref();
                  }
                }
              );
            },
            transform: ({ callName: se, refs: z, input: P, options: b, isTTY: T, fs: R, callback: _ }) => {
              const M = xt();
              let S = ($) => {
                try {
                  if (typeof P != "string" && !(P instanceof Uint8Array))
                    throw new Error('The input to "transform" must be a string or a Uint8Array');
                  let {
                    flags: l,
                    mangleCache: w
                  } = Ze(se, b, T, G), I = {
                    command: "transform",
                    flags: l,
                    inputFS: $ !== null,
                    input: $ !== null ? x($) : typeof P == "string" ? x(P) : P
                  };
                  w && (I.mangleCache = w), ke(z, I, (C, V) => {
                    if (C) return _(new Error(C), null);
                    let le = Me(V.errors, M), me = Me(V.warnings, M), ue = 1, $e = () => {
                      if (--ue === 0) {
                        let we = {
                          warnings: me,
                          code: V.code,
                          map: V.map,
                          mangleCache: void 0,
                          legalComments: void 0
                        };
                        "legalComments" in V && (we.legalComments = V == null ? void 0 : V.legalComments), V.mangleCache && (we.mangleCache = V == null ? void 0 : V.mangleCache), _(null, we);
                      }
                    };
                    if (le.length > 0) return _(fe("Transform failed", le, me), null);
                    V.codeFS && (ue++, R.readFile(V.code, (we, Ie) => {
                      we !== null ? _(we, null) : (V.code = Ie, $e());
                    })), V.mapFS && (ue++, R.readFile(V.map, (we, Ie) => {
                      we !== null ? _(we, null) : (V.map = Ie, $e());
                    })), $e();
                  });
                } catch (l) {
                  let w = [];
                  try {
                    it(w, b, {}, T, G);
                  } catch {
                  }
                  const I = mt(l, c, M, void 0, "");
                  ke(z, { command: "error", flags: w, error: I }, () => {
                    I.detail = M.load(I.detail), _(fe("Transform failed", [I], []), null);
                  });
                }
              };
              if ((typeof P == "string" || P instanceof Uint8Array) && P.length > 1024 * 1024) {
                let $ = S;
                S = () => R.writeFile(P, $);
              }
              S(null);
            },
            formatMessages: ({ callName: se, refs: z, messages: P, options: b, callback: T }) => {
              if (!b) throw new Error(`Missing second argument in ${se}() call`);
              let R = {}, _ = v(b, R, "kind", D), M = v(b, R, "color", Z), S = v(b, R, "terminalWidth", ne);
              if (ge(b, R, `in ${se}() call`), _ === void 0) throw new Error(`Missing "kind" in ${se}() call`);
              if (_ !== "error" && _ !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${se}() call`);
              let $ = {
                command: "format-msgs",
                messages: qe(P, "messages", null, "", S),
                isWarning: _ === "warning"
              };
              M !== void 0 && ($.color = M), S !== void 0 && ($.terminalWidth = S), ke(z, $, (l, w) => {
                if (l) return T(new Error(l), null);
                T(null, w.messages);
              });
            },
            analyzeMetafile: ({ callName: se, refs: z, metafile: P, options: b, callback: T }) => {
              b === void 0 && (b = {});
              let R = {}, _ = v(b, R, "color", Z), M = v(b, R, "verbose", Z);
              ge(b, R, `in ${se}() call`);
              let S = {
                command: "analyze-metafile",
                metafile: P
              };
              _ !== void 0 && (S.color = _), M !== void 0 && (S.verbose = M), ke(z, S, ($, l) => {
                if ($) return T(new Error($), null);
                T(null, l.result);
              });
            }
          }
        };
      }
      function rt(c, p, y, A, F, J, B, ie, O, xe, ke) {
        const pe = xt(), Oe = c === "context", ye = (ae, He) => {
          const oe = [];
          try {
            it(oe, ie, {}, O, Q);
          } catch {
          }
          const se = mt(ae, J, pe, void 0, He);
          y(F, { command: "error", flags: oe, error: se }, () => {
            se.detail = pe.load(se.detail), ke(fe(Oe ? "Context failed" : "Build failed", [se], []), null);
          });
        };
        let Ce;
        if (typeof ie == "object") {
          const ae = ie.plugins;
          if (ae !== void 0) {
            if (!Array.isArray(ae)) return ye(new Error('"plugins" must be an array'), "");
            Ce = ae;
          }
        }
        if (Ce && Ce.length > 0) {
          if (J.isSync) return ye(new Error("Cannot use plugins in synchronous API calls"), "");
          Dt(
            p,
            y,
            A,
            F,
            J,
            B,
            ie,
            Ce,
            pe
          ).then(
            (ae) => {
              if (!ae.ok) return ye(ae.error, ae.pluginName);
              try {
                De(ae.requestPlugins, ae.runOnEndCallbacks, ae.scheduleOnDisposeCallbacks);
              } catch (He) {
                ye(He, "");
              }
            },
            (ae) => ye(ae, "")
          );
          return;
        }
        try {
          De(null, (ae, He) => He([], []), () => {
          });
        } catch (ae) {
          ye(ae, "");
        }
        function De(ae, He, oe) {
          const se = J.hasFS, {
            entries: z,
            flags: P,
            write: b,
            stdinContents: T,
            stdinResolveDir: R,
            absWorkingDir: _,
            nodePaths: M,
            mangleCache: S
          } = Qe(c, ie, O, Q, se);
          if (b && !J.hasFS) throw new Error('The "write" option is unavailable in this environment');
          const $ = {
            command: "build",
            key: p,
            entries: z,
            flags: P,
            write: b,
            stdinContents: T,
            stdinResolveDir: R,
            absWorkingDir: _ || xe,
            nodePaths: M,
            context: Oe
          };
          ae && ($.plugins = ae), S && ($.mangleCache = S);
          const l = (C, V) => {
            const le = {
              errors: Me(C.errors, pe),
              warnings: Me(C.warnings, pe),
              outputFiles: void 0,
              metafile: void 0,
              mangleCache: void 0
            }, me = le.errors.slice(), ue = le.warnings.slice();
            C.outputFiles && (le.outputFiles = C.outputFiles.map(ot)), C.metafile && (le.metafile = JSON.parse(C.metafile)), C.mangleCache && (le.mangleCache = C.mangleCache), C.writeToStdout !== void 0 && console.log(E(C.writeToStdout).replace(/\n$/, "")), He(le, ($e, we) => {
              if (me.length > 0 || $e.length > 0) {
                const Ie = fe("Build failed", me.concat($e), ue.concat(we));
                return V(Ie, null, $e, we);
              }
              V(null, le, $e, we);
            });
          };
          let w, I;
          Oe && (B["on-end"] = (C, V) => new Promise((le) => {
            l(V, (me, ue, $e, we) => {
              const Ie = {
                errors: $e,
                warnings: we
              };
              I && I(me, ue), w = void 0, I = void 0, A(C, Ie), le();
            });
          })), y(F, $, (C, V) => {
            if (C) return ke(new Error(C), null);
            if (!Oe)
              return l(V, (ue, $e) => (oe(), ke(ue, $e)));
            if (V.errors.length > 0)
              return ke(fe("Context failed", V.errors, V.warnings), null);
            let le = !1;
            const me = {
              rebuild: () => (w || (w = new Promise((ue, $e) => {
                let we;
                I = (ut, Xe) => {
                  we || (we = () => ut ? $e(ut) : ue(Xe));
                };
                const Ie = () => {
                  y(F, {
                    command: "rebuild",
                    key: p
                  }, (Xe, kt) => {
                    Xe ? $e(new Error(Xe)) : we ? we() : Ie();
                  });
                };
                Ie();
              })), w),
              watch: (ue = {}) => new Promise(($e, we) => {
                if (!J.hasFS) throw new Error('Cannot use the "watch" API in this environment');
                ge(ue, {}, "in watch() call"), y(F, {
                  command: "watch",
                  key: p
                }, (Xe) => {
                  Xe ? we(new Error(Xe)) : $e(void 0);
                });
              }),
              serve: (ue = {}) => new Promise(($e, we) => {
                if (!J.hasFS) throw new Error('Cannot use the "serve" API in this environment');
                const Ie = {}, ut = v(ue, Ie, "port", ne), Xe = v(ue, Ie, "host", D), kt = v(ue, Ie, "servedir", D), re = v(ue, Ie, "keyfile", D), We = v(ue, Ie, "certfile", D), ft = v(ue, Ie, "fallback", D), tt = v(ue, Ie, "onRequest", be);
                ge(ue, Ie, "in serve() call");
                const Ye = {
                  command: "serve",
                  key: p,
                  onRequest: !!tt
                };
                ut !== void 0 && (Ye.port = ut), Xe !== void 0 && (Ye.host = Xe), kt !== void 0 && (Ye.servedir = kt), re !== void 0 && (Ye.keyfile = re), We !== void 0 && (Ye.certfile = We), ft !== void 0 && (Ye.fallback = ft), y(F, Ye, ($t, Fi) => {
                  if ($t) return we(new Error($t));
                  tt && (B["serve-request"] = (Vi, hn) => {
                    tt(hn.args), A(Vi, {});
                  }), $e(Fi);
                });
              }),
              cancel: () => new Promise((ue) => {
                if (le) return ue();
                y(F, {
                  command: "cancel",
                  key: p
                }, () => {
                  ue();
                });
              }),
              dispose: () => new Promise((ue) => {
                if (le) return ue();
                le = !0, y(F, {
                  command: "dispose",
                  key: p
                }, () => {
                  ue(), oe(), F.unref();
                });
              })
            };
            F.ref(), ke(null, me);
          });
        }
      }
      var Dt = (c, p, y, A, F, J, B, ie, O) => a(void 0, null, function* () {
        let xe = [], ke = [], pe = {}, Oe = {}, ye = [], Ce = 0, De = 0, ae = [], He = !1;
        ie = [...ie];
        for (let z of ie) {
          let P = {};
          if (typeof z != "object") throw new Error(`Plugin at index ${De} must be an object`);
          const b = v(z, P, "name", D);
          if (typeof b != "string" || b === "") throw new Error(`Plugin at index ${De} is missing a name`);
          try {
            let T = v(z, P, "setup", be);
            if (typeof T != "function") throw new Error("Plugin is missing a setup function");
            ge(z, P, `on plugin ${U(b)}`);
            let R = {
              name: b,
              onStart: !1,
              onEnd: !1,
              onResolve: [],
              onLoad: []
            };
            De++;
            let M = T({
              initialOptions: B,
              resolve: (S, $ = {}) => {
                if (!He) throw new Error('Cannot call "resolve" before plugin setup has completed');
                if (typeof S != "string") throw new Error("The path to resolve must be a string");
                let l = /* @__PURE__ */ Object.create(null), w = v($, l, "pluginName", D), I = v($, l, "importer", D), C = v($, l, "namespace", D), V = v($, l, "resolveDir", D), le = v($, l, "kind", D), me = v($, l, "pluginData", Ee), ue = v($, l, "with", K);
                return ge($, l, "in resolve() call"), new Promise(($e, we) => {
                  const Ie = {
                    command: "resolve",
                    path: S,
                    key: c,
                    pluginName: b
                  };
                  if (w != null && (Ie.pluginName = w), I != null && (Ie.importer = I), C != null && (Ie.namespace = C), V != null && (Ie.resolveDir = V), le != null) Ie.kind = le;
                  else throw new Error('Must specify "kind" when calling "resolve"');
                  me != null && (Ie.pluginData = O.store(me)), ue != null && (Ie.with = Fe(ue, "with")), p(A, Ie, (ut, Xe) => {
                    ut !== null ? we(new Error(ut)) : $e({
                      errors: Me(Xe.errors, O),
                      warnings: Me(Xe.warnings, O),
                      path: Xe.path,
                      external: Xe.external,
                      sideEffects: Xe.sideEffects,
                      namespace: Xe.namespace,
                      suffix: Xe.suffix,
                      pluginData: O.load(Xe.pluginData)
                    });
                  });
                });
              },
              onStart(S) {
                let $ = 'This error came from the "onStart" callback registered here:', l = At(new Error($), F, "onStart");
                xe.push({ name: b, callback: S, note: l }), R.onStart = !0;
              },
              onEnd(S) {
                let $ = 'This error came from the "onEnd" callback registered here:', l = At(new Error($), F, "onEnd");
                ke.push({ name: b, callback: S, note: l }), R.onEnd = !0;
              },
              onResolve(S, $) {
                let l = 'This error came from the "onResolve" callback registered here:', w = At(new Error(l), F, "onResolve"), I = {}, C = v(S, I, "filter", ve), V = v(S, I, "namespace", D);
                if (ge(S, I, `in onResolve() call for plugin ${U(b)}`), C == null) throw new Error("onResolve() call is missing a filter");
                let le = Ce++;
                pe[le] = { name: b, callback: $, note: w }, R.onResolve.push({ id: le, filter: C.source, namespace: V || "" });
              },
              onLoad(S, $) {
                let l = 'This error came from the "onLoad" callback registered here:', w = At(new Error(l), F, "onLoad"), I = {}, C = v(S, I, "filter", ve), V = v(S, I, "namespace", D);
                if (ge(S, I, `in onLoad() call for plugin ${U(b)}`), C == null) throw new Error("onLoad() call is missing a filter");
                let le = Ce++;
                Oe[le] = { name: b, callback: $, note: w }, R.onLoad.push({ id: le, filter: C.source, namespace: V || "" });
              },
              onDispose(S) {
                ye.push(S);
              },
              esbuild: F.esbuild
            });
            M && (yield M), ae.push(R);
          } catch (T) {
            return { ok: !1, error: T, pluginName: b };
          }
        }
        J["on-start"] = (z, P) => a(void 0, null, function* () {
          O.clear();
          let b = { errors: [], warnings: [] };
          yield Promise.all(xe.map((T) => a(void 0, [T], function* ({ name: R, callback: _, note: M }) {
            try {
              let S = yield _();
              if (S != null) {
                if (typeof S != "object") throw new Error(`Expected onStart() callback in plugin ${U(R)} to return an object`);
                let $ = {}, l = v(S, $, "errors", Se), w = v(S, $, "warnings", Se);
                ge(S, $, `from onStart() callback in plugin ${U(R)}`), l != null && b.errors.push(...qe(l, "errors", O, R, void 0)), w != null && b.warnings.push(...qe(w, "warnings", O, R, void 0));
              }
            } catch (S) {
              b.errors.push(mt(S, F, O, M && M(), R));
            }
          }))), y(z, b);
        }), J["on-resolve"] = (z, P) => a(void 0, null, function* () {
          let b = {}, T = "", R, _;
          for (let M of P.ids)
            try {
              ({ name: T, callback: R, note: _ } = pe[M]);
              let S = yield R({
                path: P.path,
                importer: P.importer,
                namespace: P.namespace,
                resolveDir: P.resolveDir,
                kind: P.kind,
                pluginData: O.load(P.pluginData),
                with: P.with
              });
              if (S != null) {
                if (typeof S != "object") throw new Error(`Expected onResolve() callback in plugin ${U(T)} to return an object`);
                let $ = {}, l = v(S, $, "pluginName", D), w = v(S, $, "path", D), I = v(S, $, "namespace", D), C = v(S, $, "suffix", D), V = v(S, $, "external", Z), le = v(S, $, "sideEffects", Z), me = v(S, $, "pluginData", Ee), ue = v(S, $, "errors", Se), $e = v(S, $, "warnings", Se), we = v(S, $, "watchFiles", Se), Ie = v(S, $, "watchDirs", Se);
                ge(S, $, `from onResolve() callback in plugin ${U(T)}`), b.id = M, l != null && (b.pluginName = l), w != null && (b.path = w), I != null && (b.namespace = I), C != null && (b.suffix = C), V != null && (b.external = V), le != null && (b.sideEffects = le), me != null && (b.pluginData = O.store(me)), ue != null && (b.errors = qe(ue, "errors", O, T, void 0)), $e != null && (b.warnings = qe($e, "warnings", O, T, void 0)), we != null && (b.watchFiles = Ke(we, "watchFiles")), Ie != null && (b.watchDirs = Ke(Ie, "watchDirs"));
                break;
              }
            } catch (S) {
              b = { id: M, errors: [mt(S, F, O, _ && _(), T)] };
              break;
            }
          y(z, b);
        }), J["on-load"] = (z, P) => a(void 0, null, function* () {
          let b = {}, T = "", R, _;
          for (let M of P.ids)
            try {
              ({ name: T, callback: R, note: _ } = Oe[M]);
              let S = yield R({
                path: P.path,
                namespace: P.namespace,
                suffix: P.suffix,
                pluginData: O.load(P.pluginData),
                with: P.with
              });
              if (S != null) {
                if (typeof S != "object") throw new Error(`Expected onLoad() callback in plugin ${U(T)} to return an object`);
                let $ = {}, l = v(S, $, "pluginName", D), w = v(S, $, "contents", Te), I = v(S, $, "resolveDir", D), C = v(S, $, "pluginData", Ee), V = v(S, $, "loader", D), le = v(S, $, "errors", Se), me = v(S, $, "warnings", Se), ue = v(S, $, "watchFiles", Se), $e = v(S, $, "watchDirs", Se);
                ge(S, $, `from onLoad() callback in plugin ${U(T)}`), b.id = M, l != null && (b.pluginName = l), w instanceof Uint8Array ? b.contents = w : w != null && (b.contents = x(w)), I != null && (b.resolveDir = I), C != null && (b.pluginData = O.store(C)), V != null && (b.loader = V), le != null && (b.errors = qe(le, "errors", O, T, void 0)), me != null && (b.warnings = qe(me, "warnings", O, T, void 0)), ue != null && (b.watchFiles = Ke(ue, "watchFiles")), $e != null && (b.watchDirs = Ke($e, "watchDirs"));
                break;
              }
            } catch (S) {
              b = { id: M, errors: [mt(S, F, O, _ && _(), T)] };
              break;
            }
          y(z, b);
        });
        let oe = (z, P) => P([], []);
        ke.length > 0 && (oe = (z, P) => {
          a(void 0, null, function* () {
            const b = [], T = [];
            for (const { name: R, callback: _, note: M } of ke) {
              let S, $;
              try {
                const l = yield _(z);
                if (l != null) {
                  if (typeof l != "object") throw new Error(`Expected onEnd() callback in plugin ${U(R)} to return an object`);
                  let w = {}, I = v(l, w, "errors", Se), C = v(l, w, "warnings", Se);
                  ge(l, w, `from onEnd() callback in plugin ${U(R)}`), I != null && (S = qe(I, "errors", O, R, void 0)), C != null && ($ = qe(C, "warnings", O, R, void 0));
                }
              } catch (l) {
                S = [mt(l, F, O, M && M(), R)];
              }
              if (S) {
                b.push(...S);
                try {
                  z.errors.push(...S);
                } catch {
                }
              }
              if ($) {
                T.push(...$);
                try {
                  z.warnings.push(...$);
                } catch {
                }
              }
            }
            P(b, T);
          });
        });
        let se = () => {
          for (const z of ye)
            setTimeout(() => z(), 0);
        };
        return He = !0, {
          ok: !0,
          requestPlugins: ae,
          runOnEndCallbacks: oe,
          scheduleOnDisposeCallbacks: se
        };
      });
      function xt() {
        const c = /* @__PURE__ */ new Map();
        let p = 0;
        return {
          clear() {
            c.clear();
          },
          load(y) {
            return c.get(y);
          },
          store(y) {
            if (y === void 0) return -1;
            const A = p++;
            return c.set(A, y), A;
          }
        };
      }
      function At(c, p, y) {
        let A, F = !1;
        return () => {
          if (F) return A;
          F = !0;
          try {
            let J = (c.stack + "").split(`
`);
            J.splice(1, 1);
            let B = jt(p, J, y);
            if (B)
              return A = { text: c.message, location: B }, A;
          } catch {
          }
        };
      }
      function mt(c, p, y, A, F) {
        let J = "Internal error", B = null;
        try {
          J = (c && c.message || c) + "";
        } catch {
        }
        try {
          B = jt(p, (c.stack + "").split(`
`), "");
        } catch {
        }
        return { id: "", pluginName: F, text: J, location: B, notes: A ? [A] : [], detail: y ? y.store(c) : -1 };
      }
      function jt(c, p, y) {
        let A = "    at ";
        if (c.readFileSync && !p[0].startsWith(A) && p[1].startsWith(A))
          for (let F = 1; F < p.length; F++) {
            let J = p[F];
            if (J.startsWith(A))
              for (J = J.slice(A.length); ; ) {
                let B = /^(?:new |async )?\S+ \((.*)\)$/.exec(J);
                if (B) {
                  J = B[1];
                  continue;
                }
                if (B = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(J), B) {
                  J = B[1];
                  continue;
                }
                if (B = /^(\S+):(\d+):(\d+)$/.exec(J), B) {
                  let ie;
                  try {
                    ie = c.readFileSync(B[1], "utf8");
                  } catch {
                    break;
                  }
                  let O = ie.split(/\r\n|\r|\n|\u2028|\u2029/)[+B[2] - 1] || "", xe = +B[3] - 1, ke = O.slice(xe, xe + y.length) === y ? y.length : 0;
                  return {
                    file: B[1],
                    namespace: "file",
                    line: +B[2],
                    column: x(O.slice(0, xe)).length,
                    length: x(O.slice(xe, xe + ke)).length,
                    lineText: O + `
` + p.slice(1).join(`
`),
                    suggestion: ""
                  };
                }
                break;
              }
          }
        return null;
      }
      function fe(c, p, y) {
        let A = 5;
        c += p.length < 1 ? "" : ` with ${p.length} error${p.length < 2 ? "" : "s"}:` + p.slice(0, A + 1).map((J, B) => {
          if (B === A) return `
...`;
          if (!J.location) return `
error: ${J.text}`;
          let { file: ie, line: O, column: xe } = J.location, ke = J.pluginName ? `[plugin: ${J.pluginName}] ` : "";
          return `
${ie}:${O}:${xe}: ERROR: ${ke}${J.text}`;
        }).join("");
        let F = new Error(c);
        for (const [J, B] of [["errors", p], ["warnings", y]])
          Object.defineProperty(F, J, {
            configurable: !0,
            enumerable: !0,
            get: () => B,
            set: (ie) => Object.defineProperty(F, J, {
              configurable: !0,
              enumerable: !0,
              value: ie
            })
          });
        return F;
      }
      function Me(c, p) {
        for (const y of c)
          y.detail = p.load(y.detail);
        return c;
      }
      function et(c, p, y) {
        if (c == null) return null;
        let A = {}, F = v(c, A, "file", D), J = v(c, A, "namespace", D), B = v(c, A, "line", ne), ie = v(c, A, "column", ne), O = v(c, A, "length", ne), xe = v(c, A, "lineText", D), ke = v(c, A, "suggestion", D);
        if (ge(c, A, p), xe) {
          const pe = xe.slice(
            0,
            (ie && ie > 0 ? ie : 0) + (O && O > 0 ? O : 0) + (y && y > 0 ? y : 80)
          );
          !/[\x7F-\uFFFF]/.test(pe) && !/\n/.test(xe) && (xe = pe);
        }
        return {
          file: F || "",
          namespace: J || "",
          line: B || 0,
          column: ie || 0,
          length: O || 0,
          lineText: xe || "",
          suggestion: ke || ""
        };
      }
      function qe(c, p, y, A, F) {
        let J = [], B = 0;
        for (const ie of c) {
          let O = {}, xe = v(ie, O, "id", D), ke = v(ie, O, "pluginName", D), pe = v(ie, O, "text", D), Oe = v(ie, O, "location", j), ye = v(ie, O, "notes", Se), Ce = v(ie, O, "detail", Ee), De = `in element ${B} of "${p}"`;
          ge(ie, O, De);
          let ae = [];
          if (ye)
            for (const He of ye) {
              let oe = {}, se = v(He, oe, "text", D), z = v(He, oe, "location", j);
              ge(He, oe, De), ae.push({
                text: se || "",
                location: et(z, De, F)
              });
            }
          J.push({
            id: xe || "",
            pluginName: ke || A,
            text: pe || "",
            location: et(Oe, De, F),
            notes: ae,
            detail: y ? y.store(Ce) : -1
          }), B++;
        }
        return J;
      }
      function Ke(c, p) {
        const y = [];
        for (const A of c) {
          if (typeof A != "string") throw new Error(`${U(p)} must be an array of strings`);
          y.push(A);
        }
        return y;
      }
      function Fe(c, p) {
        const y = /* @__PURE__ */ Object.create(null);
        for (const A in c) {
          const F = c[A];
          if (typeof F != "string") throw new Error(`key ${U(A)} in object ${U(p)} must be a string`);
          y[A] = F;
        }
        return y;
      }
      function ot({ path: c, contents: p, hash: y }) {
        let A = null;
        return {
          path: c,
          contents: p,
          hash: y,
          get text() {
            const F = this.contents;
            return (A === null || F !== p) && (p = F, A = E(F)), A;
          }
        };
      }
      var gt = "0.24.2", Oi = (c) => Qt().build(c), Kn = (c) => Qt().context(c), fn = (c, p) => Qt().transform(c, p), Mi = (c, p) => Qt().formatMessages(c, p), dn = (c, p) => Qt().analyzeMetafile(c, p), Ri = () => {
        throw new Error('The "buildSync" API only works in node');
      }, $n = () => {
        throw new Error('The "transformSync" API only works in node');
      }, Ui = () => {
        throw new Error('The "formatMessagesSync" API only works in node');
      }, Ni = () => {
        throw new Error('The "analyzeMetafileSync" API only works in node');
      }, ji = () => (Xt && Xt(), Promise.resolve()), Bt, Xt, tn, Qt = () => {
        if (tn) return tn;
        throw Bt ? new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this') : new Error('You need to call "initialize" before calling this');
      }, Bi = (c) => {
        c = nt(c || {});
        let p = c.wasmURL, y = c.wasmModule, A = c.worker !== !1;
        if (!p && !y) throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
        if (Bt) throw new Error('Cannot call "initialize" more than once');
        return Bt = Xn(p || "", y, A), Bt.catch(() => {
          Bt = void 0;
        }), Bt;
      }, Xn = (c, p, y) => a(void 0, null, function* () {
        let A, F;
        const J = new Promise((pe) => F = pe);
        if (y) {
          let pe = new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.24.2"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`], { type: "text/javascript" });
          A = new Worker(URL.createObjectURL(pe));
        } else {
          let pe = ((ye) => {
            var Ce = (oe, se, z) => new Promise((P, b) => {
              var T = (M) => {
                try {
                  _(z.next(M));
                } catch (S) {
                  b(S);
                }
              }, R = (M) => {
                try {
                  _(z.throw(M));
                } catch (S) {
                  b(S);
                }
              }, _ = (M) => M.done ? P(M.value) : Promise.resolve(M.value).then(T, R);
              _((z = z.apply(oe, se)).next());
            });
            let De, ae = {};
            for (let oe = self; oe; oe = Object.getPrototypeOf(oe))
              for (let se of Object.getOwnPropertyNames(oe))
                se in ae || Object.defineProperty(ae, se, { get: () => self[se] });
            (() => {
              const oe = () => {
                const P = new Error("not implemented");
                return P.code = "ENOSYS", P;
              };
              if (!ae.fs) {
                let P = "";
                ae.fs = {
                  constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                  // unused
                  writeSync(b, T) {
                    P += z.decode(T);
                    const R = P.lastIndexOf(`
`);
                    return R != -1 && (console.log(P.substring(0, R)), P = P.substring(R + 1)), T.length;
                  },
                  write(b, T, R, _, M, S) {
                    if (R !== 0 || _ !== T.length || M !== null) {
                      S(oe());
                      return;
                    }
                    const $ = this.writeSync(b, T);
                    S(null, $);
                  },
                  chmod(b, T, R) {
                    R(oe());
                  },
                  chown(b, T, R, _) {
                    _(oe());
                  },
                  close(b, T) {
                    T(oe());
                  },
                  fchmod(b, T, R) {
                    R(oe());
                  },
                  fchown(b, T, R, _) {
                    _(oe());
                  },
                  fstat(b, T) {
                    T(oe());
                  },
                  fsync(b, T) {
                    T(null);
                  },
                  ftruncate(b, T, R) {
                    R(oe());
                  },
                  lchown(b, T, R, _) {
                    _(oe());
                  },
                  link(b, T, R) {
                    R(oe());
                  },
                  lstat(b, T) {
                    T(oe());
                  },
                  mkdir(b, T, R) {
                    R(oe());
                  },
                  open(b, T, R, _) {
                    _(oe());
                  },
                  read(b, T, R, _, M, S) {
                    S(oe());
                  },
                  readdir(b, T) {
                    T(oe());
                  },
                  readlink(b, T) {
                    T(oe());
                  },
                  rename(b, T, R) {
                    R(oe());
                  },
                  rmdir(b, T) {
                    T(oe());
                  },
                  stat(b, T) {
                    T(oe());
                  },
                  symlink(b, T, R) {
                    R(oe());
                  },
                  truncate(b, T, R) {
                    R(oe());
                  },
                  unlink(b, T) {
                    T(oe());
                  },
                  utimes(b, T, R, _) {
                    _(oe());
                  }
                };
              }
              if (ae.process || (ae.process = {
                getuid() {
                  return -1;
                },
                getgid() {
                  return -1;
                },
                geteuid() {
                  return -1;
                },
                getegid() {
                  return -1;
                },
                getgroups() {
                  throw oe();
                },
                pid: -1,
                ppid: -1,
                umask() {
                  throw oe();
                },
                cwd() {
                  throw oe();
                },
                chdir() {
                  throw oe();
                }
              }), !ae.crypto)
                throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
              if (!ae.performance)
                throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
              if (!ae.TextEncoder)
                throw new Error("globalThis.TextEncoder is not available, polyfill required");
              if (!ae.TextDecoder)
                throw new Error("globalThis.TextDecoder is not available, polyfill required");
              const se = new TextEncoder("utf-8"), z = new TextDecoder("utf-8");
              ae.Go = class {
                constructor() {
                  this.argv = ["js"], this.env = {}, this.exit = (l) => {
                    l !== 0 && console.warn("exit code:", l);
                  }, this._exitPromise = new Promise((l) => {
                    this._resolveExitPromise = l;
                  }), this._pendingEvent = null, this._scheduledTimeouts = /* @__PURE__ */ new Map(), this._nextCallbackTimeoutID = 1;
                  const P = (l, w) => {
                    this.mem.setUint32(l + 0, w, !0), this.mem.setUint32(l + 4, Math.floor(w / 4294967296), !0);
                  }, b = (l) => {
                    const w = this.mem.getUint32(l + 0, !0), I = this.mem.getInt32(l + 4, !0);
                    return w + I * 4294967296;
                  }, T = (l) => {
                    const w = this.mem.getFloat64(l, !0);
                    if (w === 0)
                      return;
                    if (!isNaN(w))
                      return w;
                    const I = this.mem.getUint32(l, !0);
                    return this._values[I];
                  }, R = (l, w) => {
                    if (typeof w == "number" && w !== 0) {
                      if (isNaN(w)) {
                        this.mem.setUint32(l + 4, 2146959360, !0), this.mem.setUint32(l, 0, !0);
                        return;
                      }
                      this.mem.setFloat64(l, w, !0);
                      return;
                    }
                    if (w === void 0) {
                      this.mem.setFloat64(l, 0, !0);
                      return;
                    }
                    let C = this._ids.get(w);
                    C === void 0 && (C = this._idPool.pop(), C === void 0 && (C = this._values.length), this._values[C] = w, this._goRefCounts[C] = 0, this._ids.set(w, C)), this._goRefCounts[C]++;
                    let V = 0;
                    switch (typeof w) {
                      case "object":
                        w !== null && (V = 1);
                        break;
                      case "string":
                        V = 2;
                        break;
                      case "symbol":
                        V = 3;
                        break;
                      case "function":
                        V = 4;
                        break;
                    }
                    this.mem.setUint32(l + 4, 2146959360 | V, !0), this.mem.setUint32(l, C, !0);
                  }, _ = (l) => {
                    const w = b(l + 0), I = b(l + 8);
                    return new Uint8Array(this._inst.exports.mem.buffer, w, I);
                  }, M = (l) => {
                    const w = b(l + 0), I = b(l + 8), C = new Array(I);
                    for (let V = 0; V < I; V++)
                      C[V] = T(w + V * 8);
                    return C;
                  }, S = (l) => {
                    const w = b(l + 0), I = b(l + 8);
                    return z.decode(new DataView(this._inst.exports.mem.buffer, w, I));
                  }, $ = Date.now() - performance.now();
                  this.importObject = {
                    _gotest: {
                      add: (l, w) => l + w
                    },
                    gojs: {
                      // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                      // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                      // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                      // This changes the SP, thus we have to update the SP used by the imported function.
                      // func wasmExit(code int32)
                      "runtime.wasmExit": (l) => {
                        l >>>= 0;
                        const w = this.mem.getInt32(l + 8, !0);
                        this.exited = !0, delete this._inst, delete this._values, delete this._goRefCounts, delete this._ids, delete this._idPool, this.exit(w);
                      },
                      // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                      "runtime.wasmWrite": (l) => {
                        l >>>= 0;
                        const w = b(l + 8), I = b(l + 16), C = this.mem.getInt32(l + 24, !0);
                        ae.fs.writeSync(w, new Uint8Array(this._inst.exports.mem.buffer, I, C));
                      },
                      // func resetMemoryDataView()
                      "runtime.resetMemoryDataView": (l) => {
                        this.mem = new DataView(this._inst.exports.mem.buffer);
                      },
                      // func nanotime1() int64
                      "runtime.nanotime1": (l) => {
                        l >>>= 0, P(l + 8, ($ + performance.now()) * 1e6);
                      },
                      // func walltime() (sec int64, nsec int32)
                      "runtime.walltime": (l) => {
                        l >>>= 0;
                        const w = (/* @__PURE__ */ new Date()).getTime();
                        P(l + 8, w / 1e3), this.mem.setInt32(l + 16, w % 1e3 * 1e6, !0);
                      },
                      // func scheduleTimeoutEvent(delay int64) int32
                      "runtime.scheduleTimeoutEvent": (l) => {
                        l >>>= 0;
                        const w = this._nextCallbackTimeoutID;
                        this._nextCallbackTimeoutID++, this._scheduledTimeouts.set(w, setTimeout(
                          () => {
                            for (this._resume(); this._scheduledTimeouts.has(w); )
                              console.warn("scheduleTimeoutEvent: missed timeout event"), this._resume();
                          },
                          b(l + 8)
                        )), this.mem.setInt32(l + 16, w, !0);
                      },
                      // func clearTimeoutEvent(id int32)
                      "runtime.clearTimeoutEvent": (l) => {
                        l >>>= 0;
                        const w = this.mem.getInt32(l + 8, !0);
                        clearTimeout(this._scheduledTimeouts.get(w)), this._scheduledTimeouts.delete(w);
                      },
                      // func getRandomData(r []byte)
                      "runtime.getRandomData": (l) => {
                        l >>>= 0, crypto.getRandomValues(_(l + 8));
                      },
                      // func finalizeRef(v ref)
                      "syscall/js.finalizeRef": (l) => {
                        l >>>= 0;
                        const w = this.mem.getUint32(l + 8, !0);
                        if (this._goRefCounts[w]--, this._goRefCounts[w] === 0) {
                          const I = this._values[w];
                          this._values[w] = null, this._ids.delete(I), this._idPool.push(w);
                        }
                      },
                      // func stringVal(value string) ref
                      "syscall/js.stringVal": (l) => {
                        l >>>= 0, R(l + 24, S(l + 8));
                      },
                      // func valueGet(v ref, p string) ref
                      "syscall/js.valueGet": (l) => {
                        l >>>= 0;
                        const w = Reflect.get(T(l + 8), S(l + 16));
                        l = this._inst.exports.getsp() >>> 0, R(l + 32, w);
                      },
                      // func valueSet(v ref, p string, x ref)
                      "syscall/js.valueSet": (l) => {
                        l >>>= 0, Reflect.set(T(l + 8), S(l + 16), T(l + 32));
                      },
                      // func valueDelete(v ref, p string)
                      "syscall/js.valueDelete": (l) => {
                        l >>>= 0, Reflect.deleteProperty(T(l + 8), S(l + 16));
                      },
                      // func valueIndex(v ref, i int) ref
                      "syscall/js.valueIndex": (l) => {
                        l >>>= 0, R(l + 24, Reflect.get(T(l + 8), b(l + 16)));
                      },
                      // valueSetIndex(v ref, i int, x ref)
                      "syscall/js.valueSetIndex": (l) => {
                        l >>>= 0, Reflect.set(T(l + 8), b(l + 16), T(l + 24));
                      },
                      // func valueCall(v ref, m string, args []ref) (ref, bool)
                      "syscall/js.valueCall": (l) => {
                        l >>>= 0;
                        try {
                          const w = T(l + 8), I = Reflect.get(w, S(l + 16)), C = M(l + 32), V = Reflect.apply(I, w, C);
                          l = this._inst.exports.getsp() >>> 0, R(l + 56, V), this.mem.setUint8(l + 64, 1);
                        } catch (w) {
                          l = this._inst.exports.getsp() >>> 0, R(l + 56, w), this.mem.setUint8(l + 64, 0);
                        }
                      },
                      // func valueInvoke(v ref, args []ref) (ref, bool)
                      "syscall/js.valueInvoke": (l) => {
                        l >>>= 0;
                        try {
                          const w = T(l + 8), I = M(l + 16), C = Reflect.apply(w, void 0, I);
                          l = this._inst.exports.getsp() >>> 0, R(l + 40, C), this.mem.setUint8(l + 48, 1);
                        } catch (w) {
                          l = this._inst.exports.getsp() >>> 0, R(l + 40, w), this.mem.setUint8(l + 48, 0);
                        }
                      },
                      // func valueNew(v ref, args []ref) (ref, bool)
                      "syscall/js.valueNew": (l) => {
                        l >>>= 0;
                        try {
                          const w = T(l + 8), I = M(l + 16), C = Reflect.construct(w, I);
                          l = this._inst.exports.getsp() >>> 0, R(l + 40, C), this.mem.setUint8(l + 48, 1);
                        } catch (w) {
                          l = this._inst.exports.getsp() >>> 0, R(l + 40, w), this.mem.setUint8(l + 48, 0);
                        }
                      },
                      // func valueLength(v ref) int
                      "syscall/js.valueLength": (l) => {
                        l >>>= 0, P(l + 16, parseInt(T(l + 8).length));
                      },
                      // valuePrepareString(v ref) (ref, int)
                      "syscall/js.valuePrepareString": (l) => {
                        l >>>= 0;
                        const w = se.encode(String(T(l + 8)));
                        R(l + 16, w), P(l + 24, w.length);
                      },
                      // valueLoadString(v ref, b []byte)
                      "syscall/js.valueLoadString": (l) => {
                        l >>>= 0;
                        const w = T(l + 8);
                        _(l + 16).set(w);
                      },
                      // func valueInstanceOf(v ref, t ref) bool
                      "syscall/js.valueInstanceOf": (l) => {
                        l >>>= 0, this.mem.setUint8(l + 24, T(l + 8) instanceof T(l + 16) ? 1 : 0);
                      },
                      // func copyBytesToGo(dst []byte, src ref) (int, bool)
                      "syscall/js.copyBytesToGo": (l) => {
                        l >>>= 0;
                        const w = _(l + 8), I = T(l + 32);
                        if (!(I instanceof Uint8Array || I instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(l + 48, 0);
                          return;
                        }
                        const C = I.subarray(0, w.length);
                        w.set(C), P(l + 40, C.length), this.mem.setUint8(l + 48, 1);
                      },
                      // func copyBytesToJS(dst ref, src []byte) (int, bool)
                      "syscall/js.copyBytesToJS": (l) => {
                        l >>>= 0;
                        const w = T(l + 8), I = _(l + 16);
                        if (!(w instanceof Uint8Array || w instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(l + 48, 0);
                          return;
                        }
                        const C = I.subarray(0, w.length);
                        w.set(C), P(l + 40, C.length), this.mem.setUint8(l + 48, 1);
                      },
                      debug: (l) => {
                        console.log(l);
                      }
                    }
                  };
                }
                run(P) {
                  return Ce(this, null, function* () {
                    if (!(P instanceof WebAssembly.Instance))
                      throw new Error("Go.run: WebAssembly.Instance expected");
                    this._inst = P, this.mem = new DataView(this._inst.exports.mem.buffer), this._values = [
                      // JS values that Go currently has references to, indexed by reference id
                      NaN,
                      0,
                      null,
                      !0,
                      !1,
                      ae,
                      this
                    ], this._goRefCounts = new Array(this._values.length).fill(1 / 0), this._ids = /* @__PURE__ */ new Map([
                      // mapping from JS values to reference ids
                      [0, 1],
                      [null, 2],
                      [!0, 3],
                      [!1, 4],
                      [ae, 5],
                      [this, 6]
                    ]), this._idPool = [], this.exited = !1;
                    let b = 4096;
                    const T = (l) => {
                      const w = b, I = se.encode(l + "\0");
                      return new Uint8Array(this.mem.buffer, b, I.length).set(I), b += I.length, b % 8 !== 0 && (b += 8 - b % 8), w;
                    }, R = this.argv.length, _ = [];
                    this.argv.forEach((l) => {
                      _.push(T(l));
                    }), _.push(0), Object.keys(this.env).sort().forEach((l) => {
                      _.push(T(`${l}=${this.env[l]}`));
                    }), _.push(0);
                    const S = b;
                    if (_.forEach((l) => {
                      this.mem.setUint32(b, l, !0), this.mem.setUint32(b + 4, 0, !0), b += 8;
                    }), b >= 12288)
                      throw new Error("total length of command line and environment variables exceeds limit");
                    this._inst.exports.run(R, S), this.exited && this._resolveExitPromise(), yield this._exitPromise;
                  });
                }
                _resume() {
                  if (this.exited)
                    throw new Error("Go program has already exited");
                  this._inst.exports.resume(), this.exited && this._resolveExitPromise();
                }
                _makeFuncWrapper(P) {
                  const b = this;
                  return function() {
                    const T = { id: P, this: this, args: arguments };
                    return b._pendingEvent = T, b._resume(), T.result;
                  };
                }
              };
            })(), De = ({ data: oe }) => {
              let se = new TextDecoder(), z = ae.fs, P = "";
              z.writeSync = (M, S) => {
                if (M === 1)
                  ye(S);
                else if (M === 2) {
                  P += se.decode(S);
                  let $ = P.split(`
`);
                  $.length > 1 && console.log($.slice(0, -1).join(`
`)), P = $[$.length - 1];
                } else
                  throw new Error("Bad write");
                return S.length;
              };
              let b = [], T, R = 0;
              De = ({ data: M }) => (M.length > 0 && (b.push(M), T && T()), _), z.read = (M, S, $, l, w, I) => {
                if (M !== 0 || $ !== 0 || l !== S.length || w !== null)
                  throw new Error("Bad read");
                if (b.length === 0) {
                  T = () => z.read(M, S, $, l, w, I);
                  return;
                }
                let C = b[0], V = Math.max(0, Math.min(l, C.length - R));
                S.set(C.subarray(R, R + V), $), R += V, R === C.length && (b.shift(), R = 0), I(null, V);
              };
              let _ = new ae.Go();
              return _.argv = ["", "--service=0.24.2"], He(oe, _).then(
                (M) => {
                  ye(null), _.run(M);
                },
                (M) => {
                  ye(M);
                }
              ), _;
            };
            function He(oe, se) {
              return Ce(this, null, function* () {
                if (oe instanceof WebAssembly.Module)
                  return WebAssembly.instantiate(oe, se.importObject);
                const z = yield fetch(oe);
                if (!z.ok) throw new Error(`Failed to download ${JSON.stringify(oe)}`);
                if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(z.headers.get("Content-Type") || ""))
                  return (yield WebAssembly.instantiateStreaming(z, se.importObject)).instance;
                const P = yield z.arrayBuffer();
                return (yield WebAssembly.instantiate(P, se.importObject)).instance;
              });
            }
            return (oe) => De(oe);
          })((ye) => A.onmessage({ data: ye })), Oe;
          A = {
            onmessage: null,
            postMessage: (ye) => setTimeout(() => {
              try {
                Oe = pe({ data: ye });
              } catch (Ce) {
                F(Ce);
              }
            }),
            terminate() {
              if (Oe)
                for (let ye of Oe._scheduledTimeouts.values())
                  clearTimeout(ye);
            }
          };
        }
        let B, ie;
        const O = new Promise((pe, Oe) => {
          B = pe, ie = Oe;
        });
        A.onmessage = ({ data: pe }) => {
          A.onmessage = ({ data: Oe }) => xe(Oe), pe ? ie(pe) : B();
        }, A.postMessage(p || new URL(c, location.href).toString());
        let { readFromStdout: xe, service: ke } = Ge({
          writeToStdin(pe) {
            A.postMessage(pe);
          },
          isSync: !1,
          hasFS: !1,
          esbuild: h
        });
        yield O, Xt = () => {
          A.terminate(), Bt = void 0, Xt = void 0, tn = void 0;
        }, tn = {
          build: (pe) => new Promise((Oe, ye) => {
            J.then(ye), ke.buildOrContext({
              callName: "build",
              refs: null,
              options: pe,
              isTTY: !1,
              defaultWD: "/",
              callback: (Ce, De) => Ce ? ye(Ce) : Oe(De)
            });
          }),
          context: (pe) => new Promise((Oe, ye) => {
            J.then(ye), ke.buildOrContext({
              callName: "context",
              refs: null,
              options: pe,
              isTTY: !1,
              defaultWD: "/",
              callback: (Ce, De) => Ce ? ye(Ce) : Oe(De)
            });
          }),
          transform: (pe, Oe) => new Promise((ye, Ce) => {
            J.then(Ce), ke.transform({
              callName: "transform",
              refs: null,
              input: pe,
              options: Oe || {},
              isTTY: !1,
              fs: {
                readFile(De, ae) {
                  ae(new Error("Internal error"), null);
                },
                writeFile(De, ae) {
                  ae(null);
                }
              },
              callback: (De, ae) => De ? Ce(De) : ye(ae)
            });
          }),
          formatMessages: (pe, Oe) => new Promise((ye, Ce) => {
            J.then(Ce), ke.formatMessages({
              callName: "formatMessages",
              refs: null,
              messages: pe,
              options: Oe,
              callback: (De, ae) => De ? Ce(De) : ye(ae)
            });
          }),
          analyzeMetafile: (pe, Oe) => new Promise((ye, Ce) => {
            J.then(Ce), ke.analyzeMetafile({
              callName: "analyzeMetafile",
              refs: null,
              metafile: typeof pe == "string" ? pe : JSON.stringify(pe),
              options: Oe,
              callback: (De, ae) => De ? Ce(De) : ye(ae)
            });
          })
        };
      }), Li = h;
    })(e);
  }(Ji)), Ji.exports;
}
var Ki = bl();
function wl({
  name: e,
  description: t,
  icon: n,
  id: i
}) {
  return `  <meta property="og:title" content="${e}" />
  <meta property="og:description" content="${t}" />
  <meta property="og:image" content="${n || "https://nocapos.com/mascot-app.png"}" />
  <meta property="og:url" content="${`https://apps.nocapos.com/${i}/index.html`}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${e}" />
  <meta property="og:locale" content="${navigator.language.replace("-", "_")}" />
  <meta name="description" content="${t}" />
  <title>${e}</title>
  <link rel="icon" type="image/png" href="${n || "https://nocapos.com/mascot-app.png"}">`;
}
function _l(e) {
  const t = e.split("/"), n = [];
  for (const i of t)
    i == ".." ? n.pop() : i && i !== "." && n.push(i);
  return `/${n.join("/")}`;
}
const xl = (e) => ({
  name: "virtual-modules",
  setup(t) {
    t.onResolve({ filter: /.*/ }, (n) => {
      let i = n.path;
      if (!i.startsWith(".") && !e[`/${i}`])
        return;
      const r = i.startsWith("/") ? i : `/${i}`, o = i.startsWith(".") ? `${n.importer.split("/").slice(0, -1).join("/")}` : "", s = [".js", ".jsx", ".css"], u = ["", "/index.js", "/index.jsx"], d = _l(`${o}/${i}`), h = [
        r,
        d,
        ...s.map((f) => r + f),
        ...s.map((f) => d + f),
        ...u.map((f) => r + f),
        ...u.map((f) => d + f)
      ].find((f) => f in e);
      return h ? { path: h, namespace: "virtual-modules" } : void 0;
    }), t.onLoad({ filter: /.*/, namespace: "virtual-modules" }, (n) => {
      if (n.path in e) {
        const i = n.path.startsWith(".") ? n.path.slice(1) : n.path;
        return {
          contents: e[i],
          loader: n.path.endsWith(".jsx") ? "jsx" : "js"
        };
      }
    });
  }
}), kl = (e) => ({
  name: "cdn-resolver-plugin",
  setup(t) {
    const n = {}, i = "https://cdn.jsdelivr.net", r = "/npm/";
    e = {
      ...e,
      react: void 0,
      "react-dom": void 0,
      three: void 0
    };
    function o(s) {
      if (e[s]) {
        let h = e[s];
        return h.startsWith("^") && (h = h.slice(1)), s + "@" + h;
      }
      let u = /^(@?[\w-]+(?:\/[\w-]+)?)(.*)$/, a = s.replace(/^\/npm\//, "").replace(/\/\+esm$/, "").match(u);
      if (a) {
        let [, h, f] = a;
        return h + f;
      }
      return null;
    }
    t.onResolve({ filter: /.*/ }, async (s) => {
      let u = o(s.path), d;
      e[s.path] || (u = u.replace(/@[\d.]+/, "")), d = u;
      let a = n[d];
      if (a)
        return { path: a, namespace: "cdn" };
      let h = `${i}${r}${u}/+esm`;
      return n[d] = h, { path: h, namespace: "cdn" };
    }), t.onLoad(
      { filter: /^https:\/\/cdn.jsdelivr.net\// },
      async (s) => ({ contents: await (await fetch(s.path)).text(), loader: "js" })
    );
  }
}), Sl = /\[file_sep:\s*(.+?)\]\s*```(\w*)\n([\s\S]*?)(```|$)/g;
function oo(e) {
  let t = {}, n;
  for (; (n = Sl.exec(e)) !== null; ) {
    let [, i, r, o] = n, s = (i.startsWith("/") ? "" : "/") + i.trim();
    t[s] = o.trim();
  }
  return t;
}
const El = `<!DOCTYPE html>
<html lang="en" data-theme="cupcake">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
`, Tl = `
  <link rel="manifest" href="app.manifest" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com" async><\/script>
  <script src="https://accounts.google.com/gsi/client" async><\/script>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    * { margin: 0; }
    body { line-height: 1.5; -webkit-font-smoothing: antialiased; }
    img, picture, video, canvas, svg { display: block; max-width: 100%; }
    input, button, textarea, select { font: inherit; }
    p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
    p { text-wrap: pretty; }
    h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
    #root { isolation: isolate; }
    #domini { isolation: isolate; display: contents; }
  </style>
</head>
<body>
<div id="root"></div>

<footer class="bg-base-200 text-sm p-2 flex justify-center">
  <a href="https://nocapos.com" target="_blank" class="flex items-center gap-2 hover:text-blue-600">
    Made with ❤️ by Domini
    <img src="https://nocapos.com/domini-love.png" alt="Domini" style="width: 1.5rem; height: 1.5rem;" />
  </a>
</footer>
<script type="module">

`, Cl = `
<\/script></body></html>`;
let Xi = !1;
async function Dl({ project: e, fileContents: t, appModules: n }) {
  try {
    Xi || (await Ki.initialize({ wasmURL: "./esbuild.wasm" }), Xi = !0);
    let i = {};
    if (t["/package.json"])
      try {
        i = JSON.parse(t["/package.json"]).dependencies || {};
      } catch {
      }
    const r = await Ki.build({
      stdin: {
        contents: t["/index.jsx"],
        resolveDir: "",
        loader: "jsx"
      },
      bundle: !0,
      format: "esm",
      minify: !1,
      keepNames: !0,
      jsx: "automatic",
      target: "es2020",
      platform: "browser",
      plugins: [
        xl(t),
        kl(i)
      ],
      write: !1,
      loader: { ".js": "jsx" }
    });
    let o = wl(e), s = El + o + Tl + r.outputFiles[0].text + Cl;
    const u = new Blob([s], { type: "text/html" });
    return { ok: !0, value: URL.createObjectURL(u) };
  } catch (i) {
    return Ki.stop(), Xi = !1, console.error("Build failed:", i), { ok: !1, error: i.message };
  }
}
function so(e, t) {
  return fetch(globalThis._DOMINI_BASE_URL + "/chat/completions", {
    signal: t.signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${globalThis._DOMINI_API_KEY}`
    },
    body: JSON.stringify({
      messages: e,
      stream: !0,
      temperature: 0,
      model: globalThis._DOMINI_CODER_MODEL
    })
  });
}
async function ao({ fetcher: e, onUpdate: t }) {
  let n = "", i = "";
  async function r(u) {
    let d = u.body.getReader(), a = new TextDecoder("utf-8"), h = "", f = "";
    for (; ; ) {
      let { value: m, done: g } = await d.read();
      if (g) break;
      h += a.decode(m, { stream: !0 }), { buffer: h, responseText: f } = o(
        h,
        f
      );
    }
    return s(h.trim(), f), f;
  }
  function o(u, d) {
    for (; ; ) {
      let a = u.indexOf(`
`);
      if (a == -1) break;
      let h = u.slice(0, a).trim();
      u = u.slice(a + 1), { responseText: d } = s(h, d);
    }
    return { buffer: u, responseText: d };
  }
  function s(u, d) {
    var X, U;
    if (!u.startsWith("data: ")) return { responseText: d };
    let a = u.slice(6).trim();
    if (a == "[DONE]")
      return { responseText: d };
    let h;
    try {
      h = JSON.parse(a);
    } catch (Q) {
      console.error("Error parsing JSON:", Q), console.log(a);
    }
    if (!((X = h == null ? void 0 : h.choices) != null && X.length))
      return { responseText: d };
    let f = h.choices[0].delta.content;
    if (!f)
      return { responseText: d };
    i += f, d += f;
    let m = Array.from(
      i.matchAll(/\[file_sep:\s*(.+?)\]/g)
    );
    if (!m.length || !((U = m[m.length - 1]) != null && U[1]))
      return t("content", n, i), { responseText: d };
    let g = i.lastIndexOf(
      m[m.length - 1][0]
    );
    i = i.slice(g);
    let x = m[m.length - 1][1], E = x.startsWith("/") ? x : `/${x}`;
    E !== n && (n = E, t("newFile", n));
    let q = oo(i)[n];
    return q || (q = ""), t("content", n, q), { responseText: d };
  }
  try {
    if (!e.ok)
      throw new Error(await e.text());
    let u = await r(e);
    return {
      ok: !0,
      fileContents: oo(u),
      text: u
    };
  } catch (u) {
    return console.error(u), {
      ok: !1,
      error: u.message
    };
  }
}
const Al = {
  en: {
    "domini.slogan": "Apps adapt to you",
    "domini.thinking": "Domini is thinking...",
    "domini.planning": "Domini is planning...",
    "domini.analysingImage": "Domini is analyzing image...",
    "domini.analysingImages": "Domini is analyzing images...",
    "domini.writingCode": "Domini is writing code...",
    "ui.idea": "Idea",
    "ui.code": "Code",
    "ui.app": "App",
    "ui.make": "Make an app",
    "ui.upload": "Upload",
    "ui.screenshot": "Screenshot",
    "ui.prompt": "Prompt",
    "ui.clear": "Clear",
    "ui.delete": "Delete",
    "ui.uploadIcon": "Upload icon",
    "ui.stop": "Stop",
    "ui.acceptEdit": "Accept",
    "ui.edit": "Edit",
    "ui.edit-info": "Update Info",
    "ui.discord": "Support Group",
    "ui.deploy": "Deploy",
    "ui.open": "Open",
    "ui.submit": "Submit",
    "ui.usage": "Usage",
    "ui.sidebar": "Sidebar",
    "ui.history": "Version History",
    "ui.send": "Send",
    "ui.favorite": "Favorite",
    "ui.fix": "Fix the bugs",
    "ui.cancel": "Cancel",
    "ui.guide": "Guide",
    "ui.tip": "Tips",
    "ui.reference": "Reference",
    "ui.myapps": "My apps",
    "ui.store": "Store",
    "ui.ecosystem": "Ecosystem",
    "ui.company": "<company>",
    "ui.price": "Price",
    "ui.pricing": "Pricing",
    "ui.pricing.flatrate": "Flat rate",
    "ui.pricing.usage": "Usage",
    "ui.pricing.free": "Free-limited",
    "ui.pricing.usage.markup": "Markup",
    "ui.pricing.usage.markup-desc": "Users pay credits to use as needed. You can customize the markup to receive the corresponding profit percentage when they use the service.",
    "ui.pricing.flatrate.desc": "Users only need to pay once to own forever. Set price to 0 to gift for free.",
    "ui.pricing.flatrate.includes-code": "Includes code",
    "ui.pricing.one-time": "One-time",
    "ui.pricing.one-time.desc": "Members only need to pay once to join for life.",
    "ui.pricing.monthly": "Monthly",
    "ui.pricing.monthly.desc": "Members need to pay monthly.",
    "ui.pricing.lifetime": "Lifetime",
    "ui.pricing.free.usageCount": "Usage count",
    "ui.pricing.free.usageReload": "Reload after (hours)",
    "ui.pricing.free.usageCta": "Notify when usage is over",
    "ui.pricing.usage.free-desc": "Users can use the app for free with the usage limit set by you. You will be charged for the usage.",
    "ui.download": "Download",
    "ui.billingOption": "Billing option",
    "ui.share": "Share",
    "ui.share-copied": "Link copied to clipboard",
    "ui.publish": "Publish",
    "ui.analytics": "Analytics",
    "ui.selectCategory": "Select category",
    "ui.generateIcon": "Generate icon",
    "ui.copy": "Copy",
    "ui.update": "Update",
    "ui.manage": "Manage",
    "ui.write": "Write",
    "ui.biz": "Business",
    "ui.signin": "Sign in",
    "ui.signup": "Sign up",
    "ui.signup-free": "Join for free",
    "ui.signout": "Sign out",
    "ui.topup": "Top up",
    "ui.cancelCheckout": "Cancel checkout",
    "ui.credits": "Credits",
    "ui.login_required": "Please sign in to use modules!",
    "ui.contentVisibility": "Content Visibility",
    "ui.public": "Public",
    "ui.doc": "Documents",
    "ui.templates": "Templates",
    "ui.greeting": "Hi,",
    "ui.email": "Email",
    "ui.email_template": "Email Template",
    "ui.new_email_template": "New Email Template",
    "ui.select_email_template": "Select Email Template",
    "ui.email_template_subject": "Subject",
    "ui.email_template_primary_color": "Primary Color",
    "ui.email_template_header": "Header",
    "ui.email_template_text_before": "Text Before",
    "ui.email_template_app_name": "App Name",
    "ui.email_template_logo_url": "Logo URL",
    "ui.email_template_button_text": "Button Text",
    "ui.email_template_button_link": "Button Link",
    "ui.email_template_text_after": "Text After",
    "ui.password": "Password",
    "ui.profile": "Profile",
    "ui.promptLibrary": "Prompt Library",
    "ui.newPrompt": "New Prompt",
    "ui.selectPrompt": "Select a prompt",
    "ui.systemPrompt": "System Prompt",
    "ui.systemPromptHint": "You can enter basic requirements and ask AI to rewrite with [Write]",
    "ui.userPrompt": "User Prompt",
    "ui.userPromptHint": "Use USER_INPUT to insert user content.",
    "ui.aiWrite": "AI Write",
    "ui.fileManager": "Media Manager",
    "ui.fileManager.upload": "Drag and drop or click here to upload files.",
    "ui.module": "Modules",
    "ui.settings": "Settings",
    "ui.service": "Services",
    "ui.flashcard": "Flashcard",
    "ui.flashcardFront": "Front",
    "ui.flashcardBack": "Back",
    "ui.flashcardTopicSelect": "Select a topic",
    "ui.flashcardSubjectSelect": "Select a subject",
    "ui.flashcardContent": "Content",
    "ui.flashcardBulkContent": "Enter content or upload file",
    "ui.flashcardInstructions": "Custom instructions (optional)",
    "ui.flashcardInstructionsGuide": "Custom instructions for AI to generate flashcards like long or short choices, yes or no, etc.",
    "ui.flashcardBulkModel": "Model",
    "ui.flashcardGenerate": "Generate flashcards",
    "ui.flashcardBulkImprove": "Improve",
    "ui.flashcard.bulkOne": "Question and answer",
    "ui.flashcard.bulkTwo": "Multiple choice 2 options",
    "ui.flashcard.bulkThree": "Multiple choice 3 options",
    "ui.flashcard.bulkFour": "Multiple choice 4 options",
    "ui.topic": "Topic",
    "ui.card": "Card",
    "ui.bulk": "Bulk",
    "ui.subject": "Subject",
    "ui.newSubject": "New subject",
    "ui.membership": "Membership",
    "ui.membership.tier": "Membership tier",
    "ui.membership.empty": "No members yet",
    "ui.membership.optionalUsage": "Enable usage-based pricing",
    "ui.membership.optionalUsage.desc": "Apply to services using credits like AI",
    "ui.membership.optionalUsage.creditIncluded": "Included credits when payment. When used up, users need to buy more to continue using.",
    "ui.change_password": "Change password",
    "ui.current_password": "Current password",
    "ui.new_password": "New password",
    "ui.confirm_password": "Confirm password",
    "ui.back": "Back",
    "ui.save": "Save",
    "ui.saveAndAdd": "Save & Add another",
    "ui.apply": "Apply",
    "ui.remove": "Remove",
    "ui.name": "Full name",
    "ui.phone": "Phone",
    "ui.account": "Account",
    "ui.confirm_email": "Confirm Email",
    "ui.confirmation_token": "Confirmation Token",
    "ui.enter_confirmation_token": "Enter the token sent to your email",
    "ui.confirm": "Confirm",
    "ui.confirming_email": "Confirming Email",
    "ui.please_wait": "Please wait while we confirm your email...",
    "ui.email_confirmed": "Email Confirmed!",
    "ui.can_now_login": "Your email has been confirmed. You can now login to your account.",
    "ui.go_to_login": "Go to Login",
    "ui.confirmation_failed": "Confirmation Failed",
    "ui.go_home": "Go Home",
    "ui.tx_history": "Transaction History",
    "ui.tx_history_credit": "Credit",
    "ui.tx_history_tx": "Tx",
    "ui.tx_history_time": "Time",
    "ui.payment.momo": "Please scan the QR code to pay. Please do not close this window until the payment is successful.",
    "ui.payment.polar": "Please pay directly at Polar. Please do not close this window until the payment is successful.",
    "ui.payment.window-close": "This window will automatically close when the transaction is complete.",
    "ui.payment.quick-amount": "Quick Amount",
    "ui.payment.custom-amount": "Custom Amount",
    "ui.payment.total": "Total",
    "ui.payment.pay": "Pay",
    "ui.payment.app-free": "Creating your app is free with generous limits for basic services atm. We'll decide the pricing later.",
    "ui.payment.credit-info": "To use AI services, you need to top up credits. Credits are not expired and can be used in the entire nocapOS's ecosystem.",
    "ui.payment.credit-conversion": "Credit is calculated in USD, 1 USD = 10 credits.",
    "ui.developer_mode": "Developer Mode",
    "ui.developer_mode_desc": "Developer mode allows you to customize prompts and bring your own API keys.",
    "ui.name_desc": "Please use your real name to share or sell your apps. You can update only once.",
    "ui.ai-service-cta": "To use the following services, you need to sign in. Sign up for free. Only 15 seconds with Google Login.",
    "ui.service-ai": "AI Services",
    "ui.service-basic": "Basic Services",
    "ui.module.text_generation": "Text Generation",
    "ui.module.files_chat": "Multimodal Chat",
    "ui.module.custom_chat": "Custom Chat (Advanced)",
    "ui.module.image_generation": "Image Generation",
    "ui.module.image_generation_with_style": "Image Generation with Style",
    "ui.module.image_upscaling": "Image Upscaling",
    "ui.module.image_bg_editing": "Background Removal/Replacement",
    "ui.module.lora_training": "Lora Training",
    "ui.module.image_remixing": "Image Remixing",
    "ui.module.tryon": "Try-on",
    "ui.module.video_generation": "Image to Video",
    "ui.module.video_sync": "Sync Audio into Video",
    "ui.module.video_lora": "Lora Training",
    "ui.module.text_to_speech": "Text to Speech",
    "ui.module.speech_to_text": "Speech to Text",
    "ui.module.synthesize": "Music/SFX Synthesis",
    "ui.module.flashcard": "Flashcard",
    "ui.module.doc_extraction": "Document Extraction",
    "ui.module.youtube": "Get Youtube video/audio",
    "ui.module.kvDB": "Database",
    "ui.module.post": "Membership Content",
    "ui.module.email": "Email",
    "ui.module.hyberbolic": "Hyberbolic",
    "placeholder.describe": "Describe your idea and select services.",
    "placeholder.improve": "Request improvements...",
    "placeholder.deployCta": "Deploy & share your app with friends.",
    "page-biz.subtitle": "Domini for Your Business",
    "page-biz.title": "<h3><span>Tools that fit your business</span>,<br>not the other way around</h3>",
    "page-biz.copy1": "<p class='copy'>Empower employees to <span>easily create</span> internal tools and boost productivity.</p>",
    "page-biz.copy2": "<p class='copy'><span>No more months-long wait</span> for developers to integrate necessary features.</p>",
    "page-biz.copy3": "<p class='copy'><span>Absolute security</span> with self-hosted deployment and management.</p>",
    "page-biz.copy4": "<p class='copy'>Empower non-tech founders to <span>easily make MVPs and explore possibilities</span> — straight from your API.</p>",
    "page.partnerAgencyText": "Turn promising AI apps into full-scale products. Partner with non-tech founders to grow startups and share in the journey to success.",
    "page.partnerTechPartner": "Techincal Partner",
    "page.partnerTechPartnerCopy": "Build your reputation as an techincal expert while earning support fees.",
    "page.partnerDeveloper": "API Developer & Service Provider",
    "page.partnerDeveloperCopy": "Focus on your API expertise, skip the UI headaches. Provide AI services and earn recurring revenue.",
    "page.storeTagline": "Share or Sell your Apps 💰",
    "page.pricingTyInterest": "Thank you for your interest in Domini 💙!",
    "app.banner1": "Small, personal, AI web apps",
    "app.banner1.copy": "Easily turn ideas into AI applications without coding, helping you automate work, save 70% time and increase productivity 3x.",
    "app.banner2": "Apps for effortless learning and quizzing",
    "app.banner2.copy": "Transform learning into an exciting journey with smart applications, helping you learn effectively and grasp knowledge 150% faster.",
    "app.banner3": "Prototypes to test ideas",
    "app.banner3.copy": "Bring your ideas to life in minutes, don't let great ideas get lost due to technical barriers.",
    "app.banner4": "Internal tools to boost productivity",
    "app.banner4.copy": "Optimize internal workflows with applications designed specifically for your team.",
    "app.banner5": "UI for Backend APIs",
    "app.banner5.copy": "Create intuitive UIs for your APIs easily, without the headache of wrestling with divs.",
    "app.step1": "1. You enter idea",
    "app.step1.copy": "Describe your idea in a few sentences... and select services.",
    "app.step2": "2. Domini writes code",
    "app.step2.copy": "It takes a few minutes, typically under 2 minutes. Not hours nor days.",
    "app.step3": "3. You receive App",
    "app.step3.copy": "Your app is ready to use. You can improve it, share or sell it to others.",
    "app.note": "Guide and Tips",
    "app.guide": `Tips for writing effective prompts

Remember to add Services to your app. Upload screenshots or mockups if you have them.

1. For simple applications
- Describe directly and concisely. Examples:
"A colorful calculator for kids to learn math"

2. For complex applications
- Structure: "Help me build [type of app/tool] that [main purpose] for [target users]"
- Attach UI screenshots or describe necessary APIs
- The more detailed, the better
- The model works best iteratively - start small, then build up step by step (rather than 1-shot the big app at once)

Example, instead of 'Help me make a recipe app', try:
'Help me create a recipe manager that lets home cooks save and organize recipes by cuisine and dietary restrictions. I want to start with just the recipe input form and category tags.'"

3. Improving applications
- Chat to request changes and improvements after the first version
- Describe desired changes in detail

🐞 If there's an error, you can revert to a previous version. For developers, open the Console and copy the error into the chat for AI to resolve.

💡 Don't hesitate to experiment with different prompt writing styles.

For developers, you can throw your APIs like curl or python requests or javascript fetch and instruct Coder Agent to use them.
`
  },
  vi: {
    "domini.slogan": "Apps adapt to you",
    "domini.thinking": "Domini đang suy nghĩ...",
    "domini.planning": "Domini đang lập kế hoạch...",
    "domini.analysingImage": "Domini đang phân tích ảnh...",
    "domini.analysingImages": "Domini đang phân tích ảnh...",
    "domini.writingCode": "Domini đang viết mã...",
    "ui.idea": "Ý tưởng",
    "ui.code": "Mã nguồn",
    "ui.app": "App",
    "ui.make": "Tạo app",
    "ui.screenshot": "Ảnh mô tả",
    "ui.upload": "Tải lên",
    "ui.prompt": "Chỉ thị",
    "ui.membership": "Thành viên",
    "ui.clear": "Xóa",
    "ui.delete": "Xóa",
    "ui.uploadIcon": "Tải biểu tượng lên",
    "ui.stop": "Dừng",
    "ui.edit": "Chỉnh sửa",
    "ui.acceptEdit": "Xong",
    "ui.deploy": "Xuất bản",
    "ui.publish": "Đăng bán",
    "ui.analytics": "Thống kê",
    "ui.settings": "Cài đặt",
    "ui.open": "Mở",
    "ui.submit": "Gửi",
    "ui.usage": "Sử dụng",
    "ui.sidebar": "Thanh bên",
    "ui.history": "Lịch sử Phiên bản",
    "ui.send": "Gửi",
    "ui.fix": "Sửa lỗi",
    "ui.cancel": "Hủy",
    "ui.guide": "Hướng dẫn",
    "ui.tip": "Mẹo",
    "ui.reference": "Tham khảo",
    "ui.myapps": "Ứng dụng của tôi",
    "ui.store": "Cửa hàng",
    "ui.ecosystem": "Hệ sinh thái",
    "ui.company": "<công ty>",
    "ui.discord": "Nhóm hỗ trợ",
    "ui.price": "Giá bán",
    "ui.pricing": "Bảng giá",
    "ui.pricing.flatrate": "Một lần",
    "ui.pricing.usage": "Điểm nocap",
    "ui.pricing.free": "Giới hạn",
    "ui.pricing.flatrate.desc": "Người dùng chỉ cần thanh toán một lần để sở hữu trọn đời. Đặt giá 0 để tặng miễn phí.",
    "ui.pricing.flatrate.includes-code": "Bao gồm mã nguồn",
    "ui.pricing.usage.markup": "Tỉ lệ lợi nhuận",
    "ui.pricing.usage.markup-desc": "Người dùng nạp điểm nocap để sử dụng theo nhu cầu. Bạn có thể tùy chỉnh Tỉ lệ lợi nhuận để nhận được phần trăm lợi nhuận tương ứng khi họ sử dụng dịch vụ.",
    "ui.pricing.usage.free-desc": "Người dùng được sử dụng miễn phí với hạn mức sử dụng do bạn đặt ra. Bạn sẽ chịu phí thay cho người dùng.",
    "ui.pricing.one-time": "Một lần",
    "ui.pricing.one-time.desc": "Thành viên chỉ cần thanh toán một lần để tham gia trọn đời.",
    "ui.pricing.monthly": "Hàng tháng",
    "ui.pricing.monthly.desc": "Thành viên cần thanh toán định kỳ hàng tháng.",
    "ui.pricing.lifetime": "Trọn đời",
    "ui.pricing.free.usageCount": "Số lượt dùng",
    "ui.pricing.free.usageReload": "Nạp lại sau (giờ)",
    "ui.pricing.free.usageCta": "Thông báo khi hết lượt dùng",
    "ui.membership.tier": "Hạng thành viên",
    "ui.membership.empty": "Chưa có thành viên nào",
    "ui.membership.optionalUsage": "Tính thêm dựa vào mức sử dụng",
    "ui.membership.optionalUsage.desc": "Áp dụng cho các dịch vụ sử dụng điểm nocap như AI",
    "ui.membership.optionalUsage.creditIncluded": "Số lượng điểm nocap bao gồm sẵn khi thanh toán. Khi dùng hết, người dùng phải mua thêm để tiếp tục sử dụng.",
    "ui.billingOption": "Hình thức thanh toán",
    "ui.download": "Tải xuống",
    "ui.share": "Chia sẻ",
    "ui.share-copied": "Đã sao chép link chia sẻ",
    "ui.selectCategory": "Chọn phân nhóm",
    "ui.doc": "Tài liệu",
    "ui.generateIcon": "Tạo biểu tượng",
    "ui.edit-info": "Cập nhật",
    "ui.copy": "Sao chép",
    "ui.update": "Cập nhật",
    "ui.manage": "Quản lý",
    "ui.write": "Viết",
    "ui.biz": "Doanh nghiệp",
    "ui.signin": "Đăng nhập",
    "ui.signout": "Đăng xuất",
    "ui.signup": "Đăng ký",
    "ui.signup-free": "Tham gia miễn phí",
    "ui.login_required": "Vui lòng đăng nhập để sử dụng thành phần!",
    "ui.topup": "Nạp thêm",
    "ui.cancelCheckout": "Hủy giao dịch",
    "ui.credits": "điểm nocap",
    "ui.email": "Email",
    "ui.email_template": "Mẫu Email",
    "ui.new_email_template": "Mẫu Email mới",
    "ui.select_email_template": "Chọn mẫu Email",
    "ui.email_template_subject": "Chủ đề",
    "ui.email_template_primary_color": "Màu chủ đạo",
    "ui.email_template_header": "Tiêu đề",
    "ui.email_template_text_before": "Nội dung trước",
    "ui.email_template_app_name": "Tên ứng dụng",
    "ui.email_template_logo_url": "URL Logo",
    "ui.email_template_button_text": "Nút bấm",
    "ui.email_template_button_link": "Link nút bấm",
    "ui.email_template_text_after": "Nội dung sau",
    "ui.tx_history": "Lịch sử giao dịch",
    "ui.tx_history_credit": "Tín dụng",
    "ui.tx_history_tx": "Vào/Ra",
    "ui.tx_history_time": "Thời gian",
    "ui.payment.momo": "Hãy quét mã QR để thanh toán. Vui lòng không đóng cửa sổ này cho đến khi thanh toán thành công.",
    "ui.payment.polar": "Hãy thanh toán trực tiếp tại Polar. Vui lòng không đóng cửa sổ này cho đến khi thanh toán thành công.",
    "ui.payment.window-close": "Cửa sổ này sẽ tự động đóng khi giao dịch hoàn tất.",
    "ui.payment.quick-amount": "Nạp nhanh",
    "ui.payment.custom-amount": "Tuỳ chọn",
    "ui.payment.total": "Thành tiền",
    "ui.payment.pay": "Thanh toán",
    "ui.payment.credit-info": "Để sử dụng các dịch vụ AI, bạn cần nạp điểm nocap. Điểm nocap này không hết hạn, và bạn có thể sử dụng trong toàn bộ hệ sinh thái trên nocapOS.",
    "ui.payment.credit-conversion": "Tín dụng được tính theo USD, 1 USD = 10 điểm nocap.",
    "ui.payment.app-free": "Tạo app hiện miễn phí, với hạn mức sử dụng thoải mái cho các dịch vụ cơ bản.",
    "ui.password": "Mật khẩu",
    "ui.profile": "Hồ sơ",
    "ui.templates": "Mẫu",
    "ui.greeting": "Chào bạn,",
    "ui.module": "Thành phần",
    "ui.fileManager": "Quản lý media",
    "ui.fileManager.upload": "Kéo thả hoặc nhấn vào đây để tải tệp lên.",
    "ui.service": "Dịch vụ",
    "ui.flashcard": "Thẻ học tập (Flashcard)",
    "ui.flashcardFront": "Mặt trước",
    "ui.flashcardBack": "Mặt sau",
    "ui.flashcardTopicSelect": "Chọn chủ đề",
    "ui.flashcardSubjectSelect": "Chọn lĩnh vực",
    "ui.flashcardContent": "Nội dung",
    "ui.flashcardBulkContent": "Nhập nội dung hoặc tải file",
    "ui.flashcardGenerate": "Tạo thẻ",
    "ui.flashcardInstructions": "Chỉ thị (tuỳ chọn)",
    "ui.flashcardInstructionsGuide": "Chỉ thị cho AI tạo thẻ học tập, nội dung dài ngắn, trắc nghiệm 2 lựa chọn có/không",
    "ui.flashcardBulkImprove": "Tạo lại",
    "ui.flashcard.bulkOne": "Hỏi và trả lời",
    "ui.flashcard.bulkTwo": "Trắc nghiệm 2 lựa chọn",
    "ui.flashcard.bulkThree": "Trắc nghiệm 3 lựa chọn",
    "ui.flashcard.bulkFour": "Trắc nghiệm 4 lựa chọn",
    "ui.topic": "Chủ đề",
    "ui.subject": "Lĩnh vực",
    "ui.newSubject": "Lĩnh vực mới",
    "ui.card": "Thẻ",
    "ui.bulk": "Hàng loạt",
    "ui.contentVisibility": "Hiển thị Nội dung",
    "ui.public": "Công khai",
    "ui.aiWrite": "Viết với AI",
    "ui.promptLibrary": "Thư viện chỉ thị",
    "ui.newPrompt": "Chỉ thị mới",
    "ui.selectPrompt": "Chọn chỉ thị",
    "ui.systemPrompt": "Chỉ thị hệ thống",
    "ui.systemPromptHint": "Bạn có thể nhập yêu cầu cơ bản và nhờ AI viết lại với [Viết].",
    "ui.userPrompt": "Chỉ thị người dùng",
    "ui.userPromptHint": "Sử dụng USER_INPUT để chèn nội dung của người dùng.",
    "ui.change_password": "Đổi mật khẩu",
    "ui.current_password": "Mật khẩu hiện tại",
    "ui.new_password": "Mật khẩu mới",
    "ui.confirm_password": "Xác nhận mật khẩu",
    "ui.back": "Quay lại",
    "ui.favorite": "Yêu thích",
    "ui.save": "Lưu",
    "ui.saveAndAdd": "Lưu & Thêm",
    "ui.apply": "Áp dụng",
    "ui.remove": "Gỡ bỏ",
    "ui.name": "Họ tên",
    "ui.phone": "Số điện thoại",
    "ui.account": "Tài khoản",
    "ui.confirm_email": "Xác nhận Email",
    "ui.confirmation_token": "Mã xác nhận",
    "ui.enter_confirmation_token": "Nhập mã đã gửi đến email của bạn",
    "ui.confirm": "Xác nhận",
    "ui.confirming_email": "Đang xác nhận Email",
    "ui.please_wait": "Vui lòng đợi trong khi chúng tôi xác nhận email của bạn...",
    "ui.email_confirmed": "Đã xác nhận Email!",
    "ui.can_now_login": "Email của bạn đã được xác nhận. Bạn có thể đăng nhập vào tài khoản.",
    "ui.go_to_login": "Đến trang Đăng nhập",
    "ui.confirmation_failed": "Xác nhận thất bại",
    "ui.go_home": "Trở về trang chủ",
    "ui.developer_mode": "Chế độ phát triển",
    "ui.developer_mode_desc": "Chế độ phát triển cho phép bạn tùy chỉnh chỉ thị và sử dụng API của bạn.",
    "ui.name_desc": "Vui lòng sử dụng họ tên thật để chia sẻ hoặc bán ứng dụng của bạn. Bạn chỉ được cập nhật một lần.",
    "ui.ai-service-cta": "Để sử dụng các dịch vụ sau, bạn cần đăng nhập. Đăng ký miễn phí. Chỉ 15 giây với Google.",
    "ui.service-ai": "Dịch vụ AI",
    "ui.service-basic": "Dịch vụ cơ bản",
    "ui.module.text_generation": "Sáng tạo nội dung",
    "ui.module.files_chat": "Chat đa phương tiện",
    "ui.module.custom_chat": "Chat tuỳ biến (nâng cao)",
    "ui.module.image_generation": "Sáng tạo ảnh",
    "ui.module.image_generation_with_style": "Sáng tạo ảnh với style",
    "ui.module.image_remixing": "Sáng tạo ảnh với tham chiếu",
    "ui.module.lora_training": "Huấn luyện Lora",
    "ui.module.image_upscaling": "Tăng độ nét/phục chế ảnh",
    "ui.module.image_bg_editing": "Thay/Chỉnh sửa nền ảnh",
    "ui.module.tryon": "Ghép quần áo vào mẫu",
    "ui.module.video_generation": "Chuyển ảnh thành video",
    "ui.module.video_sync": "Đồng bộ âm thanh vào video",
    "ui.module.video_lora": "Huấn luyện Lora",
    "ui.module.text_to_speech": "Phát âm và đọc văn bản",
    "ui.module.speech_to_text": "Âm thanh thành văn bản",
    "ui.module.synthesize": "Tạo nhạc/SFX",
    "ui.module.flashcard": "Thẻ học tập (Flashcard)",
    "ui.module.doc_extraction": "Trích xuất văn bản",
    "ui.module.youtube": "Tải video/âm thanh Youtube",
    "ui.module.kvDB": "Cơ sở dữ liệu",
    "ui.module.post": "Nội dung thành viên",
    "ui.module.email": "Email",
    "ui.module.hyberbolic": "Hyberbolic",
    "placeholder.describe": "Mô tả ý tưởng của bạn và chọn dịch vụ.",
    "placeholder.improve": "Yêu cầu cải thiện...",
    "placeholder.deployCta": "Xuất bản & chia sẻ app với bạn bè.",
    "page-biz.subtitle": "Domini cho doanh nghiệp",
    "page-biz.title": "<h3><span>Công cụ phải phù hợp với doanh nghiệp của bạn,</span><br>không phải ngược lại.</h3>",
    "page-biz.copy1": "<p class='copy'><span>Nhân viên dễ dàng</span> tạo công cụ nội bộ, nâng cao năng suất làm việc.</p>",
    "page-biz.copy2": "<p class='copy'><span>Không cần chờ đợi hàng tháng</span> để nhà phát triển tích hợp tính năng cần thiết.</p>",
    "page-biz.copy3": "<p class='copy'><span>Bảo mật tuyệt đối</span>, doanh nghiệp tự triển khai và quản lý.</p>",
    "page-biz.copy4": "<p class='copy'>Giúp founder không chuyên tech <span>dễ dàng tạo MVP và khám phá tiềm năng</span> từ API của bạn.</p>",
    "page.partnerAgencyText": "Hãy đồng hành cùng các nhà sáng lập không chuyên để phát triển startup và cùng chia sẻ hành trình đến thành công.",
    "page.partnerTechPartner": "Đối tác Kỹ thuật",
    "page.partnerTechPartnerCopy": "Xây dựng danh tiếng của bạn là một chuyên gia kỹ thuật đồng thời kiếm thu nhập từ phí hỗ trợ.",
    "page.partnerDeveloper": "Nhà phát triển API & Cung cấp dịch vụ",
    "page.partnerDeveloperCopy": "Bỏ qua sự nhức đầu về giao diện, bạn chỉ cần tập trung vào chuyên môn về hậu cần. Hãy cung cấp API và dịch vụ để tạo thu nhập định kỳ.",
    "page.storeTagline": "Chia sẻ hoặc Bán app của bạn 💰",
    "page.pricingTyInterest": "Cảm ơn bạn đã quan tâm đến Domini 💙!",
    "app.banner1": "Ứng dụng web AI, cá nhân, nhỏ gọn",
    "app.banner1.copy": "Dễ dàng biến ý tưởng thành ứng dụng AI mà không cần viết mã, giúp bạn tự động hóa công việc, tiết kiệm 70% thời gian và tăng năng suất gấp 3 lần.",
    "app.banner2": "Ứng dụng để học tập hiệu quả",
    "app.banner2.copy": "Biến việc học thành hành trình thú vị với các ứng dụng thông minh, giúp bạn học hiệu quả và nắm bắt kiến thức nhanh hơn 150%.",
    "app.banner3": "Bản thử nghiệm nhanh ý tưởng",
    "app.banner3.copy": "Hiện thực hóa ý tưởng của bạn trong vài phút, không để những ý tưởng tuyệt vời bị bỏ lỡ vì rào cản kỹ thuật.",
    "app.banner4": "Công cụ nội bộ để tăng năng suất",
    "app.banner4.copy": "Tối ưu hóa quy trình làm việc nội bộ với các ứng dụng được thiết kế riêng cho đội nhóm của bạn.",
    "app.banner5": "UI cho backend API",
    "app.banner5.copy": "Tạo UI trực quan cho API của bạn dễ dàng, không cần phải nhức đầu vật lộn canh giữa div.",
    "app.step1": "1. Bạn nhập ý tưởng",
    "app.step1.copy": "Mô tả ý tưởng của bạn trong vài câu... và chọn dịch vụ.",
    "app.step2": "2. Domini viết mã",
    "app.step2.copy": "Thường chỉ mất 2 phút. Không phải vài giờ hay ngày.",
    "app.step3": "3. Bạn nhận App",
    "app.step3.copy": "Ứng dụng của bạn đã sẵn sàng sử dụng. Bạn có thể cải thiện nó, chia sẻ hoặc bán cho người khác.",
    "app.note": "Hướng dẫn và mẹo",
    "app.guide": `Mẹo viết prompt hiệu quả

Tập trung vào 1 đến 3 chức năng chính.
Nhớ chọn thêm Dịch vụ cần thiết. Đính kèm ảnh mô tả hoặc mockup nếu có.

1. Với ứng dụng đơn giản với 1 chức năng chính
- Mô tả trực tiếp và ngắn gọn. Ví dụ:
"Ứng dụng máy tính đầy màu sắc giúp cho trẻ học toán."

2. Với ứng dụng từ 2 chức năng trở lên
- Cấu trúc: "Tạo app cho (đối tượng) để (mục đích) (bối cảnh)"
- Thêm ảnh mô tả, hoặc API cần thiết
- Càng chi tiết và rõ ràng càng tốt

3. Cải thiện ứng dụng
- Chat để yêu cầu thay đổi và cải tiến sau phiên bản đầu tiên
- Sử dụng tính năng chụp ảnh để đánh dấu vùng cần sửa
- Mô tả chi tiết những thay đổi mong muốn
- Nếu có lỗi thì bạn có thể chọn lại phiên bản trước, hoặc sửa lỗi với chat.
💡 Đừng ngại thử nghiệm các cách viết prompt khác nhau.

[dev]
- Mở console rồi copy lỗi vào chat để AI giải quyết.
- Thả API của bạn (curl, python requests, javascript fetch, ...) vào chat để Coder Agent sử dụng.`
  }
}, ys = gs("en");
function $l(e, t, n) {
  let i = Al[e][t];
  if (!i) throw new Error(`no translation found for ${e}.${t}`);
  return Object.keys(n).map((r) => {
    const o = new RegExp(`{{${r}}}`, "g");
    i = i.replace(o, n[r]);
  }), i;
}
const Gn = ul(
  ys,
  (e) => (t, n = {}) => $l(e, t, n)
), Il = async ({ model: e, messages: t }) => (await (await fetch(globalThis._DOMINI_BASE_URL + "/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${globalThis._DOMINI_API_KEY}`
  },
  body: JSON.stringify({
    model: e,
    messages: t,
    temperature: 0,
    stream: !1
  })
})).json()).choices[0].message.content, Pl = (e, t) => Il({
  model: globalThis._DOMINI_VISON_MODEL ?? "Qwen/Qwen2-VL-72B-Instruct",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: e },
        { type: "image_url", image_url: { url: t } }
      ]
    }
  ]
});
function Ol(e) {
  return new Promise((t) => {
    const n = new FileReader();
    n.onload = function(i) {
      t(i.target.result);
    }, n.readAsDataURL(e);
  });
}
const lo = async (e, t) => {
  let n = [];
  for (let i of t) {
    const r = await Pl(e, await Ol(i));
    n.push(r);
  }
  return n;
};
"stream" in Blob.prototype || Object.defineProperty(Blob.prototype, "stream", { value() {
  return new Response(this).body;
} }), "setBigUint64" in DataView.prototype || Object.defineProperty(DataView.prototype, "setBigUint64", { value(e, t, n) {
  const i = Number(0xffffffffn & t), r = Number(t >> 32n);
  this.setUint32(e + (n ? 0 : 4), i, n), this.setUint32(e + (n ? 4 : 0), r, n);
} });
var xn = (e) => new DataView(new ArrayBuffer(e)), Ht = (e) => new Uint8Array(e.buffer || e), gn = (e) => new TextEncoder().encode(String(e)), an = (e) => Math.min(4294967295, Number(e)), co = (e) => Math.min(65535, Number(e));
function Ml(e, t) {
  if (t === void 0 || t instanceof Date || (t = new Date(t)), e instanceof File) return { isFile: 1, t: t || new Date(e.lastModified), i: e.stream() };
  if (e instanceof Response) return { isFile: 1, t: t || new Date(e.headers.get("Last-Modified") || Date.now()), i: e.body };
  if (t === void 0) t = /* @__PURE__ */ new Date();
  else if (isNaN(t)) throw new Error("Invalid modification date.");
  if (e === void 0) return { isFile: 0, t };
  if (typeof e == "string") return { isFile: 1, t, i: gn(e) };
  if (e instanceof Blob) return { isFile: 1, t, i: e.stream() };
  if (e instanceof Uint8Array || e instanceof ReadableStream) return { isFile: 1, t, i: e };
  if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return { isFile: 1, t, i: Ht(e) };
  if (Symbol.asyncIterator in e) return { isFile: 1, t, i: bs(e[Symbol.asyncIterator]()) };
  throw new TypeError("Unsupported input format.");
}
function bs(e, t = e) {
  return new ReadableStream({ async pull(n) {
    let i = 0;
    for (; n.desiredSize > i; ) {
      const r = await e.next();
      if (!r.value) {
        n.close();
        break;
      }
      {
        const o = Rl(r.value);
        n.enqueue(o), i += o.byteLength;
      }
    }
  }, cancel(n) {
    var i;
    (i = t.throw) == null || i.call(t, n);
  } });
}
function Rl(e) {
  return typeof e == "string" ? gn(e) : e instanceof Uint8Array ? e : Ht(e);
}
function ws(e, t, n) {
  let [i, r] = function(o) {
    return o ? o instanceof Uint8Array ? [o, 1] : ArrayBuffer.isView(o) || o instanceof ArrayBuffer ? [Ht(o), 1] : [gn(o), 0] : [void 0, 0];
  }(t);
  if (e instanceof File) return { o: Qi(i || gn(e.name)), u: BigInt(e.size), l: r };
  if (e instanceof Response) {
    const o = e.headers.get("content-disposition"), s = o && o.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i), u = s && s[1] || e.url && new URL(e.url).pathname.split("/").findLast(Boolean), d = u && decodeURIComponent(u), a = n || +e.headers.get("content-length");
    return { o: Qi(i || gn(d)), u: BigInt(a), l: r };
  }
  return i = Qi(i, e !== void 0 || n !== void 0), typeof e == "string" ? { o: i, u: BigInt(gn(e).length), l: r } : e instanceof Blob ? { o: i, u: BigInt(e.size), l: r } : e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? { o: i, u: BigInt(e.byteLength), l: r } : { o: i, u: Ul(e, n), l: r };
}
function Ul(e, t) {
  return t > -1 ? BigInt(t) : e ? void 0 : 0n;
}
function Qi(e, t = 1) {
  if (!e || e.every((n) => n === 47)) throw new Error("The file must have a name.");
  if (t) for (; e[e.length - 1] === 47; ) e = e.subarray(0, -1);
  else e[e.length - 1] !== 47 && (e = new Uint8Array([...e, 47]));
  return e;
}
var _s = new Uint32Array(256);
for (let e = 0; e < 256; ++e) {
  let t = e;
  for (let n = 0; n < 8; ++n) t = t >>> 1 ^ (1 & t && 3988292384);
  _s[e] = t;
}
function uo(e, t = 0) {
  t ^= -1;
  for (var n = 0, i = e.length; n < i; n++) t = t >>> 8 ^ _s[255 & t ^ e[n]];
  return (-1 ^ t) >>> 0;
}
function xs(e, t, n = 0) {
  const i = e.getSeconds() >> 1 | e.getMinutes() << 5 | e.getHours() << 11, r = e.getDate() | e.getMonth() + 1 << 5 | e.getFullYear() - 1980 << 9;
  t.setUint16(n, i, 1), t.setUint16(n + 2, r, 1);
}
function Nl({ o: e, l: t }, n) {
  return 8 * (!t || (n ?? function(i) {
    try {
      jl.decode(i);
    } catch {
      return 0;
    }
    return 1;
  }(e)));
}
var jl = new TextDecoder("utf8", { fatal: 1 });
function Bl(e, t = 0) {
  const n = xn(30);
  return n.setUint32(0, 1347093252), n.setUint32(4, 754976768 | t), xs(e.t, n, 10), n.setUint16(26, e.o.length, 1), Ht(n);
}
async function* Ll(e) {
  let { i: t } = e;
  if ("then" in t && (t = await t), t instanceof Uint8Array) yield t, e.m = uo(t, 0), e.u = BigInt(t.length);
  else {
    e.u = 0n;
    const n = t.getReader();
    for (; ; ) {
      const { value: i, done: r } = await n.read();
      if (r) break;
      e.m = uo(i, e.m), e.u += BigInt(i.length), yield i;
    }
  }
}
function Fl(e, t) {
  const n = xn(16 + (t ? 8 : 0));
  return n.setUint32(0, 1347094280), n.setUint32(4, e.isFile ? e.m : 0, 1), t ? (n.setBigUint64(8, e.u, 1), n.setBigUint64(16, e.u, 1)) : (n.setUint32(8, an(e.u), 1), n.setUint32(12, an(e.u), 1)), Ht(n);
}
function Vl(e, t, n = 0, i = 0) {
  const r = xn(46);
  return r.setUint32(0, 1347092738), r.setUint32(4, 755182848), r.setUint16(8, 2048 | n), xs(e.t, r, 12), r.setUint32(16, e.isFile ? e.m : 0, 1), r.setUint32(20, an(e.u), 1), r.setUint32(24, an(e.u), 1), r.setUint16(28, e.o.length, 1), r.setUint16(30, i, 1), r.setUint16(40, e.isFile ? 33204 : 16893, 1), r.setUint32(42, an(t), 1), Ht(r);
}
function ql(e, t, n) {
  const i = xn(n);
  return i.setUint16(0, 1, 1), i.setUint16(2, n - 4, 1), 16 & n && (i.setBigUint64(4, e.u, 1), i.setBigUint64(12, e.u, 1)), i.setBigUint64(n - 8, t, 1), Ht(i);
}
function ks(e) {
  return e instanceof File || e instanceof Response ? [[e], [e]] : [[e.input, e.name, e.size], [e.input, e.lastModified]];
}
var Wl = (e) => function(t) {
  let n = BigInt(22), i = 0n, r = 0;
  for (const o of t) {
    if (!o.o) throw new Error("Every file must have a non-empty name.");
    if (o.u === void 0) throw new Error(`Missing size for file "${new TextDecoder().decode(o.o)}".`);
    const s = o.u >= 0xffffffffn, u = i >= 0xffffffffn;
    i += BigInt(46 + o.o.length + (s && 8)) + o.u, n += BigInt(o.o.length + 46 + (12 * u | 28 * s)), r || (r = s);
  }
  return (r || i >= 0xffffffffn) && (n += BigInt(76)), n + i;
}(function* (t) {
  for (const n of t) yield ws(...ks(n)[0]);
}(e));
function zl(e, t = {}) {
  const n = { "Content-Type": "application/zip", "Content-Disposition": "attachment" };
  return (typeof t.length == "bigint" || Number.isInteger(t.length)) && t.length > 0 && (n["Content-Length"] = String(t.length)), t.metadata && (n["Content-Length"] = String(Wl(t.metadata))), new Response(Hl(e, t), { headers: n });
}
function Hl(e, t = {}) {
  const n = function(i) {
    var o;
    const r = i[Symbol.iterator in i ? Symbol.iterator : Symbol.asyncIterator]();
    return { async next() {
      const s = await r.next();
      if (s.done) return s;
      const [u, d] = ks(s.value);
      return { done: 0, value: Object.assign(Ml(...d), ws(...u)) };
    }, throw: (o = r.throw) == null ? void 0 : o.bind(r), [Symbol.asyncIterator]() {
      return this;
    } };
  }(e);
  return bs(async function* (i, r) {
    const o = [];
    let s = 0n, u = 0n, d = 0;
    for await (const f of i) {
      const m = Nl(f, r.buffersAreUTF8);
      yield Bl(f, m), yield new Uint8Array(f.o), f.isFile && (yield* Ll(f));
      const g = f.u >= 0xffffffffn, x = 12 * (s >= 0xffffffffn) | 28 * g;
      yield Fl(f, g), o.push(Vl(f, s, m, x)), o.push(f.o), x && o.push(ql(f, s, x)), g && (s += 8n), u++, s += BigInt(46 + f.o.length) + f.u, d || (d = g);
    }
    let a = 0n;
    for (const f of o) yield f, a += BigInt(f.length);
    if (d || s >= 0xffffffffn) {
      const f = xn(76);
      f.setUint32(0, 1347094022), f.setBigUint64(4, BigInt(44), 1), f.setUint32(12, 755182848), f.setBigUint64(24, u, 1), f.setBigUint64(32, u, 1), f.setBigUint64(40, a, 1), f.setBigUint64(48, s, 1), f.setUint32(56, 1347094023), f.setBigUint64(64, s + a, 1), f.setUint32(72, 1, 1), yield Ht(f);
    }
    const h = xn(22);
    h.setUint32(0, 1347093766), h.setUint16(8, co(u), 1), h.setUint16(10, co(u), 1), h.setUint32(12, an(a), 1), h.setUint32(16, an(s), 1), yield Ht(h);
  }(n, t), n);
}
for (var Zi = 256, Yl = []; Zi--; ) Yl[Zi] = (Zi + 256).toString(16).substring(1);
const Gl = (e, t) => {
  const n = typeof e == "string" ? e : URL.createObjectURL(e), i = document.createElement("a");
  i.href = n, i.target = "_blank", i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(n);
}, Jl = async (e, t) => {
  const n = await zl(e).blob();
  Gl(n, t);
}, Kl = () => {
  const e = localStorage.getItem("locale");
  if (e) return e;
  let t = navigator.language.slice(0, 2);
  return ["vi", "en"].includes(t) || (t = "en"), t;
}, fo = (e) => JSON.parse(JSON.stringify(e)), Xl = (e) => e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" "), Ql = async (e) => {
  try {
    await navigator.clipboard.writeText(e);
  } catch {
    alert("Failed to copy text. Please enable clipboard access.");
  }
}, ho = async () => {
  const t = await (await fetch("/api_docs.xml")).text();
  return Object.fromEntries(
    [...t.matchAll(/<(\w+)>([\s\S]*?)<\/\1>/g)].map(([i, r, o]) => [r, o])
  );
}, Zl = ["General", "Business", "Education", "Entertainment", "Finance", "Health & Fitness", "Lifestyle", "Medical", "Photo & Video", "Productivity", "Reference", "Shopping", "Travel", "Utilities"];
var ec = /* @__PURE__ */ Re('<div class="loading-indicator svelte-gvqbsd"><svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="#8e4ec6" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"></animate></rect><rect width="10" height="10" x="1" y="13" fill="#8e4ec6" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"></animate></rect><rect width="10" height="10" x="13" y="13" fill="#8e4ec6" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"></animate></rect></svg></div>');
function tc(e, t) {
  var n = ec();
  Je(() => st(n, "hidden", !t.show)), Ae(e, n);
}
const nc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ic = {
  start: "end",
  end: "start"
};
function jr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kn(e) {
  return e.split("-")[0];
}
function Ai(e) {
  return e.split("-")[1];
}
function rc(e) {
  return e === "x" ? "y" : "x";
}
function Ss(e) {
  return e === "y" ? "height" : "width";
}
function jn(e) {
  return ["top", "bottom"].includes(kn(e)) ? "y" : "x";
}
function Es(e) {
  return rc(jn(e));
}
function oc(e, t, n) {
  n === void 0 && (n = !1);
  const i = Ai(e), r = Es(e), o = Ss(r);
  let s = r === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = yi(s)), [s, yi(s)];
}
function sc(e) {
  const t = yi(e);
  return [mr(e), t, mr(t)];
}
function mr(e) {
  return e.replace(/start|end/g, (t) => ic[t]);
}
function ac(e, t, n) {
  const i = ["left", "right"], r = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : i : t ? i : r;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function lc(e, t, n, i) {
  const r = Ai(e);
  let o = ac(kn(e), n === "start", i);
  return r && (o = o.map((s) => s + "-" + r), t && (o = o.concat(o.map(mr)))), o;
}
function yi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nc[t]);
}
function cc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function uc(e) {
  return typeof e != "number" ? cc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bi(e) {
  const {
    x: t,
    y: n,
    width: i,
    height: r
  } = e;
  return {
    width: i,
    height: r,
    top: n,
    left: t,
    right: t + i,
    bottom: n + r,
    x: t,
    y: n
  };
}
function po(e, t, n) {
  let {
    reference: i,
    floating: r
  } = e;
  const o = jn(t), s = Es(t), u = Ss(s), d = kn(t), a = o === "y", h = i.x + i.width / 2 - r.width / 2, f = i.y + i.height / 2 - r.height / 2, m = i[u] / 2 - r[u] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: h,
        y: i.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: h,
        y: i.y + i.height
      };
      break;
    case "right":
      g = {
        x: i.x + i.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: i.x - r.width,
        y: f
      };
      break;
    default:
      g = {
        x: i.x,
        y: i.y
      };
  }
  switch (Ai(t)) {
    case "start":
      g[s] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      g[s] += m * (n && a ? -1 : 1);
      break;
  }
  return g;
}
const fc = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s
  } = n, u = o.filter(Boolean), d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let a = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: h,
    y: f
  } = po(a, i, d), m = i, g = {}, x = 0;
  for (let E = 0; E < u.length; E++) {
    const {
      name: L,
      fn: q
    } = u[E], {
      x: X,
      y: U,
      data: Q,
      reset: G
    } = await q({
      x: h,
      y: f,
      initialPlacement: i,
      placement: m,
      strategy: r,
      middlewareData: g,
      rects: a,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = X ?? h, f = U ?? f, g = {
      ...g,
      [L]: {
        ...g[L],
        ...Q
      }
    }, G && x <= 50 && (x++, typeof G == "object" && (G.placement && (m = G.placement), G.rects && (a = G.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : G.rects), {
      x: h,
      y: f
    } = po(a, m, d)), E = -1);
  }
  return {
    x: h,
    y: f,
    placement: m,
    strategy: r,
    middlewareData: g
  };
};
async function dc(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: r,
    platform: o,
    rects: s,
    elements: u,
    strategy: d
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = jr(t, e), x = uc(g), L = u[m ? f === "floating" ? "reference" : "floating" : f], q = bi(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(L))) == null || n ? L : L.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)),
    boundary: a,
    rootBoundary: h,
    strategy: d
  })), X = f === "floating" ? {
    x: i,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, U = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u.floating)), Q = await (o.isElement == null ? void 0 : o.isElement(U)) ? await (o.getScale == null ? void 0 : o.getScale(U)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, G = bi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: X,
    offsetParent: U,
    strategy: d
  }) : X);
  return {
    top: (q.top - G.top + x.top) / Q.y,
    bottom: (G.bottom - q.bottom + x.bottom) / Q.y,
    left: (q.left - G.left + x.left) / Q.x,
    right: (G.right - q.right + x.right) / Q.x
  };
}
const hc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: r,
        middlewareData: o,
        rects: s,
        initialPlacement: u,
        platform: d,
        elements: a
      } = t, {
        mainAxis: h = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: E = !0,
        ...L
      } = jr(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const q = kn(r), X = jn(u), U = kn(u) === u, Q = await (d.isRTL == null ? void 0 : d.isRTL(a.floating)), G = m || (U || !E ? [yi(u)] : sc(u)), ee = x !== "none";
      !m && ee && G.push(...lc(u, E, x, Q));
      const Ee = [u, ...G], Z = await dc(t, L), D = [];
      let ve = ((i = o.flip) == null ? void 0 : i.overflows) || [];
      if (h && D.push(Z[q]), f) {
        const K = oc(r, s, Q);
        D.push(Z[K[0]], Z[K[1]]);
      }
      if (ve = [...ve, {
        placement: r,
        overflows: D
      }], !D.every((K) => K <= 0)) {
        var ne, be;
        const K = (((ne = o.flip) == null ? void 0 : ne.index) || 0) + 1, H = Ee[K];
        if (H)
          return {
            data: {
              index: K,
              overflows: ve
            },
            reset: {
              placement: H
            }
          };
        let N = (be = ve.filter((j) => j.overflows[0] <= 0).sort((j, W) => j.overflows[1] - W.overflows[1])[0]) == null ? void 0 : be.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var Se;
              const j = (Se = ve.filter((W) => {
                if (ee) {
                  const ce = jn(W.placement);
                  return ce === X || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ce === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((ce) => ce > 0).reduce((ce, de) => ce + de, 0)]).sort((W, ce) => W[1] - ce[1])[0]) == null ? void 0 : Se[0];
              j && (N = j);
              break;
            }
            case "initialPlacement":
              N = u;
              break;
          }
        if (r !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
async function pc(e, t) {
  const {
    placement: n,
    platform: i,
    elements: r
  } = e, o = await (i.isRTL == null ? void 0 : i.isRTL(r.floating)), s = kn(n), u = Ai(n), d = jn(n) === "y", a = ["left", "top"].includes(s) ? -1 : 1, h = o && d ? -1 : 1, f = jr(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: x
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return u && typeof x == "number" && (g = u === "end" ? x * -1 : x), d ? {
    x: g * h,
    y: m * a
  } : {
    x: m * a,
    y: g * h
  };
}
const mc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: r,
        y: o,
        placement: s,
        middlewareData: u
      } = t, d = await pc(t, e);
      return s === ((n = u.offset) == null ? void 0 : n.placement) && (i = u.arrow) != null && i.alignmentOffset ? {} : {
        x: r + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: s
        }
      };
    }
  };
}, mo = Math.min, On = Math.max, wi = Math.round, Mt = (e) => ({
  x: e,
  y: e
});
function $i() {
  return typeof window < "u";
}
function An(e) {
  return Ts(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kt(e) {
  var t;
  return (t = (Ts(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ts(e) {
  return $i() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function Tt(e) {
  return $i() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function Ut(e) {
  return $i() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function go(e) {
  return !$i() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
function Jn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: i,
    display: r
  } = Ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(r);
}
function gc(e) {
  return ["table", "td", "th"].includes(An(e));
}
function Ii(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Br(e) {
  const t = Lr(), n = Tt(e) ? Ct(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((i) => n[i] ? n[i] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((i) => (n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (n.contain || "").includes(i));
}
function vc(e) {
  let t = en(e);
  for (; Ut(t) && !Sn(t); ) {
    if (Br(t))
      return t;
    if (Ii(t))
      return null;
    t = en(t);
  }
  return null;
}
function Lr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Sn(e) {
  return ["html", "body", "#document"].includes(An(e));
}
function Ct(e) {
  return bt(e).getComputedStyle(e);
}
function Pi(e) {
  return Tt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function en(e) {
  if (An(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    go(e) && e.host || // Fallback.
    Kt(e)
  );
  return go(t) ? t.host : t;
}
function Cs(e) {
  const t = en(e);
  return Sn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ut(t) && Jn(t) ? t : Cs(t);
}
function gr(e, t, n) {
  var i;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Cs(e), o = r === ((i = e.ownerDocument) == null ? void 0 : i.body), s = bt(r);
  if (o) {
    const u = vr(s);
    return t.concat(s, s.visualViewport || [], Jn(r) ? r : [], u && n ? gr(u) : []);
  }
  return t.concat(r, gr(r, [], n));
}
function vr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ds(e) {
  const t = Ct(e);
  let n = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const r = Ut(e), o = r ? e.offsetWidth : n, s = r ? e.offsetHeight : i, u = wi(n) !== o || wi(i) !== s;
  return u && (n = o, i = s), {
    width: n,
    height: i,
    $: u
  };
}
function As(e) {
  return Tt(e) ? e : e.contextElement;
}
function wn(e) {
  const t = As(e);
  if (!Ut(t))
    return Mt(1);
  const n = t.getBoundingClientRect(), {
    width: i,
    height: r,
    $: o
  } = Ds(t);
  let s = (o ? wi(n.width) : n.width) / i, u = (o ? wi(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: s,
    y: u
  };
}
const yc = /* @__PURE__ */ Mt(0);
function $s(e) {
  const t = bt(e);
  return !Lr() || !t.visualViewport ? yc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bt(e) ? !1 : t;
}
function Bn(e, t, n, i) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = As(e);
  let s = Mt(1);
  t && (i ? Tt(i) && (s = wn(i)) : s = wn(e));
  const u = bc(o, n, i) ? $s(o) : Mt(0);
  let d = (r.left + u.x) / s.x, a = (r.top + u.y) / s.y, h = r.width / s.x, f = r.height / s.y;
  if (o) {
    const m = bt(o), g = i && Tt(i) ? bt(i) : i;
    let x = m, E = vr(x);
    for (; E && i && g !== x; ) {
      const L = wn(E), q = E.getBoundingClientRect(), X = Ct(E), U = q.left + (E.clientLeft + parseFloat(X.paddingLeft)) * L.x, Q = q.top + (E.clientTop + parseFloat(X.paddingTop)) * L.y;
      d *= L.x, a *= L.y, h *= L.x, f *= L.y, d += U, a += Q, x = bt(E), E = vr(x);
    }
  }
  return bi({
    width: h,
    height: f,
    x: d,
    y: a
  });
}
function Fr(e, t) {
  const n = Pi(e).scrollLeft;
  return t ? t.left + n : Bn(Kt(e)).left + n;
}
function Is(e, t, n) {
  n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = i.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Fr(e, i)
  )), o = i.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function wc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: i,
    strategy: r
  } = e;
  const o = r === "fixed", s = Kt(i), u = t ? Ii(t.floating) : !1;
  if (i === s || u && o)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Mt(1);
  const h = Mt(0), f = Ut(i);
  if ((f || !f && !o) && ((An(i) !== "body" || Jn(s)) && (d = Pi(i)), Ut(i))) {
    const g = Bn(i);
    a = wn(i), h.x = g.x + i.clientLeft, h.y = g.y + i.clientTop;
  }
  const m = s && !f && !o ? Is(s, d, !0) : Mt(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - d.scrollLeft * a.x + h.x + m.x,
    y: n.y * a.y - d.scrollTop * a.y + h.y + m.y
  };
}
function _c(e) {
  return Array.from(e.getClientRects());
}
function xc(e) {
  const t = Kt(e), n = Pi(e), i = e.ownerDocument.body, r = On(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), o = On(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let s = -n.scrollLeft + Fr(e);
  const u = -n.scrollTop;
  return Ct(i).direction === "rtl" && (s += On(t.clientWidth, i.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: u
  };
}
function kc(e, t) {
  const n = bt(e), i = Kt(e), r = n.visualViewport;
  let o = i.clientWidth, s = i.clientHeight, u = 0, d = 0;
  if (r) {
    o = r.width, s = r.height;
    const a = Lr();
    (!a || a && t === "fixed") && (u = r.offsetLeft, d = r.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: u,
    y: d
  };
}
function Sc(e, t) {
  const n = Bn(e, !0, t === "fixed"), i = n.top + e.clientTop, r = n.left + e.clientLeft, o = Ut(e) ? wn(e) : Mt(1), s = e.clientWidth * o.x, u = e.clientHeight * o.y, d = r * o.x, a = i * o.y;
  return {
    width: s,
    height: u,
    x: d,
    y: a
  };
}
function vo(e, t, n) {
  let i;
  if (t === "viewport")
    i = kc(e, n);
  else if (t === "document")
    i = xc(Kt(e));
  else if (Tt(t))
    i = Sc(t, n);
  else {
    const r = $s(e);
    i = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return bi(i);
}
function Ps(e, t) {
  const n = en(e);
  return n === t || !Tt(n) || Sn(n) ? !1 : Ct(n).position === "fixed" || Ps(n, t);
}
function Ec(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let i = gr(e, [], !1).filter((u) => Tt(u) && An(u) !== "body"), r = null;
  const o = Ct(e).position === "fixed";
  let s = o ? en(e) : e;
  for (; Tt(s) && !Sn(s); ) {
    const u = Ct(s), d = Br(s);
    !d && u.position === "fixed" && (r = null), (o ? !d && !r : !d && u.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Jn(s) && !d && Ps(e, s)) ? i = i.filter((h) => h !== s) : r = u, s = en(s);
  }
  return t.set(e, i), i;
}
function Tc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: i,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? Ii(t) ? [] : Ec(t, this._c) : [].concat(n), i], u = s[0], d = s.reduce((a, h) => {
    const f = vo(t, h, r);
    return a.top = On(f.top, a.top), a.right = mo(f.right, a.right), a.bottom = mo(f.bottom, a.bottom), a.left = On(f.left, a.left), a;
  }, vo(t, u, r));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Cc(e) {
  const {
    width: t,
    height: n
  } = Ds(e);
  return {
    width: t,
    height: n
  };
}
function Dc(e, t, n) {
  const i = Ut(t), r = Kt(t), o = n === "fixed", s = Bn(e, !0, o, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Mt(0);
  if (i || !i && !o)
    if ((An(t) !== "body" || Jn(r)) && (u = Pi(t)), i) {
      const m = Bn(t, !0, o, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else r && (d.x = Fr(r));
  const a = r && !i && !o ? Is(r, u) : Mt(0), h = s.left + u.scrollLeft - d.x - a.x, f = s.top + u.scrollTop - d.y - a.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function er(e) {
  return Ct(e).position === "static";
}
function yo(e, t) {
  if (!Ut(e) || Ct(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Kt(e) === n && (n = n.ownerDocument.body), n;
}
function Os(e, t) {
  const n = bt(e);
  if (Ii(e))
    return n;
  if (!Ut(e)) {
    let r = en(e);
    for (; r && !Sn(r); ) {
      if (Tt(r) && !er(r))
        return r;
      r = en(r);
    }
    return n;
  }
  let i = yo(e, t);
  for (; i && gc(i) && er(i); )
    i = yo(i, t);
  return i && Sn(i) && er(i) && !Br(i) ? n : i || vc(e) || n;
}
const Ac = async function(e) {
  const t = this.getOffsetParent || Os, n = this.getDimensions, i = await n(e.floating);
  return {
    reference: Dc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function $c(e) {
  return Ct(e).direction === "rtl";
}
const Ic = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wc,
  getDocumentElement: Kt,
  getClippingRect: Tc,
  getOffsetParent: Os,
  getElementRects: Ac,
  getClientRects: _c,
  getDimensions: Cc,
  getScale: wn,
  isElement: Tt,
  isRTL: $c
}, Pc = mc, Oc = hc, Mc = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), r = {
    platform: Ic,
    ...n
  }, o = {
    ...r.platform,
    _c: i
  };
  return fc(e, t, {
    ...r,
    platform: o
  });
};
var Rc = /* @__PURE__ */ Re('<div class="popover svelte-1w8q5m"><!></div>'), Uc = /* @__PURE__ */ Re('<div role="button" class="trigger svelte-1w8q5m"><!></div> <!>', 1);
function Vr(e, t) {
  Gt(t, !0);
  let n = Ur(t, "placement", 3, "bottom-end"), i, r = Ue(null), o = Ue(!1);
  const s = async () => {
    Y(o, !k(o)), k(o) && (await Ua(), Mc(i, k(r), {
      placement: n(),
      middleware: [Pc(10), Oc()]
    }).then(({ x: g, y: x }) => {
      Object.assign(k(r).style, { left: `${g}px`, top: `${x}px` });
    }));
  }, u = (g) => {
    k(o) && k(r) && i && !k(r).contains(g.target) && !i.contains(g.target) && Y(o, !1);
  };
  fi(() => {
    if (k(o))
      return document.addEventListener("click", u), () => {
        var g;
        document.removeEventListener("click", u), (g = t.onClose) == null || g.call(t);
      };
  });
  var d = Uc(), a = St(d), h = te(a);
  Kr(h, () => t.trigger), ln(a, (g) => i = g, () => i);
  var f = he(a, 2);
  {
    var m = (g) => {
      var x = Rc(), E = te(x);
      Kr(E, () => t.content), ln(x, (L) => Y(r, L), () => k(r)), Vt(3, x, () => on), Ae(g, x);
    };
    at(f, (g) => {
      k(o) && g(m);
    });
  }
  return Ha("click", a, s, !0), Ae(e, d), Jt({ triggerClicked: s });
}
var ii = { exports: {} }, Nc = ii.exports, bo;
function jc() {
  return bo || (bo = 1, function(e, t) {
    (function(n, i) {
      e.exports = i();
    })(Nc, function() {
      var n = 1e3, i = 6e4, r = 36e5, o = "millisecond", s = "second", u = "minute", d = "hour", a = "day", h = "week", f = "month", m = "quarter", g = "year", x = "date", E = "Invalid Date", L = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(K) {
        var H = ["th", "st", "nd", "rd"], N = K % 100;
        return "[" + K + (H[(N - 20) % 10] || H[N] || H[0]) + "]";
      } }, U = function(K, H, N) {
        var j = String(K);
        return !j || j.length >= H ? K : "" + Array(H + 1 - j.length).join(N) + K;
      }, Q = { s: U, z: function(K) {
        var H = -K.utcOffset(), N = Math.abs(H), j = Math.floor(N / 60), W = N % 60;
        return (H <= 0 ? "+" : "-") + U(j, 2, "0") + ":" + U(W, 2, "0");
      }, m: function K(H, N) {
        if (H.date() < N.date()) return -K(N, H);
        var j = 12 * (N.year() - H.year()) + (N.month() - H.month()), W = H.clone().add(j, f), ce = N - W < 0, de = H.clone().add(j + (ce ? -1 : 1), f);
        return +(-(j + (N - W) / (ce ? W - de : de - W)) || 0);
      }, a: function(K) {
        return K < 0 ? Math.ceil(K) || 0 : Math.floor(K);
      }, p: function(K) {
        return { M: f, y: g, w: h, d: a, D: x, h: d, m: u, s, ms: o, Q: m }[K] || String(K || "").toLowerCase().replace(/s$/, "");
      }, u: function(K) {
        return K === void 0;
      } }, G = "en", ee = {};
      ee[G] = X;
      var Ee = "$isDayjsObject", Z = function(K) {
        return K instanceof be || !(!K || !K[Ee]);
      }, D = function K(H, N, j) {
        var W;
        if (!H) return G;
        if (typeof H == "string") {
          var ce = H.toLowerCase();
          ee[ce] && (W = ce), N && (ee[ce] = N, W = ce);
          var de = H.split("-");
          if (!W && de.length > 1) return K(de[0]);
        } else {
          var Te = H.name;
          ee[Te] = H, W = Te;
        }
        return !j && W && (G = W), W || !j && G;
      }, ve = function(K, H) {
        if (Z(K)) return K.clone();
        var N = typeof H == "object" ? H : {};
        return N.date = K, N.args = arguments, new be(N);
      }, ne = Q;
      ne.l = D, ne.i = Z, ne.w = function(K, H) {
        return ve(K, { locale: H.$L, utc: H.$u, x: H.$x, $offset: H.$offset });
      };
      var be = function() {
        function K(N) {
          this.$L = D(N.locale, null, !0), this.parse(N), this.$x = this.$x || N.x || {}, this[Ee] = !0;
        }
        var H = K.prototype;
        return H.parse = function(N) {
          this.$d = function(j) {
            var W = j.date, ce = j.utc;
            if (W === null) return /* @__PURE__ */ new Date(NaN);
            if (ne.u(W)) return /* @__PURE__ */ new Date();
            if (W instanceof Date) return new Date(W);
            if (typeof W == "string" && !/Z$/i.test(W)) {
              var de = W.match(L);
              if (de) {
                var Te = de[2] - 1 || 0, Pe = (de[7] || "0").substring(0, 3);
                return ce ? new Date(Date.UTC(de[1], Te, de[3] || 1, de[4] || 0, de[5] || 0, de[6] || 0, Pe)) : new Date(de[1], Te, de[3] || 1, de[4] || 0, de[5] || 0, de[6] || 0, Pe);
              }
            }
            return new Date(W);
          }(N), this.init();
        }, H.init = function() {
          var N = this.$d;
          this.$y = N.getFullYear(), this.$M = N.getMonth(), this.$D = N.getDate(), this.$W = N.getDay(), this.$H = N.getHours(), this.$m = N.getMinutes(), this.$s = N.getSeconds(), this.$ms = N.getMilliseconds();
        }, H.$utils = function() {
          return ne;
        }, H.isValid = function() {
          return this.$d.toString() !== E;
        }, H.isSame = function(N, j) {
          var W = ve(N);
          return this.startOf(j) <= W && W <= this.endOf(j);
        }, H.isAfter = function(N, j) {
          return ve(N) < this.startOf(j);
        }, H.isBefore = function(N, j) {
          return this.endOf(j) < ve(N);
        }, H.$g = function(N, j, W) {
          return ne.u(N) ? this[j] : this.set(W, N);
        }, H.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, H.valueOf = function() {
          return this.$d.getTime();
        }, H.startOf = function(N, j) {
          var W = this, ce = !!ne.u(j) || j, de = ne.p(N), Te = function(Be, Qe) {
            var Ze = ne.w(W.$u ? Date.UTC(W.$y, Qe, Be) : new Date(W.$y, Qe, Be), W);
            return ce ? Ze : Ze.endOf(a);
          }, Pe = function(Be, Qe) {
            return ne.w(W.toDate()[Be].apply(W.toDate("s"), (ce ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Qe)), W);
          }, v = this.$W, ge = this.$M, nt = this.$D, ct = "set" + (this.$u ? "UTC" : "");
          switch (de) {
            case g:
              return ce ? Te(1, 0) : Te(31, 11);
            case f:
              return ce ? Te(1, ge) : Te(0, ge + 1);
            case h:
              var it = this.$locale().weekStart || 0, Ne = (v < it ? v + 7 : v) - it;
              return Te(ce ? nt - Ne : nt + (6 - Ne), ge);
            case a:
            case x:
              return Pe(ct + "Hours", 0);
            case d:
              return Pe(ct + "Minutes", 1);
            case u:
              return Pe(ct + "Seconds", 2);
            case s:
              return Pe(ct + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, H.endOf = function(N) {
          return this.startOf(N, !1);
        }, H.$set = function(N, j) {
          var W, ce = ne.p(N), de = "set" + (this.$u ? "UTC" : ""), Te = (W = {}, W[a] = de + "Date", W[x] = de + "Date", W[f] = de + "Month", W[g] = de + "FullYear", W[d] = de + "Hours", W[u] = de + "Minutes", W[s] = de + "Seconds", W[o] = de + "Milliseconds", W)[ce], Pe = ce === a ? this.$D + (j - this.$W) : j;
          if (ce === f || ce === g) {
            var v = this.clone().set(x, 1);
            v.$d[Te](Pe), v.init(), this.$d = v.set(x, Math.min(this.$D, v.daysInMonth())).$d;
          } else Te && this.$d[Te](Pe);
          return this.init(), this;
        }, H.set = function(N, j) {
          return this.clone().$set(N, j);
        }, H.get = function(N) {
          return this[ne.p(N)]();
        }, H.add = function(N, j) {
          var W, ce = this;
          N = Number(N);
          var de = ne.p(j), Te = function(ge) {
            var nt = ve(ce);
            return ne.w(nt.date(nt.date() + Math.round(ge * N)), ce);
          };
          if (de === f) return this.set(f, this.$M + N);
          if (de === g) return this.set(g, this.$y + N);
          if (de === a) return Te(1);
          if (de === h) return Te(7);
          var Pe = (W = {}, W[u] = i, W[d] = r, W[s] = n, W)[de] || 1, v = this.$d.getTime() + N * Pe;
          return ne.w(v, this);
        }, H.subtract = function(N, j) {
          return this.add(-1 * N, j);
        }, H.format = function(N) {
          var j = this, W = this.$locale();
          if (!this.isValid()) return W.invalidDate || E;
          var ce = N || "YYYY-MM-DDTHH:mm:ssZ", de = ne.z(this), Te = this.$H, Pe = this.$m, v = this.$M, ge = W.weekdays, nt = W.months, ct = W.meridiem, it = function(Qe, Ze, Ge, rt) {
            return Qe && (Qe[Ze] || Qe(j, ce)) || Ge[Ze].slice(0, rt);
          }, Ne = function(Qe) {
            return ne.s(Te % 12 || 12, Qe, "0");
          }, Be = ct || function(Qe, Ze, Ge) {
            var rt = Qe < 12 ? "AM" : "PM";
            return Ge ? rt.toLowerCase() : rt;
          };
          return ce.replace(q, function(Qe, Ze) {
            return Ze || function(Ge) {
              switch (Ge) {
                case "YY":
                  return String(j.$y).slice(-2);
                case "YYYY":
                  return ne.s(j.$y, 4, "0");
                case "M":
                  return v + 1;
                case "MM":
                  return ne.s(v + 1, 2, "0");
                case "MMM":
                  return it(W.monthsShort, v, nt, 3);
                case "MMMM":
                  return it(nt, v);
                case "D":
                  return j.$D;
                case "DD":
                  return ne.s(j.$D, 2, "0");
                case "d":
                  return String(j.$W);
                case "dd":
                  return it(W.weekdaysMin, j.$W, ge, 2);
                case "ddd":
                  return it(W.weekdaysShort, j.$W, ge, 3);
                case "dddd":
                  return ge[j.$W];
                case "H":
                  return String(Te);
                case "HH":
                  return ne.s(Te, 2, "0");
                case "h":
                  return Ne(1);
                case "hh":
                  return Ne(2);
                case "a":
                  return Be(Te, Pe, !0);
                case "A":
                  return Be(Te, Pe, !1);
                case "m":
                  return String(Pe);
                case "mm":
                  return ne.s(Pe, 2, "0");
                case "s":
                  return String(j.$s);
                case "ss":
                  return ne.s(j.$s, 2, "0");
                case "SSS":
                  return ne.s(j.$ms, 3, "0");
                case "Z":
                  return de;
              }
              return null;
            }(Qe) || de.replace(":", "");
          });
        }, H.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, H.diff = function(N, j, W) {
          var ce, de = this, Te = ne.p(j), Pe = ve(N), v = (Pe.utcOffset() - this.utcOffset()) * i, ge = this - Pe, nt = function() {
            return ne.m(de, Pe);
          };
          switch (Te) {
            case g:
              ce = nt() / 12;
              break;
            case f:
              ce = nt();
              break;
            case m:
              ce = nt() / 3;
              break;
            case h:
              ce = (ge - v) / 6048e5;
              break;
            case a:
              ce = (ge - v) / 864e5;
              break;
            case d:
              ce = ge / r;
              break;
            case u:
              ce = ge / i;
              break;
            case s:
              ce = ge / n;
              break;
            default:
              ce = ge;
          }
          return W ? ce : ne.a(ce);
        }, H.daysInMonth = function() {
          return this.endOf(f).$D;
        }, H.$locale = function() {
          return ee[this.$L];
        }, H.locale = function(N, j) {
          if (!N) return this.$L;
          var W = this.clone(), ce = D(N, j, !0);
          return ce && (W.$L = ce), W;
        }, H.clone = function() {
          return ne.w(this.$d, this);
        }, H.toDate = function() {
          return new Date(this.valueOf());
        }, H.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, H.toISOString = function() {
          return this.$d.toISOString();
        }, H.toString = function() {
          return this.$d.toUTCString();
        }, K;
      }(), Se = be.prototype;
      return ve.prototype = Se, [["$ms", o], ["$s", s], ["$m", u], ["$H", d], ["$W", a], ["$M", f], ["$y", g], ["$D", x]].forEach(function(K) {
        Se[K[1]] = function(H) {
          return this.$g(H, K[0], K[1]);
        };
      }), ve.extend = function(K, H) {
        return K.$i || (K(H, be, ve), K.$i = !0), ve;
      }, ve.locale = D, ve.isDayjs = Z, ve.unix = function(K) {
        return ve(1e3 * K);
      }, ve.en = ee[G], ve.Ls = ee, ve.p = {}, ve;
    });
  }(ii)), ii.exports;
}
var Bc = jc();
const qr = /* @__PURE__ */ Nr(Bc);
var Lc = /* @__PURE__ */ Re('<button class="smol with-tip top-end" aria-label="History"><i class="history"></i> <span class="tip-text"> </span></button>'), Fc = (e, t, n) => t.onSelect(n), Vc = (e, t, n) => t.onDownload(n), qc = /* @__PURE__ */ Re('<div class="flex items-center gap-2"><button class="version-row svelte-vd6i3o"> </button> <button class="smol" aria-label="Download"><i class="download"></i></button></div>'), Wc = /* @__PURE__ */ Re('<div class="flex items-center justify-between"><span> </span> <span class="badge current"> </span></div> <div class="mt-2 flex gap-2 flex-col-reverse"></div>', 1);
function zc(e, t) {
  Gt(t, !0);
  const [n, i] = Yn(), r = () => Hn(Gn, "$t", n);
  let o;
  ln(
    Vr(e, {
      placement: "top-start",
      trigger: (d) => {
        var a = Lc(), h = he(te(a), 2), f = te(h);
        Je((m) => je(f, m), [() => r()("ui.history")]), Ae(d, a);
      },
      content: (d) => {
        var a = Wc(), h = St(a), f = te(h), m = te(f), g = he(f, 2), x = te(g), E = he(h, 2);
        Mr(E, 22, () => t.versions, (L) => L, (L, q, X) => {
          var U = qc(), Q = te(U);
          Q.__click = [Fc, t, q];
          var G = te(Q), ee = he(Q, 2);
          ee.__click = [Vc, t, q], Je(
            (Ee) => {
              st(Q, "active", q == t.activeIdx), je(G, `${k(X) + 1} - ${Ee ?? ""}`);
            },
            [() => qr(q).fromNow()]
          ), Ae(L, U);
        }), Je(
          (L) => {
            je(m, L), je(x, t.versions.length);
          },
          [() => r()("ui.history")]
        ), Ae(d, a);
      },
      $$slots: { trigger: !0, content: !0 }
    }),
    (d) => o = d,
    () => o
  ), Jt(), i();
}
zn(["click"]);
var Hc = /* @__PURE__ */ Re('<div class="relative text-center"><button class="guide-trigger svelte-1r94xnt"><i class="text"></i> </button> <svg class="line svelte-1r94xnt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1213 73" fill="#1F6CFF"><path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path></svg></div>'), Yc = (e, t) => Y(t, "guide"), Gc = (e, t) => Y(t, "tip"), Jc = /* @__PURE__ */ Re(`<pre class="svelte-1r94xnt">Step 1: Enter your idea, and select the corresponding services
- Basic, no service required
🚫 A calculator
✅ A colorful calculator app to help kids learn math.

- Using AI services
🚫 Using GPT to generate articles
✅ An app that helps engineering students look up technical terms, powered by Qwen/Qwen2.5-72B-Instruct, with content formatted in Markdown.

Step 2: Domini writes the code.
The time required depends on the complexity of the idea, but it usually takes just over a minute.

Step 3: The app is complete, and you're ready to use it.
You can request improvements via the chatbox.</pre>`), Kc = /* @__PURE__ */ Re(`<pre class="svelte-1r94xnt">- Focus on 1 to 3 main features. Attach descriptive images or mockups if available.

- For a simple app with one main feature, describe it directly and concisely.
Example: “A colorful calculator app to help kids learn math.”

- You can improve the app after the initial version.
- If the app still has errors after editing, you can revert to the previous version or continue fixing errors via chat.

- For apps with 2 or more features, describe them in as much detail as possible, including images or necessary services.
Example: “Create an app for (target audience) to (purpose) (context, optional).”

- If you need pagination, select the “use tabs” option (like in mobile apps).

- You can provide APIs as curl commands, Python requests, JavaScript fetch, etc., for Domini to use.
- If there are errors, open the console, copy the error, and paste it into the chat for AI to resolve.
- Alternatively, you can edit the code directly in the editor or download the code to your device for further development.
</pre>`), Xc = /* @__PURE__ */ Re('<div class="flex justify-center mb-4"><div class="selector svelte-1r94xnt"><button> </button> <button> </button></div></div> <!>', 1);
function Qc(e, t) {
  Gt(t, !1);
  const [n, i] = Yn(), r = () => Hn(Gn, "$t", n);
  let o = ba("guide");
  ms(), Vr(e, {
    placement: "top",
    trigger: (d) => {
      var a = Hc(), h = te(a), f = he(te(h));
      Je((m) => je(f, ` ${m ?? ""}`), [() => r()("app.note")], ui), Ae(d, a);
    },
    content: (d) => {
      var a = Xc(), h = St(a), f = te(h), m = te(f);
      m.__click = [Yc, o];
      var g = te(m), x = he(m, 2);
      x.__click = [Gc, o];
      var E = te(x), L = he(h, 2);
      {
        var q = (U) => {
          var Q = Jc();
          Ae(U, Q);
        }, X = (U) => {
          var Q = Or(), G = St(Q);
          {
            var ee = (Ee) => {
              var Z = Kc();
              Ae(Ee, Z);
            };
            at(
              G,
              (Ee) => {
                k(o) == "tip" && Ee(ee);
              },
              !0
            );
          }
          Ae(U, Q);
        };
        at(L, (U) => {
          k(o) == "guide" ? U(q) : U(X, !1);
        });
      }
      Je(
        (U, Q) => {
          vi(
            m,
            gi([
              "tab-btn",
              k(o) == "guide" && "current"
            ]),
            "svelte-1r94xnt"
          ), je(g, U), vi(
            x,
            gi([
              "tab-btn",
              k(o) == "tip" && "current"
            ]),
            "svelte-1r94xnt"
          ), je(E, Q);
        },
        [
          () => r()("ui.guide"),
          () => r()("ui.tip")
        ],
        ui
      ), Ae(d, a);
    },
    $$slots: { trigger: !0, content: !0 }
  }), Jt(), i();
}
zn(["click"]);
_e({
  hasChangedName: !1,
  user: null,
  exchangeRate: 25e3
});
var tr = { dragStart: !0 }, nr = { delay: 0, distance: 3 }, wo = (e, t, n) => Math.min(Math.max(e, t), n), ir = (e) => typeof e == "string", Zc = ([e, t], n, i) => {
  const r = (o, s) => s === 0 ? 0 : Math.ceil(o / s) * s;
  return [r(n, e), r(i, t)];
}, _o = (e, t) => e.some((n) => t.some((i) => n.contains(i)));
function rr(e, t) {
  if (e === void 0) return;
  if (yr(e)) return e.getBoundingClientRect();
  if (typeof e == "object") {
    const { top: i = 0, left: r = 0, right: o = 0, bottom: s = 0 } = e;
    return { top: i, right: window.innerWidth - o, bottom: window.innerHeight - s, left: r };
  }
  if (e === "parent") return t.parentNode.getBoundingClientRect();
  const n = document.querySelector(e);
  if (n === null) throw new Error("The selector provided for bound doesn't exists in the document.");
  return n.getBoundingClientRect();
}
var ei = (e, t, n) => e.style.setProperty(t, n), yr = (e) => e instanceof HTMLElement, or = function(e, t = {}) {
  let n, i, { bounds: r, axis: o = "both", gpuAcceleration: s = !0, legacyTranslate: u = !1, transform: d, applyUserSelectHack: a = !0, disabled: h = !1, ignoreMultitouch: f = !1, recomputeBounds: m = tr, grid: g, threshold: x = nr, position: E, cancel: L, handle: q, defaultClass: X = "neodrag", defaultClassDragging: U = "neodrag-dragging", defaultClassDragged: Q = "neodrag-dragged", defaultPosition: G = { x: 0, y: 0 }, onDragStart: ee, onDrag: Ee, onDragEnd: Z } = t, D = !1, ve = !1, ne = 0, be = !1, Se = !1, K = 0, H = 0, N = 0, j = 0, W = 0, ce = 0, { x: de, y: Te } = E ? { x: (E == null ? void 0 : E.x) ?? 0, y: (E == null ? void 0 : E.y) ?? 0 } : G;
  rt(de, Te);
  let Pe, v, ge, nt, ct, it = "", Ne = !!E;
  m = { ...tr, ...m }, x = { ...nr, ...x ?? {} };
  let Be = /* @__PURE__ */ new Set();
  function Qe(fe) {
    D && !ve && Se && be && ct && (ve = !0, function(Me) {
      Dt("neodrag:start", ee, Me);
    }(fe), Ge.add(U), a && (it = Ze.userSelect, Ze.userSelect = "none"));
  }
  const Ze = document.body.style, Ge = e.classList;
  function rt(fe = K, Me = H) {
    if (!d) {
      if (u) {
        let qe = `${+fe}px, ${+Me}px`;
        return ei(e, "transform", s ? `translate3d(${qe}, 0)` : `translate(${qe})`);
      }
      return ei(e, "translate", `${+fe}px ${+Me}px`);
    }
    const et = d({ offsetX: fe, offsetY: Me, rootNode: e });
    ir(et) && ei(e, "transform", et);
  }
  function Dt(fe, Me, et) {
    const qe = /* @__PURE__ */ function(Ke) {
      return { offsetX: K, offsetY: H, rootNode: e, currentNode: ct, event: Ke };
    }(et);
    e.dispatchEvent(new CustomEvent(fe, { detail: qe })), Me == null || Me(qe);
  }
  const xt = addEventListener, At = new AbortController(), mt = { signal: At.signal, capture: !1 };
  function jt() {
    let fe = e.offsetWidth / v.width;
    return isNaN(fe) && (fe = 1), fe;
  }
  return ei(e, "touch-action", "none"), xt("pointerdown", (fe) => {
    if (h || fe.button === 2) return;
    if (Be.add(fe.pointerId), f && Be.size > 1) return fe.preventDefault();
    if (m.dragStart && (Pe = rr(r, e)), ir(q) && ir(L) && q === L) throw new Error("`handle` selector can't be same as `cancel` selector");
    if (Ge.add(X), ge = function(Fe, ot) {
      if (!Fe) return [ot];
      if (yr(Fe)) return [Fe];
      if (Array.isArray(Fe)) return Fe;
      const gt = ot.querySelectorAll(Fe);
      if (gt === null) throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");
      return Array.from(gt.values());
    }(q, e), nt = function(Fe, ot) {
      if (!Fe) return [];
      if (yr(Fe)) return [Fe];
      if (Array.isArray(Fe)) return Fe;
      const gt = ot.querySelectorAll(Fe);
      if (gt === null) throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");
      return Array.from(gt.values());
    }(L, e), n = /(both|x)/.test(o), i = /(both|y)/.test(o), _o(nt, ge)) throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");
    const Me = fe.composedPath()[0];
    if (!ge.some((Fe) => {
      var ot;
      return Fe.contains(Me) || ((ot = Fe.shadowRoot) == null ? void 0 : ot.contains(Me));
    }) || _o(nt, [Me])) return;
    ct = ge.length === 1 ? e : ge.find((Fe) => Fe.contains(Me)), D = !0, ne = Date.now(), x.delay || (be = !0), v = e.getBoundingClientRect();
    const { clientX: et, clientY: qe } = fe, Ke = jt();
    n && (N = et - de / Ke), i && (j = qe - Te / Ke), Pe && (W = et - v.left, ce = qe - v.top);
  }, mt), xt("pointermove", (fe) => {
    if (!D || f && Be.size > 1) return;
    if (!ve) {
      if (be || Date.now() - ne >= x.delay && (be = !0, Qe(fe)), !Se) {
        const Ke = fe.clientX - N, Fe = fe.clientY - j;
        Math.sqrt(Ke ** 2 + Fe ** 2) >= x.distance && (Se = !0, Qe(fe));
      }
      if (!ve) return;
    }
    m.drag && (Pe = rr(r, e)), fe.preventDefault(), v = e.getBoundingClientRect();
    let Me = fe.clientX, et = fe.clientY;
    const qe = jt();
    if (Pe) {
      const Ke = { left: Pe.left + W, top: Pe.top + ce, right: Pe.right + W - v.width, bottom: Pe.bottom + ce - v.height };
      Me = wo(Me, Ke.left, Ke.right), et = wo(et, Ke.top, Ke.bottom);
    }
    if (Array.isArray(g)) {
      let [Ke, Fe] = g;
      if (isNaN(+Ke) || Ke < 0) throw new Error("1st argument of `grid` must be a valid positive number");
      if (isNaN(+Fe) || Fe < 0) throw new Error("2nd argument of `grid` must be a valid positive number");
      let ot = Me - N, gt = et - j;
      [ot, gt] = Zc([Ke / qe, Fe / qe], ot, gt), Me = N + ot, et = j + gt;
    }
    n && (K = Math.round((Me - N) * qe)), i && (H = Math.round((et - j) * qe)), de = K, Te = H, Dt("neodrag", Ee, fe), rt();
  }, mt), xt("pointerup", (fe) => {
    Be.delete(fe.pointerId), D && (ve && (xt("click", (Me) => Me.stopPropagation(), { once: !0, signal: At.signal, capture: !0 }), m.dragEnd && (Pe = rr(r, e)), Ge.remove(U), Ge.add(Q), a && (Ze.userSelect = it), Dt("neodrag:end", Z, fe), n && (N = K), i && (j = H)), D = !1, ve = !1, be = !1, Se = !1);
  }, mt), { destroy: () => At.abort(), update: (fe) => {
    var et, qe;
    o = fe.axis || "both", h = fe.disabled ?? !1, f = fe.ignoreMultitouch ?? !1, q = fe.handle, r = fe.bounds, m = fe.recomputeBounds ?? tr, L = fe.cancel, a = fe.applyUserSelectHack ?? !0, g = fe.grid, s = fe.gpuAcceleration ?? !0, u = fe.legacyTranslate ?? !0, d = fe.transform, x = { ...nr, ...fe.threshold ?? {} };
    const Me = Ge.contains(Q);
    Ge.remove(X, Q), X = fe.defaultClass ?? "neodrag", U = fe.defaultClassDragging ?? "neodrag-dragging", Q = fe.defaultClassDragged ?? "neodrag-dragged", Ge.add(X), Me && Ge.add(Q), Ne && (de = K = ((et = fe.position) == null ? void 0 : et.x) ?? K, Te = H = ((qe = fe.position) == null ? void 0 : qe.y) ?? H, rt());
  } };
};
function eu(e, t) {
  t(!1);
}
var tu = /* @__PURE__ */ Re('<div class="dialog svelte-1g04wx6"><div class="flex flex-col"><div class="flex items-center justify-between"><span class="pl-2 cursor-grab select-none"> </span> <button aria-label="Close"><i class="x"></i></button></div> <iframe title="Reference" src="https://coda.io/embed/GrlJtDeDEM/_suu2-Cm0?hideSections=true" width="900" height="500" style="max-width: 100%;" allow="fullscreen"></iframe></div></div>');
function nu(e, t) {
  Gt(t, !0);
  const [n, i] = Yn(), r = () => Hn(Gn, "$t", n);
  let o = Ur(t, "show", 15), s = Ue(null), u = Ue(null);
  var d = Or(), a = St(d);
  {
    var h = (f) => {
      var m = tu(), g = te(m), x = te(g), E = te(x), L = te(E);
      ln(E, (X) => Y(u, X), () => k(u));
      var q = he(E, 2);
      q.__click = [eu, o], ln(m, (X) => Y(s, X), () => k(s)), tl(m, (X, U) => or == null ? void 0 : or(X, U), () => ({ handle: k(u) })), Je((X) => je(L, X), [() => r()("ui.reference")]), Vt(3, m, () => on), Ae(f, m);
    };
    at(a, (f) => {
      o() && f(h);
    });
  }
  Ae(e, d), Jt(), i();
}
zn(["click"]);
var iu = /* @__PURE__ */ Re('<button><i class="module"></i> <span class="svelte-gqdu3o"> </span></button>'), ru = (e, t, n) => t(k(n)), ou = /* @__PURE__ */ Re('<button class="svelte-gqdu3o"><i class="check-circle svelte-gqdu3o"></i> <i class="circle svelte-gqdu3o"></i> </button>'), su = /* @__PURE__ */ Re('<div class="menu flex flex-col gap-1 svelte-gqdu3o"><div><span class="text-lg"> </span></div> <!></div>'), au = /* @__PURE__ */ Re("<!> <!>", 1);
function xo(e, t) {
  Gt(t, !0);
  const [n, i] = Yn(), r = () => Hn(Gn, "$t", n);
  let o = Ur(t, "smol", 3, !1), s = Ue(!1);
  const u = [
    // "text_generation",
    // "files_chat",
    // "custom_chat",
    // "image_generation",
    // "image_generation_with_style",
    // "image_remixing",
    // "lora_training",
    // "image_upscaling",
    // "image_bg_editing",
    // "tryon",
    // "video_generation",
    // "video_sync",
    // "text_to_speech",
    // "speech_to_text",
    // "synthesize",
    "hyberbolic"
  ];
  function d(m) {
    let g = t.selected.indexOf(m);
    g < 0 ? t.selected.push(m) : t.selected.splice(g, 1);
  }
  var a = au(), h = St(a);
  Vr(h, {
    placement: "top-end",
    trigger: (x) => {
      var E = iu(), L = he(te(E), 2), q = te(L);
      Je(
        (X) => {
          vi(E, gi(["trigger", o() && "smol"]), "svelte-gqdu3o"), je(q, X);
        },
        [() => r()("ui.service")]
      ), Ae(x, E);
    },
    content: (x) => {
      var E = su(), L = te(E), q = te(L), X = te(q), U = he(L, 2);
      Mr(U, 17, () => u, ds, (Q, G) => {
        var ee = ou();
        ee.__click = [ru, d, G];
        var Ee = he(te(ee), 3);
        Je(
          (Z, D) => {
            st(ee, "selected", Z), je(Ee, ` ${D ?? ""}`);
          },
          [
            () => t.selected.includes(k(G)),
            () => r()(`ui.module.${k(G)}`)
          ]
        ), Ae(Q, ee);
      }), Je((Q) => je(X, Q), [() => r()("ui.service-ai")]), Ae(x, E);
    },
    $$slots: { trigger: !0, content: !0 }
  });
  var f = he(h, 2);
  nu(f, {
    get show() {
      return k(s);
    },
    set show(m) {
      Y(s, _e(m));
    }
  }), Ae(e, a), Jt(), i();
}
zn(["click"]);
function Ms(e) {
  return new Promise((t, n) => {
    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error);
  });
}
function Rs(e, t) {
  const n = indexedDB.open(e);
  n.onupgradeneeded = () => n.result.createObjectStore(t);
  const i = Ms(n);
  return (r, o) => i.then((s) => o(s.transaction(t, r).objectStore(t)));
}
let sr;
function lu() {
  return sr || (sr = Rs("keyval-store", "keyval")), sr;
}
function cu(e, t, n = lu()) {
  return n("readwrite", (i) => (i.put(t, e), Ms(i.transaction)));
}
const uu = Rs("domini", "kv"), ko = (e, t) => cu(e, t, uu), fu = `You are Domini, a highly skilled and independent master engineer specializing in modern web technologies like JavaScript, React, and responsive design. You excel at working autonomously, delivering clean, maintainable, and performant web applications that prioritize user experience and functionality. While you have a solid understanding of design principles, your strength lies in translating complex requirements into efficient, scalable code. Your self-driven approach allows you to focus deeply on solving problems and delivering high-quality solutions without the need for constant collaboration.

## Domini's Core Identity & Expertise
- Personality: Friendly, patient, and solution-oriented with a keen eye for detail and a commitment to technical precision
- Communication Style: Clear, concise, and adaptable, using visuals, analogies, and structured explanations to make complex concepts accessible to both beginners and experienced developers
- Primary Focus: Frontend web development with expertise in React, JavaScript, HTML, and CSS, emphasizing scalable, maintainable, and performant code
- Design Philosophy: Modern, user-centric, and aesthetically refined, driven by a passion for creating intuitive experiences

## Domini follows these Design Principles
1. Visual Hierarchy
   - Typography: Strategic use of font weights, sizes, and spacing to guide user attention and improve readability
   - Color Theory: Accessible and harmonious color schemes that enhance usability and evoke the right emotions.
   - Whitespace: Balanced use of negative space to create clarity, focus, and a sense of elegance

2. User Experience
   - Intuitive Navigation: Clear and logical information architecture for seamless user journeys
   - Responsive Design: Mobile-first approach to ensure consistency across all devices
   - Accessibility: WCAG compliance and inclusive design for universal usability
   - Microinteractions: Purposeful animations, feedback, and loading states to enhance engagement and usability

3. Code Quality
   - Maintainability: Clean, documented, and scalable code
   - Reusability: Component-driven architecture
   - Performance: Optimized rendering and load times

## Domini follows these Best Practices
- Gather context, organize ideas and plan approach in English before writing code
- Write self-documenting code with clear and consistent naming conventions
- Use semantic HTML and ARIA attributes
- Write clear, concise UI labels, placeholders, and text in the user's language
- Optimize for performance and accessibility
- Implement proper error handling and validation
- Ensure cross-browser compatibility`, du = `Here is the requirements for the user's Javascript/React mini app:

<requirements>
<scope>
- Development of personal mini apps, not full-scale products.
- Excludes authentication and routing functionality.
</scope>

- Refrain from suggesting features outside the defined scope.
- Use **only the methods relevant to the features** in features_requested. Ignore all other methods in the api_docs, as they may over-provide functionality. Do not use any methods not directly tied to the requested features unless explicitly instructed.

TO_BE_REPLACED
</requirements>

Domini's task is to generate a React component named App that will be rendered into a div with the id "root". Please carefully read and follow the user requirements provided above.

Before generating files, Domini will wrap reasoning process in <reasoning_process> tags to organize ideas and plan approach. In this section:
1. Restate features_requested in JTBD format, exhaustively.
2. List key features from the requirements.
3. Outline the component structure. Ensure flat file tree.
4. Create a detailed mermaid flowchart for user flow.
5. Write high-level abstract code for implementation.
It's OK for this section to be quite long to ensure a thorough analysis.

Then, generate the file content using the following format:

[file_sep: README.md]
\`\`\`markdown
content goes here
\`\`\`

or

[file_sep: App.jsx]
\`\`\`jsx
content goes here
\`\`\`

[file_sep: index.jsx] will be provided so Domini can skip it.

Domini will create the following files in order:
1. README.md: Document your component design, planned methods, and implementation approach, including the files and components needed.
2. package.json: Write the project name, description, keywords, then list all required dependencies. Only name, description, keywords, and dependencies are needed.
  - name field should be the name of the app in the user's language, max 3 words.
  - description field should be a short description of the app in one sentence in the user's language.
  - keywords field MUST be ONE of [ "Business", "Education", "Entertainment", "Finance", "Health & Fitness", "Lifestyle", "Medical", "Photo & Video", "Productivity", "Reference", "Shopping", "Travel", "Utilities" ]
  - ONLY include dependencies and their versions you are sure are needed and comfortable with.
  - SKIP unneccessary fields like main, scripts, devDependencies, etc.
3. Any additional files needed for the component(s).

Domini follows these Technical Guidelines:
1. ENSURE that all React hooks and other dependencies are properly imported at the top of your file.
  - Exceptions: dbClient, aiClient. These are injected into the global scope as globalThis.dbClient and globalThis.aiClient
2. Prefer native functions like fetch over libraries like axios
3. Before declaring variables, confirm they are necessary and will be used.
4. For markdown formatting, use snarkdown library and dangerouslySetInnerHTML to render it

Domini follows these Component Development Guidelines:
1. Prioritize native elements over component libraries
2. Use any component libraries specified in the user requirements
3. Follow the component library's official patterns and best practices
4. Leverage built-in props for customization rather than overriding styles
5. Use icons from the included "material-symbols-outlined" font, skip writing <svg> icon.

Domini follows these Styling Guidelines:
1. DO NOT import any CSS files
2. Tailwind and DaisyUI CSS are already included
3. Use DaisyUI for UI elements and components, and Tailwind for layout. Only use Tailwind classes when DaisyUI is not available or user explicitly requests custom theming.
4. Use only Tailwind's core utility classes (e.g., \`p-4\`, \`mt-2\`). Never use arbitrary values with square brackets (e.g., \`p-[16px]\`)

Domini follows these Code Organization Guidelines:
1. Keep the file structure flat
2. Follow composition patterns to break complex components and functions into reusable pieces
3. Use appropriate layout components based on requirements
4. Avoid using a monolithic \`App.jsx\` file; split into related, modular files.
5. Prioritize modularity and reusability in all implementations.

Domini follows these State Management Guidelines:
1. Use React hooks for local state. Consider using useMemo/useCallback for caching expensive operations.
2. Follow specified state management patterns
3. Implement form management as required

Begin by creating the README.md file, followed by package.json, and any additional required files. Once Domini has generated all the necessary code, Domini's task is complete.

One last thing: Domini MUST provide complete implementation for your non-technical user, NEVER leave comments describing code without implementing it.`, hu = `When discussing improvements or modifications, Domini will:

1. First, analyze the specific areas needing enhancement within <analysis> tags:
   - What aspects need improvement
   - Why these changes are beneficial
   - How they align with existing code

2. Then, outline the improvement strategy in <reasoning_process> tags:
   - Targeted changes to make
   - Impact on existing functionality
   - Any new dependencies or considerations

3. Finally, provide affected files with:
   - Complete file content for modified files
   - Only new files if required
   - Clear comments indicating significant changes
   - No truncation or partial updates

Note:
- Domini focuses on iterative enhancement rather than full rewrites. Only files requiring changes will be updated, preserving existing working code while improving specific areas. Domini MUST provide complete implementation since user is not a developer, not "rest of the component remains unchanged" comment or alike.
- If screenshot is provided, Domini will use annotations (if any) to as a guideline for the changes, without implementing the annotations.`, So = `Act as an expert UI designer from Apple with extensive knowledge of app design, design principles, and human psychology. Your task is to provide a detailed description of a webpage or UI mockup based on a screenshot. This description will be used by front-end engineers who do not have access to the original image, so your description MUST be comprehensive and precise.

Your description should be structured as follows:

1. Overview
   - Provide a brief summary of the overall layout and purpose of the UI.

2. Static Elements
   - Describe all non-interactive elements such as headings, text, and images.
   - Include details on content, positioning, and styling.

3. Interactive Elements
   - Describe all buttons, textareas,inputs, dropdowns, links, and other interactive elements.
   - For each interactive element, specify:
     a) Its default state
     b) Hover/focus states (if visible in the screenshot)
     c) Any visible animations or transitions

4. Dynamic Content Areas
   - Describe any areas that appear to contain dynamic content (e.g., lists, grids, content that may change).
   - Explain how these areas are structured and what kind of content they might contain.

5. Layout and Styling
   - Provide details on the overall layout, including:
     a) Positioning of elements
     b) Padding and margins
     c) Use of grids or flexbox (if apparent)
   - Describe the visual styling, including:
     a) Color scheme (be as precise as possible with colors)
     b) Typography (font sizes, families, weights, etc.)
     c) Use of shadows, borders, or other decorative elements

6. Annotations
   - Describe any visible hand-drawn annotations on the screenshot.

Throughout your description, pay close attention to details such as exact colors, sizes, spacing, and positioning. Your goal is to provide a description that allows a front-end engineer to recreate the UI as accurately as possible without seeing the original image.

Remember:
- Reply in plain text without Markdown code blocks.
- Be concise and precise in your descriptions.
- Do not write any code.
- Skip any extra commentary not directly related to describing the UI.

Here is the screenshot you need to analyze:
`, pu = `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);`, br = _e({
  appId: null,
  pricing: null,
  membership: null,
  flashcard: null,
  assets: []
}), Eo = (e) => {
  br.appId = e;
};
function mu(e, t) {
  Y(t, !k(t));
}
function gu(e, t) {
  e.key == "Enter" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), t());
}
function vu(e, t) {
  e.key == "Enter" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), t());
}
const yu = (e, t, n, i) => {
  Y(t, "There are bugs in the code. Please review and fix them."), Y(n, "view-code"), i();
};
function bu(e, t, n, i) {
  Ql(k(t).url), n(i()("ui.share-copied"), { type: "success" });
}
var wu = /* @__PURE__ */ Re('<i class="sidebar-on sidebar-toggled"></i>'), _u = /* @__PURE__ */ Re('<i class="sidebar-off"></i>'), xu = /* @__PURE__ */ Re('<button class="action sidebar-toggle with-tip" aria-label="Toggle sidebar"><!> <div class="tip-text"> </div></button>'), ku = (e, t) => t("view-idea"), Su = (e, t) => t("view-code"), Eu = (e, t) => t("view-app"), Tu = /* @__PURE__ */ Re('<button><i class="share"></i> </button>'), Cu = (e, t) => t("desktop"), Du = (e, t) => t("mobile"), Au = /* @__PURE__ */ Re('<div class="selector"><button aria-label="Desktop"><i class="laptop"></i></button> <button aria-label="Mobile"><i class="phone"></i></button></div>'), $u = /* @__PURE__ */ Re("<!> <!>", 1), Iu = /* @__PURE__ */ Re('<button><i class="image-clear"></i> </button>'), Pu = /* @__PURE__ */ Re('<button><i class="image-upload"></i> </button>'), Ou = /* @__PURE__ */ Re("<span> </span>"), Mu = /* @__PURE__ */ Re('<li><button><i class="file"></i> </button></li>'), Ru = /* @__PURE__ */ Re('<button class="smol" aria-label="Stop"><i class="stop spin"></i></button>'), Uu = /* @__PURE__ */ Re('<i class="image-clear"></i> <span class="tip-text"> </span>', 1), Nu = /* @__PURE__ */ Re('<i class="image-upload"></i> <span class="tip-text"> </span>', 1), ju = /* @__PURE__ */ Re('<div class="flex gap-2"><button class="smol with-tip top hover:text-blue-1 text-blue-5" aria-label="Send"><i class="send"></i> <span class="tip-text"> </span></button> <button class="smol with-tip top" aria-label="Attach images"><!></button> <!></div>'), Bu = /* @__PURE__ */ Re('<div class="flex flex-col gap-2"><textarea id="chat-prompt" class="chat"></textarea> <div class="flex items-center justify-between"><!> <div class="flex gap-2"><button class="smol with-tip top-end" aria-label="Debug"><i class="bug"></i> <span class="tip-text"> </span></button> <!></div></div></div>'), Lu = /* @__PURE__ */ Re('<aside class="flex flex-col gap-2"><!> <ul id="filetree"></ul> <button id="stop-button"><i class="stop spin"></i> </button> <!></aside>'), Fu = /* @__PURE__ */ Re('<div class="domini-playground"><header><div class="flex gap-2"><!></div> <div class="selector"><button class="tab-btn"><i class="idea"></i> </button> <button class="tab-btn"><i class="code"></i> </button> <button class="tab-btn"><i class="app"></i> </button></div> <div class="flex items-center gap-2"><!></div></header> <section id="view-idea"><img src="/mascot.png" alt="Domini" class="banner"> <div class="flex gap-2 badges" style="flex-wrap: wrap;"><span class="badge current"> </span> <span class="badge"> </span> <span class="badge"> </span></div> <div id="form-starter"><div class="flex flex-col gap-2"><textarea id="prompt"></textarea> <div class="controls"><button id="make"><i class="magic"></i> <kbd> </kbd></button> <div class="flex gap-2"><!> <!></div></div></div></div> <!></section> <section id="view-app"><div><!> <div id="code-editor"></div> <div id="app-viewer"><!> <iframe title="Domini App" allow="camera; microphone; clipboard-read; clipboard-write"></iframe></div></div></section> <input type="file" accept="image/*" multiple hidden></div>');
function Vu(e, t) {
  Gt(t, !0);
  const [n, i] = Yn(), r = () => Hn(Gn, "$t", n);
  let o = !!navigator.userAgent.match(/(iPhone|Android)/i) || window.innerWidth < 768;
  ys.set(Kl());
  let s = ja("toast"), u = _e(navigator.userAgent.includes("(Mac") ? "⌘+Enter" : "Ctrl+Enter"), d = Ue("page-studio"), a = Ue("view-idea"), h = Ue(!o), f = Ue(!0), m = Ue(!0), g = Ue(!1), x = Ue("desktop"), E = Ue(""), L = Ue(_e([])), q = Ue(""), X = Ue(""), U = Ue(!1), Q = Ue(0), G = Ue(_e([Date.now()])), ee = {}, Ee = Ue(!1), Z = Ue(!1), D = Ue(""), ve = !1, ne = {}, be;
  function Se() {
    require.config({
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs"
      }
    }), require(["vs/editor/editor.main"], function() {
      monaco.editor.defineTheme("domini", {
        base: "vs",
        inherit: !0,
        rules: [],
        colors: {
          "editor.foreground": "#0c0a0a",
          "editor.background": "#fbfafa"
        }
      }), monaco.editor.setTheme("domini"), be = monaco.editor.create(document.getElementById("code-editor"), {
        value: "// The code will show here",
        language: "javascript",
        automaticLayout: !0,
        wordWrap: "on",
        fontFamily: "'Fira Code', monospace",
        fontSize: 14,
        fontLigatures: !0,
        minimap: {
          enabled: !1
          // This disables the minimap
        }
      }), be.onDidChangeModelContent(() => {
        if (k(Ee) == !0) {
          let _ = be.getValue();
          ne[k(D)] = _, Y(Z, !0);
        }
      });
    });
  }
  hl(() => {
    Se(), document.getElementById("prompt").focus();
  });
  function K(_) {
    Y(a, _e(_)), _ == "view-app" && k(Ee) && k(Z) && fe();
  }
  let H = _e([]), N = Ue(""), j = Ue(_e({}));
  function W() {
    Y(N, _e(Date.now().toString())), Y(j, _e({
      id: k(N),
      name: "Untitled",
      description: "",
      category: "",
      icon: "",
      userPrompt: k(q),
      versionIndex: 0,
      versionHistory: {},
      modules: null,
      services: []
    })), Eo(k(N));
  }
  function ce() {
    k(j).modules = br, k(j).versionIndex = k(Q), k(j).versionHistory = ee, ko("project-" + k(N), fo(k(j)));
    let _ = H.find((M) => M.id == k(N));
    _ ? (_.name = k(j).name, _.description = k(j).description, _.icon = k(j).icon, _.category = k(j).category) : (_ = {
      id: k(N),
      name: k(j).name,
      description: k(j).description,
      icon: k(j).icon,
      category: k(j).category
    }, H.push(_)), ko("project-list", fo(H));
  }
  let de = Ue(_e([]));
  function Te(_) {
    k(de).includes(_) || k(de).push(_), ve || Y(D, _e(_));
  }
  function Pe(_) {
    _.preventDefault(), Y(a, "view-code"), ve = !0, Y(D, _e(_.target.textContent.trim())), monaco.editor.setModelLanguage(be.getModel(), k(D).endsWith(".md") ? "markdown" : k(D).endsWith(".json") ? "json" : "javascript"), be.setValue(ne[k(D)]);
  }
  let v, ge = [];
  async function nt(_) {
    ge = Array.from(_.target.files), Y(U, !0);
  }
  function ct() {
    ge = [], Y(U, !1), Y(q, ""), document.getElementById("prompt").focus();
  }
  function it() {
    v.click();
  }
  let Ne, Be = [];
  async function Qe() {
    let _ = k(q).trim();
    if (!_) return;
    if (W(), ve = !1, Y(Ee, !1), Y(Z, !1), Y(m, !0), Y(g, !1), Ne.src = "", Y(de, _e([])), ne = {}, be.updateOptions({ readOnly: !0 }), be.setValue(""), Y(d, "page-studio"), Y(a, "view-code"), Y(f, !1), k(U)) {
      Y(E, _e(r()("domini.analysingImages")));
      let C = await lo(globalThis._DOMINI_PROMPT_DESCRIBE ?? So, ge);
      if (C != null && C.length)
        for (let V = 0; V < C.length; V++) {
          let le = `ui_or_mockup_screenshot_caption_${V + 1}`;
          _ += `

<${le}>
${C[V]}</${le}>`;
        }
    }
    Y(E, _e(r()("domini.planning")));
    let M = `<features_requested>
` + _ + `
</features_requested>`;
    if (k(L).length) {
      M += `

<api_docs>
`;
      let C = await ho();
      for (let V of k(L))
        k(j).services.push(V), M += C[V] + `
`;
      M += C.file_upload + `
`, M += `</api_docs>
`;
    }
    const S = document.querySelector("#stop-button"), $ = new AbortController(), l = () => {
      $.abort(), Y(f, !0), S.removeEventListener("click", l);
    };
    S.addEventListener("click", l), Be = [
      {
        role: "system",
        content: globalThis._DOMINI_PROMPT_PERSONA ?? fu
      },
      {
        role: "user",
        content: (globalThis._DOMINI_PROMPT_REQUEST ?? du).replace("TO_BE_REPLACED", M)
      }
    ];
    const w = await so(Be, $);
    Y(E, _e(r()("domini.thinking")));
    const I = await ao({
      fetcher: w,
      onUpdate: (C, V, le) => {
        if (C == "newFile")
          Te(V), ve || (Y(D, _e(V)), be.setValue(""));
        else {
          if (!V && !k(D))
            return be.setValue(le);
          k(D) == V && be.setValue(le), ne[V] = le, Y(E, _e(r()("domini.writingCode")));
        }
      }
    });
    if (I.ok) {
      if (Be.push({ role: "assistant", content: I.text }), ne = I.fileContents, ne["/index.jsx"] || (ne["/index.jsx"] = pu, k(de).push("/index.jsx")), Y(a, "view-app"), await fe(), Eo(k(N)), Y(Q, _e(Date.now())), Y(G, _e([k(Q)])), ee = {
        [k(Q)]: { fileContents: ne, messages: Be }
      }, Y(m, !1), Y(Ee, !0), be.updateOptions({ readOnly: !1 }), ge = [], Y(U, !1), ne["/package.json"]) {
        let C = JSON.parse(ne["/package.json"]);
        k(j).name = Xl(C.name), k(j).description = C.description, k(j).category = Zl.includes(C.keywords[0]) ? C.keywords[0] : "General";
      }
      ce();
    } else
      be.setValue("Error: " + I.error);
    S.removeEventListener("click", l), Y(f, !0);
  }
  let Ze = Ue(!1), Ge = Ue(""), rt = Ue(!1), Dt;
  async function xt() {
    let _ = k(Ge).trim();
    if (!_) return;
    if (Y(rt, !0), ve = !1, Y(Ge, ""), be.updateOptions({ readOnly: !0 }), k(L).length) {
      let w = [];
      for (let I of k(L))
        k(j).services.includes(I) || (w.push(I), k(j).services.push(I));
      if (w.length) {
        _ += `

<api_docs>
`;
        let I = await ho();
        for (let C of w)
          _ += I[C] + `
`;
        _ += `</api_docs>
`;
      }
    }
    let M = [];
    if (k(Ze)) {
      Y(E, _e(r()("domini.analysingImages")));
      let w = await lo(globalThis._DOMINI_PROMPT_DESCRIBE ?? So, ge);
      w != null && w.length && M.push(...w);
    }
    if (M.length) {
      _ += `

Pay more attention to annotations and additional notes.`;
      for (let w = 0; w < M.length; w++) {
        let I = `ui_or_mockup_screenshot_caption_${w + 1}`;
        _ += `

<${I}>
${M[w]}
</${I}>`;
      }
    }
    Dt = new AbortController(), Y(Ee, !1), Y(D, "");
    let S = Be[2].content.slice(0, Be[2].content.indexOf("<file_sep:")).trim();
    for (let [w, I] of Object.entries(ne))
      S += `

[file_sep: ${w.slice(1)}]
${I}`;
    Be[2].content = S, ne = { ...ne }, Be = Be.concat({
      role: "user",
      content: (globalThis._DOMINI_PROMPT_IMPROVE ?? hu) + `

<improvement_request>
` + _ + `
</improvement_request>`
    });
    const $ = await so(Be, Dt);
    Y(E, _e(r()("domini.thinking")));
    const l = await ao({
      fetcher: $,
      onUpdate: (w, I, C) => {
        if (w == "newFile")
          Te(I), ve || (Y(D, _e(I)), be.setValue(""));
        else {
          if (!I && !k(D))
            return be.setValue(C);
          k(D) == I && be.setValue(C), ne[I] = C, Y(E, _e(r()("domini.writingCode")));
        }
      }
    });
    l.ok ? (ne = { ...ne, ...l.fileContents }, Be.pop(), Y(Q, _e(Date.now())), k(G).push(k(Q)), ee[k(Q)] = { fileContents: ne, messages: Be }, fe(), Y(a, "view-app"), ge = [], Y(Ze, !1), Y(Ee, !0), be.updateOptions({ readOnly: !1 }), ce()) : (ne = ee[k(Q)].fileContents, Be = ee[k(Q)].messages, Y(Ge, _e(_))), Y(rt, !1), Dt = null;
  }
  function At() {
    Dt.abort();
  }
  function mt() {
    k(Ze) ? (ge = [], Y(Ze, !1)) : (v.click(), setTimeout(
      () => {
        Y(Ze, !0);
      },
      2e3
    ));
  }
  let jt = Ue(!1);
  async function fe() {
    Y(Z, !1), Y(jt, !0);
    let _ = await Dl({
      project: k(j),
      fileContents: ne,
      appModules: br
    });
    if (Y(jt, !1), !_.ok)
      return _.error && Y(X, _e(_.error)), s("Build failed. Fix the errors with chat and try again.", { type: "error" });
    k(j).url = _.value, ce(), Ne.src = _.value, Y(g, !0), s("App deployed successfully", { type: "success" });
  }
  const Me = (_) => {
    Y(a, "view-app"), Y(x, _e(_));
  };
  function et(_) {
    let M = Object.entries(ne).map(([S, $]) => ({ name: S, input: $ }));
    Jl(M, "domini-app.zip");
  }
  function qe(_) {
    Y(Q, _e(_)), Be = ee[_].messages, ne = ee[_].fileContents, fe(), be.setValue(ne[k(D)]);
  }
  window.addEventListener("message", (_) => {
    switch (_.data.type) {
    }
  });
  var Ke = Fu(), Fe = te(Ke), ot = te(Fe), gt = te(ot);
  {
    var Oi = (_) => {
      var M = xu();
      M.__click = [mu, h];
      var S = te(M);
      {
        var $ = (C) => {
          var V = wu();
          Ae(C, V);
        }, l = (C) => {
          var V = _u();
          Ae(C, V);
        };
        at(S, (C) => {
          k(h) ? C($) : C(l, !1);
        });
      }
      var w = he(S, 2), I = te(w);
      Je((C) => je(I, C), [() => r()("ui.sidebar")]), Ae(_, M);
    };
    at(gt, (_) => {
      k(a) != "view-idea" && _(Oi);
    });
  }
  var Kn = he(ot, 2), fn = te(Kn);
  fn.__click = [ku, K];
  var Mi = he(te(fn)), dn = he(fn, 2);
  dn.__click = [Su, K];
  var Ri = he(te(dn)), $n = he(dn, 2);
  $n.__click = [Eu, K];
  var Ui = he(te($n)), Ni = he(Kn, 2), ji = te(Ni);
  {
    var Bt = (_) => {
      var M = $u(), S = St(M);
      {
        var $ = (I) => {
          var C = Tu();
          C.__click = [bu, j, s, r];
          var V = he(te(C));
          Je(
            (le) => {
              st(C, "hidden", k(m)), je(V, ` ${le ?? ""}`);
            },
            [() => r()("ui.share")]
          ), Ae(I, C);
        };
        at(S, (I) => {
          o || I($);
        });
      }
      var l = he(S, 2);
      {
        var w = (I) => {
          var C = Au(), V = te(C);
          V.__click = [Cu, Me];
          var le = he(V, 2);
          le.__click = [Du, Me], Je(() => {
            st(V, "current", k(x) == "desktop"), st(le, "current", k(x) == "mobile");
          }), Ae(I, C);
        };
        at(l, (I) => {
          o || I(w);
        });
      }
      Ae(_, M);
    };
    at(ji, (_) => {
      k(a) != "view-idea" && _(Bt);
    });
  }
  var Xt = he(Fe, 2), tn = he(te(Xt), 2), Qt = te(tn), Bi = te(Qt), Xn = he(Qt, 2), Li = te(Xn), c = he(Xn, 2), p = te(c), y = he(tn, 2), A = te(y), F = te(A);
  F.__keydown = [gu, Qe];
  var J = he(F, 2), B = te(J);
  B.__click = Qe;
  var ie = he(te(B)), O = he(ie), xe = te(O), ke = he(B, 2), pe = te(ke);
  {
    var Oe = (_) => {
      var M = Iu();
      M.__click = ct;
      var S = he(te(M));
      Je(($) => je(S, ` ${$ ?? ""}`), [() => r()("ui.clear")]), Ae(_, M);
    }, ye = (_) => {
      var M = Pu();
      M.__click = it;
      var S = he(te(M));
      Je(($) => je(S, ` ${$ ?? ""}`), [() => r()("ui.screenshot")]), Ae(_, M);
    };
    at(pe, (_) => {
      k(U) ? _(Oe) : _(ye, !1);
    });
  }
  var Ce = he(pe, 2);
  xo(Ce, {
    get selected() {
      return k(L);
    },
    set selected(_) {
      Y(L, _e(_));
    }
  });
  var De = he(y, 2);
  Qc(De, {});
  var ae = he(Xt, 2), He = te(ae), oe = te(He);
  {
    var se = (_) => {
      var M = Lu(), S = te(M);
      {
        var $ = (le) => {
          var me = Ou(), ue = te(me);
          Je(() => je(ue, k(E))), Ae(le, me);
        };
        at(S, (le) => {
          !k(f) && k(de).length == 0 && le($);
        });
      }
      var l = he(S, 2);
      Mr(l, 21, () => k(de), ds, (le, me) => {
        var ue = Mu(), $e = te(ue);
        $e.__click = Pe;
        var we = he(te($e));
        Je(() => {
          st(ue, "current", k(D) == k(me)), je(we, ` ${k(me) ?? ""}`);
        }), Ae(le, ue);
      });
      var w = he(l, 2), I = he(te(w)), C = he(w, 2);
      {
        var V = (le) => {
          var me = Bu(), ue = te(me);
          ue.__keydown = [vu, xt], Hi(ue, "rows", 3);
          var $e = he(ue, 2), we = te($e);
          {
            var Ie = (tt) => {
              var Ye = Ru();
              Ye.__click = At, Vt(1, Ye, () => on, () => ({ delay: 500 })), Vt(2, Ye, () => on), Ae(tt, Ye);
            }, ut = (tt) => {
              var Ye = ju(), $t = te(Ye);
              $t.__click = xt;
              var Fi = he(te($t), 2), Vi = te(Fi), hn = he($t, 2);
              hn.__click = mt;
              var js = te(hn);
              {
                var Bs = (It) => {
                  var In = Uu(), qi = he(St(In), 2), Wi = te(qi);
                  Je((zi) => je(Wi, zi), [() => r()("ui.clear")]), Ae(It, In);
                }, Ls = (It) => {
                  var In = Nu(), qi = he(St(In), 2), Wi = te(qi);
                  Je((zi) => je(Wi, zi), [() => r()("ui.upload")]), Ae(It, In);
                };
                at(js, (It) => {
                  k(Ze) ? It(Bs) : It(Ls, !1);
                });
              }
              var Fs = he(hn, 2);
              xo(Fs, {
                smol: !0,
                get selected() {
                  return k(L);
                },
                set selected(It) {
                  Y(L, _e(It));
                }
              }), Je(
                (It) => {
                  $t.disabled = k(rt) || !k(Ge), je(Vi, It), hn.disabled = k(rt);
                },
                [() => r()("ui.send")]
              ), Vt(1, Ye, () => on, () => ({ delay: 500 })), Vt(2, Ye, () => on), Ae(tt, Ye);
            };
            at(we, (tt) => {
              k(rt) ? tt(Ie) : tt(ut, !1);
            });
          }
          var Xe = he(we, 2), kt = te(Xe);
          kt.__click = [yu, Ge, a, xt];
          var re = he(te(kt), 2), We = te(re), ft = he(kt, 2);
          zc(ft, {
            get versions() {
              return k(G);
            },
            get activeIdx() {
              return k(Q);
            },
            onSelect: qe,
            onDownload: et
          }), Je(
            (tt, Ye) => {
              Hi(ue, "placeholder", tt), kt.disabled = k(rt), je(We, Ye);
            },
            [
              () => r()("placeholder.improve"),
              () => r()("ui.fix")
            ]
          ), Zr(ue, () => k(Ge), (tt) => Y(Ge, tt)), Ae(le, me);
        };
        at(C, (le) => {
          k(m) || le(V);
        });
      }
      Je(
        (le) => {
          st(w, "hidden", k(f)), je(I, ` ${le ?? ""}`);
        },
        [() => r()("ui.stop")]
      ), Vt(3, M, () => yl, () => ({ axis: "x" })), Ae(_, M);
    };
    at(oe, (_) => {
      k(h) && _(se);
    });
  }
  var z = he(oe, 2), P = he(z, 2), b = te(P);
  tc(b, {
    get show() {
      return k(jt);
    }
  });
  var T = he(b, 2);
  ln(T, (_) => Ne = _, () => Ne);
  var R = he(ae, 2);
  R.__change = nt, ln(R, (_) => v = _, () => v), Je(
    (_, M, S, $, l, w, I, C) => {
      st(fn, "current", k(a) == "view-idea"), je(Mi, ` ${_ ?? ""}`), st(dn, "current", k(a) == "view-code"), je(Ri, ` ${M ?? ""}`), st($n, "current", k(a) == "view-app"), je(Ui, ` ${S ?? ""}`), st(Xt, "current", k(a) == "view-idea"), je(Bi, $), je(Li, l), je(p, w), Hi(F, "placeholder", I), je(ie, ` ${C ?? ""} `), je(xe, u), st(ae, "current", k(a) != "view-idea"), st(z, "current", k(a) == "view-code"), st(P, "current", k(a) == "view-app"), st(P, "mobile", k(a) == "view-app" && k(x) == "mobile");
    },
    [
      () => r()("ui.idea"),
      () => r()("ui.code"),
      () => r()("ui.app"),
      () => r()("app.step1"),
      () => r()("app.step2"),
      () => r()("app.step3"),
      () => r()("placeholder.describe"),
      () => r()("ui.make")
    ]
  ), Zr(F, () => k(q), (_) => Y(q, _)), Ae(e, Ke), Jt(), i();
}
zn(["click", "keydown", "change"]);
let Us = Ue("info"), Ns = Ue(""), wr = Ue(!1);
function qu() {
  Ba("toast", (e, { type: t = "info", duration: n = 3e3 } = {}) => {
    Y(wr, !0), Y(Ns, _e(e)), Y(Us, _e(t)), n && setTimeout(
      () => {
        Y(wr, !1);
      },
      n
    );
  });
}
var Wu = /* @__PURE__ */ Re('<div><p class="svelte-vo8fzf"> </p></div>');
function zu(e, t) {
  Gt(t, !0);
  var n = Or(), i = St(n);
  {
    var r = (o) => {
      var s = Wu(), u = te(s), d = te(u);
      Je(() => {
        vi(s, gi(["toast", k(Us)]), "svelte-vo8fzf"), je(d, k(Ns));
      }), Vt(1, s, () => vl, () => ({ y: 50, duration: 400 })), Vt(2, s, () => on, () => ({ duration: 300 })), Ae(o, s);
    };
    at(i, (o) => {
      k(wr) && o(r);
    });
  }
  Ae(e, n), Jt();
}
var Hu = /* @__PURE__ */ Re("<!> <!>", 1);
function Yu(e, t) {
  Gt(t, !1), qu(), ms();
  var n = Hu(), i = St(n);
  Vu(i, {});
  var r = he(i, 2);
  zu(r, {}), Ae(e, n), Jt();
}
var ri = { exports: {} }, Gu = ri.exports, To;
function Ju() {
  return To || (To = 1, function(e, t) {
    (function(n, i) {
      e.exports = i();
    })(Gu, function() {
      return function(n, i, r) {
        n = n || {};
        var o = i.prototype, s = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function u(a, h, f, m) {
          return o.fromToBase(a, h, f, m);
        }
        r.en.relativeTime = s, o.fromToBase = function(a, h, f, m, g) {
          for (var x, E, L, q = f.$locale().relativeTime || s, X = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], U = X.length, Q = 0; Q < U; Q += 1) {
            var G = X[Q];
            G.d && (x = m ? r(a).diff(f, G.d, !0) : f.diff(a, G.d, !0));
            var ee = (n.rounding || Math.round)(Math.abs(x));
            if (L = x > 0, ee <= G.r || !G.r) {
              ee <= 1 && Q > 0 && (G = X[Q - 1]);
              var Ee = q[G.l];
              g && (ee = g("" + ee)), E = typeof Ee == "string" ? Ee.replace("%d", ee) : Ee(ee, h, G.l, L);
              break;
            }
          }
          if (h) return E;
          var Z = L ? q.future : q.past;
          return typeof Z == "function" ? Z(E) : Z.replace("%s", E);
        }, o.to = function(a, h) {
          return u(a, h, this, !0);
        }, o.from = function(a, h) {
          return u(a, h, this);
        };
        var d = function(a) {
          return a.$u ? r.utc() : r();
        };
        o.toNow = function(a) {
          return this.to(d(this), a);
        }, o.fromNow = function(a) {
          return this.from(d(this), a);
        };
      };
    });
  }(ri)), ri.exports;
}
var Ku = Ju();
const Xu = /* @__PURE__ */ Nr(Ku);
var oi = { exports: {} }, Qu = oi.exports, Co;
function Zu() {
  return Co || (Co = 1, function(e, t) {
    (function(n, i) {
      e.exports = i();
    })(Qu, function() {
      return function(n, i, r) {
        r.updateLocale = function(o, s) {
          var u = r.Ls[o];
          if (u) return (s ? Object.keys(s) : []).forEach(function(d) {
            u[d] = s[d];
          }), u;
        };
      };
    });
  }(oi)), oi.exports;
}
var ef = Zu();
const tf = /* @__PURE__ */ Nr(ef);
qr.extend(Xu);
qr.extend(tf);
const nf = (e, t) => {
  globalThis._DOMINI_BASE_URL = t.provider_base_url, globalThis._DOMINI_API_KEY = t.provider_api_key, globalThis._DOMINI_CODER_MODEL = t.domini_coder_model, globalThis._DOMINI_VISON_MODEL = t.domini_vision_model, globalThis._DOMINI_PROMPT_DESCRIBE = t.domini_prompt_describe, globalThis._DOMINI_PROMPT_IMPROVE = t.domini_prompt_improve, globalThis._DOMINI_PROMPT_PERSONA = t.domini_prompt_persona, globalThis._DOMINI_PROMPT_REQUEST = t.domini_prompt_request, Ga(Yu, {
    target: e,
    props: t
  });
};
export {
  nf as default
};
