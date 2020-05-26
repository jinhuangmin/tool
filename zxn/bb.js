jQuery.base64 = function() {
	function e(a, b) {
		var d = c.indexOf(a.charAt(b));
		if (-1 === d) throw "Cannot decode base64";
		return d
	}
	function f(a, b) {
		for (var c, d, e; a.length > 0;) if (c = a[0], 128 > c) a.shift(), b.push(String.fromCharCode(c));
		else if (192 == (128 & c)) {
			if (a.length < 2) break;
			c = a.shift(), d = a.shift(), b.push(String.fromCharCode(((31 & c) << 6) + (63 & d)))
		} else {
			if (a.length < 3) break;
			c = a.shift(), d = a.shift(), e = a.shift(), b.push(String.fromCharCode(((15 & c) << 12) + ((63 & d) << 6) + (63 & e)))
		}
	}
	function g(a) {
		var d, g, c = 0,
			h = a.length,
			i = [],
			j = [];
		if (a = String(a), 0 === h) return a;
		if (0 !== h % 4) throw "Cannot decode base64";
		for (a.charAt(h - 1) === b && (c = 1, a.charAt(h - 2) === b && (c = 2), h -= 4), d = 0; h > d; d += 4) e(a, d), e(a, d + 1), e(a, d + 2), e(a, d + 3), g = e(a, d) << 18 | e(a, d + 1) << 12 | e(a, d + 2) << 6 | e(a, d + 3), j.push(g >> 16), j.push(255 & g >> 8), j.push(255 & g), f(j, i);
		switch (c) {
		case 1:
			g = e(a, d) << 18 | e(a, d + 1) << 12 | e(a, d + 2) << 6, j.push(g >> 16), j.push(255 & g >> 8);
			break;
		case 2:
			g = e(a, d) << 18 | e(a, d + 1) << 12, j.push(g >> 16)
		}
		if (f(j, i), j.length > 0) throw "Cannot decode base64";
		return i.join("")
	}
	function h(a, b) {
		128 > a ? b.push(a) : 2048 > a ? (b.push(192 + (31 & a >> 6)), b.push(128 + (63 & a))) : (b.push(224 + (15 & a >> 12)), b.push(128 + (63 & a >> 6)), b.push(128 + (63 & a)))
	}
	function i(a) {
		var d, e, f, g, i, j, k, l, m;
		if (1 !== arguments.length) throw "SyntaxError: exactly one argument required";
		if (a = String(a), 0 === a.length) return a;
		for (f = [], g = [], i = a.length, d = 0; i > d;) {
			for (h(a.charCodeAt(d), f); f.length >= 3;) j = f.shift(), k = f.shift(), l = f.shift(), e = j << 16 | k << 8 | l, g.push(c.charAt(e >> 18)), g.push(c.charAt(63 & e >> 12)), g.push(c.charAt(63 & e >> 6)), g.push(c.charAt(63 & e));
			d++
		}
		switch (f.length) {
		case 1:
			m = f.shift(), e = m << 16, g.push(c.charAt(e >> 18) + c.charAt(63 & e >> 12) + b + b);
			break;
		case 2:
			j = f.shift(), k = f.shift(), e = j << 16 | k << 8, g.push(c.charAt(e >> 18) + c.charAt(63 & e >> 12) + c.charAt(63 & e >> 6) + b)
		}
		return g.join("")
	}
	var b = "=",
		c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		d = "1.1";
	return {
		decode: g,
		encode: i,
		VERSION: d
	}
}(jQuery), $(function() {
	function a(b, c) {
		var d, e;
		for (e in b) {
			if (b[e]["categoriesID"] == c) {
				d = b[e].categoriesName;
				break
			}
			if (b[e]["subShopCategoryList"] && b[e]["subShopCategoryList"].length > 0 && (d = a(b[e]["subShopCategoryList"], c)), d) break
		}
		return d
	}
	var j, h = ($(window), $(document), $("#tablebox"), $("#j_table"), window["location"]["href"]);
	_dom = null, ts_1 = {
		line: 3,
		column: 4,
		borderWidth: 1,
		borderColor: "#000",
		bgColor: "#fff"
	}, j = "|@june@||@june@||@june@|100|@june@|", $("#urlHtmlHidden1").val(j).hide(), $("#urlHtmlHidden2").val(j).hide(), $("#urlHtmlHidden3").val(j).hide(), $("#urlHtmlHidden4").val(j).hide(), $("#urlHtmlHidden5").val(j).hide(), $("#urlHtmlHidden6").val(j).hide(), $("#urlHtmlHidden7").val(j).hide(), $("#urlHtmlHidden8").val(j).hide(), $("#divUrlType").on("click", "label", function() {
		var a = $(this),
			b = a.next("input").val(),
			c = a.index() / 2,
			d = $("#divUrlType").attr("data-focus"),
			e = $("#urlValue").val(),
			f = $("#urlResult").val(),
			g = $("#urlEwm").attr("src"),
			h = $("#ewmsize").val(),
			i = $("#urlEwm1").attr("src"),
			j = $("#urlHtmlHidden" + (c + 1)).val().split("|@june@|");
		$("#divUrlType").children("label").removeClass("i-selected"), a.addClass("i-selected"), $("#urlHtmlHidden" + (parseInt(d, 10) + 1)).val(e + "|@june@|" + f + "|@june@|" + g + "|@june@|" + h + "|@june@|" + i), $("#urlValue").val(j[0]), $("#urlResult").val(j[1]), $("#urlEwm").attr("src", j[2]), $("#ewmsize").val(j[3]), $("#urlEwm1").attr("src", j[4]), $("#divUrlType").attr("data-focus", c), $("#otherDesc").hide(), "wang" == b ? $("#urlLabel").html("旺旺昵称：") : "other" == b ? ($("#urlLabel").html("无线地址："), $("#otherDesc").show()) : $("#urlLabel").html("PC端地址：")
	}), $("#ewmsize").on("change", function() {
		var a = $(this),
			b = a.val(),
			c = $("#urlEwm").attr("src"),
			d = $("#urlEwm1").attr("src");
		"" != c && (c = c.replace(/&w=(\d+)&h=(\d+)/g, "&w=" + b + "&h=" + b).replace(/&w=(\d+)/g, "&w=" + b), $("#urlEwm").attr("src", c)), "" != d && (d = d.replace(/&w=(\d+)&h=(\d+)/g, "&w=" + b + "&h=" + b).replace(/&w=(\d+)/g, "&w=" + b), $("#urlEwm1").attr("src", d))
	}), $("#urlSubmit").on("click", function() {
		var p, q, r, b = $("input[name='urlType']:checked").val(),
			c = $("#urlValue").val(),
			d = "",
			e = "",
			f = [],
			g = "",
			h = "",
			i = [],
			j = "",
			k = "",
			l = $("#ewmsize").val(),
			m = "",
			n = "";
		if (c && "" != c) if ("item" == b) {
			if (f = c.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), !f || f.length < 1) return;
			if (e = f[0].replace(/(\&|\?)id\=/g, ""), "" == e) return;
			d = "https://h5.m.taobao.com/awp/core/detail.htm?id=" + $.trim(e), k = "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=" + $.trim(e) + "&w=" + l + "&h=" + l, m = "http://gqrcode.alicdn.com/img?type=ci&item_id=" + $.trim(e) + "&w=" + l + "&h=" + l, $("#urlResult").val(d), $("#gm").attr("src", d), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m)
		} else if ("category" == b) {
			if (c.indexOf("tmall.com") < 0 && c.indexOf("taobao.com") < 0 && c.indexOf("jiyoujia.com") < 0 && c.indexOf("tmall.hk") < 0) return;
			f = c.match(/category-(\d+)(?=(\.|\-))/g), f && f.length > 0 ? h = f[0].replace(/category-/g, "") : (f = c.match(/((\&|\?){1}catid\=){1}(\d+)(?=(\&|$))/gi), f && f.length > 0 && (h = f[0].replace(/(\&|\?)catid\=/gi, ""))), $.ajax({
				url: "gm.php",
				data: {
					url: c
				},
				type: "POST",
				success: function(b) {
					b && "" != b ? (g = b, d = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(g) + "#list?catId=" + $.trim(h), c.indexOf("tmall.com") >= 0 ? $.ajax({
						url: "gm1.php",
						data: {
							shopid: g
						},
						type: "POST",
						dataType: "JSON",
						success: function(b) {
							try {
								n = a(b.data, h), c = c.replace(/(http?s?:?\/\/)([^\.]*)(\.tmall\.com)(.*?)/g, function(a, b, c, e) {
									return d = b + c + ".m" + e + "/shop/shop_auction_search.htm?ascid=" + $.trim(h) + "&scid=" + $.trim(h) + "&sort=default" + "&shop_cn=" + encodeURI(n), ""
								})
							} catch (e) {
								c = c.replace(/(http?s?:?\/\/)([^\.]*)(\.tmall\.com)(.*?)/g, function(a, b, c, e) {
									return d = b + c + ".m" + e + "/shop/shop_auction_search.htm?ascid=" + $.trim(h) + "&scid=" + $.trim(h) + "&sort=default", ""
								})
							}
							$("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d, $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m)
						}
					}) : ($("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d, $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m))) : $("#urlResult").val("")
				},
				error: function() {}
			})
		} else if ("shop" == b) {
			if (c.indexOf("tmall.com") < 0 && c.indexOf("taobao.com") < 0 && c.indexOf("jiyoujia.com") < 0 && c.indexOf("tmall.hk") < 0) return;
			$.ajax({
				url: "gm.php",
				data: {
					url: c
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (g = a, d = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(g), k = "http://gqrcode.alicdn.com/img?type=bs&v=1&shop_id=" + g + "&w=" + l + "&h=" + l, m = "http://gqrcode.alicdn.com/img?type=cs&v=1&shop_id=" + g + "&w=" + l + "&h=" + l), $("#urlResult").val(d), $("#gm").attr("src", d), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m)
				},
				error: function() {}
			})
		} else if ("yhq" == b)(c.indexOf("taoquan") >= 0 || c.indexOf("coupon") >= 0) && (i = c.split("?"), i[1] && "" != i[1] && (d = "https://shop.m.taobao.com/shop/coupon.htm?" + i[1]), $("#urlResult").val(d), $("#gm").attr("src", d), $("#urlEwm").attr("src", k), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m));
		else if ("wang" == b) {
			if (c.indexOf(":") >= 0) return alert("子旺旺无法获取移动端地址，请改为主号昵称重试！"), void 0;
			$.ajax({
				url: "gm2.php",
				data: {
					url: c
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (j = a, d = "https://im.m.taobao.com/ww/ad_ww_dialog.htm?to_user=" + j, $("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m))
				},
				error: function() {
					j = $.base64.encode(c), j && "" != j && (d = "https://h5.m.taobao.com/ww/index.htm#!dialog-" + j), $("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m)
				}
			})
		} else if ("ppt" == b) {
			if (c.indexOf("ju.taobao.com") < 0) return;
			if (f = c.match(/((\&|\?){1}act_sign_id\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !f || f.length < 1) return;
			if (e = f[0].replace(/(\&|\?)act_sign_id\=/g, ""), "" == $.trim(e)) return;
			d = "https://www.taobao.com/market/ju/branddetail.php?brand_id=" + $.trim(e), $("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m)
		} else if ("dptc" == b) {
			if (r = c.match(/((\&|\?){1}comboId\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !r || r.length < 1 ? q = "" : (p = r[0].replace(/(\&|\?)comboId\=/g, ""), q = "&comboId=" + $.trim(p)), f = c.match(/((\&|\?){1}meal_id\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !f || f.length < 1) {
				if (f = c.match(/((\&|\?){1}mainItemId\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !f || f.length < 1) return;
				if (e = f[0].replace(/(\&|\?)mainItemId\=/g, ""), "" == $.trim(e)) return;
				d = "http://h5.m.taobao.com/detailplugin/mix.html?itemId=" + $.trim(e) + q + "&type=tmall&scn=tmallapp"
			} else {
				if (e = f[0].replace(/(\&|\?)meal_id\=/g, ""), "" == $.trim(e)) return;
				d = "http://h5.m.taobao.com/detailplugin/mix.html?itemId=" + $.trim(e) + q + "&type=tmall&scn=tmallapp"
			}
			$("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m)
		} else "other" == b && (d = "https://junezx.ews.m.jaeapp.com/url.php?url=" + escape(unescape(c)), $("#urlResult").val(d), $("#gm").attr("src", d), k = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + l + "&m=10&text=" + d.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", k), $("#urlEwm1").attr("src", m))
	}), h.indexOf("cnzoom.com") < 0 && h.indexOf("cnzoom.com") < 0 && ($("#urlSubmit").off("click"), $("#divUrlType").off("click"))
});