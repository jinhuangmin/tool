! function (a) {
	function b(b, c) {
		this.el = a(b), this.options = c || {}, this.x = !1 !== this.options.x || this.options.forceHorizontal, this.y = !1 !== this.options.y || this.options.forceVertical, this.autoHide = !1 !== this.options.autoHide, this.padding = void 0 == this.options.padding ? 2 : this.options.padding, this.inner = this.el.find(".antiscroll-inner"), this.inner.css({
			width: "+=" + (this.y ? f() : 0),
			height: "+=" + (this.x ? f() : 0)
		}), this.refresh()
	}

	function c(b) {
		this.pane = b, this.pane.el.append(this.el), this.innerEl = this.pane.inner.get(0), this.dragging = !1, this.enter = !1, this.shown = !1, this.pane.el.off("mouseenter.antis").on("mouseenter.antis", a.proxy(this, "mouseenter")), this.pane.el.off("mouseleave.antis").on("mouseleave.antis", a.proxy(this, "mouseleave")), this.el.off("mousedown.antis").on("mousedown.antis", a.proxy(this, "mousedown")), this.innerPaneScrollListener = a.proxy(this, "scroll"), this.pane.inner.scroll(this.innerPaneScrollListener), this.innerPaneMouseWheelListener = a.proxy(this, "mousewheel"), this.pane.inner.unbind("mousewheel.antis").bind("mousewheel.antis", this.innerPaneMouseWheelListener);
		var c = this.pane.options.initialDisplay;
		c !== !1 && (this.show(), this.pane.autoHide && (this.hiding = setTimeout(a.proxy(this, "hide"), parseInt(c, 10) || 3e3)))
	}

	function d(a, b) {
		function c() {}
		c.prototype = b.prototype, a.prototype = new c
	}

	function f() {
		var b, c, d;
		return void 0 === e && (b = a('<div class="antiscroll-inner" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"/></div>'), a("body").append(b), c = a(b).innerWidth(), d = a("div", b).innerWidth(), a(b).remove(), e = c - d), e
	}
	a.fn.antiscroll = function (b) {
		return this.each(function () {
			a(this).data("antiscroll") && a(this).data("antiscroll").destroy(), a(this).data("antiscroll", new a.Antiscroll(this, b))
		})
	}, a.Antiscroll = b, b.prototype.refresh = function () {
		var a = this.inner.get(0).scrollWidth > this.el.width() + (this.y ? f() : 0),
			b = this.inner.get(0).scrollHeight > this.el.height() + (this.x ? f() : 0);
		this.x && (!this.horizontal && a ? this.horizontal = new c.Horizontal(this) : this.horizontal && !a ? this.horizontal.hide() : this.horizontal && (this.horizontal.update(), this.horizontal.show())), this.y && (!this.vertical && b ? this.vertical = new c.Vertical(this) : this.vertical && !b ? this.vertical.hide() : this.vertical && (this.vertical.update(), this.vertical.show()))
	}, b.prototype.destroy = function () {
		return this.horizontal && (this.horizontal.destroy(), this.horizontal = null), this.vertical && (this.vertical.destroy(), this.vertical = null), this
	}, b.prototype.rebuild = function () {
		return this.destroy(), this.inner.attr("style", ""), b.call(this, this.el, this.options), this
	}, c.prototype.destroy = function () {
		return this.el.remove(), this.pane.inner.unbind("scroll", this.innerPaneScrollListener), this.pane.inner.unbind("mousewheel", this.innerPaneMouseWheelListener), this
	}, c.prototype.mouseenter = function () {
		this.enter = !0, this.show()
	}, c.prototype.mouseleave = function () {
		this.enter = !1, this.dragging || this.pane.autoHide && this.hide()
	}, c.prototype.scroll = function () {
		this.shown || (this.show(), this.enter || this.dragging || this.pane.autoHide && (this.hiding = setTimeout(a.proxy(this, "hide"), 1500))), this.update()
	}, c.prototype.mousedown = function (b) {
		b.preventDefault(), a(b.target).addClass("ashover"), this.dragging = !0, this.startPageY = b.pageY - parseInt(this.el.css("top"), 10), this.startPageX = b.pageX - parseInt(this.el.css("left"), 10), this.startY = b.pageY, this.startX = b.pageX, this.el[0].ownerDocument.onselectstart = function () {
			return !1
		};
		var c = this.pane,
			d = a.proxy(this, "mousemove"),
			e = this;
		a(this.el[0].ownerDocument).off("mousemove.antis mouseup.antis").on("mousemove.antis", d).on("mouseup.antis", function () {
			"junebox" == c.inner.children().children().attr("id") && D.layoutCanvas(), a(b.target).removeClass("ashover"), e.dragging = !1, this.onselectstart = null, a(this).unbind("mousemove", d), !e.enter
		})
	}, c.prototype.show = function () {
		!this.shown && this.update() && (this.el.addClass("antiscroll-scrollbar-shown"), this.hiding && (clearTimeout(this.hiding), this.hiding = null), this.shown = !0)
	}, c.prototype.hide = function () {
		this.el.removeClass("antiscroll-scrollbar-shown"), this.shown = !1
	}, c.Horizontal = function (b) {
		this.el = a('<div class="antiscroll-scrollbar antiscroll-scrollbar-horizontal"/>', b.el), c.call(this, b)
	}, d(c.Horizontal, c), c.Horizontal.prototype.update = function () {
		var a = this.pane.el.width(),
			b = a - 2 * this.pane.padding,
			c = this.pane.inner.get(0);
		return this.el.css("width", b * a / c.scrollWidth).css("left", b * c.scrollLeft / c.scrollWidth), a < c.scrollWidth
	}, c.Horizontal.prototype.mousemove = function (a) {
		var i, b = this.pane.el.width() - 2 * this.pane.padding,
			c = a.pageX - this.startPageX,
			e = (a.pageX - this.startX, this.el.width()),
			f = this.pane.inner.get(0);
		m(D.june.attr("data-ol") || "0"), i = Math.min(Math.max(c, 0), b - e), f.scrollLeft = (f.scrollWidth - this.pane.el.width()) * i / (b - e)
	}, c.Horizontal.prototype.mousewheel = function (a, b, c) {
		return 0 > c && 0 == this.pane.inner.get(0).scrollLeft || c > 0 && this.innerEl.scrollLeft + Math.ceil(this.pane.el.width()) == this.innerEl.scrollWidth ? (a.preventDefault(), !1) : void 0
	}, c.Vertical = function (b) {
		this.el = a('<div class="antiscroll-scrollbar antiscroll-scrollbar-vertical"/>', b.el), c.call(this, b)
	}, d(c.Vertical, c), c.Vertical.prototype.update = function () {
		var e, f, a = this.pane.el.height(),
			b = a - 2 * this.pane.padding,
			c = this.innerEl,
			d = b * a / c.scrollHeight;
		return d = 20 > d ? 20 : d, e = b * c.scrollTop / c.scrollHeight, e + d > b && (f = e + d - b, e = e - f - 3), this.el.css("height", d).css("top", e), a < c.scrollHeight
	}, c.Vertical.prototype.mousemove = function (a) {
		var j, b = this.pane.el.height(),
			c = b - 2 * this.pane.padding,
			d = a.pageY - this.startPageY,
			f = (a.pageY - this.startY, this.el.height()),
			g = this.innerEl;
		m(D.june.attr("data-ot") || "0"), j = Math.min(Math.max(d, 0), c - f), g.scrollTop = (g.scrollHeight - b) * j / (c - f)
	}, c.Vertical.prototype.mousewheel = function (a, b, c, d) {
		return d > 0 && 0 == this.innerEl.scrollTop || 0 > d && this.innerEl.scrollTop + Math.ceil(this.pane.el.height()) == this.innerEl.scrollHeight ? (a.preventDefault(), !1) : void 0
	};
	var e
}(jQuery),
function (a) {
	"use strict";
	a.fn.scrollbar = function (b) {
		return b = b || {}, a(this).each(function () {
			var c, d, e, f, g, h, i, j, k, l;
			if (e = a(this), a(this).parent().hasClass("box-inner")) c = e.parent().parent().parent().parent(), c.offset({
				left: b.byleft,
				top: b.bytop
			});
			else {
				if (a.data(this, "antiscrolled")) return;
				a.data(this, "antiscrolled", "true"), f = e.css("float"), i = e.css("position"), j = e.css("left"), k = e.css("top"), g = e.outerWidth(), h = e.outerHeight(), c = a('<div class="box-wrap antiscroll-wrap"><div class="box"><div class="antiscroll-inner"></div></div></div>'), d = a('<div class="box-inner"></div>'), l = {
					"float": f,
					left: j,
					top: k,
					position: "absolute",
					bottom: 0,
					right: 0
				}, e.css({
					width: "auto",
					height: "auto",
					left: "auto",
					top: "auto",
					position: "static"
				}).after(c), d.append(e), "yes" == b.nnrb && (l = {
					"float": f,
					left: j,
					top: k,
					position: "absolute",
					height: 396,
					zIndex: 1003
				}), c.css(l).children(".box").css({
					width: "100%",
					height: "100%"
				}).end().children(".box").children(".antiscroll-inner").append(d).end().antiscroll(b), d.width() !== g && c.find(".antiscroll-inner").css({
					width: 2 * g - d.width(),
					height: h + g - d.width()
				}), c.children(".box").children(".antiscroll-inner").css({
					width: "100%",
					height: "100%"
				})
			}
		})
	}
}(jQuery);
