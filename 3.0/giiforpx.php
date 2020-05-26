<?
//php.ini ;extension=php_openssl.dll
$id = $_GET['id'];
$ms = $_GET['ms'];
if(isset($id)){
if($ms==1){$iurl='http://detail.tmall.com/item.htm?id='.$id.'';}
if($ms==2){$iurl='http://item.taobao.com/item.htm?id='.$id.'';}
include '/phpQuery/phpQuery.php'; 
phpQuery::newDocumentFile($iurl); 
$companies = pq('#J_UlThumb li a')->html(); 
phpQuery::$documents = array();
print_r($companies);
}

?>