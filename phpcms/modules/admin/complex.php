<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_class('admin','admin',0);
pc_base::load_app_func('global','admin');
class complex extends admin {
	public function __construct() {
		parent::__construct();
		$this->db = pc_base::load_model('admin_model');
		$this->menu_db = pc_base::load_model('menu_model');
		$this->panel_db = pc_base::load_model('admin_panel_model');
	}
	
	public function init () {
		$userid = $_SESSION['userid'];
		$admin_username = param::get_cookie('admin_username');
		$roles = getcache('role','commons');
		$rolename = $roles[$_SESSION['roleid']];
		$site = pc_base::load_app_class('sites');
		$sitelist = $site->get_list($_SESSION['roleid']);
		$currentsite = $this->get_siteinfo(param::get_cookie('siteid'));
		/*管理员收藏栏*/
		$adminpanel = $this->panel_db->select(array('userid'=>$userid), "*",20 , 'datetime');
		$site_model = param::get_cookie('site_model');
		include $this->admin_tpl('index');
	}
	
	public function updata () {
		$userid = $_SESSION['userid'];
		$admin_username = param::get_cookie('admin_username');
		$versions_url='./caches/configs/';
		$versions_var = $configs_url.'versions.php';
		$time=time();
		$version = include PHPCMS_PATH.'caches/configs/versions.php';
		$time2=date('Y-m-d H:i:s', $version['version_time']); 
		include $this->admin_tpl('admin_up');
	}
	
	public function upov () {

		  $versions_url=APP_PATH.'caches/configs/';
		  $versions_var = $configs_url.'versions.php';
		  $config_file='./caches/configs/versions.php';
		  $config_strings="<?php\n";   
		  $config_strings.="return array(\n";   
		  $config_strings.="'version' => '".$_POST['svn']."',\n";    
		  $config_strings.="'version_time' => '".$_POST['svnt']."',\n";  
		  $config_strings.=");\n";  
		  $config_strings.="?>"; 
		  $fp=fopen($config_file,"wb");
		  fwrite($fp,$config_strings);   
		  fclose($fp); 
		$fanhui[0]='ok';
		header('Content-Type:application/json;charset=utf-8');
		echo json_encode($fanhui);
	}
	
	
	public function chk () {
		$bb='';
		$datas=$_POST['data'];
		foreach($datas['data'] as $list){
			$lj=explode("./",$list['file']);
		$versions_url=APP_PATH.$lj[1];
		if(!remote_file_exists($versions_url)) {
		$bb[]=$list['id'];
			}else{
		$c = getLine($list['file'], 1);
		$c = str_replace('\n"', '', $c);
		$c = str_replace('\r"', '', $c);
		$c = str_replace('\t"', '', $c);
		$c0=explode("version=",$c);
		$c1=explode(";",$c0[1]);
		$cc=$c1[0];
		if($cc==''||!is_numeric($cc)||$cc<$list['vsn']){$bb[]=$list['id'];}
			}
		}
		print json_encode($bb); 
	}

	function wdt(){
		$pddta=$_POST['updata'];
 if($pddta['t']=='x'){
	$config_file=$pddta['f'];    
	$config_strings="<!--version=".$pddta['vsn'].";--->\n";
	$code=stripslashes($pddta['w']);
	$config_strings.=$code;   
	$fp=fopen($config_file,"wb");   
	fwrite($fp,$config_strings);   
	fclose($fp);  
		}
  if($pddta['t']=='s'){
	$config_file=$pddta['f'];    
	if(!unlink($config_file)){ 
		$config_strings='';  
		$fp=fopen($config_file,"wb");   
		fwrite($fp,$config_strings);   
		fclose($fp);  
		}else{
		echo 'ok';
		}
	}

	}
	
	public function yldata () {
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_ku_x_db = pc_base::load_model('zxn_ku_x_model');
		$rows=$zxn_ku_x_db->select('');$print='ok';
		foreach($rows as $r){
		  $mu=$zxn_ku_tb_db->get_one(array('YuanPic'=>$r['YuanPic']));
		  if(!$mu){
			  $value = addslashes($r['Value']);
			 $xie=$zxn_ku_tb_db->insert(array('UserName'=>$r['UserName'],'Title'=>$r['Title'],'Width'=>$r['Width'],'Height'=>$r['Height'],'CreaTime'=>$r['CreaTime'],'Cate'=>$r['Cate'],'Value'=>$value,'cj'=>$r['cj'],'version'=>$r['version'],'Pic'=>$r['Pic'],'YuanPic'=>$r['YuanPic'],'Diy'=>$r['Diy']),true); 
		  if(!$xie){$print='no';}
			  }
			}
		echo $print;

	}	


}
?>