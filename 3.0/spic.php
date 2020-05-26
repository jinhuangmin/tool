<?

//子层
$zz = !empty($_POST['childConfig'])?$_POST['childConfig']:'';
$zznum=count($zz);
$zong='';
if(!empty($_POST['childConfig'])){
for($i=1;$i<=$zznum;$i++){
$b=$i+1;$c=$i-1;$zsss=$zz[$c];
$tm='$("#tabs-'.$b.'").find("li.'.$zsss['contentType'].'").show();';
$zong=''.$zong.'
'.$tm.'';
}
}

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
<form id="tForm" form-data="jspb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">父层设置</a></li>
		<?
		if(!empty($_POST['childConfig'])){
		for($x=1;$x<=count($zz);$x++){ $nn=$x+1;
		echo'<li class="hasdelete"><a href="#tabs-'.$nn.'">子层'.$x.'</a><span class="deletetab" data-tabs="tabs-'.$nn.'"><icon>ꕡ</icon></span></li>
		';
			}
		}
		?>
		<li id="addNewLayout" class="ui-state-default ui-corner-top addnewtab" title="添加特效子层"><icon>ꕙ</icon></li>
		<li style="display:none;"><a href="#tabs-99">视频教程</a></li>
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
				<label for="jdhi_src">父层背景图片：</label>
				<input id="jdhi_src" class="setinput " type="text" title="" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
			 <li>
				<label for="fcrd1">父层链接类型：</label>
				<div id="fcrd1">
					<input type="radio" id="fcr1" name="linkMode" value="ptlink" <? if($_POST['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
					<label for="fcr1" title="普通链接，请在下方输入链接地址">普通</label>
					<input type="radio" id="fcr3" name="linkMode" value="wwlink" <? if($_POST['linkMode']=='wwlink'){echo'checked="checked"';} ?>>
					<label for="fcr3" title="阿里旺旺链接，请在下方输入旺旺账号">旺旺</label>
					<input type="radio" id="fcr4" name="linkMode" value="mdlink" <? if($_POST['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
					<label for="fcr4" title="锚点链接，请在下方选择需要跳转到的锚点" style="display: none;">锚点</label>
					<input type="radio" id="fcgr1" name="linkMode" value="gwlink" <? if($_POST['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
					<label for="fcgr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>
				</div>
			</li>
			<li class="ptlink gwlink linkMode">
				<label id="fcgwlabel1" for="i3">父层链接地址：</label>
				<input id="i3" class="setinput" type="text" title="" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
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
			<li>
				<label>背景图片位置：</label>
				<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
				<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$_POST['imgBgp']?>" />
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
				<label for="rd_o1">超出父层的部分：</label>
				<div id="rd_o1">
					<input type="radio" id="overflowModer1" name="overflowMode" value="visible" <? if($_POST['overflowMode']=='visible'){echo'checked="checked"';} ?> />
					<label for="overflowModer1" title="" style="width:98px;">始终显示</label>
					<input type="radio" id="overflowModer2" name="overflowMode" value="visibleX"  <? if($_POST['overflowMode']=='visibleX'){echo'checked="checked"';} ?> />
					<label for="overflowModer2" title="" style="width:98px;">鼠标经过显示</label>
					<input type="radio" id="overflowModer3" name="overflowMode" value="hidden" <? if($_POST['overflowMode']=='hidden'||empty($_POST['overflowMode'])){echo'checked="checked"';} ?> />
					<label for="overflowModer3" title="" style="width:98px;">始终隐藏</label>
				</div>
			</li>
			<li>
				<label for="rd1">显示方式：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="displayMode" value="" <? if($_POST['displayMode']==''){echo'checked="checked"';} ?> />
					<label for="r1" title="" style="width:98px;">始终显示</label>
					<input type="radio" id="r2" name="displayMode" value="june-fadein" <? if($_POST['displayMode']=='june-fadein'){echo'checked="checked"';} ?> />
					<label for="r2" title="" style="width:98px;">淡入显示</label>
					<input type="radio" id="r3" name="displayMode" value="june-fadeout" <? if($_POST['displayMode']=='june-fadeout'){echo'checked="checked"';} ?> />
					<label for="r3" title="" style="width:98px;">淡出消失</label>
				</div>
			</li>
			<li>
				<label for="css3Speed">动画速度：</label>
				<select id="css3Speed" name="css3Speed">
					<option value="0s" <? if($_POST['css3Speed']=='0s'){echo'selected="selected"';}?>>立即显示</option>
                    <?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=8;$i<=20;$i=$i+1){ $sx=''.$i.'s';
						if($_POST['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=30;$i<=300;$i=$i+10){ $sx=''.$i.'s';
						if($_POST['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=320;$i<=600;$i=$i+20){ $sx=''.$i.'s';
						if($_POST['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					?>   
                 </select>
			</li>
            <li>
				<label for="css3Delay">动画延迟：</label>
				<input id="css3Delay" class="setinput" type="text" title="请输入动画触发的延迟时间，填入数字即可，留空则为不延迟，单位秒" name="css3Delay" value="<?=$_POST['css3Delay']?>" />
			</li>
			<li>
				<label for="css3Bezier">动画特效：</label>
				<select id="css3Bezier" name="css3Bezier">
					<option value="" <? if($_POST['css3Bezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs" <? if($_POST['css3Bezier']=='bs'){echo'selected="selected"';} ?>>由慢到快</option>
					<option value="bq" <? if($_POST['css3Bezier']=='bq'){echo'selected="selected"';} ?>>由快到慢</option>
					<option value="bt" <? if($_POST['css3Bezier']=='bt'){echo'selected="selected"';} ?>>跑过回头</option>
					<option value="bc" <? if($_POST['css3Bezier']=='bc'){echo'selected="selected"';} ?>>起步后撤</option>
					<option value="bd" <? if($_POST['css3Bezier']=='bd'){echo'selected="selected"';} ?>>中间停顿</option>
					<option value="bx" <? if($_POST['css3Bezier']=='bx'){echo'selected="selected"';} ?>>弹性抖动</option>
				</select>
				<label for="css3Weight" class="chkLabel" style="margin-top:-20px;width:40px;">程度：</label>
				<select id="css3Weight" name="css3Weight" style="width:51px;">
					<option value="1" <? if($_POST['css3Weight']=='1'){echo'selected="selected"';} ?>>强</option>
					<option value="2" <? if($_POST['css3Weight']=='2'){echo'selected="selected"';} ?>>中</option>
					<option value="3" <? if($_POST['css3Weight']=='3'){echo'selected="selected"';} ?>>弱</option>
				</select>
			</li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过模块时</span><em></em></li>
			<li>
				<label for="css3ModeX">横向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="css3ModeX" name="css3ModeX">
					<option value="" <? if($_POST['css3ModeX']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-lx" <? if(strstr($_POST['css3ModeX'],'june-lx')){echo'selected="selected"';$arrpp = explode("june-lx",$_POST['css3ModeX']);$arrppnum=$arrpp[1];} ?>>向左移动</option>
					<option value="june-rx" <? if(strstr($_POST['css3ModeX'],'june-rx')){echo'selected="selected"';$arrpp = explode("june-rx",$_POST['css3ModeX']);$arrppnum=$arrpp[1];} ?>>向右移动</option>
				</select>
                <? if($_POST['css3ModeX']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeX_num=$_POST['css3ModeX_num']?$_POST['css3ModeX_num']:$arrppnum; ?>
				<select style="width:98px;" id="css3ModeX_num" name="css3ModeX_num" <?=$dishy?>>
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
			<li>
				<label for="css3ModeY">纵向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="css3ModeY" name="css3ModeY">
					<option value="" <? if($_POST['css3ModeY']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-uy" <? if(strstr($_POST['css3ModeY'],'june-uy')){echo'selected="selected"';$arrpp = explode("june-uy",$_POST['css3ModeY']);$arrppnum=$arrpp[1];} ?>>向上移动</option>
					<option value="june-dy" <? if(strstr($_POST['css3ModeY'],'june-dy')){echo'selected="selected"';$arrpp = explode("june-dy",$_POST['css3ModeY']);$arrppnum=$arrpp[1];} ?>>向下移动</option>
				</select>
                <? if($_POST['css3ModeY']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeY_num=$_POST['css3ModeY_num']?$_POST['css3ModeY_num']:$arrppnum; ?>
				<select style="width:98px;" id="css3ModeY_num" name="css3ModeY_num" <?=$dishy?>>
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
				<label for="css3Mode">旋转：</label>
				<select id="css3Mode" name="css3Mode">
					<option value="" selected="selected">无效果</option>
                    <option value="june-r360" <? if($_POST['css3Mode']=='june-r360'){echo'selected="selected"';} ?>>旋转一周</option>
					<option value="june-r720" <? if($_POST['css3Mode']=='june-r720'){echo'selected="selected"';} ?>>旋转两周</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过该层时</span><em></em></li>
			<li>
				<label for="css3MoveModeX">横向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="css3MoveModeX" name="css3MoveModeX">
					<option value="" <? if($_POST['css3MoveModeX']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-move-lx" <? if(strstr($_POST['css3MoveModeX'],'june-move-lx')){echo'selected="selected"';$arrpp = explode("june-move-lx",$_POST['css3MoveModeX']);$arrppnum=$arrpp[1];} ?>>向左移动</option>
					<option value="june-move-rx" <? if(strstr($_POST['css3MoveModeX'],'june-move-rx')){echo'selected="selected"';$arrpp = explode("june-move-rx",$_POST['css3MoveModeX']);$arrppnum=$arrpp[1];} ?>>向右移动</option>
				</select>
				<? if($_POST['css3MoveModeX']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3ModeY_num=$_POST['css3MoveModeX_num']?$_POST['css3MoveModeX_num']:$arrppnum; ?>
                <select style="width:98px;" id="css3MoveModeX_num" name="css3MoveModeX_num" <?=$dishy?>>
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
		<label for="css3MoveModeY">纵向移动：</label>
		<select class="cssModeTypeSelect" style="width:98px;" id="css3MoveModeY" name="css3MoveModeY">
			<option value="" <? if($_POST['css3MoveModeY']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
			<option value="june-move-uy" <? if(strstr($_POST['css3MoveModeY'],'june-move-uy')){echo'selected="selected"';$arrpp = explode("june-move-uy",$_POST['css3MoveModeY']);$arrppnum=$arrpp[1];} ?>>向上移动</option>
			<option value="june-move-dy" <? if(strstr($_POST['css3MoveModeY'],'june-move-dy')){echo'selected="selected"';$arrpp = explode("june-move-dy",$_POST['css3MoveModeY']);$arrppnum=$arrpp[1];} ?>>向下移动</option>
		</select>
		<? if($_POST['css3MoveModeY']==''){$dishy='disabled="disabled"';}else{$dishy='';}
		   $css3MoveModeY_num=$_POST['css3MoveModeY_num']?$_POST['css3MoveModeY_num']:$arrppnum; ?>
		<select style="width:98px;" id="css3MoveModeY_num" name="css3MoveModeY_num" <?=$dishy?>>
			<option value="0" <? if($css3MoveModeY_num=='0'){echo'selected="selected"';} ?>>0像素</option>
			<option value="5" <? if($css3MoveModeY_num=='5'){echo'selected="selected"';} ?>>5像素</option>
			<?
			for($i2=10;$i2<=620;$i2=$i2+10){ $sx=$i2;
				if($css3MoveModeY_num==$sx){$sel='selected="selected"';}else{$sel='';}
			echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
				}
			for($i2=670;$i2<=1920;$i2=$i2+50){ $sx=$i2;
				if($css3MoveModeY_num==$sx){$sel='selected="selected"';}else{$sel='';}
			echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
				}
			?>
		</select>
	</li>
			
            <li>
				<label for="css3MoveMode">CSS3特效：</label>
				<select id="css3MoveMode" name="css3MoveMode">
					<option value="" <? if($_POST['css3MoveMode']==''){echo'selected="selected"';} ?>>无效果</option>
					
					<option value="june-move-fx" <? if($_POST['css3MoveMode']=='june-move-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-move-fy" <? if($_POST['css3MoveMode']=='june-move-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-move-fxy" <? if($_POST['css3MoveMode']=='june-move-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>

					<option value="june-move-r2" <? if($_POST['css3MoveMode']=='june-move-r2'){echo'selected="selected"';} ?>>顺时针旋转2度</option>
					<option value="june-move-r5" <? if($_POST['css3MoveMode']=='june-move-r5'){echo'selected="selected"';} ?>>顺时针旋转5度</option>
                    <option value="june-move-r10" <? if($_POST['css3MoveMode']=='june-move-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
                    <option value="june-move-r20" <? if($_POST['css3MoveMode']=='june-move-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
                    <option value="june-move-r30" <? if($_POST['css3MoveMode']=='june-move-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
                    <option value="june-move-r40" <? if($_POST['css3MoveMode']=='june-move-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
                    <option value="june-move-r50" <? if($_POST['css3MoveMode']=='june-move-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
                    <option value="june-move-r60" <? if($_POST['css3MoveMode']=='june-move-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
                    <option value="june-move-r70" <? if($_POST['css3MoveMode']=='june-move-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
                    <option value="june-move-r80" <? if($_POST['css3MoveMode']=='june-move-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
                    <option value="june-move-r90" <? if($_POST['css3MoveMode']=='june-move-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
                    <option value="june-move-r120" <? if($_POST['css3MoveMode']=='june-move-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-move-r180" <? if($_POST['css3MoveMode']=='june-move-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-move-r270" <? if($_POST['css3MoveMode']=='june-move-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-move-r360" <? if($_POST['css3MoveMode']=='june-move-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-move-r720" <? if($_POST['css3MoveMode']=='june-move-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
					<option value="june-move-fr2" <? if($_POST['css3MoveMode']=='june-move-fr2'){echo'selected="selected"';} ?>>逆时针旋转2度</option>
					<option value="june-move-fr5" <? if($_POST['css3MoveMode']=='june-move-fr5'){echo'selected="selected"';} ?>>逆时针旋转5度</option>
                    <option value="june-move-fr10" <? if($_POST['css3MoveMode']=='june-move-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
                    <option value="june-move-fr20" <? if($_POST['css3MoveMode']=='june-move-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
                    <option value="june-move-fr30" <? if($_POST['css3MoveMode']=='june-move-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
                    <option value="june-move-fr40" <? if($_POST['css3MoveMode']=='june-move-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
                    <option value="june-move-fr50" <? if($_POST['css3MoveMode']=='june-move-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
                    <option value="june-move-fr60" <? if($_POST['css3MoveMode']=='june-move-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
                    <option value="june-move-fr70" <? if($_POST['css3MoveMode']=='june-move-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
                    <option value="june-move-fr80" <? if($_POST['css3MoveMode']=='june-move-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
                    <option value="june-move-fr90" <? if($_POST['css3MoveMode']=='june-move-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
                    <option value="june-move-fr120" <? if($_POST['css3MoveMode']=='june-move-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-move-fr180" <? if($_POST['css3MoveMode']=='june-move-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-move-fr270" <? if($_POST['css3MoveMode']=='june-move-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-move-fr360" <? if($_POST['css3MoveMode']=='june-move-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-move-fr720" <? if($_POST['css3MoveMode']=='june-move-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
					<option value="june-move-sf0" <? if($_POST['css3MoveMode']=='june-move-sf0'){echo'selected="selected"';} ?>>缩小至消失</option>
					<option value="june-move-sf02" <? if($_POST['css3MoveMode']=='june-move-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-move-sf04" <? if($_POST['css3MoveMode']=='june-move-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-move-sf05" <? if($_POST['css3MoveMode']=='june-move-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-move-sf06" <? if($_POST['css3MoveMode']=='june-move-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-move-sf08" <? if($_POST['css3MoveMode']=='june-move-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-move-sf09" <? if($_POST['css3MoveMode']=='june-move-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-move-sf095" <? if($_POST['css3MoveMode']=='june-move-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-move-sf098" <? if($_POST['css3MoveMode']=='june-move-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-move-sf1" <? if($_POST['css3MoveMode']=='june-move-sf1'){echo'selected="selected"';} ?>>还原至原始尺寸</option>
					<option value="june-move-sf102" <? if($_POST['css3MoveMode']=='june-move-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-move-sf105" <? if($_POST['css3MoveMode']=='june-move-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-move-sf110" <? if($_POST['css3MoveMode']=='june-move-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-move-sf120" <? if($_POST['css3MoveMode']=='june-move-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-move-sf150" <? if($_POST['css3MoveMode']=='june-move-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-move-sf180" <? if($_POST['css3MoveMode']=='june-move-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-move-sf200" <? if($_POST['css3MoveMode']=='june-move-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
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
		<ul class="setform">
            <input id="child<?=$i?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$_POST['childConfig'][$i]['attachID']?>" />
			<li>
				<label for="child<?=$i?>rda">子层<?=($i+1)?>内容设置：</label>
				<div id="child<?=$i?>rda" class="contentTypeDiv">
					<input type="radio" id="child<?=$i?>ra" name="childConfig[<?=$i?>].contentType" value="imgContent" <? if($_POST['childConfig'][$i]['contentType']=='imgContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>ra" title="" style="width:98px;">图片</label>
					<input type="radio" id="child<?=$i?>rb" name="childConfig[<?=$i?>].contentType" value="textContent" <? if($_POST['childConfig'][$i]['contentType']=='textContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>rb" title="" style="width:98px;">文字</label>
					<input type="radio" id="child<?=$i?>rc" name="childConfig[<?=$i?>].contentType" value="customContent" <? if($_POST['childConfig'][$i]['contentType']=='customContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>rc" title="" style="width:98px;">自定义内容</label>
				</div>
			</li>
			<li class="imgContent contentType">
				<label for="child<?=$i?>jdhi_src">背景图片：</label>
				<input id="child<?=$i?>jdhi_src" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[<?=$i?>].pSrc" value="<?=$_POST['childConfig'][$i]['pSrc']?>" />
				<input id="child<?=$i?>autoSize" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].autoSize" value="yes" <? if($_POST['childConfig'][$i]['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child<?=$i?>autoSize" class="chkLabel">自动高宽</label>
			</li>
	        <li class="textContent contentType" style="clear:both;padding-top:10px;height:auto;">
	            <label for="child<?=$i?>_qssetContent">子层文字：</label>
	            <textarea class="textContentConfig" id="child<?=$i?>_qssetConfig" name="childConfig[<?=$i?>].qssetConfig" style="display:none;"><?=$_POST['childConfig'][$i]['qssetConfig']?></textarea>
	            <textarea id="child<?=$i?>_qssetContent" name="childConfig[<?=$i?>].qssetContent"><?=$_POST['childConfig'][$i]['qssetContent']?></textarea>
	            <label class="btnLabel" data-target="otherset-clicked" data-oths="qsset;child<?=$i?>_qssetConfig;child<?=$i?>_qssetContent">样式设置</label>
	        </li>
        
        	<li class="imgContent textContent contentType">
				<label for="child<?=$i?>zcrda">链接类型：</label>
				<div id="child<?=$i?>zcrda" class="zc_linkModeDiv">
					<input type="radio" id="child<?=$i?>zcra" name="childConfig[<?=$i?>].linkMode" value="ptlink" <? if($_POST['childConfig'][$i]['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>zcra" title="">普通</label>
					<input type="radio" id="child<?=$i?>zcrc" name="childConfig[<?=$i?>].linkMode" value="wwlink" <? if($_POST['childConfig'][$i]['linkMode']=='wwlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>zcrc" title="">旺旺</label>
					<input type="radio" id="child<?=$i?>zcrd" name="childConfig[<?=$i?>].linkMode" value="mdlink" <? if($_POST['childConfig'][$i]['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>zcrd" title="" style="display: none;">锚点</label>
					<input type="radio" id="child<?=$i?>zcgr1" name="childConfig[<?=$i?>].linkMode" value="gwlink" <? if($_POST['childConfig'][$i]['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>zcgr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>
				</div>
			</li>
			<li class="zc_ptlink zc_gwlink zc_linkMode imgContent textContent contentType">
				<label for="child<?=$i?>i1">链接地址：</label>
				<input id="child<?=$i?>i1" class="setinput" type="text" title="请输入图片的链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="childConfig[<?=$i?>].href" value="<?=$_POST['childConfig'][$i]['href']?>" />
				


				<input id="child<?=$i?>hrefMode" class="chkBox" type="checkbox" name="childConfig[<?=$i?>].hrefMode" value="_blank" <? if($_POST['childConfig'][$i]['hrefMode']=='_blank'){echo'checked="checked"';}?> />
				<label for="child<?=$i?>hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
			</li>
			<li class="zc_wwlink zc_linkMode imgContent textContent contentType">
				<label for="child<?=$i?>i3">旺旺ID：</label>
				<input id="child<?=$i?>i3" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="childConfig[<?=$i?>].wangID" value="<?=$_POST['childConfig'][$i]['wangID']?>" />
			</li>
			<li class="zc_wwlink zc_linkMode imgContent textContent contentType">
				<label for="child<?=$i?>shuntMode">分流方式：</label>
				<select id="child<?=$i?>shuntMode" name="childConfig[<?=$i?>].shuntMode">
					<option value="no" <? if($_POST['childConfig'][$i]['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
					<option value="yes" <? if($_POST['childConfig'][$i]['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
				</select>
			</li>
			
			<li class="zc_mdlink zc_linkMode imgContent textContent contentType">
				<label for="child<?=$i?>anchorSelect">点击后跳转至：</label>
				<select id="child<?=$i?>anchorSelect" name="childConfig[<?=$i?>].anchorSelect">
					<?
					$anchorName = explode(',',$_POST['anchorName']);
					if($_POST['anchorName']==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					foreach($anchorName as $item){
                       if($item==$_POST['childConfig'][$i]['anchorSelect']){$sct='selected="selected"';}else{$sct='';}
					   echo'<option value="'.$item.'" '.$sct.'> 锚点：'.$item.'</option>';				
						}}
					?>
				</select>
			</li>
		            
			<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;">
				<label for="child<?=$i?>_ta1">自定义内容：</label>
				<textarea id="child<?=$i?>_ta1" name="childConfig[<?=$i?>].customContent"><?=stripslashes($_POST['childConfig'][$i]['customContent'])?></textarea>
				<label class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$_POST['childConfig'][$i]['attachID']?>" data-zdyOtherName="childConfig[<?=$i?>].contentType,customContent">可视化编辑</label>
			</li>

			<li class="imgContent contentType">
				<label>背景图片位置：</label>
				<span id="child<?=$i?>imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
				<input id="child<?=$i?>imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[<?=$i?>].imgBgp" value="<?=$bgp?>" />
				<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['childConfig'][$i]['attachID']?>,tForm" data-isn="child<?=$i?>" data-isa="yes">手动调整<i class="popsd"></i></label>
			</li>
			<li class="imgContent contentType">
				<label for="child<?=$i?>sdtzBgColor">背景颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['childConfig'][$i]['bgColor']?>;"></div></div></div>
					<input id="child<?=$i?>sdtzBgColor" class="setinputcolor tColorPicker" type="text" name="childConfig[<?=$i?>].bgColor" value="<?=$_POST['childConfig'][$i]['bgColor']?>" />
				</div>
			</li>

			<li>
				<label for="child<?=$i?>rd1">显示方式：</label>
				<div id="child<?=$i?>rd1">
					<input type="radio" id="child<?=$i?>r1" name="childConfig[<?=$i?>].displayMode" value="" <? if($_POST['childConfig'][$i]['displayMode']==''){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>r1" title="" style="width:98px;">始终显示</label>
					<input type="radio" id="child<?=$i?>r2" name="childConfig[<?=$i?>].displayMode" value="june-box-fadein" <? if($_POST['childConfig'][$i]['displayMode']=='june-box-fadein'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>r2" title="" style="width:98px;">淡入显示</label>
					<input type="radio" id="child<?=$i?>r3" name="childConfig[<?=$i?>].displayMode" value="june-box-fadeout" <? if($_POST['childConfig'][$i]['displayMode']=='june-box-fadeout'){echo'checked="checked"';} ?>/>
					<label for="child<?=$i?>r3" title="" style="width:98px;">淡出消失</label>
				</div>
			</li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">默认显示时</span><em></em></li>
			<li>
				<label for="child<?=$i?>css3Mode_mr_xz">旋转特效：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>css3Mode_mr_xz" name="childConfig[<?=$i?>].css3Mode_mr_xz">
					<option value="" <? if($_POST['childConfig'][$i]['css3Mode_mr_xz']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-mr-r" <? if(strstr($_POST['childConfig'][$i]['css3Mode_mr_xz'],'june-mr-r')){echo'selected="selected"';$arrpp = explode("june-mr-r",$_POST['childConfig'][$i]['css3Mode_mr_xz']);$arrppnum=$arrpp[1];} ?>>顺时针旋转</option>
					<option value="june-mr-fr" <? if(strstr($_POST['childConfig'][$i]['css3Mode_mr_xz'],'june-mr-fr')){echo'selected="selected"';$arrpp = explode("june-mr-fr",$_POST['childConfig'][$i]['css3Mode_mr_xz']);$arrppnum=$arrpp[1];} ?>>逆时针旋转</option>
				</select><? if($_POST['childConfig'][$i]['css3Mode_mr_xz']==''){$dishy='disabled="disabled"';}else{$dishy='';}$css3Mode_mr_xz_num=$_POST['childConfig'][$i]['css3Mode_mr_xz_num']?$_POST['childConfig'][$i]['css3Mode_mr_xz_num']:$arrppnum; ?>
				<select style="width:98px;" id="child<?=$i?>css3Mode_mr_xz_num" name="childConfig[<?=$i?>].css3Mode_mr_xz_num" <?=$dishy?>>
					<?
                 $arraynum= array(0,2,5,10,20,30,40,50,60,70,80,90,120,180,270,360,720);
				foreach($arraynum as $num){
				   if($css3Mode_mr_xz_num==$num){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$num.'" '.$select.'>'.$num.'度</option>
				   ';
				   }
					?>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3Mode_mr_sf">默认缩放特效：</label>
				<select id="child<?=$i?>css3Mode_mr_sf" name="childConfig[<?=$i?>].css3Mode_mr_sf">
					<option value="" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']==''){echo'selected="selected"';} ?>>无效果</option>
                    <option value="june-mr-sf0" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf0'){echo'selected="selected"';} ?>>缩小至消失</option>
					<option value="june-mr-sf02" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-mr-sf04" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-mr-sf05" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-mr-sf06" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-mr-sf08" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-mr-sf09" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-mr-sf095" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-mr-sf098" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-mr-sf1" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf1'){echo'selected="selected"';} ?>>原始尺寸</option>
					<option value="june-mr-sf102" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-mr-sf105" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-mr-sf110" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-mr-sf120" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-mr-sf150" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-mr-sf180" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-mr-sf200" <? if($_POST['childConfig'][$i]['css3Mode_mr_sf']=='june-mr-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3Mode_mr_fz">默认翻转特效：</label>
				<select id="child<?=$i?>css3Mode_mr_fz" name="childConfig[<?=$i?>].css3Mode_mr_fz">
					<option value="" <? if($_POST['childConfig'][$i]['css3Mode_mr_fz']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-mr-fx" <? if($_POST['childConfig'][$i]['css3Mode_mr_fz']=='june-mr-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-mr-fy" <? if($_POST['childConfig'][$i]['css3Mode_mr_fz']=='june-mr-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-mr-fxy" <? if($_POST['childConfig'][$i]['css3Mode_mr_fz']=='june-mr-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过其父层时</span><em></em></li>
			<li>
				<label for="child<?=$i?>css3Speed">动画速度：</label>
				<select id="child<?=$i?>css3Speed" name="childConfig[<?=$i?>].css3Speed">
					
                    <option value="0s" <? if($_POST['childConfig'][$i]['css3Speed']=='0s'){echo'selected="selected"';}?>>立即显示</option>
                    <?
                    for($i2=0.1;$i2<7.1;$i2=$i2+0.1){ $sx=''.$i2.'s';
						if($_POST['childConfig'][$i]['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'s" '.$sel.'>'.$i2.'秒</option>';
						}
					for($i2=8;$i2<=20;$i2=$i2+1){ $sx=''.$i2.'s';
						if($_POST['childConfig'][$i]['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'s" '.$sel.'>'.$i2.'秒</option>';
						}
					for($i2=30;$i2<=300;$i2=$i2+10){ $sx=''.$i2.'s';
						if($_POST['childConfig'][$i]['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'s" '.$sel.'>'.$i2.'秒</option>';
						}
					for($i2=320;$i2<=600;$i2=$i2+20){ $sx=''.$i2.'s';
						if($_POST['childConfig'][$i]['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'s" '.$sel.'>'.$i2.'秒</option>';
						}
					?>   
                  </select>
			</li>
			<li>
			<label for="child<?=$i?>css3Delay">动画延迟：</label>
			<input id="child<?=$i?>css3Delay" class="setinput" type="text" title="请输入动画触发的延迟时间，填入数字即可，留空则为不延迟，单位秒" name="childConfig[<?=$i?>].css3Delay" value="<?=$_POST['childConfig'][$i]['css3Delay']?>" />
		</li>
			<li>
				<label for="child<?=$i?>css3Bezier">动画特效：</label>
				<select id="child[<?=$i?>].css3Bezier" name="childConfig[<?=$i?>].css3Bezier">
					<option value="" <? if($_POST['childConfig'][$i]['css3Bezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs" <? if($_POST['childConfig'][$i]['css3Bezier']=='bs'){echo'selected="selected"';} ?>>由慢到快</option>
					<option value="bq" <? if($_POST['childConfig'][$i]['css3Bezier']=='bq'){echo'selected="selected"';} ?>>由快到慢</option>
					<option value="bt" <? if($_POST['childConfig'][$i]['css3Bezier']=='bt'){echo'selected="selected"';} ?>>跑过回头</option>
					<option value="bc" <? if($_POST['childConfig'][$i]['css3Bezier']=='bc'){echo'selected="selected"';} ?>>起步后撤</option>
					<option value="bd" <? if($_POST['childConfig'][$i]['css3Bezier']=='bd'){echo'selected="selected"';} ?>>中间停顿</option>
					<option value="bx" <? if($_POST['childConfig'][$i]['css3Bezier']=='bx'){echo'selected="selected"';} ?>>弹性抖动</option>
				</select>
				<label for="child<?=$i?>css3Weight" class="chkLabel" style="margin-top:-20px;width:40px;">程度：</label>
				<select id="child<?=$i?>css3Weight" name="childConfig[<?=$i?>].css3Weight" style="width:51px;">
					<option value="1" <? if($_POST['childConfig'][$i]['css3Weight']=='1'){echo'selected="selected"';} ?>>强</option>
					<option value="2" <? if($_POST['childConfig'][$i]['css3Weight']=='2'){echo'selected="selected"';} ?>>中</option>
					<option value="3" <? if($_POST['childConfig'][$i]['css3Weight']=='3'){echo'selected="selected"';} ?>>弱</option>
				</select>
			</li>
			<li class="optiongroup">
				<label for="child<?=$i?>css3ModeX">横向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>css3ModeX" name="childConfig[<?=$i?>].css3ModeX">
					<option value="" <? if($_POST['childConfig'][$i]['css3ModeX']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-box-lx" <? if(strstr($_POST['childConfig'][$i]['css3ModeX'],'june-box-lx')){echo'selected="selected"';$arrpp = explode("june-box-lx",$_POST['childConfig'][$i]['css3ModeX']);$arrppnum=$arrpp[1];} ?>>向左移动</option>
					<option value="june-box-rx" <? if(strstr($_POST['childConfig'][$i]['css3ModeX'],'june-box-rx')){echo'selected="selected"';$arrpp = explode("june-box-rx",$_POST['childConfig'][$i]['css3ModeX']);$arrppnum=$arrpp[1];} ?>>向右移动</option>
					<option value="june-box-fromleft" <? if(strstr($_POST['childConfig'][$i]['css3ModeX'],'june-box-fromleft')){echo'selected="selected"';$arrpp = explode("june-box-fromleft",$_POST['childConfig'][$i]['css3ModeX']);$arrppnum=$arrpp[1];} ?>>从左进入</option>
					<option value="june-box-fromright" <? if(strstr($_POST['childConfig'][$i]['css3ModeX'],'june-box-fromright')){echo'selected="selected"';$arrpp = explode("june-box-fromright",$_POST['childConfig'][$i]['css3ModeX']);$arrppnum=$arrpp[1];} ?>>从右进入</option>
				</select><? if($_POST['childConfig'][$i]['css3ModeX']==''){$dishy='disabled="disabled"';}else{$dishy='';}$css3ModeX_num=$_POST['childConfig'][$i]['css3ModeX_num']?$_POST['childConfig'][$i]['css3ModeX_num']:$arrppnum; ?>
				<select style="width:98px;" id="child<?=$i?>css3ModeX_num" name="childConfig[<?=$i?>].css3ModeX_num" <?=$dishy?>>
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
			<li>
				<label for="child<?=$i?>css3ModeY">纵向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;"  id="child<?=$i?>css3ModeY" name="childConfig[<?=$i?>].css3ModeY">
					<option value="" <? if($_POST['childConfig'][$i]['css3ModeY']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-box-uy" <? if(strstr($_POST['childConfig'][$i]['css3ModeY'], 'june-box-uy')){echo'selected="selected"';$arrpp = explode("june-box-uy",$_POST['childConfig'][$i]['css3ModeY']);$arrppnum=$arrpp[1];} ?>>向上移动</option>
					<option value="june-box-dy" <? if(strstr($_POST['childConfig'][$i]['css3ModeY'], 'june-box-dy')){echo'selected="selected"';$arrpp = explode("june-box-dy",$_POST['childConfig'][$i]['css3ModeY']);$arrppnum=$arrpp[1];} ?>>向下移动</option>
					<option value="june-box-fromtop" <? if(strstr($_POST['childConfig'][$i]['css3ModeY'], 'june-box-fromtop')){echo'selected="selected"';$arrpp = explode("june-box-fromtop",$_POST['childConfig'][$i]['css3ModeY']);$arrppnum=$arrpp[1];} ?>>从上进入</option>
					<option value="june-box-frombottom" <? if(strstr($_POST['childConfig'][$i]['css3ModeY'], 'june-box-frombottom')){echo'selected="selected"';$arrpp = explode("june-box-frombottom",$_POST['childConfig'][$i]['css3ModeY']);$arrppnum=$arrpp[1];} ?>>从下进入</option>
                    

                    
				</select><? if($_POST['childConfig'][$i]['css3ModeY']==''){$dishy='disabled="disabled"';}else{$dishy='';}$css3ModeY_num=$_POST['childConfig'][$i]['css3ModeY_num']?$_POST['childConfig'][$i]['css3ModeY_num']:$arrppnum; ?>
				<select style="width:98px;" id="child<?=$i?>css3ModeY_num" name="childConfig[<?=$i?>].css3ModeY_num" <?=$dishy?>>
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
				<label for="child<?=$i?>css3Mode_xz">旋转特效：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>css3Mode_xz" name="childConfig[<?=$i?>].css3Mode_xz">
					<option value="" <? if($_POST['childConfig'][$i]['css3Mode_xz']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-box-r" <? if(strstr($_POST['childConfig'][$i]['css3Mode_xz'],'june-box-r')){echo'selected="selected"';$arrpp = explode("june-box-r",$_POST['childConfig'][$i]['css3Mode_xz']);$arrppnum=$arrpp[1];} ?>>顺时针旋转</option>
					<option value="june-box-fr" <? if(strstr($_POST['childConfig'][$i]['css3Mode_xz'],'june-box-fr')){echo'selected="selected"';$arrpp = explode("june-box-fr",$_POST['childConfig'][$i]['css3Mode_xz']);$arrppnum=$arrpp[1];} ?>>逆时针旋转</option>
				</select><? if($_POST['childConfig'][$i]['css3Mode_xz']==''){$dishy='disabled="disabled"';}else{$dishy='';}$css3Mode_xz_num=$_POST['childConfig'][$i]['css3Mode_xz_num']?$_POST['childConfig'][$i]['css3Mode_xz_num']:$arrppnum; ?>
				<select style="width:98px;" id="child<?=$i?>css3Mode_xz_num" name="childConfig[<?=$i?>].css3Mode_xz_num" <?=$dishy?>>
					<option value="0" <? if($css3Mode_xz_num=='0'){echo'selected="selected"';} ?>>0度</option>
					<option value="2" <? if($css3Mode_xz_num=='2'){echo'selected="selected"';} ?>>2度</option>
					<option value="5" <? if($css3Mode_xz_num=='5'){echo'selected="selected"';} ?>>5度</option>
                    <option value="10" <? if($css3Mode_xz_num=='10'){echo'selected="selected"';} ?>>10度</option>
                    <option value="20" <? if($css3Mode_xz_num=='20'){echo'selected="selected"';} ?>>20度</option>
                    <option value="30" <? if($css3Mode_xz_num=='30'){echo'selected="selected"';} ?>>30度</option>
                    <option value="40" <? if($css3Mode_xz_num=='40'){echo'selected="selected"';} ?>>40度</option>
                    <option value="50" <? if($css3Mode_xz_num=='50'){echo'selected="selected"';} ?>>50度</option>
                    <option value="60" <? if($css3Mode_xz_num=='60'){echo'selected="selected"';} ?>>60度</option>
                    <option value="70" <? if($css3Mode_xz_num=='70'){echo'selected="selected"';} ?>>70度</option>
                    <option value="80" <? if($css3Mode_xz_num=='80'){echo'selected="selected"';} ?>>80度</option>
                    <option value="90" <? if($css3Mode_xz_num=='90'){echo'selected="selected"';} ?>>90度</option>
                    <option value="120" <? if($css3Mode_xz_num=='120'){echo'selected="selected"';} ?>>120度</option>
					<option value="180" <? if($css3Mode_xz_num=='180'){echo'selected="selected"';} ?>>180度</option>
					<option value="270" <? if($css3Mode_xz_num=='270'){echo'selected="selected"';} ?>>270度</option>
					<option value="360" <? if($css3Mode_xz_num=='360'){echo'selected="selected"';} ?>>360度</option>
					<option value="720" <? if($css3Mode_xz_num=='720'){echo'selected="selected"';} ?>>720度</option>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3Mode_sf">缩放特效：</label>
				<select id="child<?=$i?>css3Mode_sf" name="childConfig[<?=$i?>].css3Mode_sf">
					<option value="" selected="selected">无效果</option>
					<option value="june-box-sf0" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小至消失</option>
					<option value="june-box-sf02" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf1" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf1'){echo'selected="selected"';} ?>>还原至原始尺寸</option>
					<option value="june-box-sf102" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($_POST['childConfig'][$i]['css3Mode_sf']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3Mode_fz">翻转特效：</label>
				<select id="child<?=$i?>css3Mode_fz" name="childConfig[<?=$i?>].css3Mode_fz">
					<option value="" <? if($_POST['childConfig'][$i]['css3Mode_fz']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($_POST['childConfig'][$i]['css3Mode_fz']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($_POST['childConfig'][$i]['css3Mode_fz']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($_POST['childConfig'][$i]['css3Mode_fz']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3Mode">其他特效：</label>
				<select id="child<?=$i?>css3Mode" name="childConfig[<?=$i?>].css3Mode">
					<option value="" <? if($_POST['childConfig'][$i]['css3Mode']==''){echo'selected="selected"';} ?>>无效果</option>
					<!--<option value="jzi" >最高层显示</option>
					<option value="jzd" >最低层显示</option>-->
					<option value="effect_w" <? if($_POST['childConfig'][$i]['css3Mode']=='effect_w'){echo'selected="selected"';} ?>>向右展开</option>
					<option value="effect_w1" <? if($_POST['childConfig'][$i]['css3Mode']=='effect_w1'){echo'selected="selected"';} ?>>向左展开</option>
					<option value="effect_h" <? if($_POST['childConfig'][$i]['css3Mode']=='effect_h'){echo'selected="selected"';} ?>>纵向展开</option>
					<option value="effect_wh" <? if($_POST['childConfig'][$i]['css3Mode']=='effect_wh'){echo'selected="selected"';} ?>>斜向展开</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过该子层时</span><em></em></li>
			<li>
				<label for="child<?=$i?>css3MoveModeX">横向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>css3MoveModeX" name="childConfig[<?=$i?>].css3MoveModeX">
					<option value="" <? if($_POST['childConfig'][$i]['css3MoveModeX']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-move-lx" <? if(strstr($_POST['childConfig'][$i]['css3MoveModeX'],'june-move-lx')){echo'selected="selected"';$arrpp = explode("june-move-lx",$_POST['childConfig'][$i]['css3MoveModeX']);$arrppnum=$arrpp[1];} ?>>向左移动</option>
					<option value="june-move-rx" <? if(strstr($_POST['childConfig'][$i]['css3MoveModeX'],'june-move-rx')){echo'selected="selected"';$arrpp = explode("june-move-rx",$_POST['childConfig'][$i]['css3MoveModeX']);$arrppnum=$arrpp[1];} ?>>向右移动</option>
				</select>
                <? if($_POST['childConfig'][$i]['css3MoveModeX']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3MoveModeX_num=$_POST['childConfig'][$i]['css3MoveModeX_num']?$_POST['childConfig'][$i]['css3MoveModeX_num']:$arrppnum; ?>
				<select style="width:98px;" id="child<?=$i?>css3MoveModeX_num" name="childConfig[<?=$i?>].css3MoveModeX_num" <?=$dishy?>>
					<option value="0" <? if($css3MoveModeX_num=='0'){echo'selected="selected"';} ?>>0像素</option>
					<option value="5" <? if($css3MoveModeX_num=='5'){echo'selected="selected"';} ?>>5像素</option>
                    <?
                    for($i2=10;$i2<=620;$i2=$i2+10){ $sx=$i2;
						if($css3MoveModeX_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					for($i2=670;$i2<=1920;$i2=$i2+50){ $sx=$i2;
						if($css3MoveModeX_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					?>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3MoveModeY">纵向移动：</label>
				<select class="cssModeTypeSelect" style="width:98px;" id="child<?=$i?>css3MoveModeY" name="childConfig[<?=$i?>].css3MoveModeY">
					<option value="" <? if($_POST['childConfig'][$i]['css3MoveModeY']==''){echo'selected="selected"';$arrppnum='';} ?>>无效果</option>
					<option value="june-move-uy" <? if(strstr($_POST['childConfig'][$i]['css3MoveModeY'],'june-move-uy')){echo'selected="selected"';$arrpp = explode("june-move-uy",$_POST['childConfig'][$i]['css3MoveModeY']);$arrppnum=$arrpp[1];} ?>>向上移动</option>
					<option value="june-move-dy" <? if(strstr($_POST['childConfig'][$i]['css3MoveModeY'],'june-move-dy')){echo'selected="selected"';$arrpp = explode("june-move-dy",$_POST['childConfig'][$i]['css3MoveModeY']);$arrppnum=$arrpp[1];} ?>>向下移动</option>
				</select>
                <? if($_POST['childConfig'][$i]['css3MoveModeY']==''){$dishy='disabled="disabled"';}else{$dishy='';}
				   $css3MoveModeY_num=$_POST['childConfig'][$i]['css3MoveModeY_num']?$_POST['childConfig'][$i]['css3MoveModeY_num']:$arrppnum; ?>
				<select style="width:98px;" id="child<?=$i?>css3MoveModeY_num" name="childConfig[<?=$i?>].css3MoveModeY_num" <?=$dishy?>>
					<option value="0" <? if($css3MoveModeY_num=='0'){echo'selected="selected"';} ?>>0像素</option>
					<option value="5" <? if($css3MoveModeY_num=='5'){echo'selected="selected"';} ?>>5像素</option>
                    <?
                    for($i2=10;$i2<=620;$i2=$i2+10){ $sx=$i2;
						if($css3MoveModeY_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					for($i2=670;$i2<=1920;$i2=$i2+50){ $sx=$i2;
						if($css3MoveModeY_num==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i2.'" '.$sel.'>'.$i2.'像素</option>';
						}
					?>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>css3MoveMode">CSS3特效：</label>
				<select id="child<?=$i?>css3MoveMode" name="childConfig[<?=$i?>].css3MoveMode">
<option value="" <? if($_POST['childConfig'][$i]['css3MoveMode']==''){echo'selected="selected"';} ?>>无效果</option>
<option value="june-move-fx" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fx'){echo'selected="selected"';} ?>>横向翻转</option>
<option value="june-move-fy" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
<option value="june-move-fxy" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
<option value="june-move-r2" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r2'){echo'selected="selected"';} ?>>顺时针旋转2度</option>
<option value="june-move-r5" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r5'){echo'selected="selected"';} ?>>顺时针旋转5度</option>
<option value="june-move-r10" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
<option value="june-move-r20" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
<option value="june-move-r30" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
<option value="june-move-r40" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
<option value="june-move-r50" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
<option value="june-move-r60" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
<option value="june-move-r70" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
<option value="june-move-r80" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
<option value="june-move-r90" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
<option value="june-move-r120" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
<option value="june-move-r180" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
<option value="june-move-r270" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
<option value="june-move-r360" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
<option value="june-move-r720" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
<option value="june-move-fr2" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr2'){echo'selected="selected"';} ?>>顺时针旋转2度</option>
<option value="june-move-fr5" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr5'){echo'selected="selected"';} ?>>顺时针旋转5度</option>
<option value="june-move-fr10" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
<option value="june-move-fr20" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
<option value="june-move-fr30" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
<option value="june-move-fr40" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
<option value="june-move-fr50" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
<option value="june-move-fr60" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
<option value="june-move-fr70" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
<option value="june-move-fr80" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
<option value="june-move-fr90" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
<option value="june-move-fr120" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
<option value="june-move-fr180" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
<option value="june-move-fr270" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
<option value="june-move-fr360" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
<option value="june-move-fr720" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-fr720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
<option value="june-move-sf0" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf0'){echo'selected="selected"';} ?>>缩小至消失</option>
<option value="june-move-sf02" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
<option value="june-move-sf04" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
<option value="june-move-sf05" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
<option value="june-move-sf06" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
<option value="june-move-sf08" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
<option value="june-move-sf09" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
<option value="june-move-sf095" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
<option value="june-move-sf098" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
<option value="june-move-sf1" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf1'){echo'selected="selected"';} ?>>还原至原始尺寸</option>
<option value="june-move-sf102" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
<option value="june-move-sf105" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
<option value="june-move-sf110" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
<option value="june-move-sf120" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
<option value="june-move-sf150" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
<option value="june-move-sf180" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
<option value="june-move-sf200" <? if($_POST['childConfig'][$i]['css3MoveMode']=='june-move-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
				</select>
			</li>
            <li class="imgContent contentType">
				<label for="child<?=$i?>i3">变换图片：</label>
				<input id="child<?=$i?>i3" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[<?=$i?>].spicSrc" value="<?=$_POST['childConfig'][$i]['spicSrc']?>" />
			</li>
			<li class="inputAccording-end"></li>
		</ul>
	</div>
		
 <? }} ?>  
        
        <div id="tabs-99">
		<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="480" height="320" src="" type="application/x-shockwave-flash" wmode="opaque">
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
$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
$("#tForm select").fontselectmenu();
$(".linkMode, .contentType").hide();
$(".<?=$_POST['linkMode']?>").show();
$("#fcrd1").off("change.forminput").on("change.forminput", "input[name='linkMode']", function(event) {
	var val = $(this).val();
	$(".linkMode").hide();
	$("."+val).show();
	if(val == "gwlink") {
		$("#fcgwlabel1").html("宝贝地址：");
	} else {
		$("#fcgwlabel1").html("链接地址：");
	}
});

	<?	if(!empty($_POST['childConfig'])){ for($i=0;$i<$zznum;$i++){ $b=$i+2; ?>
		$("#tabs-<?=$b?>").find("li.<?=$_POST['childConfig'][$i]['contentType']?>").show();
		$("#tabs-<?=$b?>").find("li.<?=$_POST['childConfig'][$i]['contentType']?>.zc_linkMode").hide();
		"<?=$_POST['childConfig'][$i]['linkMode']?>" != "" && $("#tabs-<?=$b?>").find("li.<?=$_POST['childConfig'][$i]['contentType']?>.zc_<?=$_POST['childConfig'][$i]['linkMode']?>").show();
		<? }} ?>
	$("#tabs").on("click.itr", ".zc_linkModeDiv input[type='radio']", function(event) {
	var _t = $(this),
	val = _t.val(),
	ul = _t.parent().parent().parent();
	ul.children("li.zc_linkMode").hide();
	ul.children("li.zc_"+val).show();
	var labelName = ul.children("li.zc_"+val).children("label").html();
	if(val == "gwlink") {
		ul.children("li.zc_"+val).children("label").html(labelName.replace(/链接/g, "宝贝"));
	} else {
		ul.children("li.zc_"+val).children("label").html(labelName.replace(/宝贝/g, "链接"));
	}
});

$(".textContentConfig").each(function() {
	var _tc = $(this), tconfig = JSON.parse(_tc.val() || "{}"), _content = _tc.next();
	if(_tc.val() != "" && tconfig.characterMode != "text") {
		_content.addClass("disabled").prop("readonly", true);
	} else {
		_content.removeClass("disabled").prop("readonly", false);
	}
});
$("#tabs").on("change", ".contentTypeDiv input[type='radio']", function(event) {
	var _t = $(this),
	val = _t.val(),
	ul = _t.parent().parent().parent(), linkVal = ul.find(".zc_linkModeDiv input[type='radio']:checked").val();
	ul.children("li.contentType").hide();
	ul.children("li."+val).show();
	ul.children("li.zc_linkMode").hide();
	ul.children("li."+linkVal).hide();
});
var tabs = $("#tabs"), npc = (<?=$zznum?> - 1), ntc = npc;
$("#addNewLayout").off("click.addtab").on("click.addtab", function() {
	var newContent = "", newAttachID = setAttachIDForPhp();
	npc++;ntc++;
	newContent = '<div id="tabs-'+(npc+2)+'">'+
	'	<ul class="setform">'+
	'		<input id="child'+npc+'h1" class="setinput" type="hidden" title="" name="childConfig['+npc+'].attachID" value="'+newAttachID+'" />'+
	'		<li>'+
	'			<label for="child'+npc+'rda">子层'+(npc+1)+'内容设置：</label>'+
	'			<div id="child'+npc+'rda" class="contentTypeDiv">'+
	'				<input type="radio" id="child'+npc+'ra" name="childConfig['+npc+'].contentType" value="imgContent" checked="checked" />'+
	'				<label for="child'+npc+'ra" title="" style="width:98px;">图片</label>'+
	'				<input type="radio" id="child'+npc+'rb" name="childConfig['+npc+'].contentType" value="textContent" />'+
	'				<label for="child'+npc+'rb" title="" style="width:98px;">文字</label>'+
	'				<input type="radio" id="child'+npc+'rc" name="childConfig['+npc+'].contentType" value="customContent" />'+
	'				<label for="child'+npc+'rc" title="" style="width:98px;">自定义内容</label>'+
	'			</div>'+
	'		</li>'+
	'		<li class="imgContent contentType">'+
	'			<label for="child'+npc+'jdhi_src">背景图片：</label>'+
	'			<input id="child'+npc+'jdhi_src" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig['+npc+'].pSrc" value="http://img03.taobaocdn.com/imgextra/i3/39767794/TB2W_U9apXXXXX8XXXXXXXXXXXX_!!39767794.png" />'+
	'			<input id="child'+npc+'autoSize" class="chkBox" type="checkbox" name="childConfig['+npc+'].autoSize" value="yes" checked="checked" />'+
	'			<label for="child'+npc+'autoSize" class="chkLabel">自动高宽</label>'+
			'</li>'+
	'		<li class="textContent contentType" style="clear:both;padding-top:10px;height:auto;display:none;">'+
	'			<label for="child'+npc+'_qssetContent">子层文字：</label>'+
	'			<textarea class="textContentConfig" id="child'+npc+'_qssetConfig" name="childConfig['+npc+'].qssetConfig" style="display:none;"></textarea>'+
	'			<textarea id="child'+npc+'_qssetContent" name="childConfig['+npc+'].qssetContent" value=""></textarea>'+
	'			<label class="btnLabel" data-target="otherset-clicked" data-oths="qsset;child'+npc+'_qssetConfig;child'+npc+'_qssetContent">样式设置</label>'+
	'		</li>'+
	'		<li class="imgContent textContent contentType">'+
	'			<label for="child'+npc+'zcrda">链接类型：</label>'+
	'			<div id="child'+npc+'zcrda" class="zc_linkModeDiv">'+
	'				<input type="radio" id="child'+npc+'zcra" name="childConfig['+npc+'].linkMode" value="ptlink" checked="checked" />'+
	'				<label for="child'+npc+'zcra" title="">普通</label>'+
	'				<input type="radio" id="child'+npc+'zcrc" name="childConfig['+npc+'].linkMode" value="wwlink"/>'+
	'				<label for="child'+npc+'zcrc" title="">旺旺</label>'+
	'				<input type="radio" id="child'+npc+'zcrd" name="childConfig['+npc+'].linkMode" value="mdlink"/>'+
	'				<label for="child'+npc+'zcrd" title="" style="display: none;">锚点</label>'+
	'				<input type="radio" id="child'+npc+'zcgr1" name="childConfig['+npc+'].linkMode" value="gwlink"/>'+
	'				<label for="child'+npc+'zcgr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>'+
	'			</div>'+
	'		</li>'+
	'		<li class="zc_ptlink zc_gwlink zc_linkMode imgContent textContent contentType">'+
	'			<label for="child'+npc+'i2">链接地址：</label>'+
	'			<input id="child'+npc+'i2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig['+npc+'].href" value="" />		'+	
	'			<input id="child'+npc+'hrefMode" class="chkBox" type="checkbox" name="childConfig['+npc+'].hrefMode" value="_blank" checked="checked" />'+
	'			<label for="child'+npc+'hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>'+
	'		</li>'+
	'		<li class="zc_wwlink zc_linkMode imgContent textContent contentType" style="display:none;">'+
	'			<label for="child'+npc+'i3">旺旺ID：</label>'+
	'			<input id="child'+npc+'i3" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="childConfig['+npc+'].wangID" value="" />'+
	'		</li>'+
	'		<li class="zc_wwlink zc_linkMode imgContent textContent contentType" style="display:none;">'+
	'			<label for="child'+npc+'shuntMode">分流方式：</label>'+
	'			<select id="child'+npc+'shuntMode" name="childConfig['+npc+'].shuntMode">'+
	'				<option value="no" selected="selected">不分流</option>'+
	'				<option value="yes">分流</option>'+
	'			</select>'+
	'		</li>'+
	'		<li class="zc_mdlink zc_linkMode imgContent textContent contentType" style="display:none;">'+
	'			<label for="child'+npc+'anchorSelect">点击后跳转至：</label>'+
	'			<select id="child'+npc+'anchorSelect" name="childConfig['+npc+'].anchorSelect">'+
							'					<option value="">请在左侧应用面版中至少添加一个锚点</option>'+
							'			</select>'+
	'		</li>'+
	'		<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;display:none;">'+
	'			<label for="child'+npc+'_ta1">自定义内容：</label>'+
	'			<textarea id="child'+npc+'_ta1" name="childConfig['+npc+'].customContent"></textarea>'+
	'			<label class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig['+npc+'].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="'+newAttachID+'" data-zdyOtherName="childConfig['+npc+'].contentType,customContent">可视化编辑</label>'+
	'		</li>'+
	'		<li class="imgContent contentType">'+
	'			<label>背景图片位置：</label>'+
	'			<span id="child'+npc+'imgBgp_text" class="jDragSelect"><val>居中</val><span class="ui-icon ui-icon-triangle-1-s"></span></span>'+
	'			<input id="child'+npc+'imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig['+npc+'].imgBgp" value="50% 50%" />'+
	'			<label class="btnLabel jDragHandleImg" data-ids="'+newAttachID+',tForm" data-isn="child'+npc+'" data-isa="yes">手动调整<i class="popsd"></i></label>'+
	'		</li>'+
	'		<li class="imgContent contentType">'+
	'			<label for="child'+npc+'sdtzBgColor">背景颜色：</label>'+
	'			<div class="setcolorpanel">'+
	'				<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
	'				<input id="child'+npc+'sdtzBgColor" class="setinputcolor tColorPicker" type="text" name="childConfig['+npc+'].bgColor" value="" />'+
	'			</div>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'rd1">显示方式：</label>'+
	'			<div id="child'+npc+'rd1">'+
	'				<input type="radio" id="child'+npc+'r1" name="childConfig['+npc+'].displayMode" value="" checked="checked"/>'+
	'				<label for="child'+npc+'r1" title="" style="width:98px;">始终显示</label>'+
	'				<input type="radio" id="child'+npc+'r2" name="childConfig['+npc+'].displayMode" value="june-box-fadein"/>'+
	'				<label for="child'+npc+'r2" title="" style="width:98px;">淡入显示</label>'+
	'				<input type="radio" id="child'+npc+'r3" name="childConfig['+npc+'].displayMode" value="june-box-fadeout">'+
	'				<label for="child'+npc+'r3" title="" style="width:98px;">淡出消失</label>'+
	'			</div>'+
	'		</li>'+
	'		<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">默认显示时</span><em></em></li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode_mr_xz">旋转特效：</label>'+
	'			<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'css3Mode_mr_xz" name="childConfig['+npc+'].css3Mode_mr_xz">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-mr-r">顺时针旋转</option>'+
	'				<option value="june-mr-fr">逆时针旋转</option>'+
	'			</select>'+
	'			<select style="width:98px;" id="child'+npc+'css3Mode_mr_xz_num" name="childConfig['+npc+'].css3Mode_mr_xz_num" disabled="disabled">'+
	'				<option value="0" selected="selected">0度</option>'+
	'				<option value="2">2度</option>'+
	'				<option value="5">5度</option>'+
							'				<option value="10">10度</option>'+
							'				<option value="20">20度</option>'+
							'				<option value="30">30度</option>'+
							'				<option value="40">40度</option>'+
							'				<option value="50">50度</option>'+
							'				<option value="60">60度</option>'+
							'				<option value="70">70度</option>'+
							'				<option value="80">80度</option>'+
							'				<option value="90">90度</option>'+
							'				<option value="120">120度</option>'+
	'				<option value="180">180度</option>'+
	'				<option value="270">270度</option>'+
	'				<option value="360">360度</option>'+
	'				<option value="720">720度</option>'+
	'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode_mr_sf">默认缩放特效：</label>'+
	'			<select id="child'+npc+'css3Mode_mr_sf" name="childConfig['+npc+'].css3Mode_mr_sf">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-mr-sf0">缩小至消失</option>'+
	'				<option value="june-mr-sf02">缩小至0.2倍</option>'+
	'				<option value="june-mr-sf04">缩小至0.4倍</option>'+
	'				<option value="june-mr-sf05">缩小至0.5倍</option>'+
	'				<option value="june-mr-sf06">缩小至0.6倍</option>'+
	'				<option value="june-mr-sf08">缩小至0.8倍</option>'+
	'				<option value="june-mr-sf09">缩小至0.9倍</option>'+
	'				<option value="june-mr-sf095">缩小至0.95倍</option>'+
	'				<option value="june-mr-sf098">缩小至0.98倍</option>'+
	'				<option value="june-mr-sf1">原始尺寸</option>'+
	'				<option value="june-mr-sf102">放大至1.02倍</option>'+
	'				<option value="june-mr-sf105">放大至1.05倍</option>'+
	'				<option value="june-mr-sf110">放大至1.1倍</option>'+
	'				<option value="june-mr-sf120">放大至1.2倍</option>'+
	'				<option value="june-mr-sf150">放大至1.5倍</option>'+
	'				<option value="june-mr-sf180">放大至1.8倍</option>'+
	'				<option value="june-mr-sf200">放大至2倍</option>'+
	'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode_mr_fz">默认翻转特效：</label>'+
	'			<select id="child'+npc+'css3Mode_mr_fz" name="childConfig['+npc+'].css3Mode_mr_fz">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-mr-fx">横向翻转</option>'+
	'				<option value="june-mr-fy">纵向翻转</option>'+
	'				<option value="june-mr-fxy">横向纵向同时翻转</option>'+
	'			</select>'+
	'		</li>'+
	'		<li class="inputAccording-end"></li>'+
	'		<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过其父层时</span><em></em></li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Speed">动画速度：</label>'+
	'			<select id="child'+npc+'css3Speed" name="childConfig['+npc+'].css3Speed">'+
	'				<option value="0s" selected="selected">立即显示</option>'+
							'				<option value="0.1s">0.1秒</option>'+
							'				<option value="0.2s">0.2秒</option>'+
							'				<option value="0.3s">0.3秒</option>'+
							'				<option value="0.4s">0.4秒</option>'+
							'				<option value="0.5s">0.5秒</option>'+
							'				<option value="0.6s">0.6秒</option>'+
							'				<option value="0.7s">0.7秒</option>'+
							'				<option value="0.8s">0.8秒</option>'+
							'				<option value="0.9s">0.9秒</option>'+
							'				<option value="1s">1秒</option>'+
							'				<option value="1.1s">1.1秒</option>'+
							'				<option value="1.2s">1.2秒</option>'+
							'				<option value="1.3s">1.3秒</option>'+
							'				<option value="1.4s">1.4秒</option>'+
							'				<option value="1.5s">1.5秒</option>'+
							'				<option value="1.6s">1.6秒</option>'+
							'				<option value="1.7s">1.7秒</option>'+
							'				<option value="1.8s">1.8秒</option>'+
							'				<option value="1.9s">1.9秒</option>'+
							'				<option value="2s">2秒</option>'+
							'				<option value="2.1s">2.1秒</option>'+
							'				<option value="2.2s">2.2秒</option>'+
							'				<option value="2.3s">2.3秒</option>'+
							'				<option value="2.4s">2.4秒</option>'+
							'				<option value="2.5s">2.5秒</option>'+
							'				<option value="2.6s">2.6秒</option>'+
							'				<option value="2.7s">2.7秒</option>'+
							'				<option value="2.8s">2.8秒</option>'+
							'				<option value="2.9s">2.9秒</option>'+
							'				<option value="3s">3秒</option>'+
							'				<option value="3.1s">3.1秒</option>'+
							'				<option value="3.2s">3.2秒</option>'+
							'				<option value="3.3s">3.3秒</option>'+
							'				<option value="3.4s">3.4秒</option>'+
							'				<option value="3.5s">3.5秒</option>'+
							'				<option value="3.6s">3.6秒</option>'+
							'				<option value="3.7s">3.7秒</option>'+
							'				<option value="3.8s">3.8秒</option>'+
							'				<option value="3.9s">3.9秒</option>'+
							'				<option value="4s">4秒</option>'+
							'				<option value="4.1s">4.1秒</option>'+
							'				<option value="4.2s">4.2秒</option>'+
							'				<option value="4.3s">4.3秒</option>'+
							'				<option value="4.4s">4.4秒</option>'+
							'				<option value="4.5s">4.5秒</option>'+
							'				<option value="4.6s">4.6秒</option>'+
							'				<option value="4.7s">4.7秒</option>'+
							'				<option value="4.8s">4.8秒</option>'+
							'				<option value="4.9s">4.9秒</option>'+
							'				<option value="5s">5秒</option>'+
							'				<option value="5.1s">5.1秒</option>'+
							'				<option value="5.2s">5.2秒</option>'+
							'				<option value="5.3s">5.3秒</option>'+
							'				<option value="5.4s">5.4秒</option>'+
							'				<option value="5.5s">5.5秒</option>'+
							'				<option value="5.6s">5.6秒</option>'+
							'				<option value="5.7s">5.7秒</option>'+
							'				<option value="5.8s">5.8秒</option>'+
							'				<option value="5.9s">5.9秒</option>'+
							'				<option value="6s">6秒</option>'+
							'				<option value="6.1s">6.1秒</option>'+
							'				<option value="6.2s">6.2秒</option>'+
							'				<option value="6.3s">6.3秒</option>'+
							'				<option value="6.4s">6.4秒</option>'+
							'				<option value="6.5s">6.5秒</option>'+
							'				<option value="6.6s">6.6秒</option>'+
							'				<option value="6.7s">6.7秒</option>'+
							'				<option value="6.8s">6.8秒</option>'+
							'				<option value="6.9s">6.9秒</option>'+
							'				<option value="7s">7秒</option>'+
													'				<option value="8s">8秒</option>'+
							'				<option value="9s">9秒</option>'+
							'				<option value="10s">10秒</option>'+
							'				<option value="11s">11秒</option>'+
							'				<option value="12s">12秒</option>'+
							'				<option value="13s">13秒</option>'+
							'				<option value="14s">14秒</option>'+
							'				<option value="15s">15秒</option>'+
							'				<option value="16s">16秒</option>'+
							'				<option value="17s">17秒</option>'+
							'				<option value="18s">18秒</option>'+
							'				<option value="19s">19秒</option>'+
							'				<option value="20s">20秒</option>'+
													'				<option value="30s">30秒</option>'+
							'				<option value="40s">40秒</option>'+
							'				<option value="50s">50秒</option>'+
							'				<option value="60s">60秒</option>'+
							'				<option value="70s">70秒</option>'+
							'				<option value="80s">80秒</option>'+
							'				<option value="90s">90秒</option>'+
							'				<option value="100s">100秒</option>'+
							'				<option value="110s">110秒</option>'+
							'				<option value="120s">120秒</option>'+
							'				<option value="130s">130秒</option>'+
							'				<option value="140s">140秒</option>'+
							'				<option value="150s">150秒</option>'+
							'				<option value="160s">160秒</option>'+
							'				<option value="170s">170秒</option>'+
							'				<option value="180s">180秒</option>'+
							'				<option value="190s">190秒</option>'+
							'				<option value="200s">200秒</option>'+
							'				<option value="210s">210秒</option>'+
							'				<option value="220s">220秒</option>'+
							'				<option value="230s">230秒</option>'+
							'				<option value="240s">240秒</option>'+
							'				<option value="250s">250秒</option>'+
							'				<option value="260s">260秒</option>'+
							'				<option value="270s">270秒</option>'+
							'				<option value="280s">280秒</option>'+
							'				<option value="290s">290秒</option>'+
													'				<option value="300s">300秒</option>'+
							'				<option value="320s">320秒</option>'+
							'				<option value="340s">340秒</option>'+
							'				<option value="360s">360秒</option>'+
							'				<option value="380s">380秒</option>'+
							'				<option value="400s">400秒</option>'+
							'				<option value="420s">420秒</option>'+
							'				<option value="440s">440秒</option>'+
							'				<option value="460s">460秒</option>'+
							'				<option value="480s">480秒</option>'+
							'				<option value="500s">500秒</option>'+
							'				<option value="520s">520秒</option>'+
							'				<option value="540s">540秒</option>'+
							'				<option value="560s">560秒</option>'+
							'				<option value="580s">580秒</option>'+
							'				<option value="600s">600秒</option>'+
							'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Delay">动画延迟：</label>'+
	'			<input id="child'+npc+'css3Delay" class="setinput" type="text" title="请输入动画触发的延迟时间，填入数字即可，留空则为不延迟，单位秒" name="childConfig['+npc+'].css3Delay" value="" />'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Bezier">动画特效：</label>'+
	'			<select id="child['+npc+'].css3Bezier" name="childConfig['+npc+'].css3Bezier">'+
	'				<option value="" selected="selected">匀速平滑</option>'+
	'				<option value="bs">由慢到快</option>'+
	'				<option value="bq">由快到慢</option>'+
	'				<option value="bt">跑过回头</option>'+
	'				<option value="bc">起步后撤</option>'+
	'				<option value="bd">中间停顿</option>'+
	'				<option value="bx">弹性抖动</option>'+
	'			</select>'+
	'			<label for="child'+npc+'css3Weight" class="chkLabel" style="margin-top:-20px;width:40px;">程度：</label>'+
	'			<select id="child'+npc+'css3Weight" name="childConfig['+npc+'].css3Weight" style="width:51px;">'+
	'				<option value="1" selected="selected">强</option>'+
	'				<option value="2">中</option>'+
	'				<option value="3">弱</option>'+
	'			</select>'+
	'		</li>'+
	'		<li class="optiongroup">'+
	'			<label for="child'+npc+'css3ModeX">横向移动：</label>'+
	'			<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'css3ModeX" name="childConfig['+npc+'].css3ModeX">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-box-lx">向左移动</option>'+
	'				<option value="june-box-rx">向右移动</option>'+
	'				<option value="june-box-fromleft">从左进入</option>'+
	'				<option value="june-box-fromright">从右进入</option>'+
	'			</select>'+
	'			<select style="width:98px;" id="child'+npc+'css3ModeX_num" name="childConfig['+npc+'].css3ModeX_num" disabled="disabled">'+
	'				<option value="0" selected="selected">0像素</option>'+
	'				<option value="5">5像素</option>'+
	'				<option value="10">10像素</option>'+
	'				<option value="15">15像素</option>'+
							'				<option value="20">20像素</option>'+
							'				<option value="30">30像素</option>'+
							'				<option value="40">40像素</option>'+
							'				<option value="50">50像素</option>'+
							'				<option value="60">60像素</option>'+
							'				<option value="70">70像素</option>'+
							'				<option value="80">80像素</option>'+
							'				<option value="90">90像素</option>'+
							'				<option value="100">100像素</option>'+
							'				<option value="110">110像素</option>'+
							'				<option value="120">120像素</option>'+
							'				<option value="130">130像素</option>'+
							'				<option value="140">140像素</option>'+
							'				<option value="150">150像素</option>'+
							'				<option value="160">160像素</option>'+
							'				<option value="170">170像素</option>'+
							'				<option value="180">180像素</option>'+
							'				<option value="190">190像素</option>'+
							'				<option value="200">200像素</option>'+
							'				<option value="210">210像素</option>'+
							'				<option value="220">220像素</option>'+
							'				<option value="230">230像素</option>'+
							'				<option value="240">240像素</option>'+
							'				<option value="250">250像素</option>'+
							'				<option value="260">260像素</option>'+
							'				<option value="270">270像素</option>'+
							'				<option value="280">280像素</option>'+
							'				<option value="290">290像素</option>'+
							'				<option value="300">300像素</option>'+
							'				<option value="310">310像素</option>'+
							'				<option value="320">320像素</option>'+
							'				<option value="330">330像素</option>'+
							'				<option value="340">340像素</option>'+
							'				<option value="350">350像素</option>'+
							'				<option value="360">360像素</option>'+
							'				<option value="370">370像素</option>'+
							'				<option value="380">380像素</option>'+
							'				<option value="390">390像素</option>'+
							'				<option value="400">400像素</option>'+
							'				<option value="410">410像素</option>'+
							'				<option value="420">420像素</option>'+
							'				<option value="430">430像素</option>'+
							'				<option value="440">440像素</option>'+
							'				<option value="450">450像素</option>'+
							'				<option value="460">460像素</option>'+
							'				<option value="470">470像素</option>'+
							'				<option value="480">480像素</option>'+
							'				<option value="490">490像素</option>'+
							'				<option value="500">500像素</option>'+
							'				<option value="510">510像素</option>'+
							'				<option value="520">520像素</option>'+
							'				<option value="530">530像素</option>'+
							'				<option value="540">540像素</option>'+
							'				<option value="550">550像素</option>'+
							'				<option value="560">560像素</option>'+
							'				<option value="570">570像素</option>'+
							'				<option value="580">580像素</option>'+
							'				<option value="590">590像素</option>'+
							'				<option value="600">600像素</option>'+
							'				<option value="610">610像素</option>'+
							'				<option value="620">620像素</option>'+
													'				<option value="670">670像素</option>'+
							'				<option value="720">720像素</option>'+
							'				<option value="770">770像素</option>'+
							'				<option value="820">820像素</option>'+
							'				<option value="870">870像素</option>'+
							'				<option value="920">920像素</option>'+
							'				<option value="970">970像素</option>'+
							'				<option value="1020">1020像素</option>'+
							'				<option value="1070">1070像素</option>'+
							'				<option value="1120">1120像素</option>'+
							'				<option value="1170">1170像素</option>'+
							'				<option value="1220">1220像素</option>'+
							'				<option value="1270">1270像素</option>'+
							'				<option value="1320">1320像素</option>'+
							'				<option value="1370">1370像素</option>'+
							'				<option value="1420">1420像素</option>'+
							'				<option value="1470">1470像素</option>'+
							'				<option value="1520">1520像素</option>'+
							'				<option value="1570">1570像素</option>'+
							'				<option value="1620">1620像素</option>'+
							'				<option value="1670">1670像素</option>'+
							'				<option value="1720">1720像素</option>'+
							'				<option value="1770">1770像素</option>'+
							'				<option value="1820">1820像素</option>'+
							'				<option value="1870">1870像素</option>'+
							'				<option value="1920">1920像素</option>'+
							'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3ModeY">纵向移动：</label>'+
	'			<select class="cssModeTypeSelect" style="width:98px;"  id="child'+npc+'css3ModeY" name="childConfig['+npc+'].css3ModeY">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-box-uy">向上移动</option>'+
	'				<option value="june-box-dy">向下移动</option>'+
	'				<option value="june-box-fromtop">从上进入</option>'+
	'				<option value="june-box-frombottom">从下进入</option>'+
	'			</select>'+
	'			<select style="width:98px;" id="child'+npc+'css3ModeY_num" name="childConfig['+npc+'].css3ModeY_num" disabled="disabled">'+
	'				<option value="0" selected="selected">0像素</option>'+
	'				<option value="5">5像素</option>'+
	'				<option value="10">10像素</option>'+
	'				<option value="15">15像素</option>'+
							'				<option value="20">20像素</option>'+
							'				<option value="30">30像素</option>'+
							'				<option value="40">40像素</option>'+
							'				<option value="50">50像素</option>'+
							'				<option value="60">60像素</option>'+
							'				<option value="70">70像素</option>'+
							'				<option value="80">80像素</option>'+
							'				<option value="90">90像素</option>'+
							'				<option value="100">100像素</option>'+
							'				<option value="110">110像素</option>'+
							'				<option value="120">120像素</option>'+
							'				<option value="130">130像素</option>'+
							'				<option value="140">140像素</option>'+
							'				<option value="150">150像素</option>'+
							'				<option value="160">160像素</option>'+
							'				<option value="170">170像素</option>'+
							'				<option value="180">180像素</option>'+
							'				<option value="190">190像素</option>'+
							'				<option value="200">200像素</option>'+
							'				<option value="210">210像素</option>'+
							'				<option value="220">220像素</option>'+
							'				<option value="230">230像素</option>'+
							'				<option value="240">240像素</option>'+
							'				<option value="250">250像素</option>'+
							'				<option value="260">260像素</option>'+
							'				<option value="270">270像素</option>'+
							'				<option value="280">280像素</option>'+
							'				<option value="290">290像素</option>'+
							'				<option value="300">300像素</option>'+
							'				<option value="310">310像素</option>'+
							'				<option value="320">320像素</option>'+
							'				<option value="330">330像素</option>'+
							'				<option value="340">340像素</option>'+
							'				<option value="350">350像素</option>'+
							'				<option value="360">360像素</option>'+
							'				<option value="370">370像素</option>'+
							'				<option value="380">380像素</option>'+
							'				<option value="390">390像素</option>'+
							'				<option value="400">400像素</option>'+
							'				<option value="410">410像素</option>'+
							'				<option value="420">420像素</option>'+
							'				<option value="430">430像素</option>'+
							'				<option value="440">440像素</option>'+
							'				<option value="450">450像素</option>'+
							'				<option value="460">460像素</option>'+
							'				<option value="470">470像素</option>'+
							'				<option value="480">480像素</option>'+
							'				<option value="490">490像素</option>'+
							'				<option value="500">500像素</option>'+
							'				<option value="510">510像素</option>'+
							'				<option value="520">520像素</option>'+
							'				<option value="530">530像素</option>'+
							'				<option value="540">540像素</option>'+
							'				<option value="550">550像素</option>'+
							'				<option value="560">560像素</option>'+
							'				<option value="570">570像素</option>'+
							'				<option value="580">580像素</option>'+
							'				<option value="590">590像素</option>'+
							'				<option value="600">600像素</option>'+
							'				<option value="610">610像素</option>'+
							'				<option value="620">620像素</option>'+
													'				<option value="670">670像素</option>'+
							'				<option value="720">720像素</option>'+
							'				<option value="770">770像素</option>'+
							'				<option value="820">820像素</option>'+
							'				<option value="870">870像素</option>'+
							'				<option value="920">920像素</option>'+
							'				<option value="970">970像素</option>'+
							'				<option value="1020">1020像素</option>'+
							'				<option value="1070">1070像素</option>'+
							'				<option value="1120">1120像素</option>'+
							'				<option value="1170">1170像素</option>'+
							'				<option value="1220">1220像素</option>'+
							'				<option value="1270">1270像素</option>'+
							'				<option value="1320">1320像素</option>'+
							'				<option value="1370">1370像素</option>'+
							'				<option value="1420">1420像素</option>'+
							'				<option value="1470">1470像素</option>'+
							'				<option value="1520">1520像素</option>'+
							'				<option value="1570">1570像素</option>'+
							'				<option value="1620">1620像素</option>'+
							'				<option value="1670">1670像素</option>'+
							'				<option value="1720">1720像素</option>'+
							'				<option value="1770">1770像素</option>'+
							'				<option value="1820">1820像素</option>'+
							'				<option value="1870">1870像素</option>'+
							'				<option value="1920">1920像素</option>'+
							'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode_xz">旋转特效：</label>'+
	'			<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'css3Mode_xz" name="childConfig['+npc+'].css3Mode_xz">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-box-r">顺时针旋转</option>'+
	'				<option value="june-box-fr">逆时针旋转</option>'+
	'			</select>'+
	'			<select style="width:98px;" id="child'+npc+'css3Mode_xz_num" name="childConfig['+npc+'].css3Mode_xz_num" disabled="disabled">'+
	'				<option value="0"selected="selected">0度</option>'+
	'				<option value="2">2度</option>'+
	'				<option value="5">5度</option>'+
							'				<option value="10">10度</option>'+
							'				<option value="20">20度</option>'+
							'				<option value="30">30度</option>'+
							'				<option value="40">40度</option>'+
							'				<option value="50">50度</option>'+
							'				<option value="60">60度</option>'+
							'				<option value="70">70度</option>'+
							'				<option value="80">80度</option>'+
							'				<option value="90">90度</option>'+
							'				<option value="120">120度</option>'+
	'				<option value="180">180度</option>'+
	'				<option value="270">270度</option>'+
	'				<option value="360">360度</option>'+
	'				<option value="720">720度</option>'+
	'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode_sf">缩放特效：</label>'+
	'			<select id="child'+npc+'css3Mode_sf" name="childConfig['+npc+'].css3Mode_sf">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-box-sf0">缩小至消失</option>'+
	'				<option value="june-box-sf02">缩小至0.2倍</option>'+
	'				<option value="june-box-sf04">缩小至0.4倍</option>'+
	'				<option value="june-box-sf05">缩小至0.5倍</option>'+
	'				<option value="june-box-sf06">缩小至0.6倍</option>'+
	'				<option value="june-box-sf08">缩小至0.8倍</option>'+
	'				<option value="june-box-sf09">缩小至0.9倍</option>'+
	'				<option value="june-box-sf095">缩小至0.95倍</option>'+
	'				<option value="june-box-sf098">缩小至0.98倍</option>'+
	'				<option value="june-box-sf1">还原至原始尺寸</option>'+
	'				<option value="june-box-sf102">放大至1.02倍</option>'+
	'				<option value="june-box-sf105">放大至1.05倍</option>'+
	'				<option value="june-box-sf110">放大至1.1倍</option>'+
	'				<option value="june-box-sf120">放大至1.2倍</option>'+
	'				<option value="june-box-sf150">放大至1.5倍</option>'+
	'				<option value="june-box-sf180">放大至1.8倍</option>'+
	'				<option value="june-box-sf200">放大至2倍</option>'+
	'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode_fz">翻转特效：</label>'+
	'			<select id="child'+npc+'css3Mode_fz" name="childConfig['+npc+'].css3Mode_fz">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="june-box-fx">横向翻转</option>'+
	'				<option value="june-box-fy">纵向翻转</option>'+
	'				<option value="june-box-fxy">横向纵向同时翻转</option>'+
	'			</select>'+
	'		</li>'+
	'		<li>'+
	'			<label for="child'+npc+'css3Mode">其他特效：</label>'+
	'			<select id="child'+npc+'css3Mode" name="childConfig['+npc+'].css3Mode">'+
	'				<option value="" selected="selected">无效果</option>'+
	'				<option value="effect_w">向右展开</option>'+
	'				<option value="effect_w1">向左展开</option>'+
	'				<option value="effect_h">纵向展开</option>'+
	'				<option value="effect_wh">斜向展开</option>'+
	'			</select>'+
	'		</li>'+
	'		<li class="inputAccording-end"></li>'+
	'		<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过该子层时</span><em></em></li>'+
	'		<li>'+
	'				<label for="child'+npc+'css3MoveModeX">横向移动：</label>'+
	'				<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'css3MoveModeX" name="childConfig['+npc+'].css3MoveModeX">'+
	'					<option value="" selected="selected">无效果</option>'+
	'					<option value="june-move-lx">向左移动</option>'+
	'					<option value="june-move-rx">向右移动</option>'+
	'				</select>'+
	'				<select style="width:98px;" id="child'+npc+'css3MoveModeX_num" name="childConfig['+npc+'].css3MoveModeX_num" disabled="disabled">'+
	'					<option value="0" selected="selected">0像素</option>'+
	'					<option value="5">5像素</option>'+
	'					<option value="10">10像素</option>'+
	'					<option value="15">15像素</option>'+
								'					<option value="20">20像素</option>'+
								'					<option value="30">30像素</option>'+
								'					<option value="40">40像素</option>'+
								'					<option value="50">50像素</option>'+
								'					<option value="60">60像素</option>'+
								'					<option value="70">70像素</option>'+
								'					<option value="80">80像素</option>'+
								'					<option value="90">90像素</option>'+
								'					<option value="100">100像素</option>'+
								'					<option value="110">110像素</option>'+
								'					<option value="120">120像素</option>'+
								'					<option value="130">130像素</option>'+
								'					<option value="140">140像素</option>'+
								'					<option value="150">150像素</option>'+
								'					<option value="160">160像素</option>'+
								'					<option value="170">170像素</option>'+
								'					<option value="180">180像素</option>'+
								'					<option value="190">190像素</option>'+
								'					<option value="200">200像素</option>'+
								'					<option value="210">210像素</option>'+
								'					<option value="220">220像素</option>'+
								'					<option value="230">230像素</option>'+
								'					<option value="240">240像素</option>'+
								'					<option value="250">250像素</option>'+
								'					<option value="260">260像素</option>'+
								'					<option value="270">270像素</option>'+
								'					<option value="280">280像素</option>'+
								'					<option value="290">290像素</option>'+
								'					<option value="300">300像素</option>'+
								'					<option value="310">310像素</option>'+
								'					<option value="320">320像素</option>'+
								'					<option value="330">330像素</option>'+
								'					<option value="340">340像素</option>'+
								'					<option value="350">350像素</option>'+
								'					<option value="360">360像素</option>'+
								'					<option value="370">370像素</option>'+
								'					<option value="380">380像素</option>'+
								'					<option value="390">390像素</option>'+
								'					<option value="400">400像素</option>'+
								'					<option value="410">410像素</option>'+
								'					<option value="420">420像素</option>'+
								'					<option value="430">430像素</option>'+
								'					<option value="440">440像素</option>'+
								'					<option value="450">450像素</option>'+
								'					<option value="460">460像素</option>'+
								'					<option value="470">470像素</option>'+
								'					<option value="480">480像素</option>'+
								'					<option value="490">490像素</option>'+
								'					<option value="500">500像素</option>'+
								'					<option value="510">510像素</option>'+
								'					<option value="520">520像素</option>'+
								'					<option value="530">530像素</option>'+
								'					<option value="540">540像素</option>'+
								'					<option value="550">550像素</option>'+
								'					<option value="560">560像素</option>'+
								'					<option value="570">570像素</option>'+
								'					<option value="580">580像素</option>'+
								'					<option value="590">590像素</option>'+
								'					<option value="600">600像素</option>'+
								'					<option value="610">610像素</option>'+
								'					<option value="620">620像素</option>'+
															'					<option value="670">670像素</option>'+
								'					<option value="720">720像素</option>'+
								'					<option value="770">770像素</option>'+
								'					<option value="820">820像素</option>'+
								'					<option value="870">870像素</option>'+
								'					<option value="920">920像素</option>'+
								'					<option value="970">970像素</option>'+
								'					<option value="1020">1020像素</option>'+
								'					<option value="1070">1070像素</option>'+
								'					<option value="1120">1120像素</option>'+
								'					<option value="1170">1170像素</option>'+
								'					<option value="1220">1220像素</option>'+
								'					<option value="1270">1270像素</option>'+
								'					<option value="1320">1320像素</option>'+
								'					<option value="1370">1370像素</option>'+
								'					<option value="1420">1420像素</option>'+
								'					<option value="1470">1470像素</option>'+
								'					<option value="1520">1520像素</option>'+
								'					<option value="1570">1570像素</option>'+
								'					<option value="1620">1620像素</option>'+
								'					<option value="1670">1670像素</option>'+
								'					<option value="1720">1720像素</option>'+
								'					<option value="1770">1770像素</option>'+
								'					<option value="1820">1820像素</option>'+
								'					<option value="1870">1870像素</option>'+
								'					<option value="1920">1920像素</option>'+
								'				</select>'+
	'			</li>'+
	'			<li>'+
	'				<label for="child'+npc+'css3MoveModeY">纵向移动：</label>'+
	'				<select class="cssModeTypeSelect" style="width:98px;" id="child'+npc+'css3MoveModeY" name="childConfig['+npc+'].css3MoveModeY">'+
	'					<option value="" selected="selected">无效果</option>'+
	'					<option value="june-move-uy">向上移动</option>'+
	'					<option value="june-move-dy">向下移动</option>'+
	'				</select>'+
	'				<select style="width:98px;" id="child'+npc+'css3MoveModeY_num" name="childConfig['+npc+'].css3MoveModeY_num" disabled="disabled">'+
	'					<option value="0"selected="selected">0像素</option>'+
	'					<option value="5">5像素</option>'+
	'					<option value="10">10像素</option>'+
	'					<option value="15">15像素</option>'+
								'					<option value="20">20像素</option>'+
								'					<option value="30">30像素</option>'+
								'					<option value="40">40像素</option>'+
								'					<option value="50">50像素</option>'+
								'					<option value="60">60像素</option>'+
								'					<option value="70">70像素</option>'+
								'					<option value="80">80像素</option>'+
								'					<option value="90">90像素</option>'+
								'					<option value="100">100像素</option>'+
								'					<option value="110">110像素</option>'+
								'					<option value="120">120像素</option>'+
								'					<option value="130">130像素</option>'+
								'					<option value="140">140像素</option>'+
								'					<option value="150">150像素</option>'+
								'					<option value="160">160像素</option>'+
								'					<option value="170">170像素</option>'+
								'					<option value="180">180像素</option>'+
								'					<option value="190">190像素</option>'+
								'					<option value="200">200像素</option>'+
								'					<option value="210">210像素</option>'+
								'					<option value="220">220像素</option>'+
								'					<option value="230">230像素</option>'+
								'					<option value="240">240像素</option>'+
								'					<option value="250">250像素</option>'+
								'					<option value="260">260像素</option>'+
								'					<option value="270">270像素</option>'+
								'					<option value="280">280像素</option>'+
								'					<option value="290">290像素</option>'+
								'					<option value="300">300像素</option>'+
								'					<option value="310">310像素</option>'+
								'					<option value="320">320像素</option>'+
								'					<option value="330">330像素</option>'+
								'					<option value="340">340像素</option>'+
								'					<option value="350">350像素</option>'+
								'					<option value="360">360像素</option>'+
								'					<option value="370">370像素</option>'+
								'					<option value="380">380像素</option>'+
								'					<option value="390">390像素</option>'+
								'					<option value="400">400像素</option>'+
								'					<option value="410">410像素</option>'+
								'					<option value="420">420像素</option>'+
								'					<option value="430">430像素</option>'+
								'					<option value="440">440像素</option>'+
								'					<option value="450">450像素</option>'+
								'					<option value="460">460像素</option>'+
								'					<option value="470">470像素</option>'+
								'					<option value="480">480像素</option>'+
								'					<option value="490">490像素</option>'+
								'					<option value="500">500像素</option>'+
								'					<option value="510">510像素</option>'+
								'					<option value="520">520像素</option>'+
								'					<option value="530">530像素</option>'+
								'					<option value="540">540像素</option>'+
								'					<option value="550">550像素</option>'+
								'					<option value="560">560像素</option>'+
								'					<option value="570">570像素</option>'+
								'					<option value="580">580像素</option>'+
								'					<option value="590">590像素</option>'+
								'					<option value="600">600像素</option>'+
								'					<option value="610">610像素</option>'+
								'					<option value="620">620像素</option>'+
															'					<option value="670">670像素</option>'+
								'					<option value="720">720像素</option>'+
								'					<option value="770">770像素</option>'+
								'					<option value="820">820像素</option>'+
								'					<option value="870">870像素</option>'+
								'					<option value="920">920像素</option>'+
								'					<option value="970">970像素</option>'+
								'					<option value="1020">1020像素</option>'+
								'					<option value="1070">1070像素</option>'+
								'					<option value="1120">1120像素</option>'+
								'					<option value="1170">1170像素</option>'+
								'					<option value="1220">1220像素</option>'+
								'					<option value="1270">1270像素</option>'+
								'					<option value="1320">1320像素</option>'+
								'					<option value="1370">1370像素</option>'+
								'					<option value="1420">1420像素</option>'+
								'					<option value="1470">1470像素</option>'+
								'					<option value="1520">1520像素</option>'+
								'					<option value="1570">1570像素</option>'+
								'					<option value="1620">1620像素</option>'+
								'					<option value="1670">1670像素</option>'+
								'					<option value="1720">1720像素</option>'+
								'					<option value="1770">1770像素</option>'+
								'					<option value="1820">1820像素</option>'+
								'					<option value="1870">1870像素</option>'+
								'					<option value="1920">1920像素</option>'+
								'				</select>'+
	'			</li>'+
	'			<li>'+
	'				<label for="child'+npc+'css3MoveMode">CSS3特效：</label>'+
	'				<select id="child'+npc+'css3MoveMode" name="childConfig['+npc+'].css3MoveMode">'+
	'					<option value="" selected="selected">无效果</option>'+

	'					<option value="june-move-fx">横向翻转</option>'+
	'					<option value="june-move-fy">纵向翻转</option>'+
	'					<option value="june-move-fxy">横向纵向同时翻转</option>'+

	'					<option value="june-move-r2">顺时针旋转2度</option>'+
	'					<option value="june-move-r5">顺时针旋转5度</option>'+
								'					<option value="june-move-r10">顺时针旋转10度</option>'+
								'					<option value="june-move-r20">顺时针旋转20度</option>'+
								'					<option value="june-move-r30">顺时针旋转30度</option>'+
								'					<option value="june-move-r40">顺时针旋转40度</option>'+
								'					<option value="june-move-r50">顺时针旋转50度</option>'+
								'					<option value="june-move-r60">顺时针旋转60度</option>'+
								'					<option value="june-move-r70">顺时针旋转70度</option>'+
								'					<option value="june-move-r80">顺时针旋转80度</option>'+
								'					<option value="june-move-r90">顺时针旋转90度</option>'+
								'					<option value="june-move-r120">顺时针旋转120度</option>'+
	'					<option value="june-move-r180">顺时针旋转180度</option>'+
	'					<option value="june-move-r270">顺时针旋转270度</option>'+
	'					<option value="june-move-r360">顺时针旋转360度</option>'+
	'					<option value="june-move-r720">顺时针旋转720度</option>'+
	'					<option value="june-move-fr2">逆时针旋转2度</option>'+
	'					<option value="june-move-fr5">逆时针旋转5度</option>'+
								'					<option value="june-move-fr10">逆时针旋转10度</option>'+
								'					<option value="june-move-fr20">逆时针旋转20度</option>'+
								'					<option value="june-move-fr30">逆时针旋转30度</option>'+
								'					<option value="june-move-fr40">逆时针旋转40度</option>'+
								'					<option value="june-move-fr50">逆时针旋转50度</option>'+
								'					<option value="june-move-fr60">逆时针旋转60度</option>'+
								'					<option value="june-move-fr70">逆时针旋转70度</option>'+
								'					<option value="june-move-fr80">逆时针旋转80度</option>'+
								'					<option value="june-move-fr90">逆时针旋转90度</option>'+
								'					<option value="june-move-fr120">逆时针旋转120度</option>'+
	'					<option value="june-move-fr180">逆时针旋转180度</option>'+
	'					<option value="june-move-fr270">逆时针旋转270度</option>'+
	'					<option value="june-move-fr360">逆时针旋转360度</option>'+
	'					<option value="june-move-fr720">逆时针旋转720度</option>'+
	'					<option value="june-move-sf0">缩小至消失</option>'+
	'					<option value="june-move-sf02">缩小至0.2倍</option>'+
	'					<option value="june-move-sf04">缩小至0.4倍</option>'+
	'					<option value="june-move-sf05">缩小至0.5倍</option>'+
	'					<option value="june-move-sf06">缩小至0.6倍</option>'+
	'					<option value="june-move-sf08">缩小至0.8倍</option>'+
	'					<option value="june-move-sf09">缩小至0.9倍</option>'+
	'					<option value="june-move-sf095">缩小至0.95倍</option>'+
	'					<option value="june-move-sf098">缩小至0.98倍</option>'+
	'					<option value="june-move-sf1">还原至原始尺寸</option>'+
	'					<option value="june-move-sf102">放大至1.02倍</option>'+
	'					<option value="june-move-sf105">放大至1.05倍</option>'+
	'					<option value="june-move-sf110">放大至1.1倍</option>'+
	'					<option value="june-move-sf120">放大至1.2倍</option>'+
	'					<option value="june-move-sf150">放大至1.5倍</option>'+
	'					<option value="june-move-sf180">放大至1.8倍</option>'+
	'					<option value="june-move-sf200">放大至2倍</option>'+
	'				</select>'+
	'			</li>'+
	'		<li class="imgContent contentType">'+
	'			<label for="child'+npc+'i3">变换图片：</label>'+
	'			<input id="child'+npc+'i3" class="setinput " type="text" title="" name="childConfig['+npc+'].spicSrc" value="" />'+
						'		</li>'+
	'		<li class="inputAccording-end"></li>'+
	'	</ul>'+
	'</div>';
	tabs.tabs( "destroy" );
	$("#addNewLayout").before('<li class="hasdelete"><a href="#tabs-'+(npc+2)+'">子层'+(ntc+1)+'</a><span class="deletetab" data-tabs="tabs-'+(npc+2)+'"><icon>ꕡ</icon></span></li>')
	tabs.find("#tabs-99").before(newContent);
	tabs.tabs({active: ntc+1});
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$("#tabs-"+(npc+2)).find(".inputAccording").nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide(); });
	$("#tForm select").fontselectmenu();
	$(document).spectrum.freshSpan();
});
$("#tabs").off("click.deltab").on("click.deltab", ".deletetab", function(event) {
	var tabsid = $(this).attr("data-tabs");
	var tabsidx = $(this).parent().index();
	D.tConfirm("确定要删除该子层？", function() {
		tabs.tabs( "destroy" );
		$("#"+tabsid).remove();
		ntc--;
		tabs.children("ul").children("li").children("a[href='#"+tabsid+"']").parent().remove();
		tabs.tabs({active: (tabsidx - 1)});
	},function(){
		D.tLoading(false);
	});
});
tabs.find( ".ui-tabs-nav" ).sortable({
	axis: "x",
	items: "li.hasdelete",
	stop: function(event, ui) {
		var _t = ui.item, _prev = _t.prev(), tabsid = _t.children("a").attr("href"), prevtabsid = _prev.children("a").attr("href");
		$(tabsid).insertAfter($(prevtabsid));
		tabs.tabs( "refresh" );
	}
});
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
$(".inputAccording").each(function() {
	var _ia = $(this), checkNeedHide = true;
	_ia.nextUntil(".inputAccording-end").each(function() {
		var _tt = $(this), _select = _tt.find("select:eq(0)"), _input = _tt.find("input:eq(0)");
		if(_select.length > 0 && _select.children("option:selected").index() > 0) {
			checkNeedHide = false;
		}
		if(_input.length > 0 && _input.val() != "") {
			checkNeedHide = false;
		}
	});
	_ia.nextUntil(".inputAccording-end").each(function() {	
		var _tt = $(this)
		if(checkNeedHide) {
			_tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide();
		}
	});
	if(!checkNeedHide) {
		_ia.addClass("opened");
	}
})
$("#tabs").off("click.iac").on("click.iac", ".inputAccording", function(event) {
	var _t = $(this), _curTab = _t.parent().parent();
	if(_t.hasClass("opened")) {
		_t.removeClass("opened");
		_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.is(":hidden") ? _tt.addClass("inputAccording-hided") : _tt.slideUp(200); });
	} else {
		_t.addClass("opened");
		_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.hasClass("inputAccording-hided") ? _tt.removeClass("inputAccording-hided") : _tt.slideDown(200); });
	}
	// setTimeout(function() {
		// $(".form-tabs-content").scrollTop(_t.offset().top - _curTab.offset().top);
	// }, 300);
});
$("#cmtsPhpContent").off("change.cmts").on("change.cmts", ".cssModeTypeSelect", function(event) {
	var _t = $(this), v = _t.val(), id = _t.attr("id"),  _n = $("#"+id+"_num");//_n = _t.nextUntil(":last").next();

	if(v == "june-box-lx" || v == "june-box-rx" || v == "june-box-uy" || v == "june-box-dy" || v == "june-box-r" || v == "june-box-fr" || v == "june-mr-r" || v == "june-mr-fr" || v == "june-lx" || v == "june-rx" || v == "june-uy" || v == "june-dy" || v == "june-move-lx" || v == "june-move-rx" || v == "june-move-uy" || v == "june-move-dy" || v == "june-r" || v == "june-fr" || v == "june-move-r" || v == "june-move-fr") {
		_n.prop("disabled", false).fontselectmenu("refresh");
	} else {
		_n.prop("disabled", true).fontselectmenu("refresh");
	}
});


});
</script>