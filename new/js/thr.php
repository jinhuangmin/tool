<?
$data=$_POST; 
$codeObj=$data['codeObj'];
$scl='';

if($codeObj!=''){
foreach($codeObj as $i=>$area){ 
   $config=$area['config'];
 if($area['appType']=='jdb'){
 
   $pos=explode('|',$area['pos']);$scl='';
	if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$config['imgBgp'].' no-repeat;';}else{$sbj='junezxneedcheckembed;';}
	if($config['bgColor']){$scl='background-color:'.$config['bgColor'].';';}
	if($config['mongoliaControl']=='mongoliaShow'){$mongoliaMode=$config['mongoliaMode'];}else{$mongoliaMode='';}
	if($config['borderControl']=='hborder'){$bord='border:'.$config['borderWidth'].'px solid '.$config['borderColor'].';';$mtl='top:-'.$config['borderWidth'].'px;left:-'.$config['borderWidth'].'px;';}else{$bord='';$mtl='top:0px;left:0px;';}
	
	if($config['shadowControl']=='shadowShow'){ 
	     if($config['shadowShowType']==1){
			 $shadow1='box-shadow: '.$config['shadowLeft'].'px '.$config['shadowTop'].'px '.$config['shadowBlur'].'px '.$config['shadowSize'].'px '.$config['shadowColor'].';';
			 $shadow2='box-shadow: '.$config['shadowLeft'].'px '.$config['shadowTop'].'px '.$config['shadowBlur'].'px '.$config['shadowSize'].'px '.$config['shadowColor'].';';
			 }else{
			$shadow1='';
			$shadow2='box-shadow: '.$config['shadowLeft'].'px '.$config['shadowTop'].'px '.$config['shadowBlur'].'px '.$config['shadowSize'].'px '.$config['shadowColor'].';';
				 }  
		 }else{$shadow1='';$shadow2='';}
	
	if($config['outlineControl']=='outlineShow'){$outline='outline-color:'.$config['outlineColor'].';';$outlineSpeed=$config['outlineSpeed'];$outlineWidth=$config['outlineWidth'];$outlineShadowColor='color:'.$config['outlineShadowColor'].';';$outlclass='jzi';}else{$outlineSpeed='';$outlineWidth='';$outlineShadowColor='';$outline='outline:none;';$outlclass='';}
    if($config['linkMode']=='ptlink'){$href='href="'.$config['href'].'"';}
	if($config['linkMode']=='gzlink'){$href='href="#';$gzdiv='j_CollectBrand';$brandid='data-brandid="'.$config['attentionID'].'"';}else{$gzdiv='';$brandid='';}
	if($config['linkMode']=='wwlink'){ $fliu=$config['shuntMode']=='no'?'1':'2'; $href='href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status='.$fliu.'&charset=utf-8"';}
	if($config['linkMode']=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';}
	if($config['linkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}
	 if($i>0){echo'${!|}';}
	if($config['borderControl']=='hborder'||$config['shadowControl']=='shadowShow'||($config['outlineControl']=='outlineShow'&&$config['mongoliaControl']=='mongoliaShow')){
	echo' <div class="'.$area['appType'].' jspb abs '.$config['appID'].' '.$mongoliaMode.' '.$config['borderControl'].' '.$config['shadowControl'].'  '.$outlineWidth.' '.$outlclass.' '.$outlineSpeed.' '.$catr.'" title= "'.$config['tipText'].'" style="'.$sbj.''.$scl.''.$outline.''.$outlineShadowColor.'display:block;width:'.$pos['0'].'px;height:'.$pos['1'].'px;top:'.$pos['2'].'px;left:'.$pos['3'].'px;'.$shadow1.'z-index:10;" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" >
	   <a class="jdbchild abs june-box-fadein '.$catr.'" data-shadow="'.@$config['shadowShowType'].'" '.$href.' '.$hrefMode.' style="display:block;'.$mtl.'width:'.$pos['0'].'px;height:'.$pos['1'].'px;'.$bord.''.$shadow2.' " data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" ></a>
	   <a class="jdbmc abs '.$mongoliaMode.' '.$gzdiv.' '.$catr.'" '.$href.' '.$hrefMode.' style="display:block;width:'.$pos['0'].'px;height:'.$pos['1'].'px;top:0;left:0;" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$brandid.'></a>
	</div>';
	}else{
  echo'<a class="'.$area['appType'].' abs '.$config['appID'].' '.$mongoliaMode.' '.$outlineWidth.'  '.$outlineSpeed.' '.$gzdiv.' '.$catr.'" '.$href.' '.$hrefMode.' style="'.$sbj.''.$scl.''.$outline.''.$outlineShadowColor.'display:block;width:'.$pos['0'].'px;height:'.$pos['1'].'px;top:'.$pos['2'].'px;left:'.$pos['3'].'px;z-index:10;" data-linkmode="'.$config['linkMode'].'" data-appid="'.$config['appID'].'" '.$brandid.'></a>';
  }
  }else if($area['appType']=='jdhb'){
	$pos=explode('|',$area['pos']);

$ls=rand(10055,99055);
switch ($config['dtMode'])							  
{
case 1:
  $knum='7'; $qknum='49';$ksnum='24'; $xstar=''; $xjian=''; $ystar=''; $yjian='';
  break; 
case 2:
  $knum='9';$qknum='81';$ksnum='40';
  break;
case 3:
 $knum='13';$qknum='169';$ksnum='84';
  break;
case 4:
 $knum='15';$qknum='225';$ksnum='112';
  break;
}
switch ($config['dtRange'])							  
{
case 1:
  $xstar='-159'; $xjian='5'; $ystar='-80'; $yjian='3';
  break; 
case 2:
  $xstar='-178'; $xjian='12'; $ystar='-89'; $yjian='6';
  break;
case 3:
 $xstar='-236'; $xjian='32'; $ystar='-116'; $yjian='15';
  break;
case 4:
 $xstar='-332'; $xjian='64'; $ystar='-161'; $yjian='30';
  break;
  case 5:
 $xstar='-524'; $xjian='128'; $ystar='-251'; $yjian='60';
  break;
}

    if($config['linkMode']=='ptlink'){$href='href="'.$config['href'].'"';}
	if($config['linkMode']=='wwlink'){$href='href="http://www.taobao.com/webww/ww.php?ver=3&touid='.urlencode($config['wangID']).'&siteid=cntaobao&status='.$fliu.'&charset=utf-8"';}
	if($config['linkMode']=='mdlink'){$href='href="#'.$config['anchorSelect'].'"';$hrefMode='target="_self"';}else{$hrefMode='target="'.$config['hrefMode'].'"';}
	if($config['linkMode']=='gwlink'){$catr='J_CartPluginTrigger';$href='href="'.$config['href'].'"';$hrefMode='';}else{$catr='';}

?>
<div class="jdhb J_TWidget abs <?=$config['appID']?>" data-mr="<?=$config['dtMode']?>;<?=$config['dtRange']?>;<?=$config['dtShowMode']?>;<?=$config['dtDirection']?>" data-widget-type="Carousel" data-widget-config="{'contentCls':'dhc<?=$ls?>','navCls':'dhn<?=$ls?>','effect':'<?=$config['dtShowMode']?>','easing':'easeNone','duration':0.1, 'delay':0, 'autoplay':false,'activeIndex':<?=$ksnum?>}" style="display:block;width:<?=$pos['0']?>px;height:<?=$pos['1']?>px;top:<?=$pos['2']?>px;left:<?=$pos['3']?>px;z-index:10;" data-linkmode="ptlink" data-appid="<?=$config['appID']?>">
	<div class="scroller rel" style="overflow:hidden;width:<?=$pos['0']?>px;height:<?=$pos['1']?>px;z-index:10;">
		<div class="dhc<?=$ls?>" style="position: absolute;">
			<?
            for($i=0;$i<$qknum;$i++){$k=$i+1; 
			if($k==$ksnum){$dis='display:block';}else{$dis='display:none;';}
			$zb=$qknum-$k;
			$dy=floor( $zb / $knum); $ypy= $ystar + ($dy-1) *$yjian ;
			$dx= $zb % $knum; $xpy= $xstar + ($dx-1) *$xjian ;
			if($config['pSrc']){$sbj='background:url('.$config['pSrc'].') '.$xpy.'px '.$ypy.'px no-repeat scroll;';}else{$sbj='';}
			if($config['bgColor']){$sbjc='background-color:'.$config['bgColor'].';';}else{$sbjc='';}		
			echo'<div class="abs" style="overflow:hidden;width:'.$pos['0'].'px;height:'.$pos['1'].'px;'.$sbj.''.$sbjc.''.$dis.'"></div>';	
				}
			?>
			</div>

	</div>
	<ul class="abs dhn<?=$ls?>" style="top:0px;left:0px;z-index:10;background:none;">
      <?
      $xwid=floor( $pos['0'] / $knum);$xgao=floor( $pos['1'] / $knum);
	  
	 for($i=0;$i<$qknum;$i++){$k=$i+1; 
			if($k==$ksnum){$ks='ks-active';}else{$ks='';}
			$zb=$qknum-$k;$dy=floor( $zb / $knum);$top= ($dy-1) *$xgao ; $dx= $zb % $knum; $left=($dx-1) *$xwid ;
	echo'<li class="abs '.$ks.'" style="width:'.$xwid.'px;height:'.$xgao.'px;top:'.$top.'px;left:'.$left.'px;"><a '.$href.' '.$hrefMode.' title="'.$config['tipText'].'" class="'.$catr.'" style="display:block;height:'.$xgao.'px;"></a></li>';
				
				} 
	  
	  ?>
		
	</ul>
</div>
	
	
	
	<?
	
	}
  
  
}
  }else{echo'仅限本站使用';}

?>