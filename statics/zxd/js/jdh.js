function toMLogin() {
	$("#tMessage").dialog("close"), $("#login").trigger("click")
}
Date.prototype.Format = function(a, b) {
	var c, d, e, f;
	b = b || 0, c = (this.getMonth() + 1 + b) % 12, d = 0, (this.getMonth() + 1 + b) / 12 >= 1 && (d = 1), 0 == c && (c = 12), e = {
		"M+": c,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	}, /(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + d + "").substr(4 - RegExp.$1.length)));
	for (f in e) new RegExp("(" + f + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? e[f] : ("00" + e[f]).substr(("" + e[f]).length)));
	return a
};
var D = require("scripts/D");
D.appConfig = {
	jdb: ['<div class="t-app" data-dblType="jdb" style="background-color: rgba(0, 0, 0, 0.3)"></div>',
	{
		tTitle: "热区设置",
		tUrl: "area",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), D.setPopupContent(a), b.attr("data-config", JSON.stringify(a))
		},
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1,
				i = "",
				j = "",
				k = "",
				l = "",
				m = "",
				n = "",
				o = "",
				p = "a",
				q = 0,
				r = "",
				s = "",
				t = "ptlink";
			return "gzlink" == b.linkMode ? ("" != b.attentionID && (i = "btn-coll"), j = 'id="coll' + b.attentionID + '"', b.href = "", b.hrefMode = "_self", t = "gzlink") : "wwlink" == b.linkMode ? ("" == b.wangID && (b.wangID = "junezx"), b.wangID = encodeURI(b.wangID), b.wangID = b.wangID.replace(":", "%3A"), b.wangID = b.wangID.replace("%20", ""), b.href = "http://chat5.jd.com/index.action?shopId=" + b.wangID + "&code=1", t = "wwlink") : "mdlink" == b.linkMode && (b.href = "#" + b.anchorSelect, b.hrefMode = "_self", t = "mdlink"), b.zIndex && (h = b.zIndex), "" != b.shadowControl && ("" == b.shadowLeft && (b.shadowLeft = 0), "" == b.shadowTop && (b.shadowTop = 0), "" == b.shadowBlur && (b.shadowBlur = 0), "" == b.shadowSize && (b.shadowSize = 0), "1" == b.shadowShowType && (n = "box-shadow: " + b.shadowLeft + "px " + b.shadowTop + "px " + b.shadowBlur + "px " + b.shadowSize + "px " + b.shadowColor + " " + b.shadowStyle + ";"), o = "box-shadow: " + b.shadowLeft + "px " + b.shadowTop + "px " + b.shadowBlur + "px " + b.shadowSize + "px " + b.shadowColor + " " + b.shadowStyle + ";"), "" == b.borderWidth && (b.borderWidth = 0), "" == b.mongoliaControl && (b.mongoliaMode = ""), "hborder" != b.borderControl && (g = "border:none;", b.borderControl = "", b.borderWidth = 0), k = checkUrl(b.pSrc) ? "background:url(" + b.pSrc + ") center center no-repeat;" : "background:url(http://a.tbcdn.cn/s.gif) center center no-repeat;", b.borderColor = RGBToHex(b.borderColor, ""), "" != b.borderColor && (l = "border-color:" + b.borderColor + ";"), q = D.tParseInt(b.borderWidth), r = ' href="' + b.href + '"', s = ' target="' + b.hrefMode + '"', ("" != k && "" != b.mongoliaControl || "" != b.shadowControl || "" != b.borderControl) && (p = "div", r = "", s = "", m = '<a class="jdbchild abs june-box-fadein" data-shadow="' + b.shadowShowType + '" href="' + b.href + '" target="' + b.hrefMode + '" style="display:block;top:' + (0 - q) + "px;left:" + (0 - q) + "px;width:" + c + "px;height:" + d + "px;" + l + "border-style:solid;border-width:" + q + "px;" + g + o + '" data-linkmode="' + t + '" data-appid="' + b.appID + '" ' + j + '></a><a class="jdbmc abs ' + b.appID + " " + b.mongoliaMode + " " + i + '" href="' + b.href + '" target="' + b.hrefMode + '" style="display:block;width:' + c + "px;height:" + d + 'px;top:0;left:0;" data-linkmode="' + t + '" data-appid="' + b.appID + '" ' + j + "></a>"), "" == b.href && (r = "", s = ""), "<" + p + ' class="jdb jspb abs ' + b.appID + " " + b.mongoliaMode + " " + b.borderControl + " " + b.shadowControl + " " + i + '"' + r + s + ' style="' + k + "display:block;width:" + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:" + h + ";" + n + '" data-linkmode="' + t + '" data-appid="' + b.appID + '" ' + j + ">" + m + "</" + p + ">"
		},
		codeImport: function(a, b, c, d) {
			var m, n, o, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				i = (c.attr("class"), c.children("a:eq(0)")),
				j = "",
				k = [],
				l = "";
			g.borderColor = RGBToHex(c.attr("border-color")), g.appID = c.attr("data-appid"), c.is("a") ? (g.href = c.attr("href"), g.hrefMode = c.attr("target")) : (g.href = i.attr("href"), g.hrefMode = i.attr("target"), c.hasClass("shadowShow") && (g.shadowControl = "shadowShow", g.shadowShowType = i.attr("data-shadow"), j = i.css("box-shadow"), j.indexOf("inset") >= 0 && (g.shadowStyle = "inset", j = $.trim(j.replace(/inset/g, ""))), j.indexOf("rgb") >= 0 && (l = RGBToHex(j.match(/rgb\((\S|\s)*\)/g)[0]), j = $.trim(j.replace(/rgb\((\S|\s)*\)/g, ""))), k = j.split(" "), k[0].indexOf("px") < 0 && k[0] ? ("" == l && (l = RGBToHex(k[0])), k.splice(0, 1)) : "" == l && (l = RGBToHex(k[4])), g.shadowColor = l, g.shadowLeft = D.tParseInt(k[0]), g.shadowTop = D.tParseInt(k[1]), g.shadowBlur = D.tParseInt(k[2]), g.shadowSize = D.tParseInt(k[3]))), g.pSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), g.linkMode = c.attr("data-linkmode"), g.wangID = "", g.shuntMode = "no", g.anchorSelect = "", m = (g.href || "").split("?"), c.hasClass("btn-coll") && (g.linkMode = "gzlink", g.attentionID = (c.attr("id") || "").replace(/coll/g, "")), new RegExp("chat5.jd.com/index.action").test(m[0]) && (e.href = "http://chat5.jd.com/index.action?shopId=" + e.wangID + "&code=1", n = m[1].split("&"), g.linkMode = "wwlink", g.wangID = n[0].replace("shopId=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID)), "mdlink" == g.linkMode && (g.anchorSelect = g.href.replace("#", ""), g.href = ""), c.hasClass("hborder") && (g.borderControl = "hborder", g.borderWidth = c.children("a:eq(0)").css("border-width") || "1px", g.borderWidth = g.borderWidth.replace(/px/g, "")), c.hasClass("mcblack") && (g.mongoliaControl = "mongoliaShow", g.mongoliaMode = "mcblack"), c.hasClass("mcwhite") && (g.mongoliaControl = "mongoliaShow", g.mongoliaMode = "mcwhite"), "#" != g.borderColor.charAt(0) && (g.borderColor = RGBToHex(g.borderColor)), o = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(o)), checkUrl(g.pSrc) && a.css({
				backgroundImage: "url(" + g.pSrc + ")"
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		pSrc: "",
		autoSize: "yes",
		href: "#",
		hrefMode: "_blank",
		linkMode: "ptlink",
		attentionID: "",
		wangID: "",
		shuntMode: "no",
		mongoliaControl: "",
		mongoliaMode: "mcblack",
		borderControl: "",
		borderColor: "#000000",
		borderWidth: "1",
		shadowControl: "",
		shadowShowType: "1",
		shadowLeft: "0",
		shadowTop: "0",
		shadowBlur: "5",
		shadowSize: "0",
		shadowColor: "#666666",
		shadowStyle: "",
		anchorSelect: "",
		popupConfig: {
			pSwitch: "no",
			popupPosition: "'tr','tl'",
			spaceX: "0",
			spaceY: "0",
			popupHtml: ""
		}
	}],
	jspb: ['<div class="t-app t-app-jspb" data-dblType="jspb"></div>',
	{
		tTitle: "特效层设置",
		tUrl: "spic",
		tSubmit: function(a, b) {
			var d, e, f, g, h, c = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), $("#tParentThumb").find("img").attr({
				src: a.pSrc
			}).show(), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : (b.css({
				backgroundImage: "none"
			}), $("#tParentThumb").find("img").hide()), b.css({
				backgroundPosition: a.imgBgp || "50% 50%"
			}), submitColor(b, RGBToHex(a.bgColor, "")), b.attr("data-config", JSON.stringify(a));
			for (d in a.childConfig) a.childConfig[d] && a.childConfig[d].attachID && (e = a.childConfig[d].attachID, f = b.children(D.appChildCls + "[attachID='" + e + "']"), g = D.getChildPos(b, f, !0), "imgContent" == a.childConfig[d].contentType ? (f.html("").tResize(), f.removeAttr("style").css({
				width: g.width,
				height: g.height,
				top: g.top,
				left: g.left
			}), checkUrl(a.childConfig[d].pSrc) ? (f.css({
				backgroundImage: "url(" + a.childConfig[d].pSrc + ")"
			}), $("#tThumb").children(D.thumbCls + "[attachID='" + e + "']").find("img").attr({
				src: a.childConfig[d].pSrc
			}), "yes" == a.childConfig[d].autoSize &&
			function(b, d) {
				c.ajaxJson("gis", {
					img: a.childConfig[d].pSrc
				}, function(a) {
					var c = a[0],
						d = a[1];
					c && b.width(c), d && b.height(d)
				})
			}(f, d), $("#tThumb").children(D.thumbCls + "[attachID='" + e + "']").find("img").show()) : (f.css({
				backgroundImage: "none"
			}), $("#tThumb").children(D.thumbCls + "[attachID='" + e + "']").find("img").hide()), f.css({
				backgroundPosition: a.childConfig[d].imgBgp || "50% 50%"
			}), submitColor(f, RGBToHex(a.childConfig[d].bgColor, ""))) : "customContent" == a.childConfig[d].contentType ? (f.css({
				backgroundImage: "none"
			}), f.removeAttr("style").css({
				width: g.width,
				height: g.height,
				top: g.top,
				left: g.left
			}), f.html(a.childConfig[d].customContent).tResize(), $("#tThumb").children(D.thumbCls + "[attachID='" + e + "']").find("img").hide()) : "textContent" == a.childConfig[d].contentType && (h = require("scripts/allwzset"), $("#tThumb").children(D.thumbCls + "[attachID='" + e + "']").find("img").hide(), h.allSubmit(a.childConfig[d].qssetConfig, f, b, d + "")))
		},
		tDynamic: '<div class="t-app-child" data-dblType="jspb" data-attachType="jspbChild"></div>',
		tDynamicConfig: {
			attachID: "",
			contentType: "imgContent",
			pSrc: "https://img.alicdn.com/imgextra/i3/800803731/TB2ECL7nodnpuFjSZPhXXbChpXa_!!800803731.png",
			bgColor: "",
			imgBgp: "50% 50%",
			autoSize: "yes",
			href: "#",
			hrefMode: "_blank",
			customContent: "",
			overflowMode: "hidden",
			displayMode: "",
			css3Speed: "0.5s",
			css3Bezier: "",
			css3Mode: "",
			css3ModeX: "",
			css3ModeY: "",
			css3MoveMode: "",
			spicSrc: "",
			qssetConfig: ""
		},
		tContent: "",
		codeExport: function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
			if (a && !(a.length < 1) && a.attr("data-config")) return b = JSON.parse(a.attr("data-config")), c = a.width(), d = a.height(), e = D.tParseInt(a.css("top")), f = D.tParseInt(a.css("left")), g = b.childConfig, h = "", i = "", j = "", k = b.imgBgp || "50% 50%", l = b.css3Speed || "0s", m = "", n = "ease-in", o = "", "" != b.css3Bezier && ("bs1" == b.css3Bezier && (n = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == b.css3Bezier && (n = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == b.css3Bezier && (n = "cubic-bezier(0,0,1,0.1)"), "bq1" == b.css3Bezier && (n = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == b.css3Bezier && (n = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == b.css3Bezier && (n = "cubic-bezier(0,0,0.1,1)"), "bt1" == b.css3Bezier && (n = "cubic-bezier(1,2.2,0.5,0.8)"), "bt2" == b.css3Bezier && (n = "cubic-bezier(0.5,2.2,1,0.8)"), "bt3" == b.css3Bezier && (n = "cubic-bezier(1,0.2,0.5,-1.2)"), "bt4" == b.css3Bezier && (n = "cubic-bezier(0.5,0.2,1,-1.2)"), "bt5" == b.css3Bezier && (n = "cubic-bezier(1,1,0.5,0)"), "bt6" == b.css3Bezier && (n = "cubic-bezier(0.5,1,1,0)"), "bt7" == b.css3Bezier && (n = "cubic-bezier(0.5,1.5,0.5,-1.5)"), "bt8" == b.css3Bezier && (n = "cubic-bezier(0.5,2,0.5,-1)"), "bt9" == b.css3Bezier && (n = "cubic-bezier(0.5,3,0.5,0)"), "bt10" == b.css3Bezier && (n = "cubic-bezier(0.5,2.2,0.5,0.8)"), "bt11" == b.css3Bezier && (n = "cubic-bezier(0.5,0.2,0.5,-1.2)"), "bt12" == b.css3Bezier && (n = "cubic-bezier(0.5,1,0.5,0)")), m = "-webkit-transition: " + l + " " + n + ";" + "-moz-transition: " + l + " " + n + ";" + "-o-transition: " + l + " " + n + ";" + "transition: " + l + " " + n + ";", a.children(D.appChildCls + "[data-attachType='jspbChild']").each(function(b) {
				var k, e, f, i, j, l, m, n, p, q, r, s, t, u, v, w, x, y, z, A, B, C, E, F, G, H, I;
				g[b] && (e = $(this), f = "", i = "", j = "", l = "", m = g[b].imgBgp || "50% 50%", n = D.getChildPos(a, e, !0), p = g[b].css3Speed || "0s", q = "", r = "ease-in", s = "", t = "", u = "", v = !1, w = "", x = "", y = "top:" + n.top + "px;left:" + n.left + "px;", z = " abs", A = " " + g[b].css3ModeX + " " + g[b].css3ModeY, "" != g[b].css3Bezier && ("bs1" == g[b].css3Bezier && (r = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == g[b].css3Bezier && (r = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == g[b].css3Bezier && (r = "cubic-bezier(0,0,1,0.1)"), "bq1" == g[b].css3Bezier && (r = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == g[b].css3Bezier && (r = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == g[b].css3Bezier && (r = "cubic-bezier(0,0,0.1,1)"), "bt1" == g[b].css3Bezier && (r = "cubic-bezier(1,2.2,0.5,0.8)"), "bt2" == g[b].css3Bezier && (r = "cubic-bezier(0.5,2.2,1,0.8)"), "bt3" == g[b].css3Bezier && (r = "cubic-bezier(1,0.2,0.5,-1.2)"), "bt4" == g[b].css3Bezier && (r = "cubic-bezier(0.5,0.2,1,-1.2)"), "bt5" == g[b].css3Bezier && (r = "cubic-bezier(1,1,0.5,0)"), "bt6" == g[b].css3Bezier && (r = "cubic-bezier(0.5,1,1,0)"), "bt7" == g[b].css3Bezier && (r = "cubic-bezier(0.5,1.5,0.5,-1.5)"), "bt8" == g[b].css3Bezier && (r = "cubic-bezier(0.5,2,0.5,-1)"), "bt9" == g[b].css3Bezier && (r = "cubic-bezier(0.5,3,0.5,0)"), "bt10" == g[b].css3Bezier && (r = "cubic-bezier(0.5,2.2,0.5,0.8)"), "bt11" == g[b].css3Bezier && (r = "cubic-bezier(0.5,0.2,0.5,-1.2)"), "bt12" == g[b].css3Bezier && (r = "cubic-bezier(0.5,1,0.5,0)")), q = "-webkit-transition: " + p + " " + r + ";" + "-moz-transition: " + p + " " + r + ";" + "-o-transition: " + p + " " + r + ";" + "transition: " + p + " " + r + ";", ("effect_w" == g[b].css3Mode || "effect_h" == g[b].css3Mode || "effect_wh" == g[b].css3Mode || "effect_w1" == g[b].css3Mode) && ("" == o && (o = " u-e u-c u-d"), B = "", C = "width:" + n.width + "px;height:" + n.height + "px;", E = y, F = A, y = "top:0;left:0;", z = " rel", A = "  ", v = !0, "effect_w" == g[b].css3Mode ? B = "c-2" : "effect_h" == g[b].css3Mode ? B = "d-2" : "effect_wh" == g[b].css3Mode ? B = "c-2 d-2" : "effect_w1" == g[b].css3Mode && (B = "c-2 c-21", s = "float:right;"), g[b].css3Mode = "", w = '<div class="abs pspe e-2" style="' + C + E + 'z-index:10;">' + t + '<div class="' + B + " outbox" + F + '" data-x="' + g[b].css3ModeX + ";" + g[b].css3ModeY + '" style="' + q + s + '"><div class="rel" style="width:100%;height:100%;' + s + '">', x = "</div></div>" + u + "</div>"), ("june-box-fromtop" == g[b].css3ModeY || "june-box-frombottom" == g[b].css3ModeY) && (v || (w = w + '<div class="abs juneyd" style="width:' + d + 'px;height:0;">', x = "</div>" + x)), g[b] && g[b].spicSrc && (k = g[b].spicSrc), G = "", k && "" != k && "undefined" != k || (G = "display:none;"), g[b].bgColor = RGBToHex(g[b].bgColor, ""), "" != g[b].bgColor && (l = "background-color:" + g[b].bgColor + ";"), checkUrl(g[b].pSrc) && (f = "background:url(" + g[b].pSrc + ") " + m + " no-repeat;"), checkUrl(k) && (i = "background:url(" + k + ") " + m + " no-repeat;", j = 'src="' + k + '"'), "imgContent" == g[b].contentType ? h += w + '<a href="' + g[b].href + '" target="' + g[b].hrefMode + '" class="jspcb' + z + " imghover " + g[b].displayMode + " trans05s" + " " + g[b].css3Mode + A + " " + g[b].css3MoveMode + " " + g[b].attachID + '" data-appid="' + g[b].attachID + '" style="' + q + "overflow:hidden;" + f + l + "width:" + n.width + "px;height:" + n.height + "px;" + y + "z-index:10;" + s + '" data-jspbType="' + g[b].contentType + '"><img class="abs" style="width:' + n.width + "px;height:" + n.height + "px;" + i + G + '" ' + j + " /></a>" + x : "customContent" == g[b].contentType ? h += w + '<div class="jspcb' + z + " imghover " + g[b].displayMode + " trans05s" + " " + g[b].css3Mode + A + " " + g[b].css3MoveMode + " " + g[b].attachID + '" data-appid="' + g[b].attachID + '" style="' + q + "overflow:hidden;width:" + n.width + "px;height:" + n.height + "px;" + y + "z-index:10;" + s + '" data-jspbType="' + g[b].contentType + '">' + g[b].customContent + "</div>" + x : "textContent" == g[b].contentType && (H = require("scripts/allwzset"), I = !1, qssetConfig = JSON.parse(g[b].qssetConfig || "{}"), exportHtml = '"></div>', "" != g[b].qssetConfig && (qssetConfig.href = g[b].href, qssetConfig.hrefMode = g[b].hrefMode, "top:0;left:0;" == y && (I = !0), exportHtml = H.allExport(e, qssetConfig, "jspb", q, I)), h += w + '<div data-appid="' + g[b].attachID + '" data-jspbType="' + g[b].contentType + '" class="jspcb' + z + " imghover " + g[b].displayMode + " trans05s" + " " + g[b].css3Mode + A + " " + g[b].css3MoveMode + " " + g[b].attachID + exportHtml + x))
			}), b.bgColor = RGBToHex(b.bgColor, ""), "" != b.bgColor && (j = "background-color:" + b.bgColor + ";"), checkUrl(b.pSrc) && (i = "background:url(" + b.pSrc + ") " + k + " no-repeat;"), !b.overflowMode && "hidden" == b.overflowMode, p = "", q = "overflow:hidden;", "visibleX" == b.overflowMode ? (p = " u-a", q = "") : "visible" == b.overflowMode && (p = " j-zdv", q = "overflow:visible;"), '<div class="jspb abs imghover ' + b.displayMode + " trans05s" + " " + b.css3Mode + " " + b.css3MoveMode + " " + b.appID + p + o + '" data-appid="' + b.appID + '" style="' + m + q + i + j + "width:" + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + 'px;z-index:10;">' + h + '<a class="abs" href="' + b.href + '" target="' + b.hrefMode + '" style="width:' + c + "px;height:" + d + 'px;display:block;top:0px;left:0px;"></a></div>'
		},
		codeImport: function(a, b, c, d) {
			var j, k, l, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = 0,
				h = c.attr("class").replace("jspb abs imghover ", ""),
				i = {};
			i.childConfig = [], i.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), i.pSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.bgColor = RGBToHex(c.css("background-color"), ""), i.imgBgp = c.css("background-position") || "50% 50%", i.href = c.children("a:last").attr("href") || "", i.hrefMode = c.children("a:last").attr("target"), i.displayMode = h.split(" ")[0], i.css3Speed = h.split(" ")[1], i.css3Mode = h.split(" ")[2], i.css3MoveMode = h.split(" ")[3], i.overflowMode = c.css("overflow"), "visible" != i.overflowMode && (i.overflowMode = "hidden"), c.hasClass("u-a") && (i.overflowMode = "visibleX"), c.hasClass("j-zdv") && (i.overflowMode = "visible"), h.replace(/  /g, "") == h && (h.indexOf("june-fadein") < 0 && h.indexOf("june-fadeout") < 0 && " " != h.charAt(0) && (h = " " + h, i.displayMode = h.split(" ")[0], i.css3Speed = h.split(" ")[1], i.css3Mode = h.split(" ")[2], i.css3MoveMode = h.split(" ")[3]), h.indexOf("june-rx") < 0 && h.indexOf("june-lx") < 0 && h.indexOf("june-uy") < 0 && h.indexOf("june-dy") < 0 && h.indexOf("june-r360") < 0 && h.indexOf("june-r720") < 0 && (i.css3Mode = "", g++, i.css3MoveMode = h.split(" ")[3 - g]), h.indexOf("june-move") < 0 && (i.css3MoveMode = "")), i.css3Speed = c.css("transitionDuration") && "undefined" != c.css("transitionDuration") && "" != c.css("transitionDuration") ? 10 * parseFloat(c.css("transitionDuration").substr(0, c.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == i.css3Speed ? "0.5s" : parseFloat(i.css3Speed.replace("trans", "").replace("s", ""), 10) + "s", c.css("transitionTimingFunction") && "undefined" != c.css("transitionTimingFunction") && "" != c.css("transitionTimingFunction") ? (j = c.css("transitionTimingFunction"), i.css3Bezier = "", "cubic-bezier(0, 0, 0.7, 0.1)" == j && (i.css3Bezier = "bs1"), "cubic-bezier(0, 0, 0.85, 0.1)" == j && (i.css3Bezier = "bs2"), "cubic-bezier(0, 0, 1, 0.1)" == j && (i.css3Bezier = "bs3"), "cubic-bezier(0, 0, 0.1, 0.4)" == j && (i.css3Bezier = "bq1"), "cubic-bezier(0, 0, 0.1, 0.7)" == j && (i.css3Bezier = "bq2"), "cubic-bezier(0, 0, 0.1, 1)" == j && (i.css3Bezier = "bq3"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == j && (i.css3Bezier = "bt1"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == j && (i.css3Bezier = "bt2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == j && (i.css3Bezier = "bt3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == j && (i.css3Bezier = "bt4"), "cubic-bezier(1, 1, 0.5, 0)" == j && (i.css3Bezier = "bt5"), "cubic-bezier(0.5, 1, 1, 0)" == j && (i.css3Bezier = "bt6"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == j && (i.css3Bezier = "bt7"), "cubic-bezier(0.5, 2, 0.5, -1)" == j && (i.css3Bezier = "bt8"), "cubic-bezier(0.5, 3, 0.5, 0)" == j && (i.css3Bezier = "bt9"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == j && (i.css3Bezier = "bt10"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == j && (i.css3Bezier = "bt11"), "cubic-bezier(0.5, 1, 0.5, 0)" == j && (i.css3Bezier = "bt12")) : i.css3Bezier = "", a.attr("appID", i.appID), k = require("scripts/allwzset"), c.children(".jspcb, .pspe, .juneyd").each(function(b) {
				var m, f, g, h, j, l, n, o, p, q, r, s, t, e = $(this);
				e.hasClass("juneyd") && (e = e.children()), f = D.getChildPos(c, e, !0), g = 0, h = "", j = "", l = e.attr("class").replace("jspcb abs imghover ", ""), e.hasClass("pspe") && (e.children().hasClass("juneyd") && (e = e.children()), n = e.children(".outbox"), m = n.attr("data-x") || ";", m = m.split(";"), n.hasClass("c-2") ? (m[2] = "effect_w", n.hasClass("c-21") && (m[2] = "effect_w1")) : n.hasClass("d-2") ? m[2] = "effect_h" : n.hasClass("c-2") && n.hasClass("d-2") && (m[2] = "effect_wh"), e = n.children(".rel").children(".jspcb"), n.children(".rel").children(".juneyd").length > 0 && (e = n.children(".rel").children(".juneyd").children(".jspcb")), l = e.attr("class").replace("jspcb rel imghover ", "")), i.childConfig.push($.extend(!0, {}, D.appConfig["jspb"][1].tDynamicConfig)), i.childConfig[b].pSrc = e.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[b].bgColor = RGBToHex(e.css("background-color"), ""), i.childConfig[b].imgBgp = e.css("background-position") || "50% 50%", i.childConfig[b].spicSrc = e.find("img").attr("src") || "", i.childConfig[b].href = e.attr("href") || e.children("a").attr("href") || "", i.childConfig[b].hrefMode = e.attr("target") || e.children("a").attr("target") || "_blank", i.childConfig[b].displayMode = l.split(" ")[0], i.childConfig[b].contentType = "imgContent", i.childConfig[b].customContent = "", i.childConfig[b].autoSize = "no", o = e.attr("data-jspbType"), o ? (i.childConfig[b].contentType = o, "textContent" == o ? h = "display:none;" : "customContent" == o && (i.childConfig[b].customContent = e.html(), h = "display:none;")) : e.children("img").length < 1 && (i.childConfig[b].contentType = "customContent", i.childConfig[b].customContent = e.html(), h = "display:none;"), i.childConfig[b].css3Speed = l.split(" ")[1], i.childConfig[b].css3Mode = l.split(" ")[2], i.childConfig[b].css3ModeX = l.split(" ")[3], i.childConfig[b].css3ModeY = l.split(" ")[4], i.childConfig[b].css3MoveMode = l.split(" ")[5], l.replace(/  /g, "") == l && (l.indexOf("june-box-fadein") < 0 && l.indexOf("june-box-fadeout") < 0 && " " != l.charAt(0) && (l = " " + l, i.childConfig[b].displayMode = l.split(" ")[0], i.childConfig[b].css3Speed = l.split(" ")[1], i.childConfig[b].css3Mode = l.split(" ")[2], i.childConfig[b].css3ModeX = l.split(" ")[3], i.childConfig[b].css3ModeY = l.split(" ")[4], i.childConfig[b].css3MoveMode = l.split(" ")[5]), l.indexOf("june-box-fx") < 0 && l.indexOf("june-box-fy") < 0 && l.indexOf("june-box-sf") < 0 && l.indexOf("june-box-fx") < 0 && l.indexOf("june-box-fy") < 0 && l.indexOf("june-box-r1") < 0 && l.indexOf("june-box-r2") < 0 && l.indexOf("june-box-r3") < 0 && l.indexOf("june-box-r7") < 0 && l.indexOf("june-box-fr1") < 0 && l.indexOf("june-box-fr2") < 0 && l.indexOf("june-box-fr3") < 0 && l.indexOf("june-box-fr7") < 0 && (i.childConfig[b].css3Mode = "", g++, i.childConfig[b].css3ModeX = l.split(" ")[3 - g], i.childConfig[b].css3ModeY = l.split(" ")[4 - g], i.childConfig[b].css3MoveMode = l.split(" ")[5 - g]), l.indexOf("june-box-fromleft") < 0 && l.indexOf("june-box-fromright") < 0 && l.indexOf("june-box-lx") < 0 && l.indexOf("june-box-rx") < 0 && (i.childConfig[b].css3ModeX = "", g++, i.childConfig[b].css3ModeY = l.split(" ")[4 - g], i.childConfig[b].css3MoveMode = l.split(" ")[5 - g]), l.indexOf("june-box-fromtop") < 0 && l.indexOf("june-box-frombottom") < 0 && l.indexOf("june-box-uy") < 0 && l.indexOf("june-box-dy") < 0 && (i.childConfig[b].css3ModeY = "", g++, i.childConfig[b].css3MoveMode = l.split(" ")[5 - g]), l.indexOf("june-move") < 0 && (i.childConfig[b].css3MoveMode = "")), D.setAttachID(i.childConfig[b]), i.childConfig[b].css3Speed = e.css("transitionDuration") && "undefined" != e.css("transitionDuration") && "" != e.css("transitionDuration") ? 10 * parseFloat(e.css("transitionDuration").substr(0, e.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == i.childConfig[b].css3Speed ? "0.5s" : parseFloat(i.childConfig[b].css3Speed.replace("trans", "").replace("s", ""), 10) + "s", e.css("transitionTimingFunction") && "undefined" != e.css("transitionTimingFunction") && "" != e.css("transitionTimingFunction") ? (p = e.css("transitionTimingFunction"), i.childConfig[b].css3Bezier = "", "cubic-bezier(0, 0, 0.7, 0.1)" == p && (i.childConfig[b].css3Bezier = "bs1"), "cubic-bezier(0, 0, 0.85, 0.1)" == p && (i.childConfig[b].css3Bezier = "bs2"), "cubic-bezier(0, 0, 1, 0.1)" == p && (i.childConfig[b].css3Bezier = "bs3"), "cubic-bezier(0, 0, 0.1, 0.4)" == p && (i.childConfig[b].css3Bezier = "bq1"), "cubic-bezier(0, 0, 0.1, 0.7)" == p && (i.childConfig[b].css3Bezier = "bq2"), "cubic-bezier(0, 0, 0.1, 1)" == p && (i.childConfig[b].css3Bezier = "bq3"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == p && (i.childConfig[b].css3Bezier = "bt1"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == p && (i.childConfig[b].css3Bezier = "bt2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == p && (i.childConfig[b].css3Bezier = "bt3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == p && (i.childConfig[b].css3Bezier = "bt4"), "cubic-bezier(1, 1, 0.5, 0)" == p && (i.childConfig[b].css3Bezier = "bt5"), "cubic-bezier(0.5, 1, 1, 0)" == p && (i.childConfig[b].css3Bezier = "bt6"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == p && (i.childConfig[b].css3Bezier = "bt7"), "cubic-bezier(0.5, 2, 0.5, -1)" == p && (i.childConfig[b].css3Bezier = "bt8"), "cubic-bezier(0.5, 3, 0.5, 0)" == p && (i.childConfig[b].css3Bezier = "bt9"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == p && (i.childConfig[b].css3Bezier = "bt10"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == p && (i.childConfig[b].css3Bezier = "bt11"), "cubic-bezier(0.5, 1, 0.5, 0)" == p && (i.childConfig[b].css3Bezier = "bt12")) : i.childConfig[b].css3Bezier = "", m && (i.childConfig[b].css3ModeX = m[0], i.childConfig[b].css3ModeY = m[1], i.childConfig[b].css3Mode = m[2]), "imgContent" == i.childConfig[b].contentType ? (q = "", r = "", i.childConfig[b].bgColor = RGBToHex(i.childConfig[b].bgColor, ""), "" != i.childConfig[b].bgColor && (r = "background-color:" + i.childConfig[b].bgColor + ";"), checkUrl(i.childConfig[b].pSrc) && (q = "background-image:url(" + i.childConfig[b].pSrc + ");"), $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="' + r + q + "left:" + f.left + "px;top:" + f.top + "px;width:" + f.width + "px;height:" + f.height + 'px;"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[b].attachID).css({
					backgroundPosition: i.childConfig[b].imgBgp || "50% 50%"
				})) : "customContent" == i.childConfig[b].contentType ? $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + f.left + "px;top:" + f.top + "px;width:" + f.width + "px;height:" + f.height + 'px;">' + i.childConfig[b].customContent + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[b].attachID) : "textContent" == i.childConfig[b].contentType && (s = $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + f.left + "px;top:" + f.top + "px;width:" + f.width + "px;height:" + f.height + "px;line-height:" + f.height + 'px;"></div>').appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[b].attachID), i.childConfig[b].qssetConfig = k.allImport(s, i.appID, e), s.hasClass("j-app-qswz") || s.addClass("j-app-qswz")), checkUrl(i.childConfig[b].pSrc) && (j = 'src="' + i.childConfig[b].pSrc + '"'), $('<li class="t-thumb" data-target="thumb-selected" appID="' + i.appID + '" attachID="' + i.childConfig[b].attachID + '"><span class="t-layer-eye diseye" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img ' + j + ' style="' + h + '" /></span><span class="t-thumb-text"></span></li>').prependTo($("#tThumb")), $("#tThumb").children(D.thumbSelected).removeClass(D.thumbSelectedVal), $("#tParentThumb").removeClass(D.thumbSelectedVal), $("#tThumb").children(D.thumbCls + "[attachID='" + i.childConfig[b].attachID + "']").addClass(D.thumbSelectedVal).addClass(".t-app-jspcb"), D.createAppName("jspbChild", i.appID, i.childConfig[b].attachID), t = a.children(D.appChildCls + "[attachID='" + i.childConfig[b].attachID + "']"), $("#tThumb").children(D.thumbCls + "[attachID='" + i.childConfig[b].attachID + "']").children(".t-thumb-text").html(t.attr("data-appName").replace(/特效/g, ""))
			}), l = $.extend(!0, e, i), a.attr("data-config", JSON.stringify(l)), checkUrl(i.pSrc) ? (a.css({
				backgroundImage: "url(" + i.pSrc + ")"
			}), $("#tParentThumb").find("img").show()) : (a.css({
				backgroundImage: "none"
			}), $("#tParentThumb").find("img").hide()), a.css({
				backgroundPosition: i.imgBgp
			}), submitColor(a, RGBToHex(i.bgColor, "")), d(f, i.appID)
		}
	}, {
		appID: "",
		pSrc: "https://img.alicdn.com/imgextra/i1/800803731/TB2OgAnnbxmpuFjSZJiXXXauVXa_!!800803731.jpg",
		bgColor: "",
		imgBgp: "50% 50%",
		autoSize: "yes",
		href: "#",
		hrefMode: "_blank",
		displayMode: "",
		css3Speed: "0.5s",
		css3Bezier: "",
		css3Mode: "",
		css3MoveMode: "",
		childConfig: []
	}],
	jwb: ['<div class="t-app" data-dblType="jwb"></div>',
	{
		tTitle: "咚咚设置",
		tUrl: "dong",
		tSubmit: function(a, b) {
			var c = b.children(D.appOtherCls),
				d = b.children(".t-wang-text");
			d.css({
				color: a.nickNameColor
			}).html(a.wangNickName), b.css({
				width: c.width() + d.width()
			}), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<span class="t-app-other t-wang-small"></span><span class="t-wang-text">璇子</span>',
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1;
			return "" == b.wangID && (b.wangID = "junezx"), b.wangID = encodeURI(b.wangID), b.wangID = b.wangID.replace(":", "%3A"), b.wangID = b.wangID.replace("%20", ""), b.nickNameColor = RGBToHex(b.nickNameColor, ""), "" != b.nickNameColor && (g = "color:" + b.nickNameColor + ";"), wangImg = '<a target="_blank" href="http://chat5.jd.com/index.action?shopId=' + b.wangID + '&code=1" alt="点击这里给我发消息" title="点击这里给我发消息" style="' + g + '"><img src="http://img11.360buyimg.com/cms/jfs/t178/256/1813232753/1764/65e61eb7/53bb963cN9e35752b.gif" />' + b.wangNickName + "</a>", b.zIndex && (h = b.zIndex), '<div class="jwb abs" style="overflow:hidden;text-align:center;width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;" + g + "z-index:" + h + ';">' + wangImg + "</div>"
		},
		codeImport: function(a, b, c, d) {
			var i, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				h = c.children("a").attr("href");
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.wangID = h.split("=")[1], g.wangID = g.wangID.split("&")[0], g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID), g.wangNickName = c.children("a").html().replace(/<[^>]+>/g, ""), g.nickNameColor = RGBToHex(c.children("a").css("color")), "#" != g.nickNameColor.charAt(0) && (g.nickNameColor = RGBToHex(g.nickNameColor)), i = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(i)), a.children(".t-wang-text").css({
				color: g.nickNameColor
			}).html(g.wangNickName), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		wangID: "",
		wangNickName: "璇子",
		nickNameColor: "#000000"
	}],
	jsb: ['<div class="t-app" data-dblType="jsb"></div>',
	{
		tTitle: "店内搜索设置",
		tUrl: "search",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax"),
				d = b.children(D.appChildCls + "[data-attachtype='jsbInput']"),
				e = b.children(D.appChildCls + "[data-attachtype='jsbBtn']"),
				f = b.children(D.appChildCls + "[data-attachtype='jsbPricePanel']"),
				g = b.children(D.appChildCls + "[data-attachtype='jsbPriceLow']"),
				h = b.children(D.appChildCls + "[data-attachtype='jsbPriceHigh']");
			checkUrl(a.childConfig[0].searchSrc) ? (b.css({
				backgroundImage: "url(" + a.childConfig[0].searchSrc + ")"
			}), "yes" == a.childConfig[0].autoSize && c.ajaxJson("gis", {
				img: a.childConfig[0].searchSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), checkUrl(a.childConfig[1].searchSrc) ? (e.css({
				backgroundImage: "url(" + a.childConfig[1].searchSrc + ")"
			}), "yes" == a.childConfig[1].autoSize && c.ajaxJson("gis", {
				img: a.childConfig[1].searchSrc
			}, function(a) {
				var b = a[0],
					c = a[1];
				b && e.width(b), c && e.height(c)
			})) : e.css({
				backgroundImage: "none"
			}), d.html(a.childConfig[0].searchText).css({
				width: "100%",
				height: "100%",
				fontSize: D.tParseInt(a.childConfig[0].characterSize),
				fontWeight: a.childConfig[0].characterWeight,
				fontFamily: a.childConfig[0].characterFont,
				color: a.childConfig[0].characterColor,
				lineHeight: b.height() + "px"
			}), "yes" == a.priceSwitch ? (checkUrl(a.childConfig[2].searchSrc) ? (f.css({
				backgroundImage: "url(" + a.childConfig[2].searchSrc + ")"
			}), "yes" == a.childConfig[2].autoSize && c.ajaxJson("gis", {
				img: a.childConfig[2].searchSrc
			}, function(a) {
				var b = a[0],
					c = a[1];
				b && f.width(b), c && f.height(c)
			})) : f.css({
				backgroundImage: "none"
			}), checkUrl(a.childConfig[3].searchSrc) ? (g.css({
				backgroundImage: "url(" + a.childConfig[3].searchSrc + ")"
			}), h.css({
				backgroundImage: "url(" + a.childConfig[3].searchSrc + ")"
			})) : (g.css({
				backgroundImage: "none"
			}), h.css({
				backgroundImage: "none"
			})), f.show(), g.css({
				fontSize: D.tParseInt(a.childConfig[3].characterSize),
				fontFamily: a.childConfig[3].characterFont,
				color: a.childConfig[3].characterColor,
				lineHeight: g.height() + "px"
			}).show(), h.css({
				fontSize: D.tParseInt(a.childConfig[3].characterSize),
				fontFamily: a.childConfig[3].characterFont,
				color: a.childConfig[3].characterColor,
				lineHeight: h.height() + "px"
			}).show()) : (f.hide(), g.hide(), h.hide()), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<div class="t-app-child" data-dblType="jsb" data-attachType="jsbInput"></div><div class="t-app-mongolia" style="z-index:99;"></div><div class="t-app-child" data-dblType="jsb" data-attachType="jsbBtn"></div><div class="t-app-child" data-dblType="jsb" data-attachType="jsbPricePanel"></div><div class="t-app-child june-nonsp" data-dblType="jsb" data-attachType="jsbPriceLow"></div><div class="t-app-child june-nonsp" data-dblType="jsb" data-attachType="jsbPriceHigh"></div>',
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = b.childConfig,
				h = (new Date).valueOf().toString().substr(7, 6),
				i = D.setChildPos(a, a.children(D.appChildCls + "[data-attachtype='jsbBtn']"), !0),
				j = D.setChildPos(a, a.children(D.appChildCls + "[data-attachtype='jsbPricePanel']"), !0),
				k = D.setChildPos(a, a.children(D.appChildCls + "[data-attachtype='jsbPriceLow']"), !0),
				l = D.setChildPos(a, a.children(D.appChildCls + "[data-attachtype='jsbPriceHigh']"), !0),
				m = g[0].searchText,
				n = "",
				o = "",
				p = "",
				q = "",
				r = "",
				s = "",
				t = "",
				u = "",
				v = "",
				w = "",
				x = "",
				y = "",
				z = "false",
				A = 1;
			return b.zIndex && (A = b.zIndex), checkUrl(g[0].searchSrc) && (o = "background:url(" + g[0].searchSrc + ") center center no-repeat;"), checkUrl(g[1].searchSrc) && (p = "background:url(" + g[1].searchSrc + ") center center no-repeat;"), "yes" == b.priceSwitch && (z = "true", g[3].characterColor = RGBToHex(g[3].characterColor, ""), "" != g[3].characterColor && (w = "color:" + g[3].characterColor + ";"), "" != g[3].characterFont && (x = "font-family:" + g[3].characterFont + ";"), "" != g[3].characterSize && (y = "font-size:" + D.tParseInt(g[3].characterSize) + "px;"), checkUrl(g[2].searchSrc) && (q = "background:url(" + g[2].searchSrc + ") center center no-repeat;"), checkUrl(g[3].searchSrc) && (r = "background:url(" + g[3].searchSrc + ") center center no-repeat;"), n = '<div class="jPriceArea abs textprice" style="top:' + j.top + "px;left:" + j.left + "px;width:" + j.width + "px;height:" + j.height + "px;" + q + '"><input  type="text" value="" class="inputSmall abs lowprice" style="border:none;outline:none;padding:0;top:' + (k.top - j.top) + "px;left:" + (k.left - j.left) + "px;width:" + k.width + "px;height:" + k.height + "px;line-height:" + k.height + "px;" + r + "border:none;" + w + x + y + '" /><input  type="text" value="" class="inputSmall abs highprice" style="border:none;padding:0;top:' + (l.top - j.top) + "px;left:" + (l.left - j.left) + "px;width:" + l.width + "px;height:" + l.height + "px;line-height:" + l.height + "px;" + r + "border:none;outline:none;" + w + x + y + '" /></div>'), g[0].characterColor = RGBToHex(g[0].characterColor, ""), "" != g[0].characterColor && (s = "color:" + g[0].characterColor + ";"), "" != g[0].characterFont && (t = "font-family:" + g[0].characterFont + ";"), "" != g[0].characterWeight && (u = "font-weight:" + g[0].characterWeight + ";"), "" != g[0].characterSize && (v = "font-size:" + D.tParseInt(g[0].characterSize) + "px;"), "" == p && (p = "background:none;"), "<div class=\"searchArea j-module jsb searchform abs\" module-function=\"shopSearch\" module-param=\"{'prefixUrl':'http://mall.jd.com','defKeyword':'','keyword':'','isShowPriceSift':'" + z + "','appId':'','venderId':'','shopId':'" + b.searchID + "','categoryId':'0','cmsModId':'" + h + '\'}" style="top:' + e + "px;left:" + f + "px;width:" + c + "px;height:" + d + "px;z-index:1;" + o + '"><div class="jSearchArea abs" style="top:0;left:0;"><div class="jSearchInput"><input type="text" value="' + m + '" d="' + m + '" class="inputMiddle gjz abs" style="border:none;outline:none;padding:0;top:0px;left:0px;width:' + c + "px;height:" + d + "px;" + o + '">' + n + '<button type="button" d="' + h + '" class="ss abs" value="" style="top:' + i.top + "px;left:" + i.left + "px;width:" + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;" + p + 'color:#FFF;border:none;outline:none;cursor:pointer;"><s></s></button> </div></div></div>'
		},
		codeImport: function(a, b, c, d) {
			var x, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = a.children(D.appChildCls + "[data-attachtype='jsbInput']"),
				h = a.children(D.appChildCls + "[data-attachtype='jsbBtn']"),
				i = a.children(D.appChildCls + "[data-attachtype='jsbPricePanel']"),
				j = a.children(D.appChildCls + "[data-attachtype='jsbPriceLow']"),
				k = a.children(D.appChildCls + "[data-attachtype='jsbPriceHigh']"),
				l = c.find("input.gjz").length > 0 ? c.find("input.gjz") : g,
				m = c.find("button.ss").length > 0 ? c.find("button.ss") : h,
				n = c.find("div.textprice").length > 0 ? c.find("div.textprice") : i,
				o = c.find("input.lowprice").length > 0 ? c.find("input.lowprice") : j,
				p = c.find("input.highprice").length > 0 ? c.find("input.highprice") : k,
				q = D.setChildPos(a, l, !1),
				r = D.setChildPos(a, m, !0),
				s = D.setChildPos(a, n, !0),
				t = D.setChildPos(a, o, !0),
				u = D.setChildPos(a, p, !0),
				v = {};
			c.find("div.textprice").length > 0 && (v.priceSwitch = "yes", i.show(), j.show(), k.show()), v.childConfig = [], v.childConfig[0] = {}, v.childConfig[1] = {}, v.childConfig[2] = {}, v.childConfig[3] = {}, v.childConfig[4] = {}, c.attr("data-appid") ? v.appID = c.attr("data-appid") : D.setAppID(v);
			try {
				dataParam = JSON.parse(c.attr("module-param").replace(/\'/g, '"')), dataParam.shopId && (v.searchID = dataParam.shopId)
			} catch (w) {}
			v.childConfig[0].searchSrc = l.css("background-image").replace(/^url|[\(\)]/g, ""), v.childConfig[0].characterSize = l.css("font-size").replace(/px/g, ""), v.childConfig[0].characterFont = l.css("font-family").replace(/'/g, ""), v.childConfig[0].characterColor = RGBToHex(l.css("color")), v.childConfig[0].characterWeight = l.css("font-weight"), v.childConfig[0].searchText = l.val() || "", v.childConfig[1].searchSrc = m.css("background-image").replace(/^url|[\(\)]/g, ""), v.childConfig[2].searchSrc = n.css("background-image").replace(/^url|[\(\)]/g, ""), v.childConfig[3].searchSrc = o.css("background-image").replace(/^url|[\(\)]/g, ""), v.childConfig[3].characterSize = o.css("font-size").replace(/px/g, ""), v.childConfig[3].characterFont = o.css("font-family").replace(/'/g, ""), v.childConfig[3].characterColor = RGBToHex(o.css("color")), x = $.extend(!0, e, v), a.attr("data-config", JSON.stringify(x)), checkUrl(v.childConfig[0].searchSrc) && (a.css({
				backgroundImage: "url(" + v.childConfig[0].searchSrc + ")"
			}), g.css({
				backgroundImage: "url(" + v.childConfig[0].searchSrc + ")"
			})), checkUrl(v.childConfig[1].searchSrc) && h.css({
				backgroundImage: "url(" + v.childConfig[1].searchSrc + ")"
			}), checkUrl(v.childConfig[2].searchSrc) && i.css({
				backgroundImage: "url(" + v.childConfig[2].searchSrc + ")"
			}), checkUrl(v.childConfig[3].searchSrc) && (j.css({
				backgroundImage: "url(" + v.childConfig[3].searchSrc + ")"
			}), k.css({
				backgroundImage: "url(" + v.childConfig[3].searchSrc + ")"
			})), a.css({
				width: q.width,
				height: q.height,
				top: q.top,
				left: q.left
			}), g.css({
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				fontSize: D.tParseInt(v.childConfig[0].characterSize),
				fontWeight: v.childConfig[0].characterWeight,
				fontFamily: v.childConfig[0].characterFont,
				color: v.childConfig[0].characterColor
			}).html(v.childConfig[0].searchText), h.css({
				width: r.width,
				height: r.height,
				top: r.top,
				left: r.left
			}), i.css({
				width: s.width,
				height: s.height,
				top: s.top,
				left: s.left
			}), j.css({
				width: t.width,
				height: t.height,
				top: t.top + s.top,
				left: t.left + s.left,
				fontSize: D.tParseInt(v.childConfig[3].characterSize),
				fontFamily: v.childConfig[3].characterFont,
				color: v.childConfig[3].characterColor
			}), k.css({
				width: u.width,
				height: u.height,
				top: u.top + s.top,
				left: u.left + s.left,
				fontSize: D.tParseInt(v.childConfig[3].characterSize),
				fontFamily: v.childConfig[3].characterFont,
				color: v.childConfig[3].characterColor
			}), a.attr("appID", v.appID), d(f, v.appID)
		}
	}, {
		appID: "",
		searchID: "",
		priceSwitch: "no",
		childConfig: [{
			attachID: "",
			searchSrc: "http://img10.360buyimg.com/imgzone/jfs/t475/249/32797703/254/6ff3b386/5448ac59N5b0c6d25.png",
			autoSize: "yes",
			searchText: "",
			characterWeight: "normal",
			characterSize: "12",
			characterFont: "宋体",
			characterColor: "#000000"
		}, {
			attachID: "",
			searchSrc: "http://img10.360buyimg.com/imgzone/jfs/t670/205/30667202/915/31ccdd7d/5448ac58N0b07a216.png",
			autoSize: "yes"
		}, {
			attachID: "",
			searchSrc: "http://img10.360buyimg.com/imgzone/jfs/t631/333/107667257/469/38a7e830/544ef81aNe4425c74.png",
			autoSize: "yes"
		}, {
			attachID: "",
			searchSrc: "http://img10.360buyimg.com/imgzone/jfs/t475/249/32797703/254/6ff3b386/5448ac59N5b0c6d25.png",
			autoSize: "yes",
			characterSize: "12",
			characterFont: "宋体",
			characterColor: "#000000"
		}, {
			attachID: ""
		}]
	}],
	job: ['<div class="t-app" data-dblType="job"></div>',
	{
		tTitle: "正反面设置",
		tUrl: "oppo",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), b.attr("data-config", JSON.stringify(a))
		},
		codeExport: function(a) {
			var o, p, q, r, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = "",
				i = "",
				j = 1,
				k = "",
				l = "",
				m = "",
				n = "ptlink";
			return "gzlink" == b.oppoLinkMode ? ("" != b.attentionID && (l = "btn-coll"), m = 'id="coll' + b.attentionID + '"', n = "gzlink") : "wwlink" == b.oppoLinkMode ? ("" == b.wangID && (b.wangID = "junezx"), b.wangID = encodeURI(b.wangID), b.wangID = b.wangID.replace(":", "%3A"), b.wangID = b.wangID.replace("%20", ""), b.href = "http://chat5.jd.com/index.action?shopId=" + b.wangID + "&code=1", n = "wwlink") : "mdlink" == b.oppoLinkMode && (b.href = "#" + b.anchorSelect, b.hrefMode = "_self", n = "mdlink"), b.zIndex && (j = b.zIndex), ("" == b.oppoSrc || b.oppoSrc == b.pSrc) && (k = "display:none;"), o = "", p = "", q = "", r = "", "june-box-fadein" == b.oppoEffect && (q = "display:block;", o = '<span class="jspb" style="display:block;width:' + c + "px;height:" + d + 'px;">', p = "</span>", b.oppoEffect = "", r = "june-box-fadein"), checkUrl(b.pSrc) ? g = "background:url(" + b.pSrc + ") center center no-repeat;" : "gzlink" == b.oppoLinkMode && (g = "background:url(http://a.tbcdn.cn/s.gif) center center no-repeat;"), checkUrl(b.oppoSrc) && (h = "background:url(" + b.oppoSrc + ") center center  no-repeat;", i = 'src="' + b.oppoSrc + '"'), '<a href="' + b.href + '" class="job abs imghover ' + b.oppoEffect + " " + b.oppoSpeed + " " + b.appID + " " + l + '" data-linkmode="' + n + '" data-appid="' + b.appID + '" ' + m + ' style="overflow:hidden;' + g + "width:" + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:" + j + ';" target="' + b.hrefMode + '">' + o + '<img class="' + b.oppoSpeed + " " + r + '" style="' + q + "width:" + c + "px;height:" + d + "px;" + k + '" ' + i + " />" + p + "</a>"
			//删除img中background(h)
		},
		codeImport: function(a, b, c, d) {
		var j, k, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				h = c.attr("class").split(" "),
				i = h[3];
			g.oppoSpeed = h[4], g.appID = c.attr("data-appid"), g.pSrc =c.css("background-image").slice(5,c.css("background-image").indexOf(")",0)-1), g.href = c.attr("href") || "", g.hrefMode = c.attr("target"), g.oppoLinkMode = c.attr("data-linkmode"), g.attentionID = "", g.wangID = "", g.shuntMode = "no", g.anchorSelect = "", g.oppoSrc = "", j = g.href.split("?"), c.children().hasClass("jspb") ? (g.oppoSrc = c.children().children("img").attr("src"), i = "june-box-fadein") : g.oppoSrc = c.children("img").attr("src"), g.oppoSrc && "" != g.oppoSrc || (e.oppoSrc = ""), g.oppoEffect = i, c.hasClass("btn-coll") && (g.oppoLinkMode = "gzlink", g.attentionID = c.attr("data-brandid") || ""), new RegExp("chat5.jd.com/index.action").test(j[0]) && (e.href = "http://chat5.jd.com/index.action?shopId=" + e.wangID + "&code=1", wangArr1 = j[1].split("&"), g.linkMode = "wwlink", g.wangID = wangArr1[0].replace("shopId=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID)), "mdlink" == g.oppoLinkMode && (g.anchorSelect = g.href.replace("#", ""), g.href = ""), k = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(k)), checkUrl(g.pSrc) && a.css({
				backgroundImage: "url(" + g.pSrc + ")"
				//修改pSrc的获取方式
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		pSrc: "https://img.alicdn.com/imgextra/i4/800803731/TB2VOQfnhhmpuFjSZFyXXcLdFXa_!!800803731.jpg",
		autoSize: "yes",
		oppoSrc: "https://img.alicdn.com/imgextra/i1/800803731/TB2bW3bnd0opuFjSZFxXXaDNVXa_!!800803731.jpg",
		href: "#",
		hrefMode: "_blank",
		attentionID: "",
		wangID: "",
		oppoEffect: "none",
		oppoSpeed: "trans05s",
		oppoLinkMode: "ptlink",
		anchorSelect: "",
		popupConfig: {
			pSwitch: "no",
			popupPosition: "'tr','tl'",
			spaceX: "0",
			spaceY: "0",
			popupHtml: ""
		}
	}],
	jcb: ['<div class="t-app" data-dblType="jcb"></div>',
	{
		tTitle: "文字设置",
		tUrl: "character",
		tSubmit: function(a, b) {
			D.setPopupContent(a), b.attr("data-config", JSON.stringify(a)).html(a.characterContent).css({
				backgroundColor: RGBToHex(a.characterBgColor, ""),
				textAlign: a.characterAlign,
				fontSize: D.tParseInt(a.characterSize),
				lineHeight: b.height() + "px",
				fontWeight: a.characterWeight,
				fontFamily: a.characterFont,
				color: a.characterColor
			}).tResize()
		},
		tContent: "请双击设置文字内容",
		codeExport: function(a) {
			var z, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = "",
				i = "",
				j = "",
				k = "",
				l = "",
				m = "",
				n = "",
				o = "text-decoration: none;",
				p = "",
				q = "",
				r = "",
				s = "",
				t = "",
				u = "",
				v = "",
				w = "",
				x = "",
				y = 1;
			return b.zIndex && (y = b.zIndex), b.characterDash && "on" == b.characterDash && (o = "text-decoration: line-through;"), a.hasClass("t-app-jsfb") && (i = "jsfbchild "), "on" == b.characterHoverMode && (p = "jspb ", r = " " + b.characterHoverSpeed + " june-box-fadein", s = " " + b.characterHoverSpeed + " june-box-fadeout", z = 0, b.characterUnderLine && "on" == b.characterUnderLine && (z = b.characterUnderLineWeight, h = "border-bottom: " + z + "px " + b.characterUnderLineStyle + " " + RGBToHex(b.characterUnderLineColor)), b.characterBgColorHover = RGBToHex(b.characterBgColorHover, ""), "" != b.characterBgColorHover && (t = "background-color:" + b.characterBgColorHover + ";"), b.characterColorHover = RGBToHex(b.characterColorHover, ""), "" != b.characterColorHover && (u = "color:" + b.characterColorHover + ";"), "" != b.characterFontHover && (v = "font-family:" + b.characterFontHover + ";"), "" != b.characterWeightHover && (w = "font-weight:" + b.characterWeightHover + ";"), "" != b.characterSizeHover && (x = "font-size:" + D.tParseInt(b.characterSizeHover) + "px;"), q = '<a class="abs' + r + '" href="' + b.href + '" target="' + b.hrefMode + '" style="display:block;width:' + c + "px;height:" + (d - z) + "px;line-height:" + d + "px;" + t + u + v + w + x + o + h + '">' + b.characterContent + "</a>"), b.characterBgColor = RGBToHex(b.characterBgColor, ""), "" != b.characterBgColor && (j = "background-color:" + b.characterBgColor + ";"), b.characterColor = RGBToHex(b.characterColor, ""), "" != b.characterColor && (k = "color:" + b.characterColor + ";"), "" != b.characterFont && (l = "font-family:" + b.characterFont + ";"), "" != b.characterWeight && (m = "font-weight:" + b.characterWeight + ";"), "" != b.characterSize && (n = "font-size:" + D.tParseInt(b.characterSize) + "px;"), "" != b.href && (g = ' href="' + b.href + '"'), '<div class="jcb abs ' + p + i + b.appID + '" data-appid="' + b.appID + '" style="overflow:hidden;text-align:' + b.characterAlign + ";width:" + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:" + y + ';"><a class="abs' + s + '"' + g + ' style="display:block;width:' + c + "px;height:" + d + "px;line-height:" + d + "px;" + j + k + l + m + n + o + 'letter-spacing:0px;" target="' + b.hrefMode + '">' + b.characterContent + "</a>" + q + "</div>"
		},
		codeImport: function(a, b, c, d) {
			var h, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			g.appID = c.attr("data-appid"), g.href = c.children("a:eq(0)").attr("href"), g.hrefMode = c.children("a:eq(0)").attr("target"), g.characterAlign = c.css("text-align") || "left", g.characterContent = c.children("a:eq(0)").html(), g.characterSize = c.children("a:eq(0)").css("font-size").replace(/px/g, ""), g.characterFont = c.children("a:eq(0)").css("font-family").replace(/'/g, ""), g.characterColor = RGBToHex(c.children("a:eq(0)").css("color")), g.characterBgColor = RGBToHex(c.children("a:eq(0)").css("background-color"), ""), g.characterWeight = c.children("a:eq(0)").css("font-weight"), g.characterDash = "off", c.children("a").length > 1 && (g.characterUnderLine = "off", g.characterHoverMode = "on", g.characterHoverSpeed = c.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), g.characterHoverSpeed = g.characterHoverSpeed && g.characterHoverSpeed.length > 0 ? g.characterHoverSpeed.join("") : "", g.characterSizeHover = c.children("a:eq(1)").css("font-size").replace(/px/g, ""), g.characterFontHover = c.children("a:eq(1)").css("font-family").replace(/'/g, ""), g.characterColorHover = RGBToHex(c.children("a:eq(1)").css("color")), g.characterBgColorHover = RGBToHex(c.children("a:eq(1)").css("background-color"), ""), g.characterWeightHover = c.children("a:eq(1)").css("font-weight"), g.characterUnderLineWeight = c.children("a:eq(0)").height() - c.children("a:eq(1)").height(), 0 != g.characterUnderLineWeight && (g.characterUnderLine = "on", g.characterUnderLineStyle = c.children("a:eq(1)").css("border-bottom-style"), g.characterUnderLineColor = RGBToHex(c.children("a:eq(1)").css("border-bottom-color")))), "line-through" == c.children("a:eq(0)").css("text-decoration") && (g.characterDash = "on"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)).html(g.characterContent).css({
				lineHeight: a.height() + "px",
				textAlign: g.characterAlign,
				backgroundColor: g.characterBgColor,
				fontSize: D.tParseInt(g.characterSize),
				fontWeight: g.characterWeight,
				fontFamily: g.characterFont,
				color: g.characterColor
			}).tResize(), a.attr("appID", g.appID), c.hasClass("jsfbchild") ? a.addClass("t-app-jsfb") : d(f, g.appID)
		}
	}, {
		appID: "",
		href: "#",
		hrefMode: "_blank",
		characterContent: "",
		characterAlign: "left",
		characterSize: "12",
		characterWeight: "normal",
		characterFont: "宋体",
		characterColor: "#000000",
		characterBgColor: "",
		characterDash: "off",
		characterHoverMode: "off",
		characterHoverSpeed: "",
		characterSizeHover: "12",
		characterWeightHover: "normal",
		characterFontHover: "宋体",
		characterColorHover: "#000000",
		characterBgColorHover: "",
		characterUnderLine: "off",
		characterUnderLineStyle: "bold",
		characterUnderLineWeight: "1",
		characterUnderLineColor: "#000000",
		popupConfig: {
			pSwitch: "no",
			popupPosition: "'tr','tl'",
			spaceX: "0",
			spaceY: "0",
			popupHtml: ""
		}
	}],
	jdlb: ['<div class="t-app" data-dblType="jdlb"></div>',
	{
		tTitle: "段落设置",
		tUrl: "paragraph",
		tSubmit: function(a, b) {
			D.setPopupContent(a), b.attr("data-config", JSON.stringify(a)).html(a.paragraphContent).css({
				lineHeight: a.paragraphLineHeight + "px",
				textIndent: a.paragraphIndent + "px",
				fontSize: D.tParseInt(a.paragraphSize),
				fontWeight: a.paragraphWeight,
				fontFamily: a.paragraphFont,
				color: a.paragraphColor
			}).tResize()
		},
		tContent: "请双击设置段落内容",
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = "",
				i = "",
				j = "",
				k = "",
				l = "",
				m = "",
				n = 1;
			return b.zIndex && (n = b.zIndex), b.paragraphColor = RGBToHex(b.paragraphColor, ""), "" != b.paragraphColor && (h = "color:" + b.paragraphColor + ";"), "" != b.paragraphFont && (i = "font-family:" + b.paragraphFont + ";"), "" != b.paragraphWeight && (j = "font-weight:" + b.paragraphWeight + ";"), "" != b.paragraphSize && (k = "font-size:" + D.tParseInt(b.paragraphSize) + "px;"), "" != b.paragraphLineHeight && (l = "line-height:" + D.tParseInt(b.paragraphLineHeight) + "px;"), "" != b.paragraphIndent && (m = "text-indent:" + D.tParseInt(b.paragraphIndent) + "px;"), "" != b.href && (g = ' href="' + b.href + '"'), '<div class="jdlb abs ' + b.appID + '" data-appid="' + b.appID + '" style="overflow:hidden;width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:" + n + ';"><a class="abs"' + g + ' style="display:block;width:' + c + "px;height:" + d + "px;line-height:" + d + "px;" + h + i + j + k + l + m + 'letter-spacing:0px;" target="' + b.hrefMode + '">' + b.paragraphContent + "</a></div>"
		},
		codeImport: function(a, b, c, d) {
			var h, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			g.appID = c.attr("data-appid"), g.href = c.children("a:eq(0)").attr("href"), g.hrefMode = c.children("a:eq(0)").attr("target"), g.paragraphContent = c.children("a:eq(0)").html(), g.paragraphLineHeight = c.children("a:eq(0)").css("line-height").replace(/px/g, ""), g.paragraphIndent = c.children("a:eq(0)").css("text-indent").replace(/px/g, ""), g.paragraphSize = c.children("a:eq(0)").css("font-size").replace(/px/g, ""), g.paragraphFont = c.children("a:eq(0)").css("font-family").replace(/'/g, ""), g.paragraphColor = RGBToHex(c.children("a:eq(0)").css("color")), g.paragraphWeight = c.children("a:eq(0)").css("font-weight"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)).html(g.paragraphContent).css({
				lineHeight: g.paragraphLineHeight + "px",
				textIndent: g.paragraphIndent + "px",
				fontSize: D.tParseInt(g.paragraphSize),
				fontWeight: g.paragraphWeight,
				fontFamily: g.paragraphFont,
				color: g.paragraphColor
			}).tResize(), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		href: "#",
		hrefMode: "_blank",
		paragraphContent: "",
		paragraphLineHeight: "24",
		paragraphIndent: "0",
		paragraphSize: "12",
		paragraphWeight: "normal",
		paragraphFont: "宋体",
		paragraphColor: "#000000",
		popupConfig: {
			pSwitch: "no",
			popupPosition: "'tr','tl'",
			spaceX: "0",
			spaceY: "0",
			popupHtml: ""
		}
	}],
	jcdb: ['<div class="t-app" data-dblType="jcdb"></div>',
	{
		tTitle: "倒计时设置",
		tUrl: "countdown",
		tSubmit: function(a, b) {
			var c = b.children(D.appChildCls + "[data-attachType='jcdbDay']"),
				d = b.children(D.appChildCls + "[data-attachType='jcdbHour']"),
				e = b.children(D.appChildCls + "[data-attachType='jcdbMinute']"),
				f = b.children(D.appChildCls + "[data-attachType='jcdbSecond']"),
				g = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), "yes" == a.autoSize && g.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), "yes" == a.childConfig[0].displayMode ? c.css({
				color: a.childConfig[0].numberColor,
				fontSize: a.childConfig[0].numberSize + "px",
				fontWeight: a.childConfig[0].numberWeight,
				fontFamily: a.childConfig[0].numberFamily
			}).show() : c.hide(), "yes" == a.childConfig[1].displayMode ? d.css({
				color: a.childConfig[1].numberColor,
				fontSize: a.childConfig[1].numberSize + "px",
				fontWeight: a.childConfig[1].numberWeight,
				fontFamily: a.childConfig[1].numberFamily
			}).show() : d.hide(), "yes" == a.childConfig[2].displayMode ? e.css({
				color: a.childConfig[2].numberColor,
				fontSize: a.childConfig[2].numberSize + "px",
				fontWeight: a.childConfig[2].numberWeight,
				fontFamily: a.childConfig[2].numberFamily
			}).show() : e.hide(), "yes" == a.childConfig[3].displayMode ? f.css({
				color: a.childConfig[3].numberColor,
				fontSize: a.childConfig[3].numberSize + "px",
				fontWeight: a.childConfig[3].numberWeight,
				fontFamily: a.childConfig[3].numberFamily
			}).show() : f.hide(), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<div class="t-app-child" data-dblType="jcdb" data-attachType="jcdbDay">00</div><div class="t-app-child" data-dblType="jcdb" data-attachType="jcdbHour">00</div><div class="t-app-child" data-dblType="jcdb" data-attachType="jcdbMinute">00</div><div class="t-app-child" data-dblType="jcdb" data-attachType="jcdbSecond">00</div>',
		codeExport: function(a) {
			var p, q, r, s, v, w, x, y, z, A, B, C, E, F, G, H, I, J, K, L, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = b.childConfig,
				h = a.children(D.appChildCls + "[data-attachType='jcdbDay']"),
				i = a.children(D.appChildCls + "[data-attachType='jcdbHour']"),
				j = a.children(D.appChildCls + "[data-attachType='jcdbMinute']"),
				k = a.children(D.appChildCls + "[data-attachType='jcdbSecond']"),
				l = "",
				m = "",
				n = "",
				o = "",
				t = "",
				u = 1;
			return b.zIndex && (u = b.zIndex), "yes" == g[0].displayMode && (p = D.setChildPos(a, h, !0), v = "", w = "", x = "", y = "", g[0].numberColor = RGBToHex(g[0].numberColor, ""), "" != g[0].numberColor && (v = "color:" + g[0].numberColor + ";"), "" != g[0].numberFamily && (w = "font-family:" + g[0].numberFamily + ";"), "" != g[0].numberWeight && (x = "font-weight:" + g[0].numberWeight + ";"), "" != g[0].numberSize && (y = "font-size:" + D.tParseInt(g[0].numberSize) + "px;"), l = '<span class="abs ks-d" style="display:block;text-align:center;width:' + p.width + "px;height:" + p.height + "px;left:" + p.left + "px;top:" + p.top + "px;" + v + w + x + y + '">00</span>'), "yes" == g[1].displayMode && (q = D.setChildPos(a, i, !0), z = "", A = "", B = "", C = "", g[1].numberColor = RGBToHex(g[1].numberColor, ""), "" != g[1].numberColor && (z = "color:" + g[1].numberColor + ";"), "" != g[1].numberFamily && (A = "font-family:" + g[1].numberFamily + ";"), "" != g[1].numberWeight && (B = "font-weight:" + g[1].numberWeight + ";"), "" != g[1].numberSize && (C = "font-size:" + D.tParseInt(g[1].numberSize) + "px;"), m = '<span class="abs ks-h" style="display:block;text-align:center;width:' + q.width + "px;height:" + q.height + "px;left:" + q.left + "px;top:" + q.top + "px;" + z + A + B + C + '">00</span>'), "yes" == g[2].displayMode && (r = D.setChildPos(a, j, !0), E = "", F = "", G = "", H = "", g[2].numberColor = RGBToHex(g[2].numberColor, ""), "" != g[2].numberColor && (E = "color:" + g[2].numberColor + ";"), "" != g[2].numberFamily && (F = "font-family:" + g[2].numberFamily + ";"), "" != g[2].numberWeight && (G = "font-weight:" + g[2].numberWeight + ";"), "" != g[2].numberSize && (H = "font-size:" + D.tParseInt(g[2].numberSize) + "px;"), n = '<span class="abs ks-m" style="display:block;text-align:center;width:' + r.width + "px;height:" + r.height + "px;left:" + r.left + "px;top:" + r.top + "px;" + E + F + G + H + '">00</span>'), "yes" == g[3].displayMode && (s = D.setChildPos(a, k, !0), I = "", J = "", K = "", L = "", g[3].numberColor = RGBToHex(g[3].numberColor, ""), "" != g[3].numberColor && (I = "color:" + g[3].numberColor + ";"), "" != g[3].numberFamily && (J = "font-family:" + g[3].numberFamily + ";"), "" != g[3].numberWeight && (K = "font-weight:" + g[3].numberWeight + ";"), "" != g[3].numberSize && (L = "font-size:" + D.tParseInt(g[3].numberSize) + "px;"), o = '<span class="abs ks-s" style="display:block;text-align:center;width:' + s.width + "px;height:" + s.height + "px;left:" + s.left + "px;top:" + s.top + "px;" + I + J + K + L + '">00</span>'), checkUrl(b.pSrc) && (t = "background:url(" + b.pSrc + ") center center no-repeat;"), '<div class="jcdb" module-name="Countdown" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + 'px;"><div class="jcdb abs j-module" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:" + u + ";" + t + '"  module-function="base" module-param="{ \'countDownInfo\': \'' + b.endTime + "','hasDay':true,'dayCnt':'.ks-d','hourCnt':'.ks-h','minuteCnt':'.ks-m','secondCnt':'.ks-s' }\">" + l + m + n + o + "</div></div>"
		},
		codeImport: function(a, b, c, d) {
			var l, n, e = JSON.parse(a.attr("data-config")),
				f = a.children(".jcdb").attr("data-dblType"),
				g = $.parseJSON(c.children(".jcdb").attr("module-param").replace(/'/g, '"')),
				h = a.children(D.appChildCls + "[data-attachType='jcdbDay']"),
				i = a.children(D.appChildCls + "[data-attachType='jcdbHour']"),
				j = a.children(D.appChildCls + "[data-attachType='jcdbMinute']"),
				k = a.children(D.appChildCls + "[data-attachType='jcdbSecond']"),
				m = {};
			m.childConfig = [], m.childConfig[0] = {}, m.childConfig[1] = {}, m.childConfig[2] = {}, m.childConfig[3] = {}, m.childConfig[0].displayMode = "no", m.childConfig[1].displayMode = "no", m.childConfig[2].displayMode = "no", m.childConfig[3].displayMode = "no", h.hide(), i.hide(), j.hide(), k.hide(), c.children(".jcdb").attr("data-appid") ? m.appID = c.children(".jcdb").attr("data-appid") : D.setAppID(m), m.pSrc = c.children(".jcdb").css("background-image").replace(/^url|[\(\)]/g, ""), m.endTime = g.endTime, c.children(".jcdb").children().each(function() {
				var d = $(this);
				d.hasClass("ks-d") && "no" == m.childConfig[0].displayMode && (m.childConfig[0].displayMode = "yes", m.childConfig[0].numberColor = RGBToHex(d.css("color"), "#FFFFFF"), m.childConfig[0].numberSize = d.css("font-size").replace(/px/g, ""), m.childConfig[0].numberWeight = d.css("font-weight"), m.childConfig[0].numberFamily = d.css("font-family"), l = D.getChildPos(c.children(".jcdb"), d, !0), h.css({
					color: m.childConfig[0].numberColor,
					fontSize: m.childConfig[0].numberSize + "px",
					fontWeight: m.childConfig[0].numberWeight,
					fontFamily: m.childConfig[0].numberFamily,
					top: l.top,
					left: l.left,
					width: l.width,
					height: l.height
				}).show()), d.hasClass("ks-h") && "no" == m.childConfig[1].displayMode && (m.childConfig[1].displayMode = "yes", m.childConfig[1].numberColor = RGBToHex(d.css("color"), "#FFFFFF"), m.childConfig[1].numberSize = d.css("font-size").replace(/px/g, ""), m.childConfig[1].numberWeight = d.css("font-weight"), m.childConfig[1].numberFamily = d.css("font-family"), l = D.getChildPos(c.children(".jcdb"), d, !0), i.css({
					color: m.childConfig[1].numberColor,
					fontSize: m.childConfig[1].numberSize + "px",
					fontWeight: m.childConfig[1].numberWeight,
					fontFamily: m.childConfig[1].numberFamily,
					top: l.top,
					left: l.left,
					width: l.width,
					height: l.height
				}).show()), d.hasClass("ks-m") && "no" == m.childConfig[2].displayMode && (m.childConfig[2].displayMode = "yes", m.childConfig[2].numberColor = RGBToHex(d.css("color"), "#FFFFFF"), m.childConfig[2].numberSize = d.css("font-size").replace(/px/g, ""), m.childConfig[2].numberWeight = d.css("font-weight"), m.childConfig[2].numberFamily = d.css("font-family"), l = D.getChildPos(c.children(".jcdb"), d, !0), j.css({
					color: m.childConfig[2].numberColor,
					fontSize: m.childConfig[2].numberSize + "px",
					fontWeight: m.childConfig[2].numberWeight,
					fontFamily: m.childConfig[2].numberFamily,
					top: l.top,
					left: l.left,
					width: l.width,
					height: l.height
				}).show()), d.hasClass("ks-s") && "no" == m.childConfig[3].displayMode && (m.childConfig[3].displayMode = "yes", m.childConfig[3].numberColor = RGBToHex(d.css("color"), "#FFFFFF"), m.childConfig[3].numberSize = d.css("font-size").replace(/px/g, ""), m.childConfig[3].numberWeight = d.css("font-weight"), m.childConfig[3].numberFamily = d.css("font-family"), l = D.getChildPos(c.children(".jcdb"), d, !0), k.css({
					color: m.childConfig[3].numberColor,
					fontSize: m.childConfig[3].numberSize + "px",
					fontWeight: m.childConfig[3].numberWeight,
					fontFamily: m.childConfig[3].numberFamily,
					top: l.top,
					left: l.left,
					width: l.width,
					height: l.height
				}).show())
			}), n = $.extend(!0, e, m), a.attr("data-config", JSON.stringify(n)), checkUrl(m.pSrc) && a.css({
				backgroundImage: "url(" + m.pSrc + ")"
			}), a.attr("appID", m.appID), d(f, m.appID)
		}
	}, {
		appID: "",
		endTime: (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 5),
		pSrc: "http://img10.360buyimg.com/imgzone/jfs/t580/252/36067486/1916/5ce8fb56/5448ac5cN9a3aaf4b.png",
		autoSize: "yes",
		childConfig: [{
			attachID: "",
			displayMode: "yes",
			numberColor: "#FFFFFF",
			numberFamily: "宋体",
			numberSize: "24",
			numberWeight: "normal"
		}, {
			attachID: "",
			displayMode: "yes",
			numberColor: "#FFFFFF",
			numberFamily: "宋体",
			numberSize: "24",
			numberWeight: "normal"
		}, {
			attachID: "",
			displayMode: "yes",
			numberColor: "#FFFFFF",
			numberFamily: "宋体",
			numberSize: "24",
			numberWeight: "normal"
		}, {
			attachID: "",
			displayMode: "yes",
			numberColor: "#FFFFFF",
			numberFamily: "宋体",
			numberSize: "24",
			numberWeight: "normal"
		}]
	}],
	jvb: ['<div class="t-app" data-dblType="jvb"></div>',
	{
		tTitle: "视频设置",
		tUrl: "video",
		tSubmit: function(a, b) {
			b.attr("data-config", JSON.stringify(a)), checkUrl(a.videoSrc) && b.children("embed").remove().attr({
				src: a.videoSrc,
				wmode: "transparent"
			}).appendTo(b)
		},
		tContent: '<embed allowScriptAccess="never" flashvars="scene=taobao_shop" src="http://cloud.video.taobao.com/video/play/v/2002/sid/10552470/uid/1695300927/from/2/f/video.swf" type="application/x-shockwave-flash" autostart="false" wmode="transparent"/>',
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1;
			return b.zIndex && (h = b.zIndex), checkUrl(b.videoSrc) && (g = 'src="' + b.videoSrc + '"'), '<div class="jvb abs" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:" + h + ';"><embed width="0" height="0" ' + g + '/><video controls="controls" autoplay="autoplay" loop="loop" width="' + c + '" height="' + d + '" ' + g + '></video></div>'
		},
		codeImport: function(a, b, c, d) {
			var h, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			g.videoSrc = c.children("embed").attr("src"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), checkUrl(g.videoSrc) && a.children("embed").remove().attr({
				src: g.videoSrc
			}).appendTo(a), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		videoSrc: "http://cloud.video.taobao.com/video/play/v/2002/sid/10552470/uid/1695300927/from/2/f/video.swf"
	}],
	jfsb: ['<div class="t-app" data-dblType="jfsb"></div>',
	{
		tTitle: "焦点轮播设置",
		tUrl: "focusslider",
		tSubmit: function(a, b) {
			var f, g, h, i, j, c = require("scripts/tAjax"),
				d = b.children(D.appChildCls + "[data-attachType='jfsbOArrow']"),
				e = b.children(D.appChildCls + "[data-attachType='jfsbTArrow']");
			for (checkUrl(a.sliderSrc[0]) ? b.css({
				backgroundImage: "url(" + a.sliderSrc[0] + ")"
			}) : b.css({
				backgroundImage: "none"
			}), checkUrl(a.childConfig[0].oSrc) ? (d.css({
				backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
			}), "yes" == a.childConfig[0].autoSize && c.ajaxJson("gis", {
				img: a.childConfig[0].oSrc
			}, function(a) {
				var b = a[0],
					c = a[1];
				b && d.width(b), c && d.height(c)
			})) : d.css({
				backgroundImage: "none"
			}), checkUrl(a.childConfig[0].tSrc) ? (e.css({
				backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
			}), "yes" == a.childConfig[0].autoSize && c.ajaxJson("gis", {
				img: a.childConfig[0].tSrc
			}, function(a) {
				var b = a[0],
					c = a[1];
				b && e.width(b), c && e.height(c)
			})) : e.css({
				backgroundImage: "none"
			}), "qp" == a.kuandukz && b.css({
				left: 0,
				width: D.june.width()
			}), "yes" == a.sliderArrow ? (d.show(), e.show()) : (d.hide(), e.hide()), b.children(D.appChildCls + "[data-attachType='jfsbSmallImg']:gt(" + (a.contentType.length - 1) + ")").remove(), f = $(this), g = "", h = 0; h < a.contentType.length; h++) f = b.children(D.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + h + ")"), g = "", g = "imgContent" == a.contentType[h] ? "" != a.smallImgSrcT[h] ? a.smallImgSrcT[h] : "" != a.smallHoverSrcT[h] ? a.smallHoverSrcT[h] : a.sliderSrc[h] : "" != a.smallImgSrc[h] ? a.smallImgSrc[h] : "" != a.smallHoverSrc[h] ? a.smallHoverSrc[h] : a.sliderSrc[h], f.length > 0 ? (checkUrl(g) && f.children("img").attr({
				src: g
			}), "" != a.sWidth && $.isNumeric(a.sWidth) && f.css({
				width: a.sWidth
			}), "" != a.sHeight && $.isNumeric(a.sHeight) && f.css({
				height: a.sHeight
			})) : (i = 120, j = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (i = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (j = a.sHeight), D.setAttachID(a.childConfig[0]), $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + i + "px;height:" + j + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + g + '"></div>').tResize().appendTo(b).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID));
			b.children(D.appOtherCls).html(""), "customContent" == a.contentType[0] && (b.css({
				backgroundImage: ""
			}), b.children(D.appOtherCls).html(a.customContent[0])), b.attr("data-config", JSON.stringify(a))
		},
		tDynamic: '<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg"><img width="120" height="120" src=""/></div>',
		tContent: '<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbOArrow"></div><div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
		codeExport: function(a) {
			var o, p, w, x, y, z, A, B, C, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = b.childConfig[0],
				h = (new Date).valueOf().toString().substr(7, 6),
				i = '<div class="scroller scroller' + h + '" style="overflow:hidden;width:' + c + "px;height:" + d + 'px;z-index:1;"><div class="jdconcc c' + h + '">',
				j = "",
				k = "",
				l = "",
				n = [],
				q = "",
				r = "",
				s = "",
				t = "",
				u = "",
				v = "'slideDirection':'" + b.sliderMode + "',";
			return subFunction = "moveEffect", zIndex = 1, "" == b.displayMode && "" == b.css3Mode || "yes" != b.sliderArrow || (s = " jspb", t = " " + b.css3Speed, u = " " + b.css3Speed, "june-box-fadein" == b.displayMode && (t += " june-box-fadein", u += " june-box-fadein"), b.css3Mode.indexOf("moveout") >= 0 && (t += " june-box-lx" + b.css3Mode.replace(/moveout/g, ""), u += " june-box-rx" + b.css3Mode.replace(/moveout/g, "")), b.css3Mode.indexOf("movein") >= 0 && (t += " june-box-rx" + b.css3Mode.replace(/movein/g, ""), u += " june-box-lx" + b.css3Mode.replace(/movein/g, ""))), w = "elepic elepic" + h, ("left" == b.sliderMode || "top" == b.sliderMode) && (w = "elepic1 elepic" + h), x = "float:left;", "top" == b.sliderMode && (x = ""), p = "white" == b.kgdSwitch ? "kgdwhite" : "black" == b.kgdSwitch ? "kgdblack" : "kgbtransparent", A = a.children(D.appChildCls + "[data-attachType='jfsbOArrow']"), B = "", C = a.children(D.appChildCls + "[data-attachType='jfsbTArrow']"), y = D.setChildPos(a, A, !0), z = D.setChildPos(a, C, !0), checkUrl(g.oSrc) && (q = 'src="' + g.oSrc + '"'), checkUrl(g.tSrc) && (r = 'src="' + g.tSrc + '"'), "yes" == b.sliderArrow && (j = " 'arrowLeft': '.prev" + h + "', 'arrowRight': '.next" + h + "', "), "yes" == b.sliderArrow && (k = '<div class="abs prev' + h + t + '" style="width:' + y.width + "px;height:" + y.height + "px;top:" + y.top + "px;left:" + y.left + 'px;z-index:2;"><img alt="上一页" ' + q + ' /></div><div class="abs next' + h + u + '" style="width:' + z.width + "px;height:" + z.height + "px;top:" + z.top + "px;left:" + z.left + 'px;z-index:2;"><img alt="下一页" ' + r + " /></div>"), $.each(b.contentType, function(e) {
				var k, m, q, r, s, g = a.children(D.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + e + ")"),
					j = D.getChildPos(a, g, !0);
				o = 0 == e ? "hidden" : "", B = "" == b.sliderHref[e] ? "" : ' href="' + b.sliderHref[e] + '" target="' + b.hrefMode + '"', "imgContent" == b.contentType[e] ? (k = b.smallImgSrcT[e], m = b.smallHoverSrcT[e], q = !1, r = "", "" == m && (m = k, q = !0), "" == m && (m = b.sliderSrc[e], q = !1), "transparent" != b.kgdSwitch && "" == b.smallHoverSrcT[e] && (q = !0), "" == k && (k = b.sliderSrc[e]), n.push(m), checkUrl(m) && (r = 'src="' + m + '"'), i += '<div class="' + w + '" style="height:' + d + "px;width:" + c + "px;" + x + '" ref="' + b.sliderHref[e] + '"><a' + B + ' style="height:' + d + "px;width:" + c + "px;display:block;background:url(" + b.sliderSrc[e] + ') no-repeat scroll center center transparent;" ></a></div>', s = q ? "<a" + B + ' class="abs jd-slider-hover" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><em class="' + p + '"></em></a>' : "<a" + B + ' class="abs jd-slider-hover" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + k + '" style="width:' + j.width + "px;height:" + j.height + 'px;"><em class="' + p + '"></em></a>', l += '<span class="abs navsmallimg navsmallimg' + h + '" style="z-index:2;width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;"><a' + B + ' class="abs" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img ' + r + ' style="width:' + j.width + "px;height:" + j.height + 'px;"></a>' + s + "</span>") : (k = b.smallImgSrc[e], m = b.smallHoverSrc[e], q = !1, r = "", "" == m && (m = k, q = !0), "" == m && (m = b.sliderSrc[e], q = !1), "transparent" != b.kgdSwitch && "" == b.smallHoverSrc[e] && (q = !0), "" == k && (k = b.sliderSrc[e]), n.push(m), checkUrl(m) && (r = 'src="' + m + '"'), i += '<div class="' + w + '" style="height:' + d + "px;width:" + c + "px;" + x + '"><div class="cussmalljfsb" style="height:' + d + "px;width:" + c + 'px;">' + b.customContent[e] + "</div></div>", s = q ? "<a" + B + ' class="abs jd-slider-hover' + p + '" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><em class="' + p + '"></em></a>' : "<a" + B + ' class="abs jd-slider-hover" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + k + '" style="width:' + j.width + "px;height:" + j.height + 'px;"></a>', l += '<span class="abs navsmallimg navsmallimg' + h + '" style="z-index:2;width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;"><a' + B + ' class="abs" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img ' + r + ' style="width:' + j.width + "px;height:" + j.height + 'px;"></a>' + s + "</span>")
			}), i += "</div></div>", b.zIndex && (zIndex = b.zIndex), "left" != b.sliderMode && "top" != b.sliderMode && (v = "", subFunction = "transparentEffect"), '<div class="jfsb abs j-module' + s + '" style="height:' + d + "px;width:" + c + "px;top:" + e + "px;left:" + f + "px;z-index:" + zIndex + ';cursor: pointer;" data-hsrc="' + n.join(",") + '" module-function="slideHtml" module-param="{' + v + "'subFunction':'" + subFunction + "'," + j + "'eventType':'" + b.sliderSwitch + "','timer':'" + b.sliderTime + "','tabArea':'.s_tabs" + h + "','tabNode':'.s_tabs" + h + " .navsmallimg" + h + "', 'imgArea':'.scroller" + h + "', 'imgNodeArea':'.c" + h + "', 'imgNode':'.c" + h + " .elepic" + h + "'}\">" + i + '<div class="s_tabs s_tabs' + h + '" style="z-index:2">' + l + k + "</div></div>"
		},
		codeImport: function(a, b, c, d) {
			var i, j, k, l, o, p, r, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = JSON.parse(c.attr("module-param").replace(/'/g, '"')),
				h = {},
				m = "elepic",
				n = c.attr("data-hsrc");
			if (n = n ? n.split(",") : [], h.childConfig = [], h.childConfig[0] = {}, h.sliderSrc = [], h.sliderHref = [], h.customContent = [], h.contentType = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], c.attr("data-appid") ? h.appID = c.attr("data-appid") : D.setAppID(h), c.children(".scroller").children(".jdconcc").children("div.elepic1").length > 0 && (m = "elepic1"), o = c.children(".s_tabs"), 0 == o.length && (o = c.children(":last")), c.children(".scroller").children(".jdconcc").children("div." + m).each(function(a) {
				var e, f, g, c = $(this).children("a"),
					d = $(this).children(".cussmalljfsb").length > 0 && $(this).children(".cussmalljfsb").html();
				n[a] || (n[a] = ""), c.length > 0 ? (e = $(this).children("a").css("background-image").replace(/^url|[\(\)]/g, ""), f = $(this).children("a").attr("href"), h.contentType.push("imgContent"), h.sliderSrc.push(e), h.sliderHref.push(f), h.customContent.push(""), o.children("span:eq(" + a + ")").find("img:eq(1)").attr("src") ? (g = o.children("span:eq(" + a + ")").find("img:eq(1)").attr("src"), g == e && (g = ""), h.smallImgSrcT.push(g)) : (g = o.find("span.navsmallimg:eq(" + a + ")").find("img").attr("src"), g == e && (g = ""), h.smallImgSrcT.push(g)), h.smallImgSrc.push("http://img10.360buyimg.com/imgzone/jfs/t343/111/2058058500/696/90240953/544f6f49N30ecaf4d.png"), n[a] == e && (n[a] = ""), h.smallHoverSrcT.push(n[a]), h.smallHoverSrc.push("http://img10.360buyimg.com/imgzone/jfs/t493/66/120005921/740/88a213d3/544f6f61N3bc34408.png")) : (h.contentType.push("customContent"), h.sliderSrc.push(""), h.sliderHref.push(""), h.customContent.push(d), o.children("span:eq(" + a + ")").find("img:eq(1)").attr("src") ? (g = o.children("span:eq(" + a + ")").find("img:eq(1)").attr("src"), h.smallImgSrc.push(g)) : (g = o.find("span.navsmallimg img:eq(" + a + ")").attr("src"), h.smallImgSrc.push(g)), h.smallImgSrcT.push(""), h.smallHoverSrc.push(n[a]), h.smallHoverSrcT.push(""))
			}), c.children(".scroller").children(".jdconcc").children("div." + m).length > 1 && (e.sliderSrc = [], e.sliderHref = [], e.smallImgSrc = [], e.smallHoverSrc = [], e.smallImgSrcT = [], e.smallHoverSrcT = [], e.customContent = [], e.contentType = []), h.sliderMode = g.slideDirection ? g.slideDirection : "fade", g.timer && (h.sliderTime = g.timer), g.eventType && (h.sliderSwitch = g.eventType), h.hrefMode = c.find("a").attr("target") || "_blank", h.sliderArrow = "no", k = g.arrowLeft, l = g.arrowRight, k && "undefined" != k) {
				h.sliderArrow = "yes", h.childConfig[0].oSrc = c.find(k).children("img").attr("src"), h.childConfig[0].tSrc = c.find(l).children("img").attr("src"), i = D.getChildPos(c, c.find(k), !0), j = D.getChildPos(c, c.find(l), !0), p = c.find(k), h.displayMode = p.hasClass("june-box-fadein") ? "june-box-fadein" : "";
				try {
					h.css3Speed = p.attr("class").match(/trans(\w+)s/g).join(""), p.attr("class").indexOf("june-box-lx") > 0 && (h.css3Mode = "moveout" + p.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, "")), p.attr("class").indexOf("june-box-rx") > 0 && (h.css3Mode = "movein" + p.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, ""))
				} catch (q) {}
			}
			a.children(D.appChildCls + "[data-attachType='jfsbSmallImg']").remove(), o.find("span.navsmallimg").each(function(b) {
				var e, d = h.contentType[b];
				e = "imgContent" == d ? h.smallImgSrcT[b] : h.smallImgSrc[b], "" == e && (e = h.sliderSrc[b]), D.setAttachID(h.childConfig[0]), $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + D.tParseInt($(this).css("left")) + "px;top:" + D.tParseInt($(this).css("top")) + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + e + '"></div>').tResize().appendTo(a).attr("appID", h.appID).attr("attachID", h.childConfig[0].attachID), h.sWidth = $(this).width(), h.sHeight = $(this).height()
			}), o.children("span").each(function() {
				var a = $(this),
					b = a.find("em");
				h.kgdSwitch = b.length > 0 ? b.hasClass("kgdwhite") ? "white" : b.hasClass("kgdblack") ? "black" : "transparent" : "transparent"
			}), r = $.extend(!0, e, h), a.attr("data-config", JSON.stringify(r)), require("scripts/tAjax"), "" != h.sliderSrc[0] && checkUrl(h.sliderSrc[0]) ? a.css({
				backgroundImage: "url(" + h.sliderSrc[0] + ")"
			}) : a.css({
				backgroundImage: ""
			}), "no" == h.sliderArrow ? (a.children(D.appChildCls + "[data-attachType='jfsbOArrow']").hide(), a.children(D.appChildCls + "[data-attachType='jfsbTArrow']").hide()) : (a.children(D.appChildCls + "[data-attachType='jfsbOArrow']").css({
				backgroundImage: "url(" + h.childConfig[0].oSrc + ")",
				width: 0 == i.width ? 48 : i.width,
				height: 0 == i.height ? 48 : i.height,
				top: i.top,
				left: i.left
			}).show(), a.children(D.appChildCls + "[data-attachType='jfsbTArrow']").css({
				backgroundImage: "url(" + h.childConfig[0].tSrc + ")",
				width: 0 == j.width ? 48 : j.width,
				height: 0 == j.height ? 48 : j.height,
				top: j.top,
				left: j.left
			}).show()), a.children(D.appOtherCls).html(""), "customContent" == h.contentType[0] && (a.css({
				backgroundImage: ""
			}), a.children(D.appOtherCls).html(h.customContent[0])), a.attr("appID", h.appID), d(f, h.appID)
		}
	}, {
		appID: "",
		sliderSrc: ["http://img10.360buyimg.com/imgzone/jfs/t673/246/29437206/62950/3f02b157/5448ac56N583a918b.jpg", "http://img10.360buyimg.com/imgzone/jfs/t511/123/36468651/75236/62728f3b/5448ac56Ncb17c003.jpg", "http://img10.360buyimg.com/imgzone/jfs/t673/246/29437206/62950/3f02b157/5448ac56N583a918b.jpg"],
		sliderHref: ["#", "#", "#"],
		smallImgSrc: ["http://img10.360buyimg.com/imgzone/jfs/t343/111/2058058500/696/90240953/544f6f49N30ecaf4d.png", "http://img10.360buyimg.com/imgzone/jfs/t343/111/2058058500/696/90240953/544f6f49N30ecaf4d.png", "http://img10.360buyimg.com/imgzone/jfs/t343/111/2058058500/696/90240953/544f6f49N30ecaf4d.png"],
		smallHoverSrc: ["http://img10.360buyimg.com/imgzone/jfs/t493/66/120005921/740/88a213d3/544f6f61N3bc34408.png", "http://img10.360buyimg.com/imgzone/jfs/t493/66/120005921/740/88a213d3/544f6f61N3bc34408.png", "http://img10.360buyimg.com/imgzone/jfs/t493/66/120005921/740/88a213d3/544f6f61N3bc34408.png"],
		smallImgSrcT: ["", "", ""],
		smallHoverSrcT: ["", "", ""],
		customContent: ["", "", ""],
		contentType: ["imgContent", "imgContent", "imgContent"],
		sliderMode: "top",
		kgdSwitch: "black",
		sliderArrow: "no",
		sliderTime: "4",
		sliderSwitch: "mouseenter",
		hrefMode: "_blank",
		kuandukz: "zdy",
		displayMode: "",
		css3Mode: "",
		css3Speed: "trans05s",
		sWidth: "",
		sHeight: "",
		childConfig: [{
			attachID: "",
			autoSize: "yes",
			autoSize1: "yes",
			oSrc: "http://img10.360buyimg.com/imgzone/jfs/t343/165/1982118515/741/d050becd/5448ac57Ne2c31ab3.png",
			tSrc: "http://img10.360buyimg.com/imgzone/jfs/t613/289/34516897/938/978d3723/5448ac58N9c6a67ea.png"
		}]
	}],
	jab: ['<div class="t-app" data-dblType="jab"></div>',
	{
		tTitle: "关注设置",
		tUrl: "attention",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.attentionSrc) ? (b.css({
				backgroundImage: "url(" + a.attentionSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.attentionSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = b.attentionMode,
				h = "",
				i = "",
				k = "",
				l = 1;
			return b.zIndex && (l = b.zIndex), "" != b.attentionID && (h = " guanzhu"), checkUrl(b.attentionSrc) && (i = "background:url(" + b.attentionSrc + ") center center no-repeat;", k = ' src="' + b.attentionSrc + '"'), "itemgz" == g ? '<input value="&nbsp;" id="coll' + b.attentionID + '" type="button" class="btn-coll jab abs' + h + '" style="visibility:visible;border:none;height:' + d + "px;width:" + c + "px;top:" + e + "px;left:" + f + "px;" + i + "z-index:" + l + ';" />' : '<div class="jab abs j-module ' + h + "\" module-function=\"follow\" module-param=\"{'type':'shopId','id':'" + b.attentionID + "','node':'.item'}\" style=\"height:" + d + "px;width:" + c + "px;top:" + e + "px;left:" + f + "px;z-index:1;" + i + '"><span class="item" style="display:block;width:100%;height:100%;"><img' + k + ' class="" alt="" border="0"></span></div>'
		},
		codeImport: function(a, b, c, d) {
			var i, j, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.attentionSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), c.hasClass("btn-coll") ? g.attentionID = (c.attr("id") || "").replace(/coll/g, "") : (i = JSON.parse(c.attr("module-param").replace(/'/g, '"') || "{}"), i.id && (g.attentionID = i.id, g.attentionMode = "shopgz")), j = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(j)), checkUrl(g.attentionSrc) && a.css({
				backgroundImage: "url(" + g.attentionSrc + ")"
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		attentionMode: "itemgz",
		attentionID: "",
		attentionSrc: "http://img11.360buyimg.com/cms/jfs/t313/165/751629421/289/510edc53/54222984N1d04fcc2.png",
		autoSize: "yes"
	}],
	jfb: ['<div class="t-app" data-dblType="jfb"></div>',
	{
		tTitle: "分享设置",
		tUrl: "share",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.shareSrc) ? (b.css({
				backgroundImage: "url(" + a.shareSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.shareSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), b.attr("data-config", JSON.stringify(a))
		},
		codeExport: function(a) {
			var n, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = b.shareUrl.split("?")[1],
				h = !! g && g.split("&"),
				i = b.shareUrl,
				j = b.shareDetail + b.shareUrl,
				k = "webpage",
				l = "",
				m = 1;
			if ("http" != b.shareUrl.substr(0, 4) && (b.shareUrl = "http://" + b.shareUrl), "http://detail" == b.shareUrl.split(".")[0] || "http://item" == b.shareUrl.split(".")[0]) {
				for (n = 0; n < h.length; n++)"id" == h[n].substr(0, 2) && (i = h[n].replace("id=", ""));
				j = b.shareDetail, k = "item"
			} else i = "%7b$shop.id%7d", k = "shop";
			return b.zIndex && (m = b.zIndex), checkUrl(b.shareSrc) && (l = "background:url(" + b.shareSrc + ") center center no-repeat;"), '<div class="jfb abs sns-widget sns-sharebtn sns-sharebtn-default sns-widget-ui" data-sharebtn=\'{"title":"' + b.shareTitle + '","key":"' + i + '","comment":"' + j + '","type":"webpage","skinType":1,"client_id":68}\'  style="top:' + e + "px;left:" + f + "px;width:" + c + "px;height:" + d + "px;" + l + "z-index:" + m + '"></div>'
		},
		codeImport: function(a, b, c, d) {
			var k, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				h = JSON.parse(c.attr("data-sharebtn")),
				i = h.type,
				j = h.key;
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.shareSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), g.shareUrl = "http://shop" + j + ".taobao.com/", g.shareDetail = h.comment, g.shareTitle = h.title, "item" == i ? g.shareUrl = "http://item.taobao.com/item.htm?id=" + j : "webpage" == i ? (g.shareUrl = j.replace(/\%7b(\S|\s)+\%7d/g, ""), g.shareDetail = h.comment.replace(j, "")) : "shop" == i && (g.shareUrl = j.replace(/\%7b(\S|\s)+\%7d/g, ""), g.shareDetail = h.comment.replace(j, "")), k = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(k)), checkUrl(g.shareSrc) && a.css({
				backgroundImage: "url(" + g.shareSrc + ")"
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		shareSrc: "http://img.taobao.com/L1/142/405477222/modules/tshop-um-pbl/assets/images/fenxiang.png",
		autoSize: "yes",
		shareUrl: "http://detail.tmall.com/item.htm?id=9637613987",
		shareTitle: "很喜欢这个宝贝，超赞的！",
		shareDetail: "很喜欢这个宝贝，超赞的！"
	}],
	jgb: ['<div class="t-app" data-dblType="jgb"></div>',
	{
		tTitle: "购物车设置",
		tUrl: "gwc",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1;
			return b.zIndex && (h = b.zIndex), checkUrl(b.pSrc) && (g = "background:url(" + b.pSrc + ") center center no-repeat;"), '<a href="' + b.href + '" class="jgb abs J_CartPluginTrigger" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;" + g + "z-index:" + h + ';"></a>'
		},
		codeImport: function(a, b, c, d) {
			var h, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.pSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), g.href = c.attr("href"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), checkUrl(g.pSrc) && a.css({
				backgroundImage: "url(" + g.pSrc + ")"
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2wIebXs0aXXXXXXXX-39767794.png",
		autoSize: "yes",
		href: "http://detail.tmall.com/item.htm?id=22891196779"
	}],
	jscb: ['<div class="t-app" data-dblType="jscb"></div>',
	{
		tTitle: "收藏设置",
		tUrl: "shoucang",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}).html("").tResize({
				tSwitch: !1
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : (b.css({
				backgroundImage: "none"
			}), "1" == a.scType ? b.html('<span style="font-size:14px;">收藏宝贝</span>').tResize({
				tSwitch: !1
			}) : b.html('<span style="font-size:14px;">收藏本店</span>').tResize({
				tSwitch: !1
			})), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<span style="font-size:14px;">收藏宝贝</span>',
		codeExport: function(a) {
			var i, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = "",
				j = "",
				k = "",
				l = 1;
			return b.zIndex && (l = b.zIndex), "1" == b.scType ? (i = b.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), i && i.length > 0 && (j = i[0].replace(/\?id\=/g, "")), k = "http://favorite.taobao.com/popup/add_collection.htm?id=" + j + "&itemtype=1&scjjc=1") : (j = "%7b$shop.id%7d", k = "http://favorite.taobao.com/popup/add_collection_2.htm?id=" + j + "&itemtype=0"), checkUrl(b.pSrc) && (g = "background:url(" + b.pSrc + ") center center no-repeat;"), "" == g && (h = "1" == b.scType ? '<span style="font-size:14px;">收藏宝贝</span>' : '<span style="font-size:14px;">收藏本店</span>'), '<div class="jscb abs" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;" + g + "z-index:" + l + ';"><a href="' + k + '" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + 'px;">' + h + "</a></div>"
		},
		codeImport: function(a, b, c, d) {
			var h, i, k, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				j = "";
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.pSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), h = c.children("a").attr("href"), i = h.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), i && i.length > 0 && (j = i[0].replace(/\?id\=/g, "")), h.indexOf("itemtype=0") >= 0 ? (g.href = "", g.scType = "2") : (g.href = "//http://detail.tmall.com/item.htm?id=" + j, g.scType = "1"), k = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(k)), checkUrl(g.pSrc) ? a.css({
				backgroundImage: "url(" + g.pSrc + ")"
			}) : (a.css({
				backgroundImage: "none"
			}), "1" == g.scType ? a.html('<span style="font-size:14px;">收藏宝贝</span>').tResize({
				tSwitch: !1
			}) : a.html('<span style="font-size:14px;">收藏本店</span>').tResize({
				tSwitch: !1
			})), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		pSrc: "",
		autoSize: "yes",
		scType: "1",
		href: "http://detail.tmall.com/item.htm?id=22891196779"
	}],
	jxhb: ['<div class="t-app" data-dblType="jxhb"></div>',
	{
		tTitle: "喜欢设置",
		tUrl: "xihuan",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1;
			return b.zIndex && (h = b.zIndex), checkUrl(b.pSrc) && (g = "background:url(" + b.pSrc + ") center center no-repeat;"), '<a href="' + b.href + '" class="jgb abs J_CartPluginTrigger" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;" + g + "z-index:" + h + ';"></a>'
		},
		codeImport: function(a, b, c, d) {
			var h, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.pSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), g.href = c.attr("href"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), checkUrl(g.pSrc) && a.css({
				backgroundImage: "url(" + g.pSrc + ")"
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2wIebXs0aXXXXXXXX-39767794.png",
		autoSize: "yes",
		href: "http://detail.tmall.com/item.htm?id=22891196779"
	}],
	jeb: ['<div class="t-app" data-dblType="jeb"></div>',
	{
		tTitle: "二维码设置",
		tUrl: "ewm",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax");
			c.ajaxText("getewm", {
				ewmUrl: a.ewmUrl,
				ewmSize: a.ewmSize,
				ewmType: a.ewmType,
				ewmShop: a.ewmShop
			}, function(c) {
				a.ewmSrc = c, b.css({
					width: a.ewmSize,
					height: a.ewmSize,
					backgroundImage: "url(" + a.ewmSrc.replace(/\%7b(\S|\s)+\%7d/g, "1") + ")"
				}), b.attr("data-config", JSON.stringify(a))
			}), b.attr("data-config", JSON.stringify(a))
		},
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1;
			return b.zIndex && (h = b.zIndex), checkUrl(b.ewmSrc) && (g = "background:url(" + b.ewmSrc + ") center center no-repeat;"), '<div class="jeb abs" data-url="' + b.ewmUrl + '"data-urlType="' + b.ewmType + '" style="top:' + e + "px;left:" + f + "px;width:" + c + "px;height:" + d + "px;" + g + "z-index:" + h + ';"></div>'
		},
		codeImport: function(a, b, c, d) {
			var i, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.ewmSrc = c.css("background-image").replace(/^url|[\(\)]/g, ""), g.ewmUrl = c.attr("data-url"), g.ewmSize = c.width(), g.ewmType = c.attr("data-urlType") || "1", g.ewmSrc.indexOf("type=cs") >= 0 && (g.ewmShop = "2"), i = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(i)), a.css({
				backgroundImage: "url(" + g.ewmSrc.replace(/\%7b(\S|\s)+\%7d/g, "1") + ")"
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		ewmSrc: "",
		ewmType: "1",
		ewmShop: "1",
		ewmUrl: "http://detail.tmall.com//item.htm?id=22402460472",
		ewmSize: "90"
	}],
	jtsb: ['<div class="t-app" data-dblType="jtsb"></div>',
	{
		tTitle: "滚动文字设置",
		tUrl: "textscroll",
		tSubmit: function(a, b) {
			var c, d, e, f, g;
			b.html("").html('<marquee class="t-app-other" scrollamount="4" align="left" behavior="' + a.characterScrollMode + '" style="position:absolute;">请双击设置文字内容</marquee>').tResize(), c = "", d = "", e = b.width(), f = b.height(), b.removeClass("j-app-qswz"), "alternate" != a.characterScrollMode && ("2" == a.characterDirectionPosition ? ("right" == a.characterDirection && (d = "left: " + e + "px;"), "down" == a.characterDirection && (d = "top: " + f + "px;")) : ("left" == a.characterDirection && (d = "right: " + e + "px;"), "up" == a.characterDirection && (d = "bottom: " + f + "px;"))), ("down" == a.characterDirection || "up" == a.characterDirection) && (d += "left:-100%;"), g = "", a.characterLineThrough && "" != a.characterLineThrough && (g = a.characterLineThrough), a.characterLineUnder && "" != a.characterLineUnder && ("" == g ? g = a.characterLineUnder : g += " " + a.characterLineUnder), ("" != a.characterContent || "" != a.customContent) && (c = '<div style="position:relative;display:inline-block;white-space:nowrap;word-break:break-all;' + d + '">', b.children(D.appOtherCls).attr({
				direction: a.characterDirection,
				scrollamount: a.characterSpeed,
				scrolldelay: a.characterEffect
			}).html(c + a.characterContent + "</div>"), "text" == a.characterMode && b.addClass("j-app-qswz"), "img" == a.characterMode && b.children(D.appOtherCls).html(c + '<img src="' + a.characterContent + '" />' + "</div>"), "custom" == a.characterMode && b.children(D.appOtherCls).html(c + a.customContent + "</div>"), b.children(D.appOtherCls).children("div").css({
				fontSize: D.tParseInt(a.characterSize),
				lineHeight: D.tParseInt(a.characterSize) + 10 + "px",
				fontWeight: a.characterWeight,
				fontFamily: a.characterFont,
				color: a.characterColor,
				backgroundColor: RGBToHex(a.characterBgColor, ""),
				fontStyle: a.characterStyle || "normal"
			}), "" != g && b.children(D.appOtherCls).children("div").css("text-decoration", g)), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<marquee class="t-app-other" scrollamount="4" align="left">请双击设置文字内容</marquee>',
		codeExport: function(a) {
			var w, x, y, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = b.characterContent,
				h = "",
				i = "",
				j = "",
				k = "",
				l = "",
				m = "",
				n = "",
				o = "",
				p = "",
				q = "",
				r = "",
				s = "",
				t = "",
				u = "",
				v = !1;
			return "img" == b.characterMode && (g = '<img src="' + b.characterContent + '" />'), "custom" == b.characterMode && (g = b.customContent), b.characterLineThrough && "" != b.characterLineThrough && (l = "text-decoration:" + b.characterLineThrough), b.characterLineUnder && "" != b.characterLineUnder ? "" == l ? l = "text-decoration:" + b.characterLineUnder + ";" : l += " " + b.characterLineUnder + ";" : l += ";", w = a.children(D.appOtherCls).children("div"), x = w.width(), y = w.height(), b.characterColor = RGBToHex(b.characterColor, ""), "" != b.characterColor && (m = "color:" + b.characterColor + ";"), b.characterBgColor = RGBToHex(b.characterBgColor, ""), "" != b.characterBgColor && (q = "background-color:" + b.characterBgColor + ";"), "" != b.characterFont && (n = "font-family:" + b.characterFont + ";"), "" != b.characterWeight && (o = "font-weight:" + b.characterWeight + ";"), "" != b.characterSize && (p = "font-size:" + D.tParseInt(b.characterSize) + "px;"), "italic" == b.characterStyle && (r = "font-style:" + b.characterStyle + ";"), h = checkUrl(b.href) && "custom" != b.characterMode ? '<a style="' + m + n + o + p + q + r + l + '" href="' + b.href + '" target="' + b.hrefMode + '">' + g + "</a>" : g, "alternate" != b.characterScrollMode && ("2" == b.characterDirectionPosition ? ("left" == b.characterDirection && (s = "", t = "top:-" + y + "px;left:" + x + "px;", v = !0), "right" == b.characterDirection && (s = "left:" + x + "px;", t = "top:-" + y + "px;", u = "top:-" + 2 * y + "px;right:" + x + "px;"), "down" == b.characterDirection && (s = "top: " + y + "px;")) : ("left" == b.characterDirection && (s = "right:" + x + "px;", t = "top:-" + y + "px;", u = "top:-" + 2 * y + "px;left:" + x + "px;"), "right" == b.characterDirection && (s = "", t = "top:-" + y + "px;right:" + x + "px;", v = !0), "up" == b.characterDirection && (s = "bottom: " + y + "px;"))), i = '<div class="rel scrollfm" data-dire="' + b.characterDirectionPosition + '" style="width:' + x + "px;height:" + y + "px;line-height:" + y + "px;white-space:nowrap;word-break:break-all;" + s + m + n + o + p + q + r + l + '">' + h + "</div>", "scroll" != b.characterScrollMode || "left" != b.characterDirection && "right" != b.characterDirection || (j = '<div class="rel scrollfm1" style="width:' + x + "px;height:" + y + "px;line-height:" + y + "px;white-space:nowrap;word-break:break-all;" + t + m + n + o + p + q + r + l + '">' + h + "</div>", v || (k = '<div class="rel scrollfm2" style="width:' + x + "px;height:" + y + "px;line-height:" + y + "px;white-space:nowrap;word-break:break-all;" + u + m + n + o + p + q + r + l + '">' + h + "</div>")), '<div class="jtsb abs ' + b.appID + '" data-appid="' + b.appID + '" style="top:' + e + "px;left:" + f + "px;width:" + c + "px;height:" + d + 'px;z-index:1;overflow:hidden;" data-mode="' + b.characterMode + '"><marquee style="width:100%;height:100%;" scrollamount="' + b.characterSpeed + '" scrolldelay="' + b.characterEffect + '" direction="' + b.characterDirection + '" behavior="' + b.characterScrollMode + '">' + i + j + k + "</marquee></div>"
		},
		codeImport: function(a, b, c, d) {
			var i, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = c.children("marquee"),
				h = {};
			h.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), c.children("marquee").children("div.scrollfm").length > 0 && (g = c.children("marquee").children("div.scrollfm"), h.characterDirectionPosition = g.attr("data-dire") || "1"), h.characterSpeed = c.children("marquee").attr("scrollamount"), h.characterEffect = c.children("marquee").attr("scrolldelay"), h.characterScrollMode = c.children("marquee").attr("behavior"), h.characterDirection = c.children("marquee").attr("direction"), h.characterSize = g.css("font-size").replace(/px/g, ""), h.characterFont = g.css("font-family").replace(/'/g, ""), h.characterColor = RGBToHex(g.css("color")), h.characterBgColor = RGBToHex(g.css("background-color"), ""), h.characterWeight = g.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), h.characterStyle = g.css("font-style") || "normal", h.characterLineThrough = "", h.characterLineUnder = "", h.characterContent = g.html(), h.characterMode = "text", g.css("text-decoration").indexOf("line-through") >= 0 && (h.characterLineThrough = "line-through"), g.css("text-decoration").indexOf("underline") >= 0 && (h.characterLineUnder = "underline"), "undefined" != typeof c.find("a").attr("href") && (h.href = c.find("a").attr("href"), h.hrefMode = c.find("a").attr("target"), h.characterContent = c.find("a").html()), h.characterContent.indexOf("<img") >= 0 && (h.characterMode = "img", h.characterContent = c.find("img").attr("src")), "custom" == c.attr("data-mode") && (h.characterContent = "", h.characterMode = "custom", h.customContent = g.html()), "text" == e.characterMode && "" != h.characterContent && a.addClass("j-app-qswz"), i = $.extend(!0, e, h), a.attr("data-config", JSON.stringify(i)), D.appConfig["jtsb"][1].tSubmit(i, a), a.attr("appID", h.appID), d(f, h.appID)
		}
	}, {
		appID: "",
		href: "#",
		hrefMode: "_blank",
		characterMode: "text",
		characterContent: "",
		customContent: "",
		characterSize: "20",
		characterFont: "宋体",
		characterColor: "#990000",
		characterBgColor: "",
		characterWeight: "normal",
		characterStyle: "",
		characterLineUnder: "",
		characterLineThrough: "",
		characterSpeed: "4",
		characterEffect: "0",
		characterScrollMode: "scroll",
		characterDirection: "left",
		characterDirectionPosition: "1"
	}],
	jpb: ['<div class="t-app" data-dblType="jpb"></div>',
	{
		tTitle: "弹出层设置",
		tUrl: "popup",
		tSubmit: function(a, b) {
			b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				g = (a.width(), a.height(), D.tParseInt(a.css("top")), D.tParseInt(a.css("left")), 1);
			return b.zIndex && (g = b.zIndex), '<div class="J_TWidget jpb" data-widget-type="Popup" data-widget-config="{\'trigger\':\'.' + b.appIDSelect + "','align':{'node':'." + b.appIDAlignSelect + "','offset':[0,0],'points':[" + b.popupPosition.replace(/"/g, "&quot;") + ']}}" style="position:absolute;z-index:99;visibility: hidden;">' + b.customHtml + "</div>"
		},
		codeImport: function(a, b, c, d) {
			var i, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = JSON.parse(c.attr("data-widget-config").replace(/\'/g, '"')),
				h = {};
			c.attr("data-appid") ? h.appID = c.attr("data-appid") : D.setAppID(h), h.appIDSelect = g.trigger.replace(/\./g, ""), h.appIDAlignSelect = g.align.node.replace(/\./g, ""), h.popupPosition = "'" + g.align.points[0] + "', '" + g.align.points[1] + "'", h.customHtml = c.html(), i = $.extend(!0, e, h), a.attr("data-config", JSON.stringify(i)), a.attr("appID", h.appID), d(f, h.appID)
		}
	}, {
		appID: "",
		appIDSelect: "",
		appIDAlignSelect: "",
		popupPosition: "'tl','tl'",
		customHtml: ""
	}],
	jacb: ['<div class="t-app" data-dblType="jacb"></div>',
	{
		tTitle: "可关闭层设置",
		tUrl: "allowclose",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax"),
				d = a.childConfig[0].showBtnSrc;
			checkUrl(a.pSrc) ? (b.css({
				backgroundImage: "url(" + a.pSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.pSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : b.css({
				backgroundImage: "none"
			}), checkUrl(d) ? (b.children(D.appChildCls).css({
				backgroundImage: "url(" + d + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: d
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.children(D.appChildCls).width(c), d && b.children(D.appChildCls).height(d)
			})) : b.children(D.appChildCls).css({
				backgroundImage: "none"
			}), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<div class="t-app-child" data-dblType="jacb" data-attachType="jacbBtn"></div>',
		codeExport: function(a) {
			var i, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = D.setChildPos(a, a.children(D.appChildCls), !0),
				h = b.childConfig[0],
				j = 1,
				k = checkUrl(h.hideBtnSrc) ? "background:url(" + h.hideBtnSrc + ");" : "",
				l = checkUrl(h.showBtnSrc) ? "background:url(" + h.showBtnSrc + ");" : "",
				m = checkUrl(b.pSrc) ? "background:url(" + b.pSrc + ") center center no-repeat;" : "",
				n = "display:none;",
				o = '<li style="width:' + g.width + "px;height:" + g.height + "px;" + k + '" title="点击展开"></li><li class="hidden" style="width:' + g.width + "px;height:" + g.height + "px;" + l + '"></li>',
				p = '<div class="bd bdhtml abs" style="width:' + c + "px;height:" + d + "px;" + m + "overflow:hidden;" + n + '">' + b.customHtml + "</div>",
				q = 1;
			return "display" == b.acMode && (j = 0, n = "", o = '<li class="hidden" style="width:' + g.width + "px;height:" + g.height + "px;" + k + '" title="点击展开"></li><li style="width:' + g.width + "px;height:" + g.height + "px;" + l + '"></li>'), "d" != b.acdisplayMode && (e = 0, f = 0), "ptlink" == b.alclinkMode && (p = '<div class="bd" style="width:' + c + "px;height:" + d + "px;" + m + n + '"><a href="' + b.href + '" target="' + b.hrefMode + '" style="display:block;width:' + c + "px;height:" + d + 'px;"></a></div>'), b.zIndex && (q = b.zIndex), i = '<div class="jacb abs J_TWidget" style="top:' + e + "px;left:" + f + "px;width:" + c + "px;height:" + d + "px;z-index:" + q + ";\" data-widget-type=\"Tabs\" data-widget-config=\"{'triggerType': 'click','activeTriggerCls':'hidden','activeIndex':" + j + '}"><ul class="ks-switchable-nav abs" style="left:' + g.left + "px;top:" + g.top + 'px;z-index:2;">' + o + '</ul><div class="jdconcc abs" style="z-index:1;">' + p + '<div class="hide"></div></div></div>', "l" == b.acdisplayMode ? i = "<div class=\"J_TWidget\" data-widget-config=\"{'duration':0.1,'activeTriggerCls':'.tml-mask-b2b','interval':0.1,'effect':'scrollx','activeIndex':2,'navCls':'nav_zhicheng','contentCls':'content_zhicheng','autoplay':true}\" data-widget-type=\"Carousel\" style=\"position:relative;\"><ul class=\"content_zhicheng\" style=\"display: none; width: 999999px; left: 0px; position: absolute; \"><li  style=\"width: 950px; height: 10px; display: block; float: left; \">&nbsp;</li></ul><ul class=\"nav_zhicheng\"><div class=\"tm-mcBodyMask mui-mbar tml-mask-b2b\" style=\"left:auto;right:auto;visibility:visible;top:280px;right:50%;margin-right:520px;opacity:1;z-index:99;width:" + c + "px;height:" + d + 'px;">' + i + "</div></ul></div>" : "r" == b.acdisplayMode && (i = "<div class=\"J_TWidget\" data-widget-config=\"{'duration':0.1,'activeTriggerCls':'.tml-mask-b2b','interval':0.1,'effect':'scrollx','activeIndex':2,'navCls':'nav_zhicheng','contentCls':'content_zhicheng','autoplay':true}\" data-widget-type=\"Carousel\" style=\"position:relative;\"><ul class=\"content_zhicheng\" style=\"display: none; width: 999999px; left: 0px; position: absolute; \"><li  style=\"width: 950px; height: 10px; display: block; float: left; \">&nbsp;</li></ul><ul class=\"nav_zhicheng\"><div class=\"tm-mcBodyMask mui-mbar tml-mask-b2b\" style=\"left:auto;right:auto;visibility:visible;top:280px;left:50%;margin-left:520px;opacity:1;z-index:99;width:" + c + "px;height:" + d + 'px;">' + i + "</div></ul></div>"), i
		},
		codeImport: function(a, b, c, d) {
			var j, l, m, n, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				h = c.find(".ks-switchable-nav li:eq(0)"),
				i = c.find(".ks-switchable-nav li:eq(1)");
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.childConfig = [], g.childConfig[0] = {}, g.pSrc = c.find(".bd").css("background-image").replace(/^url|[\(\)]/g, ""), g.href = c.find(".bd a").attr("href"), g.hrefMode = c.find(".bd a").attr("target"), c.find(".bd").hasClass("bdhtml") && (g.alclinkMode = "gzlink", g.customHtml = c.find(".bdhtml").html()), g.childConfig[0].showBtnSrc = i.css("background-image").replace(/^url|[\(\)]/g, ""), g.childConfig[0].hideBtnSrc = h.css("background-image").replace(/^url|[\(\)]/g, ""), g.acdisplayMode = c.attr("tFilterMode") || "d", m = g.childConfig[0].showBtnSrc, l = i, i.hasClass("hidden") && (g.acMode = "hide", m = g.childConfig[0].hideBtnSrc, l = h), j = {
				width: l.width(),
				height: l.height(),
				left: D.tParseInt(c.find(".ks-switchable-nav").css("left")),
				top: D.tParseInt(c.find(".ks-switchable-nav").css("top"))
			}, n = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(n)), checkUrl(g.pSrc) && a.css({
				backgroundImage: "url(" + g.pSrc + ")"
			}), "d" != g.acdisplayMode && a.css({
				width: c.find(".jacb").width(),
				height: c.find(".jacb").height()
			}), checkUrl(m) && a.children(D.appChildCls).css({
				backgroundImage: "url(" + m + ")"
			}), a.children(D.appChildCls).css({
				top: j.top,
				left: j.left,
				width: j.width,
				height: j.height
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		pSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/T2vu7QXp8aXXXXXXXX-39767794.png",
		autoSize: "yes",
		acMode: "display",
		acdisplayMode: "d",
		alclinkMode: "ptlink",
		href: "#",
		hrefMode: "_self",
		customHtml: "",
		childConfig: [{
			attachID: "",
			showBtnSrc: "http://gtms02.alicdn.com/tps/i2/T1AnX0FsFXXXcSmcnf-38-38.png",
			hideBtnSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/T2BnCsXGXXXXXXXXXX-39767794.png",
			autoSize: "yes"
		}]
	}],
	jkgb: ['<div class="t-app" data-dblType="jkgb"></div>',
	{
		tTitle: "开关灯设置",
		tUrl: "kgd",
		tSubmit: function(a, b) {
			var e, c = require("scripts/tAjax"),
				d = a.childConfig;
			for (e in d) checkUrl(d[e].pSrc) ? (b.children(D.appChildCls + "[data-attachType='jkgbChild']:eq(" + e + ")").css({
				backgroundImage: "url(" + d[e].pSrc + ")"
			}), "yes" == d[e].autoSize &&
			function(a) {
				c.ajaxJson("gis", {
					img: d[a].pSrc
				}, function(c) {
					var d = c[0],
						e = c[1];
					d && b.children(D.appChildCls + "[data-attachType='jkgbChild']:eq(" + a + ")").width(d), e && b.children(D.appChildCls + "[data-attachType='jkgbChild']:eq(" + a + ")").height(e), a = void 0
				})
			}(e)) : b.children(D.appChildCls + "[data-attachType='jkgbChild']:eq(" + e + ")").css({
				backgroundImage: "none"
			});
			b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		tDynamic: '<div class="t-app-child" data-dblType="jkgb" data-attachType="jkgbChild"></div>',
		tDynamicConfig: {
			attachID: "",
			pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2O_GuXFlaXXXXXXXX-39767794.png",
			autoSize: "yes",
			href: "#",
			hrefMode: "_blank"
		},
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = "",
				h = 1;
			return b.zIndex && (h = b.zIndex), a.children(D.appChildCls).each(function(c) {
				var e = $(this),
					f = "",
					h = D.setChildPos(a, e, !0);
				checkUrl(b.childConfig[c].pSrc) && (f = "background:url(" + b.childConfig[c].pSrc + ") center center no-repeat;"), g += '<div class="b-box abs" style="left:' + h.left + "px;top:" + h.top + 'px;"><a target="' + b.childConfig[c].hrefMode + '" href="' + b.childConfig[c].href + '" class="pic" style="' + f + "width:" + h.width + "px;height:" + h.height + 'px;display:block;"></a></div>'
			}), '<div class="jkgb abs june-switch" style="width:' + c + "px;height:" + d + "px;left:" + f + "px;top:" + e + "px;z-index:" + h + ';">' + g + "</div>"
		},
		codeImport: function(a) {
			var j, k, l, b = require("scripts/childKaiGuanDengTuPian"),
				c = require("scripts/appManage"),
				d = a.find(".pic").length,
				e = a.width(),
				f = a.height(),
				g = D.tParseInt(a.css("top")),
				h = D.tParseInt(a.css("left")),
				i = {};
			for (i.childConfig = [], D.setAppID(i), $('<div class="t-app" data-dblType="jkgb"></div>').appendTo(D.june).tResize().css({
				left: h,
				top: g,
				width: e,
				height: f
			}).attr("data-config", JSON.stringify(i)).attr("appID", i.appID), j = $(D.appCls + "[appID='" + i.appID + "']"), k = 0; d > k; k++) l = {}, kgdpicleft = D.tParseInt(a.find(".b-box").eq(k).css("left")), kgdpictop = D.tParseInt(a.find(".b-box").eq(k).css("top")), l.pSrc = a.find(".pic").eq(k).css("background-image").replace(/^url|[\(\)]/g, ""), l.href = a.find(".pic").eq(k).attr("href"), l.width = a.find(".pic").eq(k).width(), l.height = a.find(".pic").eq(k).height(), function(a) {
				b.createAuto("jkgb", j, kgdpicleft, kgdpictop, a)
			}(l);
			c.callback("jkgb", i.appID)
		}
	}, {
		appID: "",
		childConfig: []
	}],
	jzzb: ['<div class="t-app" data-dblType="jzzb"></div>',
	{
		tTitle: "遮罩层设置",
		tUrl: "zzc",
		tSubmit: function(a, b) {
			var c = require("scripts/tAjax"),
				d = a.childConfig[0].zzcAttentionSrc,
				e = b.children(D.appOtherCls + ":eq(1)");
			checkUrl(a.zzcSrc) ? (b.css({
				backgroundImage: "url(" + a.zzcSrc + ")"
			}), e.css({
				backgroundImage: "url(" + a.zzcSrc + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: a.zzcSrc
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.width(c), d && b.height(d)
			})) : (b.css({
				backgroundImage: "none"
			}), e.css({
				backgroundImage: "none"
			})), checkUrl(d) ? (b.children(D.appChildCls).css({
				backgroundImage: "url(" + d + ")"
			}), "yes" == a.autoSize && c.ajaxJson("gis", {
				img: d
			}, function(a) {
				var c = a[0],
					d = a[1];
				c && b.children(D.appChildCls).width(c), d && b.children(D.appChildCls).height(d)
			})) : b.children(D.appChildCls).css({
				backgroundImage: "none"
			}), b.children(D.appOtherCls + ":eq(0)").html(a.customHtml), b.attr("data-config", JSON.stringify(a))
		},
		tContent: '<div class="t-app-other t-app-custom"></div><div class="t-app-other"></div><div class="t-app-child" data-dblType="jzzb" data-attachType="jzzbAttention"></div>',
		codeExport: function(a) {
			var m, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = D.setChildPos(a, a.children(D.appChildCls), !0),
				h = b.childConfig[0],
				i = "",
				j = "",
				k = "",
				l = 1;
			return "gzlink" == h.linkMode ? ("" != b.attentionID && (k = "j_CollectBrand"), m = '<a href="#" class="' + k + '" data-brandid="' + h.attentionID + '" style="display:block;width:' + g.width + "px;height:" + g.height + 'px;"></a>') : m = '<a href="' + h.href + '" target="' + h.hrefMode + '" style="display:block;width:' + g.width + "px;height:" + g.height + 'px;"></a>', b.zIndex && (l = b.zIndex), checkUrl(b.zzcSrc) && (i = "background:url(" + b.zzcSrc + ") center center no-repeat;"), checkUrl(h.zzcAttentionSrc) && (j = "background:url(" + h.zzcAttentionSrc + ") center center no-repeat;"), '<div class="jzzb abs J_TWidget" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + "px;z-index:1;\" data-widget-config=\"{'duration':0.8,'easing':'easeBoth','effect':'fade','delay':0.3,'triggerType':'click','activeTriggerCls':'hidden','autoplay':false}\" data-widget-type=\"Slide\"><div class=\"abs zzhtml\" style=\"z-index:1;\">" + b.customHtml + '</div><div class="jdconcc abs" style="z-index:2;"><div class="abs zzmc" style="width:' + c + "px;height:" + d + "px;" + i + '"></div><div class="abs" style="display:none;">' + b.customHtml + '</div></div><ul class="ks-switchable-nav abs" style="z-index:3;"><li class="abs"></li><li class="abs zzgzhtml" style="width:' + g.width + "px;height:" + g.height + "px;left:" + g.left + "px;top:" + g.top + "px;" + j + '">' + m + "</li></ul></div>"
		},
		codeImport: function(a, b, c, d) {
			var i, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {},
				h = D.getChildPos(c, c.find(".ks-switchable-nav .zzgzhtml"), !0);
			c.attr("data-appid") ? g.appID = c.attr("data-appid") : D.setAppID(g), g.childConfig = [], g.childConfig[0] = {}, g.zzcSrc = c.find(".jdconcc .zzmc").css("background-image").replace(/^url|[\(\)]/g, ""), g.customHtml = c.find(".zzhtml").html(), g.childConfig[0].zzcAttentionSrc = c.find(".ks-switchable-nav .zzgzhtml").css("background-image").replace(/^url|[\(\)]/g, ""), c.find(".ks-switchable-nav .zzgzhtml a").hasClass("j_CollectBrand") ? (g.childConfig[0].linkMode = "gzlink", g.childConfig[0].attentionID = c.find(".ks-switchable-nav .zzgzhtml a").attr("data-brandid") || "") : (g.childConfig[0].linkMode = "ptlink", g.childConfig[0].href = c.find(".ks-switchable-nav .zzgzhtml a").attr("href"), g.childConfig[0].hrefMode = c.find(".ks-switchable-nav .zzgzhtml a").attr("target")), i = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(i)), checkUrl(g.zzcSrc) && a.css({
				backgroundImage: "url(" + g.zzcSrc + ")"
			}), checkUrl(g.childConfig[0].zzcAttentionSrc) && a.children(D.appChildCls).css({
				backgroundImage: "url(" + g.childConfig[0].zzcAttentionSrc + ")"
			}), a.children(D.appChildCls).css({
				top: h.top,
				left: h.left,
				width: h.width,
				height: h.height
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		zzcSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2_OLcXRtXXXXXXXXX-39767794.png",
		autoSize: "yes",
		customHtml: '<div class="rel" style="position:relative;width:787px;height:118px;background:url(http://img04.taobaocdn.com/imgextra/i4/39767794/T2T0bdXKhXXXXXXXXX-39767794.png) top center repeat ;margin-left:0px;margin:0 auto;"><a class="jdb abs app85723870 mcblack  " href="#" title="" target="_blank" style="display:block;width:227px;height:80px;top:18px;left:21px;border-color:#000000;border-style:solid;border:none;z-index:1;" data-appid="app85723870"></a><a class="jdb abs app85737334 mcblack  " href="#" title="" target="_blank" style="display:block;width:226px;height:80px;top:18px;left:278px;border-color:#000000;border-style:solid;border:none;z-index:1;" data-appid="app85737334"></a><a class="jdb abs app85753278 mcblack  " href="#" title="" target="_blank" style="display:block;width:227px;height:80px;top:18px;left:541px;border-color:#000000;border-style:solid;border:none;z-index:1;" data-appid="app85753278"></a></div>',
		childConfig: [{
			attachID: "",
			zzcAttentionSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/T2zxzdXLVXXXXXXXXX-39767794.png",
			autoSize: "yes",
			linkMode: "gzlink",
			href: "#",
			hrefMode: "_blank",
			attentionID: ""
		}]
	}],
	jmdb: ['<div class="t-app" data-dblType="jmdb"></div>',
	{
		tTitle: "锚点设置",
		tUrl: "md",
		tSubmit: function(a, b) {
			b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		codeExport: function(a) {
			var b = JSON.parse(a.attr("data-config")),
				e = (a.width(), a.height(), D.tParseInt(a.css("top"))),
				f = D.tParseInt(a.css("left")),
				g = 1;
			return b.zIndex && (g = b.zIndex), '<a class="jmdb abs" name="' + b.anchorName + '" style="top:' + e + "px;left:" + f + 'px;"></a>'
		},
		codeImport: function(a, b, c, d) {
			var h, e = JSON.parse(a.attr("data-config")),
				f = a.attr("data-dblType"),
				g = {};
			g.anchorName = c.attr("name"), g.anchorName.indexOf("junemd") >= 0 ? D.setAppID(g) : g.appID = g.anchorName.replace(/june-anchor/g, ""), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), a.css({
				width: 24,
				height: 24
			}), a.attr("appID", g.appID), d(f, g.appID)
		}
	}, {
		appID: "",
		anchorName: ""
	}],
	jib: ['<div class="t-app" data-dblType="jib"></div>',
	{
		tTitle: "宝贝列表设置",
		tUrl: "item",
		tSubmit: function(a, b) {
			var c, d, e, f, g, h, i, j, k, l, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
			if (b.attr("data-config", JSON.stringify(a)), a = D.toClear(a), c = require("scripts/tAjax"), d = require("scripts/childBaoBei"), e = a.sWidth, f = a.sHeight, g = a.mHeight, h = a.itemCount < 1 ? 1 : a.itemCount, i = a.itemColumn, j = a.columnSpace, k = a.lineSpace, l = Math.ceil(h / i), b.children("[data-attachType='jibBg']"), b.children("[data-attachType='jibPanel']"), o = b.children("[data-attachType='jibTitle']"), p = b.children("[data-attachType='jibPrefix']"), q = b.children("[data-attachType='jibPrice']"), r = b.children("[data-attachType='jibDiscountPrefix']"), s = b.children("[data-attachType='jibDiscountPrice']"), t = b.children("[data-attachType='jibSalePrefix']"), u = b.children("[data-attachType='jibSale']"), v = b.children("[data-attachType='jibBtn']"), w = [], b.children("[attachID]").each(function() {
				w.push($(this).attr("attachID"))
			}), b.html("").tResize({
				tSwitch: !1
			}).css({
				width: (e + j) * i - j,
				height: (f + g + k) * l - k
			}), x = {
				attachIDArray: w,
				titleTop: D.tParseInt(o.css("top")),
				titleLeft: D.tParseInt(o.css("left")),
				prefixTop: D.tParseInt(p.css("top")),
				prefixLeft: D.tParseInt(p.css("left")),
				priceTop: D.tParseInt(q.css("top")),
				priceLeft: D.tParseInt(q.css("left")),
				_prefixTop: D.tParseInt(r.css("top")),
				_prefixLeft: D.tParseInt(r.css("left")),
				_priceTop: D.tParseInt(s.css("top")),
				_priceLeft: D.tParseInt(s.css("left")),
				salePrefixTop: D.tParseInt(t.css("top")),
				salePrefixLeft: D.tParseInt(t.css("left")),
				saleTop: D.tParseInt(u.css("top")),
				saleLeft: D.tParseInt(u.css("left")),
				btnTop: D.tParseInt(v.css("top")),
				btnLeft: D.tParseInt(v.css("left")),
				btnWidth: v.width(),
				btnHeight: v.height()
			}, checkUrl(a.btnSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2n_RGaFXXXXajXXXXXXXXXXXX_!!39767794.png" != a.btnSrc) c.ajaxJson("gis", {
				img: a.btnSrc
			}, function(a) {
				var c, l, m, n, o;
				for (a && (x.btnWidth = a[0], x.btnHeight = a[1]), c = 0; h > c; c++) l = c % i, m = D.tParseInt(c / i), n = (e + j) * l, o = (f + g + k) * m, d.createAuto("jib", b, n, o, c, x)
			});
			else for (y = 0; h > y; y++) z = y % i, A = D.tParseInt(y / i), B = (e + j) * z, C = (f + g + k) * A, d.createAuto("jib", b, B, C, y, x)
		},
		tAppArray: ["jibBg", "jibPanel", "jibTitle", "jibPrefix", "jibPrice", "jibDiscountPrefix", "jibDiscountPrice", "jibSalePrefix", "jibSale", "jibBtn"],
		tDynamic: '<div class="t-app-other t-app-jib" data-dblType="jib" data-attachType="jibBg"></div><div class="t-app-other t-app-jib" data-dblType="jib" data-attachType="jibPanel"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibTitle"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibPrefix"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibPrice"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibDiscountPrefix"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibDiscountPrice"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibSalePrefix"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibSale"></div><div class="t-app-child" data-dblType="jib" data-attachType="jibBtn"></div>',
		tDynamicConfig: {
			attachID: ""
		},
		tContent: "",
		codeExport: function(a) {
			var q, r, s, t, u, v, w, x, y, z, A, b = JSON.parse(a.attr("data-config")),
				c = a.width(),
				d = a.height(),
				e = D.tParseInt(a.css("top")),
				f = D.tParseInt(a.css("left")),
				g = D.appConfig["jib"][1]["tAppArray"],
				h = b.href.split(","),
				i = b.pSrc.split(","),
				j = b.oppoSrc.split(","),
				k = b.titleInfo.split(","),
				l = b.priceInfo.split(","),
				m = b._priceInfo.split(","),
				n = b.saleInfo.split(","),
				o = "_" + b.pSrcSize + "x" + b.pSrcSize + ".jpg",
				p = 1;
			for (b = D.toClear(b), b.zIndex && (p = b.zIndex), itemHtml = "", q = 0; q < b.itemCount; q++) a: for (r = 0; r < g.length; r++) if (s = a.children("[data-attachType='" + g[r] + "']:eq(" + q + ")"), t = D.getChildPos(a, s, !0), u = "", v = "", w = "", x = "", y = "", z = "", A = "", "jibBg" == g[r] || "jibTitle" == g[r] || "jibBtn" == g[r]) {
				if ("jibBg" == g[r] && (checkUrl(i[q]) && (w = "background:url(" + i[q] + o + ") center center no-repeat;"), checkUrl(j[q]) && (v = " imghover", "yes" == b.oppoSwitch && (u = '<img class="abs" src="' + j[q] + o + '" style="width:' + b.pSrcSize + "px;height:" + b.pSrcSize + "px;left:" + (t.width - b.pSrcSize) / 2 + "px;top:" + (t.height - b.pSrcSize) / 2 + 'px" />'))), "jibBtn" == g[r] && "yes" == b.btnSwitch) checkUrl(b.btnSrc) && (w = "background:url(" + b.btnSrc + ") center center no-repeat;"), checkUrl(b.btnHoverSrc) && (v = " imghover", u = '<img src="' + b.btnHoverSrc + '" style="width:100%;height:100%;" />');
				else if ("jibBtn" == g[r] && "yes" != b.btnSwitch) continue a;
				if ("jibTitle" == g[r] && "yes" == b.titleSwitch) y = "text-indent: 5px;", checkUrl(b.titleBgImage) && (w = "background:url(" + b.titleBgImage + ") center center no-repeat;"), b.titleBgColor = RGBToHex(b.titleBgColor, ""), "" != b.titleBgColor && (x = "background-color:" + b.titleBgColor + ";"), u = k[q], b.titleColor = RGBToHex(b.titleColor, ""), "" != b.titleColor && (y += "color:" + b.titleColor + ";"), "" != b.titleFont && (y += "font-family:" + b.titleFont + ";"), "" != b.titleWeight && (y += "font-weight:" + b.titleWeight + ";"), "" != b.titleSize && (y += "font-size:" + D.tParseInt(b.titleSize) + "px;"), "" != b.titleLineHeight && (y += "line-height:" + D.tParseInt(b.titleLineHeight) + "px;");
				else if ("jibBtn" == g[r] && "yes" != b.btnSwitch) continue a;
				itemHtml += '<a class="abs ' + g[r] + v + '" href="' + h[q] + '" target="' + b.hrefMode + '" style="display:block;overflow:hidden;width:' + t.width + "px;height:" + t.height + "px;top:" + t.top + "px;left:" + t.left + "px;" + w + x + y + '">' + u + "</a>"
			} else {
				if ("jibPanel" == g[r] && (checkUrl(b.bgImage) && (w = "background:url(" + b.bgImage + ") center center no-repeat;"), b.bgColor = RGBToHex(b.bgColor, ""), "" != b.bgColor && (x = "background-color:" + b.bgColor + ";"), A = "width:" + t.width + "px;height:" + t.height + "px;"), "jibPrefix" == g[r] && "yes" == b.prefixSwitch) z = b.prefixInfo, b.prefixColor = RGBToHex(b.prefixColor, ""), "" != b.prefixColor && (y += "color:" + b.prefixColor + ";"), "" != b.prefixFont && (y += "font-family:" + b.prefixFont + ";"), "" != b.prefixWeight && (y += "font-weight:" + b.prefixWeight + ";"), "" != b.prefixSize && (y += "font-size:" + D.tParseInt(b.prefixSize) + "px;"), "" != b.prefixDecoration && (y += "text-decoration:" + b.prefixDecoration + ";");
				else if ("jibPrefix" == g[r] && "yes" != b.prefixSwitch) continue a;
				if ("jibPrice" == g[r] && "yes" == b.priceSwitch)"" != l[q] && (z = D.tParseFloat(l[q]).toFixed(D.tParseInt(b.priceFixed))), b.priceColor = RGBToHex(b.priceColor, ""), "" != b.priceColor && (y += "color:" + b.priceColor + ";"), "" != b.priceFont && (y += "font-family:" + b.priceFont + ";"), "" != b.priceWeight && (y += "font-weight:" + b.priceWeight + ";"), "" != b.priceSize && (y += "font-size:" + D.tParseInt(b.priceSize) + "px;"), "" != b.priceDecoration && (y += "text-decoration:" + b.priceDecoration + ";");
				else if ("jibPrice" == g[r] && "yes" != b.priceSwitch) continue a;
				if ("jibDiscountPrefix" == g[r] && "yes" == b._prefixSwitch) z = b._prefixInfo, b._prefixColor = RGBToHex(b._prefixColor, ""), "" != b._prefixColor && (y += "color:" + b._prefixColor + ";"), "" != b._prefixFont && (y += "font-family:" + b._prefixFont + ";"), "" != b._prefixWeight && (y += "font-weight:" + b._prefixWeight + ";"), "" != b._prefixSize && (y += "font-size:" + D.tParseInt(b._prefixSize) + "px;");
				else if ("jibDiscountPrefix" == g[r] && "yes" != b._prefixSwitch) continue a;
				if ("jibDiscountPrice" == g[r] && "yes" == b._priceSwitch)"" != m[q] && (z = D.tParseFloat(m[q]).toFixed(D.tParseInt(b._priceFixed))), b._priceColor = RGBToHex(b._priceColor, ""), "" != b._priceColor && (y += "color:" + b._priceColor + ";"), "" != b._priceFont && (y += "font-family:" + b._priceFont + ";"), "" != b._priceWeight && (y += "font-weight:" + b._priceWeight + ";"), "" != b._priceSize && (y += "font-size:" + D.tParseInt(b._priceSize) + "px;");
				else if ("jibDiscountPrice" == g[r] && "yes" != b._priceSwitch) continue a;
				if ("jibSalePrefix" == g[r] && "yes" == b.salePrefixSwitch) z = b.salePrefixInfo, b.salePrefixColor = RGBToHex(b.salePrefixColor, ""), "" != b.salePrefixColor && (y += "color:" + b.salePrefixColor + ";"), "" != b.salePrefixFont && (y += "font-family:" + b.salePrefixFont + ";"), "" != b.salePrefixWeight && (y += "font-weight:" + b.salePrefixWeight + ";"), "" != b.salePrefixSize && (y += "font-size:" + D.tParseInt(b.salePrefixSize) + "px;");
				else if ("jibSalePrefix" == g[r] && "yes" != b.salePrefixSwitch) continue a;
				if ("jibSale" == g[r] && "yes" == b.saleSwitch) z = n[q] + "件", b.saleColor = RGBToHex(b.saleColor, ""), "" != b.saleColor && (y += "color:" + b.saleColor + ";"), "" != b.saleFont && (y += "font-family:" + b.saleFont + ";"), "" != b.saleWeight && (y += "font-weight:" + b.saleWeight + ";"), "" != b.saleSize && (y += "font-size:" + D.tParseInt(b.saleSize) + "px;");
				else if ("jibSale" == g[r] && "yes" != b.saleSwitch) continue a;
				itemHtml += '<div class="abs ' + g[r] + '" style="' + A + "top:" + t.top + "px;left:" + t.left + "px;" + w + x + y + '">' + z + "</div>"
			}
			return '<div class="jib abs" data-brandid="' + b.appID + '" data-t-size="' + b.pSrcSize + '" style="width:' + c + "px;height:" + d + "px;top:" + e + "px;left:" + f + 'px;z-index:1;">' + itemHtml + "</div>"
		},
		codeImport: function(a, b, c, d) {
			var s, t, u, v, w, x, y, z, A, B, C, E, e = JSON.parse(a.attr("data-config")),
				f = require("scripts/childBaoBei"),
				g = a.attr("data-dblType"),
				h = c.children("a.jibBg"),
				i = c.children("div.jibPanel"),
				j = c.children("a.jibTitle"),
				k = c.children("div.jibPrefix"),
				l = c.children("div.jibPrice"),
				m = c.children("div.jibDiscountPrefix"),
				n = c.children("div.jibDiscountPrice"),
				o = c.children("div.jibSalePrefix"),
				p = c.children("div.jibSale"),
				q = c.children("a.jibBtn"),
				r = {};
			for (c.attr("data-appid") ? r.appID = c.attr("data-appid") : D.setAppID(r), r.columnSpace = "", r.lineSpace = "", r.pSrcSize = c.attr("data-t-size") || "240", s = D.tParseInt(r.pSrcSize), t = 1, r.sWidth = h.width(), r.sHeight = h.height(), r.mHeight = i.height(), r.itemCount = h.length, r.itemColumn = D.tParseInt(c.width() / r.sWidth), t = Math.ceil(r.itemCount / r.itemColumn), r.itemColumn > 1 && (r.columnSpace = c.width() % r.sWidth / (r.itemColumn - 1)), t > 1 && (r.lineSpace = c.height() % (r.sHeight + r.mHeight) / (t - 1)), r.href = [], r.pSrc = [], r.oppoSrc = [], r.titleInfo = [], r.priceInfo = [], r._priceInfo = [], r.saleInfo = [], u = 0; u < r.itemCount; u++) r.href.push(""), r.pSrc.push(""), r.oppoSrc.push(""), r.titleInfo.push(""), r.priceInfo.push(""), r._priceInfo.push(""), r.saleInfo.push("");
			for (r.oppoSwitch = "no", r.titleSwitch = "no", r.prefixSwitch = "no", r.priceSwitch = "no", r._prefixSwitch = "no", r._priceSwitch = "no", r.saleSwitch = "no", r.salePrefixSwitch = "no", r.btnSwitch = "no", r.priceFixed = 0, r._priceFixed = 0, h.each(function(a) {
				var c = $(this),
					d = c.children("img");
				r.href[a] = c.attr("href"), r.hrefMode = c.attr("target"), r.pSrc[a] = c.css("background-image").replace(/^url|[\(\)]/g, "").replace("_" + s + "x" + s + ".jpg", ""), d.length > 0 && (r.oppoSwitch = "yes", r.oppoSrc[a] = d.attr("src").replace("_" + s + "x" + s + ".jpg", ""))
			}), r.bgColor = RGBToHex(i.css("background-color"), ""), r.bgImage = i.css("background-image").replace(/^url|[\(\)]/g, ""), j.length > 0 && (r.titleSwitch = "yes", r.titleWidth = j.width(), r.titleHeight = j.height(), r.titleBgColor = RGBToHex(j.css("background-color"), ""), r.titleBgImage = j.css("background-image").replace(/^url|[\(\)]/g, ""), r.titleColor = RGBToHex(j.css("color"), ""), r.titleFont = j.css("font-family").replace(/'/g, ""), r.titleSize = j.css("font-size").replace(/px/g, ""), r.titleWeight = j.css("font-weight"), r.titleLineHeight = j.css("line-height").replace(/px/g, ""), j.each(function(a) {
				var c = $(this);
				r.titleInfo[a] = c.html()
			})), k.length > 0 && (r.prefixSwitch = "yes", r.prefixColor = RGBToHex(k.css("color"), ""), r.prefixFont = k.css("font-family").replace(/'/g, ""), r.prefixSize = k.css("font-size").replace(/px/g, ""), r.prefixWeight = k.css("font-weight"), r.prefixDecoration = k.css("text-decoration"), r.prefixInfo = k.html()), l.length > 0 && (r.priceSwitch = "yes", r.priceColor = RGBToHex(l.css("color"), ""), r.priceFont = l.css("font-family").replace(/'/g, ""), r.priceSize = l.css("font-size").replace(/px/g, ""), r.priceWeight = l.css("font-weight"), r.priceDecoration = l.css("text-decoration"), v = l.html().split("."), v.length > 1 && (r.priceFixed = v[1].length), l.each(function(a) {
				var c = $(this);
				r.priceInfo[a] = c.html()
			})), m.length > 0 && (r._prefixSwitch = "yes", r._prefixColor = RGBToHex(m.css("color"), ""), r._prefixFont = m.css("font-family").replace(/'/g, ""), r._prefixSize = m.css("font-size").replace(/px/g, ""), r._prefixWeight = m.css("font-weight"), r._prefixInfo = m.html()), n.length > 0 && (r._priceSwitch = "yes", r._priceColor = RGBToHex(n.css("color"), ""), r._priceFont = n.css("font-family").replace(/'/g, ""), r._priceSize = n.css("font-size").replace(/px/g, ""), r._priceWeight = n.css("font-weight"), w = n.html().split("."), w.length > 1 && (r._priceFixed = w[1].length), n.each(function(a) {
				var c = $(this);
				r._priceInfo[a] = c.html()
			})), o.length > 0 && (r.salePrefixSwitch = "yes", r.salePrefixColor = RGBToHex(o.css("color"), ""), r.salePrefixFont = o.css("font-family").replace(/'/g, ""), r.salePrefixSize = o.css("font-size").replace(/px/g, ""), r.salePrefixWeight = o.css("font-weight"), r.salePrefixInfo = o.html()), p.length > 0 && (r.saleSwitch = "yes", r.saleColor = RGBToHex(p.css("color"), ""), r.saleFont = p.css("font-family").replace(/'/g, ""), r.saleSize = p.css("font-size").replace(/px/g, ""), r.saleWeight = p.css("font-weight"), p.each(function(a) {
				var c = $(this);
				r.saleInfo[a] = c.html().replace(/件/g, "")
			})), q.length > 0 && (r.btnSwitch = "yes", r.btnSrc = q.css("background-image").replace(/^url|[\(\)]/g, ""), _tBtnImg = q.children("img"), _tBtnImg.length > 0 && (r.btnHoverSrc = _tBtnImg.attr("src"))), r.href = r.href.join(","), r.pSrc = r.pSrc.join(","), r.oppoSrc = r.oppoSrc.join(","), r.titleInfo = r.titleInfo.join(","), r.priceInfo = r.priceInfo.join(","), r._priceInfo = r._priceInfo.join(","), r.saleInfo = r.saleInfo.join(","), x = $.extend(!0, e, r), a.attr("data-config", JSON.stringify(x)), e = D.toClear(x), a.attr("appID", r.appID), a.html("").tResize({
				tSwitch: !1
			}).css({
				width: c.width(),
				height: c.height()
			}), y = {
				titleTop: D.tParseInt(j.css("top")),
				titleLeft: D.tParseInt(j.css("left")),
				prefixTop: D.tParseInt(k.css("top")),
				prefixLeft: D.tParseInt(k.css("left")),
				priceTop: D.tParseInt(l.css("top")),
				priceLeft: D.tParseInt(l.css("left")),
				_prefixTop: D.tParseInt(m.css("top")),
				_prefixLeft: D.tParseInt(m.css("left")),
				_priceTop: D.tParseInt(n.css("top")),
				_priceLeft: D.tParseInt(n.css("left")),
				salePrefixTop: D.tParseInt(o.css("top")),
				salePrefixLeft: D.tParseInt(o.css("left")),
				saleTop: D.tParseInt(p.css("top")),
				saleLeft: D.tParseInt(p.css("left")),
				btnTop: D.tParseInt(q.css("top")),
				btnLeft: D.tParseInt(q.css("left")),
				btnWidth: D.tParseInt(q.css("width")),
				btnHeight: D.tParseInt(q.css("height"))
			}, z = 0; z < e.itemCount; z++) A = z % e.itemColumn, B = D.tParseInt(z / e.itemColumn), C = (e.sWidth + e.columnSpace) * A, E = (e.sHeight + e.mHeight + e.lineSpace) * B, f.createAuto("jib", a, C, E, z, y);
			d(g, r.appID)
		}
	}, {
		appID: "",
		itemCount: "5",
		itemColumn: "3",
		columnSpace: "10",
		lineSpace: "10",
		href: ",,,,",
		hrefMode: "_blank",
		pSrc: "http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg",
		pSrcSize: "240",
		oppoSrc: ",,,,",
		sWidth: "240",
		sHeight: "240",
		bgColor: "",
		bgImage: "",
		mHeight: "60",
		oppoSwitch: "yes",
		titleSwitch: "yes",
		prefixSwitch: "yes",
		priceSwitch: "yes",
		_prefixSwitch: "yes",
		_priceSwitch: "yes",
		saleSwitch: "no",
		salePrefixSwitch: "no",
		btnSwitch: "yes",
		titleInfo: ",,,,",
		titleWidth: "212",
		titleHeight: "24",
		titleBgImage: "",
		titleBgColor: "#c70c66",
		titleColor: "#ffffff",
		titleFont: "微软雅黑",
		titleSize: "12",
		titleWeight: "normal",
		titleLineHeight: "24",
		prefixInfo: "原价 ￥",
		prefixColor: "#aaaaaa",
		prefixFont: "微软雅黑",
		prefixSize: "12",
		prefixWeight: "normal",
		prefixDecoration: "none",
		priceInfo: ",,,,",
		priceColor: "#aaaaaa",
		priceFont: "微软雅黑",
		priceSize: "12",
		priceWeight: "normal",
		priceDecoration: "line-through",
		priceFixed: "2",
		_prefixInfo: "促销价 ￥",
		_prefixColor: "#d6075a",
		_prefixFont: "微软雅黑",
		_prefixSize: "12",
		_prefixWeight: "normal",
		_priceInfo: ",,,,",
		_priceColor: "#d6075a",
		_priceFont: "Times New Roman",
		_priceSize: "24",
		_priceWeight: "normal",
		_priceFixed: "2",
		salePrefixInfo: "已售出",
		salePrefixColor: "#666666",
		salePrefixFont: "微软雅黑",
		salePrefixSize: "12",
		salePrefixWeight: "normal",
		saleInfo: ",,,,",
		saleColor: "#666666",
		saleFont: "微软雅黑",
		saleSize: "12",
		saleWeight: "normal",
		btnSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2n_RGaFXXXXajXXXXXXXXXXXX_!!39767794.png",
		btnHoverSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2KfdFaFXXXXX8XpXXXXXXXXXX_!!39767794.png",
		childConfig: []
	}],
	jibList: ['<div class="t-app" data-dblType="jibList"></div>',
	{
		tTitle: "宝贝列表设置",
		tUrl: "textscroll",
		tSubmit: function(a, b) {
			b.attr("data-config", JSON.stringify(a))
		},
		tContent: "",
		codeExport: function() {},
		codeImport: function() {}
	}, {
		appID: "",
		itemCount: "3",
		itemColumn: "3",
		columnSpace: "20",
		lineSpace: "10",
		itemHref: "",
		itemSrc: "",
		itemImgSize: "310",
		itemHoverSrc: "",
		bgColor: "#ff9900",
		title: "",
		childConfig: [{
			attachID: "",
			bgColor: "#ff9900"
		}, {
			attachID: "",
			characterColor: "#000000",
			characterFont: "微软雅黑",
			characterSize: "12",
			characterWeight: "normal"
		}, {
			attachID: "",
			priceInfo: "RMB",
			characterColor: "#000000",
			characterFont: "微软雅黑",
			characterSize: "12",
			characterWeight: "normal"
		}, {
			attachID: "",
			priceInfo: "RMB",
			characterColor: "#000000",
			characterFont: "微软雅黑",
			characterSize: "12",
			characterWeight: "normal"
		}, {
			attachID: "",
			btnSrc: "",
			btnHoverSrc: ""
		}]
	}],
	juneCustom: ['<div class="t-app junehtml" data-dblType="juneCustom"></div>',
	{
		tTitle: "自定义内容",
		codeExport: function(a) {
			a.tResize.destory();
			var b = a.prop("outerHTML");
			return a.tResize({
				tSwitch: !1
			}), b
		},
		codeImport: function(a) {
			var b = a.html(),
				c = require("scripts/action");
			D.june.children(".junehtml").length <= 0 ? $(D.appConfig["juneCustom"][0]).html(b).tResize({
				tSwitch: !1
			}).prependTo(D.june) : D.june.children(".junehtml").html(b), c.create("junehtml", D.june.children(".junehtml"))
		}
	}, {
		appID: ""
	}],
	jsfb: ['<div class="t-app" data-dblType="jsfb"></div>',
	{
		tContent: "",
		tSubmit: function() {},
		codeExport: function(a) {
			var b = "",
				c = D.tParseInt(a.css("left")),
				d = D.tParseInt(a.css("top"));
			return a.children(".t-app-jsfb").each(function() {
				var a = $(this);
				b += D.appConfig["jcb"][1].codeExport(a)
			}), '<div class="jsfb abs" style="top:' + d + "px;left:" + c + 'px;">' + b + "</div>"
		},
		codeImport: function(a) {
			var e, b = require("scripts/drawWenZi"),
				c = require("scripts/appManage"),
				d = D.appConfig["jsfb"];
			D.setAppID(d[2]), $(d[0]).appendTo(D.june).attr("data-config", JSON.stringify(d[2])).attr("appID", d[2].appID).css({
				left: D.tParseInt(a.css("left")),
				top: D.tParseInt(a.css("top"))
			}), e = $(D.appCls + "[appID='" + d[2].appID + "']"), a.children(".jsfbchild").each(function() {
				var c, a = $(this),
					f = a.width(),
					g = a.height(),
					h = D.tParseInt(a.css("top")),
					i = D.tParseInt(a.css("left")),
					j = b.create("jcb");
				c = JSON.parse(j.attr("data-config")), j.addClass("t-app-jsfb").appendTo(e).attr("jsfbID", d[2].appID).css({
					width: f,
					height: g,
					top: h,
					left: i
				}), D.appConfig["jcb"][1].codeImport(j, d[2].appID, a)
			}), c.callback("jsfb", d[2].appID)
		}
	}, {
		appID: ""
	}]
}, D.imContrast = ["a.jdb", "div.jdb", "a.job", "a.jbob", "div.jbob", "div.jcb", "div.jdlb", "div.jcdb", "div.jfsb", "div.jsb", "div.jvb", "div.jwb", "div.jspb", "a.jspb", "div.jab", "input.jab", "div.jtsb", "div.jpb", "a.jmdb"], define("scripts/checkStyle.js", function(a) {
	var b = '.user-june .june-fadein{opacity:0;-ms-filter:"alpha(opacity=0)";filter:"alpha(opacity=0)"}.user-june .rel:hover .june-fadein{opacity:1;-ms-filter:"alpha(opacity=100)";filter:"alpha(opacity=100)"}.user-june .june-fadeout{opacity:1;-ms-filter:"alpha(opacity=100)";filter:"alpha(opacity=100)"}.user-june .rel:hover .june-fadeout{opacity:0;-ms-filter:"alpha(opacity=0)";filter:"alpha(opacity=0)"}.user-june .rel:hover .june-rx10{-webkit-transform:translate(-10px,0);-ms-transform:translate(-10px,0);transform:translate(-10px,0)}.user-june .rel:hover .june-rx20{-webkit-transform:translate(-20px,0);-ms-transform:translate(-20px,0);transform:translate(-20px,0)}.user-june .rel:hover .june-rx30{-webkit-transform:translate(-30px,0);-ms-transform:translate(-30px,0);transform:translate(-30px,0)}.user-june .rel:hover .june-rx40{-webkit-transform:translate(-40px,0);-ms-transform:translate(-40px,0);transform:translate(-40px,0)}.user-june .rel:hover .june-rx50{-webkit-transform:translate(-50px,0);-ms-transform:translate(-50px,0);transform:translate(-50px,0)}.user-june .rel:hover .june-rx80{-webkit-transform:translate(-80px,0);-ms-transform:translate(-80px,0);transform:translate(-80px,0)}.user-june .rel:hover .june-rx120{-webkit-transform:translate(-120px,0);-ms-transform:translate(-120px,0);transform:translate(-120px,0)}.user-june .rel:hover .june-rx200{-webkit-transform:translate(-200px,0);-ms-transform:translate(-200px,0);transform:translate(-200px,0)}.user-june .rel:hover .june-lx10{-webkit-transform:translate(10px,0);-ms-transform:translate(10px,0);transform:translate(10px,0)}.user-june .rel:hover .june-lx20{-webkit-transform:translate(20px,0);-ms-transform:translate(20px,0);transform:translate(20px,0)}.user-june .rel:hover .june-lx30{-webkit-transform:translate(30px,0);-ms-transform:translate(30px,0);transform:translate(30px,0)}.user-june .rel:hover .june-lx40{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0)}.user-june .rel:hover .june-lx50{-webkit-transform:translate(50px,0);-ms-transform:translate(50px,0);transform:translate(50px,0)}.user-june .rel:hover .june-lx80{-webkit-transform:translate(80px,0);-ms-transform:translate(80px,0);transform:translate(80px,0)}.user-june .rel:hover .june-lx120{-webkit-transform:translate(120px,0);-ms-transform:translate(120px,0);transform:translate(120px,0)}.user-june .rel:hover .june-lx200{-webkit-transform:translate(200px,0);-ms-transform:translate(200px,0);transform:translate(200px,0)}.user-june .rel:hover .june-uy10{-webkit-transform:translate(0,-10px);-ms-transform:translate(0,-10px);transform:translate(0,-10px)}.user-june .rel:hover .june-uy20{-webkit-transform:translate(0,-20px);-ms-transform:translate(0,-20px);transform:translate(0,-20px)}.user-june .rel:hover .june-uy30{-webkit-transform:translate(0,-30px);-ms-transform:translate(0,-30px);transform:translate(0,-30px)}.user-june .rel:hover .june-uy40{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px)}.user-june .rel:hover .june-uy50{-webkit-transform:translate(0,-50px);-ms-transform:translate(0,-50px);transform:translate(0,-50px)}.user-june .rel:hover .june-uy80{-webkit-transform:translate(0,-80px);-ms-transform:translate(0,-80px);transform:translate(0,-80px)}.user-june .rel:hover .june-uy120{-webkit-transform:translate(0,-120px);-ms-transform:translate(0,-120px);transform:translate(0,-120px)}.user-june .rel:hover .june-uy200{-webkit-transform:translate(0,-200px);-ms-transform:translate(0,-200px);transform:translate(0,-200px)}.user-june .rel:hover .june-dy10{-webkit-transform:translate(0,10px);-ms-transform:translate(0,10px);transform:translate(0,10px)}.user-june .rel:hover .june-dy20{-webkit-transform:translate(0,20px);-ms-transform:translate(0,20px);transform:translate(0,20px)}.user-june .rel:hover .june-dy30{-webkit-transform:translate(0,30px);-ms-transform:translate(0,30px);transform:translate(0,30px)}.user-june .rel:hover .june-dy40{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px)}.user-june .rel:hover .june-dy50{-webkit-transform:translate(0,50px);-ms-transform:translate(0,50px);transform:translate(0,50px)}.user-june .rel:hover .june-dy80{-webkit-transform:translate(0,80px);-ms-transform:translate(0,80px);transform:translate(0,80px)}.user-june .rel:hover .june-dy120{-webkit-transform:translate(0,120px);-ms-transform:translate(0,120px);transform:translate(0,120px)}.user-june .rel:hover .june-dy200{-webkit-transform:translate(0,200px);-ms-transform:translate(0,200px);transform:translate(0,200px)}.user-june .rel:hover .june-r360{-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}.user-june .rel:hover .june-r720{-moz-transform:rotate(720deg);-o-transform:rotate(720deg);-webkit-transform:rotate(720deg);transform:rotate(720deg)}.user-june .rel .june-move-rx10:hover{-webkit-transform:translate(-10px,0);-ms-transform:translate(-10px,0);transform:translate(-10px,0)}.user-june .rel .june-move-rx20:hover{-webkit-transform:translate(-20px,0);-ms-transform:translate(-20px,0);transform:translate(-20px,0)}.user-june .rel .june-move-rx30:hover{-webkit-transform:translate(-30px,0);-ms-transform:translate(-30px,0);transform:translate(-30px,0)}.user-june .rel .june-move-rx40:hover{-webkit-transform:translate(-40px,0);-ms-transform:translate(-40px,0);transform:translate(-40px,0)}.user-june .rel .june-move-rx50:hover{-webkit-transform:translate(-50px,0);-ms-transform:translate(-50px,0);transform:translate(-50px,0)}.user-june .rel .june-move-rx80:hover{-webkit-transform:translate(-80px,0);-ms-transform:translate(-80px,0);transform:translate(-80px,0)}.user-june .rel .june-move-rx120:hover{-webkit-transform:translate(-120px,0);-ms-transform:translate(-120px,0);transform:translate(-120px,0)}.user-june .rel .june-move-rx200:hover{-webkit-transform:translate(-200px,0);-ms-transform:translate(-200px,0);transform:translate(-200px,0)}.user-june .rel .june-move-lx10:hover{-webkit-transform:translate(10px,0);-ms-transform:translate(10px,0);transform:translate(10px,0)}.user-june .rel .june-move-lx20:hover{-webkit-transform:translate(20px,0);-ms-transform:translate(20px,0);transform:translate(20px,0)}.user-june .rel .june-move-lx30:hover{-webkit-transform:translate(30px,0);-ms-transform:translate(30px,0);transform:translate(30px,0)}.user-june .rel .june-move-lx40:hover{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0)}.user-june .rel .june-move-lx50:hover{-webkit-transform:translate(50px,0);-ms-transform:translate(50px,0);transform:translate(50px,0)}.user-june .rel .june-move-lx80:hover{-webkit-transform:translate(80px,0);-ms-transform:translate(80px,0);transform:translate(80px,0)}.user-june .rel .june-move-lx120:hover{-webkit-transform:translate(120px,0);-ms-transform:translate(120px,0);transform:translate(120px,0)}.user-june .rel .june-move-lx200:hover{-webkit-transform:translate(200px,0);-ms-transform:translate(200px,0);transform:translate(200px,0)}.user-june .rel .june-move-uy10:hover{-webkit-transform:translate(0,-10px);-ms-transform:translate(0,-10px);transform:translate(0,-10px)}.user-june .rel .june-move-uy20:hover{-webkit-transform:translate(0,-20px);-ms-transform:translate(0,-20px);transform:translate(0,-20px)}.user-june .rel .june-move-uy30:hover{-webkit-transform:translate(0,-30px);-ms-transform:translate(0,-30px);transform:translate(0,-30px)}.user-june .rel .june-move-uy40:hover{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px)}.user-june .rel .june-move-uy50:hover{-webkit-transform:translate(0,-50px);-ms-transform:translate(0,-50px);transform:translate(0,-50px)}.user-june .rel .june-move-uy80:hover{-webkit-transform:translate(0,-80px);-ms-transform:translate(0,-80px);transform:translate(0,-80px)}.user-june .rel .june-move-uy120:hover{-webkit-transform:translate(0,-120px);-ms-transform:translate(0,-120px);transform:translate(0,-120px)}.user-june .rel .june-move-uy200:hover{-webkit-transform:translate(0,-200px);-ms-transform:translate(0,-200px);transform:translate(0,-200px)}.user-june .rel .june-move-dy10:hover{-webkit-transform:translate(0,10px);-ms-transform:translate(0,10px);transform:translate(0,10px)}.user-june .rel .june-move-dy20:hover{-webkit-transform:translate(0,20px);-ms-transform:translate(0,20px);transform:translate(0,20px)}.user-june .rel .june-move-dy30:hover{-webkit-transform:translate(0,30px);-ms-transform:translate(0,30px);transform:translate(0,30px)}.user-june .rel .june-move-dy40:hover{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px)}.user-june .rel .june-move-dy50:hover{-webkit-transform:translate(0,50px);-ms-transform:translate(0,50px);transform:translate(0,50px)}.user-june .rel .june-move-dy80:hover{-webkit-transform:translate(0,80px);-ms-transform:translate(0,80px);transform:translate(0,80px)}.user-june .rel .june-move-dy120:hover{-webkit-transform:translate(0,120px);-ms-transform:translate(0,120px);transform:translate(0,120px)}.user-june .rel .june-move-dy200:hover{-webkit-transform:translate(0,200px);-ms-transform:translate(0,200px);transform:translate(0,200px)}.user-june .rel .june-move-r360:hover{-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}.user-june .rel .june-move-r720:hover{-moz-transform:rotate(720deg);-o-transform:rotate(720deg);-webkit-transform:rotate(720deg);transform:rotate(720deg)}.user-june .june-box-fadein{opacity:0;-ms-filter:"alpha(opacity=0)";filter:"alpha(opacity=0)"}div.user-june .jspb:hover .june-box-fadein{opacity:1;-ms-filter:"alpha(opacity=100)";filter:"alpha(opacity=100)"}.user-june .june-box-fadeout{opacity:1;-ms-filter:"alpha(opacity=100)";filter:"alpha(opacity=100)"}div.user-june .jspb:hover .june-box-fadeout{opacity:0;-ms-filter:"alpha(opacity=0)";filter:"alpha(opacity=0)"}.user-june .june-box-fromleft{margin-left:-100%}div.user-june .jspb:hover .june-box-fromleft{margin-left:0}.user-june .june-box-fromright{margin-left:100%}div.user-june .jspb:hover .june-box-fromright{margin-left:0}.user-june .june-box-fromtop{margin-top:-100%}div.user-june .jspb:hover .june-box-fromtop{margin-top:0}.user-june .june-box-frombottom{margin-top:100%}div.user-june .jspb:hover .june-box-frombottom{margin-top:0}div.user-june .jspb:hover .june-box-rx10{margin-left:10px}div.user-june .jspb:hover .june-box-rx20{margin-left:20px}div.user-june .jspb:hover .june-box-rx30{margin-left:30px}div.user-june .jspb:hover .june-box-rx40{margin-left:40px}div.user-june .jspb:hover .june-box-rx50{margin-left:50px}div.user-june .jspb:hover .june-box-rx60{margin-left:60px}div.user-june .jspb:hover .june-box-rx70{margin-left:70px}div.user-june .jspb:hover .june-box-rx80{margin-left:80px}div.user-june .jspb:hover .june-box-rx90{margin-left:90px}div.user-june .jspb:hover .june-box-rx100{margin-left:100px}div.user-june .jspb:hover .june-box-rx110{margin-left:110px}div.user-june .jspb:hover .june-box-rx120{margin-left:120px}div.user-june .jspb:hover .june-box-rx130{margin-left:130px}div.user-june .jspb:hover .june-box-rx140{margin-left:140px}div.user-june .jspb:hover .june-box-rx150{margin-left:150px}div.user-june .jspb:hover .june-box-rx160{margin-left:160px}div.user-june .jspb:hover .june-box-rx170{margin-left:170px}div.user-june .jspb:hover .june-box-rx180{margin-left:180px}div.user-june .jspb:hover .june-box-rx190{margin-left:190px}div.user-june .jspb:hover .june-box-rx200{margin-left:200px}div.user-june .jspb:hover .june-box-rx210{margin-left:210px}div.user-june .jspb:hover .june-box-rx220{margin-left:220px}div.user-june .jspb:hover .june-box-rx230{margin-left:230px}div.user-june .jspb:hover .june-box-rx240{margin-left:240px}div.user-june .jspb:hover .june-box-rx250{margin-left:250px}div.user-june .jspb:hover .june-box-rx260{margin-left:260px}div.user-june .jspb:hover .june-box-rx270{margin-left:270px}div.user-june .jspb:hover .june-box-rx280{margin-left:280px}div.user-june .jspb:hover .june-box-rx290{margin-left:290px}div.user-june .jspb:hover .june-box-rx300{margin-left:300px}div.user-june .jspb:hover .june-box-rx310{margin-left:310px}div.user-june .jspb:hover .june-box-rx320{margin-left:320px}div.user-june .jspb:hover .june-box-rx330{margin-left:330px}div.user-june .jspb:hover .june-box-rx340{margin-left:340px}div.user-june .jspb:hover .june-box-rx350{margin-left:350px}div.user-june .jspb:hover .june-box-rx360{margin-left:360px}div.user-june .jspb:hover .june-box-rx370{margin-left:370px}div.user-june .jspb:hover .june-box-rx380{margin-left:380px}div.user-june .jspb:hover .june-box-rx390{margin-left:390px}div.user-june .jspb:hover .june-box-rx400{margin-left:400px}div.user-june .jspb:hover .june-box-rx410{margin-left:410px}div.user-june .jspb:hover .june-box-rx420{margin-left:420px}div.user-june .jspb:hover .june-box-rx430{margin-left:430px}div.user-june .jspb:hover .june-box-rx440{margin-left:440px}div.user-june .jspb:hover .june-box-rx450{margin-left:450px}div.user-june .jspb:hover .june-box-rx460{margin-left:460px}div.user-june .jspb:hover .june-box-rx470{margin-left:470px}div.user-june .jspb:hover .june-box-rx480{margin-left:480px}div.user-june .jspb:hover .june-box-rx490{margin-left:490px}div.user-june .jspb:hover .june-box-rx500{margin-left:500px}div.user-june .jspb:hover .june-box-rx510{margin-left:510px}div.user-june .jspb:hover .june-box-rx520{margin-left:520px}div.user-june .jspb:hover .june-box-rx530{margin-left:530px}div.user-june .jspb:hover .june-box-rx540{margin-left:540px}div.user-june .jspb:hover .june-box-rx550{margin-left:550px}div.user-june .jspb:hover .june-box-rx560{margin-left:560px}div.user-june .jspb:hover .june-box-rx570{margin-left:570px}div.user-june .jspb:hover .june-box-rx580{margin-left:580px}div.user-june .jspb:hover .june-box-rx590{margin-left:590px}div.user-june .jspb:hover .june-box-rx600{margin-left:600px}div.user-june .jspb:hover .june-box-rx610{margin-left:610px}div.user-june .jspb:hover .june-box-rx620{margin-left:620px}div.user-june .jspb:hover .june-box-lx10{margin-left:-10px}div.user-june .jspb:hover .june-box-lx20{margin-left:-20px}div.user-june .jspb:hover .june-box-lx30{margin-left:-30px}div.user-june .jspb:hover .june-box-lx40{margin-left:-40px}div.user-june .jspb:hover .june-box-lx50{margin-left:-50px}div.user-june .jspb:hover .june-box-lx60{margin-left:-60px}div.user-june .jspb:hover .june-box-lx70{margin-left:-70px}div.user-june .jspb:hover .june-box-lx80{margin-left:-80px}div.user-june .jspb:hover .june-box-lx90{margin-left:-90px}div.user-june .jspb:hover .june-box-lx100{margin-left:-100px}div.user-june .jspb:hover .june-box-lx110{margin-left:-110px}div.user-june .jspb:hover .june-box-lx120{margin-left:-120px}div.user-june .jspb:hover .june-box-lx130{margin-left:-130px}div.user-june .jspb:hover .june-box-lx140{margin-left:-140px}div.user-june .jspb:hover .june-box-lx150{margin-left:-150px}div.user-june .jspb:hover .june-box-lx160{margin-left:-160px}div.user-june .jspb:hover .june-box-lx170{margin-left:-170px}div.user-june .jspb:hover .june-box-lx180{margin-left:-180px}div.user-june .jspb:hover .june-box-lx190{margin-left:-190px}div.user-june .jspb:hover .june-box-lx200{margin-left:-200px}div.user-june .jspb:hover .june-box-lx210{margin-left:-210px}div.user-june .jspb:hover .june-box-lx220{margin-left:-220px}div.user-june .jspb:hover .june-box-lx230{margin-left:-230px}div.user-june .jspb:hover .june-box-lx240{margin-left:-240px}div.user-june .jspb:hover .june-box-lx250{margin-left:-250px}div.user-june .jspb:hover .june-box-lx260{margin-left:-260px}div.user-june .jspb:hover .june-box-lx270{margin-left:-270px}div.user-june .jspb:hover .june-box-lx280{margin-left:-280px}div.user-june .jspb:hover .june-box-lx290{margin-left:-290px}div.user-june .jspb:hover .june-box-lx300{margin-left:-300px}div.user-june .jspb:hover .june-box-lx310{margin-left:-310px}div.user-june .jspb:hover .june-box-lx320{margin-left:-320px}div.user-june .jspb:hover .june-box-lx330{margin-left:-330px}div.user-june .jspb:hover .june-box-lx340{margin-left:-340px}div.user-june .jspb:hover .june-box-lx350{margin-left:-350px}div.user-june .jspb:hover .june-box-lx360{margin-left:-360px}div.user-june .jspb:hover .june-box-lx370{margin-left:-370px}div.user-june .jspb:hover .june-box-lx380{margin-left:-380px}div.user-june .jspb:hover .june-box-lx390{margin-left:-390px}div.user-june .jspb:hover .june-box-lx400{margin-left:-400px}div.user-june .jspb:hover .june-box-lx410{margin-left:-410px}div.user-june .jspb:hover .june-box-lx420{margin-left:-420px}div.user-june .jspb:hover .june-box-lx430{margin-left:-430px}div.user-june .jspb:hover .june-box-lx440{margin-left:-440px}div.user-june .jspb:hover .june-box-lx450{margin-left:-450px}div.user-june .jspb:hover .june-box-lx460{margin-left:-460px}div.user-june .jspb:hover .june-box-lx470{margin-left:-470px}div.user-june .jspb:hover .june-box-lx480{margin-left:-480px}div.user-june .jspb:hover .june-box-lx490{margin-left:-490px}div.user-june .jspb:hover .june-box-lx500{margin-left:-500px}div.user-june .jspb:hover .june-box-lx510{margin-left:-510px}div.user-june .jspb:hover .june-box-lx520{margin-left:-520px}div.user-june .jspb:hover .june-box-lx530{margin-left:-530px}div.user-june .jspb:hover .june-box-lx540{margin-left:-540px}div.user-june .jspb:hover .june-box-lx550{margin-left:-550px}div.user-june .jspb:hover .june-box-lx560{margin-left:-560px}div.user-june .jspb:hover .june-box-lx570{margin-left:-570px}div.user-june .jspb:hover .june-box-lx580{margin-left:-580px}div.user-june .jspb:hover .june-box-lx590{margin-left:-590px}div.user-june .jspb:hover .june-box-lx600{margin-left:-600px}div.user-june .jspb:hover .june-box-lx610{margin-left:-610px}div.user-june .jspb:hover .june-box-lx620{margin-left:-620px}div.user-june .jspb:hover .june-box-uy10{margin-top:-10px}div.user-june .jspb:hover .june-box-uy20{margin-top:-20px}div.user-june .jspb:hover .june-box-uy30{margin-top:-30px}div.user-june .jspb:hover .june-box-uy40{margin-top:-40px}div.user-june .jspb:hover .june-box-uy50{margin-top:-50px}div.user-june .jspb:hover .june-box-uy60{margin-top:-60px}div.user-june .jspb:hover .june-box-uy70{margin-top:-70px}div.user-june .jspb:hover .june-box-uy80{margin-top:-80px}div.user-june .jspb:hover .june-box-uy90{margin-top:-90px}div.user-june .jspb:hover .june-box-uy100{margin-top:-100px}div.user-june .jspb:hover .june-box-uy110{margin-top:-110px}div.user-june .jspb:hover .june-box-uy120{margin-top:-120px}div.user-june .jspb:hover .june-box-uy130{margin-top:-130px}div.user-june .jspb:hover .june-box-uy140{margin-top:-140px}div.user-june .jspb:hover .june-box-uy150{margin-top:-150px}div.user-june .jspb:hover .june-box-uy160{margin-top:-160px}div.user-june .jspb:hover .june-box-uy170{margin-top:-170px}div.user-june .jspb:hover .june-box-uy180{margin-top:-180px}div.user-june .jspb:hover .june-box-uy190{margin-top:-190px}div.user-june .jspb:hover .june-box-uy200{margin-top:-200px}div.user-june .jspb:hover .june-box-uy210{margin-top:-210px}div.user-june .jspb:hover .june-box-uy220{margin-top:-220px}div.user-june .jspb:hover .june-box-uy230{margin-top:-230px}div.user-june .jspb:hover .june-box-uy240{margin-top:-240px}div.user-june .jspb:hover .june-box-uy250{margin-top:-250px}div.user-june .jspb:hover .june-box-uy260{margin-top:-260px}div.user-june .jspb:hover .june-box-uy270{margin-top:-270px}div.user-june .jspb:hover .june-box-uy280{margin-top:-280px}div.user-june .jspb:hover .june-box-uy290{margin-top:-290px}div.user-june .jspb:hover .june-box-uy300{margin-top:-300px}div.user-june .jspb:hover .june-box-uy310{margin-top:-310px}div.user-june .jspb:hover .june-box-uy320{margin-top:-320px}div.user-june .jspb:hover .june-box-uy330{margin-top:-330px}div.user-june .jspb:hover .june-box-uy340{margin-top:-340px}div.user-june .jspb:hover .june-box-uy350{margin-top:-350px}div.user-june .jspb:hover .june-box-uy360{margin-top:-360px}div.user-june .jspb:hover .june-box-uy370{margin-top:-370px}div.user-june .jspb:hover .june-box-uy380{margin-top:-380px}div.user-june .jspb:hover .june-box-uy390{margin-top:-390px}div.user-june .jspb:hover .june-box-uy400{margin-top:-400px}div.user-june .jspb:hover .june-box-uy410{margin-top:-410px}div.user-june .jspb:hover .june-box-uy420{margin-top:-420px}div.user-june .jspb:hover .june-box-uy430{margin-top:-430px}div.user-june .jspb:hover .june-box-uy440{margin-top:-440px}div.user-june .jspb:hover .june-box-uy450{margin-top:-450px}div.user-june .jspb:hover .june-box-uy460{margin-top:-460px}div.user-june .jspb:hover .june-box-uy470{margin-top:-470px}div.user-june .jspb:hover .june-box-uy480{margin-top:-480px}div.user-june .jspb:hover .june-box-uy490{margin-top:-490px}div.user-june .jspb:hover .june-box-uy500{margin-top:-500px}div.user-june .jspb:hover .june-box-uy510{margin-top:-510px}div.user-june .jspb:hover .june-box-uy520{margin-top:-520px}div.user-june .jspb:hover .june-box-uy530{margin-top:-530px}div.user-june .jspb:hover .june-box-uy540{margin-top:-540px}div.user-june .jspb:hover .june-box-uy550{margin-top:-550px}div.user-june .jspb:hover .june-box-uy560{margin-top:-560px}div.user-june .jspb:hover .june-box-uy570{margin-top:-570px}div.user-june .jspb:hover .june-box-uy580{margin-top:-580px}div.user-june .jspb:hover .june-box-uy590{margin-top:-590px}div.user-june .jspb:hover .june-box-uy600{margin-top:-600px}div.user-june .jspb:hover .june-box-uy610{margin-top:-610px}div.user-june .jspb:hover .june-box-uy620{margin-top:-620px}div.user-june .jspb:hover .june-box-dy10{margin-top:10px}div.user-june .jspb:hover .june-box-dy20{margin-top:20px}div.user-june .jspb:hover .june-box-dy30{margin-top:30px}div.user-june .jspb:hover .june-box-dy40{margin-top:40px}div.user-june .jspb:hover .june-box-dy50{margin-top:50px}div.user-june .jspb:hover .june-box-dy60{margin-top:60px}div.user-june .jspb:hover .june-box-dy70{margin-top:70px}div.user-june .jspb:hover .june-box-dy80{margin-top:80px}div.user-june .jspb:hover .june-box-dy90{margin-top:90px}div.user-june .jspb:hover .june-box-dy100{margin-top:100px}div.user-june .jspb:hover .june-box-dy110{margin-top:110px}div.user-june .jspb:hover .june-box-dy120{margin-top:120px}div.user-june .jspb:hover .june-box-dy130{margin-top:130px}div.user-june .jspb:hover .june-box-dy140{margin-top:140px}div.user-june .jspb:hover .june-box-dy150{margin-top:150px}div.user-june .jspb:hover .june-box-dy160{margin-top:160px}div.user-june .jspb:hover .june-box-dy170{margin-top:170px}div.user-june .jspb:hover .june-box-dy180{margin-top:180px}div.user-june .jspb:hover .june-box-dy190{margin-top:190px}div.user-june .jspb:hover .june-box-dy200{margin-top:200px}div.user-june .jspb:hover .june-box-dy210{margin-top:210px}div.user-june .jspb:hover .june-box-dy220{margin-top:220px}div.user-june .jspb:hover .june-box-dy230{margin-top:230px}div.user-june .jspb:hover .june-box-dy240{margin-top:240px}div.user-june .jspb:hover .june-box-dy250{margin-top:250px}div.user-june .jspb:hover .june-box-dy260{margin-top:260px}div.user-june .jspb:hover .june-box-dy270{margin-top:270px}div.user-june .jspb:hover .june-box-dy280{margin-top:280px}div.user-june .jspb:hover .june-box-dy290{margin-top:290px}div.user-june .jspb:hover .june-box-dy300{margin-top:300px}div.user-june .jspb:hover .june-box-dy310{margin-top:310px}div.user-june .jspb:hover .june-box-dy320{margin-top:320px}div.user-june .jspb:hover .june-box-dy330{margin-top:330px}div.user-june .jspb:hover .june-box-dy340{margin-top:340px}div.user-june .jspb:hover .june-box-dy350{margin-top:350px}div.user-june .jspb:hover .june-box-dy360{margin-top:360px}div.user-june .jspb:hover .june-box-dy370{margin-top:370px}div.user-june .jspb:hover .june-box-dy380{margin-top:380px}div.user-june .jspb:hover .june-box-dy390{margin-top:390px}div.user-june .jspb:hover .june-box-dy400{margin-top:400px}div.user-june .jspb:hover .june-box-dy410{margin-top:410px}div.user-june .jspb:hover .june-box-dy420{margin-top:420px}div.user-june .jspb:hover .june-box-dy430{margin-top:430px}div.user-june .jspb:hover .june-box-dy440{margin-top:440px}div.user-june .jspb:hover .june-box-dy450{margin-top:450px}div.user-june .jspb:hover .june-box-dy460{margin-top:460px}div.user-june .jspb:hover .june-box-dy470{margin-top:470px}div.user-june .jspb:hover .june-box-dy480{margin-top:480px}div.user-june .jspb:hover .june-box-dy490{margin-top:490px}div.user-june .jspb:hover .june-box-dy500{margin-top:500px}div.user-june .jspb:hover .june-box-dy510{margin-top:510px}div.user-june .jspb:hover .june-box-dy520{margin-top:520px}div.user-june .jspb:hover .june-box-dy530{margin-top:530px}div.user-june .jspb:hover .june-box-dy540{margin-top:540px}div.user-june .jspb:hover .june-box-dy550{margin-top:550px}div.user-june .jspb:hover .june-box-dy560{margin-top:560px}div.user-june .jspb:hover .june-box-dy570{margin-top:570px}div.user-june .jspb:hover .june-box-dy580{margin-top:580px}div.user-june .jspb:hover .june-box-dy590{margin-top:590px}div.user-june .jspb:hover .june-box-dy600{margin-top:600px}div.user-june .jspb:hover .june-box-dy610{margin-top:610px}div.user-june .jspb:hover .june-box-dy620{margin-top:620px}div.user-june .jspb:hover .june-box-r10{-moz-transform:rotate(10deg);-o-transform:rotate(10deg);-webkit-transform:rotate(10deg);transform:rotate(10deg)}div.user-june .jspb:hover .june-box-r20{-moz-transform:rotate(20deg);-o-transform:rotate(20deg);-webkit-transform:rotate(20deg);transform:rotate(20deg)}div.user-june .jspb:hover .june-box-r30{-moz-transform:rotate(30deg);-o-transform:rotate(30deg);-webkit-transform:rotate(30deg);transform:rotate(30deg)}div.user-june .jspb:hover .june-box-r40{-moz-transform:rotate(40deg);-o-transform:rotate(40deg);-webkit-transform:rotate(40deg);transform:rotate(40deg)}div.user-june .jspb:hover .june-box-r50{-moz-transform:rotate(50deg);-o-transform:rotate(50deg);-webkit-transform:rotate(50deg);transform:rotate(50deg)}div.user-june .jspb:hover .june-box-r60{-moz-transform:rotate(60deg);-o-transform:rotate(60deg);-webkit-transform:rotate(60deg);transform:rotate(60deg)}div.user-june .jspb:hover .june-box-r70{-moz-transform:rotate(70deg);-o-transform:rotate(70deg);-webkit-transform:rotate(70deg);transform:rotate(70deg)}div.user-june .jspb:hover .june-box-r80{-moz-transform:rotate(80deg);-o-transform:rotate(80deg);-webkit-transform:rotate(80deg);transform:rotate(80deg)}div.user-june .jspb:hover .june-box-r90{-moz-transform:rotate(90deg);-o-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}div.user-june .jspb:hover .june-box-r120{-moz-transform:rotate(120deg);-o-transform:rotate(120deg);-webkit-transform:rotate(120deg);transform:rotate(120deg)}div.user-june .jspb:hover .june-box-r180{-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}div.user-june .jspb:hover .june-box-r270{-moz-transform:rotate(270deg);-o-transform:rotate(270deg);-webkit-transform:rotate(270deg);transform:rotate(270deg)}div.user-june .jspb:hover .june-box-r360{-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}div.user-june .jspb:hover .june-box-r720{-moz-transform:rotate(720deg);-o-transform:rotate(720deg);-webkit-transform:rotate(720deg);transform:rotate(720deg)}div.user-june .jspb:hover .june-box-fr10{-moz-transform:rotate(-10deg);-o-transform:rotate(-10deg);-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}div.user-june .jspb:hover .june-box-fr20{-moz-transform:rotate(-20deg);-o-transform:rotate(-20deg);-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}div.user-june .jspb:hover .june-box-fr30{-moz-transform:rotate(-30deg);-o-transform:rotate(-30deg);-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}div.user-june .jspb:hover .june-box-fr40{-moz-transform:rotate(-40deg);-o-transform:rotate(-40deg);-webkit-transform:rotate(-40deg);transform:rotate(-40deg)}div.user-june .jspb:hover .june-box-fr50{-moz-transform:rotate(-50deg);-o-transform:rotate(-50deg);-webkit-transform:rotate(-50deg);transform:rotate(-50deg)}div.user-june .jspb:hover .june-box-fr60{-moz-transform:rotate(-60deg);-o-transform:rotate(-60deg);-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}div.user-june .jspb:hover .june-box-fr70{-moz-transform:rotate(-70deg);-o-transform:rotate(-70deg);-webkit-transform:rotate(-70deg);transform:rotate(-70deg)}div.user-june .jspb:hover .june-box-fr80{-moz-transform:rotate(-80deg);-o-transform:rotate(-80deg);-webkit-transform:rotate(-80deg);transform:rotate(-80deg)}div.user-june .jspb:hover .june-box-fr90{-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}div.user-june .jspb:hover .june-box-fr120{-moz-transform:rotate(-120deg);-o-transform:rotate(-120deg);-webkit-transform:rotate(-120deg);transform:rotate(-120deg)}div.user-june .jspb:hover .june-box-fr180{-moz-transform:rotate(-180deg);-o-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}div.user-june .jspb:hover .june-box-fr270{-moz-transform:rotate(-270deg);-o-transform:rotate(-270deg);-webkit-transform:rotate(-270deg);transform:rotate(-270deg)}div.user-june .jspb:hover .june-box-fr360{-moz-transform:rotate(-360deg);-o-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}div.user-june .jspb:hover .june-box-fr720{-moz-transform:rotate(-720deg);-o-transform:rotate(-720deg);-webkit-transform:rotate(-720deg);transform:rotate(-720deg)}div.user-june .jspb:hover .june-box-fx{-ms-transform:scale(-1,1);-moz-transform:scale(-1,1);-webkit-transform:scale(-1,1);-o-transform:scale(-1,1);transform:scale(-1,1)}div.user-june .jspb:hover .june-box-fy{-ms-transform:scale(1,-1);-moz-transform:scale(1,-1);-webkit-transform:scale(1,-1);-o-transform:scale(1,-1);transform:scale(1,-1)}div.user-june .jspb:hover .june-box-fxy{-ms-transform:scale(-1,-1);-moz-transform:scale(-1,-1);-webkit-transform:scale(-1,-1);-o-transform:scale(-1,-1);transform:scale(-1,-1)}.user-june .june-box-sf{-ms-transform:scale(0,0);-moz-transform:scale(0,0);-webkit-transform:scale(0,0);-o-transform:scale(0,0);transform:scale(0,0)}div.user-june .jspb:hover .june-box-sf{-ms-transform:scale(1,1);-moz-transform:scale(1,1);-webkit-transform:scale(1,1);-o-transform:scale(1,1);transform:scale(1,1)}div.user-june .jspb:hover .june-box-sf0{-ms-transform:scale(0,0);-moz-transform:scale(0,0);-webkit-transform:scale(0,0);-o-transform:scale(0,0);transform:scale(0,0)}div.user-june .jspb:hover .june-box-sf02{-ms-transform:scale(0.2,0.2);-moz-transform:scale(0.2,0.2);-webkit-transform:scale(0.2,0.2);-o-transform:scale(0.2,0.2);transform:scale(0.2,0.2)}div.user-june .jspb:hover .june-box-sf04{-ms-transform:scale(0.4,0.4);-moz-transform:scale(0.4,0.4);-webkit-transform:scale(0.4,0.4);-o-transform:scale(0.4,0.4);transform:scale(0.4,0.4)}div.user-june .jspb:hover .june-box-sf05{-ms-transform:scale(0.5,0.5);-moz-transform:scale(0.5,0.5);-webkit-transform:scale(0.5,0.5);-o-transform:scale(0.5,0.5);transform:scale(0.5,0.5)}div.user-june .jspb:hover .june-box-sf06{-ms-transform:scale(0.6,0.6);-moz-transform:scale(0.6,0.6);-webkit-transform:scale(0.6,0.6);-o-transform:scale(0.6,0.6);transform:scale(0.6,0.6)}div.user-june .jspb:hover .june-box-sf08{-ms-transform:scale(0.8,0.8);-moz-transform:scale(0.8,0.8);-webkit-transform:scale(0.8,0.8);-o-transform:scale(0.8,0.8);transform:scale(0.8,0.8)}div.user-june .jspb:hover .june-box-sf09{-ms-transform:scale(0.9,0.9);-moz-transform:scale(0.9,0.9);-webkit-transform:scale(0.9,0.9);-o-transform:scale(0.9,0.9);transform:scale(0.9,0.9)}div.user-june .jspb:hover .june-box-sf095{-ms-transform:scale(0.95,0.95);-moz-transform:scale(0.95,0.95);-webkit-transform:scale(0.95,0.95);-o-transform:scale(0.95,0.95);transform:scale(0.95,0.95)}div.user-june .jspb:hover .june-box-sf098{-ms-transform:scale(0.98,0.98);-moz-transform:scale(0.98,0.98);-webkit-transform:scale(0.98,0.98);-o-transform:scale(0.98,0.98);transform:scale(0.98,0.98)}div.user-june .jspb:hover .june-box-sf1{-ms-transform:scale(1,1);-moz-transform:scale(1,1);-webkit-transform:scale(1,1);-o-transform:scale(1,1);transform:scale(1,1)}div.user-june .jspb:hover .june-box-sf102{-ms-transform:scale(1.02,1.02);-moz-transform:scale(1.02,1.02);-webkit-transform:scale(1.02,1.02);-o-transform:scale(1.02,1.02);transform:scale(1.02,1.02)}div.user-june .jspb:hover .june-box-sf105{-ms-transform:scale(1.05,1.05);-moz-transform:scale(1.05,1.05);-webkit-transform:scale(1.05,1.05);-o-transform:scale(1.05,1.05);transform:scale(1.05,1.05)}div.user-june .jspb:hover .june-box-sf110{-ms-transform:scale(1.1,1.1);-moz-transform:scale(1.1,1.1);-webkit-transform:scale(1.1,1.1);-o-transform:scale(1.1,1.1);transform:scale(1.1,1.1)}div.user-june .jspb:hover .june-box-sf120{-ms-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-webkit-transform:scale(1.2,1.2);-o-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}div.user-june .jspb:hover .june-box-sf150{-ms-transform:scale(1.5,1.5);-moz-transform:scale(1.5,1.5);-webkit-transform:scale(1.5,1.5);-o-transform:scale(1.5,1.5);transform:scale(1.5,1.5)}div.user-june .jspb:hover .june-box-sf180{-ms-transform:scale(1.8,1.8);-moz-transform:scale(1.8,1.8);-webkit-transform:scale(1.8,1.8);-o-transform:scale(1.8,1.8);transform:scale(1.8,1.8)}div.user-june .jspb:hover .june-box-sf200{-ms-transform:scale(2,2);-moz-transform:scale(2,2);-webkit-transform:scale(2,2);-o-transform:scale(2,2);transform:scale(2,2)}div.user-june .jspb:hover .june-box-fxr360{-ms-transform:scale(-1,1) rotate(360deg);-moz-transform:scale(-1,1) rotate(360deg);-webkit-transform:scale(-1,1) rotate(360deg);-o-transform:scale(-1,1)rotate(360deg);transform:scale(-1,1) rotate(360deg)}div.user-june .jspb:hover .june-box-fxr720{-ms-transform:scale(-1,1) rotate(720deg);-moz-transform:scale(-1,1) rotate(720deg);-webkit-transform:scale(-1,1) rotate(720deg);-o-transform:scale(-1,1)rotate(720deg);transform:scale(-1,1) rotate(720deg)}div.user-june .jspb:hover .june-box-fxfr360{-ms-transform:scale(-1,1) rotate(-360deg);-moz-transform:scale(-1,1) rotate(-360deg);-webkit-transform:scale(-1,1) rotate(-360deg);-o-transform:scale(-1,1)rotate(-360deg);transform:scale(-1,1) rotate(-360deg)}div.user-june .jspb:hover .june-box-fxfr720{-ms-transform:scale(-1,1) rotate(-720deg);-moz-transform:scale(-1,1) rotate(-720deg);-webkit-transform:scale(-1,1) rotate(-720deg);-o-transform:scale(-1,1)rotate(-720deg);transform:scale(-1,1) rotate(-720deg)}div.user-june .jspb:hover .june-box-fyr360{-ms-transform:scale(1,-1) rotate(360deg);-moz-transform:scale(1,-1) rotate(360deg);-webkit-transform:scale(1,-1) rotate(360deg);-o-transform:scale(1,-1)rotate(360deg);transform:scale(1,-1) rotate(360deg)}div.user-june .jspb:hover .june-box-fyr720{-ms-transform:scale(1,-1) rotate(720deg);-moz-transform:scale(1,-1) rotate(720deg);-webkit-transform:scale(1,-1) rotate(720deg);-o-transform:scale(1,-1)rotate(720deg);transform:scale(1,-1) rotate(720deg)}div.user-june .jspb:hover .june-box-fyfr360{-ms-transform:scale(1,-1) rotate(-360deg);-moz-transform:scale(1,-1) rotate(-360deg);-webkit-transform:scale(1,-1) rotate(-360deg);-o-transform:scale(1,-1)rotate(-360deg);transform:scale(1,-1) rotate(-360deg)}div.user-june .jspb:hover .june-box-fyfr720{-ms-transform:scale(1,-1) rotate(-720deg);-moz-transform:scale(1,-1) rotate(-720deg);-webkit-transform:scale(1,-1) rotate(-720deg);-o-transform:scale(1,-1)rotate(-720deg);transform:scale(1,-1) rotate(-720deg)}.user-june .june-box-sfr360{-ms-transform:scale(0,0) rotate(0deg);-moz-transform:scale(0,0) rotate(0deg);-webkit-transform:scale(0,0) rotate(0deg);-o-transform:scale(0,0) rotate(0deg);transform:scale(0,0) rotate(0deg)}div.user-june .jspb:hover .june-box-sfr360{-ms-transform:scale(1,1) rotate(360deg);-moz-transform:scale(1,1) rotate(360deg);-webkit-transform:scale(1,1) rotate(360deg);-o-transform:scale(1,1)rotate(360deg);transform:scale(1,1) rotate(360deg)}.user-june .june-box-sfr720{-ms-transform:scale(0,0) rotate(0deg);-moz-transform:scale(0,0) rotate(0deg);-webkit-transform:scale(0,0) rotate(0deg);-o-transform:scale(0,0) rotate(0deg);transform:scale(0,0) rotate(0deg)}div.user-june .jspb:hover .june-box-sfr720{-ms-transform:scale(1,1) rotate(720deg);-moz-transform:scale(1,1) rotate(720deg);-webkit-transform:scale(1,1) rotate(720deg);-o-transform:scale(1,1)rotate(720deg);transform:scale(1,1) rotate(720deg)}.user-june .june-box-sf0r360{-ms-transform:scale(1,1) rotate(0deg);-moz-transform:scale(1,1) rotate(0deg);-webkit-transform:scale(1,1) rotate(0deg);-o-transform:scale(1,1) rotate(0deg);transform:scale(1,1) rotate(0deg)}div.user-june .jspb:hover .june-box-sf0r360{-ms-transform:scale(0,0) rotate(360deg);-moz-transform:scale(0,0) rotate(360deg);-webkit-transform:scale(0,0) rotate(360deg);-o-transform:scale(0,0)rotate(360deg);transform:scale(0,0) rotate(360deg)}.user-june .june-box-sf0r720{-ms-transform:scale(1,1) rotate(0deg);-moz-transform:scale(1,1) rotate(0deg);-webkit-transform:scale(1,1) rotate(0deg);-o-transform:scale(1,1) rotate(0deg);transform:scale(1,1) rotate(0deg)}div.user-june .jspb:hover .june-box-sf0r720{-ms-transform:scale(0,0) rotate(720deg);-moz-transform:scale(0,0) rotate(720deg);-webkit-transform:scale(0,0) rotate(720deg);-o-transform:scale(0,0)rotate(720deg);transform:scale(0,0) rotate(720deg)}.user-june .june-box-sffr360{-ms-transform:scale(0,0) rotate(0deg);-moz-transform:scale(0,0) rotate(0deg);-webkit-transform:scale(0,0) rotate(0deg);-o-transform:scale(0,0) rotate(0deg);transform:scale(0,0) rotate(0deg)}div.user-june .jspb:hover .june-box-sffr360{-ms-transform:scale(1,1) rotate(-360deg);-moz-transform:scale(1,1) rotate(-360deg);-webkit-transform:scale(1,1) rotate(-360deg);-o-transform:scale(1,1)rotate(-360deg);transform:scale(1,1) rotate(-360deg)}.user-june .june-box-sf0fr360{-ms-transform:scale(1,1) rotate(0deg);-moz-transform:scale(1,1) rotate(0deg);-webkit-transform:scale(1,1) rotate(0deg);-o-transform:scale(1,1) rotate(0deg);transform:scale(1,1) rotate(0deg)}div.user-june .jspb:hover .june-box-sf0fr360{-ms-transform:scale(0,0) rotate(-360deg);-moz-transform:scale(0,0) rotate(-360deg);-webkit-transform:scale(0,0) rotate(-360deg);-o-transform:scale(0,0)rotate(-360deg);transform:scale(0,0) rotate(-360deg)}.user-june .june-box-sffr720{-ms-transform:scale(0,0) rotate(0deg);-moz-transform:scale(0,0) rotate(0deg);-webkit-transform:scale(0,0) rotate(0deg);-o-transform:scale(0,0) rotate(0deg);transform:scale(0,0) rotate(0deg)}div.user-june .jspb:hover .june-box-sffr720{-ms-transform:scale(1,1) rotate(-720deg);-moz-transform:scale(1,1) rotate(-720deg);-webkit-transform:scale(1,1) rotate(-720deg);-o-transform:scale(1,1)rotate(-720deg);transform:scale(1,1) rotate(-720deg)}.user-june .june-box-sf0fr720{-ms-transform:scale(1,1) rotate(0deg);-moz-transform:scale(1,1) rotate(0deg);-webkit-transform:scale(1,1) rotate(0deg);-o-transform:scale(1,1) rotate(0deg);transform:scale(1,1) rotate(0deg)}div.user-june .jspb:hover .june-box-sf0fr720{-ms-transform:scale(0,0) rotate(-720deg);-moz-transform:scale(0,0) rotate(-720deg);-webkit-transform:scale(0,0) rotate(-720deg);-o-transform:scale(0,0)rotate(-720deg);transform:scale(0,0) rotate(-720deg)}';
	return a.check = function(a) {
		var f, g, h, j, i, k, l, m, c = b.match(/.user-june[^\{]*(?=\{)/g),
			d = b.match(/\{([^\}])*\}/g),
			e = '.user-june{font: 12px/1.5 tahoma,arial;}.user-june img{display:block;float:left;}.user-june .abs{position:absolute}.user-june .rel{position:relative}.user-june .outbox{overflow:hidden}.user-june a.imghover{display:block;float:left}.user-june a.imghover img{display:none}.user-june a.imghover:hover img{display:block}.user-june a.mcwhite:hover{background:#fff;opacity:.1;filter:alpha(opacity=10);-ms-filter:alpha(opacity=10)}.user-june a.mcblack:hover{background:#000;opacity:.1;filter:alpha(opacity=10);-ms-filter:alpha(opacity=10)}.user-june a{border-width:0}.user-june a.hborder:hover{border-width:1px}.user-june .june-switch:hover .b-box{background-color:#000;}.user-june .june-switch:hover .pic{opacity:0.7;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=70)";filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=70)";-webkit-transition:0.5s ease-in;-moz-transition:0.5s ease-in;-o-transition:0.5s ease-in;transition:0.5s ease-in;}.user-june .june-switch .pic:hover{opacity:1;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=100)";filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=100)";}.user-june .ulhover:hover{text-decoration:underline;}.user-june .jfsb span.navsmallimg a.abs{display:none;}.user-june .jfsb span.navsmallimg a.jd-slider-hover{display:block;}.user-june .jfsb span.show a.abs {display:block;}.user-june .jfsb span.show a.jd-slider-hover {display:none;}.user-june span.navsmallimg a em{position:absolute;top:0;left:0;display:block;width:100%;height:100%;}.user-june .elepic{display:none;}.user-june .elepic.show,.user-june .elepic1.show{display:block;}.user-june .kgdwhite{background-color:#FFFFFF;opacity:0.7;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=70)";filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=70)";}.user-june .kgdblack{background-color:#000000;opacity:0.7;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=70)";filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=70)";}.user-june .june-box-fadein{opacity:0;-ms-filter:"alpha(opacity=0)";filter:"alpha(opacity=0)"}.user-june .jspb:hover .june-box-fadein,.user-june .june-box-fadeout,.user-june .junefade .juneo,.user-june .junefade:hover .junei{opacity:1;-ms-filter:"alpha(opacity=100)";filter:"alpha(opacity=100)"}.user-june .june-box-fadein,.user-june .jspb:hover .june-box-fadeout,.user-june .junefade:hover .juneo,.user-june .junefade .junei{opacity: 0;-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";}.user-june .trans05s{-webkit-transition: .5s ease-in;-moz-transition: .5s ease-in;-o-transition: .5s ease-in;transition: .5s ease-in;}.user-june .trans1s{-webkit-transition: 1s ease-in;-moz-transition: 1s ease-in;-o-transition: 1s ease-in;transition: 1s ease-in;}.user-june .trans2s{-webkit-transition: 2s ease-in;-moz-transition: 2s ease-in;-o-transition: 2s ease-in;transition: 2s ease-in;}.user-june .trans3s{-webkit-transition: 3s ease-in;-moz-transition: 3s ease-in;-o-transition: 3s ease-in;transition: 3s ease-in;}.user-june .trans4s{-webkit-transition: 4s ease-in;-moz-transition: 4s ease-in;-o-transition: 4s ease-in;transition: 4s ease-in;}.user-june .trans5s{-webkit-transition: 5s ease-in;-moz-transition: 5s ease-in;-o-transition: 5s ease-in;transition: 5s ease-in;}.user-june .u-a{overflow:hidden;} .user-june .u-a:hover{overflow:visible;}';
		if (a = a.replace(/z\-index\:\s?10\;/g, "z-index:1;"), a = a.replace(/z\-index\:\s?10/g, "z-index:1"), f = a.match(/june-(f|r|l|u|d|b|m){1}(\S)+/g), g = "", f && f.length > 0) for (i = f.length, k = c.length, h = 0; i > h; h++) for (j = 0; k > j; j++) c[j].indexOf(f[h]) >= 0 && (g += c[j] + d[j], c.splice(j, 1), d.splice(j, 1), j--, k--);
		return l = "", m = "", "" != D.juneOtherCls_jd && (l = " " + D.juneOtherCls_jd, m = ' data-joc="' + D.juneOtherCls_jd + '"'), "<style>" + e + g + '</style><div class="user-june" ' + m + ">" + a + "</div>"
	}, a
}), define("scripts/drawDaoJiShi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/tAjax");
	return a.create = function(a, e) {
		var g, f = c[a];
		d.ajaxJson("gis", {
			img: f[2].pSrc
		}, function(c) {
			b.setAppID(f[2]), b.setAttachID(f[2].childConfig[0]), b.setAttachID(f[2].childConfig[1]), b.setAttachID(f[2].childConfig[2]), b.setAttachID(f[2].childConfig[3]);
			var d = c[0] || 200,
				h = c[1] || 160,
				i = 30;
			b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(f[0]).html(f[1].tContent).appendTo(b.june).tResize().css({
				backgroundImage: "url(" + f[2].pSrc + ")",
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: d,
				height: h
			}).attr("data-config", JSON.stringify(f[2])).attr("appID", f[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + f[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), g.children(b.appChildCls).each(function(a) {
				var d = $(this),
					e = f[2].childConfig[a];
				$(d).tResize({
					tSwitch: !1
				}).css({
					top: 36,
					left: i,
					color: e.numberColor,
					fontSize: b.tParseInt(e.numberSize),
					fontWeight: e.numberWeight,
					fontFamily: e.numberFamily,
					textAlign: "center"
				}).attr("appID", f[2].appID).attr("attachID", e.attachID), i += 62.1
			}), e(a, f[2].appID)
		})
	}, a
}), define("scripts/interest.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax");
	return $("#tZuhe").dialog({
		title: "有趣的效果组合列表",
		autoOpen: !1,
		height: 500,
		width: 550,
		modal: !0,
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		},
		close: function() {
			$("#tZuhe").dialog("close")
		}
	}), c.ajaxJson("load", {
		type: "tuijian"
	}, function(a) {
		try {
			$("#tZuhe").children("ul").html("");
			var c, d, e = a.length;
			for (d = e > 6 ? 6 : e, c = 0; d > c; c++) $("#tZuhe").children("ul").append('<li title="" data-save="' + a[c].ID + '" class="zuhelist">' + '<img src="userSaveSnap/' + a[c].ID + '.png">' + '<div class="zuhemc"></div>' + '<div class="zuhetitle">' + a[c].saveName + "</div>" + '<span class="zuheuse" data-target="interest-clicked" data-interestType="use"><i></i>应用</span>' + '<span class="zuhepreview" data-target="interest-clicked" data-interestType="preview"><i></i><a class="june-preview" href="previewZ.php?ID=' + a[c].ID + '" target="_blank">预览</a></span>' + "</li>");
			setPage(document.getElementById("tZuhePage"), Math.ceil(a.length / 6), 1, ["", ""]), $("#tZuhe").children("ul").children("li").hide(), $("#tZuhe").children("ul").children("li").slice(0, 6).show(), $("#tZuhePage").on("click", function() {
				var e = b.tParseInt($("#tZuhePage").children("a.on").html()) - 1;
				if ($("#tZuhe").children("ul").children("li").length < 6 * (e + 1) + 1) for (d = 6 * (e + 1); d > c; c++) a.length > c && $("#tZuhe").children("ul").append('<li title="" data-save="' + a[c].ID + '" class="zuhelist">' + '<img src="userSaveSnap/' + a[c].ID + '.png">' + '<div class="zuhemc"></div>' + '<div class="zuhetitle">' + a[c].saveName + "</div>" + '<span class="zuheuse" data-target="interest-clicked" data-interestType="use"><i></i>应用</span>' + '<span class="zuhepreview" data-target="interest-clicked" data-interestType="preview"><i></i><a class="june-preview" href="previewZ.php?ID=' + a[c].ID + '" target="_blank">预览</a></span>' + "</li>");
				$("#tZuhe").children("ul").children("li").hide(), $("#tZuhe").children("ul").children("li").slice(6 * e, 6 * (e + 1)).show()
			})
		} catch (f) {}
	}), $("#tZuhe").children("ul").append(), a.getInterest = function() {
		$("#tZuhe").dialog("open")
	}, a.setInterest = function(a) {
		c.ajaxJson("load", {
			ID: a,
			type: "search"
		}, function(a) {
			if (a.length > 0) {
				b.snapSwitch = !1;
				var c = a[0];
				b.june.html(c.june).attr("style", c.juneStyle), b.dump.html(c.dump), b.popupContent.html(c.popupContent), $("#moduleWidth").val(c.moduleWidth), $("#moduleHeight").val(c.moduleHeight), $("#moduleBgimg").val(c.moduleBgimg), c.boxRepeat = "true" == c.boxRepeat ? !0 : !1, c.boxFixed = "true" == c.boxFixed ? !0 : !1, $("#boxRepeat").prop("checked", Boolean(c.boxRepeat)), $("#boxFixed").prop("checked", Boolean(c.boxFixed)), $("#bgPosition").val(c.bgPosition), $("#moduleBgcolor").val(c.moduleBgcolor), b.actionCollection = b.toClear(c.actionCollection), b.actionConfig = b.toClear(c.actionConfig), b.actionList.html(c.actionList), b.layerList.html(c.layerList), b.dumpLayer.html(c.dumpLayer), $("#tZuhe").dialog("close"), $(".ui-tooltip").hide()
			} else b.tMessage("应用失败，请截图给旺旺客服与我们联系！")
		})
	}, a.previewInterest = function(a) {
		c.ajaxJson("load", {
			ID: a,
			type: "search"
		}, function(a) {
			var c, d, e, f, g;
			a.length > 0 ? (c = b.getJuneStyle(), d = "", e = "", f = a[0].june, $(f).each(function() {
				var a = $(this),
					e = a.attr("data-dblType");
				b.create() && ("jpb" != e ? c += b.appConfig[e][1].codeExport(a) : d += b.appConfig[e][1].codeExport(a))
			}), b.popupContent.children(".japb[data-gen='yes']").each(function() {
				var a = $(this).clone();
				a.removeAttr("data-gen").removeAttr("id"), e += $(this).prop("outerHTML")
			}), c += "</div>" + d + e, $(f).remove(), g = $("#previewForm"), g.children("textarea").val(c), g.submit(), g.children("textarea").html("")) : b.tMessage("预览失败，请截图给旺旺客服与我们联系！")
		})
	}, a.control = function(b, c) {
		var e, f, d = $(b.target);
		return e = d.parent(), f = e.attr("data-save"), "get" == c ? (a.getInterest(), void 0) : ("use" == c && a.setInterest(f), void 0)
	}, a
}), define("scripts/moduleManage.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax"),
		d = require("scripts/UI_Dialog");
	return b.show() && (a.toSet = function(a) {
		var f, g, c = $(a.target),
			d = c.attr("name"),
			e = c.val();
		"moduleBgimg" == d ? (e = e.replace(/"/g, ""), checkUrl(e) && b.june.css({
			backgroundImage: "url(" + e + ")"
		}), "" == e && b.june.css({
			backgroundImage: "none"
		})) : "moduleWidth" == d ? b.june.width(b.tParseInt(e)) : "moduleHeight" == d ? ("" == e && (e = 2560), b.june.height(b.tParseInt(e))) : "moduleBgcolor" == d ? ("" == e && (e = "#f2f4f8"), b.june.css({
			backgroundColor: e
		})) : ("mdbgPos1" == d || "mdbgPos2" == d) && "" == $("#bgPosition").val() && (f = "" == $("#mdbgPos1").val() ? "center" : $("#mdbgPos1").val() + "px", g = "" == $("#mdbgPos2").val() ? "top" : $("#mdbgPos2").val() + "px", b.june.css({
			backgroundPosition: f + " " + g
		}))
	}), a.tDialogSave = function(a) {
		var d = "saveInput",
			e = {};
		b.tUserLogin && "" != b.tUserName && (e.userName = b.tUserName), $("#" + b.dialogID).dialog({
			resizable: !1,
			width: 520,
			height: 540,
			title: "代码保存",
			buttons: {
				"保存": function() {
					a($("#saveText").val(), $(this), $("#saveText").attr("data-choosesavename"), $("#saveText").attr("data-choosesaveid"))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e)
	}, a.snapSave = function(a) {
		require("scripts/action"), b.tLoading(!0), b.startParse = !0, setTimeout(function() {
			var d, c = {};
			c.nType = "jvs_1_0", b.tempArrayLabel = [], b.june.children(b.appCls).each(function() {
				b.tempArrayLabel.push($(this).attr("data-appLabel") || "")
			}), c.arrayLabelName = b.tempArrayLabel, c.juneHeightVal = $("#moduleHeight").val(), b.juneSnapArray1 = $.extend({}, c), b.tLoading(!1), b.startParse = !1, d = require("scripts/code"), d.getCodeExport(function(b) {
				a(b)
			}, !0, !0)
		}, 1e3)
	}, a.toSave = function(d) {
		b.tUserLogin ? a.tDialogSave(function(e, f, g, h) {
			return "" == e ? (b.tMessage("请输入一个名称！"), void 0) : (b.tLoading(!0), e != g ? (f.dialog("close"), $(".ui-tooltip").hide(), a.snapSave(function(f) {
				var g = {};
				g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("save", {
					saveName: e,
					userName: d[1],
					saveObj: g
				}, function(f) {
					if (f[0]) b.tLoading(!0), b.tLoading(!1), b.tMessage(f[1]), b.openSaveDocName = e, f[2] && (b.openSaveDocID = f[2]), f[3] && (b.openSaveDocTime = f[3]), a.getSave([b.tUserLogin, b.tUserName]);
					else if ("already" == f[1]) {
						var h = "";
						f[3] && (h = f[3]), b.tConfirm(f[2], function() {
							c.ajaxJsonS("save", {
								saveName: e,
								userName: d[1],
								sasID: h,
								type: "cover",
								saveObj: g
							}, function(c) {
								b.tLoading(!0), b.tLoading(!1), b.tMessage(c[1]), c[2] && (b.openSaveDocID = c[2]), b.openSaveDocName = e, c[3] && (b.openSaveDocTime = c[3]), a.getSave([b.tUserLogin, b.tUserName])
							})
						})
					} else b.tMessage(f[1])
				})
			})) : b.tConfirm("您已经保存了一份相同名称的存档，是否覆盖该存档？", function() {
				f.dialog("close"), $(".ui-tooltip").hide(), a.snapSave(function(f) {
					var g = {};
					g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("save", {
						saveName: e,
						userName: d[1],
						sasID: h || "",
						type: "cover",
						saveObj: g
					}, function(c) {
						b.tLoading(!0), b.tLoading(!1), b.tMessage(c[1]), b.openSaveDocName = e, c[2] && (b.openSaveDocID = c[2]), c[3] && (b.openSaveDocTime = c[3]), a.getSave([b.tUserLogin, b.tUserName])
					})
				})
			}, function() {
				b.tLoading(!1)
			}), void 0)
		}) : b.tMessage("登录失效，请重新登录！", "login")
	}, a.autoSave = function() {
		a.snapSave(function(d) {
			var e = {};
			e.actionCollection = b.juneSnapArray1, e.actionConfig = d, c.ajaxJsonT("imgmap/save.php", {
				saveName: "系统自动保存",
				userName: b.tUserName,
				type: "cover",
				sasID: $("#userSaveBySystem").length > 0 ? $("#userSaveBySystem").attr("data-save") : "",
				saveObj: e
			}, function() {
				a.getSave([b.tUserLogin, b.tUserName])
			}, "系统繁忙，此次自动保存操作执行失败，如需保存请选择手动保存！"), b.tAutoSaveSwitch = !1, clearInterval(b.autoSaveCountdown), $("#autoSaveCountdown").html("自动保存成功，请在保存列表中查看！")
		})
	}, a.showSave = function(c, d, e, f) {
		var g, h, i, j, k, l, m, o, p, q, r, s, t;
		if (b.tLoading(!0), b.openSaveDocName = d, b.openSaveDocTime = e, b.openSaveDocID = f, b.jSelectsedDom = $(), b.snapSwitch = !1, g = c, h = "", g.actionCollection && (i = g.actionCollection, i["nType"] && (h = i["nType"])), "" == h) {
			b.june.html(g.june).attr("style", g.juneStyle), b.june.find(b.appCls + ".ui-selected").each(function() {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), b.june.children(b.appCls + "[data-dblType='jib']").length > 0 && b.june.children(b.appCls + "[data-dblType='jib']").each(function() {
				var a = $(this);
				a.find("[data-attachType]").each(function() {
					var a = $(this).attr("data-attachType");
					$(this).attr("data-attachType", a.toLowerCase())
				})
			}), b.dump.html(g.dump), b.popupContent.html(g.popupContent), $("#moduleWidth").val(g.moduleWidth), $("#moduleHeight").val(g.moduleHeight), $("#moduleBgimg").val(g.moduleBgimg), g.boxRepeat = "true" == g.boxRepeat ? !0 : !1, g.boxFixed = "true" == g.boxFixed ? !0 : !1, $("#boxRepeat").prop("checked", Boolean(g.boxRepeat)), $("#boxFixed").prop("checked", Boolean(g.boxFixed)), $("#bgPosition").val(g.bgPosition), $("#moduleBgcolor").val(g.moduleBgcolor), b.actionCollection = b.toClear(g.actionCollection), b.actionConfig = b.toClear(g.actionConfig), b.actionList.html(g.actionList), b.layerList.html(g.layerList), b.dumpLayer.html(g.dumpLayer), a.restoreLayer(), j = b.actionCollection[0], k = b.actionConfig[0], "juneSnap" == j.type && (l = $("<div>" + k.html + "</div>"), l.children(b.appCls).each(function() {
				var a = $(this).attr("appID");
				b.june.find(b.appCls + "[appID='" + a + "']").attr("data-Jsnap", "yes"), b.layerList.children(b.layerCls + "[appID='" + a + "']").attr("data-Jsnap", "yes")
			}), l.find(b.appChildCls).each(function() {
				var a = $(this).attr("attachID");
				b.june.find(b.appChildCls + "[attachID='" + a + "']").attr("data-Jsnap", "yes"), $("#tThumb").find(b.thumbCls + "[attachID='" + a + "']").attr("data-Jsnap", "yes")
			}), j.used = "yes", b.chooseAction(b.actionCollection.length - 1)), m = b.actionCollection[1], "juneAppSave" == m.type && (b.june.children(b.appCls).each(function() {
				var a = $(this).attr("appID");
				b.june.find(b.appCls + "[appID='" + a + "']").attr("data-juneAppSave", "yes"), b.layerList.children(b.layerCls + "[appID='" + a + "']").attr("data-juneAppSave", "yes")
			}), b.june.find(b.appChildCls).each(function() {
				var a = $(this).attr("attachID");
				b.june.find(b.appChildCls + "[attachID='" + a + "']").attr("data-juneAppSave", "yes"), $("#tThumb").find(b.thumbCls + "[attachID='" + a + "']").attr("data-juneAppSave", "yes")
			}), b.june.children(".junehtml").length > 0 && b.june.children(".junehtml").attr("data-juneAppSave", "yes"), b.dump.html(""), b.dumpLayer.html(""), m.used = "yes", b.chooseAction(b.actionCollection.length - 1)), b.june.find("embed").each(function() {
				$(this).parent().parent().is(b.june) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
			});
			try {
				$("#tSaveList").dialog("close"), $(".ui-tooltip").hide()
			} catch (n) {}
			try {
				b.tempArrayLabel = [], b.june.children(b.appCls).each(function() {
					b.tempArrayLabel.push($(this).attr("data-appLabel") || "")
				}), o = $("#moduleHeight").val(), p = require("scripts/code"), p.getCodeExport(function(a) {
					p.codeImportDialogCode(a), $("#moduleHeight").val(o);
					var c = require("scripts/action"),
						d = require("scripts/layer");
					b.june.children(b.appCls).each(function(a) {
						if ("" != b.tempArrayLabel[a]) {
							var f = JSON.parse($(this).attr("data-config") || "{}");
							$(this).attr("data-dblType"), f.appLabel = b.tempArrayLabel[a], $(this).attr("data-appLabel", b.tempArrayLabel[a]).attr("data-config", JSON.stringify(f)), d.updateAppLabel($(this)), c.create("edit", $(this))
						}
					}), b.tempArrayLabel = null
				}, !0, !0)
			} catch (n) {}
		} else if ("jvs_1_0" == h) {
			p = require("scripts/code"), q = g.actionCollection || "", r = g.snapCode || "", p.codeImportDialogCode(r), q && ($("#moduleHeight").val(q.juneHeightVal), s = require("scripts/action"), t = require("scripts/layer"), b.tempArrayLabel = q.arrayLabelName, b.june.children(b.appCls).each(function(a) {
				if ("" != b.tempArrayLabel[a]) {
					var d = JSON.parse($(this).attr("data-config") || "{}");
					$(this).attr("data-dblType"), d.appLabel = b.tempArrayLabel[a], $(this).attr("data-appLabel", b.tempArrayLabel[a]).attr("data-config", JSON.stringify(d)), t.updateAppLabel($(this)), s.create("edit", $(this))
				}
			}), b.tempArrayLabel = null);
			try {
				$("#tSaveList").dialog("close"), $(".ui-tooltip").hide()
			} catch (n) {}
		}
		b.tLoading(!1)
	}, a.getSave = function(a) {
		a && c.ajaxJsonT("load", {
			userName: a[1],
			type: "list"
		}, function(a) {
			try {
				$("#tSaveList").children("ul").html("");
				var c, d, e = a.length;
				for (d = e > 7 ? 7 : e, c = 0; d > c; c++)"系统自动保存" == a[c].saveName ? $("#tSaveList").children("ul").prepend('<li id="userSaveBySystem" title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>") : $("#tSaveList").children("ul").append('<li title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>");
				setPage(document.getElementById("tSavePage"), Math.ceil(a.length / 7), 1, ["", ""]), $("#tSaveList").children("ul").children("li").hide(), $("#tSaveList").children("ul").children("li").slice(0, 7).show(), $("#tSavePage").on("click", function() {
					var e = b.tParseInt($("#tSavePage").children("a.on").html()) - 1;
					if ($("#tSaveList").children("ul").children("li").length < 7 * (e + 1) + 1) for (d = 7 * (e + 1); d > c; c++) a.length > c && ("系统自动保存" == a[c].saveName ? $("#tSaveList").children("ul").prepend('<li id="userSaveBySystem" title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>") : $("#tSaveList").children("ul").append('<li title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>"));
					$("#tSaveList").children("ul").children("li").hide(), $("#tSaveList").children("ul").children("li").slice(7 * e, 7 * (e + 1)).show()
				})
			} catch (f) {}
		})
	}, a.deleteSave = function(d) {
		b.tConfirm("您正在执行删除存档的操作，是否删除该存档？", function() {
			c.ajaxJson("load", {
				ID: d,
				type: "delete"
			}, function(c) {
				c[0] && (b.tMessage("删除成功！"), a.getSave([b.tUserLogin, b.tUserName]))
			})
		})
	}, a.useSave = function(d, e, f) {
		c.ajaxJson("load", {
			ID: d,
			type: "search"
		}, function(c) {
			c.length > 0 ? a.showSave(c[0], e, f, d) : b.tMessage("应用失败，请截图给旺旺客服与我们联系，错误ID(" + d || "空)！")
		})
	}, a.detailSave = function(a) {
		var d, c = a.parent();
		c.children("li").height(40), c.find("div.t-save-detail"), a.height(120), d = a.children(":eq(0)").html(), a.append('<div class="t-save-detail" style="height:80px;"><img height="100%" src="/zxd/userSaveSnap/' + b.tUserName + d + '.png"></div>')
	}, a.control = function(c, d) {
		if (b.tUserLogin) {
			var f, g, e = $(c.target);
			f = e.parent(), "delete" == d ? (g = f.attr("data-save"), a.deleteSave(g)) : "use" == d ? (g = f.attr("data-save"), name = f.attr("data-saveName"), time = f.attr("data-saveTime"), a.useSave(g, name, time)) : "detail" == d && a.detailSave(f)
		} else b.tMessage("登录失效，请重新登录！", "login")
	}, a.toClear = function() {
		b.tConfirm(b.clearMessage, function() {
			b.june.html(""), b.dump.html(""), b.toClearInit(), b.layerList.html(""), b.dumpLayer.html("")
		})
	}, a.toAddCustom = function() {
		var a = b.appConfig,
			c = "";
		b.june.children(".junehtml").length > 0 && (b.june.children(".junehtml").tResize("destory"), c = b.june.children(".junehtml").html(), c = c.replace(/ junehref\=\"/g, ' href="'), b.june.children(".junehtml").tResize({
			tSwitch: !1
		})), d.tDialogCustom(function(c) {
			c = c.replace(/ href\=\"/g, ' junehref="');
			var d = require("scripts/action");
			b.june.children(".junehtml").length <= 0 ? ($(a["juneCustom"][0]).html(c).tResize({
				tSwitch: !1
			}).prependTo(b.june), b.june.children(".t-app-junebg").length > 0 && b.june.children(".t-app-junebg").prependTo(b.june)) : b.june.children(".junehtml").html(c).tResize({
				tSwitch: !1
			}), b.june.children(".junehtml").find("img").addClass("jhi-img"), d.create("junehtml", b.june.children(".junehtml")), b.autoJuneHeight()
		}, c)
	}, a.editJHI = function(a) {
		b.june.children(".junehtml").find("img.temping-jhi-img").removeClass("temping-jhi-img"), b.june.children(".junehtml").find("a.temping-jhi-href").removeClass("temping-jhi-href");
		var f, c = $(a.target),
			d = c.parent(),
			e = c.attr("src"),
			g = $("#jhi_1"),
			h = $("#jhi_2");
		c.addClass("temping-jhi-img"), d.is("a") ? (f = d.attr("junehref"), h.prop("readonly", !1).removeClass("disabled"), d.addClass("temping-jhi-href")) : h.prop("readonly", !0).addClass("disabled"), g.val(""), h.val(""), e && "" != e && g.val(e), f && "" != f && h.val(f), $("#jhi_dlg").dialog("open"), $("#jhi_1").blur()
	}, a.restoreLayer = function() {
		var a = require("scripts/layer");
		b.june.children(b.appCls).each(function() {
			var c = $(this),
				d = c.attr("appID"),
				e = c.attr("data-dblType"),
				f = !1,
				g = !0;
			"juneCustom" != e && (b.layerList.children(b.layerCls).each(function() {
				var a = $(this),
					b = a.attr("appID");
				return d == b ? (f = !0, g = !0, !1) : void 0
			}), b.dumpLayer.children().each(function() {
				var a = $(this),
					b = a.attr("appID");
				return status = a.attr("data-status"), d == b && "t-layer" == status ? (f = !0, g = !1, !1) : void 0
			}), f ? $(b.layerCls + "[appID='" + d + "']").prependTo(b.layerList) : (c.attr("data-appName") && "" != c.attr("data-appName") && "undefined" != c.attr("data-appName") || b.createAppName(e, d), a.createLayer(e, d)), g || ($(b.layerCls + "[appID='" + d + "']").attr("data-status", b.layerClsVal).removeClass(b.layerClsVal), b.layerList.children("[data-status='" + b.layerClsVal + "']").appendTo(b.dumpLayer)))
		})
	}, a.click = function(b) {
		switch (b) {
		case "clear":
			a.toClear();
			break;
		case "addCustom":
			a.toAddCustom()
		}
	}, a
}), define("scripts/tAjax.js", function(a) {
	var b = require("scripts/D");
	return a.ajaxJson = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.ajax({
			url: "/zxd/" + a,
			type: "POST",
			data: c,
			dataType: "json",
			async: !1,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), d.call(this, a)
			}
		}), void 0)
	}, a.ajaxJsonT = function(a, c, d) {
		$.ajax({
			url: "/zxd/" + a,
			type: "POST",
			data: c,
			dataType: "json",
			async: !0,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), d.call(this, a)
			}
		})
	}, a.ajaxJsonS = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.ajax({
			url: "/zxd/" + a,
			type: "POST",
			data: c,
			dataType: "json",
			async: !0,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), d.call(this, a)
			}
		}), void 0)
	}, a.ajaxText = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.ajax({
			url: "/zxd/" + a,
			type: "POST",
			data: c,
			dataType: "text",
			async: !1,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), d.call(this, a)
			}
		}), void 0)
	}, a.ajaxHtml = function(a, c, d) {
		b.tLoading(!0), ("anchorSelect" in c || "bigoppo" == a) && (b.anchor = [], b.june.children(b.appCls + "[data-dblType='jmdb']").each(function() {
			var a = JSON.parse($(this).attr("data-config")),
				c = a.anchorName;
			b.anchor.push(c)
		}), c.anchorName = b.anchor.join(",")), "appIDSelect" in c && (b.appIDArray = [], b.june.children(b.appCls).each(function() {
			"jpb" != $(this).attr("data-dblType") && b.appIDArray.push($(this).attr("appID"))
		}), c.appIDArray = b.appIDArray.join(",")), d || (d = function(a) {
			$("#" + b.dialogID).html(a).dialog("open"), $("#" + b.dialogID).find("textarea").parent("li").css("height", "auto")
		}), $.ajax({
			url: "/zxd/" + a,
			type: "POST",
			data: c,
			dataType: "html",
			success: function(a) {
				b.tLoading(!1), d.call(this, a)
			}
		})
	}, a
}), define("scripts/code.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage"),
		d = require("scripts/UI_Dialog"),
		e = require("scripts/checkStyle");
	return a.getCodeExport = function(b, c) {
		b && "function" == typeof b ? b(a.codeExport(c)) : a.codeExport()
	}, a.codeImportDialogCode = function(c, d, e) {
		var f, g;
		e && "2" == e || (b.june.html(""), d || (b.dump.html(""), b.toClearInit(), b.layerList.html(""), b.dumpLayer.html(""), b.popupContent.html(""))), b.addImportHeight = null, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), f = require("scripts/inputFilter"), "2" == e && (c = f.filterImportCode(c)), c = c.replace(/url\((['"]?)(.+?)\1\)/g, "url($2)"), c = c.replace(/url\((initial|none)?\)/g, ""), c = c.replace(/t-app /g, ""), c = c.replace(/\<[^\<\>]*?class\=\"[^\"]*?((jdb|job|jbob|jcb|jdlb|jcdb|jsdb|jwfb|jfsb|jqtb|jfyb|jsb|jvb|jwb|jwwb|jspb|jib|jab|jfb|jgb|jscb|jeb|jtsb|jacb|jkgb|jzzb|jmdb|jsfb|jzdb|jadb|jplb)([^\s\"]+))(?=\s|\")/g, function(a, b) {
			var d = a,
				e = b;
			return d = d.replace(new RegExp(e, "g"), e.toLowerCase())
		}), c = c.replace(/url\(\/\//g, "url(http://"), c = c.replace(/\?\s{15,99}/g, ""), c = c.replace(/[\t\r\n]/g, ""), c = c.replace(/src=('|"{1})\/\//g, "src=$1http://"), c = c.replace(/data\-widget\-config\=\"(.*?)\}\s*\"/g, function(a) {
			var b = a;
			return b = b.replace(/data\-widget\-config\=\"/g, ""), b = b.substr(0, b.length - 1), b = b.replace(/\&quot\;/g, "'"), b = b.replace(/\"/g, "'"), b = 'data-widget-config="' + b + '"'
		}), g = $('<div id="temp">' + c + "</div>"), g = g.children(".user-june"), g.children(".ele-junezx-rel").length > 0 && (g = g.children(".ele-junezx-rel").children(".abs"), c = c.replace(/\<div class=\"ele-junezx-rel\" data-title=\"power by junezx 2.0\" style="height:[^\"]*?\"\>\<div class=\"abs\" style=\"width\:990px\;\"\>/g, ""), c = $.trim(c), c = c.substr(0, c.length - 12)), g.children().each(function() {
			var d, e, f, g, h, i, j, m, k, l, c = $(this);
			c.hasClass("rel") ? (d = c.width(), e = c.height(), f = c.css("background-image").replace(/^url|[\(\)]/g, "") || "", g = c.css("background-repeat") || "repeat", h = c.css("background-attachment") || "scroll", i = c.css("background-position"), j = RGBToHex(c.css("background-color"), ""), f = f.replace(/"/g, ""), b.june.attr("style", c.attr("style")), "" == j && b.june.css("background-color", "#f2f4f8"), b.june.css("margin-left", 0), b.june.css("left", 0), 0 == d && (d = 1920, b.june.width(1920)), 0 == e && (e = "", b.june.height(2560)), checkUrl(f) && $("#moduleBgimg").val(f), $("#moduleWidth").val(d), $("#moduleHeight").val(e), "repeat" == g ? $("#boxRepeat").prop("checked", !0) : $("#boxRepeat").prop("checked", !1), "fixed" == h ? $("#boxFixed").prop("checked", !0) : $("#boxFixed").prop("checked", !1), $("#bgPosition").children("option[value='" + i + "']").prop("selected", !0), $("#moduleBgcolor").val(j), b.click() && a.toExport(c)) : c.hasClass("jpb") ? a.toExport(c, !0) : c.hasClass("japb") && (k = JSON.parse(c.attr("data-widget-config").replace(/\'/g, '"')), l = k.trigger.replace(/\./g, ""), c.appendTo(b.popupContent).attr("data-gen", "yes").prop("id", "pc_" + l), c.attr("data-parentID") && "" != c.attr("data-parentID") && (m = l, l = c.attr("data-parentID")), b.getPopupContent(l, m))
		}), b.june.find("embed").each(function() {
			$(this).parent().parent().is(b.june) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
		})
	}, a.codeExport = function(a) {
		if ("" == $("#moduleHeight").val()) return b.tMessage("您还没有设置模块高度，代码放入装修界面可能遮住下方模块！请在工具左侧模块设置中设置模块高度。", "module"), void 0;
		var c = b.getJuneStyle(),
			f = "",
			g = "";
		return b.june.children(b.appCls).each(function() {
			var a = $(this),
				d = a.attr("data-dblType");
			b.create() && ("jpb" != d ? c += b.appConfig[d][1].codeExport(a) : f += b.appConfig[d][1].codeExport(a))
		}), b.popupContent.children(".japb[data-gen='yes']").each(function() {
			var a = $(this).clone();
			a.removeAttr("data-gen").removeAttr("id"), g += $(this).prop("outerHTML")
		}), c += "</div>" + f + g, c = c.replace(/--juneForMapAbCdEfG/g, ""), c = c.replace(/wmode\=\"transparent\"\>/g, 'wmode="transparent" />'), c = c.replace(/wmode\=\"opaque\"\>/g, 'wmode="transparent" />'), c = c.replace(/\&nbsp\;/g, "&amp;nbsp;"), c = c.replace(/ junehref\=\"/g, ' href="'), $.ajax({
			url: "/zxd/insertjdcode",
			type: "POST",
			data: {
				code: c
			},
			success: function() {}
		}), c = c.replace(/(\"|\')?http:\/\/a.tbcdn.cn\/s.gif(\"|\')?/g, "http://misc.360buyimg.com/lib/img/e/blank.gif"), c = c.replace(/url\((['"]?)(.+?)\1\)/g, "url($2)"), c = e.check(c), a ? c : (d.tDialogCode(c, !1), void 0)
	}, a.codeImport = function() {
		b.snapSwitch = !1, d.tDialogCode("", !0, function(c) {
			b.june.html(""), b.dump.html(""), b.toClearInit(), b.layerList.html(""), b.dumpLayer.html(""), c = c.replace(/url\((['"]?)(.+?)\1\)/g, "url($2)");
			var d = $('<div id="temp">' + c + "</div>");
			d = d.children(".user-june"), b.juneOtherCls_jd = d.attr("data-joc") ? d.attr("data-joc") : "", d.children().each(function() {
				var d, e, f, g, h, i, j, m, k, l, c = $(this);
				c.hasClass("rel") ? (d = c.width(), e = c.height(), f = c.css("background-image").replace(/^url|[\(\)]/g, "") || "", g = c.css("background-repeat") || "repeat", h = c.css("background-attachment") || "scroll", i = c.css("background-position"), j = RGBToHex(c.css("background-color"), ""), f = f.replace(/"/g, ""), b.june.attr("style", c.attr("style")), "" == j && b.june.css("background-color", "#f2f4f8"), b.june.css("margin-left", 0), b.june.css("left", 0), 0 == d && (d = 1920, b.june.width(1920)), 0 == e && (e = "", b.june.height(2560)), checkUrl(f) && $("#moduleBgimg").val(f), $("#moduleWidth").val(d), $("#moduleHeight").val(e), "repeat" == g ? $("#boxRepeat").prop("checked", !0) : $("#boxRepeat").prop("checked", !1), "fixed" == h ? $("#boxFixed").prop("checked", !0) : $("#boxFixed").prop("checked", !1), $("#bgPosition").children("option[value='" + i + "']").prop("selected", !0), $("#moduleBgcolor").val(j), b.click() && a.toExport(c)) : c.hasClass("jpb") ? a.toExport(c, !0) : c.hasClass("japb") && (k = JSON.parse(c.attr("data-widget-config").replace(/\'/g, '"')), l = k.trigger.replace(/\./g, ""), c.appendTo(b.popupContent).attr("data-gen", "yes").prop("id", "pc_" + l), c.attr("data-parentID") && "" != c.attr("data-parentID") && (m = l, l = c.attr("data-parentID")), b.getPopupContent(l, m))
			})
		})
	}, a.toExport = function(d, e) {
		var f = d.children();
		e && (f = d), f.each(function(d, e) {
			var g, h, i, j, f = $(this);
			for (g = 0; g < b.imContrast.length; g++) if (h = b.imContrast[g].split("."), i = h[0], j = h[1], e.tagName.toLowerCase() == i && $(e).hasClass(j)) if (b.actType = j, "jkgb" == j || "jsfb" == j) try {
				b.appConfig[j][1].codeImport(f)
			} catch (k) {} else {
				if ("jspb" == j && $(e).hasClass("jfsb")) continue;
				if ("jspb" == j && $(e).hasClass("jcb")) continue;
				if ("jspb" == j && $(e).hasClass("jdb")) continue;
				try {
					c.create(j, a.setCodeConfig, f)
				} catch (k) {}
			} else if ("div" == i && "jacb" == j && $(e).hasClass("J_TWidget") && $(e).children(".nav_zhicheng").children("div").children().hasClass(j)) {
				"520px" == f.children(".nav_zhicheng").children("div").css("margin-left") ? f.attr("tFilterMode", "r") : "520px" == f.children(".nav_zhicheng").children("div").css("margin-right") ? f.attr("tFilterMode", "l") : f.attr("tFilterMode", "d");
				try {
					c.create(j, a.setCodeConfig, f)
				} catch (k) {}
			}
			f.hasClass("junehtml") && b.appConfig["juneCustom"][1].codeImport(f)
		})
	}, a.setCodeConfig = function(a, c, d, e) {
		var l, f = $(b.appCls + "[appID='" + c + "']"),
			g = JSON.parse(f.attr("data-config")),
			h = d.width(),
			i = d.height(),
			j = b.tParseInt(d.css("top")),
			k = b.tParseInt(d.css("left"));
		if (g.autoSize && (g.autoSize = "no"), g.childConfig && g.childConfig.length > 0) for (l = 0; l < g.childConfig.length; l++) g.childConfig[l].autoSize && (g.childConfig[l].autoSize = "no"), g.childConfig[l].autoSize1 && (g.childConfig[l].autoSize1 = "no");
		f.attr("data-config", JSON.stringify(g)), "jpb" != a && f.css({
			width: h,
			height: i,
			top: j,
			left: k
		}), b.appConfig[a][1].codeImport(f, c, d, e)
	}, a.codePreview = function() {
		if ("" == $("#moduleHeight").val()) return b.tMessage("您还没有设置模块高度，代码放入装修界面可能遮住下方模块！请在工具左侧模块设置中设置模块高度。", "module"), void 0;
		var c = a.codeExport(!0),
			d = $("#previewForm");
		d.children("textarea").val(c), d.submit(), d.children("textarea").html("")
	}, a
}), define("scripts/UI_Dialog.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax");
	return $('<div id="' + b.dialogID + '"></div>').appendTo(b.b), $('<div id="' + b.dialogID + '_item"></div>').appendTo(b.b), $('<div id="' + b.dialogID + '_other"></div>').appendTo(b.b), a.copyBtn = function() {
		var a = $("#" + b.dialogID).parent().children(".ui-dialog-buttonpane").children(".ui-dialog-buttonset").children("button:eq(0)");
		$("#ZeroClipboardMovie_X").length < 1 && a.zclip({
			path: "js/lib/ZeroClipboard.swf",
			copy: function() {
				return $("#" + $("#codeTextName").val()).val()
			}
		})
	}, a.tDialog = function(a, d, e, f, g) {
		b.dialogSetting.title = a, b.dialogSetting.height = "focusslider" == d ? 640 : 560, $("#" + b.dialogID).dialog(b.dialogSetting), "number" == typeof g ? e.active = g : (activeArr = g.split(";"), e.active = activeArr[0], e.activePage = activeArr[1]), c.ajaxHtml(d, e, f)
	}, a.tDialogCode = function(d, e, f, g) {
		var h = "codeforim",
			i = {
				code: d
			};
		g && "" != g && (i.codePopup = g), e ? $("#" + b.dialogID).dialog({
			title: "导入代码",
			width: 550,
			height: 580,
			buttons: {
				"导入": function() {
					var c, b = $("#importType").val();
					return (c = "1" == b ? $("#codeText").val() : $("#codeText1").val()) ? (f(c, void 0, b), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : !1
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}) : (h = "code", $("#" + b.dialogID).dialog({
			title: "生成代码",
			width: 550,
			height: 560,
			buttons: {
				"复制": function() {
					b.tMessage("复制成功！")
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), a.copyBtn()), c.ajaxHtml(h, i)
	}, a.tDialogOther = function(a, d, e, f, g) {
		var h = a,
			i = e,
			j = {
				"去除该页缩略图高级设置": function() {
					g($(this))
				},
				"确定": function() {
					f($(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			};
		"itemtextset.php" == h && (j = {
			"统一设置其他文字": function() {
				g($(this))
			},
			"确定": function() {
				f($(this))
			},
			"取消": function() {
				$(this).dialog("close"), $(".ui-tooltip").hide()
			}
		}), $("#" + b.dialogID + "_other").dialog({
			resizable: !1,
			modal: !0,
			width: 480,
			height: 500,
			title: d,
			buttons: j
		}), c.ajaxHtml(h, i, function(a) {
			$("#" + b.dialogID + "_other").html(a).dialog("open"), $("#" + b.dialogID + "_other").find("textarea").parent("li").css("height", "auto")
		})
	}, a.tDialogCustom = function(a, d) {
		var e = "code",
			f = {
				codeType: "zdy",
				code: d
			};
		$("#" + b.dialogID).dialog({
			title: "添加自定义HTML",
			width: 550,
			height: 560,
			buttons: {
				"添加": function() {
					var c = $("#codeText").val();
					return c ? (c = c.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), a(c), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : !1
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(e, f)
	}, a
}), define("scripts/drawJiaoDianLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var g, h, e = c[a],
			f = e[2].sliderSrc;
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tDynamic + e[1].tDynamic + e[1].tDynamic + e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + f[0] + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 550,
			height: 360
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.add(g), h = 0, g.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").each(function(a) {
			b.setAttachID(e[2].childConfig[0]), $(this).tResize().css({
				top: h,
				left: 550,
				width: 120,
				height: 120
			}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), $(this).children("img").attr({
				width: "100%",
				height: "100%",
				src: f[a]
			}), h += 120, $(b.appMongolia).prependTo($(this))
		}), b.setAttachID(e[2].childConfig[0]), g.children(b.appChildCls + "[data-attachType='jfsbOArrow']").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].oSrc + ")",
			top: 290,
			left: 380,
			width: 48,
			height: 48
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID).hide(), b.setAttachID(e[2].childConfig[0]), g.children(b.appChildCls + "[data-attachType='jfsbTArrow']").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].tSrc + ")",
			top: 290,
			left: 440,
			width: 48,
			height: 48
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID).hide(), d(a, e[2].appID)
	}, a
}), define("scripts/drawGuanZhu.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].attentionSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 51,
			height: 20
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.add(f), d(a, e[2].appID)
	}, a
});