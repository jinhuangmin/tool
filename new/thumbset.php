<?
$data=$_POST;
?>
<form id="oths_tForm" form-data="oths_thumbset" method="post" >
<div id="oths_tabs">
	<ul>
		<li><a href="#oths_tabs-1">缩略图</a></li>
		<li><a href="#oths_tabs-2">切换缩略图</a></li>
	</ul>
	<div id="oths_tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="oths_characterMode">文字模式：</label>
				<select id="oths_characterMode" name="characterMode"><? $characterMode=isset($_POST['characterMode'])?$_POST['characterMode']:'text'; ?>
                    <option value="text" <? if($characterMode=='text'){echo'selected="selected"';} ?>>普通</option>
					<option value="price" <? if($characterMode=='price'){echo'selected="selected"';} ?>>宝贝原价</option>
					<option value="_price" <? if($characterMode=='_price'){echo'selected="selected"';} ?>>宝贝现价</option>
					<option value="sale" <? if($characterMode=='sale'){echo'selected="selected"';} ?>>宝贝销量</option>
					<option value="title" <? if($characterMode=='title'){echo'selected="selected"';} ?>>宝贝标题</option>
				</select>
			</li>
			<li>
				<label id="oths_l2" for="oths_i2">文字内容：</label>
				<input id="oths_i2" class="setinput" type="text" title="请按照对应的文字模式输入文字内容或宝贝链接" name="characterContent" value="<?=@$data['characterContent']?>" />
			</li>
			<li style="display:none;">
				<label for="oths_characterFixed">价格保留小数：</label>
				<select id="oths_characterFixed" name="characterFixed">
					<option value="0" <? if(@$data['characterFixed']=='0'){echo'selected="selected"';} ?>>0</option>
					<option value="1" <? if(@$data['characterFixed']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if(@$data['characterFixed']=='2'){echo'selected="selected"';} ?>>2</option>
				</select>
			</li>
			<li style="display:none;">
				<label for="oths_rd3">文字对齐方式：</label>
				<div id="oths_rd3"><? $characterAlign=isset($_POST['characterAlign'])?$_POST['characterAlign']:'center'; ?>
                    <input type="radio" id="oths_r5" name="characterAlign" value="left" <? if($characterAlign=='left'){echo'checked="checked"';} ?> />
					<label for="oths_r5">居左</label>
					<input type="radio" id="oths_r6" name="characterAlign" value="center" <? if($characterAlign=='center'){echo'checked="checked"';} ?> />
					<label for="oths_r6">居中</label>
					<input type="radio" id="oths_r7" name="characterAlign" value="right" <? if($characterAlign=='right'){echo'checked="checked"';} ?> />
					<label for="oths_r7">居右</label>

				</div>
			</li>
			<li style="display:none;">
				<label for="oths_catss1">文字缩进距离：</label>
				<input id="oths_catss1" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="characterSpace" value="<?=@$data['characterSpace']?>" />
			</li>
			<li>
				<label for="oths_i4">文字大小：</label>
				<input id="oths_i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=@$data['characterSize']?>" />
			</li>
			<li>
				<label for="oths_i5">文字颜色：</label>
				<input id="oths_i5" class="setinput tColorPicker" type="text" title="" name="characterColor" value="<?=$data['characterColor']?>" />
			</li>
			<li>
				<label for="oths_i9">文字背景颜色：</label>
				<input id="oths_i9" class="setinput tColorPicker" type="text" title="优先显示背景图片" name="characterBgColor" value="<?=$data['characterBgColor']?>" />
			</li>
			<li>
				<label for="oths_ibs1">文字背景图片：</label>
				<input id="oths_ibs1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="characterBgSrc" value="<?=$data['characterBgSrc']?>" />
			</li>
			<li>
				<label for="oths_characterWeight">文字粗细：</label>
				<select id="oths_characterWeight" name="characterWeight">
					<option value="normal" <? if($data['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
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
			<li style="display:none;">
				<label for="oths_characterDash">文字中划线：</label>
				<select id="oths_characterDash" name="characterDash">
					<option value="" <? if($data['characterDash']==''){echo'selected="selected"';} ?>>不显示</option>
					<option value="line-through" <? if($data['characterDash']=='line-through'){echo'selected="selected"';} ?>>显示</option>
				</select>
			</li>
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
				<label for="oths_i6">文字大小：</label>
				<input id="oths_i6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSizeHover" value="<?=@$data['characterSizeHover']?>" />
			</li>
			<li>
				<label for="oths_i7">文字颜色：</label>
				<input id="oths_i7" class="setinput tColorPicker" type="text" title="" name="characterColorHover" value="<?=@$data['characterColorHover']?>" />
			</li>
			<li>
				<label for="oths_i10">文字背景颜色：</label>
				<input id="oths_i10" class="setinput tColorPicker" type="text" title="优先显示背景图片" name="characterBgColorHover" value="<?=@$data['characterBgColorHover']?>" />
			</li>
			<li>
				<label for="oths_ibs2">文字背景图片：</label>
				<input id="oths_ibs2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="characterBgSrcHover" value="<?=@$data['characterBgSrcHover']?>" />
			</li>
			<li>
				<label for="oths_characterWeightHover">文字粗细：</label>
				<select id="oths_characterWeightHover" name="characterWeightHover">
					<option value="normal" <? if(@$data['characterWeightHover']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if(@$data['characterWeightHover']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
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
            <li class="setshousuo">----------------------- 效果设置 -----------------------------------------</li>
			<li>
				<label for="oths_css3ModeX1">横向移动：</label>
				<select id="oths_css3ModeX1" name="css3ModeX1"><? $css3ModeX1=@$data['css3ModeX1']; ?>
					<option value="" <? if($css3ModeY1==''){echo'selected="selected"';} ?>>无效果</option>	
        	<?


				$arraytype= array('june-box-lx','june-box-rx');
				foreach($arraytype as $type){
				   if($type=='june-box-lx'){$text='向左移动';}
				   else if($type=='june-box-rx'){$text='向右移动';}
	                for($num=1;$num<63;$num++){
	                	$n=$num*10;
						$sx=''.$type.''.$n.'';
					   if($css3ModeX1==$sx){$select='selected="selected"';}else{$select='';}
					   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$n.'像素</option>';	
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
                    for($num=1;$num<63;$num++){
                    $n=$num*10;	
					$sx=''.$type.''.$n.'';
				   if($css3ModeY1==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$n.'像素</option>';	
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

			<li style="display:none;">
				<label for="oths_rd2">文字下划线：</label>
				<div id="oths_rd2">
                    <input type="radio" id="oths_r3" name="characterUnderLine" value="on" <? if(@$data['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
					<label for="oths_r3">显示</label>
					<input type="radio" id="oths_r4" name="characterUnderLine" value="off" <? if(@$data['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
					<label for="oths_r4" style="width: 70px;">不显示</label>
				</div>
			</li>
			<li style="display:none;">
				<label for="oths_characterUnderLineStyle">下划线样式：</label>
				<select id="oths_characterUnderLineStyle" name="characterUnderLineStyle">
					<option value="solid" <? if(@$data['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
					<option value="dotted" <? if(@$data['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
				</select>
			</li>
			<li style="display:none;">
				<label for="oths_characterUnderLineWeight">下划线粗细：</label>
				<select id="oths_characterUnderLineWeight" name="characterUnderLineWeight">
					 <option value="1" <? if(@$data['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if(@$data['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
					<option value="3" <? if(@$data['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
					<option value="4" <? if(@$data['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
					<option value="5" <? if(@$data['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
				</select>
			</li>
			<li style="display:none;">
				<label for="oths_i8">下划线颜色：</label>
				<input id="oths_i8" class="setinput tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=@$data['characterUnderLineColor']?>" />
			</li>
		</ul>
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
	var i2Val = "", i2Val1 = "";
	"<?=@$data['characterMode']?>" == "text" ? ($("#oths_l2").html("文字内容："),i2Val = $("#oths_i2").val()) : ($("#oths_l2").html("宝贝链接："),i2Val1 = $("#oths_i2").val());
	("<?=@$data['characterMode']?>" == "price" ||  "<?=@$data['characterMode']?>" == "_price") ? $(".price_price").show() : $(".price_price").hide();
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
			$(".price_price").show()
		} else {
			$(".price_price").hide()
		}
	  }
	});
});
</script>