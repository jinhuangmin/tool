<?
$data=$_POST;
?>
<form id="tForm" form-data="jzdb" method="post" >
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
				<label for="customContent">自定义内容：</label>
				<textarea id="customContent" name="customContent"><?=stripslashes($data['customContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
            <li>
				<label for="oveflowMode">超出部分内容：</label>
				<select id="oveflowMode" name="oveflowMode">
					<option value="visible" <? if($data['oveflowMode']=='visible'){echo'selected="selected"';} ?>>显示</option>
					<option value="hidden" <? if($data['oveflowMode']=='hidden'){echo'selected="selected"';} ?>>隐藏</option>
					<option value="hiddenXY" <? if($data['oveflowMode']=='hiddenXY'){echo'selected="selected"';} ?>>显示滚动条(横向纵向)</option>
					<option value="hiddenX" <? if($data['oveflowMode']=='hiddenX'){echo'selected="selected"';} ?>>显示滚动条(横向)</option>
					<option value="hiddenY" <? if($data['oveflowMode']=='hiddenY'){echo'selected="selected"';} ?>>显示滚动条(纵向)</option>
				</select>
			</li>
			<li style="display:none;">
				<label for="tt_i1">提示文字：</label>
				<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" name="tipText" value="<?=$data['tipText']?>" />
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
	$("#tForm select").selectmenu();
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