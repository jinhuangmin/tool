<?
error_reporting(E_ALL ^ E_DEPRECATED);
require_once "../config.php";
extract($_POST);
if(isset($username)&&$username==$config['ht_admin']&&!empty($styletext)&&!empty($stylecode)&&!empty($stylecode1)&&!empty($styleurl)){
	//链接数据库
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }

//chongfu
$sql = "SELECT * from guopcn_style WHERE styletext='$styletext' AND styletype='$styletype'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;
  }
if($i==0){
$stylecode = mysql_real_escape_string($stylecode);
$stylecode1 = mysql_real_escape_string($stylecode1);
$xieru="INSERT INTO guopcn_style ( username , styletext , styleurl , styletype , stylePower , styleExam , stylecode , stylecode1 ) VALUES ('$username', '$styletext' ,'$styleurl' , '$styletype' , '$stylePower' , '$styleExam' ,'$stylecode' , '$stylecode1' )";
 if(!mysql_query($xieru,$con)) { $fanhui='["保存失败,请稍候再试..'.mysql_error().'"]'; } else { $fanhui='[true,"成功"]'; }	 
	 
	print_r($fanhui); 
		
mysql_close($con);
	
}else{
	//echo'[false,"名称重复"]';
	
if($stylePower==2){echo'[false,"名称重复"]';}else{
	
	$gai="update guopcn_style set stylecode='$stylecode',stylecode='$stylecode',styleurl='$styleurl' where styletext='$styletext' and styletype='$styletype'";
    $res=mysql_query($gai);
    if(!$res){ echo'[false,"覆盖失败,请稍候再试..'.mysql_error().'"]'; }else{ echo'[true,"覆盖('.$styletext.')成功"]'; }
	
	}	
	
	
	}


	
	}else{echo'[false,"仅管理员可添加,数据格式必须正确"]';}


?>