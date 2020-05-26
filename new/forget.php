<?
error_reporting(E_ALL ^ E_DEPRECATED);
$data=$_POST;

$userName=$data['username'];
$email=$data['qq'].'@qq.com';
$password=$data['password'];
$password2=$data['password2'];
$license=$data['license'];

function password($password, $encrypt='') {
  $pwd = array();
  $pwd['encrypt'] = $encrypt ? $encrypt : create_randomstr();
  $pwd['password'] = md5(md5(trim($password)).$pwd['encrypt']);
  return $encrypt ? $pwd['password'] : $pwd;
}
function create_randomstr($lenth = 6) {
  return random($lenth, '123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ');
}
function random($length, $chars = '0123456789') {
  $hash = '';
  $max = strlen($chars) - 1;
  mt_srand();
  for($i = 0; $i < $length; $i++) {
    $hash .= $chars[mt_rand(0, $max)];
  }
  return $hash;
}

  if(!empty($data)){
    if(!empty($password)&&($password==$password2)){
     
      $config=array();
      $config['ser_host']="xxx.com";
      $config['sql_host']="qdm121543520.my3w.com";
      $config['sql_user']="qdm121543520";
      $config['sql_pass']="liuyang2013w";
      $config['sql_data']="qdm121543520_db";
      $config['ht_admin']="admin";
      $config['ht_adminpass']="222333";

      $con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
      if (!$con)  {  die('Could not connect: ' . mysql_error());  }
      mysql_query("SET NAMES UTF8");
      mysql_query("set character_set_client=utf8"); 
      mysql_query("set character_set_results=utf8");
      mysql_select_db($config['sql_data'], $con);
      if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }

      $sql = "SELECT * from v9_member WHERE email='$email' and username='$userName'";
      $result = mysql_query($sql);
      $i=0;
      while($row = mysql_fetch_array($result)){
        $i=$i+1;
      }
      
      if($i>0){
        $encrypt=create_randomstr($lenth = 6);
        $pad=password($password, $encrypt);


        $gai="update v9_sso_members set password='$pad',random='$encrypt' WHERE email='$email' and username='$userName'";
        $res=mysql_query($gai);

        if(!$res){
          echo'保存失败,请稍候再试'; 
        }else{  
          echo'密码修改成功,请返回登录'; 
        }    
      }else{echo'错误：QQ与用户名不匹配！';}
    }else{echo'错误：两次密码输入不一致！';} 
  }

?>