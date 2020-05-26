<?
$data=$_POST;
$sliderSrc=$data['sliderSrc'];
$sliderHref=$data['sliderHref'];
$smallImgSrcT=$data['smallImgSrcT'];
$smallHoverSrcT=$data['smallHoverSrcT'];
$smallImgSrc=$data['smallImgSrc'];
$smallHoverSrc=$data['smallHoverSrc'];
$customContent=$data['customContent'];
$contentType=$data['contentType'];
$childConfigx=$data['childConfig'];
$smallCircleMode=$data['smallCircleMode'];
$smallCustom=$data['smallCustom'];
$smallCustom1=$data['smallCustom1'];
$thumbSet=$data['thumbSet'];
$thumbCircleSet=$data['thumbCircleSet'];
$smallCircleBgColor=$data['smallCircleBgColor'];
$smallCircleBgColor1=$data['smallCircleBgColor1'];

$childConfig=$childConfigx['0'];
?>
<form id="tForm" form-data="jfsb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">缩略图设置</a></li>
		<li><a href="#tabs-3">箭头设置</a></li>
		<li><a href="#tabs-4">高级设置</a></li>
		<li><a href="#tabs-5">样式设置</a></li>
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
				<input id="h1" type="hidden" name="defaultSmallImg" value="<?=$data['defaultSmallImg']?>" />
				<input id="h2" type="hidden" name="defaultSmallHover" value="<?=$data['defaultSmallHover']?>" />
			</li>
			<li style="height:auto;">
				<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">
                 <? $num=0;  foreach($contentType as $i=>$item){ $num=$num+1;  ?>                      
                  <li class="sliderContent" style="clear:both;height:auto;">
						<label for="sc<?=$i?>rd1">轮播内容<?=$num?>：</label>
						<div id="sc<?=$i?>rd1">
							<input type="radio" id="sc<?=$i?>_r1" name="contentType[<?=$i?>]" value="imgContent" <? if($contentType[$i]=='imgContent'){echo'checked="checked"';} ?> />
							<label for="sc<?=$i?>_r1" title="轮播内容为图片加链接" style="width:80px;">图片轮播</label>
							<input type="radio" id="sc<?=$i?>_r2" name="contentType[<?=$i?>]" value="customContent" <? if($contentType[$i]=='customContent'){echo'checked="checked"';} ?> />
							<label for="sc<?=$i?>_r2" title="轮播内容为自定义HTML" style="width:100px;">自定义轮播</label>
						</div>
						<ul style="padding-left:0px;list-style:none;">
							<textarea id="sc<?=$i?>_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"><?=$thumbSet[$i]?></textarea>
							<textarea id="sc<?=$i?>_ho2" class="thumbSetCircleCls" name="thumbCircleSet[]" style="display:none;"><?=$thumbCircleSet[$i]?></textarea>
							<li class="imgContent contentType" style="clear:both;padding-top:10px;">
								<label for="sc<?=$i?>_i2">轮播图片：</label>
								<input id="sc<?=$i?>_i2" class="setinput " type="text" title="请输入图片空间里的图片链接" name="sliderSrc[]" value="<?=$sliderSrc[$i]?>" />
							</li>
							<li class="imgContent contentType" style="clear:both;">
								<label for="sc<?=$i?>_i3">链接地址：</label>
								<input id="sc<?=$i?>_i3" class="setinput" type="text" title="请输入图片链接" name="sliderHref[]" value="<?=$sliderHref[$i]?>" />
							</li>
							<li class="customContent contentType" style="clear:both;height:auto;padding-top:10px;">
								<label for="sc<?=$i?>_i6">自定义内容：</label>
								<textarea id="sc<?=$i?>_i6" name="customContent[]"><?=stripslashes($customContent[$i])?></textarea>
								<button type="button" class="t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
							</li>
							<li>
								<label for="sc<?=$i?>_smallCircleMode">缩略图模式：</label>
								<select id="sc<?=$i?>_smallCircleMode" name="smallCircleMode[<?=$i?>]">
                                    <option value="no" <? if($smallCircleMode[$i]=='no'){echo'selected="selected"';} ?>>普通缩略图</option>
									<option value="yes" <? if($smallCircleMode[$i]=='yes'){echo'selected="selected"';} ?>>圆点触点</option>
                                   <!-- <option value="yes1" <? if($smallCircleMode[$i]=='yes1'){echo'selected="selected"';} ?>>自定义缩略图</option> -->
								</select>
							</li>
							<li class="smallCircleModeNo imgContent contentType thumbCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallImgSrcT">默认缩略图：</label>
								<input id="sc<?=$i?>_smallImgSrcT" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrcT[]" value="<?=$smallImgSrcT[$i]?>" />
								<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrcT;<?=$i?>">高级设置</button>
							</li>
							<li class="smallCircleModeNo imgContent contentType thumbCommon1" style="clear:both;">
								<label for="sc<?=$i?>_smallHoverSrcT">切换缩略图：</label>
								<input id="sc<?=$i?>_smallHoverSrcT" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrcT[]" value="<?=$smallHoverSrcT[$i]?>" />
							</li>
							<li class="smallCircleModeNo customContent contentType thumbCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallImgSrc">默认缩略图：</label>
								<input id="sc<?=$i?>_smallImgSrc" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrc[]" value="<?=$smallImgSrc[$i]?>" />
								<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrc;<?=$i?>">高级设置</button>
							</li>
							<li class="smallCircleModeNo customContent contentType thumbCommon1" style="clear:both;">
								<label for="sc<?=$i?>_smallHoverSrc">切换缩略图：</label>
								<input id="sc<?=$i?>_smallHoverSrc" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrc[]" value="<?=$smallHoverSrc[$i]?>" />
							</li>
							<li class="smallCircleMode thumbCircleCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallCircleBgColor">圆点默认颜色：</label>
								<input id="sc<?=$i?>_smallCircleBgColor" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="<?=$smallCircleBgColor[$i]?>" />
							</li>
							<li class="smallCircleMode thumbCircleCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallCircleBgColor1">圆点切换颜色：</label>
								<input id="sc<?=$i?>_smallCircleBgColor1" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="<?=$smallCircleBgColor1[$i]?>" />
							</li>
							<li class="smallCircleModeYes1" style="clear:both;height:auto;">
								<label for="sc<?=$i?>smallCustom">自定义默认缩略图：</label>
								<textarea id="sc<?=$i?>smallCustom" name="smallCustom[]"></textarea>
								<button type="button" class="t-kshbj-btn tkb1" data-target="zdy-clicked" data-zdyName="smallCustom[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
							</li>
							<li class="smallCircleModeYes1" style="clear:both;height:auto;">
								<label for="sc<?=$i?>smallCustom1">自定义切换缩略图：</label>
								<textarea id="sc<?=$i?>smallCustom1" name="smallCustom1[]"></textarea>
								<button type="button" class="t-kshbj-btn tkb2" data-target="zdy-clicked" data-zdyName="smallCustom1[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
							</li>
						</ul>
					</li>
				 <? } ?>	
                </ul>
			</li>
			<li>
				<div id="contentPage" style="width:500px;margin:0 auto;">
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
				<div id="pageManager" style="width:500px;margin:0 auto;">
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
				<label for="sliderSmallImg">是否显示缩略图：</label>
				<select id="sliderSmallImg" name="sliderSmallImg">
					<option value="yes" <? if($data['sliderSmallImg']=='yes'){echo'selected="selected"';} ?>>显示</option>
					<option value="no" <? if($data['sliderSmallImg']=='no'){echo'selected="selected"';} ?>>不显示</option>
				</select>
			</li>
			<!--<li>
				<label for="smallAutoSize">本次设置后缩略图：</label>
				<select id="smallAutoSize" name="smallAutoSize">
					<option value="yes">自动拉伸为图片尺寸</option>
					<option value="no"  if($smallAutoSize == "no") {echo 'selected="selected"';}>不自动拉伸为图片尺寸</option>
				</select>
			</li>-->
			<li>
				<label for="ii1">缩略图宽度：</label>
				<input id="ii1" class="setinput" type="text" title="统一设置缩略图的宽度" name="sWidth" value="<?=$data['sWidth']?>" />
				<!--<input id="smallAutoSize" class="chkBox" type="checkbox" name="smallAutoSize" value="yes"  />
				<label for="smallAutoSize" class="chkLabel">自动高宽</label>-->
			</li>
			<li>
				<label for="ii2">缩略图高度：</label>
				<input id="ii2" class="setinput" type="text" title="统一设置缩略图的高度" name="sHeight" value="<?=$data['sHeight']?>" />
			</li>
			<li>
				<label for="kgdSwitch">缩略图开关灯：</label>
				<select id="kgdSwitch" name="kgdSwitch">
					<option value="white" <? if($data['kgdSwitch']=='white'){echo'selected="selected"';} ?>>白色开关灯</option>
					<option value="black" <? if($data['kgdSwitch']=='black'){echo'selected="selected"';} ?>>黑色开关灯</option>
					<option value="transparent" <? if($data['kgdSwitch']=='transparent'){echo'selected="selected"';} ?>>关闭开关灯</option>
				</select>
			</li>
			<li>
				<label for="smallShowMode">缩略图显示方式：</label>
				<select id="smallShowMode" name="smallShowMode">
					<option value="" <? if($data['smallShowMode']==''){echo'selected="selected"';} ?>>超出大图部分显示</option>
					<option value="outbox" <? if($data['smallShowMode']=='outbox'){echo'selected="selected"';} ?>>超出大图部分裁掉</option>
				</select>
			</li>
			<li>
				<label for="smallShowCss">鼠标经过特效：</label>
				<select id="smallShowCss" name="smallShowCss">
					<option value="" <? if($data['smallShowCss']==''){echo'selected="selected"';} ?>>无特效</option>
					<option value="b-1-lx10" <? if($data['smallShowCss']=='b-1-lx10'){echo'selected="selected"';} ?>>缩略图整体向左移动10px</option>
					<option value="b-1-lx20" <? if($data['smallShowCss']=='b-1-lx20'){echo'selected="selected"';} ?>>缩略图整体向左移动20px</option>
					<option value="b-1-lx30" <? if($data['smallShowCss']=='b-1-lx30'){echo'selected="selected"';} ?>>缩略图整体向左移动30px</option>
					<option value="b-1-lx40" <? if($data['smallShowCss']=='b-1-lx40'){echo'selected="selected"';} ?>>缩略图整体向左移动40px</option>
					<option value="b-1-lx50" <? if($data['smallShowCss']=='b-1-lx50'){echo'selected="selected"';} ?>>缩略图整体向左移动50px</option>
					<option value="b-1-lx80" <? if($data['smallShowCss']=='b-1-lx80'){echo'selected="selected"';} ?>>缩略图整体向左移动80px</option>
					<option value="b-1-lx100" <? if($data['smallShowCss']=='b-1-lx100'){echo'selected="selected"';} ?>>缩略图整体向左移动100px</option>
					<option value="b-1-lx120" <? if($data['smallShowCss']=='b-1-lx120'){echo'selected="selected"';} ?>>缩略图整体向左移动120px</option>
					<option value="b-1-rx10" <? if($data['smallShowCss']=='b-1-rx10'){echo'selected="selected"';} ?>>缩略图整体向右移动10px</option>
					<option value="b-1-rx20" <? if($data['smallShowCss']=='b-1-rx20'){echo'selected="selected"';} ?>>缩略图整体向右移动20px</option>
					<option value="b-1-rx30" <? if($data['smallShowCss']=='b-1-rx30'){echo'selected="selected"';} ?>>缩略图整体向右移动30px</option>
					<option value="b-1-rx40" <? if($data['smallShowCss']=='b-1-rx40'){echo'selected="selected"';} ?>>缩略图整体向右移动40px</option>
					<option value="b-1-rx50" <? if($data['smallShowCss']=='b-1-rx50'){echo'selected="selected"';} ?>>缩略图整体向右移动50px</option>
					<option value="b-1-rx80" <? if($data['smallShowCss']=='b-1-rx80'){echo'selected="selected"';} ?>>缩略图整体向右移动80px</option>
					<option value="b-1-rx100" <? if($data['smallShowCss']=='b-1-rx100'){echo'selected="selected"';} ?>>缩略图整体向右移动100px</option>
					<option value="b-1-rx120" <? if($data['smallShowCss']=='b-1-rx120'){echo'selected="selected"';} ?>>缩略图整体向右移动120px</option>
					<option value="b-1-uy10" <? if($data['smallShowCss']=='b-1-uy10'){echo'selected="selected"';} ?>>缩略图整体向上移动10px</option>
					<option value="b-1-uy20" <? if($data['smallShowCss']=='b-1-uy20'){echo'selected="selected"';} ?>>缩略图整体向上移动20px</option>
					<option value="b-1-uy50" <? if($data['smallShowCss']=='b-1-uy50'){echo'selected="selected"';} ?>>缩略图整体向上移动50px</option>
					<option value="b-1-uy80" <? if($data['smallShowCss']=='b-1-uy80'){echo'selected="selected"';} ?>>缩略图整体向上移动80px</option>
					<option value="b-1-uy100" <? if($data['smallShowCss']=='b-1-uy100'){echo'selected="selected"';} ?>>缩略图整体向上移动100px</option>
					<option value="b-1-uy120" <? if($data['smallShowCss']=='b-1-uy120'){echo'selected="selected"';} ?>>缩略图整体向上移动120px</option>
					<option value="b-1-dy10" <? if($data['smallShowCss']=='b-1-dy10'){echo'selected="selected"';} ?>>缩略图整体向下移动10px</option>
					<option value="b-1-dy20" <? if($data['smallShowCss']=='b-1-dy20'){echo'selected="selected"';} ?>>缩略图整体向下移动20px</option>
					<option value="b-1-dy50" <? if($data['smallShowCss']=='b-1-dy50'){echo'selected="selected"';} ?>>缩略图整体向下移动50px</option>
					<option value="b-1-dy80" <? if($data['smallShowCss']=='b-1-dy80'){echo'selected="selected"';} ?>>缩略图整体向下移动80px</option>
					<option value="b-1-dy100" <? if($data['smallShowCss']=='b-1-dy100'){echo'selected="selected"';} ?>>缩略图整体向下移动100px</option>
					<option value="b-1-dy120" <? if($data['smallShowCss']=='b-1-dy120'){echo'selected="selected"';} ?>>缩略图整体向下移动120px</option>
				</select>
			</li>
			<li>
				<label for="smallShowSpeed">缩略图特效速度：</label>
				<select id="smallShowSpeed" name="smallShowSpeed">
					<option value="" <? if($data['smallShowSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
					<option value="trans01s" <? if($data['smallShowSpeed']=='trans01s'){echo'selected="selected"';} ?>>0.1秒</option>
					<option value="trans02s" <? if($data['smallShowSpeed']=='trans02s'){echo'selected="selected"';} ?>>0.2秒</option>
					<option value="trans05s" <? if($data['smallShowSpeed']=='trans05s'){echo'selected="selected"';} ?>>0.5秒</option>
					<option value="trans1s" <? if($data['smallShowSpeed']=='trans1s'){echo'selected="selected"';} ?>>1秒</option>
					<option value="trans2s" <? if($data['smallShowSpeed']=='trans2s'){echo'selected="selected"';} ?>>2秒</option>
					<option value="trans3s" <? if($data['smallShowSpeed']=='trans3s'){echo'selected="selected"';} ?>>3秒</option>
					<option value="trans4s" <? if($data['smallShowSpeed']=='trans4s'){echo'selected="selected"';} ?>>4秒</option>
					<option value="trans5s" <? if($data['smallShowSpeed']=='trans5s'){echo'selected="selected"';} ?>>5秒</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-3">
		<ul class="setform">
			<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig['attachID']?>" />
			<li>
				<label for="sliderArrow">轮播箭头：</label>
				<select id="sliderArrow" name="sliderArrow">
					<option value="no" <? if($data['sliderArrow']=='no'){echo'selected="selected"';} ?>>无</option>
					<option value="yes" <? if($data['sliderArrow']=='yes'){echo'selected="selected"';} ?>>有</option>
				</select>
			</li>
			<li>
				<label for="displayMode">鼠标经过主图时：</label>
				<select id="displayMode" name="displayMode">
					<option value="" <? if($data['displayMode']==''){echo'selected="selected"';} ?>>始终显示</option>
					<option value="june-box-fadein" <? if($data['displayMode']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>
				</select>
			</li>
			<li>
				<label for="css3Mode">鼠标经过主图时：</label>
				<select id="css3Mode" name="css3Mode">
					<option value="" selected="selected">无效果</option>
						<option value="" selected="selected">无效果</option>
					<option value="moveout10" <? if($data['css3Mode']=='moveout10'){echo'selected="selected"';} ?>>向外移动10</option>
					<option value="moveout20" <? if($data['css3Mode']=='moveout20'){echo'selected="selected"';} ?>>向外移动20</option>
					<option value="moveout30" <? if($data['css3Mode']=='moveout30'){echo'selected="selected"';} ?>>向外移动30</option>
					<option value="moveout40" <? if($data['css3Mode']=='moveout40'){echo'selected="selected"';} ?>>向外移动40</option>
					<option value="moveout50" <? if($data['css3Mode']=='moveout50'){echo'selected="selected"';} ?>>向外移动50</option>
					<option value="moveout60" <? if($data['css3Mode']=='moveout60'){echo'selected="selected"';} ?>>向外移动60</option>
					<option value="moveout70" <? if($data['css3Mode']=='moveout70'){echo'selected="selected"';} ?>>向外移动70</option>
					<option value="moveout80" <? if($data['css3Mode']=='moveout80'){echo'selected="selected"';} ?>>向外移动80</option>
					<option value="moveout90" <? if($data['css3Mode']=='moveout90'){echo'selected="selected"';} ?>>向外移动90</option>
					<option value="moveout100" <? if($data['css3Mode']=='moveout100'){echo'selected="selected"';} ?>>向外移动100</option>
					<option value="movein10" <? if($data['css3Mode']=='movein10'){echo'selected="selected"';} ?>>向内移动10</option>
					<option value="movein20" <? if($data['css3Mode']=='movein20'){echo'selected="selected"';} ?>>向内移动20</option>
					<option value="movein30" <? if($data['css3Mode']=='movein30'){echo'selected="selected"';} ?>>向内移动30</option>
					<option value="movein40" <? if($data['css3Mode']=='movein40'){echo'selected="selected"';} ?>>向内移动40</option>
					<option value="movein50" <? if($data['css3Mode']=='movein50'){echo'selected="selected"';} ?>>向内移动50</option>
					<option value="movein60" <? if($data['css3Mode']=='movein60'){echo'selected="selected"';} ?>>向内移动60</option>
					<option value="movein70" <? if($data['css3Mode']=='movein70'){echo'selected="selected"';} ?>>向内移动70</option>
					<option value="movein80" <? if($data['css3Mode']=='movein80'){echo'selected="selected"';} ?>>向内移动80</option>
					<option value="movein90" <? if($data['css3Mode']=='movein90'){echo'selected="selected"';} ?>>向内移动90</option>
					<option value="movein100" <? if($data['css3Mode']=='movein100'){echo'selected="selected"';} ?>>向内移动100</option>
				</select>
			</li>
			<li>
				<label for="css3Speed">动画速度：</label>
				<select id="css3Speed" name="css3Speed">
					<option value="trans05s" <? if($data['css3Speed']=='trans05s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans1s" <? if($data['css3Speed']=='trans1s'){echo'selected="selected"';} ?>>中速</option>
					<option value="trans2s" <? if($data['css3Speed']=='trans2s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
            <li>
				<label for="child0i1">左箭头图片：</label>
				<input id="child0i1" class="setinput" type="text" title="请输入左箭头的图片地址" name="childConfig[0].oSrc" value="<?=$childConfig['oSrc']?>" />
				<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($childConfig['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child0autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="child0i3">左箭头变换图片：</label>
				<input id="child0i3" class="setinput" type="text" title="请输入左箭头的变换图片地址" name="childConfig[0].oSrcHover" value="<?=$childConfig['oSrcHover']?>" />
			</li>
			<li>
				<label for="child0i2">右箭头图片：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入左箭头的图片地址" name="childConfig[0].tSrc" value="<?=$childConfig['tSrc']?>" />
				<input id="child0autoSize1" class="chkBox" type="checkbox" name="childConfig[0].autoSize1" value="yes" <? if($childConfig['autoSize1']=='yes'){echo'checked="checked"';} ?> />
				<label for="child0autoSize1" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="child0i4">右箭头变换图片：</label>
				<input id="child0i4" class="setinput" type="text" title="请输入右箭头的变换图片地址" name="childConfig[0].tSrcHover" value="<?=$childConfig['tSrcHover']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-4">
		<ul class="setform">
			<li>
				<label>轮播切换模式：</label>
				<div id="rdshade1">
					<input type="radio" id="rsha1" name="shadeMode" value="no" <? if($data['shadeMode']=='no'){echo'checked="checked"';} ?> />
					<label for="rsha1" title="轮播切换时使用普通方式进行" style="width:85px;">普通切换</label>
					<input type="radio" id="rsha2" name="shadeMode" value="yes" <? if($data['shadeMode']=='yes'){echo'checked="checked"';} ?> />
					<label for="rsha2" title="轮播切换时使用百叶窗的方式进行" style="width:100px;">百叶窗切换</label>
				</div>
			</li>
			<li class="shadeModeYes">
				<label>百叶窗格子数：</label>
				<select id="shadeCount" name="shadeCount">
					<?  for($i=5;$i<31;$i++){ $stt=$data['shadeCount']==$i?'selected="selected"':'';
						   echo'<option value="'.$i.'" '.$stt.'>'.$i.'</option>';
						   }  ?> 		
                    </select>
			</li>
			<li style="display:none;">
				<span style="margin-left:170px;color:#990000;">选择百叶窗轮播时，格子数</span>
			</li>
			<li>
				<label for="sliderMode">轮播方式：</label>
				<select id="sliderMode" name="sliderMode">
					<option value="none" <? if($data['sliderMode']=='none'){echo'selected="selected"';} ?>>无效果</option>
					<option value="scrolly1" <? if($data['sliderMode']=='scrolly1'){echo'selected="selected"';} ?>>滚动-从上到下</option>
					<option value="scrolly" <? if($data['sliderMode']=='scrolly'){echo'selected="selected"';} ?>>滚动-从下到上</option>
					<option value="scrollx1" <? if($data['sliderMode']=='scrollx1'){echo'selected="selected"';} ?>>滚动-从左到右</option>
					<option value="scrollx" <? if($data['sliderMode']=='scrollx'){echo'selected="selected"';} ?>>滚动-从右到左</option>
					<option value="fade" <? if($data['sliderMode']=='fade'){echo'selected="selected"';} ?>>淡入淡出</option>
				</select>
			</li>
            <li>
				<label for="sliderAuto">自动轮播：</label>
				<select id="sliderAuto" name="sliderAuto">
                    <option value="true" <? if($data['sliderAuto']=='true'){echo'selected="selected"';} ?>>开启自动轮播</option>
                    <option value="false" <? if($data['sliderAuto']=='false'){echo'selected="selected"';} ?>>关闭自动轮播</option>
				</select>
			</li>
			<li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			<li>
				<label for="sliderEffect">轮播特效：</label>
				<select id="sliderEffect" name="sliderEffect">
					<option value="easeOutStrong" <? if($data['sliderEffect']=='easeOutStrong'){echo'selected="selected"';} ?>>由快到慢 - 强</option>
					<option value="easeInStrong" <? if($data['sliderEffect']=='easeInStrong'){echo'selected="selected"';} ?>>由慢到快 - 强</option>
					<option value="easeBothStrong" <? if($data['sliderEffect']=='easeBothStrong'){echo'selected="selected"';} ?>>经典滑动</option>
					<option value="elasticIn" <? if($data['sliderEffect']=='elasticIn'){echo'selected="selected"';} ?>>抖动变幻</option>
					<option value="elasticOut" <? if($data['sliderEffect']=='elasticOut'){echo'selected="selected"';} ?>>弹性滑动</option>
					<option value="backOut" <? if($data['sliderEffect']=='backOut'){echo'selected="selected"';} ?>>滑动迟缓</option>
					<option value="bounceOut" <? if($data['sliderEffect']=='bounceOut'){echo'selected="selected"';} ?>>动感弹跳</option>
					<option value="bounceBoth" <? if($data['sliderEffect']=='bounceBoth'){echo'selected="selected"';} ?>>动感震动</option>
					<option value="easeIn" <? if($data['sliderEffect']=='easeIn'){echo'selected="selected"';} ?>>由慢到快 - 弱</option>
					<option value="easeOut" <? if($data['sliderEffect']=='easeOut'){echo'selected="selected"';} ?>>由快到慢 - 弱</option>
					<option value="easeBoth" <? if($data['sliderEffect']=='easeBoth'){echo'selected="selected"';} ?>>简单滚动</option>
				</select>
			</li>
			<li>
				<label for="sliderTime">轮播停留时间：</label>
				<select id="sliderTime" name="sliderTime">
					<option value="1" <? if($data['sliderTime']=='1'){echo'selected="selected"';} ?>>1秒</option>
					<option value="2" <? if($data['sliderTime']=='2'){echo'selected="selected"';} ?>>2秒</option>
					<option value="3" <? if($data['sliderTime']=='3'){echo'selected="selected"';} ?>>3秒</option>
					<option value="4" <? if($data['sliderTime']=='4'){echo'selected="selected"';} ?>>4秒</option>
					<option value="5" <? if($data['sliderTime']=='5'){echo'selected="selected"';} ?>>5秒</option>
					<option value="6" <? if($data['sliderTime']=='6'){echo'selected="selected"';} ?>>6秒</option>
					<option value="7" <? if($data['sliderTime']=='7'){echo'selected="selected"';} ?>>7秒</option>
					<option value="8" <? if($data['sliderTime']=='8'){echo'selected="selected"';} ?>>8秒</option>
					<option value="9" <? if($data['sliderTime']=='9'){echo'selected="selected"';} ?>>9秒</option>
					<option value="10" <? if($data['sliderTime']=='10'){echo'selected="selected"';} ?>>10秒</option>
				</select>
			</li>
			<li>
				<label for="sliderSwitch">轮播切换方式：</label>
				<select id="sliderSwitch" name="sliderSwitch">
					<option value="mouse" <? if($data['sliderSwitch']=='mouse'){echo'selected="selected"';} ?>>鼠标经过切换</option>
					<option value="click" <? if($data['sliderSwitch']=='click'){echo'selected="selected"';} ?>>鼠标点击切换</option>
				</select>
			</li>
			<li style="display:none">
				<label for="sliderActive">默认显示：</label>
				<select id="sliderActive" name="sliderActive">
					<option value="1" selected="selected">第1页</option>
					<option value="2" >第2页</option>
					<option value="3" >第3页</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-5">
		<ul class="setform">
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			 <li>
				<label for="kuandukz">宽度控制：</label>
				<select id="kuandukz" name="kuandukz">
					<option value="zdy" <? if($data['kuandukz']=='zdy'){echo'selected="selected"';} ?>>自定义宽度</option>
					<option value="qp" <? if($data['kuandukz']=='qp'){echo'selected="selected"';} ?>>全屏</option>
				</select>
			</li>
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
			<li>
				<label for="sliderOverflow">超出轮播部分：</label>
				<select id="sliderOverflow" name="sliderOverflow">
					<option value="hidden" <? if($data['sliderOverflow']=='hidden'){echo'selected="selected"';} ?>>超出部分隐藏</option>
					<option value="visible" <? if($data['sliderOverflow']=='visible'){echo'selected="selected"';} ?>>超出部分显示</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32436072.swf#tb_videoid=6184147" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32436072.swf#tb_videoid=6184147" target="_blank">新窗口全屏观看</a>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$data['active']?>});
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
	"<?=$data['shadeMode']?>" == "yes" && $(".shadeModeYes").show();
	$("#rdshade1").children("input[name='shadeMode']").on("click", function() {
		var val = $(this).val(), tempMode = $("#sliderMode").val();
		if(val == "yes") {
			if(tempMode != "scrolly1" && tempMode != "scrolly" && tempMode != "scrollx" && tempMode != "fade") {
				tempMode = "scrolly";
			}
			$("#sliderMode").selectmenu("destroy").html('<option value="scrolly1" >滚动-从上到下</option><option value="scrolly">滚动-从下到上</option><option value="scrollx">滚动-从右到左</option><option value="fade">淡入淡出</option>').val(tempMode).selectmenu();
			$(".shadeModeYes").show();
			messageForPhp("选择百叶窗轮播时，代码量将会变大，请注意不要超过模块限制。<br /> 注: 设计师自定义模块代码上限为120KB，系统自定义模块代码上限为50KB");
		} else {
			$("#sliderMode").selectmenu("destroy").html('<option value="none">无效果</option><option value="scrolly1" >滚动-从上到下</option><option value="scrolly">滚动-从下到上</option><option value="scrollx1">滚动-从左到右</option><option value="scrollx">滚动-从右到左</option><option value="fade">淡入淡出</option>').val(tempMode).selectmenu();
			$(".shadeModeYes").hide();
		}
	});
	
	// $("#smallAutoSize").on("change", function(event) {
		
	// });
	
	var defaultSmallImg = "",
		defaultSmallHover = "",
		arrDSI = defaultSmallImg.split(","),
		arrDSH = defaultSmallHover.split(",");
	$("input, .sliderContent > div, textarea, #rdshade1").buttonset();
	$("#tForm select").selectmenu();
	$(".contentType").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var contentType = "<?=$data['contentType'][0]?>", initThumbHtml = "", smallCircleMode = "<?=$data['smallCircleMode'][0]?>", initThumbCircleHtml = "";
	$(".sliderContent:eq(0)").find("."+contentType).show();
	initThumbHtml = $(".sliderContent:eq(0)").find(".thumbSetCls").html();
	initThumbCircleHtml = $(".sliderContent:eq(0)").find(".thumbSetCircleCls").html();
	if(initThumbHtml != "") {
		$(".sliderContent:eq(0)").find(".thumbCommon").children("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行缩略图设置");
		$(".sliderContent:eq(0)").find(".thumbCommon1").children("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行缩略图设置");
	} else {
		$(".sliderContent:eq(0)").find(".thumbCommon").children("input").removeClass("disabled").prop("readonly", false).attr("title", "轮播的缩略图，请输入图片空间里的图片链接");
		$(".sliderContent:eq(0)").find(".thumbCommon1").children("input").removeClass("disabled").prop("readonly", false).attr("title", "轮播切换时缩略图变换的图片，请输入图片空间里的图片链接");
	}
	if(initThumbCircleHtml != "") {
		$(".sliderContent:eq(0)").find(".thumbCircleCommon").children("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行圆点设置");
	} else {
		$(".sliderContent:eq(0)").find(".thumbCircleCommon").children("input").removeClass("disabled").prop("readonly", false).attr("title", "");
	}
	$("#sliderContentUl").on("click", "input[type='radio']", function(event) {
		var val = $(this).val();
		$(this).parent().parent().find(".contentType").hide();
		$(this).parent().parent().find("."+val).show();
		var valv = $(this).parent().parent().find("select").val();
		if(valv == "yes") {
			$(this).parent().parent().find(".smallCircleModeNo").hide();
			$(this).parent().parent().find(".smallCircleModeYes1").hide();
			$(this).parent().parent().find(".smallCircleMode").show();
		} else if(valv == "yes1") {
			$(this).parent().parent().find(".smallCircleModeNo").hide();
			$(this).parent().parent().find(".smallCircleMode").hide();
			$(this).parent().parent().find(".smallCircleModeYes1").show();
		} else {
			$(this).parent().parent().find(".smallCircleMode").hide();
			$(this).parent().parent().find(".smallCircleModeYes1").hide();
			$(this).parent().parent().find(".smallCircleModeNo."+val).show();
		}
	});
	if(smallCircleMode == "yes") {
		$(".sliderContent:eq(0)").find(".smallCircleMode").show();
		$(".sliderContent:eq(0)").find(".smallCircleModeNo").hide();
		$(".sliderContent:eq(0)").find(".smallCircleModeYes1").hide();
	} else if(smallCircleMode == "yes1") {
		$(".sliderContent:eq(0)").find(".smallCircleModeYes1").show();
		$(".sliderContent:eq(0)").find(".smallCircleMode").hide();
		$(".sliderContent:eq(0)").find(".smallCircleModeNo").hide();
	} else {
		$(".sliderContent:eq(0)").find(".smallCircleMode").hide();
		$(".sliderContent:eq(0)").find(".smallCircleModeYes1").hide();
	}
	$("#sliderContentUl").find("select").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "yes") {
				$(this).parent().parent().find(".smallCircleModeNo").hide();
				$(this).parent().parent().find(".smallCircleModeYes1").hide();
				$(this).parent().parent().find(".smallCircleMode").show();
			} else if(val == "yes1") {
				$(this).parent().parent().find(".smallCircleModeNo").hide();
				$(this).parent().parent().find(".smallCircleMode").hide();
				$(this).parent().parent().find(".smallCircleModeYes1").show();
			} else {
				var val1 = $(this).parent().parent().parent().find("input[type='radio']:checked").val();
				$(this).parent().parent().find(".smallCircleMode").hide();
				$(this).parent().parent().find(".smallCircleModeYes1").hide();
				$(this).parent().parent().find(".smallCircleModeNo."+val1).show();
			}
		}
	});
	
	setPage(document.getElementById("contentPage"),<?=$num?>, 1);
	$("#contentPage").click(function() {
		var num = parseInt($(this).children("a.on").html(), 10) - 1, 
		contentType = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked").val(),
		smallCircleMode = $(".sliderContent:eq("+num+")").find("select").val();
		$(".contentType").hide();
		$(".sliderContent").hide();
		$("#sliderContentUl .sliderContent:eq("+num+")").show();
		$(".sliderContent:eq("+num+")").find("."+contentType).show();
		var thumbHtml = $(".sliderContent:eq("+num+")").find(".thumbSetCls").html();
		var thumbCircleHtml = $(".sliderContent:eq("+num+")").find(".thumbSetCircleCls").html();
		if(smallCircleMode == "yes") {
			$(".sliderContent:eq("+num+")").find(".smallCircleModeNo").hide();
			$(".sliderContent:eq("+num+")").find(".smallCircleModeYes1").hide();
			$(".sliderContent:eq("+num+")").find(".smallCircleMode").show();
		} else if(smallCircleMode == "yes1") {
			$(".sliderContent:eq("+num+")").find(".smallCircleMode").hide();
			$(".sliderContent:eq("+num+")").find(".smallCircleModeNo").hide();
			$(".sliderContent:eq("+num+")").find(".smallCircleModeYes1").show();
		} else {
			$(".sliderContent:eq("+num+")").find(".smallCircleMode").hide();
			$(".sliderContent:eq("+num+")").find(".smallCircleModeYes1").hide();
		}
		if(thumbHtml != "") {
			$(".sliderContent:eq("+num+")").find(".thumbCommon").children("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行缩略图设置");
			$(".sliderContent:eq("+num+")").find(".thumbCommon1").children("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行缩略图设置");
		} else {
			$(".sliderContent:eq("+num+")").find(".thumbCommon").children("input").removeClass("disabled").prop("readonly", false).attr("title", "轮播的缩略图，请输入图片空间里的图片链接");
			$(".sliderContent:eq("+num+")").find(".thumbCommon1").children("input").removeClass("disabled").prop("readonly", false).attr("title", "轮播切换时缩略图变换的图片，请输入图片空间里的图片链接");
		}
		if(thumbCircleHtml != "") {
			$(".sliderContent:eq("+num+")").find(".thumbCircleCommon").children("input").addClass("disabled").prop("readonly", true).attr("title", "已使用高级设置，点击高级设置进行缩略图设置");
		} else {
			$(".sliderContent:eq("+num+")").find(".thumbCircleCommon").children("input").removeClass("disabled").prop("readonly", false).attr("title", "");
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
						'<label for="sc'+startNum+'rd1">轮播内容：</label>'+
						'<div id="sc'+startNum+'rd1">'+
							'<input type="radio" id="sc'+startNum+'_r1" name="contentType['+startNum+']" value="imgContent" checked="checked"/>'+
							'<label for="sc'+startNum+'_r1" title="轮播内容为图片加链接" style="width:100px;">图片轮播</label>'+
							'<input type="radio" id="sc'+startNum+'_r2" name="contentType['+startNum+']" value="customContent" />'+
							'<label for="sc'+startNum+'_r2" title="轮播内容为自定义HTML" style="width:100px;">自定义轮播</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<textarea id="sc'+startNum+'_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"></textarea>'+
							'<textarea id="sc'+startNum+'_ho2" class="thumbSetCircleCls" name="thumbSetCircleCls[]" style="display:none;"></textarea>'+
							'<li class="imgContent contentType" style="clear:both;padding-top:10px;">'+
								'<label for="sc'+startNum+'_i2">轮播图片：</label>'+
								'<input id="sc'+startNum+'_i2" class="setinput " type="text" title="请输入图片空间里的图片链接" name="sliderSrc[]" value="" />'+
							'</li>'+
							'<li class="imgContent contentType" style="clear:both;">'+
								'<label for="sc'+startNum+'_i3">链接地址：</label>'+
								'<input id="sc'+startNum+'_i3" class="setinput" type="text" title="请输入图片链接" name="sliderHref[]" value="" />'+
							'</li>'+
							'<li class="customContent contentType" style="clear:both;height:auto;padding-top:10px;">'+
								'<label for="sc'+startNum+'_i6">自定义内容：</label>'+
								'<textarea id="sc'+startNum+'_i6" name="customContent[]"></textarea>'+
								'<button type="button" class="t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
							'</li>'+
							'<li>'+
								'<label for="sc'+startNum+'_smallCircleMode">缩略图模式：</label>'+
								'<select id="sc'+startNum+'_smallCircleMode" name="smallCircleMode['+startNum+']">'+
									'<option value="no" selected="selected">普通缩略图</option>'+
									'<option value="yes">圆点触点</option>'+
									'<option value="yes1">自定义缩略图</option>'+
								'</select>'+
							'</li>'+
							'<li class="smallCircleModeNo imgContent contentType thumbCommon" style="clear:both;">'+
								'<label for="sc'+startNum+'_i4">默认缩略图：</label>'+
								'<input id="sc'+startNum+'_i4" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrcT[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" />'+
								'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrcT;'+startNum+'">高级设置</button>'+
							'</li>'+
							'<li class="smallCircleModeNo imgContent contentType thumbCommon1" style="clear:both;">'+
								'<label for="sc'+startNum+'_i5">切换缩略图：</label>'+
								'<input id="sc'+startNum+'_i5" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrcT[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" />'+
							'</li>'+
							'<li class="smallCircleModeNo customContent contentType thumbCommon" style="clear:both;">'+
								'<label for="sc'+startNum+'_i7">默认缩略图：</label>'+
								'<input id="sc'+startNum+'_i7" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrc[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" />'+
								'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrc;'+startNum+'">高级设置</button>'+
							'</li>'+
							'<li class="smallCircleModeNo customContent contentType thumbCommon" style="clear:both;">'+
								'<label for="sc'+startNum+'_i8">切换缩略图：</label>'+
								'<input id="sc'+startNum+'_i8" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrc[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" />'+
							'</li>'+
							'<li class="smallCircleMode" style="clear:both;">'+
								'<label for="sc'+startNum+'_smallCircleBgColor">圆点默认颜色：</label>'+
								'<input id="sc'+startNum+'_smallCircleBgColor" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="" />'+
							'</li>'+
							'<li class="smallCircleMode" style="clear:both;">'+
								'<label for="sc'+startNum+'_smallCircleBgColor1">圆点切换颜色：</label>'+
								'<input id="sc'+startNum+'_smallCircleBgColor1" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="" />'+
							'</li>'+
							'<li class="smallCircleModeYes1" style="clear:both;height:auto;">'+
								'<label for="sc'+startNum+'smallCustom">自定义默认缩略图：</label>'+
								'<textarea id="sc'+startNum+'smallCustom" name="smallCustom[]"></textarea>'+
								'<button type="button" class="t-kshbj-btn tkb1" data-target="zdy-clicked" data-zdyName="smallCustom[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
							'</li>'+
							'<li class="smallCircleModeYes1" style="clear:both;height:auto;">'+
								'<label for="sc'+startNum+'smallCustom1">自定义切换缩略图：</label>'+
								'<textarea id="sc'+startNum+'smallCustom1" name="smallCustom1[]"></textarea>'+
								'<button type="button" class="t-kshbj-btn tkb2" data-target="zdy-clicked" data-zdyName="smallCustom1[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
							'</li>'+
						'</ul>'+
					'</li>').appendTo($("#sliderContentUl"));
					$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
						var ul = $(this).children("ul");
						ul.find("label:eq(0)").html("轮播图片：");
						ul.find("label:eq(1)").html("链接地址：");
						ul.find("label:eq(2)").html("自定义内容：");
						ul.find("label:eq(3)").html("缩略图模式：");
						ul.find("label:eq(4)").html("默认缩略图：");
						ul.find("label:eq(5)").html("切换缩略图：");
						ul.find("label:eq(6)").html("默认缩略图：");
						ul.find("label:eq(7)").html("切换缩略图：");
						ul.find("label:eq(8)").html("圆点默认颜色：");
						ul.find("label:eq(9)").html("圆点切换颜色：");
						ul.find("label:eq(10)").html("自定义默认缩略图：");
						ul.find("label:eq(11)").html("自定义切换缩略图：");
					});
					$("input, .sliderContent > div, textarea").buttonset();
					$(".contentType").hide();
					$(".sliderContent").hide();
					len = $("#sliderContentUl").children("li").length;
					$("#contentPage").html("");
					setPage(document.getElementById("contentPage"), len, len);
					$("#contentPage").children("a.on").trigger("click");
					startNum++;
					$("#sliderContentUl").find("select").selectmenu({
						change: function() {
							var val = $(this).val();
							if(val == "yes") {
								$(this).parent().parent().find(".smallCircleModeNo").hide();
								$(this).parent().parent().find(".smallCircleModeYes1").hide();
								$(this).parent().parent().find(".smallCircleMode").show();
							} else if(val == "yes1") {
								$(this).parent().parent().find(".smallCircleModeNo").hide();
								$(this).parent().parent().find(".smallCircleMode").hide();
								$(this).parent().parent().find(".smallCircleModeYes1").show();
							} else {
								var val1 = $(this).parent().parent().parent().find("input[type='radio']:checked").val();
								$(this).parent().parent().find(".smallCircleMode").hide();
								$(this).parent().parent().find(".smallCircleModeYes1").hide();
								$(this).parent().parent().find(".smallCircleModeNo."+val1).show();
							}
						}
					});
		} else if(index == 1) {
			if($("#sliderContentUl").children("li").length == 1) {
				return;
			}
			$("#sliderContentUl").children("li.sliderContent:eq("+num+")").remove();
			
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				var ul = $(this).children("ul");
				ul.find("label:eq(0)").html("轮播图片：");
				ul.find("label:eq(1)").html("链接地址：");
				ul.find("label:eq(2)").html("自定义内容：");
				ul.find("label:eq(3)").html("缩略图模式：");
				ul.find("label:eq(4)").html("默认缩略图：");
				ul.find("label:eq(5)").html("切换缩略图：");
				ul.find("label:eq(6)").html("默认缩略图：");
				ul.find("label:eq(7)").html("切换缩略图：");
				ul.find("label:eq(8)").html("圆点默认颜色：");
				ul.find("label:eq(9)").html("圆点切换颜色：");
				ul.find("label:eq(10)").html("自定义默认缩略图：");
				ul.find("label:eq(11)").html("自定义切换缩略图：");
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
			ul.find("label:eq(0)").html("轮播图片：");
			ul.find("label:eq(1)").html("链接地址：");
			ul.find("label:eq(2)").html("自定义内容：");
			ul.find("label:eq(3)").html("缩略图模式：");
			ul.find("label:eq(4)").html("默认缩略图：");
			ul.find("label:eq(5)").html("切换缩略图：");
			ul.find("label:eq(6)").html("默认缩略图：");
			ul.find("label:eq(7)").html("切换缩略图：");
			ul.find("label:eq(8)").html("圆点默认颜色：");
			ul.find("label:eq(9)").html("圆点切换颜色：");
			ul.find("label:eq(10)").html("自定义默认缩略图：");
			ul.find("label:eq(11)").html("自定义切换缩略图：");
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
	var activePage = "", activeLen = $("#sliderContentUl").children("li").length;
	if(activePage!="") {
		activePage = parseInt(activePage.substr(1), 10) + 1;
		setPage(document.getElementById("contentPage"), activeLen, activePage);
		$("#contentPage").children("a[rel='"+activePage+"']").trigger("click");
	}
});
</script>