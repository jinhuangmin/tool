<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>沃姆设计 模板装修辅助工具-方便智能的淘宝装修代码生成工具</title>
<meta name="keywords" content="沃姆设计 淘宝装修工具  装修辅助工具  淘宝全屏代码  淘宝特效  淘宝助手  码工助手">
<meta name="description" content="沃姆设计 模板装修辅助工具  店铺定制设计">

<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="renderer" content="webkit">
<link type="text/css" rel="stylesheet" href="css/a.css"  />
<link type="text/css" rel="stylesheet" href="css/b.css"  />
<link type="text/css" rel="stylesheet" href="css/c.css"  />
<link type="text/css" rel="stylesheet" href="css/d.css"  />
<link type="text/css" rel="stylesheet" href="css/e.css"  />
<link rel="stylesheet" type="text/css" href="css/elastislide.css"  />
<link rel="stylesheet" href="../grsc/css/zTreeStyle/zTreeStyle.css"  type="text/css">
<link type="text/css" rel="stylesheet" href="css/index.css"  />
<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>

<style>
#taobaoLoginBtn {
	width:120px;
	height:36px;
	position: absolute;
	background:url("https://img.alicdn.com/imgextra/i4/39767794/TB2skoXeFXXXXbIXpXXXXXXXXXX-39767794.png");
	left:438px;
	top:12px;
}
#taobaoLoginBtn:hover{
	opacity:0.9;
}
#loginTextName.loginBandClass {
	background: url("https://img.alicdn.com/imgextra/i2/39767794/TB2AWTXeVXXXXcvXXXXXXXXXXXX-39767794.png") no-repeat top left;
	padding-left: 20px;
	padding-bottom: 2px;
}
#tBandShop {
	padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 20px;
	background: url("https://img.alicdn.com/imgextra/i3/39767794/TB21M9UeVXXXXcGXpXXXXXXXXXX-39767794.png") 0 2px no-repeat;
	margin-left: 10px;
	color: #788188;
	cursor: pointer;
	display: none;
}
</style>
</head>
<body style="overflow:hidden;">
	
    <div id="hd">
		<div id="topbanner">
			<div id="logo"><a class="june-preview" href="/"  target="_blank" style="display:block;width:100%;height:100%;"></a></div>
			<div id="login"><i></i>登录</div>
			<div id="loginText">
				<span id="loginTextName" class=""></span>，欢迎登录！<span id="logout" data-target="login-clicked" data-loginType="logout" data-logoutType=""><i></i>注销</span>
				<span id="tSaveListBtn"><i></i>保存列表</span>
				<span id="tSaveUsedSwitchBtn" status="open">关闭自动保存</span>
				<span id="autoSaveCountdown" style="display:none;"></span>
			</div>
			<div id="reg"><i></i>注册</div>
			<div style="padding-left:20px;float: left;line-height: 60px;">
				<a class="june-preview" target="_self" href="http://www.cnzoom.com/3.0" style="background: #f52b2b;color:#fff;padding:2px 5px;border-radius: 3px;">切换使用新版</a>
				<a class="june-preview" target="_blank" href="http://www.cnzoom.com/guide/tool.html" style="padding-left:15px;color: #f52b2b;">第一次使用工具?</a>
			</div>

			<div id="moretools" data-tools="taobao"></div>
			<div id="kbhelp"></div>
			<div id="xifuconfig"></div>
			<div id="save"></div>
			<div id="importcode" data-target="coded" data-codeType="codeImport"></div>
			<div id="makecode" data-target="coded" data-codeType="codeExport"></div>
			<div id="preview" data-target="coded" data-codeType="codePreview"></div>
		</div>
	</div>
	<div style="z-index: 1103; position: absolute; width: 204px; height: 79px; background: transparent url(images/height_ts.png) no-repeat; top: 145px; right: 40px;display: none;" id="courseStep1">
    	<div data-tna="junezx_tna_cs1" class="tnaCheck tna-checkin">
    		<img src="http://img02.taobaocdn.com/imgextra/i2/39767794/TB2U_WFcpXXXXXPXXXXXXXXXXXX-39767794.png">    
    		<img src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB26r1GcpXXXXXDXXXXXXXXXXXX-39767794.png" class="checkin">    
    	</div>
    	<div style="width:57px;height:18px;position:absolute;top:43px;left:109px;cursor:pointer;" data-coursetype="1" data-target="course"></div>
    </div>
	<div id="tb_loginname"></div>
	<div id="sidemenu">
		<div id="mouseaction0">
        <div title="打开淘宝图片空间" class="sidebutton  taotu"><a class="june-preview" target="_blank" href="https://tu.taobao.com">图片空间</a></div>
    </div>
    <div id="mouseaction">
    	<div title="鼠绘热区（Ctrl+M）" class="sidebutton shuhui selected" data-target="selected" data-curtype="draw" style="display:none"></div>
		<div title="应用框选（Ctrl+U）" class="sidebutton kuangxuan" data-target="selected" data-curType="select">应用多选</div>
		<div title="画线" class="sidebutton huaxian" data-target="selected" data-curType="pencil" id="jPencil">划线工具</div>
		<div title="禁止鼠标拖动应用" class="sidebutton tuodong selected" data-target="checked" data-curType="drag"></div>
		</div>
		<div id="configgroup">
			<div title="模块设置" class="sidebutton shezhi" data-target="module-clicked" data-moduleType="set"></div>
			<div title="清空画布" class="sidebutton shuaxin" data-target="module-clicked" data-moduleType="clear">清空画布</div>
			<div title="添加自定义HTML" class="sidebutton daima" data-target="module-clicked" data-moduleType="addCustom">自定代码</div>
            <div title="查看模块秀效果" class="sidebutton yangli"><a class="june-preview" href="../index.php?#shareLabelList" target="_blank">模块秀</a></div>
			<!-- data-target="interest-clicked" data-interestType="get"-->
            <div title="新手帮助教程" class="sidebutton newlearn"><a class="june-preview" href="http://cnzoom.com/guide/tool.html" target="_blank">教程帮助</a></div>
            <div title="查看全部模板" class="sidebutton muban"><a class="june-preview" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.KVW3w4&designerId=1016893&p=1" target="_blank">全部模板</a></div>
			<div title="有事你联系我" class="sidebutton contact"><a class="june-preview" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=1&charset=utf-8" target="_blank">联系我们</a></div>
			<div title="展开/收起面板" class="sidebutton yingyong">收起面板</div>
			<!--<div title="展开/收起面板" class="sidebutton shensuo"></div>-->
		</div>
	</div>
	<div id="leftpannel">
		<div id="btngroup">
			<div id="applist">
				<div class="appbtn-x t-icon-0 selected" data-target="selected" data-curType="draw"><span class="appicon"></span>画热区</div>
				<div class="appbtn-x t-icon-1" data-target="clicked" data-actType="jspb"><span class="appicon"></span>特效层</div>
				<div class="appbtn-x t-icon-2" data-target="clicked" data-actType="job"><span class="appicon"></span>正反面</div>

				<!-- ydx add start -->
				<div class="appbtn-x t-icon-31" data-target="clicked" data-actType="zxuanzhuan"><span class="appicon"></span>循环动画<font class="new"></font></div>
				<div class="appbtn-x t-icon-32" data-target="clicked" data-acttype="zbaid"><span class="appicon"></span>摆动动画<font class="new"></font></div>
				<div class="appbtn-x t-icon-33" data-target="clicked" data-acttype="znihongdeng"><span class="appicon"></span>霓虹灯动画<font class="new"></font></div>
				<div class="appbtn-x t-icon-34" data-target="clicked" data-acttype="wfscroll"><span class="appicon"></span>无缝动画<font class="new"></font></div>
				<div class="appbtn-x t-icon-35" data-target="clicked" data-acttype="zndh"><span class="appicon"></span>点缀动画<font class="new"></font></div>
				<!-- ydx add end -->

				<div class="appbtn-x t-icon-3" data-target="clicked" data-actType="jkgb"><span class="appicon"></span>开关灯</div>
				<div class="appbtn-x t-icon-4" data-target="clicked" data-actType="jbob"><span class="appicon"></span>切片正反面</div>
				<div class="appbtn-x t-icon-5" data-target="clicked" data-actType="jfsb"><span class="appicon"></span>轮播</div>
				<div class="appbtn-x t-icon-6" data-target="clicked" data-actType="jwfb"><span class="appicon"></span>无缝轮播</div>
				<div class="appbtn-x t-icon-7" data-target="clicked" data-actType="jqtb"><span class="appicon"></span>嵌套轮播</div>
				<div class="appbtn-x t-icon-8" data-target="clicked" data-actType="jadb"><span class="appicon"></span>手风琴</div>
				<div class="appbtn-x t-icon-9" data-target="clicked" data-actType="jzzb"><span class="appicon"></span>遮罩层</div>
				<div class="appbtn-x t-icon-10" data-target="clicked" data-actType="jpb"><span class="appicon"></span>弹出层</div>
				<div class="appbtn-x t-icon-11" data-target="clicked" data-actType="jacb"><span class="appicon"></span>可关闭层</div>
                <div class="appbtn-x t-icon-30" data-target="clicked" data-actType="jdhb"><span class="appicon"></span>动态海报</div>

				<div class="appbtn-x t-icon-12" data-target="clicked" data-actType="jcdb"><span class="appicon"></span>倒计时</div>
				<div class="appbtn-x t-icon-13" data-target="clicked" data-actType="jsb"><span class="appicon"></span>搜索框</div>
				<div class="appbtn-x t-icon-14" data-target="clicked" data-actType="jvb"><span class="appicon"></span>视频</div>
				<div class="appbtn-x t-icon-15" data-target="clicked" data-actType="jcb"><span class="appicon"></span>文字</div>
				<div class="appbtn-x t-icon-16" data-target="clicked" data-actType="jtsb"><span class="appicon"></span>滚动文字</div>
				<div class="appbtn-x t-icon-17" data-target="clicked" data-actType="jwb"><span class="appicon"></span>旺旺</div>
				<div class="appbtn-x t-icon-18" data-target="clicked" data-actType="jwwb"><span class="appicon"></span>旺旺群</div>
				<div class="appbtn-x t-icon-19" data-target="clicked" data-actType="jscb"><span class="appicon"></span>收藏</div>
				<div class="appbtn-x t-icon-20" data-target="clicked" data-actType="jeb"><span class="appicon"></span>二维码</div>
				<div class="appbtn-x t-icon-21" data-target="clicked" data-actType="jgb"><span class="appicon"></span>购物车</div>
				<div class="appbtn-x t-icon-25" data-target="clicked" data-actType="jmdb"><span class="appicon"></span>锚点</div>

				<div class="appbtn-x t-icon-23" data-target="clicked" data-actType="jib"><span class="appicon"></span>宝贝列表</div>
				<div class="appbtn-x t-icon-24" data-target="clicked" data-actType="jsfb"><span class="appicon"></span>店铺分类</div>
				<div class="appbtn-x t-icon-26" data-target="clicked" data-actType="jzdb"><span class="appicon"></span>自定义内容</div>
                
                <!-- 
                <div class="appbtn-x t-icon-8" data-target="clicked" data-actType="jfyb"><span class="appicon"></span>翻页轮播</div>
				<div class="appbtn-x t-icon-22" data-target="clicked" data-actType="jfb"><span class="appicon"></span>分享</div>
				<div class="appbtn-x t-icon-11" data-target="clicked" data-actType="jab"><span class="appicon"></span>关注</div>
				<div class="appbtn-x t-icon-12" data-target="clicked" data-actType="jplb"><span class="appicon"></span>评论组件</div>
				<div class="appbtn-x t-icon-5" data-target="clicked" data-actType="jdlb"><span class="appicon"></span>段落</div>
				<div class="appbtn-x t-icon-11" data-target="clicked" data-actType="jxhb"><span class="appicon"></span>喜欢</div>
				-->
			</div>
			
		</div>
	</div>
	<div id="leftconsole">
		<div id="danlie"></div>
		<div id="shuanglie"></div>
	</div>

 
	<div id="bd">
	
        <div id="box">

            <div id="junebox" style="overflow:auto;position:absolute;left:50px;top:50px;">
				<div id="june" style="height:2560px;width:1920px;top:0;left:0;background: #f2f4f8 none no-repeat scroll 50% 0%;line-height:normal;"></div>
				<div id="dump" style="height:19999px;width:1920px;display:none;"></div>
				<div id="popupContent" style="height:19999px;width:1920px;display:none;"></div>
			</div>
		</div>

		<div id="rightpannel">
			
            <div id="moduleset" >
				<div id="bgbox">
					<div class="title" style="margin-bottom:10px;float:left;">模块属性设置<span class="rshousuo"></span></div>
					<div class="setinput putss kuanss">
						<label for="moduleWidth">模块宽度：</label>
						<input type="text" id="moduleWidth" name="moduleWidth" value="1920" class="textinput"/>      
					</div>
					<div class="setinput putss gaoss">
						<label for="moduleHeight">模块高度：</label>
						<input type="text" id="moduleHeight" name="moduleHeight" value="" class="textinput"/>      
					</div>
					<div class="setinput putss bgss">
						<label for="moduleBgimg">背景图片：</label>
						<input type="text" id="moduleBgimg" name="moduleBgimg" class="textinput"/>      
					</div>
					<div class="setinput">
						<input type="checkbox" id="boxRepeat" name="boxRepeat" value="">      
						<label class="chkLabel" for="boxRepeat" style="margin-right:10px;">是否平铺</label>
						<input type="checkbox" id="boxFixed" name="boxFixed" value="">      
						<label class="chkLabel" for="boxFixed">是否固定</label>
					</div>
					<div class="setinput" id="qjweizhi">
						<label for="bgPosition">图片位置：</label>
						<select id="bgPosition" name="bgPosition">
							<option value="50% 50%">居中</option>
							<option value="50% 0%" selected="selected">中上</option>
							<option value="50% 100%">中下</option>
							<option value="0% 0%">左上</option>
							<option value="0% 50%">左中</option>
							<option value="0% 100%">左下</option>
							<option value="100% 0%">右上</option>
							<option value="100% 50%">右中</option>
							<option value="100% 100%">右下</option>
						</select>
					</div>
					<div class="setinput  putss colorss">
						<label for="moduleBgcolor">背景颜色：</label>
						<input type="text" id="moduleBgcolor" name="moduleBgcolor" class="textinput" style="width:60px;" />      
					</div>
				</div>
			</div>  
            
			<div id="dqpannel">
				<div class="title">对齐面板<span class="rshousuo"></span></div>
				<div id="dqbox">
					<div class="dqbtn" style="padding-top:5px;height:66px;">
						<div id="zdq" title="左对齐" class="dqbutton" data-target="align-clicked" data-alignType="left" style="background-position:-2px 0px;margin-left:11px;"></div>
						<div id="ydq" title="右对齐" class="dqbutton" data-target="align-clicked" data-alignType="right" style="background-position:-51px 0px;margin-top:10px;"></div>
						<div id="sdq" title="上对齐" class="dqbutton" data-target="align-clicked" data-alignType="top" style="background-position:-80px 0px;margin-top:10px;"></div>
						<div id="xdq" title="下对齐" class="dqbutton" data-target="align-clicked" data-alignType="bottom" style="background-position:-127px 0px;margin-top:10px;"></div>
						<div id="hjzdq" title="横向居中对齐" class="dqbutton" data-target="align-clicked" data-alignType="HorizontalMiddle" style="background-position:-104px 0px;"></div>
						<div id="zjzdq" title="纵向居中对齐" class="dqbutton" data-target="align-clicked" data-alignType="VerticalMiddle" style="background-position:-28px 0px;"></div>
						<br>
						<div id="zhbjz" title="调整位置到画布最左侧" class="wzbutton" data-target="align-clicked" data-alignType="leftCanvas" style="background-position:-2px 0px;margin-left:11px;"></div>
						<div id="hbhjz" title="调整位置到画布横向居中" class="wzbutton" data-target="align-clicked" data-alignType="HorizontalMiddleCanvas" style="background-position:-28px 0px;"></div>
						<div id="ybzjz" title="调整位置到画布最右侧" class="wzbutton" data-target="align-clicked" data-alignType="rightCanvas" style="background-position:-51px 0px;margin-top:10px;"></div>
						<div id="sbzjz" title="调整位置到画布最顶部" class="wzbutton" data-target="align-clicked" data-alignType="topCanvas" style="background-position:-80px 0px;margin-top:10px;"></div>
						<div id="zobzjz" title="调整位置到画布纵向居中" class="wzbutton" data-target="align-clicked" data-alignType="VerticalMiddleCanvas" style="background-position:-104px 0px;"></div>
						<div id="xbzjz" title="调整位置到画布最底部" class="wzbutton" data-target="align-clicked" data-alignType="bottomCanvas" style="background-position:-127px 0px;margin-top:10px;"></div>
					</div>
					<div class="dqinput">
						<label for="jianju">间距设置：</label><input type="text" name="jianju" id="jianju"> px
					</div>
					<div class="plbtn" style="margin-top:5px;">
						<span id="plx" data-target="align-clicked" data-alignType="HorizontalRange">横向排列</span>
						<span id="ply" data-target="align-clicked" data-alignType="VerticalRange" style="margin-left:5px;">纵向排列</span>
					</div>
				</div>
			</div>
            
            
            <div id="sidebar-tab"><div id="tab-title"><h3><span class="selected">图层面板</span><span>历史记录</span></h3></div><div id="tab-content"><div class="tabul"><div class="tabli">
            
            <div id="tcpannel">
				<ul id="tclist">
				</ul>
				<ul id="dumplayer" style="display:none;">
				</ul>
			</div>
            
            </div></div><div class="tabul hide"><div class="tabli">
            
            <div id="acpannel">
				<ul id="aclist"></ul>
			</div>            
            </div></div></div></div>

		</div>
	</div>

	<div id="xifupannel" class="ui-dialog" style="position:absolute;z-index:1102;width:290px;background:#fff;right:333px;left:auto;top:60px;border:1px #e0e0e0 solid;display:none;">
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
				<input id="xifujuli" class="setinput" type="text" title="拖动应用时，两个应用的间距在这个范围内将触发自动吸附。（数值越小，吸附的效果越不明显。）" value="5" style="width:140px;">
			</li>
			<li>
				<label for="xifujianju">吸附时的间距： </label>
				<input id="xifujianju" class="setinput" type="text" title="拖动应用时，当两个应用靠近，自动吸附的间距。（例：输入0吸附时则会贴边，输入10吸附时则会保留10px的间距吸附。）" value="0" style="width:140px;">
			</li>
		</ul>
		<div class="ui-dialog-buttonset" style="text-align:right;padding:15px;border-top:1px #eee solid;">
			<button id="xifucancel" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" style="border-radius: 5px;">
				<span class="ui-button-text">取消</span>
			</button>
			<button id="xifusubmit" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" style="border-radius: 5px;background:#f60;">
				<span class="ui-button-text" style="color:#fff;">确定</span>
			</button>		
		</div>
	</div>

	
	<div id="keyboardpannel" class="ui-dialog" style="position: absolute; z-index: 1102; width: 330px; height: 550px; overflow-y: auto; overflow-x: hidden; right: 378px; left: auto; top: 60px; border: 1px solid rgb(224, 224, 224); display: none; background: rgb(255, 255, 255);">
		<ul class="setform">
			<li>
				<label>撤销上次动作：</label>
				<input class="setinput" type="text" value="Ctrl+z" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>重做上次动作：</label>
				<input class="setinput" type="text" value="Ctrl+y" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>复制应用：</label>
				<input class="setinput" type="text" value="Ctrl+c" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>粘贴应用：</label>
				<input class="setinput" type="text" value="Ctrl+v" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>删除应用：</label>
				<input class="setinput" type="text" value="Delete" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>剪切应用：</label>
				<input class="setinput" type="text" value="Ctrl+x" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>全选应用：</label>
				<input class="setinput" type="text" value="Ctrl+a" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>保存：</label>
				<input class="setinput" type="text" value="Ctrl+s" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>显示/隐藏标尺：</label>
				<input class="setinput" type="text" value="Ctrl+Alt+r" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>鼠绘热区：</label>
				<input class="setinput" type="text" value="Ctrl+m" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>应用框选：</label>
				<input class="setinput" type="text" value="Ctrl+u" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>应用多选：</label>
				<input class="setinput" type="text" value="Ctrl+鼠标左键单击应用" readonly style="background:#f2f2f2;width:170px;">
			</li>
			<li>
				<label>横向/纵向拖动：</label>
				<input class="setinput" type="text" value="按住Shift拖动应用" readonly style="background:#f2f2f2;width:170px;">
			</li>
		</ul>
		<div class="ui-dialog-buttonset" style="text-align:right;padding:15px;border-top:1px #eee solid;">
			<button id="keyboardcancel" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" style="border-radius:5px;">
				<span class="ui-button-text">关闭</span>
			</button>
		</div>
	</div>
	
	<div id="jhi_dlg" style="display:none;">
		<ul class="setform" style="width:550px;">
			<li style="width:550px;">
				<label for="jhi_1" style="width:120px;">图片地址：</label>
				<input id="jhi_1" class="setinput tItisImg" type="text" title="请输入图片地址" style="width:340px;">
			</li>
			<li style="width:550px;">
				<label for="jhi_2" style="width:120px;">链接地址：</label>
				<input id="jhi_2" class="setinput" type="text" title="请输入链接地址" style="width:340px;">
			</li>
		</ul>
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
						<label for="rqq">QQ：</label>
						<input id="rqq" junezx_vali_str="true" required="true" name="qq" class="setinput" type="text">
					</li>
					<li>
						<label for="rlicense">注册码：</label>
						<input id="rlicense" class="setinput" type="text" title="请联系 沃姆 的旺旺客服获取注册码">
						<a class="lianxi june-preview" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=1&charset=utf-8'" target="_blank"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div id="jstForPopup" style="position:absolute;left:-99999px;top:-99999px;"></div>
	<form id="previewForm" name="previewForm" action="preview.php" method="POST" target="_blank">
		<textarea name="code"></textarea>
		<textarea name="codeObj"></textarea>
		<a id="previewJ" href="javascript:if(confirm('./previewJ.php'))window.location='./previewJ.php'" target="_blank"><span id="previewJspan" ></span></a>
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
	<div id="ft"></div>
	<div id="tempImgDivBox" style="width:9999px;height:9999px;display:none;position:absolute;top:9999px;left:9999px;"></div>

	<div id="gtv3_tg30" style="position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.5);z-index: 99999999;">
		<div class="tgbox" style="width: 360px;height: 380px;position: absolute;left: 50%;top: 50%;margin-left: -180px;margin-top: -190px;background: url(https://img.alicdn.com/imgextra/i2/800803731/TB2I0XlpbFlpuFjy0FgXXbRBVXa_!!800803731.png);">
			<span title="关闭" id="gtv3_tgclose" class="tgclose" style="display: block;position: absolute;top: 14px;right: 14px;width: 20px;height: 20px;cursor: pointer;"></span>
			<a id="gtv3_tguse" class="june-preview tguse" style="position: absolute;display: block;width: 136px;height: 48px;bottom: 22px;left: 42px;cursor: pointer;" href="http://cnzoom.com/3.0"></a>
			<a class="june-preview" style="position: absolute;display: block;width: 136px;height: 48px;bottom: 22px;left: 189px;" href="http://www.cnzoom.com/doc/2017/05/15/tool/" target="_blank">&nbsp;</a>
		</div>
	</div>

