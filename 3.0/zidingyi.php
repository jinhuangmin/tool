<form id="tForm" form-data="jzdb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-3">强调动画</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
		<li><a href="#tabs-99" style="display: none">视频教程</a></li>
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
						<label for="customContent">自定义内容：</label>
						<textarea id="customContent" name="customContent"><?=stripslashes($_POST['customContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li>
						<label for="oveflowMode">超出部分内容：</label>
						<select id="oveflowMode" name="oveflowMode">
							<option value="visible" <? if($_POST['oveflowMode']=='visible'){echo'selected="selected"';} ?>>显示</option>
							<option value="hidden" <? if($_POST['oveflowMode']=='hidden'){echo'selected="selected"';} ?>>隐藏</option>
							<option value="hiddenXY" <? if($_POST['oveflowMode']=='hiddenXY'){echo'selected="selected"';} ?>>隐藏后显示滚动条(下拉条)</option>
							<option value="hiddenY" <? if($_POST['oveflowMode']=='hiddenY'){echo'selected="selected"';} ?>>隐藏后只显示纵向滚动条(下拉条)</option>
							<option value="hiddenX" <? if($_POST['oveflowMode']=='hiddenX'){echo'selected="selected"';} ?>>隐藏后只显示横向滚动条(横拉条)</option>
						</select>
					</li>
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
					<li style="height:auto;margin-bottom:10px;float:left;">
						<label for="tt_i1">动画效果：</label>
						<div class="animselect">
                            <div class="none<? if($_POST['animType']==''){echo' active';}?>" data-val=""><i><em></em></i>无效果</div>
							<div class="shakex<? if($_POST['animType']=='june-x-shake'){echo' active';}?>" data-val="june-x-shake"><i><em></em></i>左右抖动</div>
							<div class="shakey<? if($_POST['animType']=='june-y-shake'){echo' active';}?>" data-val="june-y-shake"><i><em></em></i>上下抖动</div>
							<div class="shaker<? if($_POST['animType']=='june-r-shake'){echo' active';}?>" data-val="june-r-shake"><i><em></em></i>旋转摆动</div>
							<div class="shakes<? if($_POST['animType']=='june-s-shake'){echo' active';}?>" data-val="june-s-shake"><i><em></em></i>弹性缩放</div>
							<div class="shaken<? if($_POST['animType']=='june-n-shake'){echo' active';}?>" data-val="june-n-shake"><i><em></em></i>弹性果冻</div>
						</div>
						<input type="hidden" name="animType" id="animType" value="<?=$_POST['animType']?>">
					</li>
					<li style="clear:both;">
						<label for="dhfd12">动画幅度：</label>
                        <div id="dhfd12">
							<input type="radio" id="dhfdr1" name="animRange" value="-s" <? if($_POST['animRange']=='-s'){echo'checked="checked"';} ?> />
							<label for="dhfdr1" title="">弱</label>
							<input type="radio" id="dhfdr2" name="animRange" value="-m" <? if($_POST['animRange']=='-m'){echo'checked="checked"';} ?> />
							<label for="dhfdr2" title="">中</label>
							<input type="radio" id="dhfdr3" name="animRange" value="-l" <? if($_POST['animRange']=='-l'){echo'checked="checked"';} ?> />
							<label for="dhfdr3" title="">强</label>
						</div>
					</li>
					<li>
						<label for="animSpeed">动画速度：</label>
						<select id="animSpeed" name="animSpeed">
							<option value="0s" <? if($_POST['animSpeed']=='0s'){echo'selected="selected"';}?>>立即显示</option>
                    <?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=8;$i<=20;$i=$i+1){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=30;$i<=300;$i=$i+10){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=320;$i<=600;$i=$i+20){ $sx=''.$i.'s';
						if($_POST['animSpeed']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					?>    
					</select>
					</li>
				</ul>
			</div>
			<div id="tabs-2">
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
			<div id="tabs-99" style="display: none">
				<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="324" src="http://cloud.video.taobao.com//play/u/39767794/p/2/e/1/t/1/19820904.swf" type="application/x-shockwave-flash" wmode="opaque">
				</embed>
				<a class="june-preview" style="display:block;margin:5px auto;text-align:center;" href="http://cloud.video.taobao.com//play/u/39767794/p/2/e/1/t/1/19820904.swf" target="_blank">新窗口全屏观看</a>
			</div>
		</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("#tForm select").selectmenu();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
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
	$(".animselect div").click(function(){
		$(".animselect div").removeClass("active");
		$(this).addClass("active");
		$("#animType").val($(this).attr("data-val"));
	});
});
</script>