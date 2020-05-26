<form id="tForm" form-data="jplb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="i4">活动链接地址：</label>
						<input id="i4" class="setinput" type="text" title="请输入活动页面的链接地址" junezx_vali_url="true" name="moreUrl" value="<?=$_POST['moreUrl']?>" />
					</li>
					<li>
						<label for="i5">活动标题：</label>
						<input id="i5" class="setinput" type="text" title="评论的标题，用于在消息中心显示" junezx_vali_str="true" name="title" value="<?=$_POST['title']?>" />
					</li>
					<li>
						<label for="cPage">活动每页评论数：</label>
						<select id="cPage" name="cPage">
							<?
                            for($i=1;$i<=10;$i++){
						if($_POST['cPage']==$i){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'" '.$sel.'>'.$i.'</option>';
						}
							?>
						</select>
					</li>
					<li style="height:40px;line-height:20px;">
						<span style="margin-left:170px;color:#990000;">天猫店铺无法使用SNS评论组件</span>
						<span style="margin-left:170px;color:#990000;margin-top:5px;">仅集市店铺可使用此功能</span>
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
	$("#tForm select").fontselectmenu();
	$(".ui-dialog-content input").buttonset();
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