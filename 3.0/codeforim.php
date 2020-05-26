<form id="codeForm" method="post" >
<input type="hidden" name="importType" id="importType" value="1" />
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">覆盖导入</a></li>
		<li><a href="#tabs-2">追加导入</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="margin-left: -10px;border-radius:2px;color: #666;height:50px;line-height:25px;padding: 10px;">此处只能导入本工具代码，覆盖导入将会清空目前已有的内容；追加导入则不清空内容。<br>非工具生成的代码，可在左侧面板中点击“<icon style="font-size:17px;color:#ff3333;">ꒂ</icon>”添加自定义HTML</li>
			<li>
				<textarea id="codeText" name="code" style="width:460px;height:300px;"></textarea>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li style="margin-left: -10px;border-radius:2px;color: #666;height:50px;line-height:25px;padding: 10px;">此处只能导入本工具代码，覆盖导入将会清空目前已有的内容；追加导入则不清空内容。<br>非工具生成的代码，可在左侧面板中点击“<icon style="font-size:17px;color:#ff3333;">ꒂ</icon>”添加自定义HTML</li>
			<li>
				<textarea id="codeText1" name="code" style="width:460px;height:300px;"></textarea>
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({
		activate: function( event, ui ) {
			$("#importType").val(ui.newTab.index()+1);
		}
	});
	$(".ui-dialog-content textarea").buttonset();
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