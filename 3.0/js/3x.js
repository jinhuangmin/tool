define("scripts/little.js", function (a) {
	var c, d, e, f, g, h, i, b = require("scripts/D");
	return b.littleDom = '<div id="tLittle" style="position:absolute;z-index:120;"><span class="component"><i>X:</i><input type="text" value="0" class="except-keyboard" id="tLittleCom1" /></span><span class="component"><i>Y:</i><input type="text" value="0" class="except-keyboard" id="tLittleCom2" /></span><span class="component"><i>宽:</i><input type="text" value="0" class="except-keyboard" id="tLittleCom3" /></span><span class="component"><i>高:</i><input type="text" value="0" class="except-keyboard" id="tLittleCom4"/ ></span><span id="tLittleComOk">确定</span></div>', $(b.littleDom).appendTo(b.b).hide(), c = $("#tLittle"), d = $("#tLittleCom1"), e = $("#tLittleCom2"), f = $("#tLittleCom3"), g = $("#tLittleCom4"), tLittleComOk = $("#tLittleComOk"), i = !1, a.create = function (a, j) {
		var n, o, k = j.attr("data-dblType"),
			l = j.hasClass(b.resizeNaClsVal);
		childClass = j.hasClass(b.appChildClsVal), "jib" != k ? (n = {}, o = {}, n.left = b.tParseInt(j.css("left")), n.top = b.tParseInt(j.css("top")), n.width = j.width(), n.height = j.height(), o = childClass ? b.setChildPos(j.parent(), j) : n, c.is(":hidden") ? (d.is(":focus") || d.val(n.left), e.is(":focus") || e.val(n.top), f.is(":focus") || f.val(n.width), g.is(":focus") || g.val(n.height), i = !1) : i || (d.is(":focus") || d.val(n.left), e.is(":focus") || e.val(n.top), f.is(":focus") || f.val(n.width), g.is(":focus") || g.val(n.height)), f.parent().show(), g.parent().show(), (l || "jadb" == k) && (f.parent().hide(), g.parent().hide()), h = j, c.css({
			top: o.top + o.height + 0 + _g_offstop - b.junebox.scrollTop() + 3,
			left: o.left + _g_offsleft - b.junebox.scrollLeft()
		}), "e6db" == $[b.g[m(31 * Math.random())]](b.appConfig["jspb"][2]["pSrc"]) && ("show" == a ? c.show() : c.hide(), "jllb" == k && c.hide())) : c.hide()
	}, a.click = function () {
		var c, d, e, f, l, m;
		if (h) {
			switch (c = b.tParseInt($(this).val()) || 0, d = $(this).parent().index(), e = h.attr("data-attachType") || null, f = {}, l = !1, f.width = h.width(), f.height = h.height(), f.top = b.tParseInt(h.css("top")), f.left = b.tParseInt(h.css("left")), d) {
				case 0:
					h.css("left", c), c != f.left && (l = !0);
					break;
				case 1:
					h.css("top", c), c != f.top && (l = !0);
					break;
				case 2:
					h.width(c), c != f.width && (l = !0);
					break;
				case 3:
					h.height(c), c != f.height && (l = !0)
			}
			if (l)
				if (e) {
					if (config = JSON.parse(h.parent().attr("data-config") || "{}"), attachID = h.attr("attachID"), config.childConfig) {
						for (m = 0; m < config.childConfig.length; m++) config.childConfig[m].attachID == attachID && (config.childConfig[m].autoSize && (config.childConfig[m].autoSize = "no"), config.childConfig[m].autoSize1 && (config.childConfig[m].autoSize1 = "no"));
						h.parent().attr("data-config", JSON.stringify(config))
					}
					"jfsb" == h.attr("data-dblType") && (config.sWidth = "", config.sHeight = "", h.parent().attr("data-config", JSON.stringify(config)))
				} else config = JSON.parse(h.attr("data-config")), config.autoSize && (config.autoSize = "no"), h.attr("data-config", JSON.stringify(config))
		}
		h = null
	}, a.clickAll = function () {
		var c, i, j, k, l, m, r;
		if (h && (c = b.tParseInt(d.val()) || 0, i = b.tParseInt(e.val()) || 0, j = b.tParseInt(f.val()) || 0, k = b.tParseInt(g.val()) || 0, l = h.attr("data-attachType") || null, m = {}, m.width = h.width(), m.height = h.height(), m.top = b.tParseInt(h.css("top")), m.left = b.tParseInt(h.css("left")), h.css({
				left: c,
				top: i,
				width: j,
				height: k
			}), j != m.width || k != m.height || i != m.top || c != m.left))
			if (l) {
				if (config = JSON.parse(h.parent().attr("data-config") || "{}"), attachID = h.attr("attachID"), config.childConfig) {
					for (r = 0; r < config.childConfig.length; r++) config.childConfig[r].attachID == attachID && (config.childConfig[r].autoSize && (config.childConfig[r].autoSize = "no"), config.childConfig[r].autoSize1 && (config.childConfig[r].autoSize1 = "no"));
					h.parent().attr("data-config", JSON.stringify(config))
				}
				"jfsb" == h.attr("data-dblType") && (config.sWidth = "", config.sHeight = "", h.parent().attr("data-config", JSON.stringify(config)))
			} else config = JSON.parse(h.attr("data-config")), config.autoSize && (config.autoSize = "no"), h.attr("data-config", JSON.stringify(config));
		h = null
	}, c.on("keyup.little", "input", function (b) {
		var c = b.keyCode || b.which;
		13 == c && a.clickAll(b)
	}), c.on("change.little", "input", function () {
		i = !0
	}), tLittleComOk.on("click", a.clickAll), a
}), define("scripts/courseStep.js", function (a) {
	var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, b = require("scripts/D"),
		c = require("scripts/code");
	return tnaCheck("junezx_tna_cs1") || $("#courseStep1").show(), d = null, $("#makecode").on("mouseenter", function () {
		$("#makeChooseCode").css({
			top: 48
		}).show()
	}), $("#makecode").on("mouseleave", function () {
		d = setTimeout(function () {
			$("#makeChooseCode").css({
				top: 10
			}).hide()
		}, 2e3)
	}), $("#makeChooseCode").on("mouseenter", function () {
		clearTimeout(d), d = null
	}), $("#makeChooseCode").on("mouseleave", function () {
		$("#makeChooseCode").css({
			top: 10
		}).hide()
	}), 0 == $("#jSetSaveTip").length && $("#jSetSaveTipClose").on("click", function () {
		$("#jSetSaveTip").slideUp(1e3)
	}), window.localStorage && b.getCode("juneVisited") && (b.set30Save = setInterval(function () {
		var e, a = $("#aclist").attr("set30save") || "no",
			d = 0;
		if ("yes" != a) {
			if (e = [], b.june.children(b.appCls).each(function () {
					e.push($(this).attr("data-appLabel") || "")
				}), b.layerList.children(".june-tree-draging").length > 0) return;
			if (b.june.children(".june-drag-helping").length > 0) return;
			if (b.zdyAllIndex > 0) return;
			e.length > 0 && c.getCodeExport(function (a) {
				localStorage.removeItem("tCookieJunezxCode"), localStorage.removeItem("tCookieJunezxCode1"), localStorage.removeItem("tCookieJunezxCode2"), localStorage.removeItem("tCookieLabelName"), localStorage.setItem("tCookieJunezxCode", a), localStorage.setItem("tCookieJunezxCode1", b.june.html()), localStorage.setItem("tCookieJunezxCode2", b.layerList.html()), localStorage.setItem("tCookieLabelName", e.join("|;|")), d = a.length, tnaCheck("junezx_tna_setsavetip") || d >= 51200 && ($("#jSetSaveTipText").html("亲，您当前的代码量已经超过50KB，只能放在设计师自定义模块使用哦！<br />（当前代码量：" + (d / 1024).toFixed(1) + "KB）"), $("#jSetSaveTip").addClass("t50Warning").slideDown(1e3), $("#jSetSaveTipCheckBtn").show(), setTimeout(function () {
					$("#jSetSaveTip").slideUp(1e3)
				}, 1e4)), d >= 102400 && ($("#jSetSaveTipText").html("亲，您当前的代码量已经超过100KB，超过120KB的代码淘宝将无法正常使用，建议亲分段制作！<br />"), $("#jSetSaveTip").addClass("t120Warning").slideDown(1e3), $("#jSetSaveTipCheckBtn").hide(), setTimeout(function () {
					$("#jSetSaveTip").slideUp(1e3)
				}, 1e4))
			}, !0, !0), $("#aclist").attr("set30save", "yes")
		}
	}, 3e4), e = localStorage.getItem("tCookieJunezxCode"), f = localStorage.getItem("tCookieLabelName"), g = localStorage.getItem("tCookieJunezxCode1"), h = localStorage.getItem("tCookieJunezxCode2"), 

	/******	
	
	e && "" != e && b.tConfirm("检测到您之前有正在编辑的内容，是否继续上次的操作？", function () {
		var a, d, i;
		try {
			localStorage.removeItem("tCookieJunezxCode"), localStorage.removeItem("tCookieJunezxCode1"), localStorage.removeItem("tCookieJunezxCode2"), localStorage.removeItem("tCookieLabelName"), localStorage.setItem("tCookieJunezxCode", e), localStorage.setItem("tCookieJunezxCode1", g), localStorage.setItem("tCookieJunezxCode2", h), localStorage.setItem("tCookieLabelName", f), c.codeImportDialogCode(e), f && "" != f && "zx" == hre && (a = f.split("|;|"), d = require("scripts/action"), i = require("scripts/layer"), b.june.children(b.appCls).each(function (b) {
				if ("" != a[b]) {
					var e = JSON.parse($(this).attr("data-config") || "{}");
					$(this).attr("data-dblType"), e.appLabel = a[b], $(this).attr("data-appLabel", a[b]).attr("data-config", JSON.stringify(e)), i.updateAppLabel($(this)), d.create("edit", $(this))
				}
			})), g = rfxgForHtml(g), b.june.html(g), b.layerList.html(h), b.jSelectsedDom = $(), b.june.find(b.appCls + ".ui-selected").each(function () {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), b.june.find(b.appChildCls + ".ui-selected").each(function () {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), b.layerList.html(h), b.updateCurType(), $("#juneDragHelper").hide()
		} catch (j) {
			b.tMessage("数据异常，导入失败！")
		}
	}), 

	*****/

	i = localStorage.getItem("tCookieJunezxUps_0"), j = localStorage.getItem("tCookieJunezxUps_1"), k = localStorage.getItem("tCookieJunezxUps_2"), l = localStorage.getItem("tCookieJunezxUps_3"), m = localStorage.getItem("tCookieJunezxUps_4"), n = "10像素方格", o = localStorage.getItem("tCookieJunezxUps_5"), p = localStorage.getItem("tCookieJunezxUps_6"), q = localStorage.getItem("tCookieJunezxUps_7"), r = localStorage.getItem("tCookieJunezxUps_8"), s = "开启", t = localStorage.getItem("tCookieJunezxUps_9"), u = "当前屏", i && (b.assistSwitch = "no" != i), j && (b.assistSwitch1 = "no" != j), k && (b.assistColor = k, $(".snap-line:not(.snap-center-line)").css({
		"background-color": k,
		color: k
	}), $(".snap-compare-line").css({
		"background-color": k,
		color: k
	}), $(".snap-compare-box").children(".sbody").css({
		"background-color": k,
		color: k
	}), $(".as-val").css({
		"background-color": k,
		color: hexToReverse(k)
	})), l && (b.gridSwitch = "no" != l, b.updateGrid()), m && (b.june.attr("data-gridPane", m), "20px" == m && (n = "20像素方格"), "50px" == m && (n = "50像素方格"), $("#tm_grid_set").children(".junesetpanel").children(".junelp[data-name='grid_pane']").children("val").html(n), $.junelp.setSelectNor($("#tm_grid_set").children(".junesetpanel").children(".junelp[data-name='grid_pane']").children("input[name='grid_pane']"), m, !0), b.updateGrid()), o && (b.snapSwitch = "no" != o), p && (b.snapOutTolerance = p), q && (b.snapOutSpace = q), r && ("closed" == r && (s = "关闭"), $("#tm_magnet_set").children(".junesetpanel").children(".junelp[data-name='mag_line']").children("val").html(s), b.snapLineStatus = r), t && ("canvas" == t && (u = "全画布"), $("#tm_magnet_set").children(".junesetpanel").children(".junelp[data-name='mag_range']").children("val").html(u), b.snapEleRange = t)), a.click = function (a) {
		"1" == a && $("#courseStep1").hide()
	}, a
}), define("scripts/littleTip.js", function () {
	var c, b = require("scripts/D"),
		d = '<div style="display:none;" id="tNotice" class="june-box june-attached june-effect-flip june-type-notice june-show">	<span class="june-close" id="tNoticeClose"></span>	<span class="june-nevertip tnaCheck tna-checkin" data-tna="junezx_tna_notice_3.0"><i></i>不再提示</span>	<div class="june-brtip">		感谢使用沃姆设计工具3.0~<br />		沃姆设计客户群，提供问题解答、功能更新通知<br />		及介绍等服务~随时欢迎您的加入~	</div>	<a href="http://shang.qq.com/wpa/qunwpa?idkey=4420051a20aa90ec34dbb9904305629519807470b200df2647e9034afa5a390c" target="_blank" class="june-addqqgroup" style="color:#19c2d1;border-color:#19c2d1;">+加入群聊</a></div>';
	$(d).appendTo(b.b).addClass("june-hide"), tnaCheck("junezx_tna_notice_3.0") || (c = setTimeout(function () {
		$(".june-attached").removeClass("june-show").addClass("june-ehide"), setTimeout(function () {
			$(".june-attached").addClass("june-hide")
		}, 400)
	}, 2e4), setTimeout(function () {
		$(".june-attached").removeClass("june-ehide june-hide").addClass("june-show")
	}, 5e3), $("#tNotice").on("mouseenter", function () {
		clearTimeout(c), c = null
	}), $("#tNotice").on("mouseleave", function () {
		clearTimeout(c), c = null, c = setTimeout(function () {
			$(".june-attached").removeClass("june-show").addClass("june-ehide"), setTimeout(function () {
				$(".june-attached").addClass("june-hide")
			}, 400)
		}, 6e3)
	})), $("#tNoticeClose").on("click", function () {
		clearTimeout(c), c = null, $(".june-attached").removeClass("june-show").addClass("june-ehide"), setTimeout(function () {
			$(".june-attached").addClass("june-hide")
		}, 400)
	}), b.b.on("click", ".tnaCheck", function () {
		var a = $(this),
			b = a.attr("data-tna");
		a.hasClass("tna-checkin") ? (a.addClass("tna-checkout").removeClass("tna-checkin").addClass("selected"), tnaCheckCookie(b)) : (a.addClass("tna-checkin").removeClass("tna-checkout").removeClass("selected"), tnaCheckCookie(b, !0))
	})
}), define("scripts/other.js", function (a) {
	var b = require("scripts/D"),
		c = require("scripts/UI_Dialog");
	return a.thumbImport = function (a) {
		var e, c, d, f, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
		return a.hasClass("jnwz") && "zx" == hre ? (c = $.extend({}, b.qssetConfig), d = a.children("a:eq(0)"), f = a.attr("data-t") || "text;text", g = {}, f = f.split(";"), g.characterWidthMode = a.attr("data-w") || "normal", g.characterMode = f[0], g.characterFont = d.css("font-family").replace(/'/g, ""), g.characterColor = RGBToHex(d.css("color")), g.characterSize = d.css("font-size").replace(/px/g, ""), g.characterBgColor = RGBToHex(d.css("background-color"), ""), g.characterLineHeight = b.tParseInt(d.css("line-height")), g.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), g.characterWeight = d.css("font-weight"), "400" == g.characterWeight && (g.characterWeight = "normal"), g.characterStyle = d.css("font-style") || "normal", g.characterIndent = "", g.characterLineOver = "", g.characterLineThrough = "", g.characterLineUnder = "", g.characterUnderLineStyle = "solid", g.characterUnderLineColor = "", g.characterUnderLineWeight = "1", g.characterAlign = d.css("text-align") || "center", g.characterContent = d.html(), g.characterBgSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.imgBgp = d.css("background-position") || "50% 50%", g.ssOpacity = "1", g.ssOpacity1 = "1", a.attr("data-o") && (h = a.attr("data-o") || ";", i = h.split(";"), h.indexOf("|") >= 0 && (i = h.split("|")), g.ssOpacity = i[0], g.ssOpacity1 = i[1]), g.characterLineMulti = "yes" == a.attr("data-c") ? "yes" : "no", j = "", ("left" == g.characterAlign || "center" == g.characterAlign) && (g.characterIndent = Math.abs(b.tParseInt(d.css("padding-left")))), "right" == g.characterAlign && (g.characterIndent = Math.abs(b.tParseInt(d.css("padding-right")))), "normal" == g.characterLineHeight ? (j = "normal", g.characterLineHeight = "") : j = g.characterLineHeight + "px", d.css("text-decoration").indexOf("overline") >= 0 && (g.characterLineOver = "overline"), d.css("text-decoration").indexOf("line-through") >= 0 && (g.characterLineThrough = "line-through"), d.css("text-decoration").indexOf("underline") >= 0 && (g.characterLineUnder = "underline"), k = g.characterContent, "text" != g.characterMode && (l = a.attr("data-h") || ";", n = l.split(";"), g.characterItemContent = n[0], g.characterContent = n[1], k = g.characterItemContent, ("price" == g.characterMode || "_price" == g.characterMode) && (o = k.split("."), g.characterFixed = o.length > 1 ? o[1].length : 0)), a.find("a").length > 1 && "zx" == hre && (e = a.find("a:eq(1)"), g.characterHoverMode = "on", g.characterUnderLine = "off", g.characterHoverSpeed = e.attr("class").match(/trans(\w+)s/g), g.characterHoverSpeed = g.characterHoverSpeed && g.characterHoverSpeed.length > 0 ? g.characterHoverSpeed.join("") : "", g.characterModeHover = f[1], g.characterFontHover = e.css("font-family").replace(/'/g, ""), g.characterColorHover = RGBToHex(e.css("color")), g.characterSizeHover = e.css("font-size").replace(/px/g, ""), g.characterBgColorHover = RGBToHex(e.css("background-color"), ""), g.characterLineHeightHover = b.tParseInt(e.css("line-height")), g.characterLetterSpacingHover = e.css("letter-spacing").replace(/px/g, ""), g.characterWeightHover = e.css("font-weight"), "400" == g.characterWeightHover && (g.characterWeightHover = "normal"), g.characterStyleHover = e.css("font-style") || "normal", g.characterIndentHover = "", g.characterLineOverHover = "", g.characterLineThroughHover = "", g.characterLineUnderHover = "", g.characterAlignHover = e.css("text-align") || "center", g.characterContentHover = e.html(), g.characterBgSrcHover = e.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.imgBgpHover = e.css("background-position") || "50% 50%", g.characterLineMultiHover = "yes" == a.attr("data-ch") ? "yes" : "no", ("left" == g.characterAlignHover || "center" == g.characterAlignHover) && (g.characterIndentHover = Math.abs(b.tParseInt(e.css("padding-left")))), "right" == g.characterAlignHover && (g.characterIndentHover = Math.abs(b.tParseInt(e.css("padding-right")))), "normal" == g.characterLineHeightHover && (g.characterLineHeightHover = ""), e.css("text-decoration").indexOf("overline") >= 0 && (g.characterLineOverHover = "overline"), e.css("text-decoration").indexOf("line-through") >= 0 && (g.characterLineThroughHover = "line-through"), e.css("text-decoration").indexOf("underline") >= 0 && (g.characterLineUnderHover = "underline"), a.hasClass("shadowShow") && (g.shadowControl = "shadowShow", p = e.css("box-shadow"), p.indexOf("inset") >= 0 && (g.shadowStyle = "inset", p = $.trim(p.replace(/inset/g, ""))), p.indexOf("rgb") >= 0 && (q = RGBToHex(p.match(/rgb\((\S|\s)*\)/g)[0]), p = $.trim(p.replace(/rgb\((\S|\s)*\)/g, ""))), r = p.split(" "), r[0].indexOf("px") < 0 && r[0] ? ("" == q && (q = RGBToHex(r[0])), r.splice(0, 1)) : "" == q && (q = RGBToHex(r[4])), g.shadowColor = q, g.shadowLeft = b.tParseInt(r[0]), g.shadowTop = b.tParseInt(r[1]), g.shadowBlur = b.tParseInt(r[2]), g.shadowSize = b.tParseInt(r[3])), a.hasClass("hborder") ? (g.borderControl = "hborder", g.borderColor = RGBToHex(e.css("border-color")), g.borderWidth = e.css("border-width") || "1px", g.borderWidth = g.borderWidth.replace(/px/g, ""), g.borderRadius = e.css("border-radius") || "0px", g.borderRadius = g.borderRadius.replace(/px/g, "")) : (g.characterUnderLineWeight = m(e.css("border-bottom-width")), g.characterUnderLineWeight > 0 && (g.characterUnderLine = "on", g.characterUnderLineStyle = e.css("border-bottom-style"), g.characterUnderLineColor = RGBToHex(e.css("border-bottom-color")), g.characterUnderLineWeight += "")), a.hasClass("mcblack") && (g.mongoliaControl = "mongoliaShow", g.mongoliaMode = "mcblack"), a.hasClass("mcwhite") && (g.mongoliaControl = "mongoliaShow", g.mongoliaMode = "mcwhite")), s = g.characterContentHover, "text" != g.characterModeHover && (l = a.attr("data-hh") || ";", n = l.split(";"), g.characterContentHover = n[0], g.characterItemContentHover = n[1], s = g.characterContentHover, ("price" == g.characterModeHover || "_price" == g.characterModeHover) && (t = s.split("."), g.characterFixedHover = t.length > 1 ? t[1].length : 0)), a.hasClass("shadowShow1") && (g.shadowControl1 = "shadowShow1", u = d.css("box-shadow"), u.indexOf("inset") >= 0 && (g.shadowStyle1 = "inset", u = $.trim(u.replace(/inset/g, ""))), u.indexOf("rgb") >= 0 && (q = RGBToHex(u.match(/rgb\((\S|\s)*\)/g)[0]), u = $.trim(u.replace(/rgb\((\S|\s)*\)/g, ""))), r = u.split(" "), r[0].indexOf("px") < 0 && r[0] ? ("" == q && (q = RGBToHex(r[0])), r.splice(0, 1)) : "" == q && (q = RGBToHex(r[4])), g.shadowColor1 = q, g.shadowLeft1 = b.tParseInt(r[0]), g.shadowTop1 = b.tParseInt(r[1]), g.shadowBlur1 = b.tParseInt(r[2]), g.shadowSize1 = b.tParseInt(r[3])), a.hasClass("hborder1") && (g.borderControl1 = "hborder1", g.borderColor1 = RGBToHex(d.css("border-color")), g.borderWidth1 = d.css("border-width") || "1px", g.borderWidth1 = g.borderWidth1.replace(/px/g, ""), g.borderRadius1 = d.css("border-radius") || "0px", g.borderRadius1 = g.borderRadius1.replace(/px/g, "")), a.hasClass("juneol") && (g.outlineControl = "outlineShow", g.outlineWidth = "juneol", g.outlineColor = RGBToHex(a.css("outline-color")), g.outlineShadowColor = RGBToHex(a.css("color")), g.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), a.hasClass("juneol1") && (g.outlineControl = "outlineShow", g.outlineWidth = "juneol1", g.outlineColor = RGBToHex(a.css("outline-color")), g.outlineShadowColor = RGBToHex(a.css("color")), g.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), a.hasClass("juneol2") && (g.outlineControl = "outlineShow", g.outlineWidth = "juneol2", g.outlineColor = RGBToHex(a.css("outline-color")), g.outlineShadowColor = RGBToHex(a.css("color")), g.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), v = $.extend(!0, c, g), JSON.stringify(v)) : (w = {}, x = a.children("a:eq(0)").length > 0 ? a.children("a:eq(0)") : a.children(".rel").children("a:eq(0)"), w.characterMode = a.attr("data-t") || "text", w.href = x.attr("href") || "", w.hrefMode = x.attr("target"), w.characterBgSrc = x.css("background-image").replace(/^url|[\(\"\)]*/g, "") || "", w.characterAlign = a.css("text-align") || "left", w.characterAlignHover = w.characterAlign, w.characterContent = x.html(), w.characterSize = x.css("font-size").replace(/px/g, ""), w.characterFont = x.css("font-family").replace(/'/g, ""), w.characterStyle = x.css("font-style") || "normal", w.characterColor = RGBToHex(x.css("color")), w.characterBgColor = RGBToHex(x.css("background-color"), ""), w.characterWeight = x.css("font-weight"), "400" == w.characterWeight && (w.characterWeight = "normal"), w.characterBorderWidth = x.css("border-width") || "0px", w.characterBorderWidth = w.characterBorderWidth.replace(/px/g, ""), w.characterBorderColor = RGBToHex(x.css("border-color")), w.characterBorderStyle = x.css("border-style") || "solid", w.characterFixed = 0, w.characterLineThrough = "", w.characterLineUnder = "", w.characterLetterSpacing = x.css("letter-spacing").replace(/px/g, ""), w.characterWidthMode = a.attr("data-w") || "normal", w.ssOpacity = "1", w.ssOpacity1 = "1", a.attr("data-o") && (h = a.attr("data-o") || ";", i = h.split(";"), h.indexOf("|") >= 0 && (i = h.split("|")), w.ssOpacity = i[0], w.ssOpacity1 = i[1]), "yes" == a.attr("data-c") ? (w.characterLineMulti = "yes", w.characterContent = w.characterContent, w.characterLineHeight = b.tParseInt(x.css("line-height")), w.characterLineAlign = w.characterAlign, w.characterAlign = "left", w.characterLineSpace = b.tParseInt(x.css("text-indent")), w.characterTBpadding = b.tParseInt(x.css("padding-top")), w.characterLRpadding = b.tParseInt(x.css("padding-left"))) : (w.characterLineMulti = "no", w.characterLineHeight = b.tParseInt(x.css("line-height")), w.characterLineSpace = ""), j = "", "normal" == w.characterWidthMode ? w.characterSpace = "left" == w.characterAlign ? Math.abs(b.tParseInt(x.css("right"))) : "right" == w.characterAlign ? Math.abs(b.tParseInt(x.css("left"))) : "" : (w.characterLeftPadding = Math.abs(b.tParseInt(x.css("padding-left"))), w.characterRightPadding = Math.abs(b.tParseInt(x.css("padding-right"))), j = b.tParseInt(x.css("line-height"))), x.children(".junei").length > 0 ? (y = x.children(".junei"), w.characterContent = y.html(), w.characterColorMsOver = RGBToHex(y.css("color")), w.characterBgColorMsOver = RGBToHex(y.css("background-color"), ""), w.characterBgSrcMsOver = y.css("background-image").replace(/^url|[\(\"\)]*/g, ""), w.characterBorderWidthMsOver = y.css("border-width") || "0px", w.characterBorderWidthMsOver = w.characterBorderWidthMsOver.replace(/px/g, ""), w.characterBorderColorMsOver = RGBToHex(y.css("border-color")), w.characterBorderStyleMsOver = y.css("border-style") || "solid") : (w.characterColorMsOver = "", w.characterBgColorMsOver = "", w.characterBgSrcMsOver = "", w.characterBorderWidthMsOver = "", w.characterBorderColorMsOver = "", w.characterBorderStyleMsOver = "solid"), a.find("a").length > 1 && (z = a.find("div.jspb").children("a:eq(0)"), A = z.attr("class"), B = 0, w.characterUnderLine = "off", w.characterHoverMode = "on", w.characterHoverSpeed = z.attr("class").match(/trans(\w+)s/g), w.characterHoverSpeed = w.characterHoverSpeed && w.characterHoverSpeed.length > 0 ? w.characterHoverSpeed.join("") : "", w.characterContentHover = z.html(), w.characterBgSrcHover = z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), w.characterSizeHover = z.css("font-size").replace(/px/g, ""), w.characterFontHover = z.css("font-family").replace(/'/g, ""), w.characterColorHover = RGBToHex(z.css("color")), w.characterBgColorHover = RGBToHex(z.css("background-color"), ""), w.characterWeightHover = z.css("font-weight"), "400" == w.characterWeightHover && (w.characterWeightHover = "normal"), w.characterBorderWidthHover = z.css("border-width") || "0px", w.characterBorderWidthHover = w.characterBorderWidthHover.replace(/px/g, ""), w.characterBorderColorHover = RGBToHex(z.css("border-color")), w.characterBorderStyleHover = z.css("border-style") || "solid", w.characterUnderLineWeight = x.height() - z.height(), w.characterHoverSpeed = z.attr("class").match(/trans(\w+)s/g), w.characterHoverSpeed = w.characterHoverSpeed && w.characterHoverSpeed.length > 0 ? w.characterHoverSpeed.join("") : "", w.css3Mode1 = A.split(" ")[2], w.css3ModeX1 = A.split(" ")[3], w.css3ModeY1 = A.split(" ")[4], A.replace(/  /g, "") == A && (A.indexOf("june-box-fx") < 0 && A.indexOf("june-box-fy") < 0 && A.indexOf("june-box-sf") < 0 && A.indexOf("june-box-fx") < 0 && A.indexOf("june-box-fy") < 0 && A.indexOf("june-box-r1") < 0 && A.indexOf("june-box-r2") < 0 && A.indexOf("june-box-r3") < 0 && A.indexOf("june-box-r7") < 0 && A.indexOf("june-box-fr1") < 0 && A.indexOf("june-box-fr2") < 0 && A.indexOf("june-box-fr3") < 0 && A.indexOf("june-box-fr7") < 0 && (w.css3Mode1 = "", B++, w.css3ModeX1 = A.split(" ")[3 - B], w.css3ModeY1 = A.split(" ")[4 - B]), A.indexOf("june-box-fromleft") < 0 && A.indexOf("june-box-fromright") < 0 && A.indexOf("june-box-lx") < 0 && A.indexOf("june-box-rx") < 0 && (w.css3ModeX1 = "", B++, w.css3ModeY1 = A.split(" ")[4 - B]), A.indexOf("june-box-fromtop") < 0 && A.indexOf("june-box-frombottom") < 0 && A.indexOf("june-box-uy") < 0 && A.indexOf("june-box-dy") < 0 && (w.css3ModeY1 = "")), 0 != w.characterUnderLineWeight ? (w.characterUnderLine = "on", w.characterUnderLineStyle = z.css("border-bottom-style"), w.characterUnderLineColor = RGBToHex(z.css("border-bottom-color")), w.characterUnderLineWeight += "") : w.characterUnderLineWeight = "1", a.hasClass("shadowShow") && (w.shadowControl = "shadowShow", p = z.css("box-shadow"), p.indexOf("inset") >= 0 && (w.shadowStyle = "inset", p = $.trim(p.replace(/inset/g, ""))), p.indexOf("rgb") >= 0 && (q = RGBToHex(p.match(/rgb\((\S|\s)*\)/g)[0]), p = $.trim(p.replace(/rgb\((\S|\s)*\)/g, ""))), r = p.split(" "), r[0].indexOf("px") < 0 && r[0] ? ("" == q && (q = RGBToHex(r[0])), r.splice(0, 1)) : "" == q && (q = RGBToHex(r[4])), w.shadowColor = q, w.shadowLeft = b.tParseInt(r[0]), w.shadowTop = b.tParseInt(r[1]), w.shadowBlur = b.tParseInt(r[2]), w.shadowSize = b.tParseInt(r[3])), a.hasClass("hborder") && (w.borderControl = "hborder", w.borderColor = RGBToHex(z.css("border-color")), w.borderWidth = z.css("border-width") || "1px", w.borderWidth = w.borderWidth.replace(/px/g, ""), w.borderRadius = z.css("border-radius") || "0px", w.borderRadius = w.borderRadius.replace(/px/g, "")), a.hasClass("mcblack") && (w.mongoliaControl = "mongoliaShow", w.mongoliaMode = "mcblack"), a.hasClass("mcwhite") && (w.mongoliaControl = "mongoliaShow", w.mongoliaMode = "mcwhite")), x.css("text-decoration").indexOf("line-through") >= 0 && (w.characterLineThrough = "line-through"), x.css("text-decoration").indexOf("underline") >= 0 && (w.characterLineUnder = "underline"), k = w.characterContent, "text" != w.characterMode && (l = a.attr("data-h") || ";", n = l.split(";"), w.characterItemContent = n[0], w.characterContent = n[1], k = w.characterItemContent, ("price" == w.characterMode || "_price" == w.characterMode) && (o = k.split("."), w.characterFixed = o.length > 1 ? o[1].length : 0)), a.hasClass("shadowShow1") && (w.shadowControl1 = "shadowShow1", u = x.css("box-shadow"), u.indexOf("inset") >= 0 && (w.shadowStyle1 = "inset", u = $.trim(u.replace(/inset/g, ""))), u.indexOf("rgb") >= 0 && (q = RGBToHex(u.match(/rgb\((\S|\s)*\)/g)[0]), u = $.trim(u.replace(/rgb\((\S|\s)*\)/g, ""))), r = u.split(" "), r[0].indexOf("px") < 0 && r[0] ? ("" == q && (q = RGBToHex(r[0])), r.splice(0, 1)) : "" == q && (q = RGBToHex(r[4])), w.shadowColor1 = q, w.shadowLeft1 = b.tParseInt(r[0]), w.shadowTop1 = b.tParseInt(r[1]), w.shadowBlur1 = b.tParseInt(r[2]), w.shadowSize1 = b.tParseInt(r[3])), a.hasClass("hborder1") && (w.borderControl1 = "hborder1", w.borderColor1 = RGBToHex(x.css("border-color")), w.borderWidth1 = x.css("border-width") || "1px", w.borderWidth1 = w.borderWidth1.replace(/px/g, ""), w.borderRadius1 = x.css("border-radius") || "0px", w.borderRadius1 = w.borderRadius1.replace(/px/g, "")), a.hasClass("juneol") && (w.outlineControl = "outlineShow", w.outlineWidth = "juneol", w.outlineColor = RGBToHex(a.css("outline-color")), w.outlineShadowColor = RGBToHex(a.css("color")), w.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), a.hasClass("juneol1") && (w.outlineControl = "outlineShow", w.outlineWidth = "juneol1", w.outlineColor = RGBToHex(a.css("outline-color")), w.outlineShadowColor = RGBToHex(a.css("color")), w.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), a.hasClass("juneol2") && (w.outlineControl = "outlineShow", w.outlineWidth = "juneol2", w.outlineColor = RGBToHex(a.css("outline-color")), w.outlineShadowColor = RGBToHex(a.css("color")), w.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), JSON.stringify(w))
	}, a.thumbCircleImport = function (a) {
		var d, b = {},
			c = a.children("div.s2");
		return c.length > 0 && (b.characterContent = c.html(), b.characterSize = c.css("font-size").replace(/px/g, ""), b.characterFont = c.css("font-family").replace(/'/g, ""), b.characterColor = RGBToHex(c.css("color")), b.characterBgColor = RGBToHex(c.css("background-color"), ""), b.characterWeight = c.css("font-weight"), "400" == b.characterWeight && (b.characterWeight = "normal")), a.children("div.s1").hasClass("s1h") && (b.characterHoverMode = "on", d = a.children("div.s1"), b.characterSizeHover = d.css("font-size").replace(/px/g, ""), b.characterFontHover = d.css("font-family").replace(/'/g, ""), b.characterColorHover = RGBToHex(d.css("color")), b.characterBgColorHover = RGBToHex(d.css("background-color"), ""), b.characterWeightHover = d.css("font-weight"), "400" == b.characterWeightHover && (b.characterWeightHover = "normal")), JSON.stringify(b)
	}, a.thumbset = function (a, d, e) {
		var f, g, h, j;
		d.replace(/Img/g, "Hover"), g = $("#sc" + a + "_ho1"), h = g.html(), f = "" == h ? $.extend({}, b.appConfig["jfsb"][1].tOtherSetConfig, b.qssetConfig) : JSON.parse(h), j = $("#sliderSwitch").val(), f.characterContent = $("#sc" + a + "smallCharacterContent").val(), f.characterContentHover = $("#sc" + a + "smallCharacterContent1").val(), f.appID = e, f.attachIndex = a, c.tDialogOther("thumbset.php?sliderSwitch=" + j, "缩略图高级设置", f, function (b) {
			$("#oths_tForm").data("submitAction", $.proxy(function () {
				var c = $("#oths_tForm").formToObject();
				$("#sc" + a + "smallCharacterContent").val(c.characterContent), $("#sc" + a + "smallCharacterContent1").val(c.characterContentHover), "text" != c.characterMode ? $("#sc" + a + "smallCharacterContent").addClass("disabled").prop("readonly", !0) : $("#sc" + a + "smallCharacterContent").removeClass("disabled").prop("readonly", !1), "text" != c.characterModeHover ? $("#sc" + a + "smallCharacterContent1").addClass("disabled").prop("readonly", !0) : $("#sc" + a + "smallCharacterContent1").removeClass("disabled").prop("readonly", !1), g.html(JSON.stringify(c)), b.dialog("close"), $("#contentPage").children("a.on").trigger("click")
			}, this)).submit()
		}, function (a) {
			g.html(""), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
		})
	}, a.thumbcircleset = function (a) {
		var e, g, h, f = $("#sc" + a + "_ho2");
		_smallCircleBgColor = $("#sc" + a + "smallCircleBgColor"), _smallCircleBgColor1 = $("#sc" + a + "smallCircleBgColor1"), g = f.html(), e = "" == g ? $.extend({}, b.appConfig["jfsb"][1].tOtherSetConfig1) : JSON.parse(g), e.characterBgColor = _smallCircleBgColor.val(), e.characterBgColorHover = _smallCircleBgColor1.val(), "" != _smallCircleBgColor1.val() && (e.characterHoverMode = "on"), h = $("#sliderSwitch").val(), c.tDialogOther("thumbcircleset.php?sliderSwitch=" + h, "圆点高级设置", e, function (a) {
			$("#oths_tForm").data("submitAction", $.proxy(function () {
				var b = $("#oths_tForm").formToObject();
				_smallCircleBgColor.val(b.characterBgColor), _smallCircleBgColor1.val(b.characterBgColorHover), f.html(JSON.stringify(b)), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
			}, this)).submit()
		}, function (a) {
			f.html(""), _smallCircleBgColor.val(""), _smallCircleBgColor1.val(""), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
		})
	}, a.uploadpic = function (a, c, d) {
		var e = require("scripts/tAjax");
		if (d = d || "tb_uploadpic", $("#header").attr("data-purl", d), $("#header").attr("data-on", a || ""), $("#header").attr("data-oi", c || ""), $("#uploadPicDialog").length < 1) $('<div id="uploadPicDialog"></div>').appendTo(b.b);
		else if ($("#header").attr("data-purl") == d) return $("#uploadPicDialog").dialog("open"), !1;
		$("#uploadPicDialog").dialog({
			resizable: !1,
			modal: !0,
			width: 820,
			height: 615,
			title: "图片选择",
			buttons: {
				"确定": function () {
					var c, d, e;
					"2" != $("#picSearch").attr("data-tabindex") ? (c = $("#picBox").children(".picElement.selected"), d = "", $("#appTabs").length > 0 && (c = $("#appTabs").find(".picElement.selected")), c.length > 0 ? (d = (c.children(".img-container").children("img").attr("src") || "").replace(/_80x80.jpg/g, ""), othsId1 = $("#header").attr("data-oi"), othsId1 && "" != othsId1 ? $("#" + othsId1).val(d) : $("input[name='" + $("#header").attr("data-on") + "']").val(d), $(this).dialog("close"), $(".ui-tooltip").hide()) : b.tMessage("请选择图片后确定！")) : (d = "", e = $("#getitempicforsize").val(), $("#getitempicforchoose").find("span.active").length > 0 ? (d = $("#getitempicforchoose").find("span.active").children("img").attr("src") || "", othsId1 = $("#header").attr("data-oi"), "" != e && (d += "_" + e + "x" + e + ".jpg"), othsId1 && "" != othsId1 ? $("#" + othsId1).val(d) : $("input[name='" + $("#header").attr("data-on") + "']").val(d), $(this).dialog("close"), $(".ui-tooltip").hide()) : b.tMessage("请选择图片后确定！"))
				},
				"取消": function () {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), d && "setItemPic" == d ? e.ajaxHtml("setItemPic.php", {
			name: a,
			inputId: c
		}, function (a) {
			$("#uploadPicDialog").html(a).dialog("open")
		}) : e.ajaxHtml("taobaoapp/tb_uploadpic.php", {
			name: a,
			inputId: c
		}, function (a) {
			$("#uploadPicDialog").html(a).dialog("open")
		})
	}, a.setitempic = function (b, c) {
		a.uploadpic(b, c, "setItemPic")
	}, a.sharecode = function (c, d) {
		var g, h, i, j, k, e = $("#june"),
			f = d;
		$("#junebox").scrollTop(0).scrollLeft(0), b.tLoading(!0), "rePair" != c ? b.tUserLogin && "" != b.tUserName ? (b.insertID && "" != b.insertID && (b.tLoading(!1), b.tMessage('分享成功, 您的作品地址为: <a class="june-preview" href="http://cnzoom.com/3.0/previewFx/' + b.insertID + '.php" target="_blank">http://cnzoom.com/3.0/previewFx/' + b.insertID + ".php</a>,您可以将此地址发给您的好友！")), $.post("getsnap.php", {
			userName: b.tUserName,
			ID: b.insertID
		}, function (a) {
			b.insertID && "" != b.insertID || (b.tLoading(!1), b.tMessage(a[1])), $(f.target).css("visibility", "hidden")
		}, "json")) : $.ajax({
			url: "/3.0/insertcode.php",
			type: "POST",
			data: {
				code: $("#codeText").val(),
				username: b.tUserName,
				shareType: 1
			},
			success: function (a) {
				a ? (b.tLoading(!1), b.tMessage('分享成功, 您的作品地址为: <a class="june-preview" href="http://cnzoom.com/3.0/previewFx/' + a + '.php" target="_blank">http://cnzoom.com/3.0/previewFx/' + a + ".php</a>,您可以将此地址发给您的好友！"), $.post("getsnap.php", {
					userName: b.tUserName,
					ID: a
				}, function () {
					$(f.target).css("visibility", "hidden")
				}, "json")) : b.tMessage("分享失败,请登录后重试！"), b.tLoading(!1)
			}
		}) : (e.css("position", "fixed"), g = e.offset().top, h = e.offset().left, i = {}, j = e.css("backgroundImage").replace(/^url|[\(\"\)]*/g, ""), checkUrl(j) && (i.top = g, i.left = h, i.right = h + e.width(), i.bottom = g + e.height()), e.find(".t-app, .t-app-child").each(function () {
			var d, e, a = $(this),
				c = a.offset();
			c && !a.is(":hidden") && "jspbChild" != a.attr("data-attachType") && (d = c.left + a.width(), e = c.top + a.height(), (!i.left && 0 != i.left || c.left < i.left) && (i.left = c.left), (!i.right || d > i.right) && (i.right = d), (!i.top && 0 != i.top || c.top < i.top) && (i.top = c.top), (!i.bottom || e > i.bottom) && (i.bottom = e, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), a.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.add(a)))
		}), i.left -= h, i.right -= h, i.top -= g, i.bottom -= g, (i.right - i.left) * (i.bottom - i.top) > 2073600 && (i.bottom = i.top + 1080), (i.right - i.left) * (i.bottom - i.top) > 2073600 && (i.right = i.left + 1920), i.left < 0 && (i.left = 0), i.top < 0 && (i.top = 0), i.right > e.width() && (i.right = e.width()), i.bottom > e.height() && (i.bottom = e.height()), i.width = i.right - i.left, i.height = i.bottom - i.top, k = window.location.hash.replace("#", ""), "" != k && "i" == k.substr(0, 1) && (k = k.substr(2), e.css("position", "relative"), a.tDialogRepairForm(function (a, c) {
			$.post("getsnap-repair.php", {
				type: "hasImg",
				ttImg: a,
				ID: k,
				newID: b.insertID
			}, function (a) {
				a[0] && (c.dialog("close"), $(".ui-tooltip").hide()), b.tLoading(!1), b.tMessage(a[1]), $(f.target).css("visibility", "hidden")
			}, "json")
		})))
	}, a.downloadcode = function (a) {
		var d, c = $("#" + a).val(),
			e = $("#" + c),
			f = '<!DOCTYPE html><html><head><title>沃姆设计 模板装修辅助工具3.0 方便智能的淘宝装修代码生成工具</title><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="renderer" content="webkit"><link rel="stylesheet" type="text/css" href="http://www.junezx.com/3.0/css/3i.css"><style>.ks-popup-hidden {display:none;}.ks-popup-shown {display:block;}</style></head><body style="overflow-y:scroll;overflow-x:hidden;"><div calss="top"></div><div class="codebox" style="width:100%;margin:0 auto;"><div id="main">' + e.val() + '</div></div><script src="http://g.alicdn.com/kissy/k/1.3.2/seed-min.js"></script><script src="https://g.alicdn.com/shop/wangpu/1.7.5/decoration/init-async-min.js"></script><script type="text/javascript" src="http://www.junezx.com/3.0/js/lib/3b.js"></script><script>var tempSrollNum = Math.abs($(window).width() - $("#main").children("div.rel").width()) / 2;$(window).scrollLeft(tempSrollNum);$("div.codebox").css({"width":$("#main").children("div.rel").width()+"px","margin":"0px auto"});$("#main").children("div.rel").css({	"margin-left":"50%",	"left": "-"+($("#main").children("div.rel").width() / 2)+"px"});$(".jpb").each(function() {	var _t = $(this);	_t.addClass("").attr("style", "z-index:99;display:block;visibility:hidden;");});$(".japb").each(function() {	var _t = $(this);	_t.addClass("").attr("style", "z-index:99;display:block;visibility:hidden;");});$(".jplb").each(function() {	var plHtml = \'<div class="sns-widget sns-comment sns-widget-ui" data-comment="{&quot;param&quot;:{&quot;type_id&quot;:&quot;1100035&quot;,&quot;rec_user_id&quot;:&quot;-1&quot;,&quot;moreurl&quot;:&quot;http://item.taobao.com/item.htm?id=15705806426&quot;,&quot;target_key&quot;:&quot;huodong_35614370&quot;,&quot;title&quot;:&quot;空中红秀阁&quot;,&quot;page_size&quot;:3,&quot;view&quot;:&quot;default_list&quot;},&quot;paramList&quot;:{&quot;view&quot;:&quot;list_trunPage&quot;}}"><div class="comment-widget"><div class="comment-edit">        <div class="comment-add"><div class="textarea-b"><textarea class="f-txt" resize="none" style="" placeholder="我也插句话..."></textarea>        </div><div style="display: none;" class="checkcode sns-nf">        <span>验证码：</span>        <input type="text" style="width: 5em;" tabindex="3" class="f-checkcode" maxlength="4" size="4" name="TPL_checkcode">        <img height="35" width="85" style="vertical-align: middle;">        <span style="margin: 0pt 10px 0pt 0pt;">(不区分大小写)</span>        <a class="newCheckCode" href="#">换一张</a>        </div>        <div class="act">        <span class="skin-blue"><em class="J_LetterCount">0/140</em><span class="btn"><a href="#" class="J_PostComment">评论</a></span></span>        <a href="#" class="face">表情</a>            <label>    <input type="checkbox" class="J_SycMB"> 同时转发到我的淘宝    </label>            </div>        </div></div><ul class="comment-list"></ul></div></div>\';	$(this).html(plHtml);});$(".jib").children().each(function() {	var box = $(this);	box.children().each(function() {		var _t = $(this);		if(_t.attr("data-u") || _t.attr("data-u") == "") {			_t.html(_t.attr("data-u"));		}	})});$(".jnwz").each(function() {	var character = $(this), modeArr, temph, tempharr;	if(character.attr("data-t")) {		modeArr = character.attr("data-t").split(";");		if(modeArr[0] && modeArr[0]!="text") {			temph = character.attr("data-h") || ";";			tempharr = temph.split(";");			character.children("a:eq(0)").html(tempharr[0]);		}		if(modeArr[1] && modeArr[1]!="text") {			temph = character.attr("data-hh") || ";";			tempharr = temph.split(";");			character.children("a:eq(1)").html(tempharr[0]);		}	} });if($("div.jnxfbox").length > 0) {	$("div.jnxfbox").height("100%").css("overflow", "hidden");}</script></script><script type="text/javascript">KISSY.use("dom",function(S,DOM){	S.getScript("http://a.tbcdn.cn/p/snsdk/core.js");S.getScript("http://www.junezx.com/3.0/js/preview/countdown.js?v=11281854");	S.getScript("http://www.junezx.com/3.0/js/preview/preview.js");});</script></body></html>';
		d = "junecode_dsz_" + (new Date).getTime() + "_" + parseInt(99999 * Math.random()) + ".html", export_raw(d, f)
	}, a.tDialogRepairForm = function (a) {
		var c = require("scripts/tAjax"),
			d = "repairForm.php",
			e = {};
		0 == $("#tDialogRepairForm").length && $('<div id="tDialogRepairForm"></div>').appendTo(b.b), $("#tDialogRepairForm").dialog({
			resizable: !1,
			modal: !0,
			width: 520,
			height: 270,
			title: "修复!!!",
			buttons: {
				"修复": function () {
					a($("#i_RepairForm").val(), $(this))
				},
				"取消": function () {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e, function (a) {
			$("#tDialogRepairForm").html(a).dialog("open"), $("#tDialogRepairForm").find("textarea").parent("li").css("height", "auto")
		})
	}, a.savecode = function () {
		$("#save").trigger("click")
	}, a.categorychange = function (a, c) {
		var e = require("scripts/tAjax"),
			f = $("#" + a).val();
		e.ajaxJsonT("gcc.php", {
			url: f
		}, function (a) {
			if (a.ret[0].indexOf("SUCCESS") >= 0) {
				var d = a.data.cats;
				b.tempCatPost = d, $.ajax({
					url: "shopfl3.php",
					type: "POST",
					data: {
						catsPost: d
					},
					success: function (a) {
						$("#" + c).html(a)
					}
				})
			} else b.tMessage("获取店铺分类失败，请更换地址（宝贝详情、店铺首页）重试，如仍然获取失败，请等待20分钟后再次尝试！")
		})
	}, a.zdycontrol = function (a) {
		"4" != a && ($("#mouseaction").children("div:eq(" + a + ")").trigger("click"), ("0" == a || "1" == a || "2" == a) && b.updateCurType())
	}, a.itemtextset = function (a, d, e) {
		var h, f = $("#i_b" + a + "_set"),
			g = f.html(),
			i = $(e.target);
		h = "" == g ? $.extend({}, b.appConfig["jib"][1].tOtherSetConfig) : JSON.parse(g), c.tDialogOther("itemtextset.php", "扩展文字详细设置", h, function (a) {
			$("#oths_tForm").data("submitAction", $.proxy(function () {
				var b = $("#oths_tForm").formToObject();
				f.html(JSON.stringify(b)), i.addClass("itemarrManagerTextSetYes").html("<icon>ꘅ</icon>已设置"), a.dialog("close")
			}, this)).submit()
		}, function (a) {
			$("#oths_tForm").data("submitAction", $.proxy(function () {
				var b = $("#oths_tForm").formToObject();
				$("textarea[name='itemTextSet[]']").html(JSON.stringify(b)), $(".itemarrManagerTextSet").addClass("itemarrManagerTextSetYes").html("<icon>ꘅ</icon>已设置"), a.dialog("close")
			}, this)).submit()
		})
	}, a.itempicajaxselect = function (b, c, d, e, f) {
		var i, g = require("scripts/tAjax"),
			h = $("#hrefVal").val().split(",");
		for (i = 0; i < h.length; i++) i != c && (h[i] = "");
		g.ajaxJson("giiforp.php", {
			item: h,
			random: 1e4 * Math.random()
		}, function (g) {
			var h, i, j, k;
			if ("yes" == g[0]) {
				for (h = 1; h < g.length; h++)
					if (g[h] && g[h]["colorImg"] && "" != g[h]["colorImg"]) {
						for (i = g[h]["colorImg"], $("select.j-src-pos:eq(" + 2 * (h - 1) + ")").append('<optgroup label="宝贝多色图片">'), $("select.j-src-pos:eq(" + (2 * (h - 1) + 1) + ")").append('<optgroup label="宝贝多色图片">'), j = 0; j < i.length; j++) $("select.j-src-pos:eq(" + 2 * (h - 1) + ")").append('<option value="' + (parseInt(i[j].valueId, 10) + 1) + '" >' + i[j].name + "</option>"), $("select.j-src-pos:eq(" + (2 * (h - 1) + 1) + ")").append('<option value="' + (parseInt(i[j].valueId, 10) + 1) + '" >' + i[j].name + "</option>"), g[h][i[j].valueId] = i[j].imgUrl;
						$("select.j-src-pos:eq(" + 2 * (h - 1) + ")").append("</optgroup>"), $("select.j-src-pos:eq(" + (2 * (h - 1) + 1) + ")").append("</optgroup>")
					}
					"" != $("#itemPicTemp1").html() ? (k = JSON.parse($("#itemPicTemp1").html()), k[c + 1] = g[c + 1], $("#itemPicTemp1").html(JSON.stringify(k))) : $("#itemPicTemp1").html(JSON.stringify(g)), e || a.itempicconfigselect(b, c, d, "pt"), f && "function" == typeof f && f()
			}
		}, !0)
	}, a.itempicajaxselect_ppt = function (b, c, d, e, f) {
		var i, g = require("scripts/tAjax"),
			h = $("#hrefVal").val().split(",");
		for (i = 0; i < h.length; i++) i != c && (h[i] = "");
		g.ajaxJson("giiforp_ppt.php", {
			item: h,
			random: 1e4 * Math.random()
		}, function (g) {
			if ("yes" == g[0]) {
				if ("" != $("#itemPicTemp1").html()) {
					var h = JSON.parse($("#itemPicTemp1").html());
					h[c + 1] = g[c + 1], $("#itemPicTemp1").html(JSON.stringify(h))
				} else $("#itemPicTemp1").html(JSON.stringify(g));
				e || a.itempicconfigselect(b, c, d, "ppt"), f && "function" == typeof f && f()
			}
		})
	}, a.itempicconfigselect = function (c, d, e, f) {
		var g = JSON.parse($("#itemPicTemp1").html() || "[]");
		g[d + 1] && g[d + 1][b.tParseInt(c) - 1] ? $("#" + e).val(g[d + 1][b.tParseInt(c) - 1]) : "pt" == f && a.itempicajaxselect(c, d, e, !0)
	}, a.itempiccatchbox = function (a, c, d, e, f) {
		var l, m, n, j = "",
			k = $("input[type='hidden'][name='href']").val().split(","),
			g = $("input[type='radio'][name='itemMode']:checked").val(),
			h = $("#itemPicTemp1");
		for (tVal = h.val(), "ptitem" == g ? j = "giiforp.php" : "pptitem" == g && (j = "giiforp_ppt.php"), l = 0; l < k.length; l++) l != c && (k[l] = "");
		if ($("#itemarrManagerUl").attr("data-sein") != c)
			if ($("#itemarrManagerUl").attr("data-sein", c), "" == h.html() || (m = JSON.parse(h.html()), "" == m[c + 1][0])) _g_qm = !0, f.html('<span class="cipb-bbts"><div style="width:100px;height:100px;margin:0 auto;background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2Gmf5c3JlpuFjSspjXXcT.pXa-39767794.gif) no-repeat center center;"></div></span>'), $.ajax({
				url: j,
				type: "POST",
				dataType: "JSON",
				data: {
					item: k,
					random: 1e4 * Math.random()
				},
				success: function (d) {
					var e, g, i, j, l, k;
					if ("yes" == d[0]) {
						for (_g_qm = !1, e = 1; e < d.length; e++)
							if (d[e] && d[e]["colorImg"] && "" != d[e]["colorImg"])
								for (g = d[e]["colorImg"], i = 0; i < g.length; i++) d[e][g[i].valueId] = g[i].imgUrl;
						if ("" != h.html() ? (j = JSON.parse(h.html()), j[c + 1] = d[c + 1], h.html(JSON.stringify(j))) : h.html(JSON.stringify(d)), k = JSON.parse($("#itemPicTemp1").html() || "[]"), k[c + 1]) {
							f.html('<span class="cipb-bbzt">宝贝主图</span><span class="cipb-bbds" style="display:none;"></span>');
							for (i in k[c + 1]) l = b.tParseInt(a) - 1 == i ? ' class="active"' : "", "colorImg" != i && (4 >= i ? "" != k[c + 1][i] && checkUrl(k[c + 1][i]) && f.children(".cipb-bbds").before("<img" + l + ' data-val="' + i + '" src="' + k[c + 1][i] + '"/>') : (f.children(".cipb-bbds").is(":hidden") && f.children(".cipb-bbds").show(), "" != k[c + 1][i] && checkUrl(k[c + 1][i]) && f.append("<img" + l + ' data-val="' + i + '" src="' + k[c + 1][i] + '"/>')))
						}
					}
				}
			});
			else {
				f.html('<span class="cipb-bbzt">宝贝主图</span><span class="cipb-bbds" style="display:none;"></span>');
				for (n in m[c + 1]) boxActiveStr = b.tParseInt(a) - 1 == n ? ' class="active"' : "", "colorImg" != n && (4 >= n ? "" != m[c + 1][n] && checkUrl(m[c + 1][n]) && f.children(".cipb-bbds").before("<img" + boxActiveStr + ' data-val="' + n + '" src="' + m[c + 1][n] + '"/>') : (f.children(".cipb-bbds").is(":hidden") && f.children(".cipb-bbds").show(), "" != m[c + 1][n] && checkUrl(m[c + 1][n]) && f.append("<img" + boxActiveStr + ' data-val="' + n + '" src="' + m[c + 1][n] + '"/>')))
			}
	}, a.qsset = function (a, d, e) {
		var f, g, h, i, j;
		g = $("#" + a), h = g.html(), f = "" == h ? $.extend({}, b.qssetConfig) : JSON.parse(h), i = $("#" + d), j = i.val(), "" != j && (f.characterContentHover == f.characterContent && (f.characterContentHover = j), f.characterContent = j), f.appID = e, c.tDialogOther("allwzset.php", "文字设置", f, function (a) {
			$("#allwzset_tForm").data("submitAction", $.proxy(function () {
				var b = $("#allwzset_tForm").formToObject();
				g.html(JSON.stringify(b)), i && i.length > 0 && (i.val(b.characterContent), "text" != b.characterMode ? i.addClass("disabled").prop("readonly", !0) : i.removeClass("disabled").prop("readonly", !1)), a.dialog("close")
			}, this)).submit()
		}, function (a) {
			g.html(""), a.dialog("close")
		})
	}, a.click = function (c, d) {
		var f, g, h, i, e = d.split(";");
		e[0] && (f = e[0]), e[1] && (g = e[1]), e[2] && (h = e[2]), e[3] && (i = e[3]), b.codeIm($.proxy(function () {
			"thumbset" == f ? a.thumbset(h, g, i) : /*"sharecode" == f ? a.sharecode(g, c) :*/ "downloadcode" == f ? a.downloadcode(g, c) : "savecode" == f ? a.savecode(g) : "categorychange" == f ? a.categorychange(g, h, i) : "zdycontrol" == f ? a.zdycontrol(g) : "itemtextset" == f ? a.itemtextset(h, g, c) : "thumbcircleset" == f ? a.thumbcircleset(h, g) : "qsset" == f ? a.qsset(g, h, i) : "uploadpic" == f ? a.uploadpic(g, h) : "setitempic" == f && a.setitempic(g, h)
		}, this))
	}, a
}), define("scripts/inputFilter.js", function (a) {
	var b = require("scripts/D");
	return a.filterTextarea = function (a) {
		var d, c = a.find("textarea");
		c.length > 0 && c.each(function () {
			var f, a = $(this),
				c = a.val(),
				e = !1,
				g = [],
				h = [];
			c = c.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), "" != c && (c = c.replace(/(\<div\s*class\=\"rel\"\s*data-title\=\"([^\"]*)\"\s*style\=\"([^\"]*)\"(\s*data-rn\=\"([^\"]*)\")?)/g, function (a, c, g, h, i, j) {
				var k = a;
				return k = k.replace(/margin([^\;]*)\;/g, ""), k = k.replace(/left([^\;]*)\;/g, ""), k = k.replace(/margin([^\;]*)\"/g, '"'), k = k.replace(/left([^\;]*)\"/g, '"'), j && (d || (d = j), e = !0, d && e && (f = "a" + b.getRandom(), k = k.replace(new RegExp(d, "g"), f))), k
			}), d && e && (c = c.replace(/a[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}(?=(\"|\s|\'))/g, function (a) {
				var c = a,
					d = $.inArray(c, g);
				return 0 > d ? (g.push(c), c = "a" + b.getRandom() + "-" + b.getRandom(), h.push(c)) : c = h[d], c
			})), a.val(c))
		})
	}, a.filterImportCode = function (c) {
		var f, g, d = [],
			e = [];
		return c = c.replace(/a[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}(?=(\"|\s|\'))/g, function (a) {
			var c = a,
				f = $.inArray(c, d);
			return 0 > f ? (d.push(c), c = "a" + b.getRandom() + "-" + b.getRandom(), e.push(c)) : c = e[f], c
		}), f = [], g = [], c = c.replace(/app[0-9]{8}-[0-9]{4}(?=(\"|\s|\'))/g, function (a) {
			var c = a,
				d = $.inArray(c, f);
			return 0 > d ? (f.push(c), c = "a" + b.getRandom() + "-" + b.getRandom(), g.push(c)) : c = g[d], c
		}), a.filterHeightCode(c), c
	}, a.filterHeightCode = function () {
		var c = 0;
		b.june.children().each(function () {
			var a = $(this),
				d = b.tParseInt(a.css("top")) + a.height();
			d > c && (c = d)
		}), b.addImportHeight = c
	}, a
}), define("scripts/checkHash.js", function (a) {
	var b = require("scripts/D");
	return a.start = function () {
		var c, a = window.location.hash.replace("#", "");
		"" != a && ("i" == a.substr(0, 1) ? (a = a.substr(2), c = "genList") : (a = a.substr(2), c = "saveList"), "" != a && $.ajax({
			url: "/3.0/useCode.php",
			type: "POST",
			data: {
				type: c,
				ID: a
			},
			dataType: "json",
			success: function (a) {
				a.length > 0 && ("saveList" == c ? b["c"]($.proxy(function () {
					var b = require("scripts/moduleManage");
					b.showSave(a[0])
				}, this)) : b.codeIm($.proxy(function () {
					var b = require("scripts/code");
					b.codeImportDialogCode(a[0])
				}, this)))
			}
		}))
	}, a
}), define("scripts/reckonAlign.js", function (a) {
	var b = require("scripts/D");
	return a.get = function (a, c, d, e) {
		!$.isNumeric(c) && (c = 0);
		var f = b.tParseInt(c) / 2;
		return "yes" == a ? d > e ? "left" : "right" : f > d ? "left" : "right"
	}, a
}), define("scripts/layouttest.js", function (a) {
	return a.get = function (a) {
		var b = require("scripts/code");
		return b.codeImportDialogCode(a), b
	}, a
}),

 define("scripts/appLoginCheck.js", function (a) {
	var b = require("scripts/D");  
	return a.click = function (a) {
		"jfybxxx" == b.actType ? b.tUserLogin && "" != b.tUserName ? a() : b.tMessage("请先登录后再使用此功能！") : a()
	}, a
}), 

 define("scripts/tDateDay.js", function (a) {
	var b = require("scripts/D");
	return a.click = function (a) {
		var d, c = (new Date).Format("MM-dd", 0);
		"13-0123" == c ? (tDateDay0401 = $.cookie("tDateDay0401"), tDateDay0401 && "true" == tDateDay0401 ? a() : ($.cookie("tDateDay0401", "true"), b.tMessage("哎呀，白做了！特效做的辣么强大，系统崩溃了好么! o(>﹏<)o ", "callback", function () {
			a(), b.june.show(), setTimeout(function () {
				b.tMessage("嘎嘎，吓你的！ 愚悦地继续使用吧，骚年 O(∩_∩)O。<br /><br /><br />亲，愚人节快乐！ ")
			}, 1e3), clearTimeout(d)
		}), b.june.hide(), d = setTimeout(function () {
			a(), b.june.show(), setTimeout(function () {
				b.tMessage("嘎嘎，吓你的！ 愚悦地继续使用吧，骚年 O(∩_∩)O。<br /><br /><br />亲，愚人节快乐！ ")
			}, 1e3)
		}, 1e4))) : ($.removeCookie("tDateDay0401"), a())
	}, a
}), define("scripts/saveChoose.js", function (a) {
	return a.click = function (a, b) {
		var c = require("scripts/D"),
			d = require("scripts/moduleManage"),
			e = require("scripts/tAjax");
		null != c.openSaveDocName ? c.tConfirm("您在" + c.openSaveDocTime + "已经保存了一份名为 <strong>" + c.openSaveDocName + "</strong> 的存档，您可以选择以下操作：", function () {
			c.tLoading(!0), d.snapSave(function (b) {
				var f = {},
					g = $("#savetree").attr("data-curfid") || "0";
				f.actionCollection = c.juneSnapArray1, f.actionConfig = b, c.tLoading(!0), e.ajaxJsonS("save.php", {
					saveName: c.openSaveDocName,
					sasID: c.openSaveDocID,
					folderID: g,
					userName: a[1],
					type: "cover",
					saveObj: f
				}, function (a) {
					c.tLoading(!0), c.tLoading(!1), c.tMessage(a[1]), a[3] && (c.openSaveDocTime = a[3]), d.getSave([c.tUserLogin, c.tUserName])
				})
			})
		}, function () {
			b(a)
		}, ["覆盖保存", "另存为"]) : b(a)
	}, a
}), define("scripts/pencil.js", function (a) {
	var b = require("scripts/D"),
		c = require("scripts/action"),
		d = require("scripts/layer"),
		e = b.appConfig;
	return $(".junesetpanel"), b.pencilLine = null, b.pencilStartTime = null, b.pencilTime = 0, b.pencilAdd = !1, b.pencilEdit = !1, a.move = function (a) {
		if (b.pencilLine && b.pencilStartX && b.pencilStartY) {
			var o, p, q, d = b.pencilLine,
				e = b.pencilStartX,
				f = b.pencilStartY,
				g = a.pageX + b.junebox.scrollLeft(),
				h = a.pageY + b.junebox.scrollTop(),
				i = b.june.width() + _g_offsleft,
				j = b.june.height() + _g_offstop,
				k = b.junebox.offset().left + b.junebox.width(),
				l = b.junebox.offset().top + b.junebox.height(),
				m = JSON.parse(d.attr("data-config") || '{lineColor: "#FF0000",lineStyle: "solid",lineOpacity: "100",lineWidth: "1"}'),
				n = b.june.offset(),
				r = !1,
				s = !1;
			"" == m.lineWidth && (m.lineWidth = 1), e > g && (q = g, g = e, e = q, r = !0), f > h && (q = h, h = f, f = q, s = !0), b.appOverSwitch || (_g_offsleft > e && (e = _g_offsleft), _g_offstop > f && (f = _g_offstop), g > i && (g = i), h > j && (h = j)), o = Math.abs(g - e), p = Math.abs(h - f), a.pageX > k - 15 && a.pageX < k && b.junebox.scrollLeft(b.junebox.scrollLeft() + 10), a.pageX < b.junebox.offset().left + 15 && a.pageX > b.junebox.offset().left && b.junebox.scrollLeft(b.junebox.scrollLeft() - 10), a.pageY > l - 15 && a.pageY < l && b.junebox.scrollTop(b.junebox.scrollTop() + 10), a.pageY < b.junebox.offset().top + 15 && a.pageY > b.junebox.offset().top && b.junebox.scrollTop(b.junebox.scrollTop() - 10), p > o ? (d.children(".pencilAssist").width(b.june.width()).height(1).offset({
				left: n.left
			}), d.offset({
				left: b.pencilStartX - b.junebox.scrollLeft(),
				top: f - b.junebox.scrollTop()
			}).height(p).width(1).css({
				border: "none",
				borderLeft: m.lineWidth + "px " + m.lineStyle + " " + m.lineColor
			}), s ? d.children(".pencilAssist").css({
				top: "0",
				bottom: "auto",
				borderTop: "1px dashed #60c9da",
				borderBottom: "none"
			}) : d.children(".pencilAssist").css({
				top: "auto",
				bottom: "0",
				borderTop: "none",
				borderBottom: "1px dashed #60c9da"
			}), d.children(".pencilLength").addClass("pl2").removeClass("pl1").height(p).width(24).css("line-height", p + "px"), d.children(".pencilLength").children(".nline").html(p), d.children(".pencilLength").children(".lline").height(d.children(".pencilLength").height() / 2 - 12 > 0 ? d.children(".pencilLength").height() / 2 - 12 : 0), d.children(".pencilLength").children(".rline").height(d.children(".pencilLength").height() / 2 - 12 > 0 ? d.children(".pencilLength").height() / 2 - 12 : 0), d.children(".pencilCoordinatesStart").html("(" + (b.pencilStartX - _g_offsleft) + "," + (f - _g_offstop) + ")"), d.children(".pencilCoordinatesEnd").html("(" + (b.pencilStartX - _g_offsleft) + "," + (f + p - _g_offstop) + ")"), d.children(".pencilPointer1").css({
				top: -12,
				left: "auto",
				right: "auto",
				bottom: "auto"
			}), d.children(".pencilPointer2").css({
				top: "auto",
				left: "auto",
				right: "auto",
				bottom: -2
			}), d.attr("data-d", "ns").addClass("pl-ns").removeClass("pl-we"), d.children(".pencilPointer").children("img").attr("src", "http://a.tbcdn.cn/s.gif").attr("height", "25").css("cursor", "ns-resize"), b.pencilNum = p, d.attr("data-lineLength", p), $("#pencilLength").val(p)) : (d.children(".pencilAssist").width(1).height(b.june.height()).offset({
				top: n.top
			}), d.offset({
				left: e - b.junebox.scrollLeft(),
				top: b.pencilStartY - b.junebox.scrollTop()
			}).width(o).height(1).css({
				border: "none",
				borderTop: m.lineWidth + "px " + m.lineStyle + " " + m.lineColor
			}), r ? d.children(".pencilAssist").css({
				left: "0",
				right: "auto",
				borderLeft: "1px dashed #60c9da",
				borderRight: "none"
			}) : d.children(".pencilAssist").css({
				left: "auto",
				right: "0",
				borderLeft: "none",
				borderRight: "1px dashed #60c9da"
			}), d.children(".pencilLength").addClass("pl1").removeClass("pl2").width(o).height(24).css("line-height", "24px"), d.children(".pencilLength").children(".nline").html(o), d.children(".pencilLength").children(".lline").height(24), d.children(".pencilLength").children(".rline").height(24), d.children(".pencilCoordinatesStart").html("(" + (e - _g_offsleft) + "," + (b.pencilStartY - _g_offstop) + ")"), d.children(".pencilCoordinatesEnd").html("(" + (e + o - _g_offsleft) + "," + (b.pencilStartY - _g_offstop) + ")"), d.children(".pencilPointer1").css({
				top: "auto",
				left: -12,
				right: "auto",
				bottom: "auto"
			}), d.children(".pencilPointer2").css({
				top: "auto",
				left: "auto",
				right: -2,
				bottom: "auto"
			}), d.attr("data-d", "we").removeClass("pl-ns").addClass("pl-we"), d.children(".pencilPointer").children("img").attr("src", "http://a.tbcdn.cn/s.gif").attr("height", "15").css("cursor", "ew-resize"), b.pencilNum = o, d.attr("data-lineLength", o), $("#pencilLength").val(o)), $("#pencilLeft").val(b.tParseInt(d.css("left"))), $("#pencilTop").val(b.tParseInt(d.css("top")))
		}
	}, a.Start = function (a) {
		var d = ($(a.target), null),
			f = $.extend({}, e.jllb[2]);
		("june" == a.target.id || "zdybox" == a.target.id || $(a.target).hasClass("junehtml") || $(a.target).hasClass(b.dragNaClsVal) || $(a.target).hasClass(b.dragNaClsVal1)) && 0 == b.pencilTime && (b.pencilAdd = !0, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected"), b.pencilTime = 0, b.pencilNum = 0, b.pencilStartX = a.pageX + b.junebox.scrollLeft(), b.pencilStartY = a.pageY + b.junebox.scrollTop(), b.pencilLine = $(b.appConfig.jllb[0]), d = b.setAppID(f), b.pencilLine.attr("appID", d).css({
			borderWidth: f.lineWidth,
			borderColor: f.lineColor,
			opacity: f.lineOpacity / 100,
			borderStyle: f.lineStyle
		}).appendTo(b.june).attr("data-config", JSON.stringify(f)).offset({
			left: b.pencilStartX - b.junebox.scrollLeft(),
			top: b.pencilStartY - b.junebox.scrollTop()
		}), b.pencilLine.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.pencilLine))
	}, a.Ing = function (c) {
		b.pencilAdd && b.pencilLine && a.move(c)
	}, a.End = function () {
		var c;
		b.pencilAdd && (b.pencilNum > 10 && b.pencilTime++, b.pencilTime > 0 ? (b.pencilStartX = null, b.pencilStartY = null, b.pencilTime = 0, c = b.pencilLine.attr("appID"), b.createAppName("jllb", c), d.createLayer("jllb", c), b.pencilAdd = !1, b.pencilLine = null) : b.pencilTime++)
	}, a.eidtStart = function (a) {
		var c, d, e, f, g, h;
		if (!(b.pencilAdd || b.pencilTime > 0) && (c = $(a.target), d = null, c.hasClass("pencilPointer") || c.parent().hasClass("pencilPointer"))) {
			if (b.pencilEdit = !0, d = c.parent(), c.parent().hasClass("pencilPointer") && (d = c.parent().parent()), b.pencilLine = d, b.pencilLine.hasClass(b.dragNaClsVal)) return;
			b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.pencilLine.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.pencilLine), e = b.pencilLine.offset().left, f = b.pencilLine.offset().top, g = b.pencilLine.width(), h = b.pencilLine.height(), "ns" == b.pencilLine.attr("data-d") ? ((c.hasClass("pencilPointer1") || c.parent().hasClass("pencilPointer1")) && (b.pencilStartX = e + b.junebox.scrollLeft(), b.pencilStartY = f + b.junebox.scrollTop() + h), (c.hasClass("pencilPointer2") || c.parent().hasClass("pencilPointer2")) && (b.pencilStartX = e + b.junebox.scrollLeft(), b.pencilStartY = f + b.junebox.scrollTop())) : ((c.hasClass("pencilPointer1") || c.parent().hasClass("pencilPointer1")) && (b.pencilStartX = e + b.junebox.scrollLeft() + g, b.pencilStartY = f + b.junebox.scrollTop()), (c.hasClass("pencilPointer2") || c.parent().hasClass("pencilPointer2")) && (b.pencilStartX = e + b.junebox.scrollLeft(), b.pencilStartY = f + b.junebox.scrollTop()))
		}
	}, a.eidtIng = function (c) {
		if (!b.pencilAdd && b.pencilLine) {
			if (b.pencilLine.hasClass(b.dragNaClsVal)) return;
			a.move(c)
		}
	}, a.editEnd = function () {
		b.pencilAdd || (b.pencilLine && c.create("drawPencil", b.pencilLine), b.pencilEdit = !1, b.pencilStartX = null, b.pencilStartY = null, b.pencilLine = null)
	}, a._import = function (a) {
		var e, f, g, h, i, j, k, l, c = a.attr("data-pts") || "",
			d = [];
		d = c.split(";"), e = d[0], f = RGBToHex(d[1]), g = d[2] || "100", h = d[3] || "solid", i = b.tParseInt(a.css("top")), j = b.tParseInt(a.css("left")), k = a.width(), l = a.height(), b.pencilLine = $('<div class="t-pencilLine pencilLineCreate"><div class="pencilLength"><span class="lline"></span><span class="nline">0</span><span class="rline"></span></div><div class="pencilBox"></div><span class="pencilCoordinatesStart">0</span><span class="pencilCoordinatesEnd">0</span><span class="pencilAssist" style="position:absolute;"></span><span class="pencilPointer pencilPointer1"><img height="15" src="http://a.tbcdn.cn/s.gif"/></span><span class="pencilPointer pencilPointer2"><img height="15" src="http://a.tbcdn.cn/s.gif"/></span><span class="pencilCloseBtn"></span></div>').css({
			borderWidth: e,
			borderColor: RGBToHex(f, "#ff0044"),
			opacity: g / 100,
			borderStyle: config.lineStyle,
			top: a.css("top"),
			left: a.css("left"),
			width: a.css("width"),
			height: a.css("height")
		}).attr("data-pts", e + ";" + RGBToHex(f, "#ff0044") + ";" + g + ";" + config.lineStyle).attr("data-d", a.attr("data-d") || "we").appendTo(b.june), b.pencilLine.addClass("ui-selected"), "we" == b.pencilLine.attr("data-d") ? (b.pencilLine.css({
			border: "none",
			borderTop: e + "px " + h + " " + RGBToHex(f, "#ff0044")
		}), b.pencilLine.children(".pencilAssist").offset({
			top: b.june.offset().top
		}).width(1).height(b.june.height()), b.pencilLine.children(".pencilCoordinatesStart").html("(" + j + "," + i + ")"), b.pencilLine.children(".pencilCoordinatesEnd").html("(" + (j + k) + "," + i + ")"), b.pencilLine.children(".pencilAssist").css({
			left: "auto",
			right: "0",
			borderLeft: "none",
			borderRight: "1px dashed #60c9da"
		}), b.pencilLine.children(".pencilLength").addClass("pl1").removeClass("pl2").width(k).height(24).css("line-height", "24px"), b.pencilLine.children(".pencilLength").children(".nline").html(k), b.pencilLine.children(".pencilLength").children(".lline").height(24), b.pencilLine.children(".pencilLength").children(".rline").height(24), b.pencilLine.children(".pencilPointer1").css({
			top: "auto",
			left: -12,
			right: "auto",
			bottom: "auto"
		}), b.pencilLine.children(".pencilPointer2").css({
			top: "auto",
			left: "auto",
			right: 0,
			bottom: "auto"
		}), b.pencilLine.removeClass("pl-ns").addClass("pl-we"), b.pencilLine.children(".pencilPointer").children("img").attr("src", "http://a.tbcdn.cn/s.gif").attr("height", "15").css("cursor", "ew-resize"), $("#pencilLength").val(k), b.pencilLine.attr("data-lineLength", k)) : (b.pencilLine.css({
			border: "none",
			borderLeft: e + "px " + h + " " + RGBToHex(f, "#ff0044")
		}), b.pencilLine.children(".pencilAssist").offset({
			left: b.june.offset().left
		}).width(b.june.width()).height(1), b.pencilLine.children(".pencilCoordinatesStart").html("(" + j + "," + i + ")"), b.pencilLine.children(".pencilCoordinatesEnd").html("(" + j + "," + (i + l) + ")"), b.pencilLine.children(".pencilAssist").css({
			top: "auto",
			bottom: "0",
			borderTop: "none",
			borderBottom: "1px dashed #60c9da"
		}), b.pencilLine.children(".pencilLength").addClass("pl2").removeClass("pl1").height(l).width(24).css("line-height", l + "px"), b.pencilLine.children(".pencilLength").children(".nline").html(l), b.pencilLine.children(".pencilLength").children(".lline").height(b.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? b.pencilLine.children(".pencilLength").height() / 2 - 12 : 0), b.pencilLine.children(".pencilLength").children(".rline").height(b.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? b.pencilLine.children(".pencilLength").height() / 2 - 12 : 0), b.pencilLine.children(".pencilPointer1").css({
			top: -12,
			left: "auto",
			right: "auto",
			bottom: "auto"
		}), b.pencilLine.children(".pencilPointer2").css({
			top: "auto",
			left: "auto",
			right: "auto",
			bottom: 0
		}), b.pencilLine.addClass("pl-ns").removeClass("pl-we"), b.pencilLine.children(".pencilPointer").children("img").attr("src", "http://a.tbcdn.cn/s.gif").attr("height", "25").css("cursor", "ns-resize"), $("#pencilLength").val(l), b.pencilLine.attr("data-lineLength", l)), b.june.children(".t-pencilLine").removeClass(b.selectedVal).removeClass("pencilLineCreate").addClass("pencilLinePause"), b.pencilLine = null, b.pencilTime = 1, $("#mouseaction").children(":eq(0)").trigger("click")
	}, a
});
