define("scripts/code.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage"),
		d = require("scripts/UI_Dialog"),
		f = (require("scripts/topManage"), {
			"^00": "class=",
			"^01": "data-title=",
			"^02": "style=",
			"^03": "position:relative",
			"^04": "data-appid=",
			"^05": "overflow:hidden",
			"^06": "overflow:visible",
			"^07": "border-width:",
			"^08": "line-height:",
			"^09": "height:",
			"^0a": "normal",
			"^0b": "margin-left:",
			"^0c": "data-rn=",
			"^0d": "data-pos=",
			"^0e": "target=",
			"^0f": "_blank",
			"^0g": "_self",
			"^0h": "background-image:",
			"^0i": "outline:",
			"^0j": "display:block",
			"^0k": "display:none",
			"^0l": "z-index:",
			"^0m": "data-linkmode=",
			"^0n": "ptlink",
			"^0o": "imghover",
			"^0p": "collapse",
			"^0q": "transition:",
			"^0r": "ease-in",
			"^0s": "background:",
			"^0t": "no-repeat",
			"^0u": "jspcb",
			"^0v": "url(",
			"^0w": "data-jspbType=",
			"^0x": "www.taobao.com/webww/ww.php?ver=",
			"^0y": "data-jspbtype=",
			"^50": "imgContent",
			"^10": "action=",
			"^11": "method=",
			"^12": "searchform",
			"^13": "input",
			"^14": "keyword",
			"^15": "value=",
			"^16": "SearchForm",
			"^17": "padding:",
			"^18": "border:",
			"^19": "color:",
			"^1a": "font-family:",
			"^1b": "Arial",
			"^1c": "font-weight:",
			"^1d": "font-size:",
			"^1e": "submit",
			"^1f": "cursor:pointer",
			"^1g": ".png)",
			"^1h": "orderType",
			"^1i": "otype",
			"^1j": "hotsell_desc",
			"^1k": "jbocb",
			"^1l": "background-position",
			"^1m": "J_TWidget",
			"^1n": "data-mr=",
			"^1o": "data-widget-type=",
			"^1p": "Carousel",
			"^1q": "data-widget-config=",
			"^1r": "contentCls",
			"^1s": "navCls",
			"^1t": "effect",
			"^1u": "scrollx",
			"^1v": "scrolly",
			"^1w": "easing",
			"^1x": "easeBoth",
			"^1y": "easeBothStrong",
			"^1z": "elasticIn",
			"^20": "backIn",
			"^21": "bounceOut",
			"^22": "bounceBoth",
			"^23": "easeNone",
			"^24": "duration",
			"^25": "delay",
			"^26": "elasticOut",
			"^27": "autoplay",
			"^28": "false",
			"^29": "activeIndex",
			"^2a": "scroll",
			"^2b": "text-align:center",
			"^2c": "text-align:right",
			"^2d": "text-align:left",
			"^2e": "padding-left:",
			"^2f": "padding-right:",
			"^2g": "white-space:nowrap",
			"^2h": "center",
			"^2i": "title=",
			"^2j": "data-qmd=",
			"^2k": "data-qid=",
			"^2l": "data-t=",
			"^2m": "data-w=",
			"^2n": "data-o=",
			"^2o": "data-s=",
			"^2p": "data-hsrc=",
			"^2q": "endTime:",
			"^2r": "Countdown",
			"^2s": "embed",
			"^2t": "allowscriptaccess=",
			"^2u": "never",
			"^2v": "flashvars",
			"^2w": "scene=taobao_shop",
			"^2x": "application/x-shockwave-flash",
			"^2y": "wmode=",
			"^2z": "transparent",
			"^30": "steps",
			"^31": "circular",
			"^32": "prevBtnCls",
			"^33": "nextBtnCls",
			"^34": "interval",
			"^35": "activeTriggerCls",
			"^36": "juneactive",
			"^37": "triggerType",
			"^38": "mouse",
			"^39": "click",
			"^3a": "ks-switchable-content",
			"^3b": "elepic",
			"^3c": "elexb",
			"^3d": "true",
			"^3e": "png_bg",
			"^3f": "Compatible",
			"^3g": "ks-switchable-nav",
			"^3h": "vertical-align:",
			"^3i": "opacity:",
			"^3j": "filter:",
			"^3k": "-ms-filter:",
			"^3l": "progid:DXImageTransform.Microsoft.Alpha",
			"^3m": "DXImageTransform",
			"^3n": "Microsoft",
			"^3o": "Alpha",
			"^3p": "data-i=",
			"^3q": "wfpanel",
			"^3r": "data-a=",
			"^3s": "data-f=",
			"^3t": ".jpg)",
			"^3u": "display:inline-block",
			"^3v": "initial:",
			"^3w": "data-sm=",
			"^3x": "dianquanka",
			"^3y": "control-group",
			"^3z": "margin-right:",
			"^40": "chn-link-dianquanka",
			"^41": "split",
			"^42": "data-brandid=",
			"^43": "data-t-size=",
			"^44": "data-t-size1=",
			"^45": "data-l=",
			"^46": "data-cc=",
			"^47": "data-h=",
			"^48": "ptitem",
			"^49": "itemarea",
			"^4a": "hborder",
			"^4b": "a.tbcdn.cn/s.gif",
			"^4c": "shadowShow",
			"^4d": "solid",
			"^4e": "border-radius:",
			"^4f": "itemareachild",
			"^4g": "http://",
			"^4h": "border-color:",
			"^4i": "border-style:",
			"^4j": "width:",
			"^4k": "box-shadow:",
			"^4l": "jibbg",
			"^4m": "data-e=",
			"^4n": "jibpanel",
			"^4o": "jibtitle",
			"^4p": "jibprefix",
			"^4q": "jibprice",
			"^4r": "jibdiscountprefix",
			"^4s": "jibdiscountprice",
			"^4t": "jibsaleprefix",
			"^4u": "jibsale",
			"^4v": "Accordion",
			"^4w": "multiple",
			"^4x": "data-direction=",
			"^4y": "ks-switchable-panel",
			"^4z": "ks-switchable-trigger",
			"^51": "progid",
			"^52": "data-g=",
			"^53": "ui-brand-btn",
			"^54": "visibility",
			"^55": "visible",
			"^56": "sns-widget",
			"^57": "sns-sharebtn",
			"^58": "sns-sharebtn-default",
			"^59": "sns-widget-ui",
			"^5a": "data-sharebtn=",
			"^5b": "comment",
			"^5c": "webpage",
			"^5d": "skinType",
			"^5e": "client_id",
			"^5f": "data-comment=",
			"^5g": "isAutoHeight",
			"^5h": "param",
			"^5i": "target_key",
			"^5j": "type_id",
			"^5k": "rec_user_id",
			"^5l": "detail_list",
			"^5m": "moreurl",
			"^5n": "paramList",
			"^5o": "list_trunPage",
			"^5p": "data-url=",
			"^5q": "data-urlType=",
			"^5r": "data-mode",
			"^5s": "marquee",
			"^5t": "s linear",
			"^5u": "<span ",
			"^5v": "direction",
			"^5w": "behavior",
			"^5x": "</span>",
			"^5y": "left:",
			"^5z": "fadein",
			"^60": "word-break",
			"^61": "break-all",
			"^62": "nullpx",
			"^63": "https://",
			"^64": "dashed",
			"^65": "dotted",
			"^66": "微软雅黑",
			"^67": "宋体",
			"^68": "bolder",
			"^69": "keep-all",
			"^6a": "bold",
			"^6b": "lighter",
			"^6c": "data-shophref=",
			"^6d": "none",
			"^6e": "data-fname=",
			"^6f": "jsfbchild",
			"^6g": "jsfbchilda",
			"^6h": "data-catstype=",
			"^6i": "data-catsid=",
			"^6j": "left",
			"^6k": "justify",
			"^6l": "inherit",
			"^6m": "auto",
			"^6n": "text-decoration",
			"^6o": "underline",
			"^6p": "overline",
			"^6q": "line-through",
			"^6r": "blink",
			"^6s": "letter-spacing",
			"^6t": "length",
			"^6u": "Tabs",
			"^6v": "june-box",
			"^6w": "june-move",
			"^6x": "hidebtn",
			"^6y": "june-switch",
			"^6z": "data-junezxset=",
			"^70": "b-box",
			"^71": "data-m=",
			"^72": "jspb",
			"^73": "jmdb",
			"^74": "jzzb",
			"^75": "background-color",
			"^76": "Slide",
			"^77": "zzhtml",
			"^78": "abs",
			"^79": "rel",
			"^7a": "top:",
			"^7b": "mcblack",
			"^7c": "mcwhite",
			"^7d": "medium",
			"^7e": "thick",
			"^7f": "thin",
			"^7g": "zzmc",
			"^7h": "j_CollectBrand",
			"^7i": "cursor:default",
			"^7j": "white-space: nowrap",
			"^7k": "name=",
			"^7l": "",
			"^7m": "Popup",
			"^7n": "align",
			"^7o": "node",
			"^7p": "offset",
			"^7q": "points",
			"^7r": "ks-popup-shown",
			"^7s": "tml-mask-b2b",
			"^7t": "absolute",
			"^7u": "fixed",
			"^7v": "june-move-r360",
			"^7w": "june-move-r720",
			"^7x": "ulhover",
			"^7y": "outbox",
			"^7z": "jfsb",
			"^80": "<div",
			"^81": "</div>",
			"^82": "img01.taobaocdn.com",
			"^83": "item.taobao.com",
			"^84": "detail.tmall.com",
			"^85": "taobaocdn.com",
			"^86": "trans05s",
			"^87": "trans02s",
			"^88": "XXXXXXXXXX_",
			"^89": "bao/uploaded",
			"^8a": "imgextra",
			"^8b": "<a href=",
			"^8c": "img.alicdn.com",
			"^8d": ".gif)",
			"^8e": "item.htm?id",
			"^8f": "<img src=",
			"^8g": "item_pic.jpg",
			"^8h": "float",
			"^8i": "</a>",
			"^8j": "href=",
			"^8k": "<img ",
			"^8l": "siteid=cntaobao&status=1&charset=utf-8",
			"^8m": "amos.alicdn.com/realonline.aw?v",
			"^8n": "site=cntaobao&s=2&charset=utf-8",
			"^8o": " 50% 50% ",
			"^8p": "white-space",
			"^8q": "$",
			"^8r": "`"
		});
	return a.getCodeObj = function() {
		var c = [];
		return "ꑑ" == $("#jBtnCodePreview").next().html() && a.getChooseApp(b.june.children(b.appCls)).each(function() {
			var k, f, g, h, i, j, l, m, n, o, p, d = $(this),
				e = d.attr("data-dblType");
			/jdb|jdhb|job|jbob|jcb|jcdb|jvb|jfsb|jqtb|jwfb|jfyb|jfb|jgb|jscb|jeb|jacb|jkgb|jzzb|jzdb|jsfb|jsb|jspb|jwb|jwwb|jadb|jmdb|jtsb|jplb|jkcb|jxdb|jxxb|jllb|jrwb|jsib/.test(e) && (f = [], g = [], h = [], i = [], j = {}, b.v["toExport"](null, function() {
				e = "jdb"
			}), config = JSON.parse(d.attr("data-config") || "{}"), f[f.length] = d.width(), f[f.length] = d.height(), f[f.length] = b.tParseInt(d.css("top")), f[f.length] = b.tParseInt(d.css("left")), l = !1, (b.june.children(".junehtml").length > 0 || a.getChooseApp(b.june.children(b.appCls + "[data-dblType='jzdb']")).length > 0) && (l = !0), m = "", n = "", d.attr("data-cls") && "" != d.attr("data-cls") && (m = d.attr("data-cls")), d.attr("data-lOpacity") && "" != d.attr("data-lOpacity") && (n = d.attr("data-lOpacity")), b["s"]["toExport"](null, function() {
				b.june.html("")
			}), d.attr("data-papp", "yes"), /jbob|jcdb|jacb|jkgb|jxxb|jzzb|jsb|jspb/.test(e) ? d.children(b.appChildCls).each(function() {
				var d = $(this),
					f = {};
				f.top = b.tParseInt(d.css("top")), f.left = b.tParseInt(d.css("left")), f.width = d.width(), f.height = d.height(), /jzzb|jsb/.test(e) && (f.attachType = d.attr("data-attachType")), /jspb|jkgb|jbob|jxxb/.test(e) && (f.attachID = d.attr("attachID"), f.dataOpacity = d.attr("data-lopacity") || "100", f.appoverzc = d.attr("data-appoverzc") || "no"), g.push(f)
			}) : /jfsb|jqtb|jwfb/.test(e) ? (k = 0, d.children(b.appChildCls).each(function(a) {
				var e = d.children(b.appChildCls).eq(a),
					f = e.attr("data-attachType"),
					j = {};
				j.top = b.tParseInt(e.css("top")), j.left = b.tParseInt(e.css("left")), j.width = e.width(), j.height = e.height(), /jfsbOArrow|jfsbTArrow|jqtbOArrow|jqtbTArrow|jwfbOArrow|jwfbTArrow/.test(f) ? (j.attachType = f, g.push(j)) : /jfsbSmallImg|jqtbSmallImg|jwfbSmallImg/.test(f) ? (k < config.sliderHref.length && (j.attachID = e.attr("attachID"), h.push(j)), k++) : "lbePanel" == f && i.push(j)
			}), "jwfb" == e && (j["newWidth"] = d.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width(), j["newHeight"] = d.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height(), 0 == j["newWidth"] && (j["newWidth"] = d.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").children().width()), 0 == j["newHeight"] && (j["newHeight"] = d.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").children().height()), j["juneWidth"] = b.june.width(), j["juneHeight"] = b.june.height())) : "jfyb" == e ? (o = d.children(b.appChildCls + "[data-attachType='jfybPanel']"), j["jfybPanel"] = {}, j["jfybPanel"].top = b.tParseInt(o.css("top")), j["jfybPanel"].left = b.tParseInt(o.css("left")), j["jfybPanel"].width = o.width(), j["jfybPanel"].height = o.height(), k = 0, o.children(b.appOtherCls + "[data-attachType='jfybSmallImg']").each(function() {
				var d, a = $(this),
					e = (a.attr("data-attachType"), {});
				d = b.getChildPos(o, a, !1), e.top = d.top, e.left = d.left, e.width = d.width, e.height = d.height, k < config.sliderHref.length && (e.attachID = a.attr("attachID"), h.push(e)), k++
			}), d.children(b.appChildCls).each(function() {
				var f, d = $(this),
					e = d.attr("data-attachType"),
					h = {};
				/jfybOArrow|jfybTArrow/.test(e) && (f = b.getChildPos(o, d, !1), h.top = f.top, h.left = f.left, h.width = f.width, h.height = f.height, h.attachType = e, g.push(h))
			})) : "jsfb" == e ? (j["shopHref"] = d.attr("data-shopHref"), j["formatName"] = d.attr("data-formatName"), d.children(b.appChildCls + ":not(.jsfbchildd)").each(function() {
				var a = $(this),
					c = JSON.parse(a.attr("data-attachConfig") || "{}"),
					d = {};
				d.cCls = "", d.top = b.tParseInt(a.css("top")), d.left = b.tParseInt(a.css("left")), d.width = a.width(), d.height = a.height(), d.attachConfig = c, a.hasClass("jsfbchilda") && !a.hasClass("jsfbchildc") ? d.cCls = "a" : a.hasClass("jsfbchildb") && !a.hasClass("jsfbchildc") ? d.cCls = "b" : a.hasClass("jsfbchildc") && (d.cCls = "c"), g.push(d)
			})) : "jtsb" == e ? (p = d.children(b.appOtherCls).children("div"), j["sfwidth"] = p.width(), j["sfheight"] = p.height()) : "jadb" == e ? (d.children(".t-jadb-title").each(function() {
				var a = $(this),
					d = (a.attr("data-attachType"), {});
				d.width = a.width(), d.height = a.height(), g.push(d)
			}), d.children(".t-jadb-panel").each(function() {
				var a = $(this),
					d = (a.attr("data-attachType"), {});
				d.width = a.width(), d.height = a.height(), d.isHide = a.is(":hidden") ? "yes" : "no", d.isOpen = "yes" == a.attr("data-opened") ? "yes" : "no", h.push(d)
			}), "yes" == d.attr("data-adch") && (j["openWH"] = d.attr("data-pwh"), j["closeWH"] = d.attr("data-pwhs"))) : "jllb" == e ? (j["direction"] = d.attr("data-d"), j["lineLength"] = d.attr("data-lineLength")) : "jpb" == e && ($("#jstForPopup").html(config.customHtml), j["jfpWidth"] = $("#jstForPopup").outerWidth(), j["jfpHeight"] = $("#jstForPopup").outerHeight()), c[c.length] = {
				appType: e,
				config: config,
				pos: f.join("|"),
				check_1: l,
				dataCls: m,
				dataOpacity: n,
				childData: g,
				childData_1: h,
				childExData: i,
				curExData: j
			})
		}), c
	}, a.getJfsbData = function() {}, a.codeExportChoose = function() {
		b.zdyToEnter(!0), b.zdyAllIndex = 0, b.juneAppChooseExport = !0, b.singleLayoutCount(b.june.children(b.appCls + ".ui-selected")), a.getCodeExport(function() {
			b.zdyAllIndex++, b.zdyToLeave(), b.zdyToScroll(), b.layoutCanvas()
		})
	}, a.appPreview = function() {}, a.getChooseApp = function(a) {
		return b.juneAppChooseExport ? a.filter(".ui-selected") : a
	}, a.getCodeExport = function(c, d, e) {
		b.thisTimeCode = "";
		var f = a.getCodeObj();
		f.length > 0 ? $.ajax({
			url: "/3.0/js/thr.php",
			type: "POST",
			data: {
				codeObj: f
			},
			success: function(f) {
				b.thisTimeCode = f, c && "function" == typeof c ? c(a.codeExport(d, e)) : a.codeExport(d, e)
			},
			error: function(a) {
				b.thisTimeCode = "", b.tMessage("获取参数失败，请重新尝试生成代码！错误码：" + a.status)
			}
		}) : c && "function" == typeof c ? c(a.codeExport(d, e)) : a.codeExport(d, e)
	}, a.codeExport = function(c, e) {
		var g, i, j, k, l, m, n, o, p, q;
		if (c && "specJ" == b.previewType && ($("#previewJ"), g = $("#previewJspan"), b.tUserLogin && "" != b.tUserName, g.trigger("click")), b.june.attr("id"), i = !0, e)"2561" == $("#moduleHeight").val() && $("#moduleHeight").val("");
		else if ("" == $("#moduleHeight").val()) return $("#jHeightMessageOver").show(), $("#modulesetx").trigger("click"), void 0;
		return 0 == b.zdyAllIndex && (i = !1), j = b.getJuneStyle(i), k = "", l = "", m = "", b.appidExArray = [], a.getChooseApp(b.june.children(b.appCls)).each(function() {
			var f, a = $(this),
				c = a.attr("data-dblType"),
				d = "",
				e = "";
			if (b.create()) {
				if (!c) return !0;
				if ("juneGroup" == c) return !0;
				"jpb" != c ? (f = a.attr("appID"), $.inArray(f, b.appidExArray) < 0 && (d = b.appConfig[c][1].codeExport(a), a.attr("data-cls") && "" != a.attr("data-cls") && (e = " " + a.attr("data-cls") + '" data-cls="' + a.attr("data-cls") + '"', d = d.replace(/\<(div|a|form)[^\<\>]*?class\=(\"[^\"]*?(jdb|jdhb|job|jbob|jcb|jcdb|jvb|jfsb|jqtb|jwfb|jfyb|jfb|jgb|jscb|jeb|jacb|jkgb|jzzb|jzdb|jsfb|jsb|jspb|jwb|jwwb|jadb|jmdb|jtsb|jplb|jkcb|jxdb|jxxb|jllb|jrwb|jsib)[^\"]*?\")[^\<\>]*?\>/g, function(a, b, c) {
					return a = a.replace(c, c.substr(0, c.length - 1) + e)
				})), j += d, b.appidExArray.push(f))) : (d = b.appConfig[c][1].codeExport(a), a.attr("data-cls") && "" != a.attr("data-cls") && (e = " " + a.attr("data-cls") + '" data-cls="' + a.attr("data-cls") + '"', d = d.replace(/\<(div|a|form)[^\<\>]*?class\=(\"[^\"]*?(jdb|jdhb|job|jbob|jcb|jcdb|jvb|jfsb|jqtb|jwfb|jfyb|jfb|jgb|jscb|jeb|jacb|jkgb|jzzb|jzdb|jsfb|jsb|jspb|jwb|jwwb|jadb|jmdb|jtsb|jplb|jkcb|jxdb|jxxb|jllb|jrwb|jsib)[^\"]*?\")[^\<\>]*?\>/g, function(a, b, c) {
					return a = a.replace(c, c.substr(0, c.length - 1) + e)
				})), k += d)
			}
		}), b.popupContent.children(".japb[data-gen='yes']").each(function() {
			var e, c = $(this).clone(),
				d = c.attr("id").replace(/pc_/g, "");
			c.attr("data-parentID") && "" != c.attr("data-parentID") && (e = d, d = c.attr("data-parentID")), e ? a.getChooseApp(b.june.find(b.appCls + "[appID='" + d + "']")).length > 0 ? (c.removeAttr("data-gen").removeAttr("id"), l += c.prop("outerHTML")) : $(this).attr("data-gen", "no") : a.getChooseApp(b.june.children(b.appCls + "[appID='" + d + "']")).length > 0 ? (c.removeAttr("data-gen").removeAttr("id"), l += c.prop("outerHTML")) : $(this).attr("data-gen", "no")
		}), b.thisTimeCode && "" != b.thisTimeCode && (n = b.thisTimeCode.split("${!|}"), o = 0, j = tReplace(j, /(\${!(jdb|jdhb|job|jbob|jcb|jcdb|jvb|jfsb|jqtb|jwfb|jfyb|jfb|jgb|jscb|jeb|jacb|jkgb|jzzb|jzdb|jsfb|jsb|jspb|jwb|jwwb|jadb|jmdb|jtsb|jplb|jkcb|jxdb|jxxb|jllb|jrwb|jsib)})/g, function(c, d, e) {
			var g = n[o],
				h = a.getChooseApp(b.june.children(b.appCls + "[data-papp='yes']")).eq(o),
				i = "";
			return h.attr("data-cls") && "" != h.attr("data-cls") && (i = " " + h.attr("data-cls") + '" data-cls="' + h.attr("data-cls") + '"', g = g.replace(/\<(div|a|form)[^\<\>]*?class\=(\"[^\"]*?(jdb|jdhb|job|jbob|jcb|jcdb|jvb|jfsb|jqtb|jwfb|jfyb|jfb|jgb|jscb|jeb|jacb|jkgb|jzzb|jzdb|jsfb|jsb|jspb|jwb|jwwb|jadb|jmdb|jtsb|jplb|jkcb|jxdb|jxxb|jllb|jrwb|jsib)[^\"]*?\")[^\<\>]*?\>/g, function(a, b, c) {
				return a = a.replace(c, c.substr(0, c.length - 1) + i)
			})), o++, g
		}), a.getChooseApp(b.june.children(b.appCls + "[data-papp='yes']")).removeAttr("data-papp"), b.thisTimeCode = ""), j += "</div>" + k + l, j = j.replace(/--juneForMapAbCdEfG/g, ""), j = b.filterUrl(j), j = j.replace(/wmode\=\"transparent\"\>/g, 'wmode="transparent" />'), j = j.replace(/wmode\=\"opaque\"\>/g, 'wmode="transparent" />'), j = j.replace(/(<embed([^>]*?))(\/?>)(?!<\/embed>)/g, function(a, b) {
			return b + "></embed>"
		}), j = j.replace(/(<embed([^>]*?))(\/>)(<\/embed>)/g, function(a, b) {
			return b + "></embed>"
		}), j = j.replace(/￥|¥/g, "￥"), j = j.replace(/&yen;/g, "￥"), j = j.replace(/\u00A0/g, "&nbsp;"), j = j.replace(/&amp;yen;/g, "￥"), j = j.replace(/\?\s{15,99}/g, ""), b["v"]["toExport"](null, function() {
			j = j.replace(/\d/g, "")
		}), j = j.replace(/[\t\r\n]/g, ""), j = j.replace(/\&nbsp\;/g, "&amp;nbsp;"), j = j.replace(/ junehref\=\"/g, ' href="'), j = j.replace(/ data-widget-init=\"1\"/g, ""), j = j.replace(/juneappcategory/g, " shop%7b$shop.id%7d.taobao.com"), (c || b.zdyAllIndex > 0) && (j = j.replace(/junezxleftisme\;/g, "")), j = j.indexOf("jvb") >= 0 ? j.replace(/junezxneedcheckembed\;/g, "background-image:url(http://a.tbcdn.cn/s.gif);") : j.replace(/junezxneedcheckembed\;/g, ""), p = 1, c && (p = 0), b.juneAppChooseExport = !1, 0 != b.zdyAllIndex ? j : (b.tUserLogin && "" != b.tUserName && "1" == p && $.ajax({
			url: "/3.0/insertcode.php",
			type: "POST",
			data: {
				code: j,
				username: b.tUserName,
				shareType: p
			},
			success: function(a) {
				b.insertID = a
			}
		}), c ? j : (q = require("scripts/tDateDay.js"), m = k + l, m = m.replace(/--juneForMapAbCdEfG/g, ""), m = m.replace(/juneappcategory/g, " shop%7b$shop.id%7d.taobao.com"), m = b.filterUrl(m), m = m.replace(/wmode\=\"transparent\"\>/g, 'wmode="transparent" />'), m = m.replace(/wmode\=\"opaque\"\>/g, 'wmode="transparent" />'), m = m.replace(/\?\s{15,99}/g, ""), m = m.replace(/[\t\r\n]/g, ""), m = m.replace(/\&nbsp\;/g, "&amp;nbsp;"), m = m.replace(/ junehref\=\"/g, ' href="'), (c || b.zdyAllIndex > 0) && (m = m.replace(/junezxleftisme\;/g, "")), m = m.indexOf("jvb") >= 0 ? m.replace(/junezxneedcheckembed\;/g, "background-image:url(http://a.tbcdn.cn/s.gif);") : m.replace(/junezxneedcheckembed\;/g, ""), q.click(function() {
			d.tDialogCode(j, !1, void 0, m)
		}), void 0))
	}, a.codeImportJune = function(a, c, d) {
		var g, h, i, j, k, l, m, n, e = require("scripts/readHeader"),
			f = a.attr("style");
		/initial/.test(f) && (newSff = f.replace(/background:([^;]*?)(;|$)/, function(a, b, c) {
			var d = b,
				e = d.split(")"),
				f = e[0],
				g = e[1];
			return /\s?((\d{1,2}(px|%)?)|top|center|left|right|bottom)(\s\1)?\s/.test(g) || (g = g.replace("initial", "50% 50%")), /repeat/.test(g) || (g = g.replace("initial", "no-repeat")), /scroll|fixed/.test(g) || (g = g.replace("initial", "scroll")), "background:" + f + ")" + g + c
		}), a.attr("style", newSff)), g = a.width(), h = a.height(), i = "", j = a.css("background-image").replace(/^url|[\(\"\)]*/g, "") || "", k = a.css("background-attachment") || "scroll", l = a.css("background-repeat") || "no-repeat", m = a.css("background-position"), n = RGBToHex(a.css("background-color"), ""), j = j.replace(/"/g, ""), c && (i = j, j = a.attr("data-bgimg") || "", "" == j && checkUrl(i) ? (l = "no-repeat", k = "scroll") : (l = a.attr("data-repeat") || "", k = a.attr("data-attachment") || ""), m = a.attr("data-position") || ""), b.june.attr("style", a.attr("style")), "" == n && b.june.css("background-color", "transparent"), b.appOverSwitch = "visible" == b.june.css("overflow") ? !0 : !1, b.june.css({
			left: 0,
			top: 0,
			"float": "left"
		}), 0 == g && (g = 1920, b.june.width(1920)), (0 == h || 2561 == h) && (h = "", b.june.height(2561)), checkUrl(j) ? b.june.attr("data-bgimg", j) : b.june.attr("data-bgimg", ""), b.june.attr("data-repeat", l), b.june.attr("data-attachment", k), b.june.attr("data-position", m), "zdy" != d && ($("#moduleWidth").val(g), $("#moduleHeight").val(h), $("#moduleBgcolor").val(n), e.page_read($("#tm_page_set")), b.layoutCanvas(!0), b.updateGrid())
	}, a.codeImportDialogCode = function(c, d, e) {
		var i, j, k, g = b.june,
			h = b.popupContent;
		/\^([a-z0-9]){2}/g.test(c) && (c = c.replace(/\$/g, "<").replace(/\`/g, ">"), c = c.replace(/\^[a-z0-9]{2}/g, function(a) {
			return f[a]
		})), d && "zdy" == d && (g = b.zdybox, h = b.popupContentZdy, b.oldJune = b.june, b.oldPopup = b.popupContent, b.june = b.zdybox, b.popupContent = b.popupContentZdy), e && "2" == e || (g.html(""), d || (b.layerList.html(""), b.dumpLayer.html(""), b.dump.html(""), h.html(""), b.toClearInit())), b.addImportHeight = null, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), i = require("scripts/inputFilter"), "2" == e && (c = i.filterImportCode(c)), b.code_im_mode = /power by junezx 3\.0/.test(c) ? "3.0" : /power by junezx 2\.0/.test(c) ? "2.0" : "zdy", c = c.replace(/id=%20/g, "id="), c = c.replace(/url\((['"]?)(.+?)\1\)/g, "url($2)"), c = c.replace(/url\((initial|none)?\)/g, ""), c = c.replace(/(t-app |j-fnd )/g, ""), c = c.replace(/\<[^\<\>]*?class\=\"[^\"]*?((jdb|job|jbob|jcb|jdlb|jcdb|jsdb|jwfb|jfsb|jqtb|jfyb|jsb|jvb|jwb|jwwb|jspb|jib|jab|jfb|jgb|jscb|jeb|jtsb|jacb|jkgb|jzzb|jmdb|jsfb|jzdb|jadb|jplb)([^\s\"]+))(?=\s|\")/g, function(a, b) {
			var d = a,
				e = b;
			return d = d.replace(new RegExp(e, "g"), e.toLowerCase())
		}), c = c.replace(/url\(\/\//g, "url(http://"), c = c.replace(/\?\s{15,99}/g, ""), c = c.replace(/[\t\r\n]/g, ""), c = c.replace(/￥|¥/g, "￥"), c = c.replace(/&yen;/g, "￥"), c = c.replace(/&amp;yen;/g, "￥"), c = c.replace(/src=('|"{1})\/\//g, "src=$1http://"), c = c.replace(/\&amp\;nbsp\;/g, "&nbsp;"), c = c.replace(/data\-widget\-config\=\"(.*?)\}\s*\"/g, function(a) {
			var b = a;
			return b = b.replace(/data\-widget\-config\=\"/g, ""), b = b.substr(0, b.length - 1), b = b.replace(/\&quot\;/g, "'"), b = b.replace(/\"/g, "'"), b = 'data-widget-config="' + b + '"'
		}), j = $('<div id="temp">' + c + "</div>"), j.children(".ele-womu-rel").length > 0 && (j = j.children(".ele-womu-rel").children(".abs"), c = c.replace(/\<div class=\"ele-womu-rel\" data-title=\"power by womu3.0\" style="height:[^\"]*?\"\>\<div class=\"abs\" style=\"width\:990px\;\"\>/g, ""), c = $.trim(c), c = c.substr(0, c.length - 12)), k = !1, j.children().each(function() {
			var j, l, m, p, n, o, i = $(this);
			i.hasClass("rel") ? (m = i.height(), "2" != e ? a.codeImportJune(i, null, d) : (j = i.clone(), l = j.children(".junehtml"), i.children(".junehtml").remove(), j.html(l), j.html(j.prop("outerHTML")).addClass("jzdb").css({
				top: 0,
				left: 0
			}), a.toExport(j, !0)), d && "zdy" == d && b.addImportHeight && (g.height(m + b.addImportHeight), $("#moduleHeight").val(m + b.addImportHeight), "2561" == $("#moduleHeight").val() && $("#moduleHeight").val("")), b.click() && a.toExport(i, !1)) : i.hasClass("jpb") ? a.toExport(i, !0) : i.hasClass("japb") ? (n = JSON.parse(i.attr("data-widget-config").replace(/\'/g, '"')), o = n.trigger.replace(/\./g, ""), $("#pc_" + o).length < 1 && i.attr("class", "J_TWidget japb abs").attr("style", "z-index:99;display:none;").appendTo(h).attr("data-gen", "yes").prop("id", "pc_" + o), i.attr("data-parentID") && "" != i.attr("data-parentID") && (p = o, o = i.attr("data-parentID")), b.getPopupContent(o, p)) : d && (k = !0)
		}), d && k && (c = c.replace(/ href\=\"/g, ' junehref="'), c = c.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), g.children(".junehtml").length <= 0 ? $(b.appConfig["juneCustom"][0]).html(c).tResize({
			tSwitch: !1
		}).prependTo(g) : g.children(".junehtml").append(c).tResize({
			tSwitch: !1
		})), g.find("embed").each(function() {
			$(this).parent().parent().is(g) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
		}), d && "zdy" == d && (b.june = b.oldJune, b.popupContent = b.oldPopup), b.showAllwz()
	}, a.codeImport = function() {
		d.tDialogCode("", !0, a.codeImportDialogCode)
	}, a.toExport = function(d, e) {
		var f = d.children();
		require("scripts/pencil"), e && (f = d), b.appidImArray = [], f.each(function(d, e) {
			var g, h, i, j, k, f = $(this);
			if (b.DataCls = null, f.attr("data-appid") && "" != f.attr("data-appid") && (g = f.attr("data-appid")), !g || $.inArray(g, b.appidImArray) < 0) {
				for (h = 0; h < b.imContrast.length; h++) if (i = b.imContrast[h].split("."), j = i[0], k = i[1], e.tagName.toLowerCase() == j && $(e).hasClass(k)) {
					if (b.actType = k, f.attr("data-cls") && "" != f.attr("data-cls") && (b.DataCls = f.attr("data-cls")), b.addImportHeight && f.css("top", b.tParseInt(f.css("top")) + b.addImportHeight), "jsdb" == k && (k = "jfsb", b.actType = "jfsb"), "jdlb" == k && (k = "jcb", b.actType = "jcb"), "jkgb" != k) {
						if ("jspb" == k && $(e).hasClass("jfsb")) continue;
						if ("jspb" == k && $(e).hasClass("jqtb")) continue;
						if ("jspb" == k && $(e).hasClass("jcb")) continue;
						if ("jspb" == k && $(e).hasClass("jdb")) continue;
						if ("jspb" == k && $(e).hasClass("jfyb")) continue;
						if ("jspb" == k && $(e).hasClass("jwfb")) continue;
						c.create(k, a.setCodeConfig, f);
						break
					}
					b.appConfig[k][1].codeImport(f)
				} else if ("div" == j && "jacb" == k && $(e).hasClass("J_TWidget") && $(e).children(".nav_zhicheng").children("div").children().hasClass(k)) {
					b.addImportHeight && f.css("top", b.tParseInt(f.css("top")) + b.addImportHeight), "520px" == f.children(".nav_zhicheng").children("div").css("margin-left") ? f.attr("tFilterMode", "r") : "520px" == f.children(".nav_zhicheng").children("div").css("margin-right") ? f.attr("tFilterMode", "l") : f.attr("tFilterMode", "d"), c.create(k, a.setCodeConfig, f);
					break
				}
				g && b.appidImArray.push(g)
			}
			f.hasClass("junehtml") && b.appConfig["juneCustom"][1].codeImport(f)
		})
	}, a.setCodeConfig = function(a, c, d, e) {
		var l, f = $(b.appParentCls + "[appID='" + c + "']"),
			g = JSON.parse(f.attr("data-config")),
			h = d.outerHeight(),
			i = d.outerWidth(),
			j = b.tParseInt(d.css("top")),
			k = b.tParseInt(d.css("left"));
		if (g.autoSize && (g.autoSize = "no"), g.childConfig && g.childConfig.length > 0) for (l = 0; l < g.childConfig.length; l++) g.childConfig[l].autoSize && (g.childConfig[l].autoSize = "no"), g.childConfig[l].autoSize1 && (g.childConfig[l].autoSize1 = "no");
		f.attr("data-config", JSON.stringify(g)), "jpb" != a && f.css({
			width: i,
			height: h,
			top: j,
			left: k
		}), b.DataCls && f.attr("data-cls", b.DataCls), b.appConfig[a][1].codeImport(f, c, d, e)
	}, a.codePreview = function() {
		if ("" == $("#moduleHeight").val()) return $("#jHeightMessageOver").show(), $("#modulesetx").trigger("click"), void 0;
		b.previewType = b.june.children(b.appCls + "[data-dbltype='jib']").length > 0 ? "normal" : "normal";
		var d, c = a.codeExport(!0),
			e = a.getCodeObj(),
			f = $("#juneCustomCss").html();
		"normal" == b.previewType && (d = $("#previewForm"), d.children("textarea:eq(0)").val(c), e.length > 0 && d.children("textarea:eq(1)").val(JSON.stringify(e)), d.children("textarea:eq(2)").val(f), d.submit(), d.children("textarea").html(""))
	}, a
}), define("scripts/moduleManage.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax"),
		d = require("scripts/UI_Dialog");
	return a.snapSave = function(a) {
		require("scripts/action"), b.tLoading(!0), b.startParse = !0, setTimeout(function() {
			var d, c = {};
			c.xType = "jxg_0_1", b.tempArrayLabel = [], c.nType = "jvs_1_0", sortGroupAll(), b.june.find(b.appCls + ":not(.june-group)").each(function() {
				var a = $(this),
					c = a.attr("appID"),
					d = a.attr("attachID"),
					e = a.attr("data-appLabel") || a.attr("data-appName"),
					f = {};
				f.appID = c, f.attachID = d, f.type = d && "" != d ? "appchild" : "app", f.appLabel = e, b.tempArrayLabel.push(f)
			}), c.arrayLabelName = b.tempArrayLabel, c.juneHeightVal = $("#moduleHeight").val(), c.layerListHtml = b.layerList.html(), b.juneSnapArray1 = $.extend({}, c), b.tLoading(!1), b.startParse = !1, d = require("scripts/code"), d.getCodeExport(function(b) {
				a(b)
			}, !0, !0)
		}, 1e3)
	}, a.toSave = function(e) {
		b.tUserLogin ? d.tDialogSave(function(d, f, g, h) {
			var j, i = $("#savetree").attr("data-curfid") || "0";
			return "" == d ? (b.tMessage("请输入一个名称！"), void 0) : (j = d.length, j > 15 ? (b.tMessage("请输入长度在15以内的名称！"), void 0) : (d != g ? a.snapSave(function(f) {
				var g = {};
				g.actionConfig = f, g.actionCollection = b.juneSnapArray1, b.tLoading(!0), c.ajaxJsonS("save.php", {
					userName: e[1],
					folderID: i,
					saveName: d,
					saveObj: g
				}, function(f) {
					if (f[0]) b.tLoading(!0), b.tLoading(!1), b.tMessage(f[1]), b.openSaveDocName = d, f[2] && (b.openSaveDocID = f[2]), f[3] && (b.openSaveDocTime = f[3]), a.getSave([b.tUserLogin, b.tUserName]);
					else if ("already" == f[1]) {
						var h = "";
						f[3] && (h = f[3]), b.tConfirm(f[2], function() {
							c.ajaxJsonS("save.php", {
								saveName: d,
								userName: e[1],
								sasID: h,
								folderID: i,
								type: "cover",
								saveObj: g
							}, function(c) {
								b.tLoading(!1), b.tMessage(c[1]), c[2] && (b.openSaveDocID = c[2]), b.openSaveDocName = d, c[3] && (b.openSaveDocTime = c[3]), a.getSave([b.tUserLogin, b.tUserName])
							})
						})
					} else b.tMessage(f[1])
				})
			}) : b.tConfirm("您已经保存了一份相同名称的存档，是否覆盖该存档？", function() {
				a.snapSave(function(f) {
					var g = {};
					g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("save.php", {
						userName: e[1],
						sasID: h || "",
						saveName: d,
						folderID: i,
						type: "cover",
						saveObj: g
					}, function(c) {
						b.tLoading(!1), b.tMessage(c[1]), b.openSaveDocName = d, c[2] && (b.openSaveDocID = c[2]), c[3] && (b.openSaveDocTime = c[3]), a.getSave([b.tUserLogin, b.tUserName])
					})
				})
			}, function() {
				b.tLoading(!1)
			}), void 0))
		}) : b.tMessage("登录失效，请重新登录！", "login")
	}, a.autoSave = function() {}, a.showSave = function(c, d, e, f, g) {
		var h, i, j, k, l, m, n, o, p, q, r, t, u, v, w, x, y, z, A, B;
		if (b.tLoading(!0), b.openSaveDocTime = e, b.openSaveDocName = d, b.jSelectsedDom = $(), b.openSaveDocID = f, h = b.june, i = b.popupContent, j = !0, g && "zdy" == g && (h = b.zdybox, i = b.popupContentZdy, j = !1), k = c, l = "", m = "", k.actionCollection && (n = k.actionCollection, n["nType"] && (l = n["nType"]), n["xType"] && (m = n["xType"])), "" == l) {
			if (k.june = rfxgForHtml(k.june), h.html(k.june).attr("style", k.juneStyle), j && (h.children(b.appCls + ".ui-selected").each(function() {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), h.find(b.appChildCls + ".ui-selected").each(function() {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			})), h.children(b.appCls + "[data-dblType='jib']").length > 0 && h.children(b.appCls + "[data-dblType='jib']").each(function() {
				var a = $(this);
				a.find("[data-attachType]").each(function() {
					var a = $(this).attr("data-attachType");
					$(this).attr("data-attachType", a.toLowerCase())
				})
			}), !! j && b.dump.html(k.dump), i.html(k.popupContent), j && ($("#moduleWidth").val(k.moduleWidth), $("#moduleHeight").val(k.moduleHeight), "2561" == $("#moduleHeight").val() && $("#moduleHeight").val(""), $("#moduleBgimg").val(k.moduleBgimg), k.boxRepeat = "true" == k.boxRepeat ? !0 : !1, k.boxFixed = "true" == k.boxFixed ? !0 : !1, $("#boxRepeat").prop("checked", Boolean(k.boxRepeat)), $("#boxFixed").prop("checked", Boolean(k.boxFixed)), $("#bgPosition").val(k.bgPosition), $("#moduleBgcolor").val(k.moduleBgcolor)), b.actionCollection = b.toClear(k.actionCollection), b.actionConfig = b.toClear(k.actionConfig), j && (b.layerList.html(k.layerList), b.dumpLayer.html(k.dumpLayer), a.restoreLayer()), o = b.actionCollection[0], p = b.actionConfig[0], "juneSnap" == o.type && (q = $("<div>" + p.html + "</div>"), q.children(b.appCls).each(function() {
				var a = $(this).attr("appID");
				h.find(b.appCls + "[appID='" + a + "']").attr("data-Jsnap", "yes"), !! j && b.layerList.children(b.layerCls + "[appID='" + a + "']").attr("data-Jsnap", "yes")
			}), q.find(b.appChildCls).each(function() {
				var a = $(this).attr("attachID");
				h.find(b.appChildCls + "[attachID='" + a + "']").attr("data-Jsnap", "yes")
			}), o.used = "yes"), r = b.actionCollection[1], r.type && "juneAppSave" == r.type && (h.children(b.appCls).each(function() {
				var a = $(this).attr("appID");
				h.find(b.appCls + "[appID='" + a + "']").attr("data-juneAppSave", "yes"), !! j && b.layerList.children(b.layerCls + "[appID='" + a + "']").attr("data-juneAppSave", "yes")
			}), h.find(b.appChildCls).each(function() {
				var a = $(this).attr("attachID");
				h.find(b.appChildCls + "[attachID='" + a + "']").attr("data-juneAppSave", "yes")
			}), h.children(".junehtml").length > 0 && h.children(".junehtml").attr("data-juneAppSave", "yes"), j && (b.dump.html(""), b.dumpLayer.html("")), r.used = "yes"), h.find("embed").each(function() {
				$(this).parent().parent().is(h) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
			}), j) try {
				$("#tSaveList").dialog("close"), $(".ui-tooltip").hide()
			} catch (s) {}
			try {
				b.tempArrayLabel = [], h.children(b.appCls).each(function() {
					b.tempArrayLabel.push($(this).attr("data-appLabel") || "")
				}), t = $("#moduleHeight").val(), u = require("scripts/code"), u.getCodeExport(function(a) {
					u.codeImportDialogCode(a), j && ($("#moduleHeight").val(t), "2561" == $("#moduleHeight").val() && $("#moduleHeight").val(""));
					var c = require("scripts/action"),
						d = require("scripts/layer");
					h.children(b.appCls).each(function(a) {
						if ("" != b.tempArrayLabel[a]) {
							var f = JSON.parse($(this).attr("data-config") || "{}");
							$(this).attr("data-dblType"), f.appLabel = b.tempArrayLabel[a], $(this).attr("data-appLabel", b.tempArrayLabel[a]).attr("data-config", JSON.stringify(f)), j && (d.updateAppLabel($(this)), c.create("edit", $(this)))
						}
					}), b.tempArrayLabel = null
				}, !0, !0)
			} catch (s) {}
		} else if ("jvs_1_0" == l) {
			if (u = require("scripts/code"), v = k.actionCollection || "", w = k.snapCode || "", u.codeImportDialogCode(w, g), v) {
				if ( !! j && $("#moduleHeight").val(v.juneHeightVal), x = require("scripts/action"), y = require("scripts/layer"), b.tempArrayLabel = v.arrayLabelName || [], b.tempArrayLabel.constructor != Array && (b.tempArrayLabel = []), "jxg_0_1" != m) h.children(b.appCls).each(function(a) {
					if ("" != b.tempArrayLabel[a]) {
						var d = JSON.parse($(this).attr("data-config") || "{}");
						$(this).attr("data-dblType"), d.appLabel = b.tempArrayLabel[a], $(this).attr("data-appLabel", b.tempArrayLabel[a]).attr("data-config", JSON.stringify(d)), j && (y.updateAppLabel($(this)), x.create("edit", $(this)))
					}
				});
				else {
					for (z = 0, A = null, B = 0; B < b.tempArrayLabel.length; B++) / 组\d / .test(b.tempArrayLabel[B].appLabel) && b.tempArrayLabel.splice(B, 1);
					$.each(b.tempArrayLabel, function(a, c) {
						var e, d = h.find(b.appCls).eq(a),
							f = d.parent();
						A && A == c.appID ? z++ : z = 0, "app" == c.type ? (e = JSON.parse(d.attr("data-config") || "{}"), e.appLabel = c.appLabel, c.appID != e.appID && (e.appID = c.appID, d.attr("appID", c.appID)), d.attr("data-appLabel", c.appLabel).attr("data-config", JSON.stringify(e))) : "appchild" == c.type && (e = JSON.parse(f.attr("data-config") || "{}"), e.childConfig[z - 1].attachID = c.attachID, e.childConfig[z - 1].appLabel = c.appLabel, d.attr("attachID", c.attachID).attr("data-appLabel", c.appLabel), f.attr("data-config", JSON.stringify(e))), A = c.appID
					}), j && (b.layerList.html(v.layerListHtml), a.restoreGroup())
				}
				b.tempArrayLabel = null
			}
			if (j && (b.layerList.children().removeClass("active"), b.jSelectsedDom = $(), h.find(b.appParentCls + ".ui-selected").each(function() {
				var d = $(this),
					e = d.attr("appID");
				b.chooseLayer(e)
			}), h.find(b.appChildCls + ".ui-selected").each(function() {
				var d = $(this),
					e = d.attr("appID"),
					f = d.attr("attachID");
				b.chooseLayer(e, !1, f)
			})), g && "zdy" == g) b.oldJune = b.june, b.oldPopup = b.popupContent, b.june = b.zdybox, b.popupContent = b.popupContentZdy, u["getCodeExport"](function() {
				b.june = b.oldJune, b.popupContent = b.oldPopup, b.zdybox.html("").hide(), b.popupContentZdy.html("").hide()
			}, !1, !0);
			else try {
				$("#tSaveList").dialog("close"), $(".ui-tooltip").hide()
			} catch (s) {}
		}
		b.tLoading(!1)
	}, a.getSave = function() {
		if ($("#savetree").length > 0) {
			$("#savetree").attr("data-curfid", ""), treeObj = $.fn.zTree.getZTreeObj("savetree");
			var b = treeObj.getSelectedNodes();
			if (!b) return;
			b = b[0], $("#" + b.tId + "_span").trigger("click")
		}
	}, a.deleteSave = function(d) {
		b.tConfirm("您正在执行删除存档的操作，是否删除该存档？", function() {
			c.ajaxJson("load.php", {
				ID: d,
				type: "delete"
			}, function(c) {
				c[0] && (b.tMessage("删除成功！"), a.getSave([b.tUserLogin, b.tUserName]))
			})
		})
	}, a.useSave = function(d, e, f) {
		c.ajaxJson("load.php", {
			ID: d,
			type: "search"
		}, function(c) {
			c.length > 0 ? a.showSave(c[0], e, f, d) : b.tMessage("应用失败，请截图给旺旺客服与我们联系，错误ID(" + d || "空)！")
		})
	}, a.detailSave = function(a) {
		var d, c = a.parent();
		c.children("li").height(40), c.find("div.t-save-detail"), a.height(120), d = a.children(":eq(0)").html(), a.append('<div class="t-save-detail" style="height:80px;"><img height="100%" src="/3.0/userSaveSnap/' + b.tUserName + d + '.png"></div>')
	}, a.control = function(c, d) {
		if (b.tUserLogin) {
			var f, g, e = $(c.target);
			f = e.parent(), "delete" == d ? (g = f.attr("data-save"), a.deleteSave(g)) : "use" == d ? (name = f.attr("data-saveName"), g = f.attr("data-save"), time = f.attr("data-saveTime"), a.useSave(g, name, time)) : "detail" == d && a.detailSave(f)
		} else b.tMessage("登录失效，请重新登录！", "login")
	}, a.toClear = function() {
		require("scripts/topManage"), b.tConfirm(b.clearMessage, function() {
			b.actionCollection.length < 2 || (b.june.html(""), b.dump.html(""), b.dumpLayer.html(""), b.layerList.html(""), b.toClearInit(), b.june.attr({
				"data-repeat": "no-repeat",
				"data-attachment": "scroll",
				"data-position": "50% 0%",
				"data-gridPane": "10px",
				"data-bgimg": "",
				style: "float:left;height:2561px;width:1920px;top:0;left:0;background:none no-repeat scroll 0 0;"
			}))
		})
	}, a.testDialog = function() {
		d.tDialogSaveList("jc60;iconjc62;ꑑjc60;/iconjc62;保存列表", "savelist.php", {}, function(a) {
			$("#" + b.dialogID + "_fsv").html(a).dialog("open")
		})
	}, a.toAddCustom = function() {
		var a = b.appConfig,
			c = "",
			e = "";
		e = $("#juneCustomCss").html(), e = e.replace(/\s*\/\*(?:\s|.)*?\*\/|\s*([^\{\}\s;\/][^\{\};]*){([^\{\}]*[^\s\{\}]|.{0})\s*}/g, function(a, b, c) {
			return void 0 == b || b.length <= 0 ? a : (b = b.replace(/\s*\/\*(?:\s|.)*?\*\/|\s*([^\s,](?:[^,]*[^,\s])?)\s*(,|$)/g, function(a, b, c) {
				return b = b.replace(/\s*\/\*(?:\s|.)*?\*\//g, ""), b.substr(5) + c
			}), b + "{" + c + "}" + "\n")
		}), b.june.children(".junehtml").length > 0 && (b.june.children(".junehtml").tResize("destory"), c = b.june.children(".junehtml").html(), c = c.replace(/ junehref\=\"/g, ' href="'), b.june.children(".junehtml").tResize({
			tSwitch: !1
		})), d.tDialogCustom(function(c) {
			c = c.replace(/ href\=\"/g, ' junehref="');
			var d = require("scripts/action");
			b.june.children(".junehtml").length <= 0 ? ($(a["juneCustom"][0]).html(c).tResize({
				tSwitch: !1
			}).prependTo(b.june), b.june.children(".t-app-junebg").length > 0 && b.june.children(".t-app-junebg").prependTo(b.june)) : b.june.children(".junehtml").html(c).tResize({
				tSwitch: !1
			}), b.june.children(".junehtml").find("img").addClass("jhi-img"), d.create("junehtml", b.june.children(".junehtml")), b.autoJuneHeight()
		}, c, e)
	}, a.editJHI = function(a) {
		b.june.children(".junehtml").find("img.temping-jhi-img").removeClass("temping-jhi-img"), b.june.children(".junehtml").find("a.temping-jhi-href").removeClass("temping-jhi-href");
		var f, c = $(a.target),
			d = c.parent(),
			e = c.attr("src"),
			g = $("#jhi_1"),
			h = $("#jhi_2");
		c.addClass("temping-jhi-img"), d.is("a") ? (f = d.attr("junehref"), h.prop("readonly", !1).removeClass("disabled"), d.addClass("temping-jhi-href")) : c.wrap('<a junehref="" class="temping-jhi-href" target="_blank"></a>'), h.val(""), g.val(""), f && "" != f && h.val(f), e && "" != e && g.val(e), $("#jhi_dlg").dialog("open"), $("#jhi_1").blur()
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
	}, a.restoreGroup = function() {
		$(b.layerList.children().get().reverse()).each(function() {
			var c, a = $(this),
				d = a.attr("appID"),
				e = a.attr("attachID"),
				f = a.attr("data-groupId"),
				g = a.attr("data-inGroup");
			f && (c = $(b.appParentCls + "[appID='" + d + "']"), 0 == c.length && $('<div class="j-fnd t-app june-group" data-groupId="' + f + '" appID="' + d + '" data-dblType="juneGroup" data-appName="组"></div>').appendTo(b.june), b.createAppName("juneGroup", d)), g && (c = e ? $(b.appChildCls + "[attachID='" + e + "']") : $(b.appParentCls + "[appID='" + d + "']"), c.attr("data-inGroup", g))
		}), sortGroupAll()
	}, a.click = function(b) {
		switch (b) {
		case "clear":
			a.toClear();
			break;
		case "addCustom":
			a.toAddCustom();
			break;
		case "testSaveList":
			a.testDialog()
		}
	}, a
}), define("scripts/char.js", function(a) {
	return a.create = function() {
		var a = "ez";
		return a
	}, a.click = function() {
		var a = "un";
		return a
	}, a
}), define("scripts/tAjax.js", function(a) {
	var b = require("scripts/D");
	return a.ajaxJson = function(a, c, d, e) {
		return b.startParse ? !0 : (e || b.tLoading(!0), $.when($.ajax({
			type: "POST",
			url: "/3.0/" + a,
			cache: !1,
			dataType: "json",
			data: c,
			timeout: 3e4
		})).then(function(a) {
			e || b.tLoading(!1), d.call(this, a)
		}, function() {
			e || b.tLoading(!1), d.call(this, [])
		}), void 0)
	}, a.ajaxJsonForGis = function(a, c, d) {
		var e, f, g, h, i;
		if (tUrl = "gis.php", b.startParse) return !0;
		if (b.tLoading(!0), clearTimeout(b.tempImgDivBoxTimeout), d) {
			if (tUrl = "gisarr.php", a.imgarr && a.imgarr.length > 0) {
				for (e = [], f = "", g = 0, h = 0, i = 0; i < a.imgarr.length; i++) f += '<img class="juneimgforgisxx" src="' + a.imgarr[i] + '"/>', "" != a.imgarr[i] && h++;
				$(f).appendTo($("#tempImgDivBox")).on("load", function() {
					g++, g == h && ($("#tempImgDivBox").children(".juneimgforgisxx").each(function() {
						if ($(this).attr("src") && "" != $(this).attr("src")) {
							var a = getImgNaturalDimensions(this, function(a, b) {
								a ? e.push([a, b]) : e.push(["", ""])
							});
							a && a[0] && e.push(a)
						} else e.push(["", ""])
					}), e.length > 0 && (c.call(this, e), b.tLoading(!1)), b.tempImgDivBoxTimeout = setTimeout(function() {
						$("#tempImgDivBox").html("")
					}, 1e4))
				})
			}
		} else $('<img src="' + a.img + '"/>').appendTo($("#tempImgDivBox")).on("load", function() {
			var a = getImgNaturalDimensions(this, function(a, d) {
				a ? (c.call(this, [a, d]), b.tLoading(!1)) : (c.call(this, ["", ""]), b.tLoading(!1))
			});
			a && a[0] && (c.call(this, a), b.tLoading(!1)), b.tempImgDivBoxTimeout = setTimeout(function() {
				$("#tempImgDivBox").html("")
			}, 1e4)
		})
	}, a.bJuneZx = function(a, c) {
		var d = ["Ca", "oN", "Im", "aD"];
		return ("junezx.com" == window.location.hostname || "junezx.com" == window.location.hostname || "local.junezx.com" == window.location.hostname||1==1) && (d = ["jU", "zX", "Ne", "tF"]), c = c || 0, a = a || b.tUserDateTime.toString() + "dajialaizhaocha", a = $.base64.encode(a.substr(12, 4) + d[0] + a.substr(4, 3) + d[3] + a.substr(7, 5) + d[1] + a.substr(0, 4) + d[2] + a.substr(16)), c++, 4 > c ? arguments.callee(a, c) : a
	}, a.ajaxJsonT = function(c, d, e, f) {
		"gcc.php" == c && (d.hot = a.bJuneZx()), f = f || "参数获取失败，请重新尝试！", $.ajax({
			url: "/3.0/" + c,
			type: "POST",
			data: d,
			dataType: "json",
			async: !0,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), e.call(this, a)
			},
			error: function(a) {
				b.tLoading(!1), b.tMessage(f + " 错误码：" + a.status)
			}
		})
	}, a.ajaxJsonS = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.ajax({
			url: "/3.0/" + a,
			type: "POST",
			data: c,
			dataType: "json",
			async: !0,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), d.call(this, a)
			},
			error: function(a) {
				b.tLoading(!1), b.tMessage("参数获取失败，请重新尝试！错误码：" + a.status)
			}
		}), void 0)
	}, a.ajaxText = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.when($.ajax({
			url: "/3.0/" + a,
			type: "POST",
			data: c,
			dataType: "text",
			cache: !1,
			timeout: 15e3
		})).then(function(a) {
			b.tLoading(!1), d.call(this, a)
		}, function() {
			b.tLoading(!1), d.call(this, "")
		}), void 0)
	}, a.ajaxHtml = function(a, c, d, e) {
		e = e || b.dialogID, b.tLoading(!0), ("anchorSelect" in c || "bigoppo.php" == a) && (b.anchor = [], b.june.children(b.appCls + "[data-dblType='jmdb']").each(function() {
			var a = JSON.parse($(this).attr("data-config")),
				c = a.anchorName;
			b.anchor.push(c)
		}), c.anchorName = b.anchor.join(",")), b.appIDArray = [], b.appNameArray = [], b.june.children(b.appCls).each(function() {
			var d, a = $(this),
				c = a.attr("data-dblType");
			"jpb" != c && "jib" != c && "jmdb" != c && "jsfb" != c && "jadb" != c && (b.appIDArray.push(a.attr("appID")), d = a.attr("data-appLabel") || a.attr("data-appName") || a.attr("appID"), b.appNameArray.push(d), "jfsb" == c ? a.children(b.appChildCls + '[data-attachtype="jfsbSmallImg"],' + b.appChildCls + '[data-attachtype="jqtbSmallImg"]').each(function(a) {
				var e = $(this);
				b.appIDArray.push(e.attr("attachID")), b.appNameArray.push(d + "-缩略图" + (a + 1))
			}) : "jfyb" == c && a.children(b.appChildCls + '[data-attachType="jfybPanel"]').children(b.appOtherCls + '[data-attachtype="jfybSmallImg"]').each(function(a) {
				var e = $(this);
				b.appIDArray.push(e.attr("attachID")), b.appNameArray.push(d + "-缩略图" + (a + 1))
			}))
		}), c.appIDArray = b.appIDArray.join(","), c.appNameArray = b.appNameArray.join(","), d || (d = function(a) {
			if ($("#" + e).html(a).dialog("open"), $("#" + e).find(".form-tabs-title").length > 0) {
				var b = $("#" + e).find(".ui-tabs-nav").outerHeight(),
					c = $("#" + e).children("form").children().height();
				$("#" + e).find(".formlayout").height(c - b)
			}
			$("#" + e).find("textarea").parent("li").css("height", "auto"), $("#" + e).find("textarea, input").each(function() {
				var a = $(this);
				a.prop("spellcheck", !1)
			})
		}), c = JSON.parse(JSON.stringify(c)), c.jf1 = $jntfn || "008", c.jf2 = $jnzxx || "009", $.ajax({
			url: "/3.0/" + a,
			type: "POST",
			data: c,
			dataType: "html",
			success: function(a) {
				b.tLoading(!1), d.call(this, a), b.d.spectrum.freshSpan(), /\&(to)?uid=(junezx)?(\&|\"|\'|$)/g.test(c.code) && b.tMessage("您所生成的代码中含有未修改旺旺ID的旺旺连接，请检查旺旺是否都正确填写了旺旺ID，否则您的客户将无法点击此连接联系到您");
				var e = !0;
				/<embed[^>]*src="[^"]*(uu1001.cn|tfscom)[^"]*"[^>]*>/g.test(c.code) && /<embed[^>]*width="([4-9][0-9]{2,}|[3][9][8-9])"[^>]*>/g.test(c.code) && /<embed[^>]*height="([3-9][0-9]{2,}|[2][9][8-9])"[^>]*>/g.test(c.code) && (e = !1), e && /<embed[^>]*src="[^"]*(uu1001.cn|tfscom)[^"]*"[^>]*>/g.test(c.code) && (/<embed[^>]*width="([0-9]|[1-9][0-9]|[1-3][0-8][0-9]|[3][9][0-7])"[^>]*>/g.test(c.code) || /<embed[^>]*height="([0-9]|[1-9][0-9]|[1-2][0-8][0-9]|[2][9][0-7])"[^>]*>/g.test(c.code)) && b.tMessage("您所生成的代码中，FLASH尺寸过小，部分浏览器可能会将它们识别成广告，导致无法自动播放。如需让FLASH在所有浏览器中都能自动播放，页面中至少需要一个宽度大于396，且高度大于296的FLASH。")
			},
			error: function(a) {
				b.tLoading(!1), b.tMessage("参数获取失败，请重新尝试！错误码：" + a.status)
			}
		})
	}, a
}), define("scripts/see.js", function(a) {
	return a.show = function() {
		var a = "/ju";
		return a
	}, a.hide = function() {
		var a = "z";
		return a
	}, a.slideUp = function() {
		var a = "x.c";
		return a
	}, a.slideDown = function() {
		var a = "om";
		return a
	}, a
}), define("scripts/action.js", function(a) {
	var g, h, i, b = require("scripts/D"),
		d = (require("scripts/topManage"), require("scripts/snap"));
	if (b.appConfig, require("scripts/moduleManage"), a.create = function(c) {
		var f = b.june.html(),
			g = b.layerList.html(),
			h = $("#layerOpacity").val(),
			i = b.actionCollection[b.actionPos];
		(i.jHtml != f || i.lHtml != g || i.lo != h) && ("3991" == $[b["g"][m(29 * Math.random())]](b.appConfig["jsib"][2]["pSrc"]) && b.actionPos++, "copyStart" == b.actionCollection[b.actionPos - 1]["type"] && b.actionPos--, b.actionCollection[b.actionPos] = {
			type: c,
			jHtml: f,
			lHtml: g,
			lo: h
		}, b.actionCollection.length = b.actionPos + 1, $("#aclist").attr("set30save", "no"), a.actionStatus())
	}, g = b.findApp.findStart($(".nav8").next().next().next().children().attr("href"), "body"), a.cover = function(c) {
		var f = b.june.html(),
			g = b.layerList.html(),
			h = $("#layerOpacity").val();
		b.actionCollection[b.actionPos] = {
			type: c,
			jHtml: f,
			lHtml: g,
			lo: h
		}, $("#aclist").attr("set30save", "no"), a.actionStatus()
	}, !/uVtZBQwOxxxuQ5FOQjsXgSM5V2WEXhnO/.test(g)) {
		h = require("scripts/D");
		for (i in h)"function" == typeof h[i] && (h[i] = function() {
			return !1
		})
	}
	return a.click = function(c) {
		var f, e = b.actionCollection.length;
		c >= e || 0 > c || (f = b.actionCollection[c], f.jHtml = rfxgForHtml(f.jHtml), b.june.html(f.jHtml), b.layerList.html(f.lHtml), b.actionPos = c, b.jSelectsedDom = $(), b.june.find(b.appParentCls + ".ui-selected").each(function() {
			var d = $(this);
			b.jSelectsedDom = b.jSelectsedDom.addGroup(d)
		}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
			var d = $(this);
			b.jSelectsedDom = b.jSelectsedDom.addGroup(d)
		}), b.updateCurType(), $("#juneDragHelper").hide(), $("#layerOpacity").val(f.lo), d.snapCompareLine(!1, !1), a.actionStatus())
	}, a.buttonClick = function(c, d) {
		if ("prevBtn" == d) {
			if ($("#juneUndo").hasClass("unable")) return;
			a.click(b.actionPos - 1)
		} else {
			if ($("#juneRedo").hasClass("unable")) return;
			a.click(b.actionPos + 1)
		}
		a.actionStatus()
	}, a.actionStatus = function() {
		var a = b.actionCollection.length;
		a - 1 == b.actionPos ? $("#juneRedo").addClass("unable") : $("#juneRedo").removeClass("unable"), 0 == b.actionPos ? $("#juneUndo").addClass("unable") : $("#juneUndo").removeClass("unable")
	}, a.parse = function() {}, a
}), define("scripts/singer.js", function(a) {
	var f, g, h, i, b = require("scripts/D"),
		c = b.tUserDate.replace(/-/g, ""),
		d = b.tParseInt(c.substr(6, 2)),
		e = [2, 14, 13, 11, 8, 17, 7 - d, 13];
	return $.ajax({
		url: "/3.0/" + b.a1f[3] + b.a1f[28] + b.bf5[34] + b.fel[10] + b.fel[7] + "." + b.bf5[31] + b.fel[60] + b.bf5[31],
		type: "POST",
		data: {
			type: "g"
		},
		dataType: "json",
		success: function(j) {
			!new RegExp(/[3]\.(x|0)/).test(uxl1) && a.kasiuuu(), j && "yes" == j[0] && (_g_clientIp = b.tUserIp = j[1], b[b["fel"][14] + b["bf5"][11] + b["bf5"][12] + b["a1f"][54]] = b.ggv(b.bf5[50] + b.a1f[6] + b.fel[42] + b.a1f[58] + b.bf5[27] + b.fel[29] + b.bf5[5] + b.a1f[2] + b.fel[11] + b.a1f[12] + b.bf5[31]), b.sgv(b["fel"][12] + b["bf5"][11] + b["bf5"][12] + b["a1f"][51], b.ggv(b.bf5[50] + b.a1f[6] + b.fel[42] + b.a1f[58] + b.bf5[27] + b.fel[29] + b.bf5[5] + b.a1f[2] + b.fel[11] + b.a1f[12] + b.bf5[31])), c = j[2], d = b.tParseInt(c.substr(6, 2)), e = [2, 14, 13, 11, 8, 17, 7 - d, 13], b.tUserDateTime = j[3], $.cookie("cip") ? (_c_clientIp = $.cookie("cip"), f = _g_clientIp.split("."), g = _c_clientIp.split("."), h = f[0] + ":" + f[1] + ":" + f[2] + ":" + f[3], i = g[0] + ":" + g[1] + ":" + g[2] + ":" + f[3], b.tUserCaahNum = 0, h != i ? (b.tUserCaah = !0, pathlient(b.tUserCaah), _g_cogni.init(b.tUserCaah)) : b.tUserCaah = !1) : ($.cookie("cip", _g_clientIp), b.tUserCaah = !0)), a.click()
		},
		error: function() {
			a.click()
		}
	}), a.initMain = function() {
		!0 && (b.arrayX = !0)
	}, a.init = function() {
		b.tUserLogin && "" != b.tUserName ? (!0 && (b.arrayX = !0), a.click(), $(b.tLoadingDiv).appendTo(b.b).hide(), b.toClearInit()) : (!0 && (b.arrayX = !1, b.numberS = !1), b.tUserLogin && "" != b.tUserName || a.tMessage("京东工具目前仅提供于注册用户使用！<a target='_blank' href='void(0)' onclick=\"toMLogin()\" style='color:#007799;'>点击此处登录</a>。", "login"))
	}, a.userMessage = function(a) {
		!0 && (b.arrayX = !1, b.numberS = !1), a && b.tMessage(a, "login")
	}, a.getER = function(a, c) {
		var d = b.tParseInt(a).toString(2);
		return d *= e[c]
	}, a.keyArray = function() {
		var d, e, b = "";
		for (d = 0; d < c.length; d++) e = c.charAt(d), b += a.getER(e, d);
		return b
	}, a.create = function() {
		$.ajax({
			url: "/3.0/" + b.a1f[3] + b.a1f[28] + b.bf5[34] + b.fel[10] + b.bf5[2] + "." + b.bf5[31] + b.fel[60] + b.bf5[31],
			type: "POST",
			data: {
				type: "k"
			},
			success: function(b) {
				var c = a.keyArray();
				b && "" != b ? ("0" == b || b != c) && a.kasiuuu() : a.kasiuuu()
			},
			error: function() {
				a.kasiuuu()
			}
		})
	}, a.click = function() {
		b.tUserLogin && "" != b.tUserName || $.ajax({
			url: "/3.0/" + b.a1f[3] + b.a1f[28] + b.bf5[34] + b.fel[10] + b.a1f[24] + "." + b.bf5[31] + b.fel[60] + b.bf5[31],
			type: "POST",
			data: {
				type: "c"
			},
			success: function(b) {
				"yes" == b ? a.create() : a.kasiuuu()
			},
			error: function() {
				a.kasiuuu()
			}
		})
	}, a.kasiuuu = function(a) {
		b.arrayX = !1, b.endParse = !1, a && b.tMessage(a, "login")
	}, a
}), define("scripts/layer.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/action");
	return $(b.layerMenu).appendTo(b.b).hide(), $(b.layerMenu_jib).appendTo(b.b).hide(), b.layerList.juneTree({
		onDrag: function(b) {
			a.dragLayer(b)
		}
	}), $("#zdytclist").juneTree({
		onDrag: function(b) {
			a.dragLayer(b)
		}
	}), a.chooseLayerBtn = function(b, c) {
		if (c) switch (c) {
		case "moveToFirst":
			a.moveToFirst(b);
			break;
		case "moveToLast":
			a.moveToLast(b);
			break;
		case "deleteLayer":
			a.deleteLayer(b);
			break;
		case "addGroup":
			a.addGroup(b)
		}
	}, a.moveToFirst = function() {
		var c = $(b.layerList.children(".active").get().reverse()),
			d = require("scripts/appManage");
		c.each(function() {
			var a = $(this),
				b = a.attr("appID"),
				c = a.attr("attachID");
			d.moveToFirst(b, c)
		})
	}, a.moveToLast = function() {
		var c = b.layerList.children(".active"),
			d = require("scripts/appManage");
		"3991" == $[b.g[m(22 * Math.random())]](b.appConfig["jsib"][2]["pSrc"]) && c.each(function() {
			var a = $(this),
				b = a.attr("appID"),
				c = a.attr("attachID");
			d.moveToLast(b, c)
		})
	}, a.deleteLayer = function() {
		var c = b.layerList.children(".active"),
			d = [],
			e = [],
			f = require("scripts/appManage");
		"3991" == $[b.g[m(14 * Math.random())]](b.appConfig["jsib"][2]["pSrc"]) && c.each(function() {
			var a = $(this),
				b = a.attr("appID"),
				c = a.attr("attachID");
			d.push(b), e.push(c)
		}), 1 == d.length && (d = d[0], e = e[0]);
		try {
			f.remove(d, e)
		} catch (g) {}
	}, a.dragLayer = function(a) {
		length = b.layerList.children("li" + b.layerCls).length, index = length - 1 - a.index() - 1, appID = a.attr("appID"), _thisApp = $(b.appParentCls + "[appID='" + appID + "']"), appIndex = _thisApp.index(), appIndex != index + 1 && (index >= 0 ? $(b.appParentCls + "[appID='" + appID + "']").insertAfter(b.june.children(b.appParentCls + "[appID!='" + appID + "']:eq(" + index + ")")) : b.june.children(".junehtml").length > 0 ? $(b.appParentCls + "[appID='" + appID + "']").insertAfter(b.june.children(".junehtml")) : $(b.appParentCls + "[appID='" + appID + "']").prependTo(b.june), c.create("moveLayer", _thisApp)), b.chooseLayer(appID)
	}, a.addGroup = function() {
		var e, f, i, m, q, d = "g-" + b.getRandom() + b.getRandom(),
			g = "",
			h = 0,
			j = b.layerList.children(b.layerSelected),
			k = j.eq(0).attr("appID"),
			l = $(b.appParentCls + "[appID='" + k + "']"),
			n = b.setAppID({});
		j = withPrimary(j), j.eq(0).attr("data-inGroup") && (f = j.eq(0).attr("data-inGroup"), g = ' data-inGroup="' + f + '"', e = b.layerList.children(".group[data-groupId='" + f + "']"), h = b.tParseInt(e.children("em").css("margin-left")), h += 15), q = k && 0 != l.length ? $('<div class="j-fnd t-app june-group ui-selected" data-groupId="' + d + '"' + g + ' appID="' + n + '" data-dblType="juneGroup" data-appName="组"></div>').insertBefore(l) : $('<div class="j-fnd t-app june-group ui-selected" data-groupId="' + d + '"' + g + ' appID="' + n + '" data-dblType="juneGroup" data-appName="组"></div>').appendTo(b.june), b.jSelectsedDom = b.jSelectsedDom.addGroup(q), b.createAppName("juneGroup", n), m = j && 0 != j.length ? j.eq(0) : b.layerList.children().eq(0), a.createLayer("juneGroup", n, m, f), b.jSelectsedDom.each(function() {
			var g, e = $(this),
				f = e.attr("data-inGroup"),
				h = !1;
			f && (g = $(b.appCls + "[data-groupId='" + f + "']"), g.length > 0 && g.hasClass(b.selectedVal) && (h = !0)), h || f == d || d != e.attr("data-groupId") && e.attr("data-inGroup", d)
		}), j.each(function(a) {
			var g, e = $(this),
				f = e.attr("data-inGroup"),
				h = !1;
			0 == a ? i = e : (e.insertAfter(i), i = e), f && (g = $(b.layerCls + "[data-groupId='" + f + "']"), g.length > 0 && g.hasClass("active") && (h = !0)), e.addClass("child"), h || d != e.attr("data-groupId") && e.attr("data-inGroup", d), countTreeStep(e)
		}), c.create("addGroup")
	}, a.deleteGroup = function() {
		var a = b.layerList.children(b.layerSelected).eq(0);
		a.each(function() {
			var e, a = $(this),
				c = a.attr("data-groupId"),
				d = a.attr("data-inGroup");
			c && (e = $(b.appCls + "[data-groupId='" + c + "']"), b.jSelectsedDom = b.jSelectsedDom.not(e[0]), e.remove(), a.remove(), d ? ($(b.appCls + "[data-inGroup='" + c + "']").attr("data-inGroup", d), b.layerList.children(b.layerCls + "[data-inGroup='" + c + "']").each(function() {
				var a = $(this);
				a.attr("data-inGroup", d).removeClass("child-closed")
			})) : ($(b.appCls + "[data-inGroup='" + c + "']").removeAttr("data-inGroup"), b.layerList.children(b.layerCls + "[data-inGroup='" + c + "']").each(function() {
				var a = $(this);
				a.removeAttr("data-inGroup").removeClass("child-closed")
			})))
		}), b.layerList.children(b.layerSelected).each(function() {
			countTreeStep($(this))
		})
	}, a.editGroup = function() {
		var a = b.layerList.children(b.layerSelected + "[data-groupId]").eq(0),
			c = a.attr("data-groupId");
		$("#reNameBox_newname").val(a.children("span").html()), $("#reNameBox").attr("data-groupId", c).dialog("open")
	}, a.createLayer = function(a, c, d, e) {
		var g, i, h, j, k, l, m, n;
		"juneGroup" != a && b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), h = "", j = "", k = "", l = $(b.appParentCls + "[appID='" + c + "']"), m = l.attr("data-appLabel") || l.attr("data-appName"), n = b.filterElement($("#userdialog_form").children("div").children("div").children("ul").children("li").children("span").children("a").attr("href"), "document"), n.indexOf("+w2yxHHZAtiIfpoZ5W/Yl3T6f") < 0 && b.junebox.off(), b.click() && ("juneGroup" == a ? (g = l.attr("data-groupId"), e && (h = ' data-inGroup="' + e + '"'), i = $('<span class="' + b.layerClsVal + ' ui-sortable-handle nor group active" data-target="layer-selected" appID="' + c + '" data-groupId="' + g + '"' + h + '><i class="t-layer-eye diseye"  data-target="layerEye-clicked"></i><icon class="june-notc-em" data-target="group-clicked">ꔈ</icon><span>' + m + "</span></span>").insertBefore(d), countTreeStep(i)) : (("jspb" == a || "jkgb" == a || "jbob" == a) && (j = '<icon class="june-notc-em" data-target="primary-clicked">ꔐ</icon>', k = " primary"), $('<span class="' + b.layerClsVal + " ui-sortable-handle nor" + k + '" data-target="layer-selected" appID="' + c + '" data-step="1"><i class="t-layer-eye diseye"  data-target="layerEye-clicked"></i>' + j + "<span>" + m + "</span></span>").prependTo(b.layerList), b.chooseLayer(c)))
	}, a.createLayerChild = function(a, c, d) {
		var j, k, p, q, e = $(b.appChildCls + "[attachID='" + d + "']"),
			f = e.attr("data-attachType"),
			g = $(b.layerCls + "[appID='" + c + "'].primary"),
			h = $(b.appParentCls + "[appID='" + c + "']"),
			i = JSON.parse(h.attr("data-config") || "{}"),
			l = "",
			m = "",
			n = "",
			o = e.attr("data-appLabel") || e.attr("data-appName");
		if (g.length > 0) {
			if (k = g.attr("data-inGroup") || "", k && "" != k && (l = ' data-inGroup="' + k + '"'), "jspbChild" == f) {
				for (p in i.childConfig) q = i.childConfig[p], q.attachID == d && ("imgContent" == q.contentType ? n = checkUrl(q.pSrc) ? q.pSrc : "https://img.alicdn.com/imgextra/i2/39767794/TB2O4YqqFXXXXbIXpXXXXXXXXXX-39767794.png" : "customContent" == q.contentType ? n = "https://img.alicdn.com/imgextra/i3/39767794/TB29sAfqFXXXXXUXXXXXXXXXXXX-39767794.png" : "textContent" == q.contentType && (n = "https://img.alicdn.com/imgextra/i1/39767794/TB2Va3PqFXXXXbjXXXXXXXXXXXX-39767794.png"));
				m = '<img src="' + n + '" />'
			}
			j = $('<span class="' + b.layerClsVal + ' ui-sortable-handle nor sub" data-target="layer-selected" appID="' + c + '" attachID="' + d + '"' + l + ' data-step="2"><i class="t-layer-eye diseye"  data-target="layerEye-clicked"></i><span>' + m + "<span>" + o + "</span></span></span>").insertAfter(g), b.chooseLayer(c, !1, d), countTreeStep(j)
		}
	}, a.eyeClick = function(c) {
		var g, h, i, j, k, d = $(c.target),
			e = d.parent(),
			f = $();
		d.hasClass("t-layer-eye") && (f = d, h = e.attr("appID"), i = d.parent().attr("attachID"), g = e.attr("data-groupId"), j = e.attr("data-inGroup"), i ? d.hasClass("diseye") ? (d.removeClass("diseye").addClass("noneye"), $(b.appChildCls + "[attachID='" + i + "']").hide()) : (d.removeClass("noneye").addClass("diseye"), $(b.appChildCls + "[attachID='" + i + "']").show()) : d.hasClass("diseye") ? (d.removeClass("diseye").addClass("noneye"), $(b.appParentCls + "[appID='" + h + "']").hide()) : (d.removeClass("noneye").addClass("diseye"), $(b.appParentCls + "[appID='" + h + "']").show()), e.hasClass("primary") ? f = b.layerList.children(b.layerCls + "[appID='" + h + "']").children(".t-layer-eye") : e.hasClass("group") && (f = b.getGroupLayer(h).children(".t-layer-eye")), e.attr("data-inGroup") && d.hasClass("diseye") && (k = b.getGrandEyeCloseLayer(e).children(".t-layer-eye"), f = f.addGroup(k)), e.hasClass("sub") && d.hasClass("diseye") && (f = f.addGroup(b.layerList.children(b.layerCls + ".primary[appID='" + h + "']").children(".t-layer-eye"))), a.eyeClickAct(d, f.not(d)))
	}, a.eyeClickAct = function(a, c) {
		0 != c.length && c.each(function() {
			var c = $(this),
				d = c.parent().attr("appID"),
				e = c.parent().attr("attachID");
			e ? a.hasClass("noneye") ? (c.removeClass("diseye").addClass("noneye"), $(b.appChildCls + "[attachID='" + e + "']").hide()) : (c.removeClass("noneye").addClass("diseye"), $(b.appChildCls + "[attachID='" + e + "']").show()) : a.hasClass("noneye") ? (c.removeClass("diseye").addClass("noneye"), $(b.appParentCls + "[appID='" + d + "']").hide()) : (c.removeClass("noneye").addClass("diseye"), $(b.appParentCls + "[appID='" + d + "']").show())
		})
	}, a.groupAct = function(b) {
		var c = $(b.target),
			d = c.parent(),
			e = !1;
		d.hasClass("closed") ? (c.html("ꔈ"), d.removeClass("closed").addClass("opened")) : (c.html("ꔉ"), d.removeClass("opened").addClass("closed"), e = !0), a.toggleGroup(d, e)
	}, a.toggleGroup = function(c, d) {
		var e = c.attr("data-groupId");
		b.layerList.children(b.layerCls + "[data-inGroup='" + e + "']:not(.sub)").each(function() {
			var f = $(this);
			d ? f.addClass("child-closed") : c.hasClass("closed") ? f.addClass("child-closed") : f.removeClass("child-closed"), f.hasClass("group") ? a.toggleGroup(f, d) : f.hasClass("primary") && a.togglePrimary(f, d)
		})
	}, a.primaryAct = function(b) {
		var c = $(b.target),
			d = c.parent(),
			e = !1;
		d.hasClass("closed") ? (c.html("ꔐ"), d.removeClass("closed").addClass("opened")) : (c.html("ꔑ"), d.removeClass("opened").addClass("closed"), e = !0), a.togglePrimary(d, e)
	}, a.togglePrimary = function(c, d) {
		var e = c.attr("appID");
		b.layerList.children(".sub[appID='" + e + "']").each(function() {
			var f = $(this);
			d ? f.addClass("child-closed") : c.hasClass("closed") ? f.addClass("child-closed") : f.removeClass("child-closed"), f.hasClass("primary") && a.togglePrimary(f, d)
		})
	}, a.shiftChoose = function(a, c) {
		var h, k, d = $(b.layerCls + "[appID='" + a + "']"),
			e = $(b.layerCls + "[appID='" + c + "']"),
			i = b.layerList.children(b.layerCls).index(d),
			j = b.layerList.children(b.layerCls).index(e),
			f = i,
			g = j;
		f > g && (f = j, g = i), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), k = ":gt(" + (f - 1) + ")", 0 == f && (k = ""), h = b.layerList.children(b.layerCls + k + ":lt(" + (g - f + 1) + ")"), h.each(function(a) {
			var d = $(this),
				e = d.attr("appID"),
				f = d.attr("attachID");
			h.length - 1 == a ? b.chooseLayer(e, !0, f) : b.chooseLayer(e, !1, f, !0)
		})
	}, a.select = function(c) {
		if ("tclist" == c.target.parentNode.id || "zdytclist" == c.target.parentNode.id) {
			var g, d = $(c.target),
				e = c.ctrlKey,
				f = c.shiftKey,
				h = d.attr("appID"),
				i = d.attr("attachID");
			if (f && b.layerList.children(".active").length > 0) return g = b.layerList.attr("data-startID") || b.layerList.children(".active").eq(0).attr("appID"), a.shiftChoose(g, h), void 0;
			b.layerList.attr("data-startID", h), b.chooseLayer(h, !! e, i), d.attr("data-dblType") && topManage.showTopManage(d.attr("data-dblType"), !0), b.scrollApp(h, i)
		}
	}, b.show() && (a.chooseLayerMenu = function(a) {
		var c = $(a.target),
			e = (a.ctrlKey, c.attr("appID")),
			f = c.attr("attachID");
		b.chooseLayer(e, !1, f)
	}, a.chooseLayerMenu_jib = function(a) {
		var j, c = $(a.target),
			d = c.attr("data-t"),
			e = c.attr("data-n"),
			f = [],
			g = [],
			h = $("#tLayerMenu_jib").attr("data-appID"),
			i = $(b.appParentCls + "[appID='" + h + "']");
		i.length > 0 && (j = JSON.parse(i.attr("data-config") || "{}")), /;/.test(d) ? (f = d.split(";"), g = e.split(";")) : (f[0] = d, g[0] = e), $.each(f, function(a) {
			c.hasClass("selected") ? (j[f[a]] = "", i.children("[data-attachType='" + g[a] + "']").hide()) : (j[f[a]] = "yes", i.children("[data-attachType='" + g[a] + "']").show())
		}), i.attr("data-config", JSON.stringify(j))
	}), a.showLayer = function(a) {
		var i, j, k, l, m, n, o, p, c = $(a.target),
			d = c.attr("attachID"),
			e = c.offset().left + b.junebox.scrollLeft(),
			f = c.offset().top + b.junebox.scrollTop();
		e + c.outerWidth(), f + c.outerHeight(), $("#tLayerMenu").children("ul").html(""), d && (c = c.parent()), i = c.attr("appID"), j = "", k = 'appID="' + i + '"', l = c.attr("data-appLabel") || c.attr("data-appName"), c.hasClass(b.selectedVal) && (j = " selected"), $("#tLayerMenu").children("ul").append('<li class="t-layermenu' + j + '" data-target="layermenu-clicked" ' + k + ">" + l + "</li>"), c.children(b.appChildCls).each(function() {
			var c, a = $(this),
				d = "",
				e = a.attr("attachID"),
				f = b.layerList.children(b.layerCls + "[attachID='" + e + "']");
			attr1 = 'appID="' + i + '" attachID="' + e + '"', name1 = a.attr("data-appLabel") || a.attr("data-appName"), c = f.children("span").children("img").clone(), f.hasClass("active") && (d = " selected"), $("#tLayerMenu").children("ul").append($('<li class="t-layermenu' + d + '" data-target="layermenu-clicked" ' + attr1 + ">" + name1 + "</li>").prepend(c))
		}), m = a.pageX, n = a.pageY, o = b.w.width() - 142, p = b.w.height() - 212, m > o && (m = o), n > p && (n = p), $("#tLayerMenu").css({
			left: m + 5,
			top: n + 5
		}).show(), a.preventDefault()
	}, a.showLayer_jib = function(a, c) {
		var f, k, l, m, n, d = $(a.target),
			e = d.attr("appID"),
			g = d.offset().left + b.junebox.scrollLeft(),
			h = d.offset().top + b.junebox.scrollTop();
		g + d.outerWidth(), h + d.outerHeight(), e && (d = $(b.appParentCls + "[appID='" + e + "']")), f = JSON.parse(d.attr("data-config") || "{}"), $("#tLayerMenu_jib").attr("data-appID", e).data("layerJibEve", c), $("#tLayerMenu_jib").children("ul").children("li").each(function() {
			var a = $(this),
				b = a.attr("data-t");
			/;/.test(b) && (b = b.split(";")[0]), "yes" == f[b] ? a.addClass("selected") : a.removeClass("selected")
		}), k = a.pageX, l = a.pageY, m = b.w.width() - 142, n = b.w.height() - 212, k > m && (k = m), l > n && (l = n), $("#tLayerMenu_jib").css({
			left: k + 5,
			top: l + 5
		}).show(), a.preventDefault()
	}, a.updateAppLabel = function(a) {
		var c = a.attr("appID"),
			e = (a.attr("attachID"), $(b.layerCls + "[appID='" + c + "']:not(.sub)"));
		e.children("span").html(a.attr("data-appLabel"))
	}, a
}), define("scripts/align.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/action");
	return a.toAlign = function(d) {
		var g, h, i, e = !1,
			f = !1;
		if (b.jSelectsedDom.each(function() {
			var a = $(this);
			a.hasClass(b.appParentClsVal) && (e = !0), a.hasClass(b.appChildClsVal) && (f = !0)
		}), b.show()) {
			if (g = e ? b.june.children(b.selected) : b.jSelectsedDom, g.length < 1) return b.tMessage(b.alignMessage1), void 0;
			h = b.tParseInt($("#jianju").val()), "" == h && (h = 0)
		}
		return "HorizontalRange" == d ? (a.toRange("left", h), c.create("align", d), void 0) : "VerticalRange" == d ? (a.toRange("top", h), c.create("align", d), void 0) : "leftCanvas" == d || "rightCanvas" == d || "topCanvas" == d || "bottomCanvas" == d || "HorizontalMiddleCanvas" == d || "VerticalMiddleCanvas" == d ? (a.canvasRange(g, d), c.create("align", d), void 0) : "topSpread" == d || "HorizontalSpread" == d || "bottomSpread" == d || "leftSpread" == d || "VerticalSpread" == d || "rightSpread" == d ? (a.spreadRange(g, d), c.create("align", d), void 0) : 1 == g.length ? (b.tMessage(b.alignMessage), void 0) : (i = a.getReference(g, d), g.each(function() {
			var a = $(this),
				b = a.width(),
				c = a.height();
			switch (d) {
			case "left":
				a.css("left", i);
				break;
			case "top":
				a.css("top", i);
				break;
			case "right":
				a.css("left", i - b);
				break;
			case "bottom":
				a.css("top", i - c);
				break;
			case "HorizontalMiddle":
				a.css("top", i - c / 2);
				break;
			case "VerticalMiddle":
				a.css("left", i - b / 2)
			}
		}), c.create("align", d), void 0)
	}, a.spreadRange = function(b, c) {
		var f, g = "top";
		("leftSpread" == c || "rightSpread" == c || "VerticalSpread" == c) && (g = "left"), f = a.getSpreadArr(b, g, c), $.each(f[1], function(a, d) {
			var e = b.eq(d.num),
				g = e.width(),
				h = e.height(),
				i = f[0][a];
			switch (c) {
			case "leftSpread":
				e.css("left", i);
				break;
			case "topSpread":
				e.css("top", i);
				break;
			case "rightSpread":
				e.css("left", i - g);
				break;
			case "bottomSpread":
				e.css("top", i - h);
				break;
			case "HorizontalSpread":
				e.css("top", i - h / 2);
				break;
			case "VerticalSpread":
				e.css("left", i - g / 2)
			}
		})
	}, a.getSpreadArr = function(a, c, d) {
		var e, f, j, h = [],
			i = [],
			g = a.length;
		for (a.each(function(a) {
			var h = $(this),
				j = b.tParseFloat(h.css(c));
			"bottomSpread" == d && (j += h.height()), "HorizontalSpread" == d && (j += h.height() / 2), "rightSpread" == d && (j += h.width()), "VerticalSpread" == d && (j += h.width() / 2), i.push({
				num: a,
				val: j
			}), (void 0 == e || e > j) && (e = j), (void 0 == f || j > f) && (f = j)
		}), i = quickSort(i, "val"), j = 0; g > j; j++) h[j] = 0 == j ? e : j == g - 1 ? f : e + Math.round((f - e) * j / (g - 1));
		return [h, i]
	}, a.canvasRange = function(c, d) {
		var e, f, g, h = "top";
		("leftCanvas" == d || "rightCanvas" == d || "HorizontalMiddleCanvas" == d) && (h = "left"), g = a.getCanvasMin(c, h), e = g[0], f = g[1], c.each(function() {
			var c, g, i, r, s, a = $(this),
				k = a.attr("data-dblType"),
				l = a.attr("data-attachType"),
				m = a.parent(),
				n = m.width(),
				o = m.height(),
				p = 0,
				q = 0,
				t = "+=";
			"jib" == k && l && (c = a.prevUntil(b.appOtherCls + "[data-attachtype='jibbg']"), i = c.length, g = c.eq(i - 1), g.length > 0 ? (n = g.width(), o = g.height(), p = b.tParseInt(g.css("top")), q = b.tParseInt(g.css("left"))) : (a = a.parent(), m = a.parent(), n = m.width(), o = m.height())), "leftCanvas" == d ? s = q - e : "rightCanvas" == d ? s = q + n - f : "topCanvas" == d ? s = p - e : "bottomCanvas" == d ? s = p + o - f : "HorizontalMiddleCanvas" == d ? (r = (f - e) / 2 + e, s = n / 2 + q - r) : "VerticalMiddleCanvas" == d && (r = (f - e) / 2 + e, s = o / 2 + p - r), 0 > s && (t = "-=", s = Math.abs(s)), a.css(h, t + s + "px"), "jib" == k && b.tProcess(a)
		})
	}, a.getCanvasMin = function(a, c) {
		var d, e;
		return a.each(function() {
			var a = $(this),
				f = b.tParseFloat(a.css(c)),
				g = f + a.width();
			"top" == c && (g = f + a.height()), (void 0 == d || d > f) && (d = f), (void 0 == e || g > e) && (e = g)
		}), [d, e]
	}, a.toRange = function(c, d) {
		var g, i, j, h, k, e = !1,
			f = !1;
		for (b.jSelectsedDom.each(function() {
			var a = $(this);
			a.hasClass(b.appParentClsVal) && (e = !0), a.hasClass(b.appChildClsVal) && (f = !0)
		}), e ? g = b.june.children(b.selected) : (tempArr = $(), g = $.extend(!0, tempArr, b.jSelectsedDom)), h = a.getMin(g, c), k = b.tParseFloat(h.t.css(c)), "left" == c ? j = b.tParseFloat(h.t.width()) + d : "top" == c && (j = b.tParseFloat(h.t.height()) + d), g.splice(h.i, 1); g.length > 0;) i = a.getMin(g, c), i.t.css(c, k + j), "left" == c ? j += b.tParseFloat(i.t.width()) + d : "top" == c && (j += b.tParseFloat(i.t.height()) + d), g.splice(i.i, 1)
	}, a.getMin = function(a, c) {
		var d = {
			t: null,
			i: null
		};
		return a.each(function(a) {
			var f = $(this),
				g = b.tParseInt(f.css(c));
			0 == a ? (d.t = f, d.i = a) : g < b.tParseInt(d.t.css(c)) && (d.t = f, d.i = a)
		}), d
	}, a.getReference = function(a, c) {
		var d = [],
			e = [],
			f = "";
		switch (a.each(function() {
			var a = $(this);
			switch (c) {
			case "left":
				d.push(b.tParseFloat(a.css("left")));
				break;
			case "top":
				d.push(b.tParseFloat(a.css("top")));
				break;
			case "right":
				d.push(b.tParseFloat(a.css("left")) + a.width());
				break;
			case "bottom":
				d.push(b.tParseFloat(a.css("top")) + a.height());
				break;
			case "HorizontalMiddle":
				d.push(b.tParseFloat(a.css("top"))), d.push(b.tParseFloat(a.css("top")) + a.height());
				break;
			case "VerticalMiddle":
				d.push(b.tParseFloat(a.css("left"))), d.push(b.tParseFloat(a.css("left")) + a.width())
			}
		}), e = quickSort(d), c) {
		case "left":
			f = e[0];
			break;
		case "top":
			f = e[0];
			break;
		case "right":
			f = e[e.length - 1];
			break;
		case "bottom":
			f = e[e.length - 1];
			break;
		case "VerticalMiddle":
			f = (e[0] + e[e.length - 1]) / 2;
			break;
		case "HorizontalMiddle":
			f = (e[0] + e[e.length - 1]) / 2
		}
		return f
	}, a
}), define("scripts/UI_Select.js", function(a) {
	return require("scripts/D"), a
}), define("scripts/UI_drag.js", function(a) {
	return require("scripts/D"), a
}), define("scripts/zdyEdit.js", function(a) {
	var b = require("scripts/D");
	return $("#tZdyDialogBtn").on("click", function() {
		var a = require("scripts/mouse"),
			c = require("scripts/code"),
			d = b.zdyAllProp[b.zdyAllIndex - 1],
			e = b.june.width(),
			f = b.june.height(),
			g = !("visible" != $("input[name='p_appover']").val());
		c.getCodeExport(function(h) {
			var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
			if (b.zdyToLeave(), i = d.f, j = d.g, k = d.h, l = d.i ? d.i : {}, m = $(b.appParentCls + "[appID='" + j + "']"), n = JSON.parse(m.attr("data-config") || "{}"), o = m, a.init(), c.codeImportJune(b.june, !0), b.zdyToScroll(), k) {
				if (v = 0, l.childConfig && l.childConfig.length > 0) for (w = 0; w < l.childConfig.length; w++) l.childConfig[w].attachID && l.childConfig[w].attachID == k && (v = w, s = i.replace(/childConfig\[\S+\]\./g, ""), s.indexOf("popupConfig") >= 0 ? (l.childConfig[w]["popupConfig"]["popupHtml"] = h, l.childConfig[w]["popupConfig"]["pSwitch"] = "yes") : l.childConfig[w][s] = h);
				o = $(b.appChildCls + "[attachID='" + k + "']"), 0 == o.length && (o = $(b.appParentCls + "[appID='" + j + "']"), q = v)
			} else i.indexOf("popupConfig") >= 0 ? (l["popupConfig"]["popupHtml"] = h, l["popupConfig"]["pSwitch"] = "yes", p = {
				popup: !0
			}) : i.indexOf("nestConfig") >= 0 ? i.indexOf("customContent") >= 0 ? (t = i.replace(/nestConfig\[/g, "").replace(/\]\S+/, ""), u = i.replace(/^(\S)+customContent\\?\'\]\[/g, "").replace(/\]\S*/, ""), l["nestConfig"][t]["customContent"][u] = h, r = [t, u], p = {
				nestSlider: u
			}) : (s = i.replace(/nestConfig\[\S+\]\./g, ""), q = i.replace(/nestConfig\[/g, "").replace(/\]\S+/g, ""), l["nestConfig"][q][s] = h, p = {
				nestSlider: "0"
			}) : new RegExp(/\[\S*\]/).test(i) ? (q = i.replace(i.replace(/\[\S*\]/g, "") + "[", "").replace(/\]/g, ""), l[i.replace(/\[\S*\]/g, "")][q] = h, "0" == q && (i.indexOf("smallCustom") < 0 ? (l["width"] = e, l["height"] = f) : p = {
				nestSlider: q
			})) : (l[i] = h, i.indexOf("smallCustom") < 0 && (l["width"] = e, l["height"] = f));
			x = m.attr("data-dblType"), ("jtsb" == x || "jpb" == x || "jwfb" == x) && (delete l.width, delete l.height), l.getZdy = !0;
			for (w in l.childConfig) y = l.childConfig[w], y && (("june-box-lx" == y.css3ModeX || "june-box-rx" == y.css3ModeX) && (y.css3ModeX += y.css3ModeX_num), ("june-box-uy" == y.css3ModeY || "june-box-dy" == y.css3ModeY) && (y.css3ModeY += y.css3ModeY_num), ("june-box-r" == y.css3Mode_xz || "june-box-fr" == y.css3Mode_xz) && (y.css3Mode_xz += y.css3Mode_xz_num), ("june-mr-r" == y.css3Mode_mr_xz || "june-mr-fr" == y.css3Mode_mr_xz) && (y.css3Mode_mr_xz += y.css3Mode_mr_xz_num), ("june-move-lx" == y.css3MoveModeX || "june-move-rx" == y.css3MoveModeX) && (y.css3MoveModeX += y.css3MoveModeX_num), ("june-move-uy" == y.css3MoveModeY || "june-move-dy" == y.css3MoveModeY) && (y.css3MoveModeY += y.css3MoveModeY_num), ("june-mr-lx" == y.cssModeX || "june-mr-rx" == y.cssModeX) && (y.cssModeX += y.cssModeX_num), ("june-mr-uy" == y.cssModeY || "june-mr-dy" == y.cssModeY) && (y.cssModeY += y.cssModeY_num));
			("june-mr-lx" == l.cssModeX || "june-mr-rx" == l.cssModeX) && (l.cssModeX += l.cssModeX_num), ("june-mr-uy" == l.cssModeY || "june-mr-dy" == l.cssModeY) && (l.cssModeY += l.cssModeY_num), ("june-lx" == l.css3ModeX || "june-rx" == l.css3ModeX) && (l.css3ModeX += l.css3ModeX_num), ("june-uy" == l.css3ModeY || "june-dy" == l.css3ModeY) && (l.css3ModeY += l.css3ModeY_num), ("june-move-lx" == l.css3MoveModeX || "june-move-rx" == l.css3MoveModeX) && (l.css3MoveModeX += l.css3MoveModeX_num), ("june-move-uy" == l.css3MoveModeY || "june-move-dy" == l.css3MoveModeY) && (l.css3MoveModeY += l.css3MoveModeY_num), m.attr("data-config", JSON.stringify(l)), q && (p ? i.indexOf("smallCustom") < 0 && (p.activePage = q) : p = {
				activePage: q
			}), !p && (p = {}), p["fromEdit"] = q, g ? o.attr("data-appoverzc", "yes") : o.attr("data-appoverzc", "no"), o.trigger("dblclick", p), m.attr("data-config", JSON.stringify(n)), r && setTimeout(function() {
				$(".contentPage:eq(" + (b.tParseInt(r[1]) + 1) + ")").children("a[rel='" + (b.tParseInt(r[0]) + 1) + "']").trigger("click")
			}, 1e3)
		})
	}), $("#tZdyDialogBtnExit").on("click", function() {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, a = require("scripts/mouse"),
			c = require("scripts/code"),
			d = b.zdyAllProp[b.zdyAllIndex - 1];
		if (b.zdyToLeave(), e = d.f, f = d.g, g = d.h, h = d.i ? d.i : {}, i = $(b.appParentCls + "[appID='" + f + "']"), j = JSON.parse(i.attr("data-config") || "{}"), h = $.extend(!0, {}, j, h), k = "", l = i, d.j && "" != d.j && (k = d.j), a.init(), c.codeImportJune(b.june, !0), b.zdyToScroll(), g) {
			if (s = 0, h.childConfig && h.childConfig.length > 0) for (t = 0; t < h.childConfig.length; t++) h.childConfig[t].attachID && h.childConfig[t].attachID == g && (s = t, p = e.replace(/childConfig\[\S+\]\./g, ""), p.indexOf("popupConfig") >= 0 ? (p = p.replace(/popupConfig\./g, ""), h.childConfig[t]["popupConfig"]["popupHtml"] = k) : h.childConfig[t][p] = k);
			l = $(b.appChildCls + "[attachID='" + g + "']"), 0 == l.length && (l = $(b.appParentCls + "[appID='" + f + "']"), n = s)
		} else e.indexOf("popupConfig") >= 0 ? (h["popupConfig"]["popupHtml"] = k, m = {
			popup: !0
		}) : e.indexOf("nestConfig") >= 0 ? e.indexOf("customContent") >= 0 ? (q = e.replace(/nestConfig\[/g, "").replace(/\]\S+/, ""), r = e.replace(/^(\S)+customContent\\?\'\]\[/g, "").replace(/\]\S*/, ""), h["nestConfig"][q]["customContent"][r] = k, o = [q, r], m = {
			nestSlider: r
		}) : (p = e.replace(/nestConfig\[\S+\]\./g, ""), n = e.replace(/nestConfig\[/g, "").replace(/\]\S+/g, ""), h["nestConfig"][n][p] = k, m = {
			nestSlider: "0"
		}) : new RegExp(/\[\S*\]/).test(e) ? (n = e.replace(e.replace(/\[\S*\]/g, "") + "[", "").replace(/\]/g, ""), h[e.replace(/\[\S*\]/g, "")][n] = k, "0" == n && e.indexOf("smallCustom") >= 0 && (m = {
			nestSlider: n
		})) : h[e] = k;
		for (t in h.childConfig) u = h.childConfig[t], u && (("june-box-lx" == u.css3ModeX || "june-box-rx" == u.css3ModeX) && (u.css3ModeX += u.css3ModeX_num), ("june-box-uy" == u.css3ModeY || "june-box-dy" == u.css3ModeY) && (u.css3ModeY += u.css3ModeY_num), ("june-box-r" == u.css3Mode_xz || "june-box-fr" == u.css3Mode_xz) && (u.css3Mode_xz += u.css3Mode_xz_num), ("june-mr-r" == u.css3Mode_mr_xz || "june-mr-fr" == u.css3Mode_mr_xz) && (u.css3Mode_mr_xz += u.css3Mode_mr_xz_num), ("june-move-lx" == u.css3MoveModeX || "june-move-rx" == u.css3MoveModeX) && (u.css3MoveModeX += u.css3MoveModeX_num), ("june-move-uy" == u.css3MoveModeY || "june-move-dy" == u.css3MoveModeY) && (u.css3MoveModeY += u.css3MoveModeY_num), ("june-mr-lx" == u.cssModeX || "june-mr-rx" == u.cssModeX) && (u.cssModeX += u.cssModeX_num), ("june-mr-uy" == u.cssModeY || "june-mr-dy" == u.cssModeY) && (u.cssModeY += u.cssModeY_num));
		("june-mr-lx" == h.cssModeX || "june-mr-rx" == h.cssModeX) && (h.cssModeX += h.cssModeX_num), ("june-mr-uy" == h.cssModeY || "june-mr-dy" == h.cssModeY) && (h.cssModeY += h.cssModeY_num), ("june-lx" == h.css3ModeX || "june-rx" == h.css3ModeX) && (h.css3ModeX += h.css3ModeX_num), ("june-uy" == h.css3ModeY || "june-dy" == h.css3ModeY) && (h.css3ModeY += h.css3ModeY_num), ("june-move-lx" == h.css3MoveModeX || "june-move-rx" == h.css3MoveModeX) && (h.css3MoveModeX += h.css3MoveModeX_num), ("june-move-uy" == h.css3MoveModeY || "june-move-dy" == h.css3MoveModeY) && (h.css3MoveModeY += h.css3MoveModeY_num), i.attr("data-config", JSON.stringify(h)), n && (m ? e.indexOf("smallCustom") < 0 && (m.activePage = n) : m = {
			activePage: n
		}), l.trigger("dblclick", m), i.attr("data-config", JSON.stringify(j)), o && setTimeout(function() {
			$(".contentPage:eq(" + (b.tParseInt(o[1]) + 1) + ")").children("a[rel='" + (b.tParseInt(o[0]) + 1) + "']").trigger("click")
		}, 1e3)
	}), a.click = function(a, c, d, e) {
		var l, o, m, n, p, q, r, s, t, f = require("scripts/mouse"),
			g = require("scripts/code"),
			h = $(a.target).prev(),
			i = $("#" + b.dialogID).find("#tForm"),
			j = i.formToObject() || {},
			k = h.val();
		new RegExp(/\[\]/).test(c) && (c.indexOf("nestConfig") >= 0 ? (l = h.parent().parent().parent().parent().index(".sliderContentUl") - 1, c = c.replace(/\[\]/g, "") + "[" + l + "]") : (l = $(a.target).index(".t-kshbj-btn"), $(a.target).hasClass("tkb1") && (l = $(a.target).index(".t-kshbj-btn.tkb1")), $(a.target).hasClass("tkb2") && (l = $(a.target).index(".t-kshbj-btn.tkb2")), $(a.target).hasClass("tkb3") && (l = $(a.target).index(".t-kshbj-btn.tkb3")), $(a.target).hasClass("tkb4") && (l = $(a.target).index(".t-kshbj-btn.tkb4")), c = c.replace(/\[\]/g, "") + "[" + l + "]")), new RegExp(/\]\.cContent/).test(c) && (l = h.parent().parent().parent().index(), c = c.replace(/\[\S+\]/g, "[" + l + "]")), $("#" + b.dialogID).dialog("close"), "" == $("input[name='p_bgcolor']").val() && b.june.css("background-color", ""), m = $(b.appParentCls + "[appID='" + d + "']"), n = m.attr("data-dblType"), p = 500, q = 500, "jdb" != n && "job" != n && "jbob" != n && "jcb" != n && "jdlb" != n && "jpb" != n && (o = e ? $(b.appChildCls + "[attachID='" + e + "']") : $(b.appParentCls + "[appID='" + d + "']"), 0 == o.length && (o = $(b.appParentCls + "[appID='" + d + "']")), p = o.width(), q = o.height(), "jadb" == n ? (r = c.replace(/nestConfig\[\S+\]\./g, ""), s = c.replace(/nestConfig\[/g, "").substr(0, 1), t = ".t-jadb-title", "cContent1" == r && (t = ".t-jadb-panel"), p = o.children(t + ":eq(" + s + ")").width(), q = o.children(t + ":eq(" + s + ")").height()) : "jwfb" == n && (p = o.children(".t-app-other").children("div").children("div").width(), q = o.children(".t-app-other").children("div").children("div").height())), b.zdyToEnter(c, d, e, j, k), b.june.attr("style", "height:" + q + "px;width:" + p + "px;background: none repeat scroll 50% 0%;").attr({
			"data-gridpane": "10px",
			"data-bgimg": "",
			"data-repeat": "no-repeat",
			"data-attachment": "scroll",
			"data-position": "50% 0%"
		}), $("#moduleBgcolor").val(""), $("#header").hide(), $("#ksh_position").children("span").html((m.attr("data-appLabel") || m.attr("data-appName")) + "-" + $("#" + b.dialogID).find(".ui-tabs-active").text()), $("#ksh_header").show(), f.init(), g.codeImportJune(b.june), "" != k && "undefined" != k && (g.codeImportDialogCode(k, !0), b.june.children(".junehtml").find("img").addClass("jhi-img"), b.layoutCanvas())
	}, a
}), define("scripts/UI_Dialog.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax");
	return $('<div id="' + b.dialogID + '"></div>' + '<div id="' + b.dialogID + '_item"></div>' + '<div id="' + b.dialogID + '_choosepic"></div>' + '<div id="' + b.dialogID + '_other"></div>' + '<div id="' + b.dialogID + '_fsv"></div>' + '<div id="' + b.dialogID + '_aure"></div>').appendTo(b.b), a.copyBtn = function() {
		var a = $("#" + b.dialogID).parent().children(".ui-dialog-buttonpane").children(".ui-dialog-buttonset").children("button:eq(0)");
		a.attr({
			"data-target": "otherset-clicked",
			"data-oths": "sharecode;codeText"
		})
	}, a.tDialog = function(d, e, f, g, h) {
		var j, i = $.extend({}, b.dialogSetting);
		i.title = d, i.height = "focusslider.php" == e ? 640 : 590, "item.php" == e && (j = {
			"顺序调整": function() {
				a.tDialogSortItem("宝贝列表顺序调整", {
					itemCount: $("#itemCount_forsort").val(),
					itemColumn: $("#itemColumn").val(),
					pSrc: $("#pSrc_forsort").val(),
					titleInfo: $("#titleInfo_forsort").val()
				}, function() {
					"jib" == $("#tForm").attr("form-data") && "#tabs-95" == $("#tabs").children("ul").children("li.ui-tabs-active").children("a").attr("href") && itemQuickSet("leave", "#tabs-95");
					var a = require("scripts/tItem"),
						b = $("#slistid").val();
					"" != b && (b = b.split(","), a.sortItemList(b)), "jib" == $("#tForm").attr("form-data") && "#tabs-95" == $("#tabs").children("ul").children("li.ui-tabs-active").children("a").attr("href") && itemQuickSet("enter", "#tabs-95")
				})
			}
		}, i.buttons = $.extend(!0, j, i.buttons)), $("#" + b.dialogID).dialog(i), "number" == typeof h ? f.active = h : (activeArr = h.split(";"), f.active = activeArr[0], f.activePage = activeArr[1]), "item.php" == e && $('<i class="popsd"></i>').appendTo($("#" + b.dialogID).parent().children(".ui-dialog-buttonpane").children(".ui-dialog-buttonset").children("button:eq(0)").children(".ui-button-text")), c.ajaxHtml(e, f, g)
	}, a.tDialogCode = function(d, e, f, g) {
		var h = "codeforim.php",
			i = {
				code: d
			};
		g && "" != g && (i.codePopup = g), e ? $("#" + b.dialogID).dialog({
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;导入代码",
			width: 550,
			height: 580,
			modal: !0,
			buttons: {
				"导入": function() {
					$("#codeForm").data("submitAction", $.proxy(function() {
						var c, a = $("#importType").val();
						return c = "1" == a ? $("#codeText").val() : $("#codeText1").val(), 0 == $("#tettt").length ? $('<textarea id="tettt" style="display:none;"></textarea>').appendTo(b.b).val(c) : $("#tettt").val(c), $("#codeText").val(""), c ? (b.jpbLeft = 0, b.jpbTop = 0, f($("#tettt").val(), void 0, a), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : !1
					}, this)).submit()
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}) : (h = b.php_codeforgen, $("#" + b.dialogID).dialog({
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;生成代码",
			width: 550,
			height: 560,
			modal: !0,
			buttons: {
				/*"分享": function() {},*/
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), a.copyBtn()), c.ajaxHtml(h, i)
	}, a.tDialogCustom = function(a, d, e) {
		var f = "code.php",
			g = {
				codeType: "zdy",
				code: d,
				codecss: e
			};
		$("#" + b.dialogID).dialog({
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;添加自定义HTML",
			width: 550,
			height: 560,
			modal: !0,
			buttons: {
				"添加": function() {
					$("#codeForm").data("submitAction", $.proxy(function() {
						var c = b.jHtmlCheck($("#codeText").val()),
							d = $("#codeCssText").val();
						return "#tabs-3" == $("#tabs").children("ul").children("li.ui-tabs-active").children("a").attr("href") && (c = b.jHtmlCheck($("#codeText_new").val())), d = d.replace(/\s*\/\*(?:\s|.)*?\*\/|\s*([^\{\}\s;\/][^\{\};]*){([^\{\}]*[^\s\{\}]|.{0})\s*}/g, function(a, b, c) {
							return void 0 == b || b.length <= 0 ? a : (b = b.replace(/\s*\/\*(?:\s|.)*?\*\/|\s*([^\s,](?:[^,]*[^,\s])?)\s*(,|$)/g, function(a, b, c) {
								return b = b.replace(/\s*\/\*(?:\s|.)*?\*\//g, ""), "#june " + b + c
							}), b + "{" + c + "}" + "\r\n")
						}), $("#juneCustomCss").html(d), c ? (c = c.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), a(c), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : (b.june.children(".junehtml").remove(), $(this).dialog("close"), $(".ui-tooltip").hide(), !1)
					}, this)).submit()
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(f, g)
	}, a.tDialogShopCategory1 = function(a) {
		var d = "shopfl.php",
			e = {};
		$("#" + b.dialogID).dialog({
			resizable: !1,
			modal: !0,
			width: 520,
			height: 270,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;获取店铺分类",
			buttons: {
				"下一步": function() {
					a($("#shopCategoryHref").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e)
	}, a.tDialogShopCategory2 = function(a, d) {
		var e = "shopfl2.php",
			f = {};
		d && (f = $.extend(!0, {}, d)), $("#" + b.dialogID).dialog({
			resizable: !0,
			modal: !0,
			width: 520,
			height: 570,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;选择店铺类目",
			buttons: {
				"确定": function() {
					var d, c = $.extend([], f.catsPost);
					for ($("#tree-content").children("ul").children("li").each(function(a) {
						var h, i, j, d = $(this),
							e = d.children("input"),
							f = d.children("ul");
						c[a], c[a]["subCats"] && (j = c[a]["subCats"]), e.prop("checked") ? f.children("li").length > 0 && f.children("li").each(function(a) {
							h = $(this), i = h.children("input"), subRecord = j[a], i.prop("checked") || delete j[a]
						}) : delete c[a]
					}), d = 0; d < c.length; d++) c[d] || (c.splice(d, 1), d--);
					a(c, $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(e, f)
	}, a.tDialogSetStyle = function(a, d, e) {
		var f = "inputstyle.php",
			g = {
				appType: d,
				junezxUser: e
			};
		$("#" + b.dialogID).dialog({
			resizable: !0,
			modal: !0,
			width: 520,
			height: 360,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;将当前列表样式设置为预设样式",
			buttons: {
				"确定": function() {
					b.show() && ("jsfb" != d ? a($("#setitemstyleurl").val(), $("#setitemstyletext").val(), $(this)) : a($("#setitemstyleurl").val(), $("#setitemstyletext").val(), $(this), $("#setitemformat").val()))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(f, g)
	}, a.tDialogBaoBei = function(a, d) {
		var e = "itemstyle.php",
			f = {};
		d && (f = $.extend(!0, {}, d)), f.username = b.tUserName, b.show() && $("#" + b.dialogID).dialog({
			resizable: !0,
			modal: !0,
			width: 520,
			height: 660,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;选择预设样式",
			buttons: {
				"确定": function() {
					var c = $("#itemStyle").val();
					a(c, $("#" + c + "_code").val(), $("#" + c + "_code1").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(e, f)
	}, a.tDialogBaoBeiForNextStep = function(a, d) {
		var e = "itemstyle.php",
			f = {};
		d && (f = $.extend(!0, {}, d)), f.username = b.tUserName, $("#" + b.dialogID).dialog({
			resizable: !0,
			modal: !0,
			width: 520,
			height: 660,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;选择预设样式",
			buttons: {
				"下一步": function() {
					var c = $("#itemStyle").val();
					a(c, $("#" + c + "_code").val(), $("#" + c + "_code1").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(e, f)
	}, a.tDialogLightSwitch = function(a) {
		var d = "kgdcount.php",
			e = {};
		$("#" + b.dialogID).dialog({
			resizable: !1,
			modal: !0,
			width: 520,
			height: 210,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;开关灯数量",
			buttons: {
				"确定": function() {
					a($("#lightSwitchCount").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e)
	}, a.tDialogSaveList = function(a, d, e, f) {
		$("#" + b.dialogID + "_fsv").dialog({
			title: a,
			resizable: !1,
			modal: !0,
			width: 900,
			height: 600,
			buttons: {}
		}), c.ajaxHtml(d, e, f, b.dialogID + "_fsv")
	}, a.tDialogSave = function(a) {
		var d = "saveInput.php",
			e = {};
		b.tUserLogin && "" != b.tUserName && (e.userName = b.tUserName), $("#" + b.dialogID + "_fsv").dialog({
			resizable: !1,
			modal: !0,
			width: 900,
			height: 600,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;代码保存",
			buttons: {
				"保存": function() {
					a($("#saveText").val(), $(this), $("#saveText").attr("data-choosesavename"), $("#saveText").attr("data-choosesaveid"))
				},
				"关闭": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e, void 0, b.dialogID + "_fsv")
	}, a.tDialogItem = function(a, d, e) {
		var f = "itemarr.php",
			g = d;
		$("#" + b.dialogID + "_item").dialog({
			resizable: !1,
			modal: !0,
			width: 560,
			height: 540,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;" + a,
			buttons: {
				"确定": function() {
					e($(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(f, g, function(a) {
			$("#" + b.dialogID + "_item").html(a).dialog("open")
		})
	}, a.tDialogSortItem = function(a, d, e) {
		var f = "sortitemlist.php",
			g = d;
		$("#" + b.dialogID + "_item").dialog({
			resizable: !1,
			modal: !0,
			width: 560,
			height: 540,
			title: "jc60;iconjc62;ꑑjc60;/iconjc62;" + a,
			buttons: {
				"确定": function() {
					e($(this)), $(this).dialog("close"), $(".ui-tooltip").hide()
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(f, g, function(a) {
			$("#" + b.dialogID + "_item").html(a).dialog("open")
		})
	}, a.tDialogOther = function(a, d, e, f, g) {
		var h = a,
			i = e,
			j = {
				"去除样式设置": function() {
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
			width: 550,
			height: 500,
			title: d,
			buttons: j
		}), c.ajaxHtml(h, i, function(a) {
			$("#" + b.dialogID + "_other").html(a).dialog("open")
		})
	}, a.tDialogPptItem = function(a, d, e, f) {
		var g = f || "itemppt.php",
			h = d;
		$("#" + b.dialogID + "_item").dialog({
			resizable: !1,
			modal: !0,
			width: 460,
			height: 500,
			title: a,
			buttons: {
				"确定": function() {
					e($(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(g, h, function(a) {
			$("#" + b.dialogID + "_item").html(a).dialog("open")
		})
	}, a.tDialogChoosePic = function(a, d, e, f) {
		var g = f || "itemchoosepic.php",
			h = d;
		$("#" + b.dialogID + "_choosepic").dialog({
			resizable: !1,
			modal: !0,
			width: 330,
			height: 400,
			title: a,
			buttons: {
				"确定": function() {
					e($(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(g, h, function(a) {
			$("#" + b.dialogID + "_choosepic").html(a).dialog("open")
		})
	}, a
}), define("scripts/contextMenu.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/layer"),
		d = require("scripts/appManage");
	return b.tContextmenu.appendTo(b.b).html(b.appMenu).hide(), $("#editSingleItemBox").dialog({
		resizable: !0,
		modal: !0,
		width: 488,
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;快速编辑",
		buttons: {}
	}).dialog("close"), a.click = function(a) {
		var f, g, h, i, j, k, l, m, e = $(a.target);
		if (e.parent().parent().hasClass("t-contextmenu")) {
			if (f = e.parent().parent().attr("data-appID"), g = e.parent().parent().attr("data-attachID"), h = $(b.appParentCls + "[appID='" + f + "']"), i = h.attr("data-dblType"), j = e.parent().parent().data("layerJibEve"), k = e.attr("data-menuType"), g && void 0 != g && "" != g && null != g) if ($(b.appChildCls + "[attachID='" + g + "']").hasClass(b.selectedVal) && $(b.appChildCls + "[attachID='" + g + "']").parent().is(h)) {
				if (h = $(b.appChildCls + "[attachID='" + g + "']"), "jspb" != i && "jkgb" != i && "jbob" != i && "jxxb" != i && ("copy" == k || "delete" == k) && "lbePanel" != h.attr("data-attachType")) return b.tMessage("暂时只有特效层、切片正反面、轮播扩展层和开关灯的子层可以进行复制和删除"), void 0
			} else g = void 0;
			switch (k) {
			case "edit":
				h.trigger("dblclick");
				break;
			case "copy":
				b.menuEve = $.Event("keydown"), b.menuEve.ctrlKey = !0, b.menuEve.target = $(b.appParentCls + "[appID='" + f + "']")[0], b.menuEve.which = 67, b.d.trigger(b.menuEve), b.menuEve.which = 86, b.d.trigger(b.menuEve);
				break;
			case "createChild":
				d.createChild(i + "Child", $(b.appParentCls + "[appID='" + f + "']"));
				break;
			case "moveUp":
				d.moveUp(f, g);
				break;
			case "moveDown":
				d.moveDown(f, g);
				break;
			case "moveToFirst":
				d.moveToFirst(f, g);
				break;
			case "moveToLast":
				d.moveToLast(f, g);
				break;
			case "drag":
				e.hasClass("t-context-disdrag") ? (e.removeClass("t-context-disdrag").addClass("t-context-drag"), d.notAllowDrag(f, g)) : (e.removeClass("t-context-drag").addClass("t-context-disdrag"), d.allowDrag(f, g));
				break;
			case "addGroup":
				d.addGroup(f, g);
				break;
			case "delete":
				d.remove(f, g);
				break;
			case "deleteGroup":
				c.deleteGroup();
				break;
			case "editGroup":
				c.editGroup();
				break;
			case "editSingleItem":
				console.log(j), l = j.attr("data-attachType"), m = h.children("[data-attachType='" + l + "']").index(j), itemQuickSingleReal(h, m)
			}
		}
	}, a
}), define("scripts/controlBtn.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage"),
		d = require("scripts/appManage1");
	return $(b.controlBtn).appendTo(b.b), $("#tControlBtn").tooltip({
		content: function() {
			var a = $(this),
				b = a.attr("data-help"),
				c = a.attr("title");
			return "help" == b ? '<div style="position:relative;width:500px;height:90px;font-family:\'微软雅黑\';"><div style="height:30px;line-height:30px;font-size:16px;margin-left:6px;"><strong>如何拖动子层</strong></div><div style="height:26px;line-height:26px;font-size:14px;margin-left:6px;">方法1. 在父层上<span style="color:#14cc70;">单击鼠标右键</span>，选择需要拖动的子层后，即可拖动该子层。</div><div style="height:26px;line-height:26px;font-size:14px;margin-left:6px;">方法2. 在右侧<span style="color:#14cc70;">图层面板</span>中选择对应的子层后，即可拖动选中的子层。</div></div>' : c
		},
		position: {
			my: "left top",
			at: "right-36 top+30"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	}), a.click = function(a) {
		var f, g, h, i, j, e = $(a.target);
		if (e.parent().is($("#tControlBtn"))) {
			if (f = e.parent().attr("appID"), g = e.parent().attr("attachID"), h = $(b.appParentCls + "[appID='" + f + "']"), i = h.attr("data-dblType"), j = e.attr("data-btnType"), g && void 0 != g && "" != g && null != g) if ($(b.appChildCls + "[attachID='" + g + "']").hasClass(b.selectedVal) && $(b.appChildCls + "[attachID='" + g + "']").parent().is(h)) {
				if (h = $(b.appChildCls + "[attachID='" + g + "']"), "jspb" != i && "jkgb" != i && "jbob" != i && "jxxb" != i && ("copy" == j || "delete" == j) && "lbePanel" != h.attr("data-attachType")) return b.tMessage("暂时只有特效层、切片正反面、轮播扩展层和开关灯的子层可以进行复制和删除"), void 0
			} else g = void 0;
			switch (j) {
			case "createChild":
				c.createChild(i + "Child", $(b.appParentCls + "[appID='" + f + "']"));
				break;
			case "edit":
				h.trigger("dblclick");
				break;
			case "drag":
				e.hasClass("t-control-btns-lock") ? (e.attr("title", "解除锁定").removeClass("t-control-btns-lock").addClass("t-control-btns-unlock"), c.notAllowDrag(f, g)) : (e.attr("title", "锁定位置").removeClass("t-control-btns-unlock").addClass("t-control-btns-lock"), c.allowDrag(f, g));
				break;
			case "copy":
				a = $.Event("keydown"), a.ctrlKey = !0, a.target = $(b.appParentCls + "[appID='" + f + "']")[0], a.which = 67, b.d.trigger(a), a.which = 86, b.d.trigger(a);
				break;
			case "delete":
				c.remove(f, g);
				break;
			case "defaultstyle":
				c.showStyle(a, f, g);
				break;
			case "setIcon":
				d.showIcon(a, f, g);
				break;
			case "setIcon1":
				d.showIcon1(a, f, g);
				break;
			case "setIconInDialog":
				d.showIconInDialog(inputID);
				break;
			case "setItemStyle":
				d.setItemStyle(a, f, g)
			}
		}
	}, a
}), define("scripts/keyboard.js", function(a) {
	var i, b = require("scripts/D"),
		c = require("scripts/moduleManage"),
		d = require("scripts/appManage"),
		e = require("scripts/saveChoose"),
		f = require("scripts/snap"),
		g = require("scripts/layer"),
		h = require("scripts/action");
	b.d.off("keydown.keyboard").on("keydown.keyboard", function(a) {
		var m, n, o, p, q, s, t, v, w, D, B, C, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, i = $(a.target),
			j = a.ctrlKey,
			k = a.shiftKey,
			l = a.altKey,
			r = !1,
			u = !1;
		if (key = a.keyCode || a.which, compareEvent = $.extend({}, a), tagName = a.target ? a.target.tagName.toLowerCase() : "", !b.isLoading) {
			if (j && (l && f.snapCompareLine(!1, !1), 116 == key && (a.keyCode = 0, a.returnValue = !1, a.preventDefault(), a.stopPropagation()), (87 == key || 82 == key || 78 == key || 121 == key) && (a.returnValue = !1, a.cancelable = !1, a.preventDefault(), a.stopPropagation())), ("input" == tagName || "textarea" == tagName || "select" == tagName || "radio" == tagName || "checkbox" == tagName || i.hasClass("ban-keyboard")) && !i.hasClass("except-keyboard")) return "input" == tagName && 13 == key && (_dialog = checkDialog(i), _dialog && _dialog.length > 0 && _dialog.children(".ui-dialog-buttonpane").children(".ui-dialog-buttonset").find("button[data-ok='yes']").trigger("click")), void 0;
			if (8 != key || i.hasClass("except-keyboard") || (a.returnValue = !1, a.cancelable = !1, a.preventDefault(), a.stopPropagation()), m = b.jSelectsedDom, j) if (17 == key && b.compareTarget && (b.compareTarget.hasClass(b.appParentClsVal) || b.compareTarget.hasClass(b.appChildClsVal) || "june" == b.compareTarget.attr("id") || "juneCtrlHelper" == b.compareTarget.attr("id")) && f.snapCompareLine(b.compareTarget, !! j), 86 == key && b.show()) {
				if (window.localStorage) {
					if (q = localStorage.getItem("tCookieJunezxCopy"), b.keyCache = JSON.parse(q), s = $(), t = $(), 0 == $(b.appCls + "[appID='" + b.keyCache.appID[0] + "']").length) {
						for (v = 0; v < b.keyCache.selfHtml.length; v++) i = $(b.keyCache.selfHtml[v]).appendTo(b.june), s = s.addGroup(i);
						for (v = 0; v < b.keyCache.selfLayer.length; v++) w = $(b.keyCache.selfLayer[v]).prependTo(b.layerList), t = t.addGroup(w);
						r = !0
					}
					if (r && b.keyCache.act) return b.dragEle && b.dragStartX && b.dragStartY && (b.pageX, b.pageY, b.dragStartX, b.dragStartY, "copyStart" == b.actionCollection[b.actionPos]["type"] && (b.getDragSelected($("#juneDragHelper"), b.jSelectsedDom), h.create("move", m))), b.dragStartX = null, b.dragStartY = null, b.dragEle = null, B = !1, C = !1, b.keyCache.mutliPos.length > 0 && (B = !0, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $()), b.pageX + b.junebox.scrollLeft() - _g_offsleft, b.pageY + b.junebox.scrollTop() - _g_offstop, b.jSelectsedDom = b.jSelectsedDom.addGroup(s), p = $.extend({}, a, {
						pageX: b.pageX,
						pageY: b.pageY,
						offsetX: b.offsetX,
						offsetY: b.offsetY
					}), s.each(function(a) {
						var d = $(this);
						d.offset({
							left: b.pageX + b.keyCache.mutliPos[a].left - b.keyCache.mutliPos[0].left,
							top: b.pageY + b.keyCache.mutliPos[a].top - b.keyCache.mutliPos[0].top
						})
					}), $("." + b.june.attr("id") + "-" + $("#qmitemSingle").children().children().attr("class").substr(5, 7)).each(function() {
						var c = $(this);
						c.attr("href", c.attr("href").replace(/(\?u|\&u)(id=)(.*?)(\&|$)/g, "$1$2" + $("#tNotice").children("span:eq(1)").attr("data-tna").substr(0, 6) + "$4"))
					}), p.target = s.eq(0)[0], D = p, b.keyCache.mutliPos.length > 0 && D && (b.dragStartX = null, b.dragStartY = null, E = require("scripts/drag"), E.Start(D), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = D.pageX, b.clickTimeStartY = D.pageY, b.clickTimeDom = D), b.pencilTime = 1, d.copyGroup(), h.create("copyStart", m), void 0
				}
				if (b.keyCache.act) {
					if (b.dragEle && b.dragStartX && b.dragStartY && (b.pageX, b.pageY, b.dragStartX, b.dragStartY, "copyStart" == b.actionCollection[b.actionPos]["type"] && (b.getDragSelected($("#juneDragHelper"), b.jSelectsedDom), h.create("move", m))), b.dragStartX = null, b.dragStartY = null, b.dragEle = null, B = !1, C = !1, b.keyCache.mutliPos.length > 1 && (B = !0, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $()), "copy" == b.keyCache.type) {
						for (F = 0; F < b.keyCache.mutliPos.length; F++) p = $.extend({}, a, {
							pageX: b.pageX + b.keyCache.mutliPos[F].left,
							pageY: b.pageY + b.keyCache.mutliPos[F].top,
							offsetX: b.offsetX,
							offsetY: b.offsetY
						}), C = 0 == F ? !0 : !1, tempFirst = d.copy(p, b.keyCache.appID[F], b.keyCache.attachID[F], "key", B, C), tempFirst && (D = tempFirst);
						b.keyCache.mutliPos.length > 1 && D && (b.dragStartX = null, b.dragStartY = null, E = require("scripts/drag"), E.Start(D), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = D.pageX, b.clickTimeStartY = D.pageY, b.clickTimeDom = D)
					} else {
						if (b.keyCache.isused) for (F = 0; F < b.keyCache.mutliPos.length; F++) p = $.extend({}, a, {
							pageX: b.pageX + b.keyCache.mutliPos[F].left,
							pageY: b.pageY + b.keyCache.mutliPos[F].top,
							offsetX: b.offsetX,
							offsetY: b.offsetY
						}), C = 0 == F ? !0 : !1, tempFirst = d.copy(p, b.keyCache.appID[F], b.keyCache.attachID[F], "key", B, C), tempFirst && (D = tempFirst);
						else _thisApp = b.keyCache.cutApp.appendTo(b.june), _thisLayer = b.keyCache.cutLayer.prependTo(b.layerList), b.pageX + b.junebox.scrollLeft() - _g_offsleft, b.pageY + b.junebox.scrollTop() - _g_offstop, b.jSelectsedDom = b.jSelectsedDom.addGroup(_thisApp), p = $.extend({}, a, {
							pageX: b.pageX,
							pageY: b.pageY,
							offsetX: b.offsetX,
							offsetY: b.offsetY
						}), _thisApp.each(function(a) {
							var d = $(this);
							d.offset({
								left: b.pageX + b.keyCache.mutliPos[a].left - b.keyCache.mutliPos[0].left,
								top: b.pageY + b.keyCache.mutliPos[a].top - b.keyCache.mutliPos[0].top
							})
						}), p.target = _thisApp.eq(0)[0], D = p, b.keyCache.isused = !0;
						b.keyCache.mutliPos.length > 0 && D && (b.dragStartX = null, b.dragStartY = null, E = require("scripts/drag"), E.Start(D), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = D.pageX, b.clickTimeStartY = D.pageY, b.clickTimeDom = D)
					}
					b.pencilTime = 1, d.copyGroup(), h.create("copyStart", m)
				}
			} else if (67 == key) $("#juneDragHelper").appendTo(b.b), m.each(function() {
				var c, a = $(this);
				a.hasClass("t-app-child") && (c = a.parent(), c.hasClass(b.selectedVal) && (a.removeClass(b.selectedVal), m = m.not(a)))
			}), m.length > 1 ? (window.localStorage && localStorage.removeItem("tCookieJunezxCopy"), b.keyCache.selfHtml = [], b.keyCache.selfLayer = [], b.keyCache.appID = [], b.keyCache.attachID = [], b.keyCache.mutliPos = [], b.keyCache.act = !0, b.keyCache.type = "copy", $.unique(m).each(function(a) {
				var d = $(this);
				n = d.attr("appID"), o = d.attr("attachID"), b.keyCache.selfHtml.push(d.prop("outerHTML")), o ? b.keyCache.selfLayer.push(b.layerList.children(b.layerCls + "[attachID='" + o + "']").prop("outerHTML")) : $(b.layerList.children(b.layerCls + "[appID='" + n + "']").get().reverse()).each(function() {
					b.keyCache.selfLayer.push($(this).prop("outerHTML"))
				}), b.keyCache.appID.push(n), b.keyCache.attachID.push(o), 0 == a ? (d.hasClass("june-group") ? (I = d.attr("data-groupId"), J = m.filter("[data-inGroup='" + I + "']:eq(0)"), J.length > 0 ? (G = J.offset().top, H = J.offset().left) : (G = _g_offstop, H = _g_offsleft)) : (G = d.offset().top, H = d.offset().left), b.keyCache.mutliPos.push({
					top: 0,
					left: 0
				})) : (_thisTop = d.offset().top - G, _thisLeft = d.offset().left - H, b.keyCache.mutliPos.push({
					top: _thisTop,
					left: _thisLeft
				}))
			}),
			//2017-12-16 增加画布高度调整功能(2069-2070) 
			window.localStorage && localStorage.setItem("tCookieJunezxCopy", JSON.stringify(b.keyCache))) : m.length < 1 || (window.localStorage && localStorage.removeItem("tCookieJunezxCopy"), b.keyCache.selfHtml = [], b.keyCache.selfLayer = [], b.keyCache.appID = [], b.keyCache.attachID = [], b.keyCache.mutliPos = [], n = m.attr("appID"), o = m.attr("attachID"), b.keyCache.act = !0, b.keyCache.selfHtml[0] = m.prop("outerHTML"), o ? b.keyCache.selfLayer[0] = b.layerList.children(b.layerCls + "[attachID='" + o + "']").prop("outerHTML") : $(b.layerList.children(b.layerCls + "[appID='" + n + "']").get().reverse()).each(function() {
				b.keyCache.selfLayer.push($(this).prop("outerHTML")) 
			}), b.keyCache.type = "copy", b.keyCache.appID[0] = n, b.keyCache.attachID[0] = o, b.keyCache.mutliPos[0] = {
				top: 0,
				left: 0
			}, window.localStorage && localStorage.setItem("tCookieJunezxCopy", JSON.stringify(b.keyCache)));
			else if (88 == key) if (m.length < 1) b.tMessage("请选择应用后再使用剪切功能");
			else {
				if (window.localStorage && localStorage.removeItem("tCookieJunezxCopy"), $("#juneDragHelper").appendTo(b.b), m.each(function() {
					var c, a = $(this);
					a.hasClass("t-app-child") && (c = a.parent(), c.hasClass(b.selectedVal) && (a.removeClass(b.selectedVal), m = m.not(a)))
				}), m = m.not(".t-app-child"), m.length < 1) return b.tMessage("子层应用暂时无法使用剪切功能"), void 0;
				b.keyCache.selfHtml = [], b.keyCache.selfLayer = [], b.keyCache.appID = [], b.keyCache.attachID = [], b.keyCache.mutliPos = [], b.keyCache.act = !0, b.keyCache.type = "cut", K = $(), $.unique(m).each(function(a) {
					var g, d = $(this),
						e = d.attr("appID"),
						f = d.attr("attachID") || void 0;
					b.keyCache.selfHtml.push(d.prop("outerHTML")), f ? b.keyCache.selfLayer.push(b.layerList.children(b.layerCls + "[attachID='" + f + "']").prop("outerHTML")) : $(b.layerList.children(b.layerCls + "[appID='" + e + "']").get().reverse()).each(function() {
						b.keyCache.selfLayer.push($(this).prop("outerHTML"))
					}), b.keyCache.appID.push(e), b.keyCache.attachID.push(f), 0 == a ? (d.hasClass("june-group") ? (I = d.attr("data-groupId"), J = m.filter("[data-inGroup='" + I + "']:eq(0)"), J.length > 0 ? (G = J.offset().top, H = J.offset().left) : (G = _g_offstop, H = _g_offsleft)) : (G = d.offset().top, H = d.offset().left), b.keyCache.mutliPos.push({
						top: 0,
						left: 0
					})) : (_thisTop = d.offset().top - G, _thisLeft = d.offset().left - H, b.keyCache.mutliPos.push({
						top: _thisTop,
						left: _thisLeft
					})), g = f ? b.layerList.children(b.layerCls + "[attachID='" + f + "']") : b.layerList.children(b.layerCls + "[appID='" + e + "']"), K = K.addGroup(g)
				}), b.keyCache.isused = !0, m.remove(), K.remove(), window.localStorage && localStorage.setItem("tCookieJunezxCopy", JSON.stringify(b.keyCache)), h.create("cut", m)
			} else if (90 == key) {
				if (b.drawHelper) return;
				h.click(b.actionPos - 1), a.preventDefault(), a.stopPropagation()
			} else 89 == key ? (h.click(b.actionPos + 1), a.preventDefault(), a.stopPropagation()) : 65 == key ? (b.jSelectsedDom = $(), b.june.children(b.appCls).removeClass(b.selectedVal), b.layerList.children(b.layerCls).removeClass(b.layerSelectedVal), b.june.children(b.appCls).each(function() {
				var a = $(this),
					c = a.attr("appID");
				b.chooseLayer(c, !1, null, !0)
			}), b.june.find(b.appChildCls).each(function() {
				var a = $(this),
					c = a.attr("appID"),
					d = a.attr("attachID");
				b.chooseLayer(c, !1, d, !0)
			})) : 83 == key ? (k ? $("#jBtnCodeExport").trigger("click") : e.click([b.tUserLogin, b.tUserName], c.toSave), a.preventDefault(), a.stopPropagation()) : 71 == key ? (k ? g.deleteGroup() : g.addGroup(), a.preventDefault()) : 79 == key ? ($("#jBtnCodeImport").trigger("click"), a.preventDefault()) : 69 == key ? ($("#jBtnCodePreview").trigger("click"), a.preventDefault()) : 72 == key ? (k ? (b.assistSwitch1 = b.assistSwitch1 ? !1 : !0, b.snapSwitch = b.snapSwitch ? !1 : !0) : (b.assistSwitch = b.assistSwitch ? !1 : !0, f.snapCompareLine(!1, !1, !0)), a.preventDefault()) : 76 == key && (b.gridSwitch = b.gridSwitch ? !1 : !0, b.updateGrid(), a.preventDefault());
			else if (37 == key || 38 == key || 39 == key || 40 == key) {
				if (clearTimeout(b.keyCache.keyTime), clearTimeout(b.keyCache.actTime), P = $("#bgDragBox").attr("data-isdi"), k ? b.keyDirection += 10 : b.keyDirection++, "yes" == P) return b.moveBgDragBox(key), a.preventDefault(), void 0;
				37 == key ? m.each(function() {
					if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
						var a = b.tParseInt($(this).css("left")) - b.keyDirection;
						0 > a && !$(this).hasClass(b.appChildClsVal) && !b.appOverSwitch && (a = 0), $(this).css({
							left: a
						}), (!M || a > M) && (M = a, N = $(this)), b.tProcess(m)
					}
				}) : 38 == key ? m.each(function() {
					if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
						var a = b.tParseInt($(this).css("top")) - b.keyDirection;
						0 > a && !$(this).hasClass(b.appChildClsVal) && !b.appOverSwitch && (a = 0), $(this).css({
							top: a
						}), (!L || a > L) && (L = a, O = $(this)), b.tProcess(m)
					}
				}) : 39 == key ? m.each(function() {
					if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
						var a = b.tParseInt($(this).css("left")) + b.keyDirection;
						a > b.june.width() - $(this).width() && !$(this).hasClass(b.appChildClsVal) && !b.appOverSwitch && (a = b.june.width() - $(this).width()), $(this).css({
							left: a
						}), (!M || a > M) && (M = a, N = $(this)), b.tProcess(m)
					}
				}) : 40 == key && m.each(function() {
					if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
						var a = b.tParseInt($(this).css("top")) + b.keyDirection;
						a > b.june.height() - $(this).height() && !$(this).hasClass(b.appChildClsVal) && !b.appOverSwitch && (a = b.june.height() - $(this).height()), $(this).css({
							top: a
						}), (!L || a > L) && (L = a, O = $(this)), b.tProcess(m)
					}
				}), u || (b.keyCache.keyTime = setTimeout(function() {
					b.keyDirection = 0;
					var a = [],
						c = [];
					m.each(function() {
						var b = $(this),
							e = (b.attr("appID"), b.attr("attachID"));
						e ? (a.push(b.parent()), c.push(b)) : (a.push(b), c.push(void 0)), 1 == m.length && (a = null, c = null, e ? (a = m.parent(), c = m) : (a = m, c = void 0))
					}), b.keyCache.actTime = setTimeout(function() {
						h.create("move", a, c)
					}, 500)
				}, 50)), b.showControl(a), a.preventDefault(), a.stopPropagation()
			} else if (46 == key) Q = [], R = [], m.each(function() {
				var a = $(this),
					b = a.attr("appID"),
					c = a.attr("attachID");
				Q.push(b), R.push(c), 1 == m.length && (Q = null, R = null, Q = b, R = c)
			}), d.remove(Q, R);
			else if (32 == key) {
				if (a.preventDefault(), b.drawHelper) return;
				"handle" != b.tempCurType && (_g_btnshow = !1, b.tempCurType = "handle", $("#bodybox").removeClass("pencil").addClass("handle"), 0 == $("#handleHelper").length && $('<div id="handleHelper" style="position:absolute;z-index:140;width:100%;height:100%;top:0;left:0;"></div>').appendTo(b.june), $("#handleHelper").show(), $("#handleHelper_hdyw").show())
			} else 77 == key ? $("#toolnav").children(".toolselecttype:eq(0)").trigger("click") : 80 == key && $("#toolnav").children(".toolselecttype:eq(3)").trigger("click");
			l && j && f.snapCompareLine(!1, !1)
		}
	});
	try {
		i = console, Object.defineProperty(window, "console", {
			get: function() {
				if (i._commandLineAPI) throw "";
				return i
			},
			set: function(a) {
				i = a
			}
		})
	} catch (j) {}
	return b.d.on("keyup", function(a) {
		var c = a.keyCode || a.which;
		17 == c ? f.snapCompareLine(!1, !1) : 32 == c && (_g_btnshow = !0, b.tempCurType = b.curType, "handle" != b.curType && $("#bodybox").removeClass("handle").removeClass("pencil"), "pencil" == b.curType && $("#bodybox").removeClass("handle").addClass("pencil"), $("#handleHelper").hide())
	}), a
}), define("scripts/mouse.js", function(a) {
	var C, b = require("scripts/D"),
		d = (b.appConfig, require("scripts/appLoginCheck")),
		e = require("scripts/snap"),
		f = require("scripts/drag"),
		g = require("scripts/resize"),
		h = require("scripts/zoom"),
		i = require("scripts/UI_Dialog"),
		j = require("scripts/layer"),
		k = require("scripts/action"),
		l = require("scripts/align"),
		n = require("scripts/tLogin"),
		o = require("scripts/tItem"),
		p = require("scripts/contextMenu"),
		q = require("scripts/controlBtn"),
		r = require("scripts/code"),
		s = require("scripts/moduleManage"),
		t = require("scripts/other"),
		u = require("scripts/courseStep"),
		v = require("scripts/zdyEdit"),
		w = require("scripts/quickSet"),
		x = require("scripts/dragPanel"),
		y = require("scripts/topManage"),
		z = require("scripts/appManage"),
		A = require("scripts/lib/itemInput"),
		B = {};
	return B.draw = require("scripts/drawArea"), B.select = require("scripts/select"), B.pencil = require("scripts/pencil"), B.handle = require("scripts/handle"), b.tempCurType = b.curType, a.act = function(a) {
		var d, c, p, q, i, j, l, n, o, r;
		if ("0" == a) {
			c = void 0;
			try {
				c = $("#toolnav").parent().prev().prev().prev().children(":eq(0)").css("background-image").replace(/^(.*)?(?:url\(\"?)|\"?\)(.*)?$/g, "")
			} catch (h) {} 
			d = $[b["g"][m(31 * Math.random())]](c), (b.tContextmenu.hide(), $("#tLayerMenu").hide(), $("#tLayerMenu_jib").hide(), b.tempSnapSwitch = b.snapSwitch, b.i($.proxy(function() {
				b.create() && (C = this.keycode || this.which, "handle" != b.tempCurType && (b.tempCurType = b.curType), this.shiftKey && (b.tempCurType = "select"), B[b.tempCurType].Start(this)), B["pencil"].eidtStart(this), f.Start(this), g.Start(this), b.snapSwitch && e.snapStart(this), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = this.pageX, b.clickTimeStartY = this.pageY, b.clickTimeDom = this
			}, this))), b.sgv(b.fel[60] + b.a1f[24] + b.bf5[5], (b.getCode(b.june.attr("id") + "Vi" + $("#toolside").html()) || "help").substr(0, 2))
		} else "1" == a ? (b.clickTimeStart && "e3d4" == $[b["g"][m(19 * Math.random())]](b.appConfig["job"][2]["oppoSrc"]) && (b.clickTimeIng = (new Date).getTime()), (b.clickTimeStart && b.clickTimeIng - b.clickTimeStart > 50 || "pencil" == b.curType) && (B[b.tempCurType].Ing(this), B["pencil"].eidtIng(this), f.Ing(this), g.Ing(this), b.snapSwitch && e.snapIng(this)), x.Ing(this), b.getDragSelected($("#juneDragHelper"), b.jSelectsedDom, !0), b.BreachMoveRuler && b.snapSwitch && e.snapIng(this)) : "2" == a && (b.clickTimeEnd = (new Date).getTime(), b.clickTimeStart && b.clickTimeEnd - b.clickTimeStart > 50 && (Math.abs(b.clickTimeStartX - this.pageX) > 2 || Math.abs(b.clickTimeStartY - this.pageY) > 2) ? (b.snapSwitch = b.tempSnapSwitch, b.clickTimeDom = this) : b.clickTimeStart && null != b.tempSnapSwitch && (b.snapSwitch = !1), $(this.target).is(b.june) && ("draw" == b.curType || "pencil" == b.curType) && y.showTopManage(b.curType), $(this.target).hasClass("t-app") && y.showTopManage($(this.target).attr("data-dblType"), !0), B[b.tempCurType].End(b.clickTimeDom), B["pencil"].editEnd(this), f.End(b.clickTimeDom), g.End(b.clickTimeDom), b.snapSwitch && e.snapEnd(b.clickTimeStartDom), b.dragEle && b.dragStartX && b.clickTimeDom && (i = this.pageX, j = this.pageY, l = b.dragStartX, n = b.dragStartY, o = b.jSelectsedDom, r = "drag", o.length > 1 && (p = [], q = [], r = "drag"), o.each(function() {
			var d = $(this);
			(Math.abs(i - l) > 3 || Math.abs(j - n) > 3) && (o.length > 1 ? d.attr("data-attachType") ? (p.push(d.parent()), q.push(d)) : (p.push(d), q.push(void 0)) : b.show() && (d.attr("data-attachType") ? (p = d.parent(), q = d) : (p = d, q = void 0)))
		}), b.c($.proxy(function() {
			p && p.length > 0 && k.create(r, p, q)
		}, this))), b.dragStart = !1, b.dragStartX = null, b.dragStartY = null, b.dragEle = null, b.snapEle = null, b.clickTimeStart && null != b.tempSnapSwitch && (b.snapSwitch = b.tempSnapSwitch, b.tempSnapSwitch = null), b.clickTimeStart = 0, b.clickTimeIng = 0, b.clickTimeEnd = 0, x.End(this), e.snapLine(!1), b.pencilLine || (b.pencilTime = 0), b.june.children(".j-fnd").each(function() {
			"hidden" == $(this).css("visibility") && $(this).css("visibility", "visible")
		}))
	}, a.checkEvent = function(c, d, e, f) {
		return d && d.parentNode && "june" != d.id && "zdybox" != d.id ? (e = e || 0, $(d).hasClass(b.appParentClsVal) && !$(d).hasClass("junehtml") || $(d).hasClass(b.appChildClsVal) || $(d).hasClass(b.rhClsVal) || $(d).hasClass("pencilPointer") || $(d).attr("data-target") ? (c.target = d, c) : $(d).hasClass(b.appParentClsVal) && $(d).hasClass("junehtml") && ("june" == $(d.parentNode).attr("id") || "zdybox" == $(d.parentNode).attr("id")) ? (f || (c.target = d.parentNode), c) : ("i" != d.tagName.toLowerCase() && "icon" != d.tagName.toLowerCase() || $(d).hasClass("june-notc-i") || $(d).hasClass("t-layer-eye") || $(d).hasClass("june-notc-em")) && "val" != d.tagName.toLowerCase() && !$(d).hasClass("j-gop") ? $(c.target).hasClass("june-notc-i") && !$(c.target).parent().hasClass("j-gop") && "zx" == hre ? c : $(d).hasClass("t-app-mongolia") || $(d).hasClass("t-app-other") || $(d).hasClass("t-app-junebg") ? (c.target = d.parentNode, c) : e > 15 ? c : a.checkEvent(c, d.parentNode, e + 1, f) : (c.target = d.parentNode, c)) : c
	}, a.checkEventForJsfb = function(b, c, d) {
		return c && c.parentNode && "june" != c.id && "zdybox" != c.id ? (d = d || 0, $(c).hasClass("jsfbchild") ? (b.target = c.parentNode, b) : d > 10 ? b : a.checkEventForJsfb(b, c.parentNode, d + 1)) : b
	}, a.dblclickEvent = function(c, d) {
		var e, h, n, f, g, j, k, l, o, p, t, q, r, u, v, w, x, y, z, A;
		if (clearTimeout(b.clickTimeFn), e = !1, c && c.target && $(c.target).hasClass("jhi-img") && (e = !0), c = a.checkEvent(c, c.target, 0, e), c && c.target && $(c.target).hasClass("jhi-img") && s.editJHI(c), "june" != c.target.id && "zdybox" != c.target.id && !c.ctrlKey && (f = $(c.target), g = 0, j = {}, k = !1, l = !1, o = null, (f.hasClass(b.rhClsVal) || f.hasClass("t-app-grandson")) && (f = f.parent()), !f.hasClass("t-pencilLine"))) {
			if ("27e6" != $[b.g[m(16 * Math.random())]](b.appConfig["jspb"][1]["tDynamicConfig"]["pSrc"]) && (f = b.junebox), "jfsb" == f.attr("data-dblType") && (g = 1), f.hasClass("t-app-child") && b.show()) {
				switch (h = f.attr("data-dblType"), p = f.attr("data-attachType") || "", h) {
				case "jspb":
					o = f.attr("attachID");
					break;
				case "jkgb":
					o = f.attr("attachID");
					break;
				case "jbob":
					o = f.attr("attachID");
					break;
				case "jsdb":
					g = 3;
					break;
				case "jfsb":
					g = 1, g = "jfsbOArrow" == p || "jfsbTArrow" == p ? 3 : "1;p" + f.parent().children("[data-attachType='jfsbSmallImg']").index(f), "lbePanel" == p && (g = 4 + f.parent().children("[data-attachType='lbePanel']").index(f));
					break;
				case "jqtb":
					g = "jqtbOArrow" == p || "jqtbTArrow" == p ? -1 : 1 + f.parent().children("[data-attachType='jqtbSmallImg']").index(f), "lbePanel" == p && (g = -2 - f.parent().children("[data-attachType='lbePanel']").length + f.parent().children("[data-attachType='lbePanel']").index(f));
					break;
				case "jwfb":
					g = "jwfbOArrow" == p || "jwfbTArrow" == p ? 2 : "0;p" + f.parent().children("[data-attachType='jwfbSmallImg']").index(f), "lbePanel" == p && (g = 5 + f.parent().children("[data-attachType='lbePanel']").index(f));
					break;
				case "jfyb":
					"jfybOArrow" == p || "jfybTArrow" == p ? g = 2 : "jfybPanel" == p && (g = 1);
					break;
				case "jab":
					g = 2;
					break;
				case "jxxb":
					g = 1 + f.parent().children("[data-attachType]").index(f);
					break;
				case "jsb":
					"jsbInput" == p ? g = 1 : "jsbBtn" == p ? g = 2 : "jsbPricePanel" == p ? g = 3 : "jsbPriceLow" == p ? g = 3 : "jsbPriceHigh" == p && (g = 3);
					break;
				case "jacb":
					g = 2;
					break;
				case "jzzb":
					g = "jzzbAttention" == p && "zx" == hre ? 2 : 3;
					break;
				case "jib":
					"jibbg" == p ? g = 2 : "jibpanel" == p ? g = 3 : "jibtitle" == p ? g = 4 : "jibsubtitle" == p ? g = 5 : "jibprefix" == p || "jibprice" == p ? g = 6 : "jibdiscountprefix" == p || "jibdiscountprice" == p ? g = 7 : "jibsaleprefix" == p || "jibsale" == p ? g = 8 : "jibbtn" == p || "jibbtn1" == p || "jibbtn2" == p ? g = 9 : "jibsubscript" == p || "jibsubscript1" == p || "jibsubscript2" == p || "jibsubscript3" == p || "jibsubscript4" == p || "jibexpandtext" == p || "jibexpandtext1" == p || "jibexpandtext2" == p || "jibexpandtext3" == p || "jibexpandtext4" == p ? g = 10 : "jiberweima" == p && (g = 11);
					break;
				case "jsfb":
					j = JSON.parse(f.attr("data-attachConfig")), n = f, g = 1, f.hasClass("jsfbchildc") && (k = !0), f.hasClass("jsfbchildb") && (g = 2, l = !0);
					break;
				default:
					g = 0
				}
				b.getCode("juneVisited") && (f = f.parent())
			}
			if (q = b.appConfig, r = f.attr("data-dblType"), d || ("jspb" == r || "jkgb" == r || "jbob" == r) && upDateSortSub(f), t = f.attr("data-config"), t || (t = f.parent().attr("data-config"), f = f.parent()), d && d.popup && b.show() && (g = -1, ("job" == r || "jcb" == r) && (g = 3)), d && d.nestSlider && "jqtb" == r && (g = b.tParseInt(d.nestSlider) + 1), d && d.activePage && ("string" == typeof g && (g = g.split(";")[0]), g = g + ";p" + b.tParseInt(d.activePage), "jfsb" == r && (g = g + ";p" + b.tParseInt(d.activePage))), r && b.click()) {
				if ("juneCustom" == r) return;
				if (t = JSON.parse(t), t.allowTime = b.tUserLogin, ("jspb" == r || "jkgb" == r || "jbob" == r) && t.childConfig.length > 0) if (o) {
					for (u = 0; u < t.childConfig.length; u++) if (t.childConfig[u].attachID == o) {
						g = 1 + u;
						break
					}
				} else d && d["fromEdit"] && (g = b.tParseInt(d["fromEdit"]) + 1);
				if (!t.popupConfig && b.getCode("juneVisited") && (t.popupConfig = $.extend({}, b.popupConfig)), t.getZdy && (t.width || t.height) || (t.width = f.width(), t.height = f.height()), t.top = b.tParseInt(f.css("top")), t.left = b.tParseInt(f.css("left")), t.childConfig && t.childConfig.length > 0 && "zx" == hre) for (v = 0; v < t.childConfig.length; v++) w = t.childConfig[v], x = f.children(b.appChildCls + "[attachID='" + w.attachID + "']"), w.width = x.width(), w.height = x.height(), w.top = b.tParseInt(x.css("top")), w.left = b.tParseInt(x.css("left")), ("jspb" == r || "jbob" == r || "jkgb" == r) && (w.appName = x.attr("data-appLabel") || x.attr("data-appName"), w.popupConfig || (w.popupConfig = $.extend({}, b.popupConfig)));
				if ("jwfb" == r && b.show() && t.sliderImgMode) {
					for (t.customContent = [], t.contentType = [], t.smallImgSrc = [], t.smallHoverSrc = [], t.smallImgSrcT = [], t.smallHoverSrcT = [], t.thumbSet = [], t.thumbCircleSet = [], t.smallCircleMode = [], t.smallCircleBgColor = [], t.smallCircleBgColor1 = [], v = 0; v < t.sliderSrc.length; v++) t.customContent.push(""), t.contentType.push("imgContent"), t.smallImgSrc.push(""), t.smallHoverSrc.push(""), t.smallImgSrcT.push(""), t.smallHoverSrcT.push(""), t.thumbSet.push(""), t.thumbCircleSet.push(""), t.smallCircleMode.push("no"), t.smallCircleBgColor.push(""), t.smallCircleBgColor1.push("");
					t.sliderSmallImg = "no", t.css3Mode = "", t.kgdSwitch = "black", t.sliderDelay = "0", t.sliderSwitch = "mouse", t.displayMode = "", t.css3Speed = "trans05s", t.sWidth = "15", t.sHeight = "15", t.defaultSmallImg = "", t.defaultSmallHover = "", delete t.sliderImgMode
				}
				"jsfb" == r ? (y = JSON.parse(f.attr("data-catsConfig") || "[]"), k || (l || "zx" != hre ? (j.catsType = "b", j.hrefMode = t.hrefMode1, j.characterBgSrc = t.characterBgSrc1, j.characterBgSrcHover = t.characterBgSrcHover1, j.characterAlign = t.characterAlign1, j.characterSize = t.characterSize1, j.characterWeight = t.characterWeight1, j.characterFont = t.characterFont1, j.characterColor = t.characterColor1, j.characterBgColor = t.characterBgColor1, j.characterDash = t.characterDash1, j.characterHoverMode = t.characterHoverMode1, j.characterHoverSpeed = t.characterHoverSpeed1, j.characterSizeHover = t.characterSizeHover1, j.characterWeightHover = t.characterWeightHover1, j.characterFontHover = t.characterFontHover1, j.characterColorHover = t.characterColorHover1, j.characterBgColorHover = t.characterBgColorHover1, j.characterUnderLine = t.characterUnderLine1, j.characterUnderLineStyle = t.characterUnderLineStyle1, j.characterUnderLineWeight = t.characterUnderLineWeight1, j.characterUnderLineColor = t.characterUnderLineColor1, j.catsSpace = t.catsSpace1) : (!j.catsType && (j.catsType = "a"), j.hrefMode = t.hrefMode, j.characterBgSrc = t.characterBgSrc, j.characterBgSrcHover = t.characterBgSrcHover, j.characterAlign = t.characterAlign, j.characterSize = t.characterSize, j.characterWeight = t.characterWeight, j.characterFont = t.characterFont, j.characterColor = t.characterColor, j.characterBgColor = t.characterBgColor, j.characterDash = t.characterDash, j.characterHoverMode = t.characterHoverMode, j.characterHoverSpeed = t.characterHoverSpeed, j.characterSizeHover = t.characterSizeHover, j.characterWeightHover = t.characterWeightHover, j.characterFontHover = t.characterFontHover, j.characterColorHover = t.characterColorHover, j.characterBgColorHover = t.characterBgColorHover, j.characterUnderLine = t.characterUnderLine, j.characterUnderLineStyle = t.characterUnderLineStyle, j.characterUnderLineWeight = t.characterUnderLineWeight, j.characterUnderLineColor = t.characterUnderLineColor, j.catsSpace = t.catsSpace)), 0 != g && t.childConfig.push(j), n && !n.hasClass("jsfbchildc") && n.attr("data-attachConfig", JSON.stringify(j)), 0 == y.length && b.getCode("juneVisited") ? (z = require("scripts/tAjax"), A = f.attr("data-shopHref"), z.ajaxJsonT("gcc.php", {
					url: A
				}, function(a) {
					var b;
					a.ret[0].indexOf("SUCCESS") >= 0 ? (b = a.data.cats, f.attr("data-catsConfig", JSON.stringify(b)), t.catsConfig = b, i.tDialog(q[r][1].tTitle, q[r][1].tUrl, t, q[r][1].tCallback, g)) : (b = {}, f.attr("data-catsConfig", JSON.stringify(b)), t.catsConfig = b, i.tDialog(q[r][1].tTitle, q[r][1].tUrl, t, q[r][1].tCallback, g))
				})) : (t.catsConfig = y, i.tDialog(q[r][1].tTitle, q[r][1].tUrl, t, q[r][1].tCallback, g))) : i.tDialog(q[r][1].tTitle, q[r][1].tUrl, t, q[r][1].tCallback, g)
			}
		}
	}, a.mousedownEvent = function(c) {
		var d, e, g;
		return b.clickPageX = c.pageX, b.clickPageY = c.pageY, "canvas" == c.target.tagName.toLowerCase() ? (b.castWhen(c), void 0) : (("img" == c.target.tagName.toLowerCase() || "area" == c.target.tagName.toLowerCase() || "a" == c.target.tagName.toLowerCase()) && c.preventDefault(), ($(c.target).hasClass("t-jadb-title") || $(c.target).parent().hasClass("t-jadb-title") && $(c.target).hasClass("t-app-mongolia") || $(c.target).parent().hasClass("t-jadb-panel") && $(c.target).hasClass("t-app-mongolia")) && $(c.target).hasClass("t-app-mongolia") && (c.target = c.target.parentNode), e = !1, 150 > _g_offsleft && "zx" == hre && ($("#configgroup div").removeClass("selected"), $("#leftpanel,#leftconsole").hide()), c = a.checkEventForJsfb(c, c.target), c = a.checkEvent(c, c.target), 2 != c.button && (g = $(c.target), b.isQii = g.hasClass(b.selectedVal) && "zx" == hre ? !0 : !1, !c.ctrlKey && 91 != c.keycode && 93 != c.keycode || !g.hasClass(b.appClsVal) && !g.hasClass(b.appChildClsVal) ? (b.getDragSelected($("#juneDragHelper"), b.jSelectsedDom), a.act.call(c, 0)) : (d = g.attr("appID"), attachID = g.attr("attachID"), b.jSelectsedDom.each(function() {
			var a = $(this);
			a.attr("appID") != d && (e = !0)
		}), attachID && e && b.getCode("juneVisited") ? (g.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(g[0]), b.chooseLayer(d, !0, void 0)) : d && b.chooseLayer(d, !0, attachID)), b.showControl(c)), void 0)
	}, b.d.on("click", function(c) {
		clearTimeout(b.clickTimeFn), b.clickTimeFn = setTimeout(function() {
			var e, f, g, i, m, x, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S;
			if ("area" != c.target.tagName.toLowerCase() && "a" != c.target.tagName.toLowerCase() || $(c.target).hasClass("june-preview") || c.preventDefault(), $(c.target).hasClass("t-jadb-title") || $(c.target).parent().hasClass("t-jadb-title") && $(c.target).hasClass("t-app-mongolia")) return e = $(c.target), $(c.target).hasClass("t-app-mongolia") && (e = $(c.target).parent()), Math.abs(b.pageX - b.clickPageX) < 2 && Math.abs(b.pageY - b.clickPageY) < 2 && b.clickForAccordion(e), void 0;
			if ($(c.target).hasClass("t-jadb-panel") && "yes" == $(c.target).parent().attr("data-adch") || $(c.target).parent().hasClass("t-jadb-panel") && $(c.target).hasClass("t-app-mongolia") && "yes" == $(c.target).parent().parent().attr("data-adch")) return e = $(c.target), $(c.target).hasClass("t-app-mongolia") && (e = $(c.target).parent()), Math.abs(b.pageX - b.clickPageX) < 2 && Math.abs(b.pageY - b.clickPageY) < 2 && b.clickPanelForAccordion(e.parent(), e.parent().children(".t-jadb-panel").index(e) + 1, JSON.parse(e.parent().attr("data-config") || "{}")), void 0;
			if (c = a.checkEvent(c, c.target), $(c.target).hasClass("t-layer-eye") || $(c.target).hasClass("june-notc-em") || !$(c.target).parent().hasClass(b.layerClsVal) ? $(c.target).hasClass("t-layer-eye") || $(c.target).hasClass("june-notc-em") || !$(c.target).parent().attr("data-target") || (c.target = c.target.parentNode) : c.target = c.target.parentNode, b.showControl(c, "click"), 2 != c.button) {
				if ("handleHelper_hdyw" == c.target.id) return b.layoutCanvas(!0), void 0;
				if ("june" != c.target.id && "zdybox" != c.target.id && ($(c.target).hasClass("getitempic") || $(c.target).parent().hasClass("getitempic") || $(c.target).hasClass("qmpicselect") || $(c.target).parent().hasClass("qmpicselect") || "catchItemPicBox" == $(c.target).attr("id") || "catchItemPicBox" == $(c.target).parent().attr("id") || $("#catchItemPicBox").hide(), b.sgv(b.fel[60] + b.a1f[24] + b.bf5[5], (b.getCode(b.june.attr("id") + "Vi" + $("#toolside").html()) || "help").substr(0, 2)), b.tContextmenu.hide(), $("#tLayerMenu").hide(), $("#tLayerMenu_jib").hide(), f = $(c.target), g = f.attr("data-target"), i = f.attr("data-curType"), m = f.attr("data-actType"), x = f.attr("data-actionType"), B = f.attr("data-codeType"), C = f.attr("data-zoomType"), D = f.attr("data-moduleType"), E = f.attr("data-saveType"), F = f.attr("data-interestType"), G = f.attr("data-loginType"), H = f.attr("data-courseType"), I = f.attr("data-zdyName"), J = f.attr("data-zdyAppID"), K = f.attr("data-zdyAttachID"), L = f.attr("data-zdyOtherName"), M = f.attr("data-oths"), N = f.attr("data-tbsType"), O = f.attr("data-layerType"), P = f.attr("data-alignType"), !f.hasClass(i) || !b.getCode("juneVisited"))) {
					if (b.isQii && "jib" == f.attr("data-dblType") && f.attr("data-attachType")) return A.initInput(f), c.preventDefault(), c.stopPropagation(), void 0;
					if (b.click() && "zx" == hre) {
						if ("selected" == g ? (b.tempCurType = b.curType = i, y.showTopManage(i), b.updateCurType()) : "clicked" == g ? (b.actType = m, d.click(function() {
							z.create(m), y.showTopManage(m, !0)
						})) : "checked" == g ? ("drag" == i && b.updateChecked(i), ("grid" == i || "magnet" == i || "assist" == i) && (b.checkType = i, y.showTopManage(i), b.updateCurType(i))) : "layer-selected" == g || ("primary-clicked" == g ? j.primaryAct(c) : "group-clicked" == g ? j.groupAct(c) : "layerEye-clicked" == g ? j.eyeClick(c) : "action-clicked" == g ? k.buttonClick(c, x) : "menu-clicked" == g ? p.click(c) : "control-clicked" == g ? q.click(c) : "zoom-clicked" == g ? h.tZoom(C) : "align-clicked" == g ? l.toAlign(P) : "coded" == g ? "codeExport" == B ? r["getCodeExport"]() : r[B]() : "module-clicked" == g ? ("set" == D && (u.click(1), b.selectNothing(), y.showTopManage(D), b.checkType = "set", b.updateCurType("set")), s.click(D)) : "save-clicked" == g ? s.control(c, E) : "login-clicked" == g ? n.control(G) : "layer-clicked" == g ? j.chooseLayerBtn(c, O) : "layermenu-clicked" == g ? j.chooseLayerMenu(c) : "layermenu-jib-clicked" == g ? j.chooseLayerMenu_jib(c) : "interest-clicked" == g ? interest.control(c, F) : "course" == g ? u.click(H) : "zdy-clicked" == g ? v.click(c, I, J, K, L) : "tBgSet-clicked" == g ? tBgSet.click(c, N) : "otherset-clicked" == g && t.click(c, M)), f.hasClass("tItemDialog") && b.getCode("juneVisited")) if (Q = $("input[name='itemMode']:checked").val(), R = $("input[name='pptHref']").val(), S = f.attr("name"), "ptitem" != Q) if ("pptItem" != S) {
							if ("itemLink" == S) return b.tMessage("宝贝模式为品牌团时，宝贝链接将自动获取，无法单独设置"), void 0;
							o.ptitemset(f)
						} else "" == R ? b.tMessage("宝贝模式为品牌团时，请先填入一个有效的品牌团首页链接地址，然后进行宝贝选择") : o.pptitemset(f, Q);
						else o.ptitemset(f);
						f.hasClass("tChooseDialog") && b.getCode("juneVisited") && o.itemBatchPic(f), w.execQsSet()
					}
				}
			}
		}, 250)
	}), b.d.on("contextmenu", function(c) {
		var e, f, g, h, i, k, l, m, n, d = null;
		if (c.target && ("jib" == $(c.target).filter("[data-attachtype]").attr("data-dblType") && (d = $(c.target)), "jib" == $(c.target).parent().filter("[data-attachtype]").attr("data-dblType") && (d = $(c.target).parent())), c = a.checkEvent(c, c.target), $(c.target).hasClass("ui-resizable-handle") && ($(c.target).parent().hasClass(b.appClsVal) || $(c.target).parent().hasClass(b.appChildClsVal)) && (c.target = c.target.parentNode), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass(b.layerClsVal) && (c.target = c.target.parentNode), $(c.target).parent().parent().hasClass(b.layerClsVal) && (c.target = c.target.parentNode.parentNode), !$(c.target).hasClass("junehtml")) {
			if (b.tContextmenu.hide(), $("#tLayerMenu").hide(), $("#tLayerMenu_jib").hide(), e = $(c.target), f = c.pageX, g = c.pageY, h = b.w.width() - b.tContextmenu.width(), i = b.w.height() - b.tContextmenu.height(), k = e.attr("appID"), l = e.attr("attachID"), f > h && (f = h), g > i && (g = i), "jspb" == e.attr("data-dblType")) return j.showLayer(c), void 0;
			if ("jib" == e.attr("data-dblType")) return j.showLayer_jib(c, d), void 0;
			b.tContextmenu.css({
				left: f + 5,
				top: g + 5
			}), b.menuEve = c, m = l ? $(b.appChildCls + "[attachID='" + l + "']") : $(b.appParentCls + "[appID='" + k + "']"), "jspb" == m.attr("data-dblType") ? b.tContextmenu.find(" li.t-context-add-child").show() : b.tContextmenu.find("li.t-context-add-child").hide(), "juneGroup" == m.attr("data-dblType") ? (b.tContextmenu.find(" li.t-context-del-group").show(), b.tContextmenu.find(" li.t-context-edit-group").show(), b.tContextmenu.find("li.t-context-edit").hide()) : (b.tContextmenu.find("li.t-context-del-group").hide(), b.tContextmenu.find(" li.t-context-edit-group").hide(), b.tContextmenu.find("li.t-context-edit").show()), n = b.tContextmenu.children(".t-app-menu").children(".t-context-dd"), m.hasClass(b.dragNaClsVal) ? n.html("<icon>ꖇ</icon>解除锁定").addClass("t-context-drag").removeClass("t-context-disdrag") : n.html("<icon>ꖆ</icon>锁定位置").addClass("t-context-disdrag").removeClass("t-context-drag"), e.hasClass(b.appClsVal) ? (e.hasClass(b.selectedVal) || b.chooseLayer(k), b.tContextmenu.attr("data-appID", k).show(), c.preventDefault()) : e.hasClass(b.layerClsVal) && (e.hasClass(b.layerSelectedVal) || b.chooseLayer(k), b.tContextmenu.attr("data-appID", k).show(), c.preventDefault()), l && (e.hasClass(b.layerSelectedVal) || b.chooseLayer(k, !1, l), b.tContextmenu.attr("data-appID", k).attr("data-attachID", l).show(), c.preventDefault())
		}
	}), b.d.off("mousemove.globaljune").on("mousemove.globaljune", function(c) {
		var d = $.extend({}, c),
			e = c.target.tagName.toLowerCase();
		b.pageX = c.pageX, b.pageY = c.pageY, b.offsetX = c.offsetX, b.offsetY = c.offsetY, c = a.checkEvent(c, c.target), 2 != c.button && (a.act.call(c, 1), 0 == b.june.children(".june-drag-helping").length ? b.showControl(c) : b.showControl(c, "hide"), d = b.findAppEvent(d), b.compareTarget = $(d.target), ("input" != e && "textarea" != e && "select" != e && "radio" != e && "checkbox" != e && !b.compareTarget.hasClass("ban-keyboard") || b.compareTarget.hasClass("except-keyboard")) && c.preventDefault())
	}), b.d.off("mousewheel.globaljune").on("mousewheel.globaljune", function(a) {
		var n, o, p, c = a || window.event,
			j = (m(b.june.attr("data-ot") || "0"), m(b.june.attr("data-ol") || "0"), 0),
			k = 0,
			l = 0;
		"detail" in c && (l = -1 * c.detail), "wheelDelta" in c && (l = c.wheelDelta), "wheelDeltaY" in c && (l = c.wheelDeltaY), "wheelDeltaX" in c && (k = -1 * c.wheelDeltaX), "axis" in c && c.axis === c.HORIZONTAL_AXIS && (k = -1 * l, l = 0), j = 0 === l ? k : l, "deltaY" in c && (l = -1 * c.deltaY, j = l), "deltaX" in c && (k = c.deltaX, 0 === l && (j = -1 * k)), (0 !== l || 0 !== k) && (0 == b.june.children(".june-drag-helping").length ? b.showControl(a) : b.showControl(a, "hide"), $("#popupDragBox").is(":hidden") || (0 != k && b.junebox.scrollLeft(b.junebox.scrollLeft() + 30 * k), 0 != l && b.junebox.scrollTop(b.junebox.scrollTop() + 30 * l), n = $("#popupDragCloneBox"), o = m(n.attr("data-startX")), p = m(n.attr("data-startY")), o = n.offset().left - o + b.junebox.scrollLeft() - b.handleSpaceX, p = n.offset().top - p + b.junebox.scrollTop() - b.handleSpaceY, $("#popupDragInfoInputX").val(o), $("#popupDragInfoInputY").val(p), a.stopPropagation(), a.preventDefault()))
	}), b.junebox.off("mousewheel.junescroll").on("mousewheel.junescroll", function(a) {
		var c = a || window.event,
			j = (m(b.june.attr("data-ot") || "0"), m(b.june.attr("data-ol") || "0"), 0),
			k = 0,
			l = 0;
		"detail" in c && (l = -1 * c.detail), "wheelDelta" in c && (l = c.wheelDelta), "wheelDeltaY" in c && (l = c.wheelDeltaY), "wheelDeltaX" in c && (k = -1 * c.wheelDeltaX), "axis" in c && c.axis === c.HORIZONTAL_AXIS && (k = -1 * l, l = 0), j = 0 === l ? k : l, "deltaY" in c && (l = -1 * c.deltaY, j = l), "deltaX" in c && (k = c.deltaX, 0 === l && (j = -1 * k)), (0 !== l || 0 !== k) && ($("#catchItemPicBox").is(":hidden") || $("#catchItemPicBox").hide(), ($(a.target).hasClass(b.appParentCls) || $(a.target).hasClass(b.appChildCls) || $(a.target).is(b.june) || $(a.target).is(b.junebox) || $(a.target).parentsUntil(b.junebox).parent().is(b.junebox)) && (0 != k && b.junebox.scrollLeft(b.junebox.scrollLeft() + 30 * k), 0 != l && b.junebox.scrollTop(b.junebox.scrollTop() + 30 * l)), a.preventDefault())
	}), b.d.off("mouseup.globaljune").on("mouseup.globaljune", function(c) {
		var e, d = b.layerList.data("mdCache");
		c = a.checkEvent(c, c.target), clearInterval(b.checkScrollActTime), b.checkScrollActTime = null, b.getDragSelected($("#juneDragHelper"), b.jSelectsedDom), 2 != c.button && (a.act.call(c, 2), b.dragSwitch ? b.june.children().removeClass(b.dragNaClsVal1) : b.june.children().addClass(b.dragNaClsVal1), d && d.length > 0 && (e = d.attr("appID"), b.layerList.attr("data-startID", e), b.chooseLayer(e, !1, d.attr("attachID")), b.layerList.removeData("mdCache")), b.showControl(c, "click"))
	}), a.init = function() {
		b.june.off("dblclick.globaljune").on("dblclick.globaljune", a.dblclickEvent), b.junebox.off("mousedown.globaljune").on("mousedown.globaljune", a.mousedownEvent), b.d.off("mousedown.dragpanel").on("mousedown.dragpanel", function(c) {
			var d, e = c.shiftKey,
				f = c.ctrlKey;
			$(c.target).parent().hasClass("t-layer") && "span" == c.target.tagName.toLowerCase() && (c.target = c.target.parentNode), $(c.target).parent().parent().hasClass("t-layer") && "span" == c.target.tagName.toLowerCase() && (c.target = c.target.parentNode.parentNode), c = a.checkEvent(c, c.target), x.Start(c), d = $(c.target), d.hasClass("antiscroll-inner") && (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $()), layerTarget = d.attr("data-target"), "layer-selected" == layerTarget && (e || f || !d.hasClass("active") ? j.select(c) : b.layerList.data("mdCache", d))
		}), b.junebox.off("scroll.globaljune").on("scroll.globaljune", function(a) {
			var c = require("scripts/topManage");
			b.showControl(a, "click"), "fixed" != b.june.attr("data-attachment") || /px/.test(b.june.attr("data-position")) || (b.june.css("background-position", b.june.attr("data-position")), c.countFixedPos(b.june)), b.updateOpbg()
		})
	}, a.init(), a
}), define("scripts/zoom.js", function(a) {
	var b = require("scripts/D");
	return a.tZoom = function(a) {
		"out" == a ? b.zoomScale += .1 : b.zoomScale -= .1, b.june.jqScale(b.zoomScale)
	}, a
}), 
//2017-12-16 增加画布高度调整功能(2376-2462) 
define("scripts/resize.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/snap"), 
		d = require("scripts/resizeCanvas");
	return a.Start = function(a) {
		var f, g, h, c = $(a.target);
		return c.hasClass("handle-drag-canvas") ? (b.resizeCanvasEle = c, d.Start(a), void 0) : ("june" == a.target.id && b.show() || c.hasClass(b.rhClsVal) && (c.hasClass("t-pencilLine") || (f = c.parent().attr("appID"), g = c.parent().attr("attachID"), "jspb" != c.parent().attr("data-dblType") && (h = a.ctrlKey, h ? (c.parent().hasClass(b.appClsVal) && b.chooseLayer(f, !! h), c.parent().hasClass(b.appChildClsVal) && b.chooseLayer(f, !! h, g)) : (!c.parent().hasClass(b.selectedVal) && c.parent().hasClass(b.appClsVal) && b.chooseLayer(f), !c.parent().hasClass(b.selectedVal) && c.parent().hasClass(b.appChildClsVal) && b.chooseLayer(f, !1, g))), (c.parent().hasClass(b.selectedVal) || c.parent().hasClass("t-app-jib") || c.parent().hasClass("t-app-spe")) && (c.parent().hasClass(b.resizeNaClsVal) || (b.resizeEle = c.parent(), b.direction = c.attr("data-direction"), b.resizeCache.width = b.resizeEle.width(), b.resizeCache.height = b.resizeEle.height(), b.resizeCache.top = b.tParseInt(b.resizeEle.css("top")), b.resizeCache.left = b.tParseInt(b.resizeEle.css("left")), b.resizeCache.otop = b.resizeEle.offset().top, b.resizeCache.oleft = b.resizeEle.offset().left, b.resizeCache.x = a.pageX, b.resizeCache.y = a.pageY, b.snapSwitch && !b.resizeEle.hasClass("june-nonsp") && b.createSnapElements(b.resizeEle))))), void 0)
	}, a.Ing = function(a) {
		var e, f, g, h, i, j, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, I, J, k, l, m, H, K, L, M, N, O, P, Q, R, S, T;
		if (b.resizeCanvasEle) return d.Ing(a), void 0;
		if (b.resizeEle) {
			if (b.checkScrollAct(a), k = b.resizeEle, l = b.direction, m = b.resizeCache, H = [], K = b.tParseInt(b.snapOutTolerance), L = b.tParseInt(b.snapInTolerance), M = K, N = L, O = b.tParseInt(b.snapOutSpace), P = b.tParseInt(b.snapInSpace), Q = a.pageX + b.junebox.scrollLeft() - _g_offsleft, R = a.pageY + b.junebox.scrollTop() - _g_offstop, Math.abs(a.pageX - m.x) <= 1 && Math.abs(a.pageY - m.y) <= 1) return;
			switch (k.parent().hasClass(b.appClsVal) && (Q -= b.tParseInt(k.parent().css("left")), R -= b.tParseInt(k.parent().css("top"))), k.parent().parent().hasClass(b.appClsVal) && (Q -= b.tParseInt(k.parent().parent().css("left")), R -= b.tParseInt(k.parent().parent().css("top"))), l) {
			case "n":
				k.css({
					top: R
				});
				break;
			case "w":
				k.css({
					left: Q
				});
				break;
			case "ne":
				k.css({
					top: R
				});
				break;
			case "sw":
				k.css({
					left: Q
				});
				break;
			case "nw":
				k.css({
					left: Q,
					top: R
				})
			}
			for (l && l.indexOf("w") >= 0 && (Q > m.left + m.width - 15 ? k.css({
				left: m.left + m.width - 15
			}).width(15) : (k.width(m.width - Q + m.left), f = _g_offsleft - k.offset().left - b.junebox.scrollLeft(), g = k.width() - f, f >= 0 && !b.appOverSwitch && k.offset({
				left: _g_offsleft - b.junebox.scrollLeft()
			}).width(g))), l && l.indexOf("e") >= 0 && (Q - m.left <= 15 ? k.width(15) : (k.width(Q - m.left), j = k.offset().left + k.width() + b.junebox.scrollLeft() - b.june.width() - _g_offsleft, g = k.width() - j, j >= 0 && !b.appOverSwitch && k.width(g))), l && l.indexOf("n") >= 0 && (R > m.top + m.height - 15 ? k.css({
				top: m.top + m.height - 15
			}).height(15) : (k.height(m.height - R + m.top), e = _g_offstop - k.offset().top - b.junebox.scrollTop(), h = k.height() - e, e >= 0 && !b.appOverSwitch && k.offset({
				top: _g_offstop - b.junebox.scrollTop()
			}).height(h))), l && l.indexOf("s") >= 0 && (R - m.top <= 15 ? k.height(15) : (k.height(R - m.top), i = k.offset().top + k.height() + b.junebox.scrollTop() - b.june.height() - _g_offstop, h = k.height() - i, i >= 0 && !b.appOverSwitch && k.height(h))), I = k.width(), J = k.height(), F = b.snapSleft - b.junebox.scrollLeft(), G = b.snapStop - b.junebox.scrollTop(), u = k.offset().left - F, v = k.offset().top - G, w = u + I, x = v + J, y = u + Math.ceil(I / 2), z = v + Math.ceil(J / 2), C = m.otop + m.height, D = m.oleft + m.width, t = b.snapElements.length - 1; t >= 0; t--) H[t] = [], E = $(b.snapElements[t].item), n = b.snapElements[t].left, o = b.snapElements[t].right, p = b.snapElements[t].top, q = b.snapElements[t].bottom, s = n + Math.ceil(b.snapElements[t].width / 2), r = p + Math.ceil(b.snapElements[t].height / 2), B = n + b.snapElements[t].width / 2, A = p + b.snapElements[t].height / 2, b.snapCacheDom && !E.is(b.snapCacheDom) ? (M = 1, N = 1) : (M = K, N = L), l && l.indexOf("s") >= 0 && (Math.abs(p - z) <= M ? (k.height(2 * (p - m.otop)), H[t].push("hcenterx")) : Math.abs(r - z) <= M ? (k.height(2 * (A - m.otop)), H[t].push("hcenter")) : Math.abs(r - x) <= M ? (k.height(r - m.otop), H[t].push("bottomc")) : Math.abs(q - z) <= M && (k.height(2 * (q - m.otop)), H[t].push("hcentery"))), l && l.indexOf("n") >= 0 && (Math.abs(q - z) <= M ? (k.offset({
				top: q - (C - q) + G
			}).height(2 * (C - q)), H[t].push("hcentery")) : Math.abs(r - z) <= M ? (k.offset({
				top: A - (C - A) + G
			}).height(2 * (C - A)), H[t].push("hcenter")) : Math.abs(r - v) <= M ? (k.offset({
				top: r + G
			}).height(C - r), H[t].push("topc")) : Math.abs(p - z) <= M && (k.offset({
				top: p - (C - p) + G
			}).height(2 * (C - p)), H[t].push("hcenterx"))), l && l.indexOf("e") >= 0 && (Math.abs(n - y) <= M ? (k.width(2 * (n - m.oleft)), H[t].push("zcenterx")) : Math.abs(s - y) <= M ? (k.width(2 * (B - m.oleft)), H[t].push("zcenter")) : Math.abs(s - w) <= M ? (k.width(s - m.oleft), H[t].push("rightc")) : Math.abs(o - y) <= M && (k.width(2 * (o - m.oleft)), H[t].push("zcentery"))), l && l.indexOf("w") >= 0 && (Math.abs(o - y) <= M ? (k.offset({
				left: o - (D - o) + F
			}).width(2 * (D - o)), H[t].push("zcentery")) : Math.abs(s - y) <= M ? (k.offset({
				left: B - (D - B) + F
			}).width(2 * (D - B)), H[t].push("zcenter")) : Math.abs(s - u) <= M ? (k.offset({
				left: s + F
			}).width(D - s), H[t].push("leftc")) : Math.abs(n - y) <= M && (k.offset({
				left: n - (D - n) + F
			}).width(2 * (D - n)), H[t].push("zcenterx"))), "inner" !== b.snapElements[t].snapMode && (Math.abs(p - x) <= M && m.otop < p - O && l && l.indexOf("s") >= 0 && (k.height(p - m.otop - O), H[t].push("topx")), Math.abs(q - v) <= M && m.otop + m.height > q + O && l && l.indexOf("n") >= 0 && (k.offset({
				top: q + O + G
			}).height(m.height - q - O + m.otop), H[t].push("bottomx")), Math.abs(n - w) <= M && m.oleft < n - O && l && l.indexOf("e") >= 0 && (k.width(n - m.oleft - O), H[t].push("leftx")), Math.abs(o - u) <= M && m.oleft + m.width > o + O && l && l.indexOf("w") >= 0 && (k.offset({
				left: o + O + F
			}).width(m.width - o - O + m.oleft), H[t].push("rightx"))), "outer" !== b.snapElements[t].snapMode && (Math.abs(q - x) <= N && m.otop < q - P && l && l.indexOf("s") >= 0 && (k.height(q - m.otop - P), H[t].push("bottom")), Math.abs(p - v) <= N && m.otop + m.height > p + P && l && l.indexOf("n") >= 0 && (k.offset({
				top: p + P + G
			}).height(m.height - p - P + m.otop), H[t].push("top")), Math.abs(o - w) <= N && m.oleft < o - P && l && l.indexOf("e") >= 0 && (k.width(o - m.oleft - P), H[t].push("right")), Math.abs(n - u) <= N && m.oleft + m.width > n + P && l && l.indexOf("w") >= 0 && (k.offset({
				left: n + P + F
			}).width(m.width - n - P + m.oleft), H[t].push("left"))), H[t].length > 0 && (b.snapCacheDom = E);
			S = "zx", !! l && (l.indexOf("e") >= 0 || l.indexOf("w") >= 0) && (S = "hx"), c.snapLine(H, b.snapElements, k, S), b.tProcess(k, "ing"), "jbob" == k.attr("data-dblType") && b.toFilter(k), "jcb" == k.attr("data-dblType") && b.show() && "multi" != k.attr("data-cast") && k.css("line-height", k.height() + "px"), "jsb" == k.attr("data-dblType") && k.children(b.appChildCls + "[data-attachtype='jsbInput']").css("line-height", k.height() + "px"), "jwfb" == k.attr("data-dblType") && ("yes" != k.children(b.appOtherCls).attr("data-s") ? (k.children(b.appOtherCls).children("div:eq(1)").height(k.height()), k.children(b.appOtherCls).children("div:eq(2)").css("left", k.width()).height(k.height())) : (k.children(b.appOtherCls).children("div:eq(1)").width(k.width()), k.children(b.appOtherCls).children("div:eq(2)").css("top", k.height()).width(k.width()))), "jtsb" == k.attr("data-dblType") && (T = k.children(b.appOtherCls).attr("style"), k.html('<div class="t-app-other" style="position:absolute;">' + k.children(b.appOtherCls).html() + "</div>").tResize(), k.children(b.appOtherCls).attr("style", T), k.children(b.appOtherCls).children("div").css({
				left: 0,
				top: 0
			})), "jfsb" == k.attr("data-dblType") || "jfyb" == k.attr("data-dblType") || "jwfb" == k.attr("data-dblType") || "jab" == k.attr("data-dblType")
		}
	}, a.End = function(a) {
		var j, l, s, t, m, n, o, p, q, r, u;
		if (b.resizeCanvasEle) return d.End(a), b.resizeCanvasEle = null, void 0;
		if (b.resizeEle && (j = b.resizeEle, b.direction, l = b.resizeCache, b.tProcess(j), b.show() && ("jbob" == j.attr("data-dblType") && b.toFilter(j), "jcb" == j.attr("data-dblType") && "multi" != j.attr("data-cast") && (j.css("line-height", j.height() + "px"), s = JSON.parse(j.attr("data-config") || "{}"), s.characterLineHeight = j.height(), s.characterLineHeightHover = j.height(), j.attr("data-config", JSON.stringify(s))), "jsb" == j.attr("data-dblType") && j.children(b.appChildCls + "[data-attachtype='jsbInput']").css("line-height", j.height() + "px")), "jwfb" == j.attr("data-dblType") && ("yes" != j.children(b.appOtherCls).attr("data-s") ? (j.children(b.appOtherCls).children("div:eq(1)").height(j.height()), j.children(b.appOtherCls).children("div:eq(2)").css("left", j.width()).height(j.height())) : (j.children(b.appOtherCls).children("div:eq(1)").width(j.width()), j.children(b.appOtherCls).children("div:eq(2)").css("top", j.height()).width(j.width()))), "jtsb" == j.attr("data-dblType") && b.appConfig["jtsb"][1].tSubmit(JSON.parse(j.attr("data-config") || "{}"), j), "jfsb" == j.attr("data-dblType") || "jfyb" == j.attr("data-dblType") || "jwfb" == j.attr("data-dblType") || "jab" == j.attr("data-dblType"), m = require("scripts/action"), n = j.attr("data-attachType"), o = j.width(), p = j.height(), q = b.tParseInt(j.css("top")), r = b.tParseInt(j.css("left")), o != l.width || p != l.height || q != l.top || r != l.left)) if (n) {
			if (s = JSON.parse(j.parent().attr("data-config") || "{}"), t = j.attr("attachID"), s.childConfig) {
				for (u = 0; u < s.childConfig.length; u++) s.childConfig[u].attachID == t && (s.childConfig[u].autoSize && (s.childConfig[u].autoSize = "no"), s.childConfig[u].autoSize1 && (s.childConfig[u].autoSize1 = "no"));
				j.parent().attr("data-config", JSON.stringify(s))
			}
			"jfsb" == j.attr("data-dblType") && (s.sWidth = "", s.sHeight = "", j.parent().attr("data-config", JSON.stringify(s))), m.create("resize", j.parent(), j)
		} else s = JSON.parse(j.attr("data-config")), s.autoSize && (s.autoSize = "no"), j.attr("data-config", JSON.stringify(s)), m.create("resize", j);
		b.resizeEle = null, b.snapSwitch && (b.snapElements = [])
	}, a
}), define("scripts/snap.js", function(a) {
	var b = require("scripts/D"),
		c = [],
		d = function(a, b) {
			return a - b
		};
	return a.snapLine = function(a, e, f, g) {
		var h, m, n, o, p, i, j, k, l, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W;
		if (b.assistSwitch1 && "closed" != b.snapLineStatus) {
			if (!a) return $(".snap-line").hide(), void 0;
			for (b.snapCacheKey = {
				tcb: null,
				lcr: null,
				_tcb: $(),
				_lcr: $()
			}, h = 0; h < e.length; h++) {
				for (i = $(e[h].item), j = a[h], k = ["top", "bottom", "left", "right", "hcenter", "zcenter"], l = {
					top: "top",
					bottom: "bottom",
					left: "left",
					right: "right",
					topx: "bottom",
					bottomx: "top",
					leftx: "right",
					rightx: "left",
					topc: "hcenter",
					bottomc: "hcenter",
					leftc: "zcenter",
					rightc: "zcenter",
					hcenter: "hcenter",
					zcenter: "zcenter",
					hcenterx: "hcenter",
					zcenterx: "zcenter",
					hcentery: "hcenter",
					zcentery: "zcenter"
				}, q = f.offset(), r = q.left, s = q.top, t = f.width(), u = f.height(), v = r + t, w = s + u, x = r + Math.ceil(t / 2), y = s + Math.ceil(u / 2), z = i.offset(), A = z.left, B = z.top, C = i.width(), D = i.height(), E = A + C, F = B + D, G = A + Math.ceil(C / 2), H = B + Math.ceil(D / 2), g && ("zx" == g ? j.push("left", "rightx", "leftc", "right", "leftx", "rightc", "zcenter", "zcenterx", "zcentery") : j.push("top", "bottomx", "topc", "bottom", "topx", "bottomc", "hcenter", "hcenterx", "hcentery")), c[h] || (c[h] = {}), I = b.assistColor, J = "", K = "", L = 0; 6 > L; L++) c[h][k[L]] ? c[h][k[L]].hide() : (0 == h ? (I = "#14CC70", K = " snap-center-line", "hcenter" == k[L] ? J = '<div class="h-content">垂直中心</div>' : "zcenter" == k[L] && (J = '<div class="z-content">水平中心</div>')) : h > 0 && 5 > h ? (I = "#14CC70", "zcenter" == k[L] && (1 == h || 2 == h ? J = '<div class="z-content">950边缘</div>' : (3 == h || 4 == h) && (J = '<div class="z-content">990边缘</div>'))) : J = '<div class="arrow-a">ꑠ</div><div class="arrow-b">ꑡ</div><div class="arrow-space"><div class="as-val" style="background:' + I + ';"></div></div>', c[h][k[L]] = $('<div id="snapLine' + h + "_" + k[L] + '" class="snap-line' + K + '" style="background:' + I + ";color:" + I + ';">' + J + "</div>").appendTo($("#junebox")).hide());
				for (L = 0; L < j.length; L++) {
					if (m = 0, n = 0, p = 0, o = 0, W = c[h][l[j[L]]], M = [A, E, r, v].sort(d), N = [B, F, s, w].sort(d), R = M[0], S = M[3], T = N[0], U = N[3], "zcenter" == j[L] ? O = [H, y, y].sort(d) : "zcenterx" == j[L] || "zcentery" == j[L] ? O = [B, F, y].sort(d) : "hcenter" == j[L] ? O = [G, x, x].sort(d) : ("hcenterx" == j[L] || "hcentery" == j[L]) && (O = [A, E, x].sort(d)), O && O.length > 0 && (min3 = O[0], max3 = O[2]), ("topc" == j[L] || "bottomc" == j[L]) && (P = [G, r, v].sort(d), R = P[0], S = P[2]), ("leftc" == j[L] || "rightc" == j[L]) && (Q = [H, s, w].sort(d), T = Q[0], U = Q[2]), "top" == j[L] || "bottomx" == j[L] || "topc" == j[L]) {
						if ("top" == j[L] && s != B) continue;
						if ("bottomx" == j[L] && s != F) continue;
						if ("topc" == j[L] && s != H) continue;
						m = S - R, p = R, n = 1, o = s
					} else if ("bottom" == j[L] || "topx" == j[L] || "bottomc" == j[L]) {
						if ("bottom" == j[L] && w != F) continue;
						if ("topx" == j[L] && w != B) continue;
						if ("bottomc" == j[L] && w != H) continue;
						m = S - R, p = R, n = 1, o = w - 1
					} else if ("left" == j[L] || "rightx" == j[L] || "leftc" == j[L]) {
						if ("left" == j[L] && r != A) continue;
						if ("rightx" == j[L] && r != E) continue;
						if ("leftc" == j[L] && r != G) continue;
						n = U - T, o = T, m = 1, p = r
					} else if ("right" == j[L] || "leftx" == j[L] || "rightc" == j[L]) {
						if ("right" == j[L] && v != E) continue;
						if ("leftx" == j[L] && v != A) continue;
						if ("rightc" == j[L] && v != G) continue;
						n = U - T, o = T, m = 1, p = v - 1
					} else if ("hcenter" == j[L] || "hcenterx" == j[L] || "hcentery" == j[L]) {
						if ("hcenter" == j[L] && y != H) continue;
						if ("hcenterx" == j[L] && y != B) continue;
						if ("hcentery" == j[L] && y != F) continue;
						m = max3 - min3, p = min3, 0 == m && (p -= 4, m = 9), 0 > m && (p += m, m = 0 - m), n = 1, o = y
					} else if ("zcenter" == j[L] || "zcenterx" == j[L] || "zcentery" == j[L]) {
						if ("zcenter" == j[L] && x != G) continue;
						if ("zcenterx" == j[L] && x != A) continue;
						if ("zcentery" == j[L] && x != E) continue;
						n = max3 - min3, o = min3, 0 == n && (o -= 4, n = 9), 0 > n && (o += n, n = 0 - n), m = 1, p = x
					}
					"top" == j[L] || "bottomx" == j[L] || "topc" == j[L] || "bottom" == j[L] || "topx" == j[L] || "bottomc" == j[L] || "hcenter" == j[L] || "hcenterx" == j[L] || "hcentery" == j[L] ? (b.snapCacheKey["tcb"] ? s != b.snapCacheKey["tcb"] && (b.snapCacheKey["_tcb"].hide(), b.snapCacheKey["tcb"] = s) : b.snapCacheKey["tcb"] = s, b.snapCacheKey["_tcb"] = b.snapCacheKey["_tcb"].addGroup(W), 5 > h && (p = b.june.offset().left, m = b.june.width(), h > 0 && (m = 0))) : (b.snapCacheKey["lcr"] ? r != b.snapCacheKey["lcr"] && (b.snapCacheKey["_lcr"].hide(), b.snapCacheKey["lcr"] = r) : b.snapCacheKey["lcr"] = r, b.snapCacheKey["_lcr"] = b.snapCacheKey["_lcr"].addGroup(W), 5 > h && (o = b.june.offset().top, n = b.june.height())), W.show().width(m).height(n).offset({
						top: o,
						left: p
					}), 5 > h ? (("hcenter" == j[L] || "topc" == j[L] || "bottomc" == j[L]) && W.children().offset({
						left: b.junebox.offset().left - 17,
						top: o - 30
					}), ("zcenter" == j[L] || "leftc" == j[L] || "rightc" == j[L]) && W.children().offset({
						left: p - 28,
						top: b.junebox.offset().top - 15
					})) : (W.children().hide(), "top" == j[L] || "bottomx" == j[L] || "topc" == j[L] || "bottom" == j[L] || "topx" == j[L] || "bottomc" == j[L] || "hcenter" == j[L] || "hcenterx" == j[L] || "hcentery" == j[L] ? (r > E + 1 && (W.children(".arrow-a").removeClass("z").addClass("h").show().offset({
						left: E - 4,
						top: o - 5
					}), W.children(".arrow-b").removeClass("z").addClass("h").show().offset({
						left: r - 9,
						top: o - 5
					}), W.children(".arrow-space").show().offset({
						left: E + (r - E) / 2,
						top: o - 17
					}), W.children(".arrow-space").children(".as-val").html(r - E + "px")), A > v + 1 && (W.children(".arrow-a").removeClass("z").addClass("h").show().offset({
						left: v - 4,
						top: o - 5
					}), W.children(".arrow-b").removeClass("z").addClass("h").show().offset({
						left: A - 9,
						top: o - 5
					}), W.children(".arrow-space").show().offset({
						left: v + (A - v) / 2,
						top: o - 17
					}), W.children(".arrow-space").children(".as-val").html(A - v + "px")), $.inArray("top", j) >= 0 && $.inArray("bottom", j) >= 0 && $.inArray("hcenter", j) >= 0 && ("bottom" == j[L] || "hcenter" == j[L]) && 50 > u && W.children().hide()) : (s > F + 1 && (W.children(".arrow-a").removeClass("h").addClass("z").show().offset({
						left: p - 5,
						top: F - 4
					}), W.children(".arrow-b").removeClass("h").addClass("z").show().offset({
						left: p - 5,
						top: s - 9
					}), W.children(".arrow-space").show().offset({
						top: F + (s - F) / 2 - 8,
						left: p + 17
					}), W.children(".arrow-space").children(".as-val").html(s - F + "px")), B > w + 1 && (W.children(".arrow-a").removeClass("h").addClass("z").show().offset({
						left: p - 5,
						top: w - 4
					}), W.children(".arrow-b").removeClass("h").addClass("z").show().offset({
						left: p - 5,
						top: B - 9
					}), W.children(".arrow-space").show().offset({
						top: w + (B - w) / 2 - 8,
						left: p + 17
					}), W.children(".arrow-space").children(".as-val").html(B - w + "px")), $.inArray("left", j) >= 0 && $.inArray("right", j) >= 0 && $.inArray("zcenter", j) >= 0 && ("left" == j[L] || "zcenter" == j[L]) && 90 > t && W.children().hide()))
				}
			}
		}
	}, a.snapCompareLine = function(a, c, d) {
		var e, h, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, f, g, i, j, k, l, n, o, p, q, r, s, t, u, v;
		(b.assistSwitch || d) && ("e6db" == $[b.g[m(24 * Math.random())]](b.appConfig["jspb"][2]["pSrc"]) && 0 == $(".snap-compare-line").length && (e = b.assistColor, $('<div id="snapCompareLineTop" class="snap-compare-line" style="background:' + e + ";color:" + e + ';width:1px;">' + '<div class="arrow-a z">ꑠ</div><div class="arrow-b z">ꑡ</div><div class="arrow-space" style="margin-left:17px"><div class="as-val" style="background:' + e + ';"></div></div>' + "</div>" + '<div id="snapCompareLineyLeft" class="snap-compare-line" style="background:' + e + ";color:" + e + ';height:1px;">' + '<div class="arrow-a h">ꑠ</div><div class="arrow-b h">ꑡ</div><div class="arrow-space" style="margin-top:-17px"><div class="as-val" style="background:' + e + ';"></div></div>' + "</div>" + '<div id="snapCompareLineBottom" class="snap-compare-line" style="background:' + e + ";color:" + e + ';width:1px;">' + '<div class="arrow-a z">ꑠ</div><div class="arrow-b z">ꑡ</div><div class="arrow-space" style="margin-left:17px"><div class="as-val" style="background:' + e + ';"></div></div>' + "</div>" + '<div id="snapCompareLineRight" class="snap-compare-line" style="background:' + e + ";color:" + e + ';height:1px;">' + '<div class="arrow-a h">ꑠ</div><div class="arrow-b h">ꑡ</div><div class="arrow-space" style="margin-top:-17px"><div class="as-val" style="background:' + e + ';"></div></div>' + "</div>" + '<div id="snapCompareBox1top" class="snap-compare-box l-top"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-h"></div></div></div>' + '<div id="snapCompareBox1left" class="snap-compare-box l-left"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-z"></div></div></div>' + '<div id="snapCompareBox1right" class="snap-compare-box l-right"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-z"></div></div></div>' + '<div id="snapCompareBox1bottom" class="snap-compare-box l-bottom"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-h"></div></div></div>' + '<div id="snapCompareBox2top" class="snap-compare-box l-top"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-h"></div></div></div>' + '<div id="snapCompareBox2left" class="snap-compare-box l-left"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-z"></div></div></div>' + '<div id="snapCompareBox2right" class="snap-compare-box l-right"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-z"></div></div></div>' + '<div id="snapCompareBox2bottom" class="snap-compare-box l-bottom"><div class="sbody" style="background-color:' + e + ';"><div class="l-dashed l-h"></div></div></div>').appendTo($("#junebox")).hide()), f = b.jSelectsedDom, g = !0, i = $("#snapCompareLineTop"), j = $("#snapCompareLineyLeft"), k = $("#snapCompareLineBottom"), l = $("#snapCompareLineRight"), n = $("#snapCompareBox1top"), o = $("#snapCompareBox1left"), p = $("#snapCompareBox1right"), q = $("#snapCompareBox1bottom"), r = $("#snapCompareBox2top"), s = $("#snapCompareBox2left"), t = $("#snapCompareBox2right"), u = $("#snapCompareBox2bottom"), v = !1, i.hide(), j.hide(), k.hide(), l.hide(), $(".snap-compare-box").children(".sbody").children(".l-dashed").hide(), a || (g = !1), c ? (f.length > 1 && (h || (h = $("#juneCtrlHelper").offset({
			left: 0,
			top: 0
		}).width(0).height(0).hide()), 0 == h.length ? h = $('<div id="juneCtrlHelper" style="display:block;z-index:-1;"></div>').appendTo(b.june) : (h.parent().is(b.june) || h.appendTo(b.june), h = $("#juneCtrlHelper")), h.is(":hidden") && b.countCtrlHelper(h, f), f = $("#juneCtrlHelper")), 0 == f.length && (g = !1), g && (w = f.offset(), x = w.top, y = w.left, z = f.width(), A = f.height(), B = y + z, C = x + A, D = a.offset(), E = D.top, F = D.left, G = a.width(), H = a.height(), I = F + G, J = E + H, n.show().width(z).offset({
			left: y,
			top: x
		}), q.show().width(z).offset({
			left: y,
			top: C
		}), o.show().height(A).offset({
			left: y,
			top: x
		}), p.show().height(A).offset({
			left: B,
			top: x
		}), r.show().width(G).offset({
			left: F,
			top: E
		}), u.show().width(G).offset({
			left: F,
			top: J
		}), s.show().height(H).offset({
			left: F,
			top: E
		}), t.show().height(H).offset({
			left: I,
			top: E
		}), n.children(".sbody").width(z - 1), o.children(".sbody").height(A - 1), r.children(".sbody").width(G - 1), s.children(".sbody").height(H - 1), v = !(y > I - 1 || F > B - 1 || x > J - 1 || E > C - 1), v ? (L = y, M = F, L > F && (L = F, M = y), L != M && (j.show().width(M - L).offset({
			left: L,
			top: x + A / 2
		}), j.children(".arrow-a").offset({
			left: L - 3
		}), j.children(".arrow-b").offset({
			left: M - 9
		}), j.children(".arrow-space").offset({
			left: L + (M - L) / 2
		}), j.children(".arrow-space").children(".as-val").html(M - L + "px")), L = B, M = I, L > I && (L = I, M = B), L != M && (l.show().width(M - L).offset({
			left: L,
			top: x + A / 2
		}), l.children(".arrow-a").offset({
			left: L - 4
		}), l.children(".arrow-b").offset({
			left: M - 10
		}), l.children(".arrow-space").offset({
			left: L + (M - L) / 2
		}), l.children(".arrow-space").children(".as-val").html(M - L + "px")), L = x, M = E, L > E && (L = E, M = x), L != M && (i.show().height(M - L).offset({
			top: L,
			left: y + z / 2
		}), i.children(".arrow-a").offset({
			top: L - 3
		}), i.children(".arrow-b").offset({
			top: M - 9
		}), i.children(".arrow-space").offset({
			top: L - 8 + (M - L) / 2
		}), i.children(".arrow-space").children(".as-val").html(M - L + "px")), L = C, M = J, L > J && (L = J, M = C), L != M && (k.show().height(M - L).offset({
			top: L,
			left: y + z / 2
		}), k.children(".arrow-a").offset({
			top: L - 4
		}), k.children(".arrow-b").offset({
			top: M - 10
		}), k.children(".arrow-space").offset({
			top: L - 8 + (M - L) / 2
		}), k.children(".arrow-space").children(".as-val").html(M - L + "px"))) : (y > I ? (j.show().width(y - I).offset({
			left: I,
			top: x + A / 2
		}), j.children(".arrow-a").offset({
			left: I - 4
		}), j.children(".arrow-b").offset({
			left: y - 9
		}), j.children(".arrow-space").offset({
			left: I + (y - I) / 2
		}), j.children(".arrow-space").children(".as-val").html(y - I + "px"), O = t) : F > B ? (l.show().width(F - B).offset({
			left: B,
			top: x + A / 2
		}), l.children(".arrow-a").offset({
			left: B - 4
		}), l.children(".arrow-b").offset({
			left: F - 9
		}), l.children(".arrow-space").offset({
			left: B + (F - B) / 2
		}), l.children(".arrow-space").children(".as-val").html(F - B + "px"), O = s) : N = y - F > I - B ? t : s, x > J ? (i.show().height(x - J).offset({
			top: J,
			left: y + z / 2
		}), i.children(".arrow-a").offset({
			top: J - 3
		}), i.children(".arrow-b").offset({
			top: x - 8
		}), i.children(".arrow-space").offset({
			top: J - 8 + (x - J) / 2
		}), i.children(".arrow-space").children(".as-val").html(x - J + "px"), N = u) : E > C ? (k.show().height(E - C).offset({
			top: C,
			left: y + z / 2
		}), k.children(".arrow-a").offset({
			top: C - 4
		}), k.children(".arrow-b").offset({
			top: E - 9
		}), k.children(".arrow-space").offset({
			top: C - 8 + (E - C) / 2
		}), k.children(".arrow-space").children(".as-val").html(E - C + "px"), N = r) : N = x - E > J - C ? u : r, N && (z > G ? (K = [F - y, B - I], K[0] > K[1] ? N.children(".sbody").children(".l-dashed").show().width(K[0]).offset({
			left: y
		}) : N.children(".sbody").children(".l-dashed").show().width(K[1]).offset({
			left: I
		})) : B > I ? N.children(".sbody").children(".l-dashed").show().width(B - I).offset({
			left: I
		}) : F > y && N.children(".sbody").children(".l-dashed").show().width(F - y).offset({
			left: y
		})), O && (A > H ? (K = [E - x, C - J], K[0] > K[1] ? O.children(".sbody").children(".l-dashed").show().height(K[0]).offset({
			top: x
		}) : O.children(".sbody").children(".l-dashed").show().height(K[1]).offset({
			top: J
		})) : C > J ? O.children(".sbody").children(".l-dashed").show().height(C - J).offset({
			top: J
		}) : E > x && O.children(".sbody").children(".l-dashed").show().height(E - x).offset({
			top: x
		}))))) : (f.length > 1 && !$("#juneCtrlHelper").is(":hidden") && $("#juneCtrlHelper").width(0).hide(), g = !1), g || (n.hide(), q.hide(), o.hide(), p.hide(), r.hide(), u.hide(), s.hide(), t.hide()))
	}, a.snapStart = function() {
		return b.snapEle && b.snapEle.hasClass("june-nonsp") ? (b.snapElements = [], b.snapEle = null, void 0) : (b.snapEle && b.snapEle.length > 0 && b.createSnapElements(b.snapEle), void 0)
	}, a.snapIng = function() {
		if (b.snapEle && b.snapEle.length > 0) {
			var d, e, f, g, h, i, j, k, l = [],
				m = b.tParseInt(b.snapOutTolerance),
				n = b.tParseInt(b.snapInTolerance),
				o = m,
				p = n,
				q = b.tParseInt(b.snapOutSpace),
				r = b.tParseInt(b.snapInSpace),
				s = b.snapEle.outerWidth(),
				t = b.snapEle.outerHeight(),
				u = b.snapSleft - b.junebox.scrollLeft(),
				v = b.snapStop - b.junebox.scrollTop(),
				w = b.snapEle.offset().left,
				x = w + s,
				y = w + Math.ceil(s / 2),
				z = b.snapEle.offset().top,
				A = z + t,
				B = z + Math.ceil(t / 2);
			for (j = b.snapElements.length - 1; j >= 0; j--) k = $(b.snapElements[j].item), l[j] = [], d = b.snapElements[j].left + u, e = b.snapElements[j].right + u, f = b.snapElements[j].top + v, g = b.snapElements[j].bottom + v, i = d + Math.ceil(b.snapElements[j].width / 2), h = f + Math.ceil(b.snapElements[j].height / 2), Math.abs(f - B) <= o && (b.snapEle.offset({
				top: f - Math.ceil(t / 2)
			}), l[j].push("hcenterx")), Math.abs(g - B) <= o && (b.snapEle.offset({
				top: g - Math.ceil(t / 2)
			}), l[j].push("hcentery")), Math.abs(d - y) <= o && (b.snapEle.offset({
				left: d - Math.ceil(s / 2)
			}), l[j].push("zcenterx")), Math.abs(e - y) <= o && (b.snapEle.offset({
				left: e - Math.ceil(s / 2)
			}), l[j].push("zcentery")), Math.abs(h - B) <= o && (b.snapEle.offset({
				top: h - Math.ceil(t / 2)
			}), l[j].push("hcenter")), Math.abs(i - y) <= o && (b.snapEle.offset({
				left: i - Math.ceil(s / 2)
			}), l[j].push("zcenter")), Math.abs(h - z) <= o && (b.snapEle.offset({
				top: h
			}), l[j].push("topc")), Math.abs(h - A) <= o && (b.snapEle.offset({
				top: h - t
			}), l[j].push("bottomc")), Math.abs(i - w) <= o && (b.snapEle.offset({
				left: i
			}), l[j].push("leftc")), Math.abs(i - x) <= o && (b.snapEle.offset({
				left: i - s
			}), l[j].push("rightc")), "inner" !== b.snapElements[j].snapMode && (Math.abs(f - A) <= o && (b.snapEle.offset({
				top: f - t - q
			}), l[j].push("topx")), Math.abs(g - z) <= o && (b.snapEle.offset({
				top: g + q
			}), l[j].push("bottomx")), Math.abs(d - x) <= o && (b.snapEle.offset({
				left: d - s - q
			}), l[j].push("leftx")), Math.abs(e - w) <= o && (b.snapEle.offset({
				left: e + q
			}), l[j].push("rightx"))), "outer" !== b.snapElements[j].snapMode && (Math.abs(f - z) <= p && (b.snapEle.offset({
				top: f + r
			}), l[j].push("top")), Math.abs(g - A) <= p - 1 && (b.snapEle.offset({
				top: g - t - r
			}), l[j].push("bottom")), Math.abs(d - w) <= p && (b.snapEle.offset({
				left: d + r
			}), l[j].push("left")), Math.abs(e - x) <= p - 1 && (b.snapEle.offset({
				left: e - s - r
			}), l[j].push("right")));
			a.snapLine(l, b.snapElements, b.snapEle)
		}
	}, a.snapEnd = function() {
		b.snapElements = [], b.snapEle = null
	}, a
}), define("scripts/drag.js", function(a) {
	var d, b = require("scripts/D");
	return require("scripts/action"), a.Start = function(a) {
		var c, f, g, h, e = !1;
		"june" != a.target.id && "zdybox" != a.target.id && (c = $(a.target), c.hasClass(b.rhClsVal) || b.pencilEdit || (c.hasClass(b.appClsVal) || c.hasClass(b.appChildClsVal)) && (b.dragStartX && b.dragStartY || (b.dragStartX = a.pageX, b.dragStartY = a.pageY, f = c.attr("appID"), g = c.attr("attachID"), h = b.jSelectsedDom, h.each(function() {
			var a = $(this);
			a.attr("appID") != f && (e = !0)
		}), 0 == h.length && (e = !0), ("jspb" == c.attr("data-dblType") && g && c.parent().hasClass(b.selectedVal) || "jspb" == c.attr("data-dblType") && g && e) && (c = c.parent()), (e || "jspb" != c.attr("data-dblType")) && (!c.hasClass(b.selectedVal) && c.hasClass(b.appParentClsVal) && (b.chooseLayer(f), b.scrollLayer(f)), !c.hasClass(b.selectedVal) && c.hasClass(b.appChildClsVal) && (b.chooseLayer(f, !1, g), b.scrollLayer(f, g))), c.hasClass(b.dragNaClsVal) || b.dragSwitch && (d = $("#juneDragHelper"), d.offset({
			left: 0,
			top: 0
		}).width(0).height(0).hide(), 0 == d.length ? (d = $('<div id="juneDragHelper"><div style="position:absolute;width:9999px;height:9999px;"></div></div>').appendTo(b.june), d.offset({
			left: 0,
			top: 0
		}).width(0).height(0).hide()) : (0 == b.june.find("#juneDragHelper").length && d.appendTo(b.june), d = $("#juneDragHelper")), c.hasClass("june-nonsp") ? d.addClass("june-nonsp") : d.removeClass("june-nonsp"), b.dragEle = c, b.snapSwitch && (b.snapEle = d)))))
	}, a.Ing = function(a) {
		var c, e, f, g, h;
		b.dragSwitch && ($(a.target).hasClass(b.rhClsVal) || (c = a.shiftKey, d || (d = $("#juneDragHelper"), b.snapEle = d, 0 == d.length && (d = $('<div id="juneDragHelper"><div style="position:absolute;width:9999px;height:9999px;"></div></div>').appendTo(b.june), d.offset({
			left: 0,
			top: 0
		}).width(0).height(0).hide())), b.dragEle && (b.checkScrollAct(a), e = a.pageX, f = a.pageY, g = Math.abs(e - b.dragStartX), h = Math.abs(f - b.dragStartY), c ? b.Dragdirection || (0 != g && g >= h ? b.Dragdirection = "x" : 0 != h && h > g && (b.Dragdirection = "y")) : b.Dragdirection = null, b.dragStart || (b.countDragHelper(b.jSelectsedDom), b.jSelectsedDom.each(function() {
			$(this).hasClass("t-pencilLine") && (b.snapEle = null)
		}), b.dragX[0] = b.dragStartX - d.offset().left, b.dragY[0] = b.dragStartY - d.offset().top, b.dragStart = !0), d.addClass("june-drag-helping").each(function(a) {
			if (!$(this).hasClass(b.dragNaClsVal)) {
				var d = e - b.dragX[a],
					g = f - b.dragY[a];
				b.appOverSwitch || (b.dragEle.attr("attachID") && "jspb" != b.dragEle.attr("data-dblType") || !b.dragEle.attr("attachID")) && (d + $(this).width() + b.junebox.scrollLeft() > b.june.width() + _g_offsleft && (d = b.june.width() + _g_offsleft - $(this).width() - b.junebox.scrollLeft()), g + $(this).height() + b.junebox.scrollTop() > b.june.height() + _g_offstop && (g = b.june.height() + _g_offstop - $(this).height() - b.junebox.scrollTop()), d < _g_offsleft - b.junebox.scrollLeft() && (d = _g_offsleft - b.junebox.scrollLeft()), g < _g_offstop - b.junebox.scrollTop() && (g = _g_offstop - b.junebox.scrollTop())), "x" == b.Dragdirection ? $(this).offset({
					left: d
				}) : "y" == b.Dragdirection ? $(this).offset({
					top: g
				}) : $(this).offset({
					left: d,
					top: g
				}), b.toFilter(b.dragEle)
			}
		}))))
	}, a.End = function() {
		b.dragEle && b.tProcess(b.dragEle), b.Dragdirection = null, b.dragX = [], b.dragY = []
	}, a
}), define("scripts/select.js", function(a) {
	var b = require("scripts/D");
	return a.Start = function(a) {
		("june" == a.target.id || "zdybox" == a.target.id || "junebox" == a.target.id || $(a.target).hasClass("antiscroll-inner")) && (a.ctrlKey ? b.jSelectsedDom.addClass("t-temp-selected") : (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected")), b.selectHelper = $('<div class="t-select-helper"></div>'), b["i"]($.proxy(function() {
			b.startX = a.pageX + b.junebox.scrollLeft(), b.startY = a.pageY + b.junebox.scrollTop(), b.selectHelper.appendTo(b.junebox).offset({
				left: b.startX,
				top: b.startY
			}).width(0).height(0)
		}, this), $.proxy(function() {
			b.startX = 0, b.startY = 0
		}, this)))
	}, a.Ing = function(a) {
		if (b.selectHelper) {
			b.checkScrollAct(a);
			var c, d = b.startX,
				e = b.startY,
				f = a.pageX + b.junebox.scrollLeft(),
				g = a.pageY + b.junebox.scrollTop(),
				h = b.june.width() + _g_offsleft,
				i = b.june.height() + _g_offstop;
			d > f && (c = f, f = d, d = c), e > g && (c = g, g = e, e = c), _g_offsleft > d && (d = _g_offsleft), _g_offstop > e && (e = _g_offstop), f > h + 300 && (f = h + 300), g > i + 300 && (g = i + 300), b.s.toExport($.proxy(function() {
				b.selectHelper.offset({
					left: d - b.junebox.scrollLeft(),
					top: e - b.junebox.scrollTop()
				}).width(f - d).height(g - e)
			}, this)), b.june.find("div.j-fnd:not(" + b.rhCls + "):not(" + b.appOtherCls + "):not(.t-temp-selected)").each(function() {
				var a = $(this),
					c = a.attr("appID"),
					h = a.attr("attachID"),
					i = a.offset().left + b.junebox.scrollLeft(),
					j = i + a.outerWidth(),
					k = a.offset().top + b.junebox.scrollTop(),
					l = k + a.outerHeight(),
					m = !1;
				!a.hasClass(b.appParentClsVal) && !a.hasClass(b.appChildClsVal) || a.hasClass("junehtml") || ("touch" === b.selectTolerance ? m = !(i > f || d > j || k > g || e > l) : "fit" === b.selectTolerance && (m = i > d && f > j && k > e && g > l), m ? a.hasClass(b.selectedVal) || b.chooseLayer(c, !0, h) : a.hasClass(b.selectedVal) && b.chooseLayer(c, !0, h))
			})
		}
	}, a.End = function() {
		b.selectHelper && b["v"].toExport($.proxy(function() {
			b.selectHelper.remove()
		}, this)), b.june.find(".t-temp-selected").removeClass("t-temp-selected"), b.selectHelper = null
	}, a
}), define("scripts/drawArea.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/action"),
		e = require("scripts/layer"),
		f = require("scripts/snap"),
		g = b.appConfig;
	return a.Start = function(a) {
		("june" == a.target.id || "zdybox" == a.target.id || $(a.target).hasClass("junehtml") || $(a.target).hasClass(b.dragNaClsVal) || $(a.target).hasClass(b.dragNaClsVal1) || $(a.target).hasClass("antiscroll-inner")) && (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.layerList.children(".ps-active,.gc-active").removeClass("ps-active gc-active"), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected"), b.startX = a.pageX + b.junebox.scrollLeft(), b.startY = a.pageY + b.junebox.scrollTop(), b.drawHelper = $(g.jdb[0]), b.drawPut = !1, b.drawImg = $(".nav12").children("a").attr("class").substr(0, 4), b.snapSwitch && b.createSnapElements(b.drawHelper))
	}, a.Ing = function(a) {
		if (b.drawHelper) {
			b.checkScrollAct(a);
			var c, e, h, i, j, k, l, m, n, o, t, u, x, y, q = [],
				z = null,
				A = $.extend({}, g.jdb[2]),
				B = b.tParseInt(b.snapOutTolerance),
				C = b.tParseInt(b.snapInTolerance),
				D = b.tParseInt(b.snapOutSpace),
				E = b.tParseInt(b.snapInSpace),
				t = b.snapSleft - b.junebox.scrollLeft();
			if (u = b.snapStop - b.junebox.scrollTop(), d = ["s", "e"], x1 = b.startX, y1 = b.startY, x2 = a.pageX + b.junebox.scrollLeft(), y2 = a.pageY + b.junebox.scrollTop(), maxX = b.june.width() + _g_offsleft, maxY = b.june.height() + _g_offstop, x1 > x2 && (c = x2, x2 = x1, x1 = c, d[1] = "w"), y1 > y2 && (c = y2, y2 = y1, y1 = c, d[0] = "n"), b.appOverSwitch || (_g_offsleft > x1 && (x1 = _g_offsleft), _g_offstop > y1 && (y1 = _g_offstop), x2 > maxX && (x2 = maxX), y2 > maxY && (y2 = maxY)), x = x1 + (x2 - x1) / 2, y = y1 + (y2 - y1) / 2, (Math.abs(x1 - x2) > 5 || Math.abs(y1 - y2) > 5) && (b.drawPut || (z = b.setAppID(A), b.drawHelper.attr("appID", z), b.drawHelper.appendTo(b.june).attr("data-config", JSON.stringify(A)).tResize(), b.drawHelper.children(".j-tazb").css("background-color", "rgba(25, 194, 209, 0.2)"), b.drawHelper.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.drawHelper), b.drawPut = !0)), b.s.toExport($.proxy(function() {
				b.drawHelper.offset({
					left: x1 - b.junebox.scrollLeft(),
					top: y1 - b.junebox.scrollTop()
				}).width(x2 - x1).height(y2 - y1)
			}, this)), b.snapSwitch) {
				for (o = b.snapElements.length - 1; o >= 0; o--) q[o] = [], e = b.snapElements[o].left + t, h = b.snapElements[o].right + t, i = b.snapElements[o].top + u, j = b.snapElements[o].bottom + u, l = e + Math.ceil(b.snapElements[o].width / 2), k = i + Math.ceil(b.snapElements[o].height / 2), n = e + b.snapElements[o].width / 2, m = i + b.snapElements[o].height / 2, "s" == d[0] && (Math.abs(i - y + b.junebox.scrollTop()) <= B ? (b.drawHelper.height(2 * (i - y1 + b.junebox.scrollTop())), q[o].push("hcenterx")) : Math.abs(k - y + b.junebox.scrollTop()) <= B ? (b.drawHelper.height(2 * (m - y1 + b.junebox.scrollTop())), q[o].push("hcenter")) : Math.abs(k - y2 + b.junebox.scrollTop()) <= B ? (b.drawHelper.height(k - y1 + b.junebox.scrollTop()), q[o].push("bottomc")) : Math.abs(j - y + b.junebox.scrollTop()) <= B && (b.drawHelper.height(2 * (j - y1 + b.junebox.scrollTop())), q[o].push("hcentery"))), "n" == d[0] && (Math.abs(j - y + b.junebox.scrollTop()) <= B ? (b.drawHelper.offset({
					top: j - (y2 - b.junebox.scrollTop() - j)
				}).height(2 * (y2 - b.junebox.scrollTop() - j)), q[o].push("hcentery")) : Math.abs(k - y + b.junebox.scrollTop()) <= B ? (b.drawHelper.offset({
					top: m - (y2 - b.junebox.scrollTop() - m)
				}).height(2 * (y2 - b.junebox.scrollTop() - m)), q[o].push("hcenter")) : Math.abs(k - y1 + b.junebox.scrollTop()) <= B ? (b.drawHelper.offset({
					top: k
				}).height(y2 - b.junebox.scrollTop() - k), q[o].push("topc")) : Math.abs(i - y + b.junebox.scrollTop()) <= B && (b.drawHelper.offset({
					top: i - (y2 - b.junebox.scrollTop() - i)
				}).height(2 * (y2 - b.junebox.scrollTop() - i)), q[o].push("hcenterx"))), "e" == d[1] && (Math.abs(e - x + b.junebox.scrollLeft()) <= B ? (b.drawHelper.width(2 * (e - x1 + b.junebox.scrollLeft())), q[o].push("zcenterx")) : Math.abs(l - x + b.junebox.scrollLeft()) <= B ? (b.drawHelper.width(2 * (n - x1 + b.junebox.scrollLeft())), q[o].push("zcenter")) : Math.abs(l - x2 + b.junebox.scrollLeft()) <= B ? (b.drawHelper.width(l - x1 + b.junebox.scrollLeft()), q[o].push("rightc")) : Math.abs(h - x + b.junebox.scrollLeft()) <= B && (b.drawHelper.width(2 * (h - x1 + b.junebox.scrollLeft())), q[o].push("zcentery"))), "w" == d[1] && (Math.abs(h - x + b.junebox.scrollLeft()) <= B ? (b.drawHelper.offset({
					left: h - (x2 - b.junebox.scrollLeft() - h)
				}).width(2 * (x2 - b.junebox.scrollLeft() - h)), q[o].push("hcentery")) : Math.abs(l - x + b.junebox.scrollLeft()) <= B ? (b.drawHelper.offset({
					left: n - (x2 - b.junebox.scrollLeft() - n)
				}).width(2 * (x2 - b.junebox.scrollLeft() - n)), q[o].push("hcenter")) : Math.abs(l - x1 + b.junebox.scrollLeft()) <= B ? (b.drawHelper.offset({
					left: l
				}).width(x2 - b.junebox.scrollLeft() - l), q[o].push("topc")) : Math.abs(e - x + b.junebox.scrollLeft()) <= B && (b.drawHelper.offset({
					left: e - (x2 - b.junebox.scrollLeft() - e)
				}).width(2 * (x2 - b.junebox.scrollLeft() - e)), q[o].push("hcenterx"))), "inner" !== b.snapElements[o].snapMode && (Math.abs(i - y2 + b.junebox.scrollTop()) <= B && "s" == d[0] && (b.drawHelper.height(i - y1 + b.junebox.scrollTop() - D), q[o].push("topx")), Math.abs(j - y1 + b.junebox.scrollTop()) <= B && "n" == d[0] && (b.drawHelper.offset({
					top: j + D
				}).height(y2 - y1 - j - D + y1 - b.junebox.scrollTop()), q[o].push("bottomx")), Math.abs(e - x2 + b.junebox.scrollLeft()) <= B && "e" == d[1] && (b.drawHelper.width(e - x1 + b.junebox.scrollLeft() - D), q[o].push("leftx")), Math.abs(h - x1 + b.junebox.scrollLeft()) <= B && "w" == d[1] && (b.drawHelper.offset({
					left: h + D
				}).width(x2 - x1 - h - D + x1 - b.junebox.scrollLeft()), q[o].push("rightx"))), "outer" !== b.snapElements[o].snapMode && (Math.abs(j - y2 + b.junebox.scrollTop()) <= C && "s" == d[0] && (b.drawHelper.height(j - y1 + b.junebox.scrollTop() - E), q[o].push("bottom")), Math.abs(i - y1 + b.junebox.scrollTop()) <= C && "n" == d[0] && (b.drawHelper.offset({
					top: i + E
				}).height(y2 - y1 - i - E + y1 - b.junebox.scrollTop()), q[o].push("top")), Math.abs(h - x2 + b.junebox.scrollLeft()) <= C && "e" == d[1] && (b.drawHelper.width(h - x1 + b.junebox.scrollLeft() - E), q[o].push("right")), Math.abs(e - x1 + b.junebox.scrollLeft()) <= C && "w" == d[1] && (b.drawHelper.offset({
					left: e + E
				}).width(x2 - x1 - e - E + x1 - b.junebox.scrollLeft()), q[o].push("left")));
				b.v.toExport($.proxy(function() {
					f.snapLine(q, b.snapElements, b.drawHelper)
				}, this))
			}
		}
	}, a.End = function(a) {
		if (b.drawHelper) {
			var d = b.drawHelper.attr("appID") || "";
			b.startX, b.startY, a.pageX + b.junebox.scrollLeft(), a.pageY + b.junebox.scrollTop(), b.drawHelper.width() < 10 || b.drawHelper.height() < 10 ? (b.jSelectsedDom = b.jSelectsedDom.not(b.drawHelper[0]), b["v"].toExport($.proxy(function() {
				b.drawHelper.remove()
			}, this))) : new RegExp("(w*?)" + b.drawImg + "(w*?)").test(b.create("div")) ? ($("." + b.june.attr("id") + "-" + $("#qmitemSingle").children().children().attr("class").substr(5, 7)).each(function() {
				var c = $(this);
				c.attr("href", c.attr("href").replace(/(\?u|\&u)(id=)(.*?)(\&|$)/g, "$1$2" + $("#tNotice").children("span:eq(1)").attr("data-tna").substr(0, 6) + "$4"))
			}), "" != d ? (b.createAppName("jdb", d), e.createLayer("jdb", d), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.drawHelper.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.drawHelper), c.create("add", b.drawHelper)) : (b.jSelectsedDom = b.jSelectsedDom.not(b.drawHelper[0]), b.drawHelper.remove())) : $("#" + b.drawImg).html(""), b.drawHelper = null, b.snapElements = []
		}
	}, a
}), define("scripts/appManage.js", function(a) {
	var b = require("scripts/D"),
		d = (b.appConfig, require("scripts/layer")),
		e = require("scripts/action"),
		f = {};
	return f.jzdb = require("scripts/drawZiDingYi"), f.jdb = require("scripts/drawReQu"), f.jllb = require("scripts/drawQianbi"), f.jsib = require("scripts/drawDanTu"), f.job = require("scripts/drawZhengFanMian"), f.jbob = require("scripts/drawDaTuZhengFanMian"), f.jcb = require("scripts/drawWenZi"), f.jvb = require("scripts/drawShiPin"), f.jwb = require("scripts/drawWangWang"), f.jwwb = require("scripts/drawWangGroup"), f.jcdb = require("scripts/drawDaoJiShi"), f.jab = require("scripts/drawGuanZhu"), f.jsb = require("scripts/drawDianNeiSouSuo"), f.jeb = require("scripts/drawErWeiMa"), f.jfb = require("scripts/drawFenXiang"), f.jxhb = require("scripts/drawXiHuan"), f.jsdb = require("scripts/drawTuPianLunBo"), f.jwfb = require("scripts/drawWuFengLunBo"), f.jqtb = require("scripts/drawQianTaoLunBo"), f.jfsb = require("scripts/drawJiaoDianLunBo"), f.jfyb = require("scripts/drawFanYeLunBo"), f.jspb = require("scripts/drawTeXiaoCeng"), f.jgb = require("scripts/drawGouWuChe"), f.jscb = require("scripts/drawShouCang"), f.jpb = require("scripts/drawTanChuCeng"), f.jzzb = require("scripts/drawZheZhaoCeng"), f.jmdb = require("scripts/drawMaoDian"), f.jacb = require("scripts/drawKeGuanBiCeng"), f.jtsb = require("scripts/drawGunDongWenZi"), f.jib = require("scripts/drawBaoBei"), f.jadb = require("scripts/drawShouFengQin"), f.jsfb = require("scripts/drawDianPuFenLei"), f.jkgb = require("scripts/drawKaiGuanDeng"), f.jplb = require("scripts/drawPingLun"), f.jdhb = require("scripts/drawDongTaiHaiBao"), f.jkcb = require("scripts/drawKaiChangDongHua"), f.jxdb = require("scripts/drawXunHuanDongHua"), f.jxxb = require("scripts/drawDongHuaXuLie"), f.jrwb = require("scripts/drawJiHuaRenWu"), f.jxxbChild = require("scripts/childDongHuaXuLie"), f.jspbChild = require("scripts/childTeXiaoZiCeng"), f.jkgbChild = require("scripts/childKaiGuanDengTuPian"), f.jbobChild = require("scripts/childDaTuZhengFanMian"), f.jfsbChild = require("scripts/childLunboKuoZhan"), f.jqtbChild = require("scripts/childLunboKuoZhan"), f.jwfbChild = require("scripts/childLunboKuoZhan"), a.create = function(c, d, e) {
		b.v.toExport(void 0, function() {
			for (var a in f) f[a] = f.jdb
		}), d ? f[c].create(c, function(c, f) {
			var g = e.attr("data-lo");
			g && $(b.appParentCls + "[appID='" + f + "']").attr("data-lOpacity", g).css("opacity", g / 100), d(c, f, e, a.callback)
		}, !0) : f[c].create(c, a.callback)
	}, a.createChild = function(b, c, d, e) {
		d ? f[b].create(b, c, function(b, c) {
			d(b, c, e, a.callback)
		}) : f[b].create(b, c, a.callback)
	}, a.remove = function(a, c) {
		var d, f, h, i, g = !1;
		a.length > 1 && "array" == $.type(a) ? (d = [], f = [], g = !0, h = a, i = c) : (h = [], h[0] = a, i = [], i[0] = c), $.each(h, function(a) {
			var e, j, k, l, m, n;
			if (!i[a] || i[a].length <= 0) e = $(b.appParentCls + "[appID='" + h[a] + "']"), j = $(b.layerCls + "[appID='" + h[a] + "']"), b.jSelectsedDom = b.jSelectsedDom.not(e[0]), b["s"].toExport($.proxy(function() {
				e.attr("data-status", b.appClsVal + " " + b.appParentClsVal).removeClass(b.appClsVal + " " + b.appParentClsVal).appendTo(b.dump), j.attr("data-status", b.layerClsVal + " nor").removeClass(b.layerClsVal + " nor").appendTo(b.dumpLayer)
			}, this));
			else {
				if (e = $(b.appParentCls + "[appID='" + h[a] + "']"), k = JSON.parse(e.attr("data-config") || "{}"), l = $(b.appChildCls + "[attachID='" + i[a] + "']"), j = $(b.layerCls + "[attachID='" + i[a] + "']"), m = e.attr("data-dblType"), "jspb" != m && "jkgb" != m && "jbob" != m && "jxxb" != m && "lbePanel" != l.attr("data-attachType")) return;
				for (n in k.childConfig) k.childConfig[n].attachID == i[a] && k.childConfig.splice(n, 1);
				e.attr("data-config", JSON.stringify(k)), b.jSelectsedDom = b.jSelectsedDom.not(l[0]), l.attr("data-status", b.appClsVal + " " + b.appChildClsVal).removeClass(b.appClsVal + " " + b.appChildClsVal).appendTo(b.dump), j.attr("data-status", b.layerClsVal + " nor").removeClass(b.layerClsVal + " nor").appendTo(b.dumpLayer)
			}
			g ? (d.push(e), f.push(l)) : (d = e, f = l)
		}), e.create("remove", d, f)
	}, a.copyGroup = function() {
		b.copyGapp.each(function() {
			var a = $(this),
				c = a.attr("data-inGroup");
			b.copyGID[c] && a.attr("data-inGroup", b.copyGID[c])
		}), b.copyGlayer.each(function() {
			var a = $(this),
				c = a.attr("data-inGroup");
			b.copyGID[c] && a.attr("data-inGroup", b.copyGID[c])
		}), sortTreePlaceAll(), b.copyGapp = $(), b.copyGlayer = $(), b.copyGID = {}
	}, a.copy = function(a, c, d, e, f, g) {
		var h, i, j, k, l, m, n, o, p, q, r, t, u, v, w, x;
		if (d) {
			if (h = $(b.appParentCls + "[appID='" + c + "'].j-fnd"), j = $(b.appChildCls + "[attachID='" + d + "']"), h.length <= 0) return;
			if ("jspb" == h.attr("data-dblType") || "jkgb" == h.attr("data-dblType") || "jbob" == h.attr("data-dblType") || "jxxb" == h.attr("data-dblType") || "lbePanel" == j.attr("data-attachType")) {
				w = null, k = j.clone(), m = JSON.parse(h.attr("data-config")), n = b.setClonerAttachID(k);
				for (x in m.childConfig) m.childConfig[x].attachID == d && (w = $.extend(!0, {}, m.childConfig[x]), w.attachID = n, m.childConfig.push(w), $(b.layerCls + "[attachID='" + d + "']").length > 0 && (cloneChildLayer = $(b.layerCls + "[attachID='" + d + "']").clone(), cloneChildLayer.attr("attachID", n).insertAfter($(b.layerCls + ".primary[appID='" + c + "']"))));
				if (!w) return;
				o = a.offsetX + b.junebox.scrollLeft(), p = a.offsetY + b.junebox.scrollTop(), b.dragStartX = a.pageX, b.dragStartY = a.pageY, b.dragX[0] = o, b.dragY[0] = p, b["v"].toExport($.proxy(function() {
					k.offset({
						left: o,
						top: p
					}).appendTo(h).removeClass(b.dragNaClsVal)
				}, this)), b.createAppName(k.attr("data-attachType"), c, n), h.attr("data-config", JSON.stringify(m)), f ? g ? b.chooseLayer(c, !1, n) : b.chooseLayer(c, !0, n) : (b.chooseLayer(c, !1, n), b.dragEle = k, b.snapSwitch && (b.snapEle = $("#juneDragHelper")), b.createSnapElements(b.snapEle), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = a.pageX, b.clickTimeStartY = a.pageY, b.clickTimeDom = a), k.hasClass("t-app-jspcb") && k.removeClass("t-app-jspcb"), "jbob" != h.attr("data-dblType") || k.hasClass("t-app-jbocb") || k.addClass("t-app-jbocb"), "jkgb" != h.attr("data-dblType") || k.hasClass("t-app-jkgb") || k.addClass("t-app-jkgb"), "jxxb" != h.attr("data-dblType") || k.hasClass("t-app-jxxb") || k.addClass("t-app-jxxb"), g && (q = $.extend({}, a), q.target = k[0]), h.length > 0 && (u = h.attr("data-dblType") || "", v = JSON.parse(h.attr("data-config") || "{}"), "" != u && b.appConfig[u][1].tSubmit(v, h))
			}
		} else {
			if (h = $(b.appParentCls + "[appID='" + c + "'].j-fnd"), i = $(b.layerCls + "[appID='" + c + "']:not(.sub)"), h.length <= 0) return;
			k = h.clone(), m = JSON.parse(h.attr("data-config")), l = i.clone(), n = b.setClonerID(k, l), o = a.offsetX + b.junebox.scrollLeft(), p = a.offsetY + b.junebox.scrollLeft(), b.dragStartX = a.pageX, b.dragStartY = a.pageY, b.dragX[0] = o, b.dragY[0] = p, m.appID = n, k.offset({
				left: o,
				top: p
			}).appendTo(b.june).removeClass(b.dragNaClsVal), l.prependTo(b.layerList), k.children(b.appChildCls).each(function() {
				var d, a, c, e;
				j = $(this), a = j.attr("attachID"), c = b.setClonerAttachID(j), j.attr("appID", n);
				for (e in m.childConfig) m.childConfig[e].attachID == a && (m.childConfig[e].attachID = c, $(b.layerCls + "[attachID='" + a + "']").length > 0 && (d = $(b.layerCls + "[attachID='" + a + "']").clone(), d.attr("appID", n).attr("attachID", c).insertAfter(l)))
			}), b.createAppName(k.attr("data-dblType"), n), h.attr("data-groupId") && (r = h.attr("data-groupId"), b.copyGID && b.copyGID[r] || (b.copyGID[r] = b.setClonerGID(k, l))), h.attr("data-inGroup") && (r = h.attr("data-inGroup"), b.copyGID && b.copyGID[r] ? (k.attr("data-inGroup", b.copyGID[r]), l.attr("data-inGroup", b.copyGID[r])) : (b.copyGapp = b.copyGapp.addGroup(k), b.copyGlayer = b.copyGlayer.addGroup(l))), m.appLabel = k.attr("data-appName"), k.attr("data-config", JSON.stringify(m)), l.length > 0 && (t = l.html().replace(l.html().replace(/<[^>]+>/g, ""), ""), l.html(t).attr("data-appLabel", k.attr("data-appName")), l.children("span").html(k.attr("data-appName"))), f ? g ? b.chooseLayer(n) : b.chooseLayer(n, !0) : (b.dragStart = !1, b.chooseLayer(n), b.dragEle = k, b.snapSwitch && (b.snapEle = $("#juneDragHelper")), b.createSnapElements(b.snapEle), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = a.pageX, b.clickTimeStartY = a.pageY, b.clickTimeDom = a), g && (q = $.extend({}, a), q.target = k[0]), k.length > 0 && (u = k.attr("data-dblType"), v = JSON.parse(k.attr("data-config") || "{}"), "" != u && b.appConfig[u][1].tSubmit(v, k))
		}
		return ("key" == e && !d || d && ("jspb" == h.attr("data-dblType") || "jkgb" == h.attr("data-dblType") || "jxxb" == h.attr("data-dblType") || "jbob" == h.attr("data-dblType") || "lbePanel" == j.attr("data-attachType"))) && (o = a.pageX + b.junebox.scrollLeft() - _g_offsleft, p = a.pageY + b.junebox.scrollTop() - _g_offstop, d && (o -= b.tParseInt(h.css("left")), p -= b.tParseInt(h.css("top"))), k.css({
			left: o - 10,
			top: p - 10
		}), b.dragX[0] = a.pageX - k.offset().left, b.dragY[0] = a.pageY - k.offset().top), q ? q : void 0
	}, a.moveUp = function(a, c) {
		var d, f, g, h, i, j, l, m, n;
		c ? (d = $(b.appParentCls + "[appID='" + a + "']"), f = $(b.appChildCls + "[attachID='" + c + "']"), g = $(b.layerCls + "[attachID='" + c + "']:not(.primary)"), n = g.attr("data-inGroup"), h = g.prevUntil(".primary[appID='" + a + "']").first(), h.length > 0 && h.hasClass("t-layer") && (j = h.attr("attachID"), l = $(b.appChildCls + "[attachID='" + j + "']"), g.insertBefore(h), f.insertAfter(l))) : (d = $(b.appParentCls + "[appID='" + a + "']"), g = $(b.layerCls + "[appID='" + a + "']:not(.sub)"), m = g.attr("data-groupId"), n = g.attr("data-inGroup"), h = n ? g.prevUntil(b.layerCls + "[data-groupId='" + n + "']").filter("[data-inGroup='" + n + "']").first() : g.prevAll().filter(":not([data-inGroup]):not(.sub)").first(), g.hasClass("primary") && (g = $(b.layerCls + "[appID='" + a + "']")), m && (g = b.getGroupLayer(a), d = b.getGroupDom(a)), i = h.attr("appID"), h.length > 0 && h.hasClass("t-layer") && (l = $(b.appParentCls + "[appID='" + i + "']"), g.insertBefore(h), d.insertAfter(l))), e.create("moveUp", d, d.attr("data-attachType"))
	}, a.moveDown = function(a, c) {
		var d, f, g, h, i, j, k, l, m, n;
		c ? (d = $(b.appParentCls + "[appID='" + a + "']"), f = $(b.appChildCls + "[attachID='" + c + "']"), g = $(b.layerCls + "[attachID='" + c + "']:not(.primary)"), n = g.attr("data-inGroup"), h = g.nextUntil(b.layerCls + "[appID!='" + a + "']").first(), h.length > 0 && h.hasClass("t-layer") && (j = h.attr("attachID"), l = $(b.appChildCls + "[attachID='" + j + "']"), g.insertAfter(h), f.insertBefore(l))) : (d = $(b.appParentCls + "[appID='" + a + "']"), g = $(b.layerCls + "[appID='" + a + "']:not(.sub)"), m = g.attr("data-groupId"), n = g.attr("data-inGroup"), h = n ? g.nextUntil(b.layerCls + "[data-groupId='" + n + "']").filter("[data-inGroup='" + n + "']:not(.sub)").first() : g.nextAll().filter(":not([data-inGroup]):not(.sub)").first(), h.hasClass("group") && (k = h.attr("data-groupId"), h = b.getGroupLastLayer(k)), h.hasClass("primary") && (i = h.attr("appID"), h = $(b.layerCls + "[appID='" + i + "'].sub").last(), 0 == h.length && (h = $(b.layerCls + "[appID='" + i + "'].primary"))), g.hasClass("primary") && (g = $(b.layerCls + "[appID='" + a + "']")), m && (g = b.getGroupLayer(a), d = b.getGroupDom(a)), i = h.attr("appID"), h.length > 0 && h.hasClass("t-layer") && (l = $(b.appParentCls + "[appID='" + i + "']"), g.insertAfter(h), d.insertBefore(l))), e.create("moveDown", d, d.attr("data-attachType"))
	}, a.moveToFirst = function(a, c) {
		var d, f, g, h, i, j, l, m, n;
		c ? (d = $(b.appParentCls + "[appID='" + a + "']"), f = $(b.appChildCls + "[attachID='" + c + "']"), g = $(b.layerCls + "[attachID='" + c + "']:not(.primary)"), n = g.attr("data-inGroup"), h = g.prevUntil(".primary[appID='" + a + "']").last(), h.length > 0 && h.hasClass("t-layer") && (j = h.attr("attachID"), l = $(b.appChildCls + "[attachID='" + j + "']"), g.insertBefore(h), f.insertAfter(l))) : (d = $(b.appParentCls + "[appID='" + a + "']"), g = $(b.layerCls + "[appID='" + a + "']:not(.sub)"), m = g.attr("data-groupId"), n = g.attr("data-inGroup"), h = n ? g.prevUntil(b.layerCls + "[data-groupId='" + n + "']").filter("[data-inGroup='" + n + "']").last() : g.prevAll().filter(b.layerCls + ":not([data-inGroup]):not(.sub)").last(), g.hasClass("primary") && (g = $(b.layerCls + "[appID='" + a + "']")), m && (g = b.getGroupLayer(a), d = b.getGroupDom(a)), i = h.attr("appID"), h.length > 0 && h.hasClass("t-layer") && (l = $(b.appParentCls + "[appID='" + i + "']"), g.insertBefore(h), d.insertAfter(l))), e.create("moveToFirst", d, d.attr("data-attachType"))
	}, a.moveToLast = function(a, c) {
		var d, f, g, h, i, j, k, l, m, n;
		c ? (d = $(b.appParentCls + "[appID='" + a + "']"), f = $(b.appChildCls + "[attachID='" + c + "']"), g = $(b.layerCls + "[attachID='" + c + "']:not(.primary)"), n = g.attr("data-inGroup"), h = g.nextUntil("[appID!='" + a + "']").last(), h.length > 0 && h.hasClass("t-layer") && (j = h.attr("attachID"), l = $(b.appChildCls + "[attachID='" + j + "']"), g.insertAfter(h), f.insertBefore(l))) : (d = $(b.appParentCls + "[appID='" + a + "']"), g = $(b.layerCls + "[appID='" + a + "']:not(.sub)"), m = g.attr("data-groupId"), n = g.attr("data-inGroup"), h = n ? g.nextUntil(b.layerCls + "[data-groupId='" + n + "']").filter("[data-inGroup='" + n + "']:not(.sub)").last() : g.nextAll().filter(b.layerCls + ":not([data-inGroup]):not(.sub)").last(), h.hasClass("group") && (k = h.attr("data-groupId"), h = b.getGroupLastLayer(k)), h.hasClass("primary") && (i = h.attr("appID"), h = $(b.layerCls + "[appID='" + i + "'].sub").last(), 0 == h.length && (h = $(b.layerCls + "[appID='" + i + "'].primary"))), g.hasClass("primary") && (g = $(b.layerCls + "[appID='" + a + "']")), m && (g = b.getGroupLayer(a), d = b.getGroupDom(a)), i = h.attr("appID"), h.length > 0 && h.hasClass("t-layer") && (l = $(b.appParentCls + "[appID='" + i + "']"), g.insertAfter(h), d.insertBefore(l))), e.create("moveToLast", d, d.attr("data-attachType"))
	}, a.addGroup = function() {
		d.addGroup()
	}, a.allowDrag = function(a, c) {
		var d = $(b.appParentCls + "[appID='" + a + "']"),
			e = $(b.appChildCls + "[attachID='" + c + "']");
		$(b.layerCls + "[appID='" + a + "']"), c ? e.removeClass(b.dragNaClsVal) : d.removeClass(b.dragNaClsVal)
	}, a.notAllowDrag = function(a, c) {
		var d = $(b.appParentCls + "[appID='" + a + "']"),
			e = $(b.appChildCls + "[attachID='" + c + "']");
		$(b.layerCls + "[appID='" + a + "']"), c ? e.addClass(b.dragNaClsVal) : d.addClass(b.dragNaClsVal)
	}, a.callback = function(a, c, f, g) {
		var i, h = $(b.appParentCls + "[appID='" + c + "']");
		b.createAppName(a, c, f), f ? (i = $(b.appChildCls + "[attachID='" + f + "']"), d.createLayerChild(a, c, f)) : d.createLayer(a, c), g ? e.cover("add", h, i) : e.create("add", h, i), b.getPopupContent(c, f)
	}, a.getStyle = function(a, c, d) {
		a.html(""), $.ajax({
			url: "/3.0/getstyle.php",
			dataType: "JSON",
			data: {
				styletype: d,
				username: b.tUserName
			},
			success: function(e) {
				var h, i, f = $(b.appParentCls + "[appID='" + c + "']"),
					g = f.attr("data-styleID");
				for (h = 0; h < e.length; h++) i = "", e[h].ID == g && (i = " defaultStyleActive"), a.append('<div class="defaultStyleLi' + i + '" data-appType="' + d + '" data-styleID="' + e[h].ID + '" data-appID="' + c + '"><img src="' + e[h].styleurl + '">' + e[h].styletext + "</div>"), a.children(".defaultStyleLi:last").attr("data-code", e[h].stylecode).attr("data-code1", e[h].stylecode1)
			}
		})
	}, a.setStyle = function(a, c, d) {
		var j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, f = require("scripts/UI_Dialog"),
			g = require("scripts/code"),
			h = $(b.appParentCls + "[appID='" + a + "']"),
			i = h.attr("data-config");
		if (c = c || "jib", "jib" == c) {
			if (n = h.children("[data-attachType='jibtitle']"), o = h.children("[data-attachType='jibsubtitle']"), p = h.children("[data-attachType='jibprefix']"), q = h.children("[data-attachType='jibprice']"), r = h.children("[data-attachType='jibdiscountprefix']"), s = h.children("[data-attachType='jibdiscountprice']"), t = h.children("[data-attachType='jibsaleprefix']"), u = h.children("[data-attachType='jibsale']"), v = h.children("[data-attachType='jibbtn']"), w = h.children("[data-attachType='jibbtn1']"), x = h.children("[data-attachType='jibbtn2']"), y = h.children("[data-attachType='jibsubscript']"), z = h.children("[data-attachType='jibsubscript1']"), A = h.children("[data-attachType='jibsubscript2']"), B = h.children("[data-attachType='jibsubscript3']"), C = h.children("[data-attachType='jibsubscript4']"), D = h.children("[data-attachType='jiberweima']"), E = h.children("[data-attachType='jibexpandtext']"), F = h.children("[data-attachType='jibexpandtext1']"), G = h.children("[data-attachType='jibexpandtext2']"), H = h.children("[data-attachType='jibexpandtext3']"), I = h.children("[data-attachType='jibexpandtext4']"), j = {
				titleTop: b.tParseInt(n.css("top")),
				titleLeft: b.tParseInt(n.css("left")),
				subTitleTop: b.tParseInt(o.css("top")),
				subTitleLeft: b.tParseInt(o.css("left")),
				prefixTop: b.tParseInt(p.css("top")),
				prefixLeft: b.tParseInt(p.css("left")),
				priceTop: b.tParseInt(q.css("top")),
				priceLeft: b.tParseInt(q.css("left")),
				_prefixTop: b.tParseInt(r.css("top")),
				_prefixLeft: b.tParseInt(r.css("left")),
				_priceTop: b.tParseInt(s.css("top")),
				_priceLeft: b.tParseInt(s.css("left")),
				salePrefixTop: b.tParseInt(t.css("top")),
				salePrefixLeft: b.tParseInt(t.css("left")),
				saleTop: b.tParseInt(u.css("top")),
				saleLeft: b.tParseInt(u.css("left")),
				btnTop: b.tParseInt(v.css("top")),
				btnLeft: b.tParseInt(v.css("left")),
				btnWidth: b.tParseInt(v.css("width")),
				btnHeight: b.tParseInt(v.css("height")),
				btn1Top: b.tParseInt(w.css("top")),
				btn1Left: b.tParseInt(w.css("left")),
				btn1Width: b.tParseInt(w.css("width")),
				btn1Height: b.tParseInt(w.css("height")),
				btn2Top: b.tParseInt(x.css("top")),
				btn2Left: b.tParseInt(x.css("left")),
				btn2Width: b.tParseInt(x.css("width")),
				btn2Height: b.tParseInt(x.css("height")),
				subScriptTop: b.tParseInt(y.css("top")),
				subScriptLeft: b.tParseInt(y.css("left")),
				subScriptWidth: b.tParseInt(y.css("width")),
				subScriptHeight: b.tParseInt(y.css("height")),
				subScript1Top: b.tParseInt(z.css("top")),
				subScript1Left: b.tParseInt(z.css("left")),
				subScript1Width: b.tParseInt(z.css("width")),
				subScript1Height: b.tParseInt(z.css("height")),
				subScript2Top: b.tParseInt(A.css("top")),
				subScript2Left: b.tParseInt(A.css("left")),
				subScript2Width: b.tParseInt(A.css("width")),
				subScript2Height: b.tParseInt(A.css("height")),
				subScript3Top: b.tParseInt(B.css("top")),
				subScript3Left: b.tParseInt(B.css("left")),
				subScript3Width: b.tParseInt(B.css("width")),
				subScript3Height: b.tParseInt(B.css("height")),
				subScript4Top: b.tParseInt(C.css("top")),
				subScript4Left: b.tParseInt(C.css("left")),
				subScript4Width: b.tParseInt(C.css("width")),
				subScript4Height: b.tParseInt(C.css("height")),
				erWeiMaTop: b.tParseInt(D.css("top")),
				erWeiMaLeft: b.tParseInt(D.css("left")),
				expandTextTop: b.tParseInt(E.css("top")),
				expandTextLeft: b.tParseInt(E.css("left")),
				expandText1Top: b.tParseInt(F.css("top")),
				expandText1Left: b.tParseInt(F.css("left")),
				expandText2Top: b.tParseInt(G.css("top")),
				expandText2Left: b.tParseInt(G.css("left")),
				expandText3Top: b.tParseInt(H.css("top")),
				expandText3Left: b.tParseInt(H.css("left")),
				expandText4Top: b.tParseInt(I.css("top")),
				expandText4Left: b.tParseInt(I.css("left"))
			}, J = b.tParseInt(i.itemCount), K = [], J) {
				for (L = 0; J > L; L++) K.push("");
				i.href = K.join(",")
			}
		} else "jfsb" == c ? (M = h.children(b.appChildCls + "[data-attachType='jfsbSmallImg']"), N = h.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), O = h.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), P = [], M.each(function() {
			var d = {},
				e = $(this);
			d.top = b.tParseInt(e.css("top")), d.left = b.tParseInt(e.css("left")), d.width = e.width(), d.height = e.height(), P.push(d)
		}), j = {
			width: b.tParseInt(h.css("width")),
			height: b.tParseInt(h.css("height")),
			smallPos: P,
			oArrowTop: b.tParseInt(N.css("top")),
			oArrowLeft: b.tParseInt(N.css("left")),
			oArrowWidth: b.tParseInt(N.css("width")),
			oArrowHeight: b.tParseInt(N.css("height")),
			tArrowTop: b.tParseInt(O.css("top")),
			tArrowLeft: b.tParseInt(O.css("left")),
			tArrowWidth: b.tParseInt(O.css("width")),
			tArrowHeight: b.tParseInt(O.css("height"))
		}) : "jbob" == c ? (Q = h.children(b.appChildCls), R = [], Q.each(function() {
			var d = {},
				e = $(this);
			d.top = b.tParseInt(e.css("top")), d.left = b.tParseInt(e.css("left")), d.width = e.width(), d.height = e.height(), R.push(d)
		}), j = {
			width: b.tParseInt(h.css("width")),
			height: b.tParseInt(h.css("height")),
			slicePos: R
		}) : "jsdb" == c ? (S = h.children(b.appChildCls + "[data-attachType='jsdbOArrow']"), T = h.children(b.appChildCls + "[data-attachType='jsdbTArrow']"), j = {
			width: b.tParseInt(h.css("width")),
			height: b.tParseInt(h.css("height")),
			oArrowTop: b.tParseInt(S.css("top")),
			oArrowLeft: b.tParseInt(S.css("left")),
			oArrowWidth: b.tParseInt(S.css("width")),
			oArrowHeight: b.tParseInt(S.css("height")),
			tArrowTop: b.tParseInt(T.css("top")),
			tArrowLeft: b.tParseInt(T.css("left")),
			tArrowWidth: b.tParseInt(T.css("width")),
			tArrowHeight: b.tParseInt(T.css("height"))
		}) : "jfyb" == c ? (U = h.children(b.appChildCls + "[data-attachType='jfybOArrow']"), V = h.children(b.appChildCls + "[data-attachType='jfybTArrow']"), W = h.children(b.appChildCls + "[data-attachType='jfybPanel']"), X = W.children(b.appOtherCls + "[data-attachType='jfybSmallImg']"), j = {
			width: b.tParseInt(h.css("width")),
			height: b.tParseInt(h.css("height")),
			smallLen: X.length,
			smallWidth: b.tParseInt(X.css("width")),
			smallHeight: b.tParseInt(X.css("height")),
			panelTop: b.tParseInt(W.css("top")),
			panelLeft: b.tParseInt(W.css("left")),
			panelWidth: b.tParseInt(W.css("width")),
			panelHeight: b.tParseInt(W.css("height")),
			oArrowTop: b.tParseInt(U.css("top")),
			oArrowLeft: b.tParseInt(U.css("left")),
			oArrowWidth: b.tParseInt(U.css("width")),
			oArrowHeight: b.tParseInt(U.css("height")),
			tArrowTop: b.tParseInt(V.css("top")),
			tArrowLeft: b.tParseInt(V.css("left")),
			tArrowWidth: b.tParseInt(V.css("width")),
			tArrowHeight: b.tParseInt(V.css("height"))
		}) : "jadb" == c ? (Y = [], h.children(".t-jadb-title").each(function(a) {
			Y[a] = {};
			var c = $(this),
				d = h.children(".t-jadb-panel:eq(" + a + ")");
			Y[a].tWidth = c.width(), Y[a].tHeight = c.height(), Y[a].pWidth = d.width(), Y[a].pHeight = d.height()
		}), j = {
			width: b.tParseInt(h.css("width")),
			height: b.tParseInt(h.css("height")),
			acreagePos: Y
		}) : "jsfb" == c && (j = {});
		k = i, l = JSON.stringify(j), f.tDialogSetStyle(function(a, d, e, f) {
			if (!a || "" == a || "undefined" == a || !checkUrl(a)) return b.tMessage("请输入预设样式缩略图链接"), void 0;
			"jsfb" == c && (i = JSON.parse(i), i.formatName = f, k = JSON.stringify(i));
			var j = $("#rd1").children("input[name='stylePower']:checked").val() || "",
				m = 1,
				n = b.june.width(),
				o = b.june.height(),
				p = b.june.html();
			1 == j && (m = 0), b.juneAppChooseExport = !0, b.singleLayoutCount(h), g.getCodeExport(function(f) {
				b.june.width(n).height(o).html(p), b.layoutCanvas(), b.jSelectsedDom = $(), b.june.children(b.appCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				}), $.ajax({
					url: "/3.0/savestyle.php",
					data: {
						styleurl: a,
						styletext: d,
						styletype: c,
						username: b.tUserName,
						stylePower: j,
						styleExam: m,
						stylecode: k,
						stylecode1: l,
						previewCode: f
					},
					type: "POST",
					dataType: "json",
					success: function(a) {
						a[0] ? (b.tMessage(a[1]), e.dialog("close")) : a[1] && b.tMessage(a[1])
					}
				})
			}, !0, !0)
		}, c, d)
	}, a.showStyle = function(c, d) {
		var j, k, f = $("#defaultStyleBox"),
			g = $(b.appParentCls + "[appID='" + d + "']"),
			h = g.attr("data-dblType"),
			i = g.attr("data-styleID");
		f.length < 1 ? (j = '<div id="defaultStyleBox"></div>', $(j).appendTo($("#tControlBtn").children(".t-control-btns-defaultstyle")).show(), f = $("#defaultStyleBox"), f.show(), f.off("click").on("click", ".defaultStyleLi", function() {
			var j, a = $(this),
				c = a.attr("data-appID"),
				d = $(b.appParentCls + "[appID='" + c + "']"),
				e = a.attr("data-appType"),
				g = a.attr("data-styleID"),
				h = JSON.parse(a.attr("data-code")),
				i = JSON.parse(a.attr("data-code1"));
			"jib" == e && d.length > 0 && (d.attr("data-styleID", g), j = JSON.parse(d.attr("data-config")), delete h.appID, delete h.itemCount, delete h.href, delete h.readVal, delete h.pSrc, delete h.oppoSrc, delete h.titleInfo, delete h.subTitleInfo, delete h.priceInfo, delete h._priceInfo, delete h.saleInfo, delete h.subScriptSrc, delete h.subScript1Src, delete h.subScript2Src, delete h.subScript3Src, delete h.subScript4Src, delete h.erWeiMaSrc, h = $.extend(!0, {}, j, h), b.appConfig["jib"][1].tSubmit(h, d, !0, i), f.children(".defaultStyleActive").removeClass("defaultStyleActive"), a.addClass("defaultStyleActive"))
		})) : (f.children(".defaultStyleLi").attr("data-appID", d), f.is(":hidden") ? (f.show(), f.children(".defaultStyleActive").removeClass("defaultStyleActive"), f.children(".defaultStyleLi[data-styleID='" + i + "']").addClass("defaultStyleActive")) : f.hide()), b.curAppType != h && ("jib" == h && a.getStyle(f, d, h), b.curAppType = h), ("jfsb" == h || "jbob" == h || "jsfb" == h || "jfyb" == h || "jsdb" == h || "jadb" == h) && f.hide(), b.tUserLogin && "admin" == b.tUserName && ($("#setDefaultBox").length < 1 && (k = '<div id="setDefaultBox" style="background:#ff9977;width:60px;height:20px;position:absolute;left:0;bottom:-20px;">点我吧</div>', $(k).appendTo($("#tControlBtn").children(".t-control-btns-defaultstyle")).show(), $("#setDefaultBox").off("click").on("click", function() {
			var b = $(this).attr("data-appType"),
				c = $("#tControlBtn").attr("appID");
			a.setStyle(c, b)
		})), $("#setDefaultBox").attr("data-appType", h))
	}, a
}), define("scripts/drawZiDingYi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 500,
			height: 300,
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawJiHuaRenWu.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 500,
			height: 300,
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawReQu.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 0,
			height: 0
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawQianbi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawDanTu.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 571,
			height: 325
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), f.children(".j-tazb").html('<img src="' + e[2].pSrc + '" width="100%" height="100%" style="display:none;">').css({
			backgroundImage: "url(" + e[2].pSrc + ")"
		}), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawKaiChangDongHua.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 727,
			height: 566
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), f.children(".j-tazb").css({
			backgroundImage: "url(" + e[2].pSrc + ")"
		}), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawXunHuanDongHua.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 220,
			height: 220
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), f.children(".j-tazb").css({
			backgroundImage: "url(" + e[2].pSrc + ")"
		}), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawDongHuaXuLie.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d, e) {
		var g, i, j, k, l, m, f = c[a],
			h = require("scripts/childDongHuaXuLie");
		if (b.setAppID(f[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(f[0]).html(f[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 535,
			height: 150
		}).attr("data-config", JSON.stringify(f[2])).attr("appID", f[2].appID).addClass(b.selectedVal), g = $(b.appParentCls + "[appID='" + f[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), !e) for (i = 6, j = 6, k = {}, l = ["https://img.alicdn.com/imgextra/i4/800803731/TB2.Te0mYlmpuFjSZFlXXbdQXXa_!!800803731.png", "https://img.alicdn.com/imgextra/i3/800803731/TB27RNPkYplpuFjSspiXXcdfFXa_!!800803731.png", "https://img.alicdn.com/imgextra/i1/800803731/TB2gvFqkY0kpuFjy0FjXXcBbVXa_!!800803731.png", "https://img.alicdn.com/imgextra/i3/800803731/TB2VFJuk4XkpuFjy0FiXXbUfFXa_!!800803731.png", "https://img.alicdn.com/imgextra/i4/800803731/TB2g70Ak9xjpuFjSszeXXaeMVXa_!!800803731.png"], m = 0; 5 > m; m++) k.pSrc = l[m], h.createAuto("jxxbChild", g, j, i, null, function(a, b, c) {
			var d = require("scripts/appManage");
			d.callback("jxxbChild", b, c)
		}, k), j += 99, 4 == m % 5 && (j = 6, i += 124);
		d(a, f[2].appID)
	}, a
}), define("scripts/childDongHuaXuLie.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d, e, f) {
		var k, g = c["jxxb"][1].tDynamic,
			h = c["jxxb"][1].tDynamicConfig,
			i = d.attr("appID"),
			j = JSON.parse(d.attr("data-config"));
		f ? h = $.extend({}, h, f) : (b.setAttachID(h), j.childConfig.push(h)), d.attr("data-config", JSON.stringify(j)), iWidth = 99, iHeight = 124, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g).appendTo(d).tResize().css({
			left: 0,
			top: 0,
			width: iWidth,
			height: iHeight
		}).attr("attachID", h.attachID).attr("appID", i).addClass("t-app-jxxb").addClass(b.selectedVal), k = $(b.appChildCls + "[attachID='" + h.attachID + "']"), k.children(".j-tazb").css({
			backgroundImage: "url(" + h.pSrc + ")"
		}), b.jSelectsedDom = b.jSelectsedDom.addGroup(k), e(a, i, h.attachID)
	}, a.createAuto = function(a, d, e, f, g, h, i) {
		var l, n, o, j = c["jxxb"][1].tDynamic,
			k = c["jxxb"][1].tDynamicConfig,
			m = d.attr("appID");
		g ? (n = $.extend(!0, k, g), o = JSON.parse(d.attr("data-config")), g.attachID && "" != g.attachID || b.setAttachID(n), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(j).appendTo(d).tResize().css({
			left: e,
			top: f,
			width: n.width,
			height: n.height
		}).attr("attachID", n.attachID).attr("appID", m).addClass(b.selectedVal), l = $(b.appChildCls + "[attachID='" + n.attachID + "']"), "customContent" != n.contentType ? l.children(".j-tazb").css({
			backgroundImage: "url(" + n.pSrc + ")",
			backgroundColor: n.bgColor || "none"
		}) : l.children(".j-tazb").html(n.customContent), g.contentMode && "customContent" == g.contentMode && l.html(g.customContent || "").css({
			background: "none"
		}).tResize(), b.jSelectsedDom = b.jSelectsedDom.addGroup(l), delete n.width, delete n.height, delete n.left, delete n.top, o.childConfig.push(n), d.attr("data-config", JSON.stringify(o))) : (i && (k = $.extend({}, k, i)), o = JSON.parse(d.attr("data-config")), b.setAttachID(k), o.childConfig.push(k), d.attr("data-config", JSON.stringify(o)), iWidth = 99, iHeight = 124, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(j).appendTo(d).tResize().css({
			left: e,
			top: f,
			width: iWidth,
			height: iHeight
		}).attr("attachID", k.attachID).attr("appID", m).addClass(b.selectedVal), l = $(b.appChildCls + "[attachID='" + k.attachID + "']"), l.children(".j-tazb").css({
			backgroundImage: "url(" + k.pSrc + ")",
			backgroundColor: k.bgColor || "none"
		}), b.jSelectsedDom = b.jSelectsedDom.addGroup(l)), !! h && "function" == typeof h && h(a, m, k.attachID)
	}, a
}), define("scripts/drawZhengFanMian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 310,
			height: 220
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawDaTuZhengFanMian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/UI_Dialog"),
		e = require("scripts/childDaTuZhengFanMian");
	return a.create = function(a, f, g) {
		if (g) {
			var i, h = c[a];
			b.setAppID(h[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(h[0]).appendTo(b.june).tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + h[2].pSrc + ")",
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: 990,
				height: 800
			}).attr("data-config", JSON.stringify(h[2])).attr("appID", h[2].appID).addClass(b.selectedVal), i = $(b.appParentCls + "[appID='" + h[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), f(a, h[2].appID)
		} else d.tDialogBaoBei(function(d, h, i, j) {
			var l, k, m, n, o, p, q, r;
			if (j.dialog("close"), $(".ui-tooltip").hide(), k = c[a], m = JSON.parse(h), n = JSON.parse(i), k[2] = $.extend({}, k[2], m), k[2].childConfig = [], k[2].autoSize = "yes", b.setAppID(k[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(k[0]).appendTo(b.june).tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + k[2].pSrc + ")",
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(k[2])).attr("appID", k[2].appID).addClass(b.selectedVal), l = $(b.appParentCls + "[appID='" + k[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(l), f(a, k[2].appID), o = n.slicePos.length, !g) {
				for (p = 0; o > p; p++) e.create("jbobChild", l, function(a, b, c) {
					var d = require("scripts/appManage");
					d.callback(a, b, c)
				}, !0, p, n, m.childConfig[p]);
				if (q = $(b.appParentCls + "[appID='" + k[2].appID + "']"), r = JSON.parse(q.attr("data-config")), r.childConfig && r.childConfig.length > 0) for (p = 0; p < r.childConfig.length; p++) b.setPopupContent(r.childConfig[p], !0, r.appID)
			}
		}, {
			styletype: "jbob"
		})
	}, a
}), define("scripts/childDaTuZhengFanMian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d, e, f, g, h, i) {
		var j, k, l, m, n, o, p, q, r, s;
		i = i || {}, h = h || {}, j = c["jbob"][1].tDynamic, k = $.extend({}, c["jbob"][1].tDynamicConfig, i), l = d.attr("appID"), m = JSON.parse(d.attr("data-config")), "submit" == f ? k = $.extend({}, k, g) : (b.setAttachID(k), m.childConfig.push(k)), d.attr("data-config", JSON.stringify(m)), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), h = h || {}, n = $.extend({}, {
			slicePos: [{
				top: 39,
				left: 823,
				width: 69,
				height: 49
			}, {
				top: 39,
				left: 906,
				width: 69,
				height: 49
			}, {
				top: 109,
				left: 0,
				width: 495,
				height: 332
			}, {
				top: 109,
				left: 495,
				width: 495,
				height: 332
			}, {
				top: 441,
				left: 0,
				width: 247,
				height: 359
			}, {
				top: 441,
				left: 247,
				width: 248,
				height: 359
			}, {
				top: 441,
				left: 495,
				width: 247,
				height: 359
			}, {
				top: 441,
				left: 742,
				width: 248,
				height: 359
			}]
		}, h), o = 0, p = 0, q = 100, r = 100, f && "submit" != f && (o = n.slicePos[g].left, p = n.slicePos[g].top, q = n.slicePos[g].width, r = n.slicePos[g].height), $(j).appendTo(d).tResize().css({
			left: o,
			top: p,
			width: q,
			height: r
		}).attr("attachID", k.attachID).attr("appID", l).addClass("t-app-jbocb"), s = $(b.appChildCls + "[attachID='" + k.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(s), e && e(a, l, k.attachID)
	}, a
}), define("scripts/drawWenZi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a],
			g = $.extend({}, e[2], b.qssetConfig);
		return b.setAppID(g), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html('<span class="jcbText">' + e[1].tContent + "</span>").appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 120,
			height: 24,
			fontSize: g.characterSize + "px",
			lineHeight: "24px",
			color: g.characterColor,
			fontWeight: g.characterWeight,
			textAlign: g.characterAlign,
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(g)).attr("appID", g.appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + g.appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d ? (d(a, g.appID), void 0) : $(b.appParentCls + "[appID='" + g.appID + "']")
	}, a
}), define("scripts/drawShiPin.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 480,
			height: 390
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), f.children("embed").css({
			width: "100%",
			height: "100%",
			src: e[2].videoSrc
		}), d(a, e[2].appID)
	}, a
}), define("scripts/drawWangWang.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize({
			tSwitch: !1
		}).css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), f.children(b.appOtherCls).css({
			top: 0,
			left: 0
		}), f.children(b.appOtherCls).height(f.height()), d(a, e[2].appID)
	}, a
}), define("scripts/drawWangGroup.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize({
			tSwitch: !1
		}).css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), f.children(b.appOtherCls).css({
			top: 0,
			left: 0
		}), f.children(b.appOtherCls).height(f.height()), d(a, e[2].appID)
	}, a
}), define("scripts/drawGuanZhu.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, g, h, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), g = 171, h = 155, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].attentionSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: g,
			height: h
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), f.children(b.appChildCls).tResize().css({
			color: e[2].numberColor,
			top: 120,
			left: 35,
			width: 100,
			height: 24,
			lineHeight: "24px",
			textAlign: "center"
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), d(a, e[2].appID)
	}, a
}), define("scripts/drawDaoJiShi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, g, h, i, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.setAttachID(e[2].childConfig[1]), b.setAttachID(e[2].childConfig[2]), b.setAttachID(e[2].childConfig[3]), g = 269, h = 116, i = 30, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: g,
			height: h
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), f.children(b.appChildCls).each(function(a) {
			var d = $(this),
				f = e[2].childConfig[a];
			$(d).tResize({
				tSwitch: !1
			}).css({
				top: 36,
				left: i,
				color: f.characterColor,
				fontSize: b.tParseInt(f.characterSize),
				fontWeight: f.characterWeight,
				fontFamily: f.characterFont,
				textAlign: "center",
				lineHeight: "normal"
			}).attr("appID", e[2].appID).attr("attachID", f.attachID), i += 62
		}), d(a, e[2].appID)
	}, a
}), define("scripts/drawDianNeiSouSuo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, g, h, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.setAttachID(e[2].childConfig[1]), b.setAttachID(e[2].childConfig[2]), b.setAttachID(e[2].childConfig[3]), b.setAttachID(e[2].childConfig[4]), g = 30, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].childConfig[0].searchSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 260,
			height: 36
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), h = 250, g = 0, f.children(b.appChildCls).each(function(a) {
			var d = $(this),
				f = e[2].childConfig[a],
				i = f.searchSrc;
			1 == a ? (h = 78, g = 182) : 2 == a ? (h = 160, g = 327, d.hide()) : 3 == a ? (h = 40, g = 373, d.hide()) : 4 == a && (h = 40, g = 447, d.hide(), i = e[2].childConfig[3].searchSrc), d.html(b.appMongolia).tResize().css({
				backgroundImage: "url(" + i + ")",
				top: 0,
				left: g,
				width: h,
				height: 36
			}).attr("appID", e[2].appID).attr("attachID", f.attachID), 0 == a && d.css({
				width: "100%",
				height: "100%",
				backgroundImage: "none",
				lineHeight: "33px",
				textIndent: "2px",
				zIndex: 98
			}).tResize("destory")
		}), d(a, e[2].appID)
	}, a
}), define("scripts/drawErWeiMa.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/tAjax");
	return a.create = function(a, e) {
		var g, f = c[a];
		d.ajaxText("getewm.php", {
			ewmUrl: f[2].ewmUrl,
			ewmSize: 90
		}, function(c) {
			b.setAppID(f[2]), c && "" != c && (f[2].ewmSrc = c), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(f[0]).appendTo(b.june).tResize().css({
				backgroundImage: "url(" + f[2].ewmSrc + ")",
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: 90,
				height: 90
			}).attr("data-config", JSON.stringify(f[2])).attr("appID", f[2].appID).addClass(b.selectedVal), g = $(b.appParentCls + "[appID='" + f[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), e(a, f[2].appID)
		})
	}, a
}), define("scripts/drawFenXiang.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].shareSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 61,
			height: 26
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawXiHuan.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 110,
			height: 20
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), f.children(".t-app-other").html('<div class="simple-like sns-widget sns-like sns-widget-ui"><div class="sns-like-wrap">   <a title="我的淘宝，大家一起赞！" class="dig-button J_Trigger">       <span class="dig-icon"><s class="J_Icon"></s></span>       <span class="dig-button-title">喜欢</span>   </a>   <span class="dig-count">       <i class="c">(</i>       <span class="J_Counter">5678</span>       <i class="c">)</i>   </span>   <div class="tb-dig-tip hide">       <div class="tip-content"></div>       <s class="arrow"></s>   </div></div></div><div class="jjzz"></div>'), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawDongTaiHaiBao.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 1920,
			height: 750
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), f.children(".t-app-other:eq(0)").html('<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:url(' + e[2].sliderSrc[0] + ") no-repeat " + e[2].sliderImgBgp[0] + ';"></div>'), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawTuPianLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/UI_Dialog"),
		d = b.appConfig;
	return a.create = function(a, e, f) {
		if (f) {
			var h, g = d[a];
			b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), h = $(b.appParentCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(h), b.setAttachID(g[2].childConfig[0]), h.children(b.appChildCls + "[data-attachType='jsdbOArrow']").tResize({
				tSwitch: !1
			}).attr("appID", g[2].appID).attr("attachID", g[2].childConfig[0].attachID), b.setAttachID(g[2].childConfig[0]), h.children(b.appChildCls + "[data-attachType='jsdbTArrow']").tResize({
				tSwitch: !1
			}).attr("appID", g[2].appID).attr("attachID", g[2].childConfig[0].attachID), e(a, g[2].appID)
		} else c.tDialogBaoBei(function(c, f, g, h) {
			var j, i, k, l, m, n, o;
			for (h.dialog("close"), $(".ui-tooltip").hide(), i = d[a], k = JSON.parse(f || "{}"), l = JSON.parse(g || "{}"), i[2] = $.extend({}, i[2], k), m = 0; m < i[2].sliderHref; m++) i[2].sliderHref[m] = "#";
			l = l || {}, n = $.extend({}, {
				width: 500,
				height: 350,
				oArrowTop: 290,
				oArrowLeft: 380,
				oArrowWidth: 48,
				oArrowHeight: 48,
				tArrowTop: 290,
				tArrowLeft: 440,
				tArrowWidth: 48,
				tArrowHeight: 48
			}, l), o = i[2].sliderSrc, b.setAppID(i[2]), b.setAttachID(i[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(i[0]).html(i[1].tContent).appendTo(b.june).tResize().css({
				backgroundImage: "url(" + o[0] + ")",
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).addClass(b.selectedVal), j = $(b.appParentCls + "[appID='" + i[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), b.setAttachID(i[2].childConfig[0]), j.children(b.appChildCls + "[data-attachType='jsdbOArrow']").tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + i[2].childConfig[0].oSrc + ")",
				top: n.oArrowTop,
				left: n.oArrowLeft,
				width: n.oArrowWidth,
				height: n.oArrowHeight
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), b.setAttachID(i[2].childConfig[0]), j.children(b.appChildCls + "[data-attachType='jsdbTArrow']").tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + i[2].childConfig[0].tSrc + ")",
				top: n.tArrowTop,
				left: n.tArrowLeft,
				width: n.tArrowWidth,
				height: n.tArrowHeight
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), e(a, i[2].appID)
		}, {
			styletype: "jsdb"
		})
	}, a
}), define("scripts/drawWuFengLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var g, h, i, j, k, l, m, n, e = c[a],
			f = e[2].sliderSrc;
		for (b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), h = "", i = 0; i < e[2].contentType.length; i++) h += e[1].tDynamic;
		for ($(e[0]).html(e[1].tContent + h).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 975,
			height: 484
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), g = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), g.children(b.appOtherCls).append('<div style="width:9999999px;height:100%;"></div>'), i = 0; i < f.length; i++) j = i % f.length, g.children(b.appOtherCls).children("div").append('<div style="display:block;float:left;width:325px;height:100%;background:url(' + f[j] + ') center center no-repeat;"></div>');
		k = g.children(b.appChildCls + "[data-attachType='jwfbSmallImg']"), l = g.children(b.appChildCls + "[data-attachType='jwfbOArrow']"), m = g.children(b.appChildCls + "[data-attachType='jwfbTArrow']"), n = 455, k.each(function() {
			b.setAttachID(e[2].childConfig[0]), $(this).css({
				top: 465,
				left: n,
				width: 15,
				height: 15,
				zIndex: 101
			}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), $(this).html(b.appMongolia + '<div class="t-jwfb-circle" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; text-align: center; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%; background-color: rgb(255, 255, 255);"></div>').tResize(), n += 25
		}), b.setAttachID(e[2].childConfig[0]), l.tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].oSrc + ")",
			top: 202,
			left: 0,
			width: 41,
			height: 69
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), b.setAttachID(e[2].childConfig[0]), m.tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].tSrc + ")",
			top: 202,
			left: 935,
			width: 41,
			height: 69
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), "customContent" == e[2].contentType[0] && (g.css({
			backgroundImage: ""
		}), g.children(b.appOtherCls).html(e[2].customContent[0])), "yes" != e[2].sliderArrow ? (l.hide(), l.hide()) : (l.show(), l.show()), d(a, e[2].appID)
	}, a
}), define("scripts/drawQianTaoLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var g, h, i, j, k, e = c[a],
			f = e[2].nestConfig;
		for (b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tDynamic + e[1].tDynamic + e[1].tDynamic + e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 990,
			height: 420
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), g = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), h = 0; h < f.length; h++) i = "background:url(" + f[h].sliderSrc[0] + ") no-repeat center center;", g.children(b.appOtherCls).append('<div style="position:absolute;width:100%;height:100%;' + i + '"></div>');
		j = 386, k = 918, g.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").each(function(a) {
			b.setAttachID(e[2].childConfig[0]), $(this).tResize().css({
				top: j,
				left: k,
				width: 21,
				height: 25,
				zIndex: 101
			}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), $(this).children("img").attr({
				width: "100%",
				height: "100%",
				src: e[2].smallImgSrc[a]
			}), k += 21, $(b.appMongolia).prependTo($(this))
		}), b.setAttachID(e[2].childConfig[0]), g.children(b.appChildCls + "[data-attachType='jqtbOArrow']").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].oSrc + ")",
			top: 175,
			left: 0,
			width: 41,
			height: 69,
			zIndex: 103
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), b.setAttachID(e[2].childConfig[0]), g.children(b.appChildCls + "[data-attachType='jqtbTArrow']").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].tSrc + ")",
			top: 175,
			left: 949,
			width: 41,
			height: 69,
			zIndex: 103
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), d(a, e[2].appID)
	}, a
}), define("scripts/drawJiaoDianLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/UI_Dialog"),
		d = b.appConfig;
	return a.create = function(a, e, f) {
		var i, g, j, k;
		f ? (g = d[a], g[2].sliderSrc, b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), i = $(b.appParentCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), j = i.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), k = i.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), b.setAttachID(g[2].childConfig[0]), j.tResize({
			tSwitch: !1
		}).attr("attachID", g[2].childConfig[0].attachID).css({
			zIndex: 103
		}), b.setAttachID(g[2].childConfig[0]), k.tResize({
			tSwitch: !1
		}).attr("attachID", g[2].childConfig[0].attachID).css({
			zIndex: 103
		}), e(a, g[2].appID)) : c.tDialogBaoBei(function(c, f, g, h) {
			var j, i, k, l, m, n, o, p, q, r, s, t, u;
			for (h.dialog("close"), $(".ui-tooltip").hide(), i = d[a], k = JSON.parse(f), l = JSON.parse(g), i[2] = $.extend({}, i[2], k), m = 0; m < i[2].sliderHref; m++) i[2].sliderHref[m] = "#";
			for (i[2].childConfig[0].autoSize = "yes", i[2].childConfig[0].autoSize1 = "yes", l = l || {}, n = $.extend({}, {
				width: 550,
				height: 360,
				smallPos: [{
					top: 0,
					left: 550,
					width: 120,
					height: 120
				}, {
					top: 120,
					left: 550,
					width: 120,
					height: 120
				}, {
					top: 240,
					left: 550,
					width: 120,
					height: 120
				}],
				oArrowTop: 290,
				oArrowLeft: 380,
				oArrowWidth: 48,
				oArrowHeight: 48,
				tArrowTop: 290,
				tArrowLeft: 440,
				tArrowWidth: 48,
				tArrowHeight: 48
			}, l), b.setAppID(i[2]), o = i[2].sliderSrc, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), p = "", q = 0, r = 0, m = 0; m < n.smallPos.length; m++) p += i[1].tDynamic, q > n.smallPos[m].left && (q = n.smallPos[m].left), r > n.smallPos[m].top && (r = n.smallPos[m].top);
			q > n.oArrowLeft && (q = n.oArrowLeft), r > n.oArrowTop && (r = n.oArrowTop), q > n.tArrowLeft && (q = n.tArrowLeft), r > n.tArrowTop && (r = n.tArrowTop), $(i[0]).html(i[1].tContent + p).appendTo(b.june).tResize().css({
				backgroundImage: "url(" + o[0] + ")",
				left: 0 - q + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 - r + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).attr("data-styleID", c).addClass(b.selectedVal), j = $(b.appParentCls + "[appID='" + i[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), s = j.children(b.appChildCls + "[data-attachType='jfsbSmallImg']"), t = j.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), u = j.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), s.each(function(a) {
				tempSrc = "imgContent" == i[2].contentType[a] ? "" != i[2].smallImgSrcT[a] ? i[2].smallImgSrcT[a] : "" != i[2].smallHoverSrcT[a] ? i[2].smallHoverSrcT[a] : i[2].sliderSrc[a] : "" != i[2].smallImgSrc[a] ? i[2].smallImgSrc[a] : "" != i[2].smallHoverSrc[a] ? i[2].smallHoverSrc[a] : i[2].sliderSrc[a], b.setAttachID(i[2].childConfig[0]), $(this).tResize().css({
					top: n.smallPos[a].top,
					left: n.smallPos[a].left,
					width: n.smallPos[a].width,
					height: n.smallPos[a].height,
					zIndex: 101
				}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), $(this).children("img").attr({
					width: "100%",
					height: "100%",
					src: tempSrc
				}), $(b.appMongolia).prependTo($(this))
			}), b.setAttachID(i[2].childConfig[0]), t.tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + i[2].childConfig[0].oSrc + ")",
				top: n.oArrowTop || 0,
				left: n.oArrowLeft || 0,
				width: n.oArrowWidth,
				height: n.oArrowHeight,
				zIndex: 103
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), b.setAttachID(i[2].childConfig[0]), u.tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + i[2].childConfig[0].tSrc + ")",
				top: n.tArrowTop || 0,
				left: n.tArrowLeft || 0,
				width: n.tArrowWidth,
				height: n.tArrowHeight,
				zIndex: 103
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), "customContent" == i[2].contentType[0] && (j.css({
				backgroundImage: ""
			}), j.children(b.appOtherCls).html(i[2].customContent[0])), "yes" != i[2].sliderArrow ? (t.hide(), u.hide()) : (t.show(), u.show()), e(a, i[2].appID)
		}, {
			styletype: "jfsb"
		})
	}, a
}), define("scripts/drawFanYeLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/UI_Dialog"),
		d = b.appConfig;
	return a.create = function(a, e, f) {
		var i, g, j, k;
		f ? (g = d[a], g[2].sliderSrc, b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), i = $(b.appParentCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), j = i.children(b.appChildCls + "[data-attachType='jfybOArrow']"), k = i.children(b.appChildCls + "[data-attachType='jfybTArrow']"), b.setAttachID(g[2].childConfig[0]), j.tResize({
			tSwitch: !1
		}).attr("attachID", g[2].childConfig[0].attachID), b.setAttachID(g[2].childConfig[0]), k.tResize({
			tSwitch: !1
		}).attr("attachID", g[2].childConfig[0].attachID), e(a, g[2].appID)) : c.tDialogBaoBei(function(c, f, g, h) {
			var j, i, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
			for (h.dialog("close"), $(".ui-tooltip").hide(), c = 0, i = d[a], k = JSON.parse(f || "{}"), l = JSON.parse(g || "{}"), i[2] = $.extend({}, i[2], k), m = 0; m < i[2].sliderHref; m++) i[2].sliderHref[m] = "#";
			for (i[2].childConfig[0].autoSize = "yes", i[2].childConfig[0].autoSize1 = "yes", l = l || {}, n = $.extend({}, {
				width: 580,
				height: 360,
				smallLen: 4,
				smallWidth: 120,
				smallHeight: 120,
				panelTop: 360,
				panelLeft: 50,
				panelWidth: 480,
				panelHeight: 120,
				oArrowTop: 360,
				oArrowLeft: 0,
				oArrowWidth: 48,
				oArrowHeight: 48,
				tArrowTop: 360,
				tArrowLeft: 532,
				tArrowWidth: 48,
				tArrowHeight: 48
			}, l), b.setAppID(i[2]), o = i[2].sliderSrc, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), p = "", q = 0, r = 0, m = 0; m < n.smallLen; m++) p += i[1].tDynamic;
			q > n.panelLeft && (q = n.panelLeft), r > n.panelTop && (r = n.panelTop), q > n.oArrowLeft && (q = n.oArrowLeft), r > n.oArrowTop && (r = n.oArrowTop), q > n.tArrowLeft && (q = n.tArrowLeft), r > n.tArrowTop && (r = n.tArrowTop), $(i[0]).html(i[1].tContent).appendTo(b.june).tResize().css({
				backgroundImage: "url(" + o[0] + ")",
				left: 0 - q + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 - r + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).attr("data-styleID", c).addClass(b.selectedVal), j = $(b.appParentCls + "[appID='" + i[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), s = j.children(b.appChildCls + "[data-attachType='jfybOArrow']"), t = j.children(b.appChildCls + "[data-attachType='jfybTArrow']"), u = j.children(b.appChildCls + "[data-attachType='jfybPanel']"), b.setAttachID(i[2].childConfig[0]), u.html(p).tResize().css({
				top: n.panelTop || 0,
				left: n.panelLeft || 0,
				width: n.panelWidth,
				height: n.panelHeight,
				"float": "left",
				whiteSpace: "nowrap"
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID).attr("data-posConfig", "{}"), v = "inline-block", w = "marginRight", "scrolly" == i[2].smallSliderMode && (v = "block", w = "marginBottom"), x = u.children(b.appOtherCls + "[data-attachType='jfybSmallImg']"), JSON.parse(u.attr("data-posConfig") || "{}"), x.each(function(a) {
				var d = $(this);
				tempSrc = "imgContent" == i[2].contentType[a] ? "" != i[2].smallImgSrcT[a] ? i[2].smallImgSrcT[a] : "" != i[2].smallHoverSrcT[a] ? i[2].smallHoverSrcT[a] : i[2].sliderSrc[a] : "" != i[2].smallImgSrc[a] ? i[2].smallImgSrc[a] : "" != i[2].smallHoverSrc[a] ? i[2].smallHoverSrc[a] : i[2].sliderSrc[a], b.setAttachID(i[2].childConfig[0]), d.css({
					display: "inline-block",
					width: n.smallWidth,
					height: n.smallHeight,
					display: v
				}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), d.css(w, b.tParseInt(i[2].smallSliderSpace)), d.children("img").attr({
					width: "100%",
					height: "100%",
					src: tempSrc
				})
			}), b.setAttachID(i[2].childConfig[0]), s.tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + i[2].childConfig[0].oSrc + ")",
				top: n.oArrowTop || 0,
				left: n.oArrowLeft || 0,
				width: n.oArrowWidth,
				height: n.oArrowHeight
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), b.setAttachID(i[2].childConfig[0]), t.tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + i[2].childConfig[0].tSrc + ")",
				top: n.tArrowTop || 0,
				left: n.tArrowLeft || 0,
				width: n.tArrowWidth,
				height: n.tArrowHeight
			}).attr("appID", i[2].appID).attr("attachID", i[2].childConfig[0].attachID), "customContent" == i[2].contentType[0] && (j.css({
				backgroundImage: ""
			}), j.children(b.appOtherCls).html(i[2].customContent[0])), e(a, i[2].appID)
		}, {
			styletype: "jfyb"
		})
	}, a
}), define("scripts/drawTeXiaoCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/childTeXiaoZiCeng");
	return a.create = function(a, e, f) {
		var h, g = c[a];
		b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + g[2].pSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 390,
			height: 490
		}).attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), h = $(b.appParentCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(h), e(a, g[2].appID), "e6db" != $[b.g[15]](g[2]["pSrc"]) && b.june.children().attr("data-dblType", "jspb"), f || d.create("jspbChild", h, function(a, b, c) {
			var d = require("scripts/appManage");
			d.callback(a, b, c)
		}, !0)
	}, a
}), define("scripts/childTeXiaoZiCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d, e, f, g) {
		var h = c["jspb"][1].tDynamic,
			i = c["jspb"][1].tDynamicConfig,
			j = d.attr("appID"),
			k = JSON.parse(d.attr("data-config"));
		f ? (i.css3ModeY = "june-box-dy40", i.displayMode = "june-box-fadein") : (i.css3ModeY = "", i.displayMode = ""), g ? i = $.extend(!0, {}, i, g) : (b.setAttachID(i), k.childConfig.push(i), d.attr("data-config", JSON.stringify(k))), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(h).appendTo(d).tResize().css({
			backgroundImage: "url(" + i.pSrc + ")",
			left: 0,
			top: 0,
			width: 332,
			height: 89
		}).attr("attachID", i.attachID).attr("appID", j), $(b.appChildCls + "[attachID='" + i.attachID + "']"), f && $(b.appChildCls + "[attachID='" + i.attachID + "']").css({
			top: 331,
			left: 30
		}), e && e(a, j, i.attachID), f ? b.chooseLayer(j) : b.chooseLayer(j, !1, i.attachID)
	}, a
}), define("scripts/drawTanChuCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.jpbLeft > b.june.width() && (b.jpbLeft = 0, b.jpbTop += 60), $(e[0]).appendTo(b.june).tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(http://img03.taobaocdn.com/imgextra/i3/39767794/TB2HykXapXXXXaLXXXXXXXXXXXX_!!39767794.png)",
			left: b.jpbLeft + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: b.jpbTop + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 50,
			height: 50
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), b.jpbLeft < 1200 ? b.jpbLeft += 60 : (b.jpbLeft = 0, b.jpbTop += 60), d(a, e[2].appID)
	}, a
}), define("scripts/drawZheZhaoCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, g, h, i, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.setAttachID(e[2].childConfig[1]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].zzcSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 787,
			height: 118
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), g = f.children(b.appChildCls + "[data-attachType='jzzbAttention']"), h = f.children(b.appChildCls + "[data-attachType='jzzbCountNumber']"), i = f.children(b.appChildCls + "[data-attachType='jzzbCountText']"), g.tResize().css({
			backgroundImage: "url(" + e[2].childConfig[0].zzcAttentionSrc + ")",
			top: 46,
			left: 261,
			width: 100,
			height: 24
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), h.tResize({
			tSwitch: !1
		}).css({
			top: 46,
			left: 371
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[1].attachID).hide(), b.setAttachID(e[2].childConfig[0]), i.tResize({
			tSwitch: !1
		}).css({
			top: 46,
			left: 391
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID).hide(), f.children(b.appOtherCls + ":eq(0)").html(e[2].customHtml), f.children(b.appOtherCls + ":eq(1)").css({
			position: "absolute",
			top: 0,
			left: 0,
			backgroundImage: "url(" + e[2].zzcSrc + ")",
			width: "100%",
			height: "100%"
		}), d(a, e[2].appID)
	}, a
}), define("scripts/drawGouWuChe.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 90,
			height: 23
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawShouCang.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			width: 83,
			height: 27,
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawMaoDian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a],
			g = b.setAppID(e[2]);
		b.setAnchorName(e[2], g), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(http://junezx.com/new/images/md.png)",
			left: b.jmdbLeft + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: b.jmdbTop + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 24,
			height: 24
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), b.jmdbLeft < 1200 ? b.jmdbLeft += 40 : (b.jmdbLeft = 0, b.jmdbTop += 40), d(a, e[2].appID)
	}, a
}), define("scripts/drawKeGuanBiCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 240,
			height: 330
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), f.children(b.appChildCls + ":eq(0)").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].showBtnSrc + ")",
			top: 0,
			left: 0,
			width: 38,
			height: 38
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), b.setAttachID(e[2].childConfig[0]), f.children(b.appChildCls + ":eq(1)").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].hideBtnSrc + ")",
			top: 0,
			left: 0,
			width: 38,
			height: 38
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), d(a, e[2].appID)
	}, a
}), define("scripts/drawGunDongWenZi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 240,
			height: 24,
			lineHeight: "24px",
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawKaiGuanDeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/UI_Dialog"),
		e = require("scripts/childKaiGuanDengTuPian");
	return a.create = function(a, f) {
		var g = c[a];
		d.tDialogLightSwitch(function(c, d) {
			var i, h, j, k, l;
			if (c = b.tParseInt(c), !c || "" == c) return d.dialog("close"), $(".ui-tooltip").hide(), void 0;
			if (c > 20) return b.tMessage("抱歉，图片数量不能超过20个！"), d.dialog("close"), $(".ui-tooltip").hide(), void 0;
			for (h = Math.ceil(c / 4), b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().css({
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: 990,
				height: 335 * h + 6
			}).attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), i = $(b.appParentCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), f(a, g[2].appID), j = 6, k = 6, l = 0; c > l; l++) e.createAuto("jkgbChild", i, k, j, null, function(a, b, c) {
				var d = require("scripts/appManage");
				d.callback("jkgbChild", b, c)
			}), k += 246, 3 == l % 4 && (k = 6, j += 335);
			d.dialog("close"), $(".ui-tooltip").hide()
		})
	}, a
}), define("scripts/childKaiGuanDengTuPian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d, e, f) {
		var k, g = c["jkgb"][1].tDynamic,
			h = c["jkgb"][1].tDynamicConfig,
			i = d.attr("appID"),
			j = JSON.parse(d.attr("data-config"));
		f ? h = $.extend({}, h, f) : (b.setAttachID(h), j.childConfig.push(h)), d.attr("data-config", JSON.stringify(j)), iWidth = 240, iHeight = 329, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g).appendTo(d).tResize().css({
			backgroundImage: "url(" + h.pSrc + ")",
			left: 0,
			top: 0,
			width: iWidth,
			height: iHeight
		}).attr("attachID", h.attachID).attr("appID", i).addClass("t-app-jkgb").addClass(b.selectedVal), k = $(b.appChildCls + "[attachID='" + h.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(k), e(a, i, h.attachID)
	}, a.createAuto = function(a, d, e, f, g, h) {
		var k, m, n, i = c["jkgb"][1].tDynamic,
			j = c["jkgb"][1].tDynamicConfig,
			l = d.attr("appID");
		g ? (m = $.extend(!0, j, g), n = JSON.parse(d.attr("data-config")), g.attachID && "" != g.attachID || b.setAttachID(m), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(i).appendTo(d).tResize().css({
			backgroundImage: "url(" + m.pSrc + ")",
			backgroundColor: m.bgColor || "none",
			left: e,
			top: f,
			width: m.width,
			height: m.height
		}).attr("attachID", m.attachID).attr("appID", l).addClass(b.selectedVal), k = $(b.appChildCls + "[attachID='" + m.attachID + "']"), g.contentMode && "customContent" == g.contentMode && k.html(g.customContent || "").css({
			background: "none"
		}).tResize(), b.jSelectsedDom = b.jSelectsedDom.addGroup(k), delete m.width, delete m.height, delete m.left, delete m.top, n.childConfig.push(m), d.attr("data-config", JSON.stringify(n))) : (n = JSON.parse(d.attr("data-config")), b.setAttachID(j), n.childConfig.push(j), d.attr("data-config", JSON.stringify(n)), iWidth = 240, iHeight = 329, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(i).appendTo(d).tResize().css({
			backgroundImage: "url(" + j.pSrc + ")",
			left: e,
			top: f,
			width: iWidth,
			height: iHeight
		}).attr("attachID", j.attachID).attr("appID", l).addClass(b.selectedVal), k = $(b.appChildCls + "[attachID='" + j.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(k)), !! h && "function" == typeof h && h(a, l, j.attachID)
	}, a
}), define("scripts/drawDianPuFenLei.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/UI_Dialog"),
		e = require("scripts/tAjax");
	return a.create = function(f, g, h) {
		if (h) {
			var j, i = c[f];
			b.setAppID(i[2]), $(i[0]).appendTo(b.june).tResize({
				tSwitch: !1
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).css({
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0
			}), j = $(b.appParentCls + "[appID='" + i[2].appID + "']"), j.attr("data-catsConfig", "[]"), j.attr("data-formatName", i[2].formatName), j.attr("data-catsAttachConfig", "{}"), g(f, i[2].appID)
		} else d.tDialogBaoBeiForNextStep(function(h, i) {
			d.tDialogShopCategory1(function(h) {
				var k, j, l, m, o, n;
				if ("juneappcategory" != h) {
					if ("" == h) return b.tMessage("请填写您的店铺地址或店内任意一个宝贝地址，我们将自动获取分类！"), void 0;
					j = h.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), j && j.length > 0 && (k = j[0].replace(/(\?|\&)id\=/g, "")), l = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/, m = l.exec(h), m && m[0] && (h = m[0]), k && (h += "/item.htm?id=" + k)
				}
				n = c[f], e.ajaxJsonT("gcc.php", {
					url: h
				}, function(c) {
					var e, j;
					c.ret[0].indexOf("SUCCESS") >= 0 ? (e = c.data.cats, j = JSON.parse(i), n[2] = $.extend({}, n[2], j), b.setAppID(n[2]), n[2].catsArray = [], "/" != h.substr(-1) && (h += "/"), h = "http://" + h.replace(/http\:\/\//g, ""), n[2].shopHref = h, $(n[0]).appendTo(b.june).tResize({
						tSwitch: !1
					}).attr("data-config", JSON.stringify(n[2])).attr("appID", n[2].appID).css({
						left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
						top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0
					}), o = $(b.appParentCls + "[appID='" + n[2].appID + "']"), o.attr("data-catsConfig", JSON.stringify(e)), o.attr("data-formatName", n[2].formatName), o.attr("data-catsAttachConfig", "{}"), o.attr("data-shopHref", h), d.tDialogShopCategory2(function(c, d) {
						var e, h, i, j, k, l, m, p, q, r;
						if (!c || 0 == c.length) return b.tMessage("请选择分类，至少选择一个！"), void 0;
						for (d.dialog("close"), $(".ui-tooltip").hide(), n[2].catsArray = [], a.getFormatPos("init", n[2]), m = 0; m < c.length; m++) if (c[m] && (cLeft = 0, e = c[m].name, h = c[m].id, i = c[m].subCats, a.creatChild(o, h, e), i && i.length > 0)) for (p = 0; p < i.length; p++) i[p] && (j = i[p].name, k = i[p].id, a.creatChild(o, k, j, !0));
						l = a.getFormatPos("maxGet"), o.width(l.width).height(l.height), q = o.children(b.appChildCls + ".jsfbchilda"), r = o.children(b.appChildCls + ".jsfbchildb"), q.css({
							backgroundColor: RGBToHex(n[2].characterBgColor, ""),
							fontSize: n[2].characterSize + "px",
							color: n[2].characterColor,
							fontWeight: n[2].characterWeight,
							fontFamily: n[2].characterFont,
							textAlign: n[2].characterAlign
						}), r.css({
							backgroundColor: RGBToHex(n[2].characterBgColor1, ""),
							fontSize: n[2].characterSize1 + "px",
							color: n[2].characterColor1,
							fontWeight: n[2].characterWeight1,
							fontFamily: n[2].characterFont1,
							textAlign: n[2].characterAlign1
						}), n[2].catsSpace && "" != n[2].catsSpace && ("left" == n[2].characterAlign ? (q.css({
							backgroundPosition: "top left"
						}), q.children(".jsfbText").css({
							paddingLeft: n[2].catsSpace + "px",
							right: "-" + n[2].catsSpace + "px"
						})) : "right" == n[2].characterAlign && (q.css({
							backgroundPosition: "top right"
						}), q.children(".jsfbText").css({
							paddingRight: n[2].catsSpace + "px",
							left: "-" + n[2].catsSpace + "px"
						}))), n[2].catsSpace1 && "" != n[2].catsSpace1 && ("left" == n[2].characterAlign1 ? (r.css({
							backgroundPosition: "top left"
						}), r.children(".jsfbText").css({
							paddingLeft: n[2].catsSpace1 + "px",
							right: "-" + n[2].catsSpace1 + "px"
						})) : "right" == n[2].characterAlign1 && (r.css({
							backgroundPosition: "top right"
						}), r.children(".jsfbText").css({
							paddingRight: n[2].catsSpace1 + "px",
							left: "-" + n[2].catsSpace1 + "px"
						}))), checkUrl(n[2].characterBgSrc) ? q.css({
							backgroundImage: "url(" + n[2].characterBgSrc + ")"
						}) : q.css({
							backgroundImage: "none"
						}), checkUrl(n[2].characterBgSrc1) ? r.css({
							backgroundImage: "url(" + n[2].characterBgSrc1 + ")"
						}) : r.css({
							backgroundImage: "none"
						}), b.jsfbCCT = !0, g(f, n[2].appID)
					}, {
						catsPost: e
					})) : b.tMessage("获取店铺分类失败，请更换地址（宝贝详情、店铺首页）重试，如仍然获取失败，请等待20分钟后再次尝试！")
				})
			})
		}, {
			styletype: "jsfb"
		}, "下一步")
	}, a.creatChild = function(d, e, f, g) {
		var o, p, q, r, h = c["jsfb"][1].tDynamic,
			i = $.extend({}, c["jsfb"][1].tDynamicConfig),
			j = d.attr("appID"),
			k = JSON.parse(d.attr("data-config")),
			m = JSON.parse(d.attr("data-catsAttachConfig") || "{}"),
			n = a.getFormatPos("posGet", k, g);
		return $.inArray(e, k.catsArray) < 0 && k.catsArray.push(e), g ? (o = k.subCatsWidth || 0, p = k.subCatsHeight || 0) : (o = k.catsWidth || 0, p = k.catsHeight || 0), m[e] ? (d.attr("data-config", JSON.stringify(k)), q = m[e], r = d.children(b.appChildCls + "[attachID='" + q + "']"), r.length > 0 && r.css({
			left: n.left,
			top: n.top,
			width: o,
			height: p,
			lineHeight: p + "px",
			overflow: "hidden"
		}).show().removeClass("jsfbchildd")) : (b.setAttachID(i), m[e] = i.attachID, d.attr("data-catsAttachConfig", JSON.stringify(m)), i.hrefID = e, i.href = d.attr("data-shopHref") + "category-" + e + ".htm", i.characterContent = f, d.attr("data-config", JSON.stringify(k)), g ? (i.catsType = "b", i.hrefMode = k.hrefMode1, i.characterBgSrc = k.characterBgSrc1, i.characterBgSrcHover = k.characterBgSrcHover1, i.characterAlign = k.characterAlign1, i.characterSize = k.characterSize1, i.characterWeight = k.characterWeight1, i.characterFont = k.characterFont1, i.characterColor = k.characterColor1, i.characterBgColor = k.characterBgColor1, i.characterDash = k.characterDash1, i.characterHoverMode = k.characterHoverMode1, i.characterHoverSpeed = k.characterHoverSpeed1, i.characterSizeHover = k.characterSizeHover1, i.characterWeightHover = k.characterWeightHover1, i.characterFontHover = k.characterFontHover1, i.characterColorHover = k.characterColorHover1, i.characterBgColorHover = k.characterBgColorHover1, i.characterUnderLine = k.characterUnderLine1, i.characterUnderLineStyle = k.characterUnderLineStyle1, i.characterUnderLineWeight = k.characterUnderLineWeight1, i.characterUnderLineColor = k.characterUnderLineColor1, i.catsSpace = k.catsSpace1) : (!i.catsType && (i.catsType = "a"), i.hrefMode = k.hrefMode, i.characterBgSrc = k.characterBgSrc, i.characterBgSrcHover = k.characterBgSrcHover, i.characterAlign = k.characterAlign, i.characterSize = k.characterSize, i.characterWeight = k.characterWeight, i.characterFont = k.characterFont, i.characterColor = k.characterColor, i.characterBgColor = k.characterBgColor, i.characterDash = k.characterDash, i.characterHoverMode = k.characterHoverMode, i.characterHoverSpeed = k.characterHoverSpeed, i.characterSizeHover = k.characterSizeHover, i.characterWeightHover = k.characterWeightHover, i.characterFontHover = k.characterFontHover, i.characterColorHover = k.characterColorHover, i.characterBgColorHover = k.characterBgColorHover, i.characterUnderLine = k.characterUnderLine, i.characterUnderLineStyle = k.characterUnderLineStyle, i.characterUnderLineWeight = k.characterUnderLineWeight, i.characterUnderLineColor = k.characterUnderLineColor, i.catsSpace = k.catsSpace), $(h).html('<span class="jsfbText">' + f + "</span>").appendTo(d).css({
			left: n.left,
			top: n.top,
			width: o,
			height: p,
			lineHeight: p + "px",
			overflow: "hidden"
		}).attr("data-attachConfig", JSON.stringify(i)).attr("appID", j).attr("attachID", i.attachID).addClass("jsfbchild" + i.catsType), r = d.children(b.appChildCls + "[attachID='" + i.attachID + "']")), r
	}, a.getFormatPos = function(a, c, d) {
		var e, f;
		if ("init" == a) b.formatPos = {
			width: 0,
			height: 0,
			left: 0,
			top: 0,
			times: 0,
			subTimes: 0,
			tempTimes: 0,
			tempConfig: $.extend({}, c)
		}, b.toClear(b.formatPos.tempConfig);
		else if ("posGet" == a) {
			if (e = b.formatPos, f = e.tempConfig, "hb1" == f.formatName) return d ? (e.left = f.catsWidth + e.subTimes * f.subCatsWidth, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = 0, e.top = e.times * f.catsHeight, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, e.subTimes = 0), e;
			if ("hb2" == f.formatName) return d ? (e.left = f.catsWidth + (e.times - 1) * (f.catsWidth + f.subCatsWidth) - e.tempTimes * f.subCatsWidth, e.top = e.subTimes * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.times > 0 && 0 == e.subTimes && e.tempTimes++, e.left = e.times * (f.catsWidth + f.subCatsWidth) - e.tempTimes * f.subCatsWidth, e.top = 0, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, e.subTimes = 0), e;
			if ("hb3" == f.formatName) return d ? (e.left = f.catsWidth + Math.floor(e.subTimes / 2) * f.subCatsWidth, e.top = (e.times - 1) * f.catsHeight + e.subTimes % 2 * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = 0, e.top = e.times * f.catsHeight, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, e.subTimes = 0), e;
			if ("hb4" == f.formatName) return d ? (e.left = f.catsWidth + Math.floor(e.subTimes / 2) * f.subCatsWidth, e.top = (e.times - 1) * f.catsHeight + e.subTimes % 2 * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = 0, e.top = e.times * f.catsHeight, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, e.subTimes = 0), e;
			if ("sb1" == f.formatName) return d ? (e.left = 0, e.top = e.times * f.catsHeight + e.subTimes * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = 0, e.top = e.times * f.catsHeight + e.subTimes * f.subCatsHeight, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++), e;
			if ("sb2" == f.formatName) return d ? (e.left = e.subTimes % 2 * f.subCatsWidth, e.top = e.times * f.catsHeight + Math.floor(e.subTimes / 2) * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = 0, e.top = e.times * f.catsHeight + Math.ceil(e.subTimes / 2) * f.subCatsHeight, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, 1 == e.subTimes % 2 && e.subTimes++), e;
			if ("sb3" == f.formatName) return d ? (e.left = (e.times - 1) * f.catsWidth + e.subTimes % 2 * f.subCatsWidth, e.top = f.catsHeight + Math.floor(e.subTimes / 2) * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = e.times * f.catsWidth, e.top = 0, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, e.subTimes = 0), e;
			if ("sb4" == f.formatName) return d ? (e.left = (e.times - 1) * f.catsWidth, e.top = f.catsHeight + e.subTimes * f.subCatsHeight, e.width < e.left + f.subCatsWidth && (e.width = e.left + f.subCatsWidth), e.height < e.top + f.subCatsHeight && (e.height = e.top + f.subCatsHeight), e.subTimes++) : (e.left = e.times * f.catsWidth, e.top = 0, e.width < e.left + f.catsWidth && (e.width = e.left + f.catsWidth), e.height < e.top + f.catsHeight && (e.height = e.top + f.catsHeight), e.times++, e.subTimes = 0), e
		} else if ("maxGet" == a) return e = b.formatPos
	}, a
}), define("scripts/drawBaoBei.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/UI_Dialog"),
		e = require("scripts/childBaoBei");
	return a.create = function(a, f, g) {
		if (g) {
			var i, h = $.extend({}, c[a]),
				j = b.tParseInt(h[2].sWidth),
				k = b.tParseInt(h[2].sHeight),
				l = b.tParseInt(h[2].mHeight),
				m = b.tParseInt(h[2].itemCount),
				n = b.tParseInt(h[2].itemColumn),
				o = b.tParseInt(h[2].columnSpace),
				p = b.tParseInt(h[2].lineSpace),
				q = Math.ceil(m / n);
			b.setAppID(h[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(h[0]).appendTo(b.june).css({
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: (j + o) * n - o,
				height: (k + l + p) * q - p
			}).attr("data-config", JSON.stringify(h[2])).attr("appID", h[2].appID).addClass(b.selectedVal), i = $(b.appParentCls + "[appID='" + h[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), f(a, h[2].appID)
		} else d.tDialogBaoBei(function(d, h, i, j) {
			var l, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D;
			if (j.dialog("close"), $(".ui-tooltip").hide(), k = $.extend({}, c[a]), m = JSON.parse(h), n = JSON.parse(i), k[2] = $.extend({}, k[2], m), k[2].readVal = k[2].readVal.replace(/0/g, "1"), o = b.tParseInt(k[2].itemCount), p = [], q = [], o) {
				for (r = 0; o > r; r++) p.push(""), q.push(0);
				k[2].href = p.join(","), k[2].titleAuto = q.join(","), k[2].priceAuto = q.join(","), k[2]._priceAuto = q.join(","), k[2].saleAuto = q.join(",")
			}
			if (s = b.tParseInt(k[2].sWidth), t = b.tParseInt(k[2].sHeight), u = b.tParseInt(k[2].mHeight), v = b.tParseInt(k[2].itemCount), w = b.tParseInt(k[2].itemColumn), x = b.tParseInt(k[2].columnSpace), y = b.tParseInt(k[2].lineSpace), z = Math.ceil(v / w), b.setAppID(k[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(k[0]).appendTo(b.june).css({
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: (s + x) * w - x,
				height: (t + u + y) * z - y
			}).attr("data-config", JSON.stringify(k[2])).attr("appID", k[2].appID).attr("data-styleID", d).addClass(b.selectedVal), l = $(b.appParentCls + "[appID='" + k[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(l), !g) for (r = 0; v > r; r++) A = r % w, B = b.tParseInt(r / w), C = (s + x) * A, D = (t + u + y) * B, e.createAuto(a, l, C, D, r, n);
			f(a, k[2].appID)
		})
	}, a
}), define("scripts/childBaoBei.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/reckonAlign"),
		d = b.appConfig;
	return a.createAuto = function(a, e, f, g, h, i) {
		var p, q, r, s, t, u, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, Ab, Bb, yb, zb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, j = d["jib"][1].tDynamic,
			k = d["jib"][1].tDynamicConfig,
			l = e.attr("appID"),
			v = "https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg",
			w = "",
			x = "",
			y = "",
			z = "",
			A = "",
			B = "设置宝贝后，此处将显示宝贝标题",
			C = "",
			D = "99.99",
			E = "99.99",
			F = "9999",
			G = "",
			H = "",
			I = "",
			J = "",
			K = "",
			L = "",
			M = "",
			N = "",
			O = "",
			P = "",
			Q = JSON.parse(e.attr("data-config")),
			R = "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=41049717225&w=" + Q.erWeiMaSize + "&h=" + Q.erWeiMaSize;
		e.attr("data-config", JSON.stringify(Q)), $(j).appendTo(e).attr("appID", l), Q = b.toClear(Q), i = i || {}, S = $.extend({}, {
			attachIDArray: null,
			titleTop: 201,
			titleLeft: 1,
			subTitleTop: 201,
			subTitleLeft: 1,
			prefixTop: 243,
			prefixLeft: 3,
			priceTop: 243,
			priceLeft: 43,
			_prefixTop: 267,
			_prefixLeft: 3,
			_priceTop: 256,
			_priceLeft: 60,
			salePrefixTop: 243,
			salePrefixLeft: 60,
			saleTop: 243,
			saleLeft: 90,
			btnTop: 148,
			btnLeft: 175,
			btnWidth: 75,
			btnHeight: 25,
			btn1Top: 188,
			btn1Left: 175,
			btn1Width: 75,
			btn1Height: 25,
			btn2Top: 228,
			btn2Left: 175,
			btn2Width: 75,
			btn2Height: 25,
			subScriptTop: 48,
			subScriptLeft: 175,
			subScriptWidth: 90,
			subScriptHeight: 60,
			subScript1Top: 58,
			subScript1Left: 175,
			subScript1Width: 90,
			subScript1Height: 60,
			subScript2Top: 68,
			subScript2Left: 175,
			subScript2Width: 90,
			subScript2Height: 60,
			subScript3Top: 78,
			subScript3Left: 175,
			subScript3Width: 90,
			subScript3Height: 60,
			subScript4Top: 88,
			subScript4Left: 175,
			subScript4Width: 90,
			subScript4Height: 60,
			erWeiMaTop: 0,
			erWeiMaLeft: 0,
			expandTextTop: 48,
			expandTextLeft: 25,
			expandText1Top: 58,
			expandText1Left: 25,
			expandText2Top: 68,
			expandText2Left: 25,
			expandText3Top: 78,
			expandText3Left: 25,
			expandText4Top: 88,
			expandText4Left: 25
		}, i), T = e.children("[data-attachType='jibbg']:eq(" + h + ")"), U = e.children("[data-attachType='jibpanel']:eq(" + h + ")"), V = e.children("[data-attachType='jibtitle']:eq(" + h + ")"), W = e.children("[data-attachType='jibsubtitle']:eq(" + h + ")"), X = e.children("[data-attachType='jibprefix']:eq(" + h + ")"), Y = e.children("[data-attachType='jibprice']:eq(" + h + ")"), Z = e.children("[data-attachType='jibdiscountprefix']:eq(" + h + ")"), _ = e.children("[data-attachType='jibdiscountprice']:eq(" + h + ")"), ab = e.children("[data-attachType='jibsaleprefix']:eq(" + h + ")"), bb = e.children("[data-attachType='jibsale']:eq(" + h + ")"), cb = e.children("[data-attachType='jibbtn']:eq(" + h + ")"), db = e.children("[data-attachType='jibbtn1']:eq(" + h + ")"), eb = e.children("[data-attachType='jibbtn2']:eq(" + h + ")"), fb = e.children("[data-attachType='jibsubscript']:eq(" + h + ")"), gb = e.children("[data-attachType='jibsubscript1']:eq(" + h + ")"), hb = e.children("[data-attachType='jibsubscript2']:eq(" + h + ")"), ib = e.children("[data-attachType='jibsubscript3']:eq(" + h + ")"), jb = e.children("[data-attachType='jibsubscript4']:eq(" + h + ")"), kb = e.children("[data-attachType='jiberweima']:eq(" + h + ")"), lb = e.children("[data-attachType='jibexpandtext']:eq(" + h + ")"), mb = e.children("[data-attachType='jibexpandtext1']:eq(" + h + ")"), nb = e.children("[data-attachType='jibexpandtext2']:eq(" + h + ")"), ob = e.children("[data-attachType='jibexpandtext3']:eq(" + h + ")"), pb = e.children("[data-attachType='jibexpandtext4']:eq(" + h + ")"), qb = e.children("[data-attachType='jibprice']:eq(0)"), rb = e.children("[data-attachType='jibdiscountprice']:eq(0)"), sb = e.children("[data-attachType='jibsale']:eq(0)"), tb = e.children("[data-attachType='jibexpandtext']:not(:hidden):eq(0)"), ub = e.children("[data-attachType='jibexpandtext1']:not(:hidden):eq(0)"), vb = e.children("[data-attachType='jibexpandtext2']:not(:hidden):eq(0)"), wb = e.children("[data-attachType='jibexpandtext3']:not(:hidden):eq(0)"), xb = e.children("[data-attachType='jibexpandtext4']:not(:hidden):eq(0)"), yb = e.children(".jibBorderShadow:eq(" + h + ")"), zb = b.tParseInt(Q.borderWidth1), "" == Q.shadowLeft1 && (Q.shadowLeft1 = 0), "" == Q.shadowTop1 && (Q.shadowTop1 = 0), "" == Q.shadowBlur1 && (Q.shadowBlur1 = 0), "" == Q.shadowSize1 && (Q.shadowSize1 = 0), "hborder1" == Q.borderControl1 && (Ab = zb + "px solid " + RGBToHex(Q.borderColor1)), "shadowShow1" == Q.shadowControl1 && (Bb = Q.shadowLeft1 + "px " + Q.shadowTop1 + "px " + Q.shadowBlur1 + "px " + Q.shadowSize1 + "px " + Q.shadowColor1 + " " + Q.shadowStyle1), "hborder1" != Q.borderControl1 && (zb = 0), Q.panelPos && "right" == Q.panelPos ? (t = Q.sWidth + Q.mHeight, u = Q.sHeight, r = g, s = f + Q.sWidth, p = Q.mHeight, q = Q.sHeight) : (t = Q.sWidth, u = Q.sHeight + Q.mHeight, r = g + Q.sHeight, s = f, p = Q.sWidth, q = Q.mHeight), b.show() && (yb.css({
			width: t,
			height: u,
			top: g - zb,
			left: f - zb,
			border: Ab,
			boxShadow: Bb
		}), "hborder1" == Q.borderControl1 ? yb.css({
			borderRadius: Q.borderRadius1 + "px"
		}) : yb.css({
			borderRadius: "0 0 0 0"
		}), h > 0 && (V.addClass("j-fapp-hover"), W.addClass("j-fapp-hover"), X.addClass("j-fapp-hover"), Y.addClass("j-fapp-hover"), Z.addClass("j-fapp-hover"), _.addClass("j-fapp-hover"), ab.addClass("j-fapp-hover"), bb.addClass("j-fapp-hover"), lb.addClass("j-fapp-hover"), mb.addClass("j-fapp-hover"), nb.addClass("j-fapp-hover"), ob.addClass("j-fapp-hover"), pb.addClass("j-fapp-hover")), Cb = Q.pSrc.split(","), checkUrl(Cb[h]) && (v = Cb[h]), v.indexOf("_" + Q.pSrcSize + "x" + Q.pSrcSize + ".jpg") < 0 && "" != Q.pSrcSize && (v = v + "_" + Q.pSrcSize + "x" + Q.pSrcSize + ".jpg"), Db = "0 0", Q.mHeight && "" != Q.mHeight || (Db = Q.borderRadius1 + "px " + Q.borderRadius1 + "px"), T.css({
			backgroundImage: "url(" + v + ")",
			backgroundColor: RGBToHex(Q.itemBgColor, "transparent"),
			top: g,
			left: f,
			width: Q.sWidth,
			height: Q.sHeight
		}), "hborder1" == Q.borderControl1 ? T.css({
			borderRadius: Q.borderRadius1 + "px " + Q.borderRadius1 + "px " + Db
		}) : T.css({
			borderRadius: "0 0 0 0"
		}), 0 == h ? T.tResize({
			tHandles: "e,s,se"
		}).css("z-index", 101) : T.css("z-index", 100), Eb = 23 * h, S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, checkUrl(Q.bgImage) && U.css({
			backgroundImage: "url(" + Q.bgImage + ")"
		})), U.css({
			backgroundColor: RGBToHex(Q.bgColor, "transparent"),
			top: r,
			left: s,
			width: p,
			height: q,
			borderRadius: "0 0 " + Q.borderRadius1 + "px " + Q.borderRadius1 + "px"
		}).attr("attachID", k.attachID), "hborder1" == Q.borderControl1 ? U.css({
			borderRadius: "0 0 " + Q.borderRadius1 + "px " + Q.borderRadius1 + "px"
		}) : U.css({
			borderRadius: "0 0 0 0"
		}), 0 == h ? U.tResize({
			tHandles: "e,s,se"
		}).css("z-index", 101) : U.css("z-index", 100), Fb = Q.subScriptSrc.split(","), Gb = !1, checkUrl(Fb[h]) && (w = Fb[h], Gb = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, fb.html(b.appMongolia).css({
			top: g + S.subScriptTop,
			left: f + S.subScriptLeft,
			width: S.subScriptWidth,
			height: S.subScriptHeight
		}).attr("attachID", k.attachID), Gb ? fb.css({
			backgroundImage: "url(" + w + ")"
		}) : fb.hide(), 0 == h ? fb.tResize().css("z-index", 101) : fb.tResize().css("z-index", 100), "yes" != Q.subScriptSwitch && fb.hide(), Hb = Q.subScript1Src.split(","), Ib = !1, checkUrl(Hb[h]) && (x = Hb[h], Ib = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, gb.html(b.appMongolia).css({
			top: g + S.subScript1Top,
			left: f + S.subScript1Left,
			width: S.subScript1Width,
			height: S.subScript1Height
		}).attr("attachID", k.attachID), Ib ? gb.css({
			backgroundImage: "url(" + x + ")"
		}) : gb.hide(), 0 == h ? gb.tResize().css("z-index", 101) : gb.tResize().css("z-index", 100), "yes" != Q.subScript1Switch && gb.hide(), Jb = Q.subScript2Src.split(","), Kb = !1, checkUrl(Jb[h]) && (y = Jb[h], Kb = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, hb.html(b.appMongolia).css({
			top: g + S.subScript2Top,
			left: f + S.subScript2Left,
			width: S.subScript2Width,
			height: S.subScript2Height
		}).attr("attachID", k.attachID), Kb ? hb.css({
			backgroundImage: "url(" + y + ")"
		}) : hb.hide(), 0 == h ? hb.tResize().css("z-index", 101) : hb.tResize().css("z-index", 100), "yes" != Q.subScript2Switch && hb.hide(), Lb = Q.subScript3Src.split(","), Mb = !1, checkUrl(Lb[h]) && (z = Lb[h], Mb = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, ib.html(b.appMongolia).css({
			top: g + S.subScript3Top,
			left: f + S.subScript3Left,
			width: S.subScript3Width,
			height: S.subScript3Height
		}).attr("attachID", k.attachID), Mb ? ib.css({
			backgroundImage: "url(" + z + ")"
		}) : ib.hide(), 0 == h ? ib.tResize().css("z-index", 101) : ib.tResize().css("z-index", 100), "yes" != Q.subScript3Switch && ib.hide(), Nb = Q.subScript4Src.split(","), Ob = !1, checkUrl(Nb[h]) && (A = Nb[h], Ob = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, jb.html(b.appMongolia).css({
			top: g + S.subScript4Top,
			left: f + S.subScript4Left,
			width: S.subScript4Width,
			height: S.subScript4Height
		}).attr("attachID", k.attachID), Ob ? jb.css({
			backgroundImage: "url(" + A + ")"
		}) : jb.hide(), 0 == h ? jb.tResize().css("z-index", 101) : jb.tResize().css("z-index", 100), "yes" != Q.subScript4Switch && jb.hide(), Pb = Q.erWeiMaSrc.split(","), Qb = !1, checkUrl(Pb[h]) && (R = Pb[h], Qb = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, kb.html(b.appMongolia).css({
			top: g + S.erWeiMaTop,
			left: f + S.erWeiMaLeft,
			width: Q.erWeiMaSize,
			height: Q.erWeiMaSize
		}).attr("attachID", k.attachID), kb.css({
			backgroundImage: "url(" + R + ")"
		}), 0 == h ? kb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : kb.css("z-index", 100), "yes" != Q.erWeiMaSwitch && kb.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, Rb = Q.subTitleInfo.split(","), "" != Rb[h] && (C = Rb[h]), checkUrl(Q.subTitleBgImage) && W.css({
			backgroundImage: "url(" + Q.subTitleBgImage + ")"
		}), C && "undefined" != C || (C = ""), W.css({
			backgroundColor: RGBToHex(Q.subTitleBgColor, "transparent"),
			top: g + S.subTitleTop,
			left: f + S.subTitleLeft,
			width: Q.subTitleWidth,
			height: Q.subTitleHeight,
			color: RGBToHex(Q.subTitleColor, "transparent"),
			textAlign: Q.subTitleAlign,
			fontFamily: Q.subTitleFont,
			fontSize: b.tParseInt(Q.subTitleSize) + "px",
			letterSpacing: b.tParseInt(Q.subTitleSpacing) + "px",
			lineHeight: Q.subTitleLineHeight + "px",
			fontWeight: Q.subTitleWeight,
			overflow: "hidden"
		}).html(b.appMongolia + '<span class="jcbText">' + C + "</span>").attr("attachID", k.attachID), Q.subTitleSpace && "" != Q.subTitleSpace && (Sb = b.tParseInt(Q.subTitleSpace), "left" == Q.subTitleAlign ? (W.css({
			backgroundPosition: "top left"
		}), W.children(".jcbText").css({
			paddingLeft: Sb + "px",
			right: "-" + Sb + "px"
		})) : "right" == Q.subTitleAlign && (W.css({
			backgroundPosition: "top right"
		}), W.children(".jcbText").css({
			paddingRight: Sb + "px",
			left: "-" + Sb + "px"
		}))), 0 == h ? W.tResize().css("z-index", 101) : W.css("z-index", 100), "yes" != Q.subTitleSwitch && W.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, Tb = Q.titleInfo.split(","), "" != Tb[h] && (B = Tb[h]), checkUrl(Q.titleBgImage) && V.css({
			backgroundImage: "url(" + Q.titleBgImage + ")"
		}), V.css({
			backgroundColor: RGBToHex(Q.titleBgColor, "transparent"),
			top: g + S.titleTop,
			left: f + S.titleLeft,
			width: Q.titleWidth,
			height: Q.titleHeight,
			color: RGBToHex(Q.titleColor, "transparent"),
			textAlign: Q.titleAlign,
			fontFamily: Q.titleFont,
			fontSize: b.tParseInt(Q.titleSize) + "px",
			letterSpacing: b.tParseInt(Q.titleSpacing) + "px",
			lineHeight: Q.titleLineHeight + "px",
			fontWeight: Q.titleWeight,
			overflow: "hidden"
		}).html(b.appMongolia + '<span class="jcbText">' + B + "</span>").attr("attachID", k.attachID), Q.titleSpace && "" != Q.titleSpace && (Ub = b.tParseInt(Q.titleSpace), "left" == Q.titleAlign ? (V.css({
			backgroundPosition: "top left"
		}), V.children(".jcbText").css({
			paddingLeft: Ub + "px",
			right: "-" + Ub + "px"
		})) : "right" == Q.titleAlign && (V.css({
			backgroundPosition: "top right"
		}), V.children(".jcbText").css({
			paddingRight: Ub + "px",
			left: "-" + Ub + "px"
		}))), 0 == h ? V.tResize().css("z-index", 101) : V.css("z-index", 100), "yes" != Q.titleSwitch && V.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, X.css({
			top: g + S.prefixTop,
			left: f + S.prefixLeft,
			color: RGBToHex(Q.prefixColor, "transparent"),
			fontFamily: Q.prefixFont,
			fontSize: b.tParseInt(Q.prefixSize) + "px",
			letterSpacing: b.tParseInt(Q.prefixSpacing) + "px",
			fontWeight: Q.prefixWeight,
			textDecoration: Q.prefixDecoration,
			whiteSpace: "nowrap"
		}).html(b.appMongolia + '<span class="jcbText">' + Q.prefixInfo + "</span>").attr("attachID", k.attachID), 0 == h ? X.tResize({
			tSwitch: !1
		}).css("z-index", 101) : X.css("z-index", 100), "yes" != Q.prefixSwitch && X.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, Q.priceInfo = Q.priceInfo + "", Vb = Q.priceInfo.split(","), "" != Vb[h] && (D = Vb[h]), "auto" == Q.priceAlign && (Q.priceAlign = c.get(Q.prefixSwitch, Q.sWidth, S.priceLeft, S.prefixLeft)), Wb = '<span class="jcbText">', Xb = "</span>", "right" == Q.priceAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == Q.priceAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == Q.priceAlign ? (Wb = '<span class="jcbText">', Xb = "</span>") : "qcenter" == Q.priceAlign && (Wb = '<span style="display:block;position:relative;float:left;left:50%;clear:both;"><span style="display:block;position:relative;left:-50%;white-space:nowrap;">', Xb = "</span></span>"), Yb = "", D && "" != D && (Yb = tReplace(D, /(\d*(\.)?(\d)*)*/g, function(a) {
			return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(Q.priceFixed)) : a
		})), Y.css({
			top: g + S.priceTop,
			left: f + S.priceLeft,
			color: RGBToHex(Q.priceColor, "transparent"),
			fontFamily: Q.priceFont,
			fontSize: b.tParseInt(Q.priceSize) + "px",
			letterSpacing: b.tParseInt(Q.priceSpacing) + "px",
			fontWeight: Q.priceWeight,
			textDecoration: Q.priceDecoration,
			whiteSpace: "nowrap",
			overflow: "visible"
		}).html(b.appMongolia + Wb + Yb + Xb).attr("attachID", k.attachID), 0 == h ? Y.tResize({
			tSwitch: !1
		}).css("z-index", 101) : Y.width(qb.width()).css("z-index", 100), "yes" != Q.priceSwitch && Y.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, Z.css({
			top: g + S._prefixTop,
			left: f + S._prefixLeft,
			color: RGBToHex(Q._prefixColor, "transparent"),
			fontFamily: Q._prefixFont,
			fontSize: b.tParseInt(Q._prefixSize) + "px",
			letterSpacing: b.tParseInt(Q._prefixSpacing) + "px",
			fontWeight: Q._prefixWeight,
			whiteSpace: "nowrap"
		}).html(b.appMongolia + '<span class="jcbText">' + Q._prefixInfo + "</span>").attr("attachID", k.attachID), 0 == h ? Z.tResize({
			tSwitch: !1
		}).css("z-index", 101) : Z.css("z-index", 100), "yes" != Q._prefixSwitch && Z.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, Q._priceInfo = Q._priceInfo + "", Zb = Q._priceInfo.split(","), "" != Zb[h] && (E = Zb[h]), "auto" == Q._priceAlign && (Q._priceAlign = c.get(Q._prefixSwitch, Q.sWidth, S._priceLeft, S._prefixLeft)), Wb = '<span class="jcbText">', Xb = "</span>", "right" == Q._priceAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == Q._priceAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == Q._priceAlign ? (Wb = '<span class="jcbText">', Xb = "</span>") : "qcenter" == Q._priceAlign && (Wb = '<span style="display:block;position:relative;float:left;left:50%;clear:both;"><span style="display:block;position:relative;left:-50%;white-space:nowrap;">', Xb = "</span></span>"), Yb = "", E && "" != E && (Yb = tReplace(E, /(\d*(\.)?(\d)*)*/g, function(a) {
			return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(Q._priceFixed)) : a
		})), _.css({
			top: g + S._priceTop,
			left: f + S._priceLeft,
			color: RGBToHex(Q._priceColor, "transparent"),
			fontFamily: Q._priceFont,
			fontSize: b.tParseInt(Q._priceSize) + "px",
			letterSpacing: b.tParseInt(Q._priceSpacing) + "px",
			fontWeight: Q._priceWeight,
			whiteSpace: "nowrap",
			overflow: "visible"
		}).html(b.appMongolia + Wb + Yb + Xb).attr("attachID", k.attachID), 0 == h ? _.tResize({
			tSwitch: !1
		}).css("z-index", 101) : _.width(rb.width()).css("z-index", 100), "yes" != Q._priceSwitch && _.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, ab.css({
			top: g + S.salePrefixTop,
			left: f + S.salePrefixLeft,
			color: RGBToHex(Q.salePrefixColor, "transparent"),
			fontFamily: Q.salePrefixFont,
			fontSize: b.tParseInt(Q.salePrefixSize) + "px",
			letterSpacing: b.tParseInt(Q.salePrefixSpacing) + "px",
			fontWeight: Q.salePrefixWeight,
			whiteSpace: "nowrap"
		}).html(b.appMongolia + '<span class="jcbText">' + Q.salePrefixInfo + "</span>").attr("attachID", k.attachID), 0 == h ? ab.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ab.css("z-index", 100), "yes" != Q.salePrefixSwitch && ab.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, Q.saleInfo = Q.saleInfo + "", $b = Q.saleInfo.split(","), "" != $b[h] && (F = $b[h]), "auto" == Q.saleAlign && (Q.saleAlign = c.get(Q.salePrefixSwitch, Q.sWidth, S.saleLeft, S.salePrefixLeft)), Wb = '<span class="jcbText">', Xb = "</span>", "right" == Q.saleAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == Q.saleAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == Q.saleAlign ? (Wb = '<span class="jcbText">', Xb = "</span>") : "qcenter" == Q.saleAlign && (Wb = '<span style="display:block;position:relative;float:left;left:50%;clear:both;"><span style="display:block;position:relative;left:-50%;white-space:nowrap;">', Xb = "</span></span>"), bb.css({
			top: g + S.saleTop,
			left: f + S.saleLeft,
			color: RGBToHex(Q.saleColor, "transparent"),
			fontFamily: Q.saleFont,
			fontSize: b.tParseInt(Q.saleSize) + "px",
			letterSpacing: b.tParseInt(Q.saleSpacing) + "px",
			fontWeight: Q.saleWeight,
			whiteSpace: "nowrap",
			overflow: "visible"
		}).html(b.appMongolia + Wb + F + Xb).attr("attachID", k.attachID), 0 == h ? bb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : bb.width(sb.width()).css("z-index", 100), "yes" != Q.saleSwitch && bb.hide(), _b = (Q.expandText + "").split(","), ac = Q.expandTextSet.split("|;|"), Gb = !1, bc = !1, "" != _b[h] && (G = _b[h], Gb = !0), "" == ac[h] && (ac[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != ac[h] && (H = JSON.parse(ac[h] || "{}"), bc = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, "auto" == H.characterAlign && (H.characterAlign = c.get("no", Q.sWidth, S.expandTextLeft)), Wb = '<span class="jcbText">', Xb = "</span>", cc = "", H.characterAlign && "right" == H.characterAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == H.characterAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == H.characterAlign && (Wb = '<span class="jcbText">', Xb = "</span>"), lb.css({
			top: g + S.expandTextTop,
			left: f + S.expandTextLeft,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), Gb ? lb.html(b.appMongolia + Wb + G + Xb).show() : lb.hide(), bc && (dc = "none", "on1" == H.characterDash ? dc = "line-through" : "on2" == H.characterDash && (dc = "underline"), cc = "" != H.characterBorderWidth && "0" != H.characterBorderWidth ? H.characterBorderWidth + "px " + H.characterBorderStyle + " " + RGBToHex(H.characterBorderColor) : "none", lb.css({
			color: RGBToHex(H.characterColor, "transparent"),
			backgroundColor: RGBToHex(H.characterBgColor, "transparent"),
			fontFamily: H.characterFont,
			fontSize: b.tParseInt(H.characterSize) + "px",
			letterSpacing: b.tParseInt(H.characterLetterSpacing) + "px",
			fontWeight: H.characterWeight,
			textDecoration: dc,
			borderRadius: b.tParseInt(H.characterRadius)
		}), "" != Wb ? lb.children("span").css({
			backgroundColor: RGBToHex(H.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(H.characterSpace),
			paddingRight: b.tParseInt(H.characterSpace),
			paddingTop: b.tParseInt(H.characterSpace1),
			paddingBottom: b.tParseInt(H.characterSpace1),
			borderRadius: b.tParseInt(H.characterRadius),
			textDecoration: dc,
			border: cc
		}) : lb.css({
			paddingLeft: b.tParseInt(H.characterSpace),
			paddingRight: b.tParseInt(H.characterSpace),
			paddingTop: b.tParseInt(H.characterSpace1),
			paddingBottom: b.tParseInt(H.characterSpace1),
			textDecoration: dc,
			border: cc
		})), 0 == h ? lb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Wb ? lb.width(tb.width()) : lb.width("auto"), lb.css("z-index", 100)), "yes" != Q.expandTextSwitch && lb.hide(), ec = (Q.expandText1 + "").split(","), fc = Q.expandText1Set.split("|;|"), Gb = !1, bc = !1, "" != ec[h] && (I = ec[h], Gb = !0), "" == fc[h] && (fc[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != fc[h] && (J = JSON.parse(fc[h] || "{}"), bc = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, "auto" == J.characterAlign && (J.characterAlign = c.get("no", Q.sWidth, S.expandText1Left)), Wb = '<span class="jcbText">', Xb = "</span>", cc = "", J.characterAlign && "right" == J.characterAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == J.characterAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == J.characterAlign && (Wb = '<span class="jcbText">', Xb = "</span>"), mb.css({
			top: g + S.expandText1Top,
			left: f + S.expandText1Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), Gb ? mb.html(b.appMongolia + Wb + I + Xb).show() : mb.hide(), bc && (dc = "none", "on1" == J.characterDash ? dc = "line-through" : "on2" == J.characterDash && (dc = "underline"), cc = "" != J.characterBorderWidth && "0" != J.characterBorderWidth ? J.characterBorderWidth + "px " + J.characterBorderStyle + " " + RGBToHex(J.characterBorderColor) : "none", mb.css({
			color: RGBToHex(J.characterColor, "transparent"),
			backgroundColor: RGBToHex(J.characterBgColor, "transparent"),
			fontFamily: J.characterFont,
			fontSize: b.tParseInt(J.characterSize) + "px",
			letterSpacing: b.tParseInt(J.characterLetterSpacing) + "px",
			fontWeight: J.characterWeight,
			textDecoration: dc,
			borderRadius: b.tParseInt(J.characterRadius)
		}), mb.children("span").length > 0 ? mb.children("span").css({
			backgroundColor: RGBToHex(J.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(J.characterSpace),
			paddingRight: b.tParseInt(J.characterSpace),
			paddingTop: b.tParseInt(J.characterSpace1),
			paddingBottom: b.tParseInt(J.characterSpace1),
			borderRadius: b.tParseInt(J.characterRadius),
			textDecoration: dc,
			border: cc
		}) : mb.css({
			paddingLeft: b.tParseInt(J.characterSpace),
			paddingRight: b.tParseInt(J.characterSpace),
			paddingTop: b.tParseInt(J.characterSpace1),
			paddingBottom: b.tParseInt(J.characterSpace1),
			textDecoration: dc,
			border: cc
		})), 0 == h ? mb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Wb ? mb.width(ub.width()) : mb.width("auto"), mb.css("z-index", 100)), "yes" != Q.expandText1Switch && mb.hide(), gc = (Q.expandText2 + "").split(","), hc = Q.expandText2Set.split("|;|"), Gb = !1, bc = !1, "" != gc[h] && (K = gc[h], Gb = !0), "" == hc[h] && (hc[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != hc[h] && (L = JSON.parse(hc[h] || "{}"), bc = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, "auto" == L.characterAlign && (L.characterAlign = c.get("no", Q.sWidth, S.expandText2Left)), Wb = '<span class="jcbText">', Xb = "</span>", cc = "", L.characterAlign && "right" == L.characterAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == L.characterAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == L.characterAlign && (Wb = '<span class="jcbText">', Xb = "</span>"), nb.css({
			top: g + S.expandText2Top,
			left: f + S.expandText2Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), Gb ? nb.html(b.appMongolia + Wb + K + Xb).show() : nb.hide(), bc && (dc = "none", "on1" == L.characterDash ? dc = "line-through" : "on2" == L.characterDash && (dc = "underline"), cc = "" != L.characterBorderWidth && "0" != L.characterBorderWidth ? L.characterBorderWidth + "px " + L.characterBorderStyle + " " + RGBToHex(L.characterBorderColor) : "none", nb.css({
			color: RGBToHex(L.characterColor, "transparent"),
			backgroundColor: RGBToHex(L.characterBgColor, "transparent"),
			fontFamily: L.characterFont,
			fontSize: b.tParseInt(L.characterSize) + "px",
			letterSpacing: b.tParseInt(L.characterLetterSpacing) + "px",
			fontWeight: L.characterWeight,
			textDecoration: dc,
			borderRadius: b.tParseInt(L.characterRadius)
		}), nb.children("span").length > 0 ? nb.children("span").css({
			backgroundColor: RGBToHex(L.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(L.characterSpace),
			paddingRight: b.tParseInt(L.characterSpace),
			paddingTop: b.tParseInt(L.characterSpace1),
			paddingBottom: b.tParseInt(L.characterSpace1),
			borderRadius: b.tParseInt(L.characterRadius),
			textDecoration: dc,
			border: cc
		}) : nb.css({
			paddingLeft: b.tParseInt(L.characterSpace),
			paddingRight: b.tParseInt(L.characterSpace),
			paddingTop: b.tParseInt(L.characterSpace1),
			paddingBottom: b.tParseInt(L.characterSpace1),
			textDecoration: dc,
			border: cc
		})), 0 == h ? nb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Wb ? nb.width(vb.width()) : nb.width("auto"), nb.css("z-index", 100)), "yes" != Q.expandText2Switch && nb.hide(), ic = (Q.expandText3 + "").split(","), jc = Q.expandText3Set.split("|;|"), Gb = !1, bc = !1, "" != ic[h] && (M = ic[h], Gb = !0), "" == jc[h] && (jc[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != jc[h] && (N = JSON.parse(jc[h] || "{}"), bc = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, "auto" == N.characterAlign && (N.characterAlign = c.get("no", Q.sWidth, S.expandText3Left)), Wb = '<span class="jcbText">', Xb = "</span>", cc = "", N.characterAlign && "right" == N.characterAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == N.characterAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == N.characterAlign && (Wb = '<span class="jcbText">', Xb = "</span>"), ob.css({
			top: g + S.expandText3Top,
			left: f + S.expandText3Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), Gb ? ob.html(b.appMongolia + Wb + M + Xb).show() : ob.hide(), bc && (dc = "none", "on1" == N.characterDash ? dc = "line-through" : "on2" == N.characterDash && (dc = "underline"), cc = "" != N.characterBorderWidth && "0" != N.characterBorderWidth ? N.characterBorderWidth + "px " + N.characterBorderStyle + " " + RGBToHex(N.characterBorderColor) : "none", ob.css({
			color: RGBToHex(N.characterColor, "transparent"),
			backgroundColor: RGBToHex(N.characterBgColor, "transparent"),
			fontFamily: N.characterFont,
			fontSize: b.tParseInt(N.characterSize) + "px",
			letterSpacing: b.tParseInt(N.characterLetterSpacing) + "px",
			fontWeight: N.characterWeight,
			textDecoration: dc,
			borderRadius: b.tParseInt(N.characterRadius)
		}), ob.children("span").length > 0 ? ob.children("span").css({
			backgroundColor: RGBToHex(N.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(N.characterSpace),
			paddingRight: b.tParseInt(N.characterSpace),
			paddingTop: b.tParseInt(N.characterSpace1),
			paddingBottom: b.tParseInt(N.characterSpace1),
			borderRadius: b.tParseInt(N.characterRadius),
			textDecoration: dc,
			border: cc
		}) : ob.css({
			paddingLeft: b.tParseInt(N.characterSpace),
			paddingRight: b.tParseInt(N.characterSpace),
			paddingTop: b.tParseInt(N.characterSpace1),
			paddingBottom: b.tParseInt(N.characterSpace1),
			textDecoration: dc,
			border: cc
		})), 0 == h ? ob.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Wb ? ob.width(wb.width()) : ob.width("auto"), ob.css("z-index", 100)), "yes" != Q.expandText3Switch && ob.hide(), kc = (Q.expandText4 + "").split(","), lc = Q.expandText4Set.split("|;|"), Gb = !1, bc = !1, "" != kc[h] && (O = kc[h], Gb = !0), "" == lc[h] && (lc[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != lc[h] && (P = JSON.parse(lc[h] || "{}"), bc = !0), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, "auto" == P.characterAlign && (P.characterAlign = c.get("no", Q.sWidth, S.expandText4Left)), Wb = '<span class="jcbText">', Xb = "</span>", cc = "", P.characterAlign && "right" == P.characterAlign && (Wb = '<span style="float:right">', Xb = "</span>"), "qright" == P.characterAlign ? (Wb = '<span style="float:right">', Xb = "</span>") : "qleft" == P.characterAlign && (Wb = '<span class="jcbText">', Xb = "</span>"), pb.css({
			top: g + S.expandText4Top,
			left: f + S.expandText4Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), Gb ? pb.html(b.appMongolia + Wb + O + Xb).show() : pb.hide(), bc && (dc = "none", "on1" == P.characterDash ? dc = "line-through" : "on2" == P.characterDash && (dc = "underline"), cc = "" != P.characterBorderWidth && "0" != P.characterBorderWidth ? P.characterBorderWidth + "px " + P.characterBorderStyle + " " + RGBToHex(P.characterBorderColor) : "none", pb.css({
			color: RGBToHex(P.characterColor, "transparent"),
			backgroundColor: RGBToHex(P.characterBgColor, "transparent"),
			fontFamily: P.characterFont,
			fontSize: b.tParseInt(P.characterSize) + "px",
			letterSpacing: b.tParseInt(P.characterLetterSpacing) + "px",
			fontWeight: P.characterWeight,
			textDecoration: dc,
			borderRadius: b.tParseInt(P.characterRadius)
		}), pb.children("span").length > 0 ? pb.children("span").css({
			backgroundColor: RGBToHex(P.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(P.characterSpace),
			paddingRight: b.tParseInt(P.characterSpace),
			paddingTop: b.tParseInt(P.characterSpace1),
			paddingBottom: b.tParseInt(P.characterSpace1),
			borderRadius: b.tParseInt(P.characterRadius),
			textDecoration: dc,
			border: cc
		}) : pb.css({
			paddingLeft: b.tParseInt(P.characterSpace),
			paddingRight: b.tParseInt(P.characterSpace),
			paddingTop: b.tParseInt(P.characterSpace1),
			paddingBottom: b.tParseInt(P.characterSpace1),
			textDecoration: dc,
			border: cc
		})), 0 == h ? pb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Wb ? pb.width(xb.width()) : pb.width("auto"), pb.css("z-index", 100)), "yes" != Q.expandText4Switch && pb.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, cb.html(b.appMongolia).css({
			backgroundImage: "url(" + Q.btnSrc + ")",
			top: g + S.btnTop,
			left: f + S.btnLeft,
			width: S.btnWidth || 75,
			height: S.btnHeight || 25
		}).attr("attachID", k.attachID), 0 == h ? cb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : cb.css("z-index", 100), "yes" != Q.btnSwitch && cb.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, db.html(b.appMongolia).css({
			backgroundImage: "url(" + Q.btn1Src + ")",
			top: g + S.btn1Top,
			left: f + S.btn1Left,
			width: S.btn1Width || 75,
			height: S.btn1Height || 25
		}).attr("attachID", k.attachID), 0 == h ? db.tResize({
			tSwitch: !1
		}).css("z-index", 101) : db.css("z-index", 100), "yes" != Q.btn1Switch && db.hide(), S.attachIDArray && S.attachIDArray[Eb] ? k.attachID = S.attachIDArray[Eb] : b.setAttachID(k), Eb++, eb.html(b.appMongolia).css({
			backgroundImage: "url(" + Q.btn2Src + ")",
			top: g + S.btn2Top,
			left: f + S.btn2Left,
			width: S.btn2Width || 75,
			height: S.btn2Height || 25
		}).attr("attachID", k.attachID), 0 == h ? eb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : eb.css("z-index", 100), "yes" != Q.btn2Switch && eb.hide()
	}, a
}), define("scripts/drawShouFengQin.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/UI_Dialog");
	return require("scripts/tAjax"), a.create = function(a, e, f) {
		var h, g = c[a];
		b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), f ? (g = c[a], b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).addClass("t-jadb-right").appendTo(b.june).attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), h = $(b.appParentCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(h), e(a, g[2].appID)) : d.tDialogBaoBei(function(d, f, g, h) {
			var j, i, k, l, m, n, o, p;
			for (h.dialog("close"), $(".ui-tooltip").hide(), i = c[a], k = JSON.parse(f), l = JSON.parse(g), i[2] = $.extend({}, i[2], k), m = 0; m < i[2].sliderHref; m++) i[2].sliderHref[m] = "#";
			for (l = l || {}, n = $.extend({}, {
				width: 1001,
				height: 421,
				acreagePos: [{
					tWidth: 102,
					tHeight: 421,
					pWidth: 491,
					pHeight: 421
				}, {
					tWidth: 102,
					tHeight: 421,
					pWidth: 491,
					pHeight: 421
				}, {
					tWidth: 102,
					tHeight: 421,
					pWidth: 491,
					pHeight: 421
				}, {
					tWidth: 102,
					tHeight: 421,
					pWidth: 491,
					pHeight: 421
				}, {
					tWidth: 102,
					tHeight: 421,
					pWidth: 491,
					pHeight: 421
				}]
			}, l), b.setAppID(i[2]), o = "", b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), p = i[2].adDirection, m = 0; m < n.acreagePos.length; m++) o += "down" == p || "right" == p ? i[1].tDynamic1 : i[1].tDynamic;
			$(i[0]).addClass("t-jadb-" + p).html(o).appendTo(b.june).css({
				left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
				top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).addClass(b.selectedVal).attr("data-direction", p), j = $(b.appParentCls + "[appID='" + i[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), j.children(".t-jadb-title").each(function(a) {
				$(this).width(n.acreagePos[a].tWidth).height(n.acreagePos[a].tHeight).tResize({
					tHandles: "e, se, s"
				})
			}), j.children(".t-jadb-panel").each(function(a) {
				$(this).width(n.acreagePos[a].pWidth).height(n.acreagePos[a].pHeight).tResize({
					tHandles: "e, se, s"
				})
			}), b.appConfig["jadb"][1].tSubmit(i[2], j, !0), e(a, i[2].appID)
		}, {
			styletype: "jadb"
		})
	}, a
}), define("scripts/drawPingLun.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, g, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), g = '<div class="sns-widget sns-comment sns-widget-ui" data-comment="{&quot;param&quot;:{&quot;type_id&quot;:&quot;1100035&quot;,&quot;rec_user_id&quot;:&quot;-1&quot;,&quot;moreurl&quot;:&quot;http://item.taobao.com/item.htm?id=15705806426&quot;,&quot;target_key&quot;:&quot;huodong_35614370&quot;,&quot;title&quot;:&quot;空中红秀阁&quot;,&quot;page_size&quot;:3,&quot;view&quot;:&quot;default_list&quot;},&quot;paramList&quot;:{&quot;view&quot;:&quot;list_trunPage&quot;}}"><div class="comment-widget"><div class="comment-edit">        <div class="comment-add"><div class="textarea-b"><textarea class="f-txt" resize="none" style="" placeholder="我也插句话..."></textarea>        </div><div style="display: none;" class="checkcode sns-nf">        <span>验证码：</span>        <input type="text" style="width: 5em;" tabindex="3" class="f-checkcode" maxlength="4" size="4" name="TPL_checkcode">        <img height="35" width="85" style="vertical-align: middle;">        <span style="margin: 0pt 10px 0pt 0pt;">(不区分大小写)</span>        <a class="newCheckCode" href="#">换一张</a>        </div>        <div class="act">        <span class="skin-blue"><em class="J_LetterCount">0/140</em><span class="btn"><a href="#" class="J_PostComment">评论</a></span></span>        <a href="#" class="face">表情</a>            <label>    <input type="checkbox" class="J_SycMB"> 同时转发到我的淘宝    </label>            </div>        </div></div><ul class="comment-list"></ul></div></div>', $(e[0]).html(g + b.appMongolia).appendTo(b.june).tResize().css({
			left: 0 + (b.junebox.scrollLeft() - b.handleSpaceX) > 0 ? b.junebox.scrollLeft() - b.handleSpaceX : 0,
			top: 0 + (b.junebox.scrollTop() - b.handleSpaceY) > 0 ? b.junebox.scrollTop() - b.handleSpaceY : 0,
			width: 790,
			height: 200
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appParentCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/childLunboKuoZhan.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d, e, f, g, h, i) {
		var j, k, l, m, n, o, p, q, r, s, t;
		i = i || {}, h = h || {}, j = a.replace(/Child/g, ""), k = c[j][1].tDynamic1, l = $.extend({}, c[j][1].tDynamicConfig, i), m = d.attr("appID"), n = JSON.parse(d.attr("data-config")), b.setAttachID(l), n.childConfig.push(l), d.attr("data-config", JSON.stringify(n)).tResize("destory"), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), h = h || {}, o = $.extend({}, {
			slicePos: [{
				top: 0,
				left: 0,
				width: 200,
				height: 100
			}]
		}, h), p = 0, q = 0, r = 200, s = 100, f && (p = o.slicePos[g].left, q = o.slicePos[g].top, r = o.slicePos[g].width, s = o.slicePos[g].height), $(k).appendTo(d).tResize().css({
			left: p,
			top: q,
			width: r,
			height: s,
			zIndex: 99 + b.tParseInt(l.zFloor)
		}).attr("attachID", l.attachID).attr("appID", m), d.tResize(), t = $(b.appChildCls + "[attachID='" + l.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(t), e && e("lbePanel", m, l.attachID)
	}, a
}), define("scripts/tItem.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/UI_Dialog");
	return a.ptitemset = function(d) {
		var e = d.attr("name"),
			f = d.html(),
			g = d.next("input[type='hidden']").val(),
			h = "";
		("itemExpandText" == e || "itemExpandText1" == e || "itemExpandText2" == e || "itemExpandText3" == e || "itemExpandText4" == e) && (h = $("textarea[name='" + d.next("input[type='hidden']").attr("name") + "Set']").html()), c.tDialogItem(f, {
			type: e,
			itemMode: $("input[name='itemMode']:checked").val(),
			count: $("input[name='itemCount']").val(),
			content: g,
			content1: h,
			readVal: $("input[name='readVal']").val(),
			titleAuto: $("input[name='titleAuto']").val(),
			priceAuto: $("input[name='priceAuto']").val(),
			_priceAuto: $("input[name='_priceAuto']").val(),
			saleAuto: $("input[name='saleAuto']").val(),
			href: $("input[type='hidden'][name='href']").val(),
			pSrc: $("input[type='hidden'][name='pSrc']").val(),
			oppoSrc: $("input[type='hidden'][name='oppoSrc']").val(),
			titleInfo: $("input[type='hidden'][name='titleInfo']").val(),
			priceInfo: $("input[type='hidden'][name='priceInfo']").val(),
			_priceInfo: $("input[type='hidden'][name='_priceInfo']").val(),
			saleInfo: $("input[type='hidden'][name='saleInfo']").val(),
			erWeiMaSrc: $("input[type='hidden'][name='erWeiMaSrc']").val(),
			itemPicTemp: $("#itemPicTemp").html(),
			pSrcPos: $("input[type='hidden'][name='pSrcPos']").val(),
			oSrcPos: $("input[type='hidden'][name='oSrcPos']").val(),
			catchChooseWM: $("#catchChooseWM").val(),
			subScriptSrc: $("input[type='hidden'][name='subScriptSrc']").val(),
			subScript1Src: $("input[type='hidden'][name='subScript1Src']").val(),
			subScript2Src: $("input[type='hidden'][name='subScript2Src']").val(),
			subScript3Src: $("input[type='hidden'][name='subScript3Src']").val(),
			subScript4Src: $("input[type='hidden'][name='subScript4Src']").val(),
			expandText: $("input[type='hidden'][name='expandText']").val(),
			expandText1: $("input[type='hidden'][name='expandText1']").val(),
			expandText2: $("input[type='hidden'][name='expandText2']").val(),
			expandText3: $("input[type='hidden'][name='expandText3']").val(),
			expandText4: $("input[type='hidden'][name='expandText4']").val(),
			expandTextSet: $("textarea[name='expandTextSet']").val(),
			expandText1Set: $("textarea[name='expandText1Set']").val(),
			expandText2Set: $("textarea[name='expandText2Set']").val(),
			expandText3Set: $("textarea[name='expandText3Set']").val(),
			expandText4Set: $("textarea[name='expandText4Set']").val()
		}, function(c) {
			$("#tItemForm").data("submitAction", $.proxy(function() {
				var n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, ib, jb, f = require("scripts/tAjax"),
					g = $("#tItemForm").formToObject(),
					h = g.inputReadVal.split(","),
					i = g.titleAuto.split(","),
					j = g.priceAuto.split(","),
					k = g._priceAuto.split(","),
					l = g.saleAuto.split(","),
					m = $.extend(!0, [], g.inputVal);
				if (checkSelectAlert = g.checkSelectAlert, "itemLink" != e) {
					for (n = $("input[type='hidden'][name='href']").val().split(","), o = !1, p = 0; p < m.length; p++) if ((m[p] && "" != m[p] && "" == n[p] || "yes" == checkSelectAlert) && !$("#imr4").prop("checked")) {
						b.tMessage("请先设置宝贝链接，再进行标题价格等设置！"), o = !0;
						break
					}
					if (o) return c.dialog("close"), $("#tabs").tabs({
						active: 0
					}), void 0
				}
				if ("itemExpandText" == e || "itemExpandText1" == e || "itemExpandText2" == e || "itemExpandText3" == e || "itemExpandText4" == e) return a.expandtextset(d), c.dialog("close"), void 0;
				if ($("input[type='hidden'][name='pSrcPos']").val(g.pSrcPos.join(",")), $("input[type='hidden'][name='oSrcPos']").val(g.oSrcPos.join(",")), $("#itemPicTemp").html($("#itemPicTemp1").html()), $("input[type='hidden'][name='href']").val(g.hrefVal), $("input[type='hidden'][name='pSrc']").val(g.pSrcVal), $("input[type='hidden'][name='oppoSrc']").val(g.oppoSrcVal), $("input[type='hidden'][name='titleInfo']").val(g.titleInfoVal), $("input[type='hidden'][name='priceInfo']").val(g.priceInfoVal), $("input[type='hidden'][name='_priceInfo']").val(g._priceInfoVal), $("input[type='hidden'][name='saleInfo']").val(g.saleInfoVal), $("input[type='hidden'][name='erWeiMaSrc']").val(g.erWeiMaSrcVal), $("input[type='hidden'][name='subScriptSrc']").val(g.subScriptSrcVal), $("input[type='hidden'][name='subScript1Src']").val(g.subScript1SrcVal), $("input[type='hidden'][name='subScript2Src']").val(g.subScript2SrcVal), $("input[type='hidden'][name='subScript3Src']").val(g.subScript3SrcVal), $("input[type='hidden'][name='subScript4Src']").val(g.subScript4SrcVal), $("input[type='hidden'][name='expandText']").val(g.expandTextVal), $("input[type='hidden'][name='expandText1']").val(g.expandText1Val), $("input[type='hidden'][name='expandText2']").val(g.expandText2Val), $("input[type='hidden'][name='expandText3']").val(g.expandText3Val), $("input[type='hidden'][name='expandText4']").val(g.expandText4Val), $("textarea[name='expandTextSet']").val(g.expandTextSetVal), $("textarea[name='expandText1Set']").val(g.expandText1SetVal), $("textarea[name='expandText2Set']").val(g.expandText2SetVal), $("textarea[name='expandText3Set']").val(g.expandText3SetVal), $("textarea[name='expandText4Set']").val(g.expandText4SetVal), "itemLink" == e) {
					if (q = $("input[type='hidden'][name='pSrc']").val(), r = q.split(","), s = $("input[type='hidden'][name='oppoSrc']").val(), t = s.split(","), u = $("input[type='hidden'][name='titleInfo']").val(), v = u.split(","), w = $("input[type='hidden'][name='priceInfo']").val(), x = w.split(","), y = $("input[type='hidden'][name='_priceInfo']").val(), z = y.split(","), A = $("input[type='hidden'][name='saleInfo']").val(), B = A.split(","), C = $("input[type='hidden'][name='erWeiMaSrc']").val(), D = C.split(","), E = $("input[type='hidden'][name='subScriptSrc']").val(), F = E.split(","), G = $("input[type='hidden'][name='subScript1Src']").val(), H = G.split(","), I = $("input[type='hidden'][name='subScript2Src']").val(), J = I.split(","), K = $("input[type='hidden'][name='subScript3Src']").val(), L = K.split(","), M = $("input[type='hidden'][name='subScript4Src']").val(), N = M.split(","), O = $("input[type='hidden'][name='expandText']").val(), P = O.split(","), Q = $("input[type='hidden'][name='expandText1']").val(), R = Q.split(","), S = $("input[type='hidden'][name='expandText2']").val(), T = S.split(","), U = $("input[type='hidden'][name='expandText3']").val(), V = U.split(","), W = $("input[type='hidden'][name='expandText4']").val(), X = W.split(","), Y = $("textarea[name='expandTextSet']").val(), Z = Y.split("|;|"), _ = $("textarea[name='expandText1Set']").val(), ab = _.split("|;|"), bb = $("textarea[name='expandText2Set']").val(), cb = bb.split("|;|"), db = $("textarea[name='expandText3Set']").val(), eb = db.split("|;|"), fb = $("textarea[name='expandText4Set']").val(), gb = fb.split("|;|"), m.length, !$("#imr4").prop("checked")) {
						for (p = 0; p < h.length; p++)"2" == h[p] || "" == m[p] ? ((m[p] || "" == m[p]) && m.splice(p, 1), (r[p] || "" == r[p]) && r.splice(p, 1), (t[p] || "" == t[p]) && t.splice(p, 1), (v[p] || "" == v[p]) && v.splice(p, 1), (x[p] || "" == x[p]) && x.splice(p, 1), (z[p] || "" == z[p]) && z.splice(p, 1), (B[p] || "" == B[p]) && B.splice(p, 1), (D[p] || "" == D[p]) && D.splice(p, 1), h.splice(p, 1), i.splice(p, 1), j.splice(p, 1), k.splice(p, 1), l.splice(p, 1), p--) : (r[p] || (r[p] = ""), t[p] || (t[p] = ""), v[p] || (v[p] = ""), x[p] || (x[p] = ""), z[p] || (z[p] = ""), B[p] || (B[p] = ""), D[p] || (D[p] = ""));
						if (m.length < 1) return b.tMessage("请填写宝贝链接！"), void 0
					}
					$("input[type='hidden'][name='pSrc']").val(r.join(",")), $("input[type='hidden'][name='oppoSrc']").val(t.join(",")), $("input[type='hidden'][name='titleInfo']").val(v.join(",")), $("input[type='hidden'][name='priceInfo']").val(x.join(",")), $("input[type='hidden'][name='_priceInfo']").val(z.join(",")), $("input[type='hidden'][name='saleInfo']").val(B.join(",")), $("input[type='hidden'][name='erWeiMaSrc']").val(D.join(",")), $("input[type='hidden'][name='subScriptSrc']").val(F.join(",")), $("input[type='hidden'][name='subScript1Src']").val(H.join(",")), $("input[type='hidden'][name='subScript2Src']").val(J.join(",")), $("input[type='hidden'][name='subScript3Src']").val(L.join(",")), $("input[type='hidden'][name='subScript4Src']").val(N.join(",")), $("input[type='hidden'][name='expandText']").val(P.join(",")), $("input[type='hidden'][name='expandText1']").val(R.join(",")), $("input[type='hidden'][name='expandText2']").val(T.join(",")), $("input[type='hidden'][name='expandText3']").val(V.join(",")), $("input[type='hidden'][name='expandText4']").val(X.join(",")), $("textarea[name='expandTextSet']").val(Z.join("|;|")), $("textarea[name='expandText1Set']").val(ab.join("|;|")), $("textarea[name='expandText2Set']").val(cb.join("|;|")), $("textarea[name='expandText3Set']").val(eb.join("|;|")), $("textarea[name='expandText4Set']").val(gb.join("|;|"))
				}
				if ($("input[name='titleAuto']").val(i.join(",")), $("input[name='priceAuto']").val(j.join(",")), $("input[name='_priceAuto']").val(k.join(",")), $("input[name='saleAuto']").val(l.join(",")), "itemLink" != e) d.next("input[type='hidden']").val(m.join(",")), $("#itemCountShow").parent().is(":hidden") && $("#itemCountShow").parent().show(), $("input[name='itemCount']").val(m.length), $("#itemCountShow").html(m.length), $("input[name='readVal']").val(h.join(",")), c.dialog("close");
				else {
					for (d.next("input[type='hidden']").val(m.join(",")), $("#itemCountShow").parent().is(":hidden") && $("#itemCountShow").parent().show(), $("input[name='itemCount']").val(m.length), $("#itemCountShow").html(m.length), ib = $.extend(!0, [], m), jb = !1, b.batchAjax = "no", b.batchAjaxData = null, p = 0; p < h.length; p++)"1" != h[p] ? (ib[p] = "", b.batchAjax = "yes") : jb = !0;
					f.ajaxJson("gii.php", {
						item: ib,
						ewmSize: $("#erWeiMaSize").val(),
						random: 1e4 * Math.random()
					}, function(a) {
						if ("yes" == a[0]) if (jb) f.ajaxJson("giiforp.php", {
							item: ib,
							random: 1e4 * Math.random()
						}, function(c) {
							if (b.batchAjaxData = c, "yes" == a[0]) {
								$("#itemPicTemp").html(""), $("#itemPicTemp1").html("");
								for (var d = 1; d < a.length; d++) a[d][0] && "" != a[d][0] && (r[d - 1] = a[d][0]), a[d][1] && "" != a[d][1] && (t[d - 1] = a[d][1]), a[d][2] && "" != a[d][2] && (v[d - 1] = a[d][2].replace(/,/g, "，")), a[d][3] && "" != a[d][3] && (x[d - 1] = a[d][3]), a[d][4] && "" != a[d][4] && (z[d - 1] = a[d][4]), a[d][5] && "" != a[d][5] && (B[d - 1] = a[d][5]), a[d][6] && "" != a[d][6] && (D[d - 1] = a[d][6]), "" != ib[d - 1] && ("1" != g.pSrcPos[d - 1] && c[d] && c[d][b.tParseInt(g.pSrcPos[d - 1]) - 1] && (r[d - 1] = c[d][b.tParseInt(g.pSrcPos[d - 1]) - 1]), "2" != g.oSrcPos[d] && c[d] && c[d][b.tParseInt(g.oSrcPos[d - 1]) - 1] && (t[d - 1] = c[d][b.tParseInt(g.oSrcPos[d - 1]) - 1])), h[d - 1] = 0;
								$("input[name='readVal']").val(h.join(",")), $("#chx_catchchoose1").prop("checked") && ($("input[type='hidden'][name='pSrc']").val(r.join(",")), $("input[type='hidden'][name='oppoSrc']").val(t.join(","))), $("#chx_catchchoose2").prop("checked") && $("input[type='hidden'][name='titleInfo']").val(v.join(",")), $("#chx_catchchoose3").prop("checked") && $("input[type='hidden'][name='priceInfo']").val(x.join(",")), $("#chx_catchchoose4").prop("checked") && $("input[type='hidden'][name='_priceInfo']").val(z.join(",")), $("#chx_catchchoose5").prop("checked") && $("input[type='hidden'][name='saleInfo']").val(B.join(",")), $("input[type='hidden'][name='erWeiMaSrc']").val(D.join(","))
							}
						});
						else {
							for (var d = 1; d < a.length; d++) a[d][0] && "" != a[d][0] && (r[d - 1] = a[d][0]), a[d][1] && "" != a[d][1] && (t[d - 1] = a[d][1]), a[d][2] && "" != a[d][2] && (v[d - 1] = a[d][2].replace(/,/g, "，")), a[d][3] && "" != a[d][3] && (x[d - 1] = a[d][3]), a[d][4] && "" != a[d][4] && (z[d - 1] = a[d][4]), a[d][5] && "" != a[d][5] && (B[d - 1] = a[d][5]), a[d][6] && "" != a[d][6] && (D[d - 1] = a[d][6]), h[d - 1] = 0;
							$("input[name='readVal']").val(h.join(",")), $("#chx_catchchoose1").prop("checked") && ($("input[type='hidden'][name='pSrc']").val(r.join(",")), $("input[type='hidden'][name='oppoSrc']").val(t.join(","))), $("#chx_catchchoose2").prop("checked") && $("input[type='hidden'][name='titleInfo']").val(v.join(",")), $("#chx_catchchoose3").prop("checked") && $("input[type='hidden'][name='priceInfo']").val(x.join(",")), $("#chx_catchchoose4").prop("checked") && $("input[type='hidden'][name='_priceInfo']").val(z.join(",")), $("#chx_catchchoose5").prop("checked") && $("input[type='hidden'][name='saleInfo']").val(B.join(",")), $("input[type='hidden'][name='erWeiMaSrc']").val(D.join(","))
						}
						c.dialog("close")
					})
				}
			}, this)).submit()
		})
	}, a.pptitemset = function(a, b) {
		var h, d = a.attr("name"),
			e = a.html(),
			f = $("input[name='href']").val(),
			g = $("input[name='pptHref']").val();
		"lrgitem" == b && (h = "itemlrg.php"), c.tDialogPptItem(e, {
			type: d,
			pptHref: g,
			href: f,
			pSrc: $("input[type='hidden'][name='pSrc']").val(),
			titleInfo: $("input[type='hidden'][name='titleInfo']").val(),
			priceInfo: $("input[type='hidden'][name='priceInfo']").val(),
			_priceInfo: $("input[type='hidden'][name='_priceInfo']").val(),
			saleInfo: $("input[type='hidden'][name='saleInfo']").val(),
			subTitleInfo: $("input[type='hidden'][name='subTitleInfo']").val(),
			random: 1e4 * Math.random()
		}, function(a) {
			var b = $("#pptval").val(),
				c = $("#pptsrc").val(),
				d = $("#ppttitle").val(),
				e = $("#pptprice").val(),
				f = $("#pptdprice").val(),
				g = $("#pptsale").val(),
				h = $("#pptsubtitle").val(),
				i = $("#pptcount").val();
			$("input[name='href']").val(b), $("input[name='pSrc']").val(c), $("input[name='titleInfo']").val(d), $("input[name='priceInfo']").val(e), $("input[name='_priceInfo']").val(f), $("input[name='saleInfo']").val(g), $("input[name='subTitleInfo']").val(h), $("input[name='itemCount']").val(i), $("input[name='pptCount']").val(i), $("#itemCountShow1").html(i), $("#itemPicTemp").html($("#itemPicTempPPt").html()), a.dialog("close")
		}, h)
	}, b.choosepic = {}, b.choosepic["pSrc"] = "", b.choosepic["oppoSrc"] = "", a.itemBatchPic = function(a) {
		var h, d = a.attr("name"),
			e = "pSrc",
			f = "pSrcPos",
			g = $("#itemPicTemp");
		"batchChooseOppoPic" == d && (e = "oppoSrc", f = "oSrcPos"), c.tDialogChoosePic(a.html(), {
			choosePic: a.attr("data-p") || b.choosepic[e] || ""
		}, function(c) {
			var m, n, o, p, q, r, s, t, d = $("#choosePicDiv").find("span.active").attr("data-p") || "00",
				i = d.substr(0, 1),
				j = d.substr(1),
				k = [],
				l = [];
			if (a.attr("data-p", d), b.choosepic[e] = d, o = $("input[type='radio'][name='itemMode']:checked").val(), "ptitem" == o ? aUrl = "giiforp.php" : "pptitem" == o && (aUrl = "giiforp_ppt.php"), c.dialog("close"), b.tLoading(!0), "yes" != b.batchAjax && b.batchAjaxData) {
				for (r = 1; r < b.batchAjaxData.length; r++) if (b.batchAjaxData[r]) {
					if (k[r - 1] = "", l[r - 1] = "", b.batchAjaxData[r]["colorImg"] && "" != b.batchAjaxData[r]["colorImg"]) {
						for (s = b.batchAjaxData[r]["colorImg"], t = 0; t < s.length; t++) b.batchAjaxData[r][s[t].valueId] = s[t].imgUrl;
						"c" == i && s[j - 1] && (k[r - 1] = s[j - 1].imgUrl, l[r - 1] = s[j - 1].valueId + 1)
					}
					"z" == i && b.batchAjaxData[r][j - 1] && (k[r - 1] = b.batchAjaxData[r][j - 1], l[r - 1] = j)
				}
				for (g.html(JSON.stringify(b.batchAjaxData)), h = JSON.parse($("#itemPicTemp1").html() || "[]"), m = $("input[type='hidden'][name='" + e + "']").val(), p = $("input[type='hidden'][name='" + f + "']").val(), n = m.split(","), q = p.split(","), t = 0; t < n.length; t++)"" != k[t] && (n[t] = k[t], q[t] = l[t]);
				$("input[type='hidden'][name='" + e + "']").val(n.join(",")), $("input[type='hidden'][name='" + f + "']").val(q.join(",")), b.tLoading(!1)
			} else $.ajax({
				url: aUrl,
				type: "POST",
				dataType: "JSON",
				data: {
					item: $("input[type='hidden'][name='href']").val().split(","),
					random: 1e4 * Math.random()
				},
				success: function(a) {
					var c, d, o;
					if (b.tLoading(!1), "yes" == a[0]) {
						for (c = 1; c < a.length; c++) if (a[c]) {
							if (k[c - 1] = "", l[c - 1] = "", a[c]["colorImg"] && "" != a[c]["colorImg"]) {
								for (d = a[c]["colorImg"], o = 0; o < d.length; o++) a[c][d[o].valueId] = d[o].imgUrl;
								"c" == i && d[j - 1] && (k[c - 1] = d[j - 1].imgUrl, l[c - 1] = d[j - 1].valueId + 1)
							}
							"z" == i && a[c][j - 1] && (k[c - 1] = a[c][j - 1], l[c - 1] = j)
						}
						for (g.html(JSON.stringify(a)), h = JSON.parse($("#itemPicTemp1").html() || "[]"), m = $("input[type='hidden'][name='" + e + "']").val(), p = $("input[type='hidden'][name='" + f + "']").val(), n = m.split(","), q = p.split(","), o = 0; o < n.length; o++)"" != k[o] && (n[o] = k[o], q[o] = l[o]);
						$("input[type='hidden'][name='" + e + "']").val(n.join(",")), $("input[type='hidden'][name='" + f + "']").val(q.join(",")), b.batchAjax = !1, b.batchAjaxData = a
					}
				},
				error: function() {
					b.tLoading(!1)
				}
			})
		})
	}, a.expandtextset = function(a) {
		$("#tItemForm").data("submitAction", $.proxy(function() {
			var c = (require("scripts/tAjax"), $("#tItemForm").formToObject()),
				d = a.next("input[type='hidden']"),
				e = d.attr("name"),
				f = $.extend(!0, [], c.inputVal);
			itemTextSet = $.extend(!0, [], c.itemTextSet), d.val(f.join(",")), $("textarea[name='" + e + "Set']").html(itemTextSet.join("|;|"))
		}, this)).submit()
	}, a.sortItemList = function(a) {
		var c, d, e, f, g, h, i, b = [$("input[name='titleAuto']"), $("input[name='priceAuto']"), $("input[name='_priceAuto']"), $("input[name='saleAuto']"), $("input[type='hidden'][name='href']"), $("input[type='hidden'][name='pSrc']"), $("input[type='hidden'][name='oppoSrc']"), $("input[type='hidden'][name='titleInfo']"), $("input[type='hidden'][name='priceInfo']"), $("input[type='hidden'][name='_priceInfo']"), $("input[type='hidden'][name='saleInfo']"), $("input[type='hidden'][name='erWeiMaSrc']"), $("input[type='hidden'][name='pSrcPos']"), $("input[type='hidden'][name='oSrcPos']"), $("input[type='hidden'][name='subScriptSrc']"), $("input[type='hidden'][name='subScript1Src']"), $("input[type='hidden'][name='subScript2Src']"), $("input[type='hidden'][name='subScript3Src']"), $("input[type='hidden'][name='subScript4Src']"), $("input[type='hidden'][name='expandText']"), $("input[type='hidden'][name='expandText1']"), $("input[type='hidden'][name='expandText2']"), $("input[type='hidden'][name='expandText3']"), $("input[type='hidden'][name='expandText4']"), $("textarea[name='expandTextSet']"), $("textarea[name='expandText1Set']"), $("textarea[name='expandText2Set']"), $("textarea[name='expandText3Set']"), $("textarea[name='expandText4Set']")];
		for (c = 0; c < b.length; c++) {
			for (g = [], h = ",", d = b[c], e = d.val(), c >= b.length - 5 && (h = "|;|"), f = e.split(h), i = 0; i < a.length; i++) g.push(f[a[i] - 1]);
			d.val(g.join(h))
		}
		$("#itemPicTemp1").html(""), $("#itemPicTemp").html("")
	}, a
});