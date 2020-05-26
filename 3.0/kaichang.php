<form id="tForm" form-data="jkcb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content" id="cmtsPhpContent">
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
						<label for="rdv">内容设置：</label>
						<div id="rdv">
							<label for="rdv1" title="" style="width:98px;">图片</label>
							<input type="radio" id="rdv1" name="contentType" value="imgContent" <? if($_POST['contentType']=='imgContent'){echo'checked="checked"';} ?> />
							<label for="rdv2" title="" style="width:98px;">自定义内容</label>
							<input type="radio" id="rdv2" name="contentType" value="customContent" <? if($_POST['contentType']=='customContent'){echo'checked="checked"';} ?> />
						</div>
					</li>
					<li class="imgContent contentType">
						<label for="jdhi_src">背景图片：</label>
						<input id="jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="autoSize" class="chkLabel">自动高宽</label>
					</li>
					<li class="imgContent contentType">
						<label for="i2">链接地址：</label>
						<input id="i2" class="setinput" type="text" title="请输入链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" <?=$_POST['hrefMode']=='_blank'?'checked="checked"':'' ?> />
						<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
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
                    
                    <li class="imgContent contentType">
						<label>背景图片位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
					</li>
					<li class="imgContent contentType">
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					
					<li class="customContent contentType">
						<label for="customContent">自定义内容：</label>
						<textarea id="customContent" name="customContent"><?=stripslashes($_POST['customContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li style="display:none;">
						<label for="cssTrigger">动画触发方式：</label>
						<select id="cssTrigger" name="cssTrigger">
							<option value="" <?=$_POST['cssTrigger']==''?'selected="selected"':'' ?>>自动触发</option>
							<option value="mouse" <?=$_POST['cssTrigger']=='mouse'?'selected="selected"':'' ?>>鼠标点击触发</option>
						</select>
					</li>
					<li>
						<label for="rd1">显示方式：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="displayMode" value=""  <?=$_POST['displayMode']==''?'checked="checked"':'' ?>/>
							<label for="r1" title="">始终显示</label>
							<input type="radio" id="r2" name="displayMode" value="june-mr-fi1" <?=$_POST['displayMode']=='june-mr-fi1'?'checked="checked"':'' ?> />
							<label for="r2" title="">淡入显示</label>
							<input type="radio" id="r3" name="displayMode" value="june-mr-fo0" <?=$_POST['displayMode']=='june-mr-fo0'?'checked="checked"':'' ?>>
							<label for="r3" title="">淡出消失</label>
						</div>
					</li>
					<li class="optiongroup">
						<label for="cssModeX">左右移动：</label>
						<select class="cssModeTypeSelect" style="width:98px;" id="cssModeX" name="cssModeX">
							<option value="" <? if($_POST['cssModeX']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
                            <option value="june-mr-lx" <? if(strstr($_POST['cssModeX'],'june-mr-lx')){echo'selected="selected"';$arrpp = explode("june-mr-lx",$_POST['cssModeX']);$arrppnum=$arrpp[1];} ?>>向左移动</option>
                            <option value="june-mr-rx" <? if(strstr($_POST['cssModeX'],'june-mr-rx')){echo'selected="selected"';$arrpp = explode("june-mr-rx",$_POST['cssModeX']);$arrppnum=$arrpp[1];} ?>>向右移动</option>
						</select>
                        
                         <? if($_POST['cssModeX']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeX_num=$_POST['cssModeX_num']?$_POST['cssModeX_num']:$arrppnum; ?>
				<select style="width:98px;" id="cssModeX_num" name="cssModeX_num" <?=$dishy?>>
					<option value="0" <? if($css3ModeX_num=='0'){echo'selected="selected"';} ?>>0像素</option>
					<option value="5" <? if($css3ModeX_num=='5'){echo'selected="selected"';} ?>>5像素</option>
                    <?
                    for($i2=10;$i2<=620;$i2=$i2+10){ $sx=$i2;
						if($css3ModeX_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					for($i2=670;$i2<=1920;$i2=$i2+50){ $sx=$i2;
						if($css3ModeX_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					?>
				</select>
					</li>
					<li class="optiongroup">
						<label for="cssModeY">上下移动：</label>
						<select class="cssModeTypeSelect" style="width:98px;" id="cssModeY" name="cssModeY">
							<option value="" <? if($_POST['cssModeY']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
                            <option value="june-mr-uy" <? if(strstr($_POST['cssModeY'],'june-mr-uy')){echo'selected="selected"';$arrpp = explode("june-mr-uy",$_POST['cssModeY']);$arrppnum=$arrpp[1];} ?>>向上移动</option>
                            <option value="june-mr-dy" <? if(strstr($_POST['cssModeY'],'june-mr-dy')){echo'selected="selected"';$arrpp = explode("june-mr-dy",$_POST['cssModeY']);$arrppnum=$arrpp[1];} ?>>向下移动</option>
						</select>
						 <? if($_POST['cssModeY']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeY_num=$_POST['cssModeY_num']?$_POST['cssModeY_num']:$arrppnum; ?>
				<select style="width:98px;" id="cssModeY_num" name="cssModeY_num" <?=$dishy?>>
					<option value="0" <? if($css3ModeY_num=='0'){echo'selected="selected"';} ?>>0像素</option>
					<option value="5" <? if($css3ModeY_num=='5'){echo'selected="selected"';} ?>>5像素</option>
                    <?
                    for($i2=10;$i2<=620;$i2=$i2+10){ $sx=$i2;
						if($css3ModeY_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					for($i2=670;$i2<=1920;$i2=$i2+50){ $sx=$i2;
						if($css3ModeY_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					?>
				</select>
					</li>
					<li>
						<label for="cssMode">其他特效：</label>
						<select id="cssMode" name="cssMode">

                    <option value="" <? if($_POST['cssMode']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-mr-fx" <? if($_POST['cssMode']=='june-mr-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-mr-fy" <? if($_POST['cssMode']=='june-mr-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-mr-fxy" <? if($_POST['cssMode']=='june-mr-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-mr-r2" <? if($_POST['cssMode']=='june-mr-r2'){echo'selected="selected"';} ?>>顺时针旋转2度</option>
					<option value="june-mr-r5" <? if($_POST['cssMode']=='june-mr-r5'){echo'selected="selected"';} ?>>顺时针旋转5度</option>
                    <option value="june-mr-r10" <? if($_POST['cssMode']=='june-mr-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
                    <option value="june-mr-r20" <? if($_POST['cssMode']=='june-mr-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
                    <option value="june-mr-r30" <? if($_POST['cssMode']=='june-mr-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
                    <option value="june-mr-r40" <? if($_POST['cssMode']=='june-mr-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
                    <option value="june-mr-r50" <? if($_POST['cssMode']=='june-mr-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
                    <option value="june-mr-r60" <? if($_POST['cssMode']=='june-mr-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
                    <option value="june-mr-r70" <? if($_POST['cssMode']=='june-mr-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
                    <option value="june-mr-r80" <? if($_POST['cssMode']=='june-mr-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
                    <option value="june-mr-r90" <? if($_POST['cssMode']=='june-mr-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
                    <option value="june-mr-r120" <? if($_POST['cssMode']=='june-mr-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-mr-r180" <? if($_POST['cssMode']=='june-mr-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-mr-r270" <? if($_POST['cssMode']=='june-mr-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-mr-r360" <? if($_POST['cssMode']=='june-mr-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-mr-r720" <? if($_POST['cssMode']=='june-mr-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
					<option value="june-mr-fr2" <? if($_POST['cssMode']=='june-mr-fr2'){echo'selected="selected"';} ?>>顺时针旋转2度</option>
					<option value="june-mr-fr5" <? if($_POST['cssMode']=='june-mr-fr5'){echo'selected="selected"';} ?>>顺时针旋转5度</option>
                    <option value="june-mr-fr10" <? if($_POST['cssMode']=='june-mr-fr10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
                    <option value="june-mr-fr20" <? if($_POST['cssMode']=='june-mr-fr20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
                    <option value="june-mr-fr30" <? if($_POST['cssMode']=='june-mr-fr30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
                    <option value="june-mr-fr40" <? if($_POST['cssMode']=='june-mr-fr40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
                    <option value="june-mr-fr50" <? if($_POST['cssMode']=='june-mr-fr50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
                    <option value="june-mr-fr60" <? if($_POST['cssMode']=='june-mr-fr60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
                    <option value="june-mr-fr70" <? if($_POST['cssMode']=='june-mr-fr70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
                    <option value="june-mr-fr80" <? if($_POST['cssMode']=='june-mr-fr80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
                    <option value="june-mr-fr90" <? if($_POST['cssMode']=='june-mr-fr90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
                    <option value="june-mr-fr120" <? if($_POST['cssMode']=='june-mr-fr120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-mr-fr180" <? if($_POST['cssMode']=='june-mr-fr180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-mr-fr270" <? if($_POST['cssMode']=='june-mr-fr270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-mr-fr360" <? if($_POST['cssMode']=='june-mr-fr360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-mr-fr720" <? if($_POST['cssMode']=='june-mr-fr720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
					<option value="june-mr-sf0" <? if($_POST['cssMode']=='june-mr-sf0'){echo'selected="selected"';} ?>>缩小至消失</option>
					<option value="june-mr-sf02" <? if($_POST['cssMode']=='june-mr-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-mr-sf04" <? if($_POST['cssMode']=='june-mr-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-mr-sf05" <? if($_POST['cssMode']=='june-mr-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-mr-sf06" <? if($_POST['cssMode']=='june-mr-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-mr-sf08" <? if($_POST['cssMode']=='june-mr-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-mr-sf09" <? if($_POST['cssMode']=='june-mr-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-mr-sf095" <? if($_POST['cssMode']=='june-mr-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-mr-sf098" <? if($_POST['cssMode']=='june-mr-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-mr-sf1" <? if($_POST['cssMode']=='june-mr-sf1'){echo'selected="selected"';} ?>>还原至原始尺寸</option>
					<option value="june-mr-sf102" <? if($_POST['cssMode']=='june-mr-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-mr-sf105" <? if($_POST['cssMode']=='june-mr-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-mr-sf110" <? if($_POST['cssMode']=='june-mr-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-mr-sf120" <? if($_POST['cssMode']=='june-mr-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-mr-sf150" <? if($_POST['cssMode']=='june-mr-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-mr-sf180" <? if($_POST['cssMode']=='june-mr-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-mr-sf200" <? if($_POST['cssMode']=='june-mr-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
						</select>
					</li>
					<li>
						<label for="cssBezier">动画特效：</label>
						<select id="cssBezier" name="cssBezier">
							<option value="" <? if($_POST['cssBezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
                            <option value="bs" <? if($_POST['cssBezier']=='bs'){echo'selected="selected"';} ?>>由慢到快</option>
                            <option value="bq" <? if($_POST['cssBezier']=='bq'){echo'selected="selected"';} ?>>由快到慢</option>
                            <option value="bt" <? if($_POST['cssBezier']=='bt'){echo'selected="selected"';} ?>>跑过回头</option>
                            <option value="bc" <? if($_POST['cssBezier']=='bc'){echo'selected="selected"';} ?>>起步后撤</option>
                            <option value="bd" <? if($_POST['cssBezier']=='bd'){echo'selected="selected"';} ?>>中间停顿</option>
                            <option value="bx" <? if($_POST['cssBezier']=='bx'){echo'selected="selected"';} ?>>弹性抖动</option>
						</select>
						<label for="cssWeight" class="chkLabel" style="margin-top:-20px;width:40px;">程度：</label>
						<select id="cssWeight" name="cssWeight" style="width:51px;">
							<option value="1" <? if($_POST['cssWeight']=='1'){echo'selected="selected"';} ?>>强</option>
							<option value="2" <? if($_POST['cssWeight']=='2'){echo'selected="selected"';} ?>>中</option>
							<option value="3" <? if($_POST['cssWeight']=='3'){echo'selected="selected"';} ?>>弱</option>
						</select>
					</li>
					<li>
						<label for="cssSpeed">动画速度：</label>
						<select id="cssSpeed" name="cssSpeed">
							<option style="display:none;" value="trans0s" <? if($_POST['cssSpeed']=='trans0s'){echo'selected="selected"';} ?>>立即显示</option>
							<option value="trans01s" <? if($_POST['cssSpeed']=='trans01s'){echo'selected="selected"';} ?>>0.1秒</option>
							<option value="trans02s" <? if($_POST['cssSpeed']=='trans02s'){echo'selected="selected"';} ?>>0.2秒</option>
							<option value="trans03s" <? if($_POST['cssSpeed']=='trans03s'){echo'selected="selected"';} ?>>0.3秒</option>
							<option value="trans04s" <? if($_POST['cssSpeed']=='trans04s'){echo'selected="selected"';} ?>>0.4秒</option>
							<option value="trans05s" <? if($_POST['cssSpeed']=='trans05s'){echo'selected="selected"';} ?>>0.5秒</option>
							<option value="trans06s" <? if($_POST['cssSpeed']=='trans06s'){echo'selected="selected"';} ?>>0.6秒</option>
							<option value="trans07s" <? if($_POST['cssSpeed']=='trans07s'){echo'selected="selected"';} ?>>0.7秒</option>
							<option value="trans08s" <? if($_POST['cssSpeed']=='trans08s'){echo'selected="selected"';} ?>>0.8秒</option>
							<option value="trans09s" <? if($_POST['cssSpeed']=='trans09s'){echo'selected="selected"';} ?>>0.9秒</option>
							<option value="trans1s" <? if($_POST['cssSpeed']=='trans1s'){echo'selected="selected"';} ?>>1秒</option>
							<option value="trans1d1s" <? if($_POST['cssSpeed']=='trans1d1s'){echo'selected="selected"';} ?>>1.1秒</option>
							<option value="trans1d2s" <? if($_POST['cssSpeed']=='trans1d2s'){echo'selected="selected"';} ?>>1.2秒</option>
							<option value="trans1d3s" <? if($_POST['cssSpeed']=='trans1d3s'){echo'selected="selected"';} ?>>1.3秒</option>
							<option value="trans1d4s" <? if($_POST['cssSpeed']=='trans1d4s'){echo'selected="selected"';} ?>>1.4秒</option>
							<option value="trans1d5s" <? if($_POST['cssSpeed']=='trans1d5s'){echo'selected="selected"';} ?>>1.5秒</option>
							<option value="trans1d6s" <? if($_POST['cssSpeed']=='trans1d6s'){echo'selected="selected"';} ?>>1.6秒</option>
							<option value="trans1d7s" <? if($_POST['cssSpeed']=='trans1d7s'){echo'selected="selected"';} ?>>1.7秒</option>
							<option value="trans1d8s" <? if($_POST['cssSpeed']=='trans1d8s'){echo'selected="selected"';} ?>>1.8秒</option>
							<option value="trans1d9s" <? if($_POST['cssSpeed']=='trans1d9s'){echo'selected="selected"';} ?>>1.9秒</option>
							<option value="trans2s" <? if($_POST['cssSpeed']=='trans2s'){echo'selected="selected"';} ?>>2秒</option>
							<option value="trans2d2s" <? if($_POST['cssSpeed']=='trans2d2s'){echo'selected="selected"';} ?>>2.2秒</option>
							<option value="trans2d5s" <? if($_POST['cssSpeed']=='trans2d5s'){echo'selected="selected"';} ?>>2.5秒</option>
							<option value="trans2d8s" <? if($_POST['cssSpeed']=='trans2d8s'){echo'selected="selected"';} ?>>2.8秒</option>
							<option value="trans3s" <? if($_POST['cssSpeed']=='trans3s'){echo'selected="selected"';} ?>>3秒</option>
							<option value="trans4s" <? if($_POST['cssSpeed']=='trans4s'){echo'selected="selected"';} ?>>4秒</option>
							<option value="trans5s" <? if($_POST['cssSpeed']=='trans5s'){echo'selected="selected"';} ?>>5秒</option>
							<option value="trans6s" <? if($_POST['cssSpeed']=='trans6s'){echo'selected="selected"';} ?>>6秒</option>
							<option value="trans7s" <? if($_POST['cssSpeed']=='trans7s'){echo'selected="selected"';} ?>>7秒</option>
							<option value="trans8s" <? if($_POST['cssSpeed']=='trans8s'){echo'selected="selected"';} ?>>8秒</option>
							<option value="trans9s" <? if($_POST['cssSpeed']=='trans9s'){echo'selected="selected"';} ?>>9秒</option>
							<option value="trans10s" <? if($_POST['cssSpeed']=='trans10s'){echo'selected="selected"';} ?>>10秒</option>
							<option value="trans30s" <? if($_POST['cssSpeed']=='trans30s'){echo'selected="selected"';} ?>>30秒</option>
							<option value="trans60s" <? if($_POST['cssSpeed']=='trans60s'){echo'selected="selected"';} ?>>60秒</option>
							<option value="trans300s" <? if($_POST['cssSpeed']=='trans300s'){echo'selected="selected"';} ?>>300秒</option>
							<option value="trans600s" <? if($_POST['cssSpeed']=='trans600s'){echo'selected="selected"';} ?>>600秒</option>
						</select>
					</li>
					<li>
						<label for="cssDelay">延迟触发：</label>
						<select id="cssDelay" name="cssDelay">
                            <option value="0s" <? if($_POST['cssDelay']=='0s'){echo'selected="selected"';} ?>>0秒</option>
                            <option value="0.1s" <? if($_POST['cssDelay']=='0.1s'){echo'selected="selected"';} ?>>0.1秒</option>
                            <option value="0.2s" <? if($_POST['cssDelay']=='0.2s'){echo'selected="selected"';} ?>>0.2秒</option>
                            <option value="0.3s" <? if($_POST['cssDelay']=='0.3s'){echo'selected="selected"';} ?>>0.3秒</option>
                            <option value="0.4s" <? if($_POST['cssDelay']=='0.4s'){echo'selected="selected"';} ?>>0.4秒</option>
                            <option value="0.5s" <? if($_POST['cssDelay']=='0.5s'){echo'selected="selected"';} ?>>0.5秒</option>
                            <option value="0.6s" <? if($_POST['cssDelay']=='0.6s'){echo'selected="selected"';} ?>>0.6秒</option>
                            <option value="0.7s" <? if($_POST['cssDelay']=='0.7s'){echo'selected="selected"';} ?>>0.7秒</option>
                            <option value="0.8s" <? if($_POST['cssDelay']=='0.8s'){echo'selected="selected"';} ?>>0.8秒</option>
                            <option value="0.9s" <? if($_POST['cssDelay']=='0.9s'){echo'selected="selected"';} ?>>0.9秒</option>
                            <option value="1s" <? if($_POST['cssDelay']=='1s'){echo'selected="selected"';} ?>>1秒</option>
                            <option value="1.1s" <? if($_POST['cssDelay']=='1.1s'){echo'selected="selected"';} ?>>1.1秒</option>
                            <option value="1.2s" <? if($_POST['cssDelay']=='1.2s'){echo'selected="selected"';} ?>>1.2秒</option>
                            <option value="1.3s" <? if($_POST['cssDelay']=='1.3s'){echo'selected="selected"';} ?>>1.3秒</option>
                            <option value="1.4s" <? if($_POST['cssDelay']=='1.4s'){echo'selected="selected"';} ?>>1.4秒</option>
                            <option value="1.5s" <? if($_POST['cssDelay']=='1.5s'){echo'selected="selected"';} ?>>1.5秒</option>
                            <option value="1.6s" <? if($_POST['cssDelay']=='1.6s'){echo'selected="selected"';} ?>>1.6秒</option>
                            <option value="1.7s" <? if($_POST['cssDelay']=='1.7s'){echo'selected="selected"';} ?>>1.7秒</option>
                            <option value="1.8s" <? if($_POST['cssDelay']=='1.8s'){echo'selected="selected"';} ?>>1.8秒</option>
                            <option value="1.9s" <? if($_POST['cssDelay']=='1.9s'){echo'selected="selected"';} ?>>1.9秒</option>
                            <option value="2s" <? if($_POST['cssDelay']=='2s'){echo'selected="selected"';} ?>>2秒</option>
                            <option value="2.2s" <? if($_POST['cssDelay']=='2.2s'){echo'selected="selected"';} ?>>2.2秒</option>
							<option value="2.4s" <? if($_POST['cssDelay']=='2.4s'){echo'selected="selected"';} ?>>2.4秒</option>
							<option value="2.6s" <? if($_POST['cssDelay']=='2.6s'){echo'selected="selected"';} ?>>2.6秒</option>
							<option value="2.8s" <? if($_POST['cssDelay']=='2.8s'){echo'selected="selected"';} ?>>2.8秒</option>
							<option value="3s" <? if($_POST['cssDelay']=='3s'){echo'selected="selected"';} ?>>3秒</option>
                            <option value="3.2s" <? if($_POST['cssDelay']=='3.2s'){echo'selected="selected"';} ?>>3.2秒</option>
							<option value="3.4s" <? if($_POST['cssDelay']=='3.4s'){echo'selected="selected"';} ?>>3.4秒</option>
							<option value="3.6s" <? if($_POST['cssDelay']=='3.6s'){echo'selected="selected"';} ?>>3.6秒</option>
							<option value="3.8s" <? if($_POST['cssDelay']=='3.8s'){echo'selected="selected"';} ?>>3.8秒</option>
							<option value="4s" <? if($_POST['cssDelay']=='4s'){echo'selected="selected"';} ?>>4秒</option>
                            <option value="4.2s" <? if($_POST['cssDelay']=='4.2s'){echo'selected="selected"';} ?>>4.2秒</option>
							<option value="4.4s" <? if($_POST['cssDelay']=='4.4s'){echo'selected="selected"';} ?>>4.4秒</option>
							<option value="4.6s" <? if($_POST['cssDelay']=='4.6s'){echo'selected="selected"';} ?>>4.6秒</option>
							<option value="4.8s" <? if($_POST['cssDelay']=='4.8s'){echo'selected="selected"';} ?>>4.8秒</option>
							<option value="5s" <? if($_POST['cssDelay']=='5s'){echo'selected="selected"';} ?>>5秒</option>
                            <option value="5.2s" <? if($_POST['cssDelay']=='5.2s'){echo'selected="selected"';} ?>>5.2秒</option>
							<option value="5.4s" <? if($_POST['cssDelay']=='5.4s'){echo'selected="selected"';} ?>>5.4秒</option>
							<option value="5.6s" <? if($_POST['cssDelay']=='5.6s'){echo'selected="selected"';} ?>>5.6秒</option>
							<option value="5.8s" <? if($_POST['cssDelay']=='5.8s'){echo'selected="selected"';} ?>>5.8秒</option>
							<option value="6s" <? if($_POST['cssDelay']=='6s'){echo'selected="selected"';} ?>>6秒</option>
                            <option value="6.2s" <? if($_POST['cssDelay']=='6.2s'){echo'selected="selected"';} ?>>6.2秒</option>
							<option value="6.4s" <? if($_POST['cssDelay']=='6.4s'){echo'selected="selected"';} ?>>6.4秒</option>
							<option value="6.6s" <? if($_POST['cssDelay']=='6.6s'){echo'selected="selected"';} ?>>6.6秒</option>
							<option value="6.8s" <? if($_POST['cssDelay']=='6.8s'){echo'selected="selected"';} ?>>6.8秒</option>
							<option value="7s" <? if($_POST['cssDelay']=='7s'){echo'selected="selected"';} ?>>7秒</option>
                            <option value="7.2s" <? if($_POST['cssDelay']=='7.2s'){echo'selected="selected"';} ?>>7.2秒</option>
							<option value="7.4s" <? if($_POST['cssDelay']=='7.4s'){echo'selected="selected"';} ?>>7.4秒</option>
							<option value="7.6s" <? if($_POST['cssDelay']=='7.6s'){echo'selected="selected"';} ?>>7.6秒</option>
							<option value="7.8s" <? if($_POST['cssDelay']=='7.8s'){echo'selected="selected"';} ?>>7.8秒</option>
							<option value="8s" <? if($_POST['cssDelay']=='8s'){echo'selected="selected"';} ?>>8秒</option>
							<option value="9s" <? if($_POST['cssDelay']=='9s'){echo'selected="selected"';} ?>>9秒</option>
							<option value="10s" <? if($_POST['cssDelay']=='10s'){echo'selected="selected"';} ?>>10秒</option>
							<option value="30s" <? if($_POST['cssDelay']=='30s'){echo'selected="selected"';} ?>>30秒</option>
							<option value="60s" <? if($_POST['cssDelay']=='60s'){echo'selected="selected"';} ?>>60秒</option>
							<option value="300s" <? if($_POST['cssDelay']=='300s'){echo'selected="selected"';} ?>>300秒</option>
							<option value="600s" <? if($_POST['cssDelay']=='600s'){echo'selected="selected"';} ?>>600秒</option>
						</select>
					</li>
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['catchChoose']?>" />
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
	$("#tabs").tabs();
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
	$("#tForm .contentType").hide();
	$("#tForm .<?=$_POST['contentType']?>").show();
	$("#rdv").on("change", "input", function(event) {
		var _t = $(this), val = _t.val();
		$("#tForm .contentType").hide();
		$("#tForm ."+val).show();
	});
	
	$("#cmtsPhpContent").off("change.cmts").on("change.cmts", ".cssModeTypeSelect", function(event) {
		var _t = $(this), v = _t.val(), id = _t.attr("id"),  _n = $("#"+id+"_num");//_n = _t.nextUntil(":last").next();
		if(v == "june-mr-lx" || v == "june-mr-rx" || v == "june-mr-uy" || v == "june-mr-dy") {
			_n.prop("disabled", false).selectmenu("refresh");
		} else {
			_n.prop("disabled", true).selectmenu("refresh");
		}
	});
});
</script>