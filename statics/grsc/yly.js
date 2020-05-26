function navScroll(a, b) {
    $(".live .c1").css("visibility", "hidden"),
    $(".live .nav-tabs-link").removeClass("selected"),
    $(a).addClass("selected"),
    $(b).children(".junezx-tiles-more").trigger("click"),
    $(".live .c1").hide(),
    $(b).show().css("visibility", "visible"),
    $("html,body").animate({
        scrollTop: $(b).offset().top - 93
    },
    200)
}
function tDialog(a, b, c) {
    c = c || "open",
    $("#tDialog").length <= 0 && $('<div id="tDialog"></div>').appendTo($("body")),
    $("#tDialog").dialog({
        autoOpen: !1,
        width: 800,
        height: 530,
        modal: !0,
        title: a,
        buttons: {
            "关闭": function() {
                $(this).dialog("close")
            }
        }
    }).html(b).dialog("open")
}
function tAjaxDialog(a, b, c, d, e, f) {
    var g = $("#" + b);
    g.dialog({
        autoOpen: !1,
        width: a,
        height: 620,
        modal: !0,
        title: c
    }),
    $.ajax({
        url: d,
        type: "POST",
        data: e,
        dataType: "json",
        success: function(a) {
            f && "function" == typeof f && f(a, g),
            g.dialog("open")
        }
    })
}
function tMessage(a, b) {
    b = b || "open",
    $("#tMessage").length <= 0 && $('<div id="tMessage"></div>').appendTo($("body")),
    $("#tMessage").dialog({
        autoOpen: !1,
        width: 400,
        modal: !0,
        title: "提示",
        buttons: {
            "关闭": function() {
                $(this).dialog("close")
            }
        }
    }).html(a).dialog("open")
}
function showdetail(a, b) {
    var c = '<div style="width:100%;height:530px;"><div class="faqctitle">' + b + "</div>" + $("#fc-detail-" + a).html() + "<div>",
    d = ""; ("admin" == JUNEZX__USERNAME || "editor" == JUNEZX__USERNAME) && (d = '<a class="quick-edit" href="admin/helpeditor.php?ID=' + a + '" target="_blank">进入编辑</a>'),
    tDialog(b, d + c, "open")
}
function setUser(a) {
    a["success"] ? (JUNEZX__USERSTATUS = !0, JUNEZX__USERNAME = a['username'], $("#nologin").hide(), $("#logged").show(), $("#userInfo").html( a['nickname']+"("+a['username']+")"), $.ajax({
        url: "zxn/api/useridata",
        type: "POST",
        data: {
            type: "list",
            page: 1
        },
        dataType: "json",
        success: function(b) {
            var e, c, f, g, h, i, j, k, l, m, n, o, p, q;
            if (b) {
                for (c = "", Math.ceil(b.total / 10), f = b.data.length, g = 0, h = b.saveData.length, i = b.collectData.length, j = 0, k = 0; f > k; k++) l = b.data[k].CreatTime.split(" "),
                m = l[0].split("-"),
                n = l[1].split(":"),
                o = new Date(m[0], m[1] - 1, m[2], n[0], n[1], n[2]).getTime(),
                (!e || e - o > 6e5) && 10 > g ;
                for ( c = "", h > 10 && (h = 10), k = 0; h > k; k++) l = b.saveData[k].saveTime.split(" "),
                m = l[0].split("-"),
                n = l[1].split(":"),
                p = new Date(m[0], m[1] - 1, m[2], n[0], n[1], n[2]),
                q = p.Format("yyyy-MM-dd"),
                c += '';
                for ( c = "", k = 0; i > k; k++) 10 > j ,
                JUNEZX__USERCOLLECT.push(b.collectData[k].ID),
                setSUnLike(b.collectData[k].ID);
                
             
       
      
            }
        }
    })) : ($.removeCookie("tLogin"), $.removeCookie("tLoginName"), JUNEZX__USERSTATUS = !1, JUNEZX__USERNAME = "", $("#nologin").show(), $("#logged").hide())
}
function setAutoLogin(a) {
    a[0] && ($.cookie("falauto", !0, {
        expires: 7
    }), $.cookie("falname", a[1], {
        expires: 7
    }))
}
function checkAutoLogin() {
    var a ,
    b = !1;
	$.ajax({
			url: "/getLogin",
			type: "POST",
			data: {
				type: "login",
			},
			success: function(msg) {
                 if(msg.success){ $.cookie("tLogin", !0),b = !0,setUser(msg); }
		}
		});


}

