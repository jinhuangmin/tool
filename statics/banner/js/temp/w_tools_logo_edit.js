var GLOBAL_decodeURI = decodeURI,
	GLOBAL_encodeURI = encodeURI,
	GLOBAL_window = window,
	GLOBAL_document = document,
	$$S_ = "",
	$$S_$22$20method$3d$22post$22$20$3e$3cin_c7338cbb = '" method="post" ><input type="hidden" name="data" value=""/></form>',
	$$S_$22$20method$3d$22post$22$20targ_97f0b2db = '" method="post" target="_blank"><input type="hidden" name="data" value=""/></form>',
	$$S_$22$3e = '">',
	$$S_$22$3e$3c$2f_div$3e = '"></div>',
	$$S_$23 = "#",
	$$S_$23_000000 = "#000000",
	$$S_$23_add = "#add",
	$$S_$23_callback$2dlink = "#callback-link",
	$$S_$23_callback$2dwindow = "#callback-window",
	$$S_$23_createLogoForm = "#createLogoForm",
	$$S_$23_ffffff = "#ffffff",
	$$S_$23_font = "#font",
	$$S_$23_fontAlignCenter = "#fontAlignCenter",
	$$S_$23_fontAlignLeft = "#fontAlignLeft",
	$$S_$23_fontAlignRight = "#fontAlignRight",
	$$S_$23_fontBlod = "#fontBlod",
	$$S_$23_fontColorPicker = "#fontColorPicker",
	$$S_$23_fontItalic = "#fontItalic",
	$$S_$23_fontStrikethrough = "#fontStrikethrough",
	$$S_$23_fontUnderline = "#fontUnderline",
	$$S_$23_fontVerticalAlignMi_44fbcf2 = "#fontVerticalAlignMiddle",
	$$S_$23headLogoForm = "#headLogoForm",
	$$S_$23logo = "#logo",
	$$S_$23logoBgColorNull = "#logoBgColorNull",
	$$S_$23logoBgColorPicker = "#logoBgColorPicker",
	$$S_$23logoHeight = "#logoHeight",
	$$S_$23logoId = "#logoId",
	$$S_$23logoPic = "#logoPic",
	$$S_$23logoPicNull = "#logoPicNull",
	$$S_$23logoTitle = "#logoTitle",
	$$S_$23logoWidth = "#logoWidth",
	$$S_$23logo$7e$2eum$2d_font = "#logo~.um-font",
	$$S_$23navHeight = "#navHeight",
	$$S_$23navbg = "#navbg",
	$$S_$23previewLogoForm = "#previewLogoForm",
	$$S_$23size = "#size",
	$$S_$23tools$2dlogo = "#tools-logo",
	$$S_$23win$2d_close = "#win-close",
	$$S_$26_color$3d = "&color=",
	$$S_$26_font$3d = "&font=",
	$$S_$26left$3d = "&left=",
	$$S_$26style$3d = "&style=",
	$$S_$26text$3d = "&text=",
	$$S_$26top$3d = "&top=",
	$$S_$29 = ")",
	$$S_$2eum$2d_create = ".um-create",
	$$S_$2eum$2d_del$2c$2eum$2dopt = ".um-del,.um-opt",
	$$S_$2eum$2d_font = ".um-font",
	$$S_$2eum$2d_font$2e_edit = ".um-font.edit",
	$$S_$2eum$2d_font$2eselected = ".um-font.selected",
	$$S_$2eum$2dhead = ".um-head",
	$$S_$2eum$2dhline$2c$2eum$2dvline = ".um-hline,.um-vline",
	$$S_$2eum$2dpreview = ".um-preview",
	$$S_$2eum$2dsave = ".um-save",
	$$S_$2eum$2dsaveAs = ".um-saveAs",
	$$S_$2eum$2dsaveAsDemo = ".um-saveAsDemo",
	$$S_$2eum$2dsaveDemo = ".um-saveDemo",
	$$S_$2eum$2dtext = ".um-text",
	$$S_$2eum$2dwarp = ".um-warp",
	$$S_$2ezx$2d_combox$2dpopup = ".zx-combox-popup",
	$$S_$2f_edit$2f = "/edit/",
	$$S_$2flist = "/list",
	$$S_$2fmy = "/my",
	$$S_$2ftools$2f_font$3fsize$3d = "/api/font.php?size=",
	$$S_$2ftools$2flogo = "/tools/logo",
	$$S_$2ftools$2flogo$2f_create$2f = "/fontimg/font/create",
	$$S_$2ftools$2flogo$2fhead$2f = "/tools/logo/head/",
	$$S_$2ftools$2flogo$2fimage$3f_fi_f78c853a = "/fontimg/font/image/fileName=",
	$$S_$2ftools$2flogo$2fimage$3fid_242f2cdb = "/tools/logo/image?id=",
	$$S_$2ftools$2flogo$2fpreview$2f = "/fontimg/font/preview",
	$$S_$2ftools$2flogo$2fsave = "/tools/logo/save",
	$$S_$2ftools$2flogo$2fsaveAs = "/tools/logo/saveAs",
	$$S_$2ftools$2flogo$2fsaveAsDe_c16ccef2 = "/tools/logo/saveAsDemo",
	$$S_$2ftools$2flogo$2fsaveDemo = "/tools/logo/saveDemo",
	$$S_$2ftools$2flogo$2fupload = "/fontimg/font/upload",
	$$S_0 = "0",
	$$S_1 = "1",
	$$S_13 = "13",
	$$S_2 = "2",
	$$S_3 = "3",
	$$S_4 = "4",
	$$S_700 = "700",
	$$S_$3c_b$20_class$3d$22um$2d_del$22$20ti_ede6cb33 = '<b class="um-del" title="删除"></b>',
	$$S_$3c_div$20_class$3d$22um$2dhline_1e1b8023 = '<div class="um-hline"></div><div class="um-hline bottom"></div><div class="um-vline right"></div><div class="um-vline"></div>',
	$$S_$3c_div$20id$3d$22loginContai_50bc5595 = '<div id="loginContainer"></div>',
	$$S_$3c_div$20title$3d$22$53cc$51fb$53ef$4ee5$7f16$8f91$2c$53f3_221efd48 = '<div title="双击可以编辑,右上角可以点删除" class="um-font" style="left:',
	$$S_$3c_form$20id$3d$22_createLogo_70bc359e = '<form id="createLogoForm" action="',
	$$S_$3c_form$20id$3d$22headLogoFo_8c798b41 = '<form id="headLogoForm" action="',
	$$S_$3c_form$20id$3d$22previewLog_bc703ef7 = '<form id="previewLogoForm" action="',
	$$S_$3ci$20_class$3d$22um$2dopt$22$3e$3c$2f_44148578 = '<i class="um-opt"></i>',
	$$S_$3cinput$20_class$3d$22um$2dtex_ed59cdb7 = '<input class="um-text" type="text" value="',
	$$S_$3ft$3d = "?t=",
	$$S_FFFFFF = "FFFFFF",
	$$S_Loading$2e$2e$2e = "Loading...",
	$$S_QM$2e_check$28$29 = "QM.check()",
	$$S_auto = "auto",
	$$S_background$2d_color = "background-color",
	$$S_background$2dimage = "background-image",
	$$S_body = "body",
	$$S_center = "center",
	$$S_close = "close",
	$$S_disable = "disable",
	$$S_edit = "edit",
	$$S_enable = "enable",
	$$S_file = "file",
	$$S_font$2dstyle = "font-style",
	$$S_font$2dweight = "font-weight",
	$$S_function = "function",
	$$S_height = "height",
	$$S_hover = "hover",
	$$S_href = "href",
	$$S_img = "img",
	$$S_input = "input",
	$$S_italic = "italic",
	$$S_left = "left",
	$$S_line$2dthrough = "line-through",
	$$S_logo = "logo",
	$$S_multipart$2f_form$2d_data = "multipart/form-data",
	$$S_none = "none",
	$$S_numberbox = "numberbox",
	$$S_open = "open",
	$$S_px = "px",
	$$S_px$3b$22$3e$3cimg$20src$3d$22 = 'px;"><img src="',
	$$S_px$3btop$3a = "px;top:",
	$$S_selected = "selected",
	$$S_setValue = "setValue",
	$$S_src = "src",
	$$S_string = "string",
	$$S_text$2d_decoration = "text-decoration",
	$$S_top = "top",
	$$S_underline = "underline",
	$$S_url$28 = "url(",
	$$S_url$28$22 = 'url("',
	$$S_url$28$27 = "url('",
	$$S_width = "width",
	$$S_window = "window",
	$$S_$7c = "|",
	$$S_$53cc$51fb$8f93$5165$6587$5b57 = "双击输入文字",
	$$S_$5fae$8f6f$96c5$9ed1 = "微软雅黑",
	$$S_$64cd$4f5c$63d0$793a = "操作提示",
	$$S_$6807$9898$4e0d$53ef$4e3a$7a7a = "标题不可为空",
	$$S_$786e$5b9a$5220$9664$6b64$6587$5b57$5417$ff1f = "确定删除此文字吗？",
	$$S_$8bf7$9009$62e9jpg$3001jpeg$3001gif$3001png$548c_6809cd79 = "请选择jpg、jpeg、gif、png类型的图片文件";
