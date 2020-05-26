<form id="tForm" form-data="jcb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">默认样式</a></li>
		<li><a href="#tabs-2">鼠标经过变换</a></li>
		<li><a href="#tabs-3">强调动画</a></li>
		<li><a href="#tabs-96">弹出层设置</a></li>
		<li><a href="#tabs-99" style="display: none">视频教程</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li style="display: none;">
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
<li>
	<label for="characterMode">文本内容模式：</label>
	<select id="characterMode" name="characterMode">
		<option value="text" <? if($_POST['characterMode']=='text'){echo'selected="selected"';} ?>>自定义内容</option>
		<option value="price" <? if($_POST['characterMode']=='price'){echo'selected="selected"';} ?>>宝贝原价</option>
		<option value="_price" <? if($_POST['characterMode']=='_price'){echo'selected="selected"';} ?>>宝贝现价</option>
		<!--<option value="sale" <? if($_POST['characterMode']=='sale'){echo'selected="selected"';} ?>>宝贝销量</option>-->
		<option value="title" <? if($_POST['characterMode']=='title'){echo'selected="selected"';} ?>>宝贝标题</option>
	</select>
</li>
<li class="characterModeNoText" style="display: none;">
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
	<label for="i3">文字链接：</label>
	<input id="i3" class="setinput" type="text" title="请输入文字链接，留空则为无链接的纯文字" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
	<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" checked="checked" <? if($_POST['hrefMode']=='_blank'){echo'checked="checked"';} ?>/>
	<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
