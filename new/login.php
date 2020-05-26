<?

error_reporting(E_ALL ^ E_DEPRECATED);
$data=$_POST;
require_once "../config.php";

$username=$data['username'];
$password=$data['password'];

if(!empty($username)&&!empty($username)){
	
	date_default_timezone_set('PRC');
$time=date('y-m-d H:i:s',time());
	
	//链接数据库
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }

//chongfu
$sql = "SELECT * from user WHERE PassWord='$password' and UserName='$username'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;
  }
if($i>0){
$gai="update user set LoadTime='$time' where UserName='$username'";
    $res=mysql_query($gai);
    if(!$res){ }
echo'[true,"'.$username.'","登录成功"]';
	
	
}else{echo'[false,"'.$username.'","用户名或者密码错误,请重新输入"]';}
	
	
	}else{echo'[false,"'.$username.'","用户名或者密码错误,请重新输入"]';}




?>
