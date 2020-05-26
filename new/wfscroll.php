<?
$data=$_POST;
?>

<form id="tForm" form-data="wfscroll" method="post" >
<div id="tabs" class="zmhtml">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
	
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
        <div style=" height:10px;"></div>
	<div id="tabs-1">

		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
			</li>			
			<li >
				<label for="i2">图片地址：</label>
				<input id="i2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes"  <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>	
			 <li class=" marquee">
				<label for="scrollamount">滚动速度：</label>
				<select id="scrollamount" name="scrollamount">
				<option value="1" <? if($data['scrollamount']=='1'){echo'selected="selected"';} ?> >1极慢</option>
				<option value="2" <? if($data['scrollamount']=='2'){echo'selected="selected"';} ?> >2</option>
				<option value="3" <? if($data['scrollamount']=='3'){echo'selected="selected"';} ?> >3</option>
				<option value="4" <? if($data['scrollamount']=='4'){echo'selected="selected"';} ?> >4</option>
				<option value="5" <? if($data['scrollamount']=='5'){echo'selected="selected"';} ?> >5</option>
				<option value="6" <? if($data['scrollamount']=='6'){echo'selected="selected"';} ?> >6</option>
				<option value="7" <? if($data['scrollamount']=='7'){echo'selected="selected"';} ?> >7</option>
				<option value="8" <? if($data['scrollamount']=='8'){echo'selected="selected"';} ?> >8</option>
				<option value="9" <? if($data['scrollamount']=='9'){echo'selected="selected"';} ?> >9适中</option>
				<option value="10" <? if($data['scrollamount']=='10'){echo'selected="selected"';} ?> >10</option>
				<option value="11" <? if($data['scrollamount']=='11'){echo'selected="selected"';} ?> >11</option>
				<option value="12" <? if($data['scrollamount']=='12'){echo'selected="selected"';} ?> >12</option>
				<option value="13" <? if($data['scrollamount']=='13'){echo'selected="selected"';} ?> >13</option>
				<option value="14" <? if($data['scrollamount']=='14'){echo'selected="selected"';} ?> >14</option>
				<option value="15" <? if($data['scrollamount']=='15'){echo'selected="selected"';} ?> >15</option>
				<option value="16" <? if($data['scrollamount']=='16'){echo'selected="selected"';} ?> >16快</option>
				<option value="17" <? if($data['scrollamount']=='17'){echo'selected="selected"';} ?> >17</option>
				<option value="18" <? if($data['scrollamount']=='18'){echo'selected="selected"';} ?> >18</option>
				<option value="19" <? if($data['scrollamount']=='19'){echo'selected="selected"';} ?> >19</option>
				<option value="20" <? if($data['scrollamount']=='20'){echo'selected="selected"';} ?> >20极快</option>
				<option value="21" <? if($data['scrollamount']=='21'){echo'selected="selected"';} ?> >21</option>
				<option value="22" <? if($data['scrollamount']=='22'){echo'selected="selected"';} ?> >22</option>
				<option value="23" <? if($data['scrollamount']=='23'){echo'selected="selected"';} ?> >23</option>
				<option value="24" <? if($data['scrollamount']=='24'){echo'selected="selected"';} ?> >24</option>
				<option value="25" <? if($data['scrollamount']=='25'){echo'selected="selected"';} ?> >25</option>
				<option value="26" <? if($data['scrollamount']=='26'){echo'selected="selected"';} ?> >26</option>
				<option value="27" <? if($data['scrollamount']=='27'){echo'selected="selected"';} ?> >27</option>
				<option value="28" <? if($data['scrollamount']=='28'){echo'selected="selected"';} ?> >28</option>
				<option value="29" <? if($data['scrollamount']=='29'){echo'selected="selected"';} ?> >29</option>
				<option value="30" <? if($data['scrollamount']=='30'){echo'selected="selected"';} ?> >30</option>
				<option value="40" <? if($data['scrollamount']=='40'){echo'selected="selected"';} ?> >40</option>
				<option value="45" <? if($data['scrollamount']=='45'){echo'selected="selected"';} ?> >45</option>
				<option value="50" <? if($data['scrollamount']=='50'){echo'selected="selected"';} ?> >50</option>
				<option value="55" <? if($data['scrollamount']=='55'){echo'selected="selected"';} ?> >55</option>
				<option value="60" <? if($data['scrollamount']=='60'){echo'selected="selected"';} ?> >60</option>
				<option value="65" <? if($data['scrollamount']=='65'){echo'selected="selected"';} ?> >65</option>
				<option value="70" <? if($data['scrollamount']=='70'){echo'selected="selected"';} ?> >70</option>
				<option value="75" <? if($data['scrollamount']=='75'){echo'selected="selected"';} ?> >75</option>
				<option value="80" <? if($data['scrollamount']=='80'){echo'selected="selected"';} ?> >80</option>
				<option value="85" <? if($data['scrollamount']=='85'){echo'selected="selected"';} ?> >85</option>
				<option value="90" <? if($data['scrollamount']=='90'){echo'selected="selected"';} ?> >90</option>
				<option value="95" <? if($data['scrollamount']=='95'){echo'selected="selected"';} ?> >95</option>
				<option value="100" <? if($data['scrollamount']=='100'){echo'selected="selected"';} ?> >100</option>
				<option value="110" <? if($data['scrollamount']=='110'){echo'selected="selected"';} ?> >110</option>
				<option value="120" <? if($data['scrollamount']=='120'){echo'selected="selected"';} ?> >120</option>
				<option value="130" <? if($data['scrollamount']=='130'){echo'selected="selected"';} ?> >130</option>
				<option value="140" <? if($data['scrollamount']=='140'){echo'selected="selected"';} ?> >140</option>
				<option value="150" <? if($data['scrollamount']=='150'){echo'selected="selected"';} ?> >150</option>
				<option value="160" <? if($data['scrollamount']=='160'){echo'selected="selected"';} ?> >160</option>
				<option value="170" <? if($data['scrollamount']=='170'){echo'selected="selected"';} ?> >170</option>
				<option value="180" <? if($data['scrollamount']=='180'){echo'selected="selected"';} ?> >180</option>
				<option value="190" <? if($data['scrollamount']=='190'){echo'selected="selected"';} ?> >190</option>
				<option value="200" <? if($data['scrollamount']=='200'){echo'selected="selected"';} ?> >200</option>
				</select>
			</li>
			<li class="marquee">
				<label for="dir">滚动方向：</label>
				<select id="dir" name="dir">
					<option value="left" <? if($data['dir']=='left'){echo'selected="selected"';} ?>>向左滚动</option>
					<option value="right" <? if($data['dir']=='right'){echo'selected="selected"';} ?>>向右滚动</option>
				    <option value="up" <? if($data['dir']=='up'){echo'selected="selected"';} ?>>向上滚动</option>
					<option value="down" <? if($data['dir']=='down'){echo'selected="selected"';} ?>>向下滚动</option>
				</select>
			</li>
		 	<li >
				<label for="rod">角度调整：</label>
					<select id="rod" name="rod">
				        <option value="" <? if($data['rod']==''){echo'selected="selected"';} ?>>原来位置</option>
				        <option value="10" <? if($data['rod']=='10'){echo'selected="selected"';} ?> >右侧转动10度</option>
						<option value="20" <? if($data['rod']=='20'){echo'selected="selected"';} ?> >右侧转动20度</option>
					    <option value="30" <? if($data['rod']=='30'){echo'selected="selected"';} ?> >右侧转动30度</option>
						<option value="40" <? if($data['rod']=='40'){echo'selected="selected"';} ?> >右侧转动40度</option>
						<option value="45" <? if($data['rod']=='45'){echo'selected="selected"';} ?> >右侧转45度</option>
						<option value="50" <? if($data['rod']=='50'){echo'selected="selected"';} ?> >右侧转50度</option>
						<option value="60" <? if($data['rod']=='60'){echo'selected="selected"';} ?> >右侧转60度</option>
						<option value="70" <? if($data['rod']=='70'){echo'selected="selected"';} ?> >右侧转70度</option>
						<option value="80" <? if($data['rod']=='80'){echo'selected="selected"';} ?> >右侧转80度</option>
				</select>
			</li>
			<li style=" height:auto">
				<label>预置配置：</label>
				<div id="flashdsSet" style="margin-left:110px;">
				<span class="flashds-span flashds-active" data-flashurl="">无</span>
                <span class="flashds-span" rod="45"  dir="down"  data-flashurl="https://img.alicdn.com/imgextra/i2/2862415049/TB2XH32aqe5V1BjSszeXXc3zXXa-2862415049.png" >流星雨</span>
				</div>
			</li>
		</ul>  
	</div>
	<div id="tabs-2">
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
	$("input").buttonset();
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
	





$("#rod option[value='30']").attr("selected", true);
	
	
	$("#flashdsSet").on("click", "span", function() {

	
		$("#flashdsSet").children(".flashds-active").removeClass("flashds-active");
		
		
		$(this).addClass("flashds-active");
		
		var index = $(this).index(),
		 flashurl = $(this).attr("data-flashurl"),
		 rod = $(this).attr("rod"),
		 dir = $(this).attr("dir") ;
		 
		 console.log(flashurl)
		 
		if(index == 0) {
		
		
			$("#i2").removeClass("disabled").prop("readonly", false);
			$("#i2").val("");
		//	$("#rod").val("");
		//	$("#dir").val("left");
			//$("#scrollamount").val("9");
		
			
		} else {
		
		  $("#autoSize").prop("checked", true);
			$("#i2").val(flashurl).addClass("disabled").prop("readonly", true);
		//	$("#rod").val(rod);
		//	$("#dir").val(dir);
		//	$('#dir').val("40");//选中的值

		//	$("#dir option[value='down']").attr("selected", true);
			
			// $("#dir").attr("value",'down');
		}
	});
	
	
});
</script>



