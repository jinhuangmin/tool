<?

$childConfig = $_POST['childConfig'];
 $anchorNamx = $_POST['anchorName'];
 $anchorName = explode(',',$anchorNamx);
 if($_POST['active']==-1){$active=1;}else{$active=$_POST['active'];}

?>
<form id="tForm" form-data="jbob" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
         <?
         foreach($childConfig as $t=>$num){ 
				$y=$t+2;
			echo'<li class="hasdelete"><a href="#tabs-'.$y.'">'.$num['appName'].'</a><span class="deletetab" data-tabs="tabs-'.$y.'"><icon>ꕡ</icon></span></li>';
				}
			?>
        <li id="addNewSlices" class="ui-state-default ui-corner-top addnewtab" title="添加一个新的切片"><icon>ꕙ</icon></li>
		<li style="display:none;"><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="jdhi_src">默认显示图片：</label>
						<input id="jdhi_src" class="setinput" type="text" title="默认显示的图片。请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="autoSize" class="chkLabel">自动高宽</label>
                        <div class="tPicUploadBtn" data-target="otherset-clicked" data-oths="uploadpic;pSrc" style="display:none;">选择</div>
                    </li>
					<li>
						<label for="i3">鼠标经过图片：</label>
						<input id="i3" class="setinput" type="text" title="鼠标经过时的变换图片，留空则为无切换效果的单图。请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="oppoSrc" value="<?=$_POST['oppoSrc']?>" />
                        <div class="tPicUploadBtn" style="top:0;display:none;" data-target="otherset-clicked" data-oths="uploadpic;oppoSrc">选择</div>
                    </li>
 <?
