function messageForPhp(a, b, c) {
	var d = require("scripts/D");
	$("#tMessage").length <= 0 && $(d.message).appendTo(d.b), $("#tMessage").dialog({
		autoOpen: !1,
		width: 400,
		modal: !0,
		title: "提示",
		close: function() {
			"login" == b ? $("#login").trigger("click") : "module" == b ? ($(".shezhi").trigger("click"), $("#moduleHeight").trigger("focus")) : "callback" == b && c()
		},
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		}
	}).html(a).dialog("open")
}
function submitColor(a, b, c) {
	"" != b ? a.css("background-color", b) : c && "" != c ? a.css("background-color", c) : a.css("background-color", "transparent")
}
function tnaCheck(a) {
	return "noagain" == $.cookie(a) ? !0 : !1
}
function tnaCheckCookie(a, b) {
	b ? $.cookie(a, "again") : $.cookie(a, "noagain")
}
define("scripts/little.js", function(a) {
	var c, d, e, f, g, h, i, b = require("scripts/D");
	return b.littleDom = '<div id="tLittle" style="position:absolute;z-index:1002;"><span class="component"><i>X:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom1" /></span><span class="component"><i>Y:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom2" /></span><span class="component"><i>宽:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom3" /></span><span class="component"><i>高:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom4"/ ></span><span id="tLittleComOk">&nbsp;&nbsp;&nbsp;&nbsp;</span>', $(b.littleDom).appendTo(b.b).hide(), c = $("#tLittle"), d = $("#tLittleCom1"), e = $("#tLittleCom2"), f = $("#tLittleCom3"), g = $("#tLittleCom4"), tLittleComOk = $("#tLittleComOk"), i = !1, a.create = function(a, j) {
		var m, n, k = j.attr("data-dblType"),
			l = j.hasClass(b.resizeNaClsVal);
		childClass = j.hasClass(b.appChildClsVal), "jib" != k ? (m = {}, n = {}, m.left = b.tParseInt(j.css("left")), m.top = b.tParseInt(j.css("top")), m.width = j.width(), m.height = j.height(), n = childClass ? b.setChildPos(j.parent(), j) : m, c.is(":hidden") ? (d.is(":focus") || d.val(m.left), e.is(":focus") || e.val(m.top), f.is(":focus") || f.val(m.width), g.is(":focus") || g.val(m.height), i = !1) : i || (d.is(":focus") || d.val(m.left), e.is(":focus") || e.val(m.top), f.is(":focus") || f.val(m.width), g.is(":focus") || g.val(m.height)), f.parent().show(), g.parent().show(), (l || "jadb" == k) && (f.parent().hide(), g.parent().hide()), h = j, c.css({
			top: n.top + n.height + 0 + b.offstop - b.junebox.scrollTop(),
			left: n.left + b.offsleft - b.junebox.scrollLeft()
		}), "show" == a ? c.show() : c.hide()) : c.hide()
	}, b.endParse = !1, a.click = function() {
		if (h) {
			var c = b.tParseInt($(this).val()) || 0,
				d = $(this).parent().index();
			switch (d) {
			case 0:
				h.css("left", c);
				break;
			case 1:
				h.css("top", c);
				break;
			case 2:
				h.width(c);
				break;
			case 3:
				h.height(c)
			}
		}
		h = null
	}, a.clickAll = function() {
		if (h) {
			var c = b.tParseInt(d.val()) || 0,
				j = b.tParseInt(e.val()) || 0,
				k = b.tParseInt(f.val()) || 0,
				l = b.tParseInt(g.val()) || 0;
			h.css({
				left: c,
				top: j,
				width: k,
				height: l
			}), i = !1
		}
		h = null
	}, c.on("keyup.little", "input", function(b) {
		var c = b.keyCode || b.which;
		13 == c && a.clickAll(b)
	}), c.on("change.little", "input", function() {
		i = !0
	}), tLittleComOk.on("click", a.clickAll), a
}), define("scripts/courseStep.js", function(a) {
	var d, e, f, b = require("scripts/D"),
		c = require("scripts/code");
	return tnaCheck("junezx_tna_cs1") || $("#courseStep1").show(), d = null, $("#makecode").on("mouseenter", function() {
		$("#makeChooseCode").css({
			top: 48
		}).show()
	}), $("#makecode").on("mouseleave", function() {
		d = setTimeout(function() {
			$("#makeChooseCode").css({
				top: 10
			}).hide()
		}, 2e3)
	}), $("#makeChooseCode").on("mouseenter", function() {
		clearTimeout(d), d = null
	}), $("#makeChooseCode").on("mouseleave", function() {
		$("#makeChooseCode").css({
			top: 10
		}).hide()
	}), 0 == $("#jSetSaveTip").length && ($('<div id="jSetSaveTip"><div id="jSetSaveTipClose"></div><div id="jSetSaveTipText"></div><div id="jSetSaveTipBtn"><div class="tnaCheck tna-checkin" id="jSetSaveTipCheckBtn" data-tna="junezx_tna_setsavetip" style="right: 20px;"><img src="http://img02.taobaocdn.com/imgextra/i2/39767794/TB2U_WFcpXXXXXPXXXXXXXXXXXX-39767794.png"><img class="checkin" src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB26r1GcpXXXXXDXXXXXXXXXXXX-39767794.png"></div></div></div>').appendTo(b.b), $("#jSetSaveTipClose").on("click", function() {
		$("#jSetSaveTip").slideUp(1e3)
	})), b.loadCourseStep || (b.loadCourseStep = !0, window.localStorage && (b.set30Save = setInterval(function() {
		var e, a = $("#aclist").children("li:last").attr("set30save") || "no",
			d = 0;
		"yes" != a && (e = [], b.june.children(b.appCls).each(function() {
			e.push($(this).attr("data-appLabel") || "")
		}), e.length > 0 && c.getCodeExport(function(a) {
			localStorage.tCookieJunezxCode = a, localStorage.tCookieLabelName = e.join("|;|"), d = a.length, tnaCheck("junezx_tna_setsavetip") || d >= 51200 && ($("#jSetSaveTipText").html("亲，您当前的代码量已经超过50KB，只能放在设计师自定义模块使用哦！<br />（当前代码量：" + (d / 1024).toFixed(1) + "KB）"), $("#jSetSaveTip").addClass("t50Warning").slideDown(1e3), $("#jSetSaveTipCheckBtn").show(), setTimeout(function() {
				$("#jSetSaveTip").slideUp(1e3)
			}, 1e4)), d >= 102400 && ($("#jSetSaveTipText").html("亲，您当前的代码量已经超过100KB，超过120KB的代码淘宝将无法正常使用，建议亲分段制作！<br />"), $("#jSetSaveTip").addClass("t120Warning").slideDown(1e3), $("#jSetSaveTipCheckBtn").hide(), setTimeout(function() {
				$("#jSetSaveTip").slideUp(1e3)
			}, 1e4))
		}, !0, !0), $("#aclist").children("li:last").attr("set30save", "yes"))
	}, 4e4), e = localStorage.tCookieJunezxCode, f = localStorage.tCookieLabelName, e && "" != e && b.tConfirm("检测到您之前有正在编辑的内容，是否继续上次的操作？", function() {
		var a, d, g;
		try {
			localStorage.tCookieJunezxCode = e, localStorage.tCookieLabelName = f, c.codeImportDialogCode(e), f && "" != f && (a = f.split("|;|"), d = require("scripts/action"), g = require("scripts/layer"), b.june.children(b.appCls).each(function(b) {
				if ("" != a[b]) {
					var e = JSON.parse($(this).attr("data-config") || "{}");
					$(this).attr("data-dblType"), e.appLabel = a[b], $(this).attr("data-appLabel", a[b]).attr("data-config", JSON.stringify(e)), g.updateAppLabel($(this)), d.create("edit", $(this))
				}
			}))
		} catch (h) {
			b.tMessage("数据异常，导入失败！")
		}
	}))), a.click = function(a) {
		"1" == a && $("#courseStep1").hide()
	}, a
}), define("scripts/littleTip.js", function() {
	var c, b = require("scripts/D"),
		d = '<div id="tNotice"><p style="margin-top:13px;margin-left:20px;height:27px;line-height:27px;color:#FFF;letter-spacing:2px;">云图设计客户QQ群</p><p style="margin-top:5px;">我们将会在QQ群公告发布关于我们的模板、</p><p>配套工具的更新动态。</p><p>介绍新增的各种功能，以及如何使用。</p><p style="margin-top:20px;color:#aaa;">&nbsp;</p><a target="_blank" class="btn2"#"><img border="0" src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB2VnWvcpXXXXahXpXXXXXXXXXX-39767794.png" alt="云图设计客户2群" title="云图设计客户2群"></a><a target="_blank" class="btn1" href="#"><img border="0" src="http://img02.taobaocdn.com/imgextra/i2/39767794/TB2AHywcpXXXXXNXpXXXXXXXXXX-39767794.png" alt="云图设计客户1群" title="云图设计客户1群"></a><div class="tnaCheck tna-checkin" data-tna="junezx_tna_notice"><img src="http://img02.taobaocdn.com/imgextra/i2/39767794/TB2U_WFcpXXXXXPXXXXXXXXXXXX-39767794.png"/><img class="checkin" src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB26r1GcpXXXXXDXXXXXXXXXXXX-39767794.png"/></div><div id="tNoticeClose"></div></div>';
	tnaCheck("junezx_tna_notice") || (c = setTimeout(function() {
		$("#tNotice").slideUp(1e3)
	}, 15e3), $(d).appendTo(b.b).slideDown(1e3), $("#tNotice").on("mouseenter", function() {
		clearTimeout(c), c = null
	}), $("#tNotice").on("mouseleave", function() {
		clearTimeout(c), c = null, c = setTimeout(function() {
			$("#tNotice").slideUp(1e3)
		}, 5e3)
	})), $("#tNoticeClose").on("click", function() {
		clearTimeout(c), c = null, $("#tNotice").slideUp(1e3)
	}), b.b.on("click", ".tnaCheck", function() {
		var a = $(this),
			b = a.attr("data-tna");
		a.hasClass("tna-checkin") ? (a.addClass("tna-checkout").removeClass("tna-checkin"), tnaCheckCookie(b)) : (a.addClass("tna-checkin").removeClass("tna-checkout"), tnaCheckCookie(b, !0))
	})
}), define("scripts/TopBannerTip.js", function() {}), define("scripts/other.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/UI_Dialog");
	return a.thumbImport = function(a) {
		var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
		return a.hasClass("jwz") ? (c = {}, d = a.children("a:eq(0)").length > 0 ? a.children("a:eq(0)") : a.children(".rel").children("a:eq(0)"), c.characterMode = a.attr("data-t") || "text", c.href = d.attr("href") || "", c.hrefMode = d.attr("target"), c.characterBgSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), c.characterAlign = a.css("text-align") || "left", c.characterContent = d.html(), c.characterSize = d.css("font-size").replace(/px/g, ""), c.characterFont = d.css("font-family").replace(/'/g, ""), c.characterStyle = d.css("font-style") || "normal", c.characterColor = RGBToHex(d.css("color")), c.characterBgColor = RGBToHex(d.css("background-color"), ""), c.characterWeight = d.css("font-weight"), "400" == c.characterWeight && (c.characterWeight = "normal"), c.characterBorderWidth = d.css("border-width") || "0px", c.characterBorderWidth = c.characterBorderWidth.replace(/px/g, ""), c.characterBorderColor = RGBToHex(d.css("border-color")), c.characterBorderStyle = d.css("border-style") || "solid", c.characterFixed = 0, c.characterLineThrough = "", c.characterLineUnder = "", c.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), c.characterWidthMode = a.attr("data-w") || "normal", c.ssOpacity = "1", c.ssOpacity1 = "1", a.attr("data-o") && (m = a.attr("data-o") || ";", n = m.split(";"), m.indexOf("|") >= 0 && (n = m.split("|")), c.ssOpacity = n[0], c.ssOpacity1 = n[1]), "yes" == a.attr("data-c") ? (c.characterLineMulti = "yes", c.characterLineContent = c.characterContent, c.characterContent = "", c.characterLineHeight = b.tParseInt(d.css("line-height")), c.characterLineAlign = c.characterAlign, c.characterAlign = "left", c.characterLineSpace = b.tParseInt(d.css("text-indent")), c.characterTBpadding = b.tParseInt(d.css("padding-top")), c.characterLRpadding = b.tParseInt(d.css("padding-left"))) : (c.characterLineMulti = "no", c.characterLineContent = "", c.characterLineHeight = "", c.characterLineAlign = "", c.characterLineSpace = ""), o = "", "normal" == c.characterWidthMode ? c.characterSpace = "left" == c.characterAlign ? Math.abs(b.tParseInt(d.css("right"))) : "right" == c.characterAlign ? Math.abs(b.tParseInt(d.css("left"))) : "" : (c.characterLeftPadding = Math.abs(b.tParseInt(d.css("padding-left"))), c.characterRightPadding = Math.abs(b.tParseInt(d.css("padding-right"))), o = b.tParseInt(d.css("line-height"))), d.children(".junei").length > 0 ? (e = d.children(".junei"), c.characterContent = e.html(), c.characterColorMsOver = RGBToHex(e.css("color")), c.characterBgColorMsOver = RGBToHex(e.css("background-color"), ""), c.characterBgSrcMsOver = e.css("background-image").replace(/^url|[\(\"\)]*/g, ""), c.characterBorderWidthMsOver = e.css("border-width") || "0px", c.characterBorderWidthMsOver = c.characterBorderWidthMsOver.replace(/px/g, ""), c.characterBorderColorMsOver = RGBToHex(e.css("border-color")), c.characterBorderStyleMsOver = e.css("border-style") || "solid") : (c.characterColorMsOver = "", c.characterBgColorMsOver = "", c.characterBgSrcMsOver = "", c.characterBorderWidthMsOver = "", c.characterBorderColorMsOver = "", c.characterBorderStyleMsOver = "solid"), a.find("a").length > 1 && (f = a.find("div.jspb").children("a:eq(0)"), g = f.attr("class"), h = 0, c.characterUnderLine = "off", c.characterHoverMode = "on", c.characterHoverSpeed = f.attr("class").match(/trans(\w+)s/g), c.characterHoverSpeed = c.characterHoverSpeed && c.characterHoverSpeed.length > 0 ? c.characterHoverSpeed.join("") : "", c.characterBgSrcHover = f.css("background-image").replace(/^url|[\(\"\)]*/g, ""), c.characterSizeHover = f.css("font-size").replace(/px/g, ""), c.characterFontHover = f.css("font-family").replace(/'/g, ""), c.characterColorHover = RGBToHex(f.css("color")), c.characterBgColorHover = RGBToHex(f.css("background-color"), ""), c.characterWeightHover = f.css("font-weight"), "400" == c.characterWeightHover && (c.characterWeightHover = "normal"), c.characterBorderWidthHover = f.css("border-width") || "0px", c.characterBorderWidthHover = c.characterBorderWidthHover.replace(/px/g, ""), c.characterBorderColorHover = RGBToHex(f.css("border-color")), c.characterBorderStyleHover = f.css("border-style") || "solid", c.characterUnderLineWeight = d.height() - f.height(), c.characterHoverSpeed = f.attr("class").match(/trans(\w+)s/g), c.characterHoverSpeed = c.characterHoverSpeed && c.characterHoverSpeed.length > 0 ? c.characterHoverSpeed.join("") : "", c.css3Mode1 = g.split(" ")[2], c.css3ModeX1 = g.split(" ")[3], c.css3ModeY1 = g.split(" ")[4], g.replace(/  /g, "") == g && (g.indexOf("june-box-fx") < 0 && g.indexOf("june-box-fy") < 0 && g.indexOf("june-box-sf") < 0 && g.indexOf("june-box-fx") < 0 && g.indexOf("june-box-fy") < 0 && g.indexOf("june-box-r1") < 0 && g.indexOf("june-box-r2") < 0 && g.indexOf("june-box-r3") < 0 && g.indexOf("june-box-r7") < 0 && g.indexOf("june-box-fr1") < 0 && g.indexOf("june-box-fr2") < 0 && g.indexOf("june-box-fr3") < 0 && g.indexOf("june-box-fr7") < 0 && (c.css3Mode1 = "", h++, c.css3ModeX1 = g.split(" ")[3 - h], c.css3ModeY1 = g.split(" ")[4 - h]), g.indexOf("june-box-fromleft") < 0 && g.indexOf("june-box-fromright") < 0 && g.indexOf("june-box-lx") < 0 && g.indexOf("june-box-rx") < 0 && (c.css3ModeX1 = "", h++, c.css3ModeY1 = g.split(" ")[4 - h]), g.indexOf("june-box-fromtop") < 0 && g.indexOf("june-box-frombottom") < 0 && g.indexOf("june-box-uy") < 0 && g.indexOf("june-box-dy") < 0 && (c.css3ModeY1 = "")), 0 != c.characterUnderLineWeight ? (c.characterUnderLine = "on", c.characterUnderLineStyle = f.css("border-bottom-style"), c.characterUnderLineColor = RGBToHex(f.css("border-bottom-color")), c.characterUnderLineWeight += "") : c.characterUnderLineWeight = "1", a.hasClass("shadowShow") && (c.shadowControl = "shadowShow", p = f.css("box-shadow"), p.indexOf("inset") >= 0 && (c.shadowStyle = "inset", p = $.trim(p.replace(/inset/g, ""))), p.indexOf("rgb") >= 0 && (q = RGBToHex(p.match(/rgb\((\S|\s)*\)/g)[0]), p = $.trim(p.replace(/rgb\((\S|\s)*\)/g, ""))), r = p.split(" "), r[0].indexOf("px") < 0 && r[0] ? ("" == q && (q = RGBToHex(r[0])), r.splice(0, 1)) : "" == q && (q = RGBToHex(r[4])), c.shadowColor = q, c.shadowLeft = b.tParseInt(r[0]), c.shadowTop = b.tParseInt(r[1]), c.shadowBlur = b.tParseInt(r[2]), c.shadowSize = b.tParseInt(r[3])), a.hasClass("hborder") && (c.borderControl = "hborder", c.borderColor = RGBToHex(f.css("border-color")), c.borderWidth = f.css("border-width") || "1px", c.borderWidth = c.borderWidth.replace(/px/g, ""), c.borderRadius = f.css("border-radius") || "0px", c.borderRadius = c.borderRadius.replace(/px/g, "")), a.hasClass("mcblack") && (c.mongoliaControl = "mongoliaShow", c.mongoliaMode = "mcblack"), a.hasClass("mcwhite") && (c.mongoliaControl = "mongoliaShow", c.mongoliaMode = "mcwhite")), d.css("text-decoration").indexOf("line-through") >= 0 && (c.characterLineThrough = "line-through"), d.css("text-decoration").indexOf("underline") >= 0 && (c.characterLineUnder = "underline"), i = c.characterContent, "text" != c.characterMode && (j = a.attr("data-h") || ";", k = j.split(";"), c.characterItemContent = k[0], c.characterContent = k[1], i = c.characterItemContent, ("price" == c.characterMode || "_price" == c.characterMode) && (l = i.split("."), c.characterFixed = l.length > 1 ? l[1].length : 0)), a.hasClass("shadowShow1") && (c.shadowControl1 = "shadowShow1", s = d.css("box-shadow"), s.indexOf("inset") >= 0 && (c.shadowStyle1 = "inset", s = $.trim(s.replace(/inset/g, ""))), s.indexOf("rgb") >= 0 && (q = RGBToHex(s.match(/rgb\((\S|\s)*\)/g)[0]), s = $.trim(s.replace(/rgb\((\S|\s)*\)/g, ""))), r = s.split(" "), r[0].indexOf("px") < 0 && r[0] ? ("" == q && (q = RGBToHex(r[0])), r.splice(0, 1)) : "" == q && (q = RGBToHex(r[4])), c.shadowColor1 = q, c.shadowLeft1 = b.tParseInt(r[0]), c.shadowTop1 = b.tParseInt(r[1]), c.shadowBlur1 = b.tParseInt(r[2]), c.shadowSize1 = b.tParseInt(r[3])), a.hasClass("hborder1") && (c.borderControl1 = "hborder1", c.borderColor1 = RGBToHex(d.css("border-color")), c.borderWidth1 = d.css("border-width") || "1px", c.borderWidth1 = c.borderWidth1.replace(/px/g, ""), c.borderRadius1 = d.css("border-radius") || "0px", c.borderRadius1 = c.borderRadius1.replace(/px/g, "")), a.hasClass("juneol") && (c.outlineControl = "outlineShow", c.outlineWidth = "juneol", c.outlineColor = RGBToHex(a.css("outline-color")), c.outlineShadowColor = RGBToHex(a.css("color")), c.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), a.hasClass("juneol1") && (c.outlineControl = "outlineShow", c.outlineWidth = "juneol1", c.outlineColor = RGBToHex(a.css("outline-color")), c.outlineShadowColor = RGBToHex(a.css("color")), c.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), a.hasClass("juneol2") && (c.outlineControl = "outlineShow", c.outlineWidth = "juneol2", c.outlineColor = RGBToHex(a.css("outline-color")), c.outlineShadowColor = RGBToHex(a.css("color")), c.outlineSpeed = a.attr("class").indexOf("trans") >= 0 ? a.attr("class").match(/trans(\w+)s/g).join("") : ""), JSON.stringify(c)) : (c = $.extend({}, b.qssetConfig), d = a.children("a:eq(0)").length > 0 ? a.children("a:eq(0)") : a.children(".rel").children("a:eq(0)"), c.characterMode = a.attr("data-t") || "text", c.href = d.attr("href") || "", c.hrefMode = d.attr("target"), c.characterBgSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), c.characterAlign = a.css("text-align") || "left", c.characterContent = d.html(), c.characterSize = d.css("font-size").replace(/px/g, ""), c.characterFont = d.css("font-family").replace(/'/g, ""), c.characterColor = RGBToHex(d.css("color")), c.characterBgColor = RGBToHex(d.css("background-color"), ""), c.characterWeight = d.css("font-weight"), "400" == c.characterWeight && (c.characterWeight = "normal"), c.borderWidth1 = d.css("border-width") || "0px", c.borderWidth1 = c.borderWidth1.replace(/px/g, ""), c.borderColor1 = RGBToHex(d.css("border-color")), c.characterFixed = 0, c.characterLineThrough = "", c.characterLineUnder = "", "0" != c.borderWidth1 && (c.borderControl1 = "hborder1"), c.characterSpace = "left" == c.characterAlign ? Math.abs(b.tParseInt(d.css("padding-left"))) : "right" == c.characterAlign ? Math.abs(b.tParseInt(d.css("padding-right"))) : "", d.children(".junei").length > 0 ? (e = d.children(".junei"), c.characterContent = e.html(), c.characterColorMsOver = RGBToHex(e.css("color")), c.characterBgColorMsOver = RGBToHex(e.css("background-color"), ""), c.characterBgSrcMsOver = e.css("background-image").replace(/^url|[\(\"\)]*/g, ""), c.characterBorderWidthMsOver = e.css("border-width") || "0px", c.characterBorderWidthMsOver = c.characterBorderWidthMsOver.replace(/px/g, ""), c.characterBorderColorMsOver = RGBToHex(e.css("border-color")), c.characterBorderStyleMsOver = e.css("border-style") || "solid") : (c.characterColorMsOver = "", c.characterBgColorMsOver = "", c.characterBgSrcMsOver = "", c.characterBorderWidthMsOver = "", c.characterBorderColorMsOver = "", c.characterBorderStyleMsOver = "solid"), a.find("a").length > 1 && (f = a.find("div.jspb").children("a:eq(0)"), g = f.attr("class"), h = 0, c.characterUnderLine = "off", c.characterHoverMode = "on", c.characterHoverSpeed = f.attr("class").match(/trans(\w+)s/g), c.characterHoverSpeed = c.characterHoverSpeed && c.characterHoverSpeed.length > 0 ? c.characterHoverSpeed.join("") : "", c.characterBgSrcHover = f.css("background-image").replace(/^url|[\(\"\)]*/g, ""), c.characterSizeHover = f.css("font-size").replace(/px/g, ""), c.characterFontHover = f.css("font-family").replace(/'/g, ""), c.characterColorHover = RGBToHex(f.css("color")), c.characterBgColorHover = RGBToHex(f.css("background-color"), ""), c.characterWeightHover = f.css("font-weight"), "400" == c.characterWeightHover && (c.characterWeightHover = "normal"), c.borderWidth = f.css("border-width") || "0px", c.borderWidth = c.borderWidth.replace(/px/g, ""), c.borderColor = RGBToHex(f.css("border-color")), c.characterUnderLineWeight = d.height() - f.height(), "0" != c.borderWidth && (c.borderControl = "hborder"), c.characterHoverSpeed = f.attr("class").match(/trans(\w+)s/g), c.characterHoverSpeed = c.characterHoverSpeed && c.characterHoverSpeed.length > 0 ? c.characterHoverSpeed.join("") : "", c.css3Mode1 = g.split(" ")[2], c.css3ModeX1 = g.split(" ")[3], c.css3ModeY1 = g.split(" ")[4], g.replace(/  /g, "") == g && (g.indexOf("june-box-fx") < 0 && g.indexOf("june-box-fy") < 0 && g.indexOf("june-box-sf") < 0 && g.indexOf("june-box-fx") < 0 && g.indexOf("june-box-fy") < 0 && g.indexOf("june-box-r1") < 0 && g.indexOf("june-box-r2") < 0 && g.indexOf("june-box-r3") < 0 && g.indexOf("june-box-r7") < 0 && g.indexOf("june-box-fr1") < 0 && g.indexOf("june-box-fr2") < 0 && g.indexOf("june-box-fr3") < 0 && g.indexOf("june-box-fr7") < 0 && (c.css3Mode1 = "", h++, c.css3ModeX1 = g.split(" ")[3 - h], c.css3ModeY1 = g.split(" ")[4 - h]), g.indexOf("june-box-fromleft") < 0 && g.indexOf("june-box-fromright") < 0 && g.indexOf("june-box-lx") < 0 && g.indexOf("june-box-rx") < 0 && (c.css3ModeX1 = "", h++, c.css3ModeY1 = g.split(" ")[4 - h]), g.indexOf("june-box-fromtop") < 0 && g.indexOf("june-box-frombottom") < 0 && g.indexOf("june-box-uy") < 0 && g.indexOf("june-box-dy") < 0 && (c.css3ModeY1 = "")), 0 != c.characterUnderLineWeight ? (c.characterUnderLine = "on", c.characterUnderLineStyle = f.css("border-bottom-style"), c.characterUnderLineColor = RGBToHex(f.css("border-bottom-color")), c.characterUnderLineWeight += "") : c.characterUnderLineWeight = "1"), d.css("text-decoration").indexOf("line-through") >= 0 && (c.characterLineThrough = "line-through"), d.css("text-decoration").indexOf("underline") >= 0 && (c.characterLineUnder = "underline"), i = c.characterContent, "text" != c.characterMode && (j = a.attr("data-h") || ";", k = j.split(";"), c.characterItemContent = k[0], c.characterContent = k[1], i = c.characterItemContent, ("price" == c.characterMode || "_price" == c.characterMode) && (l = i.split("."), c.characterFixed = l.length > 1 ? l[1].length : 0)), JSON.stringify(c))
	}, a.thumbCircleImport = function(a) {
		var d, b = {},
			c = a.children("div.s2");
		return b.characterContent = c.html(), b.characterSize = c.css("font-size").replace(/px/g, ""), b.characterFont = c.css("font-family").replace(/'/g, ""), b.characterColor = RGBToHex(c.css("color")), b.characterBgColor = RGBToHex(c.css("background-color"), ""), b.characterWeight = c.css("font-weight"), "400" == b.characterWeight && (b.characterWeight = "normal"), a.children("div.s1").hasClass("s1h") && (b.characterHoverMode = "on", d = a.children("div.s1"), b.characterSizeHover = d.css("font-size").replace(/px/g, ""), b.characterFontHover = d.css("font-family").replace(/'/g, ""), b.characterColorHover = RGBToHex(d.css("color")), b.characterBgColorHover = RGBToHex(d.css("background-color"), ""), b.characterWeightHover = d.css("font-weight"), "400" == b.characterWeightHover && (b.characterWeightHover = "normal")), JSON.stringify(b)
	}, a.thumbset = function(a, d) {
		var e, f, g, i;
		d.replace(/Img/g, "Hover"), f = $("#sc" + a + "_ho1"), g = f.html(), e = "" == g ? $.extend({}, b.appConfig["jfsb"][1].tOtherSetConfig) : JSON.parse(g), i = $("#sliderSwitch").val(), c.tDialogOther("thumbset.php?sliderSwitch=" + i, "缩略图高级设置", e, function(a) {
			var b = $("#oths_tForm").formToObject();
			f.html(JSON.stringify(b)), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
		}, function(a) {
			f.html(""), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
		})
	}, a.thumbcircleset = function(a) {
		var e, h, f = $("#sc" + a + "_ho2"),
			g = f.html();
		e = "" == g ? $.extend({}, b.appConfig["jfsb"][1].tOtherSetConfig1) : JSON.parse(g), h = $("#sliderSwitch").val(), c.tDialogOther("thumbcircleset.php?sliderSwitch=" + h, "圆点高级设置", e, function(a) {
			var b = $("#oths_tForm").formToObject();
			f.html(JSON.stringify(b)), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
		}, function(a) {
			f.html(""), a.dialog("close"), $("#contentPage").children("a.on").trigger("click")
		})
	}, a.uploadpic = function(a, c) {
		var d = require("scripts/tAjax");
		$("#uploadPicDialog").length < 1 && $('<div id="uploadPicDialog"></div>').appendTo(b.b), $("#uploadPicDialog").dialog({
			resizable: !1,
			modal: !0,
			width: 820,
			height: 615,
			title: "图片选择",
			buttons: {
				"确定": function() {
					var e = $("#picBox").children(".picElement.selected"),
						f = "";
					$("#appTabs").length > 0 && (e = $("#appTabs").find(".picElement.selected")), e.length > 0 ? (f = (e.children(".img-container").children("img").attr("src") || "").replace(/_80x80.jpg/g, ""), c && "" != c ? $("#" + c).val(f) : $("input[name='" + a + "']").val(f), $(this).dialog("close"), $(".ui-tooltip").hide()) : b.tMessage("请选择图片后确定！")
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), d.ajaxHtml("taobaoapp/tb_uploadpic.php", {
			name: a,
			inputId: c
		}, function(a) {
			$("#uploadPicDialog").html(a).dialog("open")
		})
	}, a.sharecode = function(c, d) {
		var g, h, i, j, k, e = $("#june"),
			f = d;
		$("#junebox").scrollTop(0).scrollLeft(0), b.tLoading(!0), "rePair" != c ? b.tUserLogin && "" != b.tUserName ? (b.insertID && "" != b.insertID && (b.tLoading(!1), b.tMessage('分享成功, 您的作品地址为: <a class="june-preview" href="http://guop.cn/zxn/previewP.php?ID=' + b.insertID + '" target="_blank">http://guop.cn/zxn/previewP.php?ID=' + b.insertID + "</a>,您可以将此地址发给您的好友！")), $.post("/zxn/api/getsnap", {
			userName: b.tUserName,
			ID: b.insertID
		}, function(a) {
			b.insertID && "" != b.insertID || (b.tLoading(!1), b.tMessage(a[1])), $(f.target).css("visibility", "hidden")
		}, "json")) : (b.tMessage("登录之后才可进行保存，登录之后还可以自动保存哦！", "login"),b.tLoading(!1)) : (e.css("position", "fixed"), g = e.offset().top, h = e.offset().left, i = {}, j = e.css("backgroundImage").replace(/^url|[\(\"\)]*/g, ""), checkUrl(j) && (i.top = g, i.left = h, i.right = h + e.width(), i.bottom = g + e.height()), e.find(".t-app, .t-app-child").each(function() {
			var d, e, a = $(this),
				c = a.offset();
			c && !a.is(":hidden") && "jspbChild" != a.attr("data-attachType") && (d = c.left + a.width(), e = c.top + a.height(), (!i.left && 0 != i.left || c.left < i.left) && (i.left = c.left), (!i.right || d > i.right) && (i.right = d), (!i.top && 0 != i.top || c.top < i.top) && (i.top = c.top), (!i.bottom || e > i.bottom) && (i.bottom = e, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), a.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.add(a)))
		}), i.left -= h, i.right -= h, i.top -= g, i.bottom -= g, (i.right - i.left) * (i.bottom - i.top) > 2073600 && (i.bottom = i.top + 1080), (i.right - i.left) * (i.bottom - i.top) > 2073600 && (i.right = i.left + 1920), i.left < 0 && (i.left = 0), i.top < 0 && (i.top = 0), i.right > e.width() && (i.right = e.width()), i.bottom > e.height() && (i.bottom = e.height()), i.width = i.right - i.left, i.height = i.bottom - i.top, k = window.location.hash.replace("#", ""), "" != k && "i" == k.substr(0, 1) && (k = k.substr(2), e.css("position", "relative"), a.tDialogRepairForm(function(a, c) {
			$.post("getsnap-repair.php", {
				type: "hasImg",
				ttImg: a,
				ID: k,
				newID: b.insertID
			}, function(a) {
				a[0] && (c.dialog("close"), $(".ui-tooltip").hide()), b.tLoading(!1), b.tMessage(a[1]), $(f.target).css("visibility", "hidden")
			}, "json")
		})))
	}, a.tDialogRepairForm = function(a) {
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
				"修复": function() {
					a($("#i_RepairForm").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e, function(a) {
			$("#tDialogRepairForm").html(a).dialog("open"), $("#tDialogRepairForm").find("textarea").parent("li").css("height", "auto")
		})
	}, a.savecode = function() {
		$("#save").trigger("click")
	}, a.categorychange = function(a, c) {
		var e = require("scripts/tAjax"),
			f = $("#" + a).val();
		e.ajaxJsonT("gcc", {
			url: f
		}, function(a) {
			if (a.ret[0].indexOf("SUCCESS") >= 0) {
				var d = a.data.cats;
				b.tempCatPost = d, $.ajax({
					url: "shopfl3.php",
					type: "POST",
					data: {
						catsPost: d
					},
					success: function(a) {
						$("#" + c).html(a)
					}
				})
			} else b.tMessage("获取店铺分类失败，请更换地址（宝贝详情、店铺首页）重试，如仍然获取失败，请等待20分钟后再次尝试！")
		})
	}, a.zdycontrol = function(a) {
		"4" != a ? ($("#mouseaction").children("div:eq(" + a + ")").trigger("click"), ("0" == a || "1" == a || "2" == a) && b.updateCurType()) : b.snapSwitch ? (b.snapSwitch = !1, $("#tZdyDialogControl").children("div:eq(4)").removeClass("selected")) : (b.snapSwitch = !0, $("#tZdyDialogControl").children("div:eq(4)").addClass("selected"))
	}, a.itemtextset = function(a, d, e) {
		var h, f = $("#i_b" + a + "_set"),
			g = f.html(),
			i = $(e.target);
		h = "" == g ? $.extend({}, b.appConfig["jib"][1].tOtherSetConfig) : JSON.parse(g), c.tDialogOther("itemtextset.php", "扩展文字详细设置", h, function(a) {
			var b = $("#oths_tForm").formToObject();
			f.html(JSON.stringify(b)), i.addClass("itemarrManagerTextSetYes"), a.dialog("close")
		}, function(a) {
			var b = $("#oths_tForm").formToObject();
			$("textarea[name='itemTextSet[]']").html(JSON.stringify(b)), $(".itemarrManagerTextSet").addClass("itemarrManagerTextSetYes"), a.dialog("close")
		})
	}, a.itempicajaxselect = function(b, c, d, e) {
		var f = require("scripts/tAjax");
		f.ajaxJson("giiforp.php", {
			item: $("#hrefVal").val().split(","),
			random: 1e4 * Math.random()
		}, function(f) {
			var g, h, i;
			if ("yes" == f[0]) {
				for (g = 1; g < f.length; g++) if (f[g] && f[g]["colorImg"] && "" != f[g]["colorImg"]) {
					for (h = f[g]["colorImg"], $("select.j-src-pos:eq(" + 2 * (g - 1) + ")").append('<optgroup label="宝贝多色图片">'), $("select.j-src-pos:eq(" + (2 * (g - 1) + 1) + ")").append('<optgroup label="宝贝多色图片">'), i = 0; i < h.length; i++) $("select.j-src-pos:eq(" + 2 * (g - 1) + ")").append('<option value="' + (parseInt(h[i].valueId, 10) + 1) + '" >' + h[i].name + "</option>"), $("select.j-src-pos:eq(" + (2 * (g - 1) + 1) + ")").append('<option value="' + (parseInt(h[i].valueId, 10) + 1) + '" >' + h[i].name + "</option>"), f[g][h[i].valueId] = h[i].imgUrl;
					$("select.j-src-pos:eq(" + 2 * (g - 1) + ")").append("</optgroup>"), $("select.j-src-pos:eq(" + (2 * (g - 1) + 1) + ")").append("</optgroup>")
				}
				$("#itemPicTemp1").html(JSON.stringify(f)), e || a.itempicconfigselect(b, c, d, "pt")
			}
		})
	}, a.itempicajaxselect_ppt = function(b, c, d) {
		var e = require("scripts/tAjax");
		e.ajaxJson("giiforp_ppt.php", {
			item: $("#hrefVal").val().split(","),
			random: 1e4 * Math.random()
		}, function(e) {
			"yes" == e[0] && ($("#itemPicTemp1").html(JSON.stringify(e)), a.itempicconfigselect(b, c, d, "ppt"))
		})
	}, a.itempicconfigselect = function(c, d, e, f) {
		var g = JSON.parse($("#itemPicTemp1").html() || "[]");
		g[d + 1] && g[d + 1][b.tParseInt(c) - 1] ? $("#" + e).val(g[d + 1][b.tParseInt(c) - 1]) : "pt" == f && a.itempicajaxselect(c, d, e, !0)
	}, a.qsset = function(a) {
		var d, e, f;
		e = $("#" + a), f = e.html(), d = "" == f ? $.extend({}, b.qssetConfig) : JSON.parse(f), c.tDialogOther("allwzset.php", "文字设置", d, function(a) {
			var b = $("#allwzset_tForm").formToObject();
			e.html(JSON.stringify(b)), a.dialog("close")
		}, function(a) {
			e.html(""), a.dialog("close")
		})
	}, a.click = function(b, c) {
		var e, f, g, d = c.split(";");
		d[0] && (e = d[0]), d[1] && (f = d[1]), d[2] && (g = d[2]), d[3] && (othsAppID = d[3]), "thumbset" == e ? a.thumbset(g, f) : "sharecode" == e ? a.sharecode(f, b) : "savecode" == e ? a.savecode(f) : "categorychange" == e ? a.categorychange(f, g, othsAppID) : "zdycontrol" == e ? a.zdycontrol(f) : "itemtextset" == e ? a.itemtextset(g, f, b) : "thumbcircleset" == e ? a.thumbcircleset(g, f) : "qsset" == e ? a.qsset(f) : "uploadpic" == e && a.uploadpic(f, g)
	}, a
}), define("scripts/inputFilter.js", function(a) {
	var b = require("scripts/D");
	return a.filterTextarea = function(a) {
		var d, c = a.find("textarea");
		c.length > 0 && c.each(function() {
			var f, a = $(this),
				c = a.val(),
				e = !1,
				g = [],
				h = [];
			c = c.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), "" != c && (c = c.replace(/(\<div\s*class\=\"rel\"\s*data-title\=\"([^\"]*)\"\s*style\=\"([^\"]*)\"(\s*data-rn\=\"([^\"]*)\")?)/g, function(a, c, g, h, i, j) {
				var k = a;
				return k = k.replace(/margin([^\;]*)\;/g, ""), k = k.replace(/left([^\;]*)\;/g, ""), k = k.replace(/margin([^\;]*)\"/g, '"'), k = k.replace(/left([^\;]*)\"/g, '"'), j && (d || (d = j), e = !0, d && e && (f = "a" + b.getRandom(), k = k.replace(new RegExp(d, "g"), f))), k
			}), d && e && (c = c.replace(/a[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}/g, function(a) {
				var c = a,
					d = $.inArray(c, g);
				return 0 > d ? (g.push(c), c = "a" + b.getRandom() + "-" + b.getRandom(), h.push(c)) : c = h[d], c
			})), a.val(c))
		})
	}, a.filterImportCode = function(c) {
		var f, g, d = [],
			e = [];
		return c = c.replace(/a[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}(?=(\"|\s|\'))/g, function(a) {
			var c = a,
				f = $.inArray(c, d);
			return 0 > f ? (d.push(c), c = "a" + b.getRandom() + "-" + b.getRandom(), e.push(c)) : c = e[f], c
		}), f = [], g = [], c = c.replace(/app[0-9]{8}-[0-9]{4}(?=(\"|\s|\'))/g, function(a) {
			var c = a,
				d = $.inArray(c, f);
			return 0 > d ? (f.push(c), c = "a" + b.getRandom() + "-" + b.getRandom(), g.push(c)) : c = g[d], c
		}), a.filterHeightCode(c), c
	}, a.filterHeightCode = function() {
		var c = 0;
		b.june.children().each(function() {
			var a = $(this),
				d = b.tParseInt(a.css("top")) + a.height();
			d > c && (c = d)
		}), b.addImportHeight = c
	}, a
}), define("scripts/checkHash.js", function(a) {
	var b = require("scripts/D");
	return a.start = function() {
		var c, a = window.location.hash.replace("#", "");
		"" != a && ("i" == a.substr(0, 1) ? (a = a.substr(2), c = "genList") : (a = a.substr(2), c = "saveList"), "" != a && $.ajax({
			url: "/zxn/com/useCode",
			type: "POST",
			data: {
				type: c,
				ID: a
			},
			dataType: "json",
			success: function(a) {
				var d, e;
				a.length > 0 && ("saveList" == c ? (d = require("scripts/moduleManage"), d.showSave(a[0]), b.snapSwitch = !1) : (e = require("scripts/code"), e.codeImportDialogCode(a[0]), b.snapSwitch = !1))
			}
		})), b.actionList.slimScroll({
			height: ($(window).height() - 250) / 2 - 40 + "px",
			color: "#333"
		})
	}, a
}), define("scripts/reckonAlign.js", function(a) {
	var b = require("scripts/D");
	return a.get = function(a, c, d, e) {
		!$.isNumeric(c) && (c = 0);
		var f = b.tParseInt(c) / 2;
		return "yes" == a ? d > e ? "left" : "right" : f > d ? "left" : "right"
	}, a
}), define("scripts/layouttest.js", function(a) {
	return a.get = function(a) {
		var b = require("scripts/code");
		return b.codeImportDialogCode(a), b
	}, a
}), define("scripts/appManage1.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage");
	return a.showIcon = function(a, c, d) {
		var e, f = $(a.target),
			g = f.offset(),
			j = (g.top, g.left, $(b.appCls + "[appID='" + c + "']")),
			k = j.children(b.appChildCls + "[attachID='" + d + "']");
		0 == $("#showIcon").length ? (e = $('<div id="showIcon" class="showIcon"></div>').appendTo(b.b).dialog({
			autoOpen: !1,
			resizable: !1,
			width: 660,
			height: 500,
			title: "选择箭头预设样式",
			buttons: {
				"关闭": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), $.ajax({
			url: "/zxn/geticon",
			type: "POST",
			dataType: "html",
			success: function(a) {
				e.html(a).on("click", "div.is-box", function() {
					var g, c = $(this),
						d = e.data("_thisApp"),
						f = d.attr("data-dblType"),
						h = c.children(".is-arrow:eq(0)").children("img").attr("src"),
						i = c.children(".is-arrow:eq(1)").children("img").attr("src"),
						j = c.children(".is-arrow:eq(2)").children("img").attr("src"),
						k = c.children(".is-arrow:eq(3)").children("img").attr("src");
					d.length > 0 && (g = JSON.parse(d.attr("data-config")), g.childConfig && (g.childConfig[0].autoSize = "yes", g.childConfig[0].oSrc = h), g.childConfig && (g.childConfig[0].autoSize1 = "yes", g.childConfig[0].tSrc = i), g.childConfig && (g.childConfig[0].autoSize = "yes", g.childConfig[0].oSrcHover = j), g.childConfig && (g.childConfig[0].autoSize1 = "yes", g.childConfig[0].tSrcHover = k), b.appConfig[f][1].tSubmit(g, d))
				})
			}
		})) : e = $("#showIcon"), k.length > 0 ? e.dialog("option", "position", {
			my: "left top",
			at: "left bottom",
			of: f
		}).data("_thisApp", j).dialog("open") : e.dialog("close")
	}, a.showIcon1 = function(a, c, d) {
		var e, f = $(a.target),
			g = f.offset(),
			j = (g.top, g.left, $(b.appCls + "[appID='" + c + "']")),
			k = j.attr("data-dblType"),
			l = j.children(b.appChildCls + "[attachID='" + d + "']");
		0 == $("#showIcon1").length ? (e = $('<div id="showIcon1" class="showIcon"></div>').appendTo(b.b).dialog({
			autoOpen: !1,
			resizable: !1,
			width: 660,
			height: 500,
			title: "选择缩略图预设样式",
			buttons: {
				"关闭": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), $.ajax({
			url: "/zxn/geticon1",
			type: "POST",
			dataType: "html",
			success: function(a) {
				e.html(a).on("click", "div.is-box1", function() {
					var g, k, l, m, n, o, p, q, c = $(this),
						d = e.data("_thisApp"),
						f = d.attr("data-dblType"),
						h = c.children(".is-small"),
						i = h.attr("data-w"),
						j = h.attr("data-h");
					if (d.length > 0) {
						if ("auto" != i) {
							if (k = h.children("img:eq(1)").attr("data-img"), l = h.children("img:eq(0)").attr("data-img"), m = k.split(","), n = l.split(","), g = JSON.parse(d.attr("data-config")), g.sWidth = i, g.sHeight = j, g.defaultSmallImg = k, g.defaultSmallHover = l, "jfsb" == f || "jwfb" == f) {
								for (o = 0; o < g.thumbSet.length; o++)"" != g.thumbSet[o] && (p = JSON.parse(g.thumbSet[o]), p.characterBgSrc = m[o] || m[0], p.characterBgSrcHover = n[o] || n[0]), p && (g.thumbSet[o] = JSON.stringify(p));
								for (q = 0; q < g.contentType.length; q++) g.smallCircleMode[q] = "no", g.smallImgSrc[q] = m[q] || m[0], g.smallImgSrcT[q] = m[q] || m[0], g.smallHoverSrc[q] = n[q] || n[0], g.smallHoverSrcT[q] = n[q] || n[0]
							} else if ("jqtb" == f) for (q = 0; q < g.nestConfig.length; q++) g.smallCircleMode[q] = "no", g.smallImgSrc[q] = m[q] || m[0], g.smallHoverSrc[q] = n[q] || n[0]
						} else {
							for (g = JSON.parse(d.attr("data-config")), g.sWidth = 120, g.sHeight = 120, g.defaultSmallImg = "", g.defaultSmallHover = "", o = 0; o < g.thumbSet.length; o++)"" != g.thumbSet[o] && (p = JSON.parse(g.thumbSet[o]), p.characterBgSrc = g.sliderSrc[o] || g.sliderSrc[0], p.characterBgSrcHover = g.sliderSrc[o] || g.sliderSrc[0]), p && (g.thumbSet[o] = JSON.stringify(p));
							for (q = 0; q < g.contentType.length; q++) g.smallCircleMode[q] = "no", g.smallImgSrc[q] = g.sliderSrc[q] || g.sliderSrc[0], g.smallImgSrcT[q] = g.sliderSrc[q] || g.sliderSrc[0], g.smallHoverSrc[q] = g.sliderSrc[q] || g.sliderSrc[0], g.smallHoverSrcT[q] = g.sliderSrc[q] || g.sliderSrc[0]
						}
						b.appConfig[f][1].tSubmit(g, d)
					}
				}), "jfsb" != k ? e.children(":eq(0)").hide() : e.children(":eq(0)").show()
			}
		})) : e = $("#showIcon1"), l.length > 0 ? (e.dialog("option", "position", {
			my: "left top",
			at: "left bottom",
			of: f
		}).data("_thisApp", j).dialog("open"), "jfsb" != k ? e.children(":eq(0)").hide() : e.children(":eq(0)").show()) : e.dialog("close")
	}, a.setItemStyle = function(a, b) {
		c.setStyle(b, "jib", "junezxUser")
	}, a
}), define("scripts/appLoginCheck.js", function(a) {
	var b = require("scripts/D");
	return a.click = function(a) {
		"jfyb" == b.actType ? b.tUserLogin && "" != b.tUserName ? a() : b.tMessage("请先登录后再使用此功能！") : a()
	}, a
}), define("scripts/tDateDay.js", function(a) {
	var b = require("scripts/D");
	return a.click = function(a) {
		var d, c = (new Date).Format("MM-dd", 0);
		"13-0123" == c ? (tDateDay0401 = $.cookie("tDateDay0401"), tDateDay0401 && "true" == tDateDay0401 ? a() : ($.cookie("tDateDay0401", "true"), b.tMessage("哎呀，白做了！特效做的辣么强大，系统崩溃了好么! o(>﹏<)o ", "callback", function() {
			a(), $("#june").show(), setTimeout(function() {
				b.tMessage("嘎嘎，吓你的！ 愚悦地继续使用吧，骚年 O(∩_∩)O。<br /><br /><br />亲，愚人节快乐！ ")
			}, 1e3), clearTimeout(d)
		}), $("#june").hide(), d = setTimeout(function() {
			a(), $("#june").show(), setTimeout(function() {
				b.tMessage("嘎嘎，吓你的！ 愚悦地继续使用吧，骚年 O(∩_∩)O。<br /><br /><br />亲，愚人节快乐！ ")
			}, 1e3)
		}, 1e4))) : ($.removeCookie("tDateDay0401"), a())
	}, a
}), define("scripts/saveChoose.js", function(a) {
	return a.click = function(a, b) {
		var c = require("scripts/D"),
			d = require("scripts/moduleManage"),
			e = require("scripts/tAjax");
		null != c.openSaveDocName ? c.tConfirm("您在" + c.openSaveDocTime + "已经保存了一份名为 <strong>" + c.openSaveDocName + "</strong> 的存档，您可以选择以下操作：", function() {
			c.tLoading(!0), d.snapSave(function(b) {
				var f = {};
				f.actionCollection = c.juneSnapArray1, f.actionConfig = b, c.tLoading(!0), e.ajaxJsonS("api/save", {
					saveName: c.openSaveDocName,
					sasID: c.openSaveDocID,
					type: "cover",
					saveObj: f
				}, function(a) {
					c.tLoading(!0), c.tLoading(!1), c.tMessage(a[1]), a[3] && (c.openSaveDocTime = a[3]), d.getSave([c.tUserLogin, c.tUserName])
				})
			})
		}, function() {
			b(a)
		}, ["覆盖保存", "另存为"]) : b(a)
	}, a
}), define("scripts/pencil.js", function(a) {
	var f, b = require("scripts/D");
	return require("scripts/action"), require("scripts/layer"), b.appConfig, b.pencilLine = null, b.pencilStartTime = null, b.pencilThick = 1, $('<div id="pencilDefaultSet" style="z-index: 8002;"><div class="pencil-head"></div><div class="pencil-title">铅笔工具设置面板</div><div class="pencil-cipanel"><span class="component"><i>X:</i><input type="text" value="0" class="except-keyboard" id="pencilCom1" /></span><span class="component"><i>Y:</i><input type="text" value="0" class="except-keyboard" id="pencilCom2" /></span><span class="component"><i>长:</i><input type="text" value="0" class="except-keyboard" id="pencilCom3" /></span></div><ul><li><label class="pencil-label-1 pencil-radio-1 selected" for="pencilStyle0" title="实线"></label><input class="pencil-radio" type="radio" name="pencilStyle" id="pencilStyle0" checked="checked" value="solid"><label class="pencil-label-1 pencil-radio-2" for="pencilStyle1" title="虚线"></label><input class="pencil-radio" type="radio" name="pencilStyle" id="pencilStyle1" value="dashed"><label class="pencil-label-1 pencil-radio-3" for="pencilStyle2" title="点状线"></label><input class="pencil-radio" type="radio" name="pencilStyle" id="pencilStyle2" value="dotted"></li><li><label class="pencil-label-2" for="pencilDegree">粗　细：</label><input class="pencil-input-1 ui-buttonset" type="text" name="pencilDegree" id="pencilDegree" value="1"><span style="position:absolute;left:90px;color:#acacac;">px</span><label class="pencil-label-2" for="pencilColor_choose">颜　色：</label><input class="pencil-input-2 pencilsetcolor tColorPicker ui-buttonset" type="text" id="pencilColor_choose" value="#ff0044" style="color:#ff0044;background-color:#ff0044;"><input class="pencil-hidden ui-buttonset" type="hidden" name="pencilColor" id="pencilColor" value="#ff0044"></li><li><label class="pencil-label-2" for="pencilOpacity">透明度：</label><input class="pencil-input-1 ui-buttonset" type="text" name="pencilOpacity" id="pencilOpacity" value="100"><span style="position:absolute;left:90px;color:#acacac;">%</span><label class="pencil-label-2" for="pencilOpacity" style="display:none;">层级：</label><select class="pencil-select" id="pencilLevel" name="pencilLevel" style="display:none;width:70px;"><option value="1000" selected="selected">应用上方</option><option value="200">应用下方</option></select></li></ul><div class="pencil-btn-5">删　除</div><div class="pencil-btn-1">确　认</div><div class="pencil-btn-2">取　消</div><div class="pencil-btn-3">确　认</div><div class="pencil-btn-4">取　消</div></div>').appendTo(b.b).hide().tooltip({
		position: {
			my: "left top",
			at: "right-24 top+24"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	}).on("mousedown.dragEvent-1", ".pencil-title", function(b) {
		a.baseDrag.call(this, b)
	}), f = $("#pencilDefaultSet"), f.on("click", ".pencil-btn-1", function() {
		f.hide()
	}), f.on("click", ".pencil-btn-2", function() {
		$("#mouseaction").children(":eq(0)").trigger("click"), f.hide()
	}), f.on("click", ".pencil-btn-3", function() {
		var a, c, d, e, g, h, i, j;
		b.pencilLine && b.pencilLine.length > 0 && (a = b.tParseInt($("#pencilDegree").val()), c = $("#pencilColor").val(), d = $("#pencilOpacity").val(), e = $("#pencilLevel").val(), g = f.find("input[name='pencilStyle']:checked").val(), 1 > a && (a = 1), b.pencilLine.css({
			borderWidth: a,
			borderColor: RGBToHex(c, "#ff0044"),
			opacity: d / 100,
			zIndex: e,
			borderStyle: g
		}).attr("data-pts", a + ";" + RGBToHex(c, "#ff0044") + ";" + d + ";" + g + ";" + e), h = b.tParseInt($("#pencilCom1").val()), i = b.tParseInt($("#pencilCom2").val()), j = b.tParseInt($("#pencilCom3").val()), b.pencilLine.css({
			left: h,
			top: i
		}), b.pencilLine.children(".pencilLength").children(".nline").html(j), "ns" == b.pencilLine.attr("data-d") ? (b.pencilLine.height(j).css({
			borderTop: "none",
			borderBottom: "none",
			borderRight: "none"
		}), b.pencilLine.children(".pencilLength").height(j)) : (b.pencilLine.width(j).css({
			borderLeft: "none",
			borderBottom: "none",
			borderRight: "none"
		}), b.pencilLine.children(".pencilLength").width(j)), f.hide())
	}), f.on("click", ".pencil-btn-4", function() {
		f.hide()
	}), f.on("click", ".pencil-btn-5", function() {
		b.pencilLine.length > 0 && b.pencilLine.remove(), f.hide()
	}), f.on("change", "input[name='pencilStyle']", function() {
		$(this).parent().children("label").removeClass("selected"), $(this).prev("label").addClass("selected")
	}), a.baseDrag = function(a) {
		var c = !0,
			d = a.pageX,
			e = a.pageY,
			g = b.tParseInt(f.css("left")) - d,
			h = b.tParseInt(f.css("top")) - e;
		b.baseSetDrag = !0, b.d.on("mousemove.dragEvent", function(a) {
			if (c) {
				var d = a.pageX + g,
					e = a.pageY + h;
				0 > d && (d = 0), 0 > e && (e = 0), d + f.width() > b.w.width() && (d = b.w.width() - f.width()), e + f.height() > b.w.height() && (e = b.w.height() - f.height()), f.css({
					left: d,
					top: e
				})
			}
		}), b.d.on("mouseup.dragEvent", function() {
			c = !1
		})
	}, a.Start = function(a) {
		var c, d, e, g, h, i, j, k;
		if (f.hide(), c = $(a.target), d = null, b.pencilDrag = !1, b.pencilPointerDrag = !0, c.hasClass("t-pencilLine") || c.hasClass("pencilPointer") || c.parent().hasClass("pencilPointer") || c.hasClass("pencilBox") || c.hasClass("pencilLength")) {
			if (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), d = c.hasClass("pencilPointer") || c.hasClass("pencilBox") ? c.parent() : c.parent().parent(), c.hasClass("t-pencilLine") && (d = c), c.hasClass("pencilBox") && (b.pencilDrag = !0, b.pd_x = a.pageX, b.pd_y = a.pageY, b.pd_left = b.tParseInt(d.css("left")) - b.pd_x, b.pd_top = b.tParseInt(d.css("top")) - b.pd_y), b.june.children(".pencilLineCreate").length > 0) return b.june.children(".pencilLineCreate").removeClass("pencilLineCreate").addClass("pencilLineEdit"), b.pencilPointerDrag = !1, void 0;
			b.pencilLine = d, b.pencilLine.hasClass("pencilLineEdit") || (e = (b.pencilLine.attr("data-pts") || "1;#ff0044;1;solid;1000").split(";"), $("#pencilDegree").val(e[0]), $("#pencilColor").val(e[1]), $("#pencilColor").prev("input").val(e[1]).css({
				color: e[1],
				backgroundColor: e[1]
			}), $("#pencilOpacity").val(e[2]), $("#pencilLevel").val(e[4]), f.find("label").removeClass("selected"), f.find("input[name='pencilStyle']").prop("checked", !1), f.find("input[name='pencilStyle'][value='" + e[3] + "']").prop("checked", !0), f.find("input[name='pencilStyle'][value='" + e[3] + "']").prev("label").addClass("selected")), b.june.children(".pencilLineEdit").removeClass("pencilLineEdit"), b.june.children(".pencilLineCreate").removeClass("pencilLineCreate"), b.pencilLine.addClass("pencilLineEdit"), b.pencilLine.attr("data-edit", "a0"), "ns" == b.pencilLine.attr("data-d") ? ((c.hasClass("pencilPointer1") || c.parent().hasClass("pencilPointer1")) && b.pencilLine.attr("data-edit", "a3"), (c.hasClass("pencilPointer2") || c.parent().hasClass("pencilPointer2")) && b.pencilLine.attr("data-edit", "a4")) : ((c.hasClass("pencilPointer1") || c.parent().hasClass("pencilPointer1")) && b.pencilLine.attr("data-edit", "a1"), (c.hasClass("pencilPointer2") || c.parent().hasClass("pencilPointer2")) && b.pencilLine.attr("data-edit", "a2")), c.hasClass("pencilPointer") || c.parent().hasClass("pencilPointer") || b.pencilLine.attr("data-edit", "a0")
		} else if (0 == b.june.children(".pencilLineCreate").length && 0 == b.june.children(".pencilLineEdit").length) {
			if ("junebox" == c.attr("id") || "tZdyDialog" == c.attr("id")) return;
			b.pencilTime = 0, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.pencilStartX = a.pageX + b.junebox.scrollLeft(), b.pencilStartY = a.pageY + b.junebox.scrollTop(), g = b.tParseInt($("#pencilDegree").val()), h = $("#pencilColor").val(), i = $("#pencilOpacity").val(), j = $("#pencilLevel").val(), k = f.find("input[name='pencilStyle']:checked").val(), 1 > g && (g = 1), b.pencilLine = $('<div class="t-pencilLine pencilLineCreate"><div class="pencilLength"><span class="lline"></span><span class="nline">0</span><span class="rline"></span></div><div class="pencilBox"></div><span class="pencilCoordinatesStart">0</span><span class="pencilCoordinatesEnd">0</span><span class="pencilAssist" style="position:absolute;"></span><span class="pencilPointer pencilPointer1"><img height="15" src="/2.0/images/pencilPointer1.gif"/></span><span class="pencilPointer pencilPointer2"><img height="15" src="/2.0/images/pencilPointer1.gif"/></span><span class="pencilCloseBtn"></span></div>').css({
				borderWidth: g,
				borderColor: RGBToHex(h, "#ff0044"),
				opacity: i / 100,
				zIndex: j,
				borderStyle: k
			}).attr("data-pts", g + ";" + RGBToHex(h, "#ff0044") + ";" + i + ";" + k + ";" + j).appendTo(b.june).offset({
				left: b.pencilStartX - b.junebox.scrollLeft(),
				top: b.pencilStartY - b.junebox.scrollTop()
			}), c.hasClass("t-app") && (b.pencilLine.hide(), clearTimeout(b.pencilStartTime), b.pencilStartTime = setTimeout(function() {
				b.pencilLine.length > 0 && b.pencilLine.show().offset({
					left: b.pencilStartX - b.junebox.scrollLeft(),
					top: b.pencilStartY - b.junebox.scrollTop()
				})
			}, 300))
		} else b.pencilPointerDrag = !1, 0 == b.june.children(".pencilLineCreate").length ? b.june.children(".pencilLineEdit").removeClass("pencilLineEdit") : b.pencilLine.removeClass("pencilLineCreate").addClass("pencilLineEdit"), b.pencilStartX = null, b.pencilStartY = null
	}, a.Ing = function(a) {
		var c, d, h, i, j, k, l, m, x, y, z, n, o, p, q, r, s, t, u, v, w, A, B;
		if (b.pencilPointerDrag && b.pencilLine) {
			if (b.pencilDrag) return c = a.pageX + b.pd_left, d = a.pageY + b.pd_top, b.pencilLine.width(), b.pencilLine.height(), 0 > c && (c = 0), 0 > d && (d = 0), c + b.pencilLine.width() > b.june.width() && (c = b.june.width() - b.pencilLine.width()), d + b.pencilLine.height() > b.june.height() && (d = b.june.height() - b.pencilLine.height()), b.pencilLine.css({
				left: c,
				top: d
			}), "we" == b.pencilLine.attr("data-d") ? b.pencilLine.children(".pencilAssist").offset({
				top: b.june.offset().top
			}) : b.pencilLine.children(".pencilAssist").offset({
				left: b.june.offset().left
			}), void 0;
			if (b.pencilLine.hasClass("pencilLineEdit")) {
				if (h = b.pencilLine.attr("data-edit") || "a0", "a0" == h) return;
				"a1" == h ? (b.pencilStartX = b.pencilLine.offset().left + b.junebox.scrollLeft() + b.pencilLine.width(), b.pencilStartY = b.pencilLine.offset().top + b.junebox.scrollTop()) : "a2" == h ? (b.pencilStartX = b.pencilLine.offset().left + b.junebox.scrollLeft(), b.pencilStartY = b.pencilLine.offset().top + b.junebox.scrollTop()) : "a3" == h ? (b.pencilStartX = b.pencilLine.offset().left + b.junebox.scrollLeft(), b.pencilStartY = b.pencilLine.offset().top + b.junebox.scrollTop() + b.pencilLine.height()) : "a4" == h && (b.pencilStartX = b.pencilLine.offset().left + b.junebox.scrollLeft(), b.pencilStartY = b.pencilLine.offset().top + b.junebox.scrollTop()), i = b.tParseInt($("#pencilDegree").val()), j = $("#pencilColor").val(), k = $("#pencilOpacity").val(), l = $("#pencilLevel").val(), m = f.find("input[name='pencilStyle']:checked").val(), b.pencilLine.attr("data-pts", i + ";" + RGBToHex(j, "#ff0044") + ";" + k + ";" + m + ";" + l), b.pencilLine.hasClass("pencilLineEdit"), b.pencilLine.removeClass("pencilLineEdit").addClass("pencilLineCreate"), b.pencilTime = 1
			}
			b.pencilLine.hasClass("pencilLineCreate") && (n = b.pencilStartX, o = b.pencilStartY, p = a.pageX + b.junebox.scrollLeft(), q = a.pageY + b.junebox.scrollTop(), r = b.june.width() + b.offsleft, s = b.june.height() + b.offstop, t = b.junebox.offset().left + b.junebox.width(), u = b.junebox.offset().top + b.junebox.height(), v = (b.pencilLine.attr("data-pts") || "1;#ff0044;1;solid;1000").split(";"), w = b.june.offset(), A = !1, B = !1, (Math.abs(n - p) > 5 || Math.abs(o - q) > 5) && (clearTimeout(b.pencilStartTime), b.pencilLine.show()), "" == v[0] && (v[0] = 0), n > p && (z = p, p = n, n = z, A = !0), o > q && (z = q, q = o, o = z, B = !0), n < b.offsleft && (n = b.offsleft), o < b.offstop && (o = b.offstop), p > r && (p = r), q > s && (q = s), x = Math.abs(p - n), y = Math.abs(q - o), a.pageX > t - 15 && a.pageX < t && b.junebox.scrollLeft(b.junebox.scrollLeft() + 30), a.pageX < b.junebox.offset().left + 15 && a.pageX > b.junebox.offset().left && b.junebox.scrollLeft(b.junebox.scrollLeft() - 30), a.pageY > u - 15 && a.pageY < u && b.junebox.scrollTop(b.junebox.scrollTop() + 30), a.pageY < b.junebox.offset().top + 15 && a.pageY > b.junebox.offset().top && b.junebox.scrollTop(b.junebox.scrollTop() - 30), y > x ? (b.pencilLine.children(".pencilAssist").width(b.june.width()).height(1).offset({
				left: w.left
			}), b.pencilLine.offset({
				left: b.pencilStartX - b.junebox.scrollLeft(),
				top: o - b.junebox.scrollTop()
			}).height(y).width(1).css({
				border: "none",
				borderLeft: v[0] + "px " + v[3] + " " + v[1]
			}), B ? b.pencilLine.children(".pencilAssist").css({
				top: "0",
				bottom: "auto",
				borderTop: "1px dashed #60c9da",
				borderBottom: "none"
			}) : b.pencilLine.children(".pencilAssist").css({
				top: "auto",
				bottom: "0",
				borderTop: "none",
				borderBottom: "1px dashed #60c9da"
			}), b.pencilLine.children(".pencilLength").addClass("pl2").removeClass("pl1").height(y).width(24).css("line-height", y + "px"), b.pencilLine.children(".pencilLength").children(".nline").html(y), b.pencilLine.children(".pencilLength").children(".lline").height(b.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? b.pencilLine.children(".pencilLength").height() / 2 - 12 : 0), b.pencilLine.children(".pencilLength").children(".rline").height(b.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? b.pencilLine.children(".pencilLength").height() / 2 - 12 : 0), b.pencilLine.children(".pencilCoordinatesStart").html("(" + (b.pencilStartX - b.offsleft) + "," + (o - b.offstop) + ")"), b.pencilLine.children(".pencilCoordinatesEnd").html("(" + (b.pencilStartX - b.offsleft) + "," + (o + y - b.offstop) + ")"), b.pencilLine.children(".pencilPointer1").css({
				top: -12,
				left: "auto",
				right: "auto",
				bottom: "auto"
			}), b.pencilLine.children(".pencilPointer2").css({
				top: "auto",
				left: "auto",
				right: "auto",
				bottom: -2
			}), b.pencilLine.attr("data-d", "ns").addClass("pl-ns").removeClass("pl-we"), b.pencilLine.children(".pencilPointer").children("img").attr("src", "/2.0/images/pencilPointer2.gif").attr("height", "25").css("cursor", "ns-resize")) : (b.pencilLine.children(".pencilAssist").width(1).height(b.june.height()).offset({
				top: w.top
			}), b.pencilLine.offset({
				left: n - b.junebox.scrollLeft(),
				top: b.pencilStartY - b.junebox.scrollTop()
			}).width(x).height(1).css({
				border: "none",
				borderTop: v[0] + "px " + v[3] + " " + v[1]
			}), A ? b.pencilLine.children(".pencilAssist").css({
				left: "0",
				right: "auto",
				borderLeft: "1px dashed #60c9da",
				borderRight: "none"
			}) : b.pencilLine.children(".pencilAssist").css({
				left: "auto",
				right: "0",
				borderLeft: "none",
				borderRight: "1px dashed #60c9da"
			}), b.pencilLine.children(".pencilLength").addClass("pl1").removeClass("pl2").width(x).height(24).css("line-height", "24px"), b.pencilLine.children(".pencilLength").children(".nline").html(x), b.pencilLine.children(".pencilLength").children(".lline").height(24), b.pencilLine.children(".pencilLength").children(".rline").height(24), b.pencilLine.children(".pencilCoordinatesStart").html("(" + (n - b.offsleft) + "," + (b.pencilStartY - b.offstop) + ")"), b.pencilLine.children(".pencilCoordinatesEnd").html("(" + (n + x - b.offsleft) + "," + (b.pencilStartY - b.offstop) + ")"), b.pencilLine.children(".pencilPointer1").css({
				top: "auto",
				left: -12,
				right: "auto",
				bottom: "auto"
			}), b.pencilLine.children(".pencilPointer2").css({
				top: "auto",
				left: "auto",
				right: -2,
				bottom: "auto"
			}), b.pencilLine.attr("data-d", "we").removeClass("pl-ns").addClass("pl-we"), b.pencilLine.children(".pencilPointer").children("img").attr("src", "/2.0/images/pencilPointer1.gif").attr("height", "15").css("cursor", "ew-resize")))
		}
	}, a.End = function() {
		if (0 == b.june.children(".pencilLineCreate").length && 0 == b.june.children(".pencilLineEdit").length && (b.pencilLine = null, f.children("pencil-btn-1").is(":hidden") && f.hide()), b.pencilLine) if (b.pencilTime > 0) if (b.pencilPointerDrag = !1, b.pencilLine.removeClass("pencilLineCreate").addClass("pencilLineEdit"), b.pencilStartX = null, b.pencilStartY = null, b.pencilLine && !b.baseSetDrag) {
			var h, i, c = b.pencilLine.offset().top,
				d = b.pencilLine.offset().left,
				e = b.pencilLine.width(),
				g = b.pencilLine.height(),
				j = e;
			"we" == b.pencilLine.attr("data-d") ? (i = d + e / 2 - 120, h = c + 40) : (h = c + g / 2 - 102, i = d + 40, j = g), f.is(":hidden") && ($("#pencilCom1").val(b.tParseInt(b.pencilLine.css("left"))), $("#pencilCom2").val(b.tParseInt(b.pencilLine.css("top"))), $("#pencilCom3").val(j)), h + 205 > b.junebox.offset().top + b.junebox.height() && (h = b.pencilLine.offset().top - 205 - 10), i + 240 > b.junebox.offset().left + b.junebox.width() && (i = b.pencilLine.offset().left - 240 - 10), f.css({
				top: h,
				left: i
			}).show(), f.children(".pencil-btn-1").hide(), f.children(".pencil-btn-2").hide(), f.children(".pencil-btn-3").show(), f.children(".pencil-btn-4").show(), f.children(".pencil-btn-5").show()
		} else b.pencilLine && b.baseSetDrag && f.show();
		else b.pencilLine.hasClass("pencilLineCreate") && b.pencilTime++;
		b.baseSetDrag = !1, b.pencilDrag = !1, b.pd_x = null, b.pd_y = null, b.pd_left = null, b.pd_top = null
	}, a._import = function(a) {
		var e, f, g, h, i, j, k, l, m, c = a.attr("data-pts") || "",
			d = [];
		d = c.split(";"), e = d[0], f = RGBToHex(d[1]), g = d[2] || "100", h = d[4] || "1000", i = d[3] || "solid", j = b.tParseInt(a.css("top")), k = b.tParseInt(a.css("left")), l = a.width(), m = a.height(), b.pencilLine = $('<div class="t-pencilLine pencilLineCreate"><div class="pencilLength"><span class="lline"></span><span class="nline">0</span><span class="rline"></span></div><div class="pencilBox"></div><span class="pencilCoordinatesStart">0</span><span class="pencilCoordinatesEnd">0</span><span class="pencilAssist" style="position:absolute;"></span><span class="pencilPointer pencilPointer1"><img height="15" src="/2.0/images/pencilPointer1.gif"/></span><span class="pencilPointer pencilPointer2"><img height="15" src="/2.0/images/pencilPointer1.gif"/></span><span class="pencilCloseBtn"></span></div>').css({
			borderWidth: e,
			borderColor: RGBToHex(f, "#ff0044"),
			opacity: g / 100,
			zIndex: h,
			borderStyle: i,
			top: a.css("top"),
			left: a.css("left"),
			width: a.css("width"),
			height: a.css("height")
		}).attr("data-pts", e + ";" + RGBToHex(f, "#ff0044") + ";" + g + ";" + i + ";" + h).attr("data-d", a.attr("data-d") || "we").appendTo(b.june), "we" == b.pencilLine.attr("data-d") ? (b.pencilLine.css({
			border: "none",
			borderTop: e + "px " + i + " " + RGBToHex(f, "#ff0044")
		}), b.pencilLine.children(".pencilAssist").offset({
			top: b.june.offset().top
		}).width(1).height(b.june.height()), b.pencilLine.children(".pencilCoordinatesStart").html("(" + k + "," + j + ")"), b.pencilLine.children(".pencilCoordinatesEnd").html("(" + (k + l) + "," + j + ")"), b.pencilLine.children(".pencilAssist").css({
			left: "auto",
			right: "0",
			borderLeft: "none",
			borderRight: "1px dashed #60c9da"
		}), b.pencilLine.children(".pencilLength").addClass("pl1").removeClass("pl2").width(l).height(24).css("line-height", "24px"), b.pencilLine.children(".pencilLength").children(".nline").html(l), b.pencilLine.children(".pencilLength").children(".lline").height(24), b.pencilLine.children(".pencilLength").children(".rline").height(24), b.pencilLine.children(".pencilPointer1").css({
			top: "auto",
			left: -12,
			right: "auto",
			bottom: "auto"
		}), b.pencilLine.children(".pencilPointer2").css({
			top: "auto",
			left: "auto",
			right: 0,
			bottom: "auto"
		}), b.pencilLine.removeClass("pl-ns").addClass("pl-we"), b.pencilLine.children(".pencilPointer").children("img").attr("src", "/2.0/images/pencilPointer1.gif").attr("height", "15").css("cursor", "ew-resize")) : (b.pencilLine.css({
			border: "none",
			borderLeft: e + "px " + i + " " + RGBToHex(f, "#ff0044")
		}), b.pencilLine.children(".pencilAssist").offset({
			left: b.june.offset().left
		}).width(b.june.width()).height(1), b.pencilLine.children(".pencilCoordinatesStart").html("(" + k + "," + j + ")"), b.pencilLine.children(".pencilCoordinatesEnd").html("(" + k + "," + (j + m) + ")"), b.pencilLine.children(".pencilAssist").css({
			top: "auto",
			bottom: "0",
			borderTop: "none",
			borderBottom: "1px dashed #60c9da"
		}), b.pencilLine.children(".pencilLength").addClass("pl2").removeClass("pl1").height(m).width(24).css("line-height", m + "px"), b.pencilLine.children(".pencilLength").children(".nline").html(m), b.pencilLine.children(".pencilLength").children(".lline").height(b.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? b.pencilLine.children(".pencilLength").height() / 2 - 12 : 0), b.pencilLine.children(".pencilLength").children(".rline").height(b.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? b.pencilLine.children(".pencilLength").height() / 2 - 12 : 0), b.pencilLine.children(".pencilPointer1").css({
			top: -12,
			left: "auto",
			right: "auto",
			bottom: "auto"
		}), b.pencilLine.children(".pencilPointer2").css({
			top: "auto",
			left: "auto",
			right: "auto",
			bottom: 0
		}), b.pencilLine.addClass("pl-ns").removeClass("pl-we"), b.pencilLine.children(".pencilPointer").children("img").attr("src", "/2.0/images/pencilPointer2.gif").attr("height", "25").css("cursor", "ns-resize")), b.june.children(".pencilLineEdit").removeClass("pencilLineEdit"), b.june.children(".pencilLineCreate").removeClass("pencilLineCreate"), b.june.children(".t-pencilLine").addClass("pencilLinePause"), b.pencilLine = null, b.pencilTime = 1, $("#mouseaction").children(":eq(0)").trigger("click")
	}, a
});