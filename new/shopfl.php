<?
$data=$_POST;
 $href=isset($post['href'])?$post['href']:'';
?>
<form id="tForm" form-data="shopCategory" method="post" >
<div id="tabs-1">
	<ul class="setform"><li class="setshousuo" style="color:#F80004">只点一下！点完请多等一会，没刷出来不要反复点，解析页面慢</li><ul>
    <ul class="setform">
		<li>
			<label for="shopCategoryHref">店铺地址：</label>
			<input id="shopCategoryHref" class="setinput" type="text" title="" name="href" value="<?=$href?>" />
		</li>
	</ul>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
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
});
</script>