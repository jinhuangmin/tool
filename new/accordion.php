<?
$data=$_POST; 

$nestConfigs=$data['nestConfig'];
$num=count($nestConfigs);
if($data['active']==-1){$active=2;}else{$active=$data['active'];}
?>
<form id="tForm" form-data="jadb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">内容</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="adDirection">手风琴展开方向：</label>
				<select id="adDirection" name="adDirection">
					<option value="left" <? if($data['adDirection']=='left'){echo'selected="selected"';} ?>> 横向从左至右</option>
					<option value="right" <? if($data['adDirection']=='right'){echo'selected="selected"';} ?>>横向从右至左</option>
					<option value="up" <? if($data['adDirection']=='up'){echo'selected="selected"';} ?>>纵向从上至下</option>
					<option value="down" <? if($data['adDirection']=='down'){echo'selected="selected"';} ?>>纵向从下至上</option>
				</select>
			</li>
			<li>
				<label for="adTrigger">特效触发方式：</label>
				<select id="adTrigger" name="adTrigger">
					<option value="click" <? if($data['adTrigger']=='click'){echo'selected="selected"';} ?>> 鼠标点击触发</option>
					<option value="mouse" <? if($data['adTrigger']=='mouse'){echo'selected="selected"';} ?>>鼠标经过触发</option>
				</select>
			</li>
			<li>
				<label for="adMode">面板控制：</label>
				<select id="adMode" name="adMode">
					<option value="no" <? if($data['adMode']=='no'){echo'selected="selected"';} ?>> 不支持多面板同时展开</option>
					<option value="yes" <? if($data['adMode']=='yes'){echo'selected="selected"';} ?>>支持多面板同时展开</option>
				</select>
			</li>
			<li class="ad1fp">
				<label for="adHideMode">面板展开后：</label>
				<select id="adHideMode" name="adHideMode">
					<option value="no" <? if($data['adHideMode']=='no'){echo'selected="selected"';} ?>> 显示标题</option>
					<option value="yes" <? if($data['adHideMode']=='yes'){echo'selected="selected"';} ?>>隐藏标题</option>
				</select>
			</li>
			<li class="ad2fp">
				<label for="adActive">默认展开：</label>
				<select id="adActive" name="adActive">
                    <option value="1" <? if($data['adActive']=='1'){echo'selected="selected"';} ?>>第1个面板</option>
                    <option value="2" <? if($data['adActive']=='2'){echo'selected="selected"';} ?>>第2个面板</option>
                    <option value="3" <? if($data['adActive']=='3'){echo'selected="selected"';} ?>>第3个面板</option>
                    <option value="4" <? if($data['adActive']=='4'){echo'selected="selected"';} ?>>第4个面板</option>
                    <option value="5" <? if($data['adActive']=='5'){echo'selected="selected"';} ?>>第5个面板</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label for="titleBHControl">是否使用标题变换：</label>
				<select id="titleBHControl" name="titleBHControl">
					<option value="yes" <? if($data['titleBHControl']=='yes'){echo'selected="selected"';} ?>> 鼠标点击(经过)变换</option>
					<option value="no" <? if($data['titleBHControl']=='no'||$data['titleBHControl']==''){echo'selected="selected"';} ?>>鼠标点击(经过)无变化</option>
				</select>
			</li>
			<li style="height:auto;">
				<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">
					
                  <?  foreach($nestConfigs as $i=>$nestConfig){ $k=$i+1; ?>
                    
                    <li class="sliderContent" style="clear:both;height:auto;">
						
                        <span style="display:block;text-align:center;font-size:14px;color:#333;">---------------------- 标题<?=$k?>设置 --------------------</span>
						<label for="sc<?=$i?>rd1">标题内容：</label>
						<div id="sc<?=$i?>rd1">
							<input type="radio" id="child<?=$i?>ra" name="nestConfig[<?=$i?>].cType" data-choose="title" value="imgContent" <? if($nestConfig['cType']=='imgContent'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>ra" title="">图片</label>
							<input type="radio" id="child<?=$i?>rb" name="nestConfig[<?=$i?>].cType" data-choose="title" value="textContent" <? if($nestConfig['cType']=='textContent'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rb" title="">文字</label>
							<input type="radio" id="child<?=$i?>rc" name="nestConfig[<?=$i?>].cType" data-choose="title" value="customContent" <? if($nestConfig['cType']=='customContent'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rc" title="" style="width:100px;">自定义内容</label>
						</div>
						<ul style="padding-left:0px;list-style:none;">
							<li class="imgContent contentType" style="clear:both;padding-top:10px;">
								<label for="child<?=$i?>i1">背景图片：</label>
								<input id="child<?=$i?>i1" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].pSrc" value="<?=$nestConfig['pSrc']?>" />
							</li>
							<li class="textContent contentType" style="clear:both;padding-top:10px;">
								<label for="child<?=$i?>i3">文字内容：</label>
								<input id="child<?=$i?>i3" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].textContent" value="<?=$nestConfig['textContent']?>" />
							</li>
							<li class="imgContent textContent contentType">
								<label for="child<?=$i?>i2">链接地址：</label>
								<input id="child<?=$i?>i2" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].href" value="<?=$nestConfig['href']?>" />
							</li>
							<li class="imgContent textContent contentType">
								<label for="child<?=$i?>hrefMode">打开方式：</label>
								<select id="child<?=$i?>hrefMode" name="nestConfig[<?=$i?>].hrefMode">
									<option value="_self" <? if($nestConfig['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
									<option value="_blank" <? if($nestConfig['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
								</select>
							</li>
							<li class="textContent contentType">
								<label for="child<?=$i?>rd3">对齐方式：</label>
								<div id="child<?=$i?>rd3">
									<input type="radio" id="child<?=$i?>r5" name="nestConfig[<?=$i?>].characterAlign" value="left" <? if($nestConfig['characterAlign']=='left'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>r5">居左</label>
									<input type="radio" id="child<?=$i?>r6" name="nestConfig[<?=$i?>].characterAlign" value="center" <? if($nestConfig['characterAlign']=='center'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>r6">居中</label>
									<input type="radio" id="child<?=$i?>r7" name="nestConfig[<?=$i?>].characterAlign" value="right" <? if($nestConfig['characterAlign']=='right'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>r7">居右</label>
								</div>
							</li>
							<li class="textContent contentType">
								<label for="child<?=$i?>i4">文字颜色：</label>
								<input id="child<?=$i?>i4" class="setinput tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterColor" value="<?=$nestConfig['characterColor']?>" />
							</li>
							<li class="textContent contentType">
								<label for="child<?=$i?>i5">文字大小：</label>
								<input id="child<?=$i?>i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig[<?=$i?>].characterSize" value="<?=$nestConfig['characterSize']?>" />
							</li>
							<li class="textContent contentType">
								<label for="child<?=$i?>characterFont">文字字体：</label>
								<select id="child<?=$i?>characterFont" name="nestConfig[<?=$i?>].characterFont">
									<option value="宋体" <? if($nestConfig['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
									<option value="黑体" <? if($nestConfig['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
									<option value="微软雅黑" <? if($nestConfig['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
									<option value="楷体" <? if($nestConfig['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
									<option value="Arial" <? if($nestConfig['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
									<option value="Verdana" <? if($nestConfig['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
									<option value="Georgia" <? if($nestConfig['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
									<option value="Times New Roman" <? if($nestConfig['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
									<option value="Trebuchet MS" <? if($nestConfig['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
									<option value="Courier" <? if($nestConfig['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
									<option value="Impact" <? if($nestConfig['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
									<option value="Comic Sans MS" <? if($nestConfig['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
									<option value="Tahoma" <? if($nestConfig['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
									<option value="Symbol" <? if($nestConfig['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
									<option value="Palatino Linotype" <? if($nestConfig['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
									<option value="Bookman Old Style" <? if($nestConfig['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
								</select>
							</li>
							<li class="textContent contentType">
								<label for="child<?=$i?>characterWeight">文字粗细：</label>
								<select id="child<?=$i?>characterWeight" name="nestConfig[<?=$i?>].characterWeight">
									<option value="normal" <? if($nestConfig['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
									<option value="bold" <? if($nestConfig['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
								</select>
							</li>
							<li class="textContent contentType">
								<label for="child<?=$i?>i6">背景颜色：</label>
								<input id="child<?=$i?>i6" class="setinput tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterBgColor" value="<?=$nestConfig['characterBgColor']?>" />
							</li>
							<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;">
								<label for="child<?=$i?>_ta1">自定义内容：</label>
								<textarea id="child<?=$i?>_ta1" name="nestConfig[<?=$i?>].cContent"><?=stripslashes($nestConfig['cContent'])?></textarea>
								<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$i?>].cContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
							</li>
						</ul>
						<span class="titleBH" style="display:block;text-align:center;font-size:14px;color:#333;">---------------------- 标题<?=$k?>变换设置 --------------------</span>
                <label class="titleBH" for="sc<?=$i?>rd1">标题内容：</label>
                <div class="titleBH" id="sc<?=$i?>rd1">
                    <input type="radio" id="child<?=$i?>bh_ra" name="nestConfig[<?=$i?>].cTypeBH" data-choose="titleBH" value="imgContentBH" <? if($nestConfig['cTypeBH']=='imgContentBH'){echo'checked="checked"';} ?> />
                    <label for="child<?=$i?>bh_ra" title="">图片</label>
                    <input type="radio" id="child<?=$i?>bh_rb" name="nestConfig[<?=$i?>].cTypeBH" data-choose="titleBH" value="textContentBH" <? if($nestConfig['cTypeBH']=='textContentBH'){echo'checked="checked"';} ?> />
                    <label for="child<?=$i?>bh_rb" title="">文字</label>
                    <input type="radio" id="child<?=$i?>bh_rc" name="nestConfig[<?=$i?>].cTypeBH" data-choose="titleBH" value="customContentBH" <? if($nestConfig['cTypeBH']=='customContentBH'){echo'checked="checked"';} ?> />
                    <label for="child<?=$i?>bh_rc" title="" style="width:100px;">自定义内容</label>
						</div>
						<ul class="titleBH" style="padding-left:0px;list-style:none;">
							<li class="imgContentBH contentTypeBH" style="clear:both;padding-top:10px;">
								<label for="child<?=$i?>bh_i1">背景图片：</label>
								<input id="child<?=$i?>bh_i1" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].pSrcBH" value="<?=$nestConfig['pSrcBH']?>" />
							</li>
							<li class="textContentBH contentTypeBH" style="clear:both;padding-top:10px;">
								<label for="child<?=$i?>bh_i3">文字内容：</label>
								<input id="child<?=$i?>bh_i3" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].textContentBH" value="<?=$nestConfig['textContentBH']?>" />
							</li>
							<li class="imgContentBH textContentBH contentTypeBH">
								<label for="child<?=$i?>bh_i2">链接地址：</label>
								<input id="child<?=$i?>bh_i2" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].hrefBH" value="<?=$nestConfig['hrefBH']?>" />
							</li>
							<li class="imgContentBH textContentBH contentTypeBH">
								<label for="child<?=$i?>hrefMode">打开方式：</label>
								<select id="child<?=$i?>hrefMode" name="nestConfig[<?=$i?>].hrefModeBH">
									<option value="_self" <? if($nestConfig['hrefModeBH']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
									<option value="_blank" <? if($nestConfig['hrefModeBH']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
								</select>
							</li>
							<li class="textContentBH contentTypeBH">
								<label for="child<?=$i?>bh_rd3">对齐方式：</label>
								<div id="child<?=$i?>bh_rd3">
									<input type="radio" id="child0bh_r5" name="nestConfig[<?=$i?>].characterAlignBH" value="left" <? if($nestConfig['characterAlignBH']=='left'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>bh_r5">居左</label>
									<input type="radio" id="child0bh_r6" name="nestConfig[<?=$i?>].characterAlignBH" value="center" <? if($nestConfig['characterAlignBH']=='center'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>bh_r6">居中</label>
									<input type="radio" id="child0bh_r7" name="nestConfig[<?=$i?>].characterAlignBH" value="right" <? if($nestConfig['characterAlignBH']=='right'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>bh_r7">居右</label>
								</div>
							</li>
							<li class="textContentBH contentTypeBH">
								<label for="child<?=$i?>bh_i4">文字颜色：</label>
								<input id="child<?=$i?>bh_i4" class="setinput tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterColorBH" value="<?=$nestConfig['characterColorBH']?>" />
							</li>
							<li class="textContentBH contentTypeBH">
								<label for="child<?=$i?>bh_i5">文字大小：</label>
								<input id="child<?=$i?>bh_i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig[<?=$i?>].characterSizeBH" value="<?=$nestConfig['characterSizeBH']?>" />
							</li>
							<li class="textContentBH contentTypeBH">
								<label for="child<?=$i?>characterFontBH">文字字体：</label>
								<select id="child<?=$i?>characterFontBH" name="nestConfig[<?=$i?>].characterFontBH">
					<option value="宋体" <? if($nestConfig['characterFontBH']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($nestConfig['characterFontBH']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($nestConfig['characterFontBH']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($nestConfig['characterFontBH']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($nestConfig['characterFontBH']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($nestConfig['characterFontBH']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($nestConfig['characterFontBH']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($nestConfig['characterFontBH']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($nestConfig['characterFontBH']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($nestConfig['characterFontBH']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($nestConfig['characterFontBH']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($nestConfig['characterFontBH']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($nestConfig['characterFontBH']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($nestConfig['characterFontBH']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($nestConfig['characterFontBH']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($nestConfig['characterFontBH']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
								</select>
							</li>
							<li class="textContentBH contentTypeBH">
								<label for="child<?=$i?>characterWeightBH">文字粗细：</label>
								<select id="child<?=$i?>characterWeightBH" name="nestConfig[<?=$i?>].characterWeightBH">
									<option value="normal" <? if($nestConfig['characterWeightBH']=='normal'){echo'selected="selected"';} ?>>正常</option>
									<option value="bold" <? if($nestConfig['characterWeightBH']=='bold'){echo'selected="selected"';} ?>>粗体</option>
								</select>
							</li>
							<li class="textContentBH contentTypeBH">
								<label for="child<?=$i?>bh_i6">背景颜色：</label>
								<input id="child<?=$i?>bh_i6" class="setinput tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterBgColorBH" value="<?=$nestConfig['characterBgColorBH']?>" />
							</li>
							<li class="customContentBH contentTypeBH" style="clear:both;padding-top:10px;height:auto;">
								<label for="child<?=$i?>bh__ta1">自定义内容：</label>
								<textarea id="child<?=$i?>bh__ta1" name="nestConfig[<?=$i?>].cContentBH"><?=stripslashes($nestConfig['cContentBH'])?></textarea>
								<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$i?>].cContentBH" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
							</li>
						</ul>
						<span style="display:block;text-align:center;font-size:14px;color:#333;">---------------------- 面板<?=$k?>设置 --------------------</span>
						<label for="sc<?=$i?>rd2">面板内容：</label>
						<div id="sc<?=$i?>rd2">
							<input type="radio" id="child<?=$i?>rd" name="nestConfig[<?=$i?>].cType1" data-choose="panel" value="imgContent" <? if($nestConfig['cType1']=='imgContent'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rd" title="">图片</label>
							<input type="radio" id="child<?=$i?>rf" name="nestConfig[<?=$i?>].cType1" data-choose="panel" value="customContent" <? if($nestConfig['cType1']=='customContent'){echo'checked="checked"';} ?> />
							<label for="child<?=$i?>rf" title="" style="width:100px;">自定义内容</label>
						</div>
						<ul style="padding-left:0px;list-style:none;">
							<li class="imgContent1 contentType1" style="clear:both;padding-top:10px;">
								<label for="child<?=$i?>i7">背景图片：</label>
								<input id="child<?=$i?>i7" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].pSrc1" value="<?=$nestConfig['pSrc1']?>" />
							</li>
							<li class="imgContent1 contentType1">
								<label for="child<?=$i?>i8">链接地址：</label>
								<input id="child<?=$i?>i8" class="setinput" type="text" title="" name="nestConfig[<?=$i?>].href1" value="<?=$nestConfig['href1']?>" />
							</li>
							<li class="imgContent1 contentType1">
								<label for="child<?=$i?>hrefMode1">打开方式：</label>
								<select id="child<?=$i?>hrefMode1" name="nestConfig[<?=$i?>].hrefMode1">
									<option value="_self" <? if($nestConfig['hrefMode1']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
									<option value="_blank" <? if($nestConfig['hrefMode1']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
								</select>
							</li>
							<li class="customContent1 contentType1" style="clear:both;padding-top:10px;height:auto;">
								<label for="child<?=$i?>_ta2">自定义内容：</label>
								<textarea id="child<?=$i?>_ta2" name="nestConfig[<?=$i?>].cContent1"><?=stripslashes($nestConfig['cContent1'])?></textarea>
								<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$i?>].cContent1" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
							</li>
						</ul>
					</li>
		
        
        <? } ?>
        
        
        </ul>
			</li>
			<li style="height:auto;">
				<div id="contentPage" style="width:500px;margin:0 auto;">
				</div>
			</li>
			<li>
				<div id="pageManager" style="width:500px;margin:0 auto;">
					<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一页</span>
					<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前页</span>
				</div>
			</li>
		</ul>
	</div>
	<div id="tabs-3">
		<ul class="setform">
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="ii1">应用宽度：</label>
				<input id="ii1" class="setinput" type="text" title="自动生成，无需填写" name="width" value="<?=$data['width']?>" />
			</li>
			<li>
				<label for="ii2">应用高度：</label>
				<input id="ii2" class="setinput" type="text" title="自动生成，无需填写" name="height" value="<?=$data['height']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="自动生成，无需填写" name="top" value="<?=$data['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="自动生成，无需填写" name="left" value="<?=$data['left']?>" />
			</li>
        </ul>
        <div id="mymenu">
           <ul class="setform"><li class="setshousuo">---------------------- 标题面板宽高设置 展开/收起 (懒人无视) --------------------</li><ul>
           <ul class="setform setform2">   
			<li>
				<label for="ii5">标题宽度：</label>
				<input id="ii5" class="setinput" type="text" title="确定后统一设置标题宽度，无需统一设置时请留空" name="tWidth" value="<?=$data['tWidth']?>" />
			</li>
			<li>
				<label for="ii6">标题高度：</label>
				<input id="ii6" class="setinput" type="text" title="确定后统一设置标题高度，无需统一设置时请留空" name="tHeight" value="<?=$data['tHeight']?>" />
			</li>
			<li>
				<label for="ii7">面板宽度：</label>
				<input id="ii7" class="setinput" type="text" title="确定后统一设置面板宽度，无需统一设置时请留空" name="pWidth" value="<?=$data['pWidth']?>" />
			</li>
			<li>
				<label for="ii8">面板高度：</label>
				<input id="ii8" class="setinput" type="text" title="确定后统一设置面板高度，无需统一设置时请留空" name="pHeight" value="<?=$data['pHeight']?>" />
			</li>
			<li>
				<label for="ii9">每组间距：</label>
				<input id="ii9" class="setinput" type="text" title="每组之间的间隔距离" name="gSpace" value="<?=$data['gSpace']?>" />
			</li>
			<li>
				<label for="rrd1">拉动时标题宽高：</label>
				<div id="rrd1">
					<input type="radio" id="rr1" name="titleUnity" value="yes" <? if($data['titleUnity']=='yes'){echo'checked="checked"';} ?> />
					<label for="rr1" title="">统一</label>
					<input type="radio" id="rr2" name="titleUnity" value="no" <? if($data['titleUnity']=='no'){echo'checked="checked"';} ?> />
					<label for="rr2" title="" style="width:70px;">不统一</label>
				</div>
			</li>
			<li>
				<label for="rrd1">拉动时面板宽高：</label>
				<div id="rrd1">
					<input type="radio" id="rr3" name="panelUnity" value="yes" <? if($data['panelUnity']=='yes'){echo'checked="checked"';} ?> />
					<label for="rr3" title="">统一</label>
					<input type="radio" id="rr4" name="panelUnity" value="no" <? if($data['panelUnity']=='no'){echo'checked="checked"';} ?> />
					<label for="rr4" title="" style="width:70px;">不统一</label>
				</div>
			</li>
		</ul>
		</div>
	</div>

</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$active?>});
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
	
	var j_adDirection = $("#adDirection");
	$("#ii5").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii7").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii7").val(v);
			}
		}
	});
	$("#ii6").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii8").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii8").val(v);
			}
		}
	});
	$("#ii7").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii5").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii5").val(v);
			}
		}
	});
	
	$("#ii8").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii6").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii6").val(v);
			}
		}
	});
	
	$("#adMode").selectmenu({
		change: function() {
			var v = $(this).val();
			if(v == "yes") {
				$(".ad1fp").hide();
				$(".ad2fp").hide();
			} else {
				$(".ad1fp").show();
				$(".ad2fp").show();
			}
		}
	});
	"<?=$data['titleBHControl']?>" != "yes" && $(".titleBH").hide();
	$("#titleBHControl").selectmenu({
		change: function() {
			var v = $(this).val();
			if(v == "yes") {
				$(".titleBH").show();
			} else {
				$(".titleBH").hide();
			}
		}
	});
	"<?=$data['adMode']?>" == "yes" && ($(".ad1fp").hide(), $(".ad2fp").hide());
	$("input, .setform > li > div, .sliderContent > div, .textContent > div, .textContentBH > div, textarea").buttonset();
	$("#tForm select").selectmenu();
	$(".contentType").hide();
	$(".contentTypeBH").hide();
	$(".contentType1").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var nestConfigCount = "5";
	for(var i = 0; i<nestConfigCount;i++ ) {
		var contentType = $(".sliderContent:eq("+i+")").find("input[type='radio']:checked:eq(0)").val();
		$(".sliderContent:eq("+i+")").find("."+contentType).show();
		var contentTypeBH = $(".sliderContent:eq("+i+")").find("input[type='radio']:checked:eq(2)").val();
		$(".sliderContent:eq("+i+")").find("."+contentTypeBH).show();
		var contentType1 = $(".sliderContent:eq("+i+")").find("input[type='radio']:checked:eq(4)").val();
		$(".sliderContent:eq("+i+")").find("."+contentType1+"1").show();
	}
	
	$("#sliderContentUl").on("click", "input[type='radio']", function(event) {
		var val = $(this).val(), choose = $(this).attr("data-choose");
		if(choose == "title") {
			$(this).parent().parent().find(".contentType").hide();
			$(this).parent().parent().find("."+val).show();
		} else if(choose == "titleBH") {
			$(this).parent().parent().find(".contentTypeBH").hide();
			$(this).parent().parent().find("."+val).show();
		} else if(choose == "panel"){
			$(this).parent().parent().find(".contentType1").hide();
			$(this).parent().parent().find("."+val+"1").show();
		}
	});
	
	setPage(document.getElementById("contentPage"),<?=$num?>, 1);
	$("#contentPage").on("click", function() {
		var num = parseInt($(this).children("a.on").html(), 10) - 1,
		contentType = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked:eq(0)").val(),
		contentTypeBH = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked:eq(2)").val(),
		contentType1 = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked:eq(4)").val();
		$(".contentType").hide();
		$(".contentTypeBH").hide();
		$(".contentType1").hide();
		$(".sliderContent").hide();
		$("#sliderContentUl .sliderContent:eq("+num+")").show();
		$(".sliderContent:eq("+num+")").find("."+contentType).show();
		$(".sliderContent:eq("+num+")").find("."+contentTypeBH).show();
		$(".sliderContent:eq("+num+")").find("."+contentType1+"1").show();
	});
	var startNum = <?=$num?>;
	$("#pageManager").on("click", "span", function(event) {
		var t = $(this),
		num = parseInt($("#contentPage").children("a.on").html(), 10) - 1,
		len,
		index = t.index();
		if(index == 0) {
			$('<li class="sliderContent" style="clear:both;height:auto;">'+
						'<span style="display:block;text-align:center;font-size:14px;color:#333;">---------------------- 标题设置 --------------------</span>'+
						'<label for="sc'+startNum+'rd1">标题内容：</label>'+
						'<div id="sc'+startNum+'rd1">'+
							'<input type="radio" id="child'+startNum+'ra" name="nestConfig['+startNum+'].cType" data-choose="title" value="imgContent" checked="checked" />'+
							'<label for="child'+startNum+'ra" title="">图片</label>'+
							'<input type="radio" id="child'+startNum+'rb" name="nestConfig['+startNum+'].cType" data-choose="title" value="textContent" />'+
							'<label for="child'+startNum+'rb" title="">文字</label>'+
							'<input type="radio" id="child'+startNum+'rc" name="nestConfig['+startNum+'].cType" data-choose="title" value="customContent" />'+
							'<label for="child'+startNum+'rc" title="" style="width:100px;">自定义内容</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<li class="imgContent contentType" style="clear:both;padding-top:10px;">'+
								'<label for="child'+startNum+'i1">背景图片：</label>'+
								'<input id="child'+startNum+'i1" class="setinput" type="text" title="" name="nestConfig['+startNum+'].pSrc" value="" />'+
								'<input id="child'+startNum+'autoSize" class="chkBox" type="checkbox" name="nestConfig['+startNum+'].autoSize" value="yes" checked="checked" />'+
								'<label for="child'+startNum+'autoSize" class="chkLabel">自动高宽</label>'+
							'</li>'+
							'<li class="textContent contentType" style="clear:both;padding-top:10px;">'+
								'<label for="child'+startNum+'i3">文字内容：</label>'+
								'<input id="child'+startNum+'i3" class="setinput" type="text" title="" name="nestConfig['+startNum+'].textContent" value="" />'+
							'</li>'+
							'<li class="imgContent textContent contentType">'+
								'<label for="child'+startNum+'i2">链接地址：</label>'+
								'<input id="child'+startNum+'i2" class="setinput" type="text" title="" name="nestConfig['+startNum+'].href" value="" />'+
							'</li>'+
							'<li class="imgContent textContent contentType">'+
								'<label for="child'+startNum+'hrefMode">打开方式：</label>'+
								'<select id="child'+startNum+'hrefMode" name="nestConfig['+startNum+'].hrefMode">'+
									'<option value="_self">原窗口打开</option>'+
									'<option value="_blank" selected="selected">新窗口打开</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'rd3">对齐方式：</label>'+
								'<div id="child'+startNum+'rd3">'+
									'<input type="radio" id="child'+startNum+'r5" name="nestConfig['+startNum+'].characterAlign" value="left" checked="checked" />'+
									'<label for="child'+startNum+'r5">居左</label>'+
									'<input type="radio" id="child'+startNum+'r6" name="nestConfig['+startNum+'].characterAlign" value="center" />'+
									'<label for="child'+startNum+'r6">居中</label>'+
									'<input type="radio" id="child'+startNum+'r7" name="nestConfig['+startNum+'].characterAlign" value="right" />'+
									'<label for="child'+startNum+'r7">居右</label>'+
								'</div>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'i4">文字颜色：</label>'+
								'<input id="child'+startNum+'i4" class="setinput tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterColor" value="" />'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'i5">文字大小：</label>'+
								'<input id="child'+startNum+'i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig['+startNum+'].characterSize" value="" />'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'characterFont">文字字体：</label>'+
								'<select id="child'+startNum+'characterFont" name="nestConfig['+startNum+'].characterFont">'+
									'<option value="宋体" selected="selected" data-style="font-family:宋体;">宋体</option>'+
									'<option value="黑体" data-style="font-family:黑体;">黑体</option>'+
									'<option value="微软雅黑" data-style="font-family:微软雅黑;">雅黑</option>'+
									'<option value="楷体" data-style="font-family:楷体;">楷体</option>'+
									'<option value="Arial" data-style="font-family:Arial;">Arial</option>'+
									'<option value="Verdana" data-style="font-family:Verdana;">Verdana</option>'+
									'<option value="Georgia" data-style="font-family:Georgia;">Georgia</option>'+
									'<option value="Times New Roman" data-style="font-family:Times New Roman;">Times New Roman</option>'+
									'<option value="Trebuchet MS" data-style="font-family:Trebuchet MS;">Trebuchet MS</option>'+
									'<option value="Courier" data-style="font-family:Courier;">Courier</option>'+
									'<option value="Impact" data-style="font-family:Impact;">Impact</option>'+
									'<option value="Comic Sans MS" data-style="font-family:Comic Sans MS;">Comic Sans MS</option>'+
									'<option value="Tahoma" data-style="font-family:Tahoma;">Tahoma</option>'+
									'<option value="Symbol" data-style="font-family:Symbol;">Symbol</option>'+
									'<option value="Palatino Linotype" data-style="font-family:Palatino Linotype;">Palatino Linotype</option>'+
									'<option value="Bookman Old Style" data-style="font-family:Bookman Old Style;">Bookman Old Style</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'characterWeight">文字粗细：</label>'+
								'<select id="child'+startNum+'characterWeight" name="nestConfig['+startNum+'].characterWeight">'+
									'<option value="normal" selected="selected">正常</option>'+
									'<option value="bold">粗体</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'i6">背景颜色：</label>'+
								'<input id="child'+startNum+'i6" class="setinput tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterBgColor" value="" />'+
							'</li>'+
							'<li class="customContent contentType" style="clear:both;padding-top:10px;height:auto;">'+
								'<label for="child'+startNum+'_ta1">自定义内容：</label>'+
								'<textarea id="child'+startNum+'_ta1" name="nestConfig['+startNum+'].cContent"></textarea>'+
								'<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+startNum+'].cContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
							'</li>'+
						'</ul>'+
						'<span style="display:block;text-align:center;font-size:14px;color:#333;">---------------------- 标题变换设置 --------------------</span>'+
						'<label for="sc'+startNum+'rd1">标题内容：</label>'+
						'<div id="sc'+startNum+'rd1">'+
							'<input type="radio" id="child'+startNum+'bh_ra" name="nestConfig['+startNum+'].cTypeBH" data-choose="titleBH" value="imgContentBH" checked="checked" />'+
							'<label for="child'+startNum+'bh_ra" title="">图片</label>'+
							'<input type="radio" id="child'+startNum+'bh_rb" name="nestConfig['+startNum+'].cTypeBH" data-choose="titleBH" value="textContentBH" />'+
							'<label for="child'+startNum+'bh_rb" title="">文字</label>'+
							'<input type="radio" id="child'+startNum+'bh_rc" name="nestConfig['+startNum+'].cTypeBH" data-choose="titleBH" value="customContentBH" />'+
							'<label for="child'+startNum+'bh_rc" title="" style="width:100px;">自定义内容</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<li class="imgContentBH contentTypeBH" style="clear:both;padding-top:10px;">'+
								'<label for="child'+startNum+'bh_i1">背景图片：</label>'+
								'<input id="child'+startNum+'bh_i1" class="setinput" type="text" title="" name="nestConfig['+startNum+'].pSrcBH" value="" />'+
							'</li>'+
							'<li class="textContentBH contentTypeBH" style="clear:both;padding-top:10px;">'+
								'<label for="child'+startNum+'bh_i3">文字内容：</label>'+
								'<input id="child'+startNum+'bh_i3" class="setinput" type="text" title="" name="nestConfig['+startNum+'].textContentBH" value="" />'+
							'</li>'+
							'<li class="imgContentBH textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_i2">链接地址：</label>'+
								'<input id="child'+startNum+'bh_i2" class="setinput" type="text" title="" name="nestConfig['+startNum+'].hrefBH" value="" />'+
							'</li>'+
							'<li class="imgContentBH textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'hrefMode">打开方式：</label>'+
								'<select id="child'+startNum+'hrefMode" name="nestConfig['+startNum+'].hrefModeBH">'+
									'<option value="_self">原窗口打开</option>'+
									'<option value="_blank" selected="selected">新窗口打开</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_rd3">对齐方式：</label>'+
								'<div id="child'+startNum+'bh_rd3">'+
									'<input type="radio" id="child'+startNum+'bh_r5" name="nestConfig['+startNum+'].characterAlignBH" value="left" checked="checked" />'+
									'<label for="child'+startNum+'bh_r5">居左</label>'+
									'<input type="radio" id="child'+startNum+'bh_r6" name="nestConfig['+startNum+'].characterAlignBH" value="center" />'+
									'<label for="child'+startNum+'bh_r6">居中</label>'+
									'<input type="radio" id="child'+startNum+'bh_r7" name="nestConfig['+startNum+'].characterAlignBH" value="right" />'+
									'<label for="child'+startNum+'bh_r7">居右</label>'+
								'</div>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_i4">文字颜色：</label>'+
								'<input id="child'+startNum+'bh_i4" class="setinput tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterColorBH" value="" />'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_i5">文字大小：</label>'+
								'<input id="child'+startNum+'bh_i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig['+startNum+'].characterSizeBH" value="" />'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'characterFontBH">文字字体：</label>'+
								'<select id="child'+startNum+'characterFontBH" name="nestConfig['+startNum+'].characterFontBH">'+
									'<option value="宋体" selected="selected" data-style="font-family:宋体;">宋体</option>'+
									'<option value="黑体" data-style="font-family:黑体;">黑体</option>'+
									'<option value="微软雅黑" data-style="font-family:微软雅黑;">雅黑</option>'+
									'<option value="楷体" data-style="font-family:楷体;">楷体</option>'+
									'<option value="Arial" data-style="font-family:Arial;">Arial</option>'+
									'<option value="Verdana" data-style="font-family:Verdana;">Verdana</option>'+
									'<option value="Georgia" data-style="font-family:Georgia;">Georgia</option>'+
									'<option value="Times New Roman" data-style="font-family:Times New Roman;">Times New Roman</option>'+
									'<option value="Trebuchet MS" data-style="font-family:Trebuchet MS;">Trebuchet MS</option>'+
									'<option value="Courier" data-style="font-family:Courier;">Courier</option>'+
									'<option value="Impact" data-style="font-family:Impact;">Impact</option>'+
									'<option value="Comic Sans MS" data-style="font-family:Comic Sans MS;">Comic Sans MS</option>'+
									'<option value="Tahoma" data-style="font-family:Tahoma;">Tahoma</option>'+
									'<option value="Symbol" data-style="font-family:Symbol;">Symbol</option>'+
									'<option value="Palatino Linotype" data-style="font-family:Palatino Linotype;">Palatino Linotype</option>'+
									'<option value="Bookman Old Style" data-style="font-family:Bookman Old Style;">Bookman Old Style</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'characterWeightBH">文字粗细：</label>'+
								'<select id="child'+startNum+'characterWeightBH" name="nestConfig['+startNum+'].characterWeightBH">'+
									'<option value="normal" selected="selected">正常</option>'+
									'<option value="bold">粗体</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_i6">背景颜色：</label>'+
								'<input id="child'+startNum+'bh_i6" class="setinput tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterBgColorBH" value="" />'+
							'</li>'+
							'<li class="customContentBH contentTypeBH" style="clear:both;padding-top:10px;height:auto;">'+
								'<label for="child'+startNum+'bh__ta1">自定义内容：</label>'+
								'<textarea id="child'+startNum+'bh__ta1" name="nestConfig['+startNum+'].cContentBH"></textarea>'+
								'<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+startNum+'].cContentBH" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
							'</li>'+
						'</ul>'+
						'<span style="display:block;text-align:center;font-size:14px;color:#333;">---------------------- 面板设置 --------------------</span>'+
						'<label for="sc'+startNum+'rd2">面板内容：</label>'+
						'<div id="sc'+startNum+'rd2">'+
							'<input type="radio" id="child'+startNum+'rd" name="nestConfig['+startNum+'].cType1" data-choose="panel" value="imgContent" checked="checked" />'+
							'<label for="child'+startNum+'rd" title="">图片</label>'+
							'<input type="radio" id="child'+startNum+'rf" name="nestConfig['+startNum+'].cType1" data-choose="panel" value="customContent" />'+
							'<label for="child'+startNum+'rf" title="" style="width:100px;">自定义内容</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<li class="imgContent1 contentType1" style="clear:both;padding-top:10px;">'+
								'<label for="child'+startNum+'i7">背景图片：</label>'+
								'<input id="child'+startNum+'i7" class="setinput" type="text" title="" name="nestConfig['+startNum+'].pSrc1" value="" />'+
								'<input id="child'+startNum+'autoSize1" class="chkBox" type="checkbox" name="nestConfig['+startNum+'].autoSize1" value="yes" checked="checked" />'+
								'<label for="child'+startNum+'autoSize1" class="chkLabel">自动高宽</label>'+
							'</li>'+
							'<li class="imgContent1 contentType1">'+
								'<label for="child'+startNum+'i8">链接地址：</label>'+
								'<input id="child'+startNum+'i8" class="setinput" type="text" title="" name="nestConfig['+startNum+'].href1" value="" />'+
							'</li>'+
							'<li class="imgContent1 contentType1">'+
								'<label for="child'+startNum+'hrefMode1">打开方式：</label>'+
								'<select id="child'+startNum+'hrefMode1" name="nestConfig['+startNum+'].hrefMode1">'+
									'<option value="_self"selected="selected">原窗口打开</option>'+
									'<option value="_blank">新窗口打开</option>'+
								'</select>'+
							'</li>'+
							'<li class="customContent1 contentType1" style="clear:both;padding-top:10px;height:auto;">'+
								'<label for="child'+startNum+'_ta2">自定义内容：</label>'+
								'<textarea id="child'+startNum+'_ta2" name="nestConfig['+startNum+'].cContent1"></textarea>'+
								'<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+startNum+'].cContent1" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>'+
							'</li>'+
						'</ul>'+
					'</li>').appendTo($("#sliderContentUl"));
					$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
						$(this).children("span:eq(0)").children("span:eq(0)").html("标题"+(i+1)+"设置");
						$(this).children("span:eq(1)").children("span:eq(0)").html("标题"+(i+1)+"变换设置");
						$(this).children("span:eq(2)").children("span:eq(0)").html("面板"+(i+1)+"设置");
						var ul = $(this).children("ul");
						//ul.find("label:eq(0)").html("轮播图片"+(i+1)+"：");
					});
					$("input, .setform > li > div, .sliderContent > div, .textContent > div, textarea").buttonset();
					$("#tForm select").selectmenu();
					$(".contentType").hide();
					$(".sliderContent").hide();
					len = $("#sliderContentUl").children("li").length;
					$("#contentPage").html("");
					setPage(document.getElementById("contentPage"), len, len);
					$("#contentPage").children("a.on").trigger("click");
					startNum++;
		} else if(index == 1) {
			if($("#sliderContentUl").children("li").length == 1) {
				return;
			}
			$("#sliderContentUl").children("li.sliderContent:eq("+num+")").remove();
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				$(this).children("span:eq(0)").children("span:eq(0)").html("标题"+(i+1)+"设置");
				$(this).children("span:eq(1)").children("span:eq(0)").html("标题"+(i+1)+"变换设置");
				$(this).children("span:eq(2)").children("span:eq(0)").html("面板"+(i+1)+"设置");
				var ul = $(this).children("ul");
				//ul.find("label:eq(0)").html("轮播图片"+(i+1)+"：");
			});
			len = $("#sliderContentUl").children("li").length;
			if(num+1 > len) { num = len - 1;}
			$("#contentPage").html("");
			setPage(document.getElementById("contentPage"), len, num+1);
			$("#contentPage").children("a.on").trigger("click");
		}
		var contentlength = $(".sliderContent").length, tempVal = $("#adActive").val();
		$("#adActive").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if(tempVal == (i+1)) {selected = ' selected="selected"'}
			$("#adActive").append('<option '+selected+' value="'+(i+1)+'">第'+(i+1)+'个面板</option>');
		}
		$("#adActive").selectmenu();
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