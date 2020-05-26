function navScroll(a, b) {
	$(".live .c1").css("visibility", "hidden"), $(".live .nav-tabs-link").removeClass("selected"), $(a).addClass("selected"), $(b).children(".junezx-tiles-more").trigger("click"), $(".live .c1").hide(), $(b).show().css("visibility", "visible"), $("html,body").animate({
		scrollTop: $(b).offset().top - 93
	}, 200)
}
function tDialog(a, b, c) {
	c = c || "open", $("#tDialog").length <= 0 && $('<div id="tDialog"></div>').appendTo($("body")), $("#tDialog").dialog({
		autoOpen: !1,
		width: 800,
		height: 530,
		modal: !0,
		title: a,
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		}
	}).html(b).dialog("open")
}
function tAjaxDialog(a, b, c, d, e, f) {
	var g = $("#" + b);
	g.dialog({
		autoOpen: !1,
		width: a,
		height: 620,
		modal: !0,
		title: c
	}), d ? $.ajax({
		url: d,
		type: "POST",
		data: e,
		dataType: "json",
		success: function(a) {
			f && "function" == typeof f && f(a, g), g.dialog("open")
		}
	}) : (f && "function" == typeof f && f(g), g.dialog("open"))
}
function tMessage(a, b) {
	b = b || "open", $("#tMessage").length <= 0 && $('<div id="tMessage"></div>').appendTo($("body")), $("#tMessage").dialog({
		autoOpen: !1,
		width: 400,
		modal: !0,
		title: "提示",
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		}
	}).html(a).dialog("open")
}
function showdetail(a, b) {
	var c = '<div style="width:100%;height:530px;"><div class="faqctitle">' + b + "</div>" + $("#fc-detail-" + a).html() + "<div>",
		d = "";
	("admin" == JUNEZX__USERNAME || "editor" == JUNEZX__USERNAME) && (d = '<a class="quick-edit" href="/grsc/faq/faq_admin.php?ID=' + a + '" target="_blank">进入编辑</a>'), tDialog(b, d + c, "open")
}
function setUser(a) {
	
	a[0] ? ($.cookie("tLogin", !0), $.cookie("tLoginName", a[1]), JUNEZX__USERSTATUS = !0, JUNEZX__USERNAME = a[1], $("#nologin").hide(), $("#logged").show(), $("#userInfo").html(JUNEZX__USERNAME), $("#mainPic1").children("a").attr("href", "/3.0/"), $("#mainPic1").attr("data-cur", "3.0"), $.ajax({
		url: "/grsc/server3.php",
		type: "POST",
		data: {
			username: JUNEZX__USERNAME,
			type: "list",
			page: 1
		},
		dataType: "json",
		success: function(b) {
			var e, c, f, g, h, i, j, k, l, m, n, o, p, q;
			if (b) { 
				for (c = "", Math.ceil(b.total / 5), f = b.data.length, g = 0, h = b.saveData.length, i = b.collectData.length, j = 0, k = 0; f > k; k++) l = b.data[k].CreatTime.split(" "), m = l[0].split("-"), n = l[1].split(":"), o = new Date(m[0], m[1] - 1, m[2], n[0], n[1], n[2]).getTime(), (!e || e - o > 6e5) && 5 > g && (c += '<div class="lg-part" data-ID="' + b.data[k].ID + '">' + '<div class="lg-time"><span class="lg-time-label">生成时间</span><span class="lg-time-text">' + b.data[k].CreatTime + '</span><span class="lg-time-use" title="应用"><a href="/3.0/index.php#i_s' + b.data[k].ID + '" target="_blank"></a></span><span class="lg-time-preview" title="预览"><a href="/3.0/previewS' + b.data[k].ID + '" target="_blank"></a></span></div>' + "</div>", g++);
				for ($("#userInfo_genList").html(c + '<div class="lg-last"><span class="lg-more" id="genMore">查看更多</span><div id="genMoreDialog" style="display:none;"></div></div>'), c = "", h > 5 && (h = 5), k = 0; h > k; k++) l = b.saveData[k].saveTime.split(" "), m = l[0].split("-"), n = l[1].split(":"), p = new Date(m[0], m[1] - 1, m[2], n[0], n[1], n[2]), q = p.Format("yyyy-MM-dd"), c += '<div class="lg-part" data-ID="' + b.saveData[k].ID + '">' + '<div class="lg-time">' + '<span class="lg-time-label">' + b.saveData[k].saveName + "</span>" + '<span class="lg-time-text">' + q + "</span>" + '<span class="lg-time-use" title="应用"><a href="/3.0/index.php#s_' + b.saveData[k].ID + '" target="_blank"></a></span>' + '<span class="lg-time-preview" title="预览"><a href="/3.0/previewZ' + b.saveData[k].ID + '" target="_blank"></a></span>' + "</div>" + "</div>";
				for ($("#userInfo_saveList").html(c + '<div class="lg-last"><span class="lg-more" id="saveMore">查看更多</span></div><div id="saveMoreDialog" style="display:none;"></div>'), c = "", k = 0; i > k; k++) 5 > j && (c += '<div class="lg-part" data-ID="' + b.collectData[k].ID + '">' + '<div class="lg-time"><span class="lg-time-img"><img src="' + b.collectData[k].url + '"></span><span class="lg-time-label">分享人</span><span class="lg-time-text">' + b.collectData[k].author + '</span><span class="lg-time-use" title="应用"><a href="/3.0/index.php#i_' + b.collectData[k].ID + '" target="_blank"></a></span><span class="lg-time-preview" title="预览"><a href="/3.0/previewP' + b.collectData[k].ID + '" target="_blank"></a></span></div>' + "</div>", j++), JUNEZX__USERCOLLECT.push(b.collectData[k].ID), setSUnLike(b.collectData[k].ID);
				$("#userInfo_faverList").html(c + '<div class="lg-last"><span class="lg-more" id="faverMore">查看更多</span><div id="faverMoreDialog" style="display:none;"></div></div>'), $("#genMore").on("click", function() {
					tAjaxDialog(540, "genMoreDialog", "生成列表", null, null, function(a) {
						setUserListSearch(a)
					})
				}), $("#saveMore").on("click", function() {
					tAjaxDialog(600, "saveMoreDialog", "保存列表", "/grsc/userList.php", {
						type: "save",
						username: JUNEZX__USERNAME
					}, function(b, c) {
						var d, e, g, h, i, j, k, l, m, n;
						if (a) {
							for (d = "", e = Math.ceil(b.total / 5), g = b.data.length, console.log(e), h = 0; g > h; h++) i = b.data[h].saveTime.split(" "), j = i[0].split("-"), k = i[1].split(":"), l = new Date(j[0], j[1] - 1, j[2], k[0], k[1], k[2]), m = l.Format("yyyy-MM-dd"), d += '<div class="lg-more-part" data-ID="' + b.data[h].ID + '">' + '<div class="lg-more-box">' + '<span class="lg-more-label">' + b.data[h].saveName + "</span>" + '<span class="lg-more-text">' + m + "</span>" + '<span class="lg-more-use sxu2" title="应用"><a href="/3.0/index.php#s_' + b.data[h].ID + '" target="_blank"></a></span>' + '<span class="lg-more-preview sxp2" title="预览"><a href="/3.0/previewZ' + b.data[h].ID + '" target="_blank"></a></span>' + "</div>" + "</div>";
							c.html(d + '<div id="saveMorePage" class="lg-more-page"></div>'), $('<div class="closedialogbtn">关闭</div>').on("click", function() {
								c.dialog("close")
							}).appendTo(c), setPage($("#saveMorePage")[0], e, b.page), n = arguments.callee.caller, $("#saveMorePage").on("click", function() {
								var a = parseInt($(this).children("a.on").html(), 5);
								a != b.page && tAjaxDialog(600, "saveMoreDialog", "保存列表", "/grsc/userList.php", {
									type: "save",
									username: JUNEZX__USERNAME,
									page: a
								}, n)
							})
						}
					})
				}), $("#faverMore").on("click", function() {
					tAjaxDialog(800, "faverMoreDialog", "收藏列表", "/grsc/userList.php", {
						type: "faver",
						username: JUNEZX__USERNAME
					}, function(b, c) {
						var d, e, f, g;
						if (a) {
							for (d = "", e = b.data.length, f = Math.ceil(e / 8), g = 0; e > g; g++) d += '<div class="lg-more-part" data-ID="' + b.data[g].ID + '">' + '<div class="lg-more-box"><span class="lg-more-img"><img src="/grsc/images/s.gif" data-lsrc="' + b.data[g].url + '" /></span><span class="lg-more-label">分享人</span><span class="lg-more-text">' + b.data[g].author + '</span><span class="lg-more-use sxu1" title="应用"><a href="/3.0/index.php#i_' + b.data[g].ID + '" target="_blank"></a></span><span class="lg-more-preview sxp1" title="预览"><a href="/3.0/previewP' + b.data[g].ID + '" target="_blank"></a></span></div>' + "</div>";
							c.html(d + '<div id="faverMorePage" class="lg-more-page"></div>').attr("data-page", 1), c.children(".lg-more-part").hide(), c.children(".lg-more-part").slice(0, 8).each(function() {
								var a = $(this),
									b = a.children(".lg-more-box").children("span.lg-more-img").children("img"),
									c = b.attr("data-lsrc");
								c && b.attr("src", c).removeAttr("data-lsrc"), a.show()
							}), $('<div class="closedialogbtn">关闭</div>').on("click", function() {
								c.dialog("close")
							}).appendTo(c), setPage($("#faverMorePage")[0], f, 1), $("#faverMorePage").on("click", function() {
								var a = parseInt($(this).children("a.on").html(), 5),
									d = c.attr("data-page"),
									f = b.data.length;
								Math.ceil(f / 8), a != d && (c.children(".lg-more-part").hide(), c.children(".lg-more-part").slice(8 * (a - 1), 8 * a).each(function() {
									var a = $(this),
										b = a.children(".lg-more-box").children("span.lg-more-img").children("img"),
										c = b.attr("data-lsrc");
									c && b.attr("src", c).removeAttr("data-lsrc"), a.show()
								}), c.attr("data-page", a))
							})
						}
					})
				})
			}
		}
	})) : ($.removeCookie("tLogin"), $.removeCookie("tLoginName"), JUNEZX__USERSTATUS = !1, JUNEZX__USERNAME = "", $("#nologin").show(), $("#logged").hide())
}
function tAjaxSearch(a, b, c) {
	$.ajax({
		url: a,
		type: "POST",
		data: b,
		dataType: "json",
		success: function(a) {
			c(a)
		}
	})
}
function setUserListSearch(a) {
	var b = '<div class="uls-box" style="position:relative;width:100%;height:60px;border:1px solid #cccccc;background:#e9e9e9;"><span class="uls-label" style="display:block;float:left;width:80px;height:60px;line-height:60px;font-size:14px;text-align:right;">生成日期：</span><input class="uls-input" style="display:block;float:left;width:340px;height:38px;line-height:38px;text-indent:10px;border:1px solid #dddddd;margin-top:10px;font-size:14px;outline:none;" type="text" name="userListSearchKey" id="userListSearchKey" value="" onclick="WdatePicker({dateFmt:\'yyyy-MM-dd\'})" /><button style="display:block;float:left;width:70px;margin-top:10px;height:40px;line-height:40px;font-size:14px;text-align:center;" type="submit" id="userListSearchBtn">搜索</button><div id="userListSearchResult" style="width:100%;position:relative;height:420px;clear:both;top:10px;"></div></div>';
	a.html(b), $("#userListSearchKey").val((new Date).Format("yyyy-MM-dd")), $('<div class="closedialogbtn">关闭</div>').on("click", function() {
		a.dialog("close")
	}).appendTo(a), $("#userListSearchBtn").off("click").on("click", function() {
		var b = $("#userListSearchKey").val();
		return "" == b ? (D.tMessage("请输入一个有效日期进行查询!"), void 0) : (tAjaxSearch("/grsc/userList.php", {
			type: "gen",
			username: JUNEZX__USERNAME,
			searchdate: b
		}, function(a) {
			var g, h, c = "",
				d = Math.ceil(a.total / 10),
				f = a.data.length;
			for (g = 0; f > g; g++) c += '<div class="lg-more-part" data-ID="' + a.data[g].ID + '">' + '<div class="lg-more-box"><span class="lg-more-label">生成时间</span><span class="lg-time-text">' + a.data[g].CreatTime + '</span><span class="lg-more-use" title="应用"><a href="/3.0/index.php#i_' + a.data[g].ID + '" target="_blank"></a></span><span class="lg-time-preview" title="预览"><a href="/3.0/previewP' + a.data[g].ID + '" target="_blank"></a></span></div>' + "</div>";
			$("#userListSearchResult").html(c + '<div id="genMorePage" class="lg-more-page"></div>'), setPage($("#genMorePage")[0], d, a.page), h = arguments.callee.caller, $("#genMorePage").on("click", function() {
				var c = parseInt($(this).children("a.on").html(), 10);
				c != a.page && tAjaxSearch("/grsc/userList.php", {
					type: "gen",
					username: JUNEZX__USERNAME,
					searchdate: b,
					page: c
				}, h)
			})
		}), void 0)
	})
}
function setAutoLogin(a) {
	a[0] && ($.cookie("falauto", !0, {
		expires: 7
	}), $.cookie("falname", a[1], {
		expires: 7
	}))
}
function checkAutoLogin() {
	    var a ,
    b = !1;
	$.ajax({
			url: "/getLogin.php",
			type: "POST",
			data: {
				type: "login",
			},
			success: function(msg) {
					if(msg.success){ 
						$.cookie("tLogin", !0),b = !0,setUser(msg);
					}else{
						$.removeCookie("tLogin"),$.removeCookie("tLoginName"),$.removeCookie("falauto"),$.removeCookie("falname"),JUNEZX__USERSTATUS = !1,JUNEZX__USERNAME = "",$("#nologin").show(),$("#logged").hide()
					}
		}
		});
}
function getUser() {
	var a = $.cookie("tLogin"),
		b = !1,
		c = [];
	"true" == a && $.cookie("tLoginName") && "" != $.cookie("tLoginName") && (b = !0), c[0] = b, c[1] = $.cookie("tLoginName") || "", setUser(c)
}
function outUser() {
	     $.get('/logout.php', function(data){ },"json");
	$.removeCookie("tLogin"),
    $.removeCookie("tLoginName"),
    $.removeCookie("falauto"),
    $.removeCookie("falname"),
    JUNEZX__USERSTATUS = !1,
    JUNEZX__USERNAME = "",
    $("#nologin").show(),
    $("#logged").hide()	
}
function setSUnLike(a) {
	var b = $("#tiles").children("li[data-ID='" + a + "']");
	b.length > 0 && $("#tiles").children("li[data-ID='" + a + "']").children("p.sbtns").children("span.slike").removeClass("slike").addClass("sunlike")
}

