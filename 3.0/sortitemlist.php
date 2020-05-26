<div class="sortlistview">
	<span class="active" id="sortgrid" style="margin-left:10px;">保持排版</span> 
	<span id="sortlist">多格排列</span>
</div>
<ul id="sortitemlist">
	<?
	$pSrc=explode(",",$_POST['pSrc']);
	$titleInfo=explode(",",$_POST['titleInfo']);
    for($i=0;$i<$_POST['itemCount'];$i++){$k=$i+1;
		echo'<li class="sortele" title="拖动图片可改变顺序" style="width:163px;height:203px;">
		<img src="'.$pSrc[$i].'" style="display:block;width:163px;height:163px;">
		<div class="sortlisttitle" style="padding:5px;height:30px;line-height:30px;overflow:hidden;background:#fff;color:#999;"><strong class="listsortnum" style="color:#333;margin-right:2px;">'.$k.'</strong>'.$titleInfo[$i].'</div>
	</li>';
		
		}
	
	?>	

	</ul>
<input type="hidden" id="slistid"/>

<script>
$(function() {
	var sortarr = new Array();
	$("#sortitemlist").sortable({
		start: function(){
			sortarr=[];
		},
		stop: function(e,ui){
			$(".listsortnum").each(function(){
				sortarr.push($(this).html());
			});
			$("#slistid").val(sortarr);
		}
	});
	$("#sortitemlist").disableSelection();
	$("#sortgrid").click(function(){
		$(".sortele").css({
			width:163,
			height:203,
		});
		$(".sortele img").css({
			width:163,
			height:163,
		});
		$(".sortele .sortlisttitle").css({
			height:30,
			lineHeight:"30px",
			padding:5
		});
		$(".sortlistview span").removeClass("active");
		$(this).addClass("active");
	});
	$("#sortlist").click(function(){
		$(".sortele").css({
			width:74,
			height:98,
		});
		$(".sortele img").css({
			width:74,
			height:74,
		});
		$(".sortele .sortlisttitle").css({
			height:20,
			lineHeight:"20px",
			padding:2
		});
		$(".sortlistview span").removeClass("active");
		$(this).addClass("active");
	});
});
</script>