!
function() {
	var e = $(".public-layer");
	$(".tbapp_exchange").attr("data-dashi51-token", !0);
	try {
		chrome.runtime.onConnect.addListener(function(t) {
			"tbapp" == t.name && t.onMessage.addListener(function(t) {
				if (t) {
					if (e.attr("data-type", "closeAll").click(), "_tb_data_" == t.question) try {
						if (-1 == t.data) return $(".tbapp_exchange .open_tb_tip").attr("tao-err", !0), $(".tbapp_exchange .open_tb_tip").click(), !1;
						JSON.parse(t.data), $(".tbapp_exchange .open_tb_tip").removeAttr("tao-err"), "tu" == t.token.type && n.set(t), "video" == t.token.type && d.set(t), "wxk" == t.token.type && r.set(t), "wxitem" == t.token.type && s.set(t), "up_tu" == t.token.type && c.set(t)
					} catch (e) {
						$(".tbapp_exchange .open_tb_tip").attr("tao-err", !0), $(".tbapp_exchange .open_tb_tip").click()
					}
					"_open_tb_ok_" == t.question && ("tu" == t.token.type && n.get(t), "video" == t.token.type && d.get(t), "wxk" == t.token.type && r.get(t), "wxitem" == t.token.type && s.get(t), "up_tu" == t.token.type && c.get(t))
				}
				"_open_tb_not_" == t.question && setTimeout(() = > {
					$(".tbapp_exchange .open_tb_tip").click()
				}, 10), n.question = t.question
			})
		})
	} catch (e) {}
	function t(t) {
		try {
			t = t || {};
			if ($("body").hasClass("parent-wangpu-open") && ("_open_tb_page_" == t.question && (t.source = "dashi51.com.tbapp", window.parent.postMessage(t, "*")), "init" == t.source && window.addEventListener("message", function(t) {
				var i = t.data;
				if (i && i.source && "dashi51.com.tbapp" == i.source && (e.attr("data-type", "closeAll").click(), "_tb_data_" == i.question)) try {
					if (-1 == i.data) return $(".tbapp_exchange .open_tb_tip").attr("tao-err", !0), $(".tbapp_exchange .open_tb_tip").click(), !1;
					JSON.parse(i.data), $(".tbapp_exchange .open_tb_tip").removeAttr("tao-err"), "tu" == i.token.type && n.set(i), "video" == i.token.type && d.set(i), "wxk" == i.token.type && r.set(i), "wxitem" == i.token.type && s.set(i), "up_tu" == i.token.type && c.set(i)
				} catch (t) {
					$(".tbapp_exchange .open_tb_tip").attr("tao-err", !0), $(".tbapp_exchange .open_tb_tip").click()
				}
			}, !1)), $("#dashi51-frame").length) {
				if ("_tb_data_" == t.question) t.source = "dashi51.com.tbapp", document.getElementById("dashi51-frame").contentWindow.postMessage(t, "*");
				"init" == t.source && window.addEventListener("message", function(e) {
					var t = e.data;
					t && t.source && "dashi51.com.tbapp" == t.source && "_open_tb_page_" == t.question && ("tu" == t.token.type && n.get(t), "video" == t.token.type && d.get(t), "wxk" == t.token.type && r.get(t), "wxitem" == t.token.type && s.get(t), "up_tu" == t.token.type && c.get(t))
				}, !1)
			}
		} catch (e) {
			console.info(e)
		}
	}
	function i(i) {
		if ("_open_tb_page_" == i.question && (e.attr("tip", "正在加载中"), e.attr("data-type", "msg").click()), $("#dashi51-frame").length || $("body").hasClass("parent-wangpu-open")) t(i);
		else {
			i = i || {};
			chrome.runtime.connect({
				name: "tbapp"
			}).postMessage(i)
		}
	}
	function o(e) {
		try {
			e = e || {};
			var t = "jq" + (new Date).getTime();
			$("body").append('<script id="' + t + '" type="text/javascript"> function ' + t + '(response){ document.body.setAttribute("' + t + '",JSON.stringify(response)); } <\/script>'), $.ajax({
				type: e.type || "get",
				url: e.url || "",
				data: e.data || "",
				success: function(i) {
					console.info("success", i);
					i = $("body").attr(t) || "";
					e && e.callback && e.callback(i), $("body").removeAttr(t), $("#" + t).remove()
				},
				error: function(i) {
					var o = $("body").attr(t) || "";
					e && e.callback && e.callback(o), $("body").removeAttr(t), $("#" + t).remove()
				},
				dataType: "jsonp",
				jsonpCallback: t
			})
		} catch (e) {
			console.info(e)
		}
	}
	function a(e, t, i) {
		t = t, i = i;
		$.isFunction(t) && !i && (i = t, t = {}), $.ajax({
			type: "get",
			url: e,
			data: t,
			success: function(e) {
				i && i(e)
			},
			error: function(e) {
				i && i(-1)
			},
			dataType: "html"
		})
	}
	setTimeout(() = > {
		t({
			source: "init"
		})
	}, 500);
	var n = {
		ChoiceTUID: !1,
		page: 1,
		itemPage: 1,
		folderid: 0,
		panel: "tu"
	};
	n.root = $(".tbapps .cj_TAOTU"), n.init = function() {
		var e = n.root.find(".tuselected").attr("get_data");
		n.set({
			token: {}
		}), "tumain" == e && (n.root.find(".nav[get_data=tumain]").click(), n.root.find(".cjupimg").unbind("click"), n.root.find(".cjupimg").bind("click", n.uptu)), "itemtus" == e && (n.set({
			token: {}
		}), n.root.find(".nav[get_data=itemtus]").click())
	}, n.uptu = function(t) {
		if ("retry" == t && n.retrytu) return o(), !1;

		function o() {
			i({
				question: "_open_tb_page_",
				token: {
					type: "up_tu",
					Do: "up",
					_uptu_folderId_: n.root.find(".TUselected").attr("d_folderid") || 0,
					tu: n.retrytu,
					fileName: n.retryname,
					pos: "UPTU"
				}
			})
		}
		n.root.find(".cjupimg_file").click(), n.root.find(".cjupimg_file").unbind("change"), n.root.find(".cjupimg_file").bind("change", function() {
			var t = this.files[0];
			if (!t || 0 != t.type.indexOf("image")) return !1;
			var i = n.root.find(".cjupimg_bgimg")[0],
				a = new FileReader,
				d = t.name.split(".")[0];
			t ? a.readAsDataURL(t) : i.src = "";
			if (t.size / 1024 / 1024 >= 3) return e.attr("tip", "亲，上传的图片不得大于3M").attr("data-type", "msg").click(), !1;
			a.onloadend = function() {
				n.retrytu = a.result, n.retryname = d, o()
			}
		})
	}, n.uptufun = function(t) {
		t.retry ? (e.attr("tip", "上传异常，已修复，请重试！").attr("data-type", "msg").click(), setTimeout(() = > {
			n.uptu("retry"), setTimeout(() = > {
				n.root.find(".TUselected").click()
			}, 600)
		}, 600)) : n.root.find(".TUselected").click()
	}, n.get = function(e) {
		var t = e.token.Do;
		this.ChoiceTUID && this.ChoiceTUID;
		if (!$.cookie("_tb_token_")) return !1;

		function n(e) {
			a("https://stream.taobao.com/api/get_files.api?appkey=tu&folderId=" + (e.token.folderid || "") + "&searchKey=" + (e.token.searchKey || "") + "&page=" + (e.token.page || 1) + "&pageSize=60&sort=1&_input_charset=utf-8", function(t) {
				t ? -1 != t ? i({
					question: "_tb_data_",
					data: t,
					token: {
						type: "tu",
						Do: "tree_click"
					}
				}) : console.info("数据返回异常") : function(e) {
					var t = e.token.folderid || "",
						o = e.token.searchKey || "",
						a = e.token.page || 1,
						n = "https://stream.taobao.com/api/get_files.api?appkey=tu&folderId=" + t + "&searchKey=" + o + "&page=" + a + "&pageSize=60&sort=1&_input_charset=utf-8";
					$("#tree_click_spare").remove(), $("body").append('<script id="tree_click_spare" type="text/javascript"> function callback_spare(response){ document.body.setAttribute("tree_click_spare",JSON.stringify(response)); console.log(response); } <\/script>'), $.ajax({
						type: "get",
						url: n,
						data: "",
						success: function(e) {},
						error: function(e) {
							var t = $("body").attr("tree_click_spare") || "",
								o = {
									question: "_tb_data_",
									data: t,
									token: {
										type: "tu",
										Do: "tree_click"
									}
								};
							i(o)
						},
						dataType: "jsonp",
						jsonpCallback: "callback_spare"
					})
				}(e)
			})
		}
		"tree" == t && a("//stream.taobao.com/api/get_folders.api?parentFolderId=&appkey=tu&sort=0", function(e) {
			if (e) if (-1 != e) {
				var t = {
					question: "_tb_data_",
					data: e,
					token: {
						type: "tu",
						Do: "tree"
					}
				};
				i(t)
			} else console.info("数据返回异常");
			else $("#tree_spare").remove(), $("body").append('<script id="tree_spare" type="text/javascript"> function callback_spare(response){ document.body.setAttribute("tree_spare",JSON.stringify(response)); console.log(response); } <\/script>'), $.ajax({
				type: "get",
				url: "//stream.taobao.com/api/get_folders.api?parentFolderId=&appkey=tu&sort=0",
				data: "",
				success: function(e) {},
				error: function(e) {
					var t = $("body").attr("tree_spare") || "",
						o = {
							question: "_tb_data_",
							data: t,
							token: {
								type: "tu",
								Do: "tree"
							}
						};
					i(o)
				},
				dataType: "jsonp",
				jsonpCallback: "callback_spare"
			})
		}), "tree_click" == t && n(e), "getnp_click" == t && n(e), "get_item_tu" == t &&
		function(e) {
			var t = "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8",
				n = e.token.currentPage || 1,
				d = e.token.price1 || "",
				r = e.token.price2 || "",
				s = e.token.kwd || "",
				c = {
					_tb_token_: $.cookie("_tb_token_"),
					currentPage: n,
					pageSize: 60
				};
			d && (c.price1 = d), r && (c.price2 = r), s && (c.kwd = s), a(t, c, function(e) {
				if (e) if (-1 != e) {
					var a = {
						question: "_tb_data_",
						data: e,
						token: {
							type: "tu",
							Do: "get_item_tu"
						}
					};
					i(a)
				} else console.info("数据返回异常");
				else o({
					type: "get",
					url: t,
					data: c,
					callback: function(e) {
						var t = {
							question: "_tb_data_",
							data: e,
							token: {
								type: "tu",
								Do: "get_item_tu"
							}
						};
						i(t)
					}
				})
			})
		}(e)
	}, n.set = function(e) {
		var t, o = this,
			a = e.token.Do;
		if ("tree" == a) try {
			var n = function e(t) {
					if (0 == t.folderId) {
						var i = 0 == t.parentFolderId ? "rshow" : "rhide",
							o = "<ul class='cjztree-inner " + i + "'>";
						o += "<li><span class='icon tree_open'></span><a id='Mypicture' class='tucat' d_folderId='" + t.folderId + "' d_parentFolderId='" + t.parentFolderId + "'><span></span><span class='tname'>" + t.folderName + "</span></a>", $(t.childrens).length > 0 && (o += e(t.childrens)), o += "</li>"
					} else for (var i = 0 == t[0].parentFolderId ? "rshow" : "rhide", o = "<ul class='ztree " + i + "'>", a = 0; a < $(t).length; a++) {
						var n = $(t[a].childrens).length > 0 ? "tree_close" : "tree_docu";
						o += "<li><span class='icon " + n + "'></span><a class='tucat' d_folderId='" + t[a].folderId + "' d_parentFolderId='" + t[a].parentFolderId + "'><span></span><span class='tname'>" + t[a].folderName + "</span></a>", $(t[a].childrens).length > 0 && (o += e(t[a].childrens)), o += "</li>"
					}
					o += "</ul>";
					return o
				}(JSON.parse(e.data).object);
			o.root.find(".folder_tree").empty().append(n), o.root.find(".cjztree-inner").find(".icon").unbind("click"), o.root.find(".cjztree-inner").find(".icon").bind("click", function() {
				var e = $(this);
				e.hasClass("tree_open") ? (e.removeClass("tree_open").addClass("tree_close"), e.siblings(".ztree").slideUp("fast", function() {
					$(this).removeClass("rshow").addClass("rhide")
				})) : e.hasClass("tree_close") && (e.removeClass("tree_close").addClass("tree_open"), e.siblings(".ztree").slideDown("fast", function() {
					$(this).removeClass("rhide").addClass("rshow")
				}))
			}), o.root.find(".tucat").unbind("click"), o.root.find(".tucat").bind("click", function() {
				var e = $(this).attr("d_folderid");
				o.folderid = e, o.page = 1, o.root.find("#cjseKey").val("");
				var t = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "tree_click",
						folderid: e
					}
				};
				i(t), $.cookie("_taoapp_cjtuobj_", '{"nav":"tumain","folderid":"' + e + '","page":"' + o.page + '","cjseKey":""}', {
					expires: 365
				})
			});
			try {
				if ($("body").attr("_taoapp_cj_tu_")) o.root.find("#Mypicture").click();
				else {
					var d = JSON.parse($.cookie("_taoapp_cjtuobj_")),
						r = d.folderid || "",
						s = d.page || 1,
						c = d.cjseKey || "",
						p = r ? $(".tucat[d_folderid=" + r + "]") : null;
					if ((r || c) && "tumain" == d.nav) o.folderid = r, o.page = s, i({
						question: "_open_tb_page_",
						token: {
							type: "tu",
							Do: "getnp_click",
							folderid: o.folderid,
							searchKey: c,
							page: o.page
						}
					}), p && p.parents(".ztree").show().siblings(".icon").addClass("tree_open").removeClass("tree_close");
					else o.root.find("#Mypicture").click()
				}
			} catch (e) {
				o.root.find("#Mypicture").click()
			}
		} catch (e) {}
		o.root.find(".mPrev").unbind("click"), o.root.find(".mPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				o.page--;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "getnp_click",
						folderid: o.folderid,
						searchKey: o.root.find("#cjseKey").val(),
						page: o.page
					}
				};
				i(e), $.cookie("_taoapp_cjtuobj_", '{"nav":"tumain","folderid":"' + o.folderid + '","page":"' + o.page + '","cjseKey":"' + o.root.find("#cjseKey").val() + '"}', {
					expires: 365
				})
			}
		}), o.root.find(".mNext").unbind("click"), o.root.find(".mNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				o.page++;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "getnp_click",
						folderid: o.folderid,
						searchKey: o.root.find("#cjseKey").val(),
						page: o.page
					}
				};
				i(e), $.cookie("_taoapp_cjtuobj_", '{"nav":"tumain","folderid":"' + o.folderid + '","page":"' + o.page + '","cjseKey":"' + o.root.find("#cjseKey").val() + '"}', {
					expires: 365
				})
			}
		}), $("#cjseKey").keyup(function(e) {
			var e = e || event,
				t = e.keyCode,
				a = $(this).val();
			if (13 == t && a) {
				o.folderid = "", o.page = 1;
				var n = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "getnp_click",
						folderid: "",
						searchKey: a,
						page: o.page
					}
				};
				i(n), $.cookie("_taoapp_cjtuobj_", '{"nav":"tumain","folderid":"","page":"' + o.page + '","cjseKey":"' + a + '"}', {
					expires: 365
				})
			}
		}), o.root.find(".nav").unbind("click"), o.root.find(".nav").bind("click", function() {
			var e, a;
			t = $(this).attr("get_data"), $(this).addClass("tuselected"), $(this).siblings("div").removeClass("tuselected"), o.root.find("." + t).show().siblings(".mainbox").hide(), o.root.find(".tu_Nav").attr("data-selected", $(this).attr("get_data")), "itemtus" == t ? (o.root.find(".cjupimg").hide(), o.root.find(".search_items").find("input").val(""), o.panel = "item", e = o.root.find(".search_items"), a = o.root.find(".itemtuMore"), i({
				question: "_open_tb_page_",
				token: {
					type: "tu",
					Do: "get_item_tu"
				}
			}), e.find("#Items_Search").unbind("click"), e.find("#Items_Search").bind("click", function() {
				o.itemPage > 1 && (o.itemPage = 1);
				var t = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "get_item_tu",
						price1: e.find("input[name=startPrice]").val(),
						price2: e.find("input[name=endPrice]").val(),
						kwd: e.find("input[name=itemname]").val()
					}
				};
				i(t)
			}), a.unbind("click"), a.bind("click", function() {
				if (!$(this).hasClass("no_more")) {
					$(this).hasClass("itemPrev") && o.itemPage > 1 && o.itemPage--, $(this).hasClass("itemNext") && o.itemPage++;
					var t = {
						question: "_open_tb_page_",
						token: {
							type: "tu",
							Do: "get_item_tu",
							currentPage: o.itemPage,
							price1: e.find("input[name=startPrice]").val(),
							price2: e.find("input[name=endPrice]").val(),
							kwd: e.find("input[name=itemname]").val()
						}
					};
					i(t)
				}
			})) : (o.root.find(".cjupimg").show(), o.root.find(".nex_titemtu").hide(), o.panel = "tu", ("_open_tb_not_" == o.question || !o.root.find(".cjtu_result").children().length && !o.root.find(".folder_tree").children().length) && i({
				question: "_open_tb_page_",
				token: {
					type: "tu",
					Do: "tree"
				}
			})), "tu" == o.panel && o.root.find(".nex_tu").show().siblings().hide(), "item" == o.panel && o.root.find(".nex_titemtu").show().siblings().hide(), $.cookie("_taoapp_cjtu_", t, {
				expires: 365
			})
		}), "tree_click" == a && (!
		function(e) {
			var t = o.folderid || "",
				i = o.root.find(".tucat[d_folderid='" + t + "']");
			o.root.find(".tucat").removeClass("TUselected"), i.addClass("TUselected"), $("#Intree").val(o.root.find(".tucat[d_folderid='" + t + "']").find(".tname").text());
			try {
				var a = JSON.parse(e.data),
					n = "";
				if (a.object.length > 0) for (var d = 0; d < a.object.length; d++) n += "<li><a title='" + a.object[d].fileName + "' class='cjitem_img' data-tupix='" + a.object[d].pix + "' ><img src='" + a.object[d].url + "_100x100'><span class='settu'>选择本图</span></a><span class='tupix'>" + a.object[d].pix + "</span></li>";
				else n = "<li class='mod_Nocontent'>该类目没有图片！</li>";
				o.root.find(".cjtu_result").empty().append(n);
				var r = o.root.find(".cjnext_pagination").find(".mNext");
				"tu" == o.panel && (a.hasNext && a.total && a.object.length ? r.removeClass("no_more") : (r.addClass("no_more"), a.object.length || i.siblings(".tree_close").click())), o.page <= 1 ? o.root.find(".cjnext_pagination").find(".mPrev").addClass("no_more") : o.root.find(".cjnext_pagination").find(".mPrev").removeClass("no_more"), o.root.find(".cjitem_img").unbind("click"), o.root.find(".cjitem_img").bind("click", function() {
					var e = $(this).children("img").attr("src");
					e = -1 == e.indexOf("_100x100") ? e : e.slice(0, e.indexOf("_100x100")), $(".tbapp_exchange").attr("data-tu", e), $(".tbapp_exchange").find(".tu_get").click()
				})
			} catch (e) {}
		}(e), $(".tbapp_exchange").attr("data-tuinit", !0)), "get_item_tu" == a && (!
		function(e) {
			var t = "";
			try {
				var i = JSON.parse(e.data),
					a = i.module.currentPage || 1,
					n = i.module.itemList,
					d = (i.module.totalCount, i.module.totalPage),
					t = "";
				n.length > 0 ? $.each(n, function(e, i) {
					t += "<li><a title='" + i.title + "' class='cjmod_img' data-tupix='' data-item='" + JSON.stringify(i) + "' ><img src='" + i.picUrl + "_100x100'><span class='settu'>选择本图</span></a><span class='tupix'>" + i.salePrice + "</span></li>"
				}) : t = "<div class='mod_Nocontent'>亲，你的店铺没有宝贝呀！</div>", o.root.find(".btu_box").empty().append("<ul class='itemtu_result'>" + t + "</ul>"), d > a ? o.root.find(".itemNext").removeClass("no_more") : o.root.find(".itemNext").addClass("no_more"), a > 1 ? o.root.find(".itemPrev").removeClass("no_more") : o.root.find(".itemPrev").addClass("no_more"), o.itemPage < 1 && (o.itemPage = 1), o.itemPage > d && (o.itemPage = d), o.root.find(".cjmod_img").unbind("click"), o.root.find(".cjmod_img").bind("click", function() {
					var e = $(this).children("img").attr("src");
					e = -1 == e.indexOf("_100x100") ? e : e.slice(0, e.indexOf("_100x100")), $(".tbapp_exchange").attr("data-tu", e), $(".tbapp_exchange").find(".tu_get").click()
				})
			} catch (e) {
				t = "<div class='mod_Nocontent'>亲，没有获取到宝贝数据，<em>您可能没有登陆淘宝，或没有查看宝贝的权限，或没有更多宝贝了！</em></div>", o.root.find(".btu_box").empty().append("<ul class='itemtu_result'>" + t + "</ul>")
			}
		}(e), $(".tbapp_exchange").attr("data-tuinit", !0))
	};
	var d = {
		page: 1,
		itemPage: 1,
		pageSize: 30
	};
	d.root = $(".tbapps .cj_TAOTU"), d.init = function() {
		i({
			question: "_open_tb_page_",
			token: {
				type: "video",
				Do: "list"
			}
		})
	}, d.get = function(e) {
		var t = this;
		"list" == e.token.Do &&
		function(e) {
			var o = e.token.name || "",
				n = e.token.page || 1,
				d = e.token.pageSize || 30,
				r = e.token._tb_token_ || $.cookie("_tb_token_"),
				s = "https://ugc.taobao.com/sucai/ajax/videoQuery1.do?_input_charset=utf-8&pageNum=" + n + "&pageSize=" + d + "&type=mobile&sort=uploadTime&_tb_token_=" + r + "&name=" + o;
			r && a(s, function(e) {
				try {
					var o = {
						question: "_tb_data_",
						data: e,
						token: {
							type: "video",
							Do: "list"
						}
					},
						n = JSON.parse(e);
					n.model.rows.length && !t.userId ? a("https://ugc.taobao.com/sucai/ajax/videoLabelAndKeywordQuery.do?_input_charset=utf-8&videoId=" + (n = n.model.rows[0].id) + "&type=0", function(e) {
						var a = JSON.parse(e);
						t.userId = a.model.videoInfo[0].userId, o.token.userId = t.userId, i(o)
					}) : (t.userId && (o.token.userId = t.userId), i(o))
				} catch (e) {
					var o = {
						question: "_tb_data_",
						data: -1,
						token: {
							type: "video",
							Do: "list"
						}
					};
					i(o)
				}
			})
		}(e)
	}, d.set = function(e) {
		var t = this,
			o = e.token.Do;
		e.token.userId && (t.userId = e.token.userId), "list" == o && (!
		function(e) {
			var i = JSON.parse(e.data).model;
			t.pageSize;
			if (i.totalNum && i.rows.length) {
				var o = "";
				$.each(i.rows, function(e, i) {
					var a = i.snapshot,
						n = i.id,
						d = i.width,
						r = i.height,
						s = "https://cloud.video.taobao.com//play/u/" + t.userId + "/p/2/e/6/t/1/" + n + ".mp4",
						c = {
							id: n,
							width: d,
							height: r,
							url: s,
							snapshot: a
						};
					o += "<li><a title='" + i.name + "' class='cjmod_video' data-video='" + JSON.stringify(c) + "' ><img src='" + a + "_130x130'><span class='settu'>选择视频</span></a><span class='tupix'>" + i.name + "</span></li>"
				}), (i.totalNum == i.rows.length || i.rows.length < t.pageSize) && t.root.find(".cjnext_pagination").find(".videoNext").addClass("no_more")
			} else o = "<div class='mod_Nocontent'>亲，没有更多视频了！</div>", t.root.find(".cjnext_pagination").find(".videoNext").addClass("no_more");
			t.page <= 1 ? t.root.find(".cjnext_pagination").find(".videoPrev").addClass("no_more") : t.root.find(".cjnext_pagination").find(".videoPrev").removeClass("no_more");
			t.root.find(".video_box").empty().append("<ul class='video_result'>" + o + "</ul>"), t.root.find(".cjmod_video").unbind("click"), t.root.find(".cjmod_video").bind("click", function() {
				var e = $(this).attr("data-video");
				$(".tbapp_exchange").attr("data-video", e), $(".tbapp_exchange").find(".tu_video").click()
			})
		}(e), t.root.find(".videoPrev").unbind("click"), t.root.find(".videoPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				t.page--;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "video",
						Do: "list",
						pageSize: t.pageSize,
						page: t.page
					}
				};
				i(e), t.root.find(".cjnext_pagination").find(".videoNext").removeClass("no_more")
			}
		}), t.root.find(".videoNext").unbind("click"), t.root.find(".videoNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				t.page++;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "video",
						Do: "list",
						pageSize: t.pageSize,
						page: t.page
					}
				};
				i(e)
			}
		}), $("#cjsearch_video").unbind("keyup"), $("#cjsearch_video").bind("keyup", function(e) {
			var e = e || event,
				o = e.keyCode,
				a = $(this).val();
			if (13 == o) {
				t.page = 1;
				var n = {
					question: "_open_tb_page_",
					token: {
						type: "video",
						Do: "list",
						pageSize: t.pageSize,
						name: a
					}
				};
				i(n)
			}
		}), $(".tbapp_exchange").attr("data-tuinit", !0))
	};
	var r = {
		page: 1,
		pageSize: 20,
		shop: "",
		postd: {
			common: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getCommonLinkList.do?_input_charset=utf-8",
			items: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8",
			category: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemCategoryLinkList.do?_input_charset=utf-8",
			coupon: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getCouponLinkList.do?_input_charset=utf-8",
			page: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getShopLoftList.do?_input_charset=utf-8",
			activity: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getActivityPageLinkList.do?_input_charset=utf-8&namespace=shop&path=activity",
			widgetid: "https://wangpu.taobao.com/shopdecorate/ajax/getModuleData.do?_input_charset=utf-8"
		}
	};
	r.root = $(".tbapps .WXHref"), r.init = function() {
		r.root.find(".modpanel[showd=common]").children().length || (r.get({
			token: {}
		}), r.root.find(".nav[get_data=common]").click())
	}, r.get = function(e) {
		var t = this,
			n = e.token.Do;
		t.root.find(".nav").unbind("click"), t.root.find(".nav").bind("click", function() {
			$(this).addClass("linkselected").siblings().removeClass("linkselected"), t.root.find(".mPrev").addClass("no_more"), t.page = 1;
			var e = $(this).attr("get_data"),
				o = t.postd[e],
				a = t.root.find(".modpanel[showd=" + e + "]");
			if ("items" == e) {
				var n = t.root.find(".modpanel[showd=items]");
				(n.find("input[name=itemname]").val() || n.find("input[name=startPrice]").val() || n.find("input[name=endPrice]").val()) && (t.root.find(".modpanel[showd=items]").find("input").val(""), n.find(".list_box").remove())
			}
			if ("widgetid" == e) {
				if (a.show().siblings().hide(), $("body").hasClass("parent-wangpu-open")) try {
					let a = JSON.parse($("body").attr("wx-globaldata"));
					i({
						question: "_open_tb_page_",
						token: {
							type: "wxk",
							dtype: e,
							Do: "list",
							url: o + "&shopId=" + a.shopId + "&pageId=" + a.pageId,
							pageSize: t.pageSize
						}
					})
				} catch (e) {}
				return t.root.find(".widgetid-but").unbind("click"), t.root.find(".widgetid-but").bind("click", function() {
					if (t.root.find(".get-widgetid").val()) {
						let e = "widgetid|" + t.root.find(".get-widgetid").val();
						$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
					}
				}), !1
			}
			a.find(".list_box").html() ? (a.show().siblings().hide(), "true" == a.attr("mnext") ? t.root.find(".mNext").removeClass("no_more") : t.root.find(".mNext").addClass("no_more")) : i({
				question: "_open_tb_page_",
				token: {
					type: "wxk",
					dtype: e,
					Do: "list",
					url: o,
					pageSize: t.pageSize
				}
			})
		}), "list" == n &&
		function(e) {
			var t = e.token.url,
				n = e.token.price1 || null,
				d = e.token.price2 || null,
				r = e.token.kwd || null,
				s = {
					currentPage: e.token.currentPage || 1,
					pageSize: e.token.pageSize,
					_tb_token_: e.token._tb_token_ || $.cookie("_tb_token_")
				};
			n && (s.price1 = n), d && (s.price2 = d), r && (s.kwd = r), a(t, s, function(a) {
				if (a) if (-1 != a) {
					var n = {
						question: "_tb_data_",
						data: a,
						token: {
							type: "wxk",
							dtype: e.token.dtype || "",
							Do: "list"
						}
					};
					i(n)
				} else console.info("数据返回异常");
				else o({
					type: "get",
					url: t,
					data: s,
					callback: function(t) {
						var o = {
							question: "_tb_data_",
							data: t,
							token: {
								type: "wxk",
								dtype: e.token.dtype || "",
								Do: "list"
							}
						};
						i(o)
					}
				})
			})
		}(e)
	}, r.set = function(e) {
		var t = this;
		"list" == e.token.Do && (!
		function(e) {
			var i = e.data ? JSON.parse(e.data) : {},
				o = e.token.dtype,
				a = t.root.find(".modpanel[showd=" + o + "]");
			if (a.find($(".err").remove()), a.show().siblings().hide(), a.find(".list_box").remove(), "common" == o) {
				var n = "<ul class='list_box'></ul>",
					d = "";
				$.each(i.module.content, function(e, t) {
					d += "<li class='glinkli' linkd='" + t.link + "'><div class='link_title'>" + t.title + "</div><a class='set'>选择链接</a></li>"
				});
				try {
					var s = JSON.parse($("body").attr("wx-globalData")),
						c = s.sellerId,
						p = "https://h5.m.taobao.com/smart-interaction/follow.html?_wvUseWKWebView=YES&type=tb&id=" + c;
					d += "<li class='glinkli' linkd='" + p + "'><div class='link_title'>关注店铺</div><a class='set'>选择链接</a></li>", s.follow = p, r.globalData = s, r._follow_ = !0
				} catch (e) {}
				a.append($(n).append(d))
			}
			if ("widgetid" == o) {
				let e = "", o = i.data.moduleList, a = t.root.find(".diy-widgetid-inshop");
				o.map((t, i) = > {
					e += '<div class="widgetid-li" data-widgetid="' + t.widgetId + '"><span class="l"><em class="n">' + (i + 1) + "</em>" + t.moduleInstantsName + '</span><span class="c"><em>widgetid:</em>' + t.widgetId + '</span><span class="r widgetid-shop-ok" data-widgetid="' + t.widgetId + '">选择</span></div>'
				}), e && o && (a.empty().append(e), t.root.find(".diy-widgetid").remove(), t.root.find(".mPrev").addClass("no_more"), t.root.find(".mNext").addClass("no_more"), t.root.find(".widgetid-shop-ok").unbind("click"), t.root.find(".widgetid-shop-ok").bind("click", function() {
					let e = "widgetid|" + $(this).attr("data-widgetid");
					$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
				}))
			}
			if ("items" == o) {
				var n = "<ul class='list_box'></ul>",
					d = "";
				if (i.module.totalCount > 0) {
					i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "false"));
					for (var l = 0; l < i.module.itemList.length; l++) d += "<li class='kroot' data-itemId='" + i.module.itemList[l].itemId + "' linkd='" + i.module.itemList[l].itemLink + "'><div class='link-img'><img src='" + i.module.itemList[l].picUrl + "_100x100xz.jpg'/></div><div class='link_title'>" + i.module.itemList[l].title + "</div><div class='link_price'>￥" + i.module.itemList[l].salePrice + "</div><a class='gmlink set'>购买链接</a><a class='Add_cart set'>加购链接</a><a class='Add_wangwang set' title='联系客服发送此宝贝链接'>联系客服</a></li>"
				} else d += "<li class='no_data'><span>当前条件下没有查询到数据</span></li>", t.root.find(".mNext").addClass("no_more");
				a.append($(n).append(d))
			}
			if ("category" == o) {
				var n = "<ul class='list_box'></ul>",
					d = "";
				i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=category]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=category]").attr("mnext", "false"));
				for (var l = 0; l < i.module.catLinkList.length; l++) d += "<li class='glinkli' linkd='" + i.module.catLinkList[l].catLink + "'><div class='link_title'>" + i.module.catLinkList[l].catName + "</div><a class='set'>选择链接</a></li>";
				a.append($(n).append(d))
			}
			if ("coupon" == o) {
				var n = "<ul class='list_box'></ul>",
					d = "";
				i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=coupon]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=coupon]").attr("mnext", "false"));
				for (var l = 0; l < i.module.couponList.length; l++) d += "<li class='glinkli' linkd='https:" + i.module.couponList[l].couponUrl + "'><div class='link_title'>" + i.module.couponList[l].name + "</div><div class='Exp'><span>" + i.module.couponList[l].amount + "元</span><span>" + i.module.couponList[l].thresholdDesc + "</span></div><a class='set'>新窗口领券</a>" + (r._follow_ ? "<a class='set _follow_'>关注领券</a>" : "") + "<a class='set_getcoupon'>直接领取</a></li>";
				a.append($(n).append(d))
			}
			if ("page" == o) {
				var n = "<ul class='list_box'></ul>",
					d = "",
					_ = i.module.currentPage || 1,
					u = i.module.totalPage || 1;
				_ < u ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=page]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=page]").attr("mnext", "false"));
				for (var l = 0; l < i.module.content.length; l++) d += "<li class='glinkli' linkd='" + i.module.content[l].url + "'><div class='link_title'>" + i.module.content[l].title + "</div><a class='set'>选择链接</a></li>";
				a.append($(n).append(d))
			}
			if ("activity" == o) {
				var n = "<ul class='list_box'></ul>",
					d = "",
					_ = i.module.currentPage || 1,
					u = i.module.totalPage || 1;
				_ < u ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=activity]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=activity]").attr("mnext", "false"));
				for (var l = 0; l < i.module.pageList.length; l++) d += "<li class='glinkli' linkd='" + i.module.pageList[l].link + "'><div class='link_title'>" + i.module.pageList[l].title + "</div><a class='set'>选择链接</a></li>";
				a.append($(n).append(d))
			}
			1 == t.page && t.root.find(".mPrev").addClass("no_more"), t.root.find(".glinkli").unbind("click"), t.root.find(".glinkli").bind("click", function() {
				var e = $(this).attr("linkd");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find("._follow_").unbind("click"), t.root.find("._follow_").bind("click", function(e) {
				var e = e || event,
					t = escape($(this).parent().attr("linkd"));
				e.stopPropagation();
				try {
					var i = r.globalData.follow + "&r=false&img=&back=" + t;
					$(".tbapp_exchange").attr("data-wxk", i), $(".tbapp_exchange").find(".wxk_get").click()
				} catch (e) {}
			}), t.root.find(".set_getcoupon").unbind("click"), t.root.find(".set_getcoupon").bind("click", function(e) {
				var t = "coupon|" + $(this).parent().attr("linkd");
				e.stopPropagation(), $(".tbapp_exchange").attr("data-wxk", t), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find(".gmlink").unbind("click"), t.root.find(".gmlink").bind("click", function() {
				var e = $(this).parents(".kroot").attr("linkd");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find(".Add_cart").unbind("click"), t.root.find(".Add_cart").bind("click", function() {
				var e = "add|" + $(this).parents(".kroot").attr("data-itemid");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find(".Add_wangwang").unbind("click"), t.root.find(".Add_wangwang").bind("click", function() {
				var e = "wang|" + $(this).parents(".kroot").attr("data-itemid");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			})
		}(e), t.root.find(".mPrev").unbind("click"), t.root.find(".mPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				!(t.page > 1) || t.page--;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					a = {
						question: "_open_tb_page_",
						token: {
							type: "wxk",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var n = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						r = t.root.find(".search_items").find("input[name=itemname]").val();
					n && (a.token.price1 = n), d && (a.token.price2 = d), r && (a.token.kwd = r)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				a.token.currentPage = t.page, i(a), 1 == t.page && t.root.find(".mNext").removeClass("no_more")
			}
		}), t.root.find(".mNext").unbind("click"), t.root.find(".mNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				t.page++;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					a = {
						question: "_open_tb_page_",
						token: {
							type: "wxk",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var n = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						r = t.root.find(".search_items").find("input[name=itemname]").val();
					n && (a.token.price1 = n), d && (a.token.price2 = d), r && (a.token.kwd = r)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				i(a), t.root.find(".mPrev").removeClass("no_more")
			}
		}), t.root.find("#Items_Search_wx").unbind("click"), t.root.find("#Items_Search_wx").bind("click", function() {
			var e = t.postd.items,
				o = t.root.find(".search_items").find("input[name=startPrice]").val(),
				a = t.root.find(".search_items").find("input[name=endPrice]").val(),
				n = t.root.find(".search_items").find("input[name=itemname]").val(),
				d = {
					question: "_open_tb_page_",
					token: {
						type: "wxk",
						dtype: "items",
						Do: "list",
						url: e,
						pageSize: t.pageSize,
						price1: o,
						price2: a,
						kwd: n
					}
				};
			t.page = 1, i(d)
		}), $(".tbapp_exchange").attr("data-tuinit", !0))
	};
	var s = {
		click: null,
		page: 1,
		pageSize: 20,
		shop: "",
		checked_item: [],
		checked_ids: [],
		postd: {
			items: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8",
			items_Imp: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8"
		}
	};
	s.root = $(".tbapps .WXItems"), s.init = function() {
		var e = $(".tbapp_exchange").attr("data-items-checked");
		if (e) {
			var t = JSON.parse(e),
				i = [],
				o = [];
			t.length && $.each(t, function(e, t) {
				t.itemId && (i.push(t), o.push(t.itemId))
			}), i.length ? (s.checked_item = i, s.checked_ids = o) : (s.checked_item = [], s.checked_ids = [])
		}
		s.get({
			token: {}
		}), s.root.find(".nav[get_data=items]").click()
	}, s.get = function(e) {
		var t = this,
			n = e.token.Do;
		t.root.find(".nav").unbind("click"), t.root.find(".nav").bind("click", function() {
			$(this).addClass("linkselected").siblings().removeClass("linkselected"), t.root.find(".mPrev").addClass("no_more"), t.page = 1;
			var e = $(this).attr("get_data"),
				o = t.postd[e];
			if (t.root.find(".modpanel[showd=" + e + "]").show().siblings().hide(), "items" == e) {
				var a = t.root.find(".modpanel[showd=items]");
				(a.find("input[name=itemname]").val() || a.find("input[name=startPrice]").val() || a.find("input[name=endPrice]").val()) && (t.root.find(".modpanel[showd=items]").find("input").val(""), a.find(".list_box").remove()), i({
					question: "_open_tb_page_",
					token: {
						type: "wxitem",
						dtype: e,
						Do: "list",
						url: o,
						pageSize: t.pageSize
					}
				})
			}
			if ("items_Imp" == e) {
				var n = t.root.find(".cjarea-container"),
					d = n.find(".id_empty"),
					r = n.find(".id_query");
				t.root.find(".modpanel[showd=items]").find(".list_box").remove(), t.root.find(".mPrev").addClass("no_more"), t.root.find(".mNext").addClass("no_more"), n.find(".input-area").css("height", n[0].offsetHeight - 110), d.unbind("click"), r.unbind("click"), d.bind("click", function() {
					n.find(".input-area").val("")
				}), r.bind("click", function() {
					var t = n.find(".input-area").val().replace(/(^\s*)|(\s*$)/g, ""),
						a = 1;
					if (!t) return !1;
					if (t) {
						var d = t.split(/[(\r\n)\r\n]+/);
						for (let e = 0; e < d.length; e++) {
							const t = d[e];
							if (isNaN(t)) return alert("宝贝ID，亲输入的不是数字，请确定后再查询"), !1
						}
						a = d.length, t = t.replace(/[(\r\n)\r\n]+/g, ",")
					}
					i({
						question: "_open_tb_page_",
						token: {
							type: "wxitem",
							dtype: e,
							Do: "idImp_list",
							url: o,
							itemIds: t,
							pageSize: a
						}
					})
				})
			}
		}), "list" == n &&
		function(e) {
			var t = e.token.url,
				n = e.token.price1 || null,
				d = e.token.price2 || null,
				r = e.token.kwd || null,
				s = {
					currentPage: e.token.currentPage || 1,
					pageSize: e.token.pageSize,
					_tb_token_: e.token._tb_token_ || $.cookie("_tb_token_")
				};
			n && (s.price1 = n), d && (s.price2 = d), r && (s.kwd = r), a(t, s, function(a) {
				if (a) if (-1 != a) {
					var n = {
						question: "_tb_data_",
						data: a,
						token: {
							type: "wxitem",
							dtype: e.token.dtype || "",
							Do: "list"
						}
					};
					i(n)
				} else console.info("数据返回异常");
				else o({
					type: "get",
					url: t,
					data: s,
					callback: function(t) {
						var o = {
							question: "_tb_data_",
							data: t,
							token: {
								type: "wxitem",
								dtype: e.token.dtype || "",
								Do: "list"
							}
						};
						i(o)
					}
				})
			})
		}(e), "idImp_list" == n &&
		function(e) {
			var t = e.token.url,
				n = {
					itemIds: e.token.itemIds || 0,
					pageSize: e.token.pageSize,
					_tb_token_: e.token._tb_token_ || $.cookie("_tb_token_")
				};
			a(t, n, function(a) {
				if (a) if (-1 != a) {
					var d = {
						question: "_tb_data_",
						data: a,
						token: {
							type: "wxitem",
							dtype: e.token.dtype || "",
							Do: "idImp_list"
						}
					};
					i(d)
				} else console.info("数据返回异常");
				else o({
					type: "get",
					url: t,
					data: n,
					callback: function(t) {
						var o = {
							question: "_tb_data_",
							data: t,
							token: {
								type: "wxitem",
								dtype: e.token.dtype || "",
								Do: "idImp_list"
							}
						};
						i(o)
					}
				})
			})
		}(e)
	}, s.set = function(e) {
		var t = this,
			o = e.token.dtype,
			a = e.token.Do;

		function n() {
			var e = t.root.find(".modpanel[showd=" + o + "]");
			e.find(".all_icon").unbind("click"), e.find(".all_icon").bind("click", function() {
				$(this).find(".icon").hasClass("icon_checked") ? ($(this).find(".icon").removeClass("icon_checked"), t.root.find(".tb_item").removeClass("checked"), t.root.find(".tb_item").find(".icon").removeClass("icon_checked")) : ($(this).find(".icon").addClass("icon_checked"), t.root.find(".tb_item").addClass("checked"), t.root.find(".tb_item").find(".icon").addClass("icon_checked"))
			}), e.find(".tb_item").unbind("click"), e.find(".tb_item").bind("click", function() {
				$(this).find(".icon").hasClass("icon_checked") ? ($(this).removeClass("checked"), $(this).find(".icon").removeClass("icon_checked")) : ($(this).find(".icon").addClass("icon_checked"), $(this).addClass("checked"))
			}), t.root.find(".setItems").unbind("click"), t.root.find(".setItems").bind("click", function() {
				var i = [],
					o = e.find(".checked");
				o.length && $.each(o, function(e, t) {
					try {
						var o = JSON.parse($(t).attr("data-item"));
						o && i.push(o)
					} catch (t) {
						alert("err-tbapp-item-001")
					}
				}), i.length ? ($(".tbapp_exchange").attr("data-items", JSON.stringify(i)), $(".tbapp_exchange").find(".wxitem_get").click()) : t.root.find(".cjclose").click()
			})
		}
		function d(e, i) {
			var o, a, n = "",
				d = !1;
			return i ? (o = "checked", a = "icon_checked") : (o = "", a = ""), e && e.length && $.each(e, function(e, r) {
				i || (d = -1 != t.checked_ids.indexOf(r.itemId)), "id_query" == i && (-1 != t.checked_ids.indexOf(r.itemId) ? (d = !1, o = "checked", a = "icon_checked") : (o = "", a = "", d = !1)), d || (n += ["<li class='tb_item " + o + "' data-item='" + JSON.stringify(r) + "'>", "<i class='icon " + a + "'></i>", "<div class='link-img'><img src='" + r.picUrl + "_100x100xz.jpg'/></div>", "<div class='link_title'>" + r.title + "</div>", "<div class='link_price'>￥" + r.salePrice + "</div>", "</li>"].join(""))
			}), n
		}
		function r() {
			var e = [],
				i = [],
				o = t.root.find(".checked");
			o.length && $.each(o, function(t, o) {
				try {
					var a = JSON.parse($(o).attr("data-item"));
					a && (e.push(a), i.push(a.itemId))
				} catch (o) {
					alert("err-tbapp-ckitem-001")
				}
			}), e.length ? (t.checked_item = e, t.checked_ids = i) : (t.checked_item = [], t.checked_ids = [])
		}
		"list" == a && (!
		function(e) {
			var i = e.data ? JSON.parse(e.data) : {},
				a = t.root.find(".modpanel[showd=" + o + "]");
			if (a.find($(".err").remove()), a.show().siblings().hide(), a.find(".list_box").remove(), "items" == o) {
				var r = "";
				i.module.totalCount > 0 ? (i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "false")), r = d(i.module.itemList)) : (r += "<li class='no_data'><span>当前条件下没有查询到数据！<em>您可能没有<a target='_blank' href='https://sucai.wangpu.taobao.com'>登陆淘宝</a>，或没有更多宝贝了！</em></span></li>", t.root.find(".mNext").addClass("no_more")), a.append($("<ul class='list_box'></ul>").prepend(d(t.checked_item, !0)).append(r)), a.find(".tb_item").length, a.find(".checked").length
			}
			1 == t.page && t.root.find(".mPrev").addClass("no_more"), n()
		}(e), t.root.find(".mPrev").unbind("click"), t.root.find(".mPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				r(), t.click = $(this), !(t.page > 1) || t.page--;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					a = {
						question: "_open_tb_page_",
						token: {
							type: "wxitem",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var n = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						s = t.root.find(".search_items").find("input[name=itemname]").val();
					n && (a.token.price1 = n), d && (a.token.price2 = d), s && (a.token.kwd = s)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				a.token.currentPage = t.page, i(a), 1 == t.page && t.root.find(".mNext").removeClass("no_more")
			}
		}), t.root.find(".mNext").unbind("click"), t.root.find(".mNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				r(), t.click = $(this), t.page++;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					a = {
						question: "_open_tb_page_",
						token: {
							type: "wxitem",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var n = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						s = t.root.find(".search_items").find("input[name=itemname]").val();
					n && (a.token.price1 = n), d && (a.token.price2 = d), s && (a.token.kwd = s)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				i(a), t.root.find(".mPrev").removeClass("no_more")
			}
		}), t.root.find("#Items_Search_wx").unbind("click"), t.root.find("#Items_Search_wx").bind("click", function() {
			r();
			var e = t.postd.items,
				o = t.root.find(".search_items").find("input[name=startPrice]").val(),
				a = t.root.find(".search_items").find("input[name=endPrice]").val(),
				n = t.root.find(".search_items").find("input[name=itemname]").val(),
				d = {
					question: "_open_tb_page_",
					token: {
						type: "wxitem",
						dtype: "items",
						Do: "list",
						url: e,
						pageSize: t.pageSize,
						price1: o,
						price2: a,
						kwd: n
					}
				};
			t.page = 1, i(d)
		}), $(".tbapp_exchange").attr("data-tuinit", !0)), "idImp_list" == a &&
		function(e) {
			var i = e.data ? JSON.parse(e.data) : {},
				a = t.root.find(".modpanel[showd=" + o + "]").find(".right"),
				r = "";
			a.empty(), i.module.totalCount > 0 ? r = d(i.module.itemList, "id_query") : r += "<li class='no_data'><span>当前条件下没有查询到数据,或服务异常</span></li>";
			a.append(r), n()
		}(e)
	};
	var c = {
		api: "https://stream-upload.taobao.com/api/upload.api?appkey=tu&watermark=false&autoCompress=false&_input_charset=utf-8",
		tutree: "//stream.taobao.com/api/get_folders.api?parentFolderId=&appkey=tu&sort=0",
		addtree: "https://tadget.taobao.com/redaction/redaction/json.json?cmd=json_add_dir&_input_charset=utf-8&dir_id=0",
		folderId: 0,
		folderName: "大师助手切图(勿删)"
	};
	c.root = $(".tbapps"), c.init = function() {
		var e = $(".tbapp_exchange").attr("data-uptu-checked"),
			t = $(".tbapp_exchange").attr("data-uptu-fileName"),
			o = $(".tbapp_exchange").attr("data-uptu-pos");
		e && i("add_folderId" == e ? {
			question: "_open_tb_page_",
			token: {
				type: "up_tu",
				Do: "add_folderId",
				tu: e
			}
		} : {
			question: "_open_tb_page_",
			token: {
				type: "up_tu",
				Do: "up",
				_uptu_folderId_: $.cookie("_uptu_folderId_"),
				tu: e,
				fileName: t,
				pos: o
			}
		})
	}, c.get = function(e) {
		var t = this,
			a = e.token.tu;
		if ("add_folderId" == e.token.Do) o({
			type: "get",
			url: t.tutree,
			callback: function(e) {
				try {
					var e = JSON.parse(e),
						a = 0;
					if ($.each(e.object.childrens, function(e, i) {
						if (i.folderName == t.folderName) return a = i.folderId, !1
					}), a) {
						t.folderId = a, $.cookie("_uptu_folderId_", t.folderId);
						var n = {
							question: "_tb_data_",
							data: t.folderId,
							token: {
								type: "up_tu",
								Do: "add_folderId"
							}
						};
						i(n)
					} else o({
						type: "get",
						url: t.addtree,
						data: {
							name: t.folderName,
							_tb_token_: $.cookie("_tb_token_")
						},
						callback: function(e) {
							try {
								t.folderId = JSON.parse(e).jsonData.id, $.cookie("_uptu_folderId_", t.folderId);
								var o = {
									question: "_tb_data_",
									data: t.folderId,
									token: {
										type: "up_tu",
										Do: "add_folderId"
									}
								};
								i(o)
							} catch (e) {}
						}
					})
				} catch (e) {}
			}
		});
		else if (a) {
			var n = e.token._uptu_folderId_ || $.cookie("_uptu_folderId_") || 0,
				d = e.token.fileName || "未命名",
				r = e.token.pos;
			!
			function(e, t) {
				try {
					var i = function(e) {
							for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], o = new ArrayBuffer(t.length), a = new Uint8Array(o), n = 0; n < t.length; n++) a[n] = t.charCodeAt(n);
							return new Blob([o], {
								type: i
							})
						}(e.data),
						o = new XMLHttpRequest,
						a = new FormData;
					a.append("file", i, e.fileName), o.onreadystatechange = function() {
						4 == o.readyState && 200 == o.status && (o.response ? t && t(o.response) : (t && t('{"retry":true}'), window.open("https://stream-upload.taobao.com", "_self")))
					}, o.open("post", e.api, !0), o.send(a)
				} catch (e) {}
			}({
				api: this.api + "&folderId=" + n,
				fileName: d,
				data: a
			}, function(e) {
				i({
					question: "_tb_data_",
					data: e,
					token: {
						type: "up_tu",
						Do: "up_tu_success",
						pos: r
					}
				})
			})
		}
	}, c.set = function(e) {
		var t = e.data,
			i = e.token.Do,
			o = e.token.pos;
		if ("add_folderId" == i && ($.cookie("_uptu_folderId_", t), $(".tbapp_exchange").attr("data-uptu-result", t), $(".tbapp_exchange").find(".up_tu_get").click()), "up_tu_success" == i) {
			try {
				t = JSON.parse(t);
				if ("UPTU" == o) return n.uptufun(t), !1
			} catch (e) {}
			if ('{"retry":true}' != t)(t = JSON.parse(t)).object.pos = o, t = JSON.stringify(t);
			$(".tbapp_exchange").attr("data-uptu-result", t), $(".tbapp_exchange").find(".up_tu_get").click()
		}
	}, $(".tbapp_exchange .tu").click(n.init), $(".tbapp_exchange .video").click(d.init), $(".tbapp_exchange .wxk").click(r.init), $(".tbapp_exchange .wxitem").click(s.init), $(".tbapp_exchange .up_tu").click(c.init)
}();