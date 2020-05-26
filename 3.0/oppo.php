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
<form id="tForm" form-data="job" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">强调动画</a></li>
		<li><a href="#tabs-96">弹出层设置</a></li>
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
						<label for="rd2">正反面内容：</label>
						<div id="rd2">
							<input type="radio" id="r21" name="contentType" value="imgContent" <? if($_POST['contentType']=='imgContent'){echo'checked="checked"';} ?> />
							<label for="r21" title="">图片</label>
							<input type="radio" id="r22" name="contentType" value="customContent" <? if($_POST['contentType']=='customContent'){echo'checked="checked"';} ?> />
							<label for="r22" title="">自定义</label>
						</div>
					</li>
					<li class="imgContent">
						<label for="jdhi_src">默认显示图片：</label>
						<input id="jdhi_src" class="setinput " type="text" title="默认显示的图片。请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="autoSize" class="chkLabel">自动高宽</label>
											</li>
					<li class="imgContent">
						<label for="i3">鼠标经过图片：</label>
						<input id="i3" class="setinput " type="text" title="鼠标经过时的变换图片，留空则为无切换效果的单图。请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="oppoSrc" value="<?=$_POST['oppoSrc']?>" />
					</li>
                    <li class="" style="display: none;">
						<label>图片对齐位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm">手动调整<i class="popsd"></i></label>
					</li>
					<li class="" style="display: none;">
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					<li class="customContent">
						<label for="customContent">默认显示内容：</label>
						<textarea id="customContent" name="customContent"><?=stripslashes($_POST['customContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li class="customContent">
						<label for="customContentHover">鼠标经过内容：</label>
						<textarea id="customContentHover" name="customContentHover"><?=stripslashes($_POST['customContentHover'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContentHover" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li>
						<label for="rd1">链接类型：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="oppoLinkMode" value="ptlink" <? if($_POST['oppoLinkMode']=='ptlink'){echo'checked="checked"';} ?> />
							<label for="r1" title="普通链接，请在下方输入链接地址">普通</label>
							<input type="radio" id="r3" name="oppoLinkMode" value="wwlink" <? if($_POST['oppoLinkMode']=='wwlink'){echo'checked="checked"';} ?>>
							<label for="r3" title="阿里旺旺链接，请在下方输入旺旺账号">旺旺</label>
							<input type="radio" id="r4" name="oppoLinkMode" value="mdlink" <? if($_POST['oppoLinkMode']=='mdlink'){echo'checked="checked"';} ?> />
							<label for="r4" title="锚点链接，请在下方选择需要跳转到的锚点" style="display: none;">锚点</label>
							<input type="radio" id="gr1" name="oppoLinkMode" value="gwlink" <? if($_POST['oppoLinkMode']=='gwlink'){echo'checked="checked"';} ?> />
							<label for="gr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>
						</div>
					</li>
					
					<li class="ptlink gwlink oppoLinkMode">
						<label id="gwlabel1" for="i4">链接地址：</label>
						<input id="i4" class="setinput" type="text" title="请输入图片的链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
						<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					
					<li class="wwlink oppoLinkMode">
						<label for="i4">旺旺ID：</label>
						<input id="i4" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="wangID" value="<?=$_POST['wangID']?>" />
					</li>
					<li class="wwlink oppoLinkMode">
						<label for="shuntMode">分流方式：</label>
						<select id="shuntMode" name="shuntMode">
							<option value="no" <? if($_POST['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
							<option value="yes" <? if($_POST['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
						</select>
					</li>
					
					<li class="mdlink oppoLinkMode">
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
					<li>
						<label for="oppoEffect">图片切换方式：</label>
						<select id="oppoEffect" name="oppoEffect">
							<option value="none" <? if($_POST['oppoEffect']=='none'){echo'selected="selected"';} ?>>无动画</option>
							<option value="june-box-fadein" <? if($_POST['oppoEffect']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>
							<option value="uptodown" <? if($_POST['oppoEffect']=='uptodown'){echo'selected="selected"';} ?>>从上方进入</option>
							<option value="downtoup" <? if($_POST['oppoEffect']=='downtoup'){echo'selected="selected"';} ?>>从下方进入</option>
							<option value="lefttoright" <? if($_POST['oppoEffect']=='lefttoright'){echo'selected="selected"';} ?>>从左方进入</option>
							<option value="righttoleft" <? if($_POST['oppoEffect']=='righttoleft'){echo'selected="selected"';} ?>>从右方进入</option>
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
						<label for="oppoSpeed">动画速度：</label>
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
					<li style="display: none;">
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-2">
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
	<li style="display: none;">
		<label for="pTriggerType">触发方式：</label>
		<div id="pTriggerType">
			<input type="radio" id="pTriggerType_1" name="popupConfig.pTriggerType" value="mouse" <? if($_POST['popupConfig']['pTriggerType']=='mouse'){echo'checked="checked"';} ?> />
			<label for="pTriggerType_1" title="鼠标经过触点后触发弹出层">鼠标经过</label>
			<input type="radio" id="pTriggerType_2" name="popupConfig.pTriggerType" value="click" <? if($_POST['popupConfig']['pTriggerType']=='click'){echo'checked="checked"';} ?> >
			<label for="pTriggerType_2" title="鼠标点击触点后触发弹出层">鼠标点击<i class="popsd"></i></label>
		</div>
	</li>
	<li class="triggerTypeClick" style="display:none;">
		<label for="pClickToggle">点击类型：</label>
		<div id="pClickToggle">
			<input type="radio" id="pClickToggle_2" name="popupConfig.pClickToggle" value="yes" <? if($_POST['popupConfig']['pClickToggle']=='yes'){echo'checked="checked"';} ?> >
			<label for="pClickToggle_2" title="触发之后弹出和关闭交替执行">弹出/关闭</label>
			<input type="radio" id="pClickToggle_1" name="popupConfig.pClickToggle" value="no"  <? if($_POST['popupConfig']['pClickToggle']=='no'){echo'checked="checked"';} ?> />
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
	<li class="" style="display: none;">
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
	/****
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
	****/
});
</script></div>
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
	$("#tabs").tabs({active: 0});
	$("#tForm select").selectmenu();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	
	"<?=$_POST['contentType']?>" == "imgContent" ? 
	( $(".imgContent").show(), $(".customContent").hide() ) :
	( $(".imgContent").hide(), $(".customContent").show(), $("#oppoEffect").val("june-box-fadein").trigger("change").prop("disabled", true).addClass("disabled").selectmenu("refresh") );
	$(".oppoLinkMode").hide();
	$(".ptlink").show();
	$("#rd1").off("change.forminput").on("change.forminput", "input[name='oppoLinkMode']", function() {
		var val = $(this).val();
		$(".oppoLinkMode").hide();
		$("."+val).show();
		if(val == "gwlink") {
			$("#gwlabel1").html("宝贝地址：");
		} else {
			$("#gwlabel1").html("链接地址：");
		}
	});
	$("#rd2").off("change.forminput").on("change.forminput", "input[name='contentType']", function() {
		var val = $(this).val();
		if(val == "imgContent") {
			$(".imgContent").show();
			$(".customContent").hide();
			$("#oppoEffect").prop("disabled", false).removeClass("disabled").selectmenu("refresh");
		} else {
			$(".imgContent").hide();
			$(".customContent").show();
			$("#oppoEffect").val("june-box-fadein").trigger("change").prop("disabled", true).addClass("disabled").selectmenu("refresh");
		}
	});
	$(".animselect div").click(function(){
		$(".animselect div").removeClass("active");
		$(this).addClass("active");
		$("#animType").val($(this).attr("data-val"));
	});
	
});
</script>