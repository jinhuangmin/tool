<?php
defined('IN_PHPCMS') or exit('No permission resources.');

class index {
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		include template('zxd', 'index');
	}
	
	public function index () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		include template('zxnindex', 'indexjd');
	}
	
	public function parts () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$act=$_GET['act'];
		include template('zxd', $act);
	}

}
?>