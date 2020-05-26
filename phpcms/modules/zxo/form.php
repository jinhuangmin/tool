<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_func('area','zxn');
class form {
	public function __construct() {
		
	}

public function area () {
		
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST!==''){
		$arr=getarea($_POST['codeObj']);
		foreach($arr as $i=>$item){
		  $fg=$i==0?'':'${!|}';
		  $html=$html.$fg.$item;
			}
		print_r( $html);
		}

   }

public function getc () {
$data=$_POST;
$dbzb=substr($data['url'],0,4);
if($dbzb=='http'){$url= $data['url'];}else{$url='http://'.$data['url'].'';}
$handle = fopen($url, "rb"); 
$contents = stream_get_contents($handle); 
fclose($handle); 
$tihuan='J_TAllCatsTree" id="biaoji234" style="';
$jiaguo1=str_replace("J_TAllCatsTree",$tihuan,$contents);

$strarr=explode("J_TAllCatsTree",$contents);
$guolu2=explode('cats-tree">',$strarr['1']);
$guolu3=explode('fst-cat">',$guolu2['1']);
$num=count($guolu3);$num1=$num-1;$num2=$num-2;
$guolu4=explode('class="menu-list"',$guolu3[$num1]);
$zh='';
for($i=0;$i<$num1;$i++){
  $zh=''.$zh.''.$guolu3[$i].'fst-cat">';
	}
$zhxx=''.$zh.''.$guolu4['0'].'</h4></li>';
$fenlei=mb_convert_encoding($zhxx, "UTF-8", "GBK");
$str=$fenlei;
$str=preg_replace("/\s+/", " ", $str); //过滤多余回车 
$str=preg_replace("/<[ ]+/si","<",$str); //过滤<__("<"号后面带空格) 
$str=preg_replace("/<(i.*?)>(.*?)<(\/i.*?)>/si","",$str); //过滤style标签
//$str=preg_replace("/<(\/?div.*?)>/si","",$str); //过滤style标签
$str=preg_replace("/<(div.*?)>/si","",$str); //过滤title标签 
$str=preg_replace("/<(\/div.*?)>/si","",$str); //过滤title标签 
$str=preg_replace("/<(\/?h4.*?)>/si","",$str); //过滤style标签
$arr = array();
$dfs = array();
$all = array();
$xx = array();
$fgx1=explode('fst-cat"',$str);
for($k=0,$i=2;$i<count($fgx1);$i++,$k++){
	$fgx2='';
	$fgx2=explode("<ul",$fgx1[$i]);
	 $fgx3=explode("category-",$fgx2['0']);
	 $fgx4=explode(".htm",$fgx3['1']);
	 $dd['id']=$fgx4['0'];//id
	 $fgx5=explode("</a>",$fgx3['1']);
	 $fgx6=explode(">",$fgx5['0']);
	 $dd['name']=$fgx6['1'];//name
	 $dd['subCats']='';
	 if(!empty($fgx2['1'])&&$fgx2['1']){ 
	 $xx1=explode("snd-cat-name",$fgx2['1']);
	 for($m=0,$n=1;$n<count($xx1);$n++,$m++){$xx['id']='';$xx['name']='';$xx='';
		 $xx2=explode("category-",$xx1[$n]);
		 $xx3=explode(".htm",$xx2['1']);
		 $xx['id']=$xx3['0'];//xiaoid
		 $xx4=explode("</a>",$xx3['1']);
		 $xx5=explode(">",$xx4['0']);
		 $xx['name']=$xx5['1'];//xname
		 $dd['subCats'][]=$xx;
		 }
	 }
    $arr[]=$dd;
	}
	$dfs['cats']=$arr;
	$all['data']=$dfs;
	$all['ret'][]="SUCCESS::调用成功";
	
   header('Content-Type:application/json;charset=utf-8');
   $json = json_encode($all); 
   print_r($json);
 }
 
 
 
 
 public function gcc () {
	
$data=$_POST;
$dbzb=substr($data['url'],0,4);
if($dbzb=='http'){$url= $data['url'];}else{$url='http://'.$data['url'].'';}


$handle = fopen($url, "rb");  //读取店铺页面
$contents = stream_get_contents($handle); 
fclose($handle); 
$tihuan='J_TAllCatsTree" id="biaoji234" style="';
$jiaguo1=str_replace("J_TAllCatsTree",$tihuan,$contents);


$strarr=explode("J_TAllCatsTree",$contents);
$guolu2=explode('cats-tree">',$strarr['1']);
$guolu3=explode('fst-cat">',$guolu2['1']);
$num=count($guolu3);$num1=$num-1;$num2=$num-2;
$guolu4=explode('class="menu-list"',$guolu3[$num1]);
$zh='';
for($i=0;$i<$num1;$i++){
  $zh=''.$zh.''.$guolu3[$i].'fst-cat">';
	}
 $zhxx=''.$zh.''.$guolu4['0'].'</h4></li>';

  $fenlei=mb_convert_encoding($zhxx, "UTF-8", "GBK");
$str=$fenlei;
$str=preg_replace("/\s+/", " ", $str); //过滤多余回车 
$str=preg_replace("/<[ ]+/si","<",$str); //过滤<__("<"号后面带空格) 
$str=preg_replace("/<(i.*?)>(.*?)<(\/i.*?)>/si","",$str); //过滤style标签
//$str=preg_replace("/<(\/?div.*?)>/si","",$str); //过滤style标签
$str=preg_replace("/<(div.*?)>/si","",$str); //过滤title标签 
$str=preg_replace("/<(\/div.*?)>/si","",$str); //过滤title标签 
$str=preg_replace("/<(\/?h4.*?)>/si","",$str); //过滤style标签

//清算
$arr = array();
$dfs = array();
$all = array();
$xx = array();
$fgx1=explode('fst-cat"',$str);
for($k=0,$i=2;$i<count($fgx1);$i++,$k++){
	$fgx2='';
	$fgx2=explode("<ul",$fgx1[$i]);
	 $fgx3=explode("category-",$fgx2['0']);
	 $fgx4=explode(".htm",$fgx3['1']);
	 $dd['id']=$fgx4['0'];//id
	 $fgx5=explode("</a>",$fgx3['1']);
	 $fgx6=explode(">",$fgx5['0']);
	 $dd['name']=$fgx6['1'];//name
	 $dd['subCats']='';
	 if(!empty($fgx2['1'])&&$fgx2['1']){ 
	 $xx1=explode("snd-cat-name",$fgx2['1']);
	 for($m=0,$n=1;$n<count($xx1);$n++,$m++){$xx['id']='';$xx['name']='';$xx='';
		 $xx2=explode("category-",$xx1[$n]);
		 $xx3=explode(".htm",$xx2['1']);
		 $xx['id']=$xx3['0'];//xiaoid
		 $xx4=explode("</a>",$xx3['1']);
		 $xx5=explode(">",$xx4['0']);
		 $xx['name']=$xx5['1'];//xname
		 $dd['subCats'][]=$xx;
		 }
	 }
    $arr[]=$dd;
	}
	$dfs['cats']=$arr;
	$all['data']=$dfs;
	$all['ret'][]="SUCCESS::调用成功";
	
	header('Content-Type:application/json;charset=utf-8');
   $json = json_encode($all); 
   print_r($json);	
}

 
 
 
 
 
 
 
public function gii () {
		
if (isset($_POST)) {
		$items=$_POST['item'];
		$callback='jQuery191034293582546524704_1442988010284';
		$ewmSize=$_POST['ewmSize'];
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
		$ids[]=$id;
			}
		}
		
