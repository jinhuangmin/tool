<form id="tForm" form-data="jeb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<input id="h1" class="setinput" type="hidden" title="" name="ewmSrc" value="<?=$_POST['ewmSrc']?>" />
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="rd1">二维码类型：</label>
						<div id="rd1">
                            <input type="radio" id="r1" name="ewmType" value="1" <? if($_POST['ewmType']=='1'){echo'checked="checked"';} ?> />
                            <label for="r1" title="">宝贝</label>
                            <input type="radio" id="r2" name="ewmType" value="2" <? if($_POST['ewmType']=='2'){echo'checked="checked"';} ?> />
                            <label for="r2" title="">店铺</label>
                            <input type="radio" id="r3" name="ewmType" value="3" <? if($_POST['ewmType']=='3'){echo'checked="checked"';} ?> />
                            <label for="r3" title="">微淘</label>
						</div>
					</li>
					<li class="ewmShop">
						<label for="ewmShop">店铺类型：</label>
						<select id="ewmShop" name="ewmShop">
							<option value="1" <? if($_POST['ewmShop']=='1'){echo'selected="selected"';} ?>>商城</option>
							<option value="2" <? if($_POST['ewmShop']=='2'){echo'selected="selected"';} ?>>集市</option>
						</select>
					</li>
					<li>
						<label id="l2" for="i2">宝贝页面地址：</label>
						<input id="i2" class="setinput" type="text" title="请输入需要生成二维码的页面地址" junezx_vali_url="true" name="ewmUrl" value="<?=$_POST['ewmUrl']?>" />
					</li>
					<li>
						<label for="ewmSize">二维码尺寸：</label>
						<select id="ewmSize" name="ewmSize">
							<option value="45" <? if($_POST['ewmSize']=='45'){echo'selected="selected"';} ?>>45</option>
                            <option value="50" <? if($_POST['ewmSize']=='50'){echo'selected="selected"';} ?>>50</option>
                            <option value="60" <? if($_POST['ewmSize']=='60'){echo'selected="selected"';} ?>>60</option>
                            <option value="70" <? if($_POST['ewmSize']=='70'){echo'selected="selected"';} ?>>70</option>
                            <option value="80" <? if($_POST['ewmSize']=='80'){echo'selected="selected"';} ?>>80</option>
                            <option value="90" <? if($_POST['ewmSize']=='90'){echo'selected="selected"';} ?>>90</option>
                            <option value="100" <? if($_POST['ewmSize']=='100'){echo'selected="selected"';} ?>>100</option>
                            <option value="140" <? if($_POST['ewmSize']=='140'){echo'selected="selected"';} ?>>140</option>
						</select>
					</li>
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
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
	$("#ewmSize").selectmenu("menuWidget").addClass("selectmenu-height");
	$(".ewmShop").hide();
	"<?=$_POST['ewmType']?>" == "1" && ( $("#l2").html("宝贝页面地址：") );
	"<?=$_POST['ewmType']?>" == "2" && ( $("#l2").html("店铺ID："), $(".ewmShop").show() );
	"<?=$_POST['ewmType']?>" == "3" && ( $("#l2").html("微淘ID：") );
	$("#rd1").on("change", "input", function() {
		$(".ewmShop").hide();
		var val = $(this).val();
		val == "1" && ( $("#l2").html("宝贝页面地址：") );
		val == "2" && ( $("#l2").html("店铺ID："), $(".ewmShop").show() );
		val == "3" && ( $("#l2").html("微淘ID：") );
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