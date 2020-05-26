<?

$data=$_POST;
$dbzb=substr($data['url'],0,4);
if($dbzb=='http'){$url= $data['url'];}else{$url='http://'.$data['url'].'';}


$handle = fopen($url, "rb");  //读取店铺页面
$contents = stream_get_contents($handle); 
fclose($handle); 
$tihuan='J_TAllCatsTree" id="biaoji234" style="';
$jiaguo1=str_replace("J_TAllCatsTree",$tihuan,$contents);


$strarr=explode("J_TAllCatsTree",$contents);
$guolu2=explode('cats-tree">',$strarr['1']);
$guolu3=explode('fst-cat">',$guolu2['1']);
$num=count($guolu3);$num1=$num-1;$num2=$num-2;
$guolu4=explode('class="menu-list"',$guolu3[$num1]);
$zh='';
for($i=0;$i<$num1;$i++){
  $zh=''.$zh.''.$guolu3[$i].'fst-cat">';
	}
 $zhxx=''.$zh.''.$guolu4['0'].'</h4></li>';

  $fenlei=mb_convert_encoding($zhxx, "UTF-8", "GBK");
$str=$fenlei;
$str=preg_replace("/\s+/", " ", $str); //过滤多余回车 
$str=preg_replace("/<[ ]+/si","<",$str); //过滤<__("<"号后面带空格) 
$str=preg_replace("/<(i.*?)>(.*?)<(\/i.*?)>/si","",$str); //过滤style标签
//$str=preg_replace("/<(\/?div.*?)>/si","",$str); //过滤style标签
$str=preg_replace("/<(div.*?)>/si","",$str); //过滤title标签 
$str=preg_replace("/<(\/div.*?)>/si","",$str); //过滤title标签 
$str=preg_replace("/<(\/?h4.*?)>/si","",$str); //过滤style标签

//清算
$arr = array();
$dfs = array();
$all = array();
$xx = array();
$fgx1=explode('fst-cat"',$str);
for($k=0,$i=2;$i<count($fgx1);$i++,$k++){
	$fgx2='';
	$fgx2=explode("<ul",$fgx1[$i]);
	 $fgx3=explode("category-",$fgx2['0']);
	 $fgx4=explode(".htm",$fgx3['1']);
	 $dd['id']=$fgx4['0'];//id
	 $fgx5=explode("</a>",$fgx3['1']);
	 $fgx6=explode(">",$fgx5['0']);
	 $dd['name']=$fgx6['1'];//name
	 $dd['subCats']='';
	 if(!empty($fgx2['1'])&&$fgx2['1']){ 
	 $xx1=explode("snd-cat-name",$fgx2['1']);
	 for($m=0,$n=1;$n<count($xx1);$n++,$m++){$xx['id']='';$xx['name']='';$xx='';
		 $xx2=explode("category-",$xx1[$n]);
		 $xx3=explode(".htm",$xx2['1']);
		 $xx['id']=$xx3['0'];//xiaoid
		 $xx4=explode("</a>",$xx3['1']);
		 $xx5=explode(">",$xx4['0']);
		 $xx['name']=$xx5['1'];//xname
		 $dd['subCats'][]=$xx;
		 }
	 }
    $arr[]=$dd;
	}
	$dfs['cats']=$arr;
	$all['data']=$dfs;
	$all['ret'][]="SUCCESS::调用成功";
	
	header('Content-Type:application/json;charset=utf-8');
   $json = json_encode($all); 
   print_r($json);	

?>