<?
$data=$_POST; 

$childConfigx = $data['childConfig'];
$childConfig=$childConfigx['0'];
$nestConfig = $data['nestConfig'];
$yenum=count($nestConfig);  //小页个数
$sliderHref=$data['sliderHref'];
$dynum=count($sliderHref); //大页个数
if($data['active']==-1){$active=2;}else{$active=$data['active'];}
$dis1='';
$dis2='';
?>
<form id="tForm" form-data="jqtb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">整体设置</a></li>
		<?
        for($i=0;$i<$dynum;$i++){ $k1=$i+4;$k2=$i+1;
   			echo'<li class="nest-slider-tabs"><a href="#tabs-'.$k1.'">第'.$k2.'页</a></li>';	
		}
		?>
        <li class="nest-2gediandide"><a href="#tabs-2">缩略图设置</a></li>
		<li class="nest-2gediandide"><a href="#tabs-3">箭头设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
				<div id="nestPageCount" style="display:none;"><?=$dynum?></div>
				<div id="nestSliderCount" style="display:none;"><?=$yenum?></div>
				<input id="h1" type="hidden" name="defaultSmallImg" value="<?=$data['defaultSmallImg']?>" />
				<input id="h2" type="hidden" name="defaultSmallHover" value="<?=$data['defaultSmallHover']?>" />
			</li>
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
				<label for="nestSliderAdd">轮播页数控制：</label>
				<span>当前共有<strong id="nestPageCountShow"><?=$dynum?></strong>页</span>
				<button id="nestSliderAdd" class="tNestSliderDialog" type="button" name="nestSliderAdd">添加一页</button>
			</li>
			<li>
				<label for="nestSliderSort">轮播顺序调整：</label>
				<button id="nestSliderSort" class="tNestSliderDialog" type="button" name="nestSliderSort">顺序调整</button>
				<div id="slidersortbox" style="display:none;position:absolute;width:120px;background:#eee;left:180px;top:310px;z-index: 1;">
					<ul id="slidersortlist">
					</ul>
					<div>
						<span id="slidersortok"><i class="ui-icon ui-icon-circle-check" style="display:inline-block;"></i> 确定</span>
						<span id="slidersortcancel"><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 取消</span>
					</div>
				</div>
			</li>
			<li style="text-align:center;font-size:14px;color:#333;background:url(http://img03.taobaocdn.com/imgextra/i3/39767794/TB2RPU4apXXXXcLXXXXXXXXXXXX_!!39767794.png);"><span style="background:#fff;padding:0 10px;">高级设置</span></li>
			<li style="height:auto;">
				<ul class="sliderContentUl" style="padding-left:0px;list-style:none;">
		<?
        for($i=0;$i<$yenum;$i++){ $mm=$i+1;
			$nestConfign=$nestConfig[$i];
		?>
        <li class="sliderContent" style="clear:both;height:auto;">
			<ul style="padding-left:0px;list-style:none;">
				<li>
					<label for="nest<?=$i?>sliderMode">第<?=$mm?>层轮播方式：</label>
					<select id="nest<?=$i?>sliderMode" name="nestConfig[<?=$i?>].sliderMode">
						<option value="scrolly1" <? if($nestConfig[$i]['sliderMode']=='scrolly1'){echo'selected="selected"';} ?>>滚动-从上到下</option>
						<option value="scrolly" <? if($nestConfig[$i]['sliderMode']=='scrolly'){echo'selected="selected"';} ?>>滚动-从下到上</option>
						<option value="scrollx1" <? if($nestConfig[$i]['sliderMode']=='scrollx1'){echo'selected="selected"';} ?>>滚动-从左到右</option>
						<option value="scrollx" <? if($nestConfig[$i]['sliderMode']=='scrollx'){echo'selected="selected"';} ?>>滚动-从右到左</option>
						<option value="fade" <? if($nestConfig[$i]['sliderMode']=='fade'){echo'selected="selected"';} ?>>淡入淡出</option>
					</select>
				</li>
				<li>
					<label for="nest<?=$i?>sliderEffect">第<?=$mm?>层轮播特效：</label>
					<select id="nest<?=$i?>sliderEffect" name="nestConfig[<?=$i?>].sliderEffect">
						<option value="easeOutStrong" <? if($nestConfig[$i]['sliderEffect']=='easeOutStrong'){echo'selected="selected"';} ?>>由快到慢 - 强</option>
						<option value="easeInStrong" <? if($nestConfig[$i]['sliderEffect']=='easeInStrong'){echo'selected="selected"';} ?>>由慢到快 - 强</option>
						<option value="easeBothStrong" <? if($nestConfig[$i]['sliderEffect']=='easeBothStrong'){echo'selected="selected"';} ?>>经典滑动</option>
						<option value="elasticIn" <? if($nestConfig[$i]['sliderEffect']=='elasticIn'){echo'selected="selected"';} ?>>抖动变幻</option>
						<option value="elasticOut" <? if($nestConfig[$i]['sliderEffect']=='elasticOut'){echo'selected="selected"';} ?>>弹性滑动</option>
						<option value="backIn" <? if($nestConfig[$i]['sliderEffect']=='backIn'){echo'selected="selected"';} ?>>起步后撤</option>
						<option value="backOut" <? if($nestConfig[$i]['sliderEffect']=='backOut'){echo'selected="selected"';} ?>>滑动迟缓</option>
						<option value="bounceOut" <? if($nestConfig[$i]['sliderEffect']=='bounceOut'){echo'selected="selected"';} ?>>动感弹跳</option>
						<option value="bounceBoth" <? if($nestConfig[$i]['sliderEffect']=='bounceBoth'){echo'selected="selected"';} ?>>动感震动</option>
						<option value="easeIn" <? if($nestConfig[$i]['sliderEffect']=='easeIn'){echo'selected="selected"';} ?>>由慢到快 - 弱</option>
						<option value="easeOut" <? if($nestConfig[$i]['sliderEffect']=='easeOut'){echo'selected="selected"';} ?>>由快到慢 - 弱</option>
						<option value="easeBoth" <? if($nestConfig[$i]['sliderEffect']=='easeBoth'){echo'selected="selected"';} ?>>简单滚动</option>
					</select>
				</li>
				<li>
					<label for="nest<?=$i?>sliderDuration">第<?=$mm?>层动画时长：</label>
					<select id="nest<?=$i?>sliderDuration" name="nestConfig[<?=$i?>].sliderDuration">
						<?
                        for($n=0.20;$n<4.25;$n=$n+0.05){ $mks1=$nestConfig[$i]['sliderDuration'] + 0 ; $n=$n+0;
							$sele=''.$n.''==''.$mks1.''?'selected="selected"':'';
							echo'<option value="'.$n.'" '.$sele.'>'.$n.'秒</option>';
							}
						
						?>
                   </select>
				</li>
				<li>
					<label for="nest<?=$i?>sliderDelay">第<?=$mm?>层延迟触发：</label>
					<select id="nest<?=$i?>sliderDelay" name="nestConfig[<?=$i?>].sliderDelay">
						<?
                        for($n=0.0;$n<3.1;$n=$n+0.1){$mks15=$nestConfig[$i]['sliderDelay'] + 0 ; $n=$n+0;
							$sele=''.$n.''==''.$mks15.''?'selected="selected"':'';
							echo'<option value="'.$n.'" '.$sele.'>'.$n.'秒</option>';
							}
						
						?>
                    </select>
				</li>
			</ul>
		</li>
		<?  }  ?>
		</ul>
			</li>
			<li>
				<div class="contentPage" style="width:500px;margin:0 auto;">
				</div>
			</li>
			<li>
				<div class="pageManager" style="width:500px;margin:0 auto;">
					<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一层</span>
					<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前层</span>
				</div>
			</li>
            <li>
				<label for="sliderAuto">是否自动轮播：</label>
				<select id="sliderAuto" name="sliderAuto">
                    <option value="true" <? if($data['sliderAuto']=='true'){echo'selected="selected"';} ?>>开启自动轮播</option>
                    <option value="false" <? if($data['sliderAuto']=='false'){echo'selected="selected"';} ?>>关闭自动轮播</option>
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
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
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
				<label for="kgdSwitch">缩略图开关灯：</label>
				<select id="kgdSwitch" name="kgdSwitch">
					<option value="white" <? if($data['kgdSwitch']=='white'){echo'selected="selected"';} ?>>白色开关灯</option>
					<option value="black" <? if($data['kgdSwitch']=='black'){echo'selected="selected"';} ?>>黑色开关灯</option>
					<option value="transparent" <? if($data['kgdSwitch']=='transparent'){echo'selected="selected"';} ?>>关闭开关灯</option>
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
    <?
        for($i=0;$i<$dynum;$i++){ $k1=$i+4;$k2=$i+1;
		?> 
        
		<div id="tabs-<?=$k1?>" class="nest-slider-page">
		<ul class="setform">
			<li style="height:auto;">
				<ul class="sliderContentUl" style="padding-left:0px;list-style:none;">
					
                   <?
        for($c=0;$c<$yenum;$c++){  $cm=$c+1;
		$nestConfigi=$nestConfig[$c];
		$contentType=$nestConfigi['contentType'];

		$sliderSrc=$nestConfigi['sliderSrc'];
		$customContent=$nestConfigi['customContent'];
		  ?> 
        <li class="sliderContent" style="clear:both;height:auto;">
			<label for="n<?=$c?>sc<?=$i?>rd1">第<?=$cm?>层内容：</label>
			<div id="n<?=$c?>sc<?=$i?>rd1">
				<input type="radio" id="n<?=$c?>sc<?=$i?>_r1" name="nestConfig[<?=$c?>]['contentType'][<?=$i?>]" value="imgContent" <? if($contentType[$i]=='imgContent'){echo'checked="checked"';$dis1='display:none';}else{$dis1='';} ?> />
				<label for="n<?=$c?>sc<?=$i?>_r1" title="轮播内容为图片加链接" style="width:78px;">图片轮播</label>
				<input type="radio" id="n<?=$c?>sc<?=$i?>_r2" name="nestConfig[<?=$c?>]['contentType'][<?=$i?>]" value="customContent" <? if($contentType[$i]=='customContent'){echo'checked="checked"';$dis2='display:none';}else{$dis2='';} ?> />
				<label for="n<?=$c?>sc<?=$i?>_r2" title="轮播内容为自定义HTML" style="width:90px;">自定义轮播</label>
			</div>
			<ul style="padding-left:0px;list-style:none;">
				<li class="imgContent contentType" style="clear:both;padding-top:10px;<?=$dis2?>">
					<label for="n<?=$c?>sc<?=$i?>_i1">第<?=$cm?>层图片：</label>
					<input id="n<?=$c?>sc<?=$i?>_i1" class="setinput" type="text" title="请输入图片空间里的图片链接" name="nestConfig[<?=$c?>]['sliderSrc'][]" value="<?=$sliderSrc[$i]?>" />
				</li>
				<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;<?=$dis1?>">
					<label for="n<?=$c?>sc<?=$i?>_i2">第<?=$cm?>层自定义：</label>
					<textarea id="n<?=$c?>sc<?=$i?>_i2" name="nestConfig[<?=$c?>]['customContent'][]"><?=stripslashes( $customContent[$i] )?></textarea>
					<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$c?>][\'customContent\'][]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
				</li>
			</ul>
		</li>
    <? } ?>    
	</ul>
	</li>
			<li>
				<div class="contentPage" style="width:500px;margin:0 auto;">
				</div>
			</li>
			<li>
				<div class="pageManager" data-curpage="<?=$i?>" style="width:500px;margin:0 auto;">
					<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一层</span>
					<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前层</span>
				</div>
			</li>
			<li class="imgContent contentType" style="clear:both;">
				<label for="sc<?=$i?>_i1">链接地址：</label>
				<input id="sc<?=$i?>_i1" class="setinput" type="text" title="请输入链接地址" name="sliderHref[]" value="<?=$data['sliderHref'][$i]?>" />
			</li>
			<li style="clear:both;display:none;">
				<label for="sc<?=$i?>_i2">缩略图链接地址：</label>
				<input id="sc<?=$i?>_i2" class="setinput" type="text" title="请输入链接地址" name="smallHref[]" value="<?=$data['smallHref'][$i]?>" />
			</li>
			<li class="smallCircleModeLi">
				<label for="sc<?=$i?>_smallCircleMode">缩略图模式：</label>
				<select id="sc<?=$i?>_smallCircleMode" name="smallCircleMode[<?=$i?>]">
					<option value="no" <? if($data['smallCircleMode'][$i]=='no'){echo'selected="selected"';} ?>>普通缩略图</option>
					<option value="yes" <? if($data['smallCircleMode'][$i]=='yes'){echo'selected="selected"';} ?>>圆点触点</option>
				</select>
			</li>
			<li class="smallCircleModeNo" style="clear:both;">
				<label for="sc<?=$i?>_i3">默认缩略图：</label>
				<input id="sc<?=$i?>_i3" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrc[]" value="<?=$data['smallImgSrc'][$i]?>" />
			</li>
			<li class="smallCircleModeNo" style="clear:both;">
				<label for="sc<?=$i?>_i4">切换缩略图：</label>
				<input id="sc<?=$i?>_i4" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrc[]" value="<?=$data['smallHoverSrc'][$i]?>" />
			</li>
			<li class="smallCircleMode thumbCircleCommon" style="clear:both;display:none;">
				<label for="sc<?=$i?>_smallCircleBgColor">圆点默认颜色：</label>
				<input id="sc<?=$i?>_smallCircleBgColor" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor[]" value="<?=$data['smallCircleBgColor'][$i]?>" />
			</li>
			<li class="smallCircleMode thumbCircleCommon" style="clear:both;display:none;">
				<label for="sc<?=$i?>_smallCircleBgColor1">圆点切换颜色：</label>
				<input id="sc<?=$i?>_smallCircleBgColor1" class="setinput tColorPicker" type="text" title="" name="smallCircleBgColor1[]" value="<?=$data['smallCircleBgColor1'][$i]?>" />
			</li>
			<li>
				<div class="sliderManager" style="width:500px;margin:0 auto;">
					<span style="padding-left:52px;padding-right:52px;" data-tabs="tabs-<?=$k1?>"><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前页</span>
				</div>
			</li>
		</ul>
	</div>
    
    <? } ?>
