$(function(){
	 //导航菜单下拉效果
  $('#ddmenu li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
  

 $.fn.placeholder = function() {
        var a = $(this),
        b = a.attr("value");
        a.focus(function() {
            a.attr("value") == b && a.attr("value", "")
        }).blur(function() {
            "" == a.attr("value") && a.attr("value", b)
        })
    };

var init = function(a) {
		if (a["success"]==1) {
			 $.cookie("tLogin", !0),$("#username").val(""),$("#password").val(""), $("#clogin").hide(),$("#cregister").hide(), $(".topydl").show(), $("#loginov").html(a["nickname"]),$("#topmsg").html(a["msgnum"]);
		} else { $.removeCookie("tLogin") , $(".topydl").hide(),$(".topwdl").show();}
	}
	
var logout = function(a) {
		
	 $.ajax({
	url: "/logout",
	type: "POST",
	data: {
		dosubmit: "noyzm",
		},
	success: function(msg) {
		if(msg.success = !1){ b.tMessage("注销失败！");
                }else{
        $.removeCookie("tLogin"), $(".topydl").hide(),$("#topmsg").html(""),$("#loginov").html(""),$("#cregister, #clogin").show();
		  }
		}
	});

	}
	
var loginout = function(b){ 
$("#loginbox").hide(),$("#loginbg").hide(),$('#loginbg').off('click');
}

var loginpop = function(){ 

$("#loginbg").show(),$("#loginbox").show(),$("#loginbox").animate({top:"100px"},'fast',function(){});
$(".loginusername").placeholder();
$(".loginuserpasswordt").placeholder();
$("#loginbutton").click(function(){
(a = $("#username").val(), c = $("#password").val(), "" == a ? $(".login_warning").text('用户名不能为空！').show() : "" == c ? $(".login_warning").text('密码不能为空！').show() : $(".login_warning").hide,$.ajax({
			type: "POST",
			url: "/login",
			data: {
				username: $("#username").val(),
				password: $("#password").val(),
				dosubmit: "noyzm"
			},
			dataType: "json",
			success: function(a) {
				1 == a["success"] ? (init(a),$("#loginbox").hide()) : $(".login_warning").text(a["msg"]).show();
			}
		}))
    });
$("#loginbg").click(function(){
	$("#loginbox").hide(),$("#loginbg").hide(),$("#loginbox").css("top","-400px"),$('#loginbg').off('click');
	});
$("#sigup_now").click(function(){
	$("#loginbox").hide(),$("#loginbox").css("top","-400px");
	});	
	
}

var getLogin = function() {
		var f, g, c = $.cookie("tLogin"),
			d = !1,
			e = [];
			
$.ajax({
	url: "/getLogin",
	type: "POST",
	data: {
		type: "login",
		},
	success: function(msg) {
		$.cookie("tLogin", !0),init(msg)
		}
	});
}


getLogin();

$("#clogin").click(function(){
  loginpop();
});

$("#topout").click(function(){
  logout();
});

});

