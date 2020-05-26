<?
$sliderSrc=$_POST['sliderSrc'];
$contentType=$_POST['contentType'];
$thumbSet=$_POST['thumbSet'];
$thumbCircleSet=$_POST['thumbCircleSet'];
$sliderHref=$_POST['sliderHref'];
$sliderSrc=$_POST['sliderSrc'];
$customContent=$_POST['customContent'];
$smallCircleMode=$_POST['smallCircleMode'];
$smallImgSrcT=$_POST['smallImgSrcT'];
$smallHoverSrcT=$_POST['smallHoverSrcT'];
$smallImgSrc=$_POST['smallImgSrc'];
$smallHoverSrc=$_POST['smallHoverSrc'];
$smallCircleBgColor=$_POST['smallCircleBgColor'];
$smallCircleBgColor1=$_POST['smallCircleBgColor1'];



$childConfig=$_POST['childConfig'][0];
?>
<form id="tForm" form-data="jwfb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">缩略图设置</a></li>
		<li><a href="#tabs-4">箭头设置</a></li>
		<li><a href="#tabs-3">基础设置</a></li>
		<li><a href="#tabs-5">样式设置</a></li>
		<li style="display:none;"><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div class="formlayout">
	<div class="form-tabs-content">
	
	<div id="tabs-1">
		<ul class="setform">			
			<li style="height:auto;">
				<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">
                
                  <? $num=0;  foreach($contentType as $i=>$item){ $num=$num+1;  ?> 
                  
                    <li class="sliderContent" style="clear:both;height:auto;">
						<label for="sc<?=$i?>rd1">轮播<?=$num?>轮播类型：</label>
						<div id="sc<?=$i?>rd1" class="contentTypeDiv" style="padding-bottom: 20px;float:left;">
							<input type="radio" id="sc<?=$i?>_r1" name="contentType[<?=$i?>]" value="imgContent" <? if($contentType[$i]!=='customContent'){echo'checked="checked"';} ?> />
							<label for="sc<?=$i?>_r1" title="轮播内容为图片加链接">图片轮播</label>
							<input type="radio" id="sc<?=$i?>_r2" name="contentType[<?=$i?>]" value="customContent" <? if($contentType[$i]=='customContent'){echo'checked="checked"';} ?> />
							<label for="sc<?=$i?>_r2" title="轮播内容为自定义HTML">自定义轮播</label>
						</div>
						<ul style="padding-left:0px;list-style:none;">
							<textarea id="sc<?=$i?>_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"><?=$_POST['thumbSet'][$i]?></textarea>
							<textarea id="sc<?=$i?>_ho2" class="thumbSetCircleCls" name="thumbCircleSet[]" style="display:none;"><?=$_POST['thumbCircleSet'][$i]?></textarea>							
							<li class="imgContent contentType"  style="clear:both;">
								<label for="sc<?=$i?>_i2">轮播图片：</label>
								<input id="sc<?=$i?>_i2" class="setinput" type="text" title="请输入图片空间里的图片链接" junezx_vali_pic="true" name="sliderSrc[]" value="<?=$sliderSrc[$i]?>" />
							</li>
							<li class="customContent contentType" style="clear:both;height:auto;">
								<label for="sc<?=$i?>_i6">自定义内容：</label>
								<textarea id="sc<?=$i?>_i6" name="customContent[]"><?=stripslashes($customContent[$i])?></textarea>
								<label type="button" class="btnLabel t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
							</li>
							<li class="imgContent customContent contentType">
								<label for="sc<?=$i?>_i3">链接地址：</label>
								<input id="sc<?=$i?>_i3" class="setinput" type="text" title="请输入链接地址" junezx_vali_url="true" name="sliderHref[]" value="<?=$sliderHref[$i]?>" />
							</li>
							<li>
								<label for="sc<?=$i?>_smallCircleMode">轮播缩略图模式：</label>
								<div id="sc<?=$i?>_smallCircleMode" class="smallTypeDiv">
									<input type="radio" id="sc<?=$i?>_sra" name="smallCircleMode[<?=$i?>]" value="no" <? if($smallCircleMode[$i]=='no'){echo'checked="checked"';} ?> />
									<label for="sc<?=$i?>_sra" title="图片">图片</label>
									<input type="radio" id="sc<?=$i?>_srb" name="smallCircleMode[<?=$i?>]" value="yes" <? if($smallCircleMode[$i]=='yes'){echo'checked="checked"';} ?> />
									<label for="sc<?=$i?>_srb" title="圆点">圆点</label>
									<input type="radio" id="sc<?=$i?>_src" name="smallCircleMode[<?=$i?>]" value="yes2" <? if($smallCircleMode[$i]=='yes2'){echo'checked="checked"';} ?> />
									<label for="sc<?=$i?>_src" title="文字">文字</label>
									<input type="radio" id="sc<?=$i?>_srd" name="smallCircleMode[<?=$i?>]" value="yes1" <? if($smallCircleMode[$i]=='yes1'){echo'checked="checked"';} ?> />
									<label for="sc<?=$i?>_srd" title="自定义内容">自定义</label>
								</div>
							</li>
							<li class="smallCircleMode_no imgContent contentType" style="clear:both;">
								<label for="sc<?=$i?>_smallImgSrcT">默认缩略图：</label>
								<input id="sc<?=$i?>_smallImgSrcT" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrcT[]" value="<?=$smallImgSrcT[$i]?>" />
							</li>
							<li class="smallCircleMode_no imgContent contentType" style="clear:both;">
								<label for="sc<?=$i?>_smallHoverSrcT">切换缩略图：</label>
								<input id="sc<?=$i?>_smallHoverSrcT" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrcT[]" value="<?=$smallHoverSrcT[$i]?>" />
							</li>
							<li class="smallCircleMode_no customContent contentType" style="clear:both;">
								<label for="sc<?=$i?>_smallImgSrc">默认缩略图：</label>
								<input id="sc<?=$i?>_smallImgSrc" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrc[]" value="<?=$smallImgSrc[$i]?>" />
							</li>
							<li class="smallCircleMode_no customContent contentType" style="clear:both;">
								<label for="sc<?=$i?>_smallHoverSrc">切换缩略图：</label>
								<input id="sc<?=$i?>_smallHoverSrc" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrc[]" value="<?=$smallHoverSrc[$i]?>" />
							</li>
							<li class="smallCircleMode_yes thumbCircleCommon" style="clear:both;">
								<label for="sc<?=$i?>smallCircleBgColor">圆点默认颜色：</label>
								<div class="setcolorpanel">
									<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$smallCircleBgColor[$i]?>;"></div></div></div>
									<input id="sc<?=$i?>smallCircleBgColor" class="setinputcolor tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="<?=$smallCircleBgColor[$i]?>" />
									<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbcircleset;smallCircleBgColor;<?=$i?>">高级设置</button>
								</div>
							</li>
							<li class="smallCircleMode_yes thumbCircleCommon" style="clear:both;">
								<label for="sc<?=$i?>smallCircleBgColor1">圆点切换颜色：</label>
								<div class="setcolorpanel">
									<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$smallCircleBgColor1[$i]?>;"></div></div></div>
									<input id="sc<?=$i?>smallCircleBgColor1" class="setinputcolor tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="<?=$smallCircleBgColor1[$i]?>" />
								</div>
							</li>
							<li class="smallCircleMode_yes1" style="clear:both;height:auto;">
								<label for="sc<?=$i?>smallCustom">自定义默认缩略图：</label>
								<textarea id="sc<?=$i?>smallCustom" name="smallCustom[]"><?=stripslashes($_POST['smallCustom'][$i])?></textarea>
								<label type="button" class="btnLabel t-kshbj-btn tkb1" data-target="zdy-clicked" data-zdyName="smallCustom[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
							</li>
							<li class="smallCircleMode_yes1" style="clear:both;height:auto;">
								<label for="sc<?=$i?>smallCustom1">自定义切换缩略图：</label>
								<textarea id="sc<?=$i?>smallCustom1" name="smallCustom1[]"><?=stripslashes($_POST['smallCustom1'][$i])?></textarea>
								<label type="button" class="btnLabel t-kshbj-btn tkb2" data-target="zdy-clicked" data-zdyName="smallCustom1[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
							</li>
							<li class="smallCircleMode_yes2 thumbCommon" style="clear:both;height:auto;">
								<label for="sc<?=$i?>smallCharacterContent">默认文字：</label>
								<textarea id="sc<?=$i?>smallCharacterContent" name="smallCharacterContent[]" style="height: 40px;"><?=$_POST['smallCharacterContent'][$i]?></textarea>
								<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="thumbset;smallCharacterContent;<?=$i?>">样式设置</button>
							</li>
							<li class="smallCircleMode_yes2 thumbCommon1" style="clear:both;height:auto;">
								<label for="sc<?=$i?>smallCharacterContent1">切换文字：</label>
								<textarea id="sc<?=$i?>smallCharacterContent1" name="smallCharacterContent1[]" style="height: 40px;"><?=$_POST['smallCharacterContent1'][$i]?></textarea>
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
				<label for="sliderSmallImg">是否显示缩略图：</label>
				<select id="sliderSmallImg" name="sliderSmallImg">
					<option value="yes" <? if($_POST['sliderSmallImg']=='yes'){echo'selected="selected"';} ?>>显示</option>
					<option value="no" <? if($_POST['sliderSmallImg']=='no'){echo'selected="selected"';} ?>>不显示</option>
				</select>
			</li>
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
				<label for="smallShowMode">缩略图显示方式：</label>
				<select id="smallShowMode" name="smallShowMode">
					<option value="" <? if($_POST['smallShowMode']==''){echo'selected="selected"';} ?>>超出大图部分显示</option>
					<option value="outbox" <? if($_POST['smallShowMode']=='outbox'){echo'selected="selected"';} ?>>超出大图部分裁掉</option>
				</select>
			</li>
			<li>
				<label for="smallShowCss">鼠标经过特效：</label>
				<select id="smallShowCss" name="smallShowCss">
					<option value="" <? if($_POST['smallShowCss']==''){echo'selected="selected"';} ?>>无特效</option>
					<option value="b-1-lx10" <? if($_POST['smallShowCss']=='b-1-lx10'){echo'selected="selected"';} ?>>缩略图整体向左移动10px</option>
					<option value="b-1-lx20" <? if($_POST['smallShowCss']=='b-1-lx20'){echo'selected="selected"';} ?>>缩略图整体向左移动20px</option>
					<option value="b-1-lx30" <? if($_POST['smallShowCss']=='b-1-lx30'){echo'selected="selected"';} ?>>缩略图整体向左移动30px</option>
					<option value="b-1-lx40" <? if($_POST['smallShowCss']=='b-1-lx40'){echo'selected="selected"';} ?>>缩略图整体向左移动40px</option>
					<option value="b-1-lx50" <? if($_POST['smallShowCss']=='b-1-lx50'){echo'selected="selected"';} ?>>缩略图整体向左移动50px</option>
					<option value="b-1-lx80" <? if($_POST['smallShowCss']=='b-1-lx80'){echo'selected="selected"';} ?>>缩略图整体向左移动80px</option>
					<option value="b-1-lx100" <? if($_POST['smallShowCss']=='b-1-lx100'){echo'selected="selected"';} ?>>缩略图整体向左移动100px</option>
					<option value="b-1-lx120" <? if($_POST['smallShowCss']=='b-1-lx120'){echo'selected="selected"';} ?>>缩略图整体向左移动120px</option>
					<option value="b-1-rx10" <? if($_POST['smallShowCss']=='b-1-rx10'){echo'selected="selected"';} ?>>缩略图整体向右移动10px</option>
					<option value="b-1-rx20" <? if($_POST['smallShowCss']=='b-1-rx20'){echo'selected="selected"';} ?>>缩略图整体向右移动20px</option>
					<option value="b-1-rx30" <? if($_POST['smallShowCss']=='b-1-rx30'){echo'selected="selected"';} ?>>缩略图整体向右移动30px</option>
					<option value="b-1-rx40" <? if($_POST['smallShowCss']=='b-1-rx40'){echo'selected="selected"';} ?>>缩略图整体向右移动40px</option>
					<option value="b-1-rx50" <? if($_POST['smallShowCss']=='b-1-rx50'){echo'selected="selected"';} ?>>缩略图整体向右移动50px</option>
					<option value="b-1-rx80" <? if($_POST['smallShowCss']=='b-1-rx80'){echo'selected="selected"';} ?>>缩略图整体向右移动80px</option>
					<option value="b-1-rx100" <? if($_POST['smallShowCss']=='b-1-rx100'){echo'selected="selected"';} ?>>缩略图整体向右移动100px</option>
					<option value="b-1-rx120" <? if($_POST['smallShowCss']=='b-1-rx120'){echo'selected="selected"';} ?>>缩略图整体向右移动120px</option>
					<option value="b-1-uy10" <? if($_POST['smallShowCss']=='b-1-uy10'){echo'selected="selected"';} ?>>缩略图整体向上移动10px</option>
					<option value="b-1-uy20" <? if($_POST['smallShowCss']=='b-1-uy20'){echo'selected="selected"';} ?>>缩略图整体向上移动20px</option>
					<option value="b-1-uy50" <? if($_POST['smallShowCss']=='b-1-uy50'){echo'selected="selected"';} ?>>缩略图整体向上移动50px</option>
					<option value="b-1-uy80" <? if($_POST['smallShowCss']=='b-1-uy80'){echo'selected="selected"';} ?>>缩略图整体向上移动80px</option>
					<option value="b-1-uy100" <? if($_POST['smallShowCss']=='b-1-uy100'){echo'selected="selected"';} ?>>缩略图整体向上移动100px</option>
					<option value="b-1-uy120" <? if($_POST['smallShowCss']=='b-1-uy120'){echo'selected="selected"';} ?>>缩略图整体向上移动120px</option>
					<option value="b-1-dy10" <? if($_POST['smallShowCss']=='b-1-dy10'){echo'selected="selected"';} ?>>缩略图整体向下移动10px</option>
					<option value="b-1-dy20" <? if($_POST['smallShowCss']=='b-1-dy20'){echo'selected="selected"';} ?>>缩略图整体向下移动20px</option>
					<option value="b-1-dy50" <? if($_POST['smallShowCss']=='b-1-dy50'){echo'selected="selected"';} ?>>缩略图整体向下移动50px</option>
					<option value="b-1-dy80" <? if($_POST['smallShowCss']=='b-1-dy80'){echo'selected="selected"';} ?>>缩略图整体向下移动80px</option>
					<option value="b-1-dy100" <? if($_POST['smallShowCss']=='b-1-dy100'){echo'selected="selected"';} ?>>缩略图整体向下移动100px</option>
					<option value="b-1-dy120" <? if($_POST['smallShowCss']=='b-1-dy120'){echo'selected="selected"';} ?>>缩略图整体向下移动120px</option>
				</select>
			</li>
			<li>
				<label for="smallShowSpeed">缩略图特效动画速度：</label>
				<select id="smallShowSpeed" name="smallShowSpeed">
					<option value="" <? if($_POST['smallShowSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
					<option value="trans01s" <? if($_POST['smallShowSpeed']=='trans01s'){echo'selected="selected"';} ?>>0.1秒</option>
					<option value="trans02s" <? if($_POST['smallShowSpeed']=='trans02s'){echo'selected="selected"';} ?>>0.2秒</option>
					<option value="trans05s" <? if($_POST['smallShowSpeed']=='trans05s'){echo'selected="selected"';} ?>>0.5秒</option>
					<option value="trans1s" <? if($_POST['smallShowSpeed']=='trans1s'){echo'selected="selected"';} ?>>1秒</option>
					<option value="trans2s" <? if($_POST['smallShowSpeed']=='trans2s'){echo'selected="selected"';} ?>>2秒</option>
					<option value="trans3s" <? if($_POST['smallShowSpeed']=='trans3s'){echo'selected="selected"';} ?>>3秒</option>
					<option value="trans4s" <? if($_POST['smallShowSpeed']=='trans4s'){echo'selected="selected"';} ?>>4秒</option>
					<option value="trans5s" <? if($_POST['smallShowSpeed']=='trans5s'){echo'selected="selected"';} ?>>5秒</option>
				</select>
			</li>
		</ul>
	</div>
	
	<div id="tabs-4">
		<ul class="setform">
			<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig['attachID']?>" />
			<li>
				<label for="sliderArrow">轮播箭头：</label>
				<select id="sliderArrow" name="sliderArrow">
					<option value="no" <? if($_POST['sliderArrow']=='no'){echo'selected="selected"';} ?>>无</option>
					<option value="yes" <? if($_POST['sliderArrow']=='yes'){echo'selected="selected"';} ?>>有</option>
				</select>
			</li>
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
                 <? 
                       for($i=10;$i<110;$i=$i+10){$dd='moveout'.$i.'';
                           if($_POST['css3Mode']==$dd){$ks='selected="selected"';} else{$ks='';}
                           echo'<option value="'.$dd.'" '.$ks.'>向外移动'.$i.'</option>';
                           }
						   
						for($i=10;$i<110;$i=$i+10){$dd='movein'.$i.'';
                           if($_POST['css3Mode']==$dd){$ks='selected="selected"';} else{$ks='';}
                           echo'<option value="'.$dd.'" '.$ks.'>向内移动'.$i.'</option>';
                           }
                         ?>  
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
				<input id="child0i1" class="setinput " type="text" title="请输入左箭头的图片地址" junezx_vali_pic="true" name="childConfig[0].oSrc" value="<?=$childConfig['oSrc']?>" />
				<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($childConfig['autoSize']=='yes'){echo'checked="checked"';} ?>/>
				<label for="child0autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="child0i3">左箭头变换图片：</label>
				<input id="child0i3" class="setinput " type="text" title="请输入左箭头的变换图片地址" junezx_vali_pic="true" name="childConfig[0].oSrcHover" value="<?=$childConfig['oSrcHover']?>" /></li>
			<li>
				<label for="child0i2">右箭头图片：</label>
				<input id="child0i2" class="setinput " type="text" title="请输入右箭头的图片地址" junezx_vali_pic="true" name="childConfig[0].tSrc" value="<?=$childConfig['tSrc']?>" />
				<input id="child0autoSize1" class="chkBox" type="checkbox" name="childConfig[0].autoSize1" value="yes" <? if($childConfig['autoSize1']=='yes'){echo'checked="checked"';} ?> />
				<label for="child0autoSize1" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="child0i4">右箭头变换图片：</label>
				<input id="child0i4" class="setinput " type="text" title="请输入右箭头的变换图片地址" junezx_vali_pic="true" name="childConfig[0].tSrcHover" value="<?=$childConfig['tSrcHover']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-3">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
				<input id="h1" type="hidden" name="defaultSmallImg" value="<?=$_POST['defaultSmallImg']?>" />
				<input id="h2" type="hidden" name="defaultSmallHover" value="<?=$_POST['defaultSmallHover']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
			</li>
			<li>
				<label for="rd2">超出部分：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="sliderOver" value="yes" <? if($_POST['sliderOver']=='yes'){echo'checked="checked"';} ?> />
					<label for="r3">显示</label>
					<input type="radio" id="r4" name="sliderOver" value="no" <? if($_POST['sliderOver']=='no'){echo'checked="checked"';} ?> />
					<label for="r4">隐藏</label>
				</div>
			</li>
			<li class="sliderOverPart">
				<label for="rd3">超出部分蒙层：</label>
				<div id="rd3">
					<input type="radio" id="r5" name="sliderOverMongolia" value="yes" <? if($_POST['sliderOverMongolia']=='yes'){echo'checked="checked"';} ?> />
					<label for="r5">开启</label>
					<input type="radio" id="r6" name="sliderOverMongolia" value="no" <? if($_POST['sliderOverMongolia']=='no'){echo'checked="checked"';} ?> />
					<label for="r6">关闭</label>
				</div>
			</li>
			<li class="sliderOverPart mongoliaPart">
				<label for="oi5">蒙层颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['sliderOverMongoliaColor']?>;"></div></div></div>
					<input id="oi5" class="setinput setinputcolor tColorPicker" type="text" title="" name="sliderOverMongoliaColor" value="<?=$_POST['sliderOverMongoliaColor']?>" />
				</div>
			</li>
			<li>
				<label for="sliderMode">轮播方式：</label>
				<select id="sliderMode" name="sliderMode">
					<option value="scrolly" <? if($_POST['sliderMode']=='scrolly'){echo'selected="selected"';} ?>>垂直滚动</option>
					<option value="scrollx" <? if($_POST['sliderMode']=='scrollx'){echo'selected="selected"';} ?>>横向滚动</option>
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
                    <option value="backIn" <? if($_POST['sliderEffect']=='backIn'){echo'selected="selected"';} ?>>起步后撤</option>
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
				<label for="sliderDelay">轮播延迟触发：</label>
				<select id="sliderDelay" name="sliderDelay">
					<? 
                       for($i=0;$i<3.1;$i=$i+0.1){
                           if(($_POST['sliderDelay']-$i)==0){$ks='selected="selected"';} else{$ks='';}
                           echo'<option value="'.$i.'" '.$ks.'>'.$i.'秒</option>';
                           }
                         ?> 
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
                for($m=1;$m<=$num;$m++){  $Active=$_POST['sliderActive']?$_POST['sliderActive']:'1'; if($Active==$m){$selected='selected="selected"';}else{$selected='';}
					echo'<option value="'.$m.'" '.$selected.'>第'.$m.'页</option>';
						}
				?>
				</select>
			</li>
			<li>
				<label for="sliderMargin">轮播滚动幅度：</label>
				<select id="sliderMargin" name="sliderMargin">
					<? 
					$nn=$num<=3?1:$num-2;
					for($m=1;$m<=$nn;$m++){ if($_POST['sliderMargin']==$m){$selected='selected="selected"';}else{$selected='';}
						echo'<option value="'.$m.'" '.$selected.'>一次滚动'.$m.'页内容</option>';
						}
				   ?>
				</select>
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
	
	$(".sliderOverPart").hide();
	$(".mongoliaPart").hide();
	"<?=$_POST['sliderOver']?>" == "yes" && ($(".sliderOverPart").show(), $(".mongoliaPart").hide());
	"<?=$_POST['sliderOver']?>" == "yes" && ( "<?=$_POST['sliderOverMongolia']?>" == "yes" ? $(".mongoliaPart").show() : $(".mongoliaPart").hide() );
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
	
	var defaultSmallImg = "<?=$_POST['defaultSmallImg']?>",
		defaultSmallHover = "<?=$_POST['defaultSmallHover']?>",
		arrDSI = defaultSmallImg.split(","),
		arrDSH = defaultSmallHover.split(",");
	$(".ui-dialog-content input,.ui-dialog-content .sliderContent > div,.ui-dialog-content textarea,.ui-dialog-content #rdshade1,.ui-dialog-content .setform > li > div,.ui-dialog-content .smallTypeDiv").buttonset();
	$("#tForm select").selectmenu();
	$(".contentType").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var contentType = "<?=$contentType[0]?>", initThumbHtml = "", smallCircleMode = "<?=$_POST['smallCircleMode'][0]?>", initThumbCircleHtml = "", initThumbConfig;
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
						'<div id="sc'+startNum+'rd1" class="contentTypeDiv" style="padding-bottom: 20px;float:left;">'+
							'<input type="radio" id="sc'+startNum+'_r1" name="contentType['+startNum+']" value="imgContent" checked="checked"/>'+
							'<label for="sc'+startNum+'_r1" title="轮播内容为图片加链接">图片轮播</label>'+
							'<input type="radio" id="sc'+startNum+'_r2" name="contentType['+startNum+']" value="customContent" />'+
							'<label for="sc'+startNum+'_r2" title="轮播内容为自定义HTML">自定义轮播</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<textarea id="sc'+startNum+'_ho1" class="thumbSetCls" name="thumbSet[]" style="display:none;"></textarea>'+
							'<textarea id="sc'+startNum+'_ho2" class="thumbSetCircleCls" name="thumbSetCircleCls[]" style="display:none;"></textarea>'+
							'<li class="imgContent contentType"  style="clear:both;">'+
								'<label for="sc'+startNum+'_i2">轮播图片：</label>'+
								'<input id="sc'+startNum+'_i2" class="setinput" type="text" title="请输入图片空间里的图片链接" junezx_vali_pic="true" name="sliderSrc[]" value="" /></li>'+
							'<li class="customContent contentType" style="clear:both;height:auto;display:none;">'+
								'<label for="sc'+startNum+'_i6">自定义内容：</label>'+
								'<textarea id="sc'+startNum+'_i6" name="customContent[]"></textarea>'+
								'<label type="button" class="btnLabel t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
							'</li>'+
							'<li class="imgContent customContent contentType">'+
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
								'<input id="sc'+startNum+'_i4" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrcT[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" /></li>'+
							'<li class="smallCircleMode_no imgContent contentType" style="clear:both;">'+
								'<label for="sc'+startNum+'_i5">切换缩略图：</label>'+
								'<input id="sc'+startNum+'_i5" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrcT[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" /></li>'+
							'<li class="smallCircleMode_no customContent contentType" style="clear:both;display:none;">'+
								'<label for="sc'+startNum+'_i7">默认缩略图：</label>'+
								'<input id="sc'+startNum+'_i7" class="setinput " type="text" title="轮播的缩略图，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallImgSrc[]" value="'+(arrDSI[startNum] || arrDSI[0])+'" /></li>'+
							'<li class="smallCircleMode_no customContent contentType" style="clear:both;display:none;">'+
								'<label for="sc'+startNum+'_i8">切换缩略图：</label>'+
								'<input id="sc'+startNum+'_i8" class="setinput " type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" junezx_vali_pic="true" name="smallHoverSrc[]" value="'+(arrDSH[startNum] || arrDSH[0])+'" /></li>'+
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
						ul.children("label:eq(2)").html("自定义内容：");
						ul.children("label:eq(3)").html("轮播缩略图模式：");
						ul.children("label:eq(4)").html("默认缩略图：");
						ul.children("label:eq(5)").html("切换缩略图：");
						ul.children("label:eq(6)").html("默认缩略图：");
						ul.children("label:eq(7)").html("切换缩略图：");
						ul.children("label:eq(8)").html("圆点默认颜色：");
						ul.children("label:eq(9)").html("圆点切换颜色：");
						ul.children("label:eq(10)").html("自定义默认缩略图：");
						ul.children("label:eq(11)").html("自定义切换缩略图：");
						ul.children("label:eq(12)").html("默认文字：");
						ul.children("label:eq(13)").html("切换文字：");
					});
					$(".ui-dialog-content input,.ui-dialog-content .sliderContent > div,.ui-dialog-content textarea,.ui-dialog-content #rdshade1,.ui-dialog-content .setform > li > div,.ui-dialog-content .smallTypeDiv").buttonset();
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
				ul.children("label:eq(2)").html("自定义内容：");
				ul.children("label:eq(3)").html("轮播缩略图模式：");
				ul.children("label:eq(4)").html("默认缩略图：");
				ul.children("label:eq(5)").html("切换缩略图：");
				ul.children("label:eq(6)").html("默认缩略图：");
				ul.children("label:eq(7)").html("切换缩略图：");
				ul.children("label:eq(8)").html("圆点默认颜色：");
				ul.children("label:eq(9)").html("圆点切换颜色：");
				ul.children("label:eq(10)").html("自定义默认缩略图：");
				ul.children("label:eq(11)").html("自定义切换缩略图：");
				ul.children("label:eq(12)").html("默认文字：");
				ul.children("label:eq(13)").html("切换文字：");
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
			ul.children("label:eq(0)").html("链接地址：");
			ul.children("label:eq(1)").html("轮播图片：");
			ul.children("label:eq(2)").html("自定义内容：");
			ul.children("label:eq(3)").html("轮播缩略图模式：");
			ul.children("label:eq(4)").html("默认缩略图：");
			ul.children("label:eq(5)").html("切换缩略图：");
			ul.children("label:eq(6)").html("默认缩略图：");
			ul.children("label:eq(7)").html("切换缩略图：");
			ul.children("label:eq(8)").html("圆点默认颜色：");
			ul.children("label:eq(9)").html("圆点切换颜色：");
			ul.children("label:eq(10)").html("自定义默认缩略图：");
			ul.children("label:eq(11)").html("自定义切换缩略图：");
			ul.children("label:eq(12)").html("默认文字：");
			ul.children("label:eq(13)").html("切换文字：");
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
	var activePage = "<?=$_POST['activePage']?>", activeLen = $("#sliderContentUl").children("li").length;
	if(activePage!="") {
		activePage = parseInt(activePage.substr(1), 10) + 1;
		setPage(document.getElementById("contentPage"), activeLen, activePage);
		$("#contentPage").children("a[rel='"+activePage+"']").trigger("click");
	}
});
</script>