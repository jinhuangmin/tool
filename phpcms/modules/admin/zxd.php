<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_class('admin','admin',0);
pc_base::load_app_func('form','admin');
class zxd extends admin {
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
	 * tb样例
	 */
	public function zxdjdyl() {
    $zxd_ku_db = pc_base::load_model('zxd_ku_model');
	$rows=$zxd_ku_db->select('');
    include $this->admin_tpl('zxd_list');
	}
	
	public function list_jdyl() {
    $zxd_ku_db = pc_base::load_model('zxd_ku_model');
//	$arrlist=$zxd_ku_db->listinfo($where = '', $order = '', $page = 1, $pagesize = 20, $key='', $setpages = 10,$urlrule = '',$array = array(), $data = '*');
	$numrows=$zxd_ku_db->select('');
	$total=count($numrows);      
	$page = intval($_POST['pageNum'])+1;
	$pageSize =30; //每页显示数
	$totalPage = ceil($total/$pageSize); //总页数
	$startPage = $page*$pageSize;
	$arr['total'] = $total;
	$arr['pageSize'] = $pageSize;
	$arr['totalPage'] = $totalPage;
	$rows=$zxd_ku_db->listinfo('', 'ID DESC', $page, '30');
	foreach($rows as $i=>$row){
		 $row['dtime']=date("Y-m-d H:i:s", $row['CreaTime']);
		 $arr['list'][] = $row;
		 }
	header('Content-Type:application/json;charset=utf-8');
	print_r(json_encode($arr));
	}


public function tbylDEL() {
    if(isset($_GET['dosubmit'])) {
	$zxd_ku_db = pc_base::load_model('zxd_ku_model');
	$dels=$_POST['ids'];$print='ok';
		foreach($dels as $id){
		  $delete=$zxd_ku_db->delete(array('ID'=>$id));
		  if(!$delete){$print='no';}
			}
		if($print=='ok'){showmessage(L('operation_success'),HTTP_REFERER);}else{showmessage('删除失败,稍后再试',HTTP_REFERER);}	
		}
	}
	
	public function ddd() {
    if(isset($_POST['dosubmit'])&&$_POST['dosubmit']=='dosubmit'&&isset($_POST['type'])) {
	$zxd_ku_db = pc_base::load_model('zxd_ku_model');
	if($_POST['type']!=='all'){$delete=$zxd_ku_db->delete(array('cj'=>$_POST['type']));}else{$delete=$zxd_ku_db->delete(array('cj'=>'0'));$delete=$zxd_ku_db->delete(array('cj'=>'1'));}
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
	$zxd_ku_db = pc_base::load_model('zxd_ku_model');
	$listorders=$_POST['listorders'];$print='ok';
		foreach($listorders as $key=>$listorder){
		  $update=$zxd_ku_db->update(array('listorder'=>$listorder),array('ID'=>$key)); 
		  if(!$update){$print='no';}
			}
		if($print=='ok'){showmessage(L('operation_success'),HTTP_REFERER);}else{showmessage('删除失败,稍后再试',HTTP_REFERER);}	
		}
	}
	
