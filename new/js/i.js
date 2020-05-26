define("scripts/lib/ucren.js", function(a) {
	var b, c;
	String.prototype.isUrl = function() {
		return this.length < 20 || this.indexOf("ceshij.com") >= 0 || this.indexOf("127.1") >= 0 || this.indexOf("127.0.0.1") >= 0 ||1==1? !1 : !0
	}, String.prototype.toHex = function() {
		var a, b, c, d, e, f, g, h, i;
		if (this.indexOf("rgb") >= 0) {
			for (a = /^rgb\(([0-9]{0,3})\,\s([0-9]{0,3})\,\s([0-9]{0,3})\)/g, b = this.replace(a, "$1 $2 $3").split(" "), c = "#", d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], e = 0; 3 > e; e++) {
				for (f = null, g = b[e], h = [], i = g; g > 15;) f = g % 16, g = g / 16 >> 0, h.push(d[f]);
				h.push(d[g]), 15 >= i && h.push(0), c += h.reverse().join("")
			}
			return c 
		}
		return this.length > 7 ? "" : "#" != this.charAt(0) && 6 == this.length ? "#" + this.valueOf() : "#" != this.charAt(0) && this.length < 6 ? "" : this.valueOf()
	}, b = {
		isIe: /msie/i.test(navigator.userAgent),
		isIe6: /msie 6/i.test(navigator.userAgent),
		isFirefox: /firefox/i.test(navigator.userAgent),
		isSafari: /version\/[\d\.]+\s+safari/i.test(navigator.userAgent),
		isOpera: /opera/i.test(navigator.userAgent),
		isChrome: /chrome/i.test(navigator.userAgent),
		isStrict: "CSS1Compat" == document.compatMode,
		clip: null
	}, b.clipInit = function() {};
	for (c in b) a[c] = b[c];
	return a
}), define("scripts/tLogin.js", function(a) {
	var b = require("scripts/D"),
		c = require("scripts/moduleManage"),
		d = require("scripts/saveChoose");
	return a.init = function(a) {
		if (a[0]) {
			$.cookie("tLogin", !0), $.cookie("tLoginName", a[1]), b.tUserLogin = !0, b.tUserName = a[1], $("#login, #reg").hide(), $("#loginText").show(), $("#loginTextName").html(a[1]), $("#save").off("click.save").on("click.save", function() {
				d.click(a, c.toSave)
			}), c.getSave(a), 0 == $("#xfan_forMoreTool").length;
			var e = window.location.href;
			e = e.indexOf("www.junezx") >= 0 ? "http://www.ceshij.com" : "http://ceshij.com", $.ajax({
				url: "/app/loginorout.php",
				type: "POST",
				data: {
					type: "login",
					username: b.tUserName
				},
				success: function(a) {
					"ok" == a ? ($("#taobaoLoginBtn").hide(), $("#loginTextName").addClass("loginBandClass"), $("#tBandShop").remove()) : ($("#loginTextName").removeClass("loginBandClass"), $("#taobaoLoginBtn").hide(), $("#tBandShop").length < 1 && $("#logout").after('<a id="tBandShop"></a>'), $("#tBandShop").hide())
				}
			})
		} else $("#save").unbind("click.save").on("click.save", function() {
			b.tMessage("登录之后才可进行保存，登录之后还可以自动保存哦！", "login")
		}), $.removeCookie("tLogin"), $.removeCookie("tLoginName")
	}, a.getLogin = function() {
		var f, g, c = $.cookie("tLogin"),
			d = !1,
			e = [];
		"true" == c && $.cookie("tLoginName") && "" != $.cookie("tLoginName") && (d = !0), b.tUserLogin = e[0] = d, b.tUserName = e[1] = $.cookie("tLoginName") || "", a.init(e), f = $("#tb_loginname").html(), f && "" != f ? (b.tUserLogin = e[0] = !0, b.tUserName = e[1] = f, a.init(e)) : d && (g = window.location.href, g = g.indexOf("www.junezx") >= 0 ? "http://www.ceshij.com" : "http://ceshij.com", $.ajax({
			url: "/app/loginorout.php",
			type: "POST",
			data: {
				type: "login",
				username: b.tUserName
			},
			success: function(a) {
				"ok" == a ? ($("#taobaoLoginBtn").hide(), $("#loginTextName").addClass("loginBandClass"), $("#tBandShop").remove()) : ($("#loginTextName").removeClass("loginBandClass"), $("#taobaoLoginBtn").hide(), $("#tBandShop").length < 1 && $("#logout").after('<a id="tBandShop"></a>'), $("#tBandShop").hide())
			}
		}))
	}, a.logout = function(a) {
		$.removeCookie("tLogin"), $.removeCookie("tLoginName"), $.removeCookie("falauto"), $.removeCookie("falname"), $("#login, #reg").show(), $("#loginText").hide(), $("#loginTextName").html(""), b.tUserLogin = !1, b.tUserName = "", $("#save").off("click.save").on("click.save", function() {
			b.tMessage("登录之后才可进行保存，登录之后还可以自动保存哦！", "login")
		}), $.ajax({
			url: "/app/loginorout.php",
			type: "POST",
			data: {
				type: "logout"
			},
			success: function() {
				$("#taobaoLoginBtn").show()
			}
		}), a || b.tMessage("注销成功，如需重新登录，请点击左上角的登录按钮！")
	}, a.control = function(b) {
		"logout" == b && a.logout()
	}, a
});