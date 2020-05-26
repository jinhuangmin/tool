<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>沃姆设计 手机模板装修辅助工具</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="renderer" content="webkit">
<link type="text/css" rel="stylesheet" href="css/a.css" />
<link type="text/css" rel="stylesheet" href="css/b.css" />
<link type="text/css" rel="stylesheet" href="css/c.css" />
<link type="text/css" rel="stylesheet" href="css/d.css" />
<style>
.pti-header{
	color:#8ea3b3;
}
.pti-header h3{
	height:60px;
	line-height:90px;
	padding-left:10px;
}
.pti-header p{
    padding: 0 10px;
}
.pti-label{
    padding:10px;
	color:#788188;
}
.pti-content{
	padding-left:10px;
}
.pti-content input{
	color:#788188;
	background: #04080a;
	width: 140px;
    height: 26px;
	line-height:26px;
    border: 1px #666 solid;
}
.pti-img-box{
	width:140px;
	height:140px;
	background:#04080a;
	border: 1px #666 solid;
	margin-top:20px;
}
#phoneToolBtnAdd{
    width: 60px;
    height: 28px;
    line-height: 26px;
    margin-left: 10px;
    background: #282e32;
    text-align: center;
    color: #788188;
    margin-top: 10px;
	cursor:pointer;
}
#phoneToolBtnAdd:hover{
	background: #111;
	color:#eee;
}
#phoneToolInput .ptiImgName{
	position:relative;
}
#phoneToolInput .pti-label span.pti-movedown,
#phoneToolInput .pti-label span.pti-moveup,
#phoneToolInput .pti-label span.pti-remove{
	position: absolute;
	display: block;
	width: 20px;
	height: 20px;
	top: 30px;
	cursor:pointer;
}

#phoneToolInput .pti-movedown{
	right: 80px;
	background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2mOFyipXXXXbEXpXXXXXXXXXX-39767794.png);
}
#phoneToolInput .pti-movedown:hover{
	background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2fiJSipXXXXbSXXXXXXXXXXXX-39767794.png);
}
#phoneToolInput .pti-moveup{
	right: 55px;
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2WBxQipXXXXcoXXXXXXXXXXXX-39767794.png);
}
#phoneToolInput .pti-moveup:hover{
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2fylIipXXXXXTXpXXXXXXXXXX-39767794.png);
}
#phoneToolInput .pti-remove{
	right: 30px;
	background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2nTt0ipXXXXaHXXXXXXXXXXXX-39767794.png);
}
#phoneToolInput .pti-remove:hover{
	background: url(https://img.alicdn.com/imgextra/i2/39767794/TB2y48SipXXXXb8XXXXXXXXXXXX-39767794.png);
}



.juneItemBox > div > .ui-resizable-n {
	background:url(images/border-n.png) top center repeat-x;
}
.juneItemBox > div >.ui-resizable-s {
	background:url(images/border-s.png) bottom center repeat-x;
}
.juneItemBox > div >.ui-resizable-e {
	background:url(images/border-e.png) right center repeat-y;
}
.juneItemBox > div >.ui-resizable-w {
	background:url(images/border-w.png) left center repeat-y;
}
.juneItemBox > div.itemSelected > .ui-resizable-n {
	background:url(images/border-n-select.png) top center repeat-x;
}
.juneItemBox > div.itemSelected > .ui-resizable-s {
	background:url(images/border-s-select.png) bottom center repeat-x;
}
.juneItemBox > div.itemSelected > .ui-resizable-e {
	background:url(images/border-e-select.png) right center repeat-y;
}
.juneItemBox > div.itemSelected > .ui-resizable-w {
	background:url(images/border-w-select.png) left center repeat-y;
}
.juneItemBox > div >.ui-resizable-se {
	width: 5px;
	height: 5px;
	right: 0px;
	bottom: 0px;
}

