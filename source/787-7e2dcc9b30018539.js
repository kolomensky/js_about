"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [787], {
        7693: function(e, t) {
            t.Z = {
                src: "/_next/static/media/black.2928ccde.png",
                height: 32,
                width: 32,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUQEBAAAABMaXETExMEBAQTExMLCwsKCgoSEhIKCgoxMEgvAAAACXRSTlP+RgB/NtxxE4ZKMtkwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVQImWNgZ+ZgYWJiYmJgZWBgZWZmZmOAAk68DE4IYGBhBAMWABX7AKl4DohVAAAAAElFTkSuQmCC"
            }
        },
        553: function(e, t) {
            t.Z = {
                src: "/_next/static/media/default.0302e2ab.png",
                height: 32,
                width: 32,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXe3F7AwLDk4mYWFwDQz5JMaXGPjzETEwDp52Td3G2ZmGfIx7DPz6nCwaKkpISzsm9xcWbOzsB9fSK7uUTd3KHh31bu7HC8uz3Fw0qssUTBAAAAE3RSTlP9fv04/gD+Rv7+E8zrhjP+cYL+l8KKsgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUCJlNxkkSgCAMAMFJIEjcNYj+/6VWebJPzSjLambG1NoscuxkdXfvhXwB1H+qqmovbHdExHOShk96AUu2Ai3g7D0EAAAAAElFTkSuQmCC"
            }
        },
        9858: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return A
                },
                K: function() {
                    return x
                }
            });
            var i = n(5893),
                a = n(6010),
                o = n(1664),
                r = n(7294),
                c = "/_next/static/media/folder.cd74367e.gif",
                l = n(7693),
                s = n(553),
                u = "/_next/static/media/gray.baac307f.png",
                m = "/_next/static/media/white.ceaab2bb.png";

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                return null != t && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), i.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }
            var A, v = function(e) {
                try {
                    var t = localStorage.getItem(e);
                    if (t) {
                        var n = JSON.parse(t)[location.pathname];
                        if (Array.isArray(n) && n.every((function(e) {
                                return null === e || Array.isArray(e) && "number" === typeof e[0] && "number" === typeof e[1]
                            }))) return n
                    }
                } catch (i) {}
                return []
            };
            ! function(e) {
                e[e.Default = 0] = "Default", e[e.Gray = 1] = "Gray", e[e.White = 2] = "White", e[e.Black = 3] = "Black", e[e.Gif = 4] = "Gif", e[e.Image = 5] = "Image"
            }(A || (A = {}));
            var x = function(e) {
                    var t = e.folders,
                        n = e.persist,
                        x = e.stateKey,
                        p = void 0 === x ? "OK" : x,
                        w = e.context,
                        y = (0, r.useState)(!1),
                        b = y[0],
                        j = y[1],
                        E = (0, r.useRef)(null),
                        k = (0, r.useState)([]),
                        _ = k[0],
                        C = k[1],
                        M = (0, r.useState)(null),
                        S = M[0],
                        N = M[1],
                        B = (0, r.useState)(null),
                        L = B[0],
                        D = B[1],
                        I = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        var e, t = E.current,
                            i = 1,
                            a = null,
                            o = null,
                            r = !1,
                            c = 0,
                            l = 0,
                            s = 0,
                            u = 0,
                            m = 0,
                            h = 0;
                        n && C(v(p));
                        var A = function() {
                                a = null, r = !1
                            },
                            x = function(t) {
                                var n;
                                if (I.current !== t.target && !(null === (n = I.current) || void 0 === n ? void 0 : n.contains(t.target))) {
                                    var r, m;
                                    if (D(null), f(t, MouseEvent)) r = t.clientX, m = t.clientY;
                                    else {
                                        if (t.touches.length > 1) return void A();
                                        r = t.touches[0].clientX, m = t.touches[0].clientY, w && (e = setTimeout((function() {
                                            t.preventDefault(), D({
                                                x: r,
                                                y: m
                                            }), A()
                                        }), 800))
                                    }
                                    o && (o.style.outline = "none", o = null, N(null));
                                    for (var d = t.target; d && !d.hasAttribute("data-drag");) d = d.parentElement;
                                    if (d && (d.style.outline = "2px dotted black", o = d, N(d), !f(t, MouseEvent) || 0 === t.button)) {
                                        a = d;
                                        var h = d.getBoundingClientRect();
                                        d.style.zIndex = String(i++), c = r, l = m, s = h.x, u = h.y
                                    }
                                }
                            },
                            g = function(n) {
                                if (a && !I.current) {
                                    var i, o;
                                    if (f(n, MouseEvent)) i = n.clientX, o = n.clientY;
                                    else {
                                        if (n.touches.length > 1) return;
                                        i = n.touches[0].clientX, o = n.touches[0].clientY
                                    }
                                    var d = i - c,
                                        A = o - l;
                                    if (!r) {
                                        if (Math.sqrt(d * d + A * A) < 4) return;
                                        e && (clearTimeout(e), e = void 0), r = !0
                                    }
                                    n.preventDefault(), m = Math.min(t.offsetWidth, Math.max(0, d + s)) / t.offsetWidth, h = Math.min(t.offsetHeight, Math.max(0, A + u)) / t.offsetHeight, a.style.left = "".concat(100 * m, "%"), a.style.top = "".concat(100 * h, "%")
                                }
                            },
                            y = function(t) {
                                if (f(t, MouseEvent) || !(t.touches.length > 1)) {
                                    if (e && (clearTimeout(e), e = void 0), r && a) {
                                        if (n) {
                                            var i = a.getAttribute("data-index");
                                            "string" !== typeof i || isNaN(parseInt(i, 10)) || function(e, t, n) {
                                                var i = v(e);
                                                i[t] = n;
                                                try {
                                                    localStorage.setItem(e, JSON.stringify(d({}, location.pathname, i)))
                                                } catch (a) {}
                                            }(p, parseInt(i, 10), [m, h])
                                        }
                                        t.preventDefault()
                                    }
                                    A()
                                }
                            },
                            b = function(e) {
                                w && (e.preventDefault(), D({
                                    x: e.clientX,
                                    y: e.clientY
                                }))
                            };
                        return window.addEventListener("mousedown", x), window.addEventListener("touchstart", x), window.addEventListener("mousemove", g), window.addEventListener("touchmove", g, {
                                passive: !1
                            }), window.addEventListener("click", y, !0), window.addEventListener("touchend", y), window.addEventListener("contextmenu", b),
                            function() {
                                window.removeEventListener("mousedown", x), window.removeEventListener("touchstart", x), window.removeEventListener("mousemove", g), window.removeEventListener("touchmove", g), window.removeEventListener("click", y, !0), window.removeEventListener("touchend", y), window.removeEventListener("contextmenu", b), o && (o.style.outline = "none"), e && (clearTimeout(e), e = void 0)
                            }
                    }), [w, n, p]), (0, i.jsxs)("div", {
                        className: "absolute inset-0 overflow-hidden select-none z-10",
                        children: [(0, i.jsx)("div", {
                            ref: E,
                            className: "absolute top-0 left-0 bottom-[90px] right-[90px]",
                            children: t.map((function(e, t) {
                                var n, r;
                                if (!e.hidden || b) {
                                    var d, f, v = 64,
                                        x = 64,
                                        g = e.name || "\u200b";
                                    switch (e.style) {
                                        case A.Default:
                                            d = s.Z.src;
                                            break;
                                        case A.Gray:
                                            d = u;
                                            break;
                                        case A.White:
                                            d = m;
                                            break;
                                        case A.Black:
                                            d = l.Z.src;
                                            break;
                                        case A.Gif:
                                            d = c;
                                            break;
                                        case A.Image:
                                            d = e.src, v = 84, x = 84, g = ""
                                    }
                                    var p, w = null !== (f = null === (n = _[t]) || void 0 === n ? void 0 : n[0]) && void 0 !== f ? f : e.x,
                                        y = null !== (p = null === (r = _[t]) || void 0 === r ? void 0 : r[1]) && void 0 !== p ? p : e.y,
                                        j = {
                                            draggable: !1,
                                            "data-drag": !0,
                                            "data-index": t,
                                            className: (0, a.Z)("absolute text-sm flex flex-col items-center justify-center pointer-events-none w-[90px]", e.style === A.Image ? "h-[90px]" : "", e.onClick ? "cursor-pointer" : ""),
                                            style: {
                                                top: "".concat(100 * y, "%"),
                                                left: "".concat(100 * w, "%"),
                                                WebkitTouchCallout: "none"
                                            },
                                            onClick: function(t) {
                                                var n;
                                                t.defaultPrevented || (null === (n = e.onClick) || void 0 === n || n.call(e))
                                            }
                                        },
                                        E = (0, i.jsx)("img", {
                                            draggable: "false",
                                            src: d,
                                            width: v,
                                            height: x,
                                            className: "rendering-pixelated pointer-events-auto"
                                        }),
                                        k = !!g && (0, i.jsx)("span", {
                                            className: "pointer-events-auto text-center bg-white",
                                            children: g
                                        });
                                    return e.href ? (0, i.jsx)(o.default, {
                                        href: e.href,
                                        children: (0, i.jsxs)("a", h({}, j, {
                                            children: [E, k]
                                        }))
                                    }, t) : (0, i.jsxs)("div", h({}, j, {
                                        children: [E, k]
                                    }), t)
                                }
                            }))
                        }), !!L && (0, i.jsxs)(g, h({}, L, {
                            ref: I,
                            children: [(0, i.jsx)("div", {
                                className: "context-menu__item",
                                role: "menuitem",
                                onClick: function() {
                                    history.back(), D(null)
                                },
                                children: "Back"
                            }), (0, i.jsx)("div", {
                                className: "context-menu__item",
                                children: "Forward"
                            }), (0, i.jsx)("div", {
                                className: "context-menu__item",
                                role: "menuitem",
                                onClick: function() {
                                    window.location.reload(), D(null)
                                },
                                children: "Reload"
                            }), S ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "context-menu__separator"
                                }), (0, i.jsx)("div", {
                                    className: "context-menu__item",
                                    role: "menuitem",
                                    onClick: function() {
                                        D(null)
                                    },
                                    children: "Copy"
                                }), (0, i.jsx)("div", {
                                    className: "context-menu__item",
                                    children: "Rename"
                                })]
                            }) : (0, i.jsx)(i.Fragment, {}), (0, i.jsx)("div", {
                                className: "context-menu__separator"
                            }), (0, i.jsx)("div", {
                                className: "context-menu__item",
                                role: b ? void 0 : "menuitem",
                                onClick: function() {
                                    D(null), j(!0)
                                },
                                children: "Show Hidden"
                            }), (0, i.jsx)("div", {
                                className: "context-menu__item",
                                children: "Arrange All"
                            })]
                        }))]
                    })
                },
                g = (0, r.forwardRef)((function(e, t) {
                    var n = e.x,
                        a = e.y,
                        o = e.children;
                    return (0, i.jsx)("div", {
                        className: "fixed context-menu__content z-[999999]",
                        role: "menu",
                        ref: (0, r.useCallback)((function(e) {
                            if ("function" === typeof t ? t(e) : null !== t && (t.current = e), e) {
                                var i = document.documentElement.clientWidth,
                                    o = document.documentElement.clientHeight,
                                    r = e.getBoundingClientRect();
                                n + r.width > i - 10 ? e.style.left = "".concat(Math.min(i - r.width - 10, Math.max(10, n - r.width)), "px") : e.style.left = "".concat(Math.max(10, n), "px"), a + r.height > o - 10 ? e.style.top = "".concat(Math.min(o - r.height - 10, Math.max(10, a - r.height)), "px") : e.style.top = "".concat(Math.max(10, a), "px")
                            }
                        }), [n, a, t]),
                        children: o
                    })
                }))
        },
        3997: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return o
                }
            });
            var i = n(5893),
                a = n(9008),
                o = function(e) {
                    var t = e.title,
                        n = e.description;
                    return (0, i.jsxs)(a.default, {
                        children: [(0, i.jsx)("meta", {
                            charSet: "UTF-8"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, i.jsx)("title", {
                            children: t
                        }), n && (0, i.jsx)("meta", {
                            name: "description",
                            content: n
                        }), (0, i.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, i.jsx)("meta", {
                            property: "og:title",
                            content: t
                        }), n && (0, i.jsx)("meta", {
                            property: "og:description",
                            content: n
                        }), (0, i.jsx)("meta", {
                            property: "og:image",
                            content: "https://oklama.com/card_white_800x418.jpg"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:title",
                            content: t
                        }), n && (0, i.jsx)("meta", {
                            name: "twitter:description",
                            content: n
                        }), (0, i.jsx)("meta", {
                            name: "twitter:image",
                            content: "https://oklama.com/card_white_800x418.jpg"
                        }), (0, i.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }), (0, i.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), (0, i.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#da532c"
                        }), (0, i.jsx)("meta", {
                            name: "theme-color",
                            content: "#ffffff"
                        })]
                    })
                }
        }
    }
]);