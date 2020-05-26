
$(function() {
	
	/**
data1=$('#dqpannel').html();
data2=$('#keyboardpannel').html();
layer.open({
        type: 1,
		shade: false,
        area: ['600px', '360px'],
        shadeClose: false, //点击遮罩关闭
        content: data1
    });
	
	

var Tan01 = $('#sidemenu').html();
    $('#sidemenu').remove();
    San01='<div id="sidemenu"><div id="mouseaction">'+Tan01+'</div></div>';
    $('#june').append(San01);
	$("#sidemenu").show();
**/
 $('#xifuconfig').html("<i></i>智能吸附");
 $('#kbhelp').html("<i></i>快捷键");
 

 //$('#preview').html("效果预览");
 
 
 $('#courseStep1').remove();
 $('#configgroup .lianxiwo').remove();
 $('#configgroup .zuhe').remove();
 $('#configgroup .shensuo').attr('id','shensuoxxx');
 $('#configgroup .yingyong').attr('id','yingyongxxx');
 $("#yingyongxxx").addClass("yingyongxxx");
 $('#configgroup .shezhi').remove();
 $('#configgroup').append('<div id="shousuomark" style="display:none"></div>');



function tuodongfs(div,hd,bd) {
$(hd).mousedown( 
function (event) { 
var isMove = true; 
var abs_x = event.pageX - $(div).offset().left; 
var abs_y = event.pageY - $(div).offset().top; 
$(document).mousemove(function (event) { 
if (isMove) {var obj = $(div); obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y}); }})
.mouseup(function () { isMove = false; });}
)}
//	tuodongfs("#sidebar-tab","#tab-title","#applist");

//组装tab


$("#moduleset .setinput").each(function(key, val){
 $(this).addClass("mkbgxx"+key);
});

 /**
var Tan03 = $('#applist').html();
    yuanx=$('#rightpannel').html();
    $('#leftconsole').remove();
    San03='<div id="appdivxd"><div id="apptitle"><span class="rshousuo"></span></div><div id="applistx">'+Tan03+'</div></div>'+yuanx;
    $('#rightpannel').html(San03);


/**

<div id="sidebar-tab"> 
<div id="tab-title"> 
<h3><span class="selected">最新评论</span><span>近期热评</span><span>随机文章</span></h3> 
</div> 
<div id="tab-content"> 
<ul><li>1234567890-1</li></ul> 
<ul class="hide"><li>1234567890-2</li></ul> 
<ul class="hide"><li>1234567890-3</li></ul> 
</div> 
</div> 
/**/


function annid_div(s) {
 if(1==1){
setTimeout(function() {
	if(document.all) {
		document.getElementById(s).click();
	}
	// 其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		document.getElementById(s).dispatchEvent(e);
	}
}, 100);
}
}


 if(1==2){
// 秒后模拟点击

setTimeout(function() {
	// IE
	if(document.all) {
		document.getElementById("shensuoxxx").click();
		$('#shensuoxxx').remove();
	}
	// 其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		document.getElementById("shensuoxxx").dispatchEvent(e);
		$('#shensuoxxx').remove();
	}
}, 100);

 }
   
 
	
$('#tab-title span').click(function(){ 
$(this).addClass("selected").siblings().removeClass();//removeClass就是删除当前其他类；只有当前对象有addClass("selected")；siblings()意思就是当前对象的同级元素，removeClass就是删除； 
$("#tab-content > .tabul").hide().eq($('#tab-title span').index(this)).show(); 
}); 
	


window.qjbl0offsleft;
window.qjbl0offsleft = 260;

/**/

$("#yingyongxxx").click(function(){
	var a = $("#box").width(),
		e = $("#box #junebox").width();
	if($('#yingyongxxx').hasClass("yingyongxxx")){
	$("#yingyongxxx").removeClass("yingyongxxx");
	$("#yingyongxxx").html("展开面板");
	$('#leftpannel').hide();
	$('#leftconsole').hide();
	
	 $("#box,.rg-overlay").css({
			width: a + 150 ,
			left: 60 
		}), $("#box #junebox").css({
			width: e  + 150 
		}), $(".rg-overlay").css({
			left: 60 
		})
	

	annid_div("shensuoxxx");
	annid_div("shensuoxxx");

		}else{
  $("#yingyongxxx").addClass("yingyongxxx");
	$("#yingyongxxx").html("收起面板");
  $('#leftpannel').show();
  $('#leftconsole').show();
  
  $("#box,.rg-overlay").css({
			width: a -150 ,
			left: 60 +150
		}), $("#box #junebox").css({
			width: e  - 150 
		}), $(".rg-overlay").css({
			left: 60 +150
		})

  annid_div("shensuoxxx");
  annid_div("shensuoxxx");


 }
})
/**/

$("#shensuoxxx").click(function(){
	if($('#shensuoxxx').hasClass("shouqi")){
	
	if($('#yingyongxxx').hasClass("yingyongxxx")){annwid=150;}else{annwid=0;}
	$("#mouseaction").show();
	$("#configgroup .sidebutton").show();

	$("#sidemenu").css( {height:$(window).height()-60+"px",bottom:"auto",top:"60px"});
	$("#box").css( {left:annwid+60+"px"});	
	$(".rg-overlay").css( {left:annwid+60+"px"});
	
		}else{
  $("#mouseaction").hide();
  $("#configgroup .sidebutton").hide();
  $("#configgroup .shensuo").show();

  $("#sidemenu").css( {height:"70px",bottom:"0",top:"auto"});
  
  $("#box").css( {left:"0"});
  $(".rg-overlay").css( {left:"0"});

 }
 
})


/**/

});





















