<?
$data=$_POST;

?>
<form id="tForm" form-data="jacb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="rd1">默认展开/关闭：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="acMode" value="display" <? if($data['acMode']=='display'){echo'checked="checked"';} ?> />
					<label for="r1" title="">展开</label>
					<input type="radio" id="r2" name="acMode" value="hide" <? if($data['acMode']=='hide'){echo'checked="checked"';} ?> />
					<label for="r2" title="">关闭</label>
				</div>
			</li>
			<li style="display:none;">
				<label for="rd2">显示方式：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="acdisplayMode" value="d" <? if($data['acdisplayMode']=='d'){echo'checked="checked"';} ?> />
					<label for="r3" title="常规显示">常规</label>
					<input type="radio" id="r4" name="acdisplayMode" value="l" <? if($data['acdisplayMode']=='l'){echo'checked="checked"';} ?> />
					<label for="r4" title="页面左边悬浮显示" style="width:70px;">左悬浮</label>
					<input type="radio" id="r5" name="acdisplayMode" value="r" <? if($data['acdisplayMode']=='r'){echo'checked="checked"';} ?> />
					<label for="r5" title="页面右边悬浮显示" style="width:70px;">右悬浮</label>
				</div>
			</li>
			<li>
				<label for="rd3">内容设置：</label>
				<div id="rd3">
					<input type="radio" id="r6" name="alclinkMode" value="ptlink" <? if($data['alclinkMode']=='ptlink'){echo'checked="checked"';} ?> />
					<label for="r6" title="">图片</label>
					<input type="radio" id="r7" name="alclinkMode" value="gzlink" <? if($data['alclinkMode']=='gzlink'){echo'checked="checked"';} ?> />
					<label for="r7" title="" style="width:100px;">自定义内容</label>
				</div>
			</li>
			<li class="ptlink alclinkMode">
				<label for="i2">背景图片：</label>
				<input id="i2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li class="ptlink alclinkMode">
				<label for="i3">链接地址：</label>
				<input id="i3" class="setinput" type="text" title="" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="ptlink alclinkMode">
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			<li class="gzlink alclinkMode">
				<label for="i4">自定义内容：</label>
				<textarea id="i4" name="customHtml"><?=stripslashes($data['customHtml'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customHtml" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
			<li style="text-align: center;">--------------------------------按钮图片设置--------------------------------</li>
			<li>
				<label for="child0i1">展开图片地址：</label>
				<input id="child0i1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="childConfig[0].showBtnSrc" value="<?=$data['childConfig'][0]['showBtnSrc']?>" />
				<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" checked="checked" />
				<label for="child0autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="child0i2">关闭图片地址：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="childConfig[0].hideBtnSrc" value="<?=$data['childConfig'][0]['hideBtnSrc']?>" />
				<input id="child0autoSize1" class="chkBox" type="checkbox" name="childConfig[0].autoSize1" value="yes" checked="checked" />
				<label for="child0autoSize1" class="chkLabel">自动高宽</label>				
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
</div>
</form>

<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$data['active']?>});
	$("input, .setform > li > div, textarea").buttonset();
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
	$(".alclinkMode").hide();
	"<?=$data['alclinkMode']?>"=="ptlink" && $(".ptlink").show();
	"<?=$data['alclinkMode']?>"=="gzlink" && $(".gzlink").show();
	$("#rd3").children("input[name='alclinkMode']").click(function() {
		var val = $(this).val();
		$(".alclinkMode").hide();
		$("."+val).show();
	});
});
</script>