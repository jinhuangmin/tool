<?php    
 //参数images为图片的绝对地址     
 function getImagesInfo($images) {       
 $img_info = getimagesize($images);        
 switch ($img_info['2']){        
 case 1:        
  $imgtype = "gif";        
  break;        
  case 2:        
 $imgtype = "jpg";        
 break;        
 case 3:        
 $imgtype = "png";        
 break;  
  default:
  $imgtype = "png";  
  break;      
 }        
 $img_type = $imgtype;        
 //获取文件大小     
// $img_size = ceil(filesize($images)/1000)."k";         
 $new_img_info = array (        
 "width"=>$img_info['0'], //图像宽     
 "height"=>$img_info['1'], //图像高     
 "type"=>$img_type, //图像类型     
 "size"=>$img_size //图像大小     
 );       
 return $new_img_info;        
 }
$images=$_POST; 
$piclink=$images;
$info= getImagesInfo($piclink);
$ruten =array();
$ruten['0']=$info["width"];
$ruten['1']=$info["height"];
$ruten['2']='2';
$ruten['3']='width='.$info["width"].'';
$ruten['4']='height='.$info["height"].'';
$ruten['bits']='8';
$ruten['channels']='3';
$ruten['mime']='image/'.$imgtype.'';

 echo json_encode($ruten); 
 ?>  