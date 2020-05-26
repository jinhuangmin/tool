<?
$data=$_POST;
$childConfig = $data['childConfig'];
 $anchorNamx = $data['anchorName'];
 $anchorName = explode(',',$anchorNamx);
 if($data['active']==-1){$active=1;}else{$active=$data['active'];}

?>
<form id="tForm" form-data="jbob" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
            <?
         foreach($childConfig as $t=>$num){ 
				$y=$t+2;
			echo'<li><a href="#tabs-'.$y.'">'.$num['appName'].'</a></li>';
				}
			?>    
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="i2">默认显示大图：</label>
				<input id="i2" class="setinput" type="text" title="默认显示的图片。请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="<?=$data['autoSize']?>" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="i3">鼠标经过大图：</label>
				<input id="i3" class="setinput" type="text" title="鼠标经过时的变换图片，留空则为无切换效果的单图。请输入淘宝图片空间里的图片地址" name="oppoSrc" value="<?=$data['oppoSrc']?>" />
			</li>
			<li style="display:none;">
				<label for="imgBgp">图片位置：</label>
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
				<label for="oppoEffect">淡入淡出开关：</label>
				<select id="oppoEffect" name="oppoEffect">
					<option value="none" <? if($data['oppoEffect']=='none'){echo'selected="selected"';} ?>>关</option>
					<option value="june-box-fadein" <? if($data['oppoEffect']=='june-box-fadein'){echo'selected="selected"';} ?>>开</option>
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
            <li class="setshousuo">----------------------- 更多设置 -----------------------------------------</li>
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
		
     <?  foreach($childConfig as $i=>$item){ $dbt=$i+2; ?>   
        
        <div id="tabs-<?=$dbt?>">
		<ul class="setform">
			<input id="child<?=$i?>h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$item['attachID']?>" />
			<li>
				<label for="child<?=$i?>rda">链接类型：</label>
				<div id="child<?=$i?>rda" class="linkModeDiv">
					<input type="radio" id="child<?=$i?>ra" name="childConfig[<?=$i?>].linkMode" value="ptlink" <? if($item['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>ra" title="" style="width:80px;">普通</label>
					<!--
					<input type="radio" id="child<?=$i?>rb" name="childConfig[<?=$i?>].linkMode" value="gzlink" <? if($item['linkMode']=='gzlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>rb" title="">关注</label>
					-->
					<input type="radio" id="child<?=$i?>rc" name="childConfig[<?=$i?>].linkMode" value="wwlink" <? if($item['linkMode']=='wwlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>rc" title="" style="width:80px;">旺旺</label>
					<!--
					<input type="radio" id="child<?=$i?>rd" name="childConfig[<?=$i?>].linkMode" value="mdlink" <? if($item['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>rd" title="">锚点</label>
					-->
					<input type="radio" id="child<?=$i?>gr1" name="childConfig[<?=$i?>].linkMode" value="gwlink" <? if($item['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
					<label for="child<?=$i?>gr1" title="购物车链接，请直接输入宝贝链接地址" style="width:80px;">购物车</label>
				</div>
			</li>
			<li class="ptlink gwlink linkMode">
				<label for="child<?=$i?>i1">链接地址：</label>
				<input id="child<?=$i?>i1" class="setinput" type="text" title="请输入图片的链接地址，如：某个宝贝的页面地址。" name="childConfig[<?=$i?>].href" value="<?=$item['href']?>" />
			</li>
			<li class="ptlink linkMode">
				<label for="child<?=$i?>hrefMode">打开方式：</label>
				<select id="child<?=$i?>hrefMode" name="childConfig[<?=$i?>].hrefMode">
					<option value="_self" <? if($item['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($item['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			
			<li class="gzlink linkMode">
				<label for="child<?=$i?>i2">关注ID：</label>
				<input id="child<?=$i?>i2" class="setinput" type="text" title="请输入需要关注的品牌ID。" name="childConfig[<?=$i?>].attentionID" value="<?=$item['attentionID']?>" />
				<a class="pinpaiID june-preview" href="./pinpaiID.html" target="_blank">获取教程</a>
			</li>
			
			<li class="wwlink linkMode">
				<label for="child<?=$i?>i3">旺旺ID：</label>
				<input id="child<?=$i?>i3" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" name="childConfig[<?=$i?>].wangID" value="<?=$item['wangID']?>" />
			</li>
			<li class="wwlink linkMode">
				<label for="child<?=$i?>shuntMode">分流方式：</label>
				<select id="child<?=$i?>shuntMode" name="childConfig[<?=$i?>].shuntMode">
					<option value="no" <? if($item['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
					<option value="yes" <? if($item['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
				</select>
			</li>
            
            <li class="mdlink linkMode">
				<label for="child<?=$i?>anchorSelect">点击后跳转至：</label>
				<select id="child<?=$i?>anchorSelect" name="childConfig[<?=$i?>].anchorSelect">
				<?
					$anchorSelect=$item['anchorSelect'];
					if($anchorNamx==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					if($anchorSelect){echo'<option value="'.$anchorSelect.'" > 锚点：'.$anchorSelect.'</option>';}
					foreach($anchorName as $itemx){
                       if($itemx==$anchorSelect){}else{echo'<option value="'.$itemx.'" > 锚点：'.$itemx.'</option>';}					
						}}
					?>
				</select>
			</li>
            <li style="display:none;">
				<label for="child<?=$i?>tt_i1">提示文字：</label>
				<input id="child<?=$i?>tt_i1" class="setinput" type="text" title="鼠标经过切片时的提示文字" name="childConfig[<?=$i?>].tipText" value="<?=$item['tipText']?>" />
			</li>
		<div id="mymenu">
           <ul class="setform"><li class="setshousuo">---------------------- 弹出层设置 展开/收起 (懒人无视) --------------------</li><ul>
           <ul class="setform setform2">  
          	<li>
				<label for="child<?=$i?>pSwitch">弹出层开关：</label>
				<select id="child<?=$i?>pSwitch" name="childConfig[<?=$i?>].popupConfig.pSwitch">
                <?  
				$ttcc=$item['popupConfig'];
				 $xPosition = stripslashes( $ttcc['popupPosition'] );
				?>
					<option value="no" <? if($ttcc['pSwitch']=='no'){echo'selected="selected"';} ?>>关闭弹出层</option>
					<option value="yes" <? if($ttcc['pSwitch']=='yes'){echo'selected="selected"';} ?>>鼠标经过弹出层</option>
				</select>
			</li>
			<li>
				<label for="child<?=$i?>popupPosition">弹出层位置：</label>
				<select id="child<?=$i?>popupPosition" name="childConfig[<?=$i?>].popupConfig.popupPosition">
					<optgroup label="对齐点上方">
						<option value="'tl','bl'" <? if($xPosition=="'tl','bl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
						<option value="'tc','bc'" <? if($xPosition=="'tc','bc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
						<option value="'tr','br'" <? if($xPosition=="'tr','br'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
					</optgroup>
					<optgroup label="对齐点右方">
						<option value="'tr','tl'" <? if($xPosition=="'tr','tl'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
						<option value="'cr','cl'" <? if($xPosition=="'cr','cl'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
						<option value="'br','bl'" <? if($xPosition=="'br','bl'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
					</optgroup>
					<optgroup label="对齐点下方">
						<option value="'br','tr'" <? if($xPosition=="'br','tr'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
						<option value="'bc','tc'" <? if($xPosition=="'bc','tc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
						<option value="'bl','tl'" <? if($xPosition=="'bl','tl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
					</optgroup>
					<optgroup label="对齐点左方">
						<option value="'bl','br'" <? if($xPosition=="'bl','br'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
						<option value="'cl','cr'" <? if($xPosition=="'cl','cr'"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
						<option value="'tl','tr'" <? if($xPosition=="'tl','tr'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
					</optgroup>
					<optgroup label="对齐点覆盖">
						<option value="'tl','tl'" <? if($xPosition=="'tl','tl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
						<option value="'tc','tc'" <? if($xPosition=="'tc','tc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
						<option value="'tr','tr'" <? if($xPosition=="'tr','tr'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
                        <option value="'cr','cr'" <? if($xPosition=="'cr','cr'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
						<option value="'br','br'" <? if($xPosition=="'br','br'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
						<option value="'bc','bc'" <? if($xPosition=="'bc','bc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
						<option value="'bl','bl'" <? if($xPosition=="'bl','bl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
                        <option value="'cl','cl'" <? if($xPosition=="'cl','cl'"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
						<option value="'cc','cc'" style="color:#f00" <? if($xPosition=="'cc','cc'"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
					</optgroup>										
				</select>
			</li>
			<li>
				<label for="child<?=$i?>iii1">水平偏移：</label>
				<input id="child<?=$i?>iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="childConfig[<?=$i?>].popupConfig.spaceX" value="<?=$ttcc['spaceX']?>" />
			</li>
			<li>
				<label for="child<?=$i?>iii2">垂直偏移：</label>
				<input id="child<?=$i?>iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="childConfig[<?=$i?>].popupConfig.spaceY" value="<?=$ttcc['spaceY']?>" />
			</li>
			<li>
            <?   $poHtml = stripslashes( $ttcc['popupHtml'] ); ?>
				<label for="child<?=$i?>popupHtml">自定义内容：</label>
				<textarea id="child<?=$i?>popupHtml" name="childConfig[<?=$i?>].popupConfig.popupHtml"><?=$poHtml?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].popupConfig.popupHtml" data-zdyAppID="<?=$data['appID']?>" data-zdyAttachID="<?=$item['attachID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>            
		</ul>
		</div>
	</div>

    <? } ?>
    
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435866.swf#tb_videoid=6184112" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435866.swf#tb_videoid=6184112" target="_blank">新窗口全屏观看</a>
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
	$(".linkMode").hide();
		<? foreach($childConfig as $x=>$list){ $p=$x+2; ?>
         $("#tabs-<?=$p?>").find("li.<?=$list['linkMode']?>").show();
			<?	}	?>  
		$("#tabs").on("click", ".linkModeDiv input[type='radio']", function(event) {
		var _t = $(this),
		val = _t.val();
		ul = _t.parent().parent().parent();
		ul.children("li.linkMode").hide();
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
	
	//tt
	var allowTime = 'false-x';
	$(".popupCss3Ul").each(function(i, e) {
		$("#child"+i+"popupCss3Mode").val() == "" && $("#tabs").find(".child"+i+"popupCss3Mode").hide();
		$("#child"+i+"popupCss3Mode").selectmenu({
			change: function() {
				var val = $(this).val();
				if(val == "") {
					$("#tabs").find(".child"+i+"popupCss3Mode").hide();
				} else {
					if(allowTime == "false") {
						alert("请先登录后再使用此功能！");
						$(this).val("").selectmenu( "refresh" );
						event.preventDefault();
						event.stopPropagation();
						return false;
					}
					$("#tabs").find(".child"+i+"popupCss3Mode").show();
				}
			}
		});
	});
});
</script>
<script type="text/javascript">
   $(document).ready(function()
   {
    $("#mymenu ul li").click(function()
    {
     $(this).next("ul").toggle();
    });
   });
</script> 