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
	var i, g = ($(window), $(document), $("#tablebox"), $("#j_table"), window["location"]["href"]);
	_dom = null, ts_1 = {
		line: 3,
		column: 4,
		borderWidth: 1,
		borderColor: "#000",
		bgColor: "#fff"
	}, i = "|@june@||@june@||@june@|100|@june@|", $("#urlHtmlHidden1").val(i).hide(), $("#urlHtmlHidden2").val(i).hide(), $("#urlHtmlHidden3").val(i).hide(), $("#urlHtmlHidden4").val(i).hide(), $("#urlHtmlHidden5").val(i).hide(), $("#urlHtmlHidden6").val(i).hide(), $("#urlHtmlHidden7").val(i).hide(), $("#divUrlType").on("click", "label", function() {
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
		$("#divUrlType").children("label").removeClass("i-selected"), a.addClass("i-selected"), $("#urlHtmlHidden" + (parseInt(d, 10) + 1)).val(e + "|@june@|" + f + "|@june@|" + g + "|@june@|" + h + "|@june@|" + i), $("#urlValue").val(j[0]), $("#urlResult").val(j[1]), $("#urlEwm").attr("src", j[2]), $("#ewmsize").val(j[3]), $("#urlEwm1").attr("src", j[4]), $("#divUrlType").attr("data-focus", c), "wang" == b ? $("#urlLabel").html("旺旺昵称：") : $("#urlLabel").html("PC端地址：")
	}), $("#ewmsize").on("change", function() {
		var a = $(this),
			b = a.val(),
			c = $("#urlEwm").attr("src"),
			d = $("#urlEwm1").attr("src");
		"" != c && (c = c.replace(/&w=(\d+)&h=(\d+)/g, "&w=" + b + "&h=" + b).replace(/&w=(\d+)/g, "&w=" + b), $("#urlEwm").attr("src", c)), "" != d && (d = d.replace(/&w=(\d+)&h=(\d+)/g, "&w=" + b + "&h=" + b).replace(/&w=(\d+)/g, "&w=" + b), $("#urlEwm1").attr("src", d))
	}), $("#urlSubmit").on("click", function() {
		var m, n, o, a = $("input[name='urlType']:checked").val(),
			b = $("#urlValue").val(),
			c = "",
			d = "",
			e = [],
			f = "",
			g = "",
			h = [],
			i = "",
			j = "",
			k = $("#ewmsize").val(),
			l = "";
		if (b && "" != b) if ("item" == a) {
			if (e = b.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), !e || e.length < 1) return;
			if (d = e[0].replace(/(\&|\?)id\=/g, ""), "" == d) return;
			c = "https://h5.m.taobao.com/awp/core/detail.htm?id=" + $.trim(d), j = "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=" + $.trim(d) + "&w=" + k + "&h=" + k, l = "http://gqrcode.alicdn.com/img?type=ci&item_id=" + $.trim(d) + "&w=" + k + "&h=" + k, $("#urlResult").val(c), $("#gm").attr("src", c), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
		} else if ("category" == a) {
			if (b.indexOf("tmall.com") < 0 && b.indexOf("taobao.com") < 0 && b.indexOf("jiyoujia.com") < 0 && b.indexOf("tmall.hk") < 0) return;
			e = b.match(/category-(\d+)(?=(\.))/g), e && e.length > 0 ? g = e[0].replace(/category-/g, "") : (e = b.match(/((\&|\?){1}catid\=){1}(\d+)(?=(\&|$))/gi), e && e.length > 0 && (g = e[0].replace(/(\&|\?)catid\=/gi, ""))), $.ajax({
				url: "gm.php",
				data: {
					url: b
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (f = a, c = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(f) + "#list?catId=" + $.trim(g)), $("#urlResult").val(c), $("#gm").attr("src", c), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c, $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
				},
				error: function() {}
			})
		} else if ("shop" == a) {
			if (b.indexOf("tmall.com") < 0 && b.indexOf("taobao.com") < 0 && b.indexOf("jiyoujia.com") < 0 && b.indexOf("tmall.hk") < 0) return;
			$.ajax({
				url: "gm.php",
				data: {
					url: b
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (f = a, c = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(f), j = "http://gqrcode.alicdn.com/img?type=bs&v=1&shop_id=" + f + "&w=" + k + "&h=" + k, l = "http://gqrcode.alicdn.com/img?type=cs&v=1&shop_id=" + f + "&w=" + k + "&h=" + k), $("#urlResult").val(c), $("#gm").attr("src", c), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
				},
				error: function() {}
			})
		} else if ("yhq" == a)(b.indexOf("taoquan") >= 0 || b.indexOf("coupon") >= 0) && (h = b.split("?"), h[1] && "" != h[1] && (c = "https://shop.m.taobao.com/shop/coupon.htm?" + h[1]), $("#urlResult").val(c), $("#gm").attr("src", c), $("#urlEwm").attr("src", j), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l));
		else if ("wang" == a) {
			if (i = $.base64.encode(b), b.indexOf(":") >= 0) return alert("子旺旺无法获取移动端地址，请改为主号昵称重试！"), void 0;
			i && "" != i && (c = "https://h5.m.taobao.com/ww/index.htm#!dialog-" + i), $("#urlResult").val(c), $("#gm").attr("src", c), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
		} else if ("ppt" == a) {
			if (b.indexOf("ju.taobao.com") < 0) return;
			if (e = b.match(/((\&|\?){1}act_sign_id\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !e || e.length < 1) return;
			if (d = e[0].replace(/(\&|\?)act_sign_id\=/g, ""), "" == $.trim(d)) return;
			c = "https://www.taobao.com/market/ju/branddetail.php?brand_id=" + $.trim(d), $("#urlResult").val(c), $("#gm").attr("src", c), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
		} else if ("dptc" == a) {
			if (o = b.match(/((\&|\?){1}comboId\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !o || o.length < 1 ? n = "" : (m = o[0].replace(/(\&|\?)comboId\=/g, ""), n = "&comboId=" + $.trim(m)), e = b.match(/((\&|\?){1}meal_id\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !e || e.length < 1) {
				if (e = b.match(/((\&|\?){1}mainItemId\=){1}\s*?(\d+)\s*?(?=(\&|$))/g), !e || e.length < 1) return;
				if (d = e[0].replace(/(\&|\?)mainItemId\=/g, ""), "" == $.trim(d)) return;
				c = "http://h5.m.taobao.com/detailplugin/mix.html?itemId=" + $.trim(d) + n + "&type=tmall&scn=tmallapp"
			} else {
				if (d = e[0].replace(/(\&|\?)meal_id\=/g, ""), "" == $.trim(d)) return;
				c = "http://h5.m.taobao.com/detailplugin/mix.html?itemId=" + $.trim(d) + n + "&type=tmall&scn=tmallapp"
			}
			$("#urlResult").val(c), $("#gm").attr("src", c), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
		}
	}), g.indexOf("//guop.com") < 0 && g.indexOf("//qq1.com") < 0 && ($("#urlSubmit").off("click"), $("#divUrlType").off("click"))
});