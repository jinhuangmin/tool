<?

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
$arr['0']='yes';
$arr['1']=$info['auctionTitle'];
$arr['2']=$info['orignalPrice'];
$arr['3']=$info['currentPrice'];
$arr['4']=$info['auctionMonthSales'];
if($type=='tmall'){$code = 'v=1&type=bi&item_id='.$id.'';}else{$code = 'type=ci&item_id='.$id.'&v=1';}
$imgsrc = 'http://gqrcode.alicdn.com/img?'.$code.'&w='.$ewmSize.'&h='.$ewmSize;
$arr['5']=$imgsrc;
$zzz[]=	$arr;
	}else{
	$arr['0']='';
	$arr['2']='';
	$arr['3']='';
	$arr['4']='';
	$arr['5']='';
	$zzz[]=	$arr;
		}
	}
header('Content-Type:application/json;charset=utf-8');
print_r(json_encode($zzz));	
	}

?>