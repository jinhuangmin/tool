<? 
$data=$_POST; 
$appIDArray = explode(',',$data['appIDArray']);
$appNameArray = explode(',',$data['appNameArray']);
$popupPosition=$data['popupPosition'];
 ?>
<form id="tForm" form-data="jpb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">高级设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="hidden" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>

			<li>
				<label for="appIDSelect">选择触点应用ID：</label>
				<select name="appIDSelect" id="appIDSelect">
						<?
                        for($i=0;$i<count($appIDArray);$i++){
							if($data['appIDSelect']==$appIDArray[$i]){$selected='selected="selected"';} else{$selected='';}
							echo'<option value="'.$appIDArray[$i].'" '.$selected.'>'.$appNameArray[$i].'</option>';
							}
						?>	
					</select>
			</li>
			<li>
				<label for="popupPosition">弹出层弹出的位置：</label>
				<select name="popupPosition" id="popupPosition">
                    
                    <optgroup label="对齐点上方">
						<option value="'tl','bl'" <? if($popupPosition=="'tl','bl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
						<option value="'tc','bc'" <? if($popupPosition=="'tc','bc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
						<option value="'tr','br'" <? if($popupPosition=="'tr','br'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
					</optgroup>
					<optgroup label="对齐点右方">
						<option value="'tr','tl'" <? if($popupPosition=="'tr','tl'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
						<option value="'cr','cl'" <? if($popupPosition=="'cr','cl'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
						<option value="'br','bl'" <? if($popupPosition=="'br','bl'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
					</optgroup>
					<optgroup label="对齐点下方">
						<option value="'br','tr'" <? if($popupPosition=="'br','tr'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
						<option value="'bc','tc'" <? if($popupPosition=="'bc','tc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
						<option value="'bl','tl'" <? if($popupPosition=="'bl','tl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
					</optgroup>
					<optgroup label="对齐点左方">
						<option value="'bl','br'" <? if($popupPosition=="'bl','br'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
						<option value="'cl','cr'" <? if($popupPosition=="'cl','cr'"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
						<option value="'tl','tr'" <? if($popupPosition=="'tl','tr'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
					</optgroup>
					
					<optgroup label="对齐点覆盖">
						<option value="'tl','tl'" <? if($popupPosition=="'tl','tl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
						<option value="'tc','tc'" <? if($popupPosition=="'tc','tc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
						<option value="'tr','tr'" <? if($popupPosition=="'tr','tr'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
                        <option value="'cr','cr'" <? if($popupPosition=="'cr','cr'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
						<option value="'br','br'" <? if($popupPosition=="'br','br'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
						<option value="'bc','bc'" <? if($popupPosition=="'bc','bc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
						<option value="'bl','bl'" <? if($popupPosition=="'bl','bl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
                        <option value="'cl','cl'" <? if($popupPosition=="'cl','cl'"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
						<option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="'cc','cc'"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
					</optgroup>
				</select>
			</li>
			<li>
				<label for="iii1">水平偏移：</label>
				<input id="iii1" class="setinput ui-buttonset" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="spaceX" value="<?=$data['spaceX']?>">
			</li>
			<li>
				<label for="iii2">垂直偏移：</label>
				<input id="iii2" class="setinput ui-buttonset" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="spaceY" value="<?=$data['spaceY']?>">
			</li>
			<li>
				<label for="customHtml">弹出层内容：</label>
				<textarea id="customHtml" name="customHtml"><?=stripslashes( $data['customHtml'] )?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customHtml" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
			<li style="display:none;">
				<label for="appIDAlignSelect">选择对齐点应用ID：</label>
				<select name="appIDAlignSelect" id="appIDAlignSelect">
					<?
                        for($i=0;$i<count($appIDArray);$i++){
							if($data['appIDAlignSelect']==$appIDArray[$i]){$selected='selected="selected"';} else{$selected='';}
							echo'<option value="'.$appIDArray[$i].'" '.$selected.'>'.$appNameArray[$i].'</option>';
							}
						?>	
				</select>
			</li>
			<li style="height:340px;line-height:14px;">
				<div style="margin:10px;padding:10px;border:1px dotted #993333;color:#666;width:360px;">
					<p>弹出层位置说明：</p>
					<p>通过对齐弹出层和对齐点8个位置来确定弹出层的位置。</p>
					<p>弹出层和对齐点的8个位置如下图所示</p>
					<p><img src="http://img01.taobaocdn.com/imgextra/i1/39767794/TB2.vn.apXXXXbkXXXXXXXXXXXX_!!39767794.jpg" style="width:347px;"></p>
				</div>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
            <li>
				<label for="css3Mode">弹出特效：</label>
				<select name="css3Mode" id="css3Mode">
                    <option value="" <? if($data['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
					<option value="effect_w" <? if($data['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
					<option value="effect_h" <? if($data['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
					<option value="effect_wh" <? if($data['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
				</select>
			</li>
			<li class="css3Mode">
				<label for="css3Bezier">弹出动画特效：</label>
				<select id="css3Bezier" name="css3Bezier">
					<option value="" <? if($data['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs1" <? if($data['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
					<option value="bs2" <? if($data['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
					<option value="bs3" <? if($data['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
					<option value="bq1" <? if($data['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
					<option value="bq2" <? if($data['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
					<option value="bq3" <? if($data['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
				</select>
			</li>
			<li class="css3Mode">
				<label for="css3Speed">弹出动画速度：</label>
				<select name="css3Speed" id="css3Speed">
					<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($data['css3Speed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					
					?> 
				</select>
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