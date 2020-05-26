<?
$childConfig=$_POST['childConfig'];
?>
<form id="tForm" form-data="jzzb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-3">按钮设置</a></li>
		<li><a href="#tabs-4">自动关闭</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
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
						<label for="rd1">遮罩内容：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="zzcMode" value="imgContent" <? if($_POST['zzcMode']=='imgContent'){echo'checked="checked"';} ?> />
							<label for="r1">图片</label>
							<input type="radio" id="r2" name="zzcMode" value="customContent" <? if($_POST['zzcMode']=='customContent'){echo'checked="checked"';} ?> />
							<label for="r2" style="width:100px;">自定义内容</label>
						</div>
					</li>
					<li>
						<label for="rd11">显示方式：</label>
						<div id="rd11">
							<input type="radio" id="r11" name="displayMode" value="none" <? if($_POST['displayMode']=='none'){echo'checked="checked"';} ?> />
							<label for="r11" title="" style="width:85px;">立即显示</label>
							<input type="radio" id="r12" name="displayMode" value="fade" <? if($_POST['displayMode']=='fade'){echo'checked="checked"';} ?>>
							<label for="r12" title="" style="width:85px;">淡入淡出</label>
						</div>
					</li>
					<li class="zzcMode imgContent">
						<label for="jdhi_src">遮罩图片地址：</label>
						<input id="jdhi_src" class="setinput " type="text" title="半透明遮罩图片，请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="zzcSrc" value="<?=$_POST['zzcSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes"  />
						<label for="autoSize" class="chkLabel">自动高宽</label>
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
                    
					<li class="zzcMode " style="display:none;">
						<label>背景图片对齐位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
					</li>
					<li class="zzcMode " style="display:none;">
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					<li class="zzcMode customContent">
						<label for="zzcCustomContent">遮罩自定义HTML：</label>
						<textarea id="zzcCustomContent" name="zzcCustomContent"><?=stripslashes($_POST['zzcCustomContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="zzcCustomContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li>
						<label for="customHtml">被遮罩的自定义HTML：</label>
						<textarea id="customHtml" name="customHtml"><?=stripslashes($_POST['customHtml'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customHtml" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li style="display:none;">
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			
			<div id="tabs-3">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig['0']['attachID']?>" />
					<li>
						<label for="child0jdhi_src">按钮图片：</label>
						<input id="child0jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[0].zzcAttentionSrc" value="<?=$childConfig['0']['zzcAttentionSrc']?>" />
						<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($childConfig[0]['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child0autoSize" class="chkLabel">自动高宽</label>
											</li>
					<li>
						<label for="child0i11">按钮变换图片：</label>
						<input id="child0i11" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[0].zzcAttentionSrc1" value="<?=$childConfig['0']['zzcAttentionSrc1']?>" />
											</li>
					<li>
						<label for="child0_oppoEffect">变换图片时动画：</label>
						<select id="child0_oppoEffect" name="childConfig[0].oppoEffect">
                            <option value="none" <? if($childConfig['0']['oppoEffect']=='none'){echo'selected="selected"';} ?>>无动画</option>
                            <option value="june-box-fadein" <? if($childConfig['0']['oppoEffect']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>
                            <option value="uptodown" <? if($childConfig['0']['oppoEffect']=='uptodown'){echo'selected="selected"';} ?>>从上方进入</option>
                            <option value="downtoup" <? if($childConfig['0']['oppoEffect']=='downtoup'){echo'selected="selected"';} ?>>从下方进入</option>
                            <option value="lefttoright" <? if($childConfig['0']['oppoEffect']=='lefttoright'){echo'selected="selected"';} ?>>从左方进入</option>
                            <option value="righttoleft" <? if($childConfig['0']['oppoEffect']=='righttoleft'){echo'selected="selected"';} ?>>从右方进入</option>
                            <option value="rotation30" <? if($childConfig['0']['oppoEffect']=='rotation30'){echo'selected="selected"';} ?>>旋转30度</option>
                            <option value="rotation60" <? if($childConfig['0']['oppoEffect']=='rotation60'){echo'selected="selected"';} ?>>旋转60度</option>
                            <option value="rotation90" <? if($childConfig['0']['oppoEffect']=='rotation90'){echo'selected="selected"';} ?>>旋转90度</option>
                            <option value="rotation180" <? if($childConfig['0']['oppoEffect']=='rotation180'){echo'selected="selected"';} ?>>旋转180度</option>
                            <option value="rotation270" <? if($childConfig['0']['oppoEffect']=='rotation270'){echo'selected="selected"';} ?>>旋转270度</option>
                            <option value="rotation360" <? if($childConfig['0']['oppoEffect']=='rotation360'){echo'selected="selected"';} ?>>旋转360度</option>
                            <option value="rotation720" <? if($childConfig['0']['oppoEffect']=='rotation720'){echo'selected="selected"';} ?>>旋转720度</option>
						</select>
					</li>
					<li>
						<label for="child0_oppoSpeed">变换动画速度：</label>
						<select id="child0_oppoSpeed" name="childConfig[0].oppoSpeed">
							<option value="" <? if($childConfig['0']['oppoSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
                            <option value="trans01s" <? if($childConfig['0']['oppoSpeed']=='trans01s'){echo'selected="selected"';} ?>>0.1秒</option>
                            <option value="trans02s" <? if($childConfig['0']['oppoSpeed']=='trans02s'){echo'selected="selected"';} ?>>0.2秒</option>
                            <option value="trans05s" <? if($childConfig['0']['oppoSpeed']=='trans05s'){echo'selected="selected"';} ?>>0.5秒</option>
                            <option value="trans1s" <? if($childConfig['0']['oppoSpeed']=='trans1s'){echo'selected="selected"';} ?>>1秒</option>
                            <option value="trans2s" <? if($childConfig['0']['oppoSpeed']=='trans2s'){echo'selected="selected"';} ?>>2秒</option>
                            <option value="trans3s" <? if($childConfig['0']['oppoSpeed']=='trans3s'){echo'selected="selected"';} ?>>3秒</option>
                            <option value="trans4s" <? if($childConfig['0']['oppoSpeed']=='trans4s'){echo'selected="selected"';} ?>>4秒</option>
                            <option value="trans5s" <? if($childConfig['0']['oppoSpeed']=='trans5s'){echo'selected="selected"';} ?>>5秒</option>
						</select>
					</li>
					
 <?
$bgp=$childConfig['0']['imgBgp'];
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
                    <li>
						<label>按钮图片对齐位置：</label>
						<span id="child0imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="child0imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[0].imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$childConfig['0']['attachID']?>,tForm" data-isn="child0" data-isa="yes">手动调整<i class="popsd"></i></label>
					</li>
					<li>
						<label for="child0sdtzBgColor">按钮背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['0']['bgColor']?>;"></div></div></div>
							<input id="child0sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].bgColor" value="<?=$childConfig['0']['bgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0rd1">链接类型：</label>
						<div id="child0rd1">
							<input type="radio" id="child0c1" name="childConfig[0].linkMode" value="ptlink" <? if($childConfig['0']['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
							<label for="child0c1" title="">普通</label>
							<input type="radio" id="child0c3" name="childConfig[0].linkMode" value="nonelink" <? if($childConfig['0']['linkMode']=='nonelink'){echo'checked="checked"';} ?> />
							<label for="child0c3" title="">无</label>
						</div>
					</li>
					<li class="ptlink linkMode">
						<label for="child0i2">链接地址：</label>
						<input id="child0i2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig[0].href" value="<?=$childConfig['0']['href']?>" />
						<input id="child0hrefMode" class="chkBox" type="checkbox" name="childConfig[0].hrefMode" value="_blank" <? if($childConfig['0']['hrefMode']=='_blank'){echo'selected="checked"';} ?> />
						<label for="child0hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					<li>
						<label for="child0tt_i1">按钮提示文字：</label>
						<input id="child0tt_i1" class="setinput" type="text" title="鼠标经过按钮时的提示文字" junezx_vali_str="true" name="childConfig[0].tipText" value="<?=$childConfig['0']['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-4">
				<ul class="setform">
					<li>
						<label for="rd2">是否自动关闭：</label>
						<div id="rd2">
							<input type="radio" id="r3" name="countSwitch" value="yes" <? if($_POST['countSwitch']=='yes'){echo'checked="checked"';}?> />
							<label for="r3">是</label>
							<input type="radio" id="r4" name="countSwitch" value="no" <? if($_POST['countSwitch']=='no'){echo'checked="checked"';}?> />
							<label for="r4">否</label>
						</div>
					</li>
					<li>
						<label for="countSeconds">关闭秒数：</label>
						<input id="countSeconds" class="setinput" type="text" title="请输入数字，建议20以下" name="countSeconds" value="<?=$_POST['countSeconds']?>" />
					</li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">倒数数字</span><em></em></li>
					<input id="child1h1" class="setinput" type="hidden" title="" name="childConfig[1].attachID" value="<?=$childConfig['1']['attachID']?>" />
					<li>
						<label for="sdtzCharacterColor">数字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['1']['characterColor']?>;"></div></div></div>
							<input id="sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[1].characterColor" value="<?=$childConfig['1']['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColor">数字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['1']['characterBgColor']?>;"></div></div></div>
							<input id="sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[1].characterBgColor" value="<?=$childConfig['1']['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child1i2">数字大小：</label>
						<input id="child1i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[1].characterSize" value="<?=$childConfig['1']['characterSize']?>" />
					</li>
					<li>
						<label for="child1characterFont">数字字体：</label>
						<select id="child1characterFont" name="childConfig[1].characterFont">
							<option value="宋体" <? if($childConfig['1']['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($childConfig['1']['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($childConfig['1']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($childConfig['1']['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($childConfig['1']['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($childConfig['1']['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($childConfig['1']['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($childConfig['1']['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($childConfig['1']['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($childConfig['1']['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($childConfig['1']['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($childConfig['1']['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($childConfig['1']['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($childConfig['1']['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($childConfig['1']['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($childConfig['1']['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child1characterWeight">数字粗细：</label>
						<select id="child1characterWeight" name="childConfig[1].characterWeight">
							<option value="normal" <? if($childConfig['1']['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($childConfig['1']['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child1characterStyle">数字斜体：</label>
						<select id="child1characterStyle" name="childConfig[1].characterStyle">
							<option value="normal" <? if($childConfig['1']['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($childConfig['1']['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li class="inputAccording-end"></li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">倒数文字</span><em></em></li>
					<li>
						<label for="countSecondsText">秒数后缀文字：</label>
						<input id="countSecondsText" class="setinput" type="text" title="请输入秒数后缀文字内容" junezx_vali_str="true" name="countSecondsText" value="<?=$_POST['countSecondsText']?>" />
					</li>
					<li>
						<label for="count_i2">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor']?>;"></div></div></div>
							<input id="count_i2" class="setinputcolor tColorPicker" type="text" title="" name="characterColor" value="<?=$_POST['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="count_i1">文字大小：</label>
						<input id="count_i1" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$_POST['characterSize']?>" />
					</li>
					<li>
						<label for="characterFont">文字字体：</label>
						<select id="characterFont" name="characterFont">
					<option value="宋体" <? if($_POST['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($_POST['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($_POST['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="characterWeight">文字粗细：</label>
						<select id="characterWeight" name="characterWeight">
							<option value="normal" <? if($_POST['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($_POST['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="characterStyle">文字斜体：</label>
						<select id="characterStyle" name="characterStyle">
							<option value="normal" <? if($_POST['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($_POST['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li class="inputAccording-end"></li>
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
	$("#tabs").tabs({active: <?=$_POST['active']?>});
	$("#tForm select").selectmenu();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
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
	
	$(".zzcMode").hide();
	$(".<?=$_POST['zzcMode']?>").show();
	$("#rd1").children("input[name='zzcMode']").click(function() {
		var val = $(this).val();
		$(".zzcMode").hide();
		$("."+val).show();
	});
	$(".linkMode").hide();
	"<?=$childConfig['0']['linkMode']?>"=="ptlink" && $("#tabs-3 .ptlink").show();
	"<?=$childConfig['0']['linkMode']?>"=="gzlink" && $("#tabs-3 .gzlink").show();
	
	$("#child0rd1").children("input[name='childConfig[0].linkMode']").click(function() {
		var val = $(this).val();
		$("#tabs-3 .linkMode").hide();
		$("#tabs-3 ."+val).show();
	});
		$(".inputAccording").nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide(); });
	$("#tabs").off("click").on("click", ".inputAccording", function(event) {
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