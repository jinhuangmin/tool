




<?php
	//获取在售中的宝贝
	
	
	date_default_timezone_set("prc");
	include_once 'API_sdk/TopSdk.php';
	session_start();
	$skey = $_SESSION['uid_skey'];
	if(!$skey&&$_COOKIE['uid_skey']){
		$skey = $_COOKIE['uid_skey'];
	}
	
	$get =  $_POST["get"];
	
	
	if( $get=="getCategory"&&$skey ){
		$item = category($skey);
		echo json_encode($item);
	}else{
		echo '{"seller_cats":"-1","res":"授权后才能查看宝贝图片！"}';
	}
	
	
	function category($sessionKey){

        $c = new TopClient;
        $c->appkey = "23337523";
        $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
        $req = new SellercatsListGetRequest;
        $req->setFields("cid,name");
        $resp = $c->execute($req, $sessionKey);

        if($resp!=null){
			 return $resp;
		}else{	
			return "没有获取到数据";
        }
        
	}
	
	
	
	
	

?>