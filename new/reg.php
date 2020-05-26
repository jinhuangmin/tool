<?
$data=$_POST;

$username=$data['username'];
$password=$data['password'];
$license=$data['license'];


// 说明：PHP 写的加密函数,支持私人密钥 
  
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
$string = "fdsf435";  //要加密的文字

//$enc_text = encrypt($string,$key);   //加密
//$dec_text = decrypt($enc_text,$key);   //解密  
//$enc_textzz = bin2hex($enc_text); //转16
//$enc_textxx= pack("H*",$enc_textzz);//转回去
// 说明：PHP 写的加密函数,支持私人密钥 

$jmzz= pack("H*",$license);
$jiemi=decrypt($jmzz,$key);

if($jiemi=='fdsf435'&&!empty($username)&&!empty($username)){
	
	date_default_timezone_set('PRC');
$time=date('y-m-d H:i:s',time());
	
	//链接数据库
$con=mysql_connect("qdm121543520.my3w.com", "qdm121543520","liuyang2013w"); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db("qdm121543520_db", $con); if (!mysql_select_db("qdm121543520_db", $con))  {  die('Could not connect: ' . mysql_error());  }

//chongfu
$sql = "SELECT * from user WHERE UserName='$username'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;
  }
if($i==0){

//zhucema
$sql = "SELECT * from user WHERE zhucema='$license'";
$result = mysql_query($sql);
  $k=0;
while($row = mysql_fetch_array($result))
  {
  $k=$k+1;
  }
if($k<8){

$IP=$_SERVER["REMOTE_ADDR"];
//写入数据
$username = mysql_real_escape_string($username); 
$password = mysql_real_escape_string($password);
	 




$xieru="INSERT INTO user (UserName, PassWord , CreaTime , LoadTime , ShopName , Cang , CreaIP , zhucema ) VALUES ('$username', '$password' ,'$time' , '' , '$shopname' , '' , '$IP' , '$license' )";
 if(!mysql_query($xieru,$con)) { $fanhui='["保存失败,请稍候再试..'.mysql_error().'"]'; } else { $fanhui='["注册成功，可以登录了"]'; }	 
	 
	print_r($fanhui); 
mysql_close($con);		

}else{echo'注册码使用次数过多,请联系客服索要新码';}
	
}else{echo'用户名('.$username.')已经被注册了';}
	
	
	}else{echo'错误：注册码输入错误！';}




?>