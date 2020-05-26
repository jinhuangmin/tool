<? 
$appIDArray = explode(',',$_POST['appIDArray']);
$appNameArray = explode(',',$_POST['appNameArray']);
$popupPosition0=$_POST['popupPosition'];
$popupPosition1=str_replace(",","",$popupPosition0);
$popupPosition=str_replace("'","",$popupPosition1);
 ?>
<form id="tForm" form-data="jpb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">高级设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="hidden" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
                    <li style="display:none;">
						<label for="triggerType">触发方式：</label>
						<div id="triggerType">
							<input type="radio" id="triggerType_1" name="triggerType" value="mouse" <? if($_POST['triggerType']=='mouse'){echo'checked="checked"';} ?> />
							<label for="triggerType_1" title="鼠标经过触点后触发弹出层">鼠标经过</label>
							<input type="radio" id="triggerType_2" name="triggerType" value="click" <? if($_POST['triggerType']=='click'){echo'checked="checked"';} ?>>
							<label for="triggerType_2" title="鼠标点击触点后触发弹出层">鼠标点击<i class="popsd"></i></label>
						</div>
					</li>
					<li class="triggerTypeClick" style="display:none;">
						<label for="clickToggle">点击类型：</label>
						<div id="clickToggle">
							<input type="radio" id="clickToggle_2" name="clickToggle" value="yes" <? if($_POST['clickToggle']=='yes'){echo'checked="checked"';} ?>>
							<label for="clickToggle_2" title="触发之后弹出和关闭交替执行">弹出/关闭</label>
							<input type="radio" id="clickToggle_1" name="clickToggle" value="no" <? if($_POST['clickToggle']=='no'){echo'checked="checked"';} ?> />
							<label for="clickToggle_1" title="触发之后只弹出一次">弹出后不消失</label>
						</div>
					</li>
					<li>
						<label for="appIDSelect">请选择触点的应用ID：</label>
						<select name="appIDSelect" id="appIDSelect">
							<? if(empty($_POST['appIDArray'])){echo'<option value="" selected="selected">请添加一个热区或正反面图片或文字链接</option>';}else{
                        for($i=0;$i<count($appIDArray);$i++){
							if($_POST['appIDSelect']==$appIDArray[$i]){$selected='selected="selected"';} else{$selected='';}
							echo'<option value="'.$appIDArray[$i].'" '.$selected.'>'.$appNameArray[$i].'</option>';
							}}
						?>	
						</select>
					</li>
					<li>
						<label for="alignType">弹出层对齐方式：</label>
						<div id="alignType">
							<input type="radio" id="pAlignType_1" name="alignType" value="yes" <? if($_POST['alignType']=='yes'){echo'checked="checked"';} ?> />
							<label for="pAlignType_1" title="选择应用方位和输入偏移量">对齐应用</label>
							<input type="radio" id="pAlignType_2" name="alignType" value="no" <? if($_POST['alignType']=='no'){echo'checked="checked"';} ?>>
							<label for="pAlignType_2" title="手动使用鼠标拖拽">手动定位<i class="popsd"></i></label>
						</div>
					</li>
					<li class="" style="display:none;">
						<label for="appIDAlignSelect">选择对齐点应用：</label>
						<select name="appIDAlignSelect" id="appIDAlignSelect">
							<? if(empty($_POST['appIDArray'])){echo'<option value="" selected="selected">请添加一个热区或正反面图片或文字链接</option>';}else{
                        for($i=0;$i<count($appIDArray);$i++){
							if($_POST['appIDAlignSelect']==$appIDArray[$i]){$selected='selected="selected"';} else{$selected='';}
							echo'<option value="'.$appIDArray[$i].'" '.$selected.'>'.$appNameArray[$i].'</option>';
							}
							}
						?>	
						</select>
					</li>
					<li class="pAlignTypeYes">
						<label for="popupPosition">弹出层位置：</label>
						<select name="popupPosition" id="popupPosition">
							<optgroup label="对齐点上方">
								<option value="'tl','bl'" <? if($popupPosition=="tlbl"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左下</option>
								<option value="'tc','bc'" <? if($popupPosition=="tcbc"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层下中</option>
								<option value="'tr','br'" <? if($popupPosition=="trbr"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右下</option>
							</optgroup>
							<optgroup label="对齐点右方">
								<option value="'tr','tl'" <? if($popupPosition=="trtl"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层左上</option>
								<option value="'cr','cl'" <? if($popupPosition=="crcl"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层左中</option>
								<option value="'br','bl'" <? if($popupPosition=="brbl"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层左下</option>
							</optgroup>
							<optgroup label="对齐点下方">
								<option value="'br','tr'" <? if($popupPosition=="brtr"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右上</option>
								<option value="'bc','tc'" <? if($popupPosition=="bctc"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层上中</option>
								<option value="'bl','tl'" <? if($popupPosition=="bltl"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左上</option>
							</optgroup>
							<optgroup label="对齐点左方">
								<option value="'bl','br'" <? if($popupPosition=="blbr"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层右下</option>
								<option value="'cl','cr'" <? if($popupPosition=="clcr"){echo'selected="selected"';} ?>>对齐点中左 - 弹出层中右</option>
								<option value="'tl','tr'" <? if($popupPosition=="tltr"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层右上</option>
							</optgroup>
							<optgroup label="对齐点覆盖">
								<option value="'tl','tl'" <? if($popupPosition=="tltl"){echo'selected="selected"';} ?>>对齐点左上 - 弹出层左上</option>
								<option value="'tc','tc'" <? if($popupPosition=="tctc"){echo'selected="selected"';} ?>>对齐点上中 - 弹出层上中</option>
								<option value="'tr','tr'" <? if($popupPosition=="trtr"){echo'selected="selected"';} ?>>对齐点右上 - 弹出层右上</option>
								<option value="'cr','cr'" <? if($popupPosition=="crcr"){echo'selected="selected"';} ?>>对齐点右中 - 弹出层右中</option>
								<option value="'br','br'" <? if($popupPosition=="brbr"){echo'selected="selected"';} ?>>对齐点右下 - 弹出层右下</option>
								<option value="'bc','bc'" <? if($popupPosition=="bcbc"){echo'selected="selected"';} ?>>对齐点下中 - 弹出层下中</option>
								<option value="'bl','bl'" <? if($popupPosition=="blbl"){echo'selected="selected"';} ?>>对齐点左下 - 弹出层左下</option>
								<option value="'cl','cl'" <? if($popupPosition=="clcl"){echo'selected="selected"';} ?>>对齐点左中 - 弹出层左中</option>
								<option value="'cc','cc'" style="color:#f00" <? if($popupPosition=="cccc"){echo'selected="selected"';} ?>>对齐点中心-弹出层中心(可做放大镜)</option>
							</optgroup>
						</select>
					</li>
					<li class="pAlignTypeNo">
						<label for="positionButton">手动定位：</label>
						<label id="positionButton" class="btnLabel jDragHandlePopup" data-ids="appIDSelect,iii1,iii2,customHtml,appIDAlignSelect,popupPosition">点击设置</label>
					</li>
					<li>
						<label for="iii1">水平偏移：</label>
						<input id="iii1" class="setinput" type="text" title="填正数像右移动，填负数则向左移动。如填 -20 弹出层则会向左移动20px" name="spaceX" value="<?=$_POST['spaceX']?>" />
					</li>
					<li>
						<label for="iii2">垂直偏移：</label>
						<input id="iii2" class="setinput" type="text" title="填正数像下移动，填负数则向上移动。如填 -20 弹出层则会向上移动20px" name="spaceY" value="<?=$_POST['spaceY']?>" />
					</li>
					<li>
						<label for="customHtml">弹出层内容：</label>
						<textarea id="customHtml" name="customHtml"><?=stripslashes( $_POST['customHtml'] )?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="customHtml" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="css3Mode">弹出特效：</label>
						<select name="css3Mode" id="css3Mode">
                            <option value="" <? if($_POST['css3Mode']==""){echo'selected="selected"';} ?>>无效果</option>
                            <option value="effect_w" <? if($_POST['css3Mode']=="effect_w"){echo'selected="selected"';} ?>>横向展开</option>
                            <option value="effect_h" <? if($_POST['css3Mode']=="effect_h"){echo'selected="selected"';} ?>>纵向展开</option>
                            <option value="effect_wh" <? if($_POST['css3Mode']=="effect_wh"){echo'selected="selected"';} ?>>斜向展开</option>
						</select>
					</li>
					<li class="">
						<label for="css3Bezier">弹出动画特效：</label>
						<select id="css3Bezier" name="css3Bezier">
                            <option value="" <? if($_POST['css3Bezier']==""){echo'selected="selected"';} ?>>匀速平滑</option>
                            <option value="bs1" <? if($_POST['css3Bezier']=="bs1"){echo'selected="selected"';} ?>>由慢到快（弱）</option>
                            <option value="bs2" <? if($_POST['css3Bezier']=="bs2"){echo'selected="selected"';} ?>>由慢到快（中）</option>
                            <option value="bs3" <? if($_POST['css3Bezier']=="bs3"){echo'selected="selected"';} ?>>由慢到快（强）</option>
                            <option value="bq1" <? if($_POST['css3Bezier']=="bq1"){echo'selected="selected"';} ?>>由快到慢（弱）</option>
                            <option value="bq2" <? if($_POST['css3Bezier']=="bq2"){echo'selected="selected"';} ?>>由快到慢（中）</option>
                            <option value="bq3" <? if($_POST['css3Bezier']=="bq3"){echo'selected="selected"';} ?>>由快到慢（强）</option>
						</select>
					</li>
					<li class="">
						<label for="css3Speed">弹出动画速度：</label>
						<select name="css3Speed" id="css3Speed">
							<?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['css3Speed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					
					?> 
					</select>
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
	
	"<?=$_POST['alignType']?>" == "yes" ? 
	( $(".pAlignTypeYes").show(),$(".pAlignTypeNo").hide() ) :
	( $(".pAlignTypeYes").hide(),$(".pAlignTypeNo").show() );
	$("#alignType").off("change.alignType").on("change.alignType", "input", function() {
		var val = $(this).val();
		if(val == "yes") {
			$(".pAlignTypeYes").show();
			$(".pAlignTypeNo").hide();
		} else {
			$(".pAlignTypeYes").hide();
			$(".pAlignTypeNo").show();
		}
	});
	
	"<?=$_POST['triggerType']?>" == "click" ? $(".triggerTypeClick").show() : $(".triggerTypeClick").hide();
	$("#triggerType").off("change.triggerType").on("change.triggerType", "input", function() {
		var val = $(this).val();
		if(val == "click") {
			$(".triggerTypeClick").show();
		} else {
			$(".triggerTypeClick").hide();
		}
	});
	
	"<?=$_POST['css3Mode']?>" == "" && $("#tabs").find(".css3Mode").hide();
	var allowTime = 'true';
	$("#css3Mode").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "") {
				$("#tabs").find(".css3Mode").hide();
			} else {
				if(allowTime == "false") {
					alert("请先登录后再使用此功能！");
					$(this).val("").selectmenu( "refresh" );
					event.preventDefault();
					event.stopPropagation();
					return false;
				}
				$("#tabs").find(".css3Mode").show();
			}
		}
	});
});
</script>