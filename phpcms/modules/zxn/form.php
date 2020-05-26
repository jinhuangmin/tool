<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_func('area','zxn');
class form {
	public function __construct() {
		
	}


   
  public function gsi () {
	  if($_POST['url']){
		$url= $_POST['url'];
		$contents=file_get_contents($url);
		$qie0=explode('shopId=',$contents);
		$qie1=explode(';',$qie0[1]);
		if($qie1[0]){
			$all[0]='yes';
			$all[1]=$qie1[0];
			}else{
			$all[0]='no';
			$all[1]='';
				}
		header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($all));
	  }

   } 
   
  public function shoucang () {
	  if($_POST['url']){
		$url= $_POST['url'];
		$contents=file_get_contents($url);
		$qie0=explode('shopId=',$contents);
		$qie1=explode(';',$qie0[1]);
		 $all['url']='https://favorite.taobao.com/popup/add_collection_2.htm?id='.$qie1[0].'&itemtype=0';
		header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($all));
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
	
	 if($_POST['url']!==''){
		//店铺分类调用  2018-2-2  (118-124)
		$GetData='';
		$GetData=post('http://junezx.com/3.0/gcc.php', $_POST);
		if(strstr($GetData, 'SUCCESS::')){exit($GetData);} 
		$GetData='';
		$GetData=post('http://www.drzxz.com/tool/gcc.php', $_POST);
		if(strstr($GetData, 'SUCCESS::')){exit($GetData);} 
		$GetData='';
		$GetData=post('http://www.dianmishu.com/4.0/gcc.php', $_POST);
		if(strstr($GetData, 'SUCCESS::')){exit($GetData);}
		$GetData='';
		$GetData=post('http://www.zuoer123.com/4.0/gcc.php', $_POST);
		if(strstr($GetData, 'SUCCESS::')){exit($GetData);}
		$GetData=''; 
		$dbzb=substr($_POST['url'],0,4);
		if($dbzb=='http'){$url= $_POST['url'];}else{$url='http://'.$_POST['url'].'';}
			$ch2 = curl_init();
			curl_setopt($ch2, CURLOPT_URL, $url);
			curl_setopt($ch2, CURLOPT_FOLLOWLOCATION, TRUE);
			curl_setopt($ch2, CURLOPT_SSL_VERIFYHOST, FALSE);
			curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch2, CURLOPT_RETURNTRANSFER, TRUE);
			$contents = curl_exec($ch2);
			curl_close($ch2);
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
}

 
 
 	
 
 
 public function gii () {
		
if (isset($_POST)) {

		$items=$_POST['item'];
		$id='';$ids='';$type='';
		$mark=0;$mark2=0;$mark3=0;
		
	if(!empty($items)){
		foreach($items as $k=>$item){
		//宝贝数据调用 2017-12-22(212-214)
		// $tm='detail.tmall.com';
		$tm='detail';
		$tb='item.taobao.com';
		$jhs='ju.taobao';
		$linkt=0;
		if(stripos($item, $tm) >0){$type[$k]='tmall'; $linkt=1;}
		if(stripos($item, $tb) >0){$type[$k]='taobao';$linkt=1;}
		if(stripos($item, $jhs) >0){$type[$k]='taobao';$linkt=2;}	

		if($linkt==1){
		$idx1=getUrlParam('id', $item);
		if($idx1){$id=$idx1;$hv=1;}else{$id='';}
		$ids[]=$id;
		}else if($linkt==2){
		$idx1=getUrlParam('item_id', $item);
		if($idx1){$id=$idx1;$hv=1;}else{$id='';}
		$ids[]=$id;
		}else{
		$ids[]='';	
		}
		}
		}
	
$adc=!empty($ids)?'yes':'no';
$zzz[]=	$adc;$cundang='';
$i=0;
foreach($ids as $key=>$id){ $p=$key+1;
if(!empty($id)){
	
if(!empty($cundang[$id])&&$key>0){$zzz[]=$cundang[$id];}else{
	

	$get0=getInfoById($id);
	if($get0['ret']=='yes'){$info1=$get0;}else{$info1='';$get0=array();}
	
	$url="http://mayzx.com/taobaoapi/test2.php?id=".$id;
	$json=file_get_contents($url);$jsarr=json_decode($json,true);
	if($jsarr['ret']=='yes'){$info2=$jsarr;}else{$info2='';$jsarr=array();}
	
	if($mark2==0){$GetData='';$GetData=post('http://www.dianmishu.com/4.0/gii.php', $_POST);
	if(strstr($GetData, 'yes')){$info3=json_decode($GetData,true);$mark2=1;}else{$GetData='';$GetData=post('http://www.zuoer123.com/4.0/gii.php', $_POST);if(strstr($GetData, 'yes')){$info3=json_decode($GetData,true);$mark2=1;}else{$info3='';} }}
	//是否是后缀png
	$pic=$get0['pics'][0]?$get0['pics'][0]:($jsarr['info']['pict_url']?$jsarr['info']['pict_url']:($info3[$p][0]?$info3[$p][0]:0));

	if(preg_match("/jpg/",$pic)){
		$arr['0']=$pic;
	}else{
		$arr['0']=$pic.'.png';
	}
	$pic2=$get0['pics'][1]?$get0['pics'][1]:($jsarr['xpic'][1]?$jsarr['xpic'][1]:($info3[$p][1]?$info3[$p][1]:$info3[$p][1]));
	if(preg_match("/jpg/",$pic2)){
		$arr['1']=$pic2;
	}else{
		$arr['1']=$pic2.'.png';
	}
	//宝贝数据调用 2017-12-22(248-261)
	//$arr['0']=$get0['pics'][0]?$get0['pics'][0]:($jsarr['info']['pict_url']?$jsarr['info']['pict_url']:($info3[$p][0]?$info3[$p][0]:0));
	//$arr['1']=$get0['pics'][1]?$get0['pics'][1]:($jsarr['xpic'][1]?$jsarr['xpic'][1]:($info3[$p][1]?$info3[$p][1]:$info3[$p][1]));
	$arr['2']=$info1['title']?$info1['title']:($jsarr['info']['title']?$jsarr['info']['title']:($info3[$p][2]?$info3[$p][2]:'未找到'));
	$arr['3']=$jsarr['info']['reserve_price']?$jsarr['info']['reserve_price']:($get0['yuan']?$get0['yuan']:($info3[$p][3]?$info3[$p][3]:668));
	$arr['4']=$jsarr['info']['zk_final_price']?$jsarr['info']['zk_final_price']:($get0['xian']?$get0['xian']:($info3[$p][4]?$info3[$p][4]:0));
	$arr['5']=$info1['shou']?$info1['shou']:$info3[$p][5];
	// $arr['7']=$id;
	// $arr['0']=$info1['pics'][0]?$info1['pics'][0]:($info2['info']['pict_url']?$info2['info']['pict_url']:($info3[$p][0]?$info3[$p][0]:0));
	// $arr['1']=$info1['pics'][1]?$info1['pics'][1]:($info2['xpic'][1]?$info2['xpic'][1]:($info3[$p][1]?$info3[$p][1]:$info3[$p][1]));
	// $arr['2']=$info1['title']?$info1['title']:($info2['info']['title']?$info2['info']['title']:($info3[$p][2]?$info3[$p][2]:'未找到'));
	// $arr['3']=$info2['info']['reserve_price']?$info2['info']['reserve_price']:($info1['yuan']?$info1['yuan']:($info3[$p][3]?$info3[$p][3]:668));
	// $arr['4']=$info2['info']['zk_final_price']?$info2['info']['zk_final_price']:($info1['xian']?$info1['xian']:($info3[$p][4]?$info3[$p][4]:0));
	// $arr['5']=$info1['shou']?$info1['shou']:$info3[$p][5];
	if($type[$key]=='tmall'){$code = 'v=1&type=bi&item_id='.$id.'';}else{$code = 'type=ci&item_id='.$id.'&v=1';}
	$arr['6']='http://gqrcode.alicdn.com/img?'.$code.'&w='.$_POST['ewmSize'].'&h='.$_POST['ewmSize'];
	$zzz[]=	$arr;
	$cundang[$id]=$arr;

	}}else{
	$arr['0']='';
	$arr['2']='';
	$arr['3']='';
	$arr['4']='';
	$arr['5']='';
	$arr['6']='';
	$zzz[]=	$arr;
		}}
header('Content-Type:application/json;charset=utf-8');
print_r(json_encode($zzz));	
	}
   }


