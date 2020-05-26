<?
$data=$_POST;
?>

<form id="tForm" form-data="zbaid" method="post" >
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
			<li class="" style="height:auto">
				<label for="moshi">摆动模式：</label>
				<select id="moshi" name="moshi">
			        <option value="marquee" selected="selected">marquee摆动</option>
					<option value="jsbd" >js摆动</option>
				</select>
			</li>
			<li>
				<label for="i2">图片地址：</label>
				<input id="i2" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
				<input id="autoSize" class="chkBox" type="checkbox" name="autoSize" value="yes"  <? if($data['autoSize']=='yes'){echo'checked="checked"';} ?> />
				<label for="autoSize" class="chkLabel">自动高宽</label>
			</li>
            
            	<li class="ptlink gwlink linkMode">
				<label id="gwlabel1" for="i2">链接地址：</label>
				<input id="i2" class="setinput" type="text" title="请输入链接地址，如：某个宝贝的页面地址。" name="href" value="<?=$data['href']?>" />
			</li>
			<li class="ptlink linkMode">
				<label for="hrefMode">打开方式：</label>
				<select id="hrefMode" name="hrefMode">
						<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?> >原窗口打开</option>
					   <option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?> >新窗口打开</option>
				</select>
			</li>
			<li>
				<label for="fudu">摆动幅度：</label>
				<input id="fudu" class="setinput " type="text" title="输入数字" name="fudu" value="<?=$data['fudu']?>" />
			</li>
			<li class=" marquee">
				<label for="scrollamount">摆动速度：</label>
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
				</select>
			</li>
			<li class="marquee">
				<label for="dir">摆动方向：</label>
				<select id="dir" name="dir">
						<option value="left" <? if($data['dir']=='left'){echo'selected="selected"';} ?> >左右摆动</option>
					    <option value="up" <? if($data['dir']=='up'){echo'selected="selected"';} ?> >上下摆动</option>
				</select>
			</li>
			<li class="jsbd">
				<label for="bddir">摆动方向：</label>
				<select id="bddir" name="bddir">
						<option value="scrollx" <? if($data['bddir']=='scrollx'){echo'selected="selected"';} ?> >左右摆动</option>
					    <option value="scrolly" <? if($data['bddir']=='scrolly'){echo'selected="selected"';} ?> >上下摆动</option>
				</select>
			</li>
		  	<li class="speed jsbd">
				<label for="speed">摆动速度：</label>
				<select id="speed" name="speed">
				<option value="0.1" <? if($data['speed']=='0.1'){echo'selected="selected"';} ?> >0.1s很快</option>
				<option value="0.2" <? if($data['speed']=='0.2'){echo'selected="selected"';} ?> >0.2s↓</option>
				<option value="0.3" <? if($data['speed']=='0.3'){echo'selected="selected"';} ?> >0.3s↓</option>
				<option value="0.4" <? if($data['speed']=='0.4'){echo'selected="selected"';} ?> >0.4s↓</option>
				<option value="0.5" <? if($data['speed']=='0.5'){echo'selected="selected"';} ?> >0.5s↓</option>
				<option value="0.6" <? if($data['speed']=='0.6'){echo'selected="selected"';} ?> >0.6s↓</option>
				<option value="0.7" <? if($data['speed']=='0.7'){echo'selected="selected"';} ?> >0.7s↓</option>
				<option value="0.8" <? if($data['speed']=='0.8'){echo'selected="selected"';} ?>>0.8s适中</option>
				<option value="0.9" <? if($data['speed']=='0.9'){echo'selected="selected"';} ?> >0.9s↓</option>
				<option value="1" <? if($data['speed']=='1'){echo'selected="selected"';} ?> >1s慢</option>
				<option value="1.1" <? if($data['speed']=='1.1'){echo'selected="selected"';} ?> >1.1s慢</option>
				<option value="1.3" <? if($data['speed']=='1.3'){echo'selected="selected"';} ?> >1.3s</option>
				<option value="1.6" <? if($data['speed']=='1.6'){echo'selected="selected"';} ?> >1.6s</option>
				<option value="1.8" <? if($data['speed']=='1.8'){echo'selected="selected"';} ?> >1.8s</option>
				<option value="2" <? if($data['speed']=='2'){echo'selected="selected"';} ?> >2s</option>
				<option value="1.3" <? if($data['speed']=='1.3'){echo'selected="selected"';} ?> >2.3s</option>
				<option value="1.6" <? if($data['speed']=='1.6'){echo'selected="selected"';} ?> >2.6s</option>
				<option value="1.8" <? if($data['speed']=='0.8'){echo'selected="selected"';} ?> >2.8s</option>
				<option value="3" <? if($data['speed']=='3'){echo'selected="selected"';} ?> >3s较慢</option>
				<option value="4" <? if($data['speed']=='4'){echo'selected="selected"';} ?> >4s</option>
				<option value="5" <? if($data['speed']=='5'){echo'selected="selected"';} ?> >5s</option>
				<option value="6" <? if($data['speed']=='6'){echo'selected="selected"';} ?> >6s</option>
				<option value="7" <? if($data['speed']=='7'){echo'selected="selected"';} ?> >7s</option>
				<option value="8" <? if($data['speed']=='8'){echo'selected="selected"';} ?> >8s</option>
				<option value="9" <? if($data['speed']=='9'){echo'selected="selected"';} ?> >9s</option>
				<option value="10" <? if($data['speed']=='10'){echo'selected="selected"';} ?> >10s</option>
				<option value="11" <? if($data['speed']=='11'){echo'selected="selected"';} ?> >11s</option>
				<option value="12" <? if($data['speed']=='12'){echo'selected="selected"';} ?> >12s</option>
				<option value="13" <? if($data['speed']=='13'){echo'selected="selected"';} ?> >13s</option>
				<option value="14" <? if($data['speed']=='14'){echo'selected="selected"';} ?> >14s</option>
				</select>
			</li>
			<li>
				<div style="line-height:30px;padding:20px">
				【marquee】优点：加载快，鼠标选中依然摆动，极少数浏览器不支持此属性。<br />
				【js摆动】优点：兼容好，稳定。缺点：鼠标选中停止摆动，页面加载完成js后摆动。<br />	
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
	

   $(".marquee").hide();
   $(".jsbd").hide();
  "marquee"=="marquee" && $(".marquee").show();
  "marquee"=="jsbd" && $(".jsbd").show();
	
	
	$("#moshi").selectmenu({
		change: function() {
			var val = $(this).val();
			if(val == "marquee") {
				 $(".marquee").show();
				  $(".jsbd").hide();
			} 
			else
			{
			$(".marquee").hide();
			 $(".jsbd").show();
			
			}
		}
	});
	
	
	
	
	
});
</script>



