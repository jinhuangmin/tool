





<?php
	
	session_start();
	$skey = $_SESSION['uid_skey'];
//	if(!$skey&&$_COOKIE['uid_skey']){
//		$skey = $_COOKIE['uid_skey'];
//	}
	//判断是否授权
	if( $skey ){
		echo 1;
	}else{
		echo -1;
	}



	

	
?>