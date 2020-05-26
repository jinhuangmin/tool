<!DOCTYPE html><html><head><meta charset=gb2312><title>  六月设计 JUNEZX 模板装修辅助工具2.0 方便智能的淘宝装修代码生成工具 POWER BY junezx</title><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="renderer" content="webkit"><link rel="stylesheet" type="text/css" href="css/preview.css" tppabs="http://junezx.com/2.0/css/preview.css">
<script src="../../g.tbcdn.cn/kissy/k/1.3.2/seed-min.js" tppabs="http://g.tbcdn.cn/kissy/k/1.3.2/seed-min.js"></script><script src="js/lib/sns-core.js" tppabs="http://junezx.com/2.0/js/lib/sns-core.js"></script><style>.ks-popup-hidden {display:none;}.ks-popup-shown {display:block;}</style></head><body style="overflow-y:scroll;overflow-x:auto;"><div id="msgFixed" style="display:none;position:relative;top:0;left:0;right:0;height:30px;color:#DB7C22;border:1px solid #FFBB76;background:#FFFCEF;z-index: 99;text-align: center;line-height: 30px; "><strong>注意：</strong>当前预览可能已经失败，页面所显示的为最新的生成结果，如需重新预览，请返回重新预览!。<span style="color:#2468a2;cursor:pointer;">点击此处离开页面</span></div><div class="codebox" style="width:1920px;"><div id="main" data-alert="yes"></div></div>
<!--
<script src="http://g.tbcdn.cn/kissy/k/1.3.2/seed-min.js"></script>
<script charset="utf-8" src="http://g.tbcdn.cn/kissy/k/1.3.2/json-min.js" async=""></script>
<script src="http://a.tbcdn.cn/p/snsdk/core.js"></script>
<script type="text/javascript" src="http://a.tbcdn.cn/apps/matrix-apps/platform_v2/set-inside.js"></script>
-->
<script charset="utf-8" src="../../g.tbcdn.cn/kissy/k/1.3.2/json-min.js" tppabs="http://g.tbcdn.cn/kissy/k/1.3.2/json-min.js" async=""></script>
<script type="text/javascript" src="js/b.js" tppabs="http://junezx.com/2.0/js/b.js"></script>
<script type="text/javascript" src="js/lib/cd.js" tppabs="http://junezx.com/2.0/js/lib/cd.js"></script>
<script>
function dbreturn(val){
	if(val<10){
		return "0"+val;
	}else{
		return val;
	}
}
var tempSrollNum = Math.abs($(window).width() - $("div.rel").width()) / 2;
$(window).scrollLeft(tempSrollNum);
if($("#main").attr("data-alert") == "yes") {
	alert("预览失败，请返回重新预览!");
	//window.close();
} else if($("#main").attr("data-alert") == "ok") {
	//$("#msgFixed").slideDown();
	// $("#msgFixed").on("click", "span", function() {
		// window.close();
	// });
}

$("div.codebox").css({"width":$("div.rel").width()+"px","margin":"0px auto"});
$("div.rel").css({"margin-left":"0px"});
$(".jpb").each(function() {
	var _t = $(this);
	_t.addClass("ks-popup-hidden").attr("style", "z-index:99;display:block;visibility:hidden;");//.appendTo($("#main").children("http://junezx.com/2.0/div.rel"));
	// if(config.align && config.align.offset) {
		// config.align.offset[0] = parseInt(config.align.offset[0], 10) + tempSrollNum;
		// _t.attr("data-widget-config", JSON.stringify(config));
	// }
});
$(".japb").each(function() {
	var _t = $(this);
	_t.addClass("ks-popup-hidden").attr("style", "z-index:99;display:block;visibility:hidden;");//.appendTo($("#main").children("http://junezx.com/2.0/div.rel"));
	// if(config.align && config.align.offset) {
		// config.align.offset[0] = parseInt(config.align.offset[0], 10) + tempSrollNum;
		// _t.attr("data-widget-config", JSON.stringify(config));
	// }
});

$(".jplb").each(function() {
	var plHtml = '<div class="sns-widget sns-comment sns-widget-ui" data-comment="{&quot;param&quot;:{&quot;type_id&quot;:&quot;1100035&quot;,&quot;rec_user_id&quot;:&quot;-1&quot;,&quot;moreurl&quot;:&quot;http://item.taobao.com/item.htm?id=15705806426&quot;,&quot;target_key&quot;:&quot;huodong_35614370&quot;,&quot;title&quot;:&quot;空中红秀阁&quot;,&quot;page_size&quot;:3,&quot;view&quot;:&quot;default_list&quot;},&quot;paramList&quot;:{&quot;view&quot;:&quot;list_trunPage&quot;}}"><div class="comment-widget"><div class="comment-edit">        <div class="comment-add"><div class="textarea-b"><textarea class="f-txt" resize="none" style="" placeholder="我也插句话..."></textarea>        </div><div style="display: none;" class="checkcode sns-nf">        <span>验证码：</span>        <input type="text" style="width: 5em;" tabindex="3" class="f-checkcode" maxlength="4" size="4" name="TPL_checkcode">        <img height="35" width="85" style="vertical-align: middle;">        <span style="margin: 0pt 10px 0pt 0pt;">(不区分大小写)</span>        <a class="newCheckCode" href="#">换一张</a>        </div>        <div class="act">        <span class="skin-blue"><em class="J_LetterCount">0/140</em><span class="btn"><a href="#" class="J_PostComment">评论</a></span></span>        <a href="#" class="face">表情</a>            <label>    <input type="checkbox" class="J_SycMB"> 同时转发到我的淘宝    </label>            </div>        </div></div><ul class="comment-list"></ul></div></div>';
	$(this).html(plHtml);
});
$(".jib").children().each(function() {
	var box = $(this);
	box.children().each(function() {
		var _t = $(this);
		if(_t.attr("data-u")) {
			_t.html(_t.attr("data-u"));
		}
	})
});
$(".jcb").each(function() {
	var character = $(this);
	if(character.attr("data-t") && character.attr("data-t") != "text") {
		var temph = character.attr("data-h") || ";",
			tempharr = temph.split(";");
		character.children("a").html(tempharr[0]);
	} 
});
if($("div.jnxfbox").length > 0) {
	$("div.jnxfbox").height("100%").css("overflow", "hidden");
}
var o = window.opener;
KISSY.use("node,button, dd,switchable, resizable,ua,event,overlay,ajax,countdown,dom", function (S, Node, Button, DD, Switchable, Resizable, UA, Event, Overlay, Ajax, Countdown) {
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
			//console.log(v);
			
		});
	});
});
</script>
</body></html>

