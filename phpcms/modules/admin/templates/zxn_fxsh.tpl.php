<?php
defined('IN_ADMIN') or exit('No permission resources.');
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <link rel="stylesheet" type="text/css" href="/statics/zxn/css/preview.css">
	<script src="http://g.tbcdn.cn/kissy/k/1.3.2/seed-min.js"></script>
	<script src="/statics/zxn/js/lib/sns-core.js"></script>
    <script type="text/javascript" src="/statics/js/jquery.min.js"></script>
	<style>.ks-popup-hidden {display:none;}.ks-popup-shown {display:block;}</style>
</head>

<?
	
$code=$html;	
	
$SavePicName='';$q0='';$q1='';$q2='';$q3='';$q4='';$w0='';$w1='';$w2='';$w3='';$w4='';

$html=str_replace("https","http",$html);


	
	$q0= explode("background",$html);
	$num1=count($q0)-1;
	if($num1>0){
	for($i=1;$i<=$num1;$i++){
		$q1= explode(";",$q0[$i]);
		$q2= explode("(",$q1[0]);
		if(count($q2)>1){
			$q3= explode(")",$q2[1]);
			 $bgimg =str_replace('"','',$q3[0]); 
			 $img[]=$bgimg;
	$dbzb=substr($bgimg,0,4);
	if($dbzb=='http'){
		$SavePicName='';
		$SavePicName=get_photo($bgimg,'','./statics/linshi/fxhc/');
		$name[]=$SavePicName;
		$html =str_replace($bgimg,$SavePicName,$html); 
		}

			}
		}}

	$w0= explode("<img",$html);
	$num2=count($w0)-1;
	if($num2>0){
	for($i=1;$i<=$num2;$i++){
		$w1= explode(">",$w0[$i]);
		$w2= explode('src="',$w1[0]);
		if(count($w2)>1){
		$w3= explode('"',$w2[1]);
		$imgpic=$w3[0];
		$img[]=$imgpic;
	    $dbzb=substr($imgpic,0,4);
	if($dbzb=='http'){
		$SavePicName='';
		$SavePicName=get_photo($imgpic,'','./statics/linshi/fxhc/');
		$name[]=$SavePicName;
		$html =str_replace($imgpic,$SavePicName,$html); 
		}}
 	}}

  
		 ?>

<style>
#main{ position:relative; z-index:100}
#shenhe { width:600px; height:180px; border:1px solid #666; margin-top:5px; background:#fff; position:relative; margin:0 auto; padding:10px; margin-bottom:10px; position:fixed; right:0; bottom:0; z-index:1000}
#shenhe .info{ width:180px; height:152px; float:left; margin-top:14px}
#shenhe .item{ width:100%; height:28px}
#shenhe #huabu{ width:384px; height:152px; margin:14px; float:left; overflow:hidden}
#shenhe #huabu img{ width:384px}
#shenhe .ddaa{ width:180px; height:26px;}
#shenhe .ann{ height:22px; border:1px solid #D5D1D1; width:60px; float:left; text-align:center; color:#fff; line-height:22px; cursor:pointer}
#shenhe #anntg{ background:#44A400}
#shenhe #anndel{ background:#EF0003; margin-left:10px}
#slval,#picdata{ display:none}
</style>
<body style="overflow-y:scroll;overflow-x:auto;"><div class="codebox">
  <div id="main">
   <? print_r($html); ?>
  </div>
  
  <div id="shenhe">
    <div id="huabu"></div>
    <div class="info">
      
      <div class="item">
                <label>*标题</label>
                <input class="txt" type="text" id="title" name="title" value="">
            </div>
            <div class="item">
                <label>*用户</label>
                <input class="txt" type="text" id="user" name="user" value="<?=$user ?>">
            </div>
            <div class="item">
                <label>*分类</label>
                <input class="txt" type="text" id="cates" name="cates" value="通用">
            </div>
         <div class="ddaa"><div id="anntg" class="ann">通过</div><div id="anndel" class="ann">删除</div></div> 
         <div id="xiaoxi"></div>  
      </div>
    
    
  </div>
  <div id="ffff">
    <input class="txt" type="hidden" id="guan" name="guan" value="<?=$o?>">
    <input class="txt" type="hidden" id="id" name="id" value="<?=$id?>">
    <textarea class="txt" type="hidden" id="slval" name="slval"><?=$code ?></textarea>
    <textarea class="txt" type="hidden" id="picdata" name="picdata"></textarea>
   </div>
 </div>

<script type="text/javascript" src="/statics/html2canvas/build/html2canvas.js"></script>
<script type="text/javascript">
       
