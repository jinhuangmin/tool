
<!DOCTYPE html>
<html style="min-width:1240px;">
<head>
<meta charset="UTF-8">
<title>沃姆设计 模板装修辅助工具3.0 方便智能的淘宝装修代码生成工具</title>

<meta name="renderer" content="webkit">
<link type="text/css" rel="stylesheet" href="css/3a.css" /><!--3a-->
<style>
body{
	margin:0;
	padding:0;
	font-size:14px;
	color:#737c81;
	font-family:微软雅黑;
}
a{
	color:#737c81;
	font-family:微软雅黑;
	text-decoration:none;
}
@font-face{
font-family: 'junezxicon';
src:url('/3.0/css/font/junezx icon.ttf'),
	url('/3.0/css/font/junezx icon.woff'),
	url('/3.0/css/font/junezx icon.eot'),
	url('/3.0/css/font/junezx icon.svg');
}

icon{
	font-family:'junezxicon';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.content{
	position:absolute;
	width:100%;
	height:100%;
	background:url(https://img.alicdn.com/imgextra/i2/39767794/TB2fnvFtFXXXXXtXXXXXXXXXXXX-39767794.jpg) left bottom repeat-x #19c2d1;
	margin:0 auto;
}
.dark{
	position:absolute;
	width:100%;
	height:100%;
	background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2CmrqtFXXXXc.XpXXXXXXXXXX-39767794.jpg);
    transition: 2s;
	margin:0 auto;
	opacity:0;
}
.b-mountain{
	position:absolute;
	width:100%;
	height:192px;
	bottom:0;
	background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2HJvAtFXXXXXfXpXXXXXXXXXX-39767794.png) bottom center no-repeat;
    transition: 2s;
}
.b-mountain-dark{
	position:absolute;
	width:100%;
	height:192px;
	bottom:0;
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2px6PtFXXXXXtXpXXXXXXXXXX-39767794.png) bottom center no-repeat;
    transition: 2s;
	opacity:0;
}
.login{
	width:330px;
	height:420px;
	background:url(https://img.alicdn.com/imgextra/i2/39767794/TB2KErltFXXXXbFXpXXXXXXXXXX-39767794.png);
	position:absolute;
	top:50%;
	left:50%;
	margin-top:-210px;
	margin-left:-165px;
	z-index:9;
}
.login-header{
	width:330px;
	height:50px;
	line-height:50px;
}
.login-header span{
	display:block;
	width:165px;
	height:50px;
	text-align:center;
	float:left;
	background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2EXnttFXXXXahXpXXXXXXXXXX-39767794.png);
	position:relative;
}
.login-header span.junelogin{
	background:none;
}
.login-header span.junelogin i{
	background: url(https://img.alicdn.com/imgextra/i2/39767794/TB2aVbktFXXXXcjXpXXXXXXXXXX-39767794.png) 0px 5px no-repeat;
	padding: 2px 11px;
}
.login-header span.tblogin i{
	background: url(https://img.alicdn.com/imgextra/i2/39767794/TB20d6kpVXXXXaGXXXXXXXXXXXX-39767794.png) -85px -55px;
	padding: 2px 20px;
}
.login-content{
	padding:20px 40px;
	overflow:hidden;
}
.login-content .label{
	height:30px;
	line-height:30px;
}
.login-content input{
	border:1px #d5d9da solid;
	background:#fff;
	width:248px;
	height:30px;
	text-indent:10px;
	font-size:14px;
	color:#333;
	font-family:"微软雅黑";
}
.login-content input:focus{
	outline:2px #19c2d1 solid;
}
.login-pram{
	height:60px;
	line-height:60px;
	font-size:12px;
}
.login-pram .autologin{
	float:left;
	cursor:pointer;
}
.login-pram .autologin i{
	float: left;
	display: block;
	width: 20px;
	height: 16px;
	margin-top: 21px;
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2N7cFpVXXXXa.XpXXXXXXXXXX-39767794.png) -179px -59px no-repeat;
}
.login-pram .autologin.active i{
	background: url(https://img.alicdn.com/imgextra/i4/39767794/TB2N7cFpVXXXXa.XpXXXXXXXXXX-39767794.png) -154px -89px no-repeat;
}
.login-pram .forgetpwd{
	float:right;
	cursor:pointer;
}
.login-pram .forgetpwd i{
	float: left;
	display: block;
	width: 20px;
	height: 20px;
	margin-top: 21px;
	background: url(https://img.alicdn.com/imgextra/i2/39767794/TB20d6kpVXXXXaGXXXXXXXXXXXX-39767794.png) -6px -92px;
}
.loginbtn{
	height:40px;
	line-height:40px;
	text-align:center;
	color:#fff;
	background:#19c2d1;
	margin-top:20px;
	cursor:pointer;
}
.loginbtn:hover{
	background:#17b1bf;
}
.regbtn{
	height:40px;
	line-height:40px;
	text-align:center;
	color:#fff;
	background:#13cc6f;
	margin-top:10px;
	cursor:pointer;
}
.regbtn:hover{
	background:#12b362;
}
.ui-widget-header{
	background:none;
	border:none;
	border-bottom: 1px #e3ecf1 solid;
}
.ui-widget-header .ui-dialog-title{
	font-size: 14px;
	color: #737c81;
	font-family: 微软雅黑;
	font-weight:normal;
	height:36px;
	line-height:30px;
}
.ui-widget-header .ui-dialog-title icon{
	color:#19c2d1;
	font-size:16px;
	margin-right:10px;
	margin-left:10px;
}
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default,.ui-state-default .ui-icon{
	background:none;
	border:none;
}
.ui-dialog .ui-dialog-titlebar-close{
	background: url(https://img.alicdn.com/imgextra/i3/39767794/TB2EXnttFXXXXahXpXXXXXXXXXX-39767794.png) -200px -15px;
	outline: none;
	right: 12px;
	top: 50%;
	width: 20px;
	margin: -12px 0 0 0;
}
.ui-dialog .ui-dialog-titlebar-close:hover{
	background: url(https://img.alicdn.com/imgextra/i3/39767794/TB2EXnttFXXXXahXpXXXXXXXXXX-39767794.png) -240px -15px;
}
.setform{
	padding:0 20px;
}
.setform li{
	list-style:none;
	line-height:50px;
}
.setform li label{
	display:block;
	float:left;
	font-size:14px;
	width:80px;
	text-align:right;
	color:#737c81;
	padding-right:6px;
}
.setform li input{
	border:1px #d5d9da solid;
	background:#fff;
	width:178px;
	height:30px;
	text-indent:10px;
	font-size:14px;
	color:#333;
}
.setform li input:focus{
	outline:2px #19c2d1 solid;
}
a.lianxi{
	color:#26a7fa;
}
a.lianxi icon{
	font-size:17px;
	margin-left:10px;
}
.lead30{
	width:526px;
	height:375px;
	position:absolute;
	top:50%;
	left:50%;
	margin-left:-263px;
	margin-top:-137px;
	background:url(https://img.alicdn.com/imgextra/i4/39767794/TB2STQXtFXXXXb1XXXXXXXXXXXX-39767794.png) top center no-repeat;
	z-index:8;
	opacity:0;
    transition: 1s ease 2s;
}
.lead30 .leadbtn{
	display:block;
	width:156px;
	height:80px;
	position:absolute;
	bottom:0;
    transition: .3s ease;
}
.lead30 .leadbtn:hover{
	bottom:3px;
}
.lead30 .leadbtn.b1{
	left:115px;
	background:url(https://img.alicdn.com/imgextra/i4/39767794/TB2QgArtFXXXXXOXXXXXXXXXXXX-39767794.png);
}
.lead30 .leadbtn.b2{
	right:115px;
	background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2RzrBtFXXXXccXpXXXXXXXXXX-39767794.png);
}

.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus{
	background:#f2f2f2;
	color:#333;
	border:1px #ddd solid;
	outline:none;
}
.ui-dialog-buttonpane .ui-dialog-buttonset .ui-state-default{
	border:1px #ddd solid;
}
#tMessage{
	font-size: 14px;
	color: #666;
}
</style>
</head>
<body>
<div class="content">
	<div class="dark"></div>
	<div class="login" id="userLoginDiv" style="display:none;">
		<div class="login-header">
			<span class="junelogin"><i></i>沃姆用户登录</span>
			<span class="tblogin"><i></i><a id="taobaoLoginBtn" class="june-preview" href="">店铺账号登录</a></span>
		</div>
		<form id="user_login_form" method="post" action="/2.0/login.php">
		<div class="login-content">
			<div class="label"><label for="username">用户名：</label></div>
			<div class="input"><input type="text" name="username" id="username" /></div>
			<div class="label" style="margin-top:10px;"><label for="password">密码：</label></div>
			<div class="input"><input type="password" name="password" id="password" /></div>
			<div class="login-pram">
				<span class="autologin active" id="autologin"><i></i>下次自动登录</span>
				<span class="forgetpwd" id="forgetpassword"><i></i>忘记密码?</span>
			</div>
			<div id="loginbtn" class="loginbtn">登录</div>
			<div id="regbtn" class="regbtn">注册</div>
		</div>
		</form>
	</div>
	<div class="b-mountain"></div>
	<div class="b-mountain-dark"></div>
	<div class="lead30" id="lead30">
		<a class="leadbtn b1" href="/3.0"></a>
		<a class="leadbtn b2" href="/3.0"></a>
	</div>
</div>
<div id="userdialog" title="沃姆设计客户注册" style="display:none;">
	<form id="userdialog_form">
		<div id="regtab">
			<ul class="setform">
				<li>
					<label for="rusername">用户名：</label>
					<input id="rusername" junezx_vali_str="true" required="true" name="rusername" class="setinput" type="text">
				</li>
				<li>
					<label for="rpassword">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
					<input id="rpassword" junezx_vali_str="true" required="true" name="rpassword" class="setinput" type="password">
				</li>
				<li>
					<label for="rpassword2">确认密码：</label>
					<input id="rpassword2" junezx_vali_str="true" required="true" name="rpassword2" class="setinput" type="password">
				</li>
				<li>
					<label for="rlicense">注册码：</label>
					<input id="rlicense" style="width:80px;" junezx_vali_str="true" required="true" name="rlicense" class="setinput" type="text" title="请联系 junezx 的旺旺客服获取注册码">
					<a class="lianxi june-preview" href="http://amos.alicdn.com/getcid.aw?v=2&uid=junezx&site=cntaobao&s=2&groupid=0&charset=utf-8" target="_blank"><icon>ꑀ</icon>获取注册码</a>
				</li>
				<li>
					<div id="regbtnok" class="regbtn" style="margin-top: 30px;width: 250px;margin-left: 17px;">注册</div>
				</li>
			</ul>
		</div>
	</form>
</div>
<div id="jn_forget" style="display:none;">
	<div id="forgetmethod0" class="forgetmethodlist">
		<form id="form_forget" method="post" action="/2.0/forget.php" target="_blank">
			<ul class="setform">
				<li>
					<label class="reglabel" for="jn_flicense">注册码：</label>
					<input class="setinput" id="jn_flicense" junezx_vali_str="true" name="license" value="" type="text" tabindex="1"/>
					<a class="lianxi june-preview" href="http://amos.alicdn.com/getcid.aw?v=2&amp;uid=junezx&amp;site=cntaobao&amp;s=2&amp;groupid=0&amp;charset=utf-8" target="_blank"></a>
				</li>
				<li>
					<label class="reglabel" for="jn_fusername">用户名：</label>
					<input class="setinput" id="jn_fusername" junezx_vali_str="true" name="username" value="" type="text" tabindex="2"/>
				</li>
				<li>
					<label class="reglabel" for="jn_fpassword">新密码：</label>
					<input class="setinput" id="jn_fpassword" junezx_vali_str="true" name="password" value="" type="password" tabindex="2"/>
				</li>
				<li>
					<label class="reglabel" for="jn_fpassword2">确认密码：</label>
					<input class="setinput" id="jn_fpassword2" junezx_vali_str="true" name="password2" value="" type="password" tabindex="2"/>
				</li>
				<li>
					<div id="findpwd" class="regbtn" style="margin-top: 30px;width: 250px;margin-left: 17px;">重设密码</div>
				</li>
			</ul>
		</form>
	</div>
</div>
<script type="text/javascript" src="js/lib/3a.js"></script><!--3a-->
<script type="text/javascript" src="js/lib/3b.js"></script><!--3b-->
<script type="text/javascript" src="js/lib/3c.js"></script><!--3c-->
<script type="text/javascript" src="js/lib/3d.js"></script><!--3d-->
<script type="text/javascript" src="js/lib/3e.js"></script><!--3e_1-3-->
<script type="text/javascript" src="js/lib/3f.js"></script><!--3f-->
<script type="text/javascript" src="js/lib/3g.js"></script><!--3g-->
<script type="text/javascript" src="js/lib/3h.js"></script><!--3h-->
<script type="text/javascript" src="js/lib/3l.js"></script><!--3l-->
<script type="text/javascript">
var hre = "zx";
$(function() {
	function a(a) {
		a[0] && ($.cookie("falauto", !0, {
			expires: 7
		}), $.cookie("falname", a[1], {
			expires: 7
		}))
	}
	function b() {
		var a = $.cookie("falauto"),
			b = !1;
		"true" == a && $.cookie("falname") && "" != $.cookie("falname") && (b = !0, $.cookie("tLogin", !0), $.cookie("tLoginName", $.cookie("falname")))
	}
	function c() {
		var a = $.cookie("tLogin"),
			b = !1,
			c = [];
		"true" == a && $.cookie("tLoginName") && "" != $.cookie("tLoginName") && (b = !0), c[0] = b, c[1] = $.cookie("tLoginName") || "", d(c)
	}
	function d(a) {
		a[0] ? ($.cookie("tLogin", !0), $.cookie("tLoginName", a[1]), $(".login").hide(), $(".dark").css("opacity", "1"), $(".b-mountain-dark").css("opacity", "1"), $(".b-mountain").css("opacity", "0"), $(".lead30").css({
			opacity: "1",
			marginTop: "-187px"
		})) : ($.removeCookie("tLogin"), $.removeCookie("tLoginName"), $("#userLoginDiv").show())
	}
	b(), c(), $("#autologin").on("click", function() {
		var b = $(this);
		b.hasClass("active") ? b.removeClass("active") : b.addClass("active")
	}), $("#userdialog").dialog({
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;沃姆设计客户注册",
		autoOpen: !1,
		width: 350,
		height: 420,
		modal: !1,
		close: function() {
			$("#userdialog").dialog("close")
		}
	}), $("#jn_forget").dialog({
		autoOpen: !1,
		width: 350,
		height: 420,
		modal: !1,
		title: "jc60;iconjc62;ꑑjc60;/iconjc62;密码找回"
	}).dialog("close"), $("#regbtn").on("click", function() {
		$("#userdialog").dialog("open")
	}), $("#forgetpassword").on("click", function() {
		$("#jn_forget").dialog("open")
	}), $("#username, #password").on("keyup", function(a) {
		var b = a.keycode || a.which;
		"13" == b && $("#loginbtn").trigger("click")
	}), $("#loginbtn").on("click", function() {
		var b = $("#falname").val(),
			c = $("#falpwd").val();
		"" == b ? messageForPhp("用户名不能为空！") : "" == c ? messageForPhp("密码不能为空！") : $("#user_login_form").ajaxSubmit(function(b) {
			var c = [!1, ""],
				e = $("#autoLogin");
			"" != b && (c = JSON.parse(b)), c[0] ? (d(c), e.prop("checked") && a(c)) : messageForPhp("用户名或者密码错误！")
		})
	}), $("#regbtnok").on("click", function() {
		$.ajax({
			type: "POST",
			url: "reg.php",
			data: {
				username: $("#rusername").val(),
				password: $("#rpassword").val(),
				license: $("#rlicense").val()
			},
			success: function(a) {
				"true" == a ? (messageForPhp("注册成功，请登录！", "login"), $("#rusername,#rpassword,#rpassword2,#rlicense").val(""), $("#userdialog").dialog("close")) : messageForPhp(a)
			}
		})
	}), $("#findpwd").on("click", function() {
		var b = $("#fusername").val(),
			e = $("#fqq").val(),
			c = $("#fpassword").val(),
			d = $("#fpassword2").val();

		$("#flicense").val(), "" == b ? messageForPhp("用户名不能为空！") : "" == c ? messageForPhp("密码不能为空！") : c != d ? messageForPhp("两次输入的密码不一致！") : $("#form_forget").ajaxSubmit(function(a) {
			"true" == a ? (messageForPhp("密码重设成功，请登录"), $("#fusername,#fqq,#fpassword,#fpassword2,#flicense").val(""), $("#returnlogin1").trigger("click")) : messageForPhp(a)
		})
	}), $("#lead30").on("click", "a", function() {
		var a = $(this),
			b = a.index();
		0 == b ? $.cookie("showportview", "no") : $.cookie("showportview", "yes")
	})
});
</script>
</body>
</html>