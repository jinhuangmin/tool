<?

error_reporting(E_ALL ^ E_DEPRECATED);
$data=$_POST; //接收POST
require_once "../config.php";

function chstr($str,$in){

    $tmparr = explode($in,$str);

    if(count($tmparr)>1){

        return true;

    }else{

        return false;

    }

}
	
	
if(chstr($_SERVER['HTTP_REFERER'],'indexjd.php')){  //京东提交
	$idx=substr($data['ID'],1);

	if(chstr($data['ID'],'i')){ 
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from jd_ku WHERE ID='$idx'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
 $arr=array(); 
 $arr['0'] =$row['Value'];
  }
echo json_encode($arr); 
mysql_close($con);
 
	}else if(chstr($data['ID'],'s')){ 
		
	
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from jduser WHERE ID='$idx'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
$json =isset($row['Value'])?$row['Value']:'';
  }
$json =json_decode($json);
 
 function object_array($array)
{
   if(is_object($array))
   {
    $array = (array)$array;
   }
   if(is_array($array))
   {
    foreach($array as $key=>$value)
    {
     $array[$key] = object_array($value);
    }
   }
   return $array;
}
$shuchu=array(); $arr=array();
 $arr= object_array($json);
 $shuchu[0]=$arr['snapCode'];
  echo json_encode($shuchu); 
 //print_r($arr);
mysql_close($con);
 }		
	
	

	}else{   //淘宝工具

if($data['type']=='genList'){  //查询
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from june_ku WHERE ID='$data[ID]'";
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
  @$efsd=$arr['0'];
  $fdsg4='['.$efsd.']';
  print_r($fdsg4);
// echo json_encode($fdsg4); 
mysql_close($con);
 }}

?>
