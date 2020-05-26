<?
$data=$_POST;
$dbzb=substr($data['url'],0,4);
if($dbzb=='http'){$url= $data['url'];}else{$url='http://'.$data['url'].'';}

$handle = fopen($url, "rb");  //读取店铺页面
$contents = stream_get_contents($handle); 
fclose($handle); 
$strarr=explode("shopId=",$contents);
$aaa=explode(';',$strarr['1']);
echo''.$aaa['0'].'';
?>