$adc=!empty($ids)?'yes':'no';
$zzz[]=	$adc;
foreach($ids as $id){
if(!empty($id)){
$cha='http://ok.etao.com/api/batch_purchase_decision.do?_ksTS=1442988582013&src=etao_compare&partner=4807&items='.$id.'&callback='.$callback.'';
$gl1=''.$callback.'(';
$text=file_get_contents($cha); 
$text = iconv("gb2312","utf-8//IGNORE",$text);
$jsongd1=explode("$gl1",$text);
$json=substr($jsongd1[1],0,-1);
$arrayobj= (Array)json_decode($json);
$array = object_array($arrayobj);
$result=$array['result'];
$info=$result[$id];
$arr['0']=$info['auctionImage'];
$arr['1']=$info['auctionImage'];
$arr['2']=$info['auctionTitle'];
$arr['3']=$info['orignalPrice'];
$arr['4']=$info['currentPrice'];
$arr['5']=$info['auctionMonthSales'];
if($type=='tmall'){$code = 'v=1&type=bi&item_id='.$id.'';}else{$code = 'type=ci&item_id='.$id.'&v=1';}
$imgsrc = 'http://gqrcode.alicdn.com/img?'.$code.'&w='.$ewmSize.'&h='.$ewmSize;
$arr['6']=$imgsrc;
$zzz[]=	$arr;
	}else{
	$arr['0']='';
	$arr['2']='';
	$arr['3']='';
	$arr['4']='';
	$arr['5']='';
	$arr['6']='';	
	$zzz[]=	$arr;
		}
	}
