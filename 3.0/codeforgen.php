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
	 
 $ov1=explode('overflow:',$q2['1']);
 $ov2=explode(';',$ov1['1']);
 $ov=$ov2[0];

$fff['w']=$xx;
$fff['h']=$hh;
$fff['o']=$ov;
 }
 return $fff;
	}

$dataxx=$_POST['code'];
$data= preg_replace("/(\s+)/",' ',$dataxx);

$panding=explode('>',$data);
$panding1=explode('rel',$panding[0]);


//$data = stripslashes( $data );
$codePopup=!empty($_POST['codePopup'])?$_POST['codePopup']:'';
$data=str_replace("power by junezx 3.0","power by womu3.0",$data);
$data=str_replace("junezx 3.0","womu3.0",$data);

$size=HtmlWidth($data);
if($codePopup!==''){
$pattern = "/<div class=\"J_TWidget[^<>]*data\-widget\-type\=\"Popup\".*?>(.*?)/i";  
$data0= preg_replace($pattern, "@#_uuu_#@", $data); 
$data1=explode('@#_uuu_#@',$data0);
$data2=$data1[0];
}
if($size['o']=='hidden'){
	$oddd='bcdmshdcdx';
}else{
	$oddd='bcdmshdcdo';
}
if($size['w']>950){ $a=$size['w']/2; $sty1='margin-left:50%;left:-'.$a.'px;';$str=str_replace("junezxleftisme",$sty1,$data);$str=str_replace("margin-left:0px;","",$str); }else{$str=str_replace("junezxleftisme",'',$data);$str=str_replace("margin-left:0px;","",$str);}

