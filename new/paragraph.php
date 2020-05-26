<?
$data=$_POST;

 //弹出
 $popupConfig = $data['popupConfig'];
 $pSwitch = $popupConfig['pSwitch'];
 $spaceX = $popupConfig['spaceX'];
 $spaceY = $popupConfig['spaceY'];
 $popupHtml = $popupConfig['popupHtml'];
 $popupHtml = stripslashes( $popupHtml );
 $popupPosition = $popupConfig['popupPosition'];
 $active=$data['active'];
?>
<form id="tForm" form-data="jdlb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
		<li><a href="#tabs-4">弹出层设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
            <li style="display:none;">
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="t1">段落内容：</label>
				<textarea id="t1" name="paragraphContent" title="请输入段落内容"><?=$data['paragraphContent']?></textarea>
			</li>
			<li>
				<label for="i6">段落行高：</label>
				<input id="i6" class="setinput" type="text" title="请输入段落行高" name="paragraphLineHeight" value="<?=$data['paragraphLineHeight']?>" />
			</li>
			<li>
				<label for="i7">首字符缩进：</label>
				<input id="i7" class="setinput" type="text" title="请输入首字符缩进" name="paragraphIndent" value="<?=$data['paragraphIndent']?>" />
			</li>
			<li>
				<label for="i3">段落链接：</label>
				<input id="i3" class="setinput" type="text" title="请输入段落链接，留空则为无链接的纯文字段落" name="href" value="<?=$data['href']?>" />
			</li>
			<li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			<li>
				<label for="i4">段落文字大小：</label>
				<input id="i4" class="setinput" type="text" title="请输入段落文字的大小，无需加px；如：12。" name="paragraphSize" value="<?=$data['paragraphSize']?>" />
			</li>
			<li>
				<label for="paragraphWeight">段落文字粗细：</label>
				<select id="paragraphWeight" name="paragraphWeight">
					<option value="normal" <? if($data['paragraphWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['paragraphWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="paragraphFont">段落文字字体：</label>
				<select id="paragraphFont" name="paragraphFont">
					<option value="宋体" <? if($data['paragraphFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['paragraphFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['paragraphFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['paragraphFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['paragraphFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['paragraphFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['paragraphFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['paragraphFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['paragraphFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['paragraphFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['paragraphFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['paragraphFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['paragraphFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['paragraphFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['paragraphFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['paragraphFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="i5">段落文字颜色：</label>
				<input id="i5" class="setinput tColorPicker" type="text" title="" name="paragraphColor" value="<?=$data['paragraphColor']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-3">
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
	<div id="tabs-4">
		<ul class="setform">
			<li>
				<label for="pSwitch">弹出层开关：</label>
				<select id="pSwitch" name="popupConfig.pSwitch">
					<option value="no" <? if($pSwitch=='no'){echo'selected="selected"';} ?>>关闭弹出层</option>
					<option value="yes" <? if($pSwitch=='yes'){echo'selected="selected"';} ?>>鼠标经过弹出层</option>
				</select>
			</li>
			<li>
				<label for="popupPosition">弹出层位置：</label>
				<select id="popupPosition" name="popupConfig.popupPosition">
					<option value="'tr','tl'" <? if($popupPosition=="'tr','tl'"){echo'selected="selected"';} ?>>应用右上角弹出</option>
					<option value="'br','bl'" <? if($popupPosition=="'br','bl'"){echo'selected="selected"';} ?>>应用右下角弹出</option>
					<option value="'tl','tr'" <? if($popupPosition=="'tl','tr'"){echo'selected="selected"';} ?>>应用左上角弹出</option>
					<option value="'bl','br'" <? if($popupPosition=="'bl','br'"){echo'selected="selected"';} ?>>应用左下角弹出</option>
					<option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="'cc','cc'"){echo'selected="selected"';} ?>>应用中心位置弹出</option>
				</select>
			</li>
			<li>
				<label for="iii1">水平偏移：</label>
				<input id="iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="popupConfig.spaceX" value="<?=$spaceX?>" />
			</li>
			<li>
				<label for="iii2">垂直偏移：</label>
				<input id="iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="popupConfig.spaceY" value="<?=$spaceY?>" />
			</li>
			<li>
				<label for="popupHtml">自定义内容：</label>
				<textarea id="popupHtml" name="popupConfig.popupHtml"><?=$popupHtml?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="popupConfig.popupHtml" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$active?>});
	$("input, .setform > li > div").buttonset();
	$("#tForm select").fontselectmenu();
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