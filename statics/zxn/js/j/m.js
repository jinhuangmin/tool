var RulersGuides = function(a, b) {
		"use strict";
		var c = document.documentElement,
			d = document.body,
			e = null,
			g = 1,
			h = null,
			i = null,
			j = null,
			k = [],
			l = null,
			m = null,
			n = 0,
			o = 0,
			p = 2,
			q = {},
			r = 0,
			s = "",
			t = 1,
			u = 1,
			v = 0,
			w = 0,
			x = null,
			y = 0,
			z = null,
			A = null,
			B = 0,
			C = [],
			D = [],
			E = null,
			F = 0,
			G = "",
			H = function(a, b) {
				var c = document.createElement("div"),
					d = 0,
					e = document.createElement("span"),
					f = null,
					g = null,
					h = document.createDocumentFragment(),
					i = Math.floor(b / 2);
				for (c.className = "ruler " + a + " unselectable", d; i > d; d += 1) 0 === d % 25 && (e = e.cloneNode(!1), e.className = "milestone", d > 0 && (f = e.cloneNode(!1), f.className = "label", 25 > d ? f.className += " l10" : d >= 25 && 500 > d ? f.className += " l100" : d >= 500 && (f.className += " l1000"), g = document.createTextNode(2 * d - 25), f.appendChild(g), e.appendChild(f)), e.className = "milestone", h.appendChild(e));
				return c.appendChild(h), c
			},
			I = function() {
				var a = Math.max(d.scrollWidth, d.offsetWidth, c.clientWidth, c.scrollWidth, c.offsetWidth),
					b = Math.max(d.scrollHeight, d.offsetHeight, c.clientHeight, c.scrollHeight, c.offsetHeight);
				return [a, b]
			},
			J = function() {
				var a = Math.max(c.scrollTop, d.scrollTop),
					b = Math.max(c.scrollLeft, d.scrollLeft);
				return [a, b]
			},
			K = function() {
				var a = Math.max(c.scrollWidth, d.scrollWidth),
					b = Math.max(c.scrollHeight, d.scrollHeight);
				return [a, b]
			},
			L = function() {
				var a = 0;
				for (a; a < k.length; a += 1) k[a].close()
			},
			M = function(a, b) {
				var c = J();
				1 === t && 1 === u && ("guide h draggable" === a.className && a.offsetTop < v + c[0] || "guide v draggable" === a.className && a.offsetLeft < w + c[1]) && (e.removeChild(a), delete q[b], r -= 1)
			},
			N = function() {
				var a;
				for (a in q) q.hasOwnProperty(a) && M(q[a], a)
			},
			P = function() {
				t = 1 - t, 1 === t ? (i.style.display = "block", h.style.display = "block", e.style.display = "block", N()) : (i.style.display = "none", h.style.display = "none")
			},
			Q = function(a) {
				void 0 !== x[a] && (delete x[a], window.localStorage.setItem("RulersGuides", JSON.stringify(x)), y -= 1)
			},
			R = function() {
				var a;
				if (r > 0) {
					for (a in q) q.hasOwnProperty(a) && (e.removeChild(q[a]), delete q[a], r -= 1);
					A.style.display = "none"
				}
			},
			S = function(a) {
				if (void 0 !== x[a]) {
					var b = x[a],
						c = null,
						d = null;
					R();
					for (c in b) b.hasOwnProperty(c) && (d = document.createElement("div"), d.id = c, d.className = b[c].cssClass, d.style.cssText = b[c].style, e.appendChild(d), q[c] = d, r += 1)
				}
			},
			T = function() {
				var b = null,
					e = this,
					f = null,
					g = function(a) {
						var b, d, c = "";
						if (y = 0, window.localStorage) {
							x = JSON.parse(window.localStorage.getItem("RulersGuides"));
							for (d in x) x.hasOwnProperty(d) && (y += 1)
						}
						if (0 === a && (f = document.createElement("select"), f.id = "grid-list"), y > 0) {
							for (b in x) x.hasOwnProperty(b) && (c += "<option>" + b + "</option>");
							f.innerHTML = c
						}
						return f
					};
				this.render = function() {
					if (null === b) {
						b = document.createElement("div"), f = g(0);
						var c = document.createTextNode(""),
							h = b.cloneNode(!1),
							i = b.cloneNode(!1),
							j = document.createElement("button"),
							k = j.cloneNode(!1),
							l = j.cloneNode(!1),
							m = c.cloneNode(!1),
							n = c.cloneNode(!1),
							o = c.cloneNode(!1),
							p = c.cloneNode(!1);
						m.nodeValue = "Open grid", n.nodeValue = "OK", o.nodeValue = "Cancel", p.nodeValue = "Delete", b.className = "dialog open-dialog", h.className = "title-bar", i.className = "wrapper", j.className = "ok-btn", k.className = "cancel-btn", l.className = "del-btn", h.appendChild(m), j.appendChild(n), k.appendChild(o), l.appendChild(p), i.appendChild(f), i.appendChild(l), i.appendChild(j), i.appendChild(k), b.appendChild(h), b.appendChild(i), d.appendChild(b), a.attach("click", l, function() {
							window.confirm("Are you sure ?") && (f.options.length > 0 && (Q(f.options[f.selectedIndex].value), f.removeChild(f.options[f.selectedIndex])), 0 === f.options.length && e.close())
						}), a.attach("click", j, function() {
							S(f.value), e.close()
						}), a.attach("click", k, function() {
							e.close()
						})
					}
				}, this.render(), this.open = function() {
					L(), g(1), y > 0 && (b.style.display = "block", b.style.left = (c.clientWidth - b.clientWidth) / 2 + "px", b.style.top = (c.clientHeight - b.clientHeight) / 2 + "px")
				}, this.close = function() {
					b.style.display = "none"
				}
			},
			W = function() {
				var a, b = 0,
					c = [],
					d = [],
					f = K(),
					g = document.createElement("div"),
					h = document.createDocumentFragment(),
					i = g.cloneNode(!1),
					j = g.cloneNode(!1),
					k = document.createTextNode(""),
					l = k.cloneNode(!1),
					m = "",
					n = document.createElement("br");
				for (a in q) q.hasOwnProperty(a) && ("h" === q[a].type ? c.push(q[a].y) : d.push(q[a].x));
				for (d.unshift(0), d.push(f[0]), c.unshift(0), c.push(f[1]), d = d.sort(function(a, b) {
					return a - b
				}), c = c.sort(function(a, b) {
					return a - b
				}), a = 0; a < c.length - 1; a += 1) for (b = 0; b < d.length - 1; b += 1) i = i.cloneNode(!1), j = j.cloneNode(!1), k = k.cloneNode(!1), l = l.cloneNode(!1), n = n.cloneNode(), g.className = "info-block-wrapper", i.className = "info-block", j.className = "info-block-txt", i.className += 0 !== a % 2 && 0 !== b % 2 || 0 === a % 2 && 0 === b % 2 ? " even" : " odd", i.style.top = c[a] + "px", i.style.left = d[b] + "px", i.style.width = d[b + 1] - d[b] + "px", i.style.height = c[a + 1] - c[a] + "px", m = d[b + 1] - d[b] + " x " + (c[a + 1] - c[a]), k.nodeValue = m, m = c[a] + " : " + d[b], l.nodeValue = m, j.appendChild(k), j.appendChild(n), j.appendChild(l), i.appendChild(j), j.style.marginTop = 0 === a ? "31px" : "0", j.style.marginLeft = 0 === b ? "42px" : "0", h.appendChild(i);
				g.appendChild(h), 1 === B ? (e.replaceChild(g, A), A = g) : A.style.display = "none"
			},
			X = function() {
				var a = [],
					b = [],
					c = [],
					d = 0,
					e = C.length,
					f = function(a) {
						for (var b = 0, c = 0, d = a.offsetWidth, e = a.offsetHeight; a;) c += a.offsetLeft - a.scrollLeft + a.clientLeft, b += a.offsetTop - a.scrollTop + a.clientTop, a = a.offsetParent;
						return [c, b, c + d, b + e]
					},
					g = function(a) {
						var b = {},
							c = [],
							d = 0,
							e = a.length;
						for (d; e > d; d += 1) b.hasOwnProperty(a[d]) === !1 && (c.push(a[d]), b[a[d]] = 1);
						return c
					};
				for (d; e > d; d += 1) c = f(C[d]), a.push(c[0]), a.push(c[2]), b.push(c[1]), b.push(c[3]);
				return a = g(a).sort(function(a, b) {
					return a - b
				}), b = g(b).sort(function(a, b) {
					return a - b
				}), [a, b]
			},
			Y = function() {
				var b = null,
					c = 0,
					e = {},
					f = [{
						text: "Hide rulers",
						hotkey: "Ctrl + Alt + R",
						alias: "rulers"
					}],
					h = 0;
				this.render = function() {
					z = document.createElement("div"), z.className = "menu-btn unselectable", z.appendChild(document.createTextNode("┌")), b = document.createElement("ul"), b.className = "rg-menu";
					var i = document.createDocumentFragment(),
						j = document.createElement("li"),
						k = document.createElement("a"),
						l = document.createElement("span"),
						m = l.cloneNode(!1),
						n = document.createTextNode(""),
						o = n.cloneNode(!1);
					for (k.href = "javascript:", l.className = "desc", m.className = "hotkey", h; h < f.length; h += 1) j = j.cloneNode(!1), k = k.cloneNode(!1), l = l.cloneNode(!1), m = m.cloneNode(!1), n = n.cloneNode(!1), o = o.cloneNode(!1), n.nodeValue = f[h].text, o.nodeValue = f[h].hotkey, l.appendChild(n), m.appendChild(o), k.appendChild(l), k.appendChild(m), j.appendChild(k), i.appendChild(j), e[f[h].alias] = {
						obj: k,
						txt: n
					};
					a.attach("mousedown", e.rulers.obj, function() {
						P()
					}), b.appendChild(i), d.appendChild(z), d.appendChild(b), a.attach("mousedown", z, function() {
						e.rulers.txt.nodeValue = 1 === t ? "Hide rulers" : "Show rulers", r > 0 ? (e.guides.obj.className = "", e.clear.obj.className = "", e.save.obj.className = "", e.guides.txt.nodeValue = 1 === u ? "Hide guides" : "Show guides") : (e.guides.obj.className = "disabled", e.clear.obj.className = "disabled", e.save.obj.className = "disabled"), e.all.txt.nodeValue = 1 === t || 1 === u ? "Hide all" : "Show all", e.lock.txt.nodeValue = 0 === g ? "Lock rulers" : "Unlock rulers", e.details.txt.nodeValue = 0 === B ? "Show detailed info" : "Hide detailed info", e.snapdom.txt.nodeValue = 0 === F ? "Snap to DOM" : "Turn off snap to DOM", e.open.obj.className = y > 0 ? "" : "disabled", b.style.display = 0 === c ? "inline-block" : "none", c = 1 - c
					})
				}, this.render(), this.close = function() {
					null !== b && (b.style.display = "none", c = 0)
				}
			},
			Z = function() {
				var b = null,
					e = null,
					f = null,
					g = this;
				this.render = function() {
					if (null === b) {
						b = document.createElement("div"), e = document.createElement("input"), f = e.cloneNode(!1);
						var c = document.createTextNode(""),
							h = document.createElement("button"),
							i = document.createElement("label"),
							j = b.cloneNode(!1),
							k = b.cloneNode(!1),
							l = b.cloneNode(!1),
							m = b.cloneNode(!1),
							p = h.cloneNode(!1),
							q = h.cloneNode(!1),
							r = i.cloneNode(!1),
							s = c.cloneNode(!1),
							t = c.cloneNode(!1),
							u = c.cloneNode(!1),
							v = c.cloneNode(!1),
							w = c.cloneNode(!1),
							x = c.cloneNode(!1);
						s.nodeValue = "Snap guides to", t.nodeValue = "X", u.nodeValue = "Y", v.nodeValue = "OK", w.nodeValue = "Reset", x.nodeValue = "Cancel", b.className = "dialog snap-dialog", j.className = "title-bar", k.className = "wrapper", i.className = "rg-x-label", i.setAttribute("for", "rg-x-snap"), r.className = "rg-y-label", r.setAttribute("for", "rg-y-snap"), e.setAttribute("type", "number"), e.value = "100", e.id = "rg-x-snap", e.setAttribute("type", "number"), f.value = "100", f.id = "rg-y-snap", h.className = "ok-btn", p.className = "reset-btn", q.className = "cancel-btn", j.appendChild(s), i.appendChild(t), r.appendChild(u), h.appendChild(v), p.appendChild(w), q.appendChild(x), l.appendChild(i), l.appendChild(e), l.appendChild(r), l.appendChild(f), l.appendChild(p), m.appendChild(h), m.appendChild(q), k.appendChild(l), k.appendChild(m), b.appendChild(j), b.appendChild(k), d.appendChild(b), a.attach("mousedown", h, function() {
							n = parseInt(e.value, 10), o = parseInt(f.value, 10), g.close()
						}), a.attach("mousedown", p, function() {
							n = 0, o = 0, g.close()
						}), a.attach("mousedown", q, function() {
							g.close()
						})
					}
				}, this.render(), this.open = function() {
					L(), b.style.display = "block", b.style.left = (c.clientWidth - b.clientWidth) / 2 + "px", b.style.top = (c.clientHeight - b.clientHeight) / 2 + "px"
				}, this.close = function() {
					b.style.display = "none"
				}
			},
			_ = function() {
				function n(a, b, c) {
					return b = b || 3050, c = c || 7050, h = new H("h", b), i = new H("v", c), a || (a = document.createElement("div")), A = a.cloneNode(!1), a.className = "rg-overlay", A.className = "info-block-wrapper", a.style.width = $("#junebox").width() + 25 + "px", a.style.height = $("#junebox").height() + 25 + "px", a.appendChild(h), a.appendChild(i), a
				}
				var a = document.createElement("style"),
					c = (I(), document.getElementsByTagName("*")),
					f = c.length,
					g = 0;
				for (g; f > g; g += 1) C.push(c[g]);
				a.setAttribute("type", "text/css"), a.styleSheet ? a.styleSheet.cssText = G : a.appendChild(document.createTextNode(G)), d.appendChild(a), setTimeout(function() {
					e = n(), e.appendChild(A), d.appendChild(e), D = X(), j = new Y, l = new Z, m = new T, k = [l, m], $(e).attr("data-h", 1920).attr("data-v", 2560).on("rulerInit", function() {
						var b = $(this),
							c = parseInt(b.attr("data-h"), 10) + 76,
							d = parseInt(b.attr("data-v"), 10) + 76;
						b.children("div.ruler.h").remove(), b.children("div.ruler.v").remove(), n(b[0], c, d), b.children("div.ruler.h").width(c), b.children("div.ruler.v").height(d)
					})
				}, 10)
			};
		_(), this.status = 1, this.disable = function() {
			null !== i && (R(), i.style.display = "none", h.style.display = "none", e.style.display = "none", z.style.display = "none"), t = 0, this.status = 0
		}, this.enable = function() {
			null !== i && (i.style.display = "block", h.style.display = "block", e.style.display = "block", z.style.display = "block"), t = 1, this.status = 1
		}, a.attach("mousedown", document, function(c, d) {
			var y, f = c.clientX,
				g = c.clientY,
				k = null,
				l = null,
				m = null,
				u = J(),
				x = 0; - 1 === d.className.indexOf("menu-btn") && j && j.close(), y = require("scripts/D"), f < y.offsleft - 25 || 60 > g || $(c.target).length < 1 || $.contains($(".rg-overlay")[0], $(c.target)[0]) && (d.className.indexOf("guide") >= 0 || (0 === w && (w = i.offsetWidth + $(i).offset().left, v = h.offsetHeight + $(h).offset().top), (f > w && v > g || g > v && w > f) && 1 === t && (k = document.createElement("div"), l = k.cloneNode(!1), m = document.createTextNode(""), s = "guide-" + r, l.className = "info", l.appendChild(m), k.appendChild(l), f > w && v > g ? (k.className = "guide h draggable", k.style.top = c.clientY - $(h).offset().top + u[0] + "px", l.style.left = f - $(i).offset().left + u[1] + 10 + "px", k.type = "h", x = o, p = 2) : g > v && w > f && (k.className = "guide v draggable", k.style.left = f - $(i).offset().left + u[1] + "px", l.style.top = g - $(h).offset().top + u[0] - 35 + "px", k.type = "v", x = n, p = 1), k.id = s, k.info = l, k.text = m, k.x = 0, k.y = 0, q[s] = k, e.appendChild(k), b.set(k, {
				mode: p,
				onstart: function(b) {
					var c = 1 === b.mode ? parseInt(b.style.left, 10) + 2 : parseInt(b.style.top, 10) + 2;
					b.text.nodeValue = c - 25 > 0 ? c - 25 + "px" : "0px", void 0 !== b.over && (a.detach("mouseover", b, b.over), a.detach("mouseout", b, b.out)), b.style.display = c - 25 > 0 ? "block" : "none"
				},
				onmove: function(a) {
					var g, h, i, b = "",
						c = 0,
						d = [],
						e = 0,
						f = 0;
					if (c = 1 === a.mode ? a.style.left : a.style.top, c = parseInt(c, 10), 1 === F) for (d = D[a.mode - 1], e = d.length; e > f; f += 1) if (c <= d[f]) {
						c = d[f];
						break
					}
					g = parseInt($(".ruler.h").css("left").replace("px", ""), 10), h = parseInt($(".ruler.v").css("top").replace("px", ""), 10), 1 > c && (c = 1), i = 1 === a.mode ? c - g - 1 : c - h - 1, b = i - 25 > 0 ? i - 25 + "px" : "0px", 1 === a.mode ? (a.style.left = c - 2 + "px", a.x = c) : (a.style.top = c - 2 + "px", a.y = c), i - 25 > 0 ? (a.style.display = "block", a.text.nodeValue = b) : a.style.display = "none"
				},
				onstop: function(b) {
					$(b).attr({
						positionX: parseInt($(b).css("left").replace("px", ""), 10) + $("#junebox").scrollLeft(),
						positionY: parseInt($(b).css("top").replace("px", ""), 10) + $("#junebox").scrollTop()
					}), b.over = a.attach("mouseover", b, function(a, c) {
						"guide v draggable" === c.className ? b.info.style.top = a.clientY + u[0] - 35 + "px" : "guide h draggable" === c.className && (b.info.style.left = a.clientX + u[1] + 10 - 240 + "px"), b.info.style.display = "block"
					}), b.out = a.attach("mouseout", b, function() {
						b.info.style.display = "none"
					}), $(b).is(":hidden") && $(b).remove()
				},
				snap: x
			}), b.start(c, k), r += 1)))
		}), a.attach("mouseup", document, function(a, b) {
			M(b, b.id), 1 === B && W()
		}), a.attach("keyup", document, function(a) {
			if (a.ctrlKey === !0 && a.altKey === !0) switch (a.keyCode) {
			case 82:
				P()
			}
		}), a.attach("resize", window, function() {
			var a = I();
			e.style.width = a[0] + "px", e.style.height = a[1] + "px", null !== E && window.clearTimeout(E), 1 === F && (E = window.setTimeout(function() {
				D = X()
			}, 100))
		})
	};