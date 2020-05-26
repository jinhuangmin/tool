<?php
defined('IN_PHPCMS') or exit('No permission resources.');

class jindexapi {
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$catid='12';
		include template('zxnindex', 'jindex');
	}
	
public function server3 () {
		if (isset($_POST)) {
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$zxn_cang_db = pc_base::load_model('zxn_cang_model');
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$data1=array();$data2=array();$data3=array();
		$rows1=$zxn_linshi_db->select(array('UserName'=>$_username));
		$arr=array();
		foreach($rows1 as $row){
		  $arr[0]=$row['ID'];
		  $arr[1]=date('Y-m-d H:i:s', $row['CreaTime']);
		  $arr['ID']=$row['ID'];
		  $arr['CreatTime']=date('Y-m-d H:i:s', $row['CreaTime']);
		  $data1[]=$arr;
			}
		$all['data']=$data1;
		
		$rows2=$zxn_user_db->select(array('UserName'=>$_username));
		$arr=array();
		foreach($rows2 as $row){
		  $arr['ID']=$row['ID'];
		  $arr['UserName']=$row['UserName'];
		  $arr['saveName']=$row['Title'];
		  $arr['saveTime']= is_numeric($row['CreaTime'])?date("Y-m-d H:i:s",$row['CreaTime']):date("Y-m-d H:i:s",strtotime($row['CreaTime']));
		  $arr['shareLabel']=$row['Cate'];
		  $data2[]=$arr;
			}
		$all['saveData']=$data2;
		
		$rows3=$zxn_cang_db->select(array('username'=>$_username,'type'=>'tb'));
		$arr=array();
		foreach($rows3 as $row){
		  $arr['ID']=$row['fxid'];
		  $arr['author']=str_replace("分享者：","",$row['author']); //分享者：
		  $arr['time']=date("Y-m-d H:i:s",time());
		  $arr['url']=$row['imgname'];
		  $arr['title']=$row['title'];
		  $data3[]=$arr;
			}
		$all['collectData']=$data3;
		
		$all['page']=1;
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($all)); 

		}
	}
	
	
	

public function userList () {
		if (isset($_POST)) {
		$time=time();
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_cang_db = pc_base::load_model('zxn_cang_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$data1=array();$data2=array();$data3=array();
		if($_POST['type']=='faver'){
		    $rows=$zxn_cang_db->select(array('username'=>$_username,'type'=>'tb'));
			$arr=array();
			foreach($rows as $row){
			  $arr['ID']=$row['fxid'];
			  $arr['author']=str_replace("分享者：","",$row['author']);
			  $arr['time']=date("Y-m-d H:i:s",time());
			  $arr['url']=$row['imgname'];
			  $data[]=$arr;
				}
			$all['data']=$data;
			$all['total']=count($rows);
			 }
		if($_POST['type']=='save'){
		    $rows=$zxn_user_db->select(array('username'=>$_POST['username']));
			$arr=array();
			foreach($rows as $row){
			  $arr['ID']=$row['ID'];
			  $arr['UserName']=$row['UserName'];
			  $arr['saveName']=$row['Title'];
			  $arr['saveTime']= is_numeric($row['CreaTime'])?date("Y-m-d H:i:s",$row['CreaTime']):date("Y-m-d H:i:s",strtotime($row['CreaTime']));
			  //$arr['Time']= is_numeric($row['CreaTime'])?date("Y-m-d",$row['CreaTime']):date("Y-m-d",strtotime($row['CreaTime']));
			  $arr['shareLabel']=$row['Cate'];
			  $data2[]=$arr;
				}
			$all['data']=$data2;
			$all['total']=count($rows);
		    }
		if($_POST['type']=='gen'){
			$page=$_POST['page']=='NaN'||$_POST['page']==''?1:$_POST['page'];
			$sq1=($page-1)*10;$sq2=$page*10;$limit=''.$sq1.','.$sq2.'';
			$rows0=$zxn_linshi_db->select(array('username'=>$_POST['username']));
		    $rows=$zxn_linshi_db->select(array('username'=>$_POST['username']),'*',$limit);  //select($where = '', $data = '*', $limit = '', $order = '', $group = '', $key='')
			$arr=array();
			foreach($rows as $row){
			  $saveTime=is_numeric($row['CreaTime'])?date("Y-m-d",$row['CreaTime']):date("Y-m-d",strtotime($row['CreaTime']));
			  if($saveTime=$_POST['searchdate']){   
			  $arr[0]=$row['ID'];
			  $arr[1]=date('Y-m-d H:i:s', $row['CreaTime']);
			  $arr['ID']=$row['ID'];
			  $arr['CreatTime']=date('Y-m-d H:i:s', $row['CreaTime']);
			  $data2[]=$arr;
			  }
				}
			$all['page']=$page;
			$all['data']=$data2;
			$all['total']=count($rows0);
		    }
			
			
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($all)); 
		}


	}

	

	public function like () {
		if (isset($_POST)) {
		$time=time();
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_cang_db = pc_base::load_model('zxn_cang_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['type']=='like'){
		   $r=$zxn_cang_db->get_one(array('type'=>'tb','username'=>$_username,'fxid'=>$_POST['ID']));
		   if(!$r){
			 $insert=$zxn_cang_db->insert(array('type'=>'tb','username'=>$_username,'fxid'=>$_POST['ID'],'author'=>$_POST['author'],'imgname'=>$_POST['imgname'],'title'=>$_POST['title']));
			 $numupdate=$zxn_ku_tb_db->update(array('Cang'=>'+=1', ),array('ID'=>$_POST['ID']));
			 if($insert){$arr[0]=true;  $arr[1]="保存成功";}else{$arr[0]=false;  $arr[1]="保存失败";}
			   }
			 }
		if($_POST['type']=='unlike'){
		   $r=$zxn_cang_db->delete(array('type'=>'tb','username'=>$_username,'fxid'=>$_POST['ID']));
		   if($r){
			 $numupdate=$zxn_ku_tb_db->update(array('Cang'=>'-=1', ),array('ID'=>$_POST['ID']));
			 $arr[0]=true;  $arr[1]="保存成功";
			 }else{
			 $arr[0]=false;  $arr[1]="保存失败";}
			 }	 
			 
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($arr)); 
		}


	}

	
	
public function previewSave () {
		$ID=$_GET['act'];
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['act']!==''){
		$row=$zxn_linshi_db->get_one(array('ID'=>$ID));
		$html =  $row['Value'];
		$time=date("Y-m-d H:i:s", $row['CreaTime']);
		include template('zxn', 'previewS');
		}

   }
	
	
	
	

}
?>