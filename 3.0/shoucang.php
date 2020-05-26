<form id="tForm" form-data="jscb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform" style="padding-top: 20px;">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
			</li>
			<li>
				<label for="rd2">内容设置：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="scContentType" value="text" <? if($_POST['scContentType']=='text'){echo'checked="checked"';} ?> />
					<label for="r3" title="">文字</label>
					<input type="radio" id="r4" name="scContentType" value="img" <? if($_POST['scContentType']=='img'){echo'checked="checked"';} ?> />
					<label for="r4" title="">图片</label>
				</div>
			</li>
			<li class="scContent_text scContentType">
				<label for="i9">文字内容：</label>
				<input id="i9" class="setinput" type="text" title="请输入文字的内容。" junezx_vali_str="true" name="characterContent" value="<?=$_POST['characterContent']?>" />
			</li>
			<li class="scContent_text scContentType">
				<label for="i4">文字大小：</label>
				<input id="i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$_POST['characterSize']?>" />
			</li>
			<li class="scContent_text scContentType">
				<label for="sdtzCharacterColor">文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor']?>;"></div></div></div>
					<input id="sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="characterColor" value="<?=$_POST['characterColor']?>" />
				</div>
			</li>
			<li class="scContent_text scContentType">
				<label for="sdtzCharacterBgColor">文字背景颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColor']?>;"></div></div></div>
					<input id="sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColor" value="<?=$_POST['characterBgColor']?>" />
				</div>
			</li>
			<li class="scContent_text scContentType">
				<label for="characterFont">文字字体：</label>
				<select id="characterFont" name="characterFont">
					<option value="宋体" <? if($_POST['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($_POST['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($_POST['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li class="scContent_text scContentType">
				<label for="characterWeight">文字粗细：</label>
				<select id="characterWeight" name="characterWeight">
					<option value="normal" <? if($_POST['characterWeight']=='bold'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($_POST['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li class="scContent_text scContentType">
				<label for="characterStyle">文字斜体：</label>
				<select id="characterStyle" name="characterStyle">
					<option value="normal" <? if($_POST['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="italic" <? if($_POST['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
				</select>
			</li>
			<li class="scContent_img scContentType">
				<label for="jdhi_src">收藏背景图片：</label>
				<input id="jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
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
            
			<li style="display: none;">
				<label>背景图片对齐位置：</label>
				<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
				<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
				<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
			</li>
			<li style="display: none;">
				<label for="sdtzBgColor">背景颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
					<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
				</div>
			</li>
			<li>
				<label for="rd1">收藏类型：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="scType" value="1" <? if($_POST['scType']=='1'){echo'checked="checked"';} ?> />
					<label for="r1" title="">宝贝</label>
					<input type="radio" id="r2" name="scType" value="2" <? if($_POST['scType']=='2'){echo'checked="checked"';} ?> />
					<label for="r2" title="">店铺</label>
				</div>
			</li>
			<li class="scItem">
				<label id="l3" for="i3">宝贝详情页地址：</label>
				<input id="i3" class="setinput" type="text" title="请输入需要收藏的宝贝详情页地址" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
			</li>
			<li class="scItem1" style="display:none;">
				<label id="ls4" for="is4">店铺地址：</label>
				<input id="is4" class="setinput" type="text" title="请输入需要加入收藏的店铺地址" junezx_vali_url="true" name="shopHref" value="<?=$_POST['shopHref']?>" />
				<label for="ls4" class="chkLabel" style="text-align: left;line-height: 20px;color:#f00;">必须填写</label>
			</li>
			<li class="scItem1" style="display:none;">
				<input id="h2" class="setinput" type="hidden" title="" name="shopId" value="<?=$_POST['shopId']?>" />
			</li>
			<li style="display: none;">
				<label for="tt_i1">提示文字：</label>
				<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform" style="padding-top: 20px;">
			<li>
				<label for="ii1">应用宽度：</label>
				<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$_POST['width']?>" />
			</li>
			<li>
				<label for="ii2">应用高度：</label>
				<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$_POST['height']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$_POST['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$_POST['left']?>" />
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$("#tForm select").fontselectmenu();
	"<?=$_POST['scType']?>" == "1" && ( $(".scItem").show(), $(".scItem1").hide() );
	"<?=$_POST['scType']?>" == "2" && ( $(".scItem").hide(), $(".scItem1").show() );
	
	$(".scContentType").hide();
	$(".scContent_<?=$_POST['scContentType']?>").show();
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