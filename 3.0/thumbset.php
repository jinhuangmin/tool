<form id="oths_tForm" form-data="oths_thumbset" method="post" >
<div id="oths_tabs" class="form-tabs-title">
	<ul>
		<li><a href="#oths_tabs-1">缩略图</a></li>
		<li><a href="#oths_tabs-2">切换缩略图</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="oths_tabs-1">
				<ul class="setform">
<li style="display: none;">
	<label for="characterMode">文本内容模式：</label>
	<select id="characterMode" name="characterMode">
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
	<input id="jdhi_src" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="characterBgSrc" value="<?=$_POST['characterBgSrc']?>" />
		<div class="tPicUploadBtn" style="top:0;display: none;" data-target="otherset-clicked" data-oths="uploadpic;characterBgSrc">选择</div>
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
<li>
	<label>背景图片对齐位置：</label>
	<span id="allwzset_imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
	<input id="allwzset_imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
	<label style="width:84px;" class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src,allwzset_imgBgp,textviewbgcolor,">手动调整<i class="popsd"></i></label>
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
	var cmVal = $("#characterMode option:selected").text();
	cmVal = cmVal.replace(/宝贝/g, "");
	"<?=$_POST['characterMode']?>" == "text" ?
	( $("#textviewpanellabeltext").html("样式及内容："), $(".characterModeNoText").hide(), $("#textviewcontent").removeClass("disabled").prop("readonly", false).attr("data-v-type", "text") ) :
	( $("#textviewpanellabeltext").html(cmVal+"样式及值"), $(".characterModeNoText").show(), $("#textviewcontent").addClass("disabled").prop("readonly", true).attr("data-v-type", "other") );
	("<?=$_POST['characterMode']?>" == "price" ||  "<?=$_POST['characterMode']?>" == "_price") ? $(".price_price").show() : $(".price_price").hide();
	$( "#characterMode" ).selectmenu({
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
		var _t = $(this), val = _t.val(), _content = $("#textviewcontent"), mode = $( "#characterMode" ).val(), isRead = _t.attr("data-reading") || "no";
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
</script>					<li>
						<label for="oths_ssOpacity">透明度：</label>
						<select id="oths_ssOpacity" name="ssOpacity">
							<option value="1" <? if($_POST['ssOpacity']=='1'){echo'selected="selected"';} ?>>1</option>
							<option value="0.9" <? if($_POST['ssOpacity']=='0.9'){echo'selected="selected"';} ?>>0.9</option>
							<option value="0.8" <? if($_POST['ssOpacity']=='0.8'){echo'selected="selected"';} ?>>0.8</option>
							<option value="0.7" <? if($_POST['ssOpacity']=='0.7'){echo'selected="selected"';} ?>>0.7</option>
							<option value="0.6" <? if($_POST['ssOpacity']=='0.6'){echo'selected="selected"';} ?>>0.6</option>
							<option value="0.5" <? if($_POST['ssOpacity']=='0.5'){echo'selected="selected"';} ?>>0.5</option>
							<option value="0.4" <? if($_POST['ssOpacity']=='0.4'){echo'selected="selected"';} ?>>0.4</option>
							<option value="0.3" <? if($_POST['ssOpacity']=='0.3'){echo'selected="selected"';} ?>>0.3</option>
							<option value="0.2" <? if($_POST['ssOpacity']=='0.2'){echo'selected="selected"';} ?>>0.2</option>
							<option value="0.1" <? if($_POST['ssOpacity']=='0.1'){echo'selected="selected"';} ?>>0.1</option>
						</select>
					</li>
					<li>
						<label for="oths_bcd1">默认显示：</label>
						<div id="oths_bcd1">
							<input type="checkbox" id="oths_bc2" name="borderControl1" value="hborder1" <? if($_POST['borderControl1']=='hborder1'){echo'checked="checked"';} ?> />
							<label for="oths_bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
							<input type="checkbox" id="oths_bc3" name="shadowControl1" value="shadowShow1" <? if($_POST['shadowControl1']=='shadowShow1'){echo'checked="checked"';} ?> />
							<label for="oths_bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
						</div>
					</li>
                    
					<li class="hborder1 borderControl1">
						<label for="oths_bi5">边框颜色：</label>
						<input id="oths_bi5" class="setinput tColorPicker" type="text" title="" name="borderColor1" value="<?=$_POST['borderColor1']?>" />
					</li>
					<li class="hborder1 borderControl1">
						<label for="oths_bi6">边框粗细：</label>
						<input id="oths_bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$_POST['borderWidth1']?>" />
					</li>
					<li class="hborder1 borderControl1">
						<label for="oths_bi7">边框圆角弧度：</label>
						<input id="oths_bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$_POST['borderRadius1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="oths_hy4">阴影颜色：</label>
						<input id="oths_hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor1" value="<?=$_POST['shadowColor1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="oths_hy3">阴影模糊距离：</label>
						<input id="oths_hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$_POST['shadowBlur1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="oths_hy5">阴影尺寸：</label>
						<input id="oths_hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$_POST['shadowSize1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="oths_hy1">水平阴影距离：</label>
						<input id="oths_hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$_POST['shadowLeft1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="oths_by2">垂直阴影距离：</label>
						<input id="oths_by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$_POST['shadowTop1']?>" />
						<input id="oths_bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="<?=$_POST['shadowStyle1']?>" />
					</li>
					<li>
						<label for="oths_tt_i1">提示文字：</label>
						<input id="oths_tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="oths_tabs-2">
				<ul class="setform">
					
<li>
	<label for="rd_hover1">鼠标经过变换开关：</label>
	<div id="rd_hover1">
		<input type="radio" id="rd_hover1_r1" name="characterHoverMode" value="on" <? if($_POST['characterHoverMode']=='on'){echo'checked="checked"';} ?> />
		<label for="rd_hover1_r1">开启</label>
		<input type="radio" id="rd_hover1_r2" name="characterHoverMode" value="off" <? if($_POST['characterHoverMode']=='off'){echo'checked="checked"';} ?> />
		<label for="rd_hover1_r2">关闭</label>
	</div>
</li>
<li style="display: none;">
	<label for="characterModeHover">文本内容模式：</label>
	<select id="characterModeHover" name="characterModeHover">
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
	<input id="jdhi_src_hover" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="characterBgSrcHover" value="<?=$_POST['characterBgSrcHover']?>" />
		<div class="tPicUploadBtn" style="top:0;display: none;" data-target="otherset-clicked" data-oths="uploadpic;characterBgSrcHover">选择</div>
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
	<label style="width:84px;" class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,oths_tForm,jdhi_src_hover,allwzset_imgBgpHover,textviewbgcolor_hover,"  data-aidx="0">手动调整<i class="popsd"></i></label>
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
	var cmVal_hover = $("#characterModeHover option:selected").text();
	cmVal_hover = cmVal_hover.replace(/宝贝/g, "");
	
	"<?=$_POST['characterModeHover']?>" == "text" ?
	( $("#textviewpanellabeltext_hover").html("样式及内容："), $(".characterModeHoverNoText").hide(), $("#textviewcontent_hover").prop("readonly", false).attr("data-v-type", "text") ) :
	( $("#textviewpanellabeltext_hover").html(cmVal_hover+"样式及值"), $(".characterModeHoverNoText").show(), $("#textviewcontent_hover").prop("readonly", true).attr("data-v-type", "text") );
	("<?=$_POST['characterModeHover']?>" == "price" ||  "<?=$_POST['characterModeHover']?>" == "_price") ? $(".price_price_hover").show() : $(".price_price_hover").hide();
	$( "#characterModeHover" ).selectmenu({
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
		var _t = $(this), val = _t.val(), _content = $("#textviewcontent_hover"), mode = $( "#characterModeHover" ).val(), isRead = _t.attr("data-reading") || "no";
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
</script>					<li>
						<label for="oths_ssOpacity1">透明度：</label>
						<select id="oths_ssOpacity1" name="ssOpacity1">
							<option value="1" <? if($_POST['ssOpacity1']=='1'){echo'selected="selected"';} ?>>1</option>
							<option value="0.9" <? if($_POST['ssOpacity1']=='0.9'){echo'selected="selected"';} ?>>0.9</option>
							<option value="0.8" <? if($_POST['ssOpacity1']=='0.8'){echo'selected="selected"';} ?>>0.8</option>
							<option value="0.7" <? if($_POST['ssOpacity1']=='0.7'){echo'selected="selected"';} ?>>0.7</option>
							<option value="0.6" <? if($_POST['ssOpacity1']=='0.6'){echo'selected="selected"';} ?>>0.6</option>
							<option value="0.5" <? if($_POST['ssOpacity1']=='0.5'){echo'selected="selected"';} ?>>0.5</option>
							<option value="0.4" <? if($_POST['ssOpacity1']=='0.4'){echo'selected="selected"';} ?>>0.4</option>
							<option value="0.3" <? if($_POST['ssOpacity1']=='0.3'){echo'selected="selected"';} ?>>0.3</option>
							<option value="0.2" <? if($_POST['ssOpacity1']=='0.2'){echo'selected="selected"';} ?>>0.2</option>
							<option value="0.1" <? if($_POST['ssOpacity1']=='0.1'){echo'selected="selected"';} ?>>0.1</option>
						</select>
					</li>
					<li>
						<label for="oths_css3ModeX1">横向移动：</label>
						<select id="oths_css3ModeX1" name="css3ModeX1">
							<option value="" <? if($_POST['css3ModeX1']==''){echo'selected="selected"';} ?>>无效果</option>
							<option value="june-box-lx5" <? if($_POST['css3ModeX1']=='june-box-lx5'){echo'selected="selected"';} ?>>向左移动5像素</option>
							<option value="june-box-lx10" <? if($_POST['css3ModeX1']=='june-box-lx10'){echo'selected="selected"';} ?>>向左移动10像素</option>
							<option value="june-box-lx15" <? if($_POST['css3ModeX1']=='june-box-lx15'){echo'selected="selected"';} ?>>向左移动15像素</option>
                            <option value="june-box-lx20" <? if($_POST['css3ModeX1']=='june-box-lx20'){echo'selected="selected"';} ?>>向左移动20像素</option>
                            <option value="june-box-lx30" <? if($_POST['css3ModeX1']=='june-box-lx30'){echo'selected="selected"';} ?>>向左移动30像素</option>
                            <option value="june-box-lx40" <? if($_POST['css3ModeX1']=='june-box-lx40'){echo'selected="selected"';} ?>>向左移动40像素</option>
                            <option value="june-box-lx50" <? if($_POST['css3ModeX1']=='june-box-lx50'){echo'selected="selected"';} ?>>向左移动50像素</option>
                            <option value="june-box-lx60" <? if($_POST['css3ModeX1']=='june-box-lx60'){echo'selected="selected"';} ?>>向左移动60像素</option>
                            <option value="june-box-lx70" <? if($_POST['css3ModeX1']=='june-box-lx70'){echo'selected="selected"';} ?>>向左移动70像素</option>
                            <option value="june-box-lx80" <? if($_POST['css3ModeX1']=='june-box-lx80'){echo'selected="selected"';} ?>>向左移动80像素</option>
                            <option value="june-box-lx90" <? if($_POST['css3ModeX1']=='june-box-lx90'){echo'selected="selected"';} ?>>向左移动90像素</option>
                            <option value="june-box-lx100" <? if($_POST['css3ModeX1']=='june-box-lx100'){echo'selected="selected"';} ?>>向左移动100像素</option>
                            <option value="june-box-lx110" <? if($_POST['css3ModeX1']=='june-box-lx110'){echo'selected="selected"';} ?>>向左移动110像素</option>
                            <option value="june-box-lx120" <? if($_POST['css3ModeX1']=='june-box-lx120'){echo'selected="selected"';} ?>>向左移动120像素</option>
                            <option value="june-box-lx130" <? if($_POST['css3ModeX1']=='june-box-lx130'){echo'selected="selected"';} ?>>向左移动130像素</option>
                            <option value="june-box-lx140" <? if($_POST['css3ModeX1']=='june-box-lx140'){echo'selected="selected"';} ?>>向左移动140像素</option>
                            <option value="june-box-lx150" <? if($_POST['css3ModeX1']=='june-box-lx150'){echo'selected="selected"';} ?>>向左移动150像素</option>
                            <option value="june-box-lx160" <? if($_POST['css3ModeX1']=='june-box-lx160'){echo'selected="selected"';} ?>>向左移动160像素</option>
                            <option value="june-box-lx170" <? if($_POST['css3ModeX1']=='june-box-lx170'){echo'selected="selected"';} ?>>向左移动170像素</option>
                            <option value="june-box-lx180" <? if($_POST['css3ModeX1']=='june-box-lx180'){echo'selected="selected"';} ?>>向左移动180像素</option>
                            <option value="june-box-lx190" <? if($_POST['css3ModeX1']=='june-box-lx190'){echo'selected="selected"';} ?>>向左移动190像素</option>
                            <option value="june-box-lx200" <? if($_POST['css3ModeX1']=='june-box-lx200'){echo'selected="selected"';} ?>>向左移动200像素</option>
                            <option value="june-box-lx210" <? if($_POST['css3ModeX1']=='june-box-lx210'){echo'selected="selected"';} ?>>向左移动210像素</option>
                            <option value="june-box-lx220" <? if($_POST['css3ModeX1']=='june-box-lx220'){echo'selected="selected"';} ?>>向左移动220像素</option>
                            <option value="june-box-lx230" <? if($_POST['css3ModeX1']=='june-box-lx230'){echo'selected="selected"';} ?>>向左移动230像素</option>
                            <option value="june-box-lx240" <? if($_POST['css3ModeX1']=='june-box-lx240'){echo'selected="selected"';} ?>>向左移动240像素</option>
                            <option value="june-box-lx250" <? if($_POST['css3ModeX1']=='june-box-lx250'){echo'selected="selected"';} ?>>向左移动250像素</option>
                            <option value="june-box-lx260" <? if($_POST['css3ModeX1']=='june-box-lx260'){echo'selected="selected"';} ?>>向左移动260像素</option>
                            <option value="june-box-lx270" <? if($_POST['css3ModeX1']=='june-box-lx270'){echo'selected="selected"';} ?>>向左移动270像素</option>
                            <option value="june-box-lx280" <? if($_POST['css3ModeX1']=='june-box-lx280'){echo'selected="selected"';} ?>>向左移动280像素</option>
                            <option value="june-box-lx290" <? if($_POST['css3ModeX1']=='june-box-lx290'){echo'selected="selected"';} ?>>向左移动290像素</option>
                            <option value="june-box-lx300" <? if($_POST['css3ModeX1']=='june-box-lx300'){echo'selected="selected"';} ?>>向左移动300像素</option>
                            <option value="june-box-lx310" <? if($_POST['css3ModeX1']=='june-box-lx310'){echo'selected="selected"';} ?>>向左移动310像素</option>
                            <option value="june-box-lx320" <? if($_POST['css3ModeX1']=='june-box-lx320'){echo'selected="selected"';} ?>>向左移动320像素</option>
                            <option value="june-box-lx330" <? if($_POST['css3ModeX1']=='june-box-lx330'){echo'selected="selected"';} ?>>向左移动330像素</option>
                            <option value="june-box-lx340" <? if($_POST['css3ModeX1']=='june-box-lx340'){echo'selected="selected"';} ?>>向左移动340像素</option>
                            <option value="june-box-lx350" <? if($_POST['css3ModeX1']=='june-box-lx350'){echo'selected="selected"';} ?>>向左移动350像素</option>
                            <option value="june-box-lx360" <? if($_POST['css3ModeX1']=='june-box-lx360'){echo'selected="selected"';} ?>>向左移动360像素</option>
                            <option value="june-box-lx370" <? if($_POST['css3ModeX1']=='june-box-lx370'){echo'selected="selected"';} ?>>向左移动370像素</option>
                            <option value="june-box-lx380" <? if($_POST['css3ModeX1']=='june-box-lx380'){echo'selected="selected"';} ?>>向左移动380像素</option>
                            <option value="june-box-lx390" <? if($_POST['css3ModeX1']=='june-box-lx390'){echo'selected="selected"';} ?>>向左移动390像素</option>
                            <option value="june-box-lx400" <? if($_POST['css3ModeX1']=='june-box-lx400'){echo'selected="selected"';} ?>>向左移动400像素</option>
                            <option value="june-box-lx410" <? if($_POST['css3ModeX1']=='june-box-lx410'){echo'selected="selected"';} ?>>向左移动410像素</option>
                            <option value="june-box-lx420" <? if($_POST['css3ModeX1']=='june-box-lx420'){echo'selected="selected"';} ?>>向左移动420像素</option>
                            <option value="june-box-lx430" <? if($_POST['css3ModeX1']=='june-box-lx430'){echo'selected="selected"';} ?>>向左移动430像素</option>
                            <option value="june-box-lx440" <? if($_POST['css3ModeX1']=='june-box-lx440'){echo'selected="selected"';} ?>>向左移动440像素</option>
                            <option value="june-box-lx450" <? if($_POST['css3ModeX1']=='june-box-lx450'){echo'selected="selected"';} ?>>向左移动450像素</option>
                            <option value="june-box-lx460" <? if($_POST['css3ModeX1']=='june-box-lx460'){echo'selected="selected"';} ?>>向左移动460像素</option>
                            <option value="june-box-lx470" <? if($_POST['css3ModeX1']=='june-box-lx470'){echo'selected="selected"';} ?>>向左移动470像素</option>
                            <option value="june-box-lx480" <? if($_POST['css3ModeX1']=='june-box-lx480'){echo'selected="selected"';} ?>>向左移动480像素</option>
                            <option value="june-box-lx490" <? if($_POST['css3ModeX1']=='june-box-lx490'){echo'selected="selected"';} ?>>向左移动490像素</option>
                            <option value="june-box-lx500" <? if($_POST['css3ModeX1']=='june-box-lx500'){echo'selected="selected"';} ?>>向左移动500像素</option>
                            <option value="june-box-lx510" <? if($_POST['css3ModeX1']=='june-box-lx510'){echo'selected="selected"';} ?>>向左移动510像素</option>
                            <option value="june-box-lx520" <? if($_POST['css3ModeX1']=='june-box-lx520'){echo'selected="selected"';} ?>>向左移动520像素</option>
                            <option value="june-box-lx530" <? if($_POST['css3ModeX1']=='june-box-lx530'){echo'selected="selected"';} ?>>向左移动530像素</option>
                            <option value="june-box-lx540" <? if($_POST['css3ModeX1']=='june-box-lx540'){echo'selected="selected"';} ?>>向左移动540像素</option>
                            <option value="june-box-lx550" <? if($_POST['css3ModeX1']=='june-box-lx550'){echo'selected="selected"';} ?>>向左移动550像素</option>
                            <option value="june-box-lx560" <? if($_POST['css3ModeX1']=='june-box-lx560'){echo'selected="selected"';} ?>>向左移动560像素</option>
                            <option value="june-box-lx570" <? if($_POST['css3ModeX1']=='june-box-lx570'){echo'selected="selected"';} ?>>向左移动570像素</option>
                            <option value="june-box-lx580" <? if($_POST['css3ModeX1']=='june-box-lx580'){echo'selected="selected"';} ?>>向左移动580像素</option>
                            <option value="june-box-lx590" <? if($_POST['css3ModeX1']=='june-box-lx590'){echo'selected="selected"';} ?>>向左移动590像素</option>
                            <option value="june-box-lx600" <? if($_POST['css3ModeX1']=='june-box-lx600'){echo'selected="selected"';} ?>>向左移动600像素</option>
                            <option value="june-box-lx610" <? if($_POST['css3ModeX1']=='june-box-lx610'){echo'selected="selected"';} ?>>向左移动610像素</option>
                            <option value="june-box-lx620" <? if($_POST['css3ModeX1']=='june-box-lx620'){echo'selected="selected"';} ?>>向左移动620像素</option>
                           <option value="june-box-rx5" <? if($_POST['css3ModeX1']=='june-box-rx5'){echo'selected="selected"';} ?>>向右移动5像素</option>
							<option value="june-box-rx10" <? if($_POST['css3ModeX1']=='june-box-rx10'){echo'selected="selected"';} ?>>向右移动10像素</option>
							<option value="june-box-rx15" <? if($_POST['css3ModeX1']=='june-box-rx15'){echo'selected="selected"';} ?>>向右移动15像素</option>
                            <option value="june-box-rx20" <? if($_POST['css3ModeX1']=='june-box-rx20'){echo'selected="selected"';} ?>>向右移动20像素</option>
                            <option value="june-box-rx30" <? if($_POST['css3ModeX1']=='june-box-rx30'){echo'selected="selected"';} ?>>向右移动30像素</option>
                            <option value="june-box-rx40" <? if($_POST['css3ModeX1']=='june-box-rx40'){echo'selected="selected"';} ?>>向右移动40像素</option>
                            <option value="june-box-rx50" <? if($_POST['css3ModeX1']=='june-box-rx50'){echo'selected="selected"';} ?>>向右移动50像素</option>
                            <option value="june-box-rx60" <? if($_POST['css3ModeX1']=='june-box-rx60'){echo'selected="selected"';} ?>>向右移动60像素</option>
                            <option value="june-box-rx70" <? if($_POST['css3ModeX1']=='june-box-rx70'){echo'selected="selected"';} ?>>向右移动70像素</option>
                            <option value="june-box-rx80" <? if($_POST['css3ModeX1']=='june-box-rx80'){echo'selected="selected"';} ?>>向右移动80像素</option>
                            <option value="june-box-rx90" <? if($_POST['css3ModeX1']=='june-box-rx90'){echo'selected="selected"';} ?>>向右移动90像素</option>
                            <option value="june-box-rx100" <? if($_POST['css3ModeX1']=='june-box-rx100'){echo'selected="selected"';} ?>>向右移动100像素</option>
                            <option value="june-box-rx110" <? if($_POST['css3ModeX1']=='june-box-rx110'){echo'selected="selected"';} ?>>向右移动110像素</option>
                            <option value="june-box-rx120" <? if($_POST['css3ModeX1']=='june-box-rx120'){echo'selected="selected"';} ?>>向右移动120像素</option>
                            <option value="june-box-rx130" <? if($_POST['css3ModeX1']=='june-box-rx130'){echo'selected="selected"';} ?>>向右移动130像素</option>
                            <option value="june-box-rx140" <? if($_POST['css3ModeX1']=='june-box-rx140'){echo'selected="selected"';} ?>>向右移动140像素</option>
                            <option value="june-box-rx150" <? if($_POST['css3ModeX1']=='june-box-rx150'){echo'selected="selected"';} ?>>向右移动150像素</option>
                            <option value="june-box-rx160" <? if($_POST['css3ModeX1']=='june-box-rx160'){echo'selected="selected"';} ?>>向右移动160像素</option>
                            <option value="june-box-rx170" <? if($_POST['css3ModeX1']=='june-box-rx170'){echo'selected="selected"';} ?>>向右移动170像素</option>
                            <option value="june-box-rx180" <? if($_POST['css3ModeX1']=='june-box-rx180'){echo'selected="selected"';} ?>>向右移动180像素</option>
                            <option value="june-box-rx190" <? if($_POST['css3ModeX1']=='june-box-rx190'){echo'selected="selected"';} ?>>向右移动190像素</option>
                            <option value="june-box-rx200" <? if($_POST['css3ModeX1']=='june-box-rx200'){echo'selected="selected"';} ?>>向右移动200像素</option>
                            <option value="june-box-rx210" <? if($_POST['css3ModeX1']=='june-box-rx210'){echo'selected="selected"';} ?>>向右移动210像素</option>
                            <option value="june-box-rx220" <? if($_POST['css3ModeX1']=='june-box-rx220'){echo'selected="selected"';} ?>>向右移动220像素</option>
                            <option value="june-box-rx230" <? if($_POST['css3ModeX1']=='june-box-rx230'){echo'selected="selected"';} ?>>向右移动230像素</option>
                            <option value="june-box-rx240" <? if($_POST['css3ModeX1']=='june-box-rx240'){echo'selected="selected"';} ?>>向右移动240像素</option>
                            <option value="june-box-rx250" <? if($_POST['css3ModeX1']=='june-box-rx250'){echo'selected="selected"';} ?>>向右移动250像素</option>
                            <option value="june-box-rx260" <? if($_POST['css3ModeX1']=='june-box-rx260'){echo'selected="selected"';} ?>>向右移动260像素</option>
                            <option value="june-box-rx270" <? if($_POST['css3ModeX1']=='june-box-rx270'){echo'selected="selected"';} ?>>向右移动270像素</option>
                            <option value="june-box-rx280" <? if($_POST['css3ModeX1']=='june-box-rx280'){echo'selected="selected"';} ?>>向右移动280像素</option>
                            <option value="june-box-rx290" <? if($_POST['css3ModeX1']=='june-box-rx290'){echo'selected="selected"';} ?>>向右移动290像素</option>
                            <option value="june-box-rx300" <? if($_POST['css3ModeX1']=='june-box-rx300'){echo'selected="selected"';} ?>>向右移动300像素</option>
                            <option value="june-box-rx310" <? if($_POST['css3ModeX1']=='june-box-rx310'){echo'selected="selected"';} ?>>向右移动310像素</option>
                            <option value="june-box-rx320" <? if($_POST['css3ModeX1']=='june-box-rx320'){echo'selected="selected"';} ?>>向右移动320像素</option>
                            <option value="june-box-rx330" <? if($_POST['css3ModeX1']=='june-box-rx330'){echo'selected="selected"';} ?>>向右移动330像素</option>
                            <option value="june-box-rx340" <? if($_POST['css3ModeX1']=='june-box-rx340'){echo'selected="selected"';} ?>>向右移动340像素</option>
                            <option value="june-box-rx350" <? if($_POST['css3ModeX1']=='june-box-rx350'){echo'selected="selected"';} ?>>向右移动350像素</option>
                            <option value="june-box-rx360" <? if($_POST['css3ModeX1']=='june-box-rx360'){echo'selected="selected"';} ?>>向右移动360像素</option>
                            <option value="june-box-rx370" <? if($_POST['css3ModeX1']=='june-box-rx370'){echo'selected="selected"';} ?>>向右移动370像素</option>
                            <option value="june-box-rx380" <? if($_POST['css3ModeX1']=='june-box-rx380'){echo'selected="selected"';} ?>>向右移动380像素</option>
                            <option value="june-box-rx390" <? if($_POST['css3ModeX1']=='june-box-rx390'){echo'selected="selected"';} ?>>向右移动390像素</option>
                            <option value="june-box-rx400" <? if($_POST['css3ModeX1']=='june-box-rx400'){echo'selected="selected"';} ?>>向右移动400像素</option>
                            <option value="june-box-rx410" <? if($_POST['css3ModeX1']=='june-box-rx410'){echo'selected="selected"';} ?>>向右移动410像素</option>
                            <option value="june-box-rx420" <? if($_POST['css3ModeX1']=='june-box-rx420'){echo'selected="selected"';} ?>>向右移动420像素</option>
                            <option value="june-box-rx430" <? if($_POST['css3ModeX1']=='june-box-rx430'){echo'selected="selected"';} ?>>向右移动430像素</option>
                            <option value="june-box-rx440" <? if($_POST['css3ModeX1']=='june-box-rx440'){echo'selected="selected"';} ?>>向右移动440像素</option>
                            <option value="june-box-rx450" <? if($_POST['css3ModeX1']=='june-box-rx450'){echo'selected="selected"';} ?>>向右移动450像素</option>
                            <option value="june-box-rx460" <? if($_POST['css3ModeX1']=='june-box-rx460'){echo'selected="selected"';} ?>>向右移动460像素</option>
                            <option value="june-box-rx470" <? if($_POST['css3ModeX1']=='june-box-rx470'){echo'selected="selected"';} ?>>向右移动470像素</option>
                            <option value="june-box-rx480" <? if($_POST['css3ModeX1']=='june-box-rx480'){echo'selected="selected"';} ?>>向右移动480像素</option>
                            <option value="june-box-rx490" <? if($_POST['css3ModeX1']=='june-box-rx490'){echo'selected="selected"';} ?>>向右移动490像素</option>
                            <option value="june-box-rx500" <? if($_POST['css3ModeX1']=='june-box-rx500'){echo'selected="selected"';} ?>>向右移动500像素</option>
                            <option value="june-box-rx510" <? if($_POST['css3ModeX1']=='june-box-rx510'){echo'selected="selected"';} ?>>向右移动510像素</option>
                            <option value="june-box-rx520" <? if($_POST['css3ModeX1']=='june-box-rx520'){echo'selected="selected"';} ?>>向右移动520像素</option>
                            <option value="june-box-rx530" <? if($_POST['css3ModeX1']=='june-box-rx530'){echo'selected="selected"';} ?>>向右移动530像素</option>
                            <option value="june-box-rx540" <? if($_POST['css3ModeX1']=='june-box-rx540'){echo'selected="selected"';} ?>>向右移动540像素</option>
                            <option value="june-box-rx550" <? if($_POST['css3ModeX1']=='june-box-rx550'){echo'selected="selected"';} ?>>向右移动550像素</option>
                            <option value="june-box-rx560" <? if($_POST['css3ModeX1']=='june-box-rx560'){echo'selected="selected"';} ?>>向右移动560像素</option>
                            <option value="june-box-rx570" <? if($_POST['css3ModeX1']=='june-box-rx570'){echo'selected="selected"';} ?>>向右移动570像素</option>
                            <option value="june-box-rx580" <? if($_POST['css3ModeX1']=='june-box-rx580'){echo'selected="selected"';} ?>>向右移动580像素</option>
                            <option value="june-box-rx590" <? if($_POST['css3ModeX1']=='june-box-rx590'){echo'selected="selected"';} ?>>向右移动590像素</option>
                            <option value="june-box-rx600" <? if($_POST['css3ModeX1']=='june-box-rx600'){echo'selected="selected"';} ?>>向右移动600像素</option>
                            <option value="june-box-rx610" <? if($_POST['css3ModeX1']=='june-box-rx610'){echo'selected="selected"';} ?>>向右移动610像素</option>
                            <option value="june-box-rx620" <? if($_POST['css3ModeX1']=='june-box-rx620'){echo'selected="selected"';} ?>>向右移动620像素</option>
                        </select>
					</li>
					<li>
						<label for="oths_css3ModeY1">纵向移动：</label>
						<select id="oths_css3ModeY1" name="css3ModeY1">
							<option value="" <? if($_POST['css3ModeY1']==''){echo'selected="selected"';} ?>>无效果</option>
							<option value="june-box-uy5" <? if($_POST['css3ModeY1']=='june-box-uy5'){echo'selected="selected"';} ?>>向上移动5像素</option>
							<option value="june-box-uy10" <? if($_POST['css3ModeY1']=='june-box-uy10'){echo'selected="selected"';} ?>>向上移动10像素</option>
							<option value="june-box-uy15" <? if($_POST['css3ModeY1']=='june-box-uy15'){echo'selected="selected"';} ?>>向上移动15像素</option>
                            <option value="june-box-uy20" <? if($_POST['css3ModeY1']=='june-box-uy20'){echo'selected="selected"';} ?>>向上移动20像素</option>
                            <option value="june-box-uy30" <? if($_POST['css3ModeY1']=='june-box-uy30'){echo'selected="selected"';} ?>>向上移动30像素</option>
                            <option value="june-box-uy40" <? if($_POST['css3ModeY1']=='june-box-uy40'){echo'selected="selected"';} ?>>向上移动40像素</option>
                            <option value="june-box-uy50" <? if($_POST['css3ModeY1']=='june-box-uy50'){echo'selected="selected"';} ?>>向上移动50像素</option>
                            <option value="june-box-uy60" <? if($_POST['css3ModeY1']=='june-box-uy60'){echo'selected="selected"';} ?>>向上移动60像素</option>
                            <option value="june-box-uy70" <? if($_POST['css3ModeY1']=='june-box-uy70'){echo'selected="selected"';} ?>>向上移动70像素</option>
                            <option value="june-box-uy80" <? if($_POST['css3ModeY1']=='june-box-uy80'){echo'selected="selected"';} ?>>向上移动80像素</option>
                            <option value="june-box-uy90" <? if($_POST['css3ModeY1']=='june-box-uy90'){echo'selected="selected"';} ?>>向上移动90像素</option>
                            <option value="june-box-uy100" <? if($_POST['css3ModeY1']=='june-box-uy100'){echo'selected="selected"';} ?>>向上移动100像素</option>
                            <option value="june-box-uy110" <? if($_POST['css3ModeY1']=='june-box-uy110'){echo'selected="selected"';} ?>>向上移动110像素</option>
                            <option value="june-box-uy120" <? if($_POST['css3ModeY1']=='june-box-uy120'){echo'selected="selected"';} ?>>向上移动120像素</option>
                            <option value="june-box-uy130" <? if($_POST['css3ModeY1']=='june-box-uy130'){echo'selected="selected"';} ?>>向上移动130像素</option>
                            <option value="june-box-uy140" <? if($_POST['css3ModeY1']=='june-box-uy140'){echo'selected="selected"';} ?>>向上移动140像素</option>
                            <option value="june-box-uy150" <? if($_POST['css3ModeY1']=='june-box-uy150'){echo'selected="selected"';} ?>>向上移动150像素</option>
                            <option value="june-box-uy160" <? if($_POST['css3ModeY1']=='june-box-uy160'){echo'selected="selected"';} ?>>向上移动160像素</option>
                            <option value="june-box-uy170" <? if($_POST['css3ModeY1']=='june-box-uy170'){echo'selected="selected"';} ?>>向上移动170像素</option>
                            <option value="june-box-uy180" <? if($_POST['css3ModeY1']=='june-box-uy180'){echo'selected="selected"';} ?>>向上移动180像素</option>
                            <option value="june-box-uy190" <? if($_POST['css3ModeY1']=='june-box-uy190'){echo'selected="selected"';} ?>>向上移动190像素</option>
                            <option value="june-box-uy200" <? if($_POST['css3ModeY1']=='june-box-uy200'){echo'selected="selected"';} ?>>向上移动200像素</option>
                            <option value="june-box-uy210" <? if($_POST['css3ModeY1']=='june-box-uy210'){echo'selected="selected"';} ?>>向上移动210像素</option>
                            <option value="june-box-uy220" <? if($_POST['css3ModeY1']=='june-box-uy220'){echo'selected="selected"';} ?>>向上移动220像素</option>
                            <option value="june-box-uy230" <? if($_POST['css3ModeY1']=='june-box-uy230'){echo'selected="selected"';} ?>>向上移动230像素</option>
                            <option value="june-box-uy240" <? if($_POST['css3ModeY1']=='june-box-uy240'){echo'selected="selected"';} ?>>向上移动240像素</option>
                            <option value="june-box-uy250" <? if($_POST['css3ModeY1']=='june-box-uy250'){echo'selected="selected"';} ?>>向上移动250像素</option>
                            <option value="june-box-uy260" <? if($_POST['css3ModeY1']=='june-box-uy260'){echo'selected="selected"';} ?>>向上移动260像素</option>
                            <option value="june-box-uy270" <? if($_POST['css3ModeY1']=='june-box-uy270'){echo'selected="selected"';} ?>>向上移动270像素</option>
                            <option value="june-box-uy280" <? if($_POST['css3ModeY1']=='june-box-uy280'){echo'selected="selected"';} ?>>向上移动280像素</option>
                            <option value="june-box-uy290" <? if($_POST['css3ModeY1']=='june-box-uy290'){echo'selected="selected"';} ?>>向上移动290像素</option>
                            <option value="june-box-uy300" <? if($_POST['css3ModeY1']=='june-box-uy300'){echo'selected="selected"';} ?>>向上移动300像素</option>
                            <option value="june-box-uy310" <? if($_POST['css3ModeY1']=='june-box-uy310'){echo'selected="selected"';} ?>>向上移动310像素</option>
                            <option value="june-box-uy320" <? if($_POST['css3ModeY1']=='june-box-uy320'){echo'selected="selected"';} ?>>向上移动320像素</option>
                            <option value="june-box-uy330" <? if($_POST['css3ModeY1']=='june-box-uy330'){echo'selected="selected"';} ?>>向上移动330像素</option>
                            <option value="june-box-uy340" <? if($_POST['css3ModeY1']=='june-box-uy340'){echo'selected="selected"';} ?>>向上移动340像素</option>
                            <option value="june-box-uy350" <? if($_POST['css3ModeY1']=='june-box-uy350'){echo'selected="selected"';} ?>>向上移动350像素</option>
                            <option value="june-box-uy360" <? if($_POST['css3ModeY1']=='june-box-uy360'){echo'selected="selected"';} ?>>向上移动360像素</option>
                            <option value="june-box-uy370" <? if($_POST['css3ModeY1']=='june-box-uy370'){echo'selected="selected"';} ?>>向上移动370像素</option>
                            <option value="june-box-uy380" <? if($_POST['css3ModeY1']=='june-box-uy380'){echo'selected="selected"';} ?>>向上移动380像素</option>
                            <option value="june-box-uy390" <? if($_POST['css3ModeY1']=='june-box-uy390'){echo'selected="selected"';} ?>>向上移动390像素</option>
                            <option value="june-box-uy400" <? if($_POST['css3ModeY1']=='june-box-uy400'){echo'selected="selected"';} ?>>向上移动400像素</option>
                            <option value="june-box-uy410" <? if($_POST['css3ModeY1']=='june-box-uy410'){echo'selected="selected"';} ?>>向上移动410像素</option>
                            <option value="june-box-uy420" <? if($_POST['css3ModeY1']=='june-box-uy420'){echo'selected="selected"';} ?>>向上移动420像素</option>
                            <option value="june-box-uy430" <? if($_POST['css3ModeY1']=='june-box-uy430'){echo'selected="selected"';} ?>>向上移动430像素</option>
                            <option value="june-box-uy440" <? if($_POST['css3ModeY1']=='june-box-uy440'){echo'selected="selected"';} ?>>向上移动440像素</option>
                            <option value="june-box-uy450" <? if($_POST['css3ModeY1']=='june-box-uy450'){echo'selected="selected"';} ?>>向上移动450像素</option>
                            <option value="june-box-uy460" <? if($_POST['css3ModeY1']=='june-box-uy460'){echo'selected="selected"';} ?>>向上移动460像素</option>
                            <option value="june-box-uy470" <? if($_POST['css3ModeY1']=='june-box-uy470'){echo'selected="selected"';} ?>>向上移动470像素</option>
                            <option value="june-box-uy480" <? if($_POST['css3ModeY1']=='june-box-uy480'){echo'selected="selected"';} ?>>向上移动480像素</option>
                            <option value="june-box-uy490" <? if($_POST['css3ModeY1']=='june-box-uy490'){echo'selected="selected"';} ?>>向上移动490像素</option>
                            <option value="june-box-uy500" <? if($_POST['css3ModeY1']=='june-box-uy500'){echo'selected="selected"';} ?>>向上移动500像素</option>
                            <option value="june-box-uy510" <? if($_POST['css3ModeY1']=='june-box-uy510'){echo'selected="selected"';} ?>>向上移动510像素</option>
                            <option value="june-box-uy520" <? if($_POST['css3ModeY1']=='june-box-uy520'){echo'selected="selected"';} ?>>向上移动520像素</option>
                            <option value="june-box-uy530" <? if($_POST['css3ModeY1']=='june-box-uy530'){echo'selected="selected"';} ?>>向上移动530像素</option>
                            <option value="june-box-uy540" <? if($_POST['css3ModeY1']=='june-box-uy540'){echo'selected="selected"';} ?>>向上移动540像素</option>
                            <option value="june-box-uy550" <? if($_POST['css3ModeY1']=='june-box-uy550'){echo'selected="selected"';} ?>>向上移动550像素</option>
                            <option value="june-box-uy560" <? if($_POST['css3ModeY1']=='june-box-uy560'){echo'selected="selected"';} ?>>向上移动560像素</option>
                            <option value="june-box-uy570" <? if($_POST['css3ModeY1']=='june-box-uy570'){echo'selected="selected"';} ?>>向上移动570像素</option>
                            <option value="june-box-uy580" <? if($_POST['css3ModeY1']=='june-box-uy580'){echo'selected="selected"';} ?>>向上移动580像素</option>
                            <option value="june-box-uy590" <? if($_POST['css3ModeY1']=='june-box-uy590'){echo'selected="selected"';} ?>>向上移动590像素</option>
                            <option value="june-box-uy600" <? if($_POST['css3ModeY1']=='june-box-uy600'){echo'selected="selected"';} ?>>向上移动600像素</option>
                            <option value="june-box-uy610" <? if($_POST['css3ModeY1']=='june-box-uy610'){echo'selected="selected"';} ?>>向上移动610像素</option>
                            <option value="june-box-uy620" <? if($_POST['css3ModeY1']=='june-box-uy620'){echo'selected="selected"';} ?>>向上移动620像素</option>
                           <option value="june-box-dy5" <? if($_POST['css3ModeY1']=='june-box-dy5'){echo'selected="selected"';} ?>>向下移动5像素</option>
							<option value="june-box-dy10" <? if($_POST['css3ModeY1']=='june-box-dy10'){echo'selected="selected"';} ?>>向下移动10像素</option>
							<option value="june-box-dy15" <? if($_POST['css3ModeY1']=='june-box-dy15'){echo'selected="selected"';} ?>>向下移动15像素</option>
                            <option value="june-box-dy20" <? if($_POST['css3ModeY1']=='june-box-dy20'){echo'selected="selected"';} ?>>向下移动20像素</option>
                            <option value="june-box-dy30" <? if($_POST['css3ModeY1']=='june-box-dy30'){echo'selected="selected"';} ?>>向下移动30像素</option>
                            <option value="june-box-dy40" <? if($_POST['css3ModeY1']=='june-box-dy40'){echo'selected="selected"';} ?>>向下移动40像素</option>
                            <option value="june-box-dy50" <? if($_POST['css3ModeY1']=='june-box-dy50'){echo'selected="selected"';} ?>>向下移动50像素</option>
                            <option value="june-box-dy60" <? if($_POST['css3ModeY1']=='june-box-dy60'){echo'selected="selected"';} ?>>向下移动60像素</option>
                            <option value="june-box-dy70" <? if($_POST['css3ModeY1']=='june-box-dy70'){echo'selected="selected"';} ?>>向下移动70像素</option>
                            <option value="june-box-dy80" <? if($_POST['css3ModeY1']=='june-box-dy80'){echo'selected="selected"';} ?>>向下移动80像素</option>
                            <option value="june-box-dy90" <? if($_POST['css3ModeY1']=='june-box-dy90'){echo'selected="selected"';} ?>>向下移动90像素</option>
                            <option value="june-box-dy100" <? if($_POST['css3ModeY1']=='june-box-dy100'){echo'selected="selected"';} ?>>向下移动100像素</option>
                            <option value="june-box-dy110" <? if($_POST['css3ModeY1']=='june-box-dy110'){echo'selected="selected"';} ?>>向下移动110像素</option>
                            <option value="june-box-dy120" <? if($_POST['css3ModeY1']=='june-box-dy120'){echo'selected="selected"';} ?>>向下移动120像素</option>
                            <option value="june-box-dy130" <? if($_POST['css3ModeY1']=='june-box-dy130'){echo'selected="selected"';} ?>>向下移动130像素</option>
                            <option value="june-box-dy140" <? if($_POST['css3ModeY1']=='june-box-dy140'){echo'selected="selected"';} ?>>向下移动140像素</option>
                            <option value="june-box-dy150" <? if($_POST['css3ModeY1']=='june-box-dy150'){echo'selected="selected"';} ?>>向下移动150像素</option>
                            <option value="june-box-dy160" <? if($_POST['css3ModeY1']=='june-box-dy160'){echo'selected="selected"';} ?>>向下移动160像素</option>
                            <option value="june-box-dy170" <? if($_POST['css3ModeY1']=='june-box-dy170'){echo'selected="selected"';} ?>>向下移动170像素</option>
                            <option value="june-box-dy180" <? if($_POST['css3ModeY1']=='june-box-dy180'){echo'selected="selected"';} ?>>向下移动180像素</option>
                            <option value="june-box-dy190" <? if($_POST['css3ModeY1']=='june-box-dy190'){echo'selected="selected"';} ?>>向下移动190像素</option>
                            <option value="june-box-dy200" <? if($_POST['css3ModeY1']=='june-box-dy200'){echo'selected="selected"';} ?>>向下移动200像素</option>
                            <option value="june-box-dy210" <? if($_POST['css3ModeY1']=='june-box-dy210'){echo'selected="selected"';} ?>>向下移动210像素</option>
                            <option value="june-box-dy220" <? if($_POST['css3ModeY1']=='june-box-dy220'){echo'selected="selected"';} ?>>向下移动220像素</option>
                            <option value="june-box-dy230" <? if($_POST['css3ModeY1']=='june-box-dy230'){echo'selected="selected"';} ?>>向下移动230像素</option>
                            <option value="june-box-dy240" <? if($_POST['css3ModeY1']=='june-box-dy240'){echo'selected="selected"';} ?>>向下移动240像素</option>
                            <option value="june-box-dy250" <? if($_POST['css3ModeY1']=='june-box-dy250'){echo'selected="selected"';} ?>>向下移动250像素</option>
                            <option value="june-box-dy260" <? if($_POST['css3ModeY1']=='june-box-dy260'){echo'selected="selected"';} ?>>向下移动260像素</option>
                            <option value="june-box-dy270" <? if($_POST['css3ModeY1']=='june-box-dy270'){echo'selected="selected"';} ?>>向下移动270像素</option>
                            <option value="june-box-dy280" <? if($_POST['css3ModeY1']=='june-box-dy280'){echo'selected="selected"';} ?>>向下移动280像素</option>
                            <option value="june-box-dy290" <? if($_POST['css3ModeY1']=='june-box-dy290'){echo'selected="selected"';} ?>>向下移动290像素</option>
                            <option value="june-box-dy300" <? if($_POST['css3ModeY1']=='june-box-dy300'){echo'selected="selected"';} ?>>向下移动300像素</option>
                            <option value="june-box-dy310" <? if($_POST['css3ModeY1']=='june-box-dy310'){echo'selected="selected"';} ?>>向下移动310像素</option>
                            <option value="june-box-dy320" <? if($_POST['css3ModeY1']=='june-box-dy320'){echo'selected="selected"';} ?>>向下移动320像素</option>
                            <option value="june-box-dy330" <? if($_POST['css3ModeY1']=='june-box-dy330'){echo'selected="selected"';} ?>>向下移动330像素</option>
                            <option value="june-box-dy340" <? if($_POST['css3ModeY1']=='june-box-dy340'){echo'selected="selected"';} ?>>向下移动340像素</option>
                            <option value="june-box-dy350" <? if($_POST['css3ModeY1']=='june-box-dy350'){echo'selected="selected"';} ?>>向下移动350像素</option>
                            <option value="june-box-dy360" <? if($_POST['css3ModeY1']=='june-box-dy360'){echo'selected="selected"';} ?>>向下移动360像素</option>
                            <option value="june-box-dy370" <? if($_POST['css3ModeY1']=='june-box-dy370'){echo'selected="selected"';} ?>>向下移动370像素</option>
                            <option value="june-box-dy380" <? if($_POST['css3ModeY1']=='june-box-dy380'){echo'selected="selected"';} ?>>向下移动380像素</option>
                            <option value="june-box-dy390" <? if($_POST['css3ModeY1']=='june-box-dy390'){echo'selected="selected"';} ?>>向下移动390像素</option>
                            <option value="june-box-dy400" <? if($_POST['css3ModeY1']=='june-box-dy400'){echo'selected="selected"';} ?>>向下移动400像素</option>
                            <option value="june-box-dy410" <? if($_POST['css3ModeY1']=='june-box-dy410'){echo'selected="selected"';} ?>>向下移动410像素</option>
                            <option value="june-box-dy420" <? if($_POST['css3ModeY1']=='june-box-dy420'){echo'selected="selected"';} ?>>向下移动420像素</option>
                            <option value="june-box-dy430" <? if($_POST['css3ModeY1']=='june-box-dy430'){echo'selected="selected"';} ?>>向下移动430像素</option>
                            <option value="june-box-dy440" <? if($_POST['css3ModeY1']=='june-box-dy440'){echo'selected="selected"';} ?>>向下移动440像素</option>
                            <option value="june-box-dy450" <? if($_POST['css3ModeY1']=='june-box-dy450'){echo'selected="selected"';} ?>>向下移动450像素</option>
                            <option value="june-box-dy460" <? if($_POST['css3ModeY1']=='june-box-dy460'){echo'selected="selected"';} ?>>向下移动460像素</option>
                            <option value="june-box-dy470" <? if($_POST['css3ModeY1']=='june-box-dy470'){echo'selected="selected"';} ?>>向下移动470像素</option>
                            <option value="june-box-dy480" <? if($_POST['css3ModeY1']=='june-box-dy480'){echo'selected="selected"';} ?>>向下移动480像素</option>
                            <option value="june-box-dy490" <? if($_POST['css3ModeY1']=='june-box-dy490'){echo'selected="selected"';} ?>>向下移动490像素</option>
                            <option value="june-box-dy500" <? if($_POST['css3ModeY1']=='june-box-dy500'){echo'selected="selected"';} ?>>向下移动500像素</option>
                            <option value="june-box-dy510" <? if($_POST['css3ModeY1']=='june-box-dy510'){echo'selected="selected"';} ?>>向下移动510像素</option>
                            <option value="june-box-dy520" <? if($_POST['css3ModeY1']=='june-box-dy520'){echo'selected="selected"';} ?>>向下移动520像素</option>
                            <option value="june-box-dy530" <? if($_POST['css3ModeY1']=='june-box-dy530'){echo'selected="selected"';} ?>>向下移动530像素</option>
                            <option value="june-box-dy540" <? if($_POST['css3ModeY1']=='june-box-dy540'){echo'selected="selected"';} ?>>向下移动540像素</option>
                            <option value="june-box-dy550" <? if($_POST['css3ModeY1']=='june-box-dy550'){echo'selected="selected"';} ?>>向下移动550像素</option>
                            <option value="june-box-dy560" <? if($_POST['css3ModeY1']=='june-box-dy560'){echo'selected="selected"';} ?>>向下移动560像素</option>
                            <option value="june-box-dy570" <? if($_POST['css3ModeY1']=='june-box-dy570'){echo'selected="selected"';} ?>>向下移动570像素</option>
                            <option value="june-box-dy580" <? if($_POST['css3ModeY1']=='june-box-dy580'){echo'selected="selected"';} ?>>向下移动580像素</option>
                            <option value="june-box-dy590" <? if($_POST['css3ModeY1']=='june-box-dy590'){echo'selected="selected"';} ?>>向下移动590像素</option>
                            <option value="june-box-dy600" <? if($_POST['css3ModeY1']=='june-box-dy600'){echo'selected="selected"';} ?>>向下移动600像素</option>
                            <option value="june-box-dy610" <? if($_POST['css3ModeY1']=='june-box-dy610'){echo'selected="selected"';} ?>>向下移动610像素</option>
                            <option value="june-box-dy620" <? if($_POST['css3ModeY1']=='june-box-dy620'){echo'selected="selected"';} ?>>向下移动620像素</option>
                        </select>
					</li>
					<li>
						<label for="oths_css3Mode1">CSS3特效：</label>
						<select id="oths_css3Mode1" name="css3Mode1">
							<option value="" <? if($_POST['css3Mode1']==''){echo'selected="selected"';} ?>>无效果</option>
							<option value="june-box-fx" <? if($_POST['css3Mode1']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
							<option value="june-box-fy" <? if($_POST['css3Mode1']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
							<option value="june-box-fxy" <? if($_POST['css3Mode1']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
							<option value="june-box-fxr360" <? if($_POST['css3Mode1']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
							<option value="june-box-fxr720" <? if($_POST['css3Mode1']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
							<option value="june-box-fxfr360" <? if($_POST['css3Mode1']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
							<option value="june-box-fxfr720" <? if($_POST['css3Mode1']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
							<option value="june-box-fyr360" <? if($_POST['css3Mode1']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
							<option value="june-box-fyr720" <? if($_POST['css3Mode1']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
							<option value="june-box-fyfr360" <? if($_POST['css3Mode1']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
							<option value="june-box-fyfr720" <? if($_POST['css3Mode1']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
							<option value="june-box-sf02" <? if($_POST['css3Mode1']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
							<option value="june-box-sf04" <? if($_POST['css3Mode1']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
							<option value="june-box-sf05" <? if($_POST['css3Mode1']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
							<option value="june-box-sf06" <? if($_POST['css3Mode1']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
							<option value="june-box-sf08" <? if($_POST['css3Mode1']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
							<option value="june-box-sf09" <? if($_POST['css3Mode1']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
							<option value="june-box-sf095" <? if($_POST['css3Mode1']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
							<option value="june-box-sf098" <? if($_POST['css3Mode1']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
							<option value="june-box-sf102" <? if($_POST['css3Mode1']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
							<option value="june-box-sf105" <? if($_POST['css3Mode1']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
							<option value="june-box-sf110" <? if($_POST['css3Mode1']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
							<option value="june-box-sf120" <? if($_POST['css3Mode1']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
							<option value="june-box-sf150" <? if($_POST['css3Mode1']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
							<option value="june-box-sf180" <? if($_POST['css3Mode1']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
							<option value="june-box-sf200" <? if($_POST['css3Mode1']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
                            <option value="june-box-r10" <? if($_POST['css3Mode1']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
                            <option value="june-box-r20" <? if($_POST['css3Mode1']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
                            <option value="june-box-r30" <? if($_POST['css3Mode1']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
                            <option value="june-box-r40" <? if($_POST['css3Mode1']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
                            <option value="june-box-r50" <? if($_POST['css3Mode1']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
                            <option value="june-box-r60" <? if($_POST['css3Mode1']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
                            <option value="june-box-r70" <? if($_POST['css3Mode1']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
                            <option value="june-box-r80" <? if($_POST['css3Mode1']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
                            <option value="june-box-r90" <? if($_POST['css3Mode1']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
                            <option value="june-box-r120" <? if($_POST['css3Mode1']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
							<option value="june-box-r180" <? if($_POST['css3Mode1']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
							<option value="june-box-r270" <? if($_POST['css3Mode1']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
							<option value="june-box-r360" <? if($_POST['css3Mode1']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
							<option value="june-box-r720" <? if($_POST['css3Mode1']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
                            <option value="june-box-fr10" <? if($_POST['css3Mode1']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
                            <option value="june-box-fr20" <? if($_POST['css3Mode1']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
                            <option value="june-box-fr30" <? if($_POST['css3Mode1']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
                            <option value="june-box-fr40" <? if($_POST['css3Mode1']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
                            <option value="june-box-fr50" <? if($_POST['css3Mode1']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
                            <option value="june-box-fr60" <? if($_POST['css3Mode1']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
                            <option value="june-box-fr70" <? if($_POST['css3Mode1']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
                            <option value="june-box-fr80" <? if($_POST['css3Mode1']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
                            <option value="june-box-fr90" <? if($_POST['css3Mode1']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
                            <option value="june-box-fr120" <? if($_POST['css3Mode1']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
							<option value="june-box-fr180" <? if($_POST['css3Mode1']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
							<option value="june-box-fr270" <? if($_POST['css3Mode1']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
							<option value="june-box-fr360" <? if($_POST['css3Mode1']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
							<option value="june-box-fr720" <? if($_POST['css3Mode1']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
						</select>
					</li>
					<li>
						<label for="oths_characterHoverSpeed">切换文字的动画速度：</label>
						<select id="oths_characterHoverSpeed" name="characterHoverSpeed">
							<option value="" <? if($_POST['characterHoverSpeed']==''){echo'selected="selected"';} ?>>无效果</option>
							<option value="trans02s" <? if($_POST['characterHoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>快速</option>
							<option value="trans05s" <? if($_POST['characterHoverSpeed']=='trans05s'){echo'selected="selected"';} ?>>中速</option>
							<option value="trans1s" <? if($_POST['characterHoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li>
						<label for="oths_hcd1">鼠标经过时显示：</label>
						<div id="oths_hcd1">
							<input type="checkbox" id="oths_hc2" name="borderControl" value="hborder" <? if($_POST['borderControl']=='hborder'){echo'checked="checked"';} ?> />
							<label for="oths_hc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
							<input type="checkbox" id="oths_hc3" name="shadowControl" value="shadowShow" <? if($_POST['shadowControl']=='shadowShow'){echo'checked="checked"';} ?> />
							<label for="oths_hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
							<input type="checkbox" id="oths_hc4" name="outlineControl" value="outlineShow" <? if($_POST['outlineControl']=='outlineShow'){echo'checked="checked"';} ?> />
							<label for="oths_hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
						</div>
					</li>
					<li class="hborder borderControl">
						<label for="oths_hi5">边框颜色：</label>
						<input id="oths_hi5" class="setinput tColorPicker" type="text" title="" name="borderColor" value="<?=$_POST['borderColor']?>" />
					</li>
					<li class="hborder borderControl">
						<label for="oths_hi6">边框粗细：</label>
						<input id="oths_hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=$_POST['borderWidth']?>" />
					</li>
					<li class="hborder borderControl">
						<label for="oths_hi7">边框圆角弧度：</label>
						<input id="oths_hi7" class="setinput" type="text" title="" name="borderRadius" value="<?=$_POST['borderRadius']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="oths_hy4">阴影颜色：</label>
						<input id="oths_hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor" value="<?=$_POST['shadowColor']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="oths_hy3">阴影模糊距离：</label>
						<input id="oths_hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$_POST['shadowBlur']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="oths_hy5">阴影尺寸：</label>
						<input id="oths_hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$_POST['shadowSize']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="oths_hy1">水平阴影距离：</label>
						<input id="oths_hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$_POST['shadowLeft']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="oths_hy2">垂直阴影距离：</label>
						<input id="oths_hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$_POST['shadowTop']?>" />
						<input id="oths_hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=$_POST['shadowStyle']?>" />
					</li>
					<li class="outlineShow outlineControl">
						<label for="oths_hi9">扩展外框颜色：</label>
						<input id="oths_hi9" class="setinput tColorPicker" type="text" title="" name="outlineColor" value="<?=$_POST['outlineColor']?>" />
					</li>
					<li class="outlineShow outlineControl">
						<label for="oths_outlineWidth">扩展外框粗细：</label>
						<select id="oths_outlineWidth" name="outlineWidth">
							<option value="juneol2" <? if($_POST['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
							<option value="juneol1" <? if($_POST['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
							<option value="juneol" <? if($_POST['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
						</select>
					</li>
					<li class="outlineShow outlineControl">
						<label for="oths_outlineSpeed">扩展外框动画速度：</label>
						<select id="oths_outlineSpeed" name="outlineSpeed">
							<option value="" <? if($_POST['outlineSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
							<option value="trans01s" <? if($_POST['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
							<option value="trans02s" <? if($_POST['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
							<option value="trans05s" <? if($_POST['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
							<option value="trans1s" <? if($_POST['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li class="outlineShow outlineControl">
						<label for="oths_hi8">扩展外框阴影颜色：</label>
						<input id="oths_hi8" class="setinput tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$_POST['outlineShadowColor']?>" />
					</li>
					<li class="hnborder borderControl inputAccording"><i></i><span style="padding:0 10px;">文字下边线</span><em></em></li>
					<li class="hnborder borderControl">
						<label for="oths_rd2">文字下边线：</label>
						<div id="oths_rd2">
							<input type="radio" id="oths_r3" name="characterUnderLine" value="on" <? if($_POST['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
							<label for="oths_r3">显示</label>
							<input type="radio" id="oths_r4" name="characterUnderLine" value="off" <? if($_POST['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
							<label for="oths_r4" style="width: 70px;">不显示</label>
						</div>
					</li>
					<li class="hnborder borderControl">
						<label for="oths_characterUnderLineStyle">下边线样式：</label>
						<select id="oths_characterUnderLineStyle" name="characterUnderLineStyle">
							<option value="solid" <? if($_POST['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
							<option value="dotted" <? if($_POST['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
						</select>
					</li>
					<li class="hnborder borderControl">
						<label for="oths_characterUnderLineWeight">下边线粗细：</label>
						<select id="oths_characterUnderLineWeight" name="characterUnderLineWeight">
							<option value="1" <? if($_POST['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
							<option value="2" <? if($_POST['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
							<option value="3" <? if($_POST['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
							<option value="4" <? if($_POST['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
							<option value="5" <? if($_POST['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
						</select>
					</li>
					<li class="hnborder borderControl">
						<label for="oths_i8">下边线颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterUnderLineColor']?>;"></div></div></div>
							<input id="oths_i8" class="setinputcolor tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=$_POST['characterUnderLineColor']?>" />
						</div>
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
	$("#oths_tForm input,#oths_tForm .setform > li > div").buttonset();
	$("#oths_tForm select").fontselectmenu();
	$("#oths_tForm .setform").tooltip({
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
	var i2Val = "", i2Val1 = "";
	"<?=$_POST['characterModeHover']?>" == "text" ? ($("#oths_l2").html("文字内容："),i2Val = $("#oths_i2").val()) : ($("#oths_l2").html("宝贝链接："),i2Val1 = $("#oths_i2").val());
	("<?=$_POST['characterModeHover']?>" == "price" ||  "<?=$_POST['characterModeHover']?>" == "_price") ? $("#oths_tForm .price_price").show() : $("#oths_tForm .price_price").hide();
	$( "#oths_characterMode" ).fontselectmenu("destroy").selectmenu({
	  change: function( event, ui ) {
		var val = $(this).val();
		if($("#oths_i2").attr("data-v-type") == "text") {
			i2Val = $("#oths_i2").val();
		} else {
			i2Val1 = $("#oths_i2").val();
		}
		if(val == "text") {
			$("#oths_l2").html("文字内容：");
			$("#oths_i2").attr("data-v-type", "text").val(i2Val);
		} else {
			$("#oths_l2").html("宝贝链接：");
			$("#oths_i2").attr("data-v-type", "other").val(i2Val1);
		}
		if(val == "price" || val == "_price") {
			$("#oths_tForm .price_price").show()
		} else {
			$("#oths_tForm .price_price").hide()
		}
	  }
	});
	$("#oths_tForm .characterLineMulti").hide();
	"no" == "yes" && ( $("#oths_tForm .characterLineMultiNo").hide(), $("#oths_tForm .characterLineMulti").show() );
	$("#oths_ird1").children("input[name='characterLineMulti']").click(function() {
		var val = $(this).val();
		if(val == "yes") {
			$("#oths_tForm .characterLineMultiNo").hide();
			$("#oths_tForm .characterLineMulti").show();
		} else {
			$("#oths_tForm .characterLineMulti").hide();
			$("#oths_tForm .characterLineMultiNo").show();
			var tempVal1 = $( "#oths_characterMode" ).val();
			if(tempVal1 == "price" || tempVal1 == "_price") {
				$("#oths_tForm .price_price").show()
			} else {
				$("#oths_tForm .price_price").hide()
			}
		}
	});
	
	$("#oths_tForm .borderControl,#oths_tForm .shadowControl,#oths_tForm .outlineControl").hide();
	
	$("#oths_tForm .borderControl1,#oths_tForm .shadowControl1").hide();
	"<?=$_POST['borderControl']?>"=="hborder" ? ($("#oths_tForm .borderControl").hide(),$("#oths_tForm .hborder").show()) : ($("#oths_tForm .borderControl").hide(),$("#oths_tForm .hnborder").show());
	"<?=$_POST['shadowControl']?>"=="shadowShow" && $("#oths_tForm .shadowControl").show();
	"<?=$_POST['outlineControl']?>"=="outlineShow" && $("#oths_tForm .outlineControl").show();
	
	
	"<?=$_POST['borderControl1']?>"=="hborder1" && $("#oths_tForm .borderControl1").show();
	"<?=$_POST['shadowControl1']?>"=="shadowShow1" && $("#oths_tForm .shadowControl1").show();
	
	
	$("#oths_hc2").click(function() {
		if(!!$(this).prop("checked")) {
			$("#oths_tForm .borderControl").hide();
			$("#oths_tForm .hborder").show();
		} else {
			$("#oths_tForm .borderControl").hide();
			$("#oths_tForm .hnborder").show();
		}
	});
	$("#oths_hc3").click(function() {
		if(!!$(this).prop("checked")) {
			$("#oths_tForm .shadowControl").show();
		} else {
			$("#oths_tForm .shadowControl").hide();
		}
	});
	$("#oths_hc4").click(function() {
		if(!!$(this).prop("checked")) {
			$("#oths_tForm .outlineControl").show();
		} else {
			$("#oths_tForm .outlineControl").hide();
		}
	});
	$("#oths_bc2").click(function() {
		if(!!$(this).prop("checked")) {
			$("#oths_tForm .borderControl1").show();
		} else {
			$("#oths_tForm .borderControl1").hide();
		}
	});
	$("#oths_bc3").click(function() {
		if(!!$(this).prop("checked")) {
			$("#oths_tForm .shadowControl1").show();
		} else {
			$("#oths_tForm .shadowControl1").hide();
		}
	});
});
</script>