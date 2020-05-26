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
<form id="allwzset_tForm" form-data="jcb" method="post" >
<div id="allwzset_tabs" class="form-tabs-title">
	<ul>
		<li><a href="#allwzset_tabs-1">默认样式</a></li>
		<li><a href="#allwzset_tabs-2">鼠标经过变换</a></li>
	</ul>
	<div class="formlayout">
	<div class="form-tabs-content">
	<div id="allwzset_tabs-1">
		<ul class="setform" style="width:100%;">
<li>
	<label for="allwzsetcharacterMode">文本内容模式：</label>
	<select id="allwzsetcharacterMode" name="characterMode">
        <option value="text" <? if($_POST['characterMode']=='text'){echo'selected="selected"';} ?>>自定义内容</option>
		<option value="price" <? if($_POST['characterMode']=='price'){echo'selected="selected"';} ?>>宝贝原价</option>
		<option value="_price" <? if($_POST['characterMode']=='_price'){echo'selected="selected"';} ?>>宝贝现价</option>
		<!--<option value="sale" <? if($_POST['characterMode']=='sale'){echo'selected="selected"';} ?>>宝贝销量</option>-->
		<option value="title" <? if($_POST['characterMode']=='title'){echo'selected="selected"';} ?>>宝贝标题</option>
	</select>
</li>
<li class="characterModeNoText">
	<label for="characterItemContent">宝贝链接：</label>
	<input id="characterItemContent" class="setinput" type="text" title="请填入宝贝链接"junezx_vali_url="true" name="characterItemContent" value="<?=$_POST['characterItemContent']?>" />
</li>
<div class="wzlabel" style="width: 150px;float: left;text-align: right;font-size:14px;height:36px;line-height:36px;vertical-align:middle;text-align: right;padding-right:10px;color: #808080;">
	<label id="textviewpanellabeltext">样式及内容：</label>
</div>
<div class="textviewpanel" style="z-index:39999;float:left;margin-bottom: 10px;">
	<div class="textviewbar">
		<div class="textviewinput">
			<label for="textviewfont" style="margin-left:3px;">字体</label>
			<select name="characterFont" id="textviewfont" style="width:90px;height:26px;">  
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
			<label for="textviewcolor">文字色</label>
			<div class="setcolorpanel">
				<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor']?>;"></div></div></div>
				<input name="characterColor" class="tColorPicker" id="textviewcolor" type="text" title="文字颜色" value="<?=$_POST['characterColor']?>" />
			</div>
			<label for="textviewsize" style="margin-left:3px;">大小</label>
			<input name="characterSize" id="textviewsize" type="text" title="文字大小，单位:像素(px)" value="<?=$_POST['characterSize']?>" style="text-indent:10px;" />
			<label for="textviewbgcolor">背景色</label>
			<div class="setcolorpanel">
				<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColor']?>;"></div></div></div>
				<input name="characterBgColor" class="tColorPicker" id="textviewbgcolor" type="text" title="文字背景色" value="<?=$_POST['characterBgColor']?>" />
			</div>
			<label for="textviewlineheight" style="margin-left:3px;">行高</label>
			<input name="characterLineHeight" id="textviewlineheight" type="text" title="文字每行的高度，单位:像素(px)" value="<?=$_POST['characterLineHeight']?>" style="width:48px;" />
			<label for="textviewspace">字距</label>
			<input name="characterLetterSpacing" id="textviewspace" type="text" title="每个文字之间的间距，单位:像素(px)" value="<?=$_POST['characterLetterSpacing']?>" style="width:48px;" />
			<label for="textviewindent">缩进</label>
			<input name="characterIndent" id="textviewindent" type="text" title="文字起点距离边框的宽度" value="<?=$_POST['characterIndent']?>" style="width:48px;" />
		</div>
		<div class="textviewbtnbox">
			<span class="textviewbtn"><icon>ꕅ</icon><input name="characterWeight" type="hidden" id="textviewweight" value="<?=$_POST['characterWeight']?>" /></span>
			<span class="textviewbtn"><icon>ꕆ</icon><input name="characterStyle" type="hidden" id="textviewstyle" value="<?=$_POST['characterStyle']?>" /></span>
			<span class="textviewbtn"><icon>ꔣ</icon><input name="characterLineOver" type="hidden" id="textviewlineover" value="<?=$_POST['characterLineOver']?>" /></span>
			<span class="textviewbtn"><icon>ꕇ</icon><input name="characterLineThrough" type="hidden" id="textviewlinethrough" value="<?=$_POST['characterLineThrough']?>" /></span>
			<span class="textviewbtn"><icon>ꕈ</icon><input name="characterLineUnder" type="hidden" id="textviewlineunder" value="<?=$_POST['characterLineUnder']?>" /></span>
			<span class="spaceline"></span>
			<span class="textviewbtn textviewraido"><icon>ꕉ</icon><input name="characterAlign" type="radio" id="textviewalign1" value="left" <? if($_POST['characterAlign']=='left'){echo'checked="checked"';} ?> /></span>
			<span class="textviewbtn textviewraido active"><icon>ꕐ</icon><input name="characterAlign" type="radio" id="textviewalign2" value="center" <? if($_POST['characterAlign']=='center'){echo'checked="checked"';} ?> /></span>
			<span class="textviewbtn textviewraido"><icon>ꕑ</icon><input name="characterAlign" type="radio" id="textviewalign3" value="right" <? if($_POST['characterAlign']=='right'){echo'checked="checked"';} ?> /></span>
		</div>
	</div>
	<textarea name="characterContent" wrap="off" id="textviewcontent" data-newload="yes"><?=$_POST['characterContent']?></textarea>
	<input name="characterLineMulti" id="textviewmulti" type="hidden" value="<?=$_POST['characterLineMulti']?>" />
	<input name="characterWidthMode" id="characterWidthMode" class="chkBox" type="checkbox" value="auto" <? if($_POST['characterWidthMode']=='auto'){echo'checked="checked"';} ?> />
	<label for="characterWidthMode" class="chkLabel" style="width:64px;color:#666;">自动宽度</label>
