<?

$childConfig=$_POST['childConfig'];

?>

<form id="tForm" form-data="jkgb" method="post" >

<div id="tabs" class="form-tabs-title">

	<ul>

		<li><a href="#tabs-1">父层设置</a></li>

        <?  foreach($childConfig as $i=>$item){ $k=$i+2;$f=$i+1;  echo'<li class="hasdelete"><a href="#tabs-'.$k.'">子层'.$f.'</a><span class="deletetab" data-tabs="tabs-'.$k.'"><icon>ꕡ</icon></span></li>';  }  ?>

		<li id="addNewPic" class="ui-state-default ui-corner-top addnewtab" title="添加一个新的开关灯图片"><icon>ꕙ</icon></li>

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

						<label for="oppoEffect">切换图片动画：</label>

						<select id="oppoEffect" name="oppoEffect">

                            <option value="none" <? if($_POST['oppoEffect']=='none'){echo'selected="selected"';} ?>>无动画</option>

                            <option value="june-box-fadein" <? if($_POST['oppoEffect']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>

                            <option value="rotation30" <? if($_POST['oppoEffect']=='rotation30'){echo'selected="selected"';} ?>>旋转30度</option>

                            <option value="rotation60" <? if($_POST['oppoEffect']=='rotation60'){echo'selected="selected"';} ?>>旋转60度</option>

                            <option value="rotation90" <? if($_POST['oppoEffect']=='rotation90'){echo'selected="selected"';} ?>>旋转90度</option>

                            <option value="rotation180" <? if($_POST['oppoEffect']=='rotation180'){echo'selected="selected"';} ?>>旋转180度</option>

                            <option value="rotation270" <? if($_POST['oppoEffect']=='rotation270'){echo'selected="selected"';} ?>>旋转270度</option>

                            <option value="rotation360" <? if($_POST['oppoEffect']=='rotation360'){echo'selected="selected"';} ?>>旋转360度</option>

                            <option value="rotation720" <? if($_POST['oppoEffect']=='rotation720'){echo'selected="selected"';} ?>>旋转720度</option>

						</select>

					</li>

					<li>

						<label for="oppoSpeed">切换图片速度：</label>

						<select id="oppoSpeed" name="oppoSpeed">

							<option value="" >立即显示</option>

							<option value="trans01s" <? if($_POST['oppoSpeed']=='trans01s'){echo'selected="selected"';} ?>>0.1秒</option>

							<option value="trans02s" <? if($_POST['oppoSpeed']=='trans02s'){echo'selected="selected"';} ?>>0.2秒</option>

							<option value="trans05s" <? if($_POST['oppoSpeed']=='trans05s'){echo'selected="selected"';} ?>>0.5秒</option>

							<option value="trans1s" <? if($_POST['oppoSpeed']=='trans1s'){echo'selected="selected"';} ?>>1秒</option>

							<option value="trans2s" <? if($_POST['oppoSpeed']=='trans2s'){echo'selected="selected"';} ?>>2秒</option>

							<option value="trans3s" <? if($_POST['oppoSpeed']=='trans3s'){echo'selected="selected"';} ?>>3秒</option>

							<option value="trans4s" <? if($_POST['oppoSpeed']=='trans4s'){echo'selected="selected"';} ?>>4秒</option>

							<option value="trans5s" <? if($_POST['oppoSpeed']=='trans5s'){echo'selected="selected"';} ?>>5秒</option>

						</select>

					</li>

					<li>

						<label for="ii1">应用宽度：</label>

						<input id="ii1" class="setinput" type="text" title="自动生成，无需填写" name="width" value="<?=$_POST['width']?>" />

					</li>

					<li>

						<label for="ii2">应用高度：</label>

						<input id="ii2" class="setinput" type="text" title="自动生成，无需填写" name="height" value="<?=$_POST['height']?>" />

					</li>

					<li>

						<label for="ii3">应用上边距：</label>

						<input id="ii3" class="setinput" type="text" title="自动生成，无需填写" name="top" value="<?=$_POST['top']?>" />

					</li>

					<li>

						<label for="ii4">应用左边距：</label>

						<input id="ii4" class="setinput" type="text" title="自动生成，无需填写" name="left" value="<?=$_POST['left']?>" />

					</li>

				</ul>

			</div>

			

            

<?  foreach($childConfig as $i=>$item){ $k=$i+2;$f=$i+1;  ?>

            

            <div id="tabs-<?=$k?>">

				<ul class="setform mongoliaModeUl popupCss3Ul">

					<input id="child<?=$i?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$item['attachID']?>" />

					<li>

						<label for="child<?=$i?>rd2">子层<?=$f?>内容类型：</label>

						<div id="child<?=$i?>rd2" class="contentModeDiv">

							<input type="radio" id="child<?=$i?>r3" name="childConfig[<?=$i?>].contentMode" value="imgContent" <? if($item['contentMode']=='imgContent'){echo'checked="checked"';} ?> />

							<label for="child<?=$i?>r3" title="">图片</label>

							<input type="radio" id="child<?=$i?>r4" name="childConfig[<?=$i?>].contentMode" value="customContent" <? if($item['contentMode']=='customContent'){echo'checked="checked"';} ?> />

							<label for="child<?=$i?>r4" title="">自定义</label>

						</div>

					</li>

					<li class="imgContent contentMode">

						<label for="child<?=$i?>jdhi_src">背景图片：</label>

						<input id="child<?=$i?>jdhi_src" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[<?=$i?>].pSrc" value="<?=$item['pSrc']?>" />

						<input id="child<?=$i?>autoSize" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].autoSize" value="yes" <? if($item['autoSize']=='yes'){echo'checked="checked"';} ?> />

						<label for="child<?=$i?>autoSize" class="chkLabel">自动高宽</label>

											</li>

					<li class="imgContent contentMode">

						<label for="child<?=$i?>i3">变换图片：</label>

						<input id="child<?=$i?>i3" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[<?=$i?>].oppoSrc" value="<?=$item['oppoSrc']?>" />

					</li>

 <?

$bgp=$item['imgBgp'];

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

                    

                    <li class=" contentMode" style="display: none;">

						<label>子层<?=$f?>图片对齐位置：</label>

						<span id="child<?=$i?>imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>

						<input id="child<?=$i?>imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[<?=$i?>].imgBgp" value="<?=$bgp?>" />

						<label class="btnLabel jDragHandleImg" data-ids="<?=$item['attachID']?>,tForm" data-isn="child<?=$i?>" data-isa="yes">手动调整<i class="popsd"></i></label>

					</li>

					<li class=" contentMode" style="display: none;">

						<label for="child<?=$i?>sdtzBgColor">背景颜色：</label>

						<div class="setcolorpanel">

							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$item['bgColor']?>;"></div></div></div>

							<input id="child<?=$i?>sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[<?=$i?>].bgColor" value="<?=$item['bgColor']?>" />

						</div>

					</li>

					<li class="imgContent contentMode">

						<label for="child<?=$i?>i2">链接地址：</label>

						<input id="child<?=$i?>i2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig[<?=$i?>].href" value="<?=$item['href']?>" />

						<input id="child<?=$i?>hrefMode" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].hrefMode" value="_blank" <? if($item['hrefMode']=='_blank'){echo'checked="checked"';} ?> />

						<label for="child<?=$i?>hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>

					</li>

					<li class="customContent contentMode">

						<label for="child<?=$i?>customContent">自定义内容：</label>

						<textarea id="child<?=$i?>customContent" name="childConfig[<?=$i?>].customContent"><?=stripslashes( $item['customContent'] )?></textarea>

						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$item['attachID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->

					</li>

					<li class="customContent contentMode">

						<label for="child<?=$i?>overflowMode">内容超出范围时：</label>

						<select id="child<?=$i?>overflowMode" name="childConfig[<?=$i?>].overflowMode">

							<option value="hidden" <? if($item['overflowMode']=='hidden'){echo'checked="checked"';} ?>>超出部分始终隐藏</option>

							<option value="visibleX" <? if($item['overflowMode']=='visibleX'){echo'checked="checked"';} ?>>鼠标经过显示超出部分</option>

							<option value="visible" <? if($item['overflowMode']=='visible'){echo'checked="checked"';} ?>>超出部分始终显示</option>

						</select>

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

						<label for="child<?=$i?>sdtzMongoliaColor">蒙层颜色：</label>

						<div class="setcolorpanel">

							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$item['mongoliaColor']?>;"></div></div></div>

							<input id="child<?=$i?>sdtzMongoliaColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[<?=$i?>].mongoliaColor" value="<?=$item['mongoliaColor']?>" />

						</div>

					</li>

					<li class="img mongoliaMode">

						<label for="child<?=$i?>is4">蒙层图片：</label>

						<input id="child<?=$i?>is4" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[<?=$i?>].mongoliaSrc" value="<?=$item['mongoliaSrc']?>" />

											</li>

					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">弹出层设置</span><em></em></li>

					<li>

	<label for="child<?=$i?>pSwitch">弹出层开关：</label>

	<div id="child<?=$i?>pSwitch">

		<input type="radio" id="child<?=$i?>pSwitch_1" name="childConfig[<?=$i?>].popupConfig.pSwitch" value="yes" <? if($item['popupConfig']['pSwitch']=='yes'){echo'checked="checked"';} ?> />

		<label for="child<?=$i?>pSwitch_1" title="开启鼠标经过弹出层">开启</label>

		<input type="radio" id="child<?=$i?>pSwitch_2" name="childConfig[<?=$i?>].popupConfig.pSwitch" value="no" <? if($item['popupConfig']['pSwitch']=='no'){echo'checked="checked"';} ?>>

		<label for="child<?=$i?>pSwitch_2" title="关闭鼠标经过弹出层">关闭</label>

	</div>

</li>

<li class="forclicktogglejs" style="display:none;">

	<label for="child1pTriggerType">触发方式：</label>

	<div id="child1pTriggerType">

		<input type="radio" id="child<?=$i?>pTriggerType_1" name="childConfig[<?=$i?>].popupConfig.pTriggerType" value="mouse" <? if($item['popupConfig']['pTriggerType']=='mouse'){echo'checked="checked"';} ?> />

		<label for="child1pTriggerType_1" title="鼠标经过触点后触发弹出层">鼠标经过</label>

		<input type="radio" id="child<?=$i?>pTriggerType_2" name="childConfig[<?=$i?>].popupConfig.pTriggerType" value="click" <? if($item['popupConfig']['pTriggerType']=='click'){echo'checked="checked"';} ?>>

		<label for="child1pTriggerType_2" title="鼠标点击触点后触发弹出层">鼠标点击<i class="popsd"></i></label>

	</div>

</li>

<li class="triggerTypeClick" style="display:none;">

	<label for="child1pClickToggle">点击类型：</label>

	<div id="child1pClickToggle">

		<input type="radio" id="child<?=$i?>pClickToggle_2" name="childConfig[<?=$i?>].popupConfig.pClickToggle" value="yes" <? if($item['popupConfig']['pClickToggle']=='yes'){echo'checked="checked"';} ?>>

		<label for="child1pClickToggle_2" title="触发之后弹出和关闭交替执行">弹出/关闭</label>

		<input type="radio" id="child<?=$i?>pClickToggle_1" name="childConfig[<?=$i?>].popupConfig.pClickToggle" value="no" <? if($item['popupConfig']['pClickToggle']=='no'){echo'checked="checked"';} ?> />

		<label for="child1pClickToggle_1" title="触发之后只弹出一次">弹出后不消失</label>

	</div>

</li>

<li class="forpaligntypejs">

	<label for="child<?=$i?>pAlignType">弹出层对齐方式：</label>

	<div id="child<?=$i?>pAlignType">

		<input type="radio" id="child<?=$i?>pAlignType_1" name="childConfig[<?=$i?>].popupConfig.pAlignType" value="yes" <? if($item['popupConfig']['pAlignType']=='yes'){echo'checked="checked"';} ?> />

		<label for="child<?=$i?>pAlignType_1" title="选择应用方位和输入偏移量">对齐应用</label>

		<input type="radio" id="child<?=$i?>pAlignType_2" name="childConfig[<?=$i?>].popupConfig.pAlignType" value="no" <? if($item['popupConfig']['pAlignType']=='no'){echo'checked="checked"';} ?>>

		<label for="child<?=$i?>pAlignType_2" title="手动使用鼠标拖拽">手动定位<i class="popsd"></i></label>

	</div>

</li>

<li class="" style="display:none;">

	<label for="child<?=$i?>alignID">选择对齐点应用：</label>

	<select id="child<?=$i?>alignID" name="childConfig[<?=$i?>].popupConfig.alignID">

		<?

		$appIDArray = explode(',',$_POST['appIDArray']);

		$appNameArray = explode(',',$_POST['appNameArray']);

		foreach($appIDArray as $k=>$it){

		   if($it==$_POST['popupConfig']['alignID']){$ssed='selected="selected"';}else{$ssed='';}	

		   echo'<option value="'.$it.'" '.$ssed.'>'.$appNameArray[$k].'</option>';				

			}

		?>

	</select>

</li>

<li class="pAlignTypeYes">

	<label for="child<?=$i?>popupPosition">弹出层位置：</label>

	<select id="child<?=$i?>popupPosition" name="childConfig[<?=$i?>].popupConfig.popupPosition">	

	<?

    $popupPosition0=$item['popupConfig']['popupPosition'];

    // $popupPosition0=stripslashes($popupPosition0);

    $popupPosition1=str_replace(",","",$popupPosition0);

    $popupPosition=str_replace("'","",$popupPosition1);

     ?>

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

	<input id="child<?=$i?>iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="childConfig[<?=$i?>].popupConfig.spaceX" value="<?=$item['popupConfig']['spaceX']?>" />

</li>

<li>

	<label for="child<?=$i?>iii2">垂直偏移：</label>

	<input id="child<?=$i?>iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="childConfig[<?=$i?>].popupConfig.spaceY" value="<?=$item['popupConfig']['spaceY']?>" />

</li>

<li>

	<label for="child<?=$i?>popupHtml">自定义内容：</label>

	<textarea id="child<?=$i?>popupHtml" name="childConfig[<?=$i?>].popupConfig.popupHtml"><?=stripslashes($item['popupConfig']['popupHtml'])?></textarea>

	<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].popupConfig.popupHtml" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$item['attachID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->