<![endif]--> 
<script type="text/javascript" src="js/index.js" ></script>
<script type="text/javascript" src="js/a.js" ></script>
<script type="text/javascript" src="js/b.js" ></script>
<script type="text/javascript" src="js/c.js" ></script>
<script type="text/javascript" src="js/d.js" ></script>
<script type="text/javascript" src="js/lib/e.js" ></script>
<script type="text/javascript" src="js/lib/r.js" ></script>
<script type="text/javascript" src="js/f.js" ></script>
<!--更多工具-->
<script type="text/javascript" src="js/first.php" ></script>
<script type="text/javascript" src="js/moretools.js" ></script>
<script type="text/javascript" src="js/g.js" ></script>
<!--轮播-->
<script src="js/lib/modernizr.custom.17475.js" ></script>
<script type="text/javascript" src="js/lib/jquerypp.custom.js" ></script>
<script type="text/javascript" src="js/lib/jquery.elastislide.js" ></script>
<script type="text/javascript" src="js/h.js" ></script>
<script type="text/javascript" src="js/h_1.js" ></script>
<script type="text/javascript" src="js/i.js" ></script>
<script type="text/javascript" src="js/s.js" ></script>
<script type="text/javascript" src="js/u.js" ></script><!--u-->
<script type="text/javascript" src="../grsc/javascript/jquery.ztree.core-3.5.js" ></script>
<script type="text/javascript" src="js/base.js" ></script>
<script type="text/javascript" src="js/n.js" ></script>
<script language="javascript" type="text/javascript" src="js/lib/My97DatePicker/WdatePicker.js" ></script>
<script type="text/javascript" src="js/o.js" ></script>
<script type="text/javascript" src="js/p.js" ></script>

