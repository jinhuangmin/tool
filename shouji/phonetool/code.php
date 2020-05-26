<?
$code=$_POST['code'];
// $code=str_replace('\n','&#xd;',$code);

error_reporting(0);
$code =json_decode( $code,true);
$d=count($code[d]);
$u=count($code[u]);
$rand=mt_rand(100, 999);
$code1='{"main":[{"editProperty":{"hasRefer":false,"moduleType":"userDefine","timeStamp":1509160613,"type":1,"moduleid":'.$rand.'},"styleBinding":{"marginBottom":"0","height":"'.$code[p][1].'","borderColor":"none","backgroundColor":"#fff","borderWidth":0,"width":-1,"layout":"absoluteLayout","paddingLeft":0,"paddingRight":0},"type":"container","subViews":[{"editProperty":{"hasRefer":false,"moduleType":"userDefineItem","type":1,"moduleid":'.$rand.'0},"events":[{"actions":[{"param":{"utParams":{"wp_m":"userDefineItem_35","wp_pk":"$wp_pk","wp_app":"weapp"},"utType":"Button","utName":"userDefineItem"},"type":"userTrack"},{"param":{"param":{"wp_m":"userDefineItem_35","wp_pk":"$wp_pk","wp_app":"weapp","from":"inshop"},"url":"$p'.$rand.'0clickUrl"},"type":"openURL"}],"type":"click"}],"styleBinding":{"height":"'.$code[p][1].'","marginLeft":"0","marginTop":"0","width":"640","layout":"absoluteLayout","marginBottom":18},"subViews":[{"dataBinding":{"url":"$p'.$rand.'0imageUrl"},"styleBinding":{"height":"'.$code[p][1].'","width":"640"},"type":"image"}],"type":"container"}';
$code2='';
for($i=1;$i<=$d;$i++){
$code2.=',{"editProperty":{"hasRefer":false,"moduleType":"userDefineItem","type":1,"moduleid":'.$rand.''.$i.'},"events":[{"actions":[{"param":{"utParams":{"wp_m":"userDefineItem_35","wp_pk":"$wp_pk","wp_app":"weapp"},"utType":"Button","utName":"userDefineItem"},"type":"userTrack"},{"param":{"param":{"wp_m":"userDefineItem_35","wp_pk":"$wp_pk","wp_app":"weapp","from":"inshop"},"url":"$p'.$rand.''.$i.'clickUrl"},"type":"openURL"}],"type":"click"}],"styleBinding":{"height":"'.$code[d][$i-1][1].'","marginLeft":"'.$code[d][$i-1][2].'","marginTop":"'.$code[d][$i-1][3].'","width":"'.$code[d][$i-1][0].'","layout":"absoluteLayout","marginBottom":18},"subViews":[{"dataBinding":{"url":"$p'.$rand.''.$i.'imageUrl"},"styleBinding":{"height":"'.$code[d][$i-1][1].'","width":"'.$code[d][$i-1][0].'"},"type":"image"}],"type":"container"}';
}
$code3=']}],"url":{"p'.$rand.'0imageUrl":"'.$code[p][0].'","p'.$rand.'0clickUrl":""';
$code4='';
for($i=1;$i<=$u;$i++){
$code4.=urlencode(',"p'.$rand.''.$i.'imageUrl":"https://assets.alicdn.com/s.gif","p'.$rand.''.$i.'clickUrl":"').$code[u][$i-1].urlencode('"');
}
$code=urlencode($code1.$code2.$code3).$code4.urlencode('}}');
?>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">代码</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="padding-left:10px;margin-left: -10px;border-radius:2px;color: #666;background:#efefff;line-height: 25px;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;">本工具生成的代码，只能使用在无线端模板的自定义热区模块中，使用过程中有任何疑问，请联系我们的客服。<a class="june-preview" href="https://zxn.taobao.com/designer_detail.htm?=&designerId=1016893&productType=0&site=1003&spm=a215h.77" target="_blank" style="color: #069;">点击查看所有手机的模板</a></li>
			<li>
				<textarea id="codeText" name="code" style="float:left;width:460px;height:250px; font-family: 宋体;"><?=htmlspecialchars_decode($code)?></textarea>
			</li>
		</ul>
	</div>
    

</div>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$("textarea").buttonset();
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