$bgp=$_POST['imgBgp'];
if($bgp=='50% 50%'){$bgptxt='居中';}
else if($bgp=='0 0'){$bgptxt='左上';}
else if($bgp=='0 50%'){$bgptxt='左中';}
else if($bgp=='0 100%'){$bgptxt='左下';}
else if($bgp=='50% 0'){$bgptxt='中上';}
else if($bgp=='50% 50%'){$bgptxt='居中';}
else if($bgp=='50% 100%'){$bgptxt='中下';}
else if($bgp=='100% 0%'){$bgptxt='右上';}
else if($bgp=='100% 50%'){$bgptxt='右中';}
else if($bgp=='100% 100%'){$bgptxt='右下';}
else{$bgptxt='自定义';}
?>
					<li style="display:none;">
						<label>背景图片对齐位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
					</li>
					<li style="display:none;">
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					<li style="display:none;">
						<label for="ii1">应用宽度：</label>
						<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$_POST['width']?>" />
					</li>
					<li style="display:none;">
						<label for="ii2">应用高度：</label>
						<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$_POST['height']?>" />
					</li>
					<li style="display:none;">
						<label for="ii3">应用上边距：</label>
						<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$_POST['top']?>" />
					</li>
					<li style="display:none;">
						<label for="ii4">应用左边距：</label>
						<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$_POST['left']?>" />
					</li>
					<li>
						<label for="oppoEffect">淡入淡出开关：</label>
						<select id="oppoEffect" name="oppoEffect">
							<option value="none" <?=$_POST['oppoEffect']=='none'?'selected="selected"':'' ?>>关</option>
							<option value="june-box-fadein" <?=$_POST['oppoEffect']=='june-box-fadein'?'selected="selected"':'' ?>>开</option>
						</select>
					</li>
					<li>
						<label for="oppoSpeed">切换图片速度：</label>
						<select id="oppoSpeed" name="oppoSpeed">
							<option value="" >立即显示</option>
							<option value="trans01s" <?=$_POST['oppoSpeed']=='trans01s'?'selected="selected"':'' ?>>0.1秒</option>
							<option value="trans02s" <?=$_POST['oppoSpeed']=='trans02s'?'selected="selected"':'' ?>>0.2秒</option>
							<option value="trans05s" <?=$_POST['oppoSpeed']=='trans05s'?'selected="selected"':'' ?>>0.5秒</option>
							<option value="trans1s" <?=$_POST['oppoSpeed']=='trans1s'?'selected="selected"':'' ?>>1秒</option>
							<option value="trans2s" <?=$_POST['oppoSpeed']=='trans2s'?'selected="selected"':'' ?>>2秒</option>
							<option value="trans3s" <?=$_POST['oppoSpeed']=='trans3s'?'selected="selected"':'' ?>>3秒</option>
							<option value="trans4s" <?=$_POST['oppoSpeed']=='trans4s'?'selected="selected"':'' ?>>4秒</option>
							<option value="trans5s" <?=$_POST['oppoSpeed']=='trans5s'?'selected="selected"':'' ?>>5秒</option>
						</select>
					</li>
				</ul>
			</div>
			
       <?  foreach($childConfig as $i=>$item){ $dbt=$i+2;$noum=$i+1; ?>        
              
            
            <div id="tabs-<?=$dbt?>">
				<ul class="setform popupCss3Ul">
					<input id="child<?=$i?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$item['attachID']?>" />
					<li>
						<label for="child<?=$i?>rda">切片<?=$noum?>链接类型：</label>
						<div id="child<?=$i?>rda" class="linkModeDiv">
							<input type="radio" id="child<?=$i?>ra" name="childConfig[<?=$i?>].linkMode" value="ptlink" <? if($item['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>ra" title="">普通</label>
							<input type="radio" id="child<?=$i?>rc" name="childConfig[<?=$i?>].linkMode" value="wwlink" <? if($item['linkMode']=='wwlink'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rc" title="">旺旺</label>
							<input type="radio" id="child<?=$i?>rd" name="childConfig[<?=$i?>].linkMode" value="mdlink" <? if($item['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rd" title="" style="display: none;">锚点</label>
							<input type="radio" id="child<?=$i?>gr1" name="childConfig[<?=$i?>].linkMode" value="gwlink" <? if($item['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>gr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>
						</div>
					</li>
					<li class="ptlink gwlink linkMode">
						<label for="child<?=$i?>i1">链接地址：</label>
						<input id="child<?=$i?>i1" class="setinput" type="text" title="请输入图片的链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="childConfig[<?=$i?>].href" value="<?=$item['href']?>" />
						<input id="child<?=$i?>hrefMode" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].hrefMode" value="_blank" <? if($item['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
						<label for="child<?=$i?>hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					
					<li class="wwlink linkMode">
						<label for="child<?=$i?>i3">旺旺ID：</label>
						<input id="child<?=$i?>i3" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="childConfig[<?=$i?>].wangID" value="<?=$item['wangID']?>" />
					</li>
					<li class="wwlink linkMode">
						<label for="child<?=$i?>shuntMode">分流方式：</label>
						<select id="child<?=$i?>shuntMode" name="childConfig[<?=$i?>].shuntMode">
							<option value="no" <? if($item['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
							<option value="yes" <? if($item['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
						</select>
					</li>
					
					<li class="mdlink linkMode">
						<label for="child<?=$i?>anchorSelect">点击后跳转至：</label>
						<select id="child<?=$i?>anchorSelect" name="childConfig[<?=$i?>].anchorSelect">
                            <?
					$anchorSelect=$item['anchorSelect'];
					if($anchorNamx==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					if($anchorSelect){echo'<option value="'.$anchorSelect.'" > 锚点：'.$anchorSelect.'</option>';}
					foreach($anchorName as $itemx){
                       if($itemx==$anchorSelect){}else{echo'<option value="'.$itemx.'" > 锚点：'.$itemx.'</option>';}					
						}}
					?>
						</select>
					</li>
					<li style="display:none;">
						<label for="child<?=$i?>tt_i1">提示文字：</label>
						<input id="child<?=$i?>tt_i1" class="setinput" type="text" title="鼠标经过切片时的提示文字" junezx_vali_str="true" name="childConfig[<?=$i?>].tipText" value="<?=$item['tipText']?>" />
					</li>
<?  $ttcc=$item['popupConfig'];?>
                    <li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">弹出层设置</span><em></em></li>
					<li>
	<label for="child<?=$i?>pSwitch">弹出层开关：</label>
	<div id="child<?=$i?>pSwitch">
		<input type="radio" id="child<?=$i?>pSwitch_1" name="childConfig[<?=$i?>].popupConfig.pSwitch" value="yes" <? if($ttcc['pSwitch']=='yes'){echo'checked="checked"';} ?> />
		<label for="child<?=$i?>pSwitch_1" title="开启鼠标经过弹出层">开启</label>
		<input type="radio" id="child<?=$i?>pSwitch_2" name="childConfig[<?=$i?>].popupConfig.pSwitch" value="no" <? if($ttcc['pSwitch']=='no'){echo'checked="checked"';} ?>>
		<label for="child<?=$i?>pSwitch_2" title="关闭鼠标经过弹出层">关闭</label>
	</div>
</li>
<li class="forclicktogglejs" style="display:none;">
	<label for="child<?=$i?>pTriggerType">触发方式：</label>
	<div id="child<?=$i?>pTriggerType">
		<input type="radio" id="child<?=$i?>pTriggerType_1" name="childConfig[<?=$i?>].popupConfig.pTriggerType" value="mouse" <? if($ttcc['pTriggerType']!=='click'){echo'checked="checked"';} ?> />
		<label for="child<?=$i?>pTriggerType_1" title="鼠标经过触点后触发弹出层">鼠标经过</label>
		<input type="radio" id="child<?=$i?>pTriggerType_2" name="childConfig[<?=$i?>].popupConfig.pTriggerType" value="click" <? if($ttcc['pTriggerType']=='click'){echo'checked="checked"';} ?>>
		<label for="child<?=$i?>pTriggerType_2" title="鼠标点击触点后触发弹出层">鼠标点击<i class="popsd"></i></label>
	</div>
</li>
<li class="triggerTypeClick" style="display:none;">
	<label for="child<?=$i?>pClickToggle">点击类型：</label>
	<div id="child<?=$i?>pClickToggle">
		<input type="radio" id="child<?=$i?>pClickToggle_2" name="childConfig[<?=$i?>].popupConfig.pClickToggle" value="yes" <? if($ttcc['pClickToggle']!=='no'){echo'checked="checked"';} ?>>
		<label for="child<?=$i?>pClickToggle_2" title="触发之后弹出和关闭交替执行">弹出/关闭</label>
		<input type="radio" id="child<?=$i?>pClickToggle_1" name="childConfig[<?=$i?>].popupConfig.pClickToggle" value="no" <? if($ttcc['pClickToggle']=='no'){echo'checked="checked"';} ?> />
		<label for="child<?=$i?>pClickToggle_1" title="触发之后只弹出一次">弹出后不消失</label>
	</div>
</li>
<li class="forpaligntypejs">
	<label for="child<?=$i?>pAlignType">弹出层对齐方式：</label>
	<div id="child<?=$i?>pAlignType">
		<input type="radio" id="child<?=$i?>pAlignType_1" name="childConfig[<?=$i?>].popupConfig.pAlignType" value="yes" <? if($ttcc['pAlignType']!=='no'){echo'checked="checked"';} ?> />
		<label for="child<?=$i?>pAlignType_1" title="选择应用方位和输入偏移量">对齐应用</label>
		<input type="radio" id="child<?=$i?>pAlignType_2" name="childConfig[<?=$i?>].popupConfig.pAlignType" value="no" <? if($ttcc['pAlignType']=='no'){echo'checked="checked"';} ?>>
		<label for="child<?=$i?>pAlignType_2" title="手动使用鼠标拖拽">手动定位<i class="popsd"></i></label>
	</div>
</li>
<li class="" style="display:none;">
	<label for="child<?=$i?>alignID">选择对齐点应用：</label>
	<select id="child<?=$i?>alignID" name="childConfig[<?=$i?>].popupConfig.alignID">
			<?
		$appIDArray = explode(',',$_POST['appIDArray']);
		$appNameArray = explode(',',$_POST['appNameArray']);
		foreach($appIDArray as $k=>$it){ $slct=$ttcc['popupConfig']['alignID']?$ttcc['popupConfig']['alignID']:$_POST['appID'];
		   if($it==$slct){$ssed='selected="selected"';}else{$ssed='';}	
		   echo'<option value="'.$it.'" '.$ssed.'>'.$appNameArray[$k].'</option>';				
			}
		?>
		</select>
</li>
<? $popupPosition0=stripslashes( $ttcc['popupPosition'] );$popupPosition1=str_replace(",","",$popupPosition0);$popupPosition=str_replace("'","",$popupPosition1);?> 
<li class="pAlignTypeYes">
	<label for="child<?=$i?>popupPosition">弹出层位置：</label>
	<select id="child<?=$i?>popupPosition" name="childConfig[<?=$i?>].popupConfig.popupPosition">
		<optgroup label="对齐点上方">
            <option value="'tl','bl'" <? if($popupPosition=="tlbl"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
            <option value="'tc','bc'" <? if($popupPosition=="tcbc"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
            <option value="'tr','br'" <? if($popupPosition=="trbr"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
        </optgroup>
        <optgroup label="对齐点右方">
            <option value="'tr','tl'" <? if($popupPosition=="trtl"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
            <option value="'cr','cl'" <? if($popupPosition=="crcl"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
            <option value="'br','bl'" <? if($popupPosition=="brbl"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
        </optgroup>
        <optgroup label="对齐点下方">
            <option value="'br','tr'" <? if($popupPosition=="brtr"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
            <option value="'bc','tc'" <? if($popupPosition=="bctc"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
            <option value="'bl','tl'" <? if($popupPosition=="bltl"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
        </optgroup>
        <optgroup label="对齐点左方">
            <option value="'bl','br'" <? if($popupPosition=="blbr"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
            <option value="'cl','cr'" <? if($popupPosition=="clcr"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
            <option value="'tl','tr'" <? if($popupPosition=="tltr"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
        </optgroup>
        <optgroup label="对齐点覆盖">
            <option value="'tl','tl'" <? if($popupPosition=="tltl"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
            <option value="'tc','tc'" <? if($popupPosition=="tctc"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
            <option value="'tr','tr'" <? if($popupPosition=="trtr"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
            <option value="'cr','cr'" <? if($popupPosition=="crcr"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
            <option value="'br','br'" <? if($popupPosition=="brbr"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
            <option value="'bc','bc'" <? if($popupPosition=="bcbc"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
            <option value="'bl','bl'" <? if($popupPosition=="blbl"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
            <option value="'cl','cl'" <? if($popupPosition=="clcl"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
            <option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="cccc"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
        </optgroup>
	</select>
</li>
<li class="pAlignTypeNo">
	<label for="positionButton">手动定位：</label>
	<label id="positionButton" class="btnLabel jDragHandlePopup" data-ids="<?=$item['attachID']?>,child<?=$i?>iii1,child<?=$i?>iii2,child<?=$i?>popupHtml,child<?=$i?>alignID,child<?=$i?>popupPosition" data-isa="yes">点击设置</label>
</li>
<li>
	<label for="child<?=$i?>iii1">水平偏移：</label>
	<input id="child<?=$i?>iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="childConfig[<?=$i?>].popupConfig.spaceX" value="<?=$ttcc['spaceX']?>" />
</li>
<li>
	<label for="child<?=$i?>iii2">垂直偏移：</label>
	<input id="child<?=$i?>iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="childConfig[<?=$i?>].popupConfig.spaceY" value="<?=$ttcc['spaceY']?>" />
</li>
<li>
	<label for="child<?=$i?>popupHtml">自定义内容：</label>
	<textarea id="child<?=$i?>popupHtml" name="childConfig[<?=$i?>].popupConfig.popupHtml"><?=stripslashes( $ttcc['popupHtml'] )?></textarea>
	<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].popupConfig.popupHtml" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$item['attachID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
</li>
<li>
	<label for="child<?=$i?>popupCss3Mode">弹出特效：</label>
	<select class="popslem" id="child<?=$i?>popupCss3Mode" name="childConfig[<?=$i?>].popupConfig.css3Mode">
		<option value="" selected="selected">无效果</option>
		<option value="effect_w" <? if($ttcc['css3Mode']=='effect_w'){echo'selected="selected"';} ?>>横向展开</option>
		<option value="effect_h" <? if($ttcc['css3Mode']=='effect_h'){echo'selected="selected"';} ?>>纵向展开</option>
		<option value="effect_wh" <? if($ttcc['css3Mode']=='effect_wh'){echo'selected="selected"';} ?>>斜向展开</option>
	</select>
</li>
<li class="child<?=$i?>popupCss3Mode">
	<label for="child<?=$i?>popupCss3Bezier">弹出动画特效：</label>
	<select id="child<?=$i?>popupCss3Bezier" name="childConfig[<?=$i?>].popupConfig.css3Bezier">
		<option value="" <? if($ttcc['css3Bezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
		<option value="bs1" <? if($ttcc['css3Bezier']=='bs1'){echo'selected="selected"';} ?>>由慢到快（弱）</option>
		<option value="bs2" <? if($ttcc['css3Bezier']=='bs2'){echo'selected="selected"';} ?>>由慢到快（中）</option>
		<option value="bs3" <? if($ttcc['css3Bezier']=='bs3'){echo'selected="selected"';} ?>>由慢到快（强）</option>
		<option value="bq1" <? if($ttcc['css3Bezier']=='bq1'){echo'selected="selected"';} ?>>由快到慢（弱）</option>
		<option value="bq2" <? if($ttcc['css3Bezier']=='bq2'){echo'selected="selected"';} ?>>由快到慢（中）</option>
		<option value="bq3" <? if($ttcc['css3Bezier']=='bq3'){echo'selected="selected"';} ?>>由快到慢（强）</option>
	</select>
</li>
<li class="child<?=$i?>popupCss3Mode">
	<label for="child<?=$i?>popupCss3Speed">弹出动画速度：</label>
	<select id="child<?=$i?>popupCss3Speed" name="childConfig[<?=$i?>].popupConfig.css3Speed">
		<?
			for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
				if($ttcc['css3Speed']==$sx){$sel='selected';}else{$sel='';}
			echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
				}
			
			?>	
		</select>
</li><li class="inputAccording-end"></li>
	</ul>
</div>
			
    
         <? } ?>    
            
            

            
            <div id="tabs-99">
				<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="324" src="" type="application/x-shockwave-flash" wmode="opaque">
				</embed>
				<a class="june-preview" style="display:block;margin:5px auto;text-align:center;" href="" target="_blank">新窗口全屏观看</a>
			</div>
		</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$active?>});
	$("#tForm select").selectmenu();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$(".linkMode").hide();	
	<? foreach($childConfig as $x=>$list){ $p=$x+2;$kg=$x+1; ?>
	  $("#tabs-<?=$p?>").find("li.<?=$list['linkMode']?>").show();
		"<?=$list['popupConfig']['pAlignType']?>" == "yes" ? ( $("#tabs-<?=$p?>").find(".pAlignTypeYes").show(),$("#tabs-<?=$p?>").find(".pAlignTypeNo").hide() ) :( $("#tabs-<?=$p?>").find(".pAlignTypeYes").hide(),$("#tabs-<?=$p?>").find(".pAlignTypeNo").show() );
		"<?=$list['popupConfig']['pTriggerType']?>" == "click" ? $("#tabs-<?=$p?>").find(".triggerTypeClick").show() : $("#tabs-<?=$p?>").find(".triggerTypeClick").hide();
	<?	}	?>  

		$("#tabs").off("change.alignType").on("change.alignType", ".forpaligntypejs input", function() {
		var val = $(this).val(), ul = $(this).parent().parent().parent();
		if(val == "yes") {
			ul.find(".pAlignTypeYes").show();
			ul.find(".pAlignTypeNo").hide();
		} else {
			ul.find(".pAlignTypeYes").hide();
			ul.find(".pAlignTypeNo").show();
		}
	});
	$("#tabs").off("change.triggerType").on("change.triggerType", ".forclicktogglejs input", function() {
		var val = $(this).val(), ul = $(this).parent().parent().parent();
		if(val == "click") {
			ul.find(".triggerTypeClick").show();
		} else {
			ul.find(".triggerTypeClick").hide();
		}
	});
	
	$("#tabs").on("click.itr", ".linkModeDiv input[type='radio']", function(event) {
		var _t = $(this),
		val = _t.val();
		ul = _t.parent().parent().parent();
		ul.children("li.linkMode").hide();
		ul.children("li."+val).show();
		var labelName = ul.children("li."+val).children("label").html();
		if(val == "gwlink") {
			ul.children("li."+val).children("label").first().html(labelName.replace(/链接/g, "宝贝"));
		} else {
			ul.children("li."+val).children("label").first().html(labelName.replace(/宝贝/g, "链接"));
		}
	});
	var tabs = $("#tabs"), npc = (<?=$kg?> - 1), ntc = npc;
	$("#addNewSlices").off("click.addtab").on("click.addtab", function() {
		var newContent = "", newAttachID = setAttachIDForPhp();
		npc++;ntc++;
		newContent = '<div id="tabs-'+(npc+2)+'">'+
			'<ul class="setform popupCss3Ul">'+
			'	<input id="child'+npc+'h1" class="setinput" type="hidden" title="" name="childConfig['+npc+'].attachID" value="'+newAttachID+'" />'+
			'	<li>'+
			'		<label for="child'+npc+'rda">链接类型：</label>'+
			'		<div id="child'+npc+'rda" class="linkModeDiv">'+
			'			<input type="radio" id="child'+npc+'ra" name="childConfig['+npc+'].linkMode" value="ptlink" checked="checked"/>'+
			'			<label for="child'+npc+'ra" title="">普通</label>'+
			'			<input type="radio" id="child'+npc+'rc" name="childConfig['+npc+'].linkMode" value="wwlink" />'+
			'			<label for="child'+npc+'rc" title="">旺旺</label>'+
			'			<input type="radio" id="child'+npc+'rd" name="childConfig['+npc+'].linkMode" value="mdlink" />'+
			'			<label for="child'+npc+'rd" title="">锚点</label>'+
			'			<input type="radio" id="child'+npc+'gr1" name="childConfig['+npc+'].linkMode" value="gwlink" />'+
			'			<label for="child'+npc+'gr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>'+
			'		</div>'+
			'	</li>'+
			'	<li class="ptlink gwlink linkMode">'+
			'		<label for="child'+npc+'i1">链接地址：</label>'+
			'		<input id="child'+npc+'i1" class="setinput" type="text" title="请输入图片的链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="childConfig['+npc+'].href"/>'+
			'		<input id="child'+npc+'hrefMode" class="chkBox" type="checkbox" name="childConfig['+npc+'].hrefMode" value="_blank" checked="checked" />'+
			'		<label for="child'+npc+'hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>'+
			'	</li>'+
			'	<li class="wwlink linkMode">'+
			'		<label for="child'+npc+'i3">旺旺ID：</label>'+
			'		<input id="child'+npc+'i3" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="childConfig['+npc+'].wangID" />'+
			'	</li>'+
			'	<li class="wwlink linkMode">'+
			'		<label for="child'+npc+'shuntMode">分流方式：</label>'+
			'		<select id="child'+npc+'shuntMode" name="childConfig['+npc+'].shuntMode">'+
			'			<option value="no" selected="selected">不分流</option>'+
			'			<option value="yes">分流</option>'+
			'		</select>'+
			'	</li>'+
			'	<li class="mdlink linkMode">'+
			'		<label for="child'+npc+'anchorSelect">点击后跳转至：</label>'+
			'		<select id="child'+npc+'anchorSelect" name="childConfig['+npc+'].anchorSelect">'+
											'<option value="">请在左侧应用面版中至少添加一个锚点</option>'+
								'		</select>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'tt_i1">提示文字：</label>'+
			'		<input id="child'+npc+'tt_i1" class="setinput" type="text" title="鼠标经过切片时的提示文字" junezx_vali_str="true" name="childConfig['+npc+'].tipText" />'+
			'	</li>'+
			'	<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">弹出层设置</span><em></em></li>'+
			'	<li>'+
			'		<label for="child'+npc+'pSwitch">弹出层开关：</label>'+
			'		<div id="child'+npc+'pSwitch">'+
			'			<input type="radio" id="child'+npc+'pSwitch_1" name="childConfig['+npc+'].popupConfig.pSwitch" value="yes" />'+
			'			<label for="child'+npc+'pSwitch_1" title="开启鼠标经过弹出层">开启</label>'+
			'			<input type="radio" id="child'+npc+'pSwitch_2" name="childConfig['+npc+'].popupConfig.pSwitch" value="no" checked="checked">'+
			'			<label for="child'+npc+'pSwitch_2" title="关闭鼠标经过弹出层">关闭</label>'+
			'		</div>'+
			'	</li>'+
			'	<li class="forpaligntypejs">'+
			'		<label for="child'+npc+'pAlignType">弹出层对齐方式：</label>'+
			'		<div id="child'+npc+'pAlignType">'+
			'			<input type="radio" id="child'+npc+'pAlignType_1" name="childConfig['+npc+'].popupConfig.pAlignType" value="yes" checked="checked" />'+
			'			<label for="child'+npc+'pAlignType_1" title="选择应用方位和输入偏移量">对齐应用</label>'+
			'			<input type="radio" id="child'+npc+'pAlignType_2" name="childConfig['+npc+'].popupConfig.pAlignType" value="no">'+
			'			<label for="child'+npc+'pAlignType_2" title="手动使用鼠标拖拽">手动定位<i class="popsd"></i></label>'+
			'		</div>'+
			'	</li>'+
			'	<li class="pAlignTypeYes">'+
			'		<label for="child'+npc+'alignID">选择对齐点应用：</label>'+
			'		<select id="child'+npc+'alignID" name="childConfig['+npc+'].popupConfig.alignID">'+
								'			<option value="<?=$_POST['appID']?>" selected="selected">切片正反面1</option>'+
								'		</select>'+
			'	</li>'+
			'	<li class="pAlignTypeYes">'+
			'		<label for="child'+npc+'popupPosition">弹出层位置：</label>'+
			'		<select id="child'+npc+'popupPosition" name="childConfig['+npc+'].popupConfig.popupPosition">'+
			'			<optgroup label="应用上方">'+
			'				<option value="\'tl\',\'bl\'" selected="selected">应用上方左对齐</option>'+
			'				<option value="\'tc\',\'bc\'">应用上方居中</option>'+
			'				<option value="\'tr\',\'br\'">应用上方右对齐</option>'+
			'			</optgroup>'+
			'			<optgroup label="应用右侧">'+
			'				<option value="\'tr\',\'tl\'">应用右侧顶部对齐</option>'+
			'				<option value="\'cr\',\'cl\'">应用右侧居中</option>'+
			'				<option value="\'br\',\'bl\'">应用右侧底部对齐</option>'+
			'			</optgroup>'+
			'			<optgroup label="应用下方">'+
			'				<option value="\'br\',\'tr\'">应用下方右对齐</option>'+
			'				<option value="\'bc\',\'tc\'">应用下方居中</option>'+
			'				<option value="\'bl\',\'tl\'">应用下方左对齐</option>'+
			'			</optgroup>'+
			'			<optgroup label="应用左侧">'+
			'				<option value="\'bl\',\'br\'">应用左侧底部对齐</option>'+
			'				<option value="\'cl\',\'cr\'">应用左侧居中</option>'+
			'				<option value="\'tl\',\'tr\'">应用左侧顶部对齐</option>'+
			'			</optgroup>'+
			'			<optgroup label="覆盖应用">'+
			'				<option value="\'tl\',\'tl\'">应用顶部左对齐</option>'+
			'				<option value="\'tc\',\'tc\'">对齐顶部居中</option>'+
			'				<option value="\'tr\',\'tr\'">应用顶部右对齐</option>'+
			'				<option value="\'br\',\'br\'">应用底部右对齐</option>'+
			'				<option value="\'bc\',\'bc\'">应用底部居中</option>'+
			'				<option value="\'bl\',\'bl\'">应用底部左对齐</option>'+
			'				<option value="\'cc\',\'cc\'" style="color:#f00">应用中心点(可做放大镜)</option>'+
			'			</optgroup>'+
			'		</select>'+
			'	</li>'+
			'	<li class="pAlignTypeNo">'+
			'		<label for="positionButton">手动定位：</label>'+
			'		<label id="positionButton" class="btnLabel jDragHandlePopup" data-ids="'+newAttachID+',child'+npc+'iii1,child'+npc+'iii2,child'+npc+'popupHtml,child'+npc+'alignID,child'+npc+'popupPosition" data-isa="yes">点击设置</label>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'iii1">水平偏移：</label>'+
			'		<input id="child'+npc+'iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="childConfig['+npc+'].popupConfig.spaceX" value="" />'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'iii2">垂直偏移：</label>'+
			'		<input id="child'+npc+'iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="childConfig['+npc+'].popupConfig.spaceY" value="" />'+
			'	</li>'+
			'	<li style="height: auto;">'+
			'		<label for="child'+npc+'popupHtml">自定义内容：</label>'+
			'		<textarea id="child'+npc+'popupHtml" name="childConfig['+npc+'].popupConfig.popupHtml"></textarea>'+
			'		<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig['+npc+'].popupConfig.popupHtml" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="'+newAttachID+'">可视化编辑</label><!-- data-zdyAttachID=""-->'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'popupCss3Mode">弹出特效：</label>'+
			'		<select class="popslem" id="child'+npc+'popupCss3Mode" name="childConfig['+npc+'].popupConfig.css3Mode">'+
			'			<option value=""selected="selected">无效果</option>'+
			'			<option value="effect_w">横向展开</option>'+
			'			<option value="effect_h">纵向展开</option>'+
			'			<option value="effect_wh">斜向展开</option>'+
			'		</select>'+
			'	</li>'+
			'	<li class="child'+npc+'popupCss3Mode">'+
			'		<label for="child'+npc+'popupCss3Bezier">弹出动画特效：</label>'+
			'		<select id="child'+npc+'popupCss3Bezier" name="childConfig['+npc+'].popupConfig.css3Bezier">'+
			'			<option value="" selected="selected">匀速平滑</option>'+
			'			<option value="bs1">由慢到快（弱）</option>'+
			'			<option value="bs2">由慢到快（中）</option>'+
			'			<option value="bs3">由慢到快（强）</option>'+
			'			<option value="bq1">由快到慢（弱）</option>'+
			'			<option value="bq2">由快到慢（中）</option>'+
			'			<option value="bq3">由快到慢（强）</option>'+
			'		</select>'+
			'	</li>'+
			'	<li class="child'+npc+'popupCss3Mode">'+
			'		<label for="child'+npc+'popupCss3Speed">弹出动画速度：</label>'+
			'		<select id="child'+npc+'popupCss3Speed" name="childConfig['+npc+'].popupConfig.css3Speed">'+
									'			<option value="0.1s" selected="selected">0.1秒</option>'+
									'			<option value="0.2s" >0.2秒</option>'+
									'			<option value="0.3s" >0.3秒</option>'+
									'			<option value="0.4s" >0.4秒</option>'+
									'			<option value="0.5s" >0.5秒</option>'+
									'			<option value="0.6s" >0.6秒</option>'+
									'			<option value="0.7s" >0.7秒</option>'+
									'			<option value="0.8s" >0.8秒</option>'+
									'			<option value="0.9s" >0.9秒</option>'+
									'			<option value="1s" >1秒</option>'+
									'			<option value="1.1s" >1.1秒</option>'+
									'			<option value="1.2s" >1.2秒</option>'+
									'			<option value="1.3s" >1.3秒</option>'+
									'			<option value="1.4s" >1.4秒</option>'+
									'			<option value="1.5s" >1.5秒</option>'+
									'			<option value="1.6s" >1.6秒</option>'+
									'			<option value="1.7s" >1.7秒</option>'+
									'			<option value="1.8s" >1.8秒</option>'+
									'			<option value="1.9s" >1.9秒</option>'+
									'			<option value="2s" >2秒</option>'+
									'			<option value="2.1s" >2.1秒</option>'+
									'			<option value="2.2s" >2.2秒</option>'+
									'			<option value="2.3s" >2.3秒</option>'+
									'			<option value="2.4s" >2.4秒</option>'+
									'			<option value="2.5s" >2.5秒</option>'+
									'			<option value="2.6s" >2.6秒</option>'+
									'			<option value="2.7s" >2.7秒</option>'+
									'			<option value="2.8s" >2.8秒</option>'+
									'			<option value="2.9s" >2.9秒</option>'+
									'			<option value="3s" >3秒</option>'+
									'			<option value="3.1s" >3.1秒</option>'+
									'			<option value="3.2s" >3.2秒</option>'+
									'			<option value="3.3s" >3.3秒</option>'+
									'			<option value="3.4s" >3.4秒</option>'+
									'			<option value="3.5s" >3.5秒</option>'+
									'			<option value="3.6s" >3.6秒</option>'+
									'			<option value="3.7s" >3.7秒</option>'+
									'			<option value="3.8s" >3.8秒</option>'+
									'			<option value="3.9s" >3.9秒</option>'+
									'			<option value="4s" >4秒</option>'+
									'			<option value="4.1s" >4.1秒</option>'+
									'			<option value="4.2s" >4.2秒</option>'+
									'			<option value="4.3s" >4.3秒</option>'+
									'			<option value="4.4s" >4.4秒</option>'+
									'			<option value="4.5s" >4.5秒</option>'+
									'			<option value="4.6s" >4.6秒</option>'+
									'			<option value="4.7s" >4.7秒</option>'+
									'			<option value="4.8s" >4.8秒</option>'+
									'			<option value="4.9s" >4.9秒</option>'+
									'			<option value="5s" >5秒</option>'+
									'			<option value="5.1s" >5.1秒</option>'+
									'			<option value="5.2s" >5.2秒</option>'+
									'			<option value="5.3s" >5.3秒</option>'+
									'			<option value="5.4s" >5.4秒</option>'+
									'			<option value="5.5s" >5.5秒</option>'+
									'			<option value="5.6s" >5.6秒</option>'+
									'			<option value="5.7s" >5.7秒</option>'+
									'			<option value="5.8s" >5.8秒</option>'+
									'			<option value="5.9s" >5.9秒</option>'+
									'			<option value="6s" >6秒</option>'+
									'			<option value="6.1s" >6.1秒</option>'+
									'			<option value="6.2s" >6.2秒</option>'+
									'			<option value="6.3s" >6.3秒</option>'+
									'			<option value="6.4s" >6.4秒</option>'+
									'			<option value="6.5s" >6.5秒</option>'+
									'			<option value="6.6s" >6.6秒</option>'+
									'			<option value="6.7s" >6.7秒</option>'+
									'			<option value="6.8s" >6.8秒</option>'+
									'			<option value="6.9s" >6.9秒</option>'+
									'			<option value="7s" >7秒</option>'+
									'		</select>'+
			'	</li>'+
			'	<li class="inputAccording-end"></li>'+
			'</ul>'+
		'</div>';
		tabs.tabs( "destroy" );
		$("#addNewSlices").before('<li class="hasdelete"><a href="#tabs-'+(npc+2)+'">切片'+(ntc+1)+'</a><span class="deletetab" data-tabs="tabs-'+(npc+2)+'"><icon>ꕡ</icon></span></li>')
		tabs.find("#tabs-99").before(newContent);
		$("#tForm select").selectmenu();
		$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
		$("#tabs-"+(npc+2)).find(".pAlignTypeYes").show();
		$("#tabs-"+(npc+2)).find(".pAlignTypeNo").hide();
		$("#tabs-"+(npc+2)).find(".inputAccording").nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide(); });
		tabs.tabs({active: ntc+1});
	});
	$("#tabs").off("click.deltab").on("click.deltab", ".deletetab", function(event) {
		var tabsid = $(this).attr("data-tabs");
		D.tConfirm("确定要删除该切片？", function() {
			tabs.tabs( "destroy" );
			$("#"+tabsid).remove();
			ntc--;
			tabs.children("ul").children("li").children("a[href='#"+tabsid+"']").parent().remove();
			tabs.children("ul").children("li").each(function(i,e) {
				var len =tabs.children("ul").children("li").length;
				if(i >= 1 && i < len - 2) {
					$(this).children("a").html("切片"+(i));
				}
			});
			tabs.tabs({active: ntc+1});
		},function(){
			D.tLoading(false);
		});
	});
	
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
	
	//tt
	/**
	var allowTime = 'true';
	$(".popupCss3Ul").each(function(i, e) {
		$("#child"+i+"popupCss3Mode").val() == "" && $("#tabs").find(".child"+i+"popupCss3Mode").hide();
		$("#child"+i+"popupCss3Mode").selectmenu({
			change: function() {
				var val = $(this).val();
				if(val == "") {
					$("#tabs").find(".child"+i+"popupCss3Mode").hide();
				} else {
					if(allowTime == "false") {
						alert("请先登录后再使用此功能！");
						$(this).val("").selectmenu( "refresh" );
						event.preventDefault();
						event.stopPropagation();
						return false;
					}
					$("#tabs").find(".child"+i+"popupCss3Mode").show();
				}
			}
		});
	});
	**/
	
	$(".inputAccording").each(function() {
		var _ia = $(this), checkNeedHide = true;
		_ia.nextUntil(".inputAccording-end").each(function() {
			var _tt = $(this), _select = _tt.find("select:eq(0)"), _input = _tt.find("input:not([type='radio']):eq(0)");
			if(_select.length > 0 && _select.children("option:selected").index() > 0) {
				checkNeedHide = false;
			}
			if(_input.length > 0 && _input.val() != "") {
				checkNeedHide = false;
			}
		});
		_ia.nextUntil(".inputAccording-end").each(function() {	
			var _tt = $(this)
			if(checkNeedHide) {
				_tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide();
			}
		});
		if(!checkNeedHide) {
			_ia.addClass("opened");
		}
	});
	$("#tabs").off("click.iac").on("click.iac", ".inputAccording", function(event) {
		var _t = $(this), _curTab = _t.parent().parent();
		if(_t.hasClass("opened")) {
			_t.removeClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.is(":hidden") ? _tt.addClass("inputAccording-hided") : _tt.slideUp(200); });
		} else {
			_t.addClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.hasClass("inputAccording-hided") ? _tt.removeClass("inputAccording-hided") : _tt.slideDown(200); });
		}
	});

	$(".pAlignTypeYes").show();
	$(".pAlignTypeNo").hide();


});
</script>