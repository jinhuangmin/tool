<?php

function muluchildren ($fuid,$open=0,$checked=0) {
		$_username = param::get_cookie('_username');
		$zxn_user_mulu_db = pc_base::load_model('zxn_user_mulu_model');
		$mululist=$zxn_user_mulu_db->select(array('UserName'=>$_username,'fu'=>$fuid));
		$ctzh=array();$ctall=array();
		foreach($mululist as $item){
			$ctzh['fid']=$item['dangqian'];
			$ctzh['name']=$item['name'];
			if($open==1){$ctzh['open']=true;}
			if($checked==1){$ctzh['checked']=true;}
			$ctzh['isParent']=true;
			$ctzh['children']=array();
			$ctzh['children']=muluchildren($item['dangqian']);
			$ctall[]=$ctzh;
			}
		 return $ctall;
	}
	
function mulujson ($fu) {
		$_username = param::get_cookie('_username');
		$fuid=!empty($fu)?''.$fu.'':'x';
		$zxn_user_mulu_db = pc_base::load_model('zxn_user_mulu_model');
		$muluinfo=$zxn_user_mulu_db->get_one(array('UserName'=>$_username,'fu'=>$fuid));
		$ctzh['fid']=$muluinfo['dangqian'];
		$ctzh['name']=$muluinfo['name'];
		$ctzh['open']=true;
		$ctzh['checked']=true;
		$ctzh['isParent']=true;
		$ctzh['children']=array();
		$ctzh['children']=muluchildren($muluinfo['dangqian']);
			
		return json_encode($ctzh);
	}
	





?>