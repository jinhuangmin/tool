<?
$data=$_POST;

 //弹出
 $popupConfig = $data['popupConfig'];
$pSwitch = $popupConfig['pSwitch'];
$spaceX = $popupConfig['spaceX'];
$spaceY = $popupConfig['spaceY'];
$popupHtml = $popupConfig['popupHtml'];
$popupHtml = stripslashes( $popupHtml );
$popupPosition = $popupConfig['popupPosition'];
$popupPosition = stripslashes( $popupPosition );
if($data['active']==-1){$active=3;}else{$active=$data['active'];}

?>

<form id="tForm" form-data="jcb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">鼠标经过变换</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
		<li><a href="#tabs-4">弹出层设置</a></li>
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
				<input id="h1" class="setinput" type="hidden" title="自动生成，无需填写" name="characterItemContent" value="<?=$data['characterItemContent']?>" />
			</li>
			<li>
				<label for="ird1">文字排列模式：</label>
				<div id="ird1">
					<input type="radio" id="ir1" name="characterLineMulti" value="no" <? if($data['characterLineMulti']=='no'){echo'checked="checked"';} ?> />
					<label for="ir1" title="文字内容单行展示，自适应行高。" style="width:96px;">单行模式</label>
					<input type="radio" id="ir2" name="characterLineMulti" value="yes"  <? if($data['characterLineMulti']=='yes'){echo'checked="checked"';} ?>/>
					<label for="ir2" title="文字内容多行展示，按照应用宽度进行转行。" style="width:96px;">多行模式</label>
				</div>
			</li>
            <li  style="display:none;">
				<label for="characterMode">文本内容模式：</label>
				<select id="characterMode" name="characterMode">
					<option value="text" <? if($data['characterMode']=='text'){echo'selected="selected"';} ?>>普通</option>
					<option value="price" <? if($data['characterMode']=='price'){echo'selected="selected"';} ?>>宝贝原价</option>
					<option value="_price" <? if($data['characterMode']=='_price'){echo'selected="selected"';} ?>>宝贝现价</option>
					<option value="sale" <? if($data['characterMode']=='sale'){echo'selected="selected"';} ?>>宝贝销量</option>
					<option value="title" <? if($data['characterMode']=='title'){echo'selected="selected"';} ?>>宝贝标题</option>
				</select>
			</li>            
			<li class="characterLineMultiNo">
				<label id="l2" for="i2">文字内容：</label>
				<input id="i2" class="setinput" type="text" title="请输入文字内容" name="characterContent" value="<?=$data['characterContent']?>" />
			</li>
			<li class="characterLineMulti">
				<label id="l2_mt" for="i2_mt">文字内容：</label>
				<textarea id="i2_mt" name="characterLineContent"><?=$data['characterLineContent']?></textarea>
			</li>
			<li>
				<label for="i3">文字链接：</label>
				<input id="i3" class="setinput" type="text" title="请输入文字链接，留空则为无链接的纯文字" name="href" value="<?=$data['href']?>" />
			</li>
			<li>
				<label for="i4">文字大小：</label>
				<input id="i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$data['characterSize']?>" />
			</li>
			<li>
				<label for="i5">文字颜色：</label>
				<input id="i5" class="setinput tColorPicker" type="text" title="" name="characterColor" value="<?=$data['characterColor']?>" />
			</li>
			<li>
				<label for="i9">文字背景颜色：</label>
				<input id="i9" class="setinput tColorPicker" type="text" title="" name="characterBgColor" value="<?=$data['characterBgColor']?>" />
			</li>

           <li class="characterLineMulti">
				<label for="catss2_mt" id="catsl2_mt">每行文字行高：</label>
				<input id="catss2_mt" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLineHeight" value="<?=$data['characterLineHeight']?>" />
			</li>
            <li class="characterLineMulti">
				<label for="catss1_mt" id="catsl1_mt">首字符缩进距离：</label>
				<input id="catss1_mt" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLineSpace" value="<?=$data['characterLineSpace']?>" />
			</li>
            
            <li class="characterLineMulti">
				<label for="catss3_mt" id="catsl3_mt">文字上下内边距：</label>
				<input id="catss3_mt" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterTBpadding" value="<?=$data['characterTBpadding']?>" />
			</li>

			<li>
				<label for="bcd1">默认显示：</label>
				<div id="bcd1">
					<input type="checkbox" id="bc2" name="borderControl1" value="hborder1" <? if($data['borderControl1']=='hborder1'){echo'checked="checked"';} ?> />
					<label for="bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="bc3" name="shadowControl1" value="shadowShow1"  <? if($data['shadowControl1']=='shadowShow1'){echo'checked="checked"';} ?>/>
					<label for="bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
				</div>
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi5">边框->边框颜色：</label>
				<input id="bi5" class="setinput tColorPicker" type="text" title="" name="borderColor1" value="<?=$data['borderColor1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi6">边框粗细：</label>
				<input id="bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$data['borderWidth1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi7">圆角弧度：</label>
				<input id="bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$data['borderRadius1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy4">阴影->阴影颜色：</label>
				<input id="hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor1" value="<?=$data['shadowColor1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy3">模糊距离：</label>
				<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$data['shadowBlur1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy5">阴影尺寸：</label>
				<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$data['shadowSize1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy1">水平距离：</label>
				<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$data['shadowLeft1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="by2">垂直距离：</label>
				<input id="by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$data['shadowTop1']?>" />
			</li>
            <li style="display:none;">
			<input id="bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="<?=$data['shadowStyle1']?>" />
            </li>
            
		</ul>
        
        <div id="mymenu">
           <ul class="setform"><li class="setshousuo">------------ 更多设置 展开/收起 (在外面快捷面板设置更方便) -----------</li><ul>
           <ul class="setform setform2"> 
           
            <li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
            <li  style="display:none;">
				<label for="characterWidthMode">文字宽度模式：</label>
				<select id="characterWidthMode" name="characterWidthMode">
					<option value="normal" <? if($data['characterWidthMode']=='normal'){echo'selected="selected"';} ?>>普通</option>
					<option value="auto" <? if($data['characterWidthMode']=='auto'){echo'selected="selected"';} ?>>自动宽度</option>
				</select>
			</li>			
            <li class="width-normal characterLineMultiNo">
				<label for="rd3">文字对齐方式：</label>
				<div id="rd3">
					<input type="radio" id="r5" name="characterAlign" value="left" <? if($data['characterAlign']=='left'){echo'checked="checked"';} ?> />
					<label for="r5" style="width:80px;">居左</label>
					<input type="radio" id="r6" name="characterAlign" value="center" <? if($data['characterAlign']=='center'){echo'checked="checked"';} ?> />
					<label for="r6" style="width:80px;">居中</label>
					<input type="radio" id="r7" name="characterAlign" value="right" <? if($data['characterAlign']=='right'){echo'checked="checked"';} ?> />
					<label for="r7" style="width:80px;">居右</label>
				</div>
			</li>

			<li class="characterLineMulti">
				<label for="rd3_mt">文字对齐方式：</label>
				<div id="rd3_mt">
					<input type="radio" id="r5_mt" name="characterLineAlign" value="left" <? if($data['characterLineAlign']=='left'){echo'checked="checked"';} ?> />
					<label for="r5_mt">居左</label>
					<input type="radio" id="r6_mt" name="characterLineAlign" value="center" <? if($data['characterLineAlign']=='center'){echo'checked="checked"';} ?> />
					<label for="r6_mt">居中</label>
					<input type="radio" id="r7_mt" name="characterLineAlign" value="right" <? if($data['characterLineAlign']=='right'){echo'checked="checked"';} ?> />
					<label for="r7_mt">居右</label>
				</div>
			</li>
			<li>
				<label for="ibs1">文字背景图片：</label>
				<input id="ibs1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="characterBgSrc" value="<?=$data['characterBgSrc']?>" />
			</li>
            <li >
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

			
            <li>
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

			<li>
				<label for="characterWeight">文字粗细：</label>
				<select id="characterWeight" name="characterWeight">
					<option value="normal" <? if($data['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
            <li style="display:none;">
				<label for="characterStyle">文字斜体：</label>
				<select id="characterStyle" name="characterStyle">
					<option value="normal" <? if($data['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="italic" <? if($data['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
				</select>
			</li>

			<li>
				<label for="characterLineThrough">文字中划线：</label>
				<select id="characterLineThrough" name="characterLineThrough">
					<option value="" <? if($data['characterLineThrough']==''){echo'selected="selected"';} ?>>不显示</option>
					<option value="line-through" <? if($data['characterLineThrough']=='line-through'){echo'selected="selected"';} ?>>显示</option>
				</select>
			</li>
			<li>
				<label for="characterLineUnder">文字下划线：</label>
				<select id="characterLineUnder" name="characterLineUnder">
					<option value="" <? if($data['characterLineUnder']==''){echo'selected="selected"';} ?>>鼠标移入显示</option>
					<option value="none" <? if($data['characterLineUnder']=='none'){echo'selected="selected"';} ?>>不显示</option>
				</select>
			</li>
            			
			<li>
				<label for="catss3">文字左缩进距离：</label>
				<input id="catss3" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLeftPadding" value="<?=$data['characterLeftPadding']?>" />
			</li>
			<li>
				<label for="catss4">文字右缩进距离：</label>
				<input id="catss4" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterRightPadding" value="<?=$data['characterRightPadding']?>" />
			</li>
            <li>
				<label for="catss2">文字间隔：</label>
				<input id="catss2" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLetterSpacing" value="<?=$data['characterLetterSpacing']?>" />
			</li>
			<li style="display:none;">
				<label for="tt_i1">提示文字：</label>
				<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" name="tipText" value="<?=$data['tipText']?>" />
			</li>
			
			<li class="price_price characterLineMultiNo">
				<label for="characterFixed">价格保留小数：</label>
				<select id="characterFixed" name="characterFixed">
					<option value="0" <? if($data['characterFixed']=='0'){echo'selected="selected"';} ?>>0</option>
					<option value="1" <? if($data['characterFixed']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if($data['characterFixed']=='2'){echo'selected="selected"';} ?>>2</option>
				</select>
			</li>
           </ul></div>
        
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label for="rd1">鼠标经过变换开关：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="characterHoverMode" value="on" <? if($data['characterHoverMode']=='on'){echo'checked="checked"';} ?> />
					<label for="r1">开启</label>
					<input type="radio" id="r2" name="characterHoverMode" value="off" <? if($data['characterHoverMode']=='off'){echo'checked="checked"';} ?> />
					<label for="r2">关闭</label>
				</div>
			</li>
			<li>
				<label for="i6">文字大小：</label>
				<input id="i6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSizeHover" value="<?=$data['characterSizeHover']?>" />
			</li>
			<li>
				<label for="i7">文字颜色：</label>
				<input id="i7" class="setinput tColorPicker" type="text" title="" name="characterColorHover" value="<?=$data['characterColorHover']?>" />
			</li>
            <li>
				<label for="i10">文字背景颜色：</label>
				<input id="i10" class="setinput tColorPicker" type="text" title="" name="characterBgColorHover" value="<?=$data['characterBgColorHover']?>" />
			</li>
			<li>
				<label for="ibs2">文字背景图片：</label>
				<input id="ibs2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="characterBgSrcHover" value="<?=$data['characterBgSrcHover']?>" />
			</li>
			<li>
				<label for="characterFontHover">文字字体：</label>
				<select id="characterFontHover" name="characterFontHover">					
					<option value="宋体" <? if($data['characterFontHover']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['characterFontHover']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['characterFontHover']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['characterFontHover']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['characterFontHover']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['characterFontHover']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['characterFontHover']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['characterFontHover']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['characterFontHover']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['characterFontHover']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['characterFontHover']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['characterFontHover']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['characterFontHover']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['characterFontHover']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['characterFontHover']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['characterFontHover']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>

			<li>
				<label for="characterWeightHover">文字粗细：</label>
				<select id="characterWeightHover" name="characterWeightHover">
					<option value="normal" <? if($data['characterWeightHover']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeightHover']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>

			<li>
				<label for="characterHoverSpeed">切换动画速度：</label>
				<select id="characterHoverSpeed" name="characterHoverSpeed">
					<option value="" <? if($data['characterHoverSpeed']==''){echo'selected="selected"';} ?>>无效果</option>
                    <option value="trans02s" <? if($data['characterHoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans05s" <? if($data['characterHoverSpeed']=='trans05s'){echo'selected="selected"';} ?>>中速</option>
					<option value="trans1s" <? if($data['characterHoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>

			<li>
				<label for="hcd1">鼠标经过时显示：</label>
				<div id="hcd1">
					<input type="checkbox" id="hc2" name="borderControl" value="hborder"  <? if($data['borderControl']=='hborder'){echo'checked="checked"';} ?>/>
					<label for="hc2" title="鼠标经过热区时会显示边框，可设置边框颜色" style="width:80px;">边框</label>
					<input type="checkbox" id="hc3" name="shadowControl" value="shadowShow"  <? if($data['shadowControl']=='shadowShow'){echo'checked="checked"';} ?>/>
					<label for="hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色" style="width:80px;">阴影</label>
					<input type="checkbox" id="hc4" name="outlineControl" value="outlineShow" <? if($data['outlineControl']=='outlineShow'){echo'checked="checked"';} ?> />
					<label for="hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:80px;">扩展外框</label>
				</div>
			</li>

			<li class="hborder borderControl">
				<label for="hi5">边框->边框颜色：</label>
				<input id="hi5" class="setinput tColorPicker" type="text" title="" name="borderColor" value="<?=$data['borderColor']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="hi6">边框粗细：</label>
				<input id="hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=$data['borderWidth']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="hi7">圆角弧度：</label>
				<input id="hi7" class="setinput" type="text" title="" name="borderRadius" value="<?=$data['borderRadius']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy4">阴影->阴影颜色：</label>
				<input id="hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor" value="<?=$data['shadowColor']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy3">模糊距离：</label>
				<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$data['shadowBlur']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy5">阴影尺寸：</label>
				<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$data['shadowSize']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy1">水平距离：</label>
				<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$data['shadowLeft']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy2">垂直距离：</label>
				<input id="hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$data['shadowTop']?>" />
			</li>
			<input id="hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=$data['shadowStyle']?>" />
			<li class="outlineShow outlineControl">
				<label for="hi9">扩展->外框颜色：</label>
				<input id="hi9" class="setinput tColorPicker" type="text" title="" name="outlineColor" value="<?=$data['outlineColor']?>" />
			</li>
			<li class="outlineShow outlineControl">
				<label for="outlineWidth">外框粗细：</label>
				<select id="outlineWidth" name="outlineWidth">
					<option value="juneol2" <? if($data['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
					<option value="juneol1" <? if($data['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
					<option value="juneol" <? if($data['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="outlineSpeed">动画速度：</label>
				<select id="outlineSpeed" name="outlineSpeed">
					<option value="" <? if($data['outlineSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
					<option value="trans01s" <? if($data['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans02s" <? if($data['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
					<option value="trans05s" <? if($data['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
					<option value="trans1s" <? if($data['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="hi8">阴影颜色：</label>
				<input id="hi8" class="setinput tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$data['outlineShadowColor']?>" />
			</li>
		</ul>  
        <div id="mymenu">
            <ul class="setform"><li class="setshousuo">---------------------- 更多设置 文字下边线 --------------------</li><ul>
            <ul class="setform setform2"> 
			<li class="hnborder borderControl">
				<label for="rd2">文字下划线：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="characterUnderLine" value="on" <? if($data['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
					<label for="r3">显示</label>
					<input type="radio" id="r4" name="characterUnderLine" value="off" <? if($data['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
					<label for="r4" style="width: 70px;">不显示</label>
				</div>
			</li>

			<li class="hnborder borderControl">
				<label for="characterUnderLineStyle">下划线样式：</label>
				<select id="characterUnderLineStyle" name="characterUnderLineStyle">
					<option value="solid" <? if($data['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
					<option value="dotted" <? if($data['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
				</select>
			</li>
			<li class="hnborder borderControl">
				<label for="characterUnderLineWeight">下划线粗细：</label>
				<select id="characterUnderLineWeight" name="characterUnderLineWeight">
					<option value="1" <? if($data['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if($data['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
					<option value="3" <? if($data['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
					<option value="4" <? if($data['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
					<option value="5" <? if($data['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
				</select>
			</li>
			<li class="hnborder borderControl">
				<label for="i8">下划线颜色：</label>
				<input id="i8" class="setinput tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=$data['characterUnderLineColor']?>" />
			</li>
		</ul>
		</div>
	</div>
	<div id="tabs-3">
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
	<div id="tabs-4">
		<ul class="setform">
			<li>
				<label for="pSwitch">弹出层开关：</label>
				<select id="pSwitch" name="popupConfig.pSwitch">
					<option value="no" <? if($pSwitch=='no'){echo'selected="selected"';} ?>>关闭弹出层</option>
					<option value="yes" <? if($pSwitch=='yes'){echo'selected="selected"';} ?>>鼠标经过弹出层</option>
				</select>
			</li>
			<li>
				<label for="popupPosition">弹出层位置：</label>
				<select id="popupPosition" name="popupConfig.popupPosition">
					<optgroup label="对齐点上方">
						<option value="'tl','bl'" <? if($popupPosition=="'tl','bl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
						<option value="'tc','bc'" <? if($popupPosition=="'tc','bc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
						<option value="'tr','br'" <? if($popupPosition=="'tr','br'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
					</optgroup>
					<optgroup label="对齐点右方">
						<option value="'tr','tl'" <? if($popupPosition=="'tr','tl'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
						<option value="'cr','cl'" <? if($popupPosition=="'cr','cl'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
						<option value="'br','bl'" <? if($popupPosition=="'br','bl'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
					</optgroup>
					<optgroup label="对齐点下方">
						<option value="'br','tr'" <? if($popupPosition=="'br','tr'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
						<option value="'bc','tc'" <? if($popupPosition=="'bc','tc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
						<option value="'bl','tl'" <? if($popupPosition=="'bl','tl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
					</optgroup>
					<optgroup label="对齐点左方">
						<option value="'bl','br'" <? if($popupPosition=="'bl','br'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
						<option value="'cl','cr'" <? if($popupPosition=="'cl','cr'"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
						<option value="'tl','tr'" <? if($popupPosition=="'tl','tr'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
					</optgroup>
					<optgroup label="对齐点覆盖">
						<option value="'tl','tl'" <? if($popupPosition=="'tl','tl'"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
						<option value="'tc','tc'" <? if($popupPosition=="'tc','tc'"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
						<option value="'tr','tr'" <? if($popupPosition=="'tr','tr'"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
                        <option value="'cr','cr'" <? if($popupPosition=="'cr','cr'"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
						<option value="'br','br'" <? if($popupPosition=="'br','br'"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
						<option value="'bc','bc'" <? if($popupPosition=="'bc','bc'"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
						<option value="'bl','bl'" <? if($popupPosition=="'bl','bl'"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
                        <option value="'cl','cl'" <? if($popupPosition=="'cl','cl'"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
						<option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="'cc','cc'"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
					</optgroup>		
				</select>
			</li>
			<li>
				<label for="iii1">水平偏移：</label>
				<input id="iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="popupConfig.spaceX" value="<?=$spaceX?>" />
			</li>
			<li>
				<label for="iii2">垂直偏移：</label>
				<input id="iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="popupConfig.spaceY" value="<?=$spaceY?>" />
			</li>
			<li>
				<label for="popupHtml">自定义内容：</label>
				<textarea id="popupHtml" name="popupConfig.popupHtml"><?=$popupHtml?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="popupConfig.popupHtml" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
            <li>
				<label for="popupCss3Mode">弹出特效：</label>
				<select id="popupCss3Mode" name="popupConfig.css3Mode">
					<option value="" <? if($popupConfig['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
					<option value="effect_w" <? if($popupConfig['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
					<option value="effect_h" <? if($popupConfig['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
					<option value="effect_wh" <? if($popupConfig['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
				</select>
			</li>
			<li>
				<label for="popupCss3Bezier">弹出动画特效：</label>
				<select id="popupCss3Bezier" name="popupConfig.css3Bezier">
					<option value="" <? if($popupConfig['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
					<option value="bs1" <? if($popupConfig['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
					<option value="bs2" <? if($popupConfig['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
					<option value="bs3" <? if($popupConfig['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
					<option value="bq1" <? if($popupConfig['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
					<option value="bq2" <? if($popupConfig['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
					<option value="bq3" <? if($popupConfig['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
				</select>
			</li>
			<li>
				<label for="popupCss3Speed">弹出动画速度：</label>
				<select id="popupCss3Speed" name="popupConfig.css3Speed">
					<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($popupConfig['css3Speed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					
					?>     
              </select>
			</li>
		</ul>
	</div>
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435428.swf#tb_videoid=6184035" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435428.swf#tb_videoid=6184035" target="_blank">新窗口全屏观看</a>
	</div>
</div>
</form>

<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$active?>});
	$("input, .setform > li > div").buttonset();
	$("#tForm select").fontselectmenu();
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
	var i2Val = "", i2Val1 = "";
	"<?=$data['characterMode']?>" == "text" ? ($("#l2").html("文字内容："),i2Val = $("#i2").val()) : ($("#l2").html("宝贝链接："),i2Val1 = $("#i2").val());
	("<?=$data['characterMode']?>" == "price" ||  "<?=$data['characterMode']?>" == "_price") ? $(".price_price").show() : $(".price_price").hide();
	$( "#characterMode" ).fontselectmenu("destroy").selectmenu({
	  change: function( event, ui ) {
		var val = $(this).val();
		if($("#i2").attr("data-v-type") == "text") {
			i2Val = $("#i2").val();
		} else {
			i2Val1 = $("#i2").val();
		}
		if(val == "text") {
			$("#l2").html("文字内容：");
			$("#i2").attr("data-v-type", "text").val(i2Val);
		} else {
			$("#l2").html("宝贝链接：");
			$("#i2").attr("data-v-type", "other").val(i2Val1);
		}
		if(val == "price" || val == "_price") {
			$(".price_price").show()
		} else {
			$(".price_price").hide()
		}
	  }
	});
	$(".characterLineMulti").hide();
	"<?=$data['characterLineMulti']?>" == "yes" && ( $(".characterLineMultiNo").hide(), $(".characterLineMulti").show() );
	$("#ird1").children("input[name='characterLineMulti']").click(function() {
		var val = $(this).val();
		if(val == "yes") {
			$(".characterLineMultiNo").hide();
			$(".characterLineMulti").show();
		} else {
			$(".characterLineMulti").hide();
			$(".characterLineMultiNo").show();
			var tempVal1 = $( "#characterMode" ).val();
			if(tempVal1 == "price" || tempVal1 == "_price") {
				$(".price_price").show()
			} else {
				$(".price_price").hide()
			}
		}

	});
	
	$(".borderControl, .shadowControl, .outlineControl").hide();
	
	$(".borderControl1, .shadowControl1").hide();
	"<?=$data['borderControl']?>"=="hborder" ? ($(".borderControl").hide(),$(".hborder").show()) : ($(".borderControl").hide(),$(".hnborder").show());
	"<?=$data['shadowControl']?>"=="shadowShow" && $(".shadowControl").show();
	"<?=$data['outlineControl']?>"=="outlineShow" && $(".outlineControl").show();
	

	
	"<?=$data['borderControl1']?>"=="hborder1" && $(".borderControl1").show();
	"<?=$data['shadowControl1']?>"=="shadowShow1" && $(".shadowControl1").show();
	
	
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