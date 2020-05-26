<?
$data=$_POST; 
if($data['active']==-1){$active=2;}else{$active=$data['active'];}
?>

<form id="tForm" form-data="jdb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
			</li>	
			<li>
				<label for="i5">背景图片：</label>
				<input id="i5" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
			</li>
			<li>
				<label for="bg_i1">背景颜色：</label>
				<input id="bg_i1" class="setinput tColorPicker" type="text" title="" name="bgColor" value="<?=$data['bgColor']?>" />
			</li>					
            <li style="display:none;">
				<label for="rd1">链接类型：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="linkMode" value="ptlink" <? if($data['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
					<label for="r1" title="普通链接，请在下方输入链接地址">普通</label>
					
					<input type="radio" id="r3" name="linkMode" value="wwlink" <? if($data['linkMode']=='wwlink'){echo'checked="checked"';} ?>>
					<label for="r3" title="阿里旺旺链接，请在下方输入旺旺账号">旺旺</label>
					<input type="radio" id="r4" name="linkMode" value="mdlink"  <? if($data['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
					<label for="r4" title="锚点链接，请在下方选择需要跳转到的锚点">锚点</label>
                    <input type="radio" id="gr1" name="linkMode" value="gwlink" <? if($data['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
					<label for="gr1" title="购物车链接，请直接输入宝贝链接地址" style="width:70px;">购物车</label>
				</div>
			</li>
			<li class="ptlink gwlink linkMode">
				<label id="gwlabel1" for="i2">链接地址：</label>
				<input id="i2" class="setinput" type="text" title="请输入链接地址，如：某个宝贝的页面地址。" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="ptlink linkMode">
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?> >原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?> >新窗口打开</option>
				</select>
			</li>
            <li class="wwlink linkMode">
				<label for="i4">旺旺ID：</label>
				<input id="i4" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" name="wangID" value="<?=$data['wangID']?>" />
			</li>
			<li class="wwlink linkMode">
				<label for="shuntMode">分流方式：</label>
				<select id="shuntMode" name="shuntMode">
					<option value="no" <? if($data['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
					<option value="yes" <? if($data['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
				</select>
			</li>
			<li class="mdlink linkMode">
				<label for="anchorSelect">点击后跳转至：</label>
				<select id="anchorSelect" name="anchorSelect">
					<?
					if($anchorNamx==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					if($anchorSelect){echo'<option value="'.$anchorSelect.'" > 锚点：'.$anchorSelect.'</option>';}
					foreach($anchorName as $item){
                       if($item==$anchorSelect){}else{echo'<option value="'.$item.'" > 锚点：'.$item.'</option>';}					
						}}
					?>
				</select>
			</li>
			<li style="display:none;">
				<label for="tt_i1">提示文字：</label>
				<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" name="tipText" value="<?=$data['tipText']?>" />
			</li>
			<li class="setshousuo">---------------------- 更多设置 效果设置 --------------------</li>
			<li>
				<label for="dtMode">动态精度：</label>
				<select id="dtMode" name="dtMode">
					<option value="1" <? if($data['dtMode']=='1'){echo'selected="selected"';} ?>>普通</option>
					<option value="2" <? if($data['dtMode']=='2'){echo'selected="selected"';} ?>>较灵敏</option>
					<option value="3" <? if($data['dtMode']=='3'){echo'selected="selected"';} ?>>灵敏</option>
					<option value="4" <? if($data['dtMode']=='4'){echo'selected="selected"';} ?>>极灵敏</option>
				</select>
			</li>
			<li>
				<label for="dtRange">动态幅度：</label>
				<select id="dtRange" name="dtRange">
					<option value="1" <? if($data['dtRange']=='1'){echo'selected="selected"';} ?>>小</option>
					<option value="2" <? if($data['dtRange']=='2'){echo'selected="selected"';} ?>>较小</option>
					<option value="3" <? if($data['dtRange']=='3'){echo'selected="selected"';} ?>>中</option>
					<option value="4" <? if($data['dtRange']=='4'){echo'selected="selected"';} ?>>较大</option>
					<option value="5" <? if($data['dtRange']=='5'){echo'selected="selected"';} ?>>大</option>
				</select>
			</li>
			<li>
				<label for="dtShowMode">显示方式：</label>
				<select id="dtShowMode" name="dtShowMode">
					<option value="none" <? if($data['dtShowMode']=='none'){echo'selected="selected"';} ?>>直接显示</option>
					<option value="fade" <? if($data['dtShowMode']=='fade'){echo'selected="selected"';} ?>>淡入淡出</option>
				</select>
			</li>
			<li>
				<label for="dtDirection">动态方向：</label>
				<select id="dtDirection" name="dtDirection">
					<option value="1" <? if($data['dtDirection']=='1'){echo'selected="selected"';} ?>>随鼠标方向</option>
					<option value="2" <? if($data['dtDirection']=='2'){echo'selected="selected"';} ?>>随鼠标相反方向</option>
				</select>
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
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active:<?=$active?>});
	$("#tForm select").selectmenu();
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
	$(".linkMode").hide();
	$(".<?=$data['linkMode']?>").show();
	$("#rd1").children("input[name='linkMode']").click(function() {
		var val = $(this).val();
		$(".linkMode").hide();
		$("."+val).show();
		if(val == "gwlink") {
			$("#gwlabel1").html("宝贝地址：");
		} else {
			$("#gwlabel1").html("链接地址：");
		}
	});
});
</script>