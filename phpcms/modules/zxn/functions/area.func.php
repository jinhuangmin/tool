<?php


function object_array($array){
  if(is_object($array)){
    $array = (array)$array;
  }
  if(is_array($array)){
    foreach($array as $key=>$value){
      $array[$key] = object_array($value);
    }
  }
  return $array;
}

function getMillisecond() {
    list($t1, $t2) = explode(' ', microtime());
    return $t2 . '.' .  ceil( ($t1 * 1000) );
}
   
 function getImagesInfo($images) {    //参数images为图片的绝对地址       
 $img_info = getimagesize($images);        
 switch ($img_info['2']){        
 case 1:        
  $imgtype = "gif";        
  break;        
  case 2:        
 $imgtype = "jpg";        
 break;        
 case 3:        
 $imgtype = "png";        
 break;  
  default:
  $imgtype = "png";  
  break;      
 }        
 $img_type = $imgtype;        
 //获取文件大小     
@$img_size = ceil(filesize($images)/1000)."k";         
 $new_img_info = array (        
 "width"=>$img_info['0'], //图像宽     
 "height"=>$img_info['1'], //图像高     
 "type"=>$img_type, //图像类型     
 "size"=>$img_size //图像大小     
 );       
 return $new_img_info;        
 }


//解析URL参数
function parseUrlParam($query){
    $queryArr = explode('&', $query);
    $params = array();
    if($queryArr[0] !== ''){
        foreach( $queryArr as $param ){
            list($name, $value) = explode('=', $param);
            $params[urldecode($name)] = urldecode($value);
        }       
    }
    return $params;
}
//获取URL参数
function getUrlParam($cparam, $url){
    $parse_url = parse_url($url);
    $query = isset($parse_url['query']) ? $parse_url['query'] : '';
    $params = parseUrlParam($query);
    return isset($params[$cparam]) ? $params[$cparam] : '';
}


/**
 *  实现传入宝贝的id,返回宝贝的链接,支持淘宝
 * @param $id 宝贝的id
 * @return string 返回的宝贝的链接
 */
function getTbLink($id){
    $url="https://item.taobao.com/item.htm?spm=a1z10.4-c.w5003-12641268955.30.0lDnKZ&id=".$id."&scene=taobao_shop";
    return $url;
}


/**
 * 综合,支持淘宝和天猫
 * @param $id  宝贝的id
 * @return mixed  宝贝的商品名
 */
function getInfoById($id){
    $url="http://hws.m.taobao.com/cache/wdetail/5.0/?id=".$id;
    $content=file_get_contents($url);
    $content_ori=strip_tags($content);
    $content_arr=json_decode($content_ori,true);
    $detail=json_decode($content_arr['data']['apiStack']['0']['value'],true);
    $success_sym=$detail['ret']['0'];//成功则返回"SUCCESS::调用成功";
    if($success_sym=="SUCCESS::调用成功"){
        $info['title']=$content_arr['data']['itemInfoModel']['title'];
		$info['pics']=$content_arr['data']['itemInfoModel']['picsPath'];
		$info['shou']=$detail['data']['itemInfoModel']['totalSoldQuantity'];
		$xians=$detail['data']['itemInfoModel']['priceUnits']['0']['price'];
		$xian0=explode("-",$xians);
		$xian=count($xian0)>1?$xian0[0]:$xians;
		$yuans=$detail['data']['itemInfoModel']['priceUnits']['1']['price'];
		$yuan0=explode("-",$yuans);
		$yuan=count($yuan0)>1?$yuan0[0]:$yuans;
		$info['yuan']=$yuan;
		$info['xian']=$xian;
		$info['ret']='yes';
        return $info;
    }else{
		$info['title']="宝贝不存在";
		$info['pics']='';
		$info['shou']='0';
		$info['yuan']='0.00';
		$info['xian']='0.00';
		$info['ret']='no';
        return $info;
    }

}


/**
 * 实现传入宝贝的id,获取宝贝的商品名,支持淘宝和天猫
 * @param $id  宝贝的id
 * @return mixed  宝贝的商品名
 */
function getNameById($id){
    $url="http://hws.m.taobao.com/cache/wdetail/5.0/?id=".$id;
    $content=file_get_contents($url);
    $content_ori=strip_tags($content);
    $content_arr=json_decode($content_ori,true);
    $detail=json_decode($content_arr['data']['apiStack']['0']['value'],true);
    $success_sym=$detail['ret']['0'];//成功则返回"SUCCESS::调用成功";
    if($success_sym=="SUCCESS::调用成功"){
        $name=$content_arr['data']['itemInfoModel']['title'];
        return $name;
    }else{
        return "宝贝不存在";
    }

}

