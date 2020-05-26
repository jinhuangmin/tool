<?
$data=$_POST; 
$ser=$data['childConfig']; 
$serTxt=$ser['0'];
$serAnn=$ser['1'];
$serJia=$ser['2'];
$serSee=$ser['3'];
?>
<form id="tForm" form-data="jsb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">搜索框</a></li>
		<li><a href="#tabs-3">搜索按钮</a></li>
		<li><a href="#tabs-4">价格区间</a></li>
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
            <li style="display:none;">
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="i2">店铺地址：</label>
				<input id="i2" class="setinput" type="text" title="请输入店铺的首页地址，如：https://xxxx.tmall.com" name="href" value="<?=$data['href']?>" />
			</li>
			<li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
					<option value="_blank"  <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
				</select>
			</li>
			<li>
				<label for="ord1">搜索结果排序：</label>
				<div id="ord1">
					<input type="radio" id="or1" name="orderType" value="defaultSort"  <? if($data['orderType']=='defaultSort'){echo'checked="checked"';} ?>/>
					<label for="or1" title="" style="width:60px;">综合</label>
					<input type="radio" id="or2" name="orderType" value="" <? if($data['orderType']==''){echo'checked="checked"';} ?> />
					<label for="or2" title="" style="width:60px;">销量</label>
					<input type="radio" id="or3" name="orderType" value="newOn_desc"  <? if($data['orderType']=='newOn_desc'){echo'checked="checked"';} ?>/>
					<label for="or3" title="" style="width:60px;">新品</label>
					<input type="radio" id="or4" name="orderType" value="hotkeep_desc"  <? if($data['orderType']=='hotkeep_desc'){echo'checked="checked"';} ?>/>
					<label for="or4" title="" style="width:60px;">收藏</label>
				</div>
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
		<div id="tabs-2">
		<ul class="setform">
			<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$serTxt['attachID']?>" />
						<li>
				<label for="child0i1">搜索框背景图片：</label>
				<input id="child0i1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="childConfig[0].searchSrc" value="<?=$serTxt['searchSrc']?>" />
				<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($serTxt['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child0autoSize" class="chkLabel">自动高宽</label>
			</li>
            <li>
				<label for="child0bg_i1">搜索框背景颜色：</label>
				<input id="child0bg_i1" class="setinput tColorPicker" type="text" title="优先显示背景图片" name="childConfig[0].characterBgColor" value="<?=$serTxt['characterBgColor']?>" />
			</li>
						<li>
				<label for="child0i2">搜索框文本内容：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入搜索框内的默认搜索文字" name="childConfig[0].searchText" value="<?=$serTxt['searchText']?>" />
			</li>
			<li>
				<label for="child0i2">搜索框文本缩进：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="childConfig[0].searchTextSpace" value="<?=$serTxt['searchTextSpace']?>" />
			</li>
			<li>
				<label for="child0i2">搜索框文字间距：</label>
				<input id="child0i2" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="childConfig[0].searchTextSpacing" value="<?=$serTxt['searchTextSpacing']?>" />
			</li>
						<li>
				<label for="child0i3">文字颜色：</label>
				<input id="child0i3" class="setinput tColorPicker" type="text" title="" name="childConfig[0].characterColor" value="<?=$serTxt['characterColor']?>" />
			</li>
			<li>
				<label for="child0i4">文字大小：</label>
				<input id="child0i4" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[0].characterSize" value="<?=$serTxt['characterSize']?>" />
			</li>
			<li>
				<label for="child0characterFont">文字字体：</label>
				<select id="child0characterFont" name="childConfig[0].characterFont">
					<option value="宋体" <? if($serTxt['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($serTxt['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($serTxt['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($serTxt['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
				</select>
			</li>
			<li>
				<label for="child0characterWeight">文字粗细：</label>
				<select id="child0characterWeight" name="childConfig[0].characterWeight">
					<option value="normal" <? if($serTxt['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($serTxt['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
		</ul>
	</div>
		<div id="tabs-3">
		<ul class="setform">
			<input id="child1h1" class="setinput" type="hidden" title="" name="childConfig[1].attachID" value="<?=$serAnn['attachID']?>" />
			<li>
				<label for="child1i1">按钮背景图片：</label>
				<input id="child1i1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="childConfig[1].searchSrc" value="<?=$serAnn['searchSrc']?>" />
				<input id="child1autoSize" class="chkBox" type="checkbox" name="childConfig[1].autoSize" value="yes" <? if($serTxt['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child1autoSize" class="chkLabel">自动高宽</label>
			</li>
            <li>
				<label for="child1bg_i1">按钮背景颜色：</label>
				<input id="child1bg_i1" class="setinput tColorPicker" type="text" title="" name="childConfig[1].bgColor" value="<?=$serAnn['bgColor']?>" />
			</li>
			<li>
				<label for="child1ii1">宽度：</label>
				<input id="child1ii1" class="setinput" type="text" title="自动的获取宽度，如需精确调整，请在此处输入数值。" name="childConfig[1].width" value="<?=$serAnn['width']?>" />
			</li>
			<li>
				<label for="child1ii2">高度：</label>
				<input id="child1ii2" class="setinput" type="text" title="自动的获取高度，如需精确调整，请在此处输入数值。" name="childConfig[1].height" value="<?=$serAnn['height']?>" />
			</li>
			<li>
				<label for="child1ii3">上边距：</label>
				<input id="child1ii3" class="setinput" type="text" title="自动的获取上边距，如需精确调整，请在此处输入数值。" name="childConfig[1].top" value="<?=$serAnn['top']?>" />
			</li>
			<li>
				<label for="child1ii4">左边距：</label>
				<input id="child1ii4" class="setinput" type="text" title="自动的获取上边距，如需精确调整，请在此处输入数值。" name="childConfig[1].left" value="<?=$serAnn['left']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-4">
		<ul class="setform">
			<input id="child2h1" class="setinput" type="hidden" title="" name="childConfig[2].attachID" value="<?=$serJia['attachID']?>" />
			<li>
				<label for="rd1">搜索价格：</label>
				<div id="rd1">
					<input type="radio" id="r1" name="priceSwitch" value="yes" <? if($data['priceSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="r1" title="">显示</label>
					<input type="radio" id="r2" name="priceSwitch" value="no" <? if($data['priceSwitch']=='no'){echo'checked="checked"';} ?> />
					<label for="r2" title="" style="width:70px;">不显示</label>
				</div>
			</li>
			<li>
				<label for="child2i1">区间背景图片：</label>
				<input id="child2i1" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="childConfig[2].searchSrc" value="<?=$serJia['searchSrc']?>" />
				<input id="child2autoSize" class="chkBox" type="checkbox" name="childConfig[2].autoSize" value="yes" <? if($serJia['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="child2autoSize" class="chkLabel">自动高宽</label>
			</li>
			<li>
				<label for="child2i5">输入框背景图片：</label>
				<input id="child2i5" class="setinput" type="text" title="" name="childConfig[3].searchSrc" value="<?=$serSee['searchSrc']?>" />
			</li>
			<li>
				<label for="child2i3">文字颜色：</label>
				<input id="child2i3" class="setinput tColorPicker" type="text" title="" name="childConfig[3].characterColor" value="<?=$serSee['characterColor']?>" />
			</li>
			<li>
				<label for="child2i4">文字大小：</label>
				<input id="child2i4" class="setinput" type="text" title="请输入数字的大小，无需加px" name="childConfig[3].characterSize" value="<?=$serSee['characterSize']?>" />
			</li>
			<li>
				<label for="child2characterFont">文字字体：</label>
				<select id="child2characterFont" name="childConfig[3].characterFont">
					<option value="宋体" <? if($serSee['characterFont']=='宋体'){echo'selected="selected"';} ?>>宋体</option>
					<option value="黑体" <? if($serSee['characterFont']=='黑体'){echo'selected="selected"';} ?>>黑体</option>
					<option value="微软雅黑" <? if($serSee['characterFont']=='微软雅黑'){echo'selected="selected"';} ?>>雅黑</option>
					<option value="楷体" <? if($serSee['characterFont']=='楷体'){echo'selected="selected"';} ?>>楷体</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435482.swf#tb_videoid=6184065" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435482.swf#tb_videoid=6184065" target="_blank">新窗口全屏观看</a>
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
});
</script>