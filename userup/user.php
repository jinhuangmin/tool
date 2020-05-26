<?
error_reporting(E_ALL ^ E_NOTICE); 
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
$key = "Gu9N"; $string='gNo';
$config=array();
$config['sql_host']="localhost";
$config['sql_user']="root";
$config['sql_pass']="root";
$config['sql_data']="zxnwm";

	//链接数据库
//$con = mysqli_connect($config['sql_host'], $config['sql_user'], $config['sql_pass'], $config['sql_data']);
$con=@mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
@mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }

//chongfu
$sql = "SELECT * from v9_old2user";
$result = mysql_query($sql);
  $i=0;$fanhui='';
while($row = mysql_fetch_array($result))
  {
$ruten='';
$ruten=$row;
//$ruten['license'] = encrypt($string,$key); zhucema
$ruten['license'] = $row['zhucema']; 
	  $emls=time();
$ruten['email']='x'.$row['ID'].'@fjs.com';
$fanhui[]=$ruten;
  $i=$i+1;
  }
  
  header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui)); 
?>