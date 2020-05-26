<?
$ser=$_POST['childConfig']; 
$serTxt=$ser['0'];
$serAnn=$ser['1'];
$serJia=$ser['2'];
$serSee=$ser['3'];
?>
<form id="tForm" form-data="jsb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">搜索框</a></li>
		<li><a href="#tabs-3">搜索按钮</a></li>
		<li><a href="#tabs-4">价格区间</a></li>
		<li><a href="#tabs-99" style="display:none;">视频教程</a></li>
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
						<label for="i2">店铺地址：</label>
						<input id="i2" class="setinput" type="text" title="请输入店铺的首页地址，如：http://xx.tmall.com" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<label for="i2" class="chkLabel" style="text-align: left;line-height: 20px;color:#f00;">必须填写</label>
					</li>
					<li>
						<label for="child0jdhi_src">搜索框背景图片：</label>
						<input id="child0jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[0].searchSrc" value="<?=$serTxt['searchSrc']?>" />
						<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($serTxt['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child0autoSize" class="chkLabel">自动高宽</label>
					</li>

					<li>
						<label for="hrefMode">链接打开方式：</label>
						<select id="hrefMode" name="hrefMode">
							<option value="_self" <? if($_POST['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
							<option value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
						</select>
					</li>
                    <li>
                        <label for="ord1">搜索结果排序：</label>
                        <div id="ord1">
                            <input type="radio" id="or1" name="orderType" value="defaultSort"  <? if($_POST['orderType']=='defaultSort'){echo'checked="checked"';} ?>/>
                            <label for="or1" title="">综合</label>
                            <input type="radio" id="or2" name="orderType" value="hotsell_desc" <? if($_POST['orderType']=='hotsell_desc'){echo'checked="checked"';} ?> />
                            <label for="or2" title="">销量</label>
                            <input type="radio" id="or3" name="orderType" value="newOn_desc"  <? if($_POST['orderType']=='newOn_desc'){echo'checked="checked"';} ?>/>
                            <label for="or3" title="">新品</label>
                            <input type="radio" id="or4" name="orderType" value="hotkeep_desc"  <? if($_POST['orderType']=='hotkeep_desc'){echo'checked="checked"';} ?>/>
                            <label for="or4" title="">收藏</label>
                        </div>
                    </li>
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
						<div id="tabs-2">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$serTxt['attachID']?>" />
					
                    <?
  $bgp=$serTxt['imgBgp'];
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
                    
					<li class="imgContent contentType" style="display:none;">
						<label>背景图片对齐位置：</label>
						<span id="child0imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="child0imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[0].imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$serTxt['attachID']?>,tForm,jdhi_src,imgBgp,sdtzCharacterBgColor,autoSize" data-isn="child0" data-isa="yes">手动调整<i class="popsd"></i></label>
					</li>
					<li style="display:none;">
						<label for="child0sdtzCharacterBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serTxt['characterBgColor']?>;"></div></div></div>
							<input id="child0sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterBgColor" value="<?=$serTxt['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0i2">搜索框文本内容：</label>
						<input id="child0i2" class="setinput" type="text" title="请输入搜索框内的默认搜索文字" junezx_vali_str="true" name="childConfig[0].searchText" value="<?=$serTxt['searchText']?>" />
					</li>
					<li>
						<label for="child0i2">搜索框文本缩进：</label>
						<input id="child0i2" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="childConfig[0].characterIndent" value="<?=$serTxt['characterIndent']?>" />
					</li>
					<li>
						<label for="child0sdtzCharacterColor">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serTxt['characterColor']?>;"></div></div></div>
							<input id="child0sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterColor" value="<?=$serTxt['characterColor']?>" />
						</div>
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
					<li style="display: none;">
						<label for="child0characterStyle">文字斜体：</label>
						<select id="child0characterStyle" name="childConfig[0].characterStyle">
							<option value="normal" <? if($serTxt['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($serTxt['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li style="display: none;">
						<label for="child0sdtzDbdColor">点击后边框颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serTxt['dbdColor']?>;"></div></div></div>
							<input id="child0sdtzDbdColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].dbdColor" value="<?=$serTxt['dbdColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0i2">搜索框文字间距：</label>
						<input id="child0i2" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="childConfig[0].characterLetterSpacing" value="<?=$serTxt['characterLetterSpacing']?>" />
					</li>
				</ul>
			</div>
 <?
  $bgp=$serAnn['imgBgp'];
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
            
            <div id="tabs-3">
				<ul class="setform">
					<input id="child1h1" class="setinput" type="hidden" title="" name="childConfig[1].attachID" value="<?=$serAnn['attachID']?>" />
					<li>
						<label for="child1jdhi_src">搜索按钮背景图片：</label>
						<input id="child1jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[1].searchSrc" value="<?=$serAnn['searchSrc']?>" />
						<input id="child1autoSize" class="chkBox" type="checkbox" name="childConfig[1].autoSize" value="yes" <? if($serTxt['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child1autoSize" class="chkLabel">自动高宽</label>
											</li>
					<li class="imgContent contentType" style="display:none;">
						<label>背景图片对齐位置：</label>
						<span id="child1imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="child1imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[1].imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$serAnn['attachID']?>,tForm,jdhi_src,imgBgp,sdtzBgColor1,autoSize" data-isn="child1" data-isa="yes">手动调整<i class="popsd"></i></label>
					</li>
					<li style="display:none;">
						<label for="child1sdtzBgColor1">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serAnn['bgColor']?>;"></div></div></div>
							<input id="child1sdtzBgColor1" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[1].bgColor" value="<?=$serAnn['bgColor']?>" />
						</div>
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
 <?
  $bgp=$serJia['imgBgp'];
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
            
            <div id="tabs-4">
				<ul class="setform">
					<input id="child2h1" class="setinput" type="hidden" title="" name="childConfig[2].attachID" value="<?=$serJia['attachID']?>" />
										<li>
						<label for="rd1">搜索价格：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="priceSwitch" value="yes" <? if($_POST['priceSwitch']=='yes'){echo'checked="checked"';} ?> />
                            <label for="r1" title="">显示</label>
                            <input type="radio" id="r2" name="priceSwitch" value="no" <? if($_POST['priceSwitch']=='no'){echo'checked="checked"';} ?> />
                            <label for="r2" title="">不显示</label>
						</div>
					</li>
										<li>
						<label for="child2jdhi_src">价格区间背景图片：</label>
						<input id="child2jdhi_src" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[2].searchSrc" value="<?=$serJia['searchSrc']?>" />
						<input id="child2autoSize" class="chkBox" type="checkbox" name="childConfig[2].autoSize" value="yes" <? if($serJia['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child2autoSize" class="chkLabel">自动高宽</label>
											</li>
					<li class="imgContent contentType">
						<label>背景图片对齐位置：</label>
						<span id="child2imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="child2imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="childConfig[2].imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$serJia['attachID']?>,tForm,jdhi_src,imgBgp,sdtzBgColor1,autoSize" data-isn="child2" data-isa="yes">手动调整<i class="popsd"></i></label>
					</li>
					
                    <li>
					<label for="child2sdtzCharacterColor">文字颜色：</label>
					<div class="setcolorpanel">
						<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serSee['characterColor']?>;"></div></div></div>
				<input id="child2sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[3].characterColor" value="<?=$serSee['characterColor']?>" />
						</div>
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
										<li>
						<label for="child2sdtzBgColor1">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serJia['bgColor']?>;"></div></div></div>
							<input id="child2sdtzBgColor1" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[2].bgColor" value="<?=$serJia['bgColor']?>" />
						</div>
					</li>
										<li>
						<label for="child2i5">价格输入框背景图片：</label>
						<input id="child2i5" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[3].searchSrc" value="<?=$serSee['searchSrc']?>" />
											</li>
					<li>
						<label for="child2sdtzBgColor2">价格输入框背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$serSee['bgColor']?>;"></div></div></div>
							<input id="child2sdtzBgColor2" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[3].bgColor" value="<?=$serSee['bgColor']?>" />
						</div>
					</li>
																								</ul>
			</div>
						<div id="tabs-99">
				<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="324" src="http://cloud.video.taobao.com//play/u/669655157/p/2/e/1/t/1/50002670647.swf" type="application/x-shockwave-flash" wmode="opaque">
				</embed>
				<a class="june-preview" style="display:block;margin:5px auto;text-align:center;" href="http://cloud.video.taobao.com//play/u/669655157/p/2/e/1/t/1/50002670647.swf" target="_blank">新窗口全屏观看</a>
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
});
</script>