$search = array("class=","data-title=","style=","position:relative","data-appid=","overflow:hidden","overflow:visible","border-width:","line-height:","height:","normal","margin-left:","data-rn=","data-pos=","target=","_blank","_self","background-image:","outline:","display:block","display:none","z-index:","data-linkmode=","ptlink","imghover","collapse","transition:","ease-in","background:","no-repeat","jspcb","url(","data-jspbType=","www.taobao.com/webww/ww.php?ver=","data-jspbtype=","imgContent","action=","method=","searchform","input","keyword","value=","SearchForm","padding:","border:","color:","font-family:","Arial","font-weight:","font-size:","submit","cursor:pointer",".png)","orderType","otype","hotsell_desc","jbocb","background-position","J_TWidget","data-mr=","data-widget-type=","Carousel","data-widget-config=","contentCls","navCls","effect","scrollx","scrolly","easing","easeBoth","easeBothStrong","elasticIn","backIn","bounceOut","bounceBoth","easeNone","duration","delay","elasticOut","autoplay","false","activeIndex","scroll","text-align:center","text-align:right","text-align:left","padding-left:","padding-right:","white-space:nowrap","center","title=","data-qmd=","data-qid=","data-t=","data-w=","data-o=","data-s=","data-hsrc=","endTime:","Countdown","embed","allowscriptaccess=","never","flashvars","scene=taobao_shop","application/x-shockwave-flash","wmode=","transparent","steps","circular","prevBtnCls","nextBtnCls","interval","activeTriggerCls","juneactive","triggerType","mouse","click","ks-switchable-content","elepic","elexb","true","png_bg","Compatible","ks-switchable-nav","vertical-align:","opacity:","filter:","-ms-filter:","progid:DXImageTransform.Microsoft.Alpha","DXImageTransform","Microsoft","Alpha","data-i=","wfpanel","data-a=","data-f=",".jpg)","display:inline-block","initial:","data-sm=","dianquanka","control-group","margin-right:","chn-link-dianquanka","split","data-brandid=","data-t-size=","data-t-size1=","data-l=","data-cc=","data-h=","ptitem","itemarea","hborder","a.tbcdn.cn/s.gif","shadowShow","solid","border-radius:","itemareachild","http://","border-color:","border-style:","width:","box-shadow:","jibbg","data-e=","jibpanel","jibtitle","jibprefix","jibprice","jibdiscountprefix","jibdiscountprice","jibsaleprefix","jibsale","Accordion","multiple","data-direction=","ks-switchable-panel","ks-switchable-trigger","progid","data-g=","ui-brand-btn","visibility","visible","sns-widget","sns-sharebtn","sns-sharebtn-default","sns-widget-ui","data-sharebtn=","comment","webpage","skinType","client_id","data-comment=","isAutoHeight","param","target_key","type_id","rec_user_id","detail_list","moreurl","paramList","list_trunPage","data-url=","data-urlType=","data-mode","marquee","s linear","<span ","direction","behavior","</span>","left:","fadein","word-break","break-all","nullpx","https://","dashed","dotted","微软雅黑","宋体","bolder","keep-all","bold","lighter","data-shophref=","none","data-fname=","jsfbchild","jsfbchilda","data-catstype=","data-catsid=","left","justify","inherit","auto","text-decoration","underline","overline","line-through","blink","letter-spacing","length","Tabs","june-box","june-move","hidebtn","june-switch","data-junezxset=","b-box","data-m=","jspb","jmdb","jzzb","background-color","Slide","zzhtml","abs","rel","top:","mcblack","mcwhite","medium","thick","thin","zzmc","j_CollectBrand","cursor:default","white-space: nowrap","name=","ks-popup-hidden","Popup","align","node","offset","points","ks-popup-shown","tml-mask-b2b","absolute","fixed","june-move-r360","june-move-r720","ulhover","outbox","jfsb","<div","</div>","img01.taobaocdn.com","item.taobao.com","detail.tmall.com","taobaocdn.com","trans05s","trans02s","XXXXXXXXXX_","bao/uploaded","imgextra","<a href=","img.alicdn.com",".gif)","item.htm?id","<img src=","item_pic.jpg","float","</a>","href=","<img ","siteid=cntaobao&status=1&charset=utf-8","amos.alicdn.com/realonline.aw?v","site=cntaobao&s=2&charset=utf-8"," 50% 50% ","white-space","$","`",">","<");  
$replace = array("^00","^01","^02","^03","^04","^05","^06","^07","^08","^09","^0a","^0b","^0c","^0d","^0e","^0f","^0g","^0h","^0i","^0j","^0k","^0l","^0m","^0n","^0o","^0p","^0q","^0r","^0s","^0t","^0u","^0v","^0w","^0x","^0y","^50","^10","^11","^12","^13","^14","^15","^16","^17","^18","^19","^1a","^1b","^1c","^1d","^1e","^1f","^1g","^1h","^1i","^1j","^1k","^1l","^1m","^1n","^1o","^1p","^1q","^1r","^1s","^1t","^1u","^1v","^1w","^1x","^1y","^1z","^20","^21","^22","^23","^24","^25","^26","^27","^28","^29","^2a","^2b","^2c","^2d","^2e","^2f","^2g","^2h","^2i","^2j","^2k","^2l","^2m","^2n","^2o","^2p","^2q","^2r","^2s","^2t","^2u","^2v","^2w","^2x","^2y","^2z","^30","^31","^32","^33","^34","^35","^36","^37","^38","^39","^3a","^3b","^3c","^3d","^3e","^3f","^3g","^3h","^3i","^3j","^3k","^3l","^3m","^3n","^3o","^3p","^3q","^3r","^3s","^3t","^3u","^3v","^3w","^3x","^3y","^3z","^40","^41","^42","^43","^44","^45","^46","^47","^48","^49","^4a","^4b","^4c","^4d","^4e","^4f","^4g","^4h","^4i","^4j","^4k","^4l","^4m","^4n","^4o","^4p","^4q","^4r","^4s","^4t","^4u","^4v","^4w","^4x","^4y","^4z","^51","^52","^53","^54","^55","^56","^57","^58","^59","^5a","^5b","^5c","^5d","^5e","^5f","^5g","^5h","^5i","^5j","^5k","^5l","^5m","^5n","^5o","^5p","^5q","^5r","^5s","^5t","^5u","^5v","^5w","^5x","^5y","^5z","^60","^61","^62","^63","^64","^65","^66","^67","^68","^69","^6a","^6b","^6c","^6d","^6e","^6f","^6g","^6h","^6i","^6j","^6k","^6l","^6m","^6n","^6o","^6p","^6q","^6r","^6s","^6t","^6u","^6v","^6w","^6x","^6y","^6z","^70","^71","^72","^73","^74","^75","^76","^77","^78","^79","^7a","^7b","^7c","^7d","^7e","^7f","^7g","^7h","^7i","^7j","^7k","^7l","^7m","^7n","^7o","^7p","^7q","^7r","^7s","^7t","^7u","^7v","^7w","^7x","^7y","^7z","^80","^81","^82","^83","^84","^85","^86","^87","^88","^89","^8a","^8b","^8c","^8d","^8e","^8f","^8g","^8h","^8i","^8j","^8k","^8l","^8m","^8n","^8o","^8p","^8q","^8r","`","$");  
$data4=str_replace($search,$replace, $str);
?>
<div class="codeforgen-head">
	<textarea id="codeTextHidden" name="codeHidden" style="width:460px;height:230px;display:none;"><?=$data?></textarea>
	<? if($codePopup!==''){ ?><textarea id="codeTextHidden1" name="codeHidden1" style="width:460px;height:230px;display:none;"><?=$data2?></textarea><? }?>
		<input type="hidden" id="codeTextName" name="codeTextName" value="codeText" />
	<ul>
		<li>
			<label><span style="margin-left:10px;">当前模块宽</span>&nbsp;</label>
			<input id="m_ow" style="width:40px;" class="setinput" type="text" title="" name="m_ow" value="<?=$size['w']?>" />
			<label>&nbsp;&nbsp;高&nbsp;</label>
			<input id="m_oh" style="width:40px;" class="setinput" type="text" title="" name="m_oh" value="<?=$size['h']?>" />
			<label>&nbsp;&nbsp;&nbsp;当内容超出模块范围时：&nbsp;</label>
			<div id="rm_o1">
				<input class="cfgl-rr" type="radio" id="m_o2" name="overflowMode"  value="visible" />
				<label class="cfgl-radio " for="m_o2" id="bcdmshdcdo" title="" style="border-right:none;border-radius:2px 0 0 2px;">显示</label>
				<input class="cfgl-rr" type="radio" id="m_o1" name="overflowMode"  value="hidden"  />
				<label class="cfgl-radio " for="m_o1" id="bcdmshdcdx" title="" style="border-left:none;border-radius:0 2px 2px 0;">裁掉</label>
			</div>
		</li>
	</ul>
	<div style="color: #393; text-indent: 10px;">此处生成的代码不再有全屏/商城/集市自定义之分，可将代码放入任意模块，不再区分模块。</div>
