<?php
@ini_set('max_input_vars','50000');
defined('IN_PHPCMS') or exit('No permission resources.');

class api {
	public function __construct() {
		
	}

	
	public function saveInput () {
		if (isset($_POST['userName'])) {
		$time=time();
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$listinfos=$zxn_user_db->select(array('UserName'=>$_POST['userName']));
		$arrlist = array();
		foreach($listinfos as $row){
			 $items = array();
			 $items['ID']=$row['ID'];
			 $items['saveName']=$row['Title'];
			 $items['saveTime']=date('Y-m-d H:i:s',$row['SaveTime']);;
			 $arrlist[]=$items;
			}
		include template('zxn', "saveInput");
		}
	}
	
	public function save() {
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		
		$saveObj=$_POST['saveObj'];
        $saveObj['snapCode']=$saveObj['actionConfig'];
        $saveObj['actionConfig']=$saveObj['saveName'];
		$value = array2string($saveObj);
		$time=time();
		
		if($_POST['type']=='cover'){//系统自动保存
		  $r = $zxn_user_db->get_one(array('UserName'=>$_username,'Title'=>$_POST['saveName']));
		  if(!$r){//新写入自动保存
   $xie=$zxn_user_db->insert(array('UserName'=>$_username,'Title'=>$_POST['saveName'],'Width'=>'1920','Height'=>$_POST['saveObj']['actionCollection']['juneHeightVal'],'CreaTime'=>$time,'SaveTime'=>$time,'Cate'=>'','Value'=>$value),true);
   if(!$xie){
		$fanhui['0']=false;
		$fanhui['1']="保存失败0";
			}else{
		$fanhui['0']=true;
		$fanhui['1']="保存成功";	
		$fanhui['2']=$xie;
		$fanhui['3']= date('Y-m-d H:i:s',$time);			
			}
		 }else{
	    $up0=$zxn_user_db->update(array('UserName'=>$_username,'Title'=>$_POST['saveName'],'Width'=>'1920','Height'=>$_POST['saveObj']['actionCollection']['juneHeightVal'],'SaveTime'=>$time,'Cate'=>'','Value'=>$value),array('UserName'=>$_username,'Title'=>$_POST['saveName'])); 
		
		if(!$up0){
		$fanhui['0']=false;
		$fanhui['1']="更新失败";
			}else{
		$fanhui['0']=true;
		$fanhui['1']="保存成功";	
		$fanhui['2']=$r['ID'];
		$fanhui['3']= date('Y-m-d H:i:s',$time);	
			}
				  }
			  
			 }else{ //普通保存
				 
		$r = $zxn_user_db->get_one(array('UserName'=>$_username,'Title'=>$_POST['saveName']));		 
	if($r){ 
		$fanhui['0']=false;
		$fanhui['1']='already';
		$fanhui['2']="您已经保存了一份相同名称的存档，是否覆盖该存档？";
		$fanhui['3']=$r['ID'];
		}else{
		$xie=$zxn_user_db->insert(array('UserName'=>$_username,'Title'=>$_POST['saveName'],'Width'=>'1920','Height'=>$_POST['saveObj']['actionCollection']['juneHeightVal'],'CreaTime'=>$time,'SaveTime'=>$time,'Cate'=>'','Value'=>$value),true);
		if(!$xie){
		$fanhui['0']=false;
		$fanhui['1']="保存失败";
			}else{
		$fanhui['0']=true;
		$fanhui['1']="保存成功";	
		$fanhui['2']=$xie;
		$fanhui['3']= date('Y-m-d H:i:s',$time);			
			}	
		}
		}

		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui)); 
	}



	public function load () {
		if (isset($_POST)) {
		$time=time();
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['type']=='list'){  //列表
		$listinfos=$zxn_user_db->select(array('UserName'=>$_username));
		$arrlist = array();
		foreach($listinfos as $row){
			 $items = array();
			 $items['ID']=$row['ID'];
			 $items['saveName']=$row['Title'];
			 $items['saveTime']=date('Y-m-d H:i:s',$row['SaveTime']);
			 $arrlist[]=$items;
			}
		header('Content-Type:application/json;charset=utf-8');
		echo json_encode($arrlist);
			 }
		
		if($_POST['type']=='tuijian'){  //推荐
		$listinfos=$zxn_user_db->select(array('UserName'=>$_username));
		$arrlist = array();
		foreach($listinfos as $row){
			 $items = array();
			 $items['ID']=$row['ID'];
			 $items['saveName']=$row['Title'];
			 $items['saveTime']=date('Y-m-d H:i:s',$row['SaveTime']);;
			 $items['userName']=$row['UserName'];
			 $arrlist[]=$items;
			}
		header('Content-Type:application/json;charset=utf-8');
		echo json_encode($arrlist);
			 }
			 
			 
		if($_POST['type']=='search'){  //查询
			$r = $zxn_user_db->get_one(array('ID'=>$_POST['ID'],'UserName'=>$_username));
			$fanhui = array();
			$Valarr=string2array($r['Value']);
			$Valtit['title']=$r['Title'];
			$fanhui[0]=$Valarr;
			$fanhui[1]=$Valtit;
			header('Content-Type:application/json;charset=utf-8');
		    echo json_encode($fanhui);
			 }

       if($_POST['type']=='delete'){  //删除
			$r = $zxn_user_db->delete(array('ID'=>$_POST['ID'],'UserName'=>$_username));
			if(!$r){
			$fanhui['0']=false;
			$fanhui['1']="删除失败";
				}else{
			$fanhui['0']=true;
			$fanhui['1']="删除成功";				
				}
			header('Content-Type:application/json;charset=utf-8');
		    echo json_encode($fanhui);
			 }

		}
	}
	
	
		public function savestyle () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if (isset($_POST)&&$_username) {
		$time=time();
		extract($_POST);
		$zxn_style_user_db = pc_base::load_model('zxn_style_user_model');
		
		$r = $zxn_style_user_db->get_one(array('styletext'=>$styletext,'username'=>$_username));
		if(!$r){
		$inid=$zxn_style_user_db->insert(array('username'=>$_username,'styletext'=>$styletext,'styleurl'=>$styleurl,'styletype'=>$styletype,'stylePower'=>$stylePower,'styleExam'=>$styleExam,'stylecode'=>$stylecode,'stylecode1'=>$stylecode1),true);
			}else{
		if($stylePower==2){echo'[false,"名称重复"]';}else{
		$update=$zxn_style_user_db->update(array('styleurl'=>$styleurl,'styletype'=>$styletype,'stylePower'=>$stylePower,'styleExam'=>$styleExam,'stylecode'=>$stylecode,'stylecode1'=>$stylecode1),array('styletext'=>$styletext,'username'=>$_username));		
			}		
				
	}


		}
	}



	public function useridata () {
		if (isset($_POST)) {
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$zxn_cang_db = pc_base::load_model('zxn_cang_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$data1=array();$data2=array();$data3=array();
		$rows1=$zxn_user_db->select(array('UserName'=>$_username));
		$arr=array();
		foreach($rows1 as $row){
		  $arr['ID']=$row['ID'];
		  $arr['shareTitle']=$row['Title'];
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
		  $arr['saveTime']=date("Y-m-d H:i:s",strtotime($row['CreaTime']));
		  $arr['shareLabel']=$row['Cate'];
		  $data2[]=$arr;
			}
		$all['saveData']=$data2;
		
		$rows3=$zxn_cang_db->select(array('username'=>$_username,'type'=>'tb'));
		$arr=array();
		foreach($rows3 as $row){
		  $arr['ID']=$row['fxid'];
		  $arr['author']=$row['author'];
		  $arr['time']=date("Y-m-d H:i:s",time());
		  $arr['url']=$row['imgname'];
		  $arr['title']=$row['title'];
		  $data3[]=$arr;
			}
		$all['collectData']=$data3;
		
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($all)); 

		}
	}

