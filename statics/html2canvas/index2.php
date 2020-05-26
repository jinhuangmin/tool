<?

$html='<div class="rel" data-title="power by guop.cn" style="position:relative;overflow:hidden;width:1920px;height:908px;line-height:normal;margin-left:50%;left:-960px;" data-rn="asCyK"><div class="jspb abs imghover  trans05s   aTzar-h3Ch u-e u-c u-d" data-appid="aTzar-h3Ch" style="-webkit-transition: 0.5s ease-in;-moz-transition: 0.5s ease-in;-o-transition: 0.5s ease-in;transition: 0.5s ease-in;overflow:hidden;background:url(https://img.alicdn.com/imgextra/i1/39767794/TB2EBpphpXXXXX_XpXXXXXXXXXX-39767794.jpg) 50% 50% no-repeat;width:1920px;height:908px;top:0px;left:0px;z-index:10;"><a href="#" target="_blank" class="jspcb abs imghover june-box-fadein trans05s     asCyK-KsbV" data-appid="asCyK-KsbV" style="-webkit-transition: 0.8s ease-in;-moz-transition: 0.8s ease-in;-o-transition: 0.8s ease-in;transition: 0.8s ease-in;overflow:hidden;background:url(https://img.alicdn.com/imgextra/i2/39767794/TB2FHBchpXXXXc4XpXXXXXXXXXX-39767794.jpg) 50% 50% no-repeat;width:1920px;height:908px;top:0px;left:0px;z-index:10;" data-jspbType="imgContent"><img class="abs" style="width:1920px;height:908px;display:none;"  /></a><div class="abs pspe e-2" style="width:1440px;height:344px;top:200px;left:151px;z-index:10;"><div class="c-2 c-21 outbox  " data-x=";" style="-webkit-transition: 0.7s cubic-bezier(0,0,0.1,1);-moz-transition: 0.7s cubic-bezier(0,0,0.1,1);-o-transition: 0.7s cubic-bezier(0,0,0.1,1);transition: 0.7s cubic-bezier(0,0,0.1,1);float:right;"><div class="rel" style="width:100%;height:100%;float:right;"><div class="jspcb rel imghover june-box-fadein trans05s     asCyK-NaG9" data-appid="asCyK-NaG9" style="-webkit-transition: 0.7s cubic-bezier(0,0,0.1,1);-moz-transition: 0.7s cubic-bezier(0,0,0.1,1);-o-transition: 0.7s cubic-bezier(0,0,0.1,1);transition: 0.7s cubic-bezier(0,0,0.1,1);overflow:hidden;width:1440px;height:344px;top:0;left:0;z-index:10;float:right;" data-jspbType="customContent"><div class="rel" style="position:relative;overflow:hidden;width:1440px;height:344px;background: url(https://img.alicdn.com/imgextra/i1/39767794/TB2LbBehpXXXXc.XpXXXXXXXXXX-39767794.png) 50% 0% repeat scroll;opacity: 1.0;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);line-height:normal;" data-rn="aL1nM"><a class="jdb abs aL1nM-nLBv     " href="#" target="_blank" style="outline:none;display:block;width:565px;height:344px;top:0px;left:0px;z-index:10;" data-linkmode="ptlink" data-appid="aL1nM-nLBv"></a><a class="jdb abs aL1nM-ZEjk     " href="#" target="_blank" style="outline:none;display:block;width:491px;height:344px;top:0px;left:571px;z-index:10;" data-linkmode="ptlink" data-appid="aL1nM-ZEjk"></a><a class="jdb abs aL1nM-E118     " href="#" target="_blank" style="outline:none;display:block;width:366px;height:344px;top:0px;left:1074px;z-index:10;" data-linkmode="ptlink" data-appid="aL1nM-E118"></a></div></div></div></div></div><a class="abs" href="#" target="_blank" style="width:1920px;height:908px;display:block;top:0px;left:0px;"></a></div></div>';

$SavePicName='';
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
  
function delpic($img){
$file = ''.$img.''; 
$result = @unlink ($file); 
if ($result == false) { 
return '[图片删除]'; 
} else { 
return '[图片无法删除,地址:'.$img.',手工删吧]'; 
} 
}



	
	$q0= explode("background",$html);
	$num1=count($q0)-1;
	for($i=1;$i<=$num1;$i++){
		$q1= explode(";",$q0[$i]);
		$q2= explode("(",$q1[0]);
		if(count($q2)>1){
			$q3= explode(")",$q2[1]);
			 $bgimg =str_replace('"','',$q3); 
			 $img[]=$bgimg;
	$dbzb=substr($bgimg,0,4);
	if($dbzb=='http'){
		$SavePicName='';
		$SavePicName=get_photo($bgimg,'','../linshi/fxhc/');
		$name[]=$SavePicName;
		$html =str_replace($bgimg,$SavePicName,$html); 
		}

			}
		}

	$w0= explode("<img",$html);
	$num2=count($w0)-1;
	for($i=1;$i<=$num2;$i++){
		$w1= explode(">",$w0[$i]);
		$w2= explode('src="',$w1[0]);
		$w3= explode('"',$w2[1]);
		$imgpic=$w3[0];
		$img[]=$imgpic;
	    $dbzb=substr($imgpic,0,4);
	if($dbzb=='http'){
		$SavePicName='';
		$SavePicName=get_photo($imgpic,'','../linshi/fxhc/');
		$name[]=$SavePicName;
		$html =str_replace($imgpic,$SavePicName,$html); 
		}
 	}
print_r($name);

 
 ?>