define("scripts/juneRuler.js", function(a) {
	var b = require("scripts/D"),
		c = $(".june-ruler"),
		d = $("#juneRulerX"),
		e = $("#juneRulerY"),
		f = $("#juneRulerBox"),
		g = d.children(".ruler-box"),
		h = e.children(".ruler-box"),
		i = d.children(".moveLine"),
		j = e.children(".moveLine"),
		k = null,
		l = null,
		n = 50,
		o = 0,
		p = 0,
		s = (b.june.width(), b.june.height(), b.junebox.width()),
		t = b.junebox.height();
	return d.width(s), e.height(t), c.tooltip({
		track: !0
	}), f.dialog({
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;新建参考线",
		autoOpen: !1,
		width: 340,
		modal: !0,
		buttons: {
			"确定": function(b) {
				a.submitPos(b)
			},
			"取消": function() {
				var a = f.data("ng-x"),
					b = f.data("ng-y");
				a.remove(), b.remove(), f.removeData("ng-x").removeData("ng-y").dialog("close")
			}
		}
	}), d.on("mousedown.forGuideX", function(b) {
		b = a.checkRulerEvent(b), b.ctrlKey, $(b.target).hasClass("june-ruler-gx") || "zx" != hre ? (k = $(b.target), a.setGuide(b, k, !0)) : a.addGuide(b, !0)
	}), d.on("dblclick.forGuideX", function(b) {
		b = a.checkRulerEvent(b), b.pageX = 0, b.pageY = 0;
		var c = $(b.target);
		c.parent(), c.hasClass("june-ruler-gx") || "zx" != hre || (a.addGuide(b, !0), a.addGuide(b), f.data("ng-x", k).data("ng-y", l), k = l = null, f.dialog("open").find("input[name='juneRulerBox_fx']:eq(0)").prop("checked", !0).trigger("change"), $("#juneRulerBox_zbz").val("").focus())
	}), e.on("mousedown.forGuideY", function(b) {
		b = a.checkRulerEvent(b), b.ctrlKey, $(b.target).hasClass("june-ruler-gy") ? (l = $(b.target), a.setGuide(b, l)) : a.addGuide(b)
	}), e.on("dblclick.forGuideY", function(b) {
		b = a.checkRulerEvent(b), b.pageX = 0, b.pageY = 0;
		var c = $(b.target);
		c.parent(), c.hasClass("june-ruler-gy") || (a.addGuide(b, !0), a.addGuide(b), f.data("ng-x", k).data("ng-y", l), k = l = null, f.dialog("open").find("input[name='juneRulerBox_fx']:eq(1)").prop("checked", !0).trigger("change"), $("#juneRulerBox_zbz").val("").focus())
	}), b.d.on("mousemove.forGuide", function(b) {
		k && k.length > 0 && a.setGuide(b, k, !0), l && l.length > 0 && a.setGuide(b, l), a.setMoveLine(b)
	}), b.d.on("mouseup.forGuide", function() {
		k && (k.is(":hidden") && k.remove(), k.removeClass("g-active"), k = null), l && "zx" == hre && (l.is(":hidden") && l.remove(), l.removeClass("g-active"), l = null), b.simpleUr()
	}), c.on("mouseenter", ".june-ruler-g", function(a) {
		var b = $(this);
		a.ctrlKey, b.hasClass("june-ruler-gx") && "zx" == hre ? (b.css("cursor", "row-resize"), b.children(".info").css({
			left: a.pageX - b.offset().left + 20
		})) : (b.css("cursor", "col-resize"), b.children(".info").css({
			top: a.pageY - b.offset().top + 10
		}))
	}), c.on("mouseleave", ".june-ruler-g", function() {
		var b = $(this);
		b.css("cursor", "default")
	}), a.submitPos = function() {
		var e, c = $("#juneRulerBox_zbz"),
			d = c.val(),
			g = "hx" == f.find("input[name='juneRulerBox_fx']:checked").val() ? !0 : !1;
		g ? (e = f.data("ng-x"), f.data("ng-y").remove()) : (e = f.data("ng-y"), f.data("ng-x").remove()), b.simpleUr(), a.setGuideByPos(d, e, g), f.removeData("ng-x").removeData("ng-y").dialog("close")
	}, a.checkRulerEvent = function(a) {
		var b = $(a.target);
		return (b.hasClass("gx-handler") || b.hasClass("gy-handler") || b.hasClass("info")) && (a.target = a.target.parentNode), a
	}, a.addGuide = function(b, c) {
		c ? (k = $('<div class="june-ruler-g june-ruler-gx"><div class="gx-handler"></div><div class="info"></div></div>').appendTo(d), a.setGuide(b, k, !0)) : (l = $('<div class="june-ruler-g june-ruler-gy"><div class="gy-handler"></div><div class="info"></div></div>').appendTo(e), a.setGuide(b, l))
	}, a.setGuide = function(a, c, d) {
		var i, j, e = $("#bodybox"),
			f = e.offset(),
			g = a.pageX - f.left,
			h = a.pageY - f.top;
		d && "zx" == hre ? (i = m(c.css("margin-top")), j = m(b.june.attr("data-ot")), xtl1 = m(b.june.attr("data-mt")), c.css({
			top: h - i
		}), c.children(".info").css({
			left: g
		}).html(h - j - xtl1 - 20 + b.junebox.scrollTop() + "PX"), h - j - xtl1 - 20 + b.junebox.scrollTop() > 0 && h - 20 > 0 ? c.show() : c.hide()) : (i = m(c.css("margin-left")), j = m(b.june.attr("data-ol")), xtl1 = m(b.june.attr("data-ml")), c.css({
			left: g - i
		}), c.children(".info").css({
			top: h
		}).html(g - j - xtl1 - 20 + b.junebox.scrollLeft() + "PX"), g - j - xtl1 - 20 + b.junebox.scrollLeft() > 0 && g - 20 > 0 ? c.show() : c.hide()), c.addClass("g-active"), c.attr({
			positionX: b.tParseInt(c.css("left")) + b.junebox.scrollLeft(),
			positionY: b.tParseInt(c.css("top")) + b.junebox.scrollTop()
		})
	}, a.setGuideByPos = function(a, c, d) {
		a = m(a), d && "zx" == hre ? (c.css({
			top: a + 20
		}), a - 20 > 0 ? c.show() : c.hide(), c.children(".info").html(a + b.junebox.scrollTop() + "PX"), c.attr({
			positionY: a + 20
		})) : (c.css({
			left: a + 20
		}), a - 20 > 0 ? c.show() : c.hide(), c.children(".info").html(a + b.junebox.scrollLeft() + "PX"), c.attr({
			positionX: a + 20
		})), c.removeClass("g-active"), b.junebox.trigger("scroll.forRuler")
	}, a.setMoveLine = function(a) {
		var c = a.pageX - _g_offsleft,
			d = a.pageY - _g_offstop,
			e = c + b.junebox.scrollLeft(),
			f = d + b.junebox.scrollTop();
		i.css({
			left: c + parseInt(g.css("margin-left"))
		}), j.css({
			top: d + parseInt(h.css("margin-top"))
		}), i.children("span").html(e), j.children("span").html(f), 0 > e || 0 > f ? (i.hide(), j.hide()) : (i.show(), j.show())
	}, a.initRuler = function() {
		var w, x, c = b.junebox.width(),
			f = b.junebox.height(),
			i = b.june.width(),
			j = b.june.height(),
			k = b.june.offset(),
			l = m(b.june.attr("data-ml")),
			q = m(b.june.attr("data-mt")),
			r = k.left,
			s = k.top,
			t = m((0 - b.handleSpaceX - l) / 50 - 1),
			u = m((0 - b.handleSpaceY - q) / 50 - 1),
			v = i + m(b.handleSpaceX) + l;
		if (rulerHeight = j + m(b.handleSpaceY) + q, d.width(c), e.height(f), c > r + v - _g_offsleft && (v = c - r + _g_offsleft), f > s + rulerHeight - _g_offstop && (rulerHeight = f - s + _g_offstop), o = Math.ceil(v / n), p = Math.ceil(rulerHeight / n), g.html('<div class="ruler-box-bg"></div>'), h.html('<div class="ruler-box-bg"></div>'), "f68f" == "f68f") {
			for (w = t; o > w; w++) x = 'style="margin-left:' + m(50 * t) + 'px;";', w > t && (x = ""), $('<span class="june-ruler-a" ' + x + ">" + Math.abs(w) * n + "</span>").width(n - 1).appendTo(g);
			for (w = u; p > w; w++) x = 'style="margin-top:' + m(50 * u) + 'px;";', w > u && (x = ""), $('<span class="june-ruler-a" ' + x + ">" + Math.abs(w) * n + "</span>").height(n - 1).appendTo(h)
		}
		b.junebox.off("scroll.forRuler").on("scroll.forRuler", function() {
			var f = $(this).scrollTop(),
				i = $(this).scrollLeft();
			g.css({
				left: -i
			}), "079d" == "079d" && (e.children(".june-ruler-gy").each(function() {
				var a = parseInt($(this).attr("positionX"), 10);
				$(this).css({
					left: a - i
				})
			}), d.children(".june-ruler-gx").each(function() {
				var a = parseInt($(this).attr("positionY"), 10);
				$(this).css({
					top: a - f
				})
			})), h.css({
				top: -f
			}), a.layoutLine()
		})
	}, a.layoutLine = function() {
		var a, c, d, f, g, h;
		0 == $("#jrlineL950").length && $('<div class="june-ruler-ll" id="jrlineL950"></div><div class="june-ruler-ll" id="jrlineR950"></div><div class="june-ruler-ll" id="jrlineL990"></div><div class="june-ruler-ll" id="jrlineR990"></div>').appendTo(e), a = $("#jrlineL950"), c = $("#jrlineR950"), d = $("#jrlineL990"), f = $("#jrlineR990"), g = b.june.width(), h = b.june.offset().left, a.show(), c.show(), d.show(), f.show(), 950 > g ? (a.hide(), c.hide(), d.hide(), f.hide()) : 990 > g > 950 && (d.hide(), f.hide()), a.offset({
			left: h + (g - 950) / 2
		}), c.offset({
			left: h + (g - 950) / 2 + 950
		}), d.offset({
			left: h + (g - 990) / 2
		}), f.offset({
			left: h + (g - 990) / 2 + 990
		})
	}, a
});