<?
$data=$_POST;
?>
<form id="tForm" form-data="jtsb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">滚动设置</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
            <li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="rd1">内容设置：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="characterMode" value="text" <? if($data['characterMode']=='text'){echo'checked="checked"';} ?> />
					<label for="r1" title="文字自动滚动">文字</label>
					<input type="radio" id="r2" name="characterMode" value="img" <? if($data['characterMode']=='img'){echo'checked="checked"';} ?> />
					<label for="r2" title="图片自动滚动">图片</label>
					<input type="radio" id="r3" name="characterMode"  value="custom" <? if($data['characterMode']=='custom'){echo'checked="checked"';} ?> />
					<label for="r3" title="图片自动滚动" style="width:100px;">自定义内容</label>
				</div>
			</li>
			<li class="normal characterMode">
				<label id="l2" for="i2">文字内容：</label>
				<input id="i2" class="setinput" type="text" title="" name="characterContent" value="<?=$data['characterContent']?>" />
			</li>
			<li class="normal characterMode">
				<label id="l3" for="i3">文字链接：</label>
				<input id="i3" class="setinput" type="text" title="" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="normal characterMode">
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?> >原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?> >新窗口打开</option>
				</select>
			</li>
            <li class="custom characterMode">
				<label for="customContent">自定义内容：</label>
				<textarea id="customContent" name="customContent"><?=stripslashes($data['customContent'])?></textarea>
				<button type="button" class="t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$data['appID']?>">可视化编辑</button><!-- data-zdyAttachID=""-->
			</li>
			<li class="textset">
				<label for="i4">文字大小：</label>
				<input id="i4" class="setinput" type="text" title="请输入滚动文字的文字大小，当选择为图片滚动时设置无效。" name="characterSize" value="<?=$data['characterSize']?>" />
			</li>
			<li class="textset">
				<label for="characterWeight">文字粗细：</label>
				<select id="characterWeight" name="characterWeight">
					<option value="normal" <? if($data['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li class="textset">
				<label for="characterWeight">文字字体：</label>
				<select id="characterFont" name="characterFont">
					<option value="宋体" <? if($data['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($data['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($data['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($data['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
				</select>
			</li class="textset">
			<li class="textset">
				<label for="i5">文字颜色：</label>
				<input id="i5" class="setinput tColorPicker" type="text" title="" name="characterColor" value="<?=$data['characterColor']?>" />
			</li>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label for="characterSpeed">滚动速度：</label>
				<select id="characterSpeed" name="characterSpeed">
					<option value="1" <? if($data['characterSpeed']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if($data['characterSpeed']=='2'){echo'selected="selected"';} ?>>2</option>
					<option value="3" <? if($data['characterSpeed']=='3'){echo'selected="selected"';} ?>>3</option>
					<option value="4" <? if($data['characterSpeed']=='4'){echo'selected="selected"';} ?>>4</option>
					<option value="5" <? if($data['characterSpeed']=='5'){echo'selected="selected"';} ?>>5</option>
					<option value="6" <? if($data['characterSpeed']=='6'){echo'selected="selected"';} ?>>6</option>
					<option value="7" <? if($data['characterSpeed']=='7'){echo'selected="selected"';} ?>>7</option>
					<option value="8" <? if($data['characterSpeed']=='8'){echo'selected="selected"';} ?>>8</option>
					<option value="9" <? if($data['characterSpeed']=='9'){echo'selected="selected"';} ?>>9</option>
					<option value="10" <? if($data['characterSpeed']=='10'){echo'selected="selected"';} ?>>10</option>
					<option value="11" <? if($data['characterSpeed']=='11'){echo'selected="selected"';} ?>>11</option>
					<option value="12" <? if($data['characterSpeed']=='12'){echo'selected="selected"';} ?>>12</option>
					<option value="13" <? if($data['characterSpeed']=='13'){echo'selected="selected"';} ?>>13</option>
					<option value="14" <? if($data['characterSpeed']=='14'){echo'selected="selected"';} ?>>14</option>
					<option value="15" <? if($data['characterSpeed']=='15'){echo'selected="selected"';} ?>>15</option>
					<option value="16" <? if($data['characterSpeed']=='16'){echo'selected="selected"';} ?>>16</option>
					<option value="17" <? if($data['characterSpeed']=='17'){echo'selected="selected"';} ?>>17</option>
					<option value="18" <? if($data['characterSpeed']=='18'){echo'selected="selected"';} ?>>18</option>
					<option value="19" <? if($data['characterSpeed']=='19'){echo'selected="selected"';} ?>>19</option>
					<option value="20" <? if($data['characterSpeed']=='20'){echo'selected="selected"';} ?>>20</option>
					<option value="22" <? if($data['characterSpeed']=='22'){echo'selected="selected"';} ?>>22</option>
					<option value="24" <? if($data['characterSpeed']=='24'){echo'selected="selected"';} ?>>24</option>
					<option value="26" <? if($data['characterSpeed']=='26'){echo'selected="selected"';} ?>>26</option>
					<option value="28" <? if($data['characterSpeed']=='28'){echo'selected="selected"';} ?>>28</option>
					<option value="30" <? if($data['characterSpeed']=='30'){echo'selected="selected"';} ?>>30</option>
					<option value="32" <? if($data['characterSpeed']=='32'){echo'selected="selected"';} ?>>32</option>
					<option value="34" <? if($data['characterSpeed']=='34'){echo'selected="selected"';} ?>>34</option>
					<option value="36" <? if($data['characterSpeed']=='36'){echo'selected="selected"';} ?>>36</option>
					<option value="38" <? if($data['characterSpeed']=='38'){echo'selected="selected"';} ?>>38</option>
					<option value="40" <? if($data['characterSpeed']=='40'){echo'selected="selected"';} ?>>40</option>
					<option value="42" <? if($data['characterSpeed']=='42'){echo'selected="selected"';} ?>>42</option>
					<option value="44" <? if($data['characterSpeed']=='44'){echo'selected="selected"';} ?>>44</option>
					<option value="46" <? if($data['characterSpeed']=='46'){echo'selected="selected"';} ?>>46</option>
					<option value="48" <? if($data['characterSpeed']=='48'){echo'selected="selected"';} ?>>48</option>
					<option value="50" <? if($data['characterSpeed']=='50'){echo'selected="selected"';} ?>>50</option>
					<option value="52" <? if($data['characterSpeed']=='52'){echo'selected="selected"';} ?>>52</option>
					<option value="54" <? if($data['characterSpeed']=='54'){echo'selected="selected"';} ?>>54</option>
					<option value="56" <? if($data['characterSpeed']=='56'){echo'selected="selected"';} ?>>56</option>
					<option value="58" <? if($data['characterSpeed']=='58'){echo'selected="selected"';} ?>>58</option>
					<option value="60" <? if($data['characterSpeed']=='60'){echo'selected="selected"';} ?>>60</option>
					<option value="62" <? if($data['characterSpeed']=='62'){echo'selected="selected"';} ?>>62</option>
					<option value="64" <? if($data['characterSpeed']=='64'){echo'selected="selected"';} ?>>64</option>
					<option value="66" <? if($data['characterSpeed']=='66'){echo'selected="selected"';} ?>>66</option>
					<option value="68" <? if($data['characterSpeed']=='68'){echo'selected="selected"';} ?>>68</option>
					<option value="70" <? if($data['characterSpeed']=='70'){echo'selected="selected"';} ?>>70</option>
					<option value="72" <? if($data['characterSpeed']=='72'){echo'selected="selected"';} ?>>72</option>
					<option value="74" <? if($data['characterSpeed']=='74'){echo'selected="selected"';} ?>>74</option>
					<option value="76" <? if($data['characterSpeed']=='76'){echo'selected="selected"';} ?>>76</option>
					<option value="78" <? if($data['characterSpeed']=='78'){echo'selected="selected"';} ?>>78</option>
					<option value="80" <? if($data['characterSpeed']=='80'){echo'selected="selected"';} ?>>80</option>
					<option value="82" <? if($data['characterSpeed']=='82'){echo'selected="selected"';} ?>>82</option>
					<option value="84" <? if($data['characterSpeed']=='84'){echo'selected="selected"';} ?>>84</option>
					<option value="86" <? if($data['characterSpeed']=='86'){echo'selected="selected"';} ?>>86</option>
					<option value="88" <? if($data['characterSpeed']=='88'){echo'selected="selected"';} ?>>88</option>
					<option value="90" <? if($data['characterSpeed']=='90'){echo'selected="selected"';} ?>>90</option>
					<option value="92" <? if($data['characterSpeed']=='92'){echo'selected="selected"';} ?>>92</option>
					<option value="94" <? if($data['characterSpeed']=='94'){echo'selected="selected"';} ?>>94</option>
					<option value="96" <? if($data['characterSpeed']=='96'){echo'selected="selected"';} ?>>96</option>
					<option value="98" <? if($data['characterSpeed']=='98'){echo'selected="selected"';} ?>>98</option>
					<option value="100" <? if($data['characterSpeed']=='100'){echo'selected="selected"';} ?>>100</option>
				</select>
			</li>
			<li>
				<label for="characterEffect">滚动效果：</label>
				<select id="characterEffect" name="characterEffect">
					<option value="0" <? if($data['characterEffect']=='0'){echo'selected="selected"';} ?>>流畅</option>
					<option value="500" <? if($data['characterEffect']=='500'){echo'selected="selected"';} ?>>一步一顿</option>
				</select>
			</li>
            <li>
				<label for="characterScrollMode">滚动模式：</label>
				<select id="characterScrollMode" name="characterScrollMode">
					<option value="scroll" <? if($data['characterScrollMode']=='scroll'){echo'selected="selected"';} ?>>循环滚动</option>
					<option value="alternate" <? if($data['characterScrollMode']=='alternate'){echo'selected="selected"';} ?>>来回滚动</option>
					<option value="slide" <? if($data['characterScrollMode']=='slide'){echo'selected="selected"';} ?>>单次滚动</option>
				</select>
			</li>
			<li>
				<label for="characterDirection">滚动方向：</label>
				<select id="characterDirection" name="characterDirection">
					<option value="left" <? if($data['characterDirection']=='left'){echo'selected="selected"';} ?>>从右至左</option>
					<option value="right" <? if($data['characterDirection']=='right'){echo'selected="selected"';} ?>>从左至右</option>
					<option value="down" <? if($data['characterDirection']=='down'){echo'selected="selected"';} ?>>从上至下</option>
					<option value="up" <? if($data['characterDirection']=='up'){echo'selected="selected"';} ?>>从下至上</option>
				</select>
			</li>
            <li class="forScrollMode">
				<label for="rd2">起始位置：</label>
				<div id="rd2">
					<input type="radio" id="r4" name="characterDirectionPosition" value="1" <? if($data['characterDirectionPosition']=='1'){echo'checked="checked"';} ?> />
					<label id="l4" for="r4" title="">左侧</label>
					<input type="radio" id="r5" name="characterDirectionPosition" value="2" <? if($data['characterDirectionPosition']=='2'){echo'checked="checked"';} ?> />
					<label id="l5"  for="r5" title="">右侧</label>
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
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("#tForm select").selectmenu();
	$("input, .setform > li > div").buttonset();
	$(".characterMode").hide();
	if("<?=$data['characterMode']?>" == "custom") {
		$(".custom").show();
	} else {
		$(".normal").show();
	}
	if("<?=$data['characterMode']?>" == "img") {
		$(".textset").hide();
	} else {
		$(".textset").show();
	}
	if("<?=$data['characterScrollMode']?>" == "alternate") {
		$(".forScrollMode").hide();
	}
	$("#rd1").children("input[name='characterMode']").click(function() {
		var val = $(this).val();
		if(val == "text") {
			$("#l2").html("文字内容：");
			$("#l3").html("文字链接：");
			$("#i2").val("");
			$("#i3").val("");
			$(".custom").hide();
			$(".normal").show();
			$(".textset").show();
		} else if(val == "img") {
			$("#l2").html("图片地址：");
			$("#l3").html("图片链接：");
			$("#i2").val("");
			$("#i3").val("");
			$(".custom").hide();
			$(".normal").show();
			$(".textset").hide();
		} else {
			$(".custom").show();
			$(".normal").hide();
			$(".textset").hide();
		}
	});
	if("<?=$data['characterDirection']?>" == "left" || "<?=$data['characterDirection']?>" == "right") {
		$("#l4").html('<span class="ui-button-text">左侧</span>');
		$("#l5").html('<span class="ui-button-text">右侧</span>');
	} else {
		$("#l4").html('<span class="ui-button-text">顶部</span>');
		$("#l5").html('<span class="ui-button-text">底部</span>');
	}
	$( "#characterDirection" ).selectmenu({
       change: function( event, data ) {
			var val = $(this).val();
			if(val == "left" || val == "right") {
				$("#l4").html('<span class="ui-button-text">左侧</span>');
				$("#l5").html('<span class="ui-button-text">右侧</span>');
			} else {
				$("#l4").html('<span class="ui-button-text">顶部</span>');
				$("#l5").html('<span class="ui-button-text">底部</span>');
			}
		}
	});
	$( "#characterScrollMode" ).selectmenu({
       change: function( event, data ) {
			var val = $(this).val();
			if(val == "alternate") {
				$(".forScrollMode").hide();
			} else {
				$(".forScrollMode").show();
			}
		}
	});
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

