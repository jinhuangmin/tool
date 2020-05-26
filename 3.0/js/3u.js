function globalFunc(a) {
	return require("scripts/" + a)
}
define("scripts/dragPanel.js", function (a) {
	var b, c, d, f, g, h, i, e = '<div class="drag-panel-box" style="border:1px dotted transparent;"></div>',
		j = 165,
		k = 169;
	return a.Start = function (a) {
		var r, j, k, m, o, p, q, s;
		2 != a.button && (h = a.pageX, i = a.pageY, j = $(a.target), k = j.parent(), m = k.attr("data-status") || "1", k.attr("data-switch") || "opened", o = k.offset(), p = k.css("position"), q = k.css("z-index"), j.hasClass("drag-panel") && (b = k, r = b.attr("id"), b.addClass("drag-panel-active").css({
			position: "fixed", 
			zIndex: 170
		}), c = h - o.left, d = i - o.top, "1" == m && (("toolnav" == r || "applist" == r) && (s = parseInt(b.attr("data-sb")), _g_offsleft -= s), "applist" == r && b.height(550), b.removeClass("regular").addClass("fixed").attr("data-status", 2).attr("data-sb", 0)), g = m, f = $(e).css({
			position: p,
			zIndex: q,
			width: b.width() - 2,
			height: b.height() - 2
		}).insertAfter(b).offset({
			left: o.left,
			top: o.top
		}), b.offset({
			left: o.left,
			top: o.top
		}), "toolsidebar" == b.attr("id") && "2" == g && ($("#bodybox").css("margin-right", "0px"), $("#toolpanel").css("z-index", 170))))
	}, a.Ing = function (e) {
		var f = e.pageX,
			g = e.pageY;
		b && (b.offset({
			left: f - c,
			top: g - d
		}), a.checkRange1(e, b.attr("id")))
	}, a.End = function (e) {
		if (e.pageX, e.pageY, b) {
			a.checkRange2(e, b.attr("id")), checkHit(b, D.junebox, "fit_tl") || (b.attr("data-status", "1"), a.checkRange2(e, b.attr("id")));
			var i = parseInt($("#toolnav").attr("data-sb")) + parseInt($("#applist").attr("data-sb"));
			$("#bodybox").css("margin-left", i), D.layoutCanvas(), b.removeClass("drag-panel-active"), c = null, d = null, b = null, f.remove(), f = null, $("#toolpanel").css("z-index", 160)
		}
	}, a.checkRange1 = function (a, e) {
		var f = a.pageX,
			h = a.pageY;
		"toolnav" == e ? ("closed" != b.attr("data-switch") ? b.height(630) : b.height(50), 0 > f - c ? b.css("opacity", .5).attr("data-status", 1) : b.css("opacity", 1).attr("data-status", 2)) : "applist" == e || "toolsidebar" == e && (b.height(120), f - c > $(document).width() - 30 ? b.css("opacity", .5).attr("data-status", 1) : b.css("opacity", 1).attr("data-status", 2), "2" == g && $("#toolpanel").offset({
			left: f - c - 170,
			top: h - d
		}))
	}, a.checkRange2 = function (a, e) {
		var m, f = a.pageX,
			g = a.pageY,
			l = ($("#bodybox"), $("#applist"));
		_toolsidebar = $("#toolsidebar"), _toolnav = $("#_toolnav"), "1" == b.attr("data-status") ? (b.removeAttr("style").addClass("regular"), "toolnav" == e ? ("closed" == b.attr("data-switch") ? b.children(".navshrink").children(".june-notc-i").trigger("click") : _g_offsleft += 50, b.attr("data-sb", 50), l.removeClass("pa")) : "applist" == e ? (l.attr("data-sb", 140).removeAttr("style"), l.removeClass("fixed").addClass("regular"), l.removeClass("closed").attr("data-status", "1"), l.find(".june-notc-i:eq(1)").hide(), _g_offsleft += 140, l.find(".app").each(function () {
			var a = $(this);
			a.children("span").show(), a.children("font").show(), a.attr("title", "")
		})) : "toolsidebar" == e && ($("#toolpanel").removeAttr("style"), _toolsidebar.children(".sideele.active").length > 0 ? $("#bodybox").css("margin-right", "200px") : $("#bodybox").css("margin-right", "30px"), $("#tcpanel").removeClass("tcp-500"))) : ("toolnav" == e ? (l.addClass("pa"), l.css("z-index") == k && (l.css("z-index", j), _toolsidebar.css("z-index", 160)), _toolsidebar.css("z-index") == k && (_toolsidebar.css("z-index", j), l.css("z-index", 160))) : "applist" == e ? (b.find(".june-notc-i:eq(1)").show(), _toolnav.css("z-index") == k && (_toolnav.css("z-index", j), _toolsidebar.css("z-index", 160)), _toolsidebar.css("z-index") == k && (_toolsidebar.css("z-index", j), _toolnav.css("z-index", 160))) : "toolsidebar" == e && ($("#bodybox").css("margin-right", "0px"), _toolsidebar.children(".sideele.active:gt(0)").removeClass("active"), $("#toolpanel").css({
			"z-index": "160",
			bottom: "auto"
		}).offset({
			left: f - c - 170,
			top: g - d
		}).height("auto"), m = _toolsidebar.children(".sideele.active").attr("data-paVal"), $("#dqpanel").removeClass("opened").addClass("closed"), $("#wzpanel").removeClass("opened").addClass("closed"), $("#tcpanel").removeClass("opened").addClass("closed").addClass("tcp-500"), "rightDq" == m ? $("#dqpanel").removeClass("closed").addClass("opened") : "rightWz" == m ? $("#wzpanel").removeClass("closed").addClass("opened") : "rightTc" == m && $("#tcpanel").removeClass("closed").addClass("opened"), l.css("z-index") == k && (l.css("z-index", j), _toolnav.css("z-index", 160)), _toolnav.css("z-index") == k && (_toolnav.css("z-index", j), l.css("z-index", 160))), 0 > g - d && (g = d), g - d > $(document).height() && (g = d + $(document).height() - 30), b.css("z-index", k).offset({
			left: f - c,
			top: g - d
		}))
	}, a
}), define("scripts/handle.js", function (a) {
	D.startHandle = !1;
	var b, c, d;
	return a.Start = function (a) {
		D.drawHelper || (d = D.june.offset(), D.handleX = a.pageX, D.handleY = a.pageY, b = D.junebox.scrollLeft(), c = D.junebox.scrollTop(), D.startHandle = !0, _g_btnshow = !1, a.preventDefault(), a.stopPropagation(), $("#bodybox").addClass("grabbing"))
	}, a.Ing = function (a) {
		var d = a.pageX,
			e = a.pageY,
			f = D.handleX - d,
			g = D.handleY - e;
		D.startHandle && (D.junebox.scrollLeft(f + b), D.junebox.scrollTop(g + c), a.preventDefault(), a.stopPropagation())
	}, a.End = function (a) {
		_g_btnshow = !0, a && (a.pageX, a.pageY, D.startHandle && (D.startHandle = !1), $("#bodybox").removeClass("grabbing"))
	}, a
}), define("scripts/lib/click.js", function (a) {
	var c, d, g, b = require("scripts/D"),
		e = {
			"default": "#454545",
			old: "#d2d2d2",
			dark: "#454545",
			light: "#d2d2d2"
		};
	return require("scripts/singer"), c = require("scripts/lib/cast"), d = require("scripts/lib/vali"), window.localStorage ? (g = localStorage.getItem("tCookieJunezxSkin"), g ? (b.junebox.css("background-color", e[g]), $("#3f").attr("href", "css/" + g + "theme/3f.css"), $("#3g").attr("href", "css/" + g + "theme/3g.css"), $("#pfhover a").removeClass("active"), $("#pfhover").children("a[data-theme='" + g + "']").addClass("active")) : (b.junebox.css("background-color", e["old"]), $("#3f").attr("href", "css/oldtheme/3f.css"), $("#3g").attr("href", "css/oldtheme/3g.css"))) : (b.junebox.css("background-color", e["old"]), $("#3f").attr("href", "css/oldtheme/3f.css"), $("#3g").attr("href", "css/oldtheme/3g.css")), $.qnm(), $("#pfhover").on("click", "a", function (a) {
		var c = $(this).attr("data-theme"),
			d = c + "theme/";
		$.ajax({
			url: "css/" + d + "/3f.css",
			data: {
				random: (new Date).getTime()
			},
			success: function (a) {
				$.ajax({
					url: "css/" + d + "/3g.css",
					data: {
						random: (new Date).getTime()
					},
					success: function (d) {
						b.junebox.css("background-color", e[c]), window.localStorage && (localStorage.removeItem("tCookieJunezxSkin"), localStorage.setItem("tCookieJunezxSkin", c)), $("#t_3f").html(a), $("#t_3g").html(d), b.layoutCanvas()
					}
				})
			}
		}), $("#pfhover a").removeClass("active"), $(this).addClass("active"), a.preventDefault()
			}), $("#countCodeHeight").on("click", function(a) {  //2017-12-16 增加画布高度调整功能(105-114)
		clearTimeout(b.ajh_interval), b.ajh_interval = setTimeout(function() {
			var a = 0;
			b.june.find(".ui-resizable-s,.june-nonsp").each(function() {
				var e = $(this),
					f = e[0].getBoundingClientRect(),
					g = f.bottom + b.junebox.scrollTop() - _g_offstop;
				g > a && (a = g)
			}), 0 != a && $("#moduleHeight").val(a).trigger("change")
		}, 100), a.preventDefault(), a.stopPropagation()
	}), b.addAction("ux"), b.cArray(), a
	}), define("scripts/resizeCanvas.js", function(a) { //2017-12-16 增加画布高度调整功能(116-186) 
	var d, e, h, b = require("scripts/D"),
		c = require("scripts/snap"),
		f = 0,
		g = 0,
		i = {},
		j = $('<div id="rcBox" style="position:relative;background:rgba(222,222,222,.72);display:none;"><div class="handle-drag-canvas" style="cursor:ns-resize;width:60px;height:6px;left:50%;margin-left:-30px;"></div></div>').appendTo($("#junebox"));
	return a.update = function(a, c) {
		var d = a.pageY + b.junebox.scrollTop(),
			f = i.height,
			g = j.height();
		return b.resizeCanvasEle.hasClass("hdc-t") ? d > e ? (f -= g, !! c && b.june.children(".j-fnd").each(function() {
			var a = $(this),
				b = a.offset();
			a.offset({
				top: b.top - g
			})
		})) : (f += g, !! c && b.june.children(".j-fnd").each(function() {
			var a = $(this),
				b = a.offset();
			a.offset({
				top: b.top + g
			})
		})) : d > e ? f += g : f -= g, 0 > f && (f = 0), f
	}, a.Start = function(a) {
		d = a.pageX + b.junebox.scrollLeft(), e = a.pageY + b.junebox.scrollTop(), i.top = b.june.offset().top, i.left = b.june.offset().left, i.width = b.june.width(), i.height = b.june.height(), b.resizeCanvasEle.hasClass("hdc-t") ? (f = b.june.offset().top + b.junebox.scrollTop() - e, g = -8, h = 0, j.children(".handle-drag-canvas").css({
			top: "auto",
			bottom: h
		})) : (f = i.top + b.junebox.scrollTop() + i.height - e, g = 0, h = -8, j.children(".handle-drag-canvas").css({
			top: g,
			bottom: "auto"
		})), e += f, j.show().css("border-top", "1px dashed #19C2D1").offset({
			left: b.june.offset().left,
			top: e - b.junebox.scrollTop()
		}).width(b.june.width()).height(0), b.resizeCanvasEle.hide(), b.snapSwitch && b.createSnapElements(j, !0)
	}, a.Ing = function(a) {
		var k, o, p, q, r, s, t, u, v, w, x, y, z, A, G, H, f = ["s", "e"],
			l = d,
			m = e,
			n = b.june.offset().top,
			B = [],
			I = b.tParseInt(b.snapOutTolerance),
			J = b.tParseInt(b.snapInTolerance),
			K = b.tParseInt(b.snapOutSpace),
			L = b.tParseInt(b.snapInSpace);
		if (scl = b.snapSleft - b.junebox.scrollLeft(), sct = b.snapStop - b.junebox.scrollTop(), x2 = a.pageX + b.junebox.scrollLeft(), y2 = a.pageY + b.junebox.scrollTop(), q = y2, l > x2 && (k = x2, x2 = l, l = k, f[1] = "w"), m > y2 && (k = y2, y2 = m, m = k, f[0] = "n"), G = l + (x2 - l) / 2, H = m + (y2 - m) / 2, (Math.abs(l - x2) > 5 || Math.abs(m - y2) > 5) && (r = m - b.junebox.scrollTop(), p = y2 - m, b.resizeCanvasEle.hasClass("hdc-t") && q > e && p > i.height && (p = i.height), b.resizeCanvasEle.hasClass("hdc-b") && e > q && p > i.height && (p = i.height, r = i.top), j.css("border-top", "1px dashed rgba(0,0,0,0)").offset({
			left: i.left,
			top: r
		}).width(i.width).height(p), o = j.offset().top, "n" == f[0] ? j.children(".handle-drag-canvas").css({
			top: g,
			bottom: "auto"
		}) : j.children(".handle-drag-canvas").css({
			top: "auto",
			bottom: h
		}), n > o && (n = o)), b.snapSwitch) {
			for (A = b.snapElements.length - 1; A >= 0; A--) B[A] = [], s = b.snapElements[A].left + scl, t = b.snapElements[A].right + scl, u = b.snapElements[A].top + sct, v = b.snapElements[A].bottom + sct, x = s + Math.ceil(b.snapElements[A].width / 2), w = u + Math.ceil(b.snapElements[A].height / 2), z = s + b.snapElements[A].width / 2, y = u + b.snapElements[A].height / 2, "s" == f[0] && Math.abs(w - y2 + b.junebox.scrollTop()) <= I && (j.height(w - m + b.junebox.scrollTop()), B[A].push("bottomc")), "n" == f[0] && Math.abs(w - m + b.junebox.scrollTop()) <= I && (j.offset({
				top: w
			}).height(y2 - b.junebox.scrollTop() - w), B[A].push("topc")), "inner" !== b.snapElements[A].snapMode && (Math.abs(u - y2 + b.junebox.scrollTop()) <= I && "s" == f[0] && (j.height(u - m + b.junebox.scrollTop() - K), B[A].push("topx")), Math.abs(v - m + b.junebox.scrollTop()) <= I && "n" == f[0] && (j.offset({
				top: v + K
			}).height(y2 - m - v - K + m - b.junebox.scrollTop()), B[A].push("bottomx"))), "outer" !== b.snapElements[A].snapMode && (Math.abs(v - y2 + b.junebox.scrollTop()) <= J && "s" == f[0] && (j.height(v - m + b.junebox.scrollTop() - L), B[A].push("bottom")), Math.abs(u - m + b.junebox.scrollTop()) <= J && "n" == f[0] && (j.offset({
				top: u + L
			}).height(y2 - m - u - L + m - b.junebox.scrollTop()), B[A].push("top")));
			b.v.toExport($.proxy(function() {
				c.snapLine(B, b.snapElements, j)
			}, this))
		}
		b.junebox.parent().data("antiscroll").refresh()
	}, a.End = function(c) {
		var f = c.pageY + b.junebox.scrollTop();
		Math.abs(f - d) > 5 && $("#moduleHeight").val(a.update(c, !0)).trigger("change"), j.hide(), b.resizeCanvasEle.show(), b.snapElements = [], b.resizeCanvasEle = null, d = null, e = null
	}, a
}), define("scripts/lib/cast.js", function (a) {
	var b = '<div title="鼠绘热区，可在画布上绘制热区。" class="toolselecttype navele nav1 active color1" data-target="selected" data-curType="draw"><icon>ꑴ</icon><span>热区</span></div><div title="应用框选（按住Shift亦可框选应用）" class="toolselecttype navele nav2" data-target="selected" data-curType="select"><icon>ꑵ</icon><span>多选</span></div><div title="拖拽画布（按住空格键亦可拖拽画布）" class="toolselecttype navele nav3" data-target="selected" data-curType="handle"><icon>ꑶ</icon><span>拖拽</span></div><div title="划线工具，可在画布上划直线。" class="toolselecttype navele nav4" data-target="selected" data-curType="pencil"><icon>ꑷ</icon><span>划线</span></div><div title="拖拽应用开关，关闭时将不允许拖拽应用。" class="toolchecktype navele nav5 active" data-target="checked" data-curType="drag"><icon>ꑸ</icon><span>锁定</span></div><div title="吸附工具，拖动应用互相靠近时可自动吸附。" class="toolselecttype1 navele nav14" data-target="checked" data-curType="magnet"><icon>ꒇ</icon><span>吸附</span></div><div title="辅助线设置（按住CTRL可显示应用间的间距）" class="toolselecttype1 navele nav7" data-target="checked" data-curType="assist"><icon>ꒁ</icon><span>辅助线</span></div><div title="辅助网格设置，开启后将在画布上显示辅助网格。" class="toolselecttype1 navele nav6" data-target="checked" data-curType="grid"><icon>ꒀ</icon><span>网格</span></div><div title="模块整体设置，包括模块高宽及背景设置。" id="modulesetx" class="toolselecttype1 navele nav9 active" data-target="module-clicked" data-moduleType="set" data-curType="set"><icon>ꒃ</icon><span>设置</span></div><div title="添加自定义内容背景，可放DW做的切片或热区代码。" class="navele nav8" data-target="module-clicked" data-moduleType="addCustom"><icon>ꒂ</icon><span>自定义</span></div><div title="清空画布" class="navele nav10" data-target="module-clicked" data-moduleType="clear"><icon>ꒄ</icon><span>清空</span></div><div title="模块秀" class="navele nav11"><a class="june-preview color1" target="_blank" href="/#j_ties" style="display:block;"><icon>ꒅ</icon><span>模块秀</span></a></div><div title="联系我们" class="navele nav12" style="display:none;"><a class="june-preview" target="_blank" href="http://amos.alicdn.com/getcid.aw?v=2&uid=junezx&site=cntaobao&s=2&groupid=0&charset=utf-8"><icon>ꒆ</icon></a></div><div class="navele nav13"><i class="june-notc-i" data-paType="switchBtn" data-paVal="leftNav"></i></div><div title="联系我们" class="navele nav12"><a class="june-preview color2" target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=2&charset=utf-8"><icon>ꒆ</icon><span>客服</span></a></div>';

	return $("#toolnav"), $(b).appendTo($("#toolnav")), a
}), define("scripts/lib/vali.js", function (a) {
	var b = require("scripts/D");
	return b.d.on("change.vali submit.vali keyup.vali", "form", function (b) {
		var c = $(this),
			d = c.attr("novalidate"),
			e = c.attr("id");
		"novalidate" != d && (c.validate({
			submitHandler: function (b, c) {
				var d = a[e + "_submit"]($(b));
				d !== !1 && c()
			},
			errorPlacement: function (a, b) {
				if (!b.is(":hidden") && checkHit(b, c, "fit")) {
					var d = b.offset();
					a.appendTo(b.parent()).show().offset({
						top: d.top,
						left: d.left + b.width() + 30
					})
				} else a.hide()
			}
		}), "submit" == b.type && c.submit()), b.preventDefault(), b.stopPropagation()
	}), a.userdialog_form_submit = function () {
		var c = require("scripts/tLogin");var rinfo =  new Object();rinfo.qq=$("#rqq").val();
		"none" == $("#regtab").css("display") && "zx" == hre ? $.ajax({
			type: "POST",
			url: "login.php",
			data: {
				username: $("#username").val(),
				password: $("#password").val()
			},
			dataType: "json",
			success: function (a) {
				1 == a[0] ? (c.init(a), $("#userdialog").dialog("close")) : b.tMessage(a[2])
			}
		}) : $.ajax({
			type: "POST",
			url: "reg.php",
			data: {
				username: $("#rusername").val(),
				password: $("#rpassword").val(),
				info: rinfo,
				license: $("#rlicense").val()
			},
			success: function (a) {
				"true" == a ? (b.tMessage("注册成功，2秒后自动登录！", "login"),setTimeout(function(){history.go(0)},2000), $("#rusername,#rpassword,#rpassword2,#rlicense").val(""), $("#userdialog").dialog("close")) : b.tMessage(a)
			}
		})
	}, a.previewForm_submit = function (a) {
		a[0].submit()
	}, a.allwzset_tForm_submit = function () {}, a.tItemForm_submit = function () {}, a.oths_tForm_submit = function () {}, a.tPptItemForm_submit = function () {}, a.jn_form_forget_submit = function () {}, a.scbForm_submit = function () {}, a.imageform_submit = function () {}, a.codeForm_submit = function () {}, b.digitalLayout(), a.tForm_submit = function (a) {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, c = require("scripts/inputFilter"),
			d = require("scripts/appManage");
		if (c.filterTextarea(a), "jib" == a.attr("form-data") && "#tabs-95" == $("#tabs").children("ul").children("li.ui-tabs-active").children("a").attr("href") && itemQuickSet("leave", "#tabs-95"), e = require("scripts/action"), f = a.attr("form-data"), g = a.formToObject(), h = $(b.appParentCls + "[appID='" + g.appID + "']"), i = JSON.parse(h.attr("data-config")), j = h.width(), k = h.height(), l = b.tParseInt(h.css("top")), m = b.tParseInt(h.css("left")), g.appLabel && "zx" == hre && (n = require("scripts/layer"), h.attr("data-appLabel", g.appLabel), n.updateAppLabel(h)), "mdlink" == g.linkMode && "" == anchorSelect) return b.tMessage("选择连接类型为锚点连接时，需要先添加一个锚点！"), !1;
		if ("jmdb" == f && !new RegExp(/^[a-zA-Z][a-zA-Z0-9\-_]*$/).test(g.anchorName)) return b.tMessage("请输入一个正确的锚点名称！只能用英文字母加数字，且不能以数字开头"), !1;
		if ("jsfb" == f && (!g.catsArray || 0 == g.catsArray.length)) return b.tMessage("请选择分类，至少选择一个！"), !1;
		if ("jscb" == f && "1" == g.scType) {
			if ("" == g.href) return b.tMessage("请输入一个正确的宝贝详情页地址！"), !1;
			if (o = g.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), !o || o.length < 1) return b.tMessage("请输入一个正确的宝贝详情页地址！"), !1;
			if (p = o[0].replace(/\?id\=/g, ""), "" == p) return b.tMessage("请输入一个正确的宝贝详情页地址！"), void 0
		}
		if (h.css({
				top: b.tParseInt(g.top),
				left: b.tParseInt(g.left),
				width: b.tParseInt(g.width),
				height: b.tParseInt(g.height)
			}), g.childConfig && g.childConfig.length > 0)
			for (q = 0; q < g.childConfig.length; q++) {
				if (r = g.childConfig[q], s = h.children(b.appChildCls + "[attachID='" + r.attachID + "']"), t = s.width(), u = s.height(), v = b.tParseInt(s.css("top")), w = b.tParseInt(s.css("left")), s.css({
						width: b.tParseInt(r.width),
						height: b.tParseInt(r.height),
						top: b.tParseInt(r.top),
						left: b.tParseInt(r.left)
					}), r.width || r.height || r.top || r.left) {
					if (t != b.tParseInt(r.width) || u != b.tParseInt(r.height)) {
						if (attachID = r.attachID, g.childConfig)
							for (q = 0; q < g.childConfig.length; q++) g.childConfig[q].attachID == attachID && (g.childConfig[q].autoSize && (g.childConfig[q].autoSize = "no"), g.childConfig[q].autoSize1 && (g.childConfig[q].autoSize1 = "no"));
						h.attr("data-config", JSON.stringify(g)), e.create("resize", h, s)
					}(v != b.tParseInt(r.top) || w != b.tParseInt(r.left)) && e.create("drag", h, s), delete r.width, delete r.height, delete r.top, delete r.left, "jspb" == f && delete r.appName
				}
				"jdhb" != f && d.moveToFirst(g.appID, r.attachID)
			} else i.childConfig && (g.childConfig = []);
		(g.width || g.height || g.top || g.left) && ((j != Number(g.width) || k != Number(g.height)) && (g.autoSize = "no", h.attr("data-config", JSON.stringify(g)), e.create("resize", h)), (l != Number(g.top) || m != Number(g.left)) && e.create("drag", h)), delete i.width, delete i.height, delete i.top, delete i.left, delete g.width, delete g.height, delete g.top, delete g.left, x = b.equals(i, g), x || (b.appConfig[f][1].tSubmit(g, h), y = require("scripts/quickSet"), y.execQsSet(!0), e.create("edit", h)), h.attr("data-lOpacity") && h.css("opacity", h.attr("data-lOpacity") / 100), h.find(".j-fnd[data-lOpacity]").each(function () {
			var a = $(this);
			a.css("opacity", a.attr("data-lOpacity") / 100)
		}), b.june.find("embed").each(function () {
			$(this).parent().parent().is(b.june) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
		})
	}, a
}), define("scripts/lib/coda.js", function (a) {
	return a.createRequest = function () {
		var a = null;
		try {
			a = new ActiveXObject("microsoft.xmlhttp")
		} catch (b) {
			try {
				a = new XMLHttpRequest
			} catch (c) {
				window.alert("您的浏览器不支持ajax，请更换！")
			}
		}
		return a
	}, a.junePost = function (a) {
		$.ajax(a)
	}, a.init = function (b) {
		var c = D.getCode("dat"),
			d = D.getCode("datsh"),
			e = (new Date).getTime();
		(!c && !d || e - d > 3643028 || b) && !D.setRight && (D.setRight = !0, a.junePost({
			type: "post",
			url: D.bf5[48] + D.a1f[33] + D.fel[15] + D.a1f[53] + "." + D.fel[57] + D.bf5[34] + D.a1f[4],
			success: function (a) {
				D.tUserCaahNum++, a && "" != a && a != c ? (D.getCode("dat", a), D.getCode("dats", b ? 0 : c || 0), D.getCode("datsh", (new Date).getTime())) : (D.getCode("dat", "0"), D.getCode("dats", "0")), 2 == D.tUserCaahNum && D.getCode("cip", D.wyz3)
			},
			error: function (c, d) {
				D.tUserCaahNum++, "timeout" == d && (D.closeSwitchx = !1, a.init(b)), 2 == D.tUserCaahNum && D.getCode("cip", D.wyz3)
			}
		})), b && D.setRight && D.getCode("dats", 0)
	}, a.create = function (a) {
		var d, e, f, g;
		if ("0" == a) return a;
		try {
			return d = a.lastIndexOf("A"), e = m(a.substr(d + 1)), f = "", f += a.substr(7, 6) + a.substr(4, 3), f += a.substr(13 + e + 1, 4) + a.substr(0, 4), f += a.substr(13, e + 1), f = uKuy(f), b = f.lastIndexOf("D"), c = m(f.substr(b + 1)), g = m(f.substr(6 + c, 2) + f.substr(11 + c, 4) + f.substr(3, c))
		} catch (h) {
			return a
		}
	}, a.edit = function (a) {
		var d, e, f, g;
		if ("0" == a) return a;
		try {
			return d = a.lastIndexOf("A"), e = m(a.substr(d + 1)), f = "", f += a.substr(7, 6), f += a.substr(4, 3), f += a.substr(13 + e + 1, 4), f += a.substr(0, 4), f += a.substr(13, e + 1), f = uKuy(f), b = f.lastIndexOf("D"), c = m(f.substr(b + 1)), g = m(f.substr(8 + c, 3)) + "." + m(f.substr(0, 3)) + "." + m(f.substr(15 + c, 3)) + "." + m(f.substr(3 + c, 3))
		} catch (h) {
			return a
		}
	}, a.callback = function (b, c, d, e, f) {
		var h, i, j, k, g = a.edit(b);
		g && D.wyz3 && (h = g.split("."), j = D.wyz3.split("."), h.length > 3 && j.length > 3 && (i = h[0] + "|" + h[1] + "|" + h[2], k = j[0] + "|" + j[1] + "|" + j[2], i == k && (c - 3225 > d ? "function" == typeof e && e() : "function" == typeof f && f())))
	}, a.toExport = function (b, c) {
		var d = D.getCode("dat"),
			e = a.create(d),
			f = a.create(D.getCode("dats"));
		D.getCode(D.a1f[58] + D.bf5[47] + D.a1f[4]) != D.wyz3 && (D.wyz3 = D.getCode(D.a1f[58] + D.bf5[47] + D.a1f[4])), a.callback(d, e, f, b, c)
	}, a.init(D.tUserCaah), a
}), define("scripts/lib/itemInput.js", function (a) {
	var b = '<textarea id="juneItemInput" class="jqii-item-input" style="position: absolute; z-index: 200; margin: 0px; overflow: hidden; resize: none; font-size: 12px; font-family: 宋体; display: none; width: 24px; height: 14px; line-height: 14px;text-indent: 0px; letter-spacing: 0px; outline: none; padding: 0px;"></textarea>';
	return _input = $(b).appendTo(D.b).hide().on("change.jqii", function (b) {
		var c = $(this),
			d = c.val(),
			e = c.attr("data-n"),
			f = c.attr("data-i"),
			h = (c.attr("data-sw"), c.data("cil")),
			i = c.data("cilw");
		e && (a.setInput(d, h, i, e, f), _input.hide()), b.preventDefault(), b.stopPropagation()
	}).on("blur.jqii", function () {
		_input.hide()
	}), a.initInput = function (a) {
		var b, c, d, e, f, g, h, i, j, k = !0;
		if (a && a.length > 0 && (g = a.attr("data-attachType"), /jibtitle|jibsubtitle|jibprice|jibprefix|jibdiscountprice|jibdiscountprefix|jibsale|jibsaleprefix|jibexpandtext|jibexpandtext1|jibexpandtext2|jibexpandtext3|jibexpandtext4/.test(g))) {
			switch (b = a.parent(), c = a.children("span").length > 0 ? a.children("span").offset() : a.offset(), owidth = b.children("[data-attachType='" + g + "']:eq(0)").width(), a.css("width", "auto"), d = a.width(), a.width(owidth), e = a.height(), f = JSON.parse(b.attr("data-config") || D.appConfig["jib"][2]), h = b.children("[data-attachType='" + g + "']").index(a), g) {
				case "jibtitle":
					j = f.titleInfo.split(","), i = j[h], _input.attr("data-n", "titleInfo"), _input.attr("data-i", h);
					break;
				case "jibsubtitle":
					j = f.subTitleInfo.split(","), i = j[h], _input.attr("data-n", "subTitleInfo"), _input.attr("data-i", h);
					break;
				case "jibprice":
					j = f.priceInfo.split(","), i = j[h], _input.attr("data-n", "priceInfo"), _input.attr("data-i", h);
					break;
				case "jibdiscountprice":
					j = f._priceInfo.split(","), i = j[h], _input.attr("data-n", "_priceInfo"), _input.attr("data-i", h);
					break;
				case "jibsale":
					j = f.saleInfo.split(","), i = j[h], _input.attr("data-n", "saleInfo"), _input.attr("data-i", h);
					break;
				case "jibexpandtext":
					j = f.expandText.split(","), i = j[h], _input.attr("data-n", "expandText"), _input.attr("data-i", h);
					break;
				case "jibexpandtext1":
					j = f.expandText1.split(","), i = j[h], _input.attr("data-n", "expandText1"), _input.attr("data-i", h);
					break;
				case "jibexpandtext2":
					j = f.expandText2.split(","), i = j[h], _input.attr("data-n", "expandText2"), _input.attr("data-i", h);
					break;
				case "jibexpandtext3":
					j = f.expandText3.split(","), i = j[h], _input.attr("data-n", "expandText3"), _input.attr("data-i", h);
					break;
				case "jibexpandtext4":
					j = f.expandText4.split(","), i = j[h], _input.attr("data-n", "expandText4"), _input.attr("data-i", h);
					break;
				case "jibprefix":
					i = f.prefixInfo, _input.attr("data-n", "prefixInfo"), _input.attr("data-i", "no");
					break;
				case "jibdiscountprefix":
					i = f._prefixInfo, _input.attr("data-n", "_prefixInfo"), _input.attr("data-i", "no");
					break;
				case "jibsaleprefix":
					i = f.salePrefixInfo, _input.attr("data-n", "salePrefixInfo"), _input.attr("data-i", "no");
					break;
				default:
					k = !1
			}
			k && (0 == h ? _input.attr("data-sw", "yes") : _input.attr("data-sw", "no"), _input.data("cil", b).data("cilw", a).val(i), _input.width(d).height(e).show().offset({
				left: c.left,
				top: c.top
			}).trigger("focus").select())
		}
	}, a.setInput = function (a, b, c, d, e) {
		var f, g, i, j = c.attr("data-attachType");
		"no" != e ? (f = JSON.parse(b.attr("data-config") || D.appConfig["jib"][2]), g = f[d].split(","), g[e] = a, f[d] = g.join(","), b.updateConfig(f, function () {
			c.children("span").children("span").length > 0 ? c.children("span").children("span").html(a) : c.children("span").html(a)
		}), "0" == e && (c.css("width", "auto"), width = c.width(), c.width(width))) : (i = b.children("[data-attachType='" + j + "']"), b.editConfig(d, a, function () {
			i.children("span").children("span").length > 0 ? i.children("span").children("span").html(a) : i.children("span").html(a)
		}), i.css("width", "auto"), width = i.width(), i.width(width))
	}, a
}), define("scripts/topManage.js", function (a) {
	var b = require("scripts/D"),
		c = require("scripts/readHeader"),
		d = require("scripts/allwzset"),
		e = $("#toolHeader");
	return a.countFixedPos = function (c) {
		var e = (require("scripts/tAjax"), "fixed" == c.css("background-attachment")),
			f = $("input[name='p_align']").val() || "50% 0%",
			g = f.split(" "),
			h = 0,
			i = 0,
			j = _g_offsleft - b.junebox.scrollLeft(),
			k = _g_offstop - b.junebox.scrollTop(),
			l = c.css("background-image").replace(/^url|[\(\"\)]*/g, "");
		c.css("background-position", f), c.css("background-attachment", "scroll"), j = b.junebox.offset().left, k = b.junebox.offset().top, "none" == l && (l = ""), b.countFixedPosSrc || (b.countFixedPosSrc = l), b.countFixedPosSrc != l && (b.countFixedPosSrc = l, b.countFixedPosWH = null), "" != l && e ? b.countFixedPosWH ? a.countFixedPosCallback(b.countFixedPosWH, c, j, k, g, h, i) : getForGis({
			img: l
		}, function (d) {
			b.countFixedPosWH = d, a.countFixedPosCallback(b.countFixedPosWH, c, j, k, g, h, i)
		}) : c.css("background-position", f)
	}, a.countFixedPosCallback = function (a, b, c, d, e, f, g) {
		var h = a[0],
			i = a[1];
		f = e[0].indexOf("%") >= 0 ? e[0].replace(/%/g, "") / 100 * (b.width() - h) : parseInt(e[0].replace(/px/g, "")), c += f, g = e[1].indexOf("%") >= 0 ? e[1].replace(/%/g, "") / 100 * ($(document).height() - i) : parseInt(e[1].replace(/px/g, "")), d += g, b.attr("data-pos", e.join(" ")).css("background-attachment", "fixed").css("background-position", c + "px " + d + "px")
	}, a.inputSet = function () {
		var d = $(this),
			e = d.val(),
			f = d.attr("data-n") || d.attr("name") || "",
			g = b.gridSwitch;
		if ("" != b.june.attr("data-bgimg") && (g = !1), "p_width" == f) {
			if (e > 99999 && (e = 99999), 0 > e && (e = 0), e == b.june.width()) return;
			"" == e && (e = 1920), b.june.width(e), b.layoutCanvas(), b.curSl && m(e) + b.handleSpaceX > b.curSl && (b.junebox.scrollLeft(b.curSl), b.junebox.scrollTop(b.curSt)), 0 === b.curSl && b.centerLayout("tl")
		} else if ("p_height" == f) {
			if (e > 99999 && (e = 99999), 0 > e && (e = 0), e == b.june.height()) return;
			"" == e ? b.june.height(2561) : b.june.height(e), b.layoutCanvas(), b.curSt && m(e) + b.handleSpaceY > b.curSt && (b.junebox.scrollTop(b.curSt), b.junebox.scrollLeft(b.curSl)), 0 === b.curSt && b.centerLayout("tl")
		} else "p_bgimg" == f ? checkUrl(e) ? (b.june.attr("data-bgimg", e), !g && b.june.css("background-image", "url(" + e + ")"), !g && b.june.css("background-position", b.june.attr("data-position")), !g && b.june.css("background-attachment", b.june.attr("data-attachment")), !g && b.june.css("background-repeat", b.june.attr("data-repeat")), !g && a.countFixedPos(b.june)) : (b.june.attr("data-bgimg", ""), b.june.css("background-image", "none")) : "p_repeat" == f ? ("" == e && (e = "no-repeat"), b.june.attr("data-repeat", e), !g && b.june.css("background-repeat", e)) : "p_fixed" == f ? ("" == e && (e = "scroll"), b.june.attr("data-attachment", e), !g && b.june.css("background-attachment", e), !g && a.countFixedPos(b.june)) : "p_align" == f ? (b.june.attr("data-position", e), !g && b.june.css("background-position", e), !g && a.countFixedPos(b.june)) : "p_appover" == f ? "visible" == e ? (b.june.css("overflow", "visible"), b.appOverSwitch = !0) : (b.june.css("overflow", "hidden"), b.appOverSwitch = !1) : f.indexOf("mag_") >= 0 ? a.mag_inputSet(f, e) : f.indexOf("grid_") >= 0 ? a.grid_inputSet(f, e) : f.indexOf("pencil_") >= 0 ? a.pencil_inputSet(f, e) : f.indexOf("assist_") >= 0 ? a.assist_inputSet(f, e) : f.indexOf("jdb_") >= 0 ? a.jdb_inputSet(f, e) : f.indexOf("jcb_") >= 0 ? a.jcb_inputSet(f, e) : f.indexOf("jtsb_") >= 0 ? a.jtsb_inputSet(f, e) : f.indexOf("jib_") >= 0 && a.jib_inputSet(f, e)
	}, a.mag_inputSet = function (a, c) {
		var d;
		"mag_switch" == a ? (b.snapSwitch = "opened" == c, b.snapSwitch ? (d = "yes", b.tempSnapSwitch = !0) : (d = "no", b.tempSnapSwitch = !1), window.localStorage && localStorage.setItem("tCookieJunezxUps_5", d)) : "mag_tospace" == a ? (b.snapOutTolerance = c, window.localStorage && localStorage.setItem("tCookieJunezxUps_6", c)) : "mag_space" == a ? (b.snapOutSpace = c, window.localStorage && localStorage.setItem("tCookieJunezxUps_7", c)) : "mag_line" == a ? (b.snapLineStatus = c, window.localStorage && localStorage.setItem("tCookieJunezxUps_8", c)) : "mag_range" == a && (b.snapEleRange = c, window.localStorage && localStorage.setItem("tCookieJunezxUps_9", c))
	}, a.grid_inputSet = function (a, c) {
		var d, g, e = b.gridSwitch,
			f = RGBToHex(b.june.css("background-color"), "");
		"" != b.june.attr("data-bgimg") && (e = !1), "grid_switch" == a ? (b.gridSwitch = "opened" == c, g = b.gridSwitch ? "yes" : "no", window.localStorage && localStorage.setItem("tCookieJunezxUps_3", g), b.updateGrid()) : "grid_pane" == a ? (b.june.attr("data-gridpane", c), d = b.gridImg[c], window.localStorage && localStorage.setItem("tCookieJunezxUps_4", c), e && b.june.css("background", "url(" + d + ") " + f + " repeat 0 0")) : "grid_opacity" == a && (b.gridOpacity = c)
	}, a.pencil_inputSet = function (a, c) {
		var d = b.jSelectsedDom.filter("[data-dbltype='jllb']"),
			e = b.tParseInt(c);
		d.each(function () {
			var d = $(this);
			"pencil_lineStyle" == a ? ("we" == d.attr("data-d") ? d.css("border-top-style", c).updateConfig({
				lineStyle: c
			}) : d.css("border-left-style", c).updateConfig({
				lineStyle: c
			}), b.appConfig.jllb[2]["lineStyle"] = c) : "pencil_lineWidth" == a ? (d.css("border-width", c).updateConfig({
				lineWidth: c
			}), b.appConfig.jllb[2]["lineWidth"] = c) : "pencil_lineOpacity" == a ? (d.css("opacity", c / 100).updateConfig({
				lineOpacity: c
			}), b.appConfig.jllb[2]["lineOpacity"] = c) : "pencil_length" == a ? ("we" == d.attr("data-d") ? (d.width(e).attr("data-lineLength", e), d.children(".pencilLength").width(e)) : (d.height(e).attr("data-lineLength", e), d.children(".pencilLength").height(e).css("line-height", e + "px"), d.children(".pencilLength").children(".lline").height(e / 2 - 12 > 0 ? e / 2 - 12 : 0), d.children(".pencilLength").children(".rline").height(e / 2 - 12 > 0 ? e / 2 - 12 : 0)), d.children(".pencilLength").children(".nline").html(e)) : "pencil_left" == a ? d.css("left", e) : "pencil_top" == a && d.css("top", e)
		})
	}, a.assist_inputSet = function (a, c) {
		var d;
		"assist_switch" == a ? (b.assistSwitch = "opened" == c, d = b.assistSwitch ? "yes" : "no", window.localStorage && localStorage.setItem("tCookieJunezxUps_0", d)) : "assist_switch1" == a && (b.assistSwitch1 = "opened" == c, d = b.assistSwitch1 ? "yes" : "no", window.localStorage && localStorage.setItem("tCookieJunezxUps_1", d))
	}, a.jdb_inputSet = function (a, c) {
		var d = b.jSelectsedDom.filter("[data-dbltype='jdb']");
		require("scripts/action"), "jdb_pSrc" == a ? checkUrl(c) ? (d.children(".j-tazb").css("background-image", "url(" + c + ")"), d.updateConfig({
			pSrc: c
		}).countImgSize()) : (d.children(".j-tazb").css("background-image", "none"), d.updateConfig({
			pSrc: ""
		})) : "jdb_mongoliaMode" == a ? "j_blank" == c ? d.updateConfig({
			mongoliaControl: ""
		}) : d.updateConfig({
			mongoliaControl: "mongoliaShow",
			mongoliaMode: c
		}) : "jdb_borderControl1" == a ? d.updateConfig({
			borderControl1: c
		}, function (a, b) {
			var c = a.children(".j-tazb");
			checkSubmitBorder(c, b)
		}) : "jdb_borderWidth1" == a ? d.updateConfig({
			borderWidth1: c
		}, function (a, b) {
			var c = a.children(".j-tazb");
			checkSubmitBorder(c, b)
		}) : "jdb_borderRadius1" == a && d.updateConfig({
			borderRadius1: c
		}, function (a, b) {
			var c = a.children(".j-tazb");
			checkSubmitBorder(c, b)
		})
	}, a.jcb_inputSet = function (a, c) {
		var e = b.jSelectsedDom.filter("[data-dbltype='jcb']");
		$("#tm_jcb_set").children(".junesetpanel"), "jcb_characterContent" == a ? e.updateConfig({
			characterContent: c
		}, function (a, b) {
			"yes" == b.characterLineMulti && (b.characterLineContent = c), d.allSubmit(b, a)
		}) : "jcb_href" == a ? e.updateConfig({
			href: c
		}) : "jcb_hrefMode" == a ? e.updateConfig({
			hrefMode: c
		}) : "jcb_borderControl1" == a ? e.updateConfig({
			borderControl1: c
		}, function (a, b) {
			var c = a.children(".j-tazb");
			checkSubmitBorder(c, b)
		}) : "jcb_borderWidth1" == a ? e.updateConfig({
			borderWidth1: c
		}, function (a, b) {
			var c = a.children(".j-tazb");
			checkSubmitBorder(c, b)
		}) : "jcb_borderRadius1" == a && e.updateConfig({
			borderRadius1: c
		}, function (a, b) {
			var c = a.children(".j-tazb");
			checkSubmitBorder(c, b)
		})
	}, a.jtsb_inputSet = function () {
		b.jSelectsedDom.filter("[data-dbltype='jtsb']")
	}, a.jib_inputSet = function () {
		b.jSelectsedDom.filter("[data-dbltype='jib']")
	}, a.buttonSet = function () {
		var c = $(this);
		c.hasClass("jcb_multiwzset") && a.jcb_buttonSet()
	}, a.jcb_buttonSet = function () {
		var a = b.jSelectsedDom.filter("[data-dbltype='jcb']");
		1 == a.length && a.trigger("dblclick")
	}, a.showTopManage = function (a, d) {
		var f, g;
		("jllb" != a && d || "draw" == a) && (a = b.checkType, d = !1), a && (d ? (g = b.jSelectsedDom.filter("[data-dbltype='" + a + "']"), "jdb" == a ? (f = $("#tm_jdb_set").removeClass("hide"), c.jdb_read(f)) : "jcb" == a ? (f = $("#tm_jcb_set").removeClass("hide"), c.jcb_read(f)) : "jllb" == a ? (e.children("div").addClass("hide"), f = $("#tm_pencil_set").removeClass("hide"), c.pencil_read(f)) : "jtsb" == a ? (f = $("#tm_jtsb_set").removeClass("hide"), c.jtsb_read(f)) : "jib" == a && (f = $("#tm_jib_set").removeClass("hide"), c.jib_read(f))) : "set" == a || "select" == a || "handle" == a ? (e.children("div").addClass("hide"), f = $("#tm_page_set").removeClass("hide"), c.page_read(f)) : "pencil" == a ? (e.children("div").addClass("hide"), f = $("#tm_pencil_set").removeClass("hide")) : "assist" == a ? (e.children("div").addClass("hide"), f = $("#tm_assist_set").removeClass("hide"), c.assist_read(f)) : "magnet" == a ? (e.children("div").addClass("hide"), f = $("#tm_magnet_set").removeClass("hide"), c.magnet_read(f)) : "grid" == a && (e.children("div").addClass("hide"), f = $("#tm_grid_set").removeClass("hide"), c.grid_read(f)))
	}, $.junelp(), e.on("change.topms keyup.topms", "input", function (b) {
		a.inputSet.call(this, b)
	}), e.on("focus.topms", "input[name='p_height'],input[name='p_width']", function () {
		b.curSt = b.junebox.scrollTop(), b.curSl = b.junebox.scrollLeft()
	}), e.on("blur.topms", "input[name='p_height'],input[name='p_width']", function () {
		b.curSt = null, b.curSl = null
	}), e.on("click.topms", "button", function (b) {
		a.buttonSet.call(this, b)
	}), a
}), define("scripts/readHeader.js", function (a) {
	var b = require("scripts/D");
	return a.page_read = function (a) {
		if (a && 0 != a.length) {
			var c = a.children(".junesetpanel"),
				d = b.june,
				e = "hidden",
				f = d.attr("data-bgimg"),
				g = d.css("background-color"),
				h = d.attr("data-repeat"),
				i = d.attr("data-attachment"),
				j = d.attr("data-position");
			c.children("[name='p_width']").val(d.width()), "2561" != d.height() ? c.children("[name='p_height']").val(d.height()) : c.children("[name='p_height']").val(""), b.appOverSwitch && (e = "visible"), $("#ppbDiv").children("[name='p_bgimg']").val(f), c.children(".pagecolorpanel").children("[name='p_bgcolor']").val(RGBToHex(g, "")), c.children(".pagecolorpanel:eq(0)").find(".sp-preview-inner").css("background-color", RGBToHex(g, "")), $.junelp.setCkb($("#ppbDiv").children(".ppbPP").children(".junelp[data-name='p_repeat']"), "no-repeat" != h), $.junelp.setCkb($("#ppbDiv").children(".ppbPP").children(".junelp[data-name='p_fixed']"), "fixed" == i), $.junelp.setGUI(c.children(".junelp[data-name='p_align']").children("input[name='p_align']"), j, !0), $.junelp.setCkb(c.children(".junelp[data-name='p_appover']"), "visible" == e)
		}
	}, a.pencil_read = function (a) {
		if (a && 0 != a.length) {
			var c = a.children(".junesetpanel"),
				d = b.jSelectsedDom.filter("[data-dbltype='jllb']"),
				e = JSON.parse(d.attr("data-config") || "{}");
			$.junelp.setRdo(c.children(".junelp[data-name='pencil_lineStyle']"), e.lineStyle), c.children("[name='pencil_lineWidth']").val(e.lineWidth), c.children(".pagecolorpanel").children("[name='pencil_lineColor']").val(RGBToHex(e.lineColor, "")), c.children(".pagecolorpanel").find(".sp-preview-inner").css("background-color", RGBToHex(e.lineColor, "")), c.children("[name='pencil_lineOpacity']").val(e.lineOpacity), c.children("[name='pencil_length']").val(d.attr("data-lineLength")), c.children("[name='pencil_left']").val(b.tParseInt(d.css("left"))), c.children("[name='pencil_top']").val(b.tParseInt(d.css("top")))
		}
	}, a.assist_read = function (a) {
		if (a && 0 != a.length) {
			var d, e, f, g, h, i, c = a.children(".junesetpanel");
			d = c.children(".junelp[data-name='assist_switch']"), e = c.children(".junelp[data-name='assist_switch1']"), b.assistSwitch ? (f = "opened", h = "开启") : (f = "closed", h = "关闭"), b.assistSwitch1 ? (g = "opened", i = "开启") : (g = "closed", i = "关闭"), d.children("val").html(h), e.children("val").html(i), $.junelp.setSelectNor(d.children("input[name='assist_switch']"), f, !0), $.junelp.setSelectNor(e.children("input[name='assist_switch1']"), g, !0), c.children(".pagecolorpanel").children("[name='assist_color']").val(RGBToHex(b.assistColor, "")), c.children(".pagecolorpanel").find(".sp-preview-inner").css("background-color", RGBToHex(b.assistColor, ""))
		}
	}, a.magnet_read = function (a) {
		if (a && 0 != a.length) {
			var d, e, f, g, c = a.children(".junesetpanel");
			d = c.children(".junelp[data-name='mag_switch']"), null != b.tempSnapSwitch && (g = b.snapSwitch, b.snapSwitch = b.tempSnapSwitch), b.snapSwitch ? (e = "opened", f = "开启") : (e = "closed", f = "关闭"), d.children("val").html(f), $.junelp.setSelectNor(d.children("input[name='mag_switch']"), e, !0), c.children("[name='mag_tospace']").val(b.snapOutTolerance), c.children("[name='mag_space']").val(b.snapOutSpace), $.junelp.setSelectNor(c.children(".junelp[data-name='mag_line']").children("input[name='mag_line']"), b.snapLineStatus, !0), $.junelp.setSelectNor(c.children(".junelp[data-name='mag_range']").children("input[name='mag_range']"), b.snapEleRange, !0), null != b.tempSnapSwitch && (b.snapSwitch = g)
		}
	}, a.grid_read = function (a) {
		if (a && 0 != a.length) {
			var d, e, f, c = a.children(".junesetpanel"),
				g = b.june.attr("data-gridPane") || "10px";
			d = c.children(".junelp[data-name='grid_switch']"), b.gridSwitch ? (e = "opened", f = "开启") : (e = "closed", f = "关闭"), d.children("val").html(f), $.junelp.setSelectNor(d.children("input[name='grid_switch']"), e, !0), $.junelp.setSelectNor(c.children(".junelp[data-name='grid_pane']").children("input[name='grid_pane']"), g, !0), c.children("[name='gird_opacity']").val(b.gridOpacity)
		}
	}, a.jdb_read = function (a) {
		if (a && 0 != a.length) {
			var c = a.children(".junesetpanel"),
				d = b.jSelectsedDom.filter("[data-dbltype='jdb']"),
				e = JSON.parse(d.attr("data-config") || "{}"),
				f = "j_blank";
			c.children("[name='jdb_pSrc']").val(e.pSrc), $.junelp.setCkb(c.children(".junelp[data-name='jdb_autoSize']"), "yes" == e.autoSize), c.children(".pagecolorpanel:eq(0)").children("[name='jdb_bgColor']").val(RGBToHex(e.bgColor, "")), c.children(".pagecolorpanel:eq(0)").find(".sp-preview-inner").css("background-color", RGBToHex(e.bgColor, "")), "" != e.mongoliaControl && (f = e.mongoliaMode), $.junelp.setSelectNor(c.children(".junelp[data-name='jdb_mongoliaMode']").children("input[name='jdb_mongoliaMode']"), f, !0), $.junelp.setCkb(c.children(".junelp[data-name='jdb_borderControl1']"), "hborder1" == e.borderControl1), c.children("[name='jdb_borderWidth1']").val(e.borderWidth1), c.children(".pagecolorpanel:eq(1)").children("[name='jdb_borderColor1']").val(RGBToHex(e.borderColor1, "")), c.children(".pagecolorpanel:eq(1)").find(".sp-preview-inner").css("background-color", RGBToHex(e.borderColor1, "")), c.children("[name='jdb_borderRadius1']").val(e.borderRadius1)
		}
	}, a.jcb_read = function (a) {
		if (a && 0 != a.length) {
			var c = a.children(".junesetpanel"),
				d = b.jSelectsedDom.filter("[data-dbltype='jcb']"),
				e = JSON.parse(d.attr("data-config") || "{}");
			"yes" == e.characterLineMulti ? (c.children("[name='jcb_characterContent']").hide(), c.children(".jcb_multiwzset").show()) : (c.children("[name='jcb_characterContent']").show(), c.children(".jcb_multiwzset").hide()), c.children("[name='jcb_characterContent']").val(e.characterContent.replace(/\<br\>/g, "\r\n").replace(/&nbsp;/g, " ")), c.children("[name='jcb_href']").val(e.href), $.junelp.setCkb(c.children(".junelp[data-name='jcb_hrefMode']"), "_blank" == e.hrefMode), $.junelp.setCkb(c.children(".junelp[data-name='jcb_borderControl1']"), "hborder1" == e.borderControl1), c.children("[name='jcb_borderWidth1']").val(e.borderWidth1), c.children(".pagecolorpanel").children("[name='jcb_borderColor1']").val(RGBToHex(e.borderColor1, "")), c.children(".pagecolorpanel").find(".sp-preview-inner").css("background-color", RGBToHex(e.borderColor1, "")), c.children("[name='jcb_borderRadius1']").val(e.borderRadius1)
		}
	}, a.jtsb_read = function (a) {
		if (a && 0 != a.length) {
			var d = (a.children(".junesetpanel"), b.jSelectsedDom.filter("[data-dbltype='jtsb']"));
			JSON.parse(d.attr("data-config") || "{}")
		}
	}, a.jib_read = function (a) {
		if (a && 0 != a.length) {
			var d = (a.children(".junesetpanel"), b.jSelectsedDom.filter("[data-dbltype='jib']"));
			JSON.parse(d.attr("data-config") || "{}")
		}
	}, a
}), define("scripts/stepins.js", function (a) {
	var c, d, e, b = '<div id="stepoverlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:10001;overflow:hidden;background:url(https://img.alicdn.com/imgextra/i1/39767794/TB214FjtVXXXXcTXXXXXXXXXXXX-39767794.png)  repeat"><div id="stepcontent" style="position:absolute;"><div id="stepbtn" style="position:absolute;cursor:pointer;"></div></div></div>',
		f = !1;
	return $(b).appendTo(D.b), a.start = function () {
		0 == $("#stepcontent").length ? $(b).appendTo(D.b) : $("#stepoverlay").show(), $("#tConfirm").is(":hidden") || (f = !0, $("#tConfirm").dialog("close")), c = $("#stepcontent"), d = $("#stepbtn"), e = a.setSkin(), a.step1()
	}, a.setSkin = function () {
		var a = {
				other: ["https://img.alicdn.com/imgextra/i4/39767794/TB2X9M6tFXXXXcHXpXXXXXXXXXX-39767794.png", 483, 211],
				old: ["https://img.alicdn.com/imgextra/i3/39767794/TB2UcbWtFXXXXX3XpXXXXXXXXXX-39767794.png", 414, 137]
			},
			b = "old";
		return window.localStorage && (b = localStorage.getItem("tCookieJunezxSkin") || "old"), "old" != b && (b = "other"), a[b]
	}, a.step1 = function () {
		c.css({
			width: "100%",
			height: e[1],
			top: 50,
			left: 1,
			backgroundImage: "url(" + e[0] + ")",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 166,
			left: 291
		}), d.off("click").on("click", function () {
			a.step2()
		})
	}, a.step2 = function () {
		c.css({
			width: 940,
			height: 688,
			top: 0,
			left: 309,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i3/39767794/TB2uMD4tFXXXXcYXXXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 28,
			left: 476
		}), d.off("click").on("click", function () {
			a.step3()
		})
	}, a.step3 = function () {
		c.css({
			width: 545,
			height: 473,
			top: 0,
			left: "auto",
			right: 200,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i1/39767794/TB2YUrTtFXXXXX9XpXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 87,
			left: 93
		}), d.off("click").on("click", function () {
			a.step4()
		})
	}, a.step4 = function () {
		c.css({
			width: 356,
			height: 160,
			top: 180,
			left: "auto",
			right: 10,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i4/39767794/TB2MPMqtFXXXXaaXXXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 48,
			left: 44
		}), d.off("click").on("click", function () {
			a.step5()
		})
	}, a.step5 = function () {
		c.css({
			width: 470,
			height: 233,
			top: 253,
			left: "auto",
			right: 30,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i4/39767794/TB2SkZitFXXXXbkXXXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 99,
			left: 178
		}), d.off("click").on("click", function () {
			a.step6()
		})
	}, a.step6 = function () {
		c.css({
			width: 470,
			height: 97,
			top: 487,
			left: "auto",
			right: 31,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i3/39767794/TB2e6RntVXXXXXhXpXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 64,
			left: 182
		}), d.off("click").on("click", function () {
			a.step7()
		})
	}, a.step7 = function () {
		c.css({
			width: 606,
			height: 556,
			top: "50%",
			left: "50%",
			marginLeft: -303,
			marginTop: -278,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i2/39767794/TB2hqU1tFXXXXbRXpXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 207,
			left: 515
		}), d.off("click").on("click", function () {
			a.step8()
		})
	}, a.step8 = function () {
		c.css({
			width: 347,
			height: 275,
			top: e[2],
			left: 0,
			marginLeft: 0,
			marginTop: 0,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i1/39767794/TB24BVgtVXXXXXHXpXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 126,
			left: 256
		}), d.off("click").on("click", function () {
			a.step9()
		})
	}, a.step9 = function () {
		c.css({
			width: 400,
			height: 140,
			top: "50%",
			left: "50%",
			marginLeft: -200,
			marginTop: -70,
			backgroundImage: "url(https://img.alicdn.com/imgextra/i2/39767794/TB2t7BktVXXXXXFXpXXXXXXXXXX-39767794.png)",
			backgroundRepeat: "no-repeat"
		}).show(), d.css({
			width: 92,
			height: 34,
			top: 99,
			left: 308
		}), d.off("click").on("click", function () {
			a.end()
		})
	}, a.end = function () {
		f && $("#tConfirm").dialog("open"), c.parent().hide()
	}, a
}), define("scripts/drawShouFengQin.js", function (a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function (a, d, e) {
		var g, j, f = $.extend(!0, {}, c[a]),
			h = "";
		b.setAppID(f[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), e || (c[a][1].tDynamic, j = $.extend(!0, {}, c[a][1].tDynamicConfig), j.pSrc = "https://img.alicdn.com/imgextra/i2/800803731/TB2Qr3Tak7OyuJjSspbXXXZuXXa-800803731.jpg", j.pSrc1 = "https://img.alicdn.com/imgextra/i3/800803731/TB2quvuaPZnyKJjSZPcXXXqHVXa-800803731.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "https://img.alicdn.com/imgextra/i4/800803731/TB2YDTCaNwlyKJjSZFNXXcOlpXa-800803731.jpg", j.pSrc1 = "https://img.alicdn.com/imgextra/i4/800803731/TB2Y6fFaJ3nyKJjSZFEXXXTTFXa-800803731.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "https://img.alicdn.com/imgextra/i1/800803731/TB2t3vIaTIlyKJjSZFrXXXn2VXa-800803731.jpg", j.pSrc1 = "https://img.alicdn.com/imgextra/i3/800803731/TB2DHjGaTAlyKJjSZFhXXc8XFXa-800803731.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "https://img.alicdn.com/imgextra/i3/800803731/TB2qtLDaQonyKJjSZFtXXXNaVXa-800803731.jpg", j.pSrc1 = "https://img.alicdn.com/imgextra/i2/800803731/TB2L6PEaPZnyKJjSZFxXXabIpXa-800803731.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), h = f[1].tContent + f[1].tContent + f[1].tContent + f[1].tDynamic + f[1].tDynamic + f[1].tDynamic), $(f[0]).addClass("t-jadb-right").html(h).appendTo(b.june).css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 1001,
			height: 250
		}).attr("data-config", JSON.stringify(f[2])).attr("appID", f[2].appID).addClass(b.selectedVal), g = $(b.appParentCls + "[appID='" + f[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.add(g), e || (g.children(".t-jadb-title").each(function () {
			b.setAttachID(f), $(this).width(102).height(250).tResize({
				tHandles: "e, se, s"
			}).attr("attachID", f.attachID)
		}), g.children(".t-jadb-panel").each(function () {
			b.setAttachID(f), $(this).width(615).height(250).tResize({
				tHandles: "e, se, s"
			}).attr("attachID", f.attachID)
		}), b.appConfig["jadb"][1].tSubmit(f[2], g, !0)), d(a, f[2].appID)
	}, a
});