</div>
<li style="clear:both;">
	<label for="jdhi_src">文字背景图片：</label>
	<input id="jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="characterBgSrc" value="<?=$_POST['characterBgSrc']?>" />
	</li>
<li>
	<label>背景图片对齐位置：</label>
	<span id="allwzset_imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
	<input id="allwzset_imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
	<label style="width:84px;" class="btnLabel jDragHandleImg" data-ids=",allwzset_tForm,jdhi_src,allwzset_imgBgp,textviewbgcolor,">手动调整<i class="popsd"></i></label>
</li>
<li class="price_price">
	<label for="characterFixed">价格保留小数：</label>
	<select id="characterFixed" name="characterFixed">
		<option value="0" <? if($_POST['characterFixed']=='0'){echo'selected="selected"';} ?>>0</option>
		<option value="1" <? if($_POST['characterFixed']=='1'){echo'selected="selected"';} ?>>1</option>
		<option value="2" <? if($_POST['characterFixed']=='2'){echo'selected="selected"';} ?>>2</option>
	</select>
</li>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#textviewcontent").trigger('change');
	var cmVal = $("#allwzsetcharacterMode option:selected").text();
	cmVal = cmVal.replace(/宝贝/g, "");
	"<?=$_POST['characterMode']?>" == "text" ?
	( $("#textviewpanellabeltext").html("样式及内容："), $(".characterModeNoText").hide(), $("#textviewcontent").removeClass("disabled").prop("readonly", false).attr("data-v-type", "text") ) :
	( $("#textviewpanellabeltext").html(cmVal+"样式及值"), $(".characterModeNoText").show(), $("#textviewcontent").addClass("disabled").prop("readonly", true).attr("data-v-type", "other") );
	("<?=$_POST['characterMode']?>" == "price" ||  "<?=$_POST['characterMode']?>" == "_price") ? $(".price_price").show() : $(".price_price").hide();
	$( "#allwzsetcharacterMode" ).selectmenu({
		change: function( event, ui ) {
			var _t = $(this),
				val = _t.val(),
				url = $("#characterItemContent").val(),
				text = _t.children("option:selected").text(),
				_content = $("#textviewcontent"),
				cval =_content.val(),
				cv = _content.attr("data-v") || "",
				cvType = _content.attr("data-v-type");
			text = text.replace(/宝贝/g, "");
			if(cvType != "text") {cval = cv;}
			if(val == "text") {
				$("#textviewpanellabeltext").html("样式及内容：");
				$(".characterModeNoText").hide();
				_content.removeClass("disabled").prop("readonly", false).attr({
					"data-v-type": "text",
					"data-v": ""
				}).val(cv);
			} else {
				$("#textviewpanellabeltext").html(text+"样式及值");
				$(".characterModeNoText").show();
				_content.addClass("disabled").prop("readonly", true).attr({
					"data-v-type": "other",
					"data-v": cval
				}).val("");
				if(checkUrl(url)) {
					
				}
			}
			if(val == "price" || val == "_price") {
				$(".price_price").show()
			} else {
				$(".price_price").hide()
			}
		}
	});
	
	$("#characterItemContent").off("change").on("change", function(event) {
		var _t = $(this), val = _t.val(), _content = $("#textviewcontent"), mode = $( "#allwzsetcharacterMode" ).val(), isRead = _t.attr("data-reading") || "no";
		if(checkUrl(val) && isRead == "no") {
			 _t.attr("data-reading", "yes");
			$.ajax({
				url: "giii.php",
				type: "POST",
				dataType: "json",
				data: {item: val, random: Math.random()*10000},
				success: function(m) {
					_t.attr("data-reading", "no");
					if(m[0] == "yes") {
						mode == "title" && _content.val(m[1]);
						mode == "price" && _content.val(m[2]);
						mode == "_price" && _content.val(m[3]);
						mode == "sale" && _content.val(m[4]);
						mode == "collected" && _content.val(m[5]);
					}
				}
			});
		}
	});
});
</script>			<li>
				<label for="allwzset_bcd1">默认显示：</label>
				<div id="allwzset_bcd1">
					<input type="checkbox" id="allwzset_bc2" name="borderControl1" value="hborder1" <? if($_POST['borderControl1']=='hborder1'){echo'checked="checked"';} ?> />
					<label for="allwzset_bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="allwzset_bc3" name="shadowControl1" value="shadowShow1" <? if($_POST['shadowControl1']=='shadowShow1'){echo'checked="checked"';} ?> />
					<label for="allwzset_bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
				</div>
			</li>
			<li class="hborder1 borderControl1">
				<label for="allwzset_bi5">边框颜色：</label>
				<input id="allwzset_bi5" class="setinput tColorPicker" type="text" title="" name="borderColor1" value="<?=$_POST['borderColor1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="allwzset_bi6">边框粗细：</label>
				<input id="allwzset_bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$_POST['borderWidth1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="allwzset_bi7">边框圆角弧度：</label>
				<input id="allwzset_bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$_POST['borderRadius1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="allwzset_hy4">阴影颜色：</label>
				<input id="allwzset_hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor1" value="<?=$_POST['shadowColor1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="allwzset_hy3">阴影模糊距离：</label>
				<input id="allwzset_hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$_POST['shadowBlur1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="allwzset_hy5">阴影尺寸：</label>
				<input id="allwzset_hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$_POST['shadowSize1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="allwzset_hy1">水平阴影距离：</label>
				<input id="allwzset_hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$_POST['shadowLeft1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="allwzset_by2">垂直阴影距离：</label>
				<input id="allwzset_by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$_POST['shadowTop1']?>" />
				<input id="allwzset_bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="<?=$_POST['shadowStyle1']?>" />
			</li>
			<li>
				<label for="allwzset_tt_i1">提示文字：</label>
				<input id="allwzset_tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
			</li>
		</ul>
	</div>
	<div id="allwzset_tabs-2">
		<ul class="setform" style="width:100%;">
			
