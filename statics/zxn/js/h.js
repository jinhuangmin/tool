function toMLogin() {
	$("#tMessage").dialog("close"), $("#login").trigger("click")
}
function tReplace(a, b, c) {
	return a.replace(b, c)
}
void
function(a) {
	var b = {},
		c = {};
	a.startModule = function(a) {
		require(a).start()
	}, a.define = function(a, c) {
		b[a] = c
	}, a.require = function(a) {
		return /\.js$/.test(a) || (a += ".js"), c[a] ? c[a] : c[a] = b[a]({})
	}
}(this), define("scripts/D.js", function(a) {
	var b = {
		tUserLogin: !1,
		tUserName: "",
		tUserIp: null,
		tUserDate: (new Date).Format("yyyy-MM-dd"),
		tUserDateTime: (new Date).getTime(),
		tAutoSaveSwitch: !1,
		tAutoSaveUsedSwitch: !0,
		tAutoSaveTime: 300,
		autoSaveCountdown: null,
		previewType: "normal",
		w: $(window),
		d: $(document),
		b: $("body"),
		numberS: !1,
		june: $("#june"),
		junebox: $("#junebox"),
		popupContent: $("#popupContent"),
		layerList: $("#tclist"),
		actionList: $("#aclist"),
		dump: $("#dump"),
		dumpLayer: $("#dumplayer"),
		dialogID: "dialogForm",
		juneOtherCls: "",
		cacheAppID: null,
		cacheAnchorName: null,
		selected: "div.ui-selected",
		layerSelected: "li.t-layer-selected",
		actionSelected: "li.t-action-selected",
		thumbSelected: "li.t-thumb-selected",
		rhCls: ".ui-resizable-handle",
		clickTimeStart: 0,
		clickTimeIng: 0,
		clickTimeEnd: 0,
		openSaveDocName: null,
		openSaveDocID: null,
		openSaveDocTime: null,
		appCls: ".t-app",
		layerCls: ".t-layer",
		actionCls: ".t-action",
		dragNaCls: ".t-na-drag",
		appChildCls: ".t-app-child",
		thumbCls: ".t-thumb",
		appOtherCls: ".t-app-other",
		appQsCls: ".j-app-qswz",
		isLoading: !1,
		tLoadingTime: null,
		startParse: !1,
		endParse: !1,
		tLoadingDiv: '<div id="tLoadingOverlay" class="ui-widget-overlay ui-front" style="z-index: 10001;"></div><div id="tLoading">正在加载, 请稍后...</div>',
		arrayX: !0,
		jpbLeft: 0,
		jpbTop: 0,
		jmdbLeft: 0,
		jmdbTop: 0,
		stringL: "loc",
		notNeedSnapCls: ".june-nonsp",
		selectedVal: "ui-selected",
		layerSelectedVal: "t-layer-selected",
		actionSelectedVal: "t-action-selected",
		thumbSelectedVal: "t-thumb-selected",
		rhClsVal: "ui-resizable-handle",
		appClsVal: "t-app",
		layerClsVal: "t-layer",
		actionClsVal: "t-action",
		dragNaClsVal: "t-na-drag",
		dragNaClsVal1: "t-na-drag1",
		resizeNaClsVal: "t-na-resize",
		appChildClsVal: "t-app-child",
		thumbClsVal: "t-thumb",
		appQsClsVal: "j-app-qswz",
		jSelectsedDom: $(),
		jSelectsedDom1: $(),
		jBgDom: $(),
		formatPos: {},
		offsleft: 85,
		offstop: 85,
		rulerSwitch: !0,
		pageX: null,
		pageY: null,
		offsetX: null,
		offsetY: null,
		zoomScale: 1,
		curType: "draw",
		curAppType: null,
		actType: null,
		clickTarget: null,
		tZIndex: 0,
		direction: null,
		IntO: "ef",
		Dragdirection: null,
		resizeCache: {
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			x: null,
			y: null
		},
		keyDirection: 0,
		keyCache: {
			type: "copy",
			act: !1,
			appID: [],
			attachID: [],
			keyTime: null,
			mutliPos: []
		},
		php_codeforgen: "codeforgen.php",
		objectR: "ation",
		actionMaxStep: 10,
		juneSnapArray1: [],
		juneSnapArray2: [],
		juneSnapObj: {},
		actionIconCls: {
			blank: "ui-icon-document",
			add: "ui-icon-plus",
			edit: "ui-icon-pencil",
			resize: "ui-icon-pencil",
			remove: "ui-icon-close",
			move: "ui-icon-arrow-4-diag"
		},
		tParentThumb: '<div class="t-thumb" id="tParentThumb" data-target="thumb-selected"><span class="t-layer-eye diseye" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img src=""/></span><span class="t-thumb-text">父层</span></div>',
		booleanC: "hr",
		tThumb: '<ul id ="tThumb" class="t-app-thumb" style="display:none;"></ul>',
		tContextmenu: $('<div class="t-contextmenu" data-target="menu-clicked" data-appID=""></div>'),
		appMenu: '<ul class="t-app-menu"><li class="t-context-add-child" data-target="menu-clicked" data-menuType="createChild">新建子层</li><li class="t-context-edit" data-target="menu-clicked" data-menuType="edit">编辑</li><li class="t-context-copy" data-target="menu-clicked" data-menuType="copy">复制</li><li class="t-context-up" data-target="menu-clicked" data-menuType="moveUp">上移一层</li><li class="t-context-down" data-target="menu-clicked" data-menuType="moveDown">下移一层</li><li class="t-context-dd t-context-disdrag" data-target="menu-clicked" data-menuType="drag">禁止拖拽</li><li class="t-context-del" data-target="menu-clicked" data-menuType="delete">删除</li></ul>',
		layerMenu: '<div id="tLayerMenu" class="t-contextmenu"><ul class="t-app-menu"></ul></div>',
		contrast: {
			jdb: "鼠绘热区",
			jspb: "特效层",
			jsb: "店内搜索",
			job: "正反面",
			jbob: "切片正反面",
			jwb: "阿里旺旺",
			jwwb: "旺旺群",
			jcb: "文字",
			jdlb: "段落",
			jcdb: "倒计时",
			jvb: "视频/FLASH",
			jsdb: "图片轮播",
			jwfb: "无缝轮播",
			jfsb: "轮播",
			jqtb: "嵌套轮播",
			jfyb: "翻页轮播",
			jib: "宝贝列表",
			jadb: "手风琴",
			jab: "关注",
			jfb: "分享",
			jgb: "购物车",
			jscb: "收藏",
			jplb: "评论",
			jxhb: "喜欢",
			jeb: "二维码",
			jtsb: "滚动文字",
			jpb: "弹出层",
			jsfb: "店铺分类",
			jacb: "可关闭层",
			jkgb: "开关灯",
			jzzb: "遮罩层",
			jmdb: "锚点",
			jdhb: "动态海报",
			jzdb: "自定义内容区",
			juneCustom: "自定义HTML",
			jabNumber: "关注数字",
			jcdbDay: "倒计时的天",
			jcdbHour: "倒计时的时",
			jcdbMinute: "倒计时的分",
			jcdbSecond: "倒计时的秒",
			jsbInput: "搜索输入框",
			jsbBtn: "搜索按钮",
			jsbPricePanel: "搜索价格面板",
			jsbPriceLow: "搜索价格输入框",
			jsbPriceHigh: "搜索价格输入框",
			jspbChild: "特效子层",
			jsfbChild: "分类文字",
			lbePanel: "扩展图层",
			jsdbOArrow: "图片轮播箭头",
			jsdbTArrow: "图片轮播箭头",
			jwfbOArrow: "无缝轮播箭头",
			jwfbTArrow: "无缝轮播箭头",
			jfybOArrow: "翻页轮播箭头",
			jfybTArrow: "翻页轮播箭头",
			jfybPanel: "翻页轮播缩略图面板",
			jqtbSmallImg: "嵌套轮播缩略图",
			jqtbOArrow: "嵌套轮播箭头",
			jqtbTArrow: "嵌套轮播箭头",
			jfsbSmallImg: "轮播缩略图",
			jwfbSmallImg: "轮播缩略图",
			jfsbOArrow: "轮播箭头",
			jfsbTArrow: "轮播箭头",
			jzzbAttention: "遮罩层按钮",
			jzzbCountNumber: "遮罩层倒数数字",
			jzzbCountText: "遮罩层倒数文字",
			jacbBtn: "可关闭层按钮",
			jkgbChild: "开关灯图片",
			jibbg: "宝贝背景",
			jibpanel: "宝贝信息面板",
			jibtitle: "宝贝标题",
			jibsubtitle: "宝贝副标题",
			jibprefix: "宝贝原价前缀",
			jibprice: "宝贝原价",
			jibdiscountprefix: "宝贝现价前缀",
			jibdiscountprice: "宝贝现价",
			jibsaleprefix: "宝贝销量前缀",
			jibsale: "宝贝销量",
			jibbtn: "宝贝购买按钮",
			jibbtn1: "宝贝收藏按钮",
			jibbtn2: "宝贝购物车按钮",
			jibsubscript: "宝贝扩展图片(1)",
			jibsubscript1: "宝贝扩展图片(2)",
			jibsubscript2: "宝贝扩展图片(3)",
			jibsubscript3: "宝贝扩展图片(4)",
			jibsubscript4: "宝贝扩展图片(5)",
			jiberweima: "宝贝二维码",
			jibexpandtext: "宝贝扩展文字(1)",
			jibexpandtext1: "宝贝扩展文字(2)",
			jibexpandtext2: "宝贝扩展文字(3)",
			jibexpandtext3: "宝贝扩展文字(4)",
			jibexpandtext4: "宝贝扩展文字(5)",
			jbobChild: "切片",
			jadbTitle: "手风琴标题",
			jadbPanel: "手风琴面板"
		},
		controlBtn: '<div id="tControlBtn" class="t-control-btns"><span class="t-control-btns-appaddchild t-control-usefor-jspb" title="新建子层" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appaddchild t-control-usefor-jkgb" title="新建子层" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appaddchild t-control-usefor-jfsb" title="新建扩展层" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appaddchildA t-control-usefor-jbob" title="新建切片" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appset" title="编辑" data-target="control-clicked" data-btnType="edit"></span><span class="t-control-btns-lock t-control-cc" title="锁定位置" data-target="control-clicked" data-btnType="drag"></span><span class="t-control-btns-copy" title="复制" data-target="control-clicked" data-btnType="copy"></span><span class="t-control-btns-close" title="删除" data-target="control-clicked" data-btnType="delete"></span><span class="t-control-btns-help t-control-usefor-jspb" data-help="help" title=""></span><span class="t-control-btns-icon t-control-usefor-arrow" title="小图标预设样式" data-target="control-clicked" data-btnType="setIcon"></span><span class="t-control-btns-icon t-control-usefor-small" title="缩略图预设样式" data-target="control-clicked" data-btnType="setIcon1"></span><span class="t-control-btns-setstyle t-control-usefor-jibstyle" title="将当前列表样式设置为预设样式" data-target="control-clicked" data-btnType="setItemStyle"></span><span class="t-control-btns-defaultstyle" data-target="control-clicked" data-btnType="defaultstyle">预<br />设<br />样<br />式</span></div>',
		message: '<div id="tMessage"></div>',
		_confirm: '<div id="tConfirm"></div>',
		alignMessage: '<p style="font-size: 14px;"><font style="color:#990000;">多选应用</font>后才能进行对齐或排列。</p><p style="color: #999;">如何多选应用：<br>方法1.最左侧的鼠标面板中选择<font style="color:#006699;">应用框选</font>，然后框选应用。<br>方法2.按住<font style="color:#006699;">ctrl键</font>单击应用，可进行多选。</p>',
		alignMessage1: '<p style="font-size: 14px;"><font style="color:#990000;">选择应用</font>后才能进行位置调整、对齐（需多选）或排列（需多选）。</p><p style="color: #999;">如何多选应用：<br>方法1.最左侧的鼠标面板中选择<font style="color:#006699;">应用框选</font>，然后框选应用。<br>方法2.按住<font style="color:#006699;">ctrl键</font>单击应用，可进行多选。</p>',
		clearMessage: '<p style="font-size: 14px;">是否确认清空画布？</p><p style="color: #999;">清空画布时，历史动作面板及图层面板将被同时清空！</p>',
		imContrast: ["a.jdb", "div.jdb", "div.jdhb", "a.job", "a.jbob", "div.jbob", "div.jcb", "div.jdlb", "div.jcdb", "div.jsdb", "div.jwfb", "div.jfsb", "div.jqtb", "div.jfyb", "form.jsb", "div.jvb", "div.jwb", "div.jwwb", "div.jspb", "a.jspb", "div.jib", "a.jab", "div.jfb", "a.jgb", "div.jscb", "div.jeb", "div.jtsb", "div.jacb", "div.jkgb", "div.jzzb", "div.jpb", "a.jmdb", "div.jsfb", "div.jzdb", "div.jadb", "div.jplb", "div.jllb"],
		dialogSetting: {
			autoOpen: !1,
			height: 560,
			width: 550,
			modal: !0,
			buttons: {
				"确定": function() {
					var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, a = require("scripts/inputFilter");
					if (a.filterTextarea($("#tForm")), c = require("scripts/action"), d = $("#tForm").attr("form-data"), e = $("#tForm").formToObject(), f = $(b.appCls + "[appID='" + e.appID + "']"), g = JSON.parse(f.attr("data-config")), h = f.width(), i = f.height(), j = b.tParseInt(f.css("top")), k = b.tParseInt(f.css("left")), e.appLabel && (l = require("scripts/layer"), f.attr("data-appLabel", e.appLabel), l.updateAppLabel(f)), "mdlink" == e.linkMode && "" == anchorSelect) return b.tMessage("选择连接类型为锚点连接时，需要先添加一个锚点！"), void 0;
					if ("jmdb" == d && !new RegExp(/^[a-zA-Z][a-zA-Z0-9\-_]*$/).test(e.anchorName)) return b.tMessage("请输入一个正确的锚点名称！只能用英文字母加数字，且不能以数字开头"), void 0;
					if ("jsfb" == d && (!e.catsArray || 0 == e.catsArray.length)) return b.tMessage("请选择分类，至少选择一个！"), void 0;
					if ("jscb" == d && "1" == e.scType) {
						if ("" == e.href) return b.tMessage("请输入一个正确的宝贝详情页地址！"), void 0;
						if (m = e.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), !m || m.length < 1) return b.tMessage("请输入一个正确的宝贝详情页地址！"), void 0;
						if (n = m[0].replace(/\?id\=/g, ""), "" == n) return b.tMessage("请输入一个正确的宝贝详情页地址！"), void 0
					}
					if (f.css({
						top: b.tParseInt(e.top),
						left: b.tParseInt(e.left),
						width: b.tParseInt(e.width),
						height: b.tParseInt(e.height)
					}), e.childConfig && e.childConfig.length > 0) {
						for (o = 0; o < e.childConfig.length; o++) if (p = e.childConfig[o], q = f.children(b.appChildCls + "[attachID='" + p.attachID + "']"), r = q.width(), s = q.height(), t = b.tParseInt(q.css("top")), u = b.tParseInt(q.css("left")), q.css({
							width: b.tParseInt(p.width),
							height: b.tParseInt(p.height),
							top: b.tParseInt(p.top),
							left: b.tParseInt(p.left)
						}), p.width || p.height || p.top || p.left) {
							if (r != b.tParseInt(p.width) || s != b.tParseInt(p.height)) {
								if (attachID = p.attachID, e.childConfig) for (o = 0; o < e.childConfig.length; o++) e.childConfig[o].attachID == attachID && (e.childConfig[o].autoSize && (e.childConfig[o].autoSize = "no"), e.childConfig[o].autoSize1 && (e.childConfig[o].autoSize1 = "no"));
								f.attr("data-config", JSON.stringify(e)), c.create("resize", f, q)
							}(t != b.tParseInt(p.top) || u != b.tParseInt(p.left)) && c.create("drag", f, q), delete p.width, delete p.height, delete p.top, delete p.left, "jspb" == d && delete p.appName
						}
					} else g.childConfig && (e.childConfig = []);
					(e.width || e.height || e.top || e.left) && ((h != Number(e.width) || i != Number(e.height)) && (e.autoSize = "no", f.attr("data-config", JSON.stringify(e)), c.create("resize", f)), (j != Number(e.top) || k != Number(e.left)) && c.create("drag", f)), delete g.width, delete g.height, delete g.top, delete g.left, delete e.width, delete e.height, delete e.top, delete e.left, v = b.equals(g, e), v || (b.appConfig[d][1].tSubmit(e, f), w = require("scripts/quickSet"), w.execQsSet(!0), c.create("edit", f)), b.june.find("embed").each(function() {
						$(this).parent().parent().is(b.june) || $(this).after('<div class="t-app-zcneedDel" style="width:100%;height:100%;position:absolute;left:0;top:0;"></div>')
					}), $(this).dialog("close"), $(".ui-tooltip").hide(), b.autoJuneHeight()
				},
				"取消": function() {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			},
			close: function() {
				$(this).dialog("close"), $(".ui-tooltip").hide()
			}
		},
		menuEve: null,
		drawHelper: null,
		dragSwitch: !0,
		dragX: [],
		dragY: [],
		snapSwitch: !0,
		tempSnapSwitch: null,
		dragEle: null,
		resizeEle: null,
		snapEle: null,
		selectTolerance: "touch",
		snapOutTolerance: 5,
		snapInTolerance: 5,
		snapOutSpace: 0,
		snapInSpace: 0,
		snapElements: [],
		resizeElements: [],
		anchor: [],
		appIDArray: [],
		appNameArray: [],
		appMongolia: '<div class="t-app-mongolia"></div>',
		qssetConfig: {
			characterLineMulti: "no",
			characterLineHeight: "",
			characterLineContent: "",
			characterLineAlign: "left",
			characterLineSpace: "",
			characterTBpadding: "",
			characterLetterSpacing: "",
			characterContent: "",
			characterMode: "text",
			characterItemContent: "",
			characterFixed: "2",
			characterHoverMode: "off",
			characterHoverSpeed: "",
			characterSizeHover: "12",
			characterWeightHover: "normal",
			characterFontHover: "宋体",
			characterColorHover: "#000000",
			characterBgSrcHover: "",
			characterBgColorHover: "",
			characterUnderLine: "off",
			characterUnderLineStyle: "solid",
			characterUnderLineWeight: "1",
			characterUnderLineColor: "#000000",
			characterWeight: "normal",
			characterStyle: "normal",
			characterLineUnder: "",
			characterLineThrough: "",
			characterWidthMode: "normal",
			characterAlign: "center",
			characterFont: "宋体",
			characterSize: "12",
			characterColor: "#000000",
			characterBgColor: "",
			characterLeftPadding: "",
			characterRightPadding: "",
			characterBgSrc: "",
			borderControl: "",
			borderColor: "#000000",
			borderWidth: "1",
			borderRadius: "0",
			shadowControl: "",
			shadowLeft: "0",
			shadowTop: "0",
			shadowBlur: "5",
			shadowSize: "0",
			shadowColor: "#666666",
			shadowStyle: "",
			borderControl1: "",
			borderColor1: "#000000",
			borderWidth1: "1",
			borderRadius1: "0",
			shadowControl1: "",
			shadowLeft1: "0",
			shadowTop1: "0",
			shadowBlur1: "5",
			shadowSize1: "0",
			shadowColor1: "#666666",
			shadowStyle1: "",
			outlineControl: "",
			outlineWidth: "juneol",
			outlineSpeed: "trans02s",
			outlineColor: "#FFFFFF",
			outlineShadowColor: "#666666"
		},
		appConfig: {
			jdb: ['<div class="t-app" data-dblType="jdb" style="background-color: rgba(0, 0, 0, 0.3)"></div>',
			{
				tTitle: "热区设置",
				tUrl: "area.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, ""), "rgba(0,0,0,0.3)"), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				codeExport: function() {
					return "${!jdb}"
				},
				codeImport: function(a, c, d, e) {
					var n, o, q, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						j = (d.attr("class"), d.children("a:eq(0)")),
						k = "",
						l = [],
						m = "";
					if (h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.borderColor = RGBToHex(d.attr("border-color")), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.is("a") ? (h.href = d.attr("href") || "", h.hrefMode = d.attr("target")) : (h.href = j.attr("href") || "", h.hrefMode = j.attr("target"), d.hasClass("shadowShow") && (h.shadowControl = "shadowShow", h.shadowShowType = j.attr("data-shadow"), k = j.css("box-shadow"), k.indexOf("inset") >= 0 && (h.shadowStyle = "inset", k = $.trim(k.replace(/inset/g, ""))), k.indexOf("rgb") >= 0 && (m = RGBToHex(k.match(/rgb\((\S|\s)*\)/g)[0]), k = $.trim(k.replace(/rgb\((\S|\s)*\)/g, ""))), l = k.split(" "), l[0].indexOf("px") < 0 && l[0] ? ("" == m && (m = RGBToHex(l[0])), l.splice(0, 1)) : "" == m && (m = RGBToHex(l[4])), h.shadowColor = m, h.shadowLeft = b.tParseInt(l[0]), h.shadowTop = b.tParseInt(l[1]), h.shadowBlur = b.tParseInt(l[2]), h.shadowSize = b.tParseInt(l[3]))), h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.linkMode = d.attr("data-linkmode"), h.wangID = "", h.shuntMode = "no", h.anchorSelect = "", !h.href && "" == h.href, n = h.href.split("?"), d.hasClass("j_CollectBrand") && (h.linkMode = "gzlink", h.attentionID = d.attr("data-brandid") || ""), d.hasClass("J_CartPluginTrigger") && (h.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(n[0])) try {
						o = h.href.split("&"), h.linkMode = "wwlink", h.wangID = o[1].replace("uid=", ""), h.wangID = h.wangID.replace("%3A", ":"), h.wangID = decodeURI(h.wangID), h.shuntMode = "yes"
					} catch (p) {}
					if (new RegExp("taobao.com/webww/ww.php").test(n[0])) try {
						o = h.href.split("&"), h.linkMode = "wwlink", h.wangID = o[1].replace("touid=", ""), h.wangID = h.wangID.replace("%3A", ":"), h.wangID = decodeURI(h.wangID)
					} catch (p) {}
					"mdlink" == h.linkMode && (h.anchorSelect = h.href.replace("#", ""), h.href = ""), d.hasClass("hborder") && (h.borderControl = "hborder", h.borderColor = RGBToHex(d.children("a:eq(0)").css("border-color")), h.borderWidth = d.children("a:eq(0)").css("border-width") || "1px", h.borderWidth = h.borderWidth.replace(/px/g, "")), d.hasClass("mcblack") && (h.mongoliaControl = "mongoliaShow", h.mongoliaMode = "mcblack"), d.hasClass("mcwhite") && (h.mongoliaControl = "mongoliaShow", h.mongoliaMode = "mcwhite"), d.hasClass("juneol") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color")), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), d.hasClass("juneol1") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol1", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color")), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), d.hasClass("juneol2") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol2", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color")), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), q = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(q)), checkUrl(h.pSrc) && a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, ""), "rgba(0,0,0,0.3)"), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				pSrc: "",
				bgColor: "",
				imgBgp: "50% 50%",
				tipText: "",
				autoSize: "yes",
				href: "#",
				hrefMode: "_blank",
				linkMode: "ptlink",
				attentionID: "",
				wangID: "",
				shuntMode: "no",
				mongoliaControl: "",
				mongoliaMode: "mcblack",
				borderControl: "",
				borderColor: "#000000",
				borderWidth: "1",
				shadowControl: "",
				shadowShowType: "1",
				shadowLeft: "0",
				shadowTop: "0",
				shadowBlur: "5",
				shadowSize: "0",
				shadowColor: "#666666",
				shadowStyle: "",
				outlineControl: "",
				outlineColor: "#FFFFFF",
				outlineWidth: "juneol",
				outlineSpeed: "trans02s",
				outlineShadowColor: "#666666",
				anchorSelect: "",
				popupConfig: {
					pSwitch: "no",
					popupPosition: "'tr','tl'",
					spaceX: "0",
					spaceY: "0",
					css3Mode: "",
					css3Bezier: "",
					css3Speed: "0.5s",
					popupHtml: ""
				}
			}],
			jdhb: ['<div class="t-app" data-dblType="jdhb"></div>',
			{
				tTitle: "动态海报设置",
				tUrl: "dthb.htm",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, ""), "rgba(0,0,0,0.3)"), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				codeExport: function() {
					return "${!jdhb}"
				},
				codeImport: function(a, b, c, d) {
					var o, p, q, r, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {},
						i = (c.attr("class"), c.children("ul:eq(0)").children("li:eq(0)")),
						j = i.children("a:eq(0)"),
						k = c.children(".scroller:eq(0)").children("div:eq(0)").children("div:eq(0)");
					g.tipText = "", j.attr("title") && "" != j.attr("title") && (g.tipText = j.attr("title")), g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), q = "1;1;none;1", c.attr("data-mr") && "" != c.attr("data-mr") && (q = c.attr("data-mr")), q = q.split(";"), g.dtMode = q[0], g.dtRange = q[1], g.dtShowMode = q[2], g.dtDirection = q[3], g.href = j.attr("href") || "", g.hrefMode = j.attr("target"), g.pSrc = k.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.bgColor = RGBToHex(k.css("background-color"), ""), g.linkMode = c.attr("data-linkmode"), g.wangID = "", g.shuntMode = "no", g.anchorSelect = "", !g.href && "" == g.href, o = g.href.split("?"), j.hasClass("j_CollectBrand") && (g.linkMode = "gzlink", g.attentionID = c.attr("data-brandid") || ""), j.hasClass("J_CartPluginTrigger") && (g.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(o[0]) && (p = g.href.split("&"), g.linkMode = "wwlink", g.wangID = p[1].replace("uid=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID), g.shuntMode = "yes"), new RegExp("taobao.com/webww/ww.php").test(o[0]) && (p = g.href.split("&"), g.linkMode = "wwlink", g.wangID = p[1].replace("touid=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID)), "mdlink" == g.linkMode && (g.anchorSelect = g.href.replace("#", ""), g.href = ""), r = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(r)), checkUrl(g.pSrc) && a.css({
						backgroundImage: "url(" + g.pSrc + ")"
					}), submitColor(a, RGBToHex(g.bgColor, ""), "rgba(0,0,0,0.3)"), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				pSrc: "https://img.alicdn.com/imgextra/i4/39767794/TB2WpuRfVXXXXXnXpXXXXXXXXXX-39767794.jpg",
				customHtml: "",
				bgColor: "",
				tipText: "",
				href: "#",
				hrefMode: "_blank",
				linkMode: "ptlink",
				attentionID: "",
				wangID: "",
				shuntMode: "no",
				anchorSelect: "",
				dtMode: "3",
				dtRange: "2",
				dtShowMode: "none",
				dtDirection: "2"
			}],
			jspb: ['<div class="t-app t-app-jspb" data-dblType="jspb"></div>',
			{
				tTitle: "特效层设置",
				tUrl: "spic.php",
				tSubmit: function(a, c) {
					var e, f, g, h, i, d = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), $("#tParentThumb").find("img").attr({
						src: a.pSrc
					}).show(), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : (c.css({
						backgroundImage: "none"
					}), $("#tParentThumb").find("img").hide()), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), c.attr("data-config", JSON.stringify(a));
					for (e in a.childConfig) a.childConfig[e] && a.childConfig[e].attachID && (f = a.childConfig[e].attachID, g = c.children(b.appChildCls + "[attachID='" + f + "']"), h = b.getChildPos(c, g, !0), "imgContent" == a.childConfig[e].contentType ? (g.html("").tResize(), g.removeAttr("style").css({
						width: h.width,
						height: h.height,
						top: h.top,
						left: h.left
					}), checkUrl(a.childConfig[e].pSrc) ? (g.css({
						backgroundImage: "url(" + a.childConfig[e].pSrc + ")"
					}), $("#tThumb").children(b.thumbCls + "[attachID='" + f + "']").find("img").attr({
						src: a.childConfig[e].pSrc
					}), "yes" == a.childConfig[e].autoSize &&
					function(b, c) {
						d.ajaxJsonForGis({
							img: a.childConfig[c].pSrc
						}, function(a) {
							var c = a[0],
								d = a[1];
							c && b.width(c), d && b.height(d)
						})
					}(g, e), $("#tThumb").children(b.thumbCls + "[attachID='" + f + "']").find("img").show()) : (g.css({
						backgroundImage: "none"
					}), $("#tThumb").children(b.thumbCls + "[attachID='" + f + "']").find("img").hide()), g.css({
						backgroundPosition: a.childConfig[e].imgBgp || "50% 50%"
					}), submitColor(g, RGBToHex(a.childConfig[e].bgColor, ""))) : "customContent" == a.childConfig[e].contentType ? (g.css({
						backgroundImage: "none"
					}), g.removeAttr("style").css({
						width: h.width,
						height: h.height,
						top: h.top,
						left: h.left
					}), g.html(a.childConfig[e].customContent).tResize(), $("#tThumb").children(b.thumbCls + "[attachID='" + f + "']").find("img").hide()) : "textContent" == a.childConfig[e].contentType && (i = require("scripts/allwzset"), $("#tThumb").children(b.thumbCls + "[attachID='" + f + "']").find("img").hide(), i.allSubmit(a.childConfig[e].qssetConfig, g, c, e + "")))
				},
				tDynamic: '<div class="t-app-child" data-dblType="jspb" data-attachType="jspbChild"></div>',
				tDynamicConfig: {
					attachID: "",
					contentType: "imgContent",
					pSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2W_U9apXXXXX8XXXXXXXXXXXX_!!39767794.png",
					bgColor: "",
					imgBgp: "50% 50%",
					autoSize: "yes",
					href: "#",
					hrefMode: "_blank",
					customContent: "",
					overflowMode: "hidden",
					displayMode: "",
					css3Speed: "0.5s",
					css3Bezier: "",
					css3Mode: "",
					css3ModeX: "",
					css3ModeY: "",
					css3MoveMode: "",
					spicSrc: "",
					qssetConfig: ""
				},
				tContent: "",
				codeExport: function(a) {
					var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
					if (a && !(a.length < 1) && a.attr("data-config")) return c = JSON.parse(a.attr("data-config")), d = a.width(), e = a.height(), f = b.tParseInt(a.css("top")), g = b.tParseInt(a.css("left")), h = c.childConfig, i = "", j = "", k = "", l = c.imgBgp || "50% 50%", m = c.css3Speed || "0s", n = "", o = "ease-in", p = "", "" != c.css3Bezier && ("bs1" == c.css3Bezier && (o = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == c.css3Bezier && (o = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == c.css3Bezier && (o = "cubic-bezier(0,0,1,0.1)"), "bq1" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,1)"), "bt1" == c.css3Bezier && (o = "cubic-bezier(1,2.2,0.5,0.8)"), "bt2" == c.css3Bezier && (o = "cubic-bezier(0.5,2.2,1,0.8)"), "bt3" == c.css3Bezier && (o = "cubic-bezier(1,0.2,0.5,-1.2)"), "bt4" == c.css3Bezier && (o = "cubic-bezier(0.5,0.2,1,-1.2)"), "bt5" == c.css3Bezier && (o = "cubic-bezier(1,1,0.5,0)"), "bt6" == c.css3Bezier && (o = "cubic-bezier(0.5,1,1,0)"), "bt7" == c.css3Bezier && (o = "cubic-bezier(0.5,1.5,0.5,-1.5)"), "bt8" == c.css3Bezier && (o = "cubic-bezier(0.5,2,0.5,-1)"), "bt9" == c.css3Bezier && (o = "cubic-bezier(0.5,3,0.5,0)"), "bt10" == c.css3Bezier && (o = "cubic-bezier(0.5,2.2,0.5,0.8)"), "bt11" == c.css3Bezier && (o = "cubic-bezier(0.5,0.2,0.5,-1.2)"), "bt12" == c.css3Bezier && (o = "cubic-bezier(0.5,1,0.5,0)")), n = "-webkit-transition: " + m + " " + o + ";" + "-moz-transition: " + m + " " + o + ";" + "-o-transition: " + m + " " + o + ";" + "transition: " + m + " " + o + ";", a.children(b.appChildCls + "[data-attachType='jspbChild']").each(function(c) {
						var l, f, g, j, k, m, n, o, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
						h[c] && (f = $(this), g = "", j = "", k = "", m = "", n = h[c].imgBgp || "50% 50%", o = b.getChildPos(a, f, !0), q = h[c].css3Speed || "0s", r = "", s = "ease-in", t = "", u = "", v = "", w = !1, x = "", y = "", z = "top:" + o.top + "px;left:" + o.left + "px;", A = " abs", B = " " + h[c].css3ModeX + " " + h[c].css3ModeY, "" != h[c].css3Bezier && ("bs1" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == h[c].css3Bezier && (s = "cubic-bezier(0,0,1,0.1)"), "bq1" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.1,1)"), "bt1" == h[c].css3Bezier && (s = "cubic-bezier(1,2.2,0.5,0.8)"), "bt2" == h[c].css3Bezier && (s = "cubic-bezier(0.5,2.2,1,0.8)"), "bt3" == h[c].css3Bezier && (s = "cubic-bezier(1,0.2,0.5,-1.2)"), "bt4" == h[c].css3Bezier && (s = "cubic-bezier(0.5,0.2,1,-1.2)"), "bt5" == h[c].css3Bezier && (s = "cubic-bezier(1,1,0.5,0)"), "bt6" == h[c].css3Bezier && (s = "cubic-bezier(0.5,1,1,0)"), "bt7" == h[c].css3Bezier && (s = "cubic-bezier(0.5,1.5,0.5,-1.5)"), "bt8" == h[c].css3Bezier && (s = "cubic-bezier(0.5,2,0.5,-1)"), "bt9" == h[c].css3Bezier && (s = "cubic-bezier(0.5,3,0.5,0)"), "bt10" == h[c].css3Bezier && (s = "cubic-bezier(0.5,2.2,0.5,0.8)"), "bt11" == h[c].css3Bezier && (s = "cubic-bezier(0.5,0.2,0.5,-1.2)"), "bt12" == h[c].css3Bezier && (s = "cubic-bezier(0.5,1,0.5,0)")), r = "-webkit-transition: " + q + " " + s + ";" + "-moz-transition: " + q + " " + s + ";" + "-o-transition: " + q + " " + s + ";" + "transition: " + q + " " + s + ";", ("effect_w" == h[c].css3Mode || "effect_h" == h[c].css3Mode || "effect_wh" == h[c].css3Mode || "effect_w1" == h[c].css3Mode) && ("" == p && (p = " u-e u-c u-d"), C = "", D = "width:" + o.width + "px;height:" + o.height + "px;", E = z, F = B, z = "top:0;left:0;", A = " rel", B = "  ", w = !0, "effect_w" == h[c].css3Mode ? C = "c-2" : "effect_h" == h[c].css3Mode ? C = "d-2" : "effect_wh" == h[c].css3Mode ? C = "c-2 d-2" : "effect_w1" == h[c].css3Mode && (C = "c-2 c-21", t = "float:right;"), h[c].css3Mode = "", x = '<div class="abs pspe e-2" style="' + D + E + 'z-index:10;">' + u + '<div class="' + C + " outbox" + F + '" data-x="' + h[c].css3ModeX + ";" + h[c].css3ModeY + '" style="' + r + t + '"><div class="rel" style="width:100%;height:100%;' + t + '">', y = "</div></div>" + v + "</div>"), ("june-box-fromtop" == h[c].css3ModeY || "june-box-frombottom" == h[c].css3ModeY) && (w || (x = x + '<div class="abs juneyd" style="width:' + e + 'px;height:0;">', y = "</div>" + y)), h[c] && h[c].spicSrc && (l = h[c].spicSrc), G = "", l && "" != l && "undefined" != l || (G = "display:none;"), h[c].bgColor = RGBToHex(h[c].bgColor, ""), "" != h[c].bgColor && (m = "background-color:" + h[c].bgColor + ";"), checkUrl(h[c].pSrc) && (g = "background:url(" + h[c].pSrc + ") " + n + " no-repeat;"), checkUrl(l) && (j = "background:url(" + l + ") " + n + " no-repeat;", k = 'src="' + l + '"'), "imgContent" == h[c].contentType ? i += x + '<a href="' + h[c].href + '" target="' + h[c].hrefMode + '" class="jspcb' + A + " imghover " + h[c].displayMode + " trans05s" + " " + h[c].css3Mode + B + " " + h[c].css3MoveMode + " " + h[c].attachID + '" data-appid="' + h[c].attachID + '" style="' + r + "overflow:hidden;" + g + m + "width:" + o.width + "px;height:" + o.height + "px;" + z + "z-index:10;" + t + '" data-jspbType="' + h[c].contentType + '"><img class="abs" style="width:' + o.width + "px;height:" + o.height + "px;" + j + G + '" ' + k + " /></a>" + y : "customContent" == h[c].contentType ? i += x + '<div class="jspcb' + A + " imghover " + h[c].displayMode + " trans05s" + " " + h[c].css3Mode + B + " " + h[c].css3MoveMode + " " + h[c].attachID + '" data-appid="' + h[c].attachID + '" style="' + r + "overflow:hidden;width:" + o.width + "px;height:" + o.height + "px;" + z + "z-index:10;" + t + '" data-jspbType="' + h[c].contentType + '">' + h[c].customContent + "</div>" + y : "textContent" == h[c].contentType && (H = require("scripts/allwzset"), I = !1, qssetConfig = JSON.parse(h[c].qssetConfig || "{}"), exportHtml = '"></div>', "" != h[c].qssetConfig && (qssetConfig.href = h[c].href, qssetConfig.hrefMode = h[c].hrefMode, "top:0;left:0;" == z && (I = !0), exportHtml = H.allExport(f, qssetConfig, "jspb", r, I)), i += x + '<div data-appid="' + h[c].attachID + '" data-jspbType="' + h[c].contentType + '" class="jspcb' + A + " imghover " + h[c].displayMode + " trans05s" + " " + h[c].css3Mode + B + " " + h[c].css3MoveMode + " " + h[c].attachID + exportHtml + y))
					}), c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (k = "background-color:" + c.bgColor + ";"), checkUrl(c.pSrc) && (j = "background:url(" + c.pSrc + ") " + l + " no-repeat;"), !c.overflowMode && "hidden" == c.overflowMode, q = "", r = "overflow:hidden;", "visibleX" == c.overflowMode ? (q = " u-a", r = "") : "visible" == c.overflowMode && (q = " j-zdv", r = "overflow:visible;"), '<div class="jspb abs imghover ' + c.displayMode + " trans05s" + " " + c.css3Mode + " " + c.css3MoveMode + " " + c.appID + q + p + '" data-appid="' + c.appID + '" style="' + n + r + j + k + "width:" + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;">' + i + '<a class="abs" href="' + c.href + '" target="' + c.hrefMode + '" style="width:' + d + "px;height:" + e + 'px;display:block;top:0px;left:0px;"></a></div>'
				},
				codeImport: function(a, c, d, e) {
					var k, l, m, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = 0,
						i = d.attr("class").replace("jspb abs imghover ", ""),
						j = {};
					j.childConfig = [], j.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), j.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.bgColor = RGBToHex(d.css("background-color"), ""), j.imgBgp = d.css("background-position") || "50% 50%", j.href = d.children("a:last").attr("href") || "", j.hrefMode = d.children("a:last").attr("target"), j.displayMode = i.split(" ")[0], j.css3Speed = i.split(" ")[1], j.css3Mode = i.split(" ")[2], j.css3MoveMode = i.split(" ")[3], j.overflowMode = d.css("overflow"), "visible" != j.overflowMode && (j.overflowMode = "hidden"), d.hasClass("u-a") && (j.overflowMode = "visibleX"), d.hasClass("j-zdv") && (j.overflowMode = "visible"), i.replace(/  /g, "") == i && (i.indexOf("june-fadein") < 0 && i.indexOf("june-fadeout") < 0 && " " != i.charAt(0) && (i = " " + i, j.displayMode = i.split(" ")[0], j.css3Speed = i.split(" ")[1], j.css3Mode = i.split(" ")[2], j.css3MoveMode = i.split(" ")[3]), i.indexOf("june-rx") < 0 && i.indexOf("june-lx") < 0 && i.indexOf("june-uy") < 0 && i.indexOf("june-dy") < 0 && i.indexOf("june-r360") < 0 && i.indexOf("june-r720") < 0 && (j.css3Mode = "", h++, j.css3MoveMode = i.split(" ")[3 - h]), i.indexOf("june-move") < 0 && (j.css3MoveMode = "")), j.css3Speed = d.css("transitionDuration") && "undefined" != d.css("transitionDuration") && "" != d.css("transitionDuration") ? 10 * parseFloat(d.css("transitionDuration").substr(0, d.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == j.css3Speed ? "0.5s" : parseFloat(j.css3Speed.replace("trans", "").replace("s", ""), 10) + "s", d.css("transitionTimingFunction") && "undefined" != d.css("transitionTimingFunction") && "" != d.css("transitionTimingFunction") ? (k = d.css("transitionTimingFunction"), j.css3Bezier = "", "cubic-bezier(0, 0, 0.7, 0.1)" == k && (j.css3Bezier = "bs1"), "cubic-bezier(0, 0, 0.85, 0.1)" == k && (j.css3Bezier = "bs2"), "cubic-bezier(0, 0, 1, 0.1)" == k && (j.css3Bezier = "bs3"), "cubic-bezier(0, 0, 0.1, 0.4)" == k && (j.css3Bezier = "bq1"), "cubic-bezier(0, 0, 0.1, 0.7)" == k && (j.css3Bezier = "bq2"), "cubic-bezier(0, 0, 0.1, 1)" == k && (j.css3Bezier = "bq3"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == k && (j.css3Bezier = "bt1"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == k && (j.css3Bezier = "bt2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == k && (j.css3Bezier = "bt3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == k && (j.css3Bezier = "bt4"), "cubic-bezier(1, 1, 0.5, 0)" == k && (j.css3Bezier = "bt5"), "cubic-bezier(0.5, 1, 1, 0)" == k && (j.css3Bezier = "bt6"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == k && (j.css3Bezier = "bt7"), "cubic-bezier(0.5, 2, 0.5, -1)" == k && (j.css3Bezier = "bt8"), "cubic-bezier(0.5, 3, 0.5, 0)" == k && (j.css3Bezier = "bt9"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == k && (j.css3Bezier = "bt10"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == k && (j.css3Bezier = "bt11"), "cubic-bezier(0.5, 1, 0.5, 0)" == k && (j.css3Bezier = "bt12")) : j.css3Bezier = "", a.attr("appID", j.appID), l = require("scripts/allwzset"), d.children(".jspcb, .pspe, .juneyd").each(function(c) {
						var n, g, h, i, k, m, o, p, q, r, s, t, u, f = $(this);
						f.hasClass("juneyd") && (f = f.children()), g = b.getChildPos(d, f, !0), h = 0, i = "", k = "", m = f.attr("class").replace("jspcb abs imghover ", ""), f.hasClass("pspe") && (f.children().hasClass("juneyd") && (f = f.children()), o = f.children(".outbox"), n = o.attr("data-x") || ";", n = n.split(";"), o.hasClass("c-2") ? (n[2] = "effect_w", o.hasClass("c-21") && (n[2] = "effect_w1")) : o.hasClass("d-2") ? n[2] = "effect_h" : o.hasClass("c-2") && o.hasClass("d-2") && (n[2] = "effect_wh"), f = o.children(".rel").children(".jspcb"), o.children(".rel").children(".juneyd").length > 0 && (f = o.children(".rel").children(".juneyd").children(".jspcb")), m = f.attr("class").replace("jspcb rel imghover ", "")), j.childConfig.push($.extend(!0, {}, b.appConfig["jspb"][1].tDynamicConfig)), j.childConfig[c].pSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.childConfig[c].bgColor = RGBToHex(f.css("background-color"), ""), j.childConfig[c].imgBgp = f.css("background-position") || "50% 50%", j.childConfig[c].spicSrc = f.find("img").attr("src") || "", j.childConfig[c].href = f.attr("href") || f.children("a").attr("href") || "", j.childConfig[c].hrefMode = f.attr("target") || f.children("a").attr("target") || "_blank", j.childConfig[c].displayMode = m.split(" ")[0], j.childConfig[c].contentType = "imgContent", j.childConfig[c].customContent = "", j.childConfig[c].autoSize = "no", p = f.attr("data-jspbType"), p ? (j.childConfig[c].contentType = p, "textContent" == p ? i = "display:none;" : "customContent" == p && (j.childConfig[c].customContent = f.html(), i = "display:none;")) : f.children("img").length < 1 && (j.childConfig[c].contentType = "customContent", j.childConfig[c].customContent = f.html(), i = "display:none;"), j.childConfig[c].css3Speed = m.split(" ")[1], j.childConfig[c].css3Mode = m.split(" ")[2], j.childConfig[c].css3ModeX = m.split(" ")[3], j.childConfig[c].css3ModeY = m.split(" ")[4], j.childConfig[c].css3MoveMode = m.split(" ")[5], m.replace(/  /g, "") == m && (m.indexOf("june-box-fadein") < 0 && m.indexOf("june-box-fadeout") < 0 && " " != m.charAt(0) && (m = " " + m, j.childConfig[c].displayMode = m.split(" ")[0], j.childConfig[c].css3Speed = m.split(" ")[1], j.childConfig[c].css3Mode = m.split(" ")[2], j.childConfig[c].css3ModeX = m.split(" ")[3], j.childConfig[c].css3ModeY = m.split(" ")[4], j.childConfig[c].css3MoveMode = m.split(" ")[5]), m.indexOf("june-box-fx") < 0 && m.indexOf("june-box-fy") < 0 && m.indexOf("june-box-sf") < 0 && m.indexOf("june-box-fx") < 0 && m.indexOf("june-box-fy") < 0 && m.indexOf("june-box-r1") < 0 && m.indexOf("june-box-r2") < 0 && m.indexOf("june-box-r3") < 0 && m.indexOf("june-box-r7") < 0 && m.indexOf("june-box-fr1") < 0 && m.indexOf("june-box-fr2") < 0 && m.indexOf("june-box-fr3") < 0 && m.indexOf("june-box-fr7") < 0 && (j.childConfig[c].css3Mode = "", h++, j.childConfig[c].css3ModeX = m.split(" ")[3 - h], j.childConfig[c].css3ModeY = m.split(" ")[4 - h], j.childConfig[c].css3MoveMode = m.split(" ")[5 - h]), m.indexOf("june-box-fromleft") < 0 && m.indexOf("june-box-fromright") < 0 && m.indexOf("june-box-lx") < 0 && m.indexOf("june-box-rx") < 0 && (j.childConfig[c].css3ModeX = "", h++, j.childConfig[c].css3ModeY = m.split(" ")[4 - h], j.childConfig[c].css3MoveMode = m.split(" ")[5 - h]), m.indexOf("june-box-fromtop") < 0 && m.indexOf("june-box-frombottom") < 0 && m.indexOf("june-box-uy") < 0 && m.indexOf("june-box-dy") < 0 && (j.childConfig[c].css3ModeY = "", h++, j.childConfig[c].css3MoveMode = m.split(" ")[5 - h]), m.indexOf("june-move") < 0 && (j.childConfig[c].css3MoveMode = "")), b.setAttachID(j.childConfig[c]), j.childConfig[c].css3Speed = f.css("transitionDuration") && "undefined" != f.css("transitionDuration") && "" != f.css("transitionDuration") ? 10 * parseFloat(f.css("transitionDuration").substr(0, f.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == j.childConfig[c].css3Speed ? "0.5s" : parseFloat(j.childConfig[c].css3Speed.replace("trans", "").replace("s", ""), 10) + "s", f.css("transitionTimingFunction") && "undefined" != f.css("transitionTimingFunction") && "" != f.css("transitionTimingFunction") ? (q = f.css("transitionTimingFunction"), j.childConfig[c].css3Bezier = "", "cubic-bezier(0, 0, 0.7, 0.1)" == q && (j.childConfig[c].css3Bezier = "bs1"), "cubic-bezier(0, 0, 0.85, 0.1)" == q && (j.childConfig[c].css3Bezier = "bs2"), "cubic-bezier(0, 0, 1, 0.1)" == q && (j.childConfig[c].css3Bezier = "bs3"), "cubic-bezier(0, 0, 0.1, 0.4)" == q && (j.childConfig[c].css3Bezier = "bq1"), "cubic-bezier(0, 0, 0.1, 0.7)" == q && (j.childConfig[c].css3Bezier = "bq2"), "cubic-bezier(0, 0, 0.1, 1)" == q && (j.childConfig[c].css3Bezier = "bq3"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == q && (j.childConfig[c].css3Bezier = "bt1"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == q && (j.childConfig[c].css3Bezier = "bt2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == q && (j.childConfig[c].css3Bezier = "bt3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == q && (j.childConfig[c].css3Bezier = "bt4"), "cubic-bezier(1, 1, 0.5, 0)" == q && (j.childConfig[c].css3Bezier = "bt5"), "cubic-bezier(0.5, 1, 1, 0)" == q && (j.childConfig[c].css3Bezier = "bt6"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == q && (j.childConfig[c].css3Bezier = "bt7"), "cubic-bezier(0.5, 2, 0.5, -1)" == q && (j.childConfig[c].css3Bezier = "bt8"), "cubic-bezier(0.5, 3, 0.5, 0)" == q && (j.childConfig[c].css3Bezier = "bt9"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == q && (j.childConfig[c].css3Bezier = "bt10"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == q && (j.childConfig[c].css3Bezier = "bt11"), "cubic-bezier(0.5, 1, 0.5, 0)" == q && (j.childConfig[c].css3Bezier = "bt12")) : j.childConfig[c].css3Bezier = "", n && (j.childConfig[c].css3ModeX = n[0], j.childConfig[c].css3ModeY = n[1], j.childConfig[c].css3Mode = n[2]), "imgContent" == j.childConfig[c].contentType ? (r = "", s = "", j.childConfig[c].bgColor = RGBToHex(j.childConfig[c].bgColor, ""), "" != j.childConfig[c].bgColor && (s = "background-color:" + j.childConfig[c].bgColor + ";"), checkUrl(j.childConfig[c].pSrc) && (r = "background-image:url(" + j.childConfig[c].pSrc + ");"), $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="' + s + r + "left:" + g.left + "px;top:" + g.top + "px;width:" + g.width + "px;height:" + g.height + 'px;"></div>').tResize().appendTo(a).attr("appID", j.appID).attr("attachID", j.childConfig[c].attachID).css({
							backgroundPosition: j.childConfig[c].imgBgp || "50% 50%"
						})) : "customContent" == j.childConfig[c].contentType ? $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + g.left + "px;top:" + g.top + "px;width:" + g.width + "px;height:" + g.height + 'px;">' + j.childConfig[c].customContent + "</div>").tResize().appendTo(a).attr("appID", j.appID).attr("attachID", j.childConfig[c].attachID) : "textContent" == j.childConfig[c].contentType && (t = $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + g.left + "px;top:" + g.top + "px;width:" + g.width + "px;height:" + g.height + "px;line-height:" + g.height + 'px;"></div>').appendTo(a).attr("appID", j.appID).attr("attachID", j.childConfig[c].attachID), j.childConfig[c].qssetConfig = l.allImport(t, j.appID, f), t.hasClass("j-app-qswz") || t.addClass("j-app-qswz")), checkUrl(j.childConfig[c].pSrc) && (k = 'src="' + j.childConfig[c].pSrc + '"'), $('<li class="t-thumb" data-target="thumb-selected" appID="' + j.appID + '" attachID="' + j.childConfig[c].attachID + '"><span class="t-layer-eye diseye" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img ' + k + ' style="' + i + '" /></span><span class="t-thumb-text"></span></li>').prependTo($("#tThumb")), $("#tThumb").children(b.thumbSelected).removeClass(b.thumbSelectedVal), $("#tParentThumb").removeClass(b.thumbSelectedVal), $("#tThumb").children(b.thumbCls + "[attachID='" + j.childConfig[c].attachID + "']").addClass(b.thumbSelectedVal).addClass(".t-app-jspcb"), b.createAppName("jspbChild", j.appID, j.childConfig[c].attachID), u = a.children(b.appChildCls + "[attachID='" + j.childConfig[c].attachID + "']"), $("#tThumb").children(b.thumbCls + "[attachID='" + j.childConfig[c].attachID + "']").children(".t-thumb-text").html(u.attr("data-appName").replace(/特效/g, ""))
					}), m = $.extend(!0, f, j), a.attr("data-config", JSON.stringify(m)), checkUrl(j.pSrc) ? (a.css({
						backgroundImage: "url(" + j.pSrc + ")"
					}), $("#tParentThumb").find("img").show()) : (a.css({
						backgroundImage: "none"
					}), $("#tParentThumb").find("img").hide()), a.css({
						backgroundPosition: j.imgBgp
					}), submitColor(a, RGBToHex(j.bgColor, "")), e(g, j.appID)
				}
			}, {
				appID: "",
				pSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2XNA9apXXXXarXXXXXXXXXXXX_!!39767794.jpg",
				bgColor: "",
				imgBgp: "50% 50%",
				autoSize: "yes",
				href: "#",
				hrefMode: "_blank",
				displayMode: "",
				css3Speed: "0.5s",
				css3Bezier: "",
				css3Mode: "",
				css3MoveMode: "",
				childConfig: []
			}],
			jsb: ['<div class="t-app j-app-qswz" data-dblType="jsb"></div>',
			{
				tTitle: "店内搜索设置",
				tUrl: "search.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachtype='jsbInput']"),
						f = c.children(b.appChildCls + "[data-attachtype='jsbBtn']"),
						g = c.children(b.appChildCls + "[data-attachtype='jsbPricePanel']"),
						h = c.children(b.appChildCls + "[data-attachtype='jsbPriceLow']"),
						i = c.children(b.appChildCls + "[data-attachtype='jsbPriceHigh']");
					checkUrl(a.childConfig[0].searchSrc) ? (c.css({
						backgroundImage: "url(" + a.childConfig[0].searchSrc + ")"
					}), e.css({
						backgroundImage: "url(" + a.childConfig[0].searchSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].searchSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : (c.css({
						backgroundImage: "none"
					}), e.css({
						backgroundImage: "none"
					})), c.css({
						backgroundPosition: a.childConfig[0].imgBgp || "50% 50%"
					}), e.css({
						backgroundPosition: a.childConfig[0].imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.childConfig[0].characterBgColor, "")), submitColor(e, RGBToHex(a.childConfig[0].characterBgColor, "")), checkUrl(a.childConfig[1].searchSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[1].searchSrc + ")"
					}), "yes" == a.childConfig[1].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[1].searchSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), f.css({
						backgroundPosition: a.childConfig[1].imgBgp || "50% 50%"
					}), submitColor(f, RGBToHex(a.childConfig[1].bgColor, "")), e.html(a.childConfig[0].searchText).css({
						width: "100%",
						height: "100%",
						fontSize: b.tParseInt(a.childConfig[0].characterSize) + "px",
						fontWeight: a.childConfig[0].characterWeight,
						fontFamily: a.childConfig[0].characterFont,
						color: a.childConfig[0].characterColor,
						fontStyle: a.childConfig[0].characterStyle || "normal",
						textIndent: b.tParseInt(a.childConfig[0].searchTextSpace) + "px",
						letterSpacing: b.tParseInt(a.childConfig[0].searchTextSpacing) + "px",
						lineHeight: c.height() + "px"
					}), "yes" == a.priceSwitch ? (checkUrl(a.childConfig[2].searchSrc) ? (g.css({
						backgroundImage: "url(" + a.childConfig[2].searchSrc + ")"
					}), "yes" == a.childConfig[2].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[2].searchSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && g.width(b), c && g.height(c)
					})) : g.css({
						backgroundImage: "none"
					}), g.css({
						backgroundPosition: a.childConfig[2].imgBgp || "50% 50%"
					}), submitColor(g, RGBToHex(a.childConfig[2].bgColor, "")), checkUrl(a.childConfig[3].searchSrc) ? (h.css({
						backgroundImage: "url(" + a.childConfig[3].searchSrc + ")"
					}), i.css({
						backgroundImage: "url(" + a.childConfig[3].searchSrc + ")"
					})) : (h.css({
						backgroundImage: "none"
					}), i.css({
						backgroundImage: "none"
					})), h.css({
						backgroundPosition: a.childConfig[3].imgBgp || "50% 50%"
					}), i.css({
						backgroundPosition: a.childConfig[3].imgBgp || "50% 50%"
					}), submitColor(h, RGBToHex(a.childConfig[3].bgColor, "")), submitColor(i, RGBToHex(a.childConfig[3].bgColor, "")), g.show(), h.css({
						fontSize: b.tParseInt(a.childConfig[3].characterSize),
						fontFamily: a.childConfig[3].characterFont,
						color: a.childConfig[3].characterColor,
						lineHeight: h.height() + "px"
					}).show(), i.css({
						fontSize: b.tParseInt(a.childConfig[3].characterSize),
						fontFamily: a.childConfig[3].characterFont,
						color: a.childConfig[3].characterColor,
						lineHeight: i.height() + "px"
					}).show()) : (g.hide(), h.hide(), i.hide()), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-child" data-dblType="jsb" data-attachType="jsbInput"></div><div class="t-app-mongolia" style="z-index:99;"></div><div class="t-app-child" data-dblType="jsb" data-attachType="jsbBtn"></div><div class="t-app-child" data-dblType="jsb" data-attachType="jsbPricePanel"></div><div class="t-app-child june-nonsp" data-dblType="jsb" data-attachType="jsbPriceLow"></div><div class="t-app-child june-nonsp" data-dblType="jsb" data-attachType="jsbPriceHigh"></div>',
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig,
						i = b.setChildPos(a, a.children(b.appChildCls + "[data-attachtype='jsbBtn']"), !0),
						j = b.setChildPos(a, a.children(b.appChildCls + "[data-attachtype='jsbPricePanel']"), !0),
						k = b.setChildPos(a, a.children(b.appChildCls + "[data-attachtype='jsbPriceLow']"), !0),
						l = b.setChildPos(a, a.children(b.appChildCls + "[data-attachtype='jsbPriceHigh']"), !0),
						m = h[0].searchText,
						n = "",
						o = "",
						p = h[0].imgBgp || "50% 50%",
						q = h[1].imgBgp || "50% 50%",
						r = h[2].imgBgp || "50% 50%",
						s = h[3].imgBgp || "50% 50%",
						t = "",
						u = "",
						v = "",
						w = "",
						x = "",
						y = "",
						z = "",
						A = "",
						B = "",
						C = "",
						D = "",
						E = "",
						F = "",
						G = "",
						H = "",
						I = "",
						J = "",
						K = "",
						L = "";
					return c.orderType && "" != c.orderType && (n = '<input type="hidden" name="orderType" class="otype" value="' + c.orderType + '">'), h[0].characterBgColor = RGBToHex(h[0].characterBgColor, ""), "" != h[0].characterBgColor && (x = "background-color:" + h[0].characterBgColor + ";"), h[0].dbdColor = RGBToHex(h[0].dbdColor, ""), B = "" != h[0].dbdColor ? "outline-color:" + h[0].dbdColor + ";" : "outline:none;", h[1].bgColor = RGBToHex(h[1].bgColor, ""), "" != h[1].bgColor && (y = "background-color:" + h[1].bgColor + ";"), checkUrl(h[0].searchSrc) && (t = "background:url(" + h[0].searchSrc + ") " + p + " no-repeat;"), checkUrl(h[1].searchSrc) && (u = "background:url(" + h[1].searchSrc + ") " + q + " no-repeat;"), "yes" == c.priceSwitch && (h[3].characterColor = RGBToHex(h[3].characterColor, ""), "" != h[3].characterColor && (J = "color:" + h[3].characterColor + ";"), "" != h[3].characterFont && (K = "font-family:" + h[3].characterFont + ";"), "" != h[3].characterSize && (L = "font-size:" + b.tParseInt(h[3].characterSize) + "px;"), h[2].bgColor = RGBToHex(h[2].bgColor, ""), "" != h[2].bgColor && (z = "background-color:" + h[2].bgColor + ";"), h[3].bgColor = RGBToHex(h[3].bgColor, ""), "" != h[3].bgColor && (A = "background-color:" + h[3].bgColor + ";"), checkUrl(h[2].searchSrc) && (v = "background:url(" + h[2].searchSrc + ") " + r + " no-repeat;"), checkUrl(h[3].searchSrc) && (w = "background:url(" + h[3].searchSrc + ") " + s + " no-repeat;"), o = '<li class="price"><div class="abs textprice" style="top:' + j.top + "px;left:" + j.left + "px;width:" + j.width + "px;height:" + j.height + "px;" + v + z + '"></div>' + '<input class="abs lowprice" type="text" name="lowPrice" size="4" value="" style="top:' + k.top + "px;left:" + k.left + "px;width:" + k.width + "px;height:" + k.height + "px;line-height:" + k.height + "px;" + w + A + "border:none;" + J + K + L + '">' + '<input class="abs highprice" type="text" name="highPrice" size="4" value="" style="top:' + l.top + "px;left:" + l.left + "px;width:" + l.width + "px;height:" + l.height + "px;line-height:" + l.height + "px;" + w + A + "border:none;" + J + K + L + '"></li>'), h[0].characterColor = RGBToHex(h[0].characterColor, ""), "" != h[0].characterColor && (C = "color:" + h[0].characterColor + ";"), "" != h[0].characterFont && (D = "font-family:" + h[0].characterFont + ";"), "" != h[0].characterWeight && (E = "font-weight:" + h[0].characterWeight + ";"), "" != h[0].characterSize && (F = "font-size:" + b.tParseInt(h[0].characterSize) + "px;"), "italic" == h[0].characterStyle && (G = "font-style:" + h[0].characterStyle + ";"), "" != h[0].searchTextSpace && (H = "text-indent:" + b.tParseInt(h[0].searchTextSpace) + "px;"), "" != h[0].searchTextSpacing && (I = "letter-spacing:" + b.tParseInt(h[0].searchTextSpacing) + "px;"), "" == t && (t = "background:none;"), "" == u && (u = "background:none;"), c.href.indexOf(".com") >= 0 && (c.href = c.href.split(".com")[0] + ".com"), c.href && "" != c.href && (c.href = c.href.replace("http://", "//").replace("https://", "//")), '<form  name="SearchForm" action="' + c.href + '/search.htm" method="get" target="' + c.hrefMode + '" class="jsb searchform abs ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + "px;z-index:10;" + t + x + '"><ul><li><input name="keyword" type="text" class="gjz abs" value="' + c.childConfig[0].searchText + '" style="top:0px;left:0px;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;padding:0;" + t + x + B + "border:none;" + C + D + E + F + G + H + I + '" value="' + m + '" /></li>' + o + '<li><input type="submit" class="ss abs" value="" style="top:' + i.top + "px;left:" + i.left + "px;width:" + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;" + u + y + 'color:#FFF;border:none;cursor:pointer;outline:none;" /></li></ul>' + n + "</form>"
				},
				codeImport: function(a, c, d, e) {
					var y, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = a.children(b.appChildCls + "[data-attachtype='jsbInput']"),
						i = a.children(b.appChildCls + "[data-attachtype='jsbBtn']"),
						j = a.children(b.appChildCls + "[data-attachtype='jsbPricePanel']"),
						k = a.children(b.appChildCls + "[data-attachtype='jsbPriceLow']"),
						l = a.children(b.appChildCls + "[data-attachtype='jsbPriceHigh']"),
						m = d.find("input.gjz").length > 0 ? d.find("input.gjz") : h,
						n = d.find("input.ss").length > 0 ? d.find("input.ss") : i,
						o = d.find("div.textprice").length > 0 ? d.find("div.textprice") : j,
						p = d.find("input.lowprice").length > 0 ? d.find("input.lowprice") : k,
						q = d.find("input.highprice").length > 0 ? d.find("input.highprice") : l,
						r = d.find("input.otype"),
						s = b.setChildPos(a, m, !1),
						t = b.setChildPos(a, n, !0),
						u = b.setChildPos(a, o, !0),
						v = b.setChildPos(a, p, !0),
						w = b.setChildPos(a, q, !0),
						x = {};
					d.find("div.textprice").length > 0 && (x.priceSwitch = "yes", j.show(), k.show(), l.show()), x.orderType = r.length > 0 ? r.val() : "hotsell_desc", x.childConfig = [], x.childConfig[0] = {}, x.childConfig[1] = {}, x.childConfig[2] = {}, x.childConfig[3] = {}, x.childConfig[4] = {}, x.href = (d.attr("action") || "").substr(0, (d.attr("action") || "").length - 10), x.hrefMode = d.attr("target"), x.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), x.childConfig[0].searchSrc = m.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[0].characterBgColor = RGBToHex(m.css("background-color"), ""), x.childConfig[0].imgBgp = m.css("background-position") || "50% 50%", x.childConfig[0].characterSize = m.css("font-size").replace(/px/g, ""), x.childConfig[0].characterFont = m.css("font-family").replace(/'/g, ""), x.childConfig[0].characterColor = RGBToHex(m.css("color")), x.childConfig[0].characterWeight = m.css("font-weight"), "400" == x.childConfig[0].characterWeight && (x.childConfig[0].characterWeight = "normal"), x.childConfig[0].characterStyle = m.css("font-style") || "normal", x.childConfig[0].searchText = m.val() || "", x.childConfig[0].searchTextSpace = m.css("text-indent").replace(/px/g, ""), x.childConfig[0].searchTextSpacing = m.css("letter-spacing").replace(/px/g, ""), x.childConfig[0].dbdColor = RGBToHex(m.css("outline-color")), x.childConfig[1].searchSrc = n.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[1].bgColor = RGBToHex(n.css("background-color"), ""), x.childConfig[1].imgBgp = n.css("background-position") || "50% 50%", x.childConfig[2].searchSrc = o.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[2].bgColor = RGBToHex(o.css("background-color"), ""), x.childConfig[2].imgBgp = o.css("background-position") || "50% 50%", x.childConfig[3].searchSrc = p.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[3].bgColor = RGBToHex(p.css("background-color"), ""), x.childConfig[3].imgBgp = p.css("background-position") || "50% 50%", x.childConfig[3].characterSize = p.css("font-size").replace(/px/g, ""), x.childConfig[3].characterFont = p.css("font-family").replace(/'/g, ""), x.childConfig[3].characterColor = RGBToHex(p.css("color")), checkUrl(x.childConfig[0].searchSrc) ? (a.css({
						backgroundImage: "url(" + x.childConfig[0].searchSrc + ")"
					}), h.css({
						backgroundImage: "url(" + x.childConfig[0].searchSrc + ")"
					})) : (x.childConfig[0].searchSrc = "", a.css({
						backgroundImage: "none"
					}), h.css({
						backgroundImage: "none"
					})), a.css({
						backgroundPosition: x.childConfig[0].imgBgp
					}), h.css({
						backgroundPosition: x.childConfig[0].imgBgp
					}), submitColor(a, RGBToHex(x.childConfig[0].characterBgColor, "")), submitColor(h, RGBToHex(x.childConfig[0].characterBgColor, "")), checkUrl(x.childConfig[1].searchSrc) ? i.css({
						backgroundImage: "url(" + x.childConfig[1].searchSrc + ")"
					}) : (x.childConfig[1].searchSrc = "", i.css({
						backgroundImage: "none"
					})), i.css({
						backgroundPosition: x.childConfig[1].imgBgp
					}), submitColor(i, RGBToHex(x.childConfig[1].bgColor, "")), checkUrl(x.childConfig[2].searchSrc) && j.css({
						backgroundImage: "url(" + x.childConfig[2].searchSrc + ")"
					}), j.css({
						backgroundPosition: x.childConfig[2].imgBgp
					}), submitColor(j, RGBToHex(x.childConfig[2].bgColor, "")), checkUrl(x.childConfig[3].searchSrc) && (k.css({
						backgroundImage: "url(" + x.childConfig[3].searchSrc + ")"
					}), l.css({
						backgroundImage: "url(" + x.childConfig[3].searchSrc + ")"
					})), k.css({
						backgroundPosition: x.childConfig[3].imgBgp
					}), l.css({
						backgroundPosition: x.childConfig[3].imgBgp
					}), submitColor(k, RGBToHex(x.childConfig[3].bgColor, "")), submitColor(l, RGBToHex(x.childConfig[3].bgColor, "")), y = $.extend(!0, f, x), a.attr("data-config", JSON.stringify(y)), a.css({
						width: s.width,
						height: s.height,
						top: s.top,
						left: s.left
					}), h.css({
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
						fontSize: b.tParseInt(x.childConfig[0].characterSize),
						fontWeight: x.childConfig[0].characterWeight,
						fontFamily: x.childConfig[0].characterFont,
						color: x.childConfig[0].characterColor,
						fontStyle: x.childConfig[0].characterStyle || "normal",
						textIndent: b.tParseInt(f.childConfig[0].searchTextSpace) + "px",
						letterSpacing: b.tParseInt(f.childConfig[0].searchTextSpacing) + "px",
						lineHeight: s.height + "px",
						zIndex: 98
					}).html(x.childConfig[0].searchText), i.css({
						width: t.width,
						height: t.height,
						top: t.top,
						left: t.left
					}), j.css({
						width: u.width,
						height: u.height,
						top: u.top,
						left: u.left
					}), k.css({
						width: v.width,
						height: v.height,
						top: v.top,
						left: v.left,
						fontSize: b.tParseInt(x.childConfig[3].characterSize),
						fontFamily: x.childConfig[3].characterFont,
						color: x.childConfig[3].characterColor
					}), l.css({
						width: w.width,
						height: w.height,
						top: w.top,
						left: w.left,
						fontSize: b.tParseInt(x.childConfig[3].characterSize),
						fontFamily: x.childConfig[3].characterFont,
						color: x.childConfig[3].characterColor
					}), a.attr("appID", x.appID), e(g, x.appID)
				}
			}, {
				appID: "",
				href: "",
				hrefMode: "_blank",
				orderType: "hotsell_desc",
				priceSwitch: "no",
				childConfig: [{
					attachID: "",
					searchSrc: "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2nwyGapXXXXbwXpXXXXXXXXXX_!!39767794.png",
					imgBgp: "50% 50%",
					autoSize: "yes",
					searchText: "",
					searchTextSpace: "",
					searchTextSpacing: "",
					characterWeight: "normal",
					characterSize: "12",
					characterFont: "宋体",
					characterColor: "#000000",
					characterStyle: "",
					characterBgColor: "",
					dbdColor: ""
				}, {
					attachID: "",
					searchSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2BoiSapXXXXavXXXXXXXXXXXX_!!39767794.png",
					imgBgp: "50% 50%",
					bgColor: "",
					autoSize: "yes"
				}, {
					attachID: "",
					searchSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2Ypp4aVXXXXXnXpXXXXXXXXXX_!!39767794.png",
					imgBgp: "50% 50%",
					bgColor: "",
					autoSize: "yes"
				}, {
					attachID: "",
					searchSrc: "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2nwyGapXXXXbwXpXXXXXXXXXX_!!39767794.png",
					imgBgp: "50% 50%",
					bgColor: "",
					autoSize: "yes",
					characterSize: "12",
					characterFont: "宋体",
					characterColor: "#000000"
				}, {
					attachID: ""
				}]
			}],
			job: ['<div class="t-app" data-dblType="job"></div>',
			{
				tTitle: "正反面设置",
				tUrl: "oppo.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				codeExport: function(a) {
					var x, y, z, A, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "",
						i = "",
						j = "",
						k = "",
						l = "",
						m = "",
						n = "",
						o = "",
						p = "",
						q = "",
						r = "img",
						s = "/>",
						t = c.imgBgp || "50% 50%",
						u = c.tipText || "",
						v = "",
						w = "ptlink";
					return "" != u && (v = ' title= "' + u + '"'), "gzlink" == c.oppoLinkMode ? ("" != c.attentionID && (n = "j_CollectBrand"), o = 'data-brandid="' + c.attentionID + '"', w = "gzlink", i = "cursor:pointer;") : "wwlink" == c.oppoLinkMode ? ("" == c.wangID && (c.wangID = "yuntu"), c.wangID = c.wangID.replace("：", ":"), c.wangID = encodeURI(c.wangID), c.wangID = c.wangID.replace(":", "%3A"), c.wangID = c.wangID.replace("%20", ""), c.href = "no" == c.shuntMode ? "http://www.taobao.com/webww/ww.php?ver=3&touid=" + c.wangID + "&siteid=cntaobao&status=1&charset=utf-8" : "http://amos.alicdn.com/getcid.aw?v=2&uid=" + c.wangID + "&site=cntaobao&s=2&groupid=0&charset=utf-8", w = "wwlink") : "mdlink" == c.oppoLinkMode ? (c.href = "#" + c.anchorSelect, c.hrefMode = "_self", w = "mdlink") : "gwlink" == c.oppoLinkMode && (q = " J_CartPluginTrigger", c.hrefMode = "", w = "gwlink"), c.hrefMode && "" != c.hrefMode && (p = ' target="' + c.hrefMode + '"'), ("" == c.oppoSrc || c.oppoSrc == c.pSrc) && (m = "display:none;"), x = "", y = "", z = "", A = "", c.oppoEffect && "none" != c.oppoEffect && "" != c.oppoEffect || (c.oppoSpeed = ""), c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (j = "background-color:" + c.bgColor + ";"), h = !checkUrl(c.pSrc) || "http://a.tbcdn.cn/s.gif" == c.pSrc && "https://a.tbcdn.cn/s.gif" == c.pSrc ? b.june.children(".junehtml").length > 0 || b.june.children(b.appCls + "[data-dblType='jzdb']").length > 0 ? "background-image:url(http://a.tbcdn.cn/s.gif);" : "junezxneedcheckembed;" : "background:url(" + c.pSrc + ") " + t + " no-repeat;", checkUrl(c.oppoSrc) ? (k = "background:url(" + c.oppoSrc + ") center center  no-repeat;", l = ' src="' + c.oppoSrc + '"') : c.oppoSpeed = "", "june-box-fadein" == c.oppoEffect ? (z = "display:block;", x = '<div class="jspb" style="width:' + d + "px;height:" + e + 'px;">', y = "</div>", c.oppoEffect = "", A = "june-box-fadein", r = "span", s = ">&nbsp;</span>", l = "") : k = "", '<a href="' + c.href + '" class="job abs imghover ' + c.oppoEffect + " " + c.oppoSpeed + " " + c.appID + " " + n + q + '" data-linkmode="' + w + '" data-appid="' + c.appID + '" ' + o + v + ' style="' + i + "overflow:hidden;" + h + j + "width:" + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;"' + p + ">" + x + "<" + r + ' class="' + c.oppoSpeed + " " + A + '" style="' + z + "width:" + d + "px;height:" + e + "px;" + k + m + '"' + l + " " + s + y + "</a>"
				},
				codeImport: function(a, b, c, d) {
					var j, k, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {},
						h = c.attr("class").split(" "),
						i = h[3];
					g.oppoSpeed = (c.attr("class") || "").indexOf("trans") >= 0 ? c.attr("class").match(/trans(\w+)s/g).join("") : "", g.appID = c.attr("data-appid"), g.pSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.bgColor = RGBToHex(c.css("background-color"), ""), g.imgBgp = c.css("background-position") || "50% 50%", g.href = c.attr("href") || "", g.hrefMode = c.attr("target"), g.oppoLinkMode = c.attr("data-linkmode"), g.attentionID = "", g.wangID = "", g.shuntMode = "no", g.anchorSelect = "", g.oppoSrc = "", !g.href && "" == g.href, j = g.href.split("?"), g.tipText = "", c.attr("title") && "" != c.attr("title") && (g.tipText = c.attr("title")), c.children().hasClass("jspb") ? (c.children().children("span").length > 0 ? (g.oppoSrc = c.children().children("span").css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.oppoSpeed = (c.children().children("span").attr("class") || "").indexOf("trans") >= 0 ? c.children().children("span").attr("class").match(/trans(\w+)s/g).join("") : "") : g.oppoSrc = c.children().children("img").attr("src"), i = "june-box-fadein") : g.oppoSrc = c.children("img").attr("src"), g.oppoSrc && "" != g.oppoSrc || (e.oppoSrc = ""), g.oppoEffect = i, c.hasClass("j_CollectBrand") && (g.oppoLinkMode = "gzlink", g.attentionID = c.attr("data-brandid") || ""), c.hasClass("J_CartPluginTrigger") && (g.oppoLinkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(j[0]) && (wangArr1 = g.href.split("&"), g.oppoLinkMode = "wwlink", g.wangID = wangArr1[1].replace("uid=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID), g.shuntMode = "yes"), new RegExp("taobao.com/webww/ww.php").test(j[0]) && (wangArr1 = g.href.split("&"), g.oppoLinkMode = "wwlink", g.wangID = wangArr1[1].replace("touid=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID)), "mdlink" == g.oppoLinkMode && (g.anchorSelect = g.href.replace("#", ""), g.href = ""), k = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(k)), checkUrl(g.pSrc) ? a.css({
						backgroundImage: "url(" + g.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: g.imgBgp
					}), submitColor(a, RGBToHex(g.bgColor, "")), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				pSrc: "http://img03.taobaocdn.com/imgextra/i3/394695430/T2RcoLXoVaXXXXXXXX_!!394695430.jpg",
				imgBgp: "50% 50%",
				tipText: "",
				bgColor: "",
				autoSize: "yes",
				oppoSrc: "http://img01.taobaocdn.com/imgextra/i1/394695430/T2qoZcXbtbXXXXXXXX_!!394695430.jpg",
				href: "#",
				hrefMode: "_blank",
				attentionID: "",
				wangID: "",
				shuntMode: "no",
				oppoEffect: "june-box-fadein",
				oppoSpeed: "trans05s",
				oppoLinkMode: "ptlink",
				anchorSelect: "",
				popupConfig: {
					pSwitch: "no",
					popupPosition: "'tr','tl'",
					spaceX: "0",
					spaceY: "0",
					css3Mode: "",
					css3Bezier: "",
					css3Speed: "0.5s",
					popupHtml: ""
				}
			}],
			jbob: ['<div class="t-app" data-dblType="jbob"></div>',
			{
				tTitle: "切片正反面设置",
				tUrl: "bigoppo.htm",
				tSubmit: function(a, c) {
					var e, d = require("scripts/tAjax");
					if (checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), a.childConfig && a.childConfig.length > 0) for (e = 0; e < a.childConfig.length; e++) b.setPopupContent(a.childConfig[e], !0, a.appID);
					c.attr("data-config", JSON.stringify(a))
				},
				tDynamic: '<div class="t-app-child" data-dblType="jbob" data-attachType="jbobChild" style="background-color:rgba(64, 127, 255, 0.3);"></div>',
				tDynamicConfig: {
					attachID: "",
					linkMode: "ptlink",
					href: "#",
					hrefMode: "_blank",
					attentionID: "",
					wangID: "",
					tipText: "",
					shuntMode: "no",
					anchorSelect: "",
					popupConfig: {
						pSwitch: "no",
						popupPosition: "'tr','tl'",
						spaceX: "0",
						spaceY: "0",
						css3Mode: "",
						css3Bezier: "",
						css3Speed: "0.5s",
						popupHtml: ""
					}
				},
				codeExport: function(a) {
					var r, s, t, u, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig,
						i = "",
						j = "",

						k = "",
						l = "",
						n = c.imgBgp || "50% 50%",
						o = "img",
						p = "/>",
						q = "";
					return ("" == c.oppoSrc || c.oppoSrc == c.pSrc) && (q = "display:none;"), r = "", s = "", t = "", u = "", "june-box-fadein" == c.oppoEffect ? (t = "display:block;", r = '<div class="jspb" style="width:' + d + "px;height:" + e + 'px;">', s = "</div>", c.oppoEffect = "", u = "june-box-fadein", o = "span", p = ">&nbsp;</span>") : c.oppoSpeed = "", c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (k = "background-color:" + c.bgColor + ";"), checkUrl(c.pSrc) && (j = "background:url(" + c.pSrc + ") " + n + "  no-repeat;"), checkUrl(c.oppoSrc) && (l = "background:url(" + c.oppoSrc + ") " + n + "  no-repeat;"), a.children(b.appChildCls).each(function(a) {
						var g = "",
							j = "",
							k = "ptlink",
							m = "",
							n = "",
							v = "",
							w = b.tParseInt($(this).css("top")),
							x = b.tParseInt($(this).css("left")),
							y = $(this).width(),
							z = $(this).height(),
							A = h[a].tipText || "",
							B = "";
						"" != A && (B = ' title= "' + A + '"'), "gzlink" == h[a].linkMode ? ("" != h[a].attentionID && (g = "j_CollectBrand"), j = 'data-brandid="' + h[a].attentionID + '"', k = "gzlink") : "wwlink" == h[a].linkMode ? ("" == h[a].wangID && (h[a].wangID = "yuntu"), h[a].wangID = h[a].wangID.replace("：", ":"), h[a].wangID = encodeURI(h[a].wangID), h[a].wangID = h[a].wangID.replace(":", "%3A"), h[a].wangID = h[a].wangID.replace("%20", ""), h[a].href = "no" == h[a].shuntMode ? "http://www.taobao.com/webww/ww.php?ver=3&touid=" + h[a].wangID + "&siteid=cntaobao&status=1&charset=utf-8" : "http://amos.alicdn.com/getcid.aw?v=2&uid=" + h[a].wangID + "&site=cntaobao&s=2&groupid=0&charset=utf-8", k = "wwlink") : "mdlink" == h[a].linkMode ? (h[a].href = "#" + h[a].anchorSelect, h[a].hrefMode = "_self", k = "mdlink") : "gwlink" == h[a].linkMode && (n = " J_CartPluginTrigger", h[a].hrefMode = "", k = "gwlink"), h[a].hrefMode && "" != h[a].hrefMode && (v = ' target="' + h[a].hrefMode + '"'), checkUrl(c.oppoSrc) && (m = "background-position: -" + x + "px -" + w + "px;"), i += '<a href="' + h[a].href + '" class="jbocb abs imghover ' + c.oppoEffect + " " + c.oppoSpeed + " " + h[a].attachID + " " + g + n + '" data-linkmode="' + k + '" data-appid="' + h[a].attachID + '" ' + j + B + ' style="overflow:hidden;width:' + y + "px;height:" + z + "px;top:" + w + "px;left:" + x + 'px;"' + v + ">" + r + "<" + o + ' class="' + c.oppoSpeed + " " + u + '" style="' + t + "width:" + d + "px;height:" + e + "px;" + l + m + q + '" src="http://a.tbcdn.cn/s.gif" ' + p + s + "</a>"
					}), '<div class="abs jbob ' + c.appID + '" data-appid="' + c.appID + '" style="overflow:hidden;' + j + k + "width:" + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;">' + i + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var j, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = !1;
					h.appID = d.attr("data-appid"), h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.childConfig = [], a.attr("appID", h.appID), d.children("a.jbocb").each(function() {
						var j, k, l, m, f = $(this),
							g = {};
						g.href = f.attr("href") || "", g.hrefMode = f.attr("target"), g.linkMode = f.attr("data-linkmode"), g.wangID = "", g.shuntMode = "no", g.anchorSelect = "", j = g.href.split("?"), g.attachID = f.attr("data-appid"), g.attentionID = "", g.tipText = "", f.attr("title") && "" != f.attr("title") && (g.tipText = f.attr("title")), i || (k = $(this).attr("class").split(" "), l = k[3], h.oppoSpeed = k[4], f.children().hasClass("jspb") ? (h.oppoSrc = f.children().children("span").length > 0 ? f.children().children("span").css("background-image").replace(/^url|[\(\"\)]*/g, "") : f.children().children("img").css("background-image").replace(/^url|[\(\"\)]*/g, ""), l = "june-box-fadein") : h.oppoSrc = f.children("span").length > 0 ? f.children("span").css("background-image").replace(/^url|[\(\"\)]*/g, "") : f.children("img").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.oppoEffect = l, i = !0), f.hasClass("j_CollectBrand") && (g.linkMode = "gzlink", g.attentionID = f.attr("data-brandid") || ""), f.hasClass("J_CartPluginTrigger") && (g.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(j[0]) && (wangArr1 = g.href.split("&"), g.linkMode = "wwlink", g.wangID = wangArr1[1].replace("uid=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID), g.shuntMode = "yes"), new RegExp("taobao.com/webww/ww.php").test(j[0]) && (wangArr1 = g.href.split("&"), g.linkMode = "wwlink", g.wangID = wangArr1[1].replace("touid=", ""), g.wangID = g.wangID.replace("%3A", ":"), g.wangID = decodeURI(g.wangID)), "mdlink" == g.linkMode && (g.anchorSelect = g.href.replace("#", ""), g.href = ""), g.popupConfig = {
							pSwitch: "no",
							popupPosition: "'tr','tl'",
							spaceX: "0",
							spaceY: "0",
							css3Mode: "",
							css3Bezier: "",
							css3Speed: "0.5s",
							popupHtml: ""
						}, m = b.getChildPos(d, f, !0), h.childConfig.push(g), $('<div class="t-app-child" data-dblType="jbob" data-attachType="jbobChild" style="background-color:rgba(64, 127, 255, 0.3);left:' + m.left + "px;top:" + m.top + "px;width:" + m.width + "px;height:" + m.height + 'px;"></div>').tResize().appendTo(a).attr("appID", h.appID).attr("attachID", g.attachID), b.createAppName("jbobChild", h.appID, g.attachID), g = null
					}), j = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(j)), checkUrl(h.pSrc) && a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), e(g, h.appID)
				}
			}, {
				appID: "",
				pSrc: "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2KengaFXXXXcnXXXXXXXXXXXX_!!39767794.jpg",
				bgColor: "",
				autoSize: "yes",
				oppoSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2hzzcaFXXXXbgXpXXXXXXXXXX_!!39767794.jpg",
				imgBgp: "50% 50%",
				oppoEffect: "june-box-fadein",
				oppoSpeed: "trans05s",
				childConfig: []
			}],
			jwb: ['<div class="t-app j-app-qswz" data-dblType="jwb"></div>',
			{
				tTitle: "旺旺设置",
				tUrl: "wang.htm",
				tSubmit: function(a, c) {
					var e = (c.children(b.appOtherCls), c.children(".t-wang-text"));
					"2" == a.wangMode ? c.children(b.appOtherCls).removeClass("t-wang-big").addClass("t-wang-small") : c.children(b.appOtherCls).removeClass("t-wang-small").addClass("t-wang-big"), e.css({
						color: a.characterColor,
						backgroundColor: a.characterBgColor,
						fontSize: b.tParseInt(a.characterSize),
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						fontStyle: a.characterStyle || "normal"
					}).html(a.wangNickName), a.wangNickName && "" != a.wangNickName || e.html("&nbsp;"), c.children(b.appOtherCls).height(c.children(".t-wang-text").height()), c.css({
						width: "auto",
						height: "auto"
					}), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<span class="t-app-other t-wang-small"></span><span class="t-wang-text">璇子</span>',
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "",
						i = "",
						j = "",
						k = "",
						l = "",
						m = "",
						n = c.tipText || "",
						o = "",
						p = "padding-left:16px;";
					return "1" == c.wangMode && (p = "padding-left:77px;"), "" != n && (o = ' title= "' + n + '"'), "" == c.wangID && (c.wangID = "yuntu"), c.wangID = c.wangID.replace("：", ":"), c.wangID = encodeURI(c.wangID), c.wangID = c.wangID.replace(":", "%3A"), c.wangID = c.wangID.replace("%20", ""), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (h = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (i = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (j = "font-family:" + c.characterFont + ";"), "bold" == c.characterWeight && (k = "font-weight:" + c.characterWeight + ";"), "italic" == c.characterStyle && (l = "font-style:" + c.characterStyle + ";"), "" != c.characterSize && (m = "font-size:" + b.tParseInt(c.characterSize) + "px;"), c.wangNickName && "" != c.wangNickName || (c.wangNickName = "&nbsp;"), wangImg = '<div><a target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&touid=' + c.wangID + '&siteid=cntaobao&status=1&charset=utf-8" style="background:url(http://amos.alicdn.com/realonline.aw?v=2&uid=' + c.wangID + "&site=cntaobao&s=" + c.wangMode + "&charset=utf-8) left center no-repeat;" + h + i + j + k + l + m + p + 'display:block;white-space:nowrap;" title="点击这里给我发消息">' + c.wangNickName + "</a></div>", "1" == c.shuntMode && (wangImg = '<div><a target="_blank" href="http://amos.alicdn.com/getcid.aw?v=2&uid=' + c.wangID + '&site=cntaobao&s=2&groupid=0&charset=utf-8" style="background:url(http://amos.alicdn.com/online.aw?v=2&uid=' + c.wangID + "&site=cntaobao&s=" + c.wangMode + "&charset=utf-8) left center no-repeat;" + h + i + j + k + l + m + p + 'display:block;white-space:nowrap;" title="点击这里给我发消息">' + c.wangNickName + "</a></div>"), '<div class="jwb abs ' + c.appID + '" data-appid="' + c.appID + '"' + o + ' style="overflow:hidden;text-align:center;width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;line-height:" + e + 'px;z-index:10;">' + wangImg + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var i, j, k, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					i = 0 == d.find("img").length ? d.children("div").children("a").css("background-image").split("&") : d.find("img").attr("src").split("&"), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.shuntMode = 1, h.wangID = i[1].split("=")[1], h.wangID = h.wangID.replace("%3A", ":"), h.wangID = decodeURI(h.wangID), h.wangMode = i[3].split("=")[1], j = d, d.children("div").length > 0 && d.children("div").children("a").length > 0 && (j = d.children("div").children("a")), h.wangNickName = j.html().replace(/<[^>]+>/g, ""), (" " == h.wangNickName || "&nbsp;" == h.wangNickName) && (h.wangNickName = ""), h.characterSize = j.css("font-size").replace(/px/g, ""), h.characterFont = j.css("font-family").replace(/'/g, ""), h.characterStyle = j.css("font-style") || "normal", h.characterColor = RGBToHex(j.css("color")), h.characterBgColor = RGBToHex(j.css("background-color"), ""), h.characterWeight = j.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), new RegExp("realonline").test(i[0]) && (h.shuntMode = 2), k = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(k)), "1" == h.wangMode && a.children(b.appOtherCls).removeClass("t-wang-small").addClass("t-wang-big"), a.children(".t-wang-text").css({
						color: k.characterColor,
						backgroundColor: k.characterBgColor,
						fontSize: b.tParseInt(k.characterSize),
						fontWeight: k.characterWeight,
						fontFamily: k.characterFont,
						fontStyle: k.characterStyle || "normal"
					}).html(h.wangNickName), h.wangNickName && "" != h.wangNickName || a.children(".t-wang-text").html("&nbsp;"), a.children(b.appOtherCls).height(a.children(".t-wang-text").height()), a.css({
						width: "auto",
						height: "auto"
					}), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				wangID: "",
				wangMode: "2",
				shuntMode: "2",
				wangNickName: "璇子",
				tipText: "",
				characterColor: "#000000",
				characterBgColor: "",
				characterSize: "12",
				characterFont: "宋体",
				characterWeight: "normal",
				characterStyle: "normal"
			}],
			jwwb: ['<div class="t-app j-app-qswz" data-dblType="jwwb"></div>',
			{
				tTitle: "旺旺群设置",
				tUrl: "wanggroup.htm",
				tSubmit: function(a, c) {
					var e = (c.children(b.appOtherCls), c.children(".t-wang-text"));
					c.children(b.appOtherCls).removeClass("t-wanggroup-1 t-wanggroup-2 t-wanggroup-3 t-wanggroup-4").addClass("t-wanggroup-" + a.wangMode), e.css({
						color: a.characterColor,
						backgroundColor: a.characterBgColor,
						fontSize: b.tParseInt(a.characterSize),
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						fontStyle: a.characterStyle || "normal"
					}).html(a.wangNickName), a.wangNickName && "" != a.wangNickName || e.html("&nbsp;"), c.children(b.appOtherCls).height(c.children(".t-wang-text").height()), c.css({
						width: "auto",
						height: "auto"
					}), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<span class="t-app-other t-wanggroup-2"></span><span class="t-wang-text">云图设计</span>',
				codeExport: function(a) {
					var r, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.wangMode,
						i = c.tipText || "",
						j = "",
						k = "",
						l = "",
						m = "",
						n = "",
						o = "",
						p = "",
						q = "padding-left:63px;";
					return "" != i && (j = ' title= "' + i + '"'), c.wangID = c.wangID.replace("：", ":"), c.wangID = encodeURI(c.wangID), c.wangID = c.wangID.replace(":", "%3A"), c.wangID = c.wangID.replace("%20", ""), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (k = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (l = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (m = "font-family:" + c.characterFont + ";"), "bold" == c.characterWeight && (n = "font-weight:" + c.characterWeight + ";"), "italic" == c.characterStyle && (o = "font-style:" + c.characterStyle + ";"), "" != c.characterSize && (p = "font-size:" + b.tParseInt(c.characterSize) + "px;"), c.wangNickName && "" != c.wangNickName || (c.wangNickName = "&nbsp;"), 1 == h ? r = "http://img04.taobaocdn.com/tps/i4/T1fdykXgtiXXXXXXXX-63-20.gif" : 2 == h ? (q = "padding-left:25px;", r = "http://img02.taobaocdn.com/tps/i2/T1m206XhdDXXXXXXXX-25-20.gif") : 3 == h ? (q = "padding-left:84px;", r = "http://img01.taobaocdn.com/tps/i1/T1o2J6XoFFXXXXXXXX-84-33.gif") : 4 == h && (q = "padding-left:42px;", r = "http://img03.taobaocdn.com/tps/i3/T1QLB6XgVDXXXXXXXX-42-33.gif"), wangImg = '<div><a target="_blank" href="http://www.taobao.com/go/act/other/wwgroup.php?uid=&tribeid=' + c.wangID + '" style="' + k + l + m + n + o + p + q + "background:url(" + r + ') left center no-repeat;display:block;white-space:nowrap;" title="点击这里给我发消息">' + c.wangNickName + "</a></div>", '<div class="jwwb abs ' + c.appID + '"' + j + ' style="overflow:hidden;text-align:center;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;" data-qmd="' + h + '" data-qid="' + c.wangID + '" data-appid="' + c.appID + '">' + wangImg + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var i, j, k, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					i = 0 == d.find("img").length ? d.children("div").children("a").css("background-image").split("&") : d.find("img").attr("src").split("&"), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.wangID = d.attr("data-qid"), h.wangID = h.wangID.replace("%3A", ":"), h.wangID = decodeURI(h.wangID), h.wangMode = d.attr("data-qmd"), j = d, d.children("div").length > 0 && d.children("div").children("a").length > 0 && (j = d.children("div").children("a")), h.wangNickName = j.html().replace(/<[^>]+>/g, ""), (" " == h.wangNickName || "&nbsp;" == h.wangNickName) && (h.wangNickName = ""), h.characterSize = j.css("font-size").replace(/px/g, ""), h.characterFont = j.css("font-family").replace(/'/g, ""), h.characterStyle = j.css("font-style") || "normal", h.characterColor = RGBToHex(j.css("color")), h.characterBgColor = RGBToHex(j.css("background-color"), ""), h.characterWeight = j.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), k = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(k)), "2" != h.wangMode && a.children(b.appOtherCls).removeClass("t-wanggroup-2").addClass("t-wanggroup-" + h.wangMode), a.children(".t-wang-text").css({
						color: h.characterColor,
						backgroundColor: k.characterBgColor,
						fontSize: b.tParseInt(k.characterSize),
						fontWeight: k.characterWeight,
						fontFamily: k.characterFont,
						fontStyle: k.characterStyle || "normal"
					}).html(h.wangNickName), h.wangNickName && "" != h.wangNickName || a.children(".t-wang-text").html("&nbsp;"), a.children(b.appOtherCls).height(a.children(".t-wang-text").height()), a.css({
						width: "auto",
						height: "auto"
					}), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				wangID: "",
				wangMode: "2",
				wangNickName: "云图设计",
				tipText: "",
				characterColor: "#000000",
				characterBgColor: "",
				characterSize: "12",
				characterFont: "宋体",
				characterWeight: "normal",
				characterStyle: "normal"
			}],
			jcb: ['<div class="t-app j-app-qswz" data-dblType="jcb"></div>',
			{
				tTitle: "文字设置",
				tUrl: "character.htm",
				tSubmit: function(a, c) {
					var d = require("scripts/allwzset");
					b.setPopupContent(a), d.allSubmit(a, c)
				},
				tContent: "请双击设置文字内容",
				codeExport: function(a) {
					var b = require("scripts/allwzset"),
						c = JSON.parse(a.attr("data-config")),
						d = b.allExport(a);
					return '<div class="jcb abs ' + c.appID + d
				},
				codeImport: function(a, b, c, d) {
					var e = require("scripts/allwzset");
					e.allImport(a, b, c, d)
				}
			}, {
				appID: "",
				href: "#",
				hrefMode: "_blank",
				tipText: "",
				characterLineMulti: "no",
				characterLineHeight: "",
				characterLineContent: "",
				characterLineAlign: "left",
				characterLineSpace: "",
				characterTBpadding: "",
				characterLetterSpacing: "",
				characterContent: "",
				characterMode: "text",
				characterItemContent: "",
				characterFixed: "2",
				characterHoverMode: "off",
				characterHoverSpeed: "",
				characterSizeHover: "12",
				characterWeightHover: "normal",
				characterFontHover: "宋体",
				characterColorHover: "#000000",
				characterBgSrcHover: "",
				characterBgColorHover: "",
				characterUnderLine: "off",
				characterUnderLineStyle: "solid",
				characterUnderLineWeight: "1",
				characterUnderLineColor: "#000000",
				characterWeight: "normal",
				characterStyle: "normal",
				characterLineUnder: "",
				characterLineThrough: "",
				characterWidthMode: "normal",
				characterAlign: "center",
				characterFont: "宋体",
				characterSize: "12",
				characterColor: "#000000",
				characterBgColor: "",
				characterLeftPadding: "",
				characterRightPadding: "",
				characterBgSrc: "",
				borderControl: "",
				borderColor: "#000000",
				borderWidth: "1",
				borderRadius: "0",
				shadowControl: "",
				shadowLeft: "0",
				shadowTop: "0",
				shadowBlur: "5",
				shadowSize: "0",
				shadowColor: "#666666",
				shadowStyle: "",
				borderControl1: "",
				borderColor1: "#000000",
				borderWidth1: "1",
				borderRadius1: "0",
				shadowControl1: "",
				shadowLeft1: "0",
				shadowTop1: "0",
				shadowBlur1: "5",
				shadowSize1: "0",
				shadowColor1: "#666666",
				shadowStyle1: "",
				outlineControl: "",
				outlineWidth: "juneol",
				outlineSpeed: "trans02s",
				outlineColor: "#FFFFFF",
				outlineShadowColor: "#666666",
				popupConfig: {
					pSwitch: "no",
					popupPosition: "'tr','tl'",
					spaceX: "0",
					spaceY: "0",
					css3Mode: "",
					css3Bezier: "",
					css3Speed: "0.5s",
					popupHtml: ""
				}
			}],
			jdlb: ['<div class="t-app" data-dblType="jdlb"></div>',
			{
				tTitle: "段落设置",
				tUrl: "paragraph.php",
				tSubmit: function(a, c) {
					b.setPopupContent(a), c.attr("data-config", JSON.stringify(a)).html(a.paragraphContent).css({
						lineHeight: a.paragraphLineHeight + "px",
						textIndent: a.paragraphIndent + "px",
						fontSize: b.tParseInt(a.paragraphSize),
						fontWeight: a.paragraphWeight,
						fontFamily: a.paragraphFont,
						color: a.paragraphColor
					}).tResize()
				},
				tContent: "请双击设置段落内容",
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "",
						i = "",
						j = "",
						k = "",
						l = "",
						m = "",
						n = "";
					return c.paragraphColor = RGBToHex(c.paragraphColor, ""), "" != c.paragraphColor && (i = "color:" + c.paragraphColor + ";"), "" != c.paragraphFont && (j = "font-family:" + c.paragraphFont + ";"), "" != c.paragraphWeight && (k = "font-weight:" + c.paragraphWeight + ";"), "" != c.paragraphSize && (l = "font-size:" + b.tParseInt(c.paragraphSize) + "px;"), "" != c.paragraphLineHeight && (m = "line-height:" + b.tParseInt(c.paragraphLineHeight) + "px;"), "" != c.paragraphIndent && (n = "text-indent:" + b.tParseInt(c.paragraphIndent) + "px;"), "" != c.href && (h = ' href="' + c.href + '"'), '<div class="jdlb abs ' + c.appID + '" data-appid="' + c.appID + '" style="overflow:hidden;width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;"><a class="abs"' + h + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + i + j + k + l + m + n + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + c.paragraphContent + "</a></div>"
				},
				codeImport: function(a, c, d, e) {
					var i, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					h.appID = d.attr("data-appid"), h.href = d.children("a:eq(0)").attr("href") || "", h.hrefMode = d.children("a:eq(0)").attr("target"), h.paragraphContent = d.children("a:eq(0)").html(), h.paragraphLineHeight = d.children("a:eq(0)").css("line-height").replace(/px/g, ""), h.paragraphIndent = d.children("a:eq(0)").css("text-indent").replace(/px/g, ""), h.paragraphSize = d.children("a:eq(0)").css("font-size").replace(/px/g, ""), h.paragraphFont = d.children("a:eq(0)").css("font-family").replace(/'/g, ""), h.paragraphColor = RGBToHex(d.children("a:eq(0)").css("color")), h.paragraphWeight = d.children("a:eq(0)").css("font-weight"), "400" == h.paragraphWeight && (h.paragraphWeight = "normal"), i = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(i)).html(h.paragraphContent).css({
						lineHeight: h.paragraphLineHeight + "px",
						textIndent: h.paragraphIndent + "px",
						fontSize: b.tParseInt(h.paragraphSize),
						fontWeight: h.paragraphWeight,
						fontFamily: h.paragraphFont,
						color: h.paragraphColor
					}).tResize(), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				href: "#",
				hrefMode: "_blank",
				paragraphContent: "",
				paragraphLineHeight: "24",
				paragraphIndent: "0",
				paragraphSize: "12",
				paragraphWeight: "normal",
				paragraphFont: "宋体",
				paragraphColor: "#000000",
				popupConfig: {
					pSwitch: "no",
					popupPosition: "'tr','tl'",
					spaceX: "0",
					spaceY: "0",
					css3Mode: "",
					css3Bezier: "",
					css3Speed: "0.5s",
					popupHtml: ""
				}
			}],
			jcdb: ['<div class="t-app" data-dblType="jcdb"></div>',
			{
				tTitle: "倒计时设置",
				tUrl: "countdown.php",
				tSubmit: function(a, c) {
					var d = c.children(b.appChildCls + "[data-attachType='jcdbDay']"),
						e = c.children(b.appChildCls + "[data-attachType='jcdbHour']"),
						f = c.children(b.appChildCls + "[data-attachType='jcdbMinute']"),
						g = c.children(b.appChildCls + "[data-attachType='jcdbSecond']"),
						h = c.children(b.appOtherCls + ":eq(0)"),
						i = c.children(b.appOtherCls + ":eq(1)"),
						j = require("scripts/tAjax"),
						k = a.contentType || "imgContent",
						l = a.customContent || "",
						m = a.startContent || "";
					"imgContent" == k ? (h.html(""), checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && j.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					})) : (c.css({
						backgroundImage: "none"
					}), h.html(l)), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), "" != m && i.html(m), "yes" == a.childConfig[0].displayMode ? (d.css({
						color: a.childConfig[0].characterColor,
						backgroundColor: RGBToHex(a.childConfig[0].characterBgColor, ""),
						fontSize: b.tParseInt(a.childConfig[0].characterSize) + "px",
						fontWeight: a.childConfig[0].characterWeight,
						fontFamily: a.childConfig[0].characterFont,
						fontStyle: a.childConfig[0].characterStyle || "normal",
						letterSpacing: b.tParseInt(a.childConfig[0].characterLetterSpacing) + "px"
					}).show(), "italic" == a.childConfig[0].characterStyle ? d.css({
						paddingLeft: b.tParseInt(a.childConfig[0].characterSize / 8),
						paddingRight: b.tParseInt(a.childConfig[0].characterSize / 8)
					}) : d.css({
						paddingLeft: 0,
						paddingRight: 0
					})) : d.hide(), "yes" == a.childConfig[1].displayMode ? (e.css({
						color: a.childConfig[1].characterColor,
						backgroundColor: RGBToHex(a.childConfig[1].characterBgColor, ""),
						fontSize: b.tParseInt(a.childConfig[1].characterSize) + "px",
						fontWeight: a.childConfig[1].characterWeight,
						fontFamily: a.childConfig[1].characterFont,
						fontStyle: a.childConfig[1].characterStyle || "normal",
						letterSpacing: b.tParseInt(a.childConfig[1].characterLetterSpacing) + "px"
					}).show(), "italic" == a.childConfig[1].characterStyle ? e.css({
						paddingLeft: b.tParseInt(a.childConfig[1].characterSize / 8),
						paddingRight: b.tParseInt(a.childConfig[1].characterSize / 8)
					}) : e.css({
						paddingLeft: 0,
						paddingRight: 0
					})) : e.hide(), "yes" == a.childConfig[2].displayMode ? (f.css({
						color: a.childConfig[2].characterColor,
						backgroundColor: RGBToHex(a.childConfig[2].characterBgColor, ""),
						fontSize: b.tParseInt(a.childConfig[2].characterSize) + "px",
						fontWeight: a.childConfig[2].characterWeight,
						fontFamily: a.childConfig[2].characterFont,
						fontStyle: a.childConfig[2].characterStyle || "normal",
						letterSpacing: b.tParseInt(a.childConfig[2].characterLetterSpacing) + "px"
					}).show(), "italic" == a.childConfig[2].characterStyle ? f.css({
						paddingLeft: b.tParseInt(a.childConfig[2].characterSize / 8),
						paddingRight: b.tParseInt(a.childConfig[2].characterSize / 8)
					}) : f.css({
						paddingLeft: 0,
						paddingRight: 0
					})) : f.hide(), "yes" == a.childConfig[3].displayMode ? (g.css({
						color: a.childConfig[3].characterColor,
						backgroundColor: RGBToHex(a.childConfig[3].characterBgColor, ""),
						fontSize: b.tParseInt(a.childConfig[3].characterSize) + "px",
						fontWeight: a.childConfig[3].characterWeight,
						fontFamily: a.childConfig[3].characterFont,
						fontStyle: a.childConfig[3].characterStyle || "normal",
						letterSpacing: b.tParseInt(a.childConfig[3].characterLetterSpacing) + "px"
					}).show(), "italic" == a.childConfig[3].characterStyle ? g.css({
						paddingLeft: b.tParseInt(a.childConfig[3].characterSize / 8),
						paddingRight: b.tParseInt(a.childConfig[3].characterSize / 8)
					}) : g.css({
						paddingLeft: 0,
						paddingRight: 0
					})) : g.hide(), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div><div class="abs t-app-other t-app-custom" style="top:0;"></div><div class="t-app-child j-app-qswz" data-dblType="jcdb" data-attachType="jcdbDay">00</div><div class="t-app-child j-app-qswz" data-dblType="jcdb" data-attachType="jcdbHour">00</div><div class="t-app-child j-app-qswz" data-dblType="jcdb" data-attachType="jcdbMinute">00</div><div class="t-app-child j-app-qswz" data-dblType="jcdb" data-attachType="jcdbSecond">00</div>',
				codeExport: function(a) {
					var C, D, E, F, I, J, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig,
						i = a.children(b.appChildCls + "[data-attachType='jcdbDay']"),
						j = a.children(b.appChildCls + "[data-attachType='jcdbHour']"),
						k = a.children(b.appChildCls + "[data-attachType='jcdbMinute']"),
						l = a.children(b.appChildCls + "[data-attachType='jcdbSecond']"),
						m = c.contentType || "imgContent",
						n = c.customContent || "",
						o = c.endTimeType || "endTime",
						p = c.endTime,
						q = c.endTime1 || "",
						r = c.endTime2 || "",
						s = 1,
						t = c.startContent || "",
						u = c.endContent || "",
						v = "",
						w = "",
						x = "",
						y = "",
						z = "",
						A = "",
						B = "",
						K = c.imgBgp || "50% 50%",
						L = (new Date).valueOf().toString().substr(7, 6),
						M = "",
						N = "";
					return "endTime1" == o && (p = 1e3 * b.tParseInt(q)), "endTime2" == o && (s = b.tParseInt(c.endTime2Cycle || "1")), I = ' data-t="' + o + '"', J = ' data-c="' + s + '"', "endTime2" == o && (p = (new Date).Format("yyyy-MM-dd", 0, s) + " " + r), "" != t && (w = '<div class="abs jcdbstart0 jcdbstart' + L + '" style="top:0;width:100%;">' + t + "</div>"), "" != u && (x = '<div class="abs jcdbend0 jcdbend' + L + '" style="top:0;width:100%;display:none;">' + u + "</div>"), "imgContent" == m ? (c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (N = "background-color:" + c.bgColor + ";"), checkUrl(c.pSrc) && (M = "background:url(" + c.pSrc + ") " + K + " no-repeat;")) : v = '<div class="rel jcdbcus" style="width:100%;height:100%;">' + n + "</div>", "yes" == h[0].displayMode && (C = b.setChildPos(a, i, !0), Q = "", R = "", S = "", T = "", U = "", V = "", W = "", X = 0, h[0].characterColor = RGBToHex(h[0].characterColor, ""), "" != h[0].characterColor && (Q = "color:" + h[0].characterColor + ";"), h[0].characterBgColor = RGBToHex(h[0].characterBgColor, ""), "" != h[0].characterBgColor && (W = "background-color:" + h[0].characterBgColor + ";"), "" != h[0].characterFont && (R = "font-family:" + h[0].characterFont + ";"), "" != h[0].characterWeight && (S = "font-weight:" + h[0].characterWeight + ";"), "" != h[0].characterSize && (T = "font-size:" + b.tParseInt(h[0].characterSize) + "px;"), "" != h[0].characterLetterSpacing && (U = "letter-spacing:" + b.tParseInt(h[0].characterLetterSpacing) + "px;"), "italic" == h[0].characterStyle && (V = "font-style:" + h[0].characterStyle + ";"), "italic" == h[0].characterStyle && (X = b.tParseInt(h[0].characterSize / 4)), y = '<span class="abs ks-d ksd' + L + '" style="display:block;text-align:center;width:' + (C.width + X) + "px;height:" + C.height + "px;line-height:" + C.height + "px;left:" + C.left + "px;top:" + C.top + "px;" + Q + R + S + T + U + V + W + '">00</span>'), "endTime2" == o && (y = '<span class="abs ks-d ksd' + L + '" style="display:none;visibility :hidden;">00</span>'), "yes" == h[1].displayMode && (D = b.setChildPos(a, j, !0), Y = "", Z = "", $ = "", _ = "", ab = "", bb = "", cb = "", db = 0, h[1].characterColor = RGBToHex(h[1].characterColor, ""), "" != h[1].characterColor && (Y = "color:" + h[1].characterColor + ";"), h[1].characterBgColor = RGBToHex(h[1].characterBgColor, ""), "" != h[1].characterBgColor && (cb = "background-color:" + h[1].characterBgColor + ";"), "" != h[1].characterFont && (Z = "font-family:" + h[1].characterFont + ";"), "" != h[1].characterWeight && ($ = "font-weight:" + h[1].characterWeight + ";"), "" != h[1].characterSize && (_ = "font-size:" + b.tParseInt(h[1].characterSize) + "px;"), "" != h[1].characterLetterSpacing && (ab = "letter-spacing:" + b.tParseInt(h[1].characterLetterSpacing) + "px;"), "italic" == h[1].characterStyle && (bb = "font-style:" + h[1].characterStyle + ";"), "italic" == h[1].characterStyle && (db = b.tParseInt(h[1].characterSize / 4)), z = '<span class="abs ks-h ksh' + L + '" style="display:block;text-align:center;width:' + (D.width + db) + "px;height:" + D.height + "px;line-height:" + D.height + "px;left:" + D.left + "px;top:" + D.top + "px;" + Y + Z + $ + _ + ab + bb + cb + '">00</span>'), "yes" == h[2].displayMode && (E = b.setChildPos(a, k, !0), eb = "", fb = "", gb = "", hb = "", ib = "", jb = "", kb = "", lb = 0, h[2].characterColor = RGBToHex(h[2].characterColor, ""), "" != h[2].characterColor && (eb = "color:" + h[2].characterColor + ";"), h[2].characterBgColor = RGBToHex(h[2].characterBgColor, ""), "" != h[2].characterBgColor && (kb = "background-color:" + h[2].characterBgColor + ";"), "" != h[2].characterFont && (fb = "font-family:" + h[2].characterFont + ";"), "" != h[2].characterWeight && (gb = "font-weight:" + h[2].characterWeight + ";"), "" != h[2].characterSize && (hb = "font-size:" + b.tParseInt(h[2].characterSize) + "px;"), "" != h[2].characterLetterSpacing && (ib = "letter-spacing:" + b.tParseInt(h[2].characterLetterSpacing) + "px;"), "italic" == h[2].characterStyle && (jb = "font-style:" + h[2].characterStyle + ";"), "italic" == h[2].characterStyle && (lb = b.tParseInt(h[2].characterSize / 4)), A = '<span class="abs ks-m ksm' + L + '" style="display:block;text-align:center;width:' + (E.width + lb) + "px;height:" + E.height + "px;line-height:" + E.height + "px;left:" + E.left + "px;top:" + E.top + "px;" + eb + fb + gb + hb + ib + jb + kb + '">00</span>'), "yes" == h[3].displayMode && (F = b.setChildPos(a, l, !0), mb = "", nb = "", ob = "", pb = "", qb = "", rb = "", sb = "", tb = 0, h[3].characterColor = RGBToHex(h[3].characterColor, ""), "" != h[3].characterColor && (mb = "color:" + h[3].characterColor + ";"), h[3].characterBgColor = RGBToHex(h[3].characterBgColor, ""), "" != h[3].characterBgColor && (sb = "background-color:" + h[3].characterBgColor + ";"), "" != h[3].characterFont && (nb = "font-family:" + h[3].characterFont + ";"), "" != h[3].characterWeight && (ob = "font-weight:" + h[3].characterWeight + ";"), "" != h[3].characterSize && (pb = "font-size:" + b.tParseInt(h[3].characterSize) + "px;"), "" != h[3].characterLetterSpacing && (qb = "letter-spacing:" + b.tParseInt(h[3].characterLetterSpacing) + "px;"), "italic" == h[3].characterStyle && (rb = "font-style:" + h[3].characterStyle + ";"), "italic" == h[3].characterStyle && (tb = b.tParseInt(h[3].characterSize / 4)), B = '<span class="abs ks-s kss' + L + '" style="display:block;text-align:center;width:' + (F.width + tb) + "px;height:" + F.height + "px;line-height:" + F.height + "px;left:" + F.left + "px;top:" + F.top + "px;" + mb + nb + ob + pb + qb + rb + sb + '">00</span>'), '<div class="jcdb abs J_TWidget jcdd ' + c.appID + '"' + I + J + ' data-appid="' + c.appID + '" style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + M + N + '" data-widget-type="Countdown" data-widget-config="{ \'endTime\':\'' + p + "','interval':1000,'timeRunCls':'.jcdbstart" + L + "','timeUnitCls':{'d':'.ksd" + L + "','h':'.ksh" + L + "','m':'.ksm" + L + "','s':'.kss" + L + "'},'minDigit':1,'timeEndCls':'.jcdbend" + L + "'}\">" + v + w + y + z + A + B + x + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var m, o, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = $.parseJSON(d.attr("data-widget-config").replace(/'/g, '"')),
						i = a.children(b.appChildCls + "[data-attachType='jcdbDay']"),
						j = a.children(b.appChildCls + "[data-attachType='jcdbHour']"),
						k = a.children(b.appChildCls + "[data-attachType='jcdbMinute']"),
						l = a.children(b.appChildCls + "[data-attachType='jcdbSecond']"),
						n = {};
					n.childConfig = [], n.childConfig[0] = {}, n.childConfig[1] = {}, n.childConfig[2] = {}, n.childConfig[3] = {}, n.childConfig[0].displayMode = "no", n.childConfig[1].displayMode = "no", n.childConfig[2].displayMode = "no", n.childConfig[3].displayMode = "no", n.customContent = "", n.startContent = "", n.endContent = "", timeParent = d.children(), i.hide(), j.hide(), k.hide(), l.hide(), n.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), n.endTime2Cycle = d.attr("data-c") || "3", n.endTimeType = d.attr("data-t") || "endTime", n.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.bgColor = RGBToHex(d.css("background-color"), ""), n.imgBgp = d.css("background-position") || "50% 50%", "endTime" == n.endTimeType && (n.endTime = h.endTime, n.endTime1 = ""), "endTime1" == n.endTimeType && (n.endTime1 = h.endTime / 1e3, n.endTime = (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3)), "endTime2" == n.endTimeType && (n.endTime2 = new Date(h.endTime).Format("hh:mm:ss"), n.endTime = (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3)), n.contentType = "imgContent", d.children(".jcdbcus").length > 0 && (n.customContent = d.children(".jcdbcus").html(), n.contentType = "customContent"), "endTime2" != n.endTimeType ? (d.children(".jcdbstart0").length > 0 && (n.startContent = d.children(".jcdbstart0").html()), d.children(".jcdbend0").length > 0 && (n.endContent = d.children(".jcdbend0").html())) : d.hasClass("jcdd") ? (d.children(".jcdbstart0").length > 0 && (n.startContent = d.children(".jcdbstart0").html()), d.children(".jcdbend0").length > 0 && (n.endContent = d.children(".jcdbend0").html())) : (n.startContent = "", n.endContent = "", timeParent = d.children(".jcdbstart0").children()), timeParent.each(function() {
						var e = $(this);
						e.hasClass("ks-d") && "no" == n.childConfig[0].displayMode && (n.childConfig[0].displayMode = "yes", n.childConfig[0].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[0].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[0].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[0].characterWeight = e.css("font-weight"), "400" == n.childConfig[0].characterWeight && (n.childConfig[0].characterWeight = "normal"), n.childConfig[0].characterFont = e.css("font-family"), n.childConfig[0].characterStyle = e.css("font-style") || "normal", n.childConfig[0].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), m = b.getChildPos(d, e, !0), i.css({
							color: n.childConfig[0].characterColor,
							top: m.top,
							left: m.left
						}).show()), e.hasClass("ks-h") && "no" == n.childConfig[1].displayMode && (n.childConfig[1].displayMode = "yes", n.childConfig[1].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[1].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[1].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[1].characterWeight = e.css("font-weight"), "400" == n.childConfig[1].characterWeight && (n.childConfig[1].characterWeight = "normal"), n.childConfig[1].characterFont = e.css("font-family"), n.childConfig[1].characterStyle = e.css("font-style") || "normal", n.childConfig[1].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), m = b.getChildPos(d, e, !0), j.css({
							top: m.top,
							left: m.left
						}).show()), e.hasClass("ks-m") && "no" == n.childConfig[2].displayMode && (n.childConfig[2].displayMode = "yes", n.childConfig[2].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[2].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[2].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[2].characterWeight = e.css("font-weight"), "400" == n.childConfig[2].characterWeight && (n.childConfig[2].characterWeight = "normal"), n.childConfig[2].characterFont = e.css("font-family"), n.childConfig[2].characterStyle = e.css("font-style") || "normal", n.childConfig[2].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), m = b.getChildPos(d, e, !0), k.css({
							top: m.top,
							left: m.left
						}).show()), e.hasClass("ks-s") && "no" == n.childConfig[3].displayMode && (n.childConfig[3].displayMode = "yes", n.childConfig[3].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[3].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[3].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[3].characterWeight = e.css("font-weight"), "400" == n.childConfig[3].characterWeight && (n.childConfig[3].characterWeight = "normal"), n.childConfig[3].characterFont = e.css("font-family"), n.childConfig[3].characterStyle = e.css("font-style") || "normal", n.childConfig[3].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), m = b.getChildPos(d, e, !0), l.css({
							top: m.top,
							left: m.left
						}).show())
					}), o = $.extend(!0, f, n), a.attr("data-config", JSON.stringify(o)), b.appConfig["jcdb"][1].tSubmit(o, a), a.attr("appID", n.appID), i.attr("appID", n.appID), j.attr("appID", n.appID), k.attr("appID", n.appID), l.attr("appID", n.appID), e(g, n.appID)
				}
			}, {
				appID: "",
				endTimeType: "endTime",
				endTime: (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3),
				endTime1: "",
				endTime2: (new Date).Format("hh:mm:ss"),
				endTime2Cycle: "3",
				contentType: "imgContent",
				pSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2sGvpapXXXXbIXXXXXXXXXXXX_!!39767794.png",
				imgBgp: "50% 50%",
				bgColor: "",
				autoSize: "yes",
				customContent: "",
				startContent: "",
				endContent: "",
				childConfig: [{
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "宋体",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}, {
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "宋体",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}, {
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "宋体",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}, {
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "宋体",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}]
			}],
			jvb: ['<div class="t-app" data-dblType="jvb"></div>',
			{
				tTitle: "视频/FLASH设置",
				tUrl: "video.php",
				tSubmit: function(a, c) {
					c.attr("data-config", JSON.stringify(a)), checkUrl(a.videoSrc) && (b.jSelectsedDom = b.jSelectsedDom.not(c.children("embed")[0]), c.children("embed").remove().attr({
						src: a.videoSrc
					}).appendTo(c))
				},
				tContent: '<embed allowScriptAccess="never" flashvars="scene=taobao_shop" src="http://cloud.video.taobao.com/video/play/v/2002/sid/10552470/uid/1695300927/from/2/f/video.swf" type="application/x-shockwave-flash" autostart="false" wmode="transparent"/>',
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "";
					return checkUrl(c.videoSrc) && (h = 'src="' + c.videoSrc + '"'), '<div class="jvb abs ' + c.appID + '" data-appid="' + c.appID + '" style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;"><embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="' + d + '" height="' + e + '" ' + h + ' type="application/x-shockwave-flash" wmode="transparent"/></div>'
				},
				codeImport: function(a, c, d, e) {
					var i, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.videoSrc = d.children("embed").attr("src"), i = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(i)), checkUrl(h.videoSrc) && (b.jSelectsedDom = b.jSelectsedDom.not(a.children("embed")[0]), a.children("embed").remove().attr({
						src: h.videoSrc
					}).appendTo(a)), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				videoSrc: "http://cloud.video.taobao.com/video/play/v/2002/sid/10552470/uid/1695300927/from/2/f/video.swf"
			}],
			jsdb: ['<div class="t-app" data-dblType="jsdb"></div>',
			{
				tTitle: "图片轮播设置",
				tUrl: "slider.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jsdbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jsdbTArrow']");
					checkUrl(a.sliderSrc[0]) ? c.css({
						backgroundImage: "url(" + a.sliderSrc[0] + ")"
					}) : c.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), "yes" == a.sliderArrow ? (e.show(), f.show()) : (e.hide(), f.hide()), c.children(b.appOtherCls).html(""), "customContent" == a.contentType[0] && (c.css({
						backgroundImage: ""
					}), c.children(b.appOtherCls).html(a.customContent[0])), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-child" data-dblType="jsdb" data-attachType="jsdbOArrow"></div><div class="t-app-child" data-dblType="jsdb" data-attachType="jsdbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function(a) {
					var u, n, o, p, q, r, s, t, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig[0],
						i = (new Date).valueOf().toString().substr(7, 6),
						j = '<div class="scroller" style="overflow:hidden;width:' + d + "px;height:" + e + 'px;z-index:10;"><div class="ks-switchable-content dc' + i + '">',
						k = "",
						l = "",
						m = "";
					if (c.shadeMode && "yes" == c.shadeMode ? (n = c.shadeCount || 1, o = "", p = "", q = "", r = "", s = "", t = 0, newWidth = b.tParseInt(d / n), t = d % n, 0 != t && n++, shadeMarginLeft = "") : newWidth = d, $.each(c.contentType, function(a) {
						var f = "";
						checkUrl(c.sliderSrc[a]) && (f = "background:url(" + c.sliderSrc[a] + ") no-repeat scroll center center transparent;"), k += "imgContent" == c.contentType[a] ? '<div class="haibaos_pic haibaos_0" style="height:' + e + "px;width:" + newWidth + 'px;display:block;float:left;overflow:hidden;"><div class="elexb rel" style="height:' + e + "px;width:" + d + "px;" + f + '"><a class="simple J_TWidget" href="' + c.sliderHref[a] + '" target="' + c.hrefMode + '" style="height:' + e + "px;width:" + d + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>' : '<div class="haibaos_pic haibaos_0" style="height:' + e + "px;width:" + newWidth + 'px;display:block;float:left;overflow:hidden;"><div class="elexb rel" style="height:' + e + "px;width:" + d + 'px;">' + c.customContent[a] + "</div></div>", l += "<li></li>"
					}), c.shadeMode && "yes" == c.shadeMode || (k += "</div></div>"), "no" == c.sliderArrow && (m = "display:none;"), x = a.children(b.appChildCls + "[data-attachType='jsdbOArrow']"), y = a.children(b.appChildCls + "[data-attachType='jsdbTArrow']"), v = b.setChildPos(a, x, !0), w = b.setChildPos(a, y, !0), z = "", A = "", B = "", C = "", D = "", E = "", F = "", G = "", H = "", "yes" == c.sliderArrow && (checkUrl(h.oSrc) && (A = 'src="' + h.oSrc + '" alt="上一页"'), checkUrl(h.tSrc) && (B = 'src="' + h.tSrc + '" alt="下一页"'), checkUrl(h.oSrcHover) && (E = 'src="' + h.oSrcHover + '" alt="上一页"'), checkUrl(h.tSrcHover) && (F = 'src="' + h.tSrcHover + '" alt="下一页"'), G = "<img " + A + " />", H = "<img " + B + " />", ("" != E || "" != F) && (z = " junefade", G = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + A + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + E + " />", H = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + B + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + F + " />")), !0 && (C = " 'prevBtnCls': 'prev" + i + "', 'nextBtnCls': 'next" + i + "', "), !0 && (D = '<span class="abs prev' + i + z + '" style="cursor:pointer;width:' + v.width + "px;height:" + v.height + "px;top:" + v.top + "px;left:" + v.left + 'px;z-index:99;">' + G + '</span><span class="abs next' + i + z + '" style="cursor:pointer;width:' + w.width + "px;height:" + w.height + "px;top:" + w.top + "px;left:" + w.left + 'px;z-index:99;">' + H + "</span>"), I = "", c.shadeMode && "yes" == c.shadeMode) {
						for (J = 0; n > J; J++) u = newWidth, J == n - 1 && 0 != t && (u = t, I = "jsdbyys "), 0 == J ? (r = ' data-appid="' + c.appID + '"', s = "top:" + f + "px;left:" + g + "px;") : (r = "", s = ""), o += '<div class="jsdb ' + I + "abs J_TWidget " + c.appID + '"' + r + ' style="height:' + e + "px;width:" + d + "px;" + s + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'dc_' + J + "_" + i + "','navCls':'dn" + i + "','effect':'" + c.sliderMode + "','steps':1,'easing':'" + c.sliderEffect + "','duration':'" + (.5 + .02 * J).toFixed(2) + "','autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + "," + C + "'lazyDataType':'img-src'}\">", j = '<div class="scroller" style="overflow:hidden;width:' + u + "px;height:" + e + 'px;z-index:10;float:left;"><div class="ks-switchable-content dc_' + J + "_" + i + '">', div1 = k.replace(/\<div class\=\"elexb([^\>]*)\>/g, function(a) {
							var d = a;
							return d = d.replace(/(width\:[\d\.]*px\;)(left\:\-?([^\;]*)\;)?/g, function(a, d, e, f) {
								var g = "";
								return "scrollx" == c.sliderMode && f && "" != f && (g = b.tParseInt(f)), d + "left:-" + (newWidth * J + g) + "px;"
							})
						}), J == n - 1 && 0 != t && (div1 = div1.replace(/\<div class\=\"haibaos_pic([^\>]*)\>/g, function(a) {
							var b = a;
							return b = b.replace(/width\:([\d\.]*)px\;/g, function(a, b) {
								return b = b.replace(newWidth, u), "width:" + b + "px;"
							})
						})), div1 += "</div></div>", p += j + div1, q += "</div>";
						return o + p + '<div class="smlldiv_btn" style="position:relative;z-index:99;' + m + '">' + D + '</div><ul class="ks-switchable-nav dn' + i + '" style="display:none;">' + l + "</ul>" + q
					}
					return '<div class="jsdb abs J_TWidget section scrollable dd ' + c.appID + '" data-appid="' + c.appID + '" style="height:' + e + "px;width:" + d + "px;top:" + f + "px;left:" + g + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'dc' + i + "','navCls':'dn" + i + "','effect':'" + c.sliderMode + "','steps':1,'easing':'" + c.sliderEffect + "','duration':'0.5','autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + "," + C + "'lazyDataType':'img-src'}\"><div class=\"smlldiv_btn\" style=\"position:relative;z-index:99;" + m + '">' + D + "</div>" + j + k + '<ul class="ks-switchable-nav dn' + i + '" style="display:none;"></ul></div>'
				},
				codeImport: function(a, c, d, e) {
					var j, k, l, m, n, o, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')),
						i = {};
					if (i.childConfig = [], i.childConfig[0] = {}, i.sliderSrc = [], i.sliderHref = [], i.customContent = [], i.contentType = [], i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jsdb").length > 0) {
						for (i.shadeCount = 1; d.children(".jsdb").length > 0;) d = d.children(".jsdb"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
							contentCls: "",
							navCls: "",
							effect: "scrolly",
							steps: 1,
							easing: "easeBoth",
							duration: "0.5",
							autoplay: !0,
							interval: 4,
							activeTriggerCls: "hidden",
							triggerType: "mouse"
						}, d.hasClass("jsdbyys") || i.shadeCount++;
						i.shadeMode = "yes"
					}
					d.children(".scroller:eq(0)").find("div.haibaos_pic").each(function() {
						var b, c, d, e, a = $(this);
						a.children("div.elexb").length > 0 && (a = a.children("div.elexb")), b = a.find("a.simple"), c = a.css("background-image").replace(/^url|[\(\"\)]*/g, ""), d = a.find("a.simple").attr("href"), e = a.html(), b.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(c), i.sliderHref.push(d), i.customContent.push("")) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.sliderHref.push(""), i.customContent.push(e))
					}), d.children(".scroller:eq(0)").find("div.haibaos_pic").length > 1 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = []), l = d.children(".smlldiv_btn"), i.sliderArrow = "none" == l.css("display") ? "no" : "yes", h.effect && (i.sliderMode = h.effect), h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), m = l.children("span:eq(0)"), n = l.children("span:eq(1)"), l.children("span:eq(0)").hasClass("prevsamll") && (m = l.children("span:eq(0)").children("img:eq(0)"), n = l.children("span:eq(1)").children("img:eq(0)")), i.hrefMode = d.find("a.simple").attr("target") || "_blank", i.childConfig[0].oSrc = l.children("span:eq(0)").children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = l.children("span:eq(1)").children("img:eq(0)").attr("src"), i.childConfig[0].autoSize = "no", i.childConfig[0].autoSize1 = "no", l.children("span:eq(0)").children("img:eq(1)").length > 0 && (i.childConfig[0].oSrcHover = l.children("span:eq(0)").children("img:eq(1)").attr("src")), l.children("span:eq(1)").children("img:eq(1)").length > 0 && (i.childConfig[0].tSrcHover = l.children("span:eq(1)").children("img:eq(1)").attr("src")), j = b.getChildPos(d, m, !0), k = b.getChildPos(d, n, !0), o = $.extend(f, i), a.attr("data-config", JSON.stringify(o)), require("scripts/tAjax"), "" != i.sliderSrc[0] && checkUrl(i.sliderSrc[0]) ? a.css({
						backgroundImage: "url(" + i.sliderSrc[0] + ")"
					}) : a.css({
						backgroundImage: ""
					}), "no" == i.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jsdbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jsdbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jsdbOArrow']").css({
						backgroundImage: "url(" + i.childConfig[0].oSrc + ")",
						width: 0 == j.width ? 48 : j.width,
						height: 0 == j.height ? 48 : j.height,
						top: j.top,
						left: j.left
					}), a.children(b.appChildCls + "[data-attachType='jsdbTArrow']").css({
						backgroundImage: "url(" + i.childConfig[0].tSrc + ")",
						width: 0 == k.width ? 48 : k.width,
						height: 0 == k.height ? 48 : k.height,
						top: k.top,
						left: k.left
					})), a.children(b.appOtherCls).html(""), "customContent" == i.contentType[0] && (a.css({
						backgroundImage: ""
					}), a.children(b.appOtherCls).html(i.customContent[0])), a.children(b.appChildCls + "[data-attachType='jsdbOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jsdbTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				sliderSrc: ["http://img03.taobaocdn.com/tps/i3/T1ehWiFnVeXXX8Klcw-620-1026.jpg", "http://img01.taobaocdn.com/tps/i1/T1T.SjFhVcXXcTdlcw-620-1024.jpg", "http://img04.taobaocdn.com/tps/i4/T16vmhFjJfXXcTdlcw-620-1024.jpg"],
				sliderHref: ["#", "#", "#"],
				customContent: ["", "", ""],
				contentType: ["imgContent", "imgContent", "imgContent"],
				sliderMode: "scrolly",
				shadeMode: "no",
				shadeCount: "20",
				hrefMode: "_blank",
				sliderArrow: "yes",
				sliderAuto: "true",
				sliderEffect: "easeBoth",
				sliderTime: "4",
				kuandukz: "zdy",
				childConfig: [{
					attachID: "",
					autoSize: "yes",
					autoSize1: "yes",
					oSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/T2JItnXtxaXXXXXXXX_!!39767794.png",
					tSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T22UebXmNcXXXXXXXX_!!39767794.png",
					oSrcHover: "",
					tSrcHover: ""
				}]
			}],
			jwfb: ['<div class="t-app" data-dblType="jwfb"></div>',
			{
				tTitle: "无缝轮播设置",
				tUrl: "wfslider.php",
				tSubmit: function(a, c) {
					var j, k, l, m, n, o, p, q, r, t, u, v, w, x, y, z, A, B, C, D, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jwfbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jwfbTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='lbePanel']"),
						h = a.sliderSrc;
					for (c.tResize("destory"), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), "yes" == a.sliderArrow ? (checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), e.show(), f.show()) : (e.hide(), f.hide()), !a.thumbSet && (a.thumbSet = []), !a.thumbCircleSet && (a.thumbCircleSet = []), c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:gt(" + (a.contentType.length - 1) + ")").hide(), j = "", k = 0, l = 0, m = 0; m < a.contentType.length; m++) n = c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:eq(" + m + ")"), j = "", o = c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:eq(" + (m - 1) + ")"), 0 == m && (o = c.children(b.appOtherCls)), a.smallCircleMode[m] && "yes" == a.smallCircleMode[m] ? (u = a.smallCircleBgColor[m] || a.smallCircleBgColor1[m] || "", v = "", w = "", x = "", a.thumbCircleSet[m] && "" != a.thumbCircleSet[m] && (v = JSON.parse(a.thumbCircleSet[m]), x = v.characterContent, u = v.characterBgColor || v.characterBgColorHover || "", v.characterColor = RGBToHex(v.characterColor, ""), "" != v.characterColor && (w += "color:" + v.characterColor + ";"), "" != v.characterFont && (w += "font-family:" + v.characterFont + ";"), "" != v.characterWeight && (w += "font-weight:" + v.characterWeight + ";"), "" != v.characterSize && (w += "font-size:" + b.tParseInt(v.characterSize) + "px;")), n.length > 0 ? (n.html('<div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + w + '">' + x + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && n.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && n.css({
						height: a.sHeight
					}), n.children(".t-jwfb-circle").css({
						backgroundColor: RGBToHex(u, ""),
						borderRadius: "50%"
					}), n.css({
						lineHeight: n.height() + "px"
					}).show()) : (p = 120, q = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (p = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (q = a.sHeight), b.setAttachID(a.childConfig[0]), n = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="top:' + l + "px;left:" + (b.tParseInt(k) + b.tParseInt(p)) + "px;width:" + p + "px;height:" + q + "px;line-height:" + q + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + w + '">' + x + "</div></div>").tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), n.children(".t-jwfb-circle").css({
						backgroundColor: RGBToHex(u, ""),
						borderRadius: "50%"
					}))) : a.thumbSet[m] && "" != a.thumbSet[m] ? (r = JSON.parse(a.thumbSet[m]), n.length > 0 ? (n.html(""), b.appConfig["jcb"][1].tSubmit(r, n), n.removeAttr("data-config")) : (p = 120, q = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (p = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (q = a.sHeight), b.setAttachID(a.childConfig[0]), n = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="top:' + l + "px;left:" + (b.tParseInt(k) + b.tParseInt(p)) + "px;width:" + p + "px;height:" + q + 'px;z-index:101;"></div>').tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), t = c.children(b.appChildCls + "[attachID='" + a.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(r, t), t.removeAttr("data-config"))) : (j = "imgContent" == a.contentType[m] ? "" != a.smallImgSrcT[m] ? a.smallImgSrcT[m] : "" != a.smallHoverSrcT[m] ? a.smallHoverSrcT[m] : a.sliderSrc[m] : "" != a.smallImgSrc[m] ? a.smallImgSrc[m] : "" != a.smallHoverSrc[m] ? a.smallHoverSrc[m] : a.sliderSrc[m], n.length > 0 ? (checkUrl(j) ? n.children("img").length > 0 ? n.children("img").attr({
						src: j
					}) : n.html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + j + '">').tResize() : n.children("img").removeAttr("src"), "" != a.sWidth && $.isNumeric(a.sWidth) && n.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && n.css({
						height: a.sHeight
					}), n.show()) : (p = 120, q = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (p = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (q = a.sHeight), b.setAttachID(a.childConfig[0]), n = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="top:' + l + "px;left:" + (b.tParseInt(k) + b.tParseInt(p)) + "px;width:" + p + "px;height:" + q + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + j + '"></div>').tResize().insertAfter(o).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), k = b.tParseInt(n.css("left")), l = b.tParseInt(n.css("top"));
					if (c.children(b.appOtherCls).html(""), y = b.tParseInt(a.sliderActive) - 1, z = "", A = "", "no" == a.sliderOver ? c.children(b.appOtherCls).addClass("t-app-custom") : c.children(b.appOtherCls).removeClass("t-app-custom"), "scrolly" != a.sliderMode) {
						for ("yes" == a.sliderOver && "yes" == a.sliderOverMongolia && (z = '<div style="position:absolute;left:-99999px;top:0px;width:99999px;height:' + c.height() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', A = '<div style="position:absolute;left:' + c.width() + "px;top:0px;width:99999px;height:" + c.height() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>'), c.children(b.appOtherCls).attr("data-s", "no"), c.children(b.appOtherCls).append('<div style="width:99999px;height:100%;position:relative;"></div>' + z + A), m = 0; m < 3 * a.contentType.length; m++) B = m % a.contentType.length, C = "", "imgContent" == a.contentType[B] ? (checkUrl(h[B]) && (C = ' src="' + h[B] + '"'), c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;float:left;width:auto;height:100%;"><img' + C + "></div>")) : c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;float:left;width:auto;height:100%;">' + a.customContent[B] + "</div>");
						setTimeout(function() {
							c.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width() * (b.tParseInt(y) + a.contentType.length) + "px"), c.children(b.appOtherCls).children("div:eq(0)").children("div").width(c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width())
						}, 100)
					} else {
						for ("yes" == a.sliderOver && "yes" == a.sliderOverMongolia && (z = '<div style="position:absolute;top:-99999px;left:0px;height:99999px;width:' + c.width() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', A = '<div style="position:absolute;top:' + c.height() + "px;left:0px;height:99999px;width:" + c.width() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>'), c.children(b.appOtherCls).attr("data-s", "yes"), c.children(b.appOtherCls).append('<div style="height:99999px;width:100%;position:relative;"></div>' + z + A), m = 0; m < 3 * a.contentType.length; m++) B = m % a.contentType.length, C = "", "imgContent" == a.contentType[B] ? (checkUrl(h[B]) && (C = ' src="' + h[B] + '"'), c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;height:auto;width:100%;"><img' + C + "></div>")) : c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;height:auto;width:100%;">' + a.customContent[B] + "</div>");
						setTimeout(function() {
							c.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height() * (b.tParseInt(y) + a.contentType.length) + "px"), c.children(b.appOtherCls).children("div:eq(0)").children("div").height(c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height())
						}, 100)
					}
					"no" == a.sliderOver && c.children(b.appOtherCls).children("div:eq(0)").children("div:gt(" + (b.tParseInt(y) + 2 * a.contentType.length - 1) + ")").hide(), "no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:lt(" + a.contentType.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:lt(" + a.contentType.length + ")").show(), a.sliderMargin > 1 && (D = Math.floor(a.contentType.length / a.sliderMargin), c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:gt(" + (D - 1) + ")").hide()), g.length > 0 && g.each(function(c) {
						a.childConfig[c + 1] && $(this).html(b.appMongolia + a.childConfig[c + 1].customContent).css({
							zIndex: 99 + b.tParseInt(a.childConfig[c + 1].zFloor)
						}).tResize()
					}), c.attr("data-config", JSON.stringify(a)).tResize()
				},
				tOtherSetConfig: {
					characterLineMulti: "no",
					characterLineHeight: "",
					characterLineContent: "",
					characterLineAlign: "left",
					characterLineSpace: "",
					characterTBpadding: "",
					characterLetterSpacing: "",
					characterContent: "",
					characterMode: "text",
					characterItemContent: "",
					characterFixed: "2",
					characterHoverMode: "off",
					characterHoverSpeed: "",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "宋体",
					characterColorHover: "#000000",
					characterBgSrcHover: "",
					characterBgColorHover: "",
					characterUnderLine: "off",
					characterUnderLineStyle: "solid",
					characterUnderLineWeight: "1",
					characterUnderLineColor: "#000000",
					ssOpacity: "1",
					ssOpacity1: "1",
					characterWeight: "normal",
					characterStyle: "normal",
					characterLineUnder: "",
					characterLineThrough: "",
					characterWidthMode: "normal",
					characterAlign: "center",
					characterFont: "宋体",
					characterSize: "12",
					characterColor: "#000000",
					characterBgColor: "",
					characterLeftPadding: "",
					characterRightPadding: "",
					characterBgSrc: "",
					borderControl: "",
					borderColor: "#000000",
					borderWidth: "1",
					borderRadius: "0",
					shadowControl: "",
					shadowLeft: "0",
					shadowTop: "0",
					shadowBlur: "5",
					shadowSize: "0",
					shadowColor: "#666666",
					shadowStyle: "",
					borderControl1: "",
					borderColor1: "#000000",
					borderWidth1: "1",
					borderRadius1: "0",
					shadowControl1: "",
					shadowLeft1: "0",
					shadowTop1: "0",
					shadowBlur1: "5",
					shadowSize1: "0",
					shadowColor1: "#666666",
					shadowStyle1: "",
					outlineControl: "",
					outlineWidth: "juneol",
					outlineSpeed: "trans02s",
					outlineColor: "#FFFFFF",
					outlineShadowColor: "#666666",
					css3ModeX1: "",
					css3ModeY1: "",
					css3Mode1: ""
				},
				tOtherSetConfig1: {
					characterContent: "",
					characterSize: "12",
					characterWeight: "normal",
					characterFont: "宋体",
					characterColor: "#000000",
					characterBgColor: "",
					characterHoverMode: "off",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "宋体",
					characterColorHover: "#000000",
					characterBgColorHover: ""
				},
				tDynamic: '<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg"><img width="120" height="120" src=""/></div>',
				tDynamic1: '<div class="t-app-child t-app-custom" data-dblType="jwfb" data-attachType="lbePanel" style="width:100%;height:100%;"></div>',
				tDynamicConfig: {
					attachID: "",
					zFloor: "1",
					smallShowCss: "",
					smallShowSpeed: "trans02s",
					customContent: ""
				},
				tContent: '<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbOArrow"></div><div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;text-align:center;"></div>',
				codeExport: function(a) {
					var e, f, o, C, N, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						g = a.height(),
						h = b.tParseInt(a.css("top")),
						i = b.tParseInt(a.css("left")),
						j = c.childConfig[0],
						k = (new Date).valueOf().toString().substr(7, 6),
						l = a.children(b.appChildCls + "[data-attachType='lbePanel']"),
						m = "",
						n = c.sliderMode,
						q = "",
						r = "",
						s = [],
						t = "",
						u = "",
						v = "",
						w = "display:none;",
						x = "",
						y = "",
						z = "",
						A = [],
						B = "",
						D = "",
						E = "",
						F = "",
						G = "float:left;",
						H = c.smallCircleMode || [],
						I = c.smallCircleBgColor || [],
						J = c.smallCircleBgColor1 || [],
						K = !1,
						L = "",
						M = "";
					if (!c.sliderDelay && (c.sliderDelay = "0"), !c.smallShowCss && (c.smallShowCss = ""), !c.smallShowSpeed && (c.smallShowSpeed = "trans02s"), c.sliderImgMode) {
						for (c.customContent = [], c.contentType = [], c.smallImgSrc = [], c.smallHoverSrc = [], c.smallImgSrcT = [], c.smallHoverSrcT = [], c.thumbSet = [], c.thumbCircleSet = [], c.smallCircleMode = [], c.smallCircleBgColor = [], c.smallCircleBgColor1 = [], N = 0; N < c.sliderSrc.length; N++) c.customContent.push(""), c.contentType.push("imgContent"), c.smallImgSrc.push(""), c.smallHoverSrc.push(""), c.smallImgSrcT.push(""), c.smallHoverSrcT.push(""), c.thumbSet.push(""), c.thumbCircleSet.push(""), c.smallCircleMode.push("no"), c.smallCircleBgColor.push(""), c.smallCircleBgColor1.push("");
						c.sliderSmallImg = "no", c.css3Mode = "", c.kgdSwitch = "black", c.sliderDelay = "0", c.sliderSwitch = "mouse", c.displayMode = "", c.css3Speed = "trans05s", c.sWidth = "15", c.sHeight = "15", c.defaultSmallImg = "", c.defaultSmallHover = "", delete c.sliderImgMode
					}
					if (e = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width(), f = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height(), 0 == e && (e = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").children().width()), 0 == f && (f = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").children().height()), "scrolly" != c.sliderMode ? (0 == e && (e = d / c.contentType.length), 0 == f && (f = g)) : (0 == e && (e = d), 0 == f && (f = g / c.contentType.length), G = ""), !c.sliderActive && (c.sliderActive = "1"), o = b.tParseInt(c.sliderActive) - 1, ("" != c.displayMode || "" != c.css3Mode) && (D = " jspb j-b", L = " " + c.css3Speed, M = " " + c.css3Speed, "june-box-fadein" == c.displayMode && (L += " june-box-fadein b-1-fadein", M += " june-box-fadein b-1-fadein"), c.css3Mode.indexOf("moveout") >= 0 && (L += " june-box-lx" + c.css3Mode.replace(/moveout/g, "") + " b-1-lx" + c.css3Mode.replace(/moveout/g, ""), M += " june-box-rx" + c.css3Mode.replace(/moveout/g, "") + " b-1-rx" + c.css3Mode.replace(/moveout/g, "")), c.css3Mode.indexOf("movein") >= 0 && (L += " june-box-rx" + c.css3Mode.replace(/movein/g, "") + " b-1-rx" + c.css3Mode.replace(/moveout/g, ""), M += " june-box-lx" + c.css3Mode.replace(/movein/g, "") + " b-1-lx" + c.css3Mode.replace(/moveout/g, ""))), c.contentType[0], P = !1, !c.thumbSet && (c.thumbSet = []), !c.thumbCircleSet && (c.thumbCircleSet = []), c.thumbSet) for (N = 0; N < c.thumbSet.length; N++) if (c.thumbSet[N] && "" != c.thumbSet[N]) {
						P = !0;
						break
					}
					for (P ? F = '<div class="sfa' + D + '" style="width:' + d + "px;height:" + g + 'px;z-index:10;">' : (E = D, D = " j-b"), Q = 0; Q < c.customContent.length; Q++) if (c.customContent[Q].indexOf("jspb") >= 0) {
						K = !0;
						break
					}
					for (K && (D = E = " j-b"), "" != c.smallShowCss && "" == E && (E = " j-b"), l.length > 0 && l.each(function(a) {
						var e = $(this),
							f = e.width(),
							g = e.height(),
							h = b.tParseInt(e.css("top")),
							i = b.tParseInt(e.css("left")),
							j = "";
						c.childConfig[a + 1] && (c.childConfig[a + 1].smallShowCss && "" != c.childConfig[a + 1].smallShowCss && ("" == E && (E = " j-b"), j = " " + c.childConfig[a + 1].smallShowCss + " " + (c.childConfig[a + 1].smallShowSpeed || "trans02s")), m += '<div class="abs lbepanel' + j + '" style="overflow: hidden;width:' + f + "px;height:" + g + "px;top:" + h + "px;left:" + i + "px;z-index:" + (10 + b.tParseInt(c.childConfig[a + 1].zFloor)) + ';">' + c.childConfig[a + 1].customContent + "</div>")
					}), C = "white" == c.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == c.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", T = a.children(b.appChildCls + "[data-attachType='jwfbOArrow']"), U = a.children(b.appChildCls + "[data-attachType='jwfbTArrow']"), R = b.setChildPos(a, T, !0), S = b.setChildPos(a, U, !0), V = "", W = "", X = "", Y = "", Z = "", _ = "", ab = "", "yes" == c.sliderArrow && (checkUrl(j.oSrc) && (W = 'src="' + j.oSrc + '" alt="上一页"'), checkUrl(j.tSrc) && (X = 'src="' + j.tSrc + '" alt="下一页"'), checkUrl(j.oSrcHover) && (Y = 'src="' + j.oSrcHover + '" alt="上一页"'), checkUrl(j.tSrcHover) && (Z = 'src="' + j.tSrcHover + '" alt="下一页"'), _ = "<img " + W + " />", ab = "<img " + X + " />", ("" != Y || "" != Z) && (V = " junefade", _ = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + W + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + Y + " />", ab = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + X + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + Z + " />")), "yes" == c.sliderArrow && (w = ""), !0 && (u = " 'prevBtnCls': 'prev" + k + "', 'nextBtnCls': 'next" + k + "', "), !0 && (v = '<span class="abs prev' + k + L + V + '" style="' + w + "cursor:pointer;width:" + R.width + "px;height:" + R.height + "px;top:" + R.top + "px;left:" + R.left + 'px;z-index:14;">' + _ + '</span><span class="abs next' + k + M + V + '" style="' + w + "cursor:pointer;width:" + S.width + "px;height:" + S.height + "px;top:" + S.top + "px;left:" + S.left + 'px;z-index:14;">' + ab + "</span>"), bb = "juneactive", "no" == c.sliderSmallImg && (x = "display:none;"), cb = c.contentType.length, c.sliderMargin > 1 && (cb = Math.floor(c.contentType.length / c.sliderMargin) - 1), $.each(c.contentType, function(d) {
						var r, t, u, v, w, x, C, D, E, F, K, L, M, N, O, P, Q, R, h = a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:eq(" + d + ")"),
							j = c.sliderHref[d],
							k = h.attr("attachID") || "",
							l = " " + k,
							i = b.getChildPos(a, h, !0),
							m = " rel",
							n = "",
							q = "display:none;";
						o == d && (q = "display:block;"), B = d == Math.ceil(c.sliderActive / c.sliderMargin) - 1 && "" == B ? "juneactive" : "", r = !1, d > cb && (r = !0), "yes" != H[d] && c.thumbSet[d] && "" != c.thumbSet[d] && (t = require("scripts/allwzset"), u = JSON.parse(c.thumbSet[d]), v = '"></li>', u.href = j, u.hrefMode = c.hrefMode, u.sliderSwitch = c.sliderSwitch, v = t.allExport(h, u, "jfsb"), r || (z += '<li data-i="' + k + '" class="abs thumbsmall ' + B + l + v)), "imgContent" == c.contentType[d] ? (w = c.smallImgSrcT[d], x = c.smallHoverSrcT[d], C = !1, D = "", E = "", "" == x && (x = w, C = !0), "" == x && (x = c.sliderSrc[d], C = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrcT[d] && (C = !0), "" == w && (w = c.sliderSrc[d]), A.push(x), checkUrl(x) && (D = 'src="' + x + '"'), "" != c.sliderSrc[d] && (E = "background:url(" + c.sliderSrc[d] + ") no-repeat scroll center top transparent;"), s[s.length] = '<div class="elepic" style="height:' + f + "px;width:" + e + "px;" + G + 'overflow:hidden;"><div class="elexb' + m + '" style="height:' + f + "px;width:" + e + "px;" + n + E + '"><a class="J_TWidget" href="' + j + '" target="' + c.hrefMode + '" style="height:' + f + "px;width:" + e + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>', y = '<a href="' + j + '" target="' + c.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img ' + D + ' style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', C ? (Q = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", R = "background:#000000;", "white" == c.kgdSwitch && (R = "background:#ffffff;"), "transparent" == c.kgdSwitch && (R = "", Q = ""), F = '<a href="' + j + '" target="' + c.hrefMode + '" class="abs s2" style="' + R + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="' + Q + "width:" + i.width + "px;height:" + i.height + 'px;"></a>', "click" == c.sliderSwitch && (F = '<a class="abs s2" style="' + R + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="' + Q + "width:" + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != H[d] ? c.thumbSet[d] && "" != c.thumbSet[d] || r || (z += '<li class="abs ' + B + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + F + "</li>") : (K = "", L = "", M = "", N = "", O = "", P = "", c.thumbCircleSet[d] && "" != c.thumbCircleSet[d] ? (O = " scm_s", M = JSON.parse(c.thumbCircleSet[d]), N = M.characterContent, K = RGBToHex(M.characterBgColor, ""), "" != K && (K = "background-color:" + K + ";"), M.characterColor = RGBToHex(M.characterColor, ""), "" != M.characterColor && (K += "color:" + M.characterColor + ";"), "" != M.characterFont && (K += "font-family:" + M.characterFont + ";"), "" != M.characterWeight && (K += "font-weight:" + M.characterWeight + ";"), "" != M.characterSize && (K += "font-size:" + b.tParseInt(M.characterSize) + "px;"), "off" != M.characterHoverMode ? (P = " s1h", L = RGBToHex(M.characterBgColorHover, ""), "" != L && (L = "background-color:" + L + ";"), M.characterColorHover = RGBToHex(M.characterColorHover, ""), "" != M.characterColorHover && (L += "color:" + M.characterColorHover + ";"), "" != M.characterFontHover && (L += "font-family:" + M.characterFontHover + ";"), "" != M.characterWeightHover && (L += "font-weight:" + M.characterWeightHover + ";"), "" != M.characterSizeHover && (L += "font-size:" + b.tParseInt(M.characterSizeHover) + "px;")) : L = K) : (I[d] && (K = RGBToHex(I[d], ""), "" != K && (K = "background-color:" + K + ";")), J[d] && (L = RGBToHex(J[d], ""), "" != L && (L = "background-color:" + L + ";"))), r || (z += '<li class="abs scm ' + B + O + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + P + '" style="border-radius:50%;width:100%;height:100%;' + L + '">' + N + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + K + '">' + N + "</div>" + "</li>"))) : (F = '<a href="' + j + '" target="' + c.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', "click" == c.sliderSwitch && (F = '<a class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != H[d] ? c.thumbSet[d] && "" != c.thumbSet[d] || r || (z += '<li class="abs ' + B + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + F + "</li>") : (K = "", L = "", M = "", N = "", O = "", P = "", c.thumbCircleSet[d] && "" != c.thumbCircleSet[d] ? (O = " scm_s", M = JSON.parse(c.thumbCircleSet[d]), N = M.characterContent, K = RGBToHex(M.characterBgColor, ""), "" != K && (K = "background-color:" + K + ";"), M.characterColor = RGBToHex(M.characterColor, ""), "" != M.characterColor && (K += "color:" + M.characterColor + ";"), "" != M.characterFont && (K += "font-family:" + M.characterFont + ";"), "" != M.characterWeight && (K += "font-weight:" + M.characterWeight + ";"), "" != M.characterSize && (K += "font-size:" + b.tParseInt(M.characterSize) + "px;"), "off" != M.characterHoverMode ? (P = " s1h", L = RGBToHex(M.characterBgColorHover, ""), "" != L && (L = "background-color:" + L + ";"), M.characterColorHover = RGBToHex(M.characterColorHover, ""), "" != M.characterColorHover && (L += "color:" + M.characterColorHover + ";"), "" != M.characterFontHover && (L += "font-family:" + M.characterFontHover + ";"), "" != M.characterWeightHover && (L += "font-weight:" + M.characterWeightHover + ";"), "" != M.characterSizeHover && (L += "font-size:" + b.tParseInt(M.characterSizeHover) + "px;")) : L = K) : (I[d] && (K = RGBToHex(I[d], ""), "" != K && (K = "background-color:" + K + ";")), J[d] && (L = RGBToHex(J[d], ""), "" != L && (L = "background-color:" + L + ";"))), r || (z += '<li class="abs scm ' + B + O + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + P + '" style="border-radius:50%;width:100%;height:100%;' + L + '">' + N + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + K + '">' + N + "</div>" + "</li>")))) : (w = c.smallImgSrc[d], x = c.smallHoverSrc[d], C = !1, D = "", "" == x && (x = w, C = !0), "" == x && (x = c.sliderSrc[d], C = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrc[d] && (C = !0), "" == w && (w = c.sliderSrc[d]), A.push(x), checkUrl(x) && (D = 'src="' + x + '"'), s[s.length] = '<div class="elepic" style="height:' + f + "px;width:" + e + "px;" + G + 'overflow:hidden;"><div class="elexb' + m + '" style="height:' + f + "px;width:" + e + "px;" + n + '">' + c.customContent[d] + "</div></div>", y = '<a href="' + j + '" target="' + c.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img ' + D + ' style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', C ? (Q = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", R = "background:#000000;", "white" == c.kgdSwitch && (R = "background:#ffffff;"), "transparent" == c.kgdSwitch && (R = "", Q = ""), F = '<a href="' + j + '" target="' + c.hrefMode + '" class="abs s2" style="' + R + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="' + Q + "width:" + i.width + "px;height:" + i.height + 'px;"></a>', "click" == c.sliderSwitch && (F = '<a class="abs s2" style="' + R + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="' + Q + "width:" + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != H[d] ? c.thumbSet[d] && "" != c.thumbSet[d] || r || (z += '<li class="abs ' + B + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + F + "</li>") : (K = "", L = "", M = "", N = "", O = "", P = "", c.thumbCircleSet[d] && "" != c.thumbCircleSet[d] ? (O = " scm_s", M = JSON.parse(c.thumbCircleSet[d]), N = M.characterContent, K = RGBToHex(M.characterBgColor, ""), "" != K && (K = "background-color:" + K + ";"), M.characterColor = RGBToHex(M.characterColor, ""), "" != M.characterColor && (K += "color:" + M.characterColor + ";"), "" != M.characterFont && (K += "font-family:" + M.characterFont + ";"), "" != M.characterWeight && (K += "font-weight:" + M.characterWeight + ";"), "" != M.characterSize && (K += "font-size:" + b.tParseInt(M.characterSize) + "px;"), "off" != M.characterHoverMode ? (P = " s1h", L = RGBToHex(M.characterBgColorHover, ""), "" != L && (L = "background-color:" + L + ";"), M.characterColorHover = RGBToHex(M.characterColorHover, ""), "" != M.characterColorHover && (L += "color:" + M.characterColorHover + ";"), "" != M.characterFontHover && (L += "font-family:" + M.characterFontHover + ";"), "" != M.characterWeightHover && (L += "font-weight:" + M.characterWeightHover + ";"), "" != M.characterSizeHover && (L += "font-size:" + b.tParseInt(M.characterSizeHover) + "px;")) : L = K) : (I[d] && (K = RGBToHex(I[d], ""), "" != K && (K = "background-color:" + K + ";")), J[d] && (L = RGBToHex(J[d], ""), "" != L && (L = "background-color:" + L + ";"))), r || (z += '<li class="abs scm ' + B + O + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + P + '" style="border-radius:50%;width:100%;height:100%;' + L + '">' + N + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + K + '">' + N + "</div>" + "</li>"))) : (F = '<a href="' + j + '" target="' + c.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', "click" == c.sliderSwitch && (F = '<a class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + w + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != H[d] ? c.thumbSet[d] && "" != c.thumbSet[d] || r || (z += '<li class="abs ' + B + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + F + "</li>") : (K = "", L = "", M = "", N = "", O = "", P = "", c.thumbCircleSet[d] && "" != c.thumbCircleSet[d] ? (O = " scm_s", M = JSON.parse(c.thumbCircleSet[d]), N = M.characterContent, K = RGBToHex(M.characterBgColor, ""), "" != K && (K = "background-color:" + K + ";"), M.characterColor = RGBToHex(M.characterColor, ""), "" != M.characterColor && (K += "color:" + M.characterColor + ";"), "" != M.characterFont && (K += "font-family:" + M.characterFont + ";"), "" != M.characterWeight && (K += "font-weight:" + M.characterWeight + ";"), "" != M.characterSize && (K += "font-size:" + b.tParseInt(M.characterSize) + "px;"), "off" != M.characterHoverMode ? (P = " s1h", L = RGBToHex(M.characterBgColorHover, ""), "" != L && (L = "background-color:" + L + ";"), M.characterColorHover = RGBToHex(M.characterColorHover, ""), "" != M.characterColorHover && (L += "color:" + M.characterColorHover + ";"), "" != M.characterFontHover && (L += "font-family:" + M.characterFontHover + ";"), "" != M.characterWeightHover && (L += "font-weight:" + M.characterWeightHover + ";"), "" != M.characterSizeHover && (L += "font-size:" + b.tParseInt(M.characterSizeHover) + "px;")) : L = K) : (I[d] && (K = RGBToHex(I[d], ""), "" != K && (K = "background-color:" + K + ";")), J[d] && (L = RGBToHex(J[d], ""), "" != L && (L = "background-color:" + L + ";"))), r || (z += '<li class="abs scm ' + B + O + l + '" data-i="' + k + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + P + '" style="border-radius:50%;width:100%;height:100%;' + L + '">' + N + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + K + '">' + N + "</div>" + "</li>"))))
					}), t += "</div></div>", db = "", eb = "", fb = "", gb = "", hb = "", ib = "", jb = c.contentType.length, kb = 0, lb = 0, mb = "", nb = "", ob = "", pb = "", "scrolly" != n ? (i > 0 && (jb += Math.ceil(i / e), kb = Math.ceil(i / e), lb = Math.ceil(i / e) % c.contentType.length), b.june.width() - (i + c.contentType.length * e) && (jb += Math.ceil((b.june.width() - (i + c.contentType.length * e)) / e)), "yes" == c.sliderOver && "yes" == c.sliderOverMongolia && (nb = '<div class="wfmc1 abs" style="left:-' + i + "px;top:0px;width:" + i + "px;height:" + g + "px; background:" + RGBToHex(c.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', ob = '<div class="abs" style="left:' + d + "px;top:0px;width:" + (b.june.width() - i - d) + "px;height:" + g + "px; background:" + RGBToHex(c.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>')) : (h > 0 && (jb += Math.ceil(h / f), kb = Math.ceil(h / f), lb = Math.ceil(h / f) % c.contentType.length), b.june.height() - (h + c.contentType.length * f) && (jb += Math.ceil((b.june.height() - (h + c.contentType.length * f)) / f)), "yes" == c.sliderOver && "yes" == c.sliderOverMongolia && (nb = '<div class="wfmc1 abs" style="top:-' + h + "px;left:0px;width:" + d + "px;height:" + h + "px; background:" + RGBToHex(c.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', ob = '<div class="abs" style="top:' + g + "px;left:0px;height:" + (b.june.height() - h - g) + "px;width:" + d + "px; background:" + RGBToHex(c.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>')), mb = ' data-f="' + kb + '"', "no" == c.sliderOver && (pb = "overflow:hidden;"), qb = "", rb = "", 0 != kb && (qb = "scrolly" != n ? "left:-" + kb * e + "px;" : "top:-" + kb * f + "px;"), "1" != c.sliderActive && ("scrollx" == n ? rb = "left:-" + o * e + "px;" : "scrolly" == n && (rb = "top:-" + o * f + "px;")), c.smallShowMode && "outbox" == c.smallShowMode && (E += " outbox"), c.smallShowCss && "" != c.smallShowCss && (ib = " " + c.smallShowCss + " " + c.smallShowSpeed), sb = "display:inline-block;", "scrolly" == n && (sb = "display:block;"), N = 0; jb > N; N++) {
						if (0 == N ? (eb = ' data-appid="' + c.appID + '" data-hsrc="' + A.join(",") + '"', fb = "top:" + h + "px;left:" + i + "px;", gb = E + " " + c.appID) : (eb = "", fb = "", gb = ""), db += '<div class="jwfb abs J_TWidget' + gb + '"' + eb + ' style="height:' + g + "px;width:" + d + "px;" + fb + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c_' + N + "_" + k + "','navCls':'n" + k + "','effect':'" + n + "','steps':" + (c.sliderMargin || 1) + ",'circular':true,'easing':'" + c.sliderEffect + "','duration':'0.5'," + u + "'autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + ",'delay':" + c.sliderDelay + ",'activeTriggerCls':'" + bb + "', 'triggerType': '" + c.sliderSwitch + "', 'activeIndex': " + (Math.ceil(c.sliderActive / (c.sliderMargin || 1)) - 1) + '}">', hb += "</div>", r = '<div class="scroller rel ' + D + '" style="overflow:hidden;width:' + e + "px;height:" + f + "px;z-index:10;" + sb + qb + '"><div class="ks-switchable-content c_' + N + "_" + k + '" style="display:initial;' + rb + '">', 0 != lb) {
							for (tb = [], ub = 0; ub < s.length; ub++) tb[ub] = 0 == (ub + (s.length - lb)) % s.length ? s[0] : s[(ub + (s.length - lb)) % s.length];
							lb = 0, s = tb
						}
						for (q += "yes" == c.sliderOver ? r + s.join("") + t : kb > N || N >= kb + c.contentType.length ? r + "" + t : r + s.join("") + t, tb = [], ub = 0; ub < s.length; ub++) tb[ub] = ub + 1 == s.length ? s[0] : s[ub + 1];
						s = tb
					}
					return q = '<div class="wfpanel abs" data-a="' + c.sliderActive + '"' + mb + ' style="height:' + g + "px;width:" + d + "px;white-space: nowrap;z-index:10;" + pb + '">' + q + "</div>", P && (vb = v, v = "", q = F + q + vb + "</div>"), db + v + q + '<ul class="ks-switchable-nav abs jfsb n' + k + ib + '" style="' + x + 'top:0px;left:0px;z-index:12;background:none;">' + z + "</ul>" + m + nb + ob + hb
				},
				codeImport: function(a, c, d, e) {
					var l, m, f, g, h, j, k, n, o, p, q, r, s, t, v, w, x, y, z, A, C, D, E, F, G, H, J, L, M, N, O, P, Q, R, S, U, V, W;
					if (d.hasClass("scrollable") || d.attr(" data-jtimes")) {
						for (f = JSON.parse(a.attr("data-config")), g = a.attr("data-dblType"), h = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')), j = d.attr("data-jtimes") || 5, k = {}, k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.customContent = [], k.contentType = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.thumbSet = [], k.thumbCircleSet = [], k.smallCircleMode = [], k.smallCircleBgColor = [], k.smallCircleBgColor1 = [], k.sliderMargin = 1, k.sliderActive = 1, k.sliderOver = "no", k.sliderSmallImg = "no", k.sWidth = "", k.sHeight = "", k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "hidden" != d.find("div.scroller").css("overflow") && (k.sliderOver = "yes"), d.find("div.wfmc1").length > 0 ? (k.sliderOverMongolia = "yes", k.sliderOverMongoliaColor = RGBToHex(d.find("div.wfmc1").css("background-color"))) : k.sliderOverMongolia = "no", n = d.find("div.haibaos_pic").length / j, o = 0; n > o; o++) p = d.find("div.haibaos_pic").eq(o), q = p.find("a.simple"), r = p.css("background-image").replace(/^url|[\(\"\)]*/g, ""), s = p.find("a.simple").attr("href"), t = p.find("img"), p.html(), q.length > 0 ? (k.sliderSrc.push(r), k.sliderHref.push(s)) : (k.sliderSrc.push(""), k.sliderHref.push("")), t.length > 0 ? (k.customContent.push('<div class="rel" style="width:' + p.width() + "px;height:" + p.height() + 'px;">' + p.find("a.simple").addClass("job").css("background", p.css("background")).prop("outerHTML") + "</div>"), k.contentType.push("customContent")) : (k.customContent.push(""), k.contentType.push("imgContent")), k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push("");
						d.find("div.haibaos_pic").length > 1 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = []), v = d.children(".smlldiv_btn"), k.sliderArrow = "none" == v.css("display") ? "no" : "yes", h.effect && (k.sliderMode = h.effect), h.autoplay && (k.sliderAuto = h.autoplay), h.easing && (k.sliderEffect = h.easing), h.interval && (k.sliderTime = h.interval), h.activeIndex && (k.sliderActive = b.tParseInt(h.activeIndex) + 1), h.steps && (k.sliderMargin = h.steps), w = v.children("span:eq(0)"), x = v.children("span:eq(1)"), v.children("span:eq(0)").hasClass("prevsamll") && (w = v.children("span:eq(0)").children("img:eq(0)"), x = v.children("span:eq(1)").children("img:eq(0)")), k.hrefMode = d.find("a.simple").attr("target") || "_blank", k.childConfig[0].oSrc = v.children("span:eq(0)").children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = v.children("span:eq(1)").children("img:eq(0)").attr("src"), k.childConfig[0].autoSize = "no", k.childConfig[0].autoSize1 = "no", v.children("span:eq(0)").children("img:eq(1)").length > 0 && (k.childConfig[0].oSrcHover = v.children("span:eq(0)").children("img:eq(1)").attr("src")), v.children("span:eq(1)").children("img:eq(1)").length > 0 && (k.childConfig[0].tSrcHover = v.children("span:eq(1)").children("img:eq(1)").attr("src")), l = b.getChildPos(d, w, !0), m = b.getChildPos(d, x, !0), y = $.extend(f, k), a.attr("data-config", JSON.stringify(y)), a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").attr("appID", k.appID), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").attr("appID", k.appID), a.attr("appID", k.appID), b.appConfig["jwfb"][1].tSubmit(y, a), a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + d.find("div.haibaos_pic").width() * (b.tParseInt(k.sliderActive) + k.contentType.length - 1) + "px"), e(g, k.appID)
					} else {
						if (f = JSON.parse(a.attr("data-config")), g = a.attr("data-dblType"), k = {}, C = d.attr("data-hsrc"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
							contentCls: "",
							navCls: "",
							effect: "scrolly",
							steps: 1,
							easing: "easeBoth",
							duration: "0.5",
							autoplay: !0,
							interval: 4,
							activeTriggerCls: "hidden",
							triggerType: "mouse"
						}, C = C ? C.split(",") : [], k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.customContent = [], k.contentType = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.thumbSet = [], k.thumbCircleSet = [], k.smallCircleMode = [], k.smallCircleBgColor = [], k.smallCircleBgColor1 = [], k.sliderMargin = 1, k.sliderActive = 1, k.sliderOver = "no", k.sWidth = "", k.sHeight = "", k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "hidden" != d.css("overflow") && (k.sliderOver = "yes"), d.find("div.wfpanel").length > 0 && "hidden" == d.find("div.wfpanel").css("overflow") && (k.sliderOver = "no"), d.children(".jwfb").length > 0) {
							for (k.shadeCount = 1; d.children(".jwfb").length > 0;) d = d.children(".jwfb"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
								contentCls: "",
								navCls: "",
								effect: "scrolly",
								steps: 1,
								easing: "easeBoth",
								duration: "0.5",
								autoplay: !0,
								interval: 4,
								activeTriggerCls: "hidden",
								triggerType: "mouse"
							}, d.hasClass("jwfbyys") || k.shadeCount++;
							k.shadeMode = "yes"
						}
						if (D = !1, 1 == d.children("ul").length && (D = !0), k.sliderActive = d.find("div.wfpanel").attr("data-a") || "1", d.hasClass("outbox") && (k.smallShowMode = "outbox"), E = (d.find(".ks-switchable-nav").attr("class") || "").match(/trans(\w+)s/g), F = (d.find(".ks-switchable-nav").attr("class") || "").match(/b-1-(lx|rx|dy|uy)(\d+)/g), E && E.length > 0 && (k.smallShowSpeed = E[0]), F && F.length > 0 && (k.smallShowCss = F[0]), G = d.find("div.wfpanel").attr("data-f") || 0, d.find("div.wfmc1").length > 0 ? (k.sliderOverMongolia = "yes", k.sliderOverMongoliaColor = RGBToHex(d.find("div.wfmc1").css("background-color"))) : (k.sliderOverMongolia = "no", k.sliderOverMongoliaColor = ""), H = require("scripts/other"), b.tParseInt(k.sliderActive) - 1, d.find(".scroller:eq(" + G + ")").children(".ks-switchable-content").children("div.elepic").each(function(a) {
							var e, f, g, h, i, j, c = $(this);
							c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), i = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), C[a] || (C[a] = ""), e.length > 0 ? (k.contentType.push("imgContent"), k.sliderSrc.push(f), k.sliderHref.push(g), k.customContent.push(""), i.hasClass("thumbsmall") ? (k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push(H.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j)) : (j = i.find("img:eq(0)").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j)), k.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (C[a] == f || C[a] == j) && (C[a] = ""), k.smallHoverSrcT.push(C[a]), k.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), k.thumbSet.push(""))) : (k.contentType.push("customContent"), k.sliderSrc.push(""), k.customContent.push(h), i.find("a").length > 0 ? (g = i.find("a").attr("href") || "", k.sliderHref.push(g)) : k.sliderHref.push(""), i.hasClass("thumbsmall") ? (k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push(H.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), k.smallImgSrc.push(j)) : (j = i.find("img:eq(0)").attr("src"), k.smallImgSrc.push(j)), C[a] == j && (C[a] = ""), k.smallImgSrcT.push(""), k.smallHoverSrc.push(C[a]), k.smallHoverSrcT.push(""), k.thumbSet.push("")))
						}), d.find(".scroller:eq(" + G + ")").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = []), h.effect && (k.sliderMode = h.effect), "true" != h.autoplay && (k.sliderAuto = h.autoplay), h.easing && (k.sliderEffect = h.easing), h.interval && (k.sliderTime = h.interval), h.triggerType && (k.sliderSwitch = h.triggerType), h.steps && (k.sliderMargin = h.steps), k.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", k.sliderArrow = "no", z = h.prevBtnCls, A = h.nextBtnCls, z && "undefined" != z) if (k.sliderArrow = "yes", k.childConfig[0].oSrc = d.find("." + z).children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = d.find("." + A).children("img:eq(0)").attr("src"), d.find("." + z).children("img").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + z).children("img:eq(1)").attr("src")), d.find("." + A).children("img").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + A).children("img:eq(1)").attr("src")), l = b.getChildPos(d, d.find("." + z), !0), m = b.getChildPos(d, d.find("." + A), !0), J = d.find("." + z), J.length > 0) {
							k.sliderArrow = "none" == J.css("display") ? "no" : "yes", k.displayMode = J.hasClass("june-box-fadein") ? "june-box-fadein" : "";
							try {
								k.css3Speed = J.attr("class").match(/trans(\w+)s/g).join(""), J.attr("class").indexOf("june-box-lx") >= 0 && (k.css3Mode = $.trim("moveout" + J.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), J.attr("class").indexOf("june-box-rx") >= 0 && (k.css3Mode = $.trim("movein" + J.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
							} catch (K) {}
						} else k.sliderArrow = "no", k.displayMode = "";
						a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").each(function() {
							b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
						}), a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").remove(), P = !0, d.children("ul:eq(0)").children("li").each(function(c) {
							var g, f, h, j, l, m, n, o, p, e = $(this);
							e.hasClass("scm") ? (k.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet.push(H.thumbCircleImport(e))) : (k.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), k.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), k.thumbCircleSet[c] = "")) : (k.smallCircleMode[c] = "no", k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet[c] = ""), f = k.contentType[c], "imgContent" == f ? (g = k.smallImgSrcT[c], "" == g && (g = k.smallHoverSrcT[c])) : (g = k.smallImgSrc[c], "" == g && (g = k.smallHoverSrc[c])), "" == g && (g = k.sliderSrc[c]), $(this).attr("data-i") ? k.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(k.childConfig[0]), "yes" != k.smallCircleMode[c] ? "" == k.thumbSet[c] ? $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + g + '"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID) : (h = JSON.parse(k.thumbSet[c]), $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), j = a.children(b.appChildCls + "[attachID='" + k.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(h, j), j.removeAttr("data-config")) : (l = "", m = "", n = "", o = "", "" == k.thumbCircleSet[c] ? l = k.smallCircleBgColor[c] || k.smallCircleBgColor1[c] || "" : (m = JSON.parse(k.thumbCircleSet[c]), o = m.characterContent, l = m.characterBgColor || m.characterBgColorHover || "", m.characterColor = RGBToHex(m.characterColor, ""), "" != m.characterColor && (n += "color:" + m.characterColor + ";"), "" != m.characterFont && (n += "font-family:" + m.characterFont + ";"), "" != m.characterWeight && (n += "font-weight:" + m.characterWeight + ";"), "" != m.characterSize && (n += "font-size:" + b.tParseInt(m.characterSize) + "px;")), p = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + n + '">' + o + "</div></div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), p.children(".t-jwfb-circle").css({
								backgroundColor: RGBToHex(l, ""),
								borderRadius: "50%"
							})), 0 == c && (L = $(this).width(), N = $(this).height()), M = $(this).width(), O = $(this).height(), (L != M || N != O) && (P = !1)
						}), P && (k.sWidth = L, k.sHeight = N), d.children(".ks-switchable-nav").find("li").each(function() {
							var a = $(this);
							return Q = a.css("background-image"), Q && Q.indexOf("img01") >= 0 ? (k.kgdSwitch = "white", !1) : Q && Q.indexOf("img02") >= 0 ? (k.kgdSwitch = "black", !1) : Q && Q.indexOf("img03") >= 0 ? (k.kgdSwitch = "transparent", !1) : void 0
						}), D && (R = RGBToHex(d.children(".ks-switchable-nav").find("li").children("a.s2").css("background-color"), ""), Q = "#ffffff" == R.toLowerCase() ? k.kgdSwitch = "white" : "#000000" == R.toLowerCase() ? k.kgdSwitch = "black" : void 0), Q || (k.kgdSwitch = "transparent"), "none" == d.children("ul:eq(0)").css("display") ? (k.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").hide()) : k.sliderSmallImg = "yes", S = d.children("div.lbepanel"), S.length > 0 && S.each(function() {
							var g, h, e = $(this),
								f = {};
							b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jwfb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", f.attachID), k.childConfig.push(f)
						}), y = $.extend(f, k), a.attr("data-config", JSON.stringify(y)), require("scripts/tAjax"), "no" == k.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").css({
							backgroundImage: "url(" + k.childConfig[0].oSrc + ")",
							width: 0 == l.width ? 48 : l.width,
							height: 0 == l.height ? 48 : l.height,
							top: l.top,
							left: l.left
						}).show(), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").css({
							backgroundImage: "url(" + k.childConfig[0].tSrc + ")",
							width: 0 == m.width ? 48 : m.width,
							height: 0 == m.height ? 48 : m.height,
							top: m.top,
							left: m.left
						}).show()), a.children(b.appOtherCls).html(""), U = d.find(".scroller:eq(0)").width(), V = d.find(".scroller:eq(0)").height(), W = b.tParseInt(k.sliderActive) - 1, a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").attr("appID", k.appID), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").attr("appID", k.appID), a.attr("appID", k.appID), b.appConfig["jwfb"][1].tSubmit(y, a), "scrolly" != y.sliderMode ? (a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + U * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").width(U)) : (a.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + V * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").height(V)), setTimeout(function() {
							"scrolly" != y.sliderMode ? (a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + U * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").width(U)) : (a.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + V * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").height(V))
						}, 100), e(g, k.appID)
					}
				}
			}, {
				appID: "",
				sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/39767794/TB2lb0.bXXXXXXaXXXXXXXXXXXX-39767794.jpg", "http://img04.taobaocdn.com/imgextra/i4/39767794/TB26_h3bXXXXXXhXpXXXXXXXXXX-39767794.jpg", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2LQp0bXXXXXaoXpXXXXXXXXXX-39767794.jpg"],
				sliderHref: ["#", "#", "#"],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallImgSrcT: ["", "", ""],
				smallHoverSrcT: ["", "", ""],
				customContent: ["", "", ""],
				thumbSet: ["", "", ""],
				contentType: ["imgContent", "imgContent", "imgContent"],
				smallCircleMode: ["yes", "yes", "yes"],
				smallCircleBgColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
				smallCircleBgColor1: ["#000000", "#000000", "#000000"],
				thumbCircleSet: ["", "", ""],
				sliderMode: "scrollx",
				kgdSwitch: "black",
				sliderArrow: "yes",
				sliderSmallImg: "yes",
				sliderEffect: "easeBoth",
				sliderTime: "4",
				sliderDelay: "0",
				sliderSwitch: "mouse",
				hrefMode: "_blank",
				sliderAuto: "true",
				kuandukz: "zdy",
				displayMode: "",
				css3Mode: "",
				css3Speed: "trans05s",
				sWidth: "15",
				sHeight: "15",
				defaultSmallImg: "",
				defaultSmallHover: "",
				sliderMargin: "1",
				sliderOver: "no",
				sliderOverMongolia: "yes",
				sliderOverMongoliaColor: "#000000",
				childConfig: [{
					attachID: "",
					autoSize: "yes",
					autoSize1: "yes",
					oSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2TMtPbXXXXXcdXXXXXXXXXXXX-39767794.png",
					tSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2RIxNbXXXXXc_XXXXXXXXXXXX-39767794.png",
					oSrcHover: "",
					tSrcHover: ""
				}]
			}],
			jqtb: ['<div class="t-app" data-dblType="jqtb"></div>',
			{
				tTitle: "嵌套轮播设置",
				tUrl: "nestslider.php",
				tSubmit: function(a, c) {
					var h, i, j, k, l, m, n, o, q, r, s, t, u, v, w, x, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jqtbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jqtbTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='lbePanel']");
					for (a.sliderOverflow && "visible" == a.sliderOverflow ? c.children(b.appOtherCls).css("overflow", "visible") : c.children(b.appOtherCls).css("overflow", "hidden"), checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), "yes" == a.sliderArrow ? (e.show(), f.show()) : (e.hide(), f.hide()), c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:gt(" + (a.sliderHref.length - 1) + ")").hide(), h = $(this), i = "", j = 0, k = 0, l = 0; l < a.sliderHref.length; l++) h = c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:eq(" + l + ")"), i = "", a.smallCircleMode[l] && "yes" == a.smallCircleMode[l] ? (o = a.smallCircleBgColor[l] || a.smallCircleBgColor1[l] || "", q = "", r = "", h.length > 0 ? (h.html('<div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + q + '">' + r + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && h.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && h.css({
						height: a.sHeight
					}), h.children(".t-jqtb-circle").css({
						backgroundColor: RGBToHex(o, ""),
						borderRadius: "50%"
					}), h.css({
						lineHeight: h.height() + "px"
					}).show()) : (m = 21, n = 21, "" != a.sWidth && $.isNumeric(a.sWidth) && (m = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (n = a.sHeight), b.setAttachID(a.childConfig[0]), h = $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(m)) + "px;width:" + m + "px;height:" + n + "px;line-height:" + n + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + q + '">' + r + "</div></div>").tResize().insertAfter(lastSmall).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), h.children(".t-jqtb-circle").css({
						backgroundColor: RGBToHex(o, ""),
						borderRadius: "50%"
					}))) : (i = "" != a.smallImgSrc[l] ? a.smallImgSrc[l] : "" != a.smallHoverSrc[l] ? a.smallHoverSrc[l] : a.nestConfig[0].sliderSrc[l], h.length > 0 ? (checkUrl(i) && h.children("img").attr({
						src: i
					}), "" != a.sWidth && $.isNumeric(a.sWidth) && h.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && h.css({
						height: a.sHeight
					}), h.show()) : (m = 21, n = 25, "" != a.sWidth && $.isNumeric(a.sWidth) && (m = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (n = a.sHeight), b.setAttachID(a.childConfig[0]), $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(m)) + "px;width:" + m + "px;height:" + n + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + i + '"></div>').tResize().appendTo(c).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), j = b.tParseInt(h.css("left")), k = b.tParseInt(h.css("top"));
					for (c.children(b.appOtherCls).html(""), l = 0; l < a.nestConfig.length; l++) t = a.nestConfig[l].sliderFloorWidth ? a.nestConfig[l].sliderFloorWidth + "px" : "100%", u = a.nestConfig[l].sliderFloorHeight ? a.nestConfig[l].sliderFloorHeight + "px" : "100%", v = a.nestConfig[l].sliderFloorTop || 0, w = a.nestConfig[l].sliderFloorLeft || 0, "customContent" == a.nestConfig[l].contentType[0] ? s = '<div style="position:absolute;width:' + t + ";height:" + u + ";top:" + v + "px;left:" + w + 'px;">' + a.nestConfig[l].customContent[0] + "</div>" : (x = "", checkUrl(a.nestConfig[l].sliderSrc[0]) && (x = "background:url(" + a.nestConfig[l].sliderSrc[0] + ") no-repeat center center;"), s = '<div style="position:absolute;width:' + t + ";height:" + u + ";top:" + v + "px;left:" + w + "px;" + x + '"></div>'), c.children(b.appOtherCls).append(s);
					"no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:lt(" + a.sliderHref.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:lt(" + a.sliderHref.length + ")").show(), g.length > 0 && g.each(function(c) {
						a.childConfig[c + 1] && $(this).html(b.appMongolia + a.childConfig[c + 1].customContent).css({
							zIndex: 99 + b.tParseInt(a.childConfig[c + 1].zFloor)
						}).tResize()
					}), c.attr("data-config", JSON.stringify(a))
				},
				tDynamic: '<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg"><img width="120" height="60" src=""/></div>',
				tDynamic1: '<div class="t-app-child t-app-custom" data-dblType="jqtb" data-attachType="lbePanel" style="width:100%;height:100%;"></div>',
				tDynamicConfig: {
					attachID: "",
					zFloor: "1",
					smallShowCss: "",
					smallShowSpeed: "trans02s",
					customContent: ""
				},
				tContent: '<div class="t-app-child t-jqtb-arrow" data-dblType="jqtb" data-attachType="jqtbOArrow"></div><div class="t-app-child t-jqtb-arrow" data-dblType="jqtb" data-attachType="jqtbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function(a) {
					var y, H, I, J, K, L, M, N, O, P, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig[0],
						i = (new Date).valueOf().toString().substr(7, 6),
						j = a.children(b.appChildCls + "[data-attachType='lbePanel']"),
						k = "",
						m = c.sliderOverflow || "hidden",
						n = '<div class="scroller" style="overflow:' + m + ";width:" + d + "px;height:" + e + 'px;z-index:10;">',
						o = "",
						p = "",
						q = "",
						r = "",
						s = "display:none;",
						t = "",
						u = "",
						v = "",
						w = [],
						x = "",
						z = "",
						A = "",
						B = "",
						C = c.smallCircleMode || [],
						D = c.smallCircleBgColor || [],
						E = c.smallCircleBgColor1 || [],
						F = "",
						G = "";
					return "" == c.displayMode && "" == c.css3Mode || "yes" != c.sliderArrow || (B = " jspb j-b", F = " " + c.css3Speed, G = " " + c.css3Speed, "june-box-fadein" == c.displayMode && (F += " june-box-fadein", G += " june-box-fadein"), c.css3Mode.indexOf("moveout") >= 0 && (F += " june-box-lx" + c.css3Mode.replace(/moveout/g, ""), G += " june-box-rx" + c.css3Mode.replace(/moveout/g, "")), c.css3Mode.indexOf("movein") >= 0 && (F += " june-box-rx" + c.css3Mode.replace(/movein/g, ""), G += " june-box-lx" + c.css3Mode.replace(/movein/g, ""))), y = "white" == c.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == c.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", J = a.children(b.appChildCls + "[data-attachType='jqtbOArrow']"), K = a.children(b.appChildCls + "[data-attachType='jqtbTArrow']"), H = b.setChildPos(a, J, !0), I = b.setChildPos(a, K, !0), L = "", z = "", A = "", M = "", N = "", O = "", P = "", "yes" == c.sliderArrow && (checkUrl(h.oSrc) && (z = 'src="' + h.oSrc + '" alt="上一页"'), checkUrl(h.tSrc) && (A = 'src="' + h.tSrc + '" alt="下一页"'), checkUrl(h.oSrcHover) && (M = 'src="' + h.oSrcHover + '" alt="上一页"'), checkUrl(h.tSrcHover) && (N = 'src="' + h.tSrcHover + '" alt="下一页"'), O = "<img " + z + " />", P = "<img " + A + " />", ("" != M || "" != N) && (L = " junefade", O = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + z + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + M + " />", P = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + A + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + N + " />")), "yes" == c.sliderArrow && (s = ""), !0 && (q = " 'prevBtnCls': 'prev" + i + "', 'nextBtnCls': 'next" + i + "', "), !0 && (r = '<span class="abs prev' + i + F + L + '" style="' + s + "cursor:pointer;width:" + H.width + "px;height:" + H.height + "px;top:" + H.top + "px;left:" + H.left + 'px;z-index:14;">' + O + '</span><span class="abs next' + i + G + L + '" style="' + s + "cursor:pointer;width:" + I.width + "px;height:" + I.height + "px;top:" + I.top + "px;left:" + I.left + 'px;z-index:14;">' + P + "</span>"), j.length > 0 && j.each(function(a) {
						var e = $(this),
							f = e.width(),
							g = e.height(),
							h = b.tParseInt(e.css("top")),
							i = b.tParseInt(e.css("left")),
							j = "";
						c.childConfig[a + 1] && ("" == B && (B = " j-b"), j = " " + c.childConfig[a + 1].smallShowCss + " " + (c.childConfig[a + 1].smallShowSpeed || "trans02s"), k += '<div class="abs lbepanel' + j + '" style="overflow: hidden;width:' + f + "px;height:" + g + "px;top:" + h + "px;left:" + i + "px;z-index:" + (10 + b.tParseInt(c.childConfig[a + 1].zFloor)) + ';">' + c.childConfig[a + 1].customContent + "</div>")
					}), $.each(c.nestConfig, function(h) {
						var t, y, z, A, k = c.nestConfig[h],
							l = k.sliderFloorWidth || a.width(),
							m = k.sliderFloorHeight || a.height(),
							r = k.sliderFloorTop || 0,
							s = k.sliderFloorLeft || 0;
						n += '<div class="abs june-nsc" style="z-index: ' + (h + 1) + ";width:" + l + "px;height:" + m + "px;top:" + r + "px;left:" + s + 'px;overflow:hidden;"><div class="ks-switchable-content n' + h + "c" + i + '">', t = k.sliderMode, y = "", z = "a", "1" == t.substr(-1) && (t = t.substr(0, t.length - 1), z = "b", y = ", 'viewSize': ["), $.each(c.sliderHref, function(d) {
							var g, f, i, j, o, p, q, r, s, A, B, F, I, J, K, L, M, N, O, P, Q;
							0 == h && (x = 0 == d ? "juneactive" : "", f = a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:eq(" + d + ")"), i = f.attr("attachID") || "", j = " " + i, g = b.getChildPos(a, f, !0), o = c.smallImgSrc[d], p = c.smallHoverSrc[d], q = !1, r = "", "" == p && (p = o, q = !0), "" == p && (p = c.nestConfig[0].sliderSrc[d], q = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrc[d] && (q = !0), "" == o && (o = c.nestConfig[0].sliderSrc[d]), w.push(p), checkUrl(p) && (r = 'src="' + p + '"'), s = "", "" != c.smallHref[d] && (s = ' href="' + c.smallHref[d] + '"'), u = "<a" + s + ' target="_blank" class="abs s1" style="top:0px;left:0px;width:' + g.width + "px;height:" + g.height + 'px;"><img ' + r + ' style="width:' + g.width + "px;height:" + g.height + 'px;"></a>', q ? (K = "opacity:0.7;", L = "background:#000;", "white" == c.kgdSwitch && (L = "background:#fff;"), A = "<a" + s + ' target="_blank" class="abs s2" style="' + L + "top:0px;left:0px;width:" + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="' + K + "width:" + g.width + "px;height:" + g.height + 'px;"></a>', "click" == c.sliderSwitch && (A = '<a class="abs s2" style="' + L + "top:0px;left:0px;width:" + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="' + K + "width:" + g.width + "px;height:" + g.height + 'px;"></a>'), "yes" != C[d] ? v += '<li class="abs ' + x + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;">' + A + u + "</li>" : (B = "", F = "", I = "", J = "", D[d] && (B = RGBToHex(D[d], ""), "" != B && (B = "background-color:" + B + ";")), E[d] && (F = RGBToHex(E[d], ""), "" != F && (F = "background-color:" + F + ";")), v += '<li class="abs scm ' + x + I + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;line-height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + J + '" style="border-radius:50%;width:100%;height:100%;' + F + '"><a' + s + ' target="_blank" style="display:block;width:100%;height:100%;"></a></div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + B + '"></div>' + "</li>")) : (A = "<a" + s + ' target="_blank" class="abs s2" style="top:0px;left:0px;width:' + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="width:' + g.width + "px;height:" + g.height + 'px;"></a>', "click" == c.sliderSwitch && (A = '<a class="abs s2" style="top:0px;left:0px;width:' + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="width:' + g.width + "px;height:" + g.height + 'px;"></a>'), "yes" != C[d] ? v += '<li class="abs ' + x + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;">' + A + u + "</li>" : (B = "", F = "", I = "", J = "", D[d] && (B = RGBToHex(D[d], ""), "" != B && (B = "background-color:" + B + ";")), E[d] && (F = RGBToHex(E[d], ""), "" != F && (F = "background-color:" + F + ";")), v += '<li class="abs scm ' + x + I + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;line-height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + J + '" style="border-radius:50%;width:100%;height:100%;' + F + '"><a' + s + ' target="_blank" style="display:block;width:100%;height:100%;"></a></div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + B + '"></div>' + "</li>"))), M = "", N = "", O = "", "b" == z && ("scrollx" == t ? (O = d * l, N = "left:-" + O + "px;", y += "-" + l + ",") : "scrolly" == t && (O = d * m, N = "top:-" + O + "px;", y += "-" + m + ","), M = " abs"), "imgContent" == k.contentType[d] ? (P = "", Q = "", "" != c.sliderHref[d] && (P = ' href="' + c.sliderHref[d] + '"'), "" != k.sliderSrc[d] && (Q = "background:url(" + k.sliderSrc[d] + ") no-repeat scroll center center transparent;"), n += '<div class="elepic" style="height:' + m + "px;width:" + l + "px;display:block;float:left;" + Q + '"><div class="elexb' + M + '" style="height:' + m + "px;width:" + l + "px;" + N + Q + '"><a class="J_TWidget"' + P + ' target="' + c.hrefMode + '" style="height:' + m + "px;width:" + l + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>') : n += '<div class="elepic" style="height:' + m + "px;width:" + l + 'px;display:block;float:left;"><div class="elexb' + M + '" style="height:' + m + "px;width:" + l + "px;" + N + '">' + k.customContent[d] + "</div></div>"
						}), n += "</div></div>", A = "", 0 == h && (A = "height:" + e + "px;width:" + d + "px;top:" + f + "px;left:" + g + "px;"), "b" == z && (y = y.substr(0, y.length - 1) + "]"), o += '<div class="jqtb abs J_TWidget' + B + " " + c.appID + '" data-appid="' + c.appID + '" data-s="' + z + '" style="' + A + 'z-index:10;" data-hsrc="' + w.join(",") + '" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'n' + h + "c" + i + "','navCls':'n" + i + "','effect':'" + t + "','steps':1,'circular':true,'easing':'" + k.sliderEffect + "','duration':'" + k.sliderDuration + "', 'delay':'" + (k.sliderDelay || 0) + "'," + q + "'autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + ",'activeTriggerCls':'juneactive', 'triggerType': '" + c.sliderSwitch + "'" + y + '}">', p += "</div>"
					}), n += "</div>", "no" == c.sliderSmallImg && (t = "display:none;"), o + r + n + '<ul class="ks-switchable-nav abs jfsb n' + i + '" style="' + t + 'top:0px;left:0px;z-index:12;background:none;">' + v + "</ul>" + k + p
				},
				codeImport: function(a, c, d, e) {
					var j, k, l, m, q, r, s, t, u, w, x, y, z, A, B, C, E, F, G, H, I, J, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = [],
						i = {},
						n = 1,
						p = d.attr("data-hsrc");
					for (d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? h.push(JSON.parse(d.attr("data-widget-config").replace(/'/g, '"'))) : h.push({
						contentCls: "",
						navCls: "",
						effect: "scrolly",
						steps: 1,
						easing: "easeBoth",
						duration: "0.5",
						autoplay: !0,
						interval: 4,
						activeTriggerCls: "hidden",
						triggerType: "mouse"
					}), p = p ? p.split(",") : [], i.childConfig = [], i.nestConfig = [], i.childConfig[0] = {}, i.nestConfig[0] = {}, i.nestConfig[0].contentType = [], i.nestConfig[0].sliderSrc = [], i.nestConfig[0].customContent = [], i.sliderHref = [], i.smallHref = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.smallCircleMode = [], i.smallCircleBgColor = [], i.smallCircleBgColor1 = [], i.sliderOverflow = "hidden", i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), q = []; d.children("div").hasClass("jqtb");) i.nestConfig[n] = {}, i.nestConfig[n].contentType = [], i.nestConfig[n].sliderSrc = [], i.nestConfig[n].customContent = [], q.push(d.attr("data-s") || "a"), d = d.children("div"), d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? h.push(JSON.parse(d.attr("data-widget-config").replace(/'/g, '"'))) : h.push({
						contentCls: "",
						navCls: "",
						effect: "scrolly",
						steps: 1,
						easing: "easeBoth",
						duration: "0.5",
						autoplay: !0,
						interval: 4,
						activeTriggerCls: "hidden",
						triggerType: "mouse"
					}), n++;
					for (q.push(d.attr("data-s") || "a"), "visible" == d.children(".scroller").css("overflow") && (i.sliderOverflow = "visible"), d.children(".scroller").children(".june-nsc").children(".ks-switchable-content").each(function(a) {
						var d = $(this),
							f = (q[a], $(this).parent());
						d.children("div.elepic").each(function(b) {
							var e, f, g, h, d = $(this);
							d.children("div.elexb").length > 0 && (d = d.children("div.elexb")), e = d.children("a.J_TWidget"), f = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = d.children("a.J_TWidget").attr("href") || "", h = d.html(), e.length > 0 ? (i.sliderHref[b] && "" != i.sliderHref[b] || (i.sliderHref[b] = g), i.nestConfig[a].contentType.push("imgContent"), i.nestConfig[a].sliderSrc.push(f), i.nestConfig[a].customContent.push("")) : (i.sliderHref[b] || (i.sliderHref[b] = ""), i.nestConfig[a].contentType.push("customContent"), i.nestConfig[a].sliderSrc.push(""), i.nestConfig[a].customContent.push(h))
						}), i.nestConfig[a].sliderFloorWidth = f.width(), i.nestConfig[a].sliderFloorHeight = f.height(), i.nestConfig[a].sliderFloorTop = b.tParseInt(f.css("top")), "auto" == f.css("top") && (i.nestConfig[a].sliderFloorTop = 0), i.nestConfig[a].sliderFloorLeft = b.tParseInt(f.css("left")), "auto" == f.css("left") && (i.nestConfig[a].sliderFloorLeft = 0)
					}), d.children(".scroller").children(".june-nsc").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.smallImgSrc = [], f.smallHoverSrc = [], f.smallHref = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = []), d.children(".ks-switchable-nav").find("li").each(function(a) {
						var e, g, f, h, j, c = $(this);
						r = c.css("background-image"), r && r.indexOf("img01") >= 0 ? i.kgdSwitch = "white" : r && r.indexOf("img02") >= 0 ? i.kgdSwitch = "black" : r && r.indexOf("img03") >= 0 && (i.kgdSwitch = "transparent"), e = RGBToHex(c.children("a.s2").css("background-color"), ""), r = "#ffffff" == e.toLowerCase() ? i.kgdSwitch = "white" : "#000000" == e.toLowerCase() ? i.kgdSwitch = "black" : void 0, p[a] || (p[a] = ""), f = c.find("img"), g = f.length > 0 ? f.attr("src") : p[a], i.smallImgSrc.push(g), p[a] == g && r && (p[a] = ""), i.smallHoverSrc.push(p[a]), h = d.children("ul:eq(0)").find("li:eq(" + a + ")"), j = "", h.length > 0 && (j = h.children("a:eq(0)").attr("href") || "", "" == j && h.children("a:eq(1)").length > 0 && (j = h.children("a:eq(1)").attr("href") || "")), i.smallHref.push(j)
					}), r || i.kgdSwitch || (i.kgdSwitch = "transparent"), s = 0; s < h.length; s++) t = q[s], h[s].effect && (i.nestConfig[s].sliderMode = h[s].effect), h[s].easing && (i.nestConfig[s].sliderEffect = h[s].easing), h[s].duration && (i.nestConfig[s].sliderDuration = h[s].duration), h[s].delay && (i.nestConfig[s].sliderDelay = h[s].delay), "b" == t && (i.nestConfig[s].sliderMode += "1");
					if (h[0].autoplay && (i.sliderAuto = h[0].autoplay), h[0].interval && (i.sliderTime = h[0].interval), h[0].triggerType && (i.sliderSwitch = h[0].triggerType), i.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", i.sliderArrow = "no", l = h[0].prevBtnCls, m = h[0].nextBtnCls, l && "undefined" != l) if (i.sliderArrow = "yes", i.childConfig[0].oSrc = d.find("." + l).children("img").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src")), j = b.getChildPos(d, d.find("." + l), !0), k = b.getChildPos(d, d.find("." + m), !0), u = d.find("." + l), u.length > 0) {
						i.sliderArrow = "none" == u.css("display") ? "no" : "yes", i.displayMode = u.hasClass("june-box-fadein") ? "june-box-fadein" : "";
						try {
							i.css3Speed = u.attr("class").match(/trans(\w+)s/g).join(""), u.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + u.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), u.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + u.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
						} catch (v) {}
					} else i.displayMode = "", i.sliderArrow = "no";
					for (a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").each(function() {
						b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
					}), a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").remove(), A = !0, d.children("ul:eq(0)").find("li").each(function(c) {
						var g, j, k, l, e = $(this),
							f = i.smallImgSrc[c];
						"" == f && (f = i.nestConfig[0].sliderSrc[c]), e.hasClass("scm") ? (i.smallCircleMode[c] = "yes", i.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), i.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), i.smallHref[c] = e.children(".s1").children("a").attr("href") || "") : (i.smallCircleMode[c] = "no", i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = ""), $(this).attr("data-i") ? i.childConfig[0].attachID = e.attr("data-i") : b.setAttachID(i.childConfig[0]), "yes" != i.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + f + '"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : (g = "", j = "", k = "", g = i.smallCircleBgColor[c] || i.smallCircleBgColor1[c] || "", l = $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + j + '">' + k + "</div></div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), l.children(".t-jqtb-circle").css({
							backgroundColor: RGBToHex(g, ""),
							borderRadius: "50%"
						})), 0 == c && (w = $(this).width(), y = $(this).height()), x = $(this).width(), z = $(this).height(), (w != x || y != z) && (A = !1)
					}), A && (i.sWidth = w, i.sHeight = y), "none" == d.children("ul:eq(0)").css("display") ? (i.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").hide()) : i.sliderSmallImg = "yes", B = d.children("div.lbepanel"), B.length > 0 && B.each(function() {
						var g, h, e = $(this),
							f = {};
						b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jqtb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", f.attachID), i.childConfig.push(f)
					}), C = $.extend(f, i), a.attr("data-config", JSON.stringify(C)), require("scripts/tAjax"), "no" == i.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").css({
						backgroundImage: "url(" + i.childConfig[0].oSrc + ")",
						width: 0 == j.width ? 48 : j.width,
						height: 0 == j.height ? 48 : j.height,
						top: j.top,
						left: j.left
					}).show(), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").css({
						backgroundImage: "url(" + i.childConfig[0].tSrc + ")",
						width: 0 == k.width ? 48 : k.width,
						height: 0 == k.height ? 48 : k.height,
						top: k.top,
						left: k.left
					}).show()), a.children(b.appOtherCls).html(""), s = 0; s < i.nestConfig.length; s++) F = i.nestConfig[s].sliderFloorWidth ? i.nestConfig[s].sliderFloorWidth + "px" : "100%", G = i.nestConfig[s].sliderFloorHeight ? i.nestConfig[s].sliderFloorHeight + "px" : "100%", H = i.nestConfig[s].sliderFloorTop || 0, I = i.nestConfig[s].sliderFloorLeft || 0, "customContent" == i.nestConfig[s].contentType[0] ? E = '<div style="position:absolute;width:' + F + ";height:" + G + ";top:" + H + "px;left:" + I + 'px;">' + i.nestConfig[s].customContent[0] + "</div>" : (J = "", checkUrl(i.nestConfig[s].sliderSrc[0]) && (J = "background:url(" + i.nestConfig[s].sliderSrc[0] + ") no-repeat center center;"), E = '<div style="position:absolute;width:' + F + ";height:" + G + ";top:" + H + "px;left:" + I + "px;" + J + '"></div>'), a.children(b.appOtherCls).append(E);
					a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				nestConfig: [{
					contentType: ["imgContent", "imgContent", "imgContent"],
					sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/39767794/TB2siPLXpXXXXbiXpXXXXXXXXXX-39767794.jpg", "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2XgBBbXXXXXanXpXXXXXXXXXX-39767794.jpg", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2N9FDbXXXXXXxXpXXXXXXXXXX-39767794.jpg"],
					customContent: ["", "", ""],
					sliderMode: "scrollx",
					sliderEffect: "easeBoth",
					sliderDuration: "0.5",
					sliderDelay: "0",
					sliderFloorWidth: "",
					sliderFloorHeight: "",
					sliderFloorTop: "",
					sliderFloorLeft: ""
				}, {
					contentType: ["imgContent", "imgContent", "imgContent"],
					sliderSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2i0NIbXXXXXcwXXXXXXXXXXXX-39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2nP4ObXXXXXa.XXXXXXXXXXXX-39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB235XHbXXXXXcDXXXXXXXXXXXX-39767794.png"],
					customContent: ["", "", ""],
					sliderMode: "fade",
					sliderEffect: "easeBoth",
					sliderDuration: "0.2",
					sliderDelay: "0",
					sliderFloorWidth: "",
					sliderFloorHeight: "",
					sliderFloorTop: "",
					sliderFloorLeft: ""
				}, {
					contentType: ["imgContent", "imgContent", "imgContent"],
					sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/39767794/TB223tBbXXXXXbhXpXXXXXXXXXX-39767794.png", "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2.2tBbXXXXXaIXpXXXXXXXXXX-39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2.HpHbXXXXXcmXXXXXXXXXXXX-39767794.png"],
					customContent: ["", "", ""],
					sliderMode: "scrolly",
					sliderEffect: "easeBoth",
					sliderDuration: "0.5",
					sliderDelay: "0",
					sliderFloorWidth: "",
					sliderFloorHeight: "",
					sliderFloorTop: "",
					sliderFloorLeft: ""
				}],
				sliderHref: ["#", "#", "#"],
				smallHref: ["#", "#", "#"],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallCircleMode: ["no", "no", "no"],
				smallCircleBgColor: ["", "", ""],
				smallCircleBgColor1: ["", "", ""],
				sliderOverflow: "hidden",
				kgdSwitch: "transparent",
				sliderArrow: "yes",
				sliderSmallImg: "yes",
				sliderTime: "4",
				sliderSwitch: "click",
				hrefMode: "_blank",
				sliderAuto: "false",
				kuandukz: "zdy",
				displayMode: "",
				css3Mode: "",
				css3Speed: "trans05s",
				sWidth: "",
				sHeight: "",
				defaultSmallImg: "",
				defaultSmallHover: "",
				childConfig: [{
					attachID: "",
					autoSize: "yes",
					autoSize1: "yes",
					oSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2TMtPbXXXXXcdXXXXXXXXXXXX-39767794.png",
					tSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2RIxNbXXXXXc_XXXXXXXXXXXX-39767794.png",
					oSrcHover: "",
					tSrcHover: ""
				}]
			}],
			jfsb: ['<div class="t-app" data-dblType="jfsb"></div>',
			{
				tTitle: "轮播设置",
				tUrl: "focusslider.php",
				tSubmit: function(a, c) {
					var i, j, k, l, m, n, o, p, q, r, s, t, u, w, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jfsbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jfsbTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='lbePanel']");
					for (c.tResize("destory"), checkUrl(a.sliderSrc[0]) ? c.css({
						backgroundImage: "url(" + a.sliderSrc[0] + ")"
					}) : c.css({
						backgroundImage: "none"
					}), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), "yes" == a.sliderArrow ? (checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), e.show(), f.show()) : (e.hide(), f.hide()), !a.thumbSet && (a.thumbSet = []), !a.thumbCircleSet && (a.thumbCircleSet = []), !a.smallCustom && (a.smallCustom = []), c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:gt(" + (a.contentType.length - 1) + ")").hide(), i = "", j = 0, k = 0, l = 0; l < a.contentType.length; l++) m = c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + l + ")"), i = "", n = c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + (l - 1) + ")"), 0 == l && (n = c.children(b.appOtherCls)), a.smallCircleMode[l] && "yes" == a.smallCircleMode[l] ? (o = a.smallCircleBgColor[l] || a.smallCircleBgColor1[l] || "", p = "", q = "", r = "", a.thumbCircleSet[l] && "" != a.thumbCircleSet[l] && (p = JSON.parse(a.thumbCircleSet[l]), r = p.characterContent, o = p.characterBgColor || p.characterBgColorHover || "", p.characterColor = RGBToHex(p.characterColor, ""), "" != p.characterColor && (q += "color:" + p.characterColor + ";"), "" != p.characterFont && (q += "font-family:" + p.characterFont + ";"), "" != p.characterWeight && (q += "font-weight:" + p.characterWeight + ";"), "" != p.characterSize && (q += "font-size:" + b.tParseInt(p.characterSize) + "px;")), m.length > 0 ? (m.html('<div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + q + '">' + r + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && m.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && m.css({
						height: a.sHeight
					}), m.children(".t-jfsb-circle").css({
						backgroundColor: RGBToHex(o, ""),
						borderRadius: "50%"
					}), m.css({
						lineHeight: m.height() + "px"
					}).show()) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + "px;line-height:" + t + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + q + '">' + r + "</div></div>").tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), m.children(".t-jfsb-circle").css({
						backgroundColor: RGBToHex(o, ""),
						borderRadius: "50%"
					}))) : a.smallCircleMode[l] && "yes1" == a.smallCircleMode[l] ? (!a.smallCustom[l] && (a.smallCustom[l] = ""), m.length > 0 ? (m.html('<div class="t-app-mongolia"></div>' + a.smallCustom[l]).tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && m.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && m.css({
						height: a.sHeight
					}), m.show()) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + a.smallCustom[l] + "</div>").tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))) : a.thumbSet[l] && "" != a.thumbSet[l] ? (u = JSON.parse(a.thumbSet[l]), m.length > 0 ? (m.html(""), b.appConfig["jcb"][1].tSubmit(u, m), m.removeAttr("data-config")) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + 'px;z-index:101;"></div>').tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), w = c.children(b.appChildCls + "[attachID='" + a.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(u, w), w.removeAttr("data-config"))) : (i = "imgContent" == a.contentType[l] ? "" != a.smallImgSrcT[l] ? a.smallImgSrcT[l] : "" != a.smallHoverSrcT[l] ? a.smallHoverSrcT[l] : a.sliderSrc[l] : "" != a.smallImgSrc[l] ? a.smallImgSrc[l] : "" != a.smallHoverSrc[l] ? a.smallHoverSrc[l] : a.sliderSrc[l], m.length > 0 ? (checkUrl(i) ? m.children("img").length > 0 ? m.children("img").attr({
						src: i
					}) : m.html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + i + '">').tResize() : m.children("img").removeAttr("src"), "" != a.sWidth && $.isNumeric(a.sWidth) && m.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && m.css({
						height: a.sHeight
					}), m.show()) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + i + '"></div>').tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), j = b.tParseInt(m.css("left")), k = b.tParseInt(m.css("top"));
					c.children(b.appOtherCls).html(""), "customContent" == a.contentType[0] && (c.css({
						backgroundImage: ""
					}), c.children(b.appOtherCls).html(a.customContent[0])), "no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:lt(" + a.contentType.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:lt(" + a.contentType.length + ")").show(), g.length > 0 && g.each(function(c) {
						a.childConfig[c + 1] && $(this).html(b.appMongolia + a.childConfig[c + 1].customContent).css({
							zIndex: 99 + b.tParseInt(a.childConfig[c + 1].zFloor)
						}).tResize()
					}), c.attr("data-config", JSON.stringify(a)).tResize()
				},
				tOtherSetConfig: {
					characterLineMulti: "no",
					characterLineHeight: "",
					characterLineContent: "",
					characterLineAlign: "left",
					characterLineSpace: "",
					characterTBpadding: "",
					characterLetterSpacing: "",
					characterContent: "",
					characterMode: "text",
					characterItemContent: "",
					characterFixed: "2",
					characterHoverMode: "off",
					characterHoverSpeed: "",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "宋体",
					characterColorHover: "#000000",
					characterBgSrcHover: "",
					characterBgColorHover: "",
					characterUnderLine: "off",
					characterUnderLineStyle: "solid",
					characterUnderLineWeight: "1",
					characterUnderLineColor: "#000000",
					ssOpacity: "1",
					ssOpacity1: "1",
					characterWeight: "normal",
					characterStyle: "normal",
					characterLineUnder: "",
					characterLineThrough: "",
					characterWidthMode: "normal",
					characterAlign: "center",
					characterFont: "宋体",
					characterSize: "12",
					characterColor: "#000000",
					characterBgColor: "",
					characterLeftPadding: "",
					characterRightPadding: "",
					characterBgSrc: "",
					borderControl: "",
					borderColor: "#000000",
					borderWidth: "1",
					borderRadius: "0",
					shadowControl: "",
					shadowLeft: "0",
					shadowTop: "0",
					shadowBlur: "5",
					shadowSize: "0",
					shadowColor: "#666666",
					shadowStyle: "",
					borderControl1: "",
					borderColor1: "#000000",
					borderWidth1: "1",
					borderRadius1: "0",
					shadowControl1: "",
					shadowLeft1: "0",
					shadowTop1: "0",
					shadowBlur1: "5",
					shadowSize1: "0",
					shadowColor1: "#666666",
					shadowStyle1: "",
					outlineControl: "",
					outlineWidth: "juneol",
					outlineSpeed: "trans02s",
					outlineColor: "#FFFFFF",
					outlineShadowColor: "#666666",
					css3ModeX1: "",
					css3ModeY1: "",
					css3Mode1: ""
				},
				tOtherSetConfig1: {
					characterContent: "",
					characterSize: "12",
					characterWeight: "normal",
					characterFont: "宋体",
					characterColor: "#000000",
					characterBgColor: "",
					characterHoverMode: "off",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "宋体",
					characterColorHover: "#000000",
					characterBgColorHover: ""
				},
				tDynamic: '<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg"><img width="120" height="120" src=""/></div>',
				tDynamic1: '<div class="t-app-child t-app-custom" data-dblType="jfsb" data-attachType="lbePanel" style="width:100%;height:100%;"></div>',
				tDynamicConfig: {
					attachID: "",
					zFloor: "1",
					smallShowCss: "",
					smallShowSpeed: "trans02s",
					customContent: ""
				},
				tContent: '<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbOArrow"></div><div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function(a) {
					var e, q, D, Z, S, T, U, V, W, X, Y, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						f = a.height(),
						g = b.tParseInt(a.css("top")),
						h = b.tParseInt(a.css("left")),
						i = c.childConfig[0],
						j = (new Date).valueOf().toString().substr(7, 6),
						k = a.children(b.appChildCls + "[data-attachType='lbePanel']"),
						l = "",
						m = c.sliderMode,
						n = c.sliderOverflow || "hidden",
						o = c.sliderDuration || "0.5",
						p = "no" == c.sliderPauseHover ? ",'pauseOnHover':false" : "",
						r = "a",
						s = "",
						t = "",
						u = "",
						v = "",
						w = "",
						x = "display:none;",
						y = "",
						z = "",
						A = "",
						B = [],
						C = "",
						E = "",
						F = "",
						G = "",
						H = c.smallCircleMode || [],
						I = c.smallCircleBgColor || [],
						J = c.smallCircleBgColor1 || [],
						K = c.smallCustom || [],
						L = c.smallCustom1 || [],
						M = !1,
						N = "",
						O = "",
						P = "",
						Q = "",
						R = "";
					if (!c.sliderDelay && (c.sliderDelay = "0"), !c.smallShowCss && (c.smallShowCss = ""), !c.smallShowSpeed && (c.smallShowSpeed = "trans02s"), !c.dSmallRorate && (c.dSmallRorate = ""), !c.aSmallRorate && (c.aSmallRorate = ""), c.shadeMode && "yes" == c.shadeMode ? (S = c.shadeCount || 1, T = "", U = "", V = "", W = "", X = "", Y = 0, e = b.tParseInt(d / S), Y = d % S, 0 != Y && S++, shadeMarginLeft = "") : e = d, "" != c.dSmallRorate && (N = " " + c.dSmallRorate + " " + c.smallShowSpeed), "" != c.aSmallRorate && ("" == c.dSmallRorate && (N += " " + c.smallShowSpeed), O = " jrat " + c.aSmallRorate), ("" != c.dSmallRorate || "" != c.aSmallRorate) && (P = ' data-da="' + (c.dSmallRorate || "") + "|" + (c.aSmallRorate || "") + "|" + (c.smallShowSpeed || "") + '"'), !c.sliderActive && (c.sliderActive = "1"), q = b.tParseInt(c.sliderActive) - 1, ("" != c.displayMode || "" != c.css3Mode) && (E = " jspb j-b", Q = " " + c.css3Speed, R = " " + c.css3Speed, "june-box-fadein" == c.displayMode && (Q += " june-box-fadein b-1-fadein", R += " june-box-fadein b-1-fadein"), c.css3Mode.indexOf("moveout") >= 0 && (Q += " june-box-lx" + c.css3Mode.replace(/moveout/g, "") + " b-1-lx" + c.css3Mode.replace(/moveout/g, ""), R += " june-box-rx" + c.css3Mode.replace(/moveout/g, "") + " b-1-rx" + c.css3Mode.replace(/moveout/g, "")), c.css3Mode.indexOf("movein") >= 0 && (Q += " june-box-rx" + c.css3Mode.replace(/movein/g, "") + " b-1-rx" + c.css3Mode.replace(/movein/g, ""), R += " june-box-lx" + c.css3Mode.replace(/movein/g, "") + " b-1-lx" + c.css3Mode.replace(/movein/g, ""))), c.contentType[0], ab = !1, !c.thumbSet && (c.thumbSet = []), !c.thumbCircleSet && (c.thumbCircleSet = []), c.thumbSet) for (bb = 0; bb < c.thumbSet.length; bb++) if (c.thumbSet[bb] && "" != c.thumbSet[bb]) {
						ab = !0;
						break
					}
					for (cb = 0; cb < c.customContent.length; cb++) if (c.customContent[cb].indexOf("jspb") >= 0) {
						M = !0;
						break
					}
					if (M && (E = F = " j-b"), ab ? G = '<div class="sfa' + E + '" style="width:' + d + "px;height:" + f + 'px;z-index:10;">' : (F = E, E = " j-b"), "" != c.smallShowCss && "" == F && (F = " j-b"), "1" == m.substr(-1) && (m = m.substr(0, m.length - 1), r = "b", s = ", 'viewSize': ["), db = "", "1" != c.sliderActive && ("scrollx" == m ? db = "b" == r ? "left:" + q * d + "px;" : "left:-" + q * d + "px;" : "scrolly" == m && (db = "b" == r ? "top:" + q * f + "px;" : "top:-" + q * f + "px;")), "none" != m && "fade" != m && (sliderModeFade = "hidden"), k.length > 0 && k.each(function(a) {
						var e = $(this),
							f = e.width(),
							g = e.height(),
							h = b.tParseInt(e.css("top")),
							i = b.tParseInt(e.css("left")),
							j = "";
						c.childConfig[a + 1] && (c.childConfig[a + 1].smallShowCss && "" != c.childConfig[a + 1].smallShowCss && ("" == F && (F = " j-b"), j = " " + c.childConfig[a + 1].smallShowCss + " " + (c.childConfig[a + 1].smallShowSpeed || "trans02s")), l += '<div class="abs lbepanel' + j + '" style="overflow: hidden;width:' + f + "px;height:" + g + "px;top:" + h + "px;left:" + i + "px;z-index:" + (10 + b.tParseInt(c.childConfig[a + 1].zFloor)) + ';">' + c.childConfig[a + 1].customContent + "</div>")
					}), t = G + '<div class="scroller' + E + '" style="overflow:' + n + ";width:" + d + "px;height:" + f + 'px;z-index:10;"><div class="ks-switchable-content c' + j + '" style="' + db + '">', D = "white" == c.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == c.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", gb = a.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), hb = a.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), eb = b.setChildPos(a, gb, !0), fb = b.setChildPos(a, hb, !0), ib = "", jb = "", kb = "", lb = "", mb = "", nb = "", ob = "", "yes" == c.sliderArrow && (checkUrl(i.oSrc) && (jb = 'src="' + i.oSrc + '" alt="上一页"'), checkUrl(i.tSrc) && (kb = 'src="' + i.tSrc + '" alt="下一页"'), checkUrl(i.oSrcHover) && (lb = 'src="' + i.oSrcHover + '" alt="上一页"'), checkUrl(i.tSrcHover) && (mb = 'src="' + i.tSrcHover + '" alt="下一页"'), nb = "<img " + jb + " />", ob = "<img " + kb + " />", ("" != lb || "" != mb) && (ib = " junefade", nb = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + jb + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + lb + " />", ob = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + kb + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + mb + " />")), "yes" == c.sliderArrow && (x = ""), !0 && (v = " 'prevBtnCls': 'prev" + j + "', 'nextBtnCls': 'next" + j + "', "), !0 && (w = '<span class="abs prev' + j + Q + ib + '" style="' + x + "cursor:pointer;width:" + eb.width + "px;height:" + eb.height + "px;top:" + eb.top + "px;left:" + eb.left + 'px;z-index:14;">' + nb + '</span><span class="abs next' + j + R + ib + '" style="' + x + "cursor:pointer;width:" + fb.width + "px;height:" + fb.height + "px;top:" + fb.top + "px;left:" + fb.left + 'px;z-index:14;">' + ob + "</span>"), pb = "juneactive", "no" == c.sliderSmallImg && (y = "display:none;"), $.each(c.contentType, function(g) {
						var x, y, D, E, F, G, M, O, P, Q, R, S, T, U, V, W, X, i = a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + g + ")"),
							k = c.sliderHref[g],
							l = i.attr("attachID") || "",
							o = " " + l,
							j = b.getChildPos(a, i, !0),
							p = " rel",
							t = "",
							v = "",
							w = "display:none;";
						"b" == r && ("scrollx" == m ? (v = g * d, t = "left:-" + v + "px;top:0;", s += "-" + d + ",") : "scrolly" == m && (v = g * f, t = "left:0;top:-" + v + "px;", s += "-" + f + ","), p = " abs"), q == g && (w = "display:block;"), C = g == q ? "juneactive" + N : "" + N, "yes" != H[g] && "yes1" != H[g] && c.thumbSet[g] && "" != c.thumbSet[g] && (x = require("scripts/allwzset"), y = JSON.parse(c.thumbSet[g]), D = '"></li>', y.href = k, y.hrefMode = c.hrefMode, y.sliderSwitch = c.sliderSwitch, D = x.allExport(i, y, "jfsb"), A += '<li data-i="' + l + '" class="abs thumbsmall ' + C + o + D), "imgContent" == c.contentType[g] ? (E = c.smallImgSrcT[g], F = c.smallHoverSrcT[g], G = !1, M = "", O = "", "" == F && (F = E, G = !0), "" == F && (F = c.sliderSrc[g], G = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrcT[g] && (G = !0), "" == E && (E = c.sliderSrc[g]), B.push(F), checkUrl(F) && (M = 'src="' + F + '"'), "" != c.sliderSrc[g] && (O = "background:url(" + c.sliderSrc[g] + ") no-repeat scroll center center transparent;"), u += '<div class="elepic" style="height:' + f + "px;width:" + e + "px;" + w + "float:left;overflow:" + n + ';"><div class="elexb' + p + '" style="height:' + f + "px;width:" + d + "px;" + t + O + '"><a class="J_TWidget" href="' + k + '" target="' + c.hrefMode + '" style="height:' + f + "px;width:" + d + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>', z = '<a href="' + k + '" target="' + c.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img ' + M + ' style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', G ? (W = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", X = "background:#000000;", "white" == c.kgdSwitch && (X = "background:#ffffff;"), "transparent" == c.kgdSwitch && (X = "", W = ""), P = '<a href="' + k + '" target="' + c.hrefMode + '" class="abs s2" style="' + X + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + W + "width:" + j.width + "px;height:" + j.height + 'px;"></a>', "click" == c.sliderSwitch && (P = '<a class="abs s2" style="' + X + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + W + "width:" + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[g] ? (!K[g] && "" == K[g], !L[g] && "" == L[g], A += "" == L[g] ? '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>" : '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[g] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>") : "yes" == H[g] ? (Q = "", R = "", S = "", T = "", U = "", V = "", c.thumbCircleSet[g] && "" != c.thumbCircleSet[g] ? (U = " scm_s", S = JSON.parse(c.thumbCircleSet[g]), T = S.characterContent, Q = RGBToHex(S.characterBgColor, ""), "" != Q && (Q = "background-color:" + Q + ";"), S.characterColor = RGBToHex(S.characterColor, ""), "" != S.characterColor && (Q += "color:" + S.characterColor + ";"), "" != S.characterFont && (Q += "font-family:" + S.characterFont + ";"), "" != S.characterWeight && (Q += "font-weight:" + S.characterWeight + ";"), "" != S.characterSize && (Q += "font-size:" + b.tParseInt(S.characterSize) + "px;"), "off" != S.characterHoverMode ? (V = " s1h", R = RGBToHex(S.characterBgColorHover, ""), "" != R && (R = "background-color:" + R + ";"), S.characterColorHover = RGBToHex(S.characterColorHover, ""), "" != S.characterColorHover && (R += "color:" + S.characterColorHover + ";"), "" != S.characterFontHover && (R += "font-family:" + S.characterFontHover + ";"), "" != S.characterWeightHover && (R += "font-weight:" + S.characterWeightHover + ";"), "" != S.characterSizeHover && (R += "font-size:" + b.tParseInt(S.characterSizeHover) + "px;")) : R = Q) : (I[g] && (Q = RGBToHex(I[g], ""), "" != Q && (Q = "background-color:" + Q + ";")), J[g] && (R = RGBToHex(J[g], ""), "" != R && (R = "background-color:" + R + ";"))), A += '<li class="abs scm ' + C + U + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + V + '" style="border-radius:50%;width:100%;height:100%;' + R + '">' + T + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + Q + '">' + T + "</div>" + "</li>") : c.thumbSet[g] && "" != c.thumbSet[g] || (A += '<li class="abs ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + z + P + "</li>")) : (P = '<a href="' + k + '" target="' + c.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', "click" == c.sliderSwitch && (P = '<a class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[g] ? (!K[g] && "" == K[g], !L[g] && "" == L[g], A += "" == L[g] ? '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>" : '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[g] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>") : "yes" == H[g] ? (Q = "", R = "", S = "", T = "", U = "", V = "", c.thumbCircleSet[g] && "" != c.thumbCircleSet[g] ? (U = " scm_s", S = JSON.parse(c.thumbCircleSet[g]), T = S.characterContent, Q = RGBToHex(S.characterBgColor, ""), "" != Q && (Q = "background-color:" + Q + ";"), S.characterColor = RGBToHex(S.characterColor, ""), "" != S.characterColor && (Q += "color:" + S.characterColor + ";"), "" != S.characterFont && (Q += "font-family:" + S.characterFont + ";"), "" != S.characterWeight && (Q += "font-weight:" + S.characterWeight + ";"), "" != S.characterSize && (Q += "font-size:" + b.tParseInt(S.characterSize) + "px;"), "off" != S.characterHoverMode ? (V = " s1h", R = RGBToHex(S.characterBgColorHover, ""), "" != R && (R = "background-color:" + R + ";"), S.characterColorHover = RGBToHex(S.characterColorHover, ""), "" != S.characterColorHover && (R += "color:" + S.characterColorHover + ";"), "" != S.characterFontHover && (R += "font-family:" + S.characterFontHover + ";"), "" != S.characterWeightHover && (R += "font-weight:" + S.characterWeightHover + ";"), "" != S.characterSizeHover && (R += "font-size:" + b.tParseInt(S.characterSizeHover) + "px;")) : R = Q) : (I[g] && (Q = RGBToHex(I[g], ""), "" != Q && (Q = "background-color:" + Q + ";")), J[g] && (R = RGBToHex(J[g], ""), "" != R && (R = "background-color:" + R + ";"))), A += '<li class="abs scm ' + C + U + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + V + '" style="border-radius:50%;width:100%;height:100%;' + R + '">' + T + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + Q + '">' + T + "</div>" + "</li>") : c.thumbSet[g] && "" != c.thumbSet[g] || (A += '<li class="abs ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + z + P + "</li>"))) : (E = c.smallImgSrc[g], F = c.smallHoverSrc[g], G = !1, M = "", "" == F && (F = E, G = !0), "" == F && (F = c.sliderSrc[g], G = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrc[g] && (G = !0), "" == E && (E = c.sliderSrc[g]), B.push(F), checkUrl(F) && (M = 'src="' + F + '"'), u += '<div class="elepic" style="height:' + f + "px;width:" + e + "px;" + w + "float:left;overflow:" + n + ';"><div class="elexb' + p + '" style="height:' + f + "px;width:" + d + "px;" + t + '">' + c.customContent[g] + "</div></div>", z = '<a href="' + k + '" target="' + c.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img ' + M + ' style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', G ? (W = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", X = "background:#000000;", "white" == c.kgdSwitch && (X = "background:#ffffff;"), "transparent" == c.kgdSwitch && (X = "", W = ""), P = '<a href="' + k + '" target="' + c.hrefMode + '" class="abs s2" style="' + X + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + W + "width:" + j.width + "px;height:" + j.height + 'px;"></a>', "click" == c.sliderSwitch && (P = '<a class="abs s2" style="' + X + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + W + "width:" + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[g] ? (!K[g] && "" == K[g], !L[g] && "" == L[g], A += "" == L[g] ? '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>" : '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[g] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>") : "yes" == H[g] ? (Q = "", R = "", S = "", T = "", U = "", V = "", c.thumbCircleSet[g] && "" != c.thumbCircleSet[g] ? (U = " scm_s", S = JSON.parse(c.thumbCircleSet[g]), T = S.characterContent, Q = RGBToHex(S.characterBgColor, ""), "" != Q && (Q = "background-color:" + Q + ";"), S.characterColor = RGBToHex(S.characterColor, ""), "" != S.characterColor && (Q += "color:" + S.characterColor + ";"), "" != S.characterFont && (Q += "font-family:" + S.characterFont + ";"), "" != S.characterWeight && (Q += "font-weight:" + S.characterWeight + ";"), "" != S.characterSize && (Q += "font-size:" + b.tParseInt(S.characterSize) + "px;"), "off" != S.characterHoverMode ? (V = " s1h", R = RGBToHex(S.characterBgColorHover, ""), "" != R && (R = "background-color:" + R + ";"), S.characterColorHover = RGBToHex(S.characterColorHover, ""), "" != S.characterColorHover && (R += "color:" + S.characterColorHover + ";"), "" != S.characterFontHover && (R += "font-family:" + S.characterFontHover + ";"), "" != S.characterWeightHover && (R += "font-weight:" + S.characterWeightHover + ";"), "" != S.characterSizeHover && (R += "font-size:" + b.tParseInt(S.characterSizeHover) + "px;")) : R = Q) : (I[g] && (Q = RGBToHex(I[g], ""), "" != Q && (Q = "background-color:" + Q + ";")), J[g] && (R = RGBToHex(J[g], ""), "" != R && (R = "background-color:" + R + ";"))), A += '<li class="abs scm ' + C + U + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + V + '" style="border-radius:50%;width:100%;height:100%;' + R + '">' + T + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + Q + '">' + T + "</div>" + "</li>") : c.thumbSet[g] && "" != c.thumbSet[g] || (A += '<li class="abs ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + z + P + "</li>")) : (P = '<a href="' + k + '" target="' + c.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', "click" == c.sliderSwitch && (P = '<a class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[g] ? (!K[g] && "" == K[g], !L[g] && "" == L[g], A += "" == L[g] ? '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>" : '<li class="abs sch ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[g] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[g] + "</div></li>") : "yes" == H[g] ? (Q = "", R = "", S = "", T = "", U = "", V = "", c.thumbCircleSet[g] && "" != c.thumbCircleSet[g] ? (U = " scm_s", S = JSON.parse(c.thumbCircleSet[g]), T = S.characterContent, Q = RGBToHex(S.characterBgColor, ""), "" != Q && (Q = "background-color:" + Q + ";"), S.characterColor = RGBToHex(S.characterColor, ""), "" != S.characterColor && (Q += "color:" + S.characterColor + ";"), "" != S.characterFont && (Q += "font-family:" + S.characterFont + ";"), "" != S.characterWeight && (Q += "font-weight:" + S.characterWeight + ";"), "" != S.characterSize && (Q += "font-size:" + b.tParseInt(S.characterSize) + "px;"), "off" != S.characterHoverMode ? (V = " s1h", R = RGBToHex(S.characterBgColorHover, ""), "" != R && (R = "background-color:" + R + ";"), S.characterColorHover = RGBToHex(S.characterColorHover, ""), "" != S.characterColorHover && (R += "color:" + S.characterColorHover + ";"), "" != S.characterFontHover && (R += "font-family:" + S.characterFontHover + ";"), "" != S.characterWeightHover && (R += "font-weight:" + S.characterWeightHover + ";"), "" != S.characterSizeHover && (R += "font-size:" + b.tParseInt(S.characterSizeHover) + "px;")) : R = Q) : (I[g] && (Q = RGBToHex(I[g], ""), "" != Q && (Q = "background-color:" + Q + ";")), J[g] && (R = RGBToHex(J[g], ""), "" != R && (R = "background-color:" + R + ";"))), A += '<li class="abs scm ' + C + U + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;">' + '<div class="abs s1' + V + '" style="border-radius:50%;width:100%;height:100%;' + R + '">' + T + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + Q + '">' + T + "</div>" + "</li>") : c.thumbSet[g] && "" != c.thumbSet[g] || (A += '<li class="abs ' + C + o + '" data-i="' + l + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + z + P + "</li>")))
					}), c.shadeMode && "yes" == c.shadeMode || (ab ? (qb = w, w = "", u += "</div></div>" + qb + "</div>") : u += "</div></div>"), "b" == r && (s = s.substr(0, s.length - 1) + "]"), rb = "", sb = "", c.smallShowMode && "outbox" == c.smallShowMode && (F += " outbox"), c.smallShowCss && "" != c.smallShowCss && (sb = " " + c.smallShowCss + " " + c.smallShowSpeed), c.shadeMode && "yes" == c.shadeMode) {
						for (bb = 0; S > bb; bb++) Z = e, bb == S - 1 && 0 != Y && (Z = Y, rb = "jfsbyys "), 0 == bb ? (W = ' data-appid="' + c.appID + '"' + P + ' data-s="' + r + '" data-hsrc="' + B.join(",") + '"', X = "top:" + g + "px;left:" + h + "px;") : (W = "", X = ""), T += '<div class="jfsb ' + rb + "abs J_TWidget" + F + " " + c.appID + '"' + W + ' style="height:' + f + "px;width:" + d + "px;" + X + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c_' + bb + "_" + j + "','navCls':'n" + j + "','effect':'" + m + "','steps':1,'circular':true,'easing':'" + c.sliderEffect + "','duration':'" + (b.tParseFloat(o) + .02 * bb) + "'," + v + "'autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + ",'delay':" + c.sliderDelay + ",'activeTriggerCls':'" + pb + O + "', 'triggerType': '" + c.sliderSwitch + "'" + s + ", 'activeIndex': " + q + p + '}">', t = '<div class="scroller' + E + '" style="overflow:hidden;width:' + Z + "px;height:" + f + 'px;z-index:10;float:left;"><div class="ks-switchable-content c_' + bb + "_" + j + '" style="' + db + '">', div1 = u.replace(/\<div class\=\"elexb([^\>]*)\>/g, function(a) {
							var c = a;
							return c = c.replace(/(width\:[\d\.]*px\;)(left\:\-?([^\;]*)\;)?/g, function(a, c, d, f) {
								var g = "";
								return "scrollx" == m && f && "" != f && (g = b.tParseInt(f)), c + "left:-" + (e * bb + g) + "px;"
							})
						}), bb == S - 1 && 0 != Y && (div1 = div1.replace(/\<div class\=\"elepic([^\>]*)\>/g, function(a) {
							var b = a;
							return b = b.replace(/width\:([\d\.]*)px\;/g, function(a, b) {
								return b = b.replace(e, Z), "width:" + b + "px;"
							})
						})), tb = w, ab && (tb = w + "</div>"), div1 += "</div></div>", U += t + div1, V += "</div>";
						return T + G + U + tb + '<ul class="ks-switchable-nav abs n' + j + sb + '" style="' + y + 'top:0px;left:0px;z-index:12;background:none;">' + A + "</ul>" + l + V
					}
					return '<div class="jfsb abs J_TWidget' + F + " " + c.appID + '" data-appid="' + c.appID + '"' + P + ' data-s="' + r + '" style="height:' + f + "px;width:" + d + "px;top:" + g + "px;left:" + h + 'px;z-index:10;" data-hsrc="' + B.join(",") + '" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c' + j + "','navCls':'n" + j + "','effect':'" + m + "','steps':1,'circular':true,'easing':'" + c.sliderEffect + "','duration':'" + o + "'," + v + "'autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + ",'delay':" + c.sliderDelay + ",'activeTriggerCls':'" + pb + O + "', 'triggerType': '" + c.sliderSwitch + "'" + s + ", 'activeIndex': " + q + p + '}">' + w + t + u + '<ul class="ks-switchable-nav abs n' + j + sb + '" style="' + y + 'top:0px;left:0px;z-index:12;background:none;">' + A + "</ul>" + l + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var h, j, k, l, m, o, f, g, i, p, q, r, s, t, u, w, x, y, z, A, B, C, D, E, F, H, I, J;
					if (d.hasClass("jsdb")) {
						if (f = JSON.parse(a.attr("data-config")), g = a.attr("data-dblType"), h = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')), i = {}, i.childConfig = [], i.childConfig[0] = {}, i.sliderSrc = [], i.sliderHref = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.smallImgSrcT = [], i.smallHoverSrcT = [], i.customContent = [], i.contentType = [], i.smallCircleMode = [], i.smallCircleBgColor = [], i.smallCircleBgColor1 = [], i.sliderSmallImg = "no", i.sliderOverflow = "hidden", i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jsdb").length > 0) {
							for (i.shadeCount = 1; d.children(".jsdb").length > 0;) d = d.children(".jsdb"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
								contentCls: "",
								navCls: "",
								effect: "scrolly",
								steps: 1,
								easing: "easeBoth",
								duration: "0.5",
								autoplay: !0,
								interval: 4,
								activeTriggerCls: "hidden",
								triggerType: "mouse"
							}, d.hasClass("jsdbyys") || i.shadeCount++;
							i.shadeMode = "yes"
						}
						"visible" == d.children(".scroller:eq(0)").css("overflow") && (i.sliderOverflow = "visible"), d.children(".scroller:eq(0)").find("div.haibaos_pic").each(function() {
							var b, c, d, e, a = $(this);
							a.children("div.elexb").length > 0 && (a = a.children("div.elexb")), b = a.find("a.simple"), c = a.css("background-image").replace(/^url|[\(\"\)]*/g, ""), d = a.find("a.simple").attr("href"), e = a.html(), b.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(c), i.sliderHref.push(d), i.customContent.push("")) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.sliderHref.push(""), i.customContent.push(e)), i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.smallCircleMode.push("no"), i.smallCircleBgColor.push(""), i.smallCircleBgColor1.push("")
						}), d.children(".scroller:eq(0)").find("div.haibaos_pic").length > 1 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = []), H = d.children(".smlldiv_btn"), i.sliderArrow = "none" == H.css("display") ? "no" : "yes", h.effect && (i.sliderMode = h.effect), h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), I = H.children("span:eq(0)"), J = H.children("span:eq(1)"), H.children("span:eq(0)").hasClass("prevsamll") && (I = H.children("span:eq(0)").children("img:eq(0)"), J = H.children("span:eq(1)").children("img:eq(0)")), i.hrefMode = d.find("a.simple").attr("target") || "_blank", i.childConfig[0].oSrc = H.children("span:eq(0)").children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = H.children("span:eq(1)").children("img:eq(0)").attr("src"), i.childConfig[0].autoSize = "no", i.childConfig[0].autoSize1 = "no", H.children("span:eq(0)").children("img:eq(1)").length > 0 && (i.childConfig[0].oSrcHover = H.children("span:eq(0)").children("img:eq(1)").attr("src")), H.children("span:eq(1)").children("img:eq(1)").length > 0 && (i.childConfig[0].tSrcHover = H.children("span:eq(1)").children("img:eq(1)").attr("src")), j = b.getChildPos(d, I, !0), k = b.getChildPos(d, J, !0), F = $.extend({}, f, i), a.attr("data-config", JSON.stringify(F)), require("scripts/tAjax"), "" != i.sliderSrc[0] && checkUrl(i.sliderSrc[0]) ? a.css({
							backgroundImage: "url(" + i.sliderSrc[0] + ")"
						}) : a.css({
							backgroundImage: ""
						}), "no" == i.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").css({
							backgroundImage: "url(" + i.childConfig[0].oSrc + ")",
							width: 0 == j.width ? 48 : j.width,
							height: 0 == j.height ? 48 : j.height,
							top: j.top,
							left: j.left
						}), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").css({
							backgroundImage: "url(" + i.childConfig[0].tSrc + ")",
							width: 0 == k.width ? 48 : k.width,
							height: 0 == k.height ? 48 : k.height,
							top: k.top,
							left: k.left
						})), a.children(b.appOtherCls).html(""), "customContent" == i.contentType[0] && (a.css({
							backgroundImage: ""
						}), a.children(b.appOtherCls).html(i.customContent[0]))
					} else {
						if (f = JSON.parse(a.attr("data-config")), g = a.attr("data-dblType"), i = {}, p = d.attr("data-hsrc"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
							contentCls: "",
							navCls: "",
							effect: "scrolly",
							steps: 1,
							easing: "easeBoth",
							duration: "0.5",
							autoplay: !0,
							interval: 4,
							activeTriggerCls: "hidden",
							triggerType: "mouse"
						}, i.sliderDuration = h.duration ? h.duration : "0.5", i.sliderPauseHover = h.pauseOnHover === !1 || "false" == h.pauseOnHover ? "no" : "yes", p = p ? p.split(",") : [], d.attr("data-da") ? (o = d.attr("data-da").split("|"), i.dSmallRorate = o[0] || "", i.aSmallRorate = o[1] || "", i.smallShowSpeed = o[2] || "trans02s") : (i.dSmallRorate = "", i.aSmallRorate = ""), q = d.attr("data-s") || "a", i.childConfig = [], i.childConfig[0] = {}, i.sliderSrc = [], i.sliderHref = [], i.customContent = [], i.contentType = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.smallImgSrcT = [], i.smallHoverSrcT = [], i.thumbSet = [], i.thumbCircleSet = [], i.smallCircleMode = [], i.smallCircleBgColor = [], i.smallCircleBgColor1 = [], i.smallCustom = [], i.smallCustom1 = [], i.sliderOverflow = "hidden", i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jfsb").length > 0) {
							for (i.shadeCount = 1; d.children(".jfsb").length > 0;) d = d.children(".jfsb"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
								contentCls: "",
								navCls: "",
								effect: "scrolly",
								steps: 1,
								easing: "easeBoth",
								duration: "0.5",
								autoplay: !0,
								interval: 4,
								activeTriggerCls: "hidden",
								triggerType: "mouse"
							}, d.hasClass("jfsbyys") || i.shadeCount++;
							i.shadeMode = "yes"
						}
						if (r = !1, 1 == d.children("ul").length && (r = !0), i.sliderActive = "1", d.hasClass("outbox") && (i.smallShowMode = "outbox"), s = (d.find(".ks-switchable-nav").attr("class") || "").match(/trans(\w+)s/g), t = (d.find(".ks-switchable-nav").attr("class") || "").match(/b-1-(lx|rx|dy|uy)(\d+)/g), s && s.length > 0 && (i.smallShowSpeed = s[0]), t && t.length > 0 && (i.smallShowCss = t[0]), r) {
							if (B = require("scripts/other"), "visible" == d.find(".scroller:eq(0)").css("overflow") && (i.sliderOverflow = "visible"), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function(a) {
								var e, f, g, h, j, k, l, m, n, c = $(this);
								c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), j = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), p[a] || (p[a] = ""), e.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(f), i.sliderHref.push(g), i.customContent.push(""), j.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(B.thumbImport(j))) : (j.find("img").length > 1 ? (k = j.find("img:eq(1)").attr("src"), k == f && (k = ""), i.smallImgSrcT.push(k)) : (k = j.find("img:eq(0)").attr("src"), k == f && (k = ""), i.smallImgSrcT.push(k)), i.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), !p[a] && (p[a] = ""), !f && (f = ""), !k && (k = ""), l = p[a].split(".com/"), m = f.split(".com/"), n = k.split(".com/"), l[1] && "" != l[1] && m[1] && "" != m[1] && l[1] == m[1] && (p[a] = ""), l[1] && "" != l[1] && n[1] && "" != n[1] && l[1] == n[1] && (p[a] = ""), i.smallHoverSrcT.push(p[a]), i.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), i.thumbSet.push(""))) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.customContent.push(h), j.find("a").length > 0 ? (g = j.find("a").attr("href") || "", i.sliderHref.push(g)) : i.sliderHref.push(""), j.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(B.thumbImport(j))) : (j.find("img").length > 1 ? (k = j.find("img:eq(1)").attr("src"), i.smallImgSrc.push(k)) : (k = j.find("img:eq(0)").attr("src"), i.smallImgSrc.push(k)), !p[a] && (p[a] = ""), !k && (k = ""), l = p[a].split(".com/"), m = k.split(".com/"), l[1] && "" != l[1] && m[1] && "" != m[1] && l[1] == m[1] && (p[a] = ""), i.smallImgSrcT.push(""), i.smallHoverSrc.push(p[a]), i.smallHoverSrcT.push(""), i.thumbSet.push("")))
							}), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = []), h.effect && (i.sliderMode = h.effect), "true" != h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), h.delay && (i.sliderDelay = h.delay), h.triggerType && (i.sliderSwitch = h.triggerType), h.activeIndex && (i.sliderActive = b.tParseInt(h.activeIndex) + 1), i.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", i.sliderArrow = "no", l = h.prevBtnCls, m = h.nextBtnCls, l && "undefined" != l) if (i.sliderArrow = "yes", i.childConfig[0].oSrc = d.find("." + l).children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img:eq(0)").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src")), j = b.getChildPos(d, d.find("." + l), !0), k = b.getChildPos(d, d.find("." + m), !0), u = d.find("." + l), u.length > 0) {
								i.sliderArrow = "none" == u.css("display") ? "no" : "yes", i.displayMode = u.hasClass("june-box-fadein") ? "june-box-fadein" : "";
								try {
									i.css3Speed = u.attr("class").match(/trans(\w+)s/g).join(""), u.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + u.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), u.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + u.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
								} catch (v) {}
							} else i.sliderArrow = "no", i.displayMode = "";
							a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").each(function() {
								b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
							}), a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").remove(), A = !0, d.children("ul:eq(0)").children("li").each(function(c) {
								var g, f, h, j, k, l, m, n, o, p, r, e = $(this);
								e.hasClass("scm") ? (i.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet.push(B.thumbCircleImport(e))) : (i.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), i.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), i.thumbCircleSet[c] = ""), i.smallCustom[c] = "", i.smallCustom1[c] = "") : e.hasClass("sch") ? (i.smallCircleMode[c] = "yes1", i.smallCustom.push(e.children(".s2").html() || e.children(".s3").html() || ""), i.smallCustom1.push(e.children(".s1").html() || ""), i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "") : (i.smallCircleMode[c] = "no", i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "", i.smallCustom[c] = "", i.smallCustom1[c] = ""), f = i.contentType[c], h = !1, "imgContent" == f ? (g = i.smallImgSrcT[c], "" == g && (g = i.smallHoverSrcT[c])) : (g = i.smallImgSrc[c], "" == g && (g = i.smallHoverSrc[c])), "" == g && (g = i.sliderSrc[c]), $(this).attr("data-i") ? i.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(i.childConfig[0]), "yes1" == i.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + i.smallCustom[c] + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : "yes" == i.smallCircleMode[c] ? (j = "", k = "", l = "", m = "", n = $(this).width() + "px;", "" == i.thumbCircleSet[c] ? j = i.smallCircleBgColor[c] || i.smallCircleBgColor1[c] || "" : (k = JSON.parse(i.thumbCircleSet[c]), m = k.characterContent, j = k.characterBgColor || k.characterBgColorHover || "", k.characterColor = RGBToHex(k.characterColor, ""), "" != k.characterColor && (l += "color:" + k.characterColor + ";"), "" != k.characterFont && (l += "font-family:" + k.characterFont + ";"), "" != k.characterWeight && (l += "font-weight:" + k.characterWeight + ";"), "" != k.characterSize && (l += "font-size:" + b.tParseInt(k.characterSize) + "px;"), "auto" == k.characterWidthMode && (h = !0, n = "auto;")), o = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + l + '">' + m + "</div></div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), o.children(".t-jfsb-circle").css({
									backgroundColor: RGBToHex(j, ""),
									borderRadius: "50%"
								})) : "" == i.thumbSet[c] ? $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + g + '"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : (p = JSON.parse(i.thumbSet[c]), n = $(this).width() + "px;", "auto" == p.characterWidthMode && (h = !0, n = "auto;"), $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), r = a.children(b.appChildCls + "[attachID='" + i.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(p, r), r.hasClass("j-app-qswz") || r.addClass("j-app-qswz"), r.removeAttr("data-config")), 0 == c && (w = $(this).width(), y = $(this).height(), h && (w = "")), x = $(this).width(), z = $(this).height(), h && (x = ""), (w != x || y != z) && (A = !1)
							}), A && (i.sWidth = w, i.sHeight = y)
						} else {
							if ("visible" == d.children(".scroller:eq(0)").css("overflow") && (i.sliderOverflow = "visible"), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function(a) {
								var e, f, g, h, j, k, c = $(this);
								c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), j = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), i.thumbSet.push(""), p[a] || (p[a] = ""), e.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(f), i.sliderHref.push(g), i.customContent.push(""), j.find("img").attr("src") ? (k = j.find("img").attr("src"), k == f && (k = ""), i.smallImgSrcT.push(k)) : (k = d.children("ul:eq(0)").find("li img:eq(" + a + ")").attr("src"), k == f && (k = ""), i.smallImgSrcT.push(k)), i.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (p[a] == f || p[a] == k) && (p[a] = ""), i.smallHoverSrcT.push(p[a]), i.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png")) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.customContent.push(h), j.find("a").length > 0 ? (g = j.find("a").attr("href") || "", i.sliderHref.push(g)) : i.sliderHref.push(""), j.find("img").attr("src") ? (k = j.find("img").attr("src"), i.smallImgSrc.push(k)) : (k = d.children("ul:eq(0)").find("li img:eq(" + a + ")").attr("src"), i.smallImgSrc.push(k)), p[a] == k && (p[a] = ""), i.smallImgSrcT.push(""), i.smallHoverSrc.push(p[a]), i.smallHoverSrcT.push(""))
							}), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = []), h.effect && (i.sliderMode = h.effect), "true" != h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), h.delay && (i.sliderDelay = h.delay), h.triggerType && (i.sliderSwitch = h.triggerType), h.activeIndex && (i.sliderActive = b.tParseInt(h.activeIndex) + 1), i.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", i.sliderArrow = "no", l = h.prevBtnCls, m = h.nextBtnCls, l && "undefined" != l) {
								i.sliderArrow = "yes", i.childConfig[0].oSrc = d.find("." + l).children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img:eq(0)").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src")), j = b.getChildPos(d, d.find("." + l), !0), k = b.getChildPos(d, d.find("." + m), !0), u = d.find("." + l), i.sliderArrow = "none" == u.css("display") ? "no" : "yes", i.displayMode = u.hasClass("june-box-fadein") ? "june-box-fadein" : "";
								try {
									i.css3Speed = u.attr("class").match(/trans(\w+)s/g).join(""), u.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + u.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), u.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + u.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
								} catch (v) {}
							}
							a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").each(function() {
								b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
							}), a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").remove(), A = !0, d.children("ul:eq(0)").find("li").each(function(c) {
								var f, e = i.contentType[c];
								f = "imgContent" == e ? i.smallImgSrcT[c] : i.smallImgSrc[c], "" == f && (f = i.sliderSrc[c]), $(this).attr("data-i") ? i.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(i.childConfig[0]), $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + f + '"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), 0 == c && (w = $(this).width(), y = $(this).height()), x = $(this).width(), z = $(this).height(), (w != x || y != z) && (A = !1)
							}), A && (i.sWidth = w, i.sHeight = y)
						}
						d.children(".ks-switchable-nav").find("li").each(function() {
							var a = $(this);
							return C = a.css("background-image"), C && C.indexOf("img01") >= 0 ? (i.kgdSwitch = "white", !1) : C && C.indexOf("img02") >= 0 ? (i.kgdSwitch = "black", !1) : C && C.indexOf("img03") >= 0 ? (i.kgdSwitch = "transparent", !1) : void 0
						}), r && (D = RGBToHex(d.children(".ks-switchable-nav").find("li").children("a.s2").css("background-color"), ""), C = "#ffffff" == D.toLowerCase() ? i.kgdSwitch = "white" : "#000000" == D.toLowerCase() ? i.kgdSwitch = "black" : void 0), C || (i.kgdSwitch = "transparent"), "none" == d.children("ul:eq(0)").css("display") ? (i.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").hide()) : i.sliderSmallImg = "yes", "b" == q && (i.sliderMode += "1"), E = d.children("div.lbepanel"), E.length > 0 && E.each(function() {
							var g, h, e = $(this),
								f = {};
							b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jfsb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", f.attachID), i.childConfig.push(f)
						}), F = $.extend(f, i), a.attr("data-config", JSON.stringify(F)), require("scripts/tAjax"), "" != i.sliderSrc[0] && checkUrl(i.sliderSrc[0]) ? a.css({
							backgroundImage: "url(" + i.sliderSrc[0] + ")"
						}) : a.css({
							backgroundImage: ""
						}), "no" == i.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").css({
							backgroundImage: "url(" + i.childConfig[0].oSrc + ")",
							width: 0 == j.width ? 48 : j.width,
							height: 0 == j.height ? 48 : j.height,
							top: j.top,
							left: j.left
						}).show(), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").css({
							backgroundImage: "url(" + i.childConfig[0].tSrc + ")",
							width: 0 == k.width ? 48 : k.width,
							height: 0 == k.height ? 48 : k.height,
							top: k.top,
							left: k.left
						}).show()), a.children(b.appOtherCls).html(""), "customContent" == i.contentType[0] && (a.css({
							backgroundImage: ""
						}), a.children(b.appOtherCls).html(i.customContent[0]))
					}
					a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/16986040375660277/T1DMWHFcxiXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028226837030/T1Rvy2FixXXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028310675059/T1gh90FoVbXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg"],
				sliderHref: ["#", "#", "#"],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallImgSrcT: ["", "", ""],
				smallHoverSrcT: ["", "", ""],
				customContent: ["", "", ""],
				thumbSet: ["", "", ""],
				contentType: ["imgContent", "imgContent", "imgContent"],
				smallCircleMode: ["no", "no", "no"],
				smallCircleBgColor: ["", "", ""],
				smallCircleBgColor1: ["", "", ""],
				thumbCircleSet: ["", "", ""],
				smallCustom: ["", "", ""],
				smallCustom1: ["", "", ""],
				sliderMode: "scrolly",
				shadeMode: "no",
				sliderOverflow: "hidden",
				shadeCount: "20",
				kgdSwitch: "black",
				sliderArrow: "no",
				sliderSmallImg: "yes",
				sliderEffect: "easeBoth",
				sliderTime: "4",
				sliderDuration: "0.5",
				sliderPauseHover: "yes",
				sliderDelay: "0",
				sliderSwitch: "mouse",
				hrefMode: "_blank",
				sliderAuto: "true",
				kuandukz: "zdy",
				displayMode: "",
				css3Mode: "",
				css3Speed: "trans05s",
				sWidth: "",
				sHeight: "",
				defaultSmallImg: "",
				defaultSmallHover: "",
				smallShowMode: "",
				smallShowCss: "",
				smallShowSpeed: "trans02s",
				dSmallRorate: "",
				aSmallRorate: "",
				childConfig: [{
					attachID: "",
					autoSize: "yes",
					autoSize1: "yes",
					oSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/T2JItnXtxaXXXXXXXX_!!39767794.png",
					oSrcHover: "",
					tSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T22UebXmNcXXXXXXXX_!!39767794.png",
					tSrcHover: ""
				}]
			}],
			jfyb: ['<div class="t-app" data-dblType="jfyb"></div>',
			{
				tTitle: "翻页轮播设置",
				tUrl: "turnslider.php",
				tSubmit: function(a, c) {
					var h, i, j, k, l, m, n, o, p, r, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jfybOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jfybTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='jfybPanel']");
					for (smallSliderSpace = b.tParseInt(a.smallSliderSpace), j, checkUrl(a.sliderSrc[0]) ? c.css({
						backgroundImage: "url(" + a.sliderSrc[0] + ")"
					}) : c.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), h = "display:inline-block;", i = "inline-block", j = "margin-right:" + smallSliderSpace + "px;", "scrolly" == a.smallSliderMode && (h = "", i = "block", j = "margin-bottom:" + smallSliderSpace + "px;"), !a.thumbSet && (a.thumbSet = []), g.children(b.appOtherCls + "[data-attachType='jfybSmallImg']:gt(" + (a.contentType.length - 1) + ")").hide(), k = $(this), l = "", m = 0; m < a.contentType.length; m++) k = g.children(b.appOtherCls + "[data-attachType='jfybSmallImg']:eq(" + m + ")"), l = "", a.thumbSet[m] && "" != a.thumbSet[m] ? (p = JSON.parse(a.thumbSet[m]), k.length > 0 ? (k.html("").css("vertical-align", "top"), "" != a.sWidth && $.isNumeric(a.sWidth) && k.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && k.css({
						height: a.sHeight
					}), b.appConfig["jcb"][1].tSubmit(p, k), k.removeAttr("data-config")) : (n = 120, o = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (n = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (o = a.sHeight), b.setAttachID(a.childConfig[0]), $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="vertical-align:top;' + h + j + "width:" + n + "px;height:" + o + 'px;"></div>').tResize().appendTo(g).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), r = g.children(b.appOtherCls + "[attachID='" + a.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(p, r), r.removeAttr("data-config"))) : (l = "imgContent" == a.contentType[m] ? "" != a.smallImgSrcT[m] ? a.smallImgSrcT[m] : "" != a.smallHoverSrcT[m] ? a.smallHoverSrcT[m] : a.sliderSrc[m] : "" != a.smallImgSrc[m] ? a.smallImgSrc[m] : "" != a.smallHoverSrc[m] ? a.smallHoverSrc[m] : a.sliderSrc[m], k.length > 0 ? (checkUrl(l) && (k.children("img").length > 0 ? k.children("img").attr({
						src: l
					}) : k.html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + l + '">').tResize()), "" != a.sWidth && $.isNumeric(a.sWidth) && k.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && k.css({
						height: a.sHeight
					}), "scrolly" == a.smallSliderMode ? k.css("margin-bottom", smallSliderSpace) : k.css("margin-right", smallSliderSpace), k.css("display", i).show()) : (n = 120, o = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (n = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (o = a.sHeight), b.setAttachID(a.childConfig[0]), $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="' + h + j + "width:" + n + "px;height:" + o + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + l + '"></div>').tResize().appendTo(g).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID)));
					c.children(b.appOtherCls).html(""), "customContent" == a.contentType[0] && (c.css({
						backgroundImage: ""
					}), c.children(b.appOtherCls).html(a.customContent[0])), c.attr("data-config", JSON.stringify(a))
				},
				tOtherSetConfig: {
					characterLineMulti: "no",
					characterLineHeight: "",
					characterLineContent: "",
					characterLineAlign: "left",
					characterLineSpace: "",
					characterTBpadding: "",
					characterLetterSpacing: "",
					characterContent: "",
					characterMode: "text",
					characterItemContent: "",
					characterFixed: "2",
					characterHoverMode: "off",
					characterHoverSpeed: "",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "宋体",
					characterColorHover: "#000000",
					characterBgSrcHover: "",
					characterBgColorHover: "",
					characterUnderLine: "off",
					characterUnderLineStyle: "solid",
					characterUnderLineWeight: "1",
					characterUnderLineColor: "#000000",
					ssOpacity: "1",
					ssOpacity1: "1",
					characterWeight: "normal",
					characterStyle: "normal",
					characterLineUnder: "",
					characterLineThrough: "",
					characterWidthMode: "normal",
					characterAlign: "center",
					characterFont: "宋体",
					characterSize: "12",
					characterColor: "#000000",
					characterBgColor: "",
					characterLeftPadding: "",
					characterRightPadding: "",
					characterBgSrc: "",
					borderControl: "",
					borderColor: "#000000",
					borderWidth: "1",
					borderRadius: "0",
					shadowControl: "",
					shadowLeft: "0",
					shadowTop: "0",
					shadowBlur: "5",
					shadowSize: "0",
					shadowColor: "#666666",
					shadowStyle: "",
					borderControl1: "",
					borderColor1: "#000000",
					borderWidth1: "1",
					borderRadius1: "0",
					shadowControl1: "",
					shadowLeft1: "0",
					shadowTop1: "0",
					shadowBlur1: "5",
					shadowSize1: "0",
					shadowColor1: "#666666",
					shadowStyle1: "",
					outlineControl: "",
					outlineWidth: "juneol",
					outlineSpeed: "trans02s",
					outlineColor: "#FFFFFF",
					outlineShadowColor: "#666666",
					css3ModeX1: "",
					css3ModeY1: "",
					css3Mode1: ""
				},
				tDynamic: '<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg"><img width="120" height="120" src=""/></div>',
				tContent: '<div class="t-app-child" data-dblType="jfyb" data-attachType="jfybOArrow"></div><div class="t-app-child" data-dblType="jfyb" data-attachType="jfybTArrow"></div><div class="t-app-child" data-dblType="jfyb" data-attachType="jfybPanel" style="white-space: nowrap;"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function(a) {
					var m, A, B, O, H, I, J, K, L, M, N, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig[0],
						i = (new Date).valueOf().toString().substr(7, 6),
						j = c.sliderMode,
						k = c.smallSliderMode,
						l = b.tParseInt(c.smallSliderSpace),
						n = "a",
						o = "",
						p = "a",
						r = "",
						s = "",
						t = "",
						u = "",
						v = "",
						w = "",
						x = "",
						y = "",
						z = [],
						C = "",
						D = "",
						E = !1,
						F = "",
						G = "";
					if (c.shadeMode && "yes" == c.shadeMode ? (H = c.shadeCount || 1, I = "", J = "", K = "", L = "", M = "", N = 0, newWidth = b.tParseInt(d / H), N = d % H, 0 != N && H++, shadeMarginLeft = "") : newWidth = d, !c.sliderActive && (c.sliderActive = "1"), m = b.tParseInt(c.sliderActive) - 1, ("" != c.displayMode || "" != c.css3Mode) && (C = " jspb", F = " " + c.css3Speed, G = " " + c.css3Speed, "june-box-fadein" == c.displayMode && (F += " june-box-fadein", G += " june-box-fadein"), c.css3Mode && c.css3Mode.indexOf("moveout") >= 0 && (F += " june-box-lx" + c.css3Mode.replace(/moveout/g, ""), G += " june-box-rx" + c.css3Mode.replace(/moveout/g, "")), c.css3Mode && c.css3Mode.indexOf("movein") >= 0 && (F += " june-box-rx" + c.css3Mode.replace(/movein/g, ""), G += " june-box-lx" + c.css3Mode.replace(/movein/g, ""))), c.contentType[0], Q = !1, !c.thumbSet && (c.thumbSet = []), c.thumbSet) for (R = 0; R < c.thumbSet.length; R++) if (c.thumbSet[R] && "" != c.thumbSet[R]) {
						Q = !0;
						break
					}
					for (Q || (D = C, C = ""), S = 0; S < c.customContent.length; S++) if (c.customContent[S].indexOf("jspb") >= 0) {
						E = !0;
						break
					}
					if (E && (C = D = "", F = "", G = ""), "1" == j.substr(-1) && (j = j.substr(0, j.length - 1), n = "b", o = ", 'viewSize': ["), T = "", U = "", "1" != c.sliderActive && ("scrollx" == j ? T = "b" == n ? "left:" + m * d + "px;" : "left:-" + m * d + "px;" : "scrolly" == j && (T = "b" == n ? "top:" + m * e + "px;" : "top:-" + m * e + "px;")), "1" == k.substr(-1) && (k = k.substr(0, k.length - 1), p = "b"), r = '<div class="scroller' + C + '" style="overflow:hidden;width:' + d + "px;height:" + e + 'px;z-index:10;"><div class="ks-switchable-content c' + i + '" style="' + T + '">', B = "white" == c.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == c.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", X = a.children(b.appChildCls + "[data-attachType='jfybOArrow']"), Y = a.children(b.appChildCls + "[data-attachType='jfybTArrow']"), Z = a.children(b.appChildCls + "[data-attachType='jfybPanel']"), V = b.getChildPos(Z, X, !1), W = b.getChildPos(Z, Y, !1), posP = b.getChildPos(a, Z, !0), _ = "", ab = "", bb = "", cb = "", db = "", eb = "", fb = "", checkUrl(h.oSrc) && (ab = 'src="' + h.oSrc + '" alt="上一页"'), checkUrl(h.tSrc) && (bb = 'src="' + h.tSrc + '" alt="下一页"'), checkUrl(h.oSrcHover) && (cb = 'src="' + h.oSrcHover + '" alt="上一页"'), checkUrl(h.tSrcHover) && (db = 'src="' + h.tSrcHover + '" alt="下一页"'), eb = "<img " + ab + " />", fb = "<img " + bb + " />", ("" != cb || "" != db) && (_ = " junefade", eb = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + ab + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + cb + " />", fb = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + bb + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + db + " />"), !0 && (t = " 'prevBtnCls': 'prev" + i + "', 'nextBtnCls': 'next" + i + "', "), !0 && (u = '<span class="abs prev' + i + F + _ + '" style="' + v + "cursor:pointer;width:" + V.width + "px;height:" + V.height + "px;top:" + V.top + "px;left:" + V.left + 'px;z-index:99;">' + eb + '</span><span class="abs next' + i + G + _ + '" style="' + v + "cursor:pointer;width:" + W.width + "px;height:" + W.height + "px;top:" + W.top + "px;left:" + W.left + 'px;z-index:99;">' + fb + "</span>"), gb = "dianquanka control-group j-a", hb = "top:0;left", ib = "width", jb = "margin-right:" + l + "px;", kb = posP.width, "scrolly" == k && (hb = "left:0;top", ib = "height", kb = posP.height, jb = "margin-bottom:" + l + "px;"), $.each(c.contentType, function(a) {
						var B, C, D, E, F, G, H, I, J, K, L, M, N, O, g = Z.children(b.appOtherCls + "[data-attachType='jfybSmallImg']:eq(" + a + ")"),
							i = c.sliderHref[a],
							p = g.attr("attachID") || "",
							q = " " + p,
							h = b.getChildPos(Z, g, !1),
							r = " rel",
							t = "",
							u = "",
							v = "display:none;",
							w = hb + ":" + h[ib] * a + "px;";
						w = "top:0;left:0;", "b" == n && ("scrollx" == j ? (u = a * d, t = "top:0;left:-" + u + "px;", o += "-" + d + ",") : "scrolly" == j && (u = a * e, t = "left:0;top:-" + u + "px;", o += "-" + e + ","), r = " abs"), m == a && (v = "display:block;"), 0 == a && "1" != c.sliderActive && ("scrollx" == k ? U = "left:-" + m * (h.width + l) + "px;" : "scrolly" == k && (U = "top:-" + m * (h.height + l) + "px;")), A = a == m ? " dianquanka control-group j-a" : "", c.thumbSet[a] && "" != c.thumbSet[a] && (B = JSON.parse(c.thumbSet[a]), hrefx = "", ulStyle = "", thumbClass = "", characterBgSrc = "", characterBgColor = "", characterColor = "", characterFont = "", characterWeight = "", characterSize = "", characterDash = "text-decoration: none;", jspbHtml = "", jspbFade1 = "", jspbFade2 = "", characterContent = B.characterContent, characterTh = "", srcPosition = "top left", characterSpace = "", characterBgSrcHover = "", characterBgColorHover = "", characterColorHover = "", characterFontHover = "", characterWeightHover = "", autoid = "", thumbawidth = h.width, characterColorMsOver = B.characterColorMsOver || "", characterBgColorMsOver = B.characterBgColorMsOver || "", characterBgSrcMsOver = B.characterBgSrcMsOver || "", characterBorderWidth = B.characterBorderWidth || "", characterBorderColor = B.characterBorderColor || "", characterBorderStyle = B.characterBorderStyle || "", characterBorderWidthHover = B.characterBorderWidthHover || "", characterBorderColorHover = B.characterBorderColorHover || "", characterBorderStyleHover = B.characterBorderStyleHover || "", characterBorderWidthMsOver = B.characterBorderWidthMsOver || "", characterBorderColorMsOver = B.characterBorderColorMsOver || "", characterBorderStyleMsOver = B.characterBorderStyleMsOver || "", borderstr = "", borderstrHover = "", borderstrMsOver = "", msHoverClass = "", msHoverHtml = "", msHoverHtml1 = "", characterSizeHover = "", !B.characterMode && (B.characterMode = "text"), !B.characterItemContent && (B.characterItemContent = ""), "text" != B.characterMode && B.characterContent && "" != B.characterContent && (("price" == B.characterMode || "_price" == B.characterMode) && (B.characterItemContent = b.tParseFloat(B.characterItemContent).toFixed(b.tParseInt(B.characterFixed))), characterTh = ' data-h="' + B.characterItemContent + ";" + B.characterContent + '"', C = B.characterContent.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), C && C.length > 0 && (autoid = C[0].replace(/(\?|\&)id\=/g, "")), "" != autoid && ("title" == B.characterMode && (characterContent = "%7b$" + autoid + ".title%7d"), "price" == B.characterMode && (characterContent = "%7b$" + autoid + ".price." + b.tParseInt(B.characterFixed) + "f%7d"), "_price" == B.characterMode && (characterContent = "%7b$" + autoid + ".discountPrice." + b.tParseInt(B.characterFixed) + "f%7d"), "sale" == B.characterMode && (characterContent = "%7b$" + autoid + ".soldCount%7d"))), B.characterDash && "on" == B.characterDash && (characterDash = "text-decoration: line-through;"), B.characterSpace && "" != B.characterSpace && ("left" == B.characterAlign ? (characterSpace = "padding-left: " + b.tParseInt(B.characterSpace) + "px;", thumbawidth -= b.tParseInt(B.characterSpace), srcPosition = "top left") : "right" == B.characterAlign && (characterSpace = "padding-right: " + b.tParseInt(B.characterSpace) + "px;", thumbawidth -= b.tParseInt(B.characterSpace), srcPosition = "top right")), "click" == c.sliderSwitch && ("" != characterColorMsOver || "" != characterBgColorMsOver || "" != characterBgSrcMsOver || "" != characterBorderWidthMsOver) && (D = "", msHoverClass = " junefade", characterColorMsOver = RGBToHex(characterColorMsOver, ""), "" != characterColorMsOver && (D += "color:" + characterColorMsOver + ";"), characterBgColorMsOver = RGBToHex(characterBgColorMsOver, ""), "" != characterBgColorMsOver && (D += "background-color:" + characterBgColorMsOver + ";"), checkUrl(characterBgSrcMsOver) && (D += "background:url(" + characterBgSrcMsOver + ") " + srcPosition + " no-repeat;"), "" != characterBorderWidthMsOver && "" != b.tParseInt(characterBorderWidthMsOver) && 0 != b.tParseInt(characterBorderWidthMsOver) && (characterBorderColorMsOver = RGBToHex(characterBorderColorMsOver, ""), borderstrMsOver = "border:" + b.tParseInt(characterBorderWidthMsOver) + "px " + characterBorderStyleMsOver + " " + characterBorderColorMsOver + ";"), msHoverHtml = '<div class="abs junei" style="width:100%;height:100%;font:inherit;left:0;right:0;' + characterSpace + D + borderstrMsOver + '">' + characterContent + '</div><div class="abs juneo" style="width:100%;height:100%;font:inherit;">', msHoverHtml1 = "</div>"), "on" == B.characterHoverMode && (thumbClass = "jspb ", jspbFade1 = " " + B.characterHoverSpeed, E = 0, B.characterUnderLine && "on" == B.characterUnderLine && (E = B.characterUnderLineWeight, ulStyle = "border-bottom: " + E + "px " + B.characterUnderLineStyle + " " + RGBToHex(B.characterUnderLineColor)), B.css3Mode1 && "" != B.css3Mode1 && (jspbFade1 += " " + B.css3Mode1), B.css3ModeX1 && "" != B.css3ModeX1 && (jspbFade1 += " " + B.css3ModeX1), B.css3ModeY1 && "" != B.css3ModeY1 && (jspbFade1 += " " + B.css3ModeY1), B.characterBgColorHover = RGBToHex(B.characterBgColorHover, ""), "" != B.characterBgColorHover && (characterBgColorHover = "background-color:" + B.characterBgColorHover + ";"), B.characterColorHover = RGBToHex(B.characterColorHover, ""), "" != B.characterColorHover && (characterColorHover = "color:" + B.characterColorHover + ";"), "" != B.characterFontHover && (characterFontHover = "font-family:" + B.characterFontHover + ";"), "" != B.characterWeightHover && (characterWeightHover = "font-weight:" + B.characterWeightHover + ";"), "" != B.characterSizeHover && (characterSizeHover = "font-size:" + b.tParseInt(B.characterSizeHover) + "px;"), checkUrl(B.characterBgSrcHover) && (characterBgSrcHover = "background:url(" + B.characterBgSrcHover + ") " + srcPosition + " no-repeat;"), "" != characterBorderWidthHover && "" != b.tParseInt(characterBorderWidthHover) && 0 != b.tParseInt(characterBorderWidthHover) && (characterBorderColorHover = RGBToHex(characterBorderColorHover, ""), borderstrHover = "border:" + b.tParseInt(characterBorderWidthHover) + "px " + characterBorderStyleHover + " " + characterBorderColorHover + ";"), jspbHtml = '<a class="abs' + jspbFade1 + '" href="' + i + '" target="' + c.hrefMode + '" style="top:0;left:0;width:' + thumbawidth + "px;height:" + (h.height - E) + "px;line-height:" + h.height + "px;" + characterSpace + characterBgSrcHover + characterBgColorHover + characterColorHover + characterFontHover + characterWeightHover + characterSizeHover + borderstrHover + characterDash + ulStyle + '">' + characterContent + "</a>"), B.characterBgColor = RGBToHex(B.characterBgColor, ""), "" != B.characterBgColor && (characterBgColor = "background-color:" + B.characterBgColor + ";"), B.characterColor = RGBToHex(B.characterColor, ""), "" != B.characterColor && (characterColor = "color:" + B.characterColor + ";"), "" != B.characterFont && (characterFont = "font-family:" + B.characterFont + ";"), "" != B.characterWeight && (characterWeight = "font-weight:" + B.characterWeight + ";"), "" != B.characterSize && (characterSize = "font-size:" + b.tParseInt(B.characterSize) + "px;"), "" != characterBorderWidth && "" != b.tParseInt(characterBorderWidth) && 0 != b.tParseInt(characterBorderWidth) && (characterBorderColor = RGBToHex(characterBorderColor, ""), borderstr = "border:" + b.tParseInt(characterBorderWidth) + "px " + characterBorderStyle + " " + characterBorderColor + ";"), "" != i && (hrefx = ' href="' + i + '"'), checkUrl(B.characterBgSrc) && (characterBgSrc = "background:url(" + B.characterBgSrc + ") " + srcPosition + " no-repeat;"), F = "", G = " split chn-link-dianquanka a-2", "" == jspbHtml && (jspbHtml = '<a class="abs"' + hrefx + ' style="top:0;left:0;width:' + thumbawidth + "px;height:" + h.height + "px;line-height:" + h.height + "px;" + characterSpace + characterBgSrc + characterBgColor + characterColor + characterFont + characterWeight + characterSize + borderstr + characterDash + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + characterContent + "</a>"), "click" == c.sliderSwitch && (hrefx = ""), y += '<li class="thumbsmall' + A + q + '"' + characterTh + ' data-i="' + p + '" data-t="' + B.characterMode + '" style="' + w + jb + "text-align:" + B.characterAlign + ";width:" + h.width + "px;height:" + h.height + 'px;cursor:pointer;"><div class="rel" style="' + w + "width:" + h.width + "px;height:" + h.height + 'px;"><div class="jspb abs' + F + '" style="width:100%;height:100%;">' + jspbHtml + '</div><a class="abs' + G + '"' + hrefx + ' style="width:' + thumbawidth + "px;height:" + h.height + "px;line-height:" + h.height + "px;" + characterSpace + characterBgSrc + characterBgColor + characterColor + characterFont + characterWeight + characterSize + borderstr + characterDash + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + msHoverHtml + characterContent + msHoverHtml1 + "</a></div></li>"), "imgContent" == c.contentType[a] ? (H = c.smallImgSrcT[a], I = c.smallHoverSrcT[a], J = !1, K = "", L = "", "" == I && (I = H, J = !0), "" == I && (I = c.sliderSrc[a], J = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrcT[a] && (J = !0), "" == H && (H = c.sliderSrc[a]), z.push(I), checkUrl(I) && (K = 'src="' + I + '"'), "" != c.sliderSrc[a] && (L = "background:url(" + c.sliderSrc[a] + ") no-repeat scroll center center transparent;"), s += '<div class="elepic" style="height:' + e + "px;width:" + newWidth + "px;" + v + 'float:left;overflow:hidden;"><div class="elexb' + r + '" style="height:' + e + "px;width:" + d + "px;" + t + L + '"><a class="J_TWidget" href="' + i + '" target="' + c.hrefMode + '" style="height:' + e + "px;width:" + d + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>', x = '<a href="' + i + '" target="' + c.hrefMode + '" class="abs" style="top:0px;left:0px;width:' + h.width + "px;height:" + h.height + 'px;"><img ' + K + ' style="width:' + h.width + "px;height:" + h.height + 'px;"></a>', J ? (N = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", O = "background:#000000;", "white" == c.kgdSwitch && (O = "background:#ffffff;"), "transparent" == c.kgdSwitch && (O = "", N = ""), M = '<a href="' + i + '" target="' + c.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="' + O + "top:0px;left:0px;width:" + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="' + N + "width:" + h.width + "px;height:" + h.height + 'px;"></a>', "click" == c.sliderSwitch && (M = '<a class="abs split chn-link-dianquanka a-2" style="' + O + "top:0px;left:0px;width:" + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="' + N + "width:" + h.width + "px;height:" + h.height + 'px;"></a>'), c.thumbSet[a] && "" != c.thumbSet[a] || (y += '<li class="' + A + q + '" data-i="' + p + '" style="cursor:pointer;width:' + h.width + "px;height:" + h.height + "px;" + jb + '"><div class="rel" style="' + w + "width:" + h.width + "px;height:" + h.height + 'px;">' + x + M + "</div></li>")) : (M = '<a href="' + i + '" target="' + c.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="width:' + h.width + "px;height:" + h.height + 'px;"></a>', "click" == c.sliderSwitch && (M = '<a class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="width:' + h.width + "px;height:" + h.height + 'px;"></a>'), c.thumbSet[a] && "" != c.thumbSet[a] || (y += '<li class="' + A + q + '" data-i="' + p + '" style="cursor:pointer;width:' + h.width + "px;height:" + h.height + "px;" + jb + '"><div class="rel" style="' + w + "width:" + h.width + "px;height:" + h.height + 'px;">' + x + M + "</div></li>"))) : (H = c.smallImgSrc[a], I = c.smallHoverSrc[a], J = !1, K = "", "" == I && (I = H, J = !0), "" == I && (I = c.sliderSrc[a], J = !1), "transparent" != c.kgdSwitch && "" == c.smallHoverSrc[a] && (J = !0), "" == H && (H = c.sliderSrc[a]), z.push(I), checkUrl(I) && (K = 'src="' + I + '"'), s += '<div class="elepic" style="height:' + e + "px;width:" + newWidth + "px;" + v + 'float:left;overflow:hidden;"><div class="elexb' + r + '" style="height:' + e + "px;width:" + d + "px;" + t + '">' + c.customContent[a] + "</div></div>", x = '<a href="' + i + '" target="' + c.hrefMode + '" class="abs" style="top:0px;left:0px;width:' + h.width + "px;height:" + h.height + 'px;"><img ' + K + ' style="width:' + h.width + "px;height:" + h.height + 'px;"></a>', J ? (N = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", O = "background:#000000;", "white" == c.kgdSwitch && (O = "background:#ffffff;"), "transparent" == c.kgdSwitch && (O = "", N = ""), M = '<a href="' + i + '" target="' + c.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="' + O + "top:0px;left:0px;width:" + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="' + N + "width:" + h.width + "px;height:" + h.height + 'px;"></a>', "click" == c.sliderSwitch && (M = '<a class="abs split chn-link-dianquanka a-2" style="' + O + "top:0px;left:0px;width:" + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="' + N + "width:" + h.width + "px;height:" + h.height + 'px;"></a>'), c.thumbSet[a] && "" != c.thumbSet[a] || (y += '<li class=" ' + A + q + '" data-i="' + p + '" style="width:' + h.width + "px;height:" + h.height + "px;cursor:pointer;" + jb + '"><div class="rel" style="' + w + "width:" + h.width + "px;height:" + h.height + 'px;">' + x + M + "</div></li>")) : (M = '<a href="' + i + '" target="' + c.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="width:' + h.width + "px;height:" + h.height + 'px;"></a>', "click" == c.sliderSwitch && (M = '<a class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + h.width + "px;height:" + h.height + 'px;"><img src="' + H + '" style="width:' + h.width + "px;height:" + h.height + 'px;"></a>'), c.thumbSet[a] && "" != c.thumbSet[a] || (y += '<li class=" ' + A + q + '" data-i="' + p + '" style="width:' + h.width + "px;height:" + h.height + "px;cursor:pointer;" + jb + '"><div class="rel" style="' + w + "width:" + h.width + "px;height:" + h.height + 'px;">' + x + M + "</div></li>")))
					}), c.shadeMode && "yes" == c.shadeMode || (s += Q ? "</div></div>" : "</div></div>"), "b" == n && (o = o.substr(0, o.length - 1) + "]"), lb = "", c.shadeMode && "yes" == c.shadeMode) {
						for (R = 0; H > R; R++) O = newWidth, R == H - 1 && 0 != N && (O = N, lb = "jfybyys "), 0 == R ? (L = ' data-appid="' + c.appID + '" data-s="' + n + '" data-hsrc="' + z.join(",") + '" data-sm="' + k + ";" + c.smallImgCount + ";" + c.smallSliderSpace + '"', M = "top:" + f + "px;left:" + g + "px;") : (L = "", M = ""), I += '<div class="jfyb ' + lb + "abs J_TWidget" + D + " " + c.appID + '"' + L + ' style="height:' + e + "px;width:" + d + "px;" + M + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c_' + R + "_" + i + "','navCls':'n" + i + "','effect':'" + j + "','steps':1,'circular':true,'easing':'" + c.sliderEffect + "','duration':'" + (.5 + .02 * R) + "','autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + ",'activeTriggerCls':'" + gb + "', 'triggerType': '" + c.sliderSwitch + "'" + o + ", 'activeIndex': " + m + '}">', r = '<div class="scroller' + C + '" style="overflow:hidden;width:' + O + "px;height:" + e + 'px;z-index:10;float:left;"><div class="ks-switchable-content c_' + R + "_" + i + '" style="' + T + '">', div1 = s.replace(/\<div class\=\"elexb([^\>]*)\>/g, function(a) {
							var c = a;
							return c = c.replace(/(width\:[\d\.]*px\;)(left\:\-?([^\;]*)\;)?/g, function(a, c, d, e) {
								var f = "";
								return "scrollx" == j && e && "" != e && (f = b.tParseInt(e)), c + "left:-" + (newWidth * R + f) + "px;"
							})
						}), R == H - 1 && 0 != N && (div1 = div1.replace(/\<div class\=\"elepic([^\>]*)\>/g, function(a) {
							var b = a;
							return b = b.replace(/width\:([\d\.]*)px\;/g, function(a, b) {
								return b = b.replace(newWidth, O), "width:" + b + "px;"
							})
						})), div1 += "</div></div>", J += r + div1, K += "</div>";
						return I + J + '<div class="fyp abs J_TWidget" style="height:' + posP.height + "px;width:" + posP.width + "px;top:" + posP.top + "px;left:" + posP.left + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'n' + i + "','navCls':'sn" + i + "','effect':'" + k + "','steps':" + c.smallImgCount + ",'circular':true,'easing':'easeBoth','duration':'0.5','autoplay':false," + t + "'triggerType': 'mouse', 'activeIndex': " + m + '}">' + u + '<div class="sc' + i + '" style="overflow:hidden;width:' + posP.width + "px;height:" + posP.height + 'px;z-index:10;"><div class="ks-switchable-content jfsb n' + i + '" style="' + w + "z-index:12;background:none;" + U + '">' + y + '</div></div><ul class="ks-switchable-nav sn' + i + '" style="display:none;"></ul></div>' + K
					}
					return '<div class="jfyb abs J_TWidget' + D + " " + c.appID + '" data-appid="' + c.appID + '" data-s="' + n + '" data-hsrc="' + z.join(",") + '" data-sm="' + k + ";" + c.smallImgCount + ";" + c.smallSliderSpace + '" style="height:' + e + "px;width:" + d + "px;top:" + f + "px;left:" + g + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c' + i + "','navCls':'n" + i + "','effect':'" + j + "','steps':1,'circular':true,'easing':'" + c.sliderEffect + "','duration':'0.5','autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + ",'activeTriggerCls':'" + gb + "', 'triggerType': '" + c.sliderSwitch + "'" + o + ", 'activeIndex': " + m + '}">' + r + s + '<div class="fyp abs J_TWidget" style="height:' + posP.height + "px;width:" + posP.width + "px;top:" + posP.top + "px;left:" + posP.left + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'n' + i + "','navCls':'sn" + i + "','effect':'" + k + "','steps':" + c.smallImgCount + ",'circular':true,'easing':'easeBoth','duration':'0.5','autoplay':false," + t + "'triggerType': 'mouse', 'activeIndex': " + m + '}">' + u + '<div class="sc' + i + '" style="overflow:hidden;width:' + posP.width + "px;height:" + posP.height + 'px;z-index:10;"><div class="ks-switchable-content jfsb n' + i + '" style="' + w + "z-index:12;background:none;" + U + '">' + y + '</div></div><ul class="ks-switchable-nav sn' + i + '" style="display:none;"></ul></div></div>'
				},
				codeImport: function(a, c, d, e) {
					var h, j, k, l, m, s, t, u, v, w, x, z, A, B, C, D, E, F, G, H, I, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						i = {},
						q = (a.children(b.appChildCls + "[data-attachType='jfybOArrow']"), a.children(b.appChildCls + "[data-attachType='jfybTArrow']"), a.children(b.appChildCls + "[data-attachType='jfybPanel']")),
						r = d.attr("data-hsrc");
					if (h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
						contentCls: "",
						navCls: "",
						effect: "scrolly",
						steps: 1,
						easing: "easeBoth",
						duration: "0.5",
						autoplay: !0,
						interval: 4,
						activeTriggerCls: "hidden",
						triggerType: "mouse"
					}, r = r ? r.split(",") : [], s = d.attr("data-s") || "a", t = d.attr("data-sm") || "scrollx;1;0", u = t.split(";"), i.smallSliderMode = u[0], i.smallImgCount = u[1], i.smallSliderSpace = u[2], i.childConfig = [], i.childConfig[0] = {}, i.sliderSrc = [], i.sliderHref = [], i.customContent = [], i.contentType = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.smallImgSrcT = [], i.smallHoverSrcT = [], i.thumbSet = [], i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jfyb").length > 0) {
						for (i.shadeCount = 1; d.children(".jfyb").length > 0;) d = d.children(".jfyb"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
							contentCls: "",
							navCls: "",
							effect: "scrolly",
							steps: 1,
							easing: "easeBoth",
							duration: "0.5",
							autoplay: !0,
							interval: 4,
							activeTriggerCls: "hidden",
							triggerType: "mouse"
						}, d.hasClass("jfybyys") || i.shadeCount++;
						i.shadeMode = "yes"
					}
					v = JSON.parse(d.children("div.J_TWidget").attr("data-widget-config").replace(/'/g, '"')), i.sliderActive = "1", w = require("scripts/other"), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function(a) {
						var e, f, g, h, j, k, c = $(this);
						c.children("div").length > 0 && (c = c.children("div")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), j = d.children("div.J_TWidget").find("div.ks-switchable-content").children("li:eq(" + a + ")"), r[a] || (r[a] = ""), e.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(f), i.sliderHref.push(g), i.customContent.push(""), j.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(w.thumbImport(j))) : (j.find("img").length > 1 ? (k = j.find("img:eq(1)").attr("src"), k == f && (k = ""), i.smallImgSrcT.push(k)) : (k = j.find("img:eq(0)").attr("src"), k == f && (k = ""), i.smallImgSrcT.push(k)), i.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (r[a] == f || r[a] == k) && (r[a] = ""), i.smallHoverSrcT.push(r[a]), i.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), i.thumbSet.push(""))) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.customContent.push(h), j.find("a").length > 0 ? (g = j.find("a").attr("href") || "", i.sliderHref.push(g)) : i.sliderHref.push(""), j.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(w.thumbImport(j))) : (j.find("img").length > 1 ? (k = j.find("img:eq(1)").attr("src"), i.smallImgSrc.push(k)) : (k = j.find("img:eq(0)").attr("src"), i.smallImgSrc.push(k)), r[a] == k && (r[a] = ""), i.smallImgSrcT.push(""), i.smallHoverSrc.push(r[a]), i.smallHoverSrcT.push(""), i.thumbSet.push("")))
					}), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = []), h.effect && (i.sliderMode = h.effect), "true" != h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), h.triggerType && (i.sliderSwitch = h.triggerType), h.activeIndex && (i.sliderActive = b.tParseInt(h.activeIndex) + 1), i.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", l = v.prevBtnCls, m = v.nextBtnCls, i.childConfig[0].oSrc = d.find("." + l).children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img:eq(0)").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src")), j = b.setChildPos(d.children("div.J_TWidget"), d.find("." + l), !1), k = b.setChildPos(d.children("div.J_TWidget"), d.find("." + m), !1), x = d.find("." + l), i.displayMode = x.hasClass("june-box-fadein") ? "june-box-fadein" : "";
					try {
						i.css3Speed = x.attr("class").match(/trans(\w+)s/g).join(""), x.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + x.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), x.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + x.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
					} catch (y) {}
					z = "display:inline-block;", A = "inline-block", B = "margin-right:" + i.smallSliderSpace + "px;", "scrolly" == i.smallSliderMode && (z = "", A = "block", B = "margin-bottom:" + i.smallSliderSpace + "px;"), q.children("div.J_TWidget").children(b.appOtherCls + "[data-attachType='jfybSmallImg']").each(function() {
						b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
					}), q.children("div.J_TWidget").children(b.appOtherCls + "[data-attachType='jfybSmallImg']").remove(), G = !0, d.children("div.J_TWidget").find("div.ks-switchable-content").children("li").each(function(a) {
						var e, f, g, j, d = i.contentType[a];
						e = "imgContent" == d ? i.smallImgSrcT[a] : i.smallImgSrc[a], "" == e && (e = i.sliderSrc[a]), $(this).attr("data-i") ? i.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(i.childConfig[0]), f = "display:inline-block;", "scrolly" == i.smallSliderMode && (f = "display:block;"), "" == i.thumbSet[a] ? $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="' + z + B + "width:" + $(this).width() + "px;height:" + $(this).height() + "px;" + f + '"><img width="100%" height="100%" src="' + e + '"></div>').appendTo(q).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : (g = JSON.parse(i.thumbSet[a]), $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="vertical-align:top;' + z + B + "width:" + $(this).width() + "px;height:" + $(this).height() + "px;" + f + '"></div>').appendTo(q).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), j = q.children(b.appOtherCls + "[attachID='" + i.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(g, j), j.removeAttr("data-config")), 0 == a && (C = $(this).width(), E = $(this).height()), D = $(this).width(), F = $(this).height(), (C != D || E != F) && (G = !1)
					}), G && (i.sWidth = C, i.sHeight = E), b.setAttachID(i.childConfig[0]), q.tResize().css({
						width: d.children("div.J_TWidget").width(),
						height: d.children("div.J_TWidget").height(),
						left: b.tParseInt(d.children("div.J_TWidget").css("left")),
						top: b.tParseInt(d.children("div.J_TWidget").css("top"))
					}).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), H = RGBToHex(d.children("div.J_TWidget").find("div.ks-switchable-content").children("li").children("div").children("a:eq(1)").css("background-color"), ""), kdswitch = "#ffffff" == H.toLowerCase() ? i.kgdSwitch = "white" : "#000000" == H.toLowerCase() ? i.kgdSwitch = "black" : void 0, kdswitch || (i.kgdSwitch = "transparent"), "b" == s && (i.sliderMode += "1"), I = $.extend(f, i), a.attr("data-config", JSON.stringify(I)), require("scripts/tAjax"), "" != i.sliderSrc[0] && checkUrl(i.sliderSrc[0]) ? a.css({
						backgroundImage: "url(" + i.sliderSrc[0] + ")"
					}) : a.css({
						backgroundImage: ""
					}), a.children(b.appChildCls + "[data-attachType='jfybOArrow']").tResize({
						tSwitch: !1
					}).css({
						backgroundImage: "url(" + i.childConfig[0].oSrc + ")",
						width: 0 == j.width ? 48 : j.width,
						height: 0 == j.height ? 48 : j.height,
						top: j.top,
						left: j.left
					}).show(), a.children(b.appChildCls + "[data-attachType='jfybTArrow']").tResize({
						tSwitch: !1
					}).css({
						backgroundImage: "url(" + i.childConfig[0].tSrc + ")",
						width: 0 == k.width ? 48 : k.width,
						height: 0 == k.height ? 48 : k.height,
						top: k.top,
						left: k.left
					}).show(), a.children(b.appOtherCls).html(""), "customContent" == i.contentType[0] && (a.css({
						backgroundImage: ""
					}), a.children(b.appOtherCls).html(i.customContent[0])), a.children(b.appChildCls + "[data-attachType='jfybOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jfybTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/16986040375660277/T1DMWHFcxiXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028226837030/T1Rvy2FixXXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028310675059/T1gh90FoVbXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028226837030/T1Rvy2FixXXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg"],
				sliderHref: ["#", "#", "#", "#"],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallImgSrcT: ["", "", "", ""],
				smallHoverSrcT: ["", "", "", ""],
				customContent: ["", "", "", ""],
				thumbSet: ["", "", "", ""],
				contentType: ["imgContent", "imgContent", "imgContent", "imgContent"],
				sliderMode: "scrolly",
				shadeMode: "no",
				shadeCount: "20",
				kgdSwitch: "black",
				sliderEffect: "easeBoth",
				sliderTime: "4",
				sliderSwitch: "mouse",
				hrefMode: "_blank",
				sliderAuto: "false",
				kuandukz: "zdy",
				displayMode: "",
				css3Mode: "",
				css3Speed: "trans05s",
				sWidth: "",
				sHeight: "",
				smallSliderMode: "scrollx",
				smallImgCount: "1",
				smallSliderSpace: "0",
				smallShowMode: "",
				smallShowCss: "",
				smallShowSpeed: "trans02s",
				childConfig: [{
					attachID: "",
					autoSize: "yes",
					autoSize1: "yes",
					oSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/T2JItnXtxaXXXXXXXX_!!39767794.png",
					oSrcHover: "",
					tSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T22UebXmNcXXXXXXXX_!!39767794.png",
					tSrcHover: ""
				}]
			}],
			jab: ['<div class="t-app" data-dblType="jab"></div>',
			{
				tTitle: "关注设置",
				tUrl: "attention.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax");
					checkUrl(a.attentionSrc) ? (c.css({
						backgroundImage: "url(" + a.attentionSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.attentionSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), "numberShow" == a.numberControl ? c.children(b.appChildCls).css({
						fontWeight: a.childConfig[0].characterWeight,
						fontSize: a.childConfig[0].characterSize + "px",
						fontFamily: a.childConfig[0].characterFont,
						color: a.childConfig[0].characterColor,
						backgroundColor: RGBToHex(a.childConfig[0].characterBgColor, ""),
						fontStyle: a.childConfig[0].characterStyle || "normal"
					}).show() : c.children(b.appChildCls).hide(), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-child j-app-qswz" data-dblType="jab" data-attachType="jabNumber">999999</div>',
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = b.setChildPos(a, a.children(b.appChildCls)),
						i = c.childConfig[0],
						j = "",
						k = "",
						l = "",
						m = "",
						n = "",
						o = "",
						p = "",
						q = "",
						r = c.imgBgp || "50% 50%",
						s = "",
						t = "",
						u = "",
						v = "abs",
						w = "",
						x = c.tipText || "",
						y = "",
						z = "";
					return "" != x && (y = ' title= "' + x + '"'), "numberShow" == c.numberControl && (z = "ui-brand-btn ", "" != c.attentionID && (t = "j_CollectBrandNum"), i.characterColor = RGBToHex(i.characterColor, ""), "" != i.characterColor && (k = "color:" + i.characterColor + ";"), i.characterBgColor = RGBToHex(i.characterBgColor, ""), "" != i.characterBgColor && (o = "background-color:" + i.characterBgColor + ";"), "" != i.characterFont && (l = "font-family:" + i.characterFont + ";"), "" != i.characterWeight && (m = "font-weight:" + i.characterWeight + ";"), "" != i.characterSize && (n = "font-size:" + b.tParseInt(i.characterSize) + "px;"), "italic" == i.characterStyle && (p = "font-style:" + i.characterStyle + ";"), u = '<em class="' + t + " " + v + '" data-brandid="' + c.attentionID + '" style="visibility:visible;width:' + h.width + "px; height:" + h.height + "px;line-height:" + h.height + "px;left:" + h.left + "px;top:" + h.top + "px;display: block;text-align:center;" + k + l + m + n + o + p + w + ';z-index:99;"></em>'), "" != c.attentionID && (j = "j_CollectBrand"), c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (s = "background-color:" + c.bgColor + ";"), q = checkUrl(c.attentionSrc) ? "background:url(" + c.attentionSrc + ") " + r + " no-repeat;" : b.june.children(".junehtml").length > 0 || b.june.children(b.appCls + "[data-dblType='jzdb']").length > 0 ? "background-image:url(http://a.tbcdn.cn/s.gif);" : "junezxneedcheckembed;", '<a href="#" class="jab ' + z + j + " " + v + " " + c.appID + '" data-appid="' + c.appID + '" data-brandid="' + c.attentionID + '"' + y + ' style="visibility:visible;cursor:pointer;height:' + e + "px;width:" + d + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + q + s + w + '"></a>' + u
				},
				codeImport: function(a, c, d, e) {
					var i, j, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					h.childConfig = [], h.childConfig[0] = {}, h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.attentionSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, "") || "", h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.attentionID = d.attr("data-brandid") || "", h.numberControl = "", d.next("em").attr("data-brandid") == h.attentionID && (h.numberControl = "numberShow", h.childConfig[0].characterSize = d.next("em").css("font-size").replace(/px/g, ""), h.childConfig[0].characterFont = d.next("em").css("font-family").replace(/'/g, ""), h.childConfig[0].characterColor = RGBToHex(d.next("em").css("color")), h.childConfig[0].characterWeight = d.next("em").css("font-weight"), "400" == h.childConfig[0].characterWeight && (h.childConfig[0].characterWeight = "normal"), h.childConfig[0].characterBgColor = RGBToHex(d.next("em").css("background-color"), ""), h.childConfig[0].characterStyle = d.next("em").css("font-style") || "normal", i = b.getChildPos(d, d.next("em"))), j = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(j)), checkUrl(h.attentionSrc) ? a.css({
						backgroundImage: "url(" + h.attentionSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), "numberShow" == h.numberControl ? a.children(b.appChildCls).css({
						fontWeight: h.childConfig[0].characterWeight,
						fontSize: h.childConfig[0].characterSize + "px",
						fontFamily: h.childConfig[0].characterFont,
						color: h.childConfig[0].characterColor,
						backgroundColor: RGBToHex(h.childConfig[0].characterBgColor, ""),
						fontStyle: h.childConfig[0].characterStyle || "normal",
						top: i.top,
						left: i.left,
						width: i.width,
						height: i.height
					}).show() : a.children(b.appChildCls).hide(), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				attentionID: "",
				attentionSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2Zy0KXA8XXXXXXXXX-39767794.gif",
				bgColor: "",
				imgBgp: "50% 50%",
				autoSize: "yes",
				numberControl: "numberShow",
				tipText: "",
				childConfig: [{
					attachID: "",
					characterSize: "12",
					characterColor: "#000000",
					characterBgColor: "",
					characterFont: "宋体",
					characterWeight: "normal",
					characterStyle: ""
				}]
			}],
			jfb: ['<div class="t-app" data-dblType="jfb"></div>',
			{
				tTitle: "分享设置",
				tUrl: "share.php",
				tSubmit: function(a, b) {
					var c = require("scripts/tAjax");
					checkUrl(a.shareSrc) ? (b.css({
						backgroundImage: "url(" + a.shareSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.shareSrc
					}, function(a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : b.css({
						backgroundImage: "none"
					}), b.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(b, RGBToHex(a.bgColor, "")), b.attr("data-config", JSON.stringify(a))
				},
				codeExport: function(a) {
					var r, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.shareUrl.split("?")[1],
						i = !! h && h.split("&"),
						j = c.shareUrl,
						k = c.shareDetail + c.shareUrl,
						l = "webpage",
						m = c.imgBgp || "50% 50%",
						n = c.tipText || "",
						o = "",
						p = "",
						q = "";
					if ("" != n && (o = ' title= "' + n + '"'), "http" != c.shareUrl.substr(0, 4) && (c.shareUrl = "http://" + c.shareUrl), "http://detail" == c.shareUrl.split(".")[0] || "http://item" == c.shareUrl.split(".")[0] || "https://detail" == c.shareUrl.split(".")[0] || "https://item" == c.shareUrl.split(".")[0]) {
						for (r = 0; r < i.length; r++)"id" == i[r].substr(0, 2) && (j = i[r].replace("id=", ""));
						k = c.shareDetail, l = "item"
					} else j = "%7b$shop.id%7d", l = "shop";
					return c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (q = "background-color:" + c.bgColor + ";"), checkUrl(c.shareSrc) && (p = "background:url(" + c.shareSrc + ") " + m + " no-repeat;"), '<div class="jfb abs sns-widget sns-sharebtn sns-sharebtn-default sns-widget-ui ' + c.appID + '" data-appid="' + c.appID + '" data-sharebtn=\'{"title":"' + c.shareTitle + '","key":"' + j + '","comment":"' + k + '","type":"webpage","skinType":1,"client_id":68}\'' + o + '  style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + "px;z-index:10;" + p + q + '"></div>'
				},
				codeImport: function(a, b, c, d) {
					var k, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {},
						h = JSON.parse(c.attr("data-sharebtn")),
						i = h.type,
						j = h.key;
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.tipText = "", c.attr("title") && "" != c.attr("title") && (g.tipText = c.attr("title")), g.shareSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.bgColor = RGBToHex(c.css("background-color"), ""), g.imgBgp = c.css("background-position") || "50% 50%", g.shareUrl = "http://shop" + j + ".taobao.com/", g.shareDetail = h.comment, g.shareTitle = h.title, "item" == i ? g.shareUrl = "http://item.taobao.com/item.htm?id=" + j : "webpage" == i ? (g.shareUrl = j.replace(/\%7b(\S|\s)+\%7d/g, ""), g.shareDetail = h.comment.replace(j, "")) : "shop" == i && (g.shareUrl = j.replace(/\%7b(\S|\s)+\%7d/g, ""), g.shareDetail = h.comment.replace(j, "")), k = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(k)), checkUrl(g.shareSrc) && a.css({
						backgroundImage: "url(" + g.shareSrc + ")"
					}), a.css({
						backgroundPosition: g.imgBgp
					}), submitColor(a, RGBToHex(g.bgColor, "")), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				shareSrc: "http://img.taobao.com/L1/142/405477222/modules/tshop-um-pbl/assets/images/fenxiang.png",
				bgColor: "",
				imgBgp: "50% 50%",
				autoSize: "yes",
				tipText: "",
				shareUrl: "http://detail.tmall.com/item.htm?id=9637613987",
				shareTitle: "很喜欢这个宝贝，超赞的！",
				shareDetail: "很喜欢这个宝贝，超赞的！"
			}],
			jgb: ['<div class="t-app" data-dblType="jgb"></div>',
			{
				tTitle: "购物车设置",
				tUrl: "gwc.php",
				tSubmit: function(a, b) {
					var c = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (b.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : b.css({
						backgroundImage: "none"
					}), b.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(b, RGBToHex(a.bgColor, "")), b.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.imgBgp || "50% 50%",
						i = c.tipText || "",
						j = "",
						k = "",
						l = "";
					return "" != i && (j = ' title= "' + i + '"'), checkUrl(c.pSrc) && (k = "background:url(" + c.pSrc + ") " + h + " no-repeat;"), '<a href="' + c.href + '" data-appid="' + c.appID + '" class="jgb abs J_CartPluginTrigger ' + c.appID + '"' + j + ' style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + k + l + '"></a>'
				},
				codeImport: function(a, b, c, d) {
					var h, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {};
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.tipText = "", c.attr("title") && "" != c.attr("title") && (g.tipText = c.attr("title")), g.pSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.bgColor = RGBToHex(c.css("background-color"), ""), g.imgBgp = c.css("background-position") || "50% 50%", g.href = c.attr("href") || "", h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), checkUrl(g.pSrc) && a.css({
						backgroundImage: "url(" + g.pSrc + ")"
					}), a.css({
						backgroundPosition: g.imgBgp
					}), submitColor(a, RGBToHex(g.bgColor, "")), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2wIebXs0aXXXXXXXX-39767794.png",
				bgColor: "",
				imgBgp: "50% 50%",
				autoSize: "yes",
				tipText: "",
				href: "http://detail.tmall.com/item.htm?id=123456789"
			}],
			jscb: ['<div class="t-app" data-dblType="jscb"></div>',
			{
				tTitle: "收藏设置",
				tUrl: "shoucang.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax"),
						e = a.shopHref || "";
					c.removeClass("j-app-qswz"), "text" == a.scContentType ? (text = a.characterContent, c.css({
						backgroundImage: "none",
						fontSize: b.tParseInt(a.characterSize),
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						color: a.characterColor,
						backgroundColor: RGBToHex(a.characterBgColor, ""),
						fontStyle: a.characterStyle || "normal"
					}), c.addClass("j-app-qswz")) : (text = "", checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, ""))), "" != e ? (d = require("scripts/tAjax"), d.ajaxJson("gsi", {
						url: e,
						random: 1e4 * Math.random()
					}, function(b) {
						a.shopId = b && "yes" == b[0] ? b[1] : "%7b$shop.id%7d", c.html(text).tResize(), c.attr("data-config", JSON.stringify(a))
					})) : (c.html(text).tResize(), c.attr("data-config", JSON.stringify(a)))
				},
				codeExport: function(a) {
					var l, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "",
						i = "",
						j = c.imgBgp || "50% 50%",
						k = "",
						m = "",
						n = "",
						o = c.shopHref || "",
						p = c.tipText || "",
						q = "",
						r = "",
						s = "",
						t = "",
						u = "",
						v = "",
						w = "";
					return "" != p && (q = ' title= "' + p + '"'), "text" == c.scContentType ? (c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (r = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (v = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (s = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (t = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && (u = "font-size:" + b.tParseInt(c.characterSize) + "px;"), "italic" == c.characterStyle && (w = "font-style:" + c.characterStyle + ";"), k = c.characterContent) : (k = "", c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (i = "background-color:" + c.bgColor + ";"), checkUrl(c.pSrc) && (h = "background:url(" + c.pSrc + ") " + j + " no-repeat;")), "1" == c.scType ? (l = c.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), l && l.length > 0 && (m = l[0].replace(/(\?|\&)id\=/g, "")), n = "http://favorite.taobao.com/popup/add_collection.htm?id=" + m + "&itemtype=1&scjjc=1") : "" == o ? (m = "%7b$shop.id%7d", n = "http://favorite.taobao.com/popup/add_collection_2.htm?id=" + m + "&itemtype=0") : (m = "%7b$shop.id%7d", n = "http://favorite.taobao.com/popup/add_collection_2.htm?id=" + (c.shopId || m) + "&itemtype=0"), '<div class="jscb abs ' + c.appID + '" data-appid="' + c.appID + '"' + q + ' style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + h + i + '"><a href="' + n + '" target="_blank" style="display:block;width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + r + s + t + u + v + w + '">' + k + "</a></div>"
				},
				codeImport: function(a, c, d, e) {
					var i, j, l, m, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						k = "";
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), d.children("a").length > 0 && "" != d.children("a").html() ? (h.scContentType = "text", h.characterSize = d.children("a").css("font-size").replace(/px/g, ""), h.characterFont = d.children("a").css("font-family").replace(/'/g, ""), h.characterColor = RGBToHex(d.children("a").css("color")), h.characterBgColor = RGBToHex(d.children("a").css("background-color"), ""), h.characterWeight = d.children("a").css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), h.characterStyle = d.children("a").css("font-style") || "normal", h.characterContent = d.children("a").html(), l = f.characterContent) : (h.scContentType = "img", h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", l = ""), h.shopId = "", i = d.children("a").attr("href"), j = i.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), j && j.length > 0 && (k = j[0].replace(/\?id\=/g, "")), i.indexOf("itemtype=0") >= 0 ? (h.href = "", "" != k && (h.shopHref = "http://shop" + k + ".taobao.com", h.shopId = k), h.scType = "2") : (h.href = "http://detail.tmall.com/item.htm?id=" + k, h.shopHref = "", h.scType = "1"), m = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(m)), "img" == f.scContentType ? (checkUrl(h.pSrc) ? a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, ""))) : (a.css({
						backgroundImage: "none",
						fontSize: b.tParseInt(m.characterSize),
						fontWeight: m.characterWeight,
						fontFamily: m.characterFont,
						color: m.characterColor,
						backgroundColor: RGBToHex(m.characterBgColor, ""),
						fontStyle: m.characterStyle || "normal"
					}), a.addClass("j-app-qswz")), a.html(l).tResize(), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				scContentType: "img",
				characterContent: "加入收藏",
				characterSize: "12",
				characterColor: "#333333",
				characterFont: "宋体",
				characterWeight: "normal",
				characterBgColor: "",
				characterStyle: "",
				pSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2ztV_aVXXXXXnXXXXXXXXXXXX_!!39767794.jpg",
				bgColor: "",
				imgBgp: "50% 50%",
				autoSize: "yes",
				tipText: "",
				scType: "1",
				href: "http://detail.tmall.com/item.htm?id=123456789",
				shopHref: "",
				shopId: ""
			}],
			jxhb: ['<div class="t-app" data-dblType="jxhb"></div>',
			{
				tTitle: "喜欢设置",
				tUrl: "xihuan.php",
				tSubmit: function(a, b) {
					var c = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (b.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : b.css({
						backgroundImage: "none"
					}), b.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "";
					return checkUrl(c.pSrc) && (h = "background:url(" + c.pSrc + ") center center no-repeat;"), '<a href="' + c.href + '" class="jgb abs J_CartPluginTrigger" style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + h + '"></a>'
				},
				codeImport: function(a, b, c, d) {
					var h, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {};
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.pSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.href = c.attr("href") || "", h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), checkUrl(g.pSrc) && a.css({
						backgroundImage: "url(" + g.pSrc + ")"
					}), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2wIebXs0aXXXXXXXX-39767794.png",
				autoSize: "yes",
				href: "http://detail.tmall.com/item.htm?id=123456789"
			}],
			jeb: ['<div class="t-app" data-dblType="jeb"></div>',
			{
				tTitle: "二维码设置",
				tUrl: "ewm.php",
				tSubmit: function(a, b) {
					var c = require("scripts/tAjax");
					c.ajaxText("getewm.php", {
						ewmUrl: a.ewmUrl,
						ewmSize: a.ewmSize,
						ewmType: a.ewmType,
						ewmShop: a.ewmShop
					}, function(c) {
						c && "" != c && (a.ewmSrc = c), b.css({
							width: a.ewmSize,
							height: a.ewmSize,
							backgroundImage: "url(" + a.ewmSrc.replace(/\%7b(\S|\s)+\%7d/g, "1") + ")"
						}), b.attr("data-config", JSON.stringify(a))
					}), b.attr("data-config", JSON.stringify(a))
				},
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.tipText || "",
						i = "",
						j = "";
					return "" != h && (i = ' title= "' + h + '"'), checkUrl(c.ewmSrc) && (j = "background:url(" + c.ewmSrc + ") center center no-repeat;"), '<div class="jeb abs ' + c.appID + '" data-appid="' + c.appID + '" data-url="' + c.ewmUrl + '"data-urlType="' + c.ewmType + '"' + i + ' style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + "px;z-index:10;" + j + '"></div>'
				},
				codeImport: function(a, b, c, d) {
					var i, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {};
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.tipText = "", c.attr("title") && "" != c.attr("title") && (g.tipText = c.attr("title")), g.ewmSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.ewmUrl = c.attr("data-url"), g.ewmSize = c.width(), g.ewmType = c.attr("data-urlType") || "1", g.ewmSrc.indexOf("type=cs") >= 0 && (g.ewmShop = "2"), i = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(i)), a.css({
						backgroundImage: "url(" + g.ewmSrc.replace(/\%7b(\S|\s)+\%7d/g, "1") + ")"
					}), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				ewmSrc: "",
				ewmType: "1",
				ewmShop: "1",
				tipText: "",
				ewmUrl: "http://detail.tmall.com//item.htm?id=22402460472",
				ewmSize: "90"
			}],
			jtsb: ['<div class="t-app" data-dblType="jtsb"></div>',
			{
				tTitle: "滚动文字设置",
				tUrl: "textscroll.php",
				tSubmit: function(a, c) {

					var d, e, f, g, h;
					c.html("").html('<marquee class="t-app-other" scrollamount="4" align="left" behavior="' + a.characterScrollMode + '" style="position:absolute;">请双击设置文字内容</marquee>').tResize(), d = "", e = "", f = c.width(), g = c.height(), c.removeClass("j-app-qswz"), "alternate" != a.characterScrollMode && ("2" == a.characterDirectionPosition ? ("right" == a.characterDirection && (e = "left: " + f + "px;"), "down" == a.characterDirection && (e = "top: " + g + "px;")) : ("left" == a.characterDirection && (e = "right: " + f + "px;"), "up" == a.characterDirection && (e = "bottom: " + g + "px;"))), h = "", a.characterLineThrough && "" != a.characterLineThrough && (h = a.characterLineThrough), a.characterLineUnder && "" != a.characterLineUnder && ("" == h ? h = a.characterLineUnder : h += " " + a.characterLineUnder), ("" != a.characterContent || "" != a.customContent) && (d = '<div style="position:relative;display:inline-block;white-space:nowrap;word-break:break-all;' + e + '">', c.children(b.appOtherCls).attr({
						direction: a.characterDirection,
						scrollamount: a.characterSpeed,
						scrolldelay: a.characterEffect
					}).html(d + a.characterContent + "</div>"), "text" == a.characterMode && c.addClass("j-app-qswz"), "img" == a.characterMode && c.children(b.appOtherCls).html(d + '<img src="' + a.characterContent + '" />' + "</div>"), "custom" == a.characterMode && c.children(b.appOtherCls).html(d + a.customContent + "</div>"), c.children(b.appOtherCls).children("div").css({
						fontSize: b.tParseInt(a.characterSize),
						lineHeight: b.tParseInt(a.characterSize) + 10 + "px",
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						color: a.characterColor,
						backgroundColor: RGBToHex(a.characterBgColor, ""),
						fontStyle: a.characterStyle || "normal"
					}), "" != h && c.children(b.appOtherCls).children("div").css("text-decoration", h)), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<marquee class="t-app-other" scrollamount="4" align="left">请双击设置文字内容</marquee>',
				codeExport: function(a) {
					var y, z, A, B, C, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.characterContent,
						i = "",
						j = "",
						k = "",
						l = "",
						m = "",
						n = "",
						o = "",
						p = "",
						q = "",
						r = "",
						s = "",
						t = "",
						u = "",
						v = "",
						w = !1,
						x = "";
					return "img" == c.characterMode && (h = '<img src="' + c.characterContent + '" />'), "custom" == c.characterMode && (h = c.customContent), c.characterLineThrough && "" != c.characterLineThrough && (m = "text-decoration:" + c.characterLineThrough), c.characterLineUnder && "" != c.characterLineUnder ? "" == m ? m = "text-decoration:" + c.characterLineUnder + ";" : m += " " + c.characterLineUnder + ";" : m += ";", y = a.children(b.appOtherCls).children("div"), z = y.width(), A = y.height(), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (n = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (r = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (o = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (p = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && (q = "font-size:" + b.tParseInt(c.characterSize) + "px;"), "italic" == c.characterStyle && (s = "font-style:" + c.characterStyle + ";"), i = checkUrl(c.href) && "custom" != c.characterMode ? '<a style="' + n + o + p + q + r + s + m + '" href="' + c.href + '" target="' + c.hrefMode + '">' + h + "</a>" : h, B = "rel", ("up" == c.characterDirection || "down" == c.characterDirection) && (B = "abs"), "alternate" != c.characterScrollMode && ("2" == c.characterDirectionPosition ? ("left" == c.characterDirection && (t = "", u = "top:-" + A + "px;left:" + z + "px;", w = !0), "right" == c.characterDirection && (t = "left:" + z + "px;", u = "top:-" + A + "px;", v = "top:-" + 2 * A + "px;right:" + z + "px;"), "down" == c.characterDirection && (t = "top: " + e + "px;", u = "top:-" + (A - e) + "px;", v = "top:-" + (2 * A - e) + "px;"), "up" == c.characterDirection && (t = "top: " + e + "px;", u = "top:-" + (A - e) + "px;", v = "top:-" + (2 * A - e) + "px;")) : ("left" == c.characterDirection && (t = "right:" + z + "px;", u = "top:-" + A + "px;", v = "top:-" + 2 * A + "px;left:" + z + "px;"), "right" == c.characterDirection && (t = "", u = "top:-" + A + "px;right:" + z + "px;", w = !0), "up" == c.characterDirection && (u = "top: 0;", v = "top: " + A + "px;"), "down" == c.characterDirection && (t = "", u = "top:-" + A + "px;"))), j = '<div class="rel scrollfm" data-dire="' + c.characterDirectionPosition + '" style="width:' + z + "px;height:" + A + "px;line-height:" + A + "px;white-space:nowrap;word-break:break-all;" + t + n + o + p + q + r + s + m + '">' + i + "</div>", "scroll" == c.characterScrollMode && (k = '<div class="' + B + ' scrollfm1" style="width:' + z + "px;height:" + A + "px;line-height:" + A + "px;white-space:nowrap;word-break:break-all;" + u + n + o + p + q + r + s + m + '">' + i + "</div>", w || (l = '<div class="' + B + ' scrollfm2" style="width:' + z + "px;height:" + A + "px;line-height:" + A + "px;white-space:nowrap;word-break:break-all;" + v + n + o + p + q + r + s + m + '">' + i + "</div>")), "up" != c.characterDirection && "down" != c.characterDirection || "alternate" != c.characterScrollMode ? x = '<div class="jtsb abs ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + 'px;z-index:10;overflow:hidden;" data-mode="' + c.characterMode + '"><marquee style="width:100%;height:100%;" scrollamount="' + c.characterSpeed + '" scrolldelay="' + c.characterEffect + '" direction="' + c.characterDirection + '" behavior="' + c.characterScrollMode + '"><div class="rel scrollfm" style="width:' + z + "px;height:" + A + "px;line-height:" + A + 'px;">' + j + k + l + "</div></marquee></div>" : (C = "", c.characterSpeed > 3 && 3 == c.characterSpeed, "down" == c.characterDirection && (C = ",'switchTo':1"), x = '<div class="jtsb abs ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + 'px;z-index:10;overflow:visible;" data-mode="' + c.characterMode + '">' + '<div class="udma J_TWidget" data-sDr="' + c.characterDirection + ";" + c.characterSpeed + "\" data-widget-config=\"{'effect':'scrolly','easing':'easeNone','contentCls':'content','navCls':'nav','circular':false,'duration':" + c.characterSpeed + ",'interval':" + c.characterSpeed + ",'pauseOnHover':false,'autoplay': true,'viewSize': [" + (e - A) + "]" + C + '}" data-widget-type="Slide" style="position:relative;width:' + d + "px;height:" + e + 'px;">' + '<ul class="content" style="">' + '<li style="width:' + d + "px;height:" + (e - A) + 'px;display:block;">&nbsp;</li>' + '<li class="udcon" style="width:' + d + 'px;display:block;">' + j + "</li>" + "</ul>" + '<div class="nav" style="display:none;">&nbsp;</div>' + "</div>" + "</div>"), x
				},
				codeImport: function(a, c, d, e) {
					var j, k, l, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.children("marquee"),
						i = {};
					i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children("marquee").children("div.scrollfm").length > 0 && (h = d.children("marquee").children("div.scrollfm"), i.characterDirectionPosition = h.attr("data-dire") || "1"), d.children(".udma").length > 0 ? (h = d.find(".udcon").children("div.scrollfm"), i.characterDirectionPosition = h.attr("data-dire") || "1", j = d.children(".udma").attr("data-sDr") || "up;3", k = j.split(";"), i.characterSpeed = k[1], i.characterScrollMode = "alternate", i.characterDirection = k[0], i.characterEffect = "0") : (i.characterSpeed = d.children("marquee").attr("scrollamount"), i.characterEffect = d.children("marquee").attr("scrolldelay"), i.characterScrollMode = d.children("marquee").attr("behavior"), i.characterDirection = d.children("marquee").attr("direction")), h.children("div.scrollfm").length > 0 && (h = h.children("div.scrollfm")), i.characterSize = h.css("font-size").replace(/px/g, ""), i.characterFont = h.css("font-family").replace(/'/g, ""), i.characterColor = RGBToHex(h.css("color")), i.characterBgColor = RGBToHex(h.css("background-color"), ""), i.characterWeight = h.css("font-weight"), "400" == i.characterWeight && (i.characterWeight = "normal"), i.characterStyle = h.css("font-style") || "normal", i.characterLineThrough = "", i.characterLineUnder = "", i.characterContent = h.html(), i.characterMode = "text", h.css("text-decoration").indexOf("line-through") >= 0 && (i.characterLineThrough = "line-through"), h.css("text-decoration").indexOf("underline") >= 0 && (i.characterLineUnder = "underline"), "undefined" != typeof d.find("a").attr("href") && (i.href = d.find("a").attr("href"), i.hrefMode = d.find("a").attr("target"), i.characterContent = d.find("a").html()), i.characterContent.indexOf("<img") >= 0 && (i.characterMode = "img", i.characterContent = d.find("img").attr("src")), "custom" == d.attr("data-mode") && (i.characterContent = "", i.characterMode = "custom", i.customContent = h.html()), "text" == f.characterMode && "" != i.characterContent && a.addClass("j-app-qswz"), l = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(l)), b.appConfig["jtsb"][1].tSubmit(l, a), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				href: "#",
				hrefMode: "_blank",
				characterMode: "text",
				characterContent: "",
				customContent: "",
				characterSize: "20",
				characterFont: "宋体",
				characterColor: "#990000",
				characterBgColor: "",
				characterWeight: "normal",
				characterStyle: "",
				characterLineUnder: "",
				characterLineThrough: "",
				characterSpeed: "4",
				characterEffect: "0",
				characterScrollMode: "scroll",
				characterDirection: "left",
				characterDirectionPosition: "1"
			}],
			jpb: ['<div class="t-app" data-dblType="jpb"></div>',
			{
				tTitle: "弹出层设置",
				tUrl: "popup.php",
				tSubmit: function(a, b) {
					b.attr("data-setAppID", a.appIDSelect), b.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						h = (a.width(), a.height(), b.tParseInt(a.css("top")), b.tParseInt(a.css("left")), c.css3Speed || "0.1s"),
						i = c.css3Mode || "",
						j = "",
						k = "",
						l = "",
						m = "",
						n = "",
						o = "ease-in";
					return "" != i && ("" != c.css3Bezier && ("bs1" == c.css3Bezier && (o = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == c.css3Bezier && (o = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == c.css3Bezier && (o = "cubic-bezier(0,0,1,0.1)"), "bq1" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,1)")), n = "-webkit-transition: " + h + " " + o + ";" + "-moz-transition: " + h + " " + o + ";" + "-o-transition: " + h + " " + o + ";" + "transition: " + h + " " + o + ";", "effect_w" == i ? (j = "c-1", $("#jstForPopup").html(c.customHtml), k = "width:" + $("#jstForPopup").outerWidth() + "px;") : "effect_h" == i ? (j = "d-1", $("#jstForPopup").html(c.customHtml), k = "height:" + $("#jstForPopup").outerHeight() + "px;") : "effect_wh" == i && (j = "c-1 d-1", $("#jstForPopup").html(c.customHtml), k = "width:" + $("#jstForPopup").outerWidth() + "px;height:" + $("#jstForPopup").outerHeight() + "px;"), l = '<div class="pope e-1" data-e="' + i + ";" + c.css3Bezier + ";" + h + '" style="' + k + '"><div class="' + j + ' outbox" style="' + n + '"><div class="rel" style="width:100%;height:100%;">', m = "</div></div></div>"), !c.spaceX && (c.spaceX = 0), !c.spaceY && (c.spaceY = 0), "" == c.spaceX && (c.spaceX = 0), "" == c.spaceY && (c.spaceY = 0), '<div class="J_TWidget jpb abs ks-popup-hidden" data-widget-type="Popup" data-widget-config="{\'trigger\':\'.' + c.appIDSelect + "','align':{'node':'." + c.appIDAlignSelect + "','offset':[" + c.spaceX + "," + c.spaceY + "],'points':[" + c.popupPosition.replace(/"/g, "'") + ']}}" style="z-index:99;display:none;">' + l + c.customHtml + m + "</div>"
				},
				codeImport: function(a, b, c, d) {
					var i, j, k, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = JSON.parse(c.attr("data-widget-config").replace(/\'/g, '"')),
						h = {};
					h.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), h.appIDSelect = g.trigger.replace(/\./g, ""), h.appIDAlignSelect = g.align.node.replace(/\./g, ""), h.popupPosition = "'" + g.align.points[0] + "','" + g.align.points[1] + "'", h.spaceX = g.align.offset[0], h.spaceY = g.align.offset[1], h.customHtml = c.html(), c.children(".pope").length > 0 && (h.customHtml = c.children(".pope").children(".outbox").children("div").html(), i = c.children(".pope").attr("data-e") || ";;0.5s", j = i.split(";"), h.css3Mode = j[0], h.css3Bezier = j[1], h.css3Speed = j[2]), k = $.extend(!0, e, h), a.attr("data-config", JSON.stringify(k)), a.attr("appID", h.appID), a.attr("data-setAppID", h.appIDSelect), d(f, h.appID)
				}
			}, {
				appID: "",
				appIDSelect: "",
				appIDAlignSelect: "",
				popupPosition: "'tl','tl'",
				css3Speed: "0.5s",
				css3Bezier: "",
				css3Mode: "",
				spaceX: "0",
				spaceY: "0",
				customHtml: ""
			}],
			jacb: ['<div class="t-app" data-dblType="jacb"></div>',
			{
				tTitle: "可关闭层设置",
				tUrl: "allowclose.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax"),
						e = a.childConfig[0].showBtnSrc,
						f = a.childConfig[0].hideBtnSrc,
						g = c.children(b.appChildCls + ":eq(0)"),
						h = c.children(b.appChildCls + ":eq(1)");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), checkUrl(e) ? (g.css({
						backgroundImage: "url(" + e + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: e
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && g.width(b), c && g.height(c)
					})) : g.css({
						backgroundImage: "none"
					}), checkUrl(f) ? (h.css({
						backgroundImage: "url(" + f + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: f
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && h.width(b), c && h.height(c)
					})) : h.css({
						backgroundImage: "none"
					}), "ptlink" == a.alclinkMode ? c.children(b.appOtherCls + ":eq(0)").html("") : c.children(b.appOtherCls + ":eq(0)").html(a.customHtml), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div><div class="t-app-child" data-dblType="jacb" data-attachType="jacbBtn"></div><div class="t-app-child" data-dblType="jacb" data-attachType="jacbBtn"></div>',
				codeExport: function(a) {
					var k, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = b.setChildPos(a, a.children(b.appChildCls + ":eq(0)"), !0),
						i = b.setChildPos(a, a.children(b.appChildCls + ":eq(1)"), !0),
						j = c.childConfig[0],
						l = 1,
						m = c.imgBgp || "50% 50%",
						n = checkUrl(j.hideBtnSrc) ? "background:url(" + j.hideBtnSrc + ");" : "",
						o = checkUrl(j.showBtnSrc) ? "background:url(" + j.showBtnSrc + ");" : "",
						p = checkUrl(c.pSrc) ? "background:url(" + c.pSrc + ") " + m + " no-repeat;" : "",
						q = "",
						r = "display:none;",
						s = c.tipText || "",
						t = "",
						u = j.tipText || "",
						v = "",
						w = '<li class="abs hidebtn" style="left:' + i.left + "px;top:" + i.top + "px;width:" + i.width + "px;height:" + i.height + "px;" + n + '" title="点击展开"></li><li class="abs hidden" style="left:' + h.left + "px;top:" + h.top + "px;width:" + h.width + "px;height:" + h.height + "px;" + o + '"></li>',
						x = "";
					return "" != s && (t = ' title= "' + s + '"'), "" != u && (v = ' title= "' + u + '"'), "display" == c.acMode && (l = 0, r = "", w = '<li class="abs hidebtn hidden" style="left:' + i.left + "px;top:" + i.top + "px;width:" + i.width + "px;height:" + i.height + "px;" + n + '" title="点击展开"></li><li class="abs" style="left:' + h.left + "px;top:" + h.top + "px;width:" + h.width + "px;height:" + h.height + "px;" + o + '"></li>'), "d" != c.acdisplayMode && (f = 0, g = 0), c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (q = "background-color:" + c.bgColor + ";"), x = '<div class="bd bdhtml abs" style="width:' + d + "px;height:" + e + "px;" + p + q + r + 'z-index:10;">' + c.customHtml + "</div>", "ptlink" == c.alclinkMode && (x = '<div class="bd" style="width:' + d + "px;height:" + e + "px;" + p + q + r + '"><a href="' + c.href + '" target="' + c.hrefMode + '" style="display:block;width:' + d + "px;height:" + e + 'px;"></a></div>'), k = '<div class="jacb abs J_TWidget ' + c.appID + '" data-appid="' + c.appID + '"' + t + ' style="top:' + f + "px;left:" + g + "px;z-index:10;\" data-widget-type=\"Tabs\" data-widget-config=\"{'triggerType': 'click','activeTriggerCls':'hidden','activeIndex':" + l + '}"><ul class="ks-switchable-nav abs" style="left:0px;top:0px;z-index:2;"' + v + ">" + w + '</ul><div class="ks-switchable-content abs" style="z-index:1;">' + x + '<div class="hide"></div></div></div>', "l" == c.acdisplayMode ? k = "<div class=\"J_TWidget\" data-widget-config=\"{'duration':0.1,'activeTriggerCls':'.tml-mask-b2b','interval':0.1,'effect':'scrollx','activeIndex':2,'navCls':'nav_zhicheng','contentCls':'content_zhicheng','autoplay':true}\" data-widget-type=\"Carousel\" style=\"position:relative;\"><ul class=\"content_zhicheng\" style=\"display: none; width: 999999px; left: 0px; position: absolute; \"><li  style=\"width: 950px; height: 10px; display: block; float: left; \">&nbsp;</li></ul><ul class=\"nav_zhicheng\"><div class=\"tm-mcBodyMask mui-mbar tml-mask-b2b\" style=\"left:auto;right:auto;visibility:visible;top:280px;right:50%;margin-right:520px;opacity:1;z-index:99;width:" + d + "px;height:" + e + 'px;">' + k + "</div></ul></div>" : "r" == c.acdisplayMode && (k = "<div class=\"J_TWidget\" data-widget-config=\"{'duration':0.1,'activeTriggerCls':'.tml-mask-b2b','interval':0.1,'effect':'scrollx','activeIndex':2,'navCls':'nav_zhicheng','contentCls':'content_zhicheng','autoplay':true}\" data-widget-type=\"Carousel\" style=\"position:relative;z-index:10;\"><ul class=\"content_zhicheng\" style=\"display: none; width: 999999px; left: 0px; position: absolute; \"><li  style=\"width: 950px; height: 10px; display: block; float: left; \">&nbsp;</li></ul><ul class=\"nav_zhicheng\"><div class=\"tm-mcBodyMask mui-mbar tml-mask-b2b\" style=\"left:auto;right:auto;visibility:visible;top:280px;left:50%;margin-left:520px;opacity:1;z-index:99;width:" + d + "px;height:" + e + 'px;">' + k + "</div></ul></div>"), k
				},
				codeImport: function(a, c, d, e) {
					var k, l, n, o, p, q, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = d.find(".ks-switchable-nav li:eq(0)"),
						j = d.find(".ks-switchable-nav li:eq(1)");
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.childConfig = [], h.childConfig[0] = {}, h.childConfig[0].tipText = "", d.find(".ks-switchable-nav").attr("title") && "" != d.find(".ks-switchable-nav").attr("title") && (h.childConfig[0].tipText = d.find(".ks-switchable-nav").attr("title")), h.pSrc = d.find(".bd").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.find(".bd").css("background-position") || "50% 50%", h.href = d.find(".bd a").attr("href") || "", h.hrefMode = d.find(".bd a").attr("target"), h.alclinkMode = "ptlink", h.customHtml = "", d.find(".bd").hasClass("bdhtml") && (h.alclinkMode = "gzlink", h.customHtml = d.find(".bdhtml").html()), h.childConfig[0].showBtnSrc = j.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.childConfig[0].hideBtnSrc = i.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.acdisplayMode = d.attr("tFilterMode") || "d", o = h.childConfig[0].showBtnSrc, p = h.childConfig[0].hideBtnSrc, n = j, j.hasClass("hidden") && (h.acMode = "hide", n = i), k = {
						width: j.width(),
						height: j.height(),
						left: b.tParseInt(j.css("left")),
						top: b.tParseInt(j.css("top"))
					}, l = {
						width: i.width(),
						height: i.height(),
						left: b.tParseInt(i.css("left")),
						top: b.tParseInt(i.css("top"))
					}, a.width(d.find(".bd").width()), a.height(d.find(".bd").height()), q = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(q)), checkUrl(h.pSrc) ? a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), "d" != h.acdisplayMode && a.css({
						width: d.find(".jacb").find(".bd").width(),
						height: d.find(".jacb").find(".bd").height()
					}), checkUrl(o) ? a.children(b.appChildCls + ":eq(0)").css({
						backgroundImage: "url(" + o + ")"
					}) : a.children(b.appChildCls + ":eq(0)").css({
						backgroundImage: "none"
					}), checkUrl(p) ? a.children(b.appChildCls + ":eq(1)").css({
						backgroundImage: "url(" + p + ")"
					}) : a.children(b.appChildCls + ":eq(1)").css({
						backgroundImage: "none"
					}), "ptlink" == h.alclinkMode ? a.children(b.appOtherCls + ":eq(0)").html("") : a.children(b.appOtherCls + ":eq(0)").html(h.customHtml), a.children(b.appChildCls + ":eq(0)").css({
						top: k.top,
						left: k.left,
						width: k.width,
						height: k.height
					}), a.children(b.appChildCls + ":eq(1)").css({
						top: l.top,
						left: l.left,
						width: l.width,
						height: l.height
					}), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				pSrc: "http://img03.taobaocdn.com/imgextra/i3/39767794/T2vu7QXp8aXXXXXXXX-39767794.png",
				imgBgp: "50% 50%",
				autoSize: "yes",
				acMode: "display",
				acdisplayMode: "d",
				alclinkMode: "ptlink",
				href: "#",
				hrefMode: "_self",
				customHtml: "",
				tipText: "",
				childConfig: [{
					attachID: "",
					showBtnSrc: "http://gtms02.alicdn.com/tps/i2/T1AnX0FsFXXXcSmcnf-38-38.png",
					hideBtnSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/T2BnCsXGXXXXXXXXXX-39767794.png",
					tipText: "",
					autoSize: "yes",
					autoSize1: "yes"
				}]
			}],
			jkgb: ['<div class="t-app" data-dblType="jkgb"></div>',
			{
				tTitle: "开关灯设置",
				tUrl: "kgd.php",
				tSubmit: function(a, c) {
					var f, g, d = require("scripts/tAjax"),
						e = a.childConfig;
					for (f in e) g = c.children(b.appChildCls + "[data-attachType='jkgbChild']:eq(" + f + ")"), e[f].contentMode && "customContent" != e[f].contentMode ? (checkUrl(e[f].pSrc) ? (g.css({
						backgroundImage: "url(" + e[f].pSrc + ")"
					}), "yes" == e[f].autoSize &&
					function(a) {
						d.ajaxJsonForGis({
							img: e[a].pSrc
						}, function(d) {
							var e = d[0],
								f = d[1];
							e && c.children(b.appChildCls + "[data-attachType='jkgbChild']:eq(" + a + ")").width(e), f && c.children(b.appChildCls + "[data-attachType='jkgbChild']:eq(" + a + ")").height(f), a = void 0
						})
					}(f)) : g.css({
						backgroundImage: "none"
					}), g.css({
						backgroundPosition: e[f].imgBgp || "50% 50%"
					}), submitColor(g, RGBToHex(e[f].bgColor, ""))) : (g.css({
						background: "none"
					}), g.html(e[f].customContent).tResize()), b.setPopupContent(a.childConfig[f], !0, a.appID);
					c.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				tDynamic: '<div class="t-app-child" data-dblType="jkgb" data-attachType="jkgbChild"></div>',
				tDynamicConfig: {
					attachID: "",
					contentMode: "imgContent",
					pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2O_GuXFlaXXXXXXXX-39767794.png",
					customContent: "",
					overflowMode: "hidden",
					bgColor: "",
					imgBgp: "50% 50%",
					oppoSrc: "",
					autoSize: "yes",
					href: "#",
					tipText: "",
					mongoliaMode: "color",
					mongoliaColor: "#000",
					mongoliaSrc: "",
					hrefMode: "_blank",
					popupConfig: {
						pSwitch: "no",
						popupPosition: "'tr','tl'",
						spaceX: "0",
						spaceY: "0",
						css3Mode: "",
						css3Bezier: "",
						css3Speed: "0.5s",
						popupHtml: ""
					}
				},
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.oppoSpeed,
						i = "",
						j = "",
						k = c.oppoEffect,
						l = "",
						m = c.oppoSpeed || "0s",
						n = "";
					return "" != m && (m = "trans01s" == m ? "0.1s" : "trans02s" == m ? "0.2s" : "trans05s" == m ? "0.5s" : parseFloat(m.replace("trans", "").replace("s", ""), 10) + "s", n = "-webkit-transition: " + m + " ease-in;" + "-moz-transition: " + m + " ease-in;" + "-o-transition: " + m + " ease-in;" + "transition: " + m + " ease-in;"), c.oppoEffect && "none" != c.oppoEffect && "" != c.oppoEffect || (c.oppoSpeed = ""), "june-box-fadein" == c.oppoEffect && (j = "display:block;", k = "", l = "june-box-fadein"), a.children(b.appChildCls).each(function(d) {
						var y, z, A, B, f = $(this),
							g = "",
							h = "",
							m = "",
							o = "",
							p = "",
							q = b.setChildPos(a, f, !0),
							r = c.childConfig[d],
							s = "",
							t = "",
							u = r.contentMode || "imgContent",
							v = r.mongoliaMode || "color",
							w = r.tipText || "",
							x = "";
						imgBgp = r.imgBgp || "50% 50%", "" != w && (x = ' title= "' + w + '"'), "color" == v ? (r.mongoliaColor = RGBToHex(r.mongoliaColor, "#000"), "" != r.mongoliaColor && (s = "background-color:" + r.mongoliaColor + ";")) : checkUrl(r.mongoliaSrc) && (t = "background:url(" + r.mongoliaSrc + ") 50% 50% no-repeat;"), "customContent" != u ? (y = "", z = "", "june-box-fadein" == c.oppoEffect && (y = '<div class="jspb" style="width:' + q.width + "px;height:" + q.height + 'px;">', z = "</div>"), ("" == r.oppoSrc || r.oppoSrc == r.pSrc) && (o = "display:none;"), r.bgColor = RGBToHex(r.bgColor, ""), "" != r.bgColor && (h = "background-color:" + r.bgColor + ";"), checkUrl(r.pSrc) && (g = "background:url(" + r.pSrc + ") " + imgBgp + " no-repeat;"), checkUrl(r.oppoSrc) && (m = "background:url(" + r.oppoSrc + ") " + imgBgp + " no-repeat;", p = 'src="' + r.oppoSrc + '"'), i += '<div class="b-box abs ' + r.attachID + '" data-appid="' + r.attachID + '" data-m="' + v + '"' + x + ' style="left:' + q.left + "px;top:" + q.top + "px;" + s + t + '"><a target="' + r.hrefMode + '" href="' + r.href + '" class="pic imghover ' + k + '" style="' + g + h + "width:" + q.width + "px;height:" + q.height + "px;display:block;" + n + '">' + y + '<img class="' + c.oppoSpeed + " " + l + '" style="' + j + "width:" + q.width + "px;height:" + q.height + "px;" + m + o + '" ' + p + " />" + z + "</a></div>") : (!r.overflowMode && "hidden" == r.overflowMode, A = "", B = "overflow:hidden;", "visibleX" == r.overflowMode ? (A = " u-a", B = "") : "visible" == r.overflowMode && (A = " j-zdv", B = "overflow:visible;"), i += '<div class="b-box abs ' + r.attachID + " " + A + '" data-appid="' + r.attachID + '" data-m="' + v + '"' + x + ' style="left:' + q.left + "px;top:" + q.top + "px;" + s + t + B + '"><div class="pic imghover" style="width:' + q.width + "px;height:" + q.height + "px;display:block;" + n + '">' + r.customContent + "</div></div>")
					}), '<div class="jkgb abs june-switch ' + c.appID + '" data-appid="' + c.appID + '" data-junezxset="' + c.oppoEffect + ";" + h + '" style="width:' + d + "px;height:" + e + "px;left:" + g + "px;top:" + f + 'px;z-index:10;">' + i + "</div>"
				},
				codeImport: function(a) {
					var k, l, m, n, o, p, q, r, c = require("scripts/childKaiGuanDengTuPian"),
						d = require("scripts/appManage"),
						e = a.find(".pic").length,
						f = a.width(),
						g = a.height(),
						h = b.tParseInt(a.css("top")),
						i = b.tParseInt(a.css("left")),
						j = [];
					for (tempObj = {}, tempObj.childConfig = [], k = a.attr("data-junezxset"), k && (j = k.split(";"), tempObj.oppoEffect = j[0], tempObj.oppoSpeed = j[1]), a.attr("data-appid") ? tempObj.appID = a.attr("data-appid") : b.setAppID(tempObj), $('<div class="t-app" data-dblType="jkgb"></div>').appendTo(b.june).tResize().css({
						left: i,
						top: h,
						width: f,
						height: g
					}).attr("data-config", JSON.stringify(tempObj)).attr("appID", tempObj.appID), l = $(b.appCls + "[appID='" + tempObj.appID + "']"), m = 0; e > m; m++) n = {}, o = 0, p = 0, q = a.find(".b-box").eq(m), r = a.find(".pic").eq(m), q.length > 0 && (o = b.tParseInt(q.css("left")), p = b.tParseInt(q.css("top"))), r.length > 0 && (n.tipText = "", q.attr("title") && "" != q.attr("title") && (n.tipText = q.attr("title")), n.contentMode = "imgContent", n.customContent = "", n.attachID = q.attr("data-appid") || "", n.pSrc = r.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.bgColor = RGBToHex(r.css("background-color"), ""), n.imgBgp = r.css("background-position"), n.href = r.attr("href") || "", n.hrefMode = r.attr("target") || "", n.width = r.width(), n.height = r.height(), n.mongoliaMode = q.attr("data-m") || "color", n.mongoliaColor = RGBToHex(q.css("background-color")), n.mongoliaSrc = q.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.autoSize = "no", n.popupConfig = {
						pSwitch: "no",
						popupPosition: "'tr','tl'",
						spaceX: "0",
						spaceY: "0",
						css3Mode: "",
						css3Bezier: "",
						css3Speed: "0.5s",
						popupHtml: ""
					}, r.find("img").length > 0 && (n.oppoSrc = r.find("img").attr("src") || ""), r.is("div") && (n.contentMode = "customContent", n.customContent = r.html(), n.overflowMode = q.css("overflow"), "visible" != n.overflowMode && (n.overflowMode = "hidden"), q.hasClass("u-a") && (n.overflowMode = "visibleX"), q.hasClass("j-zdv") && (n.overflowMode = "visible"))), function(a) {
						c.createAuto("jkgb", l, o, p, a)
					}(n);
					d.callback("jkgb", tempObj.appID)
				}
			}, {
				appID: "",
				oppoEffect: "june-box-fadein",
				oppoSpeed: "trans05s",
				childConfig: []
			}],
			jzzb: ['<div class="t-app" data-dblType="jzzb"></div>',
			{
				tTitle: "遮罩层设置",
				tUrl: "zzc.php",
				tSubmit: function(a, c) {
					var d = require("scripts/tAjax"),
						e = a.childConfig[0].zzcAttentionSrc,
						f = c.children(b.appChildCls + "[data-attachType='jzzbAttention']"),
						g = c.children(b.appChildCls + "[data-attachType='jzzbCountNumber']"),
						h = c.children(b.appChildCls + "[data-attachType='jzzbCountText']"),
						i = c.children(b.appOtherCls + ":eq(1)");
					"imgContent" == a.zzcMode ? checkUrl(a.zzcSrc) ? (c.css({
						backgroundImage: "url(" + a.zzcSrc + ")"
					}), i.css({
						backgroundImage: "url(" + a.zzcSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.zzcSrc
					}, function(a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : (c.css({
						backgroundImage: "none"
					}), i.css({
						backgroundImage: "none"
					})) : (i.html(a.zzcCustomContent), c.css({
						backgroundImage: "none"
					}), i.css({
						backgroundImage: "none"
					})), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), i.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), submitColor(i, RGBToHex(a.bgColor, "")), "yes" == a.countSwitch ? (g.html(b.appMongolia + a.countSeconds).tResize({
						tSwitch: !1
					}).css({
						fontSize: b.tParseInt(a.childConfig[1].characterSize),
						lineHeight: b.tParseInt(a.childConfig[1].characterSize) + 10 + "px",
						fontWeight: a.childConfig[1].characterWeight,
						fontFamily: a.childConfig[1].characterFont,
						color: a.childConfig[1].characterColor,
						backgroundColor: RGBToHex(a.childConfig[1].characterBgColor, ""),
						fontStyle: a.childConfig[1].characterStyle || "normal",
						height: b.tParseInt(a.childConfig[1].characterSize) + 10 + "px",
						whiteSpace: "nowrap",
						width: "auto"
					}).show(), h.html(b.appMongolia + a.countSecondsText).tResize({
						tSwitch: !1
					}).css({
						fontSize: b.tParseInt(a.characterSize),
						lineHeight: b.tParseInt(a.characterSize) + 10 + "px",
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						color: a.characterColor,
						backgroundColor: RGBToHex(a.characterBgColor, ""),
						fontStyle: a.characterStyle || "normal",
						height: b.tParseInt(a.characterSize) + 10 + "px",
						whiteSpace: "nowrap",
						width: "auto"
					}).show()) : (g.hide(), h.hide()), checkUrl(e) ? (f.css({
						backgroundImage: "url(" + e + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: e
					}, function(a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), f.css({
						backgroundPosition: a.childConfig[0].imgBgp || "50% 50%"
					}), submitColor(f, RGBToHex(a.childConfig[0].bgColor, "")), c.children(b.appOtherCls + ":eq(0)").html(a.customHtml), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div><div class="t-app-other"></div><div class="t-app-child" data-dblType="jzzb" data-attachType="jzzbAttention"></div><div class="t-app-child j-app-qswz" data-dblType="jzzb" data-attachType="jzzbCountNumber">10</div><div class="t-app-child j-app-qswz" data-dblType="jzzb" data-attachType="jzzbCountText"></div>',
				codeExport: function(a) {
					var E, F, G, H, I, J, K, L, M, N, _, ab, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, bb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = (new Date).valueOf().toString().substr(7, 6),
						i = a.children(b.appChildCls + "[data-attachType='jzzbAttention']"),
						j = a.children(b.appChildCls + "[data-attachType='jzzbCountNumber']"),
						k = a.children(b.appChildCls + "[data-attachType='jzzbCountText']"),
						l = b.setChildPos(a, i, !0),
						m = c.childConfig[0],
						n = c.childConfig[1],
						o = c.displayMode || "none",
						p = "",
						q = "",
						r = "",
						s = "",
						t = "",
						u = "",
						v = "",
						w = "",
						x = c.imgBgp || "50% 50%",
						y = c.tipText || "",
						z = "",
						A = m.tipText || "",
						B = "",
						C = m.imgBgp || "50% 50%",
						D = "";
					return "" != y && (z = ' title= "' + y + '"'), "" != A && (B = ' title= "' + A + '"'), ("" == m.zzcAttentionSrc1 || m.zzcAttentionSrc1 == m.zzcAttentionSrc) && (w = "display:none;"), E = m.oppoEffect + ";" + m.oppoSpeed, F = "", G = "", H = "", I = "", m.oppoEffect && "none" != m.oppoEffect && "" != m.oppoEffect || (m.oppoSpeed = ""), "june-box-fadein" == m.oppoEffect && (H = "display:block;", F = '<div class="jspb" style="width:' + l.width + "px;height:" + l.height + 'px;">', G = "</div>", m.oppoEffect = "", I = "june-box-fadein"), m.zzcAttentionSrc1 && "" != m.zzcAttentionSrc1 && checkUrl(m.zzcAttentionSrc1) && (v = F + '<img class="abs ' + m.oppoSpeed + " " + I + '" data-t="' + E + '" style="width:100%;height:100%;' + H + w + '" src="' + m.zzcAttentionSrc1 + '" />' + G), "gzlink" == m.linkMode ? ("" != c.attentionID && (D = "j_CollectBrand"), r = "cursor:pointer;", J = '<a href="#" class="imghover ' + D + " " + m.oppoEffect + " " + m.oppoSpeed + '" data-brandid="' + m.attentionID + '" style="' + r + "display:block;width:" + l.width + "px;height:" + l.height + 'px;">' + v + "</a>") : J = "nonelink" == m.linkMode ? '<a class="imghover ' + m.oppoEffect + " " + m.oppoSpeed + '" data-href="none" style="display:block;cursor:pointer;width:' + l.width + "px;height:" + l.height + 'px;">' + v + "</a>" : '<a class="imghover ' + m.oppoEffect + " " + m.oppoSpeed + '" href="' + m.href + '" target="' + m.hrefMode + '" style="display:block;width:' + l.width + "px;height:" + l.height + 'px;">' + v + "</a>", K = "", L = "", M = "", N = "", "yes" == c.countSwitch && (O = b.tParseInt(c.countSeconds), P = "", Q = "", R = "", S = "", T = "", U = "", V = "", W = "", X = "", Y = "", Z = "", $ = "", n.characterColor = RGBToHex(n.characterColor, ""), "" != n.characterColor && (P = "color:" + n.characterColor + ";"), "" != n.characterFont && (Q = "font-family:" + n.characterFont + ";"), "" != n.characterWeight && (R = "font-weight:" + n.characterWeight + ";"), "" != n.characterSize && (S = "font-size:" + b.tParseInt(n.characterSize) + "px;"), n.characterBgColor = RGBToHex(n.characterBgColor, ""), "" != n.characterBgColor && (T = "background-color:" + n.characterBgColor + ";"), "italic" == n.characterStyle && (U = "font-style:" + n.characterStyle + ";"), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (V = "color:" + c.characterColor + ";"), "" != c.characterFont && (W = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (X = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && (Y = "font-size:" + b.tParseInt(c.characterSize) + "px;"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (Z = "background-color:" + c.characterBgColor + ";"), "italic" == c.characterStyle && ($ = "font-style:" + c.characterStyle + ";"), _ = b.setChildPos(a, j, !0), ab = b.setChildPos(a, k, !0), K = '<div class="zzccd abs J_TWidget" data-widget-type="Countdown" data-widget-config="{ \'endTime\': \'' + 1e3 * O + "', 'interval': 1000, 'timeRunCls': '.zzcmjb', 'timeUnitCls':{ 'd': '.ks-d', 'h': '.ks-h', 'm': '.ks-m', 's': '.seczz' }, 'minDigit': 1, 'timeEndCls': '.ks-countdown-end' }\">", L = "</div></div>", M = '<div class="zzcmjb">', N = '<div class="zzccdsz abs seczz" style="width:' + _.width + "px;height:" + _.height + "px;left:" + (_.left - l.left) + "px;top:" + (_.top - l.top) + "px;" + P + Q + R + S + T + U + 'z-index:3;">' + O + '</div><div class="zzccdwz abs" style="width:' + ab.width + "px;height:" + ab.height + "px;left:" + (ab.left - l.left) + "px;top:" + (ab.top - l.top) + "px;" + V + W + X + Y + Z + $ + 'z-index:3;">' + c.countSecondsText + "</div>"), "imgContent" == c.zzcMode ? (c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (s = "background-color:" + c.bgColor + ";"), checkUrl(c.zzcSrc) && (p = "background:url(" + c.zzcSrc + ") " + x + " no-repeat;")) : q = c.zzcCustomContent, m.bgColor = RGBToHex(m.bgColor, ""), "" != m.bgColor && (t = "background-color:" + m.bgColor + ";"), checkUrl(m.zzcAttentionSrc) && (u = "background:url(" + m.zzcAttentionSrc + ") " + C + " no-repeat;"), bb = "", "fade" == o && (bb = c.customHtml), '<div class="jzzb abs J_TWidget ' + c.appID + '" data-appid="' + c.appID + '" data-s="' + o + '" data-m="' + c.zzcMode + '"' + z + ' style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;\" data-widget-config=\"{'contentCls':'zc" + h + "','navCls':'zn" + h + "','duration':0.5,'easing':'easeBoth','effect':'" + o + "','delay':0,'triggerType':'click','activeTriggerCls':'hidden','autoplay':false}\" data-widget-type=\"Slide\">" + K + '<div class="abs zzhtml" style="z-index:1;">' + c.customHtml + "</div>" + M + '<div class="ks-switchable-content abs zc' + h + '" style="z-index:2;"><div class="abs zzmc" style="width:' + d + "px;height:" + e + "px;" + p + s + '">' + q + '</div><div class="abs" style="display:none;width:0;height:0;">' + bb + '</div></div><ul class="ks-switchable-nav abs zn' + h + '" style="z-index:3;"><li class="abs"></li><li class="abs zzgzhtml"' + B + ' style="width:' + l.width + "px;height:" + l.height + "px;left:" + l.left + "px;top:" + l.top + "px;" + u + t + '">' + J + N + "</li></ul>" + L + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var j, k, l, m, n, o, p, q, r, s, t, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = b.getChildPos(d, d.find(".ks-switchable-nav .zzgzhtml"), !0);
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.displayMode = "fade" == d.attr("data-s") ? "fade" : "none", h.childConfig = [], h.childConfig[0] = {}, h.childConfig[1] = {}, h.childConfig[0].tipText = "", d.find(".ks-switchable-nav .zzgzhtml").attr("title") && "" != d.find(".ks-switchable-nav .zzgzhtml").attr("title") && (h.childConfig[0].tipText = d.find(".ks-switchable-nav .zzgzhtml").attr("title")), h.zzcMode = d.attr("data-m") || "imgContent", h.zzcSrc = d.find(".ks-switchable-content .zzmc").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.find(".ks-switchable-content .zzmc").css("background-color"), ""), h.imgBgp = d.find(".ks-switchable-content .zzmc").css("background-position"), h.zzcCustomContent = d.find(".ks-switchable-content .zzmc").html(), h.customHtml = d.find(".zzhtml").html(), h.childConfig[0].zzcAttentionSrc = d.find(".ks-switchable-nav .zzgzhtml").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.childConfig[0].oppoEffect = "none", h.childConfig[0].oppoSpeed = "", d.find(".ks-switchable-nav .zzgzhtml").length > 0 && (j = d.find(".ks-switchable-nav .zzgzhtml"), j.find("img").length > 0 && (h.childConfig[0].zzcAttentionSrc1 = j.find("img").attr("src"), k = j.find("img").attr("data-t") || ";", k = k.split(";"), h.childConfig[0].oppoEffect = k[0], h.childConfig[0].oppoSpeed = k[1])), h.childConfig[0].bgColor = RGBToHex(d.find(".ks-switchable-nav .zzgzhtml").css("background-color"), ""), h.childConfig[0].imgBgp = d.find(".ks-switchable-nav .zzgzhtml").css("background-position"), d.children(".zzccd").length > 0 ? (l = d.find(".zzccdsz"), m = d.find(".zzccdwz"), h.countSwitch = "yes", h.countSeconds = l.html() || "", h.countSecondsText = m.html() || "", h.childConfig[1].characterSize = l.css("font-size").replace(/px/g, ""), h.childConfig[1].characterFont = l.css("font-family").replace(/'/g, ""), h.childConfig[1].characterColor = RGBToHex(l.css("color")), h.childConfig[1].characterWeight = l.css("font-weight"), "400" == h.childConfig[1].characterWeight && (h.characterWeight = "normal"), h.childConfig[1].characterStyle = l.css("font-style") || "normal", h.childConfig[1].characterBgColor = RGBToHex(l.css("background-color"), ""), h.characterSize = m.css("font-size").replace(/px/g, ""), h.characterFont = m.css("font-family").replace(/'/g, ""), h.characterColor = RGBToHex(m.css("color")), h.characterWeight = m.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), h.characterStyle = m.css("font-style") || "normal", h.characterBgColor = RGBToHex(m.css("background-color"), "")) : (h.countSwitch = "no", h.countSeconds = "", h.countSecondsText = ""), d.find(".ks-switchable-nav .zzgzhtml a").hasClass("j_CollectBrand") ? (h.childConfig[0].linkMode = "gzlink", h.childConfig[0].attentionID = d.find(".ks-switchable-nav .zzgzhtml a").attr("data-brandid") || "") : "none" == d.find(".ks-switchable-nav .zzgzhtml a").attr("data-href") ? (h.childConfig[0].linkMode = "nonelink", h.childConfig[0].href = "", h.childConfig[0].hrefMode = "_blank") : (h.childConfig[0].linkMode = "ptlink", h.childConfig[0].href = d.find(".ks-switchable-nav .zzgzhtml a").attr("href"), h.childConfig[0].hrefMode = d.find(".ks-switchable-nav .zzgzhtml a").attr("target")), n = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(n)), o = a.children(b.appOtherCls + ":eq(1)"), p = a.children(b.appChildCls + "[data-attachType='jzzbAttention']"), q = a.children(b.appChildCls + "[data-attachType='jzzbCountNumber']"), r = a.children(b.appChildCls + "[data-attachType='jzzbCountText']"), "imgContent" == h.zzcMode ? checkUrl(h.zzcSrc) ? (a.css({
						backgroundImage: "url(" + h.zzcSrc + ")"
					}), o.css({
						backgroundImage: "url(" + h.zzcSrc + ")"
					})) : (a.css({
						backgroundImage: "none"
					}), o.css({
						backgroundImage: "none"
					})) : (o.html(h.zzcCustomContent), a.css({
						backgroundImage: "none"
					}), o.css({
						backgroundImage: "none"
					})), a.css({
						backgroundPosition: h.imgBgp
					}), o.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), submitColor(o, RGBToHex(h.bgColor, "")), "yes" == f.countSwitch ? (s = b.getChildPos(d, d.find(".zzccdsz"), !0), t = b.getChildPos(d, d.find(".zzccdwz"), !0), q.html(b.appMongolia + f.countSeconds).tResize({
						tSwitch: !1
					}).css({
						top: s.top + i.top,
						left: s.left + i.left,
						fontSize: b.tParseInt(f.childConfig[1].characterSize),
						lineHeight: b.tParseInt(f.childConfig[1].characterSize) + 10 + "px",
						fontWeight: f.childConfig[1].characterWeight,
						fontFamily: f.childConfig[1].characterFont,
						color: f.childConfig[1].characterColor,
						height: b.tParseInt(f.childConfig[1].characterSize) + 10 + "px",
						whiteSpace: "nowrap",
						width: "auto"
					}).show(), r.html(b.appMongolia + f.countSecondsText).tResize({
						tSwitch: !1
					}).css({
						top: t.top + i.top,
						left: t.left + i.left,
						fontSize: b.tParseInt(f.characterSize),
						lineHeight: b.tParseInt(f.characterSize) + 10 + "px",
						fontWeight: f.characterWeight,
						fontFamily: f.characterFont,
						color: f.characterColor,
						height: b.tParseInt(f.characterSize) + 10 + "px",
						whiteSpace: "nowrap",
						width: "auto"
					}).show()) : (q.hide(), r.hide()), checkUrl(h.childConfig[0].zzcAttentionSrc) && p.css({
						backgroundImage: "url(" + h.childConfig[0].zzcAttentionSrc + ")"
					}), p.css({
						backgroundPosition: h.childConfig[0].imgBgp
					}), submitColor(p, RGBToHex(h.childConfig[0].bgColor, "")), a.children(b.appOtherCls + ":eq(0)").html(h.customHtml), p.css({
						top: i.top,
						left: i.left,
						width: i.width,
						height: i.height
					}), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				zzcMode: "imgContent",
				displayMode: "none",
				zzcSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/T2_OLcXRtXXXXXXXXX-39767794.png",
				bgColor: "",
				imgBgp: "50% 50%",
				tipText: "",
				zzcCustomContent: "",
				autoSize: "no",
				countSwitch: "no",
				countSeconds: 10,
				countSecondsText: "秒后自动关闭",
				characterColor: "#ffffff",
				characterBgColor: "",
				characterSize: "14",
				characterWeight: "normal",
				characterFont: "微软雅黑",
				characterStyle: "",
				customHtml: '<div class="rel" style="position:relative;width:787px;height:118px;background:url(http://img04.taobaocdn.com/imgextra/i4/39767794/T2T0bdXKhXXXXXXXXX-39767794.png) top center repeat ;margin-left:0px;margin:0 auto;"><a class="jdb abs app85723870 mcblack  " href="#" title="" target="_blank" style="display:block;width:227px;height:80px;top:18px;left:21px;border-color:#000000;border-style:solid;border:none;z-index:10;" data-appid="app85723870"></a><a class="jdb abs app85737334 mcblack  " href="#" title="" target="_blank" style="display:block;width:226px;height:80px;top:18px;left:278px;border-color:#000000;border-style:solid;border:none;z-index:10;" data-appid="app85737334"></a><a class="jdb abs app85753278 mcblack  " href="#" title="" target="_blank" style="display:block;width:227px;height:80px;top:18px;left:541px;border-color:#000000;border-style:solid;border:none;z-index:10;" data-appid="app85753278"></a></div>',
				childConfig: [{
					attachID: "",
					zzcAttentionSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/T2zxzdXLVXXXXXXXXX-39767794.png",
					zzcAttentionSrc1: "",
					oppoEffect: "none",
					oppoSpeed: "",
					bgColor: "",
					imgBgp: "50% 50%",
					tipText: "",
					autoSize: "yes",
					linkMode: "gzlink",
					href: "#",
					hrefMode: "_blank",
					attentionID: ""
				}, {
					attachID: "",
					characterColor: "#ffffff",
					characterBgColor: "",
					characterSize: "14",
					characterWeight: "normal",
					characterFont: "微软雅黑",
					characterStyle: ""
				}]
			}],
			jmdb: ['<div class="t-app" data-dblType="jmdb"></div>',
			{
				tTitle: "锚点设置",
				tUrl: "md.php",
				tSubmit: function(a, b) {
					b.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						f = (a.width(), a.height(), b.tParseInt(a.css("top"))),
						g = b.tParseInt(a.css("left"));
					return '<a class="jmdb abs" name="' + c.anchorName + '" style="top:' + f + "px;left:" + g + 'px;z-index:10;"></a>'
				},
				codeImport: function(a, b, c, d) {
					var h, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {};
					g.anchorName = c.attr("name"), g.appID = g.anchorName.indexOf("junemd") >= 0 ? a.attr("appid") : g.anchorName.replace(/june-anchor/g, ""), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), a.css({
						width: 24,
						height: 24
					}), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				anchorName: ""
			}],
			jib: ['<div class="t-app" data-dblType="jib"></div>',
			{
				tTitle: "宝贝列表设置",
				tUrl: "item.php",
				tSubmit: function(a, c, d, e) {
					var h, i, j, k, l, m, n, o, p, q, r, s, t, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, f = a.href.split(","),
						g = a.erWeiMaSrc.split(",");
					for (h = 0; h < f.length; h++) if (g[h] && checkUrl(g[h]) && "" != g[h] && (g[h] = g[h].replace(/\&w\=[^\&]*\&h\=[^\&]*$/g, "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize).replace(/\&w\=[^\&]*\&h\=[^\&]*\&/g, "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize + "&")), "yes" == a.erWeiMaSwitch && (!g[h] || "" == g[h])) {
						if (!f[h] || "" == f[h]) continue;
						if (i = f[h].match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), j = "", !i || i.length < 1) continue;
						if (j = i[0].replace(/(\?|\&)id\=/g, ""), "" == j) continue;
						g[h] = f[h].indexOf("//detail.tmall") >= 0 ? "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=" + j + "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize : "http://gqrcode.alicdn.com/img?type=ci&item_id=" + j + "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize
					}
					for (a.erWeiMaSrc = g.join(","), c.attr("data-config", JSON.stringify(a)), a = b.toClear(a), k = require("scripts/tAjax"), l = require("scripts/childBaoBei"), m = a.sWidth, n = a.sHeight, o = a.mHeight, p = a.itemCount < 1 ? 1 : a.itemCount, q = a.itemColumn, r = a.columnSpace, s = a.lineSpace, t = Math.ceil(p / q), c.children("[data-attachType='jibbg']"), c.children("[data-attachType='jibpanel']"), w = c.children("[data-attachType='jibtitle']"), x = c.children("[data-attachType='jibsubtitle']"), y = c.children("[data-attachType='jibprefix']"), z = c.children("[data-attachType='jibprice']"), A = c.children("[data-attachType='jibdiscountprefix']"), B = c.children("[data-attachType='jibdiscountprice']"), C = c.children("[data-attachType='jibsaleprefix']"), D = c.children("[data-attachType='jibsale']"), E = c.children("[data-attachType='jibbtn']"), F = c.children("[data-attachType='jibbtn1']"), G = c.children("[data-attachType='jibbtn2']"), H = c.children("[data-attachType='jibsubscript']"), I = c.children("[data-attachType='jibsubscript1']"), J = c.children("[data-attachType='jibsubscript2']"), K = c.children("[data-attachType='jibsubscript3']"), L = c.children("[data-attachType='jibsubscript4']"), M = c.children("[data-attachType='jiberweima']"), N = c.children("[data-attachType='jibexpandtext']"), O = c.children("[data-attachType='jibexpandtext1']"), P = c.children("[data-attachType='jibexpandtext2']"), Q = c.children("[data-attachType='jibexpandtext3']"), R = c.children("[data-attachType='jibexpandtext4']"), S = [], c.children("[attachID]").each(function() {
						S.push($(this).attr("attachID"))
					}), b.tParseInt(a.itemColumn) > b.tParseInt(a.itemCount) && (q = a.itemCount), c.css({
						width: (m + r) * q - r,
						height: (n + o + s) * t - s
					}), T = {
						attachIDArray: S,
						titleTop: b.tParseInt(w.css("top")),
						titleLeft: b.tParseInt(w.css("left")),
						subTitleTop: b.tParseInt(x.css("top")),
						subTitleLeft: b.tParseInt(x.css("left")),
						prefixTop: b.tParseInt(y.css("top")),
						prefixLeft: b.tParseInt(y.css("left")),
						priceTop: b.tParseInt(z.css("top")),
						priceLeft: b.tParseInt(z.css("left")),
						_prefixTop: b.tParseInt(A.css("top")),
						_prefixLeft: b.tParseInt(A.css("left")),
						_priceTop: b.tParseInt(B.css("top")),
						_priceLeft: b.tParseInt(B.css("left")),
						salePrefixTop: b.tParseInt(C.css("top")),
						salePrefixLeft: b.tParseInt(C.css("left")),
						saleTop: b.tParseInt(D.css("top")),
						saleLeft: b.tParseInt(D.css("left")),
						btnTop: b.tParseInt(E.css("top")),
						btnLeft: b.tParseInt(E.css("left")),
						btnWidth: E.width(),
						btnHeight: E.height(),
						btn1Top: b.tParseInt(F.css("top")),
						btn1Left: b.tParseInt(F.css("left")),
						btn1Width: F.width(),
						btn1Height: F.height(),
						btn2Top: b.tParseInt(G.css("top")),
						btn2Left: b.tParseInt(G.css("left")),
						btn2Width: G.width(),
						btn2Height: G.height(),
						subScriptTop: b.tParseInt(H.css("top")),
						subScriptLeft: b.tParseInt(H.css("left")),
						subScriptWidth: H.width(),
						subScriptHeight: H.height(),
						subScript1Top: b.tParseInt(I.css("top")),
						subScript1Left: b.tParseInt(I.css("left")),
						subScript1Width: I.width(),
						subScript1Height: I.height(),
						subScript2Top: b.tParseInt(J.css("top")),
						subScript2Left: b.tParseInt(J.css("left")),
						subScript2Width: J.width(),
						subScript2Height: J.height(),
						subScript3Top: b.tParseInt(K.css("top")),
						subScript3Left: b.tParseInt(K.css("left")),
						subScript3Width: K.width(),
						subScript3Height: K.height(),
						subScript4Top: b.tParseInt(L.css("top")),
						subScript4Left: b.tParseInt(L.css("left")),
						subScript4Width: L.width(),
						subScript4Height: L.height(),
						erWeiMaTop: b.tParseInt(M.css("top")),
						erWeiMaLeft: b.tParseInt(M.css("left")),
						expandTextTop: b.tParseInt(N.css("top")),
						expandTextLeft: b.tParseInt(N.css("left")),
						expandText1Top: b.tParseInt(O.css("top")),
						expandText1Left: b.tParseInt(O.css("left")),
						expandText2Top: b.tParseInt(P.css("top")),
						expandText2Left: b.tParseInt(P.css("left")),
						expandText3Top: b.tParseInt(Q.css("top")),
						expandText3Left: b.tParseInt(Q.css("left")),
						expandText4Top: b.tParseInt(R.css("top")),
						expandText4Left: b.tParseInt(R.css("left"))
					}, d && (T = $.extend(!0, {}, e)), U = !1, V = [], checkUrl(a.btnSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2QXHLbXXXXXbUXXXXXXXXXXXX-39767794.jpg" != a.btnSrc ? (U = !0, V.push(a.btnSrc)) : checkUrl(a.btnHoverSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2EXHNbXXXXXbbXXXXXXXXXXXX-39767794.jpg" != a.btnHoverSrc ? (U = !0, V.push(a.btnHoverSrc)) : V.push(""), checkUrl(a.btn1Src) && "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2xCrJbXXXXXXfXpXXXXXXXXXX-39767794.jpg" != a.btn1Src ? (U = !0, V.push(a.btn1Src)) : checkUrl(a.btn1HoverSrc) && "http://img04.taobaocdn.com/imgextra/i4/39767794/TB24h6MbXXXXXbbXXXXXXXXXXXX-39767794.jpg" != a.btn1HoverSrc ? (U = !0, V.push(a.btn1HoverSrc)) : V.push(""), checkUrl(a.btn2Src) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2Q2_IbXXXXXbvXpXXXXXXXXXX-39767794.jpg" != a.btn2Src ? (U = !0, V.push(a.btn2Src)) : checkUrl(a.btn2HoverSrc) && "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Ps_KbXXXXXXmXpXXXXXXXXXX-39767794.jpg" != a.btn2HoverSrc ? (U = !0, V.push(a.btn2HoverSrc)) : V.push(""), W = a.subScriptSrc.split(","), X = !1, h = 0; h < W.length; h++) if (checkUrl(W[h]) && "" != W[h]) {
						V.push(W[h]), X = !0;
						break
					}
					for (X ? U = !0 : V.push(""), Y = a.subScript1Src.split(","), Z = !1, h = 0; h < Y.length; h++) if (checkUrl(Y[h]) && "" != Y[h]) {
						V.push(Y[h]), Z = !0;
						break
					}
					for (Z ? U = !0 : V.push(""), _ = a.subScript2Src.split(","), ab = !1, h = 0; h < _.length; h++) if (checkUrl(_[h]) && "" != _[h]) {
						V.push(_[h]), ab = !0;
						break
					}
					for (ab ? U = !0 : V.push(""), bb = a.subScript3Src.split(","), cb = !1, h = 0; h < bb.length; h++) if (checkUrl(bb[h]) && "" != bb[h]) {
						V.push(bb[h]), cb = !0;
						break
					}
					for (cb ? U = !0 : V.push(""), db = a.subScript4Src.split(","), eb = !1, h = 0; h < db.length; h++) if (checkUrl(db[h]) && "" != db[h]) {
						V.push(db[h]), eb = !0;
						break
					}
					if (eb ? U = !0 : V.push(""), fb = c.html(), c.html(""), U && !b.startParse) k.ajaxJsonForGis({
						imgarr: V
					}, function(a) {
						var d, e, f, g, h;
						for (a && a.length > 0 && (a[0] && (T.btnWidth = a[0][0], T.btnHeight = a[0][1]), a[1] && (T.btn1Width = a[1][0], T.btn1Height = a[1][1]), a[2] && (T.btn2Width = a[2][0], T.btn2Height = a[2][1]), a[3] && (T.subScriptWidth = a[3][0], T.subScriptHeight = a[3][1]), a[4] && (T.subScript1Width = a[4][0], T.subScript1Height = a[4][1]), a[5] && (T.subScript2Width = a[5][0], T.subScript2Height = a[5][1]), a[6] && (T.subScript3Width = a[6][0], T.subScript3Height = a[6][1]), a[7] && (T.subScript4Width = a[7][0], T.subScript4Height = a[7][1])), d = 0; p > d; d++) {
							e = d % q, f = b.tParseInt(d / q), g = (m + r) * e, h = (n + o + s) * f;
							try {
								l.createAuto("jib", c, g, h, d, T)
							} catch (i) {
								c.html(fb)
							}
						}
					}, !0);
					else for (h = 0; p > h; h++) {
						gb = h % q, hb = b.tParseInt(h / q), ib = (m + r) * gb, jb = (n + o + s) * hb;
						try {
							l.createAuto("jib", c, ib, jb, h, T)
						} catch (kb) {
							c.html(fb)
						}
					}
				},
				tAppArray: ["jibbg", "jibpanel", "jibsubscript", "jibsubscript1", "jibsubscript2", "jibsubscript3", "jibsubscript4", "jiberweima", "jibsubtitle", "jibtitle", "jibprefix", "jibprice", "jibdiscountprefix", "jibdiscountprice", "jibsaleprefix", "jibsale", "jibexpandtext", "jibexpandtext1", "jibexpandtext2", "jibexpandtext3", "jibexpandtext4", "AforPanel", "jibbtn", "jibbtn1", "jibbtn2"],
				tOtherSetConfig: {
					characterSpace: "",
					characterSpace1: "",
					characterSpacing: "",
					characterRadius: "",
					characterBorderWidth: "",
					characterBorderStyle: "solid",
					characterBorderColor: "#000000",
					characterAlign: "left",
					characterSize: "12",
					characterWeight: "normal",
					characterFont: "宋体",
					characterColor: "#000000",
					characterBgColor: "",
					characterDash: "off"
				},
				tDynamic: '<div class="june-nonsp t-app-other t-app-jib" data-dblType="jib" data-attachType="jibbg"></div><div class="june-nonsp jibBorderShadow" style="position:absolute;"></div><div class="june-nonsp t-app-other t-app-jib" data-dblType="jib" data-attachType="jibpanel"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript1"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript2"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript3"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript4"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jiberweima"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubtitle"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibtitle"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibprefix"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibprice"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibdiscountprefix"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibdiscountprice"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsaleprefix"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsale"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext1"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext2"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext3"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext4"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibbtn"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibbtn1"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibbtn2"></div>',
				tDynamicConfig: {
					attachID: ""
				},
				tContent: "",
				codeExport: function(a) {
					var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, c = require("scripts/reckonAlign"),
						d = JSON.parse(a.attr("data-config"));
					for (d = $.extend(!0, {}, b.appConfig["jib"][2], d), e = a.width(), f = a.height(), g = b.tParseInt(a.css("top")), h = b.tParseInt(a.css("left")), i = b.appConfig["jib"][1]["tAppArray"], j = d.href.split(","), k = d.pSrc.split(","), l = d.oppoSrc.split(","), m = d.titleInfo.split(","), n = d.subTitleInfo.split(","), o = d.priceInfo.split(","), p = d._priceInfo.split(","), q = d.saleInfo.split(","), r = d.subScriptSrc.split(","), s = d.subScript1Src.split(","), t = d.subScript2Src.split(","), u = d.subScript3Src.split(","), v = d.subScript4Src.split(","), w = d.erWeiMaSrc.split(","), x = d.expandText.split(","), y = d.expandTextSet.split("|;|"), z = d.expandText1.split(","), A = d.expandText1Set.split("|;|"), B = d.expandText2.split(","), C = d.expandText2Set.split("|;|"), D = d.expandText3.split(","), E = d.expandText3Set.split("|;|"), F = d.expandText4.split(","), G = d.expandText4Set.split("|;|"), H = d.titleAuto.split(","), I = d.priceAuto.split(","), J = d._priceAuto.split(","), K = d.saleAuto.split(","), L = d.panelArea ? d.panelArea : "no", M = d.pSrcPos.split(","), N = d.oSrcPos.split(","), O = "_" + d.pSrcSize + "x" + d.pSrcSize + ".jpg", P = "_" + d.pSrcSize1 + "x" + d.pSrcSize1 + ".jpg", "" == d.pSrcSize && (O = ""), "" == d.pSrcSize1 && (P = ""), d = b.toClear(d), d.borderRadius = d.borderRadius1, Q = a.children("[data-attachType='jibprefix']:eq(0)"), R = a.children("[data-attachType='jibprice']:eq(0)"), S = a.children("[data-attachType='jibdiscountprefix']:eq(0)"), T = a.children("[data-attachType='jibdiscountprice']:eq(0)"), U = a.children("[data-attachType='jibsaleprefix']:eq(0)"), V = a.children("[data-attachType='jibsale']:eq(0)"), W = a.children("[data-attachType='jibexpandtext']:not(:hidden):eq(0)"), X = a.children("[data-attachType='jibexpandtext1']:not(:hidden):eq(0)"), Y = a.children("[data-attachType='jibexpandtext2']:not(:hidden):eq(0)"), Z = a.children("[data-attachType='jibexpandtext3']:not(:hidden):eq(0)"), _ = a.children("[data-attachType='jibexpandtext4']:not(:hidden):eq(0)"), ab = "", bb = /((\&|\?){1}id\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)id\=/g, "pptitem" == d.itemMode && (bb = /((\&|\?){1}item_id\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)item_id\=/g), db = !1, eb = !1, fb = !1, ("auto" == d.priceAlign || "left" == d.priceAlign || "right" == d.priceAlign) && (db = !0, d.priceAlign = c.get(d.prefixSwitch, d.sWidth, b.tParseInt(R.css("left")), b.tParseInt(Q.css("left")))), ("auto" == d._priceAlign || "left" == d._priceAlign || "right" == d._priceAlign) && (eb = !0, d._priceAlign = c.get(d._prefixSwitch, d.sWidth, b.tParseInt(T.css("left")), b.tParseInt(S.css("left")))), ("auto" == d.saleAlign || "left" == d.saleAlign || "right" == d.saleAlign) && (fb = !0, d.saleAlign = c.get(d.salePrefixSwitch, d.sWidth, b.tParseInt(V.css("left")), b.tParseInt(U.css("left")))), gb = ' target="' + d.hrefMode + '"', d.oppoEffect && "none" != d.oppoEffect && "" != d.oppoEffect || (d.oppoSpeed = ""), hb = 0; hb < d.itemCount; hb++) {
						kb = "", lb = a.children("[data-attachType='jibbg']:eq(" + hb + ")"), "http" != j[hb].substr(0, 4) && (j[hb] = "http://" + j[hb], j[hb] = j[hb].replace(/\/\/\/\//g, "//")), j[hb] = $.trim(j[hb]);
						a: for (mb = 0; mb < i.length; mb++) if ("AforPanel" != i[mb]) if (nb = a.children("[data-attachType='" + i[mb] + "']:eq(" + hb + ")"), ob = b.getChildPos(a, lb, !0), pb = b.getChildPos(lb, nb, !1), qb = "", rb = "", sb = "", tb = "", ub = "", vb = "", wb = "white-space: nowrap;", xb = "", yb = j[hb], zb = "", Ab = "", Bb = "", Cb = "overflow:hidden;", xb = "top:" + pb.top + "px;left:" + pb.left + "px;", j[hb].indexOf("item_id") >= 0 || j[hb].indexOf("itemId") >= 0 ? (bb = /((\&|\?){1}(item_id|itemId)\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)(item_id|itemId)\=/g) : (bb = /((\&|\?){1}id\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)id\=/g), yb && "" != yb && (yb = yb.replace(/%20/g, " "), Db = yb.match(bb), Db && Db.length > 0 && (zb = $.trim(Db[0].replace(cb, "")))), Eb = k[hb] + O, Fb = l[hb] + P, "jibbg" == i[mb] || "jibtitle" == i[mb] || "jibsubtitle" == i[mb] || "jibbtn" == i[mb] || "jibbtn1" == i[mb] || "jibbtn2" == i[mb]) {
							if ("hborder1" == d.borderControl1 && "" != d.borderRadius1 && (Gb = b.tParseInt(d.borderRadius1), ub = "border-radius:" + Gb + "px " + Gb + "px 0 0", d.mHeight && "" != d.mHeight && "0" != d.mHeight || (ub = "border-radius:" + Gb + "px " + Gb + "px " + Gb + "px")), gb = ' target="' + d.hrefMode + '"', "jibbg" == i[mb] && (checkUrl(k[hb]) && (sb = "background:url(" + Eb + ") center center no-repeat;"), d.itemBgColor = RGBToHex(d.itemBgColor, ""), "" != d.itemBgColor && (tb = "background-color:" + d.itemBgColor + ";"), checkUrl(l[hb]) && (rb = " imghover", "yes" == d.oppoSwitch && (Jb = "", Kb = "", "june-box-fadein" == d.oppoEffect ? (Jb = "display:block;", Kb = "june-box-fadein", rb += " jspb") : rb += " " + d.oppoEffect, Lb = "width:" + d.pSrcSize1 + "px;height:" + d.pSrcSize1 + "px;margin-left:" + (pb.width - d.pSrcSize1) / 2 + "px;margin-top:" + (pb.height - d.pSrcSize1) / 2 + "px;", (pb.width - d.pSrcSize1 < 0 || pb.height - d.pSrcSize1 < 0) && (Lb = "width:" + d.pSrcSize1 + "px;height:" + d.pSrcSize1 + "px;left:" + (pb.width - d.pSrcSize1) / 2 + "px;top:" + (pb.height - d.pSrcSize1) / 2 + "px;"), "" == d.pSrcSize1 && (Lb = "width:100%;height:100%"), qb = '<img class="abs ' + d.oppoSpeed + " " + Kb + '" src="' + Fb + '" style="' + Jb + Lb + '" />')), ("1" != M[hb] || "2" != N[hb]) && (Ab = ' data-p="' + M[hb] + ";" + N[hb] + '"'), Ab += ' data-e="' + (d.oppoEffect || "none") + ";" + d.oppoSpeed + '"', ib = pb.width, jb = pb.height), "jibbtn" == i[mb] && "yes" == d.btnSwitch) checkUrl(d.btnSrc) && (sb = "background:url(" + d.btnSrc + ") center center no-repeat;"), checkUrl(d.btnHoverSrc) && (rb = " imghover", qb = '<img src="' + d.btnHoverSrc + '" style="width:100%;height:100%;" />'), "bhm_item" == d.btnHoverMode && (Mb = "", Nb = "", Ob = "", Pb = "", Qb = "", "" != d.btnHoverSpeed && (Mb = " " + d.btnHoverSpeed), "" == d.btnStyle && (Mb = ""), "" != d.btnHoverStyle && (Nb += " " + d.btnHoverStyle), "" != d.btnHoverStyleX && (Nb += " " + d.btnHoverStyleX), "" != d.btnHoverStyleY && (Nb += " " + d.btnHoverStyleY), checkUrl(d.btnHoverSrc) && (Ob = "background:url(" + d.btnHoverSrc + ") center center no-repeat;"), "" == Ob || d.btnHoverSrc == d.btnSrc ? (Pb = '<div class="abs ' + Mb + Nb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Qb = "") : (Pb = '<div class="abs june-box-fadeout' + Mb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Qb = '<div class="abs june-box-fadein' + Mb + Nb + '" style="top:0;left:0;width:100%;height:100%;' + Ob + '"></div>'), qb = Pb + Qb, rb = "", sb = "", Cb = "");
							else if ("jibbtn" == i[mb] && "yes" != d.btnSwitch) continue a;
							if ("jibbtn1" == i[mb] && "yes" == d.btn1Switch) gb = ' target="_blank"', yb && "" != yb && (Rb = yb.match(bb), Sb = "", Rb && Rb.length > 0 && (Sb = Rb[0].replace(cb, "")), yb = "http://favorite.taobao.com/popup/add_collection.htm?id=" + Sb + "&itemtype=1&scjjc=1"), checkUrl(d.btn1Src) && (sb = "background:url(" + d.btn1Src + ") center center no-repeat;"), checkUrl(d.btn1HoverSrc) && (rb = " imghover", qb = '<img src="' + d.btn1HoverSrc + '" style="width:100%;height:100%;" />'), "bhm_item" == d.btn1HoverMode && (Mb = "", Nb = "", Ob = "", Pb = "", Qb = "", "" != d.btn1HoverSpeed && (Mb = " " + d.btn1HoverSpeed), "" == d.btn1Style && (Mb = ""), "" != d.btn1HoverStyle && (Nb += " " + d.btn1HoverStyle), "" != d.btn1HoverStyleX && (Nb += " " + d.btn1HoverStyleX), "" != d.btn1HoverStyleY && (Nb += " " + d.btn1HoverStyleY), checkUrl(d.btn1HoverSrc) && (Ob = "background:url(" + d.btn1HoverSrc + ") center center no-repeat;"), "" == Ob || d.btn1HoverSrc == d.btn1Src ? (Pb = '<div class="abs ' + Mb + Nb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Qb = "") : (Pb = '<div class="abs june-box-fadeout' + Mb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Qb = '<div class="abs june-box-fadein' + Mb + Nb + '" style="top:0;left:0;width:100%;height:100%;' + Ob + '"></div>'), qb = Pb + Qb, rb = "", sb = "", Cb = "");
							else if ("jibbtn1" == i[mb] && "yes" != d.btn1Switch) continue a;
							if ("jibbtn2" == i[mb] && "yes" == d.btn2Switch) rb = " J_CartPluginTrigger", gb = "", checkUrl(d.btn2Src) && (sb = "background:url(" + d.btn2Src + ") center center no-repeat;"), checkUrl(d.btn2HoverSrc) && (rb += " imghover", qb = '<img src="' + d.btn2HoverSrc + '" style="width:100%;height:100%;" />'), "pptitem" == d.itemMode && yb && "" != yb && (Rb = yb.match(bb), Sb = "", Rb && Rb.length > 0 && (Sb = Rb[0].replace(cb, "")), yb = "https://detail.tmall.com/item.htm?id=" + Sb), "bhm_item" == d.btn2HoverMode && (Mb = "", Nb = "", Ob = "", Pb = "", Qb = "", "" != d.btn2HoverSpeed && (Mb = " " + d.btn2HoverSpeed), "" == d.btn2Style && (Mb = ""), "" != d.btn2HoverStyle && (Nb += " " + d.btn2HoverStyle), "" != d.btn2HoverStyleX && (Nb += " " + d.btn2HoverStyleX), "" != d.btn2HoverStyleY && (Nb += " " + d.btn2HoverStyleY), checkUrl(d.btn2HoverSrc) && (Ob = "background:url(" + d.btn2HoverSrc + ") center center no-repeat;"), "" == Ob || d.btn2HoverSrc == d.btn2Src ? (Pb = '<div class="abs ' + Mb + Nb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Qb = "") : (Pb = '<div class="abs june-box-fadeout' + Mb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Qb = '<div class="abs june-box-fadein' + Mb + Nb + '" style="top:0;left:0;width:100%;height:100%;' + Ob + '"></div>'), qb = Pb + Qb, rb = " J_CartPluginTrigger", sb = "", Cb = "");
							else if ("jibbtn2" == i[mb] && "yes" != d.btn2Switch) continue a;
							if ("jibtitle" == i[mb] && "yes" == d.titleSwitch)"" != zb && "1" == H[hb] && (Ab = ' data-u="' + m[hb] + '"', m[hb] = "%7b$" + zb + ".title%7d"), ub = "white-space:normal;text-align:" + d.titleAlign + ";", Tb = "center center", d.titleSpace && "" != d.titleSpace && ("left" == d.titleAlign ? (ub += "padding-left: " + b.tParseInt(d.titleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.titleSpace), Tb = "top left") : "right" == d.titleAlign && (ub += "padding-right: " + b.tParseInt(d.titleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.titleSpace), Tb = "top right")), checkUrl(d.titleBgImage) && (sb = "background:url(" + d.titleBgImage + ") " + Tb + " no-repeat;"), d.titleBgColor = RGBToHex(d.titleBgColor, ""), "" != d.titleBgColor && (tb = "background-color:" + d.titleBgColor + ";"), qb = m[hb] || "", d.titleColor = RGBToHex(d.titleColor, ""), "" != d.titleColor && (ub += "color:" + d.titleColor + ";"), "" != d.titleFont && (ub += "font-family:" + d.titleFont + ";"), "" != d.titleWeight && (ub += "font-weight:" + d.titleWeight + ";"), "" != d.titleSize && (ub += "font-size:" + b.tParseInt(d.titleSize) + "px;"), "" != d.titleSpacing && (ub += "letter-spacing:" + b.tParseInt(d.titleSpacing) + "px;"), "" != d.titleLineHeight && (ub += "line-height:" + b.tParseInt(d.titleLineHeight) + "px;");
							else if ("jibtitle" == i[mb] && "yes" != d.titleSwitch) continue a;
							if ("jibsubtitle" == i[mb] && "yes" == d.subTitleSwitch) ub = "text-align:" + d.subTitleAlign + ";", Tb = "center center", d.subTitleSpace && "" != d.subTitleSpace && ("left" == d.subTitleAlign ? (ub += "padding-left: " + b.tParseInt(d.subTitleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.subTitleSpace), Tb = "top left") : "right" == d.subTitleAlign && (ub += "padding-right: " + b.tParseInt(d.subTitleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.subTitleSpace), Tb = "top right")), checkUrl(d.subTitleBgImage) && (sb = "background:url(" + d.subTitleBgImage + ") " + Tb + " no-repeat;"), d.subTitleBgColor = RGBToHex(d.subTitleBgColor, ""), "" != d.subTitleBgColor && (tb = "background-color:" + d.subTitleBgColor + ";"), n[hb] && "undefined" != n[hb] || (n[hb] = ""), qb = n[hb] || "", d.subTitleColor = RGBToHex(d.subTitleColor, ""), "" != d.subTitleColor && (ub += "color:" + d.subTitleColor + ";"), "" != d.subTitleFont && (ub += "font-family:" + d.subTitleFont + ";"), "" != d.subTitleWeight && (ub += "font-weight:" + d.subTitleWeight + ";"), "" != d.subTitleSize && (ub += "font-size:" + b.tParseInt(d.subTitleSize) + "px;"), "" != d.subTitleSpacing && (ub += "letter-spacing:" + b.tParseInt(d.subTitleSpacing) + "px;"), "" != d.subTitleLineHeight && (ub += "line-height:" + b.tParseInt(d.subTitleLineHeight) + "px;");
							else if ("jibsubtitle" == i[mb] && "yes" != d.subTitleSwitch) continue a;
							kb += '<a class="abs ' + i[mb] + rb + '"' + Ab + ' href="' + yb + '"' + gb + ' style="display:block;' + Cb + "width:" + pb.width + "px;height:" + pb.height + "px;top:" + pb.top + "px;left:" + pb.left + "px;" + sb + tb + ub + '">' + qb + "</a>"
						} else {
							if ("jibpanel" == i[mb] && ("hborder1" == d.borderControl1 && "" != d.borderRadius1 && (Gb = b.tParseInt(d.borderRadius1), ub = "border-radius:0 0 " + Gb + "px " + Gb + "px"), checkUrl(d.bgImage) && (sb = "background:url(" + d.bgImage + ") center center no-repeat;"), d.bgColor = RGBToHex(d.bgColor, ""), "" != d.bgColor && (tb = "background-color:" + d.bgColor + ";"), wb = "width:" + pb.width + "px;height:" + pb.height + "px;", jb += pb.height), "jibsubscript" == i[mb] && "yes" == d.subScriptSwitch) sb = checkUrl(r[hb]) ? "background:url(" + r[hb] + ") center center no-repeat;" : "display:none;", "" == r[hb] && (sb = "display:none;"), wb = "width:" + pb.width + "px;height:" + pb.height + "px;", vb = '<a href="' + yb + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>';
							else if ("jibsubscript" == i[mb] && "yes" != d.subScriptSwitch) continue a;
							if ("jibsubscript1" == i[mb] && "yes" == d.subScript1Switch) sb = checkUrl(s[hb]) ? "background:url(" + s[hb] + ") center center no-repeat;" : "display:none;", "" == s[hb] && (sb = "display:none;"), wb = "width:" + pb.width + "px;height:" + pb.height + "px;", vb = '<a href="' + yb + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>';
							else if ("jibsubscript1" == i[mb] && "yes" != d.subScript1Switch) continue a;
							if ("jibsubscript2" == i[mb] && "yes" == d.subScript2Switch) sb = checkUrl(t[hb]) ? "background:url(" + t[hb] + ") center center no-repeat;" : "display:none;", "" == t[hb] && (sb = "display:none;"), wb = "width:" + pb.width + "px;height:" + pb.height + "px;", vb = '<a href="' + yb + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>';
							else if ("jibsubscript2" == i[mb] && "yes" != d.subScript2Switch) continue a;
							if ("jibsubscript3" == i[mb] && "yes" == d.subScript3Switch) sb = checkUrl(u[hb]) ? "background:url(" + u[hb] + ") center center no-repeat;" : "display:none;", "" == u[hb] && (sb = "display:none;"), wb = "width:" + pb.width + "px;height:" + pb.height + "px;", vb = '<a href="' + yb + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>';
							else if ("jibsubscript3" == i[mb] && "yes" != d.subScript3Switch) continue a;
							if ("jibsubscript4" == i[mb] && "yes" == d.subScript4Switch) sb = checkUrl(v[hb]) ? "background:url(" + v[hb] + ") center center no-repeat;" : "display:none;", "" == v[hb] && (sb = "display:none;"), wb = "width:" + pb.width + "px;height:" + pb.height + "px;", vb = '<a href="' + yb + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>';
							else if ("jibsubscript4" == i[mb] && "yes" != d.subScript4Switch) continue a;
							if ("jiberweima" == i[mb] && "yes" == d.erWeiMaSwitch) sb = checkUrl(w[hb]) ? "background:url(" + w[hb] + ") center center no-repeat;" : "display:none;", "" == w[hb] && (sb = "display:none;"), wb = "width:" + d.erWeiMaSize + "px;height:" + d.erWeiMaSize + "px;";
							else if ("jiberweima" == i[mb] && "yes" != d.erWeiMaSwitch) continue a;
							if ("jibprefix" == i[mb] && "yes" == d.prefixSwitch) vb = d.prefixInfo, d.prefixColor = RGBToHex(d.prefixColor, ""), "" != d.prefixColor && (ub += "color:" + d.prefixColor + ";"), "" != d.prefixFont && (ub += "font-family:" + d.prefixFont + ";"), "" != d.prefixWeight && (ub += "font-weight:" + d.prefixWeight + ";"), "" != d.prefixSize && (ub += "font-size:" + b.tParseInt(d.prefixSize) + "px;"), "" != d.prefixSpacing && (ub += "letter-spacing:" + b.tParseInt(d.prefixSpacing) + "px;"), "" != d.prefixDecoration && (ub += "text-decoration:" + d.prefixDecoration + ";");
							else if ("jibprefix" == i[mb] && "yes" != d.prefixSwitch) continue a;
							if ("jibprice" == i[mb] && "yes" == d.priceSwitch) Ub = "", o[hb] && "" != o[hb] && (Ub = tReplace(o[hb], /(\d*(\.)?(\d)*)*/g, function(a) {
								return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(d.priceFixed)) : a
							}), vb = Ub), ("right" == d.priceAlign || "qright" == d.priceAlign) && (Vb = lb.width(), Wb = R.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == d.priceAlign || "qright" == d.priceAlign) && (Bb += ' data-l="yes"'), "qcenter" == d.priceAlign && (Wb = nb.width(), Xb = nb.children("span").width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;left:" + (pb.left + (Wb - Xb) / 2) + "px;", Bb += ' data-l="center"'), "" != zb && "1" == I[hb] && (Ab = ' data-u="' + vb + '"', vb = "%7b$" + zb + ".price." + b.tParseInt(d.priceFixed) + "f%7d" + o[hb].replace(/\d*\.*/g, "")), d.priceColor = RGBToHex(d.priceColor, ""), "" != d.priceColor && (ub += "color:" + d.priceColor + ";"), "" != d.priceFont && (ub += "font-family:" + d.priceFont + ";"), "" != d.priceWeight && (ub += "font-weight:" + d.priceWeight + ";"), "" != d.priceSize && (ub += "font-size:" + b.tParseInt(d.priceSize) + "px;"), "" != d.priceSpacing && (ub += "letter-spacing:" + b.tParseInt(d.priceSpacing) + "px;"), "" != d.priceDecoration && (ub += "text-decoration:" + d.priceDecoration + ";");
							else if ("jibprice" == i[mb] && "yes" != d.priceSwitch) continue a;
							if ("jibdiscountprefix" == i[mb] && "yes" == d._prefixSwitch) vb = d._prefixInfo, d._prefixColor = RGBToHex(d._prefixColor, ""), "" != d._prefixColor && (ub += "color:" + d._prefixColor + ";"), "" != d._prefixFont && (ub += "font-family:" + d._prefixFont + ";"), "" != d._prefixWeight && (ub += "font-weight:" + d._prefixWeight + ";"), "" != d._prefixSize && (ub += "font-size:" + b.tParseInt(d._prefixSize) + "px;"), "" != d._prefixSpacing && (ub += "letter-spacing:" + b.tParseInt(d._prefixSpacing) + "px;");
							else if ("jibdiscountprefix" == i[mb] && "yes" != d._prefixSwitch) continue a;
							if ("jibdiscountprice" == i[mb] && "yes" == d._priceSwitch) Ub = "", p[hb] && "" != p[hb] && (Ub = tReplace(p[hb], /(\d*(\.)?(\d)*)*/g, function(a) {
								return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(d._priceFixed)) : a
							}), vb = Ub), ("right" == d._priceAlign || "qright" == d._priceAlign) && (Vb = lb.width(), Wb = T.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == d._priceAlign || "qright" == d._priceAlign) && (Bb += ' data-l="yes"'), "qcenter" == d._priceAlign && (Wb = nb.width(), Xb = nb.children("span").width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;left:" + (pb.left + (Wb - Xb) / 2) + "px;", Bb += ' data-l="center"'), "" != zb && "1" == J[hb] && (Ab = ' data-u="' + vb + '"', vb = "%7b$" + zb + ".discountPrice." + b.tParseInt(d._priceFixed) + "f%7d" + p[hb].replace(/\d*\.*/g, "")), d._priceColor = RGBToHex(d._priceColor, ""), "" != d._priceColor && (ub += "color:" + d._priceColor + ";"), "" != d._priceFont && (ub += "font-family:" + d._priceFont + ";"), "" != d._priceWeight && (ub += "font-weight:" + d._priceWeight + ";"), "" != d._priceSize && (ub += "font-size:" + b.tParseInt(d._priceSize) + "px;"), "" != d._priceSpacing && (ub += "letter-spacing:" + b.tParseInt(d._priceSpacing) + "px;");
							else if ("jibdiscountprice" == i[mb] && "yes" != d._priceSwitch) continue a;
							if ("jibsaleprefix" == i[mb] && "yes" == d.salePrefixSwitch) vb = d.salePrefixInfo, d.salePrefixColor = RGBToHex(d.salePrefixColor, ""), "" != d.salePrefixColor && (ub += "color:" + d.salePrefixColor + ";"), "" != d.salePrefixFont && (ub += "font-family:" + d.salePrefixFont + ";"), "" != d.salePrefixWeight && (ub += "font-weight:" + d.salePrefixWeight + ";"), "" != d.salePrefixSize && (ub += "font-size:" + b.tParseInt(d.salePrefixSize) + "px;"), "" != d.salePrefixSpacing && (ub += "letter-spacing:" + b.tParseInt(d.salePrefixSpacing) + "px;");
							else if ("jibsaleprefix" == i[mb] && "yes" != d.salePrefixSwitch) continue a;
							if ("jibsale" == i[mb] && "yes" == d.saleSwitch)("right" == d.saleAlign || "qright" == d.saleAlign) && (Vb = lb.width(), Wb = V.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == d.saleAlign || "qright" == d.saleAlign) && (Bb += ' data-l="yes"'), "qcenter" == d.saleAlign && (Wb = nb.width(), Xb = nb.children("span").width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;left:" + (pb.left + (Wb - Xb) / 2) + "px;", Bb += ' data-l="center"'), "" != zb && "1" == K[hb] && (Ab = ' data-u="' + q[hb] + '"', q[hb] = "%7b$" + zb + ".soldCount%7d"), vb = q[hb], d.saleColor = RGBToHex(d.saleColor, ""), "" != d.saleColor && (ub += "color:" + d.saleColor + ";"), "" != d.saleFont && (ub += "font-family:" + d.saleFont + ";"), "" != d.saleWeight && (ub += "font-weight:" + d.saleWeight + ";"), "" != d.saleSize && (ub += "font-size:" + b.tParseInt(d.saleSize) + "px;"), "" != d.saleSpacing && (ub += "letter-spacing:" + b.tParseInt(d.saleSpacing) + "px;");
							else if ("jibsale" == i[mb] && "yes" != d.saleSwitch) continue a;
							if ("jibexpandtext" == i[mb] && "yes" == d.expandTextSwitch) Yb = JSON.parse(y[hb] || "{}"), vb = x[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Yb.characterAlign || "left" == Yb.characterAlign || "right" == Yb.characterAlign) && (Yb.characterAlign = c.get("no", d.sWidth, b.tParseInt(W.css("left")))), ("right" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Vb = lb.width(), Wb = W.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Bb += ' data-l="yes"'), Tb = "center center", Zb = 0, $b = 0, Yb.characterSpace && "" != Yb.characterSpace && ($b = b.tParseInt(Yb.characterSpace)), Yb.characterSpace1 && "" != Yb.characterSpace1 && (Zb = b.tParseInt(Yb.characterSpace1)), (0 != Zb || 0 != $b) && (ub += "padding: " + Zb + "px " + $b + "px;"), Yb.characterBgColor && (Yb.characterBgColor = RGBToHex(Yb.characterBgColor, ""), "" != Yb.characterBgColor && (tb = "background-color:" + Yb.characterBgColor + ";")), Yb.characterColor && (Yb.characterColor = RGBToHex(Yb.characterColor, ""), "" != Yb.characterColor && (ub += "color:" + Yb.characterColor + ";")), Yb.characterFont && "" != Yb.characterFont && (ub += "font-family:" + Yb.characterFont + ";"), Yb.characterWeight && "" != Yb.characterWeight && (ub += "font-weight:" + Yb.characterWeight + ";"), Yb.characterSize && "" != Yb.characterSize && (ub += "font-size:" + b.tParseInt(Yb.characterSize) + "px;"), Yb.characterSpacing && "" != Yb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Yb.characterSpacing) + "px;"), Yb.characterRadius && "" != Yb.characterRadius && (ub += "border-radius:" + b.tParseInt(Yb.characterRadius) + "px;"), Yb.characterBorderWidth && "" != Yb.characterBorderWidth && "0" != Yb.characterBorderWidth && (ub += "border:" + Yb.characterBorderWidth + "px " + Yb.characterBorderStyle + " " + RGBToHex(Yb.characterBorderColor)));
							else if ("jibexpandtext" == i[mb] && "yes" != d.expandTextSwitch) continue a;
							if ("jibexpandtext1" == i[mb] && "yes" == d.expandText1Switch) Yb = JSON.parse(A[hb] || "{}"), vb = z[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Yb.characterAlign || "left" == Yb.characterAlign || "right" == Yb.characterAlign) && (Yb.characterAlign = c.get("no", d.sWidth, b.tParseInt(X.css("left")))), ("right" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Vb = lb.width(), Wb = X.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Bb += ' data-l="yes"'), Tb = "center center", Zb = 0, $b = 0, Yb.characterSpace && "" != Yb.characterSpace && ($b = b.tParseInt(Yb.characterSpace)), Yb.characterSpace1 && "" != Yb.characterSpace1 && (Zb = b.tParseInt(Yb.characterSpace1)), (0 != Zb || 0 != $b) && (ub += "padding: " + Zb + "px " + $b + "px;"), Yb.characterBgColor && (Yb.characterBgColor = RGBToHex(Yb.characterBgColor, ""), "" != Yb.characterBgColor && (tb = "background-color:" + Yb.characterBgColor + ";")), Yb.characterColor && (Yb.characterColor = RGBToHex(Yb.characterColor, ""), "" != Yb.characterColor && (ub += "color:" + Yb.characterColor + ";")), Yb.characterFont && "" != Yb.characterFont && (ub += "font-family:" + Yb.characterFont + ";"), Yb.characterWeight && "" != Yb.characterWeight && (ub += "font-weight:" + Yb.characterWeight + ";"), Yb.characterSize && "" != Yb.characterSize && (ub += "font-size:" + b.tParseInt(Yb.characterSize) + "px;"), Yb.characterSpacing && "" != Yb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Yb.characterSpacing) + "px;"), Yb.characterRadius && "" != Yb.characterRadius && (ub += "border-radius:" + b.tParseInt(Yb.characterRadius) + "px;"), Yb.characterBorderWidth && "" != Yb.characterBorderWidth && "0" != Yb.characterBorderWidth && (ub += "border:" + Yb.characterBorderWidth + "px " + Yb.characterBorderStyle + " " + RGBToHex(Yb.characterBorderColor)));
							else if ("jibexpandtext1" == i[mb] && "yes" != d.expandText1Switch) continue a;
							if ("jibexpandtext2" == i[mb] && "yes" == d.expandText2Switch) Yb = JSON.parse(C[hb] || "{}"), vb = B[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Yb.characterAlign || "left" == Yb.characterAlign || "right" == Yb.characterAlign) && (Yb.characterAlign = c.get("no", d.sWidth, b.tParseInt(Y.css("left")))), ("right" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Vb = lb.width(), Wb = Y.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Bb += ' data-l="yes"'), Tb = "center center", Zb = 0, $b = 0, Yb.characterSpace && "" != Yb.characterSpace && ($b = b.tParseInt(Yb.characterSpace)), Yb.characterSpace1 && "" != Yb.characterSpace1 && (Zb = b.tParseInt(Yb.characterSpace1)), (0 != Zb || 0 != $b) && (ub += "padding: " + Zb + "px " + $b + "px;"), Yb.characterBgColor && (Yb.characterBgColor = RGBToHex(Yb.characterBgColor, ""), "" != Yb.characterBgColor && (tb = "background-color:" + Yb.characterBgColor + ";")), Yb.characterColor && (Yb.characterColor = RGBToHex(Yb.characterColor, ""), "" != Yb.characterColor && (ub += "color:" + Yb.characterColor + ";")), Yb.characterFont && "" != Yb.characterFont && (ub += "font-family:" + Yb.characterFont + ";"), Yb.characterWeight && "" != Yb.characterWeight && (ub += "font-weight:" + Yb.characterWeight + ";"), Yb.characterSize && "" != Yb.characterSize && (ub += "font-size:" + b.tParseInt(Yb.characterSize) + "px;"), Yb.characterSpacing && "" != Yb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Yb.characterSpacing) + "px;"), Yb.characterRadius && "" != Yb.characterRadius && (ub += "border-radius:" + b.tParseInt(Yb.characterRadius) + "px;"), Yb.characterBorderWidth && "" != Yb.characterBorderWidth && "0" != Yb.characterBorderWidth && (ub += "border:" + Yb.characterBorderWidth + "px " + Yb.characterBorderStyle + " " + RGBToHex(Yb.characterBorderColor)));
							else if ("jibexpandtext2" == i[mb] && "yes" != d.expandText2Switch) continue a;
							if ("jibexpandtext3" == i[mb] && "yes" == d.expandText3Switch) Yb = JSON.parse(E[hb] || "{}"), vb = D[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Yb.characterAlign || "left" == Yb.characterAlign || "right" == Yb.characterAlign) && (Yb.characterAlign = c.get("no", d.sWidth, b.tParseInt(Z.css("left")))), ("right" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Vb = lb.width(), Wb = Z.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Bb += ' data-l="yes"'), Tb = "center center", Zb = 0, $b = 0, Yb.characterSpace && "" != Yb.characterSpace && ($b = b.tParseInt(Yb.characterSpace)), Yb.characterSpace1 && "" != Yb.characterSpace1 && (Zb = b.tParseInt(Yb.characterSpace1)), (0 != Zb || 0 != $b) && (ub += "padding: " + Zb + "px " + $b + "px;"), Yb.characterBgColor && (Yb.characterBgColor = RGBToHex(Yb.characterBgColor, ""), "" != Yb.characterBgColor && (tb = "background-color:" + Yb.characterBgColor + ";")), Yb.characterColor && (Yb.characterColor = RGBToHex(Yb.characterColor, ""), "" != Yb.characterColor && (ub += "color:" + Yb.characterColor + ";")), Yb.characterFont && "" != Yb.characterFont && (ub += "font-family:" + Yb.characterFont + ";"), Yb.characterWeight && "" != Yb.characterWeight && (ub += "font-weight:" + Yb.characterWeight + ";"), Yb.characterSize && "" != Yb.characterSize && (ub += "font-size:" + b.tParseInt(Yb.characterSize) + "px;"), Yb.characterSpacing && "" != Yb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Yb.characterSpacing) + "px;"), Yb.characterRadius && "" != Yb.characterRadius && (ub += "border-radius:" + b.tParseInt(Yb.characterRadius) + "px;"), Yb.characterBorderWidth && "" != Yb.characterBorderWidth && "0" != Yb.characterBorderWidth && (ub += "border:" + Yb.characterBorderWidth + "px " + Yb.characterBorderStyle + " " + RGBToHex(Yb.characterBorderColor)));
							else if ("jibexpandtext3" == i[mb] && "yes" != d.expandText3Switch) continue a;
							if ("jibexpandtext4" == i[mb] && "yes" == d.expandText4Switch) Yb = JSON.parse(G[hb] || "{}"), vb = F[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Yb.characterAlign || "left" == Yb.characterAlign || "right" == Yb.characterAlign) && (Yb.characterAlign = c.get("no", d.sWidth, b.tParseInt(_.css("left")))), ("right" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Vb = lb.width(), Wb = _.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Vb - Wb - pb.left) + "px;"), ("qleft" == Yb.characterAlign || "qright" == Yb.characterAlign) && (Bb += ' data-l="yes"'), Tb = "center center", Zb = 0, $b = 0, Yb.characterSpace && "" != Yb.characterSpace && ($b = b.tParseInt(Yb.characterSpace)), Yb.characterSpace1 && "" != Yb.characterSpace1 && (Zb = b.tParseInt(Yb.characterSpace1)), (0 != Zb || 0 != $b) && (ub += "padding: " + Zb + "px " + $b + "px;"), Yb.characterBgColor && (Yb.characterBgColor = RGBToHex(Yb.characterBgColor, ""), "" != Yb.characterBgColor && (tb = "background-color:" + Yb.characterBgColor + ";")), Yb.characterColor && (Yb.characterColor = RGBToHex(Yb.characterColor, ""), "" != Yb.characterColor && (ub += "color:" + Yb.characterColor + ";")), Yb.characterFont && "" != Yb.characterFont && (ub += "font-family:" + Yb.characterFont + ";"), Yb.characterWeight && "" != Yb.characterWeight && (ub += "font-weight:" + Yb.characterWeight + ";"), Yb.characterSize && "" != Yb.characterSize && (ub += "font-size:" + b.tParseInt(Yb.characterSize) + "px;"), Yb.characterSpacing && "" != Yb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Yb.characterSpacing) + "px;"), Yb.characterRadius && "" != Yb.characterRadius && (ub += "border-radius:" + b.tParseInt(Yb.characterRadius) + "px;"), Yb.characterBorderWidth && "" != Yb.characterBorderWidth && "0" != Yb.characterBorderWidth && (ub += "border:" + Yb.characterBorderWidth + "px " + Yb.characterBorderStyle + " " + RGBToHex(Yb.characterBorderColor)));
							else if ("jibexpandtext4" == i[mb] && "yes" != d.expandText4Switch) continue a;
							kb += '<div class="abs ' + i[mb] + '"' + Ab + Bb + ' style="' + wb + xb + sb + tb + ub + '">' + vb + "</div>"
						} else "yes" == L && (kb += '<a class="abs jibaforpanel" href="' + j[hb] + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>');
						_b = "", ac = "", bc = "", cc = "", dc = "", ec = "", fc = "", gc = 0, hc = 0, borderWidth = 0, borderWidth1 = 0, outlineColor = "", outlineShadowColor = "", outlineWidth = "", itemAreaHref = "", itemAreaTarget = "", "" != d.shadowControl && ("" == d.shadowLeft && (d.shadowLeft = 0), "" == d.shadowTop && (d.shadowTop = 0), "" == d.shadowBlur && (d.shadowBlur = 0), "" == d.shadowSize && (d.shadowSize = 0), dc = "box-shadow: " + d.shadowLeft + "px " + d.shadowTop + "px " + d.shadowBlur + "px " + d.shadowSize + "px " + d.shadowColor + " " + d.shadowStyle + ";"), "" == d.borderRadius && (d.borderRadius = 0), "" == d.borderWidth && (d.borderWidth = 0), "hborder" != d.borderControl && (ac = "border:none;", d.borderControl = "", d.borderWidth = 0, d.borderRadius = 0), d.borderColor = RGBToHex(d.borderColor, ""), "" != d.borderColor && (ec = "border-color:" + d.borderColor + ";"), gc = b.tParseInt(d.borderRadius), borderWidth = b.tParseInt(d.borderWidth), "" == ac && (ac = "border-radius:" + gc + "px;"), itemAreaHref = ' href="' + j[hb] + '"', itemAreaTarget = ' target="' + d.hrefMode + '"', ("" != d.shadowControl || "" != d.borderControl) && (_b = '<a class="itemareachild abs june-box-fadein"' + itemAreaHref + itemAreaTarget + ' style="display:block;top:' + (0 - borderWidth) + "px;left:" + (0 - borderWidth) + "px;width:" + ib + "px;height:" + jb + "px;" + ec + "border-style:solid;border-width:" + borderWidth + "px;" + ac + dc + '"></a>'), "" != d.shadowControl1 && ("" == d.shadowLeft1 && (d.shadowLeft1 = 0), "" == d.shadowTop1 && (d.shadowTop1 = 0), "" == d.shadowBlur1 && (d.shadowBlur1 = 0), "" == d.shadowSize1 && (d.shadowSize1 = 0), cc = "box-shadow: " + d.shadowLeft1 + "px " + d.shadowTop1 + "px " + d.shadowBlur1 + "px " + d.shadowSize1 + "px " + d.shadowColor1 + " " + d.shadowStyle1 + ";"), "" == d.borderRadius1 && (d.borderRadius1 = 0), "" == d.borderWidth1 && (d.borderWidth1 = 0), "hborder1" != d.borderControl1 && (bc = "border:none;", d.borderControl1 = "", d.borderWidth1 = 0, d.borderRadius1 = 0), fc = RGBToHex(d.borderColor1, ""), "" == fc && (bc = "border:none;", d.borderControl1 = "", d.borderWidth1 = 0, d.borderRadius1 = 0), hc = b.tParseInt(d.borderRadius1), borderWidth1 = b.tParseInt(d.borderWidth1), "" == bc && (bc = "border:" + borderWidth1 + "px solid " + fc + ";border-radius:" + hc + "px;"), "" == d.outlineControl && (d.outlineWidth = "", d.outlineColor = "", d.outlineShadowColor = ""), "" != d.outlineWidth && (outlineWidth = d.outlineWidth + " " + d.outlineSpeed), d.outlineColor = RGBToHex(d.outlineColor, ""), "" != d.outlineColor && (outlineColor = "outline-color:" + d.outlineColor + ";"), d.outlineShadowColor = RGBToHex(d.outlineShadowColor, ""), "" != d.outlineShadowColor && (outlineShadowColor = "color:" + d.outlineShadowColor + ";"), ab += '<div class="itemarea abs jspb ' + d.borderControl + " " + d.borderControl1 + " " + d.shadowControl + " " + d.shadowControl1 + " " + outlineWidth + ' jzi" style="display:block;width:' + ib + "px;height:" + jb + "px;top:" + ob.top + "px;left:" + ob.left + "px;" + outlineColor + outlineShadowColor + bc + cc + '">' + _b + kb + "</div>"
					}
					return ic = d.pSrcSize, "" == ic && (ic = "none"), jc = d.pSrcSize1, "" == jc && (jc = "none"), kc = "", d.mbncheck && "2" == d.mbncheck && (kc = ' data-mc="' + d.mbncheck + '"'), '<div class="jib abs" data-brandid="' + d.appID + '" data-t-size="' + ic + '" data-t-size1="' + jc + '" data-l="' + d.itemColumn + ";" + d.columnSpace + ";" + d.lineSpace + '" data-cc="' + (d.catchChoose || "") + '" data-h="' + d.itemMode + ";" + d.pptHref + '"' + kc + ' style="width:' + e + "px;height:" + f + "px;top:" + g + "px;left:" + h + 'px;z-index:10;">' + ab + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, _, Z, db, ab, bb, cb, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, f = JSON.parse(a.attr("data-config")),
						g = require("scripts/childBaoBei"),
						h = a.attr("data-dblType"),
						i = d.children("a.jibbg"),
						j = d.children("div.jibpanel"),
						k = d.children("a.jibtitle"),
						l = d.children("a.jibsubtitle"),
						m = d.children("div.jibprefix"),
						n = d.children("div.jibprice"),
						o = d.children("div.jibdiscountprefix"),
						p = d.children("div.jibdiscountprice"),
						q = d.children("div.jibsaleprefix"),
						r = d.children("div.jibsale"),
						s = d.children("a.jibbtn"),
						t = d.children("a.jibbtn1"),
						u = d.children("a.jibbtn2"),
						v = d.children("div.jibsubscript"),
						w = d.children("div.jibsubscript1"),
						x = d.children("div.jibsubscript2"),
						y = d.children("div.jibsubscript3"),
						z = d.children("div.jibsubscript4"),
						A = d.children("div.jiberweima"),
						B = d.children("div.jibexpandtext"),
						C = d.children("div.jibexpandtext1"),
						D = d.children("div.jibexpandtext2"),
						E = d.children("div.jibexpandtext3"),
						F = d.children("div.jibexpandtext4"),
						G = {},
						H = d.attr("data-h") || ";",
						I = H.split(";");
					for (G.itemMode = I[0] || "ptitem", G.pptHref = I[1] || "", G.panelArea = "no", G.catchChoose = d.attr("data-cc") || "", "" == G.catchChoose && (G.catchChoose = "1,1,1,1,1"), G.mbncheck = "2" == d.attr("data-mc") ? "2" : "0", d.children(".itemarea").length > 0 && (i = d.find("a.jibbg"), j = d.find("div.jibpanel"), k = d.find("a.jibtitle"), l = d.find("a.jibsubtitle"), m = d.find("div.jibprefix"), n = d.find("div.jibprice"), o = d.find("div.jibdiscountprefix"), p = d.find("div.jibdiscountprice"), q = d.find("div.jibsaleprefix"), r = d.find("div.jibsale"), s = d.find("a.jibbtn"), t = d.find("a.jibbtn1"), u = d.find("a.jibbtn2"), v = d.find("div.jibsubscript"), w = d.find("div.jibsubscript1"), x = d.find("div.jibsubscript2"), y = d.find("div.jibsubscript3"), z = d.find("div.jibsubscript4"), A = d.find("div.jiberweima"), B = d.find("div.jibexpandtext"), C = d.find("div.jibexpandtext1"), D = d.find("div.jibexpandtext2"), E = d.find("div.jibexpandtext3"), F = d.find("div.jibexpandtext4"), d.children(".itemarea").children("a.jibaforpanel").length > 0 ? G.panelArea = "yes" : d.children(".itemarea:eq(0)").children("a:not(.jibbg,.jibtitle,.jibsubtitle,.jibbtn,.jibbtn1,.jibbtn2,.itemareachild)").length > 0 && (G.panelArea = "yes")), G.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "ptitem" != G.itemMode && (G.pptCount = i.length), G.columnSpace = 0, G.lineSpace = 0, G.pSrcSize = d.attr("data-t-size"), "undefined" == G.pSrcSize && (G.pSrcSize = "240"), "none" == G.pSrcSize && (G.pSrcSize = ""), G.pSrcSize1 = d.attr("data-t-size1"), "undefined" == G.pSrcSize1 && (G.pSrcSize1 = "240"), "none" == G.pSrcSize1 && (G.pSrcSize1 = ""), d.attr("data-t-size") || (G.pSrcSize = ""), d.attr("data-t-size1") || (G.pSrcSize1 = G.pSrcSize), J = b.tParseInt(G.pSrcSize), K = b.tParseInt(G.pSrcSize1), L = 1, G.sWidth = i.width(), G.sHeight = i.height(), G.mHeight = j.height(), G.itemCount = i.length, M = -1, G.itemColumn = 0, d.children(".itemarea").length > 0 ? d.children("div.itemarea").each(function() {
						var a = b.tParseInt($(this).css("left"));
						a > M && (M = a, G.itemColumn += 1)
					}) : d.children("a.jibbg").each(function() {
						var a = b.tParseInt($(this).css("left"));
						a > M && (M = a, G.itemColumn += 1)
					}), L = Math.ceil(G.itemCount / G.itemColumn), G.itemColumn > 1 && (G.columnSpace = (d.width() - G.sWidth * G.itemColumn) / (G.itemColumn - 1)), L > 1 && (G.lineSpace = (d.height() - (G.sHeight + G.mHeight) * L) / (L - 1)), d.attr("data-l") && (tempItemIS = d.attr("data-l").split(";"), tempItemIS[0] && "" != tempItemIS[0] && (G.itemColumn = b.tParseInt(tempItemIS[0])), tempItemIS[1] && "" != tempItemIS[1] && (G.columnSpace = b.tParseInt(tempItemIS[1])), tempItemIS[2] && "" != tempItemIS[2] && (G.lineSpace = b.tParseInt(tempItemIS[2]))), G.href = [], G.pSrc = [], G.oppoSrc = [], G.titleInfo = [], G.subTitleInfo = [], G.priceInfo = [], G._priceInfo = [], G.saleInfo = [], G.subScriptSrc = [], G.subScript1Src = [], G.subScript2Src = [], G.subScript3Src = [], G.subScript4Src = [], G.erWeiMaSrc = [], G.expandText = [], G.expandTextSet = [], G.expandText1 = [], G.expandText1Set = [], G.expandText2 = [], G.expandText2Set = [], G.expandText3 = [], G.expandText3Set = [], G.expandText4 = [], G.expandText4Set = [], G.readVal = [], G.titleAuto = [], G.priceAuto = [], G._priceAuto = [], G.saleAuto = [], G.pSrcPos = [], G.oSrcPos = [], N = 0; N < G.itemCount; N++) G.href.push(""), G.pSrc.push(""), G.oppoSrc.push(""), G.titleInfo.push(""), G.subTitleInfo.push(""), G.priceInfo.push(""), G._priceInfo.push(""), G.saleInfo.push(""), G.subScriptSrc.push(""), G.subScript1Src.push(""), G.subScript2Src.push(""), G.subScript3Src.push(""), G.subScript4Src.push(""), G.readVal.push("0"), G.titleAuto.push("0"), G.priceAuto.push("0"), G._priceAuto.push("0"), G.saleAuto.push("0"), G.expandText.push(""), G.expandTextSet.push(""), G.expandText1.push(""), G.expandText1Set.push(""), G.expandText2.push(""), G.expandText2Set.push(""), G.expandText3.push(""), G.expandText3Set.push(""), G.expandText4.push(""), G.expandText4Set.push(""), G.pSrcPos.push("1"), G.oSrcPos.push("2");
					for (G.oppoSwitch = "no", G.titleSwitch = "no", G.subTitleSwitch = "no", G.prefixSwitch = "no", G.priceSwitch = "no", G._prefixSwitch = "no", G._priceSwitch = "no", G.saleSwitch = "no", G.salePrefixSwitch = "no", G.btnSwitch = "no", G.btn1Switch = "no", G.btn2Switch = "no", G.subScriptSwitch = "no", G.subScript1Switch = "no", G.subScript2Switch = "no", G.subScript3Switch = "no", G.subScript4Switch = "no", G.erWeiMaSwitch = "no", G.expandTextSwitch = "no", G.expandText1Switch = "no", G.expandText2Switch = "no", G.expandText3Switch = "no", G.expandText4Switch = "no", G.priceFixed = 0, G._priceFixed = 0, d.children(".itemarea").length > 0 && (O = d.children(".itemarea:eq(0)"), P = O.children("a:eq(0)"), O.hasClass("shadowShow") && (G.shadowControl = "shadowShow", Q = P.css("box-shadow"), Q.indexOf("inset") >= 0 && (G.shadowStyle = "inset", Q = $.trim(Q.replace(/inset/g, ""))), Q.indexOf("rgb") >= 0 && (R = RGBToHex(Q.match(/rgb\((\S|\s)*\)/g)[0]), Q = $.trim(Q.replace(/rgb\((\S|\s)*\)/g, ""))), S = Q.split(" "), S[0].indexOf("px") < 0 && S[0] ? ("" == R && (R = RGBToHex(S[0])), S.splice(0, 1)) : "" == R && (R = RGBToHex(S[4])), G.shadowColor = R, G.shadowLeft = b.tParseInt(S[0]), G.shadowTop = b.tParseInt(S[1]), G.shadowBlur = b.tParseInt(S[2]), G.shadowSize = b.tParseInt(S[3])), O.hasClass("hborder") && (G.borderControl = "hborder", G.borderColor = RGBToHex(O.children("a:eq(0)").css("border-color")), G.borderWidth = O.children("a:eq(0)").css("border-width") || "1px", G.borderWidth = G.borderWidth.replace(/px/g, ""), G.borderRadius = O.children("a:eq(0)").css("border-radius") || "0px", G.borderRadius = G.borderRadius.replace(/px/g, "")), O.hasClass("mcblack") && (G.mongoliaControl = "mongoliaShow", G.mongoliaMode = "mcblack"), O.hasClass("mcwhite") && (G.mongoliaControl = "mongoliaShow", G.mongoliaMode = "mcwhite"), O.hasClass("shadowShow1") && (G.shadowControl1 = "shadowShow1", T = O.css("box-shadow"), T.indexOf("inset") >= 0 && (G.shadowStyle1 = "inset", T = $.trim(T.replace(/inset/g, ""))), T.indexOf("rgb") >= 0 && (R = RGBToHex(T.match(/rgb\((\S|\s)*\)/g)[0]), T = $.trim(T.replace(/rgb\((\S|\s)*\)/g, ""))), S = T.split(" "), S[0].indexOf("px") < 0 && S[0] ? ("" == R && (R = RGBToHex(S[0])), S.splice(0, 1)) : "" == R && (R = RGBToHex(S[4])), G.shadowColor1 = R, G.shadowLeft1 = b.tParseInt(S[0]), G.shadowTop1 = b.tParseInt(S[1]), G.shadowBlur1 = b.tParseInt(S[2]), G.shadowSize1 = b.tParseInt(S[3])), O.hasClass("hborder1") && (G.borderControl1 = "hborder1", G.borderColor1 = RGBToHex(O.css("border-color")), G.borderWidth1 = O.css("border-width") || "1px", G.borderWidth1 = G.borderWidth1.replace(/px/g, ""), G.borderRadius1 = O.css("border-radius") || "0px", G.borderRadius1 = G.borderRadius1.replace(/px/g, "")), O.hasClass("juneol") && (G.outlineControl = "outlineShow", G.outlineWidth = "juneol", G.outlineColor = RGBToHex(O.css("outline-color")), G.outlineShadowColor = RGBToHex(O.css("color")), G.outlineSpeed = O.attr("class").indexOf("trans") >= 0 ? O.attr("class").match(/trans(\w+)s/g).join("") : ""), O.hasClass("juneol1") && (G.outlineControl = "outlineShow", G.outlineWidth = "juneol1", G.outlineColor = RGBToHex(O.css("outline-color")), G.outlineShadowColor = RGBToHex(O.css("color")), G.outlineSpeed = O.attr("class").indexOf("trans") >= 0 ? O.attr("class").match(/trans(\w+)s/g).join("") : ""), O.hasClass("juneol2") && (G.outlineControl = "outlineShow", G.outlineWidth = "juneol2", G.outlineColor = RGBToHex(O.css("outline-color")), G.outlineShadowColor = RGBToHex(O.css("color")), G.outlineSpeed = O.attr("class").indexOf("trans") >= 0 ? O.attr("class").match(/trans(\w+)s/g).join("") : "")), i.each(function(a) {
						var c = $(this),
							d = c.children("img"),
							e = c.attr("data-p") || "1;2",
							f = e.split(";");
						e.indexOf("|") >= 0 && (f = e.split("|")), G.href[a] = c.attr("href") || "", G.pSrc[a] = c.css("background-image").replace(/^url|[\(\"\)]*/g, "").replace(new RegExp("_" + J + "x" + J + ".jpg", "g"), ""), d.length > 0 && ("yes" != G.oppoSwitch && (G.oppoSwitch = "yes"), G.oppoSrc[a] = d.attr("src").replace(new RegExp("_" + K + "x" + K + ".jpg", "g"), "")), G.pSrcPos[a] = f[0] || "1", G.oSrcPos[a] = f[1] || "2"
					}), G.hrefMode = i.eq(0).attr("target") || "_blank", G.itemBgColor = RGBToHex(i.eq(0).css("background-color"), ""), G.bgColor = RGBToHex(j.eq(0).css("background-color"), ""), G.bgImage = j.eq(0).css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.eq(0).attr("data-e") ? (U = i.eq(0).attr("data-e").split(";"), G.oppoEffect = U[0] || "none", G.oppoSpeed = U[1] || "") : (G.oppoEffect = "none", G.oppoSpeed = ""), k.length > 0 && (G.titleSwitch = "yes", G.titleWidth = k.width(), G.titleHeight = k.height(), G.titleBgColor = RGBToHex(k.css("background-color"), ""), G.titleBgImage = k.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.titleColor = RGBToHex(k.css("color"), ""), G.titleAlign = k.css("text-align") || "left", G.titleFont = k.css("font-family").replace(/'/g, ""), G.titleSize = k.css("font-size").replace(/px/g, ""), G.titleSpacing = k.css("letter-spacing").replace(/px/g, ""), G.titleWeight = k.css("font-weight"), "400" == G.titleWeight && (G.titleWeight = "normal"), G.titleLineHeight = k.css("line-height").replace(/px/g, ""), k.each(function(a) {
						var c = $(this);
						G.titleInfo[a] = c.text(), "undefined" == G.titleInfo[a] && (G.titleInfo[a] = ""), (c.attr("data-u") || "%7b" == G.titleInfo[a].substr(0, 3)) && (G.titleAuto[a] = 1, G.titleInfo[a] = c.attr("data-u") || "")
					}), "left" == G.titleAlign ? (G.titleSpace = Math.abs(b.tParseInt(k.css("padding-left"))), G.titleWidth += G.titleSpace) : "right" == G.titleAlign ? (G.titleSpace = Math.abs(b.tParseInt(k.css("padding-right"))), G.titleWidth += G.titleSpace) : G.titleSpace = ""), l.length > 0 && (G.subTitleSwitch = "yes", G.subTitleWidth = l.width(), G.subTitleHeight = l.height(), G.subTitleBgColor = RGBToHex(l.css("background-color"), ""), G.subTitleBgImage = l.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.subTitleColor = RGBToHex(l.css("color"), ""), G.subTitleAlign = l.css("text-align") || "left", G.subTitleFont = l.css("font-family").replace(/'/g, ""), G.subTitleSize = l.css("font-size").replace(/px/g, ""), G.subTitleSpacing = l.css("letter-spacing").replace(/px/g, ""), G.subTitleWeight = l.css("font-weight"), "400" == G.subTitleWeight && (G.subTitleWeight = "normal"), G.subTitleLineHeight = l.css("line-height").replace(/px/g, ""), l.each(function(a) {
						var c = $(this);
						G.subTitleInfo[a] = c.html().replace(/\<span class=\"coupon\" title=\".*?\" data-num=\".*?\"\>.*?\<i class=\"ju-icon-arrowright\"\>.*?\<\/i\>.*?\<\/span\>/g, "").replace(/<.*?>/g, ""), "undefined" == G.subTitleInfo[a] && (G.subTitleInfo[a] = "")
					}), "left" == G.subTitleAlign ? (G.subTitleSpace = Math.abs(b.tParseInt(l.css("padding-left"))), G.subTitleWidth += G.subTitleSpace) : "right" == G.subTitleAlign ? (G.subTitleSpace = Math.abs(b.tParseInt(l.css("padding-right"))), G.subTitleWidth += G.subTitleSpace) : G.subTitleSpace = ""), m.length > 0 && (G.prefixSwitch = "yes", G.prefixColor = RGBToHex(m.css("color"), ""), G.prefixFont = m.css("font-family").replace(/'/g, ""), G.prefixSize = m.css("font-size").replace(/px/g, ""), G.prefixSpacing = m.css("letter-spacing").replace(/px/g, ""), G.prefixWeight = m.css("font-weight"), "400" == G.prefixWeight && (G.prefixWeight = "normal"), G.prefixDecoration = m.css("text-decoration"), G.prefixInfo = m.html()), n.length > 0 && (G.priceSwitch = "yes", G.priceColor = RGBToHex(n.css("color"), ""), G.priceFont = n.css("font-family").replace(/'/g, ""), G.priceSize = n.css("font-size").replace(/px/g, ""), G.priceSpacing = n.css("letter-spacing").replace(/px/g, ""), G.priceWeight = n.css("font-weight"), "400" == G.priceWeight && (G.priceWeight = "normal"), G.priceDecoration = n.css("text-decoration"), G.priceAlign = "left", n.each(function(a) {
						var d = $(this);
						G.priceInfo[a] = d.text(), d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != G.priceAlign && "qright" != G.priceAlign && (G.priceAlign = "right")), (d.attr("data-u") || "%7b" == G.priceInfo[a].substr(0, 3)) && (V = d.html(), G.priceAuto[a] = 1, G.priceInfo[a] = d.attr("data-u") || ""), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != G.priceAlign.substr(0, 1) && (G.priceAlign = "q" + G.priceAlign), d.attr("data-l") && "center" == d.attr("data-l") && (G.priceAlign = "qcenter"), G.mbncheck && "2" == G.mbncheck && (G.priceInfo[a] = G.priceInfo[a].replace(/.XX/g, ".00"))
					}), W = G.priceInfo[0].split("."), W.length > 1 && (W[1] = W[1].replace(/[^\d\.]*/g, ""), G.priceFixed = W[1].length), W.length > 2 && (W[2] = W[2].replace(/[^\d\.]*/g, ""), G.priceFixed = W[2].length)), o.length > 0 && (G._prefixSwitch = "yes", G._prefixColor = RGBToHex(o.css("color"), ""), G._prefixFont = o.css("font-family").replace(/'/g, ""), G._prefixSize = o.css("font-size").replace(/px/g, ""), G._prefixSpacing = o.css("letter-spacing").replace(/px/g, ""), G._prefixWeight = o.css("font-weight"), "400" == G._prefixWeight && (G._prefixWeight = "normal"), G._prefixInfo = o.html()), p.length > 0 && (G._priceSwitch = "yes", G._priceColor = RGBToHex(p.css("color"), ""), G._priceFont = p.css("font-family").replace(/'/g, ""), G._priceSize = p.css("font-size").replace(/px/g, ""), G._priceSpacing = p.css("letter-spacing").replace(/px/g, ""), G._priceWeight = p.css("font-weight"), "400" == G._priceWeight && (G._priceWeight = "normal"), G._priceAlign = "left", p.each(function(a) {
						var d = $(this);
						G._priceInfo[a] = d.text(), d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != G._priceAlign && "qright" != G._priceAlign && (G._priceAlign = "right")), (d.attr("data-u") || "%7b" == G._priceInfo[a].substr(0, 3)) && (V = d.html(), G._priceAuto[a] = 1, G._priceInfo[a] = d.attr("data-u") || ""), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != G._priceAlign.substr(0, 1) && (G._priceAlign = "q" + G._priceAlign), d.attr("data-l") && "center" == d.attr("data-l") && (G._priceAlign = "qcenter"), G.mbncheck && "2" == G.mbncheck && (G._priceInfo[a] = G._priceInfo[a].replace(/.XX/g, ".00"))
					}), X = G._priceInfo[0].split("."), X.length > 1 && (X[1] = X[1].replace(/[^\d\.]*/g, ""), G._priceFixed = X[1].length), X.length > 2 && (X[2] = X[2].replace(/[^\d\.]*/g, ""), G._priceFixed = X[2].length)), q.length > 0 && (G.salePrefixSwitch = "yes", G.salePrefixColor = RGBToHex(q.css("color"), ""), G.salePrefixFont = q.css("font-family").replace(/'/g, ""), G.salePrefixSize = q.css("font-size").replace(/px/g, ""), G.salePrefixSpacing = q.css("letter-spacing").replace(/px/g, ""), G.salePrefixWeight = q.css("font-weight"), "400" == G.salePrefixWeight && (G.salePrefixWeight = "normal"), G.salePrefixInfo = q.html()), r.length > 0 && (G.saleSwitch = "yes", G.saleColor = RGBToHex(r.css("color"), ""), G.saleFont = r.css("font-family").replace(/'/g, ""), G.saleSize = r.css("font-size").replace(/px/g, ""), G.saleSpacing = r.css("letter-spacing").replace(/px/g, ""), G.saleWeight = r.css("font-weight"), "400" == G.saleWeight && (G.saleWeight = "normal"), G.saleAlign = "left", r.each(function(a) {
						var d = $(this);
						G.saleInfo[a] = d.text().replace(/件/g, ""), d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != G.saleAlign && "qright" != G.saleAlign && (G.saleAlign = "right")), (d.attr("data-u") || "%7b" == G.saleInfo[a].substr(0, 3)) && (G.saleAuto[a] = 1, G.saleInfo[a] = d.attr("data-u") || ""), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != G.saleAlign.substr(0, 1) && (G.saleAlign = "q" + G.saleAlign), d.attr("data-l") && "center" == d.attr("data-l") && (G.saleAlign = "qcenter")
					})), s.length > 0 && (G.btnSwitch = "yes", Y = s.eq(0).children("div"), Y.length > 0 ? (Z = Y.eq(0), _ = 2 == Y.length ? Y.eq(1) : Z, ab = Z.attr("class"), bb = _.attr("class"), cb = "", G.btnHoverMode = "bhm_item", G.btnSrc = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btnHoverSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), cb = ab.match(/trans(\w+)s/g), !cb || cb.length < 1 ? G.btnStyle = "" : (G.btnStyle = "june-box-fadeout", G.btnHoverSpeed = cb.join("")), db = bb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = bb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = bb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btnHoverStyle = !db || db.length < 1 ? "" : db.join(""), G.btnHoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btnHoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btnHoverMode = "bhm_btn", G.btnSrc = s.css("background-image").replace(/^url|[\(\"\)]*/g, ""), eb = s.children("img"), G.btnHoverSrc = eb.length > 0 ? eb.attr("src") : "")), t.length > 0 && (G.btn1Switch = "yes", Y = t.eq(0).children("div"), Y.length > 0 ? (Z = Y.eq(0), _ = 2 == Y.length ? Y.eq(1) : Z, ab = Z.attr("class"), bb = _.attr("class"), cb = "", G.btn1HoverMode = "bhm_item", G.btn1Src = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btn1HoverSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), cb = ab.match(/trans(\w+)s/g), !cb || cb.length < 1 ? G.btn1Style = "" : (G.btn1Style = "june-box-fadeout", G.btn1HoverSpeed = cb.join("")), db = bb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = bb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = bb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btn1HoverStyle = !db || db.length < 1 ? "" : db.join(""), G.btn1HoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btn1HoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btn1HoverMode = "bhm_btn", G.btn1Src = t.css("background-image").replace(/^url|[\(\"\)]*/g, ""), fb = t.children("img"), G.btn1HoverSrc = fb.length > 0 ? fb.attr("src") : "")), u.length > 0 && (G.btn2Switch = "yes", Y = u.eq(0).children("div"), Y.length > 0 ? (Z = Y.eq(0), _ = 2 == Y.length ? Y.eq(1) : Z, ab = Z.attr("class"), bb = _.attr("class"), cb = "", G.btn2HoverMode = "bhm_item", G.btn2Src = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btn2HoverSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), cb = ab.match(/trans(\w+)s/g), !cb || cb.length < 1 ? G.btn2Style = "" : (G.btn2Style = "june-box-fadeout", G.btn2HoverSpeed = cb.join("")), db = bb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = bb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = bb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btn2HoverStyle = !db || db.length < 1 ? "" : db.join(""), G.btn2HoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btn2HoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btn2HoverMode = "bhm_btn", G.btn2Src = u.css("background-image").replace(/^url|[\(\"\)]*/g, ""), gb = u.children("img"), G.btn2HoverSrc = gb.length > 0 ? gb.attr("src") : "")), v.length > 0 && (G.subScriptSwitch = "yes", v.each(function(a) {
						var c = $(this);
						G.subScriptSrc[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
					})), w.length > 0 && (G.subScript1Switch = "yes", w.each(function(a) {
						var c = $(this);
						G.subScript1Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
					})), x.length > 0 && (G.subScript2Switch = "yes", x.each(function(a) {
						var c = $(this);
						G.subScript2Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
					})), y.length > 0 && (G.subScript3Switch = "yes", y.each(function(a) {
						var c = $(this);
						G.subScript3Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
					})), z.length > 0 && (G.subScript4Switch = "yes", z.each(function(a) {
						var c = $(this);
						G.subScript4Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
					})), A.length > 0 && (G.erWeiMaSwitch = "yes", G.erWeiMaSize = A.width() || 90, A.each(function(a) {
						var c = $(this);
						G.erWeiMaSrc[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
					})), B.length > 0 && (G.expandTextSwitch = "yes", B.each(function(a) {
						var d = $(this),
							e = {};
						G.expandText[a] = d.html(), "undefined" == G.expandText[a] && (G.expandText[a] = ""), "" != G.expandText[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandTextSet[a] = JSON.stringify(e))
					})), C.length > 0 && (G.expandText1Switch = "yes", C.each(function(a) {
						var d = $(this),
							e = {};
						G.expandText1[a] = d.html(), "undefined" == G.expandText1[a] && (G.expandText1[a] = ""), "" != G.expandText1[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText1Set[a] = JSON.stringify(e))
					})), D.length > 0 && (G.expandText2Switch = "yes", D.each(function(a) {
						var d = $(this),
							e = {};
						G.expandText2[a] = d.html(), "undefined" == G.expandText2[a] && (G.expandText2[a] = ""), "" != G.expandText2[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText2Set[a] = JSON.stringify(e))
					})), E.length > 0 && (G.expandText3Switch = "yes", E.each(function(a) {
						var d = $(this),
							e = {};
						G.expandText3[a] = d.html(), "undefined" == G.expandText3[a] && (G.expandText3[a] = ""), "" != G.expandText3[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText3Set[a] = JSON.stringify(e))
					})), F.length > 0 && (G.expandText4Switch = "yes", F.each(function(a) {
						var d = $(this),
							e = {};
						G.expandText4[a] = d.html(), "undefined" == G.expandText4[a] && (G.expandText4[a] = ""), "" != G.expandText4[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText4Set[a] = JSON.stringify(e))
					})), G.href = G.href.join(","), G.pSrc = G.pSrc.join(","), G.oppoSrc = G.oppoSrc.join(","), G.titleInfo = G.titleInfo.join(","), G.subTitleInfo = G.subTitleInfo.join(","), G.priceInfo = G.priceInfo.join(","), G._priceInfo = G._priceInfo.join(","), G.saleInfo = G.saleInfo.join(","), G.subScriptSrc = G.subScriptSrc.join(","), G.subScript1Src = G.subScript1Src.join(","), G.subScript2Src = G.subScript2Src.join(","), G.subScript3Src = G.subScript3Src.join(","), G.subScript4Src = G.subScript4Src.join(","), G.erWeiMaSrc = G.erWeiMaSrc.join(","), G.readVal = G.readVal.join(","), G.titleAuto = G.titleAuto.join(","), G.priceAuto = G.priceAuto.join(","), G._priceAuto = G._priceAuto.join(","), G.saleAuto = G.saleAuto.join(","), G.pSrcPos = G.pSrcPos.join(","), G.oSrcPos = G.oSrcPos.join(","), G.expandText = G.expandText.join(","), G.expandTextSet = G.expandTextSet.join("|;|"), G.expandText1 = G.expandText1.join(","), G.expandText1Set = G.expandText1Set.join("|;|"), G.expandText2 = G.expandText2.join(","), G.expandText2Set = G.expandText2Set.join("|;|"), G.expandText3 = G.expandText3.join(","), G.expandText3Set = G.expandText3Set.join("|;|"), G.expandText4 = G.expandText4.join(","), G.expandText4Set = G.expandText4Set.join("|;|"), G.borderRadius = G.borderRadius1, hb = $.extend(!0, f, G), a.attr("data-config", JSON.stringify(hb)), f = b.toClear(hb), a.attr("appID", G.appID), a.html("").css({
						width: d.width(),
						height: d.height()
					}), ib = {
						titleTop: b.tParseInt(k.css("top")),
						titleLeft: b.tParseInt(k.css("left")),
						subTitleTop: b.tParseInt(l.css("top")),
						subTitleLeft: b.tParseInt(l.css("left")),
						prefixTop: b.tParseInt(m.css("top")),
						prefixLeft: b.tParseInt(m.css("left")),
						priceTop: b.tParseInt(n.css("top")),
						priceLeft: b.tParseInt(n.css("left")),
						_prefixTop: b.tParseInt(o.css("top")),
						_prefixLeft: b.tParseInt(o.css("left")),
						_priceTop: b.tParseInt(p.css("top")),
						_priceLeft: b.tParseInt(p.css("left")),
						salePrefixTop: b.tParseInt(q.css("top")),
						salePrefixLeft: b.tParseInt(q.css("left")),
						saleTop: b.tParseInt(r.css("top")),
						saleLeft: b.tParseInt(r.css("left")),
						btnTop: b.tParseInt(s.css("top")),
						btnLeft: b.tParseInt(s.css("left")),
						btnWidth: b.tParseInt(s.css("width")),
						btnHeight: b.tParseInt(s.css("height")),
						btn1Top: b.tParseInt(t.css("top")),
						btn1Left: b.tParseInt(t.css("left")),
						btn1Width: b.tParseInt(t.css("width")),
						btn1Height: b.tParseInt(t.css("height")),
						btn2Top: b.tParseInt(u.css("top")),
						btn2Left: b.tParseInt(u.css("left")),
						btn2Width: b.tParseInt(u.css("width")),
						btn2Height: b.tParseInt(u.css("height")),
						subScriptTop: b.tParseInt(v.css("top")),
						subScriptLeft: b.tParseInt(v.css("left")),
						subScriptWidth: b.tParseInt(v.css("width")),
						subScriptHeight: b.tParseInt(v.css("height")),
						subScript1Top: b.tParseInt(w.css("top")),
						subScript1Left: b.tParseInt(w.css("left")),
						subScript1Width: b.tParseInt(w.css("width")),
						subScript1Height: b.tParseInt(w.css("height")),
						subScript2Top: b.tParseInt(x.css("top")),
						subScript2Left: b.tParseInt(x.css("left")),
						subScript2Width: b.tParseInt(x.css("width")),
						subScript2Height: b.tParseInt(x.css("height")),
						subScript3Top: b.tParseInt(y.css("top")),
						subScript3Left: b.tParseInt(y.css("left")),
						subScript3Width: b.tParseInt(y.css("width")),
						subScript3Height: b.tParseInt(y.css("height")),
						subScript4Top: b.tParseInt(z.css("top")),
						subScript4Left: b.tParseInt(z.css("left")),
						subScript4Width: b.tParseInt(z.css("width")),
						subScript4Height: b.tParseInt(z.css("height")),
						erWeiMaTop: b.tParseInt(A.css("top")),
						erWeiMaLeft: b.tParseInt(A.css("left")),
						expandTextTop: b.tParseInt(B.css("top")),
						expandTextLeft: b.tParseInt(B.css("left")),
						expandText1Top: b.tParseInt(C.css("top")),
						expandText1Left: b.tParseInt(C.css("left")),
						expandText2Top: b.tParseInt(D.css("top")),
						expandText2Left: b.tParseInt(D.css("left")),
						expandText3Top: b.tParseInt(E.css("top")),
						expandText3Left: b.tParseInt(E.css("left")),
						expandText4Top: b.tParseInt(F.css("top")),
						expandText4Left: b.tParseInt(F.css("left"))
					}, jb = 0; jb < f.itemCount; jb++) kb = jb % f.itemColumn, lb = b.tParseInt(jb / f.itemColumn), mb = (f.sWidth + f.columnSpace) * kb, nb = (f.sHeight + f.mHeight + f.lineSpace) * lb, g.createAuto("jib", a, mb, nb, jb, ib);
					e(h, G.appID)
				}
			}, {
				appID: "",
				itemCount: "6",
				itemColumn: "3",
				columnSpace: "10",
				lineSpace: "10",
				itemMode: "ptitem",
				pptHref: "",
				pptCount: "0",
				readVal: "1,1,1,1,1,1",
				href: ",,,,,",
				hrefMode: "_blank",
				pSrc: "http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg,http://img03.taobaocdn.com/bao/uploaded/i4/TB1KxcCGXXXXXXAXFXXXXXXXXXX_!!0-item_pic.jpg",
				itemPicTemp: "",
				catchChoose: "1,1,1,1,1",
				pSrcPos: "1,1,1,1,1,1",
				oSrcPos: "2,2,2,2,2,2",
				pSrcSize: "240",
				pSrcSize1: "",
				oppoSrc: ",,,,,",
				mbncheck: "0",
				itemBgColor: "",
				sWidth: "240",
				sHeight: "240",
				oppoEffect: "none",
				oppoSpeed: "",
				bgColor: "",
				bgImage: "",
				mHeight: "60",
				panelArea: "no",
				oppoSwitch: "yes",
				titleSwitch: "yes",
				subTitleSwitch: "no",
				prefixSwitch: "yes",
				priceSwitch: "yes",
				_prefixSwitch: "yes",
				_priceSwitch: "yes",
				saleSwitch: "no",
				salePrefixSwitch: "no",
				btnSwitch: "yes",
				btn1Switch: "no",
				btn2Switch: "no",
				subScriptSwitch: "no",
				subScript1Switch: "no",
				subScript2Switch: "no",
				subScript3Switch: "no",
				subScript4Switch: "no",
				erWeiMaSwitch: "no",
				expandTextSwitch: "no",
				expandText1Switch: "no",
				expandText2Switch: "no",
				expandText3Switch: "no",
				expandText4Switch: "no",
				titleAuto: "0,0,0,0,0,0",
				priceAuto: "0,0,0,0,0,0",
				_priceAuto: "0,0,0,0,0,0",
				saleAuto: "0,0,0,0,0,0",
				titleInfo: ",,,,,",
				titleWidth: "212",
				titleHeight: "24",
				titleBgImage: "",
				titleBgColor: "#c70c66",
				titleColor: "#ffffff",
				titleAlign: "left",
				titleFont: "微软雅黑",
				titleSize: "12",
				titleWeight: "normal",
				titleLineHeight: "24",
				titleSpace: "",
				titleSpacing: "",
				subTitleInfo: ",,,,,",
				subTitleWidth: "212",
				subTitleHeight: "24",
				subTitleBgImage: "",
				subTitleBgColor: "#c70c66",
				subTitleColor: "#ffffff",
				subTitleAlign: "left",
				subTitleFont: "微软雅黑",
				subTitleSize: "12",
				subTitleWeight: "normal",
				subTitleLineHeight: "24",
				subTitleSpace: "",
				subTitleSpacing: "",
				prefixInfo: "原价 ￥",
				prefixColor: "#aaaaaa",
				prefixFont: "微软雅黑",
				prefixSize: "12",
				prefixWeight: "normal",
				prefixDecoration: "none",
				prefixSpacing: "",
				priceInfo: ",,,,,",
				priceColor: "#aaaaaa",
				priceFont: "微软雅黑",
				priceSize: "12",
				priceWeight: "normal",
				priceDecoration: "line-through",
				priceFixed: "2",
				priceAlign: "left",
				priceSpacing: "",
				_prefixInfo: "促销价 ￥",
				_prefixColor: "#d6075a",
				_prefixFont: "微软雅黑",
				_prefixSize: "12",
				_prefixWeight: "normal",
				_prefixSpacing: "",
				_priceInfo: ",,,,,",
				_priceColor: "#d6075a",
				_priceFont: "Times New Roman",
				_priceSize: "24",
				_priceWeight: "normal",
				_priceFixed: "2",
				_priceAlign: "left",
				_priceSpacing: "",
				salePrefixInfo: "已售出",
				salePrefixColor: "#666666",
				salePrefixFont: "微软雅黑",
				salePrefixSize: "12",
				salePrefixWeight: "normal",
				salePrefixSpacing: "",
				saleInfo: ",,,,,",
				saleColor: "#666666",
				saleFont: "微软雅黑",
				saleSize: "12",
				saleWeight: "normal",
				saleAlign: "left",
				saleSpacing: "",
				btnSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2QXHLbXXXXXbUXXXXXXXXXXXX-39767794.jpg",
				btnHoverSrc: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2EXHNbXXXXXbbXXXXXXXXXXXX-39767794.jpg",
				btnHoverMode: "bhm_btn",
				btnStyle: "june-box-fadeout",
				btnHoverStyle: "",
				btnHoverStyleX: "",
				btnHoverStyleY: "",
				btnHoverSpeed: "trans05s",
				btn1Src: "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2xCrJbXXXXXXfXpXXXXXXXXXX-39767794.jpg",
				btn1HoverSrc: "http://img04.taobaocdn.com/imgextra/i4/39767794/TB24h6MbXXXXXbbXXXXXXXXXXXX-39767794.jpg",
				btn1HoverMode: "bhm_btn",
				btn1Style: "june-box-fadeout",
				btn1HoverStyle: "none",
				btn1HoverStyleX: "",
				btn1HoverStyleY: "",
				btn1HoverSpeed: "trans05s",
				btn2Src: "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2Q2_IbXXXXXbvXpXXXXXXXXXX-39767794.jpg",
				btn2HoverSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Ps_KbXXXXXXmXpXXXXXXXXXX-39767794.jpg",
				btn2HoverMode: "bhm_btn",
				btn2Style: "june-box-fadeout",
				btn2HoverStyle: "none",
				btn2HoverStyleX: "",
				btn2HoverStyleY: "",
				btn2HoverSpeed: "trans05s",
				subScriptSrc: ",,,,,",
				subScript1Src: ",,,,,",
				subScript2Src: ",,,,,",
				subScript3Src: ",,,,,",
				subScript4Src: ",,,,,",
				expandText: ",,,,,",
				expandTextSet: "|;||;||;||;||;|",
				expandText1: ",,,,,",
				expandText1Set: "|;||;||;||;||;|",
				expandText2: ",,,,,",
				expandText2Set: "|;||;||;||;||;|",
				expandText3: ",,,,,",
				expandText3Set: "|;||;||;||;||;|",
				expandText4: ",,,,,",
				expandText4Set: "|;||;||;||;||;|",
				erWeiMaSrc: ",,,,,",
				erWeiMaSize: "45",
				mongoliaControl: "",
				mongoliaMode: "mcblack",
				borderControl: "",
				borderColor: "#000000",
				borderWidth: "1",
				borderRadius: "0",
				shadowControl: "",
				shadowLeft: "0",
				shadowTop: "0",
				shadowBlur: "5",
				shadowSize: "0",
				shadowColor: "#666666",
				shadowStyle: "",
				borderControl1: "",
				borderColor1: "#000000",
				borderWidth1: "1",
				borderRadius1: "0",
				shadowControl1: "",
				shadowLeft1: "0",
				shadowTop1: "0",
				shadowBlur1: "5",
				shadowSize1: "0",
				shadowColor1: "#666666",
				shadowStyle1: "",
				outlineControl: "",
				outlineWidth: "juneol",
				outlineSpeed: "trans02s",
				outlineColor: "#FFFFFF",
				outlineShadowColor: "#666666",
				childConfig: []
			}],
			jzdb: ['<div class="t-app" data-dblType="jzdb"></div>',
			{
				tTitle: "自定义内容区",
				tUrl: "zidingyi.php",
				tSubmit: function(a, c) {
					c.children(b.appOtherCls).html(a.customContent), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div>',
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.customContent,
						i = c.oveflowMode || "visible",
						j = c.tipText || "",
						k = "",
						l = "overflow:" + i + ";";
					return "hiddenXY" == i ? l = "overflow:scroll;" : "hiddenX" == i ? l = "overflow:hidden;overflow-x:scroll;" : "hiddenY" == i && (l = "overflow:hidden;overflow-y:scroll;"), "" != j && (k = ' title= "' + j + '"'), '<div class="jzdb abs ' + c.appID + '" data-appid="' + c.appID + '" data-brandid="' + c.appID + '"' + k + ' data-o="' + i + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + "px;" + l + "z-index:10;" + '">' + h + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var j, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.customContent = d.html(), h.oveflowMode = d.css("overflow"), d.attr("data-o") && (h.oveflowMode = d.attr("data-o")), j = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(j)), a.children(b.appOtherCls).html(f.customContent), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				customContent: "",
				tipText: "",
				oveflowMode: "visible"
			}],
			juneCustom: ['<div class="t-app junehtml abs" style="left:0;top:0;" data-dblType="juneCustom"></div>',
			{
				tTitle: "自定义HTML",
				codeExport: function(a) {
					a.tResize("destory");
					var b = a.prop("outerHTML");
					return a.tResize({
						tSwitch: !1
					}), b
				},
				codeImport: function(a) {
					var c = a.html(),
						d = require("scripts/action");
					c = c.replace(/ href\=\"/g, ' junehref="'), b.june.children(".junehtml").length <= 0 ? ($(b.appConfig["juneCustom"][0]).html(c).tResize({
						tSwitch: !1
					}).prependTo(b.june), b.june.children(".t-app-junebg").length > 0 && b.june.children(".t-app-junebg").prependTo(b.june)) : b.june.children(".junehtml").html(c), b.june.children(".junehtml").find("img").addClass("jhi-img"), d.create("junehtml", b.june.children(".junehtml")), b.autoJuneHeight()
				}
			}, {
				appID: ""
			}],
			jsfb: ['<div class="t-app" data-dblType="jsfb"></div>',
			{
				tTitle: "店铺分类",
				tUrl: "flset.php",
				tContent: "",
				tSubmit: function(a, c) {
					var j, l, m, n, o, p, q, r, s, u, v, w, z, x, y, A, d = require("scripts/drawDianPuFenLei"),
						e = $.extend([], a.catsArray),
						f = JSON.parse(c.attr("data-catsConfig") || "[]"),
						g = JSON.parse(c.attr("data-config") || "{}"),
						h = g.shopHref,
						i = a.shopHref,
						k = g.catsArray;
					if ("number" == typeof e[0]) for (l = 0; l < e.length; l++) e[l] += "";
					if ("/" != i.substr(-1) && (i += "/"), i = "https://" + i.replace(/http\:\/\//g, "").replace(/https\:\/\//g, ""), h = "https://" + h.replace(/http\:\/\//g, "").replace(/https\:\/\//g, ""), a.childConfig.length > 0 ? (j = $.extend({}, a.childConfig[0]), a.childConfig = []) : a.childConfig = [], c.attr("data-config", JSON.stringify(a)), m = b.equalsArray(e, k), (a.catsWidth != g.catsWidth || a.catsHeight != g.catsHeight || a.subCatsWidth != g.subCatsWidth || a.subCatsHeight != g.subCatsHeight) && (m = !1), a.isAct && (m = !1, delete a.isAct), h != i && (m = !1, c.attr("data-shopHref", i).attr("data-catsConfig", JSON.stringify(b.tempCatPost)), f = b.tempCatPost, b.tempCatPost = void 0, j = void 0), !m && f && f.length > 0) {
						for (c.children(b.appChildCls).addClass("jsfbchildd").hide(), d.getFormatPos("init", a), l = 0; l < f.length; l++) if (f[l] && (n = f[l].name, o = f[l].id, p = f[l].subCats, $.inArray(o, e) >= 0 && (d.creatChild(c, o, n), p && p.length > 0))) for (u = 0; u < p.length; u++) p[u] && (q = p[u].name, r = p[u].id, $.inArray(r, e) >= 0 && d.creatChild(c, r, q, !0));
						s = d.getFormatPos("maxGet"), c.width(s.width).height(s.height).tResize({
							tSwitch: !1
						})
					}
					v = c.children(b.appChildCls + ".jsfbchilda:not(.jsfbchildc)"), w = c.children(b.appChildCls + ".jsfbchildb:not(.jsfbchildc)"), v.css({
						backgroundColor: RGBToHex(a.characterBgColor, ""),
						fontSize: a.characterSize + "px",
						color: a.characterColor,
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						textAlign: a.characterAlign
					}), w.css({
						backgroundColor: RGBToHex(a.characterBgColor1, ""),
						fontSize: a.characterSize1 + "px",
						color: a.characterColor1,
						fontWeight: a.characterWeight1,
						fontFamily: a.characterFont1,
						textAlign: a.characterAlign1
					}), a.catsSpace && "" != a.catsSpace && ("left" == a.characterAlign ? (v.css({
						backgroundPosition: "top left"
					}), v.children(".jsfbText").css({
						paddingLeft: a.catsSpace + "px",
						right: "-" + a.catsSpace + "px"
					})) : "right" == a.characterAlign && (v.css({
						backgroundPosition: "top right"
					}), v.children(".jsfbText").css({
						paddingRight: a.catsSpace + "px",
						left: "-" + a.catsSpace + "px"
					}))), a.catsSpace1 && "" != a.catsSpace1 && ("left" == a.characterAlign1 ? (w.css({
						backgroundPosition: "top left"
					}), w.children(".jsfbText").css({
						paddingLeft: a.catsSpace1 + "px",
						right: "-" + a.catsSpace1 + "px"
					})) : "right" == a.characterAlign1 && (w.css({
						backgroundPosition: "top right"
					}), w.children(".jsfbText").css({
						paddingRight: a.catsSpace1 + "px",
						left: "-" + a.catsSpace1 + "px"
					}))), checkUrl(a.characterBgSrc) ? v.css({
						backgroundImage: "url(" + a.characterBgSrc + ")"
					}) : v.css({
						backgroundImage: "none"
					}), checkUrl(a.characterBgSrc1) ? w.css({
						backgroundImage: "url(" + a.characterBgSrc1 + ")"
					}) : w.css({
						backgroundImage: "none"
					}), j && (x = j.attachID, y = c.children(b.appChildCls + "[attachID='" + x + "']"), y.length > 0 && (z = JSON.parse(y.attr("data-attachConfig")), A = b.equals(j, z), A || (y.attr("data-attachConfig", JSON.stringify(j)).html('<span class="jsfbText">' + j.characterContent + "</span>").css({
						backgroundColor: RGBToHex(j.characterBgColor, ""),
						textAlign: j.characterAlign,
						fontSize: b.tParseInt(j.characterSize),
						lineHeight: y.height() + "px",
						fontWeight: j.characterWeight,
						fontFamily: j.characterFont,
						color: j.characterColor
					}).addClass("jsfbchildc").tResize(), j.catsSpace && "" != j.catsSpace && ("left" == j.characterAlign ? (y.css({
						backgroundPosition: "top left"
					}), y.children(".jsfbText").css({
						paddingLeft: j.catsSpace + "px",
						right: "-" + j.catsSpace + "px"
					})) : "right" == j.characterAlign && (y.css({
						backgroundPosition: "top right"
					}), y.children(".jsfbText").css({

						paddingRight: j.catsSpace + "px",
						left: "-" + j.catsSpace + "px"
					}))), checkUrl(j.characterBgSrc) ? y.css({
						backgroundImage: "url(" + j.characterBgSrc + ")"
					}) : y.css({
						backgroundImage: "none"
					}))))
				},
				tDynamic: '<div class="t-app-child jsfbchild" data-dblType="jsfb" data-attachType="jsfbChild"></div>',
				tDynamicConfig: {
					attachID: "",
					href: "#",
					hrefID: "",
					catsType: "",
					characterContent: ""
				},
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("left")),
						g = b.tParseInt(a.css("top")),
						h = a.attr("data-shopHref"),
						i = a.attr("data-formatName"),
						j = "";
					return h.indexOf("juneappcategory") >= 0 && (h = "https://shop%7b$shop.id%7d.taobao.com/"), a.children(b.appChildCls + ":not(.jsfbchildd)").each(function() {
						var I, a = $(this),
							d = a.width(),
							e = a.height(),
							f = b.tParseInt(a.css("left")),
							g = b.tParseInt(a.css("top")),
							i = JSON.parse(a.attr("data-attachConfig")),
							l = (h + "category-" + i.hrefID + ".htm", ""),
							m = "",
							o = "",
							p = "",
							q = "",
							r = "",
							s = "",
							t = "text-decoration: none;",
							u = "",
							v = "",
							w = "",
							x = "",
							y = "",
							z = i.characterContent,
							A = "",
							B = "",
							C = "",
							D = "",
							E = "",
							F = "",
							G = "top left",
							H = "";
						i.href && "" != i.href && (l = ' href="' + i.href + '"'), a.hasClass("jsfbchilda") && !a.hasClass("jsfbchildc") ? (c.characterDash && "on" == c.characterDash && (t = "text-decoration: line-through;"), c.catsSpace && "" != c.catsSpace && ("left" == c.characterAlign ? (y = "padding-left: " + b.tParseInt(c.catsSpace) + "px;right: -" + b.tParseInt(c.catsSpace) + "px;", G = "top left") : "right" == c.characterAlign && (y = "padding-right: " + b.tParseInt(c.catsSpace) + "px;left: -" + b.tParseInt(c.catsSpace) + "px;", G = "top right")), "on" == c.characterHoverMode && (u = "jspb ", w = " " + c.characterHoverSpeed + " june-box-fadein", x = " " + c.characterHoverSpeed + " june-box-fadeout", I = 0, c.characterUnderLine && "on" == c.characterUnderLine && (I = c.characterUnderLineWeight, m = "border-bottom: " + I + "px " + c.characterUnderLineStyle + " " + RGBToHex(c.characterUnderLineColor)), c.characterBgColorHover = RGBToHex(c.characterBgColorHover, ""), "" != c.characterBgColorHover && (C = "background-color:" + c.characterBgColorHover + ";"), c.characterColorHover = RGBToHex(c.characterColorHover, ""), "" != c.characterColorHover && (D = "color:" + c.characterColorHover + ";"), "" != c.characterFontHover && (E = "font-family:" + c.characterFontHover + ";"), "" != c.characterWeightHover && (F = "font-weight:" + c.characterWeightHover + ";"), "" != c.characterSizeHover && (H = "font-size:" + b.tParseInt(c.characterSizeHover) + "px;"), checkUrl(c.characterBgSrcHover) && (B = "background:url(" + c.characterBgSrcHover + ") " + G + " no-repeat;"), v = '<a class="abs' + w + '"' + l + ' target="' + c.hrefMode + '" style="display:block;width:' + d + "px;height:" + (e - I) + "px;line-height:" + e + "px;" + y + B + C + D + E + F + H + t + m + '">' + z + "</a>"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (o = "background-color:" + c.characterBgColor + ";"), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (p = "color:" + c.characterColor + ";"), "" != c.characterFont && (q = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (r = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && (s = "font-size:" + b.tParseInt(c.characterSize) + "px;"), checkUrl(c.characterBgSrc) && (A = "background:url(" + c.characterBgSrc + ") " + G + " no-repeat;"), j += '<div class="jsfbchild jsfbchilda abs ' + u + '" data-catsType="' + i.catsType + '" data-catsID="' + i.hrefID + '" style="overflow:hidden;text-align:' + c.characterAlign + ";width:" + d + "px;height:" + e + "px;top:" + g + "px;left:" + f + 'px;z-index:10;"><a class="abs' + x + '"' + l + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + y + A + o + p + q + r + s + t + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + z + "</a>" + v + "</div>") : a.hasClass("jsfbchildb") && !a.hasClass("jsfbchildc") ? (c.characterDash1 && "on" == c.characterDash1 && (t = "text-decoration: line-through;"), c.catsSpace1 && "" != c.catsSpace1 && ("left" == c.characterAlign1 ? (y = "padding-left: " + b.tParseInt(c.catsSpace1) + "px;right: -" + b.tParseInt(c.catsSpace1) + "px;", G = "top left") : "right" == c.characterAlign1 && (y = "padding-right: " + b.tParseInt(c.catsSpace1) + "px;left: -" + b.tParseInt(c.catsSpace1) + "px;", G = "top right")), "on" == c.characterHoverMode1 && (u = "jspb ", w = " " + c.characterHoverSpeed1 + " june-box-fadein", x = " " + c.characterHoverSpeed1 + " june-box-fadeout", I = 0, c.characterUnderLine1 && "on" == c.characterUnderLine1 && (I = c.characterUnderLineWeight1, m = "border-bottom: " + I + "px " + c.characterUnderLineStyle1 + " " + RGBToHex(c.characterUnderLineColor1)), c.characterBgColorHover1 = RGBToHex(c.characterBgColorHover1, ""), "" != c.characterBgColorHover1 && (C = "background-color:" + c.characterBgColorHover1 + ";"), c.characterColorHover1 = RGBToHex(c.characterColorHover1, ""), "" != c.characterColorHover1 && (D = "color:" + c.characterColorHover1 + ";"), "" != c.characterFontHover1 && (E = "font-family:" + c.characterFontHover1 + ";"), "" != c.characterWeightHover1 && (F = "font-weight:" + c.characterWeightHover1 + ";"), "" != c.characterSizeHover1 && (H = "font-size:" + b.tParseInt(c.characterSizeHover1) + "px;"), checkUrl(c.characterBgSrcHover1) && (B = "background:url(" + c.characterBgSrcHover1 + ") " + G + " no-repeat;"), v = '<a class="abs' + w + '"' + l + ' target="' + c.hrefMode1 + '" style="display:block;width:' + d + "px;height:" + (e - I) + "px;line-height:" + e + "px;" + y + B + C + D + E + F + H + t + m + '">' + z + "</a>"), c.characterBgColor1 = RGBToHex(c.characterBgColor1, ""), "" != c.characterBgColor1 && (o = "background-color:" + c.characterBgColor1 + ";"), c.characterColor1 = RGBToHex(c.characterColor1, ""), "" != c.characterColor1 && (p = "color:" + c.characterColor1 + ";"), "" != c.characterFont1 && (q = "font-family:" + c.characterFont1 + ";"), "" != c.characterWeight1 && (r = "font-weight:" + c.characterWeight1 + ";"), "" != c.characterSize1 && (s = "font-size:" + b.tParseInt(c.characterSize1) + "px;"), checkUrl(c.characterBgSrc1) && (A = "background:url(" + c.characterBgSrc1 + ") " + G + " no-repeat;"), j += '<div class="jsfbchild jsfbchildb abs ' + u + '" data-catsType="' + i.catsType + '" data-catsID="' + i.hrefID + '" style="overflow:hidden;text-align:' + c.characterAlign1 + ";width:" + d + "px;height:" + e + "px;top:" + g + "px;left:" + f + 'px;z-index:10;"><a class="abs' + x + '"' + l + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + y + A + o + p + q + r + s + t + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + z + "</a>" + v + "</div>") : a.hasClass("jsfbchildc") && (i.characterDash && "on" == i.characterDash && (t = "text-decoration: line-through;"), i.catsSpace && "" != i.catsSpace && ("left" == i.characterAlign ? (y = "padding-left: " + b.tParseInt(i.catsSpace) + "px;right: -" + b.tParseInt(i.catsSpace) + "px;", G = "top left") : "right" == i.characterAlign && (y = "padding-right: " + b.tParseInt(i.catsSpace) + "px;left: -" + b.tParseInt(i.catsSpace) + "px;", G = "top right")), "on" == i.characterHoverMode && (u = "jspb ", w = " " + i.characterHoverSpeed + " june-box-fadein", x = " " + i.characterHoverSpeed + " june-box-fadeout", I = 0, i.characterUnderLine && "on" == i.characterUnderLine && (I = i.characterUnderLineWeight, m = "border-bottom: " + I + "px " + i.characterUnderLineStyle + " " + RGBToHex(i.characterUnderLineColor)), i.characterBgColorHover = RGBToHex(i.characterBgColorHover, ""), "" != i.characterBgColorHover && (C = "background-color:" + i.characterBgColorHover + ";"), i.characterColorHover = RGBToHex(i.characterColorHover, ""), "" != i.characterColorHover && (D = "color:" + i.characterColorHover + ";"), "" != i.characterFontHover && (E = "font-family:" + i.characterFontHover + ";"), "" != i.characterWeightHover && (F = "font-weight:" + i.characterWeightHover + ";"), "" != i.characterSizeHover && (H = "font-size:" + b.tParseInt(i.characterSizeHover) + "px;"), checkUrl(i.characterBgSrcHover) && (B = "background:url(" + i.characterBgSrcHover + ") " + G + " no-repeat;"), v = '<a class="abs' + w + '"' + l + ' target="' + i.hrefMode + '" style="display:block;width:' + d + "px;height:" + (e - I) + "px;line-height:" + e + "px;" + y + B + C + D + E + F + H + t + m + '">' + z + "</a>"), i.characterBgColor = RGBToHex(i.characterBgColor, ""), "" != i.characterBgColor && (o = "background-color:" + i.characterBgColor + ";"), i.characterColor = RGBToHex(i.characterColor, ""), "" != i.characterColor && (p = "color:" + i.characterColor + ";"), "" != i.characterFont && (q = "font-family:" + i.characterFont + ";"), "" != i.characterWeight && (r = "font-weight:" + i.characterWeight + ";"), "" != i.characterSize && (s = "font-size:" + b.tParseInt(i.characterSize) + "px;"), checkUrl(i.characterBgSrc) && (A = "background:url(" + i.characterBgSrc + ") " + G + " no-repeat;"), j += '<div class="jsfbchild jsfbchildc abs ' + u + '" data-catsType="' + i.catsType + '" data-catsID="' + i.hrefID + '" style="overflow:hidden;text-align:' + i.characterAlign + ";width:" + d + "px;height:" + e + "px;top:" + g + "px;left:" + f + 'px;z-index:10;"><a class="abs' + x + '"' + l + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + y + A + o + p + q + r + s + t + 'letter-spacing:0px;" target="' + i.hrefMode + '">' + z + "</a>" + v + "</div>")
					}), "" == c.catsWidth && (c.catsWidth = 0), "" == c.catsHeight && (c.catsHeight = 0), "" == c.subCatsWidth && (c.subCatsWidth = 0), "" == c.subCatsHeight && (c.subCatsHeight = 0), '<div class="jsfb abs" data-shopHref="' + h + '" data-t="' + c.catsWidth + ";" + c.catsHeight + ";" + c.subCatsWidth + ";" + c.subCatsHeight + '" data-fname="' + i + '" style="top:' + g + "px;left:" + f + "px;width:" + d + "px;height:" + e + 'px;z-index:10;">' + j + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var i, j, o, f = JSON.parse(a.attr("data-config")),
						g = require("scripts/drawDianPuFenLei"),
						h = a.attr("data-dblType"),
						l = d.attr("data-t") || "0;0;0;0",
						m = [],
						n = {};
					n.catsArray = [], n.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), m = l.split(";"), n.formatName = d.attr("data-fname"), n.catsWidth = m[0], n.catsHeight = m[1], n.subCatsWidth = m[2], n.subCatsHeight = m[3], n.shopHref = d.attr("data-shopHref") || "", ("/" == n.shopHref || n.shopHref.indexOf("shop.id") >= 0) && (n.shopHref = "juneappcategory"), a.attr("data-shopHref", d.attr("data-shopHref")), a.attr("data-formatName", n.formatName), g.getFormatPos("init", f), d.children(".jsfbchilda").length > 0 && (i = d.children(".jsfbchilda:not(.jsfbchildc)").length > 0 ? d.children(".jsfbchilda:not(.jsfbchildc)").eq(0) : d.children(".jsfbchilda").eq(0), n.hrefMode = i.children("a:eq(0)").attr("target"), n.characterBgSrc = i.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterAlign = i.css("text-align") || "left", n.characterSize = i.children("a:eq(0)").css("font-size").replace(/px/g, ""), n.characterFont = i.children("a:eq(0)").css("font-family").replace(/'/g, ""), n.characterColor = RGBToHex(i.children("a:eq(0)").css("color")), n.characterBgColor = RGBToHex(i.children("a:eq(0)").css("background-color"), ""), n.characterWeight = i.children("a:eq(0)").css("font-weight"), "400" == n.characterWeight && (n.characterWeight = "normal"), n.characterDash = "off", n.catsSpace = "left" == n.characterAlign ? Math.abs(b.tParseInt(i.children("a:eq(0)").css("right"))) : "right" == n.characterAlign ? Math.abs(b.tParseInt(i.children("a:eq(0)").css("left"))) : "", i.children("a").length > 1 && (n.characterUnderLine = "off", n.characterHoverMode = "on", n.characterHoverSpeed = i.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), n.characterHoverSpeed = n.characterHoverSpeed && n.characterHoverSpeed.length > 0 ? n.characterHoverSpeed.join("") : "", n.characterBgSrcHover = i.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterSizeHover = i.children("a:eq(1)").css("font-size").replace(/px/g, ""), n.characterFontHover = i.children("a:eq(1)").css("font-family").replace(/'/g, ""), n.characterColorHover = RGBToHex(i.children("a:eq(1)").css("color")), n.characterBgColorHover = RGBToHex(i.children("a:eq(1)").css("background-color"), ""), n.characterWeightHover = i.children("a:eq(1)").css("font-weight"), "400" == n.characterWeightHover && (n.characterWeightHover = "normal"), n.characterUnderLineWeight = i.children("a:eq(0)").height() - i.children("a:eq(1)").height(), 0 != n.characterUnderLineWeight ? (n.characterUnderLine = "on", n.characterUnderLineStyle = i.children("a:eq(1)").css("border-bottom-style"), n.characterUnderLineColor = RGBToHex(i.children("a:eq(1)").css("border-bottom-color")), n.characterUnderLineWeight += "") : n.characterUnderLineWeight = "1"), "line-through" == i.children("a:eq(0)").css("text-decoration") && (n.characterDash = "on")), d.children(".jsfbchildb").length > 0 && (j = d.children(".jsfbchildb:not(.jsfbchildc)").length > 0 ? d.children(".jsfbchildb:not(.jsfbchildc)").eq(0) : d.children(".jsfbchildb").eq(0), n.hrefMode1 = j.children("a:eq(0)").attr("target"), n.characterBgSrc1 = j.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterAlign1 = j.css("text-align") || "left", n.characterSize1 = j.children("a:eq(0)").css("font-size").replace(/px/g, ""), n.characterFont1 = j.children("a:eq(0)").css("font-family").replace(/'/g, ""), n.characterColor1 = RGBToHex(j.children("a:eq(0)").css("color")), n.characterBgColor1 = RGBToHex(j.children("a:eq(0)").css("background-color"), ""), n.characterWeight1 = j.children("a:eq(0)").css("font-weight"), "400" == n.characterWeight1 && (n.characterWeight1 = "normal"), n.characterDash1 = "off", n.catsSpace1 = "left" == n.characterAlign1 ? Math.abs(b.tParseInt(j.children("a:eq(0)").css("right"))) : "right" == n.characterAlign1 ? Math.abs(b.tParseInt(j.children("a:eq(0)").css("left"))) : "", j.children("a").length > 1 && (n.characterUnderLine1 = "off", n.characterHoverMode1 = "on", n.characterHoverSpeed1 = j.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), n.characterHoverSpeed1 = n.characterHoverSpeed1 && n.characterHoverSpeed1.length > 0 ? n.characterHoverSpeed1.join("") : "", n.characterBgSrcHover1 = j.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterSizeHover1 = j.children("a:eq(1)").css("font-size").replace(/px/g, ""), n.characterFontHover1 = j.children("a:eq(1)").css("font-family").replace(/'/g, ""), n.characterColorHover1 = RGBToHex(j.children("a:eq(1)").css("color")), n.characterBgColorHover1 = RGBToHex(j.children("a:eq(1)").css("background-color"), ""), n.characterWeightHover1 = j.children("a:eq(1)").css("font-weight"), "400" == n.characterWeightHover1 && (n.characterWeightHover1 = "normal"), n.characterUnderLineWeight1 = j.children("a:eq(0)").height() - j.children("a:eq(1)").height(), 0 != n.characterUnderLineWeight1 ? (n.characterUnderLine1 = "on", n.characterUnderLineStyle1 = j.children("a:eq(1)").css("border-bottom-style"), n.characterUnderLineColor1 = RGBToHex(j.children("a:eq(1)").css("border-bottom-color")), n.characterUnderLineWeight1 += "") : n.characterUnderLineWeight1 = "1"), "line-through" == j.children("a:eq(0)").css("text-decoration") && (n.characterDash1 = "on")), o = $.extend(f, n), a.attr("data-config", JSON.stringify(o)), a.attr("appID", n.appID), d.children(".jsfbchild").each(function() {
						var e, f, h, c = $(this),
							d = {};
						d.href = c.children("a:eq(0)").attr("href") || "", d.catsType = c.attr("data-catsType") || "b", d.hrefID = c.attr("data-catsID") || "", d.hrefMode = c.children("a:eq(0)").attr("target"), d.characterBgSrc = c.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.characterAlign = c.css("text-align") || "left", d.characterContent = c.children("a:eq(0)").html(), d.characterSize = c.children("a:eq(0)").css("font-size").replace(/px/g, ""), d.characterFont = c.children("a:eq(0)").css("font-family").replace(/'/g, ""), d.characterColor = RGBToHex(c.children("a:eq(0)").css("color")), d.characterBgColor = RGBToHex(c.children("a:eq(0)").css("background-color"), ""), d.characterWeight = c.children("a:eq(0)").css("font-weight"), "400" == d.characterWeight && (n.characterWeight = "normal"), d.characterDash = "off", d.catsSpace = "left" == d.characterAlign ? Math.abs(b.tParseInt(c.children("a:eq(0)").css("right"))) : "right" == d.characterAlign ? Math.abs(b.tParseInt(c.children("a:eq(0)").css("left"))) : "", c.children("a").length > 1 && (d.characterUnderLine = "off", d.characterHoverMode = "on", d.characterHoverSpeed = c.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), d.characterHoverSpeed && d.characterHoverSpeed.length > 0 ? d.characterHoverSpeed = d.characterHoverSpeed.join("") : n.characterHoverSpeed = "", d.characterBgSrcHover = c.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.characterSizeHover = c.children("a:eq(1)").css("font-size").replace(/px/g, ""), d.characterFontHover = c.children("a:eq(1)").css("font-family").replace(/'/g, ""), d.characterColorHover = RGBToHex(c.children("a:eq(1)").css("color")), d.characterBgColorHover = RGBToHex(c.children("a:eq(1)").css("background-color"), ""), d.characterWeightHover = c.children("a:eq(1)").css("font-weight"), "400" == d.characterWeightHover && (n.characterWeightHover = "normal"), d.characterUnderLineWeight = c.children("a:eq(0)").height() - c.children("a:eq(1)").height(), 0 != d.characterUnderLineWeight ? (d.characterUnderLine = "on", d.characterUnderLineStyle = c.children("a:eq(1)").css("border-bottom-style"), d.characterUnderLineColor = RGBToHex(c.children("a:eq(1)").css("border-bottom-color")), d.characterUnderLineWeight += "") : d.characterUnderLineWeight = "1"), "line-through" == c.children("a:eq(0)").css("text-decoration") && (n.characterDash = "on"), e = d.characterContent, f = g.creatChild(a, d.hrefID, e, "b" == d.catsType), h = JSON.parse(f.attr("data-attachConfig")), f.css({
							width: c.width(),
							height: c.height(),
							top: c.css("top"),
							left: c.css("left"),
							backgroundColor: RGBToHex(d.characterBgColor, ""),
							textAlign: d.characterAlign,
							fontSize: b.tParseInt(d.characterSize),
							lineHeight: c.height() + "px",
							fontWeight: d.characterWeight,
							fontFamily: d.characterFont,
							color: d.characterColor
						}), c.hasClass("jsfbchildc") && f.addClass("jsfbchildc").attr("data-attachConfig", JSON.stringify($.extend({}, h, d))), d.catsSpace && "" != d.catsSpace && ("left" == d.characterAlign ? (f.css({
							backgroundPosition: "top left"
						}), f.children(".jsfbText").css({
							paddingLeft: d.catsSpace + "px",
							right: "-" + d.catsSpace + "px"
						})) : "right" == d.characterAlign && (f.css({
							backgroundPosition: "top right"
						}), f.children(".jsfbText").css({
							paddingRight: d.catsSpace + "px",
							left: "-" + d.catsSpace + "px"
						}))), checkUrl(d.characterBgSrc) ? f.css({
							backgroundImage: "url(" + d.characterBgSrc + ")"
						}) : f.css({
							backgroundImage: "none"
						})
					}), e(h, n.appID)
				}
			}, {
				appID: "",
				shopHref: "",
				hrefMode: "_blank",
				characterBgSrc: "",
				characterBgSrcHover: "",
				characterAlign: "center",
				characterSize: "12",
				characterWeight: "bold",
				characterFont: "宋体",
				characterColor: "#000000",
				characterBgColor: "",
				characterDash: "off",
				characterHoverMode: "off",
				characterHoverSpeed: "",
				characterSizeHover: "12",
				characterWeightHover: "normal",
				characterFontHover: "宋体",
				characterColorHover: "#000000",
				characterBgColorHover: "",
				characterUnderLine: "off",
				characterUnderLineStyle: "solid",
				characterUnderLineWeight: "1",
				characterUnderLineColor: "#000000",
				formatName: "hb1",
				catsWidth: "100",
				catsHeight: "30",
				catsSpace: "",
				subCatsWidth: "100",
				subCatsHeight: "30",
				catsSpace1: "",
				hrefMode1: "_blank",
				characterBgSrc1: "",
				characterBgSrcHover1: "",
				characterAlign1: "center",
				characterSize1: "12",
				characterWeight1: "normal",
				characterFont1: "宋体",
				characterColor1: "#000000",
				characterBgColor1: "",
				characterDash1: "off",
				characterHoverMode1: "off",
				characterHoverSpeed1: "",
				characterSizeHover1: "12",
				characterWeightHover1: "normal",
				characterFontHover1: "宋体",
				characterColorHover1: "#000000",
				characterBgColorHover1: "",
				characterUnderLine1: "off",
				characterUnderLineStyle1: "solid",
				characterUnderLineWeight1: "1",
				characterUnderLineColor1: "#000000",
				catsArray: [],
				childConfig: []
			}],
			jadb: ['<div class="t-app" data-dblType="jadb" data-direction="right" data-multi="no" data-hidePanel="no" data-titleUnity="yes" data-panelUnity="yes"></div>',
			{
				tTitle: "手风琴设置",
				tUrl: "accordion.php",
				tSubmit: function(a, c, d) {
					var j, k, m, n, o, p, q, r, s, t, u, v, w, x, e = a.adDirection,
						f = c.attr("data-direction"),
						g = c.attr("data-gSpace") || "",
						h = !1,
						i = a.adActive,
						l = [];
					for ("" != a.tWidth && $.isNumeric(a.tWidth) && (c.children(".t-jadb-title").width(a.tWidth), a.tWidth = ""), "" != a.tHeight && $.isNumeric(a.tHeight) && (c.children(".t-jadb-title").height(a.tHeight), a.tHeight = ""), "" != a.pWidth && $.isNumeric(a.pWidth) && (c.children(".t-jadb-panel").width(a.pWidth), a.pWidth = ""), "" != a.pHeight && $.isNumeric(a.pHeight) && (c.children(".t-jadb-panel").height(a.pHeight), a.pHeight = ""), "yes" == a.adMode && (a.adHideMode = "no"), g == a.gSpace && (h = !0), a.gSpace && "" != a.gSpace && c.attr("data-gSpace", a.gSpace), c.children(".t-jadb-title").each(function(a) {
						l[a] = {};
						var d = $(this),
							e = c.children(".t-jadb-panel:eq(" + a + ")");
						l[a].tWidth = d.width(), l[a].tHeight = d.height(), l[a].pWidth = e.width(), l[a].pHeight = e.height()
					}), f != e ? (c.removeClass("t-jadb-left t-jadb-right t-jadb-up t-jadb-down"), c.addClass("t-jadb-" + e), b.posForAccordion(c, e, a.nestConfig.length), c.attr("data-direction", e)) : a.nestConfig.length == c.children(".t-jadb-title").length && h || b.posForAccordion(c, e, a.nestConfig.length), k = c.children(".t-jadb-panel:eq(" + (b.tParseInt(i) - 1) + ")"), j = k.prev(), ("down" == e || "right" == e) && (j = k.next()), m = 0; m < a.nestConfig.length; m++) n = a.nestConfig[m], o = c.children(".t-jadb-title:eq(" + m + ")"), p = c.children(".t-jadb-panel:eq(" + m + ")"), q = l[m], r = l[0].tWidth, s = l[0].tHeight, t = l[0].pWidth, u = l[0].pHeight, q && (r = q.tWidth, s = q.tHeight, t = q.pWidth, u = q.pHeight), "imgContent" == n.cType ? checkUrl(n.pSrc) ? o.css({
						backgroundImage: "url(" + n.pSrc + ")"
					}).html(b.appMongolia) : o.css({
						backgroundImage: "none"
					}).html("标题" + b.appMongolia) : "textContent" == n.cType ? (v = n.textContent, w = o.height(), "" == v && (v = "标题"), ("left" == e || "right" == e) && (w = 30, v = v.split("").join("<br>")), o.css({
						backgroundImage: "none",
						backgroundColor: RGBToHex(n.characterBgColor, ""),
						textAlign: n.characterAlign,
						fontSize: b.tParseInt(n.characterSize),
						lineHeight: w + "px",
						fontWeight: n.characterWeight,
						fontFamily: n.characterFont,
						color: n.characterColor
					}).html(v + b.appMongolia)) : "customContent" == n.cType && o.css({
						backgroundImage: "none"
					}).html(n.cContent + b.appMongolia), "imgContent" == n.cType1 ? checkUrl(n.pSrc1) ? p.css({
						backgroundImage: "url(" + n.pSrc1 + ")"
					}).html(b.appMongolia) : p.css({
						backgroundImage: "none"
					}).html(b.appMongolia) : "customContent" == n.cType1 && p.css({
						backgroundImage: "none"
					}).html(n.cContent1 + b.appMongolia), d ? (o.width(r).height(s), p.width(t).height(u)) : ("left" != f && "right" != f || "left" != e && "right" != e) && ("up" != f && "down" != f || "up" != e && "down" != e) ? (o.width(s).height(r), p.width(u).height(t)) : (o.width(r).height(s), p.width(t).height(u));
					j.length < 1 && (j = c.children(".t-jadb-title:eq(0)")), c.attr("data-multi", a.adMode), c.attr("data-hidePanel", a.adHideMode), c.attr("data-titleUnity", a.titleUnity), c.attr("data-panelUnity", a.panelUnity), x = !1, "yes" == a.adMode && (x = !0), b.clickForAccordion(j, x), c.attr("data-config", JSON.stringify(a)), c.children().tResize({
						tHandles: "e,se,s"
					})
				},
				tContent: "",
				tDynamic: '<div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle">标题</div><div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel"></div>',
				tDynamic1: '<div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel"></div><div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle">标题</div>',
				tDynamicConfig: {
					cType: "imgContent",
					pSrc: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2xTYXbXXXXXcRXXXXXXXXXXXX-39767794.jpg",
					href: "#",
					hrefMode: "_blank",
					textContent: "",
					characterAlign: "center",
					characterColor: "#000000",
					characterSize: "14",
					characterWeight: "normal",
					characterFont: "微软雅黑",
					characterBgColor: "#FFFFFF",
					cContent: "",
					cTypeBH: "imgContentBH",
					pSrcBH: "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2xTYXbXXXXXcRXXXXXXXXXXXX-39767794.jpg",
					hrefBH: "#",
					hrefModeBH: "_blank",
					textContentBH: "",
					characterAlignBH: "center",
					characterColorBH: "#000000",
					characterSizeBH: "14",
					characterWeightBH: "normal",
					characterFontBH: "微软雅黑",
					characterBgColorBH: "#FFFFFF",
					cContentBH: "",
					cType1: "imgContent",
					pSrc1: "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2S.zbbXXXXXbxXXXXXXXXXXXX-39767794.jpg",
					href1: "#",
					hrefMode1: "_blank",
					cContent1: ""
				},
				codeExport: function(a) {
					var q, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.nestConfig,
						i = c.adDirection,
						j = "false",
						k = ", 'activeTriggerCls': '",
						l = 1,
						m = "",
						n = "",
						o = "",
						p = "",
						r = "",
						s = "width:" + d + "px;";
					for ("yes" == c.adMode ? j = "true" : ("yes" == c.adHideMode && (k += " hidden"), l = b.tParseInt(c.adActive)), c.gSpace && "" != c.gSpace && (t = i, "up" == i ? t = "top" : "down" == i && (t = "bottom"), m = "margin-" + t + ":" + b.tParseInt(c.gSpace) + "px;"), ("left" == i || "right" == i) && (p = "float:left;", s = "width: 9999px;"), "yes" == c.titleBHControl && (k += " dianquanka control-group j-a"), u = 0; u < h.length; u++) v = h[u], w = "", x = "", y = "", z = "", A = "", B = "", C = "", D = a.children(".t-jadb-title:eq(" + u + ")"), E = a.children(".t-jadb-panel:eq(" + u + ")"), F = D.width(), G = D.height(), H = E.width(), I = E.height(), u == h.length - 1 && (o = " last-trigger", r = " last-panel"), J = "", u == l - 1 ? (q = "", "yes" == c.adHideMode && (J = " hidden"), "yes" == c.titleBHControl && (J += " dianquanka control-group j-a")) : q = "display:none;", "yes" == c.adMode && (q = E.is(":hidden") ? "display:none;" : ""), LevelClassBH = p, K = ' class="ks-switchable-trigger' + o + J + '"', L = "", M = "", N = m, "yes" == c.titleBHControl && (O = "", P = "", L = '<div class="ks-switchable-trigger' + o + J + '" style="' + LevelClassBH + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + N + '">', M = "</div>", p = "", N = "", K = ' class="chn-link-dianquanka split a-2"', "imgContentBH" == v.cTypeBH ? (checkUrl(v.pSrcBH) && (O = "background:url(" + v.pSrcBH + ") center center no-repeat;"), c.adTrigger && "mouse" == c.adTrigger && "" != v.hrefBH && (P = ' href="' + v.hrefBH + '" target="' + v.hrefModeBH + '"'), C = '<div data-a="' + v.cTypeBH + '" style="overflow:hidden;outline:none;width:' + F + "px;height:" + G + "px;" + O + '"><a' + P + ' style="width:' + F + "px;height:" + G + 'px;display:block;"></a></div>') : "textContentBH" == v.cTypeBH ? (Q = "", R = "", S = "", T = "", U = "", V = v.textContentBH, W = "line-height:" + G + "px", v.characterBgColorBH = RGBToHex(v.characterBgColorBH, ""), "" != v.characterBgColorBH && (R = "background-color:" + v.characterBgColorBH + ";"), v.characterColorBH = RGBToHex(v.characterColorBH, ""), "" != v.characterColorBH && (Q = "color:" + v.characterColorBH + ";"), "" != v.characterFontBH && (S = "font-family:" + v.characterFontBH + ";"), "" != v.characterWeightBH && (T = "font-weight:" + v.characterWeightBH + ";"), "" != v.characterSizeBH && (U = "font-size:" + b.tParseInt(v.characterSizeBH) + "px;"), ("left" == i || "right" == i) && (W = "line-height:30px", V = V.split("").join("<br>")), "mouse" == c.adTrigger && "" != v.hrefBH && (P = ' href="' + v.hrefBH + '" target="' + v.hrefModeBH + '"'), C = '<div data-a="' + v.cTypeBH + '" style="overflow:hidden;outline:none;width:' + F + "px;height:" + G + "px;text-align:" + v.characterAlignBH + ';"><a' + P + ' style="width:' + R + F + "px;height:" + G + "px;" + Q + S + T + U + W + 'px;display:block;">' + V + "</a></div>") : "customContentBH" == v.cTypeBH && (C = '<div data-a="' + v.cTypeBH + '" style="overflow:hidden;outline:none;width:' + F + "px;height:" + G + 'px;">' + v.cContentBH + "</div>")), "imgContent" == v.cType ? (checkUrl(v.pSrc) && (y = "background:url(" + v.pSrc + ") center center no-repeat;"), c.adTrigger && "mouse" == c.adTrigger && "" != v.href && (A = ' href="' + v.href + '" target="' + v.hrefMode + '"'), w = L + "<div" + K + ' data-a="' + v.cType + '" style="' + p + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + y + N + '">' + "<a" + A + ' style="width:' + F + "px;height:" + G + 'px;display:block;"></a>' + "</div>" + C + M) : "textContent" == v.cType ? (X = "", Y = "", Z = "", $ = "", _ = "", ab = v.textContent, bb = "line-height:" + G + "px", v.characterBgColor = RGBToHex(v.characterBgColor, ""), "" != v.characterBgColor && (Y = "background-color:" + v.characterBgColor + ";"), v.characterColor = RGBToHex(v.characterColor, ""), "" != v.characterColor && (X = "color:" + v.characterColor + ";"), "" != v.characterFont && (Z = "font-family:" + v.characterFont + ";"), "" != v.characterWeight && ($ = "font-weight:" + v.characterWeight + ";"), "" != v.characterSize && (_ = "font-size:" + b.tParseInt(v.characterSize) + "px;"), ("left" == i || "right" == i) && (bb = "line-height:30px", ab = ab.split("").join("<br>")), "mouse" == c.adTrigger && "" != v.href && (A = ' href="' + v.href + '" target="' + v.hrefMode + '"'), w = L + "<div" + K + ' data-a="' + v.cType + '" style="' + p + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + N + "text-align:" + v.characterAlign + ";" + Y + '">' + "<a" + A + ' style="width:' + F + "px;height:" + G + "px;" + X + Z + $ + _ + bb + 'px;display:block;">' + ab + "</a>" + "</div>" + C + M) : "customContent" == v.cType && (w = L + "<div" + K + ' data-a="' + v.cType + '" style="' + p + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + N + '">' + v.cContent + "</div>" + C + M), p = LevelClassBH, "imgContent" == v.cType1 ? (checkUrl(v.pSrc1) && (z = "background:url(" + v.pSrc1 + ") center center no-repeat;"), "" != v.href1 && (B = ' href="' + v.href1 + '" target="' + v.hrefMode1 + '"'), x = '<div class="ks-switchable-panel' + r + '" data-a="' + v.cType1 + '" style="' + q + p + "overflow:hidden;width:" + H + "px;height:" + I + "px;" + z + '"><a' + B + ' style="width:' + H + "px;height:" + I + 'px;display:block;"></a></div>') : "customContent" == v.cType1 && (x = '<div class="ks-switchable-panel' + r + '" data-a="' + v.cType1 + '" style="' + q + p + "overflow:hidden;width:" + H + "px;height:" + I + 'px;">' + v.cContent1 + "</div>"), n += "up" == i || "left" == i ? w + x : x + w;
					return ", 'activeTriggerCls': '" == k ? k = "" : k += "'", cb = "", c.adPlay && "yes" == c.adPlay && (cb = ",'autoplay':true,'interval':" + (c.adTime || 4)), '<div class="jadb abs J_TWidget" data-widget-type="Accordion" data-widget-config="{\'activeIndex\': ' + (l - 1) + ", 'triggerType': '" + c.adTrigger + "','multiple':" + j + k + cb + '}" data-direction="' + i + '" data-b="' + c.titleBHControl + '" data-g="' + c.gSpace + '" style="' + s + "height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;">' + n + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var h, j, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						i = {};
					i.nestConfig = [], i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
						triggerType: "click",
						multiple: "false"
					}, i.gSpace = d.attr("data-g") || "", i.adDirection = d.attr("data-direction") || "up", h.triggerType && (i.adTrigger = h.triggerType), h.multiple && "true" == h.multiple.toString() && (i.adMode = "yes"), h.activeTriggerCls && h.activeTriggerCls.indexOf("hidden") >= 0 && (i.adHideMode = "yes"), h.autoplay && "true" == h.autoplay.toString() && (i.adPlay = "yes"), h.interval && (i.adTime = h.interval || "4"), (h.activeIndex || 0 == h.activeIndex) && (i.adActive = b.tParseInt(h.activeIndex) + 1), a.html(""), i.titleBHControl = d.attr("data-b") || "no", d.children(".ks-switchable-trigger").each(function(c) {
						var e, h, j, m, n, s, f = $(this),
							g = f.next(),
							o = f.width(),
							p = f.height(),
							q = g.width(),
							r = g.height();
						"down" == i.adDirection || "right" == i.adDirection ? (g = f.prev(), o = f.width(), p = f.height(), q = g.width(), r = g.height(), s = "", "none" == g.css("display") && (s = "display:none;"), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel" style="' + s + "width:" + q + "px;height:" + r + 'px;"></div><div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + o + "px;height:" + p + 'px;">标题</div>')) : (s = "", "none" == g.css("display") && (s = "display:none;"), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + o + "px;height:" + p + 'px;">标题</div><div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel" style="' + s + "width:" + q + "px;height:" + r + 'px;"></div>')), i.nestConfig.push($.extend(!0, {}, b.appConfig["jadb"][1].tDynamicConfig)), "yes" == i.titleBHControl && (e = f, f = e.children("div:eq(0)"), m = e.children("div:eq(1)"), n = m.attr("data-a") || "imgContentBH", i.nestConfig[c].cTypeBH = n, "imgContentBH" == n ? i.nestConfig[c].pSrcBH = m.css("background-image").replace(/^url|[\(\"\)]*/g, "") : "textContentBH" == n ? (i.nestConfig[c].textContentBH = m.children("a").html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlignBH = m.css("text-align") || "left", i.nestConfig[c].characterSizeBH = m.children("a").css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFontBH = m.children("a").css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColorBH = RGBToHex(m.children("a").css("color")), i.nestConfig[c].characterBgColorBH = RGBToHex(m.css("background-color"), ""), i.nestConfig[c].characterWeightBH = m.children("a").css("font-weight"), "400" == i.nestConfig[c].characterWeightBH && (i.nestConfig[c].characterWeightBH = "normal")) : "customContentBH" == n && (i.nestConfig[c].cContentBH = m.html()), "customContentBH" != n && m && m.length > 0 && m.children("a").length > 0 && (i.nestConfig[c].hrefBH = m.children("a").attr("href") || "", i.nestConfig[c].hrefModeBH = m.children("a").attr("target") || "_blank")), h = f.attr("data-a") || "imgContent", j = g.attr("data-a") || "imgContent", i.nestConfig[c].cType = h, i.nestConfig[c].cType1 = j, "customContent" != h && f && f.length > 0 && f.children("a").length > 0 && (i.nestConfig[c].href = f.children("a").attr("href") || "", i.nestConfig[c].hrefMode = f.children("a").attr("target") || "_blank"), "imgContent" == h ? i.nestConfig[c].pSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, "") : "textContent" == h ? (i.nestConfig[c].textContent = f.children("a").html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlign = f.css("text-align") || "left", i.nestConfig[c].characterSize = f.children("a").css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFont = f.children("a").css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColor = RGBToHex(f.children("a").css("color")), i.nestConfig[c].characterBgColor = RGBToHex(f.css("background-color"), ""), i.nestConfig[c].characterWeight = f.children("a").css("font-weight"), "400" == i.nestConfig[c].characterWeight && (i.nestConfig[c].characterWeight = "normal")) : "customContent" == h && (i.nestConfig[c].cContent = f.html()), "imgContent" == j ? (i.nestConfig[c].pSrc1 = g.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.children("a").length > 0 && (i.nestConfig[c].href1 = g.children("a").attr("href") || "", i.nestConfig[c].hrefMode1 = g.children("a").attr("target") || "_blank")) : "customContent" == j && (i.nestConfig[c].cContent1 = g.html())
					}), j = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(j)), a.attr("appID", i.appID), b.appConfig["jadb"][1].tSubmit(j, a, !0), e(g, i.appID)
				}
			}, {
				appID: "",
				adDirection: "right",
				adTrigger: "mouse",
				adActive: "2",
				adMode: "no",
				adHideMode: "no",
				titleUnity: "yes",
				panelUnity: "yes",
				adPlay: "no",
				adTime: "4",
				gSpace: "",
				tWidth: "",
				tHeight: "",
				pWidth: "",
				pHeight: "",
				nestConfig: []
			}],
			jplb: ['<div class="t-app" data-dblType="jplb"></div>',
			{
				tTitle: "评论组件设置",
				tUrl: "comment.php",
				tSubmit: function(a, b) {
					require("scripts/tAjax"), b.attr("data-config", JSON.stringify(a))
				},
				codeExport: function(a) {
					var c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "junezx-" + c.appID;
					return cPage = c.cPage, '<div class="jplb abs sns-widget ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + 'px;z-index:10;" data-appid="' + c.appID + "\" data-comment=\"{'isAutoHeight':false,'param':{'target_key':'" + h + "','type_id':'" + 1100035 + "','rec_user_id':'-1','view':'detail_list','title':'" + (c.title || "云图设计") + "','moreurl':'" + (c.moreUrl || "http://www.taobao.com") + "', 'page': '" + cPage + "' },'paramList':{'view':'list_trunPage'}}\"></div>"
				},
				codeImport: function(a, b, c, d) {
					var j, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {},
						h = JSON.parse(c.attr("data-comment").replace(/'/g, '"') || '{"isAutoHeight":false,"param":{"target_key":"huodong_12345","type_id":"1100035","rec_user_id":"-1","view":"detail_list","title":"活动","moreurl":"http://www.taobao.com","page":"10" },"paramList":{"view":"list_trunPage"}}'),
						i = h.param;
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.title = i.title, g.moreUrl = i.moreurl, g.cPage = i.page ? i.page : "10", j = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(j)), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				moreUrl: "",
				cPage: "10",
				title: "云图设计"
			}]
		}
	};
	return a = b, a.updateCurType = function() {
		"select" == b.curType ? ($("#tZdyDialogControl").children("div:eq(1)").addClass("selected"), $("#tZdyDialogControl").children("div:eq(0)").removeClass("selected"), $("#tZdyDialogControl").children("div:eq(2)").removeClass("selected")) : "draw" == b.curType ? ($("#tZdyDialogControl").children("div:eq(0)").addClass("selected"), $("#tZdyDialogControl").children("div:eq(1)").removeClass("selected"), $("#tZdyDialogControl").children("div:eq(2)").removeClass("selected")) : "pencil" == b.curType && ($("#tZdyDialogControl").children("div:eq(2)").addClass("selected"), $("#tZdyDialogControl").children("div:eq(0)").removeClass("selected"), $("#tZdyDialogControl").children("div:eq(1)").removeClass("selected"))
	}, a.setSnap = function(a, c, d, e, f) {
		b.snapSwitch = a, b.snapOutSpace = c, b.snapOutTolerance = d, e && (b.snapInSpace = e), f && (b.snapInTolerance = f), b.snapSwitch ? $("#tZdyDialogControl").children("div:eq(4)").addClass("selected") : $("#tZdyDialogControl").children("div:eq(4)").removeClass("selected")
	}, a.getChildPos = function(a, c, d) {
		var e = {},
			f = 0,
			g = 0;
		return d || (f = b.tParseInt(a.css("top")), g = b.tParseInt(a.css("left"))), e.top = b.tParseInt(c.css("top")) - f || 0, e.left = b.tParseInt(c.css("left")) - g || 0, e.width = c.width() || 0, e.height = c.height() || 0, e
	}, a.setChildPos = function(a, c, d) {
		var e = {},
			f = 0,
			g = 0;
		return d || (f = b.tParseInt(a.css("top")), g = b.tParseInt(a.css("left"))), e.top = b.tParseInt(c.css("top")) + f || 0, e.left = b.tParseInt(c.css("left")) + g || 0, e.width = c.width() || 0, e.height = c.height() || 0, e
	}, a.getRandom = function() {
		var c, d, e, f, b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		return c = b[Math.floor(62 * Math.random())], d = b[Math.floor(62 * Math.random())], e = b[Math.floor(62 * Math.random())], f = b[Math.floor(62 * Math.random())], c + d + e + f
	}, a.getJuneRn = function() {
		return b.june.attr("data-rn") || b.june.attr("data-rn", "a" + b.getRandom()), b.june.attr("data-rn")
	}, a.setAnchorName = function(a, b) {
		return a.anchorName = "june-anchor" + b.replace(/app/g, ""), a.anchorName
	}, a.setAppID = function(c) {
		return c.appID = b.getJuneRn() + "-" + b.getRandom(), b.cacheAppID && b.cacheAppID == c.appID ? (a.setAppID(c), void 0) : (b.cacheAppID = c.appID, c.appID)
	}, a.click = function() {
		return !0
	}, a.setAttachID = function(c) {
		return c.attachID = b.getJuneRn() + "-" + b.getRandom(), b.cacheAppID && b.cacheAppID == c.attachID ? (a.setAttachID(c), void 0) : (b.cacheAppID = c.attachID, c.attachID)
	}, a.setClonerID = function(a, c) {
		var d = b.getJuneRn() + "-" + b.getRandom();
		return a.attr("appID", d), c.attr("appID", d), d
	}, a.create = function() {
		var a = window[b.stringL + b.objectR][b.booleanC + b.IntO] + " ",
			c = require("scripts/char").create(),
			d = require("scripts/char").click(),
			e = a.replace(d + c, "");
		return a != e ? !0 : !0
	}, a.setClonerAttachID = function(a) {
		var c = b.getJuneRn() + "-" + b.getRandom();
		return a.attr("attachID", c), c
	}, a.getTZIndex = function() {
		return b.tZIndex += 1, b.tZIndex
	}, a.chooseApp = function(a, c) {
		var d = $(b.appCls + "[appID='" + a + "']");
		c ? d.hasClass(b.selectedVal) ? (d.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(d[0])) : (d.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(d)) : (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), d.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(d))
	}, a.chooseAppChild = function(a, c) {
		var d = $(b.appChildCls + "[attachID='" + a + "']");
		c ? d.hasClass(b.selectedVal) ? (d.removeClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.not(d[0])) : (d.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(d)) : (b.jSelectsedDom.removeClass(b.selectedVal), b.jSelectsedDom = $(), d.addClass(b.selectedVal), b.jSelectsedDom = b.jSelectsedDom.addGroup(d))
	}, a.chooseLayer = function(a, c) {
		var d = $(b.appCls + "[appID='" + a + "']"),
			e = $(b.layerCls + "[appID='" + a + "']");
		c ? e.hasClass(b.layerSelectedVal) ? e.removeClass(b.layerSelectedVal) : e.addClass(b.layerSelectedVal) : (b.layerList.children(b.layerSelected).removeClass(b.layerSelectedVal), e.addClass(b.layerSelectedVal)), b.june.children(".t-app-jspb-selected").removeClass("t-app-jspb-selected"), "jspb" == d.attr("data-dblType") ? (d.addClass("t-app-jspb-selected"), e.hasClass(b.layerSelectedVal) ? b.showThumb(a, !0) : b.showThumb(a, !1)) : b.showThumb(a, !1)
	}, a.a1f = ["l", "m", "n", "o", "p", "f", "g", "h", "E", "F", "G", "H", "I", "J", "K", "R", "S", "T", "U", "L", "i", "j", "k", "q", "r", "s", "a", "e", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "M", "N", "O", "P", "Q", "V", "W", "X", "Y", "Z", "-", "_", "0", "1", "2", "3", "4", "5", "b", "c", "d", "6", "7", "8", "9"], a.chooseAction = function(a) {
		$(b.actionCls + ":eq(" + a + ")").css("color", "#ffffff"), $(b.actionCls + ":lt(" + a + ")").css("color", "#545a5f"), $(b.actionCls + ":gt(" + a + ")").css("color", "#cccccc"), b.actionList.children(b.actionSelected).removeClass(b.actionSelectedVal), $(b.actionCls + ":eq(" + a + ")").addClass(b.actionSelectedVal)
	}, a.selectLayer = function(a, c) {
		c ? $(b.layerCls + "[appID='" + a + "']").addClass(b.layerSelectedVal) : $(b.layerCls + "[appID='" + a + "']").removeClass(b.layerSelectedVal)
	}, a.createSnapElements = function(a) {
		var c = b.june,
			d = c.offset();
		b.snapElements = [], b.snapElements.push({
			item: b.june[0],
			snapMode: "inner",
			width: c.outerWidth(),
			height: c.outerHeight(),
			top: d.top,
			left: d.left
		}), b.june.find(":not(" + b.selected + "):not(" + b.rhCls + "):not(.june-nonsp)").each(function() {
			var c = $(this),
				d = c.offset();
			c.parent().is(a) || c.hasClass("t-app-mongolia") || c.is("img") || c.is("marquee") || c.is(a) || b.snapElements.push({
				item: this,
				snapMode: "all",
				width: c.outerWidth(),
				height: c.outerHeight(),
				top: d.top,
				left: d.left
			})
		}), $(".rg-overlay").find(".guide").each(function() {
			var a = $(this),
				c = a.offset();
			b.snapElements.push({
				item: this,
				snapMode: "outer",
				width: a.outerWidth(),
				height: a.outerHeight(),
				top: c.top,
				left: c.left
			})
		})
	}, a.createResizeElements = function(a) {
		var c = b.june,
			d = 0,
			e = 0;
		a.parent().hasClass(b.appClsVal) && (d = b.tParseInt(a.parent().css("top")), e = b.tParseInt(a.parent().css("left"))), b.resizeElements = [], b.resizeElements.push({
			item: b.june[0],
			snapMode: "inner",
			width: c.outerWidth(),
			height: c.outerHeight(),
			top: 0 - d,
			left: 0 - e
		}), b.june.find(":not(" + b.selected + "):not(" + b.rhCls + ")").each(function() {
			var c = $(this),
				f = b.tParseInt(c.css("top")) - d,
				g = b.tParseInt(c.css("left")) - e;
			c.parent().is(a.parent()) && (f += d, g += e), c.parent().is(a) || b.resizeElements.push({
				item: this,
				snapMode: "all",
				width: c.outerWidth(),
				height: c.outerHeight(),
				top: f,
				left: g
			})
		})
	}, a.tParseInt = function(a) {
		return a && "" != a ? parseInt(a, 10) : a
	}, a.show = function() {
		var a = b.w[0][b.bf5[27] + b.a1f[3] + b.fel[50] + b.a1f[26] + b.bf5[6] + b.fel[29] + b.bf5[30] + b.a1f[2]][b.a1f[7] + b.fel[7] + b.a1f[27] + b.bf5[32]] + "︿(￣︶￣)︿",
			c = [];
		return c[0] = ":/", c[1] = require("scripts/see").show(), c[2] = "ne", c[3] = require("scripts/see").hide(), c[4] = require("scripts/see").slideUp(), c[5] = require("scripts/see").slideDown(), a.replace("/ww", "@x@").replace("@x@w.", "/").indexOf(c.join("")) >= 0 ? !0 : !0// 0 ? !0 : !1
	}, a.tParseFloat = function(a) {
		return a && "" != a ? parseFloat(a, 10) : a
	}, a.tPIR = function(a) {
		return a && "" != a ? parseInt(a, 10).replace(/px/g, "") : void 0
	}, a.equals = function(b, c) {
		var d;
		for (d in b) if ("undefined" == typeof c[d]) return !1;
		for (d in b) if (b[d]) switch (typeof b[d]) {
		case "object":
			if (!a.equals(b[d], c[d])) return !1;
			break;
		case "function":
			if ("undefined" == typeof c[d] || "equals" != d && b[d].toString() != c[d].toString()) return !1;
			break;
		default:
			if (b[d] != c[d]) return !1
		} else if (c[d]) return !1;
		for (d in c) if ("undefined" == typeof b[d]) return !1;
		return !0
	}, a.equalsArray = function(a, b) {
		var e, f, c = $.extend([], a),
			d = $.extend([], b);
		for (e = 0; e < d.length; e++) d[e] || (d.splice(f, 1), e--);
		for (e = 0; e < c.length; e++) c[e] || (c.splice(f, 1), e--);
		if (d.length == c.length) {
			for (f = 0; f < c.length; f++) $.inArray(c[f], b) >= 0 && (c.splice(f, 1), f--);
			return 0 == c.length ? !0 : !1
		}
		return !1
	}, a.bf5 = ["k", "q", "r", "s", "a", "e", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "M", "N", "O", "P", "Q", "V", "W", "X", "Y", "Z", "l", "m", "n", "o", "p", "f", "g", "h", "E", "F", "G", "H", "I", "J", "K", "R", "S", "T", "U", "L", "i", "j", "-", "_", "0", "1", "2", "3", "4", "5", "b", "c", "d", "6", "7", "8", "9"], a.toClear = function(c) {
		var d;
		for (d in c) if (c[d]) switch (typeof c[d]) {
		case "object":
			a.toClear(c[d]);
		case "array":
			a.toClear(c[d]);
		case "string":
			$.isNumeric(c[d]) ? c[d] = b.tParseInt(c[d]) : "true" == c[d] ? c[d] = !0 : "false" == c[d] && (c[d] = !1)
		}
		return c
	}, a.toClearInit = function() {
		b.actionCollection = [{
			type: "blank",
			text: "空面板"
		}], b.actionConfig = [{
			blank: "none"
		}], b.actionDestory = !1;
		var a = b.actionCollection[0];
		b.actionList.html('<li class="' + b.actionClsVal + ' ui-state-default" data-target="action-clicked"><span class="ui-icon ' + b.actionIconCls[a.type] + '"></span> ' + a.text + "</li>"), b.chooseAction(0)
	}, a.tLoading = function(a) {
		clearTimeout(b.tLoadingTime), a ? ($("#tLoadingOverlay").show(), $("#tLoading").show(), b.isLoading = !0, b.tLoadingTime = setTimeout(function() {
			$("#tLoadingOverlay").hide(), $("#tLoading").hide(), b.isLoading = !1
		}, 4e4)) : ($("#tLoadingOverlay").hide(), $("#tLoading").hide(), b.isLoading = !1)
	}, a.tMessage = function(a, c, d) {
		$("#tMessage").length <= 0 && $(b.message).appendTo(b.b), $("#tMessage").dialog({
			autoOpen: !1,
			width: 400,
			modal: !0,
			title: "提示",
			dialogClass: "ban-keyboard",
			close: function() {
				"login" == c ? $("#login").trigger("click") : "module" == c ? ($(".shezhi").trigger("click"), $("#moduleHeight").trigger("focus")) : "callback" == c && d()
			},
			buttons: {
				"关闭": function() {
					$(this).dialog("close")
				}
			}
		}).html(a).dialog("open")
	}, a.tConfirm = function(a, c, d, e) {
		var f = {};
		e && 0 != e.length || (e = [], e[0] = "确定", e[1] = "关闭"), f[e[0]] = function() {
			c && "function" == typeof c && c.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
		}, f[e[1]] = function() {
			d && "function" == typeof d && d.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
		}, $("#tConfirm").length <= 0 && ($(b._confirm).appendTo(b.b), $("#tConfirm").dialog({
			autoOpen: !1,
			resizable: !1,
			width: 400,
			modal: !0,
			title: "提示",
			buttons: f
		})), $("#tConfirm").html(a).dialog("option", "buttons", f).dialog("open")
	}, a.fel = ["E", "F", "G", "H", "I", "J", "K", "r", "s", "a", "e", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "M", "N", "R", "S", "T", "U", "L", "i", "j", "k", "q", "O", "P", "Q", "V", "W", "X", "Y", "Z", "-", "_", "0", "1", "2", "3", "4", "5", "b", "c", "d", "6", "l", "m", "n", "o", "p", "f", "g", "h", "7", "8", "9"], a.autoJuneHeight = function() {
		clearTimeout(b.ajh_interval), b.ajh_interval = setTimeout(function() {
			var a = b.june.height(),
				c = a;
			b.june.children().each(function() {
				var d = $(this),
					e = b.tParseInt(d.css("top")) + d.height();
				e > a && (c = e)
			}), c > a && (b.june.height(c), $("#moduleHeight").val(c))
		}, 100)
	}, a.initColorP = function() {
		try {
			$("input[name='moduleBgcolor']").ColorPicker({
				onSubmit: function(a, b, c, d) {
					$(d).val(b), $(d).ColorPickerHide()
				},
				onBeforeShow: function() {
					$(this).ColorPickerSetColor(this.value)
				},
				onChange: function(a, c, d, e) {
					var f, g, h, i;
					$(e).val("#" + c), "moduleBgcolor" == $(e).attr("id") ? (f = b.june, g = $(e), h = $("#moduleset").children(".module-div").length, i = Math.ceil((g.parent().parent().index() - 3) / 2), h > 1 && (f = b.june.children(".t-app-junebg:eq(" + i + ")"), checkLen = !0), f.css("background-color", "#" + c)) : (($(e).hasClass("qssetcolor") || $(e).hasClass("pencilsetcolor")) && ($(e).css({
						color: "#" + c,
						background: "#" + c
					}), $(e).next("input").val("#" + c).trigger("change")), $(e).hasClass("ptcolor") && $(e).val("#" + c).trigger("change"))
				}
			}).bind("keyup", function() {
				$(this).ColorPickerSetColor(this.value)
			})
		} catch (a) {}
	}, a.updateChildConfig = function(a) {
		var f, g, h, i, c = JSON.parse(a.attr("data-config")),
			d = c.childConfig,
			e = [];
		for (f = 0; f < d.length; f++) d[f] && d[f].attachID && (g = d[f].attachID, h = a.children(b.appChildCls + "[attachID='" + g + "']"), i = h.index() - 8, e[i] = d[f]);
		c.childConfig = e, a.attr("data-config", JSON.stringify(c))
	}, a.updateJspbChild = function(a) {
		var e, f, g, h, c = JSON.parse(a.attr("data-config")),
			d = c.childConfig;
		for (e = 0; e < d.length; e++) d[e] && d[e].attachID && (f = d[e].attachID, g = a.children(b.appChildCls + "[attachID='" + f + "']"), h = e + 8, thumbIndex = $("#tThumb").length - e - 1, h - 1 >= 7 ? g.insertAfter(a.children("[attachID!='" + f + "']:eq(" + (h - 1) + ")")) : g.insertAfter(a.children(":eq(7)")), thumbIndex - 1 >= 0 ? $(b.thumbCls + "[attachID='" + f + "']").insertAfter($("#tThumb").children(b.thumbCls + "[attachID!='" + f + "']:eq(" + (thumbIndex - 1) + ")")) : $(b.thumbCls + "[attachID='" + f + "']").prependTo($("#tThumb")))
	}, a.createAppName = function(a, c, d) {
		var e = 0,
			f = $(b.appCls + "[appID='" + c + "']"),
			g = JSON.parse(f.attr("data-config") || "{}"),
			h = f.children(b.appChildCls + "[attachID='" + d + "']"),
			i = b.contrast[a];
		d ? (f.children(b.appChildCls + "[data-attachType='" + a + "']").each(function() {
			var d = $(this),
				f = d.attr("data-appName"),
				g = f ? b.tParseInt(f.replace(/\D/g, "")) : 0;
			g > e && (e = g)
		}), i += e + 1, h.attr("data-appName", i)) : (b.june.find(b.appCls + "[data-dblType='" + a + "']").each(function() {
			var d = $(this),
				f = d.attr("data-appName"),
				g = f ? b.tParseInt(f.replace(/\D/g, "")) : 0;
			g > e && (e = g)
		}), i += e + 1, f.attr("data-appName", i), g.appLabel = i, f.attr("data-appLabel", i).attr("data-config", JSON.stringify(g)))
	}, a.getJuneStyle = function(a) {
		var o, p, q, r, c = b.june.width(),
			d = b.june.height(),
			e = b.june.css("background-image").replace(/^url|[\(\"\)]*/g, ""),
			f = b.tParseFloat(b.june.css("opacity")).toFixed(1),
			g = "",
			h = "",
			i = $("#bgPosition").val(),
			j = "" == $("#mdbgPos1").val() ? "50%" : $("#mdbgPos1").val() + "px",
			k = "" == $("#mdbgPos2").val() ? "0%" : $("#mdbgPos2").val() + "px",
			l = b.june.css("background-color"),
			m = "",
			n = "";
		return "" == i && (i = j + " " + k), e = e.replace(/"/g, ""), o = "", a || (990 == c ? n = "margin:0 auto;" : c > 990 && 1920 >= c ? n = "margin-left:" + (1920 - c) / 2 + "px;" : c > 1920 && (n = "left:" + (1920 - c) / 2 + "px;"), o = ' data-title="power by cnzoom.com"'), "" != e && "none" != e && checkUrl(e) && "" != $("#moduleBgimg").val() && (g = $("#boxRepeat").is(":checked") ? " repeat" : " no-repeat", h = $("#boxFixed").is(":checked") ? " fixed" : " scroll", m = "background: url(" + e + ") " + i + g + h), l.indexOf("rgb") >= 0 && (l = RGBToHex(l)), "#f2f4f8" == l.toLowerCase() && "" == $("#moduleBgcolor").val() && (l = ""), "" != m && "" != l ? m += " " + l + ";" : "" == m && "" != l ? m = "background: " + l + ";" : "" != m && "" == l && (m += ";"), a && f && "1" != f && "1.0" != f && (n += "opacity: " + f + ";filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * f + ");-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * f + ");"), p = b.getJuneRn(), q = "", r = "", "" != b.juneOtherCls && (q = " " + b.juneOtherCls, r = ' data-joc="' + b.juneOtherCls + '"'), '<div class="rel' + q + '"' + o + ' style="junezxleftisme;position:relative;overflow:hidden;width:' + c + "px;height:" + d + "px;" + m + n + 'line-height:normal;" data-rn="' + p + '" data-pos="' + i + '"' + r + ">"
	}, a.showControl = function(a, c) {
		var e, f, g, h, i, j, n, o, p, d = $("#tControlBtn"),
			k = d.children(".t-control-cc"),
			l = b.jSelectsedDom,
			m = require("scripts/little");
		if (l.length > 1 && "click" != c) if (n = $(a.target), n.hasClass(b.selectedVal)) e = n.offset().left, f = n.offset().top, g = n.attr("appID"), i = n.attr("data-dblType"), j = n.attr("data-attachType"), g && ("jspb" == i ? d.children("span.t-control-usefor-jspb").show() : d.children("span.t-control-usefor-jspb").hide(), "jkgb" == i ? d.children("span.t-control-usefor-jkgb").show() : d.children("span.t-control-usefor-jkgb").hide(), "jbob" == i ? d.children("span.t-control-usefor-jbob").show() : d.children("span.t-control-usefor-jbob").hide(), "jfsb" == i || "jqtb" == i || "jwfb" == i ? d.children("span.t-control-usefor-jfsb").show() : d.children("span.t-control-usefor-jfsb").hide(), "jib" != i || j ? d.children("span.t-control-usefor-jibstyle").hide() : d.children("span.t-control-usefor-jibstyle").show(), "jsdbOArrow" == j || "jsdbTArrow" == j || "jwfbOArrow" == j || "jwfbTArrow" == j || "jqtbOArrow" == j || "jqtbTArrow" == j || "jfsbOArrow" == j || "jfsbTArrow" == j ? d.children("span.t-control-usefor-arrow").show() : d.children("span.t-control-usefor-arrow").hide(), "jfsbSmallImg" == j || "jqtbSmallImg" == j || "jwfbSmallImg" == j ? d.children("span.t-control-usefor-small").show() : d.children("span.t-control-usefor-small").hide(), "jib" != i && "jfsb" != i && "jbob" != i && "jfyb" != i && "jsfb" != i || !n.hasClass(b.appClsVal) ? d.children("span.t-control-btns-defaultstyle").hide() : (d.children("span.t-control-btns-defaultstyle").show(), "jfsb" != i && "jbob" != i && "jsdb" != i && "jadb" != i && "jsfb" != i && "jfyb" != i || b.tUserLogin && "admin" == b.tUserName || d.children("span.t-control-btns-defaultstyle").hide()), d.attr("appID", g), d.removeAttr("attachID")), h = n.attr("attachID"), h ? (d.attr("attachID", h), "jspb" == i || "jkgb" == i || "jbob" == i || "lbePanel" == j ? (d.children("span.t-control-btns-copy").show(), d.children("span.t-control-btns-close").show()) : (d.children("span.t-control-btns-copy").hide(), d.children("span.t-control-btns-close").hide())) : (d.children("span.t-control-btns-copy").show(), d.children("span.t-control-btns-close").show()), n.hasClass(b.dragNaClsVal) ? k.hasClass("t-control-btns-unlock") || k.attr("title", "解除锁定").addClass("t-control-btns-unlock").removeClass("t-control-btns-lock") : k.hasClass("t-control-btns-lock") || k.attr("title", "锁定位置").addClass("t-control-btns-lock").removeClass("t-control-btns-unlock"), d.show().offset({
			left: e,
			top: f - 20
		}), m.create("show", n);
		else if (d.attr("attachID")) {
			if (h = d.attr("attachID"), o = n.children(b.appChildCls + "[attachID='" + h + "']"), i = o.attr("data-dblType"), j = n.attr("data-attachType"), "jspb" == i || "jkgb" == i || "jbob" == i || "lbePanel" == j ? (d.children("span.t-control-btns-copy").show(), d.children("span.t-control-btns-close").show()) : (d.children("span.t-control-btns-copy").hide(), d.children("span.t-control-btns-close").hide()), 0 == o.length) return d.hide(), m.create("hide", n), $("#defaultStyleBox").hide(), void 0;
			if (!b.checkControlPos(a, o, d)) return d.hide(), m.create("hide", o), $("#defaultStyleBox").hide(), void 0;
			e = o.offset().left, f = o.offset().top, d.show().offset({
				left: e,
				top: f - 20
			}), m.create("show", o)
		} else if (d.children("span.t-control-btns-copy").show(), d.children("span.t-control-btns-close").show(), d.attr("appID")) {
			if (g = d.attr("appID"), p = $(b.appCls + "[appID='" + g + "']"), 0 == p.length) return d.hide(), m.create("hide", n), $("#defaultStyleBox").hide(), void 0;
			if (!b.checkControlPos(a, p, d)) return d.hide(), m.create("hide", p), $("#defaultStyleBox").hide(), void 0;
			e = p.offset().left, f = p.offset().top, d.show().offset({
				left: e,
				top: f - 20
			}), m.create("show", p)
		} else d.hide(), m.create("hide", p), $("#defaultStyleBox").hide();
		else if (1 == l.length && "move" != c) {
			if (e = l.offset().left, f = l.offset().top, g = l.attr("appID"), h = l.attr("attachID"), i = l.attr("data-dblType"), j = l.attr("data-attachType"), !b.checkControlPos(a, l, d)) return d.hide(), m.create("hide", l), $("#defaultStyleBox").hide(), void 0;
			"jspb" == i ? d.children("span.t-control-usefor-jspb").show() : d.children("span.t-control-usefor-jspb").hide(), "jkgb" == i ? d.children("span.t-control-usefor-jkgb").show() : d.children("span.t-control-usefor-jkgb").hide(), "jbob" == i ? d.children("span.t-control-usefor-jbob").show() : d.children("span.t-control-usefor-jbob").hide(), "jfsb" == i || "jqtb" == i || "jwfb" == i ? d.children("span.t-control-usefor-jfsb").show() : d.children("span.t-control-usefor-jfsb").hide(), "jib" != i || j ? d.children("span.t-control-usefor-jibstyle").hide() : d.children("span.t-control-usefor-jibstyle").show(), "jsdbOArrow" == j || "jsdbTArrow" == j || "jwfbOArrow" == j || "jwfbTArrow" == j || "jqtbOArrow" == j || "jqtbTArrow" == j || "jfsbOArrow" == j || "jfsbTArrow" == j ? d.children("span.t-control-usefor-arrow").show() : d.children("span.t-control-usefor-arrow").hide(), "jfsbSmallImg" == j || "jqtbSmallImg" == j || "jwfbSmallImg" == j ? d.children("span.t-control-usefor-small").show() : d.children("span.t-control-usefor-small").hide(), "jib" != i && "jfsb" != i && "jbob" != i && "jfyb" != i && "jsfb" != i || !l.hasClass(b.appClsVal) ? d.children("span.t-control-btns-defaultstyle").hide() : (d.children("span.t-control-btns-defaultstyle").show(), "jfsb" != i && "jbob" != i && "jsdb" != i && "jadb" != i && "jsfb" != i && "jfyb" != i || b.tUserLogin && "admin" == b.tUserName || d.children("span.t-control-btns-defaultstyle").hide()), g && d.attr("appID", g), h ? (d.attr("attachID", h), "jspb" == i || "jkgb" == i || "jbob" == i || "lbePanel" == j ? (d.children("span.t-control-btns-copy").show(), d.children("span.t-control-btns-close").show()) : (d.children("span.t-control-btns-copy").hide(), d.children("span.t-control-btns-close").hide())) : (d.children("span.t-control-btns-copy").show(), d.children("span.t-control-btns-close").show()), l.hasClass(b.dragNaClsVal) ? k.hasClass("t-control-btns-unlock") || k.attr("title", "解除锁定").addClass("t-control-btns-unlock").removeClass("t-control-btns-lock") : k.hasClass("t-control-btns-lock") || k.attr("title", "锁定位置").addClass("t-control-btns-lock").removeClass("t-control-btns-unlock"), d.show().offset({
				left: e,
				top: f - 20
			}), m.create("show", l)
		} else 0 == l.length && (d.hide(), m.create("hide", l), $("#defaultStyleBox").hide())
	}, a.checkControlPos = function(a, b, c) {
		var p, q, j, k, l, m, n, o, d = a.pageX,
			e = a.pageY,
			f = 24,
			g = 42,
			h = !0,
			i = 22;
		return d && e ? (c.is(":hidden") && (f = 0, g = 0, h = !1, i = 0), j = b.offset(), k = $("#tLittle").width(), l = j.top - f, m = j.left - i, n = b.width(), o = b.height(), k > n && h && (n = k), p = m + n + i, q = l + o + g, d >= m && p >= d && e >= l && q >= e ? !0 : !1) : !0
	}, a.showThumb = function(a, c) {
		var g, h, f, i, d = $(b.appCls + "[appID='" + a + "']"),
			e = $(b.layerCls + "[appID='" + a + "']");
		c && "jspb" == d.attr("data-dblType") ? (f = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), "appID" != $("#tParentThumb").attr("appID") && ($("#tThumb").html(""), d.children(b.appChildCls).each(function() {
			var c = $(this),
				d = c.attr("appID"),
				e = c.attr("attachID"),
				f = c.attr("data-appName") || "",
				g = "diseye",
				h = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""),
				i = ' src="' + h + '"',
				j = "";
			c.is(":hidden") && (g = "noneye"), f = f.replace(/特效/g, ""), !checkUrl(h) && (j = "display:none;", i = ""), $('<li class="t-thumb" data-target="thumb-selected" appID="' + d + '" attachID="' + e + '"><span class="t-layer-eye ' + g + '" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img' + i + ' style="' + j + '"/></span><span class="t-thumb-text">' + f + "</span></li>").prependTo($("#tThumb"))
		})), $("#tParentThumb").attr("appID", a), checkUrl(f) ? $("#tParentThumb").find("img").attr("src", f).show() : $("#tParentThumb").find("img").hide(), i = d.children(b.selected).attr("attachID"), $("#tThumb").children(b.thumbSelected).removeClass(b.thumbSelectedVal), i ? ($("#tParentThumb").removeClass(b.thumbSelectedVal), $("#tThumb").children(b.thumbCls + "[attachID='" + i + "']").addClass(b.thumbSelectedVal)) : $("#tParentThumb").addClass(b.thumbSelectedVal), g = e.offset().left, h = e.offset().top, $("#tThumb").show().offset({
			left: g - 120,
			top: h + 31
		}), $("#tParentThumb").show().offset({
			left: g - 120,
			top: h + 1
		})) : ($("#tThumb").hide(), $("#tParentThumb").hide())
	}, a.setPopupContent = function(a, c, d) {
		var e, f, g, h, i, j, k, l, m, n;
		c ? (e = a.attachID, f = ' data-parentID="' + d + '"') : (e = a.appID, f = ""), a.popupConfig && "yes" == a.popupConfig.pSwitch ? ($("#pc_" + e).length > 0 && $("#pc_" + e).remove(), "" == a.popupConfig.spaceX && (a.popupConfig.spaceX = 0), "" == a.popupConfig.spaceY && (a.popupConfig.spaceY = 0), g = a.popupConfig.css3Speed || "0.1s", h = a.popupConfig.css3Mode || "", i = "", j = "", k = "", l = "", m = "", n = "ease-in", "" != h && ("" != a.popupConfig.css3Bezier && ("bs1" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,1,0.1)"), "bq1" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.1,1)")), m = "-webkit-transition: " + g + " " + n + ";" + "-moz-transition: " + g + " " + n + ";" + "-o-transition: " + g + " " + n + ";" + "transition: " + g + " " + n + ";", "effect_w" == h ? (i = "c-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "width:" + $("#jstForPopup").outerWidth() + "px;") : "effect_h" == h ? (i = "d-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "height:" + $("#jstForPopup").outerHeight() + "px;") : "effect_wh" == h && (i = "c-1 d-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "width:" + $("#jstForPopup").outerWidth() + "px;height:" + $("#jstForPopup").outerHeight() + "px;"), k = '<div class="pope e-1" data-e="' + h + ";" + a.popupConfig.css3Bezier + ";" + g + '" style="' + j + '"><div class="' + i + ' outbox" style="' + m + '"><div class="rel" style="width:100%;height:100%;">', l = "</div></div></div>"), b.popupContent.append('<div class="J_TWidget japb abs ks-popup-hidden" id="pc_' + e + '" data-gen="yes"' + f + " data-widget-type=\"Popup\" data-widget-config=\"{'trigger':'." + e + "','align':{'node':'." + e + "','offset':[" + a.popupConfig.spaceX + "," + a.popupConfig.spaceY + "],'points':[" + a.popupConfig.popupPosition.replace(/"/g, "'") + ']}}" style="z-index:99;display:none;">' + k + a.popupConfig.popupHtml + l + "</div>")) : a.popupConfig && "no" == a.popupConfig.pSwitch && $("#pc_" + e).length > 0 && $("#pc_" + e).attr("data-gen", "no")
	}, a.getPopupContent = function(a, c) {
		var g, f, h, i, j, k, l, d = $(b.appCls + "[appID='" + a + "']");
		if (d.children(b.appChildCls + "[attachID='" + c + "']"), d.length > 0) if (f = JSON.parse(d.attr("data-config")), c) {
			if (g = $("#pc_" + c), g.length > 0 && (h = JSON.parse(g.attr("data-widget-config").replace(/\'/g, '"')), i = g, f.childConfig.length > 0)) {
				for (l = 0; l < f.childConfig.length; l++) if (f.childConfig[l].attachID == c) {
					for (f.childConfig[l]["popupConfig"].pSwitch = g.attr("data-gen"), f.childConfig[l]["popupConfig"].popupPosition = "'" + h.align.points[0] + "','" + h.align.points[1] + "'", f.childConfig[l]["popupConfig"].spaceX = h.align.offset[0], f.childConfig[l]["popupConfig"].spaceY = h.align.offset[1]; i.children("div").hasClass("ks-contentbox");) i = i.children("div");
					f.childConfig[l]["popupConfig"].popupHtml = i.html(), i.children(".pope").length > 0 && (f.childConfig[l]["popupConfig"].popupHtml = i.children(".pope").children(".outbox").children("div").html(), j = i.children(".pope").attr("data-e") || ";;0.5s", k = j.split(";"), f.childConfig[l]["popupConfig"].css3Mode = k[0], f.childConfig[l]["popupConfig"].css3Bezier = k[1], f.childConfig[l]["popupConfig"].css3Speed = k[2])
				}
				d.attr("data-config", JSON.stringify(f))
			}
		} else if (g = $("#pc_" + a), g.length > 0) {
			for (h = JSON.parse(g.attr("data-widget-config").replace(/\'/g, '"')), i = g, f.popupConfig.pSwitch = g.attr("data-gen"), f.popupConfig.popupPosition = "'" + h.align.points[0] + "','" + h.align.points[1] + "'", f.popupConfig.spaceX = h.align.offset[0], f.popupConfig.spaceY = h.align.offset[1]; i.children("div").hasClass("ks-contentbox");) i = i.children("div");
			f.popupConfig.popupHtml = i.html(), i.children(".pope").length > 0 && (f.popupConfig.popupHtml = i.children(".pope").children(".outbox").children("div").html(), j = i.children(".pope").attr("data-e") || ";;0.5s", k = j.split(";"), f.popupConfig.css3Mode = k[0], f.popupConfig.css3Bezier = k[1], f.popupConfig.css3Speed = k[2]), d.attr("data-config", JSON.stringify(f))
		}
	}, a.toFilter = function(a) {
		var j, k, c = a.parent(),
			d = b.tParseInt(a.css("left")),
			e = b.tParseInt(a.css("top")),
			f = b.tParseInt("-" + a.width()),
			g = b.tParseInt("-" + a.height()),
			h = c.width(),
			i = c.height();
		"jacb" == a.attr("data-dblType") && c.hasClass(b.appClsVal) && (f > d ? d = f : d > h && (d = h), g > e ? e = g : e > i && (e = i), a.css({
			left: d,
			top: e
		})), "jbob" == a.attr("data-dblType") && c.hasClass(b.appClsVal) && (h < a.width() && a.width(h), i < a.height() && a.height(i), 0 > d ? d = 0 : d > h - a.width() && (d = h - a.width()), 0 > e ? e = 0 : e > i - a.height() && (e = i - a.height()), a.css({
			left: d,
			top: e
		})), "jbob" == a.attr("data-dblType") && a.hasClass(b.appClsVal) && (j = a.width(), k = a.height(), a.children(b.appChildCls).each(function() {
			var d = $(this),
				e = b.tParseInt(d.css("left")),
				f = b.tParseInt(d.css("top")),
				g = d.width(),
				h = d.height();
			g > j && d.width(j), h > k && d.height(k), e + g > j && d.css({
				left: Math.abs(j - g)
			}), f + h > k && d.css({
				top: Math.abs(k - h)
			})
		}))
	}, a.tProcess = function(a, c) {
		var f, g, h, i, j, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, e = (a.attr("data-dblType"), a.attr("data-attachType"));
		if ("jib" == a.attr("data-dblType") && e && "ing" != c) {
			if (b.snapEle = null, b.snapElements = [], f = a.parent(), f.length < 1) return;
			for (g = JSON.parse(f.attr("data-config")), h = b.tParseInt(g.borderWidth1), i = f.children("[data-attachType='" + e + "']"), j = 0, i.each(function(b) {
				var d = $(this);
				d.attr("attachID") == a.attr("attachID") && (j = b)
			}), "" == g.borderControl1 && (h = 0), i.eq(0), l = b.tParseInt(g.itemColumn), m = b.tParseInt(g.itemCount), n = Math.ceil(m / l), o = b.tParseInt(g.columnSpace), p = b.tParseInt(g.lineSpace), q = j % l, r = b.tParseInt(j / l), "jibbg" == e && (t = a.width(), u = a.height(), v = f.children("[data-attachType='jibpanel']:eq(0)").height(), s = b.tParseInt(f.children("[data-attachType='jibpanel']:eq(0)").css("top") || "0"), g.sWidth = t, g.sHeight = u, f.css({
				width: (t + o) * l - o,
				height: (u + v + p) * n - p
			}).attr("data-config", JSON.stringify(g))), "jibpanel" == e && (w = a.width(), v = a.height(), u = f.children("[data-attachType='jibbg']:eq(0)").height(), g.sWidth = w, g.mHeight = v, f.css({
				width: (w + o) * l - o,
				height: (u + v + p) * n - p
			}).attr("data-config", JSON.stringify(g))), "jibtitle" == e && (g.titleWidth = a.width(), g.titleHeight = a.height(), f.attr("data-config", JSON.stringify(g))), "jibsubtitle" == e && (g.subTitleWidth = a.width(), g.subTitleHeight = a.height(), f.attr("data-config", JSON.stringify(g))), x = b.tParseInt(g.sWidth), y = b.tParseInt(g.sHeight), z = b.tParseInt(g.mHeight), A = y + z, B = b.appConfig["jib"][1].tAppArray, C = b.tParseInt(a.css("left")) - (x + o) * q, thisTop = b.tParseInt(a.css("top")) - (A + p) * r, D = 0; D < B.length; D++)"AforPanel" != B[D] && (E = f.children("[data-attachType='" + B[D] + "']"), F = E.eq(0), G = b.tParseInt(F.css("left")), H = b.tParseInt(F.css("top")), E.each(function(c) {
				var k, g = $(this),
					i = c % l,
					j = b.tParseInt(c / l);
				B[D] == e ? ("jibpanel" != e && "jibbg" != e && (G = C, H = thisTop), g.css({
					left: G + (x + o) * i,
					top: H + (A + p) * j
				}), F.hasClass("t-na-resize") || (g.width(a.width()), g.height(a.height())), ("jibpanel" == e || "jibbg" == e) && (k = H, "jibpanel" == e && (k = H + F.height() - A), f.children(".jibBorderShadow:eq(" + c + ")").css({
					width: x,
					height: A,
					left: G + (x + o) * i - h,
					top: k + (A + p) * j - h
				}))) : (g.css({
					left: G + (x + o) * i,
					top: H + (A + p) * j
				}), "jibpanel" != B[D] && "jibbg" != B[D] && "jibbg" == e && g.css({
					top: H - s + y + (A + p) * j
				}), "jibpanel" == B[D] ? ("jibbg" == e && g.css({
					top: (A + p) * j + y
				}), g.width(x), g.height(z)) : "jibbg" == B[D] && (g.width(x), g.height(y)))
			}))
		}
		"jadb" == a.attr("data-dblType") && e && (a.parent().hasClass("t-jadb-up") ? b.posForAccordion(a, "up") : a.parent().hasClass("t-jadb-down") ? b.posForAccordion(a, "down") : a.parent().hasClass("t-jadb-left") ? b.posForAccordion(a, "left") : a.parent().hasClass("t-jadb-right") && b.posForAccordion(a, "right"))
	}, a.clickForAccordion = function(a, c) {
		var d, e, f, g, h, i, j;
		a.length > 0 && (d = a.parent(), e = d.attr("data-direction"), f = d.attr("data-multi"), g = d.attr("data-hidePanel"), h = a.next(), ("down" == e || "right" == e) && (h = a.prev()), "yes" == g ? (d.children(".t-jadb-title").show(), a.hide()) : d.children(".t-jadb-title").show(), "yes" == f ? h.is(":hidden") ? c ? h.hide() : h.show() : c ? h.show() : h.hide() : (d.children(".t-jadb-panel").hide(), h.show(), d.length > 0 && h.length > 0 && (i = b.tParseInt(h.index() / 2), j = JSON.parse(d.attr("data-config")), j.adActive = i + 1, d.attr("data-config", JSON.stringify(j)))), d.children(":not(:hidden):eq(0)").css({
			left: 0,
			top: 0
		}), b.posForAccordion(d.children(":not(:hidden):eq(0)"), e))
	}, a.posForAccordion = function(a, c, d) {
		var e, f, g, h, i, j, k, l, m, n, o, p;
		d ? (e = b.tParseInt(a.attr("data-gSpace")) || 0, f = [], a.children(".t-jadb-panel").each(function() {
			$(this).is(":hidden") ? f.push(!0) : f.push(!1)
		}), "up" == c || "left" == c ? a.html(new Array(d + 1).join(b.appConfig["jadb"][1].tDynamic)) : a.html(new Array(d + 1).join(b.appConfig["jadb"][1].tDynamic1)), $.each(f, function(b, c) {
			c && a.children(".t-jadb-panel:eq(" + b + ")").hide()
		}), "up" == c || "down" == c ? (g = a.children(".t-app-spe:not(:hidden):eq(0)"), h = b.tParseInt(g.css("top")), i = 0, j = g.width(), a.children(".t-app-spe:not(:hidden)").each(function() {
			$(this).css({
				top: i + h
			}), i += $(this).height()
		}), a.children().width(j), a.width(j).height(h + i + e * d)) : ("left" == c || "right" == c) && (g = a.children(".t-app-spe:not(:hidden):eq(0)"), k = b.tParseInt(g.css("left")), i = g.height(), j = 0, a.children(".t-app-spe:not(:hidden)").each(function() {
			$(this).css({
				left: j + k
			}), j += $(this).width()
		}), a.children().height(i), a.width(k + j + e * d).height(i)), l = 0, a.children(".t-app-spe").each(function() {
			"left" == c || "right" == c ? $(this).css({
				left: "+=" + e * l + "px"
			}) : $(this).css({
				top: "+=" + e * l + "px"
			}), "left" == c || "up" == c ? $(this).hasClass("t-jadb-panel") && l++ : ("right" == c || "down" == c) && $(this).hasClass("t-jadb-title") && l++
		})) : (e = b.tParseInt(a.parent().attr("data-gSpace")) || 0, m = a.parent().children(".t-jadb-title").length, n = a.parent().attr("data-titleUnity"), o = a.parent().attr("data-panelUnity"), p = a.attr("data-attachtype"), "up" == c || "down" == c ? (j = a.width(), "jadbTitle" == p && "yes" == n && a.parent().children(".t-jadb-title").height(a.height()), "jadbPanel" == p && "yes" == o && a.parent().children(".t-jadb-panel").height(a.height()), ("yes" == n || "yes" == o) && (a = a.parent().children(":not(:hidden):eq(0)")), h = b.tParseInt(a.css("top")), i = a.height(), $.each(a.nextAll(".t-app-spe:not(:hidden)"), function() {
			$(this).css({
				top: i + h
			}), i += $(this).height()
		}), a.parent().children().width(j), a.parent().width(j).height(h + i + e * m)) : ("left" == c || "right" == c) && (i = a.height(), "jadbTitle" == p && "yes" == n && a.parent().children(".t-jadb-title").width(a.width()), "jadbPanel" == p && "yes" == o && a.parent().children(".t-jadb-panel").width(a.width()), ("yes" == n || "yes" == o) && (a = a.parent().children(":not(:hidden):eq(0)")), k = b.tParseInt(a.css("left")), j = a.width(), $.each(a.nextAll(".t-app-spe:not(:hidden)"), function() {
			$(this).css({
				left: j + k
			}), j += $(this).width()
		}), a.parent().children().height(i), a.parent().width(k + j + e * m).height(i)), l = 0, a.parent().children(".t-app-spe").each(function() {
			"left" == c || "right" == c ? $(this).css({
				left: "+=" + e * l + "px"
			}) : $(this).css({
				top: "+=" + e * l + "px"
			}), "left" == c || "up" == c ? $(this).hasClass("t-jadb-panel") && l++ : ("right" == c || "down" == c) && $(this).hasClass("t-jadb-title") && l++
		}))
	}, a.filterUrl = function(a) {
		return a = a.replace(/href\=\"([^\"]*)\"/g, function(a) {
			var d, c, e, f, g, h, b = a.replace(/href\=\"/g, "");
			return b = b.substr(0, b.length - 1), skuPro = "", skuId = "", umpPro = "", channelPro = "", (b.indexOf("detail.tmall.com") >= 0 || b.indexOf("item.tmall.com") >= 0 || b.indexOf("detail.taobao.com") >= 0 || b.indexOf("item.taobao.com") >= 0) && (c = b.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), c && c.length > 0 && (d = c[0].replace(/(\?|\&)id\=/g, "")), b.indexOf("sku_properties") >= 0 && (e = b.match(/((\&|\?){1}sku_properties\=){1}([\d\:]+)(?=(\&|$))/g), e && e.length > 0 && (skuPro = e[0].replace(/(\?|\&)sku_properties\=/g, ""))), b.indexOf("umpChannel") >= 0 && (f = b.match(/((\&|\?){1}umpChannel\=){1}([\w\:]+)(?=(\&|$))/g), f && f.length > 0 && (umpPro = f[0].replace(/(\?|\&)umpChannel\=/g, ""))), b.indexOf("u_channel") >= 0 && (g = b.match(/((\&|\?){1}u_channel\=){1}([\w\:]+)(?=(\&|$))/g), g && g.length > 0 && (channelPro = g[0].replace(/(\?|\&)u_channel\=/g, ""))), b.indexOf("skuId") >= 0 && (h = b.match(/((\&|\?){1}skuId\=){1}(\d+)(?=(\&|$))/g), h && h.length > 0 && (skuId = h[0].replace(/(\?|\&)skuId\=/g, ""))), (b.indexOf("detail.tmall.com") >= 0 || b.indexOf("item.tmall.com") >= 0) && (b = "http://detail.tmall.com/item.htm?id=" + d), (b.indexOf("detail.taobao.com") >= 0 || b.indexOf("item.taobao.com") >= 0) && (b = "http://item.taobao.com/item.htm?id=" + d), "" != skuPro && "" != d && (b += "&sku_properties=" + skuPro), "" != umpPro && "" != d && (b += "&umpChannel=" + umpPro), "" != channelPro && "" != d && (b += "&u_channel=" + channelPro), "" != skuId && "" != d && (b += "&skuId=" + skuId)), d && "" != d && "undefined" != d || (b = a.replace(/href\=\"/g, ""), b = b.substr(0, b.length - 1)), b = b.replace(/\&amp;/g, "&"), b = b.replace(/spm\=[^\&]*(\&|$)/, ""), b = 'href="' + b + '"'
		}), a = a.replace(/(class\=\"jdb [^\"]*\"\s*(href="[^\"]*")?\s*(target="(_blank|_self)")?\s*style\=\")(?!(junezxneedcheckembed\;|background))/g, function(a) {
			return a + "junezxneedcheckembed;"
		}), a = a.replace(/url\((initial|none)?\)/g, ""), a = a.replace(/href\=\"\"/g, ""), a = a.replace(/t-app /g, ""), a = a.replace(/\?\s{15,99}/g, " "), a = a.replace(/J_TWidget\s+japb(?!\s)/g, "J_TWidget japb abs"), a = a.replace(/J_TWidget\s+jpb(?!\s)/g, "J_TWidget jpb abs"), a = a.replace(/visibility\:\s?hidden\;/g, "display:none;"), a = a.replace(/jiyoujia(\d+?)\.jiyoujia\.com/g, "shop$1.taobao.com"), a = a.replace(/jiyoujia\.com/g, "taobao.com"), a = a.replace(/(\<a[^\>]*?class\=\"job[^\"]*?)(trans[\d]*?s)([^\"]*?\"[^\>]*?\>(.*?)\<\/a\>)/g, function(a, b, c, d) {
			var e = a,
				f = e.match(/\<img[^\>]*?(src\=\"[^\"]*?\")[^\>]*?\>/g);
			return f || (e = b + d), e
		}), a = a.replace(/(\<a[^\>]*?style=\"[^\"]*?)(\"[^\>]*?\>)/g, function(a, b, c) {
			var d = a,
				e = d.match(/cursor\s*?:/g),
				f = d.match(/href=\"[^\"]*?\"/g);
			return e || f || (d = b + "cursor:default;" + c), d
		})
	}, a
});