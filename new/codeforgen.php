<?
//宽度返回
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
	
$chuandi=$_POST; 
$data=$chuandi['code'];

$panding=explode('>',$data);
$panding1=explode('rel',$panding[0]);
if(count($panding1)>1){

//$data = stripslashes( $data );
$codePopup=!empty($_POST['codePopup'])?$_POST['codePopup']:'';
//$data=str_replace("junezx 2.0","design tool",$data);
$data2=str_replace($codePopup,"",$data);
$size=HtmlWidth($data);

?>

<div class="codeforgen-head">
	<textarea id="codeTextHidden" name="codeHidden" style="width:460px;height:250px;display:none;"><?=$data?></textarea>
		<textarea id="codeTextHidden1" name="codeHidden1" style="width:460px;height:250px;display:none;"><?=$data2?></textarea>
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
				<label class="cfgl-radio" id="bcdmshdxs" for="m_o2" title="" style="border-right:none;border-radius:2px 0 0 2px;">显示</label>
				<input class="cfgl-rr" type="radio" id="m_o1" name="overflowMode" value="hidden" checked="checked" />
				<label class="cfgl-radio cfgl-radio-checked" id="bcdmshdcdx" for="m_o1" title="" style="border-left:none;border-radius:0 2px 2px 0;">裁掉</label>
			</div>
		</li>
	</ul>
</div>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">自定义代码</a></li>
        <?  if(!empty($codePopup)){ ?>
				<li><a href="#tabs-2">店招与下拉</a></li><? } ?>
		<li><a href="#tabs-3">承接页全屏</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform" style="padding-top:0;">
			<li style="height:20px;padding:10px;line-height:20px;color: #666;">注：本工具生成的代码，只能在<span style="color:#f00;">沃姆设计</span>的模板中使用。<a class="june-preview" target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.KhKq92&designerId=1016893" style="color:#4cb7cb;">点击查看模板>></a></li>
			<li>
				<div style="float:left;width:40px;line-height:35px;">
				<button type="button" class="" data-target="otherset-clicked" data-oths="sharecode;codeText" style=" border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px;cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold; margin-top:15px;display: none;">分享</button>
				<button type="button" class="" data-target="otherset-clicked" data-oths="savecode;saveCode" style=" margin-top:15px; border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px;cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold;display: none;">保存</button>
				</div>
				<textarea id="codeText" name="code" style="float:left;width:480px;height:260px;"></textarea>
			</li>
		</ul>
		<div style="position:absolute;top:382px;left:7px;height:30px;line-height:30px;z-index:1;">
			<div style="background:#4cb7cb;color:#FFF;height:30px;padding:0 10px;border-radius:2px;float:left;"><span>代码量:</span><span id="curCodeSize1"></span>KB</div><div id="ts1" style="padding-left:10px;float:left;color:#666;"></div>
		</div>
	</div>
    <?  if(!empty($codePopup)){ ?>
		<div id="tabs-2">
		<ul class="setform" style="padding-top:0;">
			<li style="height:40px;padding:10px;line-height:20px;color: #666;">1.此处生成的代码，只用于制作<span style="color:#f00;">自定义店招、自定义导航下拉</span>时使用。<br>2.上面一段代码放在店招的区域内，下面一段代码放在页尾的导航下拉代码内。</li>
			<li>
				<textarea id="codeText3" name="code" style="float:left;width:480px;height:110px;"></textarea>
			</li>
			<li>
				<textarea id="codeText3b" name="code_popup" style="margin-top:10px;float:left;width:480px;height:105px;"><?=$codePopup?></textarea>
			</li>
		</ul>
		<div style="position:absolute;top:382px;left:7px;background:#4cb7cb;color:#FFF;height:30px;line-height:30px;z-index:1;padding:0 10px;border-radius:2px;"><span>店招:</span><span id="curCodeSize2"></span>KB<span style="padding-left:5px;">下拉:</span><span id="curCodeSize3"></span>KB</div>
	</div>
    <? } ?>
	<div id="tabs-3" style="display: none;">
		<ul class="setform" style="padding-top:0;">
			<li style="height:20px;padding:10px;line-height:20px;color: #666;">注：此处生成的代码，仅限用于<span style="color:#f00;">活动承接页</span>，放入自定义区块内！</li>
			<li>
				<div style="float:left;width:40px;line-height:35px;">
				<button type="button" class="" data-target="otherset-clicked" data-oths="savecode;saveCode" style=" margin-top:15px; border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px; /* border-right: none; */ cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold;display: none;">保存</button>
				</div>
				<textarea id="codeText4" name="code" style="float:left;width:480px;height:260px;"></textarea>
			</li>
		</ul>
		<div style="position:absolute;top:382px;left:7px;height:30px;line-height:30px;z-index:1;">
			<div style="background:#4cb7cb;color:#FFF;height:30px;padding:0 10px;border-radius:2px;float:left;"><span>代码量:</span><span id="curCodeSize4"></span>KB</div><div id="ts4" style="padding-left:10px;float:left;color:#666;"></div>
		</div>
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
			} else {
				$("#codeTextName").val("codeText"+index);
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
		var newcodecount =parseFloat((newcode.replace(/[^\x00-\xff]/g,"aa").length/1024).toFixed(2)); /****统计代码量****/
		$("#curCodeSize1").html(newcodecount);
		if(newcodecount<=50){
			$("#ts1").html('代码量小于50KB，可直接放入基础模块->自定义区内。');
		}else if(newcodecount>50 && newcodecount<=120){
			$("#ts1").html('代码量大于50KB，需放入设计师模块->全屏模块的全屏自定义内。');
		}else{
			$("#ts1").html('代码量大于120KB，需简化代码。');
		}

		$("#codeText4").val('<div class="ele-womu-rel" style="height:'+(moduleHeight-40)+'px;"><div class="abs" style="width:0;left:50%;">'+newcode+'</div></div>');
		$("#curCodeSize4").html((parseFloat(newcodecount)+0.1).toFixed(2));/****统计代码量****/
		if((parseFloat(newcodecount)+0.1).toFixed(2)<=50){
			$("#ts4").html('代码量小于50KB，可直接放入基础模块->自定义区内。');
		}else{
			$("#ts4").html('代码量大于50KB，需简化代码。');
		}

		if(code3a && code3a != "") {
			var newcode3a = "";
			var dztc=$('#codeText3b').val();
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
				newcode3a = code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
			});
			$("#codeText3").val(newcode3a.replace(dztc, ""));
			var dzcount =parseFloat((newcode3a.replace(dztc, "").length/1024).toFixed(2)); /****店招统计代码量****/
			$("#curCodeSize2").html(dzcount);
			$("#curCodeSize3").html((newcodecount-dzcount).toFixed(2));/****下拉统计代码量****/
		}
	}
	
	var code = $("#codeTextHidden").val(),
	code3a = $("#codeTextHidden1").val();
		
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
	

setTimeout(function() {
	// IE
	if(document.all) {
		document.getElementById("bcdmshdcdx").click();
		
	}
	// 其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		document.getElementById("bcdmshdcdx").dispatchEvent(e);

	}
}, 100);

	
});
</script>
<? }else{ ?>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">代码</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">

			<textarea id="codeText" name="code" style="width:460px;height:250px;"><?=$data?></textarea>
			</li>
		</ul>
	</div>
</div>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
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
});
</script>
<? } ?>