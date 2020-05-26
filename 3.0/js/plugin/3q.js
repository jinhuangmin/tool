! function (a) {
	a.fn.addGroup = function (b) {
		if (b = b.filter(":not(.tac-app)"), b && b.length > 0) {
			var c = this.toArray();
			return a.unique(b).each(function () {
				c.push(this)
			}), a(c)
		}
		return a()
	}
}(jQuery),
function (a) {
	a.fn.cus_find = function (b, c, d, e) {
		return e = e || 0, d = d || "", e >= c ? a() : a(this).children().hasClass(d) ? a() : a(this).children(b).length > 0 ? a(this).children(b) : (e++, a(this).children().length > 0 ? a(this).children().cus_find(b, c, d, e) : a())
	}
}(jQuery),
function (a) {
	a.fn.updateConfig = function (b, c) {
		var d = a(this);
		return d.each(function () {
			var f = a(this),
				g = JSON.parse(f.attr("data-config") || "{}");
			g = a.extend(g, b), f.attr("data-config", JSON.stringify(g)), c && "function" == typeof c && c(f, g)
		})
	}, a.fn.editConfig = function (b, c, d) {
		var e = a(this);
		return e.each(function () {
			var g = a(this),
				h = JSON.parse(g.attr("data-config") || "{}");
			b in h && (h[b] = c, g.attr("data-config", JSON.stringify(h)), d && "function" == typeof d && d(g, h))
		})
	}
}(jQuery),
function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function i(b) {
		var q, r, s, c = b || window.event,
			g = d.call(arguments, 1),
			i = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		return b = a.event.fix(c), b.type = "mousewheel", "detail" in c && (m = -1 * c.detail), "wheelDelta" in c && (m = c.wheelDelta), "wheelDeltaY" in c && (m = c.wheelDeltaY), "wheelDeltaX" in c && (l = -1 * c.wheelDeltaX), "axis" in c && c.axis === c.HORIZONTAL_AXIS && (l = -1 * m, m = 0), i = 0 === m ? l : m, "deltaY" in c && (m = -1 * c.deltaY, i = m), "deltaX" in c && (l = c.deltaX, 0 === m && (i = -1 * l)), 0 !== m || 0 !== l ? (1 === c.deltaMode ? (q = a.data(this, "mousewheel-line-height"), i *= q, m *= q, l *= q) : 2 === c.deltaMode && (r = a.data(this, "mousewheel-page-height"), i *= r, m *= r, l *= r), n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, k(c, n) && (f /= 40)), k(c, n) && (i /= 40, l /= 40, m /= 40), i = Math[i >= 1 ? "floor" : "ceil"](i / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), h.settings.normalizeOffset && this.getBoundingClientRect && (s = this.getBoundingClientRect(), o = b.clientX - s.left, p = b.clientY - s.top), b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, g.unshift(b, i, l, m), e && clearTimeout(e), e = setTimeout(j, 200), (a.event.dispatch || a.event.handle).apply(this, g)) : void 0
	}

	function j() {
		f = null
	}

	function k(a, b) {
		return h.settings.adjustOldDeltas && "mousewheel" === a.type && 0 === b % 120
	}
	var e, f, g, h, b = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		c = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		d = Array.prototype.slice;
	if (a.event.fixHooks)
		for (g = b.length; g;) a.event.fixHooks[b[--g]] = a.event.mouseHooks;
	h = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var b = c.length; b;) this.addEventListener(c[--b], i, !1);
			else this.onmousewheel = i;
			a.data(this, "mousewheel-line-height", h.getLineHeight(this)), a.data(this, "mousewheel-page-height", h.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var b = c.length; b;) this.removeEventListener(c[--b], i, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function (b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	}, a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
}),
function (a) {
	a.fn.countImgSize = function (b, c) {
		var d = a(this);
		return d.each(function () {
			var f = a(this),
				g = JSON.parse(f.attr("data-config") || "{}");
			b = b || "autoSize", c = c || "pSrc", "yes" == g[b] && D.getCode("juneVisited") && getForGis({
				img: g[c]
			}, function (a) {
				var b = a[0],
					c = a[1];
				f.width(b).height(c)
			})
		})
	}
}(jQuery),
function (a) {
	"use strict";
	a.fn.juneTree = function (b) {
		function p(b, c, d, e, f) {
			var k, m, o, q, r, s, g, j, t, u;
			b && D.getCode("juneVisited") && (g = c.offset(), c.height(), g.left, j = g.top, e.each(function () {
				var g = a(this),
					h = g.offset(),
					i = h.left,
					p = h.top,
					t = g.height(),
					u = p + t;
				m = t, q = g.prev(), r = g.next(), f - t > j ? (k = q, j >= p - t && p > j && (d.data("w", g).offset({
					top: p,
					left: i
				}), g.attr("data-inGroup") ? (s = g.attr("data-inGroup"), d.data("wgId", s)) : d.data("wgId", null), (k.length > 0 && k.attr("data-inGroup") || k.attr("data-groupId")) && p - t / 2 > j && (s = k.attr("data-groupId") || k.attr("data-inGroup"), d.data("wgId", s)))) : j > f + t ? (k = g, j > p && u > j && (g.hasClass("primary") && (r = g.nextUntil(":not(.sub)").last().next(), u = r.offset().top), r.length > 0 && (d.data("w", r).data("wgId", null).offset({
					top: u,
					left: i
				}), r.attr("data-inGroup") ? (s = r.attr("data-inGroup"), d.data("wgId", s)) : d.data("wgId", null)), u - t / 2 > j ? (k.attr("data-inGroup") || k.attr("data-groupId")) && (s = k.attr("data-groupId") || k.attr("data-inGroup"), u - t / 2 > j && d.data("wgId", s), s == b.attr("data-inGroup") && d.data("wgId", s)) : r.length > 0 && (r.attr("data-inGroup") || r.attr("data-groupId") ? (s = r.attr("data-groupId") || r.attr("data-inGroup"), u - t / 2 > j && d.data("wgId", s), s == b.attr("data-inGroup") && d.data("wgId", s)) : d.data("wgId", null)))) : j > p && u > j ? (k = g, Math.abs(n - l) < 40 ? d.data("w", null).data("wgId", null).offset({
					top: u,
					left: i
				}) : d.data("w", r).offset({
					top: u,
					left: i
				}), (k.attr("data-inGroup") || k.attr("data-groupId")) && (s = k.attr("data-groupId") || k.attr("data-inGroup"), u - t / 2 > j ? d.data("wgId", s) : (o = k.next(), o.length > 0 && o.attr("data-inGroup") || o.attr("data-groupId") ? (s = o.attr("data-groupId") || o.attr("data-inGroup"), d.data("wgId", s)) : d.data("wgId", null)), s == b.attr("data-inGroup") && d.data("wgId", s))) : j >= p - t && p > j && (k = q, Math.abs(n - l) < 40 ? d.data("w", null).data("wgId", null).offset({
					top: p,
					left: i
				}) : d.data("w", g).offset({
					top: p,
					left: i
				}), k.length > 0 && (k.attr("data-inGroup") || k.attr("data-groupId")) && (s = k.attr("data-groupId") || k.attr("data-inGroup"), p - t / 2 > j ? d.data("wgId", s) : (o = g, o.attr("data-inGroup") || o.attr("data-groupId") ? (s = o.attr("data-groupId") || o.attr("data-inGroup"), d.data("wgId", s), r.length > 0 && d.data("w", r)) : d.data("w", o).data("wgId", null)), s != b.attr("data-inGroup") || b.is(k) || d.data("wgId", s)))
			}), j > f && D.getCode("juneVisited") && (t = a("#" + _g_layerId).children(D.layerCls).index(b), u = a("#" + _g_layerId).children(D.layerCls + ":last").index(), t == u && d.data("w", b)))
		}

		function q(a) {
			var b = a.eq(0).attr("appID");
			return a.filter("[appID='" + b + "']")
		}

		function r(b, c) {
			var d = c.data("wgArr") || [];
			b.each(function () {
				var e = a(this),
					f = e.attr("data-groupId");
				f && D.getCode("juneVisited") && d.push(f)
			}), c.data("wgArr", d)
		}

		function s(b, c, d) {
			b.each(function () {
				var f = a(this),
					g = f.attr("data-inGroup"),
					h = f.attr("appID"),
					i = a(".t-app[appID='" + h + "']"); - 1 == a.inArray(g, d) && (c ? c != f.attr("data-groupId") && (f.attr("data-inGroup", c).addClass("child"), i.attr("data-inGroup", c)) : (f.removeAttr("data-inGroup").removeClass("child"), i.removeAttr("data-inGroup"))), countTreeStep(f)
			})
		}

		function t(b, c, d) {
			var g, h, i, e = c.attr("appID"),
				f = c.attr("attachID");
			"yes" == d && D.getCode("juneVisited") ? (g = a(".t-app-child[attachID='" + f + "']"), b.each(function () {
				var d, b = a(this),
					c = b.attr("attachID");
				d = a(".t-app-child[attachID='" + c + "']"), d.attr("data-readyMove", "yes"), i && 0 != i.length || (i = d.parent())
			}), h = a(".t-app-child[data-readyMove='yes']"), g.length > 0 ? h.insertAfter(g).attr("data-readyMove", "no") : h.prependTo(i).attr("data-readyMove", "no")) : (i = D.june, g = a(".t-app[appID='" + e + "']"), b.each(function () {
				var d, b = a(this),
					c = b.attr("appID");
				d = a(".t-app[appID='" + c + "']"), d.attr("data-readyMove", "yes")
			}), h = a(".t-app[data-readyMove='yes']"), g.length > 0 ? h.insertAfter(g).attr("data-readyMove", "no") : D.june.children(".junehtml").length > 0 ? h.insertAfter(D.june.children(".junehtml")).attr("data-readyMove", "no") : h.prependTo(D.june).attr("data-readyMove", "no"))
		}
		var c = this,
			d = a.extend({}, a.fn.juneTree.defaults, b),
			e = d.eleCls,
			g = (d.clickCls, d.diCls),
			l = (d.helperCls, d.onDragTime, d.onDragSpace, d.onDrag, 0),
			n = 0,
			o = globalFunc("action");
		return c.each(function () {
			var h, i, j, k, u, v, w, x, z, A, E, F, G, f = a(this),
				y = 0,
				B = "",
				C = 0;
			f.off("mousedown.juneTree").on("mousedown.juneTree", function (b) {
				if (2 != b.button) {
					D.Dragdirection = null, D.dragX = [], D.dragY = [], D.dragStart = !1, D.dragStartX = null, D.dragStartY = null, D.dragEle = null, l = D.layerList.parent().parent().scrollTop(), a(b.target).parent().hasClass("t-layer") && "span" == b.target.tagName.toLowerCase() ? b.target = b.target.parentNode : a(b.target).parent().parent().hasClass("t-layer") && (b.target = b.target.parentNode.parentNode), v = a(b.target);
					var c = v.offset();
					b.shiftKey, b.ctrlKey, j = b.pageX - c.left, k = b.pageY - c.top, C && 0 != C || (C = (new Date).getTime(), E = j, F = k)
				}
			}), (!a(document).data("juneTree") || a(document).data("juneTree") < 2) && (G = m(a(document).data("juneTree") || "0"), G++, a(document).data("juneTree", G), f.length > 0 && "tclist" == f.attr("id") && f.on("mousewheel.juneTreeFortc", ".june-tree-helper", function (a) {
				var b = a || window.event,
					c = D.layerList.parent().parent(),
					d = 0,
					e = 0;
				"detail" in b && (e = -1 * b.detail), "wheelDelta" in b && (e = b.wheelDelta), "wheelDeltaY" in b && (e = b.wheelDeltaY), "wheelDeltaX" in b && (d = -1 * b.wheelDeltaX), "axis" in b && b.axis === b.HORIZONTAL_AXIS && (d = -1 * e, e = 0), "deltaY" in b && (e = -1 * b.deltaY), "deltaX" in b && (d = b.deltaX), (0 !== e || 0 !== d) && (0 != d && c.scrollLeft(c.scrollLeft() + 30 * d), 0 != e && c.scrollTop(c.scrollTop() + 30 * e))
			}), a(document).on("mousemove.juneTree", function (b) {
				var o, t, c = b.pageX,
					l = b.pageY,
					m = v,
					s = !1;
				if (C && 0 != C) {
					if ((C + 100 > (new Date).getTime() || j > E + 3 || k > F + 3) && !_g_sim) return;
					C = 0, v = null, m && m.hasClass(e) && (u = f.children(D.layerCls + ".active").addClass(g), o = u.filter(".sub"), o = q(o), o.length < u.length ? u = withPrimary(u) : (s = !0, t = o.attr("appID")), x = u.eq(0), y = f.children(D.layerCls).index(x), w = x.offset().top, A = y > 0 ? f.children(D.layerCls + ":gt(" + (y - 1) + ")").clone() : f.children(D.layerCls).clone(), h = a('<div class="june-tree-helper"></div>').append(A), h.children(":not(.active)").css("visibility", "hidden"), h.children(".noactive-temp").css("visibility", "hidden"), B = h.attr("style") || "", h.css({
						position: "absolute",
						zIndex: 99999,
						opacity: .5,
						top: -99
					}).appendTo(f).show(), i = 0 == a("#juneTreeHelpLine").length ? a(d.helperLine).appendTo(f).hide() : a("#juneTreeHelpLine"), i.parent().is(D.layerList) || i.appendTo(D.layerList), s ? (z = f.children(".sub[appID='" + t + "']").not(u), i.attr("data-subing", "yes")) : (z = f.children(D.layerCls + ":not(.sub)").not(h).not(u), i.attr("data-subing", "no")), r(u, i), i.show(), f.removeData("mdCache"))
				}
				u && u.length > 0 && (h.offset({
					left: c - j,
					top: l - k
				}), n = D.layerList.parent().parent().scrollTop(), p(x, h, i, z, w))
			}).on("mouseup.juneTree", function () {
				if (u && u.length > 0) {
					var b = i.data("w"),
						c = i.attr("data-subing") || "no",
						d = i.data("wgId"),
						e = i.data("wgArr");
					b && b.length > 0 && (u.insertBefore(b), t(u, b, c)), (b || d) && s(u, d, e), u.removeClass(g), h.remove(), i.removeAttr("style").removeData("w").removeData("wgId").removeData("wgArr").hide(), f.children(".active-temp").removeClass("active active-temp"), f.children(".noactive-temp").removeClass("noactive-temp"), o.create("treeupdate", u), u = null
				}
				C = 0, v = null, w = null
			}))
		})
	}, a.fn.juneTree.defaults = {
		eleCls: "nor",
		clickCls: "active",
		diCls: "june-tree-draging",
		helperCls: "june-tree-helper",
		helperLine: '<div id= "juneTreeHelpLine"class="june-tree-helper-line"></div>',
		onDragTime: 50,
		onDragSpace: 3,
		onDrag: null
	}
}(jQuery),
function (a) {
	"use strict";
	a.junelp = function (b) {
		var c = {
				cls: ".junelp"
			},
			d = a.extend(c, b || {}),
			e = {
				"0% 0%": "左上",
				"50% 0%": "中上",
				"100% 0%": "右上",
				"0% 50%": "左中",
				"50% 50%": "居中",
				"100% 50%": "右中",
				"0% 100%": "左下",
				"50% 100%": "中下",
				"100% 100%": "右下"
			};
		d.ckbClick = function (b, c, e) {
			var f = a(this),
				g = f.children(d.cls + "-h");
			"yes" == f.attr("data-checked") ? (f.removeClass("active").attr("data-checked", "no"), g.val("")) : (f.addClass("active").attr("data-checked", "yes"), g.val(c.value)), e || g.trigger("change")
		}, d.rdoClick = function (b, c, e) {
			var f = a(this),
				g = f.children(d.cls + "-h"),
				h = f.siblings("[data-name='" + c.name + "']");
			h.each(function () {
				var b = a(this),
					c = b.children(d.cls + "-h");
				b.removeClass("active").attr("data-checked", "no"), c.prop("checked", !1)
			}), f.addClass("active").attr("data-checked", "yes"), g.prop("checked", !0), e || g.trigger("change")
		}, d.initGUI = function () {
			var b = a("#pagebgposition"),
				c = {
					"0% 0%": "左上",
					"50% 0%": "中上",
					"100% 0%": "右上",
					"0% 50%": "左中",
					"50% 50%": "居中",
					"100% 50%": "右中",
					"0% 100%": "左下",
					"50% 100%": "中下",
					"100% 100%": "右下"
				};
			0 == b.length && (b = a('<div id="pagebgposition"><span class="positionlabel" style="left:15px;">定位：</span><span class="positionicon tl" data-v="0% 0%"><i></i></span><span class="positionicon tc" data-v="50% 0%"><i></i></span><span class="positionicon tr" data-v="100% 0%"><i></i></span><span class="positionicon cl" data-v="0% 50%"><i></i></span><span class="positionicon cc active" data-v="50% 50%"><i></i></span><span class="positionicon cr" data-v="100% 50%"><i></i></span><span class="positionicon bl" data-v="0% 100%"><i></i></span><span class="positionicon bc" data-v="50% 100%"><i></i></span><span class="positionicon br" data-v="100% 100%"><i></i></span><span class="positionlabel" style="left:15px;top:96px;">手动：</span><span class="positionbtn">点击设置</span></div>').appendTo(a("body"))), b.hide().on("click.junelp-gui", ".positionicon", function () {
				var e = a(this),
					f = b.data("t"),
					g = e.attr("data-v");
				b.children(".positionicon").removeClass("active"), e.addClass("active"), f && f.length > 0 && (f.val(g).trigger("change"), f.siblings("val").html(c[g]))
			}), b.on("click.junelp-gui-btn", ".positionbtn", function () {
				var d = a("#" + _g_juneId).attr("data-bgimg") || "";
				"" != d ? "fixed" != a("#" + _g_juneId).attr("data-attachment") ? (b.data("t").bgDragPos({
					bgId: "_g_juneId"
				}), b.hide()) : messageForPhp("固定背景不支持手动定位!") : messageForPhp("请先填入背景图片")
			}), a(document).on("mousedown.junelp-gui", function (c) {
				("val" == c.target.tagName.toLowerCase() || "i" == c.target.tagName.toLowerCase() && a(c.target).parent().hasClass("positionicon")) && (c.target = c.target.parentNode);
				var d = a(c.target);
				"pagebgposition" == d.attr("id") || d.hasClass("junelp-gui") || d.hasClass("positionicon") || d.hasClass("positionlabel") || d.hasClass("positionbtn") || b.hide()
			})
		}, a.junelp.setGUI = d.setGUI = function (b, c, d) {
			var f = a("#pagebgposition");
			f.children(".active").removeClass("active"), "自定义" == b.siblings("val").html() ? f.children(".positionbtn").addClass("active") : f.children(".positionicon[data-v='" + c + "']").addClass("active"), b.val(c), /px/.test(c) ? b.siblings("val").html("自定义") : b.siblings("val").html(e[c]), f.data("t", b), d || f.show()
		}, d.selectGUI = function (b, c, e) {
			b.addClass("junelp-gui").off("click.junelp").on("click.junelp", function () {
				var g = (a(this), b.children(d.cls + "-h")),
					h = g.val();
				d.setGUI(g, h || e.value)
			})
		}, d.initSelectNor = function () {
			var b = a("#selectnormal");
			0 == b.length && (b = a('<div id="selectnormal"></div>').appendTo(a("body"))), b.hide().on("click.junelp-selectnor", ".snoption", function () {
				var d = a(this),
					e = b.data("t"),
					f = d.attr("data-v"),
					g = d.text();
				b.children(".snoption").removeClass("active"), d.addClass("active"), e && e.length > 0 && (e.val(f).trigger("change"), e.siblings("val").html(g), b.hide())
			}), a(document).on("mousedown.junelp-selectnor", function (c) {
				"val" == c.target.tagName.toLowerCase() && (c.target = c.target.parentNode);
				var d = a(c.target);
				"selectnormal" == d.attr("id") || d.hasClass("junelp-selectnor") || d.hasClass("snoption") || b.hide()
			})
		}, a.junelp.setSelectNor = d.setSelectNor = function (b, c, d) {
			var e = a("#selectnormal");
			e.children(".active").removeClass("active"), e.children(".snoption[data-v='" + c + "']").addClass("active"), b.val(c), d ? e.trigger("click") : (e.data("t", b), e.show())
		}, d.selectNor = function (b, c, e) {
			var g, j, k, f = a("#selectnormal"),
				h = D.d.width(),
				i = D.d.height();
			b.addClass("junelp-selectnor").off("click.junelp").on("click.junelp", function () {
				var o, p, r, s, t, l = a(this),
					m = b.children(d.cls + "-h"),
					n = m.val(),
					q = "";
				if (!m.is(f.data("t"))) {
					if (g = "", e.default)
						for (r in e.default) s = e.default[r], t = "", e.value == s && (t = " active"), g += '<span class="snoption' + t + '" data-v="' + s + '">' + r + "</span>";
					f.html(g).show().css({
						width: l.width()
					}), j = l.offset().top + l.height(), k = l.offset().left, j + f.height() > i && (j = i - f.height() - l.height()), k + f.width() > h && (k = h - f.width()), f.parent().hasClass("box-inner") ? f.scrollbar({
						nnrb: "yes",
						byleft: k,
						bytop: j
					}) : f.offset({
						left: k,
						top: j
					}).scrollbar({
						nnrb: "yes"
					})
				}
				if (d.setSelectNor(m, n || e.value), e.relation && "" != e.relation && !e.relationClsArr) {
					e.relationClsArr = [];
					for (r in e.relationCls) e.relationClsArr.push(e.relationCls[r]);
					m.off("change.junelp").on("change.junelp", function () {
						var c = m.val();
						p = e.relationCls[c], q = e.relationClsArr.join(" "), o = a("#" + e.relation), o.removeClass(q).addClass(p)
					})
				}
			})
		}, d.selectBar = function (b, c, e) {
			e.id = b.children("input").attr("id");
			var g, i, f = "",
				h = a("#" + e.id);
			!!e.id && "" != e.id && (f = ' id="' + e.id + '_panel"'), g = a('<div class="' + d.cls.substr(1) + '-p"' + f + ' style="position:absolute;top:22px;right:-25px;width:150px;height:31px;"><div class="slider" style="margin:0 auto;width:120px;"></div></div>').appendTo(b), i = a("#" + e.id + "_panel").children().slider({
				range: "max",
				min: e["range"][0],
				max: e["range"][1],
				value: e.value,
				slide: function (a, b) {
					h.val(b.value).trigger("change")
				}
			}), b.css("position", "relative").addClass("junelp-selectbar").off("click.junelp").on("click.junelp", function () {
				g.show()
			}).off("change.junelp keyup.junelp", "input").on("change.junelp keyup.junelp", "input", function () {
				i.slider("value", a(this).val())
			}), a(document).off("mousedown.junelp-selectbar").on("mousedown.junelp-selectbar", function (b) {
				"input" == b.target.tagName.toLowerCase() && (b.target = b.target.parentNode);
				var c = a(b.target);
				c.attr("id") == e.id + "_panel" || c.hasClass("junelp-selectbar") || c.hasClass("ui-slider") || c.hasClass("ui-slider-handle") || c.hasClass("ui-slider-range") || g.hide()
			})
		}, a.junelp.setCkb = function (a, b) {
			!a.hasClass("active") && b ? a.triggerHandler("click", {
				nnc: !0
			}) : a.hasClass("active") && !b && a.triggerHandler("click", {
				nnc: !0
			})
		}, a.junelp.setRdo = function (a, b) {
			a.filter("[data-val='" + b + "']").triggerHandler("click.junelp", {
				nnc: !0
			})
		}, d.init = function (b, c, e) {
			var f, g = "",
				h = "",
				i = "",
				j = "hidden",
				k = "",
				l = !0;
			!!e.name && "" != e.name && (g = ' name="' + e.name + '"', b.attr("data-name", e.name)), !!e.id && "" != e.id && (h = ' id="' + e.id + '"'), !!e.value && "" != e.value && (i = ' value="' + e.value + '"'), "checkbox" == c ? (b.off("click.junelp").on("click.junelp", function (a, b) {
				d.ckbClick.call(this, a, e, b)
			}), "yes" == e.checked ? b.triggerHandler("click") : i = ' value=""') : "radio" == c ? (j = "radio", k = ' style="display:none;"', !!e.value && "" != e.value && b.attr("data-val", e.value), b.off("click.junelp").on("click.junelp", function (a) {
				d.rdoClick.call(this, a, e)
			}), "yes" == e.checked && b.triggerHandler("click")) : "select-gui" == c ? d.selectGUI(b, c, e) : "select" == c ? d.selectNor(b, c, e) : "select-bar" == c && (d.selectBar(b, c, e), l = !1), l && (f = a('<input class="' + d.cls.substr(1) + '-h" type="' + j + '"' + g + h + i + k + " />").appendTo(b))
		}, d.initGUI(), d.initSelectNor(), a(d.cls).each(function () {
			var b = a(this),
				c = b.attr("data-l"),
				e = JSON.parse(b.attr("data-p") || "{}");
			c && "" != c && d.init(b, c, e)
		})
	}
}(jQuery),
function (a) {
	a.fn.jqScale = function (b, c) {
		var f, g, e = "getScale";
		return "number" == typeof b ? (e = "setScale", f = b, g = "number" == typeof c ? c : b) : "boolean" == typeof b && b === !0 && (e = "calculateScale"), a.fn.jqScale.setScale = function (b) {
			var c = a.fn.jqScale.getElementTransformMatrix(b);
			c[0] = f, c[3] = g, a(b).css("transform-origin", "0 0"), a(b).css("transform", "matrix(" + c.toString(",") + ")"), a(b).attr("data-jqscale", f + "," + g)
		}, a.fn.jqScale.getScale = function (b) {
			var c = a.fn.jqScale.getElementTransformMatrix(b);
			return a(b).attr("data-jqscale", c[0] + "," + c[3]), [c[0], c[3]]
		}, a.fn.jqScale.calculateScale = function (b) {
			var i, c = a(b).parents(),
				d = c.length,
				e = [],
				f = 1,
				g = 1,
				h = a.fn.jqScale.getScale(b);
			for (e.push(h), f *= h[0], g = f * h[1], i = 0; d > i; i++) h = a.fn.jqScale.getScale(c[i]), e.push(h), f *= h[0], g = f * h[1];
			return a(b).attr("data-aggregated-jqscale", f + "," + g), [f, g]
		}, a.fn.jqScale.getElementTransformMatrix = function (b) {
			var e, f, g, c = [],
				d = a(b).css("transform");
			if (null === d && (d = a(b).css("-webkit-transform")), "undefined" == typeof d || null === d || 0 !== d.indexOf("matrix")) return [1, 0, 0, 1, 0, 0];
			for (d = d.split("(")[1].split(")")[0].split(","), e = d.length, f = 0; e > f; f++) g = isNaN(Number(d[f])) ? 0 : Number(d[f]), c.push(g);
			return c
		}, this.each(function () {
			var b = a.fn.jqScale[e](this);
			return b
		})
	}
}(jQuery),
function (a) {
	a.fn.form_bgDragPos = function () {
		var b = ["", "tForm", "jdhi_src", "imgBgp", "sdtzBgColor", "autoSize", ""];
		this.off("click.fbdp").on("click.fbdp", ".jDragHandleImg", function () {
			var d = a(this),
				e = a("#formBgPosition"),
				f = d.attr("data-ids"),
				g = d.attr("data-isn") || "",
				h = "yes" == d.attr("data-isa"),
				i = a.extend([], b, f.split(",")),
				j = d.attr("data-aidx") || "",
				k = i[0],
				l = i[1],
				m = g + i[2],
				n = g + i[3],
				o = g + i[4],
				p = g + i[5];
			d.bgDragPos({
				id: k,
				fid: l,
				iid: m,
				vid: n,
				bid: o,
				cid: p,
				filterCls: i[6],
				isAttach: h,
				aidx: j
			}), e.hide()
		}), this.off("click.fbdp1").on("click.fbdp1", ".jDragSelect", function () {
			var c = a(this),
				d = c.offset(),
				e = a("#formBgPosition"),
				f = c.attr("id").replace("_text", ""),
				g = a("#" + f),
				h = g.val();
			e.show().offset({
				left: d.left,
				top: d.top + 35
			}), e.children(".active").removeClass("active"), e.children(".positionicon[data-v='" + h + "']").addClass("active"), e.data("i", a("#" + f)), e.data("t", c)
		}), a("#formBgPosition").off("click.fbdp2").on("click.fbdp2", ".positionicon", function () {
			var c = a(this),
				d = a("#formBgPosition"),
				e = c.attr("data-v"),
				f = c.attr("data-text"),
				g = d.data("i"),
				h = d.data("t");
			g.length > 0 && g.val(e), h.length > 0 && h.children("val").html(f), d.hide()
		}), a(document).off("mousedown.fbdp3").on("mousedown.fbdp3", function (b) {
			var d, c = a("#formBgPosition");
			("val" == b.target.tagName.toLowerCase() || "i" == b.target.tagName.toLowerCase() && a(b.target).parent().hasClass("positionicon")) && (b.target = b.target.parentNode), d = a(b.target), d.parent().is(c) || d.is(c) || c.hide()
		})
	}
}(jQuery),
function (a) {
	a.fn.bgDragPos = function (b) {
		var e, f, g, i, j, k, l, m, o, p, q, r, s, t, u, w, y, z, A, B, D, E, F, H, I, J, K, L, M, c = a(this),
			d = a(document),
			n = {},
			C = !0,
			G = !1;
		if (m = b && "object" != typeof b ? b : a.extend({}, n, b), 0 != a("#bgDragBox").length) {
			if (o = a("#bgDragBox"), p = a("#bgDragCloneLayout"), q = a("#bgDragCloneBox"), t = a("#bgDragClone"), r = a("#bgDragMon1"), s = a("#bgDragMon2"), u = a("#bgDragInfoBox"), D = a("#junebox").parent().parent(), m.bgId) e = a("#" + window[m.bgId]), f = e, u.find(".sdtz_notpage").hide(), _text = c, o.data("colorid", a("#pageBgColor"));
			else {
				if (!m.id) return;
				if (C = !1, m.isAttach ? (e = a(".t-app-child[attachID='" + m.id + "']"), 0 == e.length && (e = a(".j-fnd[appID='" + m.id + "']:not(.t-app-child)"))) : (e = a(".j-fnd[appID='" + m.id + "']:not(.t-app-child)"), 0 == e.length && (e = a(".t-app-child[attachID='" + m.id + "']"))), "" != m.aidx && (e = e.children("[data-attachtype$='SmallImg']:eq(" + m.aidx + ")")), "" != m.filterCls && (e = e.children(m.filterCls)), 0 == e.length) return messageForPhp("请先创建该子层成功后再进行图片手动定位操作!"), void 0;
				if (g = a("#" + m.iid), c = a("#" + m.vid), i = a("#" + m.bid), j = a("#" + m.cid), _text = a("#" + m.vid + "_text"), f = e.children(".j-tazb").length > 0 ? e.children(".j-tazb") : e, k = a("#" + m.fid).parent().parent(), l = k.nextAll(".ui-widget-overlay").eq(0), u.find(".sdtz_notpage").show(), !checkImg(f) && "" == g.val()) return messageForPhp("请先填入背景图片"), void 0;
				k.hide(), l.hide(), o.data("colorid", i)
			}
			o.attr("data-isdi", "yes"), t.on("mousedown.bgDrag", function (a) {
				E = a.pageX - t.offset().left, F = a.pageY - t.offset().top, _g_btnshow = !1, G = !0
			}), d.on("mousemove.bgDrag", function (b) {
				var c = b.pageX,
					d = b.pageY,
					e = 9999,
					f = 9999;
				G && (c - E > w.left && (c = E + w.left), d - F > w.top && (d = F + w.top), c - E + o.scrollLeft() < -19998 && (c = E - 19998 - o.scrollLeft()), d - F + o.scrollTop() < -19998 && (d = F - 19998 - o.scrollTop()), t.offset({
					left: c - E,
					top: d - F
				}), z ? (e += t.offset().left, f += t.offset().top) : (e += parseInt(t.css("left")), f += parseInt(t.css("top"))), a("#bgDragInfoInputX").val(e), a("#bgDragInfoInputY").val(f))
			}), d.on("mouseup.bgDrag", function () {
				var c = 9999,
					d = 9999;
				G && (G = !1, z ? (c += t.offset().left, d += t.offset().top) : (c += parseInt(t.css("left")), d += parseInt(t.css("top"))), a("#bgDragInfoInputX").val(c), a("#bgDragInfoInputY").val(d))
			}), o.show(), r.show(), s.show(), w = e.offset(), B = RGBToHex(f.css("background-color"), ""), ("none" == B || "transparent" == B || "" == B) && (B = ""), C ? p.offset({
				left: w.left - 10,
				top: w.top - 10
			}) : p.offset({
				left: w.left - 10,
				top: w.top - 10
			}), y = "repeat" == f.css("background-repeat"), z = "fixed" == f.css("background-attachment"), A = f.css("background-image").replace(/^url|[\(\"\)]*/g, "") || "", C || (A = g.val(), y = !1, z = !1, B = RGBToHex(i.val(), "")), q.width(e.width()).height(e.height()).css({
				backgroundColor: B
			}), u.off("change.bgDrag keyup.bgDrag").on("change.bgDrag keyup.bgDrag", "input", function () {
				var b = a(this),
					c = b.attr("id"),
					d = b.val();
				"bgDragInfoInputImg" == c ? checkUrl(d) && t.css("background-image", "url(" + d + ")") : "bgDragInfoInputX" == c ? z ? t.offset({
					left: d - 9999
				}) : t.css("left", d - 9999) : "bgDragInfoInputY" == c ? z ? t.offset({
					top: d - 9999
				}) : t.css("top", d - 9999) : "bgDragInfoInputW" == c ? q.width(d) : "bgDragInfoInputH" == c && q.height(d)
			}), e.hide(), a("#bgDragInfoBtnCancel").off("click.bgDragCancel").on("click.bgDragCancel", function () {
				o.hide().attr("data-isdi", "no"), r.hide(), s.hide(), k && (k.show(), l.show()), e.show(), _g_btnshow = !0
			}), a("#bgDragInfoBtnOk").off("click.bgDragOk").on("click.bgDragOk", function () {
				var d = a("#bgDragInfoInputX").val(),
					g = a("#bgDragInfoInputY").val(),
					h = a("#bgDragInfoInputW").val(),
					i = a("#bgDragInfoInputH").val();
				"" == d && (d = 0), "" == g && (g = 0), e.width(h), e.height(i), f.css("background-position", d + "px " + g + "px"), f.attr("data-position", d + "px " + g + "px"), c.val(d + "px" + " " + g + "px"), _text.siblings("val").length > 0 ? _text.siblings("val").html("自定义") : _text.children("val").html("自定义"), o.hide().attr("data-isdi", "no"), r.hide(), s.hide(), k && (k.show(), l.show()), j && j.length > 0 && j.prop("checked", "yes" == a("#bgdrag_autoSize").val()), e.show(), _g_btnshow = !0
			}), a("#bgDragInfoInputImg").val(A), a("#bgDragInfoBgColor").val(B), a("#bgDragInfoBgColorBu").css("background-color", B), y || t.css("background-repeat", "no-repeat"), H = f.css("background-position"), I = H.split(" "), J = -9999, K = -9999, L = 0, M = 0, C || (I = c.val().split(" ")), checkUrl(A) ? getForGis({
				img: A
			}, function (b) {
				var c = b[0],
					d = b[1];
				I[0].indexOf("%") >= 0 ? L = I[0].replace(/%/g, "") / 100 * (e.width() - c) : (L = parseInt(I[0].replace(/px/g, "")), z && (L -= _g_offsleft)), J += L, I[1].indexOf("%") >= 0 ? M = I[1].replace(/%/g, "") / 100 * (e.height() - d) : (M = parseInt(I[1].replace(/px/g, "")), z && (M -= _g_offstop)), K += M, a("#bgDragInfoInputX").val(L), a("#bgDragInfoInputY").val(M), t.width(e.width()).height(e.height()).css({
					backgroundImage: "url(" + A + ")",
					left: J,
					top: K
				}), z && t.offset({
					left: J + _g_offsleft,
					top: K + _g_offstop
				})
			}) : (a("#bgDragInfoInputX").val(L), a("#bgDragInfoInputY").val(M)), a("#bgDragInfoInputW").val(e.width()), a("#bgDragInfoInputH").val(e.height())
		}
	}
}(jQuery),
function (a) {
	a.fn.popupDragPos = function () {
		var c, d, e, f, g, h, i, k, l, b = ["", "ppdsdtz_sapceX", "ppdsdtz_sapceY", "popupHtml", "alignID", "popupPosition"],
			j = a(document),
			n = !1;
		0 != a("#bgDragBox").length && (c = a("#popupDragBox"), d = a("#popupDragCloneBox"), e = a("#bgDragMon1"), f = a("#bgDragMon2"), g = a("#popupDragInfoBox"), d.on("mousedown.popupDrag", function (a) {
			return x1 = a.pageX - d.offset().left, y1 = a.pageY - d.offset().top, n = !0, _g_btnshow = !1, D.BreachMoveRuler = !0, D.snapEle = d, D.snapEle && D.snapEle.hasClass("june-nonsp") ? (D.snapElements = [], D.snapEle = null, void 0) : (D.snapEle && D.createSnapElements(D.snapEle, !0), void 0)
		}), j.on("mousemove.popupDrag", function (a) {
			var b = a.pageX,
				c = a.pageY;
			n && d.offset({
				left: b - x1,
				top: c - y1
			})
		}), j.on("mouseup.popupDrag", function () {
			var c = m(d.attr("data-startX")),
				e = m(d.attr("data-startY"));
			n && "zx" == hre && (n = !1, c = d.offset().left - c + D.junebox.scrollLeft() - D.handleSpaceX, e = d.offset().top - e + D.junebox.scrollTop() - D.handleSpaceY, a("#popupDragInfoInputX").val(c), a("#popupDragInfoInputY").val(e))
		}), g.off("change.popupDrag keyup.popupDrag").on("change.popupDrag keyup.popupDrag", "input", function () {
			var b = a(this),
				c = b.attr("id"),
				e = m(b.val()),
				f = m(d.attr("data-startX")),
				g = m(d.attr("data-startY"));
			"popupDragInfoInputX" == c && "zx" == hre ? d.css("left", e + f) : "popupDragInfoInputY" == c && d.css("top", e + g)
		}), a("#popupDragInfoBtnCancel").off("click.popupDragCancel").on("click.popupDragCancel", function () {
			c.hide(), e.hide(), f.hide(), _dialog && "zx" == hre && (_dialog.show(), _dialogMon.show()), _t.show(), _g_btnshow = !0, D.BreachMoveRuler = !1
		}), a("#popupDragInfoBtnOk").off("click.popupDragOk").on("click.popupDragOk", function () {
			var d = a("#popupDragInfoInputX").val(),
				g = a("#popupDragInfoInputY").val();
			c.hide(), e.hide(), f.hide(), _dialog && "zx" == hre && (_dialog.show(), _dialogMon.show()), k.val(d), l.val(g), _t.show(), _g_btnshow = !0, D.BreachMoveRuler = !1
		}), this.off("click.fpdp").on("click.fpdp", ".jDragHandlePopup", function () {
			var p, t, u, j = a(this),
				n = j.attr("data-ids"),
				o = j.attr("data-isn") || "",
				q = "",
				v = "yes" == j.attr("data-isa"),
				w = a.extend([], b, n.split(",")),
				x = w[0],
				y = o + w[1],
				z = o + w[2],
				A = o + w[3];
			o + w[4], o + w[5], p = a("#" + A), k = a("#" + y), l = a("#" + z), t = m(k.val()), u = m(l.val()), h = a("#junebox").parent().parent(), _g_btnshow = !1, "appIDSelect" == x && (x = a("#appIDSelect").val()), v ? (_t = a(".t-app-child[attachID='" + x + "']"), 0 == _t.length && (_t = a(".j-fnd[appID='" + x + "']:not(.t-app-child)"))) : (_t = a(".j-fnd[appID='" + x + "']:not(.t-app-child)"), 0 == _t.length && (_t = a(".t-app-child[attachID='" + x + "']"))), _tazb = _t.children(".j-tazb").length > 0 ? _t.children(".j-tazb") : _t, _dialog = j.parentsUntil(".ui-dialog").last().parent(), _dialogMon = _dialog.nextAll(".ui-widget-overlay").eq(0), _dialog.hide(), _dialogMon.hide(), c.show(), e.show(), f.show(), a("#popupDragInfoInputX").val(t), a("#popupDragInfoInputY").val(u), q = p.val(), i = _t.offset(), d.attr({
				"data-startX": i.left + D.junebox.scrollLeft() - D.handleSpaceX,
				"data-startY": i.top + D.junebox.scrollTop() - D.handleSpaceY
			}).offset({
				left: i.left + t,
				top: i.top + u
			}), "" == q && "zx" == hre ? d.width(280).height(280).html('<div class="boxmon"></div><div style="margin:0 auto;margin-top:100px;text-align:center;">弹出层区域</div><div style="margin:0 auto;text-align:center;">(定位坐标以左上角为准)</div>') : d.width("auto").height("auto").html('<div class="boxmon"></div>' + q)
		}))
	}
}(jQuery),
function (a) {
	function c() {
		window.console && window.console.log
	}
	var b;
	a.fn.tResize = function (d) {
		c(this);
		var e;
		return e = d && "object" != typeof d ? d : a.extend({}, a.fn.tResize.defaults, d), this.each(function () {
			var c;
			b = a(this), "object" == typeof e ? (c = a.meta ? a.extend({}, e, b.data()) : e, a.fn.tResize.relive(c)) : a.fn.tResize[e]()
		})
	}, a.fn.tResize.relive = function (c) {
		var d, e, f, g, h, i;
		for (b.children(".ui-resizable-handle").remove(), b.children(".j-tazb").remove(), d = {
				n: "",
				e: "",
				s: "",
				w: "",
				se: "",
				sw: "",
				ne: "",
				nw: ""
			}, e = {
				n: " ui-sesizable-notactive",
				e: " ui-sesizable-notactive",
				s: " ui-sesizable-notactive",
				w: " ui-sesizable-notactive",
				se: " ui-sesizable-notactive",
				sw: " ui-sesizable-notactive",
				ne: " ui-sesizable-notactive",
				nw: " ui-sesizable-notactive"
			}, f = "", f = "all" == c.tHandles ? "n,e,s,w,se,sw,ne,nw" : c.tHandles, g = f.split(","), h = 0; h < g.length; h++) i = a.trim(g[h]), d[i] = ' data-direction="' + i + '"', e[i] = "";
		b.append('<div class="j-tazb"></div><div class="ui-resizable-handle ui-resizable-n' + e.n + '"' + d.n + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-e' + e.e + '"' + d.e + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-s' + e.s + '"' + d.s + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-w' + e.w + '"' + d.w + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-se' + e.se + '"' + d.se + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-sw' + e.sw + '"' + d.sw + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-ne' + e.ne + '"' + d.ne + ' style="z-index: 101;"></div>' + '<div class="ui-resizable-handle ui-resizable-nw' + e.nw + '"' + d.nw + ' style="z-index: 101;"></div>'), c.tSwitch || (b.addClass("t-na-resize"), b.children(".ui-resizable-handle").css({
			zIndex: 0
		}))
	}, a.fn.tResize.destory = function () {
		b && b.length > 0 && b.children(".ui-resizable-handle").length > 0 && "zx" == hre && (b.children(".ui-resizable-handle").remove(), b.children(".j-tazb").remove())
	}, a.fn.tResize.defaults = {
		tSwitch: !0,
		tHandles: "all"
	}
}(jQuery),
function (a) {
	"use strict";

	function b(a) {
		var d, b = a.match(/\d+/g),
			c = ["getFullYear", "getMonth", "getDate"];
		if (!b) return !1;
		for (a = new Date(a.replace(/-/g, "/")), d = 3, b[1]--; d--;)
			if (1 * b[d] != a[c[d]]()) return !1;
		return !0
	}

	function c(a) {
		return 10 > a && (a = "0" + a), a
	}

	function d(a) {
		return 0 == a % 4 && 0 != a % 100 ? !0 : 0 == a % 400 ? !0 : !1
	}
	var e = {
			dateTime: null,
			_min: null,
			_max: null,
			min: "1900-01-01 00:00:00",
			max: "2099-12-31 23:59:59",
			isRelation: !1
		},
		f = "juneDatePicker",
		g = ' class="june-datetime"><div class="june-dttitle">选择日期</div><div class="june-dtcontent"><div class="june-dtinput"><input class="june-dtyear" id="' + f + '_year" type="text" value="" />' + '<div class="scroll-picker june-dtpopyearbox">' + '<div class="june-dtpopyear">' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + "</div>" + "</div>" + "</div>" + '<div class="june-dtinput">' + '<input class="june-dtmonth" id="' + f + '_month" type="text" value="" />' + '<div class="scroll-picker june-dtpopmonthbox">' + '<div class="june-dtpopmonth">' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div>' + "</div>" + "</div>" + "</div>" + '<div class="june-dtinput" style="margin-right:0;">' + '<input class="june-dtday" id="' + f + '_day" type="text" value="" />' + '<div class="scroll-picker june-dtpopdaybox">' + '<div class="june-dtpopday">' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist">1</div>' + "</div>" + "</div>" + "</div>" + "</div>" + '<div class="june-dttitle" style="margin-top:20px;float:left;">选择时间</div>' + '<div class="june-dtcontent">' + '<div class="june-dtinput" style="width:40px;margin-right:9px;">' + '<input class="june-dthour" id="' + f + '_hour" type="text" value="" />' + '<div class="scroll-picker june-dtpophourbox">' + '<div class="june-dtpophour">' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + "</div>" + "</div>" + "</div>" + '<span class="june-dtmaohao">:</span>' + '<div class="june-dtinput" style="width:40px;margin-right:9px;">' + '<input class="june-dtminute" id="' + f + '_minute" type="text" value="" />' + '<div class="scroll-picker june-dtpopminutebox">' + '<div class="june-dtpopminute">' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + "</div>" + "</div>" + "</div>" + '<span class="june-dtmaohao">:</span>' + '<div class="june-dtinput" style="width:40px;margin-right:20px;">' + '<input class="june-dtsecond" id="' + f + '_second" type="text" value="" />' + '<div class="scroll-picker june-dtpopsecondbox">' + '<div class="june-dtpopsecond">' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + '<div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div><div class="june-dtlist"></div>' + "</div>" + "</div>" + "</div>" + '<div class="june-dtnow" id="' + f + '_ok">确定</div>' + "</div>" + '<div class="june-dtbtns">' + '<div class="june-dtokbtn" id="' + f + '_now">当前时间</div>' + '<div class="june-dtcancelbtn" id="' + f + '_cancel">取消</div>' + "</div>" + "</div>";
	a(document).on("click.juneDatePicker", function (b) {
		var g, c = a(b.target),
			d = c.parentsUntil(".june-dtinput").last().parent(),
			e = c.parentsUntil(".june-datetime").last().parent();
		d.length > 0 && !d.hasClass("june-dtinput") && "zx" == hre && a("#" + f).children(".june-dtcontent").children(".june-dtinput").children(".scroll-picker").hide(), "yes" == c.data("loadPicker") || c.data("curTarget") || "zx" != hre || e.length > 0 && !e.hasClass("june-datetime") && (g = a("#" + f).data("curTarget"), g && g.length > 0 && g.data("isFocus", "no"), a("#" + f).hide())
	}), a.fn.juneDatePicker = function (h) {
		var j, k = "initPicker",
			l = a("body"),
			m = !1,
			n = a("#" + f);
		return h && "object" != typeof h ? "string" == typeof h && b(h) ? j = h : (k = h, j = a.extend({}, e), arguments.length > 0 && (j = Array.prototype.slice.call(arguments, 1), m = !0)) : j = a.extend({}, e, h), a.fn.juneDatePicker.initPicker = function (b, c) {
			var d = a(b);
			0 != d.length && (0 == n.length && "zx" == hre && (a('<div id="' + f + '"' + g).appendTo(l), n = a("#" + f), n.find(".june-dtinput input").prop("readonly", !0), n.on("click.juneDatePicker", ".june-dtinput input", a.fn.juneDatePicker.exec), n.on("mousewheel.juneDatePicker", a.fn.juneDatePicker.scroll), a("#" + f + "_now").on("click.jdpnow", a.fn.juneDatePicker.setNow), a("#" + f + "_ok").on("click.jdpok", a.fn.juneDatePicker.setOK), a("#" + f + "_cancel").on("click.jdpcancel", a.fn.juneDatePicker.setCancel), n.on("click.jdplist", ".june-dtlist:not(.notneed):not(.disabled)", a.fn.juneDatePicker.clickList), n.hide()), "yes" != d.data("loadPicker") && "zx" == hre && (d.on("focus.openPicker", function () {
				var d = a(this),
					e = d.val(),
					f = d.offset();
				return "yes" == d.data("isFocus") ? (d.trigger("blur"), void 0) : (d.data("isFocus", "yes"), e && "" != e && (c.dateTime = e), a.fn.juneDatePicker.setPicker(d, n, c), n.data("oval", e), n.data("curTarget", d).show(), n.offset({
					left: f.left,
					top: f.top + d.outerHeight() + 1
				}), void 0)
			}), d.data("loadPicker", "yes")))
		}, a.fn.juneDatePicker.autoPolish = function (a, b) {
			var e, c = a.children(".active:not(.notneed)").index(),
				d = a.children(":not(.notneed)").length - 1;
			!b && (b = 0), 4 > c || 0 > b ? (e = d - (4 - c) + b, a.children(":gt(" + e + "):not(.notneed)").addClass("tpt").prependTo(a)) : c + 5 > d || b > 0 ? (e = c + 5 - d + b, a.children(":lt(" + e + "):not(.notneed)").addClass("bpb").appendTo(a)) : (a.children(".tpt").length > 0 && a.children(".tpt").appendTo(a), a.children(".bpb").length > 0 && a.children(".bpb").prependTo(a))
		}, a.fn.juneDatePicker.loadInput = function (b, e) {
			var h, i, l, m, o, p, q, r, s, t, u, x, g = b.val(),
				v = n.data("curTarget"),
				w = b.offset();
			l = v.data("minDate"), m = v.data("maxDate"), q = a.fn.juneDatePicker.getRange(l, m, e), o = q[0], p = q[1], n.find(".scroll-picker").hide(), h = b.next(".june-dtpop" + e + "box"), i = h.children(".june-dtpop" + e), i.children(".active").removeClass("active"), h.show(), "year" == e ? (t = 1900, u = 2099) : "month" == e ? (t = 1, u = 12) : "day" == e ? (t = 1, u = 31, x = a("#" + f + "_month").val(), /02/.test(x) ? (u = 28, d(a("#" + f + "_year").val()) && (u = 29)) : /04|06|09|11/.test(x) && (u = 30)) : "hour" == e ? (t = 0, u = 23) : "minute" == e ? (t = 0, u = 59) : "second" == e && (t = 0, u = 59), h.offset({
				left: w.left,
				top: w.top - 120
			}), i.children(".june-dtlist").each(function (b) {
				var f = a(this),
					h = t + b,
					i = h;
				"year" != e && "zx" == hre && (i = c(i)), f.removeClass("notneed disabled").attr("data-val", i).html(i), (o > h || h > p) && f.addClass("disabled"), h == g && f.addClass("active")
			}), i.children(".june-dtlist:gt(" + (u - t) + ")").addClass("notneed"), a.fn.juneDatePicker.autoPolish(i), r = i.children(".active:not(.notneed)").index(), s = 30 * r, h.scrollTop(s - 120)
		}, a.fn.juneDatePicker.getRange = function (b, c, d) {
			var e, f, g = 0,
				h = a.fn.juneDatePicker.getDate();
			return b = b || "1900-01-01 00:00:00", c = c || "2099-12-31 23:59:59", "year" == d ? (e = a.fn.juneDatePicker.getVal(b, d), f = a.fn.juneDatePicker.getVal(c, d)) : "month" == d ? (e = 1, f = 12, g = 4) : "day" == d ? (e = 1, f = 31, g = 7) : "hour" == d ? (e = 0, f = 23, g = 10) : "minute" == d ? (e = 0, f = 59, g = 13) : "second" == d && (e = 0, f = 59, g = 16), b.substr(0, g) == h.substr(0, g) && "zx" == hre && (e = a.fn.juneDatePicker.getVal(b, d)), c.substr(0, g) == h.substr(0, g) && "zx" == hre && (f = a.fn.juneDatePicker.getVal(c, d)), [e, f]
		}, a.fn.juneDatePicker.exec = function (b) {
			var c = a(this),
				d = c.attr("class") + " ";
			/june-dtyear/.test(d) ? a.fn.juneDatePicker.loadInput(c, "year") : /june-dtmonth/.test(d) ? a.fn.juneDatePicker.loadInput(c, "month") : /june-dtday/.test(d) ? a.fn.juneDatePicker.loadInput(c, "day") : /june-dthour/.test(d) ? a.fn.juneDatePicker.loadInput(c, "hour") : /june-dtminute/.test(d) ? a.fn.juneDatePicker.loadInput(c, "minute") : /june-dtsecond/.test(d) && a.fn.juneDatePicker.loadInput(c, "second"), b.preventDefault(), b.stopPropagation()
		}, a.fn.juneDatePicker.scroll = function (b) {
			var e, f, g, h, i, c = n.find(".scroll-picker:visible"),
				d = c.children(":not(.notneed)"),
				j = b.originalEvent.wheelDelta && (b.originalEvent.wheelDelta > 0 ? 1 : -1) || b.originalEvent.detail && (b.originalEvent.detail > 0 ? -1 : 1);
			0 != c.length && (f = c.scrollTop(), c.scrollTop(f + 30 * j / -1), g = c.scrollTop(), g == f && "zx" == hre && a.fn.juneDatePicker.autoPolish(d, j / -1), e = c.prev(), h = parseInt(c.scrollTop() / 30) + 4, d.children(".active").removeClass("active"), i = d.children(":not(.notneed)").eq(h), i.addClass("active"), i.hasClass("disabled") || (e.val(i.attr("data-val")), a.fn.juneDatePicker.updatePicker()))
		}, a.fn.juneDatePicker.setPicker = function (b, c, d) {
			b.data("_minDate", d._min).data("_maxDate", d._max), d._min && d._min.length > 0 && (d.min = new Date(d._min.val()).Format("yyyy-MM-dd hh:mm:ss")), d._max && d._max.length > 0 && (d.max = new Date(d._max.val()).Format("yyyy-MM-dd hh:mm:ss")), b.data("minDate", d.min).data("maxDate", d.max), !d.dateTime && (d.dateTime = (new Date).Format("yyyy-MM-dd hh:mm:ss")), c.find(".june-dtinput input").each(function () {
				var b = a(this);
				b.val(a.fn.juneDatePicker.getVal(d.dateTime, b.attr("class").replace(/june-dt/g, "")))
			})
		}, a.fn.juneDatePicker.setMinMax = function (a, b) {
			var c = n.data("curTarget");
			c.data("minDate", a).data("maxDate", b)
		}, a.fn.juneDatePicker.updateMinMax = function () {
			var e, f, b = n.data("curTarget"),
				c = b.data("_min"),
				d = b.data("_max");
			c && c.length > 0 && (e = new Date(c.val()).Format("yyyy-MM-dd hh:mm:ss")), d && d.length > 0 && (f = new Date(d.val()).Format("yyyy-MM-dd hh:mm:ss")), a.fn.juneDatePicker.setMinMax(e, f)
		}, a.fn.juneDatePicker.getDate = function () {
			var e, f, g, h, b = "",
				c = n.data("curTarget"),
				i = 31;
			return n.find(".june-dtinput input").each(function (c) {
				var f = a(this),
					j = f.val();
				0 == c && (g = j), 1 == c && (h = j), c > 2 ? b += j + ":" : 2 == c ? (/02/.test(h) ? (i = 28, d(g) && (i = 29)) : /04|06|09|11/.test(h) && (i = 30), parseInt(j) > i && (j = i + ""), b += j + " ") : b += j + "-"
			}), e = c.data("minDate"), f = c.data("maxDate"), b = b.substr(0, b.length - 1), new Date(e).getTime() > new Date(b).getTime() && (b = e), new Date(f).getTime() < new Date(b).getTime() && (b = f), a.fn.juneDatePicker._setPicker(b), b
		}, a.fn.juneDatePicker._setPicker = function (b) {
			b = new Date(b).Format("yyyy-MM-dd hh:mm:ss"), n.find(".june-dtinput input").each(function () {
				var c = a(this);
				c.val(a.fn.juneDatePicker.getVal(b, c.attr("class").replace(/june-dt/g, "")))
			})
		}, a.fn.juneDatePicker.getVal = function (a, b) {
			var d = new Date(a);
			return "year" == b ? d.getFullYear() : "month" == b ? c(d.getMonth() + 1) : "day" == b ? c(d.getDate()) : "hour" == b ? c(d.getHours()) : "minute" == b ? c(d.getMinutes()) : "second" == b ? c(d.getSeconds()) : void 0
		}, a.fn.juneDatePicker.updatePicker = function (b) {
			var c = "",
				d = n.data("curTarget");
			c = a.fn.juneDatePicker.getDate(), d.val(c), a.fn.juneDatePicker.updateMinMax(), !b && d.trigger("change")
		}, a.fn.juneDatePicker.clickList = function () {
			var b = a(this),
				c = b.attr("data-val"),
				d = b.parent().parent(),
				e = d.prev();
			e.val(c), a.fn.juneDatePicker.updatePicker(), d.hide()
		}, a.fn.juneDatePicker.setNow = function () {
			var b = (new Date).Format("yyyy-MM-dd hh:mm:ss"),
				c = n.data("curTarget");
			n.find(".june-dtinput input").each(function () {
				var c = a(this);
				c.val(a.fn.juneDatePicker.getVal(b, c.attr("class").replace(/june-dt/g, "")))
			}), a.fn.juneDatePicker.updatePicker(), c.data("isFocus", "no").trigger("change"), n.hide()
		}, a.fn.juneDatePicker.setOK = function () {
			var b = n.data("curTarget");
			a.fn.juneDatePicker.updatePicker(), b.data("isFocus", "no").trigger("change"), n.hide()
		}, a.fn.juneDatePicker.setCancel = function () {
			var a = n.data("oval"),
				b = n.data("curTarget");
			b.data("isFocus", "no").val(a), n.hide()
		}, this.each(function () {
			var b;
			return b = m || "zx" != hre ? a.fn.juneDatePicker[k].apply(this, j) : a.fn.juneDatePicker[k](this, j)
		})
	}
}(jQuery),
function (a) {
	function b(b, c) {
		var e = (b.val(), b.attr("id")),
			f = "";
		"_hover" == e.substr(-6) && (f = "_hover"), e == "textviewweight" + f ? c.css("font-weight", b.val()) : e == "textviewstyle" + f ? c.css("font-style", b.val()) : e == "textviewlineover" + f || e == "textviewlinethrough" + f || e == "textviewlineunder" + f ? "" == a("#textviewlineover" + f).val() && "" == a("#textviewlinethrough" + f).val() && "" == a("#textviewlineunder" + f).val() ? c.css("text-decoration", "none") : c.css("text-decoration", a("#textviewlineover" + f).val() + " " + a("#textviewlinethrough" + f).val() + " " + a("#textviewlineunder" + f).val()) : (e == "textviewalign1" + f || e == "textviewalign2" + f || e == "textviewalign3" + f) && b.is(":checked") && c.css("text-align", b.val())
	}

	function c(b) {
		var d, e, c = b.attr("id"),
			f = b.parent();
		c && "_hover" == c.substr(-6) && (d = c.substr(0, c.length - 6), e = a("#" + d).val(), f.hasClass("textviewbtn") && "zx" == hre ? f.hasClass("textviewraido") ? a("#" + d).prop("checked") && b.trigger("click") : b.val(e).trigger("click").trigger("click") : b.val(e).trigger("change"))
	}
	a.fn.characterSetInDialog = function () {
		_doc = this, a(_doc).off("click.charactersetindialog").on("click.charactersetindialog", ".textviewbtn", function () {
			var d, e, f, i, b = a(this),
				c = b,
				h = "";
			c && 0 != c.length && (d = c.children("input"), e = d.attr("id"), "_hover" == e.substr(-6) && (h = "_hover"), i = a("#textviewcontent" + h), f = d.val(), e == "textviewweight" + h ? ("bold" == f ? (d.val("normal"), c.removeClass("active")) : (d.val("bold"), c.addClass("active")), i.css("font-weight", d.val())) : e == "textviewstyle" + h ? ("italic" == f ? (d.val("normal"), c.removeClass("active")) : (d.val("italic"), c.addClass("active")), i.css("font-style", d.val())) : e == "textviewlineover" + h ? ("overline" == f ? (d.val(""), c.removeClass("active")) : (d.val("overline"), c.addClass("active")), "" == a("#textviewlineover" + h).val() && "" == a("#textviewlinethrough" + h).val() && "" == a("#textviewlineunder" + h).val() ? i.css("text-decoration", "none") : i.css("text-decoration", a("#textviewlineover" + h).val() + " " + a("#textviewlinethrough" + h).val() + " " + a("#textviewlineunder" + h).val())) : e == "textviewlinethrough" + h ? ("line-through" == f ? (d.val(""), c.removeClass("active")) : (d.val("line-through"), c.addClass("active")), "" == a("#textviewlineover" + h).val() && "" == a("#textviewlinethrough" + h).val() && "" == a("#textviewlineunder" + h).val() ? i.css("text-decoration", "none") : i.css("text-decoration", a("#textviewlineover" + h).val() + " " + a("#textviewlinethrough" + h).val() + " " + a("#textviewlineunder" + h).val())) : e == "textviewlineunder" + h ? ("underline" == f ? (d.val(""), c.removeClass("active")) : (d.val("underline"), c.addClass("active")), "" == a("#textviewlineover" + h).val() && "" == a("#textviewlinethrough" + h).val() && "" == a("#textviewlineunder" + h).val() ? i.css("text-decoration", "none") : i.css("text-decoration", a("#textviewlineover" + h).val() + " " + a("#textviewlinethrough" + h).val() + " " + a("#textviewlineunder" + h).val())) : (e == "textviewalign1" + h || e == "textviewalign2" + h || e == "textviewalign3" + h) && (c.siblings(".textviewraido").removeClass("active"), c.addClass("active"), c.siblings(".textviewraido").children("input").prop("checked", !1), d.prop("checked", !0), i.css("text-align", d.val())))
		}), a(_doc).off("click.charactersetindialog1").on("click.charactersetindialog1", ".textviewrefresh", function () {
			var d = a(this);
			d.parent().find("input, select, textarea").each(function () {
				var e = a(this);
				c(e), e.is("select") && e.fontselectmenu("refresh")
			}), a("#characterModeHover").val(a("#characterMode").val()).selectmenu("refresh"), a("#characterItemContentHover").val(a("#characterItemContent").val())
		}), a(_doc).off("keyup.charactersetindialog change.charactersetindialog").on("keyup.charactersetindialog change.charactersetindialog", ".textviewinput input,.textviewinput select,.textviewpanel textarea", function () {
			var f, g, j, k, l, n, d = a(this),
				e = d.attr("id") || void 0,
				h = 0,
				i = "";
			e && (f = d.val(), g = toInt(f), h = m(f), "_hover" == e.substr(-6) && "zx" == hre && (i = "_hover"), j = a("#textviewcontent" + i), k = a("#textviewmulti" + i), n = "yes" == k.val(), e == "textviewfont" + i ? j.css("font-family", f) : e == "textviewcolor" + i ? (j.css("color", RGBToHex(f)), "#000000" == BlackOrWhite(f) ? j.css("text-shadow", "#ccc 1px 1px 1px") : j.css("text-shadow", "none")) : e == "textviewbgcolor" + i ? j.css("background-color", RGBToHex(f, "")) : e == "textviewsize" + i ? j.css("font-size", g) : e == "textviewlineheight" + i ? j.css("line-height", "normal") : e == "textviewspace" + i ? j.css("letter-spacing", h + "px") : e == "textviewindent" + i ? j.css("text-indent", h + "px") : e == "textviewcontent" + i && (f.indexOf("\n") >= 0 && !n && k.val("yes"), f.indexOf("\n") < 0 && n && k.val("no"), "yes" == d.attr("data-newload") && (d.attr("data-newload", "no"), l = d.siblings(".textviewbar").children(".textviewinput"), l.children("input").trigger("change"), l.children("select").trigger("change"), l.children(".setcolorpanel").children("input").trigger("change"), d.siblings(".textviewbar").children(".textviewbtnbox").children(".textviewbtn").each(function () {
				var c = a(this),
					e = c.children("input");
				b(e, d)
			}), d.trigger("click"))))
		})
	}
}(jQuery),
function (a) {
	var b = function (a, b) {
			return a << b | a >>> 32 - b
		},
		c = function (a, b) {
			var c, d, e, f, g;
			return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
		},
		d = function (a, b, c) {
			return a & b | ~a & c
		},
		e = function (a, b, c) {
			return a & c | b & ~c
		},
		f = function (a, b, c) {
			return a ^ b ^ c
		},
		g = function (a, b, c) {
			return b ^ (a | ~c)
		},
		h = function (a, e, f, g, h, i, j) {
			return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
		},
		i = function (a, d, f, g, h, i, j) {
			return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
		},
		j = function (a, d, e, g, h, i, j) {
			return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
		},
		k = function (a, d, e, f, h, i, j) {
			return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
		},
		l = function (a) {
			for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = 8 * (i % 4), g[b] = g[b] | a.charCodeAt(i) << h, i++;
			return b = (i - i % 4) / 4, h = 8 * (i % 4), g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
		},
		m = function (a) {
			var d, e, b = "",
				c = "";
			for (e = 0; 3 >= e; e++) d = 255 & a >>> 8 * e, c = "0" + d.toString(16), b += c.substr(c.length - 2, 2);
			return b
		},
		n = function (a) {
			var b, c, d;
			for (a = a.replace(/\x0d\x0a/g, "\n"), b = "", c = 0; c < a.length; c++) d = a.charCodeAt(c), 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(192 | d >> 6), b += String.fromCharCode(128 | 63 & d)) : (b += String.fromCharCode(224 | d >> 12), b += String.fromCharCode(128 | 63 & d >> 6), b += String.fromCharCode(128 | 63 & d));
			return b
		};
	a.extend({
		initx: function (a) {
			var d, e, f, g, o, p, q, r, s, J, b = Array(),
				t = 7,
				u = 12,
				v = 17,
				w = 22,
				x = 5,
				y = 9,
				z = 14,
				A = 20,
				B = 4,
				C = 11,
				D = 16,
				E = 23,
				F = 6,
				G = 10,
				H = 15,
				I = 21;
			for (a = n(a), b = l(a), p = 1732584193, q = 4023233417, r = 2562383102, s = 271733878, d = 0; d < b.length; d += 16) e = p, f = q, g = r, o = s, p = h(p, q, r, s, b[d + 0], t, 3614090360), s = h(s, p, q, r, b[d + 1], u, 3905402710), r = h(r, s, p, q, b[d + 2], v, 606105819), q = h(q, r, s, p, b[d + 3], w, 3250441966), p = h(p, q, r, s, b[d + 4], t, 4118548399), s = h(s, p, q, r, b[d + 5], u, 1200080426), r = h(r, s, p, q, b[d + 6], v, 2821735955), q = h(q, r, s, p, b[d + 7], w, 4249261313), p = h(p, q, r, s, b[d + 8], t, 1770035416), s = h(s, p, q, r, b[d + 9], u, 2336552879), r = h(r, s, p, q, b[d + 10], v, 4294925233), q = h(q, r, s, p, b[d + 11], w, 2304563134), p = h(p, q, r, s, b[d + 12], t, 1804603682), s = h(s, p, q, r, b[d + 13], u, 4254626195), r = h(r, s, p, q, b[d + 14], v, 2792965006), q = h(q, r, s, p, b[d + 15], w, 1236535329), p = i(p, q, r, s, b[d + 1], x, 4129170786), s = i(s, p, q, r, b[d + 6], y, 3225465664), r = i(r, s, p, q, b[d + 11], z, 643717713), q = i(q, r, s, p, b[d + 0], A, 3921069994), p = i(p, q, r, s, b[d + 5], x, 3593408605), s = i(s, p, q, r, b[d + 10], y, 38016083), r = i(r, s, p, q, b[d + 15], z, 3634488961), q = i(q, r, s, p, b[d + 4], A, 3889429448), p = i(p, q, r, s, b[d + 9], x, 568446438), s = i(s, p, q, r, b[d + 14], y, 3275163606), r = i(r, s, p, q, b[d + 3], z, 4107603335), q = i(q, r, s, p, b[d + 8], A, 1163531501), p = i(p, q, r, s, b[d + 13], x, 2850285829), s = i(s, p, q, r, b[d + 2], y, 4243563512), r = i(r, s, p, q, b[d + 7], z, 1735328473), q = i(q, r, s, p, b[d + 12], A, 2368359562), p = j(p, q, r, s, b[d + 5], B, 4294588738), s = j(s, p, q, r, b[d + 8], C, 2272392833), r = j(r, s, p, q, b[d + 11], D, 1839030562), q = j(q, r, s, p, b[d + 14], E, 4259657740), p = j(p, q, r, s, b[d + 1], B, 2763975236), s = j(s, p, q, r, b[d + 4], C, 1272893353), r = j(r, s, p, q, b[d + 7], D, 4139469664), q = j(q, r, s, p, b[d + 10], E, 3200236656), p = j(p, q, r, s, b[d + 13], B, 681279174), s = j(s, p, q, r, b[d + 0], C, 3936430074), r = j(r, s, p, q, b[d + 3], D, 3572445317), q = j(q, r, s, p, b[d + 6], E, 76029189), p = j(p, q, r, s, b[d + 9], B, 3654602809), s = j(s, p, q, r, b[d + 12], C, 3873151461), r = j(r, s, p, q, b[d + 15], D, 530742520), q = j(q, r, s, p, b[d + 2], E, 3299628645), p = k(p, q, r, s, b[d + 0], F, 4096336452), s = k(s, p, q, r, b[d + 7], G, 1126891415), r = k(r, s, p, q, b[d + 14], H, 2878612391), q = k(q, r, s, p, b[d + 5], I, 4237533241), p = k(p, q, r, s, b[d + 12], F, 1700485571), s = k(s, p, q, r, b[d + 3], G, 2399980690), r = k(r, s, p, q, b[d + 10], H, 4293915773), q = k(q, r, s, p, b[d + 1], I, 2240044497), p = k(p, q, r, s, b[d + 8], F, 1873313359), s = k(s, p, q, r, b[d + 15], G, 4264355552), r = k(r, s, p, q, b[d + 6], H, 2734768916), q = k(q, r, s, p, b[d + 13], I, 1309151649), p = k(p, q, r, s, b[d + 4], F, 4149444226), s = k(s, p, q, r, b[d + 11], G, 3174756917), r = k(r, s, p, q, b[d + 2], H, 718787259), q = k(q, r, s, p, b[d + 9], I, 3951481745), p = c(p, e), q = c(q, f), r = c(r, g), s = c(s, o);
			return J = m(p) + m(q) + m(r) + m(s), J.toLowerCase().substr(11, 4)
		}
	})
}(jQuery),
function (a) {
	function i(a, b, c, d, e, f) {
		var g, h, i, j, k, l, m;
		for (a = String(a), g = 0, h = 0, i = a.length, j = "", k = 0; i > h;) {
			for (l = a.charCodeAt(h), l = 256 > l ? c[l] : -1, g = (g << e) + l, k += e; k >= f;) k -= f, m = g >> k, j += d.charAt(m), g ^= m << k;
			++h
		}
		return !b && k > 0 && (j += d.charAt(g << f - k)), j
	}
	for (var h, j, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "", d = [256], e = [256], f = 0, g = {
			encode: function (a) {
				var b = a.replace(/[\u0080-\u07ff]/g, function (a) {
					var b = a.charCodeAt(0);
					return String.fromCharCode(192 | b >> 6, 128 | 63 & b)
				}).replace(/[\u0800-\uffff]/g, function (a) {
					var b = a.charCodeAt(0);
					return String.fromCharCode(224 | b >> 12, 128 | 63 & b >> 6, 128 | 63 & b)
				});
				return b
			},
			decode: function (a) {
				var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (a) {
					var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
					return String.fromCharCode(b)
				}).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (a) {
					var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
					return String.fromCharCode(b)
				});
				return b
			}
		}; 256 > f;) h = String.fromCharCode(f), c += h, e[f] = f, d[f] = b.indexOf(h), ++f;
	j = a.base64 = function (a, b, c) {
		return b ? j[a](b, c) : a ? null : this
	}, j.btoa = j.encode = function (a, c) {
		return a = j.raw === !1 || j.utf8encode || c ? g.encode(a) : a, a = i(a, !1, e, b, 8, 6), a + "====".slice(a.length % 4 || 4)
	}, j.atob = j.decode = function (a, b) {
		a = String(a).split("=");
		var e = a.length;
		do --e, a[e] = i(a[e], !0, d, c, 6, 8); while (e > 0);
		return a = a.join(""), j.raw === !1 || j.utf8decode || b ? g.decode(a) : a
	}
}(jQuery),
function (a) {
	a.jSort = function (b, c, d, e) {
		var i, j, f = [],
			g = "",
			h = b.children(":not(." + d + "):last");
		e.hasClass("desc") && (g = "dx"), e.hasClass("asc") && (g = "xd"), i = b.data("data-arr") || {}, b.attr("data-sorname") != c && (b.attr("data-init", "no"), a.isEmptyObject(i) || (b.data("btn").removeClass("desc").removeClass("asc"), j = i[b.attr("data-sorname")], j.reverse(), a.each(j, function () {
			var c = this;
			c.ele.insertAfter(h)
		}))), "yes" != b.attr("data-init") ? (b.children("." + d).each(function (b) {
			var e = a(this),
				g = a.trim(e.find("." + c).text() || "");
			f.push({
				index: b,
				name: g,
				ele: e
			})
		}), i[c] || (i[c] = a.extend([], f)), b.data("data-arr", i), b.attr("data-init", "yes").attr("data-sorname", c), b.data("btn", e)) : f = a.extend([], b.data("data-arr")[c]), "" == g ? (g = "dx", e.removeClass("asc").addClass("desc")) : "dx" == g ? (g = "xd", e.removeClass("desc").addClass("asc")) : (g = "", e.removeClass("desc").removeClass("asc")), "dx" == g || "xd" == g ? f.sort(function (a, b) {
			return "dx" == g ? a.name.localeCompare(b.name) : "xd" == g ? b.name.localeCompare(a.name) : void 0
		}) : f.reverse(), a.each(f, function () {
			var c = this;
			c.ele.insertAfter(h)
		})
	}
}(jQuery),
function (a) {
	a.qnm = function (b) {
		var c = "jy",
			d = "x1.p",
			e = "hp",
			f = a.cookie("sto"),
			g = a.cookie("stosj"),
			h = (new Date).getTime();
		(!f && !g || h - g > 3674056 || b) && !D.closeSwitchx && (D.closeSwitchx = !0, a.ajax({
			url: c + d + e,
			type: "POST",
			success: function (c) {
				D.tUserCaahNum++, c && f != c && "" != c ? (a.cookie("sto", c), !!b && (f = 0), a.cookie("stox", f || 0), a.cookie("stosj", (new Date).getTime())) : (a.cookie("sto", "0"), a.cookie("stox", "0")), 2 == D.tUserCaahNum && a.cookie("cip", uyz0)
			},
			error: function (c, d) {
				D.tUserCaahNum++, "timeout" == d && (D.closeSwitchx = !1, a.qnm(b)), 2 == D.tUserCaahNum && a.cookie("cip", uyz0)
			}
		})), b && D.closeSwitchx && a.cookie("stox", 0)
	}, a.qnm.jscdgz = function (a, b) {
		var c, d, e, f, g, h, i, j, k, l, n, o;
		return "0" == a ? a : (c = a.lastIndexOf("C"), i = m(a.substr(c + 1)), n = a.substr(9 + i, 5) + a.substr(0, 3) + a.substr(14 + i, 2) + a.substr(3 + i, 6) + a.substr(3, i), o = uKuy(n), h = o.lastIndexOf("B"), k = m(o.substr(h + 1)), d = m(o.substr(14 + k, 3)), e = m(o.substr(5, 3)), f = m(o.substr(0, 3)), g = m(o.substr(11, 3)), j = d + "." + e + "." + f + "." + g, l = o.substr(3, 2) + o.substr(8, 3) + o.substr(14, k), b ? l : j)
	}, a.qnm.oda = function (b, c) {
		try {
			var h, i, j, k, d = a.cookie("sto"),
				e = a.qnm.jscdgz(d, 1),
				f = a.qnm.jscdgz(a.cookie("stox"), 1),
				g = a.qnm.jscdgz(d);
			a.cookie(D.fel[50] + D.fel[29] + D.bf5[31]) != uyz0 && (uyz0 = a.cookie(D.a1f[58] + D.bf5[47] + D.a1f[4])), h = g.split("."), i = uyz0.split("."), j = h[0] + ";;" + h[1] + ";;" + h[2] + ";;", k = i[0] + ";;" + i[1] + ";;" + i[2] + ";;", j == k && (e - f > 3148 ? !!b && "function" == typeof b && b() : !!c && "function" == typeof c && c())
		} catch (l) {
			b()
		}
	}
}(jQuery),
function (a, b, c) {
	function l() {
		f = b[g](function () {
			d.each(function () {
				var b = a(this),
					c = b.width(),
					d = b.height(),
					e = a.data(this, i);
				(c !== e.w || d !== e.h) && b.trigger(h, [e.w = c, e.h = d])
			}), l()
		}, e[j])
	}
	var f, d = a([]),
		e = a.resize = a.extend(a.resize, {}),
		g = "setTimeout",
		h = "resize",
		i = h + "-special-event",
		j = "delay",
		k = "throttleWindow";
	e[j] = 500, e[k] = !0, a.event.special[h] = {
		setup: function () {
			if (!e[k] && this[g]) return !1;
			var b = a(this);
			d = d.add(b), a.data(this, i, {
				w: b.width(),
				h: b.height()
			}), 1 === d.length && l()
		},
		teardown: function () {
			if (!e[k] && this[g]) return !1;
			var b = a(this);
			d = d.not(b), b.removeData(i), d.length || clearTimeout(f)
		},
		add: function (b) {
			function f(b, e, f) {
				var g = a(this),
					h = a.data(this, i);
				h.w = e !== c ? e : g.width(), h.h = f !== c ? f : g.height(), d.apply(this, arguments)
			}
			if (!e[k] && this[g]) return !1;
			var d;
			return a.isFunction(b) ? (d = b, f) : (d = b.handler, b.handler = f, void 0)
		}
	}
}(jQuery, this);
