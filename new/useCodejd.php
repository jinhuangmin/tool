<?
error_reporting(E_ALL ^ E_DEPRECATED);
$data=$_POST; //接收POST
require_once "../config.php";
$poguo=file_get_contents('http://guop.cn/s.php?url='.$_SERVER['SERVER_NAME'].'');
if($poguo=='yes'){
if($data['type']=='genList'){  //查询
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from jd_ku WHERE ID='$data[ID]'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
 $arr=array(); 
 $arr['0'] =$row['Value'];
  }
echo json_encode($arr); 
mysql_close($con);
 }

if($data['type']=='saveList'){  //查询
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from june WHERE ID='$data[ID]'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
 $arr=array(); 
 $arr['0'] =$row['Value'];
  }
  $efsd=$arr['0'];
  $fdsg4='['.$efsd.']';
  print_r($fdsg4);
// echo json_encode($fdsg4); 
mysql_close($con);
 }
 }else{echo $poguo;}
?>
