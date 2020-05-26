<form id="tForm" form-data="shopCategory" method="post" >
<div id="tabs-1">
	<ul class="setform">
		<li style="">
			<label for="shopCategoryHref">店内宝贝(或店铺)地址：</label>
			<input id="shopCategoryHref" class="setinput" type="text" title="" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
		</li>
		<li><span style="display:none;">已绑定店铺,无需填写店铺地址</span></li>
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
	var checkAppCategory = "no";
	if(checkAppCategory == "yes") {
		$("#dialogForm").next().find("button:eq(0)").trigger("click");
	}
});
</script>