	public function add() {
		
		include $this->admin_tpl('zxd_add');
		
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

		
		$zxd_ku_db = pc_base::load_model('zxd_ku_model');
		$insert=$zxd_ku_db->insert(array('UserName'=>$copyfrom,'Title'=>$title,'Width'=>'1920','Height'=>'2560','CreaTime'=>$time,'Cate'=>'','Value'=>$Value,'version'=>'2','cj'=>'0','Pic'=>$img),true);
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
		$zxd_ku_db = pc_base::load_model('zxd_ku_model');
		$r = $zxd_ku_db->get_one(array('ID'=>$id));
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

		
		$zxd_ku_db = pc_base::load_model('zxd_ku_model');
		$update=$zxd_ku_db->update(array('UserName'=>$copyfrom,'Title'=>$title,'Width'=>'1920','Height'=>'2560','CreaTime'=>$time,'Cate'=>'','Value'=>$Value,'version'=>'3','cj'=>'0','Pic'=>$img),array('ID'=>$_POST['info']['id']));

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
	 * tb样例采集
	 */
	public function caiji() {
	$zxd_ku_db = pc_base::load_model('zxd_ku_model');
    include $this->admin_tpl('zxd_tbcj');
	}
	public function list_ajaxjson() {  
	$data=$_POST;
	$weburl='http://www.wangdianxiu.com';
	if(!empty($_POST)){
	$Array = array();$zong = array();
	$n=0;$k=0;
	for($i=1;$i<100;$i++){
	$url=''.$weburl.'/grsc/serverjd.php?page='.$i.'';
	$htmljson = file_get_contents($url);
	$htmlarr = json_decode($htmljson,true);
	if($htmlarr['message']=='No more pictures'){ break; }
   $k++;
   foreach($htmlarr['data'] as $item){ $n++;
	$all['imgname']=$item['imgname']; 
	$all['shareTitle']=$item['shareTitle'];
	$all['shareLabel']=$item['shareLabel'];
	$all['title']=$item['name'];
	$all['time']=$item['time'];
	$all['width']=$item['width'];
	$all['height']=$item['height'];
	$all['url']='tool/previewIjd.php?id='.$item['id'].'';
	$all['image']=$item['image'];
	$zong['data'][]=$all;
	   }
	}
   $zong['page']=$k;
   $zong['num']=$n;
   header('Content-Type:application/json;charset=utf-8');
   print json_encode($zong); 
	}
	}
	
	public function list_cjaddx() {
    $zxd_ku_db = pc_base::load_model('zxd_ku_model');

if(!empty($_POST)){
   include ('/statics/phpQuery/phpQuery.php');
$ls=rand(1,9999);	
date_default_timezone_set('PRC');
$time=date('y-m-d H:i:s',time());

 $item=$_POST['data'];
 $weburl1='http://www.wangdianxiu.com/ku/';  
   
     extract($item);


   $r=$zxd_ku_db->get_one(array('YuanPic'=>$image));

     if(!$r){
   //图片保存
   $dbzb=substr($image,0,4);
   $picurl=$dbzb=='http'?$image:''.$weburl1.''.$image.'';
   $SavePicName=get_photo($picurl,'','./statics/jdimg/'); 
   if($SavePicName==false){echo'[ '.$key.' : 图片保存失败,跳过 ╳ ]'; }else{
   //html
   $weburl2='http://www.wangdianxiu.com/';
   $aurl=''.$weburl2.''.$url.'';
   phpQuery::newDocumentFile($aurl); 
   $html = pq('#content')->html(); 
   phpQuery::$documents = array();

//$data = stripslashes( $html );
$data=str_replace("wangdianxiu","guop",$html);
$data=str_replace("wdxiuzxleftisme","junezxleftisme",$data);
$data=str_replace("user-wdxiu","user-june",$data);
$size=HtmlWidth($html);	 
if($size['w']){$width=$size['w'];}else{$width='1920';}
if($size['h']){$height=$size['h'];}else{$height='1000';}
//写入数据
$width=$item['width']?$item['width']:$width;
$height=$item['height']?$item['height']:$height;
$data = trim($data);
//$data='<style></style>'.$data;
$data = addslashes($data);


$insert=$zxd_ku_db->insert(array('UserName'=>$title,'Title'=>$shareTitle,'Width'=>$width,'Height'=>$height,'CreaTime'=>$time,'Pic'=>$SavePicName,'Cate'=>$shareLabel,'Value'=>$data,'YuanPic'=>$imgname,'Cang'=>'0','Diy'=>'0'));

 if(!$insert) {echo'[ '.$key.' : 写入数据库失败 ╳ ]'; } else { echo'[ '.$key.' : 保存成功 √ ]';}	 
}

	  }else{echo'[ '.$key.' : 重复,跳过 〇 ]';}

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