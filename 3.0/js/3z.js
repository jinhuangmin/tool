﻿define("scripts/main.js",function(a){var e,n,b=require("scripts/D");return $("#junebox").scrollbar({autoHide:!1}),b.junebox=$("#junebox").parent().parent(),require("scripts/lib/click"),require("scripts/lib/ucren"),e=require("scripts/action"),require("scripts/contextMenu"),require("scripts/little"),require("scripts/layer"),require("scripts/controlBtn"),require("scripts/littleTip"),require("scripts/mouse"),require("scripts/keyboard"),require("scripts/quickSet"),n=require("scripts/topManage"),stepins=require("scripts/stepins"),a.start=function(){var c,a=null;$(b.tLoadingDiv).appendTo(b.b).hide(),$("#applistbox").parent().parent().parent().parent().css({right:"auto"}),n.showTopManage("set"),b.june.css({"float":"left"}),$("#applist").resizable({handles:"s",minHeight:90,start:function(){$(this).addClass("drag-panel-active")},stop:function(){$(this).removeClass("drag-panel-active")}}),0==$("#juneDragHelper").length&&($('<div id="juneDragHelper"><div style="position:absolute;width:9999px;height:9999px;"></div></div>').appendTo(b.june),$("#juneDragHelper").offset({left:0,top:0}).width(0).height(0).hide()),$("#layerOpacity").on("keyup.lopacity change.lopacity",function(){var d=b.jSelectsedDom,f=$(this),g=f.val();d.each(function(){d.css("opacity",g/100).attr("data-lOpacity",g)}),a&&clearTimeout(a),a=setTimeout(function(){e.create("editOpacity",d)},200)}),$.widget("custom.fontselectmenu",$.ui.selectmenu,{_renderItem:function(a,b){var c=$("<li>");return $("<span>",{style:b.element.attr("data-style"),text:b.label}).appendTo(c),c.appendTo(a)}}),b.toClearInit(),startModule("scripts/checkHash"),c=getReferrer(),c&&/3\.0\/user_login\.php/.test(c)&&"yes"!=b.getCode("showportview")&&(stepins.start(),b.getCode("showportview","yes"))},a}),$(function(){var h,a=$(document),b=$("#bodybox"),c=$("#applist"),d=$("#toolnav"),f=($("#toolHeader"),$("#tBandExcept")),g=require("scripts/quickSet");a.tooltip({position:function(){var a=$(this),b=a.attr("data-opa");return"true"==b?{my:"center bottom",at:"center-10 top-2"}:"true1"==b?{my:"left top",at:"right+5 top"}:{my:"left top",at:"left bottom+5"}},show:{duration:"fast"},hide:{effect:"hide"}}),a.form_bgDragPos(),a.popupDragPos(),a.characterSetInDialog(),$(window).width()<1452?($(".pfbtnhead").children("span").children("span").hide(),$(".gjbtnhead").children("span").children("span").hide(),$(".kjjbtnhead").children("span").children("span").hide()):($(".pfbtnhead").children("span").children("span").show(),$(".gjbtnhead").children("span").children("span").show(),$(".kjjbtnhead").children("span").children("span").show()),startModule("scripts/main"),$("#tclist, #zdytclist, #applistbox, #kjjhover > div").scrollbar().on("resize.gezhonglist",function(){$(this).parent().parent().parent().data("antiscroll").refresh()}),$("#juneLoadingCanvas").hide(),a.spectrum({showPalette:!0,localStorageKey:"junezx.historycolor",palette:[],maxSelectionSize:18,showInitial:!0,preferredFormat:"hex",showButtons:!1,move:function(a,b){var f,i,h,c=b.attr("name"),d=a.toString();"p_bgcolor"==c?D.june.css("background-color",d):"jdb_bgColor"==c?D.jSelectsedDom.filter("[data-dbltype='jdb']").updateConfig({bgColor:d},function(a,b){var c=a.children(".j-tazb");submitColor(c,RGBToHex(b.bgColor,""),"rgba(25, 194, 209, 0.2)")}):"pencil_lineColor"==c?(D.jSelectsedDom.filter("[data-dbltype='jllb']").css("border-color",d).updateConfig({lineColor:d}),D.appConfig.jllb[2]["lineColor"]=d):"qs_characterColor"==c||"qs_characterBgColor"==c?(h=$("#wzpanel").data("_qsDom"),h&&h.length>0&&(i=h.attr("data-openLevel")||"no",c&&"no"!=i&&g.setChange(c,d,m(i)))):"assist_color"==c?(D.assistColor=d,$(".snap-line:not(.snap-center-line)").css({"background-color":d,color:d}),$(".snap-compare-line").css({"background-color":d,color:d}),$(".snap-compare-box").children(".sbody").css({"background-color":d,color:d}),$(".as-val").css({"background-color":d,color:hexToReverse(d)}),window.localStorage&&localStorage.setItem("tCookieJunezxUps_2",d)):"jcb_borderColor1"==c?D.jSelectsedDom.filter("[data-dbltype='jcb']").updateConfig({borderColor1:d},function(a,b){var c=a.children(".j-tazb");checkSubmitBorder(c,b)}):"jdb_borderColor1"==c?D.jSelectsedDom.filter("[data-dbltype='jdb']").updateConfig({borderColor1:d},function(a,b){var c=a.children(".j-tazb");checkSubmitBorder(c,b)}):"sdtz_bgcolor"==c?(f=$("#bgDragCloneBox"),_input=$("#bgDragBox").data("colorid"),f.css("background-color",RGBToHex(d,"")),_input.length>0&&_input.val(d)):"characterColor"==c?$("#textviewcontent").css("color",RGBToHex(d)):"characterBgColor"==c?$("#textviewcontent").css("background-color",RGBToHex(d,"")):"characterColorHover"==c?$("#textviewcontent_hover").css("color",RGBToHex(d)):"characterBgColorHover"==c&&$("#textviewcontent_hover").css("background-color",RGBToHex(d,""))}}).spectrum.freshSpan(),D.layoutCanvas(!0),$("#wzpanel").on("click",".wztabs",function(){var b=$(this);b.hasClass("cannot")||($("#wzpanel").children(".wztabs").removeClass("active"),b.addClass("active"),$("#wzpanel").attr("data-ct",b.index()),g.execQsSet(!0))}),a.off("click.pageact").on("click.pageact",function(a){var f,e,g,h,i;"i"!=a.target.tagName.toLowerCase()||$(a.target).hasClass("t-layer-eye")||$(a.target).hasClass("june-notc-em")||!$(a.target).parent().attr("data-paType")||(a.target=a.target.parentNode),e=$(a.target),g=e.attr("data-paType"),h=e.attr("data-paVal"),"switchBtn"==g&&"zx"==hre&&("leftNav"==h?(f=e.parent().parent(),panelClick(f,function(){f.attr("data-switch","closed").css("z-index",160),"2"!=f.attr("data-status")?(f.attr("data-sb",0),c.addClass("pa"),c.hasClass("regular")?f.css({left:"170px",top:"30px"}).height(50):f.css({left:"30px",top:"30px"}).height(50),_g_offsleft-=50):f.height(50)},function(){f.attr("data-switch","opened").css("z-index",160),"2"!=f.attr("data-status")?(f.attr("data-sb",50).removeAttr("style"),c.removeClass("pa"),_g_offsleft+=50):f.height(630)}),i=parseInt(d.attr("data-sb"))+parseInt(c.attr("data-sb")),b.css("margin-left",i)):"leftApp"==h?(f=e.parent().parent(),panelClick(f,function(){f.attr("data-sb",140).removeAttr("style"),f.removeClass("closed").attr("data-status","1"),f.find(".june-notc-i:eq(1)").hide(),_g_offsleft+=140,f.find(".app").each(function(){var a=$(this);a.children("span").show(),a.children("font").show(),a.attr("title","")})},function(){f.attr("data-sb",0).css("height","550px"),f.find(".june-notc-i:eq(1)").show(),c.css({top:"120px",left:"90px"}),_g_offsleft-=140},["fixed","regular"]),i=parseInt(d.attr("data-sb"))+parseInt(c.attr("data-sb")),b.css("margin-left",i)):"appNav"==h&&"zx"==hre?(f=e.parent().parent(),panelClick(f,function(){f.css("height","550px").find(".app").each(function(){var a=$(this);a.children("span").hide(),a.children("font").hide(),a.attr("title",a.children("span").html())})},function(){f.find(".app").each(function(){var a=$(this);a.children("span").show(),a.children("font").show(),a.attr("title","")})})):"rightDq"==h?(f=$("#dqpanel"),_tstatus=$("#toolsidebar").attr("data-status"),panelClick(f,function(){$("#toolsidebar").children(".dqbtn").removeClass("active");var a=$("#wzpanel").height()+$("#dqpanel").height();$("#tcpanel").css("top",a),panelClickAtTp()},function(){"2"!=_tstatus&&"zx"==hre?$("#toolsidebar").children(".dqbtn").addClass("active"):($("#toolpanel").removeClass("closed").addClass("opened"),$("#toolsidebar").children(".sideele").removeClass("active"),$("#toolsidebar").children(".dqbtn").addClass("active"),$("#dqpanel").removeClass("closed").addClass("opened"),$("#wzpanel").removeClass("opened").addClass("closed"),$("#tcpanel").removeClass("opened").addClass("closed"));var a=$("#wzpanel").height()+$("#dqpanel").height();$("#tcpanel").css("top",a).css("transition","0s"),panelClickAtTp()})):"rightWz"==h?(f=$("#wzpanel"),_tstatus=$("#toolsidebar").attr("data-status"),panelClick(f,function(){$("#toolsidebar").children(".zfbtn").removeClass("active");var a=$("#wzpanel").height()+$("#dqpanel").height();$("#tcpanel").css("top",a).css("transition","0s"),panelClickAtTp()},function(){"2"!=_tstatus&&"zx"==hre?$("#toolsidebar").children(".zfbtn").addClass("active"):($("#toolpanel").removeClass("closed").addClass("opened"),$("#toolsidebar").children(".sideele").removeClass("active"),$("#toolsidebar").children(".zfbtn").addClass("active"),$("#dqpanel").removeClass("opened").addClass("closed"),$("#wzpanel").removeClass("closed").addClass("opened"),$("#tcpanel").removeClass("opened").addClass("closed"));var a=$("#wzpanel").height()+$("#dqpanel").height();$("#tcpanel").css("top",a),panelClickAtTp()})):"rightTc"==h&&"zx"==hre?(f=$("#tcpanel"),_tstatus=$("#toolsidebar").attr("data-status"),panelClick(f,function(){$("#toolsidebar").children(".tcbtn").removeClass("active");var a=$("#wzpanel").height()+$("#dqpanel").height();f.css("top",a).css("transition","0s"),panelClickAtTp()},function(){"2"!=_tstatus?$("#toolsidebar").children(".tcbtn").addClass("active"):($("#toolpanel").removeClass("closed").addClass("opened"),$("#toolsidebar").children(".sideele").removeClass("active"),$("#toolsidebar").children(".tcbtn").addClass("active"),$("#dqpanel").removeClass("opened").addClass("closed"),$("#wzpanel").removeClass("opened").addClass("closed"),$("#tcpanel").removeClass("closed").addClass("opened"));var a=$("#wzpanel").height()+$("#dqpanel").height();$("#tcpanel").css("top",a),panelClickAtTp()})):"rightSide"==h&&(f=$("#toolpanel"),toolsidebar=$("#toolsidebar"),_tstatus=toolsidebar.attr("data-status"),"2"!=_tstatus?(panelClick(f,function(){$("#bodybox").css("margin-right","30px"),$("#dqpanel").removeClass("opened").addClass("closed"),$("#wzpanel").removeClass("opened").addClass("closed"),$("#tcpanel").removeClass("opened").addClass("closed"),$("#toolsidebar").children(".dqbtn").removeClass("active"),$("#toolsidebar").children(".zfbtn").removeClass("active"),$("#toolsidebar").children(".tcbtn").removeClass("active")},function(){$("#bodybox").css("margin-right","200px"),$("#dqpanel").removeClass("closed").addClass("opened"),$("#wzpanel").removeClass("closed").addClass("opened"),$("#tcpanel").removeClass("closed").addClass("opened"),$("#toolsidebar").children(".dqbtn").addClass("active"),$("#toolsidebar").children(".zfbtn").addClass("active"),$("#toolsidebar").children(".tcbtn").addClass("active")}),panelClick($("#toolsidebar"))):(toolsidebar.removeAttr("style"),$("#toolpanel").removeAttr("style"),$("#tcpanel").removeClass("tcp-500"),toolsidebar.children(".sideele.active").length>0?$("#bodybox").css("margin-right","200px"):$("#bodybox").css("margin-right","30px"),toolsidebar.attr("data-status","1"))),D.layoutCanvas())}),$(document).on("click",".codeText_orgbtn",function(){var a=$("#codeText_org").val(),b=$("#codeText_org1").val();a=a.replace(/(<img)([^>]*?src=")([^"]*?)("[^>]*?>)/g,function(a,c,d,e,f){var g="";return b=b.replace(/((https?|ftp):)?\/?\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)((\/+?)((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\/\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\/\/|\?)*)?(\.jpg|\.gif|\.png|\.webp|\.ss2|\.jpeg)/i,function(a){return g=a,""}),""!=g?c+d+g+f:c+d+e+f}),$("#codeText_new").val(a)}),$("#catchItemPicBox").on("click.catchPicBox","img",function(){var a=$(this),b=$("#catchItemPicBox"),c=a.attr("src"),d=m(a.attr("data-val"))+1,e=b.data("whichsel"),f=b.attr("data-qm");"yes"!=f?e.find("option[value='"+d+"']").prop("selected",!0).trigger("change"):(e.prev().children("img").attr("src",c),e.parent().next().find("input[name='iqs_pSrc']").val(c),e.attr("data-pPos",D.tParseInt(a.attr("data-val"))+1)),b.children(".active").removeClass("active"),a.addClass("active"),b.hide()}),$(window).on("resize",function(){D.layoutCanvas(),$(window).width()<1452?($(".pfbtnhead").children("span").children("span").hide(),$(".gjbtnhead").children("span").children("span").hide(),$(".kjjbtnhead").children("span").children("span").hide()):($(".pfbtnhead").children("span").children("span").show(),$(".gjbtnhead").children("span").children("span").show(),$(".kjjbtnhead").children("span").children("span").show())}),$("body").off("focus.juneDateInput").on("focus.juneDateInput",".juneDateInput",function(){var a=$(this);a.val(),"yes"!=a.attr("data-loadTime")&&"zx"==hre&&(a.juneDatePicker(),a.attr("data-loadTime","yes"))}),$("#juneRulerBox div, #juneRulerBox input").buttonset(),h=require("scripts/tLogin"),h.getLogin(),$("#userdialog").dialog({title:"jc60;iconjc62;ꑑjc60;/iconjc62;沃姆设计客户登录/注册",autoOpen:!1,width:550,height:500,modal:!0,buttons:{"确定":function(){$("#userdialog_form").submit()},"取消":function(){$(this).dialog("close")}},close:function(){$("#userdialog").dialog("close")}}),$("#jn_forget").dialog({autoOpen:!1,width:450,height:450,modal:!0,title:"密码找回",buttons:{"确定":function(){$("jn_form_forget").ajaxSubmit({url:"/3.0/forget.php",success:function(a){"true"==a?(tMessage("密码重设成功，请登录"),$("#jn_fusername,#jn_fpassword,#jn_fpassword2,#jn_flicense").val(""),$(this).dialog("close")):tMessage(a)}})},"返回登录":function(){$(this).dialog("close")}}}).dialog("close"),$("#login").click(function(){$("#userdialog").dialog("open"),$("#usertabs").tabs({active:0}),$("#usertabs .ui-state-focus").blur()}),$("#reg").click(function(){$("#userdialog").dialog("open"),$("#usertabs").tabs({active:1}),$("#usertabs .ui-state-focus").blur()}),$("#forgetpassword").on("click",function(){$("#jn_forget").dialog("open")}),$("#usertabs").tabs(),f.on("click",function(){D.tConfirm("是否确认解除该店铺绑定？",function(){var a=$.cookie("tLoginName"),b=window.location.href;b=b.indexOf("www.junezx")>=0?"http://www.junezx.com":"http://junezx.com",$.cookie("tLoginName")&&""!=$.cookie("tLoginName")&&$.cookie("tLoginName")==$("#loginTextName").html()&&(a=$("#loginTextName").html()),$.ajax({url:"/2.0/tbzhzx.php",type:"POST",data:{username:a},success:function(){$("#loginTextName").prev().removeClass("loginBandClass"),$("#taobaoLoginBtn").hide(),$("#tBandExcept").hide(),$("#tBandShop").length<1&&$("#tUserSaveList").before('<span><i class="tbicon"></i><a id="tBandShop" class="june-preview" href="https://oauth.taobao.com/authorize?client_id=23218318&response_type=code&redirect_uri='+b+'/app/api3.0.php">绑定店铺</a></span>'),$("#tBandShop").show()}})})}),$("#jhi_dlg").dialog({title:"图片编辑",autoOpen:!1,height:255,width:570,modal:!0,buttons:{"确定":function(){var a=$("#jhi_1").val(),b=$("#jhi_2").val();""==b&&"zx"==hre?D.june.children(".junehtml").find("img.temping-jhi-img").unwrap():D.june.children(".junehtml").find("a.temping-jhi-href").attr("junehref",b).removeClass("temping-jhi-href"),D.june.children(".junehtml").find("img.temping-jhi-img").attr("src",a).removeClass("temping-jhi-img"),$("#jhi_dlg").dialog("close")}},close:function(){D.june.children(".junehtml").find("a.temping-jhi-href").length>0&&""==D.june.children(".junehtml").find("a.temping-jhi-href").attr("junehref")?D.june.children(".junehtml").find("img.temping-jhi-img").unwrap().removeClass("temping-jhi-img"):(D.june.children(".junehtml").find("a.temping-jhi-href").removeClass("temping-jhi-href"),D.june.children(".junehtml").find("img.temping-jhi-img").removeClass("temping-jhi-img"))}}),$("#jhi_dlg").tooltip({position:{my:"left top",at:"left bottom+5"},show:{duration:"fast"},hide:{effect:"hide"}}),$("#reNameBox").dialog({title:"重命名组",autoOpen:!1,width:220,modal:!0,buttons:{"确定":function(){var a=$("#reNameBox_newname").val(),b=$("#reNameBox").attr("data-groupId");b&&($(D.appParentCls+".june-group[data-groupId='"+b+"']").attr("data-appName",a).attr("data-appLabel",a),D.layerList.children(D.layerCls+".group[data-groupId='"+b+"']").children("span").html(a)),$(this).dialog("close")},"取消":function(){$(this).dialog("close")}},close:function(){}})});