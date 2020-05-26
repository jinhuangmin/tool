<div id="choosePicDiv">
	<hr />
	<div class="choose-pic-title">宝贝主图</div>
	<div class="choose-pic-box">
		<span  data-p="z1">1<font>第1张</font></span>
		<span  data-p="z2">2<font>第2张</font></span>
		<span  data-p="z3">3<font>第3张</font></span>
		<span  data-p="z4">4<font>第4张</font></span>
		<span  data-p="z5">5<font>第5张</font></span>
	</div>
	<hr />
	<div class="choose-pic-title" style="top:117px;width:80px;margin-left:-40px;">宝贝颜色图</div>
	<div class="choose-pic-box">
		<span  data-p="c1">1<font>第1张</font></span>
		<span  data-p="c2">2<font>第2张</font></span>
		<span  data-p="c3">3<font>第3张</font></span>
		<span  data-p="c4">4<font>第4张</font></span>
		<span  data-p="c5">5<font>第5张</font></span>
	</div>
</div>
<script type="text/javascript">
	$("#choosePicDiv").on("click", "span", function(event) {
		var _t = $(this);
		$("#choosePicDiv").find("span.active").removeClass("active");
		_t.addClass("active");
	});
</script>