<li>
	<label for="rd_hover1">鼠标经过变换开关：</label>
	<div id="rd_hover1">
		<input type="radio" id="rd_hover1_r1" name="characterHoverMode" value="on" <? if($_POST['characterHoverMode']=='on'){echo'checked="checked"';} ?> />
		<label for="rd_hover1_r1">开启</label>
		<input type="radio" id="rd_hover1_r2" name="characterHoverMode" value="off" <? if($_POST['characterHoverMode']=='off'){echo'checked="checked"';} ?> />
		<label for="rd_hover1_r2">关闭</label>
	</div>
</li>
<li>
	<label for="allwzsetcharacterModeHover">文本内容模式：</label>
	<select id="allwzsetcharacterModeHover" name="characterModeHover">
		<option value="text" <? if($_POST['characterModeHover']=='text'){echo'selected="selected"';} ?>>自定义内容</option>
		<option value="price" <? if($_POST['characterModeHover']=='price'){echo'selected="selected"';} ?>>宝贝原价</option>
		<option value="_price" <? if($_POST['characterModeHover']=='_price'){echo'selected="selected"';} ?>>宝贝现价</option>
		<!--<option value="sale" <? if($_POST['characterModeHover']=='sale'){echo'selected="selected"';} ?>>宝贝销量</option>-->
		<option value="title" <? if($_POST['characterModeHover']=='title'){echo'selected="selected"';} ?>>宝贝标题</option>
	</select>
