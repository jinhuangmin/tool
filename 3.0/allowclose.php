<form id="tForm" form-data="jacb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
		<li style="display:none;"><a href="#tabs-3">按钮设置</a></li>
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
						<label for="rd1">默认展开/关闭：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="acMode" value="display" <? if($_POST['acMode']=='display'){echo'checked="checked"';} ?> />
							<label for="r1" title="">展开</label>
							<input type="radio" id="r2" name="acMode" value="hide" <? if($_POST['acMode']=='hide'){echo'checked="checked"';} ?> />
							<label for="r2" title="">关闭</label>
						</div>
					</li>
					<li>
						<label for="rd3">内容设置：</label>
						<div id="rd3">
							<input type="radio" id="r6" name="alclinkMode" value="ptlink" <? if($_POST['alclinkMode']=='ptlink'){echo'checked="checked"';} ?> />
							<label for="r6" title="" >图片</label>
							<input type="radio" id="r7" name="alclinkMode" value="gzlink" <? if($_POST['alclinkMode']=='gzlink'){echo'checked="checked"';} ?> />
							<label for="r7" title="">自定义内容</label>
						</div>
					</li>
					<li class="ptlink alclinkMode">
						<label for="jdhi_src">背景图片：</label>
						<input id="jdhi_src" class="setinput " type="text" junezx_vali_pic="true" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$_POST['pSrc']?>" />
						<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes" <? if($_POST['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="autoSize" class="chkLabel">自动高宽</label>
					</li>
					<li class="ptlink alclinkMode">
						<label for="i3">链接地址：</label>
						<input id="i3" class="setinput" type="text" title="" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
						<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
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
                    
					<li class=" alclinkMode" style="display:none;">
						<label>背景图片对齐位置：</label>
						<span id="imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
						<input id="imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="imgBgp" value="<?=$bgp?>" />
						<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>">手动调整<i class="popsd"></i></label>
					</li>
					<li class=" alclinkMode" style="display:none;">
						<label for="sdtzBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
							<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
						</div>
					</li>
					<li class="gzlink alclinkMode">
						<label for="i4">自定义内容：</label>
						<textarea id="i4" name="customHtml"><?=stripslashes($_POST['customHtml'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customHtml" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>

					<li style="display:none;">
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="child0i1">展开时按钮图片：</label>
						<input id="child0i1" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[0].showBtnSrc" value="<?=$_POST['childConfig'][0]['showBtnSrc']?>" />
						<input id="child0autoSize" class="chkBox" type="checkbox" name="childConfig[0].autoSize" value="yes" <? if($_POST['childConfig'][0]['autoSize']=='yes'){echo'checked="checked"';} ?> />
						<label for="child0autoSize" class="chkLabel">自动高宽</label>
					</li>
					<li>
						<label for="child0i2">关闭时按钮图片：</label>
						<input id="child0i2" class="setinput " type="text" title="请输入淘宝图片空间里的图片地址" junezx_vali_pic="true" name="childConfig[0].hideBtnSrc" value="<?=$_POST['childConfig'][0]['hideBtnSrc']?>" />
						<input id="child0autoSize1" class="chkBox" type="checkbox" name="childConfig[0].autoSize1" value="yes" <? if($_POST['childConfig'][0]['autoSize1']=='yes'){echo'checked="checked"';} ?> />
						<label for="child0autoSize1" class="chkLabel">自动高宽</label>
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
			<div id="tabs-3">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$_POST['childConfig'][0]['attachID']?>" />
					<li>
						<label for="child0tt_i1">按钮提示文字：</label>
						<input id="child0tt_i1" class="setinput" type="text" title="鼠标经过按钮时的提示文字" junezx_vali_str="true" name="childConfig[0].tipText" value="<?=$_POST['childConfig'][0]['tipText']?>" />
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
	$(".alclinkMode").hide();
	"<?=$_POST['alclinkMode']?>"=="ptlink" && $(".ptlink").show();
	"<?=$_POST['alclinkMode']?>"=="gzlink" && $(".gzlink").show();
	$("#rd3").children("input[name='alclinkMode']").click(function() {
		var val = $(this).val();
		$(".alclinkMode").hide();
		$("."+val).show();
	});
});
</script>