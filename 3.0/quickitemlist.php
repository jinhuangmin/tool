
<?
for($i=0;$i<$_POST['itemCount'];$i++){
	
echo'<div class="qmitembox">
	<div class="qmleft">
		<div class="qmpicpreview"><img src="https://img.alicdn.com/imgextra/i3/39767794/TB2DJRIqXXXXXXKXXXXXXXXXXXX-39767794.jpg" style="height:100%;"></div>
		<div class="qmpicselect">抓取宝贝主图 <icon style="font-size:17px;">꒗</icon></div>
	</div>
	<div class="qmright">
		<ul class="setform">
			<li>
				<label for="qmlink'.$i.'">宝贝链接：</label>
				<input id="qmlink'.$i.'" class="setinput qmeleval" type="text" junezx_vali_url="true" name="iqs_href" value="" />
				<icon title="更新抓取该宝贝信息" class="lj-sync-icon">ꘀ</icon>
			</li>
			<li>
				<label for="qmpic'.$i.'">宝贝主图：</label>
				<input id="qmpic'.$i.'" class="setinput tItisImg qmeleval" title="" type="text" junezx_vali_pic="true" name="iqs_pSrc" value="" />
			</li>
			<li style="height:auto;">
				<label for="qmtitle'.$i.'">宝贝标题：</label>
				<textarea style="height:50px;width:208px;" class="update qmeleval" id="qmtitle'.$i.'" type="text" name="iqs_titleInfo" value=""></textarea>
				<icon title="始终自动更新该宝贝标题" class="bt-sync-icon qmcheckicon" style="float:right;margin-right:13px;">ꘂ</icon>
			</li>
			<li>
				<label for="qmdiscountprice'.$i.'">现价：</label>
				<input id="qmdiscountprice'.$i.'" style="width:55px;" class="update setinput qmeleval" type="text" junezx_vali_str="true" name="iqs__priceInfo" value="" />
				<icon title="始终自动更新该宝贝现价" class="xj-sync-icon qmcheckicon">ꘂ</icon>
				<label for="qmprice'.$i.'" style="width:49px;">原价：</label>
				<input id="qmprice'.$i.'" style="width:55px;" class="update setinput qmeleval" type="text" junezx_vali_str="true" name="iqs_priceInfo" value="" />
				<icon title="始终自动更新该宝贝原价" class="yj-sync-icon qmcheckicon">ꘂ</icon>
			</li>
		</ul>
	</div>
</div>';
	
	}
?>
