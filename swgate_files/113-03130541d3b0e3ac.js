(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [113], {
        6010: function(e, t, n) {
            "use strict";

            function r(e) {
                var t, n, o = "";
                if ("string" === typeof e || "number" === typeof e) o += e;
                else if ("object" === typeof e)
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
                    else
                        for (t in e) e[t] && (o && (o += " "), o += t);
                return o
            }

            function o() {
                for (var e, t, n = 0, o = ""; n < arguments.length;)(e = arguments[n++]) && (t = r(e)) && (o && (o += " "), o += t);
                return o
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        },
        1551: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, l = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); i = !0);
                        } catch (a) {
                            u = !0, o = a
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.default = void 0;
            var l, i = (l = n(7294)) && l.__esModule ? l : {
                    default: l
                },
                u = n(1003),
                a = n(880),
                c = n(9246);
            var s = {};

            function f(e, t, n, r) {
                if (e && u.isLocalURL(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    s[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var d = function(e) {
                var t, n = !1 !== e.prefetch,
                    r = a.useRouter(),
                    l = i.default.useMemo((function() {
                        var t = o(u.resolveHref(r, e.href, !0), 2),
                            n = t[0],
                            l = t[1];
                        return {
                            href: n,
                            as: e.as ? u.resolveHref(r, e.as) : l || n
                        }
                    }), [r, e.href, e.as]),
                    d = l.href,
                    p = l.as,
                    m = e.children,
                    v = e.replace,
                    g = e.shallow,
                    h = e.scroll,
                    y = e.locale;
                "string" === typeof m && (m = i.default.createElement("a", null, m));
                var b = (t = i.default.Children.only(m)) && "object" === typeof t && t.ref,
                    E = o(c.useIntersection({
                        rootMargin: "200px"
                    }), 2),
                    w = E[0],
                    C = E[1],
                    S = i.default.useCallback((function(e) {
                        w(e), b && ("function" === typeof b ? b(e) : "object" === typeof b && (b.current = e))
                    }), [b, w]);
                i.default.useEffect((function() {
                    var e = C && n && u.isLocalURL(d),
                        t = "undefined" !== typeof y ? y : r && r.locale,
                        o = s[d + "%" + p + (t ? "%" + t : "")];
                    e && !o && f(r, d, p, {
                        locale: t
                    })
                }), [p, d, C, y, n, r]);
                var P = {
                    ref: S,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, l, i, a) {
                            ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && u.isLocalURL(n)) && (e.preventDefault(), t[o ? "replace" : "push"](n, r, {
                                shallow: l,
                                locale: a,
                                scroll: i
                            }))
                        }(e, r, d, p, v, g, h, y)
                    },
                    onMouseEnter: function(e) {
                        t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), u.isLocalURL(d) && f(r, d, p, {
                            priority: !0
                        })
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var A = "undefined" !== typeof y ? y : r && r.locale,
                        k = r && r.isLocaleDomain && u.getDomainLocale(p, A, r && r.locales, r && r.domainLocales);
                    P.href = k || u.addBasePath(u.addLocale(p, A, r && r.defaultLocale))
                }
                return i.default.cloneElement(t, P)
            };
            t.default = d
        },
        9246: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, l = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); i = !0);
                        } catch (a) {
                            u = !0, o = a
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    r = e.disabled || !u,
                    s = l.useRef(),
                    f = o(l.useState(!1), 2),
                    d = f[0],
                    p = f[1],
                    m = o(l.useState(t ? t.current : null), 2),
                    v = m[0],
                    g = m[1],
                    h = l.useCallback((function(e) {
                        s.current && (s.current(), s.current = void 0), r || d || e && e.tagName && (s.current = function(e, t, n) {
                            var r = function(e) {
                                    var t, n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = c.find((function(e) {
                                            return e.root === n.root && e.margin === n.margin
                                        }));
                                    r ? t = a.get(r) : (t = a.get(n), c.push(n));
                                    if (t) return t;
                                    var o = new Map,
                                        l = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return a.set(n, t = {
                                        id: n,
                                        observer: l,
                                        elements: o
                                    }), t
                                }(n),
                                o = r.id,
                                l = r.observer,
                                i = r.elements;
                            return i.set(e, t), l.observe(e),
                                function() {
                                    if (i.delete(e), l.unobserve(e), 0 === i.size) {
                                        l.disconnect(), a.delete(o);
                                        var t = c.findIndex((function(e) {
                                            return e.root === o.root && e.margin === o.margin
                                        }));
                                        t > -1 && c.splice(t, 1)
                                    }
                                }
                        }(e, (function(e) {
                            return e && p(e)
                        }), {
                            root: v,
                            rootMargin: n
                        }))
                    }), [r, v, n, d]);
                return l.useEffect((function() {
                    if (!u && !d) {
                        var e = i.requestIdleCallback((function() {
                            return p(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(e)
                        }
                    }
                }), [d]), l.useEffect((function() {
                    t && g(t.current)
                }), [t]), [h, d]
            };
            var l = n(7294),
                i = n(4686),
                u = "undefined" !== typeof IntersectionObserver;
            var a = new Map,
                c = []
        },
        1664: function(e, t, n) {
            e.exports = n(1551)
        },
        7533: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return Ae
                }
            });
            var r = n(7294);

            function o(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`
                    "${e}"
                    `)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(r, o), r
            }
            var l, i = ((l = i || {})[l.None = 0] = "None", l[l.RenderStrategy = 1] = "RenderStrategy", l[l.Static = 2] = "Static", l),
                u = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(u || {});

            function a({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: l,
                visible: i = !0,
                name: u
            }) {
                let a = s(t, e);
                if (i) return c(a, n, r, u);
                let f = null != l ? l : 0;
                if (2 & f) {
                    let {
                        static: e = !1,
                        ...t
                    } = a;
                    if (e) return c(t, n, r, u)
                }
                if (1 & f) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = a;
                    return o(e ? 0 : 1, {
                        0: () => null,
                        1: () => c({...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, u)
                    })
                }
                return c(a, n, r, u)
            }

            function c(e, t = {}, n, o) {
                let {
                    as: l = n,
                    children: i,
                    refName: u = "ref",
                    ...a
                } = p(e, ["unmount", "static"]), c = void 0 !== e.ref ? {
                    [u]: e.ref
                } : {}, f = "function" == typeof i ? i(t) : i;
                if (a.className && "function" == typeof a.className && (a.className = a.className(t)), l === r.Fragment && Object.keys(d(a)).length > 0) {
                    if (!(0, r.isValidElement)(f) || Array.isArray(f) && f.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
                    return (0, r.cloneElement)(f, Object.assign({}, s(f.props, d(p(a, ["ref"]))), c))
                }
                return (0, r.createElement)(l, Object.assign({}, p(a, ["ref"]), l !== r.Fragment && c), f)
            }

            function s(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
                for (let r in n) Object.assign(t, {
                    [r](e) {
                        let t = n[r];
                        for (let n of t) {
                            if (e.defaultPrevented) return;
                            n(e)
                        }
                    }
                });
                return t
            }

            function f(e) {
                var t;
                return Object.assign((0, r.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function d(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function p(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
            let m = Symbol();

            function v(e, t = !0) {
                return Object.assign(e, {
                    [m]: t
                })
            }

            function g(...e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)((() => {
                    t.current = e
                }), [e]);
                let n = (0, r.useCallback)((e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }), [t]);
                return e.every((e => null == e || (null == e ? void 0 : e[m]))) ? void 0 : n
            }
            var h = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(h || {});

            function y(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!r || ! function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }
            const b = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
            let E = {
                serverHandoffComplete: !1
            };

            function w() {
                let [e, t] = (0, r.useState)(E.serverHandoffComplete);
                return (0, r.useEffect)((() => {!0 !== e && t(!0)
                }), [e]), (0, r.useEffect)((() => {!1 === E.serverHandoffComplete && (E.serverHandoffComplete = !0)
                }), []), e
            }
            var C;
            let S = 0;

            function P() {
                return ++S
            }
            let A = null != (C = r.useId) ? C : function() {
                    let e = w(),
                        [t, n] = r.useState(e ? P : null);
                    return b((() => {
                        null === t && n(P())
                    }), [t]), null != t ? "" + t : void 0
                },
                k = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var T = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(T || {}),
                D = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(D || {}),
                O = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(O || {});
            var R = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(R || {});

            function L(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }
            let x = ["textarea", "input"].join(",");

            function M(e, t) {
                let n, r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    o = Array.isArray(e) ? function(e, t = (e => e)) {
                        return e.slice().sort(((e, n) => {
                            let r = t(e),
                                o = t(n);
                            if (null === r || null === o) return 0;
                            let l = r.compareDocumentPosition(o);
                            return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                        }))
                    }(e) : function(e = document.body) {
                        return null == e ? [] : Array.from(e.querySelectorAll(k))
                    }(e),
                    l = r.activeElement,
                    i = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    u = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, o.indexOf(l)) - 1;
                        if (4 & t) return Math.max(0, o.indexOf(l)) + 1;
                        if (8 & t) return o.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    a = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    c = 0,
                    s = o.length;
                do {
                    if (c >= s || c + s <= 0) return 0;
                    let e = u + c;
                    if (16 & t) e = (e + s) % s;
                    else {
                        if (e < 0) return 3;
                        if (e >= s) return 1
                    }
                    n = o[e], null == n || n.focus(a), c += i
                } while (n !== r.activeElement);
                return 6 & t && function(e) {
                    var t, n;
                    return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, x)) && n
                }(n) && n.select(), n.hasAttribute("tabindex") || n.setAttribute("tabindex", "0"), 2
            }

            function N(e) {
                let t = (0, r.useRef)(e);
                return b((() => {
                    t.current = e
                }), [e]), t
            }

            function I(e, t, n, o) {
                let l = N(n);
                (0, r.useEffect)((() => {
                    function n(e) {
                        l.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, o),
                    () => e.removeEventListener(t, n, o)
                }), [e, t, o])
            }

            function F(e) {
                return "undefined" == typeof window ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }

            function j(...e) {
                return (0, r.useMemo)((() => F(...e)), [...e])
            }
            var H = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(H || {});

            function U(e, t = 30, {
                initialFocus: n,
                containers: o
            } = {}) {
                let l = (0, r.useRef)(null),
                    i = (0, r.useRef)(null),
                    u = function() {
                        let e = (0, r.useRef)(!1);
                        return b((() => (e.current = !0, () => {
                            e.current = !1
                        })), []), e
                    }(),
                    a = Boolean(16 & t),
                    c = Boolean(2 & t),
                    s = j(e);
                return (0, r.useEffect)((() => {!a || l.current || (l.current = null == s ? void 0 : s.activeElement)
                }), [a, s]), (0, r.useEffect)((() => {
                    if (a) return () => {
                        L(l.current),
                        l.current = null
                    }
                }), [a]), (0, r.useEffect)((() => {
                    if (!c) return;
                    let t = e.current;
                    if (!t) return;
                    let r = null == s ? void 0 : s.activeElement;
                    if (null != n && n.current) {
                        if ((null == n ? void 0 : n.current) === r) return void(i.current = r)
                    } else if (t.contains(r)) return void(i.current = r);null != n && n.current ? L(n.current) : M(t, T.First) === D.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                    i.current = null == s ? void 0 : s.activeElement
                }), [e, n, c, s]), I(null == s ? void 0 : s.defaultView, "keydown", (n => {!(4 & t) || !e.current || n.key === h.Tab && (n.preventDefault(), M(e.current, (n.shiftKey ? T.Previous : T.Next) | T.WrapAround) === D.Success && (i.current = null == s ? void 0 : s.activeElement))
                })), I(null == s ? void 0 : s.defaultView, "focus", (n => {
                    if (!(8 & t)) return;
                    let r = new Set(null == o ? void 0 : o.current);
                    if (r.add(e), !r.size) return;
                    let l = i.current;
                    if (!l || !u.current) return;
                    let a = n.target;a && a instanceof HTMLElement ? function(e, t) {
                        var n;
                        for (let r of e)
                            if (null != (n = r.current) && n.contains(t)) return !0;
                        return !1
                    }(r, a) ? (i.current = a, L(a)) : (n.preventDefault(), n.stopPropagation(), L(l)) : L(i.current)
                }), !0), l
            }
            let $ = new Set,
                _ = new Map;

            function B(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function Y(e) {
                let t = _.get(e);
                !t || (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }
            var W = n(3935);
            let q = (0, r.createContext)(!1);

            function V() {
                return (0, r.useContext)(q)
            }

            function G(e) {
                return r.createElement(q.Provider, {
                    value: e.force
                }, e.children)
            }
            let K = r.Fragment,
                z = f((function(e, t) {
                    let n = e,
                        o = (0, r.useRef)(null),
                        l = g(v((e => {
                            o.current = e
                        })), t),
                        i = j(o),
                        u = function(e) {
                            let t = V(),
                                n = (0, r.useContext)(Z),
                                o = j(e),
                                [l, i] = (0, r.useState)((() => {
                                    if (!t && null !== n || "undefined" == typeof window) return null;
                                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === o) return null;
                                    let r = o.createElement("div");
                                    return r.setAttribute("id", "headlessui-portal-root"),
                                    o.body.appendChild(r)
                                }));
                            return (0, r.useEffect)((() => {
                                null !== l && (null != o && o.body.contains(l) || null == o || o.body.appendChild(l))
                            }), [l, o]), (0, r.useEffect)((() => {
                                t || null !== n && i(n.current)
                            }), [n, i, t]), l
                        }(o),
                        [c] = (0, r.useState)((() => {
                            var e;
                            return "undefined" == typeof window ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
                        })),
                        s = w();
                    return b((() => {
                        if (u && c) return u.appendChild(c), () => {
                            var e;!u || !c || (u.removeChild(c), u.childNodes.length <= 0 && (null == (e = u.parentElement) || e.removeChild(u)))
                        }
                    }), [u, c]), s && u && c ? (0, W.createPortal)(a({
                        ourProps: {
                            ref: l
                        },
                        theirProps: n,
                        defaultTag: K,
                        name: "Portal"
                    }), c) : null
                })),
                X = r.Fragment,
                Z = (0, r.createContext)(null),
                J = f((function(e, t) {
                    let {
                        target: n,
                        ...o
                    } = e, l = {
                        ref: g(t)
                    };
                    return r.createElement(Z.Provider, {
                        value: n
                    }, a({
                        ourProps: l,
                        theirProps: o,
                        defaultTag: X,
                        name: "Popover.Group"
                    }))
                })),
                Q = Object.assign(z, {
                    Group: J
                }),
                ee = (0, r.createContext)(null);

            function te() {
                let e = (0, r.useContext)(ee);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, te), e
                }
                return e
            }

            function ne() {
                let [e, t] = (0, r.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function(e) {
                    let n = (0, r.useCallback)((e => (t((t => [...t, e])), () => t((t => {
                            let n = t.slice(),
                                r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1),
                            n
                        })))), []),
                        o = (0, r.useMemo)((() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [n, e.slot, e.name, e.props]);
                    return r.createElement(ee.Provider, {
                        value: o
                    }, e.children)
                }), [t])]
            }
            let re = f((function(e, t) {
                    let n = te(),
                        r = `headlessui-description-${A()}`,
                        o = g(t);
                    b((() => n.register(r)), [r, n.register]);
                    let l = e;
                    return a({
                        ourProps: {
                            ref: o,
                            ...n.props,
                            id: r
                        },
                        theirProps: l,
                        slot: n.slot || {},
                        defaultTag: "p",
                        name: n.name || "Description"
                    })
                })),
                oe = (0, r.createContext)(null);
            oe.displayName = "OpenClosedContext";
            var le = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(le || {});

            function ie() {
                return (0, r.useContext)(oe)
            }
            let ue = (0, r.createContext)((() => {}));
            ue.displayName = "StackContext";
            var ae = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ae || {});

            function ce({
                children: e,
                onUpdate: t,
                type: n,
                element: o
            }) {
                let l = (0, r.useContext)(ue),
                    i = (0, r.useCallback)(((...e) => {
                        null == t || t(...e),
                        l(...e)
                    }), [l, t]);
                return b((() => (i(0, n, o), () => i(1, n, o))), [i, n, o]), r.createElement(ue.Provider, {
                    value: i
                }, e)
            }

            function se(e, t, n) {
                let o = N(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return window.addEventListener(e, t, n),
                    () => window.removeEventListener(e, t, n)
                }), [e, n])
            }
            var fe = (e => (e[e.None = 1] = "None", e[e.IgnoreScrollbars = 2] = "IgnoreScrollbars", e))(fe || {});

            function de(e, t, n = 1) {
                let o = (0, r.useRef)(!1),
                    l = N((r => {
                        if (o.current) return;o.current = !0,
                        function(e) {
                            "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                                throw e
                            }))))
                        }((() => {
                            o.current = !1
                        }));
                        let l = function e(t) {
                                return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                            }(e),
                            i = r.target;
                        if (i.ownerDocument.documentElement.contains(i)) {
                            if (2 === (2 & n)) {
                                let e = 20,
                                    t = i.ownerDocument.documentElement;
                                if (r.clientX > t.clientWidth - e || r.clientX < e || r.clientY > t.clientHeight - e || r.clientY < e) return
                            }
                            for (let e of l) {
                                if (null === e) continue;
                                let t = e instanceof HTMLElement ? e : e.current;
                                if (null != t && t.contains(i)) return
                            }
                            return t(r, i)
                        }
                    }));
                se("pointerdown", ((...e) => l.current(...e))), se("mousedown", ((...e) => l.current(...e)))
            }
            var pe = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(pe || {}),
                me = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(me || {});
            let ve = {
                    0: (e, t) => e.titleId === t.id ? e : {...e,
                        titleId: t.id
                    }
                },
                ge = (0, r.createContext)(null);

            function he(e) {
                let t = (0, r.useContext)(ge);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, he), t
                }
                return t
            }

            function ye(e, t) {
                return o(t.type, ve, e, t)
            }
            ge.displayName = "DialogContext";
            let be = i.RenderStrategy | i.Static,
                Ee = f((function(e, t) {
                    let {
                        open: n,
                        onClose: l,
                        initialFocus: i,
                        __demoMode: u = !1,
                        ...c
                    } = e, [s, f] = (0, r.useState)(0), d = ie();
                    void 0 === n && null !== d && (n = o(d, {
                        [le.Open]: !0,
                        [le.Closed]: !1
                    }));
                    let p = (0, r.useRef)(new Set),
                        m = (0, r.useRef)(null),
                        v = g(m, t),
                        y = j(m),
                        E = e.hasOwnProperty("open") || null !== d,
                        C = e.hasOwnProperty("onClose");
                    if (!E && !C) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!E) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!C) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof n) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);
                    if ("function" != typeof l) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);
                    let S = n ? 0 : 1,
                        [P, k] = (0, r.useReducer)(ye, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, r.createRef)()
                        }),
                        T = (0, r.useCallback)((() => l(!1)), [l]),
                        D = (0, r.useCallback)((e => k({
                            type: 0,
                            id: e
                        })), [k]),
                        O = !!w() && (!u && 0 === S),
                        R = s > 1,
                        L = null !== (0, r.useContext)(ge),
                        x = U(m, O ? o(R ? "parent" : "leaf", {
                            parent: H.RestoreFocus,
                            leaf: H.All & ~H.FocusLock
                        }) : H.None, {
                            initialFocus: i,
                            containers: p
                        });
                    (function(e, t = !0) {
                        b((() => {
                            if (!t || !e.current) return;
                            let n = e.current,
                                r = F(n);
                            if (r) {
                                $.add(n);
                                for (let e of _.keys()) e.contains(n) && (Y(e), _.delete(e));
                                return r.querySelectorAll("body > *").forEach((e => {
                                    if (e instanceof HTMLElement) {
                                        for (let t of $)
                                            if (e.contains(t)) return;
                                        1 === $.size && (_.set(e, {
                                            "aria-hidden": e.getAttribute("aria-hidden"),
                                            inert: e.inert
                                        }), B(e))
                                    }
                                })), () => {
                                    if ($.delete(n), $.size > 0) r.querySelectorAll("body > *").forEach((e => {
                                        if (e instanceof HTMLElement && !_.has(e)) {
                                            for (let t of $)
                                                if (e.contains(t)) return;
                                            _.set(e, {
                                                "aria-hidden": e.getAttribute("aria-hidden"),
                                                inert: e.inert
                                            }), B(e)
                                        }
                                    }));
                                    else
                                        for (let e of _.keys()) Y(e), _.delete(e)
                                }
                            }
                        }), [t])
                    })(m, !!R && O), de((() => {
                        var e, t;
                        return [...Array.from(null != (e = null == y ? void 0 : y.querySelectorAll("body > *")) ? e : []).filter((e => !(!(e instanceof HTMLElement) || e.contains(x.current) || P.panelRef.current && e.contains(P.panelRef.current)))), null != (t = P.panelRef.current) ? t : m.current]
                    }), (() => {
                        0 === S && (R || T())
                    }), fe.IgnoreScrollbars), I(null == y ? void 0 : y.defaultView, "keydown", (e => {
                        e.key === h.Escape && 0 === S && (R || (e.preventDefault(), e.stopPropagation(), T()))
                    })), (0, r.useEffect)((() => {
                        var e;
                        if (0 !== S || L) return;
                        let t = F(m);
                        if (!t) return;
                        let n = t.documentElement,
                            r = null != (e = t.defaultView) ? e : window,
                            o = n.style.overflow,
                            l = n.style.paddingRight,
                            i = r.innerWidth - n.clientWidth;
                        return n.style.overflow = "hidden",
                        n.style.paddingRight = `${i}px`,
                        () => {
                            n.style.overflow = o,
                            n.style.paddingRight = l
                        }
                    }), [S, L]), (0, r.useEffect)((() => {
                        if (0 !== S || !m.current) return;
                        let e = new IntersectionObserver((e => {
                            for (let t of e) 0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && T()
                        }));
                        return e.observe(m.current),
                        () => e.disconnect()
                    }), [S, m, T]);
                    let [M, N] = ne(), W = `headlessui-dialog-${A()}`, q = (0, r.useMemo)((() => [{
                        dialogState: S,
                        close: T,
                        setTitleId: D
                    }, P]), [S, P, T, D]), V = (0, r.useMemo)((() => ({
                        open: 0 === S
                    })), [S]), K = {
                        ref: v,
                        id: W,
                        role: "dialog",
                        "aria-modal": 0 === S || void 0,
                        "aria-labelledby": P.titleId,
                        "aria-describedby": M,
                        onClick(e) {
                            e.stopPropagation()
                        }
                    };
                    return r.createElement(ce, {
                        type: "Dialog",
                        element: m,
                        onUpdate: (0, r.useCallback)(((e, t, n) => {
                            "Dialog" === t && o(e, {
                                [ae.Add]() {
                                    p.current.add(n), f((e => e + 1))
                                },
                                [ae.Remove]() {
                                    p.current.add(n), f((e => e - 1))
                                }
                            })
                        }), [])
                    }, r.createElement(G, {
                        force: !0
                    }, r.createElement(Q, null, r.createElement(ge.Provider, {
                        value: q
                    }, r.createElement(Q.Group, {
                        target: m
                    }, r.createElement(G, {
                        force: !1
                    }, r.createElement(N, {
                        slot: V,
                        name: "Dialog.Description"
                    }, a({
                        ourProps: K,
                        theirProps: c,
                        slot: V,
                        defaultTag: "div",
                        features: be,
                        visible: 0 === S,
                        name: "Dialog"
                    }))))))))
                })),
                we = f((function(e, t) {
                    let [{
                        dialogState: n,
                        close: o
                    }] = he("Dialog.Overlay"), l = g(t), i = `headlessui-dialog-overlay-${A()}`, u = (0, r.useCallback)((e => {
                        if (e.target === e.currentTarget) {
                            if (y(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), e.stopPropagation(), o()
                        }
                    }), [o]);
                    return a({
                        ourProps: {
                            ref: l,
                            id: i,
                            "aria-hidden": !0,
                            onClick: u
                        },
                        theirProps: e,
                        slot: (0, r.useMemo)((() => ({
                            open: 0 === n
                        })), [n]),
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                })),
                Ce = f((function(e, t) {
                    let [{
                        dialogState: n
                    }, o] = he("Dialog.Backdrop"), l = g(t), i = `headlessui-dialog-backdrop-${A()}`;
                    (0, r.useEffect)((() => {
                        if (null === o.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }), [o.panelRef]);
                    let u = (0, r.useMemo)((() => ({
                        open: 0 === n
                    })), [n]);
                    return r.createElement(G, {
                        force: !0
                    }, r.createElement(Q, null, a({
                        ourProps: {
                            ref: l,
                            id: i,
                            "aria-hidden": !0
                        },
                        theirProps: e,
                        slot: u,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                })),
                Se = f((function(e, t) {
                    let [{
                        dialogState: n
                    }, o] = he("Dialog.Panel");
                    return a({
                        ourProps: {
                            ref: g(t, o.panelRef),
                            id: `headlessui-dialog-panel-${A()}`
                        },
                        theirProps: e,
                        slot: (0, r.useMemo)((() => ({
                            open: 0 === n
                        })), [n]),
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                })),
                Pe = f((function(e, t) {
                    let [{
                        dialogState: n,
                        setTitleId: o
                    }] = he("Dialog.Title"), l = `headlessui-dialog-title-${A()}`, i = g(t);
                    (0, r.useEffect)((() => (o(l), () => o(null))), [l, o]);
                    let u = (0, r.useMemo)((() => ({
                        open: 0 === n
                    })), [n]);
                    return a({
                        ourProps: {
                            ref: i,
                            id: l
                        },
                        theirProps: e,
                        slot: u,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                })),
                Ae = Object.assign(Ee, {
                    Backdrop: Ce,
                    Panel: Se,
                    Overlay: we,
                    Title: Pe,
                    Description: re
                })
        }
    }
]);