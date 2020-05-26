<?php


function keyED($txt,$encrypt_key) 
{ 
    $encrypt_key = md5($encrypt_key); 
    $ctr=0; 
    $tmp = ""; 
    for ($i=0;$i<strlen($txt);$i++) 
    { 
        if ($ctr==strlen($encrypt_key)) $ctr=0; 
        $tmp.= substr($txt,$i,1) ^ substr($encrypt_key,$ctr,1); 
        $ctr++; 
    } 
    return $tmp; 
}   
  
function encrypt($txt,$key) 
{ 
    srand((double)microtime()*1000000); 
    $encrypt_key = md5(rand(0,32000)); 
    $ctr=0; 
    $tmp = ""; 
    for ($i=0;$i<strlen($txt);$i++) 
    { 
        if ($ctr==strlen($encrypt_key)) $ctr=0; 
        $tmp.= substr($encrypt_key,$ctr,1) . (substr($txt,$i,1) ^ substr($encrypt_key,$ctr,1)); 
        $ctr++; 
    } 
	$jm=keyED($tmp,$key);
	$enc_textzz = bin2hex($jm);
    return $enc_textzz; 
}   
  
function decrypt($jtxt,$key) 
{ 
   $jytxt= pack("H*",$jtxt);
    $txt = keyED($jytxt,$key); 
    $tmp = ""; 
    for ($i=0;$i<strlen($txt);$i++) 
    { 
        $md5 = substr($txt,$i,1); 
        $i++; 
        $tmp.= (substr($txt,$i,1) ^ $md5); 
    } 
    return $tmp; 
}  
//$key = "daker3fs5"; 
//$string = str_replace('.',"v",$_SERVER['HTTP_HOST']);   //要加密的文字
//$enc_text = encrypt($string,$key);   //加密
//$dec_text = decrypt($enc_text,$key);   //解密  

?>