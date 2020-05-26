<?php
defined('IN_PHPCMS') or exit('No permission resources.');

class index {
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='12';
		include template('zxnindex', 'index');
	}


}
?>