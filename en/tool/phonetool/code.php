<?
$code=$_POST['code'];
$code=str_replace('\n','&#xd;',$code);
error_reporting(0);
$code =json_decode( $code,true);
$d=count($code[d]);
$u=count($code[u]);
$rand=mt_rand(100, 999);
$code1='[';
$code2='';
$bg=$code[p][0]?'"background":"url('.$code[p][0].') no-repeat top center",':'';
for($i=1;$i<=$d;$i++){
	$url=$code[u][$i-1]?',"href": "'.$code[u][$i-1].'"':'';
	$code2.='{"o":'.($i+1).',"t": "A","a": {"data-t": "area","style": {"width": "'.$code[d][$i-1][0].'px","height": "'.$code[d][$i-1][1].'px","left": "'.$code[d][$i-1][2].'px","top": "'.$code[d][$i-1][3].'px","position": "absolute"},"target":"_blank"'.$url.'}},';
}
$num=array();
for($i=1;$i<=$d;$i++){
	$num[$i-1]=$i+1;
}
$string=implode(',',$num); 
$code3='{"o":1,"t":"DIV","a":{"className":"wm","data-m":"diyModule","style":{"width":"'.$code[p][2].'px","height":"'.$code[p][1].'px",'.$bg.'"position":"relative","margin":"0 auto","overflow":"hidden"}},"x":null,"s":['.$string.']},null]';
$j_code=$code1.$code2.$code3;

$code=$_POST['code'];
$code=str_replace('\n','&#xd;',$code);

error_reporting(0);
$code =json_decode( $code,true);
$d=count($code[d]);
$u=count($code[u]);
$rand=mt_rand(100, 999);
$code1='{"main":[{"editProperty":{"moduleid":'.$rand.'},"styleBinding":{"height":"'.($code[p][1]+20).'","width":"'.$code[p][2].'"},"type":"container","subViews":[{"editProperty":{"moduleid":'.$rand.'0},"styleBinding":{"height":"'.$code[p][1].'"},"subViews":[{"dataBinding":{"url":"$p'.$rand.'0imageUrl"},"styleBinding":{"height":"'.$code[p][1].'","width":"'.$code[p][1].'"},"type":"image"}],"type":"container"}';
$code2='';
for($i=1;$i<=$d;$i++){
$code2.=',{"editProperty":{"moduleid":'.$rand.''.$i.'},"styleBinding":{"height":"'.$code[d][$i-1][1].'","marginLeft":"'.$code[d][$i-1][2].'","marginTop":"'.$code[d][$i-1][3].'","width":"'.$code[d][$i-1][0].'","layout":"absoluteLayout","marginBottom":18},"subViews":[{"styleBinding":{"height":"'.$code[d][$i-1][1].'","width":"'.$code[d][$i-1][0].'"},"type":"image"}],"type":"container"}';
}
$code3=']}],"url":{"p'.$rand.'0imageUrl":"'.$code[p][0].'","p'.$rand.'0clickUrl":""';
$code4='';
for($i=1;$i<=$u;$i++){
$code4.=urlencode(',"p'.$rand.''.$i.'clickUrl":"').$code[u][$i-1].urlencode('"');
}
$code=urldecode(urlencode($code1.$code2.$code3).$code4.urlencode('},"wm":'.$j_code.'}'));
?>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">代码</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="padding:10px;margin-left: -10px;border-radius:2px;color: #666;background:#efefff;line-height: 25px;box-shadow:2px 2px 5px rgba(0, 64, 192, 0.75);border:1px solid #c2ced6;">本工具生成的代码，只能使用在PC端模板的DIY模块中，使用过程中有任何疑问，请联系我们的客服。<a class="june-preview" href="https://zhuangxiu.alibaba.com/list.html?market=icbuzx&_input_charset=GBK&key=%E6%B2%83%E5%A7%86" target="_blank" style="color: #069;">查看所有模板</a></li>
			<li>
				<textarea id="codeText" name="code" style="float:left;width:460px;height:300px; font-family: 宋体;"><?=htmlspecialchars_decode($code)?></textarea>
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
