<?php
defined('IN_PHPCMS') or exit('No permission resources.');

class index {
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		include template('zxo', 'index');
	}
	
		
	public function zxd () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		include template('zxd', 'index');
	}
	
	public function tyarea () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='16';
		include template('zxnindex', 'tyarea');
	}
	
	
	public function tyrdview () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='16';
		 if(get_magic_quotes_gpc()){   //如果get_magic_quotes_gpc()是打开的 
     $area=stripslashes($_POST['data']);  //将字符串进行处理 
 		} 
		include template('zxnindex', 'tyrdview');
	}
	
	
	public function banner () {
		$zxn_banner_db = pc_base::load_model('zxn_banner_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$star='{"bg":"1b1a20","pic":"","width":950,"height":120,"fonts":[{"size":"40","font":"方正正纤黑简体","color":"ffffff","style":"0","text":"双击编辑标题文字","left":243.5,"top":14,"order":0},{"size":"13","font":"微软雅黑","color":"ffffff","style":"0","text":"这里是副标题 双击编辑","left":379,"top":77,"order":1}]}';
		$title='标题文字 点击编辑';
		if(isset($_GET['act'])&&!empty($_GET['act'])){
		   $row=$zxn_banner_db->get_one(array('id'=>$_GET['act']));
		   $star=$row['val'];
		   $title=$row['title'];
			}
		$catid='13';
		include template('banner', 'index');
	}
	

	public function phone () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='13';
		include template('zxnphone', 'index');
	}
	
	public function gdbg () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='13';
		include template('zxnindex', 'gdbg');
	}
	
	public function nav () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='13';
		include template('zxnindex', 'nav');
	}
	
	public function gm () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='13';
		include template('zxnindex', 'gm');
	}
	
	public function webps () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		include template('zxnindex', 'ps');
	}
	
	public function color () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='13';
		include template('zxnindex', 'color');
	}
	
	public function parts () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$act=$_GET['act'];
		include template('zxo', $act);
	}
	
	public function dz () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='13';
		include template('banner', 'dz');
	}
	
	public function dzn () {
		$zxn_banner_db = pc_base::load_model('zxn_banner_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
//	$arrlist=$zxn_ku_tb_db->listinfo($where = '', $order = '', $page = 1, $pagesize = 20, $key='', $setpages = 10,$urlrule = '',$array = array(), $data = '*');
	$numrows=$zxn_banner_db->select('');
	$total=count($numrows);      
	$page = intval($_POST['pageNum'])+1;
	$pageSize =15; //每页显示数
	$totalPage = ceil($total/$pageSize); //总页数
	$startPage = $page*$pageSize;
	$arr['total'] = $total;
	$arr['pageSize'] = $pageSize;
	$arr['totalPage'] = $totalPage;
	$rows=$zxn_banner_db->listinfo('', '', $page, '15');
	foreach($rows as $i=>$row){
		 $arr['list'][] = $row;
		 }
	header('Content-Type:application/json;charset=utf-8');
	print_r(json_encode($arr));

	}

}
?>