public function userList () {
		if (isset($_POST)) {
		$time=time();
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_cang_db = pc_base::load_model('zxn_cang_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$data1=array();$data2=array();$data3=array();
		if($_POST['type']=='faver'){
		    $rows=$zxn_cang_db->select(array('username'=>$_username,'type'=>'tb'));
			$arr=array();
			foreach($rows as $row){
			  $arr['ID']=$row['fxid'];
			  $arr['author']=$row['author'];
			  $arr['time']=date("Y-m-d H:i:s",time());
			  $arr['url']=$row['imgname'];
			  $data[]=$arr;
				}
			$all['data']=$data;
			$all['total']=count($rows);
			 }
		if($_POST['type']=='save'){
		    $rows=$zxn_user_db->select(array('UserName'=>$_username));
			$arr=array();
			foreach($rows as $row){
			  $arr['ID']=$row['ID'];
			  $arr['UserName']=$row['UserName'];
			  $arr['saveName']=$row['Title'];
			  $arr['saveTime']=date("Y-m-d H:i:s",strtotime($row['CreaTime']));
			  $arr['shareLabel']=$row['Cate'];
			  $data2[]=$arr;
				}
			$all['data']=$data2;
			$all['total']=count($rows);
		    }
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($all)); 
		}


	}

	