public function giii () {
		
if (isset($_POST)) {
	
	$PostData=array();
	$PostData['item'][]=$_POST['item'];$item=$_POST['item'];
	
	$tm='detail.tmall.com';
	$tb='item.taobao.com';
	$linkt=0;
	if(stripos($item, $tm) >0){$type='tmall'; $linkt=1;}
	if(stripos($item, $tb) >0){$type='taobao';$linkt=1;}
	if($linkt==1){
	$idx1=getUrlParam('id', $item);
	if($idx1){$id=$idx1;$hv=1;}else{$id='';}
	}else{
	$id='';	
	}


if(!empty($id)){
	
	$get0=getInfoById($id);if($get0['ret']=='yes'){$info1=$get0;}else{$info1='';$get0=array();}
	
	$url="http://mayzx.com/taobaoapi/test2.php?id=".$id;
	$json=file_get_contents($url);$jsarr=json_decode($json,true);
	if($jsarr['ret']=='yes'){$info2=$jsarr;}else{$info2='';$jsarr=array();}
	if($mark2==0){$GetData='';$GetData=post('http://www.dianmishu.com/4.0/gii.php', $PostData);
	if(strstr($GetData, 'yes')){$info3=json_decode($GetData,true);$mark2=1;}else{$GetData='';$GetData=post('http://www.zuoer123.com/4.0/gii.php', $PostData);if(strstr($GetData, 'yes')){$info3=json_decode($GetData,true);$mark2=1;}else{$info3='';} }}
$arr[0]='yes';
$arr[1]=$info1['title']?$info1['title']:($jsarr['info']['title']?$jsarr['info']['title']:($info3[1][2]?$info3[1][2]:'未找到'));
$arr[2]=$jsarr['info']['reserve_price']?$jsarr['info']['reserve_price']:($info1['yuan']?$info1['yuan']:($info3[1][3]?$info3[1][3]:668));
$arr[3]=$jsarr['info']['zk_final_price']?$jsarr['info']['zk_final_price']:($info1['xian']?$info1['xian']:($info3[1][4]?$info3[1][4]:0));
$arr[4]=$info1['shou']?$info1['shou']:$info3[1][5];
$arr[5]=$info1['cang']?$info1['cang']:0;
$zzz[]=	$arr;
	}else{
	$arr[0]='no';
	$arr[1]='';
	$arr[2]='';
	$arr[3]='';
	$arr[4]='';
	$arr[5]='';	
	$zzz[]=	$arr;
		}	
header('Content-Type:application/json;charset=utf-8');
print_r(json_encode($arr));		
}
}
	

   