function outUser() {
     $.get('/logout', function(data){
				if(data.success = !1){ b.tMessage("注销失败！");
				}else{
	$.removeCookie("tLogin"),
    $.removeCookie("tLoginName"),
    $.removeCookie("falauto"),
    $.removeCookie("falname"),
    JUNEZX__USERSTATUS = !1,
    JUNEZX__USERNAME = "",
    $("#nologin").show(),
    $("#logged").hide()	
				}
		},"json");

}
function setSUnLike(a) {
    var b = $("#tiles").children("li[data-ID='" + a + "']");
    b.length > 0 && $("#tiles").children("li[data-ID='" + a + "']").children("p.sbtns").children("span.slike").removeClass("slike").addClass("sunlike");
	var b2 = $("#faq_content_ul").children("li[data-ID='" + a + "']");
    b2.length > 0 && $("#tiles").children("li[data-ID='" + a + "']").children("p.sbtns").children("span.slike").removeClass("slike").addClass("sunlike");
	
}
function slikeToCollect() {
    if (!JUNEZX__USERSTATUS || "" == JUNEZX__USERNAME) return tMessage("请登录后使用此功能！"),
    void 0;
    var b = $(this),
    c = b.attr("data-ID"),
    d = b.attr("data-imgurl");
	e = b.attr("data-author");
	f = b.attr("data-title");
    b.css("visibility", "hidden"),
    $.ajax({
        url: "zxn/api/like",
        type: "POST",
        data: {
            ID: c,
            imgname: d,
			author:e,
			title:f,
            type: "like"
        },
        dataType: "json",
        success: function(a) {
            a[0] && (b.removeClass("slike").addClass("sunlike").css("visibility", "visible"), JUNEZX__USERCOLLECT.push(c))
        }
    })
}
function sunlikeToCollect() {
    if (!JUNEZX__USERSTATUS || "" == JUNEZX__USERNAME) return tMessage("请登录后使用此功能！"),
    void 0;
    var b = $(this),
    c = b.attr("data-ID");
    b.css("visibility", "hidden"),
    $.ajax({
        url: "zxn/api/like",
        type: "POST",
        data: {
            username: JUNEZX__USERNAME,
            ID: c,
            type: "unlike"
        },
        dataType: "json",
        success: function(a) {
            a[0] && (b.removeClass("sunlike").addClass("slike").css("visibility", "visible"), JUNEZX__USERCOLLECT.splice($.inArray(c, JUNEZX__USERCOLLECT), 1))
        }
    })
}
function setPage(a, b, c, d) {
    function f() {
        e[e.length] = c == g ? '<a href="#" class="on">' + g + "</a>": '<a href="#">' + g + "</a>"
    }
    var e, g;
    if (d = d || ["上一页", "下一页"], a = a, b = b, c = c, e = [], e[e.length] = 1 == c ? '<a href="#" class="prev unclick">' + d[0] + "</a>": '<a href="#" class="prev">' + d[0] + "</a>", 10 >= b) for (g = 1; b >= g; g++) f();
    else if (4 >= c) {
        for (g = 1; 5 >= g; g++) f();
        e[e.length] = '<span class="dian">...</span><a href="#">' + b + "</a>"
    } else if (c >= b - 3) for (e[e.length] = '<a href="#">1</a><span class="dian">...</span>', g = b - 4; b >= g; g++) f();
    else {
        for (e[e.length] = '<a href="#">1</a><span class="dian">...</span>', g = c - 2; c + 2 >= g; g++) f();
        e[e.length] = '<span class="dian">...</span><a href="#">' + b + "</a>"
    }
    e[e.length] = c == b ? '<a href="#" class="next unclick">' + d[1] + "</a>": '<a href="#" class="next">' + d[1] + "</a>",
    a.innerHTML = e.join(""),
    function() {
        var e = c;
        $(a).off("click.page").on("click.page", "a",
        function(c) {
            var f = $(this);
            if (f.hasClass("prev")) {
                if (1 == e) return ! 1;
                e--
            } else if (f.hasClass("next")) {
                if (e == b) return ! 1;
                e++
            } else e = parseInt(f.html(), 10);
            setPage(a, b, e, d),
            c.preventDefault()
        })
    } ()
}
Date.prototype.Format = function(a, b, c) {
    var d, e, f, g;
    if (b = b || 0, c = c || 0, d = (this.getMonth() + 1 + b) % 12, e = 0, (this.getMonth() + 1 + b) / 12 > 1 && (e = 1), 0 == d && (d = 12), 0 != c) return new Date(this.getTime() + 864e5 * c).Format("yyyy-MM-dd hh:mm:ss");
    f = {
        "M+": d,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    },
    /(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + e + "").substr(4 - RegExp.$1.length)));
    for (g in f) new RegExp("(" + g + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? f[g] : ("00" + f[g]).substr(("" + f[g]).length)));
    return a
},
$(function() {
    $("#tiles").on("click", "li p.sbtns span.suse-x",
    function(a) {
        return JUNEZX__USERSTATUS && "" != JUNEZX__USERNAME ? void 0 : (tMessage("请登录后使用此功能！"), a.preventDefault(), void 0)
    })
}),
$.fn.imagesLoaded = function(a) {
    var b = this.find("img"),
    c = [],
    d = this,
    e = b.length;
    return b.length ? (b.one("load error",
    function() {
        0 === --e && (e = b.length, b.one("load error",
        function() {
            0 === --e && a.call(d)
        }).each(function() {
            this.src = c.shift()
        }))
    }).each(function() {
        c.push(this.src),
        this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
    }), this) : (a.call(this), this)
};