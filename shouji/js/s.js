function messageForPhp(c, a, d) {
	var b = require("scripts/D");
	if ($("#tMessage").length <= 0) {
		$(b.message).appendTo(b.b)
	}
	$("#tMessage").dialog({
		autoOpen: false,
		width: 400,
		modal: true,
		title: "提示",
		close: function() {
			if (a == "login") {
				$("#login").trigger("click")
			} else {
				if (a == "module") {
					$(".shezhi").trigger("click");
					$("#moduleHeight").trigger("focus")
				} else {
					if (a == "callback") {
						d()
					}
				}
			}
		},
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		}
	}).html(c).dialog("open")
}
function submitColor(c, a, b) {
	if (a != "") {
		c.css("background-color", a)
	} else {
		if (b && b != "") {
			c.css("background-color", b)
		} else {
			c.css("background-color", "transparent")
		}
	}
}
function tnaCheck(a) {
	if ($.cookie(a) == "noagain") {
		return true
	} else {
		return false
	}
}
function tnaCheckCookie(b, a) {
	if (!a) {
		$.cookie(b, "noagain")
	} else {
		$.cookie(b, "again")
	}
}
function fake_click(b) {
	var a = document.createEvent("MouseEvents");
	a.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	b.dispatchEvent(a)
}
function export_raw(b, d) {
	var c = window.URL || window.webkitURL || window;
	var e = new Blob([d]);
	var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
	a.href = c.createObjectURL(e);
	a.download = b;
	fake_click(a)
}
define("scripts/little.js", function(f) {
	var a = require("scripts/D"),
		b, h, g, e, d;
	a.littleDom = '<div id="tLittle" style="position:absolute;z-index:1002;"><span class="component"><i>X:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom1" /></span><span class="component"><i>Y:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom2" /></span><span class="component"><i>宽:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom3" /></span><span class="component"><i>高:</i><input type="text" value="0" spellcheck="false" class="except-keyboard" id="tLittleCom4"/ ></span><span id="tLittleComOk">&nbsp;&nbsp;&nbsp;&nbsp;</span>';
	"</div>";
	$(a.littleDom).appendTo(a.b).hide();
	b = $("#tLittle");
	h = $("#tLittleCom1");
	g = $("#tLittleCom2");
	e = $("#tLittleCom3");
	d = $("#tLittleCom4");
	tLittleComOk = $("#tLittleComOk");
	var c, i = false;
	f.create = function(l, m) {
		var j = m.attr("data-dblType"),
			n = m.hasClass(a.resizeNaClsVal);
		childClass = m.hasClass(a.appChildClsVal);
		if (j != "jib") {
			var o = {},
				k = {};
			o.left = a.tParseInt(m.css("left"));
			o.top = a.tParseInt(m.css("top"));
			o.width = m.width();
			o.height = m.height();
			if (childClass) {
				k = a.setChildPos(m.parent(), m)
			} else {
				k = o
			}
			if (b.is(":hidden")) {
				if (!h.is(":focus")) {
					h.val(o.left)
				}
				if (!g.is(":focus")) {
					g.val(o.top)
				}
				if (!e.is(":focus")) {
					e.val(o.width)
				}
				if (!d.is(":focus")) {
					d.val(o.height)
				}
				i = false
			} else {
				if (!i) {
					if (!h.is(":focus")) {
						h.val(o.left)
					}
					if (!g.is(":focus")) {
						g.val(o.top)
					}
					if (!e.is(":focus")) {
						e.val(o.width)
					}
					if (!d.is(":focus")) {
						d.val(o.height)
					}
				}
			}
			if (true) {
				e.parent().show();
				d.parent().show()
			}
			if (n || j == "jadb") {
				e.parent().hide();
				d.parent().hide()
			}
			c = m;
			b.css({
				top: k.top + k.height + 0 + a.offstop - a.junebox.scrollTop(),
				left: k.left + a.offsleft - a.junebox.scrollLeft()
			});
			if (l == "show") {
				b.show()
			} else {
				b.hide()
			}
		} else {
			b.hide()
		}
	};
	a.endParse = false;
	f.click = function(k) {
		if (c) {
			var l = a.tParseInt($(this).val()) || 0,
				j = $(this).parent().index();
			switch (j) {
			case 0:
				c.css("left", l);
				break;
			case 1:
				c.css("top", l);
				break;
			case 2:
				c.width(l);
				break;
			case 3:
				c.height(l);
				break
			}
		}
		c = null
	};
	f.clickAll = function(m) {
		if (c) {
			var n = a.tParseInt(h.val()) || 0,
				l = a.tParseInt(g.val()) || 0,
				k = a.tParseInt(e.val()) || 0,
				j = a.tParseInt(d.val()) || 0;
			c.css({
				left: n,
				top: l,
				width: k,
				height: j
			});
			i = false
		}
		c = null
	};
	b.on("keyup.little", "input", function(k) {
		var j = k.keyCode || k.which;
		if (j == 13) {
			f.clickAll(k)
		}
	});
	b.on("change.little", "input", function(j) {
		i = true
	});
	tLittleComOk.on("click", f.clickAll);
	return f
});
define("scripts/courseStep.js", function(c) {
	var f = require("scripts/D"),
		d = require("scripts/code");
	if (!tnaCheck("junezx_tna_cs1")) {
		$("#courseStep1").show()
	}
	var b = null;
	$("#makecode").on("mouseenter", function() {
		$("#makeChooseCode").css({
			top: 48
		}).show()
	});
	$("#makecode").on("mouseleave", function() {
		b = setTimeout(function() {
			$("#makeChooseCode").css({
				top: 10
			}).hide()
		}, 2000)
	});
	$("#makeChooseCode").on("mouseenter", function() {
		clearTimeout(b);
		b = null
	});
	$("#makeChooseCode").on("mouseleave", function() {
		$("#makeChooseCode").css({
			top: 10
		}).hide()
	});
	if ($("#jSetSaveTip").length == 0) {
		$('<div id="jSetSaveTip"><div id="jSetSaveTipClose"></div><div id="jSetSaveTipText"></div><div id="jSetSaveTipBtn"><div class="tnaCheck tna-checkin" id="jSetSaveTipCheckBtn" data-tna="junezx_tna_setsavetip" style="right: 20px;"><img src="http://img02.taobaocdn.com/imgextra/i2/39767794/TB2U_WFcpXXXXXPXXXXXXXXXXXX-39767794.png"><img class="checkin" src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB26r1GcpXXXXXDXXXXXXXXXXXX-39767794.png"></div></div></div>').appendTo(f.b);
		$("#jSetSaveTipClose").on("click", function() {
			$("#jSetSaveTip").slideUp(1000)
		})
	}
	if (!f.loadCourseStep) {
		f.loadCourseStep = true;
		if (window.localStorage) {
			f.set30Save = setInterval(function() {
				var i = $("#aclist").children("li:last").attr("set30save") || "no",
					h = 0;
				if (i != "yes") {
					var g = [];
					f.june.children(f.appCls).each(function() {
						g.push($(this).attr("data-appLabel") || "")
					});
					if (g.length > 0) {
						d.getCodeExport(function(j) {
							localStorage.tCookieJunezxCode = j;
							localStorage.tCookieLabelName = g.join("|;|");
							h = j.length;
							if (!tnaCheck("junezx_tna_setsavetip")) {
								if (h >= 51200) {
									$("#jSetSaveTipText").html("亲，您当前的代码量已经超过50KB，只能放在设计师自定义模块使用哦！<br />（当前代码量：" + (h / 1024).toFixed(1) + "KB）");
									$("#jSetSaveTip").addClass("t50Warning").slideDown(1000);
									$("#jSetSaveTipCheckBtn").show();
									setTimeout(function() {
										$("#jSetSaveTip").slideUp(1000)
									}, 10000)
								}
							}
							if (h >= 102400) {
								$("#jSetSaveTipText").html("亲，您当前的代码量已经超过100KB，超过120KB的代码淘宝将无法正常使用，建议亲分段制作！<br />");
								$("#jSetSaveTip").addClass("t120Warning").slideDown(1000);
								$("#jSetSaveTipCheckBtn").hide();
								setTimeout(function() {
									$("#jSetSaveTip").slideUp(1000)
								}, 10000)
							}
						}, true, true)
					} else {}
					$("#aclist").children("li:last").attr("set30save", "yes")
				}
			}, 40000);
			var a = localStorage.tCookieJunezxCode,
				e = localStorage.tCookieLabelName;
			if (a && a != "") {
				f.tConfirm("检测到您之前有正在编辑的内容，是否继续上次的操作？", function() {
					try {
						localStorage.tCookieJunezxCode = a;
						localStorage.tCookieLabelName = e;
						d.codeImportDialogCode(a);
						if (e && e != "") {
							var g = e.split("|;|");
							var i = require("scripts/action"),
								h = require("scripts/layer");
							f.june.children(f.appCls).each(function(l, n) {
								if (g[l] != "") {
									var m = JSON.parse($(this).attr("data-config") || "{}"),
										k = $(this).attr("data-dblType");
									m.appLabel = g[l];
									$(this).attr("data-appLabel", g[l]).attr("data-config", JSON.stringify(m));
									h.updateAppLabel($(this));
									i.create("edit", $(this))
								}
							})
						}
					} catch (j) {
						f.tMessage("数据异常，导入失败！")
					}
				})
			}
		}
	}
	c.click = function(g) {
		if (g == "1") {
			$("#courseStep1").hide()
		}
	};
	return c
});
define("scripts/littleTip.js", function(b) {
	return;
	var d = require("scripts/D");
	var a, c = '<div id="tNotice"><p style="margin-top:13px;margin-left:20px;height:27px;line-height:27px;color:#FFF;letter-spacing:2px;">沃姆设计客户QQ群</p><p style="margin-top:5px;">我们将会在QQ群公告发布关于我们的模板、</p><p>配套工具的更新动态。</p><p>介绍新增的各种功能，以及如何使用。</p><p style="margin-top:20px;color:#aaa;">&nbsp;</p><div class="tnaCheck tna-checkin" data-tna="junezx_tna_notice"><img src="http://img02.taobaocdn.com/imgextra/i2/39767794/TB2U_WFcpXXXXXPXXXXXXXXXXXX-39767794.png"/><img class="checkin" src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB26r1GcpXXXXXDXXXXXXXXXXXX-39767794.png"/></div><div id="tNoticeClose"></div></div>';
	if (!tnaCheck("junezx_tna_notice")) {
		a = setTimeout(function() {
			$("#tNotice").slideUp(1000)
		}, 15000);
		$(c).appendTo(d.b).slideDown(1000);
		$("#tNotice").on("mouseenter", function() {
			clearTimeout(a);
			a = null
		});
		$("#tNotice").on("mouseleave", function() {
			clearTimeout(a);
			a = null;
			a = setTimeout(function() {
				$("#tNotice").slideUp(1000)
			}, 5000)
		})
	}
	$("#tNoticeClose").on("click", function() {
		clearTimeout(a);
		a = null;
		$("#tNotice").slideUp(1000)
	});
	d.b.on("click", ".tnaCheck", function() {
		var e = $(this),
			f = e.attr("data-tna");
		if (e.hasClass("tna-checkin")) {
			e.addClass("tna-checkout").removeClass("tna-checkin");
			tnaCheckCookie(f)
		} else {
			e.addClass("tna-checkin").removeClass("tna-checkout");
			tnaCheckCookie(f, true)
		}
	})
});
define("scripts/TopBannerTip.js", function(a) {});
define("scripts/other.js", function(a) {
	var c = require("scripts/D"),
		b = require("scripts/UI_Dialog");
	a.thumbImport = function(h) {
		if (!h.hasClass("jwz")) {
			var m = $.extend({}, c.qssetConfig),
				f = h.children("a:eq(0)").length > 0 ? h.children("a:eq(0)") : h.children(".rel").children("a:eq(0)");
			m.characterMode = h.attr("data-t") || "text";
			m.href = f.attr("href") || "";
			m.hrefMode = f.attr("target");
			m.characterBgSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, "");
			m.characterAlign = h.css("text-align") || "left";
			m.characterContent = f.html();
			m.characterSize = f.css("font-size").replace(/px/g, "");
			m.characterFont = f.css("font-family").replace(/'/g, "");
			m.characterColor = RGBToHex(f.css("color"));
			m.characterBgColor = RGBToHex(f.css("background-color"), "");
			m.characterWeight = f.css("font-weight");
			m.characterWeight == "400" && (m.characterWeight = "normal");
			m.borderWidth1 = f.css("border-width") || "0px";
			m.borderWidth1 = m.borderWidth1.replace(/px/g, "");
			m.borderColor1 = RGBToHex(f.css("border-color"));
			m.characterFixed = 0;
			m.characterLineThrough = "";
			m.characterLineUnder = "";
			if (m.borderWidth1 != "0") {
				m.borderControl1 = "hborder1"
			}
			if (m.characterAlign == "left") {
				m.characterSpace = Math.abs(c.tParseInt(f.css("padding-left")))
			} else {
				if (m.characterAlign == "right") {
					m.characterSpace = Math.abs(c.tParseInt(f.css("padding-right")))
				} else {
					m.characterSpace = ""
				}
			}
			if (f.children(".junei").length > 0) {
				var p = f.children(".junei");
				m.characterContent = p.html();
				m.characterColorMsOver = RGBToHex(p.css("color"));
				m.characterBgColorMsOver = RGBToHex(p.css("background-color"), "");
				m.characterBgSrcMsOver = p.css("background-image").replace(/^url|[\(\"\)]*/g, "");
				m.characterBorderWidthMsOver = p.css("border-width") || "0px";
				m.characterBorderWidthMsOver = m.characterBorderWidthMsOver.replace(/px/g, "");
				m.characterBorderColorMsOver = RGBToHex(p.css("border-color"));
				m.characterBorderStyleMsOver = p.css("border-style") || "solid"
			} else {
				m.characterColorMsOver = "";
				m.characterBgColorMsOver = "";
				m.characterBgSrcMsOver = "";
				m.characterBorderWidthMsOver = "";
				m.characterBorderColorMsOver = "";
				m.characterBorderStyleMsOver = "solid"
			}
			if (h.find("a").length > 1) {
				var q = h.find("div.jspb").children("a:eq(0)"),
					i = q.attr("class"),
					u = 0;
				m.characterUnderLine = "off";
				m.characterHoverMode = "on";
				m.characterHoverSpeed = q.attr("class").match(/trans(\w+)s/g);
				if (m.characterHoverSpeed && m.characterHoverSpeed.length > 0) {
					m.characterHoverSpeed = m.characterHoverSpeed.join("")
				} else {
					m.characterHoverSpeed = ""
				}
				m.characterBgSrcHover = q.css("background-image").replace(/^url|[\(\"\)]*/g, "");
				m.characterSizeHover = q.css("font-size").replace(/px/g, "");
				m.characterFontHover = q.css("font-family").replace(/'/g, "");
				m.characterColorHover = RGBToHex(q.css("color"));
				m.characterBgColorHover = RGBToHex(q.css("background-color"), "");
				m.characterWeightHover = q.css("font-weight");
				m.characterWeightHover == "400" && (m.characterWeightHover = "normal");
				m.borderWidth = q.css("border-width") || "0px";
				m.borderWidth = m.borderWidth.replace(/px/g, "");
				m.borderColor = RGBToHex(q.css("border-color"));
				m.characterUnderLineWeight = f.height() - q.height();
				if (m.borderWidth != "0") {
					m.borderControl = "hborder"
				}
				m.characterHoverSpeed = q.attr("class").match(/trans(\w+)s/g);
				if (m.characterHoverSpeed && m.characterHoverSpeed.length > 0) {
					m.characterHoverSpeed = m.characterHoverSpeed.join("")
				} else {
					m.characterHoverSpeed = ""
				}
				m.css3Mode1 = i.split(" ")[2];
				m.css3ModeX1 = i.split(" ")[3];
				m.css3ModeY1 = i.split(" ")[4];
				if (i.replace(/  /g, "") == i) {
					if (i.indexOf("june-box-fx") < 0 && i.indexOf("june-box-fy") < 0 && i.indexOf("june-box-sf") < 0 && i.indexOf("june-box-fx") < 0 && i.indexOf("june-box-fy") < 0 && i.indexOf("june-box-r1") < 0 && i.indexOf("june-box-r2") < 0 && i.indexOf("june-box-r3") < 0 && i.indexOf("june-box-r7") < 0 && i.indexOf("june-box-fr1") < 0 && i.indexOf("june-box-fr2") < 0 && i.indexOf("june-box-fr3") < 0 && i.indexOf("june-box-fr7") < 0) {
						m.css3Mode1 = "";
						u++;
						m.css3ModeX1 = i.split(" ")[3 - u];
						m.css3ModeY1 = i.split(" ")[4 - u]
					}
					if (i.indexOf("june-box-fromleft") < 0 && i.indexOf("june-box-fromright") < 0 && i.indexOf("june-box-lx") < 0 && i.indexOf("june-box-rx") < 0) {
						m.css3ModeX1 = "";
						u++;
						m.css3ModeY1 = i.split(" ")[4 - u]
					}
					if (i.indexOf("june-box-fromtop") < 0 && i.indexOf("june-box-frombottom") < 0 && i.indexOf("june-box-uy") < 0 && i.indexOf("june-box-dy") < 0) {
						m.css3ModeY1 = ""
					}
				}
				if (m.characterUnderLineWeight != 0) {
					m.characterUnderLine = "on";
					m.characterUnderLineStyle = q.css("border-bottom-style");
					m.characterUnderLineColor = RGBToHex(q.css("border-bottom-color"));
					m.characterUnderLineWeight += ""
				} else {
					m.characterUnderLineWeight = "1"
				}
			}
			if (f.css("text-decoration").indexOf("line-through") >= 0) {
				m.characterLineThrough = "line-through"
			}
			if (f.css("text-decoration").indexOf("underline") >= 0) {
				m.characterLineUnder = "underline"
			}
			var e = m.characterContent;
			if (m.characterMode != "text") {
				var t = h.attr("data-h") || ";",
					l = t.split(";");
				m.characterItemContent = l[0];
				m.characterContent = l[1];
				e = m.characterItemContent;
				if (m.characterMode == "price" || m.characterMode == "_price") {
					var o = e.split(".");
					o.length > 1 ? (m.characterFixed = o[1].length) : m.characterFixed = 0
				}
			}
			return JSON.stringify(m)
		} else {
			var m = {},
				f = h.children("a:eq(0)").length > 0 ? h.children("a:eq(0)") : h.children(".rel").children("a:eq(0)");
			m.characterMode = h.attr("data-t") || "text";
			m.href = f.attr("href") || "";
			m.hrefMode = f.attr("target");
			m.characterBgSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, "");
			m.characterAlign = h.css("text-align") || "left";
			m.characterContent = f.html();
			m.characterSize = f.css("font-size").replace(/px/g, "");
			m.characterFont = f.css("font-family").replace(/'/g, "");
			m.characterStyle = f.css("font-style") || "normal";
			m.characterColor = RGBToHex(f.css("color"));
			m.characterBgColor = RGBToHex(f.css("background-color"), "");
			m.characterWeight = f.css("font-weight");
			m.characterWeight == "400" && (m.characterWeight = "normal");
			m.characterBorderWidth = f.css("border-width") || "0px";
			m.characterBorderWidth = m.characterBorderWidth.replace(/px/g, "");
			m.characterBorderColor = RGBToHex(f.css("border-color"));
			m.characterBorderStyle = f.css("border-style") || "solid";
			m.characterFixed = 0;
			m.characterLineThrough = "";
			m.characterLineUnder = "";
			m.characterLetterSpacing = f.css("letter-spacing").replace(/px/g, "");
			m.characterWidthMode = h.attr("data-w") || "normal";
			m.ssOpacity = "1";
			m.ssOpacity1 = "1";
			if (h.attr("data-o")) {
				var s = h.attr("data-o") || ";",
					d = s.split(";");
				if (s.indexOf("|") >= 0) {
					d = s.split("|")
				}
				m.ssOpacity = d[0];
				m.ssOpacity1 = d[1]
			}
			if (h.attr("data-c") == "yes") {
				m.characterLineMulti = "yes";
				m.characterLineContent = m.characterContent;
				m.characterContent = "";
				m.characterLineHeight = c.tParseInt(f.css("line-height"));
				m.characterLineAlign = m.characterAlign;
				m.characterAlign = "left";
				m.characterLineSpace = c.tParseInt(f.css("text-indent"));
				m.characterTBpadding = c.tParseInt(f.css("padding-top"));
				m.characterLRpadding = c.tParseInt(f.css("padding-left"))
			} else {
				m.characterLineMulti = "no";
				m.characterLineContent = "";
				m.characterLineHeight = "";
				m.characterLineAlign = "";
				m.characterLineSpace = ""
			}
			var j = "";
			if (m.characterWidthMode == "normal") {
				if (m.characterAlign == "left") {
					m.characterSpace = Math.abs(c.tParseInt(f.css("right")))
				} else {
					if (m.characterAlign == "right") {
						m.characterSpace = Math.abs(c.tParseInt(f.css("left")))
					} else {
						m.characterSpace = ""
					}
				}
			} else {
				m.characterLeftPadding = Math.abs(c.tParseInt(f.css("padding-left")));
				m.characterRightPadding = Math.abs(c.tParseInt(f.css("padding-right")));
				j = c.tParseInt(f.css("line-height"))
			}
			if (f.children(".junei").length > 0) {
				var p = f.children(".junei");
				m.characterContent = p.html();
				m.characterColorMsOver = RGBToHex(p.css("color"));
				m.characterBgColorMsOver = RGBToHex(p.css("background-color"), "");
				m.characterBgSrcMsOver = p.css("background-image").replace(/^url|[\(\"\)]*/g, "");
				m.characterBorderWidthMsOver = p.css("border-width") || "0px";
				m.characterBorderWidthMsOver = m.characterBorderWidthMsOver.replace(/px/g, "");
				m.characterBorderColorMsOver = RGBToHex(p.css("border-color"));
				m.characterBorderStyleMsOver = p.css("border-style") || "solid"
			} else {
				m.characterColorMsOver = "";
				m.characterBgColorMsOver = "";
				m.characterBgSrcMsOver = "";
				m.characterBorderWidthMsOver = "";
				m.characterBorderColorMsOver = "";
				m.characterBorderStyleMsOver = "solid"
			}
			if (h.find("a").length > 1) {
				var q = h.find("div.jspb").children("a:eq(0)"),
					i = q.attr("class"),
					u = 0;
				m.characterUnderLine = "off";
				m.characterHoverMode = "on";
				m.characterHoverSpeed = q.attr("class").match(/trans(\w+)s/g);
				if (m.characterHoverSpeed && m.characterHoverSpeed.length > 0) {
					m.characterHoverSpeed = m.characterHoverSpeed.join("")
				} else {
					m.characterHoverSpeed = ""
				}
				m.characterBgSrcHover = q.css("background-image").replace(/^url|[\(\"\)]*/g, "");
				m.characterSizeHover = q.css("font-size").replace(/px/g, "");
				m.characterFontHover = q.css("font-family").replace(/'/g, "");
				m.characterColorHover = RGBToHex(q.css("color"));
				m.characterBgColorHover = RGBToHex(q.css("background-color"), "");
				m.characterWeightHover = q.css("font-weight");
				m.characterWeightHover == "400" && (m.characterWeightHover = "normal");
				m.characterBorderWidthHover = q.css("border-width") || "0px";
				m.characterBorderWidthHover = m.characterBorderWidthHover.replace(/px/g, "");
				m.characterBorderColorHover = RGBToHex(q.css("border-color"));
				m.characterBorderStyleHover = q.css("border-style") || "solid";
				m.characterUnderLineWeight = f.height() - q.height();
				m.characterHoverSpeed = q.attr("class").match(/trans(\w+)s/g);
				if (m.characterHoverSpeed && m.characterHoverSpeed.length > 0) {
					m.characterHoverSpeed = m.characterHoverSpeed.join("")
				} else {
					m.characterHoverSpeed = ""
				}
				m.css3Mode1 = i.split(" ")[2];
				m.css3ModeX1 = i.split(" ")[3];
				m.css3ModeY1 = i.split(" ")[4];
				if (i.replace(/  /g, "") == i) {
					if (i.indexOf("june-box-fx") < 0 && i.indexOf("june-box-fy") < 0 && i.indexOf("june-box-sf") < 0 && i.indexOf("june-box-fx") < 0 && i.indexOf("june-box-fy") < 0 && i.indexOf("june-box-r1") < 0 && i.indexOf("june-box-r2") < 0 && i.indexOf("june-box-r3") < 0 && i.indexOf("june-box-r7") < 0 && i.indexOf("june-box-fr1") < 0 && i.indexOf("june-box-fr2") < 0 && i.indexOf("june-box-fr3") < 0 && i.indexOf("june-box-fr7") < 0) {
						m.css3Mode1 = "";
						u++;
						m.css3ModeX1 = i.split(" ")[3 - u];
						m.css3ModeY1 = i.split(" ")[4 - u]
					}
					if (i.indexOf("june-box-fromleft") < 0 && i.indexOf("june-box-fromright") < 0 && i.indexOf("june-box-lx") < 0 && i.indexOf("june-box-rx") < 0) {
						m.css3ModeX1 = "";
						u++;
						m.css3ModeY1 = i.split(" ")[4 - u]
					}
					if (i.indexOf("june-box-fromtop") < 0 && i.indexOf("june-box-frombottom") < 0 && i.indexOf("june-box-uy") < 0 && i.indexOf("june-box-dy") < 0) {
						m.css3ModeY1 = ""
					}
				}
				if (m.characterUnderLineWeight != 0) {
					m.characterUnderLine = "on";
					m.characterUnderLineStyle = q.css("border-bottom-style");
					m.characterUnderLineColor = RGBToHex(q.css("border-bottom-color"));
					m.characterUnderLineWeight += ""
				} else {
					m.characterUnderLineWeight = "1"
				}
				if (h.hasClass("shadowShow")) {
					m.shadowControl = "shadowShow";
					var k = q.css("box-shadow");
					if (k.indexOf("inset") >= 0) {
						m.shadowStyle = "inset";
						k = $.trim(k.replace(/inset/g, ""))
					}
					if (k.indexOf("rgb") >= 0) {
						var r = RGBToHex(k.match(/rgb\((\S|\s)*\)/g)[0]);
						k = $.trim(k.replace(/rgb\((\S|\s)*\)/g, ""))
					}
					var g = k.split(" ");
					if (g[0].indexOf("px") < 0 && g[0]) {
						if (r == "") {
							r = RGBToHex(g[0])
						}
						g.splice(0, 1)
					} else {
						if (r == "") {
							r = RGBToHex(g[4])
						}
					}
					m.shadowColor = r;
					m.shadowLeft = c.tParseInt(g[0]);
					m.shadowTop = c.tParseInt(g[1]);
					m.shadowBlur = c.tParseInt(g[2]);
					m.shadowSize = c.tParseInt(g[3])
				}
				if (h.hasClass("hborder")) {
					m.borderControl = "hborder";
					m.borderColor = RGBToHex(q.css("border-color"));
					m.borderWidth = q.css("border-width") || "1px";
					m.borderWidth = m.borderWidth.replace(/px/g, "");
					m.borderRadius = q.css("border-radius") || "0px";
					m.borderRadius = m.borderRadius.replace(/px/g, "")
				}
				if (h.hasClass("mcblack")) {
					m.mongoliaControl = "mongoliaShow";
					m.mongoliaMode = "mcblack"
				}
				if (h.hasClass("mcwhite")) {
					m.mongoliaControl = "mongoliaShow";
					m.mongoliaMode = "mcwhite"
				}
			}
			if (f.css("text-decoration").indexOf("line-through") >= 0) {
				m.characterLineThrough = "line-through"
			}
			if (f.css("text-decoration").indexOf("underline") >= 0) {
				m.characterLineUnder = "underline"
			}
			var e = m.characterContent;
			if (m.characterMode != "text") {
				var t = h.attr("data-h") || ";",
					l = t.split(";");
				m.characterItemContent = l[0];
				m.characterContent = l[1];
				e = m.characterItemContent;
				if (m.characterMode == "price" || m.characterMode == "_price") {
					var o = e.split(".");
					o.length > 1 ? (m.characterFixed = o[1].length) : m.characterFixed = 0
				}
			}
			if (h.hasClass("shadowShow1")) {
				m.shadowControl1 = "shadowShow1";
				var n = f.css("box-shadow");
				if (n.indexOf("inset") >= 0) {
					m.shadowStyle1 = "inset";
					n = $.trim(n.replace(/inset/g, ""))
				}
				if (n.indexOf("rgb") >= 0) {
					var r = RGBToHex(n.match(/rgb\((\S|\s)*\)/g)[0]);
					n = $.trim(n.replace(/rgb\((\S|\s)*\)/g, ""))
				}
				var g = n.split(" ");
				if (g[0].indexOf("px") < 0 && g[0]) {
					if (r == "") {
						r = RGBToHex(g[0])
					}
					g.splice(0, 1)
				} else {
					if (r == "") {
						r = RGBToHex(g[4])
					}
				}
				m.shadowColor1 = r;
				m.shadowLeft1 = c.tParseInt(g[0]);
				m.shadowTop1 = c.tParseInt(g[1]);
				m.shadowBlur1 = c.tParseInt(g[2]);
				m.shadowSize1 = c.tParseInt(g[3])
			}
			if (h.hasClass("hborder1")) {
				m.borderControl1 = "hborder1";
				m.borderColor1 = RGBToHex(f.css("border-color"));
				m.borderWidth1 = f.css("border-width") || "1px";
				m.borderWidth1 = m.borderWidth1.replace(/px/g, "");
				m.borderRadius1 = f.css("border-radius") || "0px";
				m.borderRadius1 = m.borderRadius1.replace(/px/g, "")
			}
			if (h.hasClass("juneol")) {
				m.outlineControl = "outlineShow";
				m.outlineWidth = "juneol";
				m.outlineColor = RGBToHex(h.css("outline-color"));
				m.outlineShadowColor = RGBToHex(h.css("color"));
				if (h.attr("class").indexOf("trans") >= 0) {
					m.outlineSpeed = h.attr("class").match(/trans(\w+)s/g).join("")
				} else {
					m.outlineSpeed = ""
				}
			}
			if (h.hasClass("juneol1")) {
				m.outlineControl = "outlineShow";
				m.outlineWidth = "juneol1";
				m.outlineColor = RGBToHex(h.css("outline-color"));
				m.outlineShadowColor = RGBToHex(h.css("color"));
				if (h.attr("class").indexOf("trans") >= 0) {
					m.outlineSpeed = h.attr("class").match(/trans(\w+)s/g).join("")
				} else {
					m.outlineSpeed = ""
				}
			}
			if (h.hasClass("juneol2")) {
				m.outlineControl = "outlineShow";
				m.outlineWidth = "juneol2";
				m.outlineColor = RGBToHex(h.css("outline-color"));
				m.outlineShadowColor = RGBToHex(h.css("color"));
				if (h.attr("class").indexOf("trans") >= 0) {
					m.outlineSpeed = h.attr("class").match(/trans(\w+)s/g).join("")
				} else {
					m.outlineSpeed = ""
				}
			}
			return JSON.stringify(m)
		}
	};
	a.thumbCircleImport = function(d) {
		var f = {},
			g = d.children("div.s2");
		f.characterContent = g.html();
		f.characterSize = g.css("font-size").replace(/px/g, "");
		f.characterFont = g.css("font-family").replace(/'/g, "");
		f.characterColor = RGBToHex(g.css("color"));
		f.characterBgColor = RGBToHex(g.css("background-color"), "");
		f.characterWeight = g.css("font-weight");
		f.characterWeight == "400" && (f.characterWeight = "normal");
		if (d.children("div.s1").hasClass("s1h")) {
			f.characterHoverMode = "on";
			var e = d.children("div.s1");
			f.characterSizeHover = e.css("font-size").replace(/px/g, "");
			f.characterFontHover = e.css("font-family").replace(/'/g, "");
			f.characterColorHover = RGBToHex(e.css("color"));
			f.characterBgColorHover = RGBToHex(e.css("background-color"), "");
			f.characterWeightHover = e.css("font-weight");
			f.characterWeightHover == "400" && (f.characterWeightHover = "normal")
		}
		return JSON.stringify(f)
	};
	a.thumbset = function(i, h) {
		var g, j, e, d = h.replace(/Img/g, "Hover");
		j = $("#sc" + i + "_ho1");
		e = j.html();
		if (e == "") {
			g = $.extend({}, c.appConfig.jfsb[1].tOtherSetConfig)
		} else {
			g = JSON.parse(e)
		}
		var f = $("#sliderSwitch").val();
		b.tDialogOther("thumbset.php?sliderSwitch=" + f, "缩略图高级设置", g, function(l) {
			var k = $("#oths_tForm").formToObject();
			j.html(JSON.stringify(k));
			l.dialog("close");
			$("#contentPage").children("a.on").trigger("click")
		}, function(k) {
			j.html("");
			k.dialog("close");
			$("#contentPage").children("a.on").trigger("click")
		})
	};
	a.thumbcircleset = function(h, g) {
		var f, i, d;
		i = $("#sc" + h + "_ho2");
		d = i.html();
		if (d == "") {
			f = $.extend({}, c.appConfig.jfsb[1].tOtherSetConfig1)
		} else {
			f = JSON.parse(d)
		}
		var e = $("#sliderSwitch").val();
		b.tDialogOther("thumbcircleset.php?sliderSwitch=" + e, "圆点高级设置", f, function(k) {
			var j = $("#oths_tForm").formToObject();
			i.html(JSON.stringify(j));
			k.dialog("close");
			$("#contentPage").children("a.on").trigger("click")
		}, function(j) {
			i.html("");
			j.dialog("close");
			$("#contentPage").children("a.on").trigger("click")
		})
	};
	a.uploadpic = function(e, d) {
		var f = require("scripts/tAjax");
		if ($("#uploadPicDialog").length < 1) {
			$('<div id="uploadPicDialog"></div>').appendTo(c.b)
		} else {}
		$("#uploadPicDialog").dialog({
			resizable: false,
			modal: true,
			width: 820,
			height: 615,
			title: "图片选择",
			buttons: {
				"确定": function(i) {
					var g = $("#picBox").children(".picElement.selected"),
						h = "";
					if ($("#appTabs").length > 0) {
						g = $("#appTabs").find(".picElement.selected")
					}
					if (g.length > 0) {
						h = (g.children(".img-container").children("img").attr("src") || "").replace(/_80x80.jpg/g, "");
						if ( !! d && d != "") {
							$("#" + d).val(h)
						} else {
							$("input[name='" + e + "']").val(h)
						}
						$(this).dialog("close");
						$(".ui-tooltip").hide()
					} else {
						c.tMessage("请选择图片后确定！")
					}
				},
				"取消": function() {
					$(this).dialog("close");
					$(".ui-tooltip").hide()
				}
			}
		});
		f.ajaxHtml("taobaoapp/tb_uploadpic.php", {
			name: e,
			inputId: d
		}, function(g) {
			$("#uploadPicDialog").html(g).dialog("open")
		})
	};
	a.sharecode = function(h, d) {
		var j = $("#june"),
			e = d;
		$("#junebox").scrollTop(0).scrollLeft(0);
		c.tLoading(true);
		if (h != "rePair") {
			if (c.tUserLogin && c.tUserName != "") {
				if (c.insertID && c.insertID != "") {
					c.tLoading(false);
					c.tMessage('分享成功, 您的作品地址为: <a class="june-preview" href="http://cnzoom.com/previewP.php?ID=' + c.insertID + '" target="_blank">http://cnzoom.com/previewP.php?ID=' + c.insertID + "</a>,您可以将此地址发给您的好友！")
				}
				$.post("getsnap.php", {
					userName: c.tUserName,
					ID: c.insertID
				}, function(m) {
					if (!c.insertID || c.insertID == "") {
						c.tLoading(false);
						c.tMessage(m[1])
					}
					$(e.target).css("visibility", "hidden")
				}, "json")
			} else {
				$.ajax({
					url: "insertcode.php",
					type: "POST",
					data: {
						code: $("#codeText").val(),
						username: c.tUserName,
						shareType: 1
					},
					success: function(n) {
						if (n) {
							c.tLoading(false);
							c.tMessage('分享成功, 您的作品地址为: <a class="june-preview" href="http://cnzoom.com/previewP.php?ID=' + n + '" target="_blank">http://cnzoom.com/previewP.php?ID=' + n + "</a>,您可以将此地址发给您的好友！");
							$.post("getsnap.php", {
								userName: c.tUserName,
								ID: n
							}, function(m) {
								$(e.target).css("visibility", "hidden")
							}, "json")
						} else {
							c.tMessage("分享失败,请登录后重试！")
						}
						c.tLoading(false)
					}
				})
			}
		} else {
			j.css("position", "fixed");
			var g = j.offset().top,
				f = j.offset().left,
				i = {};
			var k = j.css("backgroundImage").replace(/^url|[\(\"\)]*/g, "");
			if (checkUrl(k)) {
				i.top = g, i.left = f, i.right = f + j.width(), i.bottom = g + j.height()
			}
			j.find(".t-app, .t-app-child").each(function() {
				var n = $(this),
					o = n.offset(),
					p, m;
				if (o && !n.is(":hidden") && n.attr("data-attachType") != "jspbChild") {
					p = o.left + n.width();
					m = o.top + n.height();
					if ((!i.left && i.left != 0) || o.left < i.left) {
						i.left = o.left
					}
					if (!i.right || p > i.right) {
						i.right = p
					}
					if ((!i.top && i.top != 0) || o.top < i.top) {
						i.top = o.top
					}
					if (!i.bottom || m > i.bottom) {
						i.bottom = m;
						c.jSelectsedDom.removeClass(c.selectedVal);
						c.jSelectsedDom = $();
						n.addClass(c.selectedVal);
						c.jSelectsedDom = c.jSelectsedDom.add(n)
					}
				}
			});
			i.left -= f;
			i.right -= f;
			i.top -= g;
			i.bottom -= g;
			if ((i.right - i.left) * (i.bottom - i.top) > 2073600) {
				i.bottom = i.top + 1080
			}
			if ((i.right - i.left) * (i.bottom - i.top) > 2073600) {
				i.right = i.left + 1920
			}
			if (i.left < 0) {
				i.left = 0
			}
			if (i.top < 0) {
				i.top = 0
			}
			if (i.right > j.width()) {
				i.right = j.width()
			}
			if (i.bottom > j.height()) {
				i.bottom = j.height()
			}
			i.width = i.right - i.left;
			i.height = i.bottom - i.top;
			var l = window.location.hash.replace("#", "");
			if (l != "") {
				if (l.substr(0, 1) == "i") {
					l = l.substr(2);
					j.css("position", "relative");
					a.tDialogRepairForm(function(n, m) {
						$.post("getsnap-repair.php", {
							type: "hasImg",
							ttImg: n,
							ID: l,
							newID: c.insertID
						}, function(o) {
							if ( !! o[0]) {
								m.dialog("close");
								$(".ui-tooltip").hide()
							}
							c.tLoading(false);
							c.tMessage(o[1]);
							$(e.target).css("visibility", "hidden")
						}, "json")
					})
				}
			}
		}
	};
	a.downloadcode = function(h, i) {
		var g = $("#" + h).val(),
			d, f = $("#" + g),
			e = '<!DOCTYPE html><html><head><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="css/preview.css"><script src="http://g.tbcdn.cn/kissy/k/1.3.2/seed-min.js"><\/script><script src="js/lib/sns-core.js"><\/script><style>.ks-popup-hidden {display:none;}.ks-popup-shown {display:block;}</style></head><body style="overflow-y:scroll;overflow-x:hidden;"><div class="codebox" style="width:100%;margin:0 auto;"><div id="main">' + f.val() + '</div></div><script charset="utf-8" src="http://g.tbcdn.cn/kissy/k/1.3.2/json-min.js" async><\/script><script type="text/javascript" src="js/b.js"><\/script><script type="text/javascript" src="js/lib/cd.js"><\/script><script>var tempSrollNum=Math.abs($(window).width()-$("#main").children("div.rel").width())/2;$(window).scrollLeft(tempSrollNum),$("#main").children("div.rel").css({"margin-left":"50%",left:"-"+$("#main").children("div.rel").width()/2+"px"}),$(".jpb").each(function(){var t=$(this);t.addClass("ks-popup-hidden").attr("style","z-index:99;display:block;visibility:hidden;")}),$(".japb").each(function(){var t=$(this);t.addClass("ks-popup-hidden").attr("style","z-index:99;display:block;visibility:hidden;")}),$(".jplb").each(function(){var t=\'<div class="sns-widget sns-comment sns-widget-ui" data-comment="{&quot;param&quot;:{&quot;type_id&quot;:&quot;1100035&quot;,&quot;rec_user_id&quot;:&quot;-1&quot;,&quot;moreurl&quot;:&quot;http://item.taobao.com/item.htm?id=15705806426&quot;,&quot;target_key&quot;:&quot;huodong_35614370&quot;,&quot;title&quot;:&quot;空中红秀阁&quot;,&quot;page_size&quot;:3,&quot;view&quot;:&quot;default_list&quot;},&quot;paramList&quot;:{&quot;view&quot;:&quot;list_trunPage&quot;}}"><div class="comment-widget"><div class="comment-edit">        <div class="comment-add"><div class="textarea-b"><textarea class="f-txt" resize="none" style="" placeholder="我也插句话..."></textarea>        </div><div style="display: none;" class="checkcode sns-nf">        <span>验证码：</span>        <input type="text" style="width: 5em;" tabindex="3" class="f-checkcode" maxlength="4" size="4" name="TPL_checkcode">        <img height="35" width="85" style="vertical-align: middle;">        <span style="margin: 0pt 10px 0pt 0pt;">(不区分大小写)</span>        <a class="newCheckCode" href="#">换一张</a>        </div>        <div class="act">        <span class="skin-blue"><em class="J_LetterCount">0/140</em><span class="btn"><a href="#" class="J_PostComment">评论</a></span></span>        <a href="#" class="face">表情</a>            <label>    <input type="checkbox" class="J_SycMB"> 同时转发到我的淘宝    </label>            </div>        </div></div><ul class="comment-list"></ul></div></div>\';$(this).html(t)}),$(".jib").children().each(function(){var t=$(this);t.children().each(function(){var t=$(this);(t.attr("data-u")||""==t.attr("data-u"))&&t.html(t.attr("data-u"))})}),$(".jcb").each(function(){var t,e,a,i=$(this);i.attr("data-t")&&(t=i.attr("data-t").split(";"),t[0]&&"text"!=t[0]&&(e=i.attr("data-h")||";",a=e.split(";"),i.children("a:eq(0)").html(a[0])),t[1]&&"text"!=t[1]&&(e=i.attr("data-hh")||";",a=e.split(";"),i.children("a:eq(1)").html(a[0])))}),$("div.jnxfbox").length>0&&$("div.jnxfbox").height("100%").css("overflow","hidden");var o=window.opener;KISSY.use("node,button, dd,switchable, resizable,ua,event,overlay,ajax,countdown, dom",function(t,e,a,i,o,n,d,s,l,c,u){i.DDM,t.DOM;t.ready(function(){document.getElementById("main").innerHTML;t.all(".J_TWidget").each(function(e){console.log(e.attr("data-widget-config").replace(/\'/g,\'"\'));var a=e.attr("data-widget-type"),i=t.JSON.parse(e.attr("data-widget-config").replace(/\'/g,\'"\'));i&&(i.srcNode=e,"Popup"==a?(i.triggerType="mouse",window.popup=new l.Popup(i)):"Carousel"==a?window.popup=new o.Carousel(e,i):"Slide"==a?window.popup=new o.Slide(e,i):"Tabs"==a?window.popup=new o.Tabs(e,i):"Countdown"==a?new u(e,i.endTime,i):"Accordion"==a&&new o.Accordion(e,i))}),t.each(t.all(".sns-widget"),function(t){SNS.active(t)})})});<\/script></body></html>';
		d = "junecode_dsz_" + new Date().getTime() + "_" + parseInt(Math.random() * 99999) + ".html";
		export_raw(d, e)
	};
	a.tDialogRepairForm = function(e) {
		var g = require("scripts/tAjax");
		var d = "repairForm.php",
			f = {};
		if ($("#tDialogRepairForm").length == 0) {
			$('<div id="tDialogRepairForm"></div>').appendTo(c.b)
		}
		$("#tDialogRepairForm").dialog({
			resizable: false,
			modal: true,
			width: 520,
			height: 270,
			title: "修复!!!",
			buttons: {
				"修复": function(h) {
					e($("#i_RepairForm").val(), $(this))
				},
				"取消": function() {
					$(this).dialog("close");
					$(".ui-tooltip").hide()
				}
			}
		});
		g.ajaxHtml(d, f, function(h) {
			$("#tDialogRepairForm").html(h).dialog("open");
			$("#tDialogRepairForm").find("textarea").parent("li").css("height", "auto")
		})
	};
	a.savecode = function() {
		$("#save").trigger("click")
	};
	a.categorychange = function(d, e, g) {
		var f = require("scripts/tAjax"),
			h = $("#" + d).val();
		f.ajaxJsonT("gcc.php", {
			url: h
		}, function(i) {
			if (i.ret[0].indexOf("SUCCESS") >= 0) {
				var j = i.data.cats;
				c.tempCatPost = j;
				$.ajax({
					url: "shopfl3.php",
					type: "POST",
					data: {
						catsPost: j
					},
					success: function(k) {
						$("#" + e).html(k)
					}
				})
			} else {
				c.tMessage("获取店铺分类失败，请更换地址（宝贝详情、店铺首页）重试，如仍然获取失败，请等待20分钟后再次尝试！")
			}
		})
	};
	a.zdycontrol = function(d) {
		if (d != "4") {
			$("#mouseaction").children("div:eq(" + d + ")").trigger("click");
			if (d == "0" || d == "1" || d == "2") {
				c.updateCurType()
			}
		} else {
			if (c.snapSwitch) {
				c.snapSwitch = false;
				$("#tZdyDialogControl").children("div:eq(4)").removeClass("selected")
			} else {
				c.snapSwitch = true;
				$("#tZdyDialogControl").children("div:eq(4)").addClass("selected")
			}
		}
	};
	a.itemtextset = function(h, g, i) {
		var j = $("#i_b" + h + "_set"),
			f = j.html(),
			d, e = $(i.target);
		if (f == "") {
			d = $.extend({}, c.appConfig.jib[1].tOtherSetConfig)
		} else {
			d = JSON.parse(f)
		}
		b.tDialogOther("itemtextset.php", "扩展文字详细设置", d, function(k) {
			var l = $("#oths_tForm").formToObject();
			j.html(JSON.stringify(l));
			e.addClass("itemarrManagerTextSetYes");
			k.dialog("close")
		}, function(k) {
			var l = $("#oths_tForm").formToObject();
			$("textarea[name='itemTextSet[]']").html(JSON.stringify(l));
			$(".itemarrManagerTextSet").addClass("itemarrManagerTextSetYes");
			k.dialog("close")
		})
	};
	a.itempicajaxselect = function(g, d, h, f) {
		var e = require("scripts/tAjax");
		e.ajaxJson("giiforp.php", {
			item: $("#hrefVal").val().split(","),
			random: Math.random() * 10000
		}, function(k) {
			if (k[0] == "yes") {
				for (var l = 1; l < k.length; l++) {
					if (k[l]) {
						if (k[l]["colorImg"] && k[l]["colorImg"] != "") {
							var o = k[l]["colorImg"];
							$("select.j-src-pos:eq(" + (l - 1) * 2 + ")").append('<optgroup label="宝贝多色图片">');
							$("select.j-src-pos:eq(" + ((l - 1) * 2 + 1) + ")").append('<optgroup label="宝贝多色图片">');
							for (var n = 0; n < o.length; n++) {
								$("select.j-src-pos:eq(" + (l - 1) * 2 + ")").append('<option value="' + (parseInt(o[n].valueId, 10) + 1) + '" >' + o[n].name + "</option>");
								$("select.j-src-pos:eq(" + ((l - 1) * 2 + 1) + ")").append('<option value="' + (parseInt(o[n].valueId, 10) + 1) + '" >' + o[n].name + "</option>");
								k[l][o[n].valueId] = o[n].imgUrl
							}
							$("select.j-src-pos:eq(" + (l - 1) * 2 + ")").append("</optgroup>");
							$("select.j-src-pos:eq(" + ((l - 1) * 2 + 1) + ")").append("</optgroup>")
						}
					}
				}
				$("#itemPicTemp1").html(JSON.stringify(k));
				if (!f) {
					a.itempicconfigselect(g, d, h, "pt")
				}
			}
		})
	};
	a.itempicajaxselect_ppt = function(f, d, g) {
		var e = require("scripts/tAjax");
		e.ajaxJson("giiforp_ppt.php", {
			item: $("#hrefVal").val().split(","),
			random: Math.random() * 10000
		}, function(h) {
			if (h[0] == "yes") {
				$("#itemPicTemp1").html(JSON.stringify(h));
				a.itempicconfigselect(f, d, g, "ppt")
			}
		})
	};
	a.itempicconfigselect = function(g, d, h, e) {
		var f = JSON.parse($("#itemPicTemp1").html() || "[]");
		if (f[d + 1] && f[d + 1][c.tParseInt(g) - 1]) {
			$("#" + h).val(f[d + 1][c.tParseInt(g) - 1])
		} else {
			if (e == "pt") {
				a.itempicajaxselect(g, d, h, true)
			}
		}
	};
	a.qsset = function(f) {
		var d, g, e;
		g = $("#" + f);
		e = g.html();
		if (e == "") {
			d = $.extend({}, c.qssetConfig)
		} else {
			d = JSON.parse(e)
		}
		b.tDialogOther("allwzset.php", "文字设置", d, function(h) {
			var i = $("#allwzset_tForm").formToObject();
			g.html(JSON.stringify(i));
			h.dialog("close")
		}, function(h) {
			g.html("");
			h.dialog("close")
		})
	};
	a.click = function(g, i) {
		var d = i.split(";"),
			h, f, e;
		d[0] && (h = d[0]);
		d[1] && (f = d[1]);
		d[2] && (e = d[2]);
		d[3] && (othsAppID = d[3]);
		if (h == "thumbset") {
			a.thumbset(e, f)
		} else {
			if (h == "sharecode") {
				a.sharecode(f, g)
			} else {
				if (h == "downloadcode") {
					a.downloadcode(f, g)
				} else {
					if (h == "savecode") {
						a.savecode(f)
					} else {
						if (h == "categorychange") {
							a.categorychange(f, e, othsAppID)
						} else {
							if (h == "zdycontrol") {
								a.zdycontrol(f)
							} else {
								if (h == "itemtextset") {
									a.itemtextset(e, f, g)
								} else {
									if (h == "thumbcircleset") {
										a.thumbcircleset(e, f)
									} else {
										if (h == "qsset") {
											a.qsset(f)
										} else {
											if (h == "uploadpic") {
												a.uploadpic(f, e)
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	return a
});
define("scripts/inputFilter.js", function(a) {
	var b = require("scripts/D");
	a.filterTextarea = function(e) {
		var c = e.find("textarea");
		if (c.length > 0) {
			var d;
			c.each(function() {
				var h = $(this),
					k = h.val(),
					g = false,
					f, j = [],
					i = [];
				k = k.replace(/<\s*?input([^>]*?)type\s*?\=\s*?\"(\s*?)file(\s*?)\"[^>]*?>/gi, "");
				if (k != "") {
					k = k.replace(/(\<div\s*class\=\"rel\"\s*data-title\=\"([^\"]*)\"\s*style\=\"([^\"]*)\"(\s*data-rn\=\"([^\"]*)\")?)/g, function(l, r, p, o, n, m) {
						var q = l;
						q = q.replace(/margin([^\;]*)\;/g, "");
						q = q.replace(/left([^\;]*)\;/g, "");
						q = q.replace(/margin([^\;]*)\"/g, '"');
						q = q.replace(/left([^\;]*)\"/g, '"');
						if (m) {
							if (!d) {
								d = m
							}
							g = true;
							if (d && g) {
								f = "a" + b.getRandom();
								q = q.replace(new RegExp(d, "g"), f)
							}
						}
						return q
					});
					if (d && g) {
						k = k.replace(/a[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}/g, function(l) {
							var n = l,
								m = $.inArray(n, j);
							if (m < 0) {
								j.push(n);
								n = "a" + b.getRandom() + "-" + b.getRandom();
								i.push(n)
							} else {
								n = i[m]
							}
							return n
						})
					}
					h.val(k)
				}
			})
		}
	};
	a.filterImportCode = function(c) {
		var f = [],
			e = [];
		c = c.replace(/a[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}(?=(\"|\s|\'))/g, function(h) {
			var j = h,
				i = $.inArray(j, f);
			if (i < 0) {
				f.push(j);
				j = "a" + b.getRandom() + "-" + b.getRandom();
				e.push(j)
			} else {
				j = e[i]
			}
			return j
		});
		var g = [],
			d = [];
		c = c.replace(/app[0-9]{8}-[0-9]{4}(?=(\"|\s|\'))/g, function(h) {
			var j = h,
				i = $.inArray(j, g);
			if (i < 0) {
				g.push(j);
				j = "a" + b.getRandom() + "-" + b.getRandom();
				d.push(j)
			} else {
				j = d[i]
			}
			return j
		});
		a.filterHeightCode(c);
		return c
	};
	a.filterHeightCode = function(d) {
		var c = 0;
		b.june.children().each(function() {
			var f = $(this),
				e = b.tParseInt(f.css("top")) + f.height();
			if (e > c) {
				c = e
			}
		});
		b.addImportHeight = c
	};
	return a
});
define("scripts/checkHash.js", function(a) {
	var b = require("scripts/D");
	a.start = function() {
		var d = window.location.hash.replace("#", ""),
			c;
		if (d != "") {
			if (d.substr(0, 1) == "i") {
				d = d.substr(2);
				c = "genList"
			} else {
				d = d.substr(2);
				c = "saveList"
			}
			d != "" && $.ajax({
				url: "useCode.php",
				type: "POST",
				data: {
					type: c,
					ID: d
				},
				dataType: "json",
				success: function(f) {
					if (f.length > 0) {
						if (c == "saveList") {
							var e = require("scripts/moduleManage");
							e.showSave(f[0]);
							b.snapSwitch = false
						} else {
							var g = require("scripts/code");
							g.codeImportDialogCode(f[0]);
							b.snapSwitch = false
						}
					}
				}
			})
		}
		b.actionList.slimScroll({
			height: ($(window).height() - 250) / 2 - 40 + "px",
			color: "#333"
		})
	};
	return a
});
define("scripts/reckonAlign.js", function(a) {
	var b = require("scripts/D");
	a.get = function(c, d, f, g) {
		!$.isNumeric(d) && (d = 0);
		var e = b.tParseInt(d) / 2;
		if (c == "yes") {
			if (f > g) {
				return "left"
			} else {
				return "right"
			}
		} else {
			if (f < e) {
				return "left"
			} else {
				return "right"
			}
		}
	};
	return a
});
define("scripts/layouttest.js", function(a) {
	a.get = function(b) {
		var d = require("scripts/code");
		d.codeImportDialogCode(b);
		return d
	};
	return a
});
define("scripts/appManage1.js", function(b) {
	var c = require("scripts/D"),
		a = require("scripts/appManage");
	b.showIcon = function(e, h, g) {
		var i, f = $(e.target),
			k = f.offset(),
			d = k.top,
			j = k.left,
			m = $(c.appCls + "[appID='" + h + "']"),
			l = m.children(c.appChildCls + "[attachID='" + g + "']");
		if ($("#showIcon").length == 0) {
			i = $('<div id="showIcon" class="showIcon"></div>').appendTo(c.b).dialog({
				autoOpen: false,
				resizable: false,
				width: 660,
				height: 500,
				title: "选择箭头预设样式",
				buttons: {
					"关闭": function(n) {
						$(this).dialog("close");
						$(".ui-tooltip").hide()
					}
				}
			});
			$.ajax({
				url: "geticon.php",
				type: "POST",
				dataType: "html",
				success: function(n) {
					i.html(n).on("click", "div.is-box", function(o) {
						var w = $(this),
							v = i.data("_thisApp"),
							s = v.attr("data-dblType"),
							q, u = w.children(".is-arrow:eq(0)").children("img").attr("src"),
							t = w.children(".is-arrow:eq(1)").children("img").attr("src"),
							r = w.children(".is-arrow:eq(2)").children("img").attr("src"),
							p = w.children(".is-arrow:eq(3)").children("img").attr("src");
						if (v.length > 0) {
							q = JSON.parse(v.attr("data-config"));
							q.childConfig && (q.childConfig[0].autoSize = "yes", q.childConfig[0].oSrc = u);
							q.childConfig && (q.childConfig[0].autoSize1 = "yes", q.childConfig[0].tSrc = t);
							q.childConfig && (q.childConfig[0].autoSize = "yes", q.childConfig[0].oSrcHover = r);
							q.childConfig && (q.childConfig[0].autoSize1 = "yes", q.childConfig[0].tSrcHover = p);
							c.appConfig[s][1].tSubmit(q, v)
						}
					})
				}
			})
		} else {
			i = $("#showIcon")
		}
		if (l.length > 0) {
			i.dialog("option", "position", {
				my: "left top",
				at: "left bottom",
				of: f
			}).data("_thisApp", m).dialog("open")
		} else {
			i.dialog("close")
		}
	};
	b.showIcon1 = function(e, i, g) {
		var j, f = $(e.target),
			l = f.offset(),
			d = l.top,
			k = l.left,
			n = $(c.appCls + "[appID='" + i + "']"),
			h = n.attr("data-dblType"),
			m = n.children(c.appChildCls + "[attachID='" + g + "']");
		if ($("#showIcon1").length == 0) {
			j = $('<div id="showIcon1" class="showIcon"></div>').appendTo(c.b).dialog({
				autoOpen: false,
				resizable: false,
				width: 660,
				height: 500,
				title: "选择缩略图预设样式",
				buttons: {
					"关闭": function(o) {
						$(this).dialog("close");
						$(".ui-tooltip").hide()
					}
				}
			});
			$.ajax({
				url: "geticon1.php",
				type: "POST",
				dataType: "html",
				success: function(o) {
					j.html(o).on("click", "div.is-box1", function(p) {
						var A = $(this),
							y = j.data("_thisApp"),
							s = y.attr("data-dblType"),
							r, w = A.children(".is-small"),
							q = w.attr("data-w"),
							B = w.attr("data-h");
						if (y.length > 0) {
							if (q != "auto") {
								var u = w.children("img:eq(1)").attr("data-img"),
									t = w.children("img:eq(0)").attr("data-img"),
									D = u.split(","),
									C = t.split(",");
								r = JSON.parse(y.attr("data-config"));
								r.sWidth = q;
								r.sHeight = B;
								r.defaultSmallImg = u;
								r.defaultSmallHover = t;
								if (s == "jfsb" || s == "jwfb") {
									for (var x = 0; x < r.thumbSet.length; x++) {
										var z;
										if (r.thumbSet[x] != "") {
											z = JSON.parse(r.thumbSet[x]);
											z.characterBgSrc = D[x] || D[0];
											z.characterBgSrcHover = C[x] || C[0]
										}
										if (z) {
											r.thumbSet[x] = JSON.stringify(z)
										}
									}
									for (var v = 0; v < r.contentType.length; v++) {
										r.smallCircleMode[v] = "no";
										r.smallImgSrc[v] = D[v] || D[0];
										r.smallImgSrcT[v] = D[v] || D[0];
										r.smallHoverSrc[v] = C[v] || C[0];
										r.smallHoverSrcT[v] = C[v] || C[0]
									}
								} else {
									if (s == "jqtb") {
										for (var v = 0; v < r.nestConfig.length; v++) {
											r.smallCircleMode[v] = "no";
											r.smallImgSrc[v] = D[v] || D[0];
											r.smallHoverSrc[v] = C[v] || C[0]
										}
									}
								}
							} else {
								r = JSON.parse(y.attr("data-config"));
								r.sWidth = 120;
								r.sHeight = 120;
								r.defaultSmallImg = "";
								r.defaultSmallHover = "";
								for (var x = 0; x < r.thumbSet.length; x++) {
									var z;
									if (r.thumbSet[x] != "") {
										z = JSON.parse(r.thumbSet[x]);
										z.characterBgSrc = r.sliderSrc[x] || r.sliderSrc[0];
										z.characterBgSrcHover = r.sliderSrc[x] || r.sliderSrc[0]
									}
									if (z) {
										r.thumbSet[x] = JSON.stringify(z)
									}
								}
								for (var v = 0; v < r.contentType.length; v++) {
									r.smallCircleMode[v] = "no";
									r.smallImgSrc[v] = r.sliderSrc[v] || r.sliderSrc[0];
									r.smallImgSrcT[v] = r.sliderSrc[v] || r.sliderSrc[0];
									r.smallHoverSrc[v] = r.sliderSrc[v] || r.sliderSrc[0];
									r.smallHoverSrcT[v] = r.sliderSrc[v] || r.sliderSrc[0]
								}
							}
							c.appConfig[s][1].tSubmit(r, y)
						}
					});
					if (h != "jfsb") {
						j.children(":eq(0)").hide()
					} else {
						j.children(":eq(0)").show()
					}
				}
			})
		} else {
			j = $("#showIcon1")
		}
		if (m.length > 0) {
			j.dialog("option", "position", {
				my: "left top",
				at: "left bottom",
				of: f
			}).data("_thisApp", n).dialog("open");
			if (h != "jfsb") {
				j.children(":eq(0)").hide()
			} else {
				j.children(":eq(0)").show()
			}
		} else {
			j.dialog("close")
		}
	};
	b.setItemStyle = function(d, e) {
		a.setStyle(e, "jib", "junezxUser")
	};
	return b
});
define("scripts/appLoginCheck.js", function(a) {
	var b = require("scripts/D");
	a.click = function(c) {
		if (b.actType == "jfyb") {
			if (b.tUserLogin && b.tUserName != "") {
				c()
			} else {
				b.tMessage("请先登录后再使用此功能！")
			}
		} else {
			c()
		}
	};
	return a
});
define("scripts/tDateDay.js", function(a) {
	var b = require("scripts/D");
	a.click = function(e) {
		var d = new Date().Format("MM-dd", 0);
		if (d == "13-0123") {
			tDateDay0401 = $.cookie("tDateDay0401");
			if (!tDateDay0401 || tDateDay0401 != "true") {
				var c;
				$.cookie("tDateDay0401", "true");
				b.tMessage("哎呀，白做了！特效做的辣么强大，系统崩溃了好么! o(>﹏<)o ", "callback", function() {
					e();
					$("#june").show();
					setTimeout(function() {
						b.tMessage("嘎嘎，吓你的！ 愚悦地继续使用吧，骚年 O(∩_∩)O。<br /><br /><br />亲，愚人节快乐！ ")
					}, 1000);
					clearTimeout(c)
				});
				$("#june").hide();
				c = setTimeout(function() {
					e();
					$("#june").show();
					setTimeout(function() {
						b.tMessage("嘎嘎，吓你的！ 愚悦地继续使用吧，骚年 O(∩_∩)O。<br /><br /><br />亲，愚人节快乐！ ")
					}, 1000)
				}, 10000)
			} else {
				e()
			}
		} else {
			$.removeCookie("tDateDay0401");
			e()
		}
	};
	return a
});
define("scripts/saveChoose.js", function(a) {
	a.click = function(e, f) {
		var d = require("scripts/D"),
			b = require("scripts/moduleManage"),
			c = require("scripts/tAjax");
		if (d.openSaveDocName != null) {
			d.tConfirm("您在" + d.openSaveDocTime + "已经保存了一份名为 <strong>" + d.openSaveDocName + "</strong> 的存档，您可以选择以下操作：", function() {
				d.tLoading(true);
				b.snapSave(function(h) {
					var g = {};
					g.actionCollection = d.juneSnapArray1;
					g.actionConfig = h;
					d.tLoading(true);
					c.ajaxJsonS("save.php", {
						saveName: d.openSaveDocName,
						sasID: d.openSaveDocID,
						userName: e[1],
						type: "cover",
						saveObj: g
					}, function(i) {
						d.tLoading(true);
						d.tLoading(false);
						d.tMessage(i[1]);
						if (i[3]) {
							d.openSaveDocTime = i[3]
						}
						b.getSave([d.tUserLogin, d.tUserName])
					})
				})
			}, function() {
				f(e)
			}, ["覆盖保存", "另存为"])
		} else {
			f(e)
		}
	};
	return a
});
define("scripts/pencil.js", function(b) {
	var f = require("scripts/D"),
		e = require("scripts/action"),
		d = require("scripts/layer"),
		a = f.appConfig;
	f.pencilLine = null;
	f.pencilStartTime = null;
	f.pencilThick = 1;
	$('<div id="pencilDefaultSet" style="z-index: 8002;"><div class="pencil-head"></div><div class="pencil-title">铅笔工具设置面板</div><div class="pencil-cipanel"><span class="component"><i>X:</i><input type="text" value="0" class="except-keyboard" id="pencilCom1" /></span><span class="component"><i>Y:</i><input type="text" value="0" class="except-keyboard" id="pencilCom2" /></span><span class="component"><i>长:</i><input type="text" value="0" class="except-keyboard" id="pencilCom3" /></span></div><ul><li><label class="pencil-label-1 pencil-radio-1 selected" for="pencilStyle0" title="实线"></label><input class="pencil-radio" type="radio" name="pencilStyle" id="pencilStyle0" checked="checked" value="solid"><label class="pencil-label-1 pencil-radio-2" for="pencilStyle1" title="虚线"></label><input class="pencil-radio" type="radio" name="pencilStyle" id="pencilStyle1" value="dashed"><label class="pencil-label-1 pencil-radio-3" for="pencilStyle2" title="点状线"></label><input class="pencil-radio" type="radio" name="pencilStyle" id="pencilStyle2" value="dotted"></li><li><label class="pencil-label-2" for="pencilDegree">粗　细：</label><input class="pencil-input-1 ui-buttonset" type="text" name="pencilDegree" id="pencilDegree" value="1"><span style="position:absolute;left:90px;color:#acacac;">px</span><label class="pencil-label-2" for="pencilColor_choose">颜　色：</label><input class="pencil-input-2 pencilsetcolor tColorPicker ui-buttonset" type="text" id="pencilColor_choose" value="#ff0044" style="color:#ff0044;background-color:#ff0044;"><input class="pencil-hidden ui-buttonset" type="hidden" name="pencilColor" id="pencilColor" value="#ff0044"></li><li><label class="pencil-label-2" for="pencilOpacity">透明度：</label><input class="pencil-input-1 ui-buttonset" type="text" name="pencilOpacity" id="pencilOpacity" value="100"><span style="position:absolute;left:90px;color:#acacac;">%</span><label class="pencil-label-2" for="pencilOpacity" style="display:none;">层级：</label><select class="pencil-select" id="pencilLevel" name="pencilLevel" style="display:none;width:70px;"><option value="1000" selected="selected">应用上方</option><option value="200">应用下方</option></select></li></ul><div class="pencil-btn-5">删　除</div><div class="pencil-btn-1">确　认</div><div class="pencil-btn-2">取　消</div><div class="pencil-btn-3">确　认</div><div class="pencil-btn-4">取　消</div></div>').appendTo(f.b).hide().tooltip({
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
	}).on("mousedown.dragEvent-1", ".pencil-title", function(g) {
		b.baseDrag.call(this, g)
	});
	var c = $("#pencilDefaultSet");
	c.on("click", ".pencil-btn-1", function() {
		c.hide()
	});
	c.on("click", ".pencil-btn-2", function() {
		$("#mouseaction").children(":eq(0)").trigger("click");
		c.hide()
	});
	c.on("click", ".pencil-btn-3", function() {
		if (f.pencilLine && f.pencilLine.length > 0) {
			var i = f.tParseInt($("#pencilDegree").val()),
				h = $("#pencilColor").val(),
				m = $("#pencilOpacity").val(),
				n = $("#pencilLevel").val(),
				k = c.find("input[name='pencilStyle']:checked").val();
			if (i < 1) {
				i = 1
			}
			f.pencilLine.css({
				borderWidth: i,
				borderColor: RGBToHex(h, "#ff0044"),
				opacity: m / 100,
				zIndex: n,
				borderStyle: k
			}).attr("data-pts", i + ";" + RGBToHex(h, "#ff0044") + ";" + m + ";" + k + ";" + n);
			var l = f.tParseInt($("#pencilCom1").val()),
				j = f.tParseInt($("#pencilCom2").val()),
				g = f.tParseInt($("#pencilCom3").val());
			f.pencilLine.css({
				left: l,
				top: j
			});
			f.pencilLine.children(".pencilLength").children(".nline").html(g);
			if (f.pencilLine.attr("data-d") == "ns") {
				f.pencilLine.height(g).css({
					borderTop: "none",
					borderBottom: "none",
					borderRight: "none"
				});
				f.pencilLine.children(".pencilLength").height(g)
			} else {
				f.pencilLine.width(g).css({
					borderLeft: "none",
					borderBottom: "none",
					borderRight: "none"
				});
				f.pencilLine.children(".pencilLength").width(g)
			}
			c.hide()
		}
	});
	c.on("click", ".pencil-btn-4", function() {
		c.hide()
	});
	c.on("click", ".pencil-btn-5", function() {
		f.pencilLine.length > 0 && (f.pencilLine.remove());
		c.hide()
	});
	c.on("change", "input[name='pencilStyle']", function() {
		$(this).parent().children("label").removeClass("selected");
		$(this).prev("label").addClass("selected")
	});
	b.baseDrag = function(i) {
		var h = true,
			g = i.pageX,
			l = i.pageY,
			k = f.tParseInt(c.css("left")) - g,
			j = f.tParseInt(c.css("top")) - l;
		f.baseSetDrag = true;
		f.d.on("mousemove.dragEvent", function(o) {
			if (h) {
				var n = o.pageX + k,
					m = o.pageY + j;
				n < 0 && (n = 0);
				m < 0 && (m = 0);
				(n + c.width()) > f.w.width() && (n = f.w.width() - c.width());
				(m + c.height()) > f.w.height() && (m = f.w.height() - c.height());
				c.css({
					left: n,
					top: m
				})
			}
		});
		f.d.on("mouseup.dragEvent", function(m) {
			h = false
		})
	};
	b.Start = function(g) {
		c.hide();
		var k = $(g.target),
			h = null;
		f.pencilDrag = false;
		f.pencilPointerDrag = true;
		if (k.hasClass("t-pencilLine") || k.hasClass("pencilPointer") || k.parent().hasClass("pencilPointer") || k.hasClass("pencilBox") || k.hasClass("pencilLength")) {
			f.jSelectsedDom.removeClass(f.selectedVal);
			f.jSelectsedDom = $();
			if (k.hasClass("pencilPointer") || k.hasClass("pencilBox")) {
				h = k.parent()
			} else {
				h = k.parent().parent()
			}
			if (k.hasClass("t-pencilLine")) {
				h = k
			}
			if (k.hasClass("pencilBox")) {
				f.pencilDrag = true;
				f.pd_x = g.pageX, f.pd_y = g.pageY, f.pd_left = f.tParseInt(h.css("left")) - f.pd_x, f.pd_top = f.tParseInt(h.css("top")) - f.pd_y
			}
			if (f.june.children(".pencilLineCreate").length > 0) {
				f.june.children(".pencilLineCreate").removeClass("pencilLineCreate").addClass("pencilLineEdit");
				f.pencilPointerDrag = false;
				return
			} else {
				f.pencilLine = h;
				if (!f.pencilLine.hasClass("pencilLineEdit")) {
					var o = (f.pencilLine.attr("data-pts") || "1;#ff0044;1;solid;1000").split(";");
					$("#pencilDegree").val(o[0]);
					$("#pencilColor").val(o[1]);
					$("#pencilColor").prev("input").val(o[1]).css({
						color: o[1],
						backgroundColor: o[1]
					});
					$("#pencilOpacity").val(o[2]);
					$("#pencilLevel").val(o[4]);
					c.find("label").removeClass("selected");
					c.find("input[name='pencilStyle']").prop("checked", false);
					c.find("input[name='pencilStyle'][value='" + o[3] + "']").prop("checked", true);
					c.find("input[name='pencilStyle'][value='" + o[3] + "']").prev("label").addClass("selected")
				}
				f.june.children(".pencilLineEdit").removeClass("pencilLineEdit");
				f.june.children(".pencilLineCreate").removeClass("pencilLineCreate");
				f.pencilLine.addClass("pencilLineEdit");
				f.pencilLine.attr("data-edit", "a0")
			}
			if (f.pencilLine.attr("data-d") == "ns") {
				if (k.hasClass("pencilPointer1") || k.parent().hasClass("pencilPointer1")) {
					f.pencilLine.attr("data-edit", "a3")
				}
				if (k.hasClass("pencilPointer2") || k.parent().hasClass("pencilPointer2")) {
					f.pencilLine.attr("data-edit", "a4")
				}
			} else {
				if (k.hasClass("pencilPointer1") || k.parent().hasClass("pencilPointer1")) {
					f.pencilLine.attr("data-edit", "a1")
				}
				if (k.hasClass("pencilPointer2") || k.parent().hasClass("pencilPointer2")) {
					f.pencilLine.attr("data-edit", "a2")
				}
			}
			if (!k.hasClass("pencilPointer") && !k.parent().hasClass("pencilPointer")) {
				f.pencilLine.attr("data-edit", "a0")
			}
		} else {
			if (f.june.children(".pencilLineCreate").length == 0 && f.june.children(".pencilLineEdit").length == 0) {
				if (k.attr("id") == "junebox" || k.attr("id") == "tZdyDialog") {
					return
				}
				f.pencilTime = 0;
				f.jSelectsedDom.removeClass(f.selectedVal);
				f.jSelectsedDom = $();
				f.pencilStartX = g.pageX + f.junebox.scrollLeft();
				f.pencilStartY = g.pageY + f.junebox.scrollTop();
				var l = f.tParseInt($("#pencilDegree").val()),
					j = $("#pencilColor").val(),
					i = $("#pencilOpacity").val(),
					n = $("#pencilLevel").val(),
					m = c.find("input[name='pencilStyle']:checked").val();
				if (l < 1) {
					l = 1
				}
				f.pencilLine = $('<div class="t-pencilLine pencilLineCreate"><div class="pencilLength"><span class="lline"></span><span class="nline">0</span><span class="rline"></span></div><div class="pencilBox"></div><span class="pencilCoordinatesStart">0</span><span class="pencilCoordinatesEnd">0</span><span class="pencilAssist" style="position:absolute;"></span><span class="pencilPointer pencilPointer1"><img height="15" src="images/pencilPointer1.gif"/></span><span class="pencilPointer pencilPointer2"><img height="15" src="images/pencilPointer1.gif"/></span><span class="pencilCloseBtn"></span></div>').css({
					borderWidth: l,
					borderColor: RGBToHex(j, "#ff0044"),
					opacity: i / 100,
					zIndex: n,
					borderStyle: m
				}).attr("data-pts", l + ";" + RGBToHex(j, "#ff0044") + ";" + i + ";" + m + ";" + n).appendTo(f.june).offset({
					left: f.pencilStartX - f.junebox.scrollLeft(),
					top: f.pencilStartY - f.junebox.scrollTop()
				});
				if (k.hasClass("t-app")) {
					f.pencilLine.hide();
					clearTimeout(f.pencilStartTime);
					f.pencilStartTime = setTimeout(function() {
						if (f.pencilLine.length > 0) {
							f.pencilLine.show().offset({
								left: f.pencilStartX - f.junebox.scrollLeft(),
								top: f.pencilStartY - f.junebox.scrollTop()
							})
						}
					}, 300)
				}
			} else {
				f.pencilPointerDrag = false;
				if (f.june.children(".pencilLineCreate").length == 0) {
					f.june.children(".pencilLineEdit").removeClass("pencilLineEdit")
				} else {
					f.pencilLine.removeClass("pencilLineCreate").addClass("pencilLineEdit")
				}
				f.pencilStartX = null;
				f.pencilStartY = null
			}
		}
	};
	b.Ing = function(v) {
		if (!f.pencilPointerDrag) {
			return
		}
		if ( !! f.pencilLine) {
			if ( !! f.pencilDrag) {
				var t = v.pageX + f.pd_left,
					n = v.pageY + f.pd_top,
					u = f.pencilLine.width(),
					r = f.pencilLine.height();
				t < 0 && (t = 0);
				n < 0 && (n = 0);
				(t + f.pencilLine.width()) > f.june.width() && (t = f.june.width() - f.pencilLine.width());
				(n + f.pencilLine.height()) > f.june.height() && (n = f.june.height() - f.pencilLine.height());
				f.pencilLine.css({
					left: t,
					top: n
				});
				if (f.pencilLine.attr("data-d") == "we") {
					f.pencilLine.children(".pencilAssist").offset({
						top: f.june.offset().top
					})
				} else {
					f.pencilLine.children(".pencilAssist").offset({
						left: f.june.offset().left
					})
				}
				return
			}
			if ( !! f.pencilLine.hasClass("pencilLineEdit")) {
				var E = f.pencilLine.attr("data-edit") || "a0";
				if (E == "a0") {
					return
				}
				if (E == "a1") {
					f.pencilStartX = f.pencilLine.offset().left + f.junebox.scrollLeft() + f.pencilLine.width();
					f.pencilStartY = f.pencilLine.offset().top + f.junebox.scrollTop()
				} else {
					if (E == "a2") {
						f.pencilStartX = f.pencilLine.offset().left + f.junebox.scrollLeft();
						f.pencilStartY = f.pencilLine.offset().top + f.junebox.scrollTop()
					} else {
						if (E == "a3") {
							f.pencilStartX = f.pencilLine.offset().left + f.junebox.scrollLeft();
							f.pencilStartY = f.pencilLine.offset().top + f.junebox.scrollTop() + f.pencilLine.height()
						} else {
							if (E == "a4") {
								f.pencilStartX = f.pencilLine.offset().left + f.junebox.scrollLeft();
								f.pencilStartY = f.pencilLine.offset().top + f.junebox.scrollTop()
							}
						}
					}
				}
				var A = f.tParseInt($("#pencilDegree").val()),
					h = $("#pencilColor").val(),
					p = $("#pencilOpacity").val(),
					m = $("#pencilLevel").val(),
					j = c.find("input[name='pencilStyle']:checked").val();
				f.pencilLine.attr("data-pts", A + ";" + RGBToHex(h, "#ff0044") + ";" + p + ";" + j + ";" + m);
				if (f.pencilLine.hasClass("pencilLineEdit")) {}
				f.pencilLine.removeClass("pencilLineEdit").addClass("pencilLineCreate");
				f.pencilTime = 1
			}
			if ( !! f.pencilLine.hasClass("pencilLineCreate")) {
				var y = f.pencilStartX,
					k = f.pencilStartY,
					x = v.pageX + f.junebox.scrollLeft(),
					i = v.pageY + f.junebox.scrollTop(),
					B = f.june.width() + f.offsleft,
					z = f.june.height() + f.offstop,
					g = f.junebox.offset().left + f.junebox.width(),
					o = f.junebox.offset().top + f.junebox.height(),
					F = (f.pencilLine.attr("data-pts") || "1;#ff0044;1;solid;1000").split(";"),
					w = f.june.offset(),
					s, q, C, D = false,
					l = false;
				if (Math.abs(y - x) > 5 || Math.abs(k - i) > 5) {
					clearTimeout(f.pencilStartTime);
					f.pencilLine.show()
				}
				F[0] == "" && (F[0] = 0);
				if (y > x) {
					C = x;
					x = y;
					y = C;
					D = true
				}
				if (k > i) {
					C = i;
					i = k;
					k = C;
					l = true
				}
				y < f.offsleft && (y = f.offsleft);
				k < f.offstop && (k = f.offstop);
				x > B && (x = B);
				i > z && (i = z);
				s = Math.abs(x - y);
				q = Math.abs(i - k);
				if (v.pageX > (g - 15) && v.pageX < g) {
					f.junebox.scrollLeft(f.junebox.scrollLeft() + 30)
				}
				if (v.pageX < (f.junebox.offset().left + 15) && v.pageX > f.junebox.offset().left) {
					f.junebox.scrollLeft(f.junebox.scrollLeft() - 30)
				}
				if (v.pageY > (o - 15) && v.pageY < o) {
					f.junebox.scrollTop(f.junebox.scrollTop() + 30)
				}
				if (v.pageY < (f.junebox.offset().top + 15) && v.pageY > f.junebox.offset().top) {
					f.junebox.scrollTop(f.junebox.scrollTop() - 30)
				}
				if (q > s) {
					f.pencilLine.children(".pencilAssist").width(f.june.width()).height(1).offset({
						left: w.left
					});
					f.pencilLine.offset({
						left: f.pencilStartX - f.junebox.scrollLeft(),
						top: k - f.junebox.scrollTop()
					}).height(q).width(1).css({
						border: "none",
						borderLeft: F[0] + "px " + F[3] + " " + F[1]
					});
					if (!l) {
						f.pencilLine.children(".pencilAssist").css({
							top: "auto",
							bottom: "0",
							borderTop: "none",
							borderBottom: "1px dashed #60c9da"
						})
					} else {
						f.pencilLine.children(".pencilAssist").css({
							top: "0",
							bottom: "auto",
							borderTop: "1px dashed #60c9da",
							borderBottom: "none"
						})
					}
					f.pencilLine.children(".pencilLength").addClass("pl2").removeClass("pl1").height(q).width(24).css("line-height", q + "px");
					f.pencilLine.children(".pencilLength").children(".nline").html(q);
					f.pencilLine.children(".pencilLength").children(".lline").height((f.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? f.pencilLine.children(".pencilLength").height() / 2 - 12 : 0));
					f.pencilLine.children(".pencilLength").children(".rline").height((f.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? f.pencilLine.children(".pencilLength").height() / 2 - 12 : 0));
					f.pencilLine.children(".pencilCoordinatesStart").html("(" + (f.pencilStartX - f.offsleft) + "," + (k - f.offstop) + ")");
					f.pencilLine.children(".pencilCoordinatesEnd").html("(" + (f.pencilStartX - f.offsleft) + "," + (k + q - f.offstop) + ")");
					f.pencilLine.children(".pencilPointer1").css({
						top: -12,
						left: "auto",
						right: "auto",
						bottom: "auto"
					});
					f.pencilLine.children(".pencilPointer2").css({
						top: "auto",
						left: "auto",
						right: "auto",
						bottom: -2
					});
					f.pencilLine.attr("data-d", "ns").addClass("pl-ns").removeClass("pl-we");
					f.pencilLine.children(".pencilPointer").children("img").attr("src", "images/pencilPointer2.gif").attr("height", "25").css("cursor", "ns-resize")
				} else {
					f.pencilLine.children(".pencilAssist").width(1).height(f.june.height()).offset({
						top: w.top
					});
					f.pencilLine.offset({
						left: y - f.junebox.scrollLeft(),
						top: f.pencilStartY - f.junebox.scrollTop()
					}).width(s).height(1).css({
						border: "none",
						borderTop: F[0] + "px " + F[3] + " " + F[1]
					});
					if (!D) {
						f.pencilLine.children(".pencilAssist").css({
							left: "auto",
							right: "0",
							borderLeft: "none",

							borderRight: "1px dashed #60c9da"
						})
					} else {
						f.pencilLine.children(".pencilAssist").css({
							left: "0",
							right: "auto",
							borderLeft: "1px dashed #60c9da",
							borderRight: "none"
						})
					}
					f.pencilLine.children(".pencilLength").addClass("pl1").removeClass("pl2").width(s).height(24).css("line-height", "24px");
					f.pencilLine.children(".pencilLength").children(".nline").html(s);
					f.pencilLine.children(".pencilLength").children(".lline").height(24);
					f.pencilLine.children(".pencilLength").children(".rline").height(24);
					f.pencilLine.children(".pencilCoordinatesStart").html("(" + (y - f.offsleft) + "," + (f.pencilStartY - f.offstop) + ")");
					f.pencilLine.children(".pencilCoordinatesEnd").html("(" + (y + s - f.offsleft) + "," + (f.pencilStartY - f.offstop) + ")");
					f.pencilLine.children(".pencilPointer1").css({
						top: "auto",
						left: -12,
						right: "auto",
						bottom: "auto"
					});
					f.pencilLine.children(".pencilPointer2").css({
						top: "auto",
						left: "auto",
						right: -2,
						bottom: "auto"
					});
					f.pencilLine.attr("data-d", "we").removeClass("pl-ns").addClass("pl-we");
					f.pencilLine.children(".pencilPointer").children("img").attr("src", "images/pencilPointer1.gif").attr("height", "15").css("cursor", "ew-resize")
				}
			}
		}
	};
	b.End = function(k) {
		if (f.june.children(".pencilLineCreate").length == 0 && f.june.children(".pencilLineEdit").length == 0) {
			f.pencilLine = null;
			if (c.children("pencil-btn-1").is(":hidden")) {
				c.hide()
			}
		}
		if ( !! f.pencilLine) {
			if (f.pencilTime > 0) {
				f.pencilPointerDrag = false;
				f.pencilLine.removeClass("pencilLineCreate").addClass("pencilLineEdit");
				f.pencilStartX = null;
				f.pencilStartY = null;
				if (f.pencilLine && !f.baseSetDrag) {
					var n = f.pencilLine.offset().top,
						m = f.pencilLine.offset().left,
						j = f.pencilLine.width(),
						h = f.pencilLine.height(),
						g, l, i = j;
					if (f.pencilLine.attr("data-d") == "we") {
						l = m + (j / 2) - 120;
						g = n + 40
					} else {
						g = n + (h / 2) - 102, l = m + 40;
						i = h
					}
					if ( !! c.is(":hidden")) {
						$("#pencilCom1").val(f.tParseInt(f.pencilLine.css("left")));
						$("#pencilCom2").val(f.tParseInt(f.pencilLine.css("top")));
						$("#pencilCom3").val(i)
					}
					if ((g + 205) > (f.junebox.offset().top + f.junebox.height())) {
						g = f.pencilLine.offset().top - 205 - 10
					}
					if ((l + 240) > (f.junebox.offset().left + f.junebox.width())) {
						l = f.pencilLine.offset().left - 240 - 10
					}
					c.css({
						top: g,
						left: l
					}).show();
					c.children(".pencil-btn-1").hide();
					c.children(".pencil-btn-2").hide();
					c.children(".pencil-btn-3").show();
					c.children(".pencil-btn-4").show();
					c.children(".pencil-btn-5").show()
				} else {
					if (f.pencilLine && f.baseSetDrag) {
						c.show()
					}
				}
			} else {
				if ( !! f.pencilLine.hasClass("pencilLineCreate")) {
					f.pencilTime++
				}
			}
		}
		f.baseSetDrag = false;
		f.pencilDrag = false;
		f.pd_x = null;
		f.pd_y = null;
		f.pd_left = null;
		f.pd_top = null
	};
	b._import = function(l) {
		var r = l.attr("data-pts") || "",
			k = [];
		var k = r.split(";"),
			n = k[0],
			i = RGBToHex(k[1]),
			h = k[2] || "100",
			p = k[4] || "1000",
			q = k[3] || "solid",
			m = f.tParseInt(l.css("top")),
			j = f.tParseInt(l.css("left")),
			g = l.width(),
			o = l.height();
		f.pencilLine = $('<div class="t-pencilLine pencilLineCreate"><div class="pencilLength"><span class="lline"></span><span class="nline">0</span><span class="rline"></span></div><div class="pencilBox"></div><span class="pencilCoordinatesStart">0</span><span class="pencilCoordinatesEnd">0</span><span class="pencilAssist" style="position:absolute;"></span><span class="pencilPointer pencilPointer1"><img height="15" src="images/pencilPointer1.gif"/></span><span class="pencilPointer pencilPointer2"><img height="15" src="images/pencilPointer1.gif"/></span><span class="pencilCloseBtn"></span></div>').css({
			borderWidth: n,
			borderColor: RGBToHex(i, "#ff0044"),
			opacity: h / 100,
			zIndex: p,
			borderStyle: q,
			top: l.css("top"),
			left: l.css("left"),
			width: l.css("width"),
			height: l.css("height")
		}).attr("data-pts", n + ";" + RGBToHex(i, "#ff0044") + ";" + h + ";" + q + ";" + p).attr("data-d", (l.attr("data-d") || "we")).appendTo(f.june);
		if (f.pencilLine.attr("data-d") == "we") {
			f.pencilLine.css({
				border: "none",
				borderTop: n + "px " + q + " " + RGBToHex(i, "#ff0044")
			});
			f.pencilLine.children(".pencilAssist").offset({
				top: f.june.offset().top
			}).width(1).height(f.june.height());
			f.pencilLine.children(".pencilCoordinatesStart").html("(" + j + "," + m + ")");
			f.pencilLine.children(".pencilCoordinatesEnd").html("(" + (j + g) + "," + m + ")");
			f.pencilLine.children(".pencilAssist").css({
				left: "auto",
				right: "0",
				borderLeft: "none",
				borderRight: "1px dashed #60c9da"
			});
			f.pencilLine.children(".pencilLength").addClass("pl1").removeClass("pl2").width(g).height(24).css("line-height", "24px");
			f.pencilLine.children(".pencilLength").children(".nline").html(g);
			f.pencilLine.children(".pencilLength").children(".lline").height(24);
			f.pencilLine.children(".pencilLength").children(".rline").height(24);
			f.pencilLine.children(".pencilPointer1").css({
				top: "auto",
				left: -12,
				right: "auto",
				bottom: "auto"
			});
			f.pencilLine.children(".pencilPointer2").css({
				top: "auto",
				left: "auto",
				right: 0,
				bottom: "auto"
			});
			f.pencilLine.removeClass("pl-ns").addClass("pl-we");
			f.pencilLine.children(".pencilPointer").children("img").attr("src", "images/pencilPointer1.gif").attr("height", "15").css("cursor", "ew-resize")
		} else {
			f.pencilLine.css({
				border: "none",
				borderLeft: n + "px " + q + " " + RGBToHex(i, "#ff0044")
			});
			f.pencilLine.children(".pencilAssist").offset({
				left: f.june.offset().left
			}).width(f.june.width()).height(1);
			f.pencilLine.children(".pencilCoordinatesStart").html("(" + j + "," + m + ")");
			f.pencilLine.children(".pencilCoordinatesEnd").html("(" + j + "," + (m + o) + ")");
			f.pencilLine.children(".pencilAssist").css({
				top: "auto",
				bottom: "0",
				borderTop: "none",
				borderBottom: "1px dashed #60c9da"
			});
			f.pencilLine.children(".pencilLength").addClass("pl2").removeClass("pl1").height(o).width(24).css("line-height", o + "px");
			f.pencilLine.children(".pencilLength").children(".nline").html(o);
			f.pencilLine.children(".pencilLength").children(".lline").height((f.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? f.pencilLine.children(".pencilLength").height() / 2 - 12 : 0));
			f.pencilLine.children(".pencilLength").children(".rline").height((f.pencilLine.children(".pencilLength").height() / 2 - 12 > 0 ? f.pencilLine.children(".pencilLength").height() / 2 - 12 : 0));
			f.pencilLine.children(".pencilPointer1").css({
				top: -12,
				left: "auto",
				right: "auto",
				bottom: "auto"
			});
			f.pencilLine.children(".pencilPointer2").css({
				top: "auto",
				left: "auto",
				right: "auto",
				bottom: 0
			});
			f.pencilLine.addClass("pl-ns").removeClass("pl-we");
			f.pencilLine.children(".pencilPointer").children("img").attr("src", "images/pencilPointer2.gif").attr("height", "25").css("cursor", "ns-resize")
		}
		f.june.children(".pencilLineEdit").removeClass("pencilLineEdit");
		f.june.children(".pencilLineCreate").removeClass("pencilLineCreate");
		f.june.children(".t-pencilLine").addClass("pencilLinePause");
		f.pencilLine = null;
		f.pencilTime = 1;
		$("#mouseaction").children(":eq(0)").trigger("click")
	};
	return b
});