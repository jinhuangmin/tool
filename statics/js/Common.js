$(function(){


var init = function(a) {
		if (a["success"]==1) {
		  $("#loginalert").animate({top: -600	}, 400, "easeOutQuart", function() {$("#loginalert").hide(); }),$(".loginmask").fadeOut(500),$('input[name=username]').val(""),$('input[name=password]').val("");
		  
		  $.cookie("tLogin", !0), $("#toplogin").hide(), $("#toprt").show(), $("#loginov").html(a["nickname"]),(a["msgnum"]>0?$("#topmsg").html('<a class="topbar-xinxi" href="/message" data-hint="消息通知"><i class="icon icon-email"></i><font color=red>消息('+a['msgnum']+')</font></a>'):$("#topmsg").html('<a class="topbar-xinxi" href="/message" data-hint="消息通知"><i class="icon icon-email"></i><font>消息</font></a>'));
		} else { $.removeCookie("tLogin") , $("#toprt").hide(),$("#toplogin").show();}
	}
var getLogin = function() {			
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
var reg = function() {			
	
	
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
        $.removeCookie("tLogin"), $("#toprt").hide(),$("#topmsg").html(""),$("#loginov").html(""),$("#toplogin").show();
		  }
		}
	});
	}

 //导航菜单下拉效果
  $('#ddmenu li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

 //点击注册
$("#loginbutton").click(function(){
	a = $('input[name=username]').val();
	b = $('input[name=password]').val();
	if(a==""&&a=="\u90ae\u7bb1\u002f\u7528\u6237\u540d"){
		$(".login_warning").text('用户名不能为空！').show()
	  }else if("" == b){
		$(".login_warning").text('密码不能为空！').show()
	  }else{
	$.ajax({
			type: "POST",
			url: "/login",
			data: {
				username: $('input[name=username]').val(),
				password: $('input[name=password]').val(),
				dosubmit: "noyzm"
			},
			dataType: "json",
			success: function(a) {
				1 == a["success"] ? (init(a),$("#loginbox").hide()) : $(".login_warning").text(a["msg"]).show();
			}
		})	  
		  
		  }

    });
	
getLogin();	

$("#topout").click(function(){
  logout();
});
$("#regbutton").click(function(){
  reg();
});


});

