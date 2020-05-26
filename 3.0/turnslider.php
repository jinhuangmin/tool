<?
$contentType=$_POST['contentType'];
?>
<form id="tForm" form-data="jfyb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">缩略图设置</a></li>
		<li><a href="#tabs-4">箭头设置</a></li>
		<li><a href="#tabs-3">基础设置</a></li>
		<li><a href="#tabs-5">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li style="height:auto;">
						<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">
                        
                        
                        <? $num=0;  foreach($contentType as $i=>$item){ $num=$num+1;  ?> 

                            
                        <li class="sliderContent" style="clear:both;height:auto;">
                            <label for="sc<?=$i?>rd1">轮播<?=$num?>轮播类型：</label>
                            <div id="sc<?=$i?>rd1" class="contentTypeDiv">
                                <input type="radio" id="sc<?=$i?>_r1" name="contentType[<?=$i?>]" value="imgContent" <? if($contentType[$i]=='imgContent'){echo'checked="checked"';} ?> />
                                <label for="sc<?=$i?>_r1" title="轮播内容为图片加链接">图片轮播</label>
                                <input type="radio" id="sc<?=$i?>_r2" name="contentType[<?=$i?>]" value="customContent" <? if($contentType[$i]=='customContent'){echo'checked="checked"';} ?> />
                                <label for="sc<?=$i?>_r2" title="轮播内容为自定义HTML">自定义轮播</label>
                            </div>
                            <ul style="padding-left:0px;list-style:none;">
                                <textarea id="sc<?=$i?>_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"><?=$_POST['thumbSet'][$i]?></textarea>
                                <textarea id="sc<?=$i?>_ho2" class="thumbSetCircleCls" name="thumbCircleSet[]" style="display:none;"><?=$_POST['thumbCircleSet'][$i]?></textarea>
                               
                                <li class="imgContent contentType" style="clear:both;padding-top:10px;">
                                    <label for="sc<?=$i?>jdhi_src">轮播图片：</label>
                                    <input id="sc<?=$i?>jdhi_src" class="setinput " type="text" title="请输入图片空间里的图片链接" junezx_vali_pic="true" name="sliderSrc[]" value="<?=$_POST['sliderSrc'][$i]?>" />
                                </li>
                                 <?
$bgp=$_POST['sliderImgBgp'][$i];
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
                                <li class=" contentType" style="display:none;">
                                    <label>轮播图片<?=$num?>对齐位置：</label>
                                    <span id="sc<?=$i?>imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
                                    <input id="sc<?=$i?>imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="sliderImgBgp[]" value="<?=$bgp?>" />
                                    <label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src" data-isn="sc<?=$i?>">手动调整<i class="popsd"></i></label>
                                </li>
                                <li class="customContent contentType" style="clear:both;height:auto;padding-top:10px;">
                                    <label for="sc<?=$i?>_i6">自定义内容：</label>
                                    <textarea id="sc<?=$i?>_i6" name="customContent[]"><?=stripslashes($_POST['customContent'][$i])?></textarea>
                                    <label type="button" class="btnLabel t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
                                </li>
                                 <li class="imgContent customContent contentType" style="clear:both;">
                                    <label for="sc<?=$i?>_i3">链接地址：</label>
                                    <input id="sc<?=$i?>_i3" class="setinput" type="text" title="请输入链接地址" junezx_vali_url="true" name="sliderHref[]" value="<?=$_POST['sliderHref'][$i]?>" />
                                </li>
                                <li>
                                    <label for="sc<?=$i?>_smallCircleMode">轮播缩略图模式：</label>
                                    <div id="sc<?=$i?>_smallCircleMode" class="smallTypeDiv">
                                        <input type="radio" id="sc<?=$i?>_sra" name="smallCircleMode[<?=$i?>]" value="no" <? if($_POST['smallCircleMode'][$i]=='no'){echo'checked="checked"';} ?> />
                                        <label for="sc<?=$i?>_sra" title="图片">图片</label>
                                        <input type="radio" id="sc<?=$i?>_srb" name="smallCircleMode[<?=$i?>]" value="yes" <? if($_POST['smallCircleMode'][$i]=='yes'){echo'checked="checked"';} ?> />
                                        <label for="sc<?=$i?>_srb" title="圆点">圆点</label>
                                        <input type="radio" id="sc<?=$i?>_src" name="smallCircleMode[<?=$i?>]" value="yes2" <? if($_POST['smallCircleMode'][$i]=='yes2'){echo'checked="checked"';} ?> />
                                        <label for="sc<?=$i?>_src" title="文字">文字</label>
                                        <input type="radio" id="sc<?=$i?>_srd" name="smallCircleMode[<?=$i?>]" value="yes1" <? if($_POST['smallCircleMode'][$i]=='yes1'){echo'checked="checked"';} ?> />
                                        <label for="sc<?=$i?>_srd" title="自定义内容">自定义</label>
                                    </div>
                                </li>
                                <li class="smallCircleMode_no imgContent contentType" style="clear:both;">
                                    <label for="sc<?=$i?>_smallImgSrcT">默认缩略图：</label>
                                    <input id="sc<?=$i?>_smallImgSrcT" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrcT[]" value="<?=$_POST['smallImgSrcT'][$i]?>" />
                                                                        </li>
                                <li class="smallCircleMode_no imgContent contentType" style="clear:both;">
                                    <label for="sc<?=$i?>_smallHoverSrcT">切换缩略图：</label>
                                    <input id="sc<?=$i?>_smallHoverSrcT" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrcT[]" value="<?=$_POST['smallHoverSrcT'][$i]?>" />
                                                                        </li>
                                <li class="smallCircleMode_no customContent contentType" style="clear:both;">
                                    <label for="sc<?=$i?>_smallImgSrc">默认缩略图：</label>
                                    <input id="sc<?=$i?>_smallImgSrc" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrc[]" value="<?=$_POST['smallImgSrc'][$i]?>" />
                                                                        </li>
                                <li class="smallCircleMode_no customContent contentType" style="clear:both;">
                                    <label for="sc<?=$i?>_smallHoverSrc">切换缩略图：</label>
                                    <input id="sc<?=$i?>_smallHoverSrc" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrc[]" value="<?=$_POST['smallHoverSrc'][$i]?>" />
                                                                        </li>
                                <li class="smallCircleMode_yes thumbCircleCommon" style="clear:both;">
                                    <label for="sc<?=$i?>smallCircleBgColor">圆点默认颜色：</label>
                                    <div class="setcolorpanel">
                                        <div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:;"></div></div></div>
                                        <input id="sc<?=$i?>smallCircleBgColor" class="setinputcolor tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="<?=$_POST['smallCircleBgColor'][$i]?>" />
                                        <button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbcircleset;smallCircleBgColor;<?=$i?>">高级设置</button>
                                    </div>
                                </li>
                                <li class="smallCircleMode_yes thumbCircleCommon" style="clear:both;">
                                    <label for="sc<?=$i?>smallCircleBgColor1">圆点切换颜色：</label>
                                    <div class="setcolorpanel">
                                        <div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['smallCircleBgColor1'][$i]?>;"></div></div></div>
                                        <input id="sc<?=$i?>smallCircleBgColor1" class="setinputcolor tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="<?=$_POST['smallCircleBgColor1'][$i]?>" />
                                    </div>
                                </li>
                                <li class="smallCircleMode_yes1" style="clear:both;height:auto;">
                                    <label for="sc<?=$i?>smallCustom">自定义默认缩略图：</label>
                                    <textarea id="sc<?=$i?>smallCustom" name="smallCustom[]"><?=stripslashes($_POST['smallCustom'][$i])?></textarea>
                                    <label type="btnLabel button" class="btnLabel t-kshbj-btn tkb1" data-target="zdy-clicked" data-zdyName="smallCustom[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
                                </li>
                                <li class="smallCircleMode_yes1" style="clear:both;height:auto;">
                                    <label for="sc<?=$i?>smallCustom1">自定义切换缩略图：</label>
                                    <textarea id="sc<?=$i?>smallCustom1" name="smallCustom1[]"><?=stripslashes($_POST['smallCustom1'][$i])?></textarea>
                                    <label type="button" class="btnLabel t-kshbj-btn tkb2" data-target="zdy-clicked" data-zdyName="smallCustom1[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
                                </li>
                                <li class="smallCircleMode_yes2 thumbCommon" style="clear:both;height:auto;">
                                    <label for="sc<?=$i?>smallCharacterContent">默认文字：</label>
                                    <textarea id="sc<?=$i?>smallCharacterContent" name="smallCharacterContent[]" style="height: 40px;"><?=stripslashes($_POST['smallCharacterContent'][$i])?></textarea>
                                    <button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallCharacterContent;<?=$i?>">样式设置</button>
                                </li>
                                <li class="smallCircleMode_yes2 thumbCommon1" style="clear:both;height:auto;">
                                    <label for="sc<?=$i?>smallCharacterContent1">切换文字：</label>
                                    <textarea id="sc<?=$i?>smallCharacterContent1" name="smallCharacterContent1[]" style="height: 40px;"><?=stripslashes($_POST['smallCharacterContent1'][$i])?></textarea>
                                </li>
                            </ul>
                        </li>

						 <? } ?>  
                        
                        </ul>
					</li>
					<li>
						<div id="contentPage" style="width:480px;margin:0 auto;">
						</div>
						<div id="slidersortbox" style="display:none;position:absolute;width:120px;background:#eee;right:65px;bottom:70px;">
							<ul id="slidersortlist">
							</ul>
							<div>
								<span id="slidersortok"><i class="ui-icon ui-icon-circle-check" style="display:inline-block;"></i> 确定</span>
								<span id="slidersortcancel"><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 取消</span>
							</div>
						</div>
					</li>
					<li>
						<div id="pageManager" style="width:480px;margin:0 auto;">
							<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一页</span>
							<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前页</span>
							<span><i class="ui-icon ui-icon-pencil" style="display:inline-block;"></i> 顺序调整</span>
						</div>
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="ii1">缩略图宽度：</label>
						<input id="ii1" class="setinput" type="text" title="统一设置缩略图的宽度" name="sWidth" value="<?=$_POST['sWidth']?>" />

					</li>
					<li>
						<label for="ii2">缩略图高度：</label>
						<input id="ii2" class="setinput" type="text" title="统一设置缩略图的高度" name="sHeight" value="<?=$_POST['sHeight']?>" />
					</li>
					<li>
						<label for="kgdSwitch">缩略图开关灯：</label>
						<select id="kgdSwitch" name="kgdSwitch">
                            <option value="white" <? if($_POST['kgdSwitch']=='white'){echo'selected="selected"';} ?>>白色开关灯</option>
                            <option value="black" <? if($_POST['kgdSwitch']=='black'){echo'selected="selected"';} ?>>黑色开关灯</option>
                            <option value="transparent" <? if($_POST['kgdSwitch']=='transparent'){echo'selected="selected"';} ?>>关闭开关灯</option>
						</select>
					</li>
					<li>
						<label for="smallImgCount">缩略图每次滚动：</label>
						<select id="smallImgCount" name="smallImgCount">
                            <?
                    for($u=1;$u<=$num;$u++){ if($_POST['smallImgCount']==$u){$ks='selected="selected"';}else{$ks='';}   echo'<option value="'.$u.'" '.$ks.'>'.$u.'个</option>';}
					?>
                        </select>
					</li>
					<li>
						<label for="smallSliderMode">缩略图滚动方式：</label>
						<select id="smallSliderMode" name="smallSliderMode">
                            <option value="scrolly" <? if($_POST['smallSliderMode']=='scrolly'){echo'selected="selected"';} ?>>上下滚动</option>
							<option value="scrollx" <? if($_POST['smallSliderMode']=='scrollx'){echo'selected="selected"';} ?>>左右滚动</option>
						</select>
					</li>
					<li>
						<label for="smallSliderSpace">缩略图间距：</label>
						<input id="smallSliderSpace" class="setinput" type="text" title="统一设置缩略图的间距" name="smallSliderSpace" value="<?=$_POST['smallSliderSpace']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
                    <li>
                        <label for="ibeli1">应用名称：</label>
                        <input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
                    </li>
					<li style="display: none;">
						<label>轮播切换模式：</label>
						<div id="rdshade1">
							<input type="radio" id="rsha1" name="shadeMode" value="no" <? if($_POST['shadeMode']=='no'||$_POST['shadeMode']=='yes'){echo'checked="checked"';} ?> />
							<label for="rsha1" title="轮播切换时使用普通方式进行" style="width:85px;">普通切换</label>
						</div>
					</li>
					<li class="shadeModeYes">
						<label>百叶窗格子数：</label>
						<select id="shadeCount" name="shadeCount">
						<?
                    for($u=5;$u<31;$u++){ if($_POST['shadeCount']==$u){$ks='selected="selected"';}else{$ks='';}   echo'<option value="'.$u.'" '.$ks.'>'.$u.'个</option>';}
					?>
						</select>
					</li>
					<li>
						<label for="sliderMode">轮播方式：</label>
						<select id="sliderMode" name="sliderMode">
							<option value="none" <? if($_POST['sliderMode']=='none'){echo'selected="selected"';} ?>>无效果</option>
					<option value="scrolly1" <? if($_POST['sliderMode']=='scrolly1'){echo'selected="selected"';} ?>>滚动-从上到下</option>
					<option value="scrolly" <? if($_POST['sliderMode']=='scrolly'){echo'selected="selected"';} ?>>滚动-从下到上</option>
					<option value="scrollx1" <? if($_POST['sliderMode']=='scrollx1'){echo'selected="selected"';} ?>>滚动-从左到右</option>
					<option value="scrollx" <? if($_POST['sliderMode']=='scrollx'){echo'selected="selected"';} ?>>滚动-从右到左</option>
					<option value="fade" <? if($_POST['sliderMode']=='fade'){echo'selected="selected"';} ?>>淡入淡出</option>
													</select>
					</li>
					<li>
						<label for="sliderAuto">自动轮播：</label>
						<select id="sliderAuto" name="sliderAuto">
							<option value="true" <? if($_POST['sliderAuto']=='true'){echo'selected="selected"';} ?>>开启自动轮播</option>
                    		<option value="false" <? if($_POST['sliderAuto']=='false'){echo'selected="selected"';} ?>>关闭自动轮播</option>
						</select>
					</li>
					<li>
						<label for="hrefMode">链接打开方式：</label>
						<select id="hrefMode" name="hrefMode">
							<option value="_self" <? if($_POST['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
							<option value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
						</select>
					</li>
					<li>
						<label for="sliderEffect">轮播特效：</label>
						<select id="sliderEffect" name="sliderEffect">
							<option value="easeOutStrong" <? if($_POST['sliderEffect']=='easeOutStrong'){echo'selected="selected"';} ?>>由快到慢 - 强</option>
                            <option value="easeInStrong" <? if($_POST['sliderEffect']=='easeInStrong'){echo'selected="selected"';} ?>>由慢到快 - 强</option>
                            <option value="easeBothStrong" <? if($_POST['sliderEffect']=='easeBothStrong'){echo'selected="selected"';} ?>>经典滑动</option>
                            <option value="elasticIn" <? if($_POST['sliderEffect']=='elasticIn'){echo'selected="selected"';} ?>>抖动变幻</option>
                            <option value="elasticOut" <? if($_POST['sliderEffect']=='elasticOut'){echo'selected="selected"';} ?>>弹性滑动</option>
                            <option value="backOut" <? if($_POST['sliderEffect']=='backOut'){echo'selected="selected"';} ?>>滑动迟缓</option>
                            <option value="bounceOut" <? if($_POST['sliderEffect']=='bounceOut'){echo'selected="selected"';} ?>>动感弹跳</option>
                            <option value="bounceBoth" <? if($_POST['sliderEffect']=='bounceBoth'){echo'selected="selected"';} ?>>动感震动</option>
                            <option value="easeIn" <? if($_POST['sliderEffect']=='easeIn'){echo'selected="selected"';} ?>>由慢到快 - 弱</option>
                            <option value="easeOut" <? if($_POST['sliderEffect']=='easeOut'){echo'selected="selected"';} ?>>由快到慢 - 弱</option>
                            <option value="easeBoth" <? if($_POST['sliderEffect']=='easeBoth'){echo'selected="selected"';} ?>>简单滚动</option>
						</select>
					</li>
					<li>
						<label for="sliderTime">轮播停留时间：</label>
						<select id="sliderTime" name="sliderTime">
							<option value="1" <? if($_POST['sliderTime']=='1'){echo'selected="selected"';} ?>>1秒</option>
                            <option value="2" <? if($_POST['sliderTime']=='2'){echo'selected="selected"';} ?>>2秒</option>
                            <option value="3" <? if($_POST['sliderTime']=='3'){echo'selected="selected"';} ?>>3秒</option>
                            <option value="4" <? if($_POST['sliderTime']=='4'){echo'selected="selected"';} ?>>4秒</option>
                            <option value="5" <? if($_POST['sliderTime']=='5'){echo'selected="selected"';} ?>>5秒</option>
                            <option value="6" <? if($_POST['sliderTime']=='6'){echo'selected="selected"';} ?>>6秒</option>
                            <option value="7" <? if($_POST['sliderTime']=='7'){echo'selected="selected"';} ?>>7秒</option>
                            <option value="8" <? if($_POST['sliderTime']=='8'){echo'selected="selected"';} ?>>8秒</option>
                            <option value="9" <? if($_POST['sliderTime']=='9'){echo'selected="selected"';} ?>>9秒</option>
                            <option value="10" <? if($_POST['sliderTime']=='10'){echo'selected="selected"';} ?>>10秒</option>
						</select>
					</li>
					<li>
						<label for="sliderSwitch">轮播切换方式：</label>
						<select id="sliderSwitch" name="sliderSwitch">
							<option value="mouse" <? if($_POST['sliderSwitch']=='mouse'){echo'selected="selected"';} ?>>鼠标经过切换</option>
							<option value="click" <? if($_POST['sliderSwitch']=='click'){echo'selected="selected"';} ?>>鼠标点击切换</option>
						</select>
					</li>
					<li>
						<label for="sliderActive">默认显示：</label>
						<select id="sliderActive" name="sliderActive">
						<?
                    for($u=1;$u<=$num;$u++){ if($_POST['sliderActive']==$u){$ks='selected="selected"';}else{$ks='';}   echo'<option value="'.$u.'" '.$ks.'>第'.$u.'页</option>';}
					?>
						</select>
					</li>
				</ul>
			</div>
			<div id="tabs-4">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$_POST['childConfig'][0]['attachID']?>" />
					<li>
						<label for="displayMode">鼠标经过主图时：</label>
						<select id="displayMode" name="displayMode">
							<option value="" <? if($_POST['displayMode']==''){echo'selected="selected"';} ?>>始终显示</option>
							<option value="june-box-fadein" <? if($_POST['displayMode']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>
						</select>
					</li>
					<li>
						<label for="css3Mode">鼠标经过主图时：</label>
						<select id="css3Mode" name="css3Mode">
							<option value="" <? if($_POST['css3Mode']==''){echo'selected="selected"';} ?>>无效果</option>
                            <option value="moveout10" <? if($_POST['css3Mode']=='moveout10'){echo'selected="selected"';} ?>>向外移动10</option>
                            <option value="moveout20" <? if($_POST['css3Mode']=='moveout20'){echo'selected="selected"';} ?>>向外移动20</option>
                            <option value="moveout30" <? if($_POST['css3Mode']=='moveout30'){echo'selected="selected"';} ?>>向外移动30</option>
                            <option value="moveout40" <? if($_POST['css3Mode']=='moveout40'){echo'selected="selected"';} ?>>向外移动40</option>
                            <option value="moveout50" <? if($_POST['css3Mode']=='moveout50'){echo'selected="selected"';} ?>>向外移动50</option>
                            <option value="moveout60" <? if($_POST['css3Mode']=='moveout60'){echo'selected="selected"';} ?>>向外移动60</option>
                            <option value="moveout70" <? if($_POST['css3Mode']=='moveout70'){echo'selected="selected"';} ?>>向外移动70</option>
                            <option value="moveout80" <? if($_POST['css3Mode']=='moveout80'){echo'selected="selected"';} ?>>向外移动80</option>
                            <option value="moveout90" <? if($_POST['css3Mode']=='moveout90'){echo'selected="selected"';} ?>>向外移动90</option>
                            <option value="moveout100" <? if($_POST['css3Mode']=='moveout100'){echo'selected="selected"';} ?>>向外移动100</option>
                            <option value="movein10" <? if($_POST['css3Mode']=='movein10'){echo'selected="selected"';} ?>>向内移动10</option>
                            <option value="movein20" <? if($_POST['css3Mode']=='movein20'){echo'selected="selected"';} ?>>向内移动20</option>
                            <option value="movein30" <? if($_POST['css3Mode']=='movein30'){echo'selected="selected"';} ?>>向内移动30</option>
                            <option value="movein40" <? if($_POST['css3Mode']=='movein40'){echo'selected="selected"';} ?>>向内移动40</option>
                            <option value="movein50" <? if($_POST['css3Mode']=='movein50'){echo'selected="selected"';} ?>>向内移动50</option>
                            <option value="movein60" <? if($_POST['css3Mode']=='movein60'){echo'selected="selected"';} ?>>向内移动60</option>
                            <option value="movein70" <? if($_POST['css3Mode']=='movein70'){echo'selected="selected"';} ?>>向内移动70</option>
                            <option value="movein80" <? if($_POST['css3Mode']=='movein80'){echo'selected="selected"';} ?>>向内移动80</option>
                            <option value="movein90" <? if($_POST['css3Mode']=='movein90'){echo'selected="selected"';} ?>>向内移动90</option>
                            <option value="movein100" <? if($_POST['css3Mode']=='movein100'){echo'selected="selected"';} ?>>向内移动100</option>
						</select>
					</li>
					<li>
						<label for="css3Speed">动画速度：</label>
						<select id="css3Speed" name="css3Speed">
							<option value="trans05s" <? if($_POST['css3Speed']=='trans05s'){echo'selected="selected"';} ?>>快速</option>
                            <option value="trans1s" <? if($_POST['css3Speed']=='trans1s'){echo'selected="selected"';} ?>>中速</option>
                            <option value="trans2s" <? if($_POST['css3Speed']=='trans2s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li>
						<label for="child0i1">左箭头图片：</label>
						<input id="child0i1" class="setinput " type="text" title="请输入左箭头的图片地址" junezx_vali_pic="true" name="childConfig[0].oSrc" value="<?=$_POST['childConfig'][0]['oSrc']?>" />
						<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($_POST['childConfig'][0]['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child0autoSize" class="chkLabel">自动高宽</label>
											</li>
					<li>
						<label for="child0i3">左箭头变换图片：</label>
						<input id="child0i3" class="setinput " type="text" title="请输入左箭头的变换图片地址" junezx_vali_pic="true" name="childConfig[0].oSrcHover" value="<?=$_POST['childConfig'][0]['oSrcHover']?>" />
											</li>
					<li>
						<label for="child0i2">右箭头图片：</label>
						<input id="child0i2" class="setinput " type="text" title="请输入右箭头的图片地址" junezx_vali_pic="true" name="childConfig[0].tSrc" value="<?=$_POST['childConfig'][0]['tSrc']?>" />
						<input id="child0autoSize1" class="chkBox" type="checkbox" name="childConfig[0].autoSize1" value="yes" <? if($_POST['childConfig'][0]['autoSize1']=='yes'){echo'checked="checked"';} ?> />
						<label for="child0autoSize1" class="chkLabel">自动高宽</label>
											</li>
					<li>
						<label for="child0i4">右箭头变换图片：</label>
						<input id="child0i4" class="setinput " type="text" title="请输入右箭头的变换图片地址" junezx_vali_pic="true" name="childConfig[0].tSrcHover" value="<?=$_POST['childConfig'][0]['tSrcHover']?>" />
											</li>
				</ul>
			</div>
						<div id="tabs-5">
				<ul class="setform">
					<li>
						<label for="kuandukz">宽度控制：</label>
						<select id="kuandukz" name="kuandukz">
							<option value="zdy" <? if($_POST['kuandukz']=='zdy'){echo'selected="selected"';} ?>>自定义宽度</option>
							<option value="qp" <? if($_POST['kuandukz']=='qp'){echo'selected="selected"';} ?>>全屏</option>
						</select>
					</li>
					<li>
						<label for="ii1">自定义宽度：</label>
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
	$(".shadeModeYes").hide();
	"<?=$_POST['shadeMode']?>" == "yes" && $(".shadeModeYes").show();
	$("#rdshade1").children("input[name='shadeMode']").on("click", function() {
		var val = $(this).val(), tempMode = $("#sliderMode").val();
		if(val == "yes") {
			if(tempMode != "scrolly1" && tempMode != "scrolly" && tempMode != "scrollx" && tempMode != "fade") {
				tempMode = "scrolly";
			}
			$("#sliderMode").selectmenu("destroy").html('<option value="scrolly1" >滚动-从上到下</option><option value="scrolly">滚动-从下到上</option><option value="scrollx">滚动-从右到左</option><option value="fade">淡入淡出</option>').val(tempMode).selectmenu();
			$(".shadeModeYes").show();
			messageForPhp("选择百叶窗轮播时，代码量将会变大，请注意不要超过模块限制。<br /><br /><br /> Ps: 设计师自定义模块代码上限为120KB，系统自定义模块代码上限为50KB");
		} else {
			$("#sliderMode").selectmenu("destroy").html('<option value="none">无效果</option><option value="scrolly1" >滚动-从上到下</option><option value="scrolly">滚动-从下到上</option><option value="scrollx1">滚动-从左到右</option><option value="scrollx">滚动-从右到左</option><option value="fade">淡入淡出</option>').val(tempMode).selectmenu();
			$(".shadeModeYes").hide();
		}
	});
	
	var defaultSmallImg = "",
		defaultSmallHover = "",
		arrDSI = defaultSmallImg.split(","),
		arrDSH = defaultSmallHover.split(",");
	$(".ui-dialog-content input,.ui-dialog-content .sliderContent > div,.ui-dialog-content textarea,.ui-dialog-content #rdshade1,.ui-dialog-content #rd_o1,.ui-dialog-content .smallTypeDiv").buttonset();
	$("#tForm select").selectmenu();
	$(".contentType").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var contentType = "<?=$_POST['contentType'][0]?>", initThumbHtml = "", smallCircleMode = "no", initThumbCircleHtml = "", initThumbConfig;
	smallCircleMode == "" && (smallCircleMode = "no");
	$(".sliderContent:eq(0)").find("."+contentType).show();
	initThumbHtml = $(".sliderContent:eq(0)").find(".thumbSetCls").html();
	initThumbCircleHtml = $(".sliderContent:eq(0)").find(".thumbSetCircleCls").html();
	if(initThumbHtml != "") {
		initThumbConfig = JSON.parse(initThumbHtml);
		$(".sliderContent:eq(0)").find(".thumbCommon").children("textarea").html(initThumbConfig.characterContent);
		if(initThumbConfig.characterMode != "text") {
			$(".sliderContent:eq(0)").find(".thumbCommon").children("textarea").addClass("disabled").prop("readonly", true);
		} else {
			$(".sliderContent:eq(0)").find(".thumbCommon").children("textarea").removeClass("disabled").prop("readonly", false);
		}
		$(".sliderContent:eq(0)").find(".thumbCommon1").children("textarea").html(initThumbConfig.characterContentHover);
		if(initThumbConfig.characterModeHover != "text") {
			$(".sliderContent:eq(0)").find(".thumbCommon1").children("textarea").addClass("disabled").prop("readonly", true);
		} else {
			$(".sliderContent:eq(0)").find(".thumbCommon1").children("textarea").removeClass("disabled").prop("readonly", false);
		}
	}
	if(initThumbCircleHtml != "") {
		$(".sliderContent:eq(0)").find(".thumbCircleCommon").find("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行圆点设置");
	} else {
		$(".sliderContent:eq(0)").find(".thumbCircleCommon").find("input").removeClass("disabled").prop("readonly", false).attr("title", "");
	}
	$("#sliderContentUl").on("click", ".contentTypeDiv input[type='radio']", function(event) {
		var val = $(this).val();
		$(this).parent().parent().find(".contentType").hide();
		$(this).parent().parent().find("."+val).show();
		var valv = $(this).parent().parent().find(".smallTypeDiv input:checked").val();
		$(this).parent().parent().find(".smallCircleMode_no, .smallCircleMode_yes, .smallCircleMode_yes1, .smallCircleMode_yes2").hide();
		if(valv != "no") {
			$(this).parent().parent().find(".smallCircleMode_"+valv).show();
		} else {
			$(this).parent().parent().find(".smallCircleMode_no."+val).show();
		}
	});
	$(".sliderContent:eq(0)").find(".smallCircleMode_no, .smallCircleMode_yes, .smallCircleMode_yes1, .smallCircleMode_yes2").hide();
	if(smallCircleMode != "no") {
		$(".sliderContent:eq(0)").find(".smallCircleMode_"+smallCircleMode).show();
	} else {
		$(".sliderContent:eq(0)").find(".smallCircleMode_no."+contentType).show();
	}
	$("#sliderContentUl").on("click", ".smallTypeDiv input[type='radio']", function(event) {
		var val = $(this).val();
		$(this).parent().parent().parent().find(".smallCircleMode_no, .smallCircleMode_yes, .smallCircleMode_yes1, .smallCircleMode_yes2").hide();
		if(val == "no") {
			var val1 = $(this).parent().parent().parent().parent().find(".contentTypeDiv input:checked").val();
			$(this).parent().parent().parent().find(".smallCircleMode_no."+val1).show();
		} else {
			$(this).parent().parent().parent().find(".smallCircleMode_"+val).show();
		}
	});
	
	setPage(document.getElementById("contentPage"),<?=$num?>, 1);
	$("#contentPage").click(function() {
		var num = parseInt($(this).children("a.on").html(), 10) - 1, 
		contentType = $(".sliderContent:eq("+num+")").find(".contentTypeDiv input:checked").val(),
		smallCircleMode = $(".sliderContent:eq("+num+")").find(".smallTypeDiv input:checked").val();
		$(".contentType").hide();
		$(".sliderContent").hide();
		$("#sliderContentUl .sliderContent:eq("+num+")").show();
		$(".sliderContent:eq("+num+")").find("."+contentType).show();
		var thumbHtml = $(".sliderContent:eq("+num+")").find(".thumbSetCls").html(), thumbConfig;
		var thumbCircleHtml = $(".sliderContent:eq("+num+")").find(".thumbSetCircleCls").html();
		
		$(".sliderContent:eq("+num+")").find(".smallCircleMode_no, .smallCircleMode_yes, .smallCircleMode_yes1, .smallCircleMode_yes2").hide();
		if(smallCircleMode != "no") {
			$(".sliderContent:eq("+num+")").find(".smallCircleMode_"+smallCircleMode).show();
		} else {
			$(".sliderContent:eq("+num+")").find(".smallCircleMode_no."+contentType).show();
		}
		if(thumbHtml != "") {
			thumbConfig = JSON.parse(thumbHtml);
			$(".sliderContent:eq("+num+")").find(".thumbCommon").children("textarea").html(thumbConfig.characterContent);
			if(thumbConfig.characterMode != "text") {
				$(".sliderContent:eq("+num+")").find(".thumbCommon").children("textarea").addClass("disabled").prop("readonly", true);
			} else {
				$(".sliderContent:eq("+num+")").find(".thumbCommon").children("textarea").removeClass("disabled").prop("readonly", false);
			}
			$(".sliderContent:eq("+num+")").find(".thumbCommon1").children("textarea").html(thumbConfig.characterContentHover);
			if(thumbConfig.characterModeHover != "text") {
				$(".sliderContent:eq("+num+")").find(".thumbCommon1").children("textarea").addClass("disabled").prop("readonly", true);
			} else {
				$(".sliderContent:eq("+num+")").find(".thumbCommon1").children("textarea").removeClass("disabled").prop("readonly", false);
			}
		}
		if(thumbCircleHtml != "") {
			$(".sliderContent:eq("+num+")").find(".thumbCircleCommon").find("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行圆点设置");
		} else {
			$(".sliderContent:eq("+num+")").find(".thumbCircleCommon").find("input").removeClass("disabled").prop("readonly", false).attr("title", "");
		}
	});
	var startNum = <?=$num?>;
	$("#pageManager").on("click", "span", function(event) {
		var t = $(this),
		num = parseInt($("#contentPage").children("a.on").html(), 10) - 1,
		len,
		index = t.index();
		if(index == 0) {
			$('<li class="sliderContent" style="clear:both;height:auto;">'+
				'<label for="sc'+startNum+'rd1">轮播'+(startNum+1)+'轮播类型：</label>'+
				'<div id="sc'+startNum+'rd1" class="contentTypeDiv">'+
					'<input type="radio" id="sc'+startNum+'_r1" name="contentType['+startNum+']" value="imgContent" checked="checked"/>'+
					'<label for="sc'+startNum+'_r1" title="轮播内容为图片加链接">图片轮播</label>'+
					'<input type="radio" id="sc'+startNum+'_r2" name="contentType['+startNum+']" value="customContent" />'+
					'<label for="sc'+startNum+'_r2" title="轮播内容为自定义HTML">自定义轮播</label>'+
				'</div>'+
				'<ul style="padding-left:0px;list-style:none;">'+
					'<textarea id="sc'+startNum+'_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"></textarea>'+
					'<textarea id="sc'+startNum+'_ho2" class="thumbSetCircleCls" name="thumbCircleSet[]" style="display:none;"></textarea>'+
					
					'<li class="imgContent contentType" style="clear:both;padding-top:10px;">'+
						'<label for="sc'+startNum+'jdhi_src">轮播图片：</label>'+
						'<input id="sc'+startNum+'jdhi_src" class="setinput " type="text" title="请输入图片空间里的图片链接" junezx_vali_pic="true" name="sliderSrc[]" value="" />'+
											'</li>'+
					'<li class=" contentType" style="display:none;">'+
						'<label>轮播图片对齐位置：</label>'+
						'<span id="sc'+startNum+'imgBgp_text" class="jDragSelect"><val>居中</val><span class="ui-icon ui-icon-triangle-1-s"></span></span>'+
						'<input id="sc'+startNum+'imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="sliderImgBgp[]" value="50% 50%" />'+
						'<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src" data-isn="sc'+startNum+'">手动调整<i class="popsd"></i></label>'+
					'</li>'+
					'<li class="customContent contentType" style="clear:both;height:auto;display:none;padding-top:10px;">'+
						'<label for="sc'+startNum+'_i6">自定义内容：</label>'+
						'<textarea id="sc'+startNum+'_i6" name="customContent[]"></textarea>'+
						'<label type="button" class="btnLabel t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
					'</li>'+
                    '<li class="imgContent customContent contentType" style="clear:both;">'+
                        '<label for="sc'+startNum+'_i3">链接地址：</label>'+
                        '<input id="sc'+startNum+'_i3" class="setinput" type="text" title="请输入链接地址" junezx_vali_url="true" name="sliderHref[]" value="" />'+
                    '</li>'+
					'<li>'+
						'<label for="sc'+startNum+'_smallCircleMode">轮播缩略图模式：</label>'+
						'<div id="sc'+startNum+'_smallCircleMode" class="smallTypeDiv">'+
							'<input type="radio" id="sc'+startNum+'_sra" name="smallCircleMode['+startNum+']" value="no" checked="checked"/>'+
							'<label for="sc'+startNum+'_sra" title="图片">图片</label>'+
							'<input type="radio" id="sc'+startNum+'_srb" name="smallCircleMode['+startNum+']" value="yes"/>'+
							'<label for="sc'+startNum+'_srb" title="圆点">圆点</label>'+
							'<input type="radio" id="sc'+startNum+'_src" name="smallCircleMode['+startNum+']" value="yes2"/>'+
							'<label for="sc'+startNum+'_src" title="文字">文字</label>'+
							'<input type="radio" id="sc'+startNum+'_srd" name="smallCircleMode['+startNum+']" value="yes1"/>'+
							'<label for="sc'+startNum+'_srd" title="自定义内容">自定义内容</label>'+
						'</div>'+
					'</li>'+
					'<li class="smallCircleMode_no imgContent contentType" style="clear:both;">'+
						'<label for="sc'+startNum+'_i4">默认缩略图：</label>'+
						'<input id="sc'+startNum+'_i4" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrcT[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" />'+
						'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrcT;'+startNum+'">高级设置</button>'+
											'</li>'+
					'<li class="smallCircleMode_no imgContent contentType" style="clear:both;">'+
						'<label for="sc'+startNum+'_i5">切换缩略图：</label>'+
						'<input id="sc'+startNum+'_i5" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrcT[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" />'+
											'</li>'+
					'<li class="smallCircleMode_no customContent contentType" style="clear:both;display:none;">'+
						'<label for="sc'+startNum+'_i7">默认缩略图：</label>'+
						'<input id="sc'+startNum+'_i7" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrc[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" />'+
						'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrc;'+startNum+'">高级设置</button>'+
											'</li>'+
					'<li class="smallCircleMode_no customContent contentType" style="clear:both;display:none;">'+
						'<label for="sc'+startNum+'_i8">切换缩略图：</label>'+
						'<input id="sc'+startNum+'_i8" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrc[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" />'+
											'</li>'+
					'<li class="smallCircleMode_yes thumbCircleCommon" style="clear:both;display:none;">'+
						'<label for="sc'+startNum+'smallCircleBgColor">圆点默认颜色：</label>'+
						'<div class="setcolorpanel">'+
							'<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
							'<input id="sc'+startNum+'smallCircleBgColor" class="setinputcolor tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="" />'+
							'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbcircleset;smallCircleBgColor;'+startNum+'">高级设置</button>'+
						'</div>'+
					'</li>'+
					'<li class="smallCircleMode_yes thumbCircleCommon" style="clear:both;display:none;">'+
						'<label for="sc'+startNum+'smallCircleBgColor1">圆点切换颜色：</label>'+
						'<div class="setcolorpanel">'+
							'<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
							'<input id="sc'+startNum+'smallCircleBgColor1" class="setinputcolor tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="" />'+
						'</div>'+
					'</li>'+
					'<li class="smallCircleMode_yes1" style="clear:both;height:auto;display:none;">'+
						'<label for="sc'+startNum+'smallCustom">自定义默认缩略图：</label>'+
						'<textarea id="sc'+startNum+'smallCustom" name="smallCustom[]"></textarea>'+
						'<label type="button" class="btnLabel t-kshbj-btn tkb1" data-target="zdy-clicked" data-zdyName="smallCustom[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
					'</li>'+
					'<li class="smallCircleMode_yes1" style="clear:both;height:auto;display:none;">'+
						'<label for="sc'+startNum+'smallCustom1">自定义切换缩略图：</label>'+
						'<textarea id="sc'+startNum+'smallCustom1" name="smallCustom1[]"></textarea>'+
						'<label type="button" class="btnLabel t-kshbj-btn tkb2" data-target="zdy-clicked" data-zdyName="smallCustom1[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
					'</li>'+
					'<li class="smallCircleMode_yes2 thumbCommon" style="clear:both;height:auto;display:none;">'+
						'<label for="sc'+startNum+'smallCharacterContent">默认文字：</label>'+
						'<textarea id="sc'+startNum+'smallCharacterContent" name="smallCharacterContent[]" style="height: 40px;"></textarea>'+
						'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallCharacterContent;'+startNum+'">样式设置</button>'+
					'</li>'+
					'<li class="smallCircleMode_yes2 thumbCommon1" style="clear:both;height:auto;display:none;">'+
						'<label for="sc'+startNum+'smallCharacterContent1">切换文字：</label>'+
						'<textarea id="sc'+startNum+'smallCharacterContent1" name="smallCharacterContent1[]" style="height: 40px;"></textarea>'+
					'</li>'+
				'</ul>'+
			'</li>').appendTo($("#sliderContentUl"));
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				var ul = $(this).children("ul");
				ul.children("label:eq(0)").html("链接地址：");
				ul.children("label:eq(1)").html("轮播图片：");
				ul.children("label:eq(2)").html("轮播图片对齐位置：");
				ul.children("label:eq(3)").html("自定义内容：");
				ul.children("label:eq(4)").html("轮播缩略图模式：");
				ul.children("label:eq(5)").html("默认缩略图：");
				ul.children("label:eq(6)").html("切换缩略图：");
				ul.children("label:eq(7)").html("默认缩略图：");
				ul.children("label:eq(8)").html("切换缩略图：");
				ul.children("label:eq(9)").html("圆点默认颜色：");
				ul.children("label:eq(10)").html("圆点切换颜色：");
				ul.children("label:eq(11)").html("自定义默认缩略图：");
				ul.children("label:eq(12)").html("自定义切换缩略图：");
				ul.children("label:eq(13)").html("默认文字：");
				ul.children("label:eq(14)").html("切换文字：");
			});
			$(".ui-dialog-content input,.ui-dialog-content .sliderContent > div,.ui-dialog-content textarea,.ui-dialog-content #rdshade1,.ui-dialog-content #rd_o1,.ui-dialog-content .smallTypeDiv").buttonset();
			len = $("#sliderContentUl").children("li").length;
			$("#contentPage").html("");
			setPage(document.getElementById("contentPage"), len, len);
			$("#contentPage").children("a.on").trigger("click");
			startNum++;
		} else if(index == 1) {
			if($("#sliderContentUl").children("li").length == 1) {
				return;
			}
			$("#sliderContentUl").children("li.sliderContent:eq("+num+")").remove();
			
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				var ul = $(this).children("ul");
				ul.children("label:eq(0)").html("链接地址：");
				ul.children("label:eq(1)").html("轮播图片：");
				ul.children("label:eq(2)").html("轮播图片对齐位置：");
				ul.children("label:eq(3)").html("自定义内容：");
				ul.children("label:eq(4)").html("轮播缩略图模式：");
				ul.children("label:eq(5)").html("默认缩略图：");
				ul.children("label:eq(6)").html("切换缩略图：");
				ul.children("label:eq(7)").html("默认缩略图：");
				ul.children("label:eq(8)").html("切换缩略图：");
				ul.children("label:eq(9)").html("圆点默认颜色：");
				ul.children("label:eq(10)").html("圆点切换颜色：");
				ul.children("label:eq(11)").html("自定义默认缩略图：");
				ul.children("label:eq(12)").html("自定义切换缩略图：");
				ul.children("label:eq(13)").html("默认文字：");
				ul.children("label:eq(14)").html("切换文字：");
			});
			len = $("#sliderContentUl").children("li").length;
			if(num+1 > len) { num = len - 1;}
			$("#contentPage").html("");
			setPage(document.getElementById("contentPage"), len, num+1);
			$("#contentPage").children("a.on").trigger("click");
		} else if(index == 2) {
			$("#slidersortbox").show();
			var c = $("#sliderContentUl"), cl = c.children("li").length;
			$("#slidersortbox").children("ul").html("");
			for(var i = 0;i<cl;i++) {
				$("#slidersortbox").children("ul").append('<li data-sort="'+i+'">轮播页'+(i+1)+'</li>');
			}
		}
		var contentlength = $(".sliderContent").length, tempVal = $("#sliderActive").val();
		$("#sliderActive").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if(tempVal == (i+1)) {selected = ' selected="selected"'}
			$("#sliderActive").append('<option '+selected+' value="'+(i+1)+'">第'+(i+1)+'页</option>');
		}
		$("#sliderActive").selectmenu();
		$("#smallImgCount").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if(tempVal == (i+1)) {selected = ' selected="selected"'}
			$("#smallImgCount").append('<option '+selected+' value="'+(i+1)+'">'+(i+1)+'个</option>');
		}
		$("#smallImgCount").selectmenu();
	});
	
	$("#slidersortok").on("click", function() {
		var arr = [];
		$("#slidersortbox").children("ul").children("li").each(function() {
			var _t = $(this), sort = _t.attr("data-sort");
			arr.push(sort);
		});
		var c = $("#sliderContentUl");
		var tempDom = $("<div></div>");
		for(var i = 0;i<arr.length; i++) {
			$("#sliderContentUl").children("li:eq("+arr[i]+")").children("div:eq(0)").find("input").attr("name", "contentType["+i+"]");
			var tempClone = $("#sliderContentUl").children("li:eq("+arr[i]+")").clone();
			tempClone.appendTo(tempDom);
		}
		$("#sliderContentUl").html(tempDom.html());
		$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
			var ul = $(this).children("ul");
			ul.children("label:eq(0)").html("链接地址：");
			ul.children("label:eq(1)").html("轮播图片：");
			ul.children("label:eq(2)").html("轮播图片对齐位置：");
			ul.children("label:eq(3)").html("自定义内容：");
			ul.children("label:eq(4)").html("轮播缩略图模式：");
			ul.children("label:eq(5)").html("默认缩略图：");
			ul.children("label:eq(6)").html("切换缩略图：");
			ul.children("label:eq(7)").html("默认缩略图：");
			ul.children("label:eq(8)").html("切换缩略图：");
			ul.children("label:eq(9)").html("圆点默认颜色：");
			ul.children("label:eq(10)").html("圆点切换颜色：");
			ul.children("label:eq(11)").html("自定义默认缩略图：");
			ul.children("label:eq(12)").html("自定义切换缩略图：");
			ul.children("label:eq(13)").html("默认文字：");
			ul.children("label:eq(14)").html("切换文字：");
		});
		$("#contentPage").children("a.on").trigger("click");
		$("#slidersortbox").hide();
	});
			
	$("#slidersortcancel").on("click", function() {
		$("#slidersortbox").hide();
	});
	
	$("#slidersortlist").sortable({
		placeholder: "ui-state-highlight"
	}).disableSelection();
});
</script>