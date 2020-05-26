<?
$data=$_POST;
?>


<form id="tForm" form-data="zndh" method="post" >
<div id="tabs" class="zmhtml">
	<ul >
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
	</ul>
        <div style=" height:10px;"></div>
	<div id="tabs-1">

		<ul class="setform">
			<li style="display:none;">
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
				<input id="qhtime" class="setinput" type="hidden" title="" name="imgwidth" value="3000" />
			</li>
			<li  >
				<label for="i5">图片地址：</label>
				<input id="i5" class="setinput" type="text" title="请输入淘宝图片空间里的图片地址" name="pSrc" value="<?=$data['pSrc']?>" />
			</li>
	        <li >
				<label for="qhtime">变化间隔：</label>
				 <input id="qhtime" class="setinput" type="text" title="输入0.1-100时间" name="qhtime" value="<?=$data['qhtime']?>" />秒
			
			<li>
				<label for="ii1">每帧宽度：</label>
				<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$data['width']?>" />
			</li>
			<li class="dhfs">
				<label for="zidingyi">动画方式：</label>
				<select id="zidingyi" name="zidingyi" >
					<option value="0" <? if($data['zidingyi']=='0'){echo'selected="selected"';} ?> >从左到右</option>
					<option value="1" <? if($data['zidingyi']=='1'){echo'selected="selected"';} ?> >自定义</option>
				</select>
			</li>
			<li class="zidingyi" >
				<label for="widths">自定义偏移值：</label>
				<textarea id="widths" name="widths" style="height:75px;"><?=$data['widths']?></textarea>
			</li>
			<li class="zidingyi" style="text-align:center;">每帧从图片图像的起始位置，多帧用@ 如200@300@500</li>
			<li style=" height:auto">
				<label>预置动画：</label>
				<div id="flashdsSet" style="margin-left:110px;">
				<span class="flashds-span flashds-active" data-flashurl="">无</span>
                <span class="flashds-span" imgwidth="3000" widths="2000@1800@1600@2200@2800@2600@2400@1400@400@200@0@600@1200@1000@1000@800" time="0.12" z="1" w="200"  data-flashurl="https://img.alicdn.com/imgextra/i1/2862415049/TB2.IbDaBLzQeBjSZFCXXXmtXXa-2862415049.png" >默认动画</span>				
				<span class="flashds-span" imgwidth="7020" widths="4680@4500@5040@4860@4320@3780@3600@4140@3960@5220@6480@6300@6840@6660@6120@5580@5400@5940@5760@3420@1080@900@1440@1260@720@180@0@540@360@1620@2880@2700@3240@3060@2520@1980@1800@2340@2160" time="0.04" z="1" w="180" data-flashurl="https://img.alicdn.com/imgextra/i4/2862415049/TB20f7aap95V1Bjy0FfXXXvlFXa-2862415049.png">尾巴</span>
			    <span class="flashds-span" imgwidth="3300" widths="2200@1980@1760@2420@3080@2640@1540@440@220@0@660@1320@1100@880@1100@1320@660@0@220@440@1540@2640@2860@3080@2420@1760@1980" time="0.14" z="1" w="220" data-flashurl="https://img.alicdn.com/imgextra/i1/2862415049/TB28gwbap95V1Bjy0FhXXb5wXXa-2862415049.png">晃动折线</span>
				<br />
				<span class="flashds-span" imgwidth="6000" widths="3800@4000@4200@3600@3000@3200@3400@4400@5400@5600@5800@5200@4600@4800@5000@800@1000@1200@600@200@200@400@1400@2400@2600@2800@2200@1600@1800@2000@3800@4000@4200@3600@3000@3200@3400@4400@5400@5600@5800@5200@4600@4800@5000@800@1000@1200@600@600@0@200@400@1400@2400@2600@2800@2200@1600@1800@2000" time="0.15" z="1" w="200" data-flashurl="https://img.alicdn.com/imgextra/i2/2862415049/TB2uQkbap95V1Bjy0FgXXc2vFXa-2862415049.png">转动地球</span>				
	 			<span class="flashds-span" imgwidth="5700" widths="3610@3800@3990@3420@2850@3040@3230@4180@5130@5320@5510@4940@4370@4560@4750@760@950@1140@570@190@380@1330@2280@2470@2660@2090@1520@1710@1900@1710@1520@2090@2660@2470@2280@1330@380@190@570@1140@950@760@4750@4560@4370@4940@5510@5320@5130@4180@3230@3040@2850@3420@3990" time="0.12" z="1" w="190" data-flashurl="https://img.alicdn.com/imgextra/i3/2862415049/TB2Clsfap55V1Bjy0FnXXc5XFXa-2862415049.png">转动球</span>							
				<span class="flashds-span" imgwidth="3090" widths="2060@1854@1648@2266@2884@2678@2472@1442@412@206@0@618@1236@1030@824@1030@1236@618@0@206@412@1442@2472@2678@2884@2266@1648@1854@2060" time="0.14" z="1" w="206" data-flashurl="https://img.alicdn.com/imgextra/i4/2862415049/TB2E8wfap55V1Bjy0FnXXc5XFXa-2862415049.png">w晃动</span>			
				<span class="flashds-span" imgwidth="4140" widths="2070@2760@3450@690@1380" time="0.22" z="1" w="690" data-flashurl="https://img.alicdn.com/imgextra/i2/2862415049/TB2.R3kap55V1Bjy0FoXXbVjFXa-2862415049.png">霓虹灯</span>					
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
				<label for="ii2">图片高度：</label>
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
	
	

	$(".zidingyi").hide();
	
	"1" == "1" &&($(".zidingyi").show());
	
	
		$("#zidingyi").selectmenu({
		change: function() {
			var val = $(this).val();
			
			
			if(val == "0") {
				$(".zidingyi").hide();
			} 
			else
			{
				
				
				$(".zidingyi").show();
			}
		}
	});
	
	
	
	
	
	$("#flashdsSet").on("click", "span", function() {
	
	
		$("#flashdsSet").children(".flashds-active").removeClass("flashds-active");
		
		
		$(this).addClass("flashds-active");
		
		var index = $(this).index(),
		 flashurl = $(this).attr("data-flashurl"),
		 imgwidth = $(this).attr("imgwidth"),
		 widths = $(this).attr("widths"),
		 ztime = $(this).attr("time"),
		 zidingyi = $(this).attr("z"),
		 w =  $(this).attr("w");
		 
		 
		if(index == 0) {
		
		
			$("#i5").removeClass("disabled").prop("readonly", false);
			$("#i5").val("");
			
			$("#ii1").removeClass("disabled").prop("readonly", false);
			
			$("#widths").removeClass("disabled").prop("readonly", false);
			
			//$("#zidingyi").prop("disabled", true);
			$(".dhfs").show();
			
			$(".zidingyi").hide();
			$("#widths").val("");
			
		} else {
		
		
			$("#i5").val(flashurl).addClass("disabled").prop("readonly", true);
			$("#widths").val(widths);
			$("#qhtime").val(ztime);
			$(".zidingyi").show();
			$("#zidingyi").val(zidingyi);
			$("#imgwidth").val(imgwidth);
			$("#ii1").val(w);
			
			$("#ii1").addClass("disabled").prop("readonly", true);
			
			$("#widths").addClass("disabled").prop("readonly", true);
			//$("#zidingyi").prop("disabled", false);
			
			$(".dhfs").hide();

			
		}
	});

	
	
});
</script>



