<form id="tForm" form-data="setitemstyle" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li>
				<label for="setitemstylename">预设样式缩略图：</label>
				<input class="setinput " type="text" title="请输入预设样式的缩略图 一般使用使用一个宝贝单元格的截图" id="setitemstyleurl"  junezx_vali_pic="true" name="setitemstyleurl" value="" />
			</li>
			<li>
				<label for="setitemstyletext">预设样式名称：</label>
				<input class="setinput " type="text" title="请输入预设样式的名称" id="setitemstyletext" junezx_vali_str="true" name="setitemstyletext" value=" "/>
			</li>
									<li>
				<label for="setitemformat">是否分享该预设样式：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="stylePower" value="2" checked="checked"  />
					<label for="r1" title="自己使用，别人无法看到该预设样式">自用</label>
					<input type="radio" id="r2" name="stylePower" value="1" />
					<label for="r2" title="分享此预设样式，需要审核，审核通过前仅能自用">分享</label>
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
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
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