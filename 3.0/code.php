<form id="codeForm" method="post" >
<div id="tabs">
	<ul>
		<li><a id="a_tabs-1" href="#tabs-1">HTML代码</a></li>
		<li><a href="#tabs-2" style="display: none;">店铺CSS代码</a></li>
		<li><a href="#tabs-3">PS切片批量换图</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="margin-left: -10px;border-radius:2px;color: #666;height:30px;line-height:25px;padding: 10px;">此处可以放入您自己做的HTML代码，如：PS切片代码，DW做的热点代码等</li>
			<li>
				<textarea id="codeText" name="code" style="width:460px;height:300px;"></textarea>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li style="margin-left: -10px;border-radius:2px;color: #666;height:30px;line-height:25px;padding: 10px;">有店铺CSS权限， 可以在此处放入您店铺中的CSS代码。生成代码时，CSS不会生成出来。</li>
			<li>
				<textarea id="codeCssText" name="codecss" style="width:460px;height:300px;">
</textarea>
			</li>
		</ul>
	</div>
	<div id="tabs-3">
		<ul class="setform">
			<li style="margin-left: -10px;border-radius:2px;color: #666;height:30px;line-height:25px;padding: 10px;">1. 填入PS生成的切片代码</li>
			<li>
				<textarea id="codeText_org" name="codeorg" style="width:460px;height:50px;display:block;"></textarea>
			</li>
			<li style="margin-left: -10px;border-radius:2px;color: #666;height:30px;line-height:25px;padding: 20px 10px;">2. 填入已上传图片的链接（必须按切片导出的顺序填入，图片代码，图片链接均可）<br><span style="color:red;">温馨提示:建议使用图片空间自带的“多图复制”功能</span></li>
			<li style="height:100px;">
				<textarea id="codeText_org1" name="codeorg1" style="width:460px;height:50px;display:block;"></textarea>
			</li>
			<li style="clear: both;padding: 7px;">
				<span class="codeText_orgbtn" style="text-align:center;cursor:pointer;width:120px;display:block;background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2JjUPbmiJ.eBjSspiXXbqAFXa-39767794.png) 0 0 repeat-y;color:#FFF;height:30px;line-height:30px;z-index:1;margin:0px auto;border-radius:15px;">开始生成</span>
				<span>3. 生成结果(直接点击添加按钮将替换原先的内容)</span>
			</li>
			<li>
				<textarea id="codeText_new" name="codenew" style="width:460px;height:60px;"></textarea>
			</li>
			<li style="clear: both;padding-top: 10px; display:none;">
				<span id="codeText_toHtml" style="text-align:center;cursor:pointer;width:120px;display:block;background:url(https://img.alicdn.com/imgextra/i3/39767794/TB2JjUPbmiJ.eBjSspiXXbqAFXa-39767794.png) 0 0 repeat-y;color:#FFF;height:30px;line-height:30px;z-index:1;margin:5px auto;border-radius:2px;">添加到HTML代码框<span>
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
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
	$("#codeText_toHtml").on("click", function(event) {
		$("#codeText").val($("#codeText_new").val());
		$("#a_tabs-1").trigger("click");
	});
});
</script>