.phoneToolRightPanel{
    width: 290px;
    height: 422px;
    position: fixed;
    z-index: 9999;
    background: #fff;
    border: 1px #eee solid;
    left: 940px;
    top: 120px;
}
.phoneToolRightPanel .ptrp-title{
    height: 40px;
    line-height: 40px;
    text-indent: 20px;
    color: #16c1cf;
    font-weight: 100;
    font-size: 12px;
    border-bottom: 1px #eee solid;
}
.phoneToolRightPanel p{
	padding: 20px;
    color: #999;
}
.phoneToolRightPanel .ptrp-ul li{
    height: 40px;
    line-height: 24px;
    clear: both;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-label{
    padding: 20px;
    color: #666;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-label.prtp-label-1{
	float: left;
	padding-top: 10px;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-radio{
    background: #eee;
    padding: 6px 15px 8px;
	cursor:pointer;
	letter-spacing: 5px;
	color: #999;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-radio.active{
    background: #16c1cf;
    color: #fff;
    padding: 6px 15px 8px;
	cursor:default;
}
.phoneToolRightPanel .ptrp-ul li.ptrp-li1{
	height:auto;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-input{
	width: 155px;
	height: 26px;
	border: 1px #ddd solid;
	margin-top:10px;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-zoord-box{
	float: left;
	width: 164px;
	color: #666;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-zoord-box label{
	display: block;
	float: left;
	width: 20px;
	margin-top:10px;
}
.phoneToolRightPanel .ptrp-ul li .ptrp-input.ptrpI-e{
	width: 40px;
	margin-right: 20px;
	float: left;
}
.phoneToolRightPanel .ptrp-ul li.ptrp-li1 .ptrpITypeBox{
    padding: 20px 0 20px 90px;
    height: 70px;
}
.phoneToolRightPanel .ptrp-ul li.ptrp-li1 .ptrpITypeBox span{
    color: #666;
    float: left;
    margin-left: 8px;
    display: block;
    width: 92px;
}
.phoneToolRightPanel .ptrp-ul li.ptrp-li1 .ptrpITypeBox span i{
    padding: 9px;
    float: left;
    background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2n80MipXXXXcIXXXXXXXXXXXX-39767794.png) 2px 7px no-repeat;
}
.phoneToolRightPanel .ptrp-ul li.ptrp-li1 .ptrpITypeBox span.active i{
    background: url(https://img.alicdn.com/imgextra/i2/39767794/TB2r9FuipXXXXcZXpXXXXXXXXXX-39767794.png) 2px 7px no-repeat;
}
.phoneToolRightPanel .ptrp-ul li.ptrp-li1 .ptrpITypeBox span.ptrp-span-last{
    width: 180px;
    clear: both;
}

.ptrp-li1 {
	position:relative;
}

.ptrp-moveup, .ptrp-movedown{
	position: absolute;
	display: block;
	width: 20px;
	height: 20px;
	top: 15px;
	cursor:pointer;
	display:none;
}

.ptrp-movedown{
	right: 80px;
	background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2mOFyipXXXXbEXpXXXXXXXXXX-39767794.png);
}
.ptrp-movedown:hover{
	background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2fiJSipXXXXbSXXXXXXXXXXXX-39767794.png);
}
.ptrp-moveup{
	right: 55px;
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2WBxQipXXXXcoXXXXXXXXXXXX-39767794.png);
}
.ptrp-moveup:hover{
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2fylIipXXXXXTXpXXXXXXXXXX-39767794.png);
}

#ptBaobeiDom {
	position:absolute;
}
#ptBaobeiDom * {
	font-family:microsoft yahei;
}
#ptBaobeiDom div {
	position:absolute;
	overflow:hidden;
}

#ptBaobeiDom .itemImg img, #ptBaobeiDom .itemBtn img, #ptBaobeiDom .itemJimg img {
	position:absolute;
}

#morephonetools {
	position:absolute;right:540px;top:12px;width:130px;height:35px;background:url(images/morephonetool1.png);cursor:pointer;
}
#morephonetools:hover{
	background:url(images/morephonetool2.png);
}
#morephonetoolsbox {
	width:130px;
	position: absolute;
    top: 47px;
    right: 540px;
	background:#fff;
	border-radius:3px;
	box-shadow: 1px 2px 12px 1px #9b9b9b;
}
#morephonetoolsbox ul{
	padding: 0;
    margin: 0px;
}
#morephonetoolsbox ul li {
	padding: 0 10px;
	background: #FFFFFF;
    height: 30px;
    line-height: 30px;
	cursor:pointer;
}
#morephonetoolsbox ul li span {
    color: #006699;
    font-size: 14px;
    font-family: 微软雅黑;
}
#morephonetoolsbox ul li.selected {
	background:#D90005;
}
#morephonetoolsbox ul li.selected span {
	color:#f0f0f0;
}
#morephonetoolsbox ul li:hover {
	background:#FB1007;
}
#morephonetoolsbox ul li:hover span {
	color:#FFFFFF;
}

#phoneToolRightPanel1 {
	width:445px;
	border:6px solid #f0f0f0;
	bottom:10px;
    height:auto;
	overflow:hidden;
}
#ptrpItemTabs {
	margin-top:20px;
	display:block;
	float:left;
	padding-left:20px;
}

#ptrpItemTabs div {
	width:80px;
	height:30px;
	line-height:30px;
	background:#f7f7f7;
	color:#666666;
	border:1px solid #e7e7e7;
	border-right:none;
	display:block;
	float:left;
	text-align:center;
	margin-bottom:20px;
	cursor:pointer;
}

