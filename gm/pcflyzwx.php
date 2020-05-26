
<?php
// $url=isset($_POST['url'])?$_POST['url']:'';
// if($url){
// $handle = fopen ($url, "rb"); 
// $contents = ""; 
// do { 
// $data = fread($handle, 1024); 
// if (strlen($data) == 0) {
// break; 
// } 
// $contents .= $data; 
// } while(true); 
// fclose ($handle); 

// if (preg_match("/shopId=\d+/i",$contents,$matches)) {
// 	$id=explode("=",$matches[0]);
//    $data = array (
//       "shopId" => "$id[1]"
// 	);
// 	echo json_encode($data);
// } else {
//     echo "";
// }


// }

$url=isset($_POST['url'])?$_POST['url']:'';
if($url){
$handle = fopen ($url, "rb"); 
$contents = ""; 
do { 
$data = fread($handle, 1024); 
if (strlen($data) == 0) {

break; 
} 
$contents .= $data; 
} while(true); 
fclose ($handle); 

if (preg_match("/shopId=\d+/i",$contents,$matches)) {
	$id=explode("=",$matches[0]);

	
	if(preg_match("/catId=\w+/",$contents,$matches)){
	 $ids=explode("=",$matches[0]);
	 preg_match("/scid=\w+/",$contents,$matches);
	  $sid=explode("=",$matches[0]);
		 $data = array (
	      "shopId" => "$id[1]","catid" => "$ids[1]","scid" => "$sid[1]"
		);
		echo json_encode($data);
	}else{
		$data = array (
	      "shopId" => "$id[1]","catid" => "","scid" => ""
		);
		echo json_encode($data);
	}
  
} else {
    echo "";
}


}

?>
