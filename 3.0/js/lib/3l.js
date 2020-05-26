function timeVal(a, b) {
	return b ? a : 10 > a ? "0" + a : a
}
function toInt(a) {
	var b;
	return a && "" != a ? (b = parseInt(a, 10), !! isNaN(b) && (b = 0), b) : a
}
function m(a) {
	var b;
	return a && "" != a ? (b = parseInt(a, 10), !! isNaN(b) && (b = 0), b) : 0
}
function RGBToHex(a, b) {
	var c, d, e, f, g, h, i, j;
	if (!a) return b || "" == b ? b : "#000000";
	if (a.indexOf("rgb") >= 0) {
		for (c = /^rgb\(([0-9]{0,3})\,\s([0-9]{0,3})\,\s([0-9]{0,3})\)/g, d = a.replace(c, "$1 $2 $3").split(" "), e = "#", b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], f = 0; 3 > f; f++) {
			for (g = null, h = d[f], i = [], j = h; h > 15;) g = h % 16, h = h / 16 >> 0, i.push(b[g]);
			i.push(b[h]), 15 >= j && i.push(0), e += i.reverse().join("")
		}
		return "#" == e && (e = ""), e
	}
	return "#" != a.charAt(0) || a.length < 4 ? "" : a
}
function checkUrl(a, b) {
	return a ? a.length < 20 || a.indexOf("junezx.com") >= 0 || a.indexOf("127.1") >= 0 || a.indexOf("127.0.0.1") >= 0 ? !1 : !0 : b ? b : !1
}
function UrlRegEx(a) {
	var b = /(\w+): \/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i,
		c = a.match(b);
	return c
}
function getImgNaturalDimensions(a, b) {
	var c, d, e;
	return a.naturalWidth ? (c = a.naturalWidth, d = a.naturalHeight) : (e = new Image, e.src = a.src, e.onload = function() {
		b(e.width, e.height)
	}), [c, d]
}
function rfxgForHtml(a) {
	return a = a || "", a = a.replace(/(<embed([^>]*?))(\/?>)(?!<\/embed>)/g, function(a, b) {
		return b + "></embed>"
	}), a = a.replace(/\/>/g, ">")
}
function tooltipimgLoaded() {
	$(".june-tooltipimg").each(function(a, b) {
		var c = getImgNaturalDimensions(b, function(a, b) {
			a && $(this).next("div.june-tooltipdiv").children("span").html(a + "X" + b)
		});
		c[0] && $(this).next("div.june-tooltipdiv").children("span").html(c[0] + "X" + c[1])
	})
}
function quickSort(a, b) {
	var c, d, e, f, g, h, i;
	if (a.length <= 1) return a;
	for (c = Math.floor(a.length / 2), d = a.splice(c, 1)[0], e = d, f = [], g = [], b && (e = e[b]), h = 0; h < a.length; h++) i = a[h], b && (i = a[h][b]), e > i ? f.push(a[h]) : g.push(a[h]);
	return quickSort(f, b).concat([d], quickSort(g, b))
}
function IsURL(a) {
	var b = "^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}/.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+/.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]/.[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$",
		c = new RegExp(b);
	return c.test(a) ? !0 : !1
}
function setPage(a, b, c, d) {
	function f() {
		e[e.length] = c == g ? '<a rel="' + g + '" href="#" class="on">' + g + "</a>" : '<a rel="' + g + '" href="#">' + g + "</a>"
	}
	var e, g;
	if (d = d || ["上一页", "下一页"], a = a, b = b, c = c, e = [], e[e.length] = 1 == c ? '<a href="#" class="prev unclick">' + d[0] + "</a>" : '<a href="#" class="prev">' + d[0] + "</a>", 10 >= b) for (g = 1; b >= g; g++) f();
	else if (4 >= c) {
		for (g = 1; 5 >= g; g++) f();
		e[e.length] = '<span class="dian">...</span><a rel="' + b + '" href="#">' + b + "</a>"
	} else if (c >= b - 3) for (e[e.length] = '<a rel="1" href="#">1</a><span class="dian">...</span>', g = b - 4; b >= g; g++) f();
	else {
		for (e[e.length] = '<a rel="1" href="#">1</a><span class="dian">...</span>', g = c - 2; c + 2 >= g; g++) f();
		e[e.length] = '<span class="dian">...</span><a rel="' + b + '" href="#">' + b + "</a>"
	}
	e[e.length] = c == b ? '<a href="#" class="next unclick">' + d[1] + "</a>" : '<a href="#" class="next">' + d[1] + "</a>", a.innerHTML = e.join(""), function() {
		var g, e = a.getElementsByTagName("a"),
			f = c;
		for (e[0].onclick = function() {
			return 1 == f ? !1 : (f--, setPage(a, b, f, d), !1)
		}, g = 1; g < e.length - 1; g++) e[g].onclick = function() {
			return f = parseInt(this.innerHTML), setPage(a, b, f, d), !1
		};
		e[e.length - 1].onclick = function() {
			return f == b ? !1 : (f++, setPage(a, b, f, d), !1)
		}
	}()
}
function tReplace(a, b, c) {
	return a.replace(b, c)
}
function rand6() {
	var b, c, d, e, f, g, a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	return b = a[Math.floor(62 * Math.random())], c = a[Math.floor(62 * Math.random())], d = a[Math.floor(62 * Math.random())], e = a[Math.floor(62 * Math.random())], f = a[Math.floor(62 * Math.random())], g = a[Math.floor(62 * Math.random())], b + c + d + e + f + g
}
function messageForPhp(a, b, c) {
	$("#tMessage").length <= 0 && $('<div id="tMessage"></div>').appendTo($("body")), $("#tMessage").dialog({
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
function confirmForPhp(a, b, c, d) {
	var e = {};
	d && 0 != d.length || (d = [], d[0] = "确定", d[1] = "关闭"), e[d[0]] = function() {
		b && "function" == typeof b && b.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
	}, e[d[1]] = function() {
		c && "function" == typeof c && c.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
	}, $("#tConfirm").length <= 0 && ($('<div id="tConfirm"></div>').appendTo($("body")), $("#tConfirm").dialog({
		autoOpen: !1,
		resizable: !1,
		width: 400,
		modal: !0,
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;提示",
		buttons: e
	})), $("#tConfirm").html(a).dialog("option", "buttons", e).dialog("open")
}
function dialogForPhp(a, b, c, d) {
	$("#tDialogForPhp").length <= 0 && $('<div id="tDialogForPhp"></div>').appendTo($("body")), $("#tDialogForPhp").dialog({
		autoOpen: !1,
		width: 400,
		modal: !0,
		title: b,
		resizeStop: function() {
			var d, e, c = $(this);
			c.find(".form-tabs-title").length > 0 && (d = $("#" + D.dialogID).find(".ui-tabs-nav").outerHeight(), e = $("#" + D.dialogID).children("form").children().height(), $("#" + D.dialogID).find(".formlayout").height(e - d))
		},
		buttons: {
			"确定": function() {
				var a;
				d && "function" == typeof d && (a = d.call(this)), a && $(this).dialog("close")
			},
			"取消": function() {
				$(this).dialog("close")
			}
		}
	}), $.ajax({
		url: a,
		type: "POST",
		data: c,
		dataType: "html",
		success: function(a) {
			$("#tDialogForPhp").html(a).dialog("open")
		},
		error: function() {}
	})
}
function getRandomForPhp() {
	var c, d, e, f, b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	return c = b[Math.floor(62 * Math.random())], d = b[Math.floor(62 * Math.random())], e = b[Math.floor(62 * Math.random())], f = b[Math.floor(62 * Math.random())], c + d + e + f
}
function getJuneRnForPhp() {
	var a = $("#june");
	return a.attr("data-rn") || a.attr("data-rn", "a" + getRandomForPhp()), a.attr("data-rn")
}
function setAttachIDForPhp() {
	var a = getJuneRnForPhp() + "-" + getRandomForPhp();
	return a
}
function getReferrer() {
	var a = "";
	try {
		a = window.top.document.referrer
	} catch (b) {
		if (window.parent) try {
			a = window.parent.document.referrer
		} catch (c) {
			a = ""
		}
	}
	return "" === a && (a = document.referrer), a
}
function submitColor(a, b, c) {
	"" != b ? a.css("background-color", b) : c && "" != c ? a.css("background-color", c) : a.css("background-color", "transparent")
}
function checkSubmitBorder(a, b) {
	var c = m(b.borderWidth1 || "0");
	b.bordesarr1trol1 && "hborder1" == b.bordesarr1trol1 ? submitBorder(a, c, RGBToHex(b.borderColor1, ""), b.borderStyle1 || "", b.borderRadius1) : submitBorder(a, 0, null, null, 0)
}
function submitBorder(a, b, c, d, e) {
	d = d || "solid", b && b > 0 ? a.css("border", b + "px " + d + " " + c) : a.css("border", "none"), e && e > 0 ? a.css("border-radius", e + "px") : a.css("border-radius", 0)
}
function checkImg(a) {
	var b = a.css("background-image");
	return "" == b || "none" == b ? !1 : checkUrl(b)
}
function tnaCheck(a) {
	return "noagain" == $.cookie(a) ? !0 : !1
}
function tnaCheckCookie(a, b) {
	b ? $.cookie(a, "again") : $.cookie(a, "noagain")
}
function panelClick(a, b, c, d) {
	d = d || ["opened", "closed"], a.hasClass(d[1]) ? (a.addClass(d[0]).removeClass(d[1]), c && "function" == typeof c && c()) : (a.addClass(d[1]).removeClass(d[0]), b && "function" == typeof b && b())
}
function panelClickAtTp() {
	var a = $("#toolpanel"),
		b = $("#dqpanel"),
		c = $("#wzpanel"),
		d = $("#tcpanel");
	0 == b.height() && 0 == c.height() && 0 == d.height() ? (a.addClass("closed").removeClass("opened"), "2" != $("#toolsidebar").attr("data-status") && $("#bodybox").css("margin-right", "30px"), $("#toolsidebar").addClass("closed").removeClass("opened")) : (a.addClass("opened").removeClass("closed"), "2" != $("#toolsidebar").attr("data-status") && $("#bodybox").css("margin-right", "200px"), $("#toolsidebar").addClass("opened").removeClass("closed"))
}
function getForGis(a, b) {
	clearTimeout(xxImgDivBoxTimeout), $('<img src="' + a.img + '"/>').appendTo($("#tempImgDivBox")).on("load", function() {
		var a = getImgNaturalDimensions(this, function(a, c) {
			a ? b.call(this, [a, c]) : b.call(this, ["", ""])
		});
		a && a[0] && b.call(this, a), xxImgDivBoxTimeout = setTimeout(function() {
			$("#tempImgDivBox").html("")
		}, 1e4)
	})
}
function countTreeStep(a) {
	var b, c, d = 1;
	if (a && a.length > 0) {
		if (a.hasClass("sub")) return countTreeStepSub(a), void 0;
		b = a.attr("data-inGroup"), b ? (c = $("#" + _g_layerId).children(".t-layer[data-groupId='" + b + "']"), d = parseInt(c.attr("data-step") || "1"), c.is(a) ? a.removeAttr("data-inGroup") : a.attr("data-step", d + 1)) : a.attr("data-step", d), countTreePos(a), a.hasClass("primary") && countTreeStepPrimary(a)
	}
}
function countTreeStepSub(a) {
	var b = a.attr("appID"),
		c = $(".t-layer.primary[appID='" + b + "']"),
		d = parseInt(c.attr("data-step") || "1");
	a.attr("data-step", d + 1), countTreePos(a)
}
function countTreeStepPrimary(a) {
	var b = a.attr("appID"),
		c = $(".t-layer.sub[appID='" + b + "']:not(.active)"),
		d = parseInt(a.attr("data-step") || "1");
	c.each(function() {
		var a = $(this);
		a.attr("data-step", d + 1), countTreePos(a)
	})
}
function countTreePos(a) {
	var b = a.attr("data-step") || "1",
		c = 15 * (b - 1),
		d = 15 * (b - 1) - 3;
	a.hasClass("group") || a.hasClass("primary") ? (a.children("icon").css("margin-left", c), a.css("background-position", c - 230 + "px top")) : a.hasClass("sub") ? (a.children("span").css("margin-left", d), a.css("background-position", c - 230 - 15 + "px top")) : (a.children("span").css("margin-left", c), a.css("background-position", c - 230 - 15 + "px top"))
}
function sortGroupAll() {
	var a = D.june.children(".june-group");
	a.each(function() {
		var a = $(this),
			b = a.attr("data-groupId"),
			c = D.june.children(D.appParentCls + "[data-inGroup='" + b + "']").eq(0);
		c.length > 0 ? a.insertAfter(c) : a.appendTo(D.june)
	})
}
function sortTreePlaceAll() {
	$("#" + _g_layerId).children(".t-layer[data-groupId]:not([data-inGroup])").each(function() {
		var a = $(this),
			b = a.attr("data-groupId");
		sortTreePlace(b)
	})
}
function sortTreePlace(a) {
	var b, c;
	a && (b = $("#" + _g_layerId).children(".t-layer[data-groupId='" + a + "']"), c = $("#" + _g_layerId).children(".t-layer[data-inGroup='" + a + "']:not(.sub)"), c.insertAfter(b), c.each(function() {
		var d = $(this),
			e = d.attr("data-groupId"),
			f = d.attr("appID");
		d.hasClass("primary") && d.siblings(".sub[appID='" + f + "']").not(d).attr("data-inGroup", a).insertAfter(d), d.attr("data-groupId") && sortTreePlace(e)
	}))
}
function withPrimary(a) {
	return a.each(function() {
		var f, g, d = $(this),
			e = d.attr("appID");
		d.hasClass("primary") && (f = $("#" + _g_layerId).children(".t-layer.sub[appID='" + e + "']:not(.active)"), f.length > 0 && (a = a.addGroup(f), f.addClass("active active-temp"))), d.hasClass("sub") && (g = $("#" + _g_layerId).children(".t-layer.primary.active[appID='" + e + "']"), 0 == g.length && (d.addClass("noactive-temp"), a = a.not(d[0])))
	}), a = $.unique(a)
}
function getMinPos(a) {
	var b, c, d, e;
	return a.filter(".j-fnd:not(.june-group), .t-app-child:not(.june-group), .t-app-other:not(.june-group)").each(function() {
		var a = $(this),
			f = a.offset(),
			g = f.left,
			h = f.top,
			i = g + a.width(),
			j = h + a.height();
		return "none" == a.css("display") || "hidden" == a.css("visibility") ? !0 : ((void 0 == b || b > g) && (b = g), (void 0 == c || i > c) && (c = i), (void 0 == d || d > h) && (d = h), (void 0 == e || j > e) && (e = j), void 0)
	}), [b, c, d, e]
}
function hexToReverse(a, b) {
	b = b || 1, a = a.substr(1);
	var c = 0,
		d = 0,
		e = 0;
	return c = 255 - 16 * parseInt(a[0], 16) - parseInt(a[1], 16), d = 255 - 16 * parseInt(a[2], 16) - parseInt(a[3], 16), e = 255 - 16 * parseInt(a[4], 16) - parseInt(a[5], 16), 1 == b ? c > 127 || d > 127 || e > 127 ? (c = 255, d = 255, e = 255) : (c = 0, d = 0, e = 0) : 2 == b && (c > 127 || d > 127 || e > 127 ? (c = 20, d = 204, e = 112) : (c = 0, d = 0, e = 0)), "#" + (16 > c ? "0" + c.toString(16).toUpperCase() : c.toString(16).toUpperCase()) + (16 > d ? "0" + d.toString(16).toUpperCase() : d.toString(16).toUpperCase()) + (16 > e ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase())
}
function BlackOrWhite(a) {
	a = a.substr(1);
	var b = 0,
		c = 0,
		d = 0;
	return b = 16 * parseInt(a[0], 16) - parseInt(a[1], 16), c = 16 * parseInt(a[2], 16) - parseInt(a[3], 16), d = 16 * parseInt(a[4], 16) - parseInt(a[5], 16), b > 200 && c > 200 && d > 200 ? (b = 0, c = 0, d = 0) : (b = 255, c = 255, d = 255), "#" + (16 > b ? "0" + b.toString(16).toUpperCase() : b.toString(16).toUpperCase()) + (16 > c ? "0" + c.toString(16).toUpperCase() : c.toString(16).toUpperCase()) + (16 > d ? "0" + d.toString(16).toUpperCase() : d.toString(16).toUpperCase())
}
function getSavePosition(a, b) {
	var c;
	return b = b || "", b = "" == b ? a.name : a.name + " - " + b, c = a.getParentNode(), c ? getSavePosition(c, b) : b
}
function getTreeFolder(a, b) {
	var d, c, e, f, g;
	if (!a || 0 == a.length) return [];
	c = [];
	for (e in a) {
		if (f = a[e], f["fid"] == b) {
			for (g in f["children"]) c.push(f["children"][g]);
			return c
		}
		if (f["children"] && f["children"].length > 0 && (d = getTreeFolder(f["children"], b))) return d
	}
}
function controlSaveFolderByAjax(a, b, c, d, e) {
	$.ajax({
		url: "/3.0/saveControl.php",
		type: "POST",
		data: {
			type: a,
			folderID: c,
			userName: d,
			folderName: b
		},
		dataType: "JSON",
		success: function(a) {
			a && a.length > 0 && ("ok" == a[0] ? e && "function" == typeof e && e(a[1]) : messageForPhp(a[1]))
		}
	})
}
function controlMoveFolderByAjax(a, b, c, d, e) {
	$.ajax({
		url: "/3.0/saveControl.php",
		type: "POST",
		data: {
			type: a,
			folderID: c,
			userName: d,
			curIDArr: b
		},
		dataType: "JSON",
		success: function(a) {
			a && a.length > 0 && ("ok" == a[0] ? e && "function" == typeof e && e(a[1]) : messageForPhp(a[1]))
		}
	})
}
function controlCopyFolderByAjax(a, b, c, d, e, f) {
	$.ajax({
		url: "/3.0/saveControl.php",
		type: "POST",
		data: {
			type: a,
			folderID: c,
			userName: d,
			curID: b,
			fileName: f
		},
		dataType: "JSON",
		success: function(a) {
			a && a.length > 0 ? "ok" == a[0] && e && "function" == typeof e && e(a[1]) : messageForPhp(a[1])
		}
	})
}
function controlDeleteFolderByAjax(a, b, c, d) {
	$.ajax({
		url: "/3.0/saveControl.php",
		type: "POST",
		data: {
			type: a,
			userName: c,
			curIDArr: b
		},
		dataType: "JSON",
		success: function(a) {
			a && a.length > 0 && ("ok" == a[0] ? d && "function" == typeof d && d(a[1]) : messageForPhp(a[1]))
		}
	})
}
function getSaveFilesByAjax(a, b, c, d) {
	var e = $("#" + a);
	$.ajax({
		url: "/3.0/saveControl.php",
		type: "POST",
		data: {
			type: "syncTree",
			folderID: b,
			userName: c
		},
		dataType: "JSON",
		success: function(a) {
			var g, h, c = "",
				f = [];
			for (f = getTreeFolder([d], b), a && a.length > 0 && (f = $.merge(a, f)), g = 0; g < f.length; g++) h = f[g], c += h["isParent"] ? '<li class="folder" style="display:none;" data-id="' + h["fid"] + '" data-name="' + h["name"] + '">' + '<span class="savename"><i>&nbsp;</i>' + h["name"] + "</span>" + "</li>" : '<li class="file" data-id="' + h["ID"] + '" data-name="' + h["saveName"] + '">' + '<span class="savename"><i>&nbsp;</i>' + h["saveName"] + "</span>" + '<span class="savetime">' + h["saveTime"] + "</span>" + '<span class="nofolder savepreview"><i>&nbsp;</i>预览</span>' + '<span class="nofolder saveedit"><i>&nbsp;</i>应用</span>' + "</li>";
			e.html(c)
		}
	})
}
function getSearchFilesByAjax(a, b, c, d, e, f) {
	var g = $("#" + b);
	$.ajax({
		url: "/3.0/saveControl.php",
		type: "POST",
		data: {
			type: "searchTree",
			keyword: a,
			userName: d
		},
		dataType: "JSON",
		success: function(a) {
			var h, i, b = "",
				d = [];
			for (d = getTreeFolder([e], c), a && a.length > 0 && (d = $.merge(a, d)), h = 0; h < d.length; h++) i = d[h], b += i["isParent"] ? '<li class="folder" style="display:none;" data-id="' + i["fid"] + '" data-name="' + i["name"] + '">' + '<span class="savename"><i>&nbsp;</i>' + i["name"] + "</span>" + "</li>" : '<li class="file" data-id="' + i["ID"] + '" data-name="' + i["saveName"] + '">' + '<span class="savename"><i>&nbsp;</i>' + i["saveName"] + "</span>" + '<span class="savetime">' + i["saveTime"] + "</span>" + '<span class="nofolder savepreview"><i>&nbsp;</i>预览</span>' + '<span class="nofolder saveedit"><i>&nbsp;</i>应用</span>' + "</li>";
			g.html(b), f && "function" == typeof f && f(a)
		}
	})
}
function copyFileNameCheck(a) {
	var b = !1;
	return $("#jSaveList").children(".file").each(function() {
		var c = $(this),
			d = c.attr("data-name");
		d == a + "的副本" && (b = !0)
	}), b ? (a += " (1) ", copyFileNameCheck(a)) : a
}
function tLoading(a) {
	clearTimeout(_g_loadingTime), a ? ($("#tLoadingOverlay").show(), $("#tLoading").show(), _g_isLoading = !0, _g_loadingTime = setTimeout(function() {
		$("#tLoadingOverlay").hide(), $("#tLoading").hide(), _g_isLoading = !1
	}, 4e4)) : ($("#tLoadingOverlay").hide(), $("#tLoading").hide(), _g_isLoading = !1)
}
function checkHit(a, b, c, d, e) {
	c = c || "touch";
	var g, h, i, j, k, l, m, n, o, p, f = !1;
	return o = a.offset(), g = o.top, h = o.left, i = g + a.height(), j = h + a.width(), p = b.offset(), k = p.top, l = p.left, m = k + b.height(), n = l + b.width(), "touch" === c ? f = !(h > n || l > j || g > m || k > i) : "fit_tl" === c ? f = h > l && g > k : "fit" === c && (f = h >= l && n >= j && g >= k && m >= i, d && (e ? (l > h && a.offset({
		left: l
	}).width(j - l), j > n && a.width(n - h), k > g && a.offset({
		top: k
	}).height(i - k), i > m && a.height(m - g)) : (l > h && a.offset({
		left: l
	}), j > n && a.offset({
		left: n - a.width()
	}), k > g && a.offset({
		top: k
	}), i > m && a.offset({
		top: m - a.height()
	})))), f
}
function checkRange(a, b, c, d, e, f) {
	var g = !1;
	return g = a > e && f > a && b > c && d > b
}
function itemQuickSet(a, b) {
	var c, e, g = ($("input[type='hidden'][name='href']"), "");
	c = $("input[type='radio'][name='itemMode']:checked").val(), e = $("#itemPicTemp"), tVal = e.val(), "" != tVal || "ptitem" != c && "pptitem" != c ? itemQuickSetReal(a, b) : ("ptitem" == c ? g = "giiforp.php" : "pptitem" == c && (g = "giiforp_ppt.php"), itemQuickSetReal(a, b), _g_qm = !0)
}
function findApp() {
	var b, c, a = {};
	return a.cipher = function(b, c) {
		var g, h, i, d = 4,
			e = c.length / d - 1,
			f = [
				[],
				[],
				[],
				[]
			];
		for (g = 0; 4 * d > g; g++) f[g % 4][Math.floor(g / 4)] = b[g];
		for (f = a.add(f, c, 0, d), h = 1; e > h; h++) f = a.ves(f, d), f = a.shift(f, d), f = a.mix(f, d), f = a.add(f, c, h, d);
		for (f = a.ves(f, d), f = a.shift(f, d), f = a.add(f, c, e, d), i = new Array(4 * d), g = 0; 4 * d > g; g++) i[g] = f[g % 4][Math.floor(g / 4)];
		return i
	}, a.inc = function(b) {
		var h, i, j, c = 4,
			d = b.length / 4,
			e = d + 6,
			f = new Array(c * (e + 1)),
			g = new Array(4);
		for (h = 0; d > h; h++) i = [b[4 * h], b[4 * h + 1], b[4 * h + 2], b[4 * h + 3]], f[h] = i;
		for (h = d; c * (e + 1) > h; h++) {
			for (f[h] = new Array(4), j = 0; 4 > j; j++) g[j] = f[h - 1][j];
			if (0 == h % d) for (g = a.sub(a.row(g)), j = 0; 4 > j; j++) g[j] ^= a.sarr1[h / d][j];
			else d > 6 && 4 == h % d && (g = a.sub(g));
			for (j = 0; 4 > j; j++) f[h][j] = f[h - d][j] ^ g[j]
		}
		return f
	}, a.ves = function(b, c) {
		var d, e;
		for (d = 0; 4 > d; d++) for (e = 0; c > e; e++) b[d][e] = a.sarr[b[d][e]];
		return b
	}, a.shift = function(a, b) {
		var d, e, c = new Array(4);
		for (d = 1; 4 > d; d++) {
			for (e = 0; 4 > e; e++) c[e] = a[d][(e + d) % b];
			for (e = 0; 4 > e; e++) a[d][e] = c[e]
		}
		return a
	}, a.mix = function(a) {
		var c, d, e, f;
		for (c = 0; 4 > c; c++) {
			for (d = new Array(4), e = new Array(4), f = 0; 4 > f; f++) d[f] = a[f][c], e[f] = 128 & a[f][c] ? 283 ^ a[f][c] << 1 : a[f][c] << 1;
			a[0][c] = e[0] ^ d[1] ^ e[1] ^ d[2] ^ d[3], a[1][c] = d[0] ^ e[1] ^ d[2] ^ e[2] ^ d[3], a[2][c] = d[0] ^ d[1] ^ e[2] ^ d[3] ^ e[3], a[3][c] = d[0] ^ e[0] ^ d[1] ^ d[2] ^ e[3]
		}
		return a
	}, a.add = function(a, b, c, d) {
		var e, f;
		for (e = 0; 4 > e; e++) for (f = 0; d > f; f++) a[e][f] ^= b[4 * c + f][e];
		return a
	}, a.sub = function(b) {
		for (var c = 0; 4 > c; c++) b[c] = a.sarr[b[c]];
		return b
	}, a.row = function(a) {
		var c, b = a[0];
		for (c = 0; 3 > c; c++) a[c] = a[c + 1];
		return a[3] = b, a
	}, a.sarr = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], a.sarr1 = [
		[0, 0, 0, 0],
		[1, 0, 0, 0],
		[2, 0, 0, 0],
		[4, 0, 0, 0],
		[8, 0, 0, 0],
		[16, 0, 0, 0],
		[32, 0, 0, 0],
		[64, 0, 0, 0],
		[128, 0, 0, 0],
		[27, 0, 0, 0],
		[54, 0, 0, 0]
	], a.findStart = window.updateFilter = function(d, e, f) {
		var g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z;
		if (f = f || 128, g = 16, 128 != f && 192 != f && 256 != f) return "";
		for (d = c.start(d), e = c.start(e), h = f / 8, i = new Array(h), j = 0; h > j; j++) i[j] = isNaN(e.charCodeAt(j)) ? 0 : e.charCodeAt(j);
		for (k = a.cipher(i, a.inc(i)), k = k.concat(k.slice(0, h - 16)), l = new Array(g), new Date("2099-12-31 23:59:59:666").getTime(), n = 666, o = 4102415999, p = Math.floor(88888), j = 0; 2 > j; j++) l[j] = 255 & n >>> 8 * j;
		for (j = 0; 2 > j; j++) l[j + 2] = 255 & p >>> 8 * j;
		for (j = 0; 4 > j; j++) l[j + 4] = 255 & o >>> 8 * j;
		for (q = "", j = 0; 8 > j; j++) q += String.fromCharCode(l[j]);
		for (r = a.inc(k), s = Math.ceil(d.length / g), t = new Array(s), u = 0; s > u; u++) {
			for (v = 0; 4 > v; v++) l[15 - v] = 255 & u >>> 8 * v;
			for (v = 0; 4 > v; v++) l[15 - v - 4] = u / 4294967296 >>> 8 * v;
			for (w = a.cipher(l, r), x = s - 1 > u ? g : (d.length - 1) % g + 1, y = new Array(x), j = 0; x > j; j++) y[j] = w[j] ^ d.charCodeAt(u * g + j), y[j] = String.fromCharCode(y[j]);
			t[u] = y.join("")
		}
		return z = q + t.join(""), z = b.start(z)
	}, a.findEnd = function(d, e, f) {
		var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
		if (f = f || 256, g = 16, 128 != f && 192 != f && 256 != f) return "";
		for (d = b.dsend(d), e = c.start(e), h = f / 8, i = new Array(h), j = 0; h > j; j++) i[j] = isNaN(e.charCodeAt(j)) ? 0 : e.charCodeAt(j);
		for (k = a.cipher(i, a.inc(i)), k = k.concat(k.slice(0, h - 16)), l = new Array(8), ctrTxt = d.slice(0, 8), j = 0; 8 > j; j++) l[j] = ctrTxt.charCodeAt(j);
		for (m = a.inc(k), n = Math.ceil((d.length - 8) / g), o = new Array(n), p = 0; n > p; p++) o[p] = d.slice(8 + p * g, 8 + p * g + g);
		for (d = o, q = new Array(d.length), p = 0; n > p; p++) {
			for (r = 0; 4 > r; r++) l[15 - r] = 255 & p >>> 8 * r;
			for (r = 0; 4 > r; r++) l[15 - r - 4] = 255 & (p + 1) / 4294967296 - 1 >>> 8 * r;
			for (s = a.cipher(l, m), t = new Array(d[p].length), j = 0; j < d[p].length; j++) t[j] = s[j] ^ d[p].charCodeAt(j), t[j] = String.fromCharCode(t[j]);
			q[p] = t.join("")
		}
		return u = q.join(""), u = c.dsend(u)
	}, b = {}, b.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.start = function(a, c) {
		var d, e, f, g, h, i, j, k, n, o, p, l, m, q;
		if (c = "undefined" == typeof c ? !1 : c, l = [], m = "", q = b.code, o = c ? a.encodeUTF8() : a, n = o.length % 3, n > 0) for (; n++ < 3;) m += "=", o += "\0";
		for (n = 0; n < o.length; n += 3) d = o.charCodeAt(n), e = o.charCodeAt(n + 1), f = o.charCodeAt(n + 2), g = d << 16 | e << 8 | f, h = 63 & g >> 18, i = 63 & g >> 12, j = 63 & g >> 6, k = 63 & g, l[n / 3] = q.charAt(h) + q.charAt(i) + q.charAt(j) + q.charAt(k);
		return p = l.join(""), p = p.slice(0, p.length - m.length) + m
	}, b.dsend = function(a, c) {
		var d, e, f, g, h, i, j, k, m, n, l, o, p;
		for (c = "undefined" == typeof c ? !1 : c, l = [], o = b.code, n = c ? a.decodeUTF8() : a, p = 0; p < n.length; p += 4) g = o.indexOf(n.charAt(p)), h = o.indexOf(n.charAt(p + 1)), i = o.indexOf(n.charAt(p + 2)), j = o.indexOf(n.charAt(p + 3)), k = g << 18 | h << 12 | i << 6 | j, d = 255 & k >>> 16, e = 255 & k >>> 8, f = 255 & k, l[p / 4] = String.fromCharCode(d, e, f), 64 == j && (l[p / 4] = String.fromCharCode(d, e)), 64 == i && (l[p / 4] = String.fromCharCode(d));
		return m = l.join(""), c ? m.decodeUTF8() : m
	}, c = {}, c.start = function(a) {
		a || (a = "");
		var b = a.replace(/[\u0080-\u07ff]/g, function(a) {
			var b = a.charCodeAt(0);
			return String.fromCharCode(192 | b >> 6, 128 | 63 & b)
		});
		return b = b.replace(/[\u0800-\uffff]/g, function(a) {
			var b = a.charCodeAt(0);
			return String.fromCharCode(224 | b >> 12, 128 | 63 & b >> 6, 128 | 63 & b)
		})
	}, c.dsend = function(a) {
		var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(a) {
			var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
			return String.fromCharCode(b)
		});
		return b = b.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(a) {
			var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
			return String.fromCharCode(b)
		})
	}, a
}
function patternsConcat() {
	var b, c, d, a = "";
	for (d = 0; d < arguments.length; ++d) c = arguments[d], b = "" + (c instanceof RegExp ? c.source : c), b.length > 0 && (a += (a.length > 0 ? "|" : "") + b);
	return a
}
function itemQuickSingleReal(a, b) {
	var d, e, f, g, h, i, j, k, l, p, q, u, c, m, n, o, r, s, t, v, w, x, y;
	a && 0 != a.length && (c = JSON.parse(a.attr("data-config")), m = [], n = [], o = [], r = [], s = [], t = [], d = c.href, e = c.pSrc, f = c.titleInfo, g = c._priceInfo, h = c.priceInfo, i = c.pSrcPos, j = c.titleAuto, k = c._priceAuto, l = c.priceAuto, m[0] = d.split(","), n[0] = m[0][b] || "", m[1] = e.split(","), n[1] = m[1][b] || "", m[2] = f.split(","), n[2] = m[2][b] || "", m[3] = g.split(","), n[3] = m[3][b] || "", m[4] = h.split(","), n[4] = m[4][b] || "", p = i.split(","), q = p[b] || "", r[0] = j.split(","), s[0] = r[0][b] || "", r[1] = k.split(","), s[1] = r[1][b] || "", r[2] = l.split(","), s[2] = r[2][b] || "", v = $("#qmitemSingle"), w = v.children(".qmright"), x = w.children("ul"), y = v.children(".qmleft"), x.find(".qmeleval").each(function(a) {
		var c = $(this);
		c.val(n[a])
	}), x.find(".qmcheckicon").each(function(a) {
		var c = $(this);
		"1" == s[a] ? (c.addClass("active"), c.prev().prop("readonly", !0).addClass("disabled")) : (c.removeClass("active"), c.prev().prop("readonly", !1).removeClass("disabled"))
	}), "" != n[1] && y.children(".qmpicpreview").children("img").attr("src", n[1]), y.children(".qmpicselect").attr("data-pPos", p || "1"), $("#editSingleItemBox").off("click.syncSingleData").on("click.syncSingleData", function(a) {
		var g, h, b = $(a.target),
			d = b.parent().parent().parent().parent(),
			e = d.children(".qmleft");
		d.index(), g = c.itemMode || "ptitem", h = "", "ptitem" == g ? h = "giiforp.php" : "pptitem" == g && (h = "giiforp_ppt.php"), b.hasClass("lj-sync-icon") ? $.ajax({
			url: "gii.php",
			data: {
				item: [b.prev().val()],
				ewmSize: c.erWeiMaSize,
				random: 1e4 * Math.random()
			},
			type: "POST",
			dataType: "JSON",
			success: function(a) {
				var d, c = a[1];
				c.splice(1, 1), d = c[2], c[2] = c[3], c[3] = d, b.parent().parent().find(".qmeleval").each(function(a) {
					a > 0 && $(this).val(c[a - 1])
				}), "" != c[0] && (e.children(".qmpicpreview").children("img").attr("src", c[0]), e.children(".qmpicselect").attr("data-pPos", "1"))
			}
		}) : (b.hasClass("bt-sync-icon") || b.hasClass("xj-sync-icon") || b.hasClass("yj-sync-icon")) && (b.hasClass("active") ? (b.removeClass("active"), b.prev().prop("readonly", !1).removeClass("disabled")) : (b.addClass("active"), b.prev().prop("readonly", !0).addClass("disabled")))
	}), $("#editSingleItemBox").off("click.catchSingleSelect").on("click.catchSingleSelect", ".qmpicselect", function() {
		var l, m, k, n, o, p, q, r, d = $(this),
			e = d.offset(),
			f = $("#catchItemPicBox"),
			h = (f.data("whichsel"), d.attr("data-pPos")),
			j = c.itemMode || "ptitem";
		for (f.show().offset({
			top: e.top + 28,
			left: e.left
		}), f.data("whichsel", d).attr("data-qm", "yes"), k = f, n = "", o = c.href.split(","), l = $("#itemPicTemp_o"), m = l.val(), "ptitem" == j ? n = "giiforp.php" : "pptitem" == j && (n = "giiforp_ppt.php"), p = 0; p < o.length; p++) o[p] = p != b ? "" : $("#qmlink_si").val();
		if ("" == l.html() || (q = JSON.parse(l.html()), "" == q[b + 1][0])) _g_qm = !0, k.html('<span class="cipb-bbts"><div style="width:100px;height:100px;margin:0 auto;background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2Gmf5c3JlpuFjSspjXXcT.pXa-39767794.gif) no-repeat center center;"></div></span>'), $.ajax({
			url: n,
			type: "POST",
			dataType: "JSON",
			data: {
				item: o,
				random: 1e4 * Math.random()
			},
			success: function(a) {
				var c, d, e, f, i, g;
				if ("yes" == a[0]) {
					for (_g_qm = !1, c = 1; c < a.length; c++) if (a[c] && a[c]["colorImg"] && "" != a[c]["colorImg"]) for (d = a[c]["colorImg"], e = 0; e < d.length; e++) a[c][d[e].valueId] = d[e].imgUrl;
					if ("" != l.html() ? (f = JSON.parse(l.html()), f[b + 1] = a[b + 1], l.html(JSON.stringify(f))) : l.html(JSON.stringify(a)), g = JSON.parse(l.html() || "[]"), g[b + 1]) {
						k.html('<span class="cipb-bbzt">宝贝主图</span><span class="cipb-bbds" style="display:none;"></span>');
						for (e in g[b + 1]) i = D.tParseInt(h) - 1 == e ? ' class="active"' : "", "colorImg" != e && (4 >= e ? "" != g[b + 1][e] && checkUrl(g[b + 1][e]) && k.children(".cipb-bbds").before("<img" + i + ' data-val="' + e + '" src="' + g[b + 1][e] + '"/>') : (k.children(".cipb-bbds").is(":hidden") && k.children(".cipb-bbds").show(), "" != g[b + 1][e] && checkUrl(g[b + 1][e]) && k.append("<img" + i + ' data-val="' + e + '" src="' + g[b + 1][e] + '"/>')))
					}
				}
			}
		});
		else {
			k.html('<span class="cipb-bbzt">宝贝主图</span><span class="cipb-bbds" style="display:none;"></span>');
			for (r in q[b + 1]) boxActiveStr = D.tParseInt(h) - 1 == r ? ' class="active"' : "", "colorImg" != r && (4 >= r ? "" != q[b + 1][r] && checkUrl(q[b + 1][r]) && k.children(".cipb-bbds").before("<img" + boxActiveStr + ' data-val="' + r + '" src="' + q[b + 1][r] + '"/>') : (k.children(".cipb-bbds").is(":hidden") && k.children(".cipb-bbds").show(), "" != q[b + 1][r] && checkUrl(q[b + 1][r]) && k.append("<img" + boxActiveStr + ' data-val="' + r + '" src="' + q[b + 1][r] + '"/>')))
		}
	}), $("#editSingleItemBox").dialog("option", "buttons", {
		"确定": function() {
			x.find(".qmeleval").each(function(a) {
				var c = $(this);
				o[a] = c.val()
			}), x.find(".qmcheckicon").each(function(a) {
				var c = $(this);
				t[a] || (t[a] = []), t[a] = c.hasClass("active") ? "1" : "0"
			}), u = y.children(".qmpicselect").attr("data-pPos"), m[0][b] = o[0], m[1][b] = o[1], m[2][b] = o[2], m[3][b] = o[3], m[4][b] = o[4], p[b] = u, r[0][b] = t[0], r[1][b] = t[1], r[2][b] = t[2], c.href = m[0].join(","), c.pSrc = m[1].join(","), c.titleInfo = m[2].join(","), c._priceInfo = m[3].join(","), c.priceInfo = m[4].join(","), c.pSrcPos = p.join(","), c.titleAuto = r[0].join(","), c._priceAuto = r[1].join(","), c.priceAuto = r[2].join(","), D.appConfig["jib"][1].tSubmit(c, a), $("#editSingleItemBox").dialog("close")
		},
		"取消": function() {
			$("#editSingleItemBox").dialog("close")
		}
	}).dialog("open"), $("#editSingleItemBox").off("click.setSingleRst").on("click.setSingleRst", ".quicksingleitem-mon", function() {
		x.find(".qmeleval").each(function(a) {
			var c = $(this);
			o[a] = c.val()
		}), x.find(".qmcheckicon").each(function(a) {
			var c = $(this);
			t[a] || (t[a] = []), t[a] = c.hasClass("active") ? "1" : "0"
		}), u = y.children(".qmpicselect").attr("data-pPos"), m[0][b] = o[0], m[1][b] = o[1], m[2][b] = o[2], m[3][b] = o[3], m[4][b] = o[4], p[b] = u, r[0][b] = t[0], r[1][b] = t[1], r[2][b] = t[2], c.href = m[0].join(","), c.pSrc = m[1].join(","), c.titleInfo = m[2].join(","), c._priceInfo = m[3].join(","), c.priceInfo = m[4].join(","), c.pSrcPos = p.join(","), c.titleAuto = r[0].join(","), c._priceAuto = r[1].join(","), c.priceAuto = r[2].join(","), D.appConfig["jib"][1].tSubmit(c, a), $("#editSingleItemBox").hide()
	}))
}
function itemQuickSetReal(a, b) {
	var d, e, f, g, h, i, j, k, l, p, c = $(b),
		m = [],
		n = [],
		o = [],
		q = [],
		r = [],
		s = [],
		t = [];
	d = $("input[type='hidden'][name='href']"), e = $("input[type='hidden'][name='pSrc']"), f = $("input[type='hidden'][name='titleInfo']"), g = $("input[type='hidden'][name='_priceInfo']"), h = $("input[type='hidden'][name='priceInfo']"), i = $("input[type='hidden'][name='pSrcPos']"), j = $("input[type='hidden'][name='titleAuto']"), k = $("input[type='hidden'][name='_priceAuto']"), l = $("input[type='hidden'][name='priceAuto']"), "enter" == a ? (m[0] = d.val(), n[0] = m[0].split(","), m[1] = e.val(), n[1] = m[1].split(","), m[2] = f.val(), n[2] = m[2].split(","), m[3] = g.val(), n[3] = m[3].split(","), m[4] = h.val(), n[4] = m[4].split(","), p = i.val().split(","), q[0] = j.val(), r[0] = q[0].split(","), q[1] = k.val(), r[1] = q[1].split(","), q[2] = l.val(), r[2] = q[2].split(","), c.children(".qmitembox").each(function(a) {
		var c = $(this),
			d = c.children(".qmright"),
			e = d.children("ul"),
			f = c.children(".qmleft");
		e.find(".qmeleval").each(function(b) {
			var d = $(this);
			d.val(n[b][a])
		}), e.find(".qmcheckicon").each(function(b) {
			var d = $(this);
			"1" == r[b][a] ? (d.addClass("active"), d.prev().prop("readonly", !0).addClass("disabled")) : (d.removeClass("active"), d.prev().prop("readonly", !1).removeClass("disabled"))
		}), "" != n[1][a] && f.children(".qmpicpreview").children("img").attr("src", n[1][a]), f.children(".qmpicselect").attr("data-pPos", p[a] || "1")
	})) : "leave" == a && (c.children(".qmitembox").each(function(a) {
		var c = $(this),
			d = c.children(".qmright"),
			e = d.children("ul"),
			f = c.children(".qmleft");
		e.find(".qmeleval").each(function(b) {
			var d = $(this);
			o[b] || (o[b] = []), o[b][a] = d.val()
		}), e.find(".qmcheckicon").each(function(b) {
			var d = $(this);
			s[b] || (s[b] = []), s[b][a] = d.hasClass("active") ? "1" : "0"
		}), t.push(f.children(".qmpicselect").attr("data-pPos"))
	}), d.val(o[0].join(",")), e.val(o[1].join(",")), f.val(o[2].join(",")), g.val(o[3].join(",")), h.val(o[4].join(",")), i.val(t.join(",")), j.val(s[0].join(",")), k.val(s[1].join(",")), l.val(s[2].join(",")))
}
function itempiccatchboxQuick(a, b, c) {
	var i, j, k, g = "",
		h = $("input[type='hidden'][name='href']").val().split(","),
		d = $("input[type='radio'][name='itemMode']:checked").val(),
		e = $("#itemPicTemp");
	for (tVal = e.val(), "ptitem" == d ? g = "giiforp.php" : "pptitem" == d && (g = "giiforp_ppt.php"), i = 0; i < h.length; i++) h[i] = i != b ? "" : $("#tabs-95").find("input[name='iqs_href']:eq(" + b + ")").val();
	if ($("#tabs-95").attr("data-sein") != b) if ($("#tabs-95").attr("data-sein", b), "" == e.html() || (j = JSON.parse(e.html()), "" == j[b + 1][0])) _g_qm = !0, c.html('<span class="cipb-bbts"><div style="width:100px;height:100px;margin:0 auto;background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2Gmf5c3JlpuFjSspjXXcT.pXa-39767794.gif) no-repeat center center;"></div></span>'), $.ajax({
		url: g,
		type: "POST",
		dataType: "JSON",
		data: {
			item: h,
			random: 1e4 * Math.random()
		},
		success: function(d) {
			var f, g, h, i, k, j;
			if ("yes" == d[0]) {
				for (_g_qm = !1, f = 1; f < d.length; f++) if (d[f] && d[f]["colorImg"] && "" != d[f]["colorImg"]) for (g = d[f]["colorImg"], h = 0; h < g.length; h++) d[f][g[h].valueId] = g[h].imgUrl;
				if ("" != e.html() ? (i = JSON.parse(e.html()), i[b + 1] = d[b + 1], e.html(JSON.stringify(i))) : e.html(JSON.stringify(d)), j = JSON.parse($("#itemPicTemp").html() || "[]"), j[b + 1]) {
					c.html('<span class="cipb-bbzt">宝贝主图</span><span class="cipb-bbds" style="display:none;"></span>');
					for (h in j[b + 1]) k = D.tParseInt(a) - 1 == h ? ' class="active"' : "", "colorImg" != h && (4 >= h ? "" != j[b + 1][h] && checkUrl(j[b + 1][h]) && c.children(".cipb-bbds").before("<img" + k + ' data-val="' + h + '" src="' + j[b + 1][h] + '"/>') : (c.children(".cipb-bbds").is(":hidden") && c.children(".cipb-bbds").show(), "" != j[b + 1][h] && checkUrl(j[b + 1][h]) && c.append("<img" + k + ' data-val="' + h + '" src="' + j[b + 1][h] + '"/>')))
				}
			}
		}
	});
	else {
		c.html('<span class="cipb-bbzt">宝贝主图</span><span class="cipb-bbds" style="display:none;"></span>');
		for (k in j[b + 1]) boxActiveStr = D.tParseInt(a) - 1 == k ? ' class="active"' : "", "colorImg" != k && (4 >= k ? "" != j[b + 1][k] && checkUrl(j[b + 1][k]) && c.children(".cipb-bbds").before("<img" + boxActiveStr + ' data-val="' + k + '" src="' + j[b + 1][k] + '"/>') : (c.children(".cipb-bbds").is(":hidden") && c.children(".cipb-bbds").show(), "" != j[b + 1][k] && checkUrl(j[b + 1][k]) && c.append("<img" + boxActiveStr + ' data-val="' + k + '" src="' + j[b + 1][k] + '"/>')))
	}
}
function upDateSortSub(a) {
	var b, c, d, e = [];
	a && a.length > 0 && (b = a.attr("data-dblType"), ("jspb" == b || "jkgb" == b || "jbob" == b) && (c = JSON.parse(a.attr("data-config") || "{}"), d = c.childConfig, d && d.length > 0 && (a.children(".t-app-child").each(function() {
		var f, c = $(this).attr("attachID");
		for (f = 0; f < d.length; f++) if (d[f].attachID == c) {
			e.push(d[f]);
			break
		}
	}), c.childConfig = e, a.attr("data-config", JSON.stringify(c)))))
}
function checkDialog(a) {
	var b = a.parentsUntil(".ui-dialog").last().parent();
	return b
}
function fake_click(a) {
	var b = document.createEvent("MouseEvents");
	b.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
}
function export_raw(a, b) {
	var c = window.URL || window.webkitURL || window,
		d = new Blob([b]),
		e = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
	e.href = c.createObjectURL(d), e.download = a, fake_click(e)
}
function urlDecode(a) {
	var c, d, e, b = "";
	for (c = 0; c < a.length; c++) d = a.charAt(c), "+" == d ? b += " " : "%" == d ? (e = a.substring(c + 1, c + 3), parseInt("0x" + e) > 127 ? (b += asc2str(parseInt("0x" + e + a.substring(c + 4, c + 6))), c += 5) : (b += asc2str(parseInt("0x" + e)), c += 2)) : b += d;
	return b
}
var Sys, ua, xxImgDivBoxTimeout;
Date.prototype.Format = function(a, b, c) {
	var d, e, f, g;
	if (b = b || 0, c = c || 0, d = (this.getMonth() + 1 + b) % 12, e = 0, (this.getMonth() + 1 + b) / 12 > 1 && (e = 1), 0 == d && (d = 12), 0 != c) return new Date(this.getTime() + 864e5 * c).Format(a);
	f = {
		"M+": d,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	}, /(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + e + "").substr(4 - RegExp.$1.length)));
	for (g in f) new RegExp("(" + g + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? f[g] : ("00" + f[g]).substr(("" + f[g]).length)));
	return a
}, Sys = {}, ua = navigator.userAgent.toLowerCase(), window.ActiveXObject ? Sys.ie = ua.match(/msie ([\d.]+)/)[1] : document.getBoxObjectFor ? Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1] : window.MessageEvent && !document.getBoxObjectFor ? Sys.chrome = ua.match(/chrome\/([\d.]+)/) && ua.match(/chrome\/([\d.]+)/)[1] : window.opera ? Sys.opera = ua.match(/opera.([\d.]+)/)[1] : window.openDatabase && (Sys.safari = ua.match(/version\/([\d.]+)/)[1]), xxImgDivBoxTimeout = null;