<form id="tForm" form-data="setitemstyle" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li>
				<label for="setitemstylename">预设样式缩略图：</label>
				<input class="setinput " type="text" title="请输入预设样式的缩略图 一般使用使用一个宝贝单元格的截图" id="setitemstyleurl" name="setitemstyleurl" value="" />
			</li>
			<li>
				<label for="setitemstyletext">预设样式名称：</label>
				<input class="setinput " type="text" title="请输入预设样式的名称" id="setitemstyletext" name="setitemstyletext" value=" "/>
			</li>
			<li>
				<label for="setitemformat">重名覆盖：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="stylePower" value="2" checked="checked"  />
					<label for="r1" title="有重名提示">提示</label>
					<input type="radio" id="r2" name="stylePower" value="1" />
					<label for="r2" title="有重名覆盖">覆盖</label>
				</div>
			</li>
            
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("input, .setform > li > div").buttonset();
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