<?
$data=$_POST;
$childConfig=$data['childConfig'];
?>
<form id="tForm" form-data="jkgb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">父层设置</a></li>
		<?  foreach($childConfig as $i=>$item){ $k=$i+2;$f=$i+1;  echo'<li><a href="#tabs-'.$k.'">子层'.$f.'</a></li>';  }  ?>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			 <li>
				<label for="oppoEffect">图片切换动画：</label>
				<select id="oppoEffect" name="oppoEffect">
					<option value="none" <? if($data['oppoEffect']=='none'){echo'selected="selected"';} ?>>无动画</option>
					<option value="june-box-fadein" <? if($data['oppoEffect']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>
					<option value="rotation30" <? if($data['oppoEffect']=='rotation30'){echo'selected="selected"';} ?>>旋转30度</option>
					<option value="rotation60" <? if($data['oppoEffect']=='rotation60'){echo'selected="selected"';} ?>>旋转60度</option>
					<option value="rotation90" <? if($data['oppoEffect']=='rotation90'){echo'selected="selected"';} ?>>旋转90度</option>
					<option value="rotation180" <? if($data['oppoEffect']=='rotation180'){echo'selected="selected"';} ?>>旋转180度</option>
					<option value="rotation270" <? if($data['oppoEffect']=='rotation270'){echo'selected="selected"';} ?>>旋转270度</option>
					<option value="rotation360" <? if($data['oppoEffect']=='rotation360'){echo'selected="selected"';} ?>>旋转360度</option>
					<option value="rotation720" <? if($data['oppoEffect']=='rotation720'){echo'selected="selected"';} ?>>旋转720度</option>
				</select>
			</li>
			<li>
				<label for="oppoSpeed">图片切换速度：</label>
				<select id="oppoSpeed" name="oppoSpeed">
					<option value="trans05s" <? if($data['oppoSpeed']=='trans05s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans1s" <? if($data['oppoSpeed']=='trans1s'){echo'selected="selected"';} ?>>中速</option>
					<option value="trans2s" <? if($data['oppoSpeed']=='trans2s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li>
				<label for="ii1">应用宽度：</label>
				<input id="ii1" class="setinput" type="text" title="自动生成，无需填写" name="width" value="<?=$data['width']?>" />
			</li>
			<li>
				<label for="ii2">应用高度：</label>
				<input id="ii2" class="setinput" type="text" title="自动生成，无需填写" name="height" value="<?=$data['height']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="自动生成，无需填写" name="top" value="<?=$data['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="自动生成，无需填写" name="left" value="<?=$data['left']?>" />
			</li>
		</ul>
	</div>
	 <?  foreach($childConfig as $i=>$item){ $k=$i+2;$f=$i+1;  ?>	
        <div id="tabs-<?=$k?>">
		<ul class="setform mongoliaModeUl">
			<input id="child<?=$i?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$item['attachID']?>" />
			<li>
				<label for="child<?=$i?>rd2">内容类型：</label>
				<div id="child<?=$i?>rd2" class="contentModeDiv">
					<input type="radio" id="child<?=$i?>r3" name="childConfig[<?=$i?>].contentMode" value="imgContent" <? if($item['contentMode']=='imgContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>r3" title="">图片</label>
					<input type="radio" id="child<?=$i?>r4" name="childConfig[<?=$i?>].contentMode" value="customContent" <? if($item['contentMode']=='customContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>r4" title="" style="width:100px;">自定义内容</label>
				</div>
			</li>
			<li class="imgContent contentMode">
				<label for="child<?=$i?>i1">背景图片：</label>
				<input id="child<?=$i?>i1" class="setinput " type="text" title="" name="childConfig[<?=$i?>].pSrc" value="<?=$item['pSrc']?>" />
				<input id="child<?=$i?>autoSize" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].autoSize" value="yes" <? if($item['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child<?=$i?>autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li class="imgContent contentMode">
				<label for="child<?=$i?>i3">变换图片：</label>
				<input id="child<?=$i?>i3" class="setinput " type="text" title="" name="childConfig[<?=$i?>].oppoSrc" value="<?=$item['oppoSrc']?>" />
			</li>
			<li style="display:none;">
				<label for="child<?=$i?>_imgBgp">图片位置：</label>
				<select id="child<?=$i?>_imgBgp" name="childConfig[<?=$i?>].imgBgp">
					<option value="50% 50%" <? if($item['imgBgp']=='50% 50%'){echo'selected="selected"';} ?>>居中</option>
					<option value="50% 0%" <? if($item['imgBgp']=='50% 0%'){echo'selected="selected"';} ?>>中上</option>
					<option value="50% 100%" <? if($item['imgBgp']=='50% 100%'){echo'selected="selected"';} ?>>中下</option>
					<option value="0% 0%" <? if($item['imgBgp']=='0% 0%'){echo'selected="selected"';} ?>>左上</option>
					<option value="0% 50%" <? if($item['imgBgp']=='0% 50%'){echo'selected="selected"';} ?>>左中</option>
					<option value="0% 100%" <? if($item['imgBgp']=='0% 100%'){echo'selected="selected"';} ?>>左下</option>
					<option value="100% 0%" <? if($item['imgBgp']=='100% 0%'){echo'selected="selected"';} ?>>右上</option>
					<option value="100% 50%" <? if($item['imgBgp']=='100% 50%'){echo'selected="selected"';} ?>>右中</option>
					<option value="100% 100%" <? if($item['imgBgp']=='100% 100%'){echo'selected="selected"';} ?>>右下</option>
				</select>
			</li>
			<li style="display:none;">
				<label for="child<?=$i?>bg_i1">背景颜色：</label>
				<input id="child<?=$i?>bg_i1" class="setinput tColorPicker" type="text" title="" name="childConfig[<?=$i?>].bgColor" value="<?=$item['bgColor']?>" />
			</li>
			<li class="imgContent contentMode">
				<label for="child<?=$i?>i2">链接地址：</label>
				<input id="child<?=$i?>i2" class="setinput" type="text" title="" name="childConfig[<?=$i?>].href" value="<?=$item['href']?>" />
			</li>
			<li class="imgContent contentMode">
				<label for="child<?=$i?>hrefMode">打开方式：</label>
				<select id="child<?=$i?>hrefMode" name="childConfig[<?=$i?>].hrefMode">
					<option value="_self" <? if($item['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($item['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			<li class="customContent contentMode">
				<label for="child<?=$i?>customContent">自定义内容：</label>
				<textarea id="child<?=$i?>customContent" name="childConfig[<?=$i?>].customContent"><?=stripslashes( $item['customContent'] )?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].customContent" data-zdyAppID="<?=$data['appID']?>" data-zdyAttachID="<?=$item['attachID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
			<li>
				<label for="child<?=$i?>rd1">蒙层类型：</label>
				<div id="child<?=$i?>rd1" class="mongoliaModeDiv">
					<input type="radio" id="child<?=$i?>r1" name="childConfig[<?=$i?>].mongoliaMode" value="color" <? if($item['mongoliaMode']=='color'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>r1" title="蒙层为纯色">颜色</label>
					<input type="radio" id="child<?=$i?>r2" name="childConfig[<?=$i?>].mongoliaMode" value="img" <? if($item['mongoliaMode']=='img'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>r2" title="蒙层为图片，自动平铺，推荐半透明图片或gif动图">图片</label>
				</div>
			</li>
			<li class="color mongoliaMode">
				<label for="child<?=$i?>i4">蒙层颜色：</label>
				<input id="child<?=$i?>i4" class="setinput tColorPicker" type="text" title="" name="childConfig[<?=$i?>].mongoliaColor" value="<?=$item['mongoliaColor']?>" />
			</li>
			<li class="img mongoliaMode">
				<label for="child<?=$i?>is4">蒙层图片：</label>
				<input id="child<?=$i?>is4" class="setinput " type="text" title="" name="childConfig[<?=$i?>].mongoliaSrc" value="<?=$item['mongoliaSrc']?>" />
			</li>
        </ul>
        <div id="mymenu">
           <ul class="setform"><li class="setshousuo">---------------------- 弹出层设置 展开/收起 (懒人无视) --------------------</li><ul>
           <ul class="setform setform2">   
			<li>
				<label for="child<?=$i?>pSwitch">弹出层开关：</label>
				<select id="child<?=$i?>pSwitch" name="childConfig[<?=$i?>].popupConfig.pSwitch">
					<option value="no" <? if($item['popupConfig']['pSwitch']=='no'){echo'selected="selected"';} ?>>关闭弹出层</option>
					<option value="yes" <? if($item['popupConfig']['pSwitch']=='yes'){echo'selected="selected"';} ?>>鼠标经过弹出层</option>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>popupPosition">弹出层位置：</label>
				<select id="child<?=$i?>popupPosition" name="childConfig[<?=$i?>].popupConfig.popupPosition">
					<optgroup label="对齐点上方">
						<option value="'tl','bl'" <? if($item['popupConfig']['popupPosition']=="'tl','bl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
						<option value="'tc','bc'" <? if($item['popupConfig']['popupPosition']=="'tc','bc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
						<option value="'tr','br'" <? if($item['popupConfig']['popupPosition']=="'tr','br'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
					</optgroup>
					<optgroup label="对齐点右方">
						<option value="'tr','tl'" <? if($item['popupConfig']['popupPosition']=="'tr','tl'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
						<option value="'cr','cl'" <? if($item['popupConfig']['popupPosition']=="'cr','cl'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
						<option value="'br','bl'" <? if($item['popupConfig']['popupPosition']=="'br','bl'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
					</optgroup>
					<optgroup label="对齐点下方">
						<option value="'br','tr'" <? if($item['popupConfig']['popupPosition']=="'br','tr'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
						<option value="'bc','tc'" <? if($item['popupConfig']['popupPosition']=="'bc','tc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
						<option value="'bl','tl'" <? if($item['popupConfig']['popupPosition']=="'bl','tl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
					</optgroup>
					<optgroup label="对齐点左方">
						<option value="'bl','br'" <? if($item['popupConfig']['popupPosition']=="'bl','br'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
						<option value="'cl','cr'" <? if($item['popupConfig']['popupPosition']=="'cl','cr'"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
						<option value="'tl','tr'" <? if($item['popupConfig']['popupPosition']=="'tl','tr'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
					</optgroup>
					<optgroup label="对齐点覆盖">
						<option value="'tl','tl'" <? if($item['popupConfig']['popupPosition']=="'tl','tl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
						<option value="'tc','tc'" <? if($item['popupConfig']['popupPosition']=="'tc','tc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
						<option value="'tr','tr'" <? if($item['popupConfig']['popupPosition']=="'tr','tr'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
                        <option value="'cr','cr'" <? if($item['popupConfig']['popupPosition']=="'cr','cr'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
						<option value="'br','br'" <? if($item['popupConfig']['popupPosition']=="'br','br'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
						<option value="'bc','bc'" <? if($item['popupConfig']['popupPosition']=="'bc','bc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
						<option value="'bl','bl'" <? if($item['popupConfig']['popupPosition']=="'bl','bl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
                        <option value="'cl','cl'" <? if($item['popupConfig']['popupPosition']=="'cl','cl'"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
						<option value="'cc','cc'" style="color:#f00" <? if($item['popupConfig']['popupPosition']=="'cc','cc'"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
					</optgroup>					
				</select>
			</li>
			<li>
				<label for="child<?=$i?>iii1">水平偏移：</label>
				<input id="child<?=$i?>iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="childConfig[<?=$i?>].popupConfig.spaceX" value="<?=$item['popupConfig']['spaceX']?>" />
			</li>
			<li>
				<label for="child<?=$i?>iii2">垂直偏移：</label>
				<input id="child<?=$i?>iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="childConfig[<?=$i?>].popupConfig.spaceY" value="<?=$item['popupConfig']['spaceY']?>" />
			</li>
			<li>
				<label for="child<?=$i?>popupHtml">自定义内容：</label>
				<textarea id="child<?=$i?>popupHtml" name="childConfig[<?=$i?>].popupConfig.popupHtml"><?=stripslashes( $item['popupConfig']['popupHtml'] )?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].popupConfig.popupHtml" data-zdyAppID="<?=$data['appID']?>" data-zdyAttachID="<?=$item['attachID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
			<li>
				<label for="child<?=$i?>popupCss3Mode">弹出特效：</label>
				<select id="child<?=$i?>popupCss3Mode" name="childConfig[<?=$i?>].popupConfig.css3Mode">
					<option value="" <? if($item['popupConfig']['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
					<option value="effect_w" <? if($item['popupConfig']['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
					<option value="effect_h" <? if($item['popupConfig']['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
					<option value="effect_wh" <? if($item['popupConfig']['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
				</select>
			</li>
			<li class="child<?=$i?>popupCss3Mode">
				<label for="child<?=$i?>popupCss3Bezier">弹出动画特效：</label>
				<select id="child<?=$i?>popupCss3Bezier" name="childConfig[<?=$i?>].popupConfig.css3Bezier">
					<option value="" <? if($item['popupConfig']['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs1" <? if($item['popupConfig']['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
					<option value="bs2" <? if($item['popupConfig']['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
					<option value="bs3" <? if($item['popupConfig']['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
					<option value="bq1" <? if($item['popupConfig']['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
					<option value="bq2" <? if($item['popupConfig']['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
					<option value="bq3" <? if($item['popupConfig']['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
				</select>
			</li>
			<li class="child<?=$i?>popupCss3Mode">
				<label for="child<?=$i?>popupCss3Speed">弹出动画速度：</label>
				<select id="child<?=$i?>popupCss3Speed" name="childConfig[<?=$i?>].popupConfig.css3Speed">
					<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($item['popupConfig']['css3Speed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					
					?>  
					</select>
			</li>
		</ul>
		</div>
	</div>
    <? } ?>
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
	
	
	$(".mongoliaMode").hide();
	$(".mongoliaModeUl").each(function() {
		var _t = $(this), val = _t.find(".mongoliaModeDiv input:checked").val();
		$("."+val, _t).show();
	});
	$(".mongoliaModeDiv").children("input").click(function() {
		var val = $(this).val(), parent = $(this).parent().parent().parent();
		$(".mongoliaMode", parent).hide();
		$("."+val, parent).show();
	});
	
	$(".contentMode").hide();
	$(".mongoliaModeUl").each(function() {
		var _t = $(this), val = _t.find(".contentModeDiv input:checked").val();
		$("."+val, _t).show();
	});
	$(".contentModeDiv").children("input").click(function() {
		var val = $(this).val(), parent = $(this).parent().parent().parent();
		$(".contentMode", parent).hide();
		$("."+val, parent).show();
	});
	
});
</script>
<script type="text/javascript">
   $(document).ready(function()
   {
    $("#mymenu ul li").next("ul").hide();
    $("#mymenu ul li").click(function()
    {
     $(this).next("ul").toggle();
    });
   });
</script> 