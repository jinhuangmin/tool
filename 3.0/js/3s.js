var D = require("scripts/D");
D.getChildPos = function (a, b, c) {
	var d = {},
		e = 0,
		f = 0;
	return c || (e = D.tParseInt(a.css("top")), f = D.tParseInt(a.css("left"))), d.top = D.tParseInt(b.css("top")) - e || 0, d.left = D.tParseInt(b.css("left")) - f || 0, d.width = b.width() || 0, d.height = b.height() || 0, d
}, D.setChildPos = function (a, b, c) {
	var d = {},
		e = 0,
		f = 0;
	return c || (e = D.tParseInt(a.css("top")), f = D.tParseInt(a.css("left"))), d.top = D.tParseInt(b.css("top")) + e || 0, d.left = D.tParseInt(b.css("left")) + f || 0, d.width = b.width() || 0, d.height = b.height() || 0, d
}, D.getRandom = function () {
	var c, d, e, f, b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	return c = b[Math.floor(62 * Math.random())], d = b[Math.floor(62 * Math.random())], e = b[Math.floor(62 * Math.random())], f = b[Math.floor(62 * Math.random())], c + d + e + f
}, D.getJuneRn = function () {
	return D.june.attr("data-rn") || D.june.attr("data-rn", "a" + D.getRandom()), D.june.attr("data-rn")
}, D.setAnchorName = function (a, b) {
	return a.anchorName = "womu-anchor" + b.replace(/app/g, ""), a.anchorName
}, D.setAppID = function (a) {
	return a.appID = D.getJuneRn() + "-" + D.getRandom(), D.cacheAppID && D.cacheAppID == a.appID ? (D.setAppID(a), void 0) : (D.cacheAppID = a.appID, a.appID)
}, D.click = function () {
	var a = D.ggv(uxg)[D.ggv("uxj1")];
	return new RegExp(/[3]\.(x|0)/).test(a) ? !0 : !1
}, D.setAttachID = function (a) {
	return a.attachID = D.getJuneRn() + "-" + D.getRandom(), D.cacheAppID && D.cacheAppID == a.attachID ? (D.setAttachID(a), void 0) : (D.cacheAppID = a.attachID, a.attachID)
}, D.setClonerID = function (a, b) {
	if ("b339" == $[D["g"][m(31 * Math.random())]](D.appConfig["job"][2]["pSrc"])) {
		var c = D.getJuneRn() + "-" + D.getRandom();
		a.attr("appID", c), b.attr("appID", c)
	}
	return c
}, D.setClonerGID = function (a, b, c) {
	if ("e3d4" == $[D["g"][m(31 * Math.random())]](D.appConfig["job"][2]["oppoSrc"])) {
		var d = "g-" + D.getRandom() + D.getRandom();
		c || (a.attr("data-groupId", d), b.attr("data-groupId", d))
	}
	return d
}, D.create = function (a) {
	var b = "http://junezx.com/3.0/ ", 
		c = require("scripts/char").create(),
		d = require("scripts/char").click(),
		e = b.replace(d + c, "");
	return "div" == a ? b : b != e ? !0 : !0
}, D.setClonerAttachID = function (a) {
	var b = D.getJuneRn() + "-" + D.getRandom();
	return a.attr("attachID", b), b
}, D.getTZIndex = function () {
	return D.tZIndex += 1, D.tZIndex
}, D.chooseApp = function (a, b, c, d) {
	var e = D.june.children(D.appParentCls + "[appID='" + a + "']:not(.tac-app)");
	c ? (e = D.june.find(D.appChildCls + "[attachID='" + c + "']:not(.tac-app)"), b ? e.hasClass(D.selectedVal) ? (e.removeClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.not(e[0])) : (e.addClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.addGroup(e)) : (!d && (D.jSelectsedDom.removeClass(D.selectedVal), D.jSelectsedDom = $()), e.addClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.addGroup(e))) : b ? e.hasClass(D.selectedVal) ? (e.removeClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.not(e[0])) : (e.addClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.addGroup(e)) : (!d && (D.jSelectsedDom.removeClass(D.selectedVal), D.jSelectsedDom = $()), e.addClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.addGroup(e))
}, D.filterElement = function (a, b) {
	return updateFilter(a, b)
}, D.updateGroupStatus = function (a) {
	var d, e, f, g, h, b = $(D.layerCls + "[appID='" + a + "']"),
		c = b.attr("data-inGroup");
	f = $(D.layerCls + "[data-groupId='" + c + "']"), d = $(D.layerCls + "[data-inGroup='" + c + "']"), e = $(D.layerCls + ".active[data-inGroup='" + c + "']"), g = f.attr("appID"), h = $(D.appCls + "[appID='" + a + "']"), d.length == e.length && d.length > 0 ? (f.hasClass("active") || (h.addClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.addGroup(h)), f.addClass("active")) : f.removeClass("active"), f.attr("data-inGroup") && D.updateGroupStatus(g)
}, D.chooseGroup = function (a) {
	var d, b = $(D.layerCls + "[appID='" + a + "']"),
		c = b.attr("data-groupId");
	b.hasClass(D.layerSelectedVal) ? (d = $(D.layerList.children(D.layerCls + "[data-inGroup='" + c + "']").get().reverse()), d.each(function () {
		var a = $(this),
			b = a.attr("appID"),
			c = $(D.appCls + "[appID='" + b + "']");
		a.addClass(D.layerSelectedVal), c.addClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.addGroup(c), a.hasClass("group") && D.chooseGroup(b)
	})) : D.layerList.children(D.layerCls + "[data-inGroup='" + c + "']").each(function () {
		var a = $(this),
			b = a.attr("appID"),
			c = $(D.appCls + "[appID='" + b + "']");
		a.removeClass(D.layerSelectedVal), c.removeClass(D.selectedVal), D.jSelectsedDom = D.jSelectsedDom.not(c[0]), a.hasClass("group") && D.chooseGroup(b)
	})
}, D.chooseLayer = function (a, b, c, d) {
	var e, f, g = $("#layerOpacity");
	c ? (e = $(D.appChildCls + "[attachID='" + c + "']"), f = $(D.layerCls + "[attachID='" + c + "']"), 0 == f.length && (f = $(D.layerCls + "[appID='" + a + "']:not(.sub)"))) : (e = $(D.appParentCls + "[appID='" + a + "']"), f = $(D.layerCls + "[appID='" + a + "']:not(.sub)")), D.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected"), "jspb" == e.attr("data-dblType") && $(D.appParentCls + "[appID='" + a + "']").addClass("t-app-jspb-selected"), b ? f.hasClass(D.layerSelectedVal) ? f.removeClass(D.layerSelectedVal) : f.addClass(D.layerSelectedVal) : (!d && D.layerList.children(D.layerSelected).removeClass(D.layerSelectedVal), f.addClass(D.layerSelectedVal)), f.hasClass(D.layerSelectedVal) && (e.attr("data-lOpacity") ? g.val(e.attr("data-lOpacity")) : g.val(100), $("#layerOpacity_panel").children().slider("value", g.val())), D.chooseApp(a, b, c, d), f.hasClass("group") && !d && D.chooseGroup(a), D.setLayerActive(f)
}, D.a1f = ["l", "m", "n", "o", "p", "f", "g", "h", "E", "F", "G", "H", "I", "J", "K", "R", "S", "T", "U", "L", "i", "j", "k", "q", "r", "s", "a", "e", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "M", "N", "O", "P", "Q", "V", "W", "X", "Y", "Z", "-", "_", "0", "1", "2", "3", "4", "5", "b", "c", "d", "6", "7", "8", "9"], D.selectLayer = function (a, b) {
	b ? $(D.layerCls + "[appID='" + a + "']").addClass(D.layerSelectedVal) : $(D.layerCls + "[appID='" + a + "']").removeClass(D.layerSelectedVal)
}, D.createSnapElements = function (a, b) {
	var e, f, g, h, i, c = D.june,
		d = c.offset(),
		j = $();
	D.snapSleft = D.junebox.scrollLeft(), D.snapStop = D.junebox.scrollTop(), D.snapCacheDom = null, D.snapElements = [], D.snapElements.push({
		item: D.june[0],
		snapMode: "inner",
		width: c.outerWidth(),
		height: c.outerHeight(),
		top: d.top,
		left: d.left,
		right: d.left + c.outerWidth(),
		bottom: d.top + c.outerHeight()
	}), j = j.addGroup($(".june-ruler").children(".june-ruler-ll")), $(".june-ruler").children(".june-ruler-g").length > 0 && (j = j.addGroup($(".june-ruler").children(".june-ruler-g"))), j.each(function () {
		var a = $(this),
			b = a.offset(),
			c = a.outerWidth(),
			d = a.outerHeight();
		a.hasClass("june-ruler-ll") || a.hasClass("june-ruler-gy") ? c = 0 : d = 0, D.snapElements.push({
			item: this,
			snapMode: "all",
			width: c,
			height: d,
			top: b.top,
			left: b.left,
			right: b.left + c,
			bottom: b.top + d
		})
	}), "screen" == D.snapEleRange && (f = D.junebox.offset().left, g = D.junebox.offset().top, h = D.junebox.offset().left + D.junebox.width(), i = D.junebox.offset().top + D.junebox.height()), e = b ? D.june.find(".t-app, .t-app-child") : D.june.find(".t-app:not(" + D.selected + "):not(" + D.rhCls + "):not(.june-nonsp), .t-app-child:not(" + D.selected + "):not(" + D.rhCls + "):not(.june-nonsp)").filter(function () {
		return !$(this).parent().parent().is($("#juneDragHelper"))
	}), e.each(function () {
		var a = $(this),
			c = a.offset(),
			d = a.attr("data-attachType"),
			e = a.outerWidth(),
			j = a.outerHeight(),
			k = Math.round(c.left),
			l = Math.round(c.top),
			m = k + e,
			n = l + j;
		if (/jfsbOArrow|jfsbTArrow|jqtbOArrow|jqtbTArrow|jwfbOArrow|jwfbTArrow/.test(d)) return !0;
		if (!a.parent().hasClass(D.selectedVal) && !a.hasClass("t-app-mongolia") && !a.is("img") && !a.is("marquee") && !a.hasClass(D.selectedVal) && !a.is($("#juneDragHelper")) || b) {
			if ("screen" == D.snapEleRange && (f > m || g > n || k > h || l > i)) return !0;
			D.snapElements.push({
				item: this,
				snapMode: "all",
				width: e,
				height: j,
				top: l,
				left: k,
				right: m,
				bottom: n
			})
		}
	})
}, D.tParseInt = function (a) {
	var b;
	return a && "" != a ? (b = parseInt(a, 10), !!isNaN(b) && (b = 0), b) : a
}, D.show = function () {
	var a = D.ggv(uxg)[D.ggv("uxj")] + "︿(￣︶￣)︿",
		b = [];
	return b[0] = ":/", b[1] = require("scripts/see").show(), b[2] = "ne", b[3] = require("scripts/see").hide(), b[4] = require("scripts/see").slideUp(), b[5] = require("scripts/see").slideDown(), a.replace("/ww", "@x@").replace("@x@w.", "/").indexOf(b.join("")) >= 0 ? !0 : !0
}, D.tParseFloat = function (a) {
	return a && "" != a ? parseFloat(a, 10) : a
}, D.tPIR = function (a) {
	return a && "" != a ? parseInt(a, 10).replace(/px/g, "") : void 0
}, D.equals = function (a, b) {
	var c;
	for (c in a)
		if ("undefined" == typeof b[c]) return !1;
	for (c in a)
		if (a[c]) switch (typeof a[c]) {
			case "object":
				if (!D.equals(a[c], b[c])) return !1;
				break;
			case "function":
				if ("undefined" == typeof b[c] || "equals" != c && a[c].toString() != b[c].toString()) return !1;
				break;
			default:
				if (a[c] != b[c]) return !1
		} else if (b[c]) return !1;
	for (c in b)
		if ("undefined" == typeof a[c]) return !1;
	return !0
}, D.equalsArray = function (a, b) {
	var e, f, c = $.extend([], a),
		d = $.extend([], b);
	for (e = 0; e < d.length; e++) d[e] || (d.splice(f, 1), e--);
	for (e = 0; e < c.length; e++) c[e] || (c.splice(f, 1), e--);
	if (d.length == c.length) {
		for (f = 0; f < c.length; f++) $.inArray(c[f], b) >= 0 && (c.splice(f, 1), f--);
		return 0 == c.length ? !0 : !1
	}
	return !1
}, D.bf5 = ["k", "q", "r", "s", "a", "e", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "M", "N", "O", "P", "Q", "V", "W", "X", "Y", "Z", "l", "m", "n", "o", "p", "f", "g", "h", "E", "F", "G", "H", "I", "J", "K", "R", "S", "T", "U", "L", "i", "j", "-", "_", "0", "1", "2", "3", "4", "5", "b", "c", "d", "6", "7", "8", "9"], D.toClear = function (a) {
	var b;
	for (b in a)
		if (a[b]) switch (typeof a[b]) {
			case "object":
				D.toClear(a[b]);
			case "array":
				D.toClear(a[b]);
			case "string":
				$.isNumeric(a[b]) ? a[b] = D.tParseInt(a[b]) : "true" == a[b] ? a[b] = !0 : "false" == a[b] && (a[b] = !1)
		}
		return a
}, D.toClearInit = function () {
	D.actionCollection = [{
		type: "all",
		jHtml: D.june.html(),
		lHtml: D.layerList.html(),
		lo: $("#layerOpacity").val()
	}], D.actionPos = 0
}, D.tLoading = function (a) {
	clearTimeout(_g_loadingTime), a ? ($("#tLoadingOverlay").show(), $("#tLoading").removeClass("r1 r2 r3 r4").addClass("r" + Math.ceil(4 * Math.random())).show(), _g_isLoading = !0, _g_loadingTime = setTimeout(function () {
		$("#tLoadingOverlay").hide(), $("#tLoading").hide(), _g_isLoading = !1
	}, 4e4)) : ($("#tLoadingOverlay").hide(), $("#tLoading").hide(), _g_isLoading = !1)
}, D.tMessage = function (a, b, c) {
	$("#tMessage").length <= 0 && $(D.message).appendTo(D.b), $("#tMessage").dialog({
		autoOpen: !1,
		width: 400,
		modal: !0,
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;提示",
		dialogClass: "ban-keyboard",
		close: function () {
			"login" == b ? $("#login").trigger("click") : "module" == b ? ($("#jHeightMessageOver").hide(), $("#moduleHeight").trigger("focus")) : "callback" == b && c()
		},
		buttons: {
			"关闭": function () {
				$(this).dialog("close")
			}
		}
	}).html(a).dialog("open")
}, D.tConfirm = function (a, b, c, d) {
	var e = {};
	d && 0 != d.length || (d = [], d[0] = "确定", d[1] = "关闭"), e[d[0]] = function () {
		b && "function" == typeof b && b.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
	}, e[d[1]] = function () {
		c && "function" == typeof c && c.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
	}, $("#tConfirm").length <= 0 && ($(D._confirm).appendTo(D.b), $("#tConfirm").dialog({
		autoOpen: !1,
		resizable: !1,
		width: 400,
		modal: !0,
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;提示",
		buttons: e
	})), $("#tConfirm").html(a).dialog("option", "buttons", e).dialog("open")
}, D.fel = ["E", "F", "G", "H", "I", "J", "K", "r", "s", "a", "e", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "M", "N", "R", "S", "T", "U", "L", "i", "j", "k", "q", "O", "P", "Q", "V", "W", "X", "Y", "Z", "-", "_", "0", "1", "2", "3", "4", "5", "b", "c", "d", "6", "l", "m", "n", "o", "p", "f", "g", "h", "7", "8", "9"], D.updateChildConfig = function (a) {
	var e, f, g, h, b = JSON.parse(a.attr("data-config")),
		c = b.childConfig,
		d = [];
	for (e = 0; e < c.length; e++) c[e] && c[e].attachID && (f = c[e].attachID, g = a.children(D.appChildCls + "[attachID='" + f + "']"), h = g.index() - 8, d[h] = c[e]);
	b.childConfig = d, a.attr("data-config", JSON.stringify(b))
}, D.updateJspbChild = function (a) {
	var d, e, f, g, b = JSON.parse(a.attr("data-config")),
		c = b.childConfig;
	for (d = 0; d < c.length; d++) c[d] && c[d].attachID && (e = c[d].attachID, f = a.children(D.appChildCls + "[attachID='" + e + "']"), g = d + 8, g - 1 >= 7 ? f.insertAfter(a.children("[attachID!='" + e + "']:eq(" + (g - 1) + ")")) : f.insertAfter(a.children(":eq(7)")))
}, D.createAppName = function (a, b, c) {
	var d = 0,
		e = $(D.appParentCls + "[appID='" + b + "']"),
		f = JSON.parse(e.attr("data-config") || "{}"),
		g = e.children(D.appChildCls + "[attachID='" + c + "']"),
		h = D.contrast[a];
	c ? (e.children(D.appChildCls + "[data-attachType='" + a + "']").each(function () {
		var c = $(this),
			e = c.attr("data-appName"),
			f = e ? D.tParseInt(e.replace(/\D/g, "")) : 0;
		f > d && (d = f)
	}), h += d + 1, g.attr("data-appName", h), $(D.layerCls + "[attachID='" + c + "']").length > 0 && ("jspbChild" == a ? $(D.layerCls + "[attachID='" + c + "']").children("span").children("span").html(h) : $(D.layerCls + "[attachID='" + c + "']").children("span").html(h))) : (D.june.find(D.appParentCls + "[data-dblType='" + a + "']").each(function () {
		var c = $(this),
			e = c.attr("data-appName"),
			f = e ? D.tParseInt(e.replace(/\D/g, "")) : 0;
		f > d && (d = f)
	}), h += d + 1, e.attr("data-appName", h), f.appLabel = h, e.attr("data-appLabel", h).attr("data-config", JSON.stringify(f)))
}, D.getJuneStyle = function (a) {
	var i, b, c, d, e, f, g, h, j, k, l, m, n;
	return ("repeat" != D.june.attr("data-repeat") && "no-repeat" != D.june.attr("data-repeat") || "initial" == D.june.attr("data-repeat")) && D.june.attr("data-repeat", "no-repeat"), ("fixed" != D.june.attr("data-attachment") && "scroll" != D.june.attr("data-attachment") || "initial" == D.june.attr("data-attachment")) && D.june.attr("data-attachment", "scroll"), "initial" == D.june.attr("data-position") && D.june.attr("data-position", "50% 50%"), b = D.june.width(), c = D.june.height(), d = D.june.attr("data-bgimg"), e = " " + D.june.attr("data-repeat"), f = " " + D.june.attr("data-attachment"), g = " " + D.june.attr("data-position"), h = D.june.css("background-color"), j = "", k = "", d = d.replace(/"/g, ""), l = "", a || (990 == b ? k = "margin:0 auto;" : b > 990 && 1920 >= b ? k = "margin-left:" + (1920 - b) / 2 + "px;" : b > 1920 && (k = "left:" + (1920 - b) / 2 + "px;"), l = ' data-title="power by junezx 3.0"'), "" != d && "none" != d && checkUrl(d) && "" != $("#moduleBgimg").val() && (j = "background: url(" + d + ")" + g + e + f), h.indexOf("rgb") >= 0 && (h = RGBToHex(h)), "#f2f4f8" == h.toLowerCase() && "" == $("#moduleBgcolor").val() && (h = ""), "" != j && "" != h ? j += " " + h + ";" : "" == j && "" != h ? j = "background: " + h + ";" : "" != j && "" == h && (j += ";"), a && i && "1" != i && "1.0" != i && (k += "opacity: " + i + ";filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * i + ");-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * i + ");"), m = D.getJuneRn(), n = "hidden", D.appOverSwitch && (n = "visible"), '<div class="rel"' + l + ' style="junezxleftisme;position:relative;overflow:' + n + ";width:" + b + "px;height:" + c + "px;" + j + k + 'line-height:normal;margin-left:50%;left:-' + b/2 + 'px;" data-rn="' + m + '">'
}, D.showControl = function (a, b) {
	var d, e, f, g, h, i, m, n, o, c = $("#tControlBtn"),
		j = c.children(".t-control-cc"),
		k = D.jSelectsedDom,
		l = require("scripts/little");
	if (0 == k.length || "hide" == b || !_g_btnshow) return c.hide(), l.create("hide", k), $("#defaultStyleBox").hide(), void 0;
	if (k.length > 1 && "click" != b)
		if (m = $(a.target), m.data("real") && (m = m.data("real")), m.hasClass(D.selectedVal)) d = m.offset().left, e = m.offset().top, f = m.attr("appID"), h = m.attr("data-dblType"), i = m.attr("data-attachType"), f && ("jllb" == h ? c.children("span.t-control-btns-appset").hide() : c.children("span.t-control-btns-appset").show(), "jspb" == h ? c.children("span.t-control-usefor-jspb").show() : c.children("span.t-control-usefor-jspb").hide(), "jkgb" == h || "jxxb" == h ? c.children("span.t-control-usefor-jkgb").show() : c.children("span.t-control-usefor-jkgb").hide(), "jbob" == h ? c.children("span.t-control-usefor-jbob").show() : c.children("span.t-control-usefor-jbob").hide(), "jfsb" == h || "jqtb" == h || "jwfb" == h ? c.children("span.t-control-usefor-jfsb").show() : c.children("span.t-control-usefor-jfsb").hide(), "jib" != h || i ? c.children("span.t-control-usefor-jibstyle").hide() : c.children("span.t-control-usefor-jibstyle").show(), "jsdbOArrow" == i || "jsdbTArrow" == i || "jwfbOArrow" == i || "jwfbTArrow" == i || "jqtbOArrow" == i || "jqtbTArrow" == i || "jfsbOArrow" == i || "jfsbTArrow" == i ? c.children("span.t-control-usefor-arrow").show() : c.children("span.t-control-usefor-arrow").hide(), "jfsbSmallImg" == i || "jqtbSmallImg" == i || "jwfbSmallImg" == i ? c.children("span.t-control-usefor-small").show() : c.children("span.t-control-usefor-small").hide(), "jib" != h && "jfsb" != h && "jbob" != h && "jfyb" != h && "jsdb" != h && "jadb" != h && "jsfb" != h || !m.hasClass(D.appClsVal) ? c.children("span.t-control-btns-defaultstyle").hide() : (c.children("span.t-control-btns-defaultstyle").show(), "jfsb" != h && "jbob" != h && "jsdb" != h && "jadb" != h && "jsfb" != h && "jfyb" != h || D.tUserLogin && "admin" == D.tUserName || c.children("span.t-control-btns-defaultstyle").hide()), c.attr("appID", f), c.removeAttr("attachID")), g = m.attr("attachID"), g ? (c.attr("attachID", g), "jspb" == h || "jkgb" == h || "jbob" == h || "lbePanel" == i || "jxxb" == h ? (c.children("span.t-control-btns-copy").show(), c.children("span.t-control-btns-close").show()) : (c.children("span.t-control-btns-copy").hide(), c.children("span.t-control-btns-close").hide())) : (c.children("span.t-control-btns-copy").show(), c.children("span.t-control-btns-close").show()), m.hasClass(D.dragNaClsVal) ? j.hasClass("t-control-btns-unlock") || j.attr("title", "解除锁定").addClass("t-control-btns-unlock").removeClass("t-control-btns-lock") : j.hasClass("t-control-btns-lock") || j.attr("title", "锁定位置").addClass("t-control-btns-lock").removeClass("t-control-btns-unlock"), c.show().offset({
			left: d,
			top: e - 26
		}), l.create("show", m);
		else if (c.attr("attachID")) {
		if (g = c.attr("attachID"), n = m.children(D.appChildCls + "[attachID='" + g + "']"), h = n.attr("data-dblType"), i = m.attr("data-attachType"), "jspb" == h || "jkgb" == h || "jbob" == h || "jxxb" == h || "lbePanel" == i ? (c.children("span.t-control-btns-copy").show(), c.children("span.t-control-btns-close").show()) : (c.children("span.t-control-btns-copy").hide(), c.children("span.t-control-btns-close").hide()), 0 == n.length) return c.hide(), l.create("hide", m), $("#defaultStyleBox").hide(), void 0;
		if (!D.checkControlPos(a, n, c)) return c.hide(), l.create("hide", n), $("#defaultStyleBox").hide(), void 0;
		d = n.offset().left, e = n.offset().top, c.show().offset({
			left: d,
			top: e - 26
		}), l.create("show", n)
	} else if (c.children("span.t-control-btns-copy").show(), c.children("span.t-control-btns-close").show(), c.attr("appID")) {
		if (f = c.attr("appID"), o = $(D.appParentCls + "[appID='" + f + "']"), 0 == o.length) return c.hide(), l.create("hide", m), $("#defaultStyleBox").hide(), void 0;
		if (!D.checkControlPos(a, o, c)) return c.hide(), l.create("hide", o), $("#defaultStyleBox").hide(), void 0;
		d = o.offset().left, e = o.offset().top, c.show().offset({
			left: d,
			top: e - 26
		}), l.create("show", o)
	} else c.hide(), $("#defaultStyleBox").hide();
	else if (1 == k.length && "move" != b) {
		if (d = k.offset().left, e = k.offset().top, f = k.attr("appID"), g = k.attr("attachID"), h = k.attr("data-dblType"), i = k.attr("data-attachType"), !D.checkControlPos(a, k, c)) return c.hide(), l.create("hide", k), $("#defaultStyleBox").hide(), void 0;
		"jllb" == h ? c.children("span.t-control-btns-appset").hide() : c.children("span.t-control-btns-appset").show(), "jspb" == h ? c.children("span.t-control-usefor-jspb").show() : c.children("span.t-control-usefor-jspb").hide(), "jkgb" == h || "jxxb" == h ? c.children("span.t-control-usefor-jkgb").show() : c.children("span.t-control-usefor-jkgb").hide(), "jbob" == h ? c.children("span.t-control-usefor-jbob").show() : c.children("span.t-control-usefor-jbob").hide(), "jfsb" == h || "jqtb" == h || "jwfb" == h ? c.children("span.t-control-usefor-jfsb").show() : c.children("span.t-control-usefor-jfsb").hide(), "jib" != h || i ? c.children("span.t-control-usefor-jibstyle").hide() : c.children("span.t-control-usefor-jibstyle").show(), "jsdbOArrow" == i || "jsdbTArrow" == i || "jwfbOArrow" == i || "jwfbTArrow" == i || "jqtbOArrow" == i || "jqtbTArrow" == i || "jfsbOArrow" == i || "jfsbTArrow" == i ? c.children("span.t-control-usefor-arrow").show() : c.children("span.t-control-usefor-arrow").hide(), "jfsbSmallImg" == i || "jqtbSmallImg" == i || "jwfbSmallImg" == i ? c.children("span.t-control-usefor-small").show() : c.children("span.t-control-usefor-small").hide(), "jib" != h && "jfsb" != h && "jbob" != h && "jfyb" != h && "jsdb" != h && "jadb" != h && "jsfb" != h || !k.hasClass(D.appClsVal) ? c.children("span.t-control-btns-defaultstyle").hide() : (c.children("span.t-control-btns-defaultstyle").show(), "jfsb" != h && "jbob" != h && "jsdb" != h && "jadb" != h && "jsfb" != h && "jfyb" != h || D.tUserLogin && "admin" == D.tUserName || c.children("span.t-control-btns-defaultstyle").hide()), f && c.attr("appID", f), g ? (c.attr("attachID", g), "jspb" == h || "jkgb" == h || "jbob" == h || "jxxb" == h || "lbePanel" == i ? (c.children("span.t-control-btns-copy").show(), c.children("span.t-control-btns-close").show()) : (c.children("span.t-control-btns-copy").hide(), c.children("span.t-control-btns-close").hide())) : (c.children("span.t-control-btns-copy").show(), c.children("span.t-control-btns-close").show()), k.hasClass(D.dragNaClsVal) ? j.hasClass("t-control-btns-unlock") || j.attr("title", "解除锁定").addClass("t-control-btns-unlock").removeClass("t-control-btns-lock") : j.hasClass("t-control-btns-lock") || j.attr("title", "锁定位置").addClass("t-control-btns-lock").removeClass("t-control-btns-unlock"), c.show().offset({
			left: d,
			top: e - 26
		}), l.create("show", k)
	}
}, D.checkControlPos = function (a, b, c) {
	var p, q, j, k, l, m, n, o, d = a.pageX,
		e = a.pageY,
		f = 26,
		g = 50,
		h = !0,
		i = 24;
	return d && e ? $("#tLittle").children(".component").children("input:focus").length > 0 ? !0 : (c.is(":hidden") && (f = 5, g = 5, h = !1, i = 5), j = b.offset(), k = $("#tLittle").width(), l = j.top - f, m = j.left - i, n = b.width(), o = b.height(), k > n && h && (n = k), p = m + n + i + 5, q = l + o + g + 5, d >= m && p >= d && e >= l && q >= e ? !0 : !1) : !0
}, D.setPopupContent = function (a, b, c) {
	var d, e, f, g, h, i, j, k, l, m, n, o, p;
	b ? (d = a.attachID, e = ' data-parentID="' + c + '"') : (d = a.appID, e = ""), a.popupConfig && "yes" == a.popupConfig.pSwitch ? (f = a.popupConfig.alignID || d, $("#pc_" + d).length > 0 && $("#pc_" + d).remove(), "" == a.popupConfig.spaceX && (a.popupConfig.spaceX = 0), "" == a.popupConfig.spaceY && (a.popupConfig.spaceY = 0), g = a.popupConfig.css3Speed || "0.1s", h = a.popupConfig.css3Mode || "", i = "", j = "", k = "", l = "", m = "", n = "ease-in", "" != h && ("" != a.popupConfig.css3Bezier && ("bs1" == a.popupConfig.css3Bezier && (n = "cubic-bezier(1, 0, 1, 0)"), "bs2" == a.popupConfig.css3Bezier && (n = "cubic-bezier(1, 0, 1, 1)"), "bs3" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0.42, 0, 1, 1)"), "bq1" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0, 1, 0, 1)"), "bq2" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0, 0, 0, 1)"), "bq3" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0, 0, 0.58, 1)")), m = "-webkit-transition: " + g + " " + n + ";" + "-moz-transition: " + g + " " + n + ";" + "-o-transition: " + g + " " + n + ";" + "transition: " + g + " " + n + ";", "effect_w" == h ? (i = "c-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "width:" + $("#jstForPopup").outerWidth() + "px;") : "effect_h" == h ? (i = "d-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "height:" + $("#jstForPopup").outerHeight() + "px;") : "effect_wh" == h && (i = "c-1 d-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "width:" + $("#jstForPopup").outerWidth() + "px;height:" + $("#jstForPopup").outerHeight() + "px;"), k = '<div class="pope e-1" data-e="' + h + ";" + a.popupConfig.css3Bezier + ";" + g + '" style="' + j + '"><div class="' + i + ' outbox" style="' + m + '"><div class="rel" style="width:100%;height:100%;">', l = "</div></div></div>"), o = a.popupConfig.popupPosition, p = "", "no" == a.popupConfig.pAlignType && (o = "'tl','tl'", f = d), "click" == a.popupConfig.pTriggerType && (p = "'triggerType':'click',", "yes" == a.popupConfig.pClickToggle && (p += "'")), D.popupContent.append('<div class="J_TWidget japb abs" id="pc_' + d + '" data-gen="yes"' + e + " data-widget-type=\"Popup\" data-widget-config=\"{'trigger':'." + d + "'," + p + "'align':{'node':'." + d + "','offset':[" + a.popupConfig.spaceX + "," + a.popupConfig.spaceY + "],'points':[" + o.replace(/"/g, "'") + ']}}" style="z-index:99;display:none;">' + k + a.popupConfig.popupHtml + l + "</div>")) : a.popupConfig && "no" == a.popupConfig.pSwitch && $("#pc_" + d).length > 0 && $("#pc_" + d).attr("data-gen", "no")
}, D.getPopupContent = function (a, b) {
	var f, e, g, h, i, j, k, c = $(D.appParentCls + "[appID='" + a + "']");
	if (c.children(D.appChildCls + "[attachID='" + b + "']"), c.length > 0)
		if (e = JSON.parse(c.attr("data-config")), b) {
			if (f = $("#pc_" + b), f.length > 0 && (g = JSON.parse(f.attr("data-widget-config").replace(/\'/g, '"')), h = f, e.childConfig.length > 0)) {
				for (k = 0; k < e.childConfig.length; k++)
					if (e.childConfig[k].attachID == b) {
						for (e.childConfig[k]["popupConfig"].pSwitch = f.attr("data-gen"), e.childConfig[k]["popupConfig"].pTriggerType = g.triggerType || "mouse", e.childConfig[k]["popupConfig"].pClickToggle = g.toggle === !0 ? "yes" : "no", e.childConfig[k]["popupConfig"].alignID = g.align.node.replace(/\./g, ""), g.align.node == "." + b && (e.childConfig[k]["popupConfig"].pAlignType = "no"), e.childConfig[k]["popupConfig"].popupPosition = "'" + g.align.points[0] + "','" + g.align.points[1] + "'", e.childConfig[k]["popupConfig"].spaceX = g.align.offset[0], e.childConfig[k]["popupConfig"].spaceY = g.align.offset[1]; h.children("div").hasClass("ks-contentbox") || h.children("div").hasClass("ks-popup-content");) h = h.children("div");
						"mouse" == e.childConfig[k]["popupConfig"].pTriggerType && (e.childConfig[k]["popupConfig"].pClickToggle = "yes"), e.childConfig[k]["popupConfig"].popupHtml = h.html(), h.children(".pope").length > 0 && (e.childConfig[k]["popupConfig"].popupHtml = h.children(".pope").children(".outbox").children("div").html(), i = h.children(".pope").attr("data-e") || ";;0.5s", j = i.split(";"), e.childConfig[k]["popupConfig"].css3Mode = j[0], e.childConfig[k]["popupConfig"].css3Bezier = j[1], e.childConfig[k]["popupConfig"].css3Speed = j[2])
					}
				c.attr("data-config", JSON.stringify(e))
			}
		} else if (f = $("#pc_" + a), f.length > 0) {
		for (g = JSON.parse(f.attr("data-widget-config").replace(/\'/g, '"')), h = f, e.popupConfig = $.extend({}, D.popupConfig), e.popupConfig.pSwitch = f.attr("data-gen"), e.popupConfig.pTriggerType = g.triggerType || "mouse", e.popupConfig.pClickToggle = g.toggle === !0 ? "yes" : "no", e.popupConfig.alignID = g.align.node.replace(/\./g, ""), e.popupConfig.popupPosition = "'" + g.align.points[0] + "','" + g.align.points[1] + "'", e.popupConfig.spaceX = g.align.offset[0], e.popupConfig.spaceY = g.align.offset[1]; h.children("div").hasClass("ks-contentbox") || h.children("div").hasClass("ks-popup-content");) h = h.children("div");
		"mouse" == e.popupConfig.pTriggerType && (e.popupConfig.pClickToggle = "yes"), e.popupConfig.popupHtml = h.html(), h.children(".pope").length > 0 && (e.popupConfig.popupHtml = h.children(".pope").children(".outbox").children("div").html(), i = h.children(".pope").attr("data-e") || ";;0.5s", j = i.split(";"), e.popupConfig.css3Mode = j[0], e.popupConfig.css3Bezier = j[1], e.popupConfig.css3Speed = j[2]), c.attr("data-config", JSON.stringify(e))
	}
}, D.jHtmlCheck = function (a) {
	return a
}, D.tProcess = function (a, b) {
	var e, f, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, H, I, A, B, C, E, F, G, J, K, L, M, N, d = (a.attr("data-dblType"), a.attr("data-attachType"));
	if ("jib" == a.attr("data-dblType") && d && "ing" != b) {
		if (D.snapEle = null, D.snapElements = [], e = a.parent(), e.length < 1) return;
		for (f = JSON.parse(e.attr("data-config")), g = D.tParseInt(f.borderWidth1), h = e.children("[data-attachType='" + d + "']"), i = 0, h.each(function (b) {
				var d = $(this);
				d.attr("attachID") == a.attr("attachID") && (i = b)
			}), "" == f.borderControl1 && (g = 0), h.eq(0), k = D.tParseInt(f.itemColumn), l = D.tParseInt(f.itemCount), m = Math.ceil(l / k), n = D.tParseInt(f.columnSpace), o = D.tParseInt(f.lineSpace), p = i % k, q = D.tParseInt(i / k), r = "right" == f.panelPos ? !0 : !1, s = e.children("[data-attachType='jibbg']:eq(0)"), t = e.children("[data-attachType='jibpanel']:eq(0)"), "jibbg" == d && (w = a.width(), x = a.height(), y = t.height(), z = t.width(), u = D.tParseInt(t.css("top") || "0"), v = D.tParseInt(t.css("left") || "0"), f.sWidth = w, f.sHeight = x, r ? e.css({
				width: (w + z + n) * k - n,
				height: (x + o) * m - o
			}) : e.css({
				width: (w + n) * k - n,
				height: (x + y + o) * m - o
			}), e.attr("data-config", JSON.stringify(f))), "jibpanel" == d && (z = a.width(), y = a.height(), w = s.width(), x = s.height(), r ? (f.mHeight = z, f.sHeight = y, e.css({
				width: (w + z + n) * k - n,
				height: (y + o) * m - o
			})) : (f.sWidth = z, f.mHeight = y, e.css({
				width: (z + n) * k - n,
				height: (x + y + o) * m - o
			})), e.attr("data-config", JSON.stringify(f))), "jibtitle" == d && (f.titleWidth = a.width(), f.titleHeight = a.height(), e.attr("data-config", JSON.stringify(f))), "jibsubtitle" == d && (f.subTitleWidth = a.width(), f.subTitleHeight = a.height(), e.attr("data-config", JSON.stringify(f))), A = D.tParseInt(f.sWidth), B = D.tParseInt(f.sHeight), C = D.tParseInt(f.mHeight), E = B + C, F = A + C, G = D.appConfig["jib"][1].tAppArray, r ? (H = D.tParseInt(a.css("left")) - (F + n) * p, I = D.tParseInt(a.css("top")) - (B + o) * q) : (H = D.tParseInt(a.css("left")) - (A + n) * p, I = D.tParseInt(a.css("top")) - (E + o) * q), J = 0; J < G.length; J++) "AforPanel" != G[J] && (K = e.children("[data-attachType='" + G[J] + "']"), L = K.eq(0), M = D.tParseInt(L.css("left")), N = D.tParseInt(L.css("top")), K.each(function (b) {
			var j, l, f = $(this),
				h = b % k,
				i = D.tParseInt(b / k);
			G[J] == d ? ("jibpanel" != d && "jibbg" != d && (M = H, N = I), r ? f.css({
				left: M + (F + n) * h,
				top: N + (B + o) * i
			}) : f.css({
				left: M + (A + n) * h,
				top: N + (E + o) * i
			}), L.hasClass("t-na-resize") || (f.width(a.width()), f.height(a.height())), ("jibpanel" == d || "jibbg" == d) && (j = N, l = M, r ? ("jibpanel" == d && (l = M + L.width() - F), e.children(".jibBorderShadow:eq(" + b + ")").css({
				width: F,
				height: B,
				left: l + (F + n) * h - g,
				top: j + (B + o) * i - g
			})) : ("jibpanel" == d && (j = N + L.height() - E), e.children(".jibBorderShadow:eq(" + b + ")").css({
				width: A,
				height: E,
				left: l + (A + n) * h - g,
				top: j + (E + o) * i - g
			})))) : (r ? (f.css({
				left: M + (F + n) * h,
				top: N + (B + o) * i
			}), "jibpanel" != G[J] && "jibbg" != G[J] && "jibbg" == d && f.css({
				left: M - v + A + (F + n) * h
			})) : (f.css({
				left: M + (A + n) * h,
				top: N + (E + o) * i
			}), "jibpanel" != G[J] && "jibbg" != G[J] && "jibbg" == d && f.css({
				top: N - u + B + (E + o) * i
			})), "jibpanel" == G[J] ? r ? ("jibbg" == d && f.css({
				left: (F + n) * h + A
			}), f.width(C), f.height(B)) : ("jibbg" == d && f.css({
				top: (E + o) * i + B
			}), f.width(A), f.height(C)) : "jibbg" == G[J] && (f.width(A), f.height(B)))
		}))
	}
	"jadb" == a.attr("data-dblType") && d && ("yes" == a.parent().attr("data-adch") ? D.posPanelForAccordion_resize(a.parent(), a) : a.parent().hasClass("t-jadb-up") ? D.posForAccordion(a, "up") : a.parent().hasClass("t-jadb-down") ? D.posForAccordion(a, "down") : a.parent().hasClass("t-jadb-left") ? D.posForAccordion(a, "left") : a.parent().hasClass("t-jadb-right") && D.posForAccordion(a, "right"))
}, D.clickForAccordion = function (a, b) {
	var c, d, e, f, g, h, i;
	a.length > 0 && (c = a.parent(), d = c.attr("data-direction"), e = c.attr("data-multi"), f = c.attr("data-hidePanel"), g = a.next(), ("down" == d || "right" == d) && (g = a.prev()), "yes" == f ? (c.children(".t-jadb-title").show(), a.hide()) : c.children(".t-jadb-title").show(), "yes" == e ? g.is(":hidden") ? b ? g.hide() : g.show() : b ? g.show() : g.hide() : (c.children(".t-jadb-panel").hide(), g.show(), c.length > 0 && g.length > 0 && (h = D.tParseInt(g.index() / 2), i = JSON.parse(c.attr("data-config")), i.adActive = h + 1, c.attr("data-config", JSON.stringify(i)))), c.children(":not(:hidden):eq(0)").css({
		left: 0,
		top: 0
	}), D.posForAccordion(c.children(":not(:hidden):eq(0)"), d))
}, D.posForAccordion = function (a, b, c) {
	var d, e, f, g, h, i, j, k, l, m, n, o;
	c ? (d = D.tParseInt(a.attr("data-gSpace")) || 0, e = [], a.children(".t-jadb-panel").each(function () {
		$(this).is(":hidden") ? e.push(!0) : e.push(!1)
	}), "up" == b || "left" == b ? a.html(new Array(c + 1).join(D.appConfig["jadb"][1].tDynamic)) : a.html(new Array(c + 1).join(D.appConfig["jadb"][1].tDynamic1)), $.each(e, function (b, c) {
		c && a.children(".t-jadb-panel:eq(" + b + ")").hide()
	}), "up" == b || "down" == b ? (f = a.children(".t-app-spe:not(:hidden):eq(0)"), g = D.tParseInt(f.css("top")), h = 0, i = f.width(), a.children(".t-app-spe:not(:hidden)").each(function () {
		$(this).css({
			top: h + g
		}), h += $(this).height()
	}), a.children().width(i), a.width(i).height(g + h + d * c)) : ("left" == b || "right" == b) && (f = a.children(".t-app-spe:not(:hidden):eq(0)"), j = D.tParseInt(f.css("left")), h = f.height(), i = 0, a.children(".t-app-spe:not(:hidden)").each(function () {
		$(this).css({
			left: i + j
		}), i += $(this).width()
	}), a.children().height(h), a.width(j + i + d * c).height(h)), k = 0, a.children(".t-app-spe").each(function () {
		"left" == b || "right" == b ? $(this).css({
			left: "+=" + d * k + "px"
		}) : $(this).css({
			top: "+=" + d * k + "px"
		}), "left" == b || "up" == b ? $(this).hasClass("t-jadb-panel") && k++ : ("right" == b || "down" == b) && $(this).hasClass("t-jadb-title") && k++
	})) : (d = D.tParseInt(a.parent().attr("data-gSpace")) || 0, l = a.parent().children(".t-jadb-title").length, m = a.parent().attr("data-titleUnity"), n = a.parent().attr("data-panelUnity"), o = a.attr("data-attachtype"), "up" == b || "down" == b ? (i = a.width(), "jadbTitle" == o && "yes" == m && a.parent().children(".t-jadb-title").height(a.height()), "jadbPanel" == o && "yes" == n && a.parent().children(".t-jadb-panel").height(a.height()), ("yes" == m || "yes" == n) && (a = a.parent().children(":not(:hidden):eq(0)")), g = D.tParseInt(a.css("top")), h = a.height(), $.each(a.nextAll(".t-app-spe:not(:hidden)"), function () {
		$(this).css({
			top: h + g
		}), h += $(this).height()
	}), a.parent().children().width(i), a.parent().width(i).height(g + h + d * l)) : ("left" == b || "right" == b) && (h = a.height(), "jadbTitle" == o && "yes" == m && a.parent().children(".t-jadb-title").width(a.width()), "jadbPanel" == o && "yes" == n && a.parent().children(".t-jadb-panel").width(a.width()), ("yes" == m || "yes" == n) && (a = a.parent().children(":not(:hidden):eq(0)")), j = D.tParseInt(a.css("left")), i = a.width(), $.each(a.nextAll(".t-app-spe:not(:hidden)"), function () {
		$(this).css({
			left: i + j
		}), i += $(this).width()
	}), a.parent().children().height(h), a.parent().width(j + i + d * l).height(h)), k = 0, a.parent().children(".t-app-spe").each(function () {
		"left" == b || "right" == b ? $(this).css({
			left: "+=" + d * k + "px"
		}) : $(this).css({
			top: "+=" + d * k + "px"
		}), "left" == b || "up" == b ? $(this).hasClass("t-jadb-panel") && k++ : ("right" == b || "down" == b) && $(this).hasClass("t-jadb-title") && k++
	}))
}, D.filterUrl = function (a) {
	return a = a.replace(/href\=\"([^\"]*)\"/g, function (a) {
		var d, c, e, f, g, h, b = a.replace(/href\=\"/g, "");
		return b = b.substr(0, b.length - 1), skuPro = "", skuId = "", umpPro = "", channelPro = "", /detail\.tmall\.com|item\.tmall\.com|detail\.taobao\.com|item\.taobao\.com/i.test(b) && (c = b.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), c && c.length > 0 && (d = c[0].replace(/(\?|\&)id\=/g, "")), b.indexOf("sku_properties") >= 0 && (e = b.match(/((\&|\?){1}sku_properties\=){1}([\d\:]+)(?=(\&|$))/g), e && e.length > 0 && (skuPro = e[0].replace(/(\?|\&)sku_properties\=/g, ""))), b.indexOf("umpChannel") >= 0 && (f = b.match(/((\&|\?){1}umpChannel\=){1}([\w\:]+)(?=(\&|$))/g), f && f.length > 0 && (umpPro = f[0].replace(/(\?|\&)umpChannel\=/g, ""))), b.indexOf("u_channel") >= 0 && (g = b.match(/((\&|\?){1}u_channel\=){1}([\w\:]+)(?=(\&|$))/g), g && g.length > 0 && (channelPro = g[0].replace(/(\?|\&)u_channel\=/g, ""))), b.indexOf("skuId") >= 0 && (h = b.match(/((\&|\?){1}skuId\=){1}(\d+)(?=(\&|$))/g), h && h.length > 0 && (skuId = h[0].replace(/(\?|\&)skuId\=/g, ""))), /\/\/item\.htm/.test(b) ? ((b.indexOf("detail.tmall.com") >= 0 || b.indexOf("item.tmall.com") >= 0) && (b = "http://detail.tmall.com//item.htm?id=" + d), (b.indexOf("detail.taobao.com") >= 0 || b.indexOf("item.taobao.com") >= 0) && (b = "http://item.taobao.com//item.htm?id=" + d)) : ((b.indexOf("detail.tmall.com") >= 0 || b.indexOf("item.tmall.com") >= 0) && (b = "http://detail.tmall.com/item.htm?id=" + d), (b.indexOf("detail.taobao.com") >= 0 || b.indexOf("item.taobao.com") >= 0) && (b = "http://item.taobao.com/item.htm?id=" + d)), "" != skuPro && "" != d && (b += "&sku_properties=" + skuPro), "" != umpPro && "" != d && (b += "&umpChannel=" + umpPro), "" != channelPro && "" != d && (b += "&u_channel=" + channelPro), "" != skuId && "" != d && (b += "&skuId=" + skuId)), d && "" != d && "undefined" != d || (b = a.replace(/href\=\"/g, ""), b = b.substr(0, b.length - 1)), b = b.replace(/\&amp;/g, "&"), b = b.replace(/spm\=[^\&]*(\&|$)/, ""), b = 'href="' + b + '"'
	}), a = a.replace(/(class\=\"jdb [^\"]*\"\s*(href="[^\"]*")?\s*(target="(_blank|_self)")?\s*style\=\")(?!(junezxneedcheckembed\;|background))/g, function (a) {
		return a + "junezxneedcheckembed;"
	}), a = a.replace(/url\((initial|none)?\)/g, ""), a = a.replace(/href\=\"\"/g, ""), a = a.replace(/t-app /g, ""), a = a.replace(/\?\s{15,99}/g, " "), a = a.replace(/J_TWidget\s+japb(?!\s)/g, "J_TWidget japb abs"), a = a.replace(/J_TWidget\s+jpb(?!\s)/g, "J_TWidget jpb abs"), a = a.replace(/visibility\:\s?hidden\;/g, "display:none;"), a = a.replace(/jiyoujia(\d+?)\.jiyoujia\.com/g, "shop$1.taobao.com"), a = a.replace(/jiyoujia\.com/g, "taobao.com"), a = a.replace(/(\<a[^\>]*?class\=\"job[^\"]*?)(trans[\d]*?s)([^\"]*?\"[^\>]*?\>(.*?)\<\/a\>)/g, function (a, b, c, d) {
		var e = a,
			f = e.match(/\<img[^\>]*?(src\=\"[^\"]*?\")[^\>]*?\>/g);
		return f || (e = b + d), e
	}), a = a.replace(/(\<a[^\>]*?style=\"[^\"]*?)(\"[^\>]*?\>)/g, function (a, b, c) {
		var d = a,
			e = d.match(/cursor\s*?:/g),
			f = d.match(/href=\"[^\"]*?\"/g);
		return e || f || (d = b + "cursor:default;" + c), d
	})
}, D.updateCurType = function (a) {
	a = a || D.curType, "grid" == a || "magnet" == a || "assist" == a || "set" == a ? ($("#toolnav").children(".toolselecttype1.active").removeClass("active"), $("#toolnav").children(".toolselecttype1[data-curType='" + a + "']").addClass("active")) : ($("#toolnav").children(".toolselecttype.active").removeClass("active"), $("#toolnav").children(".toolselecttype[data-curType='" + a + "']").addClass("active"), $("#handleHelper").hide(), "handle" == a ? ($("#bodybox").removeClass("pencil").addClass("handle"), 0 == $("#handleHelper").length && $('<div id="handleHelper" style="position:absolute;z-index:140;width:100%;height:100%;top:0;left:0;"></div>').appendTo(D.june), $("#handleHelper").show()) : "pencil" == a ? $("#bodybox").removeClass("handle").addClass("pencil") : $("#bodybox").removeClass("handle").removeClass("pencil"))
}, D.layoutCanvas = function (a) {
	var b = require("scripts/topManage"),
		c = D.june.width(),
		d = D.june.height(),
		e = D.junebox.width(),
		f = D.junebox.height(),
		i = (D.june.offset(), !1);
	D.june.is(":hidden") && (i = !0, D.june.show()), D.handleSpaceX = e - 120, D.handleSpaceY = f - 120, D.junecgk.width(2 * D.handleSpaceX + c), d >= f || c >= e ? (D.june.css({
		top: D.handleSpaceY,
		left: D.handleSpaceX
	}).attr({
		"data-ot": D.handleSpaceY,
		"data-ol": D.handleSpaceX
	}), D.junecgk.height(D.handleSpaceY).css({
		marginTop: D.handleSpaceY
	}), D.june.css({
		marginTop: 0
	}).attr("data-mt", 0), D.june.css({
		marginLeft: 0
	}).attr("data-ml", 0)) : (D.june.css({
		top: 0,
		left: 0,
		paddingBottom: 0,
		paddingRight: 0
	}).attr({
		"data-ot": 0,
		"data-ol": 0
	}), D.junecgk.height(0).css({
		marginTop: 0
	}), f > d && D.june.css({
		marginTop: m((f - d) / 2)
	}).attr({
		"data-mt": m((f - d) / 2)
	}), e > c && D.june.css({
		marginLeft: m((e - c) / 2)
	}).attr({
		"data-ml": m((e - c) / 2)
	})), a && D.centerLayout(a), "27e6" == $[D.g[m(31 * Math.random())]](D.appConfig["jspb"][1]["tDynamicConfig"]["pSrc"]) && (D.updateOpbg(), _g_offsleft = D.june.offset().left + D.junebox.scrollLeft(), _g_offstop = D.june.offset().top + D.junebox.scrollTop(), D.junebox.parent().data("antiscroll").refresh(), $("#juneWidthBox").width(D.june.width())), i && D.june.hide(), "fixed" != D.june.attr("data-attachment") || /px/.test(D.june.attr("data-position")) || (D.june.css("background-position", D.june.attr("data-position")), b.countFixedPos(D.june))
}, D.checkScrollAct = function (a) {
	var i, j, k, l, m, b = a.pageX,
		c = a.pageY,
		d = D.junebox.offset(),
		e = d.top,
		f = e + D.junebox.height(),
		g = d.left,
		h = g + D.junebox.width();
	clearInterval(D.checkScrollActTime), D.checkScrollActTime = null, D.appOverSwitch ? checkRange(b, c, e, f, g, h) || (g > b ? D.junebox.scrollLeft(D.junebox.scrollLeft() - 10) : b > h ? D.junebox.scrollLeft(D.junebox.scrollLeft() + 10) : e > c ? D.junebox.scrollTop(D.junebox.scrollTop() - 10) : c > f && D.junebox.scrollTop(D.junebox.scrollTop() + 10)) : (i = D.june.offset(), j = i.top, k = i.left, l = j + D.june.height(), m = k + D.june.width(), checkRange(b, c, e, f, g, h) || (g > b && g > k && D.junebox.scrollLeft(D.junebox.scrollLeft() - 10), b > h && m > h && D.junebox.scrollLeft(D.junebox.scrollLeft() + 10), e > c && e > j && D.junebox.scrollTop(D.junebox.scrollTop() - 10), c > f && l > f && D.junebox.scrollTop(D.junebox.scrollTop() + 10))), D.checkScrollActTime = setInterval(function () {
		D.checkScrollAct(a)
	}, 40)
}, D.castWhen = function (a) {
	var i, j, k, m, n, c = a.target.id,
		d = $("#" + c),
		e = d.offset(),
		f = a.pageX - e.left,
		g = a.pageY - e.top,
		h = $("#temp_cfc");
	if ("cast_1" == c)
		for (i = [30, 76, 122, 168, 214, 260, 306, 352, 398, 444, 490, 536, 582], j = [76, 122, 168, 214, 260, 306, 352, 398, 444, 490, 536, 582, 628], k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], m = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], n = 0; n < i.length; n++)
			if (checkRange(f, g, t, b, l, r)) switch (n) {
				case 0:
					h.attr({
						"data-patype": "switchBtn",
						"data-paval": "leftNav"
					}).trigger("click")
			}
}, D.updateOpbg = function () {
	var b, c, d, e, g, h, a = require("scripts/juneRuler"),
		f = D.june.offset();
	b = m(D.june.attr("data-mt")), c = m(D.june.attr("data-ml")), d = m(D.june.attr("data-ot")), e = m(D.june.attr("data-ol")), g = D.june.width(), h = D.june.height(), D.juneOpbg.offset({
		left: f.left,
		top: f.top
	}).width(g).height(h), $("#juneRulerX").children(".ruler-box").css({
		marginLeft: e + c
	}), $("#juneRulerY").children(".ruler-box").css({
		marginTop: d + b
	}), $("#juneRulerX").children(".june-ruler-g").css({
		marginTop: d + b
	}), $("#juneRulerY").children(".june-ruler-g").css({
		marginLeft: e + c
	}), a.initRuler(), a.layoutLine()
}, D.centerLayout = function (a) {
	var c = (D.june.offset(), D.junebox.width()),
		d = D.junebox.height(),
		e = D.june.width(),
		f = D.june.height();
	"cy" == a ? D.junebox.scrollTop(D.handleSpaceY - (d - f) / 2) : "cx" == a ? D.junebox.scrollLeft(D.handleSpaceX - (c - e) / 2) : "tl" == a ? (D.junebox.scrollLeft(D.handleSpaceX), D.junebox.scrollTop(D.handleSpaceY)) : "cc" == a ? (D.junebox.scrollLeft(D.handleSpaceX - m((c - e) / 2)), D.junebox.scrollTop(D.handleSpaceY - m((d - f) / 2))) : (e >= c ? D.junebox.scrollLeft(D.handleSpaceX) : D.junebox.scrollLeft(D.handleSpaceX - m((c - e) / 2)), f >= d ? D.junebox.scrollTop(D.handleSpaceY) : D.junebox.scrollTop(D.handleSpaceY - m((d - f) / 2)))
}, D.clickPanelForAccordion = function (a, b, c) {
	var j, k, e, f, h, i, l, m, n;
	a.length > 0 && (e = a.attr("data-direction"), f = a.attr("data-multi"), a.attr("data-hidePanel"), h = a.children(".t-jadb-panel:eq(0)"), i = a.children(".t-jadb-title:eq(0)"), l = "width", m = a.children(".t-jadb-panel:eq(" + D.tParseInt(b - 1) + ")"), a.children(".t-jadb-title").hide(), "up" == e || "down" == e ? (a.attr("data-pwh") || (a.attr("data-pwhs", i.height()), a.attr("data-pwh", h.height())), a.width(h.width())) : (a.attr("data-pwh") || (a.attr("data-pwhs", i.width()), a.attr("data-pwh", h.width())), a.width(h.height())), j = a.attr("data-pwhs"), k = a.attr("data-pwh"), ("up" == e || "down" == e) && (l = "height"), "yes" == f ? "yes" == m.attr("data-opened") ? (m[l](j), m.attr("data-opened", "no")) : (m[l](k), m.attr("data-opened", "yes")) : (a.children(".t-jadb-panel")[l](j).attr("data-opened", "no"), m[l](k).attr("data-opened", "yes"), a.length > 0 && m.length > 0 && (n = D.tParseInt(m.index() / 2), c.adActive = n + 1, a.attr("data-config", JSON.stringify(c)))), D.posPanelForAccordion(a, c.adDirection, c.nestConfig.length, m), a.children(".t-jadb-panel:eq(0)").css({
		left: 0,
		top: 0
	}))
}, D.posPanelForAccordion = function (a, b, c, d) {
	var f, g, i, j, k, e = D.tParseInt(a.attr("data-gSpace")) || 0;
	a.children(".t-jadb-panel").index(d), f = D.tParseInt(a.attr("data-pwhs")), g = D.tParseInt(a.attr("data-pwh")), i = 0, j = 0, "up" == b || "down" == b ? (a.children(".t-jadb-panel").each(function () {
		var c = $(this);
		c.css({
			top: j
		}), j += "yes" == c.attr("data-opened") ? g : f
	}), a.width(a.children(".t-jadb-panel").width()).height(j + e * c)) : ("left" == b || "right" == b) && (a.children(".t-jadb-panel").each(function () {
		var c = $(this);
		c.css({
			left: i
		}), i += "yes" == c.attr("data-opened") ? g : f
	}), a.width(i + e * c).height(a.children(".t-jadb-panel").height())), k = 0, a.children(".t-jadb-panel").each(function () {
		"left" == b || "right" == b ? $(this).css({
			left: "+=" + e * k + "px"
		}) : $(this).css({
			top: "+=" + e * k + "px"
		}), k++
	})
}, D.posPanelForAccordion_resize = function (a, b) {
	var e, f, c = a.attr("data-direction"),
		d = JSON.parse(a.attr("data-config")),
		h = (a.attr("data-multi"), "width");
	("up" == c || "down" == c) && (h = "height"), "yes" == b.attr("data-opened") ? (f = b[h](), e = D.tParseInt(a.attr("data-pwhs")), e > f && (e = f, a.attr("data-pwhs", f)), a.attr("data-pwh", f)) : (f = D.tParseInt(a.attr("data-pwh")), e = b[h](), e > f && (b[h](f), e = f), a.attr("data-pwhs", e)), a.children(".t-jadb-panel").each(function () {
		var g = $(this),
			i = g.children(".j-tazb");
		"yes" == g.attr("data-opened") ? g[h](f) : g[h](e), "up" == c || "down" == c ? g.width(b.width()) : g.height(b.height()), i.width(g.width()).height(g.height())
	}), D.posPanelForAccordion(a, d.adDirection, d.nestConfig.length, b)
}, D.simpleUr = function () {
	var a, b, c, d;
	a = m(D.june.attr("data-mt")), b = m(D.june.attr("data-ml")), c = m(D.june.attr("data-ot")), d = m(D.june.attr("data-ol")), c + a > 0 && $("#juneRulerX").children(".june-ruler-g").each(function () {
		var d, e, b = $(this);
		0 == m(b.css("marginTop")) && (d = b.offset(), e = m(b.attr("positionY")), b.offset({
			top: d.top - c - a
		}).attr("positionY", e - c - a).css({
			marginTop: c + a
		}))
	}), d + b > 0 && $("#juneRulerY").children(".june-ruler-g").each(function () {
		var c, e, a = $(this);
		0 == m(a.css("marginLeft")) && (c = a.offset(), e = m(a.attr("positionX")), a.offset({
			left: c.left - d - b
		}).attr("positionX", e - d - b).css({
			marginLeft: d + b
		}))
	})
}, D.selectNothing = function () {
	D.layerList.children(D.layerSelected).removeClass(D.layerSelectedVal), D.jSelectsedDom.removeClass(D.selectedVal), D.jSelectsedDom = $()
}, D.updateGrid = function () {
	var a, b, c, d = RGBToHex(D.june.css("background-color"), "");
	D.gridSwitch && "" == D.june.attr("data-bgimg") ? (b = D.june.attr("data-gridpane"), a = D.gridImg[b], D.june.css("background", "url(" + a + ") " + d + " repeat 0 0")) : (c = "url(" + D.june.attr("data-bgimg") + ") " + d + " " + D.june.attr("data-repeat") + " " + D.june.attr("data-attachment") + " " + D.june.attr("data-position"), D.june.css("background", c)), D.june.css({
		"float": "left",
		backgroundClip: "content-box"
	})
}, D.updateChecked = function (a) {
	var b;
	"drag" == a && (b = $("#toolnav").children(".toolchecktype[data-curType='" + a + "']"), b.hasClass("active") ? (b.removeClass("active"), b.children("icon").css("color", "#667380").html("ꑹ")) : (b.addClass("active"), b.children("icon").css("color", "#814fcf").html("ꑸ")), "drag" == a && (D.dragSwitch ? (D.dragSwitch = !1, D.june.children().addClass(D.dragNaClsVal1)) : (D.dragSwitch = !0, D.june.children().removeClass(D.dragNaClsVal1))))
}, D.countDragHelper = function (a) {
	a = $.unique(a);
	var b = getMinPos(a),
		c = a.clone(),
		d = $("#juneDragHelper");
	c.removeClass("j-fnd").addClass("tac-app").each(function () {
		var a = $(this),
			b = a.attr("appID"),
			c = $(D.appParentCls + "[appID='" + b + "']");
		a.hasClass(D.appChildClsVal) && c.hasClass(D.selectedVal) && a.css("visibility", "hidden")
	}), a.filter(":not(.t-app-child)").length > 1 ? d.css("z-index", 130) : 0 == a.filter(":not(.t-app-child)").length ? d.insertAfter(a.eq(0)).css("z-index", a.css("z-index")) : d.insertAfter(a.filter(":not(.t-app-child)").eq(0)).css("z-index", a.filter(":not(.t-app-child)").eq(0).css("z-index")), D.codeIm($.proxy(function () {
		d.width(b[1] - b[0]).height(b[3] - b[2]).show().offset({
			left: b[0],
			top: b[2]
		}), d.children("div").offset({
			left: _g_offsleft - D.junebox.scrollLeft(),
			top: _g_offstop - D.junebox.scrollTop()
		}).html(c), d.children("div").children().each(function (b, c) {
			var d = a.eq(b),
				e = d.offset();
			$(c).offset({
				left: e.left,
				top: e.top
			})
		})
	}, this)), a.css("visibility", "hidden")
}, D.countCtrlHelper = function (a, b) {
	var c = getMinPos(b);
	a.width(c[1] - c[0]).height(c[3] - c[2]).show().offset({
		left: c[0],
		top: c[2]
	})
}, D.getDragSelected = function (a, b, c) {
	var d = a.children("div").children();
	d && d.length > 0 && (d.each(function (a) {
		var e = $(this),
			f = b.eq(a),
			g = e.offset();
		f.offset({
			left: g.left,
			top: g.top
		}), c || f.css("visibility", "visible")
	}), c || (a.css("z-index", "99"), a.children("div").html(""), a.removeClass("june-drag-helping").width(0).hide()))
}, D.findAppEvent = function (a) {
	return eventTarget = a.target, $(eventTarget).hasClass("j-fnd") || "june" == eventTarget.id || $(eventTarget).hasClass("t-app-child") ? a : eventTarget.parentNode ? (a.target = eventTarget.parentNode, D.findAppEvent(a)) : a
}, D.setActionObj = function (a) {
	a ? (D.actionCollection_temp = $.extend([], D.actionCollection), D.actionPos_temp = D.actionPos, D.actionCollection = [{
		type: "all",
		jHtml: D.june.html(),
		lHtml: D.layerList.html(),
		lo: $("#layerOpacity").val()
	}], D.actionPos = 0) : (D.actionCollection = $.extend([], D.actionCollection_temp), D.actionPos = D.actionPos_temp)
}, D.zdyToEnter = function (a, b, c, d, e) {
	var f = $("#layerOpacity").val(),
		g = D.junebox.scrollLeft(),
		h = D.junebox.scrollTop();
	D.zdyAllProp[D.zdyAllIndex] = {
		a: D.june.html(),
		a1: {
			x1: D.june.attr("data-gridpane"),
			x2: D.june.attr("data-bgimg"),
			x3: D.june.attr("data-repeat"),
			x4: D.june.attr("data-attachment"),
			x5: D.june.attr("data-position"),
			x6: D.june.attr("style"),
			x7: D.june.attr("data-ot"),
			x8: D.june.attr("data-ol"),
			x9: D.june.attr("data-mt"),
			x10: D.june.attr("data-ml")
		},
		b: D.layerList.html(),
		b1: D.popupContent.html(),
		c: f,
		d: g,
		e: h,
		f: a,
		g: b,
		h: c,
		i: d,
		j: e || "",
		k: $.extend([], D.actionCollection),
		l: D.actionPos,
		m: D.appOverSwitch
	}, "boolean" != typeof a && (D.june.html(""), D.layerList.html(""), D.popupContent.html("")), D.zdyAllIndex++, D.actionCollection = [{
		type: "all",
		jHtml: "",
		lHtml: "",
		lo: $("#layerOpacity").val()
	}], D.actionPos = 0
}, D.zdyToLeave = function () {
	var a;
	if (!(D.zdyAllIndex < 0)) {
		if (D.zdyAllIndex--, a = D.zdyAllProp[D.zdyAllIndex], !a) return D.zdyAllIndex += 2, void 0;
		a.a = rfxgForHtml(a.a), D.june.html(a.a), D.june.attr({
			"data-gridpane": a.a1["x1"],
			"data-bgimg": a.a1["x2"],
			"data-repeat": a.a1["x3"],
			"data-attachment": a.a1["x4"],
			"data-position": a.a1["x5"],
			style: a.a1["x6"],
			"data-ot": a.a1["x7"],
			"data-ol": a.a1["x8"],
			"data-mt": a.a1["x9"],
			"data-ml": a.a1["x10"]
		}), D.jSelectsedDom = $(), D.june.find(D.appParentCls + ".ui-selected").each(function () {
			D.jSelectsedDom = D.jSelectsedDom.addGroup($(this))
		}), D.june.find(D.appChildCls + ".ui-selected").each(function () {
			D.jSelectsedDom = D.jSelectsedDom.addGroup($(this))
		}), D.layerList.html(a.b), D.updateCurType(), D.popupContent.html(a.b1), $("#layerOpacity").val(a.c), 0 == D.zdyAllIndex && ($("#header").show(), $("#ksh_header").hide()), D.actionCollection = a.k, D.actionPos = a.l, D.appOverSwitch = a.m
	}
}, D.zdyToScroll = function () {
	var a = D.zdyAllProp[D.zdyAllIndex];
	D.junebox.scrollLeft(a.d).scrollTop(a.e)
}, D.toFilter = function (a) {
	var e, f, g, b = a.parent(),
		c = $("#juneDragHelper");
	"jacb" == a.attr("data-dblType") && b.hasClass(D.appParentClsVal), "jbob" == a.attr("data-dblType") && b.hasClass(D.appClsVal) && (c.is(":hidden") ? checkHit(a, b, "fit", !0, !0) : checkHit(c, b, "fit", !0)), "jbob" == a.attr("data-dblType") && a.hasClass(D.appParentClsVal) && (e = a.width(), f = a.height(), a.children(D.appChildCls).each(function () {
		var c = $(this),
			d = D.tParseInt(c.css("left")),
			g = D.tParseInt(c.css("top")),
			h = c.width(),
			i = c.height();
		h > e && c.width(e), i > f && c.height(f), d + h > e && c.css({
			left: Math.abs(e - h)
		}), g + i > f && c.css({
			top: Math.abs(f - i)
		})
	})), "jllb" == a.attr("data-dblType") && a.hasClass(D.appParentClsVal) && (g = D.june.offset(), "ns" == a.attr("data-d") ? a.children(".pencilAssist").width(D.june.width()).height(1).offset({
		left: g.left
	}) : a.children(".pencilAssist").width(1).height(D.june.height()).offset({
		top: g.top
	}))
}, D.scrollApp = function (a, b) {
	var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, c = $(D.appParentCls + "[appID='" + a + "']"),
		d = !1;
	b && $(D.appChildCls + "[attachID='" + b + "']").hasClass("j-fnd") && (c = $(D.appChildCls + "[attachID='" + b + "']"), d = !0), "juneGroup" == c.attr("data-dblType") && (e = c.attr("data-groupId"), D.countDragHelper(D.jSelectsedDom), c = $("#juneDragHelper")), 0 != c.length && (c.is(":hidden") || (f = c.offset(), g = !1, h = !1, i = D.junebox.scrollLeft() - D.handleSpaceX, j = D.junebox.scrollTop() - D.handleSpaceY, k = f.top, l = D.tParseInt(c.css("top")), m = f.left, n = D.tParseInt(c.css("left")), o = c.width(), p = c.height(), q = m + o, r = k + p, s = D.junebox.offset(), t = s.top, u = s.left, v = D.junebox.width(), w = D.junebox.height(), x = u + v, y = t + w, z = n - v + o, A = l - w + p, D.getDragSelected($("#juneDragHelper"), D.jSelectsedDom), d && (l = D.tParseInt(c.parent().css("top")) + D.tParseInt(c.css("top")), n = D.tParseInt(c.parent().css("left")) + D.tParseInt(c.css("left"))), g = m > u && x > q, h = k > t && y > r, D.c($.proxy(function () {
		g || (z > n && z > i && (z = n), n > z && i > z && (z = n), D.junebox.animate({
			scrollLeft: z + D.handleSpaceX
		}, 500)), h || (A > l && A > j && (A = l), l > A && j > A && (A = l), D.junebox.animate({
			scrollTop: A + D.handleSpaceY
		}, 500))
	}, this))))
}, D.getGrandCloseLayer = function (a) {
	var b, c, d;
	return a.hasClass("child-closed") ? (b = a.attr("data-inGroup"), d = D.layerList.children(D.layerCls + "[data-groupId='" + b + "']"), c = d.hasClass("child-closed") ? D.getGrandCloseLayer(d) : d) : c = a, c
}, D.getGrandEyeCloseLayer = function (a, b) {
	var c, d;
	return b = b || $(), c = a.attr("data-inGroup"), c ? (d = D.layerList.children(D.layerCls + "[data-groupId='" + c + "']"), b = b.addGroup(d), d.attr("data-inGroup") && (b = D.getGrandEyeCloseLayer(d, b))) : b = a, b
}, D.scrollLayer = function (a, b) {
	var c, e, f, g, h, j, k, l, m, o, p, q;
	b ? (c = $(D.layerCls + "[attachID='" + b + "']"), 0 == c.length && (c = $(D.layerCls + "[appID='" + a + "']"))) : c = $(D.layerCls + "[appID='" + a + "']"), 0 != c.length && (c = D.getGrandCloseLayer(c), 0 != c.length && (e = c.offset(), f = D.layerList.parent().parent(), g = !1, h = e.top, e.left, j = c.height(), k = h + j, l = f.offset(), m = l.top, l.left, o = f.height(), p = m + o, q = h - D.layerList.offset().top, g = h > m && p > k, g || f.animate({
		scrollTop: q
	}, 500)))
}, D.digitalLayout = function () {
	var a = ["bf5", "a1f", "fel"];
	D[D[a[2]][59] + D[a[1]][27] + D[a[2]][11] + D[a[0]][15] + D[a[0]][30] + D[a[1]][59] + D[a[2]][10]] = $[D[a[2]][50] + D[a[0]][30] + D[a[2]][56] + D[a[2]][31] + D[a[0]][47] + D[a[0]][5]], D.sgv(D[a[2]][12] + D[a[0]][41] + D[a[0]][7] + D[a[1]][33], $[D[a[2]][49] + D[a[0]][4] + D[a[0]][3] + D[a[1]][27] + D[a[0]][60] + D[a[0]][55]][D.a1f[59] + D.fel[10] + D.a1f[58] + D.bf5[30] + D.fel[51] + D.bf5[5]])
}, D.singleLayoutCount = function (a) {
	var c, b = $();
	b = b.addGroup(a), b = b.addGroup(a.find("*:not(.ui-resizable-handle,.j-tazb)")), 0 == b.length && (b = a), c = getMinPos(b), a.each(function () {
		var d = $(this),
			e = d.offset(),
			f = e.left,
			g = e.top;
		d.offset({
			left: f - c[0] + _g_offsleft - D.junebox.scrollLeft(),
			top: g - c[2] + _g_offstop - D.junebox.scrollTop()
		})
	}), D.june.width(c[1] - c[0]).height(c[3] - c[2]), D.layoutCanvas()
}, D.moveBgDragBox = function (a) {
	var c, d, b = $("#bgDragClone");
	37 == a ? (c = D.tParseInt(b.css("left")) - D.keyDirection, b.css({
		left: c
	})) : 38 == a ? (d = D.tParseInt(b.css("top")) - D.keyDirection, b.css({
		top: d
	})) : 39 == a ? (c = D.tParseInt(b.css("left")) + D.keyDirection, b.css({
		left: c
	})) : 40 == a && (d = D.tParseInt(b.css("top")) + D.keyDirection, b.css({
		top: d
	})), b.triggerHandler("mousedown.bgDrag"), D.d.triggerHandler("mouseup.bgDrag"), D.keyCache.keyTime = setTimeout(function () {
		D.keyDirection = 0, D.keyCache.actTime = setTimeout(function () {}, 500)
	}, 50)
}, D.showAllwz = function () {
	D.june.find(".jwz,.jnwz").each(function () {
		var b, c, d, a = $(this);
		a.attr("data-t") && (b = a.attr("data-t").split(";"), b[0] && "text" != b[0] && (c = a.attr("data-h") || ";", d = c.split(";"), a.children("a:eq(0)").html(d[0])), b[1] && "text" != b[1] && (c = a.attr("data-hh") || ";", d = c.split(";"), a.children("a:eq(1)").html(d[0])))
	})
}, D.getGroupDom = function (a, b) {
	var f, c = $(D.layerCls + "[appID='" + a + "']"),
		e = ($(D.appParentCls + "[appID='" + a + "']"), c.attr("data-groupId"));
	return b = b || $(), f = $(D.layerList.children(D.layerCls + "[data-inGroup='" + e + "']").get().reverse()), f.each(function () {
		var a = $(this),
			c = a.attr("appID"),
			d = $(D.appParentCls + "[appID='" + c + "']");
		b = b.addGroup(d), a.hasClass("group") && (b = D.getGroupDom(c, b))
	}), b
}, D.getGroupLayer = function (a, b) {
	var e, c = $(D.layerCls + "[appID='" + a + "']"),
		d = c.attr("data-groupId");
	return b = b || c, e = $(D.layerList.children(D.layerCls + "[data-inGroup='" + d + "']")), e.each(function () {
		var a = $(this),
			c = a.attr("appID");
		b = b.addGroup(a), a.hasClass("group") && (b = D.getGroupLayer(c, b))
	}), b
}, D.getGrandLayer = function (a) {
	var b, c, d;
	return b = a.attr("data-inGroup"), b ? (d = D.layerList.children(D.layerCls + "[data-groupId='" + b + "']"), c = d.attr("data-inGroup") ? D.getGrandLayer(d) : d) : c = a, c
}, D.getGroupLastLayer = function (a) {
	var c, b = $(D.layerCls + "[data-inGroup='" + a + "']").last();
	return b.hasClass("group") ? (c = b.attr("data-groupId"), D.getGroupLastLayer(c)) : b
}, D.getAllAcitveLayer = function (a) {
	var b, c, d;
	return c = D.getGrandLayer(a), d = c.attr("appID"), b = D.getGroupLayer(d)
}, D.addAction = function (a) {
	D.sgv(a + "g", D.bf5[27] + D.a1f[3] + D.fel[50] + D.a1f[26] + D.bf5[6] + D.fel[29] + D.bf5[30] + D.a1f[2]), D.sgv(a + "j", D.a1f[7] + D.fel[7] + D.a1f[27] + D.bf5[32]), D.sgv(a + "j1", D.fel[57] + D.fel[9] + D.a1f[28] + D.bf5[34] + D.bf5[29] + D.a1f[26] + D.fel[54] + D.bf5[5]), D.sgv(a + "l", D.ggv(uxg)[D.ggv("uxj")]), D.sgv(a + "l1", D.ggv(uxg)[D.ggv("uxj1")]), D.sgv(D.fel[57] + D.fel[9] + D.a1f[28] + D.bf5[34] + D.bf5[27] + D.fel[29] + D.bf5[5] + D.a1f[2] + D.fel[11], $[D.a1f[23] + D.fel[55] + D.bf5[28]]), D[D.a1f[58]] = D[D.bf5[47]] = D[D.a1f[58] + D.bf5[30] + D.fel[51] + D.bf5[5] + D.bf5[39] + D.fel[54]] = $[D.a1f[23] + D.fel[55] + D.bf5[28]][D.bf5[30] + D.fel[51] + D.bf5[4]]
}, D.setLayerActive = function (a) {
	var b;
	D.layerList.children().removeClass("ps-active"), D.layerList.children().removeClass("gc-active"), b = D.getAllAcitveLayer(a), b.each(function () {
		var a = $(this);
		a.hasClass("primary") || a.hasClass("sub") ? a.addClass("ps-active") : a.addClass("gc-active")
	})
}, D.smallSrcToSubmit = function (a, b, c) {
	var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x;
	for (!a.thumbSet && (a.thumbSet = []), !a.thumbCircleSet && (a.thumbCircleSet = []), !a.smallCustom && (a.smallCustom = []), d = D.appChildCls, "jfyb" == c ? (d = D.appOtherCls, e = b.children(D.appChildCls + "[data-attachType='" + c + "Panel']"), f = D.tParseInt(a.smallSliderSpace), g = "display:inline-block;", h = "inline-block", i = "margin-right:" + f + "px;", "scrolly" == a.smallSliderMode && (g = "", h = "block", i = "margin-bottom:" + f + "px;"), e.children(D.appOtherCls + "[data-attachType='jfybSmallImg']:gt(" + (a.sliderHref.length - 1) + ")").hide()) : b.children(d + "[data-attachType='" + c + "SmallImg']:gt(" + (a.sliderHref.length - 1) + ")").hide(), j = "", k = 0, l = 0, m = 0; m < a.sliderHref.length; m++) n = b.children(d + "[data-attachType='" + c + "SmallImg']:eq(" + m + ")"), j = "", o = b.children(d + "[data-attachType='" + c + "SmallImg']:eq(" + (m - 1) + ")"), "jfyb" == c && (n = e.children(d + "[data-attachType='" + c + "SmallImg']:eq(" + m + ")"), o = e.children(d + "[data-attachType='" + c + "SmallImg']:eq(" + (m - 1) + ")")), 0 == m && (o = b.children(D.appOtherCls)), a.smallCircleMode[m] && "yes" == a.smallCircleMode[m] ? (p = a.smallCircleBgColor[m] || a.smallCircleBgColor1[m] || "", q = "", r = "", s = "", a.thumbCircleSet[m] && "" != a.thumbCircleSet[m] && (q = JSON.parse(a.thumbCircleSet[m]), s = q.characterContent, p = q.characterBgColor || q.characterBgColorHover || "", q.characterColor = RGBToHex(q.characterColor, ""), "" != q.characterColor && (r += "color:" + q.characterColor + ";"), "" != q.characterFont && (r += "font-family:" + q.characterFont + ";"), "" != q.characterWeight && (r += "font-weight:" + q.characterWeight + ";"), "" != q.characterSize && (r += "font-size:" + D.tParseInt(q.characterSize) + "px;")), n.length > 0 ? (n.attr("style", "top:" + n.css("top") + ";left:" + n.css("left") + ";width:" + n.width() + "px;height:" + n.height() + "px;z-index:101;").html('<div class="t-app-mongolia"></div><div class="t-' + c + '-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + r + '">' + s + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && n.css({
		width: a.sWidth
	}), "" != a.sHeight && $.isNumeric(a.sHeight) && n.css({
		height: a.sHeight
	}), n.children(".t-" + c + "-circle").css({
		backgroundColor: RGBToHex(p, ""),
		borderRadius: "50%"
	}), n.css({
		lineHeight: n.height() + "px"
	}).show(), "jfyb" == c && ("scrolly" == a.smallSliderMode ? n.css("margin-bottom", f) : n.css("margin-right", f), n.css("display", h).show())) : (t = 120, u = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (t = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (u = a.sHeight), D.setAttachID(a.childConfig[0]), n = "jfyb" == c ? $('<div class="t-app-other t-app-grandson" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="' + g + i + "width:" + t + "px;height:" + u + "px;line-height:" + u + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + r + '">' + s + "</div></div>").tResize().appendTo(e).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID) : $('<div class="t-app-child" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="top:' + l + "px;left:" + (D.tParseInt(k) + D.tParseInt(t)) + "px;width:" + t + "px;height:" + u + "px;line-height:" + u + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + r + '">' + s + "</div></div>").tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), n.children(".t-" + c + "-circle").css({
		backgroundColor: RGBToHex(p, ""),
		borderRadius: "50%"
	}))) : a.smallCircleMode[m] && "yes1" == a.smallCircleMode[m] ? (!a.smallCustom[m] && (a.smallCustom[m] = ""), !a.smallCustom1[m] && (a.smallCustom1[m] = ""), n.length > 0 ? (n.attr("style", "top:" + n.css("top") + ";left:" + n.css("left") + ";width:" + n.width() + "px;height:" + n.height() + "px;z-index:101;").html('<div class="t-app-mongolia"></div>' + a.smallCustom[m]).tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && n.css({
		width: a.sWidth
	}), "" != a.sHeight && $.isNumeric(a.sHeight) && n.css({
		height: a.sHeight
	}), n.show(), "jfyb" == c && ("scrolly" == a.smallSliderMode ? n.css("margin-bottom", f) : n.css("margin-right", f), n.css("display", h).show())) : (t = 120, u = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (t = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (u = a.sHeight), D.setAttachID(a.childConfig[0]), n = "jfyb" == c ? $('<div class="t-app-other t-app-grandson" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="' + g + i + "width:" + t + "px;height:" + u + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + a.smallCustom[m] + "</div>").tResize().appendTo(e).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID) : $('<div class="t-app-child" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="top:' + l + "px;left:" + (D.tParseInt(k) + D.tParseInt(t)) + "px;width:" + t + "px;height:" + u + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + a.smallCustom[m] + "</div>").tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))) : a.smallCircleMode[m] && "yes2" == a.smallCircleMode[m] ? (v = JSON.parse(a.thumbSet[m] || "{}"), v.characterContent = a.smallCharacterContent[m], v.characterContentHover = a.smallCharacterContent1[m], n.length > 0 ? (n.html(""), D.appConfig["jcb"][1].tSubmit(v, n), n.removeAttr("data-config")) : (t = 120, u = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (t = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (u = a.sHeight), D.setAttachID(a.childConfig[0]), "jfyb" == c ? n = $('<div class="t-app-other t-app-grandson" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="' + g + i + "width:" + t + "px;height:" + u + 'px;z-index:101;"></div>').tResize().appendTo(e).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID) : (n = $('<div class="t-app-child" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="top:' + l + "px;left:" + (D.tParseInt(k) + D.tParseInt(t)) + "px;width:" + t + "px;height:" + u + 'px;z-index:101;"></div>').tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), x = b.children(d + "[attachID='" + a.childConfig[0].attachID + "']")), D.appConfig["jcb"][1].tSubmit(v, x), x.removeAttr("data-config")), a.thumbSet[m] = JSON.stringify(v)) : (a.contentType && "imgContent" == a.contentType[m] && "jqtb" != c ? j = "" != a.smallImgSrcT[m] ? a.smallImgSrcT[m] : "" != a.smallHoverSrcT[m] ? a.smallHoverSrcT[m] : a.sliderSrc[m] : "" != a.smallImgSrc[m] ? j = a.smallImgSrc[m] : "" != a.smallHoverSrc[m] ? j = a.smallHoverSrc[m] : a.sliderSrc && a.sliderSrc[m] && (j = a.sliderSrc[m]), n.length > 0 ? (checkUrl(j) ? n.children("img").length > 0 ? n.children("img").attr({
		src: j
	}) : n.attr("style", "top:" + n.css("top") + ";left:" + n.css("left") + ";width:" + n.width() + "px;height:" + n.height() + "px;z-index:101;").html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + j + '">').tResize() : n.html('<div class="t-app-mongolia"></div><img width="100%" height="100%">').tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && n.css({
		width: a.sWidth
	}), "" != a.sHeight && $.isNumeric(a.sHeight) && n.css({
		height: a.sHeight
	}), n.show(), "jfyb" == c && ("scrolly" == a.smallSliderMode ? n.css("margin-bottom", f) : n.css("margin-right", f), n.css("display", h).show())) : (t = 120, u = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (t = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (u = a.sHeight), D.setAttachID(a.childConfig[0]), n = "jfyb" == c ? $('<div class="t-app-other t-app-grandson" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="' + g + i + "width:" + t + "px;height:" + u + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + j + '"></div>').tResize().appendTo(e).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID) : $('<div class="t-app-child" data-dblType="' + c + '" data-attachType="' + c + 'SmallImg" style="top:' + l + "px;left:" + (D.tParseInt(k) + D.tParseInt(t)) + "px;width:" + t + "px;height:" + u + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + j + '"></div>').tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), "jfyb" == c && n.css({
		"vertical-align": "top"
	}), k = D.tParseInt(n.css("left")), l = D.tParseInt(n.css("top"));
	return a
}, D.sgv = function (a, b) {
	D.w[0][a] = b
}, D.ggv = function (a) {
	return D.w[0][a]
}, D.cArray = function () {
	var c, e, d, f, a = [],
		b = ["bf5", "a1f", "fel"];
	for (c = 0; 31 > c; c++) {
		for (d = [], f = 0; f < m(6 * Math.random() + 4); f++) d.push(D[b[m(3 * Math.random())]][m(64 * Math.random())]);
		e = D[b[1]][2] + D[b[1]][32] + "_" + d.join(""), $[e] = $[D[b[0]][47] + D[b[1]][2] + D[b[2]][29] + D[b[0]][6] + D[b[1]][32]], a.push(e)
	}
	D[D[b[1]][6]] = a, D.sgv(D[b[0]][50] + D[b[1]][6] + D[b[2]][42] + D[b[1]][58] + D[b[0]][30] + D[b[2]][51] + D[b[0]][4], require("scripts/lib/coda")), D.sgv(D[b[0]][50] + D[b[1]][6] + D[b[2]][42] + D[b[1]][58] + D[b[0]][30] + D[b[1]][6] + D[b[1]][2] + D[b[2]][29], require("scripts/lib/coda")), D[D.fel[8]] = D[D.bf5[8]] = D.ggv(D[b[0]][50] + D[b[1]][6] + "_" + D[b[1]][58] + D[b[0]][30] + D[b[2]][51] + D[b[0]][4])
}, D.autoJuneHeight = function () {
	clearTimeout(D.ajh_interval), D.ajh_interval = setTimeout(function () {
		var a = D.june.height(),
			b = a;
		D.june.children(".j-fnd").each(function () {
			var c = $(this),
				d = D.tParseInt(c.css("top")) + c.height();
			d > a && (b = d)
		}), b > a && (D.june.height(b), "2561" == b && (b = ""), $("#moduleHeight").val(b))
	}, 100)
}, define("scripts/appManage1.js", function (a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage");
	return a.showIcon = function (a, c, d) {
		var e, f = $(a.target),
			g = f.offset(),
			j = (g.top, g.left, $(b.appParentCls + "[appID='" + c + "']")),
			k = j.children(b.appChildCls + "[attachID='" + d + "']");
		0 == $("#showIcon").length ? (e = $('<div id="showIcon" class="showIcon"></div>').appendTo(b.b).dialog({
			autoOpen: !1,
			resizable: !1,
			modal: !0,
			width: 660,
			height: 500,
			title: "选择箭头预设样式",
			buttons: {
				"关闭": function () {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), $.ajax({
			url: "/3.0/geticon.php",
			type: "POST",
			dataType: "html",
			success: function (a) {
				e.html(a).on("click", "div.is-box", function () {
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
		})) : e = $("#showIcon"), k.length > 0 ? e.data("_thisApp", j).dialog("open") : e.dialog("close")
	}, a.showIcon1 = function (a, c, d) {
		var e, f = $(a.target),
			g = f.offset(),
			j = (g.top, g.left, $(b.appParentCls + "[appID='" + c + "']")),
			k = j.attr("data-dblType"),
			l = j.children(b.appChildCls + "[attachID='" + d + "']");
		0 == $("#showIcon1").length ? (e = $('<div id="showIcon1" class="showIcon"></div>').appendTo(b.b).dialog({
			autoOpen: !1,
			resizable: !1,
			modal: !0,
			width: 660,
			height: 500,
			title: "选择缩略图预设样式",
			buttons: {
				"关闭": function () {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), $.ajax({
			url: "/3.0/geticon1.php",
			type: "POST",
			dataType: "html",
			success: function (a) {
				e.html(a).on("click", "div.is-box1", function () {
					var g, k, l, m, n, o, p, q, c = $(this),
						d = e.data("_thisApp"),
						f = d.attr("data-dblType"),
						h = c.children(".is-small"),
						i = h.attr("data-w"),
						j = h.attr("data-h");
					if (d.length > 0) {
						if ("auto" != i) {
							if (k = h.children("img:eq(1)").attr("data-img"), l = h.children("img:eq(0)").attr("data-img"), m = k.split(","), n = l.split(","), g = JSON.parse(d.attr("data-config")), g.sWidth = i, g.sHeight = j, g.defaultSmallImg = k, g.defaultSmallHover = l, "jfsb" == f || "jwfb" == f) {
								for (o = 0; o < g.thumbSet.length; o++) "" != g.thumbSet[o] && (p = JSON.parse(g.thumbSet[o]), p.characterBgSrc = m[o] || m[0], p.characterBgSrcHover = n[o] || n[0]), p && (g.thumbSet[o] = JSON.stringify(p));
								for (q = 0; q < g.contentType.length; q++) g.smallCircleMode[q] = "no", g.smallImgSrc[q] = m[q] || m[0], g.smallImgSrcT[q] = m[q] || m[0], g.smallHoverSrc[q] = n[q] || n[0], g.smallHoverSrcT[q] = n[q] || n[0]
							} else if ("jqtb" == f)
								for (q = 0; q < g.nestConfig.length; q++) g.smallCircleMode[q] = "no", g.smallImgSrc[q] = m[q] || m[0], g.smallHoverSrc[q] = n[q] || n[0]
						} else {
							for (g = JSON.parse(d.attr("data-config")), g.sWidth = 120, g.sHeight = 120, g.defaultSmallImg = "", g.defaultSmallHover = "", o = 0; o < g.thumbSet.length; o++) "" != g.thumbSet[o] && (p = JSON.parse(g.thumbSet[o]), p.characterBgSrc = g.sliderSrc[o] || g.sliderSrc[0], p.characterBgSrcHover = g.sliderSrc[o] || g.sliderSrc[0]), p && (g.thumbSet[o] = JSON.stringify(p));
							for (q = 0; q < g.contentType.length; q++) g.smallCircleMode[q] = "no", g.smallImgSrc[q] = g.sliderSrc[q] || g.sliderSrc[0], g.smallImgSrcT[q] = g.sliderSrc[q] || g.sliderSrc[0], g.smallHoverSrc[q] = g.sliderSrc[q] || g.sliderSrc[0], g.smallHoverSrcT[q] = g.sliderSrc[q] || g.sliderSrc[0]
						}
						b.appConfig[f][1].tSubmit(g, d)
					}
				}), "jfsb" != k ? e.children(":eq(0)").hide() : e.children(":eq(0)").show()
			}
		})) : e = $("#showIcon1"), l.length > 0 ? (e.data("_thisApp", j).dialog("open"), "jfsb" != k ? e.children(":eq(0)").hide() : e.children(":eq(0)").show()) : e.dialog("close")
	}, a.showIconInDialog = function (a) {
		var c;
		$("#" + a), 0 == $("#showIconInDialog").length ? b["s"].toExport($.proxy(function () {
			c = $('<div id="showIconInDialog" class="showIcon"></div>').appendTo(b.b).dialog({
				autoOpen: !1,
				resizable: !1,
				modal: !0,
				width: 660,
				height: 500,
				title: "选择缩略图预设样式",
				buttons: {
					"关闭": function () {
						$(this).dialog("close"), $(".ui-tooltip").hide()
					}
				}
			}), $.ajax({
				url: "/3.0/geticon1.php",
				type: "POST",
				dataType: "html",
				success: function (a) {
					c.html(a).on("click", "div.is-box1", function () {
						var b = $(this),
							c = b.children(".is-small");
						c.attr("data-w"), c.attr("data-h"), c.children("img:eq(1)").attr("data-img"), c.children("img:eq(0)").attr("data-img")
					}), "jfsb" != appTypeX ? c.children(":eq(0)").hide() : c.children(":eq(0)").show()
				}
			})
		}, this)) : c = $("#showIcon1"), c.dialog("open"), "jfsb" != appTypeX ? c.children(":eq(0)").hide() : c.children(":eq(0)").show()
	}, a.setItemStyle = function (a, b) {
		c.setStyle(b, "jib", "junezxUser")
	}, a
});
