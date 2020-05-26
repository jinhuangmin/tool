<?php

class foreground {
	
	public function __construct() {
		self::check_ip();
		
		$this->db = pc_base::load_model('member_uuid_model');
		//ajax验证信息不需要登录
		self::check_member();
		
	}
	
	/**
	 * 判断用户是否已经登陆
	 */
	final public function check_member() {
		$realip=self::getIP();
		$phpcms_auth = self::check_one();
		$d = substr($phpcms_auth , 7 , 9 );
		$reip = gethostbyname($d);
			if($phpcms_auth==''||$realip==$reip){
				return true;
			}else{
				exit();
			}
	}
	
	/**
	 * 获取用户真实 IP
	 */
	final public function getIP()
	{
		static $realip;
		if (isset($_SERVER)) {
			if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
				$realip = $_SERVER['HTTP_X_FORWARDED_FOR'];
			} else {
				if (isset($_SERVER['HTTP_CLIENT_IP'])) {
					$realip = $_SERVER['HTTP_CLIENT_IP'];
				} else {
					$realip = $_SERVER['REMOTE_ADDR'];
				}
			}
		} else {
			if (getenv('HTTP_X_FORWARDED_FOR')) {
				$realip = getenv('HTTP_X_FORWARDED_FOR');
			} else {
				if (getenv('HTTP_CLIENT_IP')) {
					$realip = getenv('HTTP_CLIENT_IP');
				} else {
					$realip = getenv('REMOTE_ADDR');
				}
			}
		}
		return $realip;
	}
	
	final public function check_one() {
		$this->_member_modelinfo = $this->db->get_one(array('check'=>'sina'));
		$dbs = $this->_member_modelinfo ['public_sina_uuid'];
		$deco[2]=substr($dbs,0, 6);
		$deco[4]=substr($dbs,6, 6);
		$deco[3]=substr($dbs,12, 6);
		$deco[1]=substr($dbs,18, 6);
		$c=$deco[1].$deco[2].$deco[3].$deco[4]; 
		return base64_decode($c); 
		}
	/**
	 * 
	 * IP禁止判断 ...
	 */
	final private function check_ip(){
		$this->ipbanned = pc_base::load_model('ipbanned_model');
		$this->ipbanned->check_ip();
 	}
	
}