#ptrpItemTabs div.selected {
	height:31px;
	background:#ffffff;
	border-bottom:none;
}
#ptrpItemBox{
	position: absolute;
    width: 445px;
    top: 220px;
    bottom: 10px;
    overflow: hidden;
    overflow-y: auto;
}
</style>
</head>
<body style="overflow:hidden;">
	<div id="hd">
		<div id="logo"><a class="june-preview" href="http://cnzoom.com" target="_blank" style="display:none;width:100%;height:100%;"></a></div>
		<div id="topbanner">
			<div id="login" style="display: none;"><i></i>登录</div>
			<div id="loginText" style="display: none;">
				<span id="loginTextName"></span>，欢迎登录！<span id="logout" data-target="login-clicked" data-loginType="logout"><i></i>注销</span>
				<span id="tSaveListBtn" style="display:none;"><i></i>保存列表</span>
				<span id="tSaveUsedSwitchBtn" status="close" style="display:none;">关闭自动保存</span>
				<span id="autoSaveCountdown" style="display:none;"></span>
			</div>
			<div id="reg" style="display: none;"><i></i>注册</div>
			<div id="save" style="display:none;"></div>
			<div id="moretools" data-tools="xuanfu" style="display: none;"></div>
			<div id="morephonetools" style="display: none;"></div>
			<div id="morephonetoolsbox" style="display:none;" data-toolType="zdyArea">
				<ul>
					<li class="selected" data-toolType="zdyArea"><span>自定义热区</span></li>
					<li data-toolType="zdyItem"><span>自定义宝贝列表</span></li>
				</ul>
			</div>
			<div id="kbhelp" style="right:380px;"></div>
			<div id="xifuconfig" style="right:230px;"></div>
			<div id="makecode" data-target="coded" data-codeType="codeExport" style="right:120px;"></div>
			<div id="importcode" data-target="coded" data-codeType="codeImport" style="right:10px;"></div>
			<div id="preview" data-target="coded" data-codeType="codePreview" style="display:none;"></div>
		</div>
	</div>
    <div  id="courseStep1" style="display:none;z-index: 1103;position: absolute; width: 0px;height: 79px;background: url(http://img04.taobaocdn.com/imgextra/i4/39767794/TB2DzH1aVXXXXb6XXXXXXXXXXXX-39767794.png);top: 255px;left: 60px;"><div data-target="course" data-courseType="1" style="width:66px;height:24px;position:absolute;top:40px;left:82px;cursor:pointer;"></div></div>
	<div id="sidemenu">
		<div id="mouseaction" style="height:165px;">
			<div title="鼠绘热区（Ctrl+M）" class="sidebutton shuhui selected" data-target="selected" data-curType="draw"></div>
			<div title="应用框选（Ctrl+U）" class="sidebutton kuangxuan" data-target="selected" data-curType="select"></div>
			<div title="放大显示" class="sidebutton fangda" data-target="zoom-clicked" data-zoomType="out" style="display:none;"></div>
			<div title="缩小显示" class="sidebutton suoxiao" data-target="zoom-clicked" data-zoomType="in" style="display:none;"></div>
			<div title="禁止鼠标拖动应用" class="sidebutton tuodong selected" data-target="checked" data-curType="drag"></div>
		</div>
		<div id="configgroup" style="height:165px;">
			<div title="模块设置" class="sidebutton shezhi selected" data-target="module-clicked" data-moduleType="set"></div>
			<div title="联系我们" class="sidebutton lianxiwo"><a class="june-preview" target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=2&charset=utf-8" style="display:block;width:70px;height:55px;"></a></div>
			<div title="展开/收起面板" class="sidebutton shensuo"></div>
		</div>
	</div>
	<div id="leftpannel">
		<div id="btngroup">
			<div id="applist" style="display:none;">
			</div>
			<div id="phoneToolInput">
				<div class="pti-header">
					<h3>背景图片设置</h3>
				</div>
				<div class="pti-label" style="display:none;">模块高度(留空则自动获取模块高度)</div>
				<div class="pti-content" style="display:none;">
					<input type="text" id="ptiModuleHeight" name="ptiModuleHeight" value="" class="textinput"/>
				</div>
				<div class="pti-label ptiImgName">
					<span class="pti-img-name">图片宽640,高建议2000以内(支持gif、jpg、png)</span>
					<span class="pti-movedown"  style="display:none;"></span>
					<span class="pti-moveup" style="display:none;"></span>
					<span></span>
				</div>
				<div class="pti-header">
					<p style="padding:5px 0 20px 10px;font-size: 14px;"><a class="june-preview" target="_blank" href="http://www.cnzoom.com/tool/gif/" style="color:#8ea3b3;">手机端Gif转换工具</a></p>
				</div>
				<div class="pti-content c-ptiModuleBg">
					<input type="text" name="ptiModuleBg1" value="" class="textinput"/>
					<div class="pti-img-box"></div>
				</div>
				<div id="phoneToolBtnAdd" style="display: none;">添加+</div>
				<div class="pti-header">
					<p style="padding-top:20px;">最多支持9个热区</p>
					<p style="padding-top:20px;font-size: 14px;"><a class="june-preview" target="_blank" href="http://www.cnzoom.com/doc/sjdaddhtml/" style="color:#8ea3b3;">点击查看使用教程</a></p>
				</div>
			</div>
			<div id="phoneToolInput1" style="display: none;">
				<div class="pti-header">
					<h3>模块属性</h3>
					<p>支持jpg、png格式，一个模块最多支持20个宝贝</p>
				</div>
				<div class="pti-label">每行宝贝个数</div>
				<div class="pti-content">
					<select id="pti1ItemColumn" name="pti1ItemColumn">
						<option value="1">1</option>
						<option value="2" selected="selected">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>
				</div>
				<div class="pti-label">自定义宝贝数</div>
				<div class="pti-content">
					<select id="pti1ItemCount" name="pti1ItemCount">
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6" selected="selected">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select>
				</div>
				<div class="pti-label">单个宝贝高度</div>
				<div class="pti-content">
					<input type="text" id="pti1ItemHeight" name="pti1ItemHeight" value="488" class="textinput"/>
				</div>
				<div class="pti-label">单个宝贝背景色</div>
				<div class="pti-content">
					<input type="text" id="pti1ItemBgColor" name="pti1ItemBgColor" value="#FFFFFF" class="textinput tColorPicker ptcolor"/>
				</div>
				<div class="pti-label">外边距</div>
				<div class="pti-content">
					<input type="text" id="pti1ItemOuterSpace" name="pti1ItemOuterSpace" value="16" class="textinput"/>
				</div>
				<div class="pti-label">宝贝间距</div>
				<div class="pti-content">
					<input type="text" id="pti1ItemInnerSpace" name="pti1ItemInnerSpace" value="16" class="textinput"/>
				</div>
				<div class="pti-label ptiImgName"><span class="pti-img-name">模块背景图片</span></div>
				<div class="pti-content c-ptiModuleBg">
					<input type="text" id="pti1ModuleBg" name="pti1ModuleBg" value="" class="textinput"/>
					<div class="pti-img-box pti1-img-box"></div>
				</div>
				<div id="phoneToolBtnAddBB" style="display:none;">设置</div>
			</div>
		</div>
	</div>
	<div id="leftconsole" style="background: #101519;">
		<div id="danlie" style="display: none;"></div>
		<div id="shuanglie" style="display: none;"></div>
	</div>
	<div id="bd">
		<div id="box">
			<div id="junebox" data-ptType="rq" style="overflow:auto;position:absolute;left:50px;top:50px;overflow:auto;">
				<div id="june" style="width:640px;height:2560px;position:absolute;left:0;top:0;background:url(http://img01.taobaocdn.com/imgextra/i1/39767794/TB28I_vbXXXXXaMXXXXXXXXXXXX-39767794.png) #ffffff no-repeat 0% 0%;"></div>
				<div id="dump" style="height:2560px;width:1920px;display:none;"></div>
				<div id="popupContent" style="height:2560px;width:1920px;display:none;"></div>
			</div>
		</div>
		<div id="rightpannel" style="display:none;">
			<div id="dqpannel">
				<div id="dqtitle"><span class="rshousuo"></span></div>
				<div id="dqbox">
					<div class="dqbtn" style="padding-top:5px;height:36px;">
						<div id="zdq" title="左对齐" class="dqbutton" data-target="align-clicked" data-alignType="left" style="background-position:-2px 0px;margin-left:11px;"></div>
						<div id="ydq" title="右对齐" class="dqbutton" data-target="align-clicked" data-alignType="right" style="background-position:-51px 0px;margin-top:10px;"></div>
						<div id="sdq" title="上对齐" class="dqbutton" data-target="align-clicked" data-alignType="top" style="background-position:-80px 0px;margin-top:10px;"></div>
						<div id="xdq" title="下对齐" class="dqbutton" data-target="align-clicked" data-alignType="bottom" style="background-position:-127px 0px;margin-top:10px;"></div>
						<div id="hjzdq" title="横向居中对齐" class="dqbutton" data-target="align-clicked" data-alignType="HorizontalMiddle" style="background-position:-104px 0px;"></div>
						<div id="zjzdq" title="纵向居中对齐" class="dqbutton" data-target="align-clicked" data-alignType="VerticalMiddle" style="background-position:-28px 0px;"></div>
					</div>
					<div class="dqinput" style="padding-top:10px;">
						<label for="jianju">间距</label><input type="text" name="jianju" id="jianju"> px
					</div>
					<div class="plbtn" style="margin-top:5px;">
						<span id="plx" data-target="align-clicked" data-alignType="HorizontalRange">横向排列</span>
						<span id="ply" data-target="align-clicked" data-alignType="VerticalRange" style="margin-left:0px;">纵向排列</span>
					</div>
				</div>
			</div>
			<div id="tcpannel">
				<div id="tctitle"><span class="rshousuo"></span></div>
				<ul id="tclist">
				</ul>
				<ul id="dumplayer" style="display:none;">
				</ul>
			</div>
			<div id="acpannel">
				<div id="actitle"><span class="rshousuo"></span></div>
				<ul id="aclist"></ul>
			</div>
		</div>
	</div>
	<div id="xifupannel" class="ui-dialog" style="position:absolute;z-index:1102;width:486px;background:#fff;right:57px;left:auto;top:50px;border:1px #e0e0e0 solid;display:none;">
		<ul class="setform">
			<li>
				<label for="xifuswitch">智能吸附开关： </label>
				<div id="xifuswitch">
					<input type="radio" id="xifuswitch1" name="xifus" value="1" /><label for="xifuswitch1" title="开启智能吸附功能">开启</label>
					<input type="radio" id="xifuswitch2" checked="checked" name="xifus" value="0" /><label title="关闭智能吸附功能" for="xifuswitch2">关闭</label>
				</div>
			</li>
			<li>
				<label for="xifujuli">触发吸附的距离： </label>
				<input id="xifujuli" class="setinput" type="text" title="拖动应用时，两个应用的间距在这个范围内将触发自动吸附。（数值越小，吸附的效果越不明显。）" value="5">
			</li>
			<li>
				<label for="xifujianju">吸附时的间距： </label>
				<input id="xifujianju" class="setinput" type="text" title="拖动应用时，当两个应用靠近，自动吸附的间距。（例：输入0吸附时则会贴边，输入10吸附时则会保留10px的间距吸附。）" value="0">
			</li>
		</ul>
		<div class="ui-dialog-buttonset" style="text-align:right;padding:15px;border-top:1px #eee solid;">
			<button id="xifusubmit" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button">
				<span class="ui-button-text">确定</span>
			</button>
			<button id="xifucancel" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button">
				<span class="ui-button-text">取消</span>
			</button>
		</div>
	</div>
	
	<div id="keyboardpannel" class="ui-dialog" style="position:absolute;z-index:11020;width:520px;height:550px;overflow-y:auto;overflow-x:hidden;background:#fff;right:161px;left:auto;top:50px;border:1px #e0e0e0 solid;display:none;">
		<ul class="setform">
			<li>
				<label>撤销上次动作：</label>
				<input class="setinput" type="text" value="Ctrl+z" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>重做上次动作：</label>
				<input class="setinput" type="text" value="Ctrl+y" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>复制应用：</label>
				<input class="setinput" type="text" value="Ctrl+c" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>粘贴应用：</label>
				<input class="setinput" type="text" value="Ctrl+v" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>删除应用：</label>
				<input class="setinput" type="text" value="Delete" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>剪切应用：</label>
				<input class="setinput" type="text" value="Ctrl+x" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>全选应用：</label>
				<input class="setinput" type="text" value="Ctrl+a" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>保存：</label>
				<input class="setinput" type="text" value="Ctrl+s" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>显示/隐藏标尺：</label>
				<input class="setinput" type="text" value="Ctrl+Alt+r" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>鼠绘热区：</label>
				<input class="setinput" type="text" value="Ctrl+m" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>应用框选：</label>
				<input class="setinput" type="text" value="Ctrl+u" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>应用多选：</label>
				<input class="setinput" type="text" value="Ctrl+鼠标左键单击应用" readonly style="background:#f2f2f2;">
			</li>
			<li>
				<label>只允许横向/纵向拖动：</label>
				<input class="setinput" type="text" value="按住Shift拖动应用" readonly style="background:#f2f2f2;">
			</li>
		</ul>
		<div class="ui-dialog-buttonset" style="text-align:right;padding:15px;border-top:1px #eee solid;">
			<button id="keyboardcancel" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button">
				<span class="ui-button-text">关闭</span>
			</button>
		</div>
	</div>
	<div id="userdialog" title="沃姆设计客户登录/注册" style="display:none;">
		<div id="usertabs">
			<ul>
				<li><a href="#logintab">登录</a></li>
				<li><a href="#regtab">注册</a></li>
			</ul>
			<div id="logintab">
				<ul class="setform">
					<li>
						<label for="username">用户名：</label>
						<input id="username" class="setinput" type="text">
					</li>
					<li>
						<label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
						<input id="password" class="setinput" type="password">
					</li>
				</ul>
			</div>
			<div id="regtab">
				<ul class="setform">
					<li>
						<label for="rusername">用户名：</label>
						<input id="rusername" class="setinput" type="text">
					</li>
					<li>
						<label for="rpassword">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
						<input id="rpassword" class="setinput" type="password">
					</li>
					<li>
						<label for="rpassword2">再次输入密码：</label>
						<input id="rpassword2" class="setinput" type="password">
					</li>
					<li>
						<label for="rlicense">注册码：</label>
						<input id="rlicense" class="setinput" type="text" title="请联系旺旺获取注册码">
						<a class="lianxi june-preview" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=2&charset=utf-8" target="_blank"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<form id="previewForm" name="previewForm" action="preview.php" method="POST" target="_blank">
		<textarea name="code"></textarea>
	</form>
	<div id="tSaveList" title="保存列表" style="display:none;">
		<ul>
			
		</ul>
		<div id="tSavePage" style="width:400px;height:40px;"></div>
	</div>
	<div id="tZuhe" title="有趣的效果组合列表" style="display:none;">
		<ul class="zuhebox">
		</ul>
		<div id="tZuhePage" style="width:400px;height:40px;"></div>
	</div>
	
	<input type="hidden" id="moduleBgcolor" name="moduleBgcolor" class="textinput" style="display:none;"/>
	<div id="phoneToolRightPanel" class="phoneToolRightPanel">
		<h3 class="ptrp-title">热区1设置</h3>
		<p>输入手机端链接 <a class="june-preview" target="_blank" href="http://www.cnzoom.com/gm" style="color:#f00;">手机端链接转换工具</a></p>
		<ul class="ptrp-ul">
			<li id="ptrpITypeLi" style="display: none;">
				<label class="ptrp-label" for="i1">链接类型：</label>
				<span id="ptrpIType1" class="ptrp-radio" data-tt="mobile">手机端</span><span id="ptrpIType2" class="ptrp-radio active" data-tt="pc">PC端</span>
				<input type="hidden" value="" id="ptrpItype" name="ptrpItype" >
			</li>
			<li class="ptrp-li1">
				<label class="ptrp-label">链接地址：</label>
				<input id="ptrpIHref" class="ptrp-input" type="hidden" title="" name="ptrpIHref" value="" />
				<input id="ptrpIHrefY" class="ptrp-input" type="text" title="" name="ptrpIHrefY" value="" />
				<input id="ptrpIHrefX" class="ptrp-input" type="text" title="" name="ptrpIHrefX" value="" style="display:none;" />
				<div id="ptrpITypeBox" class="ptrpITypeBox"  style="display: none;">
					<input type="hidden" value="" id="ptrpItypeValue" name="ptrpItypeValue" >
					<span class="active"><i></i>宝贝详情链接</span>
					<span><i></i>店铺首页</span>
					<span><i></i>优惠券链接</span>
					<span><i></i>店铺分类</span>
					<span class="ptrp-span-last"><i></i>联系旺旺(填入主旺旺ID)</span>
				</div>
			</li>
			<li>
				<span class="ptrp-label prtp-label-1">热区区域：</span>
				<div class="ptrp-zoord-box">
					<label for="ptrpI1">宽</label><input id="ptrpI1" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpI1" value="" />
					<label for="ptrpI2">高</label><input id="ptrpI2" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpI2" value="" />
					<label for="ptrpI3">X</label><input id="ptrpI3" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpI3" value="" />
					<label for="ptrpI4">Y</label><input id="ptrpI4" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpI4" value="" />
				</div>
			</li>
		</ul>
	</div>
	<div id="phoneToolRightPanel1" class="phoneToolRightPanel" style="display: none;">
		<h3 class="ptrp-title">设置面板</h3>
		<div id="ptrpItemTabs">
			<div class="ptrp-tab-c selected">主图</div>
			<div class="ptrp-tab-c">标题样式</div>
			<div class="ptrp-tab-c">原价样式</div>
			<div class="ptrp-tab-c">现价样式</div>
			<div class="ptrp-tab-c" style="border-right:1px solid #e7e7e7;">销量样式</div>
			<div class="ptrp-tab-c">购买按钮</div>
			<div class="ptrp-tab-c" style="border-right:1px solid #e7e7e7;">角标</div>
		</div>
		<p id="ptrpItemDesc" style="height:158px;">图片仅支持jpg、png格式，可上下调整显示顺序，留空则自动获取宝贝的默认主图</p>
		<div id="ptrpItemBox">
			<!--区域设置-->
			<ul class="ptrp-ul" id="ptrpZoordUl">
				<li>
					<span class="ptrp-label prtp-label-1">区域：</span>
					<div class="ptrp-zoord-box">
						<label for="ptrpZoordI1">宽</label><input id="ptrpZoordI1" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpZoordI1" value="" />
						<label for="ptrpZoordI2">高</label><input id="ptrpZoordI2" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpZoordI2" value="" />
						<label for="ptrpZoordI3">X</label><input id="ptrpZoordI3" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpZoordI3" value="" />
						<label for="ptrpZoordI4">Y</label><input id="ptrpZoordI4" class="ptrp-input ptrpI-e" type="text" title="" name="ptrpZoordI4" value="" />
					</div>
				</li>
				<li style="margin-bottom: 10px;">
					<label class="ptrp-label" for="ptrpSwitch">显示开关：</label>
					<select id="ptrpSwitch" name="ptrpSwitch" style="margin-top:15px;">
						<option value="on">显示</option>
						<option value="off">不显示</option>
					</select>
				</li>
			</ul>
			<!--宝贝主图-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp1Ul" style="display:none;"></ul>
			<!--宝贝标题-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp2Ul" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp2line">标题行数：</label>
					<select id="ptrp2line" name="ptrp2line">
						<option value="-1">无限制</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</li>
			</ul>
			<!--宝贝原价-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp3Ul" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp3prefix">前缀内容：</label>
					<input id="ptrp3prefix" class="ptrp-input" type="text" title="" name="ptrp3prefix" value="" />
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp3suffix">后缀内容：</label>
					<input id="ptrp3suffix" class="ptrp-input" type="text" title="" name="ptrp3suffix" value="" />
				</li>
			</ul>
			<!--宝贝现价-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp4Ul" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp4prefix">前缀内容：</label>
					<input id="ptrp4prefix" class="ptrp-input" type="text" title="" name="ptrp4prefix" value="" />
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp4suffix">后缀内容：</label>
					<input id="ptrp4suffix" class="ptrp-input" type="text" title="" name="ptrp4suffix" value="" />
				</li>
			</ul>
			<!--宝贝销量-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp5Ul" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp5prefix">前缀内容：</label>
					<input id="ptrp5prefix" class="ptrp-input" type="text" title="" name="ptrp5prefix" value="" />
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp5suffix">后缀内容：</label>
					<input id="ptrp5suffix" class="ptrp-input" type="text" title="" name="ptrp5suffix" value="" />
				</li>
			</ul>
			<!--宝贝按钮-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp6Ul" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrp6img">按钮图片：</label>
					<input id="ptrp6img" class="ptrp-input" type="text" title="" name="ptrp6img" value="" />
				</li>
			</ul>
			<!--宝贝角标-->
			<ul class="ptrp-ul ptrp-ul-set" id="ptrp7Ul" style="display:none;">
			</ul>
			<!--颜色设置 宝贝标题 宝贝原价 宝贝现价 宝贝销量-->
			<ul class="ptrp-ul" id="ptrpCharUl" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpCharcolor">文字颜色：</label>
					<input id="ptrpCharcolor" class="ptrp-input tColorPicker ptcolor" type="text" title="" name="ptrpCharcolor" value="" />
				</li>
				<li class="ptrp-li1" style="opacity:0;display:none;">
					<label class="ptrp-label" for="ptrpCharfontSize">字体大小：</label>
					<input id="ptrpCharfontSize" class="ptrp-input" type="text" title="" name="ptrpCharfontSize" value="" />
				</li>
				<li class="ptrp-li1" style="margin-top:5px;">
					<label class="ptrp-label" for="ptrpCharAlign">对齐方式：</label>
					<select id="ptrpCharAlign" name="ptrpCharAlign">
						<option value="left">居左</option>
						<option value="center">居中</option>
						<option value="right">居右</option>
					</select>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpCharbgColor">背景颜色：</label>
					<input id="ptrpCharbgColor" class="ptrp-input tColorPicker ptcolor" type="text" title="" name="ptrpCharbgColor" value="" />
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpCharOpacity">背景透明度(0-100)：</label>
					<input id="ptrpCharOpacity" class="ptrp-input" type="text" title="" name="ptrpCharOpacity" maxlength="3" placeholder="请输入范围0-100的数字" value="" />
				</li>
			</ul>
			<!--图片设置 宝贝主图, 宝贝标题, 宝贝角标 -->
			<ul class="ptrp-ul" id="ptrpJpgUl" style="display:none;">
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg1">主图1：</label>
					<input id="ptrpJpgImg1" class="ptrp-input" type="text" title="" name="ptrpJpgImg1" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg2">主图2：</label>
					<input id="ptrpJpgImg2" class="ptrp-input" type="text" title="" name="ptrpJpgImg2" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg3">主图3：</label>
					<input id="ptrpJpgImg3" class="ptrp-input" type="text" title="" name="ptrpJpgImg3" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg4">主图4：</label>
					<input id="ptrpJpgImg4" class="ptrp-input" type="text" title="" name="ptrpJpgImg4" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg5">主图5：</label>
					<input id="ptrpJpgImg5" class="ptrp-input" type="text" title="" name="ptrpJpgImg5" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg6">主图6：</label>
					<input id="ptrpJpgImg6" class="ptrp-input" type="text" title="" name="ptrpJpgImg6" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg7">主图7：</label>
					<input id="ptrpJpgImg7" class="ptrp-input" type="text" title="" name="ptrpJpgImg7" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg8">主图8：</label>
					<input id="ptrpJpgImg8" class="ptrp-input" type="text" title="" name="ptrpJpgImg8" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg9">主图9：</label>
					<input id="ptrpJpgImg9" class="ptrp-input" type="text" title="" name="ptrpJpgImg9" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg10">主图10：</label>
					<input id="ptrpJpgImg10" class="ptrp-input" type="text" title="" name="ptrpJpgImg10" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg11">主图11：</label>
					<input id="ptrpJpgImg11" class="ptrp-input" type="text" title="" name="ptrpJpgImg11" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
				<li class="ptrp-li1">
					<label class="ptrp-label" for="ptrpJpgImg12">主图12：</label>
					<input id="ptrpJpgImg12" class="ptrp-input" type="text" title="" name="ptrpJpgImg12" value="" />
					<span class="ptrp-moveup"></span>
					<span class="ptrp-movedown"></span>
				</li>
			</ul>
		</div>
	</div>
	
	<div id="ft"></div>
	<div id="tempImgDivBox" style="width:9999px;height:9999px;display:none;position:absolute;top:9999px;left:9999px;"></div>