</div>
<div style="position:absolute;bottom:15px;left:27px;background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2JjUPbmiJ.eBjSspiXXbqAFXa-39767794.png) 0 0 repeat-y;color:#FFF;height:30px;line-height:30px;z-index:1;padding:0 16px;border-radius:2px;"><span>代码量:</span><span id="curCodeSize1"></span><span id="curCodeText" style="margin-left:105px;position:absolute;display:block;width:300px;top:0;"></span></div>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">自定义代码</a></li>
        <?  if(!empty($codePopup)){ ?><li style="margin-left: 2px;"><a href="#tabs-2">店招与下拉</a></li><? } ?>
		<li style="margin-left: 2px;"><a href="#tabs-3">天猫活动页</a></li>
		<li style="margin-left: 2px;display: none;"><a href="#tabs-4">精简化代码</a></li>

	</ul>
	<div id="tabs-1">
		<ul class="setform">
				<li style="line-height:55px;margin-left: -5px;border-radius:2px;color: #666;">本工具生成的代码，只能在<a class="june-preview" target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.Oo0wVD&designerId=1016893" style="color:#069;font-weight: 700;">沃姆设计</a>的模板中使用。<a class="june-preview" target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.Oo0wVD&designerId=1016893" style="color:#069;font-weight: 700;">查看全部模板></a></li>
				<li style="margin-left: -5px;">
				<!--分享保存修复三个按钮
				<div style="float:left;width:40px;line-height:35px;">
				<button type="button" class="" data-target="otherset-clicked" data-oths="sharecode;codeText" style=" border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px; /* border-right: none; */ cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold; margin-top:15px;">分享</button>
				<button type="button" class="" data-target="otherset-clicked" data-oths="savecode;saveCode" style=" border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px; /* border-right: none; */ cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold;margin-top:0px;">保存</button>
				<button type="button" class="" data-target="otherset-clicked" data-oths="sharecode;rePair" style=" border: none; background: #f9f9f9; border: 1px #ddd solid; width: 48px; height: 30px; /* border-right: none; */ cursor: pointer; position: relative; left: -10px; color: #788188; font-weight: bold;margin-top:0px;">修复</button>
				</div>
				-->
				<textarea id="codeText" name="code" style="float:left;width:470px;height:230px;"><?=$data?></textarea>
			</li>
		</ul>
	</div>
		
        
    <?  if(!empty($codePopup)){ ?>
		<div id="tabs-2">
		<ul class="setform">
			<li style="line-height:55px;margin-left: -5px;border-radius:2px;color: #666;"><div style="line-height:30px;">此处生成的代码，只用于制作<span style="color:#069;font-weight:bold;">自定义店招及导航下拉</span>时使用。</div><div style="height: 22px;line-height: 18px;"><span style="font-size:10px;color:#9c9c9c;">Ps：上面一段代码放在店招的区域内，下面一段代码放在页尾的导航下拉菜单内。</span></div></li>
			<li style="margin-left: -5px;">
				<textarea id="codeText3" name="code" style="float:left;width:470px;height:100px;"><?=$data2?></textarea>
			</li>
			<li style="margin-left: -5px;">
				<textarea id="codeText3b" name="code_popup" style="margin-top:10px;float:left;width:470px;height:100px;"><?=$codePopup?></textarea>
			</li>
		</ul>
	</div>
    <? } ?>     
        
		<div id="tabs-3">
		<ul class="setform">
			<li style="line-height:55px;margin-left: -5px;border-radius:2px;color: #666;"><div>
			<input id="cjy_deleteSpaceBtn" type="checkbox" style="display: inline-block;vertical-align: middle;margin-left: 0;" spellcheck="false"><label style="width:auto;color:#19c2d1;cursor:pointer;display: inline-block;padding: 0 0 0 5px;float: none;font-size: 12px;line-height:36px;" for="cjy_deleteSpaceBtn">覆盖头部模块(模块高度需大于300)</label>

			<input id="cjy_activeSpaceBtn" type="checkbox" style="display: inline-block;vertical-align: middle;margin-left: 50px;" spellcheck="false"><label style="width:auto;color:#19c2d1;cursor:pointer;display: inline-block;padding: 0 0 0 5px;float: none;font-size: 12px;line-height:36px;" for="cjy_activeSpaceBtn">含有未参加活动商品</label>

			<input type="radio" id="cjy_sctype" name="cjy_type" checked="true" value="sc" style="display: inline-block;vertical-align: middle;margin-left: 20px;display: none;" /><label for="cjy_sctype" style="color:#19c2d1;cursor:pointer;display: inline;padding: 0;float: none;font-size: 12px;line-height:13px;display: none;"> 商城</label>
			<input type="radio" id="cjy_cdtype" name="cjy_type" value="cd" style="display: inline-block;vertical-align: middle;margin-left: 10px;display: none;" /><label for="cjy_cdtype" style="color:#19c2d1;cursor:pointer;display: inline;padding: 0;float: none;font-size: 12px;line-height:13px;display: none;"> C店</label>
			</div></li>
			<li style="margin-left: -5px;">
				<textarea id="codeText4" name="code" style="float:left;width:470px;height:230px;"></textarea>
			</li>
		</ul>
	</div>

