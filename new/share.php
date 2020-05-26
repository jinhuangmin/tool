<?
$data=$_POST;
?>
<form id="tForm" form-data="jfb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
            <li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="i2">分享图片：</label>
				<input id="i2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="shareSrc" value="<?=$data['shareSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="i3">分享页面地址：</label>
				<input id="i3" class="setinput" type="text" title="请输入您需要分享的页面地址，比如：某个宝贝的详情页地址；亦或是店铺首页。" name="shareUrl" value="<?=$data['shareUrl']?>" />
			</li>
			<li>
				<label for="i4">分享标题：</label>
				<input id="i4" class="setinput" type="text" title="分享时显示的分享标题" name="shareTitle" value="<?=$data['shareTitle']?>" />
			</li>
			<li>
				<label for="i5">默认文案：</label>
				<input id="i5" class="setinput" type="text" title="分享时的分享文字内容" name="shareDetail" value="<?=$data['shareDetail']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="ii1">应用宽度：</label>
				<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$data['width']?>" />
			</li>
			<li>
				<label for="ii2">应用高度：</label>
				<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$data['height']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$data['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$data['left']?>" />
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("input").buttonset();
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