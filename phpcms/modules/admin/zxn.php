<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_class('admin','admin',0);
pc_base::load_app_func('form','admin');
pc_base::load_app_func('license','member');
class zxn extends admin {
	private $db;
	function __construct() {
		parent::__construct();
		$this->db = pc_base::load_model('module_model');
		pc_base::load_app_func('global');
	}
	
	/**
	 * 配置信息
	 */
	public function init() {

	}
	
	/**
	 * 注册码
	 */
	public function zhuce() {
	
	$zxn_set_db = pc_base::load_model('zxn_set_model');
	$rk = $zxn_set_db->get_one(array('Web'=>'tbtool'));
	$key = $rk['CopyRight']; $string='gNo';
	$enc_text = encrypt($string,$key);   //加密
	$dec_text = decrypt($enc_text,$key);   //解密 
    include $this->admin_tpl('license');
	}

	/**
	 * tb set
	 */
	public function sysset() {
    $zxn_set_db = pc_base::load_model('zxn_set_model');
	$r = $zxn_set_db->get_one(array('Web'=>'tbtool'));
	$IndexHtml=htmlspecialchars($r['IndexHtml']);

$file_path = "phpcms\templates\default\zxn\content.html";

    include $this->admin_tpl('zxn_set');
	}
	
	
	/**
	 * tb样例
	 */
	public function zxntbyl() {
    $zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
	$r=$zxn_ku_tb_db->select('');
    include $this->admin_tpl('zxn_list');
	}
	
	public function list_tbyl() {
    $zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
//	$arrlist=$zxn_ku_tb_db->listinfo($where = '', $order = '', $page = 1, $pagesize = 20, $key='', $setpages = 10,$urlrule = '',$array = array(), $data = '*');
	$numrows=$zxn_ku_tb_db->select('');
	$total=count($numrows);      
	$page = intval($_POST['pageNum'])+1;
	$pageSize =30; //每页显示数
	$totalPage = ceil($total/$pageSize); //总页数
	$startPage = $page*$pageSize;
	$arr['total'] = $total;
	$arr['pageSize'] = $pageSize;
	$arr['totalPage'] = $totalPage;
	$rows=$zxn_ku_tb_db->listinfo('', 'ID DESC', $page, '30');
	foreach($rows as $i=>$row){
		 $row['dtime']=date("Y-m-d H:i:s", $row['CreaTime']);
		 $arr['list'][] = $row;
		 }
	header('Content-Type:application/json;charset=utf-8');
	print_r(json_encode($arr));
	}
	
	
	public function tbylDEL() {
    if(isset($_GET['dosubmit'])) {
	$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
	$dels=$_POST['ids'];$print='ok';
		foreach($dels as $id){
		  $delete=$zxn_ku_tb_db->delete(array('ID'=>$id));
		  if(!$delete){$print='no';}
			}
		if($print=='ok'){showmessage(L('operation_success'),HTTP_REFERER);}else{showmessage('删除失败,稍后再试',HTTP_REFERER);}	
		}
	}
	
	public function ddd() {
    if(isset($_POST['dosubmit'])&&$_POST['dosubmit']=='dosubmit'&&isset($_POST['type'])) {
	$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
	if($_POST['type']!=='all'){$delete=$zxn_ku_tb_db->delete(array('cj'=>$_POST['type']));}else{$delete=$zxn_ku_tb_db->delete(array('cj'=>'0'));$delete=$zxn_ku_tb_db->delete(array('cj'=>'1'));}
	if(!$delete){
		$fanhui['0']=false;
		$fanhui['1']="错误";
			}else{
		$fanhui['0']=true;
		$fanhui['1']="删除成功";				
			}
	header('Content-Type:application/json;charset=utf-8');
	echo json_encode($fanhui);
	}
	}
	
	public function listorder() {
    if(isset($_GET['dosubmit'])) {
	$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
	$listorders=$_POST['listorders'];$print='ok';
		foreach($listorders as $key=>$listorder){
		  $update=$zxn_ku_tb_db->update(array('listorder'=>$listorder),array('ID'=>$key)); 
		  if(!$update){$print='no';}
			}
		if($print=='ok'){showmessage(L('operation_success'),HTTP_REFERER);}else{showmessage('删除失败,稍后再试',HTTP_REFERER);}	
		}
	}
	
