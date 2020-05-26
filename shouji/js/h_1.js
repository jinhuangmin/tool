define("scripts/code.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage"),
		d = require("scripts/UI_Dialog");
	return a.getCodeObj = function() {
		var c = [];
		return a.getChooseApp(b.june.children(b.appCls)).each(function() {
			var f, g, h, i, d = $(this),
				e = d.attr("data-dblType");
			("jdb" == e || "jdhb" == e) && (f = [], g = JSON.parse(d.attr("data-config") || "{}"), f[f.length] = d.width(), f[f.length] = d.height(), f[f.length] = b.tParseInt(d.css("top")), f[f.length] = b.tParseInt(d.css("left")), h = !1, (b.june.children(".junehtml").length > 0 || a.getChooseApp(b.june.children(b.appCls + "[data-dblType='jzdb']")).length > 0) && (h = !0), i = "", d.attr("data-cls") && "" != d.attr("data-cls") && (i = d.attr("data-cls")), d.attr("data-papp", "yes"), c[c.length] = {
				appType: e,
				config: g,
				pos: f.join("|"),
				check_1: h,
				dataCls: i
			})
		}), c
	}, a.codeExportChoose = function() {
		b.juneAppChooseExport = !0, a.getCodeExport()
	}, a.getChooseApp = function(a) {
		return b.juneAppChooseExport ? a.filter(".ui-selected") : a
	}, a.getCodeExport = function(c, d, e) {
		b.thisTimeCode = "";
		var f = a.getCodeObj();
		f.length > 0 ? $.ajax({
			url: "js/thr.php",
			type: "POST",
			data: {
				codeObj: f
			},
			success: function(f) {
				b.thisTimeCode = f, c && "function" == typeof c ? c(a.codeExport(d, e)) : a.codeExport(d, e)
			},
			error: function(f) {
				b.thisTimeCode = "", b.tMessage("获取参数失败，请重新尝试生成代码！错误码：" + f.status)
			}
		}) : c && "function" == typeof c ? c(a.codeExport(d, e)) : a.codeExport(d, e)
	}, a.codeExport = function(c, e) {
		var g, h, i, j, k, l, m, n, o, p, q, r;
		if (c && "specJ" == b.previewType && ($("#previewJ"), g = $("#previewJspan"), b.tUserLogin && "" != b.tUserName, g.trigger("click")), h = b.june.attr("id"), i = !0, e)"" == $("#moduleHeight").val() && $("#moduleHeight").val(2560);
		else if ("" == $("#moduleHeight").val()) return b.tMessage("您还没有设置模块高度，代码放入装修界面可能遮住下方模块！请在工具左侧模块设置中设置模块高度。", "module"), void 0;
		return "june" == h && (i = !1), j = b.getJuneStyle(i), k = "", l = "", m = "", n = "", b.june.children(".t-pencilLine").each(function() {
			var a = $(this),
				c = b.tParseInt(a.css("top")),
				d = b.tParseInt(a.css("left")),
				e = a.width(),
				f = a.height(),
				g = a.attr("data-d") || "we",
				h = a.attr("data-pts") || "1;#ff0044;100;solid",
				i = [];
			i = h.split(";"), borderWidth = i[0], borderColor = RGBToHex(i[1]), opacity = i[2] / 100 || "1", borderStyle = i[3] || "solid", n += "ns" == g ? '<div class="jllb abs" data-d="ns" data-pts="' + h + '" style="top:' + c + "px;left:" + d + "px;width:1px;height:" + f + "px;border:none;border-left:" + borderWidth + "px " + borderColor + " " + borderStyle + ";opacity:" + opacity + ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * opacity + ');z-index:10;" ></div>' : '<div class="jllb abs" data-d="we" data-pts="' + h + '" style="top:' + c + "px;left:" + d + "px;width:" + e + "px;height:1px;border:none;border-top:" + borderWidth + "px " + borderColor + " " + borderStyle + ";opacity:" + opacity + ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * opacity + ');z-index:10;" ></div>'
		}), j += n, b.appidExArray = [], a.getChooseApp(b.june.children(b.appCls)).each(function() {
			var f, a = $(this),
				c = a.attr("data-dblType"),
				d = "",
				e = "";
			b.create() && ("jpb" != c ? (f = a.attr("appID"), $.inArray(f, b.appidExArray) < 0 && (d = b.appConfig[c][1].codeExport(a), a.attr("data-cls") && "" != a.attr("data-cls") && (e = " " + a.attr("data-cls") + '" data-cls="' + a.attr("data-cls") + '"', d = d.replace(/\<(div|a|form)[^\<\>]*?class\=(\"[^\"]*?(jdb|job|jbob|jcb|jdlb|jcdb|jsdb|jwfb|jfsb|jqtb|jfyb|jsb|jvb|jwb|jwwb|jspb|jib|jab|jfb|jgb|jscb|jeb|jtsb|jacb|jkgb|jzzb|jmdb|jsfb|jzdb|jadb|jplb)[^\"]*?\")[^\<\>]*?\>/g, function(a, b, c) {
				return a = a.replace(c, c.substr(0, c.length - 1) + e)
			})), j += d, b.appidExArray.push(f))) : (d = b.appConfig[c][1].codeExport(a), a.attr("data-cls") && "" != a.attr("data-cls") && (e = " " + a.attr("data-cls") + '" data-cls="' + a.attr("data-cls") + '"', d = d.replace(/\<(div|a|form)[^\<\>]*?class\=(\"[^\"]*?(jdb|job|jbob|jcb|jdlb|jcdb|jsdb|jwfb|jfsb|jqtb|jfyb|jsb|jvb|jwb|jwwb|jspb|jib|jab|jfb|jgb|jscb|jeb|jtsb|jacb|jkgb|jzzb|jmdb|jsfb|jzdb|jadb|jplb)[^\"]*?\")[^\<\>]*?\>/g, function(a, b, c) {
				return a = a.replace(c, c.substr(0, c.length - 1) + e)
			})), k += d))
		}), b.popupContent.children(".japb[data-gen='yes']").each(function() {
			var e, c = $(this).clone(),
				d = c.attr("id").replace(/pc_/g, "");
			c.attr("data-parentID") && "" != c.attr("data-parentID") && (e = d, d = c.attr("data-parentID")), e ? a.getChooseApp(b.june.find(b.appChildCls + "[attachID='" + e + "']")).length > 0 ? (c.removeAttr("data-gen").removeAttr("id"), l += c.prop("outerHTML")) : $(this).attr("data-gen", "no") : a.getChooseApp(b.june.children(b.appCls + "[appID='" + d + "']")).length > 0 ? (c.removeAttr("data-gen").removeAttr("id"), l += c.prop("outerHTML")) : $(this).attr("data-gen", "no")
		}), b.thisTimeCode && "" != b.thisTimeCode && (o = b.thisTimeCode.split("${!|}"), p = 0, j = tReplace(j, /(\${!(jdb|jdhb)})/g, function() {
			var d = o[p],
				e = a.getChooseApp(b.june.children(b.appCls + "[data-papp='yes']")).eq(p),
				f = "";
			return e.attr("data-cls") && "" != e.attr("data-cls") && (f = " " + e.attr("data-cls") + '" data-cls="' + e.attr("data-cls") + '"', d = d.replace(/\<(div|a|form)[^\<\>]*?class\=(\"[^\"]*?(jdb|jdhb)[^\"]*?\")[^\<\>]*?\>/g, function(a, b, c) {
				return a = a.replace(c, c.substr(0, c.length - 1) + f)
			})), p++, d
		}), a.getChooseApp(b.june.children(b.appCls + "[data-papp='yes']")).removeAttr("data-papp"), b.thisTimeCode = ""), j += "</div>" + k + l, j = j.replace(/--juneForMapAbCdEfG/g, ""), j = b.filterUrl(j), j = j.replace(/wmode\=\"transparent\"\>/g, 'wmode="transparent" />'), j = j.replace(/wmode\=\"opaque\"\>/g, 'wmode="transparent" />'), j = j.replace(/￥|¥/g, "￥"), j = j.replace(/&yen;/g, "￥"), j = j.replace(/&amp;yen;/g, "￥"), j = j.replace(/font-family\:宋体\;/g, "font-family:Arial;"), j = j.replace(/\?\s{15,99}/g, ""), j = j.replace(/[\t\r\n]/g, ""), j = j.replace(/\&nbsp\;/g, "&amp;nbsp;"), j = j.replace(/ junehref\=\"/g, ' href="'), (c || "june" != h) && (j = j.replace(/junezxleftisme\;/g, "")), j = j.indexOf("jvb") >= 0 ? j.replace(/junezxneedcheckembed\;/g, "background-image:url(http://a.tbcdn.cn/s.gif);") : j.replace(/junezxneedcheckembed\;/g, ""), q = 1, c && (q = 0), b.juneAppChooseExport = !1, "june" != h ? j : (b.tUserLogin && "" != b.tUserName && "1" == q && $.ajax({
			url: "insertcode.php",
			type: "POST",
			data: {
				code: j,
				username: b.tUserName,
				shareType: q
			},
			success: function(a) {
				b.insertID = a
			}
		}), c ? j : (r = require("scripts/tDateDay.js"), m = k + l, m = m.replace(/--juneForMapAbCdEfG/g, ""), m = b.filterUrl(m), m = m.replace(/wmode\=\"transparent\"\>/g, 'wmode="transparent" />'), m = m.replace(/wmode\=\"opaque\"\>/g, 'wmode="transparent" />'), m = m.replace(/\?\s{15,99}/g, ""), m = m.replace(/[\t\r\n]/g, ""), m = m.replace(/\&nbsp\;/g, "&amp;nbsp;"), m = m.replace(/ junehref\=\"/g, ' href="'), (c || "june" != h) && (m = m.replace(/junezxleftisme\;/g, "")), m = m.indexOf("jvb") >= 0 ? m.replace(/junezxneedcheckembed\;/g, "background-image:url(http://a.tbcdn.cn/s.gif);") : m.replace(/junezxneedcheckembed\;/g, ""), r.click(function() {
			d.tDialogCode(j, !1, void 0, m)
		}), void 0))
	}, a.codeImportJune = function(a) {
		var k, c = a.width(),
			d = a.height(),
			e = a.css("background-image").replace(/^url|[\(\"\)]*/g, "") || "",
			f = a.css("opacity"),
			g = a.css("background-repeat") || "repeat",
			h = a.css("background-attachment") || "scroll",
			i = a.attr("data-pos") || a.css("background-position"),
			j = RGBToHex(a.css("background-color"), "");
		e = e.replace(/"/g, ""), b.june.attr("style", a.attr("style")), "zdyboxCache" == a.attr("id") && "" != j && "#f2f4f8" == j.toLowerCase() && (j = ""), "" == j && b.june.css("background-color", "#f2f4f8"), b.june.css("margin-left", 0), b.june.css("left", 0), 0 == c && (c = 1920, b.june.width(1920)), 0 == d && (d = "", b.june.height(2560)), checkUrl(e) ? $("#moduleBgimg").val(e) : $("#moduleBgimg").val(""), $("#moduleWidth").val(c), $("#moduleHeight").val(d), "repeat" == g ? $("#boxRepeat").prop("checked", !0) : $("#boxRepeat").prop("checked", !1), "fixed" == h ? $("#boxFixed").prop("checked", !0) : $("#boxFixed").prop("checked", !1), $.inArray(i, ["50% 50%", "50% 0%", "50% 100%", "0% 0%", "0% 50%", "0% 100%", "100% 0%", "100% 50%", "100% 100%"]) < 0 && (k = i.split(" "), k[0] && k[0].indexOf("px") >= 0 && $("#mdbgPos1").val(b.tParseInt(k[0])), k[1] && k[1].indexOf("px") >= 0 && $("#mdbgPos2").val(b.tParseInt(k[1])), i = ""), $("#bgPosition").children("option[value='" + i + "']").prop("selected", !0), $("#moduleBgcolor").val(j), f && $("#moduleOpacity").val(f)
	}, a.codeImportDialogCode = function(c, d, e) {
		var f, g, h;
		e && "2" == e || (b.june.html(""), d || (b.dump.html(""), b.toClearInit(), b.layerList.html(""), b.dumpLayer.html(""), b.popupContent.html(""))), b.addImportHeight = null, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), f = require("scripts/inputFilter"), "2" == e && (c = f.filterImportCode(c)), c = c.replace(/url\((['"]?)(.+?)\1\)/g, "url($2)"), c = c.replace(/url\((initial|none)?\)/g, ""), c = c.replace(/t-app /g, ""), c = c.replace(/\<[^\<\>]*?class\=\"[^\"]*?((jdb|job|jbob|jcb|jdlb|jcdb|jsdb|jwfb|jfsb|jqtb|jfyb|jsb|jvb|jwb|jwwb|jspb|jib|jab|jfb|jgb|jscb|jeb|jtsb|jacb|jkgb|jzzb|jmdb|jsfb|jzdb|jadb|jplb)([^\s\"]+))(?=\s|\")/g, function(a, b) {
			var d = a,
				e = b;
			return d = d.replace(new RegExp(e, "g"), e.toLowerCase())
		}), c = c.replace(/url\(\/\//g, "url(http://"), c = c.replace(/\?\s{15,99}/g, ""), c = c.replace(/[\t\r\n]/g, ""), c = c.replace(/￥|¥/g, "￥"), c = c.replace(/&yen;/g, "￥"), c = c.replace(/&amp;yen;/g, "￥"), c = c.replace(/font-family\:宋体\;/g, "font-family:Arial;"), c = c.replace(/src=('|"{1})\/\//g, "src=$1http://"), c = c.replace(/\&amp\;nbsp\;/g, "&nbsp;"), c = c.replace(/data\-widget\-config\=\"(.*?)\}\s*\"/g, function(a) {
			var b = a;
			return b = b.replace(/data\-widget\-config\=\"/g, ""), b = b.substr(0, b.length - 1), b = b.replace(/\&quot\;/g, "'"), b = b.replace(/\"/g, "'"), b = 'data-widget-config="' + b + '"'
		}), g = $('<div id="temp">' + c + "</div>"), g.children(".ele-junezx-rel").length > 0 && (g = g.children(".ele-junezx-rel").children(".abs"), c = c.replace(/\<div class=\"ele-junezx-rel\" data-title=\"power by junezx 2.0\" style="height:[^\"]*?\"\>\<div class=\"abs\" style=\"width\:990px\;\"\>/g, ""), c = $.trim(c), c = c.substr(0, c.length - 12)), h = !1, g.children().each(function() {
			var i, j, m, k, l, g = $(this);
			g.hasClass("rel") ? (j = g.height(), b.juneOtherCls = g.attr("data-joc") ? g.attr("data-joc") : "", "2" != e ? a.codeImportJune(g) : (i = g.clone(), i.html(""), i.html(i.prop("outerHTML")).addClass("jzdb").css({
				top: 0,
				left: 0
			}), a.toExport(i, !0)), b.addImportHeight && (b.june.height(j + b.addImportHeight), $("#moduleHeight").val(j + b.addImportHeight)), b.click() && a.toExport(g, !1)) : g.hasClass("jpb") ? a.toExport(g, !0) : g.hasClass("japb") ? (k = JSON.parse(g.attr("data-widget-config").replace(/\'/g, '"')), l = k.trigger.replace(/\./g, ""), $("#pc_" + l).length < 1 && g.attr("class", "J_TWidget japb abs").attr("style", "z-index:99;display:none;").appendTo(b.popupContent).attr("data-gen", "yes").prop("id", "pc_" + l), g.attr("data-parentID") && "" != g.attr("data-parentID") && (m = l, l = g.attr("data-parentID")), b.getPopupContent(l, m)) : d && (h = !0)
		}), d && h && (c = c.replace(/ href\=\"/g, ' junehref="'), c = c.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), b.june.children(".junehtml").length <= 0 ? $(b.appConfig["juneCustom"][0]).html(c).tResize({
			tSwitch: !1
		}).prependTo(b.june) : b.june.children(".junehtml").append(c).tResize({
			tSwitch: !1
		})), b.june.find("embed").each(function() {
			$(this).parent().parent().is(b.june) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
		})
	}, a.codeImport = function() {
		b.snapSwitch = !1, d.tDialogCode("", !0, a.codeImportDialogCode)
	}, a.toExport = function(d, e) {
		var f = d.children(),
			g = require("scripts/pencil");
		e && (f = d), b.appidImArray = [], f.each(function(d, e) {
			var h, i, j, k, l, f = $(this);
			if (b.DataCls = null, f.attr("data-appid") && "" != f.attr("data-appid") && (h = f.attr("data-appid")), !h || $.inArray(h, b.appidImArray) < 0) {
				for (i = 0; i < b.imContrast.length; i++) if (j = b.imContrast[i].split("."), k = j[0], l = j[1], e.tagName.toLowerCase() == k && $(e).hasClass(l)) {
					if (b.actType = l, f.attr("data-cls") && "" != f.attr("data-cls") && (b.DataCls = f.attr("data-cls")), b.addImportHeight && f.css("top", b.tParseInt(f.css("top")) + b.addImportHeight), "jllb" == l) {
						g._import(f);
						break
					}
					if ("jsdb" == l && (l = "jfsb", b.actType = "jfsb"), "jdlb" == l && (l = "jcb", b.actType = "jcb"), "jkgb" != l) {
						if ("jspb" == l && $(e).hasClass("jfsb")) continue;
						if ("jspb" == l && $(e).hasClass("jqtb")) continue;
						if ("jspb" == l && $(e).hasClass("jcb")) continue;
						if ("jspb" == l && $(e).hasClass("jdb")) continue;
						if ("jspb" == l && $(e).hasClass("jfyb")) continue;
						if ("jspb" == l && $(e).hasClass("jwfb")) continue;
						c.create(l, a.setCodeConfig, f);
						break
					}
					b.appConfig[l][1].codeImport(f)
				} else if ("div" == k && "jacb" == l && $(e).hasClass("J_TWidget") && $(e).children(".nav_zhicheng").children("div").children().hasClass(l)) {
					b.addImportHeight && f.css("top", b.tParseInt(f.css("top")) + b.addImportHeight), "520px" == f.children(".nav_zhicheng").children("div").css("margin-left") ? f.attr("tFilterMode", "r") : "520px" == f.children(".nav_zhicheng").children("div").css("margin-right") ? f.attr("tFilterMode", "l") : f.attr("tFilterMode", "d"), c.create(l, a.setCodeConfig, f);
					break
				}
				h && b.appidImArray.push(h)
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
		}), b.DataCls && f.attr("data-cls", b.DataCls), b.appConfig[a][1].codeImport(f, c, d, e)
	}, a.codePreview = function() {
		if ("" == $("#moduleHeight").val()) return b.tMessage("您还没有设置模块高度，代码放入装修界面可能遮住下方模块！请在工具左侧模块设置中设置模块高度。", "module"), void 0;
		b.previewType = b.june.children(b.appCls + "[data-dbltype='jib']").length > 0 ? "normal" : "normal";
		var d, c = a.codeExport(!0),
			e = a.getCodeObj();
		"normal" == b.previewType && (d = $("#previewForm"), d.children("textarea:eq(0)").val(c), e.length > 0 && d.children("textarea:eq(1)").val(JSON.stringify(e)), d.submit(), d.children("textarea").html(""))
	}, a
}), define("scripts/moduleManage.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax"),
		d = require("scripts/UI_Dialog");
	return b.show() && (a.toSet = function(a) {
		var c = $(a.target),
			d = c.attr("name"),
			e = c.val();
		"moduleBgimg" == d ? (e = e.replace(/"/g, ""), checkUrl(e) && b.june.css({
			backgroundImage: "url(" + e + ")"
		}), "" == e && b.june.css({
			backgroundImage: "none"
		})) : "moduleWidth" == d ? b.june.width(b.tParseInt(e)) : "moduleHeight" == d ? ("" == e && (e = 2560), b.june.height(b.tParseInt(e))) : "moduleBgcolor" == d && ("" == e && (e = "#f2f4f8"), b.june.css({
			backgroundColor: e
		}))
	}), a.snapSave = function(a) {
		require("scripts/action"), b.tLoading(!0), b.startParse = !0, setTimeout(function() {
			var d, c = {};
			c.nType = "jvs_1_0", b.tempArrayLabel = [], b.june.children(b.appCls).each(function() {
				b.tempArrayLabel.push($(this).attr("data-appLabel") || "")
			}), c.arrayLabelName = b.tempArrayLabel, c.juneHeightVal = $("#moduleHeight").val(), b.juneSnapArray1 = $.extend({}, c), b.tLoading(!1), b.startParse = !1, d = require("scripts/code"), d.getCodeExport(function(b) {
				a(b)
			}, !0, !0)
		}, 1e3)
	}, a.toSave = function(e) {
		b.tUserLogin ? d.tDialogSave(function(d, f, g, h) {
			return "" == d ? (b.tMessage("请输入一个名称！"), void 0) : (b.tLoading(!0), d != g ? (f.dialog("close"), $(".ui-tooltip").hide(), a.snapSave(function(f) {
				var g = {};
				g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("save.php", {
					saveName: d,
					userName: e[1],
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
								type: "cover",
								saveObj: g
							}, function(c) {
								b.tLoading(!0), b.tLoading(!1), b.tMessage(c[1]), c[2] && (b.openSaveDocID = c[2]), b.openSaveDocName = d, c[3] && (b.openSaveDocTime = c[3]), a.getSave([b.tUserLogin, b.tUserName])
							})
						})
					} else b.tMessage(f[1])
				})
			})) : b.tConfirm("您已经保存了一份相同名称的存档，是否覆盖该存档？", function() {
				f.dialog("close"), $(".ui-tooltip").hide(), a.snapSave(function(f) {
					var g = {};
					g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("save.php", {
						saveName: d,
						userName: e[1],
						sasID: h || "",
						type: "cover",
						saveObj: g
					}, function(c) {
						b.tLoading(!0), b.tLoading(!1), b.tMessage(c[1]), b.openSaveDocName = d, c[2] && (b.openSaveDocID = c[2]), c[3] && (b.openSaveDocTime = c[3]), a.getSave([b.tUserLogin, b.tUserName])
					})
				})
			}, function() {
				b.tLoading(!1)
			}), void 0)
		}) : b.tMessage("登录失效，请重新登录！", "login")
	}, a.autoSave = function() {}, a.showSave = function(c, d, e, f) {
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
		a && c.ajaxJsonT("load.php", {
			userName: a[1],
			type: "list"
		}, function(a) {
			try {
				$("#tSaveList").children("ul").html("");
				var c, d, e = a.length;
				for (d = e > 7 ? 7 : e, c = 0; d > c; c++)"系统自动保存" == a[c].saveName ? $("#tSaveList").children("ul").prepend('<li id="userSaveBySystem" title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>") : $("#tSaveList").children("ul").append('<li title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>");
				setPage(document.getElementById("tSavePage"), Math.ceil(a.length / 7), 1, ["", ""]), $("#tSaveList").children("ul").children("li").hide(), $("#tSaveList").children("ul").children("li").slice(0, 7).show(), $("#tSavePage").off("click").on("click", function() {
					var e = b.tParseInt($("#tSavePage").children("a.on").html()) - 1;
					if ($("#tSaveList").children("ul").children("li").length < 7 * (e + 1) + 1) for (c = d, d = 7 * (e + 1); d > c; c++) a.length > c && ("系统自动保存" == a[c].saveName ? $("#tSaveList").children("ul").prepend('<li id="userSaveBySystem" title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>") : $("#tSaveList").children("ul").append('<li title="" data-save="' + a[c].ID + '" data-saveName="' + a[c].saveName + '" data-saveTime="' + a[c].saveTime + '">' + '<span class="t-save-text">' + a[c].saveName + "</span>" + '<span class="t-save-time">' + a[c].saveTime + "</span>" + '<span class="t-save-use" data-target="save-clicked" data-saveType="use"><i></i>应用</span>' + '<span class="t-save-delete" data-target="save-clicked" data-saveType="delete"><i></i>删除</span>' + "</li>"));
					$("#tSaveList").children("ul").children("li").hide(), $("#tSaveList").children("ul").children("li").slice(7 * e, 7 * (e + 1)).show()
				})
			} catch (f) {}
		})
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
		c.children("li").height(40), c.find("div.t-save-detail"), a.height(120), d = a.children(":eq(0)").html(), a.append('<div class="t-save-detail" style="height:80px;"><img height="100%" src="userSaveSnap/' + b.tUserName + d + '.png"></div>')
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
}), define("scripts/char.js", function(a) {
	return a.create = function() {
		var a = "ez";
		return a
	}, a.click = function() {
		var a = "un";
		return a
	}, a
}), define("scripts/main.js", function(a) {
	var c = (require("scripts/lib/ucren"), require("scripts/D")),
		n = (require("scripts/action"), require("scripts/contextMenu"), require("scripts/ksin"), require("scripts/little"), require("scripts/layer"), require("scripts/controlBtn"), require("scripts/little"), require("scripts/littleTip"), require("scripts/TopBannerTip"), require("scripts/mouse"), require("scripts/keyboard"), require("scripts/quickSet"));
	return a.start = function() {
		$.widget("custom.fontselectmenu", $.ui.selectmenu, {
			_renderItem: function(a, b) {
				var c = $("<li>");
				return $("<span>", {
					style: b.element.attr("data-style"),
					text: b.label
				}).appendTo(c), c.appendTo(a)
			}
		}), $("#goToNewVer3w, #goToNewVer3, #gtv3_tguse").on("click", function() {
			window.open(window.location.origin + "/3.0/user_login.php", "_blank")
		}), $("#gtv3_tgclose").on("click", function() {
			$("#gtv3_tg30").hide()
		}), n.execQsSet(), $("#june").on("resize", function() {
			var b = $(this),
				c = b.width(),
				d = b.height();
			$(".rg-overlay").attr("data-h", c).attr("data-v", d).trigger("rulerInit")
		}), $(c.tLoadingDiv).appendTo(c.b).hide(), c.create() && (c.toClearInit(), startModule("scripts/checkHash"))
	}, a
}), define("scripts/user.js", function(a) {
	var b = require("scripts/D"),
		c = b.tUserDate.replace(/-/g, ""),
		d = b.tParseInt(c.substr(6, 2)),
		e = [2, 11, 13, 2, 8, 17, 5 - d, 13];
	return $.ajax({
		url: "user.php",
		type: "POST",
		data: {
			type: "g"
		},
		dataType: "json",
		success: function(f) {
			f && "yes" == f[0] && (b.tUserIp = f[1], c = f[2], d = b.tParseInt(c.substr(6, 2)), e = [2, 11, 13, 2, 8, 17, 5 - d, 13], b.tUserDateTime = f[3]), a.click()
		},
		error: function() {
			a.click()
		}
	}), a.initMain = function() {
		!0 && (b.arrayX = !0)
	}, a.init = function() {
		b.tUserLogin && "" != b.tUserName ? (!0 && (b.arrayX = !0), $.widget("custom.fontselectmenu", $.ui.selectmenu, {
			_renderItem: function(a, b) {
				var c = $("<li>");
				return $("<span>", {
					style: b.element.attr("data-style"),
					text: b.label
				}).appendTo(c), c.appendTo(a)
			}
		}), a.click(), $(b.tLoadingDiv).appendTo(b.b).hide(), b.toClearInit()) : (!0 && (b.arrayX = !1, b.numberS = !1), b.tUserLogin && "" != b.tUserName || a.userMessage("京东工具目前仅提供于注册用户使用！<a target='_blank' href='void(0)' onclick=\"toMLogin()\" style='color:#007799;'>点击此处登录</a>。"))
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
			url: "user.php",
			type: "POST",
			data: {
				type: "k"
			},
			success: function(b) {
				var c = a.keyArray();
				b && "" != b ? ("0" == b || b != c) && a.userMessage() : a.userMessage()
			},
			error: function() {
				a.userMessage()
			}
		})
	}, a.click = function() {
		b.tUserLogin && "" != b.tUserName || $.ajax({
			url: "user.php",
			type: "POST",
			data: {
				type: "c"
			},
			success: function(b) {
				"yes" == b ? a.create() : a.userMessage()
			},
			error: function() {
				a.userMessage()
			}
		})
	}, a
}), define("scripts/tAjax.js", function(a) {
	var b = require("scripts/D");
	return a.ajaxJson = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.when($.ajax({
			url: "" + a,
			type: "POST",
			data: c,
			dataType: "json",
			cache: !1,
			timeout: 15e3
		})).then(function(a) {
			b.tLoading(!1), d.call(this, a), b.autoJuneHeight()
		}, function() {
			b.tLoading(!1), d.call(this, []), b.autoJuneHeight()
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
					}), e.length > 0 && (c.call(this, e), b.tLoading(!1), b.autoJuneHeight()), b.tempImgDivBoxTimeout = setTimeout(function() {
						$("#tempImgDivBox").html("")
					}, 1e4))
				})
			}
		} else $('<img src="' + a.img + '"/>').appendTo($("#tempImgDivBox")).on("load", function() {
			var a = getImgNaturalDimensions(this, function(a, d) {
				a ? (c.call(this, [a, d]), b.tLoading(!1), b.autoJuneHeight()) : (c.call(this, ["", ""]), b.tLoading(!1), b.autoJuneHeight())
			});
			a && a[0] && (c.call(this, a), b.tLoading(!1), b.autoJuneHeight()), b.tempImgDivBoxTimeout = setTimeout(function() {
				$("#tempImgDivBox").html("")
			}, 1e4)
		})
	}, a.bJuneZx = function(a, c) {
		var d = ["Ca", "oN", "Im", "aD"];
		return ("cnzoom.com" == window.location.hostname || "cnzoom.com" == window.location.hostname || "local.cnzoom.com" == window.location.hostname||1==1) && (d = ["jU", "zX", "Ne", "tF"]), c = c || 0, a = a || b.tUserDateTime.toString() + "dajialaizhaocha", a = $.base64.encode(a.substr(12, 4) + d[0] + a.substr(4, 3) + d[3] + a.substr(7, 5) + d[1] + a.substr(0, 4) + d[2] + a.substr(16)), c++, 4 > c ? arguments.callee(a, c) : a
	}, a.ajaxJsonT = function(c, d, e, f) {
		"gcc.php" == c && (d.hot = a.bJuneZx()), f = f || "参数获取失败，请重新尝试！", $.ajax({
			url: "" + c,
			type: "POST",
			data: d,
			dataType: "json",
			async: !0,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), e.call(this, a), b.autoJuneHeight()
			}
			/**,
			error: function(a) {
				b.tLoading(!1), b.tMessage(f + " 错误码：" + a.status)
			}
			**/
		})
	}, a.ajaxJsonS = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.ajax({
			url: "" + a,
			type: "POST",
			data: c,
			dataType: "json",
			async: !0,
			cache: !1,
			success: function(a) {
				b.tLoading(!1), d.call(this, a), b.autoJuneHeight()
			},
			error: function(a) {
				b.tLoading(!1), b.tMessage("参数获取失败，请重新尝试！错误码：" + a.status)
			}
		}), void 0)
	}, a.ajaxText = function(a, c, d) {
		return b.startParse ? !0 : (b.tLoading(!0), $.when($.ajax({
			url: "" + a,
			type: "POST",
			data: c,
			dataType: "text",
			cache: !1,
			timeout: 15e3
		})).then(function(a) {
			b.tLoading(!1), d.call(this, a), b.autoJuneHeight()
		}, function() {
			b.tLoading(!1), d.call(this, ""), b.autoJuneHeight()
		}), void 0)
	}, a.ajaxHtml = function(a, c, d) {
		b.tLoading(!0), ("anchorSelect" in c || "bigoppo.php" == a) && (b.anchor = [], b.june.children(b.appCls + "[data-dblType='jmdb']").each(function() {
			var a = JSON.parse($(this).attr("data-config")),
				c = a.anchorName;
			b.anchor.push(c)
		}), c.anchorName = b.anchor.join(",")), "appIDSelect" in c && (b.appIDArray = [], b.appNameArray = [], b.june.children(b.appCls).each(function() {
			var d, a = $(this),
				c = a.attr("data-dblType");
			"jpb" != c && "jib" != c && "jmdb" != c && "jsfb" != c && "jadb" != c && (b.appIDArray.push(a.attr("appID")), d = a.attr("data-appLabel") || a.attr("data-appName") || a.attr("appID"), b.appNameArray.push(d), "jfsb" == c ? a.children(b.appChildCls + '[data-attachtype="jfsbSmallImg"],' + b.appChildCls + '[data-attachtype="jqtbSmallImg"]').each(function(a) {
				var e = $(this);
				b.appIDArray.push(e.attr("attachID")), b.appNameArray.push(d + "-缩略图" + (a + 1))
			}) : "jfyb" == c && a.children(b.appChildCls + '[data-attachType="jfybPanel"]').children(b.appOtherCls + '[data-attachtype="jfybSmallImg"]').each(function(a) {
				var e = $(this);
				b.appIDArray.push(e.attr("attachID")), b.appNameArray.push(d + "-缩略图" + (a + 1))
			}))
		}), c.appIDArray = b.appIDArray.join(","), c.appNameArray = b.appNameArray.join(",")), d || (d = function(a) {
			$("#" + b.dialogID).html(a).dialog("open"), $("#" + b.dialogID).find("textarea").parent("li").css("height", "auto"), $("#" + b.dialogID).find("textarea, input").each(function() {
				var a = $(this);
				a.prop("spellcheck", !1)
			})
		}), c = JSON.parse(JSON.stringify(c).replace(/\&nbsp\;/g, "&amp;nbsp;")), c.jf1 = $jntfn || "008", c.jf2 = $jnzxx || "009", "spic.php" == a && (a = "spic" + b.tParseInt(10 * Math.random()) + ".php"), $.ajax({
			url: "" + a,
			type: "POST",
			data: c,
			dataType: "html",
			success: function(a) {
				b.tLoading(!1), d.call(this, a), b.autoJuneHeight()
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
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/moduleManage"), a.create = function(c, d, e) {
		var f, g, h, i, j, q, k, l, m, n, o, p;
		if (d && !(d.length < 1) && "june" == b.june.attr("id")) {
			if (b.june.find("map").each(function() {
				var a = $(this).attr("name") || "";
				a = a.replace(/--juneForMapAbCdEfG/g, ""), $(this).attr("name", a + "--juneForMapAbCdEfG")
			}), f = b.actionList.children(b.actionSelected).index(), f != b.actionCollection.length - 1) {
				for (b.actionConfig.length = b.actionCollection.length = f + 1, $(b.actionCls + ":gt(" + f + ")").remove(), g = 0; g < b.actionCollection.length; g++) if (h = b.actionCollection[g], i = h.appID, "remove" == h.type) if ("array" == typeof i) for (j = 0; j < i.length; j++) b.dump.children("[appID='" + i[j] + "']").addClass("t-temp-noclear"), b.dumpLayer.children("[appID='" + i[j] + "']").remove().addClass("t-temp-noclear");
				else b.dump.children("[appID='" + i + "']").addClass("t-temp-noclear"), b.dumpLayer.children("[appID='" + i + "']").addClass("t-temp-noclear");
				"remove" == c && (e ? e.addClass("t-temp-noclear") : d.addClass("t-temp-noclear")), b.dump.children(":not(.t-temp-noclear)").remove(), b.dumpLayer.children(":not(.t-temp-noclear)").remove(), $(".t-temp-noclear").removeClass("t-temp-noclear")
			}
			if ("juneSnap" != c) {
				if ("junehtml" == c) return a.createForJune(c, d), void 0;
				if ("align" == c) return a.createForAlign(c, d), void 0;
				if (d.length > 1) return a.createForTimes(c, d, e), void 0;
				switch (k = "", l = {}, i = d.attr("appID"), m = d.attr("data-dblType"), n = $(b.layerCls + "[appID='" + i + "']"), o = d.attr("data-appLabel") || d.attr("data-appName") || b.contrast[m], p = JSON.parse(d.attr("data-config")), p.width = d.width(), p.height = d.height(), p.top = b.tParseInt(d.css("top")), p.left = b.tParseInt(d.css("left")), p.childConfig && p.childConfig.length > 0 && d.children(b.appChildCls).each(function() {
					var e, d = $(this);
					for (e in p.childConfig) p.childConfig[e] && p.childConfig[e].attachID && d.attr("attachID") == p.childConfig[e].attachID && (p.childConfig[e].width = d.width(), p.childConfig[e].height = d.height(), p.childConfig[e].top = b.tParseInt(d.css("top")), p.childConfig[e].left = b.tParseInt(d.css("left")))
				}), "jib" == m ? l.jibHtml = d.html() : "jsfb" == m ? l.jsfbHtml = d.html() : (l.attachPos = [], d.find("[attachID]").each(function() {
					var a = {},
						c = $(this),
						d = c.attr("attachID");
					a.attachID = d, a.width = c.width(), a.height = c.height(), a.top = b.tParseInt(c.css("top")), a.left = b.tParseInt(c.css("left")), l.attachPos.push(a)
				})), l.attach = !1, e && (l.attach = !0, l.attachID = e.attr("attachID"), l.parentType = m, m = e.attr("data-attachType"), o = e.attr("data-appLabel") || e.attr("data-appName") || b.contrast[m], "jspbChild" == m && (q = $(b.thumbCls + "[attachID='" + l.attachID + "']"))), c) {
				case "add":
					l.text = "添加了" + o, "jsfb" == m && (p.isAct = !0);
					break;
				case "edit":
					l.text = "编辑了" + o;
					break;
				case "copy":
					l.text = "复制了" + o;
					break;
				case "remove":
					l.text = "删除了" + o;
					break;
				case "drag":
					l.text = "移动了" + o;
					break;
				case "move":
					l.text = "轻移了" + o;
					break;
				case "resize":
					l.text = "改变了" + o + "的尺寸";
					break;
				case "moveLayer":
					l.text = "改变了" + o + "的层级", l.appIndex = d.index(), l.layerIndex = n.index(), e && (l.attachIndex = e.index(), "jspbChild" == m && (l.thumbIndex = q.index()));
					break;
				case "moveUp":
					l.text = "将" + o + "上移了一层", l.appIndex = d.index(), l.layerIndex = n.index(), e && (l.attachIndex = e.index(), "jspbChild" == m && (l.thumbIndex = q.index()));
					break;
				case "moveDown":
					l.text = "将" + o + "下移了一层", l.appIndex = d.index(), l.layerIndex = n.index(), e && (l.attachIndex = e.index(), "jspbChild" == m && (l.thumbIndex = q.index()))
				}
				l.type = c, l.appType = m, l.appID = i, k = '<li class="' + b.actionClsVal + ' ui-state-default" data-target="action-clicked"><span class="ui-icon ' + b.actionIconCls[l.type] + '"></span> ' + l.text + "</li>", b.actionCollection.push(l), b.actionConfig.push(p), b.actionList.append(k), b.chooseAction(b.actionCollection.length - 1), b.actionList.slimScroll({
					scrollBy: $(b.actionCls + ":eq(" + (b.actionCollection.length - 1) + ")").offset().top + "px"
				})
			}
		}
	}, b.endParse = !1, a.createForAlign = function(a, c) {
		var d = "",
			e = {},
			f = {};
		switch (e.type = a, f.html = b.june.html(), c) {
		case "left":
			e.text = "将所选应用向左对齐";
			break;
		case "top":
			e.text = "将所选应用向上对齐";
			break;
		case "right":
			e.text = "将所选应用向右对齐";
			break;
		case "bottom":
			e.text = "将所选应用向下对齐";
			break;
		case "HorizontalMiddle":
			e.text = "将所选应用横向居中对齐";
			break;
		case "VerticalMiddle":
			e.text = "将所选应用纵向居中对齐";
			break;
		case "HorizontalRange":
			e.text = "将所选应用横向排列";
			break;
		case "VerticalRange":
			e.text = "将所选应用纵向排列";
			break;
		case "leftCanvas":
			e.text = "将所选应用调整位置";
			break;
		case "HorizontalMiddleCanvas":
			e.text = "将所选应用调整位置";
			break;
		case "rightCanvas":
			e.text = "将所选应用调整位置";
			break;
		case "topCanvas":
			e.text = "将所选应用调整位置";
			break;
		case "VerticalMiddleCanvas":
			e.text = "将所选应用调整位置";
			break;
		case "bottomCanvas":
			e.text = "将所选应用调整位置"
		}
		d = '<li class="' + b.actionClsVal + ' ui-state-default" data-target="action-clicked"><span class="ui-icon ' + b.actionIconCls[e.type] + '"></span> ' + e.text + "</li>", b.actionCollection.push(e), b.actionConfig.push(f), b.actionList.append(d), b.chooseAction(b.actionCollection.length - 1), b.actionList.slimScroll({
			scrollBy: $(b.actionCls + ":eq(" + (b.actionCollection.length - 1) + ")").offset().top + "px"
		})
	}, b.endParse = !1, a.createForJune = function(a, c) {
		var d = "",
			e = {},
			f = {};
		e.type = a, f.html = c.html(), e.text = "添加了自定义HTML背景", d = '<li class="' + b.actionClsVal + ' ui-state-default" data-target="action-clicked"><span class="ui-icon ' + b.actionIconCls[e.type] + '"></span> ' + e.text + "</li>", b.actionCollection.push(e), b.actionConfig.push(f), b.actionList.append(d), b.chooseAction(b.actionCollection.length - 1), b.actionList.slimScroll({
			scrollBy: $(b.actionCls + ":eq(" + (b.actionCollection.length - 1) + ")").offset().top + "px"
		})
	}, a.parseForJune = function(a) {
		var d = (b.actionCollection[a], b.actionConfig[a]);
		b.june.find(".junehtml").length < 1 && b.dump.children(".junehtml").length > 0 && b.dump.children(".junehtml").removeAttr("data-status").addClass(b.appClsVal).prependTo(b.june), b.june.find(".junehtml").html(d.html)
	}, a.parseForAlign = function(a) {
		var d = (b.actionCollection[a], b.actionConfig[a]);
		b.jSelectsedDom = $(), b.june.html(d.html), b.june.find(b.appCls + ".ui-selected").each(function() {
			b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
		}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
			b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
		})
	}, a.createForTimes = function(a, c, d) {
		var e = "",
			f = {},
			g = [];
		appID = [], appType = [], d = [], f.timesType = !0, f.attach = [], f.attachID = [], f.appIndex = [], f.layerIndex = [], $.each(c, function(c) {
			var i, j, k, l, h = $(this);
			if (appID[c] = h.attr("appID"), appType[c] = h.attr("data-dblType"), i = $(b.layerCls + "[appID='" + appID[c] + "']"), j = JSON.parse(h.attr("data-config") || "{}"), j.width = h.width(), j.height = h.height(), j.top = b.tParseInt(h.css("top")), j.left = b.tParseInt(h.css("left")), j.childConfig && j.childConfig.length > 0) for (c = 0; c < j.childConfig.length; c++) {
				k = h.children(b.appChildCls + ":eq(" + c + ")");
				for (l in j.childConfig) k.attr("attachID") == j.childConfig[l].attachID && (j.childConfig[c].width = k.width(), j.childConfig[c].height = k.height(), j.childConfig[c].top = b.tParseInt(k.css("top")), j.childConfig[c].left = b.tParseInt(k.css("left")))
			}
			switch (f.attach[c] = !1, d[c] && (f.attach[c] = !0, f.attachID[c] = d.attr("attachID"), appType[c] = d.attr("data-attachType")), a) {
			case "edit":
				f.text = "编辑了所选应用";
				break;
			case "copy":
				f.text = "复制了所选应用";
				break;
			case "remove":
				f.text = "删除了所选应用";
				break;
			case "move":
				f.text = "轻移了所选应用";
				break;
			case "drag":
				f.text = "移动了所选应用";
				break;
			case "resize":
				f.text = "改变了所选应用的尺寸";
				break;
			case "moveLayer":
				f.text = "改变了所选应用的层级", f.appIndex[c] = h.index(), f.layerIndex[c] = i.index()
			}
			g.push(j)
		}), f.type = a, f.appType = appType, f.appID = appID, e = '<li class="' + b.actionClsVal + ' ui-state-default" data-target="action-clicked"><span class="ui-icon ' + b.actionIconCls[f.type] + '"></span> ' + f.text + "</li>", b.actionCollection.push(f), b.actionConfig.push(g), b.actionList.append(e), b.chooseAction(b.actionCollection.length - 1), b.actionList.slimScroll({
			scrollBy: $(b.actionCls + ":eq(" + (b.actionCollection.length - 1) + ")").offset().top + "px"
		})
	}, a.parseForTimes = function(a) {
		var d = b.actionCollection[a],
			e = $.extend({}, b.actionConfig[a]);
		e && $.each(e, function(a) {
			var j, k, m, n, o, l = !0,
				g = $(b.appCls + "[appID='" + d.appID[a] + "']"),
				i = $(b.layerCls + "[appID='" + d.appID[a] + "']");
			if (g.length > 0) {
				if (d.appType && d.appType[a] && c[d.appType[a]] && c[d.appType[a]][1].tSubmit(e[a], g), d.attach && d.attach[a] ? (j = g.children(b.appChildCls + "[attachID='" + d.attachID[a] + "']"), "jspb" == appType && (k = $("#tThumb").children(".t-thumb[attachID='" + d.attachID[a] + "']")), b.chooseAppChild(d.attachID[a])) : (0 == a && (l = !1), b.chooseApp(d.appID[a], l), b.chooseLayer(d.appID[a], l)), e[a] && e[a].childConfig && e[a].childConfig.length > 0) for (m = 0; m < e[a].childConfig.length; m++) n = e[a].childConfig[m], o = $(b.appChildCls + "[attachID='" + n.attachID + "']"), o.length > 0 && o.css({
					width: b.tParseInt(n.width),
					height: b.tParseInt(n.height),
					top: b.tParseInt(n.top),
					left: b.tParseInt(n.left)
				});
				g.css({
					width: b.tParseInt(e[a].width),
					height: b.tParseInt(e[a].height),
					top: b.tParseInt(e[a].top),
					left: b.tParseInt(e[a].left)
				}), d.attach[a] ? ("remove" == d.type && j.attr("data-status", b.appChildClsVal).removeClass(b.appChildClsVal).appendTo(b.dump), "jspb" == appType && ("remove" == d.type && k.attr("data-status", b.thumbClsVal).removeClass(b.thumbClsVal).appendTo(b.dumpLayer), b.showThumb(d.appID, !0))) : "remove" == d.type && (g.attr("data-status", b.appClsVal).removeClass(b.appClsVal).appendTo(b.dump), i.attr("data-status", b.layerClsVal).removeClass(b.layerClsVal).appendTo(b.dumpLayer))
			}
		})
	}, a.click = function(c, d) {
		var f, g, h, e = $(c.target),
			d = "number" == typeof d ? d : b.tParseInt(e.index());
		b.chooseAction(d), b.tLoading(!0), b.startParse = !0, b.tempSaveHtml = {}, b.tempSaveHtml.html = b.june.html(), b.tempSaveHtml.layerList = b.layerList.html(), b.tempSaveHtml.popupContent = b.popupContent.html(), setTimeout(function() {
			for (f = 0, g = d + 1; g > f; f += 1) h = f == d ?
			function() {
				b.show() && (b.tLoading(!1), b.startParse = !1)
			} : void 0, a.parse(f, d, h)
		}, 100)
	}, a.parse = function(d, e, f) {
		var i, j, k, l, m, n, o, p, q, r, s, t, u, v, g = b.actionCollection[d],
			h = $.extend({}, b.actionConfig[d]);
		try {
			if ("blank" == g.type) b.june.children(b.appCls).each(function() {
				var d = $(this),
					e = $(this).attr("appID"),
					f = $(b.layerCls + "[appID='" + e + "']");
				d.attr("data-status", b.appClsVal).removeClass(b.appClsVal), f.attr("data-status", b.layerClsVal).removeClass(b.layerClsVal)
			}), b.june.children("[data-status='" + b.appClsVal + "']").appendTo(b.dump), b.layerList.children("[data-status='" + b.layerClsVal + "']").appendTo(b.dumpLayer), $("#tParentThumb").hide(), $("#tThumb").hide(), b.popupContent.html(""), b.dump.children("[data-status='" + b.appClsVal + "'][data-Jsnap='yes']").length > 0 && b.dump.children("[data-status='" + b.appClsVal + "'][data-Jsnap='yes']").addClass(b.appClsVal).removeAttr("data-status").appendTo(b.june), b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][data-Jsnap='yes']").length > 0 && b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][data-Jsnap='yes']").addClass(b.layerClsVal).removeAttr("data-status").appendTo(b.layerList), b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][data-Jsnap='yes']").length > 0 && b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][data-Jsnap='yes']").addClass(b.thumbClsVal).removeAttr("data-status").appendTo($("#tThumb")), b.dump.children("[data-status='" + b.appChildClsVal + "'][data-Jsnap='yes']").length > 0 && b.dump.children("[data-status='" + b.appChildClsVal + "'][data-Jsnap='yes']").each(function() {
				var a = $(this).attr("appID").addClass(b.appChildClsVal).removeAttr("data-status");
				$(this).appendTo($(b.appCls + "[appID='" + a + "']"))
			});
			else {
				if ("junehtml" == g.type) return a.parseForJune(d), d == e && f && f(), void 0;
				if ("align" == g.type) return a.parseForAlign(d), d == e && f && f(), void 0;
				if ("array" == $.type(g.appID) && g.appID.length > 1) return a.parseForTimes(d), d == e && f && f(), void 0;
				if ("juneSnap" == g.type) return g = b.actionCollection[d], h = $.extend({}, b.actionConfig[d]), "yes" != g.used ? (b.dump.html(h.dumphtml), b.dumpLayer.html(g.dumpLayer), b.popupContent.html(g.popupContent), b.jSelectsedDom = $(), b.june.html(h.html), b.june.find(b.appCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				}), b.layerList.html(g.layerList), b.june.find(b.appCls).attr("data-Jsnap", "yes"), b.june.find(b.appChildCls).attr("data-Jsnap", "yes"), b.layerList.children(b.layerCls).attr("data-Jsnap", "yes")) : (b.june.children(b.appCls).each(function() {
					var d = $(this),
						e = $(this).attr("appID"),
						f = $(b.layerCls + "[appID='" + e + "']");
					d.attr("data-status", b.appClsVal).removeClass(b.appClsVal), f.attr("data-status", b.layerClsVal).removeClass(b.layerClsVal)
				}), b.june.children("[data-status='" + b.appClsVal + "']").appendTo(b.dump), b.layerList.children("[data-status='" + b.layerClsVal + "']").appendTo(b.dumpLayer), $("#tParentThumb").hide(), $("#tThumb").hide(), b.popupContent.html(""), b.dump.children("[data-status='" + b.appClsVal + "'][data-Jsnap='yes']").length > 0 && b.dump.children("[data-status='" + b.appClsVal + "'][data-Jsnap='yes']").addClass(b.appClsVal).removeAttr("data-status").appendTo(b.june), b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][data-Jsnap='yes']").length > 0 && b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][data-Jsnap='yes']").addClass(b.layerClsVal).removeAttr("data-status").appendTo(b.layerList), b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][data-Jsnap='yes']").length > 0 && b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][data-Jsnap='yes']").addClass(b.thumbClsVal).removeAttr("data-status").appendTo($("#tThumb")), b.dump.children("[data-status='" + b.appChildClsVal + "'][data-Jsnap='yes']").length > 0 && b.dump.children("[data-status='" + b.appChildClsVal + "'][data-Jsnap='yes']").each(function() {
					var a = $(this).attr("appID").addClass(b.appChildClsVal).removeAttr("data-status");
					$(this).appendTo($(b.appCls + "[appID='" + a + "']"))
				})), g.used = "yes", d == e && f && f(), void 0;
				if ("juneAppSave" == g.type) return b.dump.children("[data-status='" + b.appClsVal + "'][data-juneAppSave='yes']").length > 0 && b.dump.children("[data-status='" + b.appClsVal + "'][data-juneAppSave='yes']").addClass(b.appClsVal).removeAttr("data-status").appendTo(b.june), b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][data-juneAppSave='yes']").length > 0 && b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][data-juneAppSave='yes']").addClass(b.layerClsVal).removeAttr("data-status").appendTo(b.layerList), b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][data-juneAppSave='yes']").length > 0 && b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][data-juneAppSave='yes']").addClass(b.thumbClsVal).removeAttr("data-status").appendTo($("#tThumb")), b.dump.children("[data-status='" + b.appChildClsVal + "'][data-juneAppSave='yes']").length > 0 && b.dump.children("[data-status='" + b.appChildClsVal + "'][data-juneAppSave='yes']").each(function() {
					var a = $(this).attr("appID").addClass(b.appChildClsVal).removeAttr("data-status");
					$(this).appendTo($(b.appCls + "[appID='" + a + "']"))
				}), d == e && f && f(), void 0;
				if ("add" == g.type || "copy" == g.type ? (g.attach ? (i = $(b.appCls + "[appID='" + g.appID + "']"), k = $(b.layerCls + "[appID='" + g.appID + "']"), j = b.dump.children("[data-status='" + b.appChildClsVal + "'][attachID='" + g.attachID + "']"), j.addClass(b.appChildClsVal).removeAttr("data-status").appendTo(i), i.length > 0 && i.attr("data-config", JSON.stringify(h)), "jspbChild" == g.appType && (m = b.dumpLayer.children("[data-status='" + b.thumbClsVal + "'][attachID='" + g.attachID + "']"), m.addClass(b.thumbClsVal).removeAttr("data-status").prependTo($("#tThumb")))) : (i = b.dump.children("[data-status='" + b.appClsVal + "'][appID='" + g.appID + "']"), k = b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][appID='" + g.appID + "']"), i.length > 0 && i.addClass(b.appClsVal).attr("data-config", JSON.stringify(h)).removeAttr("data-status").appendTo(b.june), k.addClass(b.layerClsVal).removeAttr("data-status").prependTo(b.layerList), "jspb" == g.appType && "add" == g.type && (b.updateJspbChild(i), i.children(b.appChildCls + ":not(.t-app-jspcb)").each(function() {
					var a = $(this),
						c = a.attr("attachID");
					a.attr("data-status", b.appChildClsVal).removeClass(b.appChildClsVal).appendTo(b.dump), $("#tThumb").children(b.thumbCls + "[attachID='" + c + "']").attr("data-status", b.thumbClsVal).removeClass(b.thumbClsVal).appendTo(b.dumpLayer)
				})), "jkgb" == g.appType && "add" == g.type && (i.children(b.appChildCls + ".t-app-jkgb").attr("data-status", b.appChildClsVal).removeClass(b.appChildClsVal).appendTo(b.dump), b.dump.children("[data-status='" + b.appChildClsVal + "'][appID='" + g.appID + "']:not(.t-app-jkgb)").addClass(b.appChildClsVal).removeAttr("data-status").appendTo(i)), "jbob" == g.appType && "add" == g.type && i.children(b.appChildCls + ".t-app-jbocb").attr("data-status", b.appChildClsVal).removeClass(b.appChildClsVal).appendTo(b.dump)), i.length > 0 && (n = g.parentType || g.appType, c[n] && c[n][1] && c[n][1].tSubmit(h, i))) : (i = $(b.appCls + "[appID='" + g.appID + "']"), k = $(b.layerCls + "[appID='" + g.appID + "']"), n = g.parentType || g.appType, c[n][1].tSubmit(h, i), g.attach ? (l = i.children(b.appChildCls + "[attachID='" + g.attachID + "']"), "jspb" == n && (m = $("#tThumb").children(".t-thumb[attachID='" + g.attachID + "']")), b.chooseAppChild(g.attachID)) : (b.chooseApp(g.appID), b.chooseLayer(g.appID))), h.childConfig && h.childConfig.length > 0) for (p = h.childConfig.length, o = 0; p > o; o++) q = h.childConfig[o], r = i.children(b.appChildCls + "[attachID='" + q.attachID + "']"), r.css({
					width: q.width,
					height: q.height,
					top: q.top,
					left: q.left
				});
				if ("jib" == n) i.html(g.jibHtml), b.jSelectsedDom = $(), b.june.html(h.html), b.june.find(b.appCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				});
				else if ("jsfb" == n) i.html(g.jsfbHtml), b.jSelectsedDom = $(), b.june.html(h.html), b.june.find(b.appCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
					b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
				});
				else if (g.attachPos && g.attachPos.length > 0) for (t = g.attachPos.length, s = 0; t > s; s++) u = g.attachPos[s].attachID, v = i.children(b.appChildCls + "[attachID='" + u + "']"), v.css({
					width: g.attachPos[s].width,
					height: g.attachPos[s].height,
					top: g.attachPos[s].top,
					left: g.attachPos[s].left
				});
				i.css({
					width: h.width,
					height: h.height,
					top: h.top,
					left: h.left
				}), g.attach ? ("remove" == g.type && l.attr("data-status", b.appChildClsVal).removeClass(b.appChildClsVal).appendTo(b.dump), "jspb" == n && ("remove" == g.type && m.attr("data-status", "t-thumb").removeClass("t-thumb").appendTo(b.dumpLayer), b.showThumb(g.appID, !0))) : "remove" == g.type && (i.attr("data-status", b.appClsVal).removeClass(b.appClsVal).appendTo(b.dump), k.attr("data-status", b.layerClsVal).removeClass(b.layerClsVal).appendTo(b.dumpLayer)), g.attach ? ("moveLayer" == g.type || "moveUp" == g.type || "moveDown" == g.type && !! g.attachIndex) && (g.attachIndex - 1 >= 7 ? l.insertAfter(i.children("[attachID!='" + g.attachID + "']:eq(" + (g.attachIndex - 1) + ")")) : l.insertAfter(i.children(":eq(7)")), g.thumbIndex - 1 >= 0 ? $(b.thumbCls + "[attachID='" + g.attachID + "']").insertAfter($("#tThumb").children(b.thumbCls + "[attachID!='" + g.attachID + "']:eq(" + (g.thumbIndex - 1) + ")")) : $(b.thumbCls + "[attachID='" + g.attachID + "']").prependTo($("#tThumb"))) : ("moveLayer" == g.type || "moveUp" == g.type || "moveDown" == g.type) && (g.appIndex - 1 >= 0 ? $(b.appCls + "[appID='" + g.appID + "']").insertAfter($(b.appCls + "[appID!='" + g.appID + "']:eq(" + (g.appIndex - 1) + ")")) : b.june.children(".junehtml").length > 0 ? $(b.appCls + "[appID='" + g.appID + "']").insertAfter(b.june.children(".junehtml")) : $(b.appCls + "[appID='" + g.appID + "']").prependTo(b.june), g.layerIndex - 1 >= 0 ? $(b.layerCls + "[appID='" + g.appID + "']").insertAfter($(b.layerCls + "[appID!='" + g.appID + "']:eq(" + (g.layerIndex - 1) + ")")) : $(b.layerCls + "[appID='" + g.appID + "']").prependTo(b.layerList))
			}
			d == e && f && f()
		} catch (w) {
			b.popupContent.html(b.tempSaveHtml.popupContent), b.jSelectsedDom = $(), b.june.html(b.tempSaveHtml.html), b.june.find(b.appCls + ".ui-selected").each(function() {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), b.june.find(b.appChildCls + ".ui-selected").each(function() {
				b.jSelectsedDom = b.jSelectsedDom.addGroup($(this))
			}), b.layerList.html(b.tempSaveHtml.layerList), b.tLoading(!1), b.startParse = !1
		}
	}, a
}), define("scripts/ksin.js", function(a) {
	var b = require("scripts/D"),
		c = b.tUserDate.replace(/-/g, ""),
		d = b.tParseInt(c.substr(6, 2)),
		e = [2, 14, 13, 11, 8, 17, 7 - d, 13];
	return $.ajax({
		url: "" + b.a1f[3] + b.a1f[28] + b.bf5[34] + b.fel[10] + b.fel[7] + "." + b.bf5[31] + b.fel[60] + b.bf5[31],
		type: "POST",
		data: {
			type: "g"
		},
		dataType: "json",
		success: function(f) {
			f && "yes" == f[0] && (b.tUserIp = f[1], c = f[2], d = b.tParseInt(c.substr(6, 2)), e = [2, 14, 13, 11, 8, 17, 7 - d, 13], b.tUserDateTime = f[3]), a.click()
		},
		error: function() {
			a.click()
		}
	}), a.initMain = function() {
		!0 && (b.arrayX = !0)
	}, a.init = function() {
		b.tUserLogin && "" != b.tUserName ? (!0 && (b.arrayX = !0), $.widget("custom.fontselectmenu", $.ui.selectmenu, {
			_renderItem: function(a, b) {
				var c = $("<li>");
				return $("<span>", {
					style: b.element.attr("data-style"),
					text: b.label
				}).appendTo(c), c.appendTo(a)
			}
		}), a.click(), $(b.tLoadingDiv).appendTo(b.b).hide(), b.toClearInit()) : (!0 && (b.arrayX = !1, b.numberS = !1), b.tUserLogin && "" != b.tUserName || a.tMessage("京东工具目前仅提供于注册用户使用！<a target='_blank' href='void(0)' onclick=\"toMLogin()\" style='color:#007799;'>点击此处登录</a>。", "login"))
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
			url: "" + b.a1f[3] + b.a1f[28] + b.bf5[34] + b.fel[10] + b.bf5[2] + "." + b.bf5[31] + b.fel[60] + b.bf5[31],
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
			url: "" + b.a1f[3] + b.a1f[28] + b.bf5[34] + b.fel[10] + b.a1f[24] + "." + b.bf5[31] + b.fel[60] + b.bf5[31],
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
	return $(b.tParentThumb).appendTo(b.b), $(b.tThumb).appendTo(b.b), $(b.layerMenu).appendTo(b.b).hide(), b.layerList.sortable({
		placeholder: "ui-state-highlight",
		beforeStop: function(b, c) {
			a.dragLayer(c.item)
		}
	}).disableSelection(), $("#tThumb").sortable({
		placeholder: "ui-state-highlight",
		beforeStop: function(b, c) {
			a.dragThumb(c.item)
		}
	}).disableSelection(), a.dragLayer = function(a) {
		length = b.layerList.children("li" + b.layerCls).length, index = length - 1 - a.index() - 1, appID = a.attr("appID"), _thisApp = $(b.appCls + "[appID='" + appID + "']"), appIndex = _thisApp.index(), appIndex != index + 1 && (index >= 0 ? $(b.appCls + "[appID='" + appID + "']").insertAfter(b.june.children(b.appCls + "[appID!='" + appID + "']:eq(" + index + ")")) : b.june.children(".junehtml").length > 0 ? $(b.appCls + "[appID='" + appID + "']").insertAfter(b.june.children(".junehtml")) : $(b.appCls + "[appID='" + appID + "']").prependTo(b.june), c.create("moveLayer", _thisApp)), b.chooseLayer(appID)
	}, a.dragThumb = function(a) {
		length = $("#tThumb").children(b.thumbCls).length, index = length - 1 - a.index() - 1, appID = a.attr("appID"), attachID = a.attr("attachID"), _thisApp = $(b.appCls + "[appID='" + appID + "']"), _thisAppChild = _thisApp.children(b.appChildCls + "[attachID='" + attachID + "']"), appIndex = _thisAppChild.index(), appIndex != index + 1 ? (index >= 0 ? _thisApp.children(b.appChildCls + "[attachID='" + attachID + "']").insertAfter(_thisApp.children(b.appChildCls + "[attachID!='" + attachID + "']:eq(" + index + ")")) : _thisApp.children(b.appChildCls + "[attachID='" + attachID + "']").insertAfter(_thisApp.children(":eq(7)")), b.updateChildConfig(_thisApp), c.create("moveLayer", _thisApp, _thisAppChild)) : b.updateChildConfig(_thisApp)
	}, a.createLayer = function(a, c) {
		if ("june" == b.june.attr("id")) {
			b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal);
			var d = "",
				e = $(b.appCls + "[appID='" + c + "']"),
				f = e.attr("data-appLabel") || e.attr("data-appName");
			b.click() && ("jspb" == a && (d = " t-layer-jspb"), $('<li class="' + b.layerClsVal + d + ' ui-state-default" data-target="layer-selected" appID="' + c + '"><span class="t-layer-eye diseye"  data-target="layerEye-clicked"></span><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><span>' + f + "</span></li>").prependTo(b.layerList)), b.chooseLayer(c)
		}
	}, a.eyeClick = function(a) {
		var d, e, c = $(a.target);
		c.hasClass("t-layer-eye") && (d = c.parent().attr("appID"), e = c.parent().attr("attachID"), e ? c.hasClass("diseye") ? (c.removeClass("diseye").addClass("noneye"), $(b.appChildCls + "[attachID='" + e + "']").hide()) : (c.removeClass("noneye").addClass("diseye"), $(b.appChildCls + "[attachID='" + e + "']").show()) : c.hasClass("diseye") ? (c.removeClass("diseye").addClass("noneye"), $(b.appCls + "[appID='" + d + "']").hide()) : (c.removeClass("noneye").addClass("diseye"), $(b.appCls + "[appID='" + d + "']").show()))
	}, a.select = function(a) {
		if ("tclist" == a.target.parentNode.id) {
			var c = $(a.target),
				d = a.ctrlKey,
				e = c.attr("appID"),
				f = $(b.appCls + "[appID='" + e + "']"),
				g = f.attr("data-dblType");
			b.chooseLayer(e, !! d), "jspb" == g && d ? c.hasClass(b.layerSelectedVal) ? (f.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(f)) : (f.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(f[0])) : b.chooseApp(e, !! d)
		}
	}, a.selectThumb = function(a) {
		if ("tThumb" == a.target.parentNode.id || "tParentThumb" == a.target.id) {
			var c = $(a.target),
				d = c.attr("appID"),
				e = c.attr("attachID");
			a.ctrlKey ? c.hasClass(b.thumbSelectedVal) ? c.removeClass(b.thumbSelectedVal) : c.addClass(b.thumbSelectedVal) : ($("#tParentThumb").removeClass(b.thumbSelectedVal), $("#tThumb").children(b.thumbCls).removeClass(b.thumbSelectedVal), c.addClass(b.thumbSelectedVal)), e ? b.chooseAppChild(e, !! a.ctrlKey) : b.chooseApp(d, !! a.ctrlKey)
		}
	}, a.showLayer = function(a) {
		var i, j, k, l, m, n, o, c = $(a.target),
			d = c.attr("attachID"),
			e = c.offset().left + b.junebox.scrollLeft(),
			f = c.offset().top + b.junebox.scrollTop();
		e + c.outerWidth(), f + c.outerHeight(), $("#tLayerMenu").children("ul").html(""), d && (c = c.parent()), i = c.attr("appID"), j = 'appID="' + i + '"', k = c.attr("data-appLabel") || c.attr("data-appName"), $("#tLayerMenu").children("ul").append('<li class="t-layermenu" data-target="layermenu-clicked" ' + j + ">" + k + "</li>"), c.children(b.appChildCls).each(function() {
			var a = $(this),
				b = a.attr("attachID"),
				c = 'appID="' + i + '" attachID="' + b + '"',
				d = a.attr("data-appLabel") || a.attr("data-appName");
			$("#tLayerMenu").children("ul").append('<li class="t-layermenu" data-target="layermenu-clicked" ' + c + ">" + d + "</li>")
		}), l = a.pageX, m = a.pageY, n = b.w.width() - 142, o = b.w.height() - 212, l > n && (l = n), m > o && (m = o), $("#tLayerMenu").css({
			left: l + 5,
			top: m + 5
		}).show(), a.preventDefault()
	}, b.show() && (a.chooseLayerMenu = function(a) {
		var c = $(a.target),
			d = c.attr("appID"),
			e = c.attr("attachID");
		e ? b.chooseAppChild(e) : b.chooseApp(d), b.chooseLayer(d)
	}), a.updateAppLabel = function(a) {
		var c = a.attr("appID"),
			e = (a.attr("attachID"), $(b.layerCls + "[appID='" + c + "']"));
		e.children("span:eq(2)").html(a.attr("data-appLabel"))
	}, a
}), define("scripts/align.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/action");
	return a.toAlign = function(d) {
		var g, h, i, e = !1,
			f = !1;
		if (b.jSelectsedDom.each(function() {
			var a = $(this);
			a.hasClass(b.appClsVal) && (e = !0), a.hasClass(b.appChildClsVal) && (f = !0)
		}), b.show()) {
			if (g = e ? b.june.children(b.selected) : b.jSelectsedDom, g.length < 1) return b.tMessage(b.alignMessage1), void 0;
			h = b.tParseInt($("#jianju").val()), "" == h && (h = 0)
		}
		return "HorizontalRange" == d ? (a.toRange("left", h), c.create("align", d), void 0) : "VerticalRange" == d ? (a.toRange("top", h), c.create("align", d), void 0) : "leftCanvas" == d || "rightCanvas" == d || "topCanvas" == d || "bottomCanvas" == d || "HorizontalMiddleCanvas" == d || "VerticalMiddleCanvas" == d ? (a.canvasRange(g, d), c.create("align", d), void 0) : 1 == g.length ? (b.tMessage(b.alignMessage), void 0) : (i = a.getReference(g, d), g.each(function() {
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
			a.hasClass(b.appClsVal) && (e = !0), a.hasClass(b.appChildClsVal) && (f = !0)
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
				d.push(b.tParseFloat(a.css("top")) + a.height() / 2);
				break;
			case "VerticalMiddle":
				d.push(b.tParseFloat(a.css("left")) + a.width() / 2)
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
	var c, d, e, f, g, b = require("scripts/D");
	return c = '<div id="tZdyDialogOverlay" class="ui-widget-overlay ui-front" style="z-index: 8001;display:none;opacity: .6;"></div><div id="tZdyDialog" class="t-zdy-dialog"><div id="zdybox" style="height:500px;width:990px;background: #f2f4f8 none repeat scroll 50% 0%;"></div><div id="popupContentZdy" style="height:2560px;width:1920px;display:none;"></div><div id="zdyboxCache" data-isUse="no" style="display:none;overflow:hidden;"></div><div id="popupContentZdyCache" style="height:2560px;width:1920px;display:none;"></div></div><div id="tZdyDialogPanel" class="t-zdy-dialog-panel"></div><div id="tZdyDialogPanelA" class="t-zdy-dialog-panel-a"><div id="tZdyDialogControl" class="t-zdy-dialog-control"><div title="鼠绘热区（Ctrl+M）" class="sidebutton shuhui selected" data-target="otherset-clicked" data-oths="zdycontrol;0"></div><div title="应用框选（Ctrl+U）" class="sidebutton kuangxuan" data-target="otherset-clicked" data-oths="zdycontrol;1"></div><div title="画线" class="sidebutton huaxian" data-target="otherset-clicked" data-oths="zdycontrol;2"></div><div title="禁止鼠标拖动应用" class="sidebutton tuodong selected" data-target="otherset-clicked" data-oths="zdycontrol;3"></div><div title="智能吸附" class="sidebutton znxifu selected" data-target="otherset-clicked" data-oths="zdycontrol;4"></div></div><div style="margin-top:5px;" id="tZdyModulesetPanel"><div class="setinput"><label for="moduleOpacity">模块透明度：</label><select id="moduleOpacity" name="moduleOpacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option></select></div></div><div id="tZdyModulesetPanelScrollLeft"></div><div id="tZdyModulesetPanelScrollRight"></div><div id="tZdyDialogBtn" class="t-zdy-dialog-btn">确定</div><div id="tZdyDialogBtnExit" class="t-zdy-dialog-btn t-zdb-exit">退出</div></div>', $(c).appendTo(b.b), d = $("#tZdyDialog"), e = $("#tZdyDialogOverlay"), g = $("#tZdyDialogPanel"), f = $("#tZdyDialogPanelA"), g.html($("#applist").html()), $("#tZdyModulesetPanel").width(b.w.width() - 344), f.css({
		width: b.w.width() - 144,
		marginLeft: -((b.w.width() - 144) / 2 + 2),
		marginTop: -((b.w.height() - 144) / 2 + 2)
	}), d.css({
		width: b.w.width() - 144 - 150,
		height: b.w.height() - 144 - 40,
		marginLeft: -((b.w.width() - 144) / 2 + 2 - 150),
		marginTop: -((b.w.height() - 144) / 2 + 2 - 40)
	}), g.css({
		height: b.w.height() - 144 - 40,
		marginLeft: -((b.w.width() - 144) / 2 + 2),
		marginTop: -((b.w.height() - 144) / 2 + 2 - 40)
	}), $("#tZdyModulesetPanelScrollLeft").on("click", function() {
		$("#tZdyModulesetPanel").scrollLeft($("#tZdyModulesetPanel").scrollLeft() - 50)
	}), $("#tZdyModulesetPanelScrollRight").on("click", function() {
		$("#tZdyModulesetPanel").scrollLeft($("#tZdyModulesetPanel").scrollLeft() + 50)
	}), g.children().attr("data-forUse", "zdybox"), $("#tZdyDialogControl").tooltip({
		position: {
			my: "left top",
			at: "right-15 top+10"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	}), $("#tZdyDialogBtn").on("click", function() {
		var a = require("scripts/mouse"),
			c = require("scripts/code"),
			h = $("#zdybox").attr("zdyName"),
			i = $("#zdybox").attr("zdyAppID"),
			j = $("#zdybox").attr("zdyAttachID"),
			k = $("#zdybox").attr("zdyConfig") ? JSON.parse($("#zdybox").attr("zdyConfig") || "{}") : {},
			l = $(b.appCls + "[appID='" + i + "']"),
			m = JSON.parse(l.attr("data-config") || "{}"),
			n = $("#zdybox").width(),
			o = $("#zdybox").height();
		k = $.extend(!0, {}, m, k), c.getCodeExport(function(i) {
			var q, r, s, t, u, v, w, x, p = l;
			if ("no" == $("#zdyboxCache").attr("data-isUse") ? (d.hide(), e.hide(), g.hide(), f.hide(), $("#zdybox").removeAttr("zdyName zdyAppID zdyAttachID"), $("#tZdyModulesetPanel").children(":not(:eq(0))").appendTo($("#moduleset")).show(), b.june.off(), b.june = $("#june"), b.junebox = $("#junebox"), b.popupContent = $("#popupContent"), b.offsleft = b.junebox.offset().left, b.offstop = b.junebox.offset().top, $("#tControlBtn").css("zIndex", 1002), $("#tLittle").css("zIndex", 1002), a.init(), c.codeImportJune(b.june)) : ($("#zdyboxCache").attr("data-isUse", "no"), $("#zdybox").html("").removeAttr("zdyName zdyAppID zdyAttachID style zdyConfig"), $("#zdyboxCache").children().appendTo($("#zdybox").attr({
				zdyName: $("#zdyboxCache").attr("zdyName"),
				zdyAppID: $("#zdyboxCache").attr("zdyAppID"),
				zdyAttachID: $("#zdyboxCache").attr("zdyAttachID"),
				zdyConfig: $("#zdyboxCache").attr("zdyConfig")
			})), $("#popupContentZdy").html(""), $("#popupContentZdyCache").children().appendTo($("#popupContentZdy")), c.codeImportJune($("#zdyboxCache")), $("#zdybox").show(), $("#zdyboxCache").removeAttr("zdyName zdyAppID zdyAttachID style zdyConfig")), j) {
				if (k.childConfig && k.childConfig.length > 0) for (w = 0; w < k.childConfig.length; w++) k.childConfig[w].attachID && k.childConfig[w].attachID == j && (t = h.replace(/childConfig\[\S+\]\./g, ""), t.indexOf("popupConfig") >= 0 ? (k.childConfig[w]["popupConfig"]["popupHtml"] = i, k.childConfig[w]["popupConfig"]["pSwitch"] = "yes") : k.childConfig[w][t] = i);
				p = $(b.appChildCls + "[attachID='" + j + "']")
			} else h.indexOf("popupConfig") >= 0 ? (k["popupConfig"]["popupHtml"] = i, k["popupConfig"]["pSwitch"] = "yes", q = {
				popup: !0
			}) : h.indexOf("nestConfig") >= 0 ? h.indexOf("customContent") >= 0 ? (u = h.replace(/nestConfig\[/g, "").replace(/\]\S+/, ""), v = h.replace(/^(\S)+customContent\\?\'\]\[/g, "").replace(/\]\S*/, ""), k["nestConfig"][u]["customContent"][v] = i, s = [u, v], q = {
				nestSlider: v
			}) : (t = h.replace(/nestConfig\[\S+\]\./g, ""), r = h.replace(/nestConfig\[/g, "").replace(/\]\S+/g, ""), k["nestConfig"][r][t] = i, q = {
				nestSlider: "0"
			}) : new RegExp(/\[\S*\]/).test(h) ? (r = h.replace(h.replace(/\[\S*\]/g, "") + "[", "").replace(/\]/g, ""), k[h.replace(/\[\S*\]/g, "")][r] = i, "0" == r && h.indexOf("smallCustom") < 0 && (k["width"] = n, k["height"] = o)) : (k[h] = i, h.indexOf("smallCustom") < 0 && (k["width"] = n, k["height"] = o));
			x = l.attr("data-dblType"), ("jtsb" == x || "jpb" == x || "jwfb" == x) && (delete k.width, delete k.height), k.getZdy = !0, l.attr("data-config", JSON.stringify(k)), r && (q ? q.activePage = r : q = {
				activePage: r
			}), p.trigger("dblclick", q), l.attr("data-config", JSON.stringify(m)), s && setTimeout(function() {
				$(".contentPage:eq(" + (b.tParseInt(s[1]) + 1) + ")").children("a[rel='" + (b.tParseInt(s[0]) + 1) + "']").trigger("click")
			}, 1e3)
		})
	}), $("#tZdyDialogBtnExit").on("click", function() {
		var n, o, p, q, r, s, t, u, v, a = require("scripts/mouse"),
			c = require("scripts/code"),
			h = $("#zdybox").attr("zdyName"),
			i = $("#zdybox").attr("zdyAppID"),
			j = $("#zdybox").attr("zdyAttachID"),
			k = $("#zdybox").attr("zdyConfig") ? JSON.parse($("#zdybox").attr("zdyConfig") || "{}") : {},
			l = $(b.appCls + "[appID='" + i + "']"),
			m = JSON.parse(l.attr("data-config") || "{}");
		if (k = $.extend(!0, {}, m, k), n = "", o = l, $("body").data("textareaZdyVal") && (n = $("body").data("textareaZdyVal"), $("body").removeData("textareaZdyVal")), "no" == $("#zdyboxCache").attr("data-isUse") ? (d.hide(), e.hide(), g.hide(), f.hide(), $("#zdybox").removeAttr("zdyName zdyAppID zdyAttachID"), $("#tZdyModulesetPanel").children(":not(:eq(0))").appendTo($("#moduleset")).show(), b.june.off(), b.june = $("#june"), b.junebox = $("#junebox"), b.popupContent = $("#popupContent"), b.offsleft = b.junebox.offset().left, b.offstop = b.junebox.offset().top, $("#tControlBtn").css("zIndex", 1002), $("#tLittle").css("zIndex", 1002), a.init(), c.codeImportJune(b.june)) : ($("#zdyboxCache").attr("data-isUse", "no"), $("#zdybox").html("").removeAttr("zdyName zdyAppID zdyAttachID style zdyConfig"), $("#zdyboxCache").children().appendTo($("#zdybox").attr({
			zdyName: $("#zdyboxCache").attr("zdyName"),
			zdyAppID: $("#zdyboxCache").attr("zdyAppID"),
			zdyAttachID: $("#zdyboxCache").attr("zdyAttachID"),
			zdyConfig: $("#zdyboxCache").attr("zdyConfig")
		})), $("#popupContentZdy").html(""), $("#popupContentZdyCache").children().appendTo($("#popupContentZdy")), c.codeImportJune($("#zdyboxCache")), $("#zdybox").show(), $("#zdyboxCache").removeAttr("zdyName zdyAppID zdyAttachID style zdyConfig")), j) {
			if (k.childConfig && k.childConfig.length > 0) for (v = 0; v < k.childConfig.length; v++) k.childConfig[v].attachID && k.childConfig[v].attachID == j && (s = h.replace(/childConfig\[\S+\]\./g, ""), s.indexOf("popupConfig") >= 0 ? (s = s.replace(/popupConfig\./g, ""), k.childConfig[v]["popupConfig"]["popupHtml"] = n) : k.childConfig[v][s] = n);
			o = $(b.appChildCls + "[attachID='" + j + "']")
		} else h.indexOf("popupConfig") >= 0 ? (k["popupConfig"]["popupHtml"] = n, p = {
			popup: !0
		}) : h.indexOf("nestConfig") >= 0 ? h.indexOf("customContent") >= 0 ? (t = h.replace(/nestConfig\[/g, "").replace(/\]\S+/, ""), u = h.replace(/^(\S)+customContent\\?\'\]\[/g, "").replace(/\]\S*/, ""), k["nestConfig"][t]["customContent"][u] = n, r = [t, u], p = {
			nestSlider: u
		}) : (s = h.replace(/nestConfig\[\S+\]\./g, ""), q = h.replace(/nestConfig\[/g, "").replace(/\]\S+/g, ""), k["nestConfig"][q][s] = n, p = {
			nestSlider: "0"
		}) : new RegExp(/\[\S*\]/).test(h) ? (q = h.replace(h.replace(/\[\S*\]/g, "") + "[", "").replace(/\]/g, ""), k[h.replace(/\[\S*\]/g, "")][q] = n) : k[h] = n;
		l.attr("data-config", JSON.stringify(k)), q && (p ? p.activePage = q : p = {
			activePage: q
		}), o.trigger("dblclick", p), l.attr("data-config", JSON.stringify(m)), r && setTimeout(function() {
			$(".contentPage:eq(" + (b.tParseInt(r[1]) + 1) + ")").children("a[rel='" + (b.tParseInt(r[0]) + 1) + "']").trigger("click")
		}, 1e3)
	}), a.click = function(a, c, h, i) {
		var p, s, q, r, t, u, v, w, x, y, j = require("scripts/mouse"),
			k = require("scripts/code"),
			l = $(a.target).prev(),
			m = $("#" + b.dialogID).find("#tForm"),
			n = m.formToObject() || {},
			o = l.val();
		return "" != $("#zdyboxCache").html() ? (b.tMessage("可视化编辑模式下暂仅支持2层自定义内容嵌套编辑，请直接填写需要放入的自定义内容！"), void 0) : (new RegExp(/\[\]/).test(c) && (c.indexOf("nestConfig") >= 0 ? (p = l.parent().parent().parent().parent().index(".sliderContentUl") - 1, c = c.replace(/\[\]/g, "") + "[" + p + "]") : (p = $(a.target).index(".t-kshbj-btn"), $(a.target).hasClass("tkb1") && (p = $(a.target).index(".t-kshbj-btn.tkb1")), $(a.target).hasClass("tkb2") && (p = $(a.target).index(".t-kshbj-btn.tkb2")), $(a.target).hasClass("tkb3") && (p = $(a.target).index(".t-kshbj-btn.tkb3")), $(a.target).hasClass("tkb4") && (p = $(a.target).index(".t-kshbj-btn.tkb4")), c = c.replace(/\[\]/g, "") + "[" + p + "]")), new RegExp(/\]\.cContent/).test(c) && (p = l.parent().parent().parent().index(), c = c.replace(/\[\S+\]/g, "[" + p + "]")), "zdybox" == b.june.attr("id") && ($("#zdybox").children().appendTo($("#zdyboxCache").attr("data-isUse", "yes").attr({
			zdyName: $("#zdybox").attr("zdyName"),
			zdyAppID: $("#zdybox").attr("zdyAppID"),
			zdyAttachID: $("#zdybox").attr("zdyAttachID"),
			zdyConfig: $("#zdybox").attr("zdyConfig")
		}).attr("style", $("#zdybox").attr("style")).hide()), $("#zdybox").removeAttr("zdyName zdyAppID zdyAttachID style zdyConfig"), $("#popupContentZdy").children().appendTo($("#popupContentZdyCache"))), d.show(), e.show(), g.show(), f.show(), $("#" + b.dialogID).dialog("close"), "" == $("#moduleBgcolor").val() && b.june.css("background-color", ""), q = $(b.appCls + "[appID='" + h + "']"), r = q.attr("data-dblType"), t = 990, u = 500, "jdb" != r && "job" != r && "jbob" != r && "jcb" != r && "jdlb" != r && "jpb" != r && (s = i ? $(b.appChildCls + "[attachID='" + i + "']") : $(b.appCls + "[appID='" + h + "']"), t = s.width(), u = s.height(), "jadb" == r && (v = c.replace(/nestConfig\[\S+\]\./g, ""), w = c.replace(/nestConfig\[/g, "").substr(0, 1), x = ".t-jadb-title", "cContent1" == v && (x = ".t-jadb-panel"), t = s.children(x + ":eq(" + w + ")").width(), u = s.children(x + ":eq(" + w + ")").height())), b.june = $("#zdybox").attr({
			zdyName: c,
			zdyAppID: h,
			zdyAttachID: i,
			zdyConfig: JSON.stringify(n)
		}).html("").attr("style", "height:" + u + "px;width:" + t + "px;background: #f2f4f8 none repeat scroll 50% 0%;"), k.codeImportJune(b.june), $("#moduleBgcolor").val(""), b.june.off(), b.junebox = $("#tZdyDialog"), b.popupContent = $("#popupContentZdy"), $("#popupContentZdy").html(""), b.offsleft = b.junebox.offset().left, b.offstop = b.junebox.offset().top, $("#tControlBtn").css("zIndex", 8003), $("#tLittle").css("zIndex", 8003), j.init(), "" != o && "undefined" != o && ($("body").data("textareaZdyVal", o), k.codeImportDialogCode(o, !0)), b.june.children(".junehtml").find("img").addClass("jhi-img"), $("#moduleset").children().appendTo($("#tZdyModulesetPanel")).show(), y = 0, $("#tZdyModulesetPanel").children().each(function() {
			y += $(this).width()
		}), y > $("#tZdyModulesetPanel").width() ? ($("#tZdyModulesetPanelScrollLeft").show(), $("#tZdyModulesetPanelScrollRight").show(), $("#tZdyModulesetPanel").css("marginLeft", 20)) : ($("#tZdyModulesetPanelScrollLeft").hide(), $("#tZdyModulesetPanelScrollRight").hide(), $("#tZdyModulesetPanel").css("marginLeft", 0)), void 0)
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
		b.dialogSetting.title = a, b.dialogSetting.height = "focusslider.php" == d ? 640 : 560, $("#" + b.dialogID).dialog(b.dialogSetting), "number" == typeof g ? e.active = g : (activeArr = g.split(";"), e.active = activeArr[0], e.activePage = activeArr[1]), c.ajaxHtml(d, e, f)
	}, a.tDialogCode = function(d, e, f, g) {
		var h = "codeforim.php",
			i = {
				code: d
			};
		g && "" != g && (i.codePopup = g), e ? $("#" + b.dialogID).dialog({
			title: "导入代码",
			width: 550,
			height: 580,
			buttons: {
				"导入": function() {
					var d, c = $("#importType").val();
					return d = "1" == c ? $("#codeText").val() : $("#codeText1").val(), 0 == $("#tettt").length ? $('<textarea id="tettt" style="display:none;"></textarea>').appendTo(b.b).val(d) : $("#tettt").val(d), b.code_im_mode = /power by junezx 3\.0/.test(d) ? "3.0" : /power by junezx 2\.0/.test(d) ? "2.0" : "zdy", "3.0" == b.code_im_mode ? (b.tMessage("您当前输入的代码是3.0版本的，请在3.0工具中导入使用！"), !1) : ($("#codeText").val(""), d ? (f($("#tettt").val(), void 0, c), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : !1)
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}) : (h = b.php_codeforgen, $("#" + b.dialogID).dialog({
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
	}, a.tDialogCustom = function(a, d) {
		var e = "code.php",
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
					var d = $("#codeText").val();
					return d ? (d = d.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, ""), a(d), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : (b.june.children(".junehtml").remove(), $(this).dialog("close"), $(".ui-tooltip").hide(), !1)
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(e, f)
	}, a.tDialogShopCategory1 = function(a) {
		var d = "shopfl.php",
			e = {};
		$("#" + b.dialogID).dialog({
			resizable: !1,
			modal: !0,
			width: 520,
			height: 270,
			title: "获取店铺分类",
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
			title: "选择店铺类目",
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
			title: "将当前列表样式设置为预设样式",
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
			title: "选择预设样式",
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
			title: "选择预设样式",
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
			width: 520,
			height: 210,
			title: "开关灯数量",
			buttons: {
				"确定": function() {
					a($("#lightSwitchCount").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(d, e)
	}, a.tDialogSave = function(a) {
		var d = "saveInput.php",
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
	}, a.tDialogItem = function(a, d, e) {
		var f = "itemarr.php",
			g = d;
		$("#" + b.dialogID + "_item").dialog({
			resizable: !1,
			modal: !0,
			width: 560,
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
		}), c.ajaxHtml(f, g, function(a) {
			$("#" + b.dialogID + "_item").html(a).dialog("open"), $("#" + b.dialogID + "_item").find("textarea").parent("li").css("height", "auto")
		})
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
			$("#" + b.dialogID + "_item").html(a).dialog("open"), $("#" + b.dialogID + "_item").find("textarea").parent("li").css("height", "auto")
		})
	}, a
}), define("scripts/contextMenu.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage");
	return b.tContextmenu.appendTo(b.b).html(b.appMenu).hide(), a.click = function(a) {
		var e, f, g, h, i, d = $(a.target);
		if (d.parent().parent().hasClass("t-contextmenu")) {
			if (e = d.parent().parent().attr("data-appID"), f = d.parent().parent().attr("data-attachID"), g = $(b.appCls + "[appID='" + e + "']"), h = g.attr("data-dblType"), i = d.attr("data-menuType"), f && void 0 != f && "" != f && null != f) if ($(b.appChildCls + "[attachID='" + f + "']").hasClass(b.selectedVal)) {
				if (g = $(b.appChildCls + "[attachID='" + f + "']"), "jspb" != h && "jkgb" != h && "jbob" != h && ("copy" == i || "delete" == i) && "lbePanel" != g.attr("data-attachType")) return b.tMessage("暂时只有特效层、切片正反面、轮播扩展层和开关灯的子层可以进行复制和删除"), void 0
			} else f = void 0;
			switch (i) {
			case "edit":
				g.trigger("dblclick");
				break;
			case "copy":
				b.menuEve = $.Event("keydown"), b.menuEve.ctrlKey = !0, b.menuEve.target = $(b.appCls + "[appID='" + e + "']")[0], b.menuEve.which = 67, b.d.trigger(b.menuEve), b.menuEve.which = 86, b.d.trigger(b.menuEve);
				break;
			case "createChild":
				c.createChild(h + "Child", $(b.appCls + "[appID='" + e + "']"));
				break;
			case "moveUp":
				c.moveUp(e, f);
				break;
			case "moveDown":
				c.moveDown(e, f);
				break;
			case "drag":
				d.hasClass("t-context-disdrag") ? (d.removeClass("t-context-disdrag").addClass("t-context-drag"), c.notAllowDrag(e, f)) : (d.removeClass("t-context-drag").addClass("t-context-disdrag"), c.allowDrag(e, f));
				break;
			case "delete":
				c.remove(e, f)
			}
		}
	}, a
}), define("scripts/controlBtn.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/appManage"),
		d = require("scripts/appManage1");
	return $(b.controlBtn).appendTo(b.b), b.endParse = !1, $("#tControlBtn").tooltip({
		content: function() {
			var a = $(this),
				b = a.attr("data-help"),
				c = a.attr("title");
			return "help" == b ? '<div style="position:relative;width:500px;height:90px;background:#cce87a;color:#507f1a;padding:8px; box-shadow: 1px 1px 5px 2px #666;margin:-20px;left:10px;top:10px; border:1px solid #8eb632; border-radius:0 8px 8px 8px;font-family:\'微软雅黑\';"><div style="height:35px;line-height:35px;font-size:18px;margin-left:12px;"><strong>如何拖动子层</strong></div><div style="height:25px;line-height:25px;font-size:14px;margin-left:6px;">方法1. 在父层上<span style="color:#fb2626;">单击鼠标右键</span>，选择需要拖动的子层后，即可拖动该子层。</div><div style="height:25px;line-height:25px;font-size:14px;margin-left:6px;">方法2. 在右侧<span style="color:#fb2626;">图层面板</span>中选择对应的子层后，即可拖动选中的子层。</div></div>' : c
		},
		position: {
			my: "left top",
			at: "right-22 top+22"
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
			if (f = e.parent().attr("appID"), g = e.parent().attr("attachID"), h = $(b.appCls + "[appID='" + f + "']"), i = h.attr("data-dblType"), j = e.attr("data-btnType"), g && void 0 != g && "" != g && null != g) if ($(b.appChildCls + "[attachID='" + g + "']").hasClass(b.selectedVal) && $(b.appChildCls + "[attachID='" + g + "']").parent().is(h)) {
				if (h = $(b.appChildCls + "[attachID='" + g + "']"), "jspb" != i && "jkgb" != i && "jbob" != i && ("copy" == j || "delete" == j) && "lbePanel" != h.attr("data-attachType")) return b.tMessage("暂时只有特效层、切片正反面、轮播扩展层和开关灯的子层可以进行复制和删除"), void 0
			} else g = void 0;
			switch (j) {
			case "createChild":
				c.createChild(i + "Child", $(b.appCls + "[appID='" + f + "']"));
				break;
			case "edit":
				h.trigger("dblclick");
				break;
			case "drag":
				e.hasClass("t-control-btns-lock") ? (e.attr("title", "解除锁定").removeClass("t-control-btns-lock").addClass("t-control-btns-unlock"), c.notAllowDrag(f, g)) : (e.attr("title", "锁定位置").removeClass("t-control-btns-unlock").addClass("t-control-btns-lock"), c.allowDrag(f, g));
				break;
			case "copy":
				a = $.Event("keydown"), a.ctrlKey = !0, a.target = $(b.appCls + "[appID='" + f + "']")[0], a.which = 67, b.d.trigger(a), a.which = 86, b.d.trigger(a);
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
			case "setItemStyle":
				d.setItemStyle(a, f, g)
			}
		}
	}, a
}), define("scripts/keyboard.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/moduleManage"),
		d = require("scripts/appManage"),
		e = require("scripts/saveChoose"),
		f = require("scripts/action");
	return a.countFixedPos = function(a) {
		var c = require("scripts/tAjax"),
			d = "fixed" == a.css("background-attachment"),
			e = a.attr("data-pos") || "50% 0%",
			f = e.split(" "),
			g = 0,
			h = 0,
			i = b.offsleft,
			j = b.offstop,
			k = a.css("background-image").replace(/^url|[\(\"\)]*/g, "");
		"none" == k && (k = ""), "" != k && d && c.ajaxJsonForGis({
			img: k
		}, function(b) {
			var c = b[0],
				d = b[1];
			console.log(d), g = f[0].indexOf("%") >= 0 ? f[0].replace(/%/g, "") / 100 * (a.width() - c) : parseInt(f[0].replace(/px/g, "")), i += g, h = f[1].indexOf("%") >= 0 ? f[1].replace(/%/g, "") / 100 * ($(document).height() - d) : parseInt(f[1].replace(/px/g, "")), j += h, a.css("background-position", i + "px " + j + "px")
		})
	}, b.d.on("keyup", function(a) {
		b.showControl(a);
		var e = ($(a.target), a.keycode || a.which);
		c.toSet(a), 8 == e && (a.returnValue = !1, a.cancelable = !1, a.preventDefault(), a.stopPropagation())
	}), b.initColorP(), $("#moduleset, #tZdyModulesetPanel").on("change keyup", "input[type='text']", function() {
		var h, i, j, k, l, m, c = $(this),
			d = c.attr("name"),
			e = c.val(),
			f = b.june,
			g = !1;
		("moduleHeight" == d || "moduleBgcolor" == d || "moduleBgimg" == d || "moduleWidth" == d) && (h = $("#moduleset").children(".module-div").length, i = Math.ceil((c.parent().parent().index() - 3) / 2), h > 1 && (f = b.june.children(".t-app-junebg:eq(" + i + ")"), g = !0)), "moduleWidth" == d ? "" == c.val() && (j = 1920, f.is(b.june) || (j = 1920), b.june.width(j)) : "moduleHeight" == d ? "" == c.val() && (j = 2560, f.height(j)) : "moduleBgcolor" == d ? "" == c.val() && f.css("background-color", "#F2F4F8") : "moduleBgimg" == d ? (e = e.replace(/"/g, ""), "" == e ? f.css("background-image", "none") : checkUrl(e) && f.css({
			backgroundImage: "url(" + e + ")"
		})) : ("mdbgPos1" == d || "mdbgPos2" == d) && ("" == $("#bgPosition").val() && (k = "" == $("#mdbgPos1").val() ? "50%" : $("#mdbgPos1").val() + "px", l = "" == $("#mdbgPos2").val() ? "0%" : $("#mdbgPos2").val() + "px", f.attr("data-pos", k + " " + l).css({
			backgroundPosition: k + " " + l
		})), a.countFixedPos(f)), g && (m = 0, b.june.children(".t-app-junebg").each(function() {
			var a = $(this),
				b = a.height();
			m += b
		}), b.june.height(m))
	}).on("change", "input[type='checkbox']", function() {
		var g, h, c = $(this),
			d = c.attr("name"),
			f = (c.val(), b.june);
		("boxRepeat" == d || "boxFixed" == d) && (g = $("#moduleset").children(".module-div").length, h = Math.ceil((c.parent().parent().index() - 3) / 2), g > 1 && (f = b.june.children(".t-app-junebg:eq(" + h + ")"))), "boxRepeat" == d ? c.is(":checked") ? f.css({
			backgroundRepeat: "repeat"
		}) : f.css({
			backgroundRepeat: "no-repeat"
		}) : "boxFixed" == d && (c.is(":checked") ? f.css({
			backgroundAttachment: "fixed"
		}) : f.css({
			backgroundAttachment: "scroll"
		}), a.countFixedPos(f))
	}).on("change", "select[name='bgPosition']", function() {
		var g, h, i, j, c = $(this),
			d = c.attr("name"),
			e = c.val(),
			f = b.june;
		"bgPosition" == d && (g = $("#moduleset").children(".module-div").length, h = Math.ceil((c.parent().parent().index() - 3) / 2), g > 1 && (f = b.june.children(".t-app-junebg:eq(" + h + ")"))), "" != e ? f.attr("data-pos", e).css({
			backgroundPosition: e
		}) : (i = "" == $("#mdbgPos1").val() ? "50%" : $("#mdbgPos1").val() + "px", j = "" == $("#mdbgPos2").val() ? "0%" : $("#mdbgPos2").val() + "px", f.attr("data-pos", i + " " + j).css({
			backgroundPosition: i + " " + j
		})), a.countFixedPos(f)
	}).on("change", "select[name='moduleOpacity']", function() {
		var f, g, a = $(this),
			c = a.attr("name"),
			d = a.val(),
			e = b.june;
		"moduleOpacity" == c && (f = $("#moduleset").children(".module-div").length, g = Math.ceil((a.parent().parent().index() - 3) / 2), f > 1 && (e = b.june.children(".t-app-junebg:eq(" + g + ")"))), e.css({
			opacity: d
		})
	}), b.d.on("keydown", function(a) {
		var k, l, m, n, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, g = $(a.target),
			h = a.ctrlKey,
			i = a.shiftKey,
			j = a.altKey,
			o = !1;
		if (key = a.keyCode || a.which, tagName = a.target.tagName.toLowerCase(), ("input" != tagName && "textarea" != tagName && "select" != tagName && "radio" != tagName && "checkbox" != tagName && !g.hasClass("ban-keyboard") || g.hasClass("except-keyboard")) && ("input" != tagName && "textarea" != tagName && 8 == key && (a.returnValue = !1, a.cancelable = !1, a.preventDefault(), a.stopPropagation()), !b.isLoading && (k = b.jSelectsedDom, 0 != k.length || ("pencil" == b.curType && (k = b.june.children(".pencilLineCreate,.pencilLineEdit"), o = !0), 0 != k.length || 65 == key)))) if (h) {
			if (86 == key && b.show()) {
				if (b.keyCache.act) if (b.dragEle && b.dragStartX && b.dragStartY && (p = b.pageX, q = b.pageY, r = b.dragStartX, s = b.dragStartY, k.each(function() {
					var c = $(this);
					(Math.abs(p - r) > 3 || Math.abs(q - s) > 3) && (c.attr("data-attachType") ? f.create("move", c.parent(), c) : f.create("move", c))
				})), b.dragStartX = null, b.dragStartY = null, b.dragEle = null, "copy" == b.keyCache.type) {
					for (t = !1, u = !1, v = n, b.keyCache.mutliPos.length > 1 && (t = !0, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $()), w = 0; w < b.keyCache.mutliPos.length; w++) n = $.extend({}, a, {
						pageX: b.pageX + b.keyCache.mutliPos[w].left,
						pageY: b.pageY + b.keyCache.mutliPos[w].top,
						offsetX: b.offsetX,
						offsetY: b.offsetY
					}), u = 0 == w ? !0 : !1, tempFirst = d.copy(n, b.keyCache.appID[w], b.keyCache.attachID[w], "key", t, u), tempFirst && (v = tempFirst);
					b.keyCache.mutliPos.length > 1 && v && (b.dragStartX = null, b.dragStartY = null, x = require("scripts/drag"), x.Start(v), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = v.pageX, b.clickTimeStartY = v.pageY, b.clickTimeDom = v)
				} else b.june.find(b.appCls + "[appID='" + b.keyCache.appID[0] + "']").length < 1 ? (_thisApp = b.dump.children("[data-status='" + b.appClsVal + "'][appID='" + b.keyCache.appID[0] + "']"), _thisLayer = b.dumpLayer.children("[data-status='" + b.layerClsVal + "'][appID='" + b.keyCache.appID[0] + "']"), _thisApp.addClass(b.appClsVal).removeAttr("data-status").appendTo(b.june), _thisLayer.addClass(b.layerClsVal).removeAttr("data-status").prependTo(b.layerList), b.dragEle = _thisApp, b.snapSwitch && (b.snapEle = b.dragEle), b.createSnapElements(b.snapEle), p = b.pageX + b.junebox.scrollLeft() - b.offsleft, q = b.pageY + b.junebox.scrollTop() - b.offstop, _thisApp.css({

					left: p - 10,
					top: q - 10
				}), b.dragX[0] = b.pageX - _thisApp.offset().left, b.dragY[0] = b.pageY - _thisApp.offset().top) : (n = $.extend({}, a, {
					pageX: b.pageX,
					pageY: b.pageY,
					offsetX: b.offsetX,
					offsetY: b.offsetY
				}), d.copy(n, b.keyCache.appID[0], b.keyCache.attachID[0], "key"))
			} else if (67 == key) k.length > 1 ? (b.keyCache.appID = [], b.keyCache.attachID = [], b.keyCache.mutliPos = [], b.keyCache.act = !0, b.keyCache.type = "copy", k.each(function(a) {
				var d = $(this);
				l = d.attr("appID"), m = d.attr("attachID"), b.keyCache.appID.push(l), b.keyCache.attachID.push(m), 0 == a ? (y = d.offset().top, z = d.offset().left, b.keyCache.mutliPos.push({
					top: 0,
					left: 0
				})) : (_thisTop = d.offset().top - y, _thisLeft = d.offset().left - z, b.keyCache.mutliPos.push({
					top: _thisTop,
					left: _thisLeft
				}))
			})) : k.length < 1 ? b.tMessage("请选择应用后再使用复制功能") : (b.keyCache.appID = [], b.keyCache.attachID = [], b.keyCache.mutliPos = [], l = k.attr("appID"), m = k.attr("attachID"), b.keyCache.act = !0, b.keyCache.type = "copy", b.keyCache.appID[0] = l, b.keyCache.attachID[0] = m, b.keyCache.mutliPos[0] = {
				top: 0,
				left: 0
			});
			else if (88 == key) {
				if (k.length > 1) return b.tMessage("请选择单个应用剪切，暂不支持同时剪切多个应用！"), void 0;
				k.length < 1 ? b.tMessage("请选择应用后再使用剪切功能") : (b.keyCache.appID = [], b.keyCache.attachID = [], b.keyCache.mutliPos = [], l = k.attr("appID"), m = k.attr("attachID"), b.keyCache.act = !0, b.keyCache.type = "cut", b.keyCache.appID[0] = l, b.keyCache.attachID[0] = m, k.attr("data-status", b.appClsVal).removeClass(b.appClsVal).appendTo(b.dump), m || b.layerList.children(b.layerCls + "[appID='" + l + "']").attr("data-status", b.layerClsVal).removeClass(b.layerClsVal).appendTo(b.dumpLayer))
			} else if (90 == key) {
				if ("june" != b.june.attr("id")) return;
				A = b.actionList.children(b.actionSelected).index(), A -= 1, 0 > A && (A = 0), f.click(a, A), b.actionList.slimScroll({
					scrollBy: "-31px"
				})
			} else if (89 == key) {
				if ("june" != b.june.attr("id")) return;
				A = b.actionList.children(b.actionSelected).index(), A += 1, A > b.actionList.children(b.actionCls).length - 1 && (A = b.actionList.children(b.actionCls).length - 1), f.click(a, A), b.actionList.slimScroll({
					scrollBy: "+31px"
				})
			} else 65 == key ? (b.june.find(b.appCls).each(function() {
				var a = $(this),
					c = a.attr("appID");
				a.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(a), b.selectLayer(c, !0)
			}), b.june.find(b.appChildCls).each(function() {
				var a = $(this),
					c = a.attr("appID");
				a.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(a), b.selectLayer(c, !0)
			})) : 83 == key ? (e.click([b.tUserLogin, b.tUserName], c.toSave), a.preventDefault(), a.stopPropagation()) : 77 == key ? ($("#mouseaction").children("div:eq(0)").trigger("click"), a.preventDefault()) : 85 == key && ($("#mouseaction").children("div:eq(1)").trigger("click"), a.preventDefault());
			j && 82 == key && (B = b.junebox.width(), C = b.junebox.height(), b.rulerSwitch = b.rulerSwitch ? !1 : !0, b.rulerSwitch ? (b.junebox.css({
				top: 50,
				left: 50
			}).width(B - 50).height(C - 50), b.offsleft += 50, b.offstop += 50) : (b.junebox.css({
				top: 0,
				left: 0
			}).width(B + 50).height(C + 50), b.offsleft -= 50, b.offstop -= 50))
		} else if (b.showControl(a), 37 == key || 38 == key || 39 == key || 40 == key ? (clearTimeout(b.keyCache.keyTime), clearTimeout(b.keyCache.actTime), b.keyDirection++, 37 == key ? k.each(function() {
			if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
				var a = b.tParseInt($(this).css("left")) - b.keyDirection;
				0 > a && !$(this).hasClass(b.appChildClsVal) && (a = 0), $(this).css({
					left: a
				}), (!E || a > E) && (E = a, F = $(this)), b.tProcess(k)
			}
		}) : 38 == key ? k.each(function() {
			if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
				var a = b.tParseInt($(this).css("top")) - b.keyDirection;
				0 > a && !$(this).hasClass(b.appChildClsVal) && (a = 0), $(this).css({
					top: a
				}), (!D || a > D) && (D = a, G = $(this)), b.tProcess(k)
			}
		}) : 39 == key ? k.each(function() {
			if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
				var a = b.tParseInt($(this).css("left")) + b.keyDirection;
				a > b.june.width() - $(this).width() && !$(this).hasClass(b.appChildClsVal) && (a = b.june.width() - $(this).width()), $(this).css({
					left: a
				}), (!E || a > E) && (E = a, F = $(this)), b.tProcess(k)
			}
		}) : 40 == key && k.each(function() {
			if (!$(this).hasClass(b.appChildClsVal) || !$(this).parent().hasClass(b.selectedVal)) {
				var a = b.tParseInt($(this).css("top")) + b.keyDirection;
				a > b.june.height() - $(this).height() && !$(this).hasClass(b.appChildClsVal) && (a = b.june.height() - $(this).height()), $(this).css({
					top: a
				}), (!D || a > D) && (D = a, G = $(this)), b.tProcess(k)
			}
		}), o ? (k.each(function() {
			var a = $(this),
				c = b.tParseInt(a.css("top")),
				d = b.tParseInt(a.css("left")),
				e = a.width(),
				f = a.height();
			"we" == a.attr("data-d") ? (a.children(".pencilAssist").offset({
				top: b.june.offset().top
			}), a.children(".pencilCoordinatesStart").html("(" + d + "," + c + ")"), a.children(".pencilCoordinatesEnd").html("(" + (d + e) + "," + c + ")")) : (a.children(".pencilAssist").offset({
				left: b.june.offset().left
			}), a.children(".pencilCoordinatesStart").html("(" + d + "," + c + ")"), a.children(".pencilCoordinatesEnd").html("(" + d + "," + (c + f) + ")"))
		}), b.keyCache.keyTime = setTimeout(function() {
			b.keyDirection = 0
		}, 50)) : b.keyCache.keyTime = setTimeout(function() {
			b.keyDirection = 0;
			var a = [],
				c = [];
			k.each(function() {
				var b = $(this),
					e = (b.attr("appID"), b.attr("attachID"));
				e ? (a.push(b.parent()), c.push(b)) : (a.push(b), c.push(void 0)), 1 == k.length && (a = null, c = null, e ? (a = k.parent(), c = k) : (a = k, c = void 0))
			}), b.keyCache.actTime = setTimeout(function() {
				f.create("move", a, c)
			}, 500)
		}, 50), a.preventDefault(), a.stopPropagation()) : 46 == key && (o ? k.length > 0 && (k.remove(), $("#pencilDefaultSet").hide()) : (H = [], I = [], k.each(function() {
			var a = $(this),
				b = a.attr("appID"),
				c = a.attr("attachID");
			H.push(b), I.push(c), 1 == k.length && (H = null, I = null, H = b, I = c)
		}), d.remove(H, I))), i) return
	}), a
}), define("scripts/mouse.js", function(a) {
	var b = require("scripts/D"),
		d = (b.appConfig, require("scripts/appLoginCheck")),
		e = require("scripts/snap"),
		f = require("scripts/drag"),
		g = require("scripts/resize"),
		h = require("scripts/zoom"),
		i = require("scripts/UI_Dialog"),
		j = require("scripts/layer"),
		k = require("scripts/action"),
		l = require("scripts/align"),
		m = require("scripts/tLogin"),
		n = require("scripts/tItem"),
		o = require("scripts/contextMenu"),
		p = require("scripts/controlBtn"),
		q = require("scripts/code"),
		r = require("scripts/moduleManage"),
		s = require("scripts/other"),
		t = require("scripts/courseStep"),
		u = require("scripts/zdyEdit"),
		v = require("scripts/quickSet"),
		w = {};
	return w.draw = require("scripts/drawArea"), w.select = require("scripts/select"), w.pencil = require("scripts/pencil"), appManage = require("scripts/appManage"), a.act = function(a) {
		if ("0" == a) b.show() && (b.tContextmenu.hide(), $("#tLayerMenu").hide(), b.tempSnapSwitch = b.snapSwitch, b.create() && ("pencil" != b.curType ? (w[b.curType].Start(this), f.Start(this), g.Start(this), b.snapSwitch && e.snapStart(this)) : w["pencil"].Start(this)), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = this.pageX, b.clickTimeStartY = this.pageY, b.clickTimeDom = this);
		else if ("1" == a)"pencil" != b.curType ? (b.clickTimeStart && (b.clickTimeIng = (new Date).getTime()), b.clickTimeStart && b.clickTimeIng - b.clickTimeStart > 50 && (w[b.curType].Ing(this), f.Ing(this), g.Ing(this), b.snapSwitch && e.snapIng(this))) : w["pencil"].Ing(this);
		else if ("2" == a) {
			if (b.clickTimeEnd = (new Date).getTime(), b.clickTimeStart && b.clickTimeEnd - b.clickTimeStart > 50 && (Math.abs(b.clickTimeStartX - this.pageX) > 2 || Math.abs(b.clickTimeStartY - this.pageY) > 2) ? (b.snapSwitch = b.tempSnapSwitch, b.clickTimeDom = this) : b.clickTimeStart && null != b.tempSnapSwitch && (b.snapSwitch = !1), w[b.curType].End(b.clickTimeDom), f.End(b.clickTimeDom), g.End(b.clickTimeDom), b.snapSwitch && e.snapEnd(b.clickTimeStartDom), b.dragEle && b.dragStartX && b.clickTimeDom) {
				var l, m, c = this.pageX,
					d = this.pageY,
					h = b.dragStartX,
					i = b.dragStartY,
					j = b.jSelectsedDom,
					n = "drag";
				j.length > 1 && (l = [], m = [], n = "drag"), j.each(function() {
					var f = $(this);
					(Math.abs(c - h) > 3 || Math.abs(d - i) > 3) && (j.length > 1 ? f.attr("data-attachType") ? (l.push(f.parent()), m.push(f)) : (l.push(f), m.push(void 0)) : b.show() && (f.attr("data-attachType") ? (l = f.parent(), m = f) : (l = f, m = void 0)))
				}), l && l.length > 0 && k.create(n, l, m)
			}
			b.dragStartX = null, b.dragStartY = null, b.dragEle = null, b.snapEle = null, b.clickTimeStart && null != b.tempSnapSwitch && (b.snapSwitch = b.tempSnapSwitch), b.clickTimeStart = 0, b.clickTimeIng = 0, b.clickTimeEnd = 0, v.execQsSet()
		}
	}, a.checkEvent = function(c, d, e, f) {
		return d && d.parentNode && "june" != d.id && "zdybox" != d.id ? (e = e || 0, $(d).hasClass(b.appClsVal) && !$(d).hasClass("junehtml") || $(d).hasClass(b.appChildClsVal) || $(d).hasClass(b.rhClsVal) ? (c.target = d, c) : $(d).hasClass(b.appClsVal) && $(d).hasClass("junehtml") && ("june" == $(d.parentNode).attr("id") || "zdybox" == $(d.parentNode).attr("id")) ? (f || (c.target = d.parentNode), c) : $(d).hasClass("t-app-mongolia") || $(d).hasClass("t-app-other") || $(d).hasClass("t-app-junebg") ? (c.target = d.parentNode, c) : e > 15 ? c : a.checkEvent(c, d.parentNode, e + 1, f)) : c
	}, a.checkEventForJsfb = function(b, c, d) {
		return c && c.parentNode && "june" != c.id && "zdybox" != c.id ? (d = d || 0, $(c).hasClass("jsfbchild") ? (b.target = c.parentNode, b) : d > 10 ? b : a.checkEventForJsfb(b, c.parentNode, d + 1)) : b
	}, a.dblclickEvent = function(c, d) {
		var h, m, f, g, j, k, l, n, o, p, q, s, t, u, v, w, e = !1;
		if (c && c.target && $(c.target).hasClass("jhi-img") && (e = !0), c = a.checkEvent(c, c.target, 0, e), c && c.target && $(c.target).hasClass("jhi-img") && r.editJHI(c), "june" != c.target.id && "zdybox" != c.target.id && !c.ctrlKey) {
			if (f = $(c.target), g = 0, j = {}, k = !1, l = !1, f.hasClass(b.rhClsVal) && (f = f.parent()), f.hasClass("t-app-child") && b.show()) {
				switch (h = f.attr("data-dblType"), n = f.attr("data-attachType") || "", h) {
				case "jspb":
					g = 1 + f.parent().children("[data-attachType='jspbChild']").index(f);
					break;
				case "jkgb":
					g = 1 + f.parent().children("[data-attachType='jkgbChild']").index(f);
					break;
				case "jbob":
					g = 1 + f.parent().children("[data-attachType='jbobChild']").index(f);
					break;
				case "jsdb":
					g = 3;
					break;
				case "jfsb":
					g = "jfsbOArrow" == n || "jfsbTArrow" == n ? 2 : "0;p" + f.parent().children("[data-attachType='jfsbSmallImg']").index(f), "lbePanel" == n && (g = 5 + f.parent().children("[data-attachType='lbePanel']").index(f));
					break;
				case "jqtb":
					g = "jqtbOArrow" == n || "jqtbTArrow" == n ? -1 : 1 + f.parent().children("[data-attachType='jqtbSmallImg']").index(f), "lbePanel" == n && (g = -2 - f.parent().children("[data-attachType='lbePanel']").length + f.parent().children("[data-attachType='lbePanel']").index(f));
					break;
				case "jwfb":
					g = "jwfbOArrow" == n || "jwfbTArrow" == n ? 2 : "0;p" + f.parent().children("[data-attachType='jwfbSmallImg']").index(f), "lbePanel" == n && (g = 5 + f.parent().children("[data-attachType='lbePanel']").index(f));
					break;
				case "jfyb":
					"jfybOArrow" == n || "jfybTArrow" == n ? g = 2 : "jfybPanel" == n && (g = 1);
					break;
				case "jab":
					g = 2;
					break;
				case "jcdb":
					g = 1 + f.parent().children("[data-attachType]").index(f);
					break;
				case "jsb":
					"jsbInput" == n ? g = 1 : "jsbBtn" == n ? g = 2 : "jsbPricePanel" == n ? g = 3 : "jsbPriceLow" == n ? g = 3 : "jsbPriceHigh" == n && (g = 3);
					break;
				case "jacb":
					g = 2;
					break;
				case "jzzb":
					g = "jzzbAttention" == n ? 2 : 3;
					break;
				case "jib":
					"jibbg" == n ? g = 1 : "jibpanel" == n ? g = 2 : "jibtitle" == n ? g = 3 : "jibsubtitle" == n ? g = 4 : "jibprefix" == n || "jibprice" == n ? g = 5 : "jibdiscountprefix" == n || "jibdiscountprice" == n ? g = 6 : "jibsaleprefix" == n || "jibsale" == n ? g = 7 : "jibbtn" == n || "jibbtn1" == n || "jibbtn2" == n ? g = 8 : "jibsubscript" == n || "jibsubscript1" == n || "jibsubscript2" == n || "jibsubscript3" == n || "jibsubscript4" == n || "jibexpandtext" == n || "jibexpandtext1" == n || "jibexpandtext2" == n || "jibexpandtext3" == n || "jibexpandtext4" == n ? g = 9 : "jiberweima" == n && (g = 10);
					break;
				case "jsfb":
					j = JSON.parse(f.attr("data-attachConfig")), m = f, g = 1, f.hasClass("jsfbchildc") && (k = !0), f.hasClass("jsfbchildb") && (g = 2, l = !0);
					break;
				default:
					g = 0
				}
				f = f.parent()
			}
			if (o = b.appConfig, p = f.attr("data-dblType"), q = f.attr("data-config"), q || (q = f.parent().attr("data-config"), f = f.parent()), d && d.popup && b.show() && (g = -1), d && d.nestSlider && (g = b.tParseInt(d.nestSlider) + 1), d && d.activePage && (g = "0;p" + b.tParseInt(d.activePage)), "pencil" == b.curType && (b.june.children("t-pencilLine").removeClass("pencilLineCreate").removeClass("pencilLineEdit"), b.pencilLine.remove(), b.pencilLine = null, $("#pencilDefaultSet").hide()), p && b.click()) {
				if ("juneCustom" == p) return;
				if (q = JSON.parse(q), q.allowTime = b.tUserLogin, q.getZdy && (q.width || q.height) || (q.width = f.width(), q.height = f.height()), q.top = b.tParseInt(f.css("top")), q.left = b.tParseInt(f.css("left")), q.childConfig && q.childConfig.length > 0) for (s = 0; s < q.childConfig.length; s++) t = f.children(b.appChildCls + ":eq(" + s + ")"), q.childConfig[s].width = t.width(), q.childConfig[s].height = t.height(), q.childConfig[s].top = b.tParseInt(t.css("top")), q.childConfig[s].left = b.tParseInt(t.css("left")), ("jspb" == p || "jbob" == p) && (q.childConfig[s].appName = t.attr("data-appName"));
				if ("jwfb" == p && b.show() && q.sliderImgMode) {
					for (q.customContent = [], q.contentType = [], q.smallImgSrc = [], q.smallHoverSrc = [], q.smallImgSrcT = [], q.smallHoverSrcT = [], q.thumbSet = [], q.thumbCircleSet = [], q.smallCircleMode = [], q.smallCircleBgColor = [], q.smallCircleBgColor1 = [], s = 0; s < q.sliderSrc.length; s++) q.customContent.push(""), q.contentType.push("imgContent"), q.smallImgSrc.push(""), q.smallHoverSrc.push(""), q.smallImgSrcT.push(""), q.smallHoverSrcT.push(""), q.thumbSet.push(""), q.thumbCircleSet.push(""), q.smallCircleMode.push("no"), q.smallCircleBgColor.push(""), q.smallCircleBgColor1.push("");
					q.sliderSmallImg = "no", q.css3Mode = "", q.kgdSwitch = "black", q.sliderDelay = "0", q.sliderSwitch = "mouse", q.displayMode = "", q.css3Speed = "trans05s", q.sWidth = "15", q.sHeight = "15", q.defaultSmallImg = "", q.defaultSmallHover = "", delete q.sliderImgMode
				}
				"jsfb" == p ? (u = JSON.parse(f.attr("data-catsConfig") || "[]"), k || (l ? (j.catsType = "b", j.hrefMode = q.hrefMode1, j.characterBgSrc = q.characterBgSrc1, j.characterBgSrcHover = q.characterBgSrcHover1, j.characterAlign = q.characterAlign1, j.characterSize = q.characterSize1, j.characterWeight = q.characterWeight1, j.characterFont = q.characterFont1, j.characterColor = q.characterColor1, j.characterBgColor = q.characterBgColor1, j.characterDash = q.characterDash1, j.characterHoverMode = q.characterHoverMode1, j.characterHoverSpeed = q.characterHoverSpeed1, j.characterSizeHover = q.characterSizeHover1, j.characterWeightHover = q.characterWeightHover1, j.characterFontHover = q.characterFontHover1, j.characterColorHover = q.characterColorHover1, j.characterBgColorHover = q.characterBgColorHover1, j.characterUnderLine = q.characterUnderLine1, j.characterUnderLineStyle = q.characterUnderLineStyle1, j.characterUnderLineWeight = q.characterUnderLineWeight1, j.characterUnderLineColor = q.characterUnderLineColor1, j.catsSpace = q.catsSpace1) : (!j.catsType && (j.catsType = "a"), j.hrefMode = q.hrefMode, j.characterBgSrc = q.characterBgSrc, j.characterBgSrcHover = q.characterBgSrcHover, j.characterAlign = q.characterAlign, j.characterSize = q.characterSize, j.characterWeight = q.characterWeight, j.characterFont = q.characterFont, j.characterColor = q.characterColor, j.characterBgColor = q.characterBgColor, j.characterDash = q.characterDash, j.characterHoverMode = q.characterHoverMode, j.characterHoverSpeed = q.characterHoverSpeed, j.characterSizeHover = q.characterSizeHover, j.characterWeightHover = q.characterWeightHover, j.characterFontHover = q.characterFontHover, j.characterColorHover = q.characterColorHover, j.characterBgColorHover = q.characterBgColorHover, j.characterUnderLine = q.characterUnderLine, j.characterUnderLineStyle = q.characterUnderLineStyle, j.characterUnderLineWeight = q.characterUnderLineWeight, j.characterUnderLineColor = q.characterUnderLineColor, j.catsSpace = q.catsSpace)), 0 != g && q.childConfig.push(j), m && !m.hasClass("jsfbchildc") && m.attr("data-attachConfig", JSON.stringify(j)), 0 == u.length ? (v = require("scripts/tAjax"), w = f.attr("data-shopHref"), v.ajaxJsonT("gcc.php", {
					url: w
				}, function(a) {
					var b;
					a.ret[0].indexOf("SUCCESS") >= 0 ? (b = a.data.cats, f.attr("data-catsConfig", JSON.stringify(b)), q.catsConfig = b, i.tDialog(o[p][1].tTitle, o[p][1].tUrl, q, o[p][1].tCallback, g)) : (b = {}, f.attr("data-catsConfig", JSON.stringify(b)), q.catsConfig = b, i.tDialog(o[p][1].tTitle, o[p][1].tUrl, q, o[p][1].tCallback, g))
				})) : (q.catsConfig = u, i.tDialog(o[p][1].tTitle, o[p][1].tUrl, q, o[p][1].tCallback, g))) : i.tDialog(o[p][1].tTitle, o[p][1].tUrl, q, o[p][1].tCallback, g)
			}
		}
	}, a.mousedownEvent = function(c) {
		var d, e, f;
		b.clickPageX = c.pageX, b.clickPageY = c.pageY, ("img" == c.target.tagName.toLowerCase() || "area" == c.target.tagName.toLowerCase() || "a" == c.target.tagName.toLowerCase()) && c.preventDefault(), ($(c.target).hasClass("t-jadb-title") || $(c.target).parent().hasClass("t-jadb-title") && $(c.target).hasClass("t-app-mongolia") || $(c.target).parent().hasClass("t-jadb-panel") && $(c.target).hasClass("t-app-mongolia")) && $(c.target).hasClass("t-app-mongolia") && (c.target = c.target.parentNode), e = !1, b.offsleft < 150 && ($("#configgroup div").removeClass("selected"), $("#leftpannel,#leftconsole").hide()), c = a.checkEventForJsfb(c, c.target), c = a.checkEvent(c, c.target), b.showControl(c), 2 != c.button && (f = $(c.target), (c.ctrlKey || c.shiftKey || 91 == c.keycode || 93 == c.keycode) && (f.hasClass(b.appClsVal) || f.hasClass(b.appChildClsVal)) ? (d = f.attr("appID"), attachID = f.attr("attachID"), b.jSelectsedDom.each(function() {
			var a = $(this);
			a.hasClass(b.appChildClsVal) && a.attr("appID") != d && (e = !0)
		}), attachID && e ? (f.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(f[0])) : f.hasClass(b.selectedVal) ? (f.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(f[0]), b.selectLayer(d, !1), attachID && "jspb" == f.attr("data-dblType") ? $(b.thumbCls + "[attachID='" + attachID + "']").removeClass(b.thumbSelectedVal) : attachID || "jspb" != f.attr("data-dblType") || $("#tParentThumb").removeClass(b.thumbSelectedVal)) : (f.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), b.selectLayer(d, !0), attachID && "jspb" == f.attr("data-dblType") ? $(b.thumbCls + "[attachID='" + attachID + "']").addClass(b.thumbSelectedVal) : attachID || "jspb" != f.attr("data-dblType") || $("#tParentThumb").addClass(b.thumbSelectedVal)), c.preventDefault(), c.stopPropagation()) : a.act.call(c, 0))
	}, b.d.on("click", function(c) {
		var e, f, g, i, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M;
		if ("area" != c.target.tagName.toLowerCase() && "a" != c.target.tagName.toLowerCase() || $(c.target).hasClass("june-preview") || c.preventDefault(), $(c.target).hasClass("t-jadb-title") || $(c.target).parent().hasClass("t-jadb-title") && $(c.target).hasClass("t-app-mongolia")) return e = $(c.target), $(c.target).hasClass("t-app-mongolia") && (e = $(c.target).parent()), Math.abs(b.pageX - b.clickPageX) < 2 && Math.abs(b.pageY - b.clickPageY) < 2 && b.clickForAccordion(e), void 0;
		if (c = a.checkEvent(c, c.target), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass(b.thumbClsVal) && (c.target = c.target.parentNode), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass(b.layerClsVal) && (c.target = c.target.parentNode), $(c.target).parent().parent().hasClass(b.thumbClsVal) && (c.target = c.target.parentNode.parentNode), b.showControl(c, "click"), 2 != c.button && "june" != c.target.id && "zdybox" != c.target.id && (b.tContextmenu.hide(), $("#tLayerMenu").hide(), f = $(c.target), g = f.attr("data-target"), i = f.attr("data-curType"), w = f.attr("data-actType"), x = f.attr("data-codeType"), y = f.attr("data-zoomType"), z = f.attr("data-moduleType"), A = f.attr("data-saveType"), B = f.attr("data-loginType"), C = f.attr("data-courseType"), D = f.attr("data-zdyName"), E = f.attr("data-zdyAppID"), F = f.attr("data-zdyAttachID"), G = f.attr("data-zdyOtherName"), H = f.attr("data-oths"), I = f.attr("data-alignType"), !f.hasClass(i) && b.click())) {
			if ("selected" == g ? (b.curType = i, "pencil" == b.curType ? (b.june.children(".pencilLineEdit").removeClass("pencilLineEdit"), b.june.children(".pencilLineCreate").removeClass("pencilLineCreate"), $("#pencilDefaultSet").is(":hidden") ? $("#pencilDefaultSet").css({
				top: 210,
				left: 65
			}).show() : $("#pencilDefaultSet").css({
				top: 210,
				left: 65
			}), $("#pencilDefaultSet").children(".pencil-btn-1").show(), $("#pencilDefaultSet").children(".pencil-btn-2").show(), $("#pencilDefaultSet").children(".pencil-btn-3").hide(), $("#pencilDefaultSet").children(".pencil-btn-4").hide(), $("#pencilDefaultSet").children(".pencil-btn-5").hide(), b.june.children(".t-pencilLine").removeClass("pencilLinePause"), b.june.addClass("pencilType")) : (b.june.children(".pencilLineEdit").removeClass("pencilLineEdit"), b.june.children(".pencilLineCreate").removeClass("pencilLineCreate"), b.june.children(".t-pencilLine").addClass("pencilLinePause"), $("#pencilDefaultSet").hide(), b.june.removeClass("pencilType")), b.updateCurType()) : "clicked" == g ? ("pencil" == b.curType && $("#mouseaction").children(":eq(0)").trigger("click"), b.actType = w, d.click(function() {
				appManage.create(w)
			})) : "checked" == g ? (J = $("#tZdyDialogControl").children("div:eq(3)"), b.dragSwitch ? (b.dragSwitch = !1, b.june.children().addClass(b.dragNaClsVal1), J.removeClass("selected")) : (b.dragSwitch = !0, b.june.children().removeClass(b.dragNaClsVal1), J.addClass("selected"))) : "layer-selected" == g ? j.select(c) : "thumb-selected" == g ? j.selectThumb(c) : "layerEye-clicked" == g ? j.eyeClick(c) : "action-clicked" == g ? k.click(c) : "menu-clicked" == g ? o.click(c) : "control-clicked" == g ? p.click(c) : "zoom-clicked" == g ? h.tZoom(y) : "align-clicked" == g ? l.toAlign(I) : "coded" == g ? "codeExport" == x ? q["getCodeExport"]() : q[x]() : "module-clicked" == g ? ("set" == z && t.click(1), r.click(z)) : "save-clicked" == g ? r.control(c, A) : "login-clicked" == g ? m.control(B) : "layermenu-clicked" == g ? j.chooseLayerMenu(c) : "course" == g ? t.click(C) : "zdy-clicked" == g ? u.click(c, D, E, F, G) : "otherset-clicked" == g && s.click(c, H), f.hasClass("tItemDialog")) if (K = $("input[name='itemMode']:checked").val(), L = $("input[name='pptHref']").val(), M = f.attr("name"), "ptitem" != K) if ("pptItem" != M) {
				if ("itemLink" == M) return b.tMessage("宝贝模式为品牌团时，宝贝链接将自动获取，无法单独设置"), void 0;
				n.ptitemset(f)
			} else "" == L ? b.tMessage("宝贝模式为品牌团时，请先填入一个有效的品牌团首页链接地址，然后进行宝贝选择") : n.pptitemset(f, K);
			else n.ptitemset(f);
			v.execQsSet()
		}
	}), b.d.on("contextmenu", function(c) {
		var d, e, f, g, h, i, k, l, m;
		if (c = a.checkEvent(c, c.target), $(c.target).hasClass("ui-resizable-handle") && ($(c.target).parent().hasClass(b.appClsVal) || $(c.target).parent().hasClass(b.appChildClsVal)) && (c.target = c.target.parentNode), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass(b.thumbClsVal) && (c.target = c.target.parentNode), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass(b.layerClsVal) && (c.target = c.target.parentNode), $(c.target).parent().parent().hasClass("t-thumb") && (c.target = c.target.parentNode.parentNode), !$(c.target).hasClass("junehtml")) {
			if (b.tContextmenu.hide(), $("#tLayerMenu").hide(), d = $(c.target), e = c.pageX, f = c.pageY, g = b.w.width() - 142, h = b.w.height() - 212, i = d.attr("appID"), k = d.attr("attachID"), "jspb" == d.attr("data-dblType")) return j.showLayer(c), void 0;
			e > g && (e = g), f > h && (f = h), b.tContextmenu.css({
				left: e + 5,
				top: f + 5
			}), b.menuEve = c, l = k ? $(b.appChildCls + "[attachID='" + k + "']") : $(b.appCls + "[appID='" + i + "']"), "jspb" == l.attr("data-dblType") ? b.tContextmenu.find(" li.t-context-add-child").show() : b.tContextmenu.find("li.t-context-add-child").hide(), m = b.tContextmenu.children(".t-app-menu").children(".t-context-dd"), l.hasClass(b.dragNaClsVal) ? m.html("允许拖拽").addClass("t-context-drag").removeClass("t-context-disdrag") : m.html("禁止拖拽").addClass("t-context-disdrag").removeClass("t-context-drag"), d.hasClass(b.appClsVal) ? (d.hasClass(b.selectedVal) || (b.chooseApp(i), b.chooseLayer(i)), b.tContextmenu.attr("data-appID", i).show(), c.preventDefault()) : d.hasClass(b.layerClsVal) ? (d.hasClass(b.layerSelectedVal) || (b.chooseApp(i), b.chooseLayer(i)), b.tContextmenu.attr("data-appID", i).show(), c.preventDefault()) : d.hasClass("t-thumb") && (d.hasClass("t-thumb-selected") || ($("#tParentThumb").removeClass("t-thumb-selected"), $("#tThumb").children(".t-thumb").removeClass("t-thumb-selected"), d.addClass("t-thumb-selected"), k ? b.chooseAppChild(k) : b.chooseApp(i)), b.tContextmenu.attr("data-appID", i).attr("data-attachID", k).show(), c.preventDefault())
		}
	}), b.d.on("mousemove", function(c) {
		b.pageX = c.pageX, b.pageY = c.pageY, b.offsetX = c.offsetX, b.offsetY = c.offsetY, c = a.checkEvent(c, c.target), b.showControl(c), 2 != c.button && a.act.call(c, 1)
	}), b.d.on("mouseup", function(c) {
		c = a.checkEvent(c, c.target), b.showControl(c, "click"), 2 != c.button && (a.act.call(c, 2), b.dragSwitch ? b.june.children().removeClass(b.dragNaClsVal1) : b.june.children().addClass(b.dragNaClsVal1))
	}), a.init = function() {
		b.june.off("dblclick").on("dblclick", a.dblclickEvent), b.junebox.off("mousedown").on("mousedown", a.mousedownEvent), b.june.off("scroll").on("scroll", function(a) {
			b.showControl(a, "click")
		})
	}, a.init(), a
}), define("scripts/zoom.js", function(a) {
	var b = require("scripts/D");
	return a.tZoom = function(a) {
		"out" == a ? b.zoomScale += .1 : b.zoomScale -= .1, b.june.jqScale(b.zoomScale)
	}, a
}), define("scripts/resize.js", function(a) {
	var b = require("scripts/D");
	return a.Start = function(a) {
		var e, f, g, c = $(a.target);
		"june" == a.target.id && b.show() || c.hasClass(b.rhClsVal) && (e = c.parent().attr("appID"), f = c.parent().attr("attachID"), "jspb" != c.parent().attr("data-dblType") && (g = a.ctrlKey, g ? (c.parent().hasClass(b.appClsVal) && (b.chooseApp(e, !! g), b.chooseLayer(e, !! g)), c.parent().hasClass(b.appChildClsVal) && (b.chooseAppChild(f, !! g), b.chooseLayer(e, !! g))) : (!c.parent().hasClass(b.selectedVal) && c.parent().hasClass(b.appClsVal) && (b.chooseApp(e), b.chooseLayer(e)), !c.parent().hasClass(b.selectedVal) && c.parent().hasClass(b.appChildClsVal) && (b.chooseAppChild(f), b.chooseLayer(e)))), (c.parent().hasClass(b.selectedVal) || c.parent().hasClass("t-app-jib") || c.parent().hasClass("t-app-spe")) && (c.parent().hasClass(b.resizeNaClsVal) || (b.resizeEle = c.parent(), b.direction = c.attr("data-direction"), b.resizeCache.width = b.resizeEle.width(), b.resizeCache.height = b.resizeEle.height(), b.resizeCache.top = b.tParseInt(b.resizeEle.css("top")), b.resizeCache.left = b.tParseInt(b.resizeEle.css("left")), b.resizeCache.x = a.pageX, b.resizeCache.y = a.pageY, b.snapSwitch && !b.resizeEle.hasClass("june-nonsp") && b.createResizeElements(b.resizeEle))))
	}, a.Ing = function(a) {
		var c, d, e, f, g, h, l, m, n, o, p, i, j, k, q, r, s, t, u, v, w;
		if (b.resizeEle) {
			if (i = b.resizeEle, j = b.direction, k = b.resizeCache, q = b.tParseInt(b.snapOutTolerance), r = b.tParseInt(b.snapInTolerance), s = b.tParseInt(b.snapOutSpace), t = b.tParseInt(b.snapInSpace), u = a.pageX + b.junebox.scrollLeft() - b.offsleft, v = a.pageY + b.junebox.scrollTop() - b.offstop, Math.abs(a.pageX - k.x) <= 1 && Math.abs(a.pageY - k.y) <= 1) return;
			switch (i.parent().hasClass(b.appClsVal) && (u -= b.tParseInt(i.parent().css("left")), v -= b.tParseInt(i.parent().css("top"))), i.parent().parent().hasClass(b.appClsVal) && (u -= b.tParseInt(i.parent().parent().css("left")), v -= b.tParseInt(i.parent().parent().css("top"))), j) {
			case "n":
				i.css({
					top: v
				});
				break;
			case "w":
				i.css({
					left: u
				});
				break;
			case "ne":
				i.css({
					top: v
				});
				break;
			case "sw":
				i.css({
					left: u
				});
				break;
			case "nw":
				i.css({
					left: u,
					top: v
				})
			}
			for (j && j.indexOf("w") >= 0 && (u > k.left + k.width - 15 ? i.css({
				left: k.left + k.width - 15
			}).width(15) : (i.width(k.width - u + k.left), d = b.offsleft - i.offset().left - b.junebox.scrollLeft(), e = i.width() - d, d >= 0 && i.offset({
				left: b.offsleft - b.junebox.scrollLeft()
			}).width(e))), j && j.indexOf("e") >= 0 && (u - k.left <= 15 ? i.width(15) : (i.width(u - k.left), h = i.offset().left + i.width() + b.junebox.scrollLeft() - b.june.width() - b.offsleft, e = i.width() - h, h >= 0 && i.width(e))), j && j.indexOf("n") >= 0 && (v > k.top + k.height - 15 ? i.css({
				top: k.top + k.height - 15
			}).height(15) : (i.height(k.height - v + k.top), c = b.offstop - i.offset().top - b.junebox.scrollTop(), f = i.height() - c, c >= 0 && i.offset({
				top: b.offstop - b.junebox.scrollTop()
			}).height(f))), j && j.indexOf("s") >= 0 && (v - k.top <= 15 ? i.height(15) : (i.height(v - k.top), g = i.offset().top + i.height() + b.junebox.scrollTop() - b.june.height() - b.offstop, f = i.height() - g, g >= 0 && i.height(f))), p = b.resizeElements.length - 1; p >= 0; p--) l = b.resizeElements[p].left, m = l + b.resizeElements[p].width, n = b.resizeElements[p].top, o = n + b.resizeElements[p].height, "inner" !== b.resizeElements[p].snapMode && (Math.abs(n - v) <= q && k.top < n - s && j && j.indexOf("s") >= 0 && i.height(n - k.top - s), Math.abs(o - v) <= q && k.top + k.height > o + s && j && j.indexOf("n") >= 0 && i.css({
				top: o + s
			}).height(k.height - o - s + k.top), Math.abs(l - u) <= q && k.left < l - s && j && j.indexOf("e") >= 0 && i.width(l - k.left - s), Math.abs(m - u) <= q && k.left + k.width > m + s && j && j.indexOf("w") >= 0 && i.css({
				left: m + s
			}).width(k.width - m - s + k.left)), "outer" !== b.resizeElements[p].snapMode && (Math.abs(o - v) <= r && k.top < o - t && j && j.indexOf("s") >= 0 && i.height(o - k.top - t), Math.abs(n - v) <= r && k.top + k.height > n + t && j && j.indexOf("n") >= 0 && i.css({
				top: n + t
			}).height(k.height - n - t + k.top), Math.abs(m - u) <= r && k.left < m - t && j && j.indexOf("e") >= 0 && i.width(m - k.left - t), Math.abs(l - u) <= r && k.left + k.width > l + t && j && j.indexOf("w") >= 0 && i.css({
				left: l + t
			}).width(k.width - l - t + k.left));
			b.tProcess(i, "ing"), "jbob" == i.attr("data-dblType") && b.toFilter(i), "jcb" == i.attr("data-dblType") && b.show() && "multi" != i.attr("data-cast") && i.css("line-height", i.height() + "px"), "jsb" == i.attr("data-dblType") && i.children(b.appChildCls + "[data-attachtype='jsbInput']").css("line-height", i.height() + "px"), "jspbChild" == i.attr("data-attachtype") && i.attr("style").indexOf("line-height") >= 0 && i.css("line-height", i.height() + "px"), "jwfb" == i.attr("data-dblType") && ("yes" != i.children(b.appOtherCls).attr("data-s") ? (i.children(b.appOtherCls).children("div:eq(1)").height(i.height()), i.children(b.appOtherCls).children("div:eq(2)").css("left", i.width()).height(i.height())) : (i.children(b.appOtherCls).children("div:eq(1)").width(i.width()), i.children(b.appOtherCls).children("div:eq(2)").css("top", i.height()).width(i.width()))), "jtsb" == i.attr("data-dblType") && (w = i.children(b.appOtherCls).attr("style"), i.html('<div class="t-app-other" style="position:absolute;">' + i.children(b.appOtherCls).html() + "</div>").tResize(), i.children(b.appOtherCls).attr("style", w), i.children(b.appOtherCls).children("div").css({
				left: 0,
				top: 0
			})), ("jfsb" == i.attr("data-dblType") || "jfyb" == i.attr("data-dblType") || "jwfb" == i.attr("data-dblType") || "jab" == i.attr("data-dblType")) && i.css("line-height", i.height() + "px")
		}
	}, a.End = function(a) {
		var c, d, e, f, g, h, l, m, n, o, p, i, j, k, q, r, s, t, u, v, C, D, w, x, y, z, A, B;
		if (b.resizeEle) {
			if (i = b.resizeEle, j = b.direction, k = b.resizeCache, q = b.tParseInt(b.snapOutTolerance), r = b.tParseInt(b.snapInTolerance), s = b.tParseInt(b.snapOutSpace), t = b.tParseInt(b.snapInSpace), u = a.pageX + b.junebox.scrollLeft() - b.offsleft, v = a.pageY + b.junebox.scrollTop() - b.offstop, Math.abs(a.pageX - k.x) <= 1 && Math.abs(a.pageY - k.y) <= 1) return b.resizeEle = null, b.snapSwitch && (b.resizeElements = []), void 0;
			switch (i.parent().hasClass(b.appClsVal) && b.show() && (u -= b.tParseInt(i.parent().css("left")), v -= b.tParseInt(i.parent().css("top"))), i.parent().parent().hasClass(b.appClsVal) && (u -= b.tParseInt(i.parent().parent().css("left")), v -= b.tParseInt(i.parent().parent().css("top"))), j) {
			case "n":
				i.css({
					top: v
				});
				break;
			case "w":
				i.css({
					left: u
				});
				break;
			case "ne":
				i.css({
					top: v
				});
				break;
			case "sw":
				i.css({
					left: u
				});
				break;
			case "nw":
				i.css({
					left: u,
					top: v
				})
			}
			for (j && j.indexOf("w") >= 0 && (u > k.left + k.width - 15 ? i.css({
				left: k.left + k.width - 15
			}).width(15) : (i.width(k.width - u + k.left), d = b.offsleft - i.offset().left - b.junebox.scrollLeft(), e = i.width() - d, d >= 0 && i.offset({
				left: b.offsleft - b.junebox.scrollLeft()
			}).width(e))), j && j.indexOf("e") >= 0 && (u - k.left <= 15 ? i.width(15) : (i.width(u - k.left), h = i.offset().left + i.width() + b.junebox.scrollLeft() - b.june.width() - b.offsleft, e = i.width() - h, h >= 0 && i.width(e))), j && j.indexOf("n") >= 0 && (v > k.top + k.height - 15 ? i.css({
				top: k.top + k.height - 15
			}).height(15) : (i.height(k.height - v + k.top), c = b.offstop - i.offset().top - b.junebox.scrollTop(), f = i.height() - c, c >= 0 && i.offset({
				top: b.offstop - b.junebox.scrollTop()
			}).height(f))), j && j.indexOf("s") >= 0 && (v - k.top <= 15 ? i.height(15) : (i.height(v - k.top), g = i.offset().top + i.height() + b.junebox.scrollTop() - b.june.height() - b.offstop, f = i.height() - g, g >= 0 && i.height(f))), p = b.resizeElements.length - 1; p >= 0; p--) l = b.resizeElements[p].left, m = l + b.resizeElements[p].width, n = b.resizeElements[p].top, o = n + b.resizeElements[p].height, "inner" !== b.resizeElements[p].snapMode && (Math.abs(n - v) <= q && j && j.indexOf("s") >= 0 && i.height(n - k.top - s), Math.abs(o - v) <= q && j && j.indexOf("n") >= 0 && i.css({
				top: o + s
			}).height(k.height - o - s + k.top), Math.abs(l - u) <= q && j && j.indexOf("e") >= 0 && i.width(l - k.left - s), Math.abs(m - u) <= q && j && j.indexOf("w") >= 0 && i.css({
				left: m + s
			}).width(k.width - m - s + k.left)), "outer" !== b.resizeElements[p].snapMode && (Math.abs(o - v) <= r && j && j.indexOf("s") >= 0 && i.height(o - k.top - t), Math.abs(n - v) <= r && j && j.indexOf("n") >= 0 && i.css({
				top: n + t
			}).height(k.height - n - t + k.top), Math.abs(m - u) <= r && j && j.indexOf("e") >= 0 && i.width(m - k.left - t), Math.abs(l - u) <= r && j && j.indexOf("w") >= 0 && i.css({
				left: l + t
			}).width(k.width - l - t + k.left));
			if (b.tProcess(i), b.show() && ("jbob" == i.attr("data-dblType") && b.toFilter(i), "jcb" == i.attr("data-dblType") && "multi" != i.attr("data-cast") && i.css("line-height", i.height() + "px"), "jsb" == i.attr("data-dblType") && i.children(b.appChildCls + "[data-attachtype='jsbInput']").css("line-height", i.height() + "px")), "jwfb" == i.attr("data-dblType") && ("yes" != i.children(b.appOtherCls).attr("data-s") ? (i.children(b.appOtherCls).children("div:eq(1)").height(i.height()), i.children(b.appOtherCls).children("div:eq(2)").css("left", i.width()).height(i.height())) : (i.children(b.appOtherCls).children("div:eq(1)").width(i.width()), i.children(b.appOtherCls).children("div:eq(2)").css("top", i.height()).width(i.width()))), "jtsb" == i.attr("data-dblType") && b.appConfig["jtsb"][1].tSubmit(JSON.parse(i.attr("data-config") || "{}"), i), ("jfsb" == i.attr("data-dblType") || "jfyb" == i.attr("data-dblType") || "jwfb" == i.attr("data-dblType") || "jab" == i.attr("data-dblType")) && i.css("line-height", i.height() + "px"), w = require("scripts/action"), x = i.attr("data-attachType"), y = i.width(), z = i.height(), A = b.tParseInt(i.css("top")), B = b.tParseInt(i.css("left")), y != k.width || z != k.height || A != k.top || B != k.left) if (x) {
				if (C = JSON.parse(i.parent().attr("data-config")), D = i.attr("attachID"), C.childConfig) {
					for (p = 0; p < C.childConfig.length; p++) C.childConfig[p].attachID == D && (C.childConfig[p].autoSize && (C.childConfig[p].autoSize = "no"), C.childConfig[p].autoSize1 && (C.childConfig[p].autoSize1 = "no"));
					i.parent().attr("data-config", JSON.stringify(C))
				}
				"jfsb" == i.attr("data-dblType") && (C.sWidth = "", C.sHeight = "", i.parent().attr("data-config", JSON.stringify(C))), w.create("resize", i.parent(), i)
			} else C = JSON.parse(i.attr("data-config")), C.autoSize && (C.autoSize = "no"), i.attr("data-config", JSON.stringify(C)), w.create("resize", i)
		}
		b.resizeEle = null, b.snapSwitch && (b.resizeElements = [])
	}, a
}), define("scripts/snap.js", function(a) {
	var b = require("scripts/D");
	return a.snapStart = function() {
		return b.snapEle && b.snapEle.hasClass("june-nonsp") ? (b.snapElements = [], b.snapEle = null, void 0) : (b.snapEle && b.createSnapElements(b.snapEle), void 0)
	}, a.snapIng = function() {
		if (b.snapEle) {
			var c, d, e, f, g, h = b.tParseInt(b.snapOutTolerance),
				i = b.tParseInt(b.snapInTolerance),
				j = b.tParseInt(b.snapOutSpace),
				k = b.tParseInt(b.snapInSpace),
				l = b.snapEle.offset().left,
				m = l + b.snapEle.outerWidth(),
				n = b.snapEle.offset().top,
				o = n + b.snapEle.outerHeight();
			for (g = b.snapElements.length - 1; g >= 0; g--) c = b.snapElements[g].left, d = c + b.snapElements[g].width, e = b.snapElements[g].top, f = e + b.snapElements[g].height, "inner" !== b.snapElements[g].snapMode && (Math.abs(e - o) <= h && b.snapEle.offset({
				top: e - b.snapEle.outerHeight() - j
			}), Math.abs(f - n) <= h && b.snapEle.offset({
				top: f + j
			}), Math.abs(c - m) <= h && b.snapEle.offset({
				left: c - b.snapEle.outerWidth() - j
			}), Math.abs(d - l) <= h && b.snapEle.offset({
				left: d + j
			})), "outer" !== b.snapElements[g].snapMode && (Math.abs(e - n) <= i && b.snapEle.offset({
				top: e + k
			}), Math.abs(f - o) <= i && b.snapEle.offset({
				top: f - b.snapEle.outerHeight() - k
			}), Math.abs(c - l) <= i && b.snapEle.offset({
				left: c + k
			}), Math.abs(d - m) <= i && b.snapEle.offset({
				left: d - b.snapEle.outerWidth() - k
			}))
		}
	}, a.snapEnd = function() {
		if (b.snapEle) {
			var c, d, e, f, g, h = b.tParseInt(b.snapOutTolerance),
				i = b.tParseInt(b.snapInTolerance),
				j = b.tParseInt(b.snapOutSpace),
				k = b.tParseInt(b.snapInSpace),
				l = b.snapEle.offset().left,
				m = l + b.snapEle.outerWidth(),
				n = b.snapEle.offset().top,
				o = n + b.snapEle.outerHeight();
			for (g = b.snapElements.length - 1; g >= 0; g--) c = b.snapElements[g].left, d = c + b.snapElements[g].width, e = b.snapElements[g].top, f = e + b.snapElements[g].height, "inner" !== b.snapElements[g].snapMode && (Math.abs(e - o) <= h && b.snapEle.offset({
				top: e - b.snapEle.outerHeight() - j
			}), Math.abs(f - n) <= h && b.snapEle.offset({
				top: f + j
			}), Math.abs(c - m) <= h && b.snapEle.offset({
				left: c - b.snapEle.outerWidth() - j
			}), Math.abs(d - l) <= h && b.snapEle.offset({
				left: d + j
			})), "outer" !== b.snapElements[g].snapMode && (Math.abs(e - n) <= i && b.snapEle.offset({
				top: e + k
			}), Math.abs(f - o) <= i && b.snapEle.offset({
				top: f - b.snapEle.outerHeight() - k
			}), Math.abs(c - l) <= i && b.snapEle.offset({
				left: c + k
			}), Math.abs(d - m) <= i && b.snapEle.offset({
				left: d - b.snapEle.outerWidth() - k
			}));
			b.snapElements = [], b.snapEle = null
		}
	}, a
}), define("scripts/drag.js", function(a) {
	var b = require("scripts/D");
	return require("scripts/action"), a.Start = function(a) {
		var c, e, f, g, d = !1;
		"june" != a.target.id && "zdybox" != a.target.id && (c = $(a.target), c.hasClass(b.rhClsVal) || (c.hasClass(b.appClsVal) || c.hasClass(b.appChildClsVal)) && (b.dragStartX && b.dragStartY || (b.dragStartX = a.pageX, b.dragStartY = a.pageY, e = c.attr("appID"), f = c.attr("attachID"), g = b.jSelectsedDom, g.each(function() {
			var a = $(this);
			a.attr("appID") != e && (d = !0)
		}), 0 == g.length && (d = !0), ("jspb" == c.attr("data-dblType") && f && c.parent().hasClass(b.selectedVal) || "jspb" == c.attr("data-dblType") && f && d) && (c = c.parent()), (d || "jspb" != c.attr("data-dblType")) && (!c.hasClass(b.selectedVal) && c.hasClass(b.appClsVal) && (b.chooseApp(e), b.chooseLayer(e)), !c.hasClass(b.selectedVal) && c.hasClass(b.appChildClsVal) && (b.chooseAppChild(f), b.chooseLayer(e))), c.hasClass(b.dragNaClsVal) || b.dragSwitch && (g = b.jSelectsedDom, g.each(function(a) {
			b.dragX[a] = b.dragStartX - $(this).offset().left, b.dragY[a] = b.dragStartY - $(this).offset().top
		}), b.dragEle = c, g.length <= 1 && b.snapSwitch && (b.snapEle = b.dragEle)))))
	}, a.Ing = function(a) {
		var c, d, e;
		b.dragSwitch && ($(a.target).hasClass(b.rhClsVal) || (c = a.shiftKey, b.dragEle && (d = a.pageX, e = a.pageY, c ? b.Dragdirection || (d != b.dragStartX ? b.Dragdirection = "x" : e != b.dragStartY && (b.Dragdirection = "y")) : b.Dragdirection = null, b.jSelectsedDom.each(function(a) {
			if (!$(this).hasClass(b.dragNaClsVal)) {
				var f = d - b.dragX[a],
					g = e - b.dragY[a];
				($(this).attr("attachID") && "jspb" != $(this).attr("data-dblType") || !$(this).attr("attachID")) && (f + $(this).width() + b.junebox.scrollLeft() > b.june.width() + b.offsleft && (f = b.june.width() + b.offsleft - $(this).width() - b.junebox.scrollLeft()), g + $(this).height() + b.junebox.scrollTop() > b.june.height() + b.offstop && (g = b.june.height() + b.offstop - $(this).height() - b.junebox.scrollTop()), f < b.offsleft - b.junebox.scrollLeft() && (f = b.offsleft - b.junebox.scrollLeft()), g < b.offstop - b.junebox.scrollTop() && (g = b.offstop - b.junebox.scrollTop())), "x" == b.Dragdirection ? $(this).offset({
					left: f
				}) : "y" == b.Dragdirection ? $(this).offset({
					top: g
				}) : $(this).offset({
					left: f,
					top: g
				}), b.toFilter($(this)), b.tProcess($(this), "ing")
			}
		}))))
	}, a.End = function(a) {
		if (b.dragEle) {
			var c = a.pageX,
				d = a.pageY;
			b.jSelectsedDom.each(function(a) {
				if (!$(this).hasClass(b.dragNaClsVal)) {
					var g = ($(this), c - b.dragX[a]),
						h = d - b.dragY[a];
					($(this).attr("attachID") && "jspb" != $(this).attr("data-dblType") || !$(this).attr("attachID")) && (g + $(this).width() + b.junebox.scrollLeft() > b.june.width() + b.offsleft && (g = b.june.width() + b.offsleft - $(this).width() - b.junebox.scrollLeft()), h + $(this).height() + b.junebox.scrollTop() > b.june.height() + b.offstop && (h = b.june.height() + b.offstop - $(this).height() - b.junebox.scrollTop()), g < b.offsleft - b.junebox.scrollLeft() && (g = b.offsleft - b.junebox.scrollLeft()), h < b.offstop - b.junebox.scrollTop() && (h = b.offstop - b.junebox.scrollTop())), "x" == b.Dragdirection ? $(this).offset({
						left: g
					}) : "y" == b.Dragdirection ? $(this).offset({
						top: h
					}) : $(this).offset({
						left: g,
						top: h
					}), b.toFilter($(this)), b.tProcess($(this))
				}
			})
		}
		b.Dragdirection = null, b.dragX = [], b.dragY = []
	}, a
}), define("scripts/select.js", function(a) {
	var b = require("scripts/D");
	return a.Start = function(a) {
		("june" == a.target.id || "zdybox" == a.target.id || "junebox" == a.target.id || "tZdyDialog" == a.target.id) && (a.ctrlKey ? b.jSelectsedDom.addClass("t-temp-selected") : (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected")), $("#tThumb").is(":hidden") || ($("#tThumb").hide(), $("#tParentThumb").hide()), b.startX = a.pageX + b.junebox.scrollLeft(), b.startY = a.pageY + b.junebox.scrollTop(), b.selectHelper = $('<div class="t-select-helper"></div>'), b.selectHelper.appendTo(b.junebox).offset({
			left: b.startX,
			top: b.startY
		}).width(0).height(0))
	}, a.Ing = function(a) {
		if (b.selectHelper) {
			var c, d = b.startX,
				e = b.startY,
				f = a.pageX + b.junebox.scrollLeft(),
				g = a.pageY + b.junebox.scrollTop(),
				h = b.june.width() + b.offsleft,
				i = b.june.height() + b.offstop;
			d > f && (c = f, f = d, d = c), e > g && (c = g, g = e, e = c), d < b.offsleft && (d = b.offsleft), e < b.offstop && (e = b.offstop), f > h + 300 && (f = h + 300), g > i + 300 && (g = i + 300), b.selectHelper.offset({
				left: d - b.junebox.scrollLeft(),
				top: e - b.junebox.scrollTop()
			}).width(f - d).height(g - e), b.june.find("div:not(" + b.rhCls + "):not(" + b.appOtherCls + "):not(.t-temp-selected)").each(function() {
				var a = $(this),
					c = a.attr("appID"),
					h = a.offset().left + b.junebox.scrollLeft(),
					i = h + a.outerWidth(),
					j = a.offset().top + b.junebox.scrollTop(),
					k = j + a.outerHeight(),
					l = !1;
				!a.hasClass(b.appClsVal) && !a.hasClass(b.appChildClsVal) || a.hasClass("junehtml") || ("touch" === b.selectTolerance ? l = !(h > f || d > i || j > g || e > k) : "fit" === b.selectTolerance && (l = h > d && f > i && j > e && g > k), l ? a.hasClass(b.selectedVal) || (a.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(a), b.selectLayer(c, !0)) : a.hasClass(b.selectedVal) && (a.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(a[0]), b.selectLayer(c, !1)))
			})
		}
	}, a.End = function(a) {
		if (b.selectHelper) {
			var c, d = b.startX,
				e = b.startY,
				f = a.pageX + b.junebox.scrollLeft(),
				g = a.pageY + b.junebox.scrollTop(),
				h = b.june.width() + b.offsleft,
				i = b.june.height() + b.offstop;
			d > f && (c = f, f = d, d = c), e > g && (c = g, g = e, e = c), d < b.offsleft && (d = b.offsleft), e < b.offstop && (e = b.offstop), f > h + 300 && (f = h + 300), g > i + 300 && (g = i + 300), b.selectHelper.offset({
				left: d - b.junebox.scrollLeft(),
				top: e - b.junebox.scrollTop()
			}).width(f - d).height(g - e), b.june.find("div:not(" + b.rhCls + "):not(" + b.appOtherCls + "):not(.t-temp-selected)").each(function() {
				var a = $(this),
					c = a.attr("appID"),
					h = a.offset().left + b.junebox.scrollLeft(),
					i = h + a.outerWidth(),
					j = a.offset().top + b.junebox.scrollTop(),
					k = j + a.outerHeight(),
					l = !1;
				!a.hasClass(b.appClsVal) && !a.hasClass(b.appChildClsVal) || a.hasClass("junehtml") || ("touch" === b.selectTolerance ? l = !(h > f || d > i || j > g || e > k) : "fit" === b.selectTolerance && (l = h > d && f > i && j > e && g > k), l ? a.hasClass(b.selectedVal) || (a.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(a), b.selectLayer(c, !0)) : a.hasClass(b.selectedVal) && (a.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(a[0]), b.selectLayer(c, !1)))
			}), b.selectHelper.remove()
		}
		b.june.find(".t-temp-selected").removeClass("t-temp-selected"), b.selectHelper = null
	}, a
}), define("scripts/drawArea.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/action"),
		d = require("scripts/layer"),
		e = b.appConfig;
	return a.Start = function(a) {
		("june" == a.target.id || "zdybox" == a.target.id || $(a.target).hasClass("junehtml") || $(a.target).hasClass(b.dragNaClsVal) || $(a.target).hasClass(b.dragNaClsVal1)) && (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected"), $("#tThumb").is(":hidden") || ($("#tThumb").hide(), $("#tParentThumb").hide()), b.startX = a.pageX + b.junebox.scrollLeft(), b.startY = a.pageY + b.junebox.scrollTop(), b.drawHelper = $(e.jdb[0]), b.drawPut = !1, b.snapSwitch && b.createSnapElements())
	}, a.Ing = function(a) {
		if (b.drawHelper) {
			var c, d, f, g, h, i, j = null,
				k = $.extend({}, e.jdb[2]),
				l = b.tParseInt(b.snapOutTolerance),
				m = b.tParseInt(b.snapInTolerance),
				n = b.tParseInt(b.snapOutSpace),
				o = b.tParseInt(b.snapInSpace),
				p = ["s", "e"],
				q = b.startX,
				r = b.startY,
				s = a.pageX + b.junebox.scrollLeft(),
				t = a.pageY + b.junebox.scrollTop(),
				u = b.june.width() + b.offsleft,
				v = b.june.height() + b.offstop;
			if (q > s && (c = s, s = q, q = c, p[1] = "w"), r > t && (c = t, t = r, r = c, p[0] = "n"), q < b.offsleft && (q = b.offsleft), r < b.offstop && (r = b.offstop), s > u && (s = u), t > v && (t = v), (Math.abs(q - s) > 5 || Math.abs(r - t) > 5) && (b.drawPut || (j = b.setAppID(k), b.drawHelper.attr("appID", j), b.drawHelper.appendTo(b.june).attr("data-config", JSON.stringify(k)).tResize(), b.drawHelper.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.drawHelper), b.drawPut = !0)), b.drawHelper.offset({
				left: q - b.junebox.scrollLeft(),
				top: r - b.junebox.scrollTop()
			}).width(s - q).height(t - r), b.snapSwitch) for (i = b.snapElements.length - 1; i >= 0; i--) d = b.snapElements[i].left, f = d + b.snapElements[i].width, g = b.snapElements[i].top, h = g + b.snapElements[i].height, "inner" !== b.snapElements[i].snapMode && (Math.abs(g - t + b.junebox.scrollTop()) <= l && "s" == p[0] && b.drawHelper.height(g - r + b.junebox.scrollTop() - n), Math.abs(h - r + b.junebox.scrollTop()) <= l && "n" == p[0] && b.drawHelper.offset({
				top: h + n
			}).height(t - r - h - n + r - b.junebox.scrollTop()), Math.abs(d - s + b.junebox.scrollLeft()) <= l && "e" == p[1] && b.drawHelper.width(d - q + b.junebox.scrollLeft() - n), Math.abs(f - q + b.junebox.scrollLeft()) <= l && "w" == p[1] && b.drawHelper.offset({
				left: f + n
			}).width(s - q - f - n + q - b.junebox.scrollLeft())), "outer" !== b.snapElements[i].snapMode && (Math.abs(h - t + b.junebox.scrollTop()) <= m && "s" == p[0] && b.drawHelper.height(h - r + b.junebox.scrollTop() - o), Math.abs(g - r + b.junebox.scrollTop()) <= m && "n" == p[0] && b.drawHelper.offset({
				top: g + o
			}).height(t - r - g - o + r - b.junebox.scrollTop()), Math.abs(f - s + b.junebox.scrollLeft()) <= m && "e" == p[1] && b.drawHelper.width(f - q + b.junebox.scrollLeft() - o), Math.abs(d - q + b.junebox.scrollLeft()) <= m && "w" == p[1] && b.drawHelper.offset({
				left: d + o
			}).width(s - q - d - o + q - b.junebox.scrollLeft()))
		}
	}, a.End = function(a) {
		if (b.drawHelper) {
			var e, f, g, h, i, j, k = b.drawHelper.attr("appID") || "",
				l = b.tParseInt(b.snapOutTolerance),
				m = b.tParseInt(b.snapInTolerance),
				n = b.tParseInt(b.snapOutSpace),
				o = b.tParseInt(b.snapInSpace),
				p = ["s", "e"],
				q = b.startX,
				r = b.startY,
				s = a.pageX + b.junebox.scrollLeft(),
				t = a.pageY + b.junebox.scrollTop(),
				u = b.june.width() + b.offsleft,
				v = b.june.height() + b.offstop;
			if (q > s && (e = s, s = q, q = e, p[1] = "w"), r > t && (e = t, t = r, r = e, p[0] = "n"), q < b.offsleft && (q = b.offsleft), r < b.offstop && (r = b.offstop), s > u && (s = u), t > v && (t = v), b.drawHelper.offset({
				left: q - b.junebox.scrollLeft(),
				top: r - b.junebox.scrollTop()
			}).width(s - q).height(t - r), b.snapSwitch) for (j = b.snapElements.length - 1; j >= 0; j--) f = b.snapElements[j].left, g = f + b.snapElements[j].width, h = b.snapElements[j].top, i = h + b.snapElements[j].height, "inner" !== b.snapElements[j].snapMode && (Math.abs(h - t + b.junebox.scrollTop()) <= l && "s" == p[0] && b.drawHelper.height(h - r + b.junebox.scrollTop() - n), Math.abs(i - r + b.junebox.scrollTop()) <= l && "n" == p[0] && b.drawHelper.offset({
				top: i + n
			}).height(t - r - i - n + r - b.junebox.scrollTop()), Math.abs(f - s + b.junebox.scrollLeft()) <= l && "e" == p[1] && b.drawHelper.width(f - q + b.junebox.scrollLeft() - n), Math.abs(g - q + b.junebox.scrollLeft()) <= l && "w" == p[1] && b.drawHelper.offset({
				left: g + n
			}).width(s - q - g - n + q - b.junebox.scrollLeft())), "outer" !== b.snapElements[j].snapMode && (Math.abs(i - t + b.junebox.scrollTop()) <= m && "s" == p[0] && b.drawHelper.height(i - r + b.junebox.scrollTop() - o), Math.abs(h - r + b.junebox.scrollTop()) <= m && "n" == p[0] && b.drawHelper.offset({
				top: h + o
			}).height(t - r - h - o + r - b.junebox.scrollTop()), Math.abs(g - s + b.junebox.scrollLeft()) <= m && "e" == p[1] && b.drawHelper.width(g - q + b.junebox.scrollLeft() - o), Math.abs(f - q + b.junebox.scrollLeft()) <= m && "w" == p[1] && b.drawHelper.offset({
				left: f + o
			}).width(s - q - f - o + q - b.junebox.scrollLeft()));
			Math.abs(q - s) < 10 || Math.abs(r - t) < 10 ? (b.jSelectsedDom = b.jSelectsedDom.not(b.drawHelper[0]), b.drawHelper.remove()) : "" != k ? (b.createAppName("jdb", k), d.createLayer("jdb", k), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.drawHelper.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.drawHelper), c.create("add", b.drawHelper)) : (b.jSelectsedDom = b.jSelectsedDom.not(b.drawHelper[0]), b.drawHelper.remove()), b.drawHelper = null, b.resizeElements = []
		}
	}, a
}), define("scripts/appManage.js", function(a) {
	var b = require("scripts/D"),
		d = (b.appConfig, require("scripts/layer")),
		e = require("scripts/action"),
		f = {};
	return f.jzdb = require("scripts/drawZiDingYi"), f.jdb = require("scripts/drawReQu"), f.job = require("scripts/drawZhengFanMian"), f.jbob = require("scripts/drawDaTuZhengFanMian"), f.jcb = require("scripts/drawWenZi"), f.jdlb = require("scripts/drawDuanLuo"), f.jvb = require("scripts/drawShiPin"), f.jwb = require("scripts/drawWangWang"), f.jwwb = require("scripts/drawWangGroup"), f.jcdb = require("scripts/drawDaoJiShi"), f.jab = require("scripts/drawGuanZhu"), f.jsb = require("scripts/drawDianNeiSouSuo"), f.jeb = require("scripts/drawErWeiMa"), f.jfb = require("scripts/drawFenXiang"), f.jsdb = require("scripts/drawTuPianLunBo"), f.jwfb = require("scripts/drawWuFengLunBo"), f.jqtb = require("scripts/drawQianTaoLunBo"), f.jfsb = require("scripts/drawJiaoDianLunBo"), f.jfyb = require("scripts/drawFanYeLunBo"), f.jspb = require("scripts/drawTeXiaoCeng"), f.jgb = require("scripts/drawGouWuChe"), f.jscb = require("scripts/drawShouCang"), f.jpb = require("scripts/drawTanChuCeng"), f.jzzb = require("scripts/drawZheZhaoCeng"), f.jmdb = require("scripts/drawMaoDian"), f.jacb = require("scripts/drawKeGuanBiCeng"), f.jtsb = require("scripts/drawGunDongWenZi"), f.jib = require("scripts/drawBaoBei"), f.jadb = require("scripts/drawShouFengQin"), f.jsfb = require("scripts/drawDianPuFenLei"), f.jkgb = require("scripts/drawKaiGuanDeng"), f.jplb = require("scripts/drawPingLun"), f.jdhb = require("scripts/drawDongTaiHaiBao"), f.jspbChild = require("scripts/childTeXiaoZiCeng"), f.jkgbChild = require("scripts/childKaiGuanDengTuPian"), f.jbobChild = require("scripts/childDaTuZhengFanMian"), f.jfsbChild = require("scripts/childLunboKuoZhan"), f.jqtbChild = require("scripts/childLunboKuoZhan"), f.jwfbChild = require("scripts/childLunboKuoZhan"), a.create = function(b, c, d) {
		c ? f[b].create(b, function(b, e) {
			c(b, e, d, a.callback)
		}, !0) : f[b].create(b, a.callback)
	}, a.createChild = function(b, c, d, e) {
		d ? f[b].create(b, c, function(b, c) {
			d(b, c, e, a.callback)
		}) : f[b].create(b, c, a.callback)
	}, a.remove = function(a, c) {
		var d, f, h, i, g = !1;
		a.length > 1 && "array" == $.type(a) ? (d = [], f = [], g = !0, h = a, i = c) : (h = [], h[0] = a, i = [], i[0] = c), $.each(h, function(a) {
			var e, j, k, l, m, n, o;
			if (!i[a] || i[a].length <= 0) e = $(b.appCls + "[appID='" + h[a] + "']"), j = $(b.layerCls + "[appID='" + h[a] + "']"), b.jSelectsedDom = b.jSelectsedDom.not(e[0]), e.attr("data-status", b.appClsVal).removeClass(b.appClsVal).appendTo(b.dump), j.attr("data-status", b.layerClsVal).removeClass(b.layerClsVal).appendTo(b.dumpLayer);
			else {
				if (e = $(b.appCls + "[appID='" + h[a] + "']"), k = JSON.parse(e.attr("data-config") || "{}"), l = $(b.appChildCls + "[attachID='" + i[a] + "']"), m = $("#tThumb").children(b.thumbCls + "[attachID='" + i[a] + "']"), n = e.attr("data-dblType"), "jspb" != n && "jkgb" != n && "jbob" != n && "lbePanel" != l.attr("data-attachType")) return;
				for (o in k.childConfig) k.childConfig[o].attachID == i[a] && k.childConfig.splice(o, 1);
				e.attr("data-config", JSON.stringify(k)), b.jSelectsedDom = b.jSelectsedDom.not(l[0]), l.attr("data-status", b.appChildClsVal).removeClass(b.appChildClsVal).appendTo(b.dump), m.attr("data-status", b.thumbClsVal).removeClass(b.thumbClsVal).appendTo(b.dumpLayer), b.showThumb(h[a], !0)
			}
			g ? (d.push(e), f.push(l)) : (d = e, f = l)
		}), e.create("remove", d, f)
	}, a.copy = function(a, c, d, f, g, h) {
		var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
		if (d) {
			if (i = $(b.appCls + "[appID='" + c + "']"), k = $(b.appChildCls + "[attachID='" + d + "']"), i.length <= 0) return;
			if ("jspb" == i.attr("data-dblType") || "jkgb" == i.attr("data-dblType") || "jbob" == i.attr("data-dblType") || "lbePanel" == k.attr("data-attachType")) {
				w = null, l = k.clone(), n = JSON.parse(i.attr("data-config")), o = b.setClonerAttachID(l);
				for (x in n.childConfig) n.childConfig[x].attachID == d && (w = $.extend(!0, {}, n.childConfig[x]), w.attachID = o, n.childConfig.push(w));
				if (!w) return;
				p = a.offsetX + b.junebox.scrollLeft(), q = a.offsetY + b.junebox.scrollTop(), b.dragStartX = a.pageX, b.dragStartY = a.pageY, b.dragX[0] = p, b.dragY[0] = q, l.offset({
					left: p,
					top: q
				}).appendTo(i).removeClass(b.dragNaClsVal), b.createAppName(l.attr("data-attachType"), c, o), i.attr("data-config", JSON.stringify(n)), g ? (b.chooseAppChild(o, !0), b.chooseLayer(c, !0), h ? b.chooseLayer(c) : b.chooseLayer(c, !0)) : (b.chooseAppChild(o), b.chooseLayer(c), b.dragEle = l, b.snapSwitch && (b.snapEle = b.dragEle), b.createSnapElements(b.snapEle), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = a.pageX, b.clickTimeStartY = a.pageY, b.clickTimeDom = a), l.hasClass("t-app-jspcb") && l.removeClass("t-app-jspcb"), "jbob" != i.attr("data-dblType") || l.hasClass("t-app-jbocb") || l.addClass("t-app-jbocb"), "jkgb" != i.attr("data-dblType") || l.hasClass("t-app-jkgb") || l.addClass("t-app-jkgb"), e.create("copy", i, l), h && (r = $.extend({}, a), r.target = l[0]), i.length > 0 && (t = i.attr("data-dblType") || "", u = JSON.parse(i.attr("data-config") || "{}"), "" != t && b.appConfig[t][1].tSubmit(u, i))
			}
		} else {
			if (i = $(b.appCls + "[appID='" + c + "']"), j = $(b.layerCls + "[appID='" + c + "']"), i.length <= 0) return;
			l = i.clone(), n = JSON.parse(i.attr("data-config")), m = j.clone(), o = b.setClonerID(l, m), l.children(b.appChildCls).each(function() {
				var a, c, d;
				k = $(this), a = k.attr("attachID"), c = b.setClonerAttachID(k), k.attr("appID", o);
				for (d in n.childConfig) n.childConfig[d].attachID == a && (n.childConfig[d].attachID = c)
			}), p = a.offsetX + b.junebox.scrollLeft(), q = a.offsetY + b.junebox.scrollLeft(), b.dragStartX = a.pageX, b.dragStartY = a.pageY, b.dragX[0] = p, b.dragY[0] = q, n.appID = o, l.offset({
				left: p,
				top: q
			}).appendTo(b.june).removeClass(b.dragNaClsVal), m.prependTo(b.layerList), b.createAppName(l.attr("data-dblType"), o), n.appLabel = l.attr("data-appName"), l.attr("data-config", JSON.stringify(n)), m.length > 0 && (s = m.html().replace(m.html().replace(/<[^>]+>/g, ""), ""), m.html(s).attr("data-appLabel", l.attr("data-appName")), m.children("span:eq(2)").html(l.attr("data-appName"))), g ? (b.chooseApp(o, !0), h ? b.chooseLayer(o) : b.chooseLayer(o, !0)) : (b.chooseApp(o), b.chooseLayer(o), b.dragEle = l, b.snapSwitch && (b.snapEle = b.dragEle), b.createSnapElements(b.snapEle), b.clickTimeStart = (new Date).getTime(), b.clickTimeStartX = a.pageX, b.clickTimeStartY = a.pageY, b.clickTimeDom = a), e.create("copy", l), h && (r = $.extend({}, a), r.target = l[0]), l.length > 0 && (t = l.attr("data-dblType"), u = JSON.parse(l.attr("data-config") || "{}"), "" != t && b.appConfig[t][1].tSubmit(u, l)), "jsfb" == l.attr("data-dblType") && (v = JSON.parse(l.attr("data-catsattachconfig") || "{}"), l.children(".t-app-child").each(function() {
				var e, a = $(this),
					d = (a.attr("attachID"), JSON.parse(a.attr("data-attachconfig") || "{}"));
				e = b.setClonerAttachID(a), d.attachID = e, a.attr("data-attachConfig", JSON.stringify(d)), d["hrefID"] && (v[d["hrefID"]] = e)
			}), l.attr("data-catsattachconfig", JSON.stringify(v)))
		}
		return ("key" == f && !d || d && ("jspb" == i.attr("data-dblType") || "jkgb" == i.attr("data-dblType") || "jbob" == i.attr("data-dblType") || "lbePanel" == k.attr("data-attachType"))) && (p = a.pageX + b.junebox.scrollLeft() - b.offsleft, q = a.pageY + b.junebox.scrollTop() - b.offstop, d && (p -= b.tParseInt(i.css("left")), q -= b.tParseInt(i.css("top"))), l.css({
			left: p - 10,
			top: q - 10
		}), b.dragX[0] = a.pageX - l.offset().left, b.dragY[0] = a.pageY - l.offset().top), r ? r : void 0
	}, a.moveUp = function(a) {
		var d = $(b.appCls + "[appID='" + a + "']"),
			f = $(b.layerCls + "[appID='" + a + "']"),
			g = d.index(),
			h = f.index() - 2;
		h >= 0 ? (d.insertAfter($(b.appCls + "[appID!='" + a + "']:eq(" + g + ")")), f.insertAfter($(b.layerCls + "[appID!='" + a + "']:eq(" + h + ")"))) : (d.appendTo(b.june), f.prependTo(b.layerList)), e.create("moveUp", d, d.attr("data-attachType"))
	}, a.moveDown = function(a, c) {
		var d, f, g, h;
		c ? (d = $(b.appCls + "[appID='" + a + "']"), $(b.appChildCls + "[attachID='" + c + "']"), f = $(b.layerCls + "[appID='" + a + "']"), $(b.layerCls + "[appID='" + a + "']"), g = d.index() - 2, h = f.index(), g >= 0 ? (d.insertAfter(b.june.children(b.appCls + "[appID!='" + a + "']:eq(" + g + ")")), f.insertAfter($(b.layerCls + "[appID!='" + a + "']:eq(" + h + ")"))) : (d.prependTo(b.june), f.appendTo(b.layerList)), e.create("moveDown", d, d.attr("data-attachType"))) : (d = $(b.appCls + "[appID='" + a + "']"), f = $(b.layerCls + "[appID='" + a + "']"), g = d.index() - 2, h = f.index(), g >= 0 ? (d.insertAfter(b.june.children(b.appCls + "[appID!='" + a + "']:eq(" + g + ")")), f.insertAfter($(b.layerCls + "[appID!='" + a + "']:eq(" + h + ")"))) : (b.june.children(".junehtml").length > 0 ? d.insertAfter(b.june.children(".junehtml")) : d.prependTo(b.june), f.appendTo(b.layerList)), e.create("moveDown", d, d.attr("data-attachType")))
	}, a.allowDrag = function(a, c) {
		var d = $(b.appCls + "[appID='" + a + "']"),
			e = $(b.appChildCls + "[attachID='" + c + "']");
		$(b.layerCls + "[appID='" + a + "']"), c ? e.removeClass(b.dragNaClsVal) : d.removeClass(b.dragNaClsVal)
	}, a.notAllowDrag = function(a, c) {
		var d = $(b.appCls + "[appID='" + a + "']"),
			e = $(b.appChildCls + "[attachID='" + c + "']");
		$(b.layerCls + "[appID='" + a + "']"), c ? e.addClass(b.dragNaClsVal) : d.addClass(b.dragNaClsVal)
	}, a.callback = function(a, c, f) {
		var h, j, g = $(b.appCls + "[appID='" + c + "']");
		b.createAppName(a, c, f), f ? (h = $(b.appChildCls + "[attachID='" + f + "']"), "jspbChild" == a && $("#tThumb").children(b.thumbCls + "[attachID='" + f + "']").children(".t-thumb-text").html(h.attr("data-appName").replace(/特效/g, ""))) : d.createLayer(a, c), e.create("add", g, h), b.getPopupContent(c, f), j = window.event || j || window.evt, b.showControl(j, "click")
	}, a.getStyle = function(a, c, d) {
		a.html(""), $.ajax({
			url: "getstyle.php",
			dataType: "JSON",
			data: {
				styletype: d,
				username: b.tUserName
			},
			success: function(e) {
				var h, i, f = $(b.appCls + "[appID='" + c + "']"),
					g = f.attr("data-styleID");
				for (h = 0; h < e.length; h++) i = "", e[h].ID == g && (i = " defaultStyleActive"), a.append('<div class="defaultStyleLi' + i + '" data-appType="' + d + '" data-styleID="' + e[h].ID + '" data-appID="' + c + '"><img src="' + e[h].styleurl + '">' + e[h].styletext + "</div>"), a.children(".defaultStyleLi:last").attr("data-code", e[h].stylecode).attr("data-code1", e[h].stylecode1)
			}
		})
	}, a.setStyle = function(a, c, d) {
		var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, f = require("scripts/UI_Dialog"),
			g = $(b.appCls + "[appID='" + a + "']"),
			h = g.attr("data-config");
		if (c = c || "jib", "jib" == c) {
			if (l = g.children("[data-attachType='jibtitle']"), m = g.children("[data-attachType='jibsubtitle']"), n = g.children("[data-attachType='jibprefix']"), o = g.children("[data-attachType='jibprice']"), p = g.children("[data-attachType='jibdiscountprefix']"), q = g.children("[data-attachType='jibdiscountprice']"), r = g.children("[data-attachType='jibsaleprefix']"), s = g.children("[data-attachType='jibsale']"), t = g.children("[data-attachType='jibbtn']"), u = g.children("[data-attachType='jibbtn1']"), v = g.children("[data-attachType='jibbtn2']"), w = g.children("[data-attachType='jibsubscript']"), x = g.children("[data-attachType='jibsubscript1']"), y = g.children("[data-attachType='jibsubscript2']"), z = g.children("[data-attachType='jibsubscript3']"), A = g.children("[data-attachType='jibsubscript4']"), B = g.children("[data-attachType='jiberweima']"), C = g.children("[data-attachType='jibexpandtext']"), D = g.children("[data-attachType='jibexpandtext1']"), E = g.children("[data-attachType='jibexpandtext2']"), F = g.children("[data-attachType='jibexpandtext3']"), G = g.children("[data-attachType='jibexpandtext4']"), i = {
				titleTop: b.tParseInt(l.css("top")),
				titleLeft: b.tParseInt(l.css("left")),
				subTitleTop: b.tParseInt(m.css("top")),
				subTitleLeft: b.tParseInt(m.css("left")),
				prefixTop: b.tParseInt(n.css("top")),
				prefixLeft: b.tParseInt(n.css("left")),
				priceTop: b.tParseInt(o.css("top")),
				priceLeft: b.tParseInt(o.css("left")),
				_prefixTop: b.tParseInt(p.css("top")),
				_prefixLeft: b.tParseInt(p.css("left")),
				_priceTop: b.tParseInt(q.css("top")),
				_priceLeft: b.tParseInt(q.css("left")),
				salePrefixTop: b.tParseInt(r.css("top")),
				salePrefixLeft: b.tParseInt(r.css("left")),
				saleTop: b.tParseInt(s.css("top")),
				saleLeft: b.tParseInt(s.css("left")),
				btnTop: b.tParseInt(t.css("top")),
				btnLeft: b.tParseInt(t.css("left")),
				btnWidth: b.tParseInt(t.css("width")),
				btnHeight: b.tParseInt(t.css("height")),
				btn1Top: b.tParseInt(u.css("top")),
				btn1Left: b.tParseInt(u.css("left")),
				btn1Width: b.tParseInt(u.css("width")),
				btn1Height: b.tParseInt(u.css("height")),
				btn2Top: b.tParseInt(v.css("top")),
				btn2Left: b.tParseInt(v.css("left")),
				btn2Width: b.tParseInt(v.css("width")),
				btn2Height: b.tParseInt(v.css("height")),
				subScriptTop: b.tParseInt(w.css("top")),
				subScriptLeft: b.tParseInt(w.css("left")),
				subScriptWidth: b.tParseInt(w.css("width")),
				subScriptHeight: b.tParseInt(w.css("height")),
				subScript1Top: b.tParseInt(x.css("top")),
				subScript1Left: b.tParseInt(x.css("left")),
				subScript1Width: b.tParseInt(x.css("width")),
				subScript1Height: b.tParseInt(x.css("height")),
				subScript2Top: b.tParseInt(y.css("top")),
				subScript2Left: b.tParseInt(y.css("left")),
				subScript2Width: b.tParseInt(y.css("width")),
				subScript2Height: b.tParseInt(y.css("height")),
				subScript3Top: b.tParseInt(z.css("top")),
				subScript3Left: b.tParseInt(z.css("left")),
				subScript3Width: b.tParseInt(z.css("width")),
				subScript3Height: b.tParseInt(z.css("height")),
				subScript4Top: b.tParseInt(A.css("top")),
				subScript4Left: b.tParseInt(A.css("left")),
				subScript4Width: b.tParseInt(A.css("width")),
				subScript4Height: b.tParseInt(A.css("height")),
				erWeiMaTop: b.tParseInt(B.css("top")),
				erWeiMaLeft: b.tParseInt(B.css("left")),
				expandTextTop: b.tParseInt(C.css("top")),
				expandTextLeft: b.tParseInt(C.css("left")),
				expandText1Top: b.tParseInt(D.css("top")),
				expandText1Left: b.tParseInt(D.css("left")),
				expandText2Top: b.tParseInt(E.css("top")),
				expandText2Left: b.tParseInt(E.css("left")),
				expandText3Top: b.tParseInt(F.css("top")),
				expandText3Left: b.tParseInt(F.css("left")),
				expandText4Top: b.tParseInt(G.css("top")),
				expandText4Left: b.tParseInt(G.css("left"))
			}, H = b.tParseInt(h.itemCount), I = [], H) {
				for (J = 0; H > J; J++) I.push("");
				h.href = I.join(",")
			}
		} else "jfsb" == c ? (K = g.children(b.appChildCls + "[data-attachType='jfsbSmallImg']"), L = g.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), M = g.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), N = [], K.each(function() {
			var d = {},
				e = $(this);
			d.top = b.tParseInt(e.css("top")), d.left = b.tParseInt(e.css("left")), d.width = e.width(), d.height = e.height(), N.push(d)
		}), i = {
			width: b.tParseInt(g.css("width")),
			height: b.tParseInt(g.css("height")),
			smallPos: N,
			oArrowTop: b.tParseInt(L.css("top")),
			oArrowLeft: b.tParseInt(L.css("left")),
			oArrowWidth: b.tParseInt(L.css("width")),
			oArrowHeight: b.tParseInt(L.css("height")),
			tArrowTop: b.tParseInt(M.css("top")),
			tArrowLeft: b.tParseInt(M.css("left")),
			tArrowWidth: b.tParseInt(M.css("width")),
			tArrowHeight: b.tParseInt(M.css("height"))
		}) : "jbob" == c ? (O = g.children(b.appChildCls), P = [], O.each(function() {
			var d = {},
				e = $(this);
			d.top = b.tParseInt(e.css("top")), d.left = b.tParseInt(e.css("left")), d.width = e.width(), d.height = e.height(), P.push(d)
		}), i = {
			width: b.tParseInt(g.css("width")),
			height: b.tParseInt(g.css("height")),
			slicePos: P
		}) : "jsdb" == c ? (Q = g.children(b.appChildCls + "[data-attachType='jsdbOArrow']"), R = g.children(b.appChildCls + "[data-attachType='jsdbTArrow']"), i = {
			width: b.tParseInt(g.css("width")),
			height: b.tParseInt(g.css("height")),
			oArrowTop: b.tParseInt(Q.css("top")),
			oArrowLeft: b.tParseInt(Q.css("left")),
			oArrowWidth: b.tParseInt(Q.css("width")),
			oArrowHeight: b.tParseInt(Q.css("height")),
			tArrowTop: b.tParseInt(R.css("top")),
			tArrowLeft: b.tParseInt(R.css("left")),
			tArrowWidth: b.tParseInt(R.css("width")),
			tArrowHeight: b.tParseInt(R.css("height"))
		}) : "jfyb" == c ? (S = g.children(b.appChildCls + "[data-attachType='jfybOArrow']"), T = g.children(b.appChildCls + "[data-attachType='jfybTArrow']"), U = g.children(b.appChildCls + "[data-attachType='jfybPanel']"), V = U.children(b.appOtherCls + "[data-attachType='jfybSmallImg']"), i = {
			width: b.tParseInt(g.css("width")),
			height: b.tParseInt(g.css("height")),
			smallLen: V.length,
			smallWidth: b.tParseInt(V.css("width")),
			smallHeight: b.tParseInt(V.css("height")),
			panelTop: b.tParseInt(U.css("top")),
			panelLeft: b.tParseInt(U.css("left")),
			panelWidth: b.tParseInt(U.css("width")),
			panelHeight: b.tParseInt(U.css("height")),
			oArrowTop: b.tParseInt(S.css("top")),
			oArrowLeft: b.tParseInt(S.css("left")),
			oArrowWidth: b.tParseInt(S.css("width")),
			oArrowHeight: b.tParseInt(S.css("height")),
			tArrowTop: b.tParseInt(T.css("top")),
			tArrowLeft: b.tParseInt(T.css("left")),
			tArrowWidth: b.tParseInt(T.css("width")),
			tArrowHeight: b.tParseInt(T.css("height"))
		}) : "jadb" == c ? (W = [], g.children(".t-jadb-title").each(function(a) {
			W[a] = {};
			var c = $(this),
				d = g.children(".t-jadb-panel:eq(" + a + ")");
			W[a].tWidth = c.width(), W[a].tHeight = c.height(), W[a].pWidth = d.width(), W[a].pHeight = d.height()
		}), i = {
			width: b.tParseInt(g.css("width")),
			height: b.tParseInt(g.css("height")),
			acreagePos: W
		}) : "jsfb" == c && (i = {});
		j = h, k = JSON.stringify(i), f.tDialogSetStyle(function(a, d, e, f) {
			if (!a || "" == a || "undefined" == a || !checkUrl(a)) return b.tMessage("请输入预设样式缩略图链接"), void 0;
			"jsfb" == c && (h = JSON.parse(h), h.formatName = f, j = JSON.stringify(h));
			var g = $("#rd1").children("input[name='stylePower']:checked").val() || "",
				i = 1;
			1 == g && (i = 0), $.ajax({
				url: "savestyle.php",
				data: {
					styleurl: a,
					styletext: d,
					styletype: c,
					username: b.tUserName,
					stylePower: g,
					styleExam: i,
					stylecode: j,
					stylecode1: k
				},
				type: "POST",
				dataType: "json",
				success: function(a) {
					a[0] ? (b.tMessage(a[1]), e.dialog("close")) : a[1] && b.tMessage(a[1])
				}
			})
		}, c, d)
	}, a.showStyle = function(c, d) {
		var j, k, f = $("#defaultStyleBox"),
			g = $(b.appCls + "[appID='" + d + "']"),
			h = g.attr("data-dblType"),
			i = g.attr("data-styleID");
		f.length < 1 ? (j = '<div id="defaultStyleBox"></div>', $(j).appendTo($("#tControlBtn").children(".t-control-btns-defaultstyle")).show(), f = $("#defaultStyleBox"), f.show(), f.on("click", ".defaultStyleLi", function() {
			var j, a = $(this),
				c = a.attr("data-appID"),
				d = $(b.appCls + "[appID='" + c + "']"),
				e = a.attr("data-appType"),
				g = a.attr("data-styleID"),
				h = JSON.parse(a.attr("data-code")),
				i = JSON.parse(a.attr("data-code1"));
			"jib" == e && d.length > 0 && (d.attr("data-styleID", g), j = JSON.parse(d.attr("data-config")), delete h.appID, delete h.itemCount, delete h.href, delete h.readVal, delete h.pSrc, delete h.oppoSrc, delete h.titleInfo, delete h.subTitleInfo, delete h.priceInfo, delete h._priceInfo, delete h.saleInfo, delete h.subScriptSrc, delete h.subScript1Src, delete h.subScript2Src, delete h.subScript3Src, delete h.subScript4Src, delete h.erWeiMaSrc, h = $.extend(!0, {}, j, h), b.appConfig["jib"][1].tSubmit(h, d, !0, i), f.children(".defaultStyleActive").removeClass("defaultStyleActive"), a.addClass("defaultStyleActive"))
		})) : (f.children(".defaultStyleLi").attr("data-appID", d), f.is(":hidden") ? (f.show(), f.children(".defaultStyleActive").removeClass("defaultStyleActive"), f.children(".defaultStyleLi[data-styleID='" + i + "']").addClass("defaultStyleActive")) : f.hide()), b.curAppType != h && ("jib" == h && a.getStyle(f, d, h), b.curAppType = h), ("jfsb" == h || "jbob" == h || "jsfb" == h || "jfyb" == h) && f.hide(), b.tUserLogin && "admin" == b.tUserName && ($("#setDefaultBox").length < 1 && (k = '<div id="setDefaultBox" style="background:#ff9977;width:20px;height:20px;position:absolute;left:0;bottom:-20px;">点我吧</div>', $(k).appendTo($("#tControlBtn").children(".t-control-btns-defaultstyle")).show(), $("#setDefaultBox").off("click").on("click", function() {
			var b = $(this).attr("data-appType");
			a.setStyle(d, b)
		})), $("#setDefaultBox").attr("data-appType", h))
	}, a
}), define("scripts/drawZiDingYi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 500,
			height: 300,
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawReQu.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 0,
			height: 0
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawZhengFanMian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 310,
			height: 220
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
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
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: 990,
				height: 800
			}).attr("data-config", JSON.stringify(h[2])).attr("appID", h[2].appID).addClass(b.selectedVal), i = $(b.appCls + "[appID='" + h[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), f(a, h[2].appID)
		} else d.tDialogBaoBei(function(d, h, i, j) {
			var l, k, m, n, o, p, q, r;
			if (j.dialog("close"), $(".ui-tooltip").hide(), k = c[a], m = JSON.parse(h), n = JSON.parse(i), k[2] = $.extend({}, k[2], m), k[2].childConfig = [], k[2].autoSize = "yes", b.setAppID(k[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(k[0]).appendTo(b.june).tResize({
				tSwitch: !1
			}).css({
				backgroundImage: "url(" + k[2].pSrc + ")",
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(k[2])).attr("appID", k[2].appID).addClass(b.selectedVal), l = $(b.appCls + "[appID='" + k[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(l), f(a, k[2].appID), o = n.slicePos.length, !g) {
				for (p = 0; o > p; p++) e.create("jbobChild", l, function(a, b, c) {
					var d = require("scripts/appManage");
					d.callback(a, b, c)
				}, !0, p, n, m.childConfig[p]);
				if (q = $(b.appCls + "[appID='" + k[2].appID + "']"), r = JSON.parse(q.attr("data-config")), r.childConfig && r.childConfig.length > 0) for (p = 0; p < r.childConfig.length; p++) b.setPopupContent(r.childConfig[p], !0, r.appID)
			}
		}, {
			styletype: "jbob"
		})
	}, a
}), define("scripts/childDaTuZhengFanMian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d, e, f, g, h, i) {
		var j, k, m, n, o, p, q, r, s, t;
		i = i || {}, h = h || {}, j = c["jbob"][1].tDynamic, k = $.extend({}, c["jbob"][1].tDynamicConfig, i), d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), m = d.attr("appID"), n = JSON.parse(d.attr("data-config")), b.setAttachID(k), n.childConfig.push(k), d.attr("data-config", JSON.stringify(n)), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), h = h || {}, o = $.extend({}, {
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
		}, h), p = 0, q = 0, r = 100, s = 100, f && (p = o.slicePos[g].left, q = o.slicePos[g].top, r = o.slicePos[g].width, s = o.slicePos[g].height), $(j).appendTo(d).tResize().css({
			left: p,
			top: q,
			width: r,
			height: s
		}).attr("attachID", k.attachID).attr("appID", m).addClass("t-app-jbocb"), t = $(b.appChildCls + "[attachID='" + k.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(t), e && e(a, m, k.attachID)
	}, a
}), define("scripts/drawWenZi.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		return b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html('<span class="jcbText">' + e[1].tContent + "</span>").appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 120,
			height: 24,
			fontSize: e[2].characterSize + "px",
			lineHeight: "24px",
			color: e[2].characterColor,
			fontWeight: e[2].characterWeight,
			textAlign: e[2].characterAlign,
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d ? (d(a, e[2].appID), void 0) : $(b.appCls + "[appID='" + e[2].appID + "']")
	}, a
}), define("scripts/drawDuanLuo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		return b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 320,
			height: 180,
			fontSize: e[2].paragraphSize + "px",
			lineHeight: e[2].paragraphLineHeight + "px",
			color: e[2].paragraphColor,
			fontWeight: e[2].paragraphWeight,
			textIndent: e[2].paragraphIndent + "px",
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d ? (d(a, e[2].appID), void 0) : $(b.appCls + "[appID='" + e[2].appID + "']")
	}, a
}), define("scripts/drawShiPin.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 480,
			height: 390
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), f.children("embed").css({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop()
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), f.children(b.appOtherCls).css({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop()
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), f.children(b.appOtherCls).css({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: g,
			height: h
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), f.children(b.appChildCls).tResize().css({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: g,
			height: h
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), f.children(b.appChildCls).each(function(a) {
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
			}).attr("appID", e[2].appID).attr("attachID", f.attachID), i += 62.1
		}), d(a, e[2].appID)
	}, a
}), define("scripts/drawDianNeiSouSuo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, g, h, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.setAttachID(e[2].childConfig[1]), b.setAttachID(e[2].childConfig[2]), b.setAttachID(e[2].childConfig[3]), b.setAttachID(e[2].childConfig[4]), g = 30, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].childConfig[0].searchSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 250,
			height: 33
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), h = 250, g = 0, f.children(b.appChildCls).each(function(a) {
			var d = $(this),
				f = e[2].childConfig[a],
				i = f.searchSrc;
			1 == a ? (h = 77, g = 250) : 2 == a ? (h = 160, g = 327, d.hide()) : 3 == a ? (h = 40, g = 373, d.hide()) : 4 == a && (h = 40, g = 447, d.hide(), i = e[2].childConfig[3].searchSrc), d.html(b.appMongolia).tResize().css({
				backgroundImage: "url(" + i + ")",
				top: 0,
				left: g,
				width: h,
				height: 33
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
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: 90,
				height: 90
			}).attr("data-config", JSON.stringify(f[2])).attr("appID", f[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + f[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), e(a, f[2].appID)
		})
	}, a
}), define("scripts/drawFenXiang.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].shareSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 61,
			height: 26
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawDongTaiHaiBao.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 1920,
			height: 900
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawTuPianLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var g, e = c[a],
			f = e[2].sliderSrc;
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + f[0] + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 500,
			height: 350
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), b.setAttachID(e[2].childConfig[0]), g.children(b.appChildCls + "[data-attachType='jsdbOArrow']").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].oSrc + ")",
			top: 290,
			left: 380,
			width: 48,
			height: 48
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), b.setAttachID(e[2].childConfig[0]), g.children(b.appChildCls + "[data-attachType='jsdbTArrow']").tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(" + e[2].childConfig[0].tSrc + ")",
			top: 290,
			left: 440,
			width: 48,
			height: 48
		}).attr("appID", e[2].appID).attr("attachID", e[2].childConfig[0].attachID), d(a, e[2].appID)
	}, a
}), define("scripts/drawWuFengLunBo.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var g, h, i, j, k, l, m, n, e = c[a],
			f = e[2].sliderSrc;
		for (b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), h = "", i = 0; i < e[2].contentType.length; i++) h += e[1].tDynamic;
		for ($(e[0]).html(e[1].tContent + h).appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 975,
			height: 484
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), g.children(b.appOtherCls).append('<div style="width:9999999px;height:100%;"></div>'), i = 0; i < f.length; i++) j = i % f.length, g.children(b.appOtherCls).children("div").append('<div style="display:block;float:left;width:325px;height:100%;background:url(' + f[j] + ') center center no-repeat;"></div>');
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 990,
			height: 420
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), h = 0; h < f.length; h++) i = "background:url(" + f[h].sliderSrc[0] + ") no-repeat center center;", g.children(b.appOtherCls).append('<div style="position:absolute;width:100%;height:100%;' + i + '"></div>');
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
		f ? (g = d[a], g[2].sliderSrc, b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), i = $(b.appCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), j = i.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), k = i.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), b.setAttachID(g[2].childConfig[0]), j.tResize({
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
				left: 0 - q + b.junebox.scrollLeft(),
				top: 0 - r + b.junebox.scrollTop(),
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).attr("data-styleID", c).addClass(b.selectedVal), j = $(b.appCls + "[appID='" + i[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), s = j.children(b.appChildCls + "[data-attachType='jfsbSmallImg']"), t = j.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), u = j.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), s.each(function(a) {
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
		f ? (g = d[a], g[2].sliderSrc, b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), i = $(b.appCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), j = i.children(b.appChildCls + "[data-attachType='jfybOArrow']"), k = i.children(b.appChildCls + "[data-attachType='jfybTArrow']"), b.setAttachID(g[2].childConfig[0]), j.tResize({
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
				left: 0 - q + b.junebox.scrollLeft(),
				top: 0 - r + b.junebox.scrollTop(),
				width: n.width,
				height: n.height
			}).attr("data-config", JSON.stringify(i[2])).attr("appID", i[2].appID).attr("data-styleID", c).addClass(b.selectedVal), j = $(b.appCls + "[appID='" + i[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), s = j.children(b.appChildCls + "[data-attachType='jfybOArrow']"), t = j.children(b.appChildCls + "[data-attachType='jfybTArrow']"), u = j.children(b.appChildCls + "[data-attachType='jfybPanel']"), b.setAttachID(i[2].childConfig[0]), u.html(p).tResize().css({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 390,
			height: 490
		}).attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), h = $(b.appCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(h), e(a, g[2].appID), f || d.create("jspbChild", h, function(a, b, c) {
			var d = require("scripts/appManage");
			d.callback(a, b, c)
		}, !0)
	}, a
}), define("scripts/childTeXiaoZiCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d, e, f) {
		var l, m, n, o, p, q, g = c["jspb"][1].tDynamic,
			h = c["jspb"][1].tDynamicConfig,
			i = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""),
			j = d.attr("appID"),
			k = JSON.parse(d.attr("data-config"));
		f ? (h.css3ModeY = "june-box-dy40", h.displayMode = "june-box-fadein") : (h.css3ModeY = "", h.displayMode = ""), b.setAttachID(h), k.childConfig.push(h), d.attr("data-config", JSON.stringify(k)), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g).appendTo(d).tResize().css({
			backgroundImage: "url(" + h.pSrc + ")",
			left: 0,
			top: 0,
			width: 332,
			height: 89
		}).attr("attachID", h.attachID).attr("appID", j).addClass(b.selectedVal), l = $(b.appChildCls + "[attachID='" + h.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(l), $("#tParentThumb").attr("appID", j), checkUrl(i) && $("#tParentThumb").find("img").attr("src", d.css("background-image").replace(/^url|[\(\"\)]*/g, "")), m = ' src="' + h.pSrc + '"', n = "", !checkUrl(h.pSrc) && (m = "", n = "display:none;"), $('<li class="t-thumb" data-target="thumb-selected" appID="' + j + '" attachID="' + h.attachID + '"><span class="t-layer-eye diseye" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img' + m + ' style="' + n + '"/></span><span class="t-thumb-text"></span></li>').prependTo($("#tThumb")), $("#tThumb").children(b.thumbSelected).removeClass(b.thumbSelectedVal), $("#tParentThumb").removeClass(b.thumbSelectedVal), $("#tThumb").children(b.thumbCls + "[attachID='" + h.attachID + "']").addClass(b.thumbSelectedVal), $(b.layerCls + "[appID='" + j + "']").length > 0 && (o = $(b.layerCls + "[appID='" + j + "']"), p = o.offset().top, $("#tParentThumb").show().offset({
			top: p + 1
		})), f && $(b.appChildCls + "[attachID='" + h.attachID + "']").css({
			top: 331,
			left: 30
		}), e && e(a, j, h.attachID), f && (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), d.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(d), q = $(b.appChildCls + "[attachID='" + h.attachID + "']"), $("#tThumb").children(b.thumbCls + "[attachID='" + h.attachID + "']").children(".t-thumb-text").html(q.attr("data-appName").replace(/特效/g, "")).addClass("t-app-jspcb"), $("#tThumb").children(b.thumbSelected).removeClass(b.thumbSelectedVal), $("#tParentThumb").addClass(b.thumbSelectedVal))
	}, a
}), define("scripts/drawTanChuCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).appendTo(b.june).tResize({
			tSwitch: !1
		}).css({
			backgroundImage: "url(http://img03.taobaocdn.com/imgextra/i3/39767794/TB2HykXapXXXXaLXXXXXXXXXXXX_!!39767794.png)",
			left: b.jpbLeft + b.junebox.scrollLeft(),
			top: b.jpbTop + b.junebox.scrollTop(),
			width: 50,
			height: 50
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), b.jpbLeft < 1200 ? b.jpbLeft += 60 : (b.jpbLeft = 0, b.jpbTop += 60), d(a, e[2].appID)
	}, a
}), define("scripts/drawZheZhaoCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, g, h, i, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.setAttachID(e[2].childConfig[1]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].zzcSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 787,
			height: 118
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), g = f.children(b.appChildCls + "[data-attachType='jzzbAttention']"), h = f.children(b.appChildCls + "[data-attachType='jzzbCountNumber']"), i = f.children(b.appChildCls + "[data-attachType='jzzbCountText']"), g.tResize().css({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 90,
			height: 23
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop()
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
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
			backgroundImage: "url(http://cnzoom.com/new/images/md.png)",
			left: b.jmdbLeft + b.junebox.scrollLeft(),
			top: b.jmdbTop + b.junebox.scrollTop(),
			width: 24,
			height: 24
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), b.jmdbLeft < 1200 ? b.jmdbLeft += 40 : (b.jmdbLeft = 0, b.jmdbTop += 40), d(a, e[2].appID)
	}, a
}), define("scripts/drawKeGuanBiCeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d) {
		var f, e = c[a];
		b.setAppID(e[2]), b.setAttachID(e[2].childConfig[0]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(e[0]).html(e[1].tContent).appendTo(b.june).tResize().css({
			backgroundImage: "url(" + e[2].pSrc + ")",
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 196,
			height: 267
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), f.children(b.appChildCls + ":eq(0)").tResize({
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
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 240,
			height: 24,
			lineHeight: "24px",
			overflow: "hidden"
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), $(b.appMongolia).prependTo(f), d(a, e[2].appID)
	}, a
}), define("scripts/drawKaiGuanDeng.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig,
		d = require("scripts/UI_Dialog"),
		e = require("scripts/childKaiGuanDengTuPian");
	return a.create = function(a, f) {
		var g = c[a];
		d.tDialogLightSwitch(function(c, d) {
			var i, h, l;
			if (c = b.tParseInt(c), !c || "" == c) return d.dialog("close"), $(".ui-tooltip").hide(), void 0;
			if (c > 20) return b.tMessage("抱歉，图片数量不能超过20个！"), d.dialog("close"), $(".ui-tooltip").hide(), void 0;
			for (h = Math.ceil(c / 4), b.setAppID(g[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(g[0]).html(g[1].tContent).appendTo(b.june).tResize().css({
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: 990,
				height: 335 * h + 6
			}).attr("data-config", JSON.stringify(g[2])).attr("appID", g[2].appID).addClass(b.selectedVal), i = $(b.appCls + "[appID='" + g[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), cTop = 6, cLeft = 6, l = 0; c > l; l++) e.createAuto(a, i, cLeft, cTop), cLeft += 246, 3 == l % 4 && (cLeft = 6, cTop += 335);
			d.dialog("close"), $(".ui-tooltip").hide(), f(a, g[2].appID)
		})
	}, a
}), define("scripts/childKaiGuanDengTuPian.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return a.create = function(a, d, e) {
		var j, f = c["jkgb"][1].tDynamic,
			g = c["jkgb"][1].tDynamicConfig,
			h = d.attr("appID"),
			i = JSON.parse(d.attr("data-config"));
		b.setAttachID(g), i.childConfig.push(g), d.attr("data-config", JSON.stringify(i)), iWidth = 240, iHeight = 329, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(f).appendTo(d).tResize().css({
			backgroundImage: "url(" + g.pSrc + ")",
			left: 0,
			top: 0,
			width: iWidth,
			height: iHeight
		}).attr("attachID", g.attachID).attr("appID", h).addClass("t-app-jkgb").addClass(b.selectedVal), j = $(b.appChildCls + "[attachID='" + g.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), e(a, h, g.attachID)
	}, a.createAuto = function(a, d, e, f, g) {
		var j, l, m, h = c["jkgb"][1].tDynamic,
			i = c["jkgb"][1].tDynamicConfig,
			k = d.attr("appID");
		g ? (l = $.extend(!0, i, g), m = JSON.parse(d.attr("data-config")), g.attachID && "" != g.attachID || b.setAttachID(l), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(h).appendTo(d).tResize().css({
			backgroundImage: "url(" + l.pSrc + ")",
			backgroundColor: l.bgColor || "none",
			left: e,
			top: f,
			width: l.width,
			height: l.height
		}).attr("attachID", l.attachID).attr("appID", k).addClass(b.selectedVal), j = $(b.appChildCls + "[attachID='" + l.attachID + "']"), g.contentMode && "customContent" == g.contentMode && j.html(g.customContent || "").css({
			background: "none"
		}).tResize(), b.jSelectsedDom = b.jSelectsedDom.addGroup(j), delete l.width, delete l.height, delete l.left, delete l.top, m.childConfig.push(l), d.attr("data-config", JSON.stringify(m))) : (m = JSON.parse(d.attr("data-config")), b.setAttachID(i), m.childConfig.push(i), d.attr("data-config", JSON.stringify(m)), iWidth = 240, iHeight = 329, b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(h).appendTo(d).tResize().css({
			backgroundImage: "url(" + i.pSrc + ")",
			left: e,
			top: f,
			width: iWidth,
			height: iHeight
		}).attr("attachID", i.attachID).attr("appID", k).addClass(b.selectedVal), j = $(b.appChildCls + "[attachID='" + i.attachID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(j))
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
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop()
			}), j = $(b.appCls + "[appID='" + i[2].appID + "']"), j.attr("data-catsConfig", "[]"), j.attr("data-formatName", i[2].formatName), j.attr("data-catsAttachConfig", "{}"), g(f, i[2].appID)
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
						left: 0 + b.junebox.scrollLeft(),
						top: 0 + b.junebox.scrollTop()
					}), o = $(b.appCls + "[appID='" + n[2].appID + "']"), o.attr("data-catsConfig", JSON.stringify(e)), o.attr("data-formatName", n[2].formatName), o.attr("data-catsAttachConfig", "{}"), o.attr("data-shopHref", h), d.tDialogShopCategory2(function(c, d) {
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
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: (j + o) * n - o,
				height: (k + l + p) * q - p
			}).attr("data-config", JSON.stringify(h[2])).attr("appID", h[2].appID).addClass(b.selectedVal), i = $(b.appCls + "[appID='" + h[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(i), f(a, h[2].appID)
		} else d.tDialogBaoBei(function(d, h, i, j) {
			var l, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D;
			if (j.dialog("close"), $(".ui-tooltip").hide(), k = $.extend({}, c[a]), m = JSON.parse(h), n = JSON.parse(i), k[2] = $.extend({}, k[2], m), k[2].readVal = k[2].readVal.replace(/0/g, "1"), o = b.tParseInt(k[2].itemCount), p = [], q = [], o) {
				for (r = 0; o > r; r++) p.push(""), q.push(0);
				k[2].href = p.join(","), k[2].titleAuto = q.join(","), k[2].priceAuto = q.join(","), k[2]._priceAuto = q.join(","), k[2].saleAuto = q.join(",")
			}
			if (s = b.tParseInt(k[2].sWidth), t = b.tParseInt(k[2].sHeight), u = b.tParseInt(k[2].mHeight), v = b.tParseInt(k[2].itemCount), w = b.tParseInt(k[2].itemColumn), x = b.tParseInt(k[2].columnSpace), y = b.tParseInt(k[2].lineSpace), z = Math.ceil(v / w), b.setAppID(k[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), $(k[0]).appendTo(b.june).css({
				left: 0 + b.junebox.scrollLeft(),
				top: 0 + b.junebox.scrollTop(),
				width: (s + x) * w - x,
				height: (t + u + y) * z - y
			}).attr("data-config", JSON.stringify(k[2])).attr("appID", k[2].appID).attr("data-styleID", d).addClass(b.selectedVal), l = $(b.appCls + "[appID='" + k[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(l), !g) for (r = 0; v > r; r++) A = r % w, B = b.tParseInt(r / w), C = (s + x) * A, D = (t + u + y) * B, e.createAuto(a, l, C, D, r, n);
			f(a, k[2].appID)
		})
	}, a
}), define("scripts/childBaoBei.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/reckonAlign"),
		d = b.appConfig;
	return a.createAuto = function(a, e, f, g, h, i) {
		var K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, sb, tb, qb, rb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc, j = d["jib"][1].tDynamic,
			k = d["jib"][1].tDynamicConfig,
			l = e.attr("appID"),
			n = "http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg",
			o = "",
			p = "",
			q = "",
			r = "",
			s = "",
			t = "设置宝贝后，此处将显示宝贝标题",
			u = "",
			v = "99.99",
			w = "99.99",
			x = "9999",
			y = "",
			z = "",
			A = "",
			B = "",
			C = "",
			D = "",
			E = "",
			F = "",
			G = "",
			H = "",
			I = JSON.parse(e.attr("data-config")),
			J = "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=41049717225&w=" + I.erWeiMaSize + "&h=" + I.erWeiMaSize;
		e.attr("data-config", JSON.stringify(I)), $(j).appendTo(e).attr("appID", l), I = b.toClear(I), i = i || {}, K = $.extend({}, {
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
		}, i), L = e.children("[data-attachType='jibbg']:eq(" + h + ")"), M = e.children("[data-attachType='jibpanel']:eq(" + h + ")"), N = e.children("[data-attachType='jibtitle']:eq(" + h + ")"), O = e.children("[data-attachType='jibsubtitle']:eq(" + h + ")"), P = e.children("[data-attachType='jibprefix']:eq(" + h + ")"), Q = e.children("[data-attachType='jibprice']:eq(" + h + ")"), R = e.children("[data-attachType='jibdiscountprefix']:eq(" + h + ")"), S = e.children("[data-attachType='jibdiscountprice']:eq(" + h + ")"), T = e.children("[data-attachType='jibsaleprefix']:eq(" + h + ")"), U = e.children("[data-attachType='jibsale']:eq(" + h + ")"), V = e.children("[data-attachType='jibbtn']:eq(" + h + ")"), W = e.children("[data-attachType='jibbtn1']:eq(" + h + ")"), X = e.children("[data-attachType='jibbtn2']:eq(" + h + ")"), Y = e.children("[data-attachType='jibsubscript']:eq(" + h + ")"), Z = e.children("[data-attachType='jibsubscript1']:eq(" + h + ")"), _ = e.children("[data-attachType='jibsubscript2']:eq(" + h + ")"), ab = e.children("[data-attachType='jibsubscript3']:eq(" + h + ")"), bb = e.children("[data-attachType='jibsubscript4']:eq(" + h + ")"), cb = e.children("[data-attachType='jiberweima']:eq(" + h + ")"), db = e.children("[data-attachType='jibexpandtext']:eq(" + h + ")"), eb = e.children("[data-attachType='jibexpandtext1']:eq(" + h + ")"), fb = e.children("[data-attachType='jibexpandtext2']:eq(" + h + ")"), gb = e.children("[data-attachType='jibexpandtext3']:eq(" + h + ")"), hb = e.children("[data-attachType='jibexpandtext4']:eq(" + h + ")"), ib = e.children("[data-attachType='jibprice']:eq(0)"), jb = e.children("[data-attachType='jibdiscountprice']:eq(0)"), kb = e.children("[data-attachType='jibsale']:eq(0)"), lb = e.children("[data-attachType='jibexpandtext']:not(:hidden):eq(0)"), mb = e.children("[data-attachType='jibexpandtext1']:not(:hidden):eq(0)"), nb = e.children("[data-attachType='jibexpandtext2']:not(:hidden):eq(0)"), ob = e.children("[data-attachType='jibexpandtext3']:not(:hidden):eq(0)"), pb = e.children("[data-attachType='jibexpandtext4']:not(:hidden):eq(0)"), qb = e.children(".jibBorderShadow:eq(" + h + ")"), rb = b.tParseInt(I.borderWidth1), "" == I.shadowLeft1 && (I.shadowLeft1 = 0), "" == I.shadowTop1 && (I.shadowTop1 = 0), "" == I.shadowBlur1 && (I.shadowBlur1 = 0), "" == I.shadowSize1 && (I.shadowSize1 = 0), "hborder1" == I.borderControl1 && (sb = rb + "px solid " + RGBToHex(I.borderColor1)), "shadowShow1" == I.shadowControl1 && (tb = I.shadowLeft1 + "px " + I.shadowTop1 + "px " + I.shadowBlur1 + "px " + I.shadowSize1 + "px " + I.shadowColor1 + " " + I.shadowStyle1), "hborder1" != I.borderControl1 && (rb = 0), b.show() && (qb.css({
			width: I.sWidth,
			height: I.sHeight + I.mHeight,
			top: g - rb,
			left: f - rb,
			border: sb,
			boxShadow: tb
		}), "hborder1" == I.borderControl1 ? qb.css({
			borderRadius: I.borderRadius1 + "px"
		}) : qb.css({
			borderRadius: "0 0 0 0"
		}), ub = I.pSrc.split(","), checkUrl(ub[h]) && (n = ub[h]), n.indexOf("_" + I.pSrcSize + "x" + I.pSrcSize + ".jpg") < 0 && "" != I.pSrcSize && (n = n + "_" + I.pSrcSize + "x" + I.pSrcSize + ".jpg"), vb = "0 0", I.mHeight && "" != I.mHeight || (vb = I.borderRadius1 + "px " + I.borderRadius1 + "px"), L.css({
			backgroundImage: "url(" + n + ")",
			backgroundColor: RGBToHex(I.itemBgColor, "transparent"),
			top: g,
			left: f,
			width: I.sWidth,
			height: I.sHeight
		}), "hborder1" == I.borderControl1 ? L.css({
			borderRadius: I.borderRadius1 + "px " + I.borderRadius1 + "px " + vb
		}) : L.css({
			borderRadius: "0 0 0 0"
		}), 0 == h ? L.tResize({
			tHandles: "e,s,se"
		}).css("z-index", 101) : L.css("z-index", 100), wb = 23 * h, K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, checkUrl(I.bgImage) && M.css({
			backgroundImage: "url(" + I.bgImage + ")"
		})), M.css({
			backgroundColor: RGBToHex(I.bgColor, "transparent"),
			top: g + I.sHeight,
			left: f,
			width: I.sWidth,
			height: I.mHeight,
			borderRadius: "0 0 " + I.borderRadius1 + "px " + I.borderRadius1 + "px"
		}).attr("attachID", k.attachID), "hborder1" == I.borderControl1 ? M.css({
			borderRadius: "0 0 " + I.borderRadius1 + "px " + I.borderRadius1 + "px"
		}) : M.css({
			borderRadius: "0 0 0 0"
		}), 0 == h ? M.tResize({
			tHandles: "e,s,se"
		}).css("z-index", 101) : M.css("z-index", 100), xb = I.subScriptSrc.split(","), yb = !1, checkUrl(xb[h]) && (o = xb[h], yb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, Y.html(b.appMongolia).css({
			top: g + K.subScriptTop,
			left: f + K.subScriptLeft,
			width: K.subScriptWidth,
			height: K.subScriptHeight
		}).attr("attachID", k.attachID), yb ? Y.css({
			backgroundImage: "url(" + o + ")"
		}) : Y.hide(), 0 == h ? Y.tResize().css("z-index", 101) : Y.tResize().css("z-index", 100), "yes" != I.subScriptSwitch && Y.hide(), zb = I.subScript1Src.split(","), Ab = !1, checkUrl(zb[h]) && (p = zb[h], Ab = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, Z.html(b.appMongolia).css({
			top: g + K.subScript1Top,
			left: f + K.subScript1Left,
			width: K.subScript1Width,
			height: K.subScript1Height
		}).attr("attachID", k.attachID), Ab ? Z.css({
			backgroundImage: "url(" + p + ")"
		}) : Z.hide(), 0 == h ? Z.tResize().css("z-index", 101) : Z.tResize().css("z-index", 100), "yes" != I.subScript1Switch && Z.hide(), Bb = I.subScript2Src.split(","), Cb = !1, checkUrl(Bb[h]) && (q = Bb[h], Cb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, _.html(b.appMongolia).css({
			top: g + K.subScript2Top,
			left: f + K.subScript2Left,
			width: K.subScript2Width,
			height: K.subScript2Height
		}).attr("attachID", k.attachID), Cb ? _.css({
			backgroundImage: "url(" + q + ")"
		}) : _.hide(), 0 == h ? _.tResize().css("z-index", 101) : _.tResize().css("z-index", 100), "yes" != I.subScript2Switch && _.hide(), Db = I.subScript3Src.split(","), Eb = !1, checkUrl(Db[h]) && (r = Db[h], Eb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, ab.html(b.appMongolia).css({
			top: g + K.subScript3Top,
			left: f + K.subScript3Left,
			width: K.subScript3Width,
			height: K.subScript3Height
		}).attr("attachID", k.attachID), Eb ? ab.css({
			backgroundImage: "url(" + r + ")"
		}) : ab.hide(), 0 == h ? ab.tResize().css("z-index", 101) : ab.tResize().css("z-index", 100), "yes" != I.subScript3Switch && ab.hide(), Fb = I.subScript4Src.split(","), Gb = !1, checkUrl(Fb[h]) && (s = Fb[h], Gb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, bb.html(b.appMongolia).css({
			top: g + K.subScript4Top,
			left: f + K.subScript4Left,
			width: K.subScript4Width,
			height: K.subScript4Height
		}).attr("attachID", k.attachID), Gb ? bb.css({
			backgroundImage: "url(" + s + ")"
		}) : bb.hide(), 0 == h ? bb.tResize().css("z-index", 101) : bb.tResize().css("z-index", 100), "yes" != I.subScript4Switch && bb.hide(), Hb = I.erWeiMaSrc.split(","), Ib = !1, checkUrl(Hb[h]) && (J = Hb[h], Ib = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, cb.html(b.appMongolia).css({
			top: g + K.erWeiMaTop,
			left: f + K.erWeiMaLeft,
			width: I.erWeiMaSize,
			height: I.erWeiMaSize
		}).attr("attachID", k.attachID), cb.css({
			backgroundImage: "url(" + J + ")"
		}), 0 == h ? cb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : cb.css("z-index", 100), "yes" != I.erWeiMaSwitch && cb.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, Jb = I.subTitleInfo.split(","), "" != Jb[h] && (u = Jb[h]), checkUrl(I.subTitleBgImage) && O.css({
			backgroundImage: "url(" + I.subTitleBgImage + ")"
		}), u && "undefined" != u || (u = ""), O.css({
			backgroundColor: RGBToHex(I.subTitleBgColor, "transparent"),
			top: g + K.subTitleTop,
			left: f + K.subTitleLeft,
			width: I.subTitleWidth,
			height: I.subTitleHeight,
			color: RGBToHex(I.subTitleColor, "transparent"),
			textAlign: I.subTitleAlign,
			fontFamily: I.subTitleFont,
			fontSize: b.tParseInt(I.subTitleSize) + "px",
			letterSpacing: b.tParseInt(I.subTitleSpacing) + "px",
			lineHeight: I.subTitleLineHeight + "px",
			fontWeight: I.subTitleWeight,
			overflow: "hidden"
		}).html(b.appMongolia + '<span class="jcbText">' + u + "</span>").attr("attachID", k.attachID), I.subTitleSpace && "" != I.subTitleSpace && (Kb = b.tParseInt(I.subTitleSpace), "left" == I.subTitleAlign ? (O.css({
			backgroundPosition: "top left"
		}), O.children(".jcbText").css({
			paddingLeft: Kb + "px",
			right: "-" + Kb + "px"
		})) : "right" == I.subTitleAlign && (O.css({
			backgroundPosition: "top right"
		}), O.children(".jcbText").css({
			paddingRight: Kb + "px",
			left: "-" + Kb + "px"
		}))), 0 == h ? O.tResize().css("z-index", 101) : O.css("z-index", 100), "yes" != I.subTitleSwitch && O.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, Lb = (I.titleInfo + "").split(","), "" != Lb[h] && (t = Lb[h]), checkUrl(I.titleBgImage) && N.css({
			backgroundImage: "url(" + I.titleBgImage + ")"
		}), N.css({
			backgroundColor: RGBToHex(I.titleBgColor, "transparent"),
			top: g + K.titleTop,
			left: f + K.titleLeft,
			width: I.titleWidth,
			height: I.titleHeight,
			color: RGBToHex(I.titleColor, "transparent"),
			textAlign: I.titleAlign,
			fontFamily: I.titleFont,
			fontSize: b.tParseInt(I.titleSize) + "px",
			letterSpacing: b.tParseInt(I.titleSpacing) + "px",
			lineHeight: I.titleLineHeight + "px",
			fontWeight: I.titleWeight,
			overflow: "hidden"
		}).html(b.appMongolia + '<span class="jcbText">' + t + "</span>").attr("attachID", k.attachID), I.titleSpace && "" != I.titleSpace && (Mb = b.tParseInt(I.titleSpace), "left" == I.titleAlign ? (N.css({
			backgroundPosition: "top left"
		}), N.children(".jcbText").css({
			paddingLeft: Mb + "px",
			right: "-" + Mb + "px"
		})) : "right" == I.titleAlign && (N.css({
			backgroundPosition: "top right"
		}), N.children(".jcbText").css({
			paddingRight: Mb + "px",
			left: "-" + Mb + "px"
		}))), 0 == h ? N.tResize().css("z-index", 101) : N.css("z-index", 100), "yes" != I.titleSwitch && N.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, P.css({
			top: g + K.prefixTop,
			left: f + K.prefixLeft,
			color: RGBToHex(I.prefixColor, "transparent"),
			fontFamily: I.prefixFont,
			fontSize: b.tParseInt(I.prefixSize) + "px",
			letterSpacing: b.tParseInt(I.prefixSpacing) + "px",
			fontWeight: I.prefixWeight,
			textDecoration: I.prefixDecoration,
			whiteSpace: "nowrap"
		}).html(b.appMongolia + I.prefixInfo).attr("attachID", k.attachID), 0 == h ? P.tResize({
			tSwitch: !1
		}).css("z-index", 101) : P.css("z-index", 100), "yes" != I.prefixSwitch && P.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, I.priceInfo = I.priceInfo + "", Nb = I.priceInfo.split(","), "" != Nb[h] && (v = Nb[h]), "auto" == I.priceAlign && (I.priceAlign = c.get(I.prefixSwitch, I.sWidth, K.priceLeft, K.prefixLeft)), Ob = "", Pb = "", "right" == I.priceAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == I.priceAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == I.priceAlign ? (Ob = "", Pb = "") : "qcenter" == I.priceAlign && (Ob = '<span style="display:block;position:relative;float:left;left:50%;clear:both;"><span style="display:block;position:relative;left:-50%;white-space:nowrap;">', Pb = "</span></span>"), Qb = "", v && "" != v && (Qb = tReplace(v, /(\d*(\.)?(\d)*)*/g, function(a) {
			return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(I.priceFixed)) : a
		})), Q.css({
			top: g + K.priceTop,
			left: f + K.priceLeft,
			color: RGBToHex(I.priceColor, "transparent"),
			fontFamily: I.priceFont,
			fontSize: b.tParseInt(I.priceSize) + "px",
			letterSpacing: b.tParseInt(I.priceSpacing) + "px",
			fontWeight: I.priceWeight,
			textDecoration: I.priceDecoration,
			whiteSpace: "nowrap",
			overflow: "visible"
		}).html(b.appMongolia + Ob + Qb + Pb).attr("attachID", k.attachID), 0 == h ? Q.tResize({
			tSwitch: !1
		}).css("z-index", 101) : Q.width(ib.width()).css("z-index", 100), "yes" != I.priceSwitch && Q.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, R.css({
			top: g + K._prefixTop,
			left: f + K._prefixLeft,
			color: RGBToHex(I._prefixColor, "transparent"),
			fontFamily: I._prefixFont,
			fontSize: b.tParseInt(I._prefixSize) + "px",
			letterSpacing: b.tParseInt(I._prefixSpacing) + "px",
			fontWeight: I._prefixWeight,
			whiteSpace: "nowrap"
		}).html(b.appMongolia + I._prefixInfo).attr("attachID", k.attachID), 0 == h ? R.tResize({
			tSwitch: !1
		}).css("z-index", 101) : R.css("z-index", 100), "yes" != I._prefixSwitch && R.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, I._priceInfo = I._priceInfo + "", Rb = I._priceInfo.split(","), "" != Rb[h] && (w = Rb[h]), "auto" == I._priceAlign && (I._priceAlign = c.get(I._prefixSwitch, I.sWidth, K._priceLeft, K._prefixLeft)), Ob = "", Pb = "", "right" == I._priceAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == I._priceAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == I._priceAlign ? (Ob = "", Pb = "") : "qcenter" == I._priceAlign && (Ob = '<span style="display:block;position:relative;float:left;left:50%;clear:both;"><span style="display:block;position:relative;left:-50%;white-space:nowrap;">', Pb = "</span></span>"), Qb = "", w && "" != w && (Qb = tReplace(w, /(\d*(\.)?(\d)*)*/g, function(a) {
			return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(I._priceFixed)) : a
		})), S.css({
			top: g + K._priceTop,
			left: f + K._priceLeft,
			color: RGBToHex(I._priceColor, "transparent"),
			fontFamily: I._priceFont,
			fontSize: b.tParseInt(I._priceSize) + "px",
			letterSpacing: b.tParseInt(I._priceSpacing) + "px",
			fontWeight: I._priceWeight,
			whiteSpace: "nowrap",
			overflow: "visible"
		}).html(b.appMongolia + Ob + Qb + Pb).attr("attachID", k.attachID), 0 == h ? S.tResize({
			tSwitch: !1
		}).css("z-index", 101) : S.width(jb.width()).css("z-index", 100), "yes" != I._priceSwitch && S.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, T.css({
			top: g + K.salePrefixTop,
			left: f + K.salePrefixLeft,
			color: RGBToHex(I.salePrefixColor, "transparent"),
			fontFamily: I.salePrefixFont,
			fontSize: b.tParseInt(I.salePrefixSize) + "px",
			letterSpacing: b.tParseInt(I.salePrefixSpacing) + "px",
			fontWeight: I.salePrefixWeight,
			whiteSpace: "nowrap"
		}).html(b.appMongolia + I.salePrefixInfo).attr("attachID", k.attachID), 0 == h ? T.tResize({
			tSwitch: !1
		}).css("z-index", 101) : T.css("z-index", 100), "yes" != I.salePrefixSwitch && T.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, I.saleInfo = I.saleInfo + "", Sb = I.saleInfo.split(","), "" != Sb[h] && (x = Sb[h]), "auto" == I.saleAlign && (I.saleAlign = c.get(I.salePrefixSwitch, I.sWidth, K.saleLeft, K.salePrefixLeft)), Ob = "", Pb = "", "right" == I.saleAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == I.saleAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == I.saleAlign ? (Ob = "", Pb = "") : "qcenter" == I.saleAlign && (Ob = '<span style="display:block;position:relative;float:left;left:50%;clear:both;"><span style="display:block;position:relative;left:-50%;white-space:nowrap;">', Pb = "</span></span>"), U.css({
			top: g + K.saleTop,
			left: f + K.saleLeft,
			color: RGBToHex(I.saleColor, "transparent"),
			fontFamily: I.saleFont,
			fontSize: b.tParseInt(I.saleSize) + "px",
			letterSpacing: b.tParseInt(I.saleSpacing) + "px",
			fontWeight: I.saleWeight,
			whiteSpace: "nowrap",
			overflow: "visible"
		}).html(b.appMongolia + Ob + x + Pb).attr("attachID", k.attachID), 0 == h ? U.tResize({
			tSwitch: !1
		}).css("z-index", 101) : U.width(kb.width()).css("z-index", 100), "yes" != I.saleSwitch && U.hide(), Tb = (I.expandText + "").split(","), Ub = I.expandTextSet.split("|;|"), yb = !1, Vb = !1, "" != Tb[h] && (y = Tb[h], yb = !0), "" == Ub[h] && (Ub[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != Ub[h] && (z = JSON.parse(Ub[h] || "{}"), Vb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, "auto" == z.characterAlign && (z.characterAlign = c.get("no", I.sWidth, K.expandTextLeft)), Ob = "", Pb = "", z.characterAlign && "right" == z.characterAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == z.characterAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == z.characterAlign && (Ob = "", Pb = ""), db.css({
			top: g + K.expandTextTop,
			left: f + K.expandTextLeft,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), yb ? db.html(b.appMongolia + Ob + y + Pb).show() : db.hide(), Vb && (Wb = "none", Xb = "", "on1" == z.characterDash ? Wb = "line-through" : "on2" == z.characterDash && (Wb = "underline"), Xb = "" != z.characterBorderWidth && "0" != z.characterBorderWidth ? z.characterBorderWidth + "px " + z.characterBorderStyle + " " + RGBToHex(z.characterBorderColor) : "none", db.css({
			color: RGBToHex(z.characterColor, "transparent"),
			backgroundColor: RGBToHex(z.characterBgColor, "transparent"),
			fontFamily: z.characterFont,
			fontSize: b.tParseInt(z.characterSize) + "px",
			letterSpacing: b.tParseInt(z.characterSpacing) + "px",
			fontWeight: z.characterWeight,
			textDecoration: Wb,
			borderRadius: b.tParseInt(z.characterRadius)
		}), "" != Ob ? db.children("span").css({
			backgroundColor: RGBToHex(z.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(z.characterSpace),
			paddingRight: b.tParseInt(z.characterSpace),
			paddingTop: b.tParseInt(z.characterSpace1),
			paddingBottom: b.tParseInt(z.characterSpace1),
			borderRadius: b.tParseInt(z.characterRadius),
			border: Xb
		}) : db.css({
			paddingLeft: b.tParseInt(z.characterSpace),
			paddingRight: b.tParseInt(z.characterSpace),
			paddingTop: b.tParseInt(z.characterSpace1),
			paddingBottom: b.tParseInt(z.characterSpace1),
			border: Xb
		})), 0 == h ? db.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Ob ? db.width(lb.width()) : db.width("auto"), db.css("z-index", 100)), "yes" != I.expandTextSwitch && db.hide(), Yb = (I.expandText1 + "").split(","), Zb = I.expandText1Set.split("|;|"), yb = !1, Vb = !1, "" != Yb[h] && (A = Yb[h], yb = !0), "" == Zb[h] && (Zb[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != Zb[h] && (B = JSON.parse(Zb[h] || "{}"), Vb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, "auto" == B.characterAlign && (B.characterAlign = c.get("no", I.sWidth, K.expandText1Left)), Ob = "", Pb = "", Xb = "", B.characterAlign && "right" == B.characterAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == B.characterAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == B.characterAlign && (Ob = "", Pb = ""), eb.css({
			top: g + K.expandText1Top,
			left: f + K.expandText1Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), yb ? eb.html(b.appMongolia + Ob + A + Pb).show() : eb.hide(), Vb && (Wb = "none", "on1" == B.characterDash ? Wb = "line-through" : "on2" == B.characterDash && (Wb = "underline"), Xb = "" != B.characterBorderWidth && "0" != B.characterBorderWidth ? B.characterBorderWidth + "px " + B.characterBorderStyle + " " + RGBToHex(B.characterBorderColor) : "none", eb.css({
			color: RGBToHex(B.characterColor, "transparent"),
			backgroundColor: RGBToHex(B.characterBgColor, "transparent"),
			fontFamily: B.characterFont,
			fontSize: b.tParseInt(B.characterSize) + "px",
			letterSpacing: b.tParseInt(B.characterSpacing) + "px",
			fontWeight: B.characterWeight,
			textDecoration: Wb,
			borderRadius: b.tParseInt(B.characterRadius)
		}), eb.children("span").length > 0 ? eb.children("span").css({
			backgroundColor: RGBToHex(B.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(B.characterSpace),
			paddingRight: b.tParseInt(B.characterSpace),
			paddingTop: b.tParseInt(B.characterSpace1),
			paddingBottom: b.tParseInt(B.characterSpace1),
			borderRadius: b.tParseInt(B.characterRadius),
			border: Xb
		}) : eb.css({
			paddingLeft: b.tParseInt(B.characterSpace),
			paddingRight: b.tParseInt(B.characterSpace),
			paddingTop: b.tParseInt(B.characterSpace1),
			paddingBottom: b.tParseInt(B.characterSpace1),
			border: Xb
		})), 0 == h ? eb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Ob ? eb.width(mb.width()) : eb.width("auto"), eb.css("z-index", 100)), "yes" != I.expandText1Switch && eb.hide(), $b = (I.expandText2 + "").split(","), _b = I.expandText2Set.split("|;|"), yb = !1, Vb = !1, "" != $b[h] && (C = $b[h], yb = !0), "" == _b[h] && (_b[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != _b[h] && (D = JSON.parse(_b[h] || "{}"), Vb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, "auto" == D.characterAlign && (D.characterAlign = c.get("no", I.sWidth, K.expandText2Left)), Ob = "", Pb = "", Xb = "", D.characterAlign && "right" == D.characterAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == D.characterAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == D.characterAlign && (Ob = "", Pb = ""), fb.css({
			top: g + K.expandText2Top,
			left: f + K.expandText2Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), yb ? fb.html(b.appMongolia + Ob + C + Pb).show() : fb.hide(), Vb && (Wb = "none", "on1" == D.characterDash ? Wb = "line-through" : "on2" == D.characterDash && (Wb = "underline"), Xb = "" != D.characterBorderWidth && "0" != D.characterBorderWidth ? D.characterBorderWidth + "px " + D.characterBorderStyle + " " + RGBToHex(D.characterBorderColor) : "none", fb.css({
			color: RGBToHex(D.characterColor, "transparent"),
			backgroundColor: RGBToHex(D.characterBgColor, "transparent"),
			fontFamily: D.characterFont,
			fontSize: b.tParseInt(D.characterSize) + "px",
			letterSpacing: b.tParseInt(D.characterSpacing) + "px",
			fontWeight: D.characterWeight,
			textDecoration: Wb,
			borderRadius: b.tParseInt(D.characterRadius)
		}), fb.children("span").length > 0 ? fb.children("span").css({
			backgroundColor: RGBToHex(D.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(D.characterSpace),
			paddingRight: b.tParseInt(D.characterSpace),
			paddingTop: b.tParseInt(D.characterSpace1),
			paddingBottom: b.tParseInt(D.characterSpace1),
			borderRadius: b.tParseInt(D.characterRadius),
			border: Xb
		}) : fb.css({
			paddingLeft: b.tParseInt(D.characterSpace),
			paddingRight: b.tParseInt(D.characterSpace),
			paddingTop: b.tParseInt(D.characterSpace1),
			paddingBottom: b.tParseInt(D.characterSpace1),
			border: Xb
		})), 0 == h ? fb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Ob ? fb.width(nb.width()) : fb.width("auto"), fb.css("z-index", 100)), "yes" != I.expandText2Switch && fb.hide(), ac = (I.expandText3 + "").split(","), bc = I.expandText3Set.split("|;|"), yb = !1, Vb = !1, "" != ac[h] && (E = ac[h], yb = !0), "" == bc[h] && (bc[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != bc[h] && (F = JSON.parse(bc[h] || "{}"), Vb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, "auto" == F.characterAlign && (F.characterAlign = c.get("no", I.sWidth, K.expandText3Left)), Ob = "", Pb = "", Xb = "", F.characterAlign && "right" == F.characterAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == F.characterAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == F.characterAlign && (Ob = "", Pb = ""), gb.css({
			top: g + K.expandText3Top,
			left: f + K.expandText3Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), yb ? gb.html(b.appMongolia + Ob + E + Pb).show() : gb.hide(), Vb && (Wb = "none", "on1" == F.characterDash ? Wb = "line-through" : "on2" == F.characterDash && (Wb = "underline"), Xb = "" != F.characterBorderWidth && "0" != F.characterBorderWidth ? F.characterBorderWidth + "px " + F.characterBorderStyle + " " + RGBToHex(F.characterBorderColor) : "none", gb.css({
			color: RGBToHex(F.characterColor, "transparent"),
			backgroundColor: RGBToHex(F.characterBgColor, "transparent"),
			fontFamily: F.characterFont,
			fontSize: b.tParseInt(F.characterSize) + "px",
			letterSpacing: b.tParseInt(F.characterSpacing) + "px",
			fontWeight: F.characterWeight,
			textDecoration: Wb,
			borderRadius: b.tParseInt(F.characterRadius)
		}), gb.children("span").length > 0 ? gb.children("span").css({
			backgroundColor: RGBToHex(F.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(F.characterSpace),
			paddingRight: b.tParseInt(F.characterSpace),
			paddingTop: b.tParseInt(F.characterSpace1),
			paddingBottom: b.tParseInt(F.characterSpace1),
			borderRadius: b.tParseInt(F.characterRadius),
			border: Xb
		}) : gb.css({
			paddingLeft: b.tParseInt(F.characterSpace),
			paddingRight: b.tParseInt(F.characterSpace),
			paddingTop: b.tParseInt(F.characterSpace1),
			paddingBottom: b.tParseInt(F.characterSpace1),
			border: Xb
		})), 0 == h ? gb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Ob ? gb.width(ob.width()) : gb.width("auto"), gb.css("z-index", 100)), "yes" != I.expandText3Switch && gb.hide(), cc = (I.expandText4 + "").split(","), dc = I.expandText4Set.split("|;|"), yb = !1, Vb = !1, "" != cc[h] && (G = cc[h], yb = !0), "" == dc[h] && (dc[h] = JSON.stringify(b.appConfig["jib"][1].tOtherSetConfig)), "" != dc[h] && (H = JSON.parse(dc[h] || "{}"), Vb = !0), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, "auto" == H.characterAlign && (H.characterAlign = c.get("no", I.sWidth, K.expandText4Left)), Ob = "", Pb = "", Xb = "", H.characterAlign && "right" == H.characterAlign && (Ob = '<span style="float:right">', Pb = "</span>"), "qright" == H.characterAlign ? (Ob = '<span style="float:right">', Pb = "</span>") : "qleft" == H.characterAlign && (Ob = "", Pb = ""), hb.css({
			top: g + K.expandText4Top,
			left: f + K.expandText4Left,
			overflow: "visible",
			whiteSpace: "nowrap"
		}).attr("attachID", k.attachID), yb ? hb.html(b.appMongolia + Ob + G + Pb).show() : hb.hide(), Vb && (Wb = "none", "on1" == H.characterDash ? Wb = "line-through" : "on2" == H.characterDash && (Wb = "underline"), Xb = "" != H.characterBorderWidth && "0" != H.characterBorderWidth ? H.characterBorderWidth + "px " + H.characterBorderStyle + " " + RGBToHex(H.characterBorderColor) : "none", hb.css({
			color: RGBToHex(H.characterColor, "transparent"),
			backgroundColor: RGBToHex(H.characterBgColor, "transparent"),
			fontFamily: H.characterFont,
			fontSize: b.tParseInt(H.characterSize) + "px",
			letterSpacing: b.tParseInt(H.characterSpacing) + "px",
			fontWeight: H.characterWeight,
			textDecoration: Wb,
			borderRadius: b.tParseInt(H.characterRadius)
		}), hb.children("span").length > 0 ? hb.children("span").css({
			backgroundColor: RGBToHex(H.characterBgColor, "transparent"),
			paddingLeft: b.tParseInt(H.characterSpace),
			paddingRight: b.tParseInt(H.characterSpace),
			paddingTop: b.tParseInt(H.characterSpace1),
			paddingBottom: b.tParseInt(H.characterSpace1),
			borderRadius: b.tParseInt(H.characterRadius),
			border: Xb
		}) : hb.css({
			paddingLeft: b.tParseInt(H.characterSpace),
			paddingRight: b.tParseInt(H.characterSpace),
			paddingTop: b.tParseInt(H.characterSpace1),
			paddingBottom: b.tParseInt(H.characterSpace1),
			border: Xb
		})), 0 == h ? hb.tResize({
			tSwitch: !1
		}).css("z-index", 101) : ("" != Ob ? hb.width(pb.width()) : hb.width("auto"), hb.css("z-index", 100)), "yes" != I.expandText4Switch && hb.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, V.html(b.appMongolia).css({
			backgroundImage: "url(" + I.btnSrc + ")",
			top: g + K.btnTop,
			left: f + K.btnLeft,
			width: K.btnWidth || 75,
			height: K.btnHeight || 25
		}).attr("attachID", k.attachID), 0 == h ? V.tResize({
			tSwitch: !1
		}).css("z-index", 101) : V.css("z-index", 100), "yes" != I.btnSwitch && V.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, W.html(b.appMongolia).css({
			backgroundImage: "url(" + I.btn1Src + ")",
			top: g + K.btn1Top,
			left: f + K.btn1Left,
			width: K.btn1Width || 75,
			height: K.btn1Height || 25
		}).attr("attachID", k.attachID), 0 == h ? W.tResize({
			tSwitch: !1
		}).css("z-index", 101) : W.css("z-index", 100), "yes" != I.btn1Switch && W.hide(), K.attachIDArray && K.attachIDArray[wb] ? k.attachID = K.attachIDArray[wb] : b.setAttachID(k), wb++, X.html(b.appMongolia).css({
			backgroundImage: "url(" + I.btn2Src + ")",
			top: g + K.btn2Top,
			left: f + K.btn2Left,
			width: K.btn2Width || 75,
			height: K.btn2Height || 25
		}).attr("attachID", k.attachID), 0 == h ? X.tResize({
			tSwitch: !1
		}).css("z-index", 101) : X.css("z-index", 100), "yes" != I.btn2Switch && X.hide()
	}, a
}), define("scripts/drawShouFengQin.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d, e) {
		var g, j, f = c[a],
			h = "";
		b.setAppID(f[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), e || (c[a][1].tDynamic, j = $.extend(!0, {}, c[a][1].tDynamicConfig), f[2].nestConfig = [], j.pSrc = "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2xTYXbXXXXXcRXXXXXXXXXXXX-39767794.jpg", j.pSrc1 = "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2S.zbbXXXXXbxXXXXXXXXXXXX-39767794.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2Os5_bXXXXXXMXpXXXXXXXXXX-39767794.jpg", j.pSrc1 = "http://img01.taobaocdn.com/imgextra/i1/39767794/TB21kvbbXXXXXb3XXXXXXXXXXXX-39767794.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "http://img01.taobaocdn.com/imgextra/i1/39767794/TB264TbbXXXXXb2XXXXXXXXXXXX-39767794.jpg", j.pSrc1 = "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2PB19bXXXXXXPXpXXXXXXXXXX-39767794.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2s2K.bXXXXXXvXpXXXXXXXXXX-39767794.jpg", j.pSrc1 = "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2BbnibXXXXXXGXXXXXXXXXXXX-39767794.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), j.pSrc = "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2SBS.bXXXXXXcXpXXXXXXXXXX-39767794.jpg", j.pSrc1 = "http://img02.taobaocdn.com/imgextra/i2/39767794/TB24DG.bXXXXXXlXpXXXXXXXXXX-39767794.jpg", f[2].nestConfig.push($.extend(!0, {}, j)), h = f[1].tContent + f[1].tDynamic1 + f[1].tDynamic1 + f[1].tDynamic1 + f[1].tDynamic1 + f[1].tDynamic1), $(f[0]).addClass("t-jadb-right").html(h).appendTo(b.june).css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 1001,
			height: 421
		}).attr("data-config", JSON.stringify(f[2])).attr("appID", f[2].appID).addClass(b.selectedVal), g = $(b.appCls + "[appID='" + f[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(g), e || (g.children(".t-jadb-title").each(function() {
			b.setAttachID(f), $(this).width(102).height(421).tResize({
				tHandles: "e, se, s"
			}).attr("attachID", f.attachID)
		}), g.children(".t-jadb-panel").each(function() {
			b.setAttachID(f), $(this).width(491).height(421).tResize({
				tHandles: "e, se, s"
			}).attr("attachID", f.attachID)
		}), b.appConfig["jadb"][1].tSubmit(f[2], g, !0)), d(a, f[2].appID)
	}, a
}), define("scripts/drawPingLun.js", function(a) {
	var b = require("scripts/D"),
		c = b.appConfig;
	return require("scripts/tAjax"), a.create = function(a, d) {
		var f, g, e = c[a];
		b.setAppID(e[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), g = '<div class="sns-widget sns-comment sns-widget-ui" data-comment="{&quot;param&quot;:{&quot;type_id&quot;:&quot;1100035&quot;,&quot;rec_user_id&quot;:&quot;-1&quot;,&quot;moreurl&quot;:&quot;http://item.taobao.com/item.htm?id=15705806426&quot;,&quot;target_key&quot;:&quot;huodong_35614370&quot;,&quot;title&quot;:&quot;空中红秀阁&quot;,&quot;page_size&quot;:3,&quot;view&quot;:&quot;default_list&quot;},&quot;paramList&quot;:{&quot;view&quot;:&quot;list_trunPage&quot;}}"><div class="comment-widget"><div class="comment-edit">        <div class="comment-add"><div class="textarea-b"><textarea class="f-txt" resize="none" style="" placeholder="我也插句话..."></textarea>        </div><div style="display: none;" class="checkcode sns-nf">        <span>验证码：</span>        <input type="text" style="width: 5em;" tabindex="3" class="f-checkcode" maxlength="4" size="4" name="TPL_checkcode">        <img height="35" width="85" style="vertical-align: middle;">        <span style="margin: 0pt 10px 0pt 0pt;">(不区分大小写)</span>        <a class="newCheckCode" href="#">换一张</a>        </div>        <div class="act">        <span class="skin-blue"><em class="J_LetterCount">0/140</em><span class="btn"><a href="#" class="J_PostComment">评论</a></span></span>        <a href="#" class="face">表情</a>            <label>    <input type="checkbox" class="J_SycMB"> 同时转发到我的淘宝    </label>            </div>        </div></div><ul class="comment-list"></ul></div></div>', $(e[0]).html(g + b.appMongolia).appendTo(b.june).tResize().css({
			left: 0 + b.junebox.scrollLeft(),
			top: 0 + b.junebox.scrollTop(),
			width: 790,
			height: 200
		}).attr("data-config", JSON.stringify(e[2])).attr("appID", e[2].appID).addClass(b.selectedVal), f = $(b.appCls + "[appID='" + e[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), d(a, e[2].appID)
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
				for (d.next("input[type='hidden']").val(m.join(",")), $("#itemCountShow").parent().is(":hidden") && $("#itemCountShow").parent().show(), $("input[name='itemCount']").val(m.length), $("#itemCountShow").html(m.length), ib = $.extend(!0, [], m), jb = !1, p = 0; p < h.length; p++)"1" != h[p] ? ib[p] = "" : jb = !0;
				f.ajaxJson("gii.php", {
					item: ib,
					ewmSize: $("#erWeiMaSize").val(),
					random: 1e4 * Math.random()
				}, function(a) {
					if ("yes" == a[0]) if (jb) f.ajaxJson("giiforp.php", {
						item: m,
						random: 1e4 * Math.random()
					}, function(c) {
						if ("yes" == a[0]) {
							$("#itemPicTemp").html(""), $("#itemPicTemp1").html("");
							for (var d = 1; d < a.length; d++) a[d][0] && "" != a[d][0] && (r[d - 1] = a[d][0]), a[d][1] && "" != a[d][1] && (t[d - 1] = a[d][1]), a[d][2] && "" != a[d][2] && (v[d - 1] = a[d][2].replace(/,/g, "，")), a[d][3] && "" != a[d][3] && (x[d - 1] = a[d][3]), a[d][4] && "" != a[d][4] && (z[d - 1] = a[d][4]), a[d][5] && "" != a[d][5] && (B[d - 1] = a[d][5]), a[d][6] && "" != a[d][6] && (D[d - 1] = a[d][6]), "1" != g.pSrcPos[d - 1] && c[d] && c[d][b.tParseInt(g.pSrcPos[d - 1]) - 1] && (r[d - 1] = c[d][b.tParseInt(g.pSrcPos[d - 1]) - 1]), "2" != g.oSrcPos[d] && c[d] && c[d][b.tParseInt(g.oSrcPos[d - 1]) - 1] && (t[d - 1] = c[d][b.tParseInt(g.oSrcPos[d - 1]) - 1]), h[d - 1] = 0;
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
	}, a.expandtextset = function(a) {
		var c = (require("scripts/tAjax"), $("#tItemForm").formToObject()),
			d = a.next("input[type='hidden']"),
			e = d.attr("name"),
			f = $.extend(!0, [], c.inputVal);
		itemTextSet = $.extend(!0, [], c.itemTextSet), d.val(f.join(",")), $("textarea[name='" + e + "Set']").html(itemTextSet.join("|;|"))
	}, a
});