QM.Logo = {
	init: function() {
		function a(e, a) {
			if ($($$S_$23logoTitle).val()) {
				a = a || g;
				var h = b.getJson(),
					c = $($$S_$23navbg).css($$S_background$2d_color);
				c && (c = $.Color(c).toHexString(), 0 == c.indexOf($$S_$23) && (c = c.substring(1)));
				var f = $($$S_$23navHeight).val(),
					h = {
						data: $.toJSON(h),
						id: $($$S_$23logoId).val(),
						title: $($$S_$23logoTitle).val(),
						ng: c,
						n: f
					},
					l = $($$S_$23tools$2dlogo).mask($$S_Loading$2e$2e$2e);
				$.post(ctx + e + $$S_$3ft$3d + +new Date, h, function(b) {
					l.unmask();
					b && (typeof b == $$S_string ? (GLOBAL_window.loginComplete = function() {}, $($$S_$3c_div$20id$3d$22loginContai_50bc5595).appendTo($($$S_body)).html(b)) : b.success && b.data ? typeof a == $$S_function && a(b.data) : alert(b.msg))
				})
			} else alert($$S_$6807$9898$4e0d$53ef$4e3a$7a7a)
		}
		var b = this;
		$(GLOBAL_document).click(function(e) {
			(0 == e.which || 1 == e.which) && b.resetFont();
			0 == $(e.target).parents($$S_$23tools$2dlogo).length && 0 == $(e.target).parents($$S_$2ezx$2d_combox$2dpopup).length && b.unSelectFont()
		}).keyup(function(e) {
			$$S_13 == e.keyCode && b.resetFont()
		});
		$($$S_$23_font).zx_combox({
			onSelect: function(e) {
				b.setFont(b.getCurrentSelectedFont(), {
					font: e.value
				})
			}
		});
		$($$S_$23size).zx_combox({
			onSelect: function(e) {
				b.setFont(b.getCurrentSelectedFont(), {
					size: e.value
				})
			}
		});
		$($$S_$23_fontBlod).click(function(e) {
			$(this).toggleClass($$S_hover);
			b.toggleFontStyle($$S_1)
		});
		$($$S_$23_fontItalic).click(function(e) {
			$(this).toggleClass($$S_hover);
			b.toggleFontStyle($$S_2)
		});
		$($$S_$23_fontUnderline).click(function(e) {
			$(this).toggleClass($$S_hover);
			b.toggleFontStyle($$S_3)
		});
		$($$S_$23_fontStrikethrough).click(function(e) {
			$(this).toggleClass($$S_hover);
			b.toggleFontStyle($$S_4)
		});
		$($$S_$23_fontColorPicker).ColorPicker({
			color: $$S_$23_000000,
			onBeforeShow: function(e, a) {
				b.resetFont();
				var c = b.getFontJson(b.getCurrentSelectedFont());
				c && c.color && $(a).ColorPickerSetColor($$S_$23 + c.color);
				return !1
			},
			onChange: function(a, d, c, f) {
				b.setFont(b.getCurrentSelectedFont(), {
					color: d
				})
			}
		});
		$($$S_$23logoBgColorPicker).ColorPicker({
			color: $$S_$23_ffffff,
			onBeforeShow: function(a, d) {
				var c = b.getLogoBgColor();
				c && $(d).ColorPickerSetColor($$S_$23 + c);
				return !1
			},
			onChange: function(a, d, c, f) {
				b.setLogoBgColor($$S_$23 + d)
			}
		});
		$($$S_$23navbg).ColorPicker({
			color: $$S_$23_000000,
			onBeforeShow: function(b, a) {
				$(a).ColorPickerSetColor(QM.bgc(a));
				return !1
			},
			onChange: function(b, a, c, f) {
				QM.bgc(f, $$S_$23 + a)
			}
		});
		$($$S_$23_add).click(function(a) {
			b.resetFont();
			b.unSelectFont();
			var d = $$S_FFFFFF,
				c = b.getLogoBgColor();
			c && (d = $.Color($$S_$23 + c).contrastColor(), d = $.Color(d).toHexString(), 0 == d.indexOf($$S_$23) && (d = d.substring(1)));
			d = b.addFont({
				size: 40,
				font: $$S_$5fae$8f6f$96c5$9ed1,
				color: d,
				style: $$S_0,
				text: $$S_$53cc$51fb$8f93$5165$6587$5b57,
				top: 0,
				left: 0
			});
			b.selectFont(d);
			a.stopPropagation()
		});
		$($$S_$23_fontAlignLeft).click(function(a) {
			b.getCurrentSelectedFont().css($$S_left, 0)
		});
		$($$S_$23_fontAlignCenter).click(function(a) {
			a = b.getCurrentSelectedFont();
			var d = ($($$S_$23logo).width() - a.width()) / 2;
			a.css($$S_left, d)
		});
		$($$S_$23_fontAlignRight).click(function(a) {
			a = b.getCurrentSelectedFont();
			var d = $($$S_$23logo).width() - a.width();
			a.css($$S_left, d)
		});
		$($$S_$23_fontVerticalAlignMi_44fbcf2).click(function(a) {
			a = b.getCurrentSelectedFont();
			var d = (a.parent().height() - a.height()) / 2;
			a.css($$S_top, d)
		});
		var f = {
			jpg: 1,
			jpeg: 1,
			gif: 1,
			png: 1,
			bmp: 1
		};
		$($$S_$23logoPic).zx_upload({
			name: $$S_file,
			action: ctx + $$S_$2ftools$2flogo$2fupload,
			enctype: $$S_multipart$2f_form$2d_data,
			params: {},
			autoSubmit: !0,
			onSubmit: function() {
				$($$S_$23tools$2dlogo).mask($$S_Loading$2e$2e$2e)
			},
			onComplete: function(a) {
				a && (a.success ? b.setLogoPic(ctx + $$S_$2ftools$2flogo$2fimage$3f_fi_f78c853a + a.data) : alert(a.msg), $($$S_$23tools$2dlogo).unmask())
			},
			onSelect: function(a, b) {
				if (b && f[b.toLowerCase()]) return !0;
				alert($$S_$8bf7$9009$62e9jpg$3001jpeg$3001gif$3001png$548c_6809cd79);
				return !1
			}
		});
		$($$S_$23logoPicNull).click(function(a) {
			b.setLogoPic($$S_)
		});
		$($$S_$23logoBgColorNull).click(function(a) {
			b.setLogoBgColor($$S_)
		});
		$($$S_$2eum$2d_create).click(function(a) {
			a = b.getJson();
			var d = $($$S_$23_createLogoForm);
			0 == d.length && (d = $($$S_$3c_form$20id$3d$22_createLogo_70bc359e + ctx + $$S_$2ftools$2flogo$2f_create$2f + $($$S_$23logoId).val() + $$S_$22$20method$3d$22post$22$20$3e$3cin_c7338cbb).appendTo(GLOBAL_document.body));
			d.find($$S_input).val($.toJSON(a));
			d.submit()
		});
		$($$S_$2eum$2dpreview).click(function(a) {
			a = b.getJson();
			var d = $($$S_$23previewLogoForm);
			0 == d.length && (d = $($$S_$3c_form$20id$3d$22previewLog_bc703ef7 + ctx + $$S_$2ftools$2flogo$2fpreview$2f + $($$S_$23logoId).val() + $$S_$22$20method$3d$22post$22$20targ_97f0b2db).appendTo(GLOBAL_document.body));
			d.find($$S_input).val($.toJSON(a));
			d.submit()
		});
		$($$S_$2eum$2dhead).click(function(a) {
			QM.Login.is(function(a) {
				a = b.getJson();
				var e = $($$S_$23headLogoForm);
				0 == e.length && (e = $($$S_$3c_form$20id$3d$22headLogoFo_8c798b41 + ctx + $$S_$2ftools$2flogo$2fhead$2f + $($$S_$23logoId).val() + $$S_$22$20method$3d$22post$22$20targ_97f0b2db).appendTo(GLOBAL_document.body));
				e.find($$S_input).val($.toJSON(a));
				e.submit()
			}, function() {
				QM.Login.show()
			}, !0)
		});
		var g = function(a) {

				GLOBAL_window.location.href = ctx + $$S_$2ftools$2flogo + (a.isDemo ? $$S_ : $$S_$2fmy) + $$S_$2f_edit$2f + a.id
			};
		easyloader.load($$S_window, function() {
			var a = $($$S_$23_callback$2dwindow).window({
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
					var b = a.data($$S_logo);
					b && (GLOBAL_window.location.href = ctx + $$S_$2ftools$2flogo + (b.isDemo ? $$S_ : $$S_$2fmy) + $$S_$2f_edit$2f + b.id)
				}
			});
			a.find($$S_$23win$2d_close).click(function(b) {
				a.window($$S_close)
			});
			g = function(b) {
				var c = ctx + $$S_$2ftools$2flogo + (b.isDemo ? $$S_ : $$S_$2fmy) + $$S_$2flist;
				a.find($$S_$23_callback$2dlink).attr($$S_href, c);
				a.data($$S_logo, b).window($$S_open).window($$S_center)
			}
		});
		$($$S_$2eum$2dsave).click(function(b) {
			a($$S_$2ftools$2flogo$2fsave)
		});
		$($$S_$2eum$2dsaveAs).click(function(b) {
			a($$S_$2ftools$2flogo$2fsaveAs)
		});
		$($$S_$2eum$2dsaveDemo).click(function(b) {
			a($$S_$2ftools$2flogo$2fsaveDemo)
		});
		$($$S_$2eum$2dsaveAsDemo).click(function(b) {
			a($$S_$2ftools$2flogo$2fsaveAsDe_c16ccef2)
		});
		easyloader.load($$S_numberbox, function() {
			$($$S_$23logoWidth).numberbox({
				min: 5,
				max: 3E3,
				precision: 0,
				onChange: function(a, b) {
					$($$S_$2eum$2dwarp).css({
						width: a
					});
					$($$S_$23logo).css({
						width: a
					});
					990 < a ? $($$S_$2eum$2dwarp).css({
						left: (990 - a) / 2
					}) : $($$S_$2eum$2dwarp).css({
						left: 0
					})
				}
			});
			$($$S_$23logoHeight).numberbox({
				min: 5,
				max: 3E3,
				precision: 0,
				onChange: function(a, b) {
					$($$S_$23logo).css($$S_height, a)
				}
			});
			$($$S_$23navHeight).numberbox({
				min: 20,
				max: 120,
				precision: 0,
				onChange: function(a, b) {}
			})
		});
		if (GLOBAL_window.data) {
			var c = GLOBAL_window.data;
			$($$S_$23logoWidth).val(c.width);
			$($$S_$23logoHeight).val(c.height);
			$($$S_$23logo).css($$S_width, c.width);
			$($$S_$23logo).css($$S_height, c.height);
			b.setLogoBgColor($$S_$23 + c.bg);
			$$S_$2ftools$2flogo$2fimage$3fid_242f2cdb == c.pic && (c.pic = ctx + c.pic + $($$S_$23logoId).val());
			b.setLogoPic(c.pic);
			c = b.addFont(c.fonts);
			b.selectFont(c)
		}
	},
	getLogoBgColor: function() {
		var a = $($$S_$23logo).css($$S_background$2d_color);
		a && ("transparent" == a || "rgba(0, 0, 0, 0)" == a ? a = $$S_ : (a = $.Color(a).toHexString(), 0 == a.indexOf($$S_$23) && (a = a.substring(1))));
		return a
	},
	setLogoBgColor: function(a) {
		a || (a = "transparent");
		$($$S_$23logo).css($$S_background$2d_color, a)
	},
	getLogoPic: function() {
		var a = $$S_,
			b = $($$S_$23logo).css($$S_background$2dimage);
		b && $$S_none != b && (0 == b.indexOf($$S_url$28$22) || 0 == b.indexOf($$S_url$28$27) ? b = b.slice(5, b.length - 2) : 0 == b.indexOf($$S_url$28) && (b = b.slice(4, b.length - 1)), QM.isHttp(b) && (a = b));
		return a
	},
	setLogoPic: function(a) {
		return a ? $($$S_$23logo).css($$S_background$2dimage, $$S_url$28 + a + $$S_$29) : $($$S_$23logo).css($$S_background$2dimage, $$S_none)
	},
	getJson: function() {
		var a = this,
			b = {
				bg: a.getLogoBgColor(),
				pic: a.getLogoPic()
			},
			f = $($$S_$23logo);
		b.width = f.width();
		b.height = f.height();
		b.fonts = [];
		$($$S_$23logo$7e$2eum$2d_font).each(function(f, c) {
			var e = a.getFontJson($(this));
			e.order = f;
			b.fonts.push(e)
		});
		return b
	},
	getFontJson: function(a) {
		var b = a.find($$S_img);
		if (0 < b.length) return b = b.attr($$S_src), b = GLOBAL_decodeURI(GLOBAL_decodeURI(b)), b = QM.query(b), b.text = QM.covertText(b.text, !0), a = a.position(), b.left = a.left, b.top = a.top, b
	},
	toggleFontStyle: function(a) {
		var b = this.getCurrentSelectedFont(),
			f = this.getFontJson(b).style || $$S_0;
		if (0 > f.indexOf(a)) f = f + $$S_$7c + a;
		else {
			for (var f = f.split($$S_$7c), g = [], c = 0, e = f.length; c < e; c++) a != f[c] && g.push(f[c]);
			f = g.join($$S_$7c)
		}
		this.setFont(b, {
			style: f
		})
	},
	setFont: function(a, b) {
		var f = a.find($$S_img);
		if (0 < f.length) {
			var g = f.attr($$S_src),
				c = GLOBAL_decodeURI(GLOBAL_decodeURI(g));
			b.text && (b.text = QM.covertText(b.text));
			c = QM.query(c, b);
			c = GLOBAL_encodeURI(GLOBAL_encodeURI(c));
			c != g && f.attr($$S_src, c);
			a.css({
				left: b.left,
				top: b.top
			})
		}
	},
	addFont: function(a) {
		var b = this,
			f = $.makeArray(a),
			g;
		$.each(f, function(a, e) {
			var d = ctx + $$S_$2ftools$2f_font$3fsize$3d + e.size + $$S_$26_font$3d + e.font + $$S_$26_color$3d + e.color + $$S_$26style$3d + e.style + $$S_$26text$3d + QM.covertText(e.text || $$S_) + $$S_$26left$3d + e.left + $$S_$26top$3d + e.top,
				d = GLOBAL_encodeURI(GLOBAL_encodeURI(d)),
				d = $($$S_$3c_div$20title$3d$22$53cc$51fb$53ef$4ee5$7f16$8f91$2c$53f3_221efd48 + e.left + $$S_px$3btop$3a + e.top + $$S_px$3b$22$3e$3cimg$20src$3d$22 + d + $$S_$22$3e$3c$2f_div$3e);
			d.hover(function(a) {
				b.focusFont($(this))
			}, function(a) {
				b.blurFont($(this))
			}).mousedown(function(a) {
				b.selectFont($(this))
			}).dblclick(function(a) {
				b.editFont($(this))
			}).zx_drag();
			d.appendTo($$S_$2eum$2dwarp);
			a == f.length - 1 && (g = d)
		});
		return g
	},
	editFont: function(a) {
		if (!a.hasClass($$S_edit)) {
			a.zx_drag($$S_disable);
			var b = a.width(),
				f = a.height(),
				g = this.getFontJson(a),
				c = g.text,
				e = g.size,
				d = g.font,
				h = g.style,
				g = $$S_$23 + g.color,
				g = $.Color(g).toHexString(),
				k = $.Color(g).contrastColor(),
				b = {
					"font-size": e + $$S_px,
					"font-family": d,
					width: b,
					height: f,
					color: g,
					"background-color": k
				};
			h && (0 <= h.indexOf($$S_1) && (b[$$S_font$2dweight] = $$S_700), 0 <= h.indexOf($$S_2) && (b[$$S_font$2dstyle] = $$S_italic), 0 <= h.indexOf($$S_3) && (b[$$S_text$2d_decoration] = $$S_underline), 0 <= h.indexOf($$S_4) && (b[$$S_text$2d_decoration] = $$S_line$2dthrough));
			a.addClass($$S_edit);
			$($$S_$3cinput$20_class$3d$22um$2dtex_ed59cdb7 + c + $$S_$22$3e).css(b).appendTo(a).click(function(a) {
				a.stopPropagation()
			}).focus()
		}
	},
	focusFont: function(a) {
		a.hasClass($$S_edit) || ($($$S_$3ci$20_class$3d$22um$2dopt$22$3e$3c$2f_44148578).appendTo(a), $($$S_$3c_b$20_class$3d$22um$2d_del$22$20ti_ede6cb33).appendTo(a).click(function(b) {
			confirm($$S_$786e$5b9a$5220$9664$6b64$6587$5b57$5417$ff1f) && a.remove()
		}))
	},
	blurFont: function(a) {
		a.find($$S_$2eum$2d_del$2c$2eum$2dopt).remove()
	},
	selectFont: function(a) {
		$($$S_$2eum$2d_font).removeClass($$S_selected).find($$S_$2eum$2dhline$2c$2eum$2dvline).remove();
		a.addClass($$S_selected).append($$S_$3c_div$20_class$3d$22um$2dhline_1e1b8023);
		a = this.getFontJson(a);
		$($$S_$23_font).zx_combox($$S_setValue, a.font);
		$($$S_$23size).zx_combox($$S_setValue, a.size);
		a = a.style;
		0 <= a.indexOf($$S_1) ? $($$S_$23_fontBlod).addClass($$S_hover) : $($$S_$23_fontBlod).removeClass($$S_hover);
		0 <= a.indexOf($$S_2) ? $($$S_$23_fontItalic).addClass($$S_hover) : $($$S_$23_fontItalic).removeClass($$S_hover);
		0 <= a.indexOf($$S_3) ? $($$S_$23_fontUnderline).addClass($$S_hover) : $($$S_$23_fontUnderline).removeClass($$S_hover);
		0 <= a.indexOf($$S_4) ? $($$S_$23_fontStrikethrough).addClass($$S_hover) : $($$S_$23_fontStrikethrough).removeClass($$S_hover)
	},
	unSelectFont: function(a) {
		a || (a = $($$S_$2eum$2d_font));
		a.removeClass($$S_selected).find($$S_$2eum$2dhline$2c$2eum$2dvline).remove()
	},
	getCurrentSelectedFont: function() {
		return $($$S_$2eum$2d_font$2eselected)
	},
	getCurrentEditedFont: function() {
		return $($$S_$2eum$2d_font$2e_edit)
	},
	resetFont: function(a) {
		a || (a = this.getCurrentEditedFont());
		if (0 != a.length) {
			var b = a.find($$S_$2eum$2dtext);
			if (0 != b.length) {
				var f = b.val();
				if (f) {
					var g = this.getFontJson(a);
					g.text = f;
					this.setFont(a, g);
					a.css({
						width: $$S_auto,
						height: $$S_auto
					}).removeClass($$S_edit);
					b.remove();
					a.zx_drag($$S_enable)
				} else a.remove()
			}
		}
	}
};
$().ready(function() {
	//QM.evalJSON(QM.decodeUTF8($$S_QM$2e_check$28$29));
	QM.Logo.init()
});