<script type="text/javascript" src="js/a.js"></script>
<script type="text/javascript" src="js/b.js"></script>
<script type="text/javascript" src="js/c.js"></script>
<script type="text/javascript" src="js/d.js"></script>
<script type="text/javascript" src="js/lib/e.js"></script>
<script type="text/javascript" src="js/lib/r.js"></script>
<script type="text/javascript" src="js/f.js"></script>
<!--更多工具-->
<script type="text/javascript" id="june_first">
$jntfn = "1182987";$jnzxx = "1182987";console.log("junezx start");
</script><script type="text/javascript" src="js/moretools.js?v=1826"></script>
<script type="text/javascript" src="js/g.js?v=1556"></script>
<!--轮播-->
<script src="js/lib/modernizr.custom.17475.js"></script>
<script type="text/javascript" src="js/lib/jquerypp.custom.js"></script>
<script type="text/javascript" src="js/lib/jquery.elastislide.js"></script>
<script type="text/javascript" src="js/h.js?v=0929"></script>
<script type="text/javascript" src="js/h_1.js?v=0929"></script>
<script type="text/javascript" src="js/i.js?v=1807"></script>
<script type="text/javascript" src="js/s.js?v=1148"></script>
<script type="text/javascript" src="js/u.js?v=1305"></script><!--u-->
<script type="text/javascript" src="js/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="js/base.js"></script>
<script type="text/javascript" src="js/n.js"></script>
<script language="javascript" type="text/javascript" src="js/lib/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="js/o.js"></script>
<script type="text/javascript" src="js/p2.js?v=1747"></script>



<script type="text/javascript" src="phonetool/js/h.js"></script>
<script type="text/javascript" src="phonetool/js/c.js"></script>
<script type="text/javascript" src="phonetool/js/h.min.js"></script>



<script type="text/javascript" src="js/j/k.js"></script>
<script type="text/javascript" src="js/j/l.js"></script>
<script type="text/javascript" src="js/j/m.js"></script>
<script type="text/javascript">
 if(Sys.ie) {
	var ieVersion = parseInt(Sys.ie);
	if( ieVersion > 8 ) {
		var evt         = new Event(),
		dragdrop    = new Dragdrop(evt),
		rg          = new RulersGuides(evt, dragdrop);
	}
 } else {
	var evt         = new Event(),
	dragdrop    = new Dragdrop(evt),
	rg          = new RulersGuides(evt, dragdrop);
 }
</script>

<!--[if lte IE 8]>
<script type="text/javascript" src="js/ie.js"></script>
<![endif]-->
</body>
</html>