<div id="tabs-4">
		<ul class="setform">
			<li style="line-height:55px;margin-left: -5px;border-radius:2px;color: #666;"><div>精简版的代码，必须放在<strong style="color:#19c2d1">【设计师模块】</strong>里的<strong style="color:#19c2d1">【DIY模块】</strong>中使用。</div></li>
			<li style="margin-left: -5px;">
				<textarea id="codeText5" name="code" style="float:left;width:470px;height:230px;"><?=str_replace('\\','',$data4)?></textarea>
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
				setTimeout(function() {$("#curCodeSize1").html( ($("#codeText").val().length / 1024).toFixed(1)+"KB");getCodeStatus();},500);
			} else if(index == 1) {
				if($("#codeText3").length > 0) {
					$("#codeTextName").val("codeText3");
					setTimeout(function() {$("#curCodeSize1").html( (($("#codeText3").val().length+$("#codeText3b").val().length) / 1024).toFixed(1)+"KB");getCodeStatus();},500);
				} else {
					$("#codeTextName").val("codeText4");
					setTimeout(function() {$("#curCodeSize1").html( ($("#codeText4").val().length / 1024).toFixed(1)+"KB");getCodeStatus();},500);
				}
			} else if(index == 2) {
				if($("#codeText3").length > 0) {
					$("#codeTextName").val("codeText4");
					setTimeout(function() {$("#curCodeSize1").html( ($("#codeText4").val().length / 1024).toFixed(1)+"KB");getCodeStatus();},500);
				}else{
					$("#codeTextName").val("codeText5");
					setTimeout(function() {$("#curCodeSize1").html( ($("#codeText5").val().length / 1024).toFixed(1)+"KB");getCodeStatus();},500);
				}
			} else if(index == 3){
				$("#codeTextName").val("codeText5");
				setTimeout(function() {$("#curCodeSize1").html( ($("#codeText5").val().length / 1024).toFixed(1)+"KB");getCodeStatus();},500);
			}
		}
	});
	$(".ui-dialog-content textarea").buttonset();
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

	function getCodeStatus() {
		var _s = $("#curCodeSize1"), _text = $("#curCodeText"), size  = m(_s.html()); var dkb = _s.html().split("KB"); size=dkb[0];
		_text.html("");
		if(size >= 50 && size < 120) {
			//if($("#codeText5").is(":hidden")) {
				_s.parent().css("background", "url(https://img.alicdn.com/imgextra/i1/39767794/TB2IgukbJuO.eBjSZFCXXXULFXa-39767794.png) 0 0 repeat-y");
				_text.css("color", "#FF6619").html("代码超过50KB，必须在设计师模块使用！")
			//}
		} else if(size >= 120) {
			if($("#codeText5").is(":hidden")) {
				_s.parent().css("background", "url(https://img.alicdn.com/imgextra/i1/39767794/TB2mHaobF5N.eBjSZFKXXX_QVXa-39767794.png) 0 0 repeat-y");
				_text.css("color", "#FF3333").html("代码超过120KB，建议精简化代码！")
			} else {
				_s.parent().css("background", "url(https://img.alicdn.com/imgextra/i1/39767794/TB2mHaobF5N.eBjSZFKXXX_QVXa-39767794.png) 0 0 repeat-y");
				_text.css("color", "#FF3333").html("代码超过120KB，建议分模块设计！")
			}
		}
	}
	
	function changeCode(isOverflow, moduleWidth, moduleHeight) {
		var newcode = "", newcode4, moduleHeight4, moduleWidth4 , moduleTop4;
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
			
			//if(!!$("#cjy_deleteSpaceBtn").prop("checked")) {
			//	str = style + "margin-left:50%;left:-"+(moduleWidth / 2)+'px;"';
			//	newcode4 = code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
			//	moduleHeight4 = moduleHeight - 20;
			//} else {
			//	str = style + "margin-left:50%;left:-"+(moduleWidth / 2)+'px;"';
			//	newcode4 = code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
			//	moduleHeight4 = moduleHeight;
			//}

			if(!!$("#cjy_deleteSpaceBtn").prop("checked")) {
				str = style + "margin-left:50%;left:-"+(moduleWidth / 2)+'px;"';
				newcode4 = code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
				moduleHeight4 = moduleHeight - 300;
				moduleTop4 = "top:-300px;";
			}else{
				str = style + "margin-left:50%;left:-"+(moduleWidth / 2)+'px;"';
				newcode4 = code.replace(/style\=\"junezxleftisme\;([^\"]*)\"/, str);
				moduleHeight4 = moduleHeight;
				moduleTop4 = "";
			}

			if(!!$("#cjy_activeSpaceBtn").prop("checked")) {
				var re = new RegExp(/[?]id=/g);
				newcode4 = code.replace(re,'?id=%20');
			}else{
				var re1 = new RegExp(/[?]id=%20/g);
				newcode4 = code.replace(re1,'?id=');
			}
			
		});
		if($("input[name='cjy_type']:checked").val() == "cd") {
			moduleWidth4 = 950;
		} else {
			moduleWidth4 = 990;
		}
		var reg=/\\/g;/*****替换代码中的'\'符号****/
		$("#codeText").val(newcode.replace(reg,''));
		$("#codeText4").val('<div class="ele-womu-rel" style="height:'+moduleHeight4+'px;"><div class="abs" style="width:'+moduleWidth4+'px;'+moduleTop4+'">'+newcode4.replace(reg,'')+'</div></div>');
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
			$("#codeText3").val(newcode3a.replace(reg,''));
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
	$("#curCodeSize1").html( ($("#codeText").val().length / 1024).toFixed(1)+"KB");
	getCodeStatus();
	
	$("#cjy_deleteSpaceBtn, input[name='cjy_type']").on("change", function(event) {
		var isOverflow = $("#rm_o1").children("input[name='overflowMode']:checked").val(),
			moduleWidth = parseInt($("#m_ow").val() || 0,10),
			moduleHeight = parseInt($("#m_oh").val() || 0,10);
		changeCode(isOverflow, moduleWidth, moduleHeight);
	});
	/*承接页未参加活动*/
	$("#cjy_activeSpaceBtn").on("change", function(event) {
		var isOverflow = $("#rm_o1").children("input[name='overflowMode']:checked").val(),
			moduleWidth = parseInt($("#m_ow").val() || 0,10),
			moduleHeight = parseInt($("#m_oh").val() || 0,10);
		changeCode(isOverflow, moduleWidth, moduleHeight);
	});
	
setTimeout(function() {
	// IE
	if(document.all) {
		document.getElementById("<?=$oddd?>").click();
		
	}
	// 其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		document.getElementById("<?=$oddd?>").dispatchEvent(e);

	}
}, 100);
	
	
});
</script>