	public function add() {
		
		include $this->admin_tpl('zxn_add');
		
		}
		
	public function adddata() {
		
		if(trim($_POST['info']['title'])=='') showmessage('标题不能为空');
		if(trim($_POST['info']['Value'])=='') showmessage('内容不能为空');
		$title=$_POST['info']['title'];
		$Value=$_POST['info']['Value'];
		$copyfrom=$_POST['info']['copyfrom']?$_POST['info']['copyfrom']:'Admin';
		$keywords=$_POST['info']['keywords']?$_POST['info']['keywords']:'';
		$img=$_POST['info']['img']?$_POST['info']['img']:'';
		$time=time(); //date("Y-m-d ", time());

		
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$insert=$zxn_ku_tb_db->insert(array('UserName'=>$copyfrom,'Title'=>$title,'Width'=>'1920','Height'=>'2560','CreaTime'=>$time,'Cate'=>$_POST['info']['keywords'],'Value'=>$Value,'version'=>'3','cj'=>'0','Pic'=>$img),true);
		if($insert){
		if(isset($_POST['dosubmit'])) {
		  showmessage(L('add_success').L('2s_close'),'blank','','','function set_time() {$("#secondid").html(1);}setTimeout("set_time()", 500);setTimeout("window.close()", 1200);');
		   }else{
		  showmessage(L('add_success'),HTTP_REFERER);
		   }
		}else{
		showmessage('错误',HTTP_REFERER);
		}

		}
		
		
	public function edit() {
		$id=$_GET['id'];
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$r = $zxn_ku_tb_db->get_one(array('ID'=>$id));
		include $this->admin_tpl('zxn_edit');
		
		}
		
    public function editdata() {
		
		if(trim($_POST['info']['title'])=='') showmessage('标题不能为空');
		if(trim($_POST['info']['Value'])=='') showmessage('内容不能为空');
		if(trim($_POST['info']['id'])=='') showmessage('id不能为空');
		$title=$_POST['info']['title'];
		$Value=$_POST['info']['Value'];
		$copyfrom=$_POST['info']['copyfrom']?$_POST['info']['copyfrom']:'分享者：Admin';
		$keywords=$_POST['info']['keywords']?$_POST['info']['keywords']:'';
		$img=$_POST['info']['img']?$_POST['info']['img']:'';
		$time=time(); //date("Y-m-d ", time());
		$Psd=$_POST['info']['Psd'];

		
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$update=$zxn_ku_tb_db->update(array('UserName'=>$copyfrom,'Title'=>$title,'Width'=>'1920','Height'=>'2560','CreaTime'=>$time,'Cate'=>$_POST['info']['keywords'],'Value'=>$Value,'Psd'=>$Psd,'version'=>'3','cj'=>'0','Pic'=>$img),array('ID'=>$_POST['info']['id']));

		if($update){
		if(isset($_POST['dosubmit'])) {
		  showmessage(L('add_success').L('2s_close'),'blank','','','function set_time() {$("#secondid").html(1);}setTimeout("set_time()", 500);setTimeout("window.close()", 1200);');
		   }else{
		  showmessage(L('add_success'),HTTP_REFERER);
		   }
		}else{
		showmessage('错误',HTTP_REFERER);
		}

		}



	/**
	 * 审核
	 */
	public function tbfx() {
    $_username = param::get_cookie('_username');
	$_usernick = param::get_cookie('_nickname');
	$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
	$rows=$zxn_linshi_db->select(array('Fx'=>'1'));
	$data=array();
	foreach($rows as $row){
	   $UserName=$row['UserName'];
       $data[$UserName][]=$row['ID'];
		}
    include $this->admin_tpl('zxn_tbfx');
	}
	
	public function tbfxsh() {
    $id=$_GET['id'];
	$_username = param::get_cookie('_username');
	$_usernick = param::get_cookie('_nickname');
	$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
	$rows=$zxn_linshi_db->select(array('Fx'=>'1','ID'=>$id));
	$data=array();
	foreach($rows as $row){
	 $html =$row['Value'];
	 $user =$row['UserName'];
		}
    include $this->admin_tpl('zxn_fxsh');
	}
	
	/**
	 * 保存配置信息
	 */
	public function save() {

	}

}
?>