public function insertcode () {
		if (isset($_POST)) {
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['shareType']=='1'){
		date_default_timezone_set('PRC');
		$userName=$_username;
		$code=$_POST['code'];
		$time=time();
		$title='fx_title';
		$fx='0';
		$rnum=$zxn_linshi_db->select(array('UserName'=>$_username,'Fx'=>0),'*','','ID DESC');
		if(count($rnum)>9){  
		for($i=9;$i<count($rnum);$i++){
		  $delete=$zxn_linshi_db->delete(array('UserName'=>$_username,'ID'=>$rnum[$i]['ID']));
			}
		 }
		$inid=$zxn_linshi_db->insert(array('UserName'=>$_username,'Title'=>$title,'shareType'=>$_POST['shareType'],'Value'=>$code,'CreaTime'=>$time,'Fx'=>0),true);
		echo $inid;
	    }}
	}	
	
public function getsnap () {
		if (isset($_POST['ID'])) {
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$rnum=$zxn_linshi_db->select(array('UserName'=>$_username,'Fx'=>1),'*','','ID DESC');
		if(count($rnum)>19){  
		for($i=19;$i<count($rnum);$i++){
		  $delete=$zxn_linshi_db->delete(array('UserName'=>$_username,'ID'=>$rnum[$i]['ID']));
			}
		 }
		$r=$zxn_linshi_db->select(array('UserName'=>$_username,'ID'=>$_POST['ID']));
		if($r){
		$update=$zxn_linshi_db->update(array('Fx'=>1),array('UserName'=>$_username,'ID'=>$_POST['ID']));	
		if(!$update){echo 'set fx error'; }else{echo'ok';}
		  }
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


public function server () {
     if (isset($_POST)) {
		$zxn_cang_db = pc_base::load_model('zxn_cang_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$data1=array();$data2=array();$data3=array();
		$page = intval($_POST['page']);
		$rows=$zxn_cang_db->select(array('username'=>$_username,'type'=>'tb'));
		$rows3=$zxn_cang_db->listinfo(array('username'=>$_username,'type'=>'tb'), '', $page, '9');
		$arr=array();
		foreach($rows3 as $row){
		  $arr['ID']=$row['fxid'];
		  $arr['author']=$row['author'];
		  $arr['time']=date("Y-m-d",time());
		  $arr['url']=$row['imgname'];
		  $arr['title']=$row['title'];
		  $data3[]=$arr;
			}
		$all['data']=$data3;
		$all['success']=true;
		$all['total']=count($rows);
		
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($all)); 

		}
   }
   
   

}
?>