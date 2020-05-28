


<?php
	
	
	date_default_timezone_set("prc");
	include_once 'API_sdk/TopSdk.php';
	session_start();
	$skey = $_SESSION['uid_skey'];
	if(!$skey&&$_COOKIE['uid_skey']){
		$skey = $_COOKIE['uid_skey'];
	}
	
	$get = $_POST["get"];
	$size = $_POST["size"];
	$page = $_POST["page"];
	
	if($skey){
		if( $get=="video"&&$skey ){
			$item = getVideo($skey,$size,$page);
			echo json_encode($item);
		}
	}else{
		echo '{"result":"-1","res":"授权过期"}';
	}

	
	
	/**
	 * 获取视频
	 */
	function getVideo($sessionKey,$size="50",$page="1"){

        $c = new TopClient;
        $c->appkey = "23337523";
        $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
        $req = new MediaVideoListRequest;
        $search_condition = new VideoSearchCondition2;
        $search_condition->current_page = $page;
        $search_condition->page_size = $size;
        $req->setSearchCondition(json_encode($search_condition));
        $resp = $c->execute($req, $sessionKey);
        
        return $resp;

        
	}


	
	
	
	
	

?>