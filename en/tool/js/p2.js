function savesnap() {}
$(function() {
	var a, b, c, d, e;
	tLogin = require("scripts/tLogin"), tLogin.getLogin(),b = require("scripts/D"), c = !0, d = 240, e = 0, $(".shensuo").click(function() {
		var a = $("#box").width(),
			e = $("#box #junebox").width();
		$(this).hasClass("shouqi") ? (c = !1, d = 240) : (c = !0, d = 70), c ? ($(this).addClass("shouqi"), $("#leftpannel,#leftconsole").css({
			opacity: .9
		}), $("#leftpannel,#leftconsole").hide(), $("#logo").css({
			width: 70,
			background: "url(images/logosouqi.png)"
		}), $("#box,.rg-overlay").css({
			width: a + 170,
			left: 70
		}), $("#box #junebox").css({
			width: e + 170
		}), $(".rg-overlay").css({
			left: 70
		}), $("#hd #topbanner #login").css({
			left: 70
		}), $("#hd #topbanner #loginText").css({
			left: 90
		}), $("#hd #topbanner #reg").css({
			left: 166
		}), b.offsleft -= 170, $("#configgroup .yingyong,#configgroup .shezhi").removeClass("selected"), $(".yingyong").off("click").on("click", function() {
			$("#configgroup .yingyong").hasClass("selected") ? ($("#configgroup .yingyong").removeClass("selected"), $("#leftpannel,#leftconsole").hide()) : ($("#configgroup div").removeClass("selected"), $(this).addClass("selected"), $("#moduleset").hide(), $("#applist").show("fade"), $("#leftpannel,#leftconsole").show())
		}), $(".shezhi").off("click").on("click", function() {
			$("#configgroup .shezhi").hasClass("selected") ? ($("#configgroup .shezhi").removeClass("selected"), $("#leftpannel,#leftconsole").hide()) : ($("#configgroup div").removeClass("selected"), $(this).addClass("selected"), $("#moduleset").show("fade"), $("#applist").hide(), $("#leftpannel,#leftconsole").show())
		})) : ($(this).removeClass("shouqi"), $("#leftpannel,#leftconsole").css({
			opacity: 1
		}), $("#leftpannel,#leftconsole").show(), $("#logo").css({
			width: 240,
			background: "url(images/logo.jpg)"
		}), $("#box,.rg-overlay").css({
			width: a - 170,
			left: 240
		}), $("#box #junebox").css({
			width: e - 170
		}), $(".rg-overlay").css({
			left: 240
		}), $("#hd #topbanner #login").css({
			left: 240
		}), $("#hd #topbanner #loginText").css({
			left: 260
		}), $("#hd #topbanner #reg").css({
			left: 336
		}), b.offsleft += 170, $(".yingyong").off("click").on("click", function() {
			$("#configgroup div").removeClass("selected"), $(this).addClass("selected"), $("#moduleset").hide(), $("#applist").show("fade")
		}), $(".shezhi").off("click").on("click", function() {
			$("#configgroup div").removeClass("selected"), $(this).addClass("selected"), $("#moduleset").show("fade"), $("#applist").hide()
		}))
	}), $(".rshousuo").on("click", function() {
		event.stopPropagation();
		var a = $("#box").width(),
			b = $("#box #junebox").width();
		$("#dqpannel,#tcpannel,#acpannel").hide(), $("#rightpannel").addClass("rs").unbind("click").bind("click", function() {
			var a = $("#box").width(),
				b = $("#box #junebox").width();
			$("#dqpannel,#tcpannel,#acpannel").show(), $("#rightpannel").removeClass("rs"), $("#box,.rg-overlay").css({
				width: a - 150
			}), $("#box #junebox").css({
				width: b - 150
			}), $(this).unbind("click"), e = 180
		}), $("#box,.rg-overlay").css({
			width: a + 150
		}), $("#box #junebox").css({
			width: b + 150
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
		height: ($(window).height() - 220) / 2 + "px"
	}), $("#rightpannel #acpannel").css({
		height: ($(window).height() - 220) / 2 + "px",
		top: ($(window).height() - 220) / 2 + 160 + "px"
	}), $("#box #junebox").css({
		width: $(window).width() - 290 + "px",
		height: $(window).height() - 110 + "px"
	}), $(".rg-overlay").css({
		width: $(window).width() - 240 + "px",
		height: $(window).height() - 60 + "px"
	}), $(window).width() < 1452 && ($("#hd #topbanner #kbhelp").hide(), $("#hd #topbanner #moretools").css("right", "552px")), clearTimeout(a), a = setTimeout(function() {
		$("#rightpannel #tclist").css({
			height: ($(window).height() - 220) / 2 - 40 + "px"
		}), $("#rightpannel #aclist").css({
			height: ($(window).height() - 220) / 2 - 40 + "px"
		}), $("#leftpannel #btngroup").css({
			height: $(window).height() - 105 + "px"
		}), $("#rightpannel #tclist").slimScroll({
			height: ($(window).height() - 220) / 2 - 40 + "px",
			color: "#333"
		}), $("#rightpannel #aclist").slimScroll({
			height: ($(window).height() - 220) / 2 - 40 + "px",
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
		$(window).width() < 1452 ? ($("#hd #topbanner #kbhelp").hide(), $("#hd #topbanner #moretools").css("right", "552px")) : ($("#hd #topbanner #kbhelp").show(), $("#hd #topbanner #moretools").css("right", "691px")), $("#bd").css({
			height: $(window).height() - 120 + "px",
			width: $(window).width() + "px"
		}), $("#sidemenu").css({
			height: $(window).height() - 120 + "px"
		}), $("#leftpannel").css({
			height: $(window).height() - 165 + "px"
		}), $("#box").css({
			height: $(window).height() - 120 + "px",
			width: $(window).width() - (d + e) + "px"
		}), $("#bd #rightpannel").css({
			height: $(window).height() - 120 + "px"
		}), $("#bd #rightpannel #tcpannel").css({
			height: ($(window).height() - 220) / 2 + "px"
		}), $("#bd #rightpannel #acpannel").css({
			height: ($(window).height() - 220) / 2 + "px",
			top: ($(window).height() - 220) / 2 + 160 + "px"
		}), $("#box #junebox").css({
			width: $(window).width() - (e + 50) + "px",
			height: $(window).height() - 170 + "px"
		}), $(".rg-overlay").css({
			width: $(window).width() -  e + "px",
			height: $(window).height() - 120 + "px"
		}), clearTimeout(a), a = setTimeout(function() {
			$("#rightpannel #tclist").css({
				height: ($(window).height() - 220) / 2 - 40 + "px"
			}), $("#rightpannel #aclist").css({
				height: ($(window).height() - 220) / 2 - 40 + "px"
			}), $("#leftpannel #btngroup").css({
				height: $(window).height() - 105 + "px"
			}), $("#rightpannel #tclist").slimScroll({
				height: ($(window).height() - 220) / 2 - 40 + "px",
				color: "#333"
			}), $("#rightpannel #aclist").slimScroll({
				height: ($(window).height() - 220) / 2 - 40 + "px",
				color: "#333"
			}), $("#leftpannel #btngroup").slimScroll({
				height: $(window).height() - 105 + "px",
				color: "#fff"
			})
		}, 500)
	}), $("#mouseaction div").each(function(a) {
		3 > a ? $(this).on("click", function() {
			$("#mouseaction div.shuhui").removeClass("selected"), $("#mouseaction div.kuangxuan").removeClass("selected"), $("#mouseaction div.huaxian").removeClass("selected"), $(this).addClass("selected")
		}) : $(this).on("click", function() {
			$(this).attr("class").indexOf("selected") > 0 ? ($(this).removeClass("selected"), $(this).css("background", "url(images/a3.jpg) -2px 0 repeat"), $(this).attr("title", "允许鼠标拖动应用")) : ($(this).addClass("selected"), $(this).css("background", "url(images/a3select.jpg) -2px 0 repeat"), $(this).attr("title", "禁止鼠标拖动应用"))
		})
	}), $(".yingyong").on("click", function() {
		$("#configgroup div").removeClass("selected"), $(this).addClass("selected"), $("#moduleset").hide(), $("#applist").show("fade")
	}), $(".shezhi").on("click", function() {
		$("#configgroup div").removeClass("selected"), $(this).addClass("selected"), $("#moduleset").show("fade"), $("#applist").hide()
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
	}), $("#userdialog").dialog({
		title: "沃姆设计客户登录/注册",
		autoOpen: !1,
		height: 500,
		width: 550,
		modal: !0,
		buttons: {
			"确定": function() {
				var a, c, d, e;
				"none" == $("#regtab").css("display") ? (a = $("#username").val(), c = $("#password").val(), "" == a ? b.tMessage("用户名不能为空！") : "" == c ? b.tMessage("密码不能为空！") : $.ajax({
					type: "POST",
					url: "login.php",
					data: {
						username: $("#username").val(),
						password: $("#password").val()
					},
					dataType: "json",
					success: function(a) {
						1 == a[0] ? (tLogin.init(a), $("#userdialog").dialog("close")) : b.tMessage(a[2])
					}
				})) : (a = $("#rusername").val(), c = $("#rpassword").val(), d = $("#rpassword2").val(), e = $(rlicense).val(), "" == a ? b.tMessage("用户名不能为空！") : "" == c ? b.tMessage("密码不能为空！") : c != d ? b.tMessage("两次输入的密码不一致！") : $.ajax({
					type: "POST",
					url: "reg.php",
					data: {
						username: a,
						password: c,
						license: e
					},
					success: function(a) {
						"true" == a ? (b.tMessage("注册成功，请登录！", "login"), $("#rusername,#rpassword,#rpassword2,#rlicense").val(""), $("#userdialog").dialog("close")) : b.tMessage(a)
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