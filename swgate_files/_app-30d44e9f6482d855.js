(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6363: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(6505)
            }])
        },
        6505: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(5893),
                a = (n(7107), n(9008)),
                o = n(1163),
                c = n(4298),
                u = n(7294);

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), r.forEach((function(e) {
                        i(t, e, n[e])
                    }))
                }
                return t
            }
            var s = "G-8TZJQZSM1R",
                g = function(t) {
                    try {
                        window.gtag("config", s, {
                            page_path: t
                        })
                    } catch (e) {}
                };
            e.default = function(t) {
                var e = t.Component,
                    n = t.pageProps,
                    i = e.getLayout,
                    l = void 0 === i ? function(t) {
                        return (0, r.jsx)(r.Fragment, {
                            children: t.children
                        })
                    } : i,
                    d = (0, o.useRouter)();
                return (0, u.useEffect)((function() {
                    return d.events.on("routeChangeComplete", g),
                        function() {
                            d.events.off("routeChangeComplete", g)
                        }
                }), [d.events]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.default, {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(s),
                            strategy: "afterInteractive"
                        }), (0, r.jsx)(c.default, {
                            id: "google-analytics",
                            strategy: "afterInteractive",
                            children: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','".concat(s, "');")
                        })]
                    }), (0, r.jsx)(a.default, {
                        children: (0, r.jsx)("title", {
                            children: "swgate"
                        })
                    }), l(f({}, n, {
                        children: (0, r.jsx)(e, f({}, n))
                    }))]
                })
            }
        },
        7107: function() {},
        9008: function(t, e, n) {
            t.exports = n(3121)
        },
        1163: function(t, e, n) {
            t.exports = n(880)
        },
        4298: function(t, e, n) {
            t.exports = n(3573)
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [774, 179], (function() {
            return e(6363), e(880)
        }));
        var n = t.O();
        _N_E = n
    }
]);