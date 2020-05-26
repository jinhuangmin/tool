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
<form id="tForm" form-data="jsib" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-3">强调动画</a></li>
		<li><a href="#tabs-2">边框阴影</a></li>
		<li><a href="#tabs-96">弹出层设置</a></li>
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
						<label for="jdhi_src">图片地址：</label>
						<input id="jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="autoSize" class="chkLabel">自动高宽</label>
					</li>
					<li>
						<label for="rd1">链接类型：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="linkMode" value="ptlink" <? if($_POST['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
							<label for="r1" title="普通链接，请在下方输入链接地址">普通</label>
							<input type="radio" id="r3" name="linkMode" value="wwlink" <? if($_POST['linkMode']=='wwlink'){echo'checked="checked"';} ?>>
							<label for="r3" title="阿里旺旺链接，请在下方输入旺旺账号">旺旺</label>
							<input type="radio" id="r4" name="linkMode" value="mdlink" <? if($_POST['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
							<label for="r4" title="锚点链接，请在下方选择需要跳转到的锚点" style="display: none;">锚点</label>
							<input type="radio" id="gr1" name="linkMode" value="gwlink" <? if($_POST['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
							<label for="gr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>
						</div>
					</li>
					<li class="ptlink gwlink linkMode">
						<label id="gwlabel1" for="i2">链接地址：</label>
						<input id="i2" class="setinput" type="text" title="请输入链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
						<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					<li class="wwlink linkMode">
						<label for="i4">旺旺ID：</label>
						<input id="i4" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="wangID" value="<?=$_POST['wangID']?>" />
					</li>
					<li class="wwlink linkMode">
						<label for="shuntMode">分流方式：</label>
						<select id="shuntMode" name="shuntMode">
							<option value="no" <? if($_POST['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
							<option value="yes" <? if($_POST['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
						</select>
					</li>
					<li class="mdlink linkMode">
						<label for="anchorSelect">点击后跳转至：</label>
						<select id="anchorSelect" name="anchorSelect">
						<?
					$anchorName = explode(',',$_POST['anchorName']);
					if($_POST['anchorName']==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					foreach($anchorName as $item){
                       if($item==$_POST['anchorSelect']){$sct='selected="selected"';}else{$sct='';}
					   echo'<option value="'.$item.'" '.$sct.'> 锚点：'.$item.'</option>';				
						}}
					?>
						</select>
					</li>

					<li class="ptlink linkMode">
						<label for="imgMode">图片显示方式：</label>
						<select id="imgMode" name="imgMode">
							<option value="cut" <? if($_POST['imgMode']=='cut'){echo'selected="selected"';} ?>>保持原图尺寸</option>
							<option value="full" <? if($_POST['imgMode']=='full'){echo'selected="selected"';} ?>>自由拉伸</option>
							<option value="scaleX" <? if($_POST['imgMode']=='scaleX'){echo'selected="selected"';} ?>>保持比例(只裁剪宽度)</option>
							<option value="scaleY" <? if($_POST['imgMode']=='scaleY'){echo'selected="selected"';} ?>>保持比例(只裁剪高度)</option>
						</select>
					</li>
					<li class="imgModeCut">
						<label>背景图片位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
					</li>
					<li>
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
					<li style="height:auto;margin-bottom:10px;float:left;">
						<label for="tt_i1">动画效果：</label>
						<div class="animselect">
							<div class="none<? if($_POST['animType']==''){echo' active';}?>" data-val=""><i><em></em></i>无效果</div>
							<div class="shakex<? if($_POST['animType']=='june-x-shake'){echo' active';}?>" data-val="june-x-shake"><i><em></em></i>左右抖动</div>
							<div class="shakey<? if($_POST['animType']=='june-y-shake'){echo' active';}?>" data-val="june-y-shake"><i><em></em></i>上下抖动</div>
							<div class="shaker<? if($_POST['animType']=='june-r-shake'){echo' active';}?>" data-val="june-r-shake"><i><em></em></i>旋转摆动</div>
							<div class="shakes<? if($_POST['animType']=='june-s-shake'){echo' active';}?>" data-val="june-s-shake"><i><em></em></i>弹性缩放</div>
							<div class="shaken<? if($_POST['animType']=='june-n-shake'){echo' active';}?>" data-val="june-n-shake"><i><em></em></i>弹性果冻</div>
						</div>
						<input type="hidden" name="animType" id="animType" value="<?=$_POST['animType']?>">
					</li>
					<li style="clear:both;">
						<label for="dhfd12">动画幅度：</label>
						<div id="dhfd12">
							<input type="radio" id="dhfdr1" name="animRange" value="-s" <? if($_POST['animRange']=='-s'){echo'checked="checked"';} ?> />
							<label for="dhfdr1" title="">弱</label>
							<input type="radio" id="dhfdr2" name="animRange" value="-m" <? if($_POST['animRange']=='-m'){echo'checked="checked"';} ?> />
							<label for="dhfdr2" title="">中</label>
							<input type="radio" id="dhfdr3" name="animRange" value="-l" <? if($_POST['animRange']=='-l'){echo'checked="checked"';} ?> />
							<label for="dhfdr3" title="">强</label>
						</div>
					</li>
					<li>
						<label for="animSpeed">动画速度：</label>
						<select id="animSpeed" name="animSpeed">
							
                    <option value="0s" <? if($_POST['animSpeed']=='0s'){echo'selected="selected"';}?>>立即显示</option>
                    <?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=8;$i<=20;$i=$i+1){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=30;$i<=300;$i=$i+10){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=320;$i<=600;$i=$i+20){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					?>    
                  </select>
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="bcd1">默认显示：</label>
						<div id="bcd1">
							<input type="checkbox" id="bc2" name="borderControl1" value="hborder1" <? if($_POST['borderControl1']=='hborder1'){echo'checked="checked"';} ?> />
							<label for="bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
							<input type="checkbox" id="bc3" name="shadowControl1" value="shadowShow1" <? if($_POST['shadowControl1']=='shadowShow1'){echo'checked="checked"';} ?> />
							<label for="bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
						</div>
					</li>
					<li class="hborder1 borderControl1">
						<label for="sdtzBorderColor1">边框->边框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['borderColor1']?>;"></div></div></div>
							<input id="sdtzBorderColor1" class="setinputcolor tColorPicker" type="text" title="" name="borderColor1" value="<?=$_POST['borderColor1']?>" />
						</div>
					</li>
					<li class="hborder1 borderControl1">
						<label for="bi6">边框粗细：</label>
						<input id="bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$_POST['borderWidth1']?>" />
					</li>
					<li class="hborder1 borderControl1">
						<label for="bi7">圆角弧度：</label>
						<input id="bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$_POST['borderRadius1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="sdtzShadowColor1">阴影->阴影颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['shadowColor1']?>;"></div></div></div>
							<input id="sdtzShadowColor1" class="setinputcolor tColorPicker" type="text" title="" name="shadowColor1" value="<?=$_POST['shadowColor1']?>" />
						</div>
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="hy3">模糊距离：</label>
						<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$_POST['shadowBlur1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="hy5">阴影尺寸：</label>
						<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$_POST['shadowSize1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="hy1">水平距离：</label>
						<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$_POST['shadowLeft1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="by2">垂直距离：</label>
						<input id="by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$_POST['shadowTop1']?>" />
					</li>
					<input id="bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="" />
					
					<li>
						<label for="cd1">鼠标经过时显示：</label>
						<div id="cd1">
                            <input type="checkbox" id="c1" name="mongoliaControl" value="mongoliaShow" <? if($_POST['mongoliaControl']=='mongoliaShow'){echo'checked="checked"';} ?> />
							<label for="c1" title="可设置深色蒙层或浅色蒙层，鼠标经过热区时显示">蒙层</label>
							<input type="checkbox" id="c2" name="borderControl" value="hborder" <? if($_POST['borderControl']=='hborder'){echo'checked="checked"';} ?> />
							<label for="c2" title="鼠标经过热区时会显示边框，可设置边框颜色粗细">边框</label>
							<input type="checkbox" id="c3" name="shadowControl" value="shadowShow" <? if($_POST['shadowControl']=='shadowShow'){echo'checked="checked"';} ?> />
							<label for="c3" title="鼠标经过热区时会显示阴影，可设置阴影颜色粗细">阴影</label>
							<input type="checkbox" id="c4" name="outlineControl" value="outlineShow" <? if($_POST['outlineControl']=='outlineShow'){echo'checked="checked"';} ?> />
							<label for="c4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
						</div>
					</li>
					<li class="mongoliaShow mongoliaControl">
						<label for="rd2">蒙层->蒙层颜色：</label>
						<div id="rd2">
							<input type="radio" id="r5" name="mongoliaMode" value="mcblack" <? if($_POST['mongoliaMode']=='mcblack'){echo'checked="checked"';} ?> />
							<label for="r5" title="">深色</label>
							<input type="radio" id="r6" name="mongoliaMode" value="mcwhite" <? if($_POST['mongoliaMode']=='mcwhite'){echo'checked="checked"';} ?> />
							<label for="r6" title="">浅色</label>
						</div>
					</li>
					<li class="hborder borderControl">
						<label for="sdtzBorderColor">边框->边框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['borderColor']?>;"></div></div></div>
							<input id="sdtzBorderColor" class="setinputcolor tColorPicker" type="text" title="" name="borderColor" value="<?=$_POST['borderColor']?>" />
						</div>
					</li>
					<li class="hborder borderControl">
						<label for="i6">边框粗细：</label>
						<input id="i6" class="setinput" type="text" title="" name="borderWidth" value="<?=$_POST['borderWidth']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="sdtzShadowColor">阴影->阴影颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['shadowColor']?>;"></div></div></div>
							<input id="sdtzShadowColor" class="setinputcolor tColorPicker" type="text" title="" name="shadowColor" value="<?=$_POST['shadowColor']?>" />
						</div>
					</li>
					<li class="shadowShow shadowControl">
						<label for="y3">模糊距离：</label>
						<input id="y3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$_POST['shadowBlur']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="y5">阴影尺寸：</label>
						<input id="y5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$_POST['shadowSize']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="y1">水平距离：</label>
						<input id="y1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$_POST['shadowLeft']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="y2">垂直距离：</label>
						<input id="y2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$_POST['shadowTop']?>" />
					</li>
					<input id="h2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=$_POST['shadowStyle']?>" />
					<li class="outlineShow outlineControl">
						<label for="sdtzOutlineColor">扩展->外框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['outlineColor']?>;"></div></div></div>
							<input id="sdtzOutlineColor" class="setinputcolor tColorPicker" type="text" title="" name="outlineColor" value="<?=$_POST['outlineColor']?>" />
						</div>
					</li>
					<li class="outlineShow outlineControl">
						<label for="outlineWidth">外框粗细：</label>
						<select id="outlineWidth" name="outlineWidth">
							<option value="juneol2" <? if($_POST['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
							<option value="juneol1" <? if($_POST['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
							<option value="juneol" <? if($_POST['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
						</select>
					</li>
					<li class="outlineShow outlineControl">
						<label for="outlineSpeed">动画速度：</label>
						<select id="outlineSpeed" name="outlineSpeed">
							<option value="" >立即显示</option>
							<option value="trans01s" <? if($_POST['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
							<option value="trans02s" <? if($_POST['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
							<option value="trans05s" <? if($_POST['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
							<option value="trans1s" <? if($_POST['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li class="outlineShow outlineControl">
						<label for="sdtzOutlineShadowColor">阴影颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['outlineShadowColor']?>;"></div></div></div>
							<input id="sdtzOutlineShadowColor" class="setinputcolor tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$_POST['outlineShadowColor']?>" />
						</div>
					</li>
				</ul>
			</div>
			<div id="tabs-96"><ul class="setform">
	<li>
		<label for="pSwitch">弹出层开关：</label>
		<div id="pSwitch">
			<input type="radio" id="pSwitch_1" name="popupConfig.pSwitch" value="yes" <? if($_POST['popupConfig']['pSwitch']=='yes'){echo'checked="checked"';} ?> />
			<label for="pSwitch_1" title="开启鼠标经过弹出层">开启</label>
			<input type="radio" id="pSwitch_2" name="popupConfig.pSwitch" value="no" <? if($_POST['popupConfig']['pSwitch']=='no'){echo'checked="checked"';} ?>>
			<label for="pSwitch_2" title="关闭鼠标经过弹出层">关闭</label>
		</div>
	</li>
    <li style="display:none;">
        <label for="pTriggerType">触发方式：</label>
        <div id="pTriggerType">
            <input type="radio" id="pTriggerType_1" name="popupConfig.pTriggerType" value="mouse" <? if($_POST['popupConfig']['pTriggerType']=='mouse'){echo'checked="checked"';} ?> />
            <label for="pTriggerType_1" title="鼠标经过触点后触发弹出层">鼠标经过</label>
            <input type="radio" id="pTriggerType_2" name="popupConfig.pTriggerType" value="click" <? if($_POST['popupConfig']['pTriggerType']=='click'){echo'checked="checked"';} ?>>
            <label for="pTriggerType_2" title="鼠标点击触点后触发弹出层">鼠标点击<i class="popsd"></i></label>
        </div>
	</li>
	<li class="triggerTypeClick" style="display:none;">
		<label for="pClickToggle">点击类型：</label>
		<div id="pClickToggle">
			<input type="radio" id="pClickToggle_2" name="popupConfig.pClickToggle" value="yes" <? if($_POST['popupConfig']['pClickToggle']=='yes'){echo'checked="checked"';} ?>>
			<label for="pClickToggle_2" title="触发之后弹出和关闭交替执行">弹出/关闭</label>
			<input type="radio" id="pClickToggle_1" name="popupConfig.pClickToggle" value="no" <? if($_POST['popupConfig']['pClickToggle']=='no'){echo'checked="checked"';} ?> />
			<label for="pClickToggle_1" title="触发之后只弹出一次">弹出后不消失</label>
		</div>
	</li>
	<li>
		<label for="pAlignType">弹出层对齐方式：</label>
		<div id="pAlignType">
			<input type="radio" id="pAlignType_1" name="popupConfig.pAlignType" value="yes" <? if($_POST['popupConfig']['pAlignType']=='yes'){echo'checked="checked"';} ?> />
			<label for="pAlignType_1" title="选择应用方位和输入偏移量">对齐应用</label>
			<input type="radio" id="pAlignType_2" name="popupConfig.pAlignType" value="no" <? if($_POST['popupConfig']['pAlignType']=='no'){echo'checked="checked"';} ?>>
			<label for="pAlignType_2" title="手动使用鼠标拖拽">手动定位<i class="popsd"></i></label>
		</div>
	</li>
	<li class="" style="display:none;">
		<label for="alignID">选择对齐点应用：</label>
		<select id="alignID" name="popupConfig.alignID">
		<?
		$appIDArray = explode(',',$_POST['appIDArray']);
		$appNameArray = explode(',',$_POST['appNameArray']);
		foreach($appIDArray as $k=>$item){
		   if($item==$_POST['popupConfig']['alignID']){$ssed='selected="selected"';}else{$ssed='';}	
		   echo'<option value="'.$item.'" '.$ssed.'>'.$appNameArray[$k].'</option>';				
			}
		?>
		</select>
	</li>
	<li class="pAlignTypeYes">
		<label for="popupPosition">弹出层位置：</label>
		<select id="popupPosition" name="popupConfig.popupPosition">		 
		 	<optgroup label="应用上方"><? $popupPosition=$_POST['popupConfig']['popupPosition']; ?>
                <option value="'tl','bl'" <? if($popupPosition=="'tl','bl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
                <option value="'tc','bc'" <? if($popupPosition=="'tc','bc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
                <option value="'tr','br'" <? if($popupPosition=="'tr','br'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
            </optgroup>
            <optgroup label="应用右侧">
                <option value="'tr','tl'" <? if($popupPosition=="'tr','tl'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
                <option value="'cr','cl'" <? if($popupPosition=="'cr','cl'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
                <option value="'br','bl'" <? if($popupPosition=="'br','bl'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
            </optgroup>
            <optgroup label="应用下方">
                <option value="'br','tr'" <? if($popupPosition=="'br','tr'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
                <option value="'bc','tc'" <? if($popupPosition=="'bc','tc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
                <option value="'bl','tl'" <? if($popupPosition=="'bl','tl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
            </optgroup>
            <optgroup label="应用左侧">
                <option value="'bl','br'" <? if($popupPosition=="'bl','br'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
                <option value="'cl','cr'" <? if($popupPosition=="'cl','cr'"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
                <option value="'tl','tr'" <? if($popupPosition=="'tl','tr'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
            </optgroup>
            <optgroup label="覆盖应用">
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
	<li class="pAlignTypeNo">
		<label for="popupPositionButton">手动定位：</label>
		<label id="popupPositionButton" class="btnLabel jDragHandlePopup" data-ids="<?=$_POST['appID']?>">点击设置</label>
	</li>
	<li>
		<label for="ppdsdtz_sapceX">水平偏移：</label>
		<input id="ppdsdtz_sapceX" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="popupConfig.spaceX" value="<?=$_POST['popupConfig']['spaceX']?>" />
	</li>
	<li>
		<label for="ppdsdtz_sapceY">垂直偏移：</label>
		<input id="ppdsdtz_sapceY" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="popupConfig.spaceY" value="<?=$_POST['popupConfig']['spaceY']?>" />
	</li>
	<li style="height:110px;">
		<label for="popupHtml">自定义内容：</label>
		<textarea id="popupHtml" name="popupConfig.popupHtml"><?=stripslashes($_POST['popupConfig']['popupHtml'])?></textarea>
		<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="popupConfig.popupHtml" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
	</li>
    
    
    <li>
		<label for="popupCss3Mode">弹出特效：</label>
		<select class="popslem" id="popupCss3Mode" name="popupConfig.css3Mode">
			<option value="" <? if($_POST['popupConfig']['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
			<option value="effect_w" <? if($_POST['popupConfig']['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
			<option value="effect_h" <? if($_POST['popupConfig']['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
			<option value="effect_wh" <? if($_POST['popupConfig']['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
		</select>
	</li>
	<li class="popupCss3Mode">
		<label for="popupCss3Bezier">弹出动画特效：</label>
		<select id="popupCss3Bezier" name="popupConfig.css3Bezier">
			<option value="" <? if($_POST['popupConfig']['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
			<option value="bs1" <? if($_POST['popupConfig']['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
			<option value="bs2" <? if($_POST['popupConfig']['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
			<option value="bs3" <? if($_POST['popupConfig']['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
			<option value="bq1" <? if($_POST['popupConfig']['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
			<option value="bq2" <? if($_POST['popupConfig']['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
			<option value="bq3" <? if($_POST['popupConfig']['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
		</select>
	</li>
	<li class="popupCss3Mode">
		<label for="popupCss3Speed">弹出动画速度：</label>
		<select id="popupCss3Speed" name="popupConfig.css3Speed">
						
          <?
			for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
				if($_POST['popupConfig']['css3Speed']==$sx){$sel='selected';}else{$sel='';}
			echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
				}
			
			?>         
          </select>
	</li>
</ul>
<script type="text/javascript">
$(function() {
//加载表单样式
	var allowTime = 'true';
	"<?=$_POST['popupConfig']['pAlignType']?>" == "yes" ? 
	( $(".pAlignTypeYes").show(),$(".pAlignTypeNo").hide() ) :
	( $(".pAlignTypeYes").hide(),$(".pAlignTypeNo").show() );
	$("#pAlignType").off("change.popupAlignType").on("change.popupAlignType", "input", function() {
		var val = $(this).val(), _vx = $("#ppdsdtz_sapceX"), _vy = $("#ppdsdtz_sapceY");
		if(val == "yes") {
			$(".pAlignTypeYes").show();
			$(".pAlignTypeNo").hide();
			_vx.val("0");
			_vy.val("0");
		} else {
			$(".pAlignTypeYes").hide();
			$(".pAlignTypeNo").show();
		}
	});
	
	"<?=$_POST['popupConfig']['pTriggerType']?>" == "click" ? $(".triggerTypeClick").show() : $(".triggerTypeClick").hide();
	$("#pTriggerType").off("change.triggerType").on("change.triggerType", "input", function() {
		var val = $(this).val();
		if(val == "click") {
			$(".triggerTypeClick").show();
		} else {
			$(".triggerTypeClick").hide();
		}
	});
	/**
	$("#popupCss3Mode").val() == "" && $("#tabs").find(".popupCss3Mode").hide();
	$("#popupCss3Mode").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "") {
				$("#tabs").find(".popupCss3Mode").hide();
			} else {
				if(allowTime == "false") {
					alert("请先登录后再使用此功能！");
					$(this).val("").selectmenu( "refresh" );
					event.preventDefault();
					event.stopPropagation();
					return false;
				}
				$("#tabs").find(".popupCss3Mode").show();
			}
		}
	});
	**/
});
</script></div>
		</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	"<?=$_POST['imgMode']?>" != "cut" && $(".imgModeCut").hide();
	$("#imgMode").off("change").on("change", function() {
		var _t = $(this), val = _t.val();
		if(val == "cut") {
			$(".imgModeCut").show();
		} else {
			$(".imgModeCut").hide();
		}
	});
	$("#tabs").tabs({active: <?=$_POST['active']?>});
	$("#tForm select").selectmenu();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	
	$(".linkMode, .borderControl, .mongoliaControl, .shadowControl, .outlineControl").hide();
	$(".borderControl1, .shadowControl1").hide();
	$("#c1").click(function() {
		if(!!$(this).prop("checked")) {
			$(".mongoliaControl").show();
		} else {
			$(".mongoliaControl").hide();
		}
	});
	$("#c2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl").show();
		} else {
			$(".borderControl").hide();
		}
	});
	$("#c3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl").show();
		} else {
			$(".shadowControl").hide();
		}
	});
	$("#c4").click(function() {
		if(!!$(this).prop("checked")) {
			$(".outlineControl").show();
		} else {
			$(".outlineControl").hide();
		}
	});
	
	$("#bc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl1").show();
		} else {
			$(".borderControl1").hide();
		}
	});
	$("#bc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl1").show();
		} else {
			$(".shadowControl1").hide();
		}
	});
	
	"<?=$_POST['mongoliaControl']?>"=="mongoliaShow" && $(".mongoliaControl").show();
	"<?=$_POST['borderControl']?>"=="hborder" && $(".borderControl").show();
	"<?=$_POST['shadowControl']?>"=="shadowShow" && $(".shadowControl").show();
	"<?=$_POST['outlineControl']?>"=="outlineShow" && $(".outlineControl").show();
	
	"<?=$_POST['borderControl1']?>"=="hborder1" && $(".borderControl1").show();
	"<?=$_POST['shadowControl1']?>"=="shadowShow1" && $(".shadowControl1").show();
	
	$(".<?=$_POST['linkMode']?>").show();
	$("#rd1").off("change.forminput").on("change.forminput", "input[name='linkMode']", function(event) {
		var val = $(this).val();
		$(".linkMode").hide();
		$("."+val).show();
		if(val == "gwlink") {
			$("#gwlabel1").html("宝贝地址：");
		} else {
			$("#gwlabel1").html("链接地址：");
		}
	});
	$(".animselect div").click(function(){
		$(".animselect div").removeClass("active");
		$(this).addClass("active");
		$("#animType").val($(this).attr("data-val"));
	});
});
</script>