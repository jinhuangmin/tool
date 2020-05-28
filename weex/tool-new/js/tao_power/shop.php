




<?php
	date_default_timezone_set("prc");
	include_once 'API_sdk/TopSdk.php';
	include_once 'oauth.class.php';
	$o = new oauth();

	
	session_start();
	$skey = $_SESSION['uid_skey'];
	if(!$skey&&$_COOKIE['uid_skey']){
		$skey = $_COOKIE['uid_skey'];
	}
	
	if( !empty($skey) ){
        

        function getShopInfos($skey){
            $c = new TopClient;
            $c->appkey = "23337523";
            $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
            
            $req = new ShopSellerGetRequest;
            $req->setFields("sid,title,pic_path");
            $resp = $c->execute($req, $skey);
            return $resp; 
        }


        
        $res = getShopInfos($skey);
        echo json_encode( $res );


        
       
	}else{
		echo -1;
	}
        
        
?>