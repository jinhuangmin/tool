<input type="hidden" name="importType" id="importType" value="1" />
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">覆盖导入</a></li>
		<li><a href="#tabs-2">追加导入</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="padding-left:10px;margin-left: -10px;border-radius:2px;color: #666;height:40px;line-height:25px;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;letter-spacing:-1px;"><p style="padding-top:10px;color:#f00;">PS：此处只能导入新工具生成的代码，将会清空目前已有的内容！</p></li>
			<li>
				<textarea id="codeText" name="code" style="width:470px;height:300px;"></textarea>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li style="padding-left:10px;margin-left: -10px;border-radius:2px;color: #666;height:40px;line-height:25px;background:#efefff;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;letter-spacing:-1px;"><p style="padding-top:10px;color:#f00;">PS：此处只能导入新工具生成的代码，在目前已有的内容下方追加新的内容！</p></li>
			<li>
				<textarea id="codeText1" name="code" style="width:470px;height:300px;"></textarea>
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