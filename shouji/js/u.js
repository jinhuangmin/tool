define("scripts/quickSet.js", function(a) {
	var f, g, b = require("scripts/D"),
		c = require("scripts/qsHtml"),
		d = "jQuickSet",
		e = "jQuickSetContent",
		h = '<div id="jQuickSet"><div class="qs-title" style="">文字快捷设置面板</div><div class="qs-close qs-isopen" style="">></div><div id="jQuickSetContent"><div class="nonehtml">选择合适的应用后将可以进行快捷设置！</div></div></div>';
	return $(h).appendTo(b.b), f = $("#" + d).on("mousedown.dragEvent", ".qs-title", function(b) {
		a.baseDrag.call(this, b)
	}).on("click.qsset", ".qs-close", function(b) {
		a.closeClick.call(this, b)
	}).offset({
		left: $("#rightpannel").offset().left - 260,
		top: 110
	}), g = $("#" + e).append(c["isotype"].html).on("change.qsset", "input", function(b) {
		a.inputChange.call(this, b)
	}).on("keyup.qsset", "input", function(b) {
		a.inputChange.call(this, b)
	}).on("change.qsset", "select", function(b) {
		a.inputChange.call(this, b)
	}).tooltip({
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
	}), c["isotype"].htmlJs(g), g.children(".nonehtml").hide(), a.baseDrag = function(a) {
		var c = !0,
			d = a.pageX,
			e = a.pageY,
			g = b.tParseInt(f.css("left")) - d,
			h = b.tParseInt(f.css("top")) - e;
		b.d.on("mousemove.dragEvent", function(a) {
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
	}, a.closeClick = function() {
		{
			$(this)
		}
		f.hide()
	}, a.inputChange = function() {
		var i, j, k, d = $(this),
			e = d.attr("name"),
			g = d.val() || "";
		return b.tParseInt(f.attr("data-openLevel") || "0"), "checkbox" == d.attr("type") && (i = d.prev(), d.prop("checked") ? i.addClass("qs-checked") : (g = "", i.removeClass("qs-checked"))), "radio" == d.attr("type") && (i = d.prev(), d.parent().children("[data-name='" + e + "']").removeClass("qs-checked"), i.addClass("qs-checked")), "qs_characterSize" != e || (j = d.children("option:selected").text(), "自定义" == j.substr(0, 3) ? $("#qs_characterSize_zdy").show().trigger("focus") : $("#qs_characterSize_zdy").hide(), "自定义" != j) ? "qs_characterSize_zdy" == e ? (k = "自定义-" + g + "点", "" == g && (k = "自定义"), $("#qs_characterSize").children("option:eq(0)").text(k).attr("value", g), $("#qs_characterSize").trigger("change"), void 0) : (e && a.setChange(e, g), void 0) : void 0
	}, a.setChange = function(a, d) {
		var e = f.data("_qsDom");
		$(), e && e.length > 0 && e.each(function() {
			var i, k, l, m, p, q, r, s, f = $(this),
				g = f.attr("appID"),
				h = f.attr("data-dblType"),
				j = {},
				n = ["qs_characterWeight", "qs_characterStyle", "qs_characterFont", "qs_characterColor", "qs_characterSize", "qs_characterBgColor"],
				o = ["qs_characterWeight", "qs_characterStyle", "qs_characterFont", "qs_characterColor", "qs_characterSize", "qs_characterBgColor", "qs_characterWidth", "qs_characterHeight"];
			if (levelThreeAllowName = ["qs_characterWeight", "qs_characterStyle", "qs_characterFont", "qs_characterColor", "qs_characterSize", "qs_characterBgColor", "qs_characterWidth", "qs_characterHeight", "qs_characterLineThrough", "qs_characterLineUnder"], !(("jcdb" == h || "jwb" == h || "jwwb" == h || "jzzb" == h || "jsb" == h) && (m = 1, $.inArray(a, n) < 0) || ("jab" == h || "jscb" == h) && (m = 2, $.inArray(a, o) < 0) || "jtsb" == h && (m = 3, $.inArray(a, levelThreeAllowName) < 0))) if ("jcb" != h) if (f.attr("attachID") && "" != f.attr("attachID")) if (i = $(b.appCls + "[appID='" + g + "']"), k = JSON.parse(i.attr("data-config") || "{}"), "jfsb" == h || "jwfb" == h) p = i.children("[data-attachtype='" + h + "SmallImg']").index(e), k.thumbSet && k.thumbSet.length > 0 && (q = k.thumbSet[p], j = JSON.parse(q || "{}"), l = c["isotype"].setValue(a, d, f, j), k.thumbSet[p] = JSON.stringify(l), i.attr("data-config", JSON.stringify(k)));
			else {
				if (k.childConfig && k.childConfig.length > 0) for (r = k.childConfig, s = 0; s < r.length; s++) r[s].attachID == f.attr("attachID") && (m ? (1 == m || 2 == m) && (j = r[s] || {}, l = c["isotype"].setValue(a, d, f, j), r[s] = l, i.attr("data-config", JSON.stringify(k))) : r[s].qssetConfig && (j = JSON.parse(r[s].qssetConfig || "{}"), l = c["isotype"].setValue(a, d, f, j), r[s].qssetConfig = JSON.stringify(l), i.attr("data-config", JSON.stringify(k))));
				"jzzb" == h && "jzzbCountText" == f.attr("data-attachType") && (j = JSON.parse(i.attr("data-config") || "{}"), j = c["isotype"].setValue(a, d, f, j), f.height(b.tParseInt(j.characterSize) + 10).css("line-height", b.tParseInt(j.characterSize) + 10 + "px"), i.attr("data-config", JSON.stringify(j)))
			} else m ? "jsb" != h ? (j = JSON.parse(f.attr("data-config") || "{}"), j = c["isotype"].setValue(a, d, f, j), "jtsb" == h ? b.appConfig["jtsb"][1].tSubmit(j, f) : f.attr("data-config", JSON.stringify(j)), ("jwb" == h || "jwwb" == h) && f.children(b.appOtherCls).height(f.children(".t-wang-text").height())) : (j = JSON.parse(f.attr("data-config") || "{}"), l = c["isotype"].setValue(a, d, f, j.childConfig[0]), j.childConfig[0] = l, f.attr("data-config", JSON.stringify(j))) : (k = JSON.parse(f.attr("data-config") || "{}"), k.qssetConfig && (j = JSON.parse(k.qssetConfig || "{}"), l = c["isotype"].setValue(a, d, f, j), k.qssetConfig = JSON.stringify(l), f.attr("data-config", JSON.stringify(k))));
			else j = JSON.parse(f.attr("data-config") || "{}"), j = c["isotype"].setValue(a, d, f, j), f.attr("data-config", JSON.stringify(j))
		})
	}, a.getValue = function(a, d, e) {
		var k, f, h, i, j, l, m, n, o;
		if (a && a.length > 0) {
			if (f = a, h = a.attr("appID"), i = a.attr("data-dblType"), j = {}, "jcb" != i) if (a.attr("attachID") && "" != a.attr("attachID")) if (f = $(b.appCls + "[appID='" + h + "']"), k = JSON.parse(f.attr("data-config") || "{}"), "jfsb" == i || "jwfb" == i) l = f.children("[data-attachtype='" + i + "SmallImg']").index(a), k.thumbSet && k.thumbSet.length > 0 && (m = k.thumbSet[l], j = JSON.parse(m || "{}"));
			else {
				if (k.childConfig && k.childConfig.length > 0) for (n = k.childConfig, o = 0; o < n.length; o++) n[o].attachID == a.attr("attachID") && (e ? (1 == e || 2 == e) && (j = n[o] || {}) : n[o].qssetConfig && (j = JSON.parse(n[o].qssetConfig || "{}")));
				"jzzb" == i && "jzzbCountText" == a.attr("data-attachType") && (j = JSON.parse(f.attr("data-config") || "{}"))
			} else e ? (j = JSON.parse(f.attr("data-config") || "{}"), "jsb" == i && (j = j.childConfig[0])) : (k = JSON.parse(f.attr("data-config") || "{}"), k.qssetConfig && (j = JSON.parse(k.qssetConfig || "{}")));
			else j = JSON.parse(f.attr("data-config") || "{}");
			if (0 == f.length) return !1;
			"" != d && c[d].getValue(g, a, j)
		}
	}, a.openChange = function(c, d, e) {
		f.data("_qsDom", b.jSelectsedDom);
		var h = c.attr("appID") || "empty",
			i = c.attr("attachID") || "empty";
		e ? a.getValue(c, "isotype", d) : h != f.attr("data-focusid") ? a.getValue(c, "isotype", d) : i != f.attr("data-focusid1") ? a.getValue(c, "isotype", d) : c.width() + "|" + c.height() != f.attr("data-focusid_wh") && "jcdb" != c.attr("data-dblType") && a.getValue(c, "isotype", d), f.attr("data-focusid", c.attr("appID") || "empty"), f.attr("data-focusid1", c.attr("attachID") || "empty"), f.attr("data-focusid_wh", c.width() + "|" + c.height()), "open" != f.attr("data-status") && (f.attr("data-status", "open"), f.show()), g.find(".qsset-nosimple").show(), g.children(".qs-ul").children("li").show(), d && (1 == d ? (g.find(".qsset-nosimple").hide(), g.find(".qs-ele2").hide(), g.find(".qs-ele5").hide(), g.find(".qs-ele6").hide(), g.find(".qs-ele7").hide()) : 2 == d ? (g.find(".qsset-nosimple").hide(), g.find(".qs-ele2").hide(), g.find(".qs-ele5").children(":gt(1)").hide(), g.find(".qs-ele6").children(":gt(1)").hide(), g.find(".qs-ele7").hide()) : 3 == d && (g.find(".qsset-nosimple:eq(2)").hide(), g.find(".qs-ele2").hide(), g.find(".qs-ele5").children(":gt(1)").hide(), g.find(".qs-ele6").children(":gt(1)").hide(), g.find(".qs-ele7").hide()))
	}, a.closeChange = function() {
		f.removeData("_qsDom"), "close" != f.attr("data-status") && (f.attr("data-status", "close"), f.hide())
	}, a.execQsSet = function(c) {
		var d, e, g, f = !1;
		b.jSelectsedDom.length > 0 ? (b.jSelectsedDom.each(function() {
			d = $(this).attr("data-dblType"), ("jcb" == d || "jspb" == d || "jfsb" == d && "jfsbSmallImg" == $(this).attr("data-attachtype") || "jwfb" == d && "jwfbSmallImg" == $(this).attr("data-attachtype")) && $(this).hasClass("j-app-qswz") && (f = !0, e = $(this), g = 0), ("jcdb" == d || "jzzb" == d) && $(this).attr("attachID") && $(this).hasClass("j-app-qswz") && (f = !0, 0 != g && (e = $(this), g = 1)), "jwb" != d && "jwwb" != d && "jsb" != d || !$(this).hasClass("j-app-qswz") || (f = !0, 0 != g && (e = $(this), g = 1)), "jab" == d && $(this).attr("attachID") && $(this).hasClass("j-app-qswz") && (f = !0, 0 != g && (e = $(this), g = 2)), "jscb" == d && $(this).hasClass("j-app-qswz") && (f = !0, 0 != g && (e = $(this), g = 2)), "jtsb" == d && $(this).hasClass("j-app-qswz") && (f = !0, 0 != g && (e = $(this), g = 3))
		}), f ? a.openChange(e, g, c) : a.closeChange()) : a.closeChange()
	}, a
}), define("scripts/qsHtml.js", function(a) {
	var f, c = require("scripts/D"),
		d = ['<select name="qs_characterFont" id="qs_characterFont" class="qs-select"><option value="宋体" data-style="font-family:宋体;">宋体</option><option value="黑体" data-style="font-family:黑体;">黑体</option><option value="微软雅黑" data-style="font-family:微软雅黑;">雅黑</option><option value="楷体" data-style="font-family:楷体;">楷体</option><option value="arial" data-style="font-family:Arial;">Arial</option><option value="verdana" data-style="font-family:Verdana;">Verdana</option><option value="georgia" data-style="font-family:Georgia;">Georgia</option><option value="times new roman" data-style="font-family:Times New Roman;">Times New Roman</option><option value="trebuchet ms" data-style="font-family:Trebuchet MS;">Trebuchet MS</option><option value="courier" data-style="font-family:Courier;">Courier</option><option value="impact" data-style="font-family:Impact;">Impact</option><option value="comic sans ms" data-style="font-family:Comic Sans MS;">Comic Sans MS</option><option value="tahoma" data-style="font-family:Tahoma;">Tahoma</option><option value="symbol" data-style="font-family:Symbol;">Symbol</option><option value="palatino Linotype" data-style="font-family:Palatino Linotype;">Palatino Linotype</option><option value="bookman old style" data-style="font-family:Bookman Old Style;">Bookman Old Style</option></select>', '<select name="qs_characterSize" id="qs_characterSize" class="qs-select"><option value="" data-style="font-size:12px;">自定义</option><option value="12" data-style="font-size:12px;">12点</option><option value="14" data-style="font-size:14px;">14点</option><option value="18" data-style="font-size:18px;">18点</option><option value="24" data-style="font-size:24px;">24点</option><option value="30" data-style="font-size:30px;">30点</option><option value="36" data-style="font-size:36px;">36点</option><option value="48" data-style="font-size:48px;">48点</option><option value="60" data-style="font-size:60px;">60点</option><option value="72" data-style="font-size:72px;">72点</option></select><input class="qs-input1" style="position:absolute;left:47px;border:none;margin-top:8px;display:none;" name="qs_characterSize_zdy" id="qs_characterSize_zdy" value="" />'],
		e = {
			isotype: {
				html: '<div></div><ul class="qs-ul" style="position:relative;"><li class="qs-ele1"><span class="qs-space"></span><label class="qs-icon qs-cw qs-cw-1" for="qs_characterWeight" title="加粗"></label><input class="qs-checkbox" type="checkbox" name="qs_characterWeight" id="qs_characterWeight" value="bold" /><label class="qs-icon qs-cw qs-cw-2" for="qs_characterStyle" title="斜体"></label><input class="qs-checkbox" type="checkbox" name="qs_characterStyle" id="qs_characterStyle" value="italic" /><label class="qs-icon qs-cw qs-cw-3 qsset-nosimple" for="qs_characterLineUnder" title="下划线"></label><input class="qs-checkbox" type="checkbox" name="qs_characterLineUnder" id="qs_characterLineUnder" value="underline" /><label class="qs-icon qs-cw qs-cw-4 qsset-nosimple" for="qs_characterLineThrough" title="中划线"></label><input class="qs-checkbox" type="checkbox" name="qs_characterLineThrough" id="qs_characterLineThrough" value="line-through" /><label class="qs-icon qs-cw qs-cw-5 qsset-nosimple" for="qs_characterWidthMode" title="自动宽度"></label><input class="qs-checkbox" type="checkbox" name="qs_characterWidthMode" id="qs_characterWidthMode" value="auto" /></li><li class="qs-ele2"><span class="qs-space"></span><label class="qs-icon qs-ca qs-ca-0" data-name="qs_characterAlign" for="qs_characterAlign0" title="居左"></label><input class="qs-radio" type="radio" name="qs_characterAlign" id="qs_characterAlign0" checked value="left" /><label class="qs-icon qs-ca qs-ca-1" data-name="qs_characterAlign" for="qs_characterAlign1" title="居中"></label><input class="qs-radio" type="radio" name="qs_characterAlign" id="qs_characterAlign1" value="center" /><label class="qs-icon qs-ca qs-ca-2" data-name="qs_characterAlign" for="qs_characterAlign2" title="居右"></label><input class="qs-radio" type="radio" name="qs_characterAlign" id="qs_characterAlign2" value="right" /></li><li class="qs-ele3"><label class="qs-label" for="qs_characterFont">字体：</label>' + d[0] + '<label class="qs-label1" for="qs_characterColor_choose">文字颜色：</label>' + '<input class="qs-input1 tColorPicker qssetcolor" type="text" id="qs_characterColor_choose" value="" />' + '<input class="qs-hidden" type="hidden" name="qs_characterColor" id="qs_characterColor" value="" />' + "</li>" + '<li class="qs-ele4">' + '<label class="qs-label" for="qs_characterSize">大小：</label>' + d[1] + '<label class="qs-label1" for="qs_characterBgColor_choose">背景颜色：</label>' + '<input class="qs-input1 tColorPicker qssetcolor" type="text" id="qs_characterBgColor_choose" value="" />' + '<input class="qs-hidden" type="hidden" name="qs_characterBgColor" id="qs_characterBgColor" value="" />' + "</li>" + '<li class="qs-ele5">' + '<label class="qs-label" for="qs_characterWidth">宽度：</label>' + '<input class="qs-input" type="text" name="qs_characterWidth" id="qs_characterWidth" value="" />' + '<label class="qs-label1" for="qs_characterLSpace">左缩进：</label>' + '<input class="qs-input1" type="text" name="qs_characterLeftPadding" id="qs_characterLeftPadding" value="" />' + "</li>" + '<li class="qs-ele6">' + '<label class="qs-label" id="qs_characterHeight_label" for="qs_characterHeight">高度：</label>' + '<input class="qs-input" type="text" name="qs_characterHeight" id="qs_characterHeight" value="" />' + '<label class="qs-label1" for="qs_characterLSpace">右缩进：</label>' + '<input class="qs-input1" type="text" name="qs_characterRightPadding" id="qs_characterRightPadding" value="" />' + "</li>" + '<li class="qs-ele7">' + '<label class="qs-label2" for="qs_characterBgSrc">背景图片：</label>' + '<input class="qs-input2 tItisImg" type="text" name="qs_characterBgSrc" id="qs_characterBgSrc" value="" />' + '<label class="qs-span" for="qs_characterRepeat">平铺</label>' + '<input class="qs-checkbox" type="checkbox" name="qs_characterRepeat" id="qs_characterRepeat" value="repeat" />' + "</li>" + "</ul>",
				htmlJs: function(a) {
					a.on("keyup.qssetcolor", "input.qssetcolor", function() {
						var b = $(this).val();
						b.length > 2 && "#" != b.substr(0, 1) && $(this).val("#" + b), $(this).css({
							color: b,
							backgroundColor: b
						}), "" != b ? $(this).next("input").val(b).trigger("change") : $(this).next("input").val(b)
					})
				},
				getValue: function(a, b, c) {
					var d;
					a.find("input[name='qs_characterWeight']").prop("checked", !1).prev().removeClass("qs-checked"), a.find("input[name='qs_characterStyle']").prop("checked", !1).prev().removeClass("qs-checked"), a.find("input[name='qs_characterLineUnder']").prop("checked", !1).prev().removeClass("qs-checked"), a.find("input[name='qs_characterLineThrough']").prop("checked", !1).prev().removeClass("qs-checked"), a.find("input[name='qs_characterAlign']").prop("checked", !1).prev().removeClass("qs-checked"), a.find("input[name='qs_characterRepeat']").prop("checked", !1).prev().removeClass("qs-checked"), a.find("input[name='qs_characterWeight'][value='" + c.characterWeight + "']").prop("checked", !0).prev().addClass("qs-checked"), a.find("input[name='qs_characterStyle'][value='" + c.characterStyle + "']").prop("checked", !0).prev().addClass("qs-checked"), a.find("input[name='qs_characterLineUnder'][value='" + c.characterLineUnder + "']").prop("checked", !0).prev().addClass("qs-checked"), a.find("input[name='qs_characterLineThrough'][value='" + c.characterLineThrough + "']").prop("checked", !0).prev().addClass("qs-checked"), a.find("input[name='qs_characterAlign'][value='" + c.characterAlign + "']").prop("checked", !0).prev().addClass("qs-checked"), a.find("input[name='qs_characterRepeat'][value='" + c.characterRepeat + "']").prop("checked", !0).prev().addClass("qs-checked"), $("#qs_characterFont").val(c.characterFont), !c.characterSize || "12" != c.characterSize && "14" != c.characterSize && "18" != c.characterSize && "24" != c.characterSize && "30" != c.characterSize && "36" != c.characterSize && "48" != c.characterSize && "60" != c.characterSize && "72" != c.characterSize ? ($("#qs_characterSize").val(""), $("#qs_characterSize_zdy").val(c.characterSize), "" != c.characterSize && (d = "自定义-" + c.characterSize + "点", $("#qs_characterSize").children("option:eq(0)").text(d), $("#qs_characterSize_zdy").show())) : ($("#qs_characterSize").val(c.characterSize), $("#qs_characterSize_zdy").val(""), d = "自定义", $("#qs_characterSize").children("option:eq(0)").text(d), "" == c.characterSize ? $("#qs_characterSize_zdy").show() : $("#qs_characterSize_zdy").hide()), $("#qs_characterColor_choose").val(c.characterColor).css({
						color: RGBToHex(c.characterColor, ""),
						backgroundColor: RGBToHex(c.characterColor, "")
					}), $("#qs_characterBgColor_choose").val(c.characterBgColor).css({
						color: RGBToHex(c.characterBgColor, ""),
						backgroundColor: RGBToHex(c.characterBgColor, "")
					}), $("#qs_characterWidth").val(b.width()), "yes" != c.characterLineMulti ? ($("#qs_characterHeight").val(b.height()), $("#qs_characterHeight_label").html("高度")) : ($("#qs_characterHeight").val(c.characterLineHeight || ""), $("#qs_characterHeight_label").html("行高")), $("#qs_characterLeftPadding").val(c.characterLeftPadding || ""), $("#qs_characterRightPadding").val(c.characterRightPadding || ""), a.find("input[name='qs_characterWidthMode'][value='" + c.characterWidthMode + "']").prop("checked", !0).prev().addClass("qs-checked")
				},
				setValue: function(a, b, d, e) {
					var f = d,
						g = d.attr("data-dblType") || "jcb";
					return ("jwb" == g || "jwwb" == g) && (f = d.children(".t-wang-text")), "jtsb" == g && (f = d.children(c.appOtherCls).children(".div")), "jsb" == g && (f = d.children(c.appChildCls + "[data-attachtype='jsbInput']")), "qs_characterFont" == a ? (e.characterFont = b, f.css({
						fontFamily: b
					})) : "qs_characterSize" == a ? (e.characterSize = b, f.css({
						fontSize: c.tParseInt(b)
					})) : "qs_characterWeight" == a ? (e.characterWeight = b || "normal", f.css({
						fontWeight: b
					})) : "qs_characterColor" == a ? (e.characterColor = b, f.css({
						color: b
					})) : "qs_characterBgColor" == a ? (e.characterBgColor = b, f.css({
						backgroundColor: b
					})) : "qs_characterAlign" == a ? (e.characterAlign = b, f.css({
						textAlign: b
					})) : "qs_characterStyle" == a ? (e.characterStyle = b || "normal", f.css({
						fontStyle: b
					}), "jcdb" == g && ("italic" == b ? f.css({
						paddingLeft: c.tParseInt(e.characterSize / 8),
						paddingRight: c.tParseInt(e.characterSize / 8)
					}) : f.css({
						paddingLeft: 0,
						paddingRight: 0
					}))) : "qs_characterLineUnder" == a ? (e.characterLineUnder = b, $("#qs_characterLineThrough").prop("checked") && (b += " " + $("#qs_characterLineThrough").val()), f.css({
						textDecoration: b
					})) : "qs_characterLineThrough" == a ? (e.characterLineThrough = b, $("#qs_characterLineUnder").prop("checked") && (b += " " + $("#qs_characterLineUnder").val()), f.css({
						textDecoration: b
					})) : "qs_characterWidthMode" == a ? (e.characterWidthMode = b || "normal", "auto" == b ? (f.css({
						width: b
					}).tResize({
						tHandles: "n, s"
					}), $("#qs_characterWidth").val(d.width()).prop("disabled", !0)) : (f.tResize(), $("#qs_characterWidth").prop("disabled", !1))) : "qs_characterWidth" == a ? f.width(b) : "qs_characterHeight" == a ? "yes" != e.characterLineMulti ? f.height(b).css("line-height", b + "px") : (f.css("line-height", b + "px"), e.characterLineHeight = b || "") : "qs_characterLeftPadding" == a ? (e.characterLeftPadding = b, f.children(".jcbText").css({
						paddingLeft: c.tParseInt(b)
					})) : "qs_characterRightPadding" == a ? (e.characterRightPadding = b, f.children(".jcbText").css({
						paddingRight: c.tParseInt(b)
					})) : "qs_characterBgSrc" == a ? (e.characterBgSrc = b, checkUrl(b) ? f.css({
						backgroundImage: "url(" + b + ")"
					}) : f.css({
						backgroundImage: "none"
					})) : "qs_characterRepeat" == a && (e.characterRepeat = b || "no-repeat", f.css({
						backgroundRepeat: b
					})), $.extend({}, e)
				}
			}
		};
	for (f in e) a[f] = e[f];
	return a
}), define("scripts/allwzset.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax");
	return a.allSubmit = function(a, d, e, f) {
		var g, h, i;
		"" != a && "string" == typeof a && (a = JSON.parse(a || "{}")), a && "" != a || (a = $.extend({}, b.qssetConfig)), e && (g = JSON.parse(e.attr("data-config") || "{}")), h = "", a.characterLineThrough && "" != a.characterLineThrough && (h = a.characterLineThrough), a.characterLineUnder && "" != a.characterLineUnder && ("" == h ? h = a.characterLineUnder : h += " " + a.characterLineUnder), a.characterLineMulti && "yes" == a.characterLineMulti ? ("multi" != d.attr("data-cast") && d.width(200).height(150), i = a.characterLineHeight || b.tParseInt(a.characterSize) + 10, a.characterLineContent = a.characterLineContent.replace(/\n|\r\n/g, "<br>"), a.characterLineContent = a.characterLineContent.replace(/ /g, "&nbsp;"), e ? ("string" == typeof f ? g.childConfig[f].qssetConfig = JSON.stringify($.extend({}, a)) : g.qssetConfig = JSON.stringify($.extend({}, a)), e.attr("data-config", JSON.stringify(g))) : d.attr("data-config", JSON.stringify(a)), d.attr("data-cast", "multi").html('<span class="jcbText">' + a.characterLineContent + "</span>").css({
			backgroundColor: RGBToHex(a.characterBgColor, ""),
			textAlign: a.characterLineAlign,
			fontSize: b.tParseInt(a.characterSize),
			lineHeight: i + "px",
			letterSpacing: b.tParseInt(a.characterLetterSpacing),
			fontWeight: a.characterWeight,
			fontFamily: a.characterFont,
			color: a.characterColor,
			textIndent: (a.characterLineSpace || 0) + "px",
			fontStyle: a.characterStyle || "normal",
			wordBreak: "break-all",
			whiteSpace: "normal"
		}).tResize(), "" != h && d.css("text-decoration", h), d.children(".jcbText").css({
			paddingTop: b.tParseInt(a.characterTBpadding) || 0,
			paddingBottom: b.tParseInt(a.characterTBpadding) || 0,
			paddingLeft: b.tParseInt(a.characterLeftPadding) || 0,
			paddingRight: b.tParseInt(a.characterRightPadding) || 0
		}), checkUrl(a.characterBgSrc) ? d.css({
			backgroundImage: "url(" + a.characterBgSrc + ")"
		}) : d.css({
			backgroundImage: "none"
		})) : ("multi" == d.attr("data-cast") && d.width(120).height(24), d.attr("data-cast", "no").css({
			wordBreak: "normal",
			whiteSpace: "nowrap"
		}), e ? ("string" == typeof f ? g.childConfig[f].qssetConfig = JSON.stringify($.extend({}, a)) : g.qssetConfig = JSON.stringify($.extend({}, a)), e.attr("data-config", JSON.stringify(g))) : d.attr("data-config", JSON.stringify(a)), d.html('<span class="jcbText">' + a.characterContent + "</span>").css({
			backgroundColor: RGBToHex(a.characterBgColor, ""),
			textAlign: a.characterAlign,
			fontSize: b.tParseInt(a.characterSize),
			lineHeight: d.height() + "px",
			letterSpacing: b.tParseInt(a.characterLetterSpacing),
			fontWeight: a.characterWeight,
			fontFamily: a.characterFont,
			fontStyle: a.characterStyle || "normal",
			color: a.characterColor
		}).tResize(), "" != h && d.css("text-decoration", h), "text" != a.characterMode && checkUrl(a.characterContent) && c.ajaxJson("giii.php", {
			item: a.characterContent,
			random: 1e4 * Math.random()
		}, function(c) {
			"yes" == c[0] && ("title" == a.characterMode && (a.characterItemContent = c[1]), "price" == a.characterMode && (a.characterItemContent = c[2]), "_price" == a.characterMode && (a.characterItemContent = c[3]), "sale" == a.characterMode && (a.characterItemContent = c[4]), "collected" == a.characterMode && (a.characterItemContent = c[5])), ("price" == a.characterMode || "_price" == a.characterMode) && "" != a.characterItemContent && (a.characterItemContent = b.tParseFloat(a.characterItemContent).toFixed(b.tParseInt(a.characterFixed))), d.children(".jcbText").html(a.characterItemContent), e ? ("string" == typeof f ? g.childConfig[f].qssetConfig = JSON.stringify($.extend({}, a)) : g.qssetConfig = JSON.stringify($.extend({}, a)), e.attr("data-config", JSON.stringify(g))) : d.attr("data-config", JSON.stringify(a))
		}), h = "", a.characterLineThrough && "" != a.characterLineThrough && (h = a.characterLineThrough), a.characterLineUnder && "" != a.characterLineUnder && ("" == h ? h = a.characterLineUnder : h += " " + a.characterLineUnder), "" != h && d.css({
			textDecoration: h
		}), "auto" == a.characterWidthMode && d.css("width", "auto").tResize({
			tHandles: "n, s"
		}), a.characterLeftPadding && "" != a.characterLeftPadding && d.children(".jcbText").css({
			paddingLeft: a.characterLeftPadding + "px"
		}), a.characterRightPadding && "" != a.characterRightPadding && d.children(".jcbText").css({
			paddingRight: a.characterRightPadding + "px"
		}), checkUrl(a.characterBgSrc) ? d.css({
			backgroundImage: "url(" + a.characterBgSrc + ")"
		}) : d.css({
			backgroundImage: "none"
		})), a.imgBgp && d.css({
			backgroundPosition: a.imgBgp || "50% 50%"
		}), a.ssOpacity && "" != a.ssOpacity && d.css("opacity", a.ssOpacity), d.hasClass("j-app-qswz") || d.addClass("j-app-qswz")
	}, a.allExport = function(a, c, d, e, f) {
		var h, i, j, k, l, m, n, o, p, q, r, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Fb, Gb, Hb, g = !1;
		return (c || d) && (g = !0), c = $.extend({}, b.qssetConfig, c || JSON.parse(a.attr("data-config"))), h = a.width(), i = a.height(), j = b.tParseInt(a.css("top")), k = b.tParseInt(a.css("left")), l = "", m = "", n = "jwz ", o = "", p = "white-space: nowrap;", q = i, r = !1, t = "", u = "", v = "", w = "", x = "", y = "", z = "", A = ' data-appid="' + c.appID + '"', B = "", C = c.characterRepeat || "no-repeat", D = "", E = "", F = "", G = "", H = c.characterContent, I = "", J = c.imgBgp || "50% 50%", K = "", L = "", M = "", N = "", O = "", P = "", Q = "", R = c.characterAlign, S = "", T = "rel", U = "width:" + h + "px;", V = "width:auto;display:block;", W = c.tipText || "", X = "", Y = "", Z = "", _ = "", ab = i, g && (A = ""), c.ssOpacity && "" != c.ssOpacity && (Y = "opacity:" + c.ssOpacity + ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * c.ssOpacity + ");"), c.ssOpacity1 && "" != c.ssOpacity1 && (Z = "opacity:" + c.ssOpacity1 + ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * c.ssOpacity1 + ");"), "" != W && (X = ' title= "' + W + '"'), !c.characterMode && (c.characterMode = "text"), !c.characterWidthMode && (c.characterWidthMode = "normal"), !c.characterItemContent && (c.characterItemContent = ""), !c.characterLetterSpacing && (c.characterLetterSpacing = ""), "" != c.characterLetterSpacing && (L = "letter-spacing:" + b.tParseInt(c.characterLetterSpacing) + "px;"), "text" != c.characterMode && c.characterContent && "" != c.characterContent && (("price" == c.characterMode || "_price" == c.characterMode) && !! c.characterItemContent && (c.characterItemContent = b.tParseFloat(c.characterItemContent).toFixed(b.tParseInt(c.characterFixed))), I = ' data-h="' + c.characterItemContent + ";" + c.characterContent + '"', bb = c.characterContent.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), bb && bb.length > 0 && (S = bb[0].replace(/(\?|\&)id\=/g, "")), "" != S && ("title" == c.characterMode && (H = "%7b$" + S + ".title%7d"), "price" == c.characterMode && (H = "%7b$" + S + ".price." + b.tParseInt(c.characterFixed) + "f%7d"), "_price" == c.characterMode && (H = "%7b$" + S + ".discountPrice." + b.tParseInt(c.characterFixed) + "f%7d"), "sale" == c.characterMode && (H = "%7b$" + S + ".soldCount%7d"), "collected" == c.characterMode && (H = "%7b$" + S + ".collectedCount%7d"))), c.characterLineThrough && "" != c.characterLineThrough && (B = "text-decoration:" + c.characterLineThrough), c.characterLineUnder && "" != c.characterLineUnder ? "" == B ? B = "text-decoration:" + c.characterLineUnder + ";" : B += " " + c.characterLineUnder + ";" : "" != B && (B += ";"), c.characterLeftPadding && "" != c.characterLeftPadding && (K += "padding-left:" + b.tParseInt(c.characterLeftPadding) + "px;"), c.characterRightPadding && "" != c.characterRightPadding && (K += "padding-right:" + b.tParseInt(c.characterRightPadding) + "px;"), "auto" == c.characterWidthMode && (T = "", U = "", V = "width:auto;display:block;", 20 > i && (V = "width:auto;display:block;")), c.characterLineMulti && "yes" == c.characterLineMulti && (o = ' data-c="yes"', H = c.characterLineContent || "", T = "rel", c.characterTBpadding = b.tParseInt(c.characterTBpadding), "" == c.characterTBpadding && (c.characterTBpadding = 0), 0 != c.characterTBpadding && (K = "padding:" + c.characterTBpadding + "px " + (c.characterRightPadding || "0") + "px " + c.characterTBpadding + "px " + (c.characterRightPadding || "0") + "px;"), c.characterLineSpace && "" != c.characterLineSpace && (K += "text-indent:" + b.tParseInt(c.characterLineSpace) + "px;"), U = "width:" + h + "px;", V = "width:auto;display:block;", R = c.characterLineAlign || "left", p = "word-break:break-all;", q = c.characterLineHeight || b.tParseInt(c.characterSize) + 10 || "25", r = !0, c.characterTBpadding > 0 && (i -= 2 * c.characterTBpadding)), c.borderRadius = c.borderRadius1, cb = "", db = "", eb = "", fb = "", gb = "", hb = "", ib = 0, jb = 0, kb = 0, lb = 0, mb = "", nb = "", ob = "", rb = "", sb = "", tb = "", ub = "", _ = "", vb = c.characterColorMsOver || "", wb = c.characterBgColorMsOver || "", xb = c.characterBgSrcMsOver || "", yb = c.characterBorderWidthMsOver || "", zb = c.characterBorderColorMsOver || "", Ab = c.characterBorderStyleMsOver || "", Bb = "", "" != c.shadowControl1 && ("" == c.shadowLeft1 && (c.shadowLeft1 = 0), "" == c.shadowTop1 && (c.shadowTop1 = 0), "" == c.shadowBlur1 && (c.shadowBlur1 = 0), "" == c.shadowSize1 && (c.shadowSize1 = 0), eb = "box-shadow: " + c.shadowLeft1 + "px " + c.shadowTop1 + "px " + c.shadowBlur1 + "px " + c.shadowSize1 + "px " + c.shadowColor1 + " " + c.shadowStyle1 + ";"), "" == c.borderRadius1 && (c.borderRadius1 = 0), "" == c.borderWidth1 && (c.borderWidth1 = 0), "hborder1" != c.borderControl1 && (db = "border:none;", c.borderControl1 = "", c.borderWidth1 = 0, c.borderRadius1 = 0), hb = RGBToHex(c.borderColor1, ""), "" == hb && (db = "border:none;", c.borderControl1 = "", c.borderWidth1 = 0, c.borderRadius1 = 0), jb = b.tParseInt(c.borderRadius1), lb = b.tParseInt(c.borderWidth1), "" == db && (db = "border:" + lb + "px solid " + hb + ";border-radius:" + jb + "px;", Bb = 2 * lb), H = H.replace(/ /g, "&amp;nbsp;").replace(/&nbsp;/, "&amp;nbsp;"), tb = "", ub = "", "jfsb" == d && "click" == c.sliderSwitch && ("" != vb || "" != wb || "" != xb || "" != yb) && (Cb = "", sb = " junefade", vb = RGBToHex(vb, ""), "" != vb && (Cb += "color:" + vb + ";"), wb = RGBToHex(wb, ""), "" != wb && (Cb += "background-color:" + wb + ";"), checkUrl(xb) && (Cb += "background:url(" + xb + ") " + J + " no-repeat;"), "" != yb && "" != b.tParseInt(yb) && 0 != b.tParseInt(yb) && (zb = RGBToHex(zb, ""), rb = "border:" + b.tParseInt(yb) + "px " + Ab + " " + zb + ";"), tb = '<div class="abs junei" style="width:100%;height:100%;font:inherit;left:0;right:0;' + K + Cb + rb + '">' + H + '</div><div class="abs juneo" style="width:100%;height:100%;font:inherit;">', ub = "</div>"), "on" == c.characterHoverMode && (D = "junefade ", "jfsb" == d ? (F = " " + c.characterHoverSpeed, c.css3Mode1 && "" != c.css3Mode1 && (F += " " + c.css3Mode1), c.css3ModeX1 && "" != c.css3ModeX1 && (F += " " + c.css3ModeX1), c.css3ModeY1 && "" != c.css3ModeY1 && (F += " " + c.css3ModeY1)) : F = " " + c.characterHoverSpeed + " junei", G = " " + c.characterHoverSpeed + " juneo", Db = 0, c.characterUnderLine && "on" == c.characterUnderLine && (Db = c.characterUnderLineWeight, m = "border-bottom: " + Db + "px " + c.characterUnderLineStyle + " " + RGBToHex(c.characterUnderLineColor) + ";"), Fb = "display:block;width:auto;top:-100%;", "auto" == c.characterWidthMode && (Fb = "display:block;width:auto;top:-100%;left:0;"), "jfsb" == d && (Fb = Fb.replace("top:-100%;", "")), c.characterBgColorHover = RGBToHex(c.characterBgColorHover, ""), "" != c.characterBgColorHover && (N = "background-color:" + c.characterBgColorHover + ";"), c.characterColorHover = RGBToHex(c.characterColorHover, ""), "" != c.characterColorHover && (O = "color:" + c.characterColorHover + ";"), "" != c.characterFontHover && (P = "font-family:" + c.characterFontHover + ";"), "" != c.characterWeightHover && (Q = "font-weight:" + c.characterWeightHover + ";"), "" != c.characterSizeHover && (_ = "font-size:" + b.tParseInt(c.characterSizeHover) + "px;"), checkUrl(c.characterBgSrcHover) && (M = "background:url(" + c.characterBgSrcHover + ") " + J + " no-repeat;"), "" != c.shadowControl && ("" == c.shadowLeft && (c.shadowLeft = 0), "" == c.shadowTop && (c.shadowTop = 0), "" == c.shadowBlur && (c.shadowBlur = 0), "" == c.shadowSize && (c.shadowSize = 0), fb = "box-shadow: " + c.shadowLeft + "px " + c.shadowTop + "px " + c.shadowBlur + "px " + c.shadowSize + "px " + c.shadowColor + " " + c.shadowStyle + ";"), "" == c.borderRadius && (c.borderRadius = 0), "" == c.borderWidth && (c.borderWidth = 0), "hborder" != c.borderControl && (cb = "border:none;", c.borderControl = "", c.borderWidth = 0, c.borderRadius = 0), gb = RGBToHex(c.borderColor, ""), "" == gb && (cb = "border:none;", c.borderControl = "", c.borderWidth = 0, c.borderRadius = 0), ib = b.tParseInt(c.borderRadius), kb = b.tParseInt(c.borderWidth), "" == cb && (cb = "border:" + kb + "px solid " + gb + ";border-radius:" + ib + "px;", m = "", Db = 2 * kb), "" == c.outlineControl && (c.outlineWidth = "", c.outlineColor = "", c.outlineShadowColor = ""), "" != c.outlineWidth && (ob = c.outlineWidth + " " + c.outlineSpeed), c.outlineColor = RGBToHex(c.outlineColor, ""), "" != c.outlineColor && (mb = "outline-color:" + c.outlineColor + ";"), c.outlineShadowColor = RGBToHex(c.outlineShadowColor, ""), "" != c.outlineShadowColor && (nb = "color:" + c.outlineShadowColor + ";"), r || (q = i - Db), c.characterUnderLine && "on" == c.characterUnderLine && "yes" != c.characterLineMulti && (q = i), E = '<a class="rel' + F + '" href="' + c.href + '" target="' + c.hrefMode + '" style="' + Fb + "height:" + (i - Db) + "px;line-height:" + q + "px;" + p + K + M + N + O + P + Q + _ + B + L + cb + m + fb + Z + '">' + H + "</a>"), r || (q = i - Bb), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (u = "background-color:" + c.characterBgColor + ";"), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (v = "color:" + c.characterColor + ";"), "" != c.characterFont && (w = "font-family:" + c.characterFont + ";"), "bold" == c.characterWeight && (x = "font-weight:" + c.characterWeight + ";"), "italic" == c.characterStyle && (y = "font-style:" + c.characterStyle + ";"), "" != c.characterSize && (z = "font-size:" + b.tParseInt(c.characterSize) + "px;"), "" != c.href && (l = ' href="' + c.href + '"'), checkUrl(c.characterBgSrc) && (t = "background:url(" + c.characterBgSrc + ") " + J + " " + C + ";"), Gb = "", Hb = "", "jfsb" == d && (Hb = "</li>", D = "", G = G.replace("juneo", "s2"), "" == G && (G = " s2"), Gb = '<div class="jspb rel s1" style="width:100%;height:100%;">', V = V.replace("display:block;", "").replace("display:inline-block;", ""), "" == E && (E = '<a class="rel"' + l + ' style="display:block;' + V + "height:" + (i - Bb) + "px;line-height:" + q + "px;" + p + K + t + u + v + w + x + y + z + B + L + db + eb + Y + '" target="' + c.hrefMode + '">' + H + "</a>"), "click" == c.sliderSwitch && (l = "")), " " + D + n + c.borderControl + " " + c.borderControl1 + " " + c.shadowControl + " " + c.shadowControl1 + " " + ob + ' jzi"' + I + o + ' data-t="' + c.characterMode + '" data-w="' + c.characterWidthMode + '"' + A + X + ' data-o="' + (c.ssOpacity || 1) + ";" + (c.ssOpacity1 || 1) + '" style="' + (e || "") + "text-align:" + R + ";" + U + "height:" + ab + "px;" + (f ? "top:0;left:0;" : "top:" + j + "px;left:" + k + "px;") + "z-index:10;" + mb + nb + '"><a class="' + T + G + sb + '"' + l + ' style="' + V + "height:" + (i - Bb) + "px;line-height:" + q + "px;" + p + K + t + u + v + w + x + y + z + B + L + db + eb + Y + '" target="' + c.hrefMode + '">' + tb + H + ub + "</a>" + Gb + E + "</div>" + Hb
	}, a.allImport = function(c, d, e, f) {
		var k, h, i, j, l, m, n, o, p, q, r, s, t, u, v, w, y, x, z, g = "";
		return !e.hasClass("jwz") && e.hasClass("jcb") ? (h = JSON.parse(c.attr("data-config")), i = c.attr("data-dblType"), j = e.children("a:eq(0)"), l = {}, l.appID = e.attr("data-appid"), l.characterMode = e.attr("data-t") || "text", l.href = j.attr("href") || "", l.hrefMode = j.attr("target"), l.characterBgSrc = j.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.characterAlign = e.css("text-align") || "center", l.characterContent = j.html(), l.characterSize = j.css("font-size").replace(/px/g, ""), l.characterFont = j.css("font-family").replace(/'/g, ""), l.characterColor = RGBToHex(j.css("color")), l.characterBgColor = RGBToHex(j.css("background-color"), ""), l.imgBgp = j.css("background-position") || "50% 50%", l.characterWeight = j.css("font-weight"), "400" == l.characterWeight && (l.characterWeight = "normal"), l.characterWidthMode = e.attr("data-w") || "normal", l.characterLetterSpacing = j.css("letter-spacing").replace(/px/g, ""), l.characterLineThrough = "", l.characterLineUnder = "", l.tipText = "", e.attr("title") && "" != e.attr("title") && (l.tipText = e.attr("title")), "yes" == e.attr("data-c") ? (l.characterLineMulti = "yes", l.characterLineContent = l.characterContent, l.characterContent = "", l.characterLineHeight = b.tParseInt(j.css("line-height")), l.characterLineAlign = l.characterAlign, l.characterAlign = "left", l.characterLineSpace = b.tParseInt(j.css("text-indent")), l.characterTBpadding = b.tParseInt(j.css("padding-top"))) : (l.characterLineMulti = "no", l.characterLineContent = "", l.characterLineHeight = "", l.characterLineAlign = "", l.characterLineSpace = ""), m = "", l.characterLeftPadding = Math.abs(b.tParseInt(j.css("padding-left"))), l.characterRightPadding = Math.abs(b.tParseInt(j.css("padding-right"))), "auto" == l.characterWidthMode && (m = b.tParseInt(j.css("line-height"))), e.children("a").length > 1 && (k = e.children("a:eq(1)"), l.characterUnderLine = "off", l.characterHoverMode = "on", l.characterHoverSpeed = k.attr("class").match(/trans(\w+)s/g), l.characterHoverSpeed = l.characterHoverSpeed && l.characterHoverSpeed.length > 0 ? l.characterHoverSpeed.join("") : "", l.characterBgSrcHover = k.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.characterSizeHover = k.css("font-size").replace(/px/g, ""), l.characterFontHover = k.css("font-family").replace(/'/g, ""), l.characterColorHover = RGBToHex(k.css("color")), l.characterBgColorHover = RGBToHex(k.css("background-color"), ""), l.characterWeightHover = k.css("font-weight"), "400" == l.characterWeightHover && (l.characterWeightHover = "normal"), l.characterUnderLineWeight = j.height() - k.height(), l.characterUnderLineWeight > 0 ? (l.characterUnderLine = "on", l.characterUnderLineStyle = k.css("border-bottom-style"), l.characterUnderLineColor = RGBToHex(k.css("border-bottom-color")), l.characterUnderLineWeight += "") : l.characterUnderLineWeight = "1", e.hasClass("shadowShow") && (l.shadowControl = "shadowShow", n = k.css("box-shadow"), n.indexOf("inset") >= 0 && (l.shadowStyle = "inset", n = $.trim(n.replace(/inset/g, ""))), n.indexOf("rgb") >= 0 && (o = RGBToHex(n.match(/rgb\((\S|\s)*\)/g)[0]), n = $.trim(n.replace(/rgb\((\S|\s)*\)/g, ""))), p = n.split(" "), p[0].indexOf("px") < 0 && p[0] ? ("" == o && (o = RGBToHex(p[0])), p.splice(0, 1)) : "" == o && (o = RGBToHex(p[4])), l.shadowColor = o, l.shadowLeft = b.tParseInt(p[0]), l.shadowTop = b.tParseInt(p[1]), l.shadowBlur = b.tParseInt(p[2]), l.shadowSize = b.tParseInt(p[3])), e.hasClass("hborder") && (l.borderControl = "hborder", l.borderColor = RGBToHex(k.css("border-color")), l.borderWidth = k.css("border-width") || "1px", l.borderWidth = l.borderWidth.replace(/px/g, ""), l.borderRadius = k.css("border-radius") || "0px", l.borderRadius = l.borderRadius.replace(/px/g, "")), e.hasClass("mcblack") && (l.mongoliaControl = "mongoliaShow", l.mongoliaMode = "mcblack"), e.hasClass("mcwhite") && (l.mongoliaControl = "mongoliaShow", l.mongoliaMode = "mcwhite")), j.css("text-decoration").indexOf("line-through") >= 0 && (l.characterLineThrough = "line-through"), j.css("text-decoration").indexOf("underline") >= 0 && (l.characterLineUnder = "underline"), q = l.characterContent, "text" != l.characterMode && (r = e.attr("data-h") || ";", s = r.split(";"), l.characterItemContent = s[0], l.characterContent = s[1], q = l.characterItemContent, ("price" == l.characterMode || "_price" == l.characterMode) && (t = q.split("."), l.characterFixed = t.length > 1 ? t[1].length : 0)), e.hasClass("shadowShow1") && (l.shadowControl1 = "shadowShow1", u = j.css("box-shadow"), u.indexOf("inset") >= 0 && (l.shadowStyle1 = "inset", u = $.trim(u.replace(/inset/g, ""))), u.indexOf("rgb") >= 0 && (o = RGBToHex(u.match(/rgb\((\S|\s)*\)/g)[0]), u = $.trim(u.replace(/rgb\((\S|\s)*\)/g, ""))), p = u.split(" "), p[0].indexOf("px") < 0 && p[0] ? ("" == o && (o = RGBToHex(p[0])), p.splice(0, 1)) : "" == o && (o = RGBToHex(p[4])), l.shadowColor1 = o, l.shadowLeft1 = b.tParseInt(p[0]), l.shadowTop1 = b.tParseInt(p[1]), l.shadowBlur1 = b.tParseInt(p[2]), l.shadowSize1 = b.tParseInt(p[3])), e.hasClass("hborder1") && (l.borderControl1 = "hborder1", l.borderColor1 = RGBToHex(j.css("border-color")), l.borderWidth1 = j.css("border-width") || "1px", l.borderWidth1 = l.borderWidth1.replace(/px/g, ""), l.borderRadius1 = j.css("border-radius") || "0px", l.borderRadius1 = l.borderRadius1.replace(/px/g, "")), e.hasClass("juneol") && (l.outlineControl = "outlineShow", l.outlineWidth = "juneol", l.outlineColor = RGBToHex(e.css("outline-color")), l.outlineShadowColor = RGBToHex(e.css("color")), l.outlineSpeed = e.attr("class").indexOf("trans") >= 0 ? e.attr("class").match(/trans(\w+)s/g).join("") : ""), e.hasClass("juneol1") && (l.outlineControl = "outlineShow", l.outlineWidth = "juneol1", l.outlineColor = RGBToHex(e.css("outline-color")), l.outlineShadowColor = RGBToHex(e.css("color")), l.outlineSpeed = e.attr("class").indexOf("trans") >= 0 ? e.attr("class").match(/trans(\w+)s/g).join("") : ""), e.hasClass("juneol2") && (l.outlineControl = "outlineShow", l.outlineWidth = "juneol2", l.outlineColor = RGBToHex(e.css("outline-color")), l.outlineShadowColor = RGBToHex(e.css("color")), l.outlineSpeed = e.attr("class").indexOf("trans") >= 0 ? e.attr("class").match(/trans(\w+)s/g).join("") : ""), v = $.extend(!0, h, l), l.characterLineMulti && "yes" == l.characterLineMulti ? (w = l.characterLineHeight || b.tParseInt(l.characterSize) + 10, c.attr("data-cast", "multi").attr("data-config", JSON.stringify(v)).html('<span class="jcbText">' + l.characterLineContent + "</span>").css({
			backgroundColor: RGBToHex(l.characterBgColor, ""),
			textAlign: l.characterLineAlign,
			fontSize: b.tParseInt(l.characterSize),
			lineHeight: w + "px",
			letterSpacing: b.tParseInt(l.characterLetterSpacing),

			fontWeight: l.characterWeight,
			fontFamily: l.characterFont,
			color: l.characterColor,
			textIndent: l.characterLineSpace + "px",
			wordBreak: "break-all",
			whiteSpace: "normal"
		}).tResize(), c.children(".jcbText").css({
			paddingTop: b.tParseInt(v.characterTBpadding) || 0,
			paddingBottom: b.tParseInt(v.characterTBpadding) || 0,
			paddingLeft: b.tParseInt(v.characterLeftPadding) || 0,
			paddingRight: b.tParseInt(v.characterRightPadding) || 0
		}), checkUrl(v.characterBgSrc) ? c.css({
			backgroundImage: "url(" + v.characterBgSrc + ")"
		}) : c.css({
			backgroundImage: "none"
		})) : (c.attr("data-cast", "no").css({
			wordBreak: "normal",
			whiteSpace: "nowrap"
		}), c.attr("data-config", JSON.stringify(v)).html('<span class="jcbText">' + q + "</span>").css({
			lineHeight: c.height() + "px",
			textAlign: l.characterAlign,
			backgroundColor: l.characterBgColor,
			fontSize: b.tParseInt(l.characterSize),
			letterSpacing: b.tParseInt(l.characterLetterSpacing),
			fontWeight: l.characterWeight,
			fontFamily: l.characterFont,
			color: l.characterColor
		}).tResize(), "auto" == l.characterWidthMode && (c.css({
			width: "auto",
			height: m,
			lineHeight: m + "px"
		}).tResize({
			tHandles: "n, s"
		}), v.characterLeftPadding && "" != v.characterLeftPadding && c.children(".jcbText").css({
			paddingLeft: v.characterLeftPadding + "px"
		}), v.characterRightPadding && "" != v.characterRightPadding && c.children(".jcbText").css({
			paddingRight: v.characterRightPadding + "px"
		})), checkUrl(v.characterBgSrc) ? c.css({
			backgroundImage: "url(" + v.characterBgSrc + ")"
		}) : c.css({
			backgroundImage: "none"
		})), c.attr("appID", l.appID), c.hasClass("j-app-qswz") || c.addClass("j-app-qswz")) : !e.hasClass("jwz") && e.hasClass("jspcb") ? (l = $.extend({}, b.qssetConfig), l.characterContent = e.html(), l.characterAlign = e.css("text-align") || "left", l.characterSize = e.css("font-size").replace(/px/g, ""), l.characterFont = e.css("font-family").replace(/'/g, ""), l.characterColor = RGBToHex(e.css("color")), l.characterBgColor = RGBToHex(e.css("background-color"), ""), l.characterWeight = e.css("font-weight"), "400" == l.characterWeight && (l.characterWeight = "normal"), e.hasClass("junefade") && (x = e.children("span"), x.length > 1 && (y = x.eq(1), l.characterContent = y.html(), l.characterColorHover = RGBToHex(y.css("color"), ""), l.characterBgColorHover = RGBToHex(y.css("background-color"), ""), l.characterHoverSpeed = y.attr("class").match(/trans(\w+)s/g), l.characterHoverSpeed = l.characterHoverSpeed && l.characterHoverSpeed.length > 0 ? l.characterHoverSpeed.join("") : "")), c.attr("data-cast", "no").css({
			wordBreak: "normal",
			whiteSpace: "nowrap"
		}), v = $.extend(!0, h, l), q = v.characterContent, c.html('<span class="jcbText">' + q + "</span>").css({
			lineHeight: c.height() + "px",
			textAlign: v.characterAlign,
			backgroundColor: v.characterBgColor,
			fontSize: b.tParseInt(v.characterSize),
			letterSpacing: b.tParseInt(v.characterLetterSpacing),
			fontWeight: v.characterWeight,
			fontFamily: v.characterFont,
			fontStyle: v.characterStyle || "normal",
			color: v.characterColor
		}).tResize(), "" != z && c.css("text-decoration", z), v.characterLeftPadding && "" != v.characterLeftPadding && c.children(".jcbText").css({
			paddingLeft: v.characterLeftPadding + "px"
		}), v.characterRightPadding && "" != v.characterRightPadding && c.children(".jcbText").css({
			paddingRight: v.characterRightPadding + "px"
		}), "auto" == l.characterWidthMode && c.css({
			width: "auto",
			height: m,
			lineHeight: m + "px"
		}).tResize({
			tHandles: "n, s"
		}), checkUrl(v.characterBgSrc) ? c.css({
			backgroundImage: "url(" + v.characterBgSrc + ")"
		}) : c.css({
			backgroundImage: "none"
		}), g = JSON.stringify(v)) : !e.hasClass("jwz") && e.hasClass("jdlb") ? (i = "jcb", l = $.extend({}, b.appConfig["jcb"][2]), l.appID = e.attr("data-appid"), l.href = e.children("a:eq(0)").attr("href") || "", l.hrefMode = e.children("a:eq(0)").attr("target"), l.characterLineMulti = "yes", l.characterLineContent = e.children("a:eq(0)").html(), l.characterLineHeight = e.children("a:eq(0)").css("line-height").replace(/px/g, ""), l.characterLineIndent = e.children("a:eq(0)").css("text-indent").replace(/px/g, ""), l.characterSize = e.children("a:eq(0)").css("font-size").replace(/px/g, ""), l.characterFont = e.children("a:eq(0)").css("font-family").replace(/'/g, ""), l.characterColor = RGBToHex(e.children("a:eq(0)").css("color")), l.characterWeight = e.children("a:eq(0)").css("font-weight"), "400" == l.characterWeight && (l.characterWeight = "normal"), v = $.extend(!0, h, l), c.attr("appID", l.appID), a.allSubmit(v, c), c.width(e.width()).height(e.height())) : e.hasClass("jwz") && (h = $.extend({}, b.qssetConfig), i = c.attr("data-dblType"), j = e.children("a:eq(0)"), l = {}, 0 == j.length && (j = c), "jcb" == i && (h = JSON.parse(c.attr("data-config")), l.appID = e.attr("data-appid"), l.href = j.attr("href") || "", l.hrefMode = j.attr("target"), l.tipText = "", e.attr("title") && "" != e.attr("title") && (l.tipText = e.attr("title"))), l.characterMode = e.attr("data-t") || "text", l.characterBgSrc = j.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.characterAlign = e.css("text-align") || "center", l.characterContent = j.html(), l.characterSize = j.css("font-size").replace(/px/g, ""), l.characterFont = j.css("font-family").replace(/'/g, ""), l.characterStyle = j.css("font-style") || "normal", l.characterColor = RGBToHex(j.css("color")), l.characterBgColor = RGBToHex(j.css("background-color"), ""), l.imgBgp = j.css("background-position") || "50% 50%", l.characterWeight = j.css("font-weight"), "400" == l.characterWeight && (l.characterWeight = "normal"), l.characterWidthMode = e.attr("data-w") || "normal", l.characterLetterSpacing = j.css("letter-spacing").replace(/px/g, ""), l.characterLineThrough = "", l.characterLineUnder = "", "yes" == e.attr("data-c") ? (l.characterLineMulti = "yes", l.characterLineContent = l.characterContent, l.characterContent = "", l.characterLineHeight = b.tParseInt(j.css("line-height")), l.characterLineAlign = l.characterAlign, l.characterAlign = "left", l.characterLineSpace = b.tParseInt(j.css("text-indent")), l.characterTBpadding = b.tParseInt(j.css("padding-top"))) : (l.characterLineMulti = "no", l.characterLineContent = "", l.characterLineHeight = "", l.characterLineAlign = "", l.characterLineSpace = ""), m = "", l.characterLeftPadding = Math.abs(b.tParseInt(j.css("padding-left"))), l.characterRightPadding = Math.abs(b.tParseInt(j.css("padding-right"))), "normal" != l.characterWidthMode && (m = b.tParseInt(j.css("line-height"))), e.children("a").length > 1 && (k = e.children("a:eq(1)"), l.characterUnderLine = "off", l.characterHoverMode = "on", l.characterHoverSpeed = k.attr("class").match(/trans(\w+)s/g), l.characterHoverSpeed = l.characterHoverSpeed && l.characterHoverSpeed.length > 0 ? l.characterHoverSpeed.join("") : "", l.characterBgSrcHover = k.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.characterSizeHover = k.css("font-size").replace(/px/g, ""), l.characterFontHover = k.css("font-family").replace(/'/g, ""), l.characterColorHover = RGBToHex(k.css("color")), l.characterBgColorHover = RGBToHex(k.css("background-color"), ""), l.characterWeightHover = k.css("font-weight"), "400" == l.characterWeightHover && (l.characterWeightHover = "normal"), l.characterUnderLineWeight = j.height() - k.height(), l.characterUnderLineWeight > 0 ? (l.characterUnderLine = "on", l.characterUnderLineStyle = k.css("border-bottom-style"), l.characterUnderLineColor = RGBToHex(k.css("border-bottom-color")), l.characterUnderLineWeight += "") : l.characterUnderLineWeight = "1", e.hasClass("shadowShow") && (l.shadowControl = "shadowShow", n = k.css("box-shadow"), n.indexOf("inset") >= 0 && (l.shadowStyle = "inset", n = $.trim(n.replace(/inset/g, ""))), n.indexOf("rgb") >= 0 && (o = RGBToHex(n.match(/rgb\((\S|\s)*\)/g)[0]), n = $.trim(n.replace(/rgb\((\S|\s)*\)/g, ""))), p = n.split(" "), p[0].indexOf("px") < 0 && p[0] ? ("" == o && (o = RGBToHex(p[0])), p.splice(0, 1)) : "" == o && (o = RGBToHex(p[4])), l.shadowColor = o, l.shadowLeft = b.tParseInt(p[0]), l.shadowTop = b.tParseInt(p[1]), l.shadowBlur = b.tParseInt(p[2]), l.shadowSize = b.tParseInt(p[3])), e.hasClass("hborder") && (l.borderControl = "hborder", l.borderColor = RGBToHex(k.css("border-color")), l.borderWidth = k.css("border-width") || "1px", l.borderWidth = l.borderWidth.replace(/px/g, ""), l.borderRadius = k.css("border-radius") || "0px", l.borderRadius = l.borderRadius.replace(/px/g, "")), e.hasClass("mcblack") && (l.mongoliaControl = "mongoliaShow", l.mongoliaMode = "mcblack"), e.hasClass("mcwhite") && (l.mongoliaControl = "mongoliaShow", l.mongoliaMode = "mcwhite")), j.css("text-decoration").indexOf("line-through") >= 0 && (l.characterLineThrough = "line-through"), j.css("text-decoration").indexOf("underline") >= 0 && (l.characterLineUnder = "underline"), q = l.characterContent, "text" != l.characterMode && (r = e.attr("data-h") || ";", s = r.split(";"), l.characterItemContent = s[0], l.characterContent = s[1], q = l.characterItemContent, ("price" == l.characterMode || "_price" == l.characterMode) && (t = q.split("."), l.characterFixed = t.length > 1 ? t[1].length : 0)), e.hasClass("shadowShow1") && (l.shadowControl1 = "shadowShow1", u = j.css("box-shadow"), u.indexOf("inset") >= 0 && (l.shadowStyle1 = "inset", u = $.trim(u.replace(/inset/g, ""))), u.indexOf("rgb") >= 0 && (o = RGBToHex(u.match(/rgb\((\S|\s)*\)/g)[0]), u = $.trim(u.replace(/rgb\((\S|\s)*\)/g, ""))), p = u.split(" "), p[0].indexOf("px") < 0 && p[0] ? ("" == o && (o = RGBToHex(p[0])), p.splice(0, 1)) : "" == o && (o = RGBToHex(p[4])), l.shadowColor1 = o, l.shadowLeft1 = b.tParseInt(p[0]), l.shadowTop1 = b.tParseInt(p[1]), l.shadowBlur1 = b.tParseInt(p[2]), l.shadowSize1 = b.tParseInt(p[3])), e.hasClass("hborder1") && (l.borderControl1 = "hborder1", l.borderColor1 = RGBToHex(j.css("border-color")), l.borderWidth1 = j.css("border-width") || "1px", l.borderWidth1 = l.borderWidth1.replace(/px/g, ""), l.borderRadius1 = j.css("border-radius") || "0px", l.borderRadius1 = l.borderRadius1.replace(/px/g, "")), e.hasClass("juneol") && (l.outlineControl = "outlineShow", l.outlineWidth = "juneol", l.outlineColor = RGBToHex(e.css("outline-color")), l.outlineShadowColor = RGBToHex(e.css("color")), l.outlineSpeed = e.attr("class").indexOf("trans") >= 0 ? e.attr("class").match(/trans(\w+)s/g).join("") : ""), e.hasClass("juneol1") && (l.outlineControl = "outlineShow", l.outlineWidth = "juneol1", l.outlineColor = RGBToHex(e.css("outline-color")), l.outlineShadowColor = RGBToHex(e.css("color")), l.outlineSpeed = e.attr("class").indexOf("trans") >= 0 ? e.attr("class").match(/trans(\w+)s/g).join("") : ""), e.hasClass("juneol2") && (l.outlineControl = "outlineShow", l.outlineWidth = "juneol2", l.outlineColor = RGBToHex(e.css("outline-color")), l.outlineShadowColor = RGBToHex(e.css("color")), l.outlineSpeed = e.attr("class").indexOf("trans") >= 0 ? e.attr("class").match(/trans(\w+)s/g).join("") : ""), z = "", l.characterLineThrough && "" != l.characterLineThrough && (z = l.characterLineThrough), l.characterLineUnder && "" != l.characterLineUnder && ("" == z ? z = l.characterLineUnder : z += " " + l.characterLineUnder), v = $.extend(!0, h, l), l.characterLineMulti && "yes" == l.characterLineMulti ? (w = l.characterLineHeight || b.tParseInt(l.characterSize) + 10, c.attr("data-cast", "multi").html('<span class="jcbText">' + l.characterLineContent + "</span>").css({
			backgroundColor: RGBToHex(l.characterBgColor, ""),
			textAlign: l.characterLineAlign,
			fontSize: b.tParseInt(l.characterSize),
			lineHeight: w + "px",
			letterSpacing: b.tParseInt(l.characterLetterSpacing),
			fontWeight: l.characterWeight,
			fontFamily: l.characterFont,
			fontStyle: h.characterStyle || "normal",
			color: l.characterColor,
			textIndent: l.characterLineSpace + "px",
			wordBreak: "break-all",
			whiteSpace: "normal"
		}).tResize(), "" != z && c.css("text-decoration", z), c.children(".jcbText").css({
			paddingTop: b.tParseInt(v.characterTBpadding) || 0,
			paddingBottom: b.tParseInt(v.characterTBpadding) || 0,
			paddingLeft: b.tParseInt(v.characterLeftPadding) || 0,
			paddingRight: b.tParseInt(v.characterRightPadding) || 0
		}), checkUrl(v.characterBgSrc) ? c.css({
			backgroundImage: "url(" + v.characterBgSrc + ")"
		}) : c.css({
			backgroundImage: "none"
		})) : (c.attr("data-cast", "no").css({
			wordBreak: "normal",
			whiteSpace: "nowrap"
		}), c.html('<span class="jcbText">' + q + "</span>").css({
			lineHeight: c.height() + "px",
			textAlign: l.characterAlign,
			backgroundColor: l.characterBgColor,
			fontSize: b.tParseInt(l.characterSize),
			letterSpacing: b.tParseInt(l.characterLetterSpacing),
			fontWeight: l.characterWeight,
			fontFamily: l.characterFont,
			fontStyle: v.characterStyle || "normal",
			color: l.characterColor
		}).tResize(), "" != z && c.css("text-decoration", z), v.characterLeftPadding && "" != v.characterLeftPadding && c.children(".jcbText").css({
			paddingLeft: v.characterLeftPadding + "px"
		}), v.characterRightPadding && "" != v.characterRightPadding && c.children(".jcbText").css({
			paddingRight: v.characterRightPadding + "px"
		}), "auto" == l.characterWidthMode && c.css({
			width: "auto",
			height: m,
			lineHeight: m + "px"
		}).tResize({
			tHandles: "n, s"
		}), checkUrl(v.characterBgSrc) ? c.css({
			backgroundImage: "url(" + v.characterBgSrc + ")"
		}) : c.css({
			backgroundImage: "none"
		})), "jcb" == i ? (c.attr("appID", l.appID).attr("data-config", JSON.stringify(v)), c.hasClass("j-app-qswz") || c.addClass("j-app-qswz")) : g = JSON.stringify(v)), f && "function" == typeof f && f(i, l.appID), "" != g ? g : void 0
	}, a.levelOneSubmit = function() {}, a.levelOneExport = function() {}, a.levelOneImport = function() {}, a
});