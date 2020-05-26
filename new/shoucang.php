<?
$data=$_POST;
?>
<form id="tForm" form-data="jscb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
            <li style="display:none;">
				<label for="rd2">内容设置：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="scContentType" value="text" <? if($data['scContentType']=='text'){echo'checked="checked"';} ?> />
					<label for="r3" title="">文字</label>
					<input type="radio" id="r4" name="scContentType" value="img" <? if($data['scContentType']=='img'){echo'checked="checked"';} ?> />
					<label for="r4" title="">图片</label>
				</div>
			</li>
            <li class="scContent_text scContentType">
				<label for="i9">文字内容：</label>
				<input id="i9" class="setinput" type="text" title="请输入文字的内容。" name="characterContent" value="<?=$data['characterContent']?>" />
			</li>
			<li class="scContent_text scContentType">
				<label for="i4">文字大小：</label>
				<input id="i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$data['characterSize']?>" />
			</li>
			<li class="scContent_text scContentType">
				<label for="i5">文字颜色：</label>
				<input id="i5" class="setinput tColorPicker" type="text" title="" name="characterColor" value="<?=$data['characterColor']?>" />
			</li>
			<li class="scContent_text scContentType">
				<label for="characterFont">文字字体：</label>
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
            <li class="scContent_text scContentType">
				<label for="characterWeight">文字粗细：</label>
				<select id="characterWeight" name="characterWeight">
					<option value="normal" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li class="scContent_img scContentType">
				<label for="i2">收藏图片：</label>
				<input id="i2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
  
 <?  /*** 
            <li class="scContent_img scContentType" style="display:none;">
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
			<li class="scContent_img scContentType" style="display:none;">
				<label for="bg_i1">背景颜色：</label>
				<input id="bg_i1" class="setinput tColorPicker" type="text" title="" name="bgColor" value="<?=$data['bgColor']?>" />
			</li>
    ***/  ?>
			<li style="display:none;">
				<label for="rd1">收藏类型：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="scType" value="1" <? if($data['scType']=='1'){echo'checked="checked"';} ?> />
					<label for="r1" title="">宝贝</label>
					<input type="radio" id="r2" name="scType" value="2" <? if($data['scType']=='2'){echo'checked="checked"';} ?> />
					<label for="r2" title="">店铺</label>
				</div>
			</li>

			<li class="scItem">
				<label id="l3" for="i3">宝贝地址：</label>
				<input id="i3" class="setinput" type="text" title="请输入需要收藏的宝贝详情页地址" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="scItem1" style="display:none;">
				<label id="ls4" for="is4">店铺地址：</label>
				<input id="is4" class="setinput" type="text" title="请输入需要加入收藏的店铺地址" name="shopHref" value="<?=$data['shopHref']?>" />
			</li>
			<li class="scItem1" style="display:none;">
				<input id="h2" class="setinput" type="hidden" title="" name="shopId" value="<?=$data['shopId']?>" />
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
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("input, .setform > li > div").buttonset();
	$("#tForm select").fontselectmenu();
	"<?=$data['scType']?>" == "1" && ( $(".scItem").show(), $(".scItem1").hide() );
	"<?=$data['scType']?>" == "2" && ( $(".scItem").hide(), $(".scItem1").show() );
	
	$(".scContentType").hide();
	$(".scContent_img").show();
	$("#rd1").on("change", "input", function() {
		var val = $(this).val();
		val == "1" && ( $(".scItem").show(), $(".scItem1").hide() );
		val == "2" && ( $(".scItem").hide(), $(".scItem1").show() );
	});
	$("#rd2").on("change", "input", function() {
		var val = $(this).val();
		$(".scContentType").hide();
		$(".scContent_"+val).show()
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