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
		tLoadingDiv: '<div id="tLoadingOverlay" class="ui-widget-overlay ui-front" style="z-index: 10001;"></div>',
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
		offsleft: 50,
		offstop: 170,
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
					if (a.filterTextarea($("#tForm")), c = require("scripts/action"), d = $("#tForm").attr("form-data"), e = $("#tForm").formToObject(), f = $(b.appCls + "[appID='" + e.appID + "']"), g = JSON.parse(f.attr("data-config")), h = f.width(), i = f.height(), j = b.tParseInt(f.css("top")), k = b.tParseInt(f.css("left")), e.appLabel && (l = require("scripts/layer"), f.attr("data-appLabel", e.appLabel), l.updateAppLabel(f)), "mdlink" == e.linkMode && "" == anchorSelect) return void b.tMessage("选择连接类型为锚点连接时，需要先添加一个锚点！");
					if ("jmdb" == d && !RegExp(/^[a-zA-Z][a-zA-Z0-9\-_]*$/).test(e.anchorName)) return void b.tMessage("请输入一个正确的锚点名称！只能用英文字母加数字，且不能以数字开头");
					if ("jsfb" == d && (!e.catsArray || 0 == e.catsArray.length)) return void b.tMessage("请选择分类，至少选择一个！");
					if ("jscb" == d && "1" == e.scType) {
						if ("" == e.href) return void b.tMessage("请输入一个正确的宝贝详情页地址！");
						if (m = e.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), !m || m.length < 1) return void b.tMessage("请输入一个正确的宝贝详情页地址！");
						if (n = m[0].replace(/\?id\=/g, ""), "" == n) return void b.tMessage("请输入一个正确的宝贝详情页地址！")
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
					(e.width || e.height || e.top || e.left) && ((h != +e.width || i != +e.height) && (e.autoSize = "no", f.attr("data-config", JSON.stringify(e)), c.create("resize", f)), (j != +e.top || k != +e.left) && c.create("drag", f)), delete g.width, delete g.height, delete g.top, delete g.left, delete e.width, delete e.height, delete e.top, delete e.left, v = b.equals(g, e), v || (b.appConfig[d][1].tSubmit(e, f), w = require("scripts/quickSet"), w.execQsSet(!0), c.create("edit", f)), b.june.find("embed").each(function() {
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

					var f, g, p, h = JSON.parse(a.attr("data-config")),
						i = a.attr("data-dblType"),
						j = {},
						k = (d.attr("class"), d.children("a:eq(0)")),
						l = "",
						m = [],
						n = "";
					if (j.tipText = "", d.attr("title") && "" != d.attr("title") && (j.tipText = d.attr("title")), j.borderColor = RGBToHex(d.attr("border-color")), j.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.is("a") ? (j.href = d.attr("href") || "", j.hrefMode = d.attr("target")) : (j.href = k.attr("href") || "", j.hrefMode = k.attr("target"), d.hasClass("shadowShow") && (j.shadowControl = "shadowShow", j.shadowShowType = k.attr("data-shadow"), l = k.css("box-shadow"), l.indexOf("inset") >= 0 && (j.shadowStyle = "inset", l = $.trim(l.replace(/inset/g, ""))), l.indexOf("rgb") >= 0 && (n = RGBToHex(l.match(/rgb\((\S|\s)*\)/g)[0]), l = $.trim(l.replace(/rgb\((\S|\s)*\)/g, ""))), m = l.split(" "), m[0].indexOf("px") < 0 && m[0] ? ("" == n && (n = RGBToHex(m[0])), m.splice(0, 1)) : "" == n && (n = RGBToHex(m[4])), j.shadowColor = n, j.shadowLeft = b.tParseInt(m[0]), j.shadowTop = b.tParseInt(m[1]), j.shadowBlur = b.tParseInt(m[2]), j.shadowSize = b.tParseInt(m[3]))), j.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.bgColor = RGBToHex(d.css("background-color"), ""), j.imgBgp = d.css("background-position") || "50% 50%", j.linkMode = d.attr("data-linkmode"), j.wangID = "", j.shuntMode = "no", j.anchorSelect = "", !j.href && "" == j.href, f = j.href.split("?"), d.hasClass("j_CollectBrand") && (j.linkMode = "gzlink", j.attentionID = d.attr("data-brandid") || ""), d.hasClass("J_CartPluginTrigger") && (j.linkMode = "gwlink"), RegExp("amos.alicdn.com/getcid.aw").test(f[0])) try {
						g = j.href.split("&"), j.linkMode = "wwlink", j.wangID = g[1].replace("uid=", ""), j.wangID = j.wangID.replace("%3A", ":"), j.wangID = decodeURI(j.wangID), j.shuntMode = "yes"
					} catch (o) {}
					if (RegExp("taobao.com/webww/ww.php").test(f[0])) try {
						g = j.href.split("&"), j.linkMode = "wwlink", j.wangID = g[1].replace("touid=", ""), j.wangID = j.wangID.replace("%3A", ":"), j.wangID = decodeURI(j.wangID)
					} catch (o) {}
					"mdlink" == j.linkMode && (j.anchorSelect = j.href.replace("#", ""), j.href = ""), d.hasClass("hborder") && (j.borderControl = "hborder", j.borderColor = RGBToHex(d.children("a:eq(0)").css("border-color")), j.borderWidth = d.children("a:eq(0)").css("border-width") || "1px", j.borderWidth = j.borderWidth.replace(/px/g, "")), d.hasClass("mcblack") && (j.mongoliaControl = "mongoliaShow", j.mongoliaMode = "mcblack"), d.hasClass("mcwhite") && (j.mongoliaControl = "mongoliaShow", j.mongoliaMode = "mcwhite"), d.hasClass("juneol") && (j.outlineControl = "outlineShow", j.outlineWidth = "juneol", j.outlineColor = RGBToHex(d.css("outline-color")), j.outlineShadowColor = RGBToHex(d.css("color")), j.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), d.hasClass("juneol1") && (j.outlineControl = "outlineShow", j.outlineWidth = "juneol1", j.outlineColor = RGBToHex(d.css("outline-color")), j.outlineShadowColor = RGBToHex(d.css("color")), j.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), d.hasClass("juneol2") && (j.outlineControl = "outlineShow", j.outlineWidth = "juneol2", j.outlineColor = RGBToHex(d.css("outline-color")), j.outlineShadowColor = RGBToHex(d.css("color")), j.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), p = $.extend(!0, h, j), a.attr("data-config", JSON.stringify(p)), checkUrl(j.pSrc) && a.css({
						backgroundImage: "url(" + j.pSrc + ")"
					}), a.css({
						backgroundPosition: j.imgBgp
					}), submitColor(a, RGBToHex(j.bgColor, ""), "rgba(0,0,0,0.3)"), a.attr("appID", j.appID), e(i, j.appID)
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
				tUrl: "dthb.php",
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
					var e, f, m, n, g = JSON.parse(a.attr("data-config")),
						h = a.attr("data-dblType"),
						i = {},
						j = (c.attr("class"), c.children("ul:eq(0)").children("li:eq(0)")),
						k = j.children("a:eq(0)"),
						l = c.children(".scroller:eq(0)").children("div:eq(0)").children("div:eq(0)");
					i.tipText = "", k.attr("title") && "" != k.attr("title") && (i.tipText = k.attr("title")), i.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), m = "1;1;none;1", c.attr("data-mr") && "" != c.attr("data-mr") && (m = c.attr("data-mr")), m = m.split(";"), i.dtMode = m[0], i.dtRange = m[1], i.dtShowMode = m[2], i.dtDirection = m[3], i.href = k.attr("href") || "", i.hrefMode = k.attr("target"), i.pSrc = l.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.bgColor = RGBToHex(l.css("background-color"), ""), i.linkMode = c.attr("data-linkmode"), i.wangID = "", i.shuntMode = "no", i.anchorSelect = "", !i.href && "" == i.href, e = i.href.split("?"), k.hasClass("j_CollectBrand") && (i.linkMode = "gzlink", i.attentionID = c.attr("data-brandid") || ""), k.hasClass("J_CartPluginTrigger") && (i.linkMode = "gwlink"), RegExp("amos.alicdn.com/getcid.aw").test(e[0]) && (f = i.href.split("&"), i.linkMode = "wwlink", i.wangID = f[1].replace("uid=", ""), i.wangID = i.wangID.replace("%3A", ":"), i.wangID = decodeURI(i.wangID), i.shuntMode = "yes"), RegExp("taobao.com/webww/ww.php").test(e[0]) && (f = i.href.split("&"), i.linkMode = "wwlink", i.wangID = f[1].replace("touid=", ""), i.wangID = i.wangID.replace("%3A", ":"), i.wangID = decodeURI(i.wangID)), "mdlink" == i.linkMode && (i.anchorSelect = i.href.replace("#", ""), i.href = ""), n = $.extend(!0, g, i), a.attr("data-config", JSON.stringify(n)), checkUrl(i.pSrc) && a.css({
						backgroundImage: "url(" + i.pSrc + ")"
					}), submitColor(a, RGBToHex(i.bgColor, ""), "rgba(0,0,0,0.3)"), a.attr("appID", i.appID), d(h, i.appID)
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
					}), "yes" == a.childConfig[e].autoSize && !
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
					return !a || a.length < 1 || !a.attr("data-config") ? void 0 : (c = JSON.parse(a.attr("data-config")), d = a.width(), e = a.height(), f = b.tParseInt(a.css("top")), g = b.tParseInt(a.css("left")), h = c.childConfig, i = "", j = "", k = "", l = c.imgBgp || "50% 50%", m = c.css3Speed || "0s", n = "", o = "ease-in", p = "", "" != c.css3Bezier && ("bs1" == c.css3Bezier && (o = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == c.css3Bezier && (o = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == c.css3Bezier && (o = "cubic-bezier(0,0,1,0.1)"), "bq1" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == c.css3Bezier && (o = "cubic-bezier(0,0,0.1,1)"), "bt1" == c.css3Bezier && (o = "cubic-bezier(1,2.2,0.5,0.8)"), "bt2" == c.css3Bezier && (o = "cubic-bezier(0.5,2.2,1,0.8)"), "bt3" == c.css3Bezier && (o = "cubic-bezier(1,0.2,0.5,-1.2)"), "bt4" == c.css3Bezier && (o = "cubic-bezier(0.5,0.2,1,-1.2)"), "bt5" == c.css3Bezier && (o = "cubic-bezier(1,1,0.5,0)"), "bt6" == c.css3Bezier && (o = "cubic-bezier(0.5,1,1,0)"), "bt7" == c.css3Bezier && (o = "cubic-bezier(0.5,1.5,0.5,-1.5)"), "bt8" == c.css3Bezier && (o = "cubic-bezier(0.5,2,0.5,-1)"), "bt9" == c.css3Bezier && (o = "cubic-bezier(0.5,3,0.5,0)"), "bt10" == c.css3Bezier && (o = "cubic-bezier(0.5,2.2,0.5,0.8)"), "bt11" == c.css3Bezier && (o = "cubic-bezier(0.5,0.2,0.5,-1.2)"), "bt12" == c.css3Bezier && (o = "cubic-bezier(0.5,1,0.5,0)")), n = "-webkit-transition: " + m + " " + o + ";-moz-transition: " + m + " " + o + ";-o-transition: " + m + " " + o + ";transition: " + m + " " + o + ";", a.children(b.appChildCls + "[data-attachType='jspbChild']").each(function(c) {
						var f, g, j, k, l, m, n, o, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
						h[c] && (g = $(this), j = "", k = "", l = "", m = "", n = h[c].imgBgp || "50% 50%", o = b.getChildPos(a, g, !0), q = h[c].css3Speed || "0s", r = "", s = "ease-in", t = "", u = "", v = "", w = !1, x = "", y = "", z = "top:" + o.top + "px;left:" + o.left + "px;", A = " abs", B = " " + h[c].css3ModeX + " " + h[c].css3ModeY, "" != h[c].css3Bezier && ("bs1" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == h[c].css3Bezier && (s = "cubic-bezier(0,0,1,0.1)"), "bq1" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == h[c].css3Bezier && (s = "cubic-bezier(0,0,0.1,1)"), "bt1" == h[c].css3Bezier && (s = "cubic-bezier(1,2.2,0.5,0.8)"), "bt2" == h[c].css3Bezier && (s = "cubic-bezier(0.5,2.2,1,0.8)"), "bt3" == h[c].css3Bezier && (s = "cubic-bezier(1,0.2,0.5,-1.2)"), "bt4" == h[c].css3Bezier && (s = "cubic-bezier(0.5,0.2,1,-1.2)"), "bt5" == h[c].css3Bezier && (s = "cubic-bezier(1,1,0.5,0)"), "bt6" == h[c].css3Bezier && (s = "cubic-bezier(0.5,1,1,0)"), "bt7" == h[c].css3Bezier && (s = "cubic-bezier(0.5,1.5,0.5,-1.5)"), "bt8" == h[c].css3Bezier && (s = "cubic-bezier(0.5,2,0.5,-1)"), "bt9" == h[c].css3Bezier && (s = "cubic-bezier(0.5,3,0.5,0)"), "bt10" == h[c].css3Bezier && (s = "cubic-bezier(0.5,2.2,0.5,0.8)"), "bt11" == h[c].css3Bezier && (s = "cubic-bezier(0.5,0.2,0.5,-1.2)"), "bt12" == h[c].css3Bezier && (s = "cubic-bezier(0.5,1,0.5,0)")), r = "-webkit-transition: " + q + " " + s + ";-moz-transition: " + q + " " + s + ";-o-transition: " + q + " " + s + ";transition: " + q + " " + s + ";", ("effect_w" == h[c].css3Mode || "effect_h" == h[c].css3Mode || "effect_wh" == h[c].css3Mode || "effect_w1" == h[c].css3Mode) && ("" == p && (p = " u-e u-c u-d"), C = "", D = "width:" + o.width + "px;height:" + o.height + "px;", E = z, F = B, z = "top:0;left:0;", A = " rel", B = "  ", w = !0, "effect_w" == h[c].css3Mode ? C = "c-2" : "effect_h" == h[c].css3Mode ? C = "d-2" : "effect_wh" == h[c].css3Mode ? C = "c-2 d-2" : "effect_w1" == h[c].css3Mode && (C = "c-2 c-21", t = "float:right;"), h[c].css3Mode = "", x = '<div class="abs pspe e-2" style="' + D + E + 'z-index:10;">' + u + '<div class="' + C + " outbox" + F + '" data-x="' + h[c].css3ModeX + ";" + h[c].css3ModeY + '" style="' + r + t + '"><div class="rel" style="width:100%;height:100%;' + t + '">', y = "</div></div>" + v + "</div>"), ("june-box-fromtop" == h[c].css3ModeY || "june-box-frombottom" == h[c].css3ModeY) && (w || (x = x + '<div class="abs juneyd" style="width:' + e + 'px;height:0;">', y = "</div>" + y)), h[c] && h[c].spicSrc && (f = h[c].spicSrc), G = "", f && "" != f && "undefined" != f || (G = "display:none;"), h[c].bgColor = RGBToHex(h[c].bgColor, ""), "" != h[c].bgColor && (m = "background-color:" + h[c].bgColor + ";"), checkUrl(h[c].pSrc) && (j = "background:url(" + h[c].pSrc + ") " + n + " no-repeat;"), checkUrl(f) && (k = "background:url(" + f + ") " + n + " no-repeat;", l = 'src="' + f + '"'), "imgContent" == h[c].contentType ? i += x + '<a href="' + h[c].href + '" target="' + h[c].hrefMode + '" class="jspcb' + A + " imghover " + h[c].displayMode + " trans05s " + h[c].css3Mode + B + " " + h[c].css3MoveMode + " " + h[c].attachID + '" data-appid="' + h[c].attachID + '" style="' + r + "overflow:hidden;" + j + m + "width:" + o.width + "px;height:" + o.height + "px;" + z + "z-index:10;" + t + '" data-jspbType="' + h[c].contentType + '"><img class="abs" style="width:' + o.width + "px;height:" + o.height + "px;" + k + G + '" ' + l + " /></a>" + y : "customContent" == h[c].contentType ? i += x + '<div class="jspcb' + A + " imghover " + h[c].displayMode + " trans05s " + h[c].css3Mode + B + " " + h[c].css3MoveMode + " " + h[c].attachID + '" data-appid="' + h[c].attachID + '" style="' + r + "overflow:hidden;width:" + o.width + "px;height:" + o.height + "px;" + z + "z-index:10;" + t + '" data-jspbType="' + h[c].contentType + '">' + h[c].customContent + "</div>" + y : "textContent" == h[c].contentType && (H = require("scripts/allwzset"), I = !1, qssetConfig = JSON.parse(h[c].qssetConfig || "{}"), exportHtml = '"></div>', "" != h[c].qssetConfig && (qssetConfig.href = h[c].href, qssetConfig.hrefMode = h[c].hrefMode, "top:0;left:0;" == z && (I = !0), exportHtml = H.allExport(g, qssetConfig, "jspb", r, I)), i += x + '<div data-appid="' + h[c].attachID + '" data-jspbType="' + h[c].contentType + '" class="jspcb' + A + " imghover " + h[c].displayMode + " trans05s " + h[c].css3Mode + B + " " + h[c].css3MoveMode + " " + h[c].attachID + exportHtml + y))
					}), c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (k = "background-color:" + c.bgColor + ";"), checkUrl(c.pSrc) && (j = "background:url(" + c.pSrc + ") " + l + " no-repeat;"), !c.overflowMode && "hidden" == c.overflowMode, q = "", r = "overflow:hidden;", "visibleX" == c.overflowMode ? (q = " u-a", r = "") : "visible" == c.overflowMode && (q = " j-zdv", r = "overflow:visible;"), '<div class="jspb abs imghover ' + c.displayMode + " trans05s " + c.css3Mode + " " + c.css3MoveMode + " " + c.appID + q + p + '" data-appid="' + c.appID + '" style="' + n + r + j + k + "width:" + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;">' + i + '<a class="abs" href="' + c.href + '" target="' + c.hrefMode + '" style="width:' + d + "px;height:" + e + 'px;display:block;top:0px;left:0px;"></a></div>')
				},
				codeImport: function(a, c, d, e) {
					var k, l, m, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = 0,
						i = d.attr("class").replace("jspb abs imghover ", ""),
						j = {};
					j.childConfig = [], j.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), j.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.bgColor = RGBToHex(d.css("background-color"), ""), j.imgBgp = d.css("background-position") || "50% 50%", j.href = d.children("a:last").attr("href") || "", j.hrefMode = d.children("a:last").attr("target"), j.displayMode = i.split(" ")[0], j.css3Speed = i.split(" ")[1], j.css3Mode = i.split(" ")[2], j.css3MoveMode = i.split(" ")[3], j.overflowMode = d.css("overflow"), "visible" != j.overflowMode && (j.overflowMode = "hidden"), d.hasClass("u-a") && (j.overflowMode = "visibleX"), d.hasClass("j-zdv") && (j.overflowMode = "visible"), i.replace(/  /g, "") == i && (i.indexOf("june-fadein") < 0 && i.indexOf("june-fadeout") < 0 && " " != i.charAt(0) && (i = " " + i, j.displayMode = i.split(" ")[0], j.css3Speed = i.split(" ")[1], j.css3Mode = i.split(" ")[2], j.css3MoveMode = i.split(" ")[3]), i.indexOf("june-rx") < 0 && i.indexOf("june-lx") < 0 && i.indexOf("june-uy") < 0 && i.indexOf("june-dy") < 0 && i.indexOf("june-r360") < 0 && i.indexOf("june-r720") < 0 && (j.css3Mode = "", h++, j.css3MoveMode = i.split(" ")[3 - h]), i.indexOf("june-move") < 0 && (j.css3MoveMode = "")), j.css3Speed = d.css("transitionDuration") && "undefined" != d.css("transitionDuration") && "" != d.css("transitionDuration") ? 10 * parseFloat(d.css("transitionDuration").substr(0, d.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == j.css3Speed ? "0.5s" : parseFloat(j.css3Speed.replace("trans", "").replace("s", ""), 10) + "s", d.css("transitionTimingFunction") && "undefined" != d.css("transitionTimingFunction") && "" != d.css("transitionTimingFunction") ? (k = d.css("transitionTimingFunction"), j.css3Bezier = "", "cubic-bezier(0, 0, 0.7, 0.1)" == k && (j.css3Bezier = "bs1"), "cubic-bezier(0, 0, 0.85, 0.1)" == k && (j.css3Bezier = "bs2"), "cubic-bezier(0, 0, 1, 0.1)" == k && (j.css3Bezier = "bs3"), "cubic-bezier(0, 0, 0.1, 0.4)" == k && (j.css3Bezier = "bq1"), "cubic-bezier(0, 0, 0.1, 0.7)" == k && (j.css3Bezier = "bq2"), "cubic-bezier(0, 0, 0.1, 1)" == k && (j.css3Bezier = "bq3"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == k && (j.css3Bezier = "bt1"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == k && (j.css3Bezier = "bt2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == k && (j.css3Bezier = "bt3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == k && (j.css3Bezier = "bt4"), "cubic-bezier(1, 1, 0.5, 0)" == k && (j.css3Bezier = "bt5"), "cubic-bezier(0.5, 1, 1, 0)" == k && (j.css3Bezier = "bt6"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == k && (j.css3Bezier = "bt7"), "cubic-bezier(0.5, 2, 0.5, -1)" == k && (j.css3Bezier = "bt8"), "cubic-bezier(0.5, 3, 0.5, 0)" == k && (j.css3Bezier = "bt9"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == k && (j.css3Bezier = "bt10"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == k && (j.css3Bezier = "bt11"), "cubic-bezier(0.5, 1, 0.5, 0)" == k && (j.css3Bezier = "bt12")) : j.css3Bezier = "", a.attr("appID", j.appID), l = require("scripts/allwzset"), d.children(".jspcb, .pspe, .juneyd").each(function(c) {
						var g, h, i, k, m, n, o, p, q, r, s, t, u, f = $(this);
						f.hasClass("juneyd") && (f = f.children()), h = b.getChildPos(d, f, !0), i = 0, k = "", m = "", n = f.attr("class").replace("jspcb abs imghover ", ""), f.hasClass("pspe") && (f.children().hasClass("juneyd") && (f = f.children()), o = f.children(".outbox"), g = o.attr("data-x") || ";", g = g.split(";"), o.hasClass("c-2") ? (g[2] = "effect_w", o.hasClass("c-21") && (g[2] = "effect_w1")) : o.hasClass("d-2") ? g[2] = "effect_h" : o.hasClass("c-2") && o.hasClass("d-2") && (g[2] = "effect_wh"), f = o.children(".rel").children(".jspcb"), o.children(".rel").children(".juneyd").length > 0 && (f = o.children(".rel").children(".juneyd").children(".jspcb")), n = f.attr("class").replace("jspcb rel imghover ", "")), j.childConfig.push($.extend(!0, {}, b.appConfig["jspb"][1].tDynamicConfig)), j.childConfig[c].pSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.childConfig[c].bgColor = RGBToHex(f.css("background-color"), ""), j.childConfig[c].imgBgp = f.css("background-position") || "50% 50%", j.childConfig[c].spicSrc = f.find("img").attr("src") || "", j.childConfig[c].href = f.attr("href") || f.children("a").attr("href") || "", j.childConfig[c].hrefMode = f.attr("target") || f.children("a").attr("target") || "_blank", j.childConfig[c].displayMode = n.split(" ")[0], j.childConfig[c].contentType = "imgContent", j.childConfig[c].customContent = "", j.childConfig[c].autoSize = "no", p = f.attr("data-jspbType"), p ? (j.childConfig[c].contentType = p, "textContent" == p ? k = "display:none;" : "customContent" == p && (j.childConfig[c].customContent = f.html(), k = "display:none;")) : f.children("img").length < 1 && (j.childConfig[c].contentType = "customContent", j.childConfig[c].customContent = f.html(), k = "display:none;"), j.childConfig[c].css3Speed = n.split(" ")[1], j.childConfig[c].css3Mode = n.split(" ")[2], j.childConfig[c].css3ModeX = n.split(" ")[3], j.childConfig[c].css3ModeY = n.split(" ")[4], j.childConfig[c].css3MoveMode = n.split(" ")[5], n.replace(/  /g, "") == n && (n.indexOf("june-box-fadein") < 0 && n.indexOf("june-box-fadeout") < 0 && " " != n.charAt(0) && (n = " " + n, j.childConfig[c].displayMode = n.split(" ")[0], j.childConfig[c].css3Speed = n.split(" ")[1], j.childConfig[c].css3Mode = n.split(" ")[2], j.childConfig[c].css3ModeX = n.split(" ")[3], j.childConfig[c].css3ModeY = n.split(" ")[4], j.childConfig[c].css3MoveMode = n.split(" ")[5]), n.indexOf("june-box-fx") < 0 && n.indexOf("june-box-fy") < 0 && n.indexOf("june-box-sf") < 0 && n.indexOf("june-box-fx") < 0 && n.indexOf("june-box-fy") < 0 && n.indexOf("june-box-r1") < 0 && n.indexOf("june-box-r2") < 0 && n.indexOf("june-box-r5") < 0 && n.indexOf("june-box-r3") < 0 && n.indexOf("june-box-r7") < 0 && n.indexOf("june-box-fr1") < 0 && n.indexOf("june-box-fr2") < 0 && n.indexOf("june-box-fr5") < 0 && n.indexOf("june-box-fr3") < 0 && n.indexOf("june-box-fr7") < 0 && (j.childConfig[c].css3Mode = "", i++, j.childConfig[c].css3ModeX = n.split(" ")[3 - i], j.childConfig[c].css3ModeY = n.split(" ")[4 - i], j.childConfig[c].css3MoveMode = n.split(" ")[5 - i]), n.indexOf("june-box-fromleft") < 0 && n.indexOf("june-box-fromright") < 0 && n.indexOf("june-box-lx") < 0 && n.indexOf("june-box-rx") < 0 && (j.childConfig[c].css3ModeX = "", i++, j.childConfig[c].css3ModeY = n.split(" ")[4 - i], j.childConfig[c].css3MoveMode = n.split(" ")[5 - i]), n.indexOf("june-box-fromtop") < 0 && n.indexOf("june-box-frombottom") < 0 && n.indexOf("june-box-uy") < 0 && n.indexOf("june-box-dy") < 0 && (j.childConfig[c].css3ModeY = "", i++, j.childConfig[c].css3MoveMode = n.split(" ")[5 - i]), n.indexOf("june-move") < 0 && (j.childConfig[c].css3MoveMode = "")), b.setAttachID(j.childConfig[c]), j.childConfig[c].css3Speed = f.css("transitionDuration") && "undefined" != f.css("transitionDuration") && "" != f.css("transitionDuration") ? 10 * parseFloat(f.css("transitionDuration").substr(0, f.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == j.childConfig[c].css3Speed ? "0.5s" : parseFloat(j.childConfig[c].css3Speed.replace("trans", "").replace("s", ""), 10) + "s", f.css("transitionTimingFunction") && "undefined" != f.css("transitionTimingFunction") && "" != f.css("transitionTimingFunction") ? (q = f.css("transitionTimingFunction"), j.childConfig[c].css3Bezier = "", "cubic-bezier(0, 0, 0.7, 0.1)" == q && (j.childConfig[c].css3Bezier = "bs1"), "cubic-bezier(0, 0, 0.85, 0.1)" == q && (j.childConfig[c].css3Bezier = "bs2"), "cubic-bezier(0, 0, 1, 0.1)" == q && (j.childConfig[c].css3Bezier = "bs3"), "cubic-bezier(0, 0, 0.1, 0.4)" == q && (j.childConfig[c].css3Bezier = "bq1"), "cubic-bezier(0, 0, 0.1, 0.7)" == q && (j.childConfig[c].css3Bezier = "bq2"), "cubic-bezier(0, 0, 0.1, 1)" == q && (j.childConfig[c].css3Bezier = "bq3"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == q && (j.childConfig[c].css3Bezier = "bt1"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == q && (j.childConfig[c].css3Bezier = "bt2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == q && (j.childConfig[c].css3Bezier = "bt3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == q && (j.childConfig[c].css3Bezier = "bt4"), "cubic-bezier(1, 1, 0.5, 0)" == q && (j.childConfig[c].css3Bezier = "bt5"), "cubic-bezier(0.5, 1, 1, 0)" == q && (j.childConfig[c].css3Bezier = "bt6"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == q && (j.childConfig[c].css3Bezier = "bt7"), "cubic-bezier(0.5, 2, 0.5, -1)" == q && (j.childConfig[c].css3Bezier = "bt8"), "cubic-bezier(0.5, 3, 0.5, 0)" == q && (j.childConfig[c].css3Bezier = "bt9"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == q && (j.childConfig[c].css3Bezier = "bt10"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == q && (j.childConfig[c].css3Bezier = "bt11"), "cubic-bezier(0.5, 1, 0.5, 0)" == q && (j.childConfig[c].css3Bezier = "bt12")) : j.childConfig[c].css3Bezier = "", g && (j.childConfig[c].css3ModeX = g[0], j.childConfig[c].css3ModeY = g[1], j.childConfig[c].css3Mode = g[2]), "imgContent" == j.childConfig[c].contentType ? (r = "", s = "", j.childConfig[c].bgColor = RGBToHex(j.childConfig[c].bgColor, ""), "" != j.childConfig[c].bgColor && (s = "background-color:" + j.childConfig[c].bgColor + ";"), checkUrl(j.childConfig[c].pSrc) && (r = "background-image:url(" + j.childConfig[c].pSrc + ");"), $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="' + s + r + "left:" + h.left + "px;top:" + h.top + "px;width:" + h.width + "px;height:" + h.height + 'px;"></div>').tResize().appendTo(a).attr("appID", j.appID).attr("attachID", j.childConfig[c].attachID).css({
							backgroundPosition: j.childConfig[c].imgBgp || "50% 50%"
						})) : "customContent" == j.childConfig[c].contentType ? $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + h.left + "px;top:" + h.top + "px;width:" + h.width + "px;height:" + h.height + 'px;">' + j.childConfig[c].customContent + "</div>").tResize().appendTo(a).attr("appID", j.appID).attr("attachID", j.childConfig[c].attachID) : "textContent" == j.childConfig[c].contentType && (t = $('<div class="t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + h.left + "px;top:" + h.top + "px;width:" + h.width + "px;height:" + h.height + "px;line-height:" + h.height + 'px;"></div>').appendTo(a).attr("appID", j.appID).attr("attachID", j.childConfig[c].attachID), j.childConfig[c].qssetConfig = l.allImport(t, j.appID, f), t.hasClass("j-app-qswz") || t.addClass("j-app-qswz")), checkUrl(j.childConfig[c].pSrc) && (m = 'src="' + j.childConfig[c].pSrc + '"'), $('<li class="t-thumb" data-target="thumb-selected" appID="' + j.appID + '" attachID="' + j.childConfig[c].attachID + '"><span class="t-layer-eye diseye" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img ' + m + ' style="' + k + '" /></span><span class="t-thumb-text"></span></li>').prependTo($("#tThumb")), $("#tThumb").children(b.thumbSelected).removeClass(b.thumbSelectedVal), $("#tParentThumb").removeClass(b.thumbSelectedVal), $("#tThumb").children(b.thumbCls + "[attachID='" + j.childConfig[c].attachID + "']").addClass(b.thumbSelectedVal).addClass(".t-app-jspcb"), b.createAppName("jspbChild", j.appID, j.childConfig[c].attachID), u = a.children(b.appChildCls + "[attachID='" + j.childConfig[c].attachID + "']"), $("#tThumb").children(b.thumbCls + "[attachID='" + j.childConfig[c].attachID + "']").children(".t-thumb-text").html(u.attr("data-appName").replace(/特效/g, ""))
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
					return c.orderType && "" != c.orderType && (n = '<input type="hidden" name="orderType" class="otype" value="' + c.orderType + '">'), h[0].characterBgColor = RGBToHex(h[0].characterBgColor, ""), "" != h[0].characterBgColor && (x = "background-color:" + h[0].characterBgColor + ";"), h[0].dbdColor = RGBToHex(h[0].dbdColor, ""), B = "" != h[0].dbdColor ? "outline-color:" + h[0].dbdColor + ";" : "outline:none;", h[1].bgColor = RGBToHex(h[1].bgColor, ""), "" != h[1].bgColor && (y = "background-color:" + h[1].bgColor + ";"), checkUrl(h[0].searchSrc) && (t = "background:url(" + h[0].searchSrc + ") " + p + " no-repeat;"), checkUrl(h[1].searchSrc) && (u = "background:url(" + h[1].searchSrc + ") " + q + " no-repeat;"), "yes" == c.priceSwitch && (h[3].characterColor = RGBToHex(h[3].characterColor, ""), "" != h[3].characterColor && (J = "color:" + h[3].characterColor + ";"), "" != h[3].characterFont && (K = "font-family:" + h[3].characterFont + ";"), "" != h[3].characterSize && (L = "font-size:" + b.tParseInt(h[3].characterSize) + "px;"), h[2].bgColor = RGBToHex(h[2].bgColor, ""), "" != h[2].bgColor && (z = "background-color:" + h[2].bgColor + ";"), h[3].bgColor = RGBToHex(h[3].bgColor, ""), "" != h[3].bgColor && (A = "background-color:" + h[3].bgColor + ";"), checkUrl(h[2].searchSrc) && (v = "background:url(" + h[2].searchSrc + ") " + r + " no-repeat;"), checkUrl(h[3].searchSrc) && (w = "background:url(" + h[3].searchSrc + ") " + s + " no-repeat;"), o = '<li class="price"><div class="abs textprice" style="top:' + j.top + "px;left:" + j.left + "px;width:" + j.width + "px;height:" + j.height + "px;" + v + z + '"></div><input class="abs lowprice" type="text" name="lowPrice" size="4" value="" style="top:' + k.top + "px;left:" + k.left + "px;width:" + k.width + "px;height:" + k.height + "px;line-height:" + k.height + "px;" + w + A + "border:none;" + J + K + L + '"><input class="abs highprice" type="text" name="highPrice" size="4" value="" style="top:' + l.top + "px;left:" + l.left + "px;width:" + l.width + "px;height:" + l.height + "px;line-height:" + l.height + "px;" + w + A + "border:none;" + J + K + L + '"></li>'), h[0].characterColor = RGBToHex(h[0].characterColor, ""), "" != h[0].characterColor && (C = "color:" + h[0].characterColor + ";"), "" != h[0].characterFont && (D = "font-family:" + h[0].characterFont + ";"), "" != h[0].characterWeight && (E = "font-weight:" + h[0].characterWeight + ";"), "" != h[0].characterSize && (F = "font-size:" + b.tParseInt(h[0].characterSize) + "px;"), "italic" == h[0].characterStyle && (G = "font-style:" + h[0].characterStyle + ";"), "" != h[0].searchTextSpace && (H = "text-indent:" + b.tParseInt(h[0].searchTextSpace) + "px;"), "" != h[0].searchTextSpacing && (I = "letter-spacing:" + b.tParseInt(h[0].searchTextSpacing) + "px;"), "" == t && (t = "background:none;"), "" == u && (u = "background:none;"), c.href.indexOf(".com") >= 0 && (c.href = c.href.split(".com")[0] + ".com"), c.href && "" != c.href && (c.href = c.href.replace("http://", "//").replace("https://", "//")), '<form  name="SearchForm" action="' + c.href + '/search.htm" method="get" target="' + c.hrefMode + '" class="jsb searchform abs ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + "px;z-index:10;" + t + x + '"><ul><li><input name="keyword" type="text" class="gjz abs" value="' + c.childConfig[0].searchText + '" style="top:0px;left:0px;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;padding:0;" + t + x + B + "border:none;" + C + D + E + F + G + H + I + '" value="' + m + '" /></li>' + o + '<li><input type="submit" class="ss abs" value="" style="top:' + i.top + "px;left:" + i.left + "px;width:" + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;" + u + y + 'color:#FFF;border:none;cursor:pointer;outline:none;" /></li></ul>' + n + "</form>"
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
					return "" != u && (v = ' title= "' + u + '"'), "gzlink" == c.oppoLinkMode ? ("" != c.attentionID && (n = "j_CollectBrand"), o = 'data-brandid="' + c.attentionID + '"', w = "gzlink", i = "cursor:pointer;") : "wwlink" == c.oppoLinkMode ? ("" == c.wangID && (c.wangID = "junezx"), c.wangID = c.wangID.replace("：", ":"), c.wangID = encodeURI(c.wangID), c.wangID = c.wangID.replace(":", "%3A"), c.wangID = c.wangID.replace("%20", ""), c.href = "no" == c.shuntMode ? "http://www.taobao.com/webww/ww.php?ver=3&touid=" + c.wangID + "&siteid=cntaobao&status=1&charset=utf-8" : "http://amos.alicdn.com/getcid.aw?v=2&uid=" + c.wangID + "&site=cntaobao&s=2&groupid=0&charset=utf-8", w = "wwlink") : "mdlink" == c.oppoLinkMode ? (c.href = "#" + c.anchorSelect, c.hrefMode = "_self", w = "mdlink") : "gwlink" == c.oppoLinkMode && (q = " J_CartPluginTrigger", c.hrefMode = "", w = "gwlink"), c.hrefMode && "" != c.hrefMode && (p = ' target="' + c.hrefMode + '"'), ("" == c.oppoSrc || c.oppoSrc == c.pSrc) && (m = "display:none;"), x = "", y = "", z = "", A = "", c.oppoEffect && "none" != c.oppoEffect && "" != c.oppoEffect || (c.oppoSpeed = ""), c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (j = "background-color:" + c.bgColor + ";"), h = !checkUrl(c.pSrc) || "http://a.tbcdn.cn/s.gif" == c.pSrc && "https://a.tbcdn.cn/s.gif" == c.pSrc ? b.june.children(".junehtml").length > 0 || b.june.children(b.appCls + "[data-dblType='jzdb']").length > 0 ? "background-image:url(http://a.tbcdn.cn/s.gif);" : "junezxneedcheckembed;" : "background:url(" + c.pSrc + ") " + t + " no-repeat;", checkUrl(c.oppoSrc) ? (k = "background:url(" + c.oppoSrc + ") center center  no-repeat;", l = ' src="' + c.oppoSrc + '"') : c.oppoSpeed = "", "june-box-fadein" == c.oppoEffect ? (z = "display:block;", x = '<div class="jspb" style="width:' + d + "px;height:" + e + 'px;">', y = "</div>", c.oppoEffect = "", A = "june-box-fadein", r = "span", s = ">&nbsp;</span>", l = "") : k = "", '<a href="' + c.href + '" class="job abs imghover ' + c.oppoEffect + " " + c.oppoSpeed + " " + c.appID + " " + n + q + '" data-linkmode="' + w + '" data-appid="' + c.appID + '" ' + o + v + ' style="' + i + "overflow:hidden;" + h + j + "width:" + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;"' + p + ">" + x + "<" + r + ' class="' + c.oppoSpeed + " " + A + '" style="' + z + "width:" + d + "px;height:" + e + "px;" + k + m + '"' + l + " " + s + y + "</a>"
				},
				codeImport: function(a, b, c, d) {
					var e, k, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = c.attr("class").split(" "),
						j = i[3];
					h.oppoSpeed = (c.attr("class") || "").indexOf("trans") >= 0 ? c.attr("class").match(/trans(\w+)s/g).join("") : "", h.appID = c.attr("data-appid"), h.pSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(c.css("background-color"), ""), h.imgBgp = c.css("background-position") || "50% 50%", h.href = c.attr("href") || "", h.hrefMode = c.attr("target"), h.oppoLinkMode = c.attr("data-linkmode"), h.attentionID = "", h.wangID = "", h.shuntMode = "no", h.anchorSelect = "", h.oppoSrc = "", !h.href && "" == h.href, e = h.href.split("?"), h.tipText = "", c.attr("title") && "" != c.attr("title") && (h.tipText = c.attr("title")), c.children().hasClass("jspb") ? (c.children().children("span").length > 0 ? (h.oppoSrc = c.children().children("span").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.oppoSpeed = (c.children().children("span").attr("class") || "").indexOf("trans") >= 0 ? c.children().children("span").attr("class").match(/trans(\w+)s/g).join("") : "") : h.oppoSrc = c.children().children("img").attr("src"), j = "june-box-fadein") : h.oppoSrc = c.children("img").attr("src"), h.oppoSrc && "" != h.oppoSrc || (f.oppoSrc = ""), h.oppoEffect = j, c.hasClass("j_CollectBrand") && (h.oppoLinkMode = "gzlink", h.attentionID = c.attr("data-brandid") || ""), c.hasClass("J_CartPluginTrigger") && (h.oppoLinkMode = "gwlink"), RegExp("amos.alicdn.com/getcid.aw").test(e[0]) && (wangArr1 = h.href.split("&"), h.oppoLinkMode = "wwlink", h.wangID = wangArr1[1].replace("uid=", ""), h.wangID = h.wangID.replace("%3A", ":"), h.wangID = decodeURI(h.wangID), h.shuntMode = "yes"), RegExp("taobao.com/webww/ww.php").test(e[0]) && (wangArr1 = h.href.split("&"), h.oppoLinkMode = "wwlink", h.wangID = wangArr1[1].replace("touid=", ""), h.wangID = h.wangID.replace("%3A", ":"), h.wangID = decodeURI(h.wangID)), "mdlink" == h.oppoLinkMode && (h.anchorSelect = h.href.replace("#", ""), h.href = ""), k = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(k)), checkUrl(h.pSrc) ? a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), a.attr("appID", h.appID), d(g, h.appID)
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
				tUrl: "bigoppo.php",
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
					var q, r, s, t, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig,
						i = "",
						j = "",
						k = "",
						l = "",
						m = c.imgBgp || "50% 50%",
						n = "img",
						o = "/>",
						p = "";
					return ("" == c.oppoSrc || c.oppoSrc == c.pSrc) && (p = "display:none;"), q = "", r = "", s = "", t = "", "june-box-fadein" == c.oppoEffect ? (s = "display:block;", q = '<div class="jspb" style="width:' + d + "px;height:" + e + 'px;">', r = "</div>", c.oppoEffect = "", t = "june-box-fadein", n = "span", o = ">&nbsp;</span>") : c.oppoSpeed = "", c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (k = "background-color:" + c.bgColor + ";"), checkUrl(c.pSrc) && (j = "background:url(" + c.pSrc + ") " + m + "  no-repeat;"), checkUrl(c.oppoSrc) && (l = "background:url(" + c.oppoSrc + ") " + m + "  no-repeat;"), a.children(b.appChildCls).each(function(a) {
						var g = "",
							j = "",
							k = "ptlink",
							m = "",
							u = "",
							v = "",
							w = b.tParseInt($(this).css("top")),
							x = b.tParseInt($(this).css("left")),
							y = $(this).width(),
							z = $(this).height(),
							A = h[a].tipText || "",
							B = "";
						"" != A && (B = ' title= "' + A + '"'), "gzlink" == h[a].linkMode ? ("" != h[a].attentionID && (g = "j_CollectBrand"), j = 'data-brandid="' + h[a].attentionID + '"', k = "gzlink") : "wwlink" == h[a].linkMode ? ("" == h[a].wangID && (h[a].wangID = "junezx"), h[a].wangID = h[a].wangID.replace("：", ":"), h[a].wangID = encodeURI(h[a].wangID), h[a].wangID = h[a].wangID.replace(":", "%3A"), h[a].wangID = h[a].wangID.replace("%20", ""), h[a].href = "no" == h[a].shuntMode ? "http://www.taobao.com/webww/ww.php?ver=3&touid=" + h[a].wangID + "&siteid=cntaobao&status=1&charset=utf-8" : "http://amos.alicdn.com/getcid.aw?v=2&uid=" + h[a].wangID + "&site=cntaobao&s=2&groupid=0&charset=utf-8", k = "wwlink") : "mdlink" == h[a].linkMode ? (h[a].href = "#" + h[a].anchorSelect, h[a].hrefMode = "_self", k = "mdlink") : "gwlink" == h[a].linkMode && (u = " J_CartPluginTrigger", h[a].hrefMode = "", k = "gwlink"), h[a].hrefMode && "" != h[a].hrefMode && (v = ' target="' + h[a].hrefMode + '"'), checkUrl(c.oppoSrc) && (m = "background-position: -" + x + "px -" + w + "px;"), i += '<a href="' + h[a].href + '" class="jbocb abs imghover ' + c.oppoEffect + " " + c.oppoSpeed + " " + h[a].attachID + " " + g + u + '" data-linkmode="' + k + '" data-appid="' + h[a].attachID + '" ' + j + B + ' style="overflow:hidden;width:' + y + "px;height:" + z + "px;top:" + w + "px;left:" + x + 'px;"' + v + ">" + q + "<" + n + ' class="' + c.oppoSpeed + " " + t + '" style="' + s + "width:" + d + "px;height:" + e + "px;" + l + m + p + '" src="http://a.tbcdn.cn/s.gif" ' + o + r + "</a>"
					}), '<div class="abs jbob ' + c.appID + '" data-appid="' + c.appID + '" style="overflow:hidden;font-size:0;' + j + k + "width:" + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;">' + i + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var j, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = !1;
					h.appID = d.attr("data-appid"), h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.childConfig = [], a.attr("appID", h.appID), d.children("a.jbocb").each(function() {
						var f, l, m, g = $(this),
							j = {},
							k = "";
						j.href = g.attr("href") || "", j.hrefMode = g.attr("target"), j.linkMode = g.attr("data-linkmode"), j.wangID = "", j.shuntMode = "no", j.anchorSelect = "", f = j.href.split("?"), j.attachID = g.attr("data-appid"), j.attentionID = "", j.tipText = "", g.attr("title") && "" != g.attr("title") && (j.tipText = g.attr("title")), i || (l = $(this).attr("class") + " ", /june-box-fadein/.test(l) && (k = l.match(/(june-box-fadein)(\S)*?(?=\s)/g)[0]), /trans/.test(l) && (h.oppoSpeed = l.match(/(trans)(\S)*?(?=\s)/g)[0]), g.children().hasClass("jspb") ? (h.oppoSrc = g.children().children("span").length > 0 ? g.children().children("span").css("background-image").replace(/^url|[\(\"\)]*/g, "") : g.children().children("img").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k = "june-box-fadein") : h.oppoSrc = g.children("span").length > 0 ? g.children("span").css("background-image").replace(/^url|[\(\"\)]*/g, "") : g.children("img").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.oppoEffect = k || "", i = !0), g.hasClass("j_CollectBrand") && (j.linkMode = "gzlink", j.attentionID = g.attr("data-brandid") || ""), g.hasClass("J_CartPluginTrigger") && (j.linkMode = "gwlink"), RegExp("amos.alicdn.com/getcid.aw").test(f[0]) && (wangArr1 = j.href.split("&"), j.linkMode = "wwlink", j.wangID = wangArr1[1].replace("uid=", ""), j.wangID = j.wangID.replace("%3A", ":"), j.wangID = decodeURI(j.wangID), j.shuntMode = "yes"), RegExp("taobao.com/webww/ww.php").test(f[0]) && (wangArr1 = j.href.split("&"), j.linkMode = "wwlink", j.wangID = wangArr1[1].replace("touid=", ""), j.wangID = j.wangID.replace("%3A", ":"), j.wangID = decodeURI(j.wangID)), "mdlink" == j.linkMode && (j.anchorSelect = j.href.replace("#", ""), j.href = ""), j.popupConfig = {
							pSwitch: "no",
							popupPosition: "'tr','tl'",
							spaceX: "0",
							spaceY: "0",
							css3Mode: "",
							css3Bezier: "",
							css3Speed: "0.5s",
							popupHtml: ""
						}, m = b.getChildPos(d, g, !0), h.childConfig.push(j), $('<div class="t-app-child" data-dblType="jbob" data-attachType="jbobChild" style="background-color:rgba(64, 127, 255, 0.3);left:' + m.left + "px;top:" + m.top + "px;width:" + m.width + "px;height:" + m.height + 'px;"></div>').tResize().appendTo(a).attr("appID", h.appID).attr("attachID", j.attachID), b.createAppName("jbobChild", h.appID, j.attachID), j = null
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
				tUrl: "wang.php",
				tSubmit: function(a, c) {
					var d = (c.children(b.appOtherCls), c.children(".t-wang-text"));
					"2" == a.wangMode ? c.children(b.appOtherCls).removeClass("t-wang-big").addClass("t-wang-small") : c.children(b.appOtherCls).removeClass("t-wang-small").addClass("t-wang-big"), d.css({
						color: a.characterColor,
						backgroundColor: a.characterBgColor,
						fontSize: b.tParseInt(a.characterSize),
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						fontStyle: a.characterStyle || "normal"
					}).html(a.wangNickName), a.wangNickName && "" != a.wangNickName || d.html("&nbsp;"), c.children(b.appOtherCls).height(c.children(".t-wang-text").height()), c.css({
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
					return "1" == c.wangMode && (p = "padding-left:77px;"), o = "" != n ? ' title= "' + n + '"' : ' title= "点击这里给我发消息"', "" == c.wangID && (c.wangID = "junezx"), c.wangID = c.wangID.replace("：", ":"), c.wangID = encodeURI(c.wangID), c.wangID = c.wangID.replace(":", "%3A"), c.wangID = c.wangID.replace("%20", ""), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (h = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (i = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (j = "font-family:" + c.characterFont + ";"), "bold" == c.characterWeight && (k = "font-weight:" + c.characterWeight + ";"), "italic" == c.characterStyle && (l = "font-style:" + c.characterStyle + ";"), "" != c.characterSize && (m = "font-size:" + b.tParseInt(c.characterSize) + "px;"), c.wangNickName && "" != c.wangNickName || (c.wangNickName = "&nbsp;"), wangImg = '<div><a target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&touid=' + c.wangID + '&siteid=cntaobao&status=1&charset=utf-8" style="background:url(http://amos.alicdn.com/realonline.aw?v=2&uid=' + c.wangID + "&site=cntaobao&s=" + c.wangMode + "&charset=utf-8) left center no-repeat;" + h + i + j + k + l + m + p + 'display:block;white-space:nowrap;">' + c.wangNickName + "</a></div>", "1" == c.shuntMode && (wangImg = '<div><a target="_blank" href="http://amos.alicdn.com/getcid.aw?v=2&uid=' + c.wangID + '&site=cntaobao&s=2&groupid=0&charset=utf-8" style="background:url(http://amos.alicdn.com/online.aw?v=2&uid=' + c.wangID + "&site=cntaobao&s=" + c.wangMode + "&charset=utf-8) left center no-repeat;" + h + i + j + k + l + m + p + 'display:block;white-space:nowrap;">' + c.wangNickName + "</a></div>"), '<div class="jwb abs ' + c.appID + '" data-appid="' + c.appID + '"' + o + ' style="overflow:hidden;text-align:center;width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;line-height:" + e + 'px;z-index:10;">' + wangImg + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var j, k, g = JSON.parse(a.attr("data-config")),
						h = a.attr("data-dblType"),
						i = {},
						f = 0 == d.find("img").length ? d.children("div").children("a").css("background-image").split("&") : d.find("img").attr("src").split("&");
					i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), i.tipText = "", d.attr("title") && "" != d.attr("title") && (i.tipText = d.attr("title")), i.shuntMode = 1, i.wangID = f[1].split("=")[1], i.wangID = i.wangID.replace("%3A", ":"), i.wangID = decodeURI(i.wangID), i.wangMode = f[3].split("=")[1], j = d, d.children("div").length > 0 && d.children("div").children("a").length > 0 && (j = d.children("div").children("a")), i.wangNickName = j.html().replace(/<[^>]+>/g, ""), (" " == i.wangNickName || "&nbsp;" == i.wangNickName) && (i.wangNickName = ""), i.characterSize = j.css("font-size").replace(/px/g, ""), i.characterFont = j.css("font-family").replace(/'/g, ""), i.characterStyle = j.css("font-style") || "normal", i.characterColor = RGBToHex(j.css("color")), i.characterBgColor = RGBToHex(j.css("background-color"), ""), i.characterWeight = j.css("font-weight"), "400" == i.characterWeight && (i.characterWeight = "normal"), RegExp("realonline").test(f[0]) && (i.shuntMode = 2), k = $.extend(!0, g, i), a.attr("data-config", JSON.stringify(k)), "1" == i.wangMode && a.children(b.appOtherCls).removeClass("t-wang-small").addClass("t-wang-big"), a.children(".t-wang-text").css({
						color: k.characterColor,
						backgroundColor: k.characterBgColor,
						fontSize: b.tParseInt(k.characterSize),
						fontWeight: k.characterWeight,
						fontFamily: k.characterFont,
						fontStyle: k.characterStyle || "normal"
					}).html(i.wangNickName), i.wangNickName && "" != i.wangNickName || a.children(".t-wang-text").html("&nbsp;"), a.children(b.appOtherCls).height(a.children(".t-wang-text").height()), a.css({
						width: "auto",
						height: "auto"
					}), a.attr("appID", i.appID), e(h, i.appID)
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
				tUrl: "wanggroup.php",
				tSubmit: function(a, c) {
					var d = (c.children(b.appOtherCls), c.children(".t-wang-text"));
					c.children(b.appOtherCls).removeClass("t-wanggroup-1 t-wanggroup-2 t-wanggroup-3 t-wanggroup-4").addClass("t-wanggroup-" + a.wangMode), d.css({
						color: a.characterColor,
						backgroundColor: a.characterBgColor,
						fontSize: b.tParseInt(a.characterSize),
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						fontStyle: a.characterStyle || "normal"
					}).html(a.wangNickName), a.wangNickName && "" != a.wangNickName || d.html("&nbsp;"), c.children(b.appOtherCls).height(c.children(".t-wang-text").height()), c.css({
						width: "auto",
						height: "auto"
					}), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<span class="t-app-other t-wanggroup-2"></span><span class="t-wang-text">沃姆设计</span>',
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
					return j = "" != i ? ' title= "' + i + '"' : ' title= "点击这里给我发消息"', c.wangID = c.wangID.replace("：", ":"), c.wangID = encodeURI(c.wangID), c.wangID = c.wangID.replace(":", "%3A"), c.wangID = c.wangID.replace("%20", ""), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (k = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (l = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (m = "font-family:" + c.characterFont + ";"), "bold" == c.characterWeight && (n = "font-weight:" + c.characterWeight + ";"), "italic" == c.characterStyle && (o = "font-style:" + c.characterStyle + ";"), "" != c.characterSize && (p = "font-size:" + b.tParseInt(c.characterSize) + "px;"), c.wangNickName && "" != c.wangNickName || (c.wangNickName = "&nbsp;"), 1 == h ? r = "http://img04.taobaocdn.com/tps/i4/T1fdykXgtiXXXXXXXX-63-20.gif" : 2 == h ? (q = "padding-left:25px;", r = "http://img02.taobaocdn.com/tps/i2/T1m206XhdDXXXXXXXX-25-20.gif") : 3 == h ? (q = "padding-left:84px;", r = "http://img01.taobaocdn.com/tps/i1/T1o2J6XoFFXXXXXXXX-84-33.gif") : 4 == h && (q = "padding-left:42px;", r = "http://img03.taobaocdn.com/tps/i3/T1QLB6XgVDXXXXXXXX-42-33.gif"), wangImg = '<div><a target="_blank" href="http://www.taobao.com/go/act/other/wwgroup.php?uid=&tribeid=' + c.wangID + '" style="' + k + l + m + n + o + p + q + "background:url(" + r + ') left center no-repeat;display:block;white-space:nowrap;">' + c.wangNickName + "</a></div>", '<div class="jwwb abs ' + c.appID + '"' + j + ' style="overflow:hidden;text-align:center;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;top:" + f + "px;left:" + g + 'px;z-index:10;" data-qmd="' + h + '" data-qid="' + c.wangID + '" data-appid="' + c.appID + '">' + wangImg + "</div>"
				},
				codeImport: function(a, c, d, e) {
					{
						var j, k, g = JSON.parse(a.attr("data-config")),
							h = a.attr("data-dblType"),
							i = {};
						0 == d.find("img").length ? d.children("div").children("a").css("background-image").split("&") : d.find("img").attr("src").split("&")
					}
					i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), i.tipText = "", d.attr("title") && "" != d.attr("title") && (i.tipText = d.attr("title")), i.wangID = d.attr("data-qid"), i.wangID = i.wangID.replace("%3A", ":"), i.wangID = decodeURI(i.wangID), i.wangMode = d.attr("data-qmd"), j = d, d.children("div").length > 0 && d.children("div").children("a").length > 0 && (j = d.children("div").children("a")), i.wangNickName = j.html().replace(/<[^>]+>/g, ""), (" " == i.wangNickName || "&nbsp;" == i.wangNickName) && (i.wangNickName = ""), i.characterSize = j.css("font-size").replace(/px/g, ""), i.characterFont = j.css("font-family").replace(/'/g, ""), i.characterStyle = j.css("font-style") || "normal", i.characterColor = RGBToHex(j.css("color")), i.characterBgColor = RGBToHex(j.css("background-color"), ""), i.characterWeight = j.css("font-weight"), "400" == i.characterWeight && (i.characterWeight = "normal"), k = $.extend(!0, g, i), a.attr("data-config", JSON.stringify(k)), "2" != i.wangMode && a.children(b.appOtherCls).removeClass("t-wanggroup-2").addClass("t-wanggroup-" + i.wangMode), a.children(".t-wang-text").css({
						color: i.characterColor,
						backgroundColor: k.characterBgColor,
						fontSize: b.tParseInt(k.characterSize),
						fontWeight: k.characterWeight,
						fontFamily: k.characterFont,
						fontStyle: k.characterStyle || "normal"
					}).html(i.wangNickName), i.wangNickName && "" != i.wangNickName || a.children(".t-wang-text").html("&nbsp;"), a.children(b.appOtherCls).height(a.children(".t-wang-text").height()), a.css({
						width: "auto",
						height: "auto"
					}), a.attr("appID", i.appID), e(h, i.appID)
				}
			}, {
				appID: "",
				wangID: "",
				wangMode: "2",
				wangNickName: "沃姆设计",
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
				tUrl: "character.php",
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
					var c, d, e, f, g, h, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, i = JSON.parse(a.attr("data-config")),
						j = a.width(),
						k = a.height(),
						l = b.tParseInt(a.css("top")),
						m = b.tParseInt(a.css("left")),
						n = i.childConfig,
						o = a.children(b.appChildCls + "[data-attachType='jcdbDay']"),
						p = a.children(b.appChildCls + "[data-attachType='jcdbHour']"),
						q = a.children(b.appChildCls + "[data-attachType='jcdbMinute']"),
						r = a.children(b.appChildCls + "[data-attachType='jcdbSecond']"),
						s = i.contentType || "imgContent",
						t = i.customContent || "",
						u = i.endTimeType || "endTime",
						v = i.endTime,
						w = i.endTime1 || "",
						x = i.endTime2 || "",
						y = 1,
						z = i.startContent || "",
						A = i.endContent || "",
						B = "",
						C = "",
						D = "",
						E = "",
						F = "",
						G = "",
						H = "",
						I = i.imgBgp || "50% 50%",
						J = ("" + (new Date).valueOf()).substr(7, 6),
						K = "",
						L = "";
					return "endTime1" == u && (v = 1e3 * b.tParseInt(w)), "endTime2" == u && (y = b.tParseInt(i.endTime2Cycle || "1")), g = ' data-t="' + u + '"', h = ' data-c="' + y + '"', "endTime2" == u && (v = (new Date).Format("yyyy-MM-dd", 0, y) + " " + x), "" != z && (C = '<div class="abs jcdbstart0 jcdbstart' + J + '" style="top:0;width:100%;">' + z + "</div>"), "" != A && (D = '<div class="abs jcdbend0 jcdbend' + J + '" style="top:0;width:100%;display:none;">' + A + "</div>"), "imgContent" == s ? (i.bgColor = RGBToHex(i.bgColor, ""), "" != i.bgColor && (L = "background-color:" + i.bgColor + ";"), checkUrl(i.pSrc) && (K = "background:url(" + i.pSrc + ") " + I + " no-repeat;")) : B = '<div class="rel jcdbcus" style="width:100%;height:100%;">' + t + "</div>", "yes" == n[0].displayMode && (c = b.setChildPos(a, o, !0), M = "", N = "", O = "", P = "", Q = "", R = "", S = "", T = 0, n[0].characterColor = RGBToHex(n[0].characterColor, ""), "" != n[0].characterColor && (M = "color:" + n[0].characterColor + ";"), n[0].characterBgColor = RGBToHex(n[0].characterBgColor, ""), "" != n[0].characterBgColor && (S = "background-color:" + n[0].characterBgColor + ";"), "" != n[0].characterFont && (N = "font-family:" + n[0].characterFont + ";"), "" != n[0].characterWeight && (O = "font-weight:" + n[0].characterWeight + ";"), "" != n[0].characterSize && (P = "font-size:" + b.tParseInt(n[0].characterSize) + "px;"), "" != n[0].characterLetterSpacing && (Q = "letter-spacing:" + b.tParseInt(n[0].characterLetterSpacing) + "px;"), "italic" == n[0].characterStyle && (R = "font-style:" + n[0].characterStyle + ";"), "italic" == n[0].characterStyle && (T = b.tParseInt(n[0].characterSize / 4)), E = '<span class="abs ks-d ksd' + J + '" style="display:block;text-align:center;width:' + (c.width + T) + "px;height:" + c.height + "px;line-height:" + c.height + "px;left:" + c.left + "px;top:" + c.top + "px;" + M + N + O + P + Q + R + S + '">00</span>'), "endTime2" == u && (E = '<span class="abs ks-d ksd' + J + '" style="display:none;visibility :hidden;">00</span>'), "yes" == n[1].displayMode && (d = b.setChildPos(a, p, !0), U = "", V = "", W = "", X = "", Y = "", Z = "", $ = "", _ = 0, n[1].characterColor = RGBToHex(n[1].characterColor, ""), "" != n[1].characterColor && (U = "color:" + n[1].characterColor + ";"), n[1].characterBgColor = RGBToHex(n[1].characterBgColor, ""), "" != n[1].characterBgColor && ($ = "background-color:" + n[1].characterBgColor + ";"), "" != n[1].characterFont && (V = "font-family:" + n[1].characterFont + ";"), "" != n[1].characterWeight && (W = "font-weight:" + n[1].characterWeight + ";"), "" != n[1].characterSize && (X = "font-size:" + b.tParseInt(n[1].characterSize) + "px;"), "" != n[1].characterLetterSpacing && (Y = "letter-spacing:" + b.tParseInt(n[1].characterLetterSpacing) + "px;"), "italic" == n[1].characterStyle && (Z = "font-style:" + n[1].characterStyle + ";"), "italic" == n[1].characterStyle && (_ = b.tParseInt(n[1].characterSize / 4)), F = '<span class="abs ks-h ksh' + J + '" style="display:block;text-align:center;width:' + (d.width + _) + "px;height:" + d.height + "px;line-height:" + d.height + "px;left:" + d.left + "px;top:" + d.top + "px;" + U + V + W + X + Y + Z + $ + '">00</span>'), "yes" == n[2].displayMode && (e = b.setChildPos(a, q, !0), ab = "", bb = "", cb = "", db = "", eb = "", fb = "", gb = "", hb = 0, n[2].characterColor = RGBToHex(n[2].characterColor, ""), "" != n[2].characterColor && (ab = "color:" + n[2].characterColor + ";"), n[2].characterBgColor = RGBToHex(n[2].characterBgColor, ""), "" != n[2].characterBgColor && (gb = "background-color:" + n[2].characterBgColor + ";"), "" != n[2].characterFont && (bb = "font-family:" + n[2].characterFont + ";"), "" != n[2].characterWeight && (cb = "font-weight:" + n[2].characterWeight + ";"), "" != n[2].characterSize && (db = "font-size:" + b.tParseInt(n[2].characterSize) + "px;"), "" != n[2].characterLetterSpacing && (eb = "letter-spacing:" + b.tParseInt(n[2].characterLetterSpacing) + "px;"), "italic" == n[2].characterStyle && (fb = "font-style:" + n[2].characterStyle + ";"), "italic" == n[2].characterStyle && (hb = b.tParseInt(n[2].characterSize / 4)), G = '<span class="abs ks-m ksm' + J + '" style="display:block;text-align:center;width:' + (e.width + hb) + "px;height:" + e.height + "px;line-height:" + e.height + "px;left:" + e.left + "px;top:" + e.top + "px;" + ab + bb + cb + db + eb + fb + gb + '">00</span>'), "yes" == n[3].displayMode && (f = b.setChildPos(a, r, !0), ib = "", jb = "", kb = "", lb = "", mb = "", nb = "", ob = "", pb = 0, n[3].characterColor = RGBToHex(n[3].characterColor, ""), "" != n[3].characterColor && (ib = "color:" + n[3].characterColor + ";"), n[3].characterBgColor = RGBToHex(n[3].characterBgColor, ""), "" != n[3].characterBgColor && (ob = "background-color:" + n[3].characterBgColor + ";"), "" != n[3].characterFont && (jb = "font-family:" + n[3].characterFont + ";"), "" != n[3].characterWeight && (kb = "font-weight:" + n[3].characterWeight + ";"), "" != n[3].characterSize && (lb = "font-size:" + b.tParseInt(n[3].characterSize) + "px;"), "" != n[3].characterLetterSpacing && (mb = "letter-spacing:" + b.tParseInt(n[3].characterLetterSpacing) + "px;"), "italic" == n[3].characterStyle && (nb = "font-style:" + n[3].characterStyle + ";"), "italic" == n[3].characterStyle && (pb = b.tParseInt(n[3].characterSize / 4)), H = '<span class="abs ks-s kss' + J + '" style="display:block;text-align:center;width:' + (f.width + pb) + "px;height:" + f.height + "px;line-height:" + f.height + "px;left:" + f.left + "px;top:" + f.top + "px;" + ib + jb + kb + lb + mb + nb + ob + '">00</span>'), '<div class="jcdb abs J_TWidget jcdd ' + i.appID + '"' + g + h + ' data-appid="' + i.appID + '" style="width:' + j + "px;height:" + k + "px;top:" + l + "px;left:" + m + "px;z-index:10;" + K + L + '" data-widget-type="Countdown" data-widget-config="{ \'endTime\':\'' + v + "','interval':1000,'timeRunCls':'.jcdbstart" + J + "','timeUnitCls':{'d':'.ksd" + J + "','h':'.ksh" + J + "','m':'.ksm" + J + "','s':'.kss" + J + "'},'minDigit':1,'timeEndCls':'.jcdbend" + J + "'}\">" + B + C + E + F + G + H + D + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var f, o, g = JSON.parse(a.attr("data-config")),
						h = a.attr("data-dblType"),
						i = $.parseJSON(d.attr("data-widget-config").replace(/'/g, '"')),
						j = a.children(b.appChildCls + "[data-attachType='jcdbDay']"),
						k = a.children(b.appChildCls + "[data-attachType='jcdbHour']"),
						l = a.children(b.appChildCls + "[data-attachType='jcdbMinute']"),
						m = a.children(b.appChildCls + "[data-attachType='jcdbSecond']"),
						n = {};
					n.childConfig = [], n.childConfig[0] = {}, n.childConfig[1] = {}, n.childConfig[2] = {}, n.childConfig[3] = {}, n.childConfig[0].displayMode = "no", n.childConfig[1].displayMode = "no", n.childConfig[2].displayMode = "no", n.childConfig[3].displayMode = "no", n.customContent = "", n.startContent = "", n.endContent = "", timeParent = d.children(), j.hide(), k.hide(), l.hide(), m.hide(), n.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), n.endTime2Cycle = d.attr("data-c") || "3", n.endTimeType = d.attr("data-t") || "endTime", n.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.bgColor = RGBToHex(d.css("background-color"), ""), n.imgBgp = d.css("background-position") || "50% 50%", "endTime" == n.endTimeType && (n.endTime = i.endTime, n.endTime1 = ""), "endTime1" == n.endTimeType && (n.endTime1 = i.endTime / 1e3, n.endTime = (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3)), "endTime2" == n.endTimeType && (n.endTime2 = new Date(i.endTime).Format("hh:mm:ss"), n.endTime = (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3)), n.contentType = "imgContent", d.children(".jcdbcus").length > 0 && (n.customContent = d.children(".jcdbcus").html(), n.contentType = "customContent"), "endTime2" != n.endTimeType ? (d.children(".jcdbstart0").length > 0 && (n.startContent = d.children(".jcdbstart0").html()), d.children(".jcdbend0").length > 0 && (n.endContent = d.children(".jcdbend0").html())) : d.hasClass("jcdd") ? (d.children(".jcdbstart0").length > 0 && (n.startContent = d.children(".jcdbstart0").html()), d.children(".jcdbend0").length > 0 && (n.endContent = d.children(".jcdbend0").html())) : (n.startContent = "", n.endContent = "", timeParent = d.children(".jcdbstart0").children()), timeParent.each(function() {
						var e = $(this);
						e.hasClass("ks-d") && "no" == n.childConfig[0].displayMode && (n.childConfig[0].displayMode = "yes", n.childConfig[0].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[0].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[0].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[0].characterWeight = e.css("font-weight"), "400" == n.childConfig[0].characterWeight && (n.childConfig[0].characterWeight = "normal"), n.childConfig[0].characterFont = e.css("font-family"), n.childConfig[0].characterStyle = e.css("font-style") || "normal", n.childConfig[0].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), f = b.getChildPos(d, e, !0), j.css({
							color: n.childConfig[0].characterColor,
							top: f.top,
							left: f.left
						}).show()), e.hasClass("ks-h") && "no" == n.childConfig[1].displayMode && (n.childConfig[1].displayMode = "yes", n.childConfig[1].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[1].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[1].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[1].characterWeight = e.css("font-weight"), "400" == n.childConfig[1].characterWeight && (n.childConfig[1].characterWeight = "normal"), n.childConfig[1].characterFont = e.css("font-family"), n.childConfig[1].characterStyle = e.css("font-style") || "normal", n.childConfig[1].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), f = b.getChildPos(d, e, !0), k.css({
							top: f.top,
							left: f.left
						}).show()), e.hasClass("ks-m") && "no" == n.childConfig[2].displayMode && (n.childConfig[2].displayMode = "yes", n.childConfig[2].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[2].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[2].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[2].characterWeight = e.css("font-weight"), "400" == n.childConfig[2].characterWeight && (n.childConfig[2].characterWeight = "normal"), n.childConfig[2].characterFont = e.css("font-family"), n.childConfig[2].characterStyle = e.css("font-style") || "normal", n.childConfig[2].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), f = b.getChildPos(d, e, !0), l.css({
							top: f.top,
							left: f.left
						}).show()), e.hasClass("ks-s") && "no" == n.childConfig[3].displayMode && (n.childConfig[3].displayMode = "yes", n.childConfig[3].characterColor = RGBToHex(e.css("color"), "#FFFFFF"), n.childConfig[3].characterBgColor = RGBToHex(e.css("background-color"), ""), n.childConfig[3].characterSize = e.css("font-size").replace(/px/g, ""), n.childConfig[3].characterWeight = e.css("font-weight"), "400" == n.childConfig[3].characterWeight && (n.childConfig[3].characterWeight = "normal"), n.childConfig[3].characterFont = e.css("font-family"), n.childConfig[3].characterStyle = e.css("font-style") || "normal", n.childConfig[3].characterLetterSpacing = e.css("letter-spacing").replace(/px/g, ""), f = b.getChildPos(d, e, !0), m.css({
							top: f.top,
							left: f.left
						}).show())
					}), o = $.extend(!0, g, n), a.attr("data-config", JSON.stringify(o)), b.appConfig["jcdb"][1].tSubmit(o, a), a.attr("appID", n.appID), j.attr("appID", n.appID), k.attr("appID", n.appID), l.attr("appID", n.appID), m.attr("appID", n.appID), e(h, n.appID)
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
					var n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.childConfig[0],
						i = ("" + (new Date).valueOf()).substr(7, 6),
						j = '<div class="scroller" style="overflow:hidden;width:' + d + "px;height:" + e + 'px;z-index:10;"><div class="ks-switchable-content dc' + i + '">',
						k = "",
						l = "",
						m = "";
					if (c.shadeMode && "yes" == c.shadeMode ? (o = c.shadeCount || 1, p = "", q = "", r = "", s = "", t = "", u = 0, newWidth = b.tParseInt(d / o), u = d % o, 0 != u && o++, shadeMarginLeft = "") : newWidth = d, $.each(c.contentType, function(a) {
						var f = "";
						checkUrl(c.sliderSrc[a]) && (f = "background:url(" + c.sliderSrc[a] + ") no-repeat scroll center center transparent;"), k += "imgContent" == c.contentType[a] ? '<div class="haibaos_pic haibaos_0" style="height:' + e + "px;width:" + newWidth + 'px;display:block;float:left;overflow:hidden;"><div class="elexb rel" style="height:' + e + "px;width:" + d + "px;" + f + '"><a class="simple J_TWidget" href="' + c.sliderHref[a] + '" target="' + c.hrefMode + '" style="height:' + e + "px;width:" + d + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>' : '<div class="haibaos_pic haibaos_0" style="height:' + e + "px;width:" + newWidth + 'px;display:block;float:left;overflow:hidden;"><div class="elexb rel" style="height:' + e + "px;width:" + d + 'px;">' + c.customContent[a] + "</div></div>", l += "<li></li>"
					}), c.shadeMode && "yes" == c.shadeMode || (k += "</div></div>"), "no" == c.sliderArrow && (m = "display:none;"), x = a.children(b.appChildCls + "[data-attachType='jsdbOArrow']"), y = a.children(b.appChildCls + "[data-attachType='jsdbTArrow']"), v = b.setChildPos(a, x, !0), w = b.setChildPos(a, y, !0), z = "", A = "", B = "", C = "", D = "", E = "", F = "", G = "", H = "", "yes" == c.sliderArrow && (checkUrl(h.oSrc) && (A = 'src="' + h.oSrc + '" alt="上一页"'), checkUrl(h.tSrc) && (B = 'src="' + h.tSrc + '" alt="下一页"'), checkUrl(h.oSrcHover) && (E = 'src="' + h.oSrcHover + '" alt="上一页"'), checkUrl(h.tSrcHover) && (F = 'src="' + h.tSrcHover + '" alt="下一页"'), G = "<img " + A + " />", H = "<img " + B + " />", ("" != E || "" != F) && (z = " junefade", G = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + A + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + E + " />", H = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + B + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + F + " />")), C = " 'prevBtnCls': 'prev" + i + "', 'nextBtnCls': 'next" + i + "', ", D = '<span class="abs prev' + i + z + '" style="cursor:pointer;width:' + v.width + "px;height:" + v.height + "px;top:" + v.top + "px;left:" + v.left + 'px;z-index:99;">' + G + '</span><span class="abs next' + i + z + '" style="cursor:pointer;width:' + w.width + "px;height:" + w.height + "px;top:" + w.top + "px;left:" + w.left + 'px;z-index:99;">' + H + "</span>", I = "", c.shadeMode && "yes" == c.shadeMode) {
						for (J = 0; o > J; J++) n = newWidth, J == o - 1 && 0 != u && (n = u, I = "jsdbyys "), 0 == J ? (s = ' data-appid="' + c.appID + '"', t = "top:" + f + "px;left:" + g + "px;") : (s = "", t = ""), p += '<div class="jsdb ' + I + "abs J_TWidget " + c.appID + '"' + s + ' style="height:' + e + "px;width:" + d + "px;" + t + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'dc_' + J + "_" + i + "','navCls':'dn" + i + "','effect':'" + c.sliderMode + "','steps':1,'easing':'" + c.sliderEffect + "','duration':'" + (.5 + .02 * J).toFixed(2) + "','autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + "," + C + "'lazyDataType':'img-src'}\">", j = '<div class="scroller" style="overflow:hidden;width:' + n + "px;height:" + e + 'px;z-index:10;float:left;"><div class="ks-switchable-content dc_' + J + "_" + i + '">', div1 = k.replace(/\<div class\=\"elexb([^\>]*)\>/g, function(a) {
							var d = a;
							return d = d.replace(/(width\:[\d\.]*px\;)(left\:\-?([^\;]*)\;)?/g, function(a, d, e, f) {
								var g = "";
								return "scrollx" == c.sliderMode && f && "" != f && (g = b.tParseInt(f)), d + "left:-" + (newWidth * J + g) + "px;"
							})
						}), J == o - 1 && 0 != u && (div1 = div1.replace(/\<div class\=\"haibaos_pic([^\>]*)\>/g, function(a) {
							var b = a;
							return b = b.replace(/width\:([\d\.]*)px\;/g, function(a, b) {
								return b = b.replace(newWidth, n), "width:" + b + "px;"
							})
						})), div1 += "</div></div>", q += j + div1, r += "</div>";
						return p + q + '<div class="smlldiv_btn" style="position:relative;z-index:99;' + m + '">' + D + '</div><ul class="ks-switchable-nav dn' + i + '" style="display:none;">' + l + "</ul>" + r
					}
					return '<div class="jsdb abs J_TWidget section scrollable dd ' + c.appID + '" data-appid="' + c.appID + '" style="height:' + e + "px;width:" + d + "px;top:" + f + "px;left:" + g + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'dc' + i + "','navCls':'dn" + i + "','effect':'" + c.sliderMode + "','steps':1,'easing':'" + c.sliderEffect + "','duration':'0.5','autoplay':" + c.sliderAuto + ",'interval':" + c.sliderTime + "," + C + "'lazyDataType':'img-src'}\"><div class=\"smlldiv_btn\" style=\"position:relative;z-index:99;" + m + '">' + D + "</div>" + j + k + '<ul class="ks-switchable-nav dn' + i + '" style="display:none;"></ul></div>'
				},
				codeImport: function(a, c, d, e) {
					var f, g, l, m, n, o, h = JSON.parse(a.attr("data-config")),
						i = a.attr("data-dblType"),
						j = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')),
						k = {};
					if (k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.customContent = [], k.contentType = [], k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jsdb").length > 0) {
						for (k.shadeCount = 1; d.children(".jsdb").length > 0;) d = d.children(".jsdb"), j = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
						}, d.hasClass("jsdbyys") || k.shadeCount++;
						k.shadeMode = "yes"
					}
					d.children(".scroller:eq(0)").find("div.haibaos_pic").each(function() {
						var b, c, d, e, a = $(this);
						a.children("div.elexb").length > 0 && (a = a.children("div.elexb")), b = a.find("a.simple"), c = a.css("background-image").replace(/^url|[\(\"\)]*/g, ""), d = a.find("a.simple").attr("href"), e = a.html(), b.length > 0 ? (k.contentType.push("imgContent"), k.sliderSrc.push(c), k.sliderHref.push(d), k.customContent.push("")) : (k.contentType.push("customContent"), k.sliderSrc.push(""), k.sliderHref.push(""), k.customContent.push(e))
					}), d.children(".scroller:eq(0)").find("div.haibaos_pic").length > 1 && (h.sliderSrc = [], h.sliderHref = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], h.customContent = [], h.contentType = []), l = d.children(".smlldiv_btn"), k.sliderArrow = "none" == l.css("display") ? "no" : "yes", j.effect && (k.sliderMode = j.effect), j.autoplay && (k.sliderAuto = j.autoplay), j.easing && (k.sliderEffect = j.easing), j.interval && (k.sliderTime = j.interval), m = l.children("span:eq(0)"), n = l.children("span:eq(1)"), l.children("span:eq(0)").hasClass("prevsamll") && (m = l.children("span:eq(0)").children("img:eq(0)"), n = l.children("span:eq(1)").children("img:eq(0)")), k.hrefMode = d.find("a.simple").attr("target") || "_blank", k.childConfig[0].oSrc = l.children("span:eq(0)").children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = l.children("span:eq(1)").children("img:eq(0)").attr("src"), k.childConfig[0].autoSize = "no", k.childConfig[0].autoSize1 = "no", l.children("span:eq(0)").children("img:eq(1)").length > 0 && (k.childConfig[0].oSrcHover = l.children("span:eq(0)").children("img:eq(1)").attr("src")), l.children("span:eq(1)").children("img:eq(1)").length > 0 && (k.childConfig[0].tSrcHover = l.children("span:eq(1)").children("img:eq(1)").attr("src")), f = b.getChildPos(d, m, !0), g = b.getChildPos(d, n, !0), o = $.extend(h, k), a.attr("data-config", JSON.stringify(o)), require("scripts/tAjax"), "" != k.sliderSrc[0] && checkUrl(k.sliderSrc[0]) ? a.css({
						backgroundImage: "url(" + k.sliderSrc[0] + ")"
					}) : a.css({
						backgroundImage: ""
					}), "no" == k.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jsdbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jsdbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jsdbOArrow']").css({
						backgroundImage: "url(" + k.childConfig[0].oSrc + ")",
						width: 0 == f.width ? 48 : f.width,
						height: 0 == f.height ? 48 : f.height,
						top: f.top,
						left: f.left
					}), a.children(b.appChildCls + "[data-attachType='jsdbTArrow']").css({
						backgroundImage: "url(" + k.childConfig[0].tSrc + ")",
						width: 0 == g.width ? 48 : g.width,
						height: 0 == g.height ? 48 : g.height,
						top: g.top,
						left: g.left
					})), a.children(b.appOtherCls).html(""), "customContent" == k.contentType[0] && (a.css({
						backgroundImage: ""
					}), a.children(b.appOtherCls).html(k.customContent[0])), a.children(b.appChildCls + "[data-attachType='jsdbOArrow']").attr("appID", k.appID), a.children(b.appChildCls + "[data-attachType='jsdbTArrow']").attr("appID", k.appID), a.attr("appID", k.appID), e(i, k.appID)
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
					var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, d = require("scripts/tAjax"),
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
					}), e.show(), f.show()) : (e.hide(), f.hide()), !a.thumbSet && (a.thumbSet = []), !a.thumbCircleSet && (a.thumbCircleSet = []), c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:gt(" + (a.contentType.length - 1) + ")").hide(), i = "", j = 0, k = 0, l = 0; l < a.contentType.length; l++) m = c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:eq(" + l + ")"), i = "", n = c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:eq(" + (l - 1) + ")"), 0 == l && (n = c.children(b.appOtherCls)), a.smallCircleMode[l] && "yes" == a.smallCircleMode[l] ? (o = a.smallCircleBgColor[l] || a.smallCircleBgColor1[l] || "", p = "", q = "", r = "", a.thumbCircleSet[l] && "" != a.thumbCircleSet[l] && (p = JSON.parse(a.thumbCircleSet[l]), r = p.characterContent, o = p.characterBgColor || p.characterBgColorHover || "", p.characterColor = RGBToHex(p.characterColor, ""), "" != p.characterColor && (q += "color:" + p.characterColor + ";"), "" != p.characterFont && (q += "font-family:" + p.characterFont + ";"), "" != p.characterWeight && (q += "font-weight:" + p.characterWeight + ";"), "" != p.characterSize && (q += "font-size:" + b.tParseInt(p.characterSize) + "px;")), m.length > 0 ? (m.html('<div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + q + '">' + r + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && m.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && m.css({
						height: a.sHeight
					}), m.children(".t-jwfb-circle").css({
						backgroundColor: RGBToHex(o, ""),
						borderRadius: "50%"
					}), m.css({
						lineHeight: m.height() + "px"
					}).show()) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + "px;line-height:" + t + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + q + '">' + r + "</div></div>").tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), m.children(".t-jwfb-circle").css({
						backgroundColor: RGBToHex(o, ""),
						borderRadius: "50%"
					}))) : a.thumbSet[l] && "" != a.thumbSet[l] ? (u = JSON.parse(a.thumbSet[l]), m.length > 0 ? (m.html(""), b.appConfig["jcb"][1].tSubmit(u, m), m.removeAttr("data-config")) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + 'px;z-index:101;"></div>').tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), v = c.children(b.appChildCls + "[attachID='" + a.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(u, v), v.removeAttr("data-config"))) : (i = "imgContent" == a.contentType[l] ? "" != a.smallImgSrcT[l] ? a.smallImgSrcT[l] : "" != a.smallHoverSrcT[l] ? a.smallHoverSrcT[l] : a.sliderSrc[l] : "" != a.smallImgSrc[l] ? a.smallImgSrc[l] : "" != a.smallHoverSrc[l] ? a.smallHoverSrc[l] : a.sliderSrc[l], m.length > 0 ? (checkUrl(i) ? m.children("img").length > 0 ? m.children("img").attr({
						src: i
					}) : m.html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + i + '">').tResize() : m.children("img").removeAttr("src"), "" != a.sWidth && $.isNumeric(a.sWidth) && m.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && m.css({
						height: a.sHeight
					}), m.show()) : (s = 120, t = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (s = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (t = a.sHeight), b.setAttachID(a.childConfig[0]), m = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(s)) + "px;width:" + s + "px;height:" + t + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + i + '"></div>').tResize().insertAfter(n).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), j = b.tParseInt(m.css("left")), k = b.tParseInt(m.css("top"));
					if (c.children(b.appOtherCls).html(""), w = b.tParseInt(a.sliderActive) - 1, x = "", y = "", "no" == a.sliderOver ? c.children(b.appOtherCls).addClass("t-app-custom") : c.children(b.appOtherCls).removeClass("t-app-custom"), "scrolly" != a.sliderMode) {
						for ("yes" == a.sliderOver && "yes" == a.sliderOverMongolia && (x = '<div style="position:absolute;left:-99999px;top:0px;width:99999px;height:' + c.height() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', y = '<div style="position:absolute;left:' + c.width() + "px;top:0px;width:99999px;height:" + c.height() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>'), c.children(b.appOtherCls).attr("data-s", "no"), c.children(b.appOtherCls).append('<div style="width:99999px;height:100%;position:relative;"></div>' + x + y), l = 0; l < 3 * a.contentType.length; l++) z = l % a.contentType.length, A = "", "imgContent" == a.contentType[z] ? (checkUrl(h[z]) && (A = ' src="' + h[z] + '"'), c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;float:left;width:auto;height:100%;"><img' + A + "></div>")) : c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;float:left;width:auto;height:100%;">' + a.customContent[z] + "</div>");
						setTimeout(function() {
							c.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width() * (b.tParseInt(w) + a.contentType.length) + "px"), c.children(b.appOtherCls).children("div:eq(0)").children("div").width(c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width())
						}, 100)
					} else {
						for ("yes" == a.sliderOver && "yes" == a.sliderOverMongolia && (x = '<div style="position:absolute;top:-99999px;left:0px;height:99999px;width:' + c.width() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', y = '<div style="position:absolute;top:' + c.height() + "px;left:0px;height:99999px;width:" + c.width() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>'), c.children(b.appOtherCls).attr("data-s", "yes"), c.children(b.appOtherCls).append('<div style="height:99999px;width:100%;position:relative;"></div>' + x + y), l = 0; l < 3 * a.contentType.length; l++) z = l % a.contentType.length, A = "", "imgContent" == a.contentType[z] ? (checkUrl(h[z]) && (A = ' src="' + h[z] + '"'), c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;height:auto;width:100%;"><img' + A + "></div>")) : c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;height:auto;width:100%;">' + a.customContent[z] + "</div>");
						setTimeout(function() {
							c.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height() * (b.tParseInt(w) + a.contentType.length) + "px"), c.children(b.appOtherCls).children("div:eq(0)").children("div").height(c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height())
						}, 100)
					}
					"no" == a.sliderOver && c.children(b.appOtherCls).children("div:eq(0)").children("div:gt(" + (b.tParseInt(w) + 2 * a.contentType.length - 1) + ")").hide(), "no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:lt(" + a.contentType.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:lt(" + a.contentType.length + ")").show(), a.sliderMargin > 1 && (B = Math.floor(a.contentType.length / a.sliderMargin), c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:gt(" + (B - 1) + ")").hide()), g.length > 0 && g.each(function(c) {
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
					var c, d, e, f, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, g = JSON.parse(a.attr("data-config")),
						h = a.width(),
						i = a.height(),
						j = b.tParseInt(a.css("top")),
						k = b.tParseInt(a.css("left")),
						l = g.childConfig[0],
						m = ("" + (new Date).valueOf()).substr(7, 6),
						n = a.children(b.appChildCls + "[data-attachType='lbePanel']"),
						o = "",
						p = g.sliderMode,
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
						C = "",
						D = "",
						E = "",
						F = "float:left;",
						G = g.smallCircleMode || [],
						H = g.smallCircleBgColor || [],
						I = g.smallCircleBgColor1 || [],
						J = !1,
						K = "",
						L = "";
					if (!g.sliderDelay && (g.sliderDelay = "0"), !g.smallShowCss && (g.smallShowCss = ""), !g.smallShowSpeed && (g.smallShowSpeed = "trans02s"), g.sliderImgMode) {
						for (g.customContent = [], g.contentType = [], g.smallImgSrc = [], g.smallHoverSrc = [], g.smallImgSrcT = [], g.smallHoverSrcT = [], g.thumbSet = [], g.thumbCircleSet = [], g.smallCircleMode = [], g.smallCircleBgColor = [], g.smallCircleBgColor1 = [], M = 0; M < g.sliderSrc.length; M++) g.customContent.push(""), g.contentType.push("imgContent"), g.smallImgSrc.push(""), g.smallHoverSrc.push(""), g.smallImgSrcT.push(""), g.smallHoverSrcT.push(""), g.thumbSet.push(""), g.thumbCircleSet.push(""), g.smallCircleMode.push("no"), g.smallCircleBgColor.push(""), g.smallCircleBgColor1.push("");
						g.sliderSmallImg = "no", g.css3Mode = "", g.kgdSwitch = "black", g.sliderDelay = "0", g.sliderSwitch = "mouse", g.displayMode = "", g.css3Speed = "trans05s", g.sWidth = "15", g.sHeight = "15", g.defaultSmallImg = "", g.defaultSmallHover = "", delete g.sliderImgMode
					}
					if (c = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width(), d = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height(), 0 == c && (c = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").children().width()), 0 == d && (d = a.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").children().height()), "scrolly" != g.sliderMode ? (0 == c && (c = h / g.contentType.length), 0 == d && (d = i)) : (0 == c && (c = h), 0 == d && (d = i / g.contentType.length), F = ""), !g.sliderActive && (g.sliderActive = "1"), e = b.tParseInt(g.sliderActive) - 1, ("" != g.displayMode || "" != g.css3Mode) && (C = " jspb j-b", K = " " + g.css3Speed, L = " " + g.css3Speed, "june-box-fadein" == g.displayMode && (K += " june-box-fadein b-1-fadein", L += " june-box-fadein b-1-fadein"), g.css3Mode.indexOf("moveout") >= 0 && (K += " june-box-lx" + g.css3Mode.replace(/moveout/g, "") + " b-1-lx" + g.css3Mode.replace(/moveout/g, ""), L += " june-box-rx" + g.css3Mode.replace(/moveout/g, "") + " b-1-rx" + g.css3Mode.replace(/moveout/g, "")), g.css3Mode.indexOf("movein") >= 0 && (K += " june-box-rx" + g.css3Mode.replace(/movein/g, "") + " b-1-rx" + g.css3Mode.replace(/moveout/g, ""), L += " june-box-lx" + g.css3Mode.replace(/movein/g, "") + " b-1-lx" + g.css3Mode.replace(/moveout/g, ""))), g.contentType[0], N = !1, !g.thumbSet && (g.thumbSet = []), !g.thumbCircleSet && (g.thumbCircleSet = []), g.thumbSet) for (M = 0; M < g.thumbSet.length; M++) if (g.thumbSet[M] && "" != g.thumbSet[M]) {
						N = !0;
						break
					}
					for (N ? E = '<div class="sfa' + C + '" style="width:' + h + "px;height:" + i + 'px;z-index:10;">' : (D = C, C = " j-b"), O = 0; O < g.customContent.length; O++) if (g.customContent[O].indexOf("jspb") >= 0) {
						J = !0;
						break
					}
					for (J && (C = D = " j-b"), "" != g.smallShowCss && "" == D && (D = " j-b"), n.length > 0 && n.each(function(a) {
						var d = $(this),
							e = d.width(),
							f = d.height(),
							h = b.tParseInt(d.css("top")),
							i = b.tParseInt(d.css("left")),
							j = "";
						g.childConfig[a + 1] && (g.childConfig[a + 1].smallShowCss && "" != g.childConfig[a + 1].smallShowCss && ("" == D && (D = " j-b"), j = " " + g.childConfig[a + 1].smallShowCss + " " + (g.childConfig[a + 1].smallShowSpeed || "trans02s")), o += '<div class="abs lbepanel' + j + '" style="overflow: hidden;width:' + e + "px;height:" + f + "px;top:" + h + "px;left:" + i + "px;z-index:" + (10 + b.tParseInt(g.childConfig[a + 1].zFloor)) + ';">' + g.childConfig[a + 1].customContent + "</div>")
					}), f = "white" == g.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == g.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", R = a.children(b.appChildCls + "[data-attachType='jwfbOArrow']"), S = a.children(b.appChildCls + "[data-attachType='jwfbTArrow']"), P = b.setChildPos(a, R, !0), Q = b.setChildPos(a, S, !0), T = "", U = "", V = "", W = "", X = "", Y = "", Z = "", "yes" == g.sliderArrow && (checkUrl(l.oSrc) && (U = 'src="' + l.oSrc + '" alt="上一页"'), checkUrl(l.tSrc) && (V = 'src="' + l.tSrc + '" alt="下一页"'), checkUrl(l.oSrcHover) && (W = 'src="' + l.oSrcHover + '" alt="上一页"'), checkUrl(l.tSrcHover) && (X = 'src="' + l.tSrcHover + '" alt="下一页"'), Y = "<img " + U + " />", Z = "<img " + V + " />", ("" != W || "" != X) && (T = " junefade", Y = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + U + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + W + " />", Z = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + V + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + X + " />")), "yes" == g.sliderArrow && (w = ""), u = " 'prevBtnCls': 'prev" + m + "', 'nextBtnCls': 'next" + m + "', ", v = '<span class="abs prev' + m + K + T + '" style="' + w + "cursor:pointer;width:" + P.width + "px;height:" + P.height + "px;top:" + P.top + "px;left:" + P.left + 'px;z-index:14;">' + Y + '</span><span class="abs next' + m + L + T + '" style="' + w + "cursor:pointer;width:" + Q.width + "px;height:" + Q.height + "px;top:" + Q.top + "px;left:" + Q.left + 'px;z-index:14;">' + Z + "</span>", _ = "juneactive", "no" == g.sliderSmallImg && (x = "display:none;"), ab = g.contentType.length, g.sliderMargin > 1 && (ab = Math.floor(g.contentType.length / g.sliderMargin) - 1), $.each(g.contentType, function(f) {
						var q, r, t, u, v, w, x, C, D, E, J, K, L, M, N, O, P, Q, j = a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:eq(" + f + ")"),
							k = g.sliderHref[f],
							l = j.attr("attachID") || "",
							m = " " + l,
							i = b.getChildPos(a, j, !0),
							n = " rel",
							o = "",
							p = "display:block;";
						e == f && (p = "display:block;"), B = f == Math.ceil(g.sliderActive / g.sliderMargin) - 1 && "" == B ? "juneactive" : "", q = !1, f > ab && (q = !0), "yes" != G[f] && g.thumbSet[f] && "" != g.thumbSet[f] && (r = require("scripts/allwzset"), t = JSON.parse(g.thumbSet[f]), u = '"></li>', t.href = k, t.hrefMode = g.hrefMode, t.sliderSwitch = g.sliderSwitch, u = r.allExport(j, t, "jfsb"), q || (z += '<li data-i="' + l + '" class="abs thumbsmall ' + B + m + u)), "imgContent" == g.contentType[f] ? (v = g.smallImgSrcT[f], w = g.smallHoverSrcT[f], x = !1, C = "", D = "", "" == w && (w = v, x = !0), "" == w && (w = g.sliderSrc[f], x = !1), "transparent" != g.kgdSwitch && ("" == g.smallHoverSrcT[f] || g.smallHoverSrcT != g.smallImgSrcT) && (x = !0), "" == v && (v = g.sliderSrc[f]), A.push(w), checkUrl(w) && (C = 'src="' + w + '"'), "" != g.sliderSrc[f] && (D = "background:url(" + g.sliderSrc[f] + ") no-repeat scroll center top transparent;"), s[s.length] = '<div class="elepic" style="height:' + d + "px;width:" + c + "px;" + F + 'overflow:hidden;"><div class="elexb' + n + '" style="height:' + d + "px;width:" + c + "px;" + o + D + '"><a class="J_TWidget" href="' + k + '" target="' + g.hrefMode + '" style="height:' + d + "px;width:" + c + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>', y = '<a href="' + k + '" target="' + g.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img ' + C + ' style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', x ? (E = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", J = "background:#000000;", "white" == g.kgdSwitch && (J = "background:#ffffff;"), "transparent" == g.kgdSwitch && (J = "", E = ""), K = '<a href="' + k + '" target="' + g.hrefMode + '" class="abs s2" style="' + J + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="' + E + "width:" + i.width + "px;height:" + i.height + 'px;"></a>', "click" == g.sliderSwitch && (K = '<a class="abs s2" style="' + J + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="' + E + "width:" + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != G[f] ? g.thumbSet[f] && "" != g.thumbSet[f] || q || (z += '<li class="abs ' + B + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + K + "</li>") : (L = "", M = "", N = "", O = "", P = "", Q = "", g.thumbCircleSet[f] && "" != g.thumbCircleSet[f] ? (P = " scm_s", N = JSON.parse(g.thumbCircleSet[f]), O = N.characterContent, L = RGBToHex(N.characterBgColor, ""), "" != L && (L = "background-color:" + L + ";"), N.characterColor = RGBToHex(N.characterColor, ""), "" != N.characterColor && (L += "color:" + N.characterColor + ";"), "" != N.characterFont && (L += "font-family:" + N.characterFont + ";"), "" != N.characterWeight && (L += "font-weight:" + N.characterWeight + ";"), "" != N.characterSize && (L += "font-size:" + b.tParseInt(N.characterSize) + "px;"), "off" != N.characterHoverMode ? (Q = " s1h", M = RGBToHex(N.characterBgColorHover, ""), "" != M && (M = "background-color:" + M + ";"), N.characterColorHover = RGBToHex(N.characterColorHover, ""), "" != N.characterColorHover && (M += "color:" + N.characterColorHover + ";"), "" != N.characterFontHover && (M += "font-family:" + N.characterFontHover + ";"), "" != N.characterWeightHover && (M += "font-weight:" + N.characterWeightHover + ";"), "" != N.characterSizeHover && (M += "font-size:" + b.tParseInt(N.characterSizeHover) + "px;")) : M = L) : (H[f] && (L = RGBToHex(H[f], ""), "" != L && (L = "background-color:" + L + ";")), I[f] && (M = RGBToHex(I[f], ""), "" != M && (M = "background-color:" + M + ";"))), q || (z += '<li class="abs scm ' + B + P + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + Q + '" style="border-radius:50%;width:100%;height:100%;' + M + '">' + O + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + L + '">' + O + "</div></li>"))) : (K = '<a href="' + k + '" target="' + g.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', "click" == g.sliderSwitch && (K = '<a class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != G[f] ? g.thumbSet[f] && "" != g.thumbSet[f] || q || (z += '<li class="abs ' + B + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + K + "</li>") : (L = "", M = "", N = "", O = "", P = "", Q = "", g.thumbCircleSet[f] && "" != g.thumbCircleSet[f] ? (P = " scm_s", N = JSON.parse(g.thumbCircleSet[f]), O = N.characterContent, L = RGBToHex(N.characterBgColor, ""), "" != L && (L = "background-color:" + L + ";"), N.characterColor = RGBToHex(N.characterColor, ""), "" != N.characterColor && (L += "color:" + N.characterColor + ";"), "" != N.characterFont && (L += "font-family:" + N.characterFont + ";"), "" != N.characterWeight && (L += "font-weight:" + N.characterWeight + ";"), "" != N.characterSize && (L += "font-size:" + b.tParseInt(N.characterSize) + "px;"), "off" != N.characterHoverMode ? (Q = " s1h", M = RGBToHex(N.characterBgColorHover, ""), "" != M && (M = "background-color:" + M + ";"), N.characterColorHover = RGBToHex(N.characterColorHover, ""), "" != N.characterColorHover && (M += "color:" + N.characterColorHover + ";"), "" != N.characterFontHover && (M += "font-family:" + N.characterFontHover + ";"), "" != N.characterWeightHover && (M += "font-weight:" + N.characterWeightHover + ";"), "" != N.characterSizeHover && (M += "font-size:" + b.tParseInt(N.characterSizeHover) + "px;")) : M = L) : (H[f] && (L = RGBToHex(H[f], ""), "" != L && (L = "background-color:" + L + ";")), I[f] && (M = RGBToHex(I[f], ""), "" != M && (M = "background-color:" + M + ";"))), q || (z += '<li class="abs scm ' + B + P + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + Q + '" style="border-radius:50%;width:100%;height:100%;' + M + '">' + O + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + L + '">' + O + "</div></li>")))) : (v = g.smallImgSrc[f], w = g.smallHoverSrc[f], x = !1, C = "", "" == w && (w = v, x = !0), "" == w && (w = g.sliderSrc[f], x = !1), "transparent" != g.kgdSwitch && ("" == g.smallHoverSrc[f] || g.smallHoverSrc != g.smallImgSrc) && (x = !0), "" == v && (v = g.sliderSrc[f]), A.push(w), checkUrl(w) && (C = 'src="' + w + '"'), s[s.length] = '<div class="elepic" style="height:' + d + "px;width:" + c + "px;" + F + 'overflow:hidden;"><div class="elexb' + n + '" style="height:' + d + "px;width:" + c + "px;" + o + '">' + g.customContent[f] + "</div></div>", y = '<a href="' + k + '" target="' + g.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img ' + C + ' style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', x ? (E = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", J = "background:#000000;", "white" == g.kgdSwitch && (J = "background:#ffffff;"), "transparent" == g.kgdSwitch && (J = "", E = ""), K = '<a href="' + k + '" target="' + g.hrefMode + '" class="abs s2" style="' + J + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="' + E + "width:" + i.width + "px;height:" + i.height + 'px;"></a>', "click" == g.sliderSwitch && (K = '<a class="abs s2" style="' + J + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="' + E + "width:" + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != G[f] ? g.thumbSet[f] && "" != g.thumbSet[f] || q || (z += '<li class="abs ' + B + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + K + "</li>") : (L = "", M = "", N = "", O = "", P = "", Q = "", g.thumbCircleSet[f] && "" != g.thumbCircleSet[f] ? (P = " scm_s", N = JSON.parse(g.thumbCircleSet[f]), O = N.characterContent, L = RGBToHex(N.characterBgColor, ""), "" != L && (L = "background-color:" + L + ";"), N.characterColor = RGBToHex(N.characterColor, ""), "" != N.characterColor && (L += "color:" + N.characterColor + ";"), "" != N.characterFont && (L += "font-family:" + N.characterFont + ";"), "" != N.characterWeight && (L += "font-weight:" + N.characterWeight + ";"), "" != N.characterSize && (L += "font-size:" + b.tParseInt(N.characterSize) + "px;"), "off" != N.characterHoverMode ? (Q = " s1h", M = RGBToHex(N.characterBgColorHover, ""), "" != M && (M = "background-color:" + M + ";"), N.characterColorHover = RGBToHex(N.characterColorHover, ""), "" != N.characterColorHover && (M += "color:" + N.characterColorHover + ";"), "" != N.characterFontHover && (M += "font-family:" + N.characterFontHover + ";"), "" != N.characterWeightHover && (M += "font-weight:" + N.characterWeightHover + ";"), "" != N.characterSizeHover && (M += "font-size:" + b.tParseInt(N.characterSizeHover) + "px;")) : M = L) : (H[f] && (L = RGBToHex(H[f], ""), "" != L && (L = "background-color:" + L + ";")), I[f] && (M = RGBToHex(I[f], ""), "" != M && (M = "background-color:" + M + ";"))), q || (z += '<li class="abs scm ' + B + P + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + Q + '" style="border-radius:50%;width:100%;height:100%;' + M + '">' + O + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + L + '">' + O + "</div></li>"))) : (K = '<a href="' + k + '" target="' + g.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', "click" == g.sliderSwitch && (K = '<a class="abs s2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + v + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>'), "yes" != G[f] ? g.thumbSet[f] && "" != g.thumbSet[f] || q || (z += '<li class="abs ' + B + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;">' + y + K + "</li>") : (L = "", M = "", N = "", O = "", P = "", Q = "", g.thumbCircleSet[f] && "" != g.thumbCircleSet[f] ? (P = " scm_s", N = JSON.parse(g.thumbCircleSet[f]), O = N.characterContent, L = RGBToHex(N.characterBgColor, ""), "" != L && (L = "background-color:" + L + ";"), N.characterColor = RGBToHex(N.characterColor, ""), "" != N.characterColor && (L += "color:" + N.characterColor + ";"), "" != N.characterFont && (L += "font-family:" + N.characterFont + ";"), "" != N.characterWeight && (L += "font-weight:" + N.characterWeight + ";"), "" != N.characterSize && (L += "font-size:" + b.tParseInt(N.characterSize) + "px;"), "off" != N.characterHoverMode ? (Q = " s1h", M = RGBToHex(N.characterBgColorHover, ""), "" != M && (M = "background-color:" + M + ";"), N.characterColorHover = RGBToHex(N.characterColorHover, ""), "" != N.characterColorHover && (M += "color:" + N.characterColorHover + ";"), "" != N.characterFontHover && (M += "font-family:" + N.characterFontHover + ";"), "" != N.characterWeightHover && (M += "font-weight:" + N.characterWeightHover + ";"), "" != N.characterSizeHover && (M += "font-size:" + b.tParseInt(N.characterSizeHover) + "px;")) : M = L) : (H[f] && (L = RGBToHex(H[f], ""), "" != L && (L = "background-color:" + L + ";")), I[f] && (M = RGBToHex(I[f], ""), "" != M && (M = "background-color:" + M + ";"))), q || (z += '<li class="abs scm ' + B + P + m + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;line-height:" + i.height + "px;top:" + i.top + "px;left:" + i.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + Q + '" style="border-radius:50%;width:100%;height:100%;' + M + '">' + O + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + L + '">' + O + "</div></li>"))))
					}), t += "</div></div>", bb = "", cb = "", db = "", eb = "", fb = "", gb = "", hb = g.contentType.length, ib = 0, jb = 0, kb = "", lb = "", mb = "", nb = "", "scrolly" != p ? (k > 0 && (hb += Math.ceil(k / c), ib = Math.ceil(k / c), jb = Math.ceil(k / c) % g.contentType.length), b.june.width() - (k + g.contentType.length * c) && (hb += Math.ceil((b.june.width() - (k + g.contentType.length * c)) / c)), "yes" == g.sliderOver && "yes" == g.sliderOverMongolia && (lb = '<div class="wfmc1 abs" style="left:-' + k + "px;top:0px;width:" + k + "px;height:" + i + "px; background:" + RGBToHex(g.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', mb = '<div class="abs" style="left:' + h + "px;top:0px;width:" + (b.june.width() - k - h) + "px;height:" + i + "px; background:" + RGBToHex(g.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>')) : (j > 0 && (hb += Math.ceil(j / d), ib = Math.ceil(j / d), jb = Math.ceil(j / d) % g.contentType.length), b.june.height() - (j + g.contentType.length * d) && (hb += Math.ceil((b.june.height() - (j + g.contentType.length * d)) / d)), "yes" == g.sliderOver && "yes" == g.sliderOverMongolia && (lb = '<div class="wfmc1 abs" style="top:-' + j + "px;left:0px;width:" + h + "px;height:" + j + "px; background:" + RGBToHex(g.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', mb = '<div class="abs" style="top:' + i + "px;left:0px;height:" + (b.june.height() - j - i) + "px;width:" + h + "px; background:" + RGBToHex(g.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>')), kb = ' data-f="' + ib + '"', "no" == g.sliderOver && (nb = "overflow:hidden;"), ob = "", pb = "", 0 != ib && (ob = "scrolly" != p ? "left:-" + ib * c + "px;" : "top:-" + ib * d + "px;"), "1" != g.sliderActive && ("scrollx" == p ? pb = "left:-" + e * c + "px;" : "scrolly" == p && (pb = "top:-" + e * d + "px;")), g.smallShowMode && "outbox" == g.smallShowMode && (D += " outbox"), g.smallShowCss && "" != g.smallShowCss && (gb = " " + g.smallShowCss + " " + g.smallShowSpeed), qb = "display:inline-block;", "scrolly" == p && (qb = "display:block;"), M = 0; hb > M; M++) {
						if (0 == M ? (cb = ' data-appid="' + g.appID + '" data-hsrc="' + A.join(",") + '"', db = "top:" + j + "px;left:" + k + "px;", eb = D + " " + g.appID) : (cb = "", db = "", eb = ""), bb += '<div class="jwfb abs J_TWidget' + eb + '"' + cb + ' style="height:' + i + "px;width:" + h + "px;" + db + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c_' + M + "_" + m + "','navCls':'n" + m + "','effect':'" + p + "','steps':" + (g.sliderMargin || 1) + ",'circular':true,'easing':'" + g.sliderEffect + "','duration':'0.5'," + u + "'autoplay':" + g.sliderAuto + ",'interval':" + g.sliderTime + ",'delay':" + g.sliderDelay + ",'activeTriggerCls':'" + _ + "', 'triggerType': '" + g.sliderSwitch + "', 'activeIndex': " + (Math.ceil(g.sliderActive / (g.sliderMargin || 1)) - 1) + '}">', fb += "</div>", r = '<div class="scroller rel ' + C + '" style="overflow:hidden;width:' + c + "px;height:" + d + "px;z-index:10;" + qb + ob + '"><div class="ks-switchable-content c_' + M + "_" + m + '" style="display:initial;' + pb + '">', 0 != jb) {
							for (rb = [], sb = 0; sb < s.length; sb++) rb[sb] = 0 == (sb + (s.length - jb)) % s.length ? s[0] : s[(sb + (s.length - jb)) % s.length];
							jb = 0, s = rb
						}
						for (q += "yes" == g.sliderOver ? r + s.join("") + t : ib > M || M >= ib + g.contentType.length ? r + "" + t : r + s.join("") + t, rb = [], sb = 0; sb < s.length; sb++) rb[sb] = sb + 1 == s.length ? s[0] : s[sb + 1];
						s = rb
					}
					return q = '<div class="wfpanel abs" data-a="' + g.sliderActive + '"' + kb + ' style="height:' + i + "px;width:" + h + "px;white-space: nowrap;z-index:10;" + nb + '">' + q + "</div>", N && (tb = v, v = "", q = E + q + tb + "</div>"), bb + v + q + '<ul class="ks-switchable-nav abs jfsb n' + m + gb + '" style="' + x + 'top:0px;left:0px;z-index:12;background:none;">' + z + "</ul>" + o + lb + mb + fb
				},
				codeImport: function(a, c, d, e) {
					var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, H, I, J, K, L, M, N, O, P, Q, R;
					if (d.hasClass("scrollable") || d.attr(" data-jtimes")) {
						for (h = JSON.parse(a.attr("data-config")), i = a.attr("data-dblType"), j = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')), k = d.attr("data-jtimes") || 5, l = {}, l.childConfig = [], l.childConfig[0] = {}, l.sliderSrc = [], l.sliderHref = [], l.customContent = [], l.contentType = [], l.smallImgSrc = [], l.smallHoverSrc = [], l.smallImgSrcT = [], l.smallHoverSrcT = [], l.thumbSet = [], l.thumbCircleSet = [], l.smallCircleMode = [], l.smallCircleBgColor = [], l.smallCircleBgColor1 = [], l.sliderMargin = 1, l.sliderActive = 1, l.sliderOver = "no", l.sliderSmallImg = "no", l.sWidth = "", l.sHeight = "", l.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "hidden" != d.find("div.scroller").css("overflow") && (l.sliderOver = "yes"), d.find("div.wfmc1").length > 0 ? (l.sliderOverMongolia = "yes", l.sliderOverMongoliaColor = RGBToHex(d.find("div.wfmc1").css("background-color"))) : l.sliderOverMongolia = "no", m = d.find("div.haibaos_pic").length / k, n = 0; m > n; n++) o = d.find("div.haibaos_pic").eq(n), p = o.find("a.simple"), q = o.css("background-image").replace(/^url|[\(\"\)]*/g, ""), r = o.find("a.simple").attr("href"), s = o.find("img"), o.html(), p.length > 0 ? (l.sliderSrc.push(q), l.sliderHref.push(r)) : (l.sliderSrc.push(""), l.sliderHref.push("")), s.length > 0 ? (l.customContent.push('<div class="rel" style="width:' + o.width() + "px;height:" + o.height() + 'px;">' + o.find("a.simple").addClass("job").css("background", o.css("background")).prop("outerHTML") + "</div>"), l.contentType.push("customContent")) : (l.customContent.push(""), l.contentType.push("imgContent")), l.smallImgSrc.push(""), l.smallHoverSrc.push(""), l.smallImgSrcT.push(""), l.smallHoverSrcT.push(""), l.thumbSet.push("");
						d.find("div.haibaos_pic").length > 1 && (h.sliderSrc = [], h.sliderHref = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], h.customContent = [], h.contentType = [], h.thumbSet = [], h.thumbCircleSet = [], h.smallCircleMode = [], h.smallCircleBgColor = [], h.smallCircleBgColor1 = []), t = d.children(".smlldiv_btn"), l.sliderArrow = "none" == t.css("display") ? "no" : "yes", j.effect && (l.sliderMode = j.effect), j.autoplay && (l.sliderAuto = j.autoplay), j.easing && (l.sliderEffect = j.easing), j.interval && (l.sliderTime = j.interval), j.activeIndex && (l.sliderActive = b.tParseInt(j.activeIndex) + 1), j.steps && (l.sliderMargin = j.steps), u = t.children("span:eq(0)"), v = t.children("span:eq(1)"), t.children("span:eq(0)").hasClass("prevsamll") && (u = t.children("span:eq(0)").children("img:eq(0)"), v = t.children("span:eq(1)").children("img:eq(0)")), l.hrefMode = d.find("a.simple").attr("target") || "_blank", l.childConfig[0].oSrc = t.children("span:eq(0)").children("img:eq(0)").attr("src"), l.childConfig[0].tSrc = t.children("span:eq(1)").children("img:eq(0)").attr("src"), l.childConfig[0].autoSize = "no", l.childConfig[0].autoSize1 = "no", t.children("span:eq(0)").children("img:eq(1)").length > 0 && (l.childConfig[0].oSrcHover = t.children("span:eq(0)").children("img:eq(1)").attr("src")), t.children("span:eq(1)").children("img:eq(1)").length > 0 && (l.childConfig[0].tSrcHover = t.children("span:eq(1)").children("img:eq(1)").attr("src")), f = b.getChildPos(d, u, !0), g = b.getChildPos(d, v, !0), w = $.extend(h, l), a.attr("data-config", JSON.stringify(w)), a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").attr("appID", l.appID), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").attr("appID", l.appID), a.attr("appID", l.appID), b.appConfig["jwfb"][1].tSubmit(w, a), a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + d.find("div.haibaos_pic").width() * (b.tParseInt(l.sliderActive) + l.contentType.length - 1) + "px"), e(i, l.appID)
					} else {
						if (h = JSON.parse(a.attr("data-config")), i = a.attr("data-dblType"), l = {}, z = d.attr("data-hsrc"), j = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
						}, z = z ? z.split(",") : [], l.childConfig = [], l.childConfig[0] = {}, l.sliderSrc = [], l.sliderHref = [], l.customContent = [], l.contentType = [], l.smallImgSrc = [], l.smallHoverSrc = [], l.smallImgSrcT = [], l.smallHoverSrcT = [], l.thumbSet = [], l.thumbCircleSet = [], l.smallCircleMode = [], l.smallCircleBgColor = [], l.smallCircleBgColor1 = [], l.sliderMargin = 1, l.sliderActive = 1, l.sliderOver = "no", l.sWidth = "", l.sHeight = "", l.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "hidden" != d.css("overflow") && (l.sliderOver = "yes"), d.find("div.wfpanel").length > 0 && "hidden" == d.find("div.wfpanel").css("overflow") && (l.sliderOver = "no"), d.children(".jwfb").length > 0) {
							for (l.shadeCount = 1; d.children(".jwfb").length > 0;) d = d.children(".jwfb"), j = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
							}, d.hasClass("jwfbyys") || l.shadeCount++;
							l.shadeMode = "yes"
						}
						if (A = !1, 1 == d.children("ul").length && (A = !0), l.sliderActive = d.find("div.wfpanel").attr("data-a") || "1", d.hasClass("outbox") && (l.smallShowMode = "outbox"), B = (d.find(".ks-switchable-nav").attr("class") || "").match(/trans(\w+)s/g), C = (d.find(".ks-switchable-nav").attr("class") || "").match(/b-1-(lx|rx|dy|uy)(\d+)/g), B && B.length > 0 && (l.smallShowSpeed = B[0]), C && C.length > 0 && (l.smallShowCss = C[0]), D = d.find("div.wfpanel").attr("data-f") || 0, d.find("div.wfmc1").length > 0 ? (l.sliderOverMongolia = "yes", l.sliderOverMongoliaColor = RGBToHex(d.find("div.wfmc1").css("background-color"))) : (l.sliderOverMongolia = "no", l.sliderOverMongoliaColor = ""), E = require("scripts/other"), b.tParseInt(l.sliderActive) - 1, d.find(".scroller:eq(" + D + ")").children(".ks-switchable-content").children("div.elepic").each(function(a) {
							var e, f, g, h, i, j, c = $(this);
							c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), i = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), z[a] || (z[a] = ""), e.length > 0 ? (l.contentType.push("imgContent"), l.sliderSrc.push(f), l.sliderHref.push(g), l.customContent.push(""), i.hasClass("thumbsmall") ? (l.smallImgSrc.push(""), l.smallHoverSrc.push(""), l.smallImgSrcT.push(""), l.smallHoverSrcT.push(""), l.thumbSet.push(E.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), j == f && (j = ""), l.smallImgSrcT.push(j)) : (j = i.find("img:eq(0)").attr("src"), j == f && (j = ""), l.smallImgSrcT.push(j)), l.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (z[a] == f || z[a] == j) && (z[a] = ""), l.smallHoverSrcT.push(z[a]), l.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), l.thumbSet.push(""))) : (l.contentType.push("customContent"), l.sliderSrc.push(""), l.customContent.push(h), i.find("a").length > 0 ? (g = i.find("a").attr("href") || "", l.sliderHref.push(g)) : l.sliderHref.push(""), i.hasClass("thumbsmall") ? (l.smallImgSrc.push(""), l.smallHoverSrc.push(""), l.smallImgSrcT.push(""), l.smallHoverSrcT.push(""), l.thumbSet.push(E.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), l.smallImgSrc.push(j)) : (j = i.find("img:eq(0)").attr("src"), l.smallImgSrc.push(j)), z[a] == j && (z[a] = ""), l.smallImgSrcT.push(""), l.smallHoverSrc.push(z[a]), l.smallHoverSrcT.push(""), l.thumbSet.push("")))
						}), d.find(".scroller:eq(" + D + ")").children(".ks-switchable-content").children("div.elepic").length > 0 && (h.sliderSrc = [], h.sliderHref = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], h.customContent = [], h.contentType = [], h.thumbSet = [], h.thumbCircleSet = [], h.smallCircleMode = [], h.smallCircleBgColor = [], h.smallCircleBgColor1 = []), j.effect && (l.sliderMode = j.effect), "true" != j.autoplay && (l.sliderAuto = j.autoplay), j.easing && (l.sliderEffect = j.easing), j.interval && (l.sliderTime = j.interval), j.triggerType && (l.sliderSwitch = j.triggerType), j.steps && (l.sliderMargin = j.steps), l.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", l.sliderArrow = "no", x = j.prevBtnCls, y = j.nextBtnCls, x && "undefined" != x) if (l.sliderArrow = "yes", l.childConfig[0].oSrc = d.find("." + x).children("img:eq(0)").attr("src"), l.childConfig[0].tSrc = d.find("." + y).children("img:eq(0)").attr("src"), d.find("." + x).children("img").length > 1 && (l.childConfig[0].oSrcHover = d.find("." + x).children("img:eq(1)").attr("src")), d.find("." + y).children("img").length > 1 && (l.childConfig[0].tSrcHover = d.find("." + y).children("img:eq(1)").attr("src")), f = b.getChildPos(d, d.find("." + x), !0), g = b.getChildPos(d, d.find("." + y), !0), F = d.find("." + x), F.length > 0) {
							l.sliderArrow = "none" == F.css("display") ? "no" : "yes", l.displayMode = F.hasClass("june-box-fadein") ? "june-box-fadein" : "";
							try {
								l.css3Speed = F.attr("class").match(/trans(\w+)s/g).join(""), F.attr("class").indexOf("june-box-lx") >= 0 && (l.css3Mode = $.trim("moveout" + F.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), F.attr("class").indexOf("june-box-rx") >= 0 && (l.css3Mode = $.trim("movein" + F.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
							} catch (G) {}
						} else l.sliderArrow = "no", l.displayMode = "";
						a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").each(function() {
							b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
						}), a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").remove(), L = !0, d.children("ul:eq(0)").children("li").each(function(c) {
							var f, g, h, i, j, k, m, n, o, e = $(this);
							e.hasClass("scm") ? (l.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (l.smallCircleBgColor[c] = "", l.smallCircleBgColor1[c] = "", l.thumbCircleSet.push(E.thumbCircleImport(e))) : (l.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), l.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), l.thumbCircleSet[c] = "")) : (l.smallCircleMode[c] = "no", l.smallCircleBgColor[c] = "", l.smallCircleBgColor1[c] = "", l.thumbCircleSet[c] = ""), g = l.contentType[c], "imgContent" == g ? (f = l.smallImgSrcT[c], "" == f && (f = l.smallHoverSrcT[c])) : (f = l.smallImgSrc[c], "" == f && (f = l.smallHoverSrc[c])), "" == f && (f = l.sliderSrc[c]), $(this).attr("data-i") ? l.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(l.childConfig[0]), "yes" != l.smallCircleMode[c] ? "" == l.thumbSet[c] ? $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + f + '"></div>').tResize().appendTo(a).attr("appID", l.appID).attr("attachID", l.childConfig[0].attachID) : (h = JSON.parse(l.thumbSet[c] || "{}"), $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", l.appID).attr("attachID", l.childConfig[0].attachID), i = a.children(b.appChildCls + "[attachID='" + l.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(h, i), i.removeAttr("data-config")) : (j = "", k = "", m = "", n = "", "" == l.thumbCircleSet[c] ? j = l.smallCircleBgColor[c] || l.smallCircleBgColor1[c] || "" : (k = JSON.parse(l.thumbCircleSet[c]), n = k.characterContent, j = k.characterBgColor || k.characterBgColorHover || "", k.characterColor = RGBToHex(k.characterColor, ""), "" != k.characterColor && (m += "color:" + k.characterColor + ";"), "" != k.characterFont && (m += "font-family:" + k.characterFont + ";"), "" != k.characterWeight && (m += "font-weight:" + k.characterWeight + ";"), "" != k.characterSize && (m += "font-size:" + b.tParseInt(k.characterSize) + "px;")), o = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + m + '">' + n + "</div></div>").tResize().appendTo(a).attr("appID", l.appID).attr("attachID", l.childConfig[0].attachID), o.children(".t-jwfb-circle").css({
								backgroundColor: RGBToHex(j, ""),
								borderRadius: "50%"
							})), 0 == c && (H = $(this).width(), J = $(this).height()), I = $(this).width(), K = $(this).height(), (H != I || J != K) && (L = !1)
						}), L && (l.sWidth = H, l.sHeight = J), d.children(".ks-switchable-nav").find("li").each(function() {
							var a = $(this);
							return M = a.css("background-image"), M && M.indexOf("img01") >= 0 ? (l.kgdSwitch = "white", !1) : M && M.indexOf("img02") >= 0 ? (l.kgdSwitch = "black", !1) : M && M.indexOf("img03") >= 0 ? (l.kgdSwitch = "transparent", !1) : void 0
						}), A && (N = RGBToHex(d.children(".ks-switchable-nav").find("li").children("a.s2").css("background-color"), ""), M = "#ffffff" == N.toLowerCase() ? l.kgdSwitch = "white" : "#000000" == N.toLowerCase() ? l.kgdSwitch = "black" : void 0), M || (l.kgdSwitch = "transparent"), "none" == d.children("ul:eq(0)").css("display") ? (l.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").hide()) : l.sliderSmallImg = "yes", O = d.children("div.lbepanel"), O.length > 0 && O.each(function() {
							var g, h, e = $(this),
								f = {};
							b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jwfb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", l.appID).attr("attachID", f.attachID), l.childConfig.push(f)
						}), w = $.extend(h, l), a.attr("data-config", JSON.stringify(w)), require("scripts/tAjax"), "no" == l.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").css({
							backgroundImage: "url(" + l.childConfig[0].oSrc + ")",
							width: 0 == f.width ? 48 : f.width,
							height: 0 == f.height ? 48 : f.height,
							top: f.top,
							left: f.left
						}).show(), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").css({
							backgroundImage: "url(" + l.childConfig[0].tSrc + ")",
							width: 0 == g.width ? 48 : g.width,
							height: 0 == g.height ? 48 : g.height,
							top: g.top,
							left: g.left
						}).show()), a.children(b.appOtherCls).html(""), P = d.find(".scroller:eq(0)").width(), Q = d.find(".scroller:eq(0)").height(), R = b.tParseInt(l.sliderActive) - 1, a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").attr("appID", l.appID), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").attr("appID", l.appID), a.attr("appID", l.appID), b.appConfig["jwfb"][1].tSubmit(w, a), "scrolly" != w.sliderMode ? (a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + P * (b.tParseInt(R) + l.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").width(P)) : (a.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + Q * (b.tParseInt(R) + l.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").height(Q)), setTimeout(function() {
							"scrolly" != w.sliderMode ? (a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + P * (b.tParseInt(R) + l.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").width(P)) : (a.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + Q * (b.tParseInt(R) + l.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").height(Q))
						}, 100), e(i, l.appID)
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
					var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, d = require("scripts/tAjax"),
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
					}), "yes" == a.sliderArrow ? (e.show(), f.show()) : (e.hide(), f.hide()), c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:gt(" + (a.sliderHref.length - 1) + ")").hide(), h = $(this), i = "", j = 0, k = 0, l = 0; l < a.sliderHref.length; l++) h = c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:eq(" + l + ")"), i = "", a.smallCircleMode[l] && "yes" == a.smallCircleMode[l] ? (m = a.smallCircleBgColor[l] || a.smallCircleBgColor1[l] || "", n = "", o = "", h.length > 0 ? (h.html('<div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + n + '">' + o + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && h.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && h.css({
						height: a.sHeight
					}), h.children(".t-jqtb-circle").css({
						backgroundColor: RGBToHex(m, ""),
						borderRadius: "50%"
					}), h.css({
						lineHeight: h.height() + "px"
					}).show()) : (p = 21, q = 21, "" != a.sWidth && $.isNumeric(a.sWidth) && (p = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (q = a.sHeight), b.setAttachID(a.childConfig[0]), h = $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(p)) + "px;width:" + p + "px;height:" + q + "px;line-height:" + q + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + n + '">' + o + "</div></div>").tResize().insertAfter(lastSmall).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), h.children(".t-jqtb-circle").css({
						backgroundColor: RGBToHex(m, ""),
						borderRadius: "50%"
					}))) : (i = "" != a.smallImgSrc[l] ? a.smallImgSrc[l] : "" != a.smallHoverSrc[l] ? a.smallHoverSrc[l] : a.nestConfig[0].sliderSrc[l], h.length > 0 ? (checkUrl(i) && h.children("img").attr({
						src: i
					}), "" != a.sWidth && $.isNumeric(a.sWidth) && h.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && h.css({
						height: a.sHeight
					}), h.show()) : (p = 21, q = 25, "" != a.sWidth && $.isNumeric(a.sWidth) && (p = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (q = a.sHeight), b.setAttachID(a.childConfig[0]), $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="top:' + k + "px;left:" + (b.tParseInt(j) + b.tParseInt(p)) + "px;width:" + p + "px;height:" + q + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + i + '"></div>').tResize().appendTo(c).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), j = b.tParseInt(h.css("left")), k = b.tParseInt(h.css("top"));
					for (c.children(b.appOtherCls).html(""), l = 0; l < a.nestConfig.length; l++) s = a.nestConfig[l].sliderFloorWidth ? a.nestConfig[l].sliderFloorWidth + "px" : "100%", t = a.nestConfig[l].sliderFloorHeight ? a.nestConfig[l].sliderFloorHeight + "px" : "100%", u = a.nestConfig[l].sliderFloorTop || 0, v = a.nestConfig[l].sliderFloorLeft || 0, "customContent" == a.nestConfig[l].contentType[0] ? r = '<div style="position:absolute;width:' + s + ";height:" + t + ";top:" + u + "px;left:" + v + 'px;">' + a.nestConfig[l].customContent[0] + "</div>" : (w = "", checkUrl(a.nestConfig[l].sliderSrc[0]) && (w = "background:url(" + a.nestConfig[l].sliderSrc[0] + ") no-repeat center center;"), r = '<div style="position:absolute;width:' + s + ";height:" + t + ";top:" + u + "px;left:" + v + "px;" + w + '"></div>'), c.children(b.appOtherCls).append(r);
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
					var c, G, H, I, J, K, L, M, N, O, d = JSON.parse(a.attr("data-config")),
						e = a.width(),
						f = a.height(),
						g = b.tParseInt(a.css("top")),
						h = b.tParseInt(a.css("left")),
						i = d.childConfig[0],
						j = ("" + (new Date).valueOf()).substr(7, 6),
						k = a.children(b.appChildCls + "[data-attachType='lbePanel']"),
						l = "",
						m = d.sliderOverflow || "hidden",
						n = '<div class="scroller rel" style="overflow:' + m + ";width:" + e + "px;height:" + f + 'px;z-index:10;">',
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
						y = "",
						z = "",
						A = "",
						B = d.smallCircleMode || [],
						C = d.smallCircleBgColor || [],
						D = d.smallCircleBgColor1 || [],
						E = "",
						F = "";
					return "" == d.displayMode && "" == d.css3Mode || "yes" != d.sliderArrow || (A = " jspb j-b", E = " " + d.css3Speed, F = " " + d.css3Speed, "june-box-fadein" == d.displayMode && (E += " june-box-fadein", F += " june-box-fadein"), d.css3Mode.indexOf("moveout") >= 0 && (E += " june-box-lx" + d.css3Mode.replace(/moveout/g, ""), F += " june-box-rx" + d.css3Mode.replace(/moveout/g, "")), d.css3Mode.indexOf("movein") >= 0 && (E += " june-box-rx" + d.css3Mode.replace(/movein/g, ""), F += " june-box-lx" + d.css3Mode.replace(/movein/g, ""))), c = "white" == d.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == d.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", I = a.children(b.appChildCls + "[data-attachType='jqtbOArrow']"), J = a.children(b.appChildCls + "[data-attachType='jqtbTArrow']"), G = b.setChildPos(a, I, !0), H = b.setChildPos(a, J, !0), K = "", y = "", z = "", L = "", M = "", N = "", O = "", "yes" == d.sliderArrow && (checkUrl(i.oSrc) && (y = 'src="' + i.oSrc + '" alt="上一页"'), checkUrl(i.tSrc) && (z = 'src="' + i.tSrc + '" alt="下一页"'), checkUrl(i.oSrcHover) && (L = 'src="' + i.oSrcHover + '" alt="上一页"'), checkUrl(i.tSrcHover) && (M = 'src="' + i.tSrcHover + '" alt="下一页"'), N = "<img " + y + " />", O = "<img " + z + " />", ("" != L || "" != M) && (K = " junefade", N = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + y + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + L + " />", O = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + z + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + M + " />")), "yes" == d.sliderArrow && (s = ""), q = " 'prevBtnCls': 'prev" + j + "', 'nextBtnCls': 'next" + j + "', ", r = '<span class="abs prev' + j + E + K + '" style="' + s + "cursor:pointer;width:" + G.width + "px;height:" + G.height + "px;top:" + G.top + "px;left:" + G.left + 'px;z-index:14;">' + N + '</span><span class="abs next' + j + F + K + '" style="' + s + "cursor:pointer;width:" + H.width + "px;height:" + H.height + "px;top:" + H.top + "px;left:" + H.left + 'px;z-index:14;">' + O + "</span>", k.length > 0 && k.each(function(a) {
						var e = $(this),
							f = e.width(),
							g = e.height(),
							h = b.tParseInt(e.css("top")),
							i = b.tParseInt(e.css("left")),
							j = "";
						d.childConfig[a + 1] && ("" == A && (A = " j-b"), j = " " + d.childConfig[a + 1].smallShowCss + " " + (d.childConfig[a + 1].smallShowSpeed || "trans02s"), l += '<div class="abs lbepanel' + j + '" style="overflow: hidden;width:' + f + "px;height:" + g + "px;top:" + h + "px;left:" + i + "px;z-index:" + (10 + b.tParseInt(d.childConfig[a + 1].zFloor)) + ';">' + d.childConfig[a + 1].customContent + "</div>")
					}), $.each(d.nestConfig, function(c) {
						var t, y, z, E, k = d.nestConfig[c],
							l = k.sliderFloorWidth || a.width(),
							m = k.sliderFloorHeight || a.height(),
							r = k.sliderFloorTop || 0,
							s = k.sliderFloorLeft || 0;
						n += '<div class="abs june-nsc" style="z-index: ' + (c + 1) + ";width:" + l + "px;height:" + m + "px;top:" + r + "px;left:" + s + 'px;overflow:hidden;"><div class="ks-switchable-content n' + c + "c" + j + '">', t = k.sliderMode, y = "", z = "a", "1" == t.substr(-1) && (t = t.substr(0, t.length - 1), z = "b", y = ", 'viewSize': ["), $.each(d.sliderHref, function(e) {
							var g, h, i, j, o, p, q, r, s, A, E, F, G, H, I, J, K, L, M, N, O;
							0 == c && (x = 0 == e ? "juneactive" : "", h = a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:eq(" + e + ")"), i = h.attr("attachID") || "", j = " " + i, g = b.getChildPos(a, h, !0), o = d.smallImgSrc[e], p = d.smallHoverSrc[e], q = !1, r = "", "" == p && (p = o, q = !0), "" == p && (p = d.nestConfig[0].sliderSrc[e], q = !1), "transparent" != d.kgdSwitch && "" == d.smallHoverSrc[e] && (q = !0), "" == o && (o = d.nestConfig[0].sliderSrc[e]), w.push(p), checkUrl(p) && (r = 'src="' + p + '"'), s = "", "" != d.smallHref[e] && (s = ' href="' + d.smallHref[e] + '"'), u = "<a" + s + ' target="_blank" class="abs s1" style="top:0px;left:0px;width:' + g.width + "px;height:" + g.height + 'px;"><img ' + r + ' style="width:' + g.width + "px;height:" + g.height + 'px;"></a>', q ? (A = "opacity:0.7;", E = "background:#000;", "white" == d.kgdSwitch && (E = "background:#fff;"), F = "<a" + s + ' target="_blank" class="abs s2" style="' + E + "top:0px;left:0px;width:" + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="' + A + "width:" + g.width + "px;height:" + g.height + 'px;"></a>', "click" == d.sliderSwitch && (F = '<a class="abs s2" style="' + E + "top:0px;left:0px;width:" + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="' + A + "width:" + g.width + "px;height:" + g.height + 'px;"></a>'), "yes" != B[e] ? v += '<li class="abs ' + x + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;">' + F + u + "</li>" : (G = "", H = "", I = "", J = "", C[e] && (G = RGBToHex(C[e], ""), "" != G && (G = "background-color:" + G + ";")), D[e] && (H = RGBToHex(D[e], ""), "" != H && (H = "background-color:" + H + ";")), v += '<li class="abs scm ' + x + I + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;line-height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + J + '" style="border-radius:50%;width:100%;height:100%;' + H + '"><a' + s + ' target="_blank" style="display:block;width:100%;height:100%;"></a></div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + G + '"></div></li>')) : (F = "<a" + s + ' target="_blank" class="abs s2" style="top:0px;left:0px;width:' + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="width:' + g.width + "px;height:" + g.height + 'px;"></a>', "click" == d.sliderSwitch && (F = '<a class="abs s2" style="top:0px;left:0px;width:' + g.width + "px;height:" + g.height + 'px;"><img src="' + o + '" style="width:' + g.width + "px;height:" + g.height + 'px;"></a>'), "yes" != B[e] ? v += '<li class="abs ' + x + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;">' + F + u + "</li>" : (G = "", H = "", I = "", J = "", C[e] && (G = RGBToHex(C[e], ""), "" != G && (G = "background-color:" + G + ";")), D[e] && (H = RGBToHex(D[e], ""), "" != H && (H = "background-color:" + H + ";")), v += '<li class="abs scm ' + x + I + j + '" data-i="' + i + '" style="width:' + g.width + "px;height:" + g.height + "px;line-height:" + g.height + "px;top:" + g.top + "px;left:" + g.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + J + '" style="border-radius:50%;width:100%;height:100%;' + H + '"><a' + s + ' target="_blank" style="display:block;width:100%;height:100%;"></a></div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + G + '"></div></li>'))), K = "", L = "", M = "", "b" == z && ("scrollx" == t ? (M = e * l, L = "left:-" + M + "px;", y += "-" + l + ",") : "scrolly" == t && (M = e * m, L = "top:-" + M + "px;", y += "-" + m + ","), K = " abs"), "imgContent" == k.contentType[e] ? (N = "", O = "", "" != d.sliderHref[e] && (N = ' href="' + d.sliderHref[e] + '"'), "" != k.sliderSrc[e] && (O = "background:url(" + k.sliderSrc[e] + ") no-repeat scroll center center transparent;"), n += '<div class="elepic" style="height:' + m + "px;width:" + l + 'px;display:block;float:left;"><div class="elexb' + K + '" style="height:' + m + "px;width:" + l + "px;" + L + O + '"><a class="J_TWidget"' + N + ' target="' + d.hrefMode + '" style="height:' + m + "px;width:" + l + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>') : n += '<div class="elepic" style="height:' + m + "px;width:" + l + 'px;display:block;float:left;"><div class="elexb' + K + '" style="height:' + m + "px;width:" + l + "px;" + L + '">' + k.customContent[e] + "</div></div>"
						}), n += "</div></div>", E = "", 0 == c && (E = "height:" + f + "px;width:" + e + "px;top:" + g + "px;left:" + h + "px;"), "b" == z && (y = y.substr(0, y.length - 1) + "]"), o += '<div class="jqtb abs J_TWidget' + A + " " + d.appID + '" data-appid="' + d.appID + '" data-s="' + z + '" style="' + E + 'z-index:10;" data-hsrc="' + w.join(",") + '" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'n' + c + "c" + j + "','navCls':'n" + j + "','effect':'" + t + "','steps':1,'circular':true,'easing':'" + k.sliderEffect + "','duration':'" + k.sliderDuration + "', 'delay':'" + (k.sliderDelay || 0) + "'," + q + "'autoplay':" + d.sliderAuto + ",'interval':" + d.sliderTime + ",'activeTriggerCls':'juneactive', 'triggerType': '" + d.sliderSwitch + "'" + y + '}">', p += "</div>"
					}), n += "</div>", "no" == d.sliderSmallImg && (t = "display:none;"), o + r + n + '<ul class="ks-switchable-nav abs jfsb n' + j + '" style="' + t + 'top:0px;left:0px;z-index:12;background:none;">' + v + "</ul>" + l + p
				},
				codeImport: function(a, c, d, e) {
					var f, g, h, i, p, q, r, s, t, v, w, x, y, z, A, B, C, D, E, F, G, H, j = JSON.parse(a.attr("data-config")),
						k = a.attr("data-dblType"),
						l = [],
						m = {},
						n = 1,
						o = d.attr("data-hsrc");
					for (d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? l.push(JSON.parse(d.attr("data-widget-config").replace(/'/g, '"'))) : l.push({
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
					}), o = o ? o.split(",") : [], m.childConfig = [], m.nestConfig = [], m.childConfig[0] = {}, m.nestConfig[0] = {}, m.nestConfig[0].contentType = [], m.nestConfig[0].sliderSrc = [], m.nestConfig[0].customContent = [], m.sliderHref = [], m.smallHref = [], m.smallImgSrc = [], m.smallHoverSrc = [], m.smallCircleMode = [], m.smallCircleBgColor = [], m.smallCircleBgColor1 = [], m.sliderOverflow = "hidden", m.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), p = []; d.children("div").hasClass("jqtb");) m.nestConfig[n] = {}, m.nestConfig[n].contentType = [], m.nestConfig[n].sliderSrc = [], m.nestConfig[n].customContent = [], p.push(d.attr("data-s") || "a"), d = d.children("div"), d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? l.push(JSON.parse(d.attr("data-widget-config").replace(/'/g, '"'))) : l.push({
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
					for (p.push(d.attr("data-s") || "a"), "visible" == d.children(".scroller").css("overflow") && (m.sliderOverflow = "visible"), d.children(".scroller").children(".june-nsc").children(".ks-switchable-content").each(function(a) {
						var d = $(this),
							e = (p[a], $(this).parent());
						d.children("div.elepic").each(function(b) {
							var e, f, g, h, d = $(this);
							d.children("div.elexb").length > 0 && (d = d.children("div.elexb")), e = d.children("a.J_TWidget"), f = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = d.children("a.J_TWidget").attr("href") || "", h = d.html(), e.length > 0 ? (m.sliderHref[b] && "" != m.sliderHref[b] || (m.sliderHref[b] = g), m.nestConfig[a].contentType.push("imgContent"), m.nestConfig[a].sliderSrc.push(f), m.nestConfig[a].customContent.push("")) : (m.sliderHref[b] || (m.sliderHref[b] = ""), m.nestConfig[a].contentType.push("customContent"), m.nestConfig[a].sliderSrc.push(""), m.nestConfig[a].customContent.push(h))
						}), m.nestConfig[a].sliderFloorWidth = e.width(), m.nestConfig[a].sliderFloorHeight = e.height(), m.nestConfig[a].sliderFloorTop = b.tParseInt(e.css("top")), "auto" == e.css("top") && (m.nestConfig[a].sliderFloorTop = 0), m.nestConfig[a].sliderFloorLeft = b.tParseInt(e.css("left")), "auto" == e.css("left") && (m.nestConfig[a].sliderFloorLeft = 0)
					}), d.children(".scroller").children(".june-nsc").children(".ks-switchable-content").children("div.elepic").length > 0 && (j.smallImgSrc = [], j.smallHoverSrc = [], j.smallHref = [], j.smallCircleMode = [], j.smallCircleBgColor = [], j.smallCircleBgColor1 = []), d.children(".ks-switchable-nav").find("li").each(function(a) {
						var e, f, g, h, i, c = $(this);
						q = c.css("background-image"), q && q.indexOf("img01") >= 0 ? m.kgdSwitch = "white" : q && q.indexOf("img02") >= 0 ? m.kgdSwitch = "black" : q && q.indexOf("img03") >= 0 && (m.kgdSwitch = "transparent"), e = RGBToHex(c.children("a.s2").css("background-color"), ""), q = "#ffffff" == e.toLowerCase() ? m.kgdSwitch = "white" : "#000000" == e.toLowerCase() ? m.kgdSwitch = "black" : void 0, o[a] || (o[a] = ""), g = c.find("img"), f = g.length > 0 ? g.attr("src") : o[a], m.smallImgSrc.push(f), o[a] == f && q && (o[a] = ""), m.smallHoverSrc.push(o[a]), h = d.children("ul:eq(0)").find("li:eq(" + a + ")"), i = "", h.length > 0 && (i = h.children("a:eq(0)").attr("href") || "", "" == i && h.children("a:eq(1)").length > 0 && (i = h.children("a:eq(1)").attr("href") || "")), m.smallHref.push(i)
					}), q || m.kgdSwitch || (m.kgdSwitch = "transparent"), r = 0; r < l.length; r++) s = p[r], l[r].effect && (m.nestConfig[r].sliderMode = l[r].effect), l[r].easing && (m.nestConfig[r].sliderEffect = l[r].easing), l[r].duration && (m.nestConfig[r].sliderDuration = l[r].duration), l[r].delay && (m.nestConfig[r].sliderDelay = l[r].delay), "b" == s && (m.nestConfig[r].sliderMode += "1");
					if (l[0].autoplay && (m.sliderAuto = l[0].autoplay), l[0].interval && (m.sliderTime = l[0].interval), l[0].triggerType && (m.sliderSwitch = l[0].triggerType), m.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", m.sliderArrow = "no", h = l[0].prevBtnCls, i = l[0].nextBtnCls, h && "undefined" != h) if (m.sliderArrow = "yes", m.childConfig[0].oSrc = d.find("." + h).children("img").attr("src"), m.childConfig[0].tSrc = d.find("." + i).children("img").attr("src"), d.find("." + h).children("img").length > 1 && (m.childConfig[0].oSrcHover = d.find("." + h).children("img:eq(1)").attr("src")), d.find("." + i).children("img").length > 1 && (m.childConfig[0].tSrcHover = d.find("." + i).children("img:eq(1)").attr("src")), f = b.getChildPos(d, d.find("." + h), !0), g = b.getChildPos(d, d.find("." + i), !0), t = d.find("." + h), t.length > 0) {
						m.sliderArrow = "none" == t.css("display") ? "no" : "yes", m.displayMode = t.hasClass("june-box-fadein") ? "june-box-fadein" : "";
						try {
							m.css3Speed = t.attr("class").match(/trans(\w+)s/g).join(""), t.attr("class").indexOf("june-box-lx") >= 0 && (m.css3Mode = $.trim("moveout" + t.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), t.attr("class").indexOf("june-box-rx") >= 0 && (m.css3Mode = $.trim("movein" + t.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
						} catch (u) {}
					} else m.displayMode = "", m.sliderArrow = "no";
					for (a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").each(function() {
						b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
					}), a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").remove(), z = !0, d.children("ul:eq(0)").find("li").each(function(c) {
						var e, g, h, i, j, f = $(this);
						e = m.smallImgSrc[c], "" == e && (e = m.nestConfig[0].sliderSrc[c]), f.hasClass("scm") ? (m.smallCircleMode[c] = "yes", m.smallCircleBgColor[c] = RGBToHex(f.children(".s2").css("background-color"), ""), m.smallCircleBgColor1[c] = RGBToHex(f.children(".s1").css("background-color"), ""), m.smallHref[c] = f.children(".s1").children("a").attr("href") || "") : (m.smallCircleMode[c] = "no", m.smallCircleBgColor[c] = "", m.smallCircleBgColor1[c] = ""), $(this).attr("data-i") ? m.childConfig[0].attachID = f.attr("data-i") : b.setAttachID(m.childConfig[0]), "yes" != m.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + e + '"></div>').tResize().appendTo(a).attr("appID", m.appID).attr("attachID", m.childConfig[0].attachID) : (g = "", h = "", i = "", g = m.smallCircleBgColor[c] || m.smallCircleBgColor1[c] || "", j = $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + h + '">' + i + "</div></div>").tResize().appendTo(a).attr("appID", m.appID).attr("attachID", m.childConfig[0].attachID), j.children(".t-jqtb-circle").css({
							backgroundColor: RGBToHex(g, ""),
							borderRadius: "50%"
						})), 0 == c && (v = $(this).width(), x = $(this).height()), w = $(this).width(), y = $(this).height(), (v != w || x != y) && (z = !1)
					}), z && (m.sWidth = v, m.sHeight = x), "none" == d.children("ul:eq(0)").css("display") ? (m.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").hide()) : m.sliderSmallImg = "yes", A = d.children("div.lbepanel"), A.length > 0 && A.each(function() {
						var g, h, e = $(this),
							f = {};
						b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jqtb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", m.appID).attr("attachID", f.attachID), m.childConfig.push(f)
					}), B = $.extend(j, m), a.attr("data-config", JSON.stringify(B)), require("scripts/tAjax"), "no" == m.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").css({
						backgroundImage: "url(" + m.childConfig[0].oSrc + ")",
						width: 0 == f.width ? 48 : f.width,
						height: 0 == f.height ? 48 : f.height,
						top: f.top,
						left: f.left
					}).show(), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").css({
						backgroundImage: "url(" + m.childConfig[0].tSrc + ")",
						width: 0 == g.width ? 48 : g.width,
						height: 0 == g.height ? 48 : g.height,
						top: g.top,
						left: g.left
					}).show()), a.children(b.appOtherCls).html(""), r = 0; r < m.nestConfig.length; r++) D = m.nestConfig[r].sliderFloorWidth ? m.nestConfig[r].sliderFloorWidth + "px" : "100%", E = m.nestConfig[r].sliderFloorHeight ? m.nestConfig[r].sliderFloorHeight + "px" : "100%", F = m.nestConfig[r].sliderFloorTop || 0, G = m.nestConfig[r].sliderFloorLeft || 0, "customContent" == m.nestConfig[r].contentType[0] ? C = '<div style="position:absolute;width:' + D + ";height:" + E + ";top:" + F + "px;left:" + G + 'px;">' + m.nestConfig[r].customContent[0] + "</div>" : (H = "", checkUrl(m.nestConfig[r].sliderSrc[0]) && (H = "background:url(" + m.nestConfig[r].sliderSrc[0] + ") no-repeat center center;"), C = '<div style="position:absolute;width:' + D + ";height:" + E + ";top:" + F + "px;left:" + G + "px;" + H + '"></div>'), a.children(b.appOtherCls).append(C);
					a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").attr("appID", m.appID), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").attr("appID", m.appID), a.attr("appID", m.appID), e(k, m.appID)
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
					var h, i, j, k, l, m, n, o, p, q, r, s, t, u, d = require("scripts/tAjax"),
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
					}), e.show(), f.show()) : (e.hide(), f.hide()), !a.thumbSet && (a.thumbSet = []), !a.thumbCircleSet && (a.thumbCircleSet = []), !a.smallCustom && (a.smallCustom = []), c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:gt(" + (a.contentType.length - 1) + ")").hide(), h = "", i = 0, j = 0, k = 0; k < a.contentType.length; k++) l = c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + k + ")"), h = "", m = c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + (k - 1) + ")"), 0 == k && (m = c.children(b.appOtherCls)), a.smallCircleMode[k] && "yes" == a.smallCircleMode[k] ? (n = a.smallCircleBgColor[k] || a.smallCircleBgColor1[k] || "", o = "", p = "", q = "", a.thumbCircleSet[k] && "" != a.thumbCircleSet[k] && (o = JSON.parse(a.thumbCircleSet[k]), q = o.characterContent, n = o.characterBgColor || o.characterBgColorHover || "", o.characterColor = RGBToHex(o.characterColor, ""), "" != o.characterColor && (p += "color:" + o.characterColor + ";"), "" != o.characterFont && (p += "font-family:" + o.characterFont + ";"), "" != o.characterWeight && (p += "font-weight:" + o.characterWeight + ";"), "" != o.characterSize && (p += "font-size:" + b.tParseInt(o.characterSize) + "px;")), l.length > 0 ? (l.html('<div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + p + '">' + q + "</div>").tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && l.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && l.css({
						height: a.sHeight
					}), l.children(".t-jfsb-circle").css({
						backgroundColor: RGBToHex(n, ""),
						borderRadius: "50%"
					}), l.css({
						lineHeight: l.height() + "px"
					}).show()) : (r = 120, s = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (r = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (s = a.sHeight), b.setAttachID(a.childConfig[0]), l = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + j + "px;left:" + (b.tParseInt(i) + b.tParseInt(r)) + "px;width:" + r + "px;height:" + s + "px;line-height:" + s + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + p + '">' + q + "</div></div>").tResize().insertAfter(m).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), l.children(".t-jfsb-circle").css({
						backgroundColor: RGBToHex(n, ""),
						borderRadius: "50%"
					}))) : a.smallCircleMode[k] && "yes1" == a.smallCircleMode[k] ? (!a.smallCustom[k] && (a.smallCustom[k] = ""), l.length > 0 ? (l.html('<div class="t-app-mongolia"></div>' + a.smallCustom[k]).tResize(), "" != a.sWidth && $.isNumeric(a.sWidth) && l.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && l.css({
						height: a.sHeight
					}), l.show()) : (r = 120, s = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (r = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (s = a.sHeight), b.setAttachID(a.childConfig[0]), l = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + j + "px;left:" + (b.tParseInt(i) + b.tParseInt(r)) + "px;width:" + r + "px;height:" + s + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + a.smallCustom[k] + "</div>").tResize().insertAfter(m).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))) : a.thumbSet[k] && "" != a.thumbSet[k] ? (t = JSON.parse(a.thumbSet[k]), l.length > 0 ? (l.html(""), b.appConfig["jcb"][1].tSubmit(t, l), l.removeAttr("data-config")) : (r = 120, s = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (r = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (s = a.sHeight), b.setAttachID(a.childConfig[0]), l = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + j + "px;left:" + (b.tParseInt(i) + b.tParseInt(r)) + "px;width:" + r + "px;height:" + s + 'px;z-index:101;"></div>').tResize().insertAfter(m).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), u = c.children(b.appChildCls + "[attachID='" + a.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(t, u), u.removeAttr("data-config"))) : (h = "imgContent" == a.contentType[k] ? "" != a.smallImgSrcT[k] ? a.smallImgSrcT[k] : "" != a.smallHoverSrcT[k] ? a.smallHoverSrcT[k] : a.sliderSrc[k] : "" != a.smallImgSrc[k] ? a.smallImgSrc[k] : "" != a.smallHoverSrc[k] ? a.smallHoverSrc[k] : a.sliderSrc[k], l.length > 0 ? (checkUrl(h) ? l.children("img").length > 0 ? l.children("img").attr({
						src: h
					}) : l.html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + h + '">').tResize() : l.children("img").removeAttr("src"), "" != a.sWidth && $.isNumeric(a.sWidth) && l.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && l.css({
						height: a.sHeight
					}), l.show()) : (r = 120, s = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (r = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (s = a.sHeight), b.setAttachID(a.childConfig[0]), l = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="top:' + j + "px;left:" + (b.tParseInt(i) + b.tParseInt(r)) + "px;width:" + r + "px;height:" + s + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + h + '"></div>').tResize().insertAfter(m).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID))), i = b.tParseInt(l.css("left")), j = b.tParseInt(l.css("top"));
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
					var c, d, e, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, f = JSON.parse(a.attr("data-config")),
						g = a.width(),
						h = a.height(),
						i = b.tParseInt(a.css("top")),
						j = b.tParseInt(a.css("left")),
						k = f.childConfig[0],
						l = ("" + (new Date).valueOf()).substr(7, 6),
						m = a.children(b.appChildCls + "[data-attachType='lbePanel']"),
						n = "",
						o = f.sliderMode,

						p = f.sliderOverflow || "hidden",
						q = f.sliderDuration || "0.5",
						r = "no" == f.sliderPauseHover ? ",'pauseOnHover':false" : "",
						s = "a",
						t = "",
						u = "",
						v = "",
						w = "",
						x = "",
						y = "display:none;",
						z = "",
						A = "",
						B = "",
						C = [],
						D = "",
						E = "",
						F = "",
						G = "",
						H = f.smallCircleMode || [],
						I = f.smallCircleBgColor || [],
						J = f.smallCircleBgColor1 || [],
						K = f.smallCustom || [],
						L = f.smallCustom1 || [],
						M = !1,
						N = "",
						O = "",
						P = "",
						Q = "",
						R = "";
					if (!f.sliderDelay && (f.sliderDelay = "0"), !f.smallShowCss && (f.smallShowCss = ""), !f.smallShowSpeed && (f.smallShowSpeed = "trans02s"), !f.dSmallRorate && (f.dSmallRorate = ""), !f.aSmallRorate && (f.aSmallRorate = ""), f.shadeMode && "yes" == f.shadeMode ? (T = f.shadeCount || 1, U = "", V = "", W = "", X = "", Y = "", Z = 0, c = b.tParseInt(g / T), Z = g % T, 0 != Z && T++, shadeMarginLeft = "") : c = g, "" != f.dSmallRorate && (N = " " + f.dSmallRorate + " " + f.smallShowSpeed), "" != f.aSmallRorate && ("" == f.dSmallRorate && (N += " " + f.smallShowSpeed), O = " jrat " + f.aSmallRorate), ("" != f.dSmallRorate || "" != f.aSmallRorate) && (P = ' data-da="' + (f.dSmallRorate || "") + "|" + (f.aSmallRorate || "") + "|" + (f.smallShowSpeed || "") + '"'), !f.sliderActive && (f.sliderActive = "1"), d = b.tParseInt(f.sliderActive) - 1, "" == f.displayMode && "" == f.css3Mode || "yes" != f.sliderArrow || "" == k.oSrc && "" == k.oSrcHover && "" == k.tSrc && "" == k.tSrcHover || (E = " jspb j-b", Q = " " + f.css3Speed, R = " " + f.css3Speed, "june-box-fadein" == f.displayMode && (Q += " june-box-fadein b-1-fadein", R += " june-box-fadein b-1-fadein"), f.css3Mode.indexOf("moveout") >= 0 && (Q += " june-box-lx" + f.css3Mode.replace(/moveout/g, "") + " b-1-lx" + f.css3Mode.replace(/moveout/g, ""), R += " june-box-rx" + f.css3Mode.replace(/moveout/g, "") + " b-1-rx" + f.css3Mode.replace(/moveout/g, "")), f.css3Mode.indexOf("movein") >= 0 && (Q += " june-box-rx" + f.css3Mode.replace(/movein/g, "") + " b-1-rx" + f.css3Mode.replace(/movein/g, ""), R += " june-box-lx" + f.css3Mode.replace(/movein/g, "") + " b-1-lx" + f.css3Mode.replace(/movein/g, ""))), f.contentType[0], _ = !1, !f.thumbSet && (f.thumbSet = []), !f.thumbCircleSet && (f.thumbCircleSet = []), f.thumbSet) for (ab = 0; ab < f.thumbSet.length; ab++) if (f.thumbSet[ab] && "" != f.thumbSet[ab]) {
						_ = !0;
						break
					}
					for (bb = 0; bb < f.customContent.length; bb++) if (f.customContent[bb].indexOf("jspb") >= 0) {
						M = !0;
						break
					}
					if (M && (E = F = " j-b"), _ ? G = '<div class="sfa' + E + '" style="width:' + g + "px;height:" + h + 'px;z-index:10;">' : (F = E, E = " j-b"), "" != f.smallShowCss && "" == F && (F = " j-b"), "1" == o.substr(-1) && (o = o.substr(0, o.length - 1), s = "b", t = ", 'viewSize': ["), cb = "", "1" != f.sliderActive && ("scrollx" == o ? cb = "b" == s ? "left:" + d * g + "px;" : "left:-" + d * g + "px;" : "scrolly" == o && (cb = "b" == s ? "top:" + d * h + "px;" : "top:-" + d * h + "px;")), "none" != o && "fade" != o && (sliderModeFade = "hidden"), m.length > 0 && m.each(function(a) {
						var d = $(this),
							e = d.width(),
							g = d.height(),
							h = b.tParseInt(d.css("top")),
							i = b.tParseInt(d.css("left")),
							j = "";
						f.childConfig[a + 1] && (f.childConfig[a + 1].smallShowCss && "" != f.childConfig[a + 1].smallShowCss && ("" == F && (F = " j-b"), j = " " + f.childConfig[a + 1].smallShowCss + " " + (f.childConfig[a + 1].smallShowSpeed || "trans02s")), n += '<div class="abs lbepanel' + j + '" style="overflow: hidden;width:' + e + "px;height:" + g + "px;top:" + h + "px;left:" + i + "px;z-index:" + (10 + b.tParseInt(f.childConfig[a + 1].zFloor)) + ';">' + f.childConfig[a + 1].customContent + "</div>")
					}), u = G + '<div class="rel scroller' + E + '" style="overflow:' + p + ";width:" + g + "px;height:" + h + 'px;z-index:10;"><div class="ks-switchable-content c' + l + '" style="' + cb + '">', e = "white" == f.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == f.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", fb = a.children(b.appChildCls + "[data-attachType='jfsbOArrow']"), gb = a.children(b.appChildCls + "[data-attachType='jfsbTArrow']"), db = b.setChildPos(a, fb, !0), eb = b.setChildPos(a, gb, !0), hb = "", ib = '"', jb = '"', kb = '"', lb = '"', mb = "", nb = "", "yes" == f.sliderArrow && (checkUrl(k.oSrc) && (ib = "background:url(" + k.oSrc + ') no-repeat center center;" alt="上一页"'), checkUrl(k.tSrc) && (jb = "background:url(" + k.tSrc + ') no-repeat center center;" alt="下一页"'), checkUrl(k.oSrcHover) && (kb = "background:url(" + k.oSrcHover + ') no-repeat center center;" alt="上一页"'), checkUrl(k.tSrcHover) && (lb = "background:url(" + k.tSrcHover + ') no-repeat center center;" alt="下一页"'), mb = '<div style="display:block;width:100%;height:100%;' + ib + " ></div>", nb = '<div style="display:block;width:100%;height:100%;' + jb + " ></div>", ('"' != kb || '"' != lb) && (hb = " junefade", mb = '<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0; ' + ib + ' ></div><div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0; ' + kb + " ></div>", nb = '<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0; ' + jb + ' ></div><div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0; ' + lb + " ></div>")), "yes" == f.sliderArrow && (y = ""), w = " 'prevBtnCls': 'prev" + l + "', 'nextBtnCls': 'next" + l + "', ", x = '<div class="abs prev' + l + Q + hb + '" style="' + y + "cursor:pointer;width:" + db.width + "px;height:" + db.height + "px;top:" + db.top + "px;left:" + db.left + 'px;z-index:14;">' + mb + '</div><div class="abs next' + l + R + hb + '" style="' + y + "cursor:pointer;width:" + eb.width + "px;height:" + eb.height + "px;top:" + eb.top + "px;left:" + eb.left + 'px;z-index:14;">' + nb + "</div>", ob = "juneactive", "no" == f.sliderSmallImg && (z = "display:none;"), $.each(f.contentType, function(e) {
						var x, y, z, E, F, G, M, O, P, Q, R, S, T, U, V, W, X, k = a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:eq(" + e + ")"),
							l = f.sliderHref[e],
							m = k.attr("attachID") || "",
							n = " " + m,
							j = b.getChildPos(a, k, !0),
							q = " rel",
							r = "",
							u = "",
							w = "display:block;";
						"b" == s && ("scrollx" == o ? (u = e * g, r = "left:-" + u + "px;top:0;", t += "-" + g + ",") : "scrolly" == o && (u = e * h, r = "left:0;top:-" + u + "px;", t += "-" + h + ","), q = " abs"), d == e && (w = "display:block;"), D = e == d ? "juneactive" + N : "" + N, "yes" != H[e] && "yes1" != H[e] && f.thumbSet[e] && "" != f.thumbSet[e] && (x = require("scripts/allwzset"), y = JSON.parse(f.thumbSet[e]), z = '"></li>', y.href = l, y.hrefMode = f.hrefMode, y.sliderSwitch = f.sliderSwitch, z = x.allExport(k, y, "jfsb"), B += '<li data-i="' + m + '" class="abs thumbsmall ' + D + n + z), "imgContent" == f.contentType[e] ? (E = f.smallImgSrcT[e], F = f.smallHoverSrcT[e], G = !1, M = "", O = "", "" == F && (F = E, G = !0), "" == F && (F = f.sliderSrc[e], G = !1), "transparent" != f.kgdSwitch && ("" == f.smallHoverSrcT[e] || f.smallHoverSrcT != f.smallImgSrcT) && (G = !0), "" == E && (E = f.sliderSrc[e]), C.push(F), checkUrl(F) && (M = 'src="' + F + '"'), "" != f.sliderSrc[e] && (O = "background:url(" + f.sliderSrc[e] + ") no-repeat scroll center center transparent;"), v += '<div class="elepic" style="height:' + h + "px;width:" + c + "px;" + w + "float:left;overflow:" + p + ';"><div class="elexb' + q + '" style="height:' + h + "px;width:" + g + "px;" + r + O + '"><a class="J_TWidget" href="' + l + '" target="' + f.hrefMode + '" style="height:' + h + "px;width:" + g + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>', A = '<a href="' + l + '" target="' + f.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img ' + M + ' style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', G ? (P = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", Q = "background:#000000;", "white" == f.kgdSwitch && (Q = "background:#ffffff;"), "transparent" == f.kgdSwitch && (Q = "", P = ""), R = '<a href="' + l + '" target="' + f.hrefMode + '" class="abs s2" style="' + Q + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + P + "width:" + j.width + "px;height:" + j.height + 'px;"></a>', "click" == f.sliderSwitch && (R = '<a class="abs s2" style="' + Q + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + P + "width:" + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[e] ? (!K[e] && "" == K[e], !L[e] && "" == L[e], B += "" == L[e] ? '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>" : '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[e] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>") : "yes" == H[e] ? (S = "", T = "", U = "", V = "", W = "", X = "", f.thumbCircleSet[e] && "" != f.thumbCircleSet[e] ? (W = " scm_s", U = JSON.parse(f.thumbCircleSet[e]), V = U.characterContent, S = RGBToHex(U.characterBgColor, ""), "" != S && (S = "background-color:" + S + ";"), U.characterColor = RGBToHex(U.characterColor, ""), "" != U.characterColor && (S += "color:" + U.characterColor + ";"), "" != U.characterFont && (S += "font-family:" + U.characterFont + ";"), "" != U.characterWeight && (S += "font-weight:" + U.characterWeight + ";"), "" != U.characterSize && (S += "font-size:" + b.tParseInt(U.characterSize) + "px;"), "off" != U.characterHoverMode ? (X = " s1h", T = RGBToHex(U.characterBgColorHover, ""), "" != T && (T = "background-color:" + T + ";"), U.characterColorHover = RGBToHex(U.characterColorHover, ""), "" != U.characterColorHover && (T += "color:" + U.characterColorHover + ";"), "" != U.characterFontHover && (T += "font-family:" + U.characterFontHover + ";"), "" != U.characterWeightHover && (T += "font-weight:" + U.characterWeightHover + ";"), "" != U.characterSizeHover && (T += "font-size:" + b.tParseInt(U.characterSizeHover) + "px;")) : T = S) : (I[e] && (S = RGBToHex(I[e], ""), "" != S && (S = "background-color:" + S + ";")), J[e] && (T = RGBToHex(J[e], ""), "" != T && (T = "background-color:" + T + ";"))), B += '<li class="abs scm ' + D + W + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + X + '" style="border-radius:50%;width:100%;height:100%;' + T + '">' + V + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + S + '">' + V + "</div></li>") : f.thumbSet[e] && "" != f.thumbSet[e] || (B += '<li class="abs ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + A + R + "</li>")) : (R = '<a href="' + l + '" target="' + f.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', "click" == f.sliderSwitch && (R = '<a class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[e] ? (!K[e] && "" == K[e], !L[e] && "" == L[e], B += "" == L[e] ? '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>" : '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[e] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>") : "yes" == H[e] ? (S = "", T = "", U = "", V = "", W = "", X = "", f.thumbCircleSet[e] && "" != f.thumbCircleSet[e] ? (W = " scm_s", U = JSON.parse(f.thumbCircleSet[e]), V = U.characterContent, S = RGBToHex(U.characterBgColor, ""), "" != S && (S = "background-color:" + S + ";"), U.characterColor = RGBToHex(U.characterColor, ""), "" != U.characterColor && (S += "color:" + U.characterColor + ";"), "" != U.characterFont && (S += "font-family:" + U.characterFont + ";"), "" != U.characterWeight && (S += "font-weight:" + U.characterWeight + ";"), "" != U.characterSize && (S += "font-size:" + b.tParseInt(U.characterSize) + "px;"), "off" != U.characterHoverMode ? (X = " s1h", T = RGBToHex(U.characterBgColorHover, ""), "" != T && (T = "background-color:" + T + ";"), U.characterColorHover = RGBToHex(U.characterColorHover, ""), "" != U.characterColorHover && (T += "color:" + U.characterColorHover + ";"), "" != U.characterFontHover && (T += "font-family:" + U.characterFontHover + ";"), "" != U.characterWeightHover && (T += "font-weight:" + U.characterWeightHover + ";"), "" != U.characterSizeHover && (T += "font-size:" + b.tParseInt(U.characterSizeHover) + "px;")) : T = S) : (I[e] && (S = RGBToHex(I[e], ""), "" != S && (S = "background-color:" + S + ";")), J[e] && (T = RGBToHex(J[e], ""), "" != T && (T = "background-color:" + T + ";"))), B += '<li class="abs scm ' + D + W + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + X + '" style="border-radius:50%;width:100%;height:100%;' + T + '">' + V + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + S + '">' + V + "</div></li>") : f.thumbSet[e] && "" != f.thumbSet[e] || (B += '<li class="abs ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + A + R + "</li>"))) : (E = f.smallImgSrc[e], F = f.smallHoverSrc[e], G = !1, M = "", "" == F && (F = E, G = !0), "" == F && (F = f.sliderSrc[e], G = !1), "transparent" != f.kgdSwitch && ("" == f.smallHoverSrc[e] || f.smallHoverSrc != f.smallImgSrc) && (G = !0), "" == E && (E = f.sliderSrc[e]), C.push(F), checkUrl(F) && (M = 'src="' + F + '"'), v += '<div class="elepic" style="height:' + h + "px;width:" + c + "px;" + w + "float:left;overflow:" + p + ';"><div class="elexb' + q + '" style="height:' + h + "px;width:" + g + "px;" + r + '">' + f.customContent[e] + "</div></div>", A = '<a href="' + l + '" target="' + f.hrefMode + '" class="abs s1" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img ' + M + ' style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', G ? (P = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", Q = "background:#000000;", "white" == f.kgdSwitch && (Q = "background:#ffffff;"), "transparent" == f.kgdSwitch && (Q = "", P = ""), R = '<a href="' + l + '" target="' + f.hrefMode + '" class="abs s2" style="' + Q + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + P + "width:" + j.width + "px;height:" + j.height + 'px;"></a>', "click" == f.sliderSwitch && (R = '<a class="abs s2" style="' + Q + "top:0px;left:0px;width:" + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;' + P + "width:" + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[e] ? (!K[e] && "" == K[e], !L[e] && "" == L[e], B += "" == L[e] ? '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>" : '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[e] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>") : "yes" == H[e] ? (S = "", T = "", U = "", V = "", W = "", X = "", f.thumbCircleSet[e] && "" != f.thumbCircleSet[e] ? (W = " scm_s", U = JSON.parse(f.thumbCircleSet[e]), V = U.characterContent, S = RGBToHex(U.characterBgColor, ""), "" != S && (S = "background-color:" + S + ";"), U.characterColor = RGBToHex(U.characterColor, ""), "" != U.characterColor && (S += "color:" + U.characterColor + ";"), "" != U.characterFont && (S += "font-family:" + U.characterFont + ";"), "" != U.characterWeight && (S += "font-weight:" + U.characterWeight + ";"), "" != U.characterSize && (S += "font-size:" + b.tParseInt(U.characterSize) + "px;"), "off" != U.characterHoverMode ? (X = " s1h", T = RGBToHex(U.characterBgColorHover, ""), "" != T && (T = "background-color:" + T + ";"), U.characterColorHover = RGBToHex(U.characterColorHover, ""), "" != U.characterColorHover && (T += "color:" + U.characterColorHover + ";"), "" != U.characterFontHover && (T += "font-family:" + U.characterFontHover + ";"), "" != U.characterWeightHover && (T += "font-weight:" + U.characterWeightHover + ";"), "" != U.characterSizeHover && (T += "font-size:" + b.tParseInt(U.characterSizeHover) + "px;")) : T = S) : (I[e] && (S = RGBToHex(I[e], ""), "" != S && (S = "background-color:" + S + ";")), J[e] && (T = RGBToHex(J[e], ""), "" != T && (T = "background-color:" + T + ";"))), B += '<li class="abs scm ' + D + W + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + X + '" style="border-radius:50%;width:100%;height:100%;' + T + '">' + V + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + S + '">' + V + "</div></li>") : f.thumbSet[e] && "" != f.thumbSet[e] || (B += '<li class="abs ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + A + R + "</li>")) : (R = '<a href="' + l + '" target="' + f.hrefMode + '" class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>', "click" == f.sliderSwitch && (R = '<a class="abs s2" style="top:0px;left:0px;width:' + j.width + "px;height:" + j.height + 'px;"><img src="' + E + '" style="vertical-align:top;width:' + j.width + "px;height:" + j.height + 'px;"></a>'), "yes1" == H[e] ? (!K[e] && "" == K[e], !L[e] && "" == L[e], B += "" == L[e] ? '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s3" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>" : '<li class="abs sch ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;overflow:hidden;"><div class="abs s1" style="top:0;left:0;width:100%;height:100%;">' + L[e] + '</div><div class="abs s2" style="top:0;left:0;width:100%;height:100%;">' + K[e] + "</div></li>") : "yes" == H[e] ? (S = "", T = "", U = "", V = "", W = "", X = "", f.thumbCircleSet[e] && "" != f.thumbCircleSet[e] ? (W = " scm_s", U = JSON.parse(f.thumbCircleSet[e]), V = U.characterContent, S = RGBToHex(U.characterBgColor, ""), "" != S && (S = "background-color:" + S + ";"), U.characterColor = RGBToHex(U.characterColor, ""), "" != U.characterColor && (S += "color:" + U.characterColor + ";"), "" != U.characterFont && (S += "font-family:" + U.characterFont + ";"), "" != U.characterWeight && (S += "font-weight:" + U.characterWeight + ";"), "" != U.characterSize && (S += "font-size:" + b.tParseInt(U.characterSize) + "px;"), "off" != U.characterHoverMode ? (X = " s1h", T = RGBToHex(U.characterBgColorHover, ""), "" != T && (T = "background-color:" + T + ";"), U.characterColorHover = RGBToHex(U.characterColorHover, ""), "" != U.characterColorHover && (T += "color:" + U.characterColorHover + ";"), "" != U.characterFontHover && (T += "font-family:" + U.characterFontHover + ";"), "" != U.characterWeightHover && (T += "font-weight:" + U.characterWeightHover + ";"), "" != U.characterSizeHover && (T += "font-size:" + b.tParseInt(U.characterSizeHover) + "px;")) : T = S) : (I[e] && (S = RGBToHex(I[e], ""), "" != S && (S = "background-color:" + S + ";")), J[e] && (T = RGBToHex(J[e], ""), "" != T && (T = "background-color:" + T + ";"))), B += '<li class="abs scm ' + D + W + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;line-height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;text-align:center;"><div class="abs s1' + X + '" style="border-radius:50%;width:100%;height:100%;' + T + '">' + V + '</div><div class="abs s2" style="border-radius:50%;width:100%;height:100%;' + S + '">' + V + "</div></li>") : f.thumbSet[e] && "" != f.thumbSet[e] || (B += '<li class="abs ' + D + n + '" data-i="' + m + '" style="width:' + j.width + "px;height:" + j.height + "px;top:" + j.top + "px;left:" + j.left + 'px;cursor:pointer;">' + A + R + "</li>")))
					}), f.shadeMode && "yes" == f.shadeMode || (_ ? (pb = x, x = "", v += "</div></div>" + pb + "</div>") : v += "</div></div>"), "b" == s && (t = t.substr(0, t.length - 1) + "]"), qb = "", rb = "", f.smallShowMode && "outbox" == f.smallShowMode && (F += " outbox"), f.smallShowCss && "" != f.smallShowCss && (rb = " " + f.smallShowCss + " " + f.smallShowSpeed), f.shadeMode && "yes" == f.shadeMode) {
						for (ab = 0; T > ab; ab++) S = c, ab == T - 1 && 0 != Z && (S = Z, qb = "jfsbyys "), 0 == ab ? (X = ' data-appid="' + f.appID + '"' + P + ' data-s="' + s + '" data-hsrc="' + C.join(",") + '"', Y = "top:" + i + "px;left:" + j + "px;") : (X = "", Y = ""), U += '<div class="jfsb ' + qb + "abs J_TWidget" + F + " " + f.appID + '"' + X + ' style="height:' + h + "px;width:" + g + "px;" + Y + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c_' + ab + "_" + l + "','navCls':'n" + l + "','effect':'" + o + "','steps':1,'circular':true,'easing':'" + f.sliderEffect + "','duration':'" + (b.tParseFloat(q) + .02 * ab) + "'," + w + "'autoplay':" + f.sliderAuto + ",'interval':" + f.sliderTime + ",'delay':" + f.sliderDelay + ",'activeTriggerCls':'" + ob + O + "', 'triggerType': '" + f.sliderSwitch + "'" + t + ", 'activeIndex': " + d + r + '}">', u = '<div class="rel scroller' + E + '" style="overflow:hidden;width:' + S + "px;height:" + h + 'px;z-index:10;float:left;"><div class="ks-switchable-content c_' + ab + "_" + l + '" style="' + cb + '">', div1 = v.replace(/\<div class\=\"elexb([^\>]*)\>/g, function(a) {
							var d = a;
							return d = d.replace(/(width\:[\d\.]*px\;)(left\:\-?([^\;]*)\;)?/g, function(a, d, e, f) {
								var g = "";
								return "scrollx" == o && f && "" != f && (g = b.tParseInt(f)), d + "left:-" + (c * ab + g) + "px;"
							})
						}), ab == T - 1 && 0 != Z && (div1 = div1.replace(/\<div class\=\"elepic([^\>]*)\>/g, function(a) {
							var b = a;
							return b = b.replace(/width\:([\d\.]*)px\;/g, function(a, b) {
								return b = b.replace(c, S), "width:" + b + "px;"
							})
						})), sb = x, _ && (sb = x + "</div>"), div1 += "</div></div>", V += u + div1, W += "</div>";
						return U + G + V + sb + '<ul class="ks-switchable-nav abs n' + l + rb + '" style="' + z + 'top:0px;left:0px;z-index:12;background:none;">' + B + "</ul>" + n + W
					}
					return '<div class="jfsb abs J_TWidget' + F + " " + f.appID + '" data-appid="' + f.appID + '"' + P + ' data-s="' + s + '" style="height:' + h + "px;width:" + g + "px;top:" + i + "px;left:" + j + 'px;z-index:10;" data-hsrc="' + C.join(",") + '" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c' + l + "','navCls':'n" + l + "','effect':'" + o + "','steps':1,'circular':true,'easing':'" + f.sliderEffect + "','duration':'" + q + "'," + w + "'autoplay':" + f.sliderAuto + ",'interval':" + f.sliderTime + ",'delay':" + f.sliderDelay + ",'activeTriggerCls':'" + ob + O + "', 'triggerType': '" + f.sliderSwitch + "'" + t + ", 'activeIndex': " + d + r + '}">' + x + u + v + '<ul class="ks-switchable-nav abs n' + l + rb + '" style="' + z + 'top:0px;left:0px;z-index:12;background:none;">' + B + "</ul>" + n + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, A, B, C, D, E, F, G, H;
					if (d.hasClass("jsdb")) {
						if (h = JSON.parse(a.attr("data-config")), i = a.attr("data-dblType"), j = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')), k = {}, k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.customContent = [], k.contentType = [], k.smallCircleMode = [], k.smallCircleBgColor = [], k.smallCircleBgColor1 = [], k.sliderSmallImg = "no", k.sliderOverflow = "hidden", k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jsdb").length > 0) {
							for (k.shadeCount = 1; d.children(".jsdb").length > 0;) d = d.children(".jsdb"), j = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
							}, d.hasClass("jsdbyys") || k.shadeCount++;
							k.shadeMode = "yes"
						}
						"visible" == d.children(".scroller:eq(0)").css("overflow") && (k.sliderOverflow = "visible"), d.children(".scroller:eq(0)").find("div.haibaos_pic").each(function() {
							var b, c, d, e, a = $(this);
							a.children("div.elexb").length > 0 && (a = a.children("div.elexb")), b = a.find("a.simple"), c = a.css("background-image").replace(/^url|[\(\"\)]*/g, ""), d = a.find("a.simple").attr("href"), e = a.html(), b.length > 0 ? (k.contentType.push("imgContent"), k.sliderSrc.push(c), k.sliderHref.push(d), k.customContent.push("")) : (k.contentType.push("customContent"), k.sliderSrc.push(""), k.sliderHref.push(""), k.customContent.push(e)), k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.smallCircleMode.push("no"), k.smallCircleBgColor.push(""), k.smallCircleBgColor1.push("")
						}), d.children(".scroller:eq(0)").find("div.haibaos_pic").length > 1 && (h.sliderSrc = [], h.sliderHref = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], h.customContent = [], h.contentType = [], h.smallCircleMode = [], h.smallCircleBgColor = [], h.smallCircleBgColor1 = []), l = d.children(".smlldiv_btn"), k.sliderArrow = "none" == l.css("display") ? "no" : "yes", j.effect && (k.sliderMode = j.effect), j.autoplay && (k.sliderAuto = j.autoplay), j.easing && (k.sliderEffect = j.easing), j.interval && (k.sliderTime = j.interval), m = l.children("span:eq(0)"), n = l.children("span:eq(1)"), l.children("span:eq(0)").hasClass("prevsamll") && (m = l.children("span:eq(0)").children("img:eq(0)"), n = l.children("span:eq(1)").children("img:eq(0)")), k.hrefMode = d.find("a.simple").attr("target") || "_blank", k.childConfig[0].oSrc = l.children("span:eq(0)").children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = l.children("span:eq(1)").children("img:eq(0)").attr("src"), k.childConfig[0].autoSize = "no", k.childConfig[0].autoSize1 = "no", l.children("span:eq(0)").children("img:eq(1)").length > 0 && (k.childConfig[0].oSrcHover = l.children("span:eq(0)").children("img:eq(1)").attr("src")), l.children("span:eq(1)").children("img:eq(1)").length > 0 && (k.childConfig[0].tSrcHover = l.children("span:eq(1)").children("img:eq(1)").attr("src")), f = b.getChildPos(d, m, !0), g = b.getChildPos(d, n, !0), o = $.extend({}, h, k), a.attr("data-config", JSON.stringify(o)), require("scripts/tAjax"), "" != k.sliderSrc[0] && checkUrl(k.sliderSrc[0]) ? a.css({
							backgroundImage: "url(" + k.sliderSrc[0] + ")"
						}) : a.css({
							backgroundImage: ""
						}), "no" == k.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").css({
							backgroundImage: "url(" + k.childConfig[0].oSrc + ")",
							width: 0 == f.width ? 48 : f.width,
							height: 0 == f.height ? 48 : f.height,
							top: f.top,
							left: f.left
						}), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").css({
							backgroundImage: "url(" + k.childConfig[0].tSrc + ")",
							width: 0 == g.width ? 48 : g.width,
							height: 0 == g.height ? 48 : g.height,
							top: g.top,
							left: g.left
						})), a.children(b.appOtherCls).html(""), "customContent" == k.contentType[0] && (a.css({
							backgroundImage: ""
						}), a.children(b.appOtherCls).html(k.customContent[0]))
					} else {
						if (h = JSON.parse(a.attr("data-config")), i = a.attr("data-dblType"), k = {}, s = d.attr("data-hsrc"), j = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
						}, k.sliderDuration = j.duration ? j.duration : "0.5", k.sliderPauseHover = j.pauseOnHover === !1 || "false" == j.pauseOnHover ? "no" : "yes", s = s ? s.split(",") : [], d.attr("data-da") ? (r = d.attr("data-da").split("|"), k.dSmallRorate = r[0] || "", k.aSmallRorate = r[1] || "", k.smallShowSpeed = r[2] || "trans02s") : (k.dSmallRorate = "", k.aSmallRorate = ""), t = d.attr("data-s") || "a", k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.customContent = [], k.contentType = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.thumbSet = [], k.thumbCircleSet = [], k.smallCircleMode = [], k.smallCircleBgColor = [], k.smallCircleBgColor1 = [], k.smallCustom = [], k.smallCustom1 = [], k.sliderOverflow = "hidden", k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jfsb").length > 0) {
							for (k.shadeCount = 1; d.children(".jfsb").length > 0;) d = d.children(".jfsb"), j = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
							}, d.hasClass("jfsbyys") || k.shadeCount++;
							k.shadeMode = "yes"
						}
						if (u = !1, 1 == d.children("ul").length && (u = !0), k.sliderActive = "1", d.hasClass("outbox") && (k.smallShowMode = "outbox"), v = (d.find(".ks-switchable-nav").attr("class") || "").match(/trans(\w+)s/g), w = (d.find(".ks-switchable-nav").attr("class") || "").match(/b-1-(lx|rx|dy|uy)(\d+)/g), v && v.length > 0 && (k.smallShowSpeed = v[0]), w && w.length > 0 && (k.smallShowCss = w[0]), u) {
							if (x = require("scripts/other"), "visible" == d.find(".scroller:eq(0)").css("overflow") && (k.sliderOverflow = "visible"), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function(a) {
								var e, f, g, h, i, j, l, m, n, c = $(this);
								c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), i = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), s[a] || (s[a] = ""), e.length > 0 ? (k.contentType.push("imgContent"), k.sliderSrc.push(f), k.sliderHref.push(g), k.customContent.push(""), i.hasClass("thumbsmall") ? (k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push(x.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j)) : (j = i.find("img:eq(0)").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j)), k.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), !s[a] && (s[a] = ""), !f && (f = ""), !j && (j = ""), l = s[a].split(".com/"), m = f.split(".com/"), n = j.split(".com/"), l[1] && "" != l[1] && m[1] && "" != m[1] && l[1] == m[1] && (s[a] = ""), l[1] && "" != l[1] && n[1] && "" != n[1] && l[1] == n[1] && (s[a] = ""), k.smallHoverSrcT.push(s[a]), k.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), k.thumbSet.push(""))) : (k.contentType.push("customContent"), k.sliderSrc.push(""), k.customContent.push(h), i.find("a").length > 0 ? (g = i.find("a").attr("href") || "", k.sliderHref.push(g)) : k.sliderHref.push(""), i.hasClass("thumbsmall") ? (k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push(x.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), k.smallImgSrc.push(j)) : (j = i.find("img:eq(0)").attr("src"), k.smallImgSrc.push(j)), !s[a] && (s[a] = ""), !j && (j = ""), l = s[a].split(".com/"), m = j.split(".com/"), l[1] && "" != l[1] && m[1] && "" != m[1] && l[1] == m[1] && (s[a] = ""), k.smallImgSrcT.push(""), k.smallHoverSrc.push(s[a]), k.smallHoverSrcT.push(""), k.thumbSet.push("")))
							}), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (h.sliderSrc = [], h.sliderHref = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], h.customContent = [], h.contentType = [], h.thumbSet = [], h.thumbCircleSet = [], h.smallCircleMode = [], h.smallCircleBgColor = [], h.smallCircleBgColor1 = [], h.smallCustom = [], h.smallCustom1 = []), j.effect && (k.sliderMode = j.effect), "true" != j.autoplay && (k.sliderAuto = j.autoplay), j.easing && (k.sliderEffect = j.easing), j.interval && (k.sliderTime = j.interval), j.delay && (k.sliderDelay = j.delay), j.triggerType && (k.sliderSwitch = j.triggerType), j.activeIndex && (k.sliderActive = b.tParseInt(j.activeIndex) + 1), k.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", k.sliderArrow = "no", p = j.prevBtnCls, q = j.nextBtnCls, p && "undefined" != p) if (k.sliderArrow = "yes", d.find("." + p).children("img").length > 0 ? (k.childConfig[0].oSrc = d.find("." + p).children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = d.find("." + q).children("img:eq(0)").attr("src"), d.find("." + p).children("img").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + p).children("img:eq(1)").attr("src")), d.find("." + q).children("img").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + q).children("img:eq(1)").attr("src"))) : d.find("." + p).children("span").length > 0 ? (k.childConfig[0].oSrc = d.find("." + p).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.childConfig[0].tSrc = d.find("." + q).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + p).children("span").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + p).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + q).children("span").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + q).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))) : d.find("." + p).children("div").length > 0 && (k.childConfig[0].oSrc = d.find("." + p).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.childConfig[0].tSrc = d.find("." + q).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + p).children("div").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + p).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + q).children("div").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + q).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))), f = b.getChildPos(d, d.find("." + p), !0), g = b.getChildPos(d, d.find("." + q), !0), y = d.find("." + p), y.length > 0) {
								k.sliderArrow = "none" == y.css("display") ? "no" : "yes", k.displayMode = y.hasClass("june-box-fadein") ? "june-box-fadein" : "";
								try {
									k.css3Speed = y.attr("class").match(/trans(\w+)s/g).join(""), y.attr("class").indexOf("june-box-lx") >= 0 && (k.css3Mode = $.trim("moveout" + y.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), y.attr("class").indexOf("june-box-rx") >= 0 && (k.css3Mode = $.trim("movein" + y.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
								} catch (z) {}
							} else k.sliderArrow = "no", k.displayMode = "";
							a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").each(function() {
								b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
							}), a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").remove(), E = !0, d.children("ul:eq(0)").children("li").each(function(c) {
								var f, g, h, i, j, l, m, n, o, p, q, e = $(this);
								e.hasClass("scm") ? (k.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet.push(x.thumbCircleImport(e))) : (k.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), k.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), k.thumbCircleSet[c] = ""), k.smallCustom[c] = "", k.smallCustom1[c] = "") : e.hasClass("sch") ? (k.smallCircleMode[c] = "yes1", k.smallCustom.push(e.children(".s2").html() || e.children(".s3").html() || ""), k.smallCustom1.push(e.children(".s1").html() || ""), k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet[c] = "") : (k.smallCircleMode[c] = "no", k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet[c] = "", k.smallCustom[c] = "", k.smallCustom1[c] = ""), g = k.contentType[c], h = !1, "imgContent" == g ? (f = k.smallImgSrcT[c], "" == f && (f = k.smallHoverSrcT[c])) : (f = k.smallImgSrc[c], "" == f && (f = k.smallHoverSrc[c])), "" == f && (f = k.sliderSrc[c]), $(this).attr("data-i") ? k.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(k.childConfig[0]), "yes1" == k.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + k.smallCustom[c] + "</div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID) : "yes" == k.smallCircleMode[c] ? (i = "", j = "", l = "", m = "", n = $(this).width() + "px;", "" == k.thumbCircleSet[c] ? i = k.smallCircleBgColor[c] || k.smallCircleBgColor1[c] || "" : (j = JSON.parse(k.thumbCircleSet[c]), m = j.characterContent, i = j.characterBgColor || j.characterBgColorHover || "", j.characterColor = RGBToHex(j.characterColor, ""), "" != j.characterColor && (l += "color:" + j.characterColor + ";"), "" != j.characterFont && (l += "font-family:" + j.characterFont + ";"), "" != j.characterWeight && (l += "font-weight:" + j.characterWeight + ";"), "" != j.characterSize && (l += "font-size:" + b.tParseInt(j.characterSize) + "px;"), "auto" == j.characterWidthMode && (h = !0, n = "auto;")), o = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + l + '">' + m + "</div></div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), o.children(".t-jfsb-circle").css({
									backgroundColor: RGBToHex(i, ""),
									borderRadius: "50%"
								})) : "" == k.thumbSet[c] ? $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + f + '"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID) : (p = JSON.parse(k.thumbSet[c] || "{}"), n = $(this).width() + "px;", "auto" == p.characterWidthMode && (h = !0, n = "auto;"), $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), q = a.children(b.appChildCls + "[attachID='" + k.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(p, q), q.hasClass("j-app-qswz") || q.addClass("j-app-qswz"), q.removeAttr("data-config")), 0 == c && (A = $(this).width(), C = $(this).height(), h && (A = "")), B = $(this).width(), D = $(this).height(), h && (B = ""), (A != B || C != D) && (E = !1)
							}), E && (k.sWidth = A, k.sHeight = C)
						} else {
							if ("visible" == d.children(".scroller:eq(0)").css("overflow") && (k.sliderOverflow = "visible"), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function(a) {
								var e, f, g, h, i, j, c = $(this);
								c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), i = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), k.thumbSet.push(""), s[a] || (s[a] = ""), e.length > 0 ? (k.contentType.push("imgContent"), k.sliderSrc.push(f), k.sliderHref.push(g), k.customContent.push(""), i.find("img").attr("src") ? (j = i.find("img").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j)) : (j = d.children("ul:eq(0)").find("li img:eq(" + a + ")").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j)), k.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (s[a] == f || s[a] == j) && (s[a] = ""), k.smallHoverSrcT.push(s[a]), k.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png")) : (k.contentType.push("customContent"), k.sliderSrc.push(""), k.customContent.push(h), i.find("a").length > 0 ? (g = i.find("a").attr("href") || "", k.sliderHref.push(g)) : k.sliderHref.push(""), i.find("img").attr("src") ? (j = i.find("img").attr("src"), k.smallImgSrc.push(j)) : (j = d.children("ul:eq(0)").find("li img:eq(" + a + ")").attr("src"), k.smallImgSrc.push(j)), s[a] == j && (s[a] = ""), k.smallImgSrcT.push(""), k.smallHoverSrc.push(s[a]), k.smallHoverSrcT.push(""))
							}), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (h.sliderSrc = [], h.sliderHref = [], h.smallImgSrc = [], h.smallHoverSrc = [], h.smallImgSrcT = [], h.smallHoverSrcT = [], h.customContent = [], h.contentType = [], h.thumbSet = [], h.thumbCircleSet = [], h.smallCircleMode = [], h.smallCircleBgColor = [], h.smallCircleBgColor1 = [], h.smallCustom = [], h.smallCustom1 = []), j.effect && (k.sliderMode = j.effect), "true" != j.autoplay && (k.sliderAuto = j.autoplay), j.easing && (k.sliderEffect = j.easing), j.interval && (k.sliderTime = j.interval), j.delay && (k.sliderDelay = j.delay), j.triggerType && (k.sliderSwitch = j.triggerType), j.activeIndex && (k.sliderActive = b.tParseInt(j.activeIndex) + 1), k.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", k.sliderArrow = "no", p = j.prevBtnCls, q = j.nextBtnCls, p && "undefined" != p) {
								k.sliderArrow = "yes", d.find("." + p).children("img").length > 0 ? (k.childConfig[0].oSrc = d.find("." + p).children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = d.find("." + q).children("img:eq(0)").attr("src"), d.find("." + p).children("img").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + p).children("img:eq(1)").attr("src")), d.find("." + q).children("img").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + q).children("img:eq(1)").attr("src"))) : d.find("." + p).children("span").length > 0 ? (k.childConfig[0].oSrc = d.find("." + p).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.childConfig[0].tSrc = d.find("." + q).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + p).children("span").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + p).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + q).children("span").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + q).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))) : d.find("." + p).children("div").length > 0 && (k.childConfig[0].oSrc = d.find("." + p).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.childConfig[0].tSrc = d.find("." + q).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + p).children("div").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + p).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + q).children("div").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + q).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))), f = b.getChildPos(d, d.find("." + p), !0), g = b.getChildPos(d, d.find("." + q), !0), y = d.find("." + p), k.sliderArrow = "none" == y.css("display") ? "no" : "yes", k.displayMode = y.hasClass("june-box-fadein") ? "june-box-fadein" : "";
								try {
									k.css3Speed = y.attr("class").match(/trans(\w+)s/g).join(""), y.attr("class").indexOf("june-box-lx") >= 0 && (k.css3Mode = $.trim("moveout" + y.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), y.attr("class").indexOf("june-box-rx") >= 0 && (k.css3Mode = $.trim("movein" + y.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
								} catch (z) {}
							}
							a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").each(function() {
								b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
							}), a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").remove(), E = !0, d.children("ul:eq(0)").find("li").each(function(c) {
								var e, f = k.contentType[c];
								e = "imgContent" == f ? k.smallImgSrcT[c] : k.smallImgSrc[c], "" == e && (e = k.sliderSrc[c]), $(this).attr("data-i") ? k.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(k.childConfig[0]), $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + e + '"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), 0 == c && (A = $(this).width(), C = $(this).height()), B = $(this).width(), D = $(this).height(), (A != B || C != D) && (E = !1)
							}), E && (k.sWidth = A, k.sHeight = C)
						}
						d.children(".ks-switchable-nav").find("li").each(function() {
							var a = $(this);
							return F = a.css("background-image"), F && F.indexOf("img01") >= 0 ? (k.kgdSwitch = "white", !1) : F && F.indexOf("img02") >= 0 ? (k.kgdSwitch = "black", !1) : F && F.indexOf("img03") >= 0 ? (k.kgdSwitch = "transparent", !1) : void 0
						}), u && (G = RGBToHex(d.children(".ks-switchable-nav").find("li").children("a.s2").css("background-color"), ""), F = "#ffffff" == G.toLowerCase() ? k.kgdSwitch = "white" : "#000000" == G.toLowerCase() ? k.kgdSwitch = "black" : void 0), F || (k.kgdSwitch = "transparent"), "none" == d.children("ul:eq(0)").css("display") ? (k.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").hide()) : k.sliderSmallImg = "yes", "b" == t && (k.sliderMode += "1"), H = d.children("div.lbepanel"), H.length > 0 && H.each(function() {
							var g, h, e = $(this),
								f = {};
							b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jfsb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", f.attachID), k.childConfig.push(f)
						}), o = $.extend(h, k), a.attr("data-config", JSON.stringify(o)), require("scripts/tAjax"), "" != k.sliderSrc[0] && checkUrl(k.sliderSrc[0]) ? a.css({
							backgroundImage: "url(" + k.sliderSrc[0] + ")"
						}) : a.css({
							backgroundImage: ""
						}), "no" == k.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").css({
							backgroundImage: "url(" + k.childConfig[0].oSrc + ")",
							width: 0 == f.width ? 48 : f.width,
							height: 0 == f.height ? 48 : f.height,
							top: f.top,
							left: f.left
						}).show(), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").css({
							backgroundImage: "url(" + k.childConfig[0].tSrc + ")",
							width: 0 == g.width ? 48 : g.width,
							height: 0 == g.height ? 48 : g.height,
							top: g.top,
							left: g.left
						}).show()), a.children(b.appOtherCls).html(""), "customContent" == k.contentType[0] && (a.css({
							backgroundImage: ""
						}), a.children(b.appOtherCls).html(k.customContent[0]))
					}
					a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").attr("appID", k.appID), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").attr("appID", k.appID), a.attr("appID", k.appID), e(i, k.appID)
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
					var h, i, j, k, l, m, n, o, p, q, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jfybOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jfybTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='jfybPanel']");
					for (smallSliderSpace = b.tParseInt(a.smallSliderSpace), checkUrl(a.sliderSrc[0]) ? c.css({
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
					}), h = "display:inline-block;", i = "inline-block", j = "margin-right:" + smallSliderSpace + "px;", "scrolly" == a.smallSliderMode && (h = "", i = "block", j = "margin-bottom:" + smallSliderSpace + "px;"), !a.thumbSet && (a.thumbSet = []), g.children(b.appOtherCls + "[data-attachType='jfybSmallImg']:gt(" + (a.contentType.length - 1) + ")").hide(), k = $(this), l = "", m = 0; m < a.contentType.length; m++) k = g.children(b.appOtherCls + "[data-attachType='jfybSmallImg']:eq(" + m + ")"), l = "", a.thumbSet[m] && "" != a.thumbSet[m] ? (n = JSON.parse(a.thumbSet[m]), k.length > 0 ? (k.html("").css("vertical-align", "top"), "" != a.sWidth && $.isNumeric(a.sWidth) && k.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && k.css({
						height: a.sHeight
					}), b.appConfig["jcb"][1].tSubmit(n, k), k.removeAttr("data-config")) : (o = 120, p = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (o = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (p = a.sHeight), b.setAttachID(a.childConfig[0]), $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="vertical-align:top;' + h + j + "width:" + o + "px;height:" + p + 'px;"></div>').tResize().appendTo(g).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID), q = g.children(b.appOtherCls + "[attachID='" + a.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(n, q), q.removeAttr("data-config"))) : (l = "imgContent" == a.contentType[m] ? "" != a.smallImgSrcT[m] ? a.smallImgSrcT[m] : "" != a.smallHoverSrcT[m] ? a.smallHoverSrcT[m] : a.sliderSrc[m] : "" != a.smallImgSrc[m] ? a.smallImgSrc[m] : "" != a.smallHoverSrc[m] ? a.smallHoverSrc[m] : a.sliderSrc[m], k.length > 0 ? (checkUrl(l) && (k.children("img").length > 0 ? k.children("img").attr({
						src: l
					}) : k.html('<div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + l + '">').tResize()), "" != a.sWidth && $.isNumeric(a.sWidth) && k.css({
						width: a.sWidth
					}), "" != a.sHeight && $.isNumeric(a.sHeight) && k.css({
						height: a.sHeight
					}), "scrolly" == a.smallSliderMode ? k.css("margin-bottom", smallSliderSpace) : k.css("margin-right", smallSliderSpace), k.css("display", i).show()) : (o = 120, p = 120, "" != a.sWidth && $.isNumeric(a.sWidth) && (o = a.sWidth), "" != a.sHeight && $.isNumeric(a.sHeight) && (p = a.sHeight), b.setAttachID(a.childConfig[0]), $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="' + h + j + "width:" + o + "px;height:" + p + 'px;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + l + '"></div>').tResize().appendTo(g).attr("appID", a.appID).attr("attachID", a.childConfig[0].attachID)));
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
					var c, d, e, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, f = JSON.parse(a.attr("data-config")),
						g = a.width(),
						h = a.height(),
						i = b.tParseInt(a.css("top")),
						j = b.tParseInt(a.css("left")),
						k = f.childConfig[0],
						l = ("" + (new Date).valueOf()).substr(7, 6),
						m = f.sliderMode,
						n = f.smallSliderMode,
						o = b.tParseInt(f.smallSliderSpace),
						p = "a",
						q = "",
						r = "a",
						s = "",
						t = "",
						u = "",
						v = "",
						w = "",
						x = "",
						y = "",
						z = "",
						A = [],
						B = "",
						C = "",
						D = !1,
						E = "",
						F = "";
					if (f.shadeMode && "yes" == f.shadeMode ? (H = f.shadeCount || 1, I = "", J = "", K = "", L = "", M = "", N = 0, newWidth = b.tParseInt(g / H), N = g % H, 0 != N && H++, shadeMarginLeft = "") : newWidth = g, !f.sliderActive && (f.sliderActive = "1"), c = b.tParseInt(f.sliderActive) - 1, ("" != f.displayMode || "" != f.css3Mode) && (B = " jspb", E = " " + f.css3Speed, F = " " + f.css3Speed, "june-box-fadein" == f.displayMode && (E += " june-box-fadein", F += " june-box-fadein"), f.css3Mode && f.css3Mode.indexOf("moveout") >= 0 && (E += " june-box-lx" + f.css3Mode.replace(/moveout/g, ""), F += " june-box-rx" + f.css3Mode.replace(/moveout/g, "")), f.css3Mode && f.css3Mode.indexOf("movein") >= 0 && (E += " june-box-rx" + f.css3Mode.replace(/movein/g, ""), F += " june-box-lx" + f.css3Mode.replace(/movein/g, ""))), f.contentType[0], O = !1, !f.thumbSet && (f.thumbSet = []), f.thumbSet) for (P = 0; P < f.thumbSet.length; P++) if (f.thumbSet[P] && "" != f.thumbSet[P]) {
						O = !0;
						break
					}
					for (O || (C = B, B = ""), Q = 0; Q < f.customContent.length; Q++) if (f.customContent[Q].indexOf("jspb") >= 0) {
						D = !0;
						break
					}
					if (D && (B = C = "", E = "", F = ""), "1" == m.substr(-1) && (m = m.substr(0, m.length - 1), p = "b", q = ", 'viewSize': ["), R = "", S = "", "1" != f.sliderActive && ("scrollx" == m ? R = "b" == p ? "left:" + c * g + "px;" : "left:-" + c * g + "px;" : "scrolly" == m && (R = "b" == p ? "top:" + c * h + "px;" : "top:-" + c * h + "px;")), "1" == n.substr(-1) && (n = n.substr(0, n.length - 1), r = "b"), s = '<div class="rel scroller' + B + '" style="overflow:hidden;width:' + g + "px;height:" + h + 'px;z-index:10;"><div class="ks-switchable-content c' + l + '" style="' + R + '">', e = "white" == f.kgdSwitch ? "http://img01.taobaocdn.com/imgextra/i1/39767794/T2.mrqXDpXXXXXXXXX-39767794.png" : "black" == f.kgdSwitch ? "http://img02.taobaocdn.com/imgextra/i2/39767794/T2yq_rXvVXXXXXXXXX-39767794.png" : "http://img03.taobaocdn.com/imgextra/i3/39767794/T23JTrXxFXXXXXXXXX-39767794.png", V = a.children(b.appChildCls + "[data-attachType='jfybOArrow']"), W = a.children(b.appChildCls + "[data-attachType='jfybTArrow']"), X = a.children(b.appChildCls + "[data-attachType='jfybPanel']"), T = b.getChildPos(X, V, !1), U = b.getChildPos(X, W, !1), posP = b.getChildPos(a, X, !0), Y = "", Z = "", _ = "", ab = "", bb = "", cb = "", db = "", checkUrl(k.oSrc) && (Z = 'src="' + k.oSrc + '" alt="上一页"'), checkUrl(k.tSrc) && (_ = 'src="' + k.tSrc + '" alt="下一页"'), checkUrl(k.oSrcHover) && (ab = 'src="' + k.oSrcHover + '" alt="上一页"'), checkUrl(k.tSrcHover) && (bb = 'src="' + k.tSrcHover + '" alt="下一页"'), cb = "<img " + Z + " />", db = "<img " + _ + " />", ("" != ab || "" != bb) && (Y = " junefade", cb = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + Z + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + ab + " />", db = '<img class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;" ' + _ + ' /><img class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;" ' + bb + " />"), u = " 'prevBtnCls': 'prev" + l + "', 'nextBtnCls': 'next" + l + "', ", v = '<span class="abs prev' + l + E + Y + '" style="' + w + "cursor:pointer;width:" + T.width + "px;height:" + T.height + "px;top:" + T.top + "px;left:" + T.left + 'px;z-index:99;">' + cb + '</span><span class="abs next' + l + F + Y + '" style="' + w + "cursor:pointer;width:" + U.width + "px;height:" + U.height + "px;top:" + U.top + "px;left:" + U.left + 'px;z-index:99;">' + db + "</span>", eb = "dianquanka control-group j-a", fb = "top:0;left", gb = "width", hb = "margin-right:" + o + "px;", ib = posP.width, "scrolly" == n && (fb = "left:0;top", gb = "height", ib = posP.height, hb = "margin-bottom:" + o + "px;"), $.each(f.contentType, function(a) {
						var B, C, D, E, F, G, H, I, J, K, L, M, N, O, j = X.children(b.appOtherCls + "[data-attachType='jfybSmallImg']:eq(" + a + ")"),
							k = f.sliderHref[a],
							l = j.attr("attachID") || "",
							r = " " + l,
							i = b.getChildPos(X, j, !1),
							s = " rel",
							u = "",
							v = "",
							w = "display:block;",
							x = fb + ":" + i[gb] * a + "px;";
						x = "top:0;left:0;", "b" == p && ("scrollx" == m ? (v = a * g, u = "top:0;left:-" + v + "px;", q += "-" + g + ",") : "scrolly" == m && (v = a * h, u = "left:0;top:-" + v + "px;", q += "-" + h + ","), s = " abs"), c == a && (w = "display:block;"), 0 == a && "1" != f.sliderActive && ("scrollx" == n ? S = "left:-" + c * (i.width + o) + "px;" : "scrolly" == n && (S = "top:-" + c * (i.height + o) + "px;")), d = a == c ? " dianquanka control-group j-a" : "", f.thumbSet[a] && "" != f.thumbSet[a] && (B = JSON.parse(f.thumbSet[a]), hrefx = "", ulStyle = "", thumbClass = "", characterBgSrc = "", characterBgColor = "", characterColor = "", characterFont = "", characterWeight = "", characterSize = "", characterDash = "text-decoration: none;", jspbHtml = "", jspbFade1 = "", jspbFade2 = "", characterContent = B.characterContent, characterTh = "", srcPosition = "top left", characterSpace = "", characterBgSrcHover = "", characterBgColorHover = "", characterColorHover = "", characterFontHover = "", characterWeightHover = "", autoid = "", thumbawidth = i.width, characterColorMsOver = B.characterColorMsOver || "", characterBgColorMsOver = B.characterBgColorMsOver || "", characterBgSrcMsOver = B.characterBgSrcMsOver || "", characterBorderWidth = B.characterBorderWidth || "", characterBorderColor = B.characterBorderColor || "", characterBorderStyle = B.characterBorderStyle || "", characterBorderWidthHover = B.characterBorderWidthHover || "", characterBorderColorHover = B.characterBorderColorHover || "", characterBorderStyleHover = B.characterBorderStyleHover || "", characterBorderWidthMsOver = B.characterBorderWidthMsOver || "", characterBorderColorMsOver = B.characterBorderColorMsOver || "", characterBorderStyleMsOver = B.characterBorderStyleMsOver || "", borderstr = "", borderstrHover = "", borderstrMsOver = "", msHoverClass = "", msHoverHtml = "", msHoverHtml1 = "", characterSizeHover = "", !B.characterMode && (B.characterMode = "text"), !B.characterItemContent && (B.characterItemContent = ""), "text" != B.characterMode && B.characterContent && "" != B.characterContent && (("price" == B.characterMode || "_price" == B.characterMode) && (B.characterItemContent = b.tParseFloat(B.characterItemContent).toFixed(b.tParseInt(B.characterFixed))), characterTh = ' data-h="' + B.characterItemContent + ";" + B.characterContent + '"', C = B.characterContent.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), C && C.length > 0 && (autoid = C[0].replace(/(\?|\&)id\=/g, "")), "" != autoid && ("title" == B.characterMode && (characterContent = "%7b$" + autoid + ".title%7d"), "price" == B.characterMode && (characterContent = "%7b$" + autoid + ".price." + b.tParseInt(B.characterFixed) + "f%7d"), "_price" == B.characterMode && (characterContent = "%7b$" + autoid + ".discountPrice." + b.tParseInt(B.characterFixed) + "f%7d"), "sale" == B.characterMode && (characterContent = "%7b$" + autoid + ".soldCount%7d"))), B.characterDash && "on" == B.characterDash && (characterDash = "text-decoration: line-through;"), B.characterSpace && "" != B.characterSpace && ("left" == B.characterAlign ? (characterSpace = "padding-left: " + b.tParseInt(B.characterSpace) + "px;", thumbawidth -= b.tParseInt(B.characterSpace), srcPosition = "top left") : "right" == B.characterAlign && (characterSpace = "padding-right: " + b.tParseInt(B.characterSpace) + "px;", thumbawidth -= b.tParseInt(B.characterSpace), srcPosition = "top right")), "click" != f.sliderSwitch || "" == characterColorMsOver && "" == characterBgColorMsOver && "" == characterBgSrcMsOver && "" == characterBorderWidthMsOver || (D = "", msHoverClass = " junefade", characterColorMsOver = RGBToHex(characterColorMsOver, ""), "" != characterColorMsOver && (D += "color:" + characterColorMsOver + ";"), characterBgColorMsOver = RGBToHex(characterBgColorMsOver, ""), "" != characterBgColorMsOver && (D += "background-color:" + characterBgColorMsOver + ";"), checkUrl(characterBgSrcMsOver) && (D += "background:url(" + characterBgSrcMsOver + ") " + srcPosition + " no-repeat;"), "" != characterBorderWidthMsOver && "" != b.tParseInt(characterBorderWidthMsOver) && 0 != b.tParseInt(characterBorderWidthMsOver) && (characterBorderColorMsOver = RGBToHex(characterBorderColorMsOver, ""), borderstrMsOver = "border:" + b.tParseInt(characterBorderWidthMsOver) + "px " + characterBorderStyleMsOver + " " + characterBorderColorMsOver + ";"), msHoverHtml = '<div class="abs junei" style="width:100%;height:100%;font:inherit;left:0;right:0;' + characterSpace + D + borderstrMsOver + '">' + characterContent + '</div><div class="abs juneo" style="width:100%;height:100%;font:inherit;">', msHoverHtml1 = "</div>"), "on" == B.characterHoverMode && (thumbClass = "jspb ", jspbFade1 = " " + B.characterHoverSpeed, E = 0, B.characterUnderLine && "on" == B.characterUnderLine && (E = B.characterUnderLineWeight, ulStyle = "border-bottom: " + E + "px " + B.characterUnderLineStyle + " " + RGBToHex(B.characterUnderLineColor)), B.css3Mode1 && "" != B.css3Mode1 && (jspbFade1 += " " + B.css3Mode1), B.css3ModeX1 && "" != B.css3ModeX1 && (jspbFade1 += " " + B.css3ModeX1), B.css3ModeY1 && "" != B.css3ModeY1 && (jspbFade1 += " " + B.css3ModeY1), B.characterBgColorHover = RGBToHex(B.characterBgColorHover, ""), "" != B.characterBgColorHover && (characterBgColorHover = "background-color:" + B.characterBgColorHover + ";"), B.characterColorHover = RGBToHex(B.characterColorHover, ""), "" != B.characterColorHover && (characterColorHover = "color:" + B.characterColorHover + ";"), "" != B.characterFontHover && (characterFontHover = "font-family:" + B.characterFontHover + ";"), "" != B.characterWeightHover && (characterWeightHover = "font-weight:" + B.characterWeightHover + ";"), "" != B.characterSizeHover && (characterSizeHover = "font-size:" + b.tParseInt(B.characterSizeHover) + "px;"), checkUrl(B.characterBgSrcHover) && (characterBgSrcHover = "background:url(" + B.characterBgSrcHover + ") " + srcPosition + " no-repeat;"), "" != characterBorderWidthHover && "" != b.tParseInt(characterBorderWidthHover) && 0 != b.tParseInt(characterBorderWidthHover) && (characterBorderColorHover = RGBToHex(characterBorderColorHover, ""), borderstrHover = "border:" + b.tParseInt(characterBorderWidthHover) + "px " + characterBorderStyleHover + " " + characterBorderColorHover + ";"), jspbHtml = '<a class="abs' + jspbFade1 + '" href="' + k + '" target="' + f.hrefMode + '" style="top:0;left:0;width:' + thumbawidth + "px;height:" + (i.height - E) + "px;line-height:" + i.height + "px;" + characterSpace + characterBgSrcHover + characterBgColorHover + characterColorHover + characterFontHover + characterWeightHover + characterSizeHover + borderstrHover + characterDash + ulStyle + '">' + characterContent + "</a>"), B.characterBgColor = RGBToHex(B.characterBgColor, ""), "" != B.characterBgColor && (characterBgColor = "background-color:" + B.characterBgColor + ";"), B.characterColor = RGBToHex(B.characterColor, ""), "" != B.characterColor && (characterColor = "color:" + B.characterColor + ";"), "" != B.characterFont && (characterFont = "font-family:" + B.characterFont + ";"), "" != B.characterWeight && (characterWeight = "font-weight:" + B.characterWeight + ";"), "" != B.characterSize && (characterSize = "font-size:" + b.tParseInt(B.characterSize) + "px;"), "" != characterBorderWidth && "" != b.tParseInt(characterBorderWidth) && 0 != b.tParseInt(characterBorderWidth) && (characterBorderColor = RGBToHex(characterBorderColor, ""), borderstr = "border:" + b.tParseInt(characterBorderWidth) + "px " + characterBorderStyle + " " + characterBorderColor + ";"), "" != k && (hrefx = ' href="' + k + '"'), checkUrl(B.characterBgSrc) && (characterBgSrc = "background:url(" + B.characterBgSrc + ") " + srcPosition + " no-repeat;"), F = "", G = " split chn-link-dianquanka a-2", "" == jspbHtml && (jspbHtml = '<a class="abs"' + hrefx + ' style="top:0;left:0;width:' + thumbawidth + "px;height:" + i.height + "px;line-height:" + i.height + "px;" + characterSpace + characterBgSrc + characterBgColor + characterColor + characterFont + characterWeight + characterSize + borderstr + characterDash + 'letter-spacing:0px;" target="' + f.hrefMode + '">' + characterContent + "</a>"), "click" == f.sliderSwitch && (hrefx = ""), z += '<li class="thumbsmall' + d + r + '"' + characterTh + ' data-i="' + l + '" data-t="' + B.characterMode + '" style="' + x + hb + "text-align:" + B.characterAlign + ";width:" + i.width + "px;height:" + i.height + 'px;cursor:pointer;"><div class="rel" style="' + x + "width:" + i.width + "px;height:" + i.height + 'px;"><div class="jspb abs' + F + '" style="width:100%;height:100%;">' + jspbHtml + '</div><a class="abs' + G + '"' + hrefx + ' style="width:' + thumbawidth + "px;height:" + i.height + "px;line-height:" + i.height + "px;" + characterSpace + characterBgSrc + characterBgColor + characterColor + characterFont + characterWeight + characterSize + borderstr + characterDash + 'letter-spacing:0px;" target="' + f.hrefMode + '">' + msHoverHtml + characterContent + msHoverHtml1 + "</a></div></li>"), "imgContent" == f.contentType[a] ? (H = f.smallImgSrcT[a], I = f.smallHoverSrcT[a], J = !1, K = "", L = "", "" == I && (I = H, J = !0), "" == I && (I = f.sliderSrc[a], J = !1), "transparent" != f.kgdSwitch && ("" == f.smallHoverSrcT[a] || f.smallHoverSrcT != f.smallImgSrcT) && (J = !0), "" == H && (H = f.sliderSrc[a]), A.push(I), checkUrl(I) && (K = 'src="' + I + '"'), "" != f.sliderSrc[a] && (L = "background:url(" + f.sliderSrc[a] + ") no-repeat scroll center center transparent;"), t += '<div class="elepic" style="height:' + h + "px;width:" + newWidth + "px;" + w + 'float:left;overflow:hidden;"><div class="elexb' + s + '" style="height:' + h + "px;width:" + g + "px;" + u + L + '"><a class="J_TWidget" href="' + k + '" target="' + f.hrefMode + '" style="height:' + h + "px;width:" + g + 'px;display:block;" data-widget-config="{\'png\':true,\'png_bg\':true}" data-widget-type="Compatible"></a></div></div>', y = '<a href="' + k + '" target="' + f.hrefMode + '" class="abs" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img ' + K + ' style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', J ? (M = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", N = "background:#000000;", "white" == f.kgdSwitch && (N = "background:#ffffff;"), "transparent" == f.kgdSwitch && (N = "", M = ""), O = '<a href="' + k + '" target="' + f.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="' + N + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="' + M + "width:" + i.width + "px;height:" + i.height + 'px;"></a>', "click" == f.sliderSwitch && (O = '<a class="abs split chn-link-dianquanka a-2" style="' + N + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="' + M + "width:" + i.width + "px;height:" + i.height + 'px;"></a>'), f.thumbSet[a] && "" != f.thumbSet[a] || (z += '<li class="' + d + r + '" data-i="' + l + '" style="cursor:pointer;width:' + i.width + "px;height:" + i.height + "px;" + hb + '"><div class="rel" style="' + x + "width:" + i.width + "px;height:" + i.height + 'px;">' + y + O + "</div></li>")) : (O = '<a href="' + k + '" target="' + f.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', "click" == f.sliderSwitch && (O = '<a class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>'), f.thumbSet[a] && "" != f.thumbSet[a] || (z += '<li class="' + d + r + '" data-i="' + l + '" style="cursor:pointer;width:' + i.width + "px;height:" + i.height + "px;" + hb + '"><div class="rel" style="' + x + "width:" + i.width + "px;height:" + i.height + 'px;">' + y + O + "</div></li>"))) : (H = f.smallImgSrc[a], I = f.smallHoverSrc[a], J = !1, K = "", "" == I && (I = H, J = !0), "" == I && (I = f.sliderSrc[a], J = !1), "transparent" != f.kgdSwitch && ("" == f.smallHoverSrc[a] || f.smallHoverSrc != f.smallImgSrc) && (J = !0), "" == H && (H = f.sliderSrc[a]), A.push(I), checkUrl(I) && (K = 'src="' + I + '"'), t += '<div class="elepic" style="height:' + h + "px;width:" + newWidth + "px;" + w + 'float:left;overflow:hidden;"><div class="elexb' + s + '" style="height:' + h + "px;width:" + g + "px;" + u + '">' + f.customContent[a] + "</div></div>", y = '<a href="' + k + '" target="' + f.hrefMode + '" class="abs" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img ' + K + ' style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', J ? (M = "opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);", N = "background:#000000;", "white" == f.kgdSwitch && (N = "background:#ffffff;"), "transparent" == f.kgdSwitch && (N = "", M = ""), O = '<a href="' + k + '" target="' + f.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="' + N + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="' + M + "width:" + i.width + "px;height:" + i.height + 'px;"></a>', "click" == f.sliderSwitch && (O = '<a class="abs split chn-link-dianquanka a-2" style="' + N + "top:0px;left:0px;width:" + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="' + M + "width:" + i.width + "px;height:" + i.height + 'px;"></a>'), f.thumbSet[a] && "" != f.thumbSet[a] || (z += '<li class=" ' + d + r + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;cursor:pointer;" + hb + '"><div class="rel" style="' + x + "width:" + i.width + "px;height:" + i.height + 'px;">' + y + O + "</div></li>")) : (O = '<a href="' + k + '" target="' + f.hrefMode + '" class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>', "click" == f.sliderSwitch && (O = '<a class="abs split chn-link-dianquanka a-2" style="top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;"><img src="' + H + '" style="width:' + i.width + "px;height:" + i.height + 'px;"></a>'), f.thumbSet[a] && "" != f.thumbSet[a] || (z += '<li class=" ' + d + r + '" data-i="' + l + '" style="width:' + i.width + "px;height:" + i.height + "px;cursor:pointer;" + hb + '"><div class="rel" style="' + x + "width:" + i.width + "px;height:" + i.height + 'px;">' + y + O + "</div></li>")))
					}), f.shadeMode && "yes" == f.shadeMode || (t += "</div></div>"), "b" == p && (q = q.substr(0, q.length - 1) + "]"), jb = "", f.shadeMode && "yes" == f.shadeMode) {
						for (P = 0; H > P; P++) G = newWidth, P == H - 1 && 0 != N && (G = N, jb = "jfybyys "), 0 == P ? (L = ' data-appid="' + f.appID + '" data-s="' + p + '" data-hsrc="' + A.join(",") + '" data-sm="' + n + ";" + f.smallImgCount + ";" + f.smallSliderSpace + '"', M = "top:" + i + "px;left:" + j + "px;") : (L = "", M = ""), I += '<div class="jfyb ' + jb + "abs J_TWidget" + C + " " + f.appID + '"' + L + ' style="height:' + h + "px;width:" + g + "px;" + M + 'z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c_' + P + "_" + l + "','navCls':'n" + l + "','effect':'" + m + "','steps':1,'circular':true,'easing':'" + f.sliderEffect + "','duration':'" + (.5 + .02 * P) + "','autoplay':" + f.sliderAuto + ",'interval':" + f.sliderTime + ",'activeTriggerCls':'" + eb + "', 'triggerType': '" + f.sliderSwitch + "'" + q + ", 'activeIndex': " + c + '}">', s = '<div class="rel scroller' + B + '" style="overflow:hidden;width:' + G + "px;height:" + h + 'px;z-index:10;float:left;"><div class="ks-switchable-content c_' + P + "_" + l + '" style="' + R + '">', div1 = t.replace(/\<div class\=\"elexb([^\>]*)\>/g, function(a) {
							var c = a;
							return c = c.replace(/(width\:[\d\.]*px\;)(left\:\-?([^\;]*)\;)?/g, function(a, c, d, e) {
								var f = "";
								return "scrollx" == m && e && "" != e && (f = b.tParseInt(e)), c + "left:-" + (newWidth * P + f) + "px;"
							})
						}), P == H - 1 && 0 != N && (div1 = div1.replace(/\<div class\=\"elepic([^\>]*)\>/g, function(a) {
							var b = a;
							return b = b.replace(/width\:([\d\.]*)px\;/g, function(a, b) {
								return b = b.replace(newWidth, G), "width:" + b + "px;"
							})
						})), div1 += "</div></div>", J += s + div1, K += "</div>";
						return I + J + '<div class="fyp abs J_TWidget" style="height:' + posP.height + "px;width:" + posP.width + "px;top:" + posP.top + "px;left:" + posP.left + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'n' + l + "','navCls':'sn" + l + "','effect':'" + n + "','steps':" + f.smallImgCount + ",'circular':true,'easing':'easeBoth','duration':'0.5','autoplay':false," + u + "'triggerType': 'mouse', 'activeIndex': " + c + '}">' + v + '<div class="sc' + l + '" style="overflow:hidden;width:' + posP.width + "px;height:" + posP.height + 'px;z-index:10;"><div class="ks-switchable-content jfsb n' + l + '" style="' + x + "z-index:12;background:none;" + S + '">' + z + '</div></div><ul class="ks-switchable-nav sn' + l + '" style="display:none;"></ul></div>' + K
					}
					return '<div class="jfyb abs J_TWidget' + C + " " + f.appID + '" data-appid="' + f.appID + '" data-s="' + p + '" data-hsrc="' + A.join(",") + '" data-sm="' + n + ";" + f.smallImgCount + ";" + f.smallSliderSpace + '" style="height:' + h + "px;width:" + g + "px;top:" + i + "px;left:" + j + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'c' + l + "','navCls':'n" + l + "','effect':'" + m + "','steps':1,'circular':true,'easing':'" + f.sliderEffect + "','duration':'0.5','autoplay':" + f.sliderAuto + ",'interval':" + f.sliderTime + ",'activeTriggerCls':'" + eb + "', 'triggerType': '" + f.sliderSwitch + "'" + q + ", 'activeIndex': " + c + '}">' + s + t + '<div class="fyp abs J_TWidget" style="height:' + posP.height + "px;width:" + posP.width + "px;top:" + posP.top + "px;left:" + posP.left + 'px;z-index:10;" data-widget-type="Carousel" data-widget-config="{\'contentCls\':\'n' + l + "','navCls':'sn" + l + "','effect':'" + n + "','steps':" + f.smallImgCount + ",'circular':true,'easing':'easeBoth','duration':'0.5','autoplay':false," + u + "'triggerType': 'mouse', 'activeIndex': " + c + '}">' + v + '<div class="sc' + l + '" style="overflow:hidden;width:' + posP.width + "px;height:" + posP.height + 'px;z-index:10;"><div class="ks-switchable-content jfsb n' + l + '" style="' + x + "z-index:12;background:none;" + S + '">' + z + '</div></div><ul class="ks-switchable-nav sn' + l + '" style="display:none;"></ul></div></div>'
				},
				codeImport: function(a, c, d, e) {
					var g, h, i, j, p, q, r, s, t, u, w, x, y, z, A, B, C, D, E, F, k = JSON.parse(a.attr("data-config")),
						l = a.attr("data-dblType"),
						m = {},
						n = (a.children(b.appChildCls + "[data-attachType='jfybOArrow']"), a.children(b.appChildCls + "[data-attachType='jfybTArrow']"), a.children(b.appChildCls + "[data-attachType='jfybPanel']")),
						o = d.attr("data-hsrc"),
						f = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
						};
					if (o = o ? o.split(",") : [], p = d.attr("data-s") || "a", q = d.attr("data-sm") || "scrollx;1;0", r = q.split(";"), m.smallSliderMode = r[0], m.smallImgCount = r[1], m.smallSliderSpace = r[2], m.childConfig = [], m.childConfig[0] = {}, m.sliderSrc = [], m.sliderHref = [], m.customContent = [], m.contentType = [], m.smallImgSrc = [], m.smallHoverSrc = [], m.smallImgSrcT = [], m.smallHoverSrcT = [], m.thumbSet = [], m.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jfyb").length > 0) {
						for (m.shadeCount = 1; d.children(".jfyb").length > 0;) d = d.children(".jfyb"), f = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
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
						}, d.hasClass("jfybyys") || m.shadeCount++;
						m.shadeMode = "yes"
					}
					s = JSON.parse(d.children("div.J_TWidget").attr("data-widget-config").replace(/'/g, '"')), m.sliderActive = "1", t = require("scripts/other"), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function(a) {
						var e, f, g, h, i, j, c = $(this);
						c.children("div").length > 0 && (c = c.children("div")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), i = d.children("div.J_TWidget").find("div.ks-switchable-content").children("li:eq(" + a + ")"), o[a] || (o[a] = ""), e.length > 0 ? (m.contentType.push("imgContent"), m.sliderSrc.push(f), m.sliderHref.push(g), m.customContent.push(""), i.hasClass("thumbsmall") ? (m.smallImgSrc.push(""), m.smallHoverSrc.push(""), m.smallImgSrcT.push(""), m.smallHoverSrcT.push(""), m.thumbSet.push(t.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), j == f && (j = ""), m.smallImgSrcT.push(j)) : (j = i.find("img:eq(0)").attr("src"), j == f && (j = ""), m.smallImgSrcT.push(j)), m.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (o[a] == f || o[a] == j) && (o[a] = ""), m.smallHoverSrcT.push(o[a]), m.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), m.thumbSet.push(""))) : (m.contentType.push("customContent"), m.sliderSrc.push(""), m.customContent.push(h), i.find("a").length > 0 ? (g = i.find("a").attr("href") || "", m.sliderHref.push(g)) : m.sliderHref.push(""), i.hasClass("thumbsmall") ? (m.smallImgSrc.push(""), m.smallHoverSrc.push(""), m.smallImgSrcT.push(""), m.smallHoverSrcT.push(""), m.thumbSet.push(t.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), m.smallImgSrc.push(j)) : (j = i.find("img:eq(0)").attr("src"), m.smallImgSrc.push(j)), o[a] == j && (o[a] = ""), m.smallImgSrcT.push(""), m.smallHoverSrc.push(o[a]), m.smallHoverSrcT.push(""), m.thumbSet.push("")))
					}), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (k.sliderSrc = [], k.sliderHref = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.customContent = [], k.contentType = []), f.effect && (m.sliderMode = f.effect), "true" != f.autoplay && (m.sliderAuto = f.autoplay), f.easing && (m.sliderEffect = f.easing), f.interval && (m.sliderTime = f.interval), f.triggerType && (m.sliderSwitch = f.triggerType), f.activeIndex && (m.sliderActive = b.tParseInt(f.activeIndex) + 1), m.hrefMode = d.find("a.J_TWidget").attr("target") || "_blank", i = s.prevBtnCls, j = s.nextBtnCls, m.childConfig[0].oSrc = d.find("." + i).children("img:eq(0)").attr("src"), m.childConfig[0].tSrc = d.find("." + j).children("img:eq(0)").attr("src"), d.find("." + i).children("img").length > 1 && (m.childConfig[0].oSrcHover = d.find("." + i).children("img:eq(1)").attr("src")), d.find("." + j).children("img").length > 1 && (m.childConfig[0].tSrcHover = d.find("." + j).children("img:eq(1)").attr("src")), g = b.setChildPos(d.children("div.J_TWidget"), d.find("." + i), !1), h = b.setChildPos(d.children("div.J_TWidget"), d.find("." + j), !1), u = d.find("." + i), m.displayMode = u.hasClass("june-box-fadein") ? "june-box-fadein" : "";
					try {
						m.css3Speed = u.attr("class").match(/trans(\w+)s/g).join(""), u.attr("class").indexOf("june-box-lx") >= 0 && (m.css3Mode = $.trim("moveout" + u.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), u.attr("class").indexOf("june-box-rx") >= 0 && (m.css3Mode = $.trim("movein" + u.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
					} catch (v) {}
					w = "display:inline-block;", x = "inline-block", y = "margin-right:" + m.smallSliderSpace + "px;", "scrolly" == m.smallSliderMode && (w = "", x = "block", y = "margin-bottom:" + m.smallSliderSpace + "px;"), n.children("div.J_TWidget").children(b.appOtherCls + "[data-attachType='jfybSmallImg']").each(function() {
						b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
					}), n.children("div.J_TWidget").children(b.appOtherCls + "[data-attachType='jfybSmallImg']").remove(), D = !0, d.children("div.J_TWidget").find("div.ks-switchable-content").children("li").each(function(a) {
						var f, g, h, e = m.contentType[a],
							d = "imgContent" == e ? m.smallImgSrcT[a] : m.smallImgSrc[a];
						"" == d && (d = m.sliderSrc[a]), $(this).attr("data-i") ? m.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(m.childConfig[0]), f = "display:inline-block;", "scrolly" == m.smallSliderMode && (f = "display:block;"), "" == m.thumbSet[a] ? $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="' + w + y + "width:" + $(this).width() + "px;height:" + $(this).height() + "px;" + f + '"><img width="100%" height="100%" src="' + d + '"></div>').appendTo(n).attr("appID", m.appID).attr("attachID", m.childConfig[0].attachID) : (g = JSON.parse(m.thumbSet[a] || "{}"), $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="vertical-align:top;' + w + y + "width:" + $(this).width() + "px;height:" + $(this).height() + "px;" + f + '"></div>').appendTo(n).attr("appID", m.appID).attr("attachID", m.childConfig[0].attachID), h = n.children(b.appOtherCls + "[attachID='" + m.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(g, h), h.removeAttr("data-config")), 0 == a && (z = $(this).width(), B = $(this).height()), A = $(this).width(), C = $(this).height(), (z != A || B != C) && (D = !1)
					}), D && (m.sWidth = z, m.sHeight = B), b.setAttachID(m.childConfig[0]), n.tResize().css({
						width: d.children("div.J_TWidget").width(),
						height: d.children("div.J_TWidget").height(),
						left: b.tParseInt(d.children("div.J_TWidget").css("left")),
						top: b.tParseInt(d.children("div.J_TWidget").css("top"))
					}).attr("appID", m.appID).attr("attachID", m.childConfig[0].attachID), E = RGBToHex(d.children("div.J_TWidget").find("div.ks-switchable-content").children("li").children("div").children("a:eq(1)").css("background-color"), ""), kdswitch = "#ffffff" == E.toLowerCase() ? m.kgdSwitch = "white" : "#000000" == E.toLowerCase() ? m.kgdSwitch = "black" : void 0, kdswitch || (m.kgdSwitch = "transparent"), "b" == p && (m.sliderMode += "1"), F = $.extend(k, m), a.attr("data-config", JSON.stringify(F)), require("scripts/tAjax"), "" != m.sliderSrc[0] && checkUrl(m.sliderSrc[0]) ? a.css({
						backgroundImage: "url(" + m.sliderSrc[0] + ")"
					}) : a.css({
						backgroundImage: ""
					}), a.children(b.appChildCls + "[data-attachType='jfybOArrow']").tResize({
						tSwitch: !1
					}).css({
						backgroundImage: "url(" + m.childConfig[0].oSrc + ")",
						width: 0 == g.width ? 48 : g.width,
						height: 0 == g.height ? 48 : g.height,
						top: g.top,
						left: g.left
					}).show(), a.children(b.appChildCls + "[data-attachType='jfybTArrow']").tResize({
						tSwitch: !1
					}).css({
						backgroundImage: "url(" + m.childConfig[0].tSrc + ")",
						width: 0 == h.width ? 48 : h.width,
						height: 0 == h.height ? 48 : h.height,
						top: h.top,
						left: h.left
					}).show(), a.children(b.appOtherCls).html(""), "customContent" == m.contentType[0] && (a.css({
						backgroundImage: ""
					}), a.children(b.appOtherCls).html(m.customContent[0])), a.children(b.appChildCls + "[data-attachType='jfybOArrow']").attr("appID", m.appID), a.children(b.appChildCls + "[data-attachType='jfybTArrow']").attr("appID", m.appID), a.attr("appID", m.appID), e(l, m.appID)
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
					var f, j, g = JSON.parse(a.attr("data-config")),
						h = a.attr("data-dblType"),
						i = {};
					i.childConfig = [], i.childConfig[0] = {}, i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), i.tipText = "", d.attr("title") && "" != d.attr("title") && (i.tipText = d.attr("title")), i.attentionSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, "") || "", i.bgColor = RGBToHex(d.css("background-color"), ""), i.imgBgp = d.css("background-position") || "50% 50%", i.attentionID = d.attr("data-brandid") || "", i.numberControl = "", d.next("em").attr("data-brandid") == i.attentionID && (i.numberControl = "numberShow", i.childConfig[0].characterSize = d.next("em").css("font-size").replace(/px/g, ""), i.childConfig[0].characterFont = d.next("em").css("font-family").replace(/'/g, ""), i.childConfig[0].characterColor = RGBToHex(d.next("em").css("color")), i.childConfig[0].characterWeight = d.next("em").css("font-weight"), "400" == i.childConfig[0].characterWeight && (i.childConfig[0].characterWeight = "normal"), i.childConfig[0].characterBgColor = RGBToHex(d.next("em").css("background-color"), ""), i.childConfig[0].characterStyle = d.next("em").css("font-style") || "normal", f = b.getChildPos(d, d.next("em"))), j = $.extend(!0, g, i), a.attr("data-config", JSON.stringify(j)), checkUrl(i.attentionSrc) ? a.css({
						backgroundImage: "url(" + i.attentionSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: i.imgBgp
					}), submitColor(a, RGBToHex(i.bgColor, "")), "numberShow" == i.numberControl ? a.children(b.appChildCls).css({
						fontWeight: i.childConfig[0].characterWeight,
						fontSize: i.childConfig[0].characterSize + "px",
						fontFamily: i.childConfig[0].characterFont,
						color: i.childConfig[0].characterColor,
						backgroundColor: RGBToHex(i.childConfig[0].characterBgColor, ""),
						fontStyle: i.childConfig[0].characterStyle || "normal",
						top: f.top,
						left: f.left,
						width: f.width,
						height: f.height
					}).show() : a.children(b.appChildCls).hide(), a.attr("appID", i.appID), e(h, i.appID)
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
				href: "http://detail.tmall.com/item.htm?id=22410268535"
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
					}), submitColor(c, RGBToHex(a.bgColor, ""))), "" != e ? (d = require("scripts/tAjax"), d.ajaxJson("gsi.php", {
						url: e,
						random: 1e4 * Math.random()
					}, function(b) {
						a.shopId = b && "yes" == b[0] ? b[1] : "%7b$shop.id%7d", c.html(text).tResize(), c.attr("data-config", JSON.stringify(a))
					})) : (c.html(text).tResize(), c.attr("data-config", JSON.stringify(a)))
				},
				codeExport: function(a) {
					var c, d = JSON.parse(a.attr("data-config")),
						e = a.width(),
						f = a.height(),
						g = b.tParseInt(a.css("top")),
						h = b.tParseInt(a.css("left")),
						i = "",
						j = "",
						k = d.imgBgp || "50% 50%",
						l = "",
						m = "",
						n = "",
						o = d.shopHref || "",
						p = d.tipText || "",
						q = "",
						r = "",
						s = "",
						t = "",
						u = "",
						v = "",
						w = "";
					return "" != p && (q = ' title= "' + p + '"'), "text" == d.scContentType ? (d.characterColor = RGBToHex(d.characterColor, ""), "" != d.characterColor && (r = "color:" + d.characterColor + ";"), d.characterBgColor = RGBToHex(d.characterBgColor, ""), "" != d.characterBgColor && (v = "background-color:" + d.characterBgColor + ";"), "" != d.characterFont && (s = "font-family:" + d.characterFont + ";"), "" != d.characterWeight && (t = "font-weight:" + d.characterWeight + ";"), "" != d.characterSize && (u = "font-size:" + b.tParseInt(d.characterSize) + "px;"), "italic" == d.characterStyle && (w = "font-style:" + d.characterStyle + ";"), l = d.characterContent) : (l = "", d.bgColor = RGBToHex(d.bgColor, ""), "" != d.bgColor && (j = "background-color:" + d.bgColor + ";"), checkUrl(d.pSrc) && (i = "background:url(" + d.pSrc + ") " + k + " no-repeat;")), "1" == d.scType ? (c = d.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), c && c.length > 0 && (m = c[0].replace(/(\?|\&)id\=/g, "")), n = "http://favorite.taobao.com/popup/add_collection.htm?id=" + m + "&itemtype=1&scjjc=1") : "" == o ? (m = "%7b$shop.id%7d", n = "http://favorite.taobao.com/popup/add_collection_2.htm?id=" + m + "&itemtype=0") : (m = "%7b$shop.id%7d", n = "http://favorite.taobao.com/popup/add_collection_2.htm?id=" + (d.shopId || m) + "&itemtype=0"), '<div class="jscb abs ' + d.appID + '" data-appid="' + d.appID + '"' + q + ' style="width:' + e + "px;height:" + f + "px;top:" + g + "px;left:" + h + "px;z-index:10;" + i + j + '"><a href="' + n + '" target="_blank" style="display:block;width:' + e + "px;height:" + f + "px;top:" + g + "px;left:" + h + "px;z-index:10;" + r + s + t + u + v + w + '">' + l + "</a></div>"
				},
				codeImport: function(a, c, d, e) {
					var f, g, h, m, i = JSON.parse(a.attr("data-config")),
						j = a.attr("data-dblType"),
						k = {},
						l = "";
					k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), k.tipText = "", d.attr("title") && "" != d.attr("title") && (k.tipText = d.attr("title")), d.children("a").length > 0 && "" != d.children("a").html() ? (k.scContentType = "text", k.characterSize = d.children("a").css("font-size").replace(/px/g, ""), k.characterFont = d.children("a").css("font-family").replace(/'/g, ""), k.characterColor = RGBToHex(d.children("a").css("color")), k.characterBgColor = RGBToHex(d.children("a").css("background-color"), ""), k.characterWeight = d.children("a").css("font-weight"), "400" == k.characterWeight && (k.characterWeight = "normal"), k.characterStyle = d.children("a").css("font-style") || "normal", k.characterContent = d.children("a").html(), h = i.characterContent) : (k.scContentType = "img", k.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.bgColor = RGBToHex(d.css("background-color"), ""), k.imgBgp = d.css("background-position") || "50% 50%", h = ""), k.shopId = "", f = d.children("a").attr("href"), g = f.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), g && g.length > 0 && (l = g[0].replace(/\?id\=/g, "")), f.indexOf("itemtype=0") >= 0 ? (k.href = "", "" != l && (k.shopHref = "http://shop" + l + ".taobao.com", k.shopId = l), k.scType = "2") : (k.href = "http://detail.tmall.com/item.htm?id=" + l, k.shopHref = "", k.scType = "1"), m = $.extend(!0, i, k), a.attr("data-config", JSON.stringify(m)), "img" == i.scContentType ? (checkUrl(k.pSrc) ? a.css({
						backgroundImage: "url(" + k.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: k.imgBgp
					}), submitColor(a, RGBToHex(k.bgColor, ""))) : (a.css({
						backgroundImage: "none",
						fontSize: b.tParseInt(m.characterSize),
						fontWeight: m.characterWeight,
						fontFamily: m.characterFont,
						color: m.characterColor,
						backgroundColor: RGBToHex(m.characterBgColor, ""),
						fontStyle: m.characterStyle || "normal"
					}), a.addClass("j-app-qswz")), a.html(h).tResize(), a.attr("appID", k.appID), e(j, k.appID)
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
				href: "http://detail.tmall.com/item.htm?id=22410268535",
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
				href: "http://detail.tmall.com/item.htm?id=22410268535"
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
					var h, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {};
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.tipText = "", c.attr("title") && "" != c.attr("title") && (g.tipText = c.attr("title")), g.ewmSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.ewmUrl = c.attr("data-url"), g.ewmSize = c.width(), g.ewmType = c.attr("data-urlType") || "1", g.ewmSrc.indexOf("type=cs") >= 0 && (g.ewmShop = "2"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), a.css({
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
					}).html(d + a.characterContent + "</div>"), "text" == a.characterMode && c.addClass("j-app-qswz"), "img" == a.characterMode && c.children(b.appOtherCls).html(d + '<img src="' + a.characterContent + '" /></div>'), "custom" == a.characterMode && c.children(b.appOtherCls).html(d + a.customContent + "</div>"), c.children(b.appOtherCls).children("div").css({
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
					var z, A, B, C, D, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = c.characterContent,
						i = "white-space:nowrap;",
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
						w = "",
						x = !1,
						y = "";
					return "img" == c.characterMode && (h = '<img src="' + c.characterContent + '" />'), "custom" == c.characterMode && (h = c.customContent, i = ""), c.characterLineThrough && "" != c.characterLineThrough && (n = "text-decoration:" + c.characterLineThrough), c.characterLineUnder && "" != c.characterLineUnder ? "" == n ? n = "text-decoration:" + c.characterLineUnder + ";" : n += " " + c.characterLineUnder + ";" : n += ";", z = a.children(b.appOtherCls).children("div"), A = z.width(), B = z.height(), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (o = "color:" + c.characterColor + ";"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (s = "background-color:" + c.characterBgColor + ";"), "" != c.characterFont && (p = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (q = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && (r = "font-size:" + b.tParseInt(c.characterSize) + "px;"), "italic" == c.characterStyle && (t = "font-style:" + c.characterStyle + ";"), j = checkUrl(c.href) && "custom" != c.characterMode ? '<a style="' + o + p + q + r + s + t + n + '" href="' + c.href + '" target="' + c.hrefMode + '">' + h + "</a>" : h, C = "rel", ("up" == c.characterDirection || "down" == c.characterDirection) && (C = "abs"), "alternate" != c.characterScrollMode && ("2" == c.characterDirectionPosition ? ("left" == c.characterDirection && (u = "", v = "top:-" + B + "px;left:" + A + "px;", x = !0), "right" == c.characterDirection && (u = "left:" + A + "px;", v = "top:-" + B + "px;", w = "top:-" + 2 * B + "px;right:" + A + "px;"), "down" == c.characterDirection && (u = "top: " + e + "px;", v = "top:-" + (B - e) + "px;", w = "top:-" + (2 * B - e) + "px;"), "up" == c.characterDirection && (u = "top: " + e + "px;", v = "top:-" + (B - e) + "px;", w = "top:-" + (2 * B - e) + "px;")) : ("left" == c.characterDirection && (u = "right:" + A + "px;", v = "top:-" + B + "px;", w = "top:-" + 2 * B + "px;left:" + A + "px;"), "right" == c.characterDirection && (u = "", v = "top:-" + B + "px;right:" + A + "px;", x = !0), "up" == c.characterDirection && (v = "top: 0;", w = "top: " + B + "px;"), "down" == c.characterDirection && (u = "", v = "top:-" + B + "px;"))), k = '<div class="rel scrollfm" data-dire="' + c.characterDirectionPosition + '" style="width:' + A + "px;height:" + B + "px;line-height:" + B + "px;" + i + "word-break:break-all;" + u + o + p + q + r + s + t + n + '">' + j + "</div>", "scroll" == c.characterScrollMode && (l = '<div class="' + C + ' scrollfm1" style="width:' + A + "px;height:" + B + "px;line-height:" + B + "px;" + i + "word-break:break-all;" + v + o + p + q + r + s + t + n + '">' + j + "</div>", x || (m = '<div class="' + C + ' scrollfm2" style="width:' + A + "px;height:" + B + "px;line-height:" + B + "px;" + i + "word-break:break-all;" + w + o + p + q + r + s + t + n + '">' + j + "</div>")), "up" != c.characterDirection && "down" != c.characterDirection || "alternate" != c.characterScrollMode ? y = '<div class="jtsb abs ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + 'px;z-index:10;overflow:hidden;" data-mode="' + c.characterMode + '"><marquee style="width:100%;height:100%;" scrollamount="' + c.characterSpeed + '" scrolldelay="' + c.characterEffect + '" direction="' + c.characterDirection + '" behavior="' + c.characterScrollMode + '"><div class="rel scrollfm" style="width:' + A + "px;height:" + B + "px;line-height:" + B + 'px;">' + k + l + m + "</div></marquee></div>" : (D = "", c.characterSpeed > 3 && 3 == c.characterSpeed, "down" == c.characterDirection && (D = ",'switchTo':1"), y = '<div class="jtsb abs ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + 'px;z-index:10;overflow:visible;" data-mode="' + c.characterMode + '"><div class="udma J_TWidget" data-sDr="' + c.characterDirection + ";" + c.characterSpeed + "\" data-widget-config=\"{'effect':'scrolly','easing':'easeNone','contentCls':'content','navCls':'nav','circular':false,'duration':" + c.characterSpeed + ",'interval':" + c.characterSpeed + ",'pauseOnHover':false,'autoplay': true,'viewSize': [" + (e - B) + "]" + D + '}" data-widget-type="Slide" style="position:relative;width:' + d + "px;height:" + e + 'px;"><ul class="content" style=""><li style="width:' + d + "px;height:" + (e - B) + 'px;display:block;">&nbsp;</li><li class="udcon" style="width:' + d + 'px;display:block;">' + k + '</li></ul><div class="nav" style="display:none;">&nbsp;</div></div></div>'), y
				},
				codeImport: function(a, c, d, e) {
					var j, k, l, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.children("marquee"),
						i = {};
					i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children("marquee").children("div.scrollfm").length > 0 && (h = d.children("marquee").children("div.scrollfm"), i.characterDirectionPosition = h.attr("data-dire") || "1"), d.children(".udma").length > 0 ? (h = d.find(".udcon").children("div.scrollfm"), i.characterDirectionPosition = h.attr("data-dire") || "1", j = d.children(".udma").attr("data-sDr") || "up;3", k = j.split(";"), i.characterSpeed = k[1], i.characterScrollMode = "alternate", i.characterDirection = k[0], i.characterEffect = "0") : (i.characterSpeed = d.children("marquee").attr("scrollamount"), i.characterEffect = d.children("marquee").attr("scrolldelay"), i.characterScrollMode = d.children("marquee").attr("behavior"), i.characterDirection = d.children("marquee").attr("direction")), h.children("div.scrollfm").length > 0 && (h = h.children("div.scrollfm")), i.characterSize = h.css("font-size").replace(/px/g, ""), i.characterFont = h.css("font-family").replace(/'/g, ""), i.characterColor = RGBToHex(h.css("color")), i.characterBgColor = RGBToHex(h.css("background-color"), ""), i.characterWeight = h.css("font-weight"), "400" == i.characterWeight && (i.characterWeight = "normal"), i.characterStyle = h.css("font-style") || "normal", i.characterLineThrough = "", i.characterLineUnder = "", i.characterContent = h.html(), i.characterMode = "text", h.css("text-decoration").indexOf("line-through") >= 0 && (i.characterLineThrough = "line-through"), h.css("text-decoration").indexOf("underline") >= 0 && (i.characterLineUnder = "underline"), void 0 !== d.find("a").attr("href") && (i.href = d.find("a").attr("href"), i.hrefMode = d.find("a").attr("target"), i.characterContent = d.find("a").html()), i.characterContent.indexOf("<img") >= 0 && (i.characterMode = "img", i.characterContent = d.find("img").attr("src")), "custom" == d.attr("data-mode") && (i.characterContent = "", i.characterMode = "custom", i.customContent = h.html()), "text" == f.characterMode && "" != i.characterContent && a.addClass("j-app-qswz"), l = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(l)), b.appConfig["jtsb"][1].tSubmit(l, a), a.attr("appID", i.appID), e(g, i.appID)
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
						d = (a.width(), a.height(), b.tParseInt(a.css("top")), b.tParseInt(a.css("left")), c.css3Speed || "0.1s"),
						e = c.css3Mode || "",
						f = "",
						g = "",
						h = "",
						i = "",
						j = "",
						k = "ease-in";
					return "" != e && ("" != c.css3Bezier && ("bs1" == c.css3Bezier && (k = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == c.css3Bezier && (k = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == c.css3Bezier && (k = "cubic-bezier(0,0,1,0.1)"), "bq1" == c.css3Bezier && (k = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == c.css3Bezier && (k = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == c.css3Bezier && (k = "cubic-bezier(0,0,0.1,1)")), j = "-webkit-transition: " + d + " " + k + ";-moz-transition: " + d + " " + k + ";-o-transition: " + d + " " + k + ";transition: " + d + " " + k + ";", "effect_w" == e ? (f = "c-1", $("#jstForPopup").html(c.customHtml), g = "width:" + $("#jstForPopup").outerWidth() + "px;") : "effect_h" == e ? (f = "d-1", $("#jstForPopup").html(c.customHtml), g = "height:" + $("#jstForPopup").outerHeight() + "px;") : "effect_wh" == e && (f = "c-1 d-1", $("#jstForPopup").html(c.customHtml), g = "width:" + $("#jstForPopup").outerWidth() + "px;height:" + $("#jstForPopup").outerHeight() + "px;"), h = '<div class="pope e-1" data-e="' + e + ";" + c.css3Bezier + ";" + d + '" style="' + g + '"><div class="' + f + ' outbox" style="' + j + '"><div class="rel" style="width:100%;height:100%;">', i = "</div></div></div>"), !c.spaceX && (c.spaceX = 0), !c.spaceY && (c.spaceY = 0), "" == c.spaceX && (c.spaceX = 0), "" == c.spaceY && (c.spaceY = 0), '<div class="J_TWidget jpb abs ks-popup-hidden" data-widget-type="Popup" data-widget-config="{\'trigger\':\'.' + c.appIDSelect + "','align':{'node':'." + c.appIDAlignSelect + "','offset':[" + c.spaceX + "," + c.spaceY + "],'points':[" + c.popupPosition.replace(/"/g, "'") + ']}}" style="z-index:99;display:none;">' + h + c.customHtml + i + "</div>"
				},
				codeImport: function(a, b, c, d) {
					var i, j, k, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = JSON.parse(c.attr("data-widget-config").replace(/\'/g, '"')),
						h = {};
					for (h.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), h.appIDSelect = g.trigger.replace(/\./g, ""), h.appIDAlignSelect = g.align.node.replace(/\./g, ""), h.popupPosition = "'" + g.align.points[0] + "','" + g.align.points[1] + "'", h.spaceX = g.align.offset[0], h.spaceY = g.align.offset[1]; c.children("div").hasClass("ks-contentbox") || c.children("div").hasClass("ks-popup-content");) c = c.children("div");
					h.customHtml = c.html(), c.children(".pope").length > 0 && (h.customHtml = c.children(".pope").children(".outbox").children("div").html(), i = c.children(".pope").attr("data-e") || ";;0.5s", j = i.split(";"), h.css3Mode = j[0], h.css3Bezier = j[1], h.css3Speed = j[2]), k = $.extend(!0, e, h), a.attr("data-config", JSON.stringify(k)), a.attr("appID", h.appID), a.attr("data-setAppID", h.appIDSelect), d(f, h.appID)
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
					var c, d = JSON.parse(a.attr("data-config")),
						e = a.width(),
						f = a.height(),
						g = b.tParseInt(a.css("top")),
						h = b.tParseInt(a.css("left")),
						i = b.setChildPos(a, a.children(b.appChildCls + ":eq(0)"), !0),
						j = b.setChildPos(a, a.children(b.appChildCls + ":eq(1)"), !0),
						k = d.childConfig[0],
						l = 1,
						m = d.imgBgp || "50% 50%",
						n = checkUrl(k.hideBtnSrc) ? "background:url(" + k.hideBtnSrc + ");" : "",
						o = checkUrl(k.showBtnSrc) ? "background:url(" + k.showBtnSrc + ");" : "",
						p = checkUrl(d.pSrc) ? "background:url(" + d.pSrc + ") " + m + " no-repeat;" : "",
						q = "",
						r = "display:none;",
						s = d.tipText || "",
						t = "",
						u = k.tipText || "",
						v = "",
						w = '<li class="abs hidebtn" style="left:' + j.left + "px;top:" + j.top + "px;width:" + j.width + "px;height:" + j.height + "px;" + n + '" title="点击展开"></li><li class="abs hidden" style="left:' + i.left + "px;top:" + i.top + "px;width:" + i.width + "px;height:" + i.height + "px;" + o + '"></li>',
						x = "";
					return "" != s && (t = ' title= "' + s + '"'), "" != u && (v = ' title= "' + u + '"'), "display" == d.acMode && (l = 0, r = "", w = '<li class="abs hidebtn hidden" style="left:' + j.left + "px;top:" + j.top + "px;width:" + j.width + "px;height:" + j.height + "px;" + n + '" title="点击展开"></li><li class="abs" style="left:' + i.left + "px;top:" + i.top + "px;width:" + i.width + "px;height:" + i.height + "px;" + o + '"></li>'), "d" != d.acdisplayMode && (g = 0, h = 0), d.bgColor = RGBToHex(d.bgColor, ""), "" != d.bgColor && (q = "background-color:" + d.bgColor + ";"), x = '<div class="bd bdhtml abs" style="width:' + e + "px;height:" + f + "px;" + p + q + r + 'z-index:10;">' + d.customHtml + "</div>", "ptlink" == d.alclinkMode && (x = '<div class="bd" style="width:' + e + "px;height:" + f + "px;" + p + q + r + '"><a href="' + d.href + '" target="' + d.hrefMode + '" style="display:block;width:' + e + "px;height:" + f + 'px;"></a></div>'), c = '<div class="jacb abs J_TWidget ' + d.appID + '" data-appid="' + d.appID + '"' + t + ' style="top:' + g + "px;left:" + h + "px;z-index:10;\" data-widget-type=\"Tabs\" data-widget-config=\"{'triggerType': 'click','activeTriggerCls':'hidden','activeIndex':" + l + '}"><ul class="ks-switchable-nav abs" style="left:0px;top:0px;z-index:2;"' + v + ">" + w + '</ul><div class="ks-switchable-content abs" style="z-index:1;">' + x + '<div class="hide"></div></div></div>', "l" == d.acdisplayMode ? c = "<div class=\"J_TWidget\" data-widget-config=\"{'duration':0.1,'activeTriggerCls':'.tml-mask-b2b','interval':0.1,'effect':'scrollx','activeIndex':2,'navCls':'nav_zhicheng','contentCls':'content_zhicheng','autoplay':true}\" data-widget-type=\"Carousel\" style=\"position:relative;\"><ul class=\"content_zhicheng\" style=\"display: none; width: 999999px; left: 0px; position: absolute; \"><li  style=\"width: 950px; height: 10px; display: block; float: left; \">&nbsp;</li></ul><ul class=\"nav_zhicheng\"><div class=\"tm-mcBodyMask mui-mbar tml-mask-b2b\" style=\"left:auto;right:auto;visibility:visible;top:280px;right:50%;margin-right:520px;opacity:1;z-index:99;width:" + e + "px;height:" + f + 'px;">' + c + "</div></ul></div>" : "r" == d.acdisplayMode && (c = "<div class=\"J_TWidget\" data-widget-config=\"{'duration':0.1,'activeTriggerCls':'.tml-mask-b2b','interval':0.1,'effect':'scrollx','activeIndex':2,'navCls':'nav_zhicheng','contentCls':'content_zhicheng','autoplay':true}\" data-widget-type=\"Carousel\" style=\"position:relative;z-index:10;\"><ul class=\"content_zhicheng\" style=\"display: none; width: 999999px; left: 0px; position: absolute; \"><li  style=\"width: 950px; height: 10px; display: block; float: left; \">&nbsp;</li></ul><ul class=\"nav_zhicheng\"><div class=\"tm-mcBodyMask mui-mbar tml-mask-b2b\" style=\"left:auto;right:auto;visibility:visible;top:280px;left:50%;margin-left:520px;opacity:1;z-index:99;width:" + e + "px;height:" + f + 'px;">' + c + "</div></ul></div>"), c
				},
				codeImport: function(a, c, d, e) {
					var f, g, h, i, j, p, k = JSON.parse(a.attr("data-config")),
						l = a.attr("data-dblType"),
						m = {},
						n = d.find(".ks-switchable-nav li:eq(0)"),
						o = d.find(".ks-switchable-nav li:eq(1)");
					m.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), m.tipText = "", d.attr("title") && "" != d.attr("title") && (m.tipText = d.attr("title")), m.childConfig = [], m.childConfig[0] = {}, m.childConfig[0].tipText = "", d.find(".ks-switchable-nav").attr("title") && "" != d.find(".ks-switchable-nav").attr("title") && (m.childConfig[0].tipText = d.find(".ks-switchable-nav").attr("title")), m.pSrc = d.find(".bd").css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.bgColor = RGBToHex(d.css("background-color"), ""), m.imgBgp = d.find(".bd").css("background-position") || "50% 50%", m.href = d.find(".bd a").attr("href") || "", m.hrefMode = d.find(".bd a").attr("target"), m.alclinkMode = "ptlink", m.customHtml = "", d.find(".bd").hasClass("bdhtml") && (m.alclinkMode = "gzlink", m.customHtml = d.find(".bdhtml").html()), m.childConfig[0].showBtnSrc = o.css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.childConfig[0].hideBtnSrc = n.css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.acdisplayMode = d.attr("tFilterMode") || "d", i = m.childConfig[0].showBtnSrc, j = m.childConfig[0].hideBtnSrc, h = o, o.hasClass("hidden") && (m.acMode = "hide", h = n), f = {
						width: o.width(),
						height: o.height(),
						left: b.tParseInt(o.css("left")),
						top: b.tParseInt(o.css("top"))
					}, g = {
						width: n.width(),
						height: n.height(),
						left: b.tParseInt(n.css("left")),
						top: b.tParseInt(n.css("top"))
					}, a.width(d.find(".bd").width()), a.height(d.find(".bd").height()), p = $.extend(!0, k, m), a.attr("data-config", JSON.stringify(p)), checkUrl(m.pSrc) ? a.css({
						backgroundImage: "url(" + m.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: m.imgBgp
					}), submitColor(a, RGBToHex(m.bgColor, "")), "d" != m.acdisplayMode && a.css({
						width: d.find(".jacb").find(".bd").width(),
						height: d.find(".jacb").find(".bd").height()
					}), checkUrl(i) ? a.children(b.appChildCls + ":eq(0)").css({
						backgroundImage: "url(" + i + ")"
					}) : a.children(b.appChildCls + ":eq(0)").css({
						backgroundImage: "none"
					}), checkUrl(j) ? a.children(b.appChildCls + ":eq(1)").css({
						backgroundImage: "url(" + j + ")"
					}) : a.children(b.appChildCls + ":eq(1)").css({
						backgroundImage: "none"
					}), "ptlink" == m.alclinkMode ? a.children(b.appOtherCls + ":eq(0)").html("") : a.children(b.appOtherCls + ":eq(0)").html(m.customHtml), a.children(b.appChildCls + ":eq(0)").css({
						top: f.top,
						left: f.left,
						width: f.width,
						height: f.height
					}), a.children(b.appChildCls + ":eq(1)").css({
						top: g.top,
						left: g.left,
						width: g.width,
						height: g.height
					}), a.attr("appID", m.appID), e(l, m.appID)
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
					}), "yes" == e[f].autoSize && !
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
					return "" != m && (m = "trans01s" == m ? "0.1s" : "trans02s" == m ? "0.2s" : "trans05s" == m ? "0.5s" : parseFloat(m.replace("trans", "").replace("s", ""), 10) + "s", n = "-webkit-transition: " + m + " ease-in;-moz-transition: " + m + " ease-in;-o-transition: " + m + " ease-in;transition: " + m + " ease-in;"), c.oppoEffect && "none" != c.oppoEffect && "" != c.oppoEffect || (c.oppoSpeed = ""), "june-box-fadein" == c.oppoEffect && (j = "display:block;", k = "", l = "june-box-fadein"), a.children(b.appChildCls).each(function(d) {
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
						imgBgp = r.imgBgp || "50% 50%", "" != w && (x = ' title= "' + w + '"'), "color" == v ? (r.mongoliaColor = RGBToHex(r.mongoliaColor, "#000"), "" != r.mongoliaColor && (s = "background-color:" + r.mongoliaColor + ";")) : checkUrl(r.mongoliaSrc) && (t = "background:url(" + r.mongoliaSrc + ") 50% 50% no-repeat;"), "customContent" != u ? (y = "", z = "", "june-box-fadein" == c.oppoEffect && (y = '<div class="jspb" style="width:' + q.width + "px;height:" + q.height + 'px;">', z = "</div>"), ("" == r.oppoSrc || r.oppoSrc == r.pSrc) && (o = "display:none;"), r.bgColor = RGBToHex(r.bgColor, ""), "" != r.bgColor && (h = "background-color:" + r.bgColor + ";"), checkUrl(r.pSrc) && (g = "background:url(" + r.pSrc + ") " + imgBgp + " no-repeat;"), checkUrl(r.oppoSrc) && (m = "background:url(" + r.oppoSrc + ") " + imgBgp + " no-repeat;", p = 'src="' + r.oppoSrc + '"'), i += '<div class="b-box abs ' + r.attachID + '" data-appid="' + r.attachID + '" data-m="' + v + '"' + x + ' style="left:' + q.left + "px;top:" + q.top + "px;" + s + t + '"><a target="' + r.hrefMode + '" href="' + r.href + '" class="pic imghover ' + k + '" style="' + g + h + "width:" + q.width + "px;height:" + q.height + "px;display:block;" + n + '">' + y + '<img class="' + c.oppoSpeed + " " + l + '" style="' + j + "width:" + q.width + "px;height:" + q.height + "px;" + m + o + '" ' + p + " />" + z + "</a></div>") : (!r.overflowMode && "hidden" == r.overflowMode, A = "", B = "overflow:hidden;", "visibleX" == r.overflowMode ? (A = " u-a", B = "") : "visible" == r.overflowMode && (A = " j-zdv", B = "overflow:visible;"), i += '<div class="b-box abs ' + r.attachID + " " + A + '" data-appid="' + r.attachID + '" data-m="' + v + '"' + x + ' style="left:' + q.left + "px;top:" + q.top + "px;" + s + t + B + '"><div class="pic imghover ' + k + '" style="width:' + q.width + "px;height:" + q.height + "px;display:block;" + n + '">' + r.customContent + "</div></div>")
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
					var E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = ("" + (new Date).valueOf()).substr(7, 6),
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
					return "" != y && (z = ' title= "' + y + '"'), "" != A && (B = ' title= "' + A + '"'), ("" == m.zzcAttentionSrc1 || m.zzcAttentionSrc1 == m.zzcAttentionSrc) && (w = "display:none;"), E = m.oppoEffect + ";" + m.oppoSpeed, F = "", G = "", H = "", I = "", m.oppoEffect && "none" != m.oppoEffect && "" != m.oppoEffect || (m.oppoSpeed = ""), "june-box-fadein" == m.oppoEffect && (H = "display:block;", F = '<div class="jspb" style="width:' + l.width + "px;height:" + l.height + 'px;">', G = "</div>", m.oppoEffect = "", I = "june-box-fadein"), m.zzcAttentionSrc1 && "" != m.zzcAttentionSrc1 && checkUrl(m.zzcAttentionSrc1) && (v = F + '<img class="abs ' + m.oppoSpeed + " " + I + '" data-t="' + E + '" style="width:100%;height:100%;' + H + w + '" src="' + m.zzcAttentionSrc1 + '" />' + G), "gzlink" == m.linkMode ? ("" != c.attentionID && (D = "j_CollectBrand"), r = "cursor:pointer;", J = '<a href="#" class="imghover ' + D + " " + m.oppoEffect + " " + m.oppoSpeed + '" data-brandid="' + m.attentionID + '" style="' + r + "display:block;width:" + l.width + "px;height:" + l.height + 'px;">' + v + "</a>") : J = "nonelink" == m.linkMode ? '<a class="imghover ' + m.oppoEffect + " " + m.oppoSpeed + '" data-href="none" style="display:block;cursor:pointer;width:' + l.width + "px;height:" + l.height + 'px;">' + v + "</a>" : '<a class="imghover ' + m.oppoEffect + " " + m.oppoSpeed + '" href="' + m.href + '" target="' + m.hrefMode + '" style="display:block;width:' + l.width + "px;height:" + l.height + 'px;">' + v + "</a>", K = "", L = "", M = "", N = "", "yes" == c.countSwitch && (Q = b.tParseInt(c.countSeconds), R = "", S = "", T = "", U = "", V = "", W = "", X = "", Y = "", Z = "", $ = "", _ = "", ab = "", n.characterColor = RGBToHex(n.characterColor, ""), "" != n.characterColor && (R = "color:" + n.characterColor + ";"), "" != n.characterFont && (S = "font-family:" + n.characterFont + ";"), "" != n.characterWeight && (T = "font-weight:" + n.characterWeight + ";"), "" != n.characterSize && (U = "font-size:" + b.tParseInt(n.characterSize) + "px;"), n.characterBgColor = RGBToHex(n.characterBgColor, ""), "" != n.characterBgColor && (V = "background-color:" + n.characterBgColor + ";"), "italic" == n.characterStyle && (W = "font-style:" + n.characterStyle + ";"), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (X = "color:" + c.characterColor + ";"), "" != c.characterFont && (Y = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (Z = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && ($ = "font-size:" + b.tParseInt(c.characterSize) + "px;"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (_ = "background-color:" + c.characterBgColor + ";"), "italic" == c.characterStyle && (ab = "font-style:" + c.characterStyle + ";"), O = b.setChildPos(a, j, !0), P = b.setChildPos(a, k, !0), K = '<div class="zzccd abs J_TWidget" data-widget-type="Countdown" data-widget-config="{ \'endTime\': \'' + 1e3 * Q + "', 'interval': 1000, 'timeRunCls': '.zzcmjb', 'timeUnitCls':{ 'd': '.ks-d', 'h': '.ks-h', 'm': '.ks-m', 's': '.seczz' }, 'minDigit': 1, 'timeEndCls': '.ks-countdown-end' }\">", L = "</div></div>", M = '<div class="zzcmjb">', N = '<div class="zzccdsz abs seczz" style="width:' + O.width + "px;height:" + O.height + "px;left:" + (O.left - l.left) + "px;top:" + (O.top - l.top) + "px;" + R + S + T + U + V + W + 'z-index:3;">' + Q + '</div><div class="zzccdwz abs" style="width:' + P.width + "px;height:" + P.height + "px;left:" + (P.left - l.left) + "px;top:" + (P.top - l.top) + "px;" + X + Y + Z + $ + _ + ab + 'z-index:3;">' + c.countSecondsText + "</div>"), "imgContent" == c.zzcMode ? (c.bgColor = RGBToHex(c.bgColor, ""), "" != c.bgColor && (s = "background-color:" + c.bgColor + ";"), checkUrl(c.zzcSrc) && (p = "background:url(" + c.zzcSrc + ") " + x + " no-repeat;")) : q = c.zzcCustomContent, m.bgColor = RGBToHex(m.bgColor, ""), "" != m.bgColor && (t = "background-color:" + m.bgColor + ";"), checkUrl(m.zzcAttentionSrc) && (u = "background:url(" + m.zzcAttentionSrc + ") " + C + " no-repeat;"), bb = "", "fade" == o && (bb = c.customHtml), '<div class="jzzb abs J_TWidget ' + c.appID + '" data-appid="' + c.appID + '" data-s="' + o + '" data-m="' + c.zzcMode + '"' + z + ' style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;\" data-widget-config=\"{'contentCls':'zc" + h + "','navCls':'zn" + h + "','duration':0.5,'easing':'easeBoth','effect':'" + o + "','delay':0,'triggerType':'click','activeTriggerCls':'hidden','autoplay':false}\" data-widget-type=\"Slide\">" + K + '<div class="abs zzhtml" style="z-index:1;">' + c.customHtml + "</div>" + M + '<div class="ks-switchable-content abs zc' + h + '" style="z-index:2;"><div class="abs zzmc" style="width:' + d + "px;height:" + e + "px;" + p + s + '">' + q + '</div><div class="abs" style="display:none;width:0;height:0;">' + bb + '</div></div><ul class="ks-switchable-nav abs zn' + h + '" style="z-index:3;"><li class="abs"></li><li class="abs zzgzhtml"' + B + ' style="width:' + l.width + "px;height:" + l.height + "px;left:" + l.left + "px;top:" + l.top + "px;" + u + t + '">' + J + N + "</li></ul>" + L + "</div>"
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
						d = (a.width(), a.height(), b.tParseInt(a.css("top"))),
						e = b.tParseInt(a.css("left"));
					return '<a class="jmdb abs" name="' + c.anchorName + '" style="top:' + d + "px;left:" + e + 'px;z-index:10;"></a>'
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
					var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb;
					for (f = a.href.split(","), g = a.erWeiMaSrc.split(","), h = 0; h < f.length; h++) if (g[h] && checkUrl(g[h]) && "" != g[h] && (g[h] = g[h].replace(/\&w\=[^\&]*\&h\=[^\&]*$/g, "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize).replace(/\&w\=[^\&]*\&h\=[^\&]*\&/g, "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize + "&")), "yes" == a.erWeiMaSwitch && (!g[h] || "" == g[h])) {
						if (!f[h] || "" == f[h]) continue;
						if (i = f[h].match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), j = "", !i || i.length < 1) continue;
						if (j = i[0].replace(/(\?|\&)id\=/g, ""), "" == j) continue;
						g[h] = f[h].indexOf("//detail.tmall") >= 0 ? "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=" + j + "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize : "http://gqrcode.alicdn.com/img?type=ci&item_id=" + j + "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize
					}
					for (a.erWeiMaSrc = g.join(","), c.attr("data-config", JSON.stringify(a)), a = b.toClear(a), k = require("scripts/tAjax"), l = require("scripts/childBaoBei"), m = a.sWidth, n = a.sHeight, o = a.mHeight, p = a.itemCount < 1 ? 1 : a.itemCount, q = a.itemColumn, r = a.columnSpace, s = a.lineSpace, t = Math.ceil(p / q), c.children("[data-attachType='jibbg']"), c.children("[data-attachType='jibpanel']"), u = c.children("[data-attachType='jibtitle']"), v = c.children("[data-attachType='jibsubtitle']"), w = c.children("[data-attachType='jibprefix']"), x = c.children("[data-attachType='jibprice']"), y = c.children("[data-attachType='jibdiscountprefix']"), z = c.children("[data-attachType='jibdiscountprice']"), A = c.children("[data-attachType='jibsaleprefix']"), B = c.children("[data-attachType='jibsale']"), C = c.children("[data-attachType='jibbtn']"), D = c.children("[data-attachType='jibbtn1']"), E = c.children("[data-attachType='jibbtn2']"), F = c.children("[data-attachType='jibsubscript']"), G = c.children("[data-attachType='jibsubscript1']"), H = c.children("[data-attachType='jibsubscript2']"), I = c.children("[data-attachType='jibsubscript3']"), J = c.children("[data-attachType='jibsubscript4']"), K = c.children("[data-attachType='jiberweima']"), L = c.children("[data-attachType='jibexpandtext']"), M = c.children("[data-attachType='jibexpandtext1']"), N = c.children("[data-attachType='jibexpandtext2']"), O = c.children("[data-attachType='jibexpandtext3']"), P = c.children("[data-attachType='jibexpandtext4']"), Q = [], c.children("[attachID]").each(function() {
						Q.push($(this).attr("attachID"))
					}), b.tParseInt(a.itemColumn) > b.tParseInt(a.itemCount) && (q = a.itemCount), c.css({
						width: (m + r) * q - r,
						height: (n + o + s) * t - s
					}), R = {
						attachIDArray: Q,
						titleTop: b.tParseInt(u.css("top")),
						titleLeft: b.tParseInt(u.css("left")),
						subTitleTop: b.tParseInt(v.css("top")),
						subTitleLeft: b.tParseInt(v.css("left")),
						prefixTop: b.tParseInt(w.css("top")),
						prefixLeft: b.tParseInt(w.css("left")),
						priceTop: b.tParseInt(x.css("top")),
						priceLeft: b.tParseInt(x.css("left")),
						_prefixTop: b.tParseInt(y.css("top")),
						_prefixLeft: b.tParseInt(y.css("left")),
						_priceTop: b.tParseInt(z.css("top")),
						_priceLeft: b.tParseInt(z.css("left")),
						salePrefixTop: b.tParseInt(A.css("top")),
						salePrefixLeft: b.tParseInt(A.css("left")),
						saleTop: b.tParseInt(B.css("top")),
						saleLeft: b.tParseInt(B.css("left")),
						btnTop: b.tParseInt(C.css("top")),
						btnLeft: b.tParseInt(C.css("left")),
						btnWidth: C.width(),
						btnHeight: C.height(),
						btn1Top: b.tParseInt(D.css("top")),
						btn1Left: b.tParseInt(D.css("left")),
						btn1Width: D.width(),
						btn1Height: D.height(),
						btn2Top: b.tParseInt(E.css("top")),
						btn2Left: b.tParseInt(E.css("left")),
						btn2Width: E.width(),
						btn2Height: E.height(),
						subScriptTop: b.tParseInt(F.css("top")),
						subScriptLeft: b.tParseInt(F.css("left")),
						subScriptWidth: F.width(),
						subScriptHeight: F.height(),
						subScript1Top: b.tParseInt(G.css("top")),
						subScript1Left: b.tParseInt(G.css("left")),
						subScript1Width: G.width(),
						subScript1Height: G.height(),
						subScript2Top: b.tParseInt(H.css("top")),
						subScript2Left: b.tParseInt(H.css("left")),
						subScript2Width: H.width(),
						subScript2Height: H.height(),
						subScript3Top: b.tParseInt(I.css("top")),
						subScript3Left: b.tParseInt(I.css("left")),
						subScript3Width: I.width(),
						subScript3Height: I.height(),
						subScript4Top: b.tParseInt(J.css("top")),
						subScript4Left: b.tParseInt(J.css("left")),
						subScript4Width: J.width(),
						subScript4Height: J.height(),
						erWeiMaTop: b.tParseInt(K.css("top")),
						erWeiMaLeft: b.tParseInt(K.css("left")),
						expandTextTop: b.tParseInt(L.css("top")),
						expandTextLeft: b.tParseInt(L.css("left")),
						expandText1Top: b.tParseInt(M.css("top")),
						expandText1Left: b.tParseInt(M.css("left")),
						expandText2Top: b.tParseInt(N.css("top")),
						expandText2Left: b.tParseInt(N.css("left")),
						expandText3Top: b.tParseInt(O.css("top")),
						expandText3Left: b.tParseInt(O.css("left")),
						expandText4Top: b.tParseInt(P.css("top")),
						expandText4Left: b.tParseInt(P.css("left"))
					}, d && (R = $.extend(!0, {}, e)), S = !1, T = [], checkUrl(a.btnSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2QXHLbXXXXXbUXXXXXXXXXXXX-39767794.jpg" != a.btnSrc ? (S = !0, T.push(a.btnSrc)) : checkUrl(a.btnHoverSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2EXHNbXXXXXbbXXXXXXXXXXXX-39767794.jpg" != a.btnHoverSrc ? (S = !0, T.push(a.btnHoverSrc)) : T.push(""), checkUrl(a.btn1Src) && "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2xCrJbXXXXXXfXpXXXXXXXXXX-39767794.jpg" != a.btn1Src ? (S = !0, T.push(a.btn1Src)) : checkUrl(a.btn1HoverSrc) && "http://img04.taobaocdn.com/imgextra/i4/39767794/TB24h6MbXXXXXbbXXXXXXXXXXXX-39767794.jpg" != a.btn1HoverSrc ? (S = !0, T.push(a.btn1HoverSrc)) : T.push(""), checkUrl(a.btn2Src) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2Q2_IbXXXXXbvXpXXXXXXXXXX-39767794.jpg" != a.btn2Src ? (S = !0, T.push(a.btn2Src)) : checkUrl(a.btn2HoverSrc) && "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Ps_KbXXXXXXmXpXXXXXXXXXX-39767794.jpg" != a.btn2HoverSrc ? (S = !0, T.push(a.btn2HoverSrc)) : T.push(""), U = a.subScriptSrc.split(","), V = !1, h = 0; h < U.length; h++) if (checkUrl(U[h]) && "" != U[h]) {
						T.push(U[h]), V = !0;
						break
					}
					for (V ? S = !0 : T.push(""), W = a.subScript1Src.split(","), X = !1, h = 0; h < W.length; h++) if (checkUrl(W[h]) && "" != W[h]) {
						T.push(W[h]), X = !0;
						break
					}
					for (X ? S = !0 : T.push(""), Y = a.subScript2Src.split(","), Z = !1, h = 0; h < Y.length; h++) if (checkUrl(Y[h]) && "" != Y[h]) {
						T.push(Y[h]), Z = !0;
						break
					}
					for (Z ? S = !0 : T.push(""), _ = a.subScript3Src.split(","), ab = !1, h = 0; h < _.length; h++) if (checkUrl(_[h]) && "" != _[h]) {
						T.push(_[h]), ab = !0;
						break
					}
					for (ab ? S = !0 : T.push(""), bb = a.subScript4Src.split(","), cb = !1, h = 0; h < bb.length; h++) if (checkUrl(bb[h]) && "" != bb[h]) {
						T.push(bb[h]), cb = !0;
						break
					}
					if (cb ? S = !0 : T.push(""), db = c.html(), c.html(""), S && !b.startParse) k.ajaxJsonForGis({
						imgarr: T
					}, function(a) {
						var d, e, f, g, h;
						for (a && a.length > 0 && (a[0] && (R.btnWidth = a[0][0], R.btnHeight = a[0][1]), a[1] && (R.btn1Width = a[1][0], R.btn1Height = a[1][1]), a[2] && (R.btn2Width = a[2][0], R.btn2Height = a[2][1]), a[3] && (R.subScriptWidth = a[3][0], R.subScriptHeight = a[3][1]), a[4] && (R.subScript1Width = a[4][0], R.subScript1Height = a[4][1]), a[5] && (R.subScript2Width = a[5][0], R.subScript2Height = a[5][1]), a[6] && (R.subScript3Width = a[6][0], R.subScript3Height = a[6][1]), a[7] && (R.subScript4Width = a[7][0], R.subScript4Height = a[7][1])), d = 0; p > d; d++) {
							e = d % q, f = b.tParseInt(d / q), g = (m + r) * e, h = (n + o + s) * f;
							try {
								l.createAuto("jib", c, g, h, d, R)
							} catch (i) {
								c.html(db)
							}
						}
					}, !0);
					else for (h = 0; p > h; h++) {
						eb = h % q, fb = b.tParseInt(h / q), gb = (m + r) * eb, hb = (n + o + s) * fb;
						try {
							l.createAuto("jib", c, gb, hb, h, R)
						} catch (ib) {
							c.html(db)
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
					var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc, ec, fc, gc, hc, ic, c = require("scripts/reckonAlign"),
						d = JSON.parse(a.attr("data-config"));
					for (d = $.extend(!0, {}, b.appConfig["jib"][2], d), e = a.width(), f = a.height(), g = b.tParseInt(a.css("top")), h = b.tParseInt(a.css("left")), i = b.appConfig["jib"][1]["tAppArray"], j = d.href.split(","), k = d.pSrc.split(","), l = d.oppoSrc.split(","), m = d.titleInfo.split(","), n = d.subTitleInfo.split(","), o = d.priceInfo.split(","), p = d._priceInfo.split(","), q = d.saleInfo.split(","), r = d.subScriptSrc.split(","), s = d.subScript1Src.split(","), t = d.subScript2Src.split(","), u = d.subScript3Src.split(","), v = d.subScript4Src.split(","), w = d.erWeiMaSrc.split(","), x = d.expandText.split(","), y = d.expandTextSet.split("|;|"), z = d.expandText1.split(","), A = d.expandText1Set.split("|;|"), B = d.expandText2.split(","), C = d.expandText2Set.split("|;|"), D = d.expandText3.split(","), E = d.expandText3Set.split("|;|"), F = d.expandText4.split(","), G = d.expandText4Set.split("|;|"), H = d.titleAuto.split(","), I = d.priceAuto.split(","), J = d._priceAuto.split(","), K = d.saleAuto.split(","), L = d.panelArea ? d.panelArea : "no", M = d.pSrcPos.split(","), N = d.oSrcPos.split(","), O = "_" + d.pSrcSize + "x" + d.pSrcSize + ".jpg", P = "_" + d.pSrcSize1 + "x" + d.pSrcSize1 + ".jpg", "" == d.pSrcSize && (O = ""), "" == d.pSrcSize1 && (P = ""), d = b.toClear(d), d.borderRadius = d.borderRadius1, Q = a.children("[data-attachType='jibprefix']:eq(0)"), R = a.children("[data-attachType='jibprice']:eq(0)"), S = a.children("[data-attachType='jibdiscountprefix']:eq(0)"), T = a.children("[data-attachType='jibdiscountprice']:eq(0)"), U = a.children("[data-attachType='jibsaleprefix']:eq(0)"), V = a.children("[data-attachType='jibsale']:eq(0)"), W = a.children("[data-attachType='jibexpandtext']:not(:hidden):eq(0)"), X = a.children("[data-attachType='jibexpandtext1']:not(:hidden):eq(0)"), Y = a.children("[data-attachType='jibexpandtext2']:not(:hidden):eq(0)"), Z = a.children("[data-attachType='jibexpandtext3']:not(:hidden):eq(0)"), _ = a.children("[data-attachType='jibexpandtext4']:not(:hidden):eq(0)"), ab = "", bb = /((\&|\?){1}id\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)id\=/g, "pptitem" == d.itemMode && (bb = /((\&|\?){1}item_id\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)item_id\=/g), db = !1, eb = !1, fb = !1, ("auto" == d.priceAlign || "left" == d.priceAlign || "right" == d.priceAlign) && (db = !0, d.priceAlign = c.get(d.prefixSwitch, d.sWidth, b.tParseInt(R.css("left")), b.tParseInt(Q.css("left")))), ("auto" == d._priceAlign || "left" == d._priceAlign || "right" == d._priceAlign) && (eb = !0, d._priceAlign = c.get(d._prefixSwitch, d.sWidth, b.tParseInt(T.css("left")), b.tParseInt(S.css("left")))), ("auto" == d.saleAlign || "left" == d.saleAlign || "right" == d.saleAlign) && (fb = !0, d.saleAlign = c.get(d.salePrefixSwitch, d.sWidth, b.tParseInt(V.css("left")), b.tParseInt(U.css("left")))), gb = ' target="' + d.hrefMode + '"', d.oppoEffect && "none" != d.oppoEffect && "" != d.oppoEffect || (d.oppoSpeed = ""), hb = 0; hb < d.itemCount; hb++) {
						kb = "", lb = a.children("[data-attachType='jibbg']:eq(" + hb + ")"), "http" != j[hb].substr(0, 4) && (j[hb] = "http://" + j[hb], j[hb] = j[hb].replace(/\/\/\/\//g, "//")), j[hb] = $.trim(j[hb]);
						a: for (mb = 0; mb < i.length; mb++) if ("AforPanel" != i[mb]) if (nb = a.children("[data-attachType='" + i[mb] + "']:eq(" + hb + ")"), ob = b.getChildPos(a, lb, !0), pb = b.getChildPos(lb, nb, !1), qb = "", rb = "", sb = "", tb = "", ub = "", vb = "", wb = "white-space: nowrap;", xb = "", yb = j[hb], zb = "", Ab = "", Bb = "", Cb = "overflow:hidden;", xb = "top:" + pb.top + "px;left:" + pb.left + "px;", j[hb].indexOf("item_id") >= 0 || j[hb].indexOf("itemId") >= 0 ? (bb = /((\&|\?){1}(item_id|itemId)\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)(item_id|itemId)\=/g) : (bb = /((\&|\?){1}id\=\s?){1}(\d+)(?=(\&|$))/g, cb = /(\?|\&)id\=/g), yb && "" != yb && (yb = yb.replace(/%20/g, " "), Db = yb.match(bb), Db && Db.length > 0 && (zb = $.trim(Db[0].replace(cb, "")))), Eb = k[hb] + O, Fb = l[hb] + P, "jibbg" == i[mb] || "jibtitle" == i[mb] || "jibsubtitle" == i[mb] || "jibbtn" == i[mb] || "jibbtn1" == i[mb] || "jibbtn2" == i[mb]) {
							if ("hborder1" == d.borderControl1 && "" != d.borderRadius1 && (Gb = b.tParseInt(d.borderRadius1), ub = "border-radius:" + Gb + "px " + Gb + "px 0 0", d.mHeight && "" != d.mHeight && "0" != d.mHeight || (ub = "border-radius:" + Gb + "px " + Gb + "px " + Gb + "px")), gb = ' target="' + d.hrefMode + '"', "jibbg" == i[mb] && (checkUrl(k[hb]) && (sb = "background:url(" + Eb + ") center center no-repeat;"), d.itemBgColor = RGBToHex(d.itemBgColor, ""), "" != d.itemBgColor && (tb = "background-color:" + d.itemBgColor + ";"), checkUrl(l[hb]) && (rb = " imghover", "yes" == d.oppoSwitch) && (Hb = "", Ib = "", "june-box-fadein" == d.oppoEffect ? (Hb = "display:block;", Ib = "june-box-fadein", rb += " jspb") : rb += " " + d.oppoEffect, Jb = "width:" + d.pSrcSize1 + "px;height:" + d.pSrcSize1 + "px;margin-left:" + (pb.width - d.pSrcSize1) / 2 + "px;margin-top:" + (pb.height - d.pSrcSize1) / 2 + "px;", (pb.width - d.pSrcSize1 < 0 || pb.height - d.pSrcSize1 < 0) && (Jb = "width:" + d.pSrcSize1 + "px;height:" + d.pSrcSize1 + "px;left:" + (pb.width - d.pSrcSize1) / 2 + "px;top:" + (pb.height - d.pSrcSize1) / 2 + "px;"), "" == d.pSrcSize1 && (Jb = "width:100%;height:100%"), qb = '<img class="abs ' + d.oppoSpeed + " " + Ib + '" src="' + Fb + '" style="' + Hb + Jb + '" />'), ("1" != M[hb] || "2" != N[hb]) && (Ab = ' data-p="' + M[hb] + ";" + N[hb] + '"'), Ab += ' data-e="' + (d.oppoEffect || "none") + ";" + d.oppoSpeed + '"', ib = pb.width, jb = pb.height), "jibbtn" == i[mb] && "yes" == d.btnSwitch) checkUrl(d.btnSrc) && (sb = "background:url(" + d.btnSrc + ") center center no-repeat;"), checkUrl(d.btnHoverSrc) && (rb = " imghover", qb = '<img src="' + d.btnHoverSrc + '" style="width:100%;height:100%;" />'), "bhm_item" == d.btnHoverMode && (Kb = "", Lb = "", Mb = "", Nb = "", Ob = "", "" != d.btnHoverSpeed && (Kb = " " + d.btnHoverSpeed), "" == d.btnStyle && (Kb = ""), "" != d.btnHoverStyle && (Lb += " " + d.btnHoverStyle), "" != d.btnHoverStyleX && (Lb += " " + d.btnHoverStyleX), "" != d.btnHoverStyleY && (Lb += " " + d.btnHoverStyleY), checkUrl(d.btnHoverSrc) && (Mb = "background:url(" + d.btnHoverSrc + ") center center no-repeat;"), "" == Mb || d.btnHoverSrc == d.btnSrc ? (Nb = '<div class="abs ' + Kb + Lb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Ob = "") : (Nb = '<div class="abs june-box-fadeout' + Kb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Ob = '<div class="abs june-box-fadein' + Kb + Lb + '" style="top:0;left:0;width:100%;height:100%;' + Mb + '"></div>'), qb = Nb + Ob, rb = "", sb = "", Cb = "");
							else if ("jibbtn" == i[mb] && "yes" != d.btnSwitch) continue a;
							if ("jibbtn1" == i[mb] && "yes" == d.btn1Switch) gb = ' target="_blank"', yb && "" != yb && (Pb = yb.match(bb), Qb = "", Pb && Pb.length > 0 && (Qb = Pb[0].replace(cb, "")), yb = "http://favorite.taobao.com/popup/add_collection.htm?id=" + Qb + "&itemtype=1&scjjc=1"), checkUrl(d.btn1Src) && (sb = "background:url(" + d.btn1Src + ") center center no-repeat;"), checkUrl(d.btn1HoverSrc) && (rb = " imghover", qb = '<img src="' + d.btn1HoverSrc + '" style="width:100%;height:100%;" />'), "bhm_item" == d.btn1HoverMode && (Kb = "", Lb = "", Mb = "", Nb = "", Ob = "", "" != d.btn1HoverSpeed && (Kb = " " + d.btn1HoverSpeed), "" == d.btn1Style && (Kb = ""), "" != d.btn1HoverStyle && (Lb += " " + d.btn1HoverStyle), "" != d.btn1HoverStyleX && (Lb += " " + d.btn1HoverStyleX), "" != d.btn1HoverStyleY && (Lb += " " + d.btn1HoverStyleY), checkUrl(d.btn1HoverSrc) && (Mb = "background:url(" + d.btn1HoverSrc + ") center center no-repeat;"), "" == Mb || d.btn1HoverSrc == d.btn1Src ? (Nb = '<div class="abs ' + Kb + Lb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Ob = "") : (Nb = '<div class="abs june-box-fadeout' + Kb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Ob = '<div class="abs june-box-fadein' + Kb + Lb + '" style="top:0;left:0;width:100%;height:100%;' + Mb + '"></div>'), qb = Nb + Ob, rb = "", sb = "", Cb = "");
							else if ("jibbtn1" == i[mb] && "yes" != d.btn1Switch) continue a;
							if ("jibbtn2" == i[mb] && "yes" == d.btn2Switch) rb = " J_CartPluginTrigger", gb = "", checkUrl(d.btn2Src) && (sb = "background:url(" + d.btn2Src + ") center center no-repeat;"), checkUrl(d.btn2HoverSrc) && (rb += " imghover", qb = '<img src="' + d.btn2HoverSrc + '" style="width:100%;height:100%;" />'), "pptitem" == d.itemMode && yb && "" != yb && (Pb = yb.match(bb), Qb = "", Pb && Pb.length > 0 && (Qb = Pb[0].replace(cb, "")), yb = "https://detail.tmall.com/item.htm?id=" + Qb), "bhm_item" == d.btn2HoverMode && (Kb = "", Lb = "", Mb = "", Nb = "", Ob = "", "" != d.btn2HoverSpeed && (Kb = " " + d.btn2HoverSpeed), "" == d.btn2Style && (Kb = ""), "" != d.btn2HoverStyle && (Lb += " " + d.btn2HoverStyle), "" != d.btn2HoverStyleX && (Lb += " " + d.btn2HoverStyleX), "" != d.btn2HoverStyleY && (Lb += " " + d.btn2HoverStyleY), checkUrl(d.btn2HoverSrc) && (Mb = "background:url(" + d.btn2HoverSrc + ") center center no-repeat;"), "" == Mb || d.btn2HoverSrc == d.btn2Src ? (Nb = '<div class="abs ' + Kb + Lb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Ob = "") : (Nb = '<div class="abs june-box-fadeout' + Kb + '" style="top:0;left:0;width:100%;height:100%;' + sb + '"></div>', Ob = '<div class="abs june-box-fadein' + Kb + Lb + '" style="top:0;left:0;width:100%;height:100%;' + Mb + '"></div>'), qb = Nb + Ob, rb = " J_CartPluginTrigger", sb = "", Cb = "");
							else if ("jibbtn2" == i[mb] && "yes" != d.btn2Switch) continue a;
							if ("jibtitle" == i[mb] && "yes" == d.titleSwitch)"" != zb && "1" == H[hb] && (Ab = ' data-u="' + m[hb] + '"', m[hb] = "%7b$" + zb + ".title%7d"), ub = "white-space:normal;text-align:" + d.titleAlign + ";", Rb = "center center", d.titleSpace && "" != d.titleSpace && ("left" == d.titleAlign ? (ub += "padding-left: " + b.tParseInt(d.titleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.titleSpace), Rb = "top left") : "right" == d.titleAlign && (ub += "padding-right: " + b.tParseInt(d.titleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.titleSpace), Rb = "top right")), checkUrl(d.titleBgImage) && (sb = "background:url(" + d.titleBgImage + ") " + Rb + " no-repeat;"), d.titleBgColor = RGBToHex(d.titleBgColor, ""), "" != d.titleBgColor && (tb = "background-color:" + d.titleBgColor + ";"), qb = m[hb] || "", d.titleColor = RGBToHex(d.titleColor, ""), "" != d.titleColor && (ub += "color:" + d.titleColor + ";"), "" != d.titleFont && (ub += "font-family:" + d.titleFont + ";"), "" != d.titleWeight && (ub += "font-weight:" + d.titleWeight + ";"), "" != d.titleSize && (ub += "font-size:" + b.tParseInt(d.titleSize) + "px;"), "" != d.titleSpacing && (ub += "letter-spacing:" + b.tParseInt(d.titleSpacing) + "px;"), "" != d.titleLineHeight && (ub += "line-height:" + b.tParseInt(d.titleLineHeight) + "px;");
							else if ("jibtitle" == i[mb] && "yes" != d.titleSwitch) continue a;
							if ("jibsubtitle" == i[mb] && "yes" == d.subTitleSwitch) ub = "text-align:" + d.subTitleAlign + ";", Rb = "center center", d.subTitleSpace && "" != d.subTitleSpace && ("left" == d.subTitleAlign ? (ub += "padding-left: " + b.tParseInt(d.subTitleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.subTitleSpace), Rb = "top left") : "right" == d.subTitleAlign && (ub += "padding-right: " + b.tParseInt(d.subTitleSpace) + "px;", pb.width = pb.width - b.tParseInt(d.subTitleSpace), Rb = "top right")), checkUrl(d.subTitleBgImage) && (sb = "background:url(" + d.subTitleBgImage + ") " + Rb + " no-repeat;"), d.subTitleBgColor = RGBToHex(d.subTitleBgColor, ""), "" != d.subTitleBgColor && (tb = "background-color:" + d.subTitleBgColor + ";"), n[hb] && "undefined" != n[hb] || (n[hb] = ""), qb = n[hb] || "", d.subTitleColor = RGBToHex(d.subTitleColor, ""), "" != d.subTitleColor && (ub += "color:" + d.subTitleColor + ";"), "" != d.subTitleFont && (ub += "font-family:" + d.subTitleFont + ";"), "" != d.subTitleWeight && (ub += "font-weight:" + d.subTitleWeight + ";"), "" != d.subTitleSize && (ub += "font-size:" + b.tParseInt(d.subTitleSize) + "px;"), "" != d.subTitleSpacing && (ub += "letter-spacing:" + b.tParseInt(d.subTitleSpacing) + "px;"), "" != d.subTitleLineHeight && (ub += "line-height:" + b.tParseInt(d.subTitleLineHeight) + "px;");
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
							if ("jibprice" == i[mb] && "yes" == d.priceSwitch) Sb = "", o[hb] && "" != o[hb] && (Sb = tReplace(o[hb], /(\d*(\.)?(\d)*)*/g, function(a) {
								return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(d.priceFixed)) : a
							}), vb = Sb), ("right" == d.priceAlign || "qright" == d.priceAlign) && (Tb = lb.width(), Ub = R.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == d.priceAlign || "qright" == d.priceAlign) && (Bb += ' data-l="yes"'), "qcenter" == d.priceAlign && (Ub = nb.width(), Vb = nb.children("span").width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;left:" + (pb.left + (Ub - Vb) / 2) + "px;", Bb += ' data-l="center"'), "" != zb && "1" == I[hb] && (Ab = ' data-u="' + vb + '"', vb = "%7b$" + zb + ".price." + b.tParseInt(d.priceFixed) + "f%7d" + o[hb].replace(/\d*\.*/g, "")), d.priceColor = RGBToHex(d.priceColor, ""), "" != d.priceColor && (ub += "color:" + d.priceColor + ";"), "" != d.priceFont && (ub += "font-family:" + d.priceFont + ";"), "" != d.priceWeight && (ub += "font-weight:" + d.priceWeight + ";"), "" != d.priceSize && (ub += "font-size:" + b.tParseInt(d.priceSize) + "px;"), "" != d.priceSpacing && (ub += "letter-spacing:" + b.tParseInt(d.priceSpacing) + "px;"), "" != d.priceDecoration && (ub += "text-decoration:" + d.priceDecoration + ";");
							else if ("jibprice" == i[mb] && "yes" != d.priceSwitch) continue a;
							if ("jibdiscountprefix" == i[mb] && "yes" == d._prefixSwitch) vb = d._prefixInfo, d._prefixColor = RGBToHex(d._prefixColor, ""), "" != d._prefixColor && (ub += "color:" + d._prefixColor + ";"), "" != d._prefixFont && (ub += "font-family:" + d._prefixFont + ";"), "" != d._prefixWeight && (ub += "font-weight:" + d._prefixWeight + ";"), "" != d._prefixSize && (ub += "font-size:" + b.tParseInt(d._prefixSize) + "px;"), "" != d._prefixSpacing && (ub += "letter-spacing:" + b.tParseInt(d._prefixSpacing) + "px;");
							else if ("jibdiscountprefix" == i[mb] && "yes" != d._prefixSwitch) continue a;
							if ("jibdiscountprice" == i[mb] && "yes" == d._priceSwitch) Sb = "", p[hb] && "" != p[hb] && (Sb = tReplace(p[hb], /(\d*(\.)?(\d)*)*/g, function(a) {
								return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(d._priceFixed)) : a
							}), vb = Sb), ("right" == d._priceAlign || "qright" == d._priceAlign) && (Tb = lb.width(), Ub = T.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == d._priceAlign || "qright" == d._priceAlign) && (Bb += ' data-l="yes"'), "qcenter" == d._priceAlign && (Ub = nb.width(), Vb = nb.children("span").width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;left:" + (pb.left + (Ub - Vb) / 2) + "px;", Bb += ' data-l="center"'), "" != zb && "1" == J[hb] && (Ab = ' data-u="' + vb + '"', vb = "%7b$" + zb + ".discountPrice." + b.tParseInt(d._priceFixed) + "f%7d" + p[hb].replace(/\d*\.*/g, "")), d._priceColor = RGBToHex(d._priceColor, ""), "" != d._priceColor && (ub += "color:" + d._priceColor + ";"), "" != d._priceFont && (ub += "font-family:" + d._priceFont + ";"), "" != d._priceWeight && (ub += "font-weight:" + d._priceWeight + ";"), "" != d._priceSize && (ub += "font-size:" + b.tParseInt(d._priceSize) + "px;"), "" != d._priceSpacing && (ub += "letter-spacing:" + b.tParseInt(d._priceSpacing) + "px;");
							else if ("jibdiscountprice" == i[mb] && "yes" != d._priceSwitch) continue a;
							if ("jibsaleprefix" == i[mb] && "yes" == d.salePrefixSwitch) vb = d.salePrefixInfo, d.salePrefixColor = RGBToHex(d.salePrefixColor, ""), "" != d.salePrefixColor && (ub += "color:" + d.salePrefixColor + ";"), "" != d.salePrefixFont && (ub += "font-family:" + d.salePrefixFont + ";"), "" != d.salePrefixWeight && (ub += "font-weight:" + d.salePrefixWeight + ";"), "" != d.salePrefixSize && (ub += "font-size:" + b.tParseInt(d.salePrefixSize) + "px;"), "" != d.salePrefixSpacing && (ub += "letter-spacing:" + b.tParseInt(d.salePrefixSpacing) + "px;");
							else if ("jibsaleprefix" == i[mb] && "yes" != d.salePrefixSwitch) continue a;
							if ("jibsale" == i[mb] && "yes" == d.saleSwitch)("right" == d.saleAlign || "qright" == d.saleAlign) && (Tb = lb.width(), Ub = V.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == d.saleAlign || "qright" == d.saleAlign) && (Bb += ' data-l="yes"'), "qcenter" == d.saleAlign && (Ub = nb.width(), Vb = nb.children("span").width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;left:" + (pb.left + (Ub - Vb) / 2) + "px;", Bb += ' data-l="center"'), "" != zb && "1" == K[hb] && (Ab = ' data-u="' + q[hb] + '"', q[hb] = "%7b$" + zb + ".soldCount%7d"), vb = q[hb], d.saleColor = RGBToHex(d.saleColor, ""), "" != d.saleColor && (ub += "color:" + d.saleColor + ";"), "" != d.saleFont && (ub += "font-family:" + d.saleFont + ";"), "" != d.saleWeight && (ub += "font-weight:" + d.saleWeight + ";"), "" != d.saleSize && (ub += "font-size:" + b.tParseInt(d.saleSize) + "px;"), "" != d.saleSpacing && (ub += "letter-spacing:" + b.tParseInt(d.saleSpacing) + "px;");
							else if ("jibsale" == i[mb] && "yes" != d.saleSwitch) continue a;
							if ("jibexpandtext" == i[mb] && "yes" == d.expandTextSwitch) Wb = JSON.parse(y[hb] || "{}"), vb = x[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Wb.characterAlign || "left" == Wb.characterAlign || "right" == Wb.characterAlign) && (Wb.characterAlign = c.get("no", d.sWidth, b.tParseInt(W.css("left")))), ("right" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Tb = lb.width(), Ub = W.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Bb += ' data-l="yes"'), Rb = "center center", Xb = 0, Yb = 0, Wb.characterSpace && "" != Wb.characterSpace && (Yb = b.tParseInt(Wb.characterSpace)), Wb.characterSpace1 && "" != Wb.characterSpace1 && (Xb = b.tParseInt(Wb.characterSpace1)), (0 != Xb || 0 != Yb) && (ub += "padding: " + Xb + "px " + Yb + "px;"), Wb.characterBgColor && (Wb.characterBgColor = RGBToHex(Wb.characterBgColor, ""), "" != Wb.characterBgColor && (tb = "background-color:" + Wb.characterBgColor + ";")), Wb.characterColor && (Wb.characterColor = RGBToHex(Wb.characterColor, ""), "" != Wb.characterColor && (ub += "color:" + Wb.characterColor + ";")), Wb.characterFont && "" != Wb.characterFont && (ub += "font-family:" + Wb.characterFont + ";"), Wb.characterWeight && "" != Wb.characterWeight && (ub += "font-weight:" + Wb.characterWeight + ";"), Wb.characterSize && "" != Wb.characterSize && (ub += "font-size:" + b.tParseInt(Wb.characterSize) + "px;"), Wb.characterSpacing && "" != Wb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Wb.characterSpacing) + "px;"), Wb.characterRadius && "" != Wb.characterRadius && (ub += "border-radius:" + b.tParseInt(Wb.characterRadius) + "px;"), Wb.characterBorderWidth && "" != Wb.characterBorderWidth && "0" != Wb.characterBorderWidth && (ub += "border:" + Wb.characterBorderWidth + "px " + Wb.characterBorderStyle + " " + RGBToHex(Wb.characterBorderColor)));
							else if ("jibexpandtext" == i[mb] && "yes" != d.expandTextSwitch) continue a;
							if ("jibexpandtext1" == i[mb] && "yes" == d.expandText1Switch) Wb = JSON.parse(A[hb] || "{}"), vb = z[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Wb.characterAlign || "left" == Wb.characterAlign || "right" == Wb.characterAlign) && (Wb.characterAlign = c.get("no", d.sWidth, b.tParseInt(X.css("left")))), ("right" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Tb = lb.width(), Ub = X.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Bb += ' data-l="yes"'), Rb = "center center", Xb = 0, Yb = 0, Wb.characterSpace && "" != Wb.characterSpace && (Yb = b.tParseInt(Wb.characterSpace)), Wb.characterSpace1 && "" != Wb.characterSpace1 && (Xb = b.tParseInt(Wb.characterSpace1)), (0 != Xb || 0 != Yb) && (ub += "padding: " + Xb + "px " + Yb + "px;"), Wb.characterBgColor && (Wb.characterBgColor = RGBToHex(Wb.characterBgColor, ""), "" != Wb.characterBgColor && (tb = "background-color:" + Wb.characterBgColor + ";")), Wb.characterColor && (Wb.characterColor = RGBToHex(Wb.characterColor, ""), "" != Wb.characterColor && (ub += "color:" + Wb.characterColor + ";")), Wb.characterFont && "" != Wb.characterFont && (ub += "font-family:" + Wb.characterFont + ";"), Wb.characterWeight && "" != Wb.characterWeight && (ub += "font-weight:" + Wb.characterWeight + ";"), Wb.characterSize && "" != Wb.characterSize && (ub += "font-size:" + b.tParseInt(Wb.characterSize) + "px;"), Wb.characterSpacing && "" != Wb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Wb.characterSpacing) + "px;"), Wb.characterRadius && "" != Wb.characterRadius && (ub += "border-radius:" + b.tParseInt(Wb.characterRadius) + "px;"), Wb.characterBorderWidth && "" != Wb.characterBorderWidth && "0" != Wb.characterBorderWidth && (ub += "border:" + Wb.characterBorderWidth + "px " + Wb.characterBorderStyle + " " + RGBToHex(Wb.characterBorderColor)));
							else if ("jibexpandtext1" == i[mb] && "yes" != d.expandText1Switch) continue a;
							if ("jibexpandtext2" == i[mb] && "yes" == d.expandText2Switch) Wb = JSON.parse(C[hb] || "{}"), vb = B[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Wb.characterAlign || "left" == Wb.characterAlign || "right" == Wb.characterAlign) && (Wb.characterAlign = c.get("no", d.sWidth, b.tParseInt(Y.css("left")))), ("right" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Tb = lb.width(), Ub = Y.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Bb += ' data-l="yes"'), Rb = "center center", Xb = 0, Yb = 0, Wb.characterSpace && "" != Wb.characterSpace && (Yb = b.tParseInt(Wb.characterSpace)), Wb.characterSpace1 && "" != Wb.characterSpace1 && (Xb = b.tParseInt(Wb.characterSpace1)), (0 != Xb || 0 != Yb) && (ub += "padding: " + Xb + "px " + Yb + "px;"), Wb.characterBgColor && (Wb.characterBgColor = RGBToHex(Wb.characterBgColor, ""), "" != Wb.characterBgColor && (tb = "background-color:" + Wb.characterBgColor + ";")), Wb.characterColor && (Wb.characterColor = RGBToHex(Wb.characterColor, ""), "" != Wb.characterColor && (ub += "color:" + Wb.characterColor + ";")), Wb.characterFont && "" != Wb.characterFont && (ub += "font-family:" + Wb.characterFont + ";"), Wb.characterWeight && "" != Wb.characterWeight && (ub += "font-weight:" + Wb.characterWeight + ";"), Wb.characterSize && "" != Wb.characterSize && (ub += "font-size:" + b.tParseInt(Wb.characterSize) + "px;"), Wb.characterSpacing && "" != Wb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Wb.characterSpacing) + "px;"), Wb.characterRadius && "" != Wb.characterRadius && (ub += "border-radius:" + b.tParseInt(Wb.characterRadius) + "px;"), Wb.characterBorderWidth && "" != Wb.characterBorderWidth && "0" != Wb.characterBorderWidth && (ub += "border:" + Wb.characterBorderWidth + "px " + Wb.characterBorderStyle + " " + RGBToHex(Wb.characterBorderColor)));
							else if ("jibexpandtext2" == i[mb] && "yes" != d.expandText2Switch) continue a;
							if ("jibexpandtext3" == i[mb] && "yes" == d.expandText3Switch) Wb = JSON.parse(E[hb] || "{}"), vb = D[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Wb.characterAlign || "left" == Wb.characterAlign || "right" == Wb.characterAlign) && (Wb.characterAlign = c.get("no", d.sWidth, b.tParseInt(Z.css("left")))), ("right" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Tb = lb.width(), Ub = Z.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Bb += ' data-l="yes"'), Rb = "center center", Xb = 0, Yb = 0, Wb.characterSpace && "" != Wb.characterSpace && (Yb = b.tParseInt(Wb.characterSpace)), Wb.characterSpace1 && "" != Wb.characterSpace1 && (Xb = b.tParseInt(Wb.characterSpace1)), (0 != Xb || 0 != Yb) && (ub += "padding: " + Xb + "px " + Yb + "px;"), Wb.characterBgColor && (Wb.characterBgColor = RGBToHex(Wb.characterBgColor, ""), "" != Wb.characterBgColor && (tb = "background-color:" + Wb.characterBgColor + ";")), Wb.characterColor && (Wb.characterColor = RGBToHex(Wb.characterColor, ""), "" != Wb.characterColor && (ub += "color:" + Wb.characterColor + ";")), Wb.characterFont && "" != Wb.characterFont && (ub += "font-family:" + Wb.characterFont + ";"), Wb.characterWeight && "" != Wb.characterWeight && (ub += "font-weight:" + Wb.characterWeight + ";"), Wb.characterSize && "" != Wb.characterSize && (ub += "font-size:" + b.tParseInt(Wb.characterSize) + "px;"), Wb.characterSpacing && "" != Wb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Wb.characterSpacing) + "px;"), Wb.characterRadius && "" != Wb.characterRadius && (ub += "border-radius:" + b.tParseInt(Wb.characterRadius) + "px;"), Wb.characterBorderWidth && "" != Wb.characterBorderWidth && "0" != Wb.characterBorderWidth && (ub += "border:" + Wb.characterBorderWidth + "px " + Wb.characterBorderStyle + " " + RGBToHex(Wb.characterBorderColor)));
							else if ("jibexpandtext3" == i[mb] && "yes" != d.expandText3Switch) continue a;
							if ("jibexpandtext4" == i[mb] && "yes" == d.expandText4Switch) Wb = JSON.parse(G[hb] || "{}"), vb = F[hb] || "", "" == vb ? ub += "display:none;" : (("auto" == Wb.characterAlign || "left" == Wb.characterAlign || "right" == Wb.characterAlign) && (Wb.characterAlign = c.get("no", d.sWidth, b.tParseInt(_.css("left")))), ("right" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Tb = lb.width(), Ub = _.width(), Bb = ' data-n="' + pb.left + '"', xb = "top:" + pb.top + "px;right:" + (Tb - Ub - pb.left) + "px;"), ("qleft" == Wb.characterAlign || "qright" == Wb.characterAlign) && (Bb += ' data-l="yes"'), Rb = "center center", Xb = 0, Yb = 0, Wb.characterSpace && "" != Wb.characterSpace && (Yb = b.tParseInt(Wb.characterSpace)), Wb.characterSpace1 && "" != Wb.characterSpace1 && (Xb = b.tParseInt(Wb.characterSpace1)), (0 != Xb || 0 != Yb) && (ub += "padding: " + Xb + "px " + Yb + "px;"), Wb.characterBgColor && (Wb.characterBgColor = RGBToHex(Wb.characterBgColor, ""), "" != Wb.characterBgColor && (tb = "background-color:" + Wb.characterBgColor + ";")), Wb.characterColor && (Wb.characterColor = RGBToHex(Wb.characterColor, ""), "" != Wb.characterColor && (ub += "color:" + Wb.characterColor + ";")), Wb.characterFont && "" != Wb.characterFont && (ub += "font-family:" + Wb.characterFont + ";"), Wb.characterWeight && "" != Wb.characterWeight && (ub += "font-weight:" + Wb.characterWeight + ";"), Wb.characterSize && "" != Wb.characterSize && (ub += "font-size:" + b.tParseInt(Wb.characterSize) + "px;"), Wb.characterSpacing && "" != Wb.characterSpacing && (ub += "letter-spacing:" + b.tParseInt(Wb.characterSpacing) + "px;"), Wb.characterRadius && "" != Wb.characterRadius && (ub += "border-radius:" + b.tParseInt(Wb.characterRadius) + "px;"), Wb.characterBorderWidth && "" != Wb.characterBorderWidth && "0" != Wb.characterBorderWidth && (ub += "border:" + Wb.characterBorderWidth + "px " + Wb.characterBorderStyle + " " + RGBToHex(Wb.characterBorderColor)));
							else if ("jibexpandtext4" == i[mb] && "yes" != d.expandText4Switch) continue a;
							kb += '<div class="abs ' + i[mb] + '"' + Ab + Bb + ' style="' + wb + xb + sb + tb + ub + '">' + vb + "</div>"
						} else "yes" == L && (kb += '<a class="abs jibaforpanel" href="' + j[hb] + '"' + gb + ' style="display:block;width:100%;height:100%;"></a>');
						Zb = "", $b = "", _b = "", ac = "", bc = "", cc = "", dc = "", ec = 0, fc = 0, borderWidth = 0, borderWidth1 = 0, outlineColor = "", outlineShadowColor = "", outlineWidth = "", itemAreaHref = "", itemAreaTarget = "", "" != d.shadowControl && ("" == d.shadowLeft && (d.shadowLeft = 0), "" == d.shadowTop && (d.shadowTop = 0), "" == d.shadowBlur && (d.shadowBlur = 0), "" == d.shadowSize && (d.shadowSize = 0), bc = "box-shadow: " + d.shadowLeft + "px " + d.shadowTop + "px " + d.shadowBlur + "px " + d.shadowSize + "px " + d.shadowColor + " " + d.shadowStyle + ";"), "" == d.borderRadius && (d.borderRadius = 0), "" == d.borderWidth && (d.borderWidth = 0), "hborder" != d.borderControl && ($b = "border:none;", d.borderControl = "", d.borderWidth = 0, d.borderRadius = 0), d.borderColor = RGBToHex(d.borderColor, ""), "" != d.borderColor && (cc = "border-color:" + d.borderColor + ";"), ec = b.tParseInt(d.borderRadius), borderWidth = b.tParseInt(d.borderWidth), "" == $b && ($b = "border-radius:" + ec + "px;"), itemAreaHref = ' href="' + j[hb] + '"', itemAreaTarget = ' target="' + d.hrefMode + '"', ("" != d.shadowControl || "" != d.borderControl) && (Zb = '<a class="itemareachild abs june-box-fadein"' + itemAreaHref + itemAreaTarget + ' style="display:block;top:' + (0 - borderWidth) + "px;left:" + (0 - borderWidth) + "px;width:" + ib + "px;height:" + jb + "px;" + cc + "border-style:solid;border-width:" + borderWidth + "px;" + $b + bc + '"></a>'), "" != d.shadowControl1 && ("" == d.shadowLeft1 && (d.shadowLeft1 = 0), "" == d.shadowTop1 && (d.shadowTop1 = 0), "" == d.shadowBlur1 && (d.shadowBlur1 = 0), "" == d.shadowSize1 && (d.shadowSize1 = 0), ac = "box-shadow: " + d.shadowLeft1 + "px " + d.shadowTop1 + "px " + d.shadowBlur1 + "px " + d.shadowSize1 + "px " + d.shadowColor1 + " " + d.shadowStyle1 + ";"), "" == d.borderRadius1 && (d.borderRadius1 = 0), "" == d.borderWidth1 && (d.borderWidth1 = 0), "hborder1" != d.borderControl1 && (_b = "border:none;", d.borderControl1 = "", d.borderWidth1 = 0, d.borderRadius1 = 0), dc = RGBToHex(d.borderColor1, ""), "" == dc && (_b = "border:none;", d.borderControl1 = "", d.borderWidth1 = 0, d.borderRadius1 = 0), fc = b.tParseInt(d.borderRadius1), borderWidth1 = b.tParseInt(d.borderWidth1), "" == _b && (_b = "border:" + borderWidth1 + "px solid " + dc + ";border-radius:" + fc + "px;"), "" == d.outlineControl && (d.outlineWidth = "", d.outlineColor = "", d.outlineShadowColor = ""), "" != d.outlineWidth && (outlineWidth = d.outlineWidth + " " + d.outlineSpeed), d.outlineColor = RGBToHex(d.outlineColor, ""), "" != d.outlineColor && (outlineColor = "outline-color:" + d.outlineColor + ";"), d.outlineShadowColor = RGBToHex(d.outlineShadowColor, ""), "" != d.outlineShadowColor && (outlineShadowColor = "color:" + d.outlineShadowColor + ";"), ab += '<div class="itemarea abs jspb ' + d.borderControl + " " + d.borderControl1 + " " + d.shadowControl + " " + d.shadowControl1 + " " + outlineWidth + ' jzi" style="display:block;width:' + ib + "px;height:" + jb + "px;top:" + ob.top + "px;left:" + ob.left + "px;" + outlineColor + outlineShadowColor + _b + ac + '">' + Zb + kb + "</div>"
					}
					return gc = d.pSrcSize, "" == gc && (gc = "none"), hc = d.pSrcSize1, "" == hc && (hc = "none"), ic = "", d.mbncheck && "2" == d.mbncheck && (ic = ' data-mc="' + d.mbncheck + '"'), '<div class="jib abs" data-brandid="' + d.appID + '" data-t-size="' + gc + '" data-t-size1="' + hc + '" data-l="' + d.itemColumn + ";" + d.columnSpace + ";" + d.lineSpace + '" data-cc="' + (d.catchChoose || "") + '" data-h="' + d.itemMode + ";" + d.pptHref + '"' + ic + ' style="width:' + e + "px;height:" + f + "px;top:" + g + "px;left:" + h + 'px;z-index:10;">' + ab + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, f = JSON.parse(a.attr("data-config")),
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
						e.indexOf("|") >= 0 && (f = e.split("|")), G.href[a] = c.attr("href") || "", G.pSrc[a] = c.css("background-image").replace(/^url|[\(\"\)]*/g, "").replace(RegExp("_" + J + "x" + J + ".jpg", "g"), ""), d.length > 0 && ("yes" != G.oppoSwitch && (G.oppoSwitch = "yes"), G.oppoSrc[a] = d.attr("src").replace(RegExp("_" + K + "x" + K + ".jpg", "g"), "")), G.pSrcPos[a] = f[0] || "1", G.oSrcPos[a] = f[1] || "2"
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
					})), s.length > 0 && (G.btnSwitch = "yes", Y = s.eq(0).children("div"), Y.length > 0 ? (_ = Y.eq(0), Z = 2 == Y.length ? Y.eq(1) : _, bb = _.attr("class"), cb = Z.attr("class"), db = "", G.btnHoverMode = "bhm_item", G.btnSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btnHoverSrc = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), db = bb.match(/trans(\w+)s/g), !db || db.length < 1 ? G.btnStyle = "" : (G.btnStyle = "june-box-fadeout", G.btnHoverSpeed = db.join("")), ab = cb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = cb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = cb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btnHoverStyle = !ab || ab.length < 1 ? "" : ab.join(""), G.btnHoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btnHoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btnHoverMode = "bhm_btn", G.btnSrc = s.css("background-image").replace(/^url|[\(\"\)]*/g, ""), eb = s.children("img"), G.btnHoverSrc = eb.length > 0 ? eb.attr("src") : "")), t.length > 0 && (G.btn1Switch = "yes", Y = t.eq(0).children("div"), Y.length > 0 ? (_ = Y.eq(0), Z = 2 == Y.length ? Y.eq(1) : _, bb = _.attr("class"), cb = Z.attr("class"), db = "", G.btn1HoverMode = "bhm_item", G.btn1Src = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btn1HoverSrc = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), db = bb.match(/trans(\w+)s/g), !db || db.length < 1 ? G.btn1Style = "" : (G.btn1Style = "june-box-fadeout", G.btn1HoverSpeed = db.join("")), ab = cb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = cb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = cb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btn1HoverStyle = !ab || ab.length < 1 ? "" : ab.join(""), G.btn1HoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btn1HoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btn1HoverMode = "bhm_btn", G.btn1Src = t.css("background-image").replace(/^url|[\(\"\)]*/g, ""), fb = t.children("img"), G.btn1HoverSrc = fb.length > 0 ? fb.attr("src") : "")), u.length > 0 && (G.btn2Switch = "yes", Y = u.eq(0).children("div"), Y.length > 0 ? (_ = Y.eq(0), Z = 2 == Y.length ? Y.eq(1) : _, bb = _.attr("class"), cb = Z.attr("class"), db = "", G.btn2HoverMode = "bhm_item", G.btn2Src = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btn2HoverSrc = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), db = bb.match(/trans(\w+)s/g), !db || db.length < 1 ? G.btn2Style = "" : (G.btn2Style = "june-box-fadeout", G.btn2HoverSpeed = db.join("")), ab = cb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = cb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = cb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btn2HoverStyle = !ab || ab.length < 1 ? "" : ab.join(""), G.btn2HoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btn2HoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btn2HoverMode = "bhm_btn", G.btn2Src = u.css("background-image").replace(/^url|[\(\"\)]*/g, ""), gb = u.children("img"), G.btn2HoverSrc = gb.length > 0 ? gb.attr("src") : "")), v.length > 0 && (G.subScriptSwitch = "yes", v.each(function(a) {
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
					return "hiddenXY" == i ? l = "overflow:scroll;" : "hiddenX" == i ? l = "overflow:hidden;overflow-x:scroll;" : "hiddenY" == i && (l = "overflow:hidden;overflow-y:scroll;"), "" != j && (k = ' title= "' + j + '"'), '<div class="jzdb abs ' + c.appID + '" data-appid="' + c.appID + '" data-brandid="' + c.appID + '"' + k + ' data-o="' + i + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + "px;" + l + 'z-index:10;">' + h + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var i, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.customContent = d.html(), h.oveflowMode = d.css("overflow"), d.attr("data-o") && (h.oveflowMode = d.attr("data-o")), i = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(i)), a.children(b.appOtherCls).html(f.customContent), a.attr("appID", h.appID), e(g, h.appID)
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
					var d, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, e = require("scripts/drawDianPuFenLei"),
						f = $.extend([], a.catsArray),
						g = JSON.parse(c.attr("data-catsConfig") || "[]"),
						h = JSON.parse(c.attr("data-config") || "{}"),
						i = h.shopHref,
						j = a.shopHref,
						k = h.catsArray;
					if ("number" == typeof f[0]) for (l = 0; l < f.length; l++) f[l] += "";
					if ("/" != j.substr(-1) && (j += "/"), j = "https://" + j.replace(/http\:\/\//g, "").replace(/https\:\/\//g, ""), i = "https://" + i.replace(/http\:\/\//g, "").replace(/https\:\/\//g, ""), a.childConfig.length > 0 ? (d = $.extend({}, a.childConfig[0]), a.childConfig = []) : a.childConfig = [], c.attr("data-config", JSON.stringify(a)), m = b.equalsArray(f, k), (a.catsWidth != h.catsWidth || a.catsHeight != h.catsHeight || a.subCatsWidth != h.subCatsWidth || a.subCatsHeight != h.subCatsHeight) && (m = !1), a.isAct && (m = !1, delete a.isAct), i != j && (m = !1, c.attr("data-shopHref", j).attr("data-catsConfig", JSON.stringify(b.tempCatPost)), g = b.tempCatPost, b.tempCatPost = void 0, d = void 0), !m && g && g.length > 0) {
						for (c.children(b.appChildCls).addClass("jsfbchildd").hide(), e.getFormatPos("init", a), l = 0; l < g.length; l++) if (g[l] && (n = g[l].name, o = g[l].id, p = g[l].subCats, $.inArray(o, f) >= 0 && (e.creatChild(c, o, n), p && p.length > 0))) for (t = 0; t < p.length; t++) p[t] && (q = p[t].name, r = p[t].id, $.inArray(r, f) >= 0 && e.creatChild(c, r, q, !0));
						s = e.getFormatPos("maxGet"), c.width(s.width).height(s.height).tResize({
							tSwitch: !1
						})
					}
					u = c.children(b.appChildCls + ".jsfbchilda:not(.jsfbchildc)"), v = c.children(b.appChildCls + ".jsfbchildb:not(.jsfbchildc)"), u.css({
						backgroundColor: RGBToHex(a.characterBgColor, ""),
						fontSize: a.characterSize + "px",
						color: a.characterColor,
						fontWeight: a.characterWeight,
						fontFamily: a.characterFont,
						textAlign: a.characterAlign
					}), v.css({
						backgroundColor: RGBToHex(a.characterBgColor1, ""),
						fontSize: a.characterSize1 + "px",
						color: a.characterColor1,
						fontWeight: a.characterWeight1,
						fontFamily: a.characterFont1,
						textAlign: a.characterAlign1
					}), a.catsSpace && "" != a.catsSpace && ("left" == a.characterAlign ? (u.css({
						backgroundPosition: "top left"
					}), u.children(".jsfbText").css({
						paddingLeft: a.catsSpace + "px",
						right: "-" + a.catsSpace + "px"
					})) : "right" == a.characterAlign && (u.css({
						backgroundPosition: "top right"
					}), u.children(".jsfbText").css({
						paddingRight: a.catsSpace + "px",
						left: "-" + a.catsSpace + "px"
					}))), a.catsSpace1 && "" != a.catsSpace1 && ("left" == a.characterAlign1 ? (v.css({
						backgroundPosition: "top left"
					}), v.children(".jsfbText").css({
						paddingLeft: a.catsSpace1 + "px",
						right: "-" + a.catsSpace1 + "px"
					})) : "right" == a.characterAlign1 && (v.css({
						backgroundPosition: "top right"
					}), v.children(".jsfbText").css({
						paddingRight: a.catsSpace1 + "px",
						left: "-" + a.catsSpace1 + "px"
					}))), checkUrl(a.characterBgSrc) ? u.css({
						backgroundImage: "url(" + a.characterBgSrc + ")"
					}) : u.css({
						backgroundImage: "none"
					}), checkUrl(a.characterBgSrc1) ? v.css({
						backgroundImage: "url(" + a.characterBgSrc1 + ")"
					}) : v.css({
						backgroundImage: "none"
					}), d && (x = d.attachID, y = c.children(b.appChildCls + "[attachID='" + x + "']"), y.length > 0 && (w = JSON.parse(y.attr("data-attachConfig")), z = b.equals(d, w), z || (y.attr("data-attachConfig", JSON.stringify(d)).html('<span class="jsfbText">' + d.characterContent + "</span>").css({
						backgroundColor: RGBToHex(d.characterBgColor, ""),
						textAlign: d.characterAlign,
						fontSize: b.tParseInt(d.characterSize),
						lineHeight: y.height() + "px",
						fontWeight: d.characterWeight,
						fontFamily: d.characterFont,
						color: d.characterColor
					}).addClass("jsfbchildc").tResize(), d.catsSpace && "" != d.catsSpace && ("left" == d.characterAlign ? (y.css({
						backgroundPosition: "top left"
					}), y.children(".jsfbText").css({
						paddingLeft: d.catsSpace + "px",
						right: "-" + d.catsSpace + "px"
					})) : "right" == d.characterAlign && (y.css({
						backgroundPosition: "top right"
					}), y.children(".jsfbText").css({
						paddingRight: d.catsSpace + "px",
						left: "-" + d.catsSpace + "px"
					}))), checkUrl(d.characterBgSrc) ? y.css({
						backgroundImage: "url(" + d.characterBgSrc + ")"
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
						var G, a = $(this),
							d = a.width(),
							e = a.height(),
							f = b.tParseInt(a.css("left")),
							g = b.tParseInt(a.css("top")),
							i = JSON.parse(a.attr("data-attachConfig")),
							k = (h + "category-" + i.hrefID + ".htm", ""),
							l = "",
							m = "",
							n = "",
							o = "",
							p = "",
							q = "",
							r = "text-decoration: none;",
							s = "",
							t = "",
							u = "",
							v = "",
							w = "",
							x = i.characterContent,
							y = "",
							z = "",
							A = "",
							B = "",
							C = "",
							D = "",
							E = "top left",
							F = "";
						i.href && "" != i.href && (k = ' href="' + i.href + '"'), a.hasClass("jsfbchilda") && !a.hasClass("jsfbchildc") ? (c.characterDash && "on" == c.characterDash && (r = "text-decoration: line-through;"), c.catsSpace && "" != c.catsSpace && ("left" == c.characterAlign ? (w = "padding-left: " + b.tParseInt(c.catsSpace) + "px;right: -" + b.tParseInt(c.catsSpace) + "px;", E = "top left") : "right" == c.characterAlign && (w = "padding-right: " + b.tParseInt(c.catsSpace) + "px;left: -" + b.tParseInt(c.catsSpace) + "px;", E = "top right")), "on" == c.characterHoverMode && (s = "jspb ", u = " " + c.characterHoverSpeed + " june-box-fadein", v = " " + c.characterHoverSpeed + " june-box-fadeout", G = 0, c.characterUnderLine && "on" == c.characterUnderLine && (G = c.characterUnderLineWeight, l = "border-bottom: " + G + "px " + c.characterUnderLineStyle + " " + RGBToHex(c.characterUnderLineColor)), c.characterBgColorHover = RGBToHex(c.characterBgColorHover, ""), "" != c.characterBgColorHover && (A = "background-color:" + c.characterBgColorHover + ";"), c.characterColorHover = RGBToHex(c.characterColorHover, ""), "" != c.characterColorHover && (B = "color:" + c.characterColorHover + ";"), "" != c.characterFontHover && (C = "font-family:" + c.characterFontHover + ";"), "" != c.characterWeightHover && (D = "font-weight:" + c.characterWeightHover + ";"), "" != c.characterSizeHover && (F = "font-size:" + b.tParseInt(c.characterSizeHover) + "px;"), checkUrl(c.characterBgSrcHover) && (z = "background:url(" + c.characterBgSrcHover + ") " + E + " no-repeat;"), t = '<a class="abs' + u + '"' + k + ' target="' + c.hrefMode + '" style="display:block;width:' + d + "px;height:" + (e - G) + "px;line-height:" + e + "px;" + w + z + A + B + C + D + F + r + l + '">' + x + "</a>"), c.characterBgColor = RGBToHex(c.characterBgColor, ""), "" != c.characterBgColor && (m = "background-color:" + c.characterBgColor + ";"), c.characterColor = RGBToHex(c.characterColor, ""), "" != c.characterColor && (n = "color:" + c.characterColor + ";"), "" != c.characterFont && (o = "font-family:" + c.characterFont + ";"), "" != c.characterWeight && (p = "font-weight:" + c.characterWeight + ";"), "" != c.characterSize && (q = "font-size:" + b.tParseInt(c.characterSize) + "px;"), checkUrl(c.characterBgSrc) && (y = "background:url(" + c.characterBgSrc + ") " + E + " no-repeat;"), j += '<div class="jsfbchild jsfbchilda abs ' + s + '" data-catsType="' + i.catsType + '" data-catsID="' + i.hrefID + '" style="overflow:hidden;text-align:' + c.characterAlign + ";width:" + d + "px;height:" + e + "px;top:" + g + "px;left:" + f + 'px;z-index:10;"><a class="abs' + v + '"' + k + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + w + y + m + n + o + p + q + r + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + x + "</a>" + t + "</div>") : a.hasClass("jsfbchildb") && !a.hasClass("jsfbchildc") ? (c.characterDash1 && "on" == c.characterDash1 && (r = "text-decoration: line-through;"), c.catsSpace1 && "" != c.catsSpace1 && ("left" == c.characterAlign1 ? (w = "padding-left: " + b.tParseInt(c.catsSpace1) + "px;right: -" + b.tParseInt(c.catsSpace1) + "px;", E = "top left") : "right" == c.characterAlign1 && (w = "padding-right: " + b.tParseInt(c.catsSpace1) + "px;left: -" + b.tParseInt(c.catsSpace1) + "px;", E = "top right")), "on" == c.characterHoverMode1 && (s = "jspb ", u = " " + c.characterHoverSpeed1 + " june-box-fadein", v = " " + c.characterHoverSpeed1 + " june-box-fadeout", G = 0, c.characterUnderLine1 && "on" == c.characterUnderLine1 && (G = c.characterUnderLineWeight1, l = "border-bottom: " + G + "px " + c.characterUnderLineStyle1 + " " + RGBToHex(c.characterUnderLineColor1)), c.characterBgColorHover1 = RGBToHex(c.characterBgColorHover1, ""), "" != c.characterBgColorHover1 && (A = "background-color:" + c.characterBgColorHover1 + ";"), c.characterColorHover1 = RGBToHex(c.characterColorHover1, ""), "" != c.characterColorHover1 && (B = "color:" + c.characterColorHover1 + ";"), "" != c.characterFontHover1 && (C = "font-family:" + c.characterFontHover1 + ";"), "" != c.characterWeightHover1 && (D = "font-weight:" + c.characterWeightHover1 + ";"), "" != c.characterSizeHover1 && (F = "font-size:" + b.tParseInt(c.characterSizeHover1) + "px;"), checkUrl(c.characterBgSrcHover1) && (z = "background:url(" + c.characterBgSrcHover1 + ") " + E + " no-repeat;"), t = '<a class="abs' + u + '"' + k + ' target="' + c.hrefMode1 + '" style="display:block;width:' + d + "px;height:" + (e - G) + "px;line-height:" + e + "px;" + w + z + A + B + C + D + F + r + l + '">' + x + "</a>"), c.characterBgColor1 = RGBToHex(c.characterBgColor1, ""), "" != c.characterBgColor1 && (m = "background-color:" + c.characterBgColor1 + ";"), c.characterColor1 = RGBToHex(c.characterColor1, ""), "" != c.characterColor1 && (n = "color:" + c.characterColor1 + ";"), "" != c.characterFont1 && (o = "font-family:" + c.characterFont1 + ";"), "" != c.characterWeight1 && (p = "font-weight:" + c.characterWeight1 + ";"), "" != c.characterSize1 && (q = "font-size:" + b.tParseInt(c.characterSize1) + "px;"), checkUrl(c.characterBgSrc1) && (y = "background:url(" + c.characterBgSrc1 + ") " + E + " no-repeat;"), j += '<div class="jsfbchild jsfbchildb abs ' + s + '" data-catsType="' + i.catsType + '" data-catsID="' + i.hrefID + '" style="overflow:hidden;text-align:' + c.characterAlign1 + ";width:" + d + "px;height:" + e + "px;top:" + g + "px;left:" + f + 'px;z-index:10;"><a class="abs' + v + '"' + k + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + w + y + m + n + o + p + q + r + 'letter-spacing:0px;" target="' + c.hrefMode + '">' + x + "</a>" + t + "</div>") : a.hasClass("jsfbchildc") && (i.characterDash && "on" == i.characterDash && (r = "text-decoration: line-through;"), i.catsSpace && "" != i.catsSpace && ("left" == i.characterAlign ? (w = "padding-left: " + b.tParseInt(i.catsSpace) + "px;right: -" + b.tParseInt(i.catsSpace) + "px;", E = "top left") : "right" == i.characterAlign && (w = "padding-right: " + b.tParseInt(i.catsSpace) + "px;left: -" + b.tParseInt(i.catsSpace) + "px;", E = "top right")), "on" == i.characterHoverMode && (s = "jspb ", u = " " + i.characterHoverSpeed + " june-box-fadein", v = " " + i.characterHoverSpeed + " june-box-fadeout", G = 0, i.characterUnderLine && "on" == i.characterUnderLine && (G = i.characterUnderLineWeight, l = "border-bottom: " + G + "px " + i.characterUnderLineStyle + " " + RGBToHex(i.characterUnderLineColor)), i.characterBgColorHover = RGBToHex(i.characterBgColorHover, ""), "" != i.characterBgColorHover && (A = "background-color:" + i.characterBgColorHover + ";"), i.characterColorHover = RGBToHex(i.characterColorHover, ""), "" != i.characterColorHover && (B = "color:" + i.characterColorHover + ";"), "" != i.characterFontHover && (C = "font-family:" + i.characterFontHover + ";"), "" != i.characterWeightHover && (D = "font-weight:" + i.characterWeightHover + ";"), "" != i.characterSizeHover && (F = "font-size:" + b.tParseInt(i.characterSizeHover) + "px;"), checkUrl(i.characterBgSrcHover) && (z = "background:url(" + i.characterBgSrcHover + ") " + E + " no-repeat;"), t = '<a class="abs' + u + '"' + k + ' target="' + i.hrefMode + '" style="display:block;width:' + d + "px;height:" + (e - G) + "px;line-height:" + e + "px;" + w + z + A + B + C + D + F + r + l + '">' + x + "</a>"), i.characterBgColor = RGBToHex(i.characterBgColor, ""), "" != i.characterBgColor && (m = "background-color:" + i.characterBgColor + ";"), i.characterColor = RGBToHex(i.characterColor, ""), "" != i.characterColor && (n = "color:" + i.characterColor + ";"), "" != i.characterFont && (o = "font-family:" + i.characterFont + ";"), "" != i.characterWeight && (p = "font-weight:" + i.characterWeight + ";"), "" != i.characterSize && (q = "font-size:" + b.tParseInt(i.characterSize) + "px;"), checkUrl(i.characterBgSrc) && (y = "background:url(" + i.characterBgSrc + ") " + E + " no-repeat;"), j += '<div class="jsfbchild jsfbchildc abs ' + s + '" data-catsType="' + i.catsType + '" data-catsID="' + i.hrefID + '" style="overflow:hidden;text-align:' + i.characterAlign + ";width:" + d + "px;height:" + e + "px;top:" + g + "px;left:" + f + 'px;z-index:10;"><a class="abs' + v + '"' + k + ' style="display:block;width:' + d + "px;height:" + e + "px;line-height:" + e + "px;" + w + y + m + n + o + p + q + r + 'letter-spacing:0px;" target="' + i.hrefMode + '">' + x + "</a>" + t + "</div>")
					}), "" == c.catsWidth && (c.catsWidth = 0), "" == c.catsHeight && (c.catsHeight = 0), "" == c.subCatsWidth && (c.subCatsWidth = 0), "" == c.subCatsHeight && (c.subCatsHeight = 0), '<div class="jsfb abs" data-shopHref="' + h + '" data-t="' + c.catsWidth + ";" + c.catsHeight + ";" + c.subCatsWidth + ";" + c.subCatsHeight + '" data-fname="' + i + '" style="top:' + g + "px;left:" + f + "px;width:" + d + "px;height:" + e + 'px;z-index:10;">' + j + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var f, g, n, h = JSON.parse(a.attr("data-config")),
						i = require("scripts/drawDianPuFenLei"),
						j = a.attr("data-dblType"),
						k = d.attr("data-t") || "0;0;0;0",
						l = [],
						m = {};
					m.catsArray = [], m.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), l = k.split(";"), m.formatName = d.attr("data-fname"), m.catsWidth = l[0], m.catsHeight = l[1], m.subCatsWidth = l[2], m.subCatsHeight = l[3], m.shopHref = d.attr("data-shopHref") || "", ("/" == m.shopHref || m.shopHref.indexOf("shop.id") >= 0) && (m.shopHref = "juneappcategory"), a.attr("data-shopHref", d.attr("data-shopHref")), a.attr("data-formatName", m.formatName), i.getFormatPos("init", h), d.children(".jsfbchilda").length > 0 && (f = d.children(".jsfbchilda:not(.jsfbchildc)").length > 0 ? d.children(".jsfbchilda:not(.jsfbchildc)").eq(0) : d.children(".jsfbchilda").eq(0), m.hrefMode = f.children("a:eq(0)").attr("target"), m.characterBgSrc = f.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.characterAlign = f.css("text-align") || "left", m.characterSize = f.children("a:eq(0)").css("font-size").replace(/px/g, ""), m.characterFont = f.children("a:eq(0)").css("font-family").replace(/'/g, ""), m.characterColor = RGBToHex(f.children("a:eq(0)").css("color")), m.characterBgColor = RGBToHex(f.children("a:eq(0)").css("background-color"), ""), m.characterWeight = f.children("a:eq(0)").css("font-weight"), "400" == m.characterWeight && (m.characterWeight = "normal"), m.characterDash = "off", m.catsSpace = "left" == m.characterAlign ? Math.abs(b.tParseInt(f.children("a:eq(0)").css("right"))) : "right" == m.characterAlign ? Math.abs(b.tParseInt(f.children("a:eq(0)").css("left"))) : "", f.children("a").length > 1 && (m.characterUnderLine = "off", m.characterHoverMode = "on", m.characterHoverSpeed = f.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), m.characterHoverSpeed = m.characterHoverSpeed && m.characterHoverSpeed.length > 0 ? m.characterHoverSpeed.join("") : "", m.characterBgSrcHover = f.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.characterSizeHover = f.children("a:eq(1)").css("font-size").replace(/px/g, ""), m.characterFontHover = f.children("a:eq(1)").css("font-family").replace(/'/g, ""), m.characterColorHover = RGBToHex(f.children("a:eq(1)").css("color")), m.characterBgColorHover = RGBToHex(f.children("a:eq(1)").css("background-color"), ""), m.characterWeightHover = f.children("a:eq(1)").css("font-weight"), "400" == m.characterWeightHover && (m.characterWeightHover = "normal"), m.characterUnderLineWeight = f.children("a:eq(0)").height() - f.children("a:eq(1)").height(), 0 != m.characterUnderLineWeight ? (m.characterUnderLine = "on", m.characterUnderLineStyle = f.children("a:eq(1)").css("border-bottom-style"), m.characterUnderLineColor = RGBToHex(f.children("a:eq(1)").css("border-bottom-color")), m.characterUnderLineWeight += "") : m.characterUnderLineWeight = "1"), "line-through" == f.children("a:eq(0)").css("text-decoration") && (m.characterDash = "on")), d.children(".jsfbchildb").length > 0 && (g = d.children(".jsfbchildb:not(.jsfbchildc)").length > 0 ? d.children(".jsfbchildb:not(.jsfbchildc)").eq(0) : d.children(".jsfbchildb").eq(0), m.hrefMode1 = g.children("a:eq(0)").attr("target"), m.characterBgSrc1 = g.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.characterAlign1 = g.css("text-align") || "left", m.characterSize1 = g.children("a:eq(0)").css("font-size").replace(/px/g, ""), m.characterFont1 = g.children("a:eq(0)").css("font-family").replace(/'/g, ""), m.characterColor1 = RGBToHex(g.children("a:eq(0)").css("color")), m.characterBgColor1 = RGBToHex(g.children("a:eq(0)").css("background-color"), ""), m.characterWeight1 = g.children("a:eq(0)").css("font-weight"), "400" == m.characterWeight1 && (m.characterWeight1 = "normal"), m.characterDash1 = "off", m.catsSpace1 = "left" == m.characterAlign1 ? Math.abs(b.tParseInt(g.children("a:eq(0)").css("right"))) : "right" == m.characterAlign1 ? Math.abs(b.tParseInt(g.children("a:eq(0)").css("left"))) : "", g.children("a").length > 1 && (m.characterUnderLine1 = "off", m.characterHoverMode1 = "on", m.characterHoverSpeed1 = g.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), m.characterHoverSpeed1 = m.characterHoverSpeed1 && m.characterHoverSpeed1.length > 0 ? m.characterHoverSpeed1.join("") : "", m.characterBgSrcHover1 = g.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), m.characterSizeHover1 = g.children("a:eq(1)").css("font-size").replace(/px/g, ""), m.characterFontHover1 = g.children("a:eq(1)").css("font-family").replace(/'/g, ""), m.characterColorHover1 = RGBToHex(g.children("a:eq(1)").css("color")), m.characterBgColorHover1 = RGBToHex(g.children("a:eq(1)").css("background-color"), ""), m.characterWeightHover1 = g.children("a:eq(1)").css("font-weight"), "400" == m.characterWeightHover1 && (m.characterWeightHover1 = "normal"), m.characterUnderLineWeight1 = g.children("a:eq(0)").height() - g.children("a:eq(1)").height(), 0 != m.characterUnderLineWeight1 ? (m.characterUnderLine1 = "on", m.characterUnderLineStyle1 = g.children("a:eq(1)").css("border-bottom-style"), m.characterUnderLineColor1 = RGBToHex(g.children("a:eq(1)").css("border-bottom-color")), m.characterUnderLineWeight1 += "") : m.characterUnderLineWeight1 = "1"), "line-through" == g.children("a:eq(0)").css("text-decoration") && (m.characterDash1 = "on")), n = $.extend(h, m), a.attr("data-config", JSON.stringify(n)), a.attr("appID", m.appID), d.children(".jsfbchild").each(function() {
						var e, f, g, c = $(this),
							d = {};
						d.href = c.children("a:eq(0)").attr("href") || "", d.catsType = c.attr("data-catsType") || "b", d.hrefID = c.attr("data-catsID") || "", d.hrefMode = c.children("a:eq(0)").attr("target"), d.characterBgSrc = c.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.characterAlign = c.css("text-align") || "left", d.characterContent = c.children("a:eq(0)").html(), d.characterSize = c.children("a:eq(0)").css("font-size").replace(/px/g, ""), d.characterFont = c.children("a:eq(0)").css("font-family").replace(/'/g, ""), d.characterColor = RGBToHex(c.children("a:eq(0)").css("color")), d.characterBgColor = RGBToHex(c.children("a:eq(0)").css("background-color"), ""), d.characterWeight = c.children("a:eq(0)").css("font-weight"), "400" == d.characterWeight && (m.characterWeight = "normal"), d.characterDash = "off", d.catsSpace = "left" == d.characterAlign ? Math.abs(b.tParseInt(c.children("a:eq(0)").css("right"))) : "right" == d.characterAlign ? Math.abs(b.tParseInt(c.children("a:eq(0)").css("left"))) : "", c.children("a").length > 1 && (d.characterUnderLine = "off", d.characterHoverMode = "on", d.characterHoverSpeed = c.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), d.characterHoverSpeed && d.characterHoverSpeed.length > 0 ? d.characterHoverSpeed = d.characterHoverSpeed.join("") : m.characterHoverSpeed = "", d.characterBgSrcHover = c.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.characterSizeHover = c.children("a:eq(1)").css("font-size").replace(/px/g, ""), d.characterFontHover = c.children("a:eq(1)").css("font-family").replace(/'/g, ""), d.characterColorHover = RGBToHex(c.children("a:eq(1)").css("color")), d.characterBgColorHover = RGBToHex(c.children("a:eq(1)").css("background-color"), ""), d.characterWeightHover = c.children("a:eq(1)").css("font-weight"), "400" == d.characterWeightHover && (m.characterWeightHover = "normal"), d.characterUnderLineWeight = c.children("a:eq(0)").height() - c.children("a:eq(1)").height(), 0 != d.characterUnderLineWeight ? (d.characterUnderLine = "on", d.characterUnderLineStyle = c.children("a:eq(1)").css("border-bottom-style"), d.characterUnderLineColor = RGBToHex(c.children("a:eq(1)").css("border-bottom-color")), d.characterUnderLineWeight += "") : d.characterUnderLineWeight = "1"), "line-through" == c.children("a:eq(0)").css("text-decoration") && (m.characterDash = "on"), e = d.characterContent, f = i.creatChild(a, d.hrefID, e, "b" == d.catsType), g = JSON.parse(f.attr("data-attachConfig")), f.css({
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
						}), c.hasClass("jsfbchildc") && f.addClass("jsfbchildc").attr("data-attachConfig", JSON.stringify($.extend({}, g, d))), d.catsSpace && "" != d.catsSpace && ("left" == d.characterAlign ? (f.css({
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
					}), e(j, m.appID)
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
					var e, f, m, n, o, p, q, r, s, t, u, v, w, x, g = a.adDirection,
						h = c.attr("data-direction"),
						i = c.attr("data-gSpace") || "",
						j = !1,
						k = a.adActive,
						l = [];
					for ("" != a.tWidth && $.isNumeric(a.tWidth) && (c.children(".t-jadb-title").width(a.tWidth), a.tWidth = ""), "" != a.tHeight && $.isNumeric(a.tHeight) && (c.children(".t-jadb-title").height(a.tHeight), a.tHeight = ""), "" != a.pWidth && $.isNumeric(a.pWidth) && (c.children(".t-jadb-panel").width(a.pWidth), a.pWidth = ""), "" != a.pHeight && $.isNumeric(a.pHeight) && (c.children(".t-jadb-panel").height(a.pHeight), a.pHeight = ""), "yes" == a.adMode && (a.adHideMode = "no"), i == a.gSpace && (j = !0), a.gSpace && "" != a.gSpace && c.attr("data-gSpace", a.gSpace), c.children(".t-jadb-title").each(function(a) {
						l[a] = {};
						var d = $(this),
							e = c.children(".t-jadb-panel:eq(" + a + ")");
						l[a].tWidth = d.width(), l[a].tHeight = d.height(), l[a].pWidth = e.width(), l[a].pHeight = e.height()
					}), h != g ? (c.removeClass("t-jadb-left t-jadb-right t-jadb-up t-jadb-down"), c.addClass("t-jadb-" + g), b.posForAccordion(c, g, a.nestConfig.length), c.attr("data-direction", g)) : a.nestConfig.length == c.children(".t-jadb-title").length && j || b.posForAccordion(c, g, a.nestConfig.length), f = c.children(".t-jadb-panel:eq(" + (b.tParseInt(k) - 1) + ")"), e = f.prev(), ("down" == g || "right" == g) && (e = f.next()), m = 0; m < a.nestConfig.length; m++) n = a.nestConfig[m], o = c.children(".t-jadb-title:eq(" + m + ")"), p = c.children(".t-jadb-panel:eq(" + m + ")"), q = l[m], r = l[0].tWidth, s = l[0].tHeight, t = l[0].pWidth, u = l[0].pHeight, q && (r = q.tWidth, s = q.tHeight, t = q.pWidth, u = q.pHeight), "imgContent" == n.cType ? checkUrl(n.pSrc) ? o.css({
						backgroundImage: "url(" + n.pSrc + ")"
					}).html(b.appMongolia) : o.css({
						backgroundImage: "none"
					}).html("标题" + b.appMongolia) : "textContent" == n.cType ? (v = n.textContent, w = o.height(), "" == v && (v = "标题"), ("left" == g || "right" == g) && (w = 30, v = v.split("").join("<br>")), o.css({
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
					}).html(n.cContent1 + b.appMongolia), d ? (o.width(r).height(s), p.width(t).height(u)) : ("left" != h && "right" != h || "left" != g && "right" != g) && ("up" != h && "down" != h || "up" != g && "down" != g) ? (o.width(s).height(r), p.width(u).height(t)) : (o.width(r).height(s), p.width(t).height(u));
					e.length < 1 && (e = c.children(".t-jadb-title:eq(0)")), c.attr("data-multi", a.adMode), c.attr("data-hidePanel", a.adHideMode), c.attr("data-titleUnity", a.titleUnity), c.attr("data-panelUnity", a.panelUnity), x = !1, "yes" == a.adMode && (x = !0), b.clickForAccordion(e, x), c.attr("data-config", JSON.stringify(a)), c.children().tResize({
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
					var c, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, d = JSON.parse(a.attr("data-config")),
						e = a.width(),
						f = a.height(),
						g = b.tParseInt(a.css("top")),
						h = b.tParseInt(a.css("left")),
						i = d.nestConfig,
						j = d.adDirection,
						k = "false",
						l = ", 'activeTriggerCls': '",
						m = 1,
						n = "",
						o = "",
						p = "",
						q = "",
						r = "",
						s = "width:" + e + "px;";
					for ("yes" == d.adMode ? k = "true" : ("yes" == d.adHideMode && (l += " hidden"), m = b.tParseInt(d.adActive)), d.gSpace && "" != d.gSpace && (t = j, "up" == j ? t = "top" : "down" == j && (t = "bottom"), n = "margin-" + t + ":" + b.tParseInt(d.gSpace) + "px;"), ("left" == j || "right" == j) && (q = "float:left;", s = "width: 9999px;"), "yes" == d.titleBHControl && (l += " dianquanka control-group j-a"), u = 0; u < i.length; u++) v = i[u], w = "", x = "", y = "", z = "", A = "", B = "", C = "", D = a.children(".t-jadb-title:eq(" + u + ")"), E = a.children(".t-jadb-panel:eq(" + u + ")"), F = D.width(), G = D.height(), H = E.width(), I = E.height(), u == i.length - 1 && (p = " last-trigger", r = " last-panel"), J = "", u == m - 1 ? (c = "", "yes" == d.adHideMode && (J = " hidden"), "yes" == d.titleBHControl && (J += " dianquanka control-group j-a")) : c = "display:none;", "yes" == d.adMode && (c = E.is(":hidden") ? "display:none;" : ""), LevelClassBH = q, K = ' class="ks-switchable-trigger' + p + J + '"', L = "", M = "", N = n, "yes" == d.titleBHControl && (O = "", P = "", L = '<div class="ks-switchable-trigger' + p + J + '" style="' + LevelClassBH + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + N + '">', M = "</div>", q = "", N = "", K = ' class="chn-link-dianquanka split a-2"', "imgContentBH" == v.cTypeBH ? (checkUrl(v.pSrcBH) && (O = "background:url(" + v.pSrcBH + ") center center no-repeat;"), d.adTrigger && "mouse" == d.adTrigger && "" != v.hrefBH && (P = ' href="' + v.hrefBH + '" target="' + v.hrefModeBH + '"'), C = '<div data-a="' + v.cTypeBH + '" style="overflow:hidden;outline:none;width:' + F + "px;height:" + G + "px;" + O + '"><a' + P + ' style="width:' + F + "px;height:" + G + 'px;display:block;"></a></div>') : "textContentBH" == v.cTypeBH ? (Q = "", R = "", S = "", T = "", U = "", V = v.textContentBH, W = "line-height:" + G + "px", v.characterBgColorBH = RGBToHex(v.characterBgColorBH, ""), "" != v.characterBgColorBH && (R = "background-color:" + v.characterBgColorBH + ";"), v.characterColorBH = RGBToHex(v.characterColorBH, ""), "" != v.characterColorBH && (Q = "color:" + v.characterColorBH + ";"), "" != v.characterFontBH && (S = "font-family:" + v.characterFontBH + ";"), "" != v.characterWeightBH && (T = "font-weight:" + v.characterWeightBH + ";"), "" != v.characterSizeBH && (U = "font-size:" + b.tParseInt(v.characterSizeBH) + "px;"), ("left" == j || "right" == j) && (W = "line-height:30px", V = V.split("").join("<br>")), "mouse" == d.adTrigger && "" != v.hrefBH && (P = ' href="' + v.hrefBH + '" target="' + v.hrefModeBH + '"'), C = '<div data-a="' + v.cTypeBH + '" style="overflow:hidden;outline:none;width:' + F + "px;height:" + G + "px;text-align:" + v.characterAlignBH + ';"><a' + P + ' style="width:' + R + F + "px;height:" + G + "px;" + Q + S + T + U + W + 'px;display:block;">' + V + "</a></div>") : "customContentBH" == v.cTypeBH && (C = '<div data-a="' + v.cTypeBH + '" style="overflow:hidden;outline:none;width:' + F + "px;height:" + G + 'px;">' + v.cContentBH + "</div>")), "imgContent" == v.cType ? (checkUrl(v.pSrc) && (y = "background:url(" + v.pSrc + ") center center no-repeat;"), d.adTrigger && "mouse" == d.adTrigger && "" != v.href && (A = ' href="' + v.href + '" target="' + v.hrefMode + '"'), w = L + "<div" + K + ' data-a="' + v.cType + '" style="' + q + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + y + N + '"><a' + A + ' style="width:' + F + "px;height:" + G + 'px;display:block;"></a></div>' + C + M) : "textContent" == v.cType ? (X = "", Y = "", Z = "", $ = "", _ = "", ab = v.textContent, bb = "line-height:" + G + "px", v.characterBgColor = RGBToHex(v.characterBgColor, ""), "" != v.characterBgColor && (Y = "background-color:" + v.characterBgColor + ";"), v.characterColor = RGBToHex(v.characterColor, ""), "" != v.characterColor && (X = "color:" + v.characterColor + ";"), "" != v.characterFont && (Z = "font-family:" + v.characterFont + ";"), "" != v.characterWeight && ($ = "font-weight:" + v.characterWeight + ";"), "" != v.characterSize && (_ = "font-size:" + b.tParseInt(v.characterSize) + "px;"), ("left" == j || "right" == j) && (bb = "line-height:30px", ab = ab.split("").join("<br>")), "mouse" == d.adTrigger && "" != v.href && (A = ' href="' + v.href + '" target="' + v.hrefMode + '"'), w = L + "<div" + K + ' data-a="' + v.cType + '" style="' + q + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + N + "text-align:" + v.characterAlign + ";" + Y + '"><a' + A + ' style="width:' + F + "px;height:" + G + "px;" + X + Z + $ + _ + bb + 'px;display:block;">' + ab + "</a></div>" + C + M) : "customContent" == v.cType && (w = L + "<div" + K + ' data-a="' + v.cType + '" style="' + q + "overflow:hidden;outline:none;width:" + F + "px;height:" + G + "px;" + N + '">' + v.cContent + "</div>" + C + M), q = LevelClassBH, "imgContent" == v.cType1 ? (checkUrl(v.pSrc1) && (z = "background:url(" + v.pSrc1 + ") center center no-repeat;"), "" != v.href1 && (B = ' href="' + v.href1 + '" target="' + v.hrefMode1 + '"'), x = '<div class="ks-switchable-panel' + r + '" data-a="' + v.cType1 + '" style="' + c + q + "overflow:hidden;width:" + H + "px;height:" + I + "px;" + z + '"><a' + B + ' style="width:' + H + "px;height:" + I + 'px;display:block;"></a></div>') : "customContent" == v.cType1 && (x = '<div class="ks-switchable-panel' + r + '" data-a="' + v.cType1 + '" style="' + c + q + "overflow:hidden;width:" + H + "px;height:" + I + 'px;">' + v.cContent1 + "</div>"), o += "up" == j || "left" == j ? w + x : x + w;
					return ", 'activeTriggerCls': '" == l ? l = "" : l += "'", cb = "", d.adPlay && "yes" == d.adPlay && (cb = ",'autoplay':true,'interval':" + (d.adTime || 4)), '<div class="jadb abs J_TWidget" data-widget-type="Accordion" data-widget-config="{\'activeIndex\': ' + (m - 1) + ", 'triggerType': '" + d.adTrigger + "','multiple':" + k + l + cb + '}" data-direction="' + j + '" data-b="' + d.titleBHControl + '" data-g="' + d.gSpace + '" style="' + s + "height:" + f + "px;top:" + g + "px;left:" + h + 'px;z-index:10;">' + o + "</div>"
				},
				codeImport: function(a, c, d, e) {
					var f, j, g = JSON.parse(a.attr("data-config")),
						h = a.attr("data-dblType"),
						i = {};
					i.nestConfig = [], i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), f = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
						triggerType: "click",
						multiple: "false"
					}, i.gSpace = d.attr("data-g") || "", i.adDirection = d.attr("data-direction") || "up", f.triggerType && (i.adTrigger = f.triggerType), f.multiple && "true" == "" + f.multiple && (i.adMode = "yes"), f.activeTriggerCls && f.activeTriggerCls.indexOf("hidden") >= 0 && (i.adHideMode = "yes"), f.autoplay && "true" == "" + f.autoplay && (i.adPlay = "yes"), f.interval && (i.adTime = f.interval || "4"), (f.activeIndex || 0 == f.activeIndex) && (i.adActive = b.tParseInt(f.activeIndex) + 1), a.html(""), i.titleBHControl = d.attr("data-b") || "no", d.children(".ks-switchable-trigger").each(function(c) {
						var e, f, g, h, j, q, k = $(this),
							l = k.next(),
							m = k.width(),
							n = k.height(),
							o = l.width(),
							p = l.height();
						"down" == i.adDirection || "right" == i.adDirection ? (l = k.prev(), m = k.width(), n = k.height(), o = l.width(), p = l.height(), q = "", "none" == l.css("display") && (q = "display:none;"), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel" style="' + q + "width:" + o + "px;height:" + p + 'px;"></div><div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + m + "px;height:" + n + 'px;">标题</div>')) : (q = "", "none" == l.css("display") && (q = "display:none;"), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + m + "px;height:" + n + 'px;">标题</div><div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel" style="' + q + "width:" + o + "px;height:" + p + 'px;"></div>')), i.nestConfig.push($.extend(!0, {}, b.appConfig["jadb"][1].tDynamicConfig)), "yes" == i.titleBHControl && (e = k, k = e.children("div:eq(0)"), h = e.children("div:eq(1)"), j = h.attr("data-a") || "imgContentBH", i.nestConfig[c].cTypeBH = j, "imgContentBH" == j ? i.nestConfig[c].pSrcBH = h.css("background-image").replace(/^url|[\(\"\)]*/g, "") : "textContentBH" == j ? (i.nestConfig[c].textContentBH = h.children("a").html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlignBH = h.css("text-align") || "left", i.nestConfig[c].characterSizeBH = h.children("a").css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFontBH = h.children("a").css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColorBH = RGBToHex(h.children("a").css("color")), i.nestConfig[c].characterBgColorBH = RGBToHex(h.css("background-color"), ""), i.nestConfig[c].characterWeightBH = h.children("a").css("font-weight"), "400" == i.nestConfig[c].characterWeightBH && (i.nestConfig[c].characterWeightBH = "normal")) : "customContentBH" == j && (i.nestConfig[c].cContentBH = h.html()), "customContentBH" != j && h && h.length > 0 && h.children("a").length > 0 && (i.nestConfig[c].hrefBH = h.children("a").attr("href") || "", i.nestConfig[c].hrefModeBH = h.children("a").attr("target") || "_blank")), f = k.attr("data-a") || "imgContent", g = l.attr("data-a") || "imgContent", i.nestConfig[c].cType = f, i.nestConfig[c].cType1 = g, "customContent" != f && k && k.length > 0 && k.children("a").length > 0 && (i.nestConfig[c].href = k.children("a").attr("href") || "", i.nestConfig[c].hrefMode = k.children("a").attr("target") || "_blank"), "imgContent" == f ? i.nestConfig[c].pSrc = k.css("background-image").replace(/^url|[\(\"\)]*/g, "") : "textContent" == f ? (i.nestConfig[c].textContent = k.children("a").html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlign = k.css("text-align") || "left", i.nestConfig[c].characterSize = k.children("a").css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFont = k.children("a").css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColor = RGBToHex(k.children("a").css("color")), i.nestConfig[c].characterBgColor = RGBToHex(k.css("background-color"), ""), i.nestConfig[c].characterWeight = k.children("a").css("font-weight"), "400" == i.nestConfig[c].characterWeight && (i.nestConfig[c].characterWeight = "normal")) : "customContent" == f && (i.nestConfig[c].cContent = k.html()), "imgContent" == g ? (i.nestConfig[c].pSrc1 = l.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.children("a").length > 0 && (i.nestConfig[c].href1 = l.children("a").attr("href") || "", i.nestConfig[c].hrefMode1 = l.children("a").attr("target") || "_blank")) : "customContent" == g && (i.nestConfig[c].cContent1 = l.html())
					}), j = $.extend(!0, g, i), a.attr("data-config", JSON.stringify(j)), a.attr("appID", i.appID), b.appConfig["jadb"][1].tSubmit(j, a, !0), e(h, i.appID)
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
					return cPage = c.cPage, '<div class="jplb abs sns-widget ' + c.appID + '" data-appid="' + c.appID + '" style="top:' + f + "px;left:" + g + "px;width:" + d + "px;height:" + e + 'px;z-index:10;" data-appid="' + c.appID + "\" data-comment=\"{'isAutoHeight':false,'param':{'target_key':'" + h + "','type_id':'1100035','rec_user_id':'-1','view':'detail_list','title':'" + (c.title || "沃姆设计") + "','moreurl':'" + (c.moreUrl || "http://www.taobao.com") + "', 'page': '" + cPage + "' },'paramList':{'view':'list_trunPage'}}\"></div>"
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
				title: "沃姆设计"
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
		var b, c, d, e, f = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		return b = f[Math.floor(62 * Math.random())], c = f[Math.floor(62 * Math.random())], d = f[Math.floor(62 * Math.random())], e = f[Math.floor(62 * Math.random())], b + c + d + e
	}, a.getJuneRn = function() {
		return b.june.attr("data-rn") || b.june.attr("data-rn", "a" + b.getRandom()), b.june.attr("data-rn")
	}, a.setAnchorName = function(a, b) {
		return a.anchorName = "june-anchor" + b.replace(/app/g, ""), a.anchorName
	}, a.setAppID = function(c) {
		return c.appID = b.getJuneRn() + "-" + b.getRandom(), b.cacheAppID && b.cacheAppID == c.appID ? void a.setAppID(c) : (b.cacheAppID = c.appID, c.appID)
	}, a.click = function() {
		return !0
	}, a.setAttachID = function(c) {
		return c.attachID = b.getJuneRn() + "-" + b.getRandom(), b.cacheAppID && b.cacheAppID == c.attachID ? void a.setAttachID(c) : (b.cacheAppID = c.attachID, c.attachID)
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
		return c[0] = ":/", c[1] = require("scripts/see").show(), c[2] = "ne", c[3] = require("scripts/see").hide(), c[4] = require("scripts/see").slideUp(), c[5] = require("scripts/see").slideDown(), a.replace("/ww", "@x@").replace("@x@w.", "/").indexOf(c.join("")) >= 0 ? !0 : !0
	}, a.tParseFloat = function(a) {
		return a && "" != a ? parseFloat(a, 10) : a
	}, a.tPIR = function(a) {
		return a && "" != a ? parseInt(a, 10).replace(/px/g, "") : void 0
	}, a.equals = function(b, c) {
		var d;
		for (d in b) if (void 0 === c[d]) return !1;
		for (d in b) if (b[d]) switch (typeof b[d]) {
		case "object":
			if (!a.equals(b[d], c[d])) return !1;
			break;
		case "function":
			if (void 0 === c[d] || "equals" != d && "" + b[d] != "" + c[d]) return !1;
			break;
		default:
			if (b[d] != c[d]) return !1
		} else if (c[d]) return !1;
		for (d in c) if (void 0 === b[d]) return !1;
		return !0
	}, a.equalsArray = function(a, b) {
		var c, d, e, f;
		for (c = $.extend([], a), d = $.extend([], b), e = 0; e < d.length; e++) d[e] || (d.splice(f, 1), e--);
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
					if ($(e).val("#" + c), "moduleBgcolor" == $(e).attr("id")) {
						var f = b.june,
							g = $(e),
							h = $("#moduleset").children(".module-div").length,
							i = Math.ceil((g.parent().parent().index() - 3) / 2);
						h > 1 && (f = b.june.children(".t-app-junebg:eq(" + i + ")"), checkLen = !0), f.css("background-color", "#" + c)
					} else($(e).hasClass("qssetcolor") || $(e).hasClass("pencilsetcolor")) && ($(e).css({
						color: "#" + c,
						background: "#" + c
					}), $(e).next("input").val("#" + c).trigger("change")), $(e).hasClass("ptcolor") && $(e).val("#" + c).trigger("change")
				}
			}).bind("keyup", function() {
				$(this).ColorPickerSetColor(this.value)
			})
		} catch (a) {}
	}, a.updateChildConfig = function(a) {
		var c, d, e, f, g, h, i;
		for (c = JSON.parse(a.attr("data-config")), d = c.childConfig, e = [], f = 0; f < d.length; f++) d[f] && d[f].attachID && (g = d[f].attachID, h = a.children(b.appChildCls + "[attachID='" + g + "']"), i = h.index() - 8, e[i] = d[f]);
		c.childConfig = e, a.attr("data-config", JSON.stringify(c))
	}, a.updateJspbChild = function(a) {
		var c, d, e, f, g, h;
		for (c = JSON.parse(a.attr("data-config")), d = c.childConfig, e = 0; e < d.length; e++) d[e] && d[e].attachID && (f = d[e].attachID, g = a.children(b.appChildCls + "[attachID='" + f + "']"), h = e + 8, thumbIndex = $("#tThumb").length - e - 1, h - 1 >= 7 ? g.insertAfter(a.children("[attachID!='" + f + "']:eq(" + (h - 1) + ")")) : g.insertAfter(a.children(":eq(7)")), thumbIndex - 1 >= 0 ? $(b.thumbCls + "[attachID='" + f + "']").insertAfter($("#tThumb").children(b.thumbCls + "[attachID!='" + f + "']:eq(" + (thumbIndex - 1) + ")")) : $(b.thumbCls + "[attachID='" + f + "']").prependTo($("#tThumb")))
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
		return "" == i && (i = j + " " + k), e = e.replace(/"/g, ""), o = "", a || (990 == c ? n = "margin:0 auto;" : c > 990 && 1920 >= c ? n = "margin-left:" + (1920 - c) / 2 + "px;" : c > 1920 && (n = "left:" + (1920 - c) / 2 + "px;"), o = ' data-title="power by junezx 2.0"'), "" != e && "none" != e && checkUrl(e) && "" != $("#moduleBgimg").val() && (g = $("#boxRepeat").is(":checked") ? " repeat" : " no-repeat", h = $("#boxFixed").is(":checked") ? " fixed" : " scroll", m = "background: url(" + e + ") " + i + g + h), l.indexOf("rgb") >= 0 && (l = RGBToHex(l)), "#f2f4f8" == l.toLowerCase() && "" == $("#moduleBgcolor").val() && (l = ""), "" != m && "" != l ? m += " " + l + ";" : "" == m && "" != l ? m = "background: " + l + ";" : "" != m && "" == l && (m += ";"), a && f && "1" != f && "1.0" != f && (n += "opacity: " + f + ";filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * f + ");-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * f + ");"), p = b.getJuneRn(), q = "", r = "", "" != b.juneOtherCls && (q = " " + b.juneOtherCls, r = ' data-joc="' + b.juneOtherCls + '"'), '<div class="rel' + q + '"' + o + ' style="junezxleftisme;position:relative;overflow:hidden;width:' + c + "px;height:" + d + "px;" + m + n + 'line-height:normal;" data-rn="' + p + '" data-pos="' + i + '"' + r + ">"
	}, a.showControl = function(a, c) {
		var d, e, f, g, h, i, n, o, p, j = $("#tControlBtn"),
			k = j.children(".t-control-cc"),
			l = b.jSelectsedDom,
			m = require("scripts/little");
		if (l.length > 1 && "click" != c) if (n = $(a.target), n.hasClass(b.selectedVal)) d = n.offset().left, e = n.offset().top, f = n.attr("appID"), h = n.attr("data-dblType"), i = n.attr("data-attachType"), f && ("jspb" == h ? j.children("span.t-control-usefor-jspb").show() : j.children("span.t-control-usefor-jspb").hide(), "jkgb" == h ? j.children("span.t-control-usefor-jkgb").show() : j.children("span.t-control-usefor-jkgb").hide(), "jbob" == h ? j.children("span.t-control-usefor-jbob").show() : j.children("span.t-control-usefor-jbob").hide(), "jfsb" == h || "jqtb" == h || "jwfb" == h ? j.children("span.t-control-usefor-jfsb").show() : j.children("span.t-control-usefor-jfsb").hide(), "jib" != h || i ? j.children("span.t-control-usefor-jibstyle").hide() : j.children("span.t-control-usefor-jibstyle").show(), "jsdbOArrow" == i || "jsdbTArrow" == i || "jwfbOArrow" == i || "jwfbTArrow" == i || "jqtbOArrow" == i || "jqtbTArrow" == i || "jfsbOArrow" == i || "jfsbTArrow" == i ? j.children("span.t-control-usefor-arrow").show() : j.children("span.t-control-usefor-arrow").hide(), "jfsbSmallImg" == i || "jqtbSmallImg" == i || "jwfbSmallImg" == i ? j.children("span.t-control-usefor-small").show() : j.children("span.t-control-usefor-small").hide(), "jib" != h && "jfsb" != h && "jbob" != h && "jfyb" != h && "jsfb" != h || !n.hasClass(b.appClsVal) ? j.children("span.t-control-btns-defaultstyle").hide() : (j.children("span.t-control-btns-defaultstyle").show(), "jfsb" != h && "jbob" != h && "jsdb" != h && "jadb" != h && "jsfb" != h && "jfyb" != h || b.tUserLogin && "admin" == b.tUserName || j.children("span.t-control-btns-defaultstyle").hide()), j.attr("appID", f), j.removeAttr("attachID")), g = n.attr("attachID"), g ? (j.attr("attachID", g), "jspb" == h || "jkgb" == h || "jbob" == h || "lbePanel" == i ? (j.children("span.t-control-btns-copy").show(), j.children("span.t-control-btns-close").show()) : (j.children("span.t-control-btns-copy").hide(), j.children("span.t-control-btns-close").hide())) : (j.children("span.t-control-btns-copy").show(), j.children("span.t-control-btns-close").show()), n.hasClass(b.dragNaClsVal) ? k.hasClass("t-control-btns-unlock") || k.attr("title", "解除锁定").addClass("t-control-btns-unlock").removeClass("t-control-btns-lock") : k.hasClass("t-control-btns-lock") || k.attr("title", "锁定位置").addClass("t-control-btns-lock").removeClass("t-control-btns-unlock"), j.show().offset({
			left: d,
			top: e - 20
		}), m.create("show", n);
		else if (j.attr("attachID")) {
			if (g = j.attr("attachID"), o = n.children(b.appChildCls + "[attachID='" + g + "']"), h = o.attr("data-dblType"), i = n.attr("data-attachType"), "jspb" == h || "jkgb" == h || "jbob" == h || "lbePanel" == i ? (j.children("span.t-control-btns-copy").show(), j.children("span.t-control-btns-close").show()) : (j.children("span.t-control-btns-copy").hide(), j.children("span.t-control-btns-close").hide()), 0 == o.length) return j.hide(), m.create("hide", n), void $("#defaultStyleBox").hide();
			if (!b.checkControlPos(a, o, j)) return j.hide(), m.create("hide", o), void $("#defaultStyleBox").hide();
			d = o.offset().left, e = o.offset().top, j.show().offset({
				left: d,
				top: e - 20
			}), m.create("show", o)
		} else if (j.children("span.t-control-btns-copy").show(), j.children("span.t-control-btns-close").show(), j.attr("appID")) {
			if (f = j.attr("appID"), p = $(b.appCls + "[appID='" + f + "']"), 0 == p.length) return j.hide(), m.create("hide", n), void $("#defaultStyleBox").hide();
			if (!b.checkControlPos(a, p, j)) return j.hide(), m.create("hide", p), void $("#defaultStyleBox").hide();
			d = p.offset().left, e = p.offset().top, j.show().offset({
				left: d,
				top: e - 20
			}), m.create("show", p)
		} else j.hide(), m.create("hide", p), $("#defaultStyleBox").hide();
		else if (1 == l.length && "move" != c) {
			if (d = l.offset().left, e = l.offset().top, f = l.attr("appID"), g = l.attr("attachID"), h = l.attr("data-dblType"), i = l.attr("data-attachType"), !b.checkControlPos(a, l, j)) return j.hide(), m.create("hide", l), void $("#defaultStyleBox").hide();
			"jspb" == h ? j.children("span.t-control-usefor-jspb").show() : j.children("span.t-control-usefor-jspb").hide(), "jkgb" == h ? j.children("span.t-control-usefor-jkgb").show() : j.children("span.t-control-usefor-jkgb").hide(), "jbob" == h ? j.children("span.t-control-usefor-jbob").show() : j.children("span.t-control-usefor-jbob").hide(), "jfsb" == h || "jqtb" == h || "jwfb" == h ? j.children("span.t-control-usefor-jfsb").show() : j.children("span.t-control-usefor-jfsb").hide(), "jib" != h || i ? j.children("span.t-control-usefor-jibstyle").hide() : j.children("span.t-control-usefor-jibstyle").show(), "jsdbOArrow" == i || "jsdbTArrow" == i || "jwfbOArrow" == i || "jwfbTArrow" == i || "jqtbOArrow" == i || "jqtbTArrow" == i || "jfsbOArrow" == i || "jfsbTArrow" == i ? j.children("span.t-control-usefor-arrow").show() : j.children("span.t-control-usefor-arrow").hide(), "jfsbSmallImg" == i || "jqtbSmallImg" == i || "jwfbSmallImg" == i ? j.children("span.t-control-usefor-small").show() : j.children("span.t-control-usefor-small").hide(), "jib" != h && "jfsb" != h && "jbob" != h && "jfyb" != h && "jsfb" != h || !l.hasClass(b.appClsVal) ? j.children("span.t-control-btns-defaultstyle").hide() : (j.children("span.t-control-btns-defaultstyle").show(), "jfsb" != h && "jbob" != h && "jsdb" != h && "jadb" != h && "jsfb" != h && "jfyb" != h || b.tUserLogin && "admin" == b.tUserName || j.children("span.t-control-btns-defaultstyle").hide()), f && j.attr("appID", f), g ? (j.attr("attachID", g), "jspb" == h || "jkgb" == h || "jbob" == h || "lbePanel" == i ? (j.children("span.t-control-btns-copy").show(), j.children("span.t-control-btns-close").show()) : (j.children("span.t-control-btns-copy").hide(), j.children("span.t-control-btns-close").hide())) : (j.children("span.t-control-btns-copy").show(), j.children("span.t-control-btns-close").show()), l.hasClass(b.dragNaClsVal) ? k.hasClass("t-control-btns-unlock") || k.attr("title", "解除锁定").addClass("t-control-btns-unlock").removeClass("t-control-btns-lock") : k.hasClass("t-control-btns-lock") || k.attr("title", "锁定位置").addClass("t-control-btns-lock").removeClass("t-control-btns-unlock"), j.show().offset({
				left: d,
				top: e - 20
			}), m.create("show", l)
		} else 0 == l.length && (j.hide(), m.create("hide", l), $("#defaultStyleBox").hide())
	}, a.checkControlPos = function(a, b, c) {
		var j, k, l, m, n, o, p, q, d = a.pageX,
			e = a.pageY,
			f = 24,
			g = 42,
			h = !0,
			i = 22;
		return d && e ? (c.is(":hidden") && (f = 0, g = 0, h = !1, i = 0), l = b.offset(), m = $("#tLittle").width(), n = l.top - f, o = l.left - i, p = b.width(), q = b.height(), m > p && h && (p = m), j = o + p + i, k = n + q + g, d >= o && j >= d && e >= n && k >= e ? !0 : !1) : !0
	}, a.showThumb = function(a, c) {
		var f, g, h, i, d = $(b.appCls + "[appID='" + a + "']"),
			e = $(b.layerCls + "[appID='" + a + "']");
		c && "jspb" == d.attr("data-dblType") ? (h = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), "appID" != $("#tParentThumb").attr("appID") && ($("#tThumb").html(""), d.children(b.appChildCls).each(function() {
			var c = $(this),
				d = c.attr("appID"),
				e = c.attr("attachID"),
				f = c.attr("data-appName") || "",
				g = "diseye",
				h = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""),
				i = ' src="' + h + '"',
				j = "";
			c.is(":hidden") && (g = "noneye"), f = f.replace(/特效/g, ""), !checkUrl(h) && (j = "display:none;", i = ""), $('<li class="t-thumb" data-target="thumb-selected" appID="' + d + '" attachID="' + e + '"><span class="t-layer-eye ' + g + '" data-target="layerEye-clicked"></span><span class="quick-edit-hoverimg"><img' + i + ' style="' + j + '"/></span><span class="t-thumb-text">' + f + "</span></li>").prependTo($("#tThumb"))
		})), $("#tParentThumb").attr("appID", a), checkUrl(h) ? $("#tParentThumb").find("img").attr("src", h).show() : $("#tParentThumb").find("img").hide(), i = d.children(b.selected).attr("attachID"), $("#tThumb").children(b.thumbSelected).removeClass(b.thumbSelectedVal), i ? ($("#tParentThumb").removeClass(b.thumbSelectedVal), $("#tThumb").children(b.thumbCls + "[attachID='" + i + "']").addClass(b.thumbSelectedVal)) : $("#tParentThumb").addClass(b.thumbSelectedVal), f = e.offset().left, g = e.offset().top, $("#tThumb").show().offset({
			left: f - 120,
			top: g + 31
		}), $("#tParentThumb").show().offset({
			left: f - 120,
			top: g + 1
		})) : ($("#tThumb").hide(), $("#tParentThumb").hide())
	}, a.setPopupContent = function(a, c, d) {
		var e, f, g, h, i, j, k, l, m, n;
		c ? (e = a.attachID, f = ' data-parentID="' + d + '"') : (e = a.appID, f = ""), a.popupConfig && "yes" == a.popupConfig.pSwitch ? ($("#pc_" + e).length > 0 && $("#pc_" + e).remove(), "" == a.popupConfig.spaceX && (a.popupConfig.spaceX = 0), "" == a.popupConfig.spaceY && (a.popupConfig.spaceY = 0), g = a.popupConfig.css3Speed || "0.1s", h = a.popupConfig.css3Mode || "", i = "", j = "", k = "", l = "", m = "", n = "ease-in", "" != h && ("" != a.popupConfig.css3Bezier && ("bs1" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.7,0.1)"), "bs2" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.85,0.1)"), "bs3" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,1,0.1)"), "bq1" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.1,0.4)"), "bq2" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.1,0.7)"), "bq3" == a.popupConfig.css3Bezier && (n = "cubic-bezier(0,0,0.1,1)")), m = "-webkit-transition: " + g + " " + n + ";-moz-transition: " + g + " " + n + ";-o-transition: " + g + " " + n + ";transition: " + g + " " + n + ";", "effect_w" == h ? (i = "c-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "width:" + $("#jstForPopup").outerWidth() + "px;") : "effect_h" == h ? (i = "d-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "height:" + $("#jstForPopup").outerHeight() + "px;") : "effect_wh" == h && (i = "c-1 d-1", $("#jstForPopup").html(a.popupConfig.popupHtml), j = "width:" + $("#jstForPopup").outerWidth() + "px;height:" + $("#jstForPopup").outerHeight() + "px;"), k = '<div class="pope e-1" data-e="' + h + ";" + a.popupConfig.css3Bezier + ";" + g + '" style="' + j + '"><div class="' + i + ' outbox" style="' + m + '"><div class="rel" style="width:100%;height:100%;">', l = "</div></div></div>"), b.popupContent.append('<div class="J_TWidget japb abs ks-popup-hidden" id="pc_' + e + '" data-gen="yes"' + f + " data-widget-type=\"Popup\" data-widget-config=\"{'trigger':'." + e + "','align':{'node':'." + e + "','offset':[" + a.popupConfig.spaceX + "," + a.popupConfig.spaceY + "],'points':[" + a.popupConfig.popupPosition.replace(/"/g, "'") + ']}}" style="z-index:99;display:none;">' + k + a.popupConfig.popupHtml + l + "</div>")) : a.popupConfig && "no" == a.popupConfig.pSwitch && $("#pc_" + e).length > 0 && $("#pc_" + e).attr("data-gen", "no")
	}, a.getPopupContent = function(a, c) {
		var e, f, g, h, i, j, k, d = $(b.appCls + "[appID='" + a + "']");
		if (d.children(b.appChildCls + "[attachID='" + c + "']"), d.length > 0) if (f = JSON.parse(d.attr("data-config")), c) {
			if (e = $("#pc_" + c), e.length > 0 && (g = JSON.parse(e.attr("data-widget-config").replace(/\'/g, '"')), h = e, f.childConfig.length > 0)) {
				for (i = 0; i < f.childConfig.length; i++) if (f.childConfig[i].attachID == c) {
					for (f.childConfig[i]["popupConfig"].pSwitch = e.attr("data-gen"), f.childConfig[i]["popupConfig"].popupPosition = "'" + g.align.points[0] + "','" + g.align.points[1] + "'", f.childConfig[i]["popupConfig"].spaceX = g.align.offset[0], f.childConfig[i]["popupConfig"].spaceY = g.align.offset[1]; h.children("div").hasClass("ks-contentbox") || h.children("div").hasClass("ks-popup-content");) h = h.children("div");
					f.childConfig[i]["popupConfig"].popupHtml = h.html(), h.children(".pope").length > 0 && (f.childConfig[i]["popupConfig"].popupHtml = h.children(".pope").children(".outbox").children("div").html(), j = h.children(".pope").attr("data-e") || ";;0.5s", k = j.split(";"), f.childConfig[i]["popupConfig"].css3Mode = k[0], f.childConfig[i]["popupConfig"].css3Bezier = k[1], f.childConfig[i]["popupConfig"].css3Speed = k[2])
				}
				d.attr("data-config", JSON.stringify(f))
			}
		} else if (e = $("#pc_" + a), e.length > 0) {
			for (g = JSON.parse(e.attr("data-widget-config").replace(/\'/g, '"')), h = e, f.popupConfig.pSwitch = e.attr("data-gen"), f.popupConfig.popupPosition = "'" + g.align.points[0] + "','" + g.align.points[1] + "'", f.popupConfig.spaceX = g.align.offset[0], f.popupConfig.spaceY = g.align.offset[1]; h.children("div").hasClass("ks-contentbox") || h.children("div").hasClass("ks-popup-content");) h = h.children("div");
			f.popupConfig.popupHtml = h.html(), h.children(".pope").length > 0 && (f.popupConfig.popupHtml = h.children(".pope").children(".outbox").children("div").html(), j = h.children(".pope").attr("data-e") || ";;0.5s", k = j.split(";"), f.popupConfig.css3Mode = k[0], f.popupConfig.css3Bezier = k[1], f.popupConfig.css3Speed = k[2]), d.attr("data-config", JSON.stringify(f))
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
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, d = (a.attr("data-dblType"), a.attr("data-attachType"));
		if ("jib" == a.attr("data-dblType") && d && "ing" != c) {
			if (b.snapEle = null, b.snapElements = [], e = a.parent(), e.length < 1) return;
			for (f = JSON.parse(e.attr("data-config")), g = b.tParseInt(f.borderWidth1), h = e.children("[data-attachType='" + d + "']"), i = 0, h.each(function(b) {
				var d = $(this);
				d.attr("attachID") == a.attr("attachID") && (i = b)
			}), "" == f.borderControl1 && (g = 0), h.eq(0), k = b.tParseInt(f.itemColumn), l = b.tParseInt(f.itemCount), m = Math.ceil(l / k), n = b.tParseInt(f.columnSpace), o = b.tParseInt(f.lineSpace), p = i % k, q = b.tParseInt(i / k), "jibbg" == d && (r = a.width(), s = a.height(), t = e.children("[data-attachType='jibpanel']:eq(0)").height(), j = b.tParseInt(e.children("[data-attachType='jibpanel']:eq(0)").css("top") || "0"), f.sWidth = r, f.sHeight = s, e.css({
				width: (r + n) * k - n,
				height: (s + t + o) * m - o
			}).attr("data-config", JSON.stringify(f))), "jibpanel" == d && (u = a.width(), t = a.height(), s = e.children("[data-attachType='jibbg']:eq(0)").height(), f.sWidth = u, f.mHeight = t, e.css({
				width: (u + n) * k - n,
				height: (s + t + o) * m - o
			}).attr("data-config", JSON.stringify(f))), "jibtitle" == d && (f.titleWidth = a.width(), f.titleHeight = a.height(), e.attr("data-config", JSON.stringify(f))), "jibsubtitle" == d && (f.subTitleWidth = a.width(), f.subTitleHeight = a.height(), e.attr("data-config", JSON.stringify(f))), v = b.tParseInt(f.sWidth), w = b.tParseInt(f.sHeight), x = b.tParseInt(f.mHeight), y = w + x, z = b.appConfig["jib"][1].tAppArray, A = b.tParseInt(a.css("left")) - (v + n) * p, thisTop = b.tParseInt(a.css("top")) - (y + o) * q, B = 0; B < z.length; B++)"AforPanel" != z[B] && (C = e.children("[data-attachType='" + z[B] + "']"), D = C.eq(0), E = b.tParseInt(D.css("left")), F = b.tParseInt(D.css("top")), C.each(function(c) {
				var m, h = $(this),
					i = c % k,
					l = b.tParseInt(c / k);
				z[B] == d ? ("jibpanel" != d && "jibbg" != d && (E = A, F = thisTop), h.css({
					left: E + (v + n) * i,
					top: F + (y + o) * l
				}), D.hasClass("t-na-resize") || (h.width(a.width()), h.height(a.height())), ("jibpanel" == d || "jibbg" == d) && (m = F, "jibpanel" == d && (m = F + D.height() - y), e.children(".jibBorderShadow:eq(" + c + ")").css({
					width: v,
					height: y,
					left: E + (v + n) * i - g,
					top: m + (y + o) * l - g
				}))) : (h.css({
					left: E + (v + n) * i,
					top: F + (y + o) * l
				}), "jibpanel" != z[B] && "jibbg" != z[B] && "jibbg" == d && h.css({
					top: F - j + w + (y + o) * l
				}), "jibpanel" == z[B] ? ("jibbg" == d && h.css({
					top: (y + o) * l + w
				}), h.width(v), h.height(x)) : "jibbg" == z[B] && (h.width(v), h.height(w)))
			}))
		}
		"jadb" == a.attr("data-dblType") && d && (a.parent().hasClass("t-jadb-up") ? b.posForAccordion(a, "up") : a.parent().hasClass("t-jadb-down") ? b.posForAccordion(a, "down") : a.parent().hasClass("t-jadb-left") ? b.posForAccordion(a, "left") : a.parent().hasClass("t-jadb-right") && b.posForAccordion(a, "right"))
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
		}), "up" == c || "left" == c ? a.html(Array(d + 1).join(b.appConfig["jadb"][1].tDynamic)) : a.html(Array(d + 1).join(b.appConfig["jadb"][1].tDynamic1)), $.each(f, function(b, c) {
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
			var c, d, e, f, g, h, b = a.replace(/href\=\"/g, "");
			return b = b.substr(0, b.length - 1), skuPro = "", skuId = "", umpPro = "", channelPro = "", b = b.replace(/&amp;/g, "&"), (b.indexOf("detail.tmall.com") >= 0 || b.indexOf("item.tmall.com") >= 0 || b.indexOf("detail.taobao.com") >= 0 || b.indexOf("item.taobao.com") >= 0) && (d = b.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), d && d.length > 0 && (c = d[0].replace(/(\?|\&)id\=/g, "")), b.indexOf("sku_properties") >= 0 && (e = b.match(/((\&|\?){1}sku_properties\=){1}([\d\:]+)(?=(\&|$))/g), e && e.length > 0 && (skuPro = e[0].replace(/(\?|\&)sku_properties\=/g, ""))), b.indexOf("umpChannel") >= 0 && (f = b.match(/((\&|\?){1}umpChannel\=){1}([\w\:]+)(?=(\&|$))/g), f && f.length > 0 && (umpPro = f[0].replace(/(\?|\&)umpChannel\=/g, ""))), b.indexOf("u_channel") >= 0 && (g = b.match(/((\&|\?){1}u_channel\=){1}([\w\:]+)(?=(\&|$))/g), g && g.length > 0 && (channelPro = g[0].replace(/(\?|\&)u_channel\=/g, ""))), b.indexOf("skuId") >= 0 && (h = b.match(/((\&|\?){1}skuId\=){1}(\d+)(?=(\&|$))/g), h && h.length > 0 && (skuId = h[0].replace(/(\?|\&)skuId\=/g, ""))), (b.indexOf("detail.tmall.com") >= 0 || b.indexOf("item.tmall.com") >= 0) && (b = "http://detail.tmall.com/item.htm?id=" + c), (b.indexOf("detail.taobao.com") >= 0 || b.indexOf("item.taobao.com") >= 0) && (b = "http://item.taobao.com/item.htm?id=" + c), "" != skuPro && "" != c && (b += "&sku_properties=" + skuPro), "" != umpPro && "" != c && (b += "&umpChannel=" + umpPro), "" != channelPro && "" != c && (b += "&u_channel=" + channelPro), "" != skuId && "" != c && (b += "&skuId=" + skuId)), c && "" != c && "undefined" != c || (b = a.replace(/href\=\"/g, ""), b = b.substr(0, b.length - 1)), b = b.replace(/\&amp;/g, "&"), b = b.replace(/spm\=([^\&])*?(\&|$|\/|#)/, ""), b = 'href="' + b + '"'
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