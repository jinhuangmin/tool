<?

error_reporting(E_ALL ^ E_DEPRECATED);
$content=$_POST; //接收POST

function _POST($str){ 
$val = !empty($_POST[$str]) ? $_POST[$str] : null; 
return $val; 
} 

require_once "../config.php";
	
if(!empty($content['userName'])){

date_default_timezone_set('PRC');
$time=date('y-m-d H:i:s',time());

$userName=$content['userName'];
$title =_POST('saveName');
$sasID = _POST('sasID');
$saveObj=_POST('saveObj');
@$saveObj['snapCode']=$saveObj['actionConfig'];
@$saveObj['actionConfig']=$saveObj['saveName'];
$jsonencode = json_encode($saveObj);

@$width=$content['saveObj']['moduleWidth']; 
@$height=$content['saveObj']['moduleHeight'];
if($width){$width=$width;}else{$width='1920';}
if($height){$height=$height;}else{$height='1';}



//链接数据库
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }
//写入数据
$value = mysql_real_escape_string($jsonencode);
if(@$content['type']=='cover'){  //系统自动保存

$sql = "SELECT * from june WHERE Title='$title' and UserName='$userName'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;
  }
if($i>0){  //如果存在，则覆盖自动保存
$gai="update june set Value='$value',SaveTime='$time',Width='$width',Height='$height' where Title='$title' and UserName='$userName'";
    $res=mysql_query($gai);
    if(!$res){
    $fanhui='[false,"保存失败,请稍候再试..'.mysql_error().'"]'; }else{ $fanhui='[true,"保存成功"]'; }
   }else{ //新写入自动保存
 $xieru="INSERT INTO june (UserName, Title , Width , Height , CreaTime , SaveTime  , Cate  , Value ) VALUES ('$userName', '$title' ,'$width' , '$height' , '$time' , '$time' , '0' ,'$value' )";
 if(!mysql_query($xieru,$con)) { $fanhui='[false,"保存失败,请稍候再试..'.mysql_error().'"]'; } else { $fanhui='[true,"保存成功"]'; }  
   }
   }else{  //普通保存
 //保存条数
$sql = "SELECT * from june WHERE UserName='$userName'";
$result = mysql_query($sql);
  $u=0;
while($row = mysql_fetch_array($result))
  {
  $u=$u+1;
  }
 if($u>100&&$userName!=='admin'){$fanhui='[false,"保存失败，当前用户组最多可以保存100条，请删除一些无用代码后再试"]'; }
 else{
	 
	 
$sql = "SELECT * from june WHERE Title='$title' and UserName='$userName'";
$result = mysql_query($sql);
  $i=0;
while($row = mysql_fetch_array($result))
  {
  $i=$i+1;$row['ID'];
  }
	 
if($i>0){ echo'[false,"already","您已经保存了一份相同名称的存档，是否覆盖该存档？","'.$row['ID'].'"]'; }else{
	 
	 
$xieru="INSERT INTO june (UserName, Title , Width , Height , CreaTime , SaveTime  , Cate  , Value ) VALUES ('$userName', '$title' ,'$width' , '$height' , '$time' , '$time' , '0' ,'$value' )";
 if(!mysql_query($xieru,$con)) { $fanhui='[false,"保存失败,请稍候再试"]'; } else { $fanhui='[true,"保存成功"]'; }
 
 }}
	}
 print_r($fanhui);

//关闭链接
mysql_close($con);

}else{echo'禁止访问';}

?>