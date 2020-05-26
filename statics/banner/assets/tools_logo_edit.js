var GLOBAL_decodeURI = decodeURI,
GLOBAL_encodeURI = encodeURI,
GLOBAL_window = window,
GLOBAL_document = document,
$$S_ = "",




$$S_$2f_edit$2f = "/edit/",
$$S_$2flist = "/list",
$$S_$2fmy = "/my",
$$S_$2ftools$2flogo = "/gongju/logo",
$create = "/fontimg/font/create",
$wenziPicLink = "/api/font.php?size=",
$$S_$2ftools$2flogo$2fhead$2f = "/tools/logo/head/",

$yulan_Link = "/gongju/logo/gettest.php?",
$save_Link = "/gongju/logo/save",
$save_LinkAs = "/gongju/logo/saveAs",
$saveAsDemo_Link = "/gongju/logo/saveAsDemo",
$save_LinkDemo = "/gongju/logo/saveDemo",
$upload_Link = "/gongju/logo/upload.php",
$$S_0 = "0",
$$S_1 = "1",
$$S_13 = "13",
$$S_2 = "2",
$$S_3 = "3",
$$S_4 = "4",
$$S_700 = "700",



$$S_auto = "auto",

$$S_body = "body",
$$S_center = "center",
$$S_close = "close",


$$S_file = "file",

$$S_height = "height",



$$S_left = "left",

$$S_logo = "logo",

$$S_none = "none",
$$S_numberbox = "numberbox",
$$S_open = "open",
$$S_px = "px",


$$S_src = "src",
$$S_string = "string",

$$S_top = "top",



$$S_width = "width",
$$S_window = "window",

$$S_$5fae$8f6f$96c5$9ed1 = "\u5fae\u8f6f\u96c5\u9ed1",
$$S_$64cd$4f5c$63d0$793a = "\u64cd\u4f5c\u63d0\u793a";


