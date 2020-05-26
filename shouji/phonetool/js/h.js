$(function() {
	var e, f, g, a = require("scripts/D"),
		b = require("scripts/tAjax"),
		c = {
			zdyArea: "自定义热区",
			zdyItem: "自定义宝贝列表"
		};
	a.countOpacity = function(a, b) {
		return b ? Math.round(parseInt(a, 16) / 2.55) : Math.round(2.55 * a).toString(16).toUpperCase()
	}, a.countBoxPos = function(b, c, d, e) {
		b = a.tParseInt(b), c = a.tParseInt(c);
		var f, g, h, i, j, k, l = {};
		return j = d.width(), k = d.height(), f = a.tParseInt(d.css("left")), g = f + j, h = a.tParseInt(d.css("top")), i = h + k, j > b && (j = b, f = 0), k > c && (k = c, h = 0), g > b && (f = b - j), i > c && (h = c - k), l.width = j, l.height = k, l.top = h, l.left = f, e ? "width" == e ? j : "height" == e ? k : "top" == e ? h : "left" == e ? f : void 0 : l
	}, a.getItemInfo = function(b, c) {
		var g, h, i, j, k, l, d = $("#ptBaobeiDom"),
			e = d.children(".juneItemBox:eq(0)"),
			f = JSON.parse(d.attr("data-config") || "{}");
		switch (b) {
		case 0:
			k = e.children(".itemImg"), $("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				f.childConfig[a] ? ($(this).show(), $(this).find("input").val(f.childConfig[a].itemImg)) : $(this).hide()
			});
			break;
		case 1:
			k = e.children(".itemTitle"), $("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				f.childConfig[a] ? ($(this).show(), $(this).find("input").val(f.childConfig[a].itemTitle)) : $(this).hide()
			});
			break;
		case 2:
			k = e.children(".itemRprice"), $("#ptrp3prefix").val(f.itemRprefix), $("#ptrp3suffix").val(f.itemRsuffix);
			break;
		case 3:
			k = e.children(".itemPrice"), $("#ptrp4prefix").val(f.itemPprefix), $("#ptrp4suffix").val(f.itemPsuffix);
			break;
		case 4:
			k = e.children(".itemSale"), $("#ptrp5prefix").val(f.itemSprefix), $("#ptrp5suffix").val(f.itemSsuffix);
			break;
		case 5:
			k = e.children(".itemBtn"), $("#ptrp6img").val(f.itemBimg);
			break;
		case 6:
			k = e.children(".itemJimg"), $("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				f.childConfig[a] ? ($(this).show(), $(this).find("input").val(f.childConfig[a].itemJimg)) : $(this).hide()
			});
			break;
		default:
			k = e.children(".itemImg"), $("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				f.childConfig[a] ? ($(this).show(), $(this).find("input").val(f.childConfig[a].itemImg)) : $(this).hide()
			})
		}
		g = a.tParseInt(k.css("top")), h = a.tParseInt(k.css("left")), i = k.width(), j = k.height(), (1 == b || 2 == b || 3 == b || 4 == b) && ($("#ptrpCharcolor").val(RGBToHex(k.css("color"), "")), $("#ptrpCharfontSize").val(Math.ceil(1.2 * a.tParseInt(k.css("font-size")))), $("#ptrpCharbgColor").val(RGBToHex(k.children(".text-bg").css("background-color"), "")), $("#ptrpCharOpacity").val(a.tParseInt(100 * k.children(".text-bg").css("opacity"))), $("#ptrpCharAlign").val(k.css("text-align") || "center")), $("#ptrpZoordI1").val(i), $("#ptrpZoordI2").val(j), $("#ptrpZoordI3").val(h), $("#ptrpZoordI4").val(g), $("#ptrpSwitch").val("yes" == k.attr("data-hide") ? "off" : "on"), e.children(".itemSelected").removeClass("itemSelected"), k.addClass("itemSelected"), c || (l = $("#ptrpItemTabs").children("div.selected").index(), b != l && $("#ptrpItemTabs").children("div.ptrp-tab-c:eq(" + b + ")").trigger("click"))
	}, a.setItemInfo = function(b) {
		var i, k, c = b.val(),
			d = b.attr("id"),
			e = $("#ptBaobeiDom"),
			f = e.children(".juneItemBox"),
			g = JSON.parse(e.attr("data-config") || "{}"),
			j = $("#ptrpItemTabs").children("div.selected").index();
		switch (j) {
		case 0:
			for (i = f.children(".itemImg"), k = 0; 12 > k; k++) if (d == "ptrpJpgImg" + (k + 1)) {
				i.eq(k).children("img").attr("src", c), g.childConfig[k].itemImg = c;
				break
			}
			break;
		case 1:
			for (i = f.children(".itemTitle"), k = 0; 12 > k; k++) if (d == "ptrpJpgImg" + (k + 1)) {
				i.eq(k).html("" == c ? "此处自动读取宝贝标题" : c).tResize(), g.childConfig[k].itemTitle = c;
				break
			}
			"ptrpCharcolor" == d && (g.itemTcolor = c), "ptrpCharfontSize" == d && (g.itemTsize = c), "ptrpCharbgColor" == d && (g.itemTbgColor = c), "ptrpCharOpacity" == d && (g.itemTopacity = c), "ptrpCharAlign" == d && (g.itemTalign = c), "ptrp2line" == d && (i.attr("data-line", c).css("line-height", i.height() / c + "px"), "-1" == c && i.css("line-height", "normal"), g.itemTline = c);
			break;
		case 2:
			i = f.children(".itemRprice"), "ptrpCharcolor" == d && (g.itemRcolor = c), "ptrpCharfontSize" == d && (g.itemRsize = c), "ptrpCharbgColor" == d && (g.itemRbgColor = c), "ptrpCharOpacity" == d && (g.itemRopacity = c), "ptrpCharAlign" == d && (g.itemRalign = c), "ptrp3prefix" == d && (i.children(".prefix").html(c), g.itemRprefix = c), "ptrp3suffix" == d && (i.children(".suffix").html(c), g.itemRsuffix = c);
			break;
		case 3:
			i = f.children(".itemPrice"), "ptrpCharcolor" == d && (g.itemPcolor = c), "ptrpCharfontSize" == d && (g.itemPsize = c), "ptrpCharbgColor" == d && (g.itemPbgColor = c), "ptrpCharOpacity" == d && (g.itemPopacity = c), "ptrpCharAlign" == d && (g.itemPalign = c), "ptrp4prefix" == d && (i.children(".prefix").html(c), g.itemPprefix = c), "ptrp4suffix" == d && (i.children(".suffix").html(c), g.itemPsuffix = c);
			break;
		case 4:
			i = f.children(".itemSale"), "ptrpCharcolor" == d && (g.itemScolor = c), "ptrpCharfontSize" == d && (g.itemSsize = c), "ptrpCharbgColor" == d && (g.itemSbgColor = c), "ptrpCharOpacity" == d && (g.itemSopacity = c), "ptrpCharAlign" == d && (g.itemSalign = c), "ptrp5prefix" == d && (i.children(".prefix").html(c), g.itemSprefix = c), "ptrp5suffix" == d && (i.children(".suffix").html(c), g.itemSsuffix = c);
			break;
		case 5:
			i = f.children(".itemBtn"), "ptrp6img" == d && (i.children("img").attr("src", c), g.itemBimg = c);
			break;
		case 6:
			for (i = f.children(".itemJimg"), k = 0; 12 > k; k++) if (d == "ptrpJpgImg" + (k + 1)) {
				i.eq(k).children("img").attr("src", c), g.childConfig[k].itemJimg = c;
				break
			}
		}(1 == j || 2 == j || 3 == j || 4 == j) && ("ptrpCharcolor" == d && i.css("color", c), "ptrpCharfontSize" == d && i.css("font-size", c * (5 / 6) + "px"), "ptrpCharbgColor" == d && i.children(".text-bg").css("background-color", c), "ptrpCharOpacity" == d && i.children(".text-bg").css("opacity", c / 100), "ptrpCharAlign" == d && i.css("text-align", c)), "ptrpZoordI1" == d && i.width(c), "ptrpZoordI2" == d && i.height(c), "ptrpZoordI3" == d && i.css("left", a.tParseInt(c)), "ptrpZoordI4" == d && i.css("top", a.tParseInt(c)), a.countImgPos(i, 0 != j), "ptrpSwitch" == d && ("off" == c ? i.hide().attr("data-hide", "yes") : i.show().attr("data-hide", "no")), e.attr("data-config", JSON.stringify(g))
	}, a.ptKeyMove = function(b, c) {
		var d = "itemImg",
			e = $("#ptBaobeiDom"),
			f = e.children(".juneItemBox");
		clearTimeout(a.ptKeyTimeout), a.ptKeySpace++, b.hasClass("itemTitle") ? d = "itemTitle" : b.hasClass("itemRprice") ? d = "itemRprice" : b.hasClass("itemPrice") ? d = "itemPrice" : b.hasClass("itemSale") ? d = "itemSale" : b.hasClass("itemBtn") ? d = "itemBtn" : b.hasClass("itemJimg") && (d = "itemJimg"), f.children("." + d).each(function() {
			var b = $(this),
				d = a.tParseInt(b.css("left")),
				e = a.tParseInt(b.css("top"));
			37 == c ? (d -= a.ptKeySpace, 0 > d && (d = 0)) : 38 == c ? (e -= a.ptKeySpace, 0 > e && (e = 0)) : 39 == c ? (d += a.ptKeySpace, d > f.width() - b.width() && (d = f.width() - b.width())) : 40 == c && (e += a.ptKeySpace, e > f.height() - b.height() && (e = f.height() - b.height())), b.css({
				top: e,
				left: d
			})
		}), a.getItemInfo(b.index()), a.ptKeyTimeout = setTimeout(function() {
			a.ptKeySpace = 0
		}, 50)
	}, a.d.off("contextmenu"), a.june.css("background-image", "none"), a.tAutoSaveUsedSwitch = !1, $("#phoneToolRightPanel").hide(), $("#phoneToolRightPanel1").hide(), $(".t-control-btns-appset").hide(), $("#phoneToolInput1").hide(), $("#morephonetools").on("click", function() {
		var b = $("#morephonetoolsbox").attr("data-status") || "close";
		"close" == b ? $("#morephonetoolsbox").slideDown(100).attr("data-status", "open") : $("#morephonetoolsbox").slideUp(100).attr("data-status", "close")
	}), e = !0, f = !1, $("#morephonetoolsbox").on("click", "li", function() {
		var d = require("scripts/drawPTBaoBei"),
			f = $("#morephonetoolsbox").attr("data-toolType"),
			g = $(this).attr("data-toolType");
		g != f && a.tConfirm("是否确认将无线工具模式切换为" + c[g] + "？", function() {
			$.cookie("phoneToolType", g), $("#morephonetoolsbox").slideUp(100).attr("data-toolType", g).attr("data-status", "close"), $("#morephonetoolsbox").children("ul").children("li.selected").removeClass("selected"), $("#morephonetoolsbox").children("ul").children("li[data-toolType='" + g + "']").addClass("selected"), a.dump.html(""), a.june.html('<div class="june-imgBg" style="width:640px;"></div>'), a.layerList.html(""), a.dumpLayer.html(""), a.popupContent.html(""), "zdyItem" == g ? (a.june.children(".june-imgBg").css("position", "absolute"), $("#phoneToolInput1").show(), $("#phoneToolInput").hide(), $(".t-control-btns-close").css("visibility", "hidden"), d.create(), $("#phoneToolRightPanel").hide(), $("#phoneToolRightPanel1").show(), $("#ptrpItemTabs div.ptrp-tab-c:eq(0)").trigger("click"), e && (a.setSnap(!1, 5, 5, 0, 0), e = !1)) : (a.june.children(".june-imgBg").css("position", "static"), $("#phoneToolRightPanel1").hide(), $("#phoneToolInput").show(), $("#phoneToolInput").find(".pti-remove").trigger("click"), $("#phoneToolInput").find("input[type='text']").val("").trigger("change"), $("#phoneToolInput1").hide(), $(".t-control-btns-close").css("visibility", "visible"))
		})
	}), 0 == a.june.children(".june-imgBg").length && $('<div class="june-imgBg" style="width:640px;"></div>').appendTo(a.june), $("#phoneToolBtnAddBB").on("click", function() {
		var a = require("scripts/drawPTBaoBei");
		a.create()
	}), $("#phoneToolBtnAdd").on("click", function() {
		var c = $("#phoneToolInput").children(".c-ptiModuleBg").length;
		return c >= 5 ? (a.tMessage("最多只能添加5个背景图片"), void 0) : ($(this).before('<div class="pti-label ptiImgName"><span class="pti-img-name">图片' + (c + 1) + '：</span><span class="pti-movedown"></span><span class="pti-moveup"></span><span class="pti-remove"></span></div>' + '<div class="pti-content c-ptiModuleBg">' + '<input type="text" name="ptiModuleBg' + (c + 1) + '" value="" class="textinput "/>' + '<div class="pti-img-box"></div>' + "</div>"), void 0)
	}), $("#phoneToolInput").on("click", "span.pti-remove", function() {
		var c = $("#phoneToolInput").children(".ptiImgName").index($(this).parent());
		$(this).parent().next().remove(), $(this).parent().remove(), a.june.children(".june-imgBg").children("img:eq(" + c + ")").remove(), $("#phoneToolInput").children(".ptiImgName").each(function(a) {
			$(this).children(".pti-img-name").html("图片" + (a + 1) + "：")
		}), $("#phoneToolInput").children(".c-ptiModuleBg").each(function(a) {
			$(this).children("input").attr("name", "ptiModuleBg" + (a + 1))
		}), $("#ptiModuleHeight").trigger("change")
	}), $("#phoneToolInput").on("click", "span.pti-movedown", function() {
		var d, g, h, j, c = $("#phoneToolInput").children(".ptiImgName").index($(this).parent()),
			e = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + c + ")").children("input"),
			f = e.val(),
			i = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + c + ")").children(".pti-img-box"),
			k = a.june.children(".june-imgBg").children("img:eq(" + c + ")");
		k.next().length > 0 && (k.before(k.next()), d = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + (c + 1) + ")").children("input"), g = d.val(), d.val(f), e.val(g), h = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + (c + 1) + ")").children(".pti-img-box"), j = h.html(), h.html(i.html()), i.html(j))
	}), $("#phoneToolInput").on("click", "span.pti-moveup", function() {
		var d, g, h, j, c = $("#phoneToolInput").children(".ptiImgName").index($(this).parent()),
			e = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + c + ")").children("input"),
			f = e.val(),
			i = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + c + ")").children(".pti-img-box"),
			k = a.june.children(".june-imgBg").children("img:eq(" + c + ")");
		k.prev().length > 0 && (k.after(k.prev()), d = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + (c - 1) + ")").children("input"), g = d.val(), d.val(f), e.val(g), h = $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + (c - 1) + ")").children(".pti-img-box"), j = h.html(), h.html(i.html()), i.html(j))
	}), $("#phoneToolInput").off("change").on("change", "input[type='text']", function() {
		var g, h, d = $(this),
			e = d.attr("name"),
			f = d.val();
		e && ("ptiModuleHeight" == e && ("" == f && (g = 0, a.june.children(".june-imgBg").children("img").each(function() {
			g += $(this).height()
		}), f = g > 0 ? g : 2560), a.june.height(f)), e.indexOf("ptiModuleBg") >= 0 && (h = $("#phoneToolInput").children(".c-ptiModuleBg").index(d.parent()), checkUrl(f) && (a.june.children(".june-imgBg").children("img:eq(" + h + ")").length > 0 ? a.june.children(".june-imgBg").children("img:eq(" + h + ")").prop("src", f) : a.june.children(".june-imgBg").append('<img width="640" src="' + f + '" />'), b.ajaxJsonForGis({
			img: f
		}, function(b) {
			var c = 0;
			(0 == $(".pti-img-box:eq(" + h + ")").children("img").length || $(".pti-img-box:eq(" + h + ")").children("img").attr("src") != f) && (a.tParseInt(b[0]) > a.tParseInt(b[1]) ? $(".pti-img-box:eq(" + h + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><img src="' + f + '" width="142" /><span>') : $(".pti-img-box:eq(" + h + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><img src="' + f + '" height="142" /></span>')), a.june.children(".june-imgBg").children("img").each(function() {
				c += $(this).height()
			}), a.june.height(c)
		})), "" == f && $(".pti-img-box:eq(" + h + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><span>')))
	}).off("keyup").on("keyup", "input[type='text']", function() {
		var g, h, d = $(this),
			e = d.attr("name"),
			f = d.val();
		e && ("ptiModuleHeight" == e && ("" == f && (g = 0, a.june.children(".june-imgBg").children("img").each(function() {
			g += $(this).height()
		}), f = g > 0 ? g : 2560), a.june.height(f)), e.indexOf("ptiModuleBg") >= 0 && (h = $("#phoneToolInput").children(".c-ptiModuleBg").index(d.parent()), checkUrl(f) && (a.june.children(".june-imgBg").children("img:eq(" + h + ")").length > 0 ? a.june.children(".june-imgBg").children("img:eq(" + h + ")").prop("src", f) : a.june.children(".june-imgBg").append('<img width="640" src="' + f + '" />'), b.ajaxJsonForGis({
			img: f
		}, function(b) {
			var c = 0;
			a.tParseInt(b[0]) > a.tParseInt(b[1]) ? $(".pti-img-box:eq(" + h + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><img src="' + f + '" width="142" /><span>') : $(".pti-img-box:eq(" + h + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><img src="' + f + '" height="142" /></span>'), a.june.children(".june-imgBg").children("img").each(function() {
				c += $(this).height()
			}), a.june.height(c)
		})), "" == f && $(".pti-img-box:eq(" + h + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><span>')))
	}), g = null, $("#phoneToolInput1").on("change keyup", "select", function() {
		var b = require("scripts/drawPTBaoBei"),
			c = $(this),
			d = c.attr("name"),
			e = c.val(),
			f = $("#ptBaobeiDom").attr("data-config") ? JSON.parse($("#ptBaobeiDom").attr("data-config")) : a.appConfig["jphonetooli"][2];
		d && ("pti1ItemColumn" == d && (f.itemColumn = e || 2, b.init($("#ptBaobeiDom"), f)), "pti1ItemCount" == d && (f.itemCount = e || 6, b.init($("#ptBaobeiDom"), f)))
	}).on("change keyup", "input[type='text']", function() {
		var i, c = require("scripts/drawPTBaoBei"),
			d = $(this),
			e = d.attr("name"),
			f = d.val(),
			h = $("#ptBaobeiDom").attr("data-config") ? JSON.parse($("#ptBaobeiDom").attr("data-config")) : a.appConfig["jphonetooli"][2];
		e && ("pti1ItemHeight" == e && ("" == f && (f = 400), $("#ptBaobeiDom").children(".juneItemBox").height(f), h.itemHeight = f, clearTimeout(g), g = setTimeout(function() {
			c.init($("#ptBaobeiDom"), h)
		}, 2e3)), e.indexOf("pti1ItemOuterSpace") >= 0 && (h.itemOuterSpace = f || 0, c.init($("#ptBaobeiDom"), h)), e.indexOf("pti1ItemInnerSpace") >= 0 && (h.itemInnerSpace = f || 0, c.init($("#ptBaobeiDom"), h)), "pti1ItemBgColor" == e && ($("#ptBaobeiDom").children(".juneItemBox").css("background-color", f), h.itemBgColor = f, $("#ptBaobeiDom").attr("data-config", JSON.stringify(h))), "pti1ModuleBg" == e && (i = 0, checkUrl(f) && (a.june.children(".june-imgBg").children("img:eq(" + i + ")").length > 0 ? a.june.children(".june-imgBg").children("img:eq(" + i + ")").prop("src", f) : a.june.children(".june-imgBg").append('<img height="' + a.june.height() + '" src="' + f + '" style="position:absolute;" />'), a.countImgPos(a.june.children(".june-imgBg"), !0), b.ajaxJsonForGis({
			img: f
		}, function(b) {
			(0 == $(".pti1-img-box:eq(" + i + ")").children("img").length || $(".pti-img-box:eq(" + i + ")").children("img").attr("src") != f) && (a.tParseInt(b[0]) > a.tParseInt(b[1]) ? $(".pti1-img-box:eq(" + i + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><img src="' + f + '" width="142" /><span>') : $(".pti1-img-box:eq(" + i + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><img src="' + f + '" height="142" /></span>'))
		})), "" == f && $(".pti1-img-box:eq(" + i + ")").html('<span style="display:table-cell;vertical-align:middle;text-align:center;width:142px;height:142px;"><span>')))
	}), $("#phoneToolRightPanel1").on("change", "input", function() {
		var c = $(this);
		a.setItemInfo(c)
	}).on("keyup", "input", function() {
		var c = $(this);
		a.setItemInfo(c)
	}).on("change", "select", function() {
		var c = $(this);
		a.setItemInfo(c)
	}), $("#ptrpItemTabs").on("click", "div.ptrp-tab-c", function() {
		var c = $(this),
			d = c.index();
		switch ($("#ptrpItemTabs").children("div.selected").removeClass("selected"), c.addClass("selected"), $("#ptrpItemBox").children(".ptrp-ul-set").hide(), $("#ptrpJpgUl").hide(), $("#ptrpCharUl").hide(), a.getItemInfo(d, !0), d) {
		case 0:
			$("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				$(this).children(".ptrp-label").html("主图" + (a + 1) + "：")
			}), $("#ptrpJpgUl").show(), $("#ptrp1Ul").show(), $("#ptrpItemDesc").html("图片仅支持jpg、png格式，可上下调整显示顺序，留空则自动获取宝贝的默认主图");
			break;
		case 1:
			$("#ptrpCharUl").show(), $("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				$(this).children(".ptrp-label").html("标题" + (a + 1) + "：")
			}), $("#ptrpJpgUl").show(), $("#ptrp2Ul").show(), $("#ptrpItemDesc").html("标题样式为通用元素，可鼠标拖动或输入区域坐标调整位置，设置后所有宝贝标题全部生效");
			break;
		case 2:
			$("#ptrpCharUl").show(), $("#ptrp3Ul").show(), $("#ptrpItemDesc").html("原价样式为通用元素，可鼠标拖动或输入区域坐标调整位置，设置后所有宝贝原价全部生效");
			break;
		case 3:
			$("#ptrpCharUl").show(), $("#ptrp4Ul").show(), $("#ptrpItemDesc").html("现价样式为通用元素，可鼠标拖动或输入区域坐标调整位置，设置后所有宝贝现价全部生效");
			break;
		case 4:
			$("#ptrpCharUl").show(), $("#ptrp5Ul").show(), $("#ptrpItemDesc").html("销量样式为通用元素，可鼠标拖动或输入区域坐标调整位置，设置后所有宝贝现价全部生效");
			break;
		case 5:
			$("#ptrp6Ul").show(), $("#ptrpItemDesc").html("购买按钮为通用元素，图片仅支持jpg、png格式，可鼠标拖动或输入区域坐标调整位置");
			break;
		case 6:
			$("#ptrpJpgUl").children(".ptrp-li1").each(function(a) {
				$(this).children(".ptrp-label").html("角标" + (a + 1) + "：")
			}), $("#ptrpJpgUl").show(), $("#ptrp7Ul").show(), $("#ptrpItemDesc").html("图片仅支持jpg、png格式，可鼠标拖动或输入区域坐标调整位置，实现显示尺寸根据设置的宽度而定（例如：上传200X200的角标，设置为“宽300、高300”，则实际为放大拉伸到300X300显示）");
			break;
		default:
			$("#ptrpJpgUl").show(), $("#ptrp1Ul").show(), $("#ptrpItemDesc").html("图片仅支持jpg、png格式，可上下调整显示顺序，留空则自动获取宝贝的默认主图")
		}
	}), a.php_codeforgen = "phonetool/code.php", a.contrast.jphonetoolb = "无线热点", a.appConfig.jphonetoolb = ['<div class="t-app" data-dblType="jphonetoolb" style="background-color: rgba(0, 0, 0, 0.3)"></div>',
	{
		tTitle: "无线热点设置",
		tSubmit: function(a, b) {
			b.attr("data-config", JSON.stringify(a))
		},
		codeExport: function(b) {
			var c = JSON.parse(b.attr("data-config")),
				d = {},
				e = b.width(),
				f = b.height(),
				g = a.tParseInt(b.css("top")),
				h = a.tParseInt(b.css("left"));
			return d.width = e, d.height = f, d.top = g, d.left = h, "mobile" == c.hrefType && (c.href = c.hrefY), d.href = c.href, d.
			switch = "false", d
		}
	}, {
		appID: "",
		hrefType: "mobile",
		hrefTypeValue: "",
		href: "#",
		hrefX: "",
		hrefY: "#"
	}], a.contrast.jphonetooli = "宝贝列表", a.appConfig.jphonetooli = ['<div id="ptBaobeiDom" class="t-app" data-dblType="jphonetooli"></div>',
	{
		tTitle: "宝贝列表设置",
		tSubmit: function(a, b) {
			b.attr("data-config", JSON.stringify(a))
		},
		codeExport: function(b) {
			var c = JSON.parse(b.attr("data-config")),
				d = {},
				i = (b.width(), b.height(), a.tParseInt(b.css("top")), a.tParseInt(b.css("left")), a.countOpacity(c.itemTopacity)),
				j = a.countOpacity(c.itemRopacity),
				k = a.countOpacity(c.itemPopacity),
				l = a.countOpacity(c.itemSopacity),
				m = b.children(".juneItemBox:eq(0)"),
				n = m.children(".itemImg"),
				o = m.children(".itemTitle"),
				p = m.children(".itemRprice"),
				q = m.children(".itemPrice"),
				r = m.children(".itemSale"),
				s = m.children(".itemBtn"),
				t = m.children(".itemJimg");
			return "FF" == i && (i = ""), "FF" == j && (j = ""), "FF" == k && (k = ""), "FF" == l && (l = ""), d.childConfig = [], d.moduleHeight = a.june.height(), d.moduleBg = $("#pti1ModuleBg").val(), d.tBitemWidth = m.width(), d.tBitemHeight = m.height(), d.tBitemBgColor = c.itemBgColor, d.tBitemIwidth = n.width(), d.tBitemIheight = n.height(), d.tBitemItop = a.tParseInt(n.css("top")), d.tBitemIleft = a.tParseInt(n.css("left")), "yes" == n.attr("data-hide") && (d.tBitemIwidth = d.tBitemIheight = 0), d.tBitemTwidth = o.width(), d.tBitemTheight = o.height(), d.tBitemTtop = a.tParseInt(o.css("top")), d.tBitemTleft = a.tParseInt(o.css("left")), d.tBitemTcolor = RGBToHex(c.itemTcolor, ""), d.tBitemTbgColor = "#" + i + RGBToHex(c.itemTbgColor, "").substr(1), d.tBitemTsize = c.itemTsize, d.tBitemTalign = c.itemTalign, d.tBitemTline = c.itemTline, "yes" == o.attr("data-hide") && (d.tBitemTwidth = d.tBitemTheight = 0), d.tBitemRwidth = p.width(), d.tBitemRheight = p.height(), d.tBitemRtop = a.tParseInt(p.css("top")), d.tBitemRleft = a.tParseInt(p.css("left")), d.tBitemRcolor = RGBToHex(c.itemRcolor, ""), d.tBitemRbgColor = "#" + j + RGBToHex(c.itemRbgColor, "").substr(1), d.tBitemRsize = c.itemRsize, d.tBitemRalign = c.itemRalign, d.tBitemRprefix = c.itemRprefix, d.tBitemRsuffix = c.itemRsuffix, "yes" == p.attr("data-hide") && (d.tBitemRwidth = d.tBitemRheight = 0), d.tBitemPwidth = q.width(), d.tBitemPheight = q.height(), d.tBitemPtop = a.tParseInt(q.css("top")), d.tBitemPleft = a.tParseInt(q.css("left")), d.tBitemPcolor = RGBToHex(c.itemPcolor, ""), d.tBitemPbgColor = "#" + k + RGBToHex(c.itemPbgColor, "").substr(1), d.tBitemPsize = c.itemPsize, d.tBitemPalign = c.itemPalign, d.tBitemPprefix = c.itemPprefix, d.tBitemPsuffix = c.itemPsuffix, "yes" == q.attr("data-hide") && (d.tBitemPwidth = d.tBitemPheight = 0), d.tBitemSwidth = r.width(), d.tBitemSheight = r.height(), d.tBitemStop = a.tParseInt(r.css("top")), d.tBitemSleft = a.tParseInt(r.css("left")), d.tBitemScolor = RGBToHex(c.itemScolor, ""), d.tBitemSbgColor = "#" + l + RGBToHex(c.itemSbgColor, "").substr(1), d.tBitemSsize = c.itemSsize, d.tBitemSalign = c.itemSalign, d.tBitemSprefix = c.itemSprefix, d.tBitemSsuffix = c.itemSsuffix, "yes" == r.attr("data-hide") && (d.tBitemSwidth = d.tBitemSheight = 0), d.tBitemBwidth = s.width(), d.tBitemBheight = s.height(), d.tBitemBtop = a.tParseInt(s.css("top")), d.tBitemBleft = a.tParseInt(s.css("left")), d.tBitemBimg = c.itemBimg, "yes" == s.attr("data-hide") && (d.tBitemBwidth = d.tBitemBheight = 0), d.tBitemJwidth = t.width(), d.tBitemJheight = t.height(), d.tBitemJtop = a.tParseInt(t.css("top")), d.tBitemJleft = a.tParseInt(t.css("left")), "yes" == t.attr("data-hide") && (d.tBitemJwidth = d.tBitemJheight = 0), b.children(".juneItemBox").each(function(b) {
				var f = $(this);
				d.childConfig[b] = {}, d.childConfig[b].dBitemSet = "true", d.childConfig[b].dBitemTop = a.tParseInt(f.css("top")), d.childConfig[b].dBitemLeft = a.tParseInt(f.css("left")), d.childConfig[b].dBitemImg = c.childConfig[b].itemImg, d.childConfig[b].dBitemTitle = c.childConfig[b].itemTitle, d.childConfig[b].dBitemJimg = c.childConfig[b].itemJimg
			}), d
		},
		baobeiDom: '<div class="juneItemBox"><div class="itemImg" style="z-index:101;"></div><div class="itemTitle" style="z-index:101;"></div><div class="itemRprice" style="z-index:101;"></div><div class="itemPrice" style="z-index:101;"></div><div class="itemSale" style="z-index:101;"></div><div class="itemBtn" style="z-index:101;"></div><div class="itemJimg" style="z-index:101;"></div></div>',
		childBB: {
			itemSet: "true",
			itemImg: "https://img.alicdn.com/imgextra/i1/39767794/TB2ZkYZiXXXXXccXpXXXXXXXXXX-39767794.jpg",
			itemTitle: "测试标题棉衣男 修身连帽冬装棉袄短款青年潮牌外套韩版男士棉服",
			itemJimg: "https://img.alicdn.com/imgextra/i2/39767794/TB2ZF2jjVXXXXb2XXXXXXXXXXXX-39767794.jpg"
		}
	}, {
		appID: "",
		itemCount: "6",
		itemColumn: "2",
		itemOuterSpace: "16",
		itemInnerSpace: "16",
		itemWidth: "296",
		itemHeight: "488",
		itemBgColor: "#FFFFFF",
		itemIswitch: "1",
		itemTswitch: "1",
		itemRswitch: "1",
		itemPswitch: "1",
		itemSswitch: "1",
		itemBswitch: "1",
		itemJswitch: "1",
		itemTcolor: "#313131",
		itemTbgColor: "#FFFFFF",
		itemTsize: "24",
		itemTalign: "left",
		itemTopacity: "100",
		itemTline: "-1",
		itemRcolor: "#767676",
		itemRbgColor: "#FFFFFF",
		itemRsize: "24",
		itemRopacity: "100",
		itemRalign: "left",
		itemRprefix: "原价 ",
		itemRsuffix: "",
		itemPcolor: "#323232",
		itemPbgColor: "#FFFFFF",
		itemPsize: "24",
		itemPopacity: "100",
		itemPalign: "left",
		itemPprefix: "RMB ",
		itemPsuffix: "",
		itemScolor: "#7d7d7d",
		itemSbgColor: "#FFFFFF",
		itemSsize: "24",
		itemSopacity: "100",
		itemSalign: "left",
		itemSprefix: "已售 ",
		itemSsuffix: "",
		itemBimg: "https://img.alicdn.com/imgextra/i3/39767794/TB2kyzmjVXXXXaLXXXXXXXXXXXX-39767794.jpg",
		childConfig: []
	}], a.countImgPos = function(a, b) {
		a.children("img").length > 0 && (_width = a.width(), _height = a.height(), b ? a.children("img").width(_width).height(_height) : (_wh = _width > _height ? _width : _height, a.children("img").width(_wh).height(_wh).css("top", -_wh / 2).css("margin-top", _height / 2).css("left", -_wh / 2).css("margin-left", _width / 2)))
	}, a.ptResizeProcess = function(b) {
		var c, e, g;
		(b.hasClass("itemImg") || b.parent().hasClass("itemImg") || b.hasClass("itemBtn") || b.parent().hasClass("itemBtn") || b.hasClass("itemJimg") || b.parent().hasClass("itemJimg")) && (c = b, (b.parent().hasClass("itemImg") || b.parent().hasClass("itemBtn")) && (c = b.parent()), a.countImgPos(c, !c.hasClass("itemImg"))), (b.hasClass("itemTitle") || b.parent().hasClass("itemTitle")) && (c = b, b.parent().hasClass("itemTitle") && (c = b.parent()), e = c.height(), g = c.attr("data-line") || 1, c.css("line-height", e / g + "px")), (b.hasClass("itemRprice") || b.parent().hasClass("itemRprice") || b.hasClass("itemPrice") || b.parent().hasClass("itemPrice") || b.hasClass("itemSale") || b.parent().hasClass("itemSale")) && (c = b, (b.parent().hasClass("itemRprice") || b.parent().hasClass("itemPrice") || b.parent().hasClass("itemSale")) && (c = b.parent()), e = c.height(), g = 1, c.css("line-height", e / g + "px"))
	}, "zdyItem" == $.cookie("phoneToolType") &&
	function(b) {
		var c = require("scripts/drawPTBaoBei");
		f = !0, $.cookie("phoneToolType", b), $("#morephonetoolsbox").slideUp(100).attr("data-toolType", b).attr("data-status", "close"), $("#morephonetoolsbox").children("ul").children("li.selected").removeClass("selected"), $("#morephonetoolsbox").children("ul").children("li[data-toolType='" + b + "']").addClass("selected"), a.dump.html(""), a.june.html('<div class="june-imgBg" style="width:640px;"></div>'), a.layerList.html(""), a.dumpLayer.html(""), a.popupContent.html(""), a.june.children(".june-imgBg").css("position", "absolute"), $("#phoneToolInput1").show(), $("#phoneToolInput").hide(), $(".t-control-btns-close").css("visibility", "hidden"), c.create(), $("#phoneToolRightPanel").hide(), $("#phoneToolRightPanel1").show(), $("#ptrpItemTabs div.ptrp-tab-c:eq(0)").trigger("click"), e && (a.setSnap(!1, 5, 5, 0, 0), e = !1), f = !1
	}("zdyItem")
}), define("scripts/ptDragSync.js", function(a) {
	var b = require("scripts/D");
	return a.dragSync = function(a) {
		var c, b = $("#ptBaobeiDom"),
			d = a.css("top"),
			e = a.css("left");
		a.hasClass("itemImg") ? c = "itemImg" : a.hasClass("itemTitle") ? c = "itemTitle" : a.hasClass("itemRprice") ? c = "itemRprice" : a.hasClass("itemPrice") ? c = "itemPrice" : a.hasClass("itemSale") ? c = "itemSale" : a.hasClass("itemBtn") ? c = "itemBtn" : a.hasClass("itemJimg") && (c = "itemJimg"), c && b.children(".juneItemBox").each(function() {
			$(this).children("." + c).css({
				top: d,
				left: e
			})
		})
	}, a.resizeSync = function(a) {
		var d, c = $("#ptBaobeiDom"),
			e = a.css("top"),
			f = a.css("left"),
			g = a.css("width"),
			h = a.css("height");
		a.hasClass("itemImg") ? d = "itemImg" : a.hasClass("itemTitle") ? d = "itemTitle" : a.hasClass("itemRprice") ? d = "itemRprice" : a.hasClass("itemPrice") ? d = "itemPrice" : a.hasClass("itemSale") ? d = "itemSale" : a.hasClass("itemBtn") ? d = "itemBtn" : a.hasClass("itemJimg") && (d = "itemJimg"), d && c.children(".juneItemBox").each(function() {
			var i = $(this).children("." + d);
			i.css({
				top: e,
				left: f,
				width: g,
				height: h
			}), b.ptResizeProcess(i)
		})
	}, a
}), define("scripts/ptDrag.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/ptDragSync");
	return a.Start = function(a) {
		var c;
		"june" != a.target.id && "zdybox" != a.target.id && (c = $(a.target), c.hasClass(b.rhClsVal) || 0 != c.children("." + b.rhClsVal).length && (b.dragStartX && b.dragStartY || (b.dragStartX = a.pageX, b.dragStartY = a.pageY, c.hasClass(b.dragNaClsVal) || b.dragSwitch && (b.ptDragEle = c, b.dragX[0] = b.dragStartX - c.offset().left, b.dragY[0] = b.dragStartY - c.offset().top, b.snapSwitch && (b.snapEle = b.ptDragEle)))))
	}, a.Ing = function(a) {
		var c, d, e;
		b.dragSwitch && ($(a.target).hasClass(b.rhClsVal) || (c = a.shiftKey, b.ptDragEle && (d = a.pageX, e = a.pageY, c ? b.Dragdirection || (d != b.dragStartX ? b.Dragdirection = "x" : e != b.dragStartY && (b.Dragdirection = "y")) : b.Dragdirection = null, b.ptDragEle.each(function(a) {
			if (!$(this).hasClass(b.dragNaClsVal)) {
				var f = d - b.dragX[a],
					g = e - b.dragY[a],
					h = b.ptItemBox.offset();
				f + $(this).width() + b.ptItemBox.scrollLeft() > b.ptItemBox.width() + h.left && (f = b.ptItemBox.width() + h.left - $(this).width() - b.ptItemBox.scrollLeft()), g + $(this).height() + b.ptItemBox.scrollTop() > b.ptItemBox.height() + h.top && (g = b.ptItemBox.height() + h.top - $(this).height() - b.ptItemBox.scrollTop()), f < h.left - b.ptItemBox.scrollLeft() && (f = h.left - b.ptItemBox.scrollLeft()), g < h.top - b.ptItemBox.scrollTop() && (g = h.top - b.ptItemBox.scrollTop()), "x" == b.Dragdirection ? $(this).offset({
					left: f
				}) : "y" == b.Dragdirection ? $(this).offset({
					top: g
				}) : $(this).offset({
					left: f,
					top: g
				})
			}
		}))))
	}, a.End = function(a) {
		if (b.ptDragEle) {
			var f, d = a.pageX,
				e = a.pageY;
			b.ptDragEle.each(function(a) {
				if (!$(this).hasClass(b.dragNaClsVal)) {
					var h = ($(this), d - b.dragX[a]),
						i = e - b.dragY[a],
						j = b.ptItemBox.offset();
					h + $(this).width() + b.ptItemBox.scrollLeft() > b.ptItemBox.width() + j.left && (h = b.ptItemBox.width() + j.left - $(this).width() - b.ptItemBox.scrollLeft()), i + $(this).height() + b.ptItemBox.scrollTop() > b.ptItemBox.height() + j.top && (i = b.ptItemBox.height() + j.top - $(this).height() - b.ptItemBox.scrollTop()), h < j.left - b.ptItemBox.scrollLeft() && (h = j.left - b.ptItemBox.scrollLeft()), i < j.top - b.ptItemBox.scrollTop() && (i = j.top - b.ptItemBox.scrollTop()), "x" == b.Dragdirection ? $(this).offset({
						left: h
					}) : "y" == b.Dragdirection ? $(this).offset({
						top: i
					}) : $(this).offset({
						left: h,
						top: i
					}), c.dragSync($(this))
				}
			}), f = b.ptDragEle.index(), b.getItemInfo(f)
		}
		b.Dragdirection = null, b.dragX = [], b.dragY = []
	}, a
}), define("scripts/drawPTBaoBei.js", function(a) {
	var b = require("scripts/D"),
		d = (b.appConfig, require("scripts/ptDragSync")),
		e = require("scripts/appManage");
	return require("scripts/UI_Dialog"), a.create = function() {
		var g, i, c = b.appConfig["jphonetooli"],
			d = c[1],
			f = d.baobeiDom,
			h = $("#ptBaobeiDom");
		if (0 == h.length) {
			for (g = c[2], b.setAppID(g), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), h = $(c[0]).appendTo(b.june).show(), h.attr("appID", g.appID), i = 0; i < g.itemCount; i++) g.childConfig.push(d.childBB), h.append(f);
			a.init(h, g, !0), e.callback("jphonetooli", g.appID)
		}
	}, a.init = function(c, d, e, f) {
		var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, V, O, P, Q, R, S, T, U, g = b.tParseInt(d.itemOuterSpace),
			h = b.tParseInt(d.itemInnerSpace),
			i = b.appConfig["jphonetooli"][1],
			j = c.children(".juneItemBox").length;
		if (d.itemWidth = (640 - 2 * g - h * (d.itemColumn - 1)) / d.itemColumn, j < b.tParseInt(d.itemCount)) for (l = j; l < b.tParseInt(d.itemCount); l++) d.childConfig.push(i.childBB), c.append(i.baobeiDom);
		else c.children(".juneItemBox:gt(" + (d.itemCount - 1) + ")").remove(), d.childConfig.slice(d.itemCount - 1);
		j = c.children(".juneItemBox").length, c.attr("data-config", JSON.stringify(d)), m = 296, n = 370, o = 0, p = 0, q = 296, r = 56, s = 370, t = 0, u = 120, v = 30, w = 426, x = 0, y = 120, z = 30, A = 458, B = 0, C = 100, D = 30, E = 426, F = 196, G = 80, H = 22, I = 466, J = 216, K = 56, L = 20, M = 10, N = 10, e || (k = c.children(".juneItemBox:eq(0)"), O = k.children(".itemImg"), P = k.children(".itemTitle"), Q = k.children(".itemRprice"), R = k.children(".itemPrice"), S = k.children(".itemSale"), T = k.children(".itemBtn"), U = k.children(".itemJimg"), V = b.countBoxPos(d.itemWidth, d.itemHeight, O), m = V.width, n = V.height, p = V.left, o = V.top, V = b.countBoxPos(d.itemWidth, d.itemHeight, P), q = V.width, r = V.height, t = V.left, s = V.top, V = b.countBoxPos(d.itemWidth, d.itemHeight, Q), u = V.width, v = V.height, x = V.left, w = V.top, V = b.countBoxPos(d.itemWidth, d.itemHeight, R), y = V.width, z = V.height, B = V.left, A = V.top, V = b.countBoxPos(d.itemWidth, d.itemHeight, S), C = V.width, D = V.height, F = V.left, E = V.top, V = b.countBoxPos(d.itemWidth, d.itemHeight, T), G = V.width, H = V.height, J = V.left, I = V.top, V = b.countBoxPos(d.itemWidth, d.itemHeight, U), K = V.width, L = V.height, N = V.left, M = V.top), !e && f && (m = b.tParseInt(d.itemIwidth), n = b.tParseInt(d.itemIheight), o = b.tParseInt(d.itemItop), p = b.tParseInt(d.itemIleft), q = b.tParseInt(d.itemTwidth), r = b.tParseInt(d.itemTheight), s = b.tParseInt(d.itemTtop), t = b.tParseInt(d.itemTleft), u = b.tParseInt(d.itemRwidth), v = b.tParseInt(d.itemRheight), w = b.tParseInt(d.itemRtop), x = b.tParseInt(d.itemRleft), y = b.tParseInt(d.itemPwidth), z = b.tParseInt(d.itemPheight), A = b.tParseInt(d.itemPtop), B = b.tParseInt(d.itemPleft), C = b.tParseInt(d.itemSwidth), D = b.tParseInt(d.itemSheight), E = b.tParseInt(d.itemStop), F = b.tParseInt(d.itemSleft), G = b.tParseInt(d.itemBwidth), H = b.tParseInt(d.itemBheight), I = b.tParseInt(d.itemBtop), J = b.tParseInt(d.itemBleft), K = b.tParseInt(d.itemJwidth), L = b.tParseInt(d.itemJheight), M = b.tParseInt(d.itemJtop), N = b.tParseInt(d.itemJleft)), c.children(".juneItemBox").each(function(a) {
			var e = $(this),
				f = e.children(".itemImg"),
				i = e.children(".itemTitle"),
				k = e.children(".itemRprice"),
				l = e.children(".itemPrice"),
				O = e.children(".itemSale"),
				P = e.children(".itemBtn"),
				Q = e.children(".itemJimg"),
				R = a + 1,
				S = g + (b.tParseInt(d.itemWidth) + h) * (a % d.itemColumn),
				T = g + (b.tParseInt(d.itemHeight) + h) * (Math.ceil(R / d.itemColumn) - 1);
			e.css({
				width: b.tParseInt(d.itemWidth),
				height: b.tParseInt(d.itemHeight),
				left: S,
				top: T,
				backgroundColor: d.itemBgColor
			}), f.css({
				width: m,
				height: n,
				top: o,
				left: p
			}).html('<img src="' + d.childConfig[a].itemImg + '" /><div style="width:100%;height:100%;"></div>'), b.countImgPos(f, !1), 0 == m && 0 == n && f.attr("data-hide", "yes").hide(), i.css({
				width: q,
				height: r,
				left: t,
				top: s,
				textAlign: d.itemTalign || "center",
				color: d.itemTcolor,
				lineHeight: r / d.itemTline + "px",
				fontSize: d.itemTsize * (5 / 6) + "px"
			}).html('<div class="text-bg" style="width:100%;height:100%;position:absolute;z-index:-1;"></div><div class="text">' + d.childConfig[a].itemTitle + "</div>").attr("data-line", d.itemTline), i.children(".text-bg").css({
				backgroundColor: d.itemTbgColor,
				opacity: d.itemTopacity / 100
			}), "-1" == d.itemTline && i.css("line-height", "normal"), 0 == q && 0 == r && i.attr("data-hide", "yes").hide(), k.css({
				width: u,
				height: v,
				left: x,
				top: w,
				textAlign: d.itemRalign || "center",
				textDecoration: "line-through",
				color: d.itemRcolor,
				lineHeight: v + "px",
				whiteSpace: "nowrap",
				fontSize: d.itemRsize * (5 / 6) + "px"
			}).html('<div class="text-bg" style="width:100%;height:100%;position:absolute;z-index:-1;"></div><span class="prefix">' + d.itemRprefix + "</span>" + "627.89" + '<span class="suffix">' + d.itemRsuffix + "</span>"), k.children(".text-bg").css({
				backgroundColor: d.itemRbgColor,
				opacity: d.itemRopacity / 100
			}), 0 == u && 0 == v && k.attr("data-hide", "yes").hide(), l.css({
				width: y,
				height: z,
				left: B,
				top: A,
				textAlign: d.itemPalign || "center",
				color: d.itemPcolor,
				lineHeight: z + "px",
				whiteSpace: "nowrap",
				fontSize: d.itemPsize * (5 / 6) + "px"
			}).html('<div class="text-bg" style="width:100%;height:100%;position:absolute;z-index:-1;"></div><span class="prefix">' + d.itemPprefix + "</span>" + "304.56" + '<span class="suffix">' + d.itemPsuffix + "</span>"), l.children(".text-bg").css({
				backgroundColor: d.itemPbgColor,
				opacity: d.itemPopacity / 100
			}), 0 == y && 0 == z && l.attr("data-hide", "yes").hide(), O.css({
				width: C,
				height: D,
				left: F,
				top: E,
				textAlign: d.itemSalign || "center",
				color: d.itemScolor,
				lineHeight: D + "px",
				whiteSpace: "nowrap",
				fontSize: d.itemSsize * (5 / 6) + "px"
			}).html('<div class="text-bg" style="width:100%;height:100%;position:absolute;z-index:-1;"></div><span class="prefix">' + d.itemSprefix + "</span>" + "9999" + '<span class="suffix">' + d.itemSsuffix + "</span>"), O.children(".text-bg").css({
				backgroundColor: d.itemSbgColor,
				opacity: d.itemSopacity / 100
			}), 0 == C && 0 == D && O.attr("data-hide", "yes").hide(), P.css({
				width: G,
				height: H,
				left: J,
				top: I
			}).html('<img src="' + d.itemBimg + '" /><div style="width:100%;height:100%;"></div>'), b.countImgPos(P, !0), 0 == G && 0 == H && P.attr("data-hide", "yes").hide(), Q.css({
				width: K,
				height: L,
				left: N,
				top: M
			}).html('<img src="' + d.childConfig[a].itemJimg + '" /><div style="width:100%;height:100%;"></div>'), b.countImgPos(Q, !0), 0 == K && 0 == L && Q.attr("data-hide", "yes").hide(), 0 == a ? (f.tResize(), i.tResize(), k.tResize(), l.tResize(), O.tResize(), P.tResize(), Q.tResize()) : 0 == e.children(".item-mon").length && $('<div class="item-mon" style="position:absolute;width:100%;height:100%;z-index:102;"></div>').appendTo(e).css({
				cursor: "not-allowed",
				opacity: .4,
				background: "#000000"
			}), a == j - 1 && (b.june.height(e.height() + b.tParseInt(e.css("top")) + g), b.june.children(".june-imgBg").height(e.height() + b.tParseInt(e.css("top")) + g))
		}), a.control()
	}, a.control = function() {
		b.ptCheckResize = !1;
		var c = $("#ptBaobeiDom");
		b.ptItemBox = $("#ptBaobeiDom").children(".juneItemBox:eq(0)"), c.off("mousedown.ptbb").on("mousedown.ptbb", function(c) {
			var d = $(c.target);
			d.hasClass(b.rhClsVal) && (b.ptCheckResize = !0, a.ptResizeStart(c))
		}), b.d.off("mousemove.ptbb").on("mousemove.ptbb", function(c) {
			b.ptCheckResize && a.ptResizeIng(c)
		}), b.d.off("mouseup.ptbb").on("mouseup.ptbb", function(c) {
			b.ptCheckResize && (a.ptResizeEnd(c), b.ptCheckResize = !1)
		}), b.ptKeySpace = 0, b.d.off("keydown.ptbb").on("keydown.ptbb", function(a) {
			var d = c.children(".juneItemBox:eq(0)").children(".itemSelected"),
				e = a.keyCode || a.which;
			(37 == e || 38 == e || 39 == e || 40 == e) && (b.ptKeyMove(d, e), a.preventDefault(), a.stopPropagation())
		})
	}, a.ptResizeStart = function(a) {
		var c = $(a.target);
		"june" == a.target.id && b.show() || c.hasClass(b.rhClsVal) && (c.parent().hasClass(b.resizeNaClsVal) || (b.ptResizeEle = c.parent(), b.direction = c.attr("data-direction"), b.resizeCache.width = b.ptResizeEle.width(), b.resizeCache.height = b.ptResizeEle.height(), b.resizeCache.top = b.tParseInt(b.ptResizeEle.css("top")), b.resizeCache.left = b.tParseInt(b.ptResizeEle.css("left")), b.resizeCache.x = a.pageX, b.resizeCache.y = a.pageY, b.snapSwitch && !b.ptResizeEle.hasClass("june-nonsp") && b.createResizeElements(b.ptResizeEle)))
	}, a.ptResizeIng = function(a) {
		if (b.ptResizeEle) {
			var c, d, e, f, g, h, l, m, n, o, p, i = b.ptResizeEle,
				j = b.direction,
				k = b.resizeCache,
				q = b.tParseInt(b.snapOutTolerance),
				r = b.tParseInt(b.snapInTolerance),
				s = b.tParseInt(b.snapOutSpace),
				t = b.tParseInt(b.snapInSpace),
				u = b.ptItemBox.offset(),
				v = a.pageX + b.ptItemBox.scrollLeft() - u.left,
				w = a.pageY + b.ptItemBox.scrollTop() - u.top;
			if (Math.abs(a.pageX - k.x) <= 1 && Math.abs(a.pageY - k.y) <= 1) return;
			switch (i.parent().hasClass(b.appClsVal) && b.show() && (v -= b.tParseInt(i.parent().css("left")), w -= b.tParseInt(i.parent().css("top"))), i.parent().parent().parent().hasClass(b.appClsVal) && (v -= b.tParseInt(i.parent().parent().parent().css("left")), w -= b.tParseInt(i.parent().parent().parent().css("top"))), j) {
			case "n":
				i.css({
					top: w
				});
				break;
			case "w":
				i.css({
					left: v
				});
				break;
			case "ne":
				i.css({
					top: w
				});
				break;
			case "sw":
				i.css({
					left: v
				});
				break;
			case "nw":
				i.css({
					left: v,
					top: w
				})
			}
			for (j && j.indexOf("w") >= 0 && (v > k.left + k.width - 10 ? i.css({
				left: k.left + k.width - 10
			}).width(10) : (i.width(k.width - v + k.left), d = u.left - i.offset().left - b.ptItemBox.scrollLeft(), e = i.width() - d, d >= 0 && i.offset({
				left: u.left - b.ptItemBox.scrollLeft()
			}).width(e))), j && j.indexOf("e") >= 0 && (v - k.left <= 10 ? i.width(10) : (i.width(v - k.left), h = i.offset().left + i.width() + b.ptItemBox.scrollLeft() - b.ptItemBox.width() - u.left, e = i.width() - h, h >= 0 && i.width(e))), j && j.indexOf("n") >= 0 && (w > k.top + k.height - 10 ? i.css({
				top: k.top + k.height - 10
			}).height(10) : (i.height(k.height - w + k.top), c = u.top - i.offset().top - b.ptItemBox.scrollTop(), f = i.height() - c, c >= 0 && i.offset({
				top: u.top - b.ptItemBox.scrollTop()
			}).height(f))), j && j.indexOf("s") >= 0 && (w - k.top <= 10 ? i.height(10) : (i.height(w - k.top), g = i.offset().top + i.height() + b.ptItemBox.scrollTop() - b.ptItemBox.height() - u.top, f = i.height() - g, g >= 0 && i.height(f))), p = b.resizeElements.length - 1; p >= 0; p--) l = b.resizeElements[p].left, m = l + b.resizeElements[p].width, n = b.resizeElements[p].top, o = n + b.resizeElements[p].height, "inner" !== b.resizeElements[p].snapMode && (Math.abs(n - w) <= q && k.top < n - s && j && j.indexOf("s") >= 0 && i.height(n - k.top - s), Math.abs(o - w) <= q && k.top + k.height > o + s && j && j.indexOf("n") >= 0 && i.css({
				top: o + s
			}).height(k.height - o - s + k.top), Math.abs(l - v) <= q && k.left < l - s && j && j.indexOf("e") >= 0 && i.width(l - k.left - s), Math.abs(m - v) <= q && k.left + k.width > m + s && j && j.indexOf("w") >= 0 && i.css({
				left: m + s
			}).width(k.width - m - s + k.left)), "outer" !== b.resizeElements[p].snapMode && (Math.abs(o - w) <= r && k.top < o - t && j && j.indexOf("s") >= 0 && i.height(o - k.top - t), Math.abs(n - w) <= r && k.top + k.height > n + t && j && j.indexOf("n") >= 0 && i.css({
				top: n + t
			}).height(k.height - n - t + k.top), Math.abs(m - v) <= r && k.left < m - t && j && j.indexOf("e") >= 0 && i.width(m - k.left - t), Math.abs(l - v) <= r && k.left + k.width > l + t && j && j.indexOf("w") >= 0 && i.css({
				left: l + t
			}).width(k.width - l - t + k.left));
			b.ptResizeProcess(i)
		}
	}, a.ptResizeEnd = function() {
		if (b.ptResizeEle) {
			var c = b.ptResizeEle;
			d.resizeSync(c), _index = b.ptResizeEle.index(), b.getItemInfo(_index)
		}
		b.ptResizeEle = null, b.snapSwitch && (b.resizeElements = [])
	}, a
}), define("scripts/drawArea.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/action"),
		e = (require("scripts/layer"), b.appConfig);
	return a.Start = function(a) {
		("june" == a.target.id || "zdybox" == a.target.id || $(a.target).hasClass("junehtml") || $(a.target).hasClass(b.dragNaClsVal)) && (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected"), $("#tThumb").is(":hidden") || ($("#tThumb").hide(), $("#tParentThumb").hide()), b.startX = a.pageX + b.junebox.scrollLeft(), b.startY = a.pageY + b.junebox.scrollTop(), b.drawHelper = $(e.jphonetoolb[0]), b.drawPut = !1, b.snapSwitch && b.createSnapElements())
	}, a.Ing = function(a) {
		if (b.drawHelper) {
			var c, d, f, g, h, i, j = b.tParseInt(b.snapOutTolerance),
				k = b.tParseInt(b.snapInTolerance),
				l = b.tParseInt(b.snapOutSpace),
				m = b.tParseInt(b.snapInSpace),
				n = ["s", "e"],
				o = b.startX,
				p = b.startY,
				q = a.pageX + b.junebox.scrollLeft(),
				r = a.pageY + b.junebox.scrollTop(),
				s = b.june.width() + b.offsleft,
				t = b.june.height() + b.offstop;
			if (o > q && (c = q, q = o, o = c, n[1] = "w"), p > r && (c = r, r = p, p = c, n[0] = "n"), o < b.offsleft && (o = b.offsleft), p < b.offstop && (p = b.offstop), q > s && (q = s), r > t && (r = t), (Math.abs(o - q) > 5 || Math.abs(p - r) > 5) && (b.drawPut || (b.setAppID(e.jphonetoolb[2]), b.drawHelper.attr("appID", e.jphonetoolb[2].appID), b.drawHelper.appendTo(b.june).attr("data-config", JSON.stringify(e.jphonetoolb[2])).tResize(), b.drawHelper.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.drawHelper), b.drawPut = !0)), b.drawHelper.offset({
				left: o - b.junebox.scrollLeft(),
				top: p - b.junebox.scrollTop()
			}).width(q - o).height(r - p), b.snapSwitch) for (i = b.snapElements.length - 1; i >= 0; i--) d = b.snapElements[i].left, f = d + b.snapElements[i].width, g = b.snapElements[i].top, h = g + b.snapElements[i].height, "inner" !== b.snapElements[i].snapMode && (Math.abs(g - r + b.junebox.scrollTop()) <= j && "s" == n[0] && b.drawHelper.height(g - p + b.junebox.scrollTop() - l), Math.abs(h - p + b.junebox.scrollTop()) <= j && "n" == n[0] && b.drawHelper.offset({
				top: h + l
			}).height(r - p - h - l + p - b.junebox.scrollTop()), Math.abs(d - q + b.junebox.scrollLeft()) <= j && "e" == n[1] && b.drawHelper.width(d - o + b.junebox.scrollLeft() - l), Math.abs(f - o + b.junebox.scrollLeft()) <= j && "w" == n[1] && b.drawHelper.offset({
				left: f + l
			}).width(q - o - f - l + o - b.junebox.scrollLeft())), "outer" !== b.snapElements[i].snapMode && (Math.abs(h - r + b.junebox.scrollTop()) <= k && "s" == n[0] && b.drawHelper.height(h - p + b.junebox.scrollTop() - m), Math.abs(g - p + b.junebox.scrollTop()) <= k && "n" == n[0] && b.drawHelper.offset({
				top: g + m
			}).height(r - p - g - m + p - b.junebox.scrollTop()), Math.abs(f - q + b.junebox.scrollLeft()) <= k && "e" == n[1] && b.drawHelper.width(f - o + b.junebox.scrollLeft() - m), Math.abs(d - o + b.junebox.scrollLeft()) <= k && "w" == n[1] && b.drawHelper.offset({
				left: d + m
			}).width(q - o - d - m + o - b.junebox.scrollLeft()))
		}
	}, a.End = function(a) {
		if (b.drawHelper) {
			var d, f, g, h, i, j, k = b.tParseInt(b.snapOutTolerance),
				l = b.tParseInt(b.snapInTolerance),
				m = b.tParseInt(b.snapOutSpace),
				n = b.tParseInt(b.snapInSpace),
				o = ["s", "e"],
				p = b.startX,
				q = b.startY,
				r = a.pageX + b.junebox.scrollLeft(),
				s = a.pageY + b.junebox.scrollTop(),
				t = b.june.width() + b.offsleft,
				u = b.june.height() + b.offstop;
			if (p > r && (d = r, r = p, p = d, o[1] = "w"), q > s && (d = s, s = q, q = d, o[0] = "n"), p < b.offsleft && (p = b.offsleft), q < b.offstop && (q = b.offstop), r > t && (r = t), s > u && (s = u), b.drawHelper.offset({
				left: p - b.junebox.scrollLeft(),
				top: q - b.junebox.scrollTop()
			}).width(r - p).height(s - q), b.snapSwitch) for (j = b.snapElements.length - 1; j >= 0; j--) f = b.snapElements[j].left, g = f + b.snapElements[j].width, h = b.snapElements[j].top, i = h + b.snapElements[j].height, "inner" !== b.snapElements[j].snapMode && (Math.abs(h - s + b.junebox.scrollTop()) <= k && "s" == o[0] && b.drawHelper.height(h - q + b.junebox.scrollTop() - m), Math.abs(i - q + b.junebox.scrollTop()) <= k && "n" == o[0] && b.drawHelper.offset({
				top: i + m
			}).height(s - q - i - m + q - b.junebox.scrollTop()), Math.abs(f - r + b.junebox.scrollLeft()) <= k && "e" == o[1] && b.drawHelper.width(f - p + b.junebox.scrollLeft() - m), Math.abs(g - p + b.junebox.scrollLeft()) <= k && "w" == o[1] && b.drawHelper.offset({
				left: g + m
			}).width(r - p - g - m + p - b.junebox.scrollLeft())), "outer" !== b.snapElements[j].snapMode && (Math.abs(i - s + b.junebox.scrollTop()) <= l && "s" == o[0] && b.drawHelper.height(i - q + b.junebox.scrollTop() - n), Math.abs(h - q + b.junebox.scrollTop()) <= l && "n" == o[0] && b.drawHelper.offset({
				top: h + n
			}).height(s - q - h - n + q - b.junebox.scrollTop()), Math.abs(g - r + b.junebox.scrollLeft()) <= l && "e" == o[1] && b.drawHelper.width(g - p + b.junebox.scrollLeft() - n), Math.abs(f - p + b.junebox.scrollLeft()) <= l && "w" == o[1] && b.drawHelper.offset({
				left: f + n
			}).width(r - p - f - n + p - b.junebox.scrollLeft()));
			Math.abs(p - r) < 10 || Math.abs(q - s) < 10 ? (b.jSelectsedDom = b.jSelectsedDom.not(b.drawHelper[0]), b.drawHelper.remove()) : (b.createAppName("jphonetoolb", e.jphonetoolb[2].appID), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), b.drawHelper.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(b.drawHelper), c.create("add", b.drawHelper)), b.drawHelper = null, b.resizeElements = []
		}
	}, a
}), define("scripts/code_im.js", function(a) {
	function e(a, b) {
		var f, i, j, k, m, l, n, o, p, r, q, s, t, u, c = "",
			d = {},
			e = {
				"true": "不显示",
				"false": "显示"
			},
			g = 1,
			h = {
				"模块高度": "moduleHeight",
				"模块背景图片": "moduleBg",
				"更多背景设置": "isShowToolSet",
				"模块背景图片高度": "mbgHeight",
				"更多背景图片1高度": "mbgHeight_1",
				"更多背景图片2高度": "mbgHeight_2",
				"更多背景图片3高度": "mbgHeight_3",
				"更多背景图片4高度": "mbgHeight_4",
				"更多背景图片1": "moduleBg_1",
				"更多背景图片2": "moduleBg_2",
				"更多背景图片3": "moduleBg_3",
				"更多背景图片4": "moduleBg_4",
				"热区(?)开关": "switch",
				"热区(?)宽度": "width",
				"热区(?)高度": "height",
				"热区(?)左边距": "left",
				"热区(?)上边距": "top",
				"热区(?)链接": "href"
			};
		if ("get" == b) {
			if (a.indexOf("所有热区设置") < 0) return a;
			for (a = a.split("----所有热区设置----\n"), i = a[0].split("\n"), j = a[1].split("\n"), k = 0; k < i.length; k++) l = i[k], l && "" != l && (m = l.split(":"), "isShowToolSet" == h[m[0]] && (m[1] = "显示" == m[1] ? "false" : "true"), d[h[m[0]]] = m[1] + (m[2] ? ":" + m[2] : ""));
			for (d["data"] = [], n = 0; n < j.length; n++) {
				for (l = j[n], o = {
					width: 0,
					height: 0,
					top: 0,
					left: 0,
					href: ""
				}, l = l.substr(0, l.length - 1), m = l.split("|"), p = 0; p < m.length; p++) q = m[p], q = q.replace(/\(\d+\)/g, "(?)"), r = q.split(":"), "NaN" == r[1] && (r[1] = 0), "undefined" == r[1] && (r[1] = ""), "switch" == h[r[0]] && (r[1] = "显示" == r[1] ? "false" : "true"), o[h[r[0]]] = r[1] + (r[2] ? ":" + r[2] : "");
				d["data"].push(o)
			}
			return JSON.stringify(d)
		}
		"string" == typeof a && (a = JSON.parse(a));
		for (k in a) s = a[k], "moduleHeight" != k ? "moduleBg" != k ? "isShowToolSet" != k ? "mbgHeight" != k ? "mbgHeight_1" != k ? "mbgHeight_2" != k ? "mbgHeight_3" != k ? "mbgHeight_4" != k ? "moduleBg_1" != k ? "moduleBg_2" != k ? "moduleBg_3" != k ? "moduleBg_4" != k ? "data" != k || (f = s) : c += "更多背景图片4:" + s + "\n" : c += "更多背景图片3:" + s + "\n" : c += "更多背景图片2:" + s + "\n" : c += "更多背景图片1:" + s + "\n" : c += "更多背景图片4高度:" + s + "\n" : c += "更多背景图片3高度:" + s + "\n" : c += "更多背景图片2高度:" + s + "\n" : c += "更多背景图片1高度:" + s + "\n" : c += "模块背景图片高度:" + s + "\n" : c += "更多背景设置:" + e[s] + "\n" : c += "模块背景图片:" + s + "\n" : c += "模块高度:" + s + "\n";
		for (c += "----所有热区设置----", n = 0; n < f.length; n++) t = f[n], u = "热区(" + g + ")", c += "\n", "" != t["switch"] && (c += u + "开关:" + e[t["switch"]] + "|"), c += "" != t["width"] ? u + "宽度:" + t["width"] + "|" : u + "宽度:0|", c += "" != t["height"] ? u + "高度:" + t["height"] + "|" : u + "高度:0|", c += "" != t["left"] ? u + "左边距:" + t["left"] + "|" : u + "左边距:0|", c += "" != t["top"] ? u + "上边距:" + t["top"] + "|" : u + "上边距:0|", "" != t["href"] ? ("#" == t["href"] && (t["href"] = ""), t["href"] = t["href"].replace(/&amp;/g, "&"), c += u + "链接:" + t["href"] + "|") : c += u + "链接:|", g++;
		for (n = f.length; 30 > n; n++) t = f[n], u = "热区(" + g + ")", c += "\n", c += u + "开关:不显示|", g++;
		return c
	}
	function f(a, b) {
		var h, k, l, m, o, n, p, q, r, t, s, u, v, w, c = "----宝贝样式设置----\n",
			d = {},
			e = {
				"false": "默认设置",
				"true": "自定义"
			},
			f = {
				left: "4",
				center: "5",
				right: "6"
			},
			g = {
				4: "left",
				5: "center",
				6: "right"
			},
			i = 1,
			j = {
				"模块高度": "moduleHeight",
				"模块背景图片": "moduleBg",
				"宝贝宽度": "itemWidth",
				"宝贝高度": "itemHeight",
				"宝贝背景色": "itemBgColor",
				"宝贝图片宽度": "itemIwidth",
				"宝贝图片高度": "itemIheight",
				"宝贝图片上边距": "itemItop",
				"宝贝图片左边距": "itemIleft",
				"宝贝标题宽度": "itemTwidth",
				"宝贝标题高度": "itemTheight",
				"宝贝标题上边距": "itemTtop",
				"宝贝标题左边距": "itemTleft",
				"宝贝标题颜色": "itemTcolor",
				"宝贝标题背景色": "itemTbgColor",
				"宝贝标题行数": "itemTline",
				"宝贝标题大小": "itemTsize",
				"标题对齐方式": "itemTalign",
				"宝贝原价宽度": "itemRwidth",
				"宝贝原价高度": "itemRheight",
				"宝贝原价上边距": "itemRtop",
				"宝贝原价左边距": "itemRleft",
				"宝贝原价颜色": "itemRcolor",
				"宝贝原价背景色": "itemRbgColor",
				"宝贝原价大小": "itemRsize",
				"原价对齐方式": "itemRalign",
				"宝贝原价前缀": "itemRprefix",
				"宝贝原价后缀": "itemRsuffix",
				"宝贝现价宽度": "itemPwidth",
				"宝贝现价高度": "itemPheight",
				"宝贝现价上边距": "itemPtop",
				"宝贝现价左边距": "itemPleft",
				"宝贝现价颜色": "itemPcolor",
				"宝贝现价背景色": "itemPbgColor",
				"宝贝现价大小": "itemPsize",
				"现价对齐方式": "itemPalign",
				"宝贝现价前缀": "itemPprefix",
				"宝贝现价后缀": "itemPsuffix",
				"宝贝销量宽度": "itemSwidth",
				"宝贝销量高度": "itemSheight",
				"宝贝销量上边距": "itemStop",
				"宝贝销量左边距": "itemSleft",
				"宝贝销量颜色": "itemScolor",
				"宝贝销量背景色": "itemSbgColor",
				"宝贝销量大小": "itemSsize",
				"销量对齐方式": "itemSalign",
				"宝贝销量前缀": "itemSprefix",
				"宝贝销量后缀": "itemSsuffix",
				"购买按钮宽度": "itemBwidth",
				"购买按钮高度": "itemBheight",
				"购买按钮上边距": "itemBtop",
				"购买按钮左边距": "itemBleft",
				"购买按钮图片": "itemBimg",
				"宝贝角标宽度": "itemJwidth",
				"宝贝角标高度": "itemJheight",
				"宝贝角标上边距": "itemJtop",
				"宝贝角标左边距": "itemJleft",
				"宝贝(?)内容": "itemSet",
				"宝贝(?)上边距": "itemTop",
				"宝贝(?)左边距": "itemLeft",
				"宝贝(?)图片": "itemImg",
				"宝贝(?)标题": "itemTitle",
				"宝贝(?)角标图片": "itemJimg"
			};
		if ("get" == b) {
			if (a.indexOf("宝贝样式设置") < 0) return a;
			for (a = a.split("----宝贝内容设置----\n"), k = a[0].split("\n"), l = a[1].split("\n"), m = 0; m < k.length; m++) n = k[m], "----宝贝样式设置----" != n && n && "" != n && (o = n.split(":"), ("itemTalign" == j[o[0]] || "itemRalign" == j[o[0]] || "itemPalign" == j[o[0]] || "itemSalign" == j[o[0]]) && (o[1] = g[o[1]]), d[j[o[0]]] = o[1] + (o[2] ? ":" + o[2] : ""));
			for (d["childConfig"] = [], p = 0; p < l.length; p++) {
				for (n = l[p], q = {
					itemSet: "false",
					itemTop: 0,
					itemLeft: 0,
					itemImg: "",
					itemTitle: "",
					itemJimg: ""
				}, n = n.substr(0, n.length - 1), o = n.split("|"), r = 0; r < o.length; r++) s = o[r], s = s.replace(/\(\d+\)/g, "(?)"), t = s.split(":"), "NaN" == t[1] && (t[1] = 0), "undefined" == t[1] && (t[1] = ""), "itemSet" == j[t[0]] && (t[1] = "自定义" == t[1] ? "true" : "false"), q[j[t[0]]] = t[1] + (t[2] ? ":" + t[2] : "");
				"true" == q.itemSet && d["childConfig"].push(q)
			}
			return JSON.stringify(d)
		}
		"string" == typeof a && (a = JSON.parse(a));
		for (m in a) u = a[m], "moduleHeight" != m ? "moduleBg" != m ? "tBitemWidth" != m ? "tBitemHeight" != m ? "tBitemBgColor" != m ? "tBitemIwidth" != m ? "tBitemIheight" != m ? "tBitemItop" != m ? "tBitemIleft" != m ? "tBitemTwidth" != m ? "tBitemTheight" != m ? "tBitemTtop" != m ? "tBitemTleft" != m ? "tBitemTcolor" != m ? "tBitemTbgColor" != m ? "tBitemTline" != m ? "tBitemTsize" != m ? "tBitemTalign" != m ? "tBitemRwidth" != m ? "tBitemRheight" != m ? "tBitemRtop" != m ? "tBitemRleft" != m ? "tBitemRcolor" != m ? "tBitemRbgColor" != m ? "tBitemRsize" != m ? "tBitemRalign" != m ? "tBitemRprefix" != m ? "tBitemRsuffix" != m ? "tBitemPwidth" != m ? "tBitemPheight" != m ? "tBitemPtop" != m ? "tBitemPleft" != m ? "tBitemPcolor" != m ? "tBitemPbgColor" != m ? "tBitemPsize" != m ? "tBitemPalign" != m ? "tBitemPprefix" != m ? "tBitemPsuffix" != m ? "tBitemSwidth" != m ? "tBitemSheight" != m ? "tBitemStop" != m ? "tBitemSleft" != m ? "tBitemScolor" != m ? "tBitemSbgColor" != m ? "tBitemSsize" != m ? "tBitemSalign" != m ? "tBitemSprefix" != m ? "tBitemSsuffix" != m ? "tBitemBwidth" != m ? "tBitemBheight" != m ? "tBitemBtop" != m ? "tBitemBleft" != m ? "tBitemBimg" != m ? "tBitemJwidth" != m ? "tBitemJheight" != m ? "tBitemJtop" != m ? "tBitemJleft" != m ? "childConfig" != m || (h = u) : c += "宝贝角标左边距:" + u + "\n" : c += "宝贝角标上边距:" + u + "\n" : c += "宝贝角标高度:" + u + "\n" : c += "宝贝角标宽度:" + u + "\n" : c += "购买按钮图片:" + u + "\n" : c += "购买按钮左边距:" + u + "\n" : c += "购买按钮上边距:" + u + "\n" : c += "购买按钮高度:" + u + "\n" : c += "购买按钮宽度:" + u + "\n" : c += "宝贝销量后缀:" + u + "\n" : c += "宝贝销量前缀:" + u + "\n" : c += "销量对齐方式:" + f[u] + "\n" : c += "宝贝销量大小:" + u + "\n" : c += "宝贝销量背景色:" + u + "\n" : c += "宝贝销量颜色:" + u + "\n" : c += "宝贝销量左边距:" + u + "\n" : c += "宝贝销量上边距:" + u + "\n" : c += "宝贝销量高度:" + u + "\n" : c += "宝贝销量宽度:" + u + "\n" : c += "宝贝现价后缀:" + u + "\n" : c += "宝贝现价前缀:" + u + "\n" : c += "现价对齐方式:" + f[u] + "\n" : c += "宝贝现价大小:" + u + "\n" : c += "宝贝现价背景色:" + u + "\n" : c += "宝贝现价颜色:" + u + "\n" : c += "宝贝现价左边距:" + u + "\n" : c += "宝贝现价上边距:" + u + "\n" : c += "宝贝现价高度:" + u + "\n" : c += "宝贝现价宽度:" + u + "\n" : c += "宝贝原价后缀:" + u + "\n" : c += "宝贝原价前缀:" + u + "\n" : c += "原价对齐方式:" + f[u] + "\n" : c += "宝贝原价大小:" + u + "\n" : c += "宝贝原价背景色:" + u + "\n" : c += "宝贝原价颜色:" + u + "\n" : c += "宝贝原价左边距:" + u + "\n" : c += "宝贝原价上边距:" + u + "\n" : c += "宝贝原价高度:" + u + "\n" : c += "宝贝原价宽度:" + u + "\n" : c += "标题对齐方式:" + f[u] + "\n" : c += "宝贝标题大小:" + u + "\n" : c += "宝贝标题行数:" + u + "\n" : c += "宝贝标题背景色:" + u + "\n" : c += "宝贝标题颜色:" + u + "\n" : c += "宝贝标题左边距:" + u + "\n" : c += "宝贝标题上边距:" + u + "\n" : c += "宝贝标题高度:" + u + "\n" : c += "宝贝标题宽度:" + u + "\n" : c += "宝贝图片左边距:" + u + "\n" : c += "宝贝图片上边距:" + u + "\n" : c += "宝贝图片高度:" + u + "\n" : c += "宝贝图片宽度:" + u + "\n" : c += "宝贝背景色:" + u + "\n" : c += "宝贝高度:" + u + "\n" : c += "宝贝宽度:" + u + "\n" : c += "模块背景图片:" + u + "\n" : c += "模块高度:" + u + "\n";
		for (c += "----宝贝内容设置----", p = 0; p < h.length; p++) v = h[p], w = "宝贝(" + i + ")", c += "\n", "" != v["dBitemSet"] && (c += w + "内容:" + e[v["dBitemSet"]] + "|"), c += "" != v["dBitemTop"] ? w + "上边距:" + v["dBitemTop"] + "|" : w + "上边距:0|", c += "" != v["dBitemLeft"] ? w + "左边距:" + v["dBitemLeft"] + "|" : w + "左边距:0|", c += "" != v["dBitemImg"] ? w + "图片:" + v["dBitemImg"] + "|" : w + "图片:|", c += "" != v["dBitemTitle"] ? w + "标题:" + v["dBitemTitle"] + "|" : w + "标题:|", c += "" != v["dBitemJimg"] ? w + "角标图片:" + v["dBitemJimg"] + "|" : w + "角标图片:|", i++;
		for (p = h.length; 12 > p; p++) v = h[p], w = "宝贝(" + i + ")", c += "\n", c += w + "内容:默认设置|", i++;
		return c
	}
	var b = require("scripts/D"),
		d = (require("scripts/appManage"), require("scripts/UI_Dialog"));
	return a.getJuneStyle = function() {
		var c = (b.june.children(".june-imgBg").children("img:eq(0)").attr("src") || "").replace(/^url|[\(\)]/g, ""),
			f = ((new Date).valueOf().toString().substr(7, 6) + "-" + 1e4 * Math.random(), {}),
			c = c.replace(/"/g, "");
		return f.moduleHeight = b.june.height(), f.moduleBg = c, f.isShowToolSet = "true", b.june.children(".june-imgBg").children("img").length > 1 && (f.mbgHeight = b.june.children(".june-imgBg").children("img:eq(0)").height(), f.isShowToolSet = "false", b.june.children(".june-imgBg").children("img:gt(0)").each(function(a) {
			var c = ($(this).attr("src") || "").replace(/^url|[\(\)]/g, "").replace(/"/g, "");
			f["moduleBg_" + (a + 1)] = c, f["mbgHeight_" + (a + 1)] = $(this).height()
		})), f
	}, a.getCodeExport = function(b, c) {
		b(a.codeExport(c))
	}, a.codeExport = function(c) {
		var g, h, i, j;
		return b.checkExport ? (b.tMessage("部分链接仍未转换完成,请稍后点击代码!"), void 0) : (g = b.june.attr("id"), h = !0, i = $("#morephonetoolsbox").attr("data-toolType"), "june" == g && (h = !1), j = a.getJuneStyle(h), j.data = [], b.june.children(b.appCls).each(function() {
			var a = $(this),
				c = a.attr("data-dblType");
			b.create() && "jpb" != c && j.data.push(b.appConfig[c][1].codeExport(a))
		}), "zdyItem" == i ? (j = j.data[0], j = f(j)) : j = e(j), j || (j = ""), "june" != g ? JSON.stringify(j) : c ? JSON.stringify(j) : (d.tDialogCode(JSON.stringify(j), !1), void 0))
	}, a.codeImportJune = function(a) {
		var b = a.attr("src");
		b = b.replace(/"/g, ""), $("#moduleBgimg").val(b)
	}, a.codeImportDialogCode = function(a, c) {
		var d, g, h, i, j, k, l, m;
		if (b.june.html(""), c || (b.dump.html(""), b.toClearInit(), b.layerList.html(""), b.dumpLayer.html(""), b.popupContent.html("")), 0 == b.june.children(".june-imgBg").length && $('<div class="june-imgBg" style="width:640px;"></div>').appendTo(b.june), d = "zdyArea", a.indexOf("宝贝样式设置") >= 0 ? (a = f(a, "get"), d = "zdyItem") : a = e(a, "get"), g = JSON.parse(a), "zdyArea" == d) {
			for (h = g.moduleHeight, i = g.moduleBg, j = g.data, $("#phoneToolInput").children(".c-ptiModuleBg:eq(0)").children("input").val(i).trigger("change"), $("#ptiModuleHeight").val(h).trigger("change"), k = 0; 4 > k; k++) g["moduleBg_" + (k + 1)] && "" != g["moduleBg_" + (k + 1)] && ($("#phoneToolBtnAdd").triggerHandler("click"), $("#phoneToolInput").children(".c-ptiModuleBg:eq(" + (k + 1) + ")").children("input").val(g["moduleBg_" + (k + 1)]).trigger("change"));
			for (l = 0; l < j.length; l++)"false" == j[l].
			switch &&(m = b.appConfig["jphonetoolb"], b.setAppID(m[2]), b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), m[2].href = j[l].href, m[2].hrefY = j[l].href, $(m[0]).appendTo(b.june).tResize().css({
				left: b.tParseInt(j[l].left),
				top: b.tParseInt(j[l].top),
				width: b.tParseInt(j[l].width),
				height: b.tParseInt(j[l].height)
			}).attr("data-config", JSON.stringify(m[2])).attr("appID", m[2].appID).addClass(b.selectedVal), createdApp = $(b.appCls + "[appID='" + m[2].appID + "']"), b.jSelectsedDom = b.jSelectsedDom.add(createdApp))
		} else!
		function(a) {
			var c, d, e;
			if (!(g.childConfig.length < 1)) {
				if (g.itemOuterSpace = g.childConfig[0].itemLeft, g.itemInnerSpace = g.childConfig[1] ? g.childConfig[1].itemLeft - g.itemWidth - g.childConfig[0].itemLeft : 0, g.itemCount = g.childConfig.length, g.itemColumn = 1, g.childConfig.length > 1) for (c = 1; c < g.childConfig.length && g.childConfig[c].itemTop == g.childConfig[0].itemTop; c++) g.itemColumn++;
				$("#morephonetoolsbox").slideUp(100).attr("data-toolType", a).attr("data-status", "close"), $("#morephonetoolsbox").children("ul").children("li.selected").removeClass("selected"), $("#morephonetoolsbox").children("ul").children("li[data-toolType='" + a + "']").addClass("selected"), b.june.children(".june-imgBg").css("position", "absolute"), $("#phoneToolInput1").show(), $("#phoneToolInput").hide(), $(".t-control-btns-close").css("visibility", "hidden"), $("#phoneToolBtnAddBB").trigger("click"), $("#phoneToolRightPanel").hide(), $("#phoneToolRightPanel1").show(), $("#pti1ModuleBg").val(g.moduleBg), $("#pti1ItemHeight").val(g.itemHeight), $("#pti1ItemColumn").val(g.itemColumn), $("#pti1ItemCount").val(g.itemCount), $("#pti1ItemBgColor").val(g.itemBgColor), $("#pti1ItemOuterSpace").val(g.itemOuterSpace), $("#pti1ItemInnerSpace").val(g.itemInnerSpace), "9" == g.itemTbgColor.length ? (d = g.itemTbgColor.substr(1, 2), g.itemTbgColor = g.itemTbgColor.substr(0, 1) + g.itemTbgColor.substr(3), g.itemTopacity = b.countOpacity(d, !0)) : g.itemTopacity = 100, "9" == g.itemRbgColor.length ? (d = g.itemRbgColor.substr(1, 2), g.itemRbgColor = g.itemRbgColor.substr(0, 1) + g.itemRbgColor.substr(3), g.itemRopacity = b.countOpacity(d, !0)) : g.itemRopacity = 100, "9" == g.itemPbgColor.length ? (d = g.itemPbgColor.substr(1, 2), g.itemPbgColor = g.itemPbgColor.substr(0, 1) + g.itemPbgColor.substr(3), g.itemPopacity = b.countOpacity(d, !0)) : g.itemPopacity = 100, "9" == g.itemSbgColor.length ? (d = g.itemSbgColor.substr(1, 2), g.itemSbgColor = g.itemSbgColor.substr(0, 1) + g.itemSbgColor.substr(3), g.itemSopacity = b.countOpacity(d, !0)) : g.itemSopacity = 100, e = require("scripts/drawPTBaoBei"), e.init($("#ptBaobeiDom"), g, !1, !0), $("#ptrpItemTabs div.ptrp-tab-c:eq(0)").trigger("click")
			}
		}("zdyItem")
	}, a.codeImport = function() {
		b.snapSwitch = !1, d.tDialogCode("", !0, a.codeImportDialogCode)
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
		b.dialogSetting.title = a, b.dialogSetting.height = "focusslider.php" == d ? 640 : 560, $("#" + b.dialogID).dialog(b.dialogSetting), "number" == typeof g ? e.active = g : (activeArr = g.split(";"), e.active = activeArr[0], e.activePage = activeArr[1]), c.ajaxHtml(d, e, f)
	}, a.tDialogCode = function(d, e, f, g) {
		var h = "phonetool/codeforim.php",
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
		var e = "phonetool/code.php",
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
					var d = b.jHtmlCheck($("#codeText").val());
					return d ? (a(d), $(this).dialog("close"), $(".ui-tooltip").hide(), void 0) : !1
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			}
		}), c.ajaxHtml(e, f)
	}, a.tDialogSave = function(a) {
		var d = "phonetool/saveInput.php",
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
	}, a
}), define("scripts/mouse.js", function(a) {
	var u, b = require("scripts/D"),
		d = (b.appConfig, require("scripts/snap")),
		e = require("scripts/drag"),
		f = require("scripts/resize"),
		g = require("scripts/zoom"),
		i = (require("scripts/UI_Dialog"), require("scripts/layer")),
		j = require("scripts/action"),
		k = require("scripts/align"),
		l = require("scripts/tLogin"),
		m = require("scripts/contextMenu"),
		n = require("scripts/controlBtn"),
		o = require("scripts/code_im"),
		p = require("scripts/interest"),
		q = require("scripts/moduleManage"),
		r = require("scripts/courseStep"),
		s = require("scripts/zdyEdit"),
		t = require("scripts/ptDrag"),
		v = {};
	return v.draw = require("scripts/drawArea"), v.select = require("scripts/select"), appManage = require("scripts/appManage"), a.act = function(c) {
		var n, o, h, i, k, l, m, p, g = $("#morephonetoolsbox").attr("data-toolType");
		switch (c) {
		case 0:
			b.tContextmenu.hide(), $("#tLayerMenu").hide(), b.create() && ("zdyArea" == g && v[b.curType].Start(this), "ptBaobeiDom" != $(this.target).attr("id") && (e.Start(this), f.Start(this)), $(this.target).parent().hasClass("juneItemBox") && t.Start(this), b.snapSwitch && d.snapStart(this));
			break;
		case 1:
			"zdyArea" == g && v[b.curType].Ing(this), "ptBaobeiDom" != $(this.target).attr("id") && (e.Ing(this), f.Ing(this)), t.Ing(this), b.snapSwitch && d.snapIng(this);
			break;
		case 2:
			"zdyArea" == g && v[b.curType].End(this), "ptBaobeiDom" != $(this.target).attr("id") && (e.End(this), f.End(this)), t.End(this), b.snapSwitch && d.snapEnd(this), b.ptDragEle && b.dragStartX && b.dragStartY && (h = this.pageX, i = this.pageY, k = b.dragStartX, l = b.dragStartY, m = b.june.find(b.selected), p = "drag", m.length > 1 && (n = [], o = [], p = "drag"), m.each(function() {
				var c = $(this);
				(Math.abs(h - k) > 3 || Math.abs(i - l) > 3) && (m.length > 1 ? c.attr("data-attachType") ? (n.push(c.parent()), o.push(c)) : (n.push(c), o.push(void 0)) : c.attr("data-attachType") ? (n = c.parent(), o = c) : (n = c, o = void 0))
			}), n && n.length > 0 && j.create(p, n, o)), b.dragStartX = null, b.dragStartY = null, b.ptDragEle = null, a.showRightSet(b.junebox.attr("data-ptType") || "rq")
		}
	}, $("#ptrpITypeBox").on("click", "span", function(a, b) {
		var c = $(this),
			d = $("#ptrpITypeBox").children("span.active").index();
		$("#ptrpITypeBox").children("span.active").removeClass("active"), c.addClass("active"), $("#ptrpItypeValue").val(c.index()), d != c.index() && $("#phoneToolRightPanel").triggerHandler("update.forRightPanel", b)
	}), $("#ptrpIHrefX").on("updateHref.forHref", function(a, c) {
		var g, d = $("#ptrpItypeValue").val(),
			e = $("#ptrpIHrefX").val(),
			f = "",
			h = "",
			i = [],
			j = "",
			k = "",
			l = [],
			m = "";
		if (e && "" != e && "#" != e && "" != d) if ("1" == d) {
			if (i = e.match(/((\&|\?){1}id\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !i || i.length < 1) return;
			if (h = i[0].replace(/(\&|\?)id\=/g, ""), "" == $.trim(h)) return b.tMessage("您填写的宝贝链接不规范，请重新填写！"), void 0;
			f = "https://h5.m.taobao.com/awp/core/detail.htm?id=" + $.trim(h), "" != f && (g = JSON.parse(c._ff.attr("data-config") || "{}"), g.href = f, c._ff.attr("data-config", JSON.stringify(g)))
		} else if ("4" == d) {
			if (e.indexOf("tmall.com") < 0 && e.indexOf("taobao.com") < 0 && e.indexOf("jiyoujia.com") < 0) return;
			if (i = e.match(/category-(\d+)(?=(\.))/g), i && i.length > 0 ? k = i[0].replace(/category-/g, "") : (i = e.match(/((\&|\?){1}catid\=){1}\s*?(\d+)\s*?(?=(\&|$))/gi), i && i.length > 0 && (k = i[0].replace(/(\&|\?)catid\=/gi, ""))), "" == $.trim(k)) return b.tMessage("您填写的分类链接不规范，请重新填写！"), void 0;
			b.checkExport = !0, $.ajax({
				url: "/gm/gm.php",
				data: {
					url: e
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (j = a, f = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(j) + "#list?catId=" + $.trim(k)), "" != f && (g = JSON.parse(c._ff.attr("data-config") || "{}"), g.href = f, c._ff.attr("data-config", JSON.stringify(g))), b.checkExport = !1
				},
				error: function() {
					b.checkExport = !1
				}
			})
		} else if ("2" == d) {
			if (e.indexOf("tmall.com") < 0 && e.indexOf("taobao.com") < 0 && e.indexOf("jiyoujia.com") < 0) return;
			b.checkExport = !0, $.ajax({
				url: "/gm/gm.php",
				data: {
					url: e
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (j = a, f = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(j)), "" != f && (g = JSON.parse(c._ff.attr("data-config") || "{}"), g.href = f, c._ff.attr("data-config", JSON.stringify(g))), b.checkExport = !1
				},
				error: function() {
					b.checkExport = !1
				}
			})
		} else if ("3" == d)(e.indexOf("taoquan") >= 0 || e.indexOf("coupon") >= 0) && (l = e.split("?"), l[1] && "" != l[1] && (f = "https://shop.m.taobao.com/shop/coupon.htm?" + l[1]), "" != f && (g = JSON.parse(c._ff.attr("data-config") || "{}"), g.href = f, c._ff.attr("data-config", JSON.stringify(g))));
		else if ("5" == d) {
			if (m = $.base64.encode(e), e.indexOf(":") >= 0) return b.tMessage("子旺旺无法获取移动端地址，请改为主号昵称重试！"), void 0;
			m && "" != m && (f = "https://h5.m.taobao.com/ww/index.htm#!dialog-" + m), "" != f && (g = JSON.parse(c._ff.attr("data-config") || "{}"), g.href = f, c._ff.attr("data-config", JSON.stringify(g)))
		}
	}), $("#ptrpITypeLi").on("click", "span.ptrp-radio", function() {
		var a = $(this),
			b = a.index();
		$("#ptrpITypeLi").children("span.active").removeClass("active"), a.addClass("active"), "1" == b ? ($("#ptrpItype").val("mobile").trigger("change"), $("#ptrpIHrefX").hide(), $("#ptrpIHrefY").show(), $("#ptrpITypeBox").hide()) : "2" == b && ($("#ptrpItype").val("pc").trigger("change"), $("#ptrpITypeBox").show(), $("#ptrpIHrefX").show(), $("#ptrpIHrefY").hide()), $("#phoneToolRightPanel").triggerHandler("update.forRightPanel")
	}), $("#phoneToolRightPanel").on("update.forRightPanel", function(a, c) {
		if ((!c || "load" != c._fc) && (curDom = c ? c._ff : u)) {
			$("#ptrpIHrefX").triggerHandler("updateHref.forHref", {
				_ff: curDom
			});
			var d = JSON.parse(curDom.attr("data-config") || "{}");
			curDom.width($("#ptrpI1").val()), curDom.height($("#ptrpI2").val()), curDom.css("left", b.tParseInt($("#ptrpI3").val())), curDom.css("top", b.tParseInt($("#ptrpI4").val())), d.hrefTypeValue = $("#ptrpItypeValue").val(), d.hrefType = $("#ptrpItype").val(), d.hrefX = $("#ptrpIHrefX").val(), d.hrefY = $("#ptrpIHrefY").val(), curDom.attr("data-config", JSON.stringify(d))
		}
	}), $("#phoneToolRightPanel").on("keyup", function() {
		$("#phoneToolRightPanel").triggerHandler("update.forRightPanel")
	}), $("#phoneToolRightPanel").on("change", function() {
		$("#phoneToolRightPanel").triggerHandler("update.forRightPanel")
	}), a.showRightSet = function(a) {
		var c, d;
		"rq" == a && (b.jSelectsedDom.length > 0 ? ($("#phoneToolRightPanel").show(), u && u.is(b.jSelectsedDom.eq(0)) ? ($("#ptrpI1").val(u.width()), $("#ptrpI2").val(u.height()), $("#ptrpI3").val(b.tParseInt(u.css("left"))), $("#ptrpI4").val(b.tParseInt(u.css("top")))) : (c = b.jSelectsedDom.eq(0), u = c, d = JSON.parse(c.attr("data-config") || "{}"), $("#phoneToolRightPanel").children(".ptrp-title").html("热区" + u.index() + "设置"), $("#ptrpI1").val(c.width()), $("#ptrpI2").val(c.height()), $("#ptrpI3").val(b.tParseInt(c.css("left"))), $("#ptrpI4").val(b.tParseInt(c.css("top"))), d.href ? $("#ptrpIHref").val(d.href) : $("#ptrpIHref").val(""), d.hrefY ? $("#ptrpIHrefY").val(d.hrefY) : $("#ptrpIHrefY").val(""), d.hrefX ? $("#ptrpIHrefX").val(d.hrefX) : $("#ptrpIHrefX").val(""), d.hrefTypeValue ? $("#ptrpITypeBox").children("span:eq(" + (d.hrefTypeValue - 1) + ")").trigger("click", {
			_fc: "load"
		}) : $("#ptrpITypeBox").children("span.active").removeClass("active"), !! d.hrefType && $("#ptrpITypeLi").children("span.ptrp-radio[data-tt='" + d.hrefType + "']").trigger("click"))) : $("#phoneToolRightPanel").hide())
	}, a.checkEvent = function(c, d, e, f) {
		return d && d.parentNode && "june" != d.id && "zdybox" != d.id ? (e = e || 0, $(d).hasClass(b.appClsVal) && !$(d).hasClass("junehtml") || $(d).hasClass(b.appChildClsVal) || $(d).hasClass(b.rhClsVal) ? (c.target = d, c) : "ptBaobeiDom" == $(d).parent().parent().attr("id") || $(d).parent().hasClass("juneItemBox") ? (c.target = d, c) : !($(d).hasClass(b.appClsVal) && $(d).hasClass("junehtml") || $(d).hasClass("june-imgBg") && !$(d).hasClass("junehtml")) || "june" != $(d.parentNode).attr("id") && "zdybox" != $(d.parentNode).attr("id") ? $(d).hasClass("t-app-mongolia") || $(d).hasClass("t-app-other") || $(d).hasClass("t-app-junebg") ? (c.target = d.parentNode, c) : e > 15 ? c : a.checkEvent(c, d.parentNode, e + 1, f) : (f || (c.target = d.parentNode), c)) : c
	}, a.dblclickEvent = function(c, d) {
		var g, e, f, i, j, k, l;
		if (c = a.checkEvent(c, c.target), "june" != c.target.id && "zdybox" != c.target.id && !c.ctrlKey) {
			if (e = $(c.target), f = 0, e.hasClass("t-app-child")) {
				switch (g = e.attr("data-dblType")) {
				case "jphonetoolb":
					f = 0;
				default:
					f = 0
				}
				e = e.parent()
			}
			if (e.hasClass(b.rhClsVal) && (e = e.parent()), b.appConfig, i = e.attr("data-dblType"), j = e.attr("data-config"), j || (j = e.parent().attr("data-config"), e = e.parent()), d && d.popup && (f = -1), i && b.click()) {
				if ("juneCustom" == i) return;
				if (j = JSON.parse(j), j.getZdy && (j.width || j.height) || (j.width = e.width(), j.height = e.height()), j.top = b.tParseInt(e.css("top")), j.left = b.tParseInt(e.css("left")), j.childConfig && j.childConfig.length > 0) for (k = 0; k < j.childConfig.length; k++) l = e.children(b.appChildCls + ":eq(" + k + ")"), j.childConfig[k].width = l.width(), j.childConfig[k].height = l.height(), j.childConfig[k].top = b.tParseInt(l.css("top")), j.childConfig[k].left = b.tParseInt(l.css("left")), ("jspb" == i || "jbob" == i) && (j.childConfig[k].appName = l.attr("data-appName"));
				if ("jsfb" == i) return
			}
		}
	}, a.mousedownEvent = function(c) {
		var d, e, f;
		b.clickPageX = c.pageX, b.clickPageY = c.pageY, ("img" == c.target.tagName.toLowerCase() || "area" == c.target.tagName.toLowerCase() || "a" == c.target.tagName.toLowerCase()) && c.preventDefault(), ($(c.target).hasClass("t-jadb-title") || $(c.target).parent().hasClass("t-jadb-title") && $(c.target).hasClass("t-app-mongolia") || $(c.target).parent().hasClass("t-jadb-panel") && $(c.target).hasClass("t-app-mongolia")) && $(c.target).hasClass("t-app-mongolia") && (c.target = c.target.parentNode), e = !1, b.offsleft < 150 && ($("#configgroup div").removeClass("selected"), $("#leftpannel,#leftconsole").hide()), c = a.checkEvent(c, c.target), b.showControl(c), 2 != c.button && (f = $(c.target), (c.ctrlKey || c.shiftKey || 91 == c.keycode || 93 == c.keycode) && (f.hasClass(b.appClsVal) || f.hasClass(b.appChildClsVal)) ? (d = f.attr("appID"), attachID = f.attr("attachID"), b.jSelectsedDom.each(function() {
			var a = $(this);
			a.hasClass(b.appChildClsVal) && a.attr("appID") != d && (e = !0)
		}), attachID && e ? (f.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(f[0])) : f.hasClass(b.selectedVal) ? (f.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(f[0]), b.selectLayer(d, !1), attachID && "jspb" == f.attr("data-dblType") ? $(b.thumbCls + "[attachID='" + attachID + "']").removeClass(b.thumbSelectedVal) : attachID || "jspb" != f.attr("data-dblType") || $("#tParentThumb").removeClass(b.thumbSelectedVal)) : (f.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(f), b.selectLayer(d, !0), attachID && "jspb" == f.attr("data-dblType") ? $(b.thumbCls + "[attachID='" + attachID + "']").addClass(b.thumbSelectedVal) : attachID || "jspb" != f.attr("data-dblType") || $("#tParentThumb").addClass(b.thumbSelectedVal)), c.preventDefault(), c.stopPropagation()) : a.act.call(c, 0))
	}, b.d.on("click", function(c) {
		var d, e, f, h, t, u, v, w, x, y, z, A, B, C, D, E, F, G;
		"area" != c.target.tagName.toLowerCase() && "a" != c.target.tagName.toLowerCase() || $(c.target).hasClass("june-preview") || c.preventDefault(), b.showControl(c, "click"), c = a.checkEvent(c, c.target), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass(b.thumbClsVal) && (c.target = c.target.parentNode), $(c.target).parent().parent().hasClass(b.thumbClsVal) && (c.target = c.target.parentNode.parentNode), 2 != c.button && "june" != c.target.id && "zdybox" != c.target.id && (b.tContextmenu.hide(), $("#tLayerMenu").hide(), d = $(c.target), e = d.attr("data-target"), f = d.attr("data-curType"), h = d.attr("data-actType"), t = d.attr("data-codeType"), u = d.attr("data-zoomType"), v = d.attr("data-moduleType"), w = d.attr("data-saveType"), x = d.attr("data-interestType"), y = d.attr("data-loginType"), z = d.attr("data-courseType"), A = d.attr("data-zdyName"), B = d.attr("data-zdyAppID"), C = d.attr("data-zdyAttachID"), D = d.attr("data-zdyOtherName"), E = d.attr("data-alignType"), d.hasClass(f) || b.click() && ("selected" == e ? (b.curType = f, b.updateCurType()) : "clicked" == e ? (b.actType = h, appManage.create(h)) : "checked" == e ? b.dragSwitch = b.dragSwitch ? !1 : !0 : "layer-selected" == e ? i.select(c) : "thumb-selected" == e ? i.selectThumb(c) : "layerEye-clicked" == e ? i.eyeClick(c) : "action-clicked" == e ? j.click() : "menu-clicked" == e ? m.click(c) : "control-clicked" == e ? n.click(c) : "zoom-clicked" == e ? g.tZoom(u) : "align-clicked" == e ? k.toAlign(E) : "coded" == e ? o[t]() : "module-clicked" == e ? ("app" == v && r.click(1), q.click(v)) : "save-clicked" == e ? (q.control(c, w), "use" == w && (F = b.tParseInt(b.june.css("top")), G = b.tParseInt(b.june.css("left")), b.offstop += F - b.oldOffsTop, b.offsleft += G - b.oldOffsLeft, b.oldOffsTop = F, b.oldOffsLeft = G, $("#juneMoveBtn").css({
			left: G - 20,
			top: F - 20
		}).show())) : "login-clicked" == e ? l.control(y) : "layermenu-clicked" == e ? i.chooseLayerMenu(c) : "interest-clicked" == e ? p.control(c, x) : "course" == e ? r.click(z) : "zdy-clicked" == e && s.click(c, A, B, C, D)))
	}), b.d.on("contextmenu", function(c) {
		var d, e, f, g, h, j, k, l, m;
		if (c = a.checkEvent(c, c.target), !$(c.target).hasClass("t-layer-eye") && $(c.target).parent().hasClass("t-thumb") && (c.target = c.target.parentNode), $(c.target).parent().parent().hasClass("t-thumb") && (c.target = c.target.parentNode.parentNode), !$(c.target).hasClass("junehtml")) {
			if (b.tContextmenu.hide(), $("#tLayerMenu").hide(), d = $(c.target), e = c.pageX, f = c.pageY, g = b.w.width() - 142, h = b.w.height() - 212, j = d.attr("appID"), k = d.attr("attachID"), "jspb" == d.attr("data-dblType")) return i.showLayer(c), void 0;
			e > g && (e = g), f > h && (f = h), b.tContextmenu.css({
				left: e + 5,
				top: f + 5
			}), b.menuEve = c, l = k ? $(b.appChildCls + "[attachID='" + k + "']") : $(b.appCls + "[appID='" + j + "']"), "jsfb" != l.attr("data-dblType") && ("jspb" == l.attr("data-dblType") ? b.tContextmenu.find(" li.t-context-add-child").show() : b.tContextmenu.find("li.t-context-add-child").hide(), m = b.tContextmenu.children(".t-app-menu").children(".t-context-dd"), l.hasClass(b.dragNaClsVal) ? m.html("允许拖拽").addClass("t-context-drag").removeClass("t-context-disdrag") : m.html("禁止拖拽").addClass("t-context-disdrag").removeClass("t-context-drag"), d.hasClass(b.appClsVal) ? (d.hasClass(b.selectedVal) || (b.chooseApp(j), b.chooseLayer(j)), b.tContextmenu.attr("data-appID", j).show(), c.preventDefault()) : d.hasClass(b.layerClsVal) ? (d.hasClass(b.layerSelectedVal) || (b.chooseApp(j), b.chooseLayer(j)), b.tContextmenu.attr("data-appID", j).show(), c.preventDefault()) : d.hasClass("t-thumb") && (d.hasClass("t-thumb-selected") || ($("#tParentThumb").removeClass("t-thumb-selected"), $("#tThumb").children(".t-thumb").removeClass("t-thumb-selected"), d.addClass("t-thumb-selected"), k ? b.chooseAppChild(k) : b.chooseApp(j)), b.tContextmenu.attr("data-appID", j).attr("data-attachID", k).show(), c.preventDefault()))
		}
	}), b.d.on("mousemove", function(c) {
		b.pageX = c.pageX, b.pageY = c.pageY, b.offsetX = c.offsetX, b.offsetY = c.offsetY, b.showControl(c, "move"), b.showControl(c, "click"), c = a.checkEvent(c, c.target), 2 != c.button && a.act.call(c, 1)
	}), b.d.on("mouseup", function(c) {
		b.showControl(c, "click"), c = a.checkEvent(c, c.target), 2 != c.button && a.act.call(c, 2)
	}), a.init = function() {
		b.june.off("dblclick").on("dblclick", a.dblclickEvent), b.june.off("mousedown").on("mousedown", a.mousedownEvent), b.june.off("scroll").on("scroll", function(a) {
			b.showControl(a, "click")
		})
	}, a.init(), a
}), define("scripts/user.js", function(a) {
	var b = require("scripts/D"),
		c = b.tUserDate.replace(/-/g, ""),
		d = b.tParseInt((new Date).Format("dd")),
		f = (require("scripts/tAjax"), [2, 11, 13, 2, 8, 17, 5 - d, 13]);
	return $.ajax({
		url: "user.php",
		type: "POST",
		data: {
			type: "g"
		},
		dataType: "json",
		success: function(e) {
			e && "yes" == e[0] && (b.tUserIp = e[1], c = e[2], d = b.tParseInt((new Date).Format("dd")), f = [2, 11, 13, 2, 8, 17, 5 - d, 13]), a.click()
		},
		error: function() {
			a.click()
		}
	}), a.init = function() {
		b.tUserLogin && "" != b.tUserName ? (!0 && (b.arrayX = !0), $.widget("custom.fontselectmenu", $.ui.selectmenu, {
			_renderItem: function(a, b) {
				var c = $("<li>");
				return $("<span>", {
					style: b.element.attr("data-style"),
					text: b.label
				}).appendTo(c), c.appendTo(a)
			}
		}), a.click(), $(b.tLoadingDiv).appendTo(b.b).hide(), $("#tSaveUsedSwitchBtn").off("click").on("click", function() {
			var c = $(this).attr("status") || "open";
			"close" == c ? (b.tAutoSaveUsedSwitch = !0, $(this).attr("status", "open"), $("#tSaveUsedSwitchBtn").html("关闭自动保存").css({
				backgroundImage: "url(images/gouhover.jpg)"
			})) : (b.tAutoSaveUsedSwitch = !1, $(this).attr("status", "close"), $("#tSaveUsedSwitchBtn").html("开启自动保存").css({
				backgroundImage: "url(images/gou.jpg)"
			}))
		}), $("#tSaveUsedSwitchBtn").trigger("click"), b.toClearInit()) : (!0 && (b.arrayX = !1), b.tUserLogin && "" != b.tUserName || a.kasiuuu("悬浮工具目前仅提供于注册用户使用！<a target='_blank' href='void(0)' onclick=\"toMLogin()\" style='color:#007799;'>点击此处登录</a>。"))
	}, a.kasiuuu = function(a) {
		!0 && (b.arrayX = !1), a && b.tMessage(a, "login")
	}, a.getER = function(a, c) {
		var d = b.tParseInt(a).toString(2);
		return d *= f[c]
	}, a.keyArray = function() {
		var d, e, b = "";
		for (d = 0; d < c.length; d++) e = c.charAt(d), b += a.getER(e, d);
		return b
	}, a.create = function() {
		var b = a.keyArray();
		$.ajax({
			url: "user.php",
			type: "POST",
			data: {
				type: "k"
			},
			success: function(c) {
				c && "" != c ? ("0" == c || c != b) && a.kasiuuu() : a.kasiuuu()
			}
		})
	}, a.click = function() {
		$.ajax({
			url: "user.php",
			type: "POST",
			data: {
				type: "c"
			},
			success: function(c) {
				"yes" == c ? b.tUserLogin && "" != b.tUserName || a.create() : a.kasiuuu()
			}
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
	}), c.ajaxJson("phonetool/load.php", {
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
		c.ajaxJson("phonetool/load.php", {
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
		c.ajaxJson("phonetool/load.php", {
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
}), define("scripts//moduleManage.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/tAjax"),
		d = require("scripts/UI_Dialog");
	return b.show() && (a.toSet = function() {}), a.snapSave = function(a) {
		require("scripts/action"), b.tLoading(!0), b.startParse = !0, setTimeout(function() {
			var d, c = {};
			c.nType = "jvs_1_0", b.tempArrayLabel = [], b.june.children(b.appCls).each(function() {
				b.tempArrayLabel.push($(this).attr("data-appLabel") || "")
			}), c.arrayLabelName = b.tempArrayLabel, c.juneHeightVal = $("#moduleHeight").val(), b.juneSnapArray1 = $.extend({}, c), b.tLoading(!1), b.startParse = !1, d = require("scripts/code_im"), d.getCodeExport(function(b) {
				a(b)
			}, !0, !0)
		}, 1e3)
	}, a.toSave = function(e) {
		b.tUserLogin ? d.tDialogSave(function(d, f, g, h) {
			return "" == d ? (b.tMessage("请输入一个名称！"), void 0) : (b.tLoading(!0), d != g ? (f.dialog("close"), $(".ui-tooltip").hide(), a.snapSave(function(f) {
				var g = {};
				g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("phonetool/save.php", {
					saveName: d,
					userName: e[1],
					saveObj: g
				}, function(f) {
					if (f[0]) b.tLoading(!0), b.tLoading(!1), b.tMessage(f[1]), b.openSaveDocName = d, f[2] && (b.openSaveDocID = f[2]), f[3] && (b.openSaveDocTime = f[3]), a.getSave([b.tUserLogin, b.tUserName]);
					else if ("already" == f[1]) {
						var h = "";
						f[3] && (h = f[3]), b.tConfirm(f[2], function() {
							c.ajaxJsonS("phonetool/save.php", {
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
					g.actionCollection = b.juneSnapArray1, g.actionConfig = f, b.tLoading(!0), c.ajaxJsonS("phonetool/save.php", {
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
	}, a.autoSave = function() {
		a.snapSave(function(d) {
			var e = {};
			e.actionCollection = b.juneSnapArray1, e.actionConfig = d, c.ajaxJsonT("phonetool/save.php", {
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
				}), o = $("#moduleHeight").val(), p = require("scripts/code_im"), p.getCodeExport(function(a) {
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
			p = require("scripts/code_im"), q = g.actionCollection || "", r = g.snapCode || "", p.codeImportDialogCode(r), q && ($("#moduleHeight").val(q.juneHeightVal), s = require("scripts/action"), t = require("scripts/layer"), b.tempArrayLabel = q.arrayLabelName, b.june.children(b.appCls).each(function(a) {
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
		a && c.ajaxJsonT("phonetool/load.php", {
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
			c.ajaxJson("phonetool/load.php", {
				ID: d,
				type: "delete"
			}, function(c) {
				c[0] && (b.tMessage("删除成功！"), a.getSave([b.tUserLogin, b.tUserName]))
			})
		})
	}, a.useSave = function(d, e, f) {
		c.ajaxJson("phonetool/load.php", {
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
}), define("scripts/little.js", function(a) {
	return a.create = function() {}, a
}), define("scripts/courseStep.js", function(a) {
	return a
});