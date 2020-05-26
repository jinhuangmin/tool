<div id="tabs-1">
	<ul class="setform">
		<li>
			<label for="i2">图片数量：</label>
			<input id="lightSwitchCount" class="setinput" type="text" title="" name="lightSwitchCount" value="" />
		</li>
	</ul>
</div>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tForm select").selectmenu();
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