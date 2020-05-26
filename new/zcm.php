<?php 
// 说明：PHP 写的加密函数,支持私人密钥 
// 整理：http://www.111cn.net 
  
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
    return keyED($tmp,$key); 
}   
  
function decrypt($txt,$key) 
{ 
    $txt = keyED($txt,$key); 
    $tmp = ""; 
    for ($i=0;$i<strlen($txt);$i++) 
    { 
        $md5 = substr($txt,$i,1); 
        $i++; 
        $tmp.= (substr($txt,$i,1) ^ $md5); 
    } 
    return $tmp; 
}  
  
$key = "rwer453"; 
$string = "fdsf435";   //要加密的文字
  
// encrypt $string, and store it in $enc_text 
$enc_text = encrypt($string,$key);   //加密
  
// decrypt the encrypted text $enc_text, and store it in $dec_text 
$dec_text = decrypt($enc_text,$key);   //解密  
  
  $enc_textzz = bin2hex($enc_text); //转16
  $enc_textxx= pack("H*",$enc_textzz);//转回去
  
print "加密的 text : $enc_text </Br> ";print "加密的转码 text : $enc_textzz </Br> ";print "加密的转码回去 text : $enc_textxx </Br> ";
print "解密的 text : $dec_text </Br> "; 
?>