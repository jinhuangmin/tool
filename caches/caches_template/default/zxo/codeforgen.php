<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>﻿<?
function HtmlWidth($data){
	$mark='';
 if($data){
 $q1=explode('">',$data);
 $q2=explode('style="',$q1['0']);
 $q3=explode(';',$q2['1']);
 
 $hqw=explode('width:',$q2['1']);
 $hqw1=explode('px',$hqw['1']);
 $xx=$hqw1[0];

 $hqh=explode('height:',$q2['1']);
 $hqh1=explode('px',$hqh['1']);
 $hh=$hqh1[0];

$fff['w']=$xx;
$fff['h']=$hh;
 }
 return $fff;
	}
 $size=HtmlWidth(stripslashes($_POST['code']));
 
 $code0=stripslashes($_POST['code']);
 $code=htmlspecialchars_decode($code0, ENT_QUOTES);
 $code= str_replace("　",' ',$code);
 $code= str_replace('>　','>',$code);
  $code= str_replace('>&nbsp;','>',$code);
  $code= str_replace('>&nbsp;<','><',$code);
// $code = iconv("utf-8","gb2312",$code);
  
$dzq0=explode('data-widget-type="Popup"',$code);
$dzq1=explode('<div',$dzq0[0]);$ssr=count($dzq1)-1;
for($l=1;$l<$ssr;$l++){$ttt=''.$ttt.'<div'.$dzq1[$l].'';}
$dianzhao=$ttt;

//data-widget-type="Popup" 
$codePopup1=stripslashes($_POST['codePopup']);
$codePopup2=htmlspecialchars_decode($codePopup1, ENT_QUOTES);


?>
<div class="codeforgen-head">
	<textarea id="codeTextHidden" name="codeHidden" style="width:460px;height:250px;display:none;"><?php echo $code;?></textarea>
    <textarea id="codeTextHidden1" name="codeHidden1" style="width:460px;height:250px;display:none;"><?php echo $dianzhao;?></textarea>
		<input type="hidden" id="codeTextName" name="codeTextName" value="codeText" />
	<ul>
		<li>
			<label><span style="margin-left:10px;">当前模块宽</span>&nbsp;</label>
			<input id="m_ow" style="width:40px;" class="setinput" type="text" title="" name="m_ow" value="<?=$size['w']?>" />
			<label>&nbsp;&nbsp;高&nbsp;</label>
			<input id="m_oh" style="width:40px;" class="setinput" type="text" title="" name="m_oh" value="<?=$size['h']?>" />
			<label>&nbsp;&nbsp;&nbsp;当内容超出模块范围时：&nbsp;</label>
			<div id="rm_o1">
				<input class="cfgl-rr" type="radio" id="m_o2" name="overflowMode" value="visible" />
				<label class="cfgl-radio" for="m_o2" title="" style="border-right:none;border-radius:2px 0 0 2px;">显示</label>
				<input class="cfgl-rr" type="radio" id="m_o1" name="overflowMode" value="hidden" checked="checked" />
				<label class="cfgl-radio cfgl-radio-checked" for="m_o1" title="" style="border-left:none;border-radius:0 2px 2px 0;">裁掉</label>
			</div>
		</li>
	</ul>
	<div style="color: #393; text-indent: 10px;display: none;">此处生成的代码不再有全屏/商城/集市自定义之分，可将代码放入任意模块，不再区分模块。</div>
</div>
<div style="position:absolute;top:55px;right:55px;background:#4cb7cb;color:#FFF;height:30px;line-height:30px;z-index:1;padding:0 10px;border-radius:2px;"><span>代码量:</span><span id="curCodeSize1"></span></div>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">自定义代码</a></li>
   <?php if($_POST['codePopup']) { ?><li><a href="#tabs-2">店招与下拉</a></li><?php } ?>
				<li><a href="#tabs-3">承接页代码</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
						<li style="padding-left:10px;margin-left: -10px;border-radius:2px;color: #666;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;">本工具生成的代码，只能在我们设计的模板中使用。</li>
						<li>
				<div style="float:left;width:40px;line-height:35px;">
				<button type="button" class="" data-target="otherset-clicked" data-oths="sharecode;codeText" style=" border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px; /* border-right: none; */ cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold; margin-top:15px;display: none;">分享</button>
				<button type="button" class="" data-target="otherset-clicked" data-oths="savecode;saveCode" style=" border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px; /* border-right: none; */ cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold;margin-top:0px;display: none;">保存</button>
								</div>
				<textarea id="codeText" name="code" style="float:left;width:460px;height:240px;"></textarea>
			</li>
		</ul>
	</div>
	<?php if($_POST['codePopup']) { ?>
        <div id="tabs-2">
		<ul class="setform">
			<li style="height:50px;padding-left:10px;margin-left: -10px;border-radius:2px;line-height:25px;color: #666;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;font-size:12px;"><div style="margin-top:3px;">此处生成的代码，只用于制作<span style="color:#069;font-weight:bold;">自定义店招及导航下拉</span>时使用。</div><div style="height: 22px;line-height: 18px;"><span style="font-size:10px;color:#9c9c9c;">Ps：上面一段代码放在店招的区域内，下面一段代码放在页尾的自定义区域内。</span></div></li>
			<li>
				<textarea id="codeText3" name="code" style="float:left;width:460px;height:110px;"></textarea>
			</li>
			<li>
				<textarea id="codeText3b" name="code_popup" style="margin-top:10px;float:left;width:460px;height:105px;"><?php echo $codePopup2;?></textarea>
			</li>
		</ul>
	</div>
   <?php } ?>     
        
        <div id="tabs-3">
		<ul class="setform">
			<li style="padding-left:10px;margin-left: -10px;border-radius:2px;line-height:25px;color: #666;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;font-size:12px;"><div style="margin-top:3px;">此处生成的代码，可放进活动承接页自定义模块内。</div></li>
			<li>
				<textarea id="codeText4" name="code" style="float:left;width:460px;height:240px;"></textarea>
			</li>
		</ul>
	</div>
