!
function(a) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else {
		var b;
		"undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.html2canvas = a()
	}
}(function() {
	var a;
	return function d(a, b, c) {
		function e(g, h) {
			var i, j, k;
			if (!b[g]) {
				if (!a[g]) {
					if (i = "function" == typeof require && require, !h && i) return i(g, !0);
					if (f) return f(g, !0);
					throw j = new Error("Cannot find module '" + g + "'"), j.code = "MODULE_NOT_FOUND", j
				}
				k = b[g] = {
					exports: {}
				}, a[g][0].call(k.exports, function(b) {
					var c = a[g][1][b];
					return e(c ? c : b)
				}, k, k.exports, d, a, b, c)
			}
			return b[g].exports
		}
		var g, f = "function" == typeof require && require;
		for (g = 0; g < c.length; g++) e(c[g]);
		return e
	}({
		1: [function(b, c, d) {
			!
			function(b) {
				!
				function(e) {
					function A(a) {
						throw RangeError(v[a])
					}
					function B(a, b) {
						for (var c = a.length; c--;) a[c] = b(a[c]);
						return a
					}
					function C(a, b) {
						return B(a.split(u), b).join(".")
					}
					function D(a) {
						for (var e, f, b = [], c = 0, d = a.length; d > c;) e = a.charCodeAt(c++), e >= 55296 && 56319 >= e && d > c ? (f = a.charCodeAt(c++), 56320 == (64512 & f) ? b.push(((1023 & e) << 10) + (1023 & f) + 65536) : (b.push(e), c--)) : b.push(e);
						return b
					}
					function E(a) {
						return B(a, function(a) {
							var b = "";
							return a > 65535 && (a -= 65536, b += y(55296 | 1023 & a >>> 10), a = 56320 | 1023 & a), b += y(a)
						}).join("")
					}
					function F(a) {
						return 10 > a - 48 ? a - 22 : 26 > a - 65 ? a - 65 : 26 > a - 97 ? a - 97 : k
					}
					function G(a, b) {
						return a + 22 + 75 * (26 > a) - ((0 != b) << 5)
					}
					function H(a, b, c) {
						var d = 0;
						for (a = c ? x(a / o) : a >> 1, a += x(a / b); a > w * m >> 1; d += k) a = x(a / w);
						return x(d + (w + 1) * a / (a + n))
					}
					function I(a) {
						var d, h, i, n, o, s, t, u, v, w, b = [],
							c = a.length,
							e = 0,
							f = q,
							g = p;
						for (h = a.lastIndexOf(r), 0 > h && (h = 0), i = 0; h > i; ++i) a.charCodeAt(i) >= 128 && A("not-basic"), b.push(a.charCodeAt(i));
						for (n = h > 0 ? h + 1 : 0; c > n;) {
							for (o = e, s = 1, t = k; n >= c && A("invalid-input"), u = F(a.charCodeAt(n++)), (u >= k || u > x((j - e) / s)) && A("overflow"), e += u * s, v = g >= t ? l : t >= g + m ? m : t - g, !(v > u); t += k) w = k - v, s > x(j / w) && A("overflow"), s *= w;
							d = b.length + 1, g = H(e - o, d, 0 == o), x(e / d) > j - f && A("overflow"), f += x(e / d), e %= d, b.splice(e++, 0, f)
						}
						return E(b)
					}
					function J(a) {
						var b, c, d, e, f, g, h, i, n, o, s, u, v, w, z, t = [];
						for (a = D(a), u = a.length, b = q, c = 0, f = p, g = 0; u > g; ++g) s = a[g], 128 > s && t.push(y(s));
						for (d = e = t.length, e && t.push(r); u > d;) {
							for (h = j, g = 0; u > g; ++g) s = a[g], s >= b && h > s && (h = s);
							for (v = d + 1, h - b > x((j - c) / v) && A("overflow"), c += (h - b) * v, b = h, g = 0; u > g; ++g) if (s = a[g], b > s && ++c > j && A("overflow"), s == b) {
								for (i = c, n = k; o = f >= n ? l : n >= f + m ? m : n - f, !(o > i); n += k) z = i - o, w = k - o, t.push(y(G(o + z % w, 0))), i = x(z / w);
								t.push(y(G(i, 0))), f = H(c, v, d == e), c = 0, ++d
							}++c, ++b
						}
						return t.join("")
					}
					function K(a) {
						return C(a, function(a) {
							return s.test(a) ? I(a.slice(4).toLowerCase()) : a
						})
					}
					function L(a) {
						return C(a, function(a) {
							return t.test(a) ? "xn--" + J(a) : a
						})
					}
					var i, z, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, f = "object" == typeof d && d,
						g = "object" == typeof c && c && c.exports == f && c,
						h = "object" == typeof b && b;
					if ((h.global === h || h.window === h) && (e = h), j = 2147483647, k = 36, l = 1, m = 26, n = 38, o = 700, p = 72, q = 128, r = "-", s = /^xn--/, t = /[^ -~]/, u = /\x2E|\u3002|\uFF0E|\uFF61/g, v = {
						overflow: "Overflow: input needs wider integers to process",
						"not-basic": "Illegal input >= 0x80 (not a basic code point)",
						"invalid-input": "Invalid input"
					}, w = k - l, x = Math.floor, y = String.fromCharCode, i = {
						version: "1.2.4",
						ucs2: {
							decode: D,
							encode: E
						},
						decode: I,
						encode: J,
						toASCII: L,
						toUnicode: K
					}, "function" == typeof a && "object" == typeof a.amd && a.amd) a("punycode", function() {
						return i
					});
					else if (f && !f.nodeType) if (g) g.exports = i;
					else for (z in i) i.hasOwnProperty(z) && (f[z] = i[z]);
					else e.punycode = i
				}(this)
			}.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		2: [function(a, b) {
			function e(a, b, c) {
				!a.defaultView || b === a.defaultView.pageXOffset && c === a.defaultView.pageYOffset || a.defaultView.scrollTo(b, c)
			}
			function f(a, b) {
				try {
					b && (b.width = a.width, b.height = a.height, b.getContext("2d").putImageData(a.getContext("2d").getImageData(0, 0, a.width, a.height), 0, 0))
				} catch (c) {
					d("Unable to copy canvas content from", a, c)
				}
			}
			function g(a, b) {
				for (var c = 3 === a.nodeType ? document.createTextNode(a.nodeValue) : a.cloneNode(!1), d = a.firstChild; d;)(b === !0 || 1 !== d.nodeType || "SCRIPT" !== d.nodeName) && c.appendChild(g(d, b)), d = d.nextSibling;
				return 1 === a.nodeType && (c._scrollTop = a.scrollTop, c._scrollLeft = a.scrollLeft, "CANVAS" === a.nodeName ? f(a, c) : ("TEXTAREA" === a.nodeName || "SELECT" === a.nodeName) && (c.value = a.value)), c
			}
			function h(a) {
				if (1 === a.nodeType) {
					a.scrollTop = a._scrollTop, a.scrollLeft = a._scrollLeft;
					for (var b = a.firstChild; b;) h(b), b = b.nextSibling
				}
			}
			var d = a("./log");
			b.exports = function(a, b, c, d, f, i, j) {
				var k = g(a.documentElement, f.javascriptEnabled),
					l = b.createElement("iframe");
				return l.className = "html2canvas-container", l.style.visibility = "hidden", l.style.position = "fixed", l.style.left = "-10000px", l.style.top = "0px", l.style.border = "0", l.width = c, l.height = d, l.scrolling = "no", b.body.appendChild(l), new Promise(function(b) {
					var c = l.contentWindow.document;
					l.contentWindow.onload = l.onload = function() {
						var a = setInterval(function() {
							c.body.childNodes.length > 0 && (h(c.documentElement), clearInterval(a), "view" === f.type && (l.contentWindow.scrollTo(i, j), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || l.contentWindow.scrollY === j && l.contentWindow.scrollX === i || (c.documentElement.style.top = -j + "px", c.documentElement.style.left = -i + "px", c.documentElement.style.position = "absolute")), b(l))
						}, 50)
					}, c.open(), c.write("<!DOCTYPE html><html></html>"), e(a, i, j), c.replaceChild(c.adoptNode(k), c.documentElement), c.close()
				})
			}
		}, {
			"./log": 13
		}],
		3: [function(a, b) {
			function d(a) {
				this.r = 0, this.g = 0, this.b = 0, this.a = null, this.fromArray(a) || this.namedColor(a) || this.rgb(a) || this.rgba(a) || this.hex6(a) || this.hex3(a)
			}
			var e, f, g, h, i;
			d.prototype.darken = function(a) {
				var b = 1 - a;
				return new d([Math.round(this.r * b), Math.round(this.g * b), Math.round(this.b * b), this.a])
			}, d.prototype.isTransparent = function() {
				return 0 === this.a
			}, d.prototype.isBlack = function() {
				return 0 === this.r && 0 === this.g && 0 === this.b
			}, d.prototype.fromArray = function(a) {
				return Array.isArray(a) && (this.r = Math.min(a[0], 255), this.g = Math.min(a[1], 255), this.b = Math.min(a[2], 255), a.length > 3 && (this.a = a[3])), Array.isArray(a)
			}, e = /^#([a-f0-9]{3})$/i, d.prototype.hex3 = function(a) {
				var b = null;
				return null !== (b = a.match(e)) && (this.r = parseInt(b[1][0] + b[1][0], 16), this.g = parseInt(b[1][1] + b[1][1], 16), this.b = parseInt(b[1][2] + b[1][2], 16)), null !== b
			}, f = /^#([a-f0-9]{6})$/i, d.prototype.hex6 = function(a) {
				var b = null;
				return null !== (b = a.match(f)) && (this.r = parseInt(b[1].substring(0, 2), 16), this.g = parseInt(b[1].substring(2, 4), 16), this.b = parseInt(b[1].substring(4, 6), 16)), null !== b
			}, g = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/, d.prototype.rgb = function(a) {
				var b = null;
				return null !== (b = a.match(g)) && (this.r = Number(b[1]), this.g = Number(b[2]), this.b = Number(b[3])), null !== b
			}, h = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/, d.prototype.rgba = function(a) {
				var b = null;
				return null !== (b = a.match(h)) && (this.r = Number(b[1]), this.g = Number(b[2]), this.b = Number(b[3]), this.a = Number(b[4])), null !== b
			}, d.prototype.toString = function() {
				return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
			}, d.prototype.namedColor = function(a) {
				a = a.toLowerCase();
				var b = i[a];
				if (b) this.r = b[0], this.g = b[1], this.b = b[2];
				else if ("transparent" === a) return this.r = this.g = this.b = this.a = 0, !0;
				return !!b
			}, d.prototype.isColor = !0, i = {
				aliceblue: [240, 248, 255],
				antiquewhite: [250, 235, 215],
				aqua: [0, 255, 255],
				aquamarine: [127, 255, 212],
				azure: [240, 255, 255],
				beige: [245, 245, 220],
				bisque: [255, 228, 196],
				black: [0, 0, 0],
				blanchedalmond: [255, 235, 205],
				blue: [0, 0, 255],
				blueviolet: [138, 43, 226],
				brown: [165, 42, 42],
				burlywood: [222, 184, 135],
				cadetblue: [95, 158, 160],
				chartreuse: [127, 255, 0],
				chocolate: [210, 105, 30],
				coral: [255, 127, 80],
				cornflowerblue: [100, 149, 237],
				cornsilk: [255, 248, 220],
				crimson: [220, 20, 60],
				cyan: [0, 255, 255],
				darkblue: [0, 0, 139],
				darkcyan: [0, 139, 139],
				darkgoldenrod: [184, 134, 11],
				darkgray: [169, 169, 169],
				darkgreen: [0, 100, 0],
				darkgrey: [169, 169, 169],
				darkkhaki: [189, 183, 107],
				darkmagenta: [139, 0, 139],
				darkolivegreen: [85, 107, 47],
				darkorange: [255, 140, 0],
				darkorchid: [153, 50, 204],
				darkred: [139, 0, 0],
				darksalmon: [233, 150, 122],
				darkseagreen: [143, 188, 143],
				darkslateblue: [72, 61, 139],
				darkslategray: [47, 79, 79],
				darkslategrey: [47, 79, 79],
				darkturquoise: [0, 206, 209],
				darkviolet: [148, 0, 211],
				deeppink: [255, 20, 147],
				deepskyblue: [0, 191, 255],
				dimgray: [105, 105, 105],
				dimgrey: [105, 105, 105],
				dodgerblue: [30, 144, 255],
				firebrick: [178, 34, 34],
				floralwhite: [255, 250, 240],
				forestgreen: [34, 139, 34],
				fuchsia: [255, 0, 255],
				gainsboro: [220, 220, 220],
				ghostwhite: [248, 248, 255],
				gold: [255, 215, 0],
				goldenrod: [218, 165, 32],
				gray: [128, 128, 128],
				green: [0, 128, 0],
				greenyellow: [173, 255, 47],
				grey: [128, 128, 128],
				honeydew: [240, 255, 240],
				hotpink: [255, 105, 180],
				indianred: [205, 92, 92],
				indigo: [75, 0, 130],
				ivory: [255, 255, 240],
				khaki: [240, 230, 140],
				lavender: [230, 230, 250],
				lavenderblush: [255, 240, 245],
				lawngreen: [124, 252, 0],
				lemonchiffon: [255, 250, 205],
				lightblue: [173, 216, 230],
				lightcoral: [240, 128, 128],
				lightcyan: [224, 255, 255],
				lightgoldenrodyellow: [250, 250, 210],
				lightgray: [211, 211, 211],
				lightgreen: [144, 238, 144],
				lightgrey: [211, 211, 211],
				lightpink: [255, 182, 193],
				lightsalmon: [255, 160, 122],
				lightseagreen: [32, 178, 170],
				lightskyblue: [135, 206, 250],
				lightslategray: [119, 136, 153],
				lightslategrey: [119, 136, 153],
				lightsteelblue: [176, 196, 222],
				lightyellow: [255, 255, 224],
				lime: [0, 255, 0],
				limegreen: [50, 205, 50],
				linen: [250, 240, 230],
				magenta: [255, 0, 255],
				maroon: [128, 0, 0],
				mediumaquamarine: [102, 205, 170],
				mediumblue: [0, 0, 205],
				mediumorchid: [186, 85, 211],
				mediumpurple: [147, 112, 219],
				mediumseagreen: [60, 179, 113],
				mediumslateblue: [123, 104, 238],
				mediumspringgreen: [0, 250, 154],
				mediumturquoise: [72, 209, 204],
				mediumvioletred: [199, 21, 133],
				midnightblue: [25, 25, 112],
				mintcream: [245, 255, 250],
				mistyrose: [255, 228, 225],
				moccasin: [255, 228, 181],
				navajowhite: [255, 222, 173],
				navy: [0, 0, 128],
				oldlace: [253, 245, 230],
				olive: [128, 128, 0],
				olivedrab: [107, 142, 35],
				orange: [255, 165, 0],
				orangered: [255, 69, 0],
				orchid: [218, 112, 214],
				palegoldenrod: [238, 232, 170],
				palegreen: [152, 251, 152],
				paleturquoise: [175, 238, 238],
				palevioletred: [219, 112, 147],
				papayawhip: [255, 239, 213],
				peachpuff: [255, 218, 185],
				peru: [205, 133, 63],
				pink: [255, 192, 203],
				plum: [221, 160, 221],
				powderblue: [176, 224, 230],
				purple: [128, 0, 128],
				rebeccapurple: [102, 51, 153],
				red: [255, 0, 0],
				rosybrown: [188, 143, 143],
				royalblue: [65, 105, 225],
				saddlebrown: [139, 69, 19],
				salmon: [250, 128, 114],
				sandybrown: [244, 164, 96],
				seagreen: [46, 139, 87],
				seashell: [255, 245, 238],
				sienna: [160, 82, 45],
				silver: [192, 192, 192],
				skyblue: [135, 206, 235],
				slateblue: [106, 90, 205],
				slategray: [112, 128, 144],
				slategrey: [112, 128, 144],
				snow: [255, 250, 250],
				springgreen: [0, 255, 127],
				steelblue: [70, 130, 180],
				tan: [210, 180, 140],
				teal: [0, 128, 128],
				thistle: [216, 191, 216],
				tomato: [255, 99, 71],
				turquoise: [64, 224, 208],
				violet: [238, 130, 238],
				wheat: [245, 222, 179],
				white: [255, 255, 255],
				whitesmoke: [245, 245, 245],
				yellow: [255, 255, 0],
				yellowgreen: [154, 205, 50]
			}, b.exports = d
		}, {}],
		4: [function(b, c) {
			function q(a, b) {
				var d, e, g, c = p++;
				return b = b || {}, b.logging && (j.options.logging = !0, j.options.start = Date.now()), b.async = "undefined" == typeof b.async ? !0 : b.async, b.allowTaint = "undefined" == typeof b.allowTaint ? !1 : b.allowTaint, b.removeContainer = "undefined" == typeof b.removeContainer ? !0 : b.removeContainer, b.javascriptEnabled = "undefined" == typeof b.javascriptEnabled ? !1 : b.javascriptEnabled, b.imageTimeout = "undefined" == typeof b.imageTimeout ? 1e4 : b.imageTimeout, b.renderer = "function" == typeof b.renderer ? b.renderer : f, b.strict = !! b.strict, "string" == typeof a ? "string" != typeof b.proxy ? Promise.reject("Proxy must be used when rendering url") : (d = null != b.width ? b.width : window.innerWidth, e = null != b.height ? b.height : window.innerHeight, m(y(a), b.proxy, document, d, e, b).then(function(a) {
					return t(a.contentWindow.document.documentElement, a, b, d, e)
				})) : (g = (void 0 === a ? [document.documentElement] : a.length ? a : [a])[0], g.setAttribute(o + c, c), s(g.ownerDocument, b, g.ownerDocument.defaultView.innerWidth, g.ownerDocument.defaultView.innerHeight, c).then(function(a) {
					return "function" == typeof b.onrendered && (j("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), b.onrendered(a)), a
				}))
			}
			function s(a, b, c, d, e) {
				return l(a, a, c, d, b, a.defaultView.pageXOffset, a.defaultView.pageYOffset).then(function(f) {
					var g, h, i, k, l;
					return j("Document cloned"), g = o + e, h = "[" + g + "='" + e + "']", a.querySelector(h).removeAttribute(g), i = f.contentWindow, k = i.document.querySelector(h), l = "function" == typeof b.onclone ? Promise.resolve(b.onclone(i.document)) : Promise.resolve(!0), l.then(function() {
						return t(k, f, b, c, d)
					})
				})
			}
			function t(a, b, c, d, f) {
				var i = b.contentWindow,
					k = new e(i.document),
					l = new g(c, k),
					m = n(a),
					o = "view" === c.type ? d : w(i.document),
					p = "view" === c.type ? f : x(i.document),
					q = new c.renderer(o, p, l, c, document),
					r = new h(a, q, k, l, c);
				return r.ready.then(function() {
					j("Finished rendering");
					var d;
					return d = "view" === c.type ? v(q.canvas, {
						width: q.canvas.width,
						height: q.canvas.height,
						top: 0,
						left: 0,
						x: 0,
						y: 0
					}) : a === i.document.body || a === i.document.documentElement || null != c.canvas ? q.canvas : v(q.canvas, {
						width: null != c.width ? c.width : m.width,
						height: null != c.height ? c.height : m.height,
						top: m.top,
						left: m.left,
						x: 0,
						y: 0
					}), u(b, c), d
				})
			}
			function u(a, b) {
				b.removeContainer && (a.parentNode.removeChild(a), j("Cleaned up container"))
			}
			function v(a, b) {
				var h, i, c = document.createElement("canvas"),
					d = Math.min(a.width - 1, Math.max(0, b.left)),
					e = Math.min(a.width, Math.max(1, b.left + b.width)),
					f = Math.min(a.height - 1, Math.max(0, b.top)),
					g = Math.min(a.height, Math.max(1, b.top + b.height));
				return c.width = b.width, c.height = b.height, h = e - d, i = g - f, j("Cropping canvas at:", "left:", b.left, "top:", b.top, "width:", h, "height:", i), j("Resulting crop with width", b.width, "and height", b.height, "with x", d, "and y", f), c.getContext("2d").drawImage(a, d, f, h, i, b.x, b.y, h, i), c
			}
			function w(a) {
				return Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth))
			}
			function x(a) {
				return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
			}
			function y(a) {
				var b = document.createElement("a");
				return b.href = a, b.href = b.href, b
			}
			var r, e = b("./support"),
				f = b("./renderers/canvas"),
				g = b("./imageloader"),
				h = b("./nodeparser"),
				i = b("./nodecontainer"),
				j = b("./log"),
				k = b("./utils"),
				l = b("./clone"),
				m = b("./proxy").loadUrlDocument,
				n = k.getBounds,
				o = "data-html2canvas-node",
				p = 0;
			q.CanvasRenderer = f, q.NodeContainer = i, q.log = j, q.utils = k, r = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ?
			function() {
				return Promise.reject("No canvas support")
			} : q, c.exports = r, "function" == typeof a && a.amd && a("html2canvas", [], function() {
				return r
			})
		}, {
			"./clone": 2,
			"./imageloader": 11,
			"./log": 13,
			"./nodecontainer": 14,
			"./nodeparser": 15,
			"./proxy": 16,
			"./renderers/canvas": 20,
			"./support": 22,
			"./utils": 26
		}],
		5: [function(a, b) {
			function f(a) {
				if (this.src = a, d("DummyImageContainer for", a), !this.promise || !this.image) {
					d("Initiating DummyImageContainer"), f.prototype.image = new Image;
					var b = this.image;
					f.prototype.promise = new Promise(function(a, c) {
						b.onload = a, b.onerror = c, b.src = e(), b.complete === !0 && a(b)
					})
				}
			}
			var d = a("./log"),
				e = a("./utils").smallImage;
			b.exports = f
		}, {
			"./log": 13,
			"./utils": 26
		}],
		6: [function(a, b) {
			function e(a, b) {
				var h, i, c = document.createElement("div"),
					e = document.createElement("img"),
					f = document.createElement("span"),
					g = "Hidden Text";
				c.style.visibility = "hidden", c.style.fontFamily = a, c.style.fontSize = b, c.style.margin = 0, c.style.padding = 0, document.body.appendChild(c), e.src = d(), e.width = 1, e.height = 1, e.style.margin = 0, e.style.padding = 0, e.style.verticalAlign = "baseline", f.style.fontFamily = a, f.style.fontSize = b, f.style.margin = 0, f.style.padding = 0, f.appendChild(document.createTextNode(g)), c.appendChild(f), c.appendChild(e), h = e.offsetTop - f.offsetTop + 1, c.removeChild(f), c.appendChild(document.createTextNode(g)), c.style.lineHeight = "normal", e.style.verticalAlign = "super", i = e.offsetTop - c.offsetTop + 1, document.body.removeChild(c), this.baseline = h, this.lineWidth = 1, this.middle = i
			}
			var d = a("./utils").smallImage;
			b.exports = e
		}, {
			"./utils": 26
		}],
		7: [function(a, b) {
			function e() {
				this.data = {}
			}
			var d = a("./font");
			e.prototype.getMetrics = function(a, b) {
				return void 0 === this.data[a + "-" + b] && (this.data[a + "-" + b] = new d(a, b)), this.data[a + "-" + b]
			}, b.exports = e
		}, {
			"./font": 6
		}],
		8: [function(a, b) {
			function g(b, c, d) {
				var f, g;
				this.image = null, this.src = b, f = this, g = e(b), this.promise = (c ? new Promise(function(a) {
					"about:blank" === b.contentWindow.document.URL || null == b.contentWindow.document.documentElement ? b.contentWindow.onload = b.onload = function() {
						a(b)
					} : a(b)
				}) : this.proxyLoad(d.proxy, g, d)).then(function(b) {
					var c = a("./core");
					return c(b.contentWindow.document.documentElement, {
						type: "view",
						width: b.width,
						height: b.height,
						proxy: d.proxy,
						javascriptEnabled: d.javascriptEnabled,
						removeContainer: d.removeContainer,
						allowTaint: d.allowTaint,
						imageTimeout: d.imageTimeout / 2
					})
				}).then(function(a) {
					return f.image = a
				})
			}
			var d = a("./utils"),
				e = d.getBounds,
				f = a("./proxy").loadUrlDocument;
			g.prototype.proxyLoad = function(a, b, c) {
				var d = this.src;
				return f(d.src, a, d.ownerDocument, b.width, b.height, c)
			}, b.exports = g
		}, {
			"./core": 4,
			"./proxy": 16,
			"./utils": 26
		}],
		9: [function(a, b) {
			function d(a) {
				this.src = a.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
			}
			d.TYPES = {
				LINEAR: 1,
				RADIAL: 2
			}, d.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, b.exports = d
		}, {}],
		10: [function(a, b) {
			function d(a, b) {
				this.src = a, this.image = new Image;
				var c = this;
				this.tainted = null, this.promise = new Promise(function(d, e) {
					c.image.onload = d, c.image.onerror = e, b && (c.image.crossOrigin = "anonymous"), c.image.src = a, c.image.complete === !0 && d(c.image)
				})
			}
			b.exports = d
		}, {}],
		11: [function(a, b) {
			function n(a, b) {
				this.link = null, this.options = a, this.support = b, this.origin = this.getOrigin(window.location.href)
			}
			var d = a("./log"),
				e = a("./imagecontainer"),
				f = a("./dummyimagecontainer"),
				g = a("./proxyimagecontainer"),
				h = a("./framecontainer"),
				i = a("./svgcontainer"),
				j = a("./svgnodecontainer"),
				k = a("./lineargradientcontainer"),
				l = a("./webkitgradientcontainer"),
				m = a("./utils").bind;
			n.prototype.findImages = function(a) {
				var b = [];
				return a.reduce(function(a, b) {
					switch (b.node.nodeName) {
					case "IMG":
						return a.concat([{
							args: [b.node.src],
							method: "url"
						}]);
					case "svg":
					case "IFRAME":
						return a.concat([{
							args: [b.node],
							method: b.node.nodeName
						}])
					}
					return a
				}, []).forEach(this.addImage(b, this.loadImage), this), b
			}, n.prototype.findBackgroundImage = function(a, b) {
				return b.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(a, this.loadImage), this), a
			}, n.prototype.addImage = function(a, b) {
				return function(c) {
					c.args.forEach(function(e) {
						this.imageExists(a, e) || (a.splice(0, 0, b.call(this, c)), d("Added image #" + a.length, "string" == typeof e ? e.substring(0, 100) : e))
					}, this)
				}
			}, n.prototype.hasImageBackground = function(a) {
				return "none" !== a.method
			}, n.prototype.loadImage = function(a) {
				if ("url" === a.method) {
					var b = a.args[0];
					return !this.isSVG(b) || this.support.svg || this.options.allowTaint ? b.match(/data:image\/.*;base64,/i) ? new e(b.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), !1) : this.isSameOrigin(b) || this.options.allowTaint === !0 || this.isSVG(b) ? new e(b, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new e(b, !0) : this.options.proxy ? new g(b, this.options.proxy) : new f(b) : new i(b)
				}
				return "linear-gradient" === a.method ? new k(a) : "gradient" === a.method ? new l(a) : "svg" === a.method ? new j(a.args[0], this.support.svg) : "IFRAME" === a.method ? new h(a.args[0], this.isSameOrigin(a.args[0].src), this.options) : new f(a)
			}, n.prototype.isSVG = function(a) {
				return "svg" === a.substring(a.length - 3).toLowerCase() || i.prototype.isInline(a)
			}, n.prototype.imageExists = function(a, b) {
				return a.some(function(a) {
					return a.src === b
				})
			}, n.prototype.isSameOrigin = function(a) {
				return this.getOrigin(a) === this.origin
			}, n.prototype.getOrigin = function(a) {
				var b = this.link || (this.link = document.createElement("a"));
				return b.href = a, b.href = b.href, b.protocol + b.hostname + b.port
			}, n.prototype.getPromise = function(a) {
				return this.timeout(a, this.options.imageTimeout)["catch"](function() {
					var b = new f(a.src);
					return b.promise.then(function(b) {
						a.image = b
					})
				})
			}, n.prototype.get = function(a) {
				var b = null;
				return this.images.some(function(c) {
					return (b = c).src === a
				}) ? b : null
			}, n.prototype.fetch = function(a) {
				return this.images = a.reduce(m(this.findBackgroundImage, this), this.findImages(a)), this.images.forEach(function(a, b) {
					a.promise.then(function() {
						d("Succesfully loaded image #" + (b + 1), a)
					}, function(c) {
						d("Failed loading image #" + (b + 1), a, c)
					})
				}), this.ready = Promise.all(this.images.map(this.getPromise, this)), d("Finished searching images"), this
			}, n.prototype.timeout = function(a, b) {
				var c, e = Promise.race([a.promise, new Promise(function(e, f) {
					c = setTimeout(function() {
						d("Timed out loading image", a), f(a)
					}, b)
				})]).then(function(a) {
					return clearTimeout(c), a
				});
				return e["catch"](function() {
					clearTimeout(c)
				}), e
			}, b.exports = n
		}, {
			"./dummyimagecontainer": 5,
			"./framecontainer": 8,
			"./imagecontainer": 10,
			"./lineargradientcontainer": 12,
			"./log": 13,
			"./proxyimagecontainer": 17,
			"./svgcontainer": 23,
			"./svgnodecontainer": 24,
			"./utils": 26,
			"./webkitgradientcontainer": 27
		}],
		12: [function(a, b) {
			function f(a) {
				d.apply(this, arguments), this.type = d.TYPES.LINEAR;
				var b = f.REGEXP_DIRECTION.test(a.args[0]) || !d.REGEXP_COLORSTOP.test(a.args[0]);
				b ? a.args[0].split(/\s+/).reverse().forEach(function(a, b) {
					var c, d, e;
					switch (a) {
					case "left":
						this.x0 = 0, this.x1 = 1;
						break;
					case "top":
						this.y0 = 0, this.y1 = 1;
						break;
					case "right":
						this.x0 = 1, this.x1 = 0;
						break;
					case "bottom":
						this.y0 = 1, this.y1 = 0;
						break;
					case "to":
						c = this.y0, d = this.x0, this.y0 = this.y1, this.x0 = this.x1, this.x1 = d, this.y1 = c;
						break;
					case "center":
						break;
					default:
						if (e = .01 * parseFloat(a, 10), isNaN(e)) break;
						0 === b ? (this.y0 = e, this.y1 = 1 - this.y0) : (this.x0 = e, this.x1 = 1 - this.x0)
					}
				}, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = a.args.slice(b ? 1 : 0).map(function(a) {
					var b = a.match(d.REGEXP_COLORSTOP),
						c = +b[2],
						f = 0 === c ? "%" : b[3];
					return {
						color: new e(b[1]),
						stop: "%" === f ? c / 100 : null
					}
				}), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(a, b) {
					null === a.stop && this.colorStops.slice(b).some(function(c, d) {
						return null !== c.stop ? (a.stop = (c.stop - this.colorStops[b - 1].stop) / (d + 1) + this.colorStops[b - 1].stop, !0) : !1
					}, this)
				}, this)
			}
			var d = a("./gradientcontainer"),
				e = a("./color");
			f.prototype = Object.create(d.prototype), f.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, b.exports = f
		}, {
			"./color": 3,
			"./gradientcontainer": 9
		}],
		13: [function(a, b) {
			var d = function() {
					d.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - d.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
				};
			d.options = {
				logging: !1
			}, b.exports = d
		}, {}],
		14: [function(a, b) {
			function i(a, b) {
				this.node = a, this.parent = b, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
			}
			function j(a) {
				var b = a.options[a.selectedIndex || 0];
				return b ? b.text || "" : ""
			}
			function k(a) {
				if (a && "matrix" === a[1]) return a[2].split(",").map(function(a) {
					return parseFloat(a.trim())
				});
				if (a && "matrix3d" === a[1]) {
					var b = a[2].split(",").map(function(a) {
						return parseFloat(a.trim())
					});
					return [b[0], b[1], b[4], b[5], b[12], b[13]]
				}
			}
			function l(a) {
				return -1 !== a.toString().indexOf("%")
			}
			function m(a) {
				return a.replace("px", "")
			}
			function n(a) {
				return parseFloat(a)
			}
			var d = a("./color"),
				e = a("./utils"),
				f = e.getBounds,
				g = e.parseBackgrounds,
				h = e.offsetBounds;
			i.prototype.cloneTo = function(a) {
				a.visible = this.visible, a.borders = this.borders, a.bounds = this.bounds, a.clip = this.clip, a.backgroundClip = this.backgroundClip, a.computedStyles = this.computedStyles, a.styles = this.styles, a.backgroundImages = this.backgroundImages, a.opacity = this.opacity
			}, i.prototype.getOpacity = function() {
				return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
			}, i.prototype.assignStack = function(a) {
				this.stack = a, a.children.push(this)
			}, i.prototype.isElementVisible = function() {
				return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
			}, i.prototype.css = function(a) {
				return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[a] || (this.styles[a] = this.computedStyles[a])
			}, i.prototype.prefixedCss = function(a) {
				var b = ["webkit", "moz", "ms", "o"],
					c = this.css(a);
				return void 0 === c && b.some(function(b) {
					return c = this.css(b + a.substr(0, 1).toUpperCase() + a.substr(1)), void 0 !== c
				}, this), void 0 === c ? null : c
			}, i.prototype.computedStyle = function(a) {
				return this.node.ownerDocument.defaultView.getComputedStyle(this.node, a)
			}, i.prototype.cssInt = function(a) {
				var b = parseInt(this.css(a), 10);
				return isNaN(b) ? 0 : b
			}, i.prototype.color = function(a) {
				return this.colors[a] || (this.colors[a] = new d(this.css(a)))
			}, i.prototype.cssFloat = function(a) {
				var b = parseFloat(this.css(a));
				return isNaN(b) ? 0 : b
			}, i.prototype.fontWeight = function() {
				var a = this.css("fontWeight");
				switch (parseInt(a, 10)) {
				case 401:
					a = "bold";
					break;
				case 400:
					a = "normal"
				}
				return a
			}, i.prototype.parseClip = function() {
				var a = this.css("clip").match(this.CLIP);
				return a ? {
					top: parseInt(a[1], 10),
					right: parseInt(a[2], 10),
					bottom: parseInt(a[3], 10),
					left: parseInt(a[4], 10)
				} : null
			}, i.prototype.parseBackgroundImages = function() {
				return this.backgroundImages || (this.backgroundImages = g(this.css("backgroundImage")))
			}, i.prototype.cssList = function(a, b) {
				var c = (this.css(a) || "").split(",");
				return c = c[b || 0] || c[0] || "auto", c = c.trim().split(" "), 1 === c.length && (c = [c[0], l(c[0]) ? "auto" : c[0]]), c
			}, i.prototype.parseBackgroundSize = function(a, b, c) {
				var e, f, g, h, d = this.cssList("backgroundSize", c);
				if (l(d[0])) e = a.width * parseFloat(d[0]) / 100;
				else {
					if (/contain|cover/.test(d[0])) return g = a.width / a.height, h = b.width / b.height, h > g ^ "contain" === d[0] ? {
						width: a.height * h,
						height: a.height
					} : {
						width: a.width,
						height: a.width / h
					};
					e = parseInt(d[0], 10)
				}
				return f = "auto" === d[0] && "auto" === d[1] ? b.height : "auto" === d[1] ? e / b.width * b.height : l(d[1]) ? a.height * parseFloat(d[1]) / 100 : parseInt(d[1], 10), "auto" === d[0] && (e = f / b.height * b.width), {
					width: e,
					height: f
				}
			}, i.prototype.parseBackgroundPosition = function(a, b, c, d) {
				var f, g, e = this.cssList("backgroundPosition", c);
				return f = l(e[0]) ? (a.width - (d || b).width) * (parseFloat(e[0]) / 100) : parseInt(e[0], 10), g = "auto" === e[1] ? f / b.width * b.height : l(e[1]) ? (a.height - (d || b).height) * parseFloat(e[1]) / 100 : parseInt(e[1], 10), "auto" === e[0] && (f = g / b.height * b.width), {
					left: f,
					top: g
				}
			}, i.prototype.parseBackgroundRepeat = function(a) {
				return this.cssList("backgroundRepeat", a)[0]
			}, i.prototype.parseTextShadows = function() {
				var c, e, f, a = this.css("textShadow"),
					b = [];
				if (a && "none" !== a) for (c = a.match(this.TEXT_SHADOW_PROPERTY), e = 0; c && e < c.length; e++) f = c[e].match(this.TEXT_SHADOW_VALUES), b.push({
					color: new d(f[0]),
					offsetX: f[1] ? parseFloat(f[1].replace("px", "")) : 0,
					offsetY: f[2] ? parseFloat(f[2].replace("px", "")) : 0,
					blur: f[3] ? f[3].replace("px", "") : 0
				});
				return b
			}, i.prototype.parseTransform = function() {
				var a, b;
				return this.transformData || (this.hasTransform() ? (a = this.parseBounds(), b = this.prefixedCss("transformOrigin").split(" ").map(m).map(n), b[0] += a.left, b[1] += a.top, this.transformData = {
					origin: b,
					matrix: this.parseTransformMatrix()
				}) : this.transformData = {
					origin: [0, 0],
					matrix: [1, 0, 0, 1, 0, 0]
				}), this.transformData
			}, i.prototype.parseTransformMatrix = function() {
				var a, b;
				return this.transformMatrix || (a = this.prefixedCss("transform"), b = a ? k(a.match(this.MATRIX_PROPERTY)) : null, this.transformMatrix = b ? b : [1, 0, 0, 1, 0, 0]), this.transformMatrix
			}, i.prototype.parseBounds = function() {
				return this.bounds || (this.bounds = this.hasTransform() ? h(this.node) : f(this.node))
			}, i.prototype.hasTransform = function() {
				return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
			}, i.prototype.getValue = function() {
				var a = this.node.value || "";
				return "SELECT" === this.node.tagName ? a = j(this.node) : "password" === this.node.type && (a = Array(a.length + 1).join("•")), 0 === a.length ? this.node.placeholder || "" : a
			}, i.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, i.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, i.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, i.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, b.exports = i
		}, {
			"./color": 3,
			"./utils": 26
		}],
		15: [function(a, b) {
			function q(a, b, c, e, g) {
				var h, l;
				d("Starting NodeParser"), this.renderer = b, this.options = g, this.range = null, this.support = c, this.renderQueue = [], this.stack = new k(!0, 1, a.ownerDocument, null), h = new f(a, null), g.background && b.rectangle(0, 0, b.width, b.height, new j(g.background)), a === a.ownerDocument.documentElement && (l = new f(h.color("backgroundColor").isTransparent() ? a.ownerDocument.body : a.ownerDocument.documentElement, null), b.rectangle(0, 0, b.width, b.height, l.color("backgroundColor"))), h.visibile = h.isElementVisible(), this.createPseudoHideStyles(a.ownerDocument), this.disableAnimations(a.ownerDocument), this.nodes = X([h].concat(this.getChildren(h)).filter(function(a) {
					return a.visible = a.isElementVisible()
				}).map(this.getPseudoElements, this)), this.fontMetrics = new i, d("Fetched nodes, total:", this.nodes.length), d("Calculate overflow clips"), this.calculateOverflowClips(), d("Start fetching images"), this.images = e.fetch(this.nodes.filter(P)), this.ready = this.images.ready.then(m(function() {
					return d("Images loaded, starting parsing"), d("Creating stacking contexts"), this.createStackingContexts(), d("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), d("Render queue created with " + this.renderQueue.length + " items"), new Promise(m(function(a) {
						g.async ? "function" == typeof g.async ? g.async.call(this, this.renderQueue, a) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, a)) : a() : (this.renderQueue.forEach(this.paint, this), a())
					}, this))
				}, this))
			}
			function r(a) {
				return a.parent && a.parent.clip.length
			}
			function s(a) {
				return a.replace(/(\-[a-z])/g, function(a) {
					return a.toUpperCase().replace("-", "")
				})
			}
			function t() {}
			function v(a, b, c, d) {
				return a.map(function(e, f) {
					var g, h, i, j;
					if (e.width > 0) switch (g = b.left, h = b.top, i = b.width, j = b.height - a[2].width, f) {
					case 0:
						j = a[0].width, e.args = z({
							c1: [g, h],
							c2: [g + i, h],
							c3: [g + i - a[1].width, h + j],
							c4: [g + a[3].width, h + j]
						}, d[0], d[1], c.topLeftOuter, c.topLeftInner, c.topRightOuter, c.topRightInner);
						break;
					case 1:
						g = b.left + b.width - a[1].width, i = a[1].width, e.args = z({
							c1: [g + i, h],
							c2: [g + i, h + j + a[2].width],
							c3: [g, h + j],
							c4: [g, h + a[0].width]
						}, d[1], d[2], c.topRightOuter, c.topRightInner, c.bottomRightOuter, c.bottomRightInner);
						break;
					case 2:
						h = h + b.height - a[2].width, j = a[2].width, e.args = z({
							c1: [g + i, h + j],
							c2: [g, h + j],
							c3: [g + a[3].width, h],
							c4: [g + i - a[3].width, h]
						}, d[2], d[3], c.bottomRightOuter, c.bottomRightInner, c.bottomLeftOuter, c.bottomLeftInner);
						break;
					case 3:
						i = a[3].width, e.args = z({
							c1: [g, h + j + a[2].width],
							c2: [g, h],
							c3: [g + i, h + a[0].width],
							c4: [g + i, h + j]
						}, d[3], d[0], c.bottomLeftOuter, c.bottomLeftInner, c.topLeftOuter, c.topLeftInner)
					}
					return e
				})
			}
			function w(a, b, c, d) {
				var e = 4 * ((Math.sqrt(2) - 1) / 3),
					f = c * e,
					g = d * e,
					h = a + c,
					i = b + d;
				return {
					topLeft: y({
						x: a,
						y: i
					}, {
						x: a,
						y: i - g
					}, {
						x: h - f,
						y: b
					}, {
						x: h,
						y: b
					}),
					topRight: y({
						x: a,
						y: b
					}, {
						x: a + f,
						y: b
					}, {
						x: h,
						y: i - g
					}, {
						x: h,
						y: i
					}),
					bottomRight: y({
						x: h,
						y: b
					}, {
						x: h,
						y: b + g
					}, {
						x: a + f,
						y: i
					}, {
						x: a,
						y: i
					}),
					bottomLeft: y({
						x: h,
						y: i
					}, {
						x: h - f,
						y: i
					}, {
						x: a,
						y: b + g
					}, {
						x: a,
						y: b
					})
				}
			}
			function x(a, b, c) {
				var d = a.left,
					e = a.top,
					f = a.width,
					g = a.height,
					h = b[0][0] < f / 2 ? b[0][0] : f / 2,
					i = b[0][1] < g / 2 ? b[0][1] : g / 2,
					j = b[1][0] < f / 2 ? b[1][0] : f / 2,
					k = b[1][1] < g / 2 ? b[1][1] : g / 2,
					l = b[2][0] < f / 2 ? b[2][0] : f / 2,
					m = b[2][1] < g / 2 ? b[2][1] : g / 2,
					n = b[3][0] < f / 2 ? b[3][0] : f / 2,
					o = b[3][1] < g / 2 ? b[3][1] : g / 2,
					p = f - j,
					q = g - m,
					r = f - l,
					s = g - o;
				return {
					topLeftOuter: w(d, e, h, i).topLeft.subdivide(.5),
					topLeftInner: w(d + c[3].width, e + c[0].width, Math.max(0, h - c[3].width), Math.max(0, i - c[0].width)).topLeft.subdivide(.5),
					topRightOuter: w(d + p, e, j, k).topRight.subdivide(.5),
					topRightInner: w(d + Math.min(p, f + c[3].width), e + c[0].width, p > f + c[3].width ? 0 : j - c[3].width, k - c[0].width).topRight.subdivide(.5),
					bottomRightOuter: w(d + r, e + q, l, m).bottomRight.subdivide(.5),
					bottomRightInner: w(d + Math.min(r, f - c[3].width), e + Math.min(q, g + c[0].width), Math.max(0, l - c[1].width), m - c[2].width).bottomRight.subdivide(.5),
					bottomLeftOuter: w(d, e + s, n, o).bottomLeft.subdivide(.5),
					bottomLeftInner: w(d + c[3].width, e + s, Math.max(0, n - c[3].width), o - c[2].width).bottomLeft.subdivide(.5)
				}
			}
			function y(a, b, c, d) {
				var e = function(a, b, c) {
						return {
							x: a.x + (b.x - a.x) * c,
							y: a.y + (b.y - a.y) * c
						}
					};
				return {
					start: a,
					startControl: b,
					endControl: c,
					end: d,
					subdivide: function(f) {
						var g = e(a, b, f),
							h = e(b, c, f),
							i = e(c, d, f),
							j = e(g, h, f),
							k = e(h, i, f),
							l = e(j, k, f);
						return [y(a, g, j, l), y(l, k, i, d)]
					},
					curveTo: function(a) {
						a.push(["bezierCurve", b.x, b.y, c.x, c.y, d.x, d.y])
					},
					curveToReversed: function(d) {
						d.push(["bezierCurve", c.x, c.y, b.x, b.y, a.x, a.y])
					}
				}
			}
			function z(a, b, c, d, e, f, g) {
				var h = [];
				return b[0] > 0 || b[1] > 0 ? (h.push(["line", d[1].start.x, d[1].start.y]), d[1].curveTo(h)) : h.push(["line", a.c1[0], a.c1[1]]), c[0] > 0 || c[1] > 0 ? (h.push(["line", f[0].start.x, f[0].start.y]), f[0].curveTo(h), h.push(["line", g[0].end.x, g[0].end.y]), g[0].curveToReversed(h)) : (h.push(["line", a.c2[0], a.c2[1]]), h.push(["line", a.c3[0], a.c3[1]])), b[0] > 0 || b[1] > 0 ? (h.push(["line", e[1].end.x, e[1].end.y]), e[1].curveToReversed(h)) : h.push(["line", a.c4[0], a.c4[1]]), h
			}
			function A(a, b, c, d, e, f, g) {
				b[0] > 0 || b[1] > 0 ? (a.push(["line", d[0].start.x, d[0].start.y]), d[0].curveTo(a), d[1].curveTo(a)) : a.push(["line", f, g]), (c[0] > 0 || c[1] > 0) && a.push(["line", e[0].start.x, e[0].start.y])
			}
			function B(a) {
				return a.cssInt("zIndex") < 0
			}
			function C(a) {
				return a.cssInt("zIndex") > 0
			}
			function D(a) {
				return 0 === a.cssInt("zIndex")
			}
			function E(a) {
				return -1 !== ["inline", "inline-block", "inline-table"].indexOf(a.css("display"))
			}
			function F(a) {
				return a instanceof k
			}
			function G(a) {
				return a.node.data.trim().length > 0
			}
			function H(a) {
				return /^(normal|none|0px)$/.test(a.parent.css("letterSpacing"))
			}
			function I(a) {
				return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(b) {
					var c = a.css("border" + b + "Radius"),
						d = c.split(" ");
					return d.length <= 1 && (d[1] = d[0]), d.map(U)
				})
			}
			function J(a) {
				return a.nodeType === Node.TEXT_NODE || a.nodeType === Node.ELEMENT_NODE
			}
			function K(a) {
				var b = a.css("position"),
					c = -1 !== ["absolute", "relative", "fixed"].indexOf(b) ? a.css("zIndex") : "auto";
				return "auto" !== c
			}
			function L(a) {
				return "static" !== a.css("position")
			}
			function M(a) {
				return "none" !== a.css("float")
			}
			function N(a) {
				return -1 !== ["inline-block", "inline-table"].indexOf(a.css("display"))
			}
			function O(a) {
				var b = this;
				return function() {
					return !a.apply(b, arguments)
				}
			}
			function P(a) {
				return a.node.nodeType === Node.ELEMENT_NODE
			}
			function Q(a) {
				return a.isPseudoElement === !0
			}
			function R(a) {
				return a.node.nodeType === Node.TEXT_NODE
			}
			function S(a) {
				return function(b, c) {
					return b.cssInt("zIndex") + a.indexOf(b) / a.length - (c.cssInt("zIndex") + a.indexOf(c) / a.length)
				}
			}
			function T(a) {
				return a.getOpacity() < 1
			}
			function U(a) {
				return parseInt(a, 10)
			}
			function V(a) {
				return a.width
			}
			function W(a) {
				return a.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(a.node.nodeName)
			}
			function X(a) {
				return [].concat.apply([], a)
			}
			function Y(a) {
				var b = a.substr(0, 1);
				return b === a.substr(a.length - 1) && b.match(/'|"/) ? a.substr(1, a.length - 2) : a
			}
			function Z(a) {
				for (var f, b = [], c = 0, d = !1; a.length;) $(a[c]) === d ? (f = a.splice(0, c), f.length && b.push(e.ucs2.encode(f)), d = !d, c = 0) : c++, c >= a.length && (f = a.splice(0, c), f.length && b.push(e.ucs2.encode(f)));
				return b
			}
			function $(a) {
				return -1 !== [32, 13, 10, 9, 45].indexOf(a)
			}
			function _(a) {
				return /[^\u0000-\u00ff]/.test(a)
			}
			var u, d = a("./log"),
				e = a("punycode"),
				f = a("./nodecontainer"),
				g = a("./textcontainer"),
				h = a("./pseudoelementcontainer"),
				i = a("./fontmetrics"),
				j = a("./color"),
				k = a("./stackingcontext"),
				l = a("./utils"),
				m = l.bind,
				n = l.getBounds,
				o = l.parseBackgrounds,
				p = l.offsetBounds;
			q.prototype.calculateOverflowClips = function() {
				this.nodes.forEach(function(a) {
					var b, c;
					P(a) ? (Q(a) && a.appendToDOM(), a.borders = this.parseBorders(a), b = "hidden" === a.css("overflow") ? [a.borders.clip] : [], c = a.parseClip(), c && -1 !== ["absolute", "fixed"].indexOf(a.css("position")) && b.push([
						["rect", a.bounds.left + c.left, a.bounds.top + c.top, c.right - c.left, c.bottom - c.top]
					]), a.clip = r(a) ? a.parent.clip.concat(b) : b, a.backgroundClip = "hidden" !== a.css("overflow") ? a.clip.concat([a.borders.clip]) : a.clip, Q(a) && a.cleanDOM()) : R(a) && (a.clip = r(a) ? a.parent.clip : []), Q(a) || (a.bounds = null)
				}, this)
			}, q.prototype.asyncRenderer = function(a, b, c) {
				c = c || Date.now(), this.paint(a[this.renderIndex++]), a.length === this.renderIndex ? b() : c + 20 > Date.now() ? this.asyncRenderer(a, b, c) : setTimeout(m(function() {
					this.asyncRenderer(a, b)
				}, this), 0)
			}, q.prototype.createPseudoHideStyles = function(a) {
				this.createStyles(a, "." + h.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' + "." + h.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
			}, q.prototype.disableAnimations = function(a) {
				this.createStyles(a, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
			}, q.prototype.createStyles = function(a, b) {
				var c = a.createElement("style");
				c.innerHTML = b, a.body.appendChild(c)
			}, q.prototype.getPseudoElements = function(a) {
				var c, d, b = [
					[a]
				];
				return a.node.nodeType === Node.ELEMENT_NODE && (c = this.getPseudoElement(a, ":before"), d = this.getPseudoElement(a, ":after"), c && b.push(c), d && b.push(d)), X(b)
			}, q.prototype.getPseudoElement = function(a, b) {
				var d, e, f, i, j, k, l, c = a.computedStyle(b);
				if (!c || !c.content || "none" === c.content || "-moz-alt-content" === c.content || "none" === c.display) return null;
				for (d = Y(c.content), e = "url" === d.substr(0, 3), f = document.createElement(e ? "img" : "html2canvaspseudoelement"), i = new h(f, a, b), j = c.length - 1; j >= 0; j--) k = s(c.item(j)), f.style[k] = c[k];
				return f.className = h.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + h.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, e ? (f.src = o(d)[0].args[0], [i]) : (l = document.createTextNode(d), f.appendChild(l), [i, new g(l, i)])
			}, q.prototype.getChildren = function(a) {
				return X([].filter.call(a.node.childNodes, J).map(function(b) {
					var c = [b.nodeType === Node.TEXT_NODE ? new g(b, a) : new f(b, a)].filter(W);
					return b.nodeType === Node.ELEMENT_NODE && c.length && "TEXTAREA" !== b.tagName ? c[0].isElementVisible() ? c.concat(this.getChildren(c[0])) : [] : c
				}, this))
			}, q.prototype.newStackingContext = function(a, b) {
				var d, c = new k(b, a.getOpacity(), a.node, a.parent);
				a.cloneTo(c), d = b ? c.getParentStack(this) : c.parent.stack, d.contexts.push(c), a.stack = c
			}, q.prototype.createStackingContexts = function() {
				this.nodes.forEach(function(a) {
					P(a) && (this.isRootElement(a) || T(a) || K(a) || this.isBodyWithTransparentRoot(a) || a.hasTransform()) ? this.newStackingContext(a, !0) : P(a) && (L(a) && D(a) || N(a) || M(a)) ? this.newStackingContext(a, !1) : a.assignStack(a.parent.stack)
				}, this)
			}, q.prototype.isBodyWithTransparentRoot = function(a) {
				return "BODY" === a.node.nodeName && a.parent.color("backgroundColor").isTransparent()
			}, q.prototype.isRootElement = function(a) {
				return null === a.parent
			}, q.prototype.sortStackingContexts = function(a) {
				a.contexts.sort(S(a.contexts.slice(0))), a.contexts.forEach(this.sortStackingContexts, this)
			}, q.prototype.parseTextBounds = function(a) {
				return function(b, c, d) {
					var e, f, g;
					if ("none" !== a.parent.css("textDecoration").substr(0, 4) || 0 !== b.trim().length) {
						if (this.support.rangeBounds && !a.parent.hasTransform()) return e = d.slice(0, c).join("").length, this.getRangeBounds(a.node, e, b.length);
						if (a.node && "string" == typeof a.node.data) return f = a.node.splitText(b.length), g = this.getWrapperBounds(a.node, a.parent.hasTransform()), a.node = f, g
					} else(!this.support.rangeBounds || a.parent.hasTransform()) && (a.node = a.node.splitText(b.length));
					return {}
				}
			}, q.prototype.getWrapperBounds = function(a, b) {
				var f, c = a.ownerDocument.createElement("html2canvaswrapper"),
					d = a.parentNode,
					e = a.cloneNode(!0);
				return c.appendChild(a.cloneNode(!0)), d.replaceChild(c, a), f = b ? p(c) : n(c), d.replaceChild(e, c), f
			}, q.prototype.getRangeBounds = function(a, b, c) {
				var d = this.range || (this.range = a.ownerDocument.createRange());
				return d.setStart(a, b), d.setEnd(a, b + c), d.getBoundingClientRect()
			}, q.prototype.parse = function(a) {
				var b = a.contexts.filter(B),
					c = a.children.filter(P),
					d = c.filter(O(M)),
					e = d.filter(O(L)).filter(O(E)),
					f = c.filter(O(L)).filter(M),
					g = d.filter(O(L)).filter(E),
					h = a.contexts.concat(d.filter(L)).filter(D),
					i = a.children.filter(R).filter(G),
					j = a.contexts.filter(C);
				b.concat(e).concat(f).concat(g).concat(h).concat(i).concat(j).forEach(function(a) {
					this.renderQueue.push(a), F(a) && (this.parse(a), this.renderQueue.push(new t))
				}, this)
			}, q.prototype.paint = function(a) {
				try {
					a instanceof t ? this.renderer.ctx.restore() : R(a) ? (Q(a.parent) && a.parent.appendToDOM(), this.paintText(a), Q(a.parent) && a.parent.cleanDOM()) : this.paintNode(a)
				} catch (b) {
					if (d(b), this.options.strict) throw b
				}
			}, q.prototype.paintNode = function(a) {
				F(a) && (this.renderer.setOpacity(a.opacity), this.renderer.ctx.save(), a.hasTransform() && this.renderer.setTransform(a.parseTransform())), "INPUT" === a.node.nodeName && "checkbox" === a.node.type ? this.paintCheckbox(a) : "INPUT" === a.node.nodeName && "radio" === a.node.type ? this.paintRadio(a) : this.paintElement(a)
			}, q.prototype.paintElement = function(a) {
				var b = a.parseBounds();
				this.renderer.clip(a.backgroundClip, function() {
					this.renderer.renderBackground(a, b, a.borders.borders.map(V))
				}, this), this.renderer.clip(a.clip, function() {
					this.renderer.renderBorders(a.borders.borders)
				}, this), this.renderer.clip(a.backgroundClip, function() {
					var c, e;
					switch (a.node.nodeName) {
					case "svg":
					case "IFRAME":
						c = this.images.get(a.node), c ? this.renderer.renderImage(a, b, a.borders, c) : d("Error loading <" + a.node.nodeName + ">", a.node);
						break;
					case "IMG":
						e = this.images.get(a.node.src), e ? this.renderer.renderImage(a, b, a.borders, e) : d("Error loading <img>", a.node.src);
						break;
					case "CANVAS":
						this.renderer.renderImage(a, b, a.borders, {
							image: a.node
						});
						break;
					case "SELECT":
					case "INPUT":
					case "TEXTAREA":
						this.paintFormValue(a)
					}
				}, this)
			}, q.prototype.paintCheckbox = function(a) {
				var b = a.parseBounds(),
					c = Math.min(b.width, b.height),
					d = {
						width: c - 1,
						height: c - 1,
						top: b.top,
						left: b.left
					},
					e = [3, 3],
					f = [e, e, e, e],
					g = [1, 1, 1, 1].map(function(a) {
						return {
							color: new j("#A5A5A5"),
							width: a
						}
					}),
					h = x(d, f, g);
				this.renderer.clip(a.backgroundClip, function() {
					this.renderer.rectangle(d.left + 1, d.top + 1, d.width - 2, d.height - 2, new j("#DEDEDE")), this.renderer.renderBorders(v(g, d, h, f)), a.node.checked && (this.renderer.font(new j("#424242"), "normal", "normal", "bold", c - 3 + "px", "arial"), this.renderer.text("✔", d.left + c / 6, d.top + c - 1))
				}, this)
			}, q.prototype.paintRadio = function(a) {
				var b = a.parseBounds(),
					c = Math.min(b.width, b.height) - 2;
				this.renderer.clip(a.backgroundClip, function() {
					this.renderer.circleStroke(b.left + 1, b.top + 1, c, new j("#DEDEDE"), 1, new j("#A5A5A5")), a.node.checked && this.renderer.circle(Math.ceil(b.left + c / 4) + 1, Math.ceil(b.top + c / 4) + 1, Math.floor(c / 2), new j("#424242"))
				}, this)
			}, q.prototype.paintFormValue = function(a) {
				var c, e, f, h, b = a.getValue();
				b.length > 0 && (c = a.node.ownerDocument, e = c.createElement("html2canvaswrapper"), f = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"], f.forEach(function(b) {
					try {
						e.style[b] = a.css(b)
					} catch (c) {
						d("html2canvas: Parse: Exception caught in renderFormValue: " + c.message)
					}
				}), h = a.parseBounds(), e.style.position = "fixed", e.style.left = h.left + "px", e.style.top = h.top + "px", e.textContent = b, c.body.appendChild(e), this.paintText(new g(e.firstChild, a)), c.body.removeChild(e))
			}, q.prototype.paintText = function(a) {
				var b, c, d, f, g, h;
				a.applyTextTransform(), b = e.ucs2.decode(a.node.data), c = this.options.letterRendering && !H(a) || _(a.node.data) ? b.map(function(a) {
					return e.ucs2.encode([a])
				}) : Z(b), d = a.parent.fontWeight(), f = a.parent.css("fontSize"), g = a.parent.css("fontFamily"), h = a.parent.parseTextShadows(), this.renderer.font(a.parent.color("color"), a.parent.css("fontStyle"), a.parent.css("fontVariant"), d, f, g), h.length ? this.renderer.fontShadow(h[0].color, h[0].offsetX, h[0].offsetY, h[0].blur) : this.renderer.clearShadow(), this.renderer.clip(a.parent.clip, function() {
					c.map(this.parseTextBounds(a), this).forEach(function(b, d) {
						b && (this.renderer.text(c[d], b.left, b.bottom), this.renderTextDecoration(a.parent, b, this.fontMetrics.getMetrics(g, f)))
					}, this)
				}, this)
			}, q.prototype.renderTextDecoration = function(a, b, c) {
				switch (a.css("textDecoration").split(" ")[0]) {
				case "underline":
					this.renderer.rectangle(b.left, Math.round(b.top + c.baseline + c.lineWidth), b.width, 1, a.color("color"));
					break;
				case "overline":
					this.renderer.rectangle(b.left, Math.round(b.top), b.width, 1, a.color("color"));
					break;
				case "line-through":
					this.renderer.rectangle(b.left, Math.ceil(b.top + c.middle + c.lineWidth), b.width, 1, a.color("color"))
				}
			}, u = {
				inset: [
					["darken", .6],
					["darken", .1],
					["darken", .1],
					["darken", .6]
				]
			}, q.prototype.parseBorders = function(a) {
				var b = a.parseBounds(),
					c = I(a),
					d = ["Top", "Right", "Bottom", "Left"].map(function(b, c) {
						var f, d = a.css("border" + b + "Style"),
							e = a.color("border" + b + "Color");
						return "inset" === d && e.isBlack() && (e = new j([255, 255, 255, e.a])), f = u[d] ? u[d][c] : null, {
							width: a.cssInt("border" + b + "Width"),
							color: f ? e[f[0]](f[1]) : e,
							args: null
						}
					}),
					e = x(b, c, d);
				return {
					clip: this.parseBackgroundClip(a, e, d, c, b),
					borders: v(d, b, e, c)
				}
			}, q.prototype.parseBackgroundClip = function(a, b, c, d, e) {
				var f = a.css("backgroundClip"),
					g = [];
				switch (f) {
				case "content-box":
				case "padding-box":
					A(g, d[0], d[1], b.topLeftInner, b.topRightInner, e.left + c[3].width, e.top + c[0].width), A(g, d[1], d[2], b.topRightInner, b.bottomRightInner, e.left + e.width - c[1].width, e.top + c[0].width), A(g, d[2], d[3], b.bottomRightInner, b.bottomLeftInner, e.left + e.width - c[1].width, e.top + e.height - c[2].width), A(g, d[3], d[0], b.bottomLeftInner, b.topLeftInner, e.left + c[3].width, e.top + e.height - c[2].width);
					break;
				default:
					A(g, d[0], d[1], b.topLeftOuter, b.topRightOuter, e.left, e.top), A(g, d[1], d[2], b.topRightOuter, b.bottomRightOuter, e.left + e.width, e.top), A(g, d[2], d[3], b.bottomRightOuter, b.bottomLeftOuter, e.left + e.width, e.top + e.height), A(g, d[3], d[0], b.bottomLeftOuter, b.topLeftOuter, e.left, e.top + e.height)
				}
				return g
			}, b.exports = q
		}, {
			"./color": 3,
			"./fontmetrics": 7,
			"./log": 13,
			"./nodecontainer": 14,
			"./pseudoelementcontainer": 18,
			"./stackingcontext": 21,
			"./textcontainer": 25,
			"./utils": 26,
			punycode: 1
		}],
		16: [function(a, b, c) {
			function i(a, b, c) {
				var f, g, e = "withCredentials" in new XMLHttpRequest;
				return b ? (f = m(e), g = n(b, a, f), e ? d(g) : l(c, g, f).then(function(a) {
					return h(a.content)
				})) : Promise.reject("No proxy configured")
			}
			function k(a, b, c) {
				var d = "crossOrigin" in new Image,
					e = m(d),
					f = n(b, a, e);
				return d ? Promise.resolve(f) : l(c, f, e).then(function(a) {
					return "data:" + a.type + ";base64," + a.content
				})
			}
			function l(a, b, c) {
				return new Promise(function(d, e) {
					var f = a.createElement("script"),
						g = function() {
							delete window.html2canvas.proxy[c], a.body.removeChild(f)
						};
					window.html2canvas.proxy[c] = function(a) {
						g(), d(a)
					}, f.src = b, f.onerror = function(a) {
						g(), e(a)
					}, a.body.appendChild(f)
				})
			}
			function m(a) {
				return a ? "" : "html2canvas_" + Date.now() + "_" + ++j + "_" + Math.round(1e5 * Math.random())
			}
			function n(a, b, c) {
				return a + "?url=" + encodeURIComponent(b) + (c.length ? "&callback=html2canvas.proxy." + c : "")

			}
			function o(a) {
				return function(b) {
					var d, h, i, c = new DOMParser;
					try {
						d = c.parseFromString(b, "text/html")
					} catch (e) {
						f("DOMParser not supported, falling back to createHTMLDocument"), d = document.implementation.createHTMLDocument("");
						try {
							d.open(), d.write(b), d.close()
						} catch (g) {
							f("createHTMLDocument write not supported, falling back to document.body.innerHTML"), d.body.innerHTML = b
						}
					}
					return h = d.querySelector("base"), h && h.href.host || (i = d.createElement("base"), i.href = a, d.head.insertBefore(i, d.head.firstChild)), d
				}
			}
			function p(a, b, c, d, e, f) {
				return new i(a, b, window.document).then(o(a)).then(function(a) {
					return g(a, c, d, e, f, 0, 0)
				})
			}
			var d = a("./xhr"),
				e = a("./utils"),
				f = a("./log"),
				g = a("./clone"),
				h = e.decode64,
				j = 0;
			c.Proxy = i, c.ProxyURL = k, c.loadUrlDocument = p
		}, {
			"./clone": 2,
			"./log": 13,
			"./utils": 26,
			"./xhr": 28
		}],
		17: [function(a, b) {
			function e(a, b) {
				var e, c = document.createElement("a");
				c.href = a, a = c.href, this.src = a, this.image = new Image, e = this, this.promise = new Promise(function(c, f) {
					e.image.crossOrigin = "Anonymous", e.image.onload = c, e.image.onerror = f, new d(a, b, document).then(function(a) {
						e.image.src = a
					})["catch"](f)
				})
			}
			var d = a("./proxy").ProxyURL;
			b.exports = e
		}, {
			"./proxy": 16
		}],
		18: [function(a, b) {
			function e(a, b, c) {
				d.call(this, a, b), this.isPseudoElement = !0, this.before = ":before" === c
			}
			var d = a("./nodecontainer");
			e.prototype.cloneTo = function(a) {
				e.prototype.cloneTo.call(this, a), a.isPseudoElement = !0, a.before = this.before
			}, e.prototype = Object.create(d.prototype), e.prototype.appendToDOM = function() {
				this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
			}, e.prototype.cleanDOM = function() {
				this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
			}, e.prototype.getHideClass = function() {
				return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
			}, e.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", e.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", b.exports = e
		}, {
			"./nodecontainer": 14
		}],
		19: [function(a, b) {
			function e(a, b, c, d, e) {
				this.width = a, this.height = b, this.images = c, this.options = d, this.document = e
			}
			var d = a("./log");
			e.prototype.renderImage = function(a, b, c, d) {
				var e = a.cssInt("paddingLeft"),
					f = a.cssInt("paddingTop"),
					g = a.cssInt("paddingRight"),
					h = a.cssInt("paddingBottom"),
					i = c.borders,
					j = b.width - (i[1].width + i[3].width + e + g),
					k = b.height - (i[0].width + i[2].width + f + h);
				this.drawImage(d, 0, 0, d.image.width || j, d.image.height || k, b.left + e + i[3].width, b.top + f + i[0].width, j, k)
			}, e.prototype.renderBackground = function(a, b, c) {
				b.height > 0 && b.width > 0 && (this.renderBackgroundColor(a, b), this.renderBackgroundImage(a, b, c))
			}, e.prototype.renderBackgroundColor = function(a, b) {
				var c = a.color("backgroundColor");
				c.isTransparent() || this.rectangle(b.left, b.top, b.width, b.height, c)
			}, e.prototype.renderBorders = function(a) {
				a.forEach(this.renderBorder, this)
			}, e.prototype.renderBorder = function(a) {
				a.color.isTransparent() || null === a.args || this.drawShape(a.args, a.color)
			}, e.prototype.renderBackgroundImage = function(a, b, c) {
				var e = a.parseBackgroundImages();
				e.reverse().forEach(function(e, f, g) {
					var h, i;
					switch (e.method) {
					case "url":
						h = this.images.get(e.args[0]), h ? this.renderBackgroundRepeating(a, b, h, g.length - (f + 1), c) : d("Error loading background-image", e.args[0]);
						break;
					case "linear-gradient":
					case "gradient":
						i = this.images.get(e.value), i ? this.renderBackgroundGradient(i, b, c) : d("Error loading background-image", e.args[0]);
						break;
					case "none":
						break;
					default:
						d("Unknown background-image type", e.args[0])
					}
				}, this)
			}, e.prototype.renderBackgroundRepeating = function(a, b, c, d, e) {
				var f = a.parseBackgroundSize(b, c.image, d),
					g = a.parseBackgroundPosition(b, c.image, d, f),
					h = a.parseBackgroundRepeat(d);
				switch (h) {
				case "repeat-x":
				case "repeat no-repeat":
					this.backgroundRepeatShape(c, g, f, b, b.left + e[3], b.top + g.top + e[0], 99999, f.height, e);
					break;
				case "repeat-y":
				case "no-repeat repeat":
					this.backgroundRepeatShape(c, g, f, b, b.left + g.left + e[3], b.top + e[0], f.width, 99999, e);
					break;
				case "no-repeat":
					this.backgroundRepeatShape(c, g, f, b, b.left + g.left + e[3], b.top + g.top + e[0], f.width, f.height, e);
					break;
				default:
					this.renderBackgroundRepeat(c, g, f, {
						top: b.top,
						left: b.left
					}, e[3], e[0])
				}
			}, b.exports = e
		}, {
			"./log": 13
		}],
		20: [function(a, b) {
			function g(a, b) {
				d.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = a, this.canvas.height = b), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, f("Initialized CanvasRenderer with size", a, "x", b)
			}
			function h(a) {
				return a.length > 0
			}
			var d = a("../renderer"),
				e = a("../lineargradientcontainer"),
				f = a("../log");
			g.prototype = Object.create(d.prototype), g.prototype.setFillStyle = function(a) {
				return this.ctx.fillStyle = "object" == typeof a && a.isColor ? a.toString() : a, this.ctx
			}, g.prototype.rectangle = function(a, b, c, d, e) {
				this.setFillStyle(e).fillRect(a, b, c, d)
			}, g.prototype.circle = function(a, b, c, d) {
				this.setFillStyle(d), this.ctx.beginPath(), this.ctx.arc(a + c / 2, b + c / 2, c / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
			}, g.prototype.circleStroke = function(a, b, c, d, e, f) {
				this.circle(a, b, c, d), this.ctx.strokeStyle = f.toString(), this.ctx.stroke()
			}, g.prototype.drawShape = function(a, b) {
				this.shape(a), this.setFillStyle(b).fill()
			}, g.prototype.taints = function(a) {
				if (null === a.tainted) {
					this.taintCtx.drawImage(a.image, 0, 0);
					try {
						this.taintCtx.getImageData(0, 0, 1, 1), a.tainted = !1
					} catch (b) {
						this.taintCtx = document.createElement("canvas").getContext("2d"), a.tainted = !0
					}
				}
				return a.tainted
			}, g.prototype.drawImage = function(a, b, c, d, e, f, g, h, i) {
				(!this.taints(a) || this.options.allowTaint) && this.ctx.drawImage(a.image, b, c, d, e, f, g, h, i)
			}, g.prototype.clip = function(a, b, c) {
				this.ctx.save(), a.filter(h).forEach(function(a) {
					this.shape(a).clip()
				}, this), b.call(c), this.ctx.restore()
			}, g.prototype.shape = function(a) {
				return this.ctx.beginPath(), a.forEach(function(a, b) {
					"rect" === a[0] ? this.ctx.rect.apply(this.ctx, a.slice(1)) : this.ctx[0 === b ? "moveTo" : a[0] + "To"].apply(this.ctx, a.slice(1))
				}, this), this.ctx.closePath(), this.ctx
			}, g.prototype.font = function(a, b, c, d, e, f) {
				this.setFillStyle(a).font = [b, c, d, e, f].join(" ").split(",")[0]
			}, g.prototype.fontShadow = function(a, b, c, d) {
				this.setVariable("shadowColor", a.toString()).setVariable("shadowOffsetY", b).setVariable("shadowOffsetX", c).setVariable("shadowBlur", d)
			}, g.prototype.clearShadow = function() {
				this.setVariable("shadowColor", "rgba(0,0,0,0)")
			}, g.prototype.setOpacity = function(a) {
				this.ctx.globalAlpha = a
			}, g.prototype.setTransform = function(a) {
				this.ctx.translate(a.origin[0], a.origin[1]), this.ctx.transform.apply(this.ctx, a.matrix), this.ctx.translate(-a.origin[0], -a.origin[1])
			}, g.prototype.setVariable = function(a, b) {
				return this.variables[a] !== b && (this.variables[a] = this.ctx[a] = b), this
			}, g.prototype.text = function(a, b, c) {
				this.ctx.fillText(a, b, c)
			}, g.prototype.backgroundRepeatShape = function(a, b, c, d, e, f, g, h, i) {
				var j = [
					["line", Math.round(e), Math.round(f)],
					["line", Math.round(e + g), Math.round(f)],
					["line", Math.round(e + g), Math.round(h + f)],
					["line", Math.round(e), Math.round(h + f)]
				];
				this.clip([j], function() {
					this.renderBackgroundRepeat(a, b, c, d, i[3], i[0])
				}, this)
			}, g.prototype.renderBackgroundRepeat = function(a, b, c, d, e, f) {
				var g = Math.round(d.left + b.left + e),
					h = Math.round(d.top + b.top + f);
				this.setFillStyle(this.ctx.createPattern(this.resizeImage(a, c), "repeat")), this.ctx.translate(g, h), this.ctx.fill(), this.ctx.translate(-g, -h)
			}, g.prototype.renderBackgroundGradient = function(a, b) {
				if (a instanceof e) {
					var c = this.ctx.createLinearGradient(b.left + b.width * a.x0, b.top + b.height * a.y0, b.left + b.width * a.x1, b.top + b.height * a.y1);
					a.colorStops.forEach(function(a) {
						c.addColorStop(a.stop, a.color.toString())
					}), this.rectangle(b.left, b.top, b.width, b.height, c)
				}
			}, g.prototype.resizeImage = function(a, b) {
				var d, e, c = a.image;
				return c.width === b.width && c.height === b.height ? c : (e = document.createElement("canvas"), e.width = b.width, e.height = b.height, d = e.getContext("2d"), d.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.width, b.height), e)
			}, b.exports = g
		}, {
			"../lineargradientcontainer": 12,
			"../log": 13,
			"../renderer": 19
		}],
		21: [function(a, b) {
			function e(a, b, c, e) {
				d.call(this, c, e), this.ownStacking = a, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * b
			}
			var d = a("./nodecontainer");
			e.prototype = Object.create(d.prototype), e.prototype.getParentStack = function(a) {
				var b = this.parent ? this.parent.stack : null;
				return b ? b.ownStacking ? b : b.getParentStack(a) : a.stack
			}, b.exports = e
		}, {
			"./nodecontainer": 14
		}],
		22: [function(a, b) {
			function d(a) {
				this.rangeBounds = this.testRangeBounds(a), this.cors = this.testCORS(), this.svg = this.testSVG()
			}
			d.prototype.testRangeBounds = function(a) {
				var b, c, d, e, f = !1;
				return a.createRange && (b = a.createRange(), b.getBoundingClientRect && (c = a.createElement("boundtest"), c.style.height = "123px", c.style.display = "block", a.body.appendChild(c), b.selectNode(c), d = b.getBoundingClientRect(), e = d.height, 123 === e && (f = !0), a.body.removeChild(c))), f
			}, d.prototype.testCORS = function() {
				return "undefined" != typeof(new Image).crossOrigin
			}, d.prototype.testSVG = function() {
				var a = new Image,
					b = document.createElement("canvas"),
					c = b.getContext("2d");
				a.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
				try {
					c.drawImage(a, 0, 0), b.toDataURL()
				} catch (d) {
					return !1
				}
				return !0
			}, b.exports = d
		}, {}],
		23: [function(a, b) {
			function f(a) {
				this.src = a, this.image = null;
				var b = this;
				this.promise = this.hasFabric().then(function() {
					return b.isInline(a) ? Promise.resolve(b.inlineFormatting(a)) : d(a)
				}).then(function(a) {
					return new Promise(function(c) {
						window.html2canvas.svg.fabric.loadSVGFromString(a, b.createCanvas.call(b, c))
					})
				})
			}
			var d = a("./xhr"),
				e = a("./utils").decode64;
			f.prototype.hasFabric = function() {
				return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
			}, f.prototype.inlineFormatting = function(a) {
				return /^data:image\/svg\+xml;base64,/.test(a) ? this.decode64(this.removeContentType(a)) : this.removeContentType(a)
			}, f.prototype.removeContentType = function(a) {
				return a.replace(/^data:image\/svg\+xml(;base64)?,/, "")
			}, f.prototype.isInline = function(a) {
				return /^data:image\/svg\+xml/i.test(a)
			}, f.prototype.createCanvas = function(a) {
				var b = this;
				return function(c, d) {
					var e = new window.html2canvas.svg.fabric.StaticCanvas("c");
					b.image = e.lowerCanvasEl, e.setWidth(d.width).setHeight(d.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(c, d)).renderAll(), a(e.lowerCanvasEl)
				}
			}, f.prototype.decode64 = function(a) {
				return "function" == typeof window.atob ? window.atob(a) : e(a)
			}, b.exports = f
		}, {
			"./utils": 26,
			"./xhr": 28
		}],
		24: [function(a, b) {
			function e(a, b) {
				this.src = a, this.image = null;
				var c = this;
				this.promise = b ? new Promise(function(b, d) {
					c.image = new Image, c.image.onload = b, c.image.onerror = d, c.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(a), c.image.complete === !0 && b(c.image)
				}) : this.hasFabric().then(function() {
					return new Promise(function(b) {
						window.html2canvas.svg.fabric.parseSVGDocument(a, c.createCanvas.call(c, b))
					})
				})
			}
			var d = a("./svgcontainer");
			e.prototype = Object.create(d.prototype), b.exports = e
		}, {
			"./svgcontainer": 23
		}],
		25: [function(a, b) {
			function e(a, b) {
				d.call(this, a, b)
			}
			function f(a, b, c) {
				return a.length > 0 ? b + c.toUpperCase() : void 0
			}
			var d = a("./nodecontainer");
			e.prototype = Object.create(d.prototype), e.prototype.applyTextTransform = function() {
				this.node.data = this.transform(this.parent.css("textTransform"))
			}, e.prototype.transform = function(a) {
				var b = this.node.data;
				switch (a) {
				case "lowercase":
					return b.toLowerCase();
				case "capitalize":
					return b.replace(/(^|\s|:|-|\(|\))([a-z])/g, f);
				case "uppercase":
					return b.toUpperCase();
				default:
					return b
				}
			}, b.exports = e
		}, {
			"./nodecontainer": 14
		}],
		26: [function(a, b, c) {
			c.smallImage = function() {
				return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
			}, c.bind = function(a, b) {
				return function() {
					return a.apply(b, arguments)
				}
			}, c.decode64 = function(a) {
				var d, e, f, g, h, i, j, k, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					c = a.length,
					l = "";
				for (d = 0; c > d; d += 4) e = b.indexOf(a[d]), f = b.indexOf(a[d + 1]), g = b.indexOf(a[d + 2]), h = b.indexOf(a[d + 3]), i = e << 2 | f >> 4, j = (15 & f) << 4 | g >> 2, k = (3 & g) << 6 | h, l += 64 === g ? String.fromCharCode(i) : 64 === h || -1 === h ? String.fromCharCode(i, j) : String.fromCharCode(i, j, k);
				return l
			}, c.getBounds = function(a) {
				var b, c;
				return a.getBoundingClientRect ? (b = a.getBoundingClientRect(), c = null == a.offsetWidth ? b.width : a.offsetWidth, {
					top: b.top,
					bottom: b.bottom || b.top + b.height,
					right: b.left + c,
					left: b.left,
					width: c,
					height: null == a.offsetHeight ? b.height : a.offsetHeight
				}) : {}
			}, c.offsetBounds = function(a) {
				var b = a.offsetParent ? c.offsetBounds(a.offsetParent) : {
					top: 0,
					left: 0
				};
				return {
					top: a.offsetTop + b.top,
					bottom: a.offsetTop + a.offsetHeight + b.top,
					right: a.offsetLeft + b.left + a.offsetWidth,
					left: a.offsetLeft + b.left,
					width: a.offsetWidth,
					height: a.offsetHeight
				}
			}, c.parseBackgrounds = function(a) {
				var d, e, f, g, k, b = " \r\n	",
					h = [],
					i = 0,
					j = 0,
					m = function() {
						c && ('"' === d.substr(0, 1) && (d = d.substr(1, d.length - 2)), d && l.push(d), "-" === c.substr(0, 1) && (f = c.indexOf("-", 1) + 1) > 0 && (e = c.substr(0, f), c = c.substr(f)), h.push({
							prefix: e,
							method: c.toLowerCase(),
							value: g,
							args: l,
							image: null
						})), l = [], c = e = d = g = ""
					},
					l = [],
					c = e = d = g = "";
				return a.split("").forEach(function(a) {
					if (!(0 === i && b.indexOf(a) > -1)) {
						switch (a) {
						case '"':
							k ? k === a && (k = null) : k = a;
							break;
						case "(":
							if (k) break;
							if (0 === i) return i = 1, g += a, void 0;
							j++;
							break;
						case ")":
							if (k) break;
							if (1 === i) {
								if (0 === j) return i = 0, g += a, m(), void 0;
								j--
							}
							break;
						case ",":
							if (k) break;
							if (0 === i) return m(), void 0;
							if (1 === i && 0 === j && !c.match(/^url$/i)) return l.push(d), d = "", g += a, void 0
						}
						g += a, 0 === i ? c += a : d += a
					}
				}), m(), h
			}
		}, {}],
		27: [function(a, b) {
			function e(a) {
				d.apply(this, arguments), this.type = "linear" === a.args[0] ? d.TYPES.LINEAR : d.TYPES.RADIAL
			}
			var d = a("./gradientcontainer");
			e.prototype = Object.create(d.prototype), b.exports = e
		}, {
			"./gradientcontainer": 9
		}],
		28: [function(a, b) {
			function d(a) {
				return new Promise(function(b, c) {
					var d = new XMLHttpRequest;
					d.open("GET", a), d.onload = function() {
						200 === d.status ? b(d.responseText) : c(new Error(d.statusText))
					}, d.onerror = function() {
						c(new Error("Network Error"))
					}, d.send()
				})
			}
			b.exports = d
		}, {}]
	}, {}, [4])(4)
});