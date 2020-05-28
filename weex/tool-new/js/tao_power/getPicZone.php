<?php
	// 获取当前用户图片空间的所有图片
	// 这里要判断是否有存储图片的文件，
	// 如果有读取文件，交给页面js处理
	// 如果没有，调用相关 api 来获取，并写入文件
	date_default_timezone_set("prc");
	include_once 'API_sdk/TopSdk.php';
	session_start();
	$skey = $_SESSION['uid_skey'];
	if(!$skey&&$_COOKIE['uid_skey']){
		$skey = $_COOKIE['uid_skey'];
	}
	
	$flid = $_POST["flid"];
	$page = $_POST["page"];
	if( !empty($skey) && $flid >= 0 ){
		$res = getAllImagesFromPicZone( $skey, $flid, $page );
		if( $res ){
			echo $res;
		}
	}else{
		echo null;
	}
	/**
     * 获取图片
     * @param <number> $flid 分类id 为空获取全部图片，不为空获取该分类下的图片
     */
    function getAllImagesFromPicZone( $skey, $flid, $page ){
    	if( $skey ){
    		$c = new TopClient;
			$c->appkey = "23337523";
    		$c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
			$req = new PicturePicturesGetRequest;
			$req->setPictureCategoryId($flid);
			$req->setPageSize("100");
			$req->setCurrentPage($page);
			// $req->setTitle("未命名-2");
			$resp = $c->execute( $req, $skey );
			return json_encode( $resp );
    	}
    }
?>