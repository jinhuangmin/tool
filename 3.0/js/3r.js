void

function (a) {
	var b = {},
		c = {};
	a.startModule = function (a) {
		require(a).start()
	}, a.define = function (a, c) {
		b[a] = c
	}, a.require = function (a) {
		return /\.js$/.test(a) || (a += ".js"), c[a] ? c[a] : c[a] = b[a]({})
	}
}(this), define("scripts/D.js", function (a) {
	var b = {
		tUserLogin: !1,
		tUserName: "",
		layerList: $("#tclist"),
		dump: $("#dump"),
		dumpLayer: $("#dumplayer"),
		dialogID: "dialogForm",
		cacheAppID: null,
		cacheAnchorName: null,
		openSaveDocName: null,
		openSaveDocID: null,
		openSaveDocTime: null,
		layerCls: ".t-layer",
		actionCls: ".t-action",
		dragNaCls: ".t-na-drag",
		isLoading: !1,
		handleSpaceX: 200,
		handleSpaceY: 200,
		tLoadingTime: null,
		junecgk: $("#junecgk"),
		startParse: !1,
		endParse: !1,
		BreachMoveRuler: !1,
		tLoadingDiv: '<div id="tLoadingOverlay" class="ui-front" style="z-index: 10001;"></div><div id="tLoading"><div class="juneloadingbg1"></div><div class="juneloadingbg2"></div><div class="juneloadingbg3"></div><div class="juneloadingbg4"></div></div>',
		arrayX: !0,
		copyGID: {},
		copyGapp: $(),
		copyGlayer: $(),
		jpbLeft: 0,
		jpbTop: 0,
		jmdbLeft: 0,
		jmdbTop: 0,
		zdyAllProp: [],
		zdyAllIndex: 0,
		stringL: "loc",
		appClsVal: "j-fnd",
		appCls: ".j-fnd",
		tUserIp: null,
		tUserCaah: !1,
		tUserDate: (new Date).Format("yyyy-MM-dd"),
		tUserDateTime: (new Date).getTime(),
		previewType: "normal",
		w: $(window),
		d: $(document),
		b: $("body"),
		juneOpbg: $("#juneOpbg"),
		juneBBottom: $("#juneBBottom"),
		numberS: !1,
		june: $("#june"),
		zdybox: $("#zdybox"),
		junebox: $("#junebox"),
		popupContent: $("#popupContent"),
		popupContentZdy: $("#popupContentZdy"),
		appParentClsVal: "t-app",
		appParentCls: ".t-app",
		appChildClsVal: "t-app-child",
		appChildCls: ".t-app-child",
		appOtherCls: ".t-app-other",
		findApp: findApp(),
		notNeedSnapCls: ".june-nonsp",
		selectedVal: "ui-selected",
		layerSelectedVal: "active",
		actionSelectedVal: "t-action-selected",
		rhClsVal: "ui-resizable-handle",
		layerClsVal: "t-layer",
		actionClsVal: "t-action",
		dragNaClsVal: "t-na-drag",
		dragNaClsVal1: "t-na-drag1",
		resizeNaClsVal: "t-na-resize",
		jSelectsedDom: $(),
		jTcActiveDom: $(),
		jBgDom: $(),
		formatPos: {},
		pageX: null,
		pageY: null,
		offsetX: null,
		offsetY: null,
		zoomScale: 1,
		curType: "draw",
		checkType: "set",
		tempCurType: null,
		curAppType: null,
		actType: null,
		clickTarget: null,
		tZIndex: 0,
		setRight: !1,
		direction: null,
		selected: "div.ui-selected",
		layerSelected: "span.t-layer.active",
		actionSelected: "li.t-action-selected",
		rhCls: ".ui-resizable-handle",
		clickTimeFn: null,
		clickTimeStart: 0,
		clickTimeIng: 0,
		clickTimeEnd: 0,
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
		closeSwitchx: !1,
		juneSnapObj: {},
		popupConfig: {
			pSwitch: "no",
			pAlignType: "yes",
			pTriggerType: "mouse",
			pClickToggle: "yes",
			alignID: null,
			popupPosition: "'tr','tl'",
			spaceX: "0",
			spaceY: "0",
			css3Mode: "",
			css3Bezier: "",
			css3Speed: "0.5s",
			popupHtml: ""
		},
		actionIconCls: {
			blank: "ui-icon-document",
			add: "ui-icon-plus",
			edit: "ui-icon-pencil",
			resize: "ui-icon-pencil",
			remove: "ui-icon-close",
			move: "ui-icon-arrow-4-diag"
		},
		booleanC: "hr",
		tContextmenu: $('<div class="t-contextmenu" data-target="menu-clicked" data-appID=""></div>'),
		appMenu: '<ul class="t-app-menu"><li class="t-context-add-child" data-target="menu-clicked" data-menuType="createChild"><icon>ꕓ</icon>新建子层</li><li class="t-context-del-group" data-target="menu-clicked" data-menuType="deleteGroup"><icon>ꖗ</icon>解散群组</li><li class="t-context-edit-group" data-target="menu-clicked" data-menuType="editGroup"><icon>ꕓ</icon>重命名组</li><li class="t-context-edit" data-target="menu-clicked" data-menuType="edit"><icon>ꕸ</icon>编辑</li><li class="t-context-copy" data-target="menu-clicked" data-menuType="copy"><icon>ꖁ</icon>复制</li><li class="t-context-dd t-context-disdrag" data-target="menu-clicked" data-menuType="drag"><icon>ꖆ</icon>锁定位置</li><li class="t-context-ig t-context-ingroup" data-target="menu-clicked" data-menuType="addGroup"><icon>ꖃ</icon>合并成组</li><li class="t-context-spaceline"></li><li class="t-context-fz t-context-fzindex" data-target="menu-clicked" data-menuType="moveToFirst"><icon>ꔂ</icon>层级置顶</li><li class="t-context-uz t-context-uzindex" data-target="menu-clicked" data-menuType="moveUp"><icon>ꔃ</icon>上移一层</li><li class="t-context-dz t-context-dzindex" data-target="menu-clicked" data-menuType="moveDown"><icon>ꔄ</icon>下移一层</li><li class="t-context-lz t-context-lzindex" data-target="menu-clicked" data-menuType="moveToLast"><icon>ꔅ</icon>层级置底</li><li class="t-context-del" data-target="menu-clicked" data-menuType="delete"><icon>ꖂ</icon>删除</li></ul>',
		layerMenu: '<div id="tLayerMenu" class="t-contextmenu"><ul class="t-app-menu"></ul></div>',
		layerMenu_jib: '<div id="tLayerMenu_jib" class="t-contextmenu"><ul class="t-app-menu"><li class="t-context-add-child" data-target="menu-clicked" data-menuType="editSingleItem"><icon>ꕸ</icon>快速编辑</li><li class="layer-menu-title">显示开关</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="" data-t="oppoSwitch"><i></i>变换主图</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibtitle" data-t="titleSwitch"><i></i>标题</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibsubtitle" data-t="subTitleSwitch"><i></i>副标题</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibprice;jibprefix" data-t="priceSwitch;prefixSwitch"><i></i>原价</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibdiscountprice;jibdiscountprefix" data-t="_priceSwitch;_prefixSwitch"><i></i>现价</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibsale;jibsaleprefix" data-t="saleSwitch;salePrefixSwitch"><i></i>销量</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jiberweima" data-t="erWeiMaSwitch"><i></i>二维码</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibbtn" data-t="btnSwitch"><i></i>购买按钮</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibbtn1" data-t="btn1Switch"><i></i>收藏按钮</li><li class="t-layermenu" data-target="layermenu-jib-clicked" data-n="jibbtn2" data-t="btn2Switch"><i></i>购物车</li></ul></div>',
		contrast: {
			jdb: "鼠绘热区",
			jsib: "单图",
			jllb: "线段",
			juneCustom: "自定义HTML",
			juneGroup: "组",
			jspb: "特效层",
			jsb: "搜索框",
			jsdb: "图片轮播",
			jwfb: "无缝轮播",
			jfsb: "轮播",
			jqtb: "嵌套轮播",
			jfyb: "翻页轮播",
			jib: "宝贝列表",
			jadb: "手风琴",
			jhab: "滑动手风琴",
			jfb: "分享",
			jgb: "购物车",
			jscb: "收藏",
			jplb: "评论",
			jxhb: "喜欢",
			job: "正反面",
			jbob: "切片正反面",
			jwb: "阿里旺旺",
			jwwb: "旺旺群",
			jcb: "文字",
			jdlb: "段落",
			jcdb: "倒计时",
			jvb: "视频",
			jeb: "二维码",
			jtsb: "滚动动画/文字",
			jpb: "弹出层",
			jsfb: "店铺分类",
			jacb: "可关闭层",
			jkgb: "开关灯",
			jzzb: "遮罩层",
			jmdb: "锚点",
			jdhb: "动态海报",
			jsbPricePanel: "搜索价格面板",
			jsbPriceLow: "搜索价格输入框",
			jsbPriceHigh: "搜索价格输入框",
			jspbChild: "子层",
			jsfbChild: "分类文字",
			lbePanel: "扩展图层",
			jzdb: "自定义内容区",
			jkcb: "开场动画",
			jxdb: "循环动画",
			jxxb: "动画序列",
			jxxbChild: "动画",
			jrwb: "计划任务",
			jabNumber: "关注数字",
			jcdbDay: "倒计时的天",
			jcdbHour: "倒计时的时",
			jcdbMinute: "倒计时的分",
			jcdbSecond: "倒计时的秒",
			jsbInput: "搜索输入框",
			jsbBtn: "搜索按钮",
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
			jkgbChild: "开关灯子层",
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
			jibexpandtext: "宝贝扩展文字(1)",
			jibexpandtext1: "宝贝扩展文字(2)",
			jibexpandtext2: "宝贝扩展文字(3)",
			jibexpandtext3: "宝贝扩展文字(4)",
			jibexpandtext4: "宝贝扩展文字(5)",
			jibbtn2: "宝贝购物车按钮",
			jibsubscript: "宝贝扩展图片(1)",
			jibsubscript1: "宝贝扩展图片(2)",
			jibsubscript2: "宝贝扩展图片(3)",
			jibsubscript3: "宝贝扩展图片(4)",
			jibsubscript4: "宝贝扩展图片(5)",
			jiberweima: "宝贝二维码",
			jbobChild: "切片",
			jadbTitle: "手风琴标题",
			jadbPanel: "手风琴面板"
		},
		controlBtn: '<div id="tControlBtn" class="t-control-btns"><span class="t-control-btns-appaddchild t-control-usefor-jspb" title="新建子层" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appaddchild t-control-usefor-jkgb" title="新建子层" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appaddchild t-control-usefor-jfsb" title="新建扩展层" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appaddchildA t-control-usefor-jbob" title="新建切片" data-target="control-clicked" data-btnType="createChild"></span><span class="t-control-btns-appset" title="编辑" data-target="control-clicked" data-btnType="edit"></span><span class="t-control-btns-lock t-control-cc" title="锁定位置" data-target="control-clicked" data-btnType="drag"></span><span class="t-control-btns-copy" title="复制" data-target="control-clicked" data-btnType="copy"></span><span class="t-control-btns-close" title="删除" data-target="control-clicked" data-btnType="delete"></span><span class="t-control-btns-help t-control-usefor-jspb" data-help="help" title=""></span><span class="t-control-btns-icon t-control-usefor-arrow" title="小图标预设样式" data-target="control-clicked" data-btnType="setIcon"></span><span class="t-control-btns-icon t-control-usefor-small" title="缩略图预设样式" data-target="control-clicked" data-btnType="setIcon1"></span><span class="t-control-btns-setstyle t-control-usefor-jibstyle" title="将当前列表样式设置为预设样式" data-target="control-clicked" data-btnType="setItemStyle"></span><span class="t-control-btns-defaultstyle" data-target="control-clicked" data-btnType="defaultstyle">预<br />设<br />样<br />式</span></div>',
		message: '<div id="tMessage"></div>',
		_confirm: '<div id="tConfirm"></div>',
		alignMessage: '<p style="font-size: 14px;"><font style="color:#990000;">多选应用</font>后才能进行对齐或排列。</p><p style="color: #999;">如何多选应用：<br>方法1.最左侧的鼠标面板中选择<font style="color:#006699;">应用框选</font>，然后框选应用。<br>方法2.按住<font style="color:#006699;">ctrl键</font>单击应用，可进行多选。</p>',
		alignMessage1: '<p style="font-size: 14px;"><font style="color:#990000;">选择应用</font>后才能进行位置调整、对齐（需多选）或排列（需多选）。</p><p style="color: #999;">如何多选应用：<br>方法1.最左侧的鼠标面板中选择<font style="color:#006699;">应用框选</font>，然后框选应用。<br>方法2.按住<font style="color:#006699;">ctrl键</font>单击应用，可进行多选。</p>',
		clearMessage: '<p style="font-size: 14px;">是否确认清空画布？</p><p style="color: #999;">清空画布时，图层面板将被同时清空！</p>',
		imContrast: ["a.jdb", "div.jdb", "a.jsib", "div.jsib", "div.jdhb", "a.job", "div.job", "a.jbob", "div.jbob", "div.jcb", "div.jcdb", "div.jwfb", "div.jfsb", "div.jqtb", "div.jfyb", "form.jsb", "div.jvb", "div.jwb", "div.jwwb", "div.jspb", "a.jspb", "div.jib", "div.jfb", "a.jgb", "div.jscb", "div.jeb", "div.jtsb", "div.jacb", "div.jkgb", "div.jzzb", "div.jpb", "a.jmdb", "div.jsfb", "div.jzdb", "div.jadb", "div.jplb", "div.jllb", "div.jkcb", "div.jxdb", "div.jxxb", "div.jrwb", "div.jxhb"],
		dialogSetting: {
			autoOpen: !1,
			height: 560,
			width: 550,
			modal: !0,
			resizeStop: function () {
				var e, f, d = $(this);
				d.find(".form-tabs-title").length > 0 && (e = $("#" + b.dialogID).find(".ui-tabs-nav").outerHeight(), f = $("#" + b.dialogID).children("form").children().height(), $("#" + b.dialogID).find(".formlayout").height(f - e))
			},
			buttons: {
				"确定": function () {
					var a = b.findApp.findStart($("#rlicense").next().attr("href"), "document");
					a.indexOf("//9Iu+Vz42H3TS+2UdMJRr") < 0 && b.june.off(), $("#tForm").data("submitAction", $.proxy(function () {
						$(this).dialog("close"), $(".ui-tooltip").hide(), b.showAllwz()
					}, this)).submit()
				},
				"取消": function () {
					$(this).dialog("close"), $(".ui-tooltip").hide()
				}
			},
			close: function () {
				$(this).dialog("close"), $(".ui-tooltip").hide()
			}
		},
		menuEve: null,
		drawHelper: null,
		snapInSpace: 0,
		snapLineStatus: "opened",
		compareTarget: null,
		snapCacheDom: null,
		snapSleft: 0,
		snapStop: 0,
		snapCacheKey: {},
		snapEleRange: "screen",
		snapElements: [],
		resizeElements: [],
		loadCourseStep: !1,
		rulerSwitch: !0,
		dragSwitch: !0,
		dragX: [],
		dragY: [],
		snapSwitch: !0,
		tempSnapSwitch: null,
		dragEle: null,
		dragStart: !1,
		resizeEle: null,
		snapEle: null,
		gridSwitch: !1,
		assistSwitch: !0,
		assistSwitch1: !0,
		appOverSwitch: !1,
		assistColor: "#FF4AFF",
		gridBg: "10px",
		gridImg: {
			"10px": "https://img.alicdn.com/imgextra/i2/39767794/TB2UP0.kFXXXXbxXXXXXXXXXXXX-39767794.png",
			"20px": "https://img.alicdn.com/imgextra/i3/39767794/TB2iD4WkFXXXXX9XpXXXXXXXXXX-39767794.png",
			"50px": "https://img.alicdn.com/imgextra/i2/39767794/TB2PGp1kFXXXXXGXpXXXXXXXXXX-39767794.png"
		},
		gridOpacity: "100",
		selectTolerance: "touch",
		snapOutTolerance: 2,
		snapInTolerance: 2,
		snapOutSpace: 0,
		anchor: [],
		appIDArray: [],
		appNameArray: [],
		appMongolia: '<div class="t-app-mongolia"></div>',
		qssetConfig: {
			characterWidthMode: "normal",
			characterMode: "text",
			characterItemContent: "",
			characterFont: "微软雅黑",
			characterColor: "#000000",
			characterSize: "12",
			characterBgColor: "",
			characterLineHeight: "24",
			characterLetterSpacing: "",
			characterIndent: "",
			characterWeight: "normal",
			characterStyle: "normal",
			characterLineOver: "",
			characterLineThrough: "",
			characterLineUnder: "",
			characterAlign: "center",
			characterContent: "",
			characterLineMulti: "no",
			characterBgSrc: "",
			imgBgp: "50% 50%",
			characterFixed: "2",
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
			characterHoverMode: "off",
			characterModeHover: "text",
			characterItemContentHover: "",
			characterFontHover: "微软雅黑",
			characterColorHover: "#000000",
			characterSizeHover: "12",
			characterBgColorHover: "",
			characterLineHeightHover: "",
			characterLetterSpacingHover: "",
			characterIndentHover: "",
			characterWeightHover: "normal",
			characterStyleHover: "normal",
			characterLineOverHover: "",
			characterLineThroughHover: "",
			characterLineUnderHover: "",
			characterAlignHover: "center",
			characterContentHover: "",
			characterLineMultiHover: "no",
			characterBgSrcHover: "",
			imgBgpHover: "50% 50%",
			characterFixedHover: "2",
			characterHoverSpeed: "",
			characterUnderLine: "off",
			characterUnderLineStyle: "solid",
			characterUnderLineWeight: "1",
			characterUnderLineColor: "#000000",
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
			outlineControl: "",
			outlineWidth: "juneol",
			outlineSpeed: "trans02s",
			outlineColor: "#FFFFFF",
			outlineShadowColor: "#666666"
		},
		appConfig: {
			juneGroup: ["", {
				tSubmit: function () {},
				codeExport: function () {},
				codeImport: function () {}
			}, {}],
			jsib: ['<div class="j-fnd t-app" data-dblType="jsib" data-rType="scale" style="overflow:hidden;"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;单图设置",
				tUrl: "singleimg.php",
				tSubmit: function (a, c) {
					var d = require("scripts/tAjax"),
						e = c.children(".j-tazb");
					checkUrl(a.pSrc) ? "full" == a.imgMode ? (e.children("img").attr({
						width: "100%",
						height: "100%"
					}), e.children("img").show().attr("src", a.pSrc), e.css({
						backgroundImage: "none"
					})) : "scaleX" == a.imgMode ? (e.children("img").attr("height", "100%").removeAttr("width"), e.children("img").show().attr("src", a.pSrc), e.css({
						backgroundImage: "none"
					})) : "scaleY" == a.imgMode ? (e.children("img").attr("width", "100%").removeAttr("height"), e.children("img").show().attr("src", a.pSrc), e.css({
						backgroundImage: "none"
					})) : (e.children("img").hide(), e.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : (e.css({
						backgroundImage: "none"
					}), e.children("img").hide()), e.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), checkSubmitBorder(e, a), submitColor(e, RGBToHex(a.bgColor, ""), "transparent"), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				codeExport: function () {
					return "${!jsib}"
				},
				codeImport: function (a, c, d, e) {
					var j, r, s, u, v, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = d.attr("class"),
						k = "",
						l = [],
						n = "",
						o = "",
						p = [],
						q = "";
					if (h.tipText = "", d.children(".shake").length > 0) {
						try {
							h.animType = i.match(/(june-x|june-y|june-r|june-s|june-n|)-shake(?=(-s|-m|-l))/g)[0], h.animSpeed = d.css("transitionDuration") && "undefined" != d.css("transitionDuration") && "" != d.css("transitionDuration") ? 10 * parseFloat(d.css("transitionDuration").substr(0, d.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "0s", h.animRange = i.match(/(june-x|june-y|june-r|june-s|june-n|)-shake(-s|-m|-l)/g)[0].replace(/(june-x|june-y|june-r|june-s|june-n|)-shake/g, "")
						} catch (t) {
							h.animType = "", h.animSpeed = "0s", h.animRange = "-s"
						}
						d = d.children(".shake")
					}
					if (i = d.attr("class"), j = d.children("a:eq(0)"), d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.borderColor = RGBToHex(d.attr("border-color")), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.is("a") ? (h.href = d.attr("href") || "", h.hrefMode = d.attr("target") || "_self") : (h.href = j.attr("href") || "", h.hrefMode = j.attr("target") || "_self", d.hasClass("shadowShow") && (h.shadowControl = "shadowShow", k = j.css("box-shadow"), k.indexOf("inset") >= 0 && (h.shadowStyle = "inset", k = $.trim(k.replace(/inset/g, ""))), k.indexOf("rgb") >= 0 && (n = RGBToHex(k.match(/rgb\((\S|\s)*\)/g)[0]), k = $.trim(k.replace(/rgb\((\S|\s)*\)/g, ""))), l = k.split(" "), l[0].indexOf("px") < 0 && l[0] ? ("" == n && (n = RGBToHex(l[0])), l.splice(0, 1)) : "" == n && (n = RGBToHex(l[4])), h.shadowColor = n, h.shadowLeft = b.tParseInt(l[0]), h.shadowTop = b.tParseInt(l[1]), h.shadowBlur = b.tParseInt(l[2]), h.shadowSize = b.tParseInt(l[3]))), u = d.children("img"), 0 == u.length ? (h.imgMode = "cut", h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, "")) : (u.hasClass("sf") && (h.imgMode = "full"), u.hasClass("sx") && (h.imgMode = "scaleX"), u.hasClass("sy") && (h.imgMode = "scaleY"), h.pSrc = u.attr("src") || ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.linkMode = d.attr("data-linkmode"), h.wangID = "", h.shuntMode = "no", h.anchorSelect = "", h.borderRadius1 = 0, !h.href && "" == h.href, r = h.href.split("?"), d.hasClass("j_CollectBrand") && (h.linkMode = "gzlink", h.attentionID = d.attr("data-brandid") || ""), d.hasClass("J_CartPluginTrigger") && (h.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(r[0]) && !/groupid=\d{2,}/.test(h.href)) try {
						s = h.href.split("&"), h.linkMode = "wwlink", h.wangID = s[1].replace("uid=", ""), h.wangID = h.wangID.replace("%3A", ":");
						try {
							h.wangID = decodeURI(h.wangID)
						} catch (t) {
							h.wangID = ""
						}
						h.shuntMode = "yes"
					} catch (t) {}
					if (new RegExp("taobao.com/webww/ww.php").test(r[0]) && !/groupid=\d{2,}/.test(h.href)) try {
						s = h.href.split("&"), h.linkMode = "wwlink", h.wangID = s[1].replace("touid=", ""), h.wangID = h.wangID.replace("%3A", ":");
						try {
							h.wangID = decodeURI(h.wangID)
						} catch (t) {
							h.wangID = ""
						}
					} catch (t) {}
					"mdlink" == h.linkMode && (h.anchorSelect = h.href.replace("#", ""), h.href = ""), d.hasClass("hborder1") && (h.borderControl1 = "hborder1", h.borderColor1 = RGBToHex(d.css("border-color")), h.borderWidth1 = m(d.css("border-width") || "1px"), h.borderRadius1 = m(d.css("border-radius") || "0px")), d.hasClass("shadowShow1") && (h.shadowControl1 = "shadowShow1", o = d.css("box-shadow"), o.indexOf("inset") >= 0 && (h.shadowStyle = "inset", o = $.trim(o.replace(/inset/g, ""))), o.indexOf("rgb") >= 0 && (q = RGBToHex(o.match(/rgb\((\S|\s)*\)/g)[0]), o = $.trim(o.replace(/rgb\((\S|\s)*\)/g, ""))), p = o.split(" "), p[0].indexOf("px") < 0 && p[0] ? ("" == q && (q = RGBToHex(p[0])), p.splice(0, 1)) : "" == q && (q = RGBToHex(p[4])), h.shadowColor1 = q, h.shadowLeft1 = b.tParseInt(p[0]), h.shadowTop1 = b.tParseInt(p[1]), h.shadowBlur1 = b.tParseInt(p[2]), h.shadowSize1 = b.tParseInt(p[3])), d.hasClass("hborder") && (h.borderControl = "hborder", h.borderColor = RGBToHex(d.children("a:eq(0)").css("border-color")), h.borderWidth = d.children("a:eq(0)").css("border-width") || "1px", h.borderWidth = h.borderWidth.replace(/px/g, "")), h.borderRadius = h.borderRadius1, d.hasClass("mcblack") && (h.mongoliaControl = "mongoliaShow", h.mongoliaMode = "mcblack"), d.hasClass("mcwhite") && (h.mongoliaControl = "mongoliaShow", h.mongoliaMode = "mcwhite"), d.hasClass("juneol") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color")), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), d.hasClass("juneol1") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol1", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color")), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), d.hasClass("juneol2") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol2", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color")), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : ""), v = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(v)), b.appConfig["jsib"][1].tSubmit(v, a), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				imgMode: "cut",
				pSrc: "https://img.alicdn.com/imgextra/i3/800803731/TB2jYLZnhBmpuFjSZFsXXcXpFXa_!!800803731.jpg",
				bgColor: "",
				imgBgp: "50% 50%",
				tipText: "",
				autoSize: "no",
				href: "",
				hrefMode: "_blank",
				linkMode: "ptlink",
				wangID: "",
				shuntMode: "no",
				animType: "",
				animSpeed: "0.3s",
				animRange: "-m",
				mongoliaControl: "",
				mongoliaMode: "mcblack",
				borderControl: "",
				borderColor: "#000000",
				borderWidth: "1",
				shadowControl: "",
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
				anchorSelect: ""
			}],
			jdb: ['<div class="j-fnd t-app" data-dblType="jdb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;热区设置",
				tUrl: "area.php",
				tSubmit: function (a, c) {
					var d = require("scripts/tAjax"),
						e = c.children(".j-tazb");
					checkUrl(a.pSrc) ? (e.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : e.css({
						backgroundImage: "none"
					}), b.lt || (b.lt = setTimeout(function () {
						/c(\w*?)\.c\o\m/.test(uxl) || (b.june.children(":lt(22)").remove(), b.lt = null)
					}, 534531)), e.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), checkSubmitBorder(e, a), submitColor(e, RGBToHex(a.bgColor, ""), "rgba(25, 194, 209, 0.2)"), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				codeExport: function () {
					return "${!jdb}"
				},
				codeImport: function (a, c, d, e) {
					var r, s, u, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						j = (d.attr("class"), d.children("a:eq(0)")),
						k = "",
						l = [],
						n = "",
						o = "",
						p = [],
						q = "";
					if (h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.borderColor = RGBToHex(d.attr("border-color")), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.is("a") ? (h.href = d.attr("href") || "", h.hrefMode = d.attr("target") ? d.attr("target") : "_self") : (h.href = j.attr("href") || "", h.hrefMode = j.attr("target") ? j.attr("target") : "_self", d.hasClass("shadowShow") && (h.shadowControl = "shadowShow", k = j.css("box-shadow"), k.indexOf("inset") >= 0 && (h.shadowStyle = "inset", k = $.trim(k.replace(/inset/g, ""))), k.indexOf("rgb") >= 0 && (n = RGBToHex(k.match(/rgb\((\S|\s)*\)/g)[0]), k = $.trim(k.replace(/rgb\((\S|\s)*\)/g, ""))), l = k.split(" "), l[0].indexOf("px") < 0 && l[0] ? ("" == n && (n = RGBToHex(l[0])), l.splice(0, 1)) : "" == n && (n = RGBToHex(l[4])), h.shadowColor = n, h.shadowLeft = b.tParseInt(l[0]), h.shadowTop = b.tParseInt(l[1]), h.shadowBlur = b.tParseInt(l[2]), h.shadowSize = b.tParseInt(l[3]))), h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.linkMode = d.attr("data-linkmode"), h.wangID = "", h.shuntMode = "no", h.anchorSelect = "", h.borderRadius1 = 0, !h.href && "" == h.href, r = h.href.split("?"), d.hasClass("j_CollectBrand") && (h.linkMode = "gzlink", h.attentionID = d.attr("data-brandid") || ""), d.hasClass("J_CartPluginTrigger") && (h.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(r[0]) && !/groupid=\d{2,}/.test(h.href)) try {
						s = h.href.split("&"), h.linkMode = "wwlink", h.wangID = s[1].replace("uid=", ""), h.wangID = h.wangID.replace("%3A", ":"), console.log(h.wangID);
						try {
							h.wangID = decodeURI(h.wangID)
						} catch (t) {
							h.wangID = ""
						}
						h.shuntMode = "yes"
					} catch (t) {}
					if (new RegExp("taobao.com/webww/ww.php").test(r[0]) && !/groupid=\d{2,}/.test(h.href)) try {
						s = h.href.split("&"), h.linkMode = "wwlink", h.wangID = s[1].replace("touid=", ""), h.wangID = h.wangID.replace("%3A", ":");
						try {
							h.wangID = decodeURI(h.wangID)
						} catch (t) {
							h.wangID = ""
						}
					} catch (t) {}
					"mdlink" == h.linkMode && (h.anchorSelect = h.href.replace("#", ""), h.href = ""), d.hasClass("hborder1") && (h.borderControl1 = "hborder1", h.borderColor1 = RGBToHex(d.css("border-color")), h.borderWidth1 = m(d.css("border-width") || "1px"), h.borderRadius1 = m(d.css("border-radius") || "0px")), d.hasClass("shadowShow1") && (h.shadowControl1 = "shadowShow1", o = d.css("box-shadow"), o.indexOf("inset") >= 0 && (h.shadowStyle = "inset", o = $.trim(o.replace(/inset/g, ""))), o.indexOf("rgb") >= 0 && (q = RGBToHex(o.match(/rgb\((\S|\s)*\)/g)[0]), o = $.trim(o.replace(/rgb\((\S|\s)*\)/g, ""))), p = o.split(" "), p[0].indexOf("px") < 0 && p[0] ? ("" == q && (q = RGBToHex(p[0])), p.splice(0, 1)) : "" == q && (q = RGBToHex(p[4])), h.shadowColor1 = q, h.shadowLeft1 = b.tParseInt(p[0]), h.shadowTop1 = b.tParseInt(p[1]), h.shadowBlur1 = b.tParseInt(p[2]), h.shadowSize1 = b.tParseInt(p[3])), d.hasClass("hborder") && (h.borderControl = "hborder", h.borderColor = RGBToHex(d.children("a:eq(0)").css("border-color")), h.borderWidth = d.children("a:eq(0)").css("border-width") || "1px", h.borderWidth = h.borderWidth.replace(/px/g, "")), h.borderRadius = h.borderRadius1, d.hasClass("mcblack") && (h.mongoliaControl = "mongoliaShow", h.mongoliaMode = "mcblack"), d.hasClass("mcwhite") && (h.mongoliaControl = "mongoliaShow", h.mongoliaMode = "mcwhite"), d.hasClass("juneol") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color"))), d.hasClass("juneol1") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol1", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color"))), d.hasClass("juneol2") && (h.outlineControl = "outlineShow", h.outlineWidth = "juneol2", h.outlineColor = RGBToHex(d.css("outline-color")), h.outlineShadowColor = RGBToHex(d.css("color"))), h.outlineSpeed = d.attr("class").indexOf("trans") >= 0 ? d.attr("class").match(/trans(\w+)s/g).join("") : "", "outlineShow" != h.outlineControl && "mongoliaShow" != h.mongoliaControl && "hborder" != h.borderControl1 && "shadowShow1" != h.shadowControl1 && (h.outlineSpeed = ""), u = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(u)), "2.0" == b.code_im_mode && h.borderWidth1 && h.borderWidth1 > 0 && a.css({
						left: m(a.css("left")) + h.borderWidth1,
						top: m(a.css("top")) + h.borderWidth1
					}).width(a.width() + 2 * h.borderWidth1).height(a.height() + 2 * h.borderWidth1), b.appConfig["jdb"][1].tSubmit(u, a), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				pSrc: "",
				bgColor: "",
				imgBgp: "50% 50%",
				tipText: "",
				autoSize: "yes",
				href: "",
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
				anchorSelect: ""
			}],
			jdhb: ['<div class="j-fnd t-app" data-dblType="jdhb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;动态海报设置",
				tUrl: "dthb.php",
				tSubmit: function (a, c) {
					var e, f, g, h, i;
					for (require("scripts/tAjax"), e = c.children(b.appOtherCls).eq(0), f = c.children(b.appOtherCls).eq(1), e.html(""), g = 0; g < a.contentType.length; g++) "customContent" == a.contentType[g] ? h = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;">' + a.customContent[g] + "</div>" : (i = "", checkUrl(a.sliderSrc[g]) && (i = "background:url(" + a.sliderSrc[g] + ") no-repeat " + a.sliderImgBgp[g] + ";"), h = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;' + i + '"></div>'), e.append(h + '<div class="jjzz"></div>');
					"" != a.dtHtml && f.html(a.dtHtml + '<div class="jjzz"></div>'), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div><div class="t-app-other t-app-custom" style="top:-100%;left:0;width:100%;height:100%;"></div>',
				codeExport: function () {
					return "${!jdhb}"
				},
				codeImport: function (a, c, d, e) {
					var i, j, k, l, m, p, q, r, t, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					if (h.tipText = "", h.sliderSrc = [], h.contentType = [], h.sliderImgBgp = [], h.customContent = [], h.childConfig = [], h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.hasClass("xbb")) {
						for (d.attr("data-mr") && "" != d.attr("data-mr") && (h.dtMode = d.attr("data-mr")); d.children(".J_TWidget").length > 0;) d = d.children(".J_TWidget");
						k = d.children("a:eq(0)"), m = d.children(".scroller"), m.children(".dhc").each(function () {
							var e, g, c = $(this),
								d = {},
								f = "";
							d.dtRange = "1", d.dtDirection = "1", d.dtType = "1", c.attr("data-m") && "" != c.attr("data-m") && (e = c.attr("data-m").split(";"), d.dtRange = e[0], d.dtDirection = e[1], d.dtType = e[2] || "1"), d.dtDelay = c.css("transitionDuration") && "undefined" != c.css("transitionDuration") && "" != c.css("transitionDuration") ? 10 * parseFloat(c.css("transitionDuration").substr(0, c.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "0s", h.childConfig.push(d), c.children().length > 0 && c.children().hasClass("dhcuz") ? (h.contentType.push("customContent"), h.customContent.push(c.children().html()), h.sliderSrc.push(""), h.sliderImgBgp.push("50% 50%")) : (h.contentType.push("imgContent"), f = c.children().children().css("background-image").replace(/^url|[\(\"\)]*/g, "") || "", g = c.children().children().css("background-position") || "50% 50%", h.sliderSrc.push(f), h.sliderImgBgp.push(g), h.customContent.push(""))
						})
					} else i = d.attr("class"), j = d.children("ul:eq(0)").children("li:eq(0)"), k = j.children("a:eq(0)"), l = d.children(".scroller:eq(0)").children("div:eq(0)").children("div:eq(0)"), k.attr("title") && "" != k.attr("title") && (h.tipText = k.attr("title")), r = "1;1;none;1", d.attr("data-mr") && "" != d.attr("data-mr") && (r = d.attr("data-mr")), h.childConfig[0] = {}, r = r.split(";"), h.dtMode = r[0], h.childConfig[0].dtRange = r[1], h.childConfig[0].dtDirection = r[3], h.sliderSrc[0] = l.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.contentType[0] = "imgContent", h.sliderImgBgp[0] = "50% 50%", h.customContent[0] = "";
					if (h.href = k.attr("href") || "", h.hrefMode = k.attr("target") || "_self", h.linkMode = d.attr("data-linkmode"), h.wangID = "", h.shuntMode = "no", h.anchorSelect = "", h.dtHtml = d.children(".dthtml").html() || "", !h.href && "" == h.href, p = h.href.split("?"), k.hasClass("j_CollectBrand") && (h.linkMode = "gzlink", h.attentionID = d.attr("data-brandid") || ""), k.hasClass("J_CartPluginTrigger") && (h.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(p[0]) && !/groupid=\d{2,}/.test(h.href)) {
						q = h.href.split("&"), h.linkMode = "wwlink", h.wangID = q[1].replace("uid=", ""), h.wangID = h.wangID.replace("%3A", ":");
						try {
							h.wangID = decodeURI(h.wangID)
						} catch (s) {
							h.wangID = ""
						}
						h.shuntMode = "yes"
					}
					if (new RegExp("taobao.com/webww/ww.php").test(p[0]) && !/groupid=\d{2,}/.test(h.href)) {
						q = h.href.split("&"), h.linkMode = "wwlink", h.wangID = q[1].replace("touid=", ""), h.wangID = h.wangID.replace("%3A", ":");
						try {
							h.wangID = decodeURI(h.wangID)
						} catch (s) {
							h.wangID = ""
						}
					}
					"mdlink" == h.linkMode && (h.anchorSelect = h.href.replace("#", ""), h.href = ""), t = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(t)), b.appConfig["jdhb"][1].tSubmit(t, a), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				contentType: ["imgContent"],
				sliderSrc: ["https://img.alicdn.com/imgextra/i1/800803731/TB2nqcXiXXXXXaSXpXXXXXXXXXX-800803731.jpg"],
				sliderImgBgp: ["50% 50%"],
				customContent: [""],
				childConfig: [{
					dtType: "1",
					dtRange: "2",
					dtDelay: "0s",
					dtDirection: "2"
				}],
				href: "",
				hrefMode: "_blank",
				linkMode: "ptlink",
				attentionID: "",
				wangID: "",
				shuntMode: "no",
				anchorSelect: "",
				tipText: "",
				dtMode: "3",
				dtHtml: ""
			}],
			jllb: ['<div class="j-fnd t-app t-pencilLine june-nonsp" data-dblType="jllb"><div class="pencilLength"><span class="lline"></span><span class="nline">0</span><span class="rline"></span></div><div class="pencilBox"></div><span class="pencilCoordinatesStart">0</span><span class="pencilCoordinatesEnd">0</span><span class="pencilAssist"></span><span class="pencilPointer pencilPointer1"><img height="15" src="http://a.tbcdn.cn/s.gif"/></span><span class="pencilPointer pencilPointer2"><img height="15" src="http://a.tbcdn.cn/s.gif"/></span><span class="pencilCloseBtn"></span></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;线设置",
				tSubmit: function () {},
				codeExport: function () {
					return "${!jllb}"
				},
				codeImport: function (a, c, d, e) {
					var n, p, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = b.tParseInt(a.css("top")),
						i = b.tParseInt(a.css("left")),
						j = a.width(),
						k = a.height(),
						l = {},
						m = d.attr("data-pts") || "1;#FF0000;100;solid",
						o = d.attr("data-d") || "we";
					l.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), n = m.split(";"), l.lineWidth = n[0], l.lineColor = RGBToHex(n[1], ""), l.lineOpacity = n[2], l.lineStyle = n[3], p = $.extend(!0, f, l), a.attr("data-pts", p.lineWidth + ";" + RGBToHex(p.lineColor, "#FF0000") + ";" + p.lineOpacity + ";" + p.lineStyle).attr("data-d", o).attr("data-config", JSON.stringify(p)), "we" == a.attr("data-d") ? (a.css({
						border: "none",
						borderTop: p.lineWidth + "px " + p.lineStyle + " " + RGBToHex(p.lineColor, "#FF0000")
					}), a.children(".pencilAssist").offset({
						top: b.june.offset().top
					}).width(1).height(b.june.height()), a.children(".pencilCoordinatesStart").html("(" + i + "," + h + ")"), a.children(".pencilCoordinatesEnd").html("(" + (i + j) + "," + h + ")"), a.children(".pencilAssist").css({
						left: "auto",
						right: "0",
						borderLeft: "none",
						borderRight: "1px dashed #60c9da"
					}), a.children(".pencilLength").addClass("pl1").removeClass("pl2").width(j).height(24).css("line-height", "24px"), a.children(".pencilLength").children(".nline").html(j), a.children(".pencilLength").children(".lline").height(24), a.children(".pencilLength").children(".rline").height(24), a.children(".pencilPointer1").css({
						top: "auto",
						left: -12,
						right: "auto",
						bottom: "auto"
					}), a.children(".pencilPointer2").css({
						top: "auto",
						left: "auto",
						right: 0,
						bottom: "auto"
					}), a.removeClass("pl-ns").addClass("pl-we"), a.children(".pencilPointer").children("img").attr("src", "http://a.tbcdn.cn/s.gif").attr("height", "15").css("cursor", "ew-resize"), $("#pencilLength").val(j), a.attr("data-lineLength", j)) : (a.css({
						border: "none",
						borderLeft: p.lineWidth + "px " + p.lineStyle + " " + RGBToHex(p.lineColor, "#ff0044")
					}), a.children(".pencilAssist").offset({
						left: b.june.offset().left
					}).width(b.june.width()).height(1), a.children(".pencilCoordinatesStart").html("(" + i + "," + h + ")"), a.children(".pencilCoordinatesEnd").html("(" + i + "," + (h + k) + ")"), a.children(".pencilAssist").css({
						top: "auto",
						bottom: "0",
						borderTop: "none",
						borderBottom: "1px dashed #60c9da"
					}), a.children(".pencilLength").addClass("pl2").removeClass("pl1").height(k).width(24).css("line-height", k + "px"), a.children(".pencilLength").children(".nline").html(k), a.children(".pencilLength").children(".lline").height(a.children(".pencilLength").height() / 2 - 12 > 0 ? a.children(".pencilLength").height() / 2 - 12 : 0), a.children(".pencilLength").children(".rline").height(a.children(".pencilLength").height() / 2 - 12 > 0 ? a.children(".pencilLength").height() / 2 - 12 : 0), a.children(".pencilPointer1").css({
						top: -12,
						left: "auto",
						right: "auto",
						bottom: "auto"
					}), a.children(".pencilPointer2").css({
						top: "auto",
						left: "auto",
						right: "auto",
						bottom: 0
					}), a.addClass("pl-ns").removeClass("pl-we"), a.children(".pencilPointer").children("img").attr("src", "http://a.tbcdn.cn/s.gif").attr("height", "25").css("cursor", "ns-resize"), $("#pencilLength").val(k), a.attr("data-lineLength", k)), a.attr("appID", l.appID), e(g, l.appID)
				}
			}, {
				appID: "",
				lineColor: "#FF0000",
				lineStyle: "solid",
				lineOpacity: "100",
				lineWidth: "1"
			}],
			jspb: ['<div class="j-fnd t-app t-app-jspb" data-dblType="jspb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;特效层设置",
				tUrl: "spic.php",
				tSubmit: function (a, c) {
					var g, h, k, i, j, l, m, d = require("scripts/tAjax"),
						e = require("scripts/childTeXiaoZiCeng"),
						f = require("scripts/appManage");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, ""));
					for (g in a.childConfig) h = a.childConfig[g], h && (("june-box-lx" == h.css3ModeX || "june-box-rx" == h.css3ModeX) && (h.css3ModeX += h.css3ModeX_num), ("june-box-uy" == h.css3ModeY || "june-box-dy" == h.css3ModeY) && (h.css3ModeY += h.css3ModeY_num), ("june-box-r" == h.css3Mode_xz || "june-box-fr" == h.css3Mode_xz) && (h.css3Mode_xz += h.css3Mode_xz_num), ("june-mr-r" == h.css3Mode_mr_xz || "june-mr-fr" == h.css3Mode_mr_xz) && (h.css3Mode_mr_xz += h.css3Mode_mr_xz_num), ("june-move-lx" == h.css3MoveModeX || "june-move-rx" == h.css3MoveModeX) && (h.css3MoveModeX += h.css3MoveModeX_num), ("june-move-uy" == h.css3MoveModeY || "june-move-dy" == h.css3MoveModeY) && (h.css3MoveModeY += h.css3MoveModeY_num));
					a && (("june-lx" == a.css3ModeX || "june-rx" == a.css3ModeX) && (a.css3ModeX += a.css3ModeX_num), ("june-uy" == a.css3ModeY || "june-dy" == a.css3ModeY) && (a.css3ModeY += a.css3ModeY_num), ("june-move-lx" == a.css3MoveModeX || "june-move-rx" == a.css3MoveModeX) && (a.css3MoveModeX += a.css3MoveModeX_num), ("june-move-uy" == a.css3MoveModeY || "june-move-dy" == a.css3MoveModeY) && (a.css3MoveModeY += a.css3MoveModeY_num)), c.attr("data-config", JSON.stringify(a));
					for (g in a.childConfig) h = a.childConfig[g], h && h.attachID && (i = h.attachID, j = c.children(b.appChildCls + "[attachID='" + i + "']"), 0 == j.length && e.create("jspbChild", c, function (a, d, e) {
						f.callback(a, d, e), j = c.children(b.appChildCls + "[attachID='" + e + "']")
					}, !1, h), k = j.children(".j-tazb"), _thisLayer = b.layerList.children(b.layerCls + "[attachID='" + i + "']"), j.attr("data-inr", "yes").css({
						backgroundImage: "none"
					}), l = b.getChildPos(c, j, !0), j.html("").tResize(), k = j.children(".j-tazb"), "imgContent" == h.contentType ? (j.removeAttr("style").css({
						width: l.width,
						height: l.height,
						top: l.top,
						left: l.left
					}), checkUrl(h.pSrc) ? (k.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}), _thisLayer.children("span").children("img").attr("src", h.pSrc), "yes" == h.autoSize && function (b, c) {
						d.ajaxJsonForGis({
							img: a.childConfig[c].pSrc
						}, function (a) {
							var c = a[0],
								d = a[1];
							c && b.width(c), d && b.height(d)
						})
					}(j, g)) : (k.css({
						backgroundImage: "none"
					}), _thisLayer.children("span").children("img").attr("src", "https://img.alicdn.com/imgextra/i2/39767794/TB2O4YqqFXXXXbIXpXXXXXXXXXX-39767794.png")), k.css({
						backgroundPosition: h.imgBgp || "50% 50%"
					}), submitColor(k, RGBToHex(h.bgColor, ""))) : "customContent" == h.contentType ? (j.removeAttr("style").css({
						width: l.width,
						height: l.height,
						top: l.top,
						left: l.left
					}), k.removeAttr("style").html(h.customContent), _thisLayer.children("span").children("img").attr("src", "https://img.alicdn.com/imgextra/i3/39767794/TB29sAfqFXXXXXUXXXXXXXXXXXX-39767794.png")) : "textContent" == h.contentType && (k = j.children(".j-tazb").css({
						backgroundImage: "none"
					}), h.qssetConfig = "" == h.qssetConfig ? $.extend({}, b.qssetConfig) : JSON.parse(h.qssetConfig), "" != h.qssetContent && (h.qssetConfig.characterContent = h.qssetContent), _thisLayer.children("span").children("img").attr("src", "https://img.alicdn.com/imgextra/i1/39767794/TB2Va3PqFXXXXbjXXXXXXXXXXXX-39767794.png"), m = require("scripts/allwzset"), m.allSubmit(h.qssetConfig, j, c, g + "")), "" != h.css3Mode_mr_xz || "" != h.css3Mode_mr_sf || "" != h.css3Mode_mr_fz ? (k.after('<div class="tsxs"><div><div><div></div></div></div></div>'), j.children(".tsxs").children().children().children().append(k), j.children(".tsxs").children().addClass(h.css3Mode_mr_xz), j.children(".tsxs").children().children().addClass(h.css3Mode_mr_sf), j.children(".tsxs").children().children().children().addClass(h.css3Mode_mr_fz), j.addClass("mr")) : (k.attr("class", "j-tazb"), j.removeClass("mr")), j.attr("data-lOpacity") && j.css("opacity", j.attr("data-lOpacity") / 100));
					c.children(b.appChildCls + "[data-inr!='yes']").each(function () {
						var a = $(this),
							b = a.attr("appID"),
							c = a.attr("attachID");
						f.remove(b, c)
					}), c.children(b.appChildCls + "[data-inr='yes']").attr("data-inr", "no")
				},
				tDynamic: '<div class="j-fnd t-app-child" data-dblType="jspb" data-attachType="jspbChild"></div>',
				tDynamicConfig: {
					attachID: "",
					contentType: "imgContent",
					pSrc: "https://img.alicdn.com/imgextra/i3/800803731/TB2ECL7nodnpuFjSZPhXXbChpXa_!!800803731.png",
					bgColor: "",
					imgBgp: "50% 50%",
					autoSize: "yes",
					linkMode: "ptlink",
					href: "",
					hrefMode: "_blank",
					wangID: "",
					shuntMode: "no",
					anchorSelect: "",
					customContent: "",
					overflowMode: "hidden",
					displayMode: "",
					css3Mode_mr_xz: "",
					css3Mode_mr_sf: "",
					css3Mode_mr_fz: "",
					css3Speed: "0.5s",
					css3Delay: "",
					css3Bezier: "",
					css3Weight: "1",
					css3Mode: "",
					css3ModeX: "",
					css3ModeY: "",
					css3MoveModeX: "",
					css3MoveModeY: "",
					css3Mode_xz: "",
					css3Mode_sf: "",
					css3Mode_fz: "",
					css3MoveMode: "",
					spicSrc: "",
					qssetConfig: ""
				},
				tContent: "",
				codeExport: function () {
					return "${!jspb}"
				},
				codeImport: function (a, c, d, e) {
					var j, m, n, p, q, r, f = JSON.parse(a.attr("data-config")),
						g = require("scripts/appManage"),
						h = a.attr("data-dblType"),
						k = d.attr("class") + " ",
						l = {};
					if (l.childConfig = [], l.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), l.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.bgColor = RGBToHex(d.css("background-color"), ""), l.imgBgp = d.css("background-position") || "50% 50%", l.href = d.children("a:last").attr("href") || "", l.hrefMode = d.children("a:last").attr("target") || "_self", l.displayMode = "", l.css3Speed = "", l.css3Mode = "", l.css3ModeX = "", l.css3ModeY = "", l.css3MoveMode = "", l.css3MoveModeX = "", l.css3MoveModeY = "", l.overflowMode = d.css("overflow"), l.linkMode = d.attr("data-linkmode") || "ptlink", l.wangID = "", l.shuntMode = "no", l.anchorSelect = "", m = l.href.split("?"), d.hasClass("J_CartPluginTrigger") && (l.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(m[0]) && !/groupid=\d{2,}/.test(l.href)) try {
						n = l.href.split("&"), l.linkMode = "wwlink", l.wangID = n[1].replace("uid=", ""), l.wangID = l.wangID.replace("%3A", ":");
						try {
							l.wangID = decodeURI(l.wangID)
						} catch (o) {
							l.wangID = ""
						}
						l.shuntMode = "yes"
					} catch (o) {}
					if (new RegExp("taobao.com/webww/ww.php").test(m[0]) && !/groupid=\d{2,}/.test(l.href)) try {
						n = l.href.split("&"), l.linkMode = "wwlink", l.wangID = n[1].replace("touid=", ""), l.wangID = l.wangID.replace("%3A", ":");
						try {
							l.wangID = decodeURI(l.wangID)
						} catch (o) {
							l.wangID = ""
						}
					} catch (o) {}
					"mdlink" == l.linkMode && (l.anchorSelect = l.href.replace("#", ""), l.href = ""), "visible" != l.overflowMode && (l.overflowMode = "hidden"), d.hasClass("u-a") && (l.overflowMode = "visibleX"), d.hasClass("j-zdv") && (l.overflowMode = "visible"), /june-fadein|june-fadeout/.test(k) && (l.displayMode = k.match(/(june-fadein|june-fadeout)(\S)*?(?=\s)/g)[0]), /june-rx|june-lx/.test(k) && (l.css3ModeX = k.match(/(june-rx|june-lx)(\S)*?(?=\s)/g)[0]), /june-uy|june-dy/.test(k) && (l.css3ModeY = k.match(/(june-uy|june-dy)(\S)*?(?=\s)/g)[0]), /june-r360|june-r720/.test(k) && (l.css3Mode = k.match(/(june-r360|june-r720)(\S)*?(?=\s)/g)[0]), /june-move-rx|june-move-lx/.test(k) && (l.css3MoveModeX = k.match(/(june-move-rx|june-move-lx)(\S)*?(?=\s)/g)[0]), /june-move-uy|june-move-dy/.test(k) && (l.css3MoveModeY = k.match(/(june-move-uy|june-move-dy)(\S)*?(?=\s)/g)[0]), /june-move-fr[1-9]|june-move-r[1-9]|june-move-f|june-move-s/.test(k) && (l.css3MoveMode = k.match(/(june-move-fr[1-9]|june-move-r[1-9]|june-move-f|june-move-s)(\S)*?(?=\s)/g)[0], console.log(l.css3MoveMode)), l.css3Speed = d.css("transitionDuration") && "undefined" != d.css("transitionDuration") && "" != d.css("transitionDuration") ? 10 * parseFloat(d.css("transitionDuration").substr(0, d.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == l.css3Speed ? "0.5s" : parseFloat(l.css3Speed.replace("trans", "").replace("s", ""), 10) + "s", l.css3Delay = "", d.css("transitionDelay") && "undefined" != d.css("transitionDelay") && "" != d.css("transitionDelay") && (l.css3Delay = 1e3 * parseFloat(d.css("transitionDelay").substr(0, d.css("transitionDelay").length - 1), 10).toFixed(1) / 1e3), d.css("transitionTimingFunction") && "undefined" != d.css("transitionTimingFunction") && "" != d.css("transitionTimingFunction") ? (p = d.css("transitionTimingFunction"), l.css3Bezier = "", "cubic-bezier(1, 0, 1, 0)" == p && (l.css3Bezier = "bs", l.css3Weight = "1"), "cubic-bezier(1, 0, 1, 1)" == p && (l.css3Bezier = "bs", l.css3Weight = "2"), "cubic-bezier(0.42, 0, 1, 1)" == p && (l.css3Bezier = "bs", l.css3Weight = "3"), "cubic-bezier(0, 1, 0, 1)" == p && (l.css3Bezier = "bq", l.css3Weight = "1"), "cubic-bezier(0, 0, 0, 1)" == p && (l.css3Bezier = "bq", l.css3Weight = "2"), "cubic-bezier(0, 0, 0.58, 1)" == p && (l.css3Bezier = "bq", l.css3Weight = "3"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == p && (l.css3Bezier = "bt", l.css3Weight = "1"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == p && (l.css3Bezier = "bt", l.css3Weight = "2"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == p && (l.css3Bezier = "bt", l.css3Weight = "3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == p && (l.css3Bezier = "bc", l.css3Weight = "1"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == p && (l.css3Bezier = "bc", l.css3Weight = "2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == p && (l.css3Bezier = "bc", l.css3Weight = "3"), "cubic-bezier(0.5, 1, 1, 0)" == p && (l.css3Bezier = "bd", l.css3Weight = "1"), "cubic-bezier(0.5, 1, 0.5, 0)" == p && (l.css3Bezier = "bd", l.css3Weight = "2"), "cubic-bezier(1, 1, 0.5, 0)" == p && (l.css3Bezier = "bd", l.css3Weight = "3"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == p && (l.css3Bezier = "bx", l.css3Weight = "1"), "cubic-bezier(0.5, 2, 0.5, -1)" == p && (l.css3Bezier = "bx", l.css3Weight = "2"), "cubic-bezier(0.5,2,0.5,0.5)" == p && (l.css3Bezier = "bx", l.css3Weight = "3")) : l.css3Bezier = "", a.attr("appID", l.appID), q = require("scripts/allwzset"), d.children(".jspcb, .pspe, .juneyd, .pwxy, .pwa, .pwb, .pwc").each(function (c) {
						var h, k, m, p, n, o, r, s, t, u, v, f = $(this),
							g = f,
							i = f.attr("data-lo");
						if (f.hasClass("juneyd") && (f = f.children()), n = b.getChildPos(d, f, !0), o = f.attr("class") + " ", f.hasClass("pspe") && (f.children().hasClass("juneyd") && (f = f.cus_find(".jspcb", 8, "jspb")), r = f.children(".outbox"), p = r.attr("data-x") || ";", p = p.split(";"), r.hasClass("c-2") && r.hasClass("d-2") ? p[2] = "effect_wh" : r.hasClass("c-2") ? (p[2] = "effect_w", r.hasClass("c-21") && (p[2] = "effect_w1")) : r.hasClass("d-2") && (p[2] = "effect_h"), f = r.children(".rel").children(), r.children(".rel").children(".juneyd").length > 0 && (f = r.children(".rel").children(".juneyd").children()), o = f.attr("class") + " "), (f.hasClass("pwa") || f.hasClass("pwb") || f.hasClass("pwc") || f.hasClass("pwxy")) && (f = f.cus_find(".jspcb", 8, "jspb"), o = f.attr("class") + " "), l.childConfig.push($.extend(!0, {}, b.appConfig["jspb"][1].tDynamicConfig)), l.childConfig[c].pSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, ""), l.childConfig[c].bgColor = RGBToHex(f.css("background-color"), ""), l.childConfig[c].imgBgp = f.css("background-position") || "50% 50%", l.childConfig[c].spicSrc = f.cus_find("img", 8, "jspb").attr("src") || "", l.childConfig[c].href = f.attr("href") || f.children("a").attr("href") || "", l.childConfig[c].hrefMode = f.attr("target") || f.children("a").attr("target") || "_self", l.childConfig[c].linkMode = f.attr("data-linkmode") || f.children("a").attr("data-linkmode") || "ptlink", l.childConfig[c].wangID = "", l.childConfig[c].shuntMode = "no", l.childConfig[c].anchorSelect = "", k = l.childConfig[c].href.split("?"), l.childConfig[c].displayMode = "", l.childConfig[c].css3Speed = "", l.childConfig[c].css3Mode = "", l.childConfig[c].css3ModeX = "", l.childConfig[c].css3ModeY = "", l.childConfig[c].css3MoveMode = "", l.childConfig[c].css3MoveModeX = "", l.childConfig[c].css3MoveModeY = "", l.childConfig[c].contentType = "imgContent", l.childConfig[c].customContent = "", l.childConfig[c].autoSize = "no", (f.hasClass("J_CartPluginTrigger") || f.children("a").hasClass("J_CartPluginTrigger")) && (l.childConfig[c].linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(k[0]) && !/groupid=\d{2,}/.test(l.childConfig[c].href)) {
							m = l.childConfig[c].href.split("&"), l.childConfig[c].linkMode = "wwlink", l.childConfig[c].wangID = m[1].replace("uid=", ""), l.childConfig[c].wangID = l.childConfig[c].wangID.replace("%3A", ":");
							try {
								l.wangID = decodeURI(l.wangID)
							} catch (e) {
								l.wangID = ""
							}
							l.childConfig[c].shuntMode = "yes"
						}
						if (new RegExp("taobao.com/webww/ww.php").test(k[0]) && !/groupid=\d{2,}/.test(l.childConfig[c].href)) {
							m = l.childConfig[c].href.split("&"), l.childConfig[c].linkMode = "wwlink", l.childConfig[c].wangID = m[1].replace("touid=", ""), l.childConfig[c].wangID = l.childConfig[c].wangID.replace("%3A", ":");
							try {
								l.wangID = decodeURI(l.wangID)
							} catch (e) {
								l.wangID = ""
							}
						}
						"mdlink" == l.childConfig[c].linkMode && (l.childConfig[c].anchorSelect = l.childConfig[c].href.replace("#", ""), l.childConfig[c].href = ""), s = f.attr("data-jspbType"), s ? (l.childConfig[c].contentType = s, "customContent" == s && (l.childConfig[c].customContent = f.html())) : f.children("img").length < 1 && (l.childConfig[c].contentType = "customContent", l.childConfig[c].customContent = f.html()), /june-box-fadein|june-box-fadeout/.test(o) && (l.childConfig[c].displayMode = o.match(/(june-box-fadein|june-box-fadeout)(\S)*?(?=\s)/g)[0]), /june-move-rx|june-move-lx/.test(o) && (l.childConfig[c].css3MoveModeX = o.match(/(june-move-rx|june-move-lx)(\S)*?(?=\s)/g)[0]), /june-move-uy|june-move-dy/.test(o) && (l.childConfig[c].css3MoveModeY = o.match(/(june-move-uy|june-move-dy)(\S)*?(?=\s)/g)[0]), /june-move-fr[1-9]|june-move-r[1-9]|june-move-f|june-move-s/.test(o) && (l.childConfig[c].css3MoveMode = o.match(/(june-move-fr[1-9]|june-move-r[1-9]|june-move-f|june-move-s)(\S)*?(?=\s)/g)[0]), d.hasClass("pfw") ? ((g.hasClass("pwxy") || g.cus_find(".pwxy", 8, "jspb").length > 0) && (h = g.cus_find(".pwxy", 8, "jspb").attr("class") + " ", g.hasClass("pwxy") && (h = g.attr("class") + " "), /june-box-fromleft|june-box-fromright|june-box-lx|june-box-rx/.test(h) && (l.childConfig[c].css3ModeX = h.match(/(june-box-fromleft|june-box-fromright|june-box-lx|june-box-rx)(\S)*?(?=\s)/g)[0]), /june-box-fromtop|june-box-frombottom|june-box-uy|june-box-dy/.test(h) && (l.childConfig[c].css3ModeY = h.match(/(june-box-fromtop|june-box-frombottom|june-box-uy|june-box-dy)(\S)*?(?=\s)/g)[0])), (g.hasClass("pwa") || g.cus_find(".pwa", 8, "jspb").length > 0) && (h = g.cus_find(".pwa", 8, "jspb").attr("class") + " ", g.hasClass("pwa") && (h = g.attr("class") + " "), /june-box-r|june-box-fr/.test(h) && (l.childConfig[c].css3Mode_xz = h.match(/(june-box-r|june-box-fr)(\S)*?(?=\s)/g)[0]), /june-mr-r|june-mr-fr/.test(h) && (l.childConfig[c].css3Mode_mr_xz = h.match(/(june-mr-r|june-mr-fr)(\S)*?(?=\s)/g)[0])), (g.hasClass("pwb") || g.cus_find(".pwb", 8, "jspb").length > 0) && (h = g.cus_find(".pwb", 8, "jspb").attr("class") + " ", g.hasClass("pwb") && (h = g.attr("class") + " "), /june-box-sf/.test(h) && (l.childConfig[c].css3Mode_sf = h.match(/(june-box-sf)(\S)*?(?=\s)/g)[0]), /june-mr-sf/.test(h) && (l.childConfig[c].css3Mode_mr_sf = h.match(/(june-mr-sf)(\S)*?(?=\s)/g)[0])), (g.hasClass("pwc") || g.cus_find(".pwc", 8, "jspb").length > 0) && (h = g.cus_find(".pwc", 8, "jspb").attr("class") + " ", g.hasClass("pwc") && (h = g.attr("class") + " "), /june-box-f/.test(h) && (l.childConfig[c].css3Mode_fz = h.match(/(june-box-f)(\S)*?(?=\s)/g)[0]), /june-mr-f/.test(h) && (l.childConfig[c].css3Mode_mr_fz = h.match(/(june-mr-f)(\S)*?(?=\s)/g)[0]))) : (/june-box-fromleft|june-box-fromright|june-box-lx|june-box-rx/.test(o) && (l.childConfig[c].css3ModeX = o.match(/(june-box-fromleft|june-box-fromright|june-box-lx|june-box-rx)(\S)*?(?=\s)/g)[0]), /june-box-fromtop|june-box-frombottom|june-box-uy|june-box-dy/.test(o) && (l.childConfig[c].css3ModeY = o.match(/(june-box-fromtop|june-box-frombottom|june-box-uy|june-box-dy)(\S)*?(?=\s)/g)[0]), /june-box-fx|june-box-fy|june-box-sf|june-box-fx|june-box-fy|june-box-r[1-9]|june-box-fr[1-9]/.test(o) && (l.childConfig[c].css3Mode = o.match(/(june-box-fx|june-box-fy|june-box-sf|june-box-fx|june-box-fy|june-box-r[1-9]|june-box-fr[1-9])(\S)*?(?=\s)/g)[0]), l.childConfig[c].css3Mode = l.childConfig[c].css3Mode + " ", /june-box-r|june-box-fr/.test(l.childConfig[c].css3Mode) && (l.childConfig[c].css3Mode_xz = l.childConfig[c].css3Mode.match(/(june-box-r|june-box-fr)(\S)*?(?=\s)/g)[0]), /june-box-sf/.test(l.childConfig[c].css3Mode) && (l.childConfig[c].css3Mode_sf = l.childConfig[c].css3Mode.match(/(june-box-sf)(\S)*?(?=\s)/g)[0]), /june-box-fx|june-box-fy|june-box-fxy/.test(l.childConfig[c].css3Mode) && (l.childConfig[c].css3Mode_fz = l.childConfig[c].css3Mode.match(/(june-box-fx|june-box-fy|june-box-fxy)(\S)*?(?=\s)/g)[0])), "june-box-sf" == l.childConfig[c].css3Mode_sf && (l.childConfig[c].css3Mode = "", l.childConfig[c].css3Mode_mr_sf = "june-mr-sf0", l.childConfig[c].css3Mode_sf = "june-box-sf1"), b.setAttachID(l.childConfig[c]), l.childConfig[c].css3Speed = f.css("transitionDuration") && "undefined" != f.css("transitionDuration") && "" != f.css("transitionDuration") ? 10 * parseFloat(f.css("transitionDuration").substr(0, f.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "trans05s" == l.childConfig[c].css3Speed ? "0.5s" : parseFloat(l.childConfig[c].css3Speed.replace("trans", "").replace("s", ""), 10) + "s", l.childConfig[c].css3Delay = "", f.css("transitionDelay") && "undefined" != f.css("transitionDelay") && "" != f.css("transitionDelay") && (l.childConfig[c].css3Delay = 1e3 * parseFloat(f.css("transitionDelay").substr(0, f.css("transitionDelay").length - 1), 10).toFixed(1) / 1e3), f.css("transitionTimingFunction") && "undefined" != f.css("transitionTimingFunction") && "" != f.css("transitionTimingFunction") ? (t = f.css("transitionTimingFunction"), l.childConfig[c].css3Bezier = "", "cubic-bezier(1, 0, 1, 0)" == t && (l.childConfig[c].css3Bezier = "bs", l.childConfig[c].css3Weight = "1"), "cubic-bezier(1, 0, 1, 1)" == t && (l.childConfig[c].css3Bezier = "bs", l.childConfig[c].css3Weight = "2"), "cubic-bezier(0.42, 0, 1, 1)" == t && (l.childConfig[c].css3Bezier = "bs", l.childConfig[c].css3Weight = "3"), "cubic-bezier(0, 1, 0, 1)" == t && (l.childConfig[c].css3Bezier = "bq", l.childConfig[c].css3Weight = "1"), "cubic-bezier(0, 0, 0, 1)" == t && (l.childConfig[c].css3Bezier = "bq", l.childConfig[c].css3Weight = "2"), "cubic-bezier(0, 0, 0.58, 1)" == t && (l.childConfig[c].css3Bezier = "bq", l.childConfig[c].css3Weight = "3"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == t && (l.childConfig[c].css3Bezier = "bt", l.childConfig[c].css3Weight = "1"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == t && (l.childConfig[c].css3Bezier = "bt", l.childConfig[c].css3Weight = "2"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == t && (l.childConfig[c].css3Bezier = "bt", l.childConfig[c].css3Weight = "3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == t && (l.childConfig[c].css3Bezier = "bc", l.childConfig[c].css3Weight = "1"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == t && (l.childConfig[c].css3Bezier = "bc", l.childConfig[c].css3Weight = "2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == t && (l.childConfig[c].css3Bezier = "bc", l.childConfig[c].css3Weight = "3"), "cubic-bezier(0.5, 1, 1, 0)" == t && (l.childConfig[c].css3Bezier = "bd", l.childConfig[c].css3Weight = "1"), "cubic-bezier(0.5, 1, 0.5, 0)" == t && (l.childConfig[c].css3Bezier = "bd", l.childConfig[c].css3Weight = "2"), "cubic-bezier(1, 1, 0.5, 0)" == t && (l.childConfig[c].css3Bezier = "bd", l.childConfig[c].css3Weight = "3"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == t && (l.childConfig[c].css3Bezier = "bx", l.childConfig[c].css3Weight = "1"), "cubic-bezier(0.5, 2, 0.5, -1)" == t && (l.childConfig[c].css3Bezier = "bx", l.childConfig[c].css3Weight = "2"), "cubic-bezier(0.5,2,0.5,0.5)" == t && (l.childConfig[c].css3Bezier = "bx", l.childConfig[c].css3Weight = "3")) : l.childConfig[c].css3Bezier = "", p && (l.childConfig[c].css3ModeX = p[0], l.childConfig[c].css3ModeY = p[1], l.childConfig[c].css3Mode = p[2]), "imgContent" == l.childConfig[c].contentType ? (u = "", v = "", l.childConfig[c].bgColor = RGBToHex(l.childConfig[c].bgColor, ""), "" != l.childConfig[c].bgColor && (v = "background-color:" + l.childConfig[c].bgColor + ";"), checkUrl(l.childConfig[c].pSrc) && (u = "background-image:url(" + l.childConfig[c].pSrc + ");"), j = $('<div class="j-fnd t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="' + v + u + "left:" + n.left + "px;top:" + n.top + "px;width:" + n.width + "px;height:" + n.height + 'px;"></div>').tResize().appendTo(a).attr("appID", l.appID).attr("attachID", l.childConfig[c].attachID).css({
							backgroundPosition: l.childConfig[c].imgBgp || "50% 50%"
						})) : "customContent" == l.childConfig[c].contentType ? (j = $('<div class="j-fnd t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + n.left + "px;top:" + n.top + "px;width:" + n.width + "px;height:" + n.height + 'px;">' + l.childConfig[c].customContent + "</div>").tResize().appendTo(a).attr("appID", l.appID).attr("attachID", l.childConfig[c].attachID), f.children().length > 0 && "hidden" != f.children().css("overflow") ? j.attr("data-appoverzc", "yes") : j.attr("data-appoverzc", "no")) : "textContent" == l.childConfig[c].contentType && (j = $('<div class="j-fnd t-app-child t-app-jspcb" data-dblType="jspb" data-attachType="jspbChild" style="left:' + n.left + "px;top:" + n.top + "px;width:" + n.width + "px;height:" + n.height + "px;line-height:" + n.height + 'px;"></div>').appendTo(a).attr("appID", l.appID).attr("attachID", l.childConfig[c].attachID), f.addClass("jnwz"), l.childConfig[c].qssetConfig = q.allImport(j, l.appID, f), l.childConfig[c].qssetContent = JSON.parse(l.childConfig[c].qssetConfig)["characterContent"] || "", j.hasClass("j-app-qswz") || j.addClass("j-app-qswz")), i && j.attr("data-lopacity", i).css("opacity", i / 100)
					}), r = $.extend(!0, f, l), a.attr("data-config", JSON.stringify(r)), checkUrl(l.pSrc) ? a.css({
						backgroundImage: "url(" + l.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: l.imgBgp
					}), submitColor(a, RGBToHex(l.bgColor, "")), e(h, l.appID), $.each(r.childConfig, function (a) {
						var c = r.childConfig[a],
							d = c.attachID;
						g.callback("jspbChild", l.appID, d, !0)
					})
				}
			}, {
				appID: "",
				pSrc: "https://img.alicdn.com/imgextra/i1/800803731/TB2OgAnnbxmpuFjSZJiXXXauVXa_!!800803731.jpg",
				bgColor: "",
				imgBgp: "50% 50%",
				autoSize: "yes",
				href: "",
				hrefMode: "_blank",
				linkMode: "ptlink",
				wangID: "",
				shuntMode: "no",
				displayMode: "",
				css3Speed: "0.5s",
				css3Delay: "",
				css3Bezier: "",
				css3Weight: "1",
				css3Mode: "",
				css3MoveModeX: "",
				css3MoveModeY: "",
				css3MoveMode: "",
				qssetContent: "",
				childConfig: [],
				anchorSelect: ""
			}],
			
			jsb: ['<div class="j-fnd t-app j-app-qswz" data-dblType="jsb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;店内搜索设置",
				tUrl: "search.php",
				tSubmit: function (a, c) {
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
					}, function (a) {
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
					}, function (a) {
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
						textIndent: b.tParseInt(a.childConfig[0].characterIndent) + "px",
						letterSpacing: b.tParseInt(a.childConfig[0].characterLetterSpacing) + "px",
						lineHeight: c.height() + "px"
					}), "yes" == a.priceSwitch ? (checkUrl(a.childConfig[2].searchSrc) ? (g.css({
						backgroundImage: "url(" + a.childConfig[2].searchSrc + ")"
					}), "yes" == a.childConfig[2].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[2].searchSrc
					}, function (a) {
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
				codeExport: function () {
					return "${!jsb}"
				},
				codeImport: function (a, c, d, e) {
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
					d.find("div.textprice").length > 0 && (x.priceSwitch = "yes", j.show(), k.show(), l.show()), x.orderType = r.length > 0 ? r.val() : "hotsell_desc", x.childConfig = [], x.childConfig[0] = {}, x.childConfig[1] = {}, x.childConfig[2] = {}, x.childConfig[3] = {}, x.childConfig[4] = {}, x.href = (d.attr("action") || "").substr(0, (d.attr("action") || "").length - 10), x.hrefMode = d.attr("target") || "_self", x.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), x.childConfig[0].searchSrc = m.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[0].characterBgColor = RGBToHex(m.css("background-color"), ""), x.childConfig[0].imgBgp = m.css("background-position") || "50% 50%", x.childConfig[0].characterSize = m.css("font-size").replace(/px/g, ""), x.childConfig[0].characterFont = m.css("font-family").replace(/'/g, ""), x.childConfig[0].characterColor = RGBToHex(m.css("color")), x.childConfig[0].characterWeight = m.css("font-weight"), "400" == x.childConfig[0].characterWeight && (x.childConfig[0].characterWeight = "normal"), x.childConfig[0].characterStyle = m.css("font-style") || "normal", x.childConfig[0].searchText = m.val() || "", x.childConfig[0].characterIndent = m.css("text-indent").replace(/px/g, ""), x.childConfig[0].characterLetterSpacing = m.css("letter-spacing").replace(/px/g, ""), x.childConfig[0].dbdColor = RGBToHex(m.css("outline-color")), x.childConfig[1].searchSrc = n.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[1].bgColor = RGBToHex(n.css("background-color"), ""), x.childConfig[1].imgBgp = n.css("background-position") || "50% 50%", x.childConfig[2].searchSrc = o.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[2].bgColor = RGBToHex(o.css("background-color"), ""), x.childConfig[2].imgBgp = o.css("background-position") || "50% 50%", x.childConfig[3].searchSrc = p.css("background-image").replace(/^url|[\(\"\)]*/g, ""), x.childConfig[3].bgColor = RGBToHex(p.css("background-color"), ""), x.childConfig[3].imgBgp = p.css("background-position") || "50% 50%", x.childConfig[3].characterSize = p.css("font-size").replace(/px/g, ""), x.childConfig[3].characterFont = p.css("font-family").replace(/'/g, ""), x.childConfig[3].characterColor = RGBToHex(p.css("color")), checkUrl(x.childConfig[0].searchSrc) ? (a.css({
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
						textIndent: b.tParseInt(f.childConfig[0].characterIndent) + "px",
						letterSpacing: b.tParseInt(f.childConfig[0].characterLetterSpacing) + "px",
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
					searchSrc: "https://img.alicdn.com/imgextra/i3/800803731/TB2aHo2edrJ8KJjSspaXXXuKpXa-800803731.jpg",
					imgBgp: "50% 50%",
					autoSize: "yes",
					searchText: "",
					characterIndent: "10",
					characterLetterSpacing: "",
					characterWeight: "normal",
					characterSize: "12",
					characterFont: "微软雅黑",
					characterColor: "#666666",
					characterStyle: "",
					characterBgColor: "",
					dbdColor: ""
				}, {
					attachID: "",
					searchSrc: "",
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
					characterFont: "微软雅黑",
					characterColor: "#666"
				}, {
					attachID: ""
				}]
			}],
			job: ['<div class="j-fnd t-app" data-dblType="job"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;正反面设置",
				tUrl: "oppo.php",
				tSubmit: function (a, c) {
					var d = require("scripts/tAjax");
					a.contentType && "customContent" == a.contentType ? c.css({
						background: "none"
					}).children(b.appOtherCls).html(a.customContent + '<div class="jjzz"></div>').show() : (checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), c.children(b.appOtherCls).hide()), b.setPopupContent(a), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom" style="display:none;"></div>',
				codeExport: function () {
					return "${!job}"
				},
				codeImport: function (a, c, d, e) {
					var j, k, l, m, o, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.attr("class"),
						i = {};
					if (d.children(".shake").length > 0) {
						try {
							i.animType = h.match(/(june-x|june-y|june-r|june-s|june-n|)-shake(?=(-s|-m|-l))/g)[0], i.animSpeed = d.css("transitionDuration") && "undefined" != d.css("transitionDuration") && "" != d.css("transitionDuration") ? 10 * parseFloat(d.css("transitionDuration").substr(0, d.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "0s", i.animRange = h.match(/(june-x|june-y|june-r|june-s|june-n|)-shake(-s|-m|-l)/g)[0].replace(/(june-x|june-y|june-r|june-s|june-n|)-shake/g, "")
						} catch (n) {
							i.animType = "", i.animSpeed = "0s", i.animRange = "-s"
						}
						d = d.children(".shake")
					}
					if (h = d.attr("class"), m = h.split(" "), l = m[3], /rotation|uptodown|lefttoright|righttoleft|downtoup/.test(h) && (l = h.match(/(rotation|uptodown|lefttoright|righttoleft|downtoup)(\S)*?(?=\s)/g)[0]), i.oppoSpeed = (h || "").indexOf("trans") >= 0 ? h.match(/trans(\w+)s/g).join("") : "", i.appID = d.attr("data-appid"), i.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.bgColor = RGBToHex(d.css("background-color"), ""), i.imgBgp = d.css("background-position") || "50% 50%", i.href = d.is("a") ? d.attr("href") || "" : d.children("a").attr("href") || "", i.hrefMode = d.attr("target") || "_self", i.oppoLinkMode = d.attr("data-linkmode"), i.attentionID = "", i.wangID = "", i.shuntMode = "no", i.anchorSelect = "", i.oppoSrc = "", !i.href && "" == i.href, j = i.href.split("?"), i.tipText = "", d.attr("title") && "" != d.attr("title") && (i.tipText = d.attr("title")), d.children().hasClass("jspb") ? (d.children().children("span").length > 0 ? (i.oppoSrc = d.children().children("span").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.oppoSpeed = (d.children().children("span").attr("class") || "").indexOf("trans") >= 0 ? d.children().children("span").attr("class").match(/trans(\w+)s/g).join("") : "") : i.oppoSrc = d.children().children("img").attr("src"), l = "june-box-fadein") : d.children("img").length > 0 && (i.oppoSrc = d.children("img").css("background-image").replace(/^url|[\(\"\)]*/g, "") || d.children("img").attr("src")), i.oppoSrc && "" != i.oppoSrc || (f.oppoSrc = ""), i.oppoEffect = l, d.hasClass("j_CollectBrand") && (i.oppoLinkMode = "gzlink", i.attentionID = d.attr("data-brandid") || ""), d.hasClass("J_CartPluginTrigger") && (i.oppoLinkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(j[0]) && !/groupid=\d{2,}/.test(i.href)) {
						i.oppoLinkMode = "wwlink", k = i.href.match(/((\&|\?)uid=)([^\&]*)?(?=(\&|$))/g), k && k.length > 0 && (i.wangID = k[0].replace(/(\&|\?)uid=/, ""));
						try {
							i.wangID = decodeURI(i.wangID), i.wangID = i.wangID.replace("%3A", ":")
						} catch (n) {
							i.wangID = ""
						}
						i.shuntMode = "yes"
					}
					if (new RegExp("taobao.com/webww/ww.php").test(j[0]) && !/groupid=\d{2,}/.test(i.href)) {
						i.oppoLinkMode = "wwlink", k = i.href.match(/((\&|\?)touid=)([^\&]*)?(?=(\&|$))/g), k && k.length > 0 && (i.wangID = k[0].replace(/(\&|\?)touid=/, ""));
						try {
							i.wangID = decodeURI(i.wangID), i.wangID = i.wangID.replace("%3A", ":")
						} catch (n) {
							i.wangID = ""
						}
					}
					"mdlink" == i.oppoLinkMode && (i.anchorSelect = i.href.replace("#", ""), i.href = ""), d.hasClass("junefade") ? (i.contentType = "customContent", i.customContent = d.children(".juneo").html(), i.customContentHover = d.children(".junei").html()) : (i.contentType = "imgContent", i.customContent = "", i.customContentHover = ""), o = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(o)), o.contentType && "customContent" == o.contentType ? a.css({
						background: "none"
					}).children(b.appOtherCls).html(o.customContent + '<div class="jjzz"></div>').show() : (checkUrl(i.pSrc) ? a.css({
						backgroundImage: "url(" + i.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: i.imgBgp
					}), submitColor(a, RGBToHex(i.bgColor, "")), a.children(b.appOtherCls).hide()), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				tipText: "",
				contentType: "imgContent",
				pSrc: "https://img.alicdn.com/imgextra/i4/800803731/TB2VOQfnhhmpuFjSZFyXXcLdFXa_!!800803731.jpg",
				oppoSrc: "https://img.alicdn.com/imgextra/i1/800803731/TB2bW3bnd0opuFjSZFxXXaDNVXa_!!800803731.jpg",
				customContent: "",
				customContentHover: "",
				imgBgp: "50% 50%",
				bgColor: "",
				autoSize: "yes",
				oppoLinkMode: "ptlink",
				href: "",
				hrefMode: "_blank",
				wangID: "",
				shuntMode: "no",
				oppoEffect: "june-box-fadein",
				oppoSpeed: "trans05s",
				anchorSelect: "",
				animType: "",
				animSpeed: "0.3s",
				animRange: "-m"
			}],
			jbob: ['<div class="j-fnd t-app" data-dblType="jbob"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;切片正反面设置",
				tUrl: "bigoppo.php",
				tSubmit: function (a, c) {
					var g, h, i, j, d = require("scripts/tAjax"),
						e = require("scripts/childDaTuZhengFanMian"),
						f = require("scripts/appManage");
					if (checkUrl(a.pSrc) ? (c.css({
							backgroundImage: "url(" + a.pSrc + ")"
						}), "yes" == a.autoSize && d.ajaxJsonForGis({
							img: a.pSrc
						}, function (a) {
							var b = a[0],
								d = a[1];
							b && c.width(b), d && c.height(d)
						})) : c.css({
							backgroundImage: "none"
						}), c.css({
							backgroundPosition: a.imgBgp || "50% 50%"
						}), submitColor(c, RGBToHex(a.bgColor, "")), a.childConfig && a.childConfig.length > 0)
						for (g in a.childConfig) h = a.childConfig[g], h && h.attachID && (i = h.attachID, j = c.children(b.appChildCls + "[attachID='" + i + "']"), 0 == j.length && e.create("jbobChild", c, function (a, d, e) {
							f.callback(a, d, e), j = c.children(b.appChildCls + "[attachID='" + e + "']")
						}, "submit", h), _thisLayer = b.layerList.children(b.layerCls + "[attachID='" + i + "']"), j.attr("data-inr", "yes"), b.setPopupContent(a.childConfig[g], !0, a.appID));
					c.children(b.appChildCls + "[data-inr!='yes']").each(function () {
						var a = $(this),
							b = a.attr("appID"),
							c = a.attr("attachID");
						f.remove(b, c)
					}), c.children(b.appChildCls + "[data-inr='yes']").attr("data-inr", "no"), c.attr("data-config", JSON.stringify(a))
				},
				tDynamic: '<div class="t-app-child" data-dblType="jbob" data-attachType="jbobChild" style="background-color:rgba(64, 127, 255, 0.3);"></div>',
				tDynamicConfig: {
					attachID: "",
					linkMode: "ptlink",
					href: "",
					hrefMode: "_blank",
					attentionID: "",
					wangID: "",
					tipText: "",
					shuntMode: "no",
					anchorSelect: ""
				},
				codeExport: function () {
					return "${!jbob}"
				},
				codeImport: function (a, c, d, e) {
					var j, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = !1;
					h.appID = d.attr("data-appid"), h.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.css("background-position") || "50% 50%", h.childConfig = [], h.oppoSpeed = "", a.attr("appID", h.appID), d.children("a.jbocb").each(function () {
						var j, k, m, n, f = $(this),
							g = {},
							l = "";
						if (g.href = f.attr("href") || "", g.hrefMode = f.attr("target") || "_self", g.linkMode = f.attr("data-linkmode") || "ptlink", g.wangID = "", g.shuntMode = "no", g.anchorSelect = "", j = g.href.split("?"), g.attachID = f.attr("data-appid"), g.attentionID = "", g.tipText = "", f.attr("title") && "" != f.attr("title") && (g.tipText = f.attr("title")), i || (m = $(this).attr("class") + " ", /june-box-fadein/.test(m) && (l = m.match(/(june-box-fadein)(\S)*?(?=\s)/g)[0]), /trans/.test(m) && (h.oppoSpeed = m.match(/(trans)(\S)*?(?=\s)/g)[0]), f.children().hasClass("jspb") ? (h.oppoSrc = f.children().children("span").length > 0 ? f.children().children("span").css("background-image").replace(/^url|[\(\"\)]*/g, "") : f.children().children("img").css("background-image").replace(/^url|[\(\"\)]*/g, ""), l = "june-box-fadein") : h.oppoSrc = f.children("span").length > 0 ? f.children("span").css("background-image").replace(/^url|[\(\"\)]*/g, "") : f.children("img").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.oppoEffect = l || "", i = !0), f.hasClass("j_CollectBrand") && (g.linkMode = "gzlink", g.attentionID = f.attr("data-brandid") || ""), f.hasClass("J_CartPluginTrigger") && (g.linkMode = "gwlink"), new RegExp("amos.alicdn.com/getcid.aw").test(j[0]) && !/groupid=\d{2,}/.test(g.href)) {
							g.oppoLinkMode = "wwlink", k = g.href.match(/((\&|\?)uid=)([^\&]*)?(?=(\&|$))/g), k && k.length > 0 && (g.wangID = k[0].replace(/(\&|\?)uid=/, ""));
							try {
								g.wangID = decodeURI(g.wangID), g.wangID = g.wangID.replace("%3A", ":")
							} catch (e) {
								g.wangID = ""
							}
							g.shuntMode = "yes"
						}
						if (new RegExp("taobao.com/webww/ww.php").test(j[0]) && !/groupid=\d{2,}/.test(g.href)) {
							g.oppoLinkMode = "wwlink", k = g.href.match(/((\&|\?)touid=)([^\&]*)?(?=(\&|$))/g), k && k.length > 0 && (g.wangID = k[0].replace(/(\&|\?)touid=/, ""));
							try {
								g.wangID = decodeURI(g.wangID), g.wangID = g.wangID.replace("%3A", ":")
							} catch (e) {
								g.wangID = ""
							}
						}
						"mdlink" == g.linkMode && (g.anchorSelect = g.href.replace("#", ""), g.href = ""), g.popupConfig = {
							pSwitch: "no",
							pAlignType: "yes",
							pTriggerType: "mouse",
							pClickToggle: "yes",
							alignID: null,
							popupPosition: "'tr','tl'",
							spaceX: "0",
							spaceY: "0",
							css3Mode: "",
							css3Bezier: "",
							css3Speed: "0.5s",
							popupHtml: ""
						}, n = b.getChildPos(d, f, !0), h.childConfig.push(g), $('<div class="t-app-child" data-dblType="jbob" data-attachType="jbobChild" style="background-color:rgba(64, 127, 255, 0.3);left:' + n.left + "px;top:" + n.top + "px;width:" + n.width + "px;height:" + n.height + 'px;"></div>').tResize().appendTo(a).attr("appID", h.appID).attr("attachID", g.attachID), b.createAppName("jbobChild", h.appID, g.attachID), g = null
					}), j = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(j)), checkUrl(h.pSrc) ? a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), e(g, h.appID)
				}
			}, {
				appID: "",
				pSrc: "https://img.alicdn.com/imgextra/i3/39767794/TB2iXl7sXXXXXasXXXXXXXXXXXX-39767794.jpg",
				bgColor: "",
				autoSize: "yes",
				oppoSrc: "https://img.alicdn.com/imgextra/i3/39767794/TB2dNtBsXXXXXaUXpXXXXXXXXXX-39767794.jpg",
				imgBgp: "50% 50%",
				oppoEffect: "june-box-fadein",
				oppoSpeed: "trans05s",
				childConfig: []
			}],
			jwb: ['<div class="j-fnd t-app j-app-qswz" data-dblType="jwb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;旺旺设置",
				tUrl: "wang.php",
				tSubmit: function (a, c) {
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
				tContent: '<span class="t-app-other t-wang-small"></span><span class="t-wang-text">售前</span>',
				codeExport: function () {
					return "${!jwb}"
				},
				codeImport: function (a, c, d, e) {
					var i, k, l, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					i = 0 == d.find("img").length ? d.children("div").children("a").css("background-image").split("&") : d.find("img").attr("src").split("&"), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.shuntMode = 1, h.wangID = i[1].split("=")[1], h.wangID = h.wangID.replace("%3A", ":");
					try {
						h.wangID = decodeURI(h.wangID)
					} catch (j) {
						h.wangID = ""
					}
					h.wangMode = i[3].split("=")[1], k = d, d.children("div").length > 0 && d.children("div").children("a").length > 0 && (k = d.children("div").children("a")), h.wangNickName = k.html().replace(/<[^>]+>/g, ""), (" " == h.wangNickName || "&nbsp;" == h.wangNickName) && (h.wangNickName = ""), h.characterSize = k.css("font-size").replace(/px/g, ""), h.characterFont = k.css("font-family").replace(/'/g, ""), h.characterStyle = k.css("font-style") || "normal", h.characterColor = RGBToHex(k.css("color")), h.characterBgColor = RGBToHex(k.css("background-color"), ""), h.characterWeight = k.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), new RegExp("realonline").test(i[0]) && (h.shuntMode = 2), l = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(l)), "1" == h.wangMode && a.children(b.appOtherCls).removeClass("t-wang-small").addClass("t-wang-big"), a.children(".t-wang-text").css({
						color: l.characterColor,
						backgroundColor: l.characterBgColor,
						fontSize: b.tParseInt(l.characterSize),
						fontWeight: l.characterWeight,
						fontFamily: l.characterFont,
						fontStyle: l.characterStyle || "normal"
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
				wangNickName: "售前",
				tipText: "",
				characterColor: "#000000",
				characterBgColor: "",
				characterSize: "12",
				characterFont: "微软雅黑",
				characterWeight: "normal",
				characterStyle: "normal"
			}],
			jwwb: ['<div class="j-fnd t-app j-app-qswz" data-dblType="jwwb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;旺旺群设置",
				tUrl: "wanggroup.php",
				tSubmit: function (a, c) {
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
				tContent: '<span class="t-app-other t-wanggroup-2"></span><span class="t-wang-text">沃姆设计</span>',
				codeExport: function () {
					return "${!jwwb}"
				},
				codeImport: function (a, c, d, e) {
					var i, k, l, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {};
					i = 0 == d.find("img").length ? d.children("div").children("a").css("background-image").split("&") : d.find("img").attr("src").split("&"), h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.wangID = d.attr("data-qid"), h.wangID = h.wangID.replace("%3A", ":");
					try {
						h.wangID = decodeURI(h.wangID)
					} catch (j) {
						h.wangID = ""
					}
					h.wangMode = d.attr("data-qmd"), k = d, d.children("div").length > 0 && d.children("div").children("a").length > 0 && (k = d.children("div").children("a")), h.wangNickName = k.html().replace(/<[^>]+>/g, ""), (" " == h.wangNickName || "&nbsp;" == h.wangNickName) && (h.wangNickName = ""), h.characterSize = k.css("font-size").replace(/px/g, ""), h.characterFont = k.css("font-family").replace(/'/g, ""), h.characterStyle = k.css("font-style") || "normal", h.characterColor = RGBToHex(k.css("color")), h.characterBgColor = RGBToHex(k.css("background-color"), ""), h.characterWeight = k.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), l = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(l)), "2" != h.wangMode && a.children(b.appOtherCls).removeClass("t-wanggroup-2").addClass("t-wanggroup-" + h.wangMode), a.children(".t-wang-text").css({
						color: h.characterColor,
						backgroundColor: l.characterBgColor,
						fontSize: b.tParseInt(l.characterSize),
						fontWeight: l.characterWeight,
						fontFamily: l.characterFont,
						fontStyle: l.characterStyle || "normal"
					}).html(h.wangNickName), h.wangNickName && "" != h.wangNickName || a.children(".t-wang-text").html("&nbsp;"), a.children(b.appOtherCls).height(a.children(".t-wang-text").height()), a.css({
						width: "auto",
						height: "auto"
					}), a.attr("appID", h.appID), e(g, h.appID)
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
				characterFont: "微软雅黑",
				characterWeight: "normal",
				characterStyle: "normal"
			}],
			jcb: ['<div class="j-fnd t-app j-app-qswz" data-dblType="jcb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;文字设置",
				tUrl: "character.php",
				tSubmit: function (a, c) {
					var d = require("scripts/allwzset");
					b.setPopupContent(a), d.allSubmit(a, c)
				},
				tContent: "请双击设置文字内容",
				codeExport: function () {
					return "${!jcb}"
				},
				codeImport: function (a, b, c, d) {
					var e = require("scripts/allwzset");
					e.allImport(a, b, c, d)
				}
			}, {
				appID: "",
				animType: "",
				animSpeed: "0.3s",
				animRange: "-m",
				href: "",
				hrefMode: "_blank",
				tipText: ""
			}],
			jcdb: ['<div class="j-fnd t-app" data-dblType="jcdb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;倒计时设置",
				tUrl: "countdown.php",
				tSubmit: function (a, c) {
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
					}, function (a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : c.css({
						backgroundImage: "none"
					})) : (c.css({
						backgroundImage: "none"
					}), h.html(l + '<div class="jjzz"></div>')), c.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(c, RGBToHex(a.bgColor, "")), "" != m && i.html(m + '<div class="jjzz"></div>'), "yes" == a.childConfig[0].displayMode ? (d.css({
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
				codeExport: function () {
					return "${!jcdb}"
				},
				codeImport: function (a, c, d, e) {
					var m, o, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = $.parseJSON(d.attr("data-widget-config").replace(/'/g, '"')),
						i = a.children(b.appChildCls + "[data-attachType='jcdbDay']"),
						j = a.children(b.appChildCls + "[data-attachType='jcdbHour']"),
						k = a.children(b.appChildCls + "[data-attachType='jcdbMinute']"),
						l = a.children(b.appChildCls + "[data-attachType='jcdbSecond']"),
						n = {};
					n.childConfig = [], n.childConfig[0] = {}, n.childConfig[1] = {}, n.childConfig[2] = {}, n.childConfig[3] = {}, n.childConfig[0].displayMode = "no", n.childConfig[1].displayMode = "no", n.childConfig[2].displayMode = "no", n.childConfig[3].displayMode = "no", n.customContent = "", n.startContent = "", n.endContent = "", timeParent = d.children(), i.hide(), j.hide(), k.hide(), l.hide(), n.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), n.endTime2Cycle = d.attr("data-c") || "3", n.endTimeType = d.attr("data-t") || "endTime", n.pSrc = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.bgColor = RGBToHex(d.css("background-color"), ""), n.imgBgp = d.css("background-position") || "50% 50%", "endTime" == n.endTimeType && (n.endTime = h.endTime, n.endTime1 = ""), "endTime1" == n.endTimeType && (n.endTime1 = h.endTime / 1e3, n.endTime = (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3)), "endTime2" == n.endTimeType && (n.endTime2 = new Date(h.endTime).Format("hh:mm:ss"), n.endTime = (new Date).Format("yyyy-MM-dd hh:mm:ss", 0, 3)), n.contentType = "imgContent", d.children(".jcdbcus").length > 0 && (n.customContent = d.children(".jcdbcus").html(), n.contentType = "customContent"), "endTime2" != n.endTimeType ? (d.children(".jcdbstart0").length > 0 && (n.startContent = d.children(".jcdbstart0").html()), d.children(".jcdbend0").length > 0 && (n.endContent = d.children(".jcdbend0").html())) : d.hasClass("jcdd") ? (d.children(".jcdbstart0").length > 0 && (n.startContent = d.children(".jcdbstart0").html()), d.children(".jcdbend0").length > 0 && (n.endContent = d.children(".jcdbend0").html())) : (n.startContent = "", n.endContent = "", timeParent = d.children(".jcdbstart0").children()), timeParent.each(function () {
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
					characterFont: "微软雅黑",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}, {
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "微软雅黑",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}, {
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "微软雅黑",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}, {
					attachID: "",
					displayMode: "yes",
					characterColor: "#FFFFFF",
					characterBgColor: "",
					characterFont: "微软雅黑",
					characterSize: "24",
					characterWeight: "normal",
					characterStyle: "",
					characterLetterSpacing: ""
				}]
			}],
			jvb: ['<div class="j-fnd t-app" data-dblType="jvb"></div>', {
			        tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;视频/FLASH设置",
			        tUrl: "video.php",
			        tSubmit: function (a, c) {
			          c.attr("data-config", JSON.stringify(a)), checkUrl(a.videoSrc) && (b.jSelectsedDom = b.jSelectsedDom.not(c.children("embed")[0]), c.children("embed").remove().attr({
			            src: a.videoSrc
			          }).appendTo(c))
			        },
			        tContent: '<embed allowScriptAccess="never" flashvars="scene=taobao_shop" src="http://cloud.video.taobao.com/video/play/v/2002/sid/10552470/uid/1695300927/from/2/f/video.swf" type="application/x-shockwave-flash" autostart="false" wmode="transparent"/>',
			        codeExport: function () {
			          return "${!jvb}"
			        },
			        codeImport: function (a, c, d, e) {
			          var i, f = JSON.parse(a.attr("data-config")),
			            g = a.attr("data-dblType"),
			            h = {};
			          h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.videoSrc = d.children("[data='embed']").attr("src")||d.children(".embed").attr("src"),h.forcePlayMode = d.attr("data-fpm"), i = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(i)), checkUrl(h.videoSrc) && (b.jSelectsedDom = b.jSelectsedDom.not(a.children("embed")[0]), a.children("embed").remove().attr({
			            src: h.videoSrc
			          }).appendTo(a)), a.attr("appID", h.appID), e(g, h.appID)
			        }
			}, {
				appID: "",
				videoSrc: "http://cloud.video.taobao.com/video/play/v/2002/sid/10552470/uid/1695300927/from/2/f/video.swf",
				forcePlayMode:"1"
			}],
			jwfb: ['<div class="j-fnd t-app" data-dblType="jwfb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;无缝轮播设置",
				tUrl: "wfslider.php",
				tSubmit: function (a, c) {
					var j, k, l, m, n, o, p, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jwfbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jwfbTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='lbePanel']"),
						h = a.sliderSrc;
					if (c.tResize("destory"), "qp" == a.kuandukz && c.css({
							left: 0,
							width: b.june.width()
						}), "yes" == a.sliderArrow ? (checkUrl(a.childConfig[0].oSrc) ? (e.css({
							backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
						}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
							img: a.childConfig[0].oSrc
						}, function (a) {
							var b = a[0],
								c = a[1];
							b && e.width(b), c && e.height(c)
						})) : e.css({
							backgroundImage: "none"
						}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
							backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
						}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
							img: a.childConfig[0].tSrc
						}, function (a) {
							var b = a[0],
								c = a[1];
							b && f.width(b), c && f.height(c)
						})) : f.css({
							backgroundImage: "none"
						}), e.show(), f.show()) : (e.hide(), f.hide()), a = b.smallSrcToSubmit(a, c, "jwfb"), c.children(b.appOtherCls).html(""), j = b.tParseInt(a.sliderActive) - 1, k = "", l = "", "no" == a.sliderOver ? c.children(b.appOtherCls).addClass("t-app-custom") : c.children(b.appOtherCls).removeClass("t-app-custom"), "scrolly" != a.sliderMode) {
						for ("yes" == a.sliderOver && "yes" == a.sliderOverMongolia && (k = '<div style="position:absolute;left:-99999px;top:0px;width:99999px;height:' + c.height() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', l = '<div style="position:absolute;left:' + c.width() + "px;top:0px;width:99999px;height:" + c.height() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>'), c.children(b.appOtherCls).attr("data-s", "no"), c.children(b.appOtherCls).append('<div style="width:99999px;height:100%;position:relative;"></div>' + k + l), m = 0; m < 3 * a.contentType.length; m++) n = m % a.contentType.length, o = "", "imgContent" == a.contentType[n] ? (checkUrl(h[n]) && (o = ' src="' + h[n] + '"'), c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;float:left;width:auto;height:100%;"><img' + o + "></div>")) : c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;float:left;width:auto;height:100%;">' + a.customContent[n] + '<div class="jjzz"></div>' + "</div>");
						setTimeout(function () {
							c.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width() * (b.tParseInt(j) + a.contentType.length) + "px"), c.children(b.appOtherCls).children("div:eq(0)").children("div").width(c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").width())
						}, 100)
					} else {
						for ("yes" == a.sliderOver && "yes" == a.sliderOverMongolia && (k = '<div style="position:absolute;top:-99999px;left:0px;height:99999px;width:' + c.width() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>', l = '<div style="position:absolute;top:' + c.height() + "px;left:0px;height:99999px;width:" + c.width() + "px; background-color:" + RGBToHex(a.sliderOverMongoliaColor) + ';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>'), c.children(b.appOtherCls).attr("data-s", "yes"), c.children(b.appOtherCls).append('<div style="height:99999px;width:100%;position:relative;"></div>' + k + l), m = 0; m < 3 * a.contentType.length; m++) n = m % a.contentType.length, o = "", "imgContent" == a.contentType[n] ? (checkUrl(h[n]) && (o = ' src="' + h[n] + '"'), c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;height:auto;width:100%;"><img' + o + ' style="float:none;"></div>')) : c.children(b.appOtherCls).children("div:eq(0)").append('<div style="display:block;height:auto;width:100%;">' + a.customContent[n] + '<div class="jjzz"></div>' + "</div>");
						setTimeout(function () {
							c.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height() * (b.tParseInt(j) + a.contentType.length) + "px"), c.children(b.appOtherCls).children("div:eq(0)").children("div").height(c.children(b.appOtherCls).children("div:eq(0)").children("div:eq(0)").height())
						}, 100)
					}
					"no" == a.sliderOver && c.children(b.appOtherCls).children("div:eq(0)").children("div:gt(" + (b.tParseInt(j) + 2 * a.contentType.length - 1) + ")").hide(), "no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:lt(" + a.contentType.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:lt(" + a.contentType.length + ")").show(), a.sliderMargin > 1 && (p = Math.floor(a.contentType.length / a.sliderMargin), c.children(b.appChildCls + "[data-attachType='jwfbSmallImg']:gt(" + (p - 1) + ")").hide()), g.length > 0 && g.each(function (c) {
						a.childConfig[c + 1] && $(this).html(b.appMongolia + a.childConfig[c + 1].customContent).css({
							zIndex: 99 + b.tParseInt(a.childConfig[c + 1].zFloor)
						}).tResize()
					}), c.attr("data-config", JSON.stringify(a)).tResize()
				},
				tOtherSetConfig: {
					ssOpacity: "1",
					ssOpacity1: "1",
					css3ModeX1: "",
					css3ModeY1: "",
					css3Mode1: ""
				},
				tOtherSetConfig1: {
					characterContent: "",
					characterSize: "12",
					characterWeight: "normal",
					characterFont: "微软雅黑",
					characterColor: "#000000",
					characterBgColor: "",
					characterHoverMode: "off",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "微软雅黑",
					characterColorHover: "#000000",
					characterBgColorHover: ""
				},
				tDynamic: '<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg"><img width="120" height="120" src=""/></div>',
				tDynamic1: '<div class="t-app-child t-app-custom" data-dblType="jwfb" data-attachType="lbePanel" style="width:100%;height:100%;"></div>',
				tDynamicConfig: {
					attachID: "",
					zFloor: "1",
					smallShowCss: "",
					smallShowSpeed: "",
					customContent: ""
				},
				tContent: '<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbOArrow"></div><div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;text-align:center;"></div>',
				codeExport: function () {
					return "${!jwfb}"
				},
				codeImport: function (a, c, d, e) {
					var l, m, f, g, h, j, k, n, o, p, q, r, s, t, v, w, x, y, z, A, C, D, E, F, G, H, J, L, M, N, O, P, Q, R, S, U, V, W;
					if (d.hasClass("scrollable") || d.attr(" data-jtimes")) {
						for (f = JSON.parse(a.attr("data-config")), g = a.attr("data-dblType"), h = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')), j = d.attr("data-jtimes") || 5, k = {}, k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.customContent = [], k.contentType = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.thumbSet = [], k.thumbCircleSet = [], k.smallCircleMode = [], k.smallCircleBgColor = [], k.smallCircleBgColor1 = [], k.smallCustom = [], k.smallCustom1 = [], k.smallCharacterContent = [], k.smallCharacterContent1 = [], k.sliderMargin = 1, k.sliderActive = 1, k.sliderOver = "no", k.sliderSmallImg = "no", k.sWidth = "", k.sHeight = "", k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "hidden" != d.find("div.scroller").css("overflow") && (k.sliderOver = "yes"), d.find("div.wfmc1").length > 0 ? (k.sliderOverMongolia = "yes", k.sliderOverMongoliaColor = RGBToHex(d.find("div.wfmc1").css("background-color"))) : k.sliderOverMongolia = "no", n = d.find("div.haibaos_pic").length / j, o = 0; n > o; o++) p = d.find("div.haibaos_pic").eq(o), q = p.find("a.simple"), r = p.css("background-image").replace(/^url|[\(\"\)]*/g, ""), s = p.find("a.simple").attr("href"), t = p.find("img"), p.html(), q.length > 0 ? (k.sliderSrc.push(r), k.sliderHref.push(s)) : (k.sliderSrc.push(""), k.sliderHref.push("")), t.length > 0 ? (k.customContent.push('<div class="rel" style="width:' + p.width() + "px;height:" + p.height() + 'px;">' + p.find("a.simple").addClass("job").css("background", p.css("background")).prop("outerHTML") + "</div>"), k.contentType.push("customContent")) : (k.customContent.push(""), k.contentType.push("imgContent")), k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push("");
						d.find("div.haibaos_pic").length > 1 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = [], f.smallCharacterContent = [], f.smallCharacterContent1 = []), v = d.children(".smlldiv_btn"), k.sliderArrow = "none" == v.css("display") ? "no" : "yes", h.effect && (k.sliderMode = h.effect), h.autoplay && (k.sliderAuto = h.autoplay), h.easing && (k.sliderEffect = h.easing), h.interval && (k.sliderTime = h.interval), h.delay && (k.sliderDelay = h.delay), h.activeIndex && (k.sliderActive = b.tParseInt(h.activeIndex) + 1), h.steps && (k.sliderMargin = h.steps), w = v.children("span:eq(0)"), x = v.children("span:eq(1)"), v.children("span:eq(0)").hasClass("prevsamll") && (w = v.children("span:eq(0)").children("img:eq(0)"), x = v.children("span:eq(1)").children("img:eq(0)")), k.hrefMode = d.find("a.simple").attr("target") || "_self", k.childConfig[0].oSrc = v.children("span:eq(0)").children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = v.children("span:eq(1)").children("img:eq(0)").attr("src"), k.childConfig[0].autoSize = "no", k.childConfig[0].autoSize1 = "no", v.children("span:eq(0)").children("img:eq(1)").length > 0 && (k.childConfig[0].oSrcHover = v.children("span:eq(0)").children("img:eq(1)").attr("src")), v.children("span:eq(1)").children("img:eq(1)").length > 0 && (k.childConfig[0].tSrcHover = v.children("span:eq(1)").children("img:eq(1)").attr("src")), l = b.getChildPos(d, w, !0), m = b.getChildPos(d, x, !0), y = $.extend(f, k), a.attr("data-config", JSON.stringify(y)), a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").attr("appID", k.appID), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").attr("appID", k.appID), a.attr("appID", k.appID), b.appConfig["jwfb"][1].tSubmit(y, a), a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + d.find("div.haibaos_pic").width() * (b.tParseInt(k.sliderActive) + k.contentType.length - 1) + "px"), e(g, k.appID)
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
							}, C = C ? C.split(",") : [], k.childConfig = [], k.childConfig[0] = {}, k.sliderSrc = [], k.sliderHref = [], k.customContent = [], k.contentType = [], k.smallImgSrc = [], k.smallHoverSrc = [], k.smallImgSrcT = [], k.smallHoverSrcT = [], k.thumbSet = [], k.thumbCircleSet = [], k.smallCircleMode = [], k.smallCircleBgColor = [], k.smallCircleBgColor1 = [], k.smallCustom = [], k.smallCustom1 = [], k.smallCharacterContent = [], k.smallCharacterContent1 = [], k.sliderMargin = 1, k.sliderActive = 1, k.sliderOver = "no", k.sWidth = "", k.sHeight = "", k.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "hidden" != d.css("overflow") && (k.sliderOver = "yes"), d.find("div.wfpanel").length > 0 && "hidden" == d.find("div.wfpanel").css("overflow") && (k.sliderOver = "no"), d.children(".jwfb").length > 0) {
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
						if (D = !1, 1 == d.children("ul").length && (D = !0), k.sliderActive = d.find("div.wfpanel").attr("data-a") || "1", d.hasClass("outbox") && (k.smallShowMode = "outbox"), E = (d.find(".ks-switchable-nav").attr("class") || "").match(/trans(\w+)s/g), F = (d.find(".ks-switchable-nav").attr("class") || "").match(/b-1-(lx|rx|dy|uy)(\d+)/g), E && E.length > 0 && (k.smallShowSpeed = E[0]), F && F.length > 0 && (k.smallShowCss = F[0]), G = d.find("div.wfpanel").attr("data-f") || 0, d.find("div.wfmc1").length > 0 ? (k.sliderOverMongolia = "yes", k.sliderOverMongoliaColor = RGBToHex(d.find("div.wfmc1").css("background-color"))) : (k.sliderOverMongolia = "no", k.sliderOverMongoliaColor = ""), H = require("scripts/other"), b.tParseInt(k.sliderActive) - 1, d.find(".scroller:eq(" + G + ")").children(".ks-switchable-content").children("div.elepic").each(function (a) {
								var e, f, g, h, i, j, l, c = $(this);
								c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.children("a.J_TWidget").attr("href") || "", h = c.html(), i = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), C[a] || (C[a] = ""), e.length > 0 ? (k.contentType.push("imgContent"), k.sliderSrc.push(f), k.sliderHref.push(g), k.customContent.push(""), i.hasClass("thumbsmall") ? (k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push(H.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), l = i.find("img:eq(0)").attr("src"), j == f && (j = ""), (l == j || l == f) && (l = ""), k.smallImgSrcT.push(j), k.smallHoverSrcT.push(l)) : (j = i.find("img:eq(0)").attr("src"), j == f && (j = ""), k.smallImgSrcT.push(j), k.smallHoverSrcT.push("")), k.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (C[a] == f || C[a] == j) && (C[a] = ""), k.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), k.thumbSet.push(""))) : (k.contentType.push("customContent"), k.sliderSrc.push(""), k.customContent.push(h), i.find("a").length > 0 ? (g = i.find("a").attr("href") || "", !k.hrefMode && (k.hrefMode = i.find("a").attr("target") || "_self"), k.sliderHref.push(g)) : k.sliderHref.push(""), i.hasClass("thumbsmall") ? (k.smallImgSrc.push(""), k.smallHoverSrc.push(""), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push(H.thumbImport(i))) : (i.find("img").length > 1 ? (j = i.find("img:eq(1)").attr("src"), l = i.find("img:eq(0)").attr("src"), j == f && (j = ""), (l == j || l == f) && (l = ""), k.smallImgSrc.push(j), k.smallHoverSrc.push(l)) : (j = i.find("img:eq(0)").attr("src"), j == f && (j = ""), k.smallImgSrc.push(j), k.smallHoverSrc.push("")), k.smallImgSrcT.push(""), k.smallHoverSrcT.push(""), k.thumbSet.push("")))
							}), d.find(".scroller:eq(" + G + ")").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = [], f.smallCharacterContent = [], f.smallCharacterContent1 = []), h.effect && (k.sliderMode = h.effect), "true" != h.autoplay && (k.sliderAuto = h.autoplay), h.easing && (k.sliderEffect = h.easing), h.interval && (k.sliderTime = h.interval), h.triggerType && (k.sliderSwitch = h.triggerType), h.steps && (k.sliderMargin = h.steps), h.delay && (k.sliderDelay = h.delay), d.find("a.J_TWidget").length > 0 ? k.hrefMode = d.find("a.J_TWidget").attr("target") || "_self" : !k.hrefMode && (k.hrefMode = "_blank"), k.sliderArrow = "no", z = h.prevBtnCls, A = h.nextBtnCls, z && "undefined" != z)
							if (k.sliderArrow = "yes", d.find("." + z).children("img").length > 0 ? (k.childConfig[0].oSrc = d.find("." + z).children("img:eq(0)").attr("src"), k.childConfig[0].tSrc = d.find("." + A).children("img:eq(0)").attr("src"), d.find("." + z).children("img").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + z).children("img:eq(1)").attr("src")), d.find("." + A).children("img").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + A).children("img:eq(1)").attr("src"))) : d.find("." + z).children("span").length > 0 ? (k.childConfig[0].oSrc = d.find("." + z).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.childConfig[0].tSrc = d.find("." + A).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + z).children("span").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + z).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + A).children("span").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + A).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))) : d.find("." + z).children("div").length > 0 && (k.childConfig[0].oSrc = d.find("." + z).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), k.childConfig[0].tSrc = d.find("." + A).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + z).children("div").length > 1 && (k.childConfig[0].oSrcHover = d.find("." + z).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + A).children("div").length > 1 && (k.childConfig[0].tSrcHover = d.find("." + A).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))), l = b.getChildPos(d, d.find("." + z), !0), m = b.getChildPos(d, d.find("." + A), !0), J = d.find("." + z), J.length > 0) {
								k.sliderArrow = "none" == J.css("display") ? "no" : "yes", k.displayMode = J.hasClass("june-box-fadein") ? "june-box-fadein" : "";
								try {
									k.css3Speed = J.attr("class").match(/trans(\w+)s/g).join(""), J.attr("class").indexOf("june-box-lx") >= 0 && (k.css3Mode = $.trim("moveout" + J.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), J.attr("class").indexOf("june-box-rx") >= 0 && (k.css3Mode = $.trim("movein" + J.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
								} catch (K) {}
							} else k.sliderArrow = "no", k.displayMode = "";
						a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").each(function () {
							b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
						}), a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").remove(), P = !0, d.children("ul:eq(0)").children("li").each(function (c) {
							var g, f, h, i, j, l, m, n, o, p, r, e = $(this);
							e.hasClass("scm") ? (k.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet.push(H.thumbCircleImport(e))) : (k.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), k.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), k.thumbCircleSet[c] = ""), k.smallCustom[c] = "", k.smallCustom1[c] = "") : e.hasClass("sch") ? (k.smallCircleMode[c] = "yes1", k.smallCustom.push(e.children(".s2").html() || e.children(".s3").html() || ""), k.smallCustom1.push(e.children(".s1").html() || ""), k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet[c] = "") : (k.smallCircleMode[c] = "no", k.smallCircleBgColor[c] = "", k.smallCircleBgColor1[c] = "", k.thumbCircleSet[c] = "", k.smallCustom[c] = "", k.smallCustom1[c] = ""), f = k.contentType[c], h = !1, "imgContent" == f ? (g = k.smallImgSrcT[c], "" == g && (g = k.smallHoverSrcT[c])) : (g = k.smallImgSrc[c], "" == g && (g = k.smallHoverSrc[c])), "" == g && (g = k.sliderSrc[c]), $(this).attr("data-i") ? k.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(k.childConfig[0]), "yes1" == k.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + k.smallCustom[c] + "</div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID) : "yes" == k.smallCircleMode[c] ? (i = "", j = "", l = "", m = "", n = $(this).width() + "px;", "" == k.thumbCircleSet[c] ? i = k.smallCircleBgColor[c] || k.smallCircleBgColor1[c] || "" : (j = JSON.parse(k.thumbCircleSet[c]), m = j.characterContent, i = j.characterBgColor || j.characterBgColorHover || "", j.characterColor = RGBToHex(j.characterColor, ""), "" != j.characterColor && (l += "color:" + j.characterColor + ";"), "" != j.characterFont && (l += "font-family:" + j.characterFont + ";"), "" != j.characterWeight && (l += "font-weight:" + j.characterWeight + ";"), "" != j.characterSize && (l += "font-size:" + b.tParseInt(j.characterSize) + "px;"), k.smallCircleBgColor[c] = j.characterBgColor, k.smallCircleBgColor1[c] = j.characterBgColorHover, "auto" == j.characterWidthMode && (h = !0, n = "auto;")), o = $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jwfb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + l + '">' + m + "</div></div>").tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), o.children(".t-jwfb-circle").css({
								backgroundColor: RGBToHex(i, ""),
								borderRadius: "50%"
							})) : "" == k.thumbSet[c] ? (k.smallCircleMode[c] = "no", $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + g + '"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID)) : (k.smallCircleMode[c] = "yes2", p = JSON.parse(k.thumbSet[c] || "{}"), n = $(this).width() + "px;", "auto" == p.characterWidthMode && (h = !0, n = "auto;"), k.smallCharacterContent[c] = p.characterContent, k.smallCharacterContent1[c] = p.characterContentHover, $('<div class="t-app-child" data-dblType="jwfb" data-attachType="jwfbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", k.appID).attr("attachID", k.childConfig[0].attachID), r = a.children(b.appChildCls + "[attachID='" + k.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(p, r), r.removeAttr("data-config")), 0 == c && (L = $(this).width(), N = $(this).height(), h && (L = "")), M = $(this).width(), O = $(this).height(), h && (M = ""), (L != M || N != O) && (P = !1)
						}), P && (k.sWidth = L, k.sHeight = N), d.children(".ks-switchable-nav").find("li").each(function () {
							var a = $(this);
							return Q = a.css("background-image"), Q && Q.indexOf("T2.mrqXDpXXXXXXXXX") >= 0 ? (k.kgdSwitch = "white", !1) : Q && Q.indexOf("T2yq_rXvVXXXXXXXXX") >= 0 ? (k.kgdSwitch = "black", !1) : Q && Q.indexOf("T23JTrXxFXXXXXXXXX") >= 0 ? (k.kgdSwitch = "transparent", !1) : void 0
						}), D && (R = RGBToHex(d.children(".ks-switchable-nav").find("li").children("a.s2").css("background-color"), ""), Q = "#ffffff" == R.toLowerCase() ? k.kgdSwitch = "white" : "#000000" == R.toLowerCase() ? k.kgdSwitch = "black" : void 0), Q || k.kgdSwitch || (k.kgdSwitch = "transparent"), "none" == d.children("ul:eq(0)").css("display") ? (k.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jwfbSmallImg']").hide()) : k.sliderSmallImg = "yes", S = d.children("div.lbepanel"), S.length > 0 && S.each(function () {
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
						}).show()), a.children(b.appOtherCls).html(""), U = d.find(".scroller:eq(0)").width(), V = d.find(".scroller:eq(0)").height(), W = b.tParseInt(k.sliderActive) - 1, a.children(b.appChildCls + "[data-attachType='jwfbOArrow']").attr("appID", k.appID), a.children(b.appChildCls + "[data-attachType='jwfbTArrow']").attr("appID", k.appID), a.attr("appID", k.appID), b.appConfig["jwfb"][1].tSubmit(y, a), "scrolly" != y.sliderMode ? (a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + U * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").width(U)) : (a.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + V * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").height(V)), setTimeout(function () {
							"scrolly" != y.sliderMode ? (a.children(b.appOtherCls).children("div:eq(0)").css("left", "-" + U * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").width(U)) : (a.children(b.appOtherCls).children("div:eq(0)").css("top", "-" + V * (b.tParseInt(W) + k.contentType.length) + "px"), a.children(b.appOtherCls).children("div:eq(0)").children("div").height(V))
						}, 100), e(g, k.appID)
					}
				}
			}, {
				appID: "",
				sliderSrc: ["https://img.alicdn.com/imgextra/i1/800803731/TB22yh_k3JlpuFjSspjXXcT.pXa-800803731.jpg", "https://img.alicdn.com/imgextra/i3/800803731/TB2r5Fwk4XlpuFjSsphXXbJOXXa-800803731.jpg", "https://img.alicdn.com/imgextra/i2/800803731/TB2JNFVk90jpuFjy0FlXXc0bpXa-800803731.jpg","https://img.alicdn.com/imgextra/i1/800803731/TB2jZJ4k80kpuFjSsppXXcGTXXa-800803731.jpg"],
				sliderHref: ["#", "#", "#", "#"],
				contentType: ["imgContent", "imgContent", "imgContent", "imgContent"],
				customContent: ["", "", "", ""],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallImgSrcT: ["", "", "", ""],
				smallHoverSrcT: ["", "", "", ""],
				smallCircleMode: ["yes", "yes", "yes", "yes"],
				smallCircleBgColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
				smallCircleBgColor1: ["#000000", "#000000", "#000000", "#000000"],
				thumbCircleSet: ["", "", "", ""],
				smallCharacterContent: ["", "", "", ""],
				smallCharacterContent1: ["", "", "", ""],
				thumbSet: ["", "", "", ""],
				smallCustom: ["", "", "", ""],
				smallCustom1: ["", "", "", ""],
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
			jqtb: ['<div class="j-fnd t-app" data-dblType="jqtb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;嵌套轮播设置",
				tUrl: "nestslider.php",
				tSubmit: function (a, c) {
					var h, i, j, k, l, m, n, d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jqtbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jqtbTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='lbePanel']");
					for (a.sliderOverflow && "visible" == a.sliderOverflow ? c.children(b.appOtherCls).css("overflow", "visible") : c.children(b.appOtherCls).css("overflow", "hidden"), checkUrl(a.childConfig[0].oSrc) ? (e.css({
							backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
						}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
							img: a.childConfig[0].oSrc
						}, function (a) {
							var b = a[0],
								c = a[1];
							b && e.width(b), c && e.height(c)
						})) : e.css({
							backgroundImage: "none"
						}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
							backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
						}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
							img: a.childConfig[0].tSrc
						}, function (a) {
							var b = a[0],
								c = a[1];
							b && f.width(b), c && f.height(c)
						})) : f.css({
							backgroundImage: "none"
						}), "qp" == a.kuandukz && c.css({
							left: 0,
							width: b.june.width()
						}), "yes" == a.sliderArrow ? (e.show(), f.show()) : (e.hide(), f.hide()), a = b.smallSrcToSubmit(a, c, "jqtb"), c.children(b.appOtherCls).html(""), h = 0; h < a.nestConfig.length; h++) j = a.nestConfig[h].sliderFloorWidth ? a.nestConfig[h].sliderFloorWidth + "px" : "100%", k = a.nestConfig[h].sliderFloorHeight ? a.nestConfig[h].sliderFloorHeight + "px" : "100%", l = a.nestConfig[h].sliderFloorTop || 0, m = a.nestConfig[h].sliderFloorLeft || 0, "customContent" == a.nestConfig[h].contentType[0] ? i = '<div style="position:absolute;width:' + j + ";height:" + k + ";top:" + l + "px;left:" + m + 'px;">' + a.nestConfig[h].customContent[0] + "</div>" : (n = "", checkUrl(a.nestConfig[h].sliderSrc[0]) && (n = "background:url(" + a.nestConfig[h].sliderSrc[0] + ") no-repeat " + a.nestConfig[h].sliderImgBgp[0] + ";"), i = '<div style="position:absolute;width:' + j + ";height:" + k + ";top:" + l + "px;left:" + m + "px;" + n + '"></div>'), c.children(b.appOtherCls).append(i + '<div class="jjzz"></div>');
					"no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:lt(" + a.sliderHref.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jqtbSmallImg']:lt(" + a.sliderHref.length + ")").show(), g.length > 0 && g.each(function (c) {
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
					smallShowSpeed: "",
					customContent: ""
				},
				tContent: '<div class="t-app-child t-jqtb-arrow" data-dblType="jqtb" data-attachType="jqtbOArrow"></div><div class="t-app-child t-jqtb-arrow" data-dblType="jqtb" data-attachType="jqtbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function () {
					return "${!jqtb}"
				},
				codeImport: function (a, c, d, e) {
					var j, k, l, m, q, s, r, t, u, v, x, y, z, A, B, C, D, F, G, H, I, J, K, f = JSON.parse(a.attr("data-config")),
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
						}), p = p ? p.split(",") : [], i.childConfig = [], i.nestConfig = [], i.childConfig[0] = {}, i.nestConfig[0] = {}, i.nestConfig[0].contentType = [], i.nestConfig[0].sliderSrc = [], i.nestConfig[0].customContent = [], i.nestConfig[0].sliderImgBgp = [], i.sliderHref = [], i.smallHref = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.thumbSet = [], i.thumbCircleSet = [], i.smallCircleMode = [], i.smallCircleBgColor = [], i.smallCircleBgColor1 = [], i.smallCustom = [], i.smallCustom1 = [], i.smallCharacterContent = [], i.smallCharacterContent1 = [], i.sliderOverflow = "hidden", i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), q = []; d.children("div").hasClass("jqtb");) i.nestConfig[n] = {}, i.nestConfig[n].contentType = [], i.nestConfig[n].sliderSrc = [], i.nestConfig[n].sliderImgBgp = [], i.nestConfig[n].customContent = [], q.push(d.attr("data-s") || "a"), d = d.children("div"), d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? h.push(JSON.parse(d.attr("data-widget-config").replace(/'/g, '"'))) : h.push({
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
					for (q.push(d.attr("data-s") || "a"), "visible" == d.children(".scroller").css("overflow") && (i.sliderOverflow = "visible"), d.children(".scroller").children(".june-nsc").children(".ks-switchable-content").each(function (a) {
							var d = $(this),
								f = (q[a], $(this).parent());
							d.children("div.elepic").each(function (b) {
								var e, f, g, h, j, d = $(this);
								d.children("div.elexb").length > 0 && (d = d.children("div.elexb")), e = d.children("a.J_TWidget"), f = d.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = d.css("background-position") || "50% 50%", h = d.children("a.J_TWidget").attr("href") || "", j = d.html(), e.length > 0 ? (i.sliderHref[b] && "" != i.sliderHref[b] || (i.sliderHref[b] = h), i.nestConfig[a].contentType.push("imgContent"), i.nestConfig[a].sliderSrc.push(f), i.nestConfig[a].sliderImgBgp.push(g), i.nestConfig[a].customContent.push("")) : (i.sliderHref[b] || (i.sliderHref[b] = ""), i.nestConfig[a].contentType.push("customContent"), i.nestConfig[a].sliderSrc.push(""), i.nestConfig[a].sliderImgBgp.push("50% 50%"), i.nestConfig[a].customContent.push(j))
							}), i.nestConfig[a].sliderFloorWidth = f.width(), i.nestConfig[a].sliderFloorHeight = f.height(), i.nestConfig[a].sliderFloorTop = b.tParseInt(f.css("top")), "auto" == f.css("top") && (i.nestConfig[a].sliderFloorTop = 0), i.nestConfig[a].sliderFloorLeft = b.tParseInt(f.css("left")), "auto" == f.css("left") && (i.nestConfig[a].sliderFloorLeft = 0)
						}), d.children(".scroller").children(".june-nsc").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.smallImgSrc = [], f.smallHoverSrc = [], f.smallHref = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = [], f.smallCharacterContent = [], f.smallCharacterContent1 = []), r = require("scripts/other"), d.children(".ks-switchable-nav").find("li").each(function (a) {
							var e, f, g, h, j, k, l, c = $(this);
							s = c.css("background-image"), s && s.indexOf("T2.mrqXDpXXXXXXXXX") >= 0 ? i.kgdSwitch = "white" : s && s.indexOf("T2yq_rXvVXXXXXXXXX") >= 0 ? i.kgdSwitch = "black" : s && s.indexOf("T23JTrXxFXXXXXXXXX") >= 0 && (i.kgdSwitch = "transparent"), e = RGBToHex(c.children("a.s2").css("background-color"), ""), s = "#ffffff" == e.toLowerCase() ? i.kgdSwitch = "white" : "#000000" == e.toLowerCase() ? i.kgdSwitch = "black" : void 0, p[a] || (p[a] = ""), f = c.find("img:eq(1)"), g = "", h = c.find("img:eq(0)"), j = "", 0 == d.find(".sltae").length && (f = c.find("img:eq(0)"), h = c.find("img:eq(1)")), f.length > 0 && (g = f.attr("src")), h.length > 0 && (j = h.attr("src"), g == j && (j = "")), i.smallImgSrc.push(g), i.smallHoverSrc.push(j), "" == g && "" == j && c.hasClass("thumbsmall") ? i.thumbSet.push(r.thumbImport(c)) : i.thumbSet.push(""), k = d.children("ul:eq(0)").find("li:eq(" + a + ")"), l = "", k.length > 0 && (l = k.find("a:eq(0)").attr("href") || k.find("a:eq(1)").attr("href") || ""), i.smallHref.push(l)
						}), s || i.kgdSwitch || (i.kgdSwitch = "transparent"), t = 0; t < h.length; t++) u = q[t], h[t].effect && (i.nestConfig[t].sliderMode = h[t].effect), h[t].easing && (i.nestConfig[t].sliderEffect = h[t].easing), h[t].duration && (i.nestConfig[t].sliderDuration = h[t].duration), h[t].delay && (i.nestConfig[t].sliderDelay = h[t].delay), "b" == u && (i.nestConfig[t].sliderMode += "1");
					if (h[0].autoplay && (i.sliderAuto = h[0].autoplay), h[0].interval && (i.sliderTime = h[0].interval), h[0].triggerType && (i.sliderSwitch = h[0].triggerType), d.find("a.J_TWidget").length > 0 ? i.hrefMode = d.find("a.J_TWidget").attr("target") || "_self" : !i.hrefMode && (i.hrefMode = "_blank"), i.sliderArrow = "no", l = h[0].prevBtnCls, m = h[0].nextBtnCls, l && "undefined" != l)
						if (i.sliderArrow = "yes", d.find("." + l).children("img").length > 0 ? (i.childConfig[0].oSrc = d.find("." + l).children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img:eq(0)").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src"))) : d.find("." + l).children("span").length > 0 ? (i.childConfig[0].oSrc = d.find("." + l).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[0].tSrc = d.find("." + m).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + l).children("span").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + m).children("span").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))) : d.find("." + l).children("div").length > 0 && (i.childConfig[0].oSrc = d.find("." + l).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[0].tSrc = d.find("." + m).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + l).children("div").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + m).children("div").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))), j = b.getChildPos(d, d.find("." + l), !0), k = b.getChildPos(d, d.find("." + m), !0), v = d.find("." + l), v.length > 0) {
							i.sliderArrow = "none" == v.css("display") ? "no" : "yes", i.displayMode = v.hasClass("june-box-fadein") ? "june-box-fadein" : "";
							try {
								i.css3Speed = v.attr("class").match(/trans(\w+)s/g).join(""), v.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + v.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), v.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + v.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
							} catch (w) {}
						} else i.displayMode = "", i.sliderArrow = "no";
					for (a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").each(function () {
							b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
						}), a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").remove(), B = !0, d.children("ul:eq(0)").find("li").each(function (c) {
							var f, g, h, j, k, l, m, n, o, q, e = $(this);
							e.hasClass("scm") ? (i.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet.push(r.thumbCircleImport(e))) : (i.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), i.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), i.thumbCircleSet[c] = ""), i.smallCustom[c] = "", i.smallCustom1[c] = "") : e.hasClass("sch") ? (i.smallCircleMode[c] = "yes1", i.smallCustom.push(e.children(".s2").html() || e.children(".s3").html() || ""), i.smallCustom1.push(e.children(".s1").html() || ""), i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "") : (i.smallCircleMode[c] = "no", i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "", i.smallCustom[c] = "", i.smallCustom1[c] = ""), g = !1, f = i.smallImgSrc[c], "" == f && (f = i.nestConfig[0].sliderSrc[c]), $(this).attr("data-i") ? i.childConfig[0].attachID = e.attr("data-i") : b.setAttachID(i.childConfig[0]), "yes1" == i.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + i.smallCustom[c] + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : "yes" == i.smallCircleMode[c] ? (h = "", j = "", k = "", l = "", m = $(this).width() + "px;", "" == i.thumbCircleSet[c] ? h = i.smallCircleBgColor[c] || i.smallCircleBgColor1[c] || "" : (j = JSON.parse(i.thumbCircleSet[c]), l = j.characterContent, h = j.characterBgColor || j.characterBgColorHover || "", j.characterColor = RGBToHex(j.characterColor, ""), "" != j.characterColor && (k += "color:" + j.characterColor + ";"), "" != j.characterFont && (k += "font-family:" + j.characterFont + ";"), "" != j.characterWeight && (k += "font-weight:" + j.characterWeight + ";"), "" != j.characterSize && (k += "font-size:" + b.tParseInt(j.characterSize) + "px;"), i.smallCircleBgColor[c] = j.characterBgColor, i.smallCircleBgColor1[c] = j.characterBgColorHover, "auto" == j.characterWidthMode && (g = !0, m = "auto;")), n = $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + m + "height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jqtb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + k + '">' + l + "</div></div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), n.children(".t-jqtb-circle").css({
								backgroundColor: RGBToHex(h, ""),
								borderRadius: "50%"
							})) : "" == i.thumbSet[c] ? (i.smallCircleMode[c] = "no", $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + f + '"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID)) : (i.smallCircleMode[c] = "yes2", o = JSON.parse(i.thumbSet[c] || "{}"), m = $(this).width() + "px;", "auto" == o.characterWidthMode && (g = !0, m = "auto;"), i.smallCharacterContent[c] = o.characterContent, i.smallCharacterContent1[c] = o.characterContentHover, $('<div class="t-app-child" data-dblType="jqtb" data-attachType="jqtbSmallImg" style="width:' + m + "height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), q = a.children(b.appChildCls + "[attachID='" + i.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(o, q), q.hasClass("j-app-qswz") || q.addClass("j-app-qswz"), q.removeAttr("data-config")), 0 == c && (x = $(this).width(), z = $(this).height(), g && (x = "")), y = $(this).width(), A = $(this).height(), g && (y = ""), (x != y || z != A) && (B = !1)
						}), B && (i.sWidth = x, i.sHeight = z), "none" == d.children("ul:eq(0)").css("display") ? (i.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jqtbSmallImg']").hide()) : i.sliderSmallImg = "yes", C = d.children("div.lbepanel"), C.length > 0 && C.each(function () {
							var g, h, e = $(this),
								f = {};
							b.setAttachID(f), f.zFloor = e.css("z-index") - 10, f.customContent = e.html(), g = e.attr("class").match(/trans(\w+)s/g), h = e.attr("class").match(/b-1-(lx|rx|dy|uy)(\d+)/g), g && g.length > 0 && (f.smallShowSpeed = g[0]), h && h.length > 0 && (f.smallShowCss = h[0]), $('<div class="t-app-child t-app-custom" data-dblType="jqtb" data-attachType="lbePanel" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + "px;z-index:" + (99 + f.zFloor) + ';"><div class="t-app-mongolia"></div>' + f.customContent + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", f.attachID), i.childConfig.push(f)
						}), D = $.extend(f, i), a.attr("data-config", JSON.stringify(D)), require("scripts/tAjax"), "no" == i.sliderArrow ? (a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").hide(), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").hide()) : (a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").css({
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
						}).show()), a.children(b.appOtherCls).html(""), t = 0; t < i.nestConfig.length; t++) G = i.nestConfig[t].sliderFloorWidth ? i.nestConfig[t].sliderFloorWidth + "px" : "100%", H = i.nestConfig[t].sliderFloorHeight ? i.nestConfig[t].sliderFloorHeight + "px" : "100%", I = i.nestConfig[t].sliderFloorTop || 0, J = i.nestConfig[t].sliderFloorLeft || 0, "customContent" == i.nestConfig[t].contentType[0] ? F = '<div style="position:absolute;width:' + G + ";height:" + H + ";top:" + I + "px;left:" + J + 'px;">' + i.nestConfig[t].customContent[0] + "</div>" : (K = "", checkUrl(i.nestConfig[t].sliderSrc[0]) && (K = "background:url(" + i.nestConfig[t].sliderSrc[0] + ") no-repeat " + i.nestConfig[t].sliderImgBgp[0] + ";"), F = '<div style="position:absolute;width:' + G + ";height:" + H + ";top:" + I + "px;left:" + J + "px;" + K + '"></div>'), a.children(b.appOtherCls).append(F + '<div class="jjzz"></div>');
					a.children(b.appChildCls + "[data-attachType='jqtbOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jqtbTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				nestConfig: [{
					contentType: ["imgContent", "imgContent", "imgContent"],
					sliderSrc: ["https://img.alicdn.com/imgextra/i4/800803731/TB2IkiBhXXXXXcVXpXXXXXXXXXX-800803731.jpg", "https://img.alicdn.com/imgextra/i1/800803731/TB2yTqHhXXXXXbuXpXXXXXXXXXX-800803731.png", "https://img.alicdn.com/imgextra/i4/800803731/TB2_ym9hXXXXXXMXXXXXXXXXXXX-800803731.png"],
					sliderImgBgp: ["50% 50%", "50% 50%", "50% 50%"],
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
					sliderSrc: ["https://img.alicdn.com/imgextra/i2/800803731/TB2WDqIhXXXXXbnXpXXXXXXXXXX-800803731.png", "https://img.alicdn.com/imgextra/i4/800803731/TB2u4C6hXXXXXXuXXXXXXXXXXXX-800803731.png", "https://img.alicdn.com/imgextra/i4/800803731/TB2qZu2hXXXXXbrXXXXXXXXXXXX-800803731.png"],
					sliderImgBgp: ["50% 50%", "50% 50%", "50% 50%"],
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
					sliderSrc: ["https://img.alicdn.com/imgextra/i2/800803731/TB2wRmMhXXXXXaJXpXXXXXXXXXX-800803731.png", "https://img.alicdn.com/imgextra/i2/800803731/TB2Rvm6hXXXXXavXXXXXXXXXXXX-800803731.png", "https://img.alicdn.com/imgextra/i4/800803731/TB2WDGyhXXXXXcyXpXXXXXXXXXX-800803731.png"],
					sliderImgBgp: ["50% 50%", "50% 50%", "50% 50%"],
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
				thumbCircleSet: ["", "", ""],
				smallCharacterContent: ["", "", ""],
				smallCharacterContent1: ["", "", ""],
				thumbSet: ["", "", ""],
				smallCustom: ["", "", ""],
				smallCustom1: ["", "", ""],
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
			jfsb: ['<div class="j-fnd t-app" data-dblType="jfsb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;轮播设置",
				tUrl: "focusslider.php",
				tSubmit: function (a, c) {
					console.log("设置");
					var d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jfsbOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jfsbTArrow']"),
						g = c.children(b.appChildCls + "[data-attachType='lbePanel']");
					c.tResize("destory"), checkUrl(a.sliderSrc[0]) ? c.css({
						backgroundImage: "url(" + a.sliderSrc[0] + ")"
					}) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.sliderImgBgp[0] || "50% 50%"
					}), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), "yes" == a.sliderArrow ? (checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), e.show(), f.show()) : (e.hide(), f.hide()), a = b.smallSrcToSubmit(a, c, "jfsb"), c.children(b.appOtherCls).html(""), "customContent" == a.contentType[0] && (c.css({
						backgroundImage: ""
					}), c.children(b.appOtherCls).html(a.customContent[0] + '<div class="jjzz"></div>')), "no" == a.sliderSmallImg ? c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:lt(" + a.contentType.length + ")").hide() : c.children(b.appChildCls + "[data-attachType='jfsbSmallImg']:lt(" + a.contentType.length + ")").show(), g.length > 0 && g.each(function (c) {
						a.childConfig[c + 1] && $(this).html(b.appMongolia + a.childConfig[c + 1].customContent).css({
							zIndex: 99 + b.tParseInt(a.childConfig[c + 1].zFloor)
						}).tResize()
					}), c.attr("data-config", JSON.stringify(a)).tResize()
				},
				tOtherSetConfig: {
					ssOpacity: "1",
					ssOpacity1: "1",
					css3ModeX1: "",
					css3ModeY1: "",
					css3Mode1: ""
				},
				tOtherSetConfig1: {
					characterContent: "",
					characterSize: "12",
					characterWeight: "normal",
					characterFont: "微软雅黑",
					characterColor: "#000000",
					characterBgColor: "",
					characterHoverMode: "off",
					characterSizeHover: "12",
					characterWeightHover: "normal",
					characterFontHover: "微软雅黑",
					characterColorHover: "#000000",
					characterBgColorHover: ""
				},
				tDynamic: '<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg"><img width="120" height="120" src=""/></div>',
				tDynamic1: '<div class="t-app-child t-app-custom" data-dblType="jfsb" data-attachType="lbePanel" style="width:100%;height:100%;"></div>',
				tDynamicConfig: {
					attachID: "",
					zFloor: "1",
					smallShowCss: "",
					smallShowSpeed: "",
					customContent: ""
				},
				tContent: '<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbOArrow"></div><div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbTArrow"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function () {
					return "${!jfsb}"
				},
				codeImport: function (a, c, d, e) {
					console.log("导入");
					var h, j, k, l, m, o, q, r, s, t, u, v, x, y, z, A, B, C, D, E, F, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						i = {},
						p = d.attr("data-hsrc");
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
						}, i.sliderDuration = h.duration ? h.duration : "0.5", i.sliderPauseHover = h.pauseOnHover === !1 || "false" == h.pauseOnHover ? "no" : "yes", p = p ? p.split(",") : [], d.attr("data-da") ? (o = d.attr("data-da").split("|"), i.dSmallRorate = o[0] || "", i.aSmallRorate = o[1] || "", i.smallShowSpeed = o[2] || "trans02s") : (i.dSmallRorate = "", i.aSmallRorate = ""), q = d.attr("data-s") || "a", i.childConfig = [], i.childConfig[0] = {}, i.sliderSrc = [], i.sliderImgBgp = [], i.sliderHref = [], i.customContent = [], i.contentType = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.smallImgSrcT = [], i.smallHoverSrcT = [], i.thumbSet = [], i.thumbCircleSet = [], i.smallCircleMode = [], i.smallCircleBgColor = [], i.smallCircleBgColor1 = [], i.smallCustom = [], i.smallCustom1 = [], i.smallCharacterContent = [], i.smallCharacterContent1 = [], i.sliderOverflow = "hidden", i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jfsb").length > 0) {
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
					if (r = !1, 1 == d.children("ul").length && (r = !0), i.sliderActive = "1", d.hasClass("outbox") && (i.smallShowMode = "outbox"), s = (d.find(".ks-switchable-nav").attr("class") || "").match(/trans(\w+)s/g), t = (d.find(".ks-switchable-nav").attr("class") || "").match(/b-1-(lx|rx|dy|uy)(\d+)/g), s && s.length > 0 && (i.smallShowSpeed = s[0]), t && t.length > 0 && (i.smallShowCss = t[0]), u = require("scripts/other"), "visible" == d.find(".scroller:eq(0)").css("overflow") && (i.sliderOverflow = "visible"), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function (a) {
							var e, f, g, h, j, k, l, m, n, o, c = $(this);
							c.children("div.elexb").length > 0 && (c = c.children("div.elexb")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.css("background-position") || "50% 50%", h = c.children("a.J_TWidget").attr("href") || "", j = c.html(), k = d.children(".ks-switchable-nav").children("li:eq(" + a + ")"), p[a] || (p[a] = ""), e.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(f), i.sliderHref.push(h), i.sliderImgBgp.push(g), i.customContent.push(""), k.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(u.thumbImport(k))) : (k.find("img").length > 1 ? (l = k.find("img:eq(1)").attr("src"), m = k.find("img:eq(0)").attr("src"), l == f && (l = ""), (m == l || m == f) && (m = ""), i.smallImgSrcT.push(l), i.smallHoverSrcT.push(m)) : (l = k.find("img:eq(0)").attr("src"), l == f && (l = ""), i.smallImgSrcT.push(l), i.smallHoverSrcT.push("")), i.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), i.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), i.thumbSet.push(""))) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.sliderImgBgp.push("50% 50%"), i.customContent.push(j), k.find("a").length > 0 ? (h = k.find("a").attr("href") || "", !i.hrefMode && (i.hrefMode = k.find("a").attr("target") || "_self"), i.sliderHref.push(h)) : i.sliderHref.push(""), k.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(u.thumbImport(k))) : (k.find("img").length > 1 ? (l = k.find("img:eq(1)").attr("src"), m = k.find("img:eq(0)").attr("src"), l == f && (l = ""), (m == l || m == f) && (m = ""), i.smallImgSrc.push(l), i.smallHoverSrc.push(m)) : (l = k.find("img:eq(0)").attr("src"), l == f && (l = ""), i.smallImgSrc.push(l), i.smallHoverSrc.push("")), !p[a] && (p[a] = ""), !l && (l = ""), n = p[a].split(".com/"), o = l.split(".com/"), n[1] && "" != n[1] && o[1] && "" != o[1] && n[1] == o[1] && (p[a] = ""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push("")))
						}), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderImgBgp = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = [], f.smallCharacterContent = [], f.smallCharacterContent1 = []), h.effect && (i.sliderMode = h.effect), "true" != h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), h.delay && (i.sliderDelay = h.delay), h.triggerType && (i.sliderSwitch = h.triggerType), h.activeIndex && (i.sliderActive = b.tParseInt(h.activeIndex) + 1), console.log(d.find("a.J_TWidget")), d.find("a.J_TWidget").length > 0 ? i.hrefMode = d.find("a.J_TWidget").attr("target") || "_self" : !i.hrefMode && (i.hrefMode = "_blank"), i.sliderArrow = "no", l = h.prevBtnCls, m = h.nextBtnCls, l && "undefined" != l)
						if (i.sliderArrow = "yes", d.find("." + l).children("img").length > 0 ? (i.childConfig[0].oSrc = d.find("." + l).children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img:eq(0)").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src"))) : d.find("." + l).children("span").length > 0 ? (i.childConfig[0].oSrc = d.find("." + l).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[0].tSrc = d.find("." + m).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + l).children("span").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + m).children("span").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))) : d.find("." + l).children("div").length > 0 && (i.childConfig[0].oSrc = d.find("." + l).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[0].tSrc = d.find("." + m).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + l).children("div").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + m).children("div").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))), j = b.getChildPos(d, d.find("." + l), !0), k = b.getChildPos(d, d.find("." + m), !0), v = d.find("." + l), v.length > 0) {
							i.sliderArrow = "none" == v.css("display") ? "no" : "yes", i.displayMode = v.hasClass("june-box-fadein") ? "june-box-fadein" : "";
							try {
								i.css3Speed = v.attr("class").match(/trans(\w+)s/g).join(""), v.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + v.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), v.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + v.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
							} catch (w) {}
						} else i.sliderArrow = "no", i.displayMode = "";
					a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").each(function () {
						b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
					}), a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").remove(), B = !0, d.children("ul:eq(0)").children("li").each(function (c) {
						var g, f, h, j, k, l, m, n, o, p, r, e = $(this);
						e.hasClass("scm") ? (i.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet.push(u.thumbCircleImport(e))) : (i.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), i.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), i.thumbCircleSet[c] = ""), i.smallCustom[c] = "", i.smallCustom1[c] = "") : e.hasClass("sch") ? (i.smallCircleMode[c] = "yes1", i.smallCustom.push(e.children(".s2").html() || e.children(".s3").html() || ""), i.smallCustom1.push(e.children(".s1").html() || ""), i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "") : (i.smallCircleMode[c] = "no", i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "", i.smallCustom[c] = "", i.smallCustom1[c] = ""), f = i.contentType[c], h = !1, "imgContent" == f ? (g = i.smallImgSrcT[c], "" == g && (g = i.smallHoverSrcT[c])) : (g = i.smallImgSrc[c], "" == g && (g = i.smallHoverSrc[c])), "" == g && (g = i.sliderSrc[c]), $(this).attr("data-i") ? i.childConfig[0].attachID = $(this).attr("data-i") : b.setAttachID(i.childConfig[0]), "yes1" == i.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div>' + i.smallCustom[c] + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : "yes" == i.smallCircleMode[c] ? (j = "", k = "", l = "", m = "", n = $(this).width() + "px;", "" == i.thumbCircleSet[c] ? j = i.smallCircleBgColor[c] || i.smallCircleBgColor1[c] || "" : (k = JSON.parse(i.thumbCircleSet[c]), m = k.characterContent, j = k.characterBgColor || k.characterBgColorHover || "", k.characterColor = RGBToHex(k.characterColor, ""), "" != k.characterColor && (l += "color:" + k.characterColor + ";"), "" != k.characterFont && (l += "font-family:" + k.characterFont + ";"), "" != k.characterWeight && (l += "font-weight:" + k.characterWeight + ";"), "" != k.characterSize && (l += "font-size:" + b.tParseInt(k.characterSize) + "px;"), i.smallCircleBgColor[c] = k.characterBgColor, i.smallCircleBgColor1[c] = k.characterBgColorHover, "auto" == k.characterWidthMode && (h = !0, n = "auto;")), o = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;line-height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + l + '">' + m + "</div></div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), o.children(".t-jfsb-circle").css({
							backgroundColor: RGBToHex(j, ""),
							borderRadius: "50%"
						})) : "" == i.thumbSet[c] ? (i.smallCircleMode[c] = "no", $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + $(this).width() + "px;height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"><div class="t-app-mongolia"></div><img width="100%" height="100%" src="' + g + '"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID)) : (i.smallCircleMode[c] = "yes2", p = JSON.parse(i.thumbSet[c] || "{}"), n = $(this).width() + "px;", "auto" == p.characterWidthMode && (h = !0, n = "auto;"), i.smallCharacterContent[c] = p.characterContent, i.smallCharacterContent1[c] = p.characterContentHover, $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfsbSmallImg" style="width:' + n + "height:" + $(this).height() + "px;left:" + b.tParseInt($(this).css("left")) + "px;top:" + b.tParseInt($(this).css("top")) + 'px;z-index:101;"></div>').tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), r = a.children(b.appChildCls + "[attachID='" + i.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(p, r), r.hasClass("j-app-qswz") || r.addClass("j-app-qswz"), r.removeAttr("data-config")), 0 == c && (x = $(this).width(), z = $(this).height(), h && (x = "")), y = $(this).width(), A = $(this).height(), h && (y = ""), (x != y || z != A) && (B = !1)
					}), B && (i.sWidth = x, i.sHeight = z), d.children(".ks-switchable-nav").find("li").each(function () {
						var a = $(this);
						return C = a.css("background-image"), C && C.indexOf("T2.mrqXDpXXXXXXXXX") >= 0 ? (i.kgdSwitch = "white", !1) : C && C.indexOf("T2yq_rXvVXXXXXXXXX") >= 0 ? (i.kgdSwitch = "black", !1) : C && C.indexOf("T23JTrXxFXXXXXXXXX") >= 0 ? (i.kgdSwitch = "transparent", !1) : void 0
					}), r && (D = RGBToHex(d.children(".ks-switchable-nav").find("li").children("a.s2").css("background-color"), ""), C = "#ffffff" == D.toLowerCase() ? i.kgdSwitch = "white" : "#000000" == D.toLowerCase() ? i.kgdSwitch = "black" : void 0), C || i.kgdSwitch || (i.kgdSwitch = "transparent"), "none" == d.children("ul:eq(0)").css("display") ? (i.sliderSmallImg = "no", a.children(b.appChildCls + "[data-attachType='jfsbSmallImg']").hide()) : i.sliderSmallImg = "yes", "b" == q && (i.sliderMode += "1"), E = d.children("div.lbepanel"), E.length > 0 && E.each(function () {
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
					}), a.children(b.appOtherCls).html(i.customContent[0] + '<div class="jjzz"></div>')), a.children(b.appChildCls + "[data-attachType='jfsbOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jfsbTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/16986040375660277/T1DMWHFcxiXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028226837030/T1Rvy2FixXXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028310675059/T1gh90FoVbXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg"],
				sliderHref: ["#", "#", "#"],
				contentType: ["imgContent", "imgContent", "imgContent"],
				customContent: ["", "", ""],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallImgSrcT: ["", "", ""],
				smallHoverSrcT: ["", "", ""],
				smallCircleMode: ["no", "no", "no"],
				smallCircleBgColor: ["", "", ""],
				smallCircleBgColor1: ["", "", ""],
				thumbCircleSet: ["", "", ""],
				smallCharacterContent: ["", "", ""],
				smallCharacterContent1: ["", "", ""],
				thumbSet: ["", "", ""],
				smallCustom: ["", "", ""],
				smallCustom1: ["", "", ""],
				sliderImgBgp: ["50% 50%", "50% 50%", "50% 50%"],
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
				smallShowSpeed: "",
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
			jfyb: ['<div class="j-fnd t-app" data-dblType="jfyb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;翻页轮播设置",
				tUrl: "turnslider.php",
				tSubmit: function (a, c) {
					var d = require("scripts/tAjax"),
						e = c.children(b.appChildCls + "[data-attachType='jfybOArrow']"),
						f = c.children(b.appChildCls + "[data-attachType='jfybTArrow']");
					c.children(b.appChildCls + "[data-attachType='jfybPanel']"), b.tParseInt(a.smallSliderSpace), checkUrl(a.sliderSrc[0]) ? c.css({
						backgroundImage: "url(" + a.sliderSrc[0] + ")"
					}) : c.css({
						backgroundImage: "none"
					}), c.css({
						backgroundPosition: a.sliderImgBgp[0] || "50% 50%"
					}), checkUrl(a.childConfig[0].oSrc) ? (e.css({
						backgroundImage: "url(" + a.childConfig[0].oSrc + ")"
					}), "yes" == a.childConfig[0].autoSize && d.ajaxJsonForGis({
						img: a.childConfig[0].oSrc
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && e.width(b), c && e.height(c)
					})) : e.css({
						backgroundImage: "none"
					}), checkUrl(a.childConfig[0].tSrc) ? (f.css({
						backgroundImage: "url(" + a.childConfig[0].tSrc + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: a.childConfig[0].tSrc
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), "qp" == a.kuandukz && c.css({
						left: 0,
						width: b.june.width()
					}), a = b.smallSrcToSubmit(a, c, "jfyb"), c.children(b.appOtherCls).html(""), "customContent" == a.contentType[0] && (c.css({
						backgroundImage: ""
					}), c.children(b.appOtherCls).html(a.customContent[0] + '<div class="jjzz"></div>')), c.attr("data-config", JSON.stringify(a))
				},
				tOtherSetConfig: {
					ssOpacity: "1",
					ssOpacity1: "1",
					css3ModeX1: "",
					css3ModeY1: "",
					css3Mode1: ""
				},
				tDynamic: '<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg"><img width="120" height="120" src=""/></div>',
				tContent: '<div class="t-app-child" data-dblType="jfyb" data-attachType="jfybOArrow"></div><div class="t-app-child" data-dblType="jfyb" data-attachType="jfybTArrow"></div><div class="t-app-child" data-dblType="jfyb" data-attachType="jfybPanel" style="white-space: nowrap;"></div><div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function () {
					return "${!jfyb}"
				},
				codeImport: function (a, c, d, e) {
					var h, j, k, l, m, t, u, v, w, x, y, A, B, C, D, E, F, G, I, H, J, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						i = {},
						q = (a.children(b.appChildCls + "[data-attachType='jfybOArrow']"), a.children(b.appChildCls + "[data-attachType='jfybTArrow']"), a.children(b.appChildCls + "[data-attachType='jfybPanel']")),
						r = "li",
						s = d.attr("data-hsrc");
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
						}, s = s ? s.split(",") : [], t = d.attr("data-s") || "a", u = d.attr("data-sm") || "scrollx;1;0", v = u.split(";"), i.smallSliderMode = v[0], i.smallImgCount = v[1], i.smallSliderSpace = v[2], i.childConfig = [], i.childConfig[0] = {}, i.sliderSrc = [], i.sliderImgBgp = [], i.sliderHref = [], i.customContent = [], i.contentType = [], i.smallImgSrc = [], i.smallHoverSrc = [], i.smallImgSrcT = [], i.smallHoverSrcT = [], i.thumbSet = [], i.thumbCircleSet = [], i.smallCircleMode = [], i.smallCircleBgColor = [], i.smallCircleBgColor1 = [], i.smallCustom = [], i.smallCustom1 = [], i.smallCharacterContent = [], i.smallCharacterContent1 = [], i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children(".jfyb").length > 0) {
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
					w = JSON.parse(d.children("div.J_TWidget").attr("data-widget-config").replace(/'/g, '"')), i.sliderActive = "1", d.children("div.J_TWidget").find("div.ks-switchable-content").hasClass("sltae") && (r = "div"), x = require("scripts/other"), d.find(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").each(function (a) {
						var e, f, g, h, j, k, l, m, c = $(this);
						c.children("div").length > 0 && (c = c.children("div")), e = c.children("a.J_TWidget"), f = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g = c.css("background-position") || "50% 50%", h = c.children("a.J_TWidget").attr("href") || "", j = c.html(), k = d.children("div.J_TWidget").find("div.ks-switchable-content").children(r + ":eq(" + a + ")"), k.hasClass("fyslt") && (k = k.children()), s[a] || (s[a] = ""), e.length > 0 ? (i.contentType.push("imgContent"), i.sliderSrc.push(f), i.sliderImgBgp.push(g), i.sliderHref.push(h), i.customContent.push(""), k.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(x.thumbImport(k))) : (k.find("img").length > 1 ? (l = k.find("img:eq(1)").attr("src"), m = k.find("img:eq(0)").attr("src"), l == f && (l = ""), (m == l || m == f) && (m = ""), i.smallImgSrcT.push(l), i.smallHoverSrcT.push(m)) : (l = k.find("img:eq(0)").attr("src"), l == f && (l = ""), i.smallImgSrcT.push(l), i.smallHoverSrcT.push("")), i.smallImgSrc.push("http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"), (s[a] == f || s[a] == l) && (s[a] = ""), i.smallHoverSrc.push("http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"), i.thumbSet.push(""))) : (i.contentType.push("customContent"), i.sliderSrc.push(""), i.sliderImgBgp.push("50% 50%"), i.customContent.push(j), k.find("a").length > 0 ? (h = k.find("a").attr("href") || "", !i.hrefMode && (i.hrefMode = k.find("a").attr("target") || "_self"), i.sliderHref.push(h)) : i.sliderHref.push(""), k.hasClass("thumbsmall") ? (i.smallImgSrc.push(""), i.smallHoverSrc.push(""), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push(x.thumbImport(k))) : (k.find("img").length > 1 ? (l = k.find("img:eq(1)").attr("src"), m = k.find("img:eq(0)").attr("src"), l == f && (l = ""), (m == l || m == f) && (m = ""), i.smallImgSrc.push(l), i.smallHoverSrc.push(m)) : (l = k.find("img:eq(0)").attr("src"), l == f && (l = ""), i.smallImgSrc.push(l), i.smallHoverSrc.push("")), i.smallImgSrcT.push(""), i.smallHoverSrcT.push(""), i.thumbSet.push("")))
					}), d.children(".scroller:eq(0)").children(".ks-switchable-content").children("div.elepic").length > 0 && (f.sliderSrc = [], f.sliderImgBgp = [], f.sliderHref = [], f.smallImgSrc = [], f.smallHoverSrc = [], f.smallImgSrcT = [], f.smallHoverSrcT = [], f.customContent = [], f.contentType = [], f.thumbSet = [], f.thumbCircleSet = [], f.smallCircleMode = [], f.smallCircleBgColor = [], f.smallCircleBgColor1 = [], f.smallCustom = [], f.smallCustom1 = [], f.smallCharacterContent = [], f.smallCharacterContent1 = []), h.effect && (i.sliderMode = h.effect), "true" != h.autoplay && (i.sliderAuto = h.autoplay), h.easing && (i.sliderEffect = h.easing), h.interval && (i.sliderTime = h.interval), h.triggerType && (i.sliderSwitch = h.triggerType), h.activeIndex && (i.sliderActive = b.tParseInt(h.activeIndex) + 1), h.delay && (i.sliderDelay = h.delay), d.find("a.J_TWidget").length > 0 ? i.hrefMode = d.find("a.J_TWidget").attr("target") || "_self" : !i.hrefMode && (i.hrefMode = "_blank"), l = w.prevBtnCls, m = w.nextBtnCls, d.find("." + l).children("img").length > 0 ? (i.childConfig[0].oSrc = d.find("." + l).children("img:eq(0)").attr("src"), i.childConfig[0].tSrc = d.find("." + m).children("img:eq(0)").attr("src"), d.find("." + l).children("img").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("img:eq(1)").attr("src")), d.find("." + m).children("img").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("img:eq(1)").attr("src"))) : d.find("." + l).children("span").length > 0 ? (i.childConfig[0].oSrc = d.find("." + l).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[0].tSrc = d.find("." + m).children("span:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + l).children("span").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + m).children("span").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("span:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))) : d.find("." + l).children("div").length > 0 && (i.childConfig[0].oSrc = d.find("." + l).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.childConfig[0].tSrc = d.find("." + m).children("div:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.find("." + l).children("div").length > 1 && (i.childConfig[0].oSrcHover = d.find("." + l).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, "")), d.find("." + m).children("div").length > 1 && (i.childConfig[0].tSrcHover = d.find("." + m).children("div:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""))), j = b.setChildPos(d.children("div.J_TWidget"), d.find("." + l), !1), k = b.setChildPos(d.children("div.J_TWidget"), d.find("." + m), !1), y = d.find("." + l), i.displayMode = y.hasClass("june-box-fadein") ? "june-box-fadein" : "";
					try {
						i.css3Speed = y.attr("class").match(/trans(\w+)s/g).join(""), y.attr("class").indexOf("june-box-lx") >= 0 && (i.css3Mode = $.trim("moveout" + y.attr("class").match(/june-box-lx(\w+)($|\s)/g).join("").replace(/june-box-lx/g, ""))), y.attr("class").indexOf("june-box-rx") >= 0 && (i.css3Mode = $.trim("movein" + y.attr("class").match(/june-box-rx(\w+)($|\s)/g).join("").replace(/june-box-rx/g, "")))
					} catch (z) {}
					A = "display:inline-block;", B = "inline-block", C = "margin-right:" + i.smallSliderSpace + "px;", "scrolly" == i.smallSliderMode && (A = "", B = "block", C = "margin-bottom:" + i.smallSliderSpace + "px;"), q.children("div.J_TWidget").children(b.appOtherCls + "[data-attachType='jfybSmallImg']").each(function () {
						b.jSelectsedDom = b.jSelectsedDom.not($(this)[0])
					}), q.children("div.J_TWidget").children(b.appOtherCls + "[data-attachType='jfybSmallImg']").remove(), H = !0, d.children("div.J_TWidget").find("div.ks-switchable-content").children(r).each(function (c) {
						var g, f, h, j, k, l, m, n, o, p, s, t, e = $(this);
						e.hasClass("fyslt") && (e = e.children()), e.hasClass("scm") ? (i.smallCircleMode[c] = "yes", e.hasClass("scm_s") ? (i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet.push(x.thumbCircleImport(e))) : (i.smallCircleBgColor[c] = RGBToHex(e.children(".s2").css("background-color"), ""), i.smallCircleBgColor1[c] = RGBToHex(e.children(".s1").css("background-color"), ""), i.thumbCircleSet[c] = ""), i.smallCustom[c] = "", i.smallCustom1[c] = "") : e.hasClass("sch") ? (i.smallCircleMode[c] = "yes1", i.smallCustom.push(e.children(".s2").html() || e.children(".s3").html() || ""), i.smallCustom1.push(e.children(".s1").html() || ""), i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "") : (i.smallCircleMode[c] = "no", i.smallCircleBgColor[c] = "", i.smallCircleBgColor1[c] = "", i.thumbCircleSet[c] = "", i.smallCustom[c] = "", i.smallCustom1[c] = ""), f = i.contentType[c], g = "imgContent" == f ? i.smallImgSrcT[c] : i.smallImgSrc[c], "" == g && (g = i.sliderSrc[c]), e.attr("data-i") ? i.childConfig[0].attachID = e.attr("data-i") : b.setAttachID(i.childConfig[0]), h = "display:inline-block;", "scrolly" == i.smallSliderMode && (h = "display:block;"), "yes1" == i.smallCircleMode[c] ? $('<div class="t-app-child" data-dblType="jfyb" data-attachType="jfybSmallImg" style="' + A + C + "width:" + e.width() + "px;height:" + e.height() + "px;" + h + '"><div class="t-app-mongolia"></div>' + i.smallCustom[c] + "</div>").tResize().appendTo(a).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID) : "yes" == i.smallCircleMode[c] ? (j = "", k = "", l = "", m = "", n = e.width() + "px;", "" == i.thumbCircleSet[c] ? j = i.smallCircleBgColor[c] || i.smallCircleBgColor1[c] || "" : (k = JSON.parse(i.thumbCircleSet[c]), m = k.characterContent, j = k.characterBgColor || k.characterBgColorHover || "", k.characterColor = RGBToHex(k.characterColor, ""), "" != k.characterColor && (l += "color:" + k.characterColor + ";"), "" != k.characterFont && (l += "font-family:" + k.characterFont + ";"), "" != k.characterWeight && (l += "font-weight:" + k.characterWeight + ";"), "" != k.characterSize && (l += "font-size:" + b.tParseInt(k.characterSize) + "px;"), i.smallCircleBgColor[c] = k.characterBgColor, i.smallCircleBgColor1[c] = k.characterBgColorHover, "auto" == k.characterWidthMode && (smallModecheck = !0, n = "auto;")), o = $('<div class="t-app-child" data-dblType="jfsb" data-attachType="jfybSmallImg" style="' + A + C + "width:" + e.width() + "px;height:" + e.height() + "px;" + h + '"><div class="t-app-mongolia"></div><div class="t-jfsb-circle" style="position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;' + l + '">' + m + "</div></div>").tResize().appendTo(q).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), o.children(".t-jfsb-circle").css({
							backgroundColor: RGBToHex(j, ""),
							borderRadius: "50%"
						})) : "" == i.thumbSet[c] ? (i.smallCircleMode[c] = "no", $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="' + A + C + "width:" + e.width() + "px;height:" + e.height() + "px;" + h + '"><img width="100%" height="100%" src="' + g + '"></div>').appendTo(q).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID)) : (i.smallCircleMode[c] = "yes2", p = JSON.parse(i.thumbSet[c] || "{}"), i.smallCharacterContent[c] = p.characterContent, i.smallCharacterContent1[c] = p.characterContentHover, $('<div class="t-app-other t-app-grandson" data-dblType="jfyb" data-attachType="jfybSmallImg" style="vertical-align:top;' + A + C + "width:" + e.width() + "px;height:" + e.height() + "px;" + h + '"></div>').appendTo(q).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), s = q.children(b.appOtherCls + "[attachID='" + i.childConfig[0].attachID + "']"), b.appConfig["jcb"][1].tSubmit(p, s), s.removeAttr("data-config")), 0 == c && (D = e.width(), F = e.height()), E = e.width(), G = e.height(), (D != E || F != G) && (H = !1), I = e.css("background-image"), I && I.indexOf("T2.mrqXDpXXXXXXXXX") >= 0 ? i.kgdSwitch = "white" : I && I.indexOf("T2yq_rXvVXXXXXXXXX") >= 0 ? i.kgdSwitch = "black" : I && I.indexOf("T23JTrXxFXXXXXXXXX") >= 0 && (i.kgdSwitch = "transparent"), t = RGBToHex(e.children("a:eq(1)").css("background-color"), ""), 0 == e.children("a:eq(1)").length && e.children("div").children("a:eq(1)").length > 0 && (t = RGBToHex(e.children("div").children("a:eq(1)").css("background-color"), "")), I = "#ffffff" == t.toLowerCase() ? i.kgdSwitch = "white" : "#000000" == t.toLowerCase() ? i.kgdSwitch = "black" : void 0
					}), H && (i.sWidth = D, i.sHeight = F), I || i.kgdSwitch || (i.kgdSwitch = "transparent"), b.setAttachID(i.childConfig[0]), q.tResize().css({
						width: d.children("div.J_TWidget").width(),
						height: d.children("div.J_TWidget").height(),
						left: b.tParseInt(d.children("div.J_TWidget").css("left")),
						top: b.tParseInt(d.children("div.J_TWidget").css("top"))
					}).attr("appID", i.appID).attr("attachID", i.childConfig[0].attachID), "b" == t && (i.sliderMode += "1"), J = $.extend(f, i), a.attr("data-config", JSON.stringify(J)), require("scripts/tAjax"), "" != i.sliderSrc[0] && checkUrl(i.sliderSrc[0]) ? a.css({
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
					}), a.children(b.appOtherCls).html(i.customContent[0] + '<div class="jjzz"></div>')), a.children(b.appChildCls + "[data-attachType='jfybOArrow']").attr("appID", i.appID), a.children(b.appChildCls + "[data-attachType='jfybTArrow']").attr("appID", i.appID), a.attr("appID", i.appID), b.appConfig["jfyb"][1].tSubmit(J, a), e(g, i.appID)
				}
			}, {
				appID: "",
				sliderSrc: ["http://img02.taobaocdn.com/imgextra/i2/16986040375660277/T1DMWHFcxiXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028226837030/T1Rvy2FixXXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028310675059/T1gh90FoVbXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg", "http://img03.taobaocdn.com/imgextra/i3/16986028226837030/T1Rvy2FixXXXXXXXXX_!!165056986-0-tstar.jpg_580x580.jpg"],
				sliderHref: ["#", "#", "#", "#"],
				contentType: ["imgContent", "imgContent", "imgContent", "imgContent"],
				customContent: ["", "", "", ""],
				smallImgSrc: ["http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png", "http://img03.taobaocdn.com/imgextra/i3/39767794/TB2lOqMapXXXXagXpXXXXXXXXXX_!!39767794.png"],
				smallHoverSrc: ["http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png", "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Um9NapXXXXX5XpXXXXXXXXXX_!!39767794.png"],
				smallImgSrcT: ["", "", "", ""],
				smallHoverSrcT: ["", "", "", ""],
				smallCircleMode: ["no", "no", "no", "no"],
				smallCircleBgColor: ["", "", "", ""],
				smallCircleBgColor1: ["", "", "", ""],
				thumbCircleSet: ["", "", "", ""],
				smallCharacterContent: ["", "", "", ""],
				smallCharacterContent1: ["", "", "", ""],
				thumbSet: ["", "", "", ""],
				smallCustom: ["", "", "", ""],
				smallCustom1: ["", "", "", ""],
				sliderImgBgp: ["50% 50%", "50% 50%", "50% 50%", "50% 50%"],
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
				smallShowSpeed: "",
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
			jfb: ['<div class="j-fnd t-app" data-dblType="jfb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;分享设置",
				tUrl: "share.php",
				tSubmit: function (a, b) {
					var c = require("scripts/tAjax");
					checkUrl(a.shareSrc) ? (b.css({
						backgroundImage: "url(" + a.shareSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.shareSrc
					}, function (a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : b.css({
						backgroundImage: "none"
					}), b.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(b, RGBToHex(a.bgColor, "")), b.attr("data-config", JSON.stringify(a))
				},
				codeExport: function () {
					return "${!jfb}"
				},
				codeImport: function (a, b, c, d) {
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
			jgb: ['<div class="j-fnd t-app" data-dblType="jgb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;购物车设置",
				tUrl: "gwc.php",
				tSubmit: function (a, b) {
					var c = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (b.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
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
				codeExport: function () {
					return "${!jgb}"
				},
				codeImport: function (a, b, c, d) {
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
			jscb: ['<div class="j-fnd t-app" data-dblType="jscb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;收藏设置",
				tUrl: "shoucang.php",
				tSubmit: function (a, c) {
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
					}, function (a) {
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
					}, function (b) {
						a.shopId = b && "yes" == b[0] ? b[1] : "%7b$shop.id%7d", c.html(text).tResize(), c.attr("data-config", JSON.stringify(a))
					})) : (c.html(text).tResize(), c.attr("data-config", JSON.stringify(a)))
				},
				codeExport: function () {
					return "${!jscb}"
				},
				codeImport: function (a, c, d, e) {
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
				characterFont: "微软雅黑",
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
			jxhb: ['<div class="j-fnd t-app" data-dblType="jxhb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;喜欢设置",
				tUrl: "xihuan.php",
				tSubmit: function (a, b) {
					var d, c = require("scripts/tAjax");
					checkUrl(a.pSrc) ? (b.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : b.css({
						backgroundImage: "none"
					}), 3 == a.xhType ? (c = require("scripts/tAjax"), d = "", "" != a.href ? c.ajaxJson("gsi.php", {
						url: a.href,
						random: 1e4 * Math.random()
					}, function (a) {
						d = a && "yes" == a[0] ? a[1] : "%7b$shop.id%7d", b.attr("data-shopId", d)
					}) : b.attr("data-shopId", "%7b$shop.id%7d")) : b.attr("data-shopId", ""), "1" == a.favStyle ? b.children(".t-app-other").html('<div class="simple-like sns-widget sns-like sns-widget-ui"><div class="sns-like-wrap">   <a title="我的淘宝，大家一起赞！" class="dig-button J_Trigger">       <span class="dig-icon"><s class="J_Icon"></s></span>       <span class="dig-button-title">喜欢</span>   </a>   <span class="dig-count">       <i class="c">(</i>       <span class="J_Counter">5678</span>       <i class="c">)</i>   </span>   <div class="tb-dig-tip hide">       <div class="tip-content"></div>       <s class="arrow"></s>   </div></div></div><div class="jjzz"></div>') : b.children(".t-app-other").html('<div class="common-like sns-widget sns-like sns-widget-ui"><div class="sns-like-wrap">   <a title="我的淘宝，大家一起赞！" class="dig-button J_Trigger">       <span class="dig-icon"><s class="J_Icon"></s></span>       <span class="dig-button-title">喜欢</span>   </a>   <span class="dig-count">       <i class="c">(</i>       <span class="J_Counter">5678</span>       <i class="c">)</i>   </span>   <div class="tb-dig-tip hide">       <div class="tip-content"></div>       <s class="arrow"></s>   </div></div></div><div class="jjzz"></div>'), b.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom" style="width:100%;height:100%;"></div>',
				codeExport: function (a) {
					var i, c = JSON.parse(a.attr("data-config")),
						d = a.width(),
						e = a.height(),
						f = b.tParseInt(a.css("top")),
						g = b.tParseInt(a.css("left")),
						h = "",
						j = "",
						k = c.imgBgp || "50% 50%",
						l = c.tipText || "",
						m = "";
					return "" != l && (m = ' title= "' + l + '"'), "2" == c.xhType ? (i = c.href.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), i && i.length > 0 && (j = i[0].replace(/\?id\=/g, ""))) : j = a.attr("data-shopId") || c.href, checkUrl(c.pSrc) && (h = "background:url(" + c.pSrc + ") " + k + " no-repeat;"), '<div class="jxhb sns-widget ' + c.appID + '" data-appid="' + c.appID + '"' + m + ' style="width:' + d + "px;height:" + e + "px;top:" + f + "px;left:" + g + "px;z-index:10;" + h + '" data-like=\'{"type":' + c.xhType + ',"key":"' + j + '", "skinType":' + c.favStyle + ',"text":"喜欢"}\'>喜欢</div>'
				},
				codeImport: function (a, b, c, d) {
					var i, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {},
						h = JSON.parse(c.attr("data-like") || '{"type":2,"key":"", "skinType":1,"text":"喜欢"}');
					g.appID = c.attr("data-appid") ? c.attr("data-appid") : a.attr("appid"), g.pSrc = c.css("background-image").replace(/^url|[\(\"\)]*/g, ""), g.xhType = h.type || "2", g.favStyle = h.skinType || "2", "2" == g.xhType ? g.href = "http://item.taobao.com/item.htm?id=" + h.key || "" : (g.href = "http://shop" + h.key + ".taobao.com/" || "", a.attr("data-shopId", h.key)), i = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(i)), checkUrl(g.pSrc) && a.css({
						backgroundImage: "url(" + g.pSrc + ")"
					}), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				pSrc: "",
				autoSize: "yes",
				xhType: "2",
				favStyle: "1",
				href: "http://detail.tmall.com/item.htm?id=22410268535"
			}],
			jeb: ['<div class="j-fnd t-app" data-dblType="jeb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;二维码设置",
				tUrl: "ewm.php",
				tSubmit: function (a, b) {
					var c = require("scripts/tAjax");
					c.ajaxText("getewm.php", {
						ewmUrl: a.ewmUrl,
						ewmSize: a.ewmSize,
						ewmType: a.ewmType,
						ewmShop: a.ewmShop
					}, function (c) {
						c && "" != c && (a.ewmSrc = c), b.css({
							width: a.ewmSize,
							height: a.ewmSize,
							backgroundImage: "url(" + a.ewmSrc.replace(/\%7b(\S|\s)+\%7d/g, "1") + ")"
						}), b.attr("data-config", JSON.stringify(a))
					}), b.attr("data-config", JSON.stringify(a))
				},
				codeExport: function () {
					return "${!jeb}"
				},
				codeImport: function (a, b, c, d) {
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
			jtsb: ['<div class="j-fnd t-app" data-dblType="jtsb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;滚动文字设置",
				tUrl: "textscroll.php",
				tSubmit: function (a, c) {
					var d, e, f, g, h;
					c.html("").html('<marquee class="t-app-other" scrollamount="4" align="left" behavior="' + a.characterScrollMode + '" style="position:absolute;">请双击设置文字内容</marquee>').tResize(), d = "", e = "", f = c.width(), g = c.height(), c.removeClass("j-app-qswz"), "alternate" != a.characterScrollMode && ("2" == a.characterDirectionPosition ? ("right" == a.characterDirection && (e = "left: " + f + "px;"), "down" == a.characterDirection && (e = "top: " + g + "px;")) : ("left" == a.characterDirection && (e = "right: " + f + "px;"), "up" == a.characterDirection && (e = "bottom: " + g + "px;"))), h = "", a.characterLineThrough && "" != a.characterLineThrough && (h = a.characterLineThrough), a.characterLineUnder && "" != a.characterLineUnder && ("" == h ? h = a.characterLineUnder : h += " " + a.characterLineUnder), ("" != a.characterContent || "" != a.customContent) && (d = '<div style="position:relative;display:inline-block;white-space:nowrap;word-break:break-all;' + e + '">', c.children(b.appOtherCls).attr({
						direction: a.characterDirection,
						scrollamount: a.characterSpeed,
						scrolldelay: a.characterEffect
					}).html(d + a.characterContent + "</div>"), "text" == a.characterMode && c.addClass("j-app-qswz"), "img" == a.characterMode && c.children(b.appOtherCls).html(d + '<img src="' + a.characterContent + '" />' + "</div>"), "custom" == a.characterMode && c.children(b.appOtherCls).html(d + a.customContent + '<div class="jjzz"></div>' + "</div>"), c.children(b.appOtherCls).children("div").css({
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
				codeExport: function () {
					return "${!jtsb}"
				},
				codeImport: function (a, c, d, e) {
					var j, k, l, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.children("marquee"),
						i = {};
					i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), d.children("marquee").children("div.scrollfm").length > 0 && (h = d.children("marquee").children("div.scrollfm"), h.children("div.scrollfm").length > 0 && (h = h.children("div.scrollfm")), i.characterDirectionPosition = h.attr("data-dire") || "1"), d.children(".udma").length > 0 ? (h = d.find(".udcon").children("div.scrollfm"), h.children("div.scrollfm").length > 0 && (h = h.children("div.scrollfm")), i.characterDirectionPosition = h.attr("data-dire") || "1", j = d.children(".udma").attr("data-sDr") || "up;3", k = j.split(";"), i.characterSpeed = k[1], i.characterScrollMode = "alternate", i.characterDirection = k[0], i.characterEffect = "0") : (i.characterSpeed = d.children("marquee").attr("scrollamount"), i.characterEffect = d.children("marquee").attr("scrolldelay"), i.characterScrollMode = d.children("marquee").attr("behavior"), i.characterDirection = d.children("marquee").attr("direction")), "alternate" != i.characterScrollMode || "up" != i.characterDirection && "down" != i.characterDirection ? i.characterSpeed1 = "2s" : (i.characterSpeed1 = i.characterSpeed + "s", i.characterSpeed = "4"), i.characterSize = h.css("font-size").replace(/px/g, ""), i.characterFont = h.css("font-family").replace(/'/g, ""), i.characterColor = RGBToHex(h.css("color")), i.characterBgColor = RGBToHex(h.css("background-color"), ""), i.characterWeight = h.css("font-weight"), "400" == i.characterWeight && (i.characterWeight = "normal"), i.characterStyle = h.css("font-style") || "normal", i.characterLineThrough = "", i.characterLineUnder = "", i.characterContent = h.html(), i.characterMode = "text", h.css("text-decoration").indexOf("line-through") >= 0 && (i.characterLineThrough = "line-through"), h.css("text-decoration").indexOf("underline") >= 0 && (i.characterLineUnder = "underline"), "undefined" != typeof d.find("a").attr("href") && (i.href = d.find("a").attr("href"), i.hrefMode = d.find("a").attr("target"), i.characterContent = d.find("a").html()), i.characterContent.indexOf("<img") >= 0 && (i.characterMode = "img", i.characterContent = d.find("img").attr("src")), "custom" == d.attr("data-mode") && (i.characterContent = "", i.characterMode = "custom", i.customContent = h.html()), "text" == f.characterMode && "" != i.characterContent && a.addClass("j-app-qswz"), l = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(l)), b.appConfig["jtsb"][1].tSubmit(l, a), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				href: "",
				hrefMode: "_blank",
				characterMode: "text",
				characterContent: "",
				customContent: "",
				characterSize: "20",
				characterFont: "微软雅黑",
				characterColor: "#990000",
				characterBgColor: "",
				characterWeight: "normal",
				characterStyle: "",
				characterLineUnder: "",
				characterLineThrough: "",
				characterSpeed: "4",
				characterSpeed1: "2s",
				characterEffect: "0",
				characterScrollMode: "scroll",
				characterDirection: "left",
				characterDirectionPosition: "1"
			}],
			jpb: ['<div class="j-fnd t-app" data-dblType="jpb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;弹出层设置",
				tSubmit: function (a, b) {
					b.attr("data-setAppID", a.appIDSelect), b.attr("data-config", JSON.stringify(a))
				},
				tUrl: "popupApp.php",
				tContent: "",
				codeExport: function (a) {
					var u, v, c = JSON.parse(a.attr("data-config")),
						h = (a.width(), a.height(), b.tParseInt(a.css("top")), b.tParseInt(a.css("left")), c.css3Speed || "0.1s"),
						i = c.css3Mode || "",
						j = c.triggerType || "mouse",
						k = c.clickToggle || "yes",
						l = "",
						m = "",
						n = "",
						o = "",
						p = "",
						q = "",
						r = "ease-in",
						s = ' style="',
						t = a.attr("data-lOpacity") || "100";
					return "" != t && "100" != t && (s = ' data-lo="' + t + '" style="opacity: ' + t / 100 + ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=" + t + ");"), "" != i && ("" != c.css3Bezier && ("bs1" == c.css3Bezier && (r = "cubic-bezier(1, 0, 1, 0)"), "bs2" == c.css3Bezier && (r = "cubic-bezier(1, 0, 1, 1)"), "bs3" == c.css3Bezier && (r = "cubic-bezier(0.42, 0, 1, 1)"), "bq1" == c.css3Bezier && (r = "cubic-bezier(0, 1, 0, 1)"), "bq2" == c.css3Bezier && (r = "cubic-bezier(0, 0, 0, 1)"), "bq3" == c.css3Bezier && (r = "cubic-bezier(0, 0, 0.58, 1)")), q = "-webkit-transition: " + h + " " + r + ";" + "-moz-transition: " + h + " " + r + ";" + "-o-transition: " + h + " " + r + ";" + "transition: " + h + " " + r + ";", "effect_w" == i ? (m = "c-1", $("#jstForPopup").html(c.customHtml), n = "width:" + $("#jstForPopup").outerWidth() + "px;") : "effect_h" == i ? (m = "d-1", $("#jstForPopup").html(c.customHtml), n = "height:" + $("#jstForPopup").outerHeight() + "px;") : "effect_wh" == i && (m = "c-1 d-1", $("#jstForPopup").html(c.customHtml), n = "width:" + $("#jstForPopup").outerWidth() + "px;height:" + $("#jstForPopup").outerHeight() + "px;"), o = '<div class="pope e-1" data-e="' + i + ";" + c.css3Bezier + ";" + h + '" style="' + n + '"><div class="' + m + ' outbox" style="' + q + '"><div class="rel" style="width:100%;height:100%;">', p = "</div></div></div>"), !c.spaceX && (c.spaceX = 0), !c.spaceY && (c.spaceY = 0), "" == c.spaceX && (c.spaceX = 0), "" == c.spaceY && (c.spaceY = 0), u = c.popupPosition, v = c.appIDAlignSelect, "no" == c.alignType && (u = "'tl','tl'", v = c.appIDSelect), "click" == j && (l = "'triggerType':'click',", "yes" == k && (l += "'toggle':true,")), '<div class="J_TWidget jpb abs" data-widget-type="Popup" data-widget-config="{' + l + "'trigger':'." + c.appIDSelect + "','align':{'node':'." + c.appIDSelect + "','offset':[" + c.spaceX + "," + c.spaceY + "],'points':[" + u.replace(/"/g, "'") + ']}}"' + s + 'z-index:99;display:none;">' + o + c.customHtml + p + "</div>"
				},
				codeImport: function (a, c, d, e) {
					var j, k, l, m, n, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = JSON.parse(d.attr("data-widget-config").replace(/\'/g, '"')),
						i = {};
					for (i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), i.triggerType = h.triggerType || "mouse", i.clickToggle = h.toggle === !0 ? "yes" : "no", i.appIDSelect = h.trigger.replace(/\./g, ""), i.appIDAlignSelect = h.align.node.replace(/\./g, ""), i.popupPosition = "'" + h.align.points[0] + "','" + h.align.points[1] + "'", i.spaceX = h.align.offset[0], i.spaceY = h.align.offset[1]; d.children("div").hasClass("ks-contentbox") || d.children("div").hasClass("ks-popup-content");) d = d.children("div");
					"mouse" == i.triggerType && (i.clickToggle = "yes"), i.customHtml = d.html(), d.children(".pope").length > 0 && (i.customHtml = d.children(".pope").children(".outbox").children("div").html(), j = d.children(".pope").attr("data-e") || ";;0.5s", k = j.split(";"), i.css3Mode = k[0], i.css3Bezier = k[1], i.css3Speed = k[2]), l = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(l)), a.attr("appID", i.appID), a.attr("data-setAppID", i.appIDSelect), m = $(b.appParentCls + "[appID='" + i.appIDSelect + "']"), n = $(b.appChildCls + "[attachID='" + i.appIDSelect + "']"), m.length > 0 ? a.offset({
						left: m.offset().left,
						top: m.offset().top
					}) : n.length > 0 && a.offset({
						left: n.offset().left,
						top: n.offset().top
					}), e(g, i.appID)
				}
			}, {
				appID: "",
				appIDSelect: "",
				appIDAlignSelect: "",
				alignType: "yes",
				triggerType: "mouse",
				clickToggle: "yes",
				popupPosition: "'tl','tl'",
				css3Speed: "0.5s",
				css3Bezier: "",
				css3Mode: "",
				spaceX: "0",
				spaceY: "0",
				customHtml: ""
			}],
			jacb: ['<div class="j-fnd t-app" data-dblType="jacb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;可关闭层设置",
				tUrl: "allowclose.php",
				tSubmit: function (a, c) {
					var d = require("scripts/tAjax"),
						e = a.childConfig[0].showBtnSrc,
						f = a.childConfig[0].hideBtnSrc,
						g = c.children(b.appChildCls + ":eq(0)"),
						h = c.children(b.appChildCls + ":eq(1)");
					checkUrl(a.pSrc) ? (c.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && d.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
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
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && g.width(b), c && g.height(c)
					})) : g.css({
						backgroundImage: "none"
					}), checkUrl(f) ? (h.css({
						backgroundImage: "url(" + f + ")"
					}), "yes" == a.childConfig[0].autoSize1 && d.ajaxJsonForGis({
						img: f
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && h.width(b), c && h.height(c)
					})) : h.css({
						backgroundImage: "none"
					}), "ptlink" == a.alclinkMode ? c.children(b.appOtherCls + ":eq(0)").html("") : c.children(b.appOtherCls + ":eq(0)").html(a.customHtml + '<div class="jjzz"></div>'), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div><div class="t-app-child" data-dblType="jacb" data-attachType="jacbBtn"></div><div class="t-app-child" data-dblType="jacb" data-attachType="jacbBtn"></div>',
				codeExport: function () {
					return "${!jacb}"
				},
				codeImport: function (a, c, d, e) {
					var k, l, m, n, o, p, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = d.find(".ks-switchable-nav li:eq(0)"),
						j = d.find(".ks-switchable-nav li:eq(1)");
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.childConfig = [], h.childConfig[0] = {}, h.childConfig[0].tipText = "", d.find(".ks-switchable-nav").attr("title") && "" != d.find(".ks-switchable-nav").attr("title") && (h.childConfig[0].tipText = d.find(".ks-switchable-nav").attr("title")), h.pSrc = d.find(".bd").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.css("background-color"), ""), h.imgBgp = d.find(".bd").css("background-position") || "50% 50%", h.href = d.find(".bd a").attr("href") || "", h.hrefMode = d.find(".bd a").attr("target") || "_self", h.alclinkMode = "ptlink", h.customHtml = "", d.find(".bd").hasClass("bdhtml") && (h.alclinkMode = "gzlink", h.customHtml = d.find(".bdhtml").html()), h.childConfig[0].showBtnSrc = j.css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.childConfig[0].hideBtnSrc = i.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n = h.childConfig[0].showBtnSrc, o = h.childConfig[0].hideBtnSrc, m = j, j.hasClass("hidden") && (h.acMode = "hide", m = i), k = {
						width: j.width(),
						height: j.height(),
						left: b.tParseInt(j.css("left")),
						top: b.tParseInt(j.css("top"))
					}, l = {
						width: i.width(),
						height: i.height(),
						left: b.tParseInt(i.css("left")),
						top: b.tParseInt(i.css("top"))
					}, a.width(d.find(".bd").width()), a.height(d.find(".bd").height()), p = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(p)), checkUrl(h.pSrc) ? a.css({
						backgroundImage: "url(" + h.pSrc + ")"
					}) : a.css({
						backgroundImage: "none"
					}), a.css({
						backgroundPosition: h.imgBgp
					}), submitColor(a, RGBToHex(h.bgColor, "")), checkUrl(n) ? a.children(b.appChildCls + ":eq(0)").css({
						backgroundImage: "url(" + n + ")"
					}) : a.children(b.appChildCls + ":eq(0)").css({
						backgroundImage: "none"
					}), checkUrl(o) ? a.children(b.appChildCls + ":eq(1)").css({
						backgroundImage: "url(" + o + ")"
					}) : a.children(b.appChildCls + ":eq(1)").css({
						backgroundImage: "none"
					}), "ptlink" == h.alclinkMode ? a.children(b.appOtherCls + ":eq(0)").html("") : a.children(b.appOtherCls + ":eq(0)").html(h.customHtml + '<div class="jjzz"></div>'), a.children(b.appChildCls + ":eq(0)").css({
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
				pSrc: "https://img.alicdn.com/imgextra/i3/800803731/TB2gQt1kY0kpuFjy0FjXXcBbVXa-800803731.jpg",
				imgBgp: "50% 50%",
				autoSize: "yes",
				acMode: "display",
				alclinkMode: "ptlink",
				href: "",
				hrefMode: "_blank",
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
			jkgb: ['<div class="j-fnd t-app" data-dblType="jkgb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;开关灯设置",
				tUrl: "kgd.php",
				tSubmit: function (a, c) {
					var h, i, j, k, d = require("scripts/tAjax"),
						e = require("scripts/appManage"),
						f = require("scripts/childKaiGuanDengTuPian"),
						g = a.childConfig;
					if (a.childConfig && a.childConfig.length > 0)
						for (h in a.childConfig) i = a.childConfig[h], i && i.attachID && (j = i.attachID, k = c.children(b.appChildCls + "[attachID='" + j + "']"), 0 == k.length && f.create("jkgbChild", c, function (a, d, f) {
							e.callback(a, d, f), k = c.children(b.appChildCls + "[attachID='" + f + "']")
						}, i), k.attr("data-inr", "yes"), i.contentMode && "customContent" != i.contentMode ? (checkUrl(i.pSrc) ? (k.css({
							backgroundImage: "url(" + i.pSrc + ")"
						}), "yes" == i.autoSize && function (a) {
							d.ajaxJsonForGis({
								img: g[a].pSrc
							}, function (d) {
								var e = d[0],
									f = d[1];
								e && c.children(b.appChildCls + "[data-attachType='jkgbChild']:eq(" + a + ")").width(e), f && c.children(b.appChildCls + "[data-attachType='jkgbChild']:eq(" + a + ")").height(f), a = void 0
							})
						}(h)) : k.css({
							backgroundImage: "none"
						}), k.css({
							backgroundPosition: i.imgBgp || "50% 50%"
						}), submitColor(k, RGBToHex(i.bgColor, ""))) : (k.css({
							background: "none"
						}), k.html(i.customContent).tResize()), b.setPopupContent(a.childConfig[h], !0, a.appID));
					c.children(b.appChildCls + "[data-inr!='yes']").each(function () {
						var a = $(this),
							b = a.attr("appID"),
							c = a.attr("attachID");
						e.remove(b, c)
					}), c.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				tDynamic: '<div class="t-app-child" data-dblType="jkgb" data-attachType="jkgbChild"></div>',
				tDynamicConfig: {
					attachID: "",
					contentMode: "imgContent",
					pSrc: "https://img.alicdn.com/imgextra/i3/800803731/TB2gQt1kY0kpuFjy0FjXXcBbVXa-800803731.jpg",
					customContent: "",
					overflowMode: "hidden",
					bgColor: "",
					imgBgp: "50% 50%",
					oppoSrc: "",
					autoSize: "yes",
					href: "",
					hrefMode: "_blank",
					tipText: "",
					mongoliaMode: "color",
					mongoliaColor: "#000",
					mongoliaSrc: ""				
				},
				codeExport: function () {
					return "${!jkgb}"
				},
				codeImport: function (a) {
					var k, l, m, n, o, p, q, r, c = require("scripts/childKaiGuanDengTuPian"),
						d = require("scripts/appManage"),
						e = a.find(".pic").length,
						f = a.width(),
						g = a.height(),
						h = b.tParseInt(a.css("top")),
						i = b.tParseInt(a.css("left")),
						j = [];
					for (tempObj = {}, tempObj.childConfig = [], k = a.attr("data-junezxset"), k && (j = k.split(";"), tempObj.oppoEffect = j[0], tempObj.oppoSpeed = j[1]), a.attr("data-appid") ? tempObj.appID = a.attr("data-appid") : b.setAppID(tempObj), $('<div class="j-fnd t-app" data-dblType="jkgb"></div>').appendTo(b.june).tResize().css({
							left: i,
							top: h,
							width: f,
							height: g
						}).attr("data-config", JSON.stringify(tempObj)).attr("appID", tempObj.appID), l = $(b.appParentCls + "[appID='" + tempObj.appID + "']"), d.callback("jkgb", tempObj.appID), m = 0; e > m; m++) n = {}, o = 0, p = 0, q = a.find(".b-box").eq(m), r = a.find(".pic").eq(m), q.length > 0 && (o = b.tParseInt(q.css("left")), p = b.tParseInt(q.css("top"))), r.length > 0 && (n.tipText = "", q.attr("title") && "" != q.attr("title") && (n.tipText = q.attr("title")), n.contentMode = "imgContent", n.customContent = "", n.attachID = q.attr("data-appid") || "", n.pSrc = r.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.bgColor = RGBToHex(r.css("background-color"), ""), n.imgBgp = r.css("background-position"), n.href = r.attr("href") || "_self", n.hrefMode = r.attr("target") || "", n.width = r.width(), n.height = r.height(), n.mongoliaMode = q.attr("data-m") || "color", n.mongoliaColor = RGBToHex(q.css("background-color")), n.mongoliaSrc = q.css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.autoSize = "no", n.popupConfig = $.extend({}, b.popupConfig), r.find("img").length > 0 && (n.oppoSrc = r.find("img").attr("src") || ""), r.is("div") && (n.contentMode = "customContent", n.customContent = r.html(), n.overflowMode = q.css("overflow"), "visible" != n.overflowMode && (n.overflowMode = "hidden"), q.hasClass("u-a") && (n.overflowMode = "visibleX"), q.hasClass("j-zdv") && (n.overflowMode = "visible"))),
						function (a) {
							c.createAuto("jkgb", l, o, p, a, function (a, b, c) {
								var d = require("scripts/appManage");
								d.callback("jkgbChild", b, c)
							})
						}(n)
				}
			}, {
				appID: "",
				oppoEffect: "june-box-fadein",
				oppoSpeed: "trans05s",
				childConfig: []
			}],
			jzzb: ['<div class="j-fnd t-app" data-dblType="jzzb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;遮罩层设置",
				tUrl: "zzc.php",
				tSubmit: function (a, c) {
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
					}, function (a) {
						var b = a[0],
							d = a[1];
						b && c.width(b), d && c.height(d)
					})) : (c.css({
						backgroundImage: "none"
					}), i.css({
						backgroundImage: "none"
					})) : (i.html(a.zzcCustomContent + '<div class="jjzz"></div>'), c.css({
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
					}, function (a) {
						var b = a[0],
							c = a[1];
						b && f.width(b), c && f.height(c)
					})) : f.css({
						backgroundImage: "none"
					}), f.css({
						backgroundPosition: a.childConfig[0].imgBgp || "50% 50%"
					}), submitColor(f, RGBToHex(a.childConfig[0].bgColor, "")), c.children(b.appOtherCls + ":eq(0)").html(a.customHtml + '<div class="jjzz"></div>'), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div><div class="t-app-other"></div><div class="t-app-child" data-dblType="jzzb" data-attachType="jzzbAttention"></div><div class="t-app-child j-app-qswz" data-dblType="jzzb" data-attachType="jzzbCountNumber">10</div><div class="t-app-child j-app-qswz" data-dblType="jzzb" data-attachType="jzzbCountText"></div>',
				codeExport: function () {
					return "${!jzzb}"
				},
				codeImport: function (a, c, d, e) {
					var j, k, l, m, n, o, p, q, r, s, t, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						i = b.getChildPos(d, d.find(".ks-switchable-nav .zzgzhtml"), !0);
					h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), h.displayMode = "fade" == d.attr("data-s") ? "fade" : "none", h.childConfig = [], h.childConfig[0] = {}, h.childConfig[1] = {}, h.childConfig[0].tipText = "", d.find(".ks-switchable-nav .zzgzhtml").attr("title") && "" != d.find(".ks-switchable-nav .zzgzhtml").attr("title") && (h.childConfig[0].tipText = d.find(".ks-switchable-nav .zzgzhtml").attr("title")), h.zzcMode = d.attr("data-m") || "imgContent", h.zzcSrc = d.find(".ks-switchable-content .zzmc").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.bgColor = RGBToHex(d.find(".ks-switchable-content .zzmc").css("background-color"), ""), h.imgBgp = d.find(".ks-switchable-content .zzmc").css("background-position"), h.zzcCustomContent = d.find(".ks-switchable-content .zzmc").html(), h.customHtml = d.find(".zzhtml").html(), h.childConfig[0].zzcAttentionSrc = d.find(".ks-switchable-nav .zzgzhtml").css("background-image").replace(/^url|[\(\"\)]*/g, ""), h.childConfig[0].oppoEffect = "none", h.childConfig[0].oppoSpeed = "", d.find(".ks-switchable-nav .zzgzhtml").length > 0 && (j = d.find(".ks-switchable-nav .zzgzhtml"), j.find("img").length > 0 && (h.childConfig[0].zzcAttentionSrc1 = j.find("img").attr("src"), k = j.find("img").attr("data-t") || ";", k = k.split(";"), h.childConfig[0].oppoEffect = k[0], h.childConfig[0].oppoSpeed = k[1])), h.childConfig[0].bgColor = RGBToHex(d.find(".ks-switchable-nav .zzgzhtml").css("background-color"), ""), h.childConfig[0].imgBgp = d.find(".ks-switchable-nav .zzgzhtml").css("background-position"), d.children(".zzccd").length > 0 ? (l = d.find(".zzccdsz"), m = d.find(".zzccdwz"), h.countSwitch = "yes", h.countSeconds = l.html() || "", h.countSecondsText = m.html() || "", h.childConfig[1].characterSize = l.css("font-size").replace(/px/g, ""), h.childConfig[1].characterFont = l.css("font-family").replace(/'/g, ""), h.childConfig[1].characterColor = RGBToHex(l.css("color")), h.childConfig[1].characterWeight = l.css("font-weight"), "400" == h.childConfig[1].characterWeight && (h.characterWeight = "normal"), h.childConfig[1].characterStyle = l.css("font-style") || "normal", h.childConfig[1].characterBgColor = RGBToHex(l.css("background-color"), ""), h.characterSize = m.css("font-size").replace(/px/g, ""), h.characterFont = m.css("font-family").replace(/'/g, ""), h.characterColor = RGBToHex(m.css("color")), h.characterWeight = m.css("font-weight"), "400" == h.characterWeight && (h.characterWeight = "normal"), h.characterStyle = m.css("font-style") || "normal", h.characterBgColor = RGBToHex(m.css("background-color"), "")) : (h.countSwitch = "no", h.countSeconds = "", h.countSecondsText = ""), d.find(".ks-switchable-nav .zzgzhtml a").hasClass("j_CollectBrand") ? (h.childConfig[0].linkMode = "gzlink", h.childConfig[0].attentionID = d.find(".ks-switchable-nav .zzgzhtml a").attr("data-brandid") || "") : "none" == d.find(".ks-switchable-nav .zzgzhtml a").attr("data-href") ? (h.childConfig[0].linkMode = "nonelink", h.childConfig[0].href = "", h.childConfig[0].hrefMode = "_blank") : (h.childConfig[0].linkMode = "ptlink", h.childConfig[0].href = d.find(".ks-switchable-nav .zzgzhtml a").attr("href"), h.childConfig[0].hrefMode = d.find(".ks-switchable-nav .zzgzhtml a").attr("target") || "_self"), n = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(n)), o = a.children(b.appOtherCls + ":eq(1)"), p = a.children(b.appChildCls + "[data-attachType='jzzbAttention']"), q = a.children(b.appChildCls + "[data-attachType='jzzbCountNumber']"), r = a.children(b.appChildCls + "[data-attachType='jzzbCountText']"), "imgContent" == h.zzcMode ? checkUrl(h.zzcSrc) ? (a.css({
						backgroundImage: "url(" + h.zzcSrc + ")"
					}), o.css({
						backgroundImage: "url(" + h.zzcSrc + ")"
					})) : (a.css({
						backgroundImage: "none"
					}), o.css({
						backgroundImage: "none"
					})) : (o.html(h.zzcCustomContent + '<div class="jjzz"></div>'), a.css({
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
					}).show()) : (q.hide(), r.hide()), checkUrl(h.childConfig[0].zzcAttentionSrc) ? p.css({
						backgroundImage: "url(" + h.childConfig[0].zzcAttentionSrc + ")"
					}) : p.css({
						backgroundImage: "none"
					}), p.css({
						backgroundPosition: h.childConfig[0].imgBgp
					}), submitColor(p, RGBToHex(h.childConfig[0].bgColor, "")), a.children(b.appOtherCls + ":eq(0)").html(h.customHtml + '<div class="jjzz"></div>'), p.css({
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
					linkMode: "ptlink",
					href: "",
					hrefMode: "_self",
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
			jmdb: ['<div class="j-fnd t-app" data-dblType="jmdb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;锚点设置",
				tUrl: "md.php",
				tSubmit: function (a, b) {
					b.attr("data-config", JSON.stringify(a))
				},
				tContent: "",
				codeExport: function () {
					return "${!jmdb}"
				},
				codeImport: function (a, b, c, d) {
					var h, e = JSON.parse(a.attr("data-config")),
						f = a.attr("data-dblType"),
						g = {};
					g.anchorName = c.attr("name"), g.appID = a.attr("appid"), h = $.extend(!0, e, g), a.attr("data-config", JSON.stringify(h)), a.css({
						width: 24,
						height: 24
					}), a.attr("appID", g.appID), d(f, g.appID)
				}
			}, {
				appID: "",
				anchorName: ""
			}],
			jib: ['<div class="j-fnd t-app" data-dblType="jib"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;宝贝列表设置",
				tUrl: "item.php",
				tSubmit: function (a, c, d, e) {
					var h, i, j, k, l, m, n, o, p, q, r, s, t, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, ib, jb, gb, hb, f = a.href.split(","),
						g = a.erWeiMaSrc.split(",");
					for (h = 0; h < f.length; h++)
						if (g[h] && checkUrl(g[h]) && "" != g[h] && (g[h] = g[h].replace(/\&w\=[^\&]*\&h\=[^\&]*$/g, "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize).replace(/\&w\=[^\&]*\&h\=[^\&]*\&/g, "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize + "&")), "yes" == a.erWeiMaSwitch && (!g[h] || "" == g[h])) {
							if (!f[h] || "" == f[h]) continue;
							if (i = f[h].match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), j = "", !i || i.length < 1) continue;
							if (j = i[0].replace(/(\?|\&)id\=/g, ""), "" == j) continue;
							g[h] = f[h].indexOf("//detail.tmall") >= 0 ? "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=" + j + "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize : "http://gqrcode.alicdn.com/img?type=ci&item_id=" + j + "&w=" + a.erWeiMaSize + "&h=" + a.erWeiMaSize
						}
					for (a.erWeiMaSrc = g.join(","), c.attr("data-config", JSON.stringify(a)), a = b.toClear(a), k = require("scripts/tAjax"), l = require("scripts/childBaoBei"), m = a.sWidth, n = a.sHeight, o = a.mHeight, p = a.itemCount < 1 ? 1 : a.itemCount, q = a.itemColumn, r = a.columnSpace, s = a.lineSpace, t = Math.ceil(p / q), c.children("[data-attachType='jibbg']"), c.children("[data-attachType='jibpanel']"), w = c.children("[data-attachType='jibtitle']"), x = c.children("[data-attachType='jibsubtitle']"), y = c.children("[data-attachType='jibprefix']"), z = c.children("[data-attachType='jibprice']"), A = c.children("[data-attachType='jibdiscountprefix']"), B = c.children("[data-attachType='jibdiscountprice']"), C = c.children("[data-attachType='jibsaleprefix']"), D = c.children("[data-attachType='jibsale']"), E = c.children("[data-attachType='jibbtn']"), F = c.children("[data-attachType='jibbtn1']"), G = c.children("[data-attachType='jibbtn2']"), H = c.children("[data-attachType='jibsubscript']"), I = c.children("[data-attachType='jibsubscript1']"), J = c.children("[data-attachType='jibsubscript2']"), K = c.children("[data-attachType='jibsubscript3']"), L = c.children("[data-attachType='jibsubscript4']"), M = c.children("[data-attachType='jiberweima']"), N = c.children("[data-attachType='jibexpandtext']"), O = c.children("[data-attachType='jibexpandtext1']"), P = c.children("[data-attachType='jibexpandtext2']"), Q = c.children("[data-attachType='jibexpandtext3']"), R = c.children("[data-attachType='jibexpandtext4']"), S = [], c.children("[attachID]").each(function () {
							S.push($(this).attr("attachID"))
						}), b.tParseInt(a.itemColumn) > b.tParseInt(a.itemCount) && (q = a.itemCount), a.panelPos && "right" == a.panelPos ? c.css({
							width: (m + o + r) * q - r,
							height: (n + s) * t - s
						}) : c.css({
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
						}, d && (T = $.extend(!0, {}, e)), U = !1, V = [], checkUrl(a.btnSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2QXHLbXXXXXbUXXXXXXXXXXXX-39767794.jpg" != a.btnSrc ? (U = !0, V.push(a.btnSrc)) : checkUrl(a.btnHoverSrc) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2EXHNbXXXXXbbXXXXXXXXXXXX-39767794.jpg" != a.btnHoverSrc ? (U = !0, V.push(a.btnHoverSrc)) : V.push(""), checkUrl(a.btn1Src) && "http://img04.taobaocdn.com/imgextra/i4/39767794/TB2xCrJbXXXXXXfXpXXXXXXXXXX-39767794.jpg" != a.btn1Src ? (U = !0, V.push(a.btn1Src)) : checkUrl(a.btn1HoverSrc) && "http://img04.taobaocdn.com/imgextra/i4/39767794/TB24h6MbXXXXXbbXXXXXXXXXXXX-39767794.jpg" != a.btn1HoverSrc ? (U = !0, V.push(a.btn1HoverSrc)) : V.push(""), checkUrl(a.btn2Src) && "http://img02.taobaocdn.com/imgextra/i2/39767794/TB2Q2_IbXXXXXbvXpXXXXXXXXXX-39767794.jpg" != a.btn2Src ? (U = !0, V.push(a.btn2Src)) : checkUrl(a.btn2HoverSrc) && "http://img01.taobaocdn.com/imgextra/i1/39767794/TB2Ps_KbXXXXXXmXpXXXXXXXXXX-39767794.jpg" != a.btn2HoverSrc ? (U = !0, V.push(a.btn2HoverSrc)) : V.push(""), W = a.subScriptSrc.split(","), X = !1, h = 0; h < W.length; h++)
						if (checkUrl(W[h]) && "" != W[h]) {
							V.push(W[h]), X = !0;
							break
						}
					for (X ? U = !0 : V.push(""), Y = a.subScript1Src.split(","), Z = !1, h = 0; h < Y.length; h++)
						if (checkUrl(Y[h]) && "" != Y[h]) {
							V.push(Y[h]), Z = !0;
							break
						}
					for (Z ? U = !0 : V.push(""), _ = a.subScript2Src.split(","), ab = !1, h = 0; h < _.length; h++)
						if (checkUrl(_[h]) && "" != _[h]) {
							V.push(_[h]), ab = !0;
							break
						}
					for (ab ? U = !0 : V.push(""), bb = a.subScript3Src.split(","), cb = !1, h = 0; h < bb.length; h++)
						if (checkUrl(bb[h]) && "" != bb[h]) {
							V.push(bb[h]), cb = !0;
							break
						}
					for (cb ? U = !0 : V.push(""), db = a.subScript4Src.split(","), eb = !1, h = 0; h < db.length; h++)
						if (checkUrl(db[h]) && "" != db[h]) {
							V.push(db[h]), eb = !0;
							break
						}
					if (eb ? U = !0 : V.push(""), fb = c.html(), c.html(""), U && !b.startParse) k.ajaxJsonForGis({
						imgarr: V
					}, function (d) {
						var e, h, i, f, g;
						for (d && d.length > 0 && (d[0] && (T.btnWidth = d[0][0], T.btnHeight = d[0][1]), d[1] && (T.btn1Width = d[1][0], T.btn1Height = d[1][1]), d[2] && (T.btn2Width = d[2][0], T.btn2Height = d[2][1]), d[3] && (T.subScriptWidth = d[3][0], T.subScriptHeight = d[3][1]), d[4] && (T.subScript1Width = d[4][0], T.subScript1Height = d[4][1]), d[5] && (T.subScript2Width = d[5][0], T.subScript2Height = d[5][1]), d[6] && (T.subScript3Width = d[6][0], T.subScript3Height = d[6][1]), d[7] && (T.subScript4Width = d[7][0], T.subScript4Height = d[7][1])), e = 0; p > e; e++) {
							f = e % q, g = b.tParseInt(e / q), a.panelPos && "right" == a.panelPos ? (h = (m + o + r) * f, i = (n + s) * g) : (h = (m + r) * f, i = (n + o + s) * g);
							try {
								l.createAuto("jib", c, h, i, e, T)
							} catch (j) {
								c.html(fb)
							}
						}
					}, !0);
					else
						for (h = 0; p > h; h++) {
							gb = h % q, hb = b.tParseInt(h / q), a.panelPos && "right" == a.panelPos ? (ib = (m + o + r) * gb, jb = (n + s) * hb) : (ib = (m + r) * gb, jb = (n + o + s) * hb);
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
					characterLetterSpacing: "",
					characterRadius: "",
					characterBorderWidth: "",
					characterBorderStyle: "solid",
					characterBorderColor: "#000000",
					characterAlign: "left",
					characterSize: "12",
					characterWeight: "normal",
					characterFont: "微软雅黑",
					characterColor: "#000000",
					characterBgColor: "",
					characterDash: "off"
				},
				tDynamic: '<div class="june-nonsp t-app-other t-app-jib" data-dblType="jib" data-attachType="jibbg"></div><div class="june-nonsp jibBorderShadow" style="position:absolute;"></div><div class="june-nonsp t-app-other t-app-jib" data-dblType="jib" data-attachType="jibpanel"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript1"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript2"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript3"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubscript4"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jiberweima"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsubtitle"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibtitle"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibprefix"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibprice"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibdiscountprefix"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibdiscountprice"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsaleprefix"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibsale"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext1"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext2"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext3"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibexpandtext4"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibbtn"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibbtn1"></div><div class="june-nonsp t-app-child" data-dblType="jib" data-attachType="jibbtn2"></div>',
				tDynamicConfig: {
					attachID: ""
				},
				tContent: "",
				codeExport: function (a) {
					var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, mb, nb, lb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, c = require("scripts/reckonAlign"),
						d = JSON.parse(a.attr("data-config"));
					for (d = $.extend(!0, {}, b.appConfig["jib"][2], d), lOpacityStr = ' style="', lOpacity = a.attr("data-lOpacity") || "100", "" != lOpacity && "100" != lOpacity && (lOpacityStr = ' data-lo="' + lOpacity + '" style="opacity: ' + lOpacity / 100 + ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=" + lOpacity + ");"), e = a.width(), f = a.height(), g = b.tParseInt(a.css("top")), h = b.tParseInt(a.css("left")), i = b.appConfig["jib"][1]["tAppArray"], j = d.panelPos || "bottom", k = d.href.split(","), l = d.pSrc.split(","), m = d.oppoSrc.split(","), n = d.titleInfo.split(","), o = d.subTitleInfo.split(","), p = d.priceInfo.split(","), q = d._priceInfo.split(","), r = d.saleInfo.split(","), s = d.subScriptSrc.split(","), t = d.subScript1Src.split(","), u = d.subScript2Src.split(","), v = d.subScript3Src.split(","), w = d.subScript4Src.split(","), x = d.erWeiMaSrc.split(","), y = d.expandText.split(","), z = d.expandTextSet.split("|;|"), A = d.expandText1.split(","), B = d.expandText1Set.split("|;|"), C = d.expandText2.split(","), D = d.expandText2Set.split("|;|"), E = d.expandText3.split(","), F = d.expandText3Set.split("|;|"), G = d.expandText4.split(","), H = d.expandText4Set.split("|;|"), I = d.titleAuto.split(","), J = d.priceAuto.split(","), K = d._priceAuto.split(","), L = d.saleAuto.split(","), M = d.panelArea ? d.panelArea : "no", N = d.pSrcPos.split(","), O = d.oSrcPos.split(","), P = "_" + d.pSrcSize + "x" + d.pSrcSize + ".jpg", Q = "_" + d.pSrcSize1 + "x" + d.pSrcSize1 + ".jpg", "" == d.pSrcSize && (P = ""), "" == d.pSrcSize1 && (Q = ""), d = b.toClear(d), d.borderRadius = d.borderRadius1, R = a.children("[data-attachType='jibprefix']:eq(0)"), S = a.children("[data-attachType='jibprice']:eq(0)"), T = a.children("[data-attachType='jibdiscountprefix']:eq(0)"), U = a.children("[data-attachType='jibdiscountprice']:eq(0)"), V = a.children("[data-attachType='jibsaleprefix']:eq(0)"), W = a.children("[data-attachType='jibsale']:eq(0)"), X = a.children("[data-attachType='jibexpandtext']:not(:hidden):eq(0)"), Y = a.children("[data-attachType='jibexpandtext1']:not(:hidden):eq(0)"), Z = a.children("[data-attachType='jibexpandtext2']:not(:hidden):eq(0)"), _ = a.children("[data-attachType='jibexpandtext3']:not(:hidden):eq(0)"), ab = a.children("[data-attachType='jibexpandtext4']:not(:hidden):eq(0)"), bb = "", cb = /((\&|\?){1}id\=\s?){1}(\d+)(?=(\&|$))/g, db = /(\?|\&)id\=/g, "pptitem" == d.itemMode && (cb = /((\&|\?){1}item_id\=\s?){1}(\d+)(?=(\&|$))/g, db = /(\?|\&)item_id\=/g), eb = !1, fb = !1, gb = !1, ("auto" == d.priceAlign || "left" == d.priceAlign || "right" == d.priceAlign) && (eb = !0, d.priceAlign = c.get(d.prefixSwitch, d.sWidth, b.tParseInt(S.css("left")), b.tParseInt(R.css("left")))), ("auto" == d._priceAlign || "left" == d._priceAlign || "right" == d._priceAlign) && (fb = !0, d._priceAlign = c.get(d._prefixSwitch, d.sWidth, b.tParseInt(U.css("left")), b.tParseInt(T.css("left")))), ("auto" == d.saleAlign || "left" == d.saleAlign || "right" == d.saleAlign) && (gb = !0, d.saleAlign = c.get(d.salePrefixSwitch, d.sWidth, b.tParseInt(W.css("left")), b.tParseInt(V.css("left")))), hb = ' target="' + d.hrefMode + '"', d.oppoEffect && "none" != d.oppoEffect && "" != d.oppoEffect || (d.oppoSpeed = ""), ib = 0; ib < d.itemCount; ib++) {
						lb = "", ob = a.children("[data-attachType='jibbg']:eq(" + ib + ")"), "http" != k[ib].substr(0, 4) && (k[ib] = "http://" + k[ib], k[ib] = k[ib].replace(/\/\/\/\//g, "//")), k[ib] = $.trim(k[ib]);
						a: for (pb = 0; pb < i.length; pb++)
							if ("AforPanel" != i[pb])
								if (qb = a.children("[data-attachType='" + i[pb] + "']:eq(" + ib + ")"), rb = b.getChildPos(a, ob, !0), sb = b.getChildPos(ob, qb, !1), tb = "", ub = "", vb = "", wb = "", xb = "", yb = "", zb = "white-space: nowrap;", Ab = "", Bb = k[ib], Cb = "", Db = "", Eb = "", Fb = "overflow:hidden;", Ab = "top:" + sb.top + "px;left:" + sb.left + "px;", k[ib].indexOf("item_id") >= 0 || k[ib].indexOf("itemId") >= 0 ? (cb = /((\&|\?){1}(item_id|itemId)\=\s?){1}(\d+)(?=(\&|$))/g, db = /(\?|\&)(item_id|itemId)\=/g) : (cb = /((\&|\?){1}id\=\s?){1}(\d+)(?=(\&|$))/g, db = /(\?|\&)id\=/g), Bb && "" != Bb && (Bb = Bb.replace(/%20/g, " "), Gb = Bb.match(cb), Gb && Gb.length > 0 && (Cb = $.trim(Gb[0].replace(db, "")))), Hb = l[ib] + P, Ib = m[ib] + Q, "jibbg" == i[pb] || "jibtitle" == i[pb] || "jibsubtitle" == i[pb] || "jibbtn" == i[pb] || "jibbtn1" == i[pb] || "jibbtn2" == i[pb]) {
									if ("hborder1" == d.borderControl1 && "" != d.borderRadius1 && (Jb = b.tParseInt(d.borderRadius1), xb = "border-radius:" + Jb + "px " + Jb + "px 0 0", d.mHeight && "" != d.mHeight && "0" != d.mHeight || (xb = "border-radius:" + Jb + "px " + Jb + "px " + Jb + "px")), hb = ' target="' + d.hrefMode + '"', "jibbg" == i[pb] && (checkUrl(l[ib]) && (vb = "background:url(" + Hb + ") center center no-repeat;"), d.itemBgColor = RGBToHex(d.itemBgColor, ""), "" != d.itemBgColor && (wb = "background-color:" + d.itemBgColor + ";"), checkUrl(m[ib]) && (ub = " imghover", "yes" == d.oppoSwitch && (Mb = "", Nb = "", "june-box-fadein" == d.oppoEffect ? (Mb = "display:block;", Nb = "june-box-fadein", ub += " jspb") : ub += " " + d.oppoEffect, Ob = "width:" + d.pSrcSize1 + "px;height:" + d.pSrcSize1 + "px;margin-left:" + (sb.width - d.pSrcSize1) / 2 + "px;margin-top:" + (sb.height - d.pSrcSize1) / 2 + "px;", (sb.width - d.pSrcSize1 < 0 || sb.height - d.pSrcSize1 < 0) && (Ob = "width:" + d.pSrcSize1 + "px;height:" + d.pSrcSize1 + "px;left:" + (sb.width - d.pSrcSize1) / 2 + "px;top:" + (sb.height - d.pSrcSize1) / 2 + "px;"), "" == d.pSrcSize1 && (Ob = "width:100%;height:100%"), tb = '<img class="abs ' + d.oppoSpeed + " " + Nb + '" src="' + Ib + '" style="' + Mb + Ob + '" />')), ("1" != N[ib] || "2" != O[ib]) && (Db = ' data-p="' + N[ib] + ";" + O[ib] + '"'), Db += ' data-e="' + (d.oppoEffect || "none") + ";" + d.oppoSpeed + '"', jb = sb.width, kb = sb.height), "jibbtn" == i[pb] && "yes" == d.btnSwitch) xb = "", checkUrl(d.btnSrc) && (vb = "background:url(" + d.btnSrc + ") center center no-repeat;"), checkUrl(d.btnHoverSrc) && (ub = " imghover", tb = '<img src="' + d.btnHoverSrc + '" style="width:100%;height:100%;" />'), "bhm_item" == d.btnHoverMode && (Pb = "", Qb = "", Rb = "", Sb = "", Tb = "", "" != d.btnHoverSpeed && (Pb = " " + d.btnHoverSpeed), "" == d.btnStyle && (Pb = ""), "" != d.btnHoverStyle && (Qb += " " + d.btnHoverStyle), "" != d.btnHoverStyleX && (Qb += " " + d.btnHoverStyleX), "" != d.btnHoverStyleY && (Qb += " " + d.btnHoverStyleY), checkUrl(d.btnHoverSrc) && (Rb = "background:url(" + d.btnHoverSrc + ") center center no-repeat;"), "" == Rb || d.btnHoverSrc == d.btnSrc ? (Sb = '<div class="abs ' + Pb + Qb + '" style="top:0;left:0;width:100%;height:100%;' + vb + '"></div>', Tb = "") : (Sb = '<div class="abs june-box-fadeout' + Pb + '" style="top:0;left:0;width:100%;height:100%;' + vb + '"></div>', Tb = '<div class="abs june-box-fadein' + Pb + Qb + '" style="top:0;left:0;width:100%;height:100%;' + Rb + '"></div>'), tb = Sb + Tb, ub = "", vb = "", Fb = "");
									else if ("jibbtn" == i[pb] && "yes" != d.btnSwitch) continue a;
									if ("jibbtn1" == i[pb] && "yes" == d.btn1Switch) xb = "", hb = ' target="_blank"', Bb && "" != Bb && (Ub = Bb.match(cb), Vb = "", Ub && Ub.length > 0 && (Vb = Ub[0].replace(db, "")), Bb = "http://favorite.taobao.com/popup/add_collection.htm?id=" + Vb + "&itemtype=1&scjjc=1"), checkUrl(d.btn1Src) && (vb = "background:url(" + d.btn1Src + ") center center no-repeat;"), checkUrl(d.btn1HoverSrc) && (ub = " imghover", tb = '<img src="' + d.btn1HoverSrc + '" style="width:100%;height:100%;" />'), "bhm_item" == d.btn1HoverMode && (Pb = "", Qb = "", Rb = "", Sb = "", Tb = "", "" != d.btn1HoverSpeed && (Pb = " " + d.btn1HoverSpeed), "" == d.btn1Style && (Pb = ""), "" != d.btn1HoverStyle && (Qb += " " + d.btn1HoverStyle), "" != d.btn1HoverStyleX && (Qb += " " + d.btn1HoverStyleX), "" != d.btn1HoverStyleY && (Qb += " " + d.btn1HoverStyleY), checkUrl(d.btn1HoverSrc) && (Rb = "background:url(" + d.btn1HoverSrc + ") center center no-repeat;"), "" == Rb || d.btn1HoverSrc == d.btn1Src ? (Sb = '<div class="abs ' + Pb + Qb + '" style="top:0;left:0;width:100%;height:100%;' + vb + '"></div>', Tb = "") : (Sb = '<div class="abs june-box-fadeout' + Pb + '" style="top:0;left:0;width:100%;height:100%;' + vb + '"></div>', Tb = '<div class="abs june-box-fadein' + Pb + Qb + '" style="top:0;left:0;width:100%;height:100%;' + Rb + '"></div>'), tb = Sb + Tb, ub = "", vb = "", Fb = "");
									else if ("jibbtn1" == i[pb] && "yes" != d.btn1Switch) continue a;
									if ("jibbtn2" == i[pb] && "yes" == d.btn2Switch) xb = "", ub = " J_CartPluginTrigger", hb = "", checkUrl(d.btn2Src) && (vb = "background:url(" + d.btn2Src + ") center center no-repeat;"), checkUrl(d.btn2HoverSrc) && (ub += " imghover", tb = '<img src="' + d.btn2HoverSrc + '" style="width:100%;height:100%;" />'), "pptitem" == d.itemMode && Bb && "" != Bb && (Ub = Bb.match(cb), Vb = "", Ub && Ub.length > 0 && (Vb = Ub[0].replace(db, "")), Bb = "https://detail.tmall.com/item.htm?id=" + Vb), "bhm_item" == d.btn2HoverMode && (Pb = "", Qb = "", Rb = "", Sb = "", Tb = "", "" != d.btn2HoverSpeed && (Pb = " " + d.btn2HoverSpeed), "" == d.btn2Style && (Pb = ""), "" != d.btn2HoverStyle && (Qb += " " + d.btn2HoverStyle), "" != d.btn2HoverStyleX && (Qb += " " + d.btn2HoverStyleX), "" != d.btn2HoverStyleY && (Qb += " " + d.btn2HoverStyleY), checkUrl(d.btn2HoverSrc) && (Rb = "background:url(" + d.btn2HoverSrc + ") center center no-repeat;"), "" == Rb || d.btn2HoverSrc == d.btn2Src ? (Sb = '<div class="abs ' + Pb + Qb + '" style="top:0;left:0;width:100%;height:100%;' + vb + '"></div>', Tb = "") : (Sb = '<div class="abs june-box-fadeout' + Pb + '" style="top:0;left:0;width:100%;height:100%;' + vb + '"></div>', Tb = '<div class="abs june-box-fadein' + Pb + Qb + '" style="top:0;left:0;width:100%;height:100%;' + Rb + '"></div>'), tb = Sb + Tb, ub = " J_CartPluginTrigger", vb = "", Fb = "");
									else if ("jibbtn2" == i[pb] && "yes" != d.btn2Switch) continue a;
									if ("jibtitle" == i[pb] && "yes" == d.titleSwitch) "" != Cb && "1" == I[ib] && (Db = ' data-u="' + n[ib] + '"', n[ib] = "%7b$" + Cb + ".title%7d"), xb = "white-space:normal;text-align:" + d.titleAlign + ";", Wb = "center center", d.titleSpace && "" != d.titleSpace && ("left" == d.titleAlign ? (xb += "padding-left: " + b.tParseInt(d.titleSpace) + "px;", sb.width = sb.width - b.tParseInt(d.titleSpace), Wb = "top left") : "right" == d.titleAlign && (xb += "padding-right: " + b.tParseInt(d.titleSpace) + "px;", sb.width = sb.width - b.tParseInt(d.titleSpace), Wb = "top right")), checkUrl(d.titleBgImage) && (vb = "background:url(" + d.titleBgImage + ") " + Wb + " no-repeat;"), d.titleBgColor = RGBToHex(d.titleBgColor, ""), "" != d.titleBgColor && (wb = "background-color:" + d.titleBgColor + ";"), tb = n[ib] || "", d.titleColor = RGBToHex(d.titleColor, ""), "" != d.titleColor && (xb += "color:" + d.titleColor + ";"), "" != d.titleFont && (xb += "font-family:" + d.titleFont + ";"), "" != d.titleWeight && (xb += "font-weight:" + d.titleWeight + ";"), "" != d.titleSize && (xb += "font-size:" + b.tParseInt(d.titleSize) + "px;"), "" != d.titleSpacing && (xb += "letter-spacing:" + b.tParseInt(d.titleSpacing) + "px;"), "" != d.titleLineHeight && (xb += "line-height:" + b.tParseInt(d.titleLineHeight) + "px;");
									else if ("jibtitle" == i[pb] && "yes" != d.titleSwitch) continue a;
									if ("jibsubtitle" == i[pb] && "yes" == d.subTitleSwitch) xb = "text-align:" + d.subTitleAlign + ";", Wb = "center center", d.subTitleSpace && "" != d.subTitleSpace && ("left" == d.subTitleAlign ? (xb += "padding-left: " + b.tParseInt(d.subTitleSpace) + "px;", sb.width = sb.width - b.tParseInt(d.subTitleSpace), Wb = "top left") : "right" == d.subTitleAlign && (xb += "padding-right: " + b.tParseInt(d.subTitleSpace) + "px;", sb.width = sb.width - b.tParseInt(d.subTitleSpace), Wb = "top right")), checkUrl(d.subTitleBgImage) && (vb = "background:url(" + d.subTitleBgImage + ") " + Wb + " no-repeat;"), d.subTitleBgColor = RGBToHex(d.subTitleBgColor, ""), "" != d.subTitleBgColor && (wb = "background-color:" + d.subTitleBgColor + ";"), o[ib] && "undefined" != o[ib] || (o[ib] = ""), tb = o[ib] || "", d.subTitleColor = RGBToHex(d.subTitleColor, ""), "" != d.subTitleColor && (xb += "color:" + d.subTitleColor + ";"), "" != d.subTitleFont && (xb += "font-family:" + d.subTitleFont + ";"), "" != d.subTitleWeight && (xb += "font-weight:" + d.subTitleWeight + ";"), "" != d.subTitleSize && (xb += "font-size:" + b.tParseInt(d.subTitleSize) + "px;"), "" != d.subTitleSpacing && (xb += "letter-spacing:" + b.tParseInt(d.subTitleSpacing) + "px;"), "" != d.subTitleLineHeight && (xb += "line-height:" + b.tParseInt(d.subTitleLineHeight) + "px;");
									else if ("jibsubtitle" == i[pb] && "yes" != d.subTitleSwitch) continue a;
									lb += '<a class="abs ' + i[pb] + ub + '"' + Db + ' href="' + Bb + '"' + hb + ' style="display:block;' + Fb + "width:" + sb.width + "px;height:" + sb.height + "px;top:" + sb.top + "px;left:" + sb.left + "px;" + vb + wb + xb + '">' + tb + "</a>"
								} else {
									if ("jibpanel" == i[pb] && ("hborder1" == d.borderControl1 && "" != d.borderRadius1 && (Jb = b.tParseInt(d.borderRadius1), xb = "border-radius:0 0 " + Jb + "px " + Jb + "px"), checkUrl(d.bgImage) && (vb = "background:url(" + d.bgImage + ") center center no-repeat;"), d.bgColor = RGBToHex(d.bgColor, ""), "" != d.bgColor && (wb = "background-color:" + d.bgColor + ";"), zb = "width:" + sb.width + "px;height:" + sb.height + "px;", "bottom" == j ? kb += sb.height : "right" == j && (jb += sb.width), mb = zb, nb = Ab), "jibsubscript" == i[pb] && "yes" == d.subScriptSwitch) vb = checkUrl(s[ib]) ? "background:url(" + s[ib] + ") center center no-repeat;" : "display:none;", "" == s[ib] && (vb = "display:none;"), zb = "width:" + sb.width + "px;height:" + sb.height + "px;", yb = '<a href="' + Bb + '"' + hb + ' style="display:block;width:100%;height:100%;"></a>';
									else if ("jibsubscript" == i[pb] && "yes" != d.subScriptSwitch) continue a;
									if ("jibsubscript1" == i[pb] && "yes" == d.subScript1Switch) vb = checkUrl(t[ib]) ? "background:url(" + t[ib] + ") center center no-repeat;" : "display:none;", "" == t[ib] && (vb = "display:none;"), zb = "width:" + sb.width + "px;height:" + sb.height + "px;", yb = '<a href="' + Bb + '"' + hb + ' style="display:block;width:100%;height:100%;"></a>';
									else if ("jibsubscript1" == i[pb] && "yes" != d.subScript1Switch) continue a;
									if ("jibsubscript2" == i[pb] && "yes" == d.subScript2Switch) vb = checkUrl(u[ib]) ? "background:url(" + u[ib] + ") center center no-repeat;" : "display:none;", "" == u[ib] && (vb = "display:none;"), zb = "width:" + sb.width + "px;height:" + sb.height + "px;", yb = '<a href="' + Bb + '"' + hb + ' style="display:block;width:100%;height:100%;"></a>';
									else if ("jibsubscript2" == i[pb] && "yes" != d.subScript2Switch) continue a;
									if ("jibsubscript3" == i[pb] && "yes" == d.subScript3Switch) vb = checkUrl(v[ib]) ? "background:url(" + v[ib] + ") center center no-repeat;" : "display:none;", "" == v[ib] && (vb = "display:none;"), zb = "width:" + sb.width + "px;height:" + sb.height + "px;", yb = '<a href="' + Bb + '"' + hb + ' style="display:block;width:100%;height:100%;"></a>';
									else if ("jibsubscript3" == i[pb] && "yes" != d.subScript3Switch) continue a;
									if ("jibsubscript4" == i[pb] && "yes" == d.subScript4Switch) vb = checkUrl(w[ib]) ? "background:url(" + w[ib] + ") center center no-repeat;" : "display:none;", "" == w[ib] && (vb = "display:none;"), zb = "width:" + sb.width + "px;height:" + sb.height + "px;", yb = '<a href="' + Bb + '"' + hb + ' style="display:block;width:100%;height:100%;"></a>';
									else if ("jibsubscript4" == i[pb] && "yes" != d.subScript4Switch) continue a;
									if ("jiberweima" == i[pb] && "yes" == d.erWeiMaSwitch) vb = checkUrl(x[ib]) ? "background:url(" + x[ib] + ") center center no-repeat;" : "display:none;", "" == x[ib] && (vb = "display:none;"), zb = "width:" + d.erWeiMaSize + "px;height:" + d.erWeiMaSize + "px;";
									else if ("jiberweima" == i[pb] && "yes" != d.erWeiMaSwitch) continue a;
									if ("jibprefix" == i[pb] && "yes" == d.prefixSwitch) yb = d.prefixInfo, d.prefixColor = RGBToHex(d.prefixColor, ""), "" != d.prefixColor && (xb += "color:" + d.prefixColor + ";"), "" != d.prefixFont && (xb += "font-family:" + d.prefixFont + ";"), "" != d.prefixWeight && (xb += "font-weight:" + d.prefixWeight + ";"), "" != d.prefixSize && (xb += "font-size:" + b.tParseInt(d.prefixSize) + "px;"), "" != d.prefixSpacing && (xb += "letter-spacing:" + b.tParseInt(d.prefixSpacing) + "px;"), "" != d.prefixDecoration && (xb += "text-decoration:" + d.prefixDecoration + ";");
									else if ("jibprefix" == i[pb] && "yes" != d.prefixSwitch) continue a;
									if ("jibprice" == i[pb] && "yes" == d.priceSwitch) Xb = "", p[ib] && "" != p[ib] && (Xb = tReplace(p[ib], /(\d*(\.)?(\d)*)*/g, function (a) {
										return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(d.priceFixed)) : a
									}), yb = Xb), ("right" == d.priceAlign || "qright" == d.priceAlign) && (Yb = ob.width(), Zb = S.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == d.priceAlign || "qright" == d.priceAlign) && (Eb += ' data-l="yes"'), "qcenter" == d.priceAlign && (Zb = qb.width(), $b = qb.children("span").width(), Eb = ' data-n="' + sb.left + '"', Ab = "top:" + sb.top + "px;left:" + (sb.left + (Zb - $b) / 2) + "px;", Eb += ' data-l="center"'), "" != Cb && "1" == J[ib] && (Db = ' data-u="' + yb + '"', yb = "%7b$" + Cb + ".price." + b.tParseInt(d.priceFixed) + "f%7d" + p[ib].replace(/\d*\.*/g, "")), d.priceColor = RGBToHex(d.priceColor, ""), "" != d.priceColor && (xb += "color:" + d.priceColor + ";"), "" != d.priceFont && (xb += "font-family:" + d.priceFont + ";"), "" != d.priceWeight && (xb += "font-weight:" + d.priceWeight + ";"), "" != d.priceSize && (xb += "font-size:" + b.tParseInt(d.priceSize) + "px;"), "" != d.priceSpacing && (xb += "letter-spacing:" + b.tParseInt(d.priceSpacing) + "px;"), "" != d.priceDecoration && (xb += "text-decoration:" + d.priceDecoration + ";");
									else if ("jibprice" == i[pb] && "yes" != d.priceSwitch) continue a;
									if ("jibdiscountprefix" == i[pb] && "yes" == d._prefixSwitch) yb = d._prefixInfo, d._prefixColor = RGBToHex(d._prefixColor, ""), "" != d._prefixColor && (xb += "color:" + d._prefixColor + ";"), "" != d._prefixFont && (xb += "font-family:" + d._prefixFont + ";"), "" != d._prefixWeight && (xb += "font-weight:" + d._prefixWeight + ";"), "" != d._prefixSize && (xb += "font-size:" + b.tParseInt(d._prefixSize) + "px;"), "" != d._prefixSpacing && (xb += "letter-spacing:" + b.tParseInt(d._prefixSpacing) + "px;");
									else if ("jibdiscountprefix" == i[pb] && "yes" != d._prefixSwitch) continue a;
									if ("jibdiscountprice" == i[pb] && "yes" == d._priceSwitch) Xb = "", q[ib] && "" != q[ib] && (Xb = tReplace(q[ib], /(\d*(\.)?(\d)*)*/g, function (a) {
										return a && "" != a ? b.tParseFloat(a).toFixed(b.tParseInt(d._priceFixed)) : a
									}), yb = Xb), ("right" == d._priceAlign || "qright" == d._priceAlign) && (Yb = ob.width(), Zb = U.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == d._priceAlign || "qright" == d._priceAlign) && (Eb += ' data-l="yes"'), "qcenter" == d._priceAlign && (Zb = qb.width(), $b = qb.children("span").width(), Eb = ' data-n="' + sb.left + '"', Ab = "top:" + sb.top + "px;left:" + (sb.left + (Zb - $b) / 2) + "px;", Eb += ' data-l="center"'), "" != Cb && "1" == K[ib] && (Db = ' data-u="' + yb + '"', yb = "%7b$" + Cb + ".discountPrice." + b.tParseInt(d._priceFixed) + "f%7d" + q[ib].replace(/\d*\.*/g, "")), d._priceColor = RGBToHex(d._priceColor, ""), "" != d._priceColor && (xb += "color:" + d._priceColor + ";"), "" != d._priceFont && (xb += "font-family:" + d._priceFont + ";"), "" != d._priceWeight && (xb += "font-weight:" + d._priceWeight + ";"), "" != d._priceSize && (xb += "font-size:" + b.tParseInt(d._priceSize) + "px;"), "" != d._priceSpacing && (xb += "letter-spacing:" + b.tParseInt(d._priceSpacing) + "px;");
									else if ("jibdiscountprice" == i[pb] && "yes" != d._priceSwitch) continue a;
									if ("jibsaleprefix" == i[pb] && "yes" == d.salePrefixSwitch) yb = d.salePrefixInfo, d.salePrefixColor = RGBToHex(d.salePrefixColor, ""), "" != d.salePrefixColor && (xb += "color:" + d.salePrefixColor + ";"), "" != d.salePrefixFont && (xb += "font-family:" + d.salePrefixFont + ";"), "" != d.salePrefixWeight && (xb += "font-weight:" + d.salePrefixWeight + ";"), "" != d.salePrefixSize && (xb += "font-size:" + b.tParseInt(d.salePrefixSize) + "px;"), "" != d.salePrefixSpacing && (xb += "letter-spacing:" + b.tParseInt(d.salePrefixSpacing) + "px;");
									else if ("jibsaleprefix" == i[pb] && "yes" != d.salePrefixSwitch) continue a;
									if ("jibsale" == i[pb] && "yes" == d.saleSwitch)("right" == d.saleAlign || "qright" == d.saleAlign) && (Yb = ob.width(), Zb = W.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == d.saleAlign || "qright" == d.saleAlign) && (Eb += ' data-l="yes"'), "qcenter" == d.saleAlign && (Zb = qb.width(), $b = qb.children("span").width(), Eb = ' data-n="' + sb.left + '"', Ab = "top:" + sb.top + "px;left:" + (sb.left + (Zb - $b) / 2) + "px;", Eb += ' data-l="center"'), "" != Cb && "1" == L[ib] && (Db = ' data-u="' + r[ib] + '"', r[ib] = "%7b$" + Cb + ".soldCount%7d"), yb = r[ib], d.saleColor = RGBToHex(d.saleColor, ""), "" != d.saleColor && (xb += "color:" + d.saleColor + ";"), "" != d.saleFont && (xb += "font-family:" + d.saleFont + ";"), "" != d.saleWeight && (xb += "font-weight:" + d.saleWeight + ";"), "" != d.saleSize && (xb += "font-size:" + b.tParseInt(d.saleSize) + "px;"), "" != d.saleSpacing && (xb += "letter-spacing:" + b.tParseInt(d.saleSpacing) + "px;");
									else if ("jibsale" == i[pb] && "yes" != d.saleSwitch) continue a;
									if ("jibexpandtext" == i[pb] && "yes" == d.expandTextSwitch) _b = JSON.parse(z[ib] || "{}"), yb = y[ib] || "", "" == yb ? xb += "display:none;" : (("auto" == _b.characterAlign || "left" == _b.characterAlign || "right" == _b.characterAlign) && (_b.characterAlign = c.get("no", d.sWidth, b.tParseInt(X.css("left")))), ("right" == _b.characterAlign || "qright" == _b.characterAlign) && (Yb = ob.width(), Zb = X.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == _b.characterAlign || "qright" == _b.characterAlign) && (Eb += ' data-l="yes"'), Wb = "center center", ac = 0, bc = 0, _b.characterSpace && "" != _b.characterSpace && (bc = b.tParseInt(_b.characterSpace)), _b.characterSpace1 && "" != _b.characterSpace1 && (ac = b.tParseInt(_b.characterSpace1)), (0 != ac || 0 != bc) && (xb += "padding: " + ac + "px " + bc + "px;"), _b.characterBgColor && (_b.characterBgColor = RGBToHex(_b.characterBgColor, ""), "" != _b.characterBgColor && (wb = "background-color:" + _b.characterBgColor + ";")), _b.characterColor && (_b.characterColor = RGBToHex(_b.characterColor, ""), "" != _b.characterColor && (xb += "color:" + _b.characterColor + ";")), _b.characterFont && "" != _b.characterFont && (xb += "font-family:" + _b.characterFont + ";"), _b.characterWeight && "" != _b.characterWeight && (xb += "font-weight:" + _b.characterWeight + ";"), _b.characterSize && "" != _b.characterSize && (xb += "font-size:" + b.tParseInt(_b.characterSize) + "px;"), _b.characterLetterSpacing && "" != _b.characterLetterSpacing && (xb += "letter-spacing:" + b.tParseInt(_b.characterLetterSpacing) + "px;"), _b.characterRadius && "" != _b.characterRadius && (xb += "border-radius:" + b.tParseInt(_b.characterRadius) + "px;"), _b.characterBorderWidth && "" != _b.characterBorderWidth && "0" != _b.characterBorderWidth && (xb += "border:" + _b.characterBorderWidth + "px " + _b.characterBorderStyle + " " + RGBToHex(_b.characterBorderColor)));
									else if ("jibexpandtext" == i[pb] && "yes" != d.expandTextSwitch) continue a;
									if ("jibexpandtext1" == i[pb] && "yes" == d.expandText1Switch) _b = JSON.parse(B[ib] || "{}"), yb = A[ib] || "", "" == yb ? xb += "display:none;" : (("auto" == _b.characterAlign || "left" == _b.characterAlign || "right" == _b.characterAlign) && (_b.characterAlign = c.get("no", d.sWidth, b.tParseInt(Y.css("left")))), ("right" == _b.characterAlign || "qright" == _b.characterAlign) && (Yb = ob.width(), Zb = Y.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == _b.characterAlign || "qright" == _b.characterAlign) && (Eb += ' data-l="yes"'), Wb = "center center", ac = 0, bc = 0, _b.characterSpace && "" != _b.characterSpace && (bc = b.tParseInt(_b.characterSpace)), _b.characterSpace1 && "" != _b.characterSpace1 && (ac = b.tParseInt(_b.characterSpace1)), (0 != ac || 0 != bc) && (xb += "padding: " + ac + "px " + bc + "px;"), _b.characterBgColor && (_b.characterBgColor = RGBToHex(_b.characterBgColor, ""), "" != _b.characterBgColor && (wb = "background-color:" + _b.characterBgColor + ";")), _b.characterColor && (_b.characterColor = RGBToHex(_b.characterColor, ""), "" != _b.characterColor && (xb += "color:" + _b.characterColor + ";")), _b.characterFont && "" != _b.characterFont && (xb += "font-family:" + _b.characterFont + ";"), _b.characterWeight && "" != _b.characterWeight && (xb += "font-weight:" + _b.characterWeight + ";"), _b.characterSize && "" != _b.characterSize && (xb += "font-size:" + b.tParseInt(_b.characterSize) + "px;"), _b.characterLetterSpacing && "" != _b.characterLetterSpacing && (xb += "letter-spacing:" + b.tParseInt(_b.characterLetterSpacing) + "px;"), _b.characterRadius && "" != _b.characterRadius && (xb += "border-radius:" + b.tParseInt(_b.characterRadius) + "px;"), _b.characterBorderWidth && "" != _b.characterBorderWidth && "0" != _b.characterBorderWidth && (xb += "border:" + _b.characterBorderWidth + "px " + _b.characterBorderStyle + " " + RGBToHex(_b.characterBorderColor)));
									else if ("jibexpandtext1" == i[pb] && "yes" != d.expandText1Switch) continue a;
									if ("jibexpandtext2" == i[pb] && "yes" == d.expandText2Switch) _b = JSON.parse(D[ib] || "{}"), yb = C[ib] || "", "" == yb ? xb += "display:none;" : (("auto" == _b.characterAlign || "left" == _b.characterAlign || "right" == _b.characterAlign) && (_b.characterAlign = c.get("no", d.sWidth, b.tParseInt(Z.css("left")))), ("right" == _b.characterAlign || "qright" == _b.characterAlign) && (Yb = ob.width(), Zb = Z.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == _b.characterAlign || "qright" == _b.characterAlign) && (Eb += ' data-l="yes"'), Wb = "center center", ac = 0, bc = 0, _b.characterSpace && "" != _b.characterSpace && (bc = b.tParseInt(_b.characterSpace)), _b.characterSpace1 && "" != _b.characterSpace1 && (ac = b.tParseInt(_b.characterSpace1)), (0 != ac || 0 != bc) && (xb += "padding: " + ac + "px " + bc + "px;"), _b.characterBgColor && (_b.characterBgColor = RGBToHex(_b.characterBgColor, ""), "" != _b.characterBgColor && (wb = "background-color:" + _b.characterBgColor + ";")), _b.characterColor && (_b.characterColor = RGBToHex(_b.characterColor, ""), "" != _b.characterColor && (xb += "color:" + _b.characterColor + ";")), _b.characterFont && "" != _b.characterFont && (xb += "font-family:" + _b.characterFont + ";"), _b.characterWeight && "" != _b.characterWeight && (xb += "font-weight:" + _b.characterWeight + ";"), _b.characterSize && "" != _b.characterSize && (xb += "font-size:" + b.tParseInt(_b.characterSize) + "px;"), _b.characterLetterSpacing && "" != _b.characterLetterSpacing && (xb += "letter-spacing:" + b.tParseInt(_b.characterLetterSpacing) + "px;"), _b.characterRadius && "" != _b.characterRadius && (xb += "border-radius:" + b.tParseInt(_b.characterRadius) + "px;"), _b.characterBorderWidth && "" != _b.characterBorderWidth && "0" != _b.characterBorderWidth && (xb += "border:" + _b.characterBorderWidth + "px " + _b.characterBorderStyle + " " + RGBToHex(_b.characterBorderColor)));
									else if ("jibexpandtext2" == i[pb] && "yes" != d.expandText2Switch) continue a;
									if ("jibexpandtext3" == i[pb] && "yes" == d.expandText3Switch) _b = JSON.parse(F[ib] || "{}"), yb = E[ib] || "", "" == yb ? xb += "display:none;" : (("auto" == _b.characterAlign || "left" == _b.characterAlign || "right" == _b.characterAlign) && (_b.characterAlign = c.get("no", d.sWidth, b.tParseInt(_.css("left")))), ("right" == _b.characterAlign || "qright" == _b.characterAlign) && (Yb = ob.width(), Zb = _.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == _b.characterAlign || "qright" == _b.characterAlign) && (Eb += ' data-l="yes"'), Wb = "center center", ac = 0, bc = 0, _b.characterSpace && "" != _b.characterSpace && (bc = b.tParseInt(_b.characterSpace)), _b.characterSpace1 && "" != _b.characterSpace1 && (ac = b.tParseInt(_b.characterSpace1)), (0 != ac || 0 != bc) && (xb += "padding: " + ac + "px " + bc + "px;"), _b.characterBgColor && (_b.characterBgColor = RGBToHex(_b.characterBgColor, ""), "" != _b.characterBgColor && (wb = "background-color:" + _b.characterBgColor + ";")), _b.characterColor && (_b.characterColor = RGBToHex(_b.characterColor, ""), "" != _b.characterColor && (xb += "color:" + _b.characterColor + ";")), _b.characterFont && "" != _b.characterFont && (xb += "font-family:" + _b.characterFont + ";"), _b.characterWeight && "" != _b.characterWeight && (xb += "font-weight:" + _b.characterWeight + ";"), _b.characterSize && "" != _b.characterSize && (xb += "font-size:" + b.tParseInt(_b.characterSize) + "px;"), _b.characterLetterSpacing && "" != _b.characterLetterSpacing && (xb += "letter-spacing:" + b.tParseInt(_b.characterLetterSpacing) + "px;"), _b.characterRadius && "" != _b.characterRadius && (xb += "border-radius:" + b.tParseInt(_b.characterRadius) + "px;"), _b.characterBorderWidth && "" != _b.characterBorderWidth && "0" != _b.characterBorderWidth && (xb += "border:" + _b.characterBorderWidth + "px " + _b.characterBorderStyle + " " + RGBToHex(_b.characterBorderColor)));
									else if ("jibexpandtext3" == i[pb] && "yes" != d.expandText3Switch) continue a;
									if ("jibexpandtext4" == i[pb] && "yes" == d.expandText4Switch) _b = JSON.parse(H[ib] || "{}"), yb = G[ib] || "", "" == yb ? xb += "display:none;" : (("auto" == _b.characterAlign || "left" == _b.characterAlign || "right" == _b.characterAlign) && (_b.characterAlign = c.get("no", d.sWidth, b.tParseInt(ab.css("left")))), ("right" == _b.characterAlign || "qright" == _b.characterAlign) && (Yb = ob.width(), Zb = ab.width(), Eb = ' data-n="' + sb.left + '"', d.panelPos && "right" == d.panelPos && (Yb += d.mHeight), Ab = "top:" + sb.top + "px;right:" + (Yb - Zb - sb.left) + "px;"), ("qleft" == _b.characterAlign || "qright" == _b.characterAlign) && (Eb += ' data-l="yes"'), Wb = "center center", ac = 0, bc = 0, _b.characterSpace && "" != _b.characterSpace && (bc = b.tParseInt(_b.characterSpace)), _b.characterSpace1 && "" != _b.characterSpace1 && (ac = b.tParseInt(_b.characterSpace1)), (0 != ac || 0 != bc) && (xb += "padding: " + ac + "px " + bc + "px;"), _b.characterBgColor && (_b.characterBgColor = RGBToHex(_b.characterBgColor, ""), "" != _b.characterBgColor && (wb = "background-color:" + _b.characterBgColor + ";")), _b.characterColor && (_b.characterColor = RGBToHex(_b.characterColor, ""), "" != _b.characterColor && (xb += "color:" + _b.characterColor + ";")), _b.characterFont && "" != _b.characterFont && (xb += "font-family:" + _b.characterFont + ";"), _b.characterWeight && "" != _b.characterWeight && (xb += "font-weight:" + _b.characterWeight + ";"), _b.characterSize && "" != _b.characterSize && (xb += "font-size:" + b.tParseInt(_b.characterSize) + "px;"), _b.characterLetterSpacing && "" != _b.characterLetterSpacing && (xb += "letter-spacing:" + b.tParseInt(_b.characterLetterSpacing) + "px;"), _b.characterRadius && "" != _b.characterRadius && (xb += "border-radius:" + b.tParseInt(_b.characterRadius) + "px;"), _b.characterBorderWidth && "" != _b.characterBorderWidth && "0" != _b.characterBorderWidth && (xb += "border:" + _b.characterBorderWidth + "px " + _b.characterBorderStyle + " " + RGBToHex(_b.characterBorderColor)));
									else if ("jibexpandtext4" == i[pb] && "yes" != d.expandText4Switch) continue a;
									lb += '<div class="abs ' + i[pb] + '"' + Db + Eb + ' style="' + zb + Ab + vb + wb + xb + '">' + yb + "</div>"
								}
						else "yes" == M && (lb += '<a class="abs jibaforpanel" href="' + k[ib] + '"' + hb + ' style="display:block;' + mb + nb + '"></a>');
						cc = "", dc = "", ec = "", fc = "", gc = "", hc = "", ic = "", jc = 0, kc = 0, borderWidth = 0, borderWidth1 = 0, outlineColor = "", outlineShadowColor = "", outlineWidth = "", itemAreaHref = "", itemAreaTarget = "", "" != d.shadowControl && ("" == d.shadowLeft && (d.shadowLeft = 0), "" == d.shadowTop && (d.shadowTop = 0), "" == d.shadowBlur && (d.shadowBlur = 0), "" == d.shadowSize && (d.shadowSize = 0), gc = "box-shadow: " + d.shadowLeft + "px " + d.shadowTop + "px " + d.shadowBlur + "px " + d.shadowSize + "px " + d.shadowColor + " " + d.shadowStyle + ";"), "" == d.borderRadius && (d.borderRadius = 0), "" == d.borderWidth && (d.borderWidth = 0), "hborder" != d.borderControl && (dc = "border:none;", d.borderControl = "", d.borderWidth = 0, d.borderRadius = 0), d.borderColor = RGBToHex(d.borderColor, ""), "" != d.borderColor && (hc = "border-color:" + d.borderColor + ";"), jc = b.tParseInt(d.borderRadius), borderWidth = b.tParseInt(d.borderWidth), "" == dc && (dc = "border-radius:" + jc + "px;"), itemAreaHref = ' href="' + k[ib] + '"', itemAreaTarget = ' target="' + d.hrefMode + '"', ("" != d.shadowControl || "" != d.borderControl) && (cc = '<a class="itemareachild abs june-box-fadein"' + itemAreaHref + itemAreaTarget + ' style="display:block;top:' + (0 - borderWidth) + "px;left:" + (0 - borderWidth) + "px;width:" + jb + "px;height:" + kb + "px;" + hc + "border-style:solid;border-width:" + borderWidth + "px;" + dc + gc + '"></a>'), "" != d.shadowControl1 && ("" == d.shadowLeft1 && (d.shadowLeft1 = 0), "" == d.shadowTop1 && (d.shadowTop1 = 0), "" == d.shadowBlur1 && (d.shadowBlur1 = 0), "" == d.shadowSize1 && (d.shadowSize1 = 0), fc = "box-shadow: " + d.shadowLeft1 + "px " + d.shadowTop1 + "px " + d.shadowBlur1 + "px " + d.shadowSize1 + "px " + d.shadowColor1 + " " + d.shadowStyle1 + ";"), "" == d.borderRadius1 && (d.borderRadius1 = 0), "" == d.borderWidth1 && (d.borderWidth1 = 0), "hborder1" != d.borderControl1 && (ec = "border:none;", d.borderControl1 = "", d.borderWidth1 = 0, d.borderRadius1 = 0), ic = RGBToHex(d.borderColor1, ""), "" == ic && (ec = "border:none;", d.borderControl1 = "", d.borderWidth1 = 0, d.borderRadius1 = 0), kc = b.tParseInt(d.borderRadius1), borderWidth1 = b.tParseInt(d.borderWidth1), "" == ec && (ec = "border:" + borderWidth1 + "px solid " + ic + ";border-radius:" + kc + "px;"), "" == d.outlineControl && (d.outlineWidth = "", d.outlineColor = "", d.outlineShadowColor = ""), "" != d.outlineWidth && (outlineWidth = d.outlineWidth + " " + d.outlineSpeed), d.outlineColor = RGBToHex(d.outlineColor, ""), "" != d.outlineColor && (outlineColor = "outline-color:" + d.outlineColor + ";"), d.outlineShadowColor = RGBToHex(d.outlineShadowColor, ""), "" != d.outlineShadowColor && (outlineShadowColor = "color:" + d.outlineShadowColor + ";"), bb += '<div class="itemarea abs jspb ' + d.borderControl + " " + d.borderControl1 + " " + d.shadowControl + " " + d.shadowControl1 + " " + outlineWidth + ' jzi" style="display:block;background:'+d.bgColor+';width:' + jb + "px;height:" + kb + "px;top:" + (rb.top - borderWidth1) + "px;left:" + (rb.left - borderWidth1) + "px;" + outlineColor + outlineShadowColor + ec + fc + '">' + cc + lb + "</div>"
					}
					return lc = d.pSrcSize, "" == lc && (lc = "none"), mc = d.pSrcSize1, "" == mc && (mc = "none"), nc = "", d.mbncheck && "2" == d.mbncheck && (nc = ' data-mc="' + d.mbncheck + '"'), '<div class="jib abs" data-brandid="' + d.appID + '" data-t-size="' + lc + '" data-t-size1="' + mc + '" data-l="' + d.itemColumn + ";" + d.columnSpace + ";" + d.lineSpace + '" data-cc="' + (d.catchChoose || "") + '" data-p="' + j + '" data-h="' + d.itemMode + ";" + d.pptHref + '"' + nc + lOpacityStr + "width:" + e + "px;height:" + f + "px;top:" + g + "px;left:" + h + 'px;z-index:10;">' + bb + "</div>"
				},
				codeImport: function (a, c, d, e) {
					var J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, _, Z, db, ab, bb, cb, eb, fb, gb, hb, ib, jb, kb, nb, ob, lb, mb, f = JSON.parse(a.attr("data-config")),
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
					for (G.itemMode = I[0] || "ptitem", G.pptHref = I[1] || "", G.panelArea = "no", G.catchChoose = d.attr("data-cc") || "", "" == G.catchChoose && (G.catchChoose = "1,1,1,1,1"), G.mbncheck = "2" == d.attr("data-mc") ? "2" : "0", d.children(".itemarea").length > 0 && (i = d.find("a.jibbg"), j = d.find("div.jibpanel"), k = d.find("a.jibtitle"), l = d.find("a.jibsubtitle"), m = d.find("div.jibprefix"), n = d.find("div.jibprice"), o = d.find("div.jibdiscountprefix"), p = d.find("div.jibdiscountprice"), q = d.find("div.jibsaleprefix"), r = d.find("div.jibsale"), s = d.find("a.jibbtn"), t = d.find("a.jibbtn1"), u = d.find("a.jibbtn2"), v = d.find("div.jibsubscript"), w = d.find("div.jibsubscript1"), x = d.find("div.jibsubscript2"), y = d.find("div.jibsubscript3"), z = d.find("div.jibsubscript4"), A = d.find("div.jiberweima"), B = d.find("div.jibexpandtext"), C = d.find("div.jibexpandtext1"), D = d.find("div.jibexpandtext2"), E = d.find("div.jibexpandtext3"), F = d.find("div.jibexpandtext4"), d.children(".itemarea").children("a.jibaforpanel").length > 0 ? G.panelArea = "yes" : d.children(".itemarea:eq(0)").children("a:not(.jibbg,.jibtitle,.jibsubtitle,.jibbtn,.jibbtn1,.jibbtn2,.itemareachild)").length > 0 && (G.panelArea = "yes")), G.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), "ptitem" != G.itemMode && (G.pptCount = i.length), G.columnSpace = 0, G.lineSpace = 0, G.panelPos = d.attr("data-p") || "bottom", !d.attr("data-p") && d.children(".itemarea").width() > i.width() && (G.panelPos = "right"), G.pSrcSize = d.attr("data-t-size"), "undefined" == G.pSrcSize && (G.pSrcSize = "240"), "none" == G.pSrcSize && (G.pSrcSize = ""), G.pSrcSize1 = d.attr("data-t-size1"), "undefined" == G.pSrcSize1 && (G.pSrcSize1 = "240"), "none" == G.pSrcSize1 && (G.pSrcSize1 = ""), d.attr("data-t-size") || (G.pSrcSize = ""), d.attr("data-t-size1") || (G.pSrcSize1 = G.pSrcSize), J = b.tParseInt(G.pSrcSize), K = b.tParseInt(G.pSrcSize1), L = 1, G.sWidth = i.width(), G.sHeight = i.height(), G.mHeight = "bottom" == G.panelPos ? j.height() : j.width(), G.itemCount = i.length, M = -1, G.itemColumn = 0, d.children(".itemarea").length > 0 ? d.children("div.itemarea").each(function () {
							var a = b.tParseInt($(this).css("left"));
							a > M && (M = a, G.itemColumn += 1)
						}) : d.children("a.jibbg").each(function () {
							var a = b.tParseInt($(this).css("left"));
							a > M && (M = a, G.itemColumn += 1)
						}), L = Math.ceil(G.itemCount / G.itemColumn), "bottom" == G.panelPos ? (G.itemColumn > 1 && (G.columnSpace = (d.width() - G.sWidth * G.itemColumn) / (G.itemColumn - 1)), L > 1 && (G.lineSpace = (d.height() - (G.sHeight + G.mHeight) * L) / (L - 1))) : (G.itemColumn > 1 && (G.columnSpace = (d.width() - (G.sWidth + G.mHeight) * G.itemColumn) / (G.itemColumn - 1)), L > 1 && (G.lineSpace = (d.height() - G.sHeight * L) / (L - 1))), d.attr("data-l") && (tempItemIS = d.attr("data-l").split(";"), tempItemIS[0] && "" != tempItemIS[0] && (G.itemColumn = b.tParseInt(tempItemIS[0])), tempItemIS[1] && "" != tempItemIS[1] && (G.columnSpace = b.tParseInt(tempItemIS[1])), tempItemIS[2] && "" != tempItemIS[2] && (G.lineSpace = b.tParseInt(tempItemIS[2]))), G.href = [], G.pSrc = [], G.oppoSrc = [], G.titleInfo = [], G.subTitleInfo = [], G.priceInfo = [], G._priceInfo = [], G.saleInfo = [], G.subScriptSrc = [], G.subScript1Src = [], G.subScript2Src = [], G.subScript3Src = [], G.subScript4Src = [], G.erWeiMaSrc = [], G.expandText = [], G.expandTextSet = [], G.expandText1 = [], G.expandText1Set = [], G.expandText2 = [], G.expandText2Set = [], G.expandText3 = [], G.expandText3Set = [], G.expandText4 = [], G.expandText4Set = [], G.readVal = [], G.titleAuto = [], G.priceAuto = [], G._priceAuto = [], G.saleAuto = [], G.pSrcPos = [], G.oSrcPos = [], N = 0; N < G.itemCount; N++) G.href.push(""), G.pSrc.push(""), G.oppoSrc.push(""), G.titleInfo.push(""), G.subTitleInfo.push(""), G.priceInfo.push(""), G._priceInfo.push(""), G.saleInfo.push(""), G.subScriptSrc.push(""), G.subScript1Src.push(""), G.subScript2Src.push(""), G.subScript3Src.push(""), G.subScript4Src.push(""), G.readVal.push("0"), G.titleAuto.push("0"), G.priceAuto.push("0"), G._priceAuto.push("0"), G.saleAuto.push("0"), G.expandText.push(""), G.expandTextSet.push(""), G.expandText1.push(""), G.expandText1Set.push(""), G.expandText2.push(""), G.expandText2Set.push(""), G.expandText3.push(""), G.expandText3Set.push(""), G.expandText4.push(""), G.expandText4Set.push(""), G.pSrcPos.push("1"), G.oSrcPos.push("2");
					for (G.oppoSwitch = "no", G.titleSwitch = "no", G.subTitleSwitch = "no", G.prefixSwitch = "no", G.priceSwitch = "no", G._prefixSwitch = "no", G._priceSwitch = "no", G.saleSwitch = "no", G.salePrefixSwitch = "no", G.btnSwitch = "no", G.btn1Switch = "no", G.btn2Switch = "no", G.subScriptSwitch = "no", G.subScript1Switch = "no", G.subScript2Switch = "no", G.subScript3Switch = "no", G.subScript4Switch = "no", G.erWeiMaSwitch = "no", G.expandTextSwitch = "no", G.expandText1Switch = "no", G.expandText2Switch = "no", G.expandText3Switch = "no", G.expandText4Switch = "no", G.priceFixed = 0, G._priceFixed = 0, d.children(".itemarea").length > 0 && (O = d.children(".itemarea:eq(0)"), P = O.children("a:eq(0)"), O.hasClass("shadowShow") && (G.shadowControl = "shadowShow", Q = P.css("box-shadow"), Q.indexOf("inset") >= 0 && (G.shadowStyle = "inset", Q = $.trim(Q.replace(/inset/g, ""))), Q.indexOf("rgb") >= 0 && (R = RGBToHex(Q.match(/rgb\((\S|\s)*\)/g)[0]), Q = $.trim(Q.replace(/rgb\((\S|\s)*\)/g, ""))), S = Q.split(" "), S[0].indexOf("px") < 0 && S[0] ? ("" == R && (R = RGBToHex(S[0])), S.splice(0, 1)) : "" == R && (R = RGBToHex(S[4])), G.shadowColor = R, G.shadowLeft = b.tParseInt(S[0]), G.shadowTop = b.tParseInt(S[1]), G.shadowBlur = b.tParseInt(S[2]), G.shadowSize = b.tParseInt(S[3])), O.hasClass("hborder") && (G.borderControl = "hborder", G.borderColor = RGBToHex(O.children("a:eq(0)").css("border-color")), G.borderWidth = O.children("a:eq(0)").css("border-width") || "1px", G.borderWidth = G.borderWidth.replace(/px/g, ""), G.borderRadius = O.children("a:eq(0)").css("border-radius") || "0px", G.borderRadius = G.borderRadius.replace(/px/g, "")), O.hasClass("mcblack") && (G.mongoliaControl = "mongoliaShow", G.mongoliaMode = "mcblack"), O.hasClass("mcwhite") && (G.mongoliaControl = "mongoliaShow", G.mongoliaMode = "mcwhite"), O.hasClass("shadowShow1") && (G.shadowControl1 = "shadowShow1", T = O.css("box-shadow"), T.indexOf("inset") >= 0 && (G.shadowStyle1 = "inset", T = $.trim(T.replace(/inset/g, ""))), T.indexOf("rgb") >= 0 && (R = RGBToHex(T.match(/rgb\((\S|\s)*\)/g)[0]), T = $.trim(T.replace(/rgb\((\S|\s)*\)/g, ""))), S = T.split(" "), S[0].indexOf("px") < 0 && S[0] ? ("" == R && (R = RGBToHex(S[0])), S.splice(0, 1)) : "" == R && (R = RGBToHex(S[4])), G.shadowColor1 = R, G.shadowLeft1 = b.tParseInt(S[0]), G.shadowTop1 = b.tParseInt(S[1]), G.shadowBlur1 = b.tParseInt(S[2]), G.shadowSize1 = b.tParseInt(S[3])), O.hasClass("hborder1") && (G.borderControl1 = "hborder1", G.borderColor1 = RGBToHex(O.css("border-color")), G.borderWidth1 = O.css("border-width") || "1px", G.borderWidth1 = G.borderWidth1.replace(/px/g, ""), G.borderRadius1 = O.css("border-radius") || "0px", G.borderRadius1 = G.borderRadius1.replace(/px/g, "")), O.hasClass("juneol") && (G.outlineControl = "outlineShow", G.outlineWidth = "juneol", G.outlineColor = RGBToHex(O.css("outline-color")), G.outlineShadowColor = RGBToHex(O.css("color")), G.outlineSpeed = O.attr("class").indexOf("trans") >= 0 ? O.attr("class").match(/trans(\w+)s/g).join("") : ""), O.hasClass("juneol1") && (G.outlineControl = "outlineShow", G.outlineWidth = "juneol1", G.outlineColor = RGBToHex(O.css("outline-color")), G.outlineShadowColor = RGBToHex(O.css("color")), G.outlineSpeed = O.attr("class").indexOf("trans") >= 0 ? O.attr("class").match(/trans(\w+)s/g).join("") : ""), O.hasClass("juneol2") && (G.outlineControl = "outlineShow", G.outlineWidth = "juneol2", G.outlineColor = RGBToHex(O.css("outline-color")), G.outlineShadowColor = RGBToHex(O.css("color")), G.outlineSpeed = O.attr("class").indexOf("trans") >= 0 ? O.attr("class").match(/trans(\w+)s/g).join("") : "")), i.each(function (a) {
							var c = $(this),
								d = c.children("img"),
								e = c.attr("data-p") || "1;2",
								f = e.split(";");
							e.indexOf("|") >= 0 && (f = e.split("|")), G.href[a] = c.attr("href") || "", G.pSrc[a] = c.css("background-image").replace(/^url|[\(\"\)]*/g, "").replace(new RegExp("_" + J + "x" + J + ".jpg", "g"), ""), d.length > 0 && ("yes" != G.oppoSwitch && (G.oppoSwitch = "yes"), G.oppoSrc[a] = d.attr("src").replace(new RegExp("_" + K + "x" + K + ".jpg", "g"), "")), G.pSrcPos[a] = f[0] || "1", G.oSrcPos[a] = f[1] || "2"
						}), G.hrefMode = i.eq(0).attr("target") || "_self", G.itemBgColor = RGBToHex(i.eq(0).css("background-color"), ""), G.bgColor = RGBToHex(j.eq(0).css("background-color"), ""), G.bgImage = j.eq(0).css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.eq(0).attr("data-e") ? (U = i.eq(0).attr("data-e").split(";"), G.oppoEffect = U[0] || "none", G.oppoSpeed = U[1] || "") : (G.oppoEffect = "none", G.oppoSpeed = ""), k.length > 0 && (G.titleSwitch = "yes", G.titleWidth = k.width(), G.titleHeight = k.height(), G.titleBgColor = RGBToHex(k.css("background-color"), ""), G.titleBgImage = k.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.titleColor = RGBToHex(k.css("color"), ""), G.titleAlign = k.css("text-align") || "left", G.titleFont = k.css("font-family").replace(/'/g, ""), G.titleSize = k.css("font-size").replace(/px/g, ""), G.titleSpacing = k.css("letter-spacing").replace(/px/g, ""), G.titleWeight = k.css("font-weight"), "400" == G.titleWeight && (G.titleWeight = "normal"), G.titleLineHeight = k.css("line-height").replace(/px/g, ""), k.each(function (a) {
							var c = $(this);
							G.titleInfo[a] = c.text(), "undefined" == G.titleInfo[a] && (G.titleInfo[a] = ""), (c.attr("data-u") || "%7b" == G.titleInfo[a].substr(0, 3)) && (G.titleAuto[a] = 1, G.titleInfo[a] = c.attr("data-u") || "")
						}), "left" == G.titleAlign ? (G.titleSpace = Math.abs(b.tParseInt(k.css("padding-left"))), G.titleWidth += G.titleSpace) : "right" == G.titleAlign ? (G.titleSpace = Math.abs(b.tParseInt(k.css("padding-right"))), G.titleWidth += G.titleSpace) : G.titleSpace = ""), l.length > 0 && (G.subTitleSwitch = "yes", G.subTitleWidth = l.width(), G.subTitleHeight = l.height(), G.subTitleBgColor = RGBToHex(l.css("background-color"), ""), G.subTitleBgImage = l.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.subTitleColor = RGBToHex(l.css("color"), ""), G.subTitleAlign = l.css("text-align") || "left", G.subTitleFont = l.css("font-family").replace(/'/g, ""), G.subTitleSize = l.css("font-size").replace(/px/g, ""), G.subTitleSpacing = l.css("letter-spacing").replace(/px/g, ""), G.subTitleWeight = l.css("font-weight"), "400" == G.subTitleWeight && (G.subTitleWeight = "normal"), G.subTitleLineHeight = l.css("line-height").replace(/px/g, ""), l.each(function (a) {
							var c = $(this);
							G.subTitleInfo[a] = c.html().replace(/\<span class=\"coupon\" title=\".*?\" data-num=\".*?\"\>.*?\<i class=\"ju-icon-arrowright\"\>.*?\<\/i\>.*?\<\/span\>/g, "").replace(/<.*?>/g, ""), "undefined" == G.subTitleInfo[a] && (G.subTitleInfo[a] = "")
						}), "left" == G.subTitleAlign ? (G.subTitleSpace = Math.abs(b.tParseInt(l.css("padding-left"))), G.subTitleWidth += G.subTitleSpace) : "right" == G.subTitleAlign ? (G.subTitleSpace = Math.abs(b.tParseInt(l.css("padding-right"))), G.subTitleWidth += G.subTitleSpace) : G.subTitleSpace = ""), m.length > 0 && (G.prefixSwitch = "yes", G.prefixColor = RGBToHex(m.css("color"), ""), G.prefixFont = m.css("font-family").replace(/'/g, ""), G.prefixSize = m.css("font-size").replace(/px/g, ""), G.prefixSpacing = m.css("letter-spacing").replace(/px/g, ""), G.prefixWeight = m.css("font-weight"), "400" == G.prefixWeight && (G.prefixWeight = "normal"), G.prefixDecoration = m.css("text-decoration"), G.prefixInfo = m.html()), n.length > 0 && (G.priceSwitch = "yes", G.priceColor = RGBToHex(n.css("color"), ""), G.priceFont = n.css("font-family").replace(/'/g, ""), G.priceSize = n.css("font-size").replace(/px/g, ""), G.priceSpacing = n.css("letter-spacing").replace(/px/g, ""), G.priceWeight = n.css("font-weight"), "400" == G.priceWeight && (G.priceWeight = "normal"), G.priceDecoration = n.css("text-decoration"), G.priceAlign = "left", n.each(function (a) {
							var d = $(this);
							G.priceInfo[a] = d.text(), d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != G.priceAlign && "qright" != G.priceAlign && (G.priceAlign = "right")), (d.attr("data-u") || "%7b" == G.priceInfo[a].substr(0, 3)) && (V = d.html(), G.priceAuto[a] = 1, G.priceInfo[a] = d.attr("data-u") || ""), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != G.priceAlign.substr(0, 1) && (G.priceAlign = "q" + G.priceAlign), d.attr("data-l") && "center" == d.attr("data-l") && (G.priceAlign = "qcenter")
						}), W = G.priceInfo[0].split("."), W.length > 1 && (W[1] = W[1].replace(/[^\d\.]*/g, ""), G.priceFixed = W[1].length), W.length > 2 && (W[2] = W[2].replace(/[^\d\.]*/g, ""), G.priceFixed = W[2].length)), o.length > 0 && (G._prefixSwitch = "yes", G._prefixColor = RGBToHex(o.css("color"), ""), G._prefixFont = o.css("font-family").replace(/'/g, ""), G._prefixSize = o.css("font-size").replace(/px/g, ""), G._prefixSpacing = o.css("letter-spacing").replace(/px/g, ""), G._prefixWeight = o.css("font-weight"), "400" == G._prefixWeight && (G._prefixWeight = "normal"), G._prefixInfo = o.html()), p.length > 0 && (G._priceSwitch = "yes", G._priceColor = RGBToHex(p.css("color"), ""), G._priceFont = p.css("font-family").replace(/'/g, ""), G._priceSize = p.css("font-size").replace(/px/g, ""), G._priceSpacing = p.css("letter-spacing").replace(/px/g, ""), G._priceWeight = p.css("font-weight"), "400" == G._priceWeight && (G._priceWeight = "normal"), G._priceAlign = "left", p.each(function (a) {
							var d = $(this);
							G._priceInfo[a] = d.text(), d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != G._priceAlign && "qright" != G._priceAlign && (G._priceAlign = "right")), (d.attr("data-u") || "%7b" == G._priceInfo[a].substr(0, 3)) && (V = d.html(), G._priceAuto[a] = 1, G._priceInfo[a] = d.attr("data-u") || ""), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != G._priceAlign.substr(0, 1) && (G._priceAlign = "q" + G._priceAlign), d.attr("data-l") && "center" == d.attr("data-l") && (G._priceAlign = "qcenter")
						}), X = G._priceInfo[0].split("."), X.length > 1 && (X[1] = X[1].replace(/[^\d\.]*/g, ""), G._priceFixed = X[1].length), X.length > 2 && (X[2] = X[2].replace(/[^\d\.]*/g, ""), G._priceFixed = X[2].length)), q.length > 0 && (G.salePrefixSwitch = "yes", G.salePrefixColor = RGBToHex(q.css("color"), ""), G.salePrefixFont = q.css("font-family").replace(/'/g, ""), G.salePrefixSize = q.css("font-size").replace(/px/g, ""), G.salePrefixSpacing = q.css("letter-spacing").replace(/px/g, ""), G.salePrefixWeight = q.css("font-weight"), "400" == G.salePrefixWeight && (G.salePrefixWeight = "normal"), G.salePrefixInfo = q.html()), r.length > 0 && (G.saleSwitch = "yes", G.saleColor = RGBToHex(r.css("color"), ""), G.saleFont = r.css("font-family").replace(/'/g, ""), G.saleSize = r.css("font-size").replace(/px/g, ""), G.saleSpacing = r.css("letter-spacing").replace(/px/g, ""), G.saleWeight = r.css("font-weight"), "400" == G.saleWeight && (G.saleWeight = "normal"), G.saleAlign = "left", r.each(function (a) {
							var d = $(this);
							G.saleInfo[a] = d.text().replace(/件/g, ""), d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != G.saleAlign && "qright" != G.saleAlign && (G.saleAlign = "right")), (d.attr("data-u") || "%7b" == G.saleInfo[a].substr(0, 3)) && (G.saleAuto[a] = 1, G.saleInfo[a] = d.attr("data-u") || ""), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != G.saleAlign.substr(0, 1) && (G.saleAlign = "q" + G.saleAlign), d.attr("data-l") && "center" == d.attr("data-l") && (G.saleAlign = "qcenter")
						})), s.length > 0 && (G.btnSwitch = "yes", Y = s.eq(0).children("div"), Y.length > 0 ? (Z = Y.eq(0), _ = 2 == Y.length ? Y.eq(1) : Z, ab = Z.attr("class"), bb = _.attr("class"), cb = "", G.btnHoverMode = "bhm_item", G.btnSrc = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btnHoverSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), cb = ab.match(/trans(\w+)s/g), !cb || cb.length < 1 ? G.btnStyle = "" : (G.btnStyle = "june-box-fadeout", G.btnHoverSpeed = cb.join("")), db = bb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = bb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = bb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btnHoverStyle = !db || db.length < 1 ? "" : db.join(""), G.btnHoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btnHoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btnHoverMode = "bhm_btn", G.btnSrc = s.css("background-image").replace(/^url|[\(\"\)]*/g, ""), eb = s.children("img"), G.btnHoverSrc = eb.length > 0 ? eb.attr("src") : "")), t.length > 0 && (G.btn1Switch = "yes", Y = t.eq(0).children("div"), Y.length > 0 ? (Z = Y.eq(0), _ = 2 == Y.length ? Y.eq(1) : Z, ab = Z.attr("class"), bb = _.attr("class"), cb = "", G.btn1HoverMode = "bhm_item", G.btn1Src = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btn1HoverSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), cb = ab.match(/trans(\w+)s/g), !cb || cb.length < 1 ? G.btn1Style = "" : (G.btn1Style = "june-box-fadeout", G.btn1HoverSpeed = cb.join("")), db = bb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = bb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = bb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btn1HoverStyle = !db || db.length < 1 ? "" : db.join(""), G.btn1HoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btn1HoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btn1HoverMode = "bhm_btn", G.btn1Src = t.css("background-image").replace(/^url|[\(\"\)]*/g, ""), fb = t.children("img"), G.btn1HoverSrc = fb.length > 0 ? fb.attr("src") : "")), u.length > 0 && (G.btn2Switch = "yes", Y = u.eq(0).children("div"), Y.length > 0 ? (Z = Y.eq(0), _ = 2 == Y.length ? Y.eq(1) : Z, ab = Z.attr("class"), bb = _.attr("class"), cb = "", G.btn2HoverMode = "bhm_item", G.btn2Src = Z.css("background-image").replace(/^url|[\(\"\)]*/g, ""), G.btn2HoverSrc = _.css("background-image").replace(/^url|[\(\"\)]*/g, ""), cb = ab.match(/trans(\w+)s/g), !cb || cb.length < 1 ? G.btn2Style = "" : (G.btn2Style = "june-box-fadeout", G.btn2HoverSpeed = cb.join("")), db = bb.match(/june-box-(fx|fy|sf|fx|fy|r1|r2|r3|r7|fr1|fr2|fr3|fr7){1}(\S)*/g), tempStyleX = bb.match(/june-box-(fromleft|fromright|lx|rx){1}(\S)*/g), tempStyleY = bb.match(/june-box-(fromtop|frombottom|uy|dy){1}(\S)*/g), G.btn2HoverStyle = !db || db.length < 1 ? "" : db.join(""), G.btn2HoverStyleX = !tempStyleX || tempStyleX.length < 1 ? "" : tempStyleX.join(""), G.btn2HoverStyleY = !tempStyleY || tempStyleY.length < 1 ? "" : tempStyleY.join("")) : (G.btn2HoverMode = "bhm_btn", G.btn2Src = u.css("background-image").replace(/^url|[\(\"\)]*/g, ""), gb = u.children("img"), G.btn2HoverSrc = gb.length > 0 ? gb.attr("src") : "")), v.length > 0 && (G.subScriptSwitch = "yes", v.each(function (a) {
							var c = $(this);
							G.subScriptSrc[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
						})), w.length > 0 && (G.subScript1Switch = "yes", w.each(function (a) {
							var c = $(this);
							G.subScript1Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
						})), x.length > 0 && (G.subScript2Switch = "yes", x.each(function (a) {
							var c = $(this);
							G.subScript2Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
						})), y.length > 0 && (G.subScript3Switch = "yes", y.each(function (a) {
							var c = $(this);
							G.subScript3Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
						})), z.length > 0 && (G.subScript4Switch = "yes", z.each(function (a) {
							var c = $(this);
							G.subScript4Src[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
						})), A.length > 0 && (G.erWeiMaSwitch = "yes", G.erWeiMaSize = A.width() || 90, A.each(function (a) {
							var c = $(this);
							G.erWeiMaSrc[a] = c.css("background-image") && "" != c.css("background-image") && "none" != c.css("background-image") ? c.css("background-image").replace(/^url|[\(\"\)]*/g, "") : ""
						})), B.length > 0 && (G.expandTextSwitch = "yes", B.each(function (a) {
							var d = $(this),
								e = {};
							G.expandText[a] = d.html(), "undefined" == G.expandText[a] && (G.expandText[a] = ""), "" != G.expandText[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandTextSet[a] = JSON.stringify(e))
						})), C.length > 0 && (G.expandText1Switch = "yes", C.each(function (a) {
							var d = $(this),
								e = {};
							G.expandText1[a] = d.html(), "undefined" == G.expandText1[a] && (G.expandText1[a] = ""), "" != G.expandText1[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText1Set[a] = JSON.stringify(e))
						})), D.length > 0 && (G.expandText2Switch = "yes", D.each(function (a) {
							var d = $(this),
								e = {};
							G.expandText2[a] = d.html(), "undefined" == G.expandText2[a] && (G.expandText2[a] = ""), "" != G.expandText2[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText2Set[a] = JSON.stringify(e))
						})), E.length > 0 && (G.expandText3Switch = "yes", E.each(function (a) {
							var d = $(this),
								e = {};
							G.expandText3[a] = d.html(), "undefined" == G.expandText3[a] && (G.expandText3[a] = ""), "" != G.expandText3[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText3Set[a] = JSON.stringify(e))
						})), F.length > 0 && (G.expandText4Switch = "yes", F.each(function (a) {
							var d = $(this),
								e = {};
							G.expandText4[a] = d.html(), "undefined" == G.expandText4[a] && (G.expandText4[a] = ""), "" != G.expandText4[a] && (e.characterBgColor = RGBToHex(d.css("background-color"), ""), e.characterColor = RGBToHex(d.css("color"), "#00000"), e.characterFont = d.css("font-family").replace(/'/g, ""), e.characterSize = d.css("font-size").replace(/px/g, ""), e.characterLetterSpacing = d.css("letter-spacing").replace(/px/g, ""), e.characterWeight = d.css("font-weight"), "400" == e.characterWeight && (e.characterWeight = "normal"), e.characterLineHeight = d.css("line-height").replace(/px/g, ""), e.characterSpace = d.css("padding-left").replace(/px|auto/, ""), e.characterSpace1 = d.css("padding-top").replace(/px|auto/, ""), e.characterRadius = d.css("border-radius") || "0px", e.characterRadius = e.characterRadius.replace(/px/g, ""), e.characterBorderWidth = d.css("border-width") || "0px", e.characterBorderWidth = e.characterBorderWidth.replace(/px/g, ""), e.characterBorderColor = RGBToHex(d.css("border-color")), e.characterBorderStyle = d.css("border-style") || "solid", e.characterAlign = "left", d.attr("data-n") && (d.css("left", b.tParseInt(d.attr("data-n"))), "right" != e.characterAlign && "qright" != e.characterAlign && (e.characterAlign = "right")), d.attr("data-l") && "yes" == d.attr("data-l") && "q" != e.characterAlign.substr(0, 1) && (e.characterAlign = "q" + e.characterAlign), G.expandText4Set[a] = JSON.stringify(e))
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
						}, jb = a.html(), kb = 0; kb < f.itemCount; kb++) {
						lb = kb % f.itemColumn, mb = b.tParseInt(kb / f.itemColumn), f.panelPos && "right" == f.panelPos ? (nb = (f.sWidth + f.mHeight + f.columnSpace) * lb, ob = (f.sHeight + f.lineSpace) * mb) : (nb = (f.sWidth + f.columnSpace) * lb, ob = (f.sHeight + f.mHeight + f.lineSpace) * mb);
						try {
							g.createAuto("jib", a, nb, ob, kb, ib)
						} catch (pb) {
							a.html(jb)
						}
					}
					e(h, G.appID)
				}
			}, {
				appID: "",
				itemCount: "6",
				itemColumn: "3",
				panelPos: "bottom",
				columnSpace: "10",
				lineSpace: "10",
				itemMode: "ptitem",
				pptHref: "",
				pptCount: "0",
				readVal: "1,1,1,1,1,1",
				href: ",,,,,",
				hrefMode: "_blank",
				pSrc: "https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg,https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg,https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg,https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg,https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg,https://img.alicdn.com/imgextra/i1/39767794/TB2kr54qXXXXXXKXFXXXXXXXXXX-39767794.jpg",
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
				titleBgColor: "#399166",
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
				subTitleBgColor: "#399166",
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
			jzdb: ['<div class="j-fnd t-app" data-dblType="jzdb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;自定义内容区",
				tUrl: "zidingyi.php",
				tSubmit: function (a, c) {
					c.children(b.appOtherCls).html(a.customContent), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div>',
				codeExport: function () {
					return "${!jzdb}"
				},
				codeImport: function (a, c, d, e) {
					var l, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.attr("class"),
						i = {};
					if (d.children(".shake").length > 0) {
						try {
							i.animType = h.match(/(june-x|june-y|june-r|june-s|june-n|)-shake(?=(-s|-m|-l))/g)[0], i.animSpeed = d.css("transitionDuration") && "undefined" != d.css("transitionDuration") && "" != d.css("transitionDuration") ? 10 * parseFloat(d.css("transitionDuration").substr(0, d.css("transitionDuration").length - 1), 10).toFixed(1) / 10 + "s" : "0s", i.animRange = h.match(/(june-x|june-y|june-r|june-s|june-n|)-shake(-s|-m|-l)/g)[0].replace(/(june-x|june-y|june-r|june-s|june-n|)-shake/g, "")
						} catch (k) {
							i.animType = "", i.animSpeed = "0s", i.animRange = "-s"
						}
						d = d.children(".shake")
					}
					i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), i.tipText = "", d.attr("title") && "" != d.attr("title") && (i.tipText = d.attr("title")), i.customContent = d.html(), i.oveflowMode = d.css("overflow"), d.attr("data-o") && (i.oveflowMode = d.attr("data-o")), l = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(l)), a.children(b.appOtherCls).html(f.customContent), a.attr("appID", i.appID), e(g, i.appID)
				}
			}, {
				appID: "",
				customContent: "",
				animType: "",
				animSpeed: "0.3s",
				animRange: "-m",
				tipText: "",
				oveflowMode: "visible"
			}],
			jkcb: ['<div class="j-fnd t-app" data-dblType="jkcb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;开场动画",
				tUrl: "kaichang.php",
				tSubmit: function (a, b) {
					var c = require("scripts/tAjax"),
						d = b.children(".j-tazb");
					"imgContent" == a.contentType ? (checkUrl(a.pSrc) ? (d.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : d.css({
						backgroundImage: "none"
					}), d.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(d, RGBToHex(a.bgColor, ""), ""), b.children(".t-app-custom").html("")) : (d.css("background", "none"), b.children(".t-app-custom").html(a.customContent + '<div class="jjzz"></div>')), ("june-mr-lx" == a.cssModeX || "june-mr-rx" == a.cssModeX) && (a.cssModeX += a.cssModeX_num), ("june-mr-uy" == a.cssModeY || "june-mr-dy" == a.cssModeY) && (a.cssModeY += a.cssModeY_num), b.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div>',
				codeExport: function () {
					return "${!jkcb}"
				},
				codeImport: function (a, c, d, e) {
					var l, m, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.children("div:eq(1)").children(),
						i = {},
						j = {},
						k = "";
					j.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), j.tipText = "", d.attr("title") && "" != d.attr("title") && (j.tipText = d.attr("title")), i = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
						contentCls: "c188223",
						navCls: "n188223",
						easing: "linear",
						autoplay: !1,
						activeTriggerCls: "",
						pauseOnHover: !1,
						switchTo: 0
					}, j.href = d.children("a").attr("href") || "", j.hrefMode = d.children("a").attr("target") || "_self", k = i.activeTriggerCls + " ", j.customContent = h.html(), j.displayMode = "", j.cssModeX = "", j.cssModeY = "", j.cssMode = "", j.cssSpeed = "", /june-mr-fi1|june-mr-fo0/.test(k) && (j.displayMode = k.match(/(june-mr-fi1|june-mr-fo0|june-mr-fds)(\S)*?(?=\s)/g)[0]), /june-mr-lx|june-mr-rx/.test(k) && (j.cssModeX = k.match(/(june-mr-fromleft|june-mr-fromright|june-mr-lx|june-mr-rx)(\S)*?(?=\s)/g)[0]), /june-mr-uy|june-mr-dy/.test(k) && (j.cssModeY = k.match(/(june-mr-fromtop|june-mr-frombottom|june-mr-uy|june-mr-dy)(\S)*?(?=\s)/g)[0]), /june-mr-f?r[0-9]|june-mr-sf|june-mr-fx|june-mr-fy/.test(k) && (j.cssMode = k.match(/(june-mr-f?r[0-9]|june-mr-sf|june-mr-fx|june-mr-fy)(\S)*?(?=\s)/g)[0]), /trans/.test(k) && (j.cssSpeed = k.match(/(trans)(\S)*?(?=\s)/g)[0]), j.cssDelay = h.css("transitionDelay") || "0s", "" == j.cssDelay && (j.cssDelay = "0s"), l = h.css("transitionTimingFunction"), j.cssBezier = "", j.cssWeight = "1", "cubic-bezier(1, 0, 1, 0)" == l && (j.cssBezier = "bs", j.cssWeight = "1"), "cubic-bezier(1, 0, 1, 1)" == l && (j.cssBezier = "bs", j.cssWeight = "2"), "cubic-bezier(0.42, 0, 1, 1)" == l && (j.cssBezier = "bs", j.cssWeight = "3"), "cubic-bezier(0, 1, 0, 1)" == l && (j.cssBezier = "bq", j.cssWeight = "1"), "cubic-bezier(0, 0, 0, 1)" == l && (j.cssBezier = "bq", j.cssWeight = "2"), "cubic-bezier(0, 0, 0.58, 1)" == l && (j.cssBezier = "bq", j.cssWeight = "3"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == l && (j.cssBezier = "bt", j.cssWeight = "1"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == l && (j.cssBezier = "bt", j.cssWeight = "2"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == l && (j.cssBezier = "bt", j.cssWeight = "3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == l && (j.cssBezier = "bc", j.cssWeight = "1"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == l && (j.cssBezier = "bc", j.cssWeight = "2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == l && (j.cssBezier = "bc", j.cssWeight = "3"), "cubic-bezier(0.5, 1, 1, 0)" == l && (j.cssBezier = "bd", j.cssWeight = "1"), "cubic-bezier(0.5, 1, 0.5, 0)" == l && (j.cssBezier = "bd", j.cssWeight = "2"), "cubic-bezier(1, 1, 0.5, 0)" == l && (j.cssBezier = "bd", j.cssWeight = "3"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == l && (j.cssBezier = "bx", j.cssWeight = "1"), "cubic-bezier(0.5, 2, 0.5, -1)" == l && (j.cssBezier = "bx", j.cssWeight = "2"), "cubic-bezier(0.5, 3, 0.5, 0)" == l && (j.cssBezier = "bx", j.cssWeight = "3"), h.children(".jkcbac").length < 1 ? (j.contentType = "customContent", j.customContent = h.html(), j.pSrc = "") : (j.contentType = "imgContent", j.customContent = "", j.pSrc = h.css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.bgColor = RGBToHex(h.css("background-color"), ""), j.imgBgp = h.css("background-position") || "50% 50%", j.href = h.children("a").attr("href") || "", j.hrefMode = h.children("a").attr("target") || "_self"), m = $.extend(!0, f, j), a.attr("data-config", JSON.stringify(m)), a.width(h.width()).height(h.height()), b.appConfig["jkcb"][1].tSubmit(m, a), a.attr("appID", j.appID), e(g, j.appID)
				}
			}, {
				appID: "",
				displayMode: "june-mr-fi1",
				cssTrigger: "",
				cssModeX: "june-mr-rx80",
				cssModeY: "",
				cssMode: "",
				cssBezier: "",
				cssWeight: "1",
				cssSpeed: "trans05s",
				cssDelay: "0s",
				contentType: "imgContent",
				pSrc: "https://img.alicdn.com/imgextra/i2/800803731/TB2_QSqk3xlpuFjy0FoXXa.lXXa_!!800803731.png",
				imgBgp: "50% 50%",
				bgColor: "",
				autoSize: "yes",
				customContent: "",
				href: "",
				hrefMode: "_blank",
				tipText: ""
			}],
			jxdb: ['<div class="j-fnd t-app" data-dblType="jxdb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;循环动画",
				tUrl: "xunhuan.php",
				tSubmit: function (a, b) {
					var c = require("scripts/tAjax"),
						d = b.children(".j-tazb");
					"imgContent" == a.contentType ? (checkUrl(a.pSrc) ? (d.css({
						backgroundImage: "url(" + a.pSrc + ")"
					}), "yes" == a.autoSize && c.ajaxJsonForGis({
						img: a.pSrc
					}, function (a) {
						var c = a[0],
							d = a[1];
						c && b.width(c), d && b.height(d)
					})) : d.css({
						backgroundImage: "none"
					}), d.css({
						backgroundPosition: a.imgBgp || "50% 50%"
					}), submitColor(d, RGBToHex(a.bgColor, ""), ""), b.children(".t-app-custom").html("")) : (d.css("background", "none"), b.children(".t-app-custom").html(a.customContent + '<div class="jjzz"></div>')), ("june-mr-lx" == a.cssModeX || "june-mr-rx" == a.cssModeX) && (a.cssModeX += a.cssModeX_num), ("june-mr-uy" == a.cssModeY || "june-mr-dy" == a.cssModeY) && (a.cssModeY += a.cssModeY_num), b.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div>',
				codeExport: function () {
					return "${!jxdb}"
				},
				codeImport: function (a, c, d, e) {
					var l, m, n, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = d.children("div:eq(1)").children(),
						i = {},
						j = {},
						k = "";
					for (j.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), j.tipText = "", d.attr("title") && "" != d.attr("title") && (j.tipText = d.attr("title")), i = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
							contentCls: "c188223",
							navCls: "n188223",
							easing: "linear",
							autoplay: !0,
							activeTriggerCls: "",
							pauseOnHover: !1,
							switchTo: 0
						}, j.cssPauseHover = i.pauseOnHover === !1 || "false" == i.pauseOnHover ? "no" : "yes", j.href = d.children("a").attr("href") || d.find(".jxdbac").attr("href") || "", j.hrefMode = d.children("a").attr("target") || d.find(".jxdbac").attr("target") || "_self", j.cssSpeed = null, j.displayMode = "", j.cssModeX = "", j.cssModeY = "", j.cssMode = "", j.cssDelay = h.attr("data-d") || h.css("transitionDelay") || "0s", l = 0; 6 > l && (k = h.children().attr("class"), !/jxdbc/.test(k)); l++) /june-mr-fo0/.test(k) && (j.displayMode = "june-mr-fo0"), /june-mr-fo1/.test(k) && (j.displayMode = "june-mr-fo1 june-box-fadein"), /june-mr-lx|june-mr-rx/.test(k) && (j.cssModeX = k.match(/(june-mr-fromleft|june-mr-fromright|june-mr-lx|june-mr-rx)(\S)*?(?=\s)/g)[0]), /june-mr-uy|june-mr-dy/.test(k) && (j.cssModeY = k.match(/(june-mr-fromtop|june-mr-frombottom|june-mr-uy|june-mr-dy)(\S)*?(?=\s)/g)[0]), /june-mr-f?r[0-9]/.test(k) && (j.cssMode = k.match(/(june-mr-f?r[0-9])(\S)*?(?=\s)/g)[0]), /june-mr-sf/.test(k) && (j.cssMode_sf = k.match(/(june-mr-sf)(\S)*?(?=\s)/g)[0]), /june-mr-fx|june-mr-fy/.test(k) && (j.cssMode_fz = k.match(/(june-mr-fx|june-mr-fy)(\S)*?(?=\s)/g)[0]), /trans/.test(k) && !j.cssSpeed && (j.cssSpeed = k.match(/(trans)(\S)*?(?=\s|$)/g)[0]), h = h.children();
					j.customContent = h.children(".jxdbc").html(), j.css1Type = h.children(".jxdbc").length > 0 && h.children(".jxdbc").hasClass("a-1") ? "j-a" : "normal", "" == j.cssDelay && (j.cssDelay = "0s"), m = h.css("transitionTimingFunction"), j.cssBezier = "", j.cssWeight = "1", "cubic-bezier(1, 0, 1, 0)" == m && (j.cssBezier = "bs", j.cssWeight = "1"), "cubic-bezier(1, 0, 1, 1)" == m && (j.cssBezier = "bs", j.cssWeight = "2"), "cubic-bezier(0.42, 0, 1, 1)" == m && (j.cssBezier = "bs", j.cssWeight = "3"), "cubic-bezier(0, 1, 0, 1)" == m && (j.cssBezier = "bq", j.cssWeight = "1"), "cubic-bezier(0, 0, 0, 1)" == m && (j.cssBezier = "bq", j.cssWeight = "2"), "cubic-bezier(0, 0, 0.58, 1)" == m && (j.cssBezier = "bq", j.cssWeight = "3"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == m && (j.cssBezier = "bt", j.cssWeight = "1"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == m && (j.cssBezier = "bt", j.cssWeight = "2"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == m && (j.cssBezier = "bt", j.cssWeight = "3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == m && (j.cssBezier = "bc", j.cssWeight = "1"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == m && (j.cssBezier = "bc", j.cssWeight = "2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == m && (j.cssBezier = "bc", j.cssWeight = "3"), "cubic-bezier(0.5, 1, 1, 0)" == m && (j.cssBezier = "bd", j.cssWeight = "1"), "cubic-bezier(0.5, 1, 0.5, 0)" == m && (j.cssBezier = "bd", j.cssWeight = "2"), "cubic-bezier(1, 1, 0.5, 0)" == m && (j.cssBezier = "bd", j.cssWeight = "3"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == m && (j.cssBezier = "bx", j.cssWeight = "1"), "cubic-bezier(0.5, 2, 0.5, -1)" == m && (j.cssBezier = "bx", j.cssWeight = "2"), "cubic-bezier(0.5, 3, 0.5, 0)" == m && (j.cssBezier = "bx", j.cssWeight = "3"), h.children(".jxdbc").children(".jxdbac").length < 1 ? (j.contentType = "customContent", j.customContent = h.children(".jxdbc").html(), j.pSrc = "") : (j.contentType = "imgContent", j.customContent = "", j.pSrc = h.children(".jxdbc").css("background-image").replace(/^url|[\(\"\)]*/g, ""), j.bgColor = RGBToHex(h.children(".jxdbc").css("background-color"), ""), j.imgBgp = h.children(".jxdbc").css("background-position") || "50% 50%"), n = $.extend(!0, f, j), a.attr("data-config", JSON.stringify(n)), a.width(h.width()).height(h.height()), b.appConfig["jxdb"][1].tSubmit(n, a), a.attr("appID", j.appID), e(g, j.appID)
				}
			}, {
				appID: "",
				displayMode: "",
				cssPauseHover: "no",
				cssModeX: "",
				cssModeY: "",
				css1Type: "normal",
				cssMode: "june-mr-r30",
				cssMode_sf: "",
				cssMode_fz: "",
				cssBezier: "bq",
				cssWeight: "3",
				cssSpeed: "trans2s",
				cssDelay: "0s",
				contentType: "imgContent",
				pSrc: "https://img.alicdn.com/imgextra/i2/800803731/TB2.DGTm5RnpuFjSZFCXXX2DXXa_!!800803731.png",
				imgBgp: "50% 50%",
				bgColor: "",
				autoSize: "yes",
				customContent: "",
				href: "",
				hrefMode: "_blank",
				tipText: ""
			}],
			jxxb: ['<div class="j-fnd t-app" data-dblType="jxxb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;动画序列",
				tUrl: "dhxulie.php",
				tSubmit: function (a, c) {
					var h, i, l, j, k, d = require("scripts/tAjax"),
						e = require("scripts/appManage"),
						f = require("scripts/childDongHuaXuLie");
					if (a.childConfig, a.childConfig && a.childConfig.length > 0)
						for (h in a.childConfig) i = a.childConfig[h], i && i.attachID && (j = i.attachID, k = c.children(b.appChildCls + "[attachID='" + j + "']"), 0 == k.length && f.create("jxxbChild", c, function (a, d, f) {
							e.callback(a, d, f), k = c.children(b.appChildCls + "[attachID='" + f + "']")
						}, i), k.appendTo(c), k.attr("data-inr", "yes"), l = k.children(".j-tazb"), "imgContent" == i.contentType ? (checkUrl(i.pSrc) ? (l.css({
							backgroundImage: "url(" + i.pSrc + ")"
						}), "yes" == i.autoSize && function (a, b) {
							d.ajaxJsonForGis({
								img: a.pSrc
							}, function (a) {
								var c = a[0],
									d = a[1];
								c && b.width(c), d && b.height(d)
							})
						}(i, k)) : l.css({
							backgroundImage: "none"
						}), l.css({
							backgroundPosition: i.imgBgp || "50% 50%"
						}), submitColor(l, RGBToHex(i.bgColor, ""), ""), l.html("")) : (l.css("background", "none"), l.html(i.customContent + '<div class="jjzz"></div>')), ("june-mr-lx" == i.cssModeX || "june-mr-rx" == i.cssModeX) && (i.cssModeX += i.cssModeX_num), ("june-mr-uy" == i.cssModeY || "june-mr-dy" == i.cssModeY) && (i.cssModeY += i.cssModeY_num));
					c.children(b.appChildCls + "[data-inr!='yes']").each(function () {
						var a = $(this),
							b = a.attr("appID"),
							c = a.attr("attachID");
						e.remove(b, c)
					}), c.children(b.appChildCls + "[data-inr='yes']").attr("data-inr", "no"), c.attr("data-config", JSON.stringify(a))
				},
				tContent: '<div class="t-app-other t-app-custom"></div>',
				tDynamic: '<div class="t-app-child" data-dblType="jxxb" data-attachType="jxxbChild"></div>',
				tDynamicConfig: {
					attachID: "",
					displayMode: "",
					cssModeX: "",
					cssModeY: "june-mr-uy15",
					cssMode: "",
					cssMode_sf: "",
					cssMode_fz: "",
					contentType: "imgContent",
					pSrc: "https://img.alicdn.com/imgextra/i4/800803731/TB2.Te0mYlmpuFjSZFlXXbdQXXa_!!800803731.png",
					imgBgp: "50% 50%",
					bgColor: "",
					autoSize: "yes",
					customContent: "",
					href: "",
					hrefMode: "_blank",
					tipText: ""
				},
				codeExport: function () {
					return "${!jxxb}"
				},
				codeImport: function (a, c, d, e) {
					var l, p, q, r, f = JSON.parse(a.attr("data-config")),
						g = require("scripts/childDongHuaXuLie"),
						i = (require("scripts/appManage"), a.attr("data-dblType")),
						j = d.children("div:eq(1)").children(),
						m = "",
						n = {},
						o = {};
					for (o.childConfig = [], o.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), o.overflowMode = d.css("overflow"), "visible" != o.overflowMode && (o.overflowMode = "hidden"), d.hasClass("u-a") && (o.overflowMode = "visibleX"), d.hasClass("j-zdv") && (o.overflowMode = "visible"), n = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
							contentCls: "c188223",
							navCls: "n188223",
							easing: "linear",
							autoplay: !0,
							activeTriggerCls: "",
							pauseOnHover: !1,
							switchTo: 0
						}, o.cssPauseHover = n.pauseOnHover === !1 || "false" == n.pauseOnHover ? "no" : "yes", o.cssSpeed = null, l = j.eq(0), o.cssDelay = l.attr("data-d") || "1s", "" == o.cssDelay && (o.cssDelay = "1s"), p = d.children("div:eq(1)").children("div:eq(0)").children("div:eq(0)").css("transitionTimingFunction"), o.cssBezier = "", o.cssWeight = "1", "cubic-bezier(1, 0, 1, 0)" == p && (o.cssBezier = "bs", o.cssWeight = "1"), "cubic-bezier(1, 0, 1, 1)" == p && (o.cssBezier = "bs", o.cssWeight = "2"), "cubic-bezier(0.42, 0, 1, 1)" == p && (o.cssBezier = "bs", o.cssWeight = "3"), "cubic-bezier(0, 1, 0, 1)" == p && (o.cssBezier = "bq", o.cssWeight = "1"), "cubic-bezier(0, 0, 0, 1)" == p && (o.cssBezier = "bq", o.cssWeight = "2"), "cubic-bezier(0, 0, 0.58, 1)" == p && (o.cssBezier = "bq", o.cssWeight = "3"), "cubic-bezier(0.5, 2.2, 1, 0.8)" == p && (o.cssBezier = "bt", o.cssWeight = "1"), "cubic-bezier(0.5, 2.2, 0.5, 0.8)" == p && (o.cssBezier = "bt", o.cssWeight = "2"), "cubic-bezier(1, 2.2, 0.5, 0.8)" == p && (o.cssBezier = "bt", o.cssWeight = "3"), "cubic-bezier(0.5, 0.2, 1, -1.2)" == p && (o.cssBezier = "bc", o.cssWeight = "1"), "cubic-bezier(0.5, 0.2, 0.5, -1.2)" == p && (o.cssBezier = "bc", o.cssWeight = "2"), "cubic-bezier(1, 0.2, 0.5, -1.2)" == p && (o.cssBezier = "bc", o.cssWeight = "3"), "cubic-bezier(0.5, 1, 1, 0)" == p && (o.cssBezier = "bd", o.cssWeight = "1"), "cubic-bezier(0.5, 1, 0.5, 0)" == p && (o.cssBezier = "bd", o.cssWeight = "2"), "cubic-bezier(1, 1, 0.5, 0)" == p && (o.cssBezier = "bd", o.cssWeight = "3"), "cubic-bezier(0.5, 1.5, 0.5, -1.5)" == p && (o.cssBezier = "bx", o.cssWeight = "1"), "cubic-bezier(0.5, 2, 0.5, -1)" == p && (o.cssBezier = "bx", o.cssWeight = "2"), "cubic-bezier(0.5, 3, 0.5, 0)" == p && (o.cssBezier = "bx", o.cssWeight = "3"), q = 0; 6 > q && (m = l.children().attr("class"), !/jxxbc/.test(m)); q++) /trans/.test(m) && !o.cssSpeed && (o.cssSpeed = m.match(/(trans)(\S)*?(?=\s|$)/g)[0]), l = l.children();
					r = $.extend(!0, f, o), a.attr("data-config", JSON.stringify(r)), b.appConfig["jxxb"][1].tSubmit(r, a), a.attr("appID", o.appID), j.each(function () {
						var k, e = _t = $(this),
							f = {},
							h = "",
							i = 0,
							j = 0;
						for (i = b.tParseInt(_t.css("left")), j = b.tParseInt(_t.css("top")), f.width = _t.width(), f.height = _t.height(), f.attachID = _t.attr("data-appid") || "", f.displayMode = "", f.cssMode_sf = "", f.cssMode_xz = "", f.cssMode_fz = "", f.cssModeX = "", f.cssModeY = "", f.cssMode = "", k = 0; 6 > k && (h = e.children().attr("class") + " ", !/jxxbc/.test(h)); k++) /june-mr-fo0/.test(h) && (f.displayMode = "june-mr-fo0"), /june-mr-fo1/.test(h) && (f.displayMode = "june-mr-fo1 june-box-fadein"), /june-mr-fromleft|june-mr-fromright|june-mr-lx|june-mr-rx/.test(h) && (f.cssModeX = h.match(/(june-mr-fromleft|june-mr-fromright|june-mr-lx|june-mr-rx)(\S)*?(?=\s)/g)[0]), /june-mr-fromtop|june-mr-frombottom|june-mr-uy|june-mr-dy/.test(h) && (f.cssModeY = h.match(/(june-mr-fromtop|june-mr-frombottom|june-mr-uy|june-mr-dy)(\S)*?(?=\s)/g)[0]), /june-mr-f?r[0-9]/.test(h) && (f.cssMode = h.match(/(june-mr-f?r[0-9])(\S)*?(?=\s)/g)[0]), /june-mr-sf/.test(h) && (f.cssMode_sf = h.match(/(june-mr-sf)(\S)*?(?=\s)/g)[0]), /june-mr-fx|june-mr-fy/.test(h) && (f.cssMode_fz = h.match(/(june-mr-fx|june-mr-fy)(\S)*?(?=\s)/g)[0]), e = e.children();
						f.customContent = e.children(".jxxbc").html(), f.href = e.children(".jxxbc").children("a").attr("href") || "", f.hrefMode = e.children(".jxxbc").children("a").attr("target") || "_self", f.autoSize = "no", f.tipText = "", e.children(".jxxbc").attr("title") && "" != e.children(".jxxbc").attr("title") && (f.tipText = e.children(".jxxbc").attr("title")), e.children(".jxxbc").children(".jxxbac").length < 1 ? (f.contentType = "customContent", f.customContent = e.children(".jxxbc").html(), f.pSrc = "") : (f.contentType = "imgContent", f.customContent = "", f.pSrc = e.children(".jxxbc").css("background-image").replace(/^url|[\(\"\)]*/g, ""), f.bgColor = RGBToHex(e.children(".jxxbc").css("background-color"), ""), f.imgBgp = e.children(".jxxbc").css("background-position") || "50% 50%"),
							function (b) {
								g.createAuto("jxxb", a, i, j, b, function (a, b, c) {
									var d = require("scripts/appManage");
									d.callback("jxxbChild", b, c)
								})
							}(f)
					}), a.width(d.width()).height(d.height()), e(i, o.appID)
				}
			}, {
				appID: "",
				cssPauseHover: "yes",
				cssSpeed: "trans02s",
				cssDelay: "1s",
				cssBezier: "bq",
				cssWeight: "3",
				overflowMode: "visible",
				childConfig: []
			}],
			jrwb: ['<div class="j-fnd t-app" data-dblType="jrwb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;计划任务",
				tUrl: "plan.php",
				tSubmit: function (a, c) {
					var d = a.childConfig;
					c.children(b.appOtherCls).html(d[0].customContent), c.attr("data-config", JSON.stringify(a))
				},
				tDynamic: "",
				tDynamicConfig: {
					attachID: "",
					startTime: "",
					endTime: "",
					customContent: ""
				},
				tContent: '<div class="t-app-other t-app-custom"></div>',
				codeExport: function () {
					return "${!jrwb}"
				},
				codeImport: function (a, c, d, e) {
					var k, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						h = {},
						j = d.attr("data-rp");
					h.childConfig = [], h.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h.tipText = "", d.attr("title") && "" != d.attr("title") && (h.tipText = d.attr("title")), d.find(".rp" + j).each(function (a) {
						var g, d = $(this),
							e = {},
							f = d.children(".jrwb_s");
						b.setAttachID(e), d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 && (g = JSON.parse(d.attr("data-widget-config").replace(/'/g, '"'))), e.startTime = "", a > 0 && (e.startTime = h.childConfig[a - 1].endTime), e.customContent = f.html(), e.endTime = g.endTime, h.childConfig.push(e)
					}), k = $.extend(!0, f, h), a.attr("data-config", JSON.stringify(k)), a.children(b.appOtherCls).html(f.childConfig[0].customContent), a.attr("appID", h.appID), e(g, h.appID)
				}
			}, {
				appID: "",
				tipText: "",
				childConfig: [{
					attachID: "",
					startTime: "",
					endTime: "",
					customContent: ""
				}]
			}],
			juneCustom: ['<div class="j-fnd t-app junehtml abs" style="left:0;top:0;" data-dblType="juneCustom"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;自定义HTML",
				codeExport: function (a) {
					a.tResize("destory");
					var b = a.removeClass("j-fnd").prop("outerHTML");
					return a.addClass("j-fnd"), a.tResize({
						tSwitch: !1
					}), b
				},
				codeImport: function (a) {
					var c = a.html(),
						d = require("scripts/action");
					c = c.replace(/ href\=\"/g, ' junehref="'), b.june.children(".junehtml").length <= 0 ? ($(b.appConfig["juneCustom"][0]).html(c).tResize({
						tSwitch: !1
					}).prependTo(b.june), b.june.children(".t-app-junebg").length > 0 && b.june.children(".t-app-junebg").prependTo(b.june)) : b.june.children(".junehtml").html(c), b.june.children(".junehtml").find("img").addClass("jhi-img"), d.create("junehtml", b.june.children(".junehtml"))
				}
			}, {
				appID: ""
			}],
			jsfb: ['<div class="j-fnd t-app" data-dblType="jsfb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;店铺分类",
				tUrl: "flset.php",
				tContent: "",
				tSubmit: function (a, c) {
					var j, l, m, n, o, p, q, r, s, u, v, w, x, y, z, A, d = require("scripts/drawDianPuFenLei"),
						e = $.extend([], a.catsArray),
						f = JSON.parse(c.attr("data-catsConfig") || "[]"),
						g = JSON.parse(c.attr("data-config") || "{}"),
						h = g.shopHref,
						i = a.shopHref,
						k = g.catsArray;
					if ("number" == typeof e[0])
						for (l = 0; l < e.length; l++) e[l] += "";
					if ("/" != i.substr(-1) && (i += "/"), i = "https://" + i.replace(/http\:\/\//g, "").replace(/https\:\/\//g, ""), h = "https://" + h.replace(/http\:\/\//g, "").replace(/https\:\/\//g, ""), a.childConfig.length > 0 ? (j = $.extend({}, a.childConfig[0]), a.childConfig = []) : a.childConfig = [], c.attr("data-config", JSON.stringify(a)), m = b.equalsArray(e, k), (a.catsWidth != g.catsWidth || a.catsHeight != g.catsHeight || a.subCatsWidth != g.subCatsWidth || a.subCatsHeight != g.subCatsHeight) && (m = !1), a.isAct && (m = !1, delete a.isAct), h != i && (m = !1, c.attr("data-shopHref", i).attr("data-catsConfig", JSON.stringify(b.tempCatPost)), f = b.tempCatPost, b.tempCatPost = void 0, j = void 0), !m && f && f.length > 0) {
						for (c.children(b.appChildCls).addClass("jsfbchildd").hide(), d.getFormatPos("init", a), l = 0; l < f.length; l++)
							if (f[l] && (n = f[l].name, o = f[l].id, p = f[l].subCats, $.inArray(o, e) >= 0 && (d.creatChild(c, o, n), p && p.length > 0)))
								for (u = 0; u < p.length; u++) p[u] && (q = p[u].name, r = p[u].id, $.inArray(r, e) >= 0 && d.creatChild(c, r, q, !0));
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
					}), j && (x = j.attachID, y = c.children(b.appChildCls + "[attachID='" + x + "']"), z = JSON.parse(y.attr("data-attachConfig")), y.length > 0 && (A = b.equals(j, z), A || (y.attr("data-attachConfig", JSON.stringify(j)).html('<span class="jsfbText">' + j.characterContent + "</span>").css({
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
					href: "",
					hrefID: "",
					catsType: "",
					characterContent: ""
				},
				codeExport: function () {
					return "${!jsfb}"
				},
				codeImport: function (a, c, d, e) {
					var i, j, o, f = JSON.parse(a.attr("data-config")),
						g = require("scripts/drawDianPuFenLei"),
						h = a.attr("data-dblType"),
						l = d.attr("data-t") || "0;0;0;0",
						m = [],
						n = {};
					n.catsArray = [], n.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), m = l.split(";"), n.formatName = d.attr("data-fname"), n.catsWidth = m[0], n.catsHeight = m[1], n.subCatsWidth = m[2], n.subCatsHeight = m[3], n.shopHref = d.attr("data-shopHref") || "", ("/" == n.shopHref || n.shopHref.indexOf("shop.id") >= 0) && (n.shopHref = "juneappcategory"), a.attr("data-shopHref", n.shopHref), a.attr("data-formatName", n.formatName), g.getFormatPos("init", f), d.children(".jsfbchilda").length > 0 && (i = d.children(".jsfbchilda:not(.jsfbchildc)").length > 0 ? d.children(".jsfbchilda:not(.jsfbchildc)").eq(0) : d.children(".jsfbchilda").eq(0), n.hrefMode = i.children("a:eq(0)").attr("target") || "_self", n.characterBgSrc = i.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterAlign = i.css("text-align") || "left", n.characterSize = i.children("a:eq(0)").css("font-size").replace(/px/g, ""), n.characterFont = i.children("a:eq(0)").css("font-family").replace(/'/g, ""), n.characterColor = RGBToHex(i.children("a:eq(0)").css("color")), n.characterBgColor = RGBToHex(i.children("a:eq(0)").css("background-color"), ""), n.characterWeight = i.children("a:eq(0)").css("font-weight"), "400" == n.characterWeight && (n.characterWeight = "normal"), n.characterDash = "off", n.catsSpace = "left" == n.characterAlign ? Math.abs(b.tParseInt(i.children("a:eq(0)").css("right"))) : "right" == n.characterAlign ? Math.abs(b.tParseInt(i.children("a:eq(0)").css("left"))) : "", i.children("a").length > 1 && (n.characterUnderLine = "off", n.characterHoverMode = "on", n.characterHoverSpeed = i.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), n.characterHoverSpeed = n.characterHoverSpeed && n.characterHoverSpeed.length > 0 ? n.characterHoverSpeed.join("") : "", n.characterBgSrcHover = i.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterSizeHover = i.children("a:eq(1)").css("font-size").replace(/px/g, ""), n.characterFontHover = i.children("a:eq(1)").css("font-family").replace(/'/g, ""), n.characterColorHover = RGBToHex(i.children("a:eq(1)").css("color")), n.characterBgColorHover = RGBToHex(i.children("a:eq(1)").css("background-color"), ""), n.characterWeightHover = i.children("a:eq(1)").css("font-weight"), "400" == n.characterWeightHover && (n.characterWeightHover = "normal"), n.characterUnderLineWeight = i.children("a:eq(0)").height() - i.children("a:eq(1)").height(), 0 != n.characterUnderLineWeight ? (n.characterUnderLine = "on", n.characterUnderLineStyle = i.children("a:eq(1)").css("border-bottom-style"), n.characterUnderLineColor = RGBToHex(i.children("a:eq(1)").css("border-bottom-color")), n.characterUnderLineWeight += "") : n.characterUnderLineWeight = "1"), "line-through" == i.children("a:eq(0)").css("text-decoration") && (n.characterDash = "on")), d.children(".jsfbchildb").length > 0 && (j = d.children(".jsfbchildb:not(.jsfbchildc)").length > 0 ? d.children(".jsfbchildb:not(.jsfbchildc)").eq(0) : d.children(".jsfbchildb").eq(0), n.hrefMode1 = j.children("a:eq(0)").attr("target") || "_self", n.characterBgSrc1 = j.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterAlign1 = j.css("text-align") || "left", n.characterSize1 = j.children("a:eq(0)").css("font-size").replace(/px/g, ""), n.characterFont1 = j.children("a:eq(0)").css("font-family").replace(/'/g, ""), n.characterColor1 = RGBToHex(j.children("a:eq(0)").css("color")), n.characterBgColor1 = RGBToHex(j.children("a:eq(0)").css("background-color"), ""), n.characterWeight1 = j.children("a:eq(0)").css("font-weight"), "400" == n.characterWeight1 && (n.characterWeight1 = "normal"), n.characterDash1 = "off", n.catsSpace1 = "left" == n.characterAlign1 ? Math.abs(b.tParseInt(j.children("a:eq(0)").css("right"))) : "right" == n.characterAlign1 ? Math.abs(b.tParseInt(j.children("a:eq(0)").css("left"))) : "", j.children("a").length > 1 && (n.characterUnderLine1 = "off", n.characterHoverMode1 = "on", n.characterHoverSpeed1 = j.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), n.characterHoverSpeed1 = n.characterHoverSpeed1 && n.characterHoverSpeed1.length > 0 ? n.characterHoverSpeed1.join("") : "", n.characterBgSrcHover1 = j.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), n.characterSizeHover1 = j.children("a:eq(1)").css("font-size").replace(/px/g, ""), n.characterFontHover1 = j.children("a:eq(1)").css("font-family").replace(/'/g, ""), n.characterColorHover1 = RGBToHex(j.children("a:eq(1)").css("color")), n.characterBgColorHover1 = RGBToHex(j.children("a:eq(1)").css("background-color"), ""), n.characterWeightHover1 = j.children("a:eq(1)").css("font-weight"), "400" == n.characterWeightHover1 && (n.characterWeightHover1 = "normal"), n.characterUnderLineWeight1 = j.children("a:eq(0)").height() - j.children("a:eq(1)").height(), 0 != n.characterUnderLineWeight1 ? (n.characterUnderLine1 = "on", n.characterUnderLineStyle1 = j.children("a:eq(1)").css("border-bottom-style"), n.characterUnderLineColor1 = RGBToHex(j.children("a:eq(1)").css("border-bottom-color")), n.characterUnderLineWeight1 += "") : n.characterUnderLineWeight1 = "1"), "line-through" == j.children("a:eq(0)").css("text-decoration") && (n.characterDash1 = "on")), o = $.extend(f, n), a.attr("data-config", JSON.stringify(o)), a.attr("appID", n.appID), d.children(".jsfbchild").each(function () {
						var e, f, h, c = $(this),
							d = {};
						d.href = c.children("a:eq(0)").attr("href") || "", d.catsType = c.attr("data-catsType") || "b", d.hrefID = c.attr("data-catsID") || "", d.hrefMode = c.children("a:eq(0)").attr("target") || "_self", d.characterBgSrc = c.children("a:eq(0)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.characterAlign = c.css("text-align") || "left", d.characterContent = c.children("a:eq(0)").html(), d.characterSize = c.children("a:eq(0)").css("font-size").replace(/px/g, ""), d.characterFont = c.children("a:eq(0)").css("font-family").replace(/'/g, ""), d.characterColor = RGBToHex(c.children("a:eq(0)").css("color")), d.characterBgColor = RGBToHex(c.children("a:eq(0)").css("background-color"), ""), d.characterWeight = c.children("a:eq(0)").css("font-weight"), "400" == d.characterWeight && (n.characterWeight = "normal"), d.characterDash = "off", d.catsSpace = "left" == d.characterAlign ? Math.abs(b.tParseInt(c.children("a:eq(0)").css("right"))) : "right" == d.characterAlign ? Math.abs(b.tParseInt(c.children("a:eq(0)").css("left"))) : "", c.children("a").length > 1 && (d.characterUnderLine = "off", d.characterHoverMode = "on", d.characterHoverSpeed = c.children("a:eq(1)").attr("class").match(/trans(\w+)s/g), d.characterHoverSpeed && d.characterHoverSpeed.length > 0 ? d.characterHoverSpeed = d.characterHoverSpeed.join("") : n.characterHoverSpeed = "", d.characterBgSrcHover = c.children("a:eq(1)").css("background-image").replace(/^url|[\(\"\)]*/g, ""), d.characterSizeHover = c.children("a:eq(1)").css("font-size").replace(/px/g, ""), d.characterFontHover = c.children("a:eq(1)").css("font-family").replace(/'/g, ""), d.characterColorHover = RGBToHex(c.children("a:eq(1)").css("color")), d.characterBgColorHover = RGBToHex(c.children("a:eq(1)").css("background-color"), ""), d.characterWeightHover = c.children("a:eq(1)").css("font-weight"), "400" == d.characterWeightHover && (n.characterWeightHover = "normal"), d.characterUnderLineWeight = c.children("a:eq(0)").height() - c.children("a:eq(1)").height(), 0 != d.characterUnderLineWeight ? (d.characterUnderLine = "on", d.characterUnderLineStyle = c.children("a:eq(1)").css("border-bottom-style"), d.characterUnderLineColor = RGBToHex(c.children("a:eq(1)").css("border-bottom-color")), d.characterUnderLineWeight += "") : d.characterUnderLineWeight = "1"), "line-through" == c.children("a:eq(0)").css("text-decoration") && (n.characterDash = "on"), e = d.characterContent, f = g.creatChild(a, d.hrefID, e, "b" == d.catsType), h = JSON.parse(f.attr("data-attachConfig")), f.css({
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
				characterFont: "微软雅黑",
				characterColor: "#000000",
				characterBgColor: "",
				characterDash: "off",
				characterHoverMode: "off",
				characterHoverSpeed: "",
				characterSizeHover: "12",
				characterWeightHover: "normal",
				characterFontHover: "微软雅黑",
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
				characterFont1: "微软雅黑",
				characterColor1: "#000000",
				characterBgColor1: "",
				characterDash1: "off",
				characterHoverMode1: "off",
				characterHoverSpeed1: "",
				characterSizeHover1: "12",
				characterWeightHover1: "normal",
				characterFontHover1: "微软雅黑",
				characterColorHover1: "#000000",
				characterBgColorHover1: "",
				characterUnderLine1: "off",
				characterUnderLineStyle1: "solid",
				characterUnderLineWeight1: "1",
				characterUnderLineColor1: "#000000",
				catsArray: [],
				childConfig: []
			}],
			jadb: ['<div class="j-fnd t-app" data-dblType="jadb" data-direction="right" data-multi="no" data-hidePanel="no" data-titleUnity="yes" data-panelUnity="yes"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;手风琴设置",
				tUrl: "accordion.php",
				tSubmit: function (a, c, d) {
					var l, n, p, q, r, s, t, u, v, w, x, y, z, e = a.adDirection,
						f = c.attr("data-direction"),
						g = c.attr("data-gSpace") || "",
						h = !1,
						i = !1,
						j = !1,
						k = a.adActive,
						o = [];
					if ("yes" == a.adMode && (h = !0), "yes" == c.attr("data-adch") ? "left" == e || "right" == e ? ("" != a.tWidth && $.isNumeric(a.tWidth) && (c.attr("data-pwhs", a.tWidth), a.tWidth = ""), "" != a.tHeight && $.isNumeric(a.tHeight) && (c.children(".t-jadb-title").height(a.tHeight), a.tHeight = ""), "" != a.pWidth && $.isNumeric(a.pWidth) && (c.attr("data-pwh", a.pWidth), a.pWidth = ""), "" != a.pHeight && $.isNumeric(a.pHeight) && (c.children(".t-jadb-panel").height(a.pHeight), a.pHeight = "")) : ("" != a.tWidth && $.isNumeric(a.tWidth) && (c.children(".t-jadb-title").width(a.tWidth), a.tWidth = ""), "" != a.tHeight && $.isNumeric(a.tHeight) && (c.attr("data-pwhs", a.tHeight), a.tHeight = ""), "" != a.pWidth && $.isNumeric(a.pWidth) && (c.children(".t-jadb-panel").width(a.pWidth), a.pWidth = ""), "" != a.pHeight && $.isNumeric(a.pHeight) && (c.attr("data-pwh", a.pHeight), a.pHeight = "")) : ("" != a.tWidth && $.isNumeric(a.tWidth) && (c.children(".t-jadb-title").width(a.tWidth), a.tWidth = ""), "" != a.tHeight && $.isNumeric(a.tHeight) && (c.children(".t-jadb-title").height(a.tHeight), a.tHeight = ""), "" != a.pWidth && $.isNumeric(a.pWidth) && (c.children(".t-jadb-panel").width(a.pWidth), a.pWidth = ""), "" != a.pHeight && $.isNumeric(a.pHeight) && (c.children(".t-jadb-panel").height(a.pHeight), a.pHeight = "")), ("yes" == a.adMode || "yes" == a.adCssMode) && (a.adHideMode = "no"), g == a.gSpace && (i = !0), a.gSpace && "" != a.gSpace && c.attr("data-gSpace", a.gSpace), c.children(".t-jadb-title").each(function (a) {
							o[a] = {};
							var d = $(this),
								e = c.children(".t-jadb-panel:eq(" + a + ")");
							o[a].tWidth = d.width(), o[a].tHeight = d.height(), o[a].pWidth = e.width(), o[a].pHeight = e.height(), o[a].isOpen = e.attr("data-opened") || "no"
						}), "yes" == a.adCssMode && "yes" == a.adHideTitle) "yes" != c.attr("data-adch") && c.attr("data-saveAcreage", JSON.stringify(o)), c.attr("data-adch", "yes"), "up" == e || "left" == e ? c.html(new Array(a.nestConfig.length + 1).join(b.appConfig["jadb"][1].tDynamic)) : c.html(new Array(a.nestConfig.length + 1).join(b.appConfig["jadb"][1].tDynamic1)), c.attr("data-direction", e), j = !0;
					else {
						if ("yes" == c.attr("data-adch")) {
							o = $.extend(!0, {}, o, JSON.parse(c.attr("data-saveAcreage") || "{}"));
							for (p in o) "left" == e || "right" == e ? (o[p].tWidth = c.attr("data-pwhs"), o[p].pWidth = c.attr("data-pwh")) : (o[p].tHeight = c.attr("data-pwhs"), o[p].pHeight = c.attr("data-pwh"));
							c.removeAttr("data-pwhs").removeAttr("data-pwh")
						}
						c.attr("data-adch", "no"), f != e ? (c.removeClass("t-jadb-left t-jadb-right t-jadb-up t-jadb-down"), c.addClass("t-jadb-" + e), b.posForAccordion(c, e, a.nestConfig.length), c.attr("data-direction", e)) : a.nestConfig.length == c.children(".t-jadb-title").length && i || !j && b.posForAccordion(c, e, a.nestConfig.length)
					}
					for (n = c.children(".t-jadb-panel:eq(" + (b.tParseInt(k) - 1) + ")"), l = n.prev(), ("down" == e || "right" == e) && (l = n.next()), p = 0; p < a.nestConfig.length; p++) q = a.nestConfig[p], r = c.children(".t-jadb-title:eq(" + p + ")"), s = c.children(".t-jadb-panel:eq(" + p + ")"), t = o[p], u = o[0].tWidth, v = o[0].tHeight, w = o[0].pWidth, x = o[0].pHeight, t && (u = t.tWidth, v = t.tHeight, w = t.pWidth, x = t.pHeight), o[p] && s.attr("data-opened", o[p].isOpen), "imgContent" == q.cType ? (checkUrl(q.pSrc) ? r.css({
						backgroundImage: "url(" + q.pSrc + ")"
					}).html(b.appMongolia) : r.css({
						backgroundImage: "none"
					}).html("标题" + b.appMongolia), r.css({
						backgroundPosition: q.imgBgp || "50% 50%"
					})) : "textContent" == q.cType ? (y = q.textContent, z = r.height(), "" == y && (y = "标题"), ("left" == e || "right" == e) && (z = 30, y = y.split("").join("<br>")), r.css({
						backgroundImage: "none",
						backgroundColor: RGBToHex(q.characterBgColor, ""),
						textAlign: q.characterAlign,
						fontSize: b.tParseInt(q.characterSize),
						lineHeight: z + "px",
						fontWeight: q.characterWeight,
						fontFamily: q.characterFont,
						color: q.characterColor
					}).html(y + b.appMongolia)) : "customContent" == q.cType && r.css({
						backgroundImage: "none"
					}).html(q.cContent + b.appMongolia), "imgContent" == q.cType1 ? (checkUrl(q.pSrc1) ? s.css({
						backgroundImage: "url(" + q.pSrc1 + ")"
					}).html(b.appMongolia) : s.css({
						backgroundImage: "none"
					}).html(b.appMongolia), s.css({
						backgroundPosition: q.imgBgp1 || "50% 50%"
					}), s.tResize({
						tHandles: "e,se,s"
					})) : "customContent" == q.cType1 && (s.css({
						backgroundImage: "none"
					}).html(q.cContent1 + b.appMongolia), s.tResize({
						tHandles: "e,se,s"
					})), d ? (r.width(u).height(v), s.width(w).height(x)) : ("left" != f && "right" != f || "left" != e && "right" != e) && ("up" != f && "down" != f || "up" != e && "down" != e) ? (r.width(v).height(u), s.width(x).height(w)) : (r.width(u).height(v), s.width(w).height(x));
					for (l.length < 1 && (l = c.children(".t-jadb-title:eq(0)")), c.attr("data-multi", a.adMode), c.attr("data-hidePanel", a.adHideMode), c.attr("data-titleUnity", a.titleUnity), c.attr("data-panelUnity", a.panelUnity), j ? b.clickPanelForAccordion(c, k, a, h) : b.clickForAccordion(l, h), c.attr("data-config", JSON.stringify(a)), c.children(".t-jadb-title").tResize({
							tHandles: "e,se,s"
						}), p = 0; p < a.nestConfig.length; p++) q = a.nestConfig[p], s = c.children(".t-jadb-panel:eq(" + p + ")"), "imgContent" == q.cType1 && ("yes" == c.attr("data-adch") ? ("left" == e || "right" == e ? s.children(".j-tazb").width(m(c.attr("data-pwh") || c.children(".t-jadb-panel:eq(0)").width())).height(s.height()) : s.children(".j-tazb").width(s.width()).height(m(c.attr("data-pwh") || c.children(".t-jadb-panel:eq(0)").height())), s.children(".j-tazb").css("background", s.css("background")), s.css("background", "none")) : s.children(".j-tazb").removeAttr("style")), "yes" == c.attr("data-adch") && s.show()
				},
				tContent: "",
				tDynamic: '<div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle">标题</div><div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel"></div>',
				tDynamic1: '<div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel"></div><div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle">标题</div>',
				tDynamicConfig: {
					cType: "imgContent",
					pSrc: "https://img.alicdn.com/imgextra/i2/800803731/TB2Qr3Tak7OyuJjSspbXXXZuXXa-800803731.jpg",
					imgBgp: "50% 50%",
					href: "",
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
					pSrcBH: "https://img.alicdn.com/imgextra/i2/800803731/TB2Qr3Tak7OyuJjSspbXXXZuXXa-800803731.jpg",
					imgBgpBH: "50% 50%",
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
					pSrc1: "https://img.alicdn.com/imgextra/i3/800803731/TB2quvuaPZnyKJjSZPcXXXqHVXa-800803731.jpg",
					imgBgp1: "50% 50%",
					href1: "#",
					hrefMode1: "_blank",
					cContent1: ""
				},
				codeExport: function () {
					return "${!jadb}"
				},
				codeImport: function (a, c, d, e) {
					var h, j, k, l, m, n, o, f = JSON.parse(a.attr("data-config")),
						g = a.attr("data-dblType"),
						i = {};
					checkPWH = d.attr("data-h") || "", i.nestConfig = [], i.appID = d.attr("data-appid") ? d.attr("data-appid") : a.attr("appid"), h = d.attr("data-widget-config") && d.attr("data-widget-config").indexOf("}") >= 0 ? JSON.parse(d.attr("data-widget-config").replace(/'/g, '"')) : {
						triggerType: "click",
						multiple: "false"
					}, i.gSpace = d.attr("data-g") || "", i.adDirection = d.attr("data-direction") || "up", h.triggerType && (i.adTrigger = h.triggerType), h.multiple && "true" == h.multiple.toString() && (i.adMode = "yes"), h.activeTriggerCls && h.activeTriggerCls.indexOf("hidden") >= 0 && (i.adHideMode = "yes"), h.autoplay && "true" == h.autoplay.toString() && (i.adPlay = "yes"), h.interval && (i.adTime = h.interval || "4"), (h.activeIndex || 0 == h.activeIndex) && (i.adActive = b.tParseInt(h.activeIndex) + 1), a.html(""), i.adCssMode = "no", i.adHideTitle = "no", i.titleBHControl = d.attr("data-b") || "no", d.children(".jwk").length > 0 ? (i.adCssMode = "yes", j = d.attr("data-u") || ";;3;;0.5s", k = j.split(";;"), i.adCssEffect = k[0], i.adCssWeight = k[1], i.adCssSpeed = k[2], d.children(".jwk").children(".atl").children().hasClass("ipcht") && (i.adHideTitle = "yes", a.attr("data-adch", "yes")), d.children(".jwk").children(".atl").each(function (c) {
						var m, n, e = $(this),
							f = e.children().children().children(":eq(0)"),
							g = e.find(".apnone"),
							h = f.width(),
							j = f.height(),
							k = g.width(),
							l = g.height(),
							s = "",
							t = "";
						"none" == g.css("display") && (s = "display:none;"), "yes" == i.adHideTitle && (e.hasClass("ja-a") ? ("left" == i.adDirection || "right" == i.adDirection ? a.attr("data-pwh") || a.attr("data-pwh", k) : a.attr("data-pwh") || a.attr("data-pwh", l), t = ' data-opened="yes"') : "left" == i.adDirection || "right" == i.adDirection ? (k = b.tParseInt(e.css("padding-left")), a.attr("data-pwhs") || a.attr("data-pwhs", k)) : (l = b.tParseInt(e.css("padding-top")), a.attr("data-pwhs") || a.attr("data-pwhs", l))), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + h + "px;height:" + j + 'px;">标题</div><div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel"' + t + ' style="' + s + "width:" + k + "px;height:" + l + 'px;"></div>'), i.nestConfig.push($.extend(!0, {}, b.appConfig["jadb"][1].tDynamicConfig)), m = e.attr("data-a") || "imgContent", n = g.attr("data-a") || "imgContent", i.nestConfig[c].cType = m, i.nestConfig[c].cType1 = n, "customContent" != m && e && e.length > 0 && f.children("a").length > 0 && (i.nestConfig[c].href = f.children("a").attr("href") || "", i.nestConfig[c].hrefMode = f.children("a").attr("target") || "_self"), "imgContent" == m ? (i.nestConfig[c].pSrc = f.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.nestConfig[c].imgBgp = f.css("background-position") || "50% 50%") : "textContent" == m ? (i.nestConfig[c].textContent = f.html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlign = e.css("text-align") || "left", i.nestConfig[c].characterSize = f.css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFont = f.css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColor = RGBToHex(f.css("color")), i.nestConfig[c].characterBgColor = RGBToHex(e.css("background-color"), ""), i.nestConfig[c].characterWeight = f.css("font-weight"), "400" == i.nestConfig[c].characterWeight && (i.nestConfig[c].characterWeight = "normal")) : "customContent" == m && (i.nestConfig[c].cContent = f.html() || ""), "imgContent" == n ? (i.nestConfig[c].pSrc1 = g.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.nestConfig[c].imgBgp1 = g.css("background-position") || "50% 50%", g.children("a").length > 0 && (i.nestConfig[c].href1 = g.children("a").attr("href") || "", i.nestConfig[c].hrefMode1 = g.children("a").attr("target") || "_self")) : "customContent" == n && (i.nestConfig[c].cContent1 = g.html())
					})) : (l = d.children(".ks-switchable-trigger"), 0 == l.length && (l = d.children(".atl")), l.each(function (c) {
						var e, h, j, o, p, u, f = $(this),
							g = f.next(),
							q = f.width(),
							r = f.height(),
							s = g.width(),
							t = g.height();
						"down" == i.adDirection || "right" == i.adDirection ? (g = f.prev(), q = f.width(), r = f.height(), s = g.width(), t = g.height(), u = "", "none" == g.css("display") && (u = "display:none;"), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel" style="' + u + "width:" + s + "px;height:" + t + 'px;"></div><div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + q + "px;height:" + r + 'px;">标题</div>')) : (u = "", "none" == g.css("display") && (u = "display:none;"), a.append('<div class="t-app-spe t-app-other june-nonsp t-jadb-title" data-dblType="jadb" data-attachType="jadbTitle" style="width:' + q + "px;height:" + r + 'px;">标题</div><div class="t-app-spe t-app-other june-nonsp t-jadb-panel" data-dblType="jadb" data-attachType="jadbPanel" style="' + u + "width:" + s + "px;height:" + t + 'px;"></div>')), "down" == i.adDirection || "up" == i.adDirection ? (m || i.titleUnity ? m != r && (i.titleUnity = "no") : m = r, n || i.panelUnity ? n != t && (i.panelUnity = "no") : n = t) : (m || i.titleUnity ? m != q && (i.titleUnity = "no") : m = q, n || i.panelUnity ? n != s && (i.panelUnity = "no") : n = s), i.nestConfig.push($.extend(!0, {}, b.appConfig["jadb"][1].tDynamicConfig)), "yes" == i.titleBHControl && (e = f, f = e.children("div:eq(0)"), o = e.children("div:eq(1)"), p = o.attr("data-a") || "imgContentBH", i.nestConfig[c].cTypeBH = p, "imgContentBH" == p ? (i.nestConfig[c].pSrcBH = o.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.nestConfig[c].imgBgpBH = o.css("background-position") || "50% 50%") : "textContentBH" == p ? (i.nestConfig[c].textContentBH = o.children("a").html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlignBH = o.css("text-align") || "left", i.nestConfig[c].characterSizeBH = o.children("a").css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFontBH = o.children("a").css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColorBH = RGBToHex(o.children("a").css("color")), i.nestConfig[c].characterBgColorBH = RGBToHex(o.css("background-color"), ""), i.nestConfig[c].characterWeightBH = o.children("a").css("font-weight"), "400" == i.nestConfig[c].characterWeightBH && (i.nestConfig[c].characterWeightBH = "normal")) : "customContentBH" == p && (i.nestConfig[c].cContentBH = o.html()), "customContentBH" != p && o && o.length > 0 && o.children("a").length > 0 && (i.nestConfig[c].hrefBH = o.children("a").attr("href") || "", i.nestConfig[c].hrefModeBH = o.children("a").attr("target") || "_self")), h = f.attr("data-a") || "imgContent", j = g.attr("data-a") || "imgContent", i.nestConfig[c].cType = h, i.nestConfig[c].cType1 = j, "customContent" != h && f && f.length > 0 && f.children("a").length > 0 && (i.nestConfig[c].href = f.children("a").attr("href") || "", i.nestConfig[c].hrefMode = f.children("a").attr("target") || "_self"), "imgContent" == h ? (i.nestConfig[c].pSrc = (f.css("background-image") || f.children("a").css("background-image")).replace(/^url|[\(\"\)]*/g, ""), i.nestConfig[c].imgBgp = f.css("background-position") || "50% 50%") : "textContent" == h ? (i.nestConfig[c].textContent = f.children("a").html().replace(/\<br\/?\>/g, ""), i.nestConfig[c].characterAlign = f.css("text-align") || "left", i.nestConfig[c].characterSize = f.children("a").css("font-size").replace(/px/g, ""), i.nestConfig[c].characterFont = f.children("a").css("font-family").replace(/'/g, ""), i.nestConfig[c].characterColor = RGBToHex(f.children("a").css("color")), i.nestConfig[c].characterBgColor = RGBToHex(f.css("background-color"), ""), i.nestConfig[c].characterWeight = f.children("a").css("font-weight"), "400" == i.nestConfig[c].characterWeight && (i.nestConfig[c].characterWeight = "normal")) : "customContent" == h && (i.nestConfig[c].cContent = f.children().html(), f.children().children().hasClass("rel") || (i.nestConfig[c].cContent = f.html() || "")), "imgContent" == j ? (i.nestConfig[c].pSrc1 = g.css("background-image").replace(/^url|[\(\"\)]*/g, ""), i.nestConfig[c].imgBgp1 = g.css("background-position") || "50% 50%", g.children("a").length > 0 && (i.nestConfig[c].href1 = g.children("a").attr("href") || "", i.nestConfig[c].hrefMode1 = g.children("a").attr("target") || "_self")) : "customContent" == j && (i.nestConfig[c].cContent1 = g.html())
					}), i.titleUnity || (i.titleUnity = "yes"), i.panelUnity || (i.panelUnity = "yes")), o = $.extend(!0, f, i), a.attr("data-config", JSON.stringify(o)), a.attr("appID", i.appID), "" != checkPWH && (checkPWH = checkPWH.split(";"), a.attr("data-pwh", checkPWH[0]).attr("data-pwhs", checkPWH[1])), b.appConfig["jadb"][1].tSubmit(o, a, !0), e(g, i.appID)
				}
			}, {
				appID: "",
				adDirection: "left",
				adTrigger: "mouse",
				adActive: "1",
				adMode: "no",
				adCssMode: "yes",
				adCssSpeed: "0.5s",
				adCssEffect: "",
				adCssWeight: "3",
				adHideTitle: "no",
				adHideMode: "no",
				titleUnity: "yes",
				panelUnity: "yes",
				adPlay: "no",
				adTime: "4",
				gSpace: "0",
				tWidth: "",
				tHeight: "",
				pWidth: "",
				pHeight: "",
				nestConfig: []
			}],
			jplb: ['<div class="j-fnd t-app" data-dblType="jplb"></div>', {
				tTitle: "jc60;iconjc62;ꑑjc60;/iconjc62;评论组件设置",
				tUrl: "comment.php",
				tSubmit: function (a, b) {
					require("scripts/tAjax"), b.attr("data-config", JSON.stringify(a))
				},
				codeExport: function () {
					return "${!jplb}"
				},
				codeImport: function (a, b, c, d) {
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
	return a = b, a.setSnap = function (a, c, d, e, f) {
		b.snapSwitch = a, b.snapOutSpace = c, b.snapOutTolerance = d, e && (b.snapInSpace = e), f && (b.snapInTolerance = f), b.snapSwitch ? $("#tZdyDialogControl").children("div:eq(4)").addClass("selected") : $("#tZdyDialogControl").children("div:eq(4)").removeClass("selected")
	}, a
});
