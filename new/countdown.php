<?
$data=$_POST;
$childConfig=$data['childConfig'];

?>
<form id="tForm" form-data="jcdb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">天设置</a></li>
		<li><a href="#tabs-3">时设置</a></li>
		<li><a href="#tabs-4">分设置</a></li>
		<li><a href="#tabs-5">秒设置</a></li>
		<li><a href="#tabs-6">样式设置</a></li>
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="rd1">倒计时背景内容：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="contentType" value="imgContent" <? if($data['contentType']=='imgContent'){echo'checked="checked"';} ?> />
					<label for="r1" title="">图片</label>
					<input type="radio" id="r2" name="contentType" value="customContent"  <? if($data['contentType']=='customContent'){echo'checked="checked"';} ?>/>
					<label for="r2" title="" style="width:100px;">自定义内容</label>
				</div>
			</li>
			<li class="imgContent contentType">
				<label for="c_i1">背景图片：</label>
				<input id="c_i1" class="setinput" type="text" title="倒计时的计时牌背景图片，请输入图片空间的图片链接。" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li style="display:none;">
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
			<li style="display:none;">
				<label for="bg_i1">背景颜色：</label>
				<input id="bg_i1" class="setinput tColorPicker" type="text" title="" name="bgColor" value="<?=$data['bgColor']?>" />
			</li>
            <li class="customContent contentType">
				<label for="c_i2">自定义内容：</label>
				<textarea id="c_i2" name="customContent"><?=stripslashes($data['customContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
			</li>
            <li>
				<label for="rd2">倒计时时间模式：</label>
				<div id="rd2">
					<input type="radio" id="r3" name="endTimeType" value="endTime" <? if($data['endTimeType']=='endTime'){echo'checked="checked"';} ?> />
					<label for="r3" title="倒计时会在指定日期到达之后结束" style="width:80px;">指定日期</label>
					<input type="radio" id="r4" name="endTimeType" value="endTime1" <? if($data['endTimeType']=='endTime1'){echo'checked="checked"';} ?> />
					<label for="r4" title="倒计时会在用户访问网页多少秒之后结束" style="width:80px;">单位秒数</label>
					<input type="radio" id="r5" name="endTimeType" value="endTime2" <? if($data['endTimeType']=='endTime2'){echo'checked="checked"';} ?> />
					<label for="r5" title="一定周期内每日定时截止" style="width:80px;">每日定时</label>
				</div>
			</li>
            <li class="endTime endTimeType">
				<label for="c_i3">倒计时结束时间：</label>
				<input id="c_i3" class="setinput" type="text" title="倒计时会在指定日期到达之后结束" name="endTime" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" value="<?=$data['endTime']?>" />
			</li>
            <li class="endTime1 endTimeType">
				<label for="c_i4">倒计时结束秒数：</label>
				<input id="c_i4" class="setinput" type="text" title="倒计时会在用户访问网页多少秒之后结束,请填写数字" name="endTime1" value="<?=$data['endTime1']?>" />
			</li>
			<li class="endTime endTime1 endTimeType">
				<label for="ct1">运行时自定义HTML：</label>
				<textarea id="ct1" name="startContent"><?=stripslashes($data['startContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="startContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
			</li>
			<li class="endTime endTime1 endTimeType">
				<label for="ct2">结束时自定义HTML：</label>
				<textarea id="ct2" name="endContent"><?=stripslashes($data['endContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="endContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button>
			</li>
            <li class="endTime2 endTimeType">
				<label for="c_i5">每日定时时间：</label>
				<input id="c_i5" class="setinput" type="text" title="此处填写的时间会在每日定时截止" name="endTime2" onClick="WdatePicker({dateFmt:'HH:mm:ss'})" value="<?=$data['endTime2']?>" />
			</li>
			<li class="endTime2 endTimeType">
				<label for="endTime2Cycle">定时天数：</label>
				<select id="endTime2Cycle" name="endTime2Cycle">
			  <? for($i=1;$i<31;$i++){ $sel=$data['endTime2Cycle']==$i?'selected="selected"':'';
				  echo'<option value="'.$i.'" '.$sel.'>'.$i.'天</option>';
				  
				  }  ?>
                </select>
			</li>
			<li class="endTime2 endTimeType">
				<p style="color:#E13145;margin-left:120px;">此模式的倒计时天数越大，代码量越大，请注意</p>
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
				<label for="child0i1">数字颜色：</label>
				<input id="child0i1" class="setinput tColorPicker" type="text" title="" name="childConfig[0].characterColor" value="<?=$childConfig['0']['characterColor']?>" />
			</li>
			<li>
				<label for="child0in1">数字背景颜色：</label>
				<input id="child0in1" class="setinput tColorPicker" type="text" title="" name="childConfig[0].characterBgColor" value="<?=$childConfig['0']['characterBgColor']?>" />
			</li>
			<li>
				<label for="child0i2">数字大小：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[0].characterSize" value="<?=$childConfig['0']['characterSize']?>" />
			</li>
			<li>
				<label for="child0characterFont">数字字体：</label>
				<select id="child0characterFont" name="childConfig[0].characterFont">
					<option value="宋体" <? if($childConfig['0']['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($childConfig['0']['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($childConfig['0']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($childConfig['0']['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
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
				<label for="child1i1">数字颜色：</label>
				<input id="child1i1" class="setinput tColorPicker" type="text" title="" name="childConfig[1].characterColor" value="<?=$childConfig['1']['characterColor']?>" />
			</li>
			<li>
				<label for="child1in1">数字背景颜色：</label>
				<input id="child1in1" class="setinput tColorPicker" type="text" title="" name="childConfig[1].characterBgColor" value="<?=$childConfig['1']['characterBgColor']?>" />
			</li>
			<li>
				<label for="child1i2">数字大小：</label>
				<input id="child1i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[1].characterSize" value="<?=$childConfig['1']['characterSize']?>" />
			</li>
			<li>
				<label for="child1characterFont">数字字体：</label>
				<select id="child1characterFont" name="childConfig[1].characterFont">
					<option value="宋体" <? if($childConfig['1']['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($childConfig['1']['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($childConfig['1']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($childConfig['1']['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
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
				<label for="child2i1">数字颜色：</label>
				<input id="child2i1" class="setinput tColorPicker" type="text" title="" name="childConfig[2].characterColor" value="<?=$childConfig['2']['characterColor']?>" />
			</li>
			<li>
				<label for="child2in1">数字背景颜色：</label>
				<input id="child2in1" class="setinput tColorPicker" type="text" title="" name="childConfig[2].characterBgColor" value="<?=$childConfig['2']['characterBgColor']?>" />
			</li>
			<li>
				<label for="child2i2">数字大小：</label>
				<input id="child2i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[2].characterSize" value="<?=$childConfig['2']['characterSize']?>" />
			</li>
			<li>
				<label for="child2characterFont">数字字体：</label>
				<select id="child2characterFont" name="childConfig[2].characterFont">
					<option value="宋体" <? if($childConfig['2']['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($childConfig['2']['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($childConfig['2']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($childConfig['2']['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
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
					<option value="italic" <? if($childConfig['2']['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
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
				<label for="child3i1">数字颜色：</label>
				<input id="child3i1" class="setinput tColorPicker" type="text" title="" name="childConfig[3].characterColor" value="<?=$childConfig['3']['characterColor']?>" />
			</li>
			<li>
				<label for="child3in1">数字背景颜色：</label>
				<input id="child3in1" class="setinput tColorPicker" type="text" title="" name="childConfig[3].characterBgColor" value="<?=$childConfig['3']['characterBgColor']?>" />
			</li>
			<li>
				<label for="child3i2">数字大小：</label>
				<input id="child3i2" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[3].characterSize" value="<?=$childConfig['3']['characterSize']?>" />
			</li>
			<li>
				<label for="child3characterFont">数字字体：</label>
				<select id="child3characterFont" name="childConfig[3].characterFont">
					<option value="宋体" <? if($childConfig['3']['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($childConfig['3']['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($childConfig['3']['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($childConfig['3']['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
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
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435623.swf#tb_videoid=6184089" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435623.swf#tb_videoid=6184089" target="_blank">新窗口全屏观看</a>
	</div>
</div>
</form>

<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$data['active']?>});
	$("input, .setform > li > div").buttonset();
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
	$(".<?=$data['contentType']?>").show();
	$(".<?=$data['endTimeType']?>").show();
	$("#rd1").children("input[name='contentType']").click(function() {
		var val = $(this).val();
		$(".contentType").hide();
		$("."+val).show();
	});
	var allowTime = 'false-x';
	$("#rd2").children("input[name='endTimeType']").click(function(event) {
		var val = $(this).val();
		if(val == "endTime2" && allowTime == "false") {
			alert("请先登录后再使用此功能！");
			$("#rd2").children("input[name='endTimeType'][value='endTime']").trigger("click");
			event.preventDefault();
			event.stopPropagation();
			return false;
		}
		$(".endTimeType").hide();
		$("."+val).show();
	});
	
});
</script>