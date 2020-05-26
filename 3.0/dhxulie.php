<?

//子层
$zz = !empty($_POST['childConfig'])?$_POST['childConfig']:'';
$zznum=count($zz);
$zong='';
if(!empty($_POST['childConfig'])){
for($i=1;$i<=$zznum;$i++){

}
}
?>
<form id="tForm" form-data="jxxb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基础设置</a></li>
        <?
		if(!empty($_POST['childConfig'])){
		for($x=1;$x<=count($zz);$x++){ $nn=$x+1;
		echo'<li class="hasdelete"><a href="#tabs-'.$nn.'">动画'.$x.'</a><span class="deletetab" data-tabs="tabs-'.$nn.'"><icon>ꕡ</icon></span></li>
		';
			}
		}
		?>
        <li id="addNewCartoon" class="ui-state-default ui-corner-top addnewtab" title="添加一个新的动画"><icon>ꕙ</icon></li>
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
						<label for="cssPauseHover">鼠标经过时：</label>
						<select id="cssPauseHover" name="cssPauseHover">
							<option value="yes" <?=$_POST['cssPauseHover']=='yes'?'selected="selected"':'' ?>>停止播放</option>
							<option value="no" <?=$_POST['cssPauseHover']=='no'?'selected="selected"':'' ?>>继续播放</option>
						</select>
					</li>
					<li>
						<label for="cssBezier">动画特效：</label>
						<select id="cssBezier" name="cssBezier">
							<option value="" <? if($_POST['cssBezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
							<option value="bs" <? if($_POST['cssBezier']=='bs'){echo'selected="selected"';} ?>>由慢到快</option>
							<option value="bq" <? if($_POST['cssBezier']=='bq'){echo'selected="selected"';} ?>>由快到慢</option>
							<option value="bt" <? if($_POST['cssBezier']=='bt'){echo'selected="selected"';} ?>>跑过回头（加速）</option>
							<option value="bc" <? if($_POST['cssBezier']=='bc'){echo'selected="selected"';} ?>>起步后撤（加速）</option>
							<option value="bd" <? if($_POST['cssBezier']=='bd'){echo'selected="selected"';} ?>>中间停顿（加速）</option>
							<option value="bx" <? if($_POST['cssBezier']=='bx'){echo'selected="selected"';} ?>>弹性抖动（1）</option>
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
						<label for="cssDelay">每次停顿：</label>
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
							<option value="2.5s" <? if($_POST['cssDelay']=='2.5s'){echo'selected="selected"';} ?>>2.5秒</option>
							<option value="2.8s" <? if($_POST['cssDelay']=='2.8s'){echo'selected="selected"';} ?>>2.8秒</option>
							<option value="3s" <? if($_POST['cssDelay']=='3s'){echo'selected="selected"';} ?>>3秒</option>
							<option value="4s" <? if($_POST['cssDelay']=='4s'){echo'selected="selected"';} ?>>4秒</option>
							<option value="5s" <? if($_POST['cssDelay']=='5s'){echo'selected="selected"';} ?>>5秒</option>
							<option value="6s" <? if($_POST['cssDelay']=='6s'){echo'selected="selected"';} ?>>6秒</option>
							<option value="7s" <? if($_POST['cssDelay']=='7s'){echo'selected="selected"';} ?>>7秒</option>
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
						<label for="rd_o1">超出父层范围：</label>
						<div id="rd_o1">
							<input type="radio" id="overflowModer1" name="overflowMode" value="visible" <?=$_POST['overflowMode']=='visible'?'checked="checked"':'' ?> />
							<label for="overflowModer1" title="" style="width:98px;">始终显示</label>
							<input type="radio" id="overflowModer2" name="overflowMode" value="visibleX" <?=$_POST['overflowMode']=='visibleX'?'checked="checked"':'' ?>  />
							<label for="overflowModer2" title="" style="width:98px;">鼠标经过显示</label>
							<input type="radio" id="overflowModer3" name="overflowMode" value="hidden" <?=$_POST['overflowMode']=='hidden'?'checked="checked"':'' ?>>
							<label for="overflowModer3" title="" style="width:98px;">始终隐藏</label>
						</div>
					</li>
				</ul>
			</div>
			
            
            
            
<? 
if(!empty($_POST['childConfig'])){
for($i=0;$i<count($_POST['childConfig']);$i++){ $n=$i+1;$m=$i+2;

$bgp=$_POST['childConfig'][$i]['imgBgp'];
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
       
			
            
            
            <div id="tabs-<?=$m?>">
				<ul class="setform mongoliaModeUl">
					<input id="child<?=$i?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$_POST['childConfig'][$i]['attachID']?>" />
					<li>
						<label for="child<?=$i?>rdv">动画<?=$n?>内容设置：</label>
						<div id="child<?=$i?>rdv" class="contentModeDiv">
							<label for="child<?=$i?>rdv1" title="" style="width:98px;">图片</label>
							<input type="radio" id="child<?=$i?>rdv1" name="childConfig[<?=$i?>].contentType" value="imgContent" <? if($_POST['childConfig'][$i]['contentType']!=='customContent'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rdv2" title="" style="width:98px;">自定义内容</label>
							<input type="radio" id="child<?=$i?>rdv2" name="childConfig[<?=$i?>].contentType" value="customContent" <? if($_POST['childConfig'][$i]['contentType']=='customContent'){echo'checked="checked"';} ?> />
						</div>
					</li>
					<li class="imgContent contentType">
						<label for="child<?=$i?>jdhi_src">背景图片：</label>
						<input id="child<?=$i?>jdhi_src" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[<?=$i?>].pSrc" value="<?=$_POST['childConfig'][$i]['pSrc']?>" />
						<input id="child<?=$i?>autoSize" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].autoSize" value="yes" <? if($_POST['childConfig'][$i]['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child<?=$i?>autoSize" class="chkLabel">自动高宽</label>
					</li>
					<li class="imgContent contentType">
						<label for="child<?=$i?>i2">链接地址：</label>
						<input id="child<?=$i?>i2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig[<?=$i?>].href" value="<?=$_POST['childConfig'][$i]['href']?>" />
						<input id="child<?=$i?>hrefMode" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].hrefMode" value="_blank" <? if($_POST['childConfig'][$i]['hrefMode']=='_blank'){echo'checked="checked"';}?> />
						<label for="child<?=$i?>hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					<li class="imgContent contentType">
						<label>图片位置：</label>
						<span id="child<?=$i?>imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="child<?=$i?>imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[<?=$i?>].imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['childConfig'][$i]['attachID']?>,tForm" data-isn="child<?=$i?>" data-isa="yes">手动调整<i class="popsd"></i></label>
					</li>
					<li class="imgContent contentType">
						<label for="child<?=$i?>sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['childConfig'][$i]['bgColor']?>;"></div></div></div>
							<input id="child<?=$i?>sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[<?=$i?>].bgColor" value="<?=$_POST['childConfig'][$i]['bgColor']?>" />
						</div>
					</li>
					
					<li class="customContent contentType">
						<label for="child<?=$i?>customContent">自定义内容：</label>
						<textarea id="child<?=$i?>customContent" name="childConfig[<?=$i?>].customContent"><?=stripslashes($_POST['childConfig'][$i]['customContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$_POST['childConfig'][$i]['attachID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li>
						<label for="child<?=$i?>rd1">显示方式：</label>
						<div id="child<?=$i?>rd1">
							<input type="radio" id="child<?=$i?>r1" name="childConfig[<?=$i?>].displayMode" value="" <? if($_POST['childConfig'][$i]['displayMode']==''){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>r1" title="">始终显示</label>
							<input type="radio" id="child<?=$i?>r2" name="childConfig[<?=$i?>].displayMode" value="june-mr-fo0" <? if($_POST['childConfig'][$i]['displayMode']=='june-mr-fo0'){echo'checked="checked"';} ?>>
							<label for="child<?=$i?>r2" title="">淡出闪动</label>
							<input type="radio" id="child<?=$i?>r3" name="childConfig[<?=$i?>].displayMode" value="june-mr-fo1 june-box-fadein" <? if($_POST['childConfig'][$i]['displayMode']=='june-mr-fo1 june-box-fadein'){echo'checked="checked"';} ?>>
							<label for="child<?=$i?>r3" title="">淡入闪动</label>
						</div>
					</li>
					<li class="optiongroup">
						<label for="child<?=$i?>cssModeX">左右来回：</label>
						<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>cssModeX" name="childConfig[<?=$i?>].cssModeX">
                            <option value="" <? if($_POST['childConfig'][$i]['cssModeX']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
                            <option value="june-mr-lx" <? if(strstr($_POST['childConfig'][$i]['cssModeX'],'june-mr-lx')){echo'selected="selected"';$arrpp = explode("lx",$_POST['childConfig'][$i]['cssModeX']);$arrppnum=$arrpp[1];} ?>>向左移动</option>
                            <option value="june-mr-rx" <? if(strstr($_POST['childConfig'][$i]['cssModeX'],'june-mr-rx')){echo'selected="selected"';$arrpp = explode("rx",$_POST['childConfig'][$i]['cssModeX']);$arrppnum=$arrpp[1];} ?>>向右移动</option>
						</select>
                        <? if($_POST['childConfig'][$i]['cssModeX']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeX_num=$arrppnum; ?>
						<select style="width:98px;" id="child<?=$i?>cssModeX_num" name="childConfig[<?=$i?>].cssModeX_num" <?=$dishy?>>
							<option value="0" <? if($css3ModeX_num=='0'||$css3ModeX_num==''){echo'selected="selected"';} ?>>0像素</option>
							<option value="5" <? if($css3ModeX_num=='5'){echo'selected="selected"';} ?>>5像素</option>
                            <option value="10" <? if($css3ModeX_num=='10'){echo'selected="selected"';} ?>>10像素</option>
							<option value="15" <? if($css3ModeX_num=='15'){echo'selected="selected"';} ?>>15像素</option>
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
						<label for="child<?=$i?>cssModeY">上下来回：</label>
						<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>cssModeY" name="childConfig[<?=$i?>].cssModeY">
                            <option value="" <? if($_POST['childConfig'][$i]['cssModeY']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
                            <option value="june-mr-uy" <? if(strstr($_POST['childConfig'][$i]['cssModeY'],'june-mr-uy')){echo'selected="selected"';$arrpp = explode("uy",$_POST['childConfig'][$i]['cssModeY']);$arrppnum=$arrpp[1];} ?>>向上移动</option>
                            <option value="june-mr-dy" <? if(strstr($_POST['childConfig'][$i]['cssModeY'],'june-mr-dy')){echo'selected="selected"';$arrpp = explode("dy",$_POST['childConfig'][$i]['cssModeY']);$arrppnum=$arrpp[1];} ?>>向下移动</option>
						</select>
                        <? if($_POST['childConfig'][$i]['cssModeY']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeY_num=$arrppnum; ?>
						<select style="width:98px;" id="child<?=$i?>cssModeY_num" name="childConfig[<?=$i?>].cssModeY_num" <?=$dishy?>>
							<option value="0" <? if($css3ModeY_num=='0'||$css3ModeY_num==''){echo'selected="selected"';} ?>>0像素</option>
                            <option value="5" <? if($css3ModeY_num=='5'){echo'selected="selected"';} ?>>5像素</option>
                            <option value="10" <? if($css3ModeY_num=='10'){echo'selected="selected"';} ?>>10像素</option>
                            <option value="15" <? if($css3ModeY_num=='15'){echo'selected="selected"';} ?>>15像素</option>
                            <?
                            for($i2=20;$i2<=620;$i2=$i2+10){ $sx=$i2;
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
						<label for="child<?=$i?>cssMode">对称旋转：</label><? $cssModei=$_POST['childConfig'][$i]['cssMode']; ?>
						<select id="child<?=$i?>cssMode" name="childConfig[<?=$i?>].cssMode">
							<option value="" selected="selected">无效果</option>
							<option value="june-mr-r2" <? if($cssModei=='june-mr-r2'){echo'selected="selected"';} ?>>顺时针旋转2度</option>
							<option value="june-mr-r5" <? if($cssModei=='june-mr-r5'){echo'selected="selected"';} ?>>顺时针旋转5度</option>
                            <option value="june-mr-r10" <? if($cssModei=='june-mr-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
                            <option value="june-mr-r20" <? if($cssModei=='june-mr-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
                            <option value="june-mr-r30" <? if($cssModei=='june-mr-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
                            <option value="june-mr-r40" <? if($cssModei=='june-mr-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
                            <option value="june-mr-r50" <? if($cssModei=='june-mr-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
                            <option value="june-mr-r60" <? if($cssModei=='june-mr-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
                            <option value="june-mr-r70" <? if($cssModei=='june-mr-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
                            <option value="june-mr-r80" <? if($cssModei=='june-mr-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
                            <option value="june-mr-r90" <? if($cssModei=='june-mr-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
                            <option value="june-mr-r120" <? if($cssModei=='june-mr-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
							<option value="june-mr-r180" <? if($cssModei=='june-mr-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
							<option value="june-mr-r270" <? if($cssModei=='june-mr-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
							<option value="june-mr-r360" <? if($cssModei=='june-mr-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
							<option value="june-mr-r720" <? if($cssModei=='june-mr-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
							<option value="june-mr-fr2" <? if($cssModei=='june-mr-fr2'){echo'selected="selected"';} ?>>逆时针旋转2度</option>
							<option value="june-mr-fr5" <? if($cssModei=='june-mr-fr5'){echo'selected="selected"';} ?>>逆时针旋转5度</option>
                            <option value="june-mr-fr10" <? if($cssModei=='june-mr-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
                            <option value="june-mr-fr20" <? if($cssModei=='june-mr-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
                            <option value="june-mr-fr30" <? if($cssModei=='june-mr-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
                            <option value="june-mr-fr40" <? if($cssModei=='june-mr-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
                            <option value="june-mr-fr50" <? if($cssModei=='june-mr-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
                            <option value="june-mr-fr60" <? if($cssModei=='june-mr-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
                            <option value="june-mr-fr70" <? if($cssModei=='june-mr-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
                            <option value="june-mr-fr80" <? if($cssModei=='june-mr-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
                            <option value="june-mr-fr90" <? if($cssModei=='june-mr-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
                            <option value="june-mr-fr120" <? if($cssModei=='june-mr-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
							<option value="june-mr-fr180" <? if($cssModei=='june-mr-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
							<option value="june-mr-fr270" <? if($cssModei=='june-mr-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
							<option value="june-mr-fr360" <? if($cssModei=='june-mr-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
							<option value="june-mr-fr720" <? if($cssModei=='june-mr-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
						</select>
					</li>
					<li>
						<label for="child<?=$i?>cssMode_sf">循环缩放：</label><? $cssMode_sf=$_POST['childConfig'][$i]['cssMode_sf']; ?>
						<select id="child<?=$i?>cssMode_sf" name="childConfig[<?=$i?>].cssMode_sf">
							<option value="" <? if($cssModei=='june-mr-r2'){echo'selected="selected"';} ?>>无效果</option>
							<option value="june-mr-sf0" <? if($cssMode_sf=='june-mr-sf0'){echo'selected="selected"';} ?>>缩小至消失</option>
							<option value="june-mr-sf02" <? if($cssMode_sf=='june-mr-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
							<option value="june-mr-sf04" <? if($cssMode_sf=='june-mr-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
							<option value="june-mr-sf05" <? if($cssMode_sf=='june-mr-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
							<option value="june-mr-sf06" <? if($cssMode_sf=='june-mr-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
							<option value="june-mr-sf08" <? if($cssMode_sf=='june-mr-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
							<option value="june-mr-sf09" <? if($cssMode_sf=='june-mr-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
							<option value="june-mr-sf095" <? if($cssMode_sf=='june-mr-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
							<option value="june-mr-sf098" <? if($cssMode_sf=='june-mr-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
							<option value="june-mr-sf1" <? if($cssMode_sf=='june-mr-sf1'){echo'selected="selected"';} ?>>原始尺寸</option>
							<option value="june-mr-sf102" <? if($cssMode_sf=='june-mr-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
							<option value="june-mr-sf105" <? if($cssMode_sf=='june-mr-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
							<option value="june-mr-sf110" <? if($cssMode_sf=='june-mr-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
							<option value="june-mr-sf120" <? if($cssMode_sf=='june-mr-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
							<option value="june-mr-sf150" <? if($cssMode_sf=='june-mr-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
							<option value="june-mr-sf180" <? if($cssMode_sf=='june-mr-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
							<option value="june-mr-sf200" <? if($cssMode_sf=='june-mr-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
						</select>
					</li>
					<li>
						<label for="child<?=$i?>cssMode_fz">正反翻转：</label><? $cssMode_fz=$_POST['childConfig'][$i]['cssMode_fz']; ?>
						<select id="child<?=$i?>cssMode_fz" name="childConfig[<?=$i?>].cssMode_fz">
							<option value="" selected="selected">无效果</option>
							<option value="june-mr-fx" <? if($cssMode_fz=='june-mr-fx'){echo'selected="selected"';} ?>>横向翻转</option>
							<option value="june-mr-fy" <? if($cssMode_fz=='june-mr-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
							<option value="june-mr-fxy" <? if($cssMode_fz=='june-mr-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
						</select>
					</li>
					<li>
						<label for="child<?=$i?>tt_i1">提示文字：</label>
						<input id="child<?=$i?>tt_i1" class="setinput" type="text" title="鼠标经过动画时的提示文字" junezx_vali_str="true" name="childConfig[<?=$i?>].tipText" value="<?=$_POST['childConfig'][$i]['tipText']?>" />
					</li>
				</ul>
			</div>
		
        <? }} ?>
        
        </div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$_POST['active']?>});
	var tabs = $("#tabs"), npc = (<?=$zznum?> - 1), ntc = npc;
	$("#addNewCartoon").off("click.addtab").on("click.addtab", function() {
		var newContent = "", newAttachID = setAttachIDForPhp();
		npc++;ntc++;
		newContent = '<div id="tabs-'+(npc+2)+'">'+
			'<ul class="setform mongoliaModeUl">'+
			'	<input id="child'+npc+'h1" class="setinput" type="hidden" title="" name="childConfig['+npc+'].attachID" value="'+newAttachID+'" />'+
			'	<li>'+
			'		<label for="child'+npc+'rdv">动画'+(npc+1)+'内容设置：</label>'+
			'		<div id="child'+npc+'rdv" class="contentModeDiv">'+
			'			<label for="child'+npc+'rdv1" title="" style="width:98px;">图片</label>'+
			'			<input type="radio" id="child'+npc+'rdv1" name="childConfig['+npc+'].contentType" value="imgContent" checked="checked"/>'+
			'			<label for="child'+npc+'rdv2" title="" style="width:98px;">自定义内容</label>'+
			'			<input type="radio" id="child'+npc+'rdv2" name="childConfig['+npc+'].contentType" value="customContent" />'+
			'		</div>'+
			'	</li>'+
			'	<li class="imgContent contentType">'+
			'		<label for="child'+npc+'jdhi_src">背景图片：</label>'+
			'		<input id="child'+npc+'jdhi_src" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig['+npc+'].pSrc" value="" />'+
			'		<input id="child'+npc+'autoSize" class="chkBox" type="checkbox" name="childConfig['+npc+'].autoSize" value="yes" checked="checked" />'+
			'		<label for="child'+npc+'autoSize" class="chkLabel">自动高宽</label></li>'+
			'	<li class="imgContent contentType">'+
			'		<label for="child'+npc+'i2">链接地址：</label>'+
			'		<input id="child'+npc+'i2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig['+npc+'].href" value="" />'+
			'		<input id="child'+npc+'hrefMode" class="chkBox" type="checkbox" name="childConfig['+npc+'].hrefMode" value="_blank" checked="checked" />'+
			'		<label for="child'+npc+'hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>'+
			'	</li>'+			
			'	<li class="imgContent contentType">'+
			'		<label>图片位置：</label>'+
			'		<span id="child'+npc+'imgBgp_text" class="jDragSelect"><val>居中</val><span class="ui-icon ui-icon-triangle-1-s"></span></span>'+
			'		<input id="child'+npc+'imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig['+npc+'].imgBgp" value="50% 50%" />'+
			'		<label class="btnLabel jDragHandleImg" data-ids="'+newAttachID+',tForm" data-isn="child'+npc+'" data-isa="yes">手动调整<i class="popsd"></i></label>'+
			'	</li>'+
			'	<li class="imgContent contentType">'+
			'		<label for="child'+npc+'sdtzBgColor">背景颜色：</label>'+
			'		<div class="setcolorpanel">'+
			'			<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
			'			<input id="child'+npc+'sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig['+npc+'].bgColor" value="" />'+
			'		</div>'+
			'	</li>'+
			
			'	<li class="customContent contentType" style="height:auto;display:none;">'+
			'		<label for="child'+npc+'customContent">自定义内容：</label>'+
			'		<textarea id="child'+npc+'customContent" name="childConfig['+npc+'].customContent"></textarea>'+
			'		<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig['+npc+'].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="'+newAttachID+'">可视化编辑</label>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'rd1">显示方式：</label>'+
			'		<div id="child'+npc+'rd1">'+
			'			<input type="radio" id="child'+npc+'r1" name="childConfig['+npc+'].displayMode" value="" checked="checked" />'+
			'			<label for="child'+npc+'r1" title="">始终显示</label>'+
			'			<input type="radio" id="child'+npc+'r2" name="childConfig['+npc+'].displayMode" value="june-mr-fo0" >'+
			'			<label for="child'+npc+'r2" title="">淡出闪动</label>'+
			'			<input type="radio" id="child'+npc+'r3" name="childConfig['+npc+'].displayMode" value="june-mr-fo1 june-box-fadein" >'+
			'			<label for="child'+npc+'r3" title="">淡入闪动</label>'+
			'		</div>'+
			'	</li>'+
			'	<li class="optiongroup">'+
			'		<label for="child'+npc+'cssModeX">左右来回：</label>'+
			'		<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'cssModeX" name="childConfig['+npc+'].cssModeX">'+
			'			<option value="" selected="selected">无效果</option>'+
			'			<option value="june-mr-lx" >向左移动</option>'+
			'			<option value="june-mr-rx" >向右移动</option>'+
			'		</select>'+
			'		<select style="width:98px;" id="child'+npc+'cssModeX_num" name="childConfig['+npc+'].cssModeX_num" disabled="disabled">'+
			'			<option value="0" selected="selected">0像素</option>'+
			'			<option value="5">5像素</option>'+
			'			<option value="10">10像素</option>'+
			'			<option value="15">15像素</option>'+
									'			<option value="20" >20像素</option>'+
									'			<option value="30" >30像素</option>'+
									'			<option value="40" >40像素</option>'+
									'			<option value="50" >50像素</option>'+
									'			<option value="60" >60像素</option>'+
									'			<option value="70" >70像素</option>'+
									'			<option value="80" >80像素</option>'+
									'			<option value="90" >90像素</option>'+
									'			<option value="100" >100像素</option>'+
									'			<option value="110" >110像素</option>'+
									'			<option value="120" >120像素</option>'+
									'			<option value="130" >130像素</option>'+
									'			<option value="140" >140像素</option>'+
									'			<option value="150" >150像素</option>'+
									'			<option value="160" >160像素</option>'+
									'			<option value="170" >170像素</option>'+
									'			<option value="180" >180像素</option>'+
									'			<option value="190" >190像素</option>'+
									'			<option value="200" >200像素</option>'+
									'			<option value="210" >210像素</option>'+
									'			<option value="220" >220像素</option>'+
									'			<option value="230" >230像素</option>'+
									'			<option value="240" >240像素</option>'+
									'			<option value="250" >250像素</option>'+
									'			<option value="260" >260像素</option>'+
									'			<option value="270" >270像素</option>'+
									'			<option value="280" >280像素</option>'+
									'			<option value="290" >290像素</option>'+
									'			<option value="300" >300像素</option>'+
									'			<option value="310" >310像素</option>'+
									'			<option value="320" >320像素</option>'+
									'			<option value="330" >330像素</option>'+
									'			<option value="340" >340像素</option>'+
									'			<option value="350" >350像素</option>'+
									'			<option value="360" >360像素</option>'+
									'			<option value="370" >370像素</option>'+
									'			<option value="380" >380像素</option>'+
									'			<option value="390" >390像素</option>'+
									'			<option value="400" >400像素</option>'+
									'			<option value="410" >410像素</option>'+
									'			<option value="420" >420像素</option>'+
									'			<option value="430" >430像素</option>'+
									'			<option value="440" >440像素</option>'+
									'			<option value="450" >450像素</option>'+
									'			<option value="460" >460像素</option>'+
									'			<option value="470" >470像素</option>'+
									'			<option value="480" >480像素</option>'+
									'			<option value="490" >490像素</option>'+
									'			<option value="500" >500像素</option>'+
									'			<option value="510" >510像素</option>'+
									'			<option value="520" >520像素</option>'+
									'			<option value="530" >530像素</option>'+
									'			<option value="540" >540像素</option>'+
									'			<option value="550" >550像素</option>'+
									'			<option value="560" >560像素</option>'+
									'			<option value="570" >570像素</option>'+
									'			<option value="580" >580像素</option>'+
									'			<option value="590" >590像素</option>'+
									'			<option value="600" >600像素</option>'+
									'			<option value="610" >610像素</option>'+
									'			<option value="620" >620像素</option>'+
															'			<option value="670" >670像素</option>'+
									'			<option value="720" >720像素</option>'+
									'			<option value="770" >770像素</option>'+
									'			<option value="820" >820像素</option>'+
									'			<option value="870" >870像素</option>'+
									'			<option value="920" >920像素</option>'+
									'			<option value="970" >970像素</option>'+
									'			<option value="1020" >1020像素</option>'+
									'			<option value="1070" >1070像素</option>'+
									'			<option value="1120" >1120像素</option>'+
									'			<option value="1170" >1170像素</option>'+
									'			<option value="1220" >1220像素</option>'+
									'			<option value="1270" >1270像素</option>'+
									'			<option value="1320" >1320像素</option>'+
									'			<option value="1370" >1370像素</option>'+
									'			<option value="1420" >1420像素</option>'+
									'			<option value="1470" >1470像素</option>'+
									'			<option value="1520" >1520像素</option>'+
									'			<option value="1570" >1570像素</option>'+
									'			<option value="1620" >1620像素</option>'+
									'			<option value="1670" >1670像素</option>'+
									'			<option value="1720" >1720像素</option>'+
									'			<option value="1770" >1770像素</option>'+
									'			<option value="1820" >1820像素</option>'+
									'			<option value="1870" >1870像素</option>'+
									'			<option value="1920" >1920像素</option>'+
									'		</select>'+
			'	</li>'+
			'	<li class="optiongroup">'+
			'		<label for="child'+npc+'cssModeY">上下来回：</label>'+
			'		<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'cssModeY" name="childConfig['+npc+'].cssModeY">'+
			'			<option value="" selected="selected">无效果</option>'+
			'			<option value="june-mr-uy" >向上移动</option>'+
			'			<option value="june-mr-dy" >向下移动</option>'+
			'		</select>'+
			'		<select style="width:98px;" id="child'+npc+'cssModeY_num" name="childConfig['+npc+'].cssModeY_num"disabled="disabled">'+
			'			<option value="0" selected="selected">0像素</option>'+
			'			<option value="5" >5像素</option>'+
			'			<option value="10">10像素</option>'+
			'			<option value="15">15像素</option>'+
									'			<option value="20" >20像素</option>'+
									'			<option value="30" >30像素</option>'+
									'			<option value="40" >40像素</option>'+
									'			<option value="50" >50像素</option>'+
									'			<option value="60" >60像素</option>'+
									'			<option value="70" >70像素</option>'+
									'			<option value="80" >80像素</option>'+
									'			<option value="90" >90像素</option>'+
									'			<option value="100" >100像素</option>'+
									'			<option value="110" >110像素</option>'+
									'			<option value="120" >120像素</option>'+
									'			<option value="130" >130像素</option>'+
									'			<option value="140" >140像素</option>'+
									'			<option value="150" >150像素</option>'+
									'			<option value="160" >160像素</option>'+
									'			<option value="170" >170像素</option>'+
									'			<option value="180" >180像素</option>'+
									'			<option value="190" >190像素</option>'+
									'			<option value="200" >200像素</option>'+
									'			<option value="210" >210像素</option>'+
									'			<option value="220" >220像素</option>'+
									'			<option value="230" >230像素</option>'+
									'			<option value="240" >240像素</option>'+
									'			<option value="250" >250像素</option>'+
									'			<option value="260" >260像素</option>'+
									'			<option value="270" >270像素</option>'+
									'			<option value="280" >280像素</option>'+
									'			<option value="290" >290像素</option>'+
									'			<option value="300" >300像素</option>'+
									'			<option value="310" >310像素</option>'+
									'			<option value="320" >320像素</option>'+
									'			<option value="330" >330像素</option>'+
									'			<option value="340" >340像素</option>'+
									'			<option value="350" >350像素</option>'+
									'			<option value="360" >360像素</option>'+
									'			<option value="370" >370像素</option>'+
									'			<option value="380" >380像素</option>'+
									'			<option value="390" >390像素</option>'+
									'			<option value="400" >400像素</option>'+
									'			<option value="410" >410像素</option>'+
									'			<option value="420" >420像素</option>'+
									'			<option value="430" >430像素</option>'+
									'			<option value="440" >440像素</option>'+
									'			<option value="450" >450像素</option>'+
									'			<option value="460" >460像素</option>'+
									'			<option value="470" >470像素</option>'+
									'			<option value="480" >480像素</option>'+
									'			<option value="490" >490像素</option>'+
									'			<option value="500" >500像素</option>'+
									'			<option value="510" >510像素</option>'+
									'			<option value="520" >520像素</option>'+
									'			<option value="530" >530像素</option>'+
									'			<option value="540" >540像素</option>'+
									'			<option value="550" >550像素</option>'+
									'			<option value="560" >560像素</option>'+
									'			<option value="570" >570像素</option>'+
									'			<option value="580" >580像素</option>'+
									'			<option value="590" >590像素</option>'+
									'			<option value="600" >600像素</option>'+
									'			<option value="610" >610像素</option>'+
									'			<option value="620" >620像素</option>'+
															'			<option value="670" >670像素</option>'+
									'			<option value="720" >720像素</option>'+
									'			<option value="770" >770像素</option>'+
									'			<option value="820" >820像素</option>'+
									'			<option value="870" >870像素</option>'+
									'			<option value="920" >920像素</option>'+
									'			<option value="970" >970像素</option>'+
									'			<option value="1020" >1020像素</option>'+
									'			<option value="1070" >1070像素</option>'+
									'			<option value="1120" >1120像素</option>'+
									'			<option value="1170" >1170像素</option>'+
									'			<option value="1220" >1220像素</option>'+
									'			<option value="1270" >1270像素</option>'+
									'			<option value="1320" >1320像素</option>'+
									'			<option value="1370" >1370像素</option>'+
									'			<option value="1420" >1420像素</option>'+
									'			<option value="1470" >1470像素</option>'+
									'			<option value="1520" >1520像素</option>'+
									'			<option value="1570" >1570像素</option>'+
									'			<option value="1620" >1620像素</option>'+
									'			<option value="1670" >1670像素</option>'+
									'			<option value="1720" >1720像素</option>'+
									'			<option value="1770" >1770像素</option>'+
									'			<option value="1820" >1820像素</option>'+
									'			<option value="1870" >1870像素</option>'+
									'			<option value="1920" >1920像素</option>'+
									'		</select>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'cssMode">对称旋转：</label>'+
			'		<select id="child'+npc+'cssMode" name="childConfig['+npc+'].cssMode">'+
			'			<option value="" selected="selected">无效果</option>'+
			'			<option value="june-mr-r2" >顺时针旋转2度</option>'+
			'			<option value="june-mr-r5" >顺时针旋转5度</option>'+
									'			<option value="june-mr-r10" >顺时针旋转10度</option>'+
									'			<option value="june-mr-r20" >顺时针旋转20度</option>'+
									'			<option value="june-mr-r30" >顺时针旋转30度</option>'+
									'			<option value="june-mr-r40" >顺时针旋转40度</option>'+
									'			<option value="june-mr-r50" >顺时针旋转50度</option>'+
									'			<option value="june-mr-r60" >顺时针旋转60度</option>'+
									'			<option value="june-mr-r70" >顺时针旋转70度</option>'+
									'			<option value="june-mr-r80" >顺时针旋转80度</option>'+
									'			<option value="june-mr-r90" >顺时针旋转90度</option>'+
									'			<option value="june-mr-r120" >顺时针旋转120度</option>'+
			'			<option value="june-mr-r180" >顺时针旋转180度</option>'+
			'			<option value="june-mr-r270" >顺时针旋转270度</option>'+
			'			<option value="june-mr-r360" >顺时针旋转360度</option>'+
			'			<option value="june-mr-r720" >顺时针旋转720度</option>'+
			'			<option value="june-mr-fr2" >逆时针旋转2度</option>'+
			'			<option value="june-mr-fr5" >逆时针旋转5度</option>'+
									'			<option value="june-mr-fr10" >逆时针旋转10度</option>'+
									'			<option value="june-mr-fr20" >逆时针旋转20度</option>'+
									'			<option value="june-mr-fr30" >逆时针旋转30度</option>'+
									'			<option value="june-mr-fr40" >逆时针旋转40度</option>'+
									'			<option value="june-mr-fr50" >逆时针旋转50度</option>'+
									'			<option value="june-mr-fr60" >逆时针旋转60度</option>'+
									'			<option value="june-mr-fr70" >逆时针旋转70度</option>'+
									'			<option value="june-mr-fr80" >逆时针旋转80度</option>'+
									'			<option value="june-mr-fr90" >逆时针旋转90度</option>'+
									'			<option value="june-mr-fr120" >逆时针旋转120度</option>'+
			'			<option value="june-mr-fr180" >逆时针旋转180度</option>'+
			'			<option value="june-mr-fr270" >逆时针旋转270度</option>'+
			'			<option value="june-mr-fr360" >逆时针旋转360度</option>'+
			'			<option value="june-mr-fr720" >逆时针旋转720度</option>'+
			'		</select>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'cssMode_sf">循环缩放：</label>'+
			'		<select id="child'+npc+'cssMode_sf" name="childConfig['+npc+'].cssMode_sf">'+
			'			<option value="" selected="selected">无效果</option>'+
			'			<option value="june-mr-sf0" >缩小至消失</option>'+
			'			<option value="june-mr-sf02" >缩小至0.2倍</option>'+
			'			<option value="june-mr-sf04" >缩小至0.4倍</option>'+
			'			<option value="june-mr-sf05" >缩小至0.5倍</option>'+
			'			<option value="june-mr-sf06" >缩小至0.6倍</option>'+
			'			<option value="june-mr-sf08" >缩小至0.8倍</option>'+
			'			<option value="june-mr-sf09" >缩小至0.9倍</option>'+
			'			<option value="june-mr-sf095" >缩小至0.95倍</option>'+
			'			<option value="june-mr-sf098" >缩小至0.98倍</option>'+
			'			<option value="june-mr-sf1" >原始尺寸</option>'+
			'			<option value="june-mr-sf102" >放大至1.02倍</option>'+
			'			<option value="june-mr-sf105" >放大至1.05倍</option>'+
			'			<option value="june-mr-sf110" >放大至1.1倍</option>'+
			'			<option value="june-mr-sf120" >放大至1.2倍</option>'+
			'			<option value="june-mr-sf150" >放大至1.5倍</option>'+
			'			<option value="june-mr-sf180" >放大至1.8倍</option>'+
			'			<option value="june-mr-sf200" >放大至2倍</option>'+
			'		</select>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'cssMode_fz">正反翻转：</label>'+
			'		<select id="child'+npc+'cssMode_fz" name="childConfig['+npc+'].cssMode_fz">'+
			'			<option value="" selected="selected">无效果</option>'+
			'			<option value="june-mr-fx" >横向翻转</option>'+
			'			<option value="june-mr-fy" >纵向翻转</option>'+
			'			<option value="june-mr-fxy" >横向纵向同时翻转</option>'+
			'		</select>'+
			'	</li>'+
			'	<li>'+
			'		<label for="child'+npc+'tt_i1">提示文字：</label>'+
			'		<input id="child'+npc+'tt_i1" class="setinput" type="text" title="鼠标经过动画时的提示文字" junezx_vali_str="true" name="childConfig['+npc+'].tipText" value="" />'+
			'	</li>'+
			'</ul>'+
		'</div>';
		tabs.tabs( "destroy" );
		$("#addNewCartoon").before('<li class="hasdelete"><a href="#tabs-'+(npc+2)+'">动画'+(ntc+1)+'</a><span class="deletetab" data-tabs="tabs-'+(npc+2)+'"><icon>ꕡ</icon></span></li>')
		tabs.find(".form-tabs-content").append(newContent);
		$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
		$("#tForm select").selectmenu();
		tabs.tabs({active: ntc+1});
	});
	$("#tabs").off("click.deltab").on("click.deltab", ".deletetab", function(event) {
		var tabsid = $(this).attr("data-tabs");
		D.tConfirm("确定要删除该动画？", function() {
			tabs.tabs( "destroy" );
			$("#"+tabsid).remove();
			ntc--;
			tabs.children("ul").children("li").children("a[href='#"+tabsid+"']").parent().remove();
			tabs.children("ul").children("li").each(function(i,e) {
				var len =tabs.children("ul").children("li").length;
				if(i >= 1 && i < len - 1) {
					$(this).children("a").html("动画"+(i));
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
	
	$("#tForm .contentType").hide();
	$("#tForm .mongoliaModeUl").each(function() {
		var _t = $(this), val = _t.find(".contentModeDiv input:checked").val();
		$("."+val, _t).show();
	});
	$("#tForm").on("click", ".contentModeDiv input", function() {
		var val = $(this).val(), parent = $(this).parent().parent().parent();
		$(".contentType", parent).hide();
		$("."+val, parent).show();
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