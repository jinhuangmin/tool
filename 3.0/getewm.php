<?
$data=$_POST;
$url=$data['ewmUrl'];
  $urls=parse_url( $url );// 解析url
  
  
  //淘宝天猫商品id
  function getID($url){
    $q1 = explode('id=',$url);
	$q2 = explode('&',$q1['1']);
   return $q2['0'];
  }
  //淘宝天猫商品id
  function getShopID($url){
    $text=file_get_contents($url); 
	$q1 = explode('shopId=',$text);
	$q2 = explode(';',$q1['1']);
   return $q2['0'];
  }
  
  if(strstr($urls['host'],"taobao")){
    if($urls['host']=='item.taobao.com'){ $type='1';  $erId=getID($url); }//淘宝商品
       else{$type='3'; $erId=getShopID($url); } //淘宝店铺
	   }
  if(strstr($urls['host'],"tmall")){
    if($urls['host']=='detail.tmall.com'){$type='2';$erId=getID($url);}//天猫商品
       else{$type='4'; $erId=getShopID($url);} //天猫店铺
     }
  
function getErcode($erId, $widthHeight = "90", $type = "1") {//2013.12.1修改
    switch($type){
        case 1:
            $code = 'type=ci&item_id='.$erId.'&v=1';//集市商品
            break;
        case 2:
            $code = 'v=1&type=bi&item_id='.$erId;//天猫商品
            break;
        case 3:
            $code = 'type=cs&shop_id='.$erId.'&v=1';//集市店铺.
            break;
        case 4:
            $code = 'v=1&type=bs&shop_id='.$erId;//天猫店铺
            break;
        case 5:
            $code = 'type=we&we_id='.$erId.'&v=1';//微淘.
            break;
        default:
            $code = 'type=ci&item_id='.$erId.'&v=1';//集市商品
    }
    $imgsrc = 'http://gqrcode.alicdn.com/img?'.$code.'&w='.$widthHeight.'&h='.$widthHeight;
    return $imgsrc;
}

 print_r(getErcode($erId,$data['ewmSize'],$type));
?>