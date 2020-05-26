<?php
//@ini_set('max_input_vars','50000');
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_func('area','zxn');
class com { 
	public function __construct() {
		
	}

public function gm () {
		$url=isset($_POST['url'])?$_POST['url']:'';
		if($url){
		$handle = fopen ($url, "rb"); 
		$contents = ""; 
		do { 
		$data = fread($handle, 1024); 
		if (strlen($data) == 0) { 
		break; 
		} 
		$contents .= $data; 
		} while(true); 
		fclose ($handle); 
		
		if (preg_match("/shopId=\d+/i",$contents,$matches)) {
			$id=explode("=",$matches[0]);
			print_r( $id[1]);
		} else {
			echo "";
		}
		}
	}	
	
public function gsi () {
		$url=isset($_POST['url'])?$_POST['url']:'';
		if($url){
		$ruten =array();
		$handle = fopen ($url, "rb"); 
		$contents = ""; 
		do { 
		$data = fread($handle, 1024); 
		if (strlen($data) == 0) { 
		break; 
		} 
		$contents .= $data; 
		} while(true); 
		fclose ($handle); 
		
		if (preg_match("/shopId=\d+/i",$contents,$matches)) {
			$id=explode("=",$matches[0]);
			$ruten['0']="yes";
		    $ruten['1']=$id[1];
		} else {
			$ruten['0']="no";
		    $ruten['1']="";
		}
		header('Content-Type:application/json;charset=utf-8');
		print_r(json_encode($ruten));
		}
	}


public function itemstyle () {
		if (isset($_POST)) {
		$time=time();
		$zxn_style_common_db = pc_base::load_model('zxn_style_common_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$type=!empty($_POST['styletype'])?$_POST['styletype']:'jib';
		$arrlist=$zxn_style_common_db->select(array('styletype'=>$type));
		include template('zxn', "itemstyle_".$type);
		}
	}

public function olddel () {
		$time=time();
		$old2user = pc_base::load_model('old2user_model');
		$r = $old2user->delete(array('ID'=>$_POST['ID']));
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
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$arr=array();$data=array();$data2=array();
		$page=$_POST['page'];
		$sort=$_POST['sort'];
		$title=trim($_POST['title']);$label=$_POST['label'];
        $keys=explode(" ",trim($label));$keynum=count($keys);
		if($sort=='sort'||$sort==''){$order='listorder DESC , CreaTime DESC';}
		if($sort=='faver'){$order='Cang DESC';}
		if($sort=='use'){$order='Hot DESC';}
		if($sort=='time'){$order='CreaTime DESC';}

	//	$arrlist=$zxn_ku_tb_db->listinfo($where = '', $order = '', $page = 1, $pagesize = 20, $key='', $setpages = 10,$urlrule = '',$array = array(), $data = '*');
	//	select($where = '', $data = '*', $limit = '', $order = '', $group = '', $key='')
		$rows=$zxn_ku_tb_db->select('', '*', '', $order, '', '');
		
		foreach($rows as $row){
		  $arr['id']=$row['ID'];
		  $arr['shareTitle']=$row['Title'];
		  $arr['time']=date("Y-m-d",$row['CreaTime']);
		  $arr['preview']=$row['Pic'];
		  $arr['name']='分享者：'.$row['UserName'];
		  $arr['username']=$row['UserName'];
		  $arr['shareLabel']=$row['Cate'];
		  $cates=explode(" ",$row['Cate']);
		  $arr['imgname']=$row['YuanPic'];
		  $arr['type']=$row['version'];
			$arr['psd']=$row['Psd'];
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



public function previewI () {
		$ID=$_GET['act'];
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['act']!==''){
		$row=$zxn_ku_tb_db->get_one(array('ID'=>$ID));
		$html =  $row['Value'];
		include template('zxn', 'previewI');
		}

   }
   
public function previewP () {
		$ID=$_GET['act'];
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$zxn_user_db = pc_base::load_model('zxn_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		if($_POST['act']!==''){
		$row=$zxn_ku_tb_db->get_one(array('ID'=>$ID));
		$html =  $row['Value'];
		$time=date("Y-m-d H:i:s", $row['CreaTime']);
		$numupdate=$zxn_ku_tb_db->update(array('Hot'=>'+=1', ),array('ID'=>$ID));
		include template('zxn', 'previewP');
		}

   }
	
	
public function previewFx () {
		$ID=$_GET['act'];
		$zxn_linshi_db = pc_base::load_model('zxn_linshi_model');
		if($_POST['act']!==''){
		$row=$zxn_linshi_db->get_one(array('ID'=>$ID));
		$html =  $row['Value'];
		include template('zxn', 'previewFx');
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

public function servernum () {
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$rows=$zxn_ku_tb_db->select(array('cj'=>'0'));
		$num=count($rows);
		 $all['success']='true';
		 $all['num']=$num;
		header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($all));
       }
	   
public function serverdata () {
		$zxn_ku_tb_db = pc_base::load_model('zxn_ku_tb_model');
		$page=$_GET['p'];
		$rows=$zxn_ku_tb_db->listinfo(array('cj'=>'0'), 'ID ASC', $page, '10');
		 $all['success']='true';
		 $all['data']=$rows;
		header('Content-Type:application/json;charset=utf-8');
		 print_r(json_encode($all));
       }


public function getstyle () {
		if (isset($_GET)) {
		$zxn_style_common_db = pc_base::load_model('zxn_style_common_model');
	//	$zxn_style_user_db = pc_base::load_model('zxn_style_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');
		$type=!empty($_GET['styletype'])?$_GET['styletype']:'jib';
		include template('zxn', "getstyle_".$type);
		}
	}
	
public function itemarr () {
	if (isset($_POST)) {
		$zxn_style_common_db = pc_base::load_model('zxn_style_common_model');
		$zxn_style_user_db = pc_base::load_model('zxn_style_user_model');
		$_username = param::get_cookie('_username');
		$_usernick = param::get_cookie('_nickname');

$type=$_POST['type'];
$count=$_POST['count'];
$num=$count+1;
$content = explode(',',$_POST['content']);
$href= explode(',',$_POST['href']);
$check=count($href)==0?'no':'yes';
$readVal=explode(',',$_POST['readVal']);
$pSrc = explode(',',$_POST['pSrc']);
$oppoSrc = explode(',',$_POST['oppoSrc']);
$pSrcPos=explode(',',$_POST['pSrcPos']);
$oSrcPos=explode(',',$_POST['oSrcPos']);
$ce=explode(',',$_POST['catchChooseWM']);

$subScriptSrc=!empty($_POST['subScriptSrc'])?$_POST['subScriptSrc']:',,,,,';
$subScript1Src=!empty($_POST['subScript1Src'])?$_POST['subScript1Src']:',,,,,';
$subScript2Src=!empty($_POST['subScript2Src'])?$_POST['subScript2Src']:',,,,,';
$subScript3Src=!empty($_POST['subScript3Src'])?$_POST['subScript3Src']:',,,,,';
$subScript4Src=!empty($_POST['subScript4Src'])?$_POST['subScript4Src']:',,,,,';
$expandText=!empty($_POST['expandText'])?$_POST['expandText']:',,,,,';
$expandText1=!empty($_POST['expandText1'])?$_POST['expandText1']:',,,,,';
$expandText2=!empty($_POST['expandText2'])?$_POST['expandText2']:',,,,,';
$expandText3=!empty($_POST['expandText3'])?$_POST['expandText3']:',,,,,';
$expandText4=!empty($_POST['expandText4'])?$_POST['expandText4']:',,,,,';
$expandTextSet=isset($_POST['expandTextSet'])?$_POST['expandTextSet']:'|;||;||;||;||;|';
$expandText1Set=isset($_POST['expandText1Set'])?$_POST['expandText1Set']:'|;||;||;||;||;|';
$expandText2Set=isset($_POST['expandText2Set'])?$_POST['expandText2Set']:'|;||;||;||;||;|';
$expandText3Set=isset($_POST['expandText3Set'])?$_POST['expandText3Set']:'|;||;||;||;||;|';
$expandText4Set=isset($_POST['expandText4Set'])?$_POST['expandText4Set']:'|;||;||;||;||;|';
	
	if($_POST['type']=='itemLink'){ include template('zxn', 'itemarr_itemLink'); }
	else if($_POST['type']=='itemPic'||$_POST['type']=='itemPicHover'){ $wz=$type=='itemPic'?'宝贝主图':'变换图片'; include template('zxn', 'itemarr_itemPic'); }
	else if($_POST['type']=='itemTitle'||$_POST['type']=='itemSubTitle'){ $wz=$type=='itemTitle'?'宝贝标题':'宝贝副标题';include template('zxn', 'itemarr_itemTitle');}
	else if($_POST['type']=='itemPrice'||$_POST['type']=='itemDiscountPrice'||$_POST['type']=='itemSale'){
		if($_POST['type']=='itemPrice'){$wz='宝贝原价';}
		if($_POST['type']=='itemDiscountPrice'){$wz='宝贝现价';}
		if($_POST['type']=='itemSale'){$wz='宝贝销量';}
		include template('zxn', 'itemarr_itemPrice');
		}else{
	if($_POST['type']=='itemSubScriptSrc'){$wz='扩展图片(1)';}
	if($_POST['type']=='itemSubScript1Src'){$wz='扩展图片(2)';}
	if($_POST['type']=='itemSubScript2Src'){$wz='扩展图片(3)';}
	if($_POST['type']=='itemSubScript3Src'){$wz='扩展图片(4)';}
	if($_POST['type']=='itemSubScript4Src'){$wz='扩展图片(5)';}
	if($_POST['type']=='itemExpandText'){$wz='扩展文字(1)';}
	if($_POST['type']=='itemExpandText1'){$wz='扩展文字(2)';}
	if($_POST['type']=='itemExpandText2'){$wz='扩展文字(3)';}
	if($_POST['type']=='itemExpandText3'){$wz='扩展文字(4)';}
	if($_POST['type']=='itemExpandText4'){$wz='扩展文字(5)';}	
		include template('zxn', 'itemarr_other');	
			}
	
	

		
		
		}
	
	}	

}
?>