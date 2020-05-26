<?
$data=$_POST;
$items=$data['item'];
$callback='jQuery191034293582546524704_1442988010284';
$ewmSize=$data['ewmSize'];
$id='';$ids='';
if(!empty($items)){
foreach($items as $k=>$item){
	$tm='detail.tmall.com';
	$tb='item.taobao.com';
	$linkt=0;
	if(stripos($item, $tm) >0){$type='tmall'; $linkt=1;}
	if(stripos($item, $tb) >0){$type='taobao';$linkt=1;}
$dh=$k==0?'':',';
if($linkt==1){
$idx1=explode("id=",$item);$idx2=explode("&",$idx1[1]);$id=$idx2[0];
}else{
$id='';		
}
$ids=''.$ids.''.$dh.''.$id.'';
	}
}
require_once "../config.php";
$poguo=file_get_contents('http://guop.cn/s.php?url='.$_SERVER['SERVER_NAME'].'&items='.$ids.'&callback='.$callback.'&ewmSize='.$ewmSize.'');

echo $poguo;

?>