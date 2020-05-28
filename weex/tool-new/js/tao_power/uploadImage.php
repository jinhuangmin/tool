




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
		
		
		$fname = '大师助手上传(勿删)';
		$flid = $_POST['flid'];
		$picid = $_POST['picid'];  // 用于设置图片标题
        $base64 = $_POST['base64'];
		$pictype = $_POST['pictype'];
		$fname_set = $_POST['fname_set'];
		
		/**
		 * 获取分类信息
		 */
		function getPicZoneFL($skey,$fname,$o){
			if( $skey ){
				$_category_id = -1;
				$c = new TopClient;
				$c->appkey = "23337523";
				$c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
				$req = new PictureCategoryGetRequest;
				$req->setParentId("0");
				$resp = $c->execute( $req, $skey );

				return json_encode($resp);

				// $arr = $resp->picture_categories->picture_category;
				// if($arr){
				// 	for ($i=0; $i < count($arr); $i++) { 
				// 		if($arr[$i]->picture_category_name==$fname){
				// 			$_category_id = $arr[$i]->picture_category_id; 
				// 			break;
				// 		}
				// 	}	
				// }
				// if($_category_id!=-1){
				// 	 return $_category_id;
				// }else{
				// 	$id = $o->addPicZoneClass('0', $fname, $skey );
				// 	return $id;
				// }
			}
		}

		
		//获取分类名称
		if($flid == "get_flid"){
			$res = getPicZoneFL( $skey, $fname_set, $o );
			echo $res;
			exit();
		}
		//添加分类
		if($flid == "add_flid"){
			$id = $o->addPicZoneClass('0', $fname, $skey );
			if($id){
				$res = getPicZoneFL( $skey, $fname_set, $o );
				echo $res;
			}
			exit();
		}

		if( $flid!=null && $flid!=undefined ){
			$hasfl_id = $flid;
		}else{
			$hasfl_id = $o->has_FL($fname,$skey);
			if( !$hasfl_id ){
				$id = $o->addPicZoneClass('0', $fname, $skey );
				$hasfl_id = $id;
			}
		}

        $base64 = substr($base64, 22); // 要把[data:image/png;base64,]这22个字符去掉，否则解码出来的图片是被损坏的
        $img = base64_decode($base64);
        
        
     	// $filedir = "C:/Temp";//线下
        $filedir = "Temp";//线上
        $fh = "$filedir/$skey.$pictype";
        if(!is_dir($filedir)){
            mkdir($filedir);
        }
        $a = file_put_contents($fh, $img);
        
        
		$c = new TopClient;
		$c->appkey = "23337523";
		$c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
       	$req = new PictureUploadRequest;
		$req->setPictureCategoryId( "$hasfl_id" );
		//附件上传的机制参见PHP CURL文档，在文件路径前加@符号即可
		$req->setImg("@$fh");
		$req->setImageInputTitle("$picid.$pictype");
		$resp = $c->execute($req, $skey );
		
		unlink($fh);//删除临时图片
       	echo json_encode($resp);
       
	}else{
		echo -1;
	}
        
        
?>