define("scripts/lib/ucren.js", function(a) {
	var b, c;
	String.prototype.isUrl = function() {
		return this.length < 20 || this.indexOf("junezx.com") >= 0 || this.indexOf("127.1") >= 0 || this.indexOf("127.0.0.1") >= 0 ? !1 : !0
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
		c = require("scripts/moduleManage");
	return a.init = function(a) {
		a["success"] ? ($.cookie("tLogin", !0), b.tUserLogin = !0, b.tUserName = a["username"], $("#login, #reg").hide(), $("#loginText").show(), $("#loginTextName").html(a["nickname"]), $("#save").unbind("click.save").on("click.save", function() {
			c.toSave(a)
		}), c.getSave(a), setTimeout(function() {
			$('<li><a class="june-preview" target="_blank" href="xuanfu.html">悬浮代码生成工具</a></li>').appendTo($("#morepannel").children("ul"))
		}, 1e3)) : ($("#save").unbind("click.save").on("click.save", function() {
			b.tMessage("登录之后才可进行保存，登录之后还可以自动保存哦！", "login")
		}), $.removeCookie("tLogin"), $.removeCookie("tLoginName"), c.getSave())
	}, 
	a.getLogin = function() {
		var c = $.cookie("tLogin"),
			d = !1,
			e = [];
		$.ajax({
	url: "/getLogin",
	type: "POST",
	data: {
		type: "login",
		},
	success: function(msg) {
		$.cookie("tLogin", !0),a.init(msg)
		}
	});
	}, 
	a.logout = function() {
		$.get('/logout', function(data){
                if(data.success = !1){ b.tMessage("注销失败！");
                }else{
            $.removeCookie("tLogin"), $("#login, #reg").show(), $("#loginText").hide(), $("#loginTextName").html(""), b.tUserLogin = !1, b.tUserName = "", c.getSave(), $("#save").unbind("click.save").on("click.save", function() {
			b.tMessage("登录之后才可进行保存，登录之后还可以自动保存哦！", "login")
		}), a || b.tMessage("注销成功，如需重新登录，请点击左上角的登录按钮！")	
                }
        },"json");
		
	}, a.control = function(b) {
		"logout" == b && a.logout()
	}, a
});