<?
$data=$_POST;

 //弹出
 $popupConfig = $data['popupConfig'];
 $pSwitch = $popupConfig['pSwitch'];
 $spaceX = $popupConfig['spaceX'];
 $spaceY = $popupConfig['spaceY'];
 $popupHtml = stripslashes( $popupConfig['popupHtml'] );
 $popupPosition = $popupConfig['popupPosition'];
  $popupPosition = stripslashes( $popupPosition );
 if($data['active']==-1){$active=2;}else{$active=$data['active'];}
?>
<form id="tForm" form-data="job" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
		<li><a href="#tabs-3">弹出层设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="i2">默认显示图片：</label>
				<input id="i2" class="setinput" type="text" title="默认显示的图片。请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="<?=$data['autoSize']?>" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
            
            <li style="display:none;">
				<label for="imgBgp">正面图片位置：</label>
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
			<li style="display:none;">
				<label for="bg_i1">背景颜色：</label>
				<input id="bg_i1" class="setinput tColorPicker" type="text" title="" name="bgColor" value="<?=$data['bgColor']?>" />
			</li>
            
			<li>
				<label for="i3">鼠标经过图片：</label>
				<input id="i3" class="setinput" type="text" title="鼠标经过时的变换图片，留空则为无切换效果的单图。请输入淘宝图片空间里的图片地址" name="oppoSrc" value="<?=$data['oppoSrc']?>" />
			</li>
			<li>
				<label for="rd1">链接类型：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="oppoLinkMode" value="ptlink" <? if($data['oppoLinkMode']=='ptlink'){echo'checked="checked"';} ?> />
					<label for="r1" title="普通链接，请在下方输入链接地址" style="width:80px;">普通</label>
					<!--
					<input type="radio" id="r2" name="oppoLinkMode" value="gzlink" <? if($data['oppoLinkMode']=='gzlink'){echo'checked="checked"';} ?> />
					<label for="r2" title="天猫关注链接，请在下方输入品牌ID">关注</label>
					-->
					<input type="radio" id="r3" name="oppoLinkMode" value="wwlink" <? if($data['oppoLinkMode']=='wwlink'){echo'checked="checked"';} ?>>
					<label for="r3" title="阿里旺旺链接，请在下方输入旺旺账号" style="width:80px;">旺旺</label>
					<!--
					<input type="radio" id="r4" name="oppoLinkMode" value="mdlink" <? if($data['oppoLinkMode']=='mdlink'){echo'checked="checked"';} ?> />
					<label for="r4" title="锚点链接，请在下方选择需要跳转到的锚点" style="width:80px;">锚点</label>
					-->
					<input type="radio" id="gr1" name="oppoLinkMode" value="gwlink" <? if($data['oppoLinkMode']=='gwlink'){echo'checked="checked"';} ?> />
					<label for="gr1" title="购物车链接，请直接输入宝贝链接地址" style="width:80px;">购物车</label>
				</div>
			</li>
			
			<li class="ptlink gwlink oppoLinkMode">
				<label id="gwlabel1" for="i4">链接地址：</label>
				<input id="i4" class="setinput" type="text" title="请输入图片的链接地址，如：某个宝贝的页面地址。" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="ptlink oppoLinkMode">
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			
			<li class="gzlink oppoLinkMode">
				<label for="i5">关注ID：</label>
				<input id="i5" class="setinput" type="text" title="请输入需要关注的品牌ID。" name="attentionID" value="<?=$data['attentionID']?>" />
				<a class="pinpaiID june-preview" href="./pinpaiID.html" target="_blank">获取教程</a>
			</li>
			
			<li class="wwlink oppoLinkMode">
				<label for="i4">旺旺ID：</label>
				<input id="i4" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" name="wangID" value="<?=$data['wangID']?>" />
			</li>
			<li class="wwlink oppoLinkMode">
				<label for="shuntMode">分流方式：</label>
				<select id="shuntMode" name="shuntMode">
					<option value="no" <? if($data['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
					<option value="yes" <? if($data['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
				</select>
			</li>
			
			<li class="mdlink oppoLinkMode">
				<label for="anchorSelect">点击后跳转至：</label>
				<select id="anchorSelect" name="anchorSelect">
				<?
					 $anchorNamx = $data['anchorName'];
                     $anchorName = explode(',',$anchorNamx);
					if($anchorNamx==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					if($anchorSelect){echo'<option value="'.$anchorSelect.'" > 锚点：'.$anchorSelect.'</option>';}
					foreach($anchorName as $item){
                       if($item==$anchorSelect){}else{echo'<option value="'.$item.'" > 锚点：'.$item.'</option>';}					
						}}
					?>
				</select>
			</li>
			<li>
				<label for="oppoEffect">图片切换动画：</label>
				<select id="oppoEffect" name="oppoEffect">
					<option value="none" <? if($data['oppoEffect']=='none'){echo'selected="selected"';} ?>>无动画</option>
					<option value="june-box-fadein" <? if($data['oppoEffect']=='june-box-fadein'){echo'selected="selected"';} ?>>淡入淡出</option>
					<option value="uptodown" <? if($data['oppoEffect']=='uptodown'){echo'selected="selected"';} ?>>从上方进入</option>
					<option value="downtoup" <? if($data['oppoEffect']=='downtoup'){echo'selected="selected"';} ?>>从下方进入</option>
					<option value="lefttoright" <? if($data['oppoEffect']=='lefttoright'){echo'selected="selected"';} ?>>从左方进入</option>
					<option value="righttoleft" <? if($data['oppoEffect']=='righttoleft'){echo'selected="selected"';} ?>>从右方进入</option>
					<option value="rotation30" <? if($data['oppoEffect']=='rotation30'){echo'selected="selected"';} ?>>旋转30度</option>
					<option value="rotation60" <? if($data['oppoEffect']=='rotation60'){echo'selected="selected"';} ?>>旋转60度</option>
					<option value="rotation90" <? if($data['oppoEffect']=='rotation90'){echo'selected="selected"';} ?>>旋转90度</option>
					<option value="rotation180" <? if($data['oppoEffect']=='rotation180'){echo'selected="selected"';} ?>>旋转180度</option>
					<option value="rotation270" <? if($data['oppoEffect']=='rotation270'){echo'selected="selected"';} ?>>旋转270度</option>
					<option value="rotation360" <? if($data['oppoEffect']=='rotation360'){echo'selected="selected"';} ?>>旋转360度</option>
					<option value="rotation720" <? if($data['oppoEffect']=='rotation720'){echo'selected="selected"';} ?>>旋转720度</option>
				</select>
			</li>
			<li>
				<label for="oppoSpeed">图片切换速度：</label>
				<select id="oppoSpeed" name="oppoSpeed">
					<option value="trans05s" <? if($data['oppoSpeed']=='trans05s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans1s" <? if($data['oppoSpeed']=='trans1s'){echo'selected="selected"';} ?>>中速</option>
					<option value="trans2s" <? if($data['oppoSpeed']=='trans2s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
            <li style="display:none;">
				<label for="tt_i1">提示文字：</label>
				<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" name="tipText" value="<?=$data['tipText']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
            <li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
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
	<div id="tabs-3">
		<ul class="setform">
			<li>
				<label for="pSwitch">弹出层开关：</label>
				<select id="pSwitch" name="popupConfig.pSwitch">
					<option value="no" <? if($pSwitch=='no'){echo'selected="selected"';} ?>>关闭弹出层</option>
					<option value="yes" <? if($pSwitch=='yes'){echo'selected="selected"';} ?>>鼠标经过弹出层</option>
				</select>
			</li>
            <li>
				<label for="popupPosition">弹出层位置：</label>
				<select id="popupPosition" name="popupConfig.popupPosition">
				 	<optgroup label="对齐点上方">
						<option value="'tl','bl'" <? if($popupPosition=="'tl','bl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
						<option value="'tc','bc'" <? if($popupPosition=="'tc','bc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
						<option value="'tr','br'" <? if($popupPosition=="'tr','br'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
					</optgroup>
					<optgroup label="对齐点右方">
						<option value="'tr','tl'" <? if($popupPosition=="'tr','tl'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
						<option value="'cr','cl'" <? if($popupPosition=="'cr','cl'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
						<option value="'br','bl'" <? if($popupPosition=="'br','bl'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
					</optgroup>
					<optgroup label="对齐点下方">
						<option value="'br','tr'" <? if($popupPosition=="'br','tr'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
						<option value="'bc','tc'" <? if($popupPosition=="'bc','tc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
						<option value="'bl','tl'" <? if($popupPosition=="'bl','tl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
					</optgroup>
					<optgroup label="对齐点左方">
						<option value="'bl','br'" <? if($popupPosition=="'bl','br'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
						<option value="'cl','cr'" <? if($popupPosition=="'cl','cr'"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
						<option value="'tl','tr'" <? if($popupPosition=="'tl','tr'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
					</optgroup>
					<optgroup label="对齐点覆盖">
						<option value="'tl','tl'" <? if($popupPosition=="'tl','tl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
						<option value="'tc','tc'" <? if($popupPosition=="'tc','tc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
						<option value="'tr','tr'" <? if($popupPosition=="'tr','tr'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
                        <option value="'cr','cr'" <? if($popupPosition=="'cr','cr'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
						<option value="'br','br'" <? if($popupPosition=="'br','br'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
						<option value="'bc','bc'" <? if($popupPosition=="'bc','bc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
						<option value="'bl','bl'" <? if($popupPosition=="'bl','bl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
                        <option value="'cl','cl'" <? if($popupPosition=="'cl','cl'"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
						<option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="'cc','cc'"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
					</optgroup>					
				</select>
			</li>

			<li>
				<label for="iii1">水平偏移：</label>
				<input id="iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="popupConfig.spaceX" value="<?=$spaceX?>" />
			</li>
			<li>
				<label for="iii2">垂直偏移：</label>
				<input id="iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="popupConfig.spaceY" value="<?=$spaceY?>" />
			</li>
            <li>
				<label for="popupHtml">自定义内容：</label>
				<textarea id="popupHtml" name="popupConfig.popupHtml"><?=$popupHtml?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="popupConfig.popupHtml" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
            <li>
				<label for="popupCss3Mode">弹出特效：</label>
				<select id="popupCss3Mode" name="popupConfig.css3Mode">
					<option value="" <? if($popupConfig['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
					<option value="effect_w" <? if($popupConfig['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
					<option value="effect_h" <? if($popupConfig['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
					<option value="effect_wh" <? if($popupConfig['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
				</select>
			</li>
			<li class="popupCss3Mode">
				<label for="popupCss3Bezier">弹出动画特效：</label>
				<select id="popupCss3Bezier" name="popupConfig.css3Bezier">
					<option value="" <? if($popupConfig['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs1" <? if($popupConfig['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
					<option value="bs2" <? if($popupConfig['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
					<option value="bs3" <? if($popupConfig['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
					<option value="bq1" <? if($popupConfig['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
					<option value="bq2" <? if($popupConfig['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
					<option value="bq3" <? if($popupConfig['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
				</select>
			</li>
			<li class="popupCss3Mode">
				<label for="popupCss3Speed">弹出动画速度：</label>
				<select id="popupCss3Speed" name="popupConfig.css3Speed">
					<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($popupConfig['css3Speed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					
					?>     
              </select>
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$active?>});
	$("#tForm select").selectmenu();
	$("#oppoEffect").selectmenu("menuWidget");
	$("input, .setform > li > div").buttonset();
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
	$(".oppoLinkMode").hide();
	$(".<?=$data['oppoLinkMode']?>").show();
	$("#rd1").children("input[name='oppoLinkMode']").click(function() {
		var val = $(this).val();
		$(".oppoLinkMode").hide();
		$("."+val).show();
		if(val == "gwlink") {
			$("#gwlabel1").html("宝贝地址：");
		} else {
			$("#gwlabel1").html("链接地址：");
		}
	});
	
});
</script>