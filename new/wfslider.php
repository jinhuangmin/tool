<?
$data=$_POST;
$sliderSrc=$data['sliderSrc'];
$contentType=$data['contentType'];
$thumbSet=$data['thumbSet'];
$thumbCircleSet=$data['thumbCircleSet'];
$sliderHref=$data['sliderHref'];
$sliderSrc=$data['sliderSrc'];
$customContent=$data['customContent'];
$smallCircleMode=$data['smallCircleMode'];
$smallImgSrcT=$data['smallImgSrcT'];
$smallHoverSrcT=$data['smallHoverSrcT'];
$smallImgSrc=$data['smallImgSrc'];
$smallHoverSrc=$data['smallHoverSrc'];
$smallCircleBgColor=$data['smallCircleBgColor'];
$smallCircleBgColor1=$data['smallCircleBgColor1'];



$childConfig=$data['childConfig'][0];
?>
<form id="tForm" form-data="jwfb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">缩略图设置</a></li>
		<li><a href="#tabs-3">箭头设置</a></li>
		<li><a href="#tabs-4">高级设置</a></li>
		<li><a href="#tabs-5">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
				<input id="h1" type="hidden" name="defaultSmallImg" value="" />
				<input id="h2" type="hidden" name="defaultSmallHover" value="" />
			</li>
			<!--<li>
				<label for="ibeli2">轮播内容单页宽度：</label>
				<input id="ibeli2" class="setinput " type="text" title="轮播内容每一页的宽度" name="sliderWidth" value="" />
			</li>
			<li>
				<label for="ibeli3">轮播内容单页高度：</label>
				<input id="ibeli3" class="setinput " type="text" title="轮播内容每一页的高度" name="sliderHeight" value="" />
			</li>-->
			<li style="height:auto;">
				<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">
					
                  <? $num=0;  foreach($sliderSrc as $i=>$item){ $num=$num+1;  ?> 	  
                    
                    <li class="sliderContent" style="clear:both;height:auto;">
						<label for="sc<?=$i?>rd1">轮播内容：</label>
						<div id="sc<?=$i?>rd1">
							<input type="radio" id="sc<?=$i?>_r1" name="contentType[<?=$i?>]" value="imgContent" <? if($contentType[$i]=='imgContent'){echo'checked="checked"';} ?> />
							<label for="sc<?=$i?>_r1" title="轮播内容为图片加链接" style="width:100px;">图片轮播</label>
							<input type="radio" id="sc<?=$i?>_r2" name="contentType[<?=$i?>]" value="customContent" <? if($contentType[$i]=='customContent'){echo'checked="checked"';} ?> />
							<label for="sc<?=$i?>_r2" title="轮播内容为自定义HTML" style="width:100px;">自定义轮播</label>
						</div>
						<ul style="padding-left:0px;list-style:none;">
							<textarea id="sc<?=$i?>_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"></textarea>
							<textarea id="sc<?=$i?>_ho2" class="thumbSetCircleCls" name="thumbCircleSet[]" style="display:none;"></textarea>
							<li class="imgContent contentType" style="clear:both;padding-top:10px;">
								<label for="sc<?=$i?>_i2">轮播图片：</label>
								<input id="sc<?=$i?>_i2" class="setinput" type="text" title="请输入图片空间里的图片链接" name="sliderSrc[]" value="<?=$sliderSrc[$i]?>" />
							</li>
							<li class="imgContent contentType" style="clear:both;">
								<label for="sc<?=$i?>_i3">链接地址：</label>
								<input id="sc<?=$i?>_i3" class="setinput" type="text" title="请输入图片链接" name="sliderHref[]" value="<?=$sliderHref[$i]?>" />
							</li>
							<li class="customContent contentType" style="clear:both;height:auto;padding-top:10px;">
								<label for="sc<?=$i?>_i6">自定义内容：</label>
								<textarea id="sc<?=$i?>_i6" name="customContent[]"><?=$customContent[$i]?></textarea>
								<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
							</li>
							<li>
								<label for="sc<?=$i?>_smallCircleMode">轮播缩略图模式：</label>
								<select id="sc<?=$i?>_smallCircleMode" name="smallCircleMode[<?=$i?>]">
									<option value="no" <? if($smallCircleMode[$i]=='no'){echo'selected="selected"';} ?>>普通缩略图</option>
									<option value="yes" <? if($smallCircleMode[$i]=='yes'){echo'selected="selected"';} ?>>圆点触点</option>
								</select>
							</li>
							<li class="smallCircleModeNo imgContent contentType thumbCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallImgSrcT">默认缩略图：</label>
								<input id="sc<?=$i?>_smallImgSrcT" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrcT[]" value="<?=$smallImgSrcT[$i]?>" />
								<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrcT;<?=$i?>">高级设置</button>
							</li>
							<li class="smallCircleModeNo imgContent contentType thumbCommon1" style="clear:both;">
								<label for="sc<?=$i?>_smallHoverSrcT">切换缩略图：</label>
								<input id="sc<?=$i?>_smallHoverSrcT" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrcT[]" value="<?=$smallHoverSrcT[$i]?>" />
							</li>
							<li class="smallCircleModeNo customContent contentType thumbCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallImgSrc">默认缩略图：</label>
								<input id="sc<?=$i?>_smallImgSrc" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrc[]" value="<?=$smallImgSrc[$i]?>" />
						
							</li>
							<li class="smallCircleModeNo customContent contentType thumbCommon1" style="clear:both;">
								<label for="sc<?=$i?>_smallHoverSrc">切换缩略图：</label>
								<input id="sc<?=$i?>_smallHoverSrc" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrc[]" value="<?=$smallHoverSrc[$i]?>" />
							</li>
							<li class="smallCircleMode thumbCircleCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallCircleBgColor">圆点默认颜色：</label>
								<input id="sc<?=$i?>_smallCircleBgColor" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="<?=$smallCircleBgColor[$i]?>" />
						
							</li>
							<li class="smallCircleMode thumbCircleCommon" style="clear:both;">
								<label for="sc<?=$i?>_smallCircleBgColor1">圆点切换颜色：</label>
								<input id="sc<?=$i?>_smallCircleBgColor1" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="<?=$smallCircleBgColor1[$i]?>" />
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
			<li>
				<label for="ii1">缩略图宽度：</label>
				<input id="ii1" class="setinput" type="text" title="统一设置缩略图的宽度" name="sWidth" value="<?=$data['sWidth']?>" />
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
				<label for="smallShowSpeed">缩略图动画速度：</label>
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
                <option value="" <? if($data['displayMode']==''){echo'selected="selected"';} ?>>无效果</option>
                 <? 
                       for($i=10;$i<110;$i=$i+10){$dd='moveout'.$i.'';
                           if($data['css3Mode']==$dd){$ks='selected="selected"';} else{$ks='';}
                           echo'<option value="'.$i.'" '.$ks.'>向外移动'.$i.'</option>';
                           }
						   
						for($i=10;$i<110;$i=$i+10){$dd='movein'.$i.'';
                           if($data['css3Mode']==$dd){$ks='selected="selected"';} else{$ks='';}
                           echo'<option value="'.$i.'" '.$ks.'>向内移动'.$i.'</option>';
                           }
                         ?>   

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
				<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($childConfig['autoSize']=='yes'){echo'checked="checked"';} ?>/>
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
				<label for="rd2">超出部分：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="sliderOver" value="yes"  <? if($data['sliderOver']=='yes'){echo'checked="checked"';} ?>/>
					<label for="r3">显示</label>
					<input type="radio" id="r4" name="sliderOver" value="no" <? if($data['sliderOver']=='no'){echo'checked="checked"';} ?> />
					<label for="r4">隐藏</label>
				</div>
			</li>
			<li class="sliderOverPart">
				<label for="rd3">超出部分蒙层：</label>
				<div id="rd3">
					<input type="radio" id="r5" name="sliderOverMongolia" value="yes" <? if($data['sliderOverMongolia']=='yes'){echo'checked="checked"';} ?> />
					<label for="r5">开启</label>
					<input type="radio" id="r6" name="sliderOverMongolia" value="no" <? if($data['sliderOverMongolia']=='no'){echo'checked="checked"';} ?>/>
					<label for="r6">关闭</label>
				</div>
			</li>
			<li class="sliderOverPart mongoliaPart">
				<label for="i5">蒙层颜色：</label>
				<input id="i5" class="setinput tColorPicker" type="text" title="" name="sliderOverMongoliaColor" value="<?=$data['sliderOverMongoliaColor']?>" />
			</li>
			<li>
				<label for="sliderMode">轮播方式：</label>
				<select id="sliderMode" name="sliderMode">
					<option value="scrolly" <? if($data['sliderMode']=='scrolly'){echo'selected="selected"';} ?>>上下滚动</option>
					<option value="scrollx" <? if($data['sliderMode']=='scrollx'){echo'selected="selected"';} ?>>横向滚动</option>
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
				<label for="sliderDelay">轮播延迟触发：</label>
				<select id="sliderDelay" name="sliderDelay">
					   <? 
                       for($i=0;$i<3.1;$i=$i+0.1){
                           if(($data['sliderDelay']-$i)==0){$ks='selected="selected"';} else{$ks='';}
                           echo'<option value="'.$i.'" '.$ks.'>'.$i.'秒</option>';
                           }
                         ?>         
                </select>
			</li>
			<li>
				<label for="sliderSwitch">轮播切换方式：</label>
				<select id="sliderSwitch" name="sliderSwitch">
					<option value="mouse" <? if($data['sliderSwitch']=='mouse'){echo'selected="selected"';} ?>>鼠标经过切换</option>
					<option value="click" <? if($data['sliderSwitch']=='click'){echo'selected="selected"';} ?>>鼠标点击切换</option>
				</select>
			</li>
			<li>
				<label for="sliderActive">默认显示：</label>
				<select id="sliderActive" name="sliderActive">
					<option value="1" <? if($data['sliderActive']=='1'){echo'selected="selected"';} ?>>第1张图片</option>
					<option value="2" <? if($data['sliderActive']=='2'){echo'selected="selected"';} ?>>第2张图片</option>
					<option value="3" <? if($data['sliderActive']=='3'){echo'selected="selected"';} ?>>第3张图片</option>
				</select>
			</li>
           <li>
				<label for="sliderMargin">轮播滚动幅度：</label>
				<select id="sliderMargin" name="sliderMargin">
					<option value="1" <? if($data['sliderMargin']=='1'){echo'selected="selected"';} ?>>一次滚动1张图片</option>
					<option value="2" <? if($data['sliderMargin']=='2'){echo'selected="selected"';} ?>>一次滚动2张图片</option>
					<option value="3" <? if($data['sliderMargin']=='3'){echo'selected="selected"';} ?>>一次滚动3张图片</option>
					<option value="4" <? if($data['sliderMargin']=='4'){echo'selected="selected"';} ?>>一次滚动4张图片</option>
					<option value="5" <? if($data['sliderMargin']=='5'){echo'selected="selected"';} ?>>一次滚动5张图片</option>
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
            
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: 0});
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
	
	$(".sliderOverPart").hide();
	$(".mongoliaPart").hide();
	"<?=$data['sliderOver']?>" == "yes" && ($(".sliderOverPart").show(), $(".mongoliaPart").hide());
	"<?=$data['sliderOver']?>" == "yes" && ( "<?=$data['sliderOverMongolia']?>" == "yes" ? $(".mongoliaPart").show() : $(".mongoliaPart").hide() );
	$("#rd2").on("click", "input[type='radio']", function() {
		var val = $(this).val();
		if(val == "yes") {
			$(".sliderOverPart").show();
			if($("#rd3 input[type='radio']:checked").val() != "yes") {
				$(".mongoliaPart").hide();
			}
		} else {
			$(".sliderOverPart").hide();
		}
	});
	$("#rd3").on("click", "input[type='radio']", function() {
		var val = $(this).val();
		if(val == "yes") {
			$(".mongoliaPart").show();
		} else {
			$(".mongoliaPart").hide();
		}
	});
	
	var defaultSmallImg = "<?=$data['defaultSmallImg']?>",
		defaultSmallHover = "<?=$data['defaultSmallHover']?>",
		arrDSI = defaultSmallImg.split(","),
		arrDSH = defaultSmallHover.split(",");
	$("input, .sliderContent > div, textarea, #rdshade1, .setform > li > div, textarea").buttonset();
	
	$("#tForm select").selectmenu();
	$(".contentType").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var contentType = "imgContent", initThumbHtml = "", smallCircleMode = "yes", initThumbCircleHtml = "";
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
	});
	if(smallCircleMode == "yes") {
		$(".sliderContent:eq(0)").find(".smallCircleMode").show();
		$(".sliderContent:eq(0)").find(".smallCircleModeNo").hide();
	} else {
		$(".sliderContent:eq(0)").find(".smallCircleMode").hide();
	}
	$("#sliderContentUl").find("select").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "yes") {
				$(this).parent().parent().find(".smallCircleModeNo").hide();
				$(this).parent().parent().find(".smallCircleMode").show();
			} else {
				var val1 = $(this).parent().parent().parent().find("input[type='radio']:checked").val();
				$(this).parent().parent().find(".smallCircleModeNo."+val1).show();
				$(this).parent().parent().find(".smallCircleMode").hide();
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
			$(".sliderContent:eq("+num+")").find(".smallCircleMode").show();
			$(".sliderContent:eq("+num+")").find(".smallCircleModeNo").hide();
		} else {
			$(".sliderContent:eq("+num+")").find(".smallCircleMode").hide();
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
								'<input id="sc'+startNum+'_i2" class="setinput" type="text" title="请输入图片空间里的图片链接" name="sliderSrc[]" value="" />'+
							'</li>'+
							'<li class="imgContent contentType" style="clear:both;">'+
								'<label for="sc'+startNum+'_i3">链接地址>：</label>'+
								'<input id="sc'+startNum+'_i3" class="setinput" type="text" title="请输入链接地址" name="sliderHref[]" value="" />'+
							'</li>'+
							'<li class="customContent contentType" style="clear:both;height:auto;padding-top:10px;">'+
								'<label for="sc'+startNum+'_i6">自定义内容：</label>'+
								'<textarea id="sc'+startNum+'_i6" name="customContent[]"></textarea>'+
								'<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="a8zRz-wFEo">可视化编辑</button>'+
							'</li>'+
							'<li>'+
								'<label for="sc'+startNum+'_smallCircleMode">轮播缩略图模式：</label>'+
								'<select id="sc'+startNum+'_smallCircleMode" name="smallCircleMode['+startNum+']">'+
									'<option value="no">普通缩略图</option>'+
									'<option value="yes" selected="selected">圆点触点</option>'+
								'</select>'+
							'</li>'+
							'<li class="smallCircleModeNo imgContent contentType thumbCommon" style="clear:both;">'+
								'<label for="sc'+startNum+'_i4">默认缩略图：</label>'+
								'<input id="sc'+startNum+'_i4" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrcT[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" />'+
								'<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallImgSrcT;'+startNum+'">高级设置</button>'+
							'</li>'+
							'<li class="smallCircleModeNo imgContent contentType thumbCommon1" style="clear:both;">'+
								'<label for="sc'+startNum+'_i5">切换缩略图：</label>'+
								'<input id="sc'+startNum+'_i5" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrcT[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" />'+
							'</li>'+
							'<li class="smallCircleModeNo customContent contentType thumbCommon" style="clear:both;">'+
								'<label for="sc'+startNum+'_i7">默认缩略图：</label>'+
								'<input id="sc'+startNum+'_i7" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrc[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" />'+
					
							'</li>'+
							'<li class="smallCircleModeNo customContent contentType thumbCommon" style="clear:both;">'+
								'<label for="sc'+startNum+'_i8">切换缩略图：</label>'+
								'<input id="sc'+startNum+'_i8" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrc[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" />'+
							'</li>'+
							'<li class="smallCircleMode" style="clear:both;">'+
								'<label for="sc'+startNum+'_smallCircleBgColor">圆点默认颜色：</label>'+
								'<input id="sc'+startNum+'_smallCircleBgColor" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="" />'+
							'</li>'+
							'<li class="smallCircleMode" style="clear:both;">'+
								'<label for="sc'+startNum+'_smallCircleBgColor1">圆点切换颜色：</label>'+
								'<input id="sc'+startNum+'_smallCircleBgColor1" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="" />'+
							'</li>'+
						'</ul>'+
					'</li>').appendTo($("#sliderContentUl"));
					$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
						var ul = $(this).children("ul");
						ul.find("label:eq(0)").html("轮播图片：");
						ul.find("label:eq(1)").html("链接地址：");
						ul.find("label:eq(2)").html("自定义内容：");
						ul.find("label:eq(3)").html("轮播缩略图模式：");
						ul.find("label:eq(4)").html("默认缩略图：");
						ul.find("label:eq(5)").html("切换缩略图：");
						ul.find("label:eq(6)").html("默认缩略图：");
						ul.find("label:eq(7)").html("切换缩略图：");
						ul.find("label:eq(8)").html("圆点默认颜色：");
						ul.find("label:eq(9)").html("圆点切换颜色：");
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
								$(this).parent().parent().find(".smallCircleMode").show();
							} else {
								var val1 = $(this).parent().parent().parent().find("input[type='radio']:checked").val();
								$(this).parent().parent().find(".smallCircleModeNo."+val1).show();
								$(this).parent().parent().find(".smallCircleMode").hide();
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
				ul.find("label:eq(3)").html("轮播缩略图模式：");
				ul.find("label:eq(4)").html("默认缩略图：");
				ul.find("label:eq(5)").html("切换缩略图：");
				ul.find("label:eq(6)").html("默认缩略图：");
				ul.find("label:eq(7)").html("切换缩略图：");
				ul.find("label:eq(8)").html("圆点默认颜色：");
				ul.find("label:eq(9)").html("圆点切换颜色：");
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
		var contentlength = $(".sliderContent").length, tempVal = $("#sliderActive").val(), tempVal1 = $("#sliderMargin").val();
		$("#sliderActive").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if(tempVal == (i+1)) {selected = ' selected="selected"'}
			$("#sliderActive").append('<option '+selected+' value="'+(i+1)+'">第'+(i+1)+'页</option>');
		}
		$("#sliderActive").selectmenu();
		$("#sliderMargin").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if( i==0 ) {selected = ' selected="selected"'}
			if(contentlength % (i+1) == 0 && contentlength != (i+1)) {
				$("#sliderMargin").append('<option '+selected+' value="'+(i+1)+'">一次滚动'+(i+1)+'页内容</option>');
			}
		}
		$("#sliderMargin").selectmenu();
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
			ul.find("label:eq(3)").html("轮播缩略图模式：");
			ul.find("label:eq(4)").html("默认缩略图：");
			ul.find("label:eq(5)").html("切换缩略图：");
			ul.find("label:eq(6)").html("默认缩略图：");
			ul.find("label:eq(7)").html("切换缩略图：");
			ul.find("label:eq(8)").html("圆点默认颜色：");
			ul.find("label:eq(9)").html("圆点切换颜色：");
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