




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
	$q =  $_POST["q"];
	$page =  $_POST["page"];
	$size = $_POST["size"];
	
	
	if( $get=="items"&&$skey ){
		$item = item_get($skey,"sold_quantity",$q,$page,$size);
		echo json_encode($item);
	}else{
		echo '{"total_results":"-1","res":"授权后才能查看宝贝图片！"}';
	}
	
	
	function item_get($sessionKey,$by,$q="",$page="1", $size="100"){
		$c = new TopClient;
        $c->appkey = "23337523";
        $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
        $req = new ItemsOnsaleGetRequest;
        $req->setFields("approve_status,num_iid,price,seller_cids,list_time,props,title,pic_url,sold_quantity");
		$req->setOrderBy($by);
		$req->setQ($q);
		$req->setPageSize($size);
		$req->setPageNo($page);
        $resp = $c->execute($req, $sessionKey);
        if($resp!=null){
			 return $resp;
		}else{	
			return "没有获取到数据";
		}
	}
	
	
	
	
	

?>