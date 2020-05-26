<?
//php.ini ;extension=php_openssl.dll
require_once "../config.php";
$data=$_POST;
if(isset($_POST)){
$items=$data['item'];
$adc=!empty($items)?'yes':'no';
$zzz[]=	$adc;


foreach($items as $k=>$item){
    $tm='detail.tmall.com';
	$tb='item.taobao.com';
	$linkt=0;
	if(stripos($item, $tm) >0){$type='tmall'; $linkt=1;}
	if(stripos($item, $tb) >0){$type='taobao';$linkt=2;}
$picarray=array();
if($linkt>0){$idx1=explode("id=",$item);$idx2=explode("&",$idx1[1]);$id=$idx2[0];}else{$id='';	}
 $luanma=file_get_contents('http://guop.cn/giiforpx.php?id='.$id.'&ms='.$linkt.'');
 $qie1=explode('="',$luanma);
 for($i=1;$i<=5;$i++){
	if(isset($qie1[$i])){
	$qie2=explode('"',$qie1[$i]);
	$img=$qie2[0];
	$img=str_replace('_60x60q90.jpg','',$img);
	$img=str_replace('_50x50.jpg_.webp','',$img);
	$img=str_replace('_50x50.jpg','',$img);
	$picarray[]=$img;
	
		} 
	 }
$zzz[]=$picarray;
}
echo json_encode($zzz);

}
?>