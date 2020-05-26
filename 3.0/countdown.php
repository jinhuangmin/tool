<?
$childConfig=$_POST['childConfig'];
?>
<form id="tForm" form-data="jcdb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
				<li><a href="#tabs-2">天设置</a></li>
				<li><a href="#tabs-3">时设置</a></li>
				<li><a href="#tabs-4">分设置</a></li>
				<li><a href="#tabs-5">秒设置</a></li>
				<li><a href="#tabs-6">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="rd2">倒计时时间模式：</label>
						<div id="rd2">
							<input type="radio" id="r3" name="endTimeType" value="endTime" <? if($_POST['endTimeType']=='endTime'){echo'checked="checked"';} ?> />
							<label for="r3" title="倒计时会在指定日期到达之后结束" style="width:88px;">指定日期</label>
							<input type="radio" id="r4" name="endTimeType" value="endTime1" <? if($_POST['endTimeType']=='endTime1'){echo'checked="checked"';} ?> />
							<label for="r4" title="倒计时会在用户访问网页多少秒之后结束" style="width:88px;">单位秒数</label>
							<input type="radio" id="r5" name="endTimeType" value="endTime2" <? if($_POST['endTimeType']=='endTime2'){echo'checked="checked"';} ?> />
							<label for="r5" title="一定周期内每日定时截止" style="width:88px;">每日定时</label>
						</div>
					</li>
					<li class="endTime endTimeType">
						<label for="c_i3">倒计时结束时间：</label>
						<input id="c_i3" class="setinput juneDateInput" type="text" title="倒计时会在指定日期到达之后结束" junezx_vali_date="true" name="endTime" value="<?=$_POST['endTime']?>" />
					</li>
					<li class="endTime1 endTimeType">
						<label for="c_i4">倒计时结束秒数：</label>
						<input id="c_i4" class="setinput" type="text" title="倒计时会在用户访问网页多少秒之后结束,请填写数字" name="endTime1" value="<?=$_POST['endTime1']?>" />
					</li>
					<li class="endTime2 endTimeType">
						<label for="c_i5">每日定时时间：</label>
						<input id="c_i5" class="setinput" type="text" title="此处填写的时间会在每日定时截止" junezx_vali_time="true" name="endTime2" onClick="WdatePicker({dateFmt:'HH:mm:ss'})" value="<?=$_POST['endTime2']?>" />
					</li>
					<li class="endTime2 endTimeType">
						<label for="c_i7">定时天数：</label>
						<input id="c_i7" class="setinput" type="text" title="此处填写的天数将从今天起开始计算" name="endTime2Cycle" value="<?=$_POST['endTime2Cycle']?>" />
					</li>
					<li>
						<label for="rd1">倒计时背景内容：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="contentType" value="imgContent" <? if($_POST['contentType']=='imgContent'){echo'checked="checked"';} ?> />
							<label for="r1" title="">图片</label>
							<input type="radio" id="r2" name="contentType" value="customContent" <? if($_POST['contentType']=='customContent'){echo'checked="checked"';} ?> />
							<label for="r2" title="">自定义</label>
						</div>
					</li>
					<li class="imgContent contentType">
						<label for="jdhi_src">背景图片：</label>
						<input id="jdhi_src" class="setinput " type="text" title="倒计时的计时牌背景图片，请输入图片空间的图片链接。" junezx_vali_pic="true" name="pSrc" value="<?=$_POST['pSrc']?>" />
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
                    <li class="imgContent contentType">
						<label>背景图片对齐位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
					</li>
					<li class="imgContent contentType">
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					<li class="customContent contentType">
						<label for="c_i2">自定义内容：</label>
						<textarea id="c_i2" name="customContent"><?=stripslashes($_POST['customContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
					</li>
					<li class="endTime endTime1 endTimeType">
						<label for="ct1">运行时自定义HTML：</label>
						<textarea id="ct1" name="startContent"><?=stripslashes($_POST['startContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="startContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
					</li>
					<li class="endTime endTime1 endTimeType">
						<label for="ct2">结束时自定义HTML：</label>
						<textarea id="ct2" name="endContent"><?=stripslashes($_POST['endContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="endContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
					</li>
				</ul>
			</div>
						<div id="tabs-2">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig['0']['attachID']?>" />
					<li>
						<label for="child0rd1">是否显示天：</label>
						<div id="child0rd1">
							<input type="radio" id="child0r1" name="childConfig[0].displayMode" value="yes" <? if($childConfig['0']['displayMode']=='yes'){echo'checked="checked"';} ?> />
							<label for="child0r1" title="">显示</label>
							<input type="radio" id="child0r2" name="childConfig[0].displayMode" value="no" <? if($childConfig['0']['displayMode']=='no'){echo'checked="checked"';} ?> />
							<label for="child0r2" title="" style="width:80px;text-align:center;">不显示</label>
						</div>
					</li>
					<li>
						<label for="child0sdtzColor">数字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['0']['characterColor']?>;"></div></div></div>
							<input id="child0sdtzColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterColor" value="<?=$childConfig['0']['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0sdtzBgColor">数字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['0']['characterBgColor']?>;"></div></div></div>
							<input id="child0sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterBgColor" value="<?=$childConfig['0']['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0i2">数字大小：</label>
						<input id="child0i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[0].characterSize" value="<?=$childConfig['0']['characterSize']?>" />
					</li>
					<li>
						<label for="child0characterFont">数字字体：</label>
						<select id="child0characterFont" name="childConfig[0].characterFont">
				<option value="宋体" <? if($childConfig['0']['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                <option value="黑体" <? if($childConfig['0']['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                <option value="微软雅黑" <? if($childConfig['0']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                <option value="楷体" <? if($childConfig['0']['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                <option value="Arial" <? if($childConfig['0']['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                <option value="Verdana" <? if($childConfig['0']['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                <option value="Georgia" <? if($childConfig['0']['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                <option value="Times New Roman" <? if($childConfig['0']['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                <option value="Trebuchet MS" <? if($childConfig['0']['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                <option value="Courier" <? if($childConfig['0']['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                <option value="Impact" <? if($childConfig['0']['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                <option value="Comic Sans MS" <? if($childConfig['0']['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                <option value="Tahoma" <? if($childConfig['0']['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                <option value="Symbol" <? if($childConfig['0']['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                <option value="Palatino Linotype" <? if($childConfig['0']['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                <option value="Bookman Old Style" <? if($childConfig['0']['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child0characterWeight">数字粗细：</label>
						<select id="child0characterWeight" name="childConfig[0].characterWeight">
							<option value="normal" <? if($childConfig['0']['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($childConfig['0']['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child0characterStyle">数字斜体：</label>
						<select id="child0characterStyle" name="childConfig[0].characterStyle">
							<option value="normal" <? if($childConfig['0']['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($childConfig['0']['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li>
						<label for="child0i3">数字间距：</label>
						<input id="child0i3" class="setinput" type="text" title="请输入数字间距的大小，无需加px，可为负数" name="childConfig[0].characterLetterSpacing" value="<?=$childConfig['0']['characterLetterSpacing']?>" />
					</li>
				</ul>
			</div>
						<div id="tabs-3">
				<ul class="setform">
					<input id="child1h1" class="setinput" type="hidden" title="" name="childConfig[1].attachID" value="<?=$childConfig['1']['attachID']?>" />
					<li>
						<label for="child1rd1">是否显示时：</label>
						<div id="child1rd1">
							<input type="radio" id="child1r1" name="childConfig[1].displayMode" value="yes" <? if($childConfig['1']['displayMode']=='yes'){echo'checked="checked"';} ?> />
							<label for="child1r1" title="">显示</label>
							<input type="radio" id="child1r2" name="childConfig[1].displayMode" value="no" <? if($childConfig['1']['displayMode']=='no'){echo'checked="checked"';} ?> />
							<label for="child1r2" title="" style="width:80px;text-align:center;">不显示</label>
						</div>
					</li>
					<li>
						<label for="child1sdtzColor">数字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['1']['characterColor']?>;"></div></div></div>
							<input id="child1sdtzColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[1].characterColor" value="<?=$childConfig['1']['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="child1sdtzBgColor">数字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['1']['characterBgColor']?>;"></div></div></div>
							<input id="child1sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[1].characterBgColor" value="<?=$childConfig['1']['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child1i2">数字大小：</label>
						<input id="child1i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[1].characterSize" value="<?=$childConfig['1']['characterSize']?>" />
					</li>
					<li>
						<label for="child1characterFont">数字字体：</label>
						<select id="child1characterFont" name="childConfig[1].characterFont">
				<option value="宋体" <? if($childConfig['1']['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                <option value="黑体" <? if($childConfig['1']['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                <option value="微软雅黑" <? if($childConfig['1']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                <option value="楷体" <? if($childConfig['1']['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                <option value="Arial" <? if($childConfig['1']['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                <option value="Verdana" <? if($childConfig['1']['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                <option value="Georgia" <? if($childConfig['1']['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                <option value="Times New Roman" <? if($childConfig['1']['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                <option value="Trebuchet MS" <? if($childConfig['1']['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                <option value="Courier" <? if($childConfig['1']['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                <option value="Impact" <? if($childConfig['1']['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                <option value="Comic Sans MS" <? if($childConfig['1']['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                <option value="Tahoma" <? if($childConfig['1']['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                <option value="Symbol" <? if($childConfig['1']['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                <option value="Palatino Linotype" <? if($childConfig['1']['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                <option value="Bookman Old Style" <? if($childConfig['1']['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child1characterWeight">数字粗细：</label>
						<select id="child1characterWeight" name="childConfig[1].characterWeight">
							<option value="normal" <? if($childConfig['1']['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($childConfig['1']['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child1characterStyle">数字斜体：</label>
						<select id="child1characterStyle" name="childConfig[1].characterStyle">
							<option value="normal" <? if($childConfig['1']['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($childConfig['1']['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li>
						<label for="child1i3">数字间距：</label>
						<input id="child1i3" class="setinput" type="text" title="请输入数字间距的大小，无需加px，可为负数" name="childConfig[1].characterLetterSpacing" value="<?=$childConfig['1']['characterLetterSpacing']?>" />
					</li>
				</ul>
			</div>
						<div id="tabs-4">
				<ul class="setform">
					<input id="child2h1" class="setinput" type="hidden" title="" name="childConfig[2].attachID" value="<?=$childConfig['2']['attachID']?>" />
					<li>
						<label for="child2rd1">是否显示分：</label>
						<div id="child2rd1">
							<input type="radio" id="child2r1" name="childConfig[2].displayMode" value="yes" <? if($childConfig['2']['displayMode']=='yes'){echo'checked="checked"';} ?> />
							<label for="child2r1" title="">显示</label>
							<input type="radio" id="child2r2" name="childConfig[2].displayMode" value="no" <? if($childConfig['2']['displayMode']=='no'){echo'checked="checked"';} ?> />
							<label for="child2r2" title="" style="width:80px;text-align:center;">不显示</label>
						</div>
					</li>
					<li>
						<label for="child2sdtzColor">数字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['2']['characterColor']?>;"></div></div></div>
							<input id="child2sdtzColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[2].characterColor" value="<?=$childConfig['2']['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="child2sdtzBgColor">数字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['2']['characterBgColor']?>;"></div></div></div>
							<input id="child2sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[2].characterBgColor" value="<?=$childConfig['2']['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child2i2">数字大小：</label>
						<input id="child2i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[2].characterSize" value="<?=$childConfig['2']['characterSize']?>" />
					</li>
					<li>
						<label for="child2characterFont">数字字体：</label>
						<select id="child2characterFont" name="childConfig[2].characterFont">
				<option value="宋体" <? if($childConfig['2']['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                <option value="黑体" <? if($childConfig['2']['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                <option value="微软雅黑" <? if($childConfig['2']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                <option value="楷体" <? if($childConfig['2']['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                <option value="Arial" <? if($childConfig['2']['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                <option value="Verdana" <? if($childConfig['2']['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                <option value="Georgia" <? if($childConfig['2']['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                <option value="Times New Roman" <? if($childConfig['2']['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                <option value="Trebuchet MS" <? if($childConfig['2']['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                <option value="Courier" <? if($childConfig['2']['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                <option value="Impact" <? if($childConfig['2']['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                <option value="Comic Sans MS" <? if($childConfig['2']['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                <option value="Tahoma" <? if($childConfig['2']['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                <option value="Symbol" <? if($childConfig['2']['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                <option value="Palatino Linotype" <? if($childConfig['2']['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                <option value="Bookman Old Style" <? if($childConfig['2']['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child2characterWeight">数字粗细：</label>
						<select id="child2characterWeight" name="childConfig[2].characterWeight">
							<option value="normal" <? if($childConfig['2']['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($childConfig['2']['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child2characterStyle">数字斜体：</label>
						<select id="child2characterStyle" name="childConfig[2].characterStyle">
							<option value="normal" <? if($childConfig['2']['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($childConfig['2']['characterStyle']=='italic'){echo'selected="selected"';} ?>>italic</option>
						</select>
					</li>
					<li>
						<label for="child2i3">数字间距：</label>
						<input id="child2i3" class="setinput" type="text" title="请输入数字间距的大小，无需加px，可为负数" name="childConfig[2].characterLetterSpacing" value="<?=$childConfig['2']['characterLetterSpacing']?>" />
					</li>
				</ul>
			</div>
						<div id="tabs-5">
				<ul class="setform">
					<input id="child3h1" class="setinput" type="hidden" title="" name="childConfig[3].attachID" value="<?=$childConfig['3']['attachID']?>" />
					<li>
						<label for="child3rd1">是否显示秒：</label>
						<div id="child3rd1">
							<input type="radio" id="child3r1" name="childConfig[3].displayMode" value="yes" <? if($childConfig['3']['displayMode']=='yes'){echo'checked="checked"';} ?> />
							<label for="child3r1" title="">显示</label>
							<input type="radio" id="child3r2" name="childConfig[3].displayMode" value="no" <? if($childConfig['3']['displayMode']=='no'){echo'checked="checked"';} ?> />
							<label for="child3r2" title="" style="width:80px;text-align:center;">不显示</label>
						</div>
					</li>
					<li>
						<label for="child3sdtzColor">数字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['3']['characterColor']?>;"></div></div></div>
							<input id="child3sdtzColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[3].characterColor" value="<?=$childConfig['3']['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="child3sdtzBgColor">数字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig['3']['characterBgColor']?>;"></div></div></div>
							<input id="child3sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[3].characterBgColor" value="<?=$childConfig['3']['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child3i2">数字大小：</label>
						<input id="child3i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[3].characterSize" value="<?=$childConfig['3']['characterSize']?>" />
					</li>
					<li>
						<label for="child3characterFont">数字字体：</label>
						<select id="child3characterFont" name="childConfig[3].characterFont">
				<option value="宋体" <? if($childConfig['3']['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                <option value="黑体" <? if($childConfig['3']['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                <option value="微软雅黑" <? if($childConfig['3']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                <option value="楷体" <? if($childConfig['3']['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                <option value="Arial" <? if($childConfig['3']['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                <option value="Verdana" <? if($childConfig['3']['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                <option value="Georgia" <? if($childConfig['3']['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                <option value="Times New Roman" <? if($childConfig['3']['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                <option value="Trebuchet MS" <? if($childConfig['3']['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                <option value="Courier" <? if($childConfig['3']['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                <option value="Impact" <? if($childConfig['3']['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                <option value="Comic Sans MS" <? if($childConfig['3']['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                <option value="Tahoma" <? if($childConfig['3']['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                <option value="Symbol" <? if($childConfig['3']['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                <option value="Palatino Linotype" <? if($childConfig['3']['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                <option value="Bookman Old Style" <? if($childConfig['3']['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child3characterWeight">数字粗细：</label>
						<select id="child3characterWeight" name="childConfig[3].characterWeight">
							<option value="normal" <? if($childConfig['3']['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($childConfig['3']['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child3characterStyle">数字斜体：</label>
						<select id="child3characterStyle" name="childConfig[3].characterStyle">
							<option value="normal" <? if($childConfig['3']['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($childConfig['3']['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li>
						<label for="child3i3">数字间距：</label>
						<input id="child3i3" class="setinput" type="text" title="请输入数字间距的大小，无需加px，可为负数" name="childConfig[3].characterLetterSpacing" value="<?=$childConfig['3']['characterLetterSpacing']?>" />
					</li>
				</ul>
			</div>
						<div id="tabs-6">
				<ul class="setform">
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
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$_POST['active']?>});
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$("#tForm select").selectmenu();
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
	$(".endTimeType").hide();
	$(".contentType").hide();
	$(".<?=$_POST['contentType']?>").show();
	$(".<?=$_POST['endTimeType']?>").show();
	$("#rd1").children("input[name='contentType']").click(function() {
		var val = $(this).val();
		$(".contentType").hide();
		$("."+val).show();
	});
	var allowTime = 'true';
	$("#rd2").children("input[name='endTimeType']").click(function(event) {
		var val = $(this).val();
		// if(val == "endTime2" && allowTime == "false") {
			// alert("请先登录后再使用此功能！");
			// $("#rd2").children("input[name='endTimeType'][value='endTime']").trigger("click");
			// event.preventDefault();
			// event.stopPropagation();
			// return false;
		// }
		$(".endTimeType").hide();
		$("."+val).show();
	});
	
});
</script>
