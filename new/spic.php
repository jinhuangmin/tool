<?
$data=$_POST;
$appID = $data['appID'];
$pSrc = $data['pSrc'];
$autoSize = $data['autoSize'];
$href = $data['href'];
$hrefMode = $data['hrefMode'];
$displayMode = $data['displayMode'];
$css3Speed = $data['css3Speed'];
$css3Mode = $data['css3Mode'];
$css3MoveMode = $data['css3MoveMode'];
$width = $data['width'];
$height = $data['height'];
$top = $data['top'];
$left = $data['left'];
$active = $data['active'];

$overflowMode = isset($_POST['overflowMode'])?$_POST['overflowMode']:(isset($_POST['childConfig'][0]['overflowMode'])?$_POST['childConfig'][0]['overflowMode']:'hidden');
//子层
$zz = !empty($data['childConfig'])?$data['childConfig']:'';
$zznum=count($zz);
$zong='';
if(!empty($data['childConfig'])){
for($i=1;$i<=$zznum;$i++){
$b=$i+1;$c=$i-1;$zsss=$zz[$c];
$tm='$("#tabs-'.$b.'").find("li.'.$zsss['contentType'].'").show();';
$zong=''.$zong.'
'.$tm.'';
}
}

?>
<form id="tForm" form-data="jspb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">父层设置</a></li>
		<?
		if(!empty($data['childConfig'])){
		for($i=1;$i<=$zznum;$i++){
		$b=$i+1;echo'<li><a href="#tabs-'.$b.'">子层'.$i.'</a></li>';
		}}
		?>
		<li><a href="#tabs-98">样式设置</a></li>
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$appID?>" />
			</li>
			<li>
				<label for="i2">父层背景图片：</label><? $pSrc=isset($_POST['pSrc'])?$_POST['pSrc']:''; ?>
				<input id="i2" class="setinput" type="text" title="" name="pSrc" value="<?=$pSrc?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes"  <? if($autoSize=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
            <li>
				<label for="i3">父层链接地址：</label>
				<input id="i3" class="setinput" type="text" title="" name="href" value="<?=$href?>" />
			</li>
            	<li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($hrefMode=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($hrefMode=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
            <li class="setshousuo">----------------------- 更多设置 -----------------------------------------</li>
			<li>
				<label for="imgBgp">背景图片位置：</label>
				<select id="imgBgp" name="imgBgp">
					<option value="50% 50%" <? if($data['imgBgp']=='50% 50%'){echo'selected="selected"';} ?>>居中</option>
					<option value="50% 0%" <? if($data['imgBgp']=='50% 0%'){echo'selected="selected"';} ?>>中上</option>
					<option value="50% 100%" <? if($data['imgBgp']=='50% 100%'){echo'selected="selected"';} ?>>中下</option>
					<option value="0% 0%" <? if($data['imgBgp']=='0% 0%'){echo'selected="selected"';} ?>>左上</option>
					<option value="0% 50%" <? if($data['imgBgp']=='0% 50%'){echo'selected="selected"';} ?>>左中</option>
					<option value="0% 100%" <? if($data['imgBgp']=='0% 100%'){echo'selected="selected"';} ?>>左下</option>
					<option value="100% 0%" <? if($data['imgBgp']=='100% 0%'){echo'selected="selected"';} ?>>右上</option>
					<option value="100% 50%" <? if($data['imgBgp']=='100% 50%'){echo'selected="selected"';} ?>>右中</option>
					<option value="100% 100%" <? if($data['imgBgp']=='100% 100%'){echo'selected="selected"';} ?>>右下</option>
				</select>
			</li>
			<li>
				<label for="bg_i1">父层背景颜色：</label><? $bgColor=isset($_POST['bgColor'])?$_POST['bgColor']:''; ?>
				<input id="bg_i1" class="setinput tColorPicker" type="text" title="背景图片优先显示" name="bgColor" value="<?=$bgColor?>" />
			</li>
			<li>
				<label for="rd1">父层显示方式：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="displayMode" value="" <? if($displayMode==''){echo'checked="checked"';} ?> />
					<label for="r1" title="" style="width:80px;">始终显示</label>
					<input type="radio" id="r2" name="displayMode" value="june-fadein" <? if($displayMode=='june-fadein'){echo'checked="checked"';} ?> />
					<label for="r2" title="" style="width:80px;">淡入显示</label>
					<input type="radio" id="r3" name="displayMode" value="june-fadeout" <? if($displayMode=='june-fadeout'){echo'checked="checked"';} ?>>
					<label for="r3" title="" style="width:80px;">淡出消失</label>
				</div>
			</li>
			<li>
				<label for="css3Speed">父层动画速度：</label>
				<select id="css3Speed" name="css3Speed">
							<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($data['css3Speed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					
					?>   
				</select>
			</li>
			<li>
				<label for="css3Bezier">父层动画特效：</label>
				<select id="css3Bezier" name="css3Bezier">
					<option value="" <? if($data['css3Bezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs1" <? if($data['css3Bezier']=='bs1'){echo'selected="selected"';} ?>>由慢到快（弱）</option>
					<option value="bs2" <? if($data['css3Bezier']=='bs2'){echo'selected="selected"';} ?>>由慢到快（中）</option>
					<option value="bs3" <? if($data['css3Bezier']=='bs3'){echo'selected="selected"';} ?>>由慢到快（强）</option>
					<option value="bq1" <? if($data['css3Bezier']=='bq1'){echo'selected="selected"';} ?>>由快到慢（弱）</option>
					<option value="bq2" <? if($data['css3Bezier']=='bq2'){echo'selected="selected"';} ?>>由快到慢（中）</option>
					<option value="bq3" <? if($data['css3Bezier']=='bq3'){echo'selected="selected"';} ?>>由快到慢（强）</option>
					<option value="bt1" <? if($data['css3Bezier']=='bt1'){echo'selected="selected"';} ?>>跑过回头（加速）</option>
					<option value="bt2" <? if($data['css3Bezier']=='bt2'){echo'selected="selected"';} ?>>跑过回头（减速）</option>
					<option value="bt10" <? if($data['css3Bezier']=='bt10'){echo'selected="selected"';} ?>>跑过回头（匀速）</option>
					<option value="bt3" <? if($data['css3Bezier']=='bt3'){echo'selected="selected"';} ?>>起步后撤（加速）</option>
					<option value="bt4" <? if($data['css3Bezier']=='bt4'){echo'selected="selected"';} ?>>起步后撤（减速）</option>
					<option value="bt11" <? if($data['css3Bezier']=='bt11'){echo'selected="selected"';} ?>>起步后撤（匀速）</option>
					<option value="bt5" <? if($data['css3Bezier']=='bt5'){echo'selected="selected"';} ?>>中间停顿（加速）</option>
					<option value="bt6" <? if($data['css3Bezier']=='bt6'){echo'selected="selected"';} ?>>中间停顿（减速）</option>
					<option value="bt12" <? if($data['css3Bezier']=='bt12'){echo'selected="selected"';} ?>>中间停顿（匀速）</option>
					<option value="bt7" <? if($data['css3Bezier']=='bt7'){echo'selected="selected"';} ?>>弹性抖动（1）</option>
					<option value="bt8" <? if($data['css3Bezier']=='bt8'){echo'selected="selected"';} ?>>弹性抖动（2）</option>
					<option value="bt9" <? if($data['css3Bezier']=='bt9'){echo'selected="selected"';} ?>>弹性抖动（3）</option>
				</select>
			</li>
			<li>
				<label for="css3Mode">鼠标经过模块：</label>
				<select id="css3Mode" name="css3Mode">
				  <option value="" <? if($css3Mode==''){echo'selected="selected"';} ?>>无效果</option>
				<?
				$arraytype= array('june-rx','june-lx','june-dy','june-uy');
				$arraynum= array(10,20,30,40,50,80,120,200);
				foreach($arraytype as $type){
				   if($type=='june-rx'){$text='向右移动';}
				   else if($type=='june-lx'){$text='向左移动';}
				   else if($type=='june-dy'){$text='向下移动';}
				   else if($type=='june-uy'){$text='向上移动';}
				   foreach($arraynum as $num){
				   $sx=''.$type.''.$num.'';
				   if($css3Mode==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$num.'像素</option>
				   ';
				   }
				 }
				?>
					<option value="june-r360" <? if($css3Mode=='june-r360'){echo'selected="selected"';} ?>>旋转一周</option>
					<option value="june-r720" <? if($css3Mode=='june-r720'){echo'selected="selected"';} ?>>旋转两周</option>
				</select>
			</li>
			<li>
				<label for="css3MoveMode">鼠标经过该层：</label>
				<select id="css3MoveMode" name="css3MoveMode">
					<option value="" <? if($css3MoveMode==''){echo'selected="selected"';} ?>>无效果</option>
					<?
				$arraytype= array('june-move-rx','june-move-lx','june-move-dy','june-move-uy');
				$arraynum= array(10,20,30,40,50,80,120,200);
				foreach($arraytype as $type){
				 if($type=='june-move-rx'){$text='向右移动';}
				   else if($type=='june-move-lx'){$text='向左移动';}
				   else if($type=='june-move-dy'){$text='向下移动';}
				   else if($type=='june-move-uy'){$text='向上移动';}
				   foreach($arraynum as $num){
				   $sx=''.$type.''.$num.'';
				   if($css3MoveMode==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$num.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
            <li>
				<label for="rd_o1">子层超出父层时：</label>
				<select id="overflowMode" name="overflowMode">
					<option value="hidden" selected="selected" <? if($overflowMode=='hidden'){echo'selected="selected"';} ?>>超出父层部分始终隐藏</option>
					<option value="visibleX" <? if($overflowMode=='visibleX'){echo'selected="selected"';} ?>>鼠标经过父层显示超出部分</option>
					<option value="visible" <? if($overflowMode=='visible'){echo'selected="selected"';} ?>>超出父层部分始终显示</option>
				</select>
			</li>
		</ul>
	</div>
    <?  $t=1; if(!empty($data['childConfig'])){ foreach($zz as $key=>$item){ $b=$key;$n=$key+1; $t=$t+1;  ?>
		<div id="tabs-<?=$t?>">
		<ul class="setform">
			<input id="child<?=$b?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$b?>].attachID" value="<?=$item['attachID']?>" />
             <li>
				<label for="child<?=$b?>rda">子层内容设置：</label>
				<div id="child<?=$b?>rda" class="contentTypeDiv">
					<input type="radio" id="child<?=$b?>ra" name="childConfig[<?=$b?>].contentType" value="imgContent" <? if($item['contentType']=='imgContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$b?>ra" title="" style="width:70px;">图片</label>
					<input type="radio" id="child<?=$b?>rb" name="childConfig[<?=$b?>].contentType" value="textContent" <? if($item['contentType']=='textContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$b?>rb" title="" style="width:70px;">文字</label>
					<input type="radio" id="child<?=$b?>rc" name="childConfig[<?=$b?>].contentType" value="customContent" <? if($item['contentType']=='customContent'){echo'checked="checked"';} ?> />
					<label for="child<?=$b?>rc" title="" style="width:100px;">自定义内容</label>
				</div>
			</li>             
            <li class="imgContent contentType">
				<label for="child<?=$b?>i1">背景图片：</label>
				<input id="child<?=$b?>i1" class="setinput" type="text" title="" name="childConfig[<?=$b?>].pSrc" value="<?=$item['pSrc']?>" />
				<input id="child<?=$b?>autoSize" class="chkBox" type="checkbox" name="childConfig[<?=$b?>].autoSize" value="yes" <? if($item['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child<?=$b?>autoSize" class="chkLabel">自动高宽</label>
			</li>
  			<li class="imgContent contentType">
				<label for="child<?=$b?>_imgBgp">背景图片位置：</label>
				<select id="child<?=$b?>_imgBgp" name="childConfig[<?=$b?>].imgBgp">
					<option value="50% 50%" <? if($item['imgBgp']=='50% 50%'){echo'selected="selected"';} ?>>居中</option>
					<option value="50% 0%" <? if($item['imgBgp']=='50% 0%'){echo'selected="selected"';} ?>>中上</option>
					<option value="50% 100%" <? if($item['imgBgp']=='50% 100%'){echo'selected="selected"';} ?>>中下</option>
					<option value="0% 0%" <? if($item['imgBgp']=='0% 0%'){echo'selected="selected"';} ?>>左上</option>
					<option value="0% 50%" <? if($item['imgBgp']=='0% 50%'){echo'selected="selected"';} ?>>左中</option>
					<option value="0% 100%" <? if($item['imgBgp']=='0% 100%'){echo'selected="selected"';} ?>>左下</option>
					<option value="100% 0%" <? if($item['imgBgp']=='100% 0%'){echo'selected="selected"';} ?>>右上</option>
					<option value="100% 50%" <? if($item['imgBgp']=='100% 50%'){echo'selected="selected"';} ?>>右中</option>
					<option value="100% 100%" <? if($item['imgBgp']=='100% 100%'){echo'selected="selected"';} ?>>右下</option>
				</select>
			</li>
			<li class="imgContent contentType">
				<label for="child<?=$b?>bg_i1">背景颜色：</label><? $itembgColor=isset($item['bgColor'])?$item['bgColor']:''; ?>
				<input id="child<?=$b?>bg_i1" class="setinput tColorPicker" type="text"  title="背景图片优先显示" name="childConfig[<?=$b?>].bgColor" value="<?=$itembgColor?>" />
			</li>
			<li class="textContent contentType">
				<label for="child<?=$b?>i3">文字设置：</label><? $qssetConfig=isset($item['qssetConfig'])?$item['qssetConfig']:''; ?>
				<textarea id="child<?=$b?>_qssetConfig" name="childConfig[<?=$b?>].qssetConfig" style="display:none;"><?=$qssetConfig?></textarea>
				<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="qsset;child<?=$b?>_qssetConfig;<?=$b?>">文字设置</button>
			</li>
			<li class="imgContent textContent contentType">
				<label for="child<?=$b?>i2">链接地址：</label>
				<input id="child<?=$b?>i2" class="setinput" type="text" title="" name="childConfig[<?=$b?>].href" value="<?=$item['href']?>" />
			</li>

            <li class="imgContent textContent contentType">
				<label for="child<?=$b?>hrefMode">打开方式：</label>
				<select id="child<?=$b?>hrefMode" name="childConfig[<?=$b?>].hrefMode">
					<option value="_self" <? if($item['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($item['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
            <li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;">
				<label for="child<?=$b?>_ta1">自定义内容：</label>
				<textarea id="child<?=$b?>_ta1" name="childConfig[<?=$b?>].customContent"><?=stripslashes($item['customContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$b?>].customContent" data-zdyAppID="<?=$appID?>" data-zdyAttachID="<?=$item['attachID']?>" data-zdyOtherName="childConfig[<?=$b?>].contentType,customContent">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>

			<li>
				<label for="child<?=$b?>css3Speed">动画速度：</label>
				<select id="child<?=$b?>css3Speed" name="childConfig[<?=$b?>].css3Speed">
					<?  $c=0;
				for($i=0.1;$i<=7;$c++){ $sx=''.$i.'s';
				if($item['css3Speed']==$sx){$select='selected="selected"';}else{$select='';}
				echo'<option value="'.$i.'s" '.$select.'>'.$i.'秒</option>
				';
				$i=$i+0.1;
				}
				?>
				</select>
			</li>
            <li>
				<label for="child<?=$b?>css3Bezier">动画特效：</label>
				<select id="child<?=$b?>css3Bezier" name="childConfig[<?=$b?>].css3Bezier">
					<option value="" <? if($item['css3Bezier']==''){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs1" <? if($item['css3Bezier']=='bs1'){echo'selected="selected"';} ?>>由慢到快（弱）</option>
					<option value="bs2" <? if($item['css3Bezier']=='bs2'){echo'selected="selected"';} ?>>由慢到快（中）</option>
					<option value="bs3" <? if($item['css3Bezier']=='bs3'){echo'selected="selected"';} ?>>由慢到快（强）</option>
					<option value="bq1" <? if($item['css3Bezier']=='bq1'){echo'selected="selected"';} ?>>由快到慢（弱）</option>
					<option value="bq2" <? if($item['css3Bezier']=='bq2'){echo'selected="selected"';} ?>>由快到慢（中）</option>
					<option value="bq3" <? if($item['css3Bezier']=='bq3'){echo'selected="selected"';} ?>>由快到慢（强）</option>
					<option value="bt1" <? if($item['css3Bezier']=='bt1'){echo'selected="selected"';} ?>>跑过回头（加速）</option>
					<option value="bt2" <? if($item['css3Bezier']=='bt2'){echo'selected="selected"';} ?>>跑过回头（减速）</option>
					<option value="bt10" <? if($item['css3Bezier']=='bt10'){echo'selected="selected"';} ?>>跑过回头（匀速）</option>
					<option value="bt3" <? if($item['css3Bezier']=='bt3'){echo'selected="selected"';} ?>>起步后撤（加速）</option>
					<option value="bt4" <? if($item['css3Bezier']=='bt4'){echo'selected="selected"';} ?>>起步后撤（减速）</option>
					<option value="bt11" <? if($item['css3Bezier']=='bt11'){echo'selected="selected"';} ?>>起步后撤（匀速）</option>
					<option value="bt5" <? if($item['css3Bezier']=='bt5'){echo'selected="selected"';} ?>>中间停顿（加速）</option>
					<option value="bt6" <? if($item['css3Bezier']=='bt6'){echo'selected="selected"';} ?>>中间停顿（减速）</option>
					<option value="bt12" <? if($item['css3Bezier']=='bt12'){echo'selected="selected"';} ?>>中间停顿（匀速）</option>
					<option value="bt7" <? if($item['css3Bezier']=='bt7'){echo'selected="selected"';} ?>>弹性抖动（1）</option>
					<option value="bt8" <? if($item['css3Bezier']=='bt8'){echo'selected="selected"';} ?>>弹性抖动（2）</option>
					<option value="bt9" <? if($item['css3Bezier']=='bt9'){echo'selected="selected"';} ?>>弹性抖动（3）</option>
				</select>
			</li>
            <li class="setshousuo">---------------------- 更多设置 鼠标经过其父层时 --------------------</li>
			<li>
				<label for="child<?=$b?>rd1">显示方式：</label>
				<div id="child<?=$b?>rd1">
					<input type="radio" id="child<?=$b?>r1" name="childConfig[<?=$b?>].displayMode" value=""  <? if($item['displayMode']==''){echo'checked="checked"';} ?>/>
					<label for="child<?=$b?>r1" title="" style="width:80px;">始终显示</label>
					<input type="radio" id="child<?=$b?>r2" name="childConfig[<?=$b?>].displayMode" value="june-box-fadein"  <? if($item['displayMode']=='june-box-fadein'){echo'checked="checked"';} ?> />
					<label for="child<?=$b?>r2" title="" style="width:80px;">淡入显示</label>
					<input type="radio" id="child<?=$b?>r3" name="childConfig[<?=$b?>].displayMode" value="june-box-fadeout"  <? if($item['displayMode']=='june-box-fadeout'){echo'checked="checked"';} ?>>
					<label for="child<?=$b?>r3" title="" style="width:80px;">淡出消失</label>
				</div>
			</li>            
			<li>
				<label for="child<?=$b?>css3ModeX">横向移动：</label>
				<select id="child<?=$b?>css3ModeX" name="childConfig[<?=$key?>].css3ModeX">
					<option value="" selected="selected" <? if($item['css3ModeX']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fromleft" <? if($item['css3ModeX']=='june-box-fromleft'){echo'selected="selected"';} ?>>从左进入</option>
					<option value="june-box-fromleftout" <? if($item['css3ModeX']=='june-box-fromleftout'){echo'selected="selected"';} ?>>从左出去</option>
					<option value="june-box-fromright" <? if($item['css3ModeX']=='june-box-fromright'){echo'selected="selected"';} ?>>从右进入</option>
					<option value="june-box-fromrightout" <? if($item['css3ModeX']=='june-box-fromrightout'){echo'selected="selected"';} ?>>从右出去</option>
					<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['css3ModeX']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li>
				<label for="child<?=$b?>css3ModeY">纵向移动：</label>
				<select id="child<?=$b?>css3ModeY" name="childConfig[<?=$b?>].css3ModeY">
				<option value="" <? if($item['css3ModeY']==''){echo'selected="selected"';} ?>>无效果</option>
				<option value="june-box-fromtop" <? if($item['css3ModeY']=='june-box-fromtop'){echo'selected="selected"';} ?>>从上进入</option>
				<option value="june-box-fromtopout" <? if($item['css3ModeY']=='june-box-fromtopout'){echo'selected="selected"';} ?>>从上出去</option>
				<option value="june-box-frombottom" <? if($item['css3ModeY']=='june-box-frombottom'){echo'selected="selected"';} ?>>从下进入</option>
				<option value="june-box-frombottomout" <? if($item['css3ModeY']=='june-box-frombottomout'){echo'selected="selected"';} ?>>从下出去</option>
				<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['css3ModeY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li>
				<label for="child<?=$b?>css3Mode">CSS3特效：</label>
				<select id="child<?=$b?>css3Mode" name="childConfig[<?=$b?>].css3Mode">
					<option value="" <? if($item['css3Mode']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($item['css3Mode']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($item['css3Mode']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($item['css3Mode']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-box-sf" <? if($item['css3Mode']=='june-box-sf'){echo'selected="selected"';} ?>>放大显示</option>
					<option value="june-box-sf0" <? if($item['css3Mode']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小消失</option>

					<option value="june-box-sfr360" <? if($item['css3Mode']=='june-box-sfr360'){echo'selected="selected"';} ?>>顺时针旋转一周放大显示</option>
					<option value="june-box-sfr720" <? if($item['css3Mode']=='june-box-sfr720'){echo'selected="selected"';} ?>>顺时针旋转二周放大显示</option>
					<option value="june-box-sffr360" <? if($item['css3Mode']=='june-box-sffr360'){echo'selected="selected"';} ?>>逆时针旋转一周放大显示</option>
					<option value="june-box-sffr720" <? if($item['css3Mode']=='june-box-sffr720'){echo'selected="selected"';} ?>>逆时针旋转二周放大显示</option>
					
					<option value="june-box-sf0r360" <? if($item['css3Mode']=='june-box-sf0r360'){echo'selected="selected"';} ?>>顺时针旋转一周缩小消失</option>
					<option value="june-box-sf0r720" <? if($item['css3Mode']=='june-box-sf0r720'){echo'selected="selected"';} ?>>顺时针旋转二周缩小消失</option>
					<option value="june-box-sf0fr360" <? if($item['css3Mode']=='june-box-sf0fr360'){echo'selected="selected"';} ?>>逆时针旋转一周缩小消失</option>
					<option value="june-box-sf0fr720" <? if($item['css3Mode']=='june-box-sf0fr720'){echo'selected="selected"';} ?>>逆时针旋转二周缩小消失</option>
					
					<option value="june-box-fxr360" <? if($item['css3Mode']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
					<option value="june-box-fxr720" <? if($item['css3Mode']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
					<option value="june-box-fxfr360" <? if($item['css3Mode']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
					<option value="june-box-fxfr720" <? if($item['css3Mode']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
					
					<option value="june-box-fyr360" <? if($item['css3Mode']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
					<option value="june-box-fyr720" <? if($item['css3Mode']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
					<option value="june-box-fyfr360" <? if($item['css3Mode']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
					<option value="june-box-fyfr720" <? if($item['css3Mode']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
					
					<option value="june-box-sf02" <? if($item['css3Mode']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($item['css3Mode']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($item['css3Mode']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($item['css3Mode']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($item['css3Mode']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($item['css3Mode']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($item['css3Mode']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($item['css3Mode']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf102" <? if($item['css3Mode']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($item['css3Mode']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($item['css3Mode']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($item['css3Mode']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($item['css3Mode']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($item['css3Mode']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($item['css3Mode']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
					<option value="june-box-r10" <? if($item['css3Mode']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
					<option value="june-box-r20" <? if($item['css3Mode']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
					<option value="june-box-r30" <? if($item['css3Mode']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
					<option value="june-box-r40" <? if($item['css3Mode']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
					<option value="june-box-r50" <? if($item['css3Mode']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
					<option value="june-box-r60" <? if($item['css3Mode']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
					<option value="june-box-r70" <? if($item['css3Mode']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
					<option value="june-box-r80" <? if($item['css3Mode']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
					<option value="june-box-r90" <? if($item['css3Mode']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
					<option value="june-box-r120" <? if($item['css3Mode']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-box-r180" <? if($item['css3Mode']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-box-r270" <? if($item['css3Mode']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-box-r360" <? if($item['css3Mode']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-box-r720" <? if($item['css3Mode']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
					<option value="june-box-fr10" <? if($item['css3Mode']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
					<option value="june-box-fr20" <? if($item['css3Mode']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
					<option value="june-box-fr30" <? if($item['css3Mode']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
					<option value="june-box-fr40" <? if($item['css3Mode']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
					<option value="june-box-fr50" <? if($item['css3Mode']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
					<option value="june-box-fr60" <? if($item['css3Mode']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
					<option value="june-box-fr70" <? if($item['css3Mode']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
					<option value="june-box-fr80" <? if($item['css3Mode']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
					<option value="june-box-fr90" <? if($item['css3Mode']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
					<option value="june-box-fr120" <? if($item['css3Mode']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-box-fr180" <? if($item['css3Mode']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-box-fr270" <? if($item['css3Mode']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-box-fr360" <? if($item['css3Mode']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-box-fr720" <? if($item['css3Mode']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
				</select>
			</li>
            <li class="setshousuo">---------------------- 更多设置 鼠标经过该子层时 --------------------</li>
			<li>
				<label for="child<?=$b?>css3MoveMode">发生位移：</label>
				<select id="child<?=$b?>css3MoveMode" name="childConfig[<?=$b?>].css3MoveMode">
					<option value=""  <? if($item['css3MoveMode']==''){echo'selected="selected"';} ?>>无效果</option>
				<?
				$arraytype= array('june-move-lx','june-move-rx','june-move-dy','june-move-uy');
				$arraynum= array(10,20,30,40,50,80,120,200);
				foreach($arraytype as $type){
				 if($type=='june-move-lx'){$text='向左移动';}
				   else if($type=='june-move-rx'){$text='向右移动';}
				   else if($type=='june-move-dy'){$text='向下移动';}
				   else if($type=='june-move-uy'){$text='向上移动';}
				   foreach($arraynum as $num){
				   $sx=''.$type.''.$num.'';
				   if($item['css3MoveMode']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$num.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="imgContent contentType">
				<label for="child<?=$b?>i3">变换图片：</label>
				<input id="child<?=$b?>i3" class="setinput" type="text" title="" name="childConfig[<?=$b?>].spicSrc" value="<?=$item['spicSrc']?>" />
			</li>
		</ul>
	</div>
    <?  }} ?>
	<div id="tabs-98">
		<ul class="setform">
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>          
            <li>
				<label for="ii1">应用宽度：</label>
				<input id="ii1" class="setinput" type="text" title="自动生成，无需填写" name="width" value="<?=$width?>" />
			</li>
			<li>
				<label for="ii2">应用高度：</label>
				<input id="ii2" class="setinput" type="text" title="自动生成，无需填写" name="height" value="<?=$height?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="自动生成，无需填写" name="top" value="<?=$top?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="自动生成，无需填写" name="left" value="<?=$left?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32654291.swf#tb_videoid=6210999" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32654291.swf#tb_videoid=6210999" target="_blank">新窗口全屏观看</a>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$data['active']?>});
	$("input, .setform > li > div").buttonset();
	$("#tForm select").fontselectmenu();
	$(".contentType").hide();
		<?=$zong?>
		$("#tabs").on("click", ".contentTypeDiv input[type='radio']", function(event) {
		var _t = $(this),
		val = _t.val();
		ul = _t.parent().parent().parent();
		ul.children("li.contentType").hide();
		ul.children("li."+val).show();
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
});
</script>
<script type="text/javascript">
   $(document).ready(function()
   {
    $("#mymenu ul li").next("ul").hide();
    $("#mymenu ul li").click(function()
    {
     $(this).next("ul").toggle();
    });
   });
</script> 