</li>
<li class="characterModeHoverNoText">
	<label for="characterItemContentHover">宝贝链接：</label>
	<input id="characterItemContentHover" class="setinput" type="text" title="请填入宝贝链接" junezx_vali_url="true" name="characterItemContentHover" value="<?=$_POST['characterItemContentHover']?>" />
</li>
<div class="wzlabel" style="width: 150px;float: left;text-align: right;font-size:14px;height: 36px;line-height: 36px;vertical-align: middle;text-align: right;padding-right:10px;color: #808080;">
	<label id="textviewpanellabeltext_hover">样式及内容：</label>
</div>
<div class="textviewpanel" style="z-index:39999;float:left;margin-bottom: 20px;">
	<div class="textviewbar">
		<div class="textviewinput">
			<label for="textviewfont_hover" style="margin-left:3px;">字体</label>
			<select name="characterFontHover" id="textviewfont_hover" style="width:90px;height:26px;">
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
			<label for="textviewcolor_hover">文字色</label>
			<div class="setcolorpanel">
				<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColorHover']?>;"></div></div></div>
				<input name="characterColorHover" class="tColorPicker" id="textviewcolor_hover" type="text" title="文字颜色" value="<?=$_POST['characterColorHover']?>" />
			</div>
			<label for="textviewsize_hover" style="margin-left:3px;">大小</label>
			<input name="characterSizeHover" id="textviewsize_hover" type="text" title="文字大小，单位:像素(px)" value="<?=$_POST['characterSizeHover']?>" style="text-indent:10px;" />
			<label for="textviewbgcolor_hover">背景色</label>
			<div class="setcolorpanel">
				<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColorHover']?>;"></div></div></div>
				<input name="characterBgColorHover" class="tColorPicker" id="textviewbgcolor_hover" type="text" title="文字背景色" value="<?=$_POST['characterBgColorHover']?>" />
			</div>
			<label for="textviewlineheight_hover" style="margin-left:3px;">行高</label>
			<input name="characterLineHeightHover" id="textviewlineheight_hover" type="text" title="文字每行的高度，单位:像素(px)" value="<?=$_POST['characterLineHeightHover']?>" style="width:48px;" />
			<label for="textviewspace_hover">字距</label>
			<input name="characterLetterSpacingHover" id="textviewspace_hover" type="text" title="每个文字之间的间距，单位:像素(px)" value="<?=$_POST['characterLetterSpacingHover']?>" style="width:48px;" />
			<label for="textviewindent_hover">缩进</label>
			<input name="characterIndentHover" id="textviewindent_hover" type="text" title="文字起点距离边框的宽度" value="<?=$_POST['characterIndentHover']?>" style="width:48px;" />
		</div>
		<div class="textviewbtnbox">
			<span class="textviewbtn"><icon>ꕅ</icon><input name="characterWeightHover" type="hidden" id="textviewweight_hover" value="<?=$_POST['characterWeightHover']?>" /></span>
			<span class="textviewbtn"><icon>ꕆ</icon><input name="characterStyleHover" type="hidden" id="textviewstyle_hover" value="<?=$_POST['characterStyleHover']?>" /></span>
			<span class="textviewbtn"><icon>ꔣ</icon><input name="characterLineOverHover" type="hidden" id="textviewlineover_hover" value="<?=$_POST['characterLineOverHover']?>" /></span>
			<span class="textviewbtn"><icon>ꕇ</icon><input name="characterLineThroughHover" type="hidden" id="textviewlinethrough_hover" value="<?=$_POST['characterLineThroughHover']?>" /></span>
			<span class="textviewbtn"><icon>ꕈ</icon><input name="characterLineUnderHover" type="hidden" id="textviewlineunder_hover" value="<?=$_POST['characterLineUnderHover']?>" /></span>
			<span class="spaceline"></span>
			<span class="textviewbtn textviewraido"><icon>ꕉ</icon><input name="characterAlignHover" type="radio" id="textviewalign1_hover" value="left" <? if($_POST['characterAlignHover']=='left'){echo'checked="checked"';} ?> /></span>
			<span class="textviewbtn textviewraido active"><icon>ꕐ</icon><input name="characterAlignHover" type="radio" id="textviewalign2_hover" value="center" <? if($_POST['characterAlignHover']=='center'){echo'checked="checked"';} ?> /></span>
			<span class="textviewbtn textviewraido"><icon>ꕑ</icon><input name="characterAlignHover" type="radio" id="textviewalign3_hover" value="right" <? if($_POST['characterAlignHover']=='right'){echo'checked="checked"';} ?> /></span>
		</div>
	</div>
	<textarea name="characterContentHover" wrap="off" id="textviewcontent_hover" data-newload="yes"><?=$_POST['characterContentHover']?></textarea>
	<input name="characterLineMultiHover" id="textviewmulti_hover" type="hidden" value="<?=$_POST['characterLineMultiHover']?>" />
	<div class="textviewrefresh">
		<icon>ꕦ</icon><span>同步默认文字样式</span>
	</div>