</div>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({
		activate: function( event, ui ) {
			var index = ui.newTab.index();
			if(index == 0) {
				$("#codeTextName").val("codeText");
				setTimeout(function() {$("#curCodeSize1").html( ($("#codeText").val().length / 1024).toFixed(1)+"KB");},500);
			} else if(index == 1) {
				if($("#codeText3").length > 0) {
					$("#codeTextName").val("codeText3");
					setTimeout(function() {$("#curCodeSize1").html( (($("#codeText").val().length+$("#codeText3b").val().length) / 1024).toFixed(1)+"KB");},500);
				} else {
					$("#codeTextName").val("codeText4");
					setTimeout(function() {$("#curCodeSize1").html( ($("#codeText4").val().length / 1024).toFixed(1)+"KB");},500);
				}
			} else if(index == 2) {
				$("#codeTextName").val("codeText4");
				setTimeout(function() {$("#curCodeSize1").html( ($("#codeText4").val().length / 1024).toFixed(1)+"KB");},500);
			}
		}
	});
	$("textarea").buttonset();
	$(".setform").tooltip({
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
	});
	
	
	function changeCode(isOverflow, moduleWidth, moduleHeight) {
		var newcode = "";
		code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, function($1) {
			var style = $1, str, str1, str2,
				style = style.replace(/overflow\:([^\;]*)\;/, "overflow:"+isOverflow+";"),
				style = style.replace(/width\:([^\;]*)\;/, "width:"+moduleWidth+"px;"),
				style = style.replace(/height\:([^\;]*)\;/, "height:"+moduleHeight+"px;"),
				style = style.replace(/junezxleftisme\;/, ""),
				style = style.replace(/margin\-left\:([^\;])*\;/, ""),
				style = style.replace(/left\:([^\;])*\;/, "");
				str = style;
			style = style.substr(0, style.length-1);
			str = style + "margin-left:50%;left:-"+(moduleWidth / 2)+'px;"';
			newcode = code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
		});
		$("#codeText").val(newcode);
		$("#codeText4").val('<div class="ele-womu-rel" style="height:'+(moduleHeight-20)+'px;"><div class="abs" style="width:1920px;margin-left:50%;left:-960px;">'+newcode+'</div></div>');
		if(code3a && code3a != "") {
			var newcode3a = "";
			code3a.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, function($1) {
				var style = $1, str,
					style = style.replace(/overflow\:([^\;]*)\;/, "overflow:"+isOverflow+";"),
					style = style.replace(/width\:([^\;]*)\;/, "width:"+moduleWidth+"px;"),
					style = style.replace(/height\:([^\;]*)\;/, "height:"+moduleHeight+"px;"),
					style = style.replace(/junezxleftisme\;/, ""),
					style = style.replace(/margin\-left\:([^\;])*\;/, ""),
					style = style.replace(/left\:([^\;])*\;/, "");
					str = style;
				style = style.substr(0, style.length-1);
				str = style + "margin-left:50%;left:-"+(moduleWidth / 2)+'px;"';
				newcode3a = code3a.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
			});
			$("#codeText3").val(newcode3a);
		}
	}
	
	var code = $("#codeTextHidden").val(),
	code3a = $("#codeTextHidden1").val();
	
	function star() {
      moduleWidth = parseInt($("#m_ow").val() || 0,10),
	  moduleHeight = parseInt($("#m_oh").val() || 0,10);
	  changeCode("hidden", moduleWidth, moduleHeight);
		}
	star();
	$("#rm_o1").children("input[name='overflowMode']").on("click change", function() {
		var isOverflow = $(this).val(),
			moduleWidth = parseInt($("#m_ow").val() || 0,10),
			moduleHeight = parseInt($("#m_oh").val() || 0,10);
		$(this).siblings("label").removeClass("cfgl-radio-checked");
		$(this).next("label").addClass("cfgl-radio-checked");
		changeCode(isOverflow, moduleWidth, moduleHeight);
	});
	$("#m_ow").on("change keyup", function() {
		var isOverflow = $("#rm_o1").children("input[name='overflowMode']:checked").val(),
			moduleWidth = parseInt($("#m_ow").val() || 0,10),
			moduleHeight = parseInt($("#m_oh").val() || 0,10);
		changeCode(isOverflow, moduleWidth, moduleHeight);
	});
	$("#m_oh").on("change keyup", function() {
		var isOverflow = $("#rm_o1").children("input[name='overflowMode']:checked").val(),
			moduleWidth = parseInt($("#m_ow").val() || 0,10),
			moduleHeight = parseInt($("#m_oh").val() || 0,10);
		changeCode(isOverflow, moduleWidth, moduleHeight);
	});
	
	$("#curCodeSize1").html( ($("#codeText").val().length / 1024).toFixed(1)+"KB");
	
});
</script>