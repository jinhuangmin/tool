<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_class('foreground');
pc_base::load_app_func('area','save');

class index extends foreground{
	public function __construct() {
		
	}
	
	public function init () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		include template('save', 'list');
	}
	
	
public function load () {
		if (isset($_POST)) {
		$time=time();
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		
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
		
		}
	}
	
public function previewZ () {
		$ID=$_GET['act'];
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['act']!==''){
		$row=$zxn_user_db->get_one(array('ID'=>$ID));
		$html=string2array($row['Value']);
		$daima=$html['snapCode'];
			$daima=stripslashes($daima);
		include template('save', 'PreviewUser');
		}

   }
	
	
	public function savelist () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');

		$zxn_user_mulu_db = pc_base::load_model('zxn_user_mulu_model');
		$mululist=$zxn_user_mulu_db->select(array('UserName'=>$_username));
		$mulu0=$zxn_user_mulu_db->get_one(array('UserName'=>$_username,'dangqian'=>'0'));
		$count=count($mululist);
		$mulujson=mulujson();
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$mulu='0';
		$listinfos=$zxn_user_db->select(array('UserName'=>$_username,'Mulu'=>$mulu));
		include template('save', 'savelist');
	}
	
	public function saveInput () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['userName']!==$_username){ exit();}
		$zxn_user_mulu_db = pc_base::load_model('zxn_user_mulu_model');
		$mululist=$zxn_user_mulu_db->select(array('UserName'=>$_username));
		$mulu0=$zxn_user_mulu_db->get_one(array('UserName'=>$_username,'dangqian'=>'0'));
		$count=count($mululist);
		$mulujson=mulujson();
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$mulu='0';
		$listinfos=$zxn_user_db->select(array('UserName'=>$_username,'Mulu'=>$mulu));
		
		include template('save', 'saveInput');
	}

	public function saveControlForm () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['type']=='move'){
		include template('save', 'saveControlFormMove');
		}elseif($_POST['type']=='renamefolder'){
		include template('save', 'saveControlFormRenamefolder');
		}elseif($_POST['type']=='renamefile'){
		include template('save', 'saveControlFormRenamefile');
		}else{
		include template('save', 'saveControlForm');
			}
		
	}
	
	public function saveControl () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$zxn_user_mulu_db = pc_base::load_model('zxn_user_mulu_model');
		$mululist=$zxn_user_mulu_db->select(array('UserName'=>$_username));

		if($_POST['type']=='addFolder'){ // type:addFolder  folderID:1  userName:tb_xxx folderName:文档1-2 新增文件夹
		  $num=count($mululist);
		  $xie=$zxn_user_mulu_db->insert(array('UserName'=>$_username,'dangqian'=>$num,'fu'=>$_POST['folderID'],'name'=>$_POST['folderName']),true);
		  if($xie){
			  $print[0]='ok';
			  $print[1]=mulujson();
			  print_r(json_encode($print));
			  }else{
			  $print[0]='no';
			  $print[1]=mulujson();
			  print_r(json_encode($print));
				  }
			}
		if($_POST['type']=='moveFolder'){ // type:moveFolder folderID:3 userName:tb_xx curIDArr:6 移动文件夹
			$update=$zxn_user_mulu_db->update(array('fu'=>$_POST['folderID'], ),array('UserName'=>$_username,'dangqian'=>$_POST['curIDArr']));
			if($update){
			  $print[0]='ok';
			  $print[1]=mulujson();
			  print_r(json_encode($print));
			  }else{
			  $print[0]='no';
			  print_r(json_encode($print));
				  }
			}
		if($_POST['type']=='renameFolder'){ 
			if($_POST['userName']!==$_username){ exit();}
			$update=$zxn_user_mulu_db->update(array('name'=>$_POST['folderName'], ),array('UserName'=>$_username,'dangqian'=>$_POST['folderID']));
			if($update){
			  $print[0]='ok';
			  $print[1]=mulujson();
			  print_r(json_encode($print));
			  }else{
			  $print[0]='no';
			  print_r(json_encode($print));
				  }
			}
		if($_POST['type']=='deleteFolder'){
			if($_POST['userName']!==$_username||$_POST['curIDArr']==''){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			$r = $zxn_user_db->delete(array('Mulu'=>$_POST['curIDArr'],'UserName'=>$_username));
			if(!$r){
			$fanhui['0']=false;
			$fanhui['1']="user save false";
				}else{
			$delete=$zxn_user_mulu_db->delete(array('UserName'=>$_username,'dangqian'=>$_POST['curIDArr']));
			if(!$delete){
				$fanhui['0']=false;
				$fanhui['1']="mulu save false";
				}else{
				$fanhui['0']='ok';
				$fanhui['1']=mulujson();
					}		
				}
			 print_r(json_encode($fanhui));
			}
		if($_POST['type']=='renameFile'){ 
			if($_POST['userName']!==$_username){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			$newName=$_POST['saveName']?$_POST['saveName']:($_POST['folderName']?$_POST['folderName']:'重命名');
			$update=$zxn_user_db->update(array('Title'=>$newName),array('UserName'=>$_username,'ID'=>$_POST['folderID'])); 
			if($update){
			  $print[0]='ok';
			  $print[1]='重命名存档成功';
			  print_r(json_encode($print));
			  }else{
			  $print[0]='no';
			  $print[1]='重命名存档失败';
			  print_r(json_encode($print));
				  }
			}
		if($_POST['type']=='moveFile'){ 
			if($_POST['userName']!==$_username){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			$yds=$_POST['curIDArr'];$print[0]='ok';$print[1]='移动存档成功';
			foreach($yds as $v){
			  $update=$zxn_user_db->update(array('Mulu'=>$_POST['folderID']),array('UserName'=>$_username,'ID'=>$v)); 
			  if(!$update){$print[0]='no'; $print[1]='移动存档失败,请稍后重试';}
				}
			print_r(json_encode($print));
			}
		if($_POST['type']=='copyFile'){ 
			if($_POST['userName']!==$_username){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			$r = $zxn_user_db->get_one(array('UserName'=>$_username,'ID'=>$_POST['curID']));
			for($i=1;$i>0;$i++){
				$title=$r['Title'].'的副本('.$i.')';
			    $r2 = $zxn_user_db->get_one(array('UserName'=>$_username,'Title'=>$title));
			    if(!$r2){$i=-100;}
				}
			$time=time();
			$Value0=string2array($r['Value']);
			$Value=array2string($Value0);
			$copy=$zxn_user_db->insert(array('UserName'=>$_username,'Title'=>$title,'Width'=>'1920','Height'=>$r['Height'],'CreaTime'=>$time,'SaveTime'=>$time,'Cate'=>'','Value'=>$Value,'Type'=>'3','Mulu'=>$_POST['folderID']),true);
			if($copy){$print[0]='ok';$print[1]='复制存档成功';}else{$print[0]='no'; $print[1]='复制存档失败,请稍后重试';}
			print_r(json_encode($print));
			}
		if($_POST['type']=='deleteFile'){ 
			if($_POST['userName']!==$_username){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			$dels=$_POST['curIDArr'];$print[0]='ok';$print[1]='移动存档成功';
			foreach($dels as $id){
			  $delete=$zxn_user_db->delete(array('ID'=>$id,'UserName'=>$_username));
			  if(!$delete){$print[0]='no'; $print[1]='移动存档失败,请稍后重试';}
				}
			print_r(json_encode($print));
			}
		if($_POST['type']=='syncTree'){ //duqu // type:syncTree  folderID:1  userName:tb_xxx 保存的代码列表
			if($_POST['userName']!==$_username){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			$mulu=!empty($_POST['folderID'])?$_POST['folderID']:'0';
			$listinfos=$zxn_user_db->select(array('UserName'=>$_username,'Mulu'=>$mulu));
			$arrlist = array();
			foreach($listinfos as $row){
				 $items = array();
				 $items[0]=$row['ID'];
				 $items[1]=$row['Title'];
				 $items[2]=date('Y-m-d H:i:s',$row['SaveTime']);
				 $items['ID']=$row['ID'];
				 $items['saveName']=$row['Title'];
				 $items['saveTime']=date('Y-m-d H:i:s',$row['SaveTime']);
				 $arrlist[]=$items;
				}
			header('Content-Type:application/json;charset=utf-8');
			echo json_encode($arrlist);
			}
		
		if($_POST['type']=='searchTree'){ //搜索
			if($_POST['userName']!==$_username){ exit();}
			$zxn_user_db = pc_base::load_model('zxn_user_model');
			
			$listinfos0=$zxn_user_db->select(array('UserName'=>$_username));
			foreach($listinfos0 as $sou){
			 if(strpos($sou['Title'],$_POST['keyword'])!==false){$listinfos[]=$sou;}
			}
			$arrlist = array();
			foreach($listinfos as $row){
				 $items = array();
				 $items[0]=$row['ID'];
				 $items[1]=$row['Title'];
				 $items[2]=date('Y-m-d H:i:s',$row['SaveTime']);
				 $items['ID']=$row['ID'];
				 $items['saveName']=$row['Title'];
				 $items['saveTime']=date('Y-m-d H:i:s',$row['SaveTime']);
				 $arrlist[]=$items;
				}
			header('Content-Type:application/json;charset=utf-8');
			echo json_encode($arrlist);
			}
		if($_POST['type']=='buzhidao'){ // 啥都不做
			}
	}

	public function save() {
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['userName']!==$_username){ exit();}
		$saveObj=$_POST['saveObj'];
		//$saveObj=stripslashes($_POST['saveObj']);
        $saveObj['snapCode']=$saveObj['actionConfig'];
        $saveObj['actionConfig']=$_username.'_'.$saveObj['saveName'];
		$value = array2string($saveObj);
		$mulu=!empty($_POST['folderID'])?$_POST['folderID']:'0';
		$time=time();
		
		if($_POST['type']=='cover'){//系统自动保存folderID
		  $r = $zxn_user_db->get_one(array('UserName'=>$_username,'Title'=>$_POST['saveName']));
		  if(!$r){//新写入自动保存
   $xie=$zxn_user_db->insert(array('UserName'=>$_username,'Title'=>$_POST['saveName'],'Width'=>'1920','Height'=>$_POST['saveObj']['actionCollection']['juneHeightVal'],'CreaTime'=>$time,'SaveTime'=>$time,'Cate'=>'','Value'=>$value,'Type'=>'3','Mulu'=>$mulu),true);
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
	    $up0=$zxn_user_db->update(array('UserName'=>$_username,'Title'=>$_POST['saveName'],'Width'=>'1920','Height'=>$_POST['saveObj']['actionCollection']['juneHeightVal'],'SaveTime'=>$time,'Cate'=>'','Value'=>$value,'Type'=>'3','Mulu'=>$mulu),array('UserName'=>$_username,'Title'=>$_POST['saveName'])); 
		
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
		$xie=$zxn_user_db->insert(array('UserName'=>$_username,'Title'=>$_POST['saveName'],'Width'=>'1920','Height'=>$_POST['saveObj']['actionCollection']['juneHeightVal'],'CreaTime'=>$time,'SaveTime'=>$time,'Cate'=>'','Value'=>$value,'Type'=>'3','Mulu'=>$mulu),true);
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

public function saveFX () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$time=time();
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		 // $data=json_decode($_POST); 
		$name=$_POST['user'];
		$slpic=$_POST['picdata'];
		$data=$_POST['slval'];
		$title=$_POST['title'];
		$cates=$_POST['cates'];
		$id=$_POST['id'];
		$license='x';
		$r=$zxn_linshi_db->get_one(array('ID'=>$id));
		if(!$r)exit('linshi ku no');
	if (isset($name) && isset($data) && !empty($title) && !empty($cates)&& !empty($slpic)) {
		if(preg_match('/^(data:\s*image\/(\w+);base64,)/', $slpic, $result)){
		  $type = $result[2];
		  $lujing='./statics/tbimg/';
		  $ls=rand(10000,99999); 
		  $filename=date("dMYHis").$ls.'';   
		  $new_file =''.$lujing.''.$filename.'.'.$type.'';
		  if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $slpic)))){
			echo '图片保存成功：'.$filename.'.png;<br/>';
		  }else{echo '图片保存失败;';}
		  }else{echo '图片正则失败;';}
		  
		$insert=$zxn_ku_tb_db->insert(array('UserName'=>$name,'Title'=>$title,'Width'=>'1920','Height'=>'2560','CreaTime'=>$time,'Cate'=>$cates,'Value'=>$data,'version'=>'3','cj'=>'0','Pic'=>$new_file),true);
		if(!$insert)exit('写入失败');
		$delete=$zxn_linshi_db->delete(array('ID'=>$id));
		if(!$delete)exit('1');
		}
	}


public function saveFXDEL () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$time=time();
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		 // $data=json_decode($_POST); 
		$id=$_POST['ids'];
		$r=$zxn_linshi_db->get_one(array('ID'=>$id));
		if(!$r)exit('linshi ku no');
		$delete=$zxn_linshi_db->delete(array('ID'=>$id));
		if(!$delete){
		$fanhui['0']=false;
		$fanhui['1']="删除失败";
			}else{
		$fanhui['0']=true;
		$fanhui['1']="删除成功";	
		}

		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui)); 
	
	}
	
	
public function useCode () {
		if (isset($_POST)) {
		$time=time();
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['type']=='genList'){
			$pd=explode('s',$_POST['ID']);
			if(count($pd)>1){
				$row=$zxn_linshi_db->get_one(array('ID'=>$pd[1]));
				$fanhui[0] =  $row['Value'];				
			}else{
				$row=$zxn_ku_tb_db->get_one(array('ID'=>$_POST['ID']));
				$html=htmlspecialchars_decode($row['Value']);
				$fanhui[0] =  $html;
			}
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui)); 
		}
		if($_POST['type']=='saveList'){
		$row=$zxn_user_db->get_one(array('ID'=>$_POST['ID']));
		$Valarr=string2array($row['Value']);
		$Valtit['title']=$r['Title'];
		$fanhui[0]=$Valarr;
		$fanhui[1]=$Valtit;
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui));
		}
		}
   }
	
	

}
?>