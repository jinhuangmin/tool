<?
error_reporting(E_ALL ^ E_DEPRECATED);
$data=$_POST; //接收POST


if(!empty($data['userName'])){
date_default_timezone_set('PRC');
$time=date('y-m-d H:i:s',time());
$userName=$data['userName'];
$ID=$data['ID'];
$saveObj['time']=$time;
$title='fx_title';
//echo $jsonencode;

//链接数据库
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }
//写入数据
//$value = mysql_real_escape_string($code);


$sql = "SELECT * from user WHERE UserName='$userName'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;
  }
 if($i==1){

$sql2 = "SELECT * from june_linshi WHERE UserName='$userName' and ID='$ID'";
$result2 = mysql_query($sql2);
  $x=0;
while($row2 = mysql_fetch_array($result2))
  {$x=$x+1;  }
if($x>0){ 
 // echo $value;
$gai="update june_linshi set Fx='1' where UserName='$userName' and ID='$ID'  ";
    $res=mysql_query($gai);
    if(!$res){echo 'set fx error'; }else{echo'ok';}
 }else{echo'id null';}

 }else{echo'user null';}

	//关闭链接
mysql_close($con);

}
?>