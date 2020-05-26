<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="css/3i.css">
<script src="http://g.tbcdn.cn/kissy/k/1.3.2/seed-min.js"></script>
<script src="js/preview/sns-core.js"></script>
<style>.ks-popup-hidden {display:none;}.ks-popup-shown {display:block;}</style>
<style></style>
</head>
<body style="overflow-y:scroll;overflow-x:auto;">
	
	<div class="top">
		<div class="top_c">
	    	<div class="top_cl"></div>
	        <?php
			error_reporting(E_ALL ^ E_DEPRECATED);
			 @$id=$_GET['id'];
			 ?>
	        <div class="bd_top" style="width:250px; margin:14px auto; overflow:hidden;"><div class="diyedit"><a href="index.php#i_<?=$id?>" title="立即编辑">立即编辑</a><a href="javascript:void(window.close());">关闭</a></div></div>
	        <?  ?>
	        <div class="top_cr">
	        	<span style="display:none">
	            	<a class="a1" href="#" title="xx" target="_blank"></a>
	                <a class="a2" href="#" title="xx" target="_blank"></a>
	            </span>
	        </div>
	    </div>
	    <div style="padding-top:10px;width:100%;text-align:center;color:#666;overflow: hidden;">
	    	<span style="padding-right:30px;">小提示：店招/页尾代码放设计师模块里，其他全屏代码直接放入自定义模块即可！</span>
	    	<span>旺旺咨询:</span>
	    	<a target="_blank" href="http://amos.alicdn.com/getcid.aw?v=2&uid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&site=cntaobao&s=2&groupid=0&charset=utf-8" title="点击这里给我发消息"><img src="http://amos.alicdn.com/online.aw?v=2&uid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&site=cntaobao&s=1&charset=utf-8" style="display: inline-block;margin-top:-4px;float: none;vertical-align:middle;"  /></a>
	    	<span style="padding-left:30px;">商家交流群:</span>
	    	<a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=8f49285a5c503cd3a8deb28038ad156887f7250e6dc562e44221b4c5de41778a"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="沃姆设计分享群" title="沃姆设计分享群" style="display: inline-block;margin-top:-4px;float: none;vertical-align:middle;" ></a>
	    	<span style="padding-left:30px;">节假日不在线可电话咨询：15355003615</span>
	    </div>
	</div>



   <div class="codebox" style="width:1920px;overflow: hidden;">
     <div id="main">
        
        <?

		
		echo $str;
		?>
        
        
     </div>
  </div>
<script charset="utf-8" src="http://g.tbcdn.cn/kissy/k/1.3.2/json-min.js"></script>
<script type="text/javascript" src="js/lib/3b.js"></script>
<script type="text/javascript" src="js/preview/countdown.js"></script>
<script>

var tempSrollNum = Math.abs($(window).width() - $("#main").children("div.rel").width()) / 2;
$(window).scrollLeft(tempSrollNum);
$("div.codebox").css({"width":$("#main").children("div.rel").width()+"px","margin":"0px auto"});
$("#main").children("div.rel").css({
	"margin-left":"50%",
	"left": "-"+($("#main").children("div.rel").width() / 2)+"px"
});
$(".jpb").each(function() {
	var _t = $(this);
	_t.addClass("").attr("style", "z-index:99;display:block;visibility:hidden;");
});
$(".japb").each(function() {
	var _t = $(this);
	_t.addClass("").attr("style", "z-index:99;display:block;visibility:hidden;");
});

$(".jplb").each(function() {
	var plHtml = '<div class="sns-widget sns-comment sns-widget-ui" data-comment="{&quot;param&quot;:{&quot;type_id&quot;:&quot;1100035&quot;,&quot;rec_user_id&quot;:&quot;-1&quot;,&quot;moreurl&quot;:&quot;http://item.taobao.com/item.htm?id=15705806426&quot;,&quot;target_key&quot;:&quot;huodong_35614370&quot;,&quot;title&quot;:&quot;空中红秀阁&quot;,&quot;page_size&quot;:3,&quot;view&quot;:&quot;default_list&quot;},&quot;paramList&quot;:{&quot;view&quot;:&quot;list_trunPage&quot;}}"><div class="comment-widget"><div class="comment-edit">        <div class="comment-add"><div class="textarea-b"><textarea class="f-txt" resize="none" style="" placeholder="我也插句话..."></textarea>        </div><div style="display: none;" class="checkcode sns-nf">        <span>验证码：</span>        <input type="text" style="width: 5em;" tabindex="3" class="f-checkcode" maxlength="4" size="4" name="TPL_checkcode">        <img height="35" width="85" style="vertical-align: middle;">        <span style="margin: 0pt 10px 0pt 0pt;">(不区分大小写)</span>        <a class="newCheckCode" href="#">换一张</a>        </div>        <div class="act">        <span class="skin-blue"><em class="J_LetterCount">0/140</em><span class="btn"><a href="#" class="J_PostComment">评论</a></span></span>        <a href="#" class="face">表情</a>            <label>    <input type="checkbox" class="J_SycMB"> 同时转发到我的淘宝    </label>            </div>        </div></div><ul class="comment-list"></ul></div></div>';
	$(this).html(plHtml);
});
$(".jib").children().each(function() {
	var box = $(this);
	box.children().each(function() {
		var _t = $(this);
		if(_t.attr("data-u") || _t.attr("data-u") == "") {
			_t.html(_t.attr("data-u"));
		}
	})
});
$(".jnwz").each(function() {
	var character = $(this), modeArr, temph, tempharr;
	if(character.attr("data-t")) {
		modeArr = character.attr("data-t").split(";");
		if(modeArr[0] && modeArr[0]!="text") {
			temph = character.attr("data-h") || ";";
			tempharr = temph.split(";");
			character.children("a:eq(0)").html(tempharr[0]);
		}
		if(modeArr[1] && modeArr[1]!="text") {
			temph = character.attr("data-hh") || ";";
			tempharr = temph.split(";");
			character.children("a:eq(1)").html(tempharr[0]);
		}
	} 
});
if($("div.jnxfbox").length > 0) {
	$("div.jnxfbox").height("100%").css("overflow", "hidden");
}
var o = window.opener;
KISSY.use("node,button, dd,switchable, resizable,ua,event,overlay,ajax,countdown, dom", function (S, Node, Button, DD, Switchable, Resizable, UA, Event, Overlay, Ajax, Countdown) {
	var DDM = DD.DDM, DOM = S.DOM;
	S.ready(function () {
		var source = document.getElementById('main').innerHTML;
		S.all('.J_TWidget').each(function (v, k) {
			var t = v.attr('data-widget-type'),
				cfg = S.JSON.parse(v.attr('data-widget-config').replace(/\'/g, "\""));
			if (cfg) {
				cfg.srcNode = v;
				if (t == 'Popup') {
					cfg.triggerType = 'mouse';
					window.popup = new Overlay.Popup(cfg);
				} else if (t == 'Carousel') {
					window.popup = new Switchable.Carousel(v, cfg);
				} else if (t == 'Slide') {
					window.popup = new Switchable.Slide(v, cfg);
				} else if(t=='Tabs'){
					window.popup = new Switchable.Tabs(v,cfg);
				} else if(t=='Countdown') {
					new Countdown(v,cfg.endTime,cfg);
				} else if(t=='Accordion') {
					new Switchable.Accordion(v,cfg);
				}
			}
		});
		S.each(S.all('.sns-widget'),function(v){
			SNS.active(v);
		});
	});
});
</script>
</body></html>
