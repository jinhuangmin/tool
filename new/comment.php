<?
$data=$_POST; 

?>
<form id="tForm" form-data="jplb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="i4">活动链接地址：</label>
				<input id="i4" class="setinput" type="text" title="请输入活动页面的链接地址" name="moreUrl" value="<?=$data['moreUrl']?>" />
			</li>
			<li>
				<label for="i5">活动标题：</label>
				<input id="i5" class="setinput" type="text" title="评论的标题，用于在消息中心显示" name="title" value="<?=$data['title']?>" />
			</li>
			<li>
				<label for="cPage">活动每页评论数：</label>
				<select id="cPage" name="cPage">
                       <?  for($i=1;$i<11;$i++){ $stt=$data['cPage']==$i?'selected="selected"':'';
						   echo'<option value="'.$i.'" '.$stt.'>'.$i.'</option>';
						   }  ?> 
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
	$("#tForm select").fontselectmenu();
	$("input").buttonset();
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