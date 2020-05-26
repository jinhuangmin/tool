define(["jquery.getImages", "_ready"], function(i, t) {
	var c = {
		callback: !1,
		go: "99",
		tao_err: function(i) {
			console.info(i), layer.msg("授权信息获取异常，已为您切换成插件获取信息，请重试！", {
				icon: 7,
				time: 5e3
			});
			var t = new Date;
			t.setTime(t.getTime() + 2270592e5), $.cookie("taoapp_open", "cj", {
				expires: t
			})
		},
		tip: function(i, t) {
			var c = $(".tbapp_exchange .open_tb_tip"),
				n = "https://sucai.wangpu.taobao.com",
				a = i;
			c.unbind("click"), c.bind("click", function() {
				var i = $(".tbapp_exchange").attr("data-dashi51-token"),
					e = "打开淘宝",
					d = $(".tbapp_exchange").attr("data-tuinit"),
					l = c.attr("tao-err"),
					p = [e, "取消"];
				i || (a = t, a = "亲需要【安装插件】才能获取店铺数据呢，请联系客服索取插件！", n = "https://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=2&charset=utf-8", p = [e = "联系客服", "取消"]), d && (a = "亲,需要打开淘宝页面才能获取相关信息呢！"), l && (a = "亲没有登陆淘宝，请登陆后重试！"), layer.open({
					id: "taoapps",
					type: 5,
					title: "提醒",
					area: ["320px", "180px"],
					content: '<div style="padding: 20px 30px;">' + a + "</div>",
					maxmin: !0,
					btn: p,
					yes: function() {
						window.open(n)
					},
					btn2: function() {
						layer.closeAll(), $(".tbapps").find(".nav_tusc").is(":visible") && $(".tbapps").find(".nav_tusc").click()
					}
				})
			})
		},
		gettu: function(i) {
			if (!t.token || 13 != t.token.search(".sjdz.")) return !1;
			c.tip("亲没有登陆淘宝，无法获取图片信息呢！", "亲您没有安装插件无法获取图片信息呢！");
			var n, a = c,
				e = ($.cookie("u_login"), $.cookie("taoapp_open"), $(".tbapps .cj_TAOTU")),
				d = $(".tbapp_exchange"),
				l = d.attr("data-dashi51-token"),
				p = e.find(".tu_Nav").attr("data-selected");

			function o(i) {
				var t = $(i).attr("get_data");
				$(i).hasClass("tuselected") || ($(i).addClass("tuselected"), $(i).siblings("div").removeClass("tuselected"), e.find("." + t).show().siblings(".mainbox").hide())
			}
			a.callback = i, function() {
				e.find(".nav").unbind("click"), e.find(".nav").bind("click", function() {
					l || "tusck" == $(this).attr("get_data") ? $(this).attr("data-gettu") || (o(this), d.find(".tu").click(), $(this).attr("data-gettu", !0)) : $(".tbapp_exchange .open_tb_tip").click()
				}), e.find(".nav_tusc").unbind("click"), e.find(".nav_tusc").bind("click", function() {
					o(this), e.find(".nex_scku").show().siblings().hide()
				}), e.find(".hdtit").text("选择图片"), e.find(".upbox").text("上传图片"), e.find(".upbox").attr("href", "//sucai.wangpu.taobao.com"), e.find(".nav_taovideo").hide(), p && (e.find(".nav").show(), e.find(".nav_tusc").show(), e.find(".tu_group[get_data=" + p + "]").click());
				e.fadeIn(), e.find(".tu_panel").animate({
					top: 0
				}), d.find(".tu_get").unbind("click"), d.find(".tu_get").bind("click", function() {
					var i = d.attr("data-tu");
					a.callback && (a.callback(i), e.find(".cj_heiBG").click())
				}), e.find(".cj_heiBG").unbind("click"), e.find(".cj_heiBG").bind("click", function() {
					e.hide(), e.find(".tu_panel").css("top", "-20px")
				}), e.find(".cjclose").unbind("click"), e.find(".cjclose").bind("click", function() {
					e.find(".cj_heiBG").click()
				})
			}(), n = "", $.each(["https://img.alicdn.com/imgextra/i1/1867852664/O1CN01PG4otv1VY9cWoCzu5_!!1867852664.png", "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01MSAjyS1VY9cYLBqXu_!!1867852664.png", "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01ZAjkyO1VY9cWhONn3_!!1867852664.png", "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01N9F68K1VY9cXmYTha_!!1867852664.png", "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01mdwRof1VY9cUDqIV0_!!1867852664.png", "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01pKZvzX1VY9cW6ye96_!!1867852664.png", "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01TWRwCj1VY9cWhOmji_!!1867852664.png", "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01tQwOwb1VY9cXxz0Tm_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01Gx3EFs1VY9cUKQTbQ_!!1867852664.png", "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01aZYruY1VY9cVNgCiF_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01fCU8Jb1VY9cf0FWjK_!!1867852664.png", "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01D88eak1VY9cVzMbyc_!!1867852664.png", "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01x1dl7R1VY9cVzKw2I_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01prxQY31VY9cXI5Zv5_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01mU3Z8g1VY9cVzjadT_!!1867852664.png", "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01HBvtIU1VY9cWoD43k_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01MuLEIn1VY9cP5RUf9_!!1867852664.png", "https://img.alicdn.com/imgextra/i4/1867852664/O1CN019Z66bb1VY9cWoBBcy_!!1867852664.png", "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01uJGktF1VY9cYJlu0W_!!1867852664.png", "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01dDhssD1VY9cdrs91D_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01Gijckg1VY9ccjXMFv_!!1867852664.png", "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01Bk4ulL1VY9cfz99FA_!!1867852664.png", "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01C2Ky021VY9cfnYex9_!!1867852664.png"], function(i, t) {
				n += "<li><a title='' class='cjmod_img'><img src='" + t + "_100x100'><span class='settu'>选择本图</span></a></li>"
			}), e.find(".sck_box").empty().append("<ul class='itemtu_result'>" + n + "</ul>"), e.find(".cjmod_img").unbind("click"), e.find(".cjmod_img").bind("click", function() {
				var i = $(this).children("img").attr("src");
				i = -1 == i.indexOf("_100x100") ? i : i.slice(0, i.indexOf("_100x100")), $(".tbapp_exchange").attr("data-tu", i), $(".tbapp_exchange").find(".tu_get").click()
			}), $(".my_pz").find(".sck_box").empty().append("<ul class='itemtu_result'>" + n + "</ul>"), $(".my_pz").find(".cjmod_img").unbind("click"), $(".my_pz").find(".cjmod_img").bind("click", function() {
				var i = $(this).children("img").attr("src");
				i = -1 == i.indexOf("_100x100") ? i : i.slice(0, i.indexOf("_100x100")), a.callback(i), $(".my_pz").click()
			})
		},
		getvideo: function(i) {
			if (!t.token || 13 != t.token.search(".sjdz.")) return !1;
			var n = c,
				a = $(".tbapps .cj_TAOTU"),
				e = $(".tbapp_exchange"),
				d = e.attr("data-dashi51-token"),
				l = (e.attr("data-tuinit"), a.find(".tuselected")),
				p = a.find(".nav_taovideo");
			l.hasClass("tu_group") && a.find(".tu_Nav").attr("data-selected", l.attr("get_data")), c.tip("亲没有登陆淘宝，无法获取视频信息呢！", "亲您没有安装插件无法获取视频信息呢！"), n.callback = i, function() {
				a.find(".nav").hide(), a.find(".nav_tusc").hide(), a.find(".nav_taovideo").show(), a.find(".nex_video").show().siblings().hide(), a.find(".hdtit").text("选择视频"), a.find(".upbox").text("上传视频"), a.find(".upbox").attr("href", "//sucai.wangpu.taobao.com/#/manage/video");
				var i = p.attr("get_data");
				p.hasClass("tuselected") || (p.addClass("tuselected"), p.siblings("div").removeClass("tuselected"), a.find("." + i).show().siblings(".mainbox").hide()), a.fadeIn(), a.find(".tu_panel").animate({
					top: 0
				}), e.find(".tu_video").unbind("click"), e.find(".tu_video").bind("click", function() {
					var i = e.attr("data-video") ? JSON.parse(e.attr("data-video")) : {};
					n.callback && (n.callback(i.url, i), a.find(".cj_heiBG").click())
				}), a.find(".cj_heiBG").unbind("click"), a.find(".cj_heiBG").bind("click", function() {
					a.hide(), a.find(".tu_panel").css("top", "-20px")
				}), a.find(".cjclose").unbind("click"), a.find(".cjclose").bind("click", function() {
					a.find(".cj_heiBG").click()
				}), d ? e.find(".video").click() : $(".tbapp_exchange .open_tb_tip").click()
			}()
		},
		getwxk: function(i) {
			if (!t.token || 13 != t.token.search(".sjdz.")) return !1;
			var n = c,
				a = $(".tbapps .WXHref"),
				e = $(".tbapp_exchange"),
				d = e.attr("data-dashi51-token");
			e.attr("data-tuinit");
			c.tip("亲没有登陆淘宝，无法获取链接信息呢！", "亲您没有安装插件无法获取链接信息呢！"), n.callback = i, a.fadeIn(), a.find(".href_panel").animate({
				top: 0
			}), e.find(".wxk_get").unbind("click"), e.find(".wxk_get").bind("click", function() {
				var i = e.attr("data-wxk") || "";
				n.callback && (n.callback(i), a.find(".cj_heiBG").click())
			}), a.find(".cj_heiBG").unbind("click"), a.find(".cj_heiBG").bind("click", function() {
				a.hide(), a.find(".href_panel").css("top", "-20px")
			}), a.find(".cjclose").unbind("click"), a.find(".cjclose").bind("click", function() {
				a.find(".cj_heiBG").click()
			}), d ? e.find(".wxk").click() : $(".tbapp_exchange .open_tb_tip").click()
		},
		getitem: function(i, t) {
			var n = c,
				a = $(".tbapps .WXItems"),
				e = $(".tbapp_exchange"),
				d = e.attr("data-dashi51-token");
			e.attr("data-tuinit");
			c.tip("亲没有登陆淘宝，无法获取宝贝信息呢！", "亲您没有安装插件无法获取宝贝信息呢！"), n.callback = t, e.attr("data-items-checked", JSON.stringify(i)), a.fadeIn(), a.find(".href_panel").animate({
				top: 0
			}), e.find(".wxitem_get").unbind("click"), e.find(".wxitem_get").bind("click", function() {
				var i = e.attr("data-items") || {};
				if (n.callback) {
					try {
						n.callback(JSON.parse(i))
					} catch (i) {
						layer.msg("err-tbapp-item-002！", {
							icon: 2,
							time: 3e3
						})
					}
					a.find(".cj_heiBG").click()
				}
			}), a.find(".cj_heiBG").unbind("click"), a.find(".cj_heiBG").bind("click", function() {
				a.hide(), a.find(".href_panel").css("top", "-20px")
			}), a.find(".cjclose").unbind("click"), a.find(".cjclose").bind("click", function() {
				a.find(".cj_heiBG").click()
			}), d ? e.find(".wxitem").click() : $(".tbapp_exchange .open_tb_tip").click()
		},
		uptu: function(i, t) {
			var n = c,
				a = i.val,
				e = i.fileName,
				d = i.pos,
				l = $(".tbapp_exchange"),
				p = l.attr("data-dashi51-token");
			c.tip("亲没有登陆淘宝，无法上传图片到淘宝图片空间！", "亲您没有安装插件无法上传图片呢！"), n.callback = t, function() {
				"add_folderId" == a ? l.attr("data-uptu-checked", a) : (l.attr("data-uptu-fileName", e), l.attr("data-uptu-pos", d), l.attr("data-uptu-checked", a));
				l.find(".up_tu_get").unbind("click"), l.find(".up_tu_get").bind("click", function() {
					var i = l.attr("data-uptu-result") || {};
					if (n.callback) try {
						n.callback(i)
					} catch (i) {
						layer.msg("err-tbapp-uptu-002！", {
							icon: 2,
							time: 3e3
						})
					}
				}), p ? l.find(".up_tu").click() : $(".tbapp_exchange .open_tb_tip").click()
			}()
		}
	};
	return {
		tu: c.gettu,
		video: c.getvideo,
		wxk: c.getwxk,
		item: c.getitem,
		uptu: c.uptu
	}
});