</li>
<li>
	<label for="jdhi_src">文字背景图片：</label>
	<input id="jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="characterBgSrc" value="<?=$_POST['characterBgSrc']?>" />
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
	<label>背景图片位置：</label>
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
</script>					
					<li>
						<label for="bcd1">默认显示：</label>
						<div id="bcd1">
							<input type="checkbox" id="bc2" name="borderControl1" value="hborder1" <? if($_POST['borderControl1']=='hborder1'){echo'checked="checked"';} ?> />
							<label for="bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
							<input type="checkbox" id="bc3" name="shadowControl1" value="shadowShow1" <? if($_POST['shadowControl1']=='shadowShow1'){echo'checked="checked"';} ?> />
							<label for="bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
						</div>
					</li>
					<li class="hborder1 borderControl1">
						<label for="sdtzBorderColor1">边框->边框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['borderColor1']?>;"></div></div></div>
							<input id="sdtzBorderColor1" class="setinputcolor tColorPicker" type="text" title="" name="borderColor1" value="<?=$_POST['borderColor1']?>" />
						</div>
					</li>
					<li class="hborder1 borderControl1">
						<label for="bi6">边框粗细：</label>
						<input id="bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$_POST['borderWidth1']?>" />
					</li>
					<li class="hborder1 borderControl1">
						<label for="bi7">圆角弧度：</label>
						<input id="bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$_POST['borderRadius1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="sdtzShadowColor1">阴影->阴影颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['shadowColor1']?>;"></div></div></div>
							<input id="sdtzShadowColor1" class="setinputcolor tColorPicker" type="text" title="" name="shadowColor1" value="<?=$_POST['shadowColor1']?>" />
						</div>
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="hy3">模糊距离：</label>
						<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$_POST['shadowBlur1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="hy5">阴影尺寸：</label>
						<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$_POST['shadowSize1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="hy1">水平距离：</label>
						<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$_POST['shadowLeft1']?>" />
					</li>
					<li class="shadowShow1 shadowControl1">
						<label for="by2">垂直距离：</label>
						<input id="by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$_POST['shadowTop1']?>" />
						<input id="bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="" />
					</li>
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-2">
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
<li>
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
	<input id="jdhi_src_hover" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="characterBgSrcHover" value="<?=$_POST['characterBgSrcHover']?>" />
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
	<label>背景图片位置：</label>
	<span id="allwzset_imgBgpHover_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
	<input id="allwzset_imgBgpHover" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgpHover" value="<?=$bgp?>" />
	<label style="width:84px;" class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src_hover,allwzset_imgBgpHover,textviewbgcolor_hover,">手动调整<i class="popsd"></i></label>
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
	<label for="characterHoverSpeed">切换文字速度：</label>
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
						<label for="hcd1">鼠标经过时显示：</label>
						<div id="hcd1">
							<input type="checkbox" id="hc2" name="borderControl" value="hborder" <? if($_POST['borderControl']=='hborder'){echo'checked="checked"';} ?> />
							<label for="hc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
							<input type="checkbox" id="hc3" name="shadowControl" value="shadowShow" <? if($_POST['shadowControl']=='shadowShow'){echo'checked="checked"';} ?> />
							<label for="hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
							<input type="checkbox" id="hc4" name="outlineControl" value="outlineShow" <? if($_POST['outlineControl']=='outlineShow'){echo'checked="checked"';} ?> />
							<label for="hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
						</div>
					</li>
					<li class="hborder borderControl">
						<label for="sdtzBorderColor">边框->边框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['borderColor']?>;"></div></div></div>
							<input id="sdtzBorderColor" class="setinputcolor tColorPicker" type="text" title="" name="borderColor" value="<?=$_POST['borderColor']?>" />
						</div>
					</li>
					<li class="hborder borderControl">
						<label for="hi6">边框粗细：</label>
						<input id="hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=$_POST['borderWidth']?>" />
					</li>
					<li style="display:none;">
						<label for="hi7">圆角弧度：</label>
						<input id="hi7" class="setinput" type="text" title="" name="borderRadius" value="<?=$_POST['borderRadius']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="sdtzShadowColor">阴影->阴影颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['shadowColor']?>;"></div></div></div>
							<input id="sdtzShadowColor" class="setinputcolor tColorPicker" type="text" title="" name="shadowColor" value="<?=$_POST['shadowColor']?>" />
						</div>
					</li>
					<li class="shadowShow shadowControl">
						<label for="hy3">模糊距离：</label>
						<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$_POST['shadowBlur']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="hy5">阴影尺寸：</label>
						<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$_POST['shadowSize']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="hy1">水平距离：</label>
						<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$_POST['shadowLeft']?>" />
					</li>
					<li class="shadowShow shadowControl">
						<label for="hy2">垂直距离：</label>
						<input id="hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$_POST['shadowTop']?>" />
						<input id="hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=$_POST['shadowStyle']?>" />
					</li>
					<li class="outlineShow outlineControl">
						<label for="sdtzOutlineColor">扩展->外框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['outlineColor']?>;"></div></div></div>
							<input id="sdtzOutlineColor" class="setinputcolor tColorPicker" type="text" title="" name="outlineColor" value="<?=$_POST['outlineColor']?>" />
						</div>
					</li>
					<li class="outlineShow outlineControl">
						<label for="outlineWidth">外框粗细：</label>
						<select id="outlineWidth" name="outlineWidth">
							<option value="juneol2" <? if($_POST['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
							<option value="juneol1" <? if($_POST['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
							<option value="juneol" <? if($_POST['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
						</select>
					</li>
					<li class="outlineShow outlineControl">
						<label for="outlineSpeed">动画速度：</label>
						<select id="outlineSpeed" name="outlineSpeed">
							<option value="" >立即显示</option>
							<option value="trans01s" <? if($_POST['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
							<option value="trans02s" <? if($_POST['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
							<option value="trans05s" <? if($_POST['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
							<option value="trans1s" <? if($_POST['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li class="outlineShow outlineControl">
						<label for="sdtzOutlineShadowColor">阴影颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['outlineShadowColor']?>;"></div></div></div>
							<input id="sdtzOutlineShadowColor" class="setinputcolor tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$_POST['outlineShadowColor']?>" />
						</div>
					</li>
					<li class="hnborder borderControl inputAccording"><i></i><span style="padding:0 10px;">文字下边线</span><em></em></li>
					<li class="hnborder borderControl">
						<label for="rd2">文字下边线：</label>
						<div id="rd2">
							<input type="radio" id="r3" name="characterUnderLine" value="on" <? if($_POST['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
							<label for="r3">显示</label>
							<input type="radio" id="r4" name="characterUnderLine" value="off" <? if($_POST['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
							<label for="r4" style="width: 70px;">不显示</label>
						</div>
					</li>
					<li class="hnborder borderControl">
						<label for="characterUnderLineStyle">下边线样式：</label>
						<select id="characterUnderLineStyle" name="characterUnderLineStyle">
							<option value="solid" <? if($_POST['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
							<option value="dotted" <? if($_POST['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
						</select>
					</li>
					<li class="hnborder borderControl">
						<label for="characterUnderLineWeight">下边线粗细：</label>
						<select id="characterUnderLineWeight" name="characterUnderLineWeight">
							<option value="1" <? if($_POST['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
							<option value="2" <? if($_POST['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
							<option value="3" <? if($_POST['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
							<option value="4" <? if($_POST['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
							<option value="5" <? if($_POST['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
						</select>
					</li>
					<li class="hnborder borderControl">
						<label for="sdtzCharacterUnderLineColor">下边线颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterUnderLineColor']?>;"></div></div></div>
							<input id="sdtzCharacterUnderLineColor" class="setinputcolor tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=$_POST['characterUnderLineColor']?>" />
						</div>
					</li>
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
					<li style="height:auto;margin-bottom:10px;float:left;">
						<label for="tt_i1">动画效果：</label>
						<div class="animselect">
                            <div class="none<? if($_POST['animType']==''){echo' active';}?>" data-val=""><i><em></em></i>无效果</div>
							<div class="shakex<? if($_POST['animType']=='june-x-shake'){echo' active';}?>" data-val="june-x-shake"><i><em></em></i>左右抖动</div>
							<div class="shakey<? if($_POST['animType']=='june-y-shake'){echo' active';}?>" data-val="june-y-shake"><i><em></em></i>上下抖动</div>
							<div class="shaker<? if($_POST['animType']=='june-r-shake'){echo' active';}?>" data-val="june-r-shake"><i><em></em></i>旋转摆动</div>
							<div class="shakes<? if($_POST['animType']=='june-s-shake'){echo' active';}?>" data-val="june-s-shake"><i><em></em></i>弹性缩放</div>
							<div class="shaken<? if($_POST['animType']=='june-n-shake'){echo' active';}?>" data-val="june-n-shake"><i><em></em></i>弹性果冻</div>
						</div>
						<input type="hidden" name="animType" id="animType" value="<?=$_POST['animType']?>">
					</li>
					<li style="clear:both;">
						<label for="dhfd12">动画幅度：</label>
						<div id="dhfd12">
                            <input type="radio" id="dhfdr1" name="animRange" value="-s" <? if($_POST['animRange']=='-s'){echo'checked="checked"';} ?> />
							<label for="dhfdr1" title="">弱</label>
							<input type="radio" id="dhfdr2" name="animRange" value="-m" <? if($_POST['animRange']=='-m'){echo'checked="checked"';} ?> />
							<label for="dhfdr2" title="">中</label>
							<input type="radio" id="dhfdr3" name="animRange" value="-l" <? if($_POST['animRange']=='-l'){echo'checked="checked"';} ?> />
							<label for="dhfdr3" title="">强</label>
						</div>
					</li>
					<li>
						<label for="animSpeed">动画速度：</label>
						<select id="animSpeed" name="animSpeed">
							<option value="0s" <? if($_POST['animSpeed']=='0s'){echo'selected="selected"';}?>>立即显示</option>
                    <?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=8;$i<=20;$i=$i+1){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=30;$i<=300;$i=$i+10){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=320;$i<=600;$i=$i+20){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					?>    
					</select>
					</li>
				</ul>
			</div>
			<div id="tabs-96"><ul class="setform">
	<li>
		<label for="pSwitch">弹出层开关：</label>
		<div id="pSwitch">
			<input type="radio" id="pSwitch_1" name="popupConfig.pSwitch" value="yes" <? if($_POST['popupConfig']['pSwitch']=='yes'){echo'checked="checked"';} ?> />
			<label for="pSwitch_1" title="开启鼠标经过弹出层">开启</label>
			<input type="radio" id="pSwitch_2" name="popupConfig.pSwitch" value="no" <? if($_POST['popupConfig']['pSwitch']=='no'){echo'checked="checked"';} ?>>
			<label for="pSwitch_2" title="关闭鼠标经过弹出层">关闭</label>
		</div>
	</li>
    <li style="display:none;">
        <label for="pTriggerType">触发方式：</label>
        <div id="pTriggerType">
            <input type="radio" id="pTriggerType_1" name="popupConfig.pTriggerType" value="mouse" <? if($_POST['popupConfig']['pTriggerType']=='mouse'){echo'checked="checked"';} ?> />
            <label for="pTriggerType_1" title="鼠标经过触点后触发弹出层">鼠标经过</label>
            <input type="radio" id="pTriggerType_2" name="popupConfig.pTriggerType" value="click" <? if($_POST['popupConfig']['pTriggerType']=='click'){echo'checked="checked"';} ?>>
            <label for="pTriggerType_2" title="鼠标点击触点后触发弹出层">鼠标点击<i class="popsd"></i></label>
        </div>
	</li>
	<li class="triggerTypeClick" style="display:none;">
		<label for="pClickToggle">点击类型：</label>
		<div id="pClickToggle">
			<input type="radio" id="pClickToggle_2" name="popupConfig.pClickToggle" value="yes" <? if($_POST['popupConfig']['pClickToggle']=='yes'){echo'checked="checked"';} ?>>
			<label for="pClickToggle_2" title="触发之后弹出和关闭交替执行">弹出/关闭</label>
			<input type="radio" id="pClickToggle_1" name="popupConfig.pClickToggle" value="no" <? if($_POST['popupConfig']['pClickToggle']=='no'){echo'checked="checked"';} ?> />
			<label for="pClickToggle_1" title="触发之后只弹出一次">弹出后不消失</label>
		</div>
	</li>
	<li>
		<label for="pAlignType">弹出层对齐方式：</label>
		<div id="pAlignType">
			<input type="radio" id="pAlignType_1" name="popupConfig.pAlignType" value="yes" <? if($_POST['popupConfig']['pAlignType']=='yes'){echo'checked="checked"';} ?> />
			<label for="pAlignType_1" title="选择应用方位和输入偏移量">对齐应用</label>
			<input type="radio" id="pAlignType_2" name="popupConfig.pAlignType" value="no" <? if($_POST['popupConfig']['pAlignType']=='no'){echo'checked="checked"';} ?>>
			<label for="pAlignType_2" title="手动使用鼠标拖拽">手动定位<i class="popsd"></i></label>
		</div>
	</li>
	<li class="" style="display:none;">
		<label for="alignID">选择对齐点应用：</label>
		<select id="alignID" name="popupConfig.alignID">
		<?
		$appIDArray = explode(',',$_POST['appIDArray']);
		$appNameArray = explode(',',$_POST['appNameArray']);
		foreach($appIDArray as $k=>$item){
		   if($item==$_POST['popupConfig']['alignID']){$ssed='selected="selected"';}else{$ssed='';}	
		   echo'<option value="'.$item.'" '.$ssed.'>'.$appNameArray[$k].'</option>';				
			}
		?>
		</select>
	</li>
	<li class="pAlignTypeYes"> <? $popupPosition0=$_POST['popupConfig']['popupPosition'];$popupPosition1=str_replace(",","",$popupPosition0);$popupPosition=str_replace("'","",$popupPosition1);?> 
		<label for="popupPosition">弹出层位置：</label>
		<select id="popupPosition" name="popupConfig.popupPosition">
			<optgroup label="对齐点上方">
                <option value="'tl','bl'" <? if($popupPosition=="tlbl"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
                <option value="'tc','bc'" <? if($popupPosition=="tcbc"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
                <option value="'tr','br'" <? if($popupPosition=="trbr"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
            </optgroup>
            <optgroup label="对齐点右方">
                <option value="'tr','tl'" <? if($popupPosition=="trtl"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
                <option value="'cr','cl'" <? if($popupPosition=="crcl"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
                <option value="'br','bl'" <? if($popupPosition=="brbl"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
            </optgroup>
            <optgroup label="对齐点下方">
                <option value="'br','tr'" <? if($popupPosition=="brtr"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
                <option value="'bc','tc'" <? if($popupPosition=="bctc"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
                <option value="'bl','tl'" <? if($popupPosition=="bltl"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
            </optgroup>
            <optgroup label="对齐点左方">
                <option value="'bl','br'" <? if($popupPosition=="blbr"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
                <option value="'cl','cr'" <? if($popupPosition=="clcr"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
                <option value="'tl','tr'" <? if($popupPosition=="tltr"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
            </optgroup>
            <optgroup label="对齐点覆盖">
                <option value="'tl','tl'" <? if($popupPosition=="tltl"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
                <option value="'tc','tc'" <? if($popupPosition=="tctc"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
                <option value="'tr','tr'" <? if($popupPosition=="trtr"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
                <option value="'cr','cr'" <? if($popupPosition=="crcr"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
                <option value="'br','br'" <? if($popupPosition=="brbr"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
                <option value="'bc','bc'" <? if($popupPosition=="bcbc"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
                <option value="'bl','bl'" <? if($popupPosition=="blbl"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
                <option value="'cl','cl'" <? if($popupPosition=="clcl"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
                <option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="cccc"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
            </optgroup>
		</select>
	</li>
	<li class="pAlignTypeNo">
		<label for="popupPositionButton">手动定位：</label>
		<label id="popupPositionButton" class="btnLabel jDragHandlePopup" data-ids="<?=$_POST['appID']?>">点击设置</label>
	</li>
	<li>
		<label for="ppdsdtz_sapceX">水平偏移：</label>
		<input id="ppdsdtz_sapceX" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="popupConfig.spaceX" value="<?=$_POST['popupConfig']['spaceX']?>" />
	</li>
	<li>
		<label for="ppdsdtz_sapceY">垂直偏移：</label>
		<input id="ppdsdtz_sapceY" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="popupConfig.spaceY" value="<?=$_POST['popupConfig']['spaceY']?>" />
	</li>
	<li style="height:110px;">
		<label for="popupHtml">自定义内容：</label>
		<textarea id="popupHtml" name="popupConfig.popupHtml"><?=stripslashes($_POST['popupConfig']['popupHtml'])?></textarea>
		<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="popupConfig.popupHtml" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
	</li>
	<li>
		<label for="popupCss3Mode">弹出特效：</label>
		<select class="popslem" id="popupCss3Mode" name="popupConfig.css3Mode">
			<option value="" <? if($_POST['popupConfig']['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
			<option value="effect_w" <? if($_POST['popupConfig']['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
			<option value="effect_h" <? if($_POST['popupConfig']['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
			<option value="effect_wh" <? if($_POST['popupConfig']['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
		</select>
	</li>
	<li class="">
		<label for="popupCss3Bezier">弹出动画特效：</label>
		<select id="popupCss3Bezier" name="popupConfig.css3Bezier">
			<option value="" <? if($_POST['popupConfig']['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
			<option value="bs1" <? if($_POST['popupConfig']['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
			<option value="bs2" <? if($_POST['popupConfig']['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
			<option value="bs3" <? if($_POST['popupConfig']['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
			<option value="bq1" <? if($_POST['popupConfig']['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
			<option value="bq2" <? if($_POST['popupConfig']['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
			<option value="bq3" <? if($_POST['popupConfig']['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
		</select>
	</li>
	<li class="">
		<label for="popupCss3Speed">弹出动画速度：</label>
		<select id="popupCss3Speed" name="popupConfig.css3Speed">
						
          <?
			for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
				if($_POST['popupConfig']['css3Speed']==$sx){$sel='selected';}else{$sel='';}
			echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
				}
			
			?>         
          </select>
	</li>
</ul>
<script type="text/javascript">
$(function() {
//加载表单样式
	var allowTime = 'true';
	"<?=$_POST['popupConfig']['pAlignType']?>" == "yes" ? 
	( $(".pAlignTypeYes").show(),$(".pAlignTypeNo").hide() ) :
	( $(".pAlignTypeYes").hide(),$(".pAlignTypeNo").show() );
	$("#pAlignType").off("change.popupAlignType").on("change.popupAlignType", "input", function() {
		var val = $(this).val(), _vx = $("#ppdsdtz_sapceX"), _vy = $("#ppdsdtz_sapceY");
		if(val == "yes") {
			$(".pAlignTypeYes").show();
			$(".pAlignTypeNo").hide();
			_vx.val("0");
			_vy.val("0");
		} else {
			$(".pAlignTypeYes").hide();
			$(".pAlignTypeNo").show();
		}
	});
	
	"<?=$_POST['popupConfig']['pTriggerType']?>" == "click" ? $(".triggerTypeClick").show() : $(".triggerTypeClick").hide();
	$("#pTriggerType").off("change.triggerType").on("change.triggerType", "input", function() {
		var val = $(this).val();
		if(val == "click") {
			$(".triggerTypeClick").show();
		} else {
			$(".triggerTypeClick").hide();
		}
	});
	$("#popupCss3Mode").val() == "" && $("#tabs").find(".popupCss3Mode").hide();
	$("#popupCss3Mode").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "") {
				$("#tabs").find(".popupCss3Mode").hide();
			} else {
				if(allowTime == "false") {
					alert("请先登录后再使用此功能！");
					$(this).val("").selectmenu( "refresh" );
					event.preventDefault();
					event.stopPropagation();
					return false;
				}
				$("#tabs").find(".popupCss3Mode").show();
			}
		}
	});
});
</script></div>
			<div id="tabs-99" style="display: none">
				<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="324" src="" type="application/x-shockwave-flash" wmode="opaque">
				</embed>
				<a class="june-preview" style="display:block;margin:5px auto;text-align:center;" href="" target="_blank">新窗口全屏观看</a>
			</div>
		</div>
	</div>
</div>
</form> 
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$_POST['active']?>});
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$("#tForm select:not(.popslem)").fontselectmenu();
	
	$(".borderControl, .shadowControl, .outlineControl").hide();
	
	$(".borderControl1, .shadowControl1").hide();
	
	"<?=$_POST['borderControl']?>"=="hborder" ? ($(".borderControl").hide(),$(".hborder").show()) : ($(".borderControl").hide(),$(".hnborder").show());
	"<?=$_POST['shadowControl']?>"=="shadowShow" && $(".shadowControl").show();
	"<?=$_POST['outlineControl']?>"=="outlineShow" && $(".outlineControl").show();
	
	"<?=$_POST['borderControl1']?>"=="hborder1" && $(".borderControl1").show();
	"<?=$_POST['shadowControl1']?>"=="shadowShow1" && $(".shadowControl1").show();
	
	$("#hc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl").hide();
			$(".hborder").show();
		} else {
			$(".borderControl").hide();
			$(".hnborder").show();
		}
	});
	$("#hc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl").show();
		} else {
			$(".shadowControl").hide();
		}
	});
	$("#hc4").click(function() {
		if(!!$(this).prop("checked")) {
			$(".outlineControl").show();
		} else {
			$(".outlineControl").hide();
		}
	});
	
	
	$("#bc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl1").show();
		} else {
			$(".borderControl1").hide();
		}
	});
	$("#bc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl1").show();
		} else {
			$(".shadowControl1").hide();
		}
	});
	$(".animselect div").click(function(){
		$(".animselect div").removeClass("active");
		$(this).addClass("active");
		$("#animType").val($(this).attr("data-val"));
	});
	
	$(".inputAccording").nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide(); });
	$("#tabs").off("click").on("click", ".inputAccording", function(event) {
		var _t = $(this), _curTab = _t.parent().parent();
		if(_t.hasClass("opened")) {
			_t.removeClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.is(":hidden") ? _tt.addClass("inputAccording-hided") : _tt.slideUp(200); });
		} else {
			_t.addClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.hasClass("inputAccording-hided") ? _tt.removeClass("inputAccording-hided") : _tt.slideDown(200); });
		}
	});

	var textviewcontentText=$("#textviewcontent").text().replace(/<br\s*\/?>/gi,"\r\n");	 
	$("#textviewcontent").text(textviewcontentText);
	
	var textviewcontent_hoverText=$("#textviewcontent_hover").text().replace(/<br\s*\/?>/gi,"\r\n");	 
	$("#textviewcontent_hover").text(textviewcontent_hoverText);		
	
});
</script>