<script type="text/javascript" src="js/j/k.js" ></script>
<script type="text/javascript" src="js/j/l.js" ></script>
<script type="text/javascript" src="js/j/m.js" ></script>

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
<script type="text/javascript">
$(function() {
	function a(a, b, c, d) {
		var e = {};
		d && 0 != d.length || (d = [], d[0] = "确定", d[1] = "关闭"), e[d[0]] = function() {
			b && "function" == typeof b && b.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
		}, e[d[1]] = function() {
			c && "function" == typeof c && c.call(this), $(this).dialog("close"), $(".ui-tooltip").hide()
		}, $("#tbjbConfirm").length <= 0 && ($('<div id="tbjbConfirm"></div>').appendTo($("body")), $("#tbjbConfirm").dialog({
			autoOpen: !1,
			resizable: !1,
			width: 400,
			modal: !0,
			title: "提示",
			buttons: e
		})), $("#tbjbConfirm").html(a).dialog("option", "buttons", e).dialog("open")
	}
	$("#tb_loginname").html() && "" != $("#tb_loginname").html() ? $("#taobaoLoginBtn").hide() : $("#taobaoLoginBtn").show();
	var b = null;
	$("#loginTextName").hover(function() {
		var d, c = $(this);
		c.hasClass("loginBandClass") && (d = $("#unBindShopDiv"), d.length < 1 && ($('<div id="unBindShopDiv" style="display:none;"><span class="unBindSpan1"></span><span class="unBindSpan2">已绑定</span><span class="unBindSpan3">解绑</span></div>').appendTo($("body")), d = $("#unBindShopDiv"), d.children(".unBindSpan1").html(testnickname || ""), d.off("click").on("click", ".unBindSpan3", function() {
			a("是否确认解除该店铺绑定？", function() {
				var a = $.cookie("tLoginName"),
					b = window.location.href;
				b = b.indexOf("www.ceshij") >= 0 ? "http://www.ceshij.com" : "http://ceshij.com", $.cookie("tLoginName") && "" != $.cookie("tLoginName") && $.cookie("tLoginName") == $("#loginTextName").html() && (a = $("#loginTextName").html()), $.ajax({
					url: "tbzhzx.php",
					type: "POST",
					data: {
						username: a
					},
					success: function() {
						d.hide(), d.children(".unBindSpan1").html(""), $("#loginTextName").removeClass("loginBandClass"), $("#tBandShop").length < 1 && $("#logout").after('<a id="tBandShop"></a>'), $("#tBandShop").hide()
					}
				})
			})
		}), d.hover(function() {
			clearTimeout(b), b = null
		}, function() {
			clearTimeout(b), b = setTimeout(function() {
				d.hide()
			}, 1500)
		})), (void 0 == d.children(".unBindSpan1").html() || "" == d.children(".unBindSpan1").html()) && $.ajax({
			url: "/app/getSomeInfo.php",
			success: function(a) {
				d.children(".unBindSpan1").html(a)
			}
		}), d.show())
	}, function() {
		var d, c = $(this);
		c.hasClass("loginBandClass") && (d = $("#unBindShopDiv"), d.length > 0 && (clearTimeout(b), b = setTimeout(function() {
			d.hide()
		}, 1500)))
	})

});

$('#gtv3_tgclose').click(function(){
	$('#gtv3_tg30').hide();
});

</script>
<!--[if lte IE 8]>
<script type="text/javascript" src="js/ie.js" ></script>
<![endif]-->
</body>
</html>
