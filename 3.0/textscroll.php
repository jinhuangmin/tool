<form id="tForm" form-data="jtsb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">滚动设置</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
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
						<label for="rd1">内容设置：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="characterMode" value="text" <? if($_POST['characterMode']=='text'){echo'checked="checked"';} ?> />
							<label for="r1" title="文字自动滚动">文字</label>
							<input type="radio" id="r2" name="characterMode" value="img" <? if($_POST['characterMode']=='img'){echo'checked="checked"';} ?> />
							<label for="r2" title="图片自动滚动">图片</label>
							<input type="radio" id="r3" name="characterMode" value="custom" <? if($_POST['characterMode']=='custom'){echo'checked="checked"';} ?> />
							<label for="r3" title="图片自动滚动" style="width:100px;">自定义内容</label>
						</div>
					</li><? if($_POST['characterMode']=='text'){$wz1='文字内容';$wz2='文字链接';}else{$wz1='图片地址';$wz2='图片链接';}   ?>
					<li class="normal characterMode">
						<label id="l2" for="i2"><?=$wz1?>：</label>
						<input id="i2" class="setinput" type="text" title="" junezx_vali_str="true"name="characterContent" value="<?=$_POST['characterContent']?>" />
					</li>
					<li class="normal characterMode">
						<label id="l3" for="i3"><?=$wz2?>：</label>
						<input id="i3" class="setinput" type="text" title="" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
						<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					<li class="custom characterMode">
						<label for="customContent">自定义内容：</label>
						<textarea id="customContent" name="customContent"><?=stripslashes($_POST['customContent'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
					<li class="textset">
						<label for="sdtzCharacterColor">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor']?>;"></div></div></div>
							<input id="sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="characterColor" value="<?=$_POST['characterColor']?>" />
						</div>
					</li>
					<li class="textset">
						<label for="sdtzCharacterBgColor">背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColor']?>;"></div></div></div>
							<input id="sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColor" value="<?=$_POST['characterBgColor']?>" />
						</div>
					</li>
					<li class="textset">
						<label for="i4">文字大小：</label>
						<input id="i4" class="setinput" type="text" title="请输入滚动文字的文字大小，当选择为图片滚动时设置无效。" name="characterSize" value="<?=$_POST['characterSize']?>" />
					</li>
					<li class="textset">
						<label for="characterWeight">文字字体：</label>
						<select id="characterFont" name="characterFont">
				<option value="宋体" <? if($_POST['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                <option value="黑体" <? if($_POST['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                <option value="微软雅黑" <? if($_POST['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                <option value="楷体" <? if($_POST['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                <option value="Arial" <? if($_POST['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                <option value="Verdana" <? if($_POST['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                <option value="Georgia" <? if($_POST['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                <option value="Times New Roman" <? if($_POST['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                <option value="Trebuchet MS" <? if($_POST['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                <option value="Courier" <? if($_POST['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                <option value="Impact" <? if($_POST['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                <option value="Comic Sans MS" <? if($_POST['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                <option value="Tahoma" <? if($_POST['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                <option value="Symbol" <? if($_POST['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                <option value="Palatino Linotype" <? if($_POST['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                <option value="Bookman Old Style" <? if($_POST['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li class="textset">
						<label for="characterWeight">文字粗细：</label>
						<select id="characterWeight" name="characterWeight">
							<option value="normal" <? if($_POST['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($_POST['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li class="textset">
						<label for="characterStyle">文字斜体：</label>
						<select id="characterStyle" name="characterStyle">
							<option value="normal" <? if($_POST['characterStyle']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="italic" <? if($_POST['characterStyle']=='italic'){echo'selected="selected"';} ?>>斜体</option>
						</select>
					</li>
					<li class="textset">
						<label for="characterLineThrough">文字中划线：</label>
						<select id="characterLineThrough" name="characterLineThrough">
							<option value="" <? if($_POST['characterLineThrough']==''){echo'selected="selected"';} ?>>不显示</option>
							<option value="line-through" <? if($_POST['characterLineThrough']=='line-through'){echo'selected="selected"';} ?>>显示</option>
						</select>
					</li>
					<li class="textset">
						<label for="characterLineUnder">文字下划线：</label>
						<select id="characterLineUnder" name="characterLineUnder">
							<option value="" <? if($_POST['characterLineUnder']==''){echo'selected="selected"';} ?>>不显示</option>
							<option value="underline" <? if($_POST['characterLineUnder']=='underline'){echo'selected="selected"';} ?>>显示</option>
						</select>
					</li>
				</ul>
			</div>

			<div id="tabs-2">
				<ul class="setform">
					<li class="normode marShowMode" style="">
						<label for="characterSpeed">滚动速度：</label>
						<select id="characterSpeed" name="characterSpeed">
							<?
			for($i=1;$i<101;$i++){ 
				if($_POST['characterSpeed']==$i){$sel='selected';}else{$sel='';}
			echo'<option value="'.$i.'" '.$sel.'>'.$i.'秒</option>';
				}
			?>
					</select>
					</li>
					<li class="specmode marShowMode" style="display:none;">
						<label for="characterSpeed1">滚动速度：</label>
						<select id="characterSpeed1" name="characterSpeed1">
						<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['characterSpeed1']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=8;$i<=20;$i=$i+1){ $sx=''.$i.'s';
						if($_POST['characterSpeed1']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=30;$i<=300;$i=$i+10){ $sx=''.$i.'s';
						if($_POST['characterSpeed1']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=320;$i<=600;$i=$i+20){ $sx=''.$i.'s';
						if($_POST['characterSpeed1']==$sx){$sel='selected';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					?>    
					</select>
						<span style="display:block;color:#F00;float:left;line-height:25px;width:220px;margin-left:160px;margin-top:-20px;"><br />当滚动方向为【从上至下】或者【从下至上】时且滚动模式为【来回滚动】，滚动速度单位为秒，<strong>效果以预览时的速度</strong>为准。</span>
					</li>
					<li style="clear:both;">
						<label for="characterEffect">滚动效果：</label>
						<select id="characterEffect" name="characterEffect">
							<option value="0" <? if($_POST['characterEffect']=='0'){echo'selected="selected"';} ?>>流畅</option>
							<option value="500" <? if($_POST['characterEffect']=='500'){echo'selected="selected"';} ?>>一步一顿</option>
						</select>
					</li>
					<li>
						<label for="characterScrollMode">滚动模式：</label>
						<select id="characterScrollMode" name="characterScrollMode">
							<option value="scroll" <? if($_POST['characterScrollMode']=='scroll'){echo'selected="selected"';} ?>>循环滚动</option>
							<option value="alternate" <? if($_POST['characterScrollMode']=='alternate'){echo'selected="selected"';} ?>>来回滚动</option>
							<option value="slide" <? if($_POST['characterScrollMode']=='slide'){echo'selected="selected"';} ?>>单次滚动</option>
						</select>
					</li>
					<li>
						<label for="characterDirection">滚动方向：</label>
						<select id="characterDirection" name="characterDirection">
							<option value="left" <? if($_POST['characterDirection']=='left'){echo'selected="selected"';} ?>>从右至左</option>
							<option value="right" <? if($_POST['characterDirection']=='right'){echo'selected="selected"';} ?>>从左至右</option>
							<option value="down" <? if($_POST['characterDirection']=='down'){echo'selected="selected"';} ?>>从上至下</option>
							<option value="up" <? if($_POST['characterDirection']=='up'){echo'selected="selected"';} ?>>从下至上</option>
						</select>
					</li>
					<li class="forScrollMode">
						<label for="rd2">起始位置：</label>
						<div id="rd2">
							<input type="radio" id="r4" name="characterDirectionPosition" value="1" <? if($_POST['characterDirectionPosition']=='1'){echo'checked="checked"';} ?> />
							<label id="l4" for="r4" title="">左侧</label>
							<input type="radio" id="r5" name="characterDirectionPosition" value="2" <? if($_POST['characterDirectionPosition']=='2'){echo'checked="checked"';} ?> />
							<label id="l5"  for="r5" title="">右侧</label>
						</div>
					</li>
				</ul>
			</div>
			<div id="tabs-3">
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
	$("#tabs").tabs();
	$("#tForm select").selectmenu();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$(".characterMode").hide();
	if("<?=$_POST['characterMode']?>" == "custom") {
		$(".custom").show();
		$(".textset").hide();
	} else {
		$(".normal").show();
	}

	if("<?=$_POST['characterMode']?>" == "img") {
		$(".textset").hide();
	} else {
		$(".textset").show();
	}

	if("<?=$_POST['characterScrollMode']?>" == "alternate") {
		$(".forScrollMode").hide();
	}
	$("#rd1").children("input[name='characterMode']").click(function() {
		var val = $(this).val();
		if(val == "text") {
			$("#l2").html("文字内容：");
			$("#l3").html("文字链接：");
			$("#i2").val("").attr("junezx_vali_str", true).removeAttr("junezx_vali_pic").trigger("change");
			$("#i3").val("").trigger("change");
			$(".custom").hide();
			$(".normal").show();
			$(".textset").show();
			$(".tPicUploadBtn").hide();
		} else if(val == "img") {
			$("#l2").html("图片地址：");
			$("#l3").html("图片链接：");
			$("#i2").val("").attr("junezx_vali_pic", true).removeAttr("junezx_vali_str").trigger("change");
			$("#i3").val("").trigger("change");
			$(".custom").hide();
			$(".normal").show();
			$(".textset").hide();
			$(".tPicUploadBtn").show();
		} else {
			$("#i2").removeAttr("junezx_vali_str").removeAttr("junezx_vali_pic");
			$(".custom").show();
			$(".normal").hide();
			$(".textset").hide();
			$(".tPicUploadBtn").hide();
		}
	});
	if("<?=$_POST['characterDirection']?>" == "left" || "<?=$_POST['characterDirection']?>" == "right") {
		$("#l4").html('<span class="ui-button-text">左侧</span>');
		$("#l5").html('<span class="ui-button-text">右侧</span>');
	} else {
		$("#l4").html('<span class="ui-button-text">顶部</span>');
		$("#l5").html('<span class="ui-button-text">底部</span>');
	}
	$( "#characterDirection" ).selectmenu({
       change: function( event, data ) {
			var val = $(this).val(), v1 = $("#characterScrollMode").val();
			$(".normode").show();
			$(".specmode").hide();
			if(val == "left" || val == "right") {
				$("#l4").html('<span class="ui-button-text">左侧</span>');
				$("#l5").html('<span class="ui-button-text">右侧</span>');
			} else {
				if(v1 == "alternate") {
					$(".specmode").show();
					$(".normode").hide();
				}
				$("#l4").html('<span class="ui-button-text">顶部</span>');
				$("#l5").html('<span class="ui-button-text">底部</span>');
			}
		}
	});
	$( "#characterScrollMode" ).selectmenu({
       change: function( event, data ) {
			var val = $(this).val(), v1 = $("#characterDirection").val();
			$(".normode").show();
			$(".specmode").hide();
			if(val == "alternate") {
				$(".forScrollMode").hide();
				if(v1 == "up" || v1 == "down") {
					$(".specmode").show();
					$(".normode").hide();
				}
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