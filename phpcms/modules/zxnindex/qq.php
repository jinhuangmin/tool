<?php
defined('IN_PHPCMS') or exit('No permission resources.');

class index {
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$zxn_olduser_db = pc_base::load_model('zxn_olduser_model');
		if(1==1){
			if($_POST['alld']=='alld'){
				$arrlist=$zxn_olduser_db->select('');
				$all['data']=$arrlist;
				$all['num']=count($arrlist);
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($ruten));
				}else{
		include template('zxnindex', 'qq');			
					
					}

			}
	}


}
?>