</div>
<li style="clear:both;margin-top:10px;">
	<label for="jdhi_src_hover">文字背景图片：</label>
	<input id="jdhi_src_hover" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="characterBgSrcHover" value="<?=$_POST['characterBgSrcHover']?>"/>
	</li>
    
<?
$bgp=$_POST['imgBgpHover'];
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
    
<li>
	<label>背景图片对齐位置：</label>
	<span id="allwzset_imgBgpHover_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
	<input id="allwzset_imgBgpHover" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgpHover" value="<?=$bgp?>" />
	<label style="width:84px;" class="btnLabel jDragHandleImg" data-ids=",allwzset_tForm,jdhi_src_hover,allwzset_imgBgpHover,textviewbgcolor_hover,">手动调整<i class="popsd"></i></label>
</li>
<li class="price_price_hover">
	<label for="characterFixedHover">价格保留小数：</label>
	<select id="characterFixedHover" name="characterFixedHover">
		<option value="0" <? if($_POST['characterFixedHover']=='0'){echo'selected="selected"';} ?>>0</option>
		<option value="1" <? if($_POST['characterFixedHover']=='1'){echo'selected="selected"';} ?>>1</option>
		<option value="2" <? if($_POST['characterFixedHover']=='2'){echo'selected="selected"';} ?>>2</option>
	</select>
