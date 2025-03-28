/*!
 * Salvattore 1.0.5 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 * Licensed under the MIT license.
 * Copyright (c) 2013-2014 Rolando Murillo and Giorgio Leveroni
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.salvattore = t()
}(this, function() { /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
    window.matchMedia || (window.matchMedia = function() {
            "use strict";
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    r = null;
                t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), r = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                    matchMedium: function(e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === r.width
                    }
                }
            }
            return function(t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        }()), /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
        function() {
            "use strict";
            if (window.matchMedia && window.matchMedia("all").addListener) return !1;
            var e = window.matchMedia,
                t = e("only all").matches,
                n = !1,
                r = 0,
                a = [],
                i = function() {
                    clearTimeout(r), r = setTimeout(function() {
                        for (var t = 0, n = a.length; n > t; t++) {
                            var r = a[t].mql,
                                i = a[t].listeners || [],
                                o = e(r.media).matches;
                            if (o !== r.matches) {
                                r.matches = o;
                                for (var c = 0, l = i.length; l > c; c++) i[c].call(window, r)
                            }
                        }
                    }, 30)
                };
            window.matchMedia = function(r) {
                var o = e(r),
                    c = [],
                    l = 0;
                return o.addListener = function(e) {
                    t && (n || (n = !0, window.addEventListener("resize", i, !0)), 0 === l && (l = a.push({
                        mql: o,
                        listeners: c
                    })), c.push(e))
                }, o.removeListener = function(e) {
                    for (var t = 0, n = c.length; n > t; t++) c[t] === e && c.splice(t, 1)
                }, o
            }
        }(),
        function() {
            "use strict";
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
                var n = (new Date).getTime(),
                    r = Math.max(0, 16 - (n - e)),
                    a = window.setTimeout(function() {
                        t(n + r)
                    }, r);
                return e = n + r, a
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }(), "function" != typeof window.CustomEvent && ! function() {
            "use strict";

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }();
    var e = function(e, t) {
        "use strict";
        var n = {},
            r = [],
            a = [],
            i = [],
            o = function(e, t, n) {
                e.dataset ? e.dataset[t] = n : e.setAttribute("data-" + t, n)
            };
        return n.obtainGridSettings = function(t) {
            var n = e.getComputedStyle(t, ":before"),
                r = n.getPropertyValue("content").slice(1, -1),
                a = r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),
                i = 1,
                o = [];
            return a ? (i = a[1], o = a[2], o = o ? o.split(".") : ["column"]) : (a = r.match(/^\s*\.(.+)\s+(\d+)\s*$/), a && (o = a[1], i = a[2], i && (i = i.split(".")))), {
                numberOfColumns: i,
                columnClasses: o
            }
        }, n.addColumns = function(e, r) {
            for (var a, i = n.obtainGridSettings(e), c = i.numberOfColumns, l = i.columnClasses, s = new Array(+c), u = t.createDocumentFragment(), d = c; 0 !== d--;) a = "[data-columns] > *:nth-child(" + c + "n-" + d + ")", s.push(r.querySelectorAll(a));
            s.forEach(function(e) {
                var n = t.createElement("div"),
                    r = t.createDocumentFragment();
                n.className = l.join(" "), Array.prototype.forEach.call(e, function(e) {
                    r.appendChild(e)
                }), n.appendChild(r), u.appendChild(n)
            }), e.appendChild(u), o(e, "columns", c)
        }, n.removeColumns = function(n) {
            var r = t.createRange();
            r.selectNodeContents(n);
            var a = Array.prototype.filter.call(r.extractContents().childNodes, function(t) {
                    return t instanceof e.HTMLElement
                }),
                i = a.length,
                c = a[0].childNodes.length,
                l = new Array(c * i);
            Array.prototype.forEach.call(a, function(e, t) {
                Array.prototype.forEach.call(e.children, function(e, n) {
                    l[n * i + t] = e
                })
            });
            var s = t.createElement("div");
            return o(s, "columns", 0), l.filter(function(e) {
                return !!e
            }).forEach(function(e) {
                s.appendChild(e)
            }), s
        }, n.recreateColumns = function(t) {
            e.requestAnimationFrame(function() {
                n.addColumns(t, n.removeColumns(t));
                var e = new CustomEvent("columnsChange");
                t.dispatchEvent(e)
            })
        }, n.mediaQueryChange = function(e) {
            e.matches && Array.prototype.forEach.call(r, n.recreateColumns)
        }, n.getCSSRules = function(e) {
            var t;
            try {
                t = e.sheet.cssRules || e.sheet.rules
            } catch (n) {
                return []
            }
            return t || []
        }, n.getStylesheets = function() {
            return Array.prototype.concat.call(Array.prototype.slice.call(t.querySelectorAll("style[type='text/css']")), Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']")))
        }, n.mediaRuleHasColumnsSelector = function(e) {
            var t, n;
            try {
                t = e.length
            } catch (r) {
                t = 0
            }
            for (; t--;)
                if (n = e[t], n.selectorText && n.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0;
            return !1
        }, n.scanMediaQueries = function() {
            var t = [];
            if (e.matchMedia) {
                n.getStylesheets().forEach(function(e) {
                    Array.prototype.forEach.call(n.getCSSRules(e), function(e) {
                        e.media && e.cssRules && n.mediaRuleHasColumnsSelector(e.cssRules) && t.push(e)
                    })
                });
                var r = a.filter(function(e) {
                    return -1 === t.indexOf(e)
                });
                i.filter(function(e) {
                    return -1 !== r.indexOf(e.rule)
                }).forEach(function(e) {
                    e.mql.removeListener(n.mediaQueryChange)
                }), i = i.filter(function(e) {
                    return -1 === r.indexOf(e.rule)
                }), t.filter(function(e) {
                    return -1 == a.indexOf(e)
                }).forEach(function(t) {
                    var r = e.matchMedia(t.media.mediaText);
                    r.addListener(n.mediaQueryChange), i.push({
                        rule: t,
                        mql: r
                    })
                }), a.length = 0, a = t
            }
        }, n.rescanMediaQueries = function() {
            n.scanMediaQueries(), Array.prototype.forEach.call(r, n.recreateColumns)
        }, n.nextElementColumnIndex = function(e, t) {
            var n, r, a, i = e.children,
                o = i.length,
                c = 0,
                l = 0;
            for (a = 0; o > a; a++) n = i[a], r = n.children.length + (t[a].children || t[a].childNodes).length, 0 === c && (c = r), c > r && (l = a, c = r);
            return l
        }, n.createFragmentsList = function(e) {
            for (var n = new Array(e), r = 0; r !== e;) n[r] = t.createDocumentFragment(), r++;
            return n
        }, n.appendElements = function(e, t) {
            var r = e.children,
                a = r.length,
                i = n.createFragmentsList(a);
            Array.prototype.forEach.call(t, function(t) {
                var r = n.nextElementColumnIndex(e, i);
                i[r].appendChild(t)
            }), Array.prototype.forEach.call(r, function(e, t) {
                e.appendChild(i[t])
            })
        }, n.prependElements = function(e, r) {
            var a = e.children,
                i = a.length,
                o = n.createFragmentsList(i),
                c = i - 1;
            r.forEach(function(e) {
                var t = o[c];
                t.insertBefore(e, t.firstChild), 0 === c ? c = i - 1 : c--
            }), Array.prototype.forEach.call(a, function(e, t) {
                e.insertBefore(o[t], e.firstChild)
            });
            for (var l = t.createDocumentFragment(), s = r.length % i; 0 !== s--;) l.appendChild(e.lastChild);
            e.insertBefore(l, e.firstChild)
        }, n.registerGrid = function(a) {
            if ("none" !== e.getComputedStyle(a).display) {
                if (jQuery(a).children('.column').length > 0) {
                    return
                }
                var i = t.createRange();
                i.selectNodeContents(a);
                var c = t.createElement("div");
                c.appendChild(i.extractContents()), o(c, "columns", 0), n.addColumns(a, c), r.push(a)
            }
        }, n.init = function() {
            var e = t.createElement("style");
            e.innerHTML = "[data-columns]::before{visibility:hidden;position:absolute;font-size:1px;}", t.head.appendChild(e);
            var r = t.querySelectorAll("[data-columns]");
            Array.prototype.forEach.call(r, n.registerGrid), n.scanMediaQueries()
        }, n.init(), {
            appendElements: n.appendElements,
            prependElements: n.prependElements,
            registerGrid: n.registerGrid,
            recreateColumns: n.recreateColumns,
            rescanMediaQueries: n.rescanMediaQueries,
            append_elements: n.appendElements,
            prepend_elements: n.prependElements,
            register_grid: n.registerGrid,
            recreate_columns: n.recreateColumns,
            rescan_media_queries: n.rescanMediaQueries
        }
    }(window, window.document);
    return e
})