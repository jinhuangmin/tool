<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_func('functions','zxn');
class thr {
	public function __construct() {
		
	}
	
	public function init () {
			$all='';
	if($_POST['codeObj'][0]['appType']!==''){
		
		$code=$_POST['codeObj'];
		foreach($code as $n=>$list){
		$html=getHtml($list);
		$html=myTrim($html);
		$fgf=$n==0?'':'${!|}';
		$all=$all.$fgf.$html;
		}
		print_r($all);
	}
	}
	

}
?>