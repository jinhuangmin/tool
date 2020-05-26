<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_func('functions','zxn');
pc_base::load_app_func('preview','zxn');
class preview {
	public function __construct() {
		
	}
	
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		
		$html='';$data=$_POST;
		if(isset($_POST)){
		if(isset($_POST['codeObj']) && !empty($_POST['codeObj'])){
			
			$codeObj=$_POST['codeObj'];
			$code=stripslashes($_POST['code']);
			//$code=stripslashes($code);
			if($codeObj!==''){
			$codeObj=stripslashes($codeObj);
			//$codeObj=stripslashes($codeObj);
			$codearr=json_decode($codeObj,true);
			$ttt=$code;
			$youapp=explode('${!',$code);
			if(count($youapp)>1){
			foreach($codearr as $n=>$list){
			$the=$list['appType'];
			$html=getHtml($list);
			$qg=qiege($the,$code);
			$code=$qg['qian'].$html.$qg['hou'];
			}}
			$html= $code;
			}

			}else{
			$code=stripslashes($_POST['code']);
			$html=$code;
			}
		include template('zxn', 'preview');
		}

   }
	

	

}
?>