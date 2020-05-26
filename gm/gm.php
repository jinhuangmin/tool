<?
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
    print_r( $id[1]);
} else {
    echo "";
}


}
?>