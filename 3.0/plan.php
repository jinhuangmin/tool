<?
$childConfig=$_POST['childConfig'];
?>
<form id="tForm" form-data="jrwb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
	<?  foreach($childConfig as $i=>$item){ $k=$i+2;$f=$i+1; if($i==0){echo'<li><a href="#tabs-1">任务1设置</a></li>';}else{echo'<li class="hasdelete"><a href="#tabs-'.$f.'">任务'.$f.'设置</a><span class="deletetab" data-tabs="tabs-'.$f.'"><icon>ꕡ</icon></span></li>'; }  }  ?>
				<li id="addNewPlan" class="ui-state-default ui-corner-top addnewtab" title="添加计划"><icon>ꕙ</icon></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
						<div id="tabs-1">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig[0]['attachID']?>" />
										<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="child0startTime">任务1开始时间：</label>
						<input class="setinput disabled" type="text" title="计划任务开始的时间" junezx_vali_none="true" value="当前时间" readonly="readonly" />
						<input id="child0startTime" class="setinput" type="hidden" title="计划任务开始的时间" junezx_vali_none="true" name="childConfig[0].startTime" value="<?=$childConfig[0]['startTime']?$childConfig[0]['startTime']:'2000-01-01 00:00:00'?>" />
					</li>
										<li>
						<label for="child0endTime">任务1结束时间：</label>
						<input id="child0endTime" class="setinput planEndTime" type="text" placeholder="永不结束" title="计划任务结束的时间，留空则永不结束。" junezx_vali_date="true" junezx_vali_dateMax="child0startTime" name="childConfig[0].endTime" value="<?=$childConfig[0]['endTime']?>" />
					</li>
					<li>
						<label for="child0customContent">任务1内容：</label>
						<textarea id="child0customContent" name="childConfig[0].customContent"><?=stripslashes($childConfig[0]['customContent'])?></textarea>
						<label class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[0].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$childConfig[0]['attachID']?>" data-zdyOtherName="customContent">可视化编辑</label>
					</li>
				</ul>
			</div>
						
		<? if(count($childConfig)>1){ for($i=1;$i<count($childConfig);$i++){ $k=$i+1;	?>		
						<div id="tabs-<?=$k?>">
				<ul class="setform">
					<input id="child1h1" class="setinput" type="hidden" title="" name="childConfig[<?=$i?>].attachID" value="<?=$childConfig[$i]['attachID']?>" />
										<li>
						<label for="child1startTime">任务<?=$k?>开始时间：</label>
						<input id="child1startTime" class="setinput disabled" type="text" title="计划任务开始的时间" junezx_vali_none="true"  name="childConfig[<?=$i?>].startTime" value="<?=$childConfig[$i]['startTime']?$childConfig[0]['startTime']:'2000-01-01 00:00:00'?>" readonly="readonly" />
					</li>
										<li>
						<label for="child1endTime">任务<?=$k?>结束时间：</label>
						<input id="child1endTime" class="setinput planEndTime" type="text" placeholder="永不结束" title="计划任务结束的时间，留空则永不结束。" junezx_vali_date="true" junezx_vali_dateMax="child1startTime" name="childConfig[<?=$i?>].endTime" value="<?=$childConfig[$i]['endTime']?>" />
					</li>
					<li>
						<label for="child1customContent">任务<?=$k?>内容：</label>
						<textarea id="child1customContent" name="childConfig[<?=$i?>].customContent"><?=stripslashes($childConfig[$i]['customContent'])?></textarea>
						<label class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig[<?=$i?>].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="<?=$childConfig[$i]['attachID']?>" data-zdyOtherName="customContent">可视化编辑</label>
					</li>
				</ul>
			</div>
	<? }   } ?>
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
	var tabs = $("#tabs"), npc = (<?=count($childConfig)?> - 1), ntc = npc;
	$("#addNewPlan").off("click.addtab").on("click.addtab", function() {
		var newContent = "", newAttachID = setAttachIDForPhp(), lastEndTime = $(".planEndTime:last").val();
		if(lastEndTime == "") {
			messageForPhp("请先设置当前任务结束时间后再创建新的任务!");
			return;
		}
		npc++;ntc++;
		newContent = '<div id="tabs-'+(npc+1)+'">'+
			'<ul class="setform">'+
				'<input id="child'+npc+'h1" class="setinput" type="hidden" title="" name="childConfig['+npc+'].attachID" value="'+newAttachID+'" />'+
				'<li>'+
					'<label for="child'+npc+'startTime">任务'+(ntc+1)+'开始时间：</label>'+
					'<input id="child'+npc+'startTime" class="setinput disabled" type="text" title="计划任务开始的时间" name="childConfig['+npc+'].startTime" junezx_vali_none="true" value="'+lastEndTime+'" readonly="readonly" />'+
				'</li>'+
				'<li>'+
					'<label for="child'+npc+'endTime">任务'+(ntc+1)+'结束时间：</label>'+
					'<input id="child'+npc+'endTime" class="setinput planEndTime" type="text" placeholder="永不结束" title="计划任务结束的时间，留空则永不结束。" junezx_vali_date="true" junezx_vali_dateMax="child'+npc+'startTime" name="childConfig['+npc+'].endTime" value="" />'+
				'</li>'+
				'<li>'+
					'<label for="child'+npc+'customContent">任务'+(ntc+1)+'内容：</label>'+
					'<textarea id="child'+npc+'customContent" name="childConfig['+npc+'].customContent"></textarea>'+
					'<label class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="childConfig['+npc+'].customContent" data-zdyAppID="<?=$_POST['appID']?>" data-zdyAttachID="'+newAttachID+'" data-zdyOtherName="customContent">可视化编辑</label>'+
				'</li>'+
			'</ul>'+
		'</div>';
		tabs.tabs( "destroy" );
		$("#addNewPlan").before('<li class="hasdelete"><a href="#tabs-'+(npc+1)+'">计划'+(ntc+1)+'设置</a><span class="deletetab" data-tabs="tabs-'+(npc+1)+'"><icon>ꕡ</icon></span></li>')
		tabs.find(".form-tabs-content").append(newContent);
		tabs.tabs({active: ntc});
	});
	tabs.off("focus.loadTimePicker").on("focus.loadTimePicker", ".planEndTime", function() {
		var _t = $(this), val = _t.val(), id = _t.attr("id"), idIndex = id.replace(/[a-zA-Z]/g, "") * 1, startid = 'child'+idIndex+'startTime';
		if(_t.attr("data-loadTime") != "yes") {
			_t.juneDatePicker({_min: $("#"+startid), max: "2099-12-31 23:59:59"});
			_t.attr("data-loadTime", "yes");
		}
	}).off("change.syncTime").on("change.syncTime", ".planEndTime", function() {
		var _t = $(this), val = _t.val(), id = _t.attr("id"), idIndex = id.replace(/[a-zA-Z]/g, "") * 1, newid = 'child'+(idIndex + 1)+'startTime';
		$("#"+newid).length > 0 && $("#"+newid).val(val);
	});
	tabs.off("click.deltab").on("click.deltab", ".deletetab", function(event) {
		var tabsid = $(this).attr("data-tabs");
		if($("#"+tabsid).next().length > 0 ) {messageForPhp("删除计划时请从最后一个开始!");return;}
		D.tConfirm("确定要删除该计划？", function() {
			tabs.tabs( "destroy" );
			$("#"+tabsid).remove();
			ntc--;
			tabs.children("ul").children("li").children("a[href='#"+tabsid+"']").parent().remove();
			tabs.children("ul").children("li").each(function(i,e) {
				var len =tabs.children("ul").children("li").length;
				if(i >= 1 && i < len - 2) {
					$(this).children("a").html("计划"+(i)+"设置");
				}
			});
			tabs.tabs({active: ntc});
		},function(){
			D.tLoading(false);
		});
	});
});
</script>