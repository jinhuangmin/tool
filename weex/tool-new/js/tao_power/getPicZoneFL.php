


<?php
	date_default_timezone_set("prc");
	include_once 'API_sdk/TopSdk.php';
	session_start();
	$skey = $_SESSION['uid_skey'];
	if(!$skey&&$_COOKIE['uid_skey']){
		$skey = $_COOKIE['uid_skey'];
	}
	
	if( !empty($skey) ){
		$res = getPicZoneFL( $skey );
		echo $res;
	}
	
	
	/**
     * 获取分类信息
     */
    function getPicZoneFL($skey){
    	if( $skey ){
    		$c = new TopClient;
			$c->appkey = "23337523";
    		$c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
			$req = new PictureCategoryGetRequest;
			$resp = $c->execute( $req, $skey );
			return json_encode( $resp );
    	}
    }
?>