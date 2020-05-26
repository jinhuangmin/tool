<?
//过滤 
function myTrim($str)
{
$str = str_replace('\\\"', '"', $str);
$str = str_replace('\"', '"', $str);
$str = str_replace('\n"', '', $str);
$str = str_replace('\r"', '', $str);
$str = str_replace('\t"', '', $str);
//$str = str_replace('  ', '', $str);
//$str = str_replace('　　"', '', $str);
 return $str;
}

function getHtml($list)
{
if($list['dataOpacity']==''||$list['dataOpacity']=='1'){ 
	$Opacity_attr='';$Opacity_css='';
	}else{
	$Opacity_op=$list['dataOpacity']/100;
	$Opacity_attr='data-lo="'.$list['dataOpacity'].'"';
	$Opacity_css='opacity: '.$Opacity_op.';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$list['dataOpacity'].');';
	}
	
/*****   热区   *****/
if($list['appType']=='jdb'){ 
	$config=$list['config'];
	$pos=explode('|',$list['pos']);
	if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='junezxneedcheckembed;';}
	if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
	if($config['mongoliaControl']=='mongoliaShow'){$mongoliaMode=$config['mongoliaMode'];}else{$mongoliaMode='';}
	if($config['borderControl']=='hborder'){$bord='border:'.$config['borderWidth'].'px solid '.$config['borderColor'].';';$mtl='top:-'.$config['borderWidth'].'px;left:-'.$config['borderWidth'].'px;';$jian0=$config['borderWidth']*2;}else{$bord='';$mtl='top:0px;left:0px;';$jian0=0;}
	 
	
	if($config['borderControl1']=='hborder1'){$wbord='border:'.$config['borderWidth1'].'px solid '.$config['borderColor1'].';';$borderradius='border-radius:'.$config['borderRadius1'].'px;';}else{$wbord='border:none;';$borderradius='';}

	if($config['shadowControl']=='shadowShow'){ 
	     $shadow='box-shadow: '.$config['shadowLeft'].'px '.$config['shadowTop'].'px '.$config['shadowBlur'].'px '.$config['shadowSize'].'px '.$config['shadowColor'].';';
		 }else{$shadow='';}
	if($config['shadowControl1']=='shadowShow1'){ 
	     $shadow1='box-shadow: '.$config['shadowLeft1'].'px '.$config['shadowTop1'].'px '.$config['shadowBlur1'].'px '.$config['shadowSize1'].'px '.$config['shadowColor1'].';';
		 }else{$shadow1='';}
	
	
	if($config['outlineControl']=='outlineShow'){$outline='outline-color:'.$config['outlineColor'].';';$outlineSpeed=$config['outlineSpeed'];$outlineWidth=$config['outlineWidth'];$outlineShadowColor=$config['outlineShadowColor']?'color:'.$config['outlineShadowColor'].';':'color:transparent;';$outlclass='jzi';$zindex='';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';$zindex='z-index:10;';}
    
	if($config['linkMode']=='ptlink'){$href=$config['href']?'href="'.$config['href'].'"':'';}
	if($config['linkMode']=='wwlink'){ $fliu=$config['shuntMode']=='no'?'1':'2'; $href=$config['shuntMode']=='no' ? 'href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status=1&charset=utf-8"' : 'href="http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($config['wangID']).'&site=cntaobao&s=2&groupid=0&charset=utf-8"';}
	if($config['linkMode']=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';} 
	if($config['linkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}
	 if($i>0){echo'${!|}';}
	 if($config['tipText']==''){$tipText='';}else{$tipText='title="'.$config['tipText'].'"';}
	
	
	$wdwidth=$config['borderControl1']=='hborder1'?$pos['0']-$config['borderWidth1']*2:$pos['0'];
	$wdheigh=$config['borderControl1']=='hborder1'?$pos['1']-$config['borderWidth1']*2:$pos['1'];
	//$wdwidth=$pos['0'];
	//$wdheigh=$pos['1'];
	
if($config['borderControl']=='hborder'||$config['shadowControl']=='shadowShow'||($config['outlineControl']=='outlineShow'&&$config['mongoliaControl']=='mongoliaShow')||($config['pSrc']!==''&&$config['mongoliaControl']=='mongoliaShow')){
	
return'<div class="jdb jspb abs '.$config['appID'].' '.$mongoliaMode.' '.$config['borderControl'].' '.$config['shadowControl'].' '.$outlineWidth.' '.$outlclass.' '.$config['borderControl1'].' '.$config['shadowControl1'].'" '.$Opacity_attr.' style="'.$Opacity_css.''.$sbj.''.$scl.''.$outline.''.$outlineShadowColor.'display:block;width:'.$wdwidth.'px;height:'.$wdheigh.'px;top:'.$pos['2'].'px;left:'.$pos['3'].'px;'.$wbord.''.$borderradius.''.$shadow1.$zindex.'" data-linkmode="ptlink" data-appid="'.$config['appID'].'" >
  <a class="jdbchild abs june-box-fadein '.$catr.' '.$config['outlineSpeed'].'" data-shadow="" '.$href.' '.$hrefMode.' style="display:block;'.$mtl.'width:'.$wdwidth.'px;height:'.$wdheigh.'px;'.$bord.''.$borderradius.''.$shadow.'" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.'></a>
  <a class="jdbmc abs '.$mongoliaMode.' '.$catr.'" '.$href.' '.$hrefMode.' style="display:block;width:'.$wdwidth.'px;height:'.$wdheigh.'px;top:0;left:0;" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.'></a>
</div>';
}else{
 return'<a class="jdb abs '.$config['appID'].' '.$mongoliaMode.' '.$outlineWidth.' '.$outlclass.' '.$catr.' '.$outlineSpeed.' '.$config['borderControl1'].' '.$config['shadowControl1'].'" '.$href.' '.$hrefMode.' '.$Opacity_attr.' style="'.$Opacity_css.''.$sbj.''.$scl.''.$outline.''.$outlineShadowColor.'display:block;width:'.$wdwidth.'px;height:'.$wdheigh.'px;top:'.$pos['2'].'px;left:'.$pos['3'].'px;'.$wbord.''.$borderradius.$zindex.$shadow1.'" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.'></a>';
	}
	
    }
/*****   热区结束  *****/


/*****     特效层    *****/
if($list['appType']=='jspb'){
	 $config=$list['config'];
	 $pos=explode('|',$list['pos']);

$bg=$config['pSrc']?'background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;':'';
$bgColor=$config['bgColor']?'background-color:'.$config['bgColor'].';':'';
$mdjs1=0;$mdjs2=0;
if($config['overflowMode']=='visible'){$ovcss='overflow:visible;'; $ovclass='j-zdv';}
if($config['overflowMode']=='visibleX'){$ovcss=''; $ovclass='u-a';}
if($config['overflowMode']=='hidden'){$ovcss='overflow:hidden;'; $ovclass='';}

$cssTX=$config['css3Bezier'].$config['css3Weight'];$css3Delay=$config['css3Delay']?''.$config['css3Delay'].'s':'';
switch ($cssTX)
{
case 'bs1':  $css3='cubic-bezier(1, 0, 1, 0) '.$css3Delay.';';  break; //慢到块 强  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:1
case 'bs2':  $css3='cubic-bezier(1, 0, 1, 1) '.$css3Delay.';';  break;  //慢到块 中  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:2
case 'bs3':  $css3='cubic-bezier(0.42, 0, 1, 1) '.$css3Delay.';';  break; //慢到块 弱  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:3
case 'bq1':  $css3='cubic-bezier(0, 1, 0, 1) '.$css3Delay.';';  break; //快到慢 强  bq  1
case 'bq2':  $css3='cubic-bezier(0, 0, 0, 1) '.$css3Delay.';';  break;
case 'bq3':  $css3='cubic-bezier(0, 0, 0.58, 1) '.$css3Delay.';';  break;
case 'bt1':  $css3='cubic-bezier(0.5,2.2,1,0.8) '.$css3Delay.';';  break; //跑过回头(加速) bt 1
case 'bt2':  $css3='cubic-bezier(0.5,2.2,0.5,0.8) '.$css3Delay.';';  break;
case 'bt3':  $css3='cubic-bezier(1,2.2,0.5,0.8) '.$css3Delay.';';  break;
case 'bc1':  $css3='cubic-bezier(0.5,0.2,1,-1.2) '.$css3Delay.';';  break; //起步后撤(加速) bc 1
case 'bc2':  $css3='cubic-bezier(0.5,0.2,0.5,-1.2) '.$css3Delay.';';  break;
case 'bc3':  $css3='cubic-bezier(1,0.2,0.5,-1.2) '.$css3Delay.';';  break;
case 'bd1':  $css3='cubic-bezier(0.5,1,1,0) '.$css3Delay.';';  break;  //中间停顿(加速) bd 1
case 'bd2':  $css3='cubic-bezier(0.5,1,0.5,0) '.$css3Delay.';';  break;
case 'bd3':  $css3='cubic-bezier(1,1,0.5,0) '.$css3Delay.';';  break;
case 'bx1':  $css3='cubic-bezier(0.5,1.5,0.5,-1.5) '.$css3Delay.';';  break;  //弹性抖动(1) bx 1
case 'bx2':  $css3='cubic-bezier(0.5,2,0.5,-1) '.$css3Delay.';';  break;
case 'bx3':  $css3='cubic-bezier(0.5,3,0.5,0) '.$css3Delay.';';  break;
default:   $css3='linear '.$css3Delay.';';
}
$zicengall='';$zicengdiv=='';
foreach($config['childConfig'] as $i=>$item){
   if($item['css3Mode']){$mdjs1=1;}
   if($item['css3Mode_mr_xz']||$item['css3Mode_mr_sf']||$item['css3Mode_mr_fz']){$mdjs2=1;}
   
$cssZTX=$item['css3Bezier'].$item['css3Weight'];
$NCcss3Delay=$item['css3Delay']?''.$item['css3Delay'].'s':'';
switch ($cssZTX)
{
case 'bs1':  $Zcss3='cubic-bezier(1, 0, 1, 0) '.$NCcss3Delay.';';  break; //慢到块 强  
case 'bs2':  $Zcss3='cubic-bezier(1, 0, 1, 1) '.$NCcss3Delay.';';  break;  //慢到块 中  
case 'bs3':  $Zcss3='cubic-bezier(0.42, 0, 1, 1) '.$NCcss3Delay.';';  break; //慢到块 弱 
case 'bq1':  $Zcss3='cubic-bezier(0, 1, 0, 1) '.$NCcss3Delay.';';  break; //快到慢 强  bq  1
case 'bq2':  $Zcss3='cubic-bezier(0, 0, 0, 1) '.$NCcss3Delay.';';  break;
case 'bq3':  $Zcss3='cubic-bezier(0, 0, 0.58, 1) '.$NCcss3Delay.';';  break;
case 'bt1':  $Zcss3='cubic-bezier(0.5,2.2,1,0.8) '.$NCcss3Delay.';';  break; //跑过回头(加速) bt 1
case 'bt2':  $Zcss3='cubic-bezier(0.5,2.2,0.5,0.8) '.$NCcss3Delay.';';  break;
case 'bt3':  $Zcss3='cubic-bezier(1,2.2,0.5,0.8) '.$NCcss3Delay.';';  break;
case 'bc1':  $Zcss3='cubic-bezier(0.5,0.2,1,-1.2) '.$NCcss3Delay.';';  break; //起步后撤(加速) bc 1
case 'bc2':  $Zcss3='cubic-bezier(0.5,0.2,0.5,-1.2) '.$NCcss3Delay.';';  break;
case 'bc3':  $Zcss3='cubic-bezier(1,0.2,0.5,-1.2) '.$NCcss3Delay.';';  break;
case 'bd1':  $Zcss3='cubic-bezier(0.5,1,1,0) '.$NCcss3Delay.';';  break;  //中间停顿(加速) bd 1
case 'bd2':  $Zcss3='cubic-bezier(0.5,1,0.5,0) '.$NCcss3Delay.';';  break;
case 'bd3':  $Zcss3='cubic-bezier(1,1,0.5,0) '.$NCcss3Delay.';';  break;
case 'bx1':  $Zcss3='cubic-bezier(0.5,1.5,0.5,-1.5) '.$NCcss3Delay.';';  break;  //弹性抖动(1) bx 1
case 'bx2':  $Zcss3='cubic-bezier(0.5,2,0.5,-1) '.$NCcss3Delay.';';  break;
case 'bx3':  $Zcss3='cubic-bezier(0.5,3,0.5,0) '.$NCcss3Delay.';';  break;
default:   $Zcss3='linear '.$NCcss3Delay.';';
}
	$xtop = $list['childData'][$i]['top'];
	$xleft = $list['childData'][$i]['left'];
	$xwidth = $list['childData'][$i]['width'];
	$xheight = $list['childData'][$i]['height'];
	$xattachID = $list['childData'][$i]['attachID'];
	$xdataOpacity = $list['childData'][$i]['dataOpacity'];

	$zcOpacity_attr=$xdataOpacity==100 ? "" : 'data-lo="'.$xdataOpacity.'"';
	$zcOpacity =$xdataOpacity==100 ? "" : 'opacity:'.($xdataOpacity/100).';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$xdataOpacity.');';
	
	$href=$item['href']?'href="'.$item['href'].'"':'';
	$target=$item['href']?'target="'.$item['hrefMode'].'"':'';
	$xbg=$item['pSrc']?'background:url('.$item['pSrc'].') '.$item['imgBgp'].' no-repeat;':'';
	$xbgColor=$item['bgColor']?'background-color:'.$item['bgColor'].';':'';
	if($item['spicSrc']){$ncqie1='background:url('.$item['spicSrc'].') 50% 50% no-repeat;';$ncqie2='src="'.$item['spicSrc'].'"';}else{$ncqie1='display:none;';$ncqie2='';} 
	if($item['css3Mode']!==''&&($item['css3Mode']=='effect_w'||$item['css3Mode']=='effect_w1'||$item['css3Mode']=='effect_h'||$item['css3Mode']=='effect_wh')){$abs='rel';$juneyd='juneyd';}else{$abs='abs';$juneyd='';}
	if($item['css3ModeY']!==''){$juneyd='juneyd';$wcdiv2sty='width:'.$pos[1].'px;height:0px;';}else{$wcdiv2sty='width:100%;height:100%;';}
	$twit=0;
   
  //外层 
 if($item['css3Mode']!==''&&($item['css3Mode']=='effect_w'||$item['css3Mode']=='effect_w1'||$item['css3Mode']=='effect_h'||$item['css3Mode']=='effect_wh')){	
 if($item['css3Mode']=='effect_w'){$wclass2='c-2';$wmr2='';}
 if($item['css3Mode']=='effect_w1'){$wclass2='c-2 c-21';$wmr2='float:right;';}
 if($item['css3Mode']=='effect_h'){$wclass2='d-2';$wmr2='';}
 if($item['css3Mode']=='effect_wh'){$wclass2='c-2 d-2';$wmr2='';}
 $box_1='<div class="abs pspe e-2 jz" '.$zcOpacity_attr.' style="'.$zcOpacity.'width:'.$xwidth.'px;height:'.$xheight.'px;top:'.$xtop.'px;left:'.$xleft.'px;">
 <div class="c-2 '.$wclass2.' outbox '.$item['css3ModeX'].' '.$item['css3ModeY'].' '.$item['css3MoveModeX'].' '.$item['css3MoveModeY'].' '.$item['css3Mode'].'" data-x="'.$item['css3ModeX'].';'.$item['css3ModeY'].'" style="transition: '.$item['css3Speed'].' '.$Zcss3.''.$wmr2.'">';
 $twit=1;
}else{$box_1='';}

 if(($item['css3Mode']!==''&&($item['css3Mode']=='effect_w'||$item['css3Mode']=='effect_w1'||$item['css3Mode']=='effect_h'||$item['css3Mode']=='effect_wh'))||$item['css3ModeY']!==''){
	 $box_2='<div class="'.$abs.' '.$juneyd.'" '.($box_1=='' ? $zcOpacity_attr : "").' style="'.($box_1=='' ? $zcOpacity : "").$wcdiv2sty.''.$wmr2.'">';}else{$box_2='';} //经过父层 旋转特效  
if($item['css3ModeX']||$item['css3ModeY']){//经过父层 横向移动
	if($twit==1){$xtt='';}else{$xtt='top:'.$xtop.'px;left:'.$xleft.'px;';$twit=1;}
	$box_3='<div class="pwxy  '.$abs.' '.$item['css3ModeX'].' '.$item['css3ModeY'].' jz" '.($box_1==''&&$box_2=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2=='' ? $zcOpacity : "").'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.'transition: '.$item['css3Speed'].' '.$Zcss3.'">';
	}else{$box_3='';}
if($item['css3Mode_mr_xz']||$item['css3Mode_xz']){//旋转特效
	if($twit==1){$xtt='';}else{$xtt='top:'.$xtop.'px;left:'.$xleft.'px;';$twit=1;}
	$box_4='<div class="pwa  '.$abs.' '.$item['css3Mode_mr_xz'].' '.$item['css3Mode_xz'].' jz" '.($box_1==''&&$box_2==''&&$box_3=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2==''&&$box_3=='' ? $zcOpacity : "").'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.'transition: '.$item['css3Speed'].' '.$Zcss3.'">';
	}else{$box_4='';}
  if($item['css3Mode_mr_sf']||$item['css3Mode_sf']){//缩放特效
	  if($twit==1){$xtt='';}else{$xtt='top:'.$xtop.'px;left:'.$xleft.'px;';$twit=1;}
	  $box_5='<div class="pwb  '.$abs.' '.$item['css3Mode_mr_sf'].' '.$item['css3Mode_sf'].' jz" '.($box_1==''&&$box_2==''&&$box_3==''&&$box_4=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2==''&&$box_3==''&&$box_4=='' ? $zcOpacity : "").'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.'transition: '.$item['css3Speed'].' '.$Zcss3.'">';
	  } else{$box_5='';}
   if($item['css3Mode_mr_fz']||$item['css3Mode_fz']){ //默认显示 翻转特效
	   if($twit==1){$xtt='';}else{$xtt='top:'.$xtop.'px;left:'.$xleft.'px;';$twit=1;}
	   $box_6='<div class="pwc  '.$abs.' '.$item['css3Mode_mr_fz'].' '.$item['css3Mode_fz'].' jz" '.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5=='' ? $zcOpacity : "").'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.'transition: '.$item['css3Speed'].' '.$Zcss3.'">';
	   }else{$box_6='';}
   if($twit==1){$xtt='top:0px;left:0px;';}else{$xtt='top:'.$xtop.'px;left:'.$xleft.'px;';$twit=1;}
   


     if($item['css3ModeX']||$item['css3ModeY']){$box_3s='</div>';}else{$box_3s='';} //经过父层 横向移动
   if($item['css3Mode_mr_fz']||$item['css3Mode_fz']){$box_6s='</div>';}else{$box_6s='';} //默认显示 翻转特效 结束符
  if($item['css3Mode_mr_sf']||$item['css3Mode_sf']){$box_5s='</div>';}else{$box_5s='';} //缩放特效 结束符
 if($item['css3Mode_mr_xz']||$item['css3Mode_xz']){$box_4s='</div>';}else{$box_4s='';} //旋转特效 结束符
if(($item['css3Mode']!==''&&($item['css3Mode']=='effect_w'||$item['css3Mode']=='effect_w1'||$item['css3Mode']=='effect_h'||$item['css3Mode']=='effect_wh'))||$item['css3ModeY']!==''){$box_2s='</div>';}else{$box_2s='';} //经过父层 旋转特效 结束符
if($item['css3Mode']!==''&&($item['css3Mode']=='effect_w'||$item['css3Mode']=='effect_w1'||$item['css3Mode']=='effect_h'||$item['css3Mode']=='effect_wh')){ $box_1s='</div></div>';}	else{$box_1s='';} 
  //外层结束 
   
$xlinkMode=$item['linkMode']?$item['linkMode']:'ptlink';
if($xlinkMode=='ptlink'){$xhref=$item['href']?'href="'.$item['href'].'"':'';}
if($xlinkMode=='wwlink'){ $fliu=$item['shuntMode']=='no'?'1':'2'; $xhref=$config['shuntMode']=='no' ? 'href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($item['wangID']).'&siteid=cntaobao&status=1&charset=utf-8"' : 'href="http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($item['wangID']).'&site=cntaobao&s=2&groupid=0&charset=utf-8"';}
if($xlinkMode=='mdlink'){$xhref='href="#'.$item['anchorSelect'].'"';$xhrefMode='target="_self"';}else{$xhrefMode='target="'.$item['hrefMode'].'"';}
if($xlinkMode=='gwlink'){$xcatr='J_CartPluginTrigger';$xhref=$item['href']?'href="'.$item['href'].'"':'';$xhrefMode='';}else{$xcatr='';}

if($item['contentType']=='imgContent'){
	 $box_z='<a '.$xhref.' '.$xhrefMode.' data-linkmode="'.$xlinkMode.'" class="jspcb '.$abs.' '.$item['displayMode'].' imghover '.$xcatr.' '.$item['css3MoveModeX'].' '.$item['css3MoveModeY'].' '.$item['css3MoveMode'].' '.$item['attachID'].' '.$item['css3Mode_fz'].' jz" data-appid="'.$item['attachID'].'" '.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5==''&&$box_6=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5==''&&$box_6=='' ? $zcOpacity : "").'transition: '.$item['css3Speed'].' '.$Zcss3.' '.$xbg.''.$xbgColor.'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.''.$wmr2.'" data-jspbType="imgContent"><img class="abs" style="width:'.$xwidth.'px;height:'.$xheight.'px;'.$ncqie1.'" '.$ncqie2.' /></a>';  
	   }
	   
if($item['contentType']=='textContent'){
	$str = stripslashes($item['qssetConfig']);$str = stripslashes($str);
	$wzdata = json_decode($str,true);  
$pos=explode('|',$list['pos']);
if($wzdata['tipText']==''){$tipText='';}else{$tipText='title="'.$wzdata['tipText'].'"';}
if($wzdata['characterMode']=='text'){$datac='data-c="'.$wzdata['characterLineMulti'].'"';}else{$datac='data-h="'.$wzdata['characterContent'].';'.$wzdata['characterItemContent'].'"';}
if($wzdata['characterModeHover']=='text'){$datac2='data-ch="'.$wzdata['characterLineMultiHover'].'"';}else{$datac2='data-hh="'.$wzdata['characterContentHover'].';'.$wzdata['characterItemContentHover'].'"';}
if($wzdata['outlineControl']=='outlineShow'){$outline='outline-color:'.$wzdata['outlineColor'].';';$outlineSpeed=$wzdata['outlineSpeed'];$outlineWidth=$wzdata['outlineWidth'];$outlineShadowColor='color:'.$wzdata['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';}
//正面
if($wzdata['characterFont']){$Font='font-family:'.$wzdata['characterFont'].';';}else{$Font='';}
if($wzdata['characterSize']){$Size='font-size:'.$wzdata['characterSize'].'px;';}else{$Size='';}
if($wzdata['characterColor']){$Color='color:'.$wzdata['characterColor'].';';}else{$Color='';}
if($wzdata['characterLineHeight']){$LineHeight='line-height:'.$wzdata['characterLineHeight'].'px;';}else{$LineHeight='';}
if($wzdata['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$wzdata['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($wzdata['characterIndent']){
		if($wzdata['characterAlign']=='left'){$Indent='padding-left:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='right'){$Indent='padding-right:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='center'){$Indent='padding:0 '.$wzdata['characterIndent'].'px;';}
    }else{$Indent='';}
if($wzdata['characterWeight']){$Weight='font-weight:'.$wzdata['characterWeight'].';';}else{$Weight='';}
if($wzdata['characterStyle']){$FontStyle='font-style:'.$wzdata['characterStyle'].';';}else{$FontStyle='';}
if($wzdata['characterLineOver']||$wzdata['characterLineThrough']||$wzdata['characterLineUnder']){$LineOver='text-decoration:'.$wzdata['characterLineOver'].' '.$wzdata['characterLineThrough'].' '.$wzdata['characterLineUnder'].';';}else{$LineOver='';}
if($wzdata['characterAlign']){$Align='text-align:'.$wzdata['characterAlign'].';';}else{$Align='';}
if($wzdata['borderRadius1']){$borderRadius='border-radius:'.$wzdata['borderRadius1'].';';}else{$borderRadius='';}
if($wzdata['borderControl1']){
	$borderWidth=$wzdata['borderWidth1']?$wzdata['borderWidth1']:'0';
	$border='border:'.$borderWidth.'px solid '.$wzdata['borderColor1'].';'.$borderRadius.';';}else{$border='';}
if($wzdata['shadowControl1']=='shadowShow1'){ 
  $slz1=$wzdata['shadowLeft1']?$wzdata['shadowLeft1']:'0';
  $slz2=$wzdata['shadowTop1']?$wzdata['shadowTop1']:'0';
  $slz3=$wzdata['shadowBlur1']?$wzdata['shadowBlur1']:'0';
  $slz4=$wzdata['shadowSize1']?$wzdata['shadowSize1']:'0';
  $shadow='box-shadow:'.$slz1.'px '.$slz2.'px '.$slz3.'px '.$slz4.'px '.$wzdata['shadowColor1'].' '.$wzdata['shadowStyle1'].';';
 }else{$shadow='';}
if($wzdata['characterBgColor']){$BgColor='background-color:'.$wzdata['characterBgColor'].';';}else{$BgColor='';}
if($wzdata['characterBgSrc']){$BgSrc='background:url('.$wzdata['characterBgSrc'].') '.$wzdata['imgBgp'].' no-repeat;';}else{$BgSrc='';}
if($wzdata['characterWidthMode']=='auto'){$display='display:inline-block;';$wdth='';}else{$display='display:block;';$wdth='width:'.$pos['0'].'px;';}
$wdwidth=$wzdata['borderControl1']=='hborder1'?$xwidth-$wzdata['borderWidth1']*2:$xwidth;
$wdheigh=$wzdata['borderControl1']=='hborder1'?$xheight-$wzdata['borderWidth1']*2:$xheight;
$zhengstyle='width:auto;'.$display.$Align.'height:'.$wdheigh.'px;'.$LineHeight.'white-space: nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$Indent.$FontStyle.$Size.$LineOver.$LetterSpacing.$border.$shadow.'';
//反面
if($wzdata['characterFontHover']){$Font2='font-family:'.$wzdata['characterFontHover'].';';}else{$Font2='';}
if($wzdata['characterSizeHover']){$Size2='font-size:'.$wzdata['characterSizeHover'].'px;';}else{$Size2='';}
if($wzdata['characterColorHover']){$Color2='color:'.$wzdata['characterColorHover'].';';}else{$Color2='';}
if($wzdata['characterLetterSpacingHover']){$LetterSpacing2='letter-spacing:'.$wzdata['characterLetterSpacingHover'].'px;';}else{$LetterSpacing2='';}
if($wzdata['characterIndentHover']){
		if($wzdata['characterAlignHover']=='left'){$Indent2='padding-left:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='right'){$Indent2='padding-right:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='center'){$Indent2='padding:0 '.$wzdata['characterIndentHover'].'px;';}
	}else{$Indent2='';}
if($wzdata['characterWeightHover']){$Weight2='font-weight:'.$wzdata['characterWeightHover'].';';}else{$Weight2='';}
if($wzdata['characterStyleHover']){$FontStyle2='font-style:'.$wzdata['characterStyleHover'].';';}else{$FontStyle2='';}
if($wzdata['characterLineOverHover']||$wzdata['characterLineThroughHover']||$wzdata['characterLineUnderHover']){$LineOver2='text-decoration:'.$wzdata['characterLineOverHover'].' '.$wzdata['characterLineThroughHover'].' '.$wzdata['characterLineUnderHover'].';';}else{$LineOver2='';}
if($wzdata['characterAlignHover']){$Align2='text-align:'.$wzdata['characterAlignHover'].';';}else{$Align2='';}
if($wzdata['characterUnderLine']=='on'&&$wzdata['borderControl']==''){
	$UnderLine='border-bottom: '.$wzdata['characterUnderLineWeight'].'px '.$wzdata['characterUnderLineStyle'].' '.$wzdata['characterUnderLineColor'].';';$UnBH=$wzdata['characterUnderLineWeight']; }else{$UnderLine='';$UnBH=0;}
if($wzdata['characterLineHeightHover']){$lh3=$wzdata['characterLineHeightHover'];$LineHeight2='line-height:'.$lh3.'px;';}else{$LineHeight2=$LineHeight;}
if($wzdata['borderControl']){
	$borderWidth2=$wzdata['borderWidth']?$wzdata['borderWidth']:'0';
	$border2='border:'.$borderWidth2.'px solid '.$wzdata['borderColor'].';'.$borderRadius.';';}else{$border2='';}
if($wzdata['shadowControl']=='shadowShow'){ 
  $slf1=$wzdata['shadowLeft']?$wzdata['shadowLeft']:'0';
  $slf2=$wzdata['shadowTop']?$wzdata['shadowTop']:'0';
  $slf3=$wzdata['shadowBlur']?$wzdata['shadowBlur']:'0';
  $slf4=$wzdata['shadowSize']?$wzdata['shadowSize']:'0';
  $shadow2=''.$slf1.' '.$slf2.' '.$slf3.' '.$slf4.' '.$wzdata['shadowColor'].' '.$wzdata['shadowStyle'].';';
 }else{$shadow2='';}
if($wzdata['characterBgColorHover']){$BgColor2='background-color:'.$wzdata['characterBgColorHover'].';';}else{$BgColor2='';}
if($wzdata['characterBgSrcHover']){$BgSrc2='background:url('.$wzdata['characterBgSrcHover'].') '.$wzdata['imgBgpHover'].' no-repeat;';}else{$BgSrc2='';}
$wdwidth2=$wzdata['borderControl']=='hborder'?$xwidth-$wzdata['borderWidth']*2:$xwidth;
$wdheigh2=$wzdata['borderControl']=='hborder'?$xheight-$wzdata['borderWidth']*2:$xheight-$UnBH;
$fanstyle='display:block;width:auto;top:-100%;left:0;'.$Align.'height:'.$wdheigh2.'px;'.$LineHeight2.'white-space: nowrap;word-break:break-all;'.$BgSrc2.$BgColor2.$Color2.$Font2.$Indent2.$Weight2.$FontStyle2.$Size2.$LineOver2.$LetterSpacing2.$border2.$shadow2.''.$UnderLine.'';



preg_match("&id=(\\d+)&",$wzdata['characterItemContent'],$itemIds);/***获取商品id**/
$itemId=explode('=',$itemIds[0]);
if($wzdata['characterMode']=='text'){
	$characterContent=$wzdata['characterContent'];
}else if($wzdata['characterMode']=='price'){
	$characterContent="%7b$".$itemId[1].".price.2f%7d";
}else if($wzdata['characterMode']=='_price'){
	$characterContent="%7b$".$itemId[1].".discountPrice.2f%7d";
}else if($wzdata['characterMode']=='sale'){
	$characterContent="%7b$".$itemId[1].".soldCount%7d";
}else if($wzdata['characterMode']=='title'){
	$characterContent="%7b$".$itemId[1].".title%7d";
}

preg_match("&id=(\\d+)&",$wzdata['characterItemContentHover'],$itemIdsHover);/***获取商品id**/
$itemIdHover=explode('=',$itemIdsHover[0]);
if($wzdata['characterModeHover']=='text'){
	$characterContentHover=$wzdata['characterContentHover'];
}else if($wzdata['characterModeHover']=='price'){
	$characterContentHover="%7b$".$itemIdHover[1].".price.2f%7d";
}else if($wzdata['characterModeHover']=='_price'){
	$characterContentHover="%7b$".$itemIdHover[1].".discountPrice.2f%7d";
}else if($wzdata['characterModeHover']=='sale'){
	$characterContentHover="%7b$".$itemIdHover[1].".soldCount%7d";
}else if($wzdata['characterModeHover']=='title'){
	$characterContentHover="%7b$".$itemIdHover[1].".title%7d";
}


if($wzdata['characterHoverMode']=='off'){
	$contwzbox='<a class="rel" '.$xhref.' style="'.$zhengstyle.'" '.$xhrefMode.'>'.$characterContent.'</a>';
	$wccls2='';
}else{
$contwzbox='<a class="rel  '.$wzdata['characterHoverSpeed'].' juneo" '.$xhref.' style="'.$zhengstyle.'" '.$xhrefMode.'>'.$characterContent.'</a><a class="rel  junei" '.$href.' '.$xhrefMode.' style="'.$fanstyle.'">'.$characterContentHover.'</a>';
$wccls2='junefade';
}
$box_z='<div data-appid="'.$item['attachID'].'" data-jspbType="textContent" data-linkmode="'.$xlinkMode.'" class="jspcb '.$abs.' '.$item['displayMode'].' imghover '.$item['css3MoveModeX'].' '.$item['css3MoveModeY'].' '.$item['css3MoveMode'].' '.$item['attachID'].' jz '.$wccls2.' jnwz '.$item['css3Mode_fz'].' jz '.$wzdata['borderControl'].' '.$wzdata['borderControl1'].' '.$wzdata['shadowControl'].' '.$wzdata['shadowControl1'].' '.$outlineWidth.' '.$outlineSpeed.'" data-t="'.$wzdata['characterMode'].';'.$wzdata['characterModeHover'].'" '.$datac.' '.$datac2.' data-w="'.$wzdata['characterWidthMode'].'" '.$tipText.' data-o="1;1" '.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5==''&&$box_6=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5==''&&$box_6=='' ? $zcOpacity : "").'transition: '.$item['css3Speed'].' '.$Zcss3.'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.''.$outline.''.$outlineShadowColor.'">'.$contwzbox.'</div>';
   }
if($item['contentType']=='customContent'){
	 $box_z='<div class="jspcb '.$abs.' '.$item['displayMode'].' imghover '.$item['css3MoveModeX'].' '.$item['css3MoveModeY'].' '.$item['css3MoveMode'].' '.$item['attachID'].' '.$item['css3Mode_fz'].' jz" data-linkmode="'.$xlinkMode.'" data-appid="'.$item['attachID'].'" '.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5==''&&$box_6=='' ? $zcOpacity_attr : "").' style="'.($box_1==''&&$box_2==''&&$box_3==''&&$box_4==''&&$box_5==''&&$box_6=='' ? $zcOpacity : "").'transition: '.$item['css3Speed'].' '.$Zcss3.'width:'.$xwidth.'px;height:'.$xheight.'px;'.$xtt.''.$wmr2.'" data-jspbType="customContent">
   '.$item['customContent'].'
</div>';
	   }


$zicengdiv=''.$box_1.''.$box_2.''.$box_3.''.$box_4.''.$box_5.''.$box_6.''.$box_z.''.$box_6s.''.$box_5s.''.$box_4s.''.$box_3s.''.$box_2s.''.$box_1s.'';
$zicengall=$zicengall.$zicengdiv;

}

if($mdjs1==1){$zxcss3class1='u-e u-c u-d';}else{$zxcss3class1='';}
if($mdjs2==1){$zxcss3class2='mr';}else{$zxcss3class2='';}
$linkMode=$config['linkMode']?$config['linkMode']:'ptlink';

if($linkMode=='ptlink'){$href=$config['href']?'href="'.$config['href'].'"':'';}
if($linkMode=='wwlink'){ $fliu=$config['shuntMode']=='no'?'1':'2'; $href=$config['shuntMode']=='no' ? 'href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status=1&charset=utf-8"' : 'href="http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($config['wangID']).'&site=cntaobao&s=2&groupid=0&charset=utf-8"';}
if($linkMode=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';}
if($linkMode=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}

$box_0='<div class="jspb pfw abs imghover  '.$config['displayMode'].' '.$config['css3ModeX'].' '.$config['css3ModeY'].' '.$config['css3Mode'].' '.$config['css3MoveModeX'].' '.$config['css3MoveModeY'].' '.$config['css3MoveMode'].' '.$config['appID'].' '.$ovclass.' '.$zxcss3class1.' '.$zxcss3class2.'" data-appid="'.$config['appID'].'" data-linkmode="'.$linkMode.'" '.$Opacity_attr.' style="'.$Opacity_css.'transition: '.$config['css3Speed'].' '.$css3.''.$ovcss.''.$bg.''.$bgColor.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;">';
$box_0s='</div>';

$wlink='<a class="abs '.$catr.'" '.$href.' target="'.$config['hrefMode'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;top:0px;left:0px;display:block"></a>';

return ''.$box_0.''.$zicengall.''.$wlink.''.$box_0s.'';


	}
/*****   特效层结束  *****/

/*****     评论组件    *****/
if($list['appType']=='jplb'){
	 $config=$list['config'];
	 $pos=explode('|',$list['pos']);
$widget="{'isAutoHeight':false,'param':{'target_key':'junezx-".$config['appID']."','type_id':'1100035','rec_user_id':'-1','view':'detail_list','title':'".$config['title']."','moreurl':'".$config['moreUrl']."', 'page': '".$config['cPage']."' },'paramList':{'view':'list_trunPage'}}";

return '<div class="jplb abs sns-widget '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;" data-comment="'.$widget.'"></div>';
}
/*****   评论组件结束  *****/

/*****     分享组件    *****/
if($list['appType']=='jfb'){
	 $config=$list['config'];
	 $pos=explode('|',$list['pos']);
	 $bg=$config['shareSrc']?'background:url('.$config['shareSrc'].') '.$config['imgBgp'].' no-repeat;':'';
     $bgColor=$config['bgColor']?'background-color:'.$config['bgColor'].';':'';
	 $tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
	 
	 $tm='detail.tmall.com';
	 $tb='item.taobao.com';
	$linkt=0;
	if(stripos($config['shareUrl'], $tm) >0){$linktype='tmall'; $linkt=1;}
	if(stripos($config['shareUrl'], $tb) >0){$linktype='taobao';$linkt=1;}
	 
	 if($linkt==1){
		$idx1=explode("id=",$config['shareUrl']);$idx2=explode("&",$idx1[1]);$id=$idx2[0];   $fxtype='item';
		 }else{
		$id=$config['shareUrl'] ;  $fxtype='webpage';
			 }
	 
$widget='{"title":"'.$config['shareTitle'].'","key":"'.$id.'","comment":"'.$config['shareDetail'].'","type":"'.$fxtype.'","skinType":1,"client_id":68}';

return '<div class="jfb abs sns-widget sns-sharebtn sns-sharebtn-default sns-widget-ui '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' data-sharebtn=&apos;'.$widget.'&apos; '.$tipText.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$bg.$bgColor.'"></div>';
}
/*****   分享组件  *****/

/*****     旺旺群组件    *****/
if($list['appType']=='jwwb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
if($config['tipText']==''){$tipText='点击这里给我发消息';}else{$tipText=$config['tipText'];}
if($config['characterFont']){$Font='font-family:'.$config['characterFont'].';';}else{$Font='';}
if($config['characterSize']){$Size='font-size:'.$config['characterSize'].'px;';}else{$Size='';}
if($config['characterWeight']){$Weight='font-weight:'.$config['characterWeight'].';';}else{$Weight='';}
if($config['characterStyle']){$FontStyle='font-style:'.$config['characterStyle'].';';}else{$FontStyle='';}
if($config['characterColor']){$Color='color:'.$config['characterColor'].';';}else{$Color='';}
if($config['characterBgColor']){$BgColor='background-color:'.$config['characterBgColor'].';';}else{$BgColor='';}

if($config['wangMode']=='1'){$wwpic='http://img04.taobaocdn.com/tps/i4/T1fdykXgtiXXXXXXXX-63-20.gif';$wwpl='63';}
if($config['wangMode']=='2'){$wwpic='http://img02.taobaocdn.com/tps/i2/T1m206XhdDXXXXXXXX-25-20.gif';$wwpl='25';}
if($config['wangMode']=='3'){$wwpic='http://img01.taobaocdn.com/tps/i1/T1o2J6XoFFXXXXXXXX-84-33.gif';$wwpl='84';}
if($config['wangMode']=='4'){$wwpic='http://img03.taobaocdn.com/tps/i3/T1QLB6XgVDXXXXXXXX-42-33.gif';$wwpl='42';}

$wangNickName=isset($config['wangNickName'])?$config['wangNickName']:'';

return'<div class="jwwb abs '.$config['appID'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'overflow:hidden;text-align:center;width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;line-height:'.$pos[1].'px;z-index:10;" data-qmd="'.$config['wangMode'].'" data-qid="'.$config['wangID'].'" data-appid="'.$config['appID'].'"><div><a target="_blank" href="http://www.taobao.com/go/act/other/wwgroup.php?uid=&tribeid='.$config['wangID'].'" style="'.$Font.$Size.$Weight.$FontStyle.$Color.'padding-left:'.$wwpl.'px;background:url('.$wwpic.') left center no-repeat;'.$BgColor.'display:block;white-space:nowrap;">'.$wangNickName.'&nbsp;</a></div></div>';

}
/*****   旺旺群组件结束  *****/

/*****     二维码    *****/
if($list['appType']=='jeb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';

return'<div class="jeb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" data-url="'.$config['ewmUrl'].'" data-urlType="'.$config['ewmType'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;background:url('.$config['ewmSrc'].') center center no-repeat;"></div>';
}
/*****   二维码结束  *****/


/*****     收藏    *****/
if($list['appType']=='jscb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
if($config['characterFont']){$Font='font-family:'.$config['characterFont'].';';}else{$Font='';}
if($config['characterSize']){$Size='font-size:'.$config['characterSize'].'px;';}else{$Size='';}
if($config['characterWeight']){$Weight='font-weight:'.$config['characterWeight'].';';}else{$Weight='';}
if($config['characterStyle']){$FontStyle='font-style:'.$config['characterStyle'].';';}else{$FontStyle='';}
if($config['characterColor']){$Color='color:'.$config['characterColor'].';';}else{$Color='';}
if($config['characterBgColor']){$BgColor='background-color:'.$config['characterBgColor'].';';}else{$BgColor='';}


if($config['scType']=='1'){
	$tm='detail.tmall.com';
	$tb='item.taobao.com';
	$linkt=0;
	if(stripos($config['href'], $tm) >0){$linktype='tmall'; $linkt=1;}
	if(stripos($config['href'], $tb) >0){$linktype='taobao';$linkt=1;}
	 
	if($linkt==1){$idx1=explode("id=",$config['href']);$idx2=explode("&",$idx1[1]);$id=$idx2[0]; }else{$id='888888';}
	$sclink='http://favorite.taobao.com/popup/add_collection.htm?id='.$id.'&itemtype=1&scjjc=1';
	}else{	
	$shopid=$config['shopId']?$config['shopId']:'';
	$sclink='http://favorite.taobao.com/popup/add_collection_2.htm?id='.$shopid.'&itemtype=0';	
		}
if($config['scContentType']=='img'){
	return'<div class="jscb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$sbj.$scl.'"><a href="'.$sclink.'" target="_blank" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;"></a></div>';
	}else{
return'<div class="jscb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;"><a href="'.$sclink.'" target="_blank" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$Font.$Size.$Weight.$FontStyle.$Color.$BgColor.'">'.$config['characterContent'].'</a></div>';		
		}
}
/*****   收藏结束  *****/

/*****     购物车    *****/
if($list['appType']=='jgb'){
$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
return'<a href="'.$config['href'].'" data-appid="'.$config['appID'].'" class="jgb abs J_CartPluginTrigger '.$config['appID'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$sbj.$scl.'"></a>
';
}
/*****   购物车结束  *****/


/*****     分类    *****/
if($list['appType']=='jsfb'){
$zhh='';
$config=$list['config'];
$pos=explode('|',$list['pos']);


//默认大分类 characterUnderLine
if($config['characterBgSrc']){$A['Bg']='background:url('.$config['characterBgSrc'].') top '.$config['characterAlign'].'  no-repeat;';}else{$A['Bg']='';}
if($config['characterBgColor']){$A['BgColor']='background-color:'.$config['characterBgColor'].';';}else{$A['BgColor']='';}
if($config['characterColor']){$A['Color']='color:'.$config['characterColor'].';';}else{$A['Color']='';}
if($config['characterFont']){$A['Font']='font-family:'.$config['characterFont'].';';}else{$A['Font']='';}
if($config['characterSize']){$A['Size']='font-size:'.$config['characterSize'].'px;';}else{$A['Size']='';}
if($config['characterWeight']){$A['Weight']='font-weight:'.$config['characterWeight'].';';}else{$A['Weight']='';}
if($config['characterDash']=='on'){$A['zhline']='text-decoration: line-through;';}else{$A['zhline']='';}
if($config['characterAlign']=='center'&&$config['catsSpace']){$A['bzpy']='';}else{$A['bzpy']='';}
if($config['characterAlign']=='left'&&$config['catsSpace']){$A['bzpy']='padding-left: '.$config['catsSpace'].'px;right: -'.$config['catsSpace'].'px;';}
if($config['characterAlign']=='right'&&$config['catsSpace']){$A['bzpy']='padding-right: '.$config['catsSpace'].'px;left: -'.$config['catsSpace'].'px;';}
	$A['Align']=$config['characterAlign']?$config['characterAlign']:'';
//默认大分类--鼠标
if($config['characterBgSrcHover']){$A['Bg2']='background:url('.$config['characterBgSrcHover'].') top '.$config['characterAlign'].' no-repeat;';}else{$A['Bg2']='';}
if($config['characterBgColorHover']){$A['BgColor2']='background-color:'.$config['characterBgColorHover'].';';}else{$A['BgColor2']='';}
if($config['characterColorHover']){$A['Color2']='color:'.$config['characterColorHover'].';';}else{$A['Color2']='';}
if($config['characterFontHover']){$A['Font2']='font-family:'.$config['characterFontHover'].';';}else{$A['Font2']='';}
if($config['characterSizeHover']){$A['Size2']='font-size:'.$config['characterSize'].'px;';}else{$A['Size2']='';}
if($config['characterWeightHover']){$A['Weight2']='font-weight:'.$config['characterWeightHover'].';';}else{$A['Weight2']='';}
if($config['characterUnderLine']=='on'){$A['UnderLine']='border-bottom: '.$config['characterUnderLineWeight'].'px '.$config['characterUnderLineStyle'].' '.$config['characterUnderLineColor'].';';$A['lineheight']=$config['catsHeight']-$config['characterUnderLineWeight'];}else{$A['UnderLine']='';$A['lineheight']=$config['catsHeight'];}
if($config['characterHoverMode']=='on'){$A['characterHoverMode']='on';}else{$A['characterHoverMode']='off';}
//默认小分类
if($config['characterBgSrc1']){$B['Bg']='background:url('.$config['characterBgSrc1'].') top '.$config['characterAlign1'].' no-repeat;';}else{$B['Bg']='';}
if($config['characterBgColor1']){$B['BgColor']='background-color:'.$config['characterBgColor1'].';';}else{$B['BgColor']='';}
if($config['characterColor1']){$B['Color']='color:'.$config['characterColor1'].';';}else{$B['Color']='';}
if($config['characterFont1']){$B['Font']='font-family:'.$config['characterFont1'].';';}else{$B['Font']='';}
if($config['characterSize1']){$B['Size']='font-size:'.$config['characterSize1'].'px;';}else{$B['Size']='';}
if($config['characterWeight1']){$B['Weight']='font-weight:'.$config['characterWeight1'].';';}else{$B['Weight']='';}
if($config['characterDash1']=='on'){$B['zhline']='text-decoration: line-through;';}else{$B['zhline']='';}
if($config['characterAlign1']=='center'&&$config['catsSpace1']){$B['bzpy']='';}else{$B['bzpy']='';}
if($config['characterAlign1']=='left'&&$config['catsSpace1']){$B['bzpy']='padding-left: '.$config['catsSpace1'].'px;right: -'.$config['catsSpace1'].'px;';}
if($config['characterAlign1']=='right'&&$config['catsSpace1']){$B['bzpy']='padding-right: '.$config['catsSpace1'].'px;left: -'.$config['catsSpace1'].'px;';}
	$B['Align']=$config['characterAlign1']?$config['characterAlign1']:'';
//默认小分类--鼠标
if($config['characterBgSrcHover1']){$B['Bg2']='background:url('.$config['characterBgSrcHover1'].') top '.$config['characterAlign1'].' no-repeat;';}else{$B['Bg2']='';}
if($config['characterBgColorHover1']){$B['BgColor2']='background-color:'.$config['characterBgColorHover1'].';';}else{$B['BgColor2']='';}
if($config['characterColorHover1']){$B['Color2']='color:'.$config['characterColorHover1'].';';}else{$B['Color2']='';}
if($config['characterFontHover1']){$B['Font2']='font-family:'.$config['characterFontHover1'].';';}else{$B['Font2']='';}
if($config['characterSizeHover1']){$B['Size2']='font-size:'.$config['characterSizeHover1'].'px;';}else{$B['Size2']='';}
if($config['characterWeightHover1']){$B['Weight2']='font-weight:'.$config['characterWeightHover1'].';';}else{$B['Weight2']='';}
if($config['characterUnderLine1']=='on'){$B['UnderLine']='border-bottom: '.$config['characterUnderLineWeight1'].'px '.$config['characterUnderLineStyle1'].' '.$config['characterUnderLineColor1'].';';$B['lineheight']=$config['subCatsHeight']-$config['characterUnderLineWeight1'];}else{$B['UnderLine']='';$B['lineheight']=$config['subCatsHeight'];}
if($config['characterHoverMode1']=='on'){$B['characterHoverMode']='on';}else{$B['characterHoverMode']='off';}

foreach($list['childData'] as $item){
	$CatsData=$item['attachConfig'];	//if($item['cCls']=='c'){}else{}
	$C=$CatsData['catsType']=='a'?$A:$B;
//当前分类
if($CatsData['characterBgSrc']&&$item['cCls']=='c'){$DBg='background:url('.$CatsData['characterBgSrc'].') top '.$CatsData['characterAlign'].' no-repeat;';}else{$DBg=$C['Bg'];}
if($CatsData['characterBgColor']&&$item['cCls']=='c'){$DBgColor='background-color:'.$CatsData['characterBgColor'].';';}else{$DBgColor=$C['BgColor'];}
if($CatsData['characterColor']&&$item['cCls']=='c'){$DColor='color:'.$CatsData['characterColor'].';';}else{$DColor=$C['Color'];}
if($CatsData['characterFont']&&$item['cCls']=='c'){$DFont='font-family:'.$CatsData['characterFont'].';';}else{$DFont=$C['Font'];}
if($CatsData['characterSize']&&$item['cCls']=='c'){$DSize='font-size:'.$CatsData['characterSize'].'px;';}else{$DSize=$C['Size'];}
if($CatsData['characterWeight']&&$item['cCls']=='c'){$DWeight='font-weight:'.$CatsData['characterWeight'].';';}else{$DWeight=$C['Weight'];}
	if($item['cCls']=='c'){
if($CatsData['characterDash']=='on'){$Dzhline='text-decoration: line-through;';}else{$Dzhline='text-decoration: none;';}
if($CatsData['characterAlign']=='center'){$Dbzpy='';}else{$Dbzpy='';}
if($CatsData['characterAlign']=='left'&&$CatsData['catsSpace']){$Dbzpy='padding-left: '.$CatsData['catsSpace'].'px;right: -'.$CatsData['catsSpace'].'px;';}
if($CatsData['characterAlign']=='right'&&$CatsData['catsSpace']){$Dbzpy='padding-right: '.$CatsData['catsSpace'].'px;left: -'.$CatsData['catsSpace'].'px;';}
	}else{
	$Dzhline=$C['zhline'];
	$Dbzpy=$C['bzpy'];
	}
  $DAlign['Align']=$CatsData['characterAlign']!=='center'?$CatsData['characterAlign']:$C['Align'];
//当前分类--鼠标
if($CatsData['characterHoverMode']&&$item['cCls']=='c'){$shubiao=$CatsData['characterHoverMode'];}else{$shubiao=$C['characterHoverMode'];}
if($CatsData['characterBgSrcHover']&&$item['cCls']=='c'){$DBg2='background:url('.$CatsData['characterBgSrcHover'].') top '.$CatsData['characterAlign'].' no-repeat;';}else{$DBg2=$C['Bg2'];}
if($CatsData['characterBgColorHover']&&$item['cCls']=='c'){$DBgColor2='background-color:'.$CatsData['characterBgColorHover'].';';}else{$DBgColor2=$C['BgColor2'];}
if($CatsData['characterColorHover']&&$item['cCls']=='c'){$DColor2='color:'.$CatsData['characterColorHover'].';';}else{$DColor2=$C['Color2'];}
if($CatsData['characterFontHover']&&$item['cCls']=='c'){$DFont2='font-family:'.$CatsData['characterFontHover'].';';}else{$DFont2=$C['Font2'];}
if($CatsData['characterSizeHover']&&$item['cCls']=='c'){$DSize2='font-size:'.$CatsData['characterSize'].'px;';}else{$DSize2=$C['Size2'];}
if($CatsData['characterWeightHover']&&$item['cCls']=='c'){$DWeight2='font-weight:'.$CatsData['characterWeightHover'].';';}else{$DWeight2=$C['Weight2'];}
	if($item['cCls']=='c'){
if($CatsData['characterUnderLine']=='on'&&$item['cCls']=='c'){$UnderLine='border-bottom: '.$CatsData['characterUnderLineWeight'].'px '.$CatsData['characterUnderLineStyle'].' '.$CatsData['characterUnderLineColor'].';';$h2=$item['height']-$CatsData['characterUnderLineWeight'];}else{$UnderLine='';$h2=$item['height'];}		
	}else{
	$UnderLine=$C['UnderLine'];
	$h2=$C['lineheight'];
	}
	
if($shubiao=='on'){
	$abox='<a class="abs '.$CatsData['characterHoverSpeed'].' june-box-fadeout" href="'.$CatsData['href'].'" style="display:block;width:'.$item['width'].'px;height:'.$item['height'].'px;line-height:'.$item['height'].'px;'.$Dbzpy.$DBg.$DBgColor.$DColor.$DFont.$DSize.$DWeight.$Dzhline.'letter-spacing:0px;" target="'.$CatsData['hrefMode'].'">'.$CatsData['characterContent'].'</a><a class="abs '.$CatsData['characterHoverSpeed'].' june-box-fadein" href="'.$CatsData['href'].'" target="'.$CatsData['hrefMode'].'" style="display:block;width:'.$item['width'].'px;height:'.$h2.'px;line-height:'.$item['height'].'px;'.$Dbzpy.$DBg2.$DBgColor2.$DColor2.$DFont2.$DSize2.$DWeight2.$Dzhline.$UnderLine.'">'.$CatsData['characterContent'].'</a>';
	 $dclass='jspb';
	}else{
	$abox='<a class="abs" href="'.$CatsData['href'].'" style="display:block;width:'.$item['width'].'px;height:'.$item['height'].'px;line-height:'.$item['height'].'px;'.$Dbzpy.$DBg.$DColor.$DFont.$DSize.$DWeight.$Dzhline.'letter-spacing:0px;" target="'.$CatsData['hrefMode'].'">'.$CatsData['characterContent'].'</a>';
	 $dclass='';	
		}
	$uuu='<div class="jsfbchild jsfbchild'.$item['cCls'].' abs '.$dclass.' " data-catsType="'.$CatsData['catsType'].'" data-catsID="'.$CatsData['hrefID'].'" style="overflow:hidden;text-align:'.$DAlign['Align'].';width:'.$item['width'].'px;height:'.$item['height'].'px;top:'.$item['top'].'px;left:'.$item['left'].'px;z-index:10;">'.$abox.'</div>';
	$zhh=$zhh.$uuu;
	}
return'<div class="jsfb abs" data-shopHref="'.$config['shopHref'].'" data-t="'.$config['catsWidth'].';'.$config['catsHeight'].';'.$config['subCatsWidth'].';'.$config['subCatsHeight'].'" data-fname="'.$config['formatName'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;">'.$zhh.'</div>';

}
/*****   分类结束  *****/


/*****     自定义    *****/
if($list['appType']=='jzdb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';

$cssTX=$config['animType'].$config['animRange'];
switch ($cssTX)
{
case 'june-x-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; // 左右 弱
case 'june-x-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //左右 中
case 'june-x-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //左右 强
case 'june-y-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //上下
case 'june-y-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-y-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //旋转
case 'june-r-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //缩放
case 'june-s-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //果冻
case 'june-n-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}
switch ($config['oveflowMode'])
{
case 'visible':  $visible='overflow:visible;';  break;
case 'hidden':  $visible='overflow:hidden;';  break;
case 'hiddenXY':  $visible='overflow:scroll;';  break;
case 'hiddenY':  $visible='overflow:hidden;overflow-y:scroll;';  break;
case 'hiddenX':  $visible='overflow:hidden;overflow-x:scroll;';  break;
default:   $visible='overflow:visible;';
}
$customContent=trim($config['customContent']);$ss=stripslashes($customContent);
if($config['animType']){
	return'<div class="jzdb abs '.$config['animType'].$config['animRange'].' jz" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;transition: '.$config['animSpeed'].' '.$css3.'"><div class="shake abs '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$tipText.' data-o="'.$config['oveflowMode'].'" style=width:'.$pos[0].'px;height:'.$pos[1].'px;'.$visible.'z-index:10;">'.$ss.'</div></div>';
	}else{
	return'<div class="jzdb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$tipText.' data-o="'.$config['oveflowMode'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;'.$visible.'z-index:10;">'.$ss.'</div>';
	}
}
/*****   自定义结束  *****/


/*****     锚点    *****/
if($list['appType']=='jmdb'){
$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
return'<a class="jmdb abs" name="'.$config['anchorName'].'" style="top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;"></a>';
}
/*****   锚点结束  *****/


/*****     遮罩层    *****/
if($list['appType']=='jzzb'){
$ls=rand(10000,99999);
$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
if($config['zzcSrc']){$zzbj='background:url('.$config['zzcSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$zzbj='';}
if($config['bgColor']){$zzbjcolor='background-color:'.$config['bgColor'].';';}else{$zzbjcolor='';}
$contentCls="'zc".$ls."'";
$navCls="'zn".$ls."'";
$effect="'".$config['displayMode']."'";
$widgetconfig="{'contentCls':".$contentCls.",'navCls':".$navCls.",'duration':0.5,'easing':'easeBoth','effect':".$effect.",'delay':0,'triggerType':'click','activeTriggerCls':'hidden','autoplay':false}";
if($config['zzcMode']=='imgContent'){$zzcCSS=$zzbj.$zzbjcolor;$zzcDIV='';}else{$zzcCSS='';$zzcDIV=$config['zzcCustomContent'];}




//按钮
if($config['childConfig'][0]['zzcAttentionSrc']){$zzbj_ann='background:url('.$config['childConfig'][0]['zzcAttentionSrc'].') '.$config['childConfig'][0]['imgBgp'].' no-repeat;';}else{$zzbj_ann='';}
if($config['childConfig'][0]['bgColor']){$zzbjcolor_ann='background-color:'.$config['childConfig'][0]['bgColor'].';';}else{$zzbjcolor_ann='';}
if($config['childConfig'][0]['zzcAttentionSrc1']){$zzbj_ann_simg='<img class="abs '.$config['childConfig'][0]['oppoSpeed'].' " data-t="'.$config['childConfig'][0]['oppoEffect'].';'.$config['childConfig'][0]['oppoSpeed'].'" style="width:100%;height:100%;" src="'.$config['childConfig'][0]['zzcAttentionSrc1'].'" /></a>';$zzbj_ann_scls=''.$config['childConfig'][0]['oppoEffect'].' '.$config['childConfig'][0]['oppoSpeed'].'';}else{$zzbj_ann_simg='';$zzbj_ann_scls='none';}
$tipText_ann=$config['childConfig'][0]['tipText']?'title="'.$config['childConfig'][0]['tipText'].'"':'';
if($config['childConfig'][0]['linkMode']=='ptlink'){$zzcannlink='href="'.$config['childConfig'][0]['href'].'" target="'.$config['childConfig'][0]['hrefMode'].'"';$zzclinkcss='';}else{$zzcannlink='data-href="none"';$zzclinkcss='cursor:pointer;';}
//数字
if($config['childConfig'][1]['characterFont']){$NFont='font-family:'.$config['childConfig'][1]['characterFont'].';';}else{$NFont='';}
if($config['childConfig'][1]['characterSize']){$NSize='font-size:'.$config['childConfig'][1]['characterSize'].'px;';}else{$NSize='';}
if($config['childConfig'][1]['characterWeight']){$NWeight='font-weight:'.$config['childConfig'][1]['characterWeight'].';';}else{$NWeight='';}
if($config['childConfig'][1]['characterStyle']){$NFontStyle='font-style:'.$config['childConfig'][1]['characterStyle'].';';}else{$NFontStyle='';}
if($config['childConfig'][1]['characterColor']){$NColor='color:'.$config['childConfig'][1]['characterColor'].';';}else{$NColor='';}
if($config['childConfig'][1]['characterBgColor']){$NBgColor='background-color:'.$config['childConfig'][1]['characterBgColor'].';';}else{$NBgColor='';}
//文字
if($config['characterFont']){$Font='font-family:'.$config['characterFont'].';';}else{$Font='';}
if($config['characterSize']){$Size='font-size:'.$config['characterSize'].'px;';}else{$Size='';}
if($config['characterWeight']){$Weight='font-weight:'.$config['characterWeight'].';';}else{$Weight='';}
if($config['characterStyle']){$FontStyle='font-style:'.$config['characterStyle'].';';}else{$FontStyle='';}
if($config['characterColor']){$Color='color:'.$config['characterColor'].';';}else{$Color='';}
if($config['characterBgColor']){$BgColor='background-color:'.$config['characterBgColor'].';';}else{$BgColor='';}

if($config['countSwitch']=='yes'){
	$time0=($config['countSeconds']+1)*1000;$time="'".$time0."'";
	$lf1=$list['childData'][1]['left']-$list['childData'][0]['left'];$lt1=$list['childData'][1]['top']-$list['childData'][0]['top'];
	$lf2=$list['childData'][2]['left']-$list['childData'][0]['left'];$lt2=$list['childData'][2]['top']-$list['childData'][0]['top'];
	$Countdownwidget="{'endTime':".$time.",'interval':1000,'timeRunCls':'.zzcmjb','timeUnitCls':{'d':'.ks-d','h':'.ks-h','m':'.ks-m','s':'.seczz'},'minDigit':1,'timeEndCls':'.ks-countdown-end'}";
	return'<div class="jzzb abs J_TWidget '.$config['appID'].'" data-appid="'.$config['appID'].'" data-s="'.$config['displayMode'].'" data-m="'.$config['zzcMode'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;" data-widget-config="'.$widgetconfig.'" data-widget-type="Slide">
   <div class="zzccd abs J_TWidget" data-widget-type="Countdown" data-widget-config="'.$Countdownwidget.'">
      <div class="abs zzhtml" style="z-index:1;">'.$config['customHtml'].'</div>
      <div class="zzcmjb">
         <div class="ks-switchable-content abs zc'.$ls.'" style="z-index:2;">
            <div class="abs zzmc" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$zzcCSS.'">'.$zzcDIV.'</div>
            <div class="abs" style="display:none;width:0;height:0;"></div>
         </div>
         <ul class="ks-switchable-nav abs zn'.$ls.'" style="z-index:3;">
            <li class="abs"></li>
            <li class="abs zzgzhtml" '.$tipText_ann.' style="width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;left:'.$list['childData'][0]['left'].'px;top:'.$list['childData'][0]['top'].'px;'.$zzbj_ann.$zzbjcolor_ann.'">
               <a class="imghover '.$zzbj_ann_scls.'" '.$zzcannlink.' style="display:block;'.$zzclinkcss.'width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;">'.$zzbj_ann_simg.'</a>
               <div class="zzccdsz abs seczz" style="width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;left:'.$lf1.'px;top:'.$lt1.'px;'.$NFont.$NSize.$NWeight.$NFontStyle.$NColor.$NBgColor.'z-index:3;">'.$config['countSeconds'].'</div>
               <div class="zzccdwz abs" style="width:'.$list['childData'][2]['width'].'px;height:'.$list['childData'][2]['height'].'px;left:'.$lf2.'px;top:'.$lt2.'px;'.$Font.$Size.$Weight.$FontStyle.$Color.$BgColor.'z-index:3;">'.$config['countSecondsText'].'</div>
            </li>
         </ul>
      </div>
   </div>
</div>	';
	}else{
	return'<div class="jzzb abs J_TWidget '.$config['appID'].'" data-appid="'.$config['appID'].'" data-s="'.$config['displayMode'].'" data-m="'.$config['zzcMode'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;" data-widget-config="'.$widgetconfig.'" data-widget-type="Slide">
   <div class="abs zzhtml" style="z-index:1;">'.$config['customHtml'].'</div>
   <div class="ks-switchable-content abs zc'.$ls.'" style="z-index:2;">
      <div class="abs zzmc" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$zzcCSS.'">'.$zzcDIV.'</div>
      <div class="abs" style="display:none;width:0;height:0;"></div>
   </div>
   <ul class="ks-switchable-nav abs zn'.$ls.'" style="z-index:3;">
      <li class="abs"></li>
      <li class="abs zzgzhtml" '.$tipText_ann.' style="width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;left:'.$list['childData'][0]['left'].'px;top:'.$list['childData'][0]['top'].'px;'.$zzbj_ann.$zzbjcolor_ann.'">
         <a class="imghover '.$zzbj_ann_scls.'" '.$zzcannlink.' style="display:block;'.$zzclinkcss.'width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;">'.$zzbj_ann_simg.'</a>
      </li>
   </ul>
</div>';	
		}

}
/*****   遮罩层结束  *****/


/*****     可关闭层    *****/
if($list['appType']=='jacb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$tipText1=$config['childConfig'][0]['tipText']?'title="'.$config['childConfig'][0]['tipText'].'"':'';

if($config['alclinkMode']=='ptlink'){
	if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
    if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
	$divcss=''.$sbj.$scl.'';
	$divclass='';
	$divhtml='<a href="'.$config['href'].'" target="'.$config['hrefMode'].'" style="display:block;width:196px;height:267px;"></a>';
	}else{
	$sbj='';
	$scl='';
	$divcss=''.$sbj.$scl.'z-index:10;';
	$divclass=' bdhtml abs';
	$divhtml=$config['customHtml'];
		}

$apq=explode('-',$config['appID']);
if($config['acMode']=='hide'){$kzcl1='';$kzcl2='hidden';$kzcs='display:none;';$activeIndex='1';}else{$kzcl1='hidden';$kzcl2='';$kzcs='';$activeIndex='0';}

$widgetconfig="{'triggerType':'click','activeTriggerCls':'hidden','activeIndex':$activeIndex}";
return'
<div class="jacb abs J_TWidget '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;" data-widget-type="Tabs" data-widget-config="'.$widgetconfig.'">
   <ul class="ks-switchable-nav abs" style="left:0px;top:0px;z-index:2;" '.$tipText1.'>
      <li class="abs hidebtn '.$kzcl1.'" style="left:'.$list['childData'][1]['left'].'px;top:'.$list['childData'][1]['top'].'px;width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;background:url('.$config['childConfig'][0]['hideBtnSrc'].');"></li>
	  <li class="abs '.$kzcl2.'" style="left:'.$list['childData'][0]['left'].'px;top:'.$list['childData'][0]['top'].'px;width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;background:url('.$config['childConfig'][0]['showBtnSrc'].');" '.$tipText.'></li>
   </ul>
   <div class="ks-switchable-content abs" style="z-index:1;"><div class="bd'.$divclass.'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$divcss.''.$kzcs.'">'.$divhtml.'</div><div class="hide" style="display:none;height:0;"></div></div>
</div>
';

}
/*****   可关闭层结束  *****/


/*****     开关灯    *****/
if($list['appType']=='jkgb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$childConfig=$config['childConfig'];
$childData=$list['childData'];

$zc='';
foreach($childConfig as $i=>$item){
	$mongolia=$item['mongoliaMode']=='color'?'background-color:'.$item['mongoliaColor'].';':'background:url('.$item['mongoliaSrc'].') 50% 50% no-repeat;';
	$kgdqpic=$item['oppoSrc']?'<img class="'.$config['oppoSpeed'].' '.$config['oppoEffect'].'" style="display:block;width:'.$childData[$i]['width'].'px;height:'.$childData[$i]['height'].'px;background:url('.$item['oppoSrc'].') 50% 50% no-repeat;" src="'.$item['oppoSrc'].'" />':'<img class="'.$config['oppoSpeed'].' '.$config['oppoEffect'].'" style="display:block;width:'.$childData[$i]['width'].'px;height:'.$childData[$i]['height'].'px;display:none;"  />';
	$kgdcontent=$item['contentMode']=='imgContent'?'<a target="'.$item['hrefMode'].'" href="'.$item['href'].'" class="pic imghover" style="background:url('.$item['pSrc'].') 50% 50% no-repeat;width:'.$childData[$i]['width'].'px;height:'.$childData[$i]['height'].'px;display:block;transition: 0.5s ease-in;"><div class="jspb" style="width:'.$childData[$i]['width'].'px;height:'.$childData[$i]['height'].'px;">'.$kgdqpic.'</div></a>':'<div class="pic imghover" style="width:'.$childData[$i]['width'].'px;height:'.$childData[$i]['height'].'px;display:block;transition: 0.5s ease-in;">'.$item['customContent'].'</div>';
	if($item['contentMode']=='customContent'){
		if($item['overflowMode']=='hidden'){$ovcss='overflow:hidden;';}
		if($item['overflowMode']=='visibleX'){$ovcss='';}
		if($item['overflowMode']=='visible'){$ovcss='overflow:visible;';}
		}else{$ovcss='';}
$izh='<div class="b-box abs '.$item['attachID'].'" data-appid="'.$item['attachID'].'" data-m="'.$item['mongoliaMode'].'" style="left:'.$childData[$i]['left'].'px;top:'.$childData[$i]['top'].'px;'.$mongolia.''.$ovcss.'">'.$kgdcontent.'</div>';
$zc=$zc.$izh;
	}
return'<div class="jkgb abs june-switch '.$config['appID'].'" data-appid="'.$config['appID'].'" data-junezxset="'.$config['oppoEffect'].';'.$config['oppoSpeed'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;">'.$zc.'</div>';
}
/*****   开关灯结束  *****/


/*****     计划任务    *****/
if($list['appType']=='jrwb'){
$ls=rand(100000,999999);
$lsx=rand(10000,99999);
$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$zh='';
$childs=$config['childConfig'];
foreach($childs as $i=>$item){ $ls++;
	$widget="{'endTime':'".$item['endTime']."','interval':1000,'timeRunCls':'.jrwb_s".$ls."','minDigit':1,'timeEndCls':'.jrwb_e".$ls."'}";
	$jhx='
<div class="J_TWidget abs rp'.$ls.'" style="width:100%;height:100%;" data-widget-type="Countdown" data-widget-config="'.$widget.'"><div class="abs jrwb_s jrwb_s'.$ls.'" style="top:0;width:100%;">'.$item['customContent'].'</div> <div class="abs jrwb_e jrwb_e'.$ls.'" style="top:0;width:100%;display:none;">';
	$zh=$zh.$jhx;
	}
foreach($childs as $i=>$item){
	$jhd='</div></div>';
	$zh=$zh.$jhd;
	}


return'<div class="jrwb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" data-rp="'.$ls.'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;">'.$zh.'</div>';
}
/*****   计划任务结束  *****/


/*****     倒计时    *****/
if($list['appType']=='jcdb'){
$ls=rand(100000,999999);
$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$endTime=$config['endTimeType']=='endTime'?$config['endTime']:($config['endTimeType']=='endTime1'?$config['endTime1']*1000:date('Y-m-d '.$config['endTime2'].'',strtotime('+'.$config['endTime2Cycle'].' day')));
$Cycle=$config['endTimeType']=='endTime2'?$config['endTime2Cycle']:'1';


$widget="{'endTime':'".$endTime."','interval':1000,'timeRunCls':'.jcdbstart".$ls."','timeUnitCls':{'d':'.ksd".$ls."','h':'.ksh".$ls."','m':'.ksm".$ls."','s':'.kss".$ls."'},'minDigit':1,'timeEndCls':'.jcdbend".$ls."'}";
$child=$config['childConfig'];
$childData=$list['childData'];
$zh='';
for($i=0;$i<4;$i++){
	$item=$child[$i];$info=$childData[$i];
	if($item['displayMode']!=='no'){
if($item['characterFont']){$Font='font-family:'.$item['characterFont'].';';}else{$Font='';}
if($item['characterSize']){$Size='font-size:'.$item['characterSize'].'px;';}else{$Size='';}
if($item['characterWeight']){$Weight='font-weight:'.$item['characterWeight'].';';}else{$Weight='';}
if($item['characterStyle']){$FontStyle='font-style:'.$item['characterStyle'].';';}else{$FontStyle='';}
if($item['characterColor']){$Color='color:'.$item['characterColor'].';';}else{$Color='';}
if($item['characterBgColor']){$BgColor='background-color:'.$item['characterBgColor'].';';}else{$BgColor='';}	
if($item['characterLetterSpacing']){$FontSpac='letter-spacing:'.$item['characterLetterSpacing'].'px;';}else{$FontSpac='';}	
$Fzhcss=$Font.$Size.$Weight.$FontStyle.$Color.$BgColor.$FontSpac;
$spbj=$i==0?'d':($i==1?'h':($i==2?'m':($i==3?'s':'')));
if($config['endTimeType']=='endTime2'&&$i==0){$djsdiv='<span class="abs ks-d ksd'.$ls.'" style="display:none;visibility :hidden;">00</span>';}else{$djsdiv='<span class="abs ks-'.$spbj.' ks'.$spbj.$ls.'" style="display:block;text-align:center;width:'.($info['width']+2).'px;height:'.$info['height'].'px;line-height:'.$info['height'].'px;left:'.$info['left'].'px;top:'.$info['top'].'px;'.$Fzhcss.'">00</span>';}
$zh=$zh.$djsdiv;
		}
	}
$startContent=$config['startContent']?'<div class="abs jcdbstart0 jcdbstart'.$ls.'" style="top:0;width:100%;">'.$config['startContent'].'</div>':'';
$endContent=$config['endContent']?'<div class="abs jcdbend0 jcdbend'.$ls.'" style="top:0;width:100%;display:none;">'.$config['endContent'].'</div>':'';
if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
if($config['contentType']=='imgContent'){$divcss=$sbj.$scl;$divhtml='';}else{$divcss='';$divhtml='<div class="rel jcdbcus" style="width:100%;height:100%;">'.$config['customContent'].'</div>';}
return'<div class="jcdb abs J_TWidget jcdd '.$config['appID'].'" data-t="'.$config['endTimeType'].'" data-c="'.$Cycle.'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$divcss.'" data-widget-type="Countdown" data-widget-config="'.$widget.'">'.$divhtml.$startContent.$zh.$endContent.'</div>';
}
/*****   倒计时结束  *****/



/*****     视频 ok    *****/
if($list['appType']=='jvb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$config['forcePlayMode']==2?$autoplay='<div class="jvfb abs" style="width:0;height:0;overflow:hidden;display:none;">
		<embed style="display:none;" wmode="transparent" flashvars="scene=taobao_shop" src="https://vodcdn.alicdn.com/">
		<embed allowScriptAccess="never" flashvars="scene=taobao_shop" type="application/x-shockwave-flash" allowfullscreen="true" wmode="transparent" src="http://cloud.video.taobao.com/play/u/39767794/p/2/e/1/t/1/50029710588.swf"></embed>
	</div>':$autoplay='';
return $autoplay.'<div class="jvb abs '.$config['appID'].'" data-fpm="'.$config['forcePlayMode'].'"  data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index: 10;"><embed style="display:none;" wmode="transparent" flashvars="scene=taobao_shop" src="https://vodcdn.alicdn.com/"><embed data="embed" class="embed" allowScriptAccess="never" flashvars="scene=taobao_shop" width="'.$pos[0].'" height="'.$pos[1].'" src="'.$config['videoSrc'].'" type="application/x-shockwave-flash" allowfullscreen="true" wmode="transparent"/></div>
';
}
/*****   视频结束  *****/


/*****     轮播    *****/
if($list['appType']=='jfsb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(100000,999999);
if($config['sliderMode']=='scrollx1'||$config['sliderMode']=='scrolly1'){
	$data_s='b';$vs='';
	if($config['sliderMode']=='scrollx1'){$effect='scrollx';for($n=0;$n<count($config['contentType']);$n++){$vs=$n==0?'-'.$pos[0]:$vs.',-'.$pos[0].'';}$viewSize=", 'viewSize': [".$vs."]";}
	if($config['sliderMode']=='scrolly1'){$effect='scrolly';for($n=0;$n<count($config['contentType']);$n++){$vs=$n==0?'-'.$pos[1]:$vs.',-'.$pos[1].'';}$viewSize=", 'viewSize': [".$vs."]";}
	}else{
	$data_s='a';
	$effect=$config['sliderMode'];
	$viewSize='';
	}
$activeClass=$config['aSmallRorate']?' jrat '.$config['aSmallRorate'].'':'';
$sliderPauseHover=$config['sliderPauseHover']=='yes' ? '' : ",'pauseOnHover':false"; //鼠标经过是否继续轮播	
	
//左右箭头
$zuoyoudisplay=$config['sliderArrow']=='yes'?'':'display:none;';
$zuoyou=$config['childConfig'][0];

$jtzuo=$zuoyou['oSrc']?'background:url('.$zuoyou['oSrc'].') no-repeat center center;':'';
if($zuoyou['oSrcHover']){
  $jtzhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0; '.$jtzuo.'" alt="上一页"></div><div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['oSrcHover'].') no-repeat center center;" alt="上一页"></div>';
	}else{
  $jtzhtml='<div style="display:block;width:100%;height:100%;'.$jtzuo.'" alt="上一页"></div>';
		}
	
$jtyou=$zuoyou['tSrc']?'background:url('.$zuoyou['tSrc'].') no-repeat center center;':'';
if($zuoyou['tSrcHover']){
  $jtyhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;'.$jtyou.'" alt="下一页"></div>
			<div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['tSrcHover'].') no-repeat center center;" alt="下一页"></div>';
	}else{
  $jtyhtml='<div style="display:block;width:100%;height:100%;'.$jtyou.'" alt="下一页"></div>';
		}

$jthoverleft='';$jthoverright='';$clsszy=$config['smallShowCss']?'j-b':'';
if($config['displayMode']=='june-box-fadein'){$jtdanru='june-box-fadein b-1-fadein';$clsszy='jspb j-b';}else{$jtdanru='';} //淡出淡入
if($config['css3Mode']){
	$jtcss0 = explode('movein',$config['css3Mode']);$jtcss1 = explode('moveout',$config['css3Mode']);
	if(count($jtcss0)>1&&$config['sliderArrow']=='yes'){$jthoverleft='june-box-rx'.$jtcss0[1].' b-1-rx'.$jtcss0[1].'';$jthoverright='june-box-lx'.$jtcss0[1].' b-1-lx'.$jtcss0[1].'';$clsszy='jspb j-b';}
	if(count($jtcss1)>1&&$config['sliderArrow']=='yes'){$jthoverleft='june-box-lx'.$jtcss1[1].' b-1-lx'.$jtcss1[1].'';$jthoverright='june-box-rx'.$jtcss1[1].' b-1-rx'.$jtcss1[1].'';$clsszy='jspb j-b';}
	}

$jtdiv='<div class="abs prev'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverleft.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;top:'.$list['childData'][0]['top'].'px;left:'.$list['childData'][0]['left'].'px;z-index:14;">
			'.$jtzhtml.'
		</div>
  		<div class="abs next'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverright.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;top:'.$list['childData'][1]['top'].'px;left:'.$list['childData'][1]['left'].'px;z-index:14;">
 			'.$jtyhtml.'
		</div>';

//content
$pngwidget="{'png':true,'png_bg':true}";
$picdivzh='';$picdivhtml='';
foreach($config['contentType'] as $i=>$item){
	if($data_s=='b'){
		$contabs='abs';
		if($config['sliderMode']=='scrollx1'){$adnum=$i*$pos[0];$contcss='left:-'.$adnum.'px;top:0;';}
		if($config['sliderMode']=='scrolly1'){$adnum=$i*$pos[1];$contcss='left:0px;top:-'.$adnum.'px;';}
		}else{
		$contabs='rel';$contcss='';
		}
	if($config['contentType'][$i]=='imgContent'){
	$sliderSrc=$config['sliderSrc'][$i]?'background:url('.$config['sliderSrc'][$i].') no-repeat scroll '.$config['sliderImgBgp'][$i].' transparent;':'';
	$picdiv='<div class="elepic" style="width:'.$pos[0].'px;height:'.$pos[1].'px;display:block;float:left;overflow:'.$config['sliderOverflow'].';">
        <div class="elexb '.$contabs.'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$contcss.$sliderSrc.'">
          <a class="J_TWidget" href="'.$config['sliderHref'][$i].'" target="'.$config['hrefMode'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;display:block;" data-widget-config="'.$pngwidget.'" data-widget-type="Compatible"></a>
        </div>
      </div>';
		}else if($config['contentType'][$i]=='customContent'){ $customC=trim($config['customContent'][$i]);$customhtml=stripslashes($customC);
	$picdiv='<div class="elepic" style="width:'.$pos[0].'px;height:'.$pos[1].'px;display:block;float:left;overflow:'.$config['sliderOverflow'].';">
        <div class="elexb '.$contabs.'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$contcss.'">
          '.$customhtml.'
        </div>
      </div>';
	 if($clsszy!==''){ $clsszy=strpos($config['customContent'][$i], 'jspb')?'j-b':$clsszy; }
		}
	$picdivzh=$picdivzh.$picdiv;
	}
$picdivhtml='<div class="rel scroller j-b" style="overflow:'.$config['sliderOverflow'].';width:'.$pos[0].'px;height:'.$pos[1].'px;z-index:10;">
    <div class="ks-switchable-content c'.$ls.'" style="">
      '.$picdivzh.'
    </div>
  </div>';
//缩略
$kshtml='';$ksdiv='';$ksdivzh='';
$ksinfo=$list['childData_1'];
$ksdis=$config['sliderSmallImg']=='no'?'display:none;':'';
if($config['dSmallRorate']){$smallShowSpeed=$config['smallShowSpeed']?$config['smallShowSpeed']:'trans02s';}else{$smallShowSpeed='';}

//缩略开关灯
if($config['kgdSwitch']=='black'){$kgdcss1='background:#000000;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='white'){$kgdcss1='background:#ffffff;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='transparent'){$kgdcss1='';$kgdcss2='';}
foreach($config['contentType'] as $i=>$kstype){
	$kstype=$config['smallCircleMode'][$i]?$config['smallCircleMode'][$i]:'no';
	$ksactive=$i==0?'juneactive'.$activeClass.'':'';
if($kstype=='no'){//缩略图片
	if($config['contentType'][$i]=='imgContent'){
		$img=$config['smallImgSrcT'][$i]?$config['smallImgSrcT'][$i]:$config['sliderSrc'][$i];
		$imghover=$config['smallHoverSrcT'][$i]?$config['smallHoverSrcT'][$i]:$img;
		}else{
		$img=$config['smallImgSrc'][$i];
		$imghover=$config['smallHoverSrc'][$i]?$config['smallHoverSrc'][$i]:$config['smallImgSrc'][$i];	
		}
	$ksdiv='<li class="abs '.$ksactive.' '.$config['dSmallRorate'].' '.$smallShowSpeed.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;cursor:pointer;">
      <a target="'.$config['hrefMode'].'" '.($config['sliderHref'][$i] ? 'href="'.$config['sliderHref'][$i].'"' : "").' class="abs s1" style="top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
        <img src="'.$imghover.'" style="vertical-align:top;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
      <a target="'.$config['hrefMode'].'" '.($config['sliderHref'][$i] ? 'href="'.$config['sliderHref'][$i].'"' : "").' class="abs s2" style="'.$kgdcss1.'top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
        <img src="'.$img.'" style="vertical-align:top;'.$kgdcss2.'width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
    </li>';
	
	}

if($kstype=='yes'){//缩略圆点
	$ksbg0=$config['smallCircleBgColor'][$i]?'background-color:'.$config['smallCircleBgColor'][$i].';':'';
	$ksbg1=$config['smallCircleBgColor1'][$i]?'background-color:'.$config['smallCircleBgColor1'][$i].';':'';
	if($config['thumbCircleSet'][$i]){
		$str = stripslashes($config['thumbCircleSet'][$i]);$str = stripslashes($str);
		$ydwzs = json_decode($str,true); 
		$ydwznr=$ydwzs['characterContent']?$ydwzs['characterContent']:'';
		$ydwzcolor=$ydwzs['characterColor']?'color:'.$ydwzs['characterColor'].';':'';
		$ydwzfamily=$ydwzs['characterFont']?'font-family:'.$ydwzs['characterFont'].';':'';
		$ydwzcharacterWeight=$ydwzs['characterWeight']?'font-weight:'.$ydwzs['characterWeight'].';':'';
		$ydwzcharacterSize=$ydwzs['characterSize']?'font-size:'.$ydwzs['characterSize'].';':'';
		$ydwzcolor1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterColorHover']?'color:'.$ydwzs['characterColorHover'].';':'color:'.$ydwzs['characterColor'].';';
		$ydwzfamily1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterFontHover']?'font-family:'.$ydwzs['characterFontHover'].';':'font-family:'.$ydwzs['characterFont'].';';
		$ydwzcharacterWeight1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterWeightHover']?'font-weight:'.$ydwzs['characterWeightHover'].';':'font-weight:'.$ydwzs['characterWeight'].';';
		$ydwzcharacterSize1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterSizeHover']?'font-size:'.$ydwzs['characterSizeHover'].';':'font-size:'.$ydwzs['characterSize'].';';
	}else{
		$ydwznr='';
		$ydwzcolor='';
		$ydwzfamily='';
		$ydwzcharacterWeight='';
		$ydwzcharacterSize='';
		$ydwzcolor1='';
		$ydwzfamily1='';
		$ydwzcharacterWeight1='';
		$ydwzcharacterSize1='';	
	}
	$ksdiv='<li class="abs scm '.$ksactive.' '.$config['dSmallRorate'].' '.$smallShowSpeed.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;line-height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;cursor:pointer;text-align:center;">
      <div class="abs s1" style="border-radius:50%;width:100%;height:100%;'.$ksbg1.''.$ydwzcolor.$ydwzfamily.$ydwzcharacterWeight.$ydwzcharacterSize.'">'.$ydwznr.'</div>
      <div class="abs s2" style="border-radius:50%;width:100%;height:100%;'.$ksbg0.''.$ydwzcolor1.$ydwzfamily1.$ydwzcharacterWeight1.$ydwzcharacterSize1.'">'.$ydwznr.'</div>
    </li>';
	
	}
if($kstype=='yes2'){//缩略文字
	$str = stripslashes($config['thumbSet'][$i]);$str = stripslashes($str);
	$wzdata = json_decode($str,true); 
if($wzdata['tipText']==''){$tipText='';}else{$tipText='title="'.$wzdata['tipText'].'"';}
if($wzdata['characterMode']=='text'){$datac='data-c="'.$wzdata['characterLineMulti'].'"';}else{$datac='data-h="'.$wzdata['characterContent'].';'.$wzdata['characterItemContent'].'"';}
if($wzdata['characterModeHover']=='text'){$datac2='data-ch="'.$wzdata['characterLineMultiHover'].'"';}else{$datac2='data-hh="'.$wzdata['characterItemContentHover'].';'.$wzdata['characterItemContentHover'].'"';}
if($wzdata['outlineControl']=='outlineShow'){$outline='outline-color:'.$wzdata['outlineColor'].';';$outlineSpeed=$wzdata['outlineSpeed'];$outlineWidth=$wzdata['outlineWidth'];$outlineShadowColor='color:'.$wzdata['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';}
//正面
if($wzdata['characterFont']){$Font='font-family:'.$wzdata['characterFont'].';';}else{$Font='';}
if($wzdata['characterSize']){$Size='font-size:'.$wzdata['characterSize'].'px;';}else{$Size='';}
if($wzdata['characterColor']){$Color='color:'.$wzdata['characterColor'].';';}else{$Color='';}
if($wzdata['characterLineHeight']){$LineHeight='line-height:'.$wzdata['characterLineHeight'].'px;';}else{$LineHeight='';}
if($wzdata['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$wzdata['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($wzdata['characterIndent']){
		if($wzdata['characterAlign']=='left'){$Indent='padding-left:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='right'){$Indent='padding-right:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='center'){$Indent='padding:0 '.$wzdata['characterIndent'].'px;';}
	}else{$Indent='';}
if($wzdata['characterWeight']){$Weight='font-weight:'.$wzdata['characterWeight'].';';}else{$Weight='';}
if($wzdata['characterStyle']){$FontStyle='font-style:'.$wzdata['characterStyle'].';';}else{$FontStyle='';}
if($wzdata['characterLineOver']||$wzdata['characterLineThrough']||$wzdata['characterLineUnder']){$LineOver='text-decoration:'.$wzdata['characterLineOver'].' '.$wzdata['characterLineThrough'].' '.$wzdata['characterLineUnder'].';';}else{$LineOver='';}
if($wzdata['characterAlign']){$Align='text-align:'.$wzdata['characterAlign'].';';}else{$Align='';}
if($wzdata['borderRadius1']){$borderRadius='border-radius:'.$wzdata['borderRadius1'].';';}else{$borderRadius='';}
if($wzdata['borderControl1']){
	$borderWidth=$wzdata['borderWidth1']?$wzdata['borderWidth1']:'0';
	$border='border:'.$borderWidth.'px solid '.$wzdata['borderColor1'].';'.$borderRadius.';';}else{$border='';}
if($wzdata['shadowControl1']=='shadowShow1'){ 
  $slz1=$wzdata['shadowLeft1']?$wzdata['shadowLeft1']:'0';
  $slz2=$wzdata['shadowTop1']?$wzdata['shadowTop1']:'0';
  $slz3=$wzdata['shadowBlur1']?$wzdata['shadowBlur1']:'0';
  $slz4=$wzdata['shadowSize1']?$wzdata['shadowSize1']:'0';
  $shadow='box-shadow:'.$slz1.'px '.$slz2.'px '.$slz3.'px '.$slz4.'px '.$wzdata['shadowColor1'].' '.$wzdata['shadowStyle1'].';';
 }else{$shadow='';}
if($wzdata['characterBgColor']){$BgColor='background-color:'.$wzdata['characterBgColor'].';';}else{$BgColor='';}
if($wzdata['characterBgSrc']){$BgSrc='background:url('.$wzdata['characterBgSrc'].') '.$wzdata['imgBgp'].' no-repeat;';}else{$BgSrc='';}
if($wzdata['characterWidthMode']=='auto'){$display='';$wdth='';}else{$display='';$wdth='width:'.$ksinfo[$i]['width'].'px;';}
if($wzdata['ssOpacity']){ $sso1=$wzdata['ssOpacity']*100; $ssOpacity='opacity:'.$wzdata['ssOpacity'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso1.');';}else{$ssOpacity='';}	
$wdwidth=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['width']-$wzdata['borderWidth1']*2:$ksinfo[$i]['width'];
$wdheigh=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['height']-$wzdata['borderWidth1']*2:$ksinfo[$i]['height'];
$zhengstyle='width:auto;'.$display.$Align.'height:'.$wdheigh.'px;'.$LineHeight.'white-space: nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Indent.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.$border.$shadow.$ssOpacity.'';
//反面
if($wzdata['characterFontHover']){$Font2='font-family:'.$wzdata['characterFontHover'].';';}else{$Font2='';}
if($wzdata['characterSizeHover']){$Size2='font-size:'.$wzdata['characterSizeHover'].'px;';}else{$Size2='';}
if($wzdata['characterColorHover']){$Color2='color:'.$wzdata['characterColorHover'].';';}else{$Color2='';}
if($wzdata['characterLetterSpacingHover']){$LetterSpacing2='letter-spacing:'.$wzdata['characterLetterSpacingHover'].'px;';}else{$LetterSpacing2='';}
if($wzdata['characterIndentHover']){
		if($wzdata['characterAlignHover']=='left'){$Indent2='padding-left:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='right'){$Indent2='padding-right:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='center'){$Indent2='padding:0 '.$wzdata['characterIndentHover'].'px;';}
	}else{$Indent2='';}
if($wzdata['characterWeightHover']){$Weight2='font-weight:'.$wzdata['characterWeightHover'].';';}else{$Weight2='';}
if($wzdata['characterStyleHover']){$FontStyle2='font-style:'.$wzdata['characterStyleHover'].';';}else{$FontStyle2='';}
if($wzdata['characterLineOverHover']||$wzdata['characterLineThroughHover']||$wzdata['characterLineUnderHover']){$LineOver2='text-decoration:'.$wzdata['characterLineOverHover'].' '.$wzdata['characterLineThroughHover'].' '.$wzdata['characterLineUnderHover'].';';}else{$LineOver2='';}
if($wzdata['characterAlignHover']){$Align2='text-align:'.$wzdata['characterAlignHover'].';';}else{$Align2='';}
if($wzdata['characterUnderLine']=='on'&&$wzdata['borderControl']==''){
	$UnderLine='border-bottom: '.$wzdata['characterUnderLineWeight'].'px '.$wzdata['characterUnderLineStyle'].' '.$wzdata['characterUnderLineColor'].';';$UnBH=$wzdata['characterUnderLineWeight'];}else{$UnderLine='';$UnBH=0;}
if($wzdata['characterLineHeightHover']){$lh3=$wzdata['characterLineHeightHover'];$LineHeight2='line-height:'.$lh3.'px;';}else{$LineHeight2=$LineHeight;}
if($wzdata['borderControl']){
	$borderWidth2=$wzdata['borderWidth']?$wzdata['borderWidth']:'0';
	$border2='border:'.$borderWidth2.'px solid '.$wzdata['borderColor'].';'.$borderRadius.';';}else{$border2='';}
if($wzdata['shadowControl']=='shadowShow'){ 
  $slf1=$wzdata['shadowLeft']?$wzdata['shadowLeft']:'0';
  $slf2=$wzdata['shadowTop']?$wzdata['shadowTop']:'0';
  $slf3=$wzdata['shadowBlur']?$wzdata['shadowBlur']:'0';
  $slf4=$wzdata['shadowSize']?$wzdata['shadowSize']:'0';
  $shadow2=''.$slf1.' '.$slf2.' '.$slf3.' '.$slf4.' '.$wzdata['shadowColor'].' '.$wzdata['shadowStyle'].';';
 }else{$shadow2='';}
if($wzdata['characterBgColorHover']){$BgColor2='background-color:'.$wzdata['characterBgColorHover'].';';}else{$BgColor2='';}
if($wzdata['characterBgSrcHover']){$BgSrc2='background:url('.$wzdata['characterBgSrcHover'].') '.$wzdata['imgBgpHover'].' no-repeat;';}else{$BgSrc2='';}
if($wzdata['ssOpacity1']){ $sso2=$wzdata['ssOpacity1']*100; $ssOpacity2='opacity:'.$wzdata['ssOpacity1'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso2.');';}else{$ssOpacity2='';}
$wdwidth2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['width']-$wzdata['borderWidth']*2:$ksinfo[$i]['width'];
$wdheigh2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['height']-$wzdata['borderWidth']*2:$ksinfo[$i]['height']-$UnBH;
$fanstyle='display:block;width:auto;'.$Align.'height:'.$ksinfo[$i]['height'].'px;'.$LineHeight2.'white-space: nowrap;word-break:break-all;'.$BgSrc2.$BgColor2.$Color2.$Font2.$Indent2.$Weight2.$FontStyle2.$Size2.$LineOver2.$LetterSpacing2.$border2.$shadow2.$ssOpacity2.''.$UnderLine.'';


if($wzdata['characterHoverMode']=='off'){
	$contwzbox='<a class="rel s2" style="'.$zhengstyle.'" target="'.$config['hrefMode'].'" href="'.$config['sliderHref'][$i].'">'.$config['smallCharacterContent'][$i].'</a>';
	$wccls2='';
	}else{
	$contwzbox='<a class="rel '.$wzdata['characterHoverSpeed'].' s2" style="'.$zhengstyle.'" target="'.$config['hrefMode'].'" '.($config['sliderHref'][$i] ? 'href="'.$config['sliderHref'][$i].'"' : "").'>'.$config['smallCharacterContent'][$i].'</a>
      <div class="jspb rel s1" style="width:100%;height:100%;"><a class="rel '.$wzdata['characterHoverSpeed'].' '.$wzdata['css3ModeX1'].' '.$wzdata['css3ModeY1'].' '.$wzdata['css3Mode1'].'" '.$href.' style="'.$fanstyle.'" target="'.$config['hrefMode'].'" '.($config['sliderHref'][$i] ? 'href="'.$config['sliderHref'][$i].'"' : "").'>'.$config['smallCharacterContent1'][$i].'</a></div>';
	$wccls2='junefade';
	}
	$ksdiv='<li data-i="'.$ksinfo[$i]['attachID'].'" class="'.$config['dSmallRorate'].' '.$smallShowSpeed.' abs thumbsmall '.$ksactive.' '.$ksinfo[$i]['attachID'].' jnwz jz '.$wzdata['css3ModeX'].' '.$wzdata['css3ModeY'].' '.$wzdata['css3Mode'].' '.$wzdata['attachID'].' '.$wccls2.' '.$wzdata['borderControl'].' '.$wzdata['borderControl1'].' '.$wzdata['shadowControl'].' '.$wzdata['shadowControl1'].' '.$outlineWidth.' '.$outlineSpeed.'" data-t="text;text" data-w="normal" data-o="'.$wzdata['ssOpacity'].';'.$wzdata['ssOpacity1'].'" style="float:left;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;">'.$contwzbox.'</li>';
	
	}
if($kstype=='yes1'){//缩略自定义
	if($config['smallCustom1'][$i]){
		$diy='<div class="abs s1" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom1'][$i].'</div>
		      <div class="abs s2" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>';
			  }else{
		$diy='<div class="abs s3" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>';
		   }
		if($clsszy!==''){ $clsszy=strpos($config['smallCustom'][$i], 'jspb')||strpos($config['smallCustom1'][$i], 'jspb')?'j-b':$clsszy; }
		   
	$ksdiv='<li class="abs sch '.$config['dSmallRorate'].' '.$smallShowSpeed.' '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;overflow:hidden;">'.$diy.'</li>';
	}
$ksdivzh=$ksdivzh.$ksdiv;
}
if($config['smallShowCss']){ $kspp=$config['smallShowSpeed']?$config['smallShowSpeed']:'trans02s'; }else{$kspp='';}
$slhtml='  <ul class="sltae ks-switchable-nav abs n'.$ls.' '.$config['smallShowCss'].' '.$kspp.'" style="'.$ksdis.'top:0px;left:0px;z-index:12;background:none;">
   '.$ksdivzh.'
  </ul>';
	
//扩展层
	$kuodiv='';
if(count($config['childConfig'])>1){
	for($u=1;$u<count($config['childConfig']);$u++){
		$r=$u-1;$kinwh=$list['childExData'][$r];
		$kinfo=$config['childConfig'][$u];
		$kuo='<div class="abs lbepanel '.$kinfo['smallShowCss'].' '.$kinfo['smallShowSpeed'].'" style="overflow: hidden;width:'.$kinwh['width'].'px;height:'.$kinwh['height'].'px;top:'.$kinwh['top'].'px;left:'.$kinwh['left'].'px;z-index:1'.$kinfo['zFloor'].';">'.$kinfo['customContent'].'</div>';
		$kuodiv=$kuodiv.$kuo;
		if($kinfo['smallShowCss']){$clsszy='j-b';}
		
	}

}	
	
	
	

//轮播组装
$sliderActive=$config['sliderActive']-1;
$sliderAuto=$config['sliderAuto']=='true'?'true':'false';

$lbwidget="{'contentCls':'c".$ls."','navCls':'n".$ls."','effect':'".$effect."','steps':1,'circular':true,'easing':'".$config['sliderEffect']."','duration':'".$config['sliderDuration']."','prevBtnCls':'prev".$ls."','nextBtnCls':'next".$ls."','autoplay':".$sliderAuto.",'interval':".$config['sliderTime'].",'delay':".$config['sliderDelay'].",'activeTriggerCls':'juneactive".$activeClass."','triggerType':'".$config['sliderSwitch']."'".$viewSize.",'activeIndex':".$sliderActive."".$sliderPauseHover."}";


if($config['dSmallRorate']){ $sspp=$config['smallShowSpeed']?$config['smallShowSpeed']:'trans02s'; $dda='data-da="'.$config['dSmallRorate'].'||'.$sspp.'"';}else{$dda='';}
return'<div class="jfsb abs J_TWidget '.$clsszy.' '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$dda.' data-s="'.$data_s.'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;cursor:default;" data-widget-type="Carousel" data-widget-config="'.$lbwidget.'">
 '.$jtdiv.' 
 '.$picdivhtml.'
 '.$slhtml.'
 '.$kuodiv.'
</div>';
}
/*****   轮播结束  *****/



/*****     无缝轮播    *****/
if($list['appType']=='jwfb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(100000,999999);
$xdwidth=$list['curExData']['newWidth'];
$xdheight=$list['curExData']['newHeight'];
$z=ceil(1920/$xdwidth)+1;


 if($config['sliderOver']=='yes'){
	 $over='';$mcl2=1920-$pos[3]-$pos[0];
	 $ovmeng=$config['sliderOverMongolia']=='yes' ? '<div class="wfmc1 abs" style="left:-'.$pos[3].'px;top:0px;width:'.$pos[3].'px;height:'.$pos[1].'px; background:'.$config['sliderOverMongoliaColor'].';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div><div class="abs" style="left:'.$pos[0].'px;top:0px;width:'.$mcl2.'px;height:'.$pos[1].'px; background:'.$config['sliderOverMongoliaColor'].';z-index:11;opacity: 0.3;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);"></div>' : "";
	 $menglefy=$config['sliderMode']!=='scrolly' ? 'left:-'.($xdwidth>640 ? $xdwidth : $xdwidth*2).'px' : 'top:-'.$xdheight.'px';

 }else{
	 $over='overflow:hidden;';
	 $ovmeng='';
	 $menglefy='';
 }
	
//组件组装
$clsszy=$config['smallShowCss']?'j-b':'';
if($config['css3Mode']||$config['displayMode']=='june-box-fadein'){$clsszy='jspb j-b';}
$sliderMode=$config['sliderMode']=='scrolly'?'scrolly':'scrollx';
$sliderTime=$config['sliderTime']?$config['sliderTime']:'4';
$sliderDelay=$config['sliderDelay']?$config['sliderDelay']:'0.0';
$sliderActive=$config['sliderActive']-1;
$steps=$config['sliderMargin']?$config['sliderMargin']:'1';
for($n=0;$n<$z;$n++){
  $lbwidget[$n]="{'contentCls':'c_".$n."_".$ls."','navCls':'n".$ls."','effect':'".$sliderMode."','steps':".$steps.",'circular':true,'easing':'".$config['sliderEffect']."','duration':'0.5','prevBtnCls':'prev".$ls."','nextBtnCls':'next".$ls."','autoplay':".$config['sliderAuto'].",'interval':".$sliderTime.",'delay':".$sliderDelay.",'activeTriggerCls':'juneactive','triggerType':'".$config['sliderSwitch']."','activeIndex':".$sliderActive."}";
	}
$zujianzuhe='';$zujianover='';
for($n=0;$n<$z;$n++){ 
if($n==0){$cl1=' '.$config['appID'].'';$cl2='data-appid="'.$config['appID'].'" '.$Opacity_attr.'';$cl3='top:'.$pos[2].'px;left:'.$pos[3].'px;'.$Opacity_css.'';}else{$cl1='';$cl2='';$cl3='';$clsszy='';}
$zujianzuhe=''.$zujianzuhe.'<div class="jwfb abs '.$clsszy.' J_TWidget '.$cl1.'" '.$cl2.' style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$cl3.'z-index:10;" data-widget-type="Carousel" data-widget-config="'.$lbwidget[$n].'">';
$zujianover=''.$zujianover.'</div>';
}


//左右箭头
$zuoyoudisplay=$config['sliderArrow']=='yes'?'':'display:none;';
$zuoyou=$config['childConfig'][0];

$jtzuo=$zuoyou['oSrc']?'background:url('.$zuoyou['oSrc'].') no-repeat center center;':'';
if($zuoyou['oSrcHover']){
  $jtzhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0; '.$jtzuo.'" alt="上一页"></div><div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['oSrcHover'].') no-repeat center center;" alt="上一页"></div>';
	}else{
  $jtzhtml='<div style="display:block;width:100%;height:100%;'.$jtzuo.'" alt="上一页"></div>';
		}
$jtyou=$zuoyou['tSrc']?'background:url('.$zuoyou['tSrc'].') no-repeat center center;':'';
if($zuoyou['tSrcHover']){
  $jtyhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;'.$jtyou.'" alt="下一页"></div>
			<div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['tSrcHover'].') no-repeat center center;" alt="下一页"></div>';
	}else{
  $jtyhtml='<div style="display:block;width:100%;height:100%;'.$jtyou.'" alt="下一页"></div>';
		}
if($config['displayMode']=='june-box-fadein'){$jtdanru='june-box-fadein b-1-fadein';}else{$jtdanru='';} //淡出淡入
$jtcss0 = explode('movein',$config['css3Mode']);$jtcss1 = explode('moveout',$config['css3Mode']);
$jthoverleft='';$jthoverright='';
if(count($jtcss0)>1&&$config['sliderArrow']!=='no'){$jthoverleft='june-box-rx'.$jtcss0[1].' b-1-rx'.$jtcss0[1].'';$jthoverright='june-box-lx'.$jtcss0[1].' b-1-lx'.$jtcss0[1].'';}
if(count($jtcss1)>1&&$config['sliderArrow']!=='no'){$jthoverleft='june-box-lx'.$jtcss1[1].' b-1-lx'.$jtcss1[1].'';$jthoverright='june-box-rx'.$jtcss1[1].' b-1-rx'.$jtcss1[1].'';}
$jtdiv='<div class="abs prev'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverleft.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;top:'.$list['childData'][0]['top'].'px;left:'.$list['childData'][0]['left'].'px;z-index:14;">
			'.$jtzhtml.'
		</div>
  		<div class="abs next'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverright.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;top:'.$list['childData'][1]['top'].'px;left:'.$list['childData'][1]['left'].'px;z-index:14;">
 			'.$jtyhtml.'
		</div>';
//content


//小循环
$x1='';
foreach($config['contentType'] as $i=>$type){
	if($type=='imgContent'){
		$pngwidget="{'png':true,'png_bg':true}";
		$x1[$i]='<div class="elepic" style="height:'.$xdheight.'px;width:'.$xdwidth.'px;float:left;overflow:hidden;">
                  <div class="elexb rel" style="height:'.$xdheight.'px;width:'.$xdwidth.'px;background:url('.$config['sliderSrc'][$i].') no-repeat scroll center top transparent;">
                    <a class="J_TWidget" href="'.$config['sliderHref'][$i].'" target="_blank" style="height:'.$xdheight.'px;width:'.$xdwidth.'px;display:block;" data-widget-config="'.$pngwidget.'" data-widget-type="Compatible"></a>
                  </div>
                </div>';
		}else{
		$x1[$i]='<div class="elepic" style="height:'.$xdheight.'px;width:'.$xdwidth.'px;float:left;overflow:hidden;">
                  <div class="elexb rel" style="height:'.$xdheight.'px;width:'.$xdwidth.'px;">'.$config['customContent'][$i].'</div>
                </div>';	
			
			}
	
	}
//----小循环组装
$xxzz='';
for($n=0;$n<$z;$n++){ 
	$leijia='';
	foreach($config['contentType'] as $i=>$type){
		$k=($n+$i) % count($config['contentType']);
		$leijia=$leijia.$x1[$k];
	}
	if($config['sliderOver']!=='yes'&&$config['sliderMode']!=='scrolly'&&($xdwidth*$n>$pos[0])){$leijia='';};

	$xxzz=$xxzz.'<div class="scroller rel  j-b" style="overflow:hidden;width:'.$xdwidth.'px;height:'.$xdheight.'px;z-index:10;display:'.($config['sliderMode']=="scrolly" ? "block;" : "inline-block;").$menglefy.'">
                  <div class="ks-switchable-content c_'.$n.'_'.$ls.'" style="display:initial;">
                   '.$leijia.'
                  </div>
                </div>';
	}
//按钮组装
//缩略
$kshtml='';$ksdiv='';$ksdivzh='';
$ksinfo=$list['childData_1'];
$ksdis=$config['sliderSmallImg']=='no'?'display:none;':'';
//缩略开关灯
if($config['kgdSwitch']=='black'){$kgdcss1='background:#000000;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='white'){$kgdcss1='background:#ffffff;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='transparent'){$kgdcss1='';$kgdcss2='';}
foreach($config['contentType'] as $i=>$kstype){
	$kstype=$config['smallCircleMode'][$i]?$config['smallCircleMode'][$i]:'no';
	$ksactive=$i==0?'juneactive':'';
if($kstype=='no'){//缩略图片
	if($config['contentType'][$i]=='imgContent'){
		$img=$config['smallImgSrcT'][$i]?$config['smallImgSrcT'][$i]:$config['sliderSrc'][$i];
		$imghover=$config['smallHoverSrcT'][$i]?$config['smallHoverSrcT'][$i]:$img;
		}else{
		$img=$config['smallImgSrc'][$i];
		$imghover=$config['smallHoverSrc'][$i];	
		}
	$ksdiv='<li class="abs '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;cursor:pointer;">
      <a  target="'.$config['hrefMode'].'" class="abs s1" style="top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
        <img src="'.$imghover.'" style="vertical-align:top;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
      <a  target="'.$config['hrefMode'].'" class="abs s2" style="'.$kgdcss1.'top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
        <img src="'.$img.'" style="vertical-align:top;'.$kgdcss2.'width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
    </li>';
	
	}
if($kstype=='yes'){//缩略圆点
	if($config['thumbCircleSet'][$i]){
		$str = stripslashes($config['thumbCircleSet'][$i]);$str = stripslashes($str);
		$ydwzs = json_decode($str,true); 
		$ydwznr=$ydwzs['characterContent']?$ydwzs['characterContent']:'';
		$ydwzcolor=$ydwzs['characterColor']?'color:'.$ydwzs['characterColor'].';':'';
		$ydwzfamily=$ydwzs['characterFont']?'font-family:'.$ydwzs['characterFont'].';':'';
		$ydwzcharacterWeight=$ydwzs['characterWeight']?'font-weight:'.$ydwzs['characterWeight'].';':'';
		$ydwzcharacterSize=$ydwzs['characterSize']?'font-size:'.$ydwzs['characterSize'].';':'';
		$ydwzcolor1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterColorHover']?'color:'.$ydwzs['characterColorHover'].';':'color:'.$ydwzs['characterColor'].';';
		$ydwzfamily1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterFontHover']?'font-family:'.$ydwzs['characterFontHover'].';':'font-family:'.$ydwzs['characterFont'].';';
		$ydwzcharacterWeight1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterWeightHover']?'font-weight:'.$ydwzs['characterWeightHover'].';':'font-weight:'.$ydwzs['characterWeight'].';';
		$ydwzcharacterSize1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterSizeHover']?'font-size:'.$ydwzs['characterSizeHover'].';':'font-size:'.$ydwzs['characterSize'].';';
	}else{
		$ydwznr='';
		$ydwzcolor='';
		$ydwzfamily='';
		$ydwzcharacterWeight='';
		$ydwzcharacterSize='';
		$ydwzcolor1='';
		$ydwzfamily1='';
		$ydwzcharacterWeight1='';
		$ydwzcharacterSize1='';	
	}
	$ksbg0=$config['smallCircleBgColor'][$i]?'background-color:'.$config['smallCircleBgColor'][$i].';':'';
	$ksbg1=$config['smallCircleBgColor1'][$i]?'background-color:'.$config['smallCircleBgColor1'][$i].';':'';
	$ksdiv='<li class="abs scm '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;cursor:pointer;text-align:center;">
      <div class="abs s1" style="border-radius:50%;width:100%;height:100%;'.$ksbg1.''.$ydwzcolor.$ydwzfamily.$ydwzcharacterWeight.$ydwzcharacterSize.'">'.$ydwznr.'</div>
      <div class="abs s2" style="border-radius:50%;width:100%;height:100%;'.$ksbg0.''.$ydwzcolor1.$ydwzfamily1.$ydwzcharacterWeight1.$ydwzcharacterSize1.'">'.$ydwznr.'</div>
    </li>';
	
	}
if($kstype=='yes2'){//缩略文字
	$str = stripslashes($config['thumbSet'][$i]); $str = stripslashes($str);
	$wzdata = json_decode($str,true);
if($wzdata['tipText']==''){$tipText='';}else{$tipText='title="'.$wzdata['tipText'].'"';}
if($wzdata['characterMode']=='text'){$datac='data-c="'.$wzdata['characterLineMulti'].'"';}else{$datac='data-h="'.$wzdata['characterContent'].';'.$wzdata['characterItemContent'].'"';}
if($wzdata['characterModeHover']=='text'){$datac2='data-ch="'.$wzdata['characterLineMultiHover'].'"';}else{$datac2='data-hh="'.$wzdata['characterItemContentHover'].';'.$wzdata['characterItemContentHover'].'"';}
if($wzdata['outlineControl']=='outlineShow'){$outline='outline-color:'.$wzdata['outlineColor'].';';$outlineSpeed=$wzdata['outlineSpeed'];$outlineWidth=$wzdata['outlineWidth'];$outlineShadowColor='color:'.$wzdata['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';}
//正面
if($wzdata['characterFont']){$Font='font-family:'.$wzdata['characterFont'].';';}else{$Font='';}
if($wzdata['characterSize']){$Size='font-size:'.$wzdata['characterSize'].'px;';}else{$Size='';}
if($wzdata['characterColor']){$Color='color:'.$wzdata['characterColor'].';';}else{$Color='';}
if($wzdata['characterLineHeight']){$LineHeight='line-height:'.$wzdata['characterLineHeight'].'px;';}else{$LineHeight='';}
if($wzdata['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$wzdata['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($wzdata['characterIndent']){
		if($wzdata['characterAlign']=='left'){$Indent='padding-left:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='right'){$Indent='padding-right:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='center'){$Indent='padding:0 '.$wzdata['characterIndent'].'px;';}
	}else{$Indent='';}
if($wzdata['characterWeight']){$Weight='font-weight:'.$wzdata['characterWeight'].';';}else{$Weight='';}
if($wzdata['characterStyle']){$FontStyle='font-style:'.$wzdata['characterStyle'].';';}else{$FontStyle='';}
if($wzdata['characterLineOver']||$wzdata['characterLineThrough']||$wzdata['characterLineUnder']){$LineOver='text-decoration:'.$wzdata['characterLineOver'].' '.$wzdata['characterLineThrough'].' '.$wzdata['characterLineUnder'].';';}else{$LineOver='';}
if($wzdata['characterAlign']){$Align='text-align:'.$wzdata['characterAlign'].';';}else{$Align='';}
if($wzdata['borderRadius1']){$borderRadius='border-radius:'.$wzdata['borderRadius1'].';';}else{$borderRadius='';}
if($wzdata['borderControl1']){
	$borderWidth=$wzdata['borderWidth1']?$wzdata['borderWidth1']:'0';
	$border='border:'.$borderWidth.'px solid '.$wzdata['borderColor1'].';'.$borderRadius.';';}else{$border='';}
if($wzdata['shadowControl1']=='shadowShow1'){ 
  $slz1=$wzdata['shadowLeft1']?$wzdata['shadowLeft1']:'0';
  $slz2=$wzdata['shadowTop1']?$wzdata['shadowTop1']:'0';
  $slz3=$wzdata['shadowBlur1']?$wzdata['shadowBlur1']:'0';
  $slz4=$wzdata['shadowSize1']?$wzdata['shadowSize1']:'0';
  $shadow='box-shadow:'.$slz1.'px '.$slz2.'px '.$slz3.'px '.$slz4.'px '.$wzdata['shadowColor1'].' '.$wzdata['shadowStyle1'].';';
 }else{$shadow='';}
if($wzdata['characterBgColor']){$BgColor='background-color:'.$wzdata['characterBgColor'].';';}else{$BgColor='';}
if($wzdata['characterBgSrc']){$BgSrc='background:url('.$wzdata['characterBgSrc'].') '.$wzdata['imgBgp'].' no-repeat;';}else{$BgSrc='';}
if($wzdata['characterWidthMode']=='auto'){$display='';$wdth='';}else{$display='';$wdth='width:'.$ksinfo[$i]['width'].'px;';}
if($wzdata['ssOpacity']){ $sso1=$wzdata['ssOpacity']*100; $ssOpacity='opacity:'.$wzdata['ssOpacity'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso1.');';}else{$ssOpacity='';}
$wdwidth=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['width']-$wzdata['borderWidth1']*2:$ksinfo[$i]['width'];
$wdheigh=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['height']-$wzdata['borderWidth1']*2:$ksinfo[$i]['height'];
$zhengstyle='width:auto;'.$display.$Align.'height:'.$wdheigh.'px;'.$LineHeight.'white-space: nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Indent.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.$border.$shadow.$ssOpacity.'';
//反面
if($wzdata['characterFontHover']){$Font2='font-family:'.$wzdata['characterFontHover'].';';}else{$Font2='';}
if($wzdata['characterSizeHover']){$Size2='font-size:'.$wzdata['characterSizeHover'].'px;';}else{$Size2='';}
if($wzdata['characterColorHover']){$Color2='color:'.$wzdata['characterColorHover'].';';}else{$Color2='';}
if($wzdata['characterLetterSpacingHover']){$LetterSpacing2='letter-spacing:'.$wzdata['characterLetterSpacingHover'].'px;';}else{$LetterSpacing2='';}
if($wzdata['characterIndentHover']){
		if($wzdata['characterAlignHover']=='left'){$Indent2='padding-left:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='right'){$Indent2='padding-right:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='center'){$Indent2='padding:0 '.$wzdata['characterIndentHover'].'px;';}
	}else{$Indent2='';}
if($wzdata['characterWeightHover']){$Weight2='font-weight:'.$wzdata['characterWeightHover'].';';}else{$Weight2='';}
if($wzdata['characterStyleHover']){$FontStyle2='font-style:'.$wzdata['characterStyleHover'].';';}else{$FontStyle2='';}
if($wzdata['characterLineOverHover']||$wzdata['characterLineThroughHover']||$wzdata['characterLineUnderHover']){$LineOver2='text-decoration:'.$wzdata['characterLineOverHover'].' '.$wzdata['characterLineThroughHover'].' '.$wzdata['characterLineUnderHover'].';';}else{$LineOver2='';}
if($wzdata['characterAlignHover']){$Align2='text-align:'.$wzdata['characterAlignHover'].';';}else{$Align2='';}
if($wzdata['characterUnderLine']=='on'&&$wzdata['borderControl']==''){
	$UnderLine='border-bottom: '.$wzdata['characterUnderLineWeight'].'px '.$wzdata['characterUnderLineStyle'].' '.$wzdata['characterUnderLineColor'].';';$UnBH=$wzdata['characterUnderLineWeight'];}else{$UnderLine='';$UnBH=0;}
if($wzdata['characterLineHeightHover']){$lh3=$wzdata['characterLineHeightHover'];$LineHeight2='line-height:'.$lh3.'px;';}else{$LineHeight2=$LineHeight;}
if($wzdata['borderControl']){
	$borderWidth2=$wzdata['borderWidth']?$wzdata['borderWidth']:'0';
	$border2='border:'.$borderWidth2.'px solid '.$wzdata['borderColor'].';'.$borderRadius.';';}else{$border2='';}
if($wzdata['shadowControl']=='shadowShow'){ 
  $slf1=$wzdata['shadowLeft']?$wzdata['shadowLeft']:'0';
  $slf2=$wzdata['shadowTop']?$wzdata['shadowTop']:'0';
  $slf3=$wzdata['shadowBlur']?$wzdata['shadowBlur']:'0';
  $slf4=$wzdata['shadowSize']?$wzdata['shadowSize']:'0';
  $shadow2=''.$slf1.' '.$slf2.' '.$slf3.' '.$slf4.' '.$wzdata['shadowColor'].' '.$wzdata['shadowStyle'].';';
 }else{$shadow2='';}
if($wzdata['characterBgColorHover']){$BgColor2='background-color:'.$wzdata['characterBgColorHover'].';';}else{$BgColor2='';}
if($wzdata['characterBgSrcHover']){$BgSrc2='background:url('.$wzdata['characterBgSrcHover'].') '.$wzdata['imgBgpHover'].' no-repeat;';}else{$BgSrc2='';}
if($wzdata['ssOpacity1']){ $sso2=$wzdata['ssOpacity1']*100; $ssOpacity2='opacity:'.$wzdata['ssOpacity1'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso2.');';}else{$ssOpacity2='';}
$wdwidth2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['width']-$wzdata['borderWidth']*2:$ksinfo[$i]['width'];
$wdheigh2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['height']-$wzdata['borderWidth']*2:$ksinfo[$i]['height']-$UnBH;
$fanstyle='display:block;width:auto;'.$Align.'height:'.$ksinfo[$i]['height'].'px;'.$LineHeight2.'white-space: nowrap;word-break:break-all;'.$BgSrc2.$BgColor2.$Color2.$Font2.$Indent2.$Weight2.$FontStyle2.$Size2.$LineOver2.$LetterSpacing2.$border2.$shadow2.$ssOpacity2.''.$UnderLine.'';

if($wzdata['characterHoverMode']=='off'){
	$contwzbox='<a class="rel s2"  style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent'][$i].'</a>';
	$wccls2='';
	}else{
	$contwzbox='<a class="rel '.$wzdata['characterHoverSpeed'].' s2"  style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent'][$i].'</a>
      <div class="jspb rel s1" style="width:100%;height:100%;"><a class="rel '.$wzdata['characterHoverSpeed'].' '.$wzdata['css3ModeX1'].' '.$wzdata['css3ModeY1'].' '.$wzdata['css3Mode1'].'" '.$href.' style="'.$fanstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent1'][$i].'</a></div>';
	$wccls2='junefade';
	}
	$ksdiv='<li data-i="'.$ksinfo[$i]['attachID'].'" class="'.$config['dSmallRorate'].' '.$smallShowSpeed.' abs thumbsmall '.$ksactive.' '.$ksinfo[$i]['attachID'].' jnwz jz '.$wzdata['css3ModeX'].' '.$wzdata['css3ModeY'].' '.$wzdata['css3Mode'].' '.$wzdata['attachID'].' '.$wccls2.' '.$wzdata['borderControl'].' '.$wzdata['borderControl1'].' '.$wzdata['shadowControl'].' '.$wzdata['shadowControl1'].' '.$outlineWidth.' '.$outlineSpeed.'" data-t="text;text" data-w="normal" data-o="'.$wzdata['ssOpacity'].';'.$wzdata['ssOpacity1'].'" style="float:left;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;">'.$contwzbox.'</li>';
	
	}
if($kstype=='yes1'){//缩略自定义
	if($config['smallCustom1'][$i]){
		$diy='<div class="abs s1" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom1'][$i].'</div>
		      <div class="abs s2" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>';
			  }else{
		$diy='<div class="abs s3" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>';
		   }
	$ksdiv='<li class="abs sch '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;overflow:hidden;">'.$diy.'</li>';

	}
$ksdivzh=$ksdivzh.$ksdiv;
}
if($config['smallShowCss']){ $kspp=$config['smallShowSpeed']?$config['smallShowSpeed']:'trans02s'; }else{$kspp='';}
$slhtml='  <ul class="sltae ks-switchable-nav abs jfsb n'.$ls.' '.$config['smallShowCss'].' '.$kspp.'" style="'.$ksdis.'top:0px;left:0px;z-index:12;background:none;">
   '.$ksdivzh.'
  </ul>';
//结束


return''.$zujianzuhe.''.$jtdiv.'<div class="wfpanel abs" data-a="1" data-f="0" style="width:'.$pos[0].'px;height:'.$pos[1].'px;white-space:nowrap;z-index:10;'.$over.'">'.$xxzz.'</div>'.$slhtml.$ovmeng.''.$zujianover.'';
}
/*****   无缝轮播结束  *****/


/*****     嵌套轮播    *****/
if($list['appType']=='jqtb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(100000,999999);
$xdwidth=$list['curExData']['newWidth'];
$xdheight=$list['curExData']['newHeight'];
$nestConfig=$config['nestConfig'];
$z=count($config['nestConfig']);
$xz=count($config['nestConfig'][0]['contentType']);


//组件组装

/**

codeObj[0][config][nestConfig][0][sliderMode]:scrollx
codeObj[0][config][nestConfig][0][sliderEffect]:easeBoth
codeObj[0][config][nestConfig][0][sliderDuration]:0.5
codeObj[0][config][nestConfig][0][sliderDelay]:0
codeObj[0][config][nestConfig][0][sliderFloorWidth]:
codeObj[0][config][nestConfig][0][sliderFloorHeight]:
codeObj[0][config][nestConfig][0][sliderFloorTop]:
codeObj[0][config][nestConfig][0][sliderFloorLeft]:

**/

if($config['css3Mode']){$clsszy='jspb j-b';}else{$clsszy='';}
for($n=0;$n<$z;$n++){
	if($nestConfig[$n]['sliderMode']=='scrollx1'||$nestConfig[$n]['sliderMode']=='scrolly1'){
	$data_s[$n]='b';$vs='';
	if($nestConfig[$n]['sliderMode']=='scrollx1'){$effect='scrollx';for($nx=0;$nx<count($nestConfig[$n]['contentType']);$nx++){$vs=$nx==0?'-'.$pos[0]:$vs.',-'.$pos[0].'';}$viewSize=", 'viewSize': [".$vs."]";}
	if($nestConfig[$n]['sliderMode']=='scrolly1'){$effect='scrolly';for($nx=0;$nx<count($nestConfig[$n]['contentType']);$nx++){$vs=$nx==0?'-'.$pos[1]:$vs.',-'.$pos[1].'';}$viewSize=", 'viewSize': [".$vs."]";}
	}else{
	$data_s[$n]='a';
	$effect=$nestConfig[$n]['sliderMode'];
	$viewSize='';
	}
	$sliderAuto=$config['sliderAuto']=='false'?'false':'true';
  $lbwidget[$n]="{'contentCls':'n".$n."c".$ls."','navCls':'n".$ls."','effect':'".$effect."','steps':1,'circular':true,'easing':'".$nestConfig[$n]['sliderEffect']."','duration':'".$nestConfig[$n]['sliderDuration']."','delay':'".$nestConfig[$n]['sliderDelay']."','prevBtnCls':'prev".$ls."','nextBtnCls':'next".$ls."','autoplay':".$sliderAuto.",'interval':".$config['sliderTime'].",'activeTriggerCls':'juneactive','triggerType':'".$config['sliderSwitch']."'".$viewSize."}";
	}
$zujianzuhe='';$zujianover='';
for($n=0;$n<$z;$n++){ 
if($n==0){$cl1=' '.$config['appID'].'';$cl2='data-appid="'.$config['appID'].'" '.$Opacity_attr.'';$cl3='width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;'.$Opacity_css.'';}else{$cl1='';$cl2='';$cl3='';}
$zujianzuhe=''.$zujianzuhe.'<div class="jqtb abs J_TWidget '.$clsszy.' '.$cl1.'" '.$cl2.' data-s="'.$data_s[$n].'" style="'.$cl3.'z-index:10;"  data-hsrc=""  data-widget-type="Carousel" data-widget-config="'.$lbwidget[$n].'">';
$zujianover=''.$zujianover.'</div>';
}


//左右箭头
$zuoyoudisplay=$config['sliderArrow']=='yes'?'':'display:none;';
$zuoyou=$config['childConfig'][0];

$jtzuo=$zuoyou['oSrc']?'background:url('.$zuoyou['oSrc'].') no-repeat center center;':'';
if($zuoyou['oSrcHover']){
  $jtzhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0; '.$jtzuo.'" alt="上一页"></div><div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['oSrcHover'].') no-repeat center center;" alt="上一页"></div>';
	}else{
  $jtzhtml='<div style="display:block;width:100%;height:100%;'.$jtzuo.'" alt="上一页"></div>';
		}
$jtyou=$zuoyou['tSrc']?'background:url('.$zuoyou['tSrc'].') no-repeat center center;':'';
if($zuoyou['tSrcHover']){
  $jtyhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;'.$jtyou.'" alt="下一页"></div>
			<div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['tSrcHover'].') no-repeat center center;" alt="下一页"></div>';
	}else{
  $jtyhtml='<div style="display:block;width:100%;height:100%;'.$jtyou.'" alt="下一页"></div>';
		}
if($config['displayMode']=='june-box-fadein'){$jtdanru='june-box-fadein b-1-fadein';$clsszy='jspb j-b';}else{$jtdanru='';} //淡出淡入
$jtcss0 = explode('movein',$config['css3Mode']);$jtcss1 = explode('moveout',$config['css3Mode']);
$jthoverleft='';$jthoverright='';
if(count($jtcss0)>1&&$config['sliderArrow']=='yes'){$jthoverleft='june-box-rx'.$jtcss0[1].' b-1-rx'.$jtcss0[1].'';$jthoverright='june-box-lx'.$jtcss0[1].' b-1-lx'.$jtcss0[1].'';}
if(count($jtcss1)>1&&$config['sliderArrow']=='yes'){$jthoverleft='june-box-lx'.$jtcss1[1].' b-1-lx'.$jtcss1[1].'';$jthoverright='june-box-rx'.$jtcss1[1].' b-1-rx'.$jtcss1[1].'';}
$jtdiv='<div class="abs prev'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverleft.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;top:'.$list['childData'][0]['top'].'px;left:'.$list['childData'][0]['left'].'px;z-index:14;">
			'.$jtzhtml.'
		</div>
  		<div class="abs next'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverright.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;top:'.$list['childData'][1]['top'].'px;left:'.$list['childData'][1]['left'].'px;z-index:14;">
 			'.$jtyhtml.'
		</div>';
//content


//小循环
$x1='';$xxzz='';$item='';
for($n=0;$n<$z;$n++){$js=$n+1;
	$item=$nestConfig[$n];
	$dqheight=$item['sliderFloorHeight']?$item['sliderFloorHeight']:$pos[1];
	$dqwidth=$item['sliderFloorWidth']?$item['sliderFloorWidth']:$pos[0];
	$dqtop=$item['sliderFloorTop']?$item['sliderFloorTop']:0;
	$dqleft=$item['sliderFloorLeft']?$item['sliderFloorLeft']:0;
	//小层封装
	$x1zh='';
   for($x=0;$x<$xz;$x++){
	   if($data_s[$n]=='b'){
		$contabs='abs';
		if($item['sliderMode']=='scrollx1'){$adnum=$x*$pos[0];$contcss='left:-'.$adnum.'px;top:0;';}
		if($item['sliderMode']=='scrolly1'){$adnum=$x*$pos[1];$contcss='left:0px;top:-'.$adnum.'px;';}
		}else{
		$contabs='';$contcss='';
		}
	  if($item['contentType'][$x]=='imgContent'){
		$pngwidget="{'png':true,'png_bg':true}";
		$x1='<div class="elepic" style="height:'.$dqheight.'px;width:'.$dqwidth.'px;display:block;float:left;">
                <div class="elexb '.$contabs.'" style="height:'.$dqheight.'px;width:'.$dqwidth.'px;'.$contcss.'background:url('.$item['sliderSrc'][$x].') no-repeat scroll 50% 50% transparent;">
                  <a class="J_TWidget" href="'.$config['sliderHref'][$x].'" target="_blank" style="height:'.$dqheight.'px;width:'.$dqwidth.'px;display:block;" data-widget-config="'.$pngwidget.'" data-widget-type="Compatible"></a>
                </div>
              </div>'; 
		  }else{
			$x1='<div class="elepic" style="height:'.$dqheight.'px;width:'.$item['sliderFloorWidth'].'px;display:block;float:left;"><div class="elexb '.$contabs.'" style="height:'.$dqheight.'px;width:'.$dqwidth.'px;'.$contcss.'">'.$item['customContent'][$x].'</div></div>';  

			  }
	   $x1zh=$x1zh.$x1;
	   }
	//小层封装结束,大层封装
	
	$dc='<div class="abs june-nsc" style="z-index:'.$js.';width:'.$dqwidth.'px;height:'.$dqheight.'px;top:'.$dqtop.'px;left:'.$dqleft.'px;overflow:hidden;">
            <div class="ks-switchable-content n'.$n.'c'.$ls.'">'.$x1zh.'</div>
          </div>';
	$xxzz=$xxzz.$dc;
	}

//按钮组装
//缩略
$kshtml='';$ksdiv='';$ksdivzh='';
$ksinfo=$list['childData_1'];
$ksdis=$config['sliderSmallImg']=='no'?'display:none':'';
//缩略开关灯
if($config['kgdSwitch']=='black'){$kgdcss1='background:#000000;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='white'){$kgdcss1='background:#ffffff;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='transparent'){$kgdcss1='';$kgdcss2='';}
foreach($config['smallCircleMode'] as $i=>$kstype){
	$kstype=$config['smallCircleMode'][$i]?$config['smallCircleMode'][$i]:'no';
	$ksactive=$i==0?'juneactive':'';
if($kstype=='no'){//缩略图片
	if($config['contentType'][$i]=='imgContent'){
		$img=$config['smallImgSrcT'][$i]?$config['smallImgSrcT'][$i]:$config['sliderSrc'][$i];
		$imghover=$config['smallHoverSrcT'][$i]?$config['smallHoverSrcT'][$i]:$img;
		}else{
		$img=$config['smallImgSrc'][$i];
		$imghover=$config['smallHoverSrc'][$i]?$config['smallHoverSrc'][$i]:$img;	
		}
	$ksdiv='<li class="abs '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;cursor:pointer;">
      <a target="'.$config['hrefMode'].'" class="abs s1" style="top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
        <img src="'.$imghover.'" style="vertical-align:top;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
      <a target="'.$config['hrefMode'].'" class="abs s2" style="'.$kgdcss1.'top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
        <img src="'.$img.'" style="vertical-align:top;'.$kgdcss2.'width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
    </li>';
	
	}
if($kstype=='yes'){//缩略圆点
	if($config['thumbCircleSet'][$i]){
		$str = stripslashes($config['thumbCircleSet'][$i]);$str = stripslashes($str);
		$ydwzs = json_decode($str,true); 
		$ydwznr=$ydwzs['characterContent']?$ydwzs['characterContent']:'';
		$ydwzcolor=$ydwzs['characterColor']?'color:'.$ydwzs['characterColor'].';':'';
		$ydwzfamily=$ydwzs['characterFont']?'font-family:'.$ydwzs['characterFont'].';':'';
		$ydwzcharacterWeight=$ydwzs['characterWeight']?'font-weight:'.$ydwzs['characterWeight'].';':'';
		$ydwzcharacterSize=$ydwzs['characterSize']?'font-size:'.$ydwzs['characterSize'].';':'';
		$ydwzcolor1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterColorHover']?'color:'.$ydwzs['characterColorHover'].';':'color:'.$ydwzs['characterColor'].';';
		$ydwzfamily1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterFontHover']?'font-family:'.$ydwzs['characterFontHover'].';':'font-family:'.$ydwzs['characterFont'].';';
		$ydwzcharacterWeight1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterWeightHover']?'font-weight:'.$ydwzs['characterWeightHover'].';':'font-weight:'.$ydwzs['characterWeight'].';';
		$ydwzcharacterSize1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterSizeHover']?'font-size:'.$ydwzs['characterSizeHover'].';':'font-size:'.$ydwzs['characterSize'].';';
	}else{
		$ydwznr='';
		$ydwzcolor='';
		$ydwzfamily='';
		$ydwzcharacterWeight='';
		$ydwzcharacterSize='';
		$ydwzcolor1='';
		$ydwzfamily1='';
		$ydwzcharacterWeight1='';
		$ydwzcharacterSize1='';	
	}
	$ksbg0=$config['smallCircleBgColor'][$i]?'background-color:'.$config['smallCircleBgColor'][$i].';':'';
	$ksbg1=$config['smallCircleBgColor1'][$i]?'background-color:'.$config['smallCircleBgColor1'][$i].';':'';
	$ksdiv='<li class="abs scm '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;cursor:pointer;text-align:center;">
      <div class="abs s1" style="border-radius:50%;width:100%;height:100%;'.$ksbg1.''.$ydwzcolor.$ydwzfamily.$ydwzcharacterWeight.$ydwzcharacterSize.'">'.$ydwznr.'</div>
      <div class="abs s2" style="border-radius:50%;width:100%;height:100%;'.$ksbg0.''.$ydwzcolor1.$ydwzfamily1.$ydwzcharacterWeight1.$ydwzcharacterSize1.'">'.$ydwznr.'</div>
    </li>';
	
	}
if($kstype=='yes2'){//缩略文字
	$str = stripslashes($config['thumbSet'][$i]); $str = stripslashes($str);
	$wzdata = json_decode($str,true);
if($wzdata['tipText']==''){$tipText='';}else{$tipText='title="'.$wzdata['tipText'].'"';}
if($wzdata['characterMode']=='text'){$datac='data-c="'.$wzdata['characterLineMulti'].'"';}else{$datac='data-h="'.$wzdata['characterContent'].';'.$wzdata['characterItemContent'].'"';}
if($wzdata['characterModeHover']=='text'){$datac2='data-ch="'.$wzdata['characterLineMultiHover'].'"';}else{$datac2='data-hh="'.$wzdata['characterItemContentHover'].';'.$wzdata['characterItemContentHover'].'"';}
if($wzdata['outlineControl']=='outlineShow'){$outline='outline-color:'.$wzdata['outlineColor'].';';$outlineSpeed=$wzdata['outlineSpeed'];$outlineWidth=$wzdata['outlineWidth'];$outlineShadowColor='color:'.$wzdata['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';}
//正面
if($wzdata['characterFont']){$Font='font-family:'.$wzdata['characterFont'].';';}else{$Font='';}
if($wzdata['characterSize']){$Size='font-size:'.$wzdata['characterSize'].'px;';}else{$Size='';}
if($wzdata['characterColor']){$Color='color:'.$wzdata['characterColor'].';';}else{$Color='';}
if($wzdata['characterLineHeight']){$LineHeight='line-height:'.$wzdata['characterLineHeight'].'px;';}else{$LineHeight='';}
if($wzdata['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$wzdata['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($wzdata['characterIndent']){
		if($wzdata['characterAlign']=='left'){$Indent='padding-left:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='right'){$Indent='padding-right:'.$wzdata['characterIndent'].'px;';}
		if($wzdata['characterAlign']=='center'){$Indent='padding:0 '.$wzdata['characterIndent'].'px;';}
	}else{$Indent='';}
if($wzdata['characterWeight']){$Weight='font-weight:'.$wzdata['characterWeight'].';';}else{$Weight='';}
if($wzdata['characterStyle']){$FontStyle='font-style:'.$wzdata['characterStyle'].';';}else{$FontStyle='';}
if($wzdata['characterLineOver']||$wzdata['characterLineThrough']||$wzdata['characterLineUnder']){$LineOver='text-decoration:'.$wzdata['characterLineOver'].' '.$wzdata['characterLineThrough'].' '.$wzdata['characterLineUnder'].';';}else{$LineOver='';}
if($wzdata['characterAlign']){$Align='text-align:'.$wzdata['characterAlign'].';';}else{$Align='';}
if($wzdata['borderRadius1']){$borderRadius='border-radius:'.$wzdata['borderRadius1'].';';}else{$borderRadius='';}
if($wzdata['borderControl1']){
	$borderWidth=$wzdata['borderWidth1']?$wzdata['borderWidth1']:'0';
	$border='border:'.$borderWidth.'px solid '.$wzdata['borderColor1'].';'.$borderRadius.';';}else{$border='';}
if($wzdata['shadowControl1']=='shadowShow1'){ 
  $slz1=$wzdata['shadowLeft1']?$wzdata['shadowLeft1']:'0';
  $slz2=$wzdata['shadowTop1']?$wzdata['shadowTop1']:'0';
  $slz3=$wzdata['shadowBlur1']?$wzdata['shadowBlur1']:'0';
  $slz4=$wzdata['shadowSize1']?$wzdata['shadowSize1']:'0';
  $shadow='box-shadow:'.$slz1.'px '.$slz2.'px '.$slz3.'px '.$slz4.'px '.$wzdata['shadowColor1'].' '.$wzdata['shadowStyle1'].';';
 }else{$shadow='';}
if($wzdata['characterBgColor']){$BgColor='background-color:'.$wzdata['characterBgColor'].';';}else{$BgColor='';}
if($wzdata['characterBgSrc']){$BgSrc='background:url('.$wzdata['characterBgSrc'].') '.$wzdata['imgBgp'].' no-repeat;';}else{$BgSrc='';}
if($wzdata['characterWidthMode']=='auto'){$display='';$wdth='';}else{$display='';$wdth='width:'.$ksinfo[$i]['width'].'px;';}
if($wzdata['ssOpacity']){ $sso1=$wzdata['ssOpacity']*100; $ssOpacity='opacity:'.$wzdata['ssOpacity'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso1.');';}else{$ssOpacity='';}
$wdwidth=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['width']-$wzdata['borderWidth1']*2:$ksinfo[$i]['width'];
$wdheigh=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['height']-$wzdata['borderWidth1']*2:$ksinfo[$i]['height'];
$zhengstyle='width:auto;'.$display.$Align.'height:'.$wdheigh.'px;'.$LineHeight.'white-space: nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Indent.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.$border.$shadow.$ssOpacity.'';
//反面
if($wzdata['characterFontHover']){$Font2='font-family:'.$wzdata['characterFontHover'].';';}else{$Font2='';}
if($wzdata['characterSizeHover']){$Size2='font-size:'.$wzdata['characterSizeHover'].'px;';}else{$Size2='';}
if($wzdata['characterColorHover']){$Color2='color:'.$wzdata['characterColorHover'].';';}else{$Color2='';}
if($wzdata['characterLetterSpacingHover']){$LetterSpacing2='letter-spacing:'.$wzdata['characterLetterSpacingHover'].'px;';}else{$LetterSpacing2='';}
if($wzdata['characterIndentHover']){
		if($wzdata['characterAlignHover']=='left'){$Indent2='padding-left:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='right'){$Indent2='padding-right:'.$wzdata['characterIndentHover'].'px;';}
		if($wzdata['characterAlignHover']=='center'){$Indent2='padding:0 '.$wzdata['characterIndentHover'].'px;';}
	}else{$Indent2='';}
if($wzdata['characterWeightHover']){$Weight2='font-weight:'.$wzdata['characterWeightHover'].';';}else{$Weight2='';}
if($wzdata['characterStyleHover']){$FontStyle2='font-style:'.$wzdata['characterStyleHover'].';';}else{$FontStyle2='';}
if($wzdata['characterLineOverHover']||$wzdata['characterLineThroughHover']||$wzdata['characterLineUnderHover']){$LineOver2='text-decoration:'.$wzdata['characterLineOverHover'].' '.$wzdata['characterLineThroughHover'].' '.$wzdata['characterLineUnderHover'].';';}else{$LineOver2='';}
if($wzdata['characterAlignHover']){$Align2='text-align:'.$wzdata['characterAlignHover'].';';}else{$Align2='';}
if($wzdata['characterUnderLine']=='on'&&$wzdata['borderControl']==''){
	$UnderLine='border-bottom: '.$wzdata['characterUnderLineWeight'].'px '.$wzdata['characterUnderLineStyle'].' '.$wzdata['characterUnderLineColor'].';';$UnBH=$wzdata['characterUnderLineWeight'];}else{$UnderLine='';$UnBH=0;}
if($wzdata['characterLineHeightHover']){$lh3=$wzdata['characterLineHeightHover'];$LineHeight2='line-height:'.$lh3.'px;';}else{$LineHeight2=$LineHeight;}
if($wzdata['borderControl']){
	$borderWidth2=$wzdata['borderWidth']?$wzdata['borderWidth']:'0';
	$border2='border:'.$borderWidth2.'px solid '.$wzdata['borderColor'].';'.$borderRadius.';';}else{$border2='';}
if($wzdata['shadowControl']=='shadowShow'){ 
  $slf1=$wzdata['shadowLeft']?$wzdata['shadowLeft']:'0';
  $slf2=$wzdata['shadowTop']?$wzdata['shadowTop']:'0';
  $slf3=$wzdata['shadowBlur']?$wzdata['shadowBlur']:'0';
  $slf4=$wzdata['shadowSize']?$wzdata['shadowSize']:'0';
  $shadow2=''.$slf1.' '.$slf2.' '.$slf3.' '.$slf4.' '.$wzdata['shadowColor'].' '.$wzdata['shadowStyle'].';';
 }else{$shadow2='';}
if($wzdata['characterBgColorHover']){$BgColor2='background-color:'.$wzdata['characterBgColorHover'].';';}else{$BgColor2='';}
if($wzdata['characterBgSrcHover']){$BgSrc2='background:url('.$wzdata['characterBgSrcHover'].') '.$wzdata['imgBgpHover'].' no-repeat;';}else{$BgSrc2='';}
if($wzdata['ssOpacity1']){ $sso2=$wzdata['ssOpacity1']*100; $ssOpacity2='opacity:'.$wzdata['ssOpacity1'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso2.');';}else{$ssOpacity2='';}
$wdwidth2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['width']-$wzdata['borderWidth']*2:$ksinfo[$i]['width'];
$wdheigh2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['height']-$wzdata['borderWidth']*2:$ksinfo[$i]['height']-$UnBH;
$fanstyle='display:block;width:auto;'.$Align.'height:'.$ksinfo[$i]['height'].'px;'.$LineHeight2.'white-space: nowrap;word-break:break-all;'.$BgSrc2.$BgColor2.$Color2.$Font2.$Indent2.$Weight2.$FontStyle2.$Size2.$LineOver2.$LetterSpacing2.$border2.$shadow2.$ssOpacity2.''.$UnderLine.'';

if($wzdata['characterHoverMode']=='off'){
	$contwzbox='<a class="rel s2" style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent'][$i].'</a>';
	$wccls2='';
	}else{
	$contwzbox='<a class="rel '.$wzdata['characterHoverSpeed'].' s2" style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent'][$i].'</a>
      <div class="jspb rel s1" style="width:100%;height:100%;"><a class="rel '.$wzdata['characterHoverSpeed'].' '.$wzdata['css3ModeX1'].' '.$wzdata['css3ModeY1'].' '.$wzdata['css3Mode1'].'" '.$href.' style="'.$fanstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent1'][$i].'</a></div>';
	$wccls2='junefade';
	}
	$ksdiv='<li data-i="'.$ksinfo[$i]['attachID'].'" class="'.$config['dSmallRorate'].' '.$smallShowSpeed.' abs thumbsmall '.$ksactive.' '.$ksinfo[$i]['attachID'].' jnwz jz '.$wzdata['css3ModeX'].' '.$wzdata['css3ModeY'].' '.$wzdata['css3Mode'].' '.$wzdata['attachID'].' '.$wccls2.' '.$wzdata['borderControl'].' '.$wzdata['borderControl1'].' '.$wzdata['shadowControl'].' '.$wzdata['shadowControl1'].' '.$outlineWidth.' '.$outlineSpeed.'" data-t="text;text" data-w="normal" data-o="'.$wzdata['ssOpacity'].';'.$wzdata['ssOpacity1'].'" style="float:left;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;">'.$contwzbox.'</li>';
	
	}
if($kstype=='yes1'){//缩略自定义
	if($config['smallCustom1'][$i]){
		$diy='<div class="abs s1" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom1'][$i].'</div>
		      <div class="abs s2" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>';
			  }else{
		$diy='<div class="abs s3" style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>';
		   }
	$ksdiv='<li class="abs sch '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:'.$ksinfo[$i]['top'].'px;left:'.$ksinfo[$i]['left'].'px;overflow:hidden;">'.$diy.'</li>';

	}
$ksdivzh=$ksdivzh.$ksdiv;
}

$slhtml='<ul class="sltae ks-switchable-nav abs jfsb n'.$ls.'" style="'.$ksdis.'top:0px;left:0px;z-index:12;background:none;">'.$ksdivzh.'</ul>';
//结束


return''.$zujianzuhe.''.$jtdiv.'<div class="scroller rel" style="overflow:'.$config['sliderOverflow'].';width:'.$pos[0].'px;height:'.$pos[1].'px;z-index:10;">'.$xxzz.'</div>'.$slhtml.''.$zujianover.'';

}
/*****   嵌套轮播结束  *****/



/*****     动态海报    *****/
if($list['appType']=='jdhb'){
$ls=rand(10000,999999);
$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$sizecss='width:'.$pos[0].'px;height:'.$pos[1].'px;';

    if($config['linkMode']=='ptlink'){$href=$config['href']?'href="'.$config['href'].'"':'';}
	if($config['linkMode']=='wwlink'){$href=$config['shuntMode']=='no' ? 'href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status=1&charset=utf-8"' : 'href="http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($config['wangID']).'&site=cntaobao&s=2&groupid=0&charset=utf-8"';}
	if($config['linkMode']=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';}
	if($config['linkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}


//触点
switch ($config['dtMode'])							  
{
case 1: $whnum='10'; break; 
case 2: $whnum='8'; break;
case 3: $whnum='5'; break;
case 4: $whnum='2'; break;
}
$starwh=$whnum*2;$shubox='';$hengbox='';
$kuannum= ceil( $pos[0] / $starwh ) ; //宽
$xwz= ceil( $kuannum / 2 ) ;$x=0;
for($i=$starwh;$i<$pos[0];$i=$i+$starwh){$x=$x+1; $act=$xwz==$x?'ks-active':'';
	$shu='<i class="abs '.$act.'" style="width:'.$whnum.'px;height:100%;left:'.$i.'px;"></i>';
	$shubox=$shubox.$shu;
	}
$gaonum= ceil( $pos[1] / $starwh ) ; //高
$ywz= ceil( $gaonum / 2 ) ;$x=0;
for($i=$starwh;$i<$pos[1];$i=$i+$starwh){ $x=$x+1;$act=$ywz==$x?'ks-active':'';
	$heng='<i class="abs '.$act.'" style="width:100%;height:'.$whnum.'px;top:'.$i.'px;"></i>';
	$hengbox=$hengbox.$heng;
	}

$shudian='<a '.$href.' '.$hrefMode.' class="abs dhn'.$ls.' '.$catr.'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;top:0px;left:0px;z-index:12;">'.$shubox.'</a>';
$hengdian='<a '.$href.' '.$hrefMode.' class="abs dh1n'.$ls.' '.$catr.'" style="width:'.$pos[0].'px;height:0;top:0px;left:0px;z-index:12;">'.$hengbox.'</a>';
	

//内容
$contall='';
foreach($config['contentType'] as $i=>$contentType){
	$dtzy=$config['childConfig'][$i]['dtDirection']=='1'?'-':'';
	$dtzy2=$config['childConfig'][$i]['dtDirection']=='1'?'':'-';
	if($contentType=='imgContent'){
		$neirong='<div class="abs" style="overflow:hidden;display:block;'.$sizecss.'background:url('.$config['sliderSrc'][$i].') '.$config['sliderImgBgp'][$i].' no-repeat;"></div>';
		}else{
		$neirong=$config['customContent'][$i];
			}
$cont='<div class="dhc dhc'.$ls.'_'.$i.'" data-m="'.$config['childConfig'][$i]['dtRange'].';'.$config['childConfig'][$i]['dtDirection'].';'.$config['childConfig'][$i]['dtType'].'" style="position: absolute;left:'.$dtzy2.'76.8px;top:'.$dtzy2.'36px;transition:'.$config['childConfig'][$i]['dtDelay'].';">
			<div class="abs" style="width:40px;height:40px;top:'.$dtzy.'36px;left:'.$dtzy.'76.8px;">
				'.$neirong.'
			</div>
		</div>';
	$contall=$contall.$cont;
	}
$cobtbox=' <div class="scroller rel" style="overflow:hidden;'.$sizecss.'z-index:10;">'.$contall.'</div>';
//组件
switch ($config['childConfig'][$i]['dtRange'])							  
{
case 1: $steps='0.01'; break; 
case 2: $steps='0.02'; break;
case 3: $steps='0.05'; break;
case 4: $steps='0.1'; break;
case 5: $steps='0.2'; break;
}
$widzh='';$widbox='';$qianbox='';$houbox='';
foreach($config['childConfig'] as $i=>$item){
	$qian='';$hou='';$pwidget1='';$pwidget2='';
	$dtzy=$item['dtDirection']=='1'?'-':'';
	if($i==0){
		$wccs='top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$Opacity_css.'';
		$wcclass='jdhb xbb J_TWidget abs '.$config['appID'].'';
		$wcd1='data-mr="'.$config['dtMode'].'" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.'';
		}else{
		$wccs='';
		$wcclass='J_TWidget';
		$wcd1='';
			}
	$dtType=$item['dtType']?$item['dtType']:1;
if($dtType=='1'){// 1全向 
	$pwidget1="{'contentCls':'dhc".$ls."_".$i."','navCls':'dhn".$ls."','effect':'scrollx','easing':'easeBoth','duration':0.001,'delay':0.0,'autoplay':false,'steps':".$dtzy.$steps.",'switchTo':".$xwz."}";
	$pwidget2="{'contentCls':'dhc".$ls."_".$i."','navCls':'dh1n".$ls."','effect':'scrolly','easing':'easeBoth','duration':0.001,'delay':0.0,'autoplay':false,'steps':".$dtzy.$steps.",'switchTo':".$ywz."}";
	$qian='<div class="'.$wcclass.'" '.$wcd1.' data-widget-type="Carousel" data-widget-config="'.$pwidget1.'" style="display:block;'.$sizecss.$wccs.'"><div class="J_TWidget" data-widget-type="Carousel" data-widget-config="'.$pwidget2.'" style="display:block;'.$sizecss.'">';
	$hou='</div></div>';
	}
if($dtType=='2'){// 2横向
	$pwidget1="{'contentCls':'dhc".$ls."_".$i."','navCls':'dhn".$ls."','effect':'scrollx','easing':'easeBoth','duration':0.001,'delay':0.0,'autoplay':false,'steps':".$dtzy.$steps.",'switchTo':".$xwz."}";
	$qian='<div class="'.$wcclass.'" '.$wcd1.' data-widget-type="Carousel" data-widget-config="'.$pwidget1.'" style="display:block;'.$sizecss.$wccs.'">';
	$hou='</div>';
	}
if($dtType=='3'){// 3纵向
	$pwidget1="{'contentCls':'dhc".$ls."_".$i."','navCls':'dh1n".$ls."','effect':'scrolly','easing':'easeBoth','duration':0.001,'delay':0.0,'autoplay':false,'steps':".$dtzy.$steps.",'switchTo':".$ywz."}";
	$qian='<div class="'.$wcclass.'" '.$wcd1.' data-widget-type="Carousel" data-widget-config="'.$pwidget1.'" style="display:block;'.$sizecss.$wccs.'">';
	$hou='</div>';
	}
	$qianbox=$qianbox.$qian;
	$houbox=$houbox.$hou;	
	}
						
//组装
return $qianbox.$cobtbox.$shudian.$hengdian.$houbox;


}
/*****   动态海报xx结束  *****/



/*****     正反面    *****/
if($list['appType']=='job'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';

$cssTX=$config['animType'].$config['animRange'];
switch ($cssTX)
{
case 'june-x-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; // 左右 弱
case 'june-x-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //左右 中
case 'june-x-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //左右 强
case 'june-y-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //上下
case 'june-y-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-y-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //旋转
case 'june-r-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //缩放
case 'june-s-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //果冻
case 'june-n-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}


if($config['animType']){
	$wcdiv='<div class="job abs '.$config['animType'].$config['animRange'].' jz" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;transition: '.$config['animSpeed'].' '.$css3.'">';
	$wcdivs='</div>';
	$wczy='1';
	$wcattr='';
	}else{
	$wcdiv='';
	$wcdivs='';
	$wczy='0';
	$wcattr=$Opacity_attr;
	}
$divppy=$wczy=='1'?'width:'.$pos[0].'px;height:'.$pos[1].'px;':''.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;';
$divclass1=$wczy=='1'?'shake':'job';


if($config['contentType']=='imgContent'){
	if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
	if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
	if($config['oppoLinkMode']=='ptlink'){$href='href="'.$config['href'].'"';}
	if($config['oppoLinkMode']=='wwlink'){$fliu=$config['shuntMode']=='no'?'1':'2'; $href=$config['shuntMode']=='no' ? 'href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status=1&charset=utf-8"' : 'href="http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($config['wangID']).'&site=cntaobao&s=2&groupid=0&charset=utf-8"';}
	if($config['oppoLinkMode']=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';}
	if($config['oppoLinkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}
	
	
if($config['oppoEffect']=='none'){$oppoSpeed='';$divclass3='';}else{$oppoSpeed=$config['oppoSpeed'];$divclass3=$config['oppoEffect'];}
if($config['oppoEffect']=='june-box-fadein'){$divclass2='jspb '.$config['oppoSpeed'];}else{ $divclass2=$config['oppoEffect']=='none'?'none':''.$config['oppoEffect'].' '.$config['oppoSpeed'].'';}
	
	$pic1='<a '.$href.' '.$hrefMode.' class="'.$divclass1.'  abs imghover '.$divclass2.'  '.$config['appID'].' '.$catr.'" data-linkmode="'.$config['oppoLinkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.' '.$wcattr.' style="text-decoration:none;overflow:hidden;'.$sbj.''.$divppy.'z-index:10;" >';
	$pic1s='</a>';
	if($config['oppoSrc']&&$config['oppoSrc']!==$config['pSrc']){$sbj2='background:url('.$config['oppoSrc'].') '.$config['imgBgp'].' no-repeat;';$shc2='src="http://a.tbcdn.cn/s.gif"';}else{$sbj2='display:none;';$shc2='';}
	if($config['oppoEffect']=='june-box-fadein'){ //淡入
		$pic2='<img class="'.$config['oppoSpeed'].' '.$config['oppoEffect'].'" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj2.'" src="http://a.tbcdn.cn/s.gif" />
		<div class="jspb" style="display:none;">
		<span class="'.$config['oppoSpeed'].' '.$config['oppoEffect'].'" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj2.'">&nbsp;</span></div>';
		}else{  //无动画
		$pic2='<img class="'.$oppoSpeed.' " style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj2.'" '.$shc2.'/>';		
			}
	$allhtml=$wcdiv.$pic1.$pic2.$pic1s.$wcdivs;
}

if($config['contentType']=='customContent'){
	$divppy=$wczy=='1'?'width:'.$pos[0].'px;height:'.$pos[1].'px;':'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;';
	$zhtml='<div class="'.$divclass1.'  abs junefade '.$config['oppoSpeed'].' '.$config['appID'].' " data-linkmode="'.$config['oppoLinkMode'].'" data-appid="'.$config['appID'].'" style="text-decoration:none;overflow:hidden;'.$divppy.'z-index:10;"><div class="abs juneo '.$config['oppoSpeed'].'" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;top:0;left:0;">'.$config['customContent'].'</div><div class="abs junei '.$config['oppoSpeed'].'" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;top:0;left:0;">'.$config['customContentHover'].'</div><a style="width:100%;height:100%;display:block;"></a></div>';
	$allhtml=$wcdiv.$zhtml.$wcdivs;
}
 return $allhtml;


}
/*****   正反面结束  *****/


/*****     切片    *****/
if($list['appType']=='jbob'){

$config=$list['config'];
$pos=explode('|',$list['pos']);


if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
if($config['oppoSrc']&&$config['oppoSrc']!==$config['pSrc']){$sbj2='background:url('.$config['oppoSrc'].') '.$config['imgBgp'].' no-repeat;';$shc2='src="http://a.tbcdn.cn/s.gif"';}else{$sbj2='display:none;';$shc2='';}
$wcdiv='<div class="abs jbob '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="overflow:hidden;'.$sbj.$scl.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$Opacity_css.'">';
$wcdivs='</div>';
$picall='';
foreach($config['childConfig'] as $i=>$item){
	if($item['linkMode']=='ptlink'){$href=$item['href']?'href="'.$item['href'].'"':'';}
	if($item['linkMode']=='wwlink'){ $fliu=$item['shuntMode']=='no'?'1':'2'; $href='href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($item['wangID']).'&siteid=cntaobao&status='.$fliu.'&charset=utf-8"';}
	if($item['linkMode']=='mdlink'){$href='href="#'.$item['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$item['hrefMode'].'"';}
	if($item['linkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$item['href'].'"';$hrefMode='';}else{$catr='';}
	
	if($config['oppoSrc']&&$config['oppoSrc']!==$config['pSrc']){$css2='left: -'.$list['childData'][$i]['left'].'px;top:-'.$list['childData'][$i]['top'].'px;';}else{$css2='';}
	
	if($config['oppoEffect']=='june-box-fadein'){ //正常
		$parea='<a '.$href.' class="jbocb abs imghover  '.$config['oppoSpeed'].' '.$list['childData'][$i]['attachID'].' '.$catr.'" data-linkmode="'.$item['linkMode'].'" data-appid="'.$list['childData'][$i]['attachID'].'" style="overflow:hidden;width:'.$list['childData'][$i]['width'].'px;height:'.$list['childData'][$i]['height'].'px;top:'.$list['childData'][$i]['top'].'px;left:'.$list['childData'][$i]['left'].'px;" '.$hrefMode.'>
    <div class="jspb" style="width:100%;height:100%;">
	  <span class="abs '.$config['oppoSpeed'].' '.$config['oppoEffect'].'" style="display:block;width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj2.$css2.'" '.$shc2.'>&nbsp;</span>
	</div>
  </a>';
		}else{  //无动画
		$parea='<a '.$href.' class="jbocb abs imghover none  '.$list['childData'][$i]['attachID'].' '.$catr.'" data-linkmode="'.$item['linkMode'].'" data-appid="'.$list['childData'][$i]['attachID'].'" style="overflow:hidden;width:'.$list['childData'][$i]['width'].'px;height:'.$list['childData'][$i]['height'].'px;top:'.$list['childData'][$i]['top'].'px;left:'.$list['childData'][$i]['left'].'px;" '.$hrefMode.'>
    <img class="abs  " style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj2.$css2.'" '.$shc2.' /></a>';	
			}
	$picall=$picall.$parea;
}


return $wcdiv.$picall.$wcdivs;
}
/*****   切片结束  *****/


/*****     店铺搜索    *****/
if($list['appType']=='jsb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';

if($config['childConfig'][0]['searchSrc']){$sbj='background:url('.$config['childConfig'][0]['searchSrc'].') '.$config['childConfig'][0]['imgBgp'].' no-repeat;';}else{$sbj='background:none;';}
if($config['childConfig'][0]['characterBgColor']){$scl='background-color:'.$config['childConfig'][0]['characterBgColor'].';';}else{$scl='';}
if($config['childConfig'][1]['searchSrc']){$sbj1='background:url('.$config['childConfig'][1]['searchSrc'].') '.$config['childConfig'][1]['imgBgp'].' no-repeat;';}else{$sbj1='background:none;';}
if($config['childConfig'][1]['bgColor']){$scl1='background-color:'.$config['childConfig'][1]['bgColor'].';';}else{$scl1='';}
if($config['childConfig'][2]['searchSrc']){$sbj2='background:url('.$config['childConfig'][2]['searchSrc'].') '.$config['childConfig'][2]['imgBgp'].' no-repeat;';}else{$sbj2='background:none;';}
if($config['childConfig'][2]['bgColor']){$scl2='background-color:'.$config['childConfig'][2]['bgColor'].';';}else{$scl2='';}
if($config['childConfig'][3]['searchSrc']){$sbj3='background:url('.$config['childConfig'][3]['searchSrc'].') '.$config['childConfig'][2]['imgBgp'].' no-repeat;';}else{$sbj3='background:none;';}
if($config['childConfig'][3]['bgColor']){$scl3='background-color:'.$config['childConfig'][3]['bgColor'].';';}else{$scl3='';}


if($config['childConfig'][0]['characterFont']){$Font='font-family:'.$config['childConfig'][0]['characterFont'].';';}else{$Font='';}
if($config['childConfig'][0]['characterSize']){$Size='font-size:'.$config['childConfig'][0]['characterSize'].'px;';}else{$Size='';}
if($config['childConfig'][0]['characterWeight']){$Weight='font-weight:'.$config['childConfig'][0]['characterWeight'].';';}else{$Weight='';}
if($config['childConfig'][0]['characterStyle']){$FontStyle='font-style:'.$config['childConfig'][0]['characterStyle'].';';}else{$FontStyle='';}
if($config['childConfig'][0]['characterColor']){$Color='color:'.$config['childConfig'][0]['characterColor'].';';}else{$Color='';}
if($config['childConfig'][0]['characterIndent']){$Indent='text-indent:'.$config['childConfig'][0]['characterIndent'].'px;';}else{$Indent='';}
if($config['childConfig'][0]['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$config['childConfig'][0]['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($config['childConfig'][0]['dbdColor']){$outlineColor='outline-color:'.$config['childConfig'][0]['dbdColor'].'px;';}else{$outlineColor='';}

if($config['childConfig'][3]['characterColor']){$Color2='color:'.$config['childConfig'][0]['characterColor'].';';}else{$Color2='';}
if($config['childConfig'][3]['characterFont']){$Font2='font-family:'.$config['childConfig'][0]['characterFont'].';';}else{$Font2='';}
if($config['childConfig'][3]['characterSize']){$Size2='font-size:'.$config['childConfig'][0]['characterSize'].'px;';}else{$Size2='';}

if($config['href']){
 $href1=explode("//",$config['href']);
$href2=explode("/",$href1[1]);
$href=$href2[0];
$surl='//'.$href.'/search.htm';
	}else{$surl='';}


if($config['priceSwitch']=='yes'){
	$pricediv='<li class="price">
      <div class="abs textprice" style="top:'.$list['childData'][2]['top'].'px;left:'.$list['childData'][2]['left'].'px;width:'.$list['childData'][2]['width'].'px;height:'.$list['childData'][2]['height'].'px;'.$sbj2.$scl2.'"></div>
      <input class="abs lowprice" type="text" name="lowPrice" size="4" value="" style="top:'.$list['childData'][3]['top'].'px;left:'.$list['childData'][3]['left'].'px;width:'.$list['childData'][3]['width'].'px;height:'.$list['childData'][3]['height'].'px;line-height:'.$list['childData'][3]['height'].'px;'.$sbj3.$scl3.'border:none;'.$Color2.$Font2.$Size2.'">
      <input class="abs highprice" type="text" name="highPrice" size="4" value="" style="top:'.$list['childData'][4]['top'].'px;left:'.$list['childData'][4]['left'].'px;width:'.$list['childData'][4]['width'].'px;height:'.$list['childData'][4]['height'].'px;line-height:'.$list['childData'][4]['height'].'px;'.$sbj3.$scl3.'border:none;'.$Color2.$Font2.$Size2.'"></li>';
	}else{$pricediv='';}


return'

  <form class="jsb searchform abs '.$config['appID'].'" name="SearchForm" action="'.$surl.'" method="get" target="'.$config['hrefMode'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;'.$sbj.$scl.'">
  <ul>
    <li>
      <input name="keyword" type="text" class="gjz abs" value="'.$config['childConfig'][0]['searchText'].'" style="outline:none;top:'.$list['childData'][0]['top'].'px;left:'.$list['childData'][0]['left'].'px;width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;line-height:'.$list['childData'][0]['height'].'px;padding:0;'.$sbj.$scl.''.$outlineColor.'border:none;'.$Color.$Font.$Weight.$FontStyle.$Size.$Indent.$LetterSpacing.'" /></li>
   '.$pricediv.'
    <li>
      <input type="submit" class="ss abs" value="" style="top:'.$list['childData'][1]['top'].'px;left:'.$list['childData'][1]['left'].'px;width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;line-height:'.$list['childData'][1]['height'].'px;'.$sbj1.$scl1.'border:none;cursor:pointer;outline:none;" /></li>
  </ul>
  <input type="hidden" name="orderType" class="otype" value="'.$config['orderType'].'"></form>


';
}
/*****   店铺搜索结束  *****/


/*****   热区转单图   *****/
if($list['appType']=='jsib'){ 
	$config=$list['config'];
	$pos=explode('|',$list['pos']);

$cssTX=$config['animType'].$config['animRange'];
switch ($cssTX)
{
case 'june-x-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; // 左右 弱
case 'june-x-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //左右 中
case 'june-x-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //左右 强
case 'june-y-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //上下
case 'june-y-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-y-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //旋转
case 'june-r-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //缩放
case 'june-s-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //果冻
case 'june-n-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}
if($config['animType']){
	$wcdiv='<div class="jsib abs '.$config['animType'].$config['animRange'].' jz" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;transition: '.$config['animSpeed'].' '.$css3.'">';
	$wcdivs='</div>';
	$wczy='shake';
	$wccssps='';
	$wcattr='';
	}else{
	$wcdiv='';
	$wcdivs='';
	$wczy='jsib';
	$wccssps='top:'.$pos[2].'px;left:'.$pos[3].'px;'.$Opacity_css.'';
	$wcattr=$Opacity_attr;
	}
	
switch ($config['imgMode'])
	{
	case 'label1':
	$sbj=$config['pSrc']?'background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;':'';
	$scl=$config['bgColor']?'background-color:'.$config['bgColor'].';':'';
	$img='';
	break;  
	case 'full':
	$sbj='';
	$scl='';
	$img='<img class="abs sf" src="'.$config['pSrc'].'" width="100%" height="100%">';
	break;
	case 'scaleX':
	$sbj='';
	$scl='';
	$img='<img class="abs sx" src="'.$config['pSrc'].'" height="100%">';
	break;
	case 'scaleY':
	$sbj='';
	$scl='';
	$img='<img class="abs sy" src="'.$config['pSrc'].'" width="100%">';
	break;
	default:
  	$sbj=$config['pSrc']?'background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;':'';
	$scl=$config['bgColor']?'background-color:'.$config['bgColor'].';':'';
	$img='';
	}
	
	if($config['mongoliaControl']=='mongoliaShow'){$mongoliaMode=$config['mongoliaMode'];}else{$mongoliaMode='';}
	if($config['borderControl']=='hborder'){$bord='border:'.$config['borderWidth'].'px solid '.$config['borderColor'].';';$mtl='top:-'.$config['borderWidth'].'px;left:-'.$config['borderWidth'].'px;';}else{$bord='';$mtl='top:0px;left:0px;';}
	//$wdwidth=$config['borderControl']=='hborder'?$pos['0']-$config['borderWidth1']*2:$pos['0'];
	//$wdheigh=$config['borderControl']=='hborder'?$pos['1']-$config['borderWidth1']*2:$pos['1'];
	$wdwidth=$pos['0'];
	$wdheigh=$pos['1'];
	if($config['borderControl1']=='hborder1'){$wbord='border:'.$config['borderWidth1'].'px solid '.$config['borderColor1'].';';$borderradius='border-radius:'.$config['borderRadius1'].'px;';}else{$wbord='border:none;';$borderradius='';}
	
	if($config['shadowControl']=='shadowShow'){ 
	     $shadow='box-shadow: '.$config['shadowLeft'].'px '.$config['shadowTop'].'px '.$config['shadowBlur'].'px '.$config['shadowSize'].'px '.$config['shadowColor'].';';
		 }else{$shadow='';}
	if($config['shadowControl1']=='shadowShow1'){ 
	     $shadow1='box-shadow: '.$config['shadowLeft1'].'px '.$config['shadowTop1'].'px '.$config['shadowBlur1'].'px '.$config['shadowSize1'].'px '.$config['shadowColor1'].';';
		 }else{$shadow1='';}
	
	
	if($config['outlineControl']=='outlineShow'){$outline='outline-color:'.$config['outlineColor'].';';$outlineSpeed=$config['outlineSpeed'];$outlineWidth=$config['outlineWidth'];$outlineShadowColor='color:'.$config['outlineShadowColor'].';';$outlclass='jzi';$zindex='';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';$zindex='z-index:10;';}
    
	if($config['linkMode']=='ptlink'){$href=$config['href']?'href="'.$config['href'].'"':'';}
	if($config['linkMode']=='wwlink'){ $fliu=$config['shuntMode']=='no'?'1':'2';$href=$config['shuntMode']=='no' ? 'href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status=1&charset=utf-8"' : 'href="http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($config['wangID']).'&site=cntaobao&s=2&groupid=0&charset=utf-8"';}
	if($config['linkMode']=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';}
	if($config['linkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}
	if($i>0){echo'${!|}';}
	if($config['tipText']==''){$tipText='';}else{$tipText='title="'.$config['tipText'].'"';}
	
	
if($config['borderControl']=='hborder'||$config['shadowControl']=='shadowShow'||$config['mongoliaControl']=='mongoliaShow'){
	
return''.$wcdiv.'<div class="'.$wczy.' jspb abs '.$config['appID'].' '.$mongoliaMode.' '.$config['borderControl'].' '.$config['shadowControl'].' '.$outlineWidth.' '.$outlclass.' '.$outlineSpeed.' '.$config['borderControl1'].' '.$config['shadowControl1'].'" style="'.$sbj.''.$scl.''.$outline.''.$outlineShadowColor.'display:block;width:'.$wdwidth.'px;height:'.$wdheigh.'px;'.$wccssps.''.$wbord.''.$borderradius.''.$shadow1.$zindex.'" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$wcattr.' >
  '.$img.'
  <a class="jsibchild abs june-box-fadein '.$catr.' '.$config['outlineSpeed'].'" data-shadow="" '.$href.' '.$hrefMode.' style="display:block;'.$mtl.'width:'.$pos['0'].'px;height:'.$pos['1'].'px;'.$bord.''.$borderradius.''.$shadow.'" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.'></a>
  <a class="jsibmc abs '.$mongoliaMode.' '.$catr.'" '.$href.' '.$hrefMode.' style="display:block;width:'.$pos['0'].'px;height:'.$pos['1'].'px;top:0;left:0;" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.'></a>
</div>'.$wcdivs.'';
}else{
 return''.$wcdiv.'<a class="'.$wczy.' abs '.$config['appID'].' '.$mongoliaMode.' '.$outlineWidth.' '.$outlclass.' '.$outlineSpeed.' '.$catr.' '.$config['borderControl1'].' '.$config['shadowControl1'].'" '.$href.' '.$hrefMode.' '.$wcattr.' style="'.$sbj.''.$scl.''.$outline.''.$outlineShadowColor.'display:block;width:'.$wdwidth.'px;height:'.$wdheigh.'px;'.$wccssps.''.$wbord.''.$borderradius.$zindex.$shadow1.'" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$tipText.'>'.$img.'</a>'.$wcdivs.'';
	}
	
    }
/*****   热区转单图结束  *****/





/*****    文字组件    *****/
if($list['appType']=='jcb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$href=$config['href']?'href="'.$config['href'].'"':'';
$xwidth = $pos[0];
$xheight = $pos[1]; 
	
$cssTX=$config['animType'].$config['animRange'];
switch ($cssTX)
{
case 'june-x-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; // 左右 弱
case 'june-x-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //左右 中
case 'june-x-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //左右 强
case 'june-y-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //上下
case 'june-y-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-y-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //旋转
case 'june-r-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-r-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break; //缩放
case 'june-s-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-s-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-s':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;  //果冻
case 'june-n-shake-m':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
case 'june-n-shake-l':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}

if($config['tipText']==''){$tipText='';}else{$tipText='title="'.$config['tipText'].'"';}
if($config['characterMode']=='text'){$datac='data-c="'.$config['characterLineMulti'].'"';}else{$datac='data-h="'.$config['characterContent'].';'.$config['characterItemContent'].'"';}
if($config['characterModeHover']=='text'){$datac2='data-ch="'.$config['characterLineMultiHover'].'"';}else{$datac2='data-hh="'.$config['characterContentHover'].';'.$config['characterItemContentHover'].'"';}
if($config['outlineControl']=='outlineShow'){$outline='outline-color:'.$config['outlineColor'].';';$outlineSpeed=$config['outlineSpeed'];$outlineWidth=$config['outlineWidth'];$outlineShadowColor='color:'.$config['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';}
//正面
if($config['characterFont']){$Font='font-family:'.$config['characterFont'].';';}else{$Font='';}
if($config['characterSize']){$Size='font-size:'.$config['characterSize'].'px;';}else{$Size='';}
if($config['characterColor']){$Color='color:'.$config['characterColor'].';';}else{$Color='';}
if($config['characterLineHeight']){$LineHeight='line-height:'.$config['characterLineHeight'].'px;';}else{$LineHeight='';}
if($config['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$config['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($config['characterIndent']){
	if($config['characterAlign']=='left'){$Indent='padding-left:'.$config['characterIndent'].'px;';}
	if($config['characterAlign']=='right'){$Indent='padding-right:'.$config['characterIndent'].'px;';}
	if($config['characterAlign']=='center'){$Indent='padding:0 '.$config['characterIndent'].'px;';}
	}else{$Indent='';}
if($config['characterWeight']){$Weight='font-weight:'.$config['characterWeight'].';';}else{$Weight='';}
if($config['characterStyle']){$FontStyle='font-style:'.$config['characterStyle'].';';}else{$FontStyle='';}
if($config['characterLineOver']||$config['characterLineThrough']||$config['characterLineUnder']){$LineOver='text-decoration:'.$config['characterLineOver'].' '.$config['characterLineThrough'].' '.$config['characterLineUnder'].';';}else{$LineOver='';}
if($config['characterAlign']){$Align='text-align:'.$config['characterAlign'].';';}else{$Align='';}
if($config['borderRadius1']&&$config['borderRadius1']!=='0'){$borderRadius='border-radius:'.$config['borderRadius1'].'px;';}else{$borderRadius='';}
if($config['borderControl1']){
	$borderWidth=$config['borderWidth1']?$config['borderWidth1']:'0';
	$border='border:'.$borderWidth.'px solid '.$config['borderColor1'].';'.$borderRadius.'';}else{$border='';}
if($config['shadowControl1']=='shadowShow1'){ 
  $slz1=$config['shadowLeft1']?$config['shadowLeft1']:'0';
  $slz2=$config['shadowTop1']?$config['shadowTop1']:'0';
  $slz3=$config['shadowBlur1']?$config['shadowBlur1']:'0';
  $slz4=$config['shadowSize1']?$config['shadowSize1']:'0';
  $shadow='box-shadow:'.$slz1.'px '.$slz2.'px '.$slz3.'px '.$slz4.'px '.$config['shadowColor1'].' '.$config['shadowStyle1'].';';
 }else{$shadow='';}
if($config['characterBgColor']){$BgColor='background-color:'.$config['characterBgColor'].';';}else{$BgColor='';}
if($config['characterBgSrc']){$BgSrc='background:url('.$config['characterBgSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$BgSrc='';}
if($config['characterWidthMode']=='auto'){$display='display:block;';$wdth='';}else{$display='display:block;';$wdth='width:'.$pos['0'].'px;';}
$wdwidth=$config['borderControl1']=='hborder1'?$xwidth-$config['borderWidth1']*2:$xwidth;
$wdheigh=$config['borderControl1']=='hborder1'?$xheight-$config['borderWidth1']*2:$xheight;
$zhengstyle='overflow:hidden;width:auto;white-space:normal;'.$display.$Align.'height:'.$wdheigh.'px;'.$LineHeight.'word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$Indent.$LineOver.$LetterSpacing.$border.$shadow.'';
//反面
if($config['characterFontHover']){$Font2='font-family:'.$config['characterFontHover'].';';}else{$Font2='';}
if($config['characterSizeHover']){$Size2='font-size:'.$config['characterSizeHover'].'px;';}else{$Size2='';}
if($config['characterColorHover']){$Color2='color:'.$config['characterColorHover'].';';}else{$Color2='';}
if($config['characterLetterSpacingHover']){$LetterSpacing2='letter-spacing:'.$config['characterLetterSpacingHover'].'px;';}else{$LetterSpacing2='';}
if($config['characterIndentHover']){
	if($config['characterAlignHover']=='left'){$Indent2='padding-left:'.$config['characterIndentHover'].'px;';}
	if($config['characterAlignHover']=='right'){$Indent2='padding-right:'.$config['characterIndentHover'].'px;';}
	if($config['characterAlignHover']=='center'){$Indent2='padding:0 '.$config['characterIndentHover'].'px;';}
	}else{$Indent2='';}
if($config['characterWeightHover']){$Weight2='font-weight:'.$config['characterWeightHover'].';';}else{$Weight2='';}
if($config['characterStyleHover']){$FontStyle2='font-style:'.$config['characterStyleHover'].';';}else{$FontStyle2='';}
if($config['characterLineOverHover']||$config['characterLineThroughHover']||$config['characterLineUnderHover']){$LineOver2='text-decoration:'.$config['characterLineOverHover'].' '.$config['characterLineThroughHover'].' '.$config['characterLineUnderHover'].';';}else{$LineOver2='';}
if($config['characterAlignHover']){$Align2='text-align:'.$config['characterAlignHover'].';';}else{$Align2='';}
if($config['characterUnderLine']=='on'&&$config['borderControl']==''){
	$UnderLine='border-bottom: '.$config['characterUnderLineWeight'].'px '.$config['characterUnderLineStyle'].' '.$config['characterUnderLineColor'].';';$UnBH=$config['characterUnderLineWeight'];}else{$UnderLine='';$UnBH=0;}
if($config['characterLineHeightHover']){$lh3=$config['characterLineHeightHover'];$LineHeight2='line-height:'.$lh3.'px;';}else{$LineHeight2=$LineHeight;}
if($config['borderControl']){
	$borderWidth2=$config['borderWidth']?$config['borderWidth']:'0';
	$border2='border:'.$config['borderWidth'].'px solid '.$config['borderColor'].';'.$borderRadius.';';}else{$border2='';}
if($config['shadowControl']=='shadowShow'){ 
  $slf1=$config['shadowLeft']?$config['shadowLeft']:'0';
  $slf2=$config['shadowTop']?$config['shadowTop']:'0';
  $slf3=$config['shadowBlur']?$config['shadowBlur']:'0';
  $slf4=$config['shadowSize']?$config['shadowSize']:'0';
  $shadow2='box-shadow:'.$slf1.'px '.$slf2.'px '.$slf3.'px '.$slf4.'px '.$config['shadowColor'].' '.$config['shadowStyle'].';';
 }else{$shadow2='';}
if($config['characterBgColorHover']){$BgColor2='background-color:'.$config['characterBgColorHover'].';';}else{$BgColor2='';}
if($config['characterBgSrcHover']){$BgSrc2='background:url('.$config['characterBgSrcHover'].') '.$config['imgBgpHover'].' no-repeat;';}else{$BgSrc2='';}
$wdwidth2=$config['borderControl']=='hborder'?$xwidth-$config['borderWidth']*2:$xwidth;
$wdheigh2=$config['borderControl']=='hborder'?$xheight-$config['borderWidth']*2:$xheight-$UnBH;
$fanstyle='overflow:hidden;display:block;width:auto;white-space:normal;top:-100%;left:0;'.$Align.'height:'.$wdheigh2.'px;'.$LineHeight2.'word-break:break-all;'.$BgSrc2.$BgColor2.$Color2.$Font2.$Weight2.$Indent2.$FontStyle2.$Size2.$LineOver2.$LetterSpacing2.$border2.$shadow2.''.$UnderLine.'';


if($config['animType']){
	$wcdiv='<div class="jcb abs '.$config['animType'].$config['animRange'].' jz" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.($pos[0]+2).'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;transition: '.$config['animSpeed'].' '.$css3.'">';
	$wcdivs='</div>';
	$wczy='shake';
	$wccssps='';
	$wcattr='';
	}else{
	$wcdiv='';
	$wcdivs='';
	$wczy='jcb';
	$wccssps='top:'.$pos[2].'px;left:'.$pos[3].'px;'.$Opacity_css.'';
	$wcattr=$Opacity_attr;
	}


preg_match("&id=(\\d+)&",$config['characterItemContent'],$itemIds);/***获取商品id**/
$itemId=explode('=',$itemIds[0]);
if($config['characterMode']=='text'){
	$characterContent=$config['characterContent'];
}else if($config['characterMode']=='price'){
	$characterContent="%7b$".$itemId[1].".price.".$config['characterFixed']."f%7d";
}else if($config['characterMode']=='_price'){
	$characterContent="%7b$".$itemId[1].".discountPrice.".$config['characterFixed']."f%7d";
}else if($config['characterMode']=='sale'){
	$characterContent="%7b$".$itemId[1].".soldCount%7d";
}else if($config['characterMode']=='title'){
	$characterContent="%7b$".$itemId[1].".title%7d";
}

preg_match("&id=(\\d+)&",$config['characterItemContentHover'],$itemIdsHover);/***获取商品id**/
$itemIdHover=explode('=',$itemIdsHover[0]);
if($config['characterModeHover']=='text'){
	$characterContentHover=$config['characterContentHover'];
}else if($config['characterModeHover']=='price'){
	$characterContentHover="%7b$".$itemIdHover[1].".price.".$config['characterFixedHover']."f%7d";
}else if($config['characterModeHover']=='_price'){
	$characterContentHover="%7b$".$itemIdHover[1].".discountPrice.".$config['characterFixedHover']."f%7d";
}else if($config['characterModeHover']=='sale'){
	$characterContentHover="%7b$".$itemIdHover[1].".soldCount%7d";
}else if($config['characterModeHover']=='title'){
	$characterContentHover="%7b$".$itemIdHover[1].".title%7d";
}

if($config['characterHoverMode']=='off'){
	$contwzbox='<a class="rel" '.$href.' style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$characterContent.'</a>';
	$wccls2='';
}else{
	$contwzbox='<a class="rel  '.$config['characterHoverSpeed'].' juneo" '.$href.' style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$characterContent.'</a><a class="rel  junei" '.$href.' target="'.$config['hrefMode'].'" style="'.$fanstyle.'">'.$characterContentHover.'</a>';
	$wccls2='junefade';
}

$box_z='<div data-appid="'.$config['appID'].'" class="'.$wczy.' abs '.$config['appID'].' '.$wccls2.' jnwz jz '.$config['borderControl'].' '.$config['borderControl1'].' '.$config['shadowControl'].' '.$config['shadowControl1'].' '.$outlineWidth.' '.$outlineSpeed.'" data-t="'.$config['characterMode'].';'.$config['characterModeHover'].'" '.$datac.' '.$datac2.'  data-w="'.$config['characterWidthMode'].'" '.$tipText.' '.$wcattr.' data-o="1;1" style="width:'.($pos[0]+2).'px;height:'.$pos[1].'px;'.$wccssps.''.$outline.''.$outlineShadowColor.'">'.$contwzbox.'</div>'; 
return''.$wcdiv.$box_z.$wcdivs.'';	
}
/*****   文字组件结束  *****/    


/*****     滚动文字    *****/
if($list['appType']=='jtsb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';

if($config['characterFont']){$Font='font-family:'.$config['characterFont'].';';}else{$Font='';}
if($config['characterSize']){$Size='font-size:'.$config['characterSize'].'px;';}else{$Size='';}
if($config['characterColor']){$Color='color:'.$config['characterColor'].';';}else{$Color='';}
if($config['characterLineHeight']){$LineHeight='line-height:'.$config['characterLineHeight'].'px;';}else{$LineHeight='';}
if($config['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$config['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($config['characterWeight']){$Weight='font-weight:'.$config['characterWeight'].';';}else{$Weight='';}
if($config['characterStyle']){$FontStyle='font-style:'.$config['characterStyle'].';';}else{$FontStyle='';}
if($config['characterLineOver']||$config['characterLineThrough']||$config['characterLineUnder']){$LineOver='text-decoration:'.$config['characterLineOver'].' '.$config['characterLineThrough'].' '.$config['characterLineUnder'].';';}else{$LineOver='';}


$w1=$list['curExData']['sfwidth'];$w2=$pos[0]+$w1;
$h1=$list['curExData']['sfheight'];$h2=$h1*2;
if($config['characterMode']=='text'){$neirong=$config['href'] ? '<a style="'.$Color.'" href="'.$config['href'].'" target="'.$config['hrefMode'].'">'.$config['characterContent'].'</a>' : $config['characterContent'];}
if($config['characterMode']=='img'){$neirong=$config['href'] ? '<a href="'.$config['href'].'" target="'.$config['hrefMode'].'"><img src="'.$config['characterContent'].'" /></a>' : '<img src="'.$config['characterContent'].'" />';}
if($config['characterMode']=='custom'){$neirong=$config['customContent'];}


if($config['characterDirection']=='left'){
	if($config['characterScrollMode']=='scroll'){
	  if($config['characterDirectionPosition']=='1'){
		  $cont='<div class="rel scrollfm" data-dire="'.$config['characterDirectionPosition'].'" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;right:'.$w1.'px;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>
    <div class="rel scrollfm1" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;top:-'.$h1.'px;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>
    <div class="rel scrollfm2" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;top:-'.$h2.'px;right:-'.$w1.'px;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>';
		  
		  }else{
		  $cont='<div class="rel scrollfm" data-dire="'.$config['characterDirectionPosition'].'" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;right:'.$w1.'px;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>
    <div class="rel scrollfm1" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;top:-'.$h1.'px;left:'.$w2.'px;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>';
		  }
		  
	}else{
	$cont='<div class="rel scrollfm" data-dire="'.$config['characterDirectionPosition'].'" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>';	
		}

	}
if($config['characterDirection']=='right'){
	if($config['characterScrollMode']=='scroll'){
	$cont='<div class="rel scrollfm" data-dire="'.$config['characterDirectionPosition'].'" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>
    <div class="rel scrollfm1" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;top:-'.$h1.'px;right:'.$w2.'px;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>';
	}else{
	$cont='<div class="rel scrollfm" data-dire="'.$config['characterDirectionPosition'].'" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>';
		}
	}
if($config['characterDirection']=='down'||$config['characterDirection']=='up'){
	$cont=' <div class="rel scrollfm" data-dire="'.$config['characterDirectionPosition'].'" style="width:'.$w1.'px;height:'.$h1.'px;line-height:'.$h1.'px;white-space:nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Size.$LineOver.$LetterSpacing.'">'.$neirong.'</div>';
	}

return'<div class="jtsb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;overflow:hidden;" data-mode="'.$config['characterMode'].'">
  <marquee style="width:100%;height:100%;" scrollamount="'.$config['characterSpeed'].'" scrolldelay="'.$config['characterEffect'].'" direction="'.$config['characterDirection'].'" behavior="'.$config['characterScrollMode'].'">
    '.$cont.'
  </marquee>
</div>';
}
/*****   滚动文字结束  *****/


/*****     旺旺    *****/
if($list['appType']=='jwb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
if($config['tipText']==''){$tipText='点击这里给我发消息';}else{$tipText=$config['tipText'];}
if($config['characterFont']){$Font='font-family:'.$config['characterFont'].';';}else{$Font='';}
if($config['characterSize']){$Size='font-size:'.$config['characterSize'].'px;';}else{$Size='';}
if($config['characterWeight']){$Weight='font-weight:'.$config['characterWeight'].';';}else{$Weight='';}
if($config['characterStyle']){$FontStyle='font-style:'.$config['characterStyle'].';';}else{$FontStyle='';}
if($config['characterColor']){$Color='color:'.$config['characterColor'].';';}else{$Color='';}
if($config['characterBgColor']){$BgColor='background-color:'.$config['characterBgColor'].';';}else{$BgColor='';}


$wang=$config['wangID']?$config['wangID']:'mayun';

$fliu=$config['shuntMode']; 
$href=$fliu==2 ? 'http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($wang).'&siteid=cntaobao&status=1&charset=utf-8' : 'http://amos.alicdn.com/getcid.aw?v=2&uid='.urlencode($wang).'&site=cntaobao&s=2&groupid=0&charset=utf-8';


if($config['wangMode']=='1'){$wwpl='77';}
if($config['wangMode']=='2'){$wwpl='16';}

$wangNickName=isset($config['wangNickName'])?$config['wangNickName']:'&nbsp;';

return'<div class="jwb abs '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$tipText.' '.$Opacity_attr.' style="'.$Opacity_css.'overflow:hidden;text-align:center;width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;line-height:'.$pos[1].'px;z-index:10;"><div><a target="_blank" href="'.$href.'"
        style="background:url(http://amos.alicdn.com/'.($fliu==2 ? "realonline" : "online").'.aw?v=2&uid='.urlencode($wang).'&site=cntaobao&s='.$config['wangMode'].'&charset=utf-8) left center no-repeat;'.$Font.$Size.$Weight.$FontStyle.$Color.$BgColor.'padding-left:'.$wwpl.'px;display:block;white-space:nowrap;">'.$wangNickName.'&nbsp;</a></div></div>';


}
/*****   旺旺结束  *****/


/*****    开场    *****/
if($list['appType']=='jkcb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(10000,99999);


$cssTX=$config['cssBezier'].$config['cssWeight'];
switch ($cssTX)
{
case 'bs1':  $css3='cubic-bezier(1, 0, 1, 0);';  break; //慢到块 强  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:1
case 'bs2':  $css3='cubic-bezier(1, 0, 1, 1);';  break;  //慢到块 中  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:2
case 'bs3':  $css3='cubic-bezier(0.42, 0, 1, 1);';  break; //慢到块 弱  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:3
case 'bq1':  $css3='cubic-bezier(0, 1, 0, 1);';  break; //快到慢 强  bq  1
case 'bq2':  $css3='cubic-bezier(0, 0, 0, 1);';  break;
case 'bq3':  $css3='cubic-bezier(0, 0, 0.58, 1);';  break;
case 'bt1':  $css3='cubic-bezier(0.5,2.2,1,0.8);';  break; //跑过回头(加速) bt 1
case 'bt2':  $css3='cubic-bezier(0.5,2.2,0.5,0.8);';  break;
case 'bt3':  $css3='cubic-bezier(1,2.2,0.5,0.8);';  break;
case 'bc1':  $css3='cubic-bezier(0.5,0.2,1,-1.2);';  break; //起步后撤(加速) bc 1
case 'bc2':  $css3='cubic-bezier(0.5,0.2,0.5,-1.2);';  break;
case 'bc3':  $css3='cubic-bezier(1,0.2,0.5,-1.2);';  break;
case 'bd1':  $css3='cubic-bezier(0.5,1,1,0);';  break;  //中间停顿(加速) bd 1
case 'bd2':  $css3='cubic-bezier(0.5,1,0.5,0);';  break;
case 'bd3':  $css3='cubic-bezier(1,1,0.5,0);';  break;
case 'bx1':  $css3='cubic-bezier(0.5,1.5,0.5,-1.5);';  break;  //弹性抖动(1) bx 1
case 'bx2':  $css3='cubic-bezier(0.5,2,0.5,-1);';  break;
case 'bx3':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}

	
switch ($config['displayMode'])
{
case 'june-mr-fi1':  $mrms='june-mr-fi0';  break; 
case 'june-mr-fo0':  $mrms='june-mr-fo1';  break; 
default:   $mrms=$config['displayMode'];
}
	
if($config['contentType']=='imgContent'){
	if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
	if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
	$link=$config['href']?'href="'.$config['href'].'"':'';
	$cont='<div class="trans9999s '.$mrms.'" '.$tipText.' style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj.$scl.'transition-delay:'.$config['cssDelay'].';transition-timing-function:'.$css3.';"><a '.$link.' target="'.$config['hrefMode'].'" class="jkcbac" style="display:block;width:100%;height:100%;"></a></div>';
	}else{
	$cont='<div class="trans9999s '.$mrms.'" '.$tipText.' style="width:'.$pos[0].'px;height:'.$pos[1].'px;transition-delay:'.$config['cssDelay'].';transition-timing-function:'.$css3.';">'.$config['customContent'].'</div>';
	}

$lbwidget="{'contentCls':'c".$ls."','navCls':'n".$ls."','easing':'linear','autoplay':false,'activeTriggerCls':'".$config['displayMode']."&nbsp;".$config['cssModeX']."&nbsp;".$config['cssModeY']."&nbsp;".$config['cssMode']."&nbsp;".$config['cssSpeed']."','pauseOnHover':false,'switchTo':0}";

return'<div class="jkcb abs jz J_TWidget '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;" data-widget-type="Carousel" data-widget-config="'.$lbwidget.'">
  <div class="hide c'.$ls.'" style="display:none;height:0;">
    <div></div>
  </div>
  <div class="n'.$ls.' mr">
    '.$cont.'
  </div>
</div>';
}
/*****   开场 结束  *****/


/*****    循环动画    *****/
if($list['appType']=='jxdb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(10000,99999);


$cssTX=$config['cssBezier'].$config['cssWeight'];
switch ($cssTX)
{
case 'bs1':  $css3='cubic-bezier(1, 0, 1, 0);';  break; //慢到块 强  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:1
case 'bs2':  $css3='cubic-bezier(1, 0, 1, 1);';  break;  //慢到块 中  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:2
case 'bs3':  $css3='cubic-bezier(0.42, 0, 1, 1);';  break; //慢到块 弱  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:3
case 'bq1':  $css3='cubic-bezier(0, 1, 0, 1);';  break; //快到慢 强  bq  1
case 'bq2':  $css3='cubic-bezier(0, 0, 0, 1);';  break;
case 'bq3':  $css3='cubic-bezier(0, 0, 0.58, 1);';  break;
case 'bt1':  $css3='cubic-bezier(0.5,2.2,1,0.8);';  break; //跑过回头(加速) bt 1
case 'bt2':  $css3='cubic-bezier(0.5,2.2,0.5,0.8);';  break;
case 'bt3':  $css3='cubic-bezier(1,2.2,0.5,0.8);';  break;
case 'bc1':  $css3='cubic-bezier(0.5,0.2,1,-1.2);';  break; //起步后撤(加速) bc 1
case 'bc2':  $css3='cubic-bezier(0.5,0.2,0.5,-1.2);';  break;
case 'bc3':  $css3='cubic-bezier(1,0.2,0.5,-1.2);';  break;
case 'bd1':  $css3='cubic-bezier(0.5,1,1,0);';  break;  //中间停顿(加速) bd 1
case 'bd2':  $css3='cubic-bezier(0.5,1,0.5,0);';  break;
case 'bd3':  $css3='cubic-bezier(1,1,0.5,0);';  break;
case 'bx1':  $css3='cubic-bezier(0.5,1.5,0.5,-1.5);';  break;  //弹性抖动(1) bx 1
case 'bx2':  $css3='cubic-bezier(0.5,2,0.5,-1);';  break;
case 'bx3':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}

$cssDelay=$config['cssDelay']?$config['cssDelay']:'1s';
$dasDel=explode("s",$cssDelay);$ting=$dasDel[0]+0;
$dasDelss=$ting==0?0.05:$ting;
$csssudu0=explode("s",$config['cssSpeed']);//cssSpeed:trans1d4s  trans2s trans04s
$csssudu1=explode("d",$csssudu0[1]);
if(count($csssudu1)>1){
	$csssudu2=str_replace("d",".",$csssudu0[1]);$csssudu3=$csssudu2+0;$csssudu=$csssudu3+$dasDelss;
}else{
	$dtq1=substr($csssudu0[1],0,1);
	if($dtq1=='0'){
		$ddnum=$csssudu0[1]+0;$csssudu='0.'.$ddnum+$dasDelss;
	}else{
		$ddnum=$csssudu0[1]+0;$csssudu=$ddnum+$dasDelss;
	}
	
	
}


$mss=$config['css1Type']=='normal'?'':$config['css1Type'];
$mcc=$config['css1Type']=='normal'?'':'a-1';

if($config['cssPauseHover']=='no'){$musestop="'pauseOnHover':false,";}else{$musestop="";}
$lbwidget="{'contentCls':'c".$ls."','navCls':'n".$ls."','easing':'none','autoplay':true,'activeTriggerCls':'mr&nbsp;".$mss."','duration':".$dasDelss.",".$musestop."'switchTo':0,'interval':".$csssudu."}";

if($config['displayMode']){$zydiv0='<div class="'.$config['displayMode'].'   '.$config['cssSpeed'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;transition-timing-function:cubic-bezier(0, 0, 0.58, 1)">';$zydiv0s='</div>';}else{$zydiv0='';$zydiv0s='';}

if($config['cssModeX']||$config['cssModeY']){$zydiv1='<div class=" '.$config['cssModeX'].' '.$config['cssModeY'].' '.$config['cssSpeed'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;transition-timing-function:'.$css3.'">';$zydiv1s='</div>';}else{$zydiv1='';$zydiv1s='';}
if($config['cssMode']){
	if(count(explode("june-mr-fr",$config['cssMode']))>1){$arrpp = explode("june-mr-fr",$config['cssMode']);$arrppnum=$arrpp[1]/2;$xzms='fr';$xzss=$arrppnum.'deg';}else{$arrpp = explode("june-mr-r",$config['cssMode']);$arrppnum=$arrpp[1]/2;$xzms='r';$xzss='-'.$arrppnum.'deg';}
	$zydiv2='<div class="'.$config['cssMode'].' '.$config['cssSpeed'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;transition-timing-function:'.$css3.'">';$zydiv2s='</div>';
	$zydiv5='<div style="width:'.$pos[0].'px;height:'.$pos[1].'px;-webkit-transform:rotate('.$xzss.');transform:rotate('.$xzss.');transition-timing-function:'.$css3.'">';$zydiv5s='</div>';
	}else{$zydiv2='';$zydiv2s='';$zydiv5='';$zydiv5s='';}
if($config['cssMode_sf']){$zydiv3='<div class="'.$config['cssMode_sf'].' '.$config['cssSpeed'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;transition-timing-function:'.$css3.'">';$zydiv3s='</div>';}else{$zydiv3='';$zydiv3s='';}
if($config['cssMode_fz']){$zydiv4='<div class="'.$config['cssMode_fz'].' '.$config['cssSpeed'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;transition-timing-function:'.$css3.'">';$zydiv4s='</div>';}else{$zydiv4='';$zydiv4s='';}

if($config['contentType']=='imgContent'){
	if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='';}
	if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}else{$scl='';}
	$link=$config['href']?'href="'.$config['href'].'"':'';
	$cont='<div class="jxdbc '.$mcc.'" '.$tipText.' style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$sbj.$scl.'"><a '.$link.' target="'.$config['hrefMode'].'" class="jxdbac" style="display:block;width:100%;height:100%;"></a></div>';
	}else{
	$cont='<div class="jxdbc '.$mcc.'" '.$tipText.' style="width:'.$pos[0].'px;height:'.$pos[1].'px;">'.$config['customContent'].'</div>';
	}
	
$contLi0='<div class="abs" style="width:'.$pos[0].'px;height:'.$pos[1].'px;" data-d="'.$config['cssDelay'].'">
     '.$zydiv0.$zydiv1.$zydiv2.$zydiv3.$zydiv4.$zydiv5.'
          '.$cont.'
        '.$zydiv0s.$zydiv1s.$zydiv2s.$zydiv3s.$zydiv4s.$zydiv5s.'
      <div class="june-mr-rx50 '.$config['cssSpeed'].'" style="width:0;height:0;display:none;"></div>
    </div>';
$contLi1=$config['css1Type']=='normal'?'<div style="width:0;height:0;display:none;"></div>':$contLi0;

$href=$config['href']?'href="'.$config['href'].'"':'';

return'<div class="jxdb abs jz J_TWidget '.$config['appID'].'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;" data-widget-type="Carousel" data-widget-config="'.$lbwidget.'">
  <div class="hide c'.$ls.'" style="display:none;height:0;">
    <div></div>
    <div></div>
  </div>
  <div class="n'.$ls.'">
    '.$contLi0.$contLi1.'
  </div>
  <a '.$href.' target="'.$config['hrefMode'].'" '.$tipText.' class="abs" style="top:0;left:0;width:'.$pos[0].'px;height:'.$pos[1].'px;"></a>
</div>';

}
/*****   循环动画 结束  *****/




/*****    动画序列    *****/
if($list['appType']=='jxxb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(10000,99999);


$cssTX=$config['cssBezier'].$config['cssWeight'];
switch ($cssTX)
{
case 'bs1':  $css3='cubic-bezier(1, 0, 1, 0);';  break; //慢到块 强  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:1
case 'bs2':  $css3='cubic-bezier(1, 0, 1, 1);';  break;  //慢到块 中  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:2
case 'bs3':  $css3='cubic-bezier(0.42, 0, 1, 1);';  break; //慢到块 弱  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:3
case 'bq1':  $css3='cubic-bezier(0, 1, 0, 1);';  break; //快到慢 强  bq  1
case 'bq2':  $css3='cubic-bezier(0, 0, 0, 1);';  break;
case 'bq3':  $css3='cubic-bezier(0, 0, 0.58, 1);';  break;
case 'bt1':  $css3='cubic-bezier(0.5,2.2,1,0.8);';  break; //跑过回头(加速) bt 1
case 'bt2':  $css3='cubic-bezier(0.5,2.2,0.5,0.8);';  break;
case 'bt3':  $css3='cubic-bezier(1,2.2,0.5,0.8);';  break;
case 'bc1':  $css3='cubic-bezier(0.5,0.2,1,-1.2);';  break; //起步后撤(加速) bc 1
case 'bc2':  $css3='cubic-bezier(0.5,0.2,0.5,-1.2);';  break;
case 'bc3':  $css3='cubic-bezier(1,0.2,0.5,-1.2);';  break;
case 'bd1':  $css3='cubic-bezier(0.5,1,1,0);';  break;  //中间停顿(加速) bd 1
case 'bd2':  $css3='cubic-bezier(0.5,1,0.5,0);';  break;
case 'bd3':  $css3='cubic-bezier(1,1,0.5,0);';  break;
case 'bx1':  $css3='cubic-bezier(0.5,1.5,0.5,-1.5);';  break;  //弹性抖动(1) bx 1
case 'bx2':  $css3='cubic-bezier(0.5,2,0.5,-1);';  break;
case 'bx3':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}

	
$cssDelay=$config['cssDelay']?$config['cssDelay']:'1s';
$dasDel=explode("s",$cssDelay);$ting=$dasDel[0]+0;
$dasDelss=$ting==0?0:$ting;
$csssudu0=explode("s",$config['cssSpeed']);//cssSpeed:trans1d4s
$csssudu1=explode("d",$csssudu0[1]);
if(count($csssudu1)>1){
	$csssudu1=str_replace("d",".",$csssudu0[1]);$csssudu1=$csssudu1+0;$csssudu=$csssudu1+$dasDelss;
}else{
	$ddnum=$csssudu0[1]+0;$csssudu='0.'.$ddnum+$dasDelss;
}
	

$contbox='';$contall='';$ksall='';
foreach($config['childConfig'] as $i=>$item){
	$childData=$list['childData'][$i];
	$zydiv1='<div class="'.$item['displayMode'].' '.$item['cssModeX'].' '.$item['cssModeY'].' '.$config['cssSpeed'].'" style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;transition-timing-function:'.$css3.'">';$zydiv1s='</div>';
if($item['cssMode']){
	if(strstr($item['cssMode'],'une-mr-fr')){$arrpp = explode("une-mr-fr",$item['cssMode']);$arrppnum=$arrpp[1]/2;$xzms='fr';$xzss=$arrppnum.'deg';}elseif(strstr($item['cssMode'],'june-mr-r')){$arrpp = explode("une-mr-r",$item['cssMode']);$arrppnum=$arrpp[1]/2;$xzms='r';$xzss='-'.$arrppnum.'deg';}
	$zydiv2='<div class="'.$item['cssMode'].' '.$config['cssSpeed'].'" style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;transition-timing-function:'.$css3.'">';$zydiv2s='</div>';
	$zydiv5='<div style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;-webkit-transform:rotate('.$xzss.');transform:rotate('.$xzss.');transition-timing-function:'.$css3.'">';$zydiv5s='</div>';
	}else{$zydiv2='';$zydiv2s='';$zydiv5='';$zydiv5s='';}
if($item['cssMode_sf']){$zydiv3='<div class="'.$item['cssMode_sf'].' '.$config['cssSpeed'].'" style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;transition-timing-function:'.$css3.'">';$zydiv3s='</div>';}else{$zydiv3='';$zydiv3s='';}
if($item['cssMode_fz']){$zydiv4='<div class="'.$item['cssMode_fz'].' '.$config['cssSpeed'].'" style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;transition-timing-function:'.$css3.'">';$zydiv4s='</div>';}else{$zydiv4='';$zydiv4s='';}

$tipTextx=$item['tipText']?'title="'.$item['tipText'].'"':'';
if($item['contentType']=='imgContent'){
	if($item['pSrc']){$sbj='background:url('.$item['pSrc'].') '.$item['imgBgp'].' no-repeat;';}else{$sbj='';}
	if($item['bgColor']){$scl='background-color:'.$item['bgColor'].';';}else{$scl='';}
	$link=$item['href']?'href="'.$item['href'].'"':'';
	$cont='<div class="jxxbc" '.$tipTextx.' style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;'.$sbj.$scl.'">
	<a '.$link.' target="'.$item['hrefMode'].'" class="jxxbac" style="display:block;width:100%;height:100%;"></a></div>';
	}else{
	$cont='<div class="jxxbc" '.$tipTextx.' style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;">'.$item['customContent'].'</div>';
	}
$contbox='<div class="abs" style="width:'.$childData['width'].'px;height:'.$childData['height'].'px;top:'.$childData['top'].'px;left:'.$childData['left'].'px;" data-d="'.$cssDelay.'">
     '.$zydiv1.$zydiv2.$zydiv3.$zydiv4.$zydiv5.'
          '.$cont.'
        '.$zydiv1s.$zydiv2s.$zydiv3s.$zydiv4s.$zydiv5s.'
      <div class="june-mr-rx50 '.$config['cssSpeed'].'" style="width:0;height:0;display:none;"></div>
    </div>';
$contall=$contall.$contbox;
$ksall=$ksall.'<div></div>';
	}
$donghsd=explode("s",$config['cssSpeed']);$duration=$donghsd[1]/10+0.0;
if($config['cssPauseHover']=='no'){$musestop="'pauseOnHover':false,";}else{$musestop="";}
	
if($config['overflowMode']=='visible'){$overfClass='j-zdv';$overfCss='overflow:visible;';}
if($config['overflowMode']=='visibleX'){$overfClass='u-a';$overfCss='';}
if($config['overflowMode']=='hidden'){$overfClass='';$overfCss='';}
	
	
$lbwidget="{'contentCls':'c".$ls."','navCls':'n".$ls."','easing':'linear','autoplay':true,'activeTriggerCls':'mr','duration':".$dasDelss.",".$musestop."'switchTo':0,'interval':".$csssudu."}";
return'<div class="jxxb abs jz J_TWidget '.$config['appID'].' '.$overfClass.'" data-appid="'.$config['appID'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;overflow:'.$config['overflowMode'].';'.$overfCss.'" data-widget-type="Carousel" data-widget-config="'.$lbwidget.'">
  <div class="hide c'.$ls.'" style="display:none;height:0;">
    '.$ksall.'
  </div>
  <div class="n'.$ls.'">
    '.$contall.'
  </div>
</div>';	


}
/*****   动画序列 结束  *****/



/*****     手风琴    *****/
if($list['appType']=='jadb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
$ls=rand(10000,99999);

$ksact=$config['adActive']-1;
if($config['adDirection']=='left'||$config['adDirection']=='right'){$btfl='float:left;';$jj='margin-right:'.$config['gSpace'].'px;';}else{$btfl='';$jj='margin-bottom:'.$config['gSpace'].'px;';}

if($config['adCssMode']!=='yes'){
	$datah='';
	//普通模式
$ccc='';
foreach($config['nestConfig'] as $i=>$item){
	$CData=$list['childData'][$i];
	$DData=$list['childData_1'][$i];

  if($config['titleBHControl']=='yes'){	
    $sfqactiveTriggerCls=",'activeTriggerCls':'dianquanka control-group j-a'";
	if($item['pSrc']){$sbt1='background:url('.$item['pSrc'].') '.$item['imgBgp'].' no-repeat;';}else{$sbt1='';}
	if($item['pSrcBH']){$sbt2='background:url('.$item['pSrcBH'].') '.$item['imgBgpBH'].' no-repeat;';}else{$sbt2='';}	
	if($item['cType']=='imgContent'){$t1='<div class="chn-link-dianquanka split a-2" data-a="imgContent" style="overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;"><a href="'.$item['href'].'" target="'.$item['hrefMode'].'" style="width:'.$CData['width'].'px;height:'.$CData['height'].'px;'.$sbt1.'display:block;"></a></div>';}
	if($item['cType']=='textContent'){$t1='<div class="chn-link-dianquanka split a-2" data-a="textContent" style="overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;text-align:'.$item['characterAlign'].';background-color:'.$item['characterBgColor'].';">
      <a href="'.$item['href'].'" target="'.$item['hrefMode'].'" style="width:'.$CData['width'].'px;height:'.$CData['height'].'px;color:'.$item['characterColor'].';font-family:'.$item['characterFont'].';font-weight:'.$item['characterWeight'].';font-size:'.$item['characterSize'].'px;line-height:30pxpx;display:block;">'.join("<br>",str_split_utf8($item['textContent'])).'</a></div>';}
	if($item['cType']=='customContent'){$t1='<div class="chn-link-dianquanka split a-2" data-a="customContent" style="overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;">
      <div style="width:'.$CData['width'].'px;height:'.$CData['height'].'px;">'.$item['cContent'].'</div></div>';}

	if($item['cTypeBH']=='imgContentBH'){$t2='<div data-a="imgContentBH" style="overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;'.$sbt2.'"><a href="'.$item['hrefBH'].'" target="'.$item['hrefModeBH'].'" style="width:'.$CData['width'].'px;height:'.$CData['height'].'px;display:block;"></a></div>';}
	if($item['cTypeBH']=='textContentBH'){$t2='<div data-a="textContentBH" style="overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;text-align:'.$item['characterAlignBH'].';"><a href="'.$item['hrefBH'].'" target="'.$item['hrefModeBH'].'" style="width:background-color:'.$item['characterBgColorBH'].';width:'.$CData['width'].'px;height:'.$CData['height'].'px;color:'.$item['characterColorBH'].';font-family:'.$item['characterFontBH'].';font-weight:'.$item['characterWeightBH'].';font-size:'.$item['characterSizeBH'].'px;line-height:30pxpx;display:block;">'.join("<br>",str_split_utf8($item['textContentBH'])).'</a></div>';}
	if($item['cTypeBH']=='customContentBH'){$t2='<div data-a="customContentBH" style="overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;">'.$item['cContentBH'].'</div>';}

	$title='<div class="atl at'.$ls.($i==$ksact&&$config['adHideMode']=='yes' ? " hidden" : "").' " style="'.$btfl.'overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;'.$jj.'">'.$t1.$t2.'</div>';
  }else{
	$sfqactiveTriggerCls="";  
	if($item['pSrc']){$sbt1='background:url('.$item['pSrc'].') '.$item['imgBgp'].' no-repeat;';}else{$sbt1='';}
	if($item['pSrcBH']){$sbt2='background:url('.$item['pSrcBH'].') '.$item['imgBgpBH'].' no-repeat;';}else{$sbt2='';}	
	if($item['cType']=='imgContent'){$t1='<div class="atl at'.$ls.($i==$ksact&&$config['adHideMode']=='yes' ? " hidden" : "").' " data-a="imgContent" style="'.$btfl.'overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;'.$jj.'">
      <a href="'.$item['href'].'" target="'.$item['hrefMode'].'" style="'.$btfl.'overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;'.$sbt1.'display:block;"></a></div>';}
	if($item['cType']=='textContent'){$t1='<div class="atl at'.$ls.($i==$ksact&&$config['adHideMode']=='yes' ? " hidden" : "").' " data-a="textContent" style="'.$btfl.'overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;text-align:'.$item['characterAlign'].';background-color:'.$item['characterBgColor'].';'.$jj.'">
      <a href="'.$item['href'].'" target="'.$item['hrefMode'].'" style="width:'.$CData['width'].'px;height:'.$CData['height'].'px;color:'.$item['characterColor'].';font-family:'.$item['characterFont'].';font-weight:'.$item['characterWeight'].';font-size:'.$item['characterSize'].'px;line-height:30pxpx;display:block;">'.join("<br>",str_split_utf8($item['textContent'])).'</a></div>';}
	if($item['cType']=='customContent'){$t1='<div class="atl at'.$ls.($i==$ksact&&$config['adHideMode']=='yes' ? " hidden" : "").' " data-a="customContent" style="'.$btfl.'overflow:hidden;outline:none;width:'.$CData['width'].'px;height:'.$CData['height'].'px;'.$jj.'">
      <div style="width:'.$CData['width'].'px;height:'.$CData['height'].'px;">'.$item['cContent'].'</div></div>';}

	$title=$t1;
  }
	$ccdis=$ksact==$i?'':'display:none;';
	if($item['pSrc1']){$sbcc='background:url('.$item['pSrc1'].') '.$item['imgBgp1'].' no-repeat;';}else{$sbcc='';}
	if($item['cType1']=='imgContent'){
	$content='<div class="apl ap'.$ls.' " data-a="imgContent" style="'.$ccdis.''.$btfl.'overflow:hidden;width:'.$DData['width'].'px;height:'.$DData['height'].'px;'.$sbcc.'">
    <a href="'.$item['href1'].'" target="'.$item['hrefMode1'].'" style="width:'.$DData['width'].'px;height:'.$DData['height'].'px;display:block;"></a>
  </div>';
	}else{
  	$content='<div class="apl ap'.$ls.' " data-a="customContent" style="'.$ccdis.''.$btfl.'overflow:hidden;width:'.$DData['width'].'px;height:'.$DData['height'].'px;">'.$item['cContent1'].'</div>';
	}
	
	if($config['adDirection']=='right'||$config['adDirection']=='top'){$lll=$content.$title;}else{$lll=$title.$content;}
	$ccc=$ccc.$lll;
	}
if($config['adDirection']=='left'||$config['adDirection']=='right'){$width='9999';$height=$pos[1];}else{$width=$pos[0];$height='9999';}
$activeIndex=$config['adMode']=='yes'?0:$config['adActive']-1;
$auto=$config['adPlay']=='yes'?",'autoplay':true,'interval':".$config['adTime']."":'';
$HideMode=$config['adHideMode']=='yes'?",'activeTriggerCls':'hidden'":'';
$Mode=$config['adMode']=='yes'?",'multiple':true":",'multiple':false";
$lbwidget="{'triggerCls':'at".$ls."','panelCls':'ap".$ls."','activeIndex':".$activeIndex.",'triggerType':'".$config['adTrigger']."'".$Mode.$HideMode.$auto.$sfqactiveTriggerCls."}";
return'<div class="jadb abs J_TWidget" data-widget-type="Accordion" data-widget-config="'.$lbwidget.'" data-direction="'.$config['adDirection'].'" data-b="no" data-g="'.$config['gSpace'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$width.'px;height:'.$height.'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;">'.$ccc.'</div>';
}else{
	
	//过场模式
	//codeObj[0][curExData][openWH]:491
	//codeObj[0][curExData][closeWH]:102
	

	
$datah='data-h="'.$list['curExData']['openWH'].';'.$list['curExData']['closeWH'].'"';	
$ccc='';$lll='';
foreach($config['nestConfig'] as $i=>$item){
	$CData=$list['childData'][$i];
	$DData=$list['childData_1'][$i];

	
	
if($DData['isHide']=='yes'){
	$nrdw=$CData;
}else{
	$nrdw=$DData;
}
	
if($config['adDirection']=='left'){ //左右展开
	
	if($config['adHideTitle']=='yes'){//隐藏标题
	$wcdw=$list['curExData']['openWH']-$list['curExData']['closeWH'];
	$ncdw1=$list['curExData']['openWH'];
	$btwd=$CData['width'];
	$ncwd=$list['curExData']['openWH']; 
	$fybtdis='display:none;';
	$markc='ipcht';
	$wcdh=$list['childData_1'][0]['height'];
	$ncdH1=$DData['height'];
	$licss1='height:'.$CData['height'].'px;padding-left:'.$list['curExData']['closeWH'].'px;';
	$licss2='left:-'.$list['curExData']['closeWH'].'px;';
	}else{ //显示标题
	$wcdw=$list['childData_1'][0]['width'];
	$ncdw1=$DData['width']+$CData['width'];
	$btwd=$CData['width'];
	$ncwd=$DData['width'];
	$fybtdis='display:block;';
	$markc='';
	$wcdh=$list['childData_1'][0]['height'];
	$ncdH1=$DData['height'];
	$licss1='height:'.$CData['height'].'px;padding-left:'.$CData['width'].'px;';
	$licss2='left:-'.$CData['width'].'px;';
	}	
	
}else{ //上下展开
	
	if($config['adHideTitle']=='yes'){  //隐藏标题
	$wcdw=$list['childData_1'][0]['width'];
	$ncdw1=$DData['width'];
	$btwd=$CData['width'];
	$ncwd=$DData['width']; 
	$fybtdis='display:none;';
	$markc='ipcht';
	$ncdH1=$list['curExData']['openWH'];
	$wcdh=$list['curExData']['openWH']-$list['childData'][0]['height'];
	$licss1='width:'.$CData['width'].'px;padding-top:'.$list['curExData']['closeWH'].'px;';
	$licss2='top:-'.$list['curExData']['closeWH'].'px;';
	}else{  //显示标题
	$wcdw=$list['childData_1'][0]['width'];
	$ncdw1=$DData['width'];
	$btwd=$CData['width'];
	$ncwd=$DData['width'];
	$fybtdis='display:block;';
	$markc='';
	$ncdH1=$DData['height'];
	$wcdh=$list['childData_1'][0]['height'];
	$licss1='width:'.$CData['width'].'px;padding-top:'.$CData['height'].'px;';
	$licss2='top:-'.$CData['height'].'px;';
	}
	
}
	
	

	
	$jj='';
if($config['adDirection']=='left'&&$i>0){$jj='margin-left:'.$config['gSpace'].'px;';}
if($config['adDirection']=='up'&&$i>0){$jj='margin-top:'.$config['gSpace'].'px;';}
if($config['adDirection']=='left'||$config['adDirection']=='right'){
	$xdis='display:inline-block;';
	$licla1='ja-1';
	$licla2='ja-a';
	}else{
	$xdis='position:relative;display:block;';
	$licla1='jb-1';
	$licla2='ja-b';
	}

if($ksact==$i){$cls1=$licla2;}else{$cls1='';}
$cssTX=$config['adCssEffect'].$config['adCssWeight'];
switch ($cssTX)
{
case 'bs1':  $css3='cubic-bezier(1, 0, 1, 0);';  break; //慢到块 强  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:1
case 'bs2':  $css3='cubic-bezier(1, 0, 1, 1);';  break;  //慢到块 中  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:2
case 'bs3':  $css3='cubic-bezier(0.42, 0, 1, 1);';  break; //慢到块 弱  codeObj[0][config][cssBezier]:bs    codeObj[0][config][cssWeight]:3
case 'bq1':  $css3='cubic-bezier(0, 1, 0, 1);';  break; //快到慢 强  bq  1
case 'bq2':  $css3='cubic-bezier(0, 0, 0, 1);';  break;
case 'bq3':  $css3='cubic-bezier(0, 0, 0.58, 1);';  break;
case 'bt1':  $css3='cubic-bezier(0.5,2.2,1,0.8);';  break; //跑过回头(加速) bt 1
case 'bt2':  $css3='cubic-bezier(0.5,2.2,0.5,0.8);';  break;
case 'bt3':  $css3='cubic-bezier(1,2.2,0.5,0.8);';  break;
case 'bc1':  $css3='cubic-bezier(0.5,0.2,1,-1.2);';  break; //起步后撤(加速) bc 1
case 'bc2':  $css3='cubic-bezier(0.5,0.2,0.5,-1.2);';  break;
case 'bc3':  $css3='cubic-bezier(1,0.2,0.5,-1.2);';  break;
case 'bd1':  $css3='cubic-bezier(0.5,1,1,0);';  break;  //中间停顿(加速) bd 1
case 'bd2':  $css3='cubic-bezier(0.5,1,0.5,0);';  break;
case 'bd3':  $css3='cubic-bezier(1,1,0.5,0);';  break;
case 'bx1':  $css3='cubic-bezier(0.5,1.5,0.5,-1.5);';  break;  //弹性抖动(1) bx 1
case 'bx2':  $css3='cubic-bezier(0.5,2,0.5,-1);';  break;
case 'bx3':  $css3='cubic-bezier(0.5,3,0.5,0);';  break;
default:   $css3='linear;';
}

if($item['pSrc']){$sbt1='background:url('.$item['pSrc'].') '.$item['imgBgp'].' no-repeat;';}else{$sbt1='';}

	$ccdis=$ksact==$i?$xdis:'display:none;';	 // $btwd  $ncwd
		
	if($item['cType']=='imgContent'){$t1='<a href="'.$item['href'].'" target="'.$item['hrefMode'].'" style="width:'.$btwd.'px;height:'.$CData['height'].'px;'.$btfl.''.$sbt1.''.$fybtdis.'"></a>';}
	if($item['cType']=='textContent'){$tbg='background-color:'.$item['characterBgColor'].';';$tal='text-align:'.$item['characterAlign'].';';
		$t1='<a href="'.$item['href'].'" target="'.$item['hrefMode'].'" style="width:'.$btwd.'px;height:'.$CData['height'].'px;'.$btfl.'color:'.$item['characterColor'].';font-family:'.$item['characterFont'].';font-weight:'.$item['characterWeight'].';font-size:'.$item['characterSize'].'px;line-height:30pxpx;'.$fybtdis.'">'.join("<br>",str_split_utf8($item['textContent'])).'</a>';}else{$tbg='';$tal='';}
	if($item['cType']=='customContent'){$t1='<div style="width:'.$btwd.'px;height:'.$CData['height'].'px;'.$btfl.''.$fybtdis.'">'.$item['cContent'].'</div>';}
	
	
	if($item['pSrc1']){$sbcc='background:url('.$item['pSrc1'].') '.$item['imgBgp1'].' no-repeat;';}else{$sbcc='';}
	if($item['cType1']=='imgContent'){
	$content='<div class="apnone " data-a="imgContent" style="'.$xdis.'overflow:hidden;width:'.$ncwd.'px;height:'.$ncdH1.'px;'.$btfl.''.$sbcc.'">
    <a href="'.$item['href1'].'" target="'.$item['hrefMode1'].'" style="width:'.$ncwd.'px;height:'.$ncdH1.'px;display:block;"></a>
  </div>';
	}else{
  	$content='<div class="apnone " data-a="customContent" style="'.$xdis.'overflow:hidden;width:'.$ncwd.'px;height:'.$ncdH1.'px;'.$btfl.'">'.$item['cContent1'].'</div>';
	}
		

	$lll='<div class="atl at'.$ls.' '.$cls1.' '.$licla1.'" data-a="'.($item['cType']=='imgContent' ? "imgContent" : "customContent").'" style="'.$xdis.'overflow:hidden;outline:none;transition: '.$config['adCssSpeed'].' '.$css3.';'.$licss1.$jj.''.$tbg.$tal.'">
      <div class="ipr rel '.$markc.'" style="'.$licss2.'">
        <div class="rel iprc" style="overflow:hidden;width:'.$ncdw1.'px;height:'.($ncdH1+$CData['height']).'px;">
          '.$t1.'
          '.$content.'
          <div class="apl ap'.$ls.' "></div>
        </div>
      </div>
    </div>';

	$ccc=$ccc.$lll;
	}
	
	
if($config['adDirection']=='left'||$config['adDirection']=='right'){$width='9999';$height=$pos[1];}else{$width=$pos[0];$height=$pos[1];}
$activeIndex=$config['adMode']=='yes'?0:$config['adActive']-1;
$auto=$config['adPlay']=='yes'?",'autoplay':true,'interval':".$config['adTime']."":'';
$HideMode=$config['adHideMode']=='yes'?",'activeTriggerCls': '&nbsp;hidden'":'';

$lbwidget="{'triggerCls':'at".$ls."','panelCls':'ap".$ls."','activeIndex':".$activeIndex.",'triggerType':'".$config['adTrigger']."','multiple':false,'activeTriggerCls':'".$licla2."'".$auto."}";
return'<div class="jadb abs J_TWidget" data-u="'.$config['adCssEffect'].';;'.$config['adCssWeight'].';;'.$config['adCssSpeed'].'" data-widget-type="Accordion" data-widget-config="'.$lbwidget.'" data-direction="'.$config['adDirection'].'" data-b="no" data-g="'.$config['gSpace'].'" '.$datah.' '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$width.'px;height:'.$height.'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;"><div class="rel jwk" style="width:'.$wcdw.'px;height:'.$wcdh.'px;white-space:nowrap;">'.$ccc.'</div></div>';
	
	
	}

}
/*****   手风琴xx结束  *****/

/*****     翻页轮播    *****/
if($list['appType']=='jfyb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';
	$lstjjzz=$config['smallSliderMode']=='scrolly'?'bottom':'left';

	
$ls=rand(100000,999999);
if($config['sliderMode']=='scrollx1'||$config['sliderMode']=='scrolly1'){
	$data_s='b';$vs='';
	if($config['sliderMode']=='scrollx1'){$effect='scrollx';for($n=0;$n<count($config['contentType']);$n++){$vs=$n==0?'-'.$pos[0]:$vs.',-'.$pos[0].'';}$viewSize=", 'viewSize': [".$vs."]";}
	if($config['sliderMode']=='scrolly1'){$effect='scrolly';for($n=0;$n<count($config['contentType']);$n++){$vs=$n==0?'-'.$pos[1]:$vs.',-'.$pos[1].'';}$viewSize=", 'viewSize': [".$vs."]";}
	}else{
	$data_s='a';
	$effect=$config['sliderMode'];
	$viewSize='';
	}
	
//左右箭头
$zuoyoudisplay=$config['sliderArrow']=='no'?'display:none;':'';
$zuoyou=$config['childConfig'][0];

$jtzuo=$zuoyou['oSrc']?'background:url('.$zuoyou['oSrc'].') no-repeat center center;':'';
if($zuoyou['oSrcHover']){
  $jtzhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0; '.$jtzuo.'" alt="上一页"></div><div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['oSrcHover'].') no-repeat center center;" alt="上一页"></div>';
	}else{
  $jtzhtml='<div style="display:block;width:100%;height:100%;'.$jtzuo.'" alt="上一页"></div>';
		}
	
$jtyou=$zuoyou['tSrc']?'background:url('.$zuoyou['tSrc'].') no-repeat center center;':'';
if($zuoyou['tSrcHover']){
  $jtyhtml='<div class="abs juneo" style="display:block;width:100%;height:100%;top:0;left:0;'.$jtyou.'" alt="下一页"></div>
			<div class="abs junei" style="display:block;width:100%;height:100%;top:0;left:0;background:url('.$zuoyou['tSrcHover'].') no-repeat center center;" alt="下一页"></div>';
	}else{
  $jtyhtml='<div style="display:block;width:100%;height:100%;'.$jtyou.'" alt="下一页"></div>';
		}



$jthoverleft='';$jthoverright='';$clsszy='';
if($config['displayMode']=='june-box-fadein'){$jtdanru='june-box-fadein b-1-fadein';$clsszy='jspb j-b';}else{$jtdanru='';} //淡出淡入
if($config['css3Mode']){
	$jtcss0 = explode('movein',$config['css3Mode']);$jtcss1 = explode('moveout',$config['css3Mode']);
	if(count($jtcss0)>1&&$config['sliderArrow']=='yes'){$jthoverleft='june-box-rx'.$jtcss0[1].' b-1-rx'.$jtcss0[1].'';$jthoverright='june-box-lx'.$jtcss0[1].' b-1-lx'.$jtcss0[1].'';$clsszy='jspb j-b';}
	if(count($jtcss1)>1&&$config['sliderArrow']=='yes'){$jthoverleft='june-box-lx'.$jtcss1[1].' b-1-lx'.$jtcss1[1].'';$jthoverright='june-box-rx'.$jtcss1[1].' b-1-rx'.$jtcss1[1].'';$clsszy='jspb j-b';}
	}

$jtdiv='<div class="abs prev'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverleft.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][0]['width'].'px;height:'.$list['childData'][0]['height'].'px;top:'.$list['childData'][0]['top'].'px;left:'.$list['childData'][0]['left'].'px;z-index:14;">
			'.$jtzhtml.'
		</div>
  		<div class="abs next'.$ls.' '.$config['css3Speed'].' '.$jtdanru.' '.$jthoverright.' junefade" style="'.$zuoyoudisplay.'cursor:pointer;width:'.$list['childData'][1]['width'].'px;height:'.$list['childData'][1]['height'].'px;top:'.$list['childData'][1]['top'].'px;left:'.$list['childData'][1]['left'].'px;z-index:14;">
 			'.$jtyhtml.'
		</div>';

//content
$pngwidget="{'png':true,'png_bg':true}";
$picdivzh='';$picdivhtml='';
foreach($config['contentType'] as $i=>$item){
	if($data_s=='b'){
		$contabs='abs';
		if($config['sliderMode']=='scrollx1'){$adnum=$i*$pos[0];$contcss='left:-'.$adnum.'px;top:0;';}
		if($config['sliderMode']=='scrolly1'){$adnum=$i*$pos[1];$contcss='left:0px;top:-'.$adnum.'px;';}
		}else{
		$contabs='rel';$contcss='';
		}
	if($config['contentType'][$i]=='imgContent'){
	  $sliderImgBgp=$config['sliderImgBgp'][$i]?$config['sliderImgBgp'][$i]:'50% 50%';
	  $sliderSrc=$config['sliderSrc'][$i]?'background:url('.$config['sliderSrc'][$i].') no-repeat scroll '.$sliderImgBgp.' transparent;':'';
	  $sliderHref=$config['sliderHref'][$i]?'href="'.$config['sliderHref'][$i].'"':'';
	  $picdiv='<div class="elepic" style="width:'.$pos[0].'px;height:'.$pos[1].'px;display:block;float:left;overflow:hidden;">
        <div class="elexb '.$contabs.'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$contcss.$sliderSrc.'">
          <a class="J_TWidget" '.$sliderHref.' target="'.$config['hrefMode'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;display:block;" data-widget-config="'.$pngwidget.'" data-widget-type="Compatible"></a>
        </div>
      </div>';
		}else if($config['contentType'][$i]=='customContent'){
	$picdiv='<div class="elepic" style="width:'.$pos[0].'px;height:'.$pos[1].'px;display:block;float:left;overflow:hidden;">
          <div class="elexb '.$contabs.'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;'.$contcss.'">'.$config['customContent'][$i].'</div></div>';
		}
	$picdivzh=$picdivzh.$picdiv;
	}
$picdivhtml='<div class="rel scroller" style="overflow:hidden;width:'.$pos[0].'px;height:'.$pos[1].'px;z-index:10;">
    <div class="ks-switchable-content c'.$ls.'" style="">
      '.$picdivzh.'
    </div>
  </div>';
//缩略
$kshtml='';$ksdiv='';$ksdivzh='';
$ksinfo=$list['childData_1'];
$ksdis=$config['sliderSmallImg']=='no'?'display:none;':'';
//缩略开关灯
if($config['kgdSwitch']=='black'){$kgdcss1='background:#000000;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='white'){$kgdcss1='background:#ffffff;';$kgdcss2='opacity:0.7;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);-ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);';}
if($config['kgdSwitch']=='transparent'){$kgdcss1='';$kgdcss2='';}
foreach($config['contentType'] as $i=>$item){
	$kstype=$config['smallCircleMode'][$i]?$config['smallCircleMode'][$i]:'no';
	$ksactive=$i==0?'juneactive':'';
	$sliderHref=$config['sliderHref'][$i]?$config['sliderHref'][$i]:'href="'.$config['sliderHref'][$i].'"';
if($kstype=='no'){//缩略图片
	if($config['contentType'][$i]=='imgContent'){
		$img=$config['smallImgSrcT'][$i]?$config['smallImgSrcT'][$i]:$config['sliderSrc'][$i];
		$imghover=$config['smallHoverSrcT'][$i]?$config['smallHoverSrcT'][$i]:$img;
		}else{
		$img=$config['smallImgSrc'][$i];
		$imghover=$config['smallHoverSrc'][$i]?$config['smallHoverSrc'][$i]:$img;	
		}
	$ksdiv='<div class="fyslt">
          <div class="rel '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="margin-'.$lstjjzz.':'.$config['smallSliderSpace'].'px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;cursor:pointer;">
            <a '.$sliderHref.' target="'.$config['hrefMode'].'" class="abs " style="top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
              <img src="'.$imghover.'" style="vertical-align:top;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
            <a '.$sliderHref.' target="'.$config['hrefMode'].'" class="abs split chn-link-dianquanka a-2" style="'.$kgdcss1.'top:0px;left:0px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;">
              <img src="'.$img.'" style="vertical-align:top;'.$kgdcss2.'width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;"></a>
          </div>
        </div>';
	
	}
if($kstype=='yes'){//缩略圆点
	if($config['thumbCircleSet'][$i]){
		$str = stripslashes($config['thumbCircleSet'][$i]);$str = stripslashes($str);
		$ydwzs = json_decode($str,true); 
		$ydwznr=$ydwzs['characterContent']?$ydwzs['characterContent']:'';
		$ydwzcolor=$ydwzs['characterColor']?'color:'.$ydwzs['characterColor'].';':'';
		$ydwzfamily=$ydwzs['characterFont']?'font-family:'.$ydwzs['characterFont'].';':'';
		$ydwzcharacterWeight=$ydwzs['characterWeight']?'font-weight:'.$ydwzs['characterWeight'].';':'';
		$ydwzcharacterSize=$ydwzs['characterSize']?'font-size:'.$ydwzs['characterSize'].';':'';
		$ydwzcolor1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterColorHover']?'color:'.$ydwzs['characterColorHover'].';':'color:'.$ydwzs['characterColor'].';';
		$ydwzfamily1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterFontHover']?'font-family:'.$ydwzs['characterFontHover'].';':'font-family:'.$ydwzs['characterFont'].';';
		$ydwzcharacterWeight1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterWeightHover']?'font-weight:'.$ydwzs['characterWeightHover'].';':'font-weight:'.$ydwzs['characterWeight'].';';
		$ydwzcharacterSize1=$ydwzs['characterHoverMode']=='on'&&$ydwzs['characterSizeHover']?'font-size:'.$ydwzs['characterSizeHover'].';':'font-size:'.$ydwzs['characterSize'].';';
	}else{
		$ydwznr='';
		$ydwzcolor='';
		$ydwzfamily='';
		$ydwzcharacterWeight='';
		$ydwzcharacterSize='';
		$ydwzcolor1='';
		$ydwzfamily1='';
		$ydwzcharacterWeight1='';
		$ydwzcharacterSize1='';	
	}
	$ksbg0=$config['smallCircleBgColor'][$i]?'background-color:'.$config['smallCircleBgColor'][$i].';':'';
	$ksbg1=$config['smallCircleBgColor1'][$i]?'background-color:'.$config['smallCircleBgColor1'][$i].';':'';
	$ksdiv='<div class="fyslt">
          <div class="rel scm '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="margin-'.$lstjjzz.':'.$config['smallSliderSpace'].'px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;line-height:'.$ksinfo[$i]['height'].'px;cursor:pointer;text-align:center;">
            <div class="abs " style="border-radius:50%;width:100%;height:100%;'.$ksbg1.''.$ydwzcolor.$ydwzfamily.$ydwzcharacterWeight.$ydwzcharacterSize.'">'.$ydwznr.'</div>
            <div class="abs split chn-link-dianquanka a-2" style="border-radius:50%;width:100%;height:100%;'.$ksbg0.''.$ydwzcolor1.$ydwzfamily1.$ydwzcharacterWeight1.$ydwzcharacterSize1.'">'.$ydwznr.'</div>
          </div>
        </div>';
	
	}
if($kstype=='yes2'){//缩略文字
	$str = stripslashes($config['thumbSet'][$i]); $str = stripslashes($str);
	$wzdata = json_decode($str,true);
if($wzdata['tipText']==''){$tipText='';}else{$tipText='title="'.$wzdata['tipText'].'"';}
if($wzdata['characterMode']=='text'){$datac='data-c="'.$wzdata['characterLineMulti'].'"';}else{$datac='data-h="'.$wzdata['characterContent'].';'.$wzdata['characterItemContent'].'"';}
if($wzdata['characterModeHover']=='text'){$datac2='data-ch="'.$wzdata['characterLineMultiHover'].'"';}else{$datac2='data-hh="'.$wzdata['characterItemContentHover'].';'.$wzdata['characterItemContentHover'].'"';}
if($wzdata['outlineControl']=='outlineShow'){$outline='outline-color:'.$wzdata['outlineColor'].';';$outlineSpeed=$wzdata['outlineSpeed'];$outlineWidth=$wzdata['outlineWidth'];$outlineShadowColor='color:'.$wzdata['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;outline-color:transparent;';$outlclass='';}
//正面
if($wzdata['characterFont']){$Font='font-family:'.$wzdata['characterFont'].';';}else{$Font='';}
if($wzdata['characterSize']){$Size='font-size:'.$wzdata['characterSize'].'px;';}else{$Size='';}
if($wzdata['characterColor']){$Color='color:'.$wzdata['characterColor'].';';}else{$Color='';}
if($wzdata['characterLineHeight']){$LineHeight='line-height:'.$wzdata['characterLineHeight'].'px;';}else{$LineHeight='';}
if($wzdata['characterLetterSpacing']){$LetterSpacing='letter-spacing:'.$wzdata['characterLetterSpacing'].'px;';}else{$LetterSpacing='';}
if($wzdata['characterIndent']){
	if($wzdata['characterAlign']=='left'){$Indent='padding-left:'.$wzdata['characterIndent'].'px;';}
	if($wzdata['characterAlign']=='right'){$Indent='padding-right:'.$wzdata['characterIndent'].'px;';}
	if($wzdata['characterAlign']=='center'){$Indent='padding:0 '.$wzdata['characterIndent'].'px;';}
}else{$Indent='';}
if($wzdata['characterWeight']){$Weight='font-weight:'.$wzdata['characterWeight'].';';}else{$Weight='';}
if($wzdata['characterStyle']){$FontStyle='font-style:'.$wzdata['characterStyle'].';';}else{$FontStyle='';}
if($wzdata['characterLineOver']||$wzdata['characterLineThrough']||$wzdata['characterLineUnder']){$LineOver='text-decoration:'.$wzdata['characterLineOver'].' '.$wzdata['characterLineThrough'].' '.$wzdata['characterLineUnder'].';';}else{$LineOver='';}
if($wzdata['characterAlign']){$Align='text-align:'.$wzdata['characterAlign'].';';}else{$Align='';}
if($wzdata['borderRadius1']){$borderRadius='border-radius:'.$wzdata['borderRadius1'].';';}else{$borderRadius='';}
if($wzdata['borderControl1']){
	$borderWidth=$wzdata['borderWidth1']?$wzdata['borderWidth1']:'0';
	$border='border:'.$borderWidth.'px solid '.$wzdata['borderColor1'].';'.$borderRadius.';';}else{$border='';}
if($wzdata['shadowControl1']=='shadowShow1'){ 
  $slz1=$wzdata['shadowLeft1']?$wzdata['shadowLeft1']:'0';
  $slz2=$wzdata['shadowTop1']?$wzdata['shadowTop1']:'0';
  $slz3=$wzdata['shadowBlur1']?$wzdata['shadowBlur1']:'0';
  $slz4=$wzdata['shadowSize1']?$wzdata['shadowSize1']:'0';
  $shadow='box-shadow:'.$slz1.'px '.$slz2.'px '.$slz3.'px '.$slz4.'px '.$wzdata['shadowColor1'].' '.$wzdata['shadowStyle1'].';';
 }else{$shadow='';}
if($wzdata['characterBgColor']){$BgColor='background-color:'.$wzdata['characterBgColor'].';';}else{$BgColor='';}
if($wzdata['characterBgSrc']){$BgSrc='background:url('.$wzdata['characterBgSrc'].') '.$wzdata['imgBgp'].' no-repeat;';}else{$BgSrc='';}
if($wzdata['characterWidthMode']=='auto'){$display='';$wdth='';}else{$display='';$wdth='width:'.$ksinfo[$i]['width'].'px;';}
if($wzdata['ssOpacity']){ $sso1=$wzdata['ssOpacity']*100; $ssOpacity='opacity:'.$wzdata['ssOpacity'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso1.');';}else{$ssOpacity='';}
$wdwidth=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['width']-$wzdata['borderWidth1']*2:$ksinfo[$i]['width'];
$wdheigh=$wzdata['borderControl1']=='hborder1'?$ksinfo[$i]['height']-$wzdata['borderWidth1']*2:$ksinfo[$i]['height'];
$zhengstyle='width:auto;'.$display.$Align.'height:'.$wdheigh.'px;'.$LineHeight.'white-space: nowrap;word-break:break-all;'.$BgSrc.$BgColor.$Color.$Font.$Weight.$FontStyle.$Indent.$Size.$LineOver.$LetterSpacing.$border.$shadow.$ssOpacity.'';
//反面
if($wzdata['characterFontHover']){$Font2='font-family:'.$wzdata['characterFontHover'].';';}else{$Font2='';}
if($wzdata['characterSizeHover']){$Size2='font-size:'.$wzdata['characterSizeHover'].'px;';}else{$Size2='';}
if($wzdata['characterColorHover']){$Color2='color:'.$wzdata['characterColorHover'].';';}else{$Color2='';}
if($wzdata['characterLetterSpacingHover']){$LetterSpacing2='letter-spacing:'.$wzdata['characterLetterSpacingHover'].'px;';}else{$LetterSpacing2='';}
if($wzdata['characterIndentHover']){
	if($wzdata['characterAlignHover']=='left'){$Indent2='padding-left:'.$wzdata['characterIndentHover'].'px;';}
	if($wzdata['characterAlignHover']=='right'){$Indent2='padding-right:'.$wzdata['characterIndentHover'].'px;';}
	if($wzdata['characterAlignHover']=='center'){$Indent2='padding:0 '.$wzdata['characterIndentHover'].'px;';}
}else{$Indent2='';}
if($wzdata['characterWeightHover']){$Weight2='font-weight:'.$wzdata['characterWeightHover'].';';}else{$Weight2='';}
if($wzdata['characterStyleHover']){$FontStyle2='font-style:'.$wzdata['characterStyleHover'].';';}else{$FontStyle2='';}
if($wzdata['characterLineOverHover']||$wzdata['characterLineThroughHover']||$wzdata['characterLineUnderHover']){$LineOver2='text-decoration:'.$wzdata['characterLineOverHover'].' '.$wzdata['characterLineThroughHover'].' '.$wzdata['characterLineUnderHover'].';';}else{$LineOver2='';}
if($wzdata['characterAlignHover']){$Align2='text-align:'.$wzdata['characterAlignHover'].';';}else{$Align2='';}
if($wzdata['characterUnderLine']=='on'&&$wzdata['borderControl']==''){
	$UnderLine='border-bottom: '.$wzdata['characterUnderLineWeight'].'px '.$wzdata['characterUnderLineStyle'].' '.$wzdata['characterUnderLineColor'].';';$UnBH=$wzdata['characterUnderLineWeight'];}else{$UnderLine='';$UnBH=0;}
if($wzdata['characterLineHeightHover']){$lh3=$wzdata['characterLineHeightHover'];$LineHeight2='line-height:'.$lh3.'px;';}else{$LineHeight2=$LineHeight;}
if($wzdata['borderControl']){
	$borderWidth2=$wzdata['borderWidth']?$wzdata['borderWidth']:'0';
	$border2='border:'.$borderWidth2.'px solid '.$wzdata['borderColor'].';'.$borderRadius.';';}else{$border2='';}
if($wzdata['shadowControl']=='shadowShow'){ 
  $slf1=$wzdata['shadowLeft']?$wzdata['shadowLeft']:'0';
  $slf2=$wzdata['shadowTop']?$wzdata['shadowTop']:'0';
  $slf3=$wzdata['shadowBlur']?$wzdata['shadowBlur']:'0';
  $slf4=$wzdata['shadowSize']?$wzdata['shadowSize']:'0';
  $shadow2=''.$slf1.' '.$slf2.' '.$slf3.' '.$slf4.' '.$wzdata['shadowColor'].' '.$wzdata['shadowStyle'].';';
 }else{$shadow2='';}
if($wzdata['characterBgColorHover']){$BgColor2='background-color:'.$wzdata['characterBgColorHover'].';';}else{$BgColor2='';}
if($wzdata['characterBgSrcHover']){$BgSrc2='background:url('.$wzdata['characterBgSrcHover'].') '.$wzdata['imgBgpHover'].' no-repeat;';}else{$BgSrc2='';}
if($wzdata['ssOpacity1']){ $sso2=$wzdata['ssOpacity1']*100; $ssOpacity2='opacity:'.$wzdata['ssOpacity1'].';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='.$sso2.');';}else{$ssOpacity2='';}
$wdwidth2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['width']-$wzdata['borderWidth']*2:$ksinfo[$i]['width'];
$wdheigh2=$wzdata['borderControl']=='hborder'?$ksinfo[$i]['height']-$wzdata['borderWidth']*2:$ksinfo[$i]['height']-$UnBH;
$fanstyle='display:block;width:auto;'.$Align.'height:'.$ksinfo[$i]['height'].'px;'.$LineHeight2.'white-space: nowrap;word-break:break-all;'.$BgSrc2.$BgColor2.$Color2.$Font2.$Indent2.$Weight2.$FontStyle2.$Size2.$LineOver2.$LetterSpacing2.$border2.$shadow2.$ssOpacity2.''.$UnderLine.'';

if($wzdata['characterHoverMode']=='off'){
	$contwzbox='<a class="rel s2" '.$xhref.' style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent'][$i].'</a>';
	$wccls2='';
	}else{
	$contwzbox='<a class="rel '.$wzdata['characterHoverSpeed'].' s2" '.$href.' style="'.$zhengstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent'][$i].'</a>
      <div class="jspb rel s1" style="width:100%;height:100%;"><a class="rel '.$wzdata['characterHoverSpeed'].' '.$wzdata['css3ModeX1'].' '.$wzdata['css3ModeY1'].' '.$wzdata['css3Mode1'].'" '.$href.' style="'.$fanstyle.'" target="'.$config['hrefMode'].'">'.$config['smallCharacterContent1'][$i].'</a></div>';
	$wccls2='junefade';
	}
	$ksdiv='<div data-i="'.$ksinfo[$i]['attachID'].'" class=" rel thumbsmall  '.$ksinfo[$i]['attachID'].' jnwz jz '.$wzdata['css3ModeX'].' '.$wzdata['css3ModeY'].' '.$wzdata['css3Mode'].' '.$wzdata['attachID'].' '.$wccls2.' '.$wzdata['borderControl'].' '.$wzdata['borderControl1'].' '.$wzdata['shadowControl'].' '.$wzdata['shadowControl1'].' '.$outlineWidth.' '.$outlineSpeed.'" data-t="text;text" data-w="normal" data-o="'.$wzdata['ssOpacity'].';'.$wzdata['ssOpacity1'].'" style="margin-'.$lstjjzz.':'.$config['smallSliderSpace'].'px;float:left;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;top:0px;left:0px;">
          <a class="rel split chn-link-dianquanka a-2" '.$sliderHref.' target="'.$config['hrefMode'].'" style="'.$zhengstyle.'">'.$config['smallCharacterContent'][$i].'</a>
          <div class="jspb rel" style="width:100%;height:100%;">
            <a class="rel" '.$sliderHref.' target="'.$config['hrefMode'].'" style="'.$fanstyle.'">'.$config['smallCharacterContent1'][$i].'</a></div>
        </div>';
	}
if($kstype=='yes1'){//缩略自定义
	$ksdiv='<div class="fyslt">
          <div class="rel sch '.$ksactive.' '.$ksinfo[$i]['attachID'].'" data-i="'.$ksinfo[$i]['attachID'].'" style="margin-'.$lstjjzz.':'.$config['smallSliderSpace'].'px;width:'.$ksinfo[$i]['width'].'px;height:'.$ksinfo[$i]['height'].'px;overflow:hidden;">
            <div class="abs " style="top:0;left:0;width:100%;height:100%;">'.$config['smallCustom'][$i].'</div>
            <div class="abs split chn-link-dianquanka a-2" style="top:0;left:0;width:100%;height:100%;">'.$smallCustom1.'</div>
		</div>
        </div>';
	}
$ksdivzh=$ksdivzh.$ksdiv;
}


$navwidth=$list['curExData']['jfybPanel']['width'];
$navheight=$list['curExData']['jfybPanel']['height'];
$navtop=$list['curExData']['jfybPanel']['top'];
$navleft=$list['curExData']['jfybPanel']['left'];
//nav轮播组装
$sliderDuration=$config['sliderDuration']?$config['sliderDuration']:'0.5';

$ksdhhtml='<div class="sc'.$ls.'" style="overflow:hidden;height:'.$navheight.'px;width:'.$navwidth.'px;z-index:10;"><div class="sltae ks-switchable-content jfsb n'.$ls.'" style="z-index:12;background:none;">'.$ksdivzh.'</div></div>';
$sliderAuto=$config['sliderAuto']=='false'?'false':'true';
$xsliderActive=$config['sliderActive']-1;
$navwidget="{'contentCls':'n".$ls."','navCls':'sn".$ls."','effect':'".$config['smallSliderMode']."','steps':".$config['smallImgCount'].",'circular':true,'easing':'".$config['sliderEffect']."','duration':'".$sliderDuration."','autoplay':".$sliderAuto.",'prevBtnCls':'prev".$ls."','nextBtnCls':'next".$ls."','triggerType':'".$config['sliderSwitch']."'".$viewSize.",'activeIndex':".$xsliderActive."}";



$slhtml='<div class="fyp abs J_TWidget" style="height:'.$navheight.'px;width:'.$navwidth.'px;top:'.$navtop.'px;left:'.$navleft.'px;z-index:10;" data-widget-type="Carousel" data-widget-config="'.$navwidget.'">'.$jtdiv.$ksdhhtml.'<ul class="ks-switchable-nav sn'.$ls.'" style="display:none;"></ul></div>';


//轮播组装
$sliderActive=$config['sliderActive']-1;
$lbwidget="{'contentCls':'c".$ls."','navCls':'n".$ls."','effect':'".$effect."','steps':".$config['smallImgCount'].",'circular':true,'easing':'".$config['sliderEffect']."','duration':'".$sliderDuration."','autoplay':".$sliderAuto.",'interval':".$config['sliderTime'].",'activeTriggerCls':'dianquanka&nbsp;control-group&nbsp;j-a','triggerType':'".$config['sliderSwitch']."'".$viewSize.",'activeIndex':".$sliderActive."}";

if($config['dSmallRorate']){ $sspp=$config['smallShowSpeed']?$config['smallShowSpeed']:'trans02s'; $dda='data-da="'.$config['dSmallRorate'].'||'.$sspp.'"';}else{$dda='';}
return'
<div class="jfyb abs J_TWidget '.$clsszy.' '.$config['appID'].'" data-appid="'.$config['appID'].'" data-s="'.$data_s.'" data-sm="'.$config['smallSliderMode'].';'.$config['smallImgCount'].';'.$config['smallSliderSpace'].'" '.$Opacity_attr.' style="'.$Opacity_css.'width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;z-index:10;" data-widget-type="Carousel" data-widget-config="'.$lbwidget.'">
 '.$picdivhtml.'
 '.$slhtml.'
</div>
';
}
/*****   翻页轮播结束  *****/


/*****     画线    *****/
if($list['appType']=='jllb'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tftp=$list['curExData']['direction']=='we'?'top':'left';
return'<div class="jllb abs jz" data-d="'.$list['curExData']['direction'].'" data-pts="'.$config['lineWidth'].';'.$config['lineColor'].';'.$config['lineOpacity'].';'.$config['lineStyle'].'" style="width:'.$pos[0].'px;height:'.$pos[1].'px;top:'.$pos[2].'px;left:'.$pos[3].'px;border:none;border-'.$tftp.':'.$config['lineWidth'].'px '.$config['lineColor'].' '.$config['lineStyle'].';" ></div>';
}
/*****   画线结束  *****/
	
	
/*****     热区xx    *****/
if($list['appType']=='jeb333'){

$config=$list['config'];
$pos=explode('|',$list['pos']);
$tipText=$config['tipText']?'title="'.$config['tipText'].'"':'';

return'';
}
/*****   热区xx结束  *****/


}


function str_split_utf8($str){
 $split=1;
 $array=array();
 for($i=0;$i<strlen($str);$i++){
  $value=ord($str[$i]);
  if($value>127){
   if($value>=192&&$value<=223) $split=2;
   elseif($value>=224 && $value<=239) $split=3;
   elseif($value>=240 && $value<=247) $split=4;
  }else{
   $split=1;
  }
  $key=NULL;
  for($j=0;$j<$split;$j++,$i++){
   $key.=$str[$i];
  }
  array_push($array,$key);
 }
 return $array;
}









?>