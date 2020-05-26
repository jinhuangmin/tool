<input type="hidden" name="importType" id="importType" value="1" />
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">导入</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="padding-left:10px;margin-left: -10px;padding-top:10px;padding-bottom:10px;border-radius:2px;color: #666;height:50px;line-height:25px;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;letter-spacing:-1px;">此处可以导入之前用此工具生成的代码。</li>
			<li>
				<textarea id="codeText" name="code" style="width:460px;height:250px;"></textarea>
			</li>
		</ul>
	</div>
</div>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({
		activate: function( event, ui ) {
			$("#importType").val(ui.newTab.index()+1);
		}
	});
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