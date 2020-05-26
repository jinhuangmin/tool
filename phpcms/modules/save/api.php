<?php
@ini_set('max_input_vars','50000');
defined('IN_PHPCMS') or exit('No permission resources.');

class api{
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
	//	include template('save', 'list');
	}
	
	

public function insertcode () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if (isset($_POST['username'])&&$_POST['username']!==''&&$_username==$_POST['username']&&isset($_POST['code'])&&$_POST['code']!=='') {
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		if($_POST['shareType']=='1'){
		date_default_timezone_set('PRC');
		$userName=$_username;
		$code=$_POST['code'];
		$time=time();
		$title='fx_title';
		$fx='0';
		$v=$_GET['v']?$_GET['v']:'3';
		$rnum=$zxn_linshi_db->select(array('UserName'=>$_username,'Fx'=>0),'*','','ID DESC');
		if(count($rnum)>19){  
		for($i=9;$i<count($rnum);$i++){
		  $delete=$zxn_linshi_db->delete(array('UserName'=>$_username,'ID'=>$rnum[$i]['ID']));
			}
		 }
		$inid=$zxn_linshi_db->insert(array('UserName'=>$_username,'Title'=>$title,'shareType'=>$_POST['shareType'],'Value'=>$code,'CreaTime'=>$time,'Fx'=>0,'version'=>$v),true);
		echo $inid;
	    }}
	}	
	
public function getsnap () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if (isset($_POST['ID'])&&$_username!=='') {
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$rnum=$zxn_linshi_db->select(array('UserName'=>$_username,'Fx'=>1),'*','','ID DESC');
		if(count($rnum)>30){  
		for($i=10;$i<count($rnum);$i++){
		  $delete=$zxn_linshi_db->delete(array('UserName'=>$_username,'ID'=>$rnum[$i]['ID']));
			}
		 }
		$r=$zxn_linshi_db->select(array('UserName'=>$_username,'ID'=>$_POST['ID']));
		if($r){
		$update=$zxn_linshi_db->update(array('Fx'=>1),array('UserName'=>$_username,'ID'=>$_POST['ID']));	
		if(!$update){echo 'set fx error'; }else{echo'ok';}
		  }
	    }
	}

}
?>