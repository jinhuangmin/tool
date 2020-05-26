jQuery.base64 = function() {
	function e(a, b) {
		var d = c.indexOf(a.charAt(b));
		if (-1 === d) throw "Cannot decode base64";
		return d
	}
	function f(a, b) {
		for (var c, d, e; a.length > 0;) if (c = a[0], 128 > c) a.shift(), b.push(String.fromCharCode(c));
		else if (192 == (128 & c)) {
			if (a.length < 2) break;
			c = a.shift(), d = a.shift(), b.push(String.fromCharCode(((31 & c) << 6) + (63 & d)))
		} else {
			if (a.length < 3) break;
			c = a.shift(), d = a.shift(), e = a.shift(), b.push(String.fromCharCode(((15 & c) << 12) + ((63 & d) << 6) + (63 & e)))
		}
	}
	function g(a) {
		var d, g, c = 0,
			h = a.length,
			i = [],
			j = [];
		if (a = String(a), 0 === h) return a;
		if (0 !== h % 4) throw "Cannot decode base64";
		for (a.charAt(h - 1) === b && (c = 1, a.charAt(h - 2) === b && (c = 2), h -= 4), d = 0; h > d; d += 4) e(a, d), e(a, d + 1), e(a, d + 2), e(a, d + 3), g = e(a, d) << 18 | e(a, d + 1) << 12 | e(a, d + 2) << 6 | e(a, d + 3), j.push(g >> 16), j.push(255 & g >> 8), j.push(255 & g), f(j, i);
		switch (c) {
		case 1:
			g = e(a, d) << 18 | e(a, d + 1) << 12 | e(a, d + 2) << 6, j.push(g >> 16), j.push(255 & g >> 8);
			break;
		case 2:
			g = e(a, d) << 18 | e(a, d + 1) << 12, j.push(g >> 16)
		}
		if (f(j, i), j.length > 0) throw "Cannot decode base64";
		return i.join("")
	}
	function h(a, b) {
		128 > a ? b.push(a) : 2048 > a ? (b.push(192 + (31 & a >> 6)), b.push(128 + (63 & a))) : (b.push(224 + (15 & a >> 12)), b.push(128 + (63 & a >> 6)), b.push(128 + (63 & a)))
	}
	function i(a) {
		var d, e, f, g, i, j, k, l, m;
		if (1 !== arguments.length) throw "SyntaxError: exactly one argument required";
		if (a = String(a), 0 === a.length) return a;
		for (f = [], g = [], i = a.length, d = 0; i > d;) {
			for (h(a.charCodeAt(d), f); f.length >= 3;) j = f.shift(), k = f.shift(), l = f.shift(), e = j << 16 | k << 8 | l, g.push(c.charAt(e >> 18)), g.push(c.charAt(63 & e >> 12)), g.push(c.charAt(63 & e >> 6)), g.push(c.charAt(63 & e));
			d++
		}
		switch (f.length) {
		case 1:
			m = f.shift(), e = m << 16, g.push(c.charAt(e >> 18) + c.charAt(63 & e >> 12) + b + b);
			break;
		case 2:
			j = f.shift(), k = f.shift(), e = j << 16 | k << 8, g.push(c.charAt(e >> 18) + c.charAt(63 & e >> 12) + c.charAt(63 & e >> 6) + b)
		}
		return g.join("")
	}
	var b = "=",
		c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		d = "1.1";
	return {
		decode: g,
		encode: i,
		VERSION: d
	}
}(jQuery), $(function() {
	var i, g = ($(window), $(document), $("#tablebox"), $("#j_table"), window["location"]["href"]);
	_dom = null, ts_1 = {
		line: 3,
		column: 4,
		borderWidth: 1,
		borderColor: "#000",
		bgColor: "#fff"
	}, i = "|@june@||@june@||@june@|100|@june@|", $("#urlHtmlHidden1").val(i).hide(), $("#urlHtmlHidden2").val(i).hide(), $("#urlHtmlHidden3").val(i).hide(), $("#urlHtmlHidden4").val(i).hide(), $("#urlHtmlHidden5").val(i).hide(), $("#divUrlType").on("click", "label", function() {
		var a = $(this),
			b = a.next("input").val(),
			c = a.index() / 2,
			d = $("#divUrlType").attr("data-focus"),
			e = $("#urlValue").val(),
			f = $("#urlResult").val(),
			g = $("#urlEwm").attr("src"),
			h = $("#ewmsize").val(),
			i = $("#urlEwm1").attr("src"),
			j = $("#urlHtmlHidden" + (c + 1)).val().split("|@june@|");
			if("shop"==b){$("#urlLabel").html("PC端首页地址");
			}else if("category"==b){$("#urlLabel").html("PC端分类页地址");
			}else if("item"==b){$("#urlLabel").html("PC端详情页地址");
			}else if("wang"==b){$("#urlLabel").html("旺旺昵称");
			}else if("yhq"==b){$("#urlLabel").html("PC端优惠券地址");
			}else if("dpsc"==b){$("#urlLabel").html("PC端首页地址");
			}else if("bbsc"==b){$("#urlLabel").html("PC端宝贝地址");
			}else if("hb"==b){$("#urlLabel").html("PC端红包链接");
			}else if("splj"==b){$("#urlLabel").html("无线端视频链接");
			}else if("rylj"==b){$("#urlLabel").html("任意链接");
			}else{$("#urlLabel").html("PC端地址");}
		$("#divUrlType").children("label").removeClass("i-selected"), a.addClass("i-selected"), $("#urlHtmlHidden" + (parseInt(d, 10) + 1)).val(e + "|@june@|" + f + "|@june@|" + g + "|@june@|" + h + "|@june@|" + i), $("#urlValue").val(j[0]), $("#urlResult").val(j[1]), $("#urlEwm").attr("src", j[2]), $("#ewmsize").val(j[3]), $("#urlEwm1").attr("src", j[4]), $("#divUrlType").attr("data-focus", c),"category" == b ? ($("#showbox").show(),$("#hidebox").hide()) :($("#showbox").hide(),$("#hidebox").show())
	}), $("#ewmsize").on("change", function() {
		var a = $(this),
			b = a.val(),
			c = $("#urlEwm").attr("src"),
			d = $("#urlEwm1").attr("src");
		"" != c && (c = c.replace(/&w=(\d+)&h=(\d+)/g, "&w=" + b + "&h=" + b).replace(/&w=(\d+)/g, "&w=" + b), $("#urlEwm").attr("src", c)), "" != d && (d = d.replace(/&w=(\d+)&h=(\d+)/g, "&w=" + b + "&h=" + b).replace(/&w=(\d+)/g, "&w=" + b), $("#urlEwm1").attr("src", d))
	}), $("#urlSubmit").on("click", function() {
		var a = $("input[name='urlType']:checked").val(),
			b = $("#urlValue").val(),
			c = "",
			d = "",
			e = [],
			f = "",
			g = "",
			h = [],
			i = "",
			j = "",
			k = $("#ewmsize").val(),
			l = "";
		if (b && "" != b) if ("item" == a) {
			if (e = b.match(/((\&|\?){1}id\=){1}(\d+)(?=(\&|$))/g), !e || e.length < 1) return;
			if (d = e[0].replace(/(\&|\?)id\=/g, ""), "" == d) return;
			c = "https://h5.m.taobao.com/awp/core/detail.htm?id=" + $.trim(d), j = "http://gqrcode.alicdn.com/img?v=1&type=bi&item_id=" + $.trim(d) + "&w=" + k + "&h=" + k, l = "http://gqrcode.alicdn.com/img?type=ci&item_id=" + $.trim(d) + "&w=" + k + "&h=" + k, $("#urlResult").val(c), $("#gm").attr("src", c), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
		}else if ("category" == a) {/*店铺分类*/
			if (b.indexOf("tmall") < 0 && b.indexOf("taobao") < 0) return;
			var url=b;
     		var urlarrd=url.split("?")[0].split(".");
            var html="";
            for(var i=0;i<=urlarrd.length-1;i++){
              if(i==0){
              html+=urlarrd[i]+".m.";
              }else if(i==(urlarrd.length-1)){
              html+=urlarrd[i];
              }else{
              html+=urlarrd[i]+".";
              }
            }
    function IsURL(str_url){
     var strRegex = "[a-zA-z]+://[^\s]*"; 
      var re=new RegExp(strRegex); 
      if (re.test(str_url)){
             $.ajax({
              type: "POST",
              url: "pcflyzwx.php",
              data: {url:url},
              success: function (data) {
              var data=JSON.parse(data);
              var patt1 = new RegExp("tmall");
             if(patt1.test(html.split("com")[0])){
             	c="https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.scid;
             	j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c, $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l);
               $("#fl1").val(c);
               $("#gm").attr("src", c);
               $("#fl2").val(html.split("com")[0]+"com/"+"shop/shop_auction_search.htm?ascid="+data.scid+"&scid="+data.scid+"&sort=hotsell");
               $("#fl3").val(html.split("com")[0]+"com/"+"shop/shop_auction_search.htm?ascid="+data.scid+"&scid="+data.scid+"&sort=oldstarts");
               $("#fl4").val(html.split("com")[0]+"com/"+"shop/shop_auction_search.htm?ascid="+data.scid+"&scid="+data.scid+"&sort=isPromotion");
               $("#fl5").val(html.split("com")[0]+"com/"+"shop/shop_auction_search.htm?ascid="+data.scid+"&scid="+data.scid+"&sort=_bid");
               $("#fl6").val(html.split("com")[0]+"com/"+"shop/shop_auction_search.htm?ascid="+data.scid+"&scid="+data.scid+"&sort=bid");
             }else{
             	c="https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.catid;
             	j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c, $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l);
               $("#fl1").val(c);
               $("#gm").attr("src", c);
               $("#fl2").val("https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.catid+"&sort=hotsell");
               $("#fl3").val("https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.catid+"&sort=oldstarts");
               $("#fl4").val("https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.catid+"&sort=isPromotion");
               $("#fl5").val("https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.catid+"&sort=_bid");
               $("#fl6").val("https://shop"+data.shopId+".m.taobao.com/#list?catId="+data.catid+"&sort=bid");
             }
            }
          });
      }
     }
    IsURL(url)
		}else if ("shop" == a) {
			if (b.indexOf("tmall") < 0 && b.indexOf("taobao") < 0 && b.indexOf("com") < 0) return;
			$.ajax({
				url: "gm.php",
				data: {
					url: b
				},
				type: "POST",
				success: function(a) {
					a && "" != a && (f = a, c = "https://shop.m.taobao.com/shop/shopIndex.htm?shop_id=" + $.trim(f), j = "http://gqrcode.alicdn.com/img?type=bs&v=1&shop_id=" + f + "&w=" + k + "&h=" + k, l = "http://gqrcode.alicdn.com/img?type=cs&v=1&shop_id=" + f + "&w=" + k + "&h=" + k), $("#urlResult").val(c), $("#gm").attr("src", c), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
				},
				error: function() {}
			})
		}else if ("hb" == a) {/*红包*/
			if (b.indexOf("tmall") < 0 && b.indexOf("taobao") < 0 && b.indexOf("com") < 0) return;
			$.ajax({
				url: "hbljzwx.php",
				data: {
					url: b
				},
				type: "POST",
				success: function(data) {
					var data=JSON.parse(data);
					c = "https://h5.m.taobao.com/present/hongbao.html?sellerId="+data.sellerId, $("#urlResult").val(c), $("#gm").attr("src", c)
				},
				error: function() {}
			})
		}else if ("dpsc" == a) {/*店铺收藏*/
			if (b.indexOf("tmall") < 0 && b.indexOf("taobao") < 0 && b.indexOf("com") < 0) return;
			$.ajax({
				url: "sjddpsc.php",
				data: {
					url: b
				},
				type: "POST",
				success: function(data) {
					var data=JSON.parse(data);
              var patt2 = new RegExp("tmall");
			if(patt2.test(b)){
               c="https://h5.m.taobao.com/ecrm/jump-to-app.html?target_url=https%3A%2F%2Ffavorite%2Etaobao%2Ecom%2Fpopup%2Fadd%5Fcollection%2Ehtm%3Fid%3D"+data.shopId+"%26itemid%3D"+data.shopId+"%26itemtype%3D0%26ownerid%3D"+data.ownerid+"%26scjjc%3D2",$("#urlResult").val(c), $("#gm").attr("src", c)
              }else{
                c="https://h5.m.taobao.com/ecrm/jump-to-app.html?target_url=https%3A%2F%2Ffavorite%2Etaobao%2Ecom%2Fpopup%2Fadd%5Fcollection%2Ehtm%3Fid%3D"+data.shopId+"%26itemid%3D"+data.shopId+"%26itemtype%3D0%26sellerid%3D"+data.ownerid+"%26scjjc%3D2",$("#urlResult").val(c), $("#gm").attr("src", c)
            }
              },
				error: function() {}
			})
		}else if ("bbsc" == a) {/*宝贝收藏*/
			if (b.indexOf("tmall") < 0 && b.indexOf("taobao") < 0 && b.indexOf("com") < 0 && b.indexOf("com") < 0) return;
			$.ajax({
				url: "sjdbbsc.php",
				data: {
					url: b
				},
				type: "POST",
				success: function(data) {
					var data=JSON.parse(data);
					c = "https://h5.m.taobao.com/ecrm/jump-to-app.html?target_url=https%3A%2F%2Ffavorite%2Etaobao%2Ecom%2Fpopup%2Fadd%5Fcollection%2Ehtm%3Fscjjc%3D1%26id%3D"+data.itemId+"%26itemtype%3D1", $("#urlResult").val(c), $("#gm").attr("src", c)
				},
				error: function() {}
			})
		}else if ("splj" == a) {/*视频链接*/ 
    		var html=b.split("e/1")[0]+"e/6"+b.split("e/1")[1];
    		c="https://h5.m.taobao.com/ecrm/jump-to-app.html?target_url="+encodeURIComponent(html).split(".").join("%2E");
    		$("#urlResult").val(c), $("#gm").attr("src", c)
		}else if ("rylj" == a) {/*任意链接*/ 
    		c="https://h5.m.taobao.com/ecrm/jump-to-app.html?target_url="+encodeURIComponent(b).split(".").join("%2E");
    		$("#urlResult").val(c), $("#gm").attr("src", c)
		}
		else if ("yhq" == a)(b.indexOf("taoquan") >= 0 || b.indexOf("coupon") >= 0) && (h = b.split("?"), h[1] && "" != h[1] && (c = "https://shop.m.taobao.com/shop/coupon.htm?" + h[1]), $("#urlResult").val(c), $("#gm").attr("src", c), $("#urlEwm").attr("src", j), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l));
		else if ("wang" == a) {
			if (i = $.base64.encode(b), b.indexOf(":") >= 0) return alert("子旺旺无法获取移动端地址，请改为主号昵称重试！"), void 0;
			i && "" != i && (c = "https://h5.m.taobao.com/ww/index.htm#!dialog-" + i), $("#urlResult").val(c), $("#gm").attr("src", c), j = "http://qr.liantu.com/api.php?bg=ffffff&fg=000000&gc=000000&el=l&w=" + k + "&m=10&text=" + c.replace("https://", "").replace("http://", "").replace(/&/g, "%26"), $("#urlEwm").attr("src", j), $("#urlEwm1").attr("src", l)
		}
	}), 1==2 && ($("#urlSubmit").off("click"), $("#divUrlType").off("click"))
});