//$("div.codebox").css({"width":$("#main").children("div.rel").width()+"px","margin":"0px auto"});
$("#main").css({
	"margin":"0",
	"width": $("div.rel").width()+"px"
});   
$("#main").children("div.rel").css({
	"margin-left":"50%",
	"left": "-"+($("#main").children("div.rel").width() / 2)+"px"
});  	   
	   
function CloseWebPage(){
 if (navigator.userAgent.indexOf("MSIE") > 0) {
  if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
   window.opener = null;
   window.close();
  } else {
   window.open('', '_top');
   window.top.close();
  }
 }
 else if (navigator.userAgent.indexOf("Firefox") > 0) {
  window.location.href = 'about:blank ';
 } else {
  window.opener = null;
  window.open('', '_self', '');
  window.close();
 }
}	
	

if($('#guan').val()=="0"){CloseWebPage();}	
	

html2canvas(document.getElementById("main"), {
            onrendered: function(canvas) {
              //  document.getElementById("huabu").appendChild(canvas);
				var dataUrl =canvas.toDataURL(); 
                var newImg = document.createElement("img");
                newImg.src = dataUrl; 
				document.getElementById("huabu").appendChild(newImg);
			
            }
        });
		
		
	var dataUrl2='';	
$(document).ready(function(){
  $("#anntg").click(function(){
    if($("#title").val()==''||$("#user").val()==''){
		$("#xiaoxi").text("*不能为空");$('#xiaoxi').delay(100).show(1);
		}else{
	html2canvas(document.getElementById("huabu"), {
       onrendered: function(canvas) {
		  var dataUrl2 =canvas.toDataURL(); 
          var newImg2 = document.createElement("img");
          $('#picdata').val(dataUrl2); 
			}
        });
		
	var user = $('#user').val();
    var title = $('#title').val();
	var slval = $('#slval').val();
	var cates = $('#cates').val();
	var picdata = $('#picdata').val();
	var id = $('#id').val();
	var b={},copyjson;
	b.user=user;
	b.title=title;
	b.slval=slval;
	b.cates=cates;
	b.picdata=picdata;	
	b.id=id;	
		
	$.ajax({
		   type: "POST",
		   url: 'index.php?m=save&c=index&a=saveFX',
		   data: b,
		   success: function(msg){
			   if(msg==1){
			 $('#xiaoxi').html('添加成功,正在关闭页面'); 
			$('#xiaoxi').delay(100).show(1);
			$('#xiaoxi').delay(5000).hide(0);
			window.close();
				   }else{
			$('#xiaoxi').html(msg); 
			$('#xiaoxi').delay(100).show(1);
		//	$('#usaddjg').delay(5000).hide(0);	   
					   }
		}	
		});	
		
		
		}

  });
});



$(document).ready(function(){
  $("#anndel").click(function(){
    var id = $('#id').val();
	var b={},copyjson;
	b.ids=id;	
	$.ajax({
		   type: "POST",
		   url: 'index.php?m=save&c=index&a=saveFXDEL',
		   data: b,
		   success: function(msg){
			   if(msg[0]==true){
			 window.close();
				   }else{
			$('#xiaoxi').html(msg[1]); 
			$('#xiaoxi').delay(100).show(1);
		//	$('#usaddjg').delay(5000).hide(0);	   
					   }
		}	
		});	
  });
});
		
</script>




<script charset="utf-8" src="http://g.tbcdn.cn/kissy/k/1.3.2/json-min.js" async=""></script>
<script type="text/javascript" src="/statics/zxn/js/b.js"></script>
<script type="text/javascript" src="/statics/zxn/js/lib/cd.js"></script>
<script>
var tempSrollNum = Math.abs($(window).width() - $("#main").children("div.rel").width()) / 2;
$(window).scrollLeft(tempSrollNum);


$(".jpb").each(function() {
	var _t = $(this);//,config = JSON.parse(_t.attr("data-widget-config").replace(/\'/g, '"') || "{}")
	_t.addClass("ks-popup-hidden").attr("style", "z-index:99;display:block;visibility:hidden;");//.appendTo($("#main").children("div.rel"));
	// if(config.align && config.align.offset) {
		// config.align.offset[0] = parseInt(config.align.offset[0], 10) + tempSrollNum;
		// _t.attr("data-widget-config", JSON.stringify(config));
	// }
});
$(".japb").each(function() {
	var _t = $(this);
	_t.addClass("ks-popup-hidden").attr("style", "z-index:99;display:block;visibility:hidden;");//.appendTo($("#main").children("div.rel"));
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
		if(_t.attr("data-u") || _t.attr("data-u") == "") {
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
			//console.log(v);
			
		});
	});
});
</script>
</body></html>
