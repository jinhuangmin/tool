
<?php
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
	
	if(preg_match("/ownerid=\w+/i",$contents,$matches)){
	 $ids=explode("=",$matches[0]);
		 $data = array (
	      "shopId" => "$id[1]","ownerid" => "$ids[1]"
		);
		echo json_encode($data);
	}else if(preg_match("/sellerid=\w+/i",$contents,$matches)){
		$ids=explode("=",$matches[0]);
				 $data = array (
			      "shopId" => "$id[1]","ownerid" => "$ids[1]"
				);
				echo json_encode($data);
	}
  
} else {
    echo "";
}


}
?>