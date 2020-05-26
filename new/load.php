<?

error_reporting(E_ALL ^ E_DEPRECATED);
$content=$_POST; //接收POST
require_once "../config.php";

@$user=$content['userName'];

if($content['type']=='list'){  //列表
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from june WHERE UserName='$user'";
$result = mysql_query($sql);
  $i=0;
  $arrlist = array();
while($row = mysql_fetch_array($result))
  {
 // $arr[$i]='{"ID":"'.$row['ID'].'","saveName":"'.$row['Title'].'","saveTime":"'.$row['SaveTime'].'","userName":"'.$row['UserName'].'"}';
 // $i++;
 $items = array();
 $items['0']=$row['ID'];
 $items['1']=$row['Title'];
 $items['2']=$row['SaveTime'];
 $items['ID']=$row['ID'];
 $items['saveName']=$row['Title'];
 $items['saveTime']=$row['SaveTime'];
 $arrlist[]=$items;
  }
 echo json_encode($arrlist);
mysql_close($con);
 }

 
 if($content['type']=='tuijian'){  //推荐
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$tuijianuser='admin';
$sql = "SELECT * from june WHERE UserName='$tuijianuser'";
$result = mysql_query($sql);
$i=0;
while($row = mysql_fetch_array($result))
  {
  $arr[$i]='{"ID":"'.$row['ID'].'","saveName":"'.$row['Title'].'","saveTime":"'.$row['SaveTime'].'","userName":"'.$row['UserName'].'"}';
  $i++;
  }
  echo'[';
  for($t=0;$t<count($arr);$t++){
  if($arr[$t]){
   if($t==0){}else{echo',';}
   echo''.$arr[$t].'';
  }}
  echo']';
mysql_close($con);
 }

if($content['type']=='search'){  //查询
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from june WHERE ID='$content[ID]'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
  $jsonencode=$row['Value'];
  $Title=$row['Title'];
  }
 // $jsonencode= stripslashes($jsonencode) ;
echo'['.$jsonencode.',{"title":"'.$Title.'"}]';
mysql_close($con);
 }

 
 if($content['type']=='delete'){  //删除
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "DELETE from june WHERE ID='$content[ID]'";
 if(!mysql_query($sql)){
    $fanhui='[false,"删除失败"]'; }else{ $fanhui='[true,"删除成功"]'; }
	//$file_delete = './userSaveSnap/'.$content['ID'].'.png';
	//unlink($file_delete);
print_r($fanhui);
mysql_close($con);
 }


?>