<?
$data=$_POST;
$cats=$data['catsPost'];
?>
<div class="J_DialogBody">
	<p class="nav-head desc">请选择要添加的分类<span id="treeCheckall" style="float:right;cursor:pointer;color:#007FF4;">一键全选</span></p>
	<div id="tree-content" data-catsConfig="">
    
    <ul class="cat-list J_catList">
    
    <?
   $ls=rand(1000,9999);
    foreach($cats as $cat){
		echo'<li class="cat fst-cat"><i class="cat-icon collapse"></i><input data-id="'.$cat['id'].'" id="subcats_'.$cat['id'].'_'.$ls.'" data-name="'.$cat['name'].'" class="J_TFstCat" type="checkbox"><label for="subcats_'.$cat['id'].'_'.$ls.'">'.$cat['name'].'</label>';
		 echo'<ul class="fst-cat-bd">'; 
		if($cat['subCats']){
	foreach($cat['subCats'] as $sub){ echo'<li class="cat snd-cat"><input data-id="'.$sub['id'].'" id="subcats_'.$sub['id'].'_'.$ls.'" data-sname="'.$sub['name'].'" class="J_TSndCat" type="checkbox"><label for="subcats_'.$sub['id'].'_'.$ls.'">'.$sub['name'].'</label></li>'; } 
	}
	echo'</ul>'; 
	echo'</li>';
		
		}

	?>
    
    </div>
</div>
<script type="text/javascript">
$(function() {
	$("#tree-content").on("click.forinput", "input", function() {
		var _t = $(this), status = _t.prop("checked");
		if(_t.hasClass("J_TFstCat")) {
			//_t.prop("checked", !status);
			!status && _t.siblings("ul").find("input").prop("checked", false);
		}
		if(_t.hasClass("J_TSndCat")) {
			//_t.prop("checked", !status);
			!!status && _t.parent().parent().siblings("input").prop("checked", true);
		}
	}).on("click.fori", "i", function() {
		var _t = $(this);
		if(_t.hasClass("collapse")) {
			_t.removeClass("collapse");
			_t.siblings("ul").hide();
		} else {
			_t.addClass("collapse");
			_t.siblings("ul").show();
		}
	});
	$("#treeCheckall").on("click", function() {
		$("#tree-content").find("input").prop("checked", true);
	});
});
</script>