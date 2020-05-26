<?

error_reporting(E_ALL ^ E_DEPRECATED);
$data=$_POST; //接收POST
require_once "../config.php";

if(!empty($data['username'])&&$data['shareType']=='1'&&1==1){
date_default_timezone_set('PRC');
$time=date('y-m-d H:i:s',time());
$userName=$data['username'];
$code=$data['code'];
$saveObj['time']=$time;
$title='fx_title';
$fx='0';	
//echo $jsonencode;

//链接数据库
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }
//写入数据
$value = mysql_real_escape_string($code);


$sql = "SELECT * from user WHERE UserName='$userName'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;
  }
 if($i==1){

$sql2 = "SELECT * from june_linshi WHERE UserName='$userName' and Title='$title' and Fx='0'  ";
$result2 = mysql_query($sql2);
  $x=0;
while($row2 = mysql_fetch_array($result2))
  {
  $x=$x+1;
  }
if($x>0){ 
 // echo $value;
$gai="update june_linshi set Value='$value',SaveTime='$time' where UserName='$userName' and Title='$title' and Fx='0'  ";
    $res=mysql_query($gai);
    if(!$res){
   $sql3 = "SELECT * from june_linshi WHERE UserName='$userName' and Title='$title' and Fx='0'  ";
$result3 = mysql_query($sql3);
while($row3 = mysql_fetch_array($result3))
  {
  $FID=$row3['ID'];
  }
  echo $FID;
 }
 }
if($x==0){
$xieru="INSERT INTO june_linshi (UserName, Title , CreaTime , Value ,Fx) VALUES ('$userName', '$title' ,'$time' ,'$value' ,'$fx' )";

 if(!mysql_query($xieru,$con)) {  } else {

$sql3 = "SELECT * from june_linshi WHERE UserName='$userName' and Title='$title' and Fx='0'  ";
$result3 = mysql_query($sql3);
while($row3 = mysql_fetch_array($result3))
  {
  $FID=$row3['ID'];
  }
echo $FID;
 }
}
 }
if($i==0){ 

 } 
	
	//关闭链接
mysql_close($con);

}
  ?>