QM.Logo = {
	init: function() {
		function a(b, a) {
			if ($("#logoTitle").val()) {
				a = a || k;
				var e = c.getJson(),
				d = $("#navbg").css("background-color");
				d && (d = $.Color(d).toHexString(), 0 == d.indexOf("#") && (d = d.substring(1)));
				var g = $("#navHeight").val(),
				e = {
					data: $.toJSON(e),
					id: $("#logoId").val(), 
					title: $("#logoTitle").val(),
					ng: d,
					n: g
				},
				f = $("#tools-logo").mask("Loading...");  
				$.post(ctx + b + "?t=" + +new Date, e, 
				function(b) {
					f.unmask();
					b && (typeof b == $$S_string ? (GLOBAL_window.loginComplete = function() {},
					$('<div id="loginContainer"></div>').appendTo($($$S_body)).html(b)) : b.success && b.data ? typeof a == "function" && a(b.data) : alert(b.msg))  
				})
			} else alert("标题不可为空")   
		}
		var c = this;
		$(GLOBAL_document).click(function(b) { (0 == b.which || 1 == b.which) && c.resetFont();
			0 == $(b.target).parents("#tools-logo").length && 0 == $(b.target).parents(".zx-combox-popup").length && c.unSelectFont()
		}).keyup(function(b) {
			$$S_13 == b.keyCode && c.resetFont()
		});
		$("#font").zx_combox({
			onSelect: function(b) {
				c.setFont(c.getCurrentSelectedFont(), {
					font: b.value
				})
			}
		});
		$("#size").zx_combox({
			onSelect: function(b) {
				c.setFont(c.getCurrentSelectedFont(), {
					size: b.value
				})
			}
		});
		$("#fontBlod").click(function(b) {
			$(this).toggleClass("hover");
			c.toggleFontStyle($$S_1)
		});
		$("#fontItalic").click(function(b) {
			$(this).toggleClass("hover");
			c.toggleFontStyle($$S_2)
		});
		$("#fontUnderline").click(function(b) {
			$(this).toggleClass("hover");
			c.toggleFontStyle($$S_3)
		});
		$("#fontStrikethrough").click(function(b) {
			$(this).toggleClass("hover");
			c.toggleFontStyle($$S_4)
		});
		var e = $("#fontColorPicker").ColorPicker({
			color: "#000000",
			onBeforeShow: function(b) {
				c.resetFont(); (b = c.getFontJson(c.getCurrentSelectedFont())) && b.color && e.ColorPickerSetColor("#" + b.color);
				return ! 1
			},
			onShow: function(b) {
				$(b).fadeIn(500);
				return ! 1
			},
			onHide: function(b, c, a, d) {
				$(b).fadeOut(500);
				return ! 1
			},
			onChange: function(b, a, d) {
				b = a;
				3 == b.length && (b = b.charAt(0) + b.charAt(0) + b.charAt(1) + b.charAt(1) + b.charAt(2) + b.charAt(2));
				c.setFont(c.getCurrentSelectedFont(), {
					color: b
				})
			},
			onSubmit: function(b, c, a, d) {
				e.ColorPickerHide()
			}
		}),
		d = $("#logoBgColorPicker").ColorPicker({
			color: "#ffffff",
			onBeforeShow: function(b) { (b = c.getLogoBgColor()) && d.ColorPickerSetColor("#" + b);
				return ! 1
			},
			onShow: function(b) {
				$(b).fadeIn(500);
				return ! 1
			},
			onHide: function(b, c, a, d) {
				$(b).fadeOut(500);
				return ! 1
			},
			onChange: function(b, a, d) {
				b = a;
				3 == b.length && (b = b.charAt(0) + b.charAt(0) + b.charAt(1) + b.charAt(1) + b.charAt(2) + b.charAt(2));
				c.setLogoBgColor("#" + b)
			},
			onSubmit: function(b, c, a, e) {
				d.ColorPickerHide()
			}
		}),
		f = $("#navbg").ColorPicker({
			color: "#000000",
			onBeforeShow: function(b) {
				b = f.css("background-color");
				b = $.Color(b).toHexString();
				f.ColorPickerSetColor(b);
				return ! 1
			},
			onShow: function(b) {
				$(b).fadeIn(500);
				return ! 1
			},
			onHide: function(b, c, a, d) {
				$(b).fadeOut(500);
				return ! 1
			},
			onChange: function(b, c, a) {
				b = c;
				3 == b.length && (b = b.charAt(0) + b.charAt(0) + b.charAt(1) + b.charAt(1) + b.charAt(2) + b.charAt(2));
				f.css("background", "#" + b)
			},
			onSubmit: function(b, c, a, d) {
				f.ColorPickerHide()
			}
		});
		$("#add").click(function(b) {
			c.resetFont();
			c.unSelectFont();
			var a = "FFFFFF",
			d = c.getLogoBgColor();
			d && (a = $.Color("#" + d).contrastColor(), a = $.Color(a).toHexString(), 0 == a.indexOf("#") && (a = a.substring(1)));
			a = c.addFont({
				size: 40,
				font: $$S_$5fae$8f6f$96c5$9ed1,
				color: a,
				style: $$S_0,
				text: "双击输入文字",
				top: 0,
				left: 0
			});
			c.selectFont(a);
			b.stopPropagation()
		});
		$("#fontAlignLeft").click(function(b) {
			c.getCurrentSelectedFont().css($$S_left, 0)
		});
		$("#fontAlignCenter").click(function(b) {
			b = c.getCurrentSelectedFont();
			var a = ($("#logo").width() - b.width()) / 2;
			b.css($$S_left, a)
		});
		$("#fontAlignRight").click(function(b) {
			b = c.getCurrentSelectedFont();
			var a = $("#logo").width() - b.width();
			b.css($$S_left, a)
		});
		$("#fontVerticalAlignMiddle").click(function(b) {
			b = c.getCurrentSelectedFont();
			var a = (b.parent().height() - b.height()) / 2;
			b.css($$S_top, a)
		});
		var h = {
			jpg: 1,
			jpeg: 1,
			gif: 1,
			png: 1,
			bmp: 1
		};
		$("#logoPic").zx_upload({   
			name: $$S_file,
			action: ctx + $upload_Link,   //上传路径 
			enctype: "multipart/form-data",   // 上传方式 multipart/form-data  
			params: {},
			autoSubmit: !0,
			onSubmit: function() {
				$("#tools-logo").mask("Loading...") 
			},
			onComplete: function(b) {
				b && (b.success ? c.setLogoPic(ctx + "http://www.guop.cn/gongju/logo/upload/" + b.data) : alert(b.msg), $("#tools-logo").unmask())
			},
			onSelect: function(b, a) {
				if (a && h[a.toLowerCase()]) return ! 0;
				alert("请选择jpg、jpeg、gif、png、和bmp类型的图片文件"); // alert("请选择jpg、jpeg、gif、png、和bmp类型的图片文件")
				return ! 1
			}
		});
		$("#logoPicNull").click(function(b) {
			c.setLogoPic("")
		});
		$("#logoBgColorNull").click(function(b) {
			c.setLogoBgColor("")
		});
		$(".um-create").click(function(b) {
			b = c.getJson();
			var a = $("#createLogoForm");
			0 == a.length && (a = $('<form id="createLogoForm" action="' + ctx + $create + $("#logoId").val() + '" method="post" ><input type="hidden" name="data" value=""/></form>').appendTo(GLOBAL_document.body));
			a.find("input").val($.toJSON(b));
			a.submit()
		});
		$(".um-preview").click(function(b) {
			b = c.getJson();
			var a = $("#previewLogoForm");
			0 == a.length && (a = $('<form id="previewLogoForm" action="' + ctx + $yulan_Link + $("#logoId").val() + '" method="post" target="_blank"><input type="hidden" name="data" value=""/></form>').appendTo(GLOBAL_document.body));
			a.find("input").val($.toJSON(b));
			a.submit()
		});
		$(".um-head").click(function(b) {
			QM.Login.is(function(b) {
				b = c.getJson();
				var a = $("#headLogoForm");
				0 == a.length && (a = $('<form id="headLogoForm" action="' + ctx + $$S_$2ftools$2flogo$2fhead$2f + $("#logoId").val() + '" method="post" target="_blank"><input type="hidden" name="data" value=""/></form>').appendTo(GLOBAL_document.body));
				a.find("input").val($.toJSON(b));
				a.submit()
			},
			function() {
				QM.Login.show()
			},
			!0)
		});
		var k = function(b) {
			GLOBAL_window.location.href = ctx + $$S_$2ftools$2flogo + (b.isDemo ? $$S_: $$S_$2fmy) + $$S_$2f_edit$2f + b.id
		};
		easyloader.load($$S_window,
		function() {
			var b = $("#callback-window").window({
				width: 300,
				height: 140,
				closed: !0,
				modal: !0,
				minimizable: !1,
				maximizable: !1,
				closable: !0,
				collapsible: !1,
				resizable: !1,
				title: $$S_$64cd$4f5c$63d0$793a,
				onClose: function() {
					var a = b.data($$S_logo);
					a && (GLOBAL_window.location.href = ctx + $$S_$2ftools$2flogo + (a.isDemo ? $$S_: $$S_$2fmy) + $$S_$2f_edit$2f + a.id)
				}
			});
			b.find("#win-close").click(function(a) {
				b.window($$S_close)
			});
			k = function(a) {
				var c = ctx + $$S_$2ftools$2flogo + (a.isDemo ? $$S_: $$S_$2fmy) + $$S_$2flist;
				b.find("#callback-link").attr($$S_href, c);
				b.data($$S_logo, a).window($$S_open).window($$S_center)
			}
		});
		$(".um-save").click(function(b) {
			a($save_Link)
		});
		$(".um-saveAs").click(function(b) {
			a($save_LinkAs)
		});
		$(".um-saveDemo").click(function(b) {
			a($save_LinkDemo)
		});
		$(".um-saveAsDemo").click(function(b) {
			a($saveAsDemo_Link)
		});
		easyloader.load($$S_numberbox,
		function() {
			$("#logoWidth").numberbox({
				min: 950,
				max: 990,
				precision: 0,
				onChange: function(a, c) {
					$(".um-warp").css({
						width: a
					});
					$("#logo").css({
						width: a
					})
				}
			});
			$("#logoHeight").numberbox({
				min: 50,
				max: 120,
				precision: 0,
				onChange: function(a, c) {
					$("#logo").css($$S_height, a)
				}
			});
			$("#navHeight").numberbox({
				min: 20,
				max: 120,
				precision: 0,
				onChange: function(a, c) {}
			})
		});
		if (GLOBAL_window.data) {
			var g = GLOBAL_window.data;
			$("#logoWidth").val(g.width);
			$("#logoHeight").val(g.height);
			$("#logo").css($$S_width, g.width);
			$("#logo").css($$S_height, g.height);
			c.setLogoBgColor("#" + g.bg);
			"/gongju/logo/image?id=" == g.pic && (g.pic = ctx + g.pic + $("#logoId").val());
			c.setLogoPic(g.pic);
			g = c.addFont(g.fonts);
			c.selectFont(g)
		}
	},
	getLogoBgColor: function() {
		var a = $("#logo").css("background-color");
		a && ("transparent" == a || "rgba(0, 0, 0, 0)" == a ? a = "": (a = $.Color(a).toHexString(), 0 == a.indexOf("#") && (a = a.substring(1))));
		return a
	},
	setLogoBgColor: function(a) {
		a || (a = "transparent");
		$("#logo").css("background-color", a)
	},
	getLogoPic: function() {
		var a = $$S_,
		c = $("#logo").css("background-image");
		c && $$S_none != c && (0 == c.indexOf('url("') || 0 == c.indexOf("url('") ? c = c.slice(5, c.length - 2) : 0 == c.indexOf("url(") && (c = c.slice(4, c.length - 1)), 0 == c.indexOf("http://") && (a = c));
		return a
	},
	setLogoPic: function(a) {
		return a ? $("#logo").css("background-image", "url(" + a + ")") : $("#logo").css("background-image", $$S_none)
		// return a ? $("#logo").css("background-image", "url(" + a + ")" ) : $("#logo").css("background-image", "none")
	},
	getJson: function() {
		var a = this,
		c = {
			bg: a.getLogoBgColor(),
			pic: a.getLogoPic()
		},
		e = $("#logo");
		c.width = e.width();
		c.height = e.height();
		c.fonts = [];
		$("#logo~.um-font").each(function(d, e) {
			var h = a.getFontJson($(this));
			h.order = d;
			c.fonts.push(h)
		});
		return c
	},
	getFontJson: function(a) {
		var c = a.find("img");
		if (0 < c.length) return c = c.attr($$S_src),
		c = GLOBAL_decodeURI(GLOBAL_decodeURI(c)),
		c = $.query(c),
		c.text = c.text.replace("%26", "&").replace("%3F", "?"),
		a = a.position(),
		c.left = a.left,
		c.top = a.top,
		c
	},
	toggleFontStyle: function(a) {
		var c = this.getCurrentSelectedFont(),
		e = this.getFontJson(c).style || $$S_0;
		if (0 > e.indexOf(a)) e = e + "|" + a;
		else {
			for (var e = e.split("|"), d = [], f = 0, h = e.length; f < h; f++) a != e[f] && d.push(e[f]);
			e = d.join("|")
		}
		this.setFont(c, {
			style: e
		})
	},
	setFont: function(a, c) {
		var e = a.find("img");
		if (0 < e.length) {
			var d = e.attr($$S_src),
			f = GLOBAL_decodeURI(GLOBAL_decodeURI(d));
			c.text && (c.text = c.text.replace("&", "%26").replace("?", "%3F"));
			f = $.query(f, c);
			f = GLOBAL_encodeURI(GLOBAL_encodeURI(f));
			f != d && e.attr($$S_src, f);
			a.css({
				left: c.left,
				top: c.top
			})
		}
	},
	addFont: function(a) {
		var c = this,
		e = $.makeArray(a),
		d;
		$.each(e,
		function(a, h) {
			var k = ctx + $wenziPicLink + h.size + "&font=" + h.font + "&color=" + h.color + "&style=" + h.style + "&text=" + (h.text || $$S_).replace("&", "%26").replace("?", "%3F") + "&left=" + h.left + "&top=" + h.top,
			k = GLOBAL_encodeURI(GLOBAL_encodeURI(k)),
			k = $('<div title="双击可以编辑,右上角可以点删除" class="um-font" style="left:' + h.left + 'px;top:' + h.top + 'px;"><img src="' + k + '"></div>');
			k.hover(function(a) {
				c.focusFont($(this))
			},
			function(a) {
				c.blurFont($(this))
			}).mousedown(function(a) {
				c.selectFont($(this))
			}).dblclick(function(a) {
				c.editFont($(this))
			}).zx_drag();
			k.appendTo(".um-warp");
			a == e.length - 1 && (d = k)
		});
		return d
	},
	editFont: function(a) {
		if (!a.hasClass("edit")) {
			a.zx_drag("disable");
			var c = a.width(),
			e = a.height(),
			d = this.getFontJson(a),
			f = d.text,
			h = d.size,
			k = d.font,
			g = d.style,
			d = "#" + d.color,
			d = $.Color(d).toHexString(),
			b = $.Color(d).contrastColor(),
			c = {
				"font-size": h + $$S_px,
				"font-family": k,
				width: c,
				height: e,
				color: d,
				"background-color": b
			};
			g && (0 <= g.indexOf($$S_1) && (c["font-weight"] = "700"), 0 <= g.indexOf($$S_2) && (c["font-style"] = "italic"), 0 <= g.indexOf($$S_3) && (c["text-decoration"] = "underline"), 0 <= g.indexOf($$S_4) && (c["text-decoration"] = "line-through"));
			a.addClass("edit");
			$('<input class="um-text" type="text" value="' + f + '">').css(c).appendTo(a).click(function(a) {
				a.stopPropagation()
			}).focus()
		}
	},
	focusFont: function(a) {
		a.hasClass("edit") || ($('<i class="um-opt"></i>').appendTo(a), $('<b class="um-del" title="删除"></b>').appendTo(a).click(function(c) {
			confirm("确定删除此文字吗？") && a.remove()
		}))
	},
	blurFont: function(a) {
		a.find(".um-del,.um-opt").remove()
	},
	selectFont: function(a) {
		$(".um-font").removeClass("selected").find(".um-hline,.um-vline").remove();
		a.addClass("selected").append('<div class="um-hline"></div><div class="um-hline bottom"></div><div class="um-vline right"></div><div class="um-vline"></div>');
		a = this.getFontJson(a);
		$("#font").zx_combox("setValue", a.font);
		$("#size").zx_combox("setValue", a.size);
		a = a.style;
		0 <= a.indexOf($$S_1) ? $("#fontBlod").addClass("hover") : $("#fontBlod").removeClass("hover");
		0 <= a.indexOf($$S_2) ? $("#fontItalic").addClass("hover") : $("#fontItalic").removeClass("hover");
		0 <= a.indexOf($$S_3) ? $("#fontUnderline").addClass("hover") : $("#fontUnderline").removeClass("hover");
		0 <= a.indexOf($$S_4) ? $("#fontStrikethrough").addClass("hover") : $("#fontStrikethrough").removeClass("hover")
	},
	unSelectFont: function(a) {
		a || (a = $(".um-font"));
		a.removeClass("selected").find(".um-hline,.um-vline").remove()
	},
	getCurrentSelectedFont: function() {
		return $(".um-font.selected")
	},
	getCurrentEditedFont: function() {
		return $(".um-font.edit")
	},
	resetFont: function(a) {
		a || (a = this.getCurrentEditedFont());
		if (0 != a.length) {
			var c = a.find(".um-text");
			if (0 != c.length) {
				var e = c.val();
				if (e) {
					var d = this.getFontJson(a);
					d.text = e;
					this.setFont(a, d);
					a.css({
						width: $$S_auto,
						height: $$S_auto
					}).removeClass("edit");
					c.remove();
					a.zx_drag("enable")
				} else a.remove()
			}
		}
	}
};
$().ready(function() {
	QM.Logo.init()
});