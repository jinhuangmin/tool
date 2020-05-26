<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_func('area','zxn');
class com {
	public function __construct() {
		
	}



public function gis () {
		$images=$_POST; 
		$piclink=$images['img'];
		$info= getImagesInfo($piclink);
		$ruten =array();
		$ruten['0']=$info["width"];
		$ruten['1']=$info["height"];
		$ruten['2']='2';
		$ruten['3']='width='.$info["width"].'';
		$ruten['4']='height='.$info["height"].'';
		$ruten['bits']='8';
		$ruten['channels']='3';
		$ruten['mime']='image/'.$info["type"].'';
		
		 header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($ruten));
	}
	
public function gisarr () {
		$data=$_POST; 
		$items=$data['imgarr'];
		foreach($items as $images){
			if(!empty($images)){
		$piclink=$images;
		$info= getImagesInfo($piclink);
		$ruten =array();
		$ruten['0']=$info["width"];
		$ruten['1']=$info["height"];
		$ruten['2']='2';
		$ruten['3']='width='.$info["width"].'';
		$ruten['4']='height='.$info["height"].'';
		$ruten['bits']='8';
		$ruten['channels']='3';
		$ruten['mime']='image/'.$imgtype.'';
		$all[]=$ruten;
		 }else{$all[]=false;}
		}	
		 header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($all));
	}

public function server () {
		if (isset($_POST)) {
		$time=time();
		$zxd_ku_db = pc_base::load_model('zxd_ku_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$arr=array();$data=array();$data2=array();
		$page=$_POST['page'];
		$sort=$_POST['sort'];
		$title=trim($_POST['title']);$label=$_POST['label'];
        $keys=explode(" ",trim($label));$keynum=count($keys);
		if($sort=='sort'){$order='CreaTime DESC';}
		if($sort=='faver'){$order='Cang DESC';}
		if($sort=='use'){$order='Cang DESC';}
		if($sort=='time'){$order='CreaTime DESC';}

		$rows=$zxd_ku_db->select('', '*', '', $order, '', '');
		
		foreach($rows as $row){
		  $arr['id']=$row['ID'];
		  $arr['shareTitle']=$row['Title'];
		  $arr['time']=date("Y-m-d",strtotime($row['CreaTime']));
		  $arr['image']=$row['Pic'];
		  $arr['name']=$row['UserName'];
		  $arr['shareLabel']=$row['Cate'];
		  $cates=explode(" ",$row['Cate']);
		  if(!empty($title)&&empty($label)){
			  if(stripos($row['Title'],$title)>-1){ $data[]=$arr;$k=$k+1;}
			  }
		  if(!empty($label)&&empty($title)){$n=0;
			  foreach($keys as $f=>$key){if(in_array($key,$cates)){$n++;}}
			  if($keynum==$n){ $data[]=$arr;$k=$k+1;}
			  }
			  
		   if(!empty($title)&&!empty($label)){$n=0;
			   foreach($keys as $f=>$key){if(in_array($key,$cates)){$n++;}}
			   if($keynum==$n&&stripos($row['Title'],$title)>-1){ $data[]=$arr;$k=$k+1;}
			   }
		   if(empty($title)&&empty($label)){ $data[]=$arr;$k=$k+1; }
		
		}
		$arr=array();
		$yiye=30;
		$yenum = ceil( $k / $yiye );
		$mus= $yenum * $yiye ;if($page==0||$page==''){$page=1;}
		$star=($page-1) * $yiye ; $end= $page * $yiye ;
		$rei=0;
		if($k>$star){
		for($i=$star;$i<$end;$i++){
			if($i<$k){
		  $data2[$rei]=$data[$i];
		  $rei++;
			}
		}
		$msg='Retrieved pictures';
		}else{$msg='No more pictures';}
		
		 $all['success']='true';
		 $all['message']=$msg;
		 $all['data']=$data2;
		header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($all));

		}
   }

public function useCode () {
		if (isset($_POST)) {
		$time=time();
		$zxd_ku_db = pc_base::load_model('zxd_ku_model');
		$zxd_user_db = pc_base::load_model('zxd_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['type']=='genList'){
		$row=$zxd_ku_db->get_one(array('ID'=>$_POST['ID']));
		//$fanhui[] = stripslashes($row['Value']);
		$fanhui[] = $row['Value'];
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui)); 
		}
		if($_POST['type']=='saveList'){
		$row=$zxd_user_db->get_one(array('ID'=>$_POST['ID']));
		$fanhui['0'] =  $row['Value'];
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($fanhui));
		}
		}
   }

public function previewI () {
		$ID=$_GET['act'];
		$zxd_ku_db = pc_base::load_model('zxd_ku_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_GET['act']!==''){
		$row=$zxd_ku_db->get_one(array('ID'=>$ID));
		$html = $row['Value'];
		include template('zxd', 'previewI');
		}

   }

public function preview () {
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$html='';
		if(isset($_POST)){
		if(isset($_POST['codeObj']) && !empty($_POST['codeObj'])){
			$codeObj=stripslashes($_POST['codeObj']) ;
			$areadata = json_decode($codeObj,true);
			$arr=getarea($areadata);
			$pos=explode('${!jdb}',$_POST['code']);
			foreach($pos as $i=>$item){
			$html=$html.$item.$arr[$i];
				}
			}else{
			$html=$_POST['code'];
			}
		include template('zxn', 'preview');
		}

   }

public function getstyle () {
		if (isset($_POST)) {
		$zxn_style_common_db = pc_base::load_model('zxn_style_common_model');
		$zxn_style_user_db = pc_base::load_model('zxn_style_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$type=!empty($_POST['styletype'])?$_POST['styletype']:'jib';
		$arrlist1=$zxn_style_common_db->select(array('styletype'=>$type),'ID,stylecode,stylecode1,styletext,styleurl');
		if($_username){$arrlist2=$zxn_style_user_db->select(array('styletype'=>$type,'username'=>$_username),'ID,stylecode,stylecode1,styletext,styleurl'); }else{$arrlist2='';}
		$arrlist = array_merge($arrlist1, $arrlist2);
		header('Content-Type:application/json;charset=utf-8');
		$arrlist = array_merge($arrlist1, $arrlist2); 
	    echo json_encode($arrlist);
		}
	}

}
?>