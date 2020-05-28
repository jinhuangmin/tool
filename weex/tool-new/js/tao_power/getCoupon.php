


<?php
	
	
	date_default_timezone_set("prc");
	include_once 'API_sdk/TopSdk.php';
	session_start();
	$skey = $_SESSION['uid_skey'];
	if(!$skey&&$_COOKIE['uid_skey']){
		$skey = $_COOKIE['uid_skey'];
	}
	
    $get =  $_POST["get"];
	
	if($skey){
		if( $get=="getCoupon"&&$skey ){
			$item = coupon($skey);
			echo json_encode($item);
		}
		if( $get=="getUrl"&&$skey ){
			$item = coupon_url($skey,$coupon_id);
			echo json_encode($item);
		}
	}else{
		echo '{"result":"-1","res":"授权过期"}';
	}

	
	
	/**
	 * 获取店铺中的优惠券
	 */
	function coupon($sessionKey,$size="50",$page="1"){
		$obj = array();
        $c = new TopClient;
        $c->appkey = "23337523";
        $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
        $req = new PromotionCouponsGetRequest;
        $req->setPageNo($page);
        $req->setPageSize($size);
		$resp = $c->execute($req, $sessionKey);

		if($resp!=null){
			$obj["coupons"] =  $resp->coupons;
		}

		$req = new PromotionActivityGetRequest;
		$resp = $c->execute($req, $sessionKey);

        if($resp!=null){
			$obj["activitys"] = $resp->activitys;
		}

		return $obj;
        
	}

	/**
	 * 获取优惠券链接
	 */
	function coupon_url($sessionKey,$coupon_id){

		$c = new TopClient;
        $c->appkey = "23337523";
        $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
		$req = new PromotionActivityGetRequest;
		$resp = $c->execute($req, $sessionKey);

        if($resp!=null){
			 return $resp;
		}else{	
			return "没有获取到数据";
        }
        
	}

	
	
	
	
	

?>