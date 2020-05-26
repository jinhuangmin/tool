<?
$data=$_POST;
?>
<form id="oths_tForm" form-data="oths_thumbset" method="post" >
<div id="oths_tabs">
	<ul>
		<li><a href="#oths_tabs-1">缩略图</a></li>
		<li><a href="#oths_tabs-2">切换缩略图</a></li>
		<!--
		<li><a href="#oths_tabs-1">内容设置</a></li>
		<li><a href="#oths_tabs-2">鼠标经过变换</a></li>
		<li><a href="#oths_tabs-3">样式设置</a></li>
		<li><a href="#oths_tabs-4">弹出层设置</a></li>
		<li><a href="#oths_tabs-99">视频教程</a></li>
		-->
	</ul>
	<div id="oths_tabs-1">
		<ul class="setform">
			<!--
			<li style="display:none;">
				<label for="oths_i1">应用ID：</label>
				<input id="oths_i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="" />
				<input id="oths_h1" class="setinput" type="hidden" title="自动生成，无需填写" name="characterItemContent" value="" />
			</li>
			<li>
				<label for="oths_ibeli1">应用名称：</label>
				<input id="oths_ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="" />
			</li>
			-->
			<li>
				<label for="oths_ird1">文字排列模式：</label>
				<div id="oths_ird1"><? $characterLineMulti=isset($_POST['characterLineMulti'])?$_POST['characterLineMulti']:'no'; ?>
					<input type="radio" id="oths_ir1" name="characterLineMulti" value="no" <? if($characterLineMulti=='no'){echo'checked="checked"';} ?> />
					<label for="oths_ir1" title="文字内容单行展示，自适应行高。" style="width:96px;">单行模式</label>
					<input type="radio" id="oths_ir2" name="characterLineMulti" value="yes" <? if($characterLineMulti=='yes'){echo'checked="checked"';} ?> />
					<label for="oths_ir2" title="文字内容多行展示，按照应用宽度进行转行。" style="width:96px;">多行模式</label>
				</div>
			</li>
			<li style="display:none;">
				<label for="oths_characterMode">文本内容模式：</label>
				<select id="oths_characterMode" name="characterMode"><? $characterMode=isset($_POST['characterMode'])?$_POST['characterMode']:'text'; ?>
                    <option value="text" <? if($characterMode=='text'){echo'selected="selected"';} ?>>普通</option>
					<option value="price" <? if($characterMode=='price'){echo'selected="selected"';} ?>>宝贝原价</option>
					<option value="_price" <? if($characterMode=='_price'){echo'selected="selected"';} ?>>宝贝现价</option>
					<option value="sale" <? if($characterMode=='sale'){echo'selected="selected"';} ?>>宝贝销量</option>
					<option value="title" <? if($characterMode=='title'){echo'selected="selected"';} ?>>宝贝标题</option>
				</select>
			</li>
			<li class="characterLineMultiNo">
				<label id="oths_l2" for="oths_i2">文字内容：</label>
				<input id="oths_i2" class="setinput" type="text" title="请输入文字内容" name="characterContent" value="<?=@$data['characterContent']?>" />
			</li>
			<li class="characterLineMulti">
				<label id="oths_l2_mt" for="oths_i2_mt">文字内容：</label><? $characterLineContent=isset($_POST['characterLineContent'])?$_POST['characterLineContent']:''; ?>
				<textarea id="oths_i2_mt" name="characterLineContent"><?=$characterLineContent?></textarea>
			</li>
			<!--
			<li>
				<label for="oths_i3">文字链接：</label>
				<input id="oths_i3" class="setinput" type="text" title="请输入文字链接，留空则为无链接的纯文字" name="href" value="" />
			</li>
			<li>
				<label for="oths_hrefMode">链接打开方式：</label>
				<select id="oths_hrefMode" name="hrefMode">
					<option value="_self" >原窗口打开</option>
					<option value="_blank" >新窗口打开</option>
				</select>
			</li>
			-->
			<li style="display:none;">
				<label for="oths_characterWidthMode">文字宽度模式：</label>
				<select id="oths_characterWidthMode" name="characterWidthMode"><? $characterWidthMode=isset($_POST['characterWidthMode'])?$_POST['characterWidthMode']:''; ?>
                    <option value="normal" <? if($characterWidthMode=='normal'){echo'selected="selected"';} ?>>自定义宽度</option>
					<option value="auto" <? if($characterWidthMode=='auto'){echo'selected="selected"';} ?>>自动宽度</option>
				</select>
			</li>
			<li class="width-normal characterLineMultiNo">
				<label for="oths_rd3">对齐方式：</label>
				<div id="oths_rd3"><? $characterAlign=isset($_POST['characterAlign'])?$_POST['characterAlign']:'center'; ?>
					<input type="radio" id="oths_r5" name="characterAlign" value="left" <? if($characterAlign=='left'){echo'checked="checked"';} ?> />
					<label for="oths_r5">居左</label>
					<input type="radio" id="oths_r6" name="characterAlign" value="center" <? if($characterAlign=='center'){echo'checked="checked"';} ?> />
					<label for="oths_r6">居中</label>
					<input type="radio" id="oths_r7" name="characterAlign" value="right" <? if($characterAlign=='right'){echo'checked="checked"';} ?> />
					<label for="oths_r7">居右</label>

				</div>
			</li>
			<li class="characterLineMulti">
				<label for="oths_rd3_mt">对齐方式：</label>
				<div id="oths_rd3_mt"><? $characterLineAlign=isset($_POST['characterLineAlign'])?$_POST['characterLineAlign']:'center'; ?>
					<input type="radio" id="oths_r5_mt" name="characterLineAlign" value="left" <? if($characterLineAlign=='left'){echo'checked="checked"';} ?> />
					<label for="oths_r5_mt">居左</label>
					<input type="radio" id="oths_r6_mt" name="characterLineAlign" value="center" <? if($characterLineAlign=='center'){echo'checked="checked"';} ?> />
					<label for="oths_r6_mt">居中</label>
					<input type="radio" id="oths_r7_mt" name="characterLineAlign" value="right" <? if($characterLineAlign=='right'){echo'checked="checked"';} ?> />
					<label for="oths_r7_mt">居右</label>
				</div>
			</li>
			<li>
				<label for="oths_i5">文字颜色：</label>
				<input id="oths_i5" class="setinput tColorPicker" type="text" title="" name="characterColor" value="<?=$data['characterColor']?>" />
			</li>
			<li>
				<label for="oths_i9">背景颜色：</label>
				<input id="oths_i9" class="setinput tColorPicker" type="text" title="" name="characterBgColor" value="<?=$data['characterBgColor']?>" />
			</li>
			<li>
				<label for="oths_i4">文字大小：</label>
				<input id="oths_i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$data['characterSize']?>" />
			</li>
			<li>
				<label for="ssOpacity">透明度：</label>
				<select id="ssOpacity" name="ssOpacity"><? $ssOpacity=isset($_POST['ssOpacity'])?$_POST['ssOpacity']:'1'; ?>
					<option value="1" <? if($ssOpacity=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="0.9" <? if($ssOpacity=='0.9'){echo'selected="selected"';} ?>>0.9</option>
					<option value="0.8" <? if($ssOpacity=='0.8'){echo'selected="selected"';} ?>>0.8</option>
					<option value="0.7" <? if($ssOpacity=='0.7'){echo'selected="selected"';} ?>>0.7</option>
					<option value="0.6" <? if($ssOpacity=='0.6'){echo'selected="selected"';} ?>>0.6</option>
					<option value="0.5" <? if($ssOpacity=='0.5'){echo'selected="selected"';} ?>>0.5</option>
					<option value="0.4" <? if($ssOpacity=='0.4'){echo'selected="selected"';} ?>>0.4</option>
					<option value="0.3" <? if($ssOpacity=='0.3'){echo'selected="selected"';} ?>>0.3</option>
					<option value="0.2" <? if($ssOpacity=='0.2'){echo'selected="selected"';} ?>>0.2</option>
					<option value="0.1" <? if($ssOpacity=='0.1'){echo'selected="selected"';} ?>>0.1</option>
				</select>
			</li>
			<li>
				<label for="oths_ibs1">文字背景图片：</label><? $characterBgSrc=isset($_POST['characterBgSrc'])?$_POST['characterBgSrc']:''; ?>
				<input id="oths_ibs1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="characterBgSrc" value="<?=$characterBgSrc?>" />
			</li>
			<li>
				<label for="oths_imgBgp">背景图片位置：</label>
				<select id="oths_imgBgp" name="imgBgp"><? $imgBgp=isset($_POST['imgBgp'])?$_POST['imgBgp']:'50% 50%'; ?>
                    <option value="50% 50%" <? if($imgBgp=='50% 50%'){echo'selected="selected"';} ?>>居中</option>
					<option value="50% 0%" <? if($imgBgp=='50% 0%'){echo'selected="selected"';} ?>>中上</option>
					<option value="50% 100%" <? if($imgBgp=='50% 100%'){echo'selected="selected"';} ?>>中下</option>
					<option value="0% 0%" <? if($imgBgp=='0% 0%'){echo'selected="selected"';} ?>>左上</option>
					<option value="0% 50%" <? if($imgBgp=='0% 50%'){echo'selected="selected"';} ?>>左中</option>
					<option value="0% 100%" <? if($imgBgp=='0% 100%'){echo'selected="selected"';} ?>>左下</option>
					<option value="100% 0%" <? if($imgBgp=='100% 0%'){echo'selected="selected"';} ?>>右上</option>
					<option value="100% 50%" <? if($imgBgp=='100% 50%'){echo'selected="selected"';} ?>>右中</option>
					<option value="100% 100%" <? if($imgBgp=='100% 100%'){echo'selected="selected"';} ?>>右下</option>
				</select>
			</li>
			<li>
				<label for="oths_characterFont">文字字体：</label>
				<select id="oths_characterFont" name="characterFont">
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
				<label for="oths_characterWeight">文字粗细：</label>
				<select id="oths_characterWeight" name="characterWeight">
                     <option value="normal" <? if($data['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li style="display:none;">
				<label for="oths_characterStyle">文字斜体：</label><? $characterStyle=isset($_POST['characterStyle'])?$_POST['characterStyle']:'normal'; ?>
				<select id="oths_characterStyle" name="characterStyle">
                    <option value="normal" <? if($characterStyle=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($characterStyle=='bold'){echo'selected="selected"';} ?>>斜体</option>
				</select>
			</li>
			<li>
				<label for="oths_characterLineThrough">文字中划线：</label>
				<select id="oths_characterLineThrough" name="characterLineThrough">
					 <option value="" <? if($data['characterLineThrough']==''){echo'selected="selected"';} ?>>不显示</option>
					<option value="line-through" <? if($data['characterLineThrough']=='line-through'){echo'selected="selected"';} ?>>显示</option>
				</select>
			</li>
			<li>
				<label for="oths_characterLineUnder">文字下划线：</label><? $characterLineUnder=isset($_POST['characterLineUnder'])?$_POST['characterLineUnder']:''; ?>
				<select id="oths_characterLineUnder" name="characterLineUnder">
					<option value="" <? if($characterLineUnder==''){echo'selected="selected"';} ?>>鼠标移入显示</option>
					<option value="none" <? if($characterLineUnder=='none'){echo'selected="selected"';} ?>>不显示</option>
				</select>
			</li>
			<li class="characterLineMulti">
				<label for="oths_catss1_mt" id="oths_catsl1_mt">首字符缩进距离：</label>
				<input id="oths_catss1_mt" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLineSpace" value="<?=@$data['characterLineSpace']?>" />
			</li>
			<li class="characterLineMulti">
				<label for="oths_catss2_mt" id="oths_catsl2_mt">每行文字行高：</label>
				<input id="oths_catss2_mt" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLineHeight" value="<?=@$data['characterLineHeight']?>" />
			</li>
			<li>
				<label for="oths_catss3">文字左缩进距离：</label>
				<input id="oths_catss3" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLeftPadding" value="<?=@$data['characterLeftPadding']?>" />
			</li>
			<li>
				<label for="oths_catss4">文字右缩进距离：</label>
				<input id="oths_catss4" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterRightPadding" value="<?=@$data['characterRightPadding']?>" />
			</li>
			<li class="characterLineMulti">
				<label for="oths_catss3_mt" id="oths_catsl3_mt">文字上下内边距：</label>
				<input id="oths_catss3_mt" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterTBpadding" value="<?=@$data['characterTBpadding']?>" />
			</li>
			<li style="display:none;">
				<label for="oths_tt_i1">提示文字：</label>
				<input id="oths_tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" name="tipText" value="<?=@$data['tipText']?>" />
			</li>
			<li>
				<label for="oths_catss2">文字间隔：</label>
				<input id="oths_catss2" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterLetterSpacing" value="<?=@$characterLetterSpacing?>" />
			</li>
			<li class="price_price characterLineMultiNo" style="display:none;">
				<label for="oths_characterFixed">价格保留小数：</label>
				<select id="oths_characterFixed" name="characterFixed">
					<option value="0" <? if(@$data['characterFixed']=='0'){echo'selected="selected"';} ?>>0</option>
					<option value="1" <? if(@$data['characterFixed']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if(@$data['characterFixed']=='2'){echo'selected="selected"';} ?>>2</option>
				</select>
			</li>
			<li>
				<label for="oths_bcd1">默认显示：</label>
				<div id="oths_bcd1"><? $borderControl1=isset($_POST['borderControl1'])?$_POST['borderControl1']:''; ?>
					<input type="checkbox" id="oths_bc2" name="borderControl1" value="hborder1" <? if($borderControl1=='hborder1'){echo'checked="checked"';} ?> />
					<label for="oths_bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="oths_bc3" name="shadowControl1" value="shadowShow1" <? if($borderControl1=='shadowShow1'){echo'checked="checked"';} ?> />
					<label for="oths_bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
				</div>
			</li>
			<li class="hborder1 borderControl1">
				<label for="oths_bi5">边框->边框颜色：</label>
				<input id="oths_bi5" class="setinput tColorPicker" type="text" title="" name="borderColor1" value="<?=@$data['borderColor1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="oths_bi6">边框粗细：</label>
				<input id="oths_bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=@$data['borderWidth1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="oths_bi7">圆角弧度：</label>
				<input id="oths_bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=@$data['borderRadius1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="oths_hy4">阴影->阴影颜色：</label>
				<input id="oths_hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor1" value="<?=@$data['shadowColor1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="oths_hy3">模糊距离：</label>
				<input id="oths_hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=@$data['shadowBlur1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="oths_hy5">阴影尺寸：</label>
				<input id="oths_hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=@$data['shadowSize1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="oths_hy1">水平距离：</label>
				<input id="oths_hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=@$data['shadowLeft1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="oths_by2">垂直距离：</label>
				<input id="oths_by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=@$data['shadowTop1']?>" />
			</li>
			<input id="oths_bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="<?=@$data['shadowStyle1']?>" />
					</ul>
	</div>
	<div id="oths_tabs-2">
		<ul class="setform">
			<li>
				<label for="oths_rd1">切换缩略图开关：</label>
				<div id="oths_rd1">
					<input type="radio" id="oths_r1" name="characterHoverMode" value="on" <? if(@$data['characterHoverMode']=='on'){echo'checked="checked"';} ?> />
					<label for="oths_r1">开启</label>
					<input type="radio" id="oths_r2" name="characterHoverMode" value="off" <? if(@$data['characterHoverMode']=='off'){echo'checked="checked"';} ?> />
					<label for="oths_r2">关闭</label>
				</div>
			</li>
			<li>
				<label for="oths_i7">文字颜色：</label>
				<input id="oths_i7" class="setinput tColorPicker" type="text" title="" name="characterColorHover" value="<?=@$data['characterColorHover']?>" />
			</li>
			<li>
				<label for="oths_i10">背景颜色：</label>
				<input id="oths_i10" class="setinput tColorPicker" type="text" title="" name="characterBgColorHover" value="<?=@$data['characterBgColorHover']?>" />
			</li>
			<li style="display:none;">
				<label for="oths_ibs2">文字背景图片：</label>
				<input id="oths_ibs2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="characterBgSrcHover" value="<?=@$data['characterBgSrcHover']?>" />
			</li>
			<li>
				<label for="ssOpacity1">透明度：</label>
				<select id="ssOpacity1" name="ssOpacity1">
                    <option value="1" <? if(@$data['ssOpacity1']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="0.9" <? if(@$data['ssOpacity1']=='0.9'){echo'selected="selected"';} ?>>0.9</option>
					<option value="0.8" <? if(@$data['ssOpacity1']=='0.8'){echo'selected="selected"';} ?>>0.8</option>
					<option value="0.7" <? if(@$data['ssOpacity1']=='0.7'){echo'selected="selected"';} ?>>0.7</option>
					<option value="0.6" <? if(@$data['ssOpacity1']=='0.6'){echo'selected="selected"';} ?>>0.6</option>
					<option value="0.5" <? if(@$data['ssOpacity1']=='0.5'){echo'selected="selected"';} ?>>0.5</option>
					<option value="0.4" <? if(@$data['ssOpacity1']=='0.4'){echo'selected="selected"';} ?>>0.4</option>
					<option value="0.3" <? if(@$data['ssOpacity1']=='0.3'){echo'selected="selected"';} ?>>0.3</option>
					<option value="0.2" <? if(@$data['ssOpacity1']=='0.2'){echo'selected="selected"';} ?>>0.2</option>
					<option value="0.1" <? if(@$data['ssOpacity1']=='0.1'){echo'selected="selected"';} ?>>0.1</option>
				</select>
			</li>
			<li>
				<label for="oths_i6">文字大小：</label>
				<input id="oths_i6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSizeHover" value="<?=@$data['characterSizeHover']?>" />
			</li>
			<li>
				<label for="oths_characterFontHover">文字字体：</label>
				<select id="oths_characterFontHover" name="characterFontHover">
					<option value="宋体" <? if(@$data['characterFontHover']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if(@$data['characterFontHover']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if(@$data['characterFontHover']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if(@$data['characterFontHover']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if(@$data['characterFontHover']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if(@$data['characterFontHover']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if(@$data['characterFontHover']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if(@$data['characterFontHover']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if(@$data['characterFontHover']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if(@$data['characterFontHover']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if(@$data['characterFontHover']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if(@$data['characterFontHover']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if(@$data['characterFontHover']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if(@$data['characterFontHover']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if(@$data['characterFontHover']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if(@$data['characterFontHover']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="oths_characterWeightHover">文字粗细：</label>
				<select id="oths_characterWeightHover" name="characterWeightHover">
					<option value="normal" <? if(@$data['characterWeightHover']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if(@$data['characterWeightHover']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="oths_css3ModeX1">横向移动：</label>
				<select id="oths_css3ModeX1" name="css3ModeX1"><? $css3ModeX1=@$data['css3ModeX1']; ?>
				<option value="" <? if($css3ModeY1==''){echo'selected="selected"';} ?>>无效果</option>	
                    
        <?
				$arraytype= array('june-box-lx','june-box-rx');
				foreach($arraytype as $type){
				   if($type=='june-box-uy'){$text='向左移动';}
				   else if($type=='june-box-dy'){$text='向右移动';}
                    for($num=10;$num<630;$num++){
					$sx=''.$type.''.$num.'';
				   if($css3ModeX1==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$num.'像素</option>';	
						}
				 }
				?>   
			 </select>
			</li>
			<li>
				<label for="oths_css3ModeY1">纵向移动：</label>
				<select id="oths_css3ModeY1" name="css3ModeY1"><? $css3ModeY1=@$data['css3ModeY1']; ?>
				<option value="" <? if($css3ModeY1==''){echo'selected="selected"';} ?>>无效果</option>	
                    
        <?
				$arraytype= array('june-box-uy','june-box-dy');
				foreach($arraytype as $type){
				   if($type=='june-box-uy'){$text='向上移动';}
				   else if($type=='june-box-dy'){$text='向下移动';}
                    for($num=10;$num<630;$num++){
					$sx=''.$type.''.$num.'';
				   if($css3ModeY1==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$num.'像素</option>';	
						}
				 }
				?>   
              </select>
			</li>
			<li>
				<label for="oths_css3Mode1">CSS3特效：</label>
				<select id="oths_css3Mode1" name="css3Mode1"><? $css3Mode1=@$data['css3Mode1']; ?>
					<option value="" <? if(@$css3Mode1==''){echo'selected="selected"';} ?>>无效果</option>
										<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fx" >横向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fy'){echo'selected="selected"';} ?> value="june-box-fy" >纵向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fxy'){echo'selected="selected"';} ?> value="june-box-fxy" >横向纵向同时翻转</option>
					
					<option <? if(@$css3Mode1=='june-box-fxr360'){echo'selected="selected"';} ?> value="june-box-fxr360" >顺时针旋转一周横向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fxr720'){echo'selected="selected"';} ?> value="june-box-fxr720" >顺时针旋转二周横向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fxfr360'){echo'selected="selected"';} ?> value="june-box-fxfr360" >逆时针旋转一周横向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fxfr720'){echo'selected="selected"';} ?> value="june-box-fxfr720" >逆时针旋转二周横向翻转</option>
					
					<option <? if(@$css3Mode1=='june-box-fyr360'){echo'selected="selected"';} ?> value="june-box-fyr360" >顺时针旋转一周纵向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fyr720'){echo'selected="selected"';} ?> value="june-box-fyr720" >顺时针旋转二周纵向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fyfr360'){echo'selected="selected"';} ?> value="june-box-fyfr360" >逆时针旋转一周纵向翻转</option>
					<option <? if(@$css3Mode1=='june-box-fyfr720'){echo'selected="selected"';} ?> value="june-box-fyfr720" >逆时针旋转二周纵向翻转</option>
					
					<option <? if(@$css3Mode1=='june-box-sf02'){echo'selected="selected"';} ?> value="june-box-sf02" >缩小至0.2倍</option>
					<option <? if(@$css3Mode1=='june-box-sf04'){echo'selected="selected"';} ?> value="june-box-sf04" >缩小至0.4倍</option>
					<option <? if(@$css3Mode1=='june-box-sf05'){echo'selected="selected"';} ?> value="june-box-sf05" >缩小至0.5倍</option>
					<option <? if(@$css3Mode1=='june-box-sf06'){echo'selected="selected"';} ?> value="june-box-sf06" >缩小至0.6倍</option>
					<option <? if(@$css3Mode1=='june-box-sf08'){echo'selected="selected"';} ?> value="june-box-sf08" >缩小至0.8倍</option>
					<option <? if(@$css3Mode1=='june-box-sf09'){echo'selected="selected"';} ?> value="june-box-sf09" >缩小至0.9倍</option>
					<option <? if(@$css3Mode1=='june-box-sf095'){echo'selected="selected"';} ?> value="june-box-sf095" >缩小至0.95倍</option>
					<option <? if(@$css3Mode1=='june-box-sf098'){echo'selected="selected"';} ?> value="june-box-sf098" >缩小至0.98倍</option>
					<option <? if(@$css3Mode1=='june-box-sf102'){echo'selected="selected"';} ?> value="june-box-sf102" >放大至1.02倍</option>
					<option <? if(@$css3Mode1=='june-box-sf105'){echo'selected="selected"';} ?> value="june-box-sf105" >放大至1.05倍</option>
					<option <? if(@$css3Mode1=='june-box-sf110'){echo'selected="selected"';} ?> value="june-box-sf110" >放大至1.1倍</option>
					<option <? if(@$css3Mode1=='june-box-sf120'){echo'selected="selected"';} ?> value="june-box-sf120" >放大至1.2倍</option>
					<option <? if(@$css3Mode1=='june-box-sf150'){echo'selected="selected"';} ?> value="june-box-sf150" >放大至1.5倍</option>
					<option <? if(@$css3Mode1=='june-box-sf180'){echo'selected="selected"';} ?> value="june-box-sf180" >放大至1.8倍</option>
					<option <? if(@$css3Mode1=='june-box-sf200'){echo'selected="selected"';} ?> value="june-box-sf200" >放大至2倍</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r10" >顺时针旋转10度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r20" >顺时针旋转20度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r30" >顺时针旋转30度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r40" >顺时针旋转40度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r50" >顺时针旋转50度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r60" >顺时针旋转60度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r70" >顺时针旋转70度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r80" >顺时针旋转80度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r90" >顺时针旋转90度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r120" >顺时针旋转120度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r180" >顺时针旋转180度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r270" >顺时针旋转270度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r360" >顺时针旋转360度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-r720" >顺时针旋转720度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr10" >逆时针旋转10度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr20" >逆时针旋转20度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr30" >逆时针旋转30度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr40" >逆时针旋转40度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr50" >逆时针旋转50度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr60" >逆时针旋转60度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr70" >逆时针旋转70度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr80" >逆时针旋转80度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr90" >逆时针旋转90度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr120" >逆时针旋转120度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr180" >逆时针旋转180度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr270" >逆时针旋转270度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr360" >逆时针旋转360度</option>
					<option <? if(@$css3Mode1=='june-box-xxx'){echo'selected="selected"';} ?> value="june-box-fr720" >逆时针旋转720度</option>
				</select>
			</li>
			<li>
				<label for="oths_characterHoverSpeed">文字切换速度：</label>
				<select id="oths_characterHoverSpeed" name="characterHoverSpeed">
                    <option value="" <? if(@$data['characterHoverSpeed']==''){echo'selected="selected"';} ?>>无效果</option>
                    <option value="trans02s" <? if(@$data['characterHoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans05s" <? if(@$data['characterHoverSpeed']=='trans05s'){echo'selected="selected"';} ?>>中速</option>
					<option value="trans1s" <? if(@$data['characterHoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li>
				<label for="oths_hcd1">鼠标经过时显示：</label>
				<div id="oths_hcd1">
					<input type="checkbox" id="oths_hc2" name="borderControl" value="hborder" <? if(@$data['borderControl']=='hborder'){echo'checked="checked"';} ?> />
					<label for="oths_hc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="oths_hc3" name="shadowControl" value="shadowShow"  <? if(@$data['shadowControl']=='shadowShow'){echo'checked="checked"';} ?>/>
					<label for="oths_hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
					<input type="checkbox" id="oths_hc4" name="outlineControl" value="outlineShow" <? if(@$data['outlineControl']=='outlineShow'){echo'checked="checked"';} ?> />
					<label for="oths_hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
				</div>
			</li>
			<li class="hborder borderControl">
				<label for="oths_hi5">边框->边框颜色：</label>
				<input id="oths_hi5" class="setinput tColorPicker" type="text" title="" name="borderColor" value="<?=@$data['borderColor']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="oths_hi6">边框粗细：</label>
				<input id="oths_hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=@$data['borderWidth']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="oths_hi7">圆角弧度：</label>
				<input id="oths_hi7" class="setinput" type="text" title="" name="borderRadius" value="<?=@$data['borderRadius']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="oths_hy4">阴影->阴影颜色：</label>
				<input id="oths_hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor" value="<?=@$data['shadowColor']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="oths_hy3">模糊距离：</label>
				<input id="oths_hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=@$data['shadowBlur']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="oths_hy5">阴影尺寸：</label>
				<input id="oths_hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=@$data['shadowSize']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="oths_hy1">水平距离：</label>
				<input id="oths_hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=@$data['shadowLeft']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="oths_hy2">垂直距离：</label>
				<input id="oths_hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=@$data['shadowTop']?>" />
			</li>
			<input id="oths_hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=@$data['shadowStyle']?>" />
			<li class="outlineShow outlineControl">
				<label for="oths_hi9">扩展->外框颜色：</label>
				<input id="oths_hi9" class="setinput tColorPicker" type="text" title="" name="outlineColor" value="<?=@$data['outlineColor']?>" />
			</li>
			<li class="outlineShow outlineControl">
				<label for="oths_outlineWidth">外框粗细：</label>
				<select id="oths_outlineWidth" name="outlineWidth">
                    <option value="juneol2" <? if(@$data['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
					<option value="juneol1" <? if(@$data['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
					<option value="juneol" <? if(@$data['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="oths_outlineSpeed">动画速度：</label>
				<select id="oths_outlineSpeed" name="outlineSpeed">
                    <option value="" <? if(@$data['outlineSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
					<option value="trans01s" <? if(@$data['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans02s" <? if(@$data['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
					<option value="trans05s" <? if(@$data['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
					<option value="trans1s" <? if(@$data['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="oths_hi8">阴影颜色：</label>
				<input id="oths_hi8" class="setinput tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=@$data['outlineShadowColor']?>" />
			</li>
			<li class="hnborder borderControl3" style="text-align:center;font-size:14px;color:#333;background:url(http://img03.taobaocdn.com/imgextra/i3/39767794/TB2RPU4apXXXXcLXXXXXXXXXXXX_!!39767794.png);"><span style="background:#fff;padding:0 10px;">文字下边线</span></li>
			<li class="hnborder borderControl3">
				<label for="oths_rd2">文字下边线：</label>
				<div id="oths_rd2">
					<input type="radio" id="oths_r3" name="characterUnderLine" value="on" <? if(@$data['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
					<label for="oths_r3">显示</label>
					<input type="radio" id="oths_r4" name="characterUnderLine" value="off" <? if(@$data['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
					<label for="oths_r4" style="width: 70px;">不显示</label>
				</div>
			</li>
			<li class="hnborder borderControl3">
				<label for="oths_characterUnderLineStyle">下边线样式：</label>
				<select id="oths_characterUnderLineStyle" name="characterUnderLineStyle">
                    <option value="solid" <? if(@$data['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
					<option value="dotted" <? if(@$data['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
				</select>
			</li>
			<li class="hnborder borderControl3">
				<label for="oths_characterUnderLineWeight">下边线粗细：</label>
				<select id="oths_characterUnderLineWeight" name="characterUnderLineWeight">
                    <option value="1" <? if(@$data['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if(@$data['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
					<option value="3" <? if(@$data['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
					<option value="4" <? if(@$data['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
					<option value="5" <? if(@$data['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
				</select>
			</li>
			<li class="hnborder borderControl3">
				<label for="oths_i8">下边线颜色：</label>
				<input id="oths_i8" class="setinput tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=@$data['characterUnderLineColor']?>" />
			</li>
		</ul>
	</div>
	<!--<div id="oths_tabs-3">
		<ul class="setform">
			<li>
				<label for="oths_ii1">应用宽度：</label>
				<input id="oths_ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="" />
			</li>
			<li>
				<label for="oths_ii2">应用高度：</label>
				<input id="oths_ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="" />
			</li>
			<li>
				<label for="oths_ii3">应用上边距：</label>
				<input id="oths_ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="" />
			</li>
			<li>
				<label for="oths_ii4">应用左边距：</label>
				<input id="oths_ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="" />
			</li>
		</ul>
	</div>
	<div id="oths_tabs-4">
		<ul class="setform">
			<li>
				<label for="oths_pSwitch">弹出层开关：</label>
				<select id="oths_pSwitch" name="popupConfig.pSwitch">
					<option value="no" >关闭弹出层</option>
					<option value="yes" >鼠标经过弹出层</option>
				</select>
			</li>
			<li>
				<label for="oths_popupPosition">弹出层位置：</label>
				<select id="oths_popupPosition" name="popupConfig.popupPosition">
					<optgroup label="应用上方">
						<option value="'tl','bl'" >应用上方左对齐</option>
						<option value="'tc','bc'" >应用上方居中</option>
						<option value="'tr','br'" >应用上方右对齐</option>
					</optgroup>
					<optgroup label="应用右侧">
						<option value="'tr','tl'" >应用右侧顶部对齐</option>
						<option value="'cr','cl'" >应用右侧居中</option>
						<option value="'br','bl'" >应用右侧底部对齐</option>
					</optgroup>
					<optgroup label="应用下方">
						<option value="'br','tr'" >应用下方右对齐</option>
						<option value="'bc','tc'" >应用下方居中</option>
						<option value="'bl','tl'" >应用下方左对齐</option>
					</optgroup>
					<optgroup label="应用左侧">
						<option value="'bl','br'" >应用左侧底部对齐</option>
						<option value="'cl','cr'" >应用左侧居中</option>
						<option value="'tl','tr'" >应用左侧顶部对齐</option>
					</optgroup>
					
					<optgroup label="覆盖应用">
						<option value="'tl','tl'" >应用顶部左对齐</option>
						<option value="'tc','tc'" >对齐顶部居中</option>
						<option value="'tr','tr'" >应用顶部右对齐</option>
						<option value="'br','br'" >应用底部右对齐</option>
						<option value="'bc','bc'" >应用底部居中</option>
						<option value="'bl','bl'" >应用底部左对齐</option>
						<option value="'cc','cc'" style="color:#f00" >应用中心点(可做放大镜)</option>
					</optgroup>
				</select>
			</li>
			<li>
				<label for="oths_iii1">水平偏移：</label>
				<input id="oths_iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="popupConfig.spaceX" value="" />
			</li>
			<li>
				<label for="oths_iii2">垂直偏移：</label>
				<input id="oths_iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="popupConfig.spaceY" value="" />
			</li>
			<li>
				<label for="oths_popupHtml">自定义内容：</label>
				<textarea id="oths_popupHtml" name="popupConfig.popupHtml"></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="popupConfig.popupHtml" data-zdyAppID="">可视化编辑</button>
			</li>
			<li>
				<label for="oths_popupCss3Mode">弹出特效：</label>
				<select id="oths_popupCss3Mode" name="popupConfig.css3Mode">
					<option value="" selected="selected">无效果</option>
					<option value="effect_w" >横向展开</option>
					<option value="effect_h" >纵向展开</option>
					<option value="effect_wh" >斜向展开</option>
				</select>
			</li>
			<li class="popupCss3Mode">
				<label for="oths_popupCss3Bezier">弹出动画特效：</label>
				<select id="oths_popupCss3Bezier" name="popupConfig.css3Bezier">
					<option value="" selected="selected">匀速平滑</option>
					<option value="bs1" >由慢到快（弱）</option>
					<option value="bs2" >由慢到快（中）</option>
					<option value="bs3" >由慢到快（强）</option>
					<option value="bq1" >由快到慢（弱）</option>
					<option value="bq2" >由快到慢（中）</option>
					<option value="bq3" >由快到慢（强）</option>
				</select>
			</li>
			<li class="popupCss3Mode">
				<label for="oths_popupCss3Speed">弹出动画速度：</label>
				<select id="oths_popupCss3Speed" name="popupConfig.css3Speed">
										<option value="0.1s" >0.1秒</option>
										<option value="0.2s" >0.2秒</option>
										<option value="0.3s" >0.3秒</option>
										<option value="0.4s" >0.4秒</option>
										<option value="0.5s" >0.5秒</option>
										<option value="0.6s" >0.6秒</option>
										<option value="0.7s" >0.7秒</option>
										<option value="0.8s" >0.8秒</option>
										<option value="0.9s" >0.9秒</option>
										<option value="1s" >1秒</option>
										<option value="1.1s" >1.1秒</option>
										<option value="1.2s" >1.2秒</option>
										<option value="1.3s" >1.3秒</option>
										<option value="1.4s" >1.4秒</option>
										<option value="1.5s" >1.5秒</option>
										<option value="1.6s" >1.6秒</option>
										<option value="1.7s" >1.7秒</option>
										<option value="1.8s" >1.8秒</option>
										<option value="1.9s" >1.9秒</option>
										<option value="2s" >2秒</option>
										<option value="2.1s" >2.1秒</option>
										<option value="2.2s" >2.2秒</option>
										<option value="2.3s" >2.3秒</option>
										<option value="2.4s" >2.4秒</option>
										<option value="2.5s" >2.5秒</option>
										<option value="2.6s" >2.6秒</option>
										<option value="2.7s" >2.7秒</option>
										<option value="2.8s" >2.8秒</option>
										<option value="2.9s" >2.9秒</option>
										<option value="3s" >3秒</option>
										<option value="3.1s" >3.1秒</option>
										<option value="3.2s" >3.2秒</option>
										<option value="3.3s" >3.3秒</option>
										<option value="3.4s" >3.4秒</option>
										<option value="3.5s" >3.5秒</option>
										<option value="3.6s" >3.6秒</option>
										<option value="3.7s" >3.7秒</option>
										<option value="3.8s" >3.8秒</option>
										<option value="3.9s" >3.9秒</option>
										<option value="4s" >4秒</option>
										<option value="4.1s" >4.1秒</option>
										<option value="4.2s" >4.2秒</option>
										<option value="4.3s" >4.3秒</option>
										<option value="4.4s" >4.4秒</option>
										<option value="4.5s" >4.5秒</option>
										<option value="4.6s" >4.6秒</option>
										<option value="4.7s" >4.7秒</option>
										<option value="4.8s" >4.8秒</option>
										<option value="4.9s" >4.9秒</option>
										<option value="5s" >5秒</option>
										<option value="5.1s" >5.1秒</option>
										<option value="5.2s" >5.2秒</option>
										<option value="5.3s" >5.3秒</option>
										<option value="5.4s" >5.4秒</option>
										<option value="5.5s" >5.5秒</option>
										<option value="5.6s" >5.6秒</option>
										<option value="5.7s" >5.7秒</option>
										<option value="5.8s" >5.8秒</option>
										<option value="5.9s" >5.9秒</option>
										<option value="6s" >6秒</option>
										<option value="6.1s" >6.1秒</option>
										<option value="6.2s" >6.2秒</option>
										<option value="6.3s" >6.3秒</option>
										<option value="6.4s" >6.4秒</option>
										<option value="6.5s" >6.5秒</option>
										<option value="6.6s" >6.6秒</option>
										<option value="6.7s" >6.7秒</option>
										<option value="6.8s" >6.8秒</option>
										<option value="6.9s" >6.9秒</option>
										<option value="7s" >7秒</option>
									</select>
			</li>
		</ul>
	</div>
	<div id="oths_tabs-99">
		<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="324" src="http://cloud.video.taobao.com//play/u/39767794/p/2/e/1/t/1/19179936.swf" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		<a class="june-preview" style="display:block;margin:5px auto;text-align:center;" href="http://cloud.video.taobao.com//play/u/39767794/p/2/e/1/t/1/19179936.swf" target="_blank">新窗口全屏观看</a>
	</div>
	-->
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
	"<?=@$data['characterMode']?>" == "text" ? ($("#oths_l2").html("文字内容："),i2Val = $("#oths_i2").val()) : ($("#oths_l2").html("文字内容："),i2Val1 = $("#oths_i2").val());
	("<?=@$data['characterMode']?>" == "price" ||  "<?=@$data['characterMode']?>" == "_price") ? $("#oths_tForm .price_price").show() : $("#oths_tForm .price_price").hide();
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
	"<?=@$data['characterLineMulti']?>" == "yes" && ( $("#oths_tForm .characterLineMultiNo").hide(), $("#oths_tForm .characterLineMulti").show() );
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
	"<?=@$data['borderControl']?>"=="hborder" ? ($("#oths_tForm .borderControl").hide(),$("#oths_tForm .hborder").show()) : ($("#oths_tForm .borderControl").hide(),$("#oths_tForm .hnborder").show());
	"<?=@$data['shadowControl']?>"=="shadowShow" && $("#oths_tForm .shadowControl").show();
	"<?=@$data['outlineControl']?>"=="outlineShow" && $("#oths_tForm .outlineControl").show();
	
	
	"<?=$borderControl1?>"=="hborder1" && $("#oths_tForm .borderControl1").show();
	"<?=$borderControl1?>"=="shadowShow1" && $("#oths_tForm .shadowControl1").show();
	
	
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
	//tt
	// var allowTime = 'false';
	// $("#oths_popupCss3Mode").val() == "" && $("#oths_tabs").find(".popupCss3Mode").hide();
	// $("#oths_popupCss3Mode").fontselectmenu("destroy").selectmenu({
		// change: function() {
			// var val = $(this).val();
			// if(val == "") {
				// $("#oths_tabs").find(".popupCss3Mode").hide();
			// } else {
				// if(allowTime == "false") {
					// alert("请先登录后再使用此功能！");
					// $(this).val("").selectmenu( "refresh" );
					// event.preventDefault();
					// event.stopPropagation();
					// return false;
				// }
				// $("#oths_tabs").find(".popupCss3Mode").show();
			// }
		// }
	// });
});
</script>