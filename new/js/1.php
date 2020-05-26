<?


require_once "../../config.php";

	//链接数据库
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']); if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
//连接db
mysql_select_db($config['sql_data'], $con); if (!mysql_select_db($config['sql_data'], $con))  {  die('Could not connect: ' . mysql_error());  }


$dbfile =  'guopcn_style.sql';	
			if(file_exists(PHPCMS_PATH."new2/js/".$dbfile)) {
				$sql = file_get_contents(PHPCMS_PATH."new2/js/".$dbfile);
			_sql_execute($sql);
			}else {
				echo '3';//数据库文件不存在
			}		







?>