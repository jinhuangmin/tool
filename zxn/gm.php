<?
if(isset($_POST['url'])){
$text=file_get_contents($_POST['url']); 
//$text = iconv("gb2312","utf-8//IGNORE",$text);
$xx1=explode("shopId=",$text);
if(count($xx1)>1){
	$xx2=explode(";",$xx1[1]);
	echo $xx2[0];
}
	
	
}
?>