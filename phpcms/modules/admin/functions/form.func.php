<?php

function get_photo($url,$filename='',$savefile='/show/tbimg/')   
{     
    $ls=rand(10000,99999); 
	$imgArr = array('gif','bmp','png','ico','jpg','jepg');  
    if(!$url) {$fanhui=false;};  
    if(!$filename) {
      $t1=explode('.',$url);
	  $t2=end($t1);
	  $ext=strtolower($t2);     
      if(!in_array($ext,$imgArr)) {$fanhui=0;}; 
      $filename=date("dMYHis").$ls.'.'.$ext;     
    }     
    if(!is_dir($savefile)){ mkdir($savefile, 0777);};  
    if(!is_readable($savefile)){ chmod($savefile, 0777);};  
    $filename = $savefile.$filename;  
    ob_start();     
    readfile($url);     
    $img = ob_get_contents();     
    ob_end_clean();     
    $size = strlen($img);     
    $fp2=@fopen($filename, "a");     
    if(!fwrite($fp2,$img)){$fanhui=false;}else{$fanhui=$filename;}  
    fclose($fp2);
    return $fanhui;
 }  

//宽度返回
function HtmlWidth($data){
	$mark='';
 if($data){
 $q1=explode('">',$data);
 $q2=explode('style="',$q1[0]);
 $q3=explode(';',$q2[1]);
foreach ($q3 as $k =>$v) {
    if (strpos($v, 'width') !== false) {
      $x1=explode(':',$v);$x2=explode('px',$x1[1]);$xx=$x2[0];
    }
}
foreach ($q3 as $k =>$v) {
    if (strpos($v, 'height') !== false) {
      $h1=explode(':',$v);$h2=explode('px',$h1[1]);$hh=$h2[0];
    }
}
$fff['w']=$xx;
$fff['h']=$hh;
 }
 return $fff;
	}


function deldir($dir){
$dh=opendir($dir);
while ($file=readdir($dh)) 
{
if($file!="." && $file!="..") 
{
$fullpath=$dir."/".$file;

if(!is_dir($fullpath))
{
unlink($fullpath);
} 
else
{
deldir($fullpath);
}
}
}

closedir($dh);

}	

function delpic($img){
$file = ''.$img.''; 
$result = @unlink ($file); 
if ($result == false) { 
return '[图片删除]'; 
} else { 
return '[图片无法删除,地址:'.$img.',手工删吧]'; 
} 
}
	
function hColor2RGB($hexColor) {
$color = str_replace('#', '', $hexColor);
if (strlen($color) > 3) {
$rgb = array(
'r' => hexdec(substr($color, 0, 2)),
'g' => hexdec(substr($color, 2, 2)),
'b' => hexdec(substr($color, 4, 2))
);
} else {
$color = str_replace('#', '', $hexColor);
$r = substr($color, 0, 1) . substr($color, 0, 1);
$g = substr($color, 1, 1) . substr($color, 1, 1);
$b = substr($color, 2, 1) . substr($color, 2, 1);
$rgb = array(
'r' => hexdec($r),
'g' => hexdec($g),
'b' => hexdec($b)
);
}
return $rgb;
}



function getImageInfo($img) { //$img为图象文件绝对路径 
$img_info = getimagesize($img); 
switch ($img_info[2]) { 
case 1: 
$imgtype = 1; 
break; 
case 2: 
$imgtype = 2; 
break; 
case 3: 
$imgtype = 3; 
break; 
} 
$img_type = $imgtype."图像"; 
$img_size = ceil(filesize($img)/1000)."k"; //获取文件大小 

$new_img_info = array ( 
"width"=>$img_info[0], 
"height"=>$img_info[1], 
"type"=>$img_type, 
"size"=>$img_size 
); 

return $new_img_info; 
} 


?>