function slikeToCollect() {
    if (!JUNEZX__USERSTATUS || "" == JUNEZX__USERNAME) return tMessage("请登录后使用此功能！"),
    void 0;
    var b = $(this),
    c = b.attr("data-ID"),
    d = b.attr("data-imgurl");
	e = b.attr("data-author");
	f = b.attr("data-title");
    b.css("visibility", "hidden"),
    $.ajax({
        url: "/grsc/like.php",
        type: "POST",
        data: {
            ID: c,
            imgname: d,
			author:e,
			title:f,
            type: "like"
        },
        dataType: "json",
        success: function(a) {
            a[0] && (b.removeClass("slike").addClass("sunlike").css("visibility", "visible"), JUNEZX__USERCOLLECT.push(c))
        }
    })
}


function sunlikeToCollect() {
	if (!JUNEZX__USERSTATUS || "" == JUNEZX__USERNAME) return tMessage("请登录后使用此功能！"), void 0;
	var b = $(this),
		c = b.attr("data-ID");
	b.css("visibility", "hidden"), $.ajax({
		url: "/grsc/like.php",
		type: "POST",
		data: {
			username: JUNEZX__USERNAME,
			ID: c,
			type: "unlike"
		},
		dataType: "json",
		success: function(a) {
			a[0] && (b.removeClass("sunlike").addClass("slike").css("visibility", "visible"), JUNEZX__USERCOLLECT.splice($.inArray(c, JUNEZX__USERCOLLECT), 1))
		}
	})
}
function setPage(a, b, c, d) {
	function f() {
		e[e.length] = c == g ? '<a href="#" class="on">' + g + "</a>" : '<a href="#">' + g + "</a>"
	}
	var e, g;
	if (d = d || ["上一页", "下一页"], a = a, b = b, c = c, e = [], e[e.length] = 1 == c ? '<a href="#" class="prev unclick">' + d[0] + "</a>" : '<a href="#" class="prev">' + d[0] + "</a>", 10 >= b) for (g = 1; b >= g; g++) f();
	else if (4 >= c) {
		for (g = 1; 5 >= g; g++) f();
		e[e.length] = '<span class="dian">...</span><a href="#">' + b + "</a>"
	} else if (c >= b - 3) for (e[e.length] = '<a href="#">1</a><span class="dian">...</span>', g = b - 4; b >= g; g++) f();
	else {
		for (e[e.length] = '<a href="#">1</a><span class="dian">...</span>', g = c - 2; c + 2 >= g; g++) f();
		e[e.length] = '<span class="dian">...</span><a href="#">' + b + "</a>"
	}
	e[e.length] = c == b ? '<a href="#" class="next unclick">' + d[1] + "</a>" : '<a href="#" class="next">' + d[1] + "</a>", a.innerHTML = e.join(""), function() {
		var e = c;
		$(a).off("click.page").on("click.page", "a", function(c) {
			var f = $(this);
			if (f.hasClass("prev")) {
				if (1 == e) return !1;
				e--
			} else if (f.hasClass("next")) {
				if (e == b) return !1;
				e++
			} else e = parseInt(f.html(), 10);
			setPage(a, b, e, d), c.preventDefault()
		})
	}()
}
Date.prototype.Format = function(a, b, c) {
	var d, e, f, g;
	if (b = b || 0, c = c || 0, d = (this.getMonth() + 1 + b) % 12, e = 0, (this.getMonth() + 1 + b) / 12 > 1 && (e = 1), 0 == d && (d = 12), 0 != c) return new Date(this.getTime() + 864e5 * c).Format("yyyy-MM-dd hh:mm:ss");
	f = {
		"M+": d,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	}, /(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + e + "").substr(4 - RegExp.$1.length)));
	for (g in f) new RegExp("(" + g + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? f[g] : ("00" + f[g]).substr(("" + f[g]).length)));
	return a
}, $(function() {
	/**
	$("#tiles").on("click", "li p.sbtns span.suse", function(a) {
		return JUNEZX__USERSTATUS && "" != JUNEZX__USERNAME ? void 0 : (tMessage("请登录后使用此功能！"), a.preventDefault(), void 0)
	})
	**/
}),$(function() {
		/**
	$("#tiles").on("click", "li a.psdLoad", function(a) {
		return JUNEZX__USERSTATUS && "" != JUNEZX__USERNAME ? void 0 : (tMessage("请登录后使用此功能！"), a.preventDefault(), void 0)
	})
	**/
}), $.fn.imagesLoaded = function(a) {
	var b = this.find("img"),
		c = [],
		d = this,
		e = b.length;
	return b.length ? (b.one("load error", function() {
		0 === --e && (e = b.length, b.one("load error", function() {
			0 === --e && a.call(d)
		}).each(function() {
			this.src = c.shift()
		}))
	}).each(function() {
		c.push(this.src), this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
	}), this) : (a.call(this), this)
};