</li>

<li>

	<label for="child<?=$i?>popupCss3Mode">弹出特效：</label>

	<select class="popslem" id="child<?=$i?>popupCss3Mode" name="childConfig[<?=$i?>].popupConfig.css3Mode">

		<option value="" selected="selected">无效果</option>

		<option value="effect_w" <? if($item['popupConfig']['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>

		<option value="effect_h" <? if($item['popupConfig']['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>

		<option value="effect_wh" <? if($item['popupConfig']['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>

	</select>

</li>

<li class="child<?=$i?>popupCss3Mode">

	<label for="child<?=$i?>popupCss3Bezier">弹出动画特效：</label>

	<select id="child<?=$i?>popupCss3Bezier" name="childConfig[<?=$i?>].popupConfig.css3Bezier">

		<option value="" selected="selected">匀速平滑</option>

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

</li>					<li class="inputAccording-end"></li>

				</ul>

			</div>

        <? } ?>    

            

		</div>

	</div>

</div>

</form>

<script type="text/javascript">

$(function() {

//加载表单样式

	$("#tabs").tabs({active: <?=$_POST['active']?>});

	

	$(".linkMode").hide();		

		<?  

		foreach($childConfig as $i=>$item){ $k=$i+2;$f=$i+1;  

		?>

		"<?=$item['popupConfig']['pAlignType']?>" == "yes" ? 

		( $("#tabs-<?=$k?>").find(".pAlignTypeYes").show(),$("#tabs-<?=$k?>").find(".pAlignTypeNo").hide() ) :

		( $("#tabs-<?=$k?>").find(".pAlignTypeYes").hide(),$("#tabs-<?=$k?>").find(".pAlignTypeNo").show() );

		"<?=$item['popupConfig']['pTriggerType']?>" == "click" ? $("#tabs-<?=$k?>").find(".triggerTypeClick").show() : $("#tabs-<?=$k?>").find(".triggerTypeClick").hide();

		<? } ?>



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

	

	var tabs = $("#tabs"), npc = (<?=$f?> - 1), ntc = npc;

	$("#addNewPic").off("click.addtab").on("click.addtab", function() {

		var newContent = "", newAttachID = setAttachIDForPhp();

		npc++;ntc++;

		newContent = '<div id="tabs-'+(npc+2)+'">'+

			'<ul class="setform mongoliaModeUl">'+

			'	<input id="child'+npc+'h1" class="setinput" type="hidden" title="" name="childConfig['+npc+'].attachID" value="'+newAttachID+'" />'+

			'	<li>'+

			'		<label for="child'+npc+'rd2">子层'+(npc+1)+'内容类型：</label>'+

			'		<div id="child'+npc+'rd2" class="contentModeDiv">'+

			'			<input type="radio" id="child'+npc+'r3" name="childConfig['+npc+'].contentMode" value="imgContent"checked="checked" />'+

			'			<label for="child'+npc+'r3" title="">图片</label>'+

			'			<input type="radio" id="child'+npc+'r4" name="childConfig['+npc+'].contentMode" value="customContent" />'+

			'			<label for="child'+npc+'r4" title="">自定义</label>'+

			'		</div>'+

			'	</li>'+

			'	<li class="imgContent contentMode">'+

			'		<label for="child'+npc+'jdhi_src">背景图片：</label>'+

			'		<input id="child'+npc+'jdhi_src" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig['+npc+'].pSrc" value="http://img01.taobaocdn.com/imgextra/i1/39767794/T2O_GuXFlaXXXXXXXX-39767794.png" />'+

			'		<input id="child'+npc+'autoSize" class="chkBox" type="checkbox" name="childConfig['+npc+'].autoSize" value="yes" checked="checked" />'+

			'		<label for="child'+npc+'autoSize" class="chkLabel">自动高宽</label>'+

								'	</li>'+

			'	<li class="imgContent contentMode">'+

			'		<label for="child'+npc+'i3">变换图片：</label>'+

			'		<input id="child'+npc+'i3" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig['+npc+'].oppoSrc" value="" />'+

								'	</li>'+

			'<li class=" contentMode" style="display: none;">'+

			'	<label>图片对齐位置：</label>'+

			'	<span id="child'+npc+'imgBgp_text" class="jDragSelect"><val>居中</val><span class="ui-icon ui-icon-triangle-1-s"></span></span>'+

			'	<input id="child'+npc+'imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig['+npc+'].imgBgp" value="50% 50%" />'+

			'	<label class="btnLabel jDragHandleImg" data-ids="'+newAttachID+',tForm" data-isn="child'+npc+'" data-isa="yes">手动调整<i class="popsd"></i></label>'+

			'</li>'+

			'	<li class=" contentMode" style="display: none;">'+

			'		<label for="child'+npc+'sdtzBgColor">背景颜色：</label>'+

			'		<div class="setcolorpanel">'+

			'			<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+

			'			<input id="child'+npc+'sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig['+npc+'].bgColor" value="" />'+

			'		</div>'+

			'	</li>'+

			'	<li class="imgContent contentMode">'+

			'		<label for="child'+npc+'i2">链接地址：</label>'+

			'		<input id="child'+npc+'i2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig['+npc+'].href" value="" />'+

			'		<input id="child'+npc+'hrefMode" class="chkBox" type="checkbox" name="childConfig['+npc+'].hrefMode" value="_blank" checked="checked" />'+

			'		<label for="child'+npc+'hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>'+

			'	</li>'+

			'	<li class="contentMode" style="display: none;">'+

			'		<label for="child'+npc+'hrefMode">链接打开方式：</label>'+

			'		<select id="child'+npc+'hrefMode" name="childConfig['+npc+'].hrefMode">'+

			'			<option value="_self">原窗口打开</option>'+

			'			<option value="_blank" selected="selected">新窗口打开</option>'+

			'		</select>'+

			'	</li>'+

			'	<li class="customContent contentMode" style="display:none;height: auto;">'+

			'		<label for="child'+npc+'customContent">自定义内容：</label>'+

			'		<textarea id="child'+npc+'customContent" name="childConfig['+npc+'].customContent"></textarea>'+

			'		<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig['+npc+'].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="'+newAttachID+'">可视化编辑</label>'+

			'	</li>'+

			'	<li class="customContent contentMode" style="display:none;">'+

			'		<label for="child'+npc+'overflowMode">内容超出范围时：</label>'+

			'		<select id="child'+npc+'overflowMode" name="childConfig['+npc+'].overflowMode">'+

			'			<option value="hidden" selected="selected">超出部分始终隐藏</option>'+

			'			<option value="visibleX">鼠标经过显示超出部分</option>'+

			'			<option value="visible">超出部分始终显示</option>'+

			'		</select>'+

			'	</li>'+

			'	<li>'+

			'		<label for="child'+npc+'rd1">蒙层类型：</label>'+

			'		<div id="child'+npc+'rd1" class="mongoliaModeDiv">'+

			'			<input type="radio" id="child'+npc+'r1" name="childConfig['+npc+'].mongoliaMode" value="color" checked="checked" />'+

			'			<label for="child'+npc+'r1" title="蒙层为纯色">颜色</label>'+

			'			<input type="radio" id="child'+npc+'r2" name="childConfig['+npc+'].mongoliaMode" value="img" />'+

			'			<label for="child'+npc+'r2" title="蒙层为图片，自动平铺，推荐半透明图片或gif动图">图片</label>'+

			'		</div>'+

			'	</li>'+

			'	<li class="color mongoliaMode">'+

			'		<label for="child'+npc+'sdtzMongoliaColor">蒙层颜色：</label>'+

			'		<div class="setcolorpanel">'+

			'			<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+

			'			<input id="child'+npc+'sdtzMongoliaColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig['+npc+'].mongoliaColor" value="" />'+

			'		</div>'+

			'	</li>'+

			'	<li class="img mongoliaMode" style="display:none;">'+

			'		<label for="child'+npc+'is4">蒙层图片：</label>'+

			'		<input id="child'+npc+'is4" class="setinput " type="text" title="" name="childConfig['+npc+'].mongoliaSrc" value="" />'+

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

			'	<li class="" style="display:none;">'+

			'		<label for="child'+npc+'alignID">选择对齐点应用：</label>'+

			'		<select id="child'+npc+'alignID" name="childConfig['+npc+'].popupConfig.alignID">'+

								'			<option value="<?=$_POST['appID']?>" selected="selected">开关灯1</option>'+

								'		</select>'+

			'	</li>'+

			'	<li class="pAlignTypeYes">'+

			'		<label for="child'+npc+'popupPosition">弹出层位置：</label>'+

			'		<select id="child'+npc+'popupPosition" name="childConfig['+npc+'].popupConfig.popupPosition">'+

			'			<optgroup label="应用上方">'+

			'				<option value="\'tl\',\'bl\'" selected="selected">对齐点左上 - 弹出层左下</option>'+

			'				<option value="\'tc\',\'bc\'">对齐点上中 - 弹出层下中</option>'+

			'				<option value="\'tr\',\'br\'">对齐点右上 - 弹出层右下</option>'+

			'			</optgroup>'+

			'			<optgroup label="应用右侧">'+

			'				<option value="\'tr\',\'tl\'">对齐点右上 - 弹出层左上</option>'+

			'				<option value="\'cr\',\'cl\'">对齐点右中 - 弹出层左中</option>'+

			'				<option value="\'br\',\'bl\'">对齐点右下 - 弹出层左下</option>'+

			'			</optgroup>'+

			'			<optgroup label="应用下方">'+

			'				<option value="\'br\',\'tr\'">对齐点右下 - 弹出层右上</option>'+

			'				<option value="\'bc\',\'tc\'">对齐点下中 - 弹出层上中</option>'+

			'				<option value="\'bl\',\'tl\'">对齐点左下 - 弹出层左上</option>'+

			'			</optgroup>'+

			'			<optgroup label="应用左侧">'+

			'				<option value="\'bl\',\'br\'">对齐点左下 - 弹出层右下</option>'+

			'				<option value="\'cl\',\'cr\'">对齐点中左 - 弹出层中右</option>'+

			'				<option value="\'tl\',\'tr\'">对齐点左上 - 弹出层右上</option>'+

			'			</optgroup>'+

			'			<optgroup label="覆盖应用">'+

			'				<option value="\'tl\',\'tl\'">对齐点左上 - 弹出层左上</option>'+

			'				<option value="\'tc\',\'tc\'">对齐点上中 - 弹出层上中</option>'+

			'				<option value="\'tr\',\'tr\'">对齐点右上 - 弹出层右上</option>'+

			'				<option value="\'cr\',\'cr\'">对齐点右中 - 弹出层右中</option>'+

			'				<option value="\'br\',\'br\'">对齐点右下 - 弹出层右下</option>'+

			'				<option value="\'bc\',\'bc\'">对齐点下中 - 弹出层下中</option>'+

			'				<option value="\'bl\',\'bl\'">对齐点左下 - 弹出层左下</option>'+
			
			'				<option value="\'cl\',\'cl\'">对齐点左中 - 弹出层左中</option>'+

			'				<option value="\'cc\',\'cc\'" style="color:#f00">对齐点中心-弹出层中心(可做放大镜)</option>'+

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

		$("#addNewPic").before('<li class="hasdelete"><a href="#tabs-'+(npc+2)+'">子层'+(ntc+1)+'</a><span class="deletetab" data-tabs="tabs-'+(npc+2)+'"><icon>ꕡ</icon></span></li>')

		tabs.find(".form-tabs-content").append(newContent);

		$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();

		$("#tForm select").selectmenu();

		tabs.tabs({active: ntc+1});

	});

	$("#tabs").off("click.deltab").on("click.deltab", ".deletetab", function(event) {

		var tabsid = $(this).attr("data-tabs");

		D.tConfirm("确定要删除该子层？", function() {

			tabs.tabs( "destroy" );

			$("#"+tabsid).remove();

			ntc--;

			tabs.children("ul").children("li").children("a[href='#"+tabsid+"']").parent().remove();

			tabs.children("ul").children("li").each(function(i,e) {

				var len =tabs.children("ul").children("li").length;

				if(i >= 1 && i < len - 1) {

					$(this).children("a").html("子层"+(i));

				}

			});

			tabs.tabs({active: ntc+1});

		},function(){

			D.tLoading(false);

		});

	});

	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();

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

	$("#tForm").on("click", ".mongoliaModeDiv input", function() {

		var val = $(this).val(), parent = $(this).parent().parent().parent();

		$(".mongoliaMode", parent).hide();

		$("."+val, parent).show();

	});

	

	$(".contentMode").hide();

	$(".mongoliaModeUl").each(function() {

		var _t = $(this), val = _t.find(".contentModeDiv input:checked").val();

		$("."+val, _t).show();

	});

	$("#tForm").on("click", ".contentModeDiv input", function() {

		var val = $(this).val(), parent = $(this).parent().parent().parent();

		$(".contentMode", parent).hide();

		$("."+val, parent).show();

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

	

	$(".inputAccording").nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide(); });

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

});

</script>