<?php
$url=isset($_POST['url'])?$_POST['url']:'';
$len=strlen($url);
$rand=rand(10000,99999);
$base=base64_encode('s:'.$len.':"'.$url.'";');
$res='https://tools.ews.m.jaeapp.com/index.php/image/gif.womu.cn_15272'.$rand.'_970x970q50s150.jpg_.webp?key='.$base;
echo $res;
?>