<?
$data=$_POST;
?>
<form id="tForm" form-data="jwwb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="i2">旺旺群号：</label>
				<input id="i2" class="setinput" type="text" title="请输入旺旺群号。" name="wangID" value="<?=$data['wangID']?>" />
			</li>
			<li>
				<label for="wangMode">旺旺群风格：</label>
				<select id="wangMode" name="wangMode">
					<option value="1"  <? if($data['wangMode']=='1'){echo'selected="selected"';} ?>>风格一</option>
					<option value="2"  <? if($data['wangMode']=='2'){echo'selected="selected"';} ?>>风格二</option>
					<option value="3"  <? if($data['wangMode']=='3'){echo'selected="selected"';} ?>>风格三</option>
					<option value="4"  <? if($data['wangMode']=='4'){echo'selected="selected"';} ?>>风格四</option>
				</select>
			</li>
			<li>
				<label for="i3">旺旺群昵称：</label>
				<input id="i3" class="setinput" type="text" title="请输入旺旺的昵称，昵称是显示在跳动图片旁边的文字信息。" name="wangNickName" value="<?=$data['wangNickName']?>" />
			</li>

		</ul>
        
                   <div id="mymenu">
           <ul class="setform"><li class="setshousuo">---------------------- 更多设置 展开/收起 (懒人无视) --------------------</li><ul>
           <ul class="setform setform2"> 
            
            <li>
				<label for="i4">昵称文字颜色：</label>
				<input id="i4" class="setinput tColorPicker" type="text" title="请输入昵称的文字颜色" name="characterColor" value="<?=$data['characterColor']?>" />
			</li>
			<li>
				<label for="i8">昵称文字大小：</label>
				<input id="i8" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$data['characterSize']?>" />
			</li>
			<li>
				<label for="i9">昵称背景颜色：</label>
				<input id="i9" class="setinput tColorPicker" type="text" title="" name="characterBgColor" value="<?=$data['characterBgColor']?>" />
			</li>            
            <li>
				<label for="characterFont">昵称字体：</label>
				<select id="characterFont" name="characterFont">
					<option value="宋体" <? if($data['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
            <li>
				<label for="characterWeight">昵称文字粗细：</label>
				<select id="characterWeight" name="characterWeight">
					<option value="normal" <? if($data['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>

			<li>
				<label for="characterStyle">昵称文字斜体：</label>
				<select id="characterStyle" name="characterStyle">
					<option value="normal" <? if($data['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="italic" <? if($data['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
				</select>
			</li>
			<li>
				<label for="tt_i1">提示文字：</label>
				<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" name="tipText" value="<?=$data['tipText']?>" />
			</li>
            
            	</ul>
	</div>
            
        
	</div>
	<div id="tabs-2">
		<ul class="setform">
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