public function giiforp () {
 	// header('Content-Type:application/json;charset=utf-8');
	//php.ini ;extension=php_openssl.dll
	//2018-1-6 聚划算主图
	if(isset($_POST)){
		$items=$_POST['item'];
		$type='';
	if(!empty($items)){
		foreach($items as $k=>$item){
		$jhs='ju.taobao';
		$linkt=0;
		if(stripos($item, $jhs) >0){$type[$k]='taobao';$linkt=1;}	

		if($linkt==1){
		$idx1=getUrlParam('item_id', $item);
		if($idx1){$_POST['item'][$k]="http://detail.tmall.com/item.htm?id=".$idx1;}
		}
		}
		}
		


		$GetData='';
		$GetData=post('http://www.zuoer123.com/4.0/giiforp.php', $_POST);
		if(strstr($GetData, 'yes')){exit($GetData);} 
		$GetData='';
		$GetData=post('http://www.dianmishu.com/4.0/giiforp.php', $_POST);
		if(strstr($GetData, 'yes')){exit($GetData);}
		$GetData='';

	$items=$_POST['item'];$hv=0;$zzz=array();
		
	if(!empty($items)){
		foreach($items as $k=>$item){
		$idx1=getUrlParam('id', $item);
		if($idx1){$id=$idx1;$hv=1;}else{$id='';}
		$ids[]=$id;
			}
		}
		
$adc=$hv==1?'yes':'no';
$zzz[]=	$adc;$cundang='';
foreach($ids as $k=>$id){$actnum=$k+1;$arr='';
if(!empty($id)){
	
	if($cundang[$id]!==''){$zzz[]=$cundang[$id];}else{
		
//$url="http://mayzx.com/taobaoapi/test2.php?id=".$id;	
//$json=file_get_contents($url);
//$info=json_decode($json,true);
//$imgarr['colorImg']=getSkuPicById($id);
//$imgarr[0]=$info['info']['pict_url'];
//for($i=0;$i<5;$i++){$ik=$i+1;if($info['xpic'][$i]){$imgarr[$ik]=$info['xpic'][$i];}}
		

	$imgs=getPicById($id);
	//主图png后缀2018-11-22
	for($i=0;$i<5;$i++){
		if($imgs[$i]){
			if(preg_match("/jpg/",$imgs[$i])){
				$imgarr[$i]=$imgs[$i];
			}else{
				$imgarr[$i]=$imgs[$i].'.png';
			}
  		}
	}	
	//for($i=0;$i<5;$i++){if($imgs[$i]){$imgarr[$i]=$imgs[$i];}}	
	$imgarr['colorImg']=getSkuPicById($id);	
$zzz[]=	$imgarr;
$cundang[$id]=$imgarr;
	}
	}else{
	$arr[]='';
	$arr[]='';
	$arr[]='';
	$arr[]='';
	$arr[]='';
	$zzz[]=	$arr;
		}
	}
//header('Content-Type:application/json;charset=utf-8');
print_r(json_encode($zzz));
	
		
   }
	
   }

	
   
public function itemStylePreview () {}

   
}

?>