<form id="oths_tForm" form-data="oths_thumbset" method="post" >
<div id="oths_tabs" class="form-tabs-title">
	<ul>
		<li><a href="#oths_tabs-1">默认缩略图圆点</a></li>
		<li><a href="#oths_tabs-2">切换缩略图圆点</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="oths_tabs-1">
				<ul class="setform">
					<li>
						<label id="oths_l2" for="oths_i2">文字内容：</label>
						<input id="oths_i2" class="setinput" type="text" title="请按照对应的文字模式输入文字内容或宝贝链接" name="characterContent" value="<?=$_POST['characterContent']?>" />
					</li>
					<li>
						<label for="sdtzCharacterColor_oths">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor']?>;"></div></div></div>
							<input id="sdtzCharacterColor_oths" class="setinputcolor tColorPicker" type="text" title="" name="characterColor" value="<?=$_POST['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColor_oths">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColor']?>;"></div></div></div>
							<input id="sdtzCharacterBgColor_oths" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColor" value="<?=$_POST['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="oths_i4">文字大小：</label>
						<input id="oths_i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$_POST['characterSize']?>" />
					</li>
					<li>
						<label for="oths_characterFont">文字字体：</label>
						<select id="oths_characterFont" name="characterFont">
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
					<li>
						<label for="oths_characterWeight">文字粗细：</label>
						<select id="oths_characterWeight" name="characterWeight">
							<option value="normal" <? if($_POST['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($_POST['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
				</ul>
			</div>
			<div id="oths_tabs-2">
				<ul class="setform">
					<li>
						<label for="oths_rd1">切换缩略图开关：</label>
						<div id="oths_rd1">
							<input type="radio" id="oths_r1" name="characterHoverMode" value="on" <? if($_POST['characterHoverMode']=='on'){echo'checked="checked"';} ?> />
							<label for="oths_r1">开启</label>
							<input type="radio" id="oths_r2" name="characterHoverMode" value="off" <? if($_POST['characterHoverMode']=='off'){echo'checked="checked"';} ?> />
							<label for="oths_r2">关闭</label>
						</div>
					</li>
					<li>
						<label for="sdtzCharacterColorHover_oths">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColorHover']?>;"></div></div></div>
							<input id="sdtzCharacterColorHover_oths" class="setinputcolor tColorPicker" type="text" title="" name="characterColorHover" value="<?=$_POST['characterColorHover']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColorHover_oths">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColorHover']?>;"></div></div></div>
							<input id="sdtzCharacterBgColorHover_oths" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColorHover" value="<?=$_POST['characterBgColorHover']?>" />
						</div>
					</li>
					<li>
						<label for="oths_i6">文字大小：</label>
						<input id="oths_i6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSizeHover" value="<?=$_POST['characterSizeHover']?>" />
					</li>
					<li>
						<label for="oths_characterFontHover">文字字体：</label>
						<select id="oths_characterFontHover" name="characterFontHover">
							<option value="宋体" <? if($_POST['characterFontHover']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
	<option value="黑体" <? if($_POST['characterFontHover']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
	<option value="微软雅黑" <? if($_POST['characterFontHover']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
	<option value="楷体" <? if($_POST['characterFontHover']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
	<option value="Arial" <? if($_POST['characterFontHover']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
	<option value="Verdana" <? if($_POST['characterFontHover']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
	<option value="Georgia" <? if($_POST['characterFontHover']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
	<option value="Times New Roman" <? if($_POST['characterFontHover']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
	<option value="Trebuchet MS" <? if($_POST['characterFontHover']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
	<option value="Courier" <? if($_POST['characterFontHover']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
	<option value="Impact" <? if($_POST['characterFontHover']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
	<option value="Comic Sans MS" <? if($_POST['characterFontHover']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
	<option value="Tahoma" <? if($_POST['characterFontHover']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
	<option value="Symbol" <? if($_POST['characterFontHover']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
	<option value="Palatino Linotype" <? if($_POST['characterFontHover']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
	<option value="Bookman Old Style" <? if($_POST['characterFontHover']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="oths_characterWeightHover">文字粗细：</label>
						<select id="oths_characterWeightHover" name="characterWeightHover">
							<option value="normal" <? if($_POST['characterWeightHover']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($_POST['characterWeightHover']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#oths_tabs").tabs({active: 0});
	$("#oths_tabs input, #oths_tabs .setform > li > div").buttonset();
	$("#oths_tForm select").fontselectmenu();
	$("#oths_tabs .setform").tooltip({
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