</div>
</form>
<script type="text/javascript">
$(function() {

	$("#tabs").tabs({active: <?=$active?>});
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
	
	var defaultSmallImg = "",
		defaultSmallHover = "",
		arrDSI = defaultSmallImg.split(","),
		arrDSH = defaultSmallHover.split(",");
	
	$("input, .sliderContent > div, textarea").buttonset();
	$("#tForm select").selectmenu();
	var nestPageCount = parseInt($("#nestPageCount").html(), 10);
	var nestSliderCount = parseInt($("#nestSliderCount").html(), 10);
	$(".sliderContent").hide();
	$(".contentPage").each(function(i, e) {
		setPage(this, nestSliderCount, 1, ["上一层", "下一层"]);
		$(".sliderContentUl:eq("+i+") .sliderContent:eq(0)").show();
	});
	
	$(".smallCircleModeLi").find("select").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "yes") {
				$(this).parent().parent().find(".smallCircleModeNo").hide();
				$(this).parent().parent().find(".smallCircleMode").show();
			} else {
				var val1 = $(this).parent().parent().parent().find("input[type='radio']:checked").val();
				$(this).parent().parent().find(".smallCircleModeNo").show();
				$(this).parent().parent().find(".smallCircleMode").hide();
			}
		}
	});
	
	
	$(".contentPage").on("click", function() {
		var index = $(this).index(".contentPage");
		var num = parseInt($(this).children("a.on").html(), 10) - 1, 
		contentType = $(".sliderContentUl:eq("+index+") .sliderContent:eq("+num+")").find("input[type='radio']:checked").val();
		$(".sliderContentUl:eq("+index+") .contentType").hide();
		$(".sliderContentUl:eq("+index+") .sliderContent").hide();
		$(".sliderContentUl:eq("+index+") .sliderContent:eq("+num+")").show();
		$(".sliderContentUl:eq("+index+") .sliderContent:eq("+num+")").find("."+contentType).show();
	});
	
	$("#tabs").on("click", "input[type='radio']", function(event) {
		var val = $(this).val();
		$(this).parent().parent().find(".contentType").hide();
		$(this).parent().parent().find("."+val).show();
	});
	
	$("#tabs").on("click", ".sliderManager span", function(event) {
		var nestPageCount = parseInt($("#nestPageCount").html(), 10), tabs = $("#tabs");
		var tabsid = $(this).attr("data-tabs");
		tabs.tabs( "destroy" );
		$("#"+tabsid).remove();
		nestPageCount--;
		tabs.children("ul").children("li").children("a[href='#"+tabsid+"']").parent().remove();
		tabs.children("ul").children("li").each(function(i,e) {
			var len =tabs.children("ul").children("li").length;
			if(i >= 1 && i < len - 2) {
				$(this).children("a").html("第"+(i)+"页");
			}
		});
		
		tabs.tabs({active: nestPageCount});
		$("#nestPageCount").html(nestPageCount);
		$("#nestPageCountShow").html(nestPageCount);
		
	});
	
	$("#tabs").on("click", ".pageManager span", function(event) {
		var nestPageCount = parseInt($("#nestPageCount").html(), 10);
		var nestSliderCount = parseInt($("#nestSliderCount").html(), 10);
		var curpage = [];
		$(".pageManager").each(function() {
			if($(this).attr("data-curpage")) {
				curpage.push($(this).attr("data-curpage"));
			}
		});
		var sliderDurationOption = "", dVal, dOselected;
		for(var i=0;i<81;i++) {
			dVal = ((i*5 + 20) / 100).toFixed(2);
			if(dVal == "0.50") {
				dOselected = ' selected="selected"';
			} else {
				dOselected = "";
			}
			sliderDurationOption += '<option value="'+dVal+'"'+dOselected+'>'+dVal+'秒</option>';
		}
		var sliderDelayOption = "", dVal1, dOselected1;
		for(var i=0;i<31;i++) {
			dVal1 = (i / 10).toFixed(1);
			if(dVal1 == "0.0") {
				dOselected = ' selected="selected"';
			} else {
				dOselected = "";
			}
			sliderDelayOption += '<option value="'+dVal1+'"'+dOselected1+'>'+dVal1+'秒</option>';
		}
		var t = $(this),pageIndex = t.parent().index(".pageManager"), len,
		num = parseInt($(".contentPage:eq("+pageIndex+")").children("a.on").html(), 10) - 1,
		index = t.index();
		if(index == 0) {
			$('<li class="sliderContent" style="clear:both;height:auto;">'+
				'<ul style="padding-left:0px;list-style:none;">'+
					'<li>'+
						'<label for="nest'+nestSliderCount+'sliderMode">轮播方式：</label>'+
						'<select id="nest'+nestSliderCount+'sliderMode" name="nestConfig['+nestSliderCount+'].sliderMode">'+
							'<option value="scrolly" selected="selected">上下滚动</option>'+
							'<option value="scrollx">横向滚动</option>'+
							'<option value="fade">淡入淡出</option>'+
						'</select>'+
					'</li>'+
					'<li>'+
						'<label for="nest'+nestSliderCount+'sliderEffect">轮播特效：</label>'+
						'<select id="nest'+nestSliderCount+'sliderEffect" name="nestConfig['+nestSliderCount+'].sliderEffect">'+
							'<option value="easeOutStrong">由快到慢 - 强</option>'+
							'<option value="easeInStrong">由慢到快 - 强</option>'+
							'<option value="easeBothStrong">经典滑动</option>'+
							'<option value="elasticIn">抖动变幻</option>'+
							'<option value="elasticOut">弹性滑动</option>'+
							'<option value="backIn">起步后撤</option>'+
							'<option value="backOut">滑动迟缓</option>'+
							'<option value="bounceOut">动感弹跳</option>'+
							'<option value="bounceBoth">动感震动</option>'+
							'<option value="easeIn">由慢到快 - 弱</option>'+
							'<option value="easeOut">由快到慢 - 弱</option>'+
							'<option value="easeBoth" selected="selected">简单滚动</option>'+
						'</select>'+
					'</li>'+
					'<li>'+
						'<label for="nest'+nestSliderCount+'sliderDuration">动画时长：</label>'+
						'<select id="nest'+nestSliderCount+'sliderDuration" name="nestConfig['+nestSliderCount+'].sliderDuration">'+
							sliderDurationOption+
						'</select>'+
					'</li>'+
					'<li>'+
						'<label for="nest'+nestSliderCount+'sliderDelay">延迟触发：</label>'+
						'<select id="nest'+nestSliderCount+'sliderDelay" name="nestConfig['+nestSliderCount+'].sliderDelay">'+
							sliderDelayOption+
						'</select>'+
					'</li>'+
				'</ul>'+
			'</li>').appendTo($(".sliderContentUl:eq(0)"));
			
			$(".sliderContentUl:eq(0)").children("li.sliderContent").each(function(i, e) {
				var ul = $(this).children("ul");
				ul.find("label:eq(0)").html("第"+(i+1)+"轮播方式：");
				ul.find("label:eq(1)").html("第"+(i+1)+"轮播特效：");
				ul.find("label:eq(2)").html("第"+(i+1)+"动画时长：");
				ul.find("label:eq(3)").html("第"+(i+1)+"延迟触发：");
			});
			$(".sliderContentUl:eq(0) .sliderContent").hide();
			len = $(".sliderContentUl:eq(0)").children("li").length;
			$(".contentPage").html("");
			setPage($(".contentPage:eq(0)")[0], len, len, ["上一层", "下一层"]);
			$(".contentPage:eq(0)").children("a.on").trigger("click");
			for(var i = 0; i<nestPageCount;i++) {
				$('<li class="sliderContent" style="clear:both;height:auto;">'+
					'<label for="n'+nestSliderCount+'sc'+curpage[i]+'rd1">第'+nestSliderCount+'层内容：</label>'+
					'<div id="n'+nestSliderCount+'sc'+curpage[i]+'rd1">'+
						'<input type="radio" id="n'+nestSliderCount+'sc'+curpage[i]+'_r1" name="nestConfig['+nestSliderCount+'][\'contentType\']['+curpage[i]+']" checked="checked" value="imgContent" />'+
						'<label for="n'+nestSliderCount+'sc'+curpage[i]+'_r1" title="轮播内容为图片加链接" style="width:78px;">图片轮播</label>'+
						'<input type="radio" id="n'+nestSliderCount+'sc'+i+'_r2" name="nestConfig['+nestSliderCount+'][\'contentType\']['+curpage[i]+']" value="customContent" />'+
						'<label for="n'+nestSliderCount+'sc'+curpage[i]+'_r2" title="轮播内容为自定义HTML" style="width:90px;">自定义轮播</label>'+
					'</div>'+
					'<ul style="padding-left:0px;list-style:none;">'+
						'<li class="imgContent contentType" style="clear:both;padding-top:10px;">'+
							'<label for="n'+nestSliderCount+'sc'+curpage[i]+'_i1">第'+nestSliderCount+'层图片：</label>'+
							'<input id="n'+nestSliderCount+'sc'+curpage[i]+'_i1" class="setinput" type="text" title="请输入图片空间里的图片链接" name="nestConfig['+nestSliderCount+'][\'sliderSrc\'][]" value="" />'+
						'</li>'+
						'<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;">'+
							'<label for="n'+nestSliderCount+'sc'+curpage[i]+'_i3">第'+nestSliderCount+'层自定义：</label>'+
							'<textarea id="n'+nestSliderCount+'sc'+curpage[i]+'_i3" name="nestConfig['+nestSliderCount+'][\'customContent\'][]"></textarea>'+
							'<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+nestSliderCount+'][\'customContent\'][]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
						'</li>'+
					'</ul>'+
				'</li>').appendTo($(".sliderContentUl:eq("+(i+1)+")"));
				$(".sliderContentUl:eq("+(i+1)+")").children("li.sliderContent").each(function(ii, e) {
					var ul = $(this).children("ul");
					$(this).children("label:eq(0)").html("第"+(ii+1)+"层内容：");
					ul.find("label:eq(0)").html("第"+(ii+1)+"层图片：");
					ul.find("label:eq(1)").html("第"+(ii+1)+"层自定义：");
				});
				$(".sliderContentUl:eq("+(i+1)+") .sliderContent").hide();
				setPage($(".contentPage:eq("+(i+1)+")")[0], len, len, ["上一层", "下一层"]);
				$(".contentPage:eq("+(i+1)+")").children("a.on").trigger("click");
			}
			$("input, .sliderContent > div, textarea").buttonset();
			$("#tForm select").selectmenu();
			nestSliderCount++;
			$("#nestSliderCount").html(nestSliderCount);
		} else if(index == 1) {
			if($(".sliderContentUl:eq(0)").children("li").length == 1) {
				return;
			}
			$(".contentPage").html("");
			$(".sliderContentUl").each(function(ii, event) {
				var temp = $(".sliderContentUl:eq("+ii+")").children("li.sliderContent").eq(num), tempNum = num;
				temp.remove();
				len = $(".sliderContentUl:eq(0)").children("li").length;
				if(tempNum+1 > len) { tempNum = len - 1;}
				setPage($(".contentPage:eq("+ii+")")[0], len, tempNum+1, ["上一层", "下一层"]);
				$(".contentPage:eq("+ii+")").children("a.on").trigger("click");
				if(ii == 0) {
					$(".sliderContentUl:eq(0)").children("li.sliderContent").each(function(i, e) {
						var ul = $(this).children("ul");
						ul.find("label:eq(0)").html("第"+(i+1)+"轮播方式：");
						ul.find("label:eq(1)").html("第"+(i+1)+"轮播特效：");
						ul.find("label:eq(2)").html("第"+(i+1)+"动画时长：");
						ul.find("label:eq(3)").html("第"+(i+1)+"延迟触发：");
					});
				} else {
					$(".sliderContentUl:eq("+ii+")").children("li.sliderContent").each(function(i, e) {
						var ul = $(this).children("ul");
						$(this).children("label:eq(0)").html("第"+(i+1)+"层内容：");
						ul.find("label:eq(0)").html("第"+(i+1)+"层图片：");
						ul.find("label:eq(1)").html("第"+(i+1)+"层自定义：");
					});
				}
			});
			nestSliderCount--;
			$("#nestSliderCount").html(nestSliderCount);
		}
	});
	
	var npc = <?=$dynum?>;
	
	$("#nestSliderAdd").on("click", function(event) {
		var nestPageCount = parseInt($("#nestPageCount").html(), 10);
		var nestSliderCount = parseInt($("#nestSliderCount").html(), 10);
		var tabs = $("#tabs"), nestsliderContent = "", div;
		for(var i = 0; i<nestSliderCount;i++) {
			nestsliderContent += '<li class="sliderContent" style="clear:both;height:auto;">'+
				'<label for="n'+i+'sc'+npc+'rd1">第'+(i+1)+'层内容：</label>'+
				'<div id="n'+i+'sc'+npc+'rd1">'+
					'<input type="radio" id="n'+i+'sc'+npc+'_r1" name="nestConfig['+i+'][\'contentType\']['+npc+']" checked="checked" value="imgContent" />'+
					'<label for="n'+i+'sc'+npc+'_r1" title="轮播内容为图片加链接" style="width:78px;">图片轮播</label>'+
					'<input type="radio" id="n'+i+'sc'+npc+'_r2" name="nestConfig['+i+'][\'contentType\']['+npc+']" value="customContent" />'+
					'<label for="n'+i+'sc'+npc+'_r2" title="轮播内容为自定义HTML" style="width:90px;">自定义轮播</label>'+
				'</div>'+
				'<ul style="padding-left:0px;list-style:none;">'+
					'<li class="imgContent contentType" style="clear:both;padding-top:10px;">'+
						'<label for="n'+i+'sc'+npc+'_i1">第'+(i+1)+'层图片：</label>'+
						'<input id="n'+i+'sc'+npc+'_i1" class="setinput" type="text" title="请输入图片空间里的图片链接" name="nestConfig['+i+'][\'sliderSrc\'][]" value="" />'+
					'</li>'+
					'<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;display:none;">'+
						'<label for="n'+i+'sc'+npc+'_i3">第'+(i+1)+'层自定义：</label>'+
						'<textarea id="n'+i+'sc'+npc+'_i3" name="nestConfig['+i+'][\'customContent\'][]"></textarea>'+
						'<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+i+'][\'customContent\'][]" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
					'</li>'+
				'</ul>'+
			'</li>';
		}
		div = '<div id="tabs-'+(npc+4)+'">'+
			'<ul class="setform">'+
				'<li style="height:auto;">'+
					'<ul class="sliderContentUl" style="padding-left:0px;list-style:none;">'+
					nestsliderContent+
					'</ul>'+
				'</li>'+
				'<li>'+
					'<div class="contentPage" style="width:500px;margin:0 auto;">'+
					'</div>'+
				'</li>'+
				'<li>'+
					'<div class="pageManager" data-curpage="'+npc+'" style="width:500px;margin:0 auto;">'+
						'<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一层</span> '+
						'<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前层</span>'+
					'</div>'+
				'</li>'+
				'<li style="clear:both;">'+
					'<label for="sc'+npc+'_i1">链接地址：</label>'+
					'<input id="sc'+npc+'_i1" class="setinput" type="text" title="请输入链接地址" name="sliderHref[]" value="#" />'+
				'</li>'+
				'<li style="clear:both;display:none;">'+
					'<label for="sc'+npc+'_i1">缩略图链接地址：</label>'+
					'<input id="sc'+npc+'_i1" class="setinput" type="text" title="请输入链接地址" name="smallHref[]" value="#" />'+
				'</li>'+
			



				'<li style="clear:both;">'+
					'<label for="sc'+npc+'_i2">默认缩略图：</label>'+
					'<input id="sc'+npc+'_i2" class="setinput" type="text" title="轮播的缩略图，请输入图片空间里的图片链接" name="smallImgSrc[]" value="'+(arrDSI[nestPageCount] || arrDSI[0])+'" />'+
				'</li>'+
				'<li style="clear:both;">'+
					'<label for="sc'+npc+'_i3">切换缩略图：</label>'+
					'<input id="sc'+npc+'_i3" class="setinput" type="text" title="轮播切换时缩略图变换的图片，请输入图片空间里的图片链接" name="smallHoverSrc[]" value="'+(arrDSH[nestPageCount] || arrDSH[0])+'" />'+
				'</li>'+
				'<li>'+
					'<div class="sliderManager" style="width:500px;margin:0 auto;">'+
						'<span style="padding-left:52px;padding-right:52px;" data-tabs="tabs-'+(npc+4)+'"><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前页</span>'+
					'</div>'+
				'</li>'+
			'</ul>'+
		'</div>';
		tabs.tabs( "destroy" );
		$('<li><a href="#tabs-'+(npc+4)+'">第'+(nestPageCount+1)+'页</a></li>').insertBefore(tabs.children("ul").children("li:eq("+(tabs.children("ul").children("li").length - 2)+")"));
		tabs.append(div);
		tabs.tabs({active: nestPageCount+1});
		try {
			$("input, .sliderContent > div, textarea").buttonset();
			$("#tForm select").selectmenu();
		} catch(e) {
			
		}
		$(".sliderContentUl:eq("+(nestPageCount+1)+") .sliderContent").hide();
		$(".sliderContentUl:eq("+(nestPageCount+1)+") .sliderContent:eq(0)").show();
		setPage($(".contentPage:eq("+(nestPageCount+1)+")")[0], nestSliderCount, 1, ["上一层", "下一层"]);
		$(".contentPage:eq("+(nestPageCount+1)+")").on("click", function() {
			var index = $(this).index(".contentPage");
			var num = parseInt($(this).children("a.on").html(), 10) - 1, 
			contentType = $(".sliderContentUl:eq("+index+") .sliderContent:eq("+num+")").find("input[type='radio']:checked").val();
			$(".sliderContentUl:eq("+index+") .contentType").hide();
			$(".sliderContentUl:eq("+index+") .sliderContent").hide();
			$(".sliderContentUl:eq("+index+") .sliderContent:eq("+num+")").show();
			$(".sliderContentUl:eq("+index+") .sliderContent:eq("+num+")").find("."+contentType).show();
		});
		npc++;
		nestPageCount++;
		$("#nestPageCount").html(nestPageCount);
		$("#nestPageCountShow").html(nestPageCount);
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
	
	$("#nestSliderSort").on("click", function() {
		$("#slidersortbox").show();
		var c = $(".nest-slider-page"), cl = c.length;
		$("#slidersortbox").children("ul").html("");
		for(var i = 0;i<cl;i++) {
			$("#slidersortbox").children("ul").append('<li data-sort="'+i+'">轮播页'+(i+1)+'</li>');
		}
	});
	
	$("#slidersortok").on("click", function() {
		var arr = [];
		$("#slidersortbox").children("ul").children("li").each(function(i, e) {
			var _t = $(this), sort = _t.attr("data-sort");
			$(".nest-slider-page").eq(sort).attr("data-sort", i);
			$(".nest-slider-tabs").eq(sort).attr("data-sort", i);
			arr.push(sort);
		});
		for(var i = 0;i<arr.length; i++) {
			$(".nest-slider-page[data-sort='"+i+"']").appendTo($("#tabs"));
			$(".nest-slider-tabs[data-sort='"+i+"']").appendTo($("#tabs").children("ul:eq(0)"));
			$(".nest-slider-tabs[data-sort='"+i+"']").children("a").html("第"+(i+1)+"页");
		}
		$(".nest-2gediandide").appendTo($("#tabs").children("ul:eq(0)"));
		//2gediandide
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