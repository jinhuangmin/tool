<form id="tForm" form-data="jfb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="i2">按钮背景图片：</label>
						<input id="i2" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="shareSrc" value="<?=$_POST['shareSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="autoSize" class="chkLabel">自动高宽</label>
					</li>

                    <li>
						<label for="imgBgp">背景图片位置：</label>
						<select id="imgBgp" name="imgBgp"><?  $imgBgpDB=str_replace(" ","",$_POST['imgBgp']); ?>
							<option value="50% 50%" <? if($imgBgpDB=='50%50%'){echo'selected="selected"';} ?>>居中</option>
							<option value="50% 0%" <? if($imgBgpDB=='50%0%'){echo'selected="selected"';} ?>>中上</option>
							<option value="50% 100%" <? if($imgBgpDB=='50%100%'){echo'selected="selected"';} ?>>中下</option>
							<option value="0% 0%" <? if($imgBgpDB=='0%0%'){echo'selected="selected"';} ?>>左上</option>
							<option value="0% 50%" <? if($imgBgpDB=='0%50%'){echo'selected="selected"';} ?>>左中</option>
							<option value="0% 100%" <? if($imgBgpDB=='0%100%'){echo'selected="selected"';} ?>>左下</option>
							<option value="100% 0%" <? if($imgBgpDB=='100%0%'){echo'selected="selected"';} ?>>右上</option>
							<option value="100% 50%" <? if($imgBgpDB=='100%50%'){echo'selected="selected"';} ?>>右中</option>
							<option value="100% 100%" <? if($imgBgpDB=='100%100%'){echo'selected="selected"';} ?>>右下</option>
						</select>
					</li>
					<li>
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					<li>
						<label for="i3">分享页面地址：</label>
						<input id="i3" class="setinput" type="text" title="请输入您需要分享的页面地址，比如：某个宝贝的详情页地址；亦或是店铺首页。" junezx_vali_url="true" name="shareUrl" value="<?=$_POST['shareUrl']?>" />
					</li>
					<li>
						<label for="i4">分享标题：</label>
						<input id="i4" class="setinput" type="text" title="分享时显示的分享标题" junezx_vali_str="true" name="shareTitle" value="<?=$_POST['shareTitle']?>" />
					</li>
					<li>
						<label for="i5">默认文案：</label>
						<input id="i5" class="setinput" type="text" title="分享时的分享文字内容" junezx_vali_str="true" name="shareDetail" value="<?=$_POST['shareDetail']?>" />
					</li>
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="ii1">应用宽度：</label>
						<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$_POST['width']?>" />
					</li>
					<li>
						<label for="ii2">应用高度：</label>
						<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$_POST['height']?>" />
					</li>
					<li>
						<label for="ii3">应用上边距：</label>
						<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$_POST['top']?>" />
					</li>
					<li>
						<label for="ii4">应用左边距：</label>
						<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$_POST['left']?>" />
					</li>
				</ul>
			</div>
				
		</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$(".ui-dialog-content input").buttonset();
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