header('Content-Type:application/json;charset=utf-8');
print_r(json_encode($zzz));	
	}
   }

public function giii () {
		
if (isset($_POST)) {
		$item=$_POST['item'];
		$callback='jQuery191034293582546524704_1442988010284';
		$ewmSize=$_POST['ewmSize'];
		$id='';$ids='';
		if(!empty($item)){

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

		}
		
$adc=!empty($id)?'yes':'no';
$arr[0]=	$adc;

if(!empty($id)){
$cha='http://ok.etao.com/api/batch_purchase_decision.do?_ksTS=1442988582013&src=etao_compare&partner=4807&items='.$id.'&callback='.$callback.'';
$gl1=''.$callback.'(';
$text=file_get_contents($cha); 
$text = iconv("gb2312","utf-8//IGNORE",$text);
$jsongd1=explode("$gl1",$text);
$json=substr($jsongd1[1],0,-1);
$arrayobj= (Array)json_decode($json);
$array = object_array($arrayobj);
$result=$array['result'];
$info=$result[$id];
$arr['0']='yes';
$arr['1']=$info['auctionTitle'];
$arr['2']=$info['orignalPrice'];
$arr['3']=$info['currentPrice'];
$arr['4']=$info['auctionMonthSales'];
$arr['5']='0';
if($type=='tmall'){$code = 'v=1&type=bi&item_id='.$id.'';}else{$code = 'type=ci&item_id='.$id.'&v=1';}
$imgsrc = 'http://gqrcode.alicdn.com/img?'.$code.'&w='.$ewmSize.'&h='.$ewmSize;
$arr['6']=$imgsrc;

	}else{
	$arr['0']='no';
	$arr['2']='';
	$arr['3']='';
	$arr['4']='';
	$arr['5']='';
	$arr['6']='';	

		}
	
header('Content-Type:application/json;charset=utf-8');
print_r(json_encode($arr));	
	}
   }


public function giiforp () {
  header('Content-Type:application/json;charset=utf-8');
	//php.ini ;extension=php_openssl.dll
	if(isset($_POST)){
	$items=$_POST['item'];
	$adc=!empty($items)?'yes':'no';
	$zzz[]=	$adc;$ttt='';
	foreach($items as $k=>$item){
		$tm='detail.tmall.com';
		$tb='item.taobao.com';
		$linkt=0;
		if(stripos($item, $tm) >0){$type='tmall'; $ms=1;$linkt=1;}
		if(stripos($item, $tb) >0){$type='taobao';$ms=2;$linkt=1;}
	$picarray=array();
	if($linkt>0){
		$idx1=explode("id=",$item);
		$idx2=explode("&",$idx1[1]);
		$id=$idx2[0];
		if($ms==1){$iurl='http://detail.tmall.com/item.htm?id='.$id.'';}
		if($ms==2){$iurl='http://item.taobao.com/item.htm?id='.$id.'';}
		include '/phpQuery/phpQuery.php'; 
		phpQuery::newDocumentFile($iurl); 
		$companies = pq('#J_UlThumb li a')->html(); 
		phpQuery::$documents = array();
		$luanma=$companies;
		}else{
		$id='';
		$luanma='';
		}
	 $qie1=explode('="',$luanma);
	 
	 for($i=1;$i<=5;$i++){$x=$i-1;
		if(isset($qie1[$i])){
		$qie2=explode('"',$qie1[$i]);
		$img=$qie2[0];
		$img=str_replace('_60x60q90.jpg','',$img);
		$img=str_replace('_50x50.jpg_.webp','',$img);
		$img=str_replace('_50x50.jpg','',$img);
		$picarray[$x]='http:'.$img;
			} 
		 }
		 $picarray["colorImg"]='';
	$zzz[]=$picarray;
	}
	echo json_encode($zzz);
	}
   }
}

?>