<?
$data=$_POST;

$popupConfig = $data['popupConfig'];
$popupHtml = stripslashes( $popupConfig['popupHtml'] );
?>
<form id="tForm" form-data="zxuanzhuan" method="post" >
<div id="tabs" class="zmhtml">
	<ul >
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
        <div style=" height:10px;"></div>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
			</li>			
			<li class="ptlink linkMode">
				<label for="contentType">内容类型：</label>
				<select id="contentType" name="contentType">
					<option value="imgContent" <? if($data['contentType']=='imgContent'){echo'selected="selected"';} ?> >图片</option>
				    <option value="customContent" <? if($data['contentType']=='customContent'){echo'selected="selected"';} ?> >自定义</option>
				</select>
			</li>			
			<li  class="imgContent contentType">
				<label for="i5">图片地址：</label>
				<input id="i5" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes"  <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>            
            <li class="imgContent contentType">
				<label id="gwlabel1" for="i2">链接地址：</label>
				<input id="i2" class="setinput" type="text" title="请输入链接地址，如：某个宝贝的页面地址。" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="imgContent contentType">
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
						<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?> >原窗口打开</option>
					   <option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?> >新窗口打开</option>
				</select>
			</li>
			
			<li class="customContent contentType">
				<label for="c_i2">自定义内容：</label>
				<textarea id="c_i2" name="customContent"><?=stripslashes($data['customContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
			</li>
			
			<li class="">
				<label for="dir">智能特效：</label>
				<select id="eff" name="eff">
					<option value="womu-zzactive" <? if($data['eff']=='womu-zzactive'){echo'selected="selected"';} ?> >顺时针旋转</option>
				    <option value="womu-fzactive" <? if($data['eff']=='womu-fzactive'){echo'selected="selected"';} ?>  >逆时针旋转</option>
					<option value="june-sf0910" <? if($data['eff']=='june-sf0910'){echo'selected="selected"';} ?>  >缩小0.9→放大1.0倍</option>
					<option value="june-sf0911" <? if($data['eff']=='june-sf0911'){echo'selected="selected"';} ?>  >缩小0.9→放大1.1倍</option>
					<option value="june-sf0912" <? if($data['eff']=='june-sf0912'){echo'selected="selected"';} ?>  >缩小0.9→放大1.2倍</option>
					<option value="june-bd05" <? if($data['eff']=='june-bd05'){echo'selected="selected"';} ?>  >左右摆动5度</option>
					<option value="june-bd15" <? if($data['eff']=='june-bd15'){echo'selected="selected"';} ?>  >左右摆动15度</option>
					<option value="june-bd30" <? if($data['eff']=='june-bd30'){echo'selected="selected"';} ?>  >左右摆动30度</option>
					<option value="june-fzlr" <? if($data['eff']=='june-fzlr'){echo'selected="selected"';} ?>  >左右反转</option>
					<option value="june-fztb" <? if($data['eff']=='june-fztb'){echo'selected="selected"';} ?>  >上下反转</option>
					<option value="june-tm0510" <? if($data['eff']=='june-tm0510'){echo'selected="selected"';} ?>  >闪闪</option>
					<option value="june-fy01" <? if($data['eff']=='june-fy01'){echo'selected="selected"';} ?>  >方变圆</option>
				</select>
			</li>
		   	<li>
			    <label for="ztime">动画速度：</label>
				<input id="ztime" class="setinput " type="text" title="输入数字" name="ztime" value="<?=$data['ztime']?>" />秒
			</li>
			<li >
				<label for="hnum">循环次数：</label>
				<select id="hnum" name="hnum">
				        <option value="0" <? if($data['hnum']=='0'){echo'selected="selected"';} ?> >循环显示</option>
						<option value="1" <? if($data['hnum']=='1'){echo'selected="selected"';} ?>  >仅执行一次</option>
				</select>
			</li>
			<li class="">
				<label for="of">超出是否显示：</label>
				<select id="of" name="of">
					<option value="hidden" <? if($data['of']=='hidden'){echo'selected="selected"';} ?> >隐藏</option>
					<option value="visible" <? if($data['of']=='visible'){echo'selected="selected"';} ?> >显示</option>
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
	$("#tabs").tabs();
	$("input").buttonset();
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
	
	
	$(".contentType").hide();
	if ($("#contentType").val() == "customContent") {
		$(".customContent").show();
	}else{
		$(".imgContent").show();
	}
	// "imgContent"=="imgContent" && $(".imgContent").show();
	// "imgContent"=="customContent" && $(".customContent").show();
	
	
	
	

	$("#contentType").selectmenu({
		change: function() {
	
			var val = $(this).val();
			if(val == "imgContent") {
			
				 $(".imgContent").show();
				  $(".customContent").hide();
			} 
			else
			{
			$(".customContent").show();
			 $(".imgContent").hide();
			
			}
		
		}
	});
		
	
});
</script>