</li>
<li>
	<label for="characterHoverSpeed">切换文字的动画速度：</label>
	<select id="characterHoverSpeed" name="characterHoverSpeed">
		<option value="" <? if($_POST['characterHoverSpeed']==''){echo'selected="selected"';} ?>>无效果</option>
		<option value="trans02s" <? if($_POST['characterHoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>快速</option>
		<option value="trans05s"<? if($_POST['characterHoverSpeed']=='trans05s'){echo'selected="selected"';} ?> >中速</option>
		<option value="trans1s" <? if($_POST['characterHoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
	</select>
</li>
			
<script type="text/javascript">
$(function() {
	$("#textviewcontent_hover").trigger('change');
	var cmVal_hover = $("#allwzsetcharacterModeHover option:selected").text();
	cmVal_hover = cmVal_hover.replace(/宝贝/g, "");
	
	"<?=$_POST['characterModeHover']?>" == "text" ?
	( $("#textviewpanellabeltext_hover").html("样式及内容："), $(".characterModeHoverNoText").hide(), $("#textviewcontent_hover").prop("readonly", false).attr("data-v-type", "text") ) :
	( $("#textviewpanellabeltext_hover").html(cmVal_hover+"样式及值"), $(".characterModeHoverNoText").show(), $("#textviewcontent_hover").prop("readonly", true).attr("data-v-type", "text") );
	("text" == "price" ||  "text" == "_price") ? $(".price_price_hover").show() : $(".price_price_hover").hide();
	$( "#allwzsetcharacterModeHover" ).selectmenu({
		change: function( event, ui ) {
			var _t = $(this), val = _t.val(), text = _t.children("option:selected").text(), _content = $("#textviewcontent_hover"), cval =_content.val(), cv = _content.attr("data-v") || "",  cvType = _content.attr("data-v-type");
			text = text.replace(/宝贝/g, "");
			if(cvType != "text") {cval = cv;}
			if(val == "text") {
				$("#textviewpanellabeltext_hover").html("样式及内容：");
				$(".characterModeHoverNoText").hide();
				_content.prop("readonly", false).attr({
					"data-v-type": "text",
					"data-v": ""
				}).val(cv);
			} else {
				$("#textviewpanellabeltext_hover").html(text+"样式及值");
				$(".characterModeHoverNoText").show();
				_content.prop("readonly", true).attr({
					"data-v-type": "other",
					"data-v": cval
				}).val("");
			}
			if(val == "price" || val == "_price") {
				$(".price_price_hover").show()
			} else {
				$(".price_price_hover").hide()
			}
		}
	});
	$("#characterItemContentHover").off("change").on("change", function(event) {
		var _t = $(this), val = _t.val(), _content = $("#textviewcontent_hover"), mode = $( "#allwzsetcharacterModeHover" ).val(), isRead = _t.attr("data-reading") || "no";
		if(checkUrl(val) && isRead == "no") {
			 _t.attr("data-reading", "yes");
			$.ajax({
				url: "giii.php",
				type: "POST",
				dataType: "json",
				data: {item: val, random: Math.random()*10000},
				success: function(m) {
					_t.attr("data-reading", "no");
					if(m[0] == "yes") {
						mode == "title" && _content.val(m[1]);
						mode == "price" && _content.val(m[2]);
						mode == "_price" && _content.val(m[3]);
						mode == "sale" && _content.val(m[4]);
						mode == "collected" && _content.val(m[5]);
					}
				}
			});
		}
	});
});
</script>			<li>
				<label for="allwzset_hcd1">鼠标经过时显示：</label>
				<div id="allwzset_hcd1">
					<input type="checkbox" id="allwzset_hc2" name="borderControl" value="hborder" <? if($_POST['borderControl']=='hborder'){echo'checked="checked"';} ?> />
					<label for="allwzset_hc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="allwzset_hc3" name="shadowControl" value="shadowShow" <? if($_POST['shadowControl']=='shadowShow'){echo'checked="checked"';} ?> />
					<label for="allwzset_hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
					<input type="checkbox" id="allwzset_hc4" name="outlineControl" value="outlineShow" <? if($_POST['outlineControl']=='outlineShow'){echo'checked="checked"';} ?> />
					<label for="allwzset_hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
				</div>
			</li>
			<li class="hborder borderControl">
				<label for="allwzset_hi5">边框颜色：</label>
				<input id="allwzset_hi5" class="setinput tColorPicker" type="text" title="" name="borderColor" value="<?=$_POST['borderColor']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="allwzset_hi6">边框粗细：</label>
				<input id="allwzset_hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=$_POST['borderWidth']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="allwzset_hi7">边框圆角弧度：</label>
				<input id="allwzset_hi7" class="setinput" type="text" title="" name="borderRadius" value="<?=$_POST['borderRadius']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="allwzset_hy4">阴影颜色：</label>
				<input id="allwzset_hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor" value="<?=$_POST['shadowColor']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="allwzset_hy3">阴影模糊距离：</label>
				<input id="allwzset_hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$_POST['shadowBlur']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="allwzset_hy5">阴影尺寸：</label>
				<input id="allwzset_hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$_POST['shadowSize']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="allwzset_hy1">水平阴影距离：</label>
				<input id="allwzset_hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$_POST['shadowLeft']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="allwzset_hy2">垂直阴影距离：</label>
				<input id="allwzset_hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$_POST['shadowTop']?>" />
				<input id="allwzset_hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="" />
			</li>
			<li class="outlineShow outlineControl">
				<label for="allwzset_hi9">扩展外框颜色：</label>
				<input id="allwzset_hi9" class="setinput tColorPicker" type="text" title="" name="outlineColor" value="<?=$_POST['outlineColor']?>" />

			</li>
			<li class="outlineShow outlineControl">
				<label for="allwzset_outlineWidth">扩展外框粗细：</label>
				<select id="allwzset_outlineWidth" name="outlineWidth">
					<option value="juneol2" <? if($_POST['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
					<option value="juneol1" <? if($_POST['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
					<option value="juneol" <? if($_POST['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="allwzset_outlineSpeed">扩展外框动画速度：</label>
				<select id="allwzset_outlineSpeed" name="outlineSpeed">
					<option value="" <? if($_POST['outlineSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
					<option value="trans01s" <? if($_POST['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans02s" <? if($_POST['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
					<option value="trans05s" <? if($_POST['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
					<option value="trans1s" <? if($_POST['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="allwzset_hi8">扩展外框阴影颜色：</label>
				<input id="allwzset_hi8" class="setinput tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$_POST['outlineShadowColor']?>" />
			</li>
			<li class="hnborder borderControl inputAccording"><i></i><span style="padding:0 10px;">文字下边线</span><em></em></li>
			<li class="hnborder borderControl">
				<label for="allwzset_rd2">文字下边线：</label>
				<div id="allwzset_rd2">
					<input type="radio" id="allwzset_r3" name="characterUnderLine" value="on" <? if($_POST['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
					<label for="allwzset_r3">显示</label>
					<input type="radio" id="allwzset_r4" name="characterUnderLine" value="off" <? if($_POST['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
					<label for="allwzset_r4" style="width: 70px;">不显示</label>
				</div>
			</li>
			<li class="hnborder borderControl">
				<label for="allwzset_characterUnderLineStyle">下边线样式：</label>
				<select id="allwzset_characterUnderLineStyle" name="characterUnderLineStyle">
					<option value="solid" <? if($_POST['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
					<option value="dotted" <? if($_POST['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
				</select>
			</li>
			<li class="hnborder borderControl">
				<label for="allwzset_characterUnderLineWeight">下边线粗细：</label>
				<select id="allwzset_characterUnderLineWeight" name="characterUnderLineWeight">
					<option value="1" <? if($_POST['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if($_POST['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
					<option value="3" <? if($_POST['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
					<option value="4" <? if($_POST['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
					<option value="5" <? if($_POST['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
				</select>
			</li>
			<li class="hnborder borderControl">
				<label for="allwzset_i8">下边线颜色：</label>
				<input id="allwzset_i8" class="setinput tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=$_POST['characterUnderLineColor']?>" />
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
	$("#allwzset_tabs").tabs();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$("#allwzset_tForm select:not(.popslem)").fontselectmenu();
	
	$(".borderControl, .shadowControl, .outlineControl").hide();
	
	$(".borderControl1, .shadowControl1").hide();
	""=="hborder" ? ($(".borderControl").hide(),$(".hborder").show()) : ($(".borderControl").hide(),$(".hnborder").show());
	""=="shadowShow" && $(".shadowControl").show();
	""=="outlineShow" && $(".outlineControl").show();
	
	""=="hborder1" && $(".borderControl1").show();
	""=="shadowShow1" && $(".shadowControl1").show();
	
	$("#allwzset_hc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl").hide();
			$(".hborder").show();
		} else {
			$(".borderControl").hide();
			$(".hnborder").show();
		}
	});
	$("#allwzset_hc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl").show();
		} else {
			$(".shadowControl").hide();
		}
	});
	$("#allwzset_hc4").click(function() {
		if(!!$(this).prop("checked")) {
			$(".outlineControl").show();
		} else {
			$(".outlineControl").hide();
		}
	});
	
	
	$("#allwzset_bc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl1").show();
		} else {
			$(".borderControl1").hide();
		}
	});
	$("#allwzset_bc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl1").show();
		} else {
			$(".shadowControl1").hide();
		}
	});
	
	var textviewcontentText=$("#textviewcontent").text().replace(/<br\s*\/?>/gi,"\r\n");	 
	$("#textviewcontent").text(textviewcontentText);

	var textviewcontent_hoverText=$("#textviewcontent_hover").text().replace(/<br\s*\/?>/gi,"\r\n");	 
	$("#textviewcontent_hover").text(textviewcontent_hoverText);

});
</script>