/**
 * 实现传入宝贝id,获取宝贝价格,支持淘宝和天猫
 * @param $id   宝贝的id
 * @return mixed 返回的宝贝的价格或价格区间
 */
function getPriceById($id){
    $url="http://hws.m.taobao.com/cache/wdetail/5.0/?id=".$id;
    $content=file_get_contents($url);
    $content_ori=strip_tags($content);
    $content_arr=json_decode($content_ori,true);
    $pro_detail=json_decode($content_arr['data']['apiStack']['0']['value'],true);
    $success_sym=$pro_detail['ret']['0'];//成功则返回"SUCCESS::调用成功";
    if($success_sym=="SUCCESS::调用成功"){
        $xians=$pro_detail['data']['itemInfoModel']['priceUnits']['0']['price'];
		$xian0=explode("-",$xians);
		$xian=count($xian0)>1?$xian0[0]:$xians;
		$yuans=$pro_detail['data']['itemInfoModel']['priceUnits']['1']['price'];
		$yuan0=explode("-",$yuans);
		$yuan=count($yuan0)>1?$yuan0[0]:$yuans;
		$jia['yuan']=$yuan;
		$jia['xian']=$xian;
        return $jia;
    }else{
        $jia['yuan']='0.00';
		$jia['xian']='0.00';
        return $jia;
    }
}

function getSoldById($id){
    $url="http://hws.m.taobao.com/cache/wdetail/5.0/?id=".$id;
    $content=file_get_contents($url);
    $content_ori=strip_tags($content);
    $content_arr=json_decode($content_ori,true);
    $pro_detail=json_decode($content_arr['data']['apiStack']['0']['value'],true);
    $success_sym=$pro_detail['ret']['0'];//成功则返回"SUCCESS::调用成功";
    if($success_sym=="SUCCESS::调用成功"){
        $shou=$pro_detail['data']['itemInfoModel']['totalSoldQuantity'];
        return $shou;
    }else{
        return "0";
    }
}
/**
 *  实现传入宝贝id,获取宝贝的收藏人数(人气),支持淘宝
 * @param $id  宝贝id
 * @return mixed   返回的宝贝的收藏人数(人气)
 */
function getPopById($id){
    $url=getTbLink($id);
    $urlinfo = parse_url($url);
    parse_str($urlinfo['query'], $query);
    $id = $query['id'];
    $data = file_get_contents($url);
    $start = strpos($data, 'counterApi');
    $start = strpos($data, ": ", $start);
    $end = strpos($data, "',", $start);
    $api = 'https:' . substr($data, $start + 3, $end - $start - 3) . '&callback=jsonp107';
    $response = file_get_contents($api);
    $response = substr($response, 9, -2);
    $arr = json_decode($response, true);
    $popularity=$arr['ICCP_1_'.$id];
    return $popularity;
}

/**   实现传入宝贝id，获取宝贝图片url
 * @param $id    宝贝id
 * @return mixd   宝贝图片url
 */
function getPicById($id){
    $url="http://hws.m.taobao.com/cache/wdetail/5.0/?id=".$id;
    $content=file_get_contents($url);
    $content_ori=strip_tags($content);
    $content_arr=json_decode($content_ori,true);
    $detail=json_decode($content_arr['data']['apiStack']['0']['value'],true);
    $success_sym=$detail['ret']['0'];//成功则返回"SUCCESS::调用成功";
    if($success_sym=="SUCCESS::调用成功"){
        $name=$content_arr['data']['itemInfoModel']['picsPath'];
        return $name;
    }else{
        return "";
    }

}

/**   实现传入宝贝id，获取宝贝图片url
 * @param $id    宝贝id
 * @return mixd   宝贝图片url
 */
function getSkuPicById($id){
    $url="http://hws.m.taobao.com/cache/wdetail/5.0/?id=".$id;
    $content=file_get_contents($url);
    $content_ori=strip_tags($content);
    $content_arr=json_decode($content_ori,true);
    $detail=json_decode($content_arr['data']['apiStack']['0']['value'],true);
    $success_sym=$detail['ret']['0'];//成功则返回"SUCCESS::调用成功";
    if($success_sym=="SUCCESS::调用成功"){
        $name=$content_arr['data']['skuModel']['skuProps'][1]['values'];
        return $name;
    }else{
        return "";
    }

}
 function post($url, $data){
    $postdata = http_build_query(
      $data
    );
    $opts = array('http' =>
           array(
             'method' => 'POST',
             'header' => 'Content-type: application/x-www-form-urlencoded',
             'content' => $postdata
           )
    );
    $context = stream_context_create($opts);
    $result = file_get_contents($url, false, $context);
    return $result;
  }
?>