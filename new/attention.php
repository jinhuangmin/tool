<?
$data=$_POST;
$childConfigx=$data['childConfig'];
$childConfig=$childConfigx['0'];

?>
<form id="tForm" form-data="jab" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
		<li><a href="#tabs-3">关注数字设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform"><li class="setshousuo" style="height:80px">说明:淘宝系统自定义做的关注已经被淘宝屏蔽,全网无效,这都半年了还没好,所以不用问我们为什么点击无效,做个关注图标装装样子,然后弄个收藏链接吧!</li><ul>
        
        <ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="i2">关注ID：</label>
				<input id="i2" class="setinput" type="text" title="请输入需要关注的品牌ID。" name="attentionID" value="<?=$data['attentionID']?>" />
				<a class="pinpaiID june-preview" href="./pinpaiID.html" target="_blank">获取教程</a>
			</li>
			<li>
				<label for="i3">关注图片地址：</label>
				<input id="i3" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="attentionSrc" value="<?=$data['attentionSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?>/>
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="cd1">是否显示关注数字：</label>
				<div id="cd1">
					<input type="checkbox" id="c1" name="numberControl" value="numberShow" <? if($data['numberControl']=='numberShow'){echo'checked="checked"';} ?> />
					<label for="c1" title="" style="width:120px;">显示关注数字</label>
					<!--
					<input type="checkbox" id="c2" name="suspendControl" value="suspendShow"  />
					<label for="c2" title="" style="width:90px;">悬浮显示</label>
					-->
				</div>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
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
		<div id="tabs-3">
		<ul class="setform">
			<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig['attachID']?>" />
			<li>
				<label for="child0i1">数字颜色：</label>
				<input id="child0i1" class="setinput tColorPicker" type="text" title="请输入关注数字的文字颜色" name="childConfig[0].characterColor" value="<?=$childConfig['characterColor']?>" />
			</li>
			<li>
				<label for="child0i2">数字大小：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[0].characterSize" value="<?=$childConfig['characterSize']?>" />
			</li>
			<li>
				<label for="child0characterFont">数字字体：</label>
				<select id="child0characterFont" title="请某个宝贝的。" name="childConfig[0].characterFont">
					<option value="宋体" <? if($childConfig['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($childConfig['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($childConfig['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($childConfig['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
				</select>
			</li>
			<li>
				<label for="child0characterWeight">数字粗细：</label>
				<select id="child0characterWeight" name="childConfig[0].characterWeight">
					<option value="normal" <? if($childConfig['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($childConfig['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
		</ul>
	</div>
	</div>
</form>

<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$data['active']?>});
	$("input, .setform > li > div").buttonset();
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