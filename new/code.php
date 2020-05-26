<div id="tabs">
	<ul>
		<li><a href="#tabs-1">代码</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
						<li style="padding-left:10px;margin-left: -10px;border-radius:2px;color: #666;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;letter-spacing:-1px;">PS：此处可以放入您自己做的HTML代码，如：PS切片代码，DW做的热点代码等</li>
						<li>
				<textarea id="codeText" name="code" style="width:470px;height:300px;"></textarea>
			</li>
		</ul>
	</div>
</div>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("textarea").buttonset();
	$(".setform").tooltip({
		position: {
			my: "left top",
			at: "left bottom+5"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	});
});
</script>