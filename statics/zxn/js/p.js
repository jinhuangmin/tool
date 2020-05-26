function savesnap() {}
$(function() {
	var a, b, c, d, e;
	tLogin = require("scripts/tLogin"), tLogin.getLogin(), b = require("scripts/D"), c = !0, d = 60, e = 180, $(".rshousuo").on("click", function(a) {
		a.stopPropagation();
		var b = $("#box").width(),
			c = $("#box #junebox").width();
		$("#dqpannel,#tcpannel,#acpannel").hide(), $("#rightpannel").addClass("rs").unbind("click").bind("click", function() {
			var b = $("#box").width(),
				c = $("#box #junebox").width();
			$("#dqpannel,#tcpannel,#acpannel").show(), $("#rightpannel").removeClass("rs"), $("#box,.rg-overlay").css({
				width: b - 150
			}), $("#box #junebox").css({
				width: c - 150
			}), $(this).unbind("click"), e = 180
		}), $("#box,.rg-overlay").css({
			width: b + 150
		}), $("#box #junebox").css({
			width: c + 150
		}), e = 30
	}), $("#bd").css({
		height: $(window).height() - 60 + "px",
		width: $(window).width() + "px"
	}), $("#sidemenu").css({
		height: $(window).height() - 60 + "px"
	}), $("#leftpannel").css({
		height: $(window).height() - 105 + "px"
	}), $("#box").css({
		height: $(window).height() - 60 + "px",
		width: $(window).width() - 240 + "px"
	}), $("#rightpannel").css({
		height: $(window).height() - 60 + "px"
	}), $("#rightpannel #tcpannel").css({
		height: $(window).height() - 60 - 485 + "px"
	}), $("#rightpannel #acpannel").css({
		height: $(window).height() - 60 - 485 + "px",
		top: ($(window).height() - 250) / 2 + 190 + "px"
	}), $("#box #junebox").css({
		width: $(window).width() - 180 - 60 - 25 + "px",
		height: $(window).height() - 85 + "px"
	}), $(".rg-overlay").css({
		width: $(window).width() - 180 - 60 + "px",
		height: $(window).height() - 60 + "px"
	}), $(window).width() < 1750 && ($("#dqindiv").hide()),$(window).width() < 1480 && ($("#dqbtn3").hide()),$(window).width() < 1300 && ($("#dqpannel2").hide()), clearTimeout(a), a = setTimeout(function() {
		$("#rightpannel #tclist").css({
			height: ($(window).height() - 250) / 2 - 40 + "px"
		}), $("#rightpannel #aclist").css({
			height: ($(window).height() - 250) / 2 - 40 + "px"
		}), $("#leftpannel #btngroup").css({
			height: $(window).height() - 105 + "px"
		}), $("#rightpannel #tclist").slimScroll({
			height: ($(window).height() - 250) / 2 - 40 + "px",
			color: "#333"
		}), $("#rightpannel #aclist").slimScroll({
			height: ($(window).height() - 250) / 2 - 40 + "px",
			color: "#333"
		}), $("#leftpannel #btngroup").slimScroll({
			height: $(window).height() - 105 + "px",
			color: "#fff"
		})
	}, 500), $("#junebox").on("scroll", function() {
		var b = $(this).scrollTop(),
			c = $(this).scrollLeft();
		$(".ruler.h").css({
			left: -c - 1
		}), $(".guide.v").each(function() {
			var a = parseInt($(this).attr("positionX"), 10);
			$(this).css({
				left: a - c
			})
		}), $(".guide.h").each(function() {
			var a = parseInt($(this).attr("positionY"), 10);
			$(this).css({
				top: a - b
			})
		}), $(".ruler.v").css({
			top: -b - 1
		})
	}), $(window).resize(function() {
		$(window).width() < 1750 ? ($("#dqindiv").hide()) : ($("#dqindiv").show(),$("#dqbtn3").show() ),
		$(window).width() < 1480 ? ($("#dqindiv").hide(),$("#dqbtn3").hide()) : ($("#dqbtn3").show()), $("#bd").css({
			height: $(window).height() - 60 + "px",
			width: $(window).width() + "px"
		}), $("#sidemenu").css({
			height: $(window).height() - 60 + "px"
		}), $("#leftpannel").css({
			height: $(window).height() - 105 + "px"
		}), $("#box").css({
			height: $(window).height() - 60 + "px",
			width: $(window).width() - (d + e) + "px"
		}), $("#bd #rightpannel").css({
			height: $(window).height() - 60 + "px"
		}), $("#bd #rightpannel #tcpannel").css({
			height: $(window).height() - 60 - 485 + "px"
		}), $("#bd #rightpannel #acpannel").css({
			height: $(window).height() - 60 - 485 + "px",
			top: ($(window).height() - 250) / 2 + 190 + "px"
		}), $("#box #junebox").css({
			width: $(window).width() - (d + e + 25) + "px",
			height: $(window).height() - 85 + "px"
		}), $(".rg-overlay").css({
			width: $(window).width() - (d + e) + "px",
			height: $(window).height() - 60 + "px"
		}), clearTimeout(a), a = setTimeout(function() {
			$("#rightpannel #tclist").css({
				height: ($(window).height() - 250) / 2 - 40 + "px"
			}), $("#rightpannel #aclist").css({
				height: ($(window).height() - 250) / 2 - 40 + "px"
			}), $("#leftpannel #btngroup").css({
				height: $(window).height() - 105 + "px"
			}), $("#rightpannel #tclist").slimScroll({
				height: ($(window).height() - 250) / 2 - 40 + "px",
				color: "#333"
			}), $("#rightpannel #aclist").slimScroll({
				height: ($(window).height() - 250) / 2 - 40 + "px",
				color: "#333"
			}), $("#leftpannel #btngroup").slimScroll({
				height: $(window).height() - 105 + "px",
				color: "#fff"
			})
		}, 500)
	}), $("#mouseaction div").each(function(a) {
		3 > a ? $(this).on("click", function() {
			$("#mouseaction div.shuhui").removeClass("selected"), $("#mouseaction div.kuangxuan").removeClass("selected"), $("#mouseaction div.huaxian").removeClass("selected"), $(this).addClass("selected")
		}) : 3 == a && $(this).on("click", function() {
			$(this).attr("class").indexOf("selected") > 0 ? ($(this).removeClass("selected"), $(this).css("background", "url(/statics/zxn/images/a4.png) 0 0 no-repeat"), $(this).attr("title", "允许鼠标拖动应用")) : ($(this).addClass("selected"), $(this).css("background", "url(/statics/zxn/images/a4hover.png) 0 0 no-repeat"), $(this).attr("title", "禁止鼠标拖动应用"))
		})
	}), $(".yingyong").on("click", function() {
		$("#configgroup div").removeClass("selected"), $(this).addClass("selected")
	}), $(".shezhi").on("click", function() {
		$("#configgroup div").removeClass("selected"), $(this).addClass("selected")
	}), $("#danlie").on("click", function() {
		$("#btngroup #applist div").each(function() {
			$(this).removeClass("appbtn-y"), $(this).addClass("appbtn-x")
		})
	}), $("#shuanglie").on("click", function() {
		$("#btngroup #applist div").each(function() {
			$(this).removeClass("appbtn-x"), $(this).addClass("appbtn-y")
		})
	}), $("#sidemenu").tooltip({
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
	}), $("#dqbox .dqbtn").tooltip({
		position: {
			my: "left top",
			at: "left bottom"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	}), $(".setform").tooltip({
		position: {
			my: "left top",
			at: "left bottom+5"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	}), $("#jhi_dlg").dialog({
		title: "图片编辑",
		autoOpen: !1,
		height: 255,
		width: 570,
		modal: !0,
		buttons: {
			"确定": function() {
				var a = $("#jhi_1").val(),
					c = $("#jhi_2").val();
				b.june.children(".junehtml").find("img.temping-jhi-img").attr("src", a).removeClass("temping-jhi-img"), b.june.children(".junehtml").find("a.temping-jhi-href").attr("junehref", c).removeClass("temping-jhi-href"), $("#jhi_dlg").dialog("close")
			}
		}
	}), $("#jhi_dlg").tooltip({
		position: {
			my: "left top",
			at: "left bottom+5"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	}), $("#userdialog").dialog({
		title: "沃姆设计客户登录/注册",
		autoOpen: !1,
		width: 550,
		height: 500,
		modal: !0,
		buttons: {
			"确定": function() {
				var a, c, d, e;
				"none" == $("#regtab").css("display") ? (a = $("#username").val(), c = $("#password").val(), "" == a ? b.tMessage("用户名不能为空！") : "" == c ? b.tMessage("密码不能为空！") : $.ajax({
					type: "POST",
					url: "/login",
					data: {
						username: $("#username").val(),
						password: $("#password").val(),
						dosubmit: "noyzm"
					},
					dataType: "json",
					success: function(a) {
						1 == a["success"] ? (tLogin.init(a), $("#userdialog").dialog("close")) : b.tMessage(a["nickname"])
					}
				})) : (a = $("#rusername").val(), c = $("#rpassword").val(), d = $("#rpassword2").val(), e = $(rlicense).val(), "" == a ? b.tMessage("用户名不能为空！") : "" == c ? b.tMessage("密码不能为空！") : c != d ? b.tMessage("两次输入的密码不一致！") : $.ajax({
					type: "POST",
					url: "/register",
					data: {
						username: a,
						nickname:$("#rusernick").val(),
						email:$("#ruseremail").val(),
						password: c,
						license: e,
						dosubmit: "noyzm"
					},
					success: function(msg) {
						1 == msg["success"] ? (b.tMessage("哈哈 注册成功，请登录！", "login"), $("#rusername,#rpassword,#rpassword2,#rlicense").val(""), $("#userdialog").dialog("close")) : b.tMessage(msg["msg"])
					}
				}))
			},
			"取消": function() {
				$(this).dialog("close")
			}
		},
		close: function() {
			$("#userdialog").dialog("close")
		}
	}), $("#tSaveListBtn").on("click", function() {
		$("#tSaveList").dialog({
			title: "保存列表",
			autoOpen: !1,
			height: 500,
			width: 580,
			modal: !0,
			buttons: {
				"关闭": function() {
					$(this).dialog("close")
				}
			},
			close: function() {
				$("#tSaveList").dialog("close")
			}
		}).dialog("open")
	}), $("#xifuconfig").click(function() {
		b.snapSwitch ? ($("label[for='xifuswitch1']").addClass("ui-state-active"), $("label[for='xifuswitch2']").removeClass("ui-state-active")) : ($("label[for='xifuswitch1']").removeClass("ui-state-active"), $("label[for='xifuswitch2']").addClass("ui-state-active")), "none" == $("#xifupannel").css("display") ? ("none" != $("#morepannel").css("display") && $("#morepannel").hide(), "none" != $("#keyboardpannel").css("display") && $("#keyboardpannel").hide(), $("#xifupannel").show()) : $("#xifupannel").hide()
	}), $("#kbhelp").click(function() {
		"none" == $("#keyboardpannel").css("display") ? ("none" != $("#morepannel").css("display") && $("#morepannel").hide(), "none" != $("#xifupannel").css("display") && $("#xifupannel").hide(), $("#keyboardpannel").show()) : $("#keyboardpannel").hide()
	}), $("#xifusubmit").click(function() {
		var a = !0,
			c = 0,
			d = 5,
			e = 0,
			f = 5;
		a = $("label[for='xifuswitch1']").hasClass("ui-state-active") ? !0 : !1, $("#xifujianju").val() >= 0 && (c = Number($("#xifujianju").val())), $("#xifujuli").val() >= 0 && (d = Number($("#xifujuli").val())), b.setSnap(a, c, d, e, f), $("#xifupannel").hide()
	}), $("#xifucancel").click(function() {
		$("#xifupannel").hide()
	}), $("#keyboardcancel").click(function() {
		$("#keyboardpannel").hide()
	}), $("#login").click(function() {
		$("#userdialog").dialog("open"), $("#usertabs").tabs({
			active: 0
		}), $("#usertabs .ui-state-focus").blur()
	}), $("#reg").click(function() {
		$("#userdialog").dialog("open"), $("#usertabs").tabs({
			active: 1
		}), $("#usertabs .ui-state-focus").blur()
	}), $("#usertabs").tabs(), $("#tabs").tabs(), $("#linkmode").selectmenu(), $("#lc").buttonset(), $("#xifuswitch").buttonset(), $("#chkbox").buttonset()
});