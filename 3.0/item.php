<?
$href=explode(",",$_POST['href']);
$pSrc=explode(",",$_POST['pSrc']);
$oppoSrc=explode(",",$_POST['oppoSrc']);
$titleInfo=explode(",",$_POST['titleInfo']);
$priceInfo=explode(",",$_POST['priceInfo']);//原价
$_priceInfo=explode(",",$_POST['_priceInfo']);
if($_POST['active']==-1){$active=2;}else{$active=$_POST['active'];}
?>
<form id="tForm" form-data="jib" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li id="liebiaodianji"><a href="#tabs-1">列表设置</a></li>
		<li id="qset"><a href="#tabs-95">快速修改</a></li>
		<li><a href="#tabs-2">宝贝图片</a></li>
		<li><a href="#tabs-3">信息面板</a></li>
		<li><a href="#tabs-4">标题</a></li>
		<li><a href="#tabs-11">副标题</a></li>
		<li><a href="#tabs-5">原价</a></li>
		<li><a href="#tabs-6">现价</a></li>
		<li><a href="#tabs-7">销量</a></li>
		<li><a href="#tabs-8">按钮</a></li>
		<li><a href="#tabs-12">扩展</a></li>
		<li><a href="#tabs-13">二维码</a></li>
		<li><a href="#tabs-9">边框</a></li>
		<li><a href="#tabs-10">鼠标经过</a></li>
	</ul>
	<div class="formlayout">
	<div class="form-tabs-content">
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<textarea id="itemPicTemp" name="itemPicTemp" style="display:none;"></textarea>
			</li>
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
				<input class="setbtn" type="hidden" title="" name="readVal" value="<?=$_POST['readVal']?>" />
				<input class="setbtn" type="hidden" title="" name="titleAuto" value="<?=$_POST['titleAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="priceAuto" value="<?=$_POST['priceAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="_priceAuto" value="<?=$_POST['_priceAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="saleAuto" value="<?=$_POST['saleAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="pSrcAuto" value="<?=$_POST['pSrcAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="pSrcPos" value="<?=$_POST['pSrcPos']?>" />
				<input class="setbtn" type="hidden" title="" name="oSrcPos" value="<?=$_POST['oSrcPos']?>" />
				<input class="setbtn" type="hidden" title="" name="catchChoose" id="catchChooseWM" value="<?=$_POST['catchChoose']?>" />
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
			</li>
			<li>
				<label for="imrd1">宝贝获取模式：</label>
				<div id="imrd1">
					<input type="radio" id="imr1" name="itemMode" value="ptitem" <?=$_POST['itemMode']=='ptitem'?'checked="checked"':'' ?> />
					<label for="imr1" style="width:85px;">普通宝贝</label>
                  <!--- --->
					<input type="radio" id="imr2" name="itemMode" value="pptitem" <?=$_POST['itemMode']=='pptitem'?'checked="checked"':'' ?> />
					<label for="imr2" style="width:70px;">品牌团</label>
					<input type="radio" id="imr3" name="itemMode" value="lrgitem" <?=$_POST['itemMode']=='lrgitem'?'checked="checked"':'' ?> />
					<label for="imr3" style="width:70px;">俪人购</label>
                  <!--- --->
				</div>
			</li>
			<li class="itemMode pptitem lrgitem">
				<label id="pptl1">品牌团首页地址：</label>
				<input id="ppti1" class="setinput" type="text" title="请输入首页地址。" junezx_vali_url="true" name="pptHref" value="<?=$_POST['pptHref']?>" />
			</li>
			<li class="itemMode pptitem lrgitem">
				<input class="setinput" type="hidden" title="" name="pptCount" value="<?=$_POST['pptCount']?>" />
				<label id="pptl2">品牌团宝贝选择：</label>
				<button class="tItemDialog" type="button" name="pptItem">选择宝贝</button>
				<span >您已选择了<i id="itemCountShow1"><?=$_POST['pptCount']?></i>个宝贝</span>
			</li>
			<li class="itemMode ptitem"><!-- class="itemMode ptitem"-->
				<label>宝贝链接：</label>
				<input class="setinput" type="hidden" title="" name="itemCount" id="itemCount_forsort" value="<?=$_POST['itemCount']?>" />
				<button class="tItemDialog" type="button" name="itemLink">设置宝贝链接</button>
				<input class="setbtn" type="hidden" title="" name="href" value="<?=$_POST['href']?>" />
				<span >您已设置了<i id="itemCountShow"><?=$_POST['itemCount']?></i>个宝贝</span>
				<input type="checkbox" id="imr4" name="mbncheck" value="2" style="display: none;"  />
				<a class="june-preview" target="blank" title="点击了解详情" href="" style="color: #399;display: none;">高级设置</a>
				
			</li>
			<li>
				<label for="cd1">显示开关：</label>
				<span id="cd1" style="width:320px;float:left;display:block;">
					<input type="checkbox" id="c1" name="oppoSwitch" value="yes" <?=$_POST['oppoSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c1" style="width:auto;float:none;line-height: 30px;">宝贝变换图片</label>
					<input type="checkbox" id="c2" name="titleSwitch" value="yes" <?=$_POST['titleSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c2" style="width:auto;float:none;line-height: 30px;">标题</label>
					<input type="checkbox" id="c12" name="subTitleSwitch" value="yes" <?=$_POST['subTitleSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c12" style="width:auto;float:none;line-height: 30px;">副标题</label>
					<br>
					<input type="checkbox" id="c3" name="prefixSwitch" value="yes" <?=$_POST['prefixSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c3" style="width:auto;float:none;line-height: 30px;">原价前缀</label>
					<input type="checkbox" id="c4" name="priceSwitch" value="yes" <?=$_POST['priceSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c4" style="width:auto;float:none;line-height: 30px;">原价</label>
					<input type="checkbox" id="c5" name="_prefixSwitch" value="yes" <?=$_POST['_prefixSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c5" style="width:auto;float:none;line-height: 30px;">现价前缀</label>
					<input type="checkbox" id="c6" name="_priceSwitch" value="yes" <?=$_POST['_priceSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c6" style="width:auto;float:none;line-height: 30px;">现价</label>
					<br>
					<input type="checkbox" id="c7" name="salePrefixSwitch" value="yes" <?=$_POST['salePrefixSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c7" style="width:auto;float:none;line-height: 30px;">销量前缀</label>
					<input type="checkbox" id="c8" name="saleSwitch" value="yes" <?=$_POST['saleSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c8" style="width:auto;float:none;line-height: 30px;">销量</label>
					<input type="checkbox" id="c14" name="erWeiMaSwitch" value="yes" <?=$_POST['erWeiMaSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c14" style="width:auto;float:none;line-height: 30px;">二维码</label>
					<br>
					<input type="checkbox" id="c9" name="btnSwitch" value="yes" <?=$_POST['btnSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c9" style="width:auto;float:none;line-height: 30px;">立即购买按钮</label>
					<input type="checkbox" id="c10" name="btn1Switch" value="yes" <?=$_POST['btn1Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c10" style="width:auto;float:none;line-height: 30px;">宝贝收藏按钮</label>
					<input type="checkbox" id="c11" name="btn2Switch" value="yes" <?=$_POST['btn2Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c11" style="width:auto;float:none;line-height: 30px;">加入购物车按钮</label>
					<br>
					<input type="checkbox" id="c13" name="subScriptSwitch" value="yes" <?=$_POST['subScriptSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c13" style="width:auto;float:none;line-height: 30px;">扩展图片(1)</label>
					<input type="checkbox" id="c15" name="subScript1Switch" value="yes" <?=$_POST['subScript1Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c15" style="width:auto;float:none;line-height: 30px;">扩展图片(2)</label>
					<input type="checkbox" id="c16" name="subScript2Switch" value="yes" <?=$_POST['subScript2Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c16" style="width:auto;float:none;line-height: 30px;">扩展图片(3)</label>
					<br>
					<input type="checkbox" id="c17" name="subScript3Switch" value="yes" <?=$_POST['subScript3Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c17" style="width:auto;float:none;line-height: 30px;">扩展图片(4)</label>
					<input type="checkbox" id="c18" name="subScript4Switch" value="yes" <?=$_POST['subScript4Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c18" style="width:auto;float:none;line-height: 30px;">扩展图片(5)</label>
					<br>
					<input type="checkbox" id="c19" name="expandTextSwitch" value="yes" <?=$_POST['expandTextSwitch']=='yes'?'checked="checked"':'' ?> />
					<label for="c19" style="width:auto;float:none;line-height: 30px;">扩展文字(1)</label>
					<input type="checkbox" id="c20" name="expandText1Switch" value="yes" <?=$_POST['expandText1Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c20" style="width:auto;float:none;line-height: 30px;">扩展文字(2)</label>
					<input type="checkbox" id="c21" name="expandText2Switch" value="yes" <?=$_POST['expandText2Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c21" style="width:auto;float:none;line-height: 30px;">扩展文字(3)</label>
					<br>
					<input type="checkbox" id="c22" name="expandText3Switch" value="yes" <?=$_POST['expandText3Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c22" style="width:auto;float:none;line-height: 30px;">扩展文字(4)</label>
					<input type="checkbox" id="c23" name="expandText4Switch" value="yes" <?=$_POST['expandText4Switch']=='yes'?'checked="checked"':'' ?> />
					<label for="c23" style="width:auto;float:none;line-height: 30px;">扩展文字(5)</label>
				</span>
			</li>
			<li style="clear:both;">
				<label for="itemColumn">每行显示数量：</label>
				<select id="itemColumn" name="itemColumn">
                	 <?
                       for($i=1;$i<31;$i++){if($_POST['itemColumn']==$i){$ks='selected="selected"';}else{$ks='';} echo'<option value="'.$i.'" '.$ks.'>'.$i.'</option>';}
					   ?>
				</select>
			</li>
			<li>
				<label for="i4">宝贝行间距：</label>
				<input id="i4" class="setinput" type="text" title="设置宝贝间每行的距离，即纵向间距" name="lineSpace" value="<?=$_POST['lineSpace']?>" />
			</li>
			<li>
				<label for="i5">宝贝列间距：</label>
				<input id="i5" class="setinput" type="text" title="设置宝贝间每列的距离，即横向间距" name="columnSpace" value="<?=$_POST['columnSpace']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="自动生成，无需填写" name="top" value="<?=$_POST['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="自动生成，无需填写" name="left" value="<?=$_POST['left']?>" />
			</li>
			<li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <?=$_POST['hrefMode']=='_self'?'selected="selected"':'' ?>>原窗口打开</option>
					<option value="_blank" <?=$_POST['hrefMode']=='_blank'?'selected="selected"':'' ?>>新窗口打开</option>
				</select>
			</li>
			<li>
				<label for="panelArea">链接覆盖范围：</label>
				<select id="panelArea" name="panelArea">
					<option value="no" <?=$_POST['panelArea']=='no'?'selected="selected"':'' ?>>链接不覆盖面板</option>
					<option value="yes" <?=$_POST['panelArea']=='yes'?'selected="selected"':'' ?>>链接覆盖面板</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="getinfo" class="setform" style="height: 45px;line-height: 38px;color:#333;padding-left:20px;display:none">
		<label style="padding:0;float: left;">一键更新抓取数据：</label>
		<icon title="一键更新所有宝贝的抓取数据" id="lj-sync-iconAll">ꘀ</icon>
	
		<label style="padding-left:50px;float: left;">数据自动更新：</label>
		<span style="color:#999;float: left;">一键全选</span>
		<span class="itemarrManagerReadIcon-0" style="display:block;width:20px;height:20px;float: left;position: static;margin:10px 0 0 5px;" id="itemGxAll" title="标题、现价、原价全部自动更新"></span>
	</div>
	<div id="tabs-95">


<?
for($i=0;$i<$_POST['itemCount'];$i++){
	
	echo'
<div class="qmitembox">
	<div class="qmleft">
		<div class="qmpicpreview"><img src="https://img.alicdn.com/imgextra/i3/39767794/TB2DJRIqXXXXXXKXXXXXXXXXXXX-39767794.jpg" style="height:100%;"></div>
		<div class="qmpicselect">抓取宝贝主图 <icon style="font-size:17px;">꒗</icon></div>
	</div>
	<div class="qmright">
		<ul class="setform">
			<li>
				<label for="qmlink'.$i.'">宝贝链接：</label>
				<input id="qmlink'.$i.'" class="setinput qmeleval" type="text" junezx_vali_url="true" name="iqs_href" value="" />
				<icon title="更新抓取该宝贝信息" class="lj-sync-icon">ꘀ</icon>
			</li>
			<li>
				<label for="qmpic'.$i.'">宝贝主图：</label>
				<input id="qmpic'.$i.'" class="setinput tItisImg qmeleval" title="" type="text" junezx_vali_pic="true" name="iqs_pSrc" value="" />
			</li>
			<li style="height:auto;">
				<label for="qmtitle'.$i.'">宝贝标题：</label>
				<textarea style="height:50px;width:208px;" class="update qmeleval" id="qmtitle'.$i.'" type="text" name="iqs_titleInfo" value=""></textarea>
				<icon title="始终自动更新该宝贝标题" class="bt-sync-icon qmcheckicon" style="float:right;margin-right:13px;">ꘂ</icon>
			</li>
			<li>
				<label for="qmdiscountprice'.$i.'">现价：</label>
				<input id="qmdiscountprice'.$i.'" style="width:55px;" class="update setinput qmeleval" type="text" junezx_vali_str="true" name="iqs__priceInfo" value="" />
				<icon title="始终自动更新该宝贝现价" class="xj-sync-icon qmcheckicon">ꘂ</icon>
				<label for="qmprice'.$i.'" style="width:49px;">原价：</label>
				<input id="qmprice'.$i.'" style="width:55px;" class="update setinput qmeleval" type="text" junezx_vali_str="true" name="iqs_priceInfo" value="" />
				<icon title="始终自动更新该宝贝原价" class="yj-sync-icon qmcheckicon">ꘂ</icon>
			</li>
		</ul>
	</div>
</div>
	
	';
	
	}

?>

	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label>宝贝主图：</label>
				<button class="tItemDialog" type="button" name="itemPic" style="width:118px;">设置宝贝主图</button>
				<input class="setbtn" type="hidden" title="" name="pSrc" id="pSrc_forsort" value="<?=$_POST['pSrc']?>" />
				<button class="tChooseDialog" type="button" name="batchChoosePic" style="width:118px;">批量选择主图</button>
			</li>
			<li>
				<label>宝贝变换图片：</label>
				<button class="tItemDialog" type="button" name="itemPicHover">设置宝贝变换图片</button>
				<input class="setbtn" type="hidden" title="" name="oppoSrc" value="<?=$_POST['oppoSrc']?>" />
				<button class="tChooseDialog" type="button" name="batchChooseOppoPic" style="width:118px;">批量选择变换主图</button>
			</li>
            

			<li>
				<label for="sdtzItemBgColor">宝贝填充色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['itemBgColor']?>;"></div></div></div>
					<input id="sdtzItemBgColor" class="setinputcolor tColorPicker" type="text" title="" name="itemBgColor" value="<?=$_POST['itemBgColor']?>" />
				</div>
			</li>
			<li>
				<label for="pSrcSize">宝贝主图尺寸：</label>
				<select id="pSrcSize" name="pSrcSize">
					<option value="" <?=$_POST['pSrcSize']==''?'selected="selected"':'' ?>>原始尺寸</option>
					<?
                     $arraySize = array(20,30,40,50,60,70,80,90,100,110,120,130,145,160,170,180,190,200,210,220,230,234,240,250,270,290,300,310,320,350,360,400,430,460,480,490,540,560,570,580,600,640);
					 foreach($arraySize as $i=>$Size){
						 if($_POST['pSrcSize']==$Size){$ks='selected="selected"';}else{$ks='';}
						 echo'<option value="'.$Size.'" '.$ks.'>'.$Size.'X'.$Size.'</option>';
						 }
					?>
				</select>
			</li>
			<li>
				<label for="pSrcSize1">变换图片尺寸：</label>
				<select id="pSrcSize1" name="pSrcSize1">
					<option value="" <?=$_POST['pSrcSize1']==''?'selected="selected"':'' ?>>填充整个格子</option>
					<?
                     $arraySize = array(20,30,40,50,60,70,80,90,100,110,120,130,145,160,170,180,190,200,210,220,230,234,240,250,270,290,300,310,320,350,360,400,430,460,480,490,540,560,570,580,600,640);
					 foreach($arraySize as $i=>$Size){
						 if($_POST['pSrcSize1']==$Size){$ks='selected="selected"';}else{$ks='';}
						 echo'<option value="'.$Size.'" '.$ks.'>'.$Size.'X'.$Size.'</option>';
						 }
					?>
				</select>
			</li>
			<li>
				<label for="i8">图片显示宽度：</label>
				<input id="i8" class="setinput" type="text" title="" name="sWidth" value="<?=$_POST['sWidth']?>" />
			</li>
			<li>
				<label for="i9">图片显示高度：</label>
				<input id="i9" class="setinput" type="text" title="" name="sHeight" value="<?=$_POST['sHeight']?>" />
			</li>
			<li>
				<label for="oppoEffect">切换图片动画：</label>
				<select id="oppoEffect" name="oppoEffect">
					<option value="none" <?=$_POST['oppoEffect']=='none'?'selected="selected"':'' ?>>无动画</option>
					<option value="june-box-fadein" <?=$_POST['oppoEffect']=='june-box-fadein'?'selected="selected"':'' ?>>淡入淡出</option>
					<option value="uptodown" <?=$_POST['oppoEffect']=='uptodown'?'selected="selected"':'' ?>>从上方进入</option>
					<option value="downtoup" <?=$_POST['oppoEffect']=='downtoup'?'selected="selected"':'' ?>>从下方进入</option>
					<option value="lefttoright" <?=$_POST['oppoEffect']=='lefttoright'?'selected="selected"':'' ?>>从左方进入</option>
					<option value="righttoleft" <?=$_POST['oppoEffect']=='righttoleft'?'selected="selected"':'' ?>>从右方进入</option>
					<option value="rotation30" <?=$_POST['oppoEffect']=='rotation30'?'selected="selected"':'' ?>>旋转30度</option>
					<option value="rotation60" <?=$_POST['oppoEffect']=='rotation60'?'selected="selected"':'' ?>>旋转60度</option>
					<option value="rotation90" <?=$_POST['oppoEffect']=='rotation90'?'selected="selected"':'' ?>>旋转90度</option>
					<option value="rotation180" <?=$_POST['oppoEffect']=='rotation180'?'selected="selected"':'' ?>>旋转180度</option>
					<option value="rotation270" <?=$_POST['oppoEffect']=='rotation270'?'selected="selected"':'' ?>>旋转270度</option>
					<option value="rotation360" <?=$_POST['oppoEffect']=='rotation360'?'selected="selected"':'' ?>>旋转360度</option>
					<option value="rotation720" <?=$_POST['oppoEffect']=='rotation720'?'selected="selected"':'' ?>>旋转720度</option>
				</select>
			</li>
			<li>
				<label for="oppoSpeed">切换图片速度：</label>
				<select id="oppoSpeed" name="oppoSpeed">
					<option value="" <?=$_POST['oppoSpeed']==''?'selected="selected"':'' ?>>立即显示</option>
					<option value="trans01s" <?=$_POST['oppoSpeed']=='trans01s'?'selected="selected"':'' ?>>0.1秒</option>
					<option value="trans02s" <?=$_POST['oppoSpeed']=='trans02s'?'selected="selected"':'' ?>>0.2秒</option>
					<option value="trans03s" <?=$_POST['oppoSpeed']=='trans03s'?'selected="selected"':'' ?>>0.3秒</option>
					<option value="trans05s" <?=$_POST['oppoSpeed']=='trans05s'?'selected="selected"':'' ?>>0.5秒</option>
					<option value="trans1s" <?=$_POST['oppoSpeed']=='trans1s'?'selected="selected"':'' ?>>1秒</option>
					<option value="trans2s" <?=$_POST['oppoSpeed']=='trans2s'?'selected="selected"':'' ?>>2秒</option>
					<option value="trans3s" <?=$_POST['oppoSpeed']=='trans3s'?'selected="selected"':'' ?>>3秒</option>
					<option value="trans4s" <?=$_POST['oppoSpeed']=='trans4s'?'selected="selected"':'' ?>>4秒</option>
					<option value="trans5s" <?=$_POST['oppoSpeed']=='trans5s'?'selected="selected"':'' ?>>5秒</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-3">
		<ul class="setform">
			<li>
				<label for="sdtzBgColor">背景颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['bgColor']?>;"></div></div></div>
					<input id="sdtzBgColor" class="setinputcolor tColorPicker" type="text" title="" name="bgColor" value="<?=$_POST['bgColor']?>" />
				</div>
			</li>
			<li>
				<label for="i11">背景图片：</label>
				<input id="i11" class="setinput tItisImg " type="text" title="" junezx_vali_pic="true" name="bgImage" value="<?=$_POST['bgImage']?>" />
							</li>
			<li>
				<label for="panelPos">面板位置：</label>
				<select id="panelPos" name="panelPos">
					<option value="bottom" <?=$_POST['panelPos']=='bottom'?'selected="selected"':'' ?>>位于主图底部</option>
					<!--<option value="top" >位于主图顶部</option>
					<option value="left" >位于主图左侧</option>-->
					<option value="right" <?=$_POST['panelPos']=='right'?'selected="selected"':'' ?>>位于主图右侧</option>
				</select>
			</li>
			<li>
				<label for="itemPanelHeight" id="itemPanelHeightLabel">面板高度：</label>
				<input id="itemPanelHeight" class="setinput" type="text" title="" name="mHeight" value="<?=$_POST['mHeight']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-4">
		<ul class="setform">
			<li>
				<label>标题内容：</label>
				<button class="tItemDialog" type="button" name="itemTitle">设置宝贝标题</button>
				<input class="setbtn" type="hidden" title="" name="titleInfo" id="titleInfo_forsort" value="<?=$_POST['titleInfo']?>" />
			</li>
			<li>
				<label for="t2">标题宽度：</label>
				<input id="t2" class="setinput" type="text" title="" name="titleWidth" value="<?=$_POST['titleWidth']?>" />
			</li>
			<li>
				<label for="t3">标题高度：</label>
				<input id="t3" class="setinput" type="text" title="" name="titleHeight" value="<?=$_POST['titleHeight']?>" />
			</li>
			<li>
				<label for="t4">标题背景图片：</label>
				<input id="t4" class="setinput tItisImg " type="text" title="" junezx_vali_pic="true" name="titleBgImage" value="<?=$_POST['titleBgImage']?>" />
							</li>
			<li>
				<label for="sdtzTitleBgColor">标题背景颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['titleBgColor']?>;"></div></div></div>
					<input id="sdtzTitleBgColor" class="setinputcolor tColorPicker" type="text" title="" name="titleBgColor" value="<?=$_POST['titleBgColor']?>" />
				</div>
			</li>
			<li>
				<label for="sdtzTitleColor">标题文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['titleColor']?>;"></div></div></div>
					<input id="sdtzTitleColor" class="setinputcolor tColorPicker" type="text" title="" name="titleColor" value="<?=$_POST['titleColor']?>" />
				</div>
			</li>
			<li>
				<label for="trd1">标题文字对齐：</label>
				<div id="trd1">
					<input type="radio" id="tr1" name="titleAlign" value="left" <?=$_POST['titleAlign']=='left'?'checked="checked"':'' ?> />
					<label for="tr1" style="width:65px;">居左</label>
					<input type="radio" id="tr2" name="titleAlign" value="center" <?=$_POST['titleAlign']=='center'?'checked="checked"':'' ?> />
					<label for="tr2" style="width:65px;">居中</label>
					<input type="radio" id="tr3" name="titleAlign" value="right" <?=$_POST['titleAlign']=='right'?'checked="checked"':'' ?> />
					<label for="tr3" style="width:65px;">居右</label>
				</div>
			</li>
			<li>
				<label for="titleFont">标题文字字体：</label>
				<select id="titleFont" title="" name="titleFont">
					<option value="微软雅黑" <? if($_POST['titleFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['titleFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['titleFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['titleFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['titleFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['titleFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['titleFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['titleFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['titleFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['titleFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['titleFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['titleFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['titleFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['titleFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['titleFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['titleFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="t8">标题文字大小：</label>
				<input id="t8" class="setinput" type="text" title="" name="titleSize" value="<?=$_POST['titleSize']?>" />
			</li>
			<li>
				<label for="titleWeight">标题文字粗细：</label>
				<select id="titleWeight" name="titleWeight">
					<option value="normal" <? if($_POST['titleWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($_POST['titleWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="t10">标题文字行高：</label>
				<input id="t10" class="setinput" type="text" title="" name="titleLineHeight" value="<?=$_POST['titleLineHeight']?>" />
			</li>
			<li>
				<label for="t11">标题文字缩进：</label>
				<input id="t11" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="titleSpace" value="<?=$_POST['titleSpace']?>" />
			</li>
			<li>
				<label for="t12">标题文字间隔：</label>
				<input id="t12" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="titleSpacing" value="<?=$_POST['titleSpacing']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-11">
		<ul class="setform">
			<li>
				<label>副标题内容：</label>
				<button class="tItemDialog" type="button" name="itemSubTitle">设置宝贝副标题</button>
				<input class="setbtn" type="hidden" title="" name="subTitleInfo" value="<?=$_POST['subTitleInfo']?>" />
			</li>
			<li>
				<label for="st2">副标题宽度：</label>
				<input id="st2" class="setinput" type="text" title="" name="subTitleWidth" value="<?=$_POST['subTitleWidth']?>" />
			</li>
			<li>
				<label for="st3">副标题高度：</label>
				<input id="st3" class="setinput" type="text" title="" name="subTitleHeight" value="<?=$_POST['subTitleHeight']?>" />
			</li>
			<li>
				<label for="st4">副标题背景图片：</label>
				<input id="st4" class="setinput " type="text" title="" junezx_vali_pic="true" name="subTitleBgImage" value="<?=$_POST['subTitleBgImage']?>" />
							</li>
			<li>
				<label for="sdtzSubTitleBgColor">副标题背景颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['subTitleBgColor']?>;"></div></div></div>
					<input id="sdtzSubTitleBgColor" class="setinputcolor tColorPicker" type="text" title="" name="subTitleBgColor" value="<?=$_POST['subTitleBgColor']?>" />
				</div>
			</li>
			<li>
				<label for="sdtzSubTitleColor">副标题文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['subTitleColor']?>;"></div></div></div>
					<input id="sdtzSubTitleColor" class="setinputcolor tColorPicker" type="text" title="" name="subTitleColor" value="<?=$_POST['subTitleColor']?>" />
				</div>
			</li>
			<li>
				<label for="trd2">副标题文字对齐：</label>
				<div id="trd2">
					<input type="radio" id="tr4" name="subTitleAlign" value="left" <?=$_POST['subTitleAlign']=='left'?'checked="checked"':'' ?> />
					<label for="tr4" style="width:65px;">居左</label>
					<input type="radio" id="tr5" name="subTitleAlign" value="center" <?=$_POST['subTitleAlign']=='center'?'checked="checked"':'' ?> />
					<label for="tr5" style="width:65px;">居中</label>
					<input type="radio" id="tr6" name="subTitleAlign" value="right" <?=$_POST['subTitleAlign']=='right'?'checked="checked"':'' ?> />
					<label for="tr6" style="width:65px;">居右</label>
				</div>
			</li>
			<li>
				<label for="subTitleFont">副标题文字字体：</label>
				<select id="subTitleFont" title="" name="subTitleFont">
					<option value="微软雅黑" <? if($_POST['subTitleFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['subTitleFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['subTitleFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['subTitleFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['subTitleFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['subTitleFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['subTitleFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['subTitleFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['subTitleFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['subTitleFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['subTitleFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['subTitleFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['subTitleFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['subTitleFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['subTitleFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['subTitleFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="st8">副标题文字大小：</label>
				<input id="st8" class="setinput" type="text" title="" name="subTitleSize" value="<?=$_POST['subTitleSize']?>" />
			</li>
			<li>
				<label for="subTitleWeight">副标题文字粗细：</label>
				<select id="subTitleWeight" name="subTitleWeight">
					<option value="normal" <?=$_POST['subTitleWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['subTitleWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="st10">副标题文字行高：</label>
				<input id="st10" class="setinput" type="text" title="" name="subTitleLineHeight" value="<?=$_POST['subTitleLineHeight']?>" />
			</li>
			<li>
				<label for="st11">副标题文字缩进：</label>
				<input id="st11" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="subTitleSpace" value="<?=$_POST['subTitleSpace']?>" />
			</li>
			<li>
				<label for="st12">副标题文字间隔：</label>
				<input id="st12" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="subTitleSpacing" value="<?=$_POST['subTitleSpacing']?>" />
			</li>
		</ul>
	</div>
	
	<div id="tabs-5">
		<ul class="setform">
			<li>
				<label>原价：</label>
				<button class="tItemDialog" type="button" name="itemPrice">设置宝贝原价</button>
				<input class="setbtn" type="hidden" title="" name="priceInfo" value="<?=$_POST['priceInfo']?>" />
			</li>
			<li>
				<label for="sdtzPriceColor">原价文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['priceColor']?>;"></div></div></div>
					<input id="sdtzPriceColor" class="setinputcolor tColorPicker" type="text" title="" name="priceColor" value="<?=$_POST['priceColor']?>" />
				</div>
			</li>
			<li>
				<label for="priceFont">原价文字字体：</label>
				<select id="priceFont" title="" name="priceFont">
					<option value="微软雅黑" <? if($_POST['priceFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['priceFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['priceFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['priceFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['priceFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['priceFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['priceFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['priceFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['priceFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['priceFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['priceFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['priceFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['priceFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['priceFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['priceFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['priceFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="p3">原价文字大小：</label>
				<input id="p3" class="setinput" type="text" title="" name="priceSize" value="<?=$_POST['priceSize']?>" />
			</li>
			<li>
				<label for="p4">原价文字间隔：</label>
				<input id="p4" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="priceSpacing" value="<?=$_POST['priceSpacing']?>" />
			</li>
			<li>
				<label for="priceWeight">原价文字粗细：</label>
				<select id="priceWeight" name="priceWeight">
					<option value="normal" <?=$_POST['priceWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['priceWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="priceDecoration">原价文字中划线：</label>
				<select id="priceDecoration" name="priceDecoration">
					<option value="line-through" <?=$_POST['priceDecoration']!=='none'?'selected="selected"':'' ?>>显示</option>
					<option value="none" <?=$_POST['priceDecoration']=='none'?'selected="selected"':'' ?>>不显示</option>
				</select>
			</li>
			<li>
				<label for="priceFixed">原价保留小数：</label>
				<select id="priceFixed" name="priceFixed">
					<option value="0" <?=$_POST['priceFixed']=='0'?'selected="selected"':'' ?>>0</option>
					<option value="1" <?=$_POST['priceFixed']=='1'?'selected="selected"':'' ?>>1</option>
					<option value="2" <?=$_POST['priceFixed']=='2'?'selected="selected"':'' ?>>2</option>
				</select>
			</li>
			<li>
				<label for="priceAlign">原价对齐方式：</label>
				<select id="priceAlign" name="priceAlign">
					<option value="auto" <?=$_POST['priceAlign']=='auto'?'selected="selected"':'' ?>>自动对齐</option>
					<option value="qleft" <?=$_POST['priceAlign']=='qleft'?'selected="selected"':'' ?>>左对齐</option>
					<option value="qright" <?=$_POST['priceAlign']=='qright'?'selected="selected"':'' ?>>右对齐</option>
					<option value="qcenter" <?=$_POST['priceAlign']=='qcenter'?'selected="selected"':'' ?>>居中对齐</option>
				</select>
			</li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">原价前缀</span><em></em></li>
			<li>
				<label id="p5">前缀：</label>
				<input id="p5" class="setinput" type="text" title="" junezx_vali_str="true" name="prefixInfo" value="<?=$_POST['prefixInfo']?>" />
			</li>
			<li>
				<label for="sdtzPrefixColor">前缀文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['prefixColor']?>;"></div></div></div>
					<input id="sdtzPrefixColor" class="setinputcolor tColorPicker" type="text" title="" name="prefixColor" value="<?=$_POST['prefixColor']?>" />
				</div>
			</li>
			<li>
				<label for="prefixFont">前缀文字字体：</label>
				<select id="prefixFont" title="" name="prefixFont">
					<option value="微软雅黑" <? if($_POST['prefixFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['prefixFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['prefixFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['prefixFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['prefixFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['prefixFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['prefixFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['prefixFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['prefixFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['prefixFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['prefixFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['prefixFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['prefixFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['prefixFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['prefixFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['prefixFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="p8">前缀文字大小：</label>
				<input id="p8" class="setinput" type="text" title="" name="prefixSize" value="<?=$_POST['prefixSize']?>" />
			</li>
			<li>
				<label for="p9">前缀文字间隔：</label>
				<input id="p9" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="prefixSpacing" value="<?=$_POST['prefixSpacing']?>" />
			</li>
			<li>
				<label for="prefixWeight">前缀文字粗细：</label>
				<select id="prefixWeight" name="prefixWeight">
					<option value="normal" <?=$_POST['prefixWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['prefixWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="prefixDecoration">前缀文字中划线：</label>
				<select id="prefixDecoration" name="prefixDecoration">
					<option value="line-through" <?=$_POST['prefixDecoration']!=='none'?'selected="selected"':'' ?>>显示</option>
					<option value="none" <?=$_POST['prefixDecoration']=='none'?'selected="selected"':'' ?>>不显示</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
		</ul>
	</div>
	<div id="tabs-6">
		<ul class="setform">
			<li>
				<label>现价：</label>
				<button class="tItemDialog" type="button" name="itemDiscountPrice">设置宝贝现价</button>
				<input class="setbtn" type="hidden" title="" name="_priceInfo" value="<?=$_POST['_priceInfo']?>" />
			</li>
			<li>
				<label for="sdtz_priceColor">现价文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['_priceColor']?>;"></div></div></div>
					<input id="sdtz_priceColor" class="setinputcolor tColorPicker" type="text" title="" name="_priceColor" value="<?=$_POST['_priceColor']?>" />
				</div>
			</li>
			<li>
				<label for="_priceFont">现价文字字体：</label>
				<select id="_priceFont" title="" name="_priceFont">
					<option value="微软雅黑" <? if($_POST['_priceFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['_priceFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['_priceFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['_priceFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['_priceFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['_priceFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['_priceFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['_priceFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['_priceFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['_priceFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['_priceFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['_priceFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['_priceFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['_priceFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['_priceFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['_priceFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="d3">现价文字大小：</label>
				<input id="d3" class="setinput" type="text" title="" name="_priceSize" value="<?=$_POST['_priceSize']?>" />
			</li>
			<li>
				<label for="d4">现价文字间隔：</label>
				<input id="d4" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="_priceSpacing" value="<?=$_POST['_priceSpacing']?>" />
			</li>
			<li>
				<label for="_priceWeight">现价文字粗细：</label>
				<select id="_priceWeight" name="_priceWeight">
					<option value="normal" <?=$_POST['_priceWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['_priceWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="_priceFixed">现价保留小数：</label>
				<select id="_priceFixed" name="_priceFixed">
					<option value="0" <?=$_POST['_priceFixed']=='0'?'selected="selected"':'' ?>>0</option>
					<option value="1" <?=$_POST['_priceFixed']=='1'?'selected="selected"':'' ?>>1</option>
					<option value="2" <?=$_POST['_priceFixed']=='2'?'selected="selected"':'' ?>>2</option>
				</select>
			</li>
			<li>
				<label for="_priceAlign">现价对齐方式：</label>
				<select id="_priceAlign" name="_priceAlign">
					<option value="auto" <?=$_POST['_priceAlign']=='auto'?'selected="selected"':'' ?>>自动对齐</option>
					<option value="qleft" <?=$_POST['_priceAlign']=='qleft'?'selected="selected"':'' ?>>左对齐</option>
					<option value="qright" <?=$_POST['_priceAlign']=='qright'?'selected="selected"':'' ?>>右对齐</option>
					<option value="qcenter" <?=$_POST['_priceAlign']=='qcenter'?'selected="selected"':'' ?>>居中对齐</option>
				</select>
			</li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">现价前缀</span><em></em></li>
			<li>
				<label id="d5">前缀：</label>
				<input id="d5" class="setinput" type="text" title="" junezx_vali_str="true" name="_prefixInfo" value="<?=$_POST['_prefixInfo']?>" />
			</li>
			<li>
				<label for="sdtz_prefixColor">前缀文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['_prefixColor']?>;"></div></div></div>
					<input id="sdtz_prefixColor" class="setinputcolor tColorPicker" type="text" title="" name="_prefixColor" value="<?=$_POST['_prefixColor']?>" />
				</div>
			</li>
			<li>
				<label for="_prefixFont">前缀文字字体：</label>
				<select id="_prefixFont" title="" name="_prefixFont">
					<option value="微软雅黑" <? if($_POST['_prefixFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['_prefixFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['_prefixFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['_prefixFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['_prefixFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['_prefixFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['_prefixFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['_prefixFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['_prefixFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['_prefixFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['_prefixFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['_prefixFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['_prefixFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['_prefixFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['_prefixFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['_prefixFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="d8">前缀文字大小：</label>
				<input id="d8" class="setinput" type="text" title="" name="_prefixSize" value="<?=$_POST['_prefixSize']?>" />
			</li>
			<li>
				<label for="d9">前缀文字间隔：</label>
				<input id="d9" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="_prefixSpacing" value="<?=$_POST['_prefixSpacing']?>" />
			</li>
			<li>
				<label for="_prefixWeight">前缀文字粗细：</label>
				<select id="_prefixWeight" name="_prefixWeight">
					<option value="normal" <?=$_POST['_prefixWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['_prefixWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
		</ul>
	</div>
	<div id="tabs-7">
		<ul class="setform">
			<li>
				<label>销量：</label>
				<button class="tItemDialog" type="button" name="itemSale">设置宝贝销量</button>
				<input class="setbtn" type="hidden" title="" name="saleInfo" value="<?=$_POST['saleInfo']?>" />
			</li>
			<li>
				<label for="sdtzSaleColor">销量文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['saleColor']?>;"></div></div></div>
					<input id="sdtzSaleColor" class="setinputcolor tColorPicker" type="text" title="" name="saleColor" value="<?=$_POST['saleColor']?>" />
				</div>
			</li>
			<li>
				<label for="saleFont">销量文字字体：</label>
				<select id="saleFont" title="" name="saleFont">
					<option value="微软雅黑" <? if($_POST['saleFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['saleFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['saleFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['saleFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['saleFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['saleFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['saleFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['saleFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['saleFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['saleFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['saleFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['saleFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['saleFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['saleFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['saleFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['saleFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="s3">销量文字大小：</label>
				<input id="s3" class="setinput" type="text" title="" name="saleSize" value="<?=$_POST['saleSize']?>" />
			</li>
			<li>
				<label for="s4">销量文字间隔：</label>
				<input id="s4" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="saleSpacing" value="<?=$_POST['saleSpacing']?>" />
			</li>
			<li>
				<label for="saleWeight">销量文字粗细：</label>
				<select id="saleWeight" name="saleWeight">
					<option value="normal" <?=$_POST['saleWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['saleWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="saleAlign">销量对齐方式：</label>
				<select id="saleAlign" name="saleAlign">
					<option value="auto" <?=$_POST['saleAlign']=='auto'?'selected="selected"':'' ?>>自动对齐</option>
					<option value="qleft" <?=$_POST['saleAlign']=='qleft'?'selected="selected"':'' ?>>左对齐</option>
					<option value="qright" <?=$_POST['saleAlign']=='qright'?'selected="selected"':'' ?>>右对齐</option>
					<option value="qcenter" <?=$_POST['saleAlign']=='qcenter'?'selected="selected"':'' ?>>居中对齐</option>
				</select>
			</li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">销量前缀</span><em></em></li>
			<li>
				<label id="s5">前缀：</label>
				<input id="s5" class="setinput" type="text" title="" junezx_vali_str="true" name="salePrefixInfo" value="<?=$_POST['salePrefixInfo']?>" />
			</li>
			<li>
				<label for="sdtzSalePrefixColor">前缀文字颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['salePrefixColor']?>;"></div></div></div>
					<input id="sdtzSalePrefixColor" class="setinputcolor tColorPicker" type="text" title="" name="salePrefixColor" value="<?=$_POST['salePrefixColor']?>" />
				</div>
			</li>
			<li>
				<label for="salePrefixFont">前缀文字字体：</label>
				<select id="salePrefixFont" title="" name="salePrefixFont">
					<option value="微软雅黑" <? if($_POST['salePrefixFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="宋体" <? if($_POST['salePrefixFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($_POST['salePrefixFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="楷体" <? if($_POST['salePrefixFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($_POST['salePrefixFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($_POST['salePrefixFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($_POST['salePrefixFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($_POST['salePrefixFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($_POST['salePrefixFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($_POST['salePrefixFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($_POST['salePrefixFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($_POST['salePrefixFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($_POST['salePrefixFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($_POST['salePrefixFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($_POST['salePrefixFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($_POST['salePrefixFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="s8">前缀文字大小：</label>
				<input id="s8" class="setinput" type="text" title="" name="salePrefixSize" value="<?=$_POST['salePrefixSize']?>" />
			</li>
			<li>
				<label for="s9">前缀文字间隔：</label>
				<input id="s9" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="salePrefixSpacing" value="<?=$_POST['salePrefixSpacing']?>" />
			</li>
			<li>
				<label for="salePrefixWeight">前缀文字粗细：</label>
				<select id="salePrefixWeight" name="salePrefixWeight">
					<option value="normal" <?=$_POST['salePrefixWeight']=='normal'?'selected="selected"':'' ?>>正常</option>
					<option value="bold" <?=$_POST['salePrefixWeight']=='bold'?'selected="selected"':'' ?>>粗体</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
		</ul>
	</div>
	<div id="tabs-8">
		<ul class="setform">
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">立即购买按钮</span><em></em></li>
			<li>
				<label for="hb1">按钮背景图片：</label>
				<input id="hb1" class="setinput " type="text" title="" junezx_vali_pic="true" name="btnSrc" value="<?=$_POST['btnSrc']?>" />
							</li>
			<li>
				<label for="hb2">按钮变换图片：</label>
				<input id="hb2" class="setinput " type="text" title="" junezx_vali_pic="true" name="btnHoverSrc" value="<?=$_POST['btnHoverSrc']?>" />
							</li>
			<li>
				<label for="hrd1">鼠标经过何处变换：</label>
				<div id="hrd1">
					<input type="radio" id="hr1" name="btnHoverMode" value="bhm_btn" <?=$_POST['btnHoverMode']=='bhm_btn'?'checked="checked"':'' ?> />
					<label for="hr1" title="鼠标经过当前按钮时显示变换图片" style="width:90px;">当前按钮</label>
					<input type="radio" id="hr2" name="btnHoverMode" value="bhm_item" <?=$_POST['btnHoverMode']=='bhm_item'?'checked="checked"':'' ?> />
					<label for="hr2" title="鼠标经过当前宝贝时显示变换图片" style="width:90px;">当前宝贝</label>
				</div>
			</li>
			<li class="bhm_item">
				<label for="btnStyle">鼠标经过切换方式：</label>
				<select id="btnStyle" name="btnStyle">
					<option value="" <?=$_POST['btnStyle']==''?'selected="selected"':'' ?>>无效果切换</option>
					<option value="june-box-fadeout" <?=$_POST['btnStyle']=='june-box-fadeout'?'selected="selected"':'' ?>>淡入淡出切换</option>
				</select>
			</li>
			<li class="bhm_item">
				<label for="btnHoverStyleX">变换图片横向移动：</label>
				<select id="btnHoverStyleX" name="btnHoverStyleX">
				<option value="" <? if($_POST['btnHoverStyleX']==''){echo'selected="selected"';} ?>>无效果</option>
						<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($_POST['btnHoverStyleX']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
                </select>
			</li>
			<li class="bhm_item">
				<label for="btnHoverStyleY">变换图片纵向移动：</label>
				<select id="btnHoverStyleY" name="btnHoverStyleY">
				<option value="" <? if($_POST['btnHoverStyleY']==''){echo'selected="selected"';} ?>>无效果</option>
                    <?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($_POST['btnHoverStyleY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
              </select>
			</li>
			<li class="bhm_item">
				<label for="btnHoverStyle">变换图片CSS3效果：</label>
				<select id="btnHoverStyle" name="btnHoverStyle">
					<option value="" <? if($item['btnHoverStyle']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($item['btnHoverStyle']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($item['btnHoverStyle']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($item['btnHoverStyle']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-box-sf" <? if($item['btnHoverStyle']=='june-box-sf'){echo'selected="selected"';} ?>>放大显示</option>
					<option value="june-box-sf0" <? if($item['btnHoverStyle']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小消失</option>
					<option value="june-box-sfr360" <? if($item['btnHoverStyle']=='june-box-sfr360'){echo'selected="selected"';} ?>>顺时针旋转一周放大显示</option>
					<option value="june-box-sfr720" <? if($item['btnHoverStyle']=='june-box-sfr720'){echo'selected="selected"';} ?>>顺时针旋转二周放大显示</option>
					<option value="june-box-sffr360" <? if($item['btnHoverStyle']=='june-box-sffr360'){echo'selected="selected"';} ?>>逆时针旋转一周放大显示</option>
					<option value="june-box-sffr720" <? if($item['btnHoverStyle']=='june-box-sffr720'){echo'selected="selected"';} ?>>逆时针旋转二周放大显示</option>
					
					<option value="june-box-sf0r360" <? if($item['btnHoverStyle']=='june-box-sf0r360'){echo'selected="selected"';} ?>>顺时针旋转一周缩小消失</option>
					<option value="june-box-sf0r720" <? if($item['btnHoverStyle']=='june-box-sf0r720'){echo'selected="selected"';} ?>>顺时针旋转二周缩小消失</option>
					<option value="june-box-sf0fr360" <? if($item['btnHoverStyle']=='june-box-sf0fr360'){echo'selected="selected"';} ?>>逆时针旋转一周缩小消失</option>
					<option value="june-box-sf0fr720" <? if($item['btnHoverStyle']=='june-box-sf0fr720'){echo'selected="selected"';} ?>>逆时针旋转二周缩小消失</option>
					
					<option value="june-box-fxr360" <? if($item['btnHoverStyle']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
					<option value="june-box-fxr720" <? if($item['btnHoverStyle']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
					<option value="june-box-fxfr360" <? if($item['btnHoverStyle']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
					<option value="june-box-fxfr720" <? if($item['btnHoverStyle']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
					
					<option value="june-box-fyr360" <? if($item['btnHoverStyle']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
					<option value="june-box-fyr720" <? if($item['btnHoverStyle']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
					<option value="june-box-fyfr360" <? if($item['btnHoverStyle']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
					<option value="june-box-fyfr720" <? if($item['btnHoverStyle']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
					
					<option value="june-box-sf02" <? if($item['btnHoverStyle']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($item['btnHoverStyle']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($item['btnHoverStyle']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($item['btnHoverStyle']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($item['btnHoverStyle']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($item['btnHoverStyle']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($item['btnHoverStyle']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($item['btnHoverStyle']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf102" <? if($item['btnHoverStyle']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($item['btnHoverStyle']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($item['btnHoverStyle']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($item['btnHoverStyle']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($item['btnHoverStyle']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($item['btnHoverStyle']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($item['btnHoverStyle']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
										<option value="june-box-r10" <? if($item['btnHoverStyle']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
										<option value="june-box-r20" <? if($item['btnHoverStyle']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
										<option value="june-box-r30" <? if($item['btnHoverStyle']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
										<option value="june-box-r40" <? if($item['btnHoverStyle']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
										<option value="june-box-r50" <? if($item['btnHoverStyle']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
										<option value="june-box-r60" <? if($item['btnHoverStyle']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
										<option value="june-box-r70" <? if($item['btnHoverStyle']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
										<option value="june-box-r80" <? if($item['btnHoverStyle']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
										<option value="june-box-r90" <? if($item['btnHoverStyle']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
										<option value="june-box-r120" <? if($item['btnHoverStyle']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-box-r180" <? if($item['btnHoverStyle']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-box-r270" <? if($item['btnHoverStyle']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-box-r360" <? if($item['btnHoverStyle']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-box-r720" <? if($item['btnHoverStyle']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
										<option value="june-box-fr10" <? if($item['btnHoverStyle']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
										<option value="june-box-fr20" <? if($item['btnHoverStyle']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
										<option value="june-box-fr30" <? if($item['btnHoverStyle']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
										<option value="june-box-fr40" <? if($item['btnHoverStyle']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
										<option value="june-box-fr50" <? if($item['btnHoverStyle']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
										<option value="june-box-fr60" <? if($item['btnHoverStyle']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
										<option value="june-box-fr70" <? if($item['btnHoverStyle']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
										<option value="june-box-fr80" <? if($item['btnHoverStyle']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
										<option value="june-box-fr90" <? if($item['btnHoverStyle']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
										<option value="june-box-fr120" <? if($item['btnHoverStyle']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-box-fr180" <? if($item['btnHoverStyle']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-box-fr270" <? if($item['btnHoverStyle']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-box-fr360" <? if($item['btnHoverStyle']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-box-fr720" <? if($item['btnHoverStyle']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
				</select>
			</li>
			<li class="bhm_item">
				<label for="btnHoverSpeed">变换图片的动画速度：</label>
				<select id="btnHoverSpeed" name="btnHoverSpeed">
					<option value="trans01s" <?=$_POST['btnHoverSpeed']=='trans01s'?'selected="selected"':'' ?>>快速</option>
					<option value="trans02s" <?=$_POST['btnHoverSpeed']=='trans02s'?'selected="selected"':'' ?>>较快</option>
					<option value="trans05s" <?=$_POST['btnHoverSpeed']=='trans05s'?'selected="selected"':'' ?>>中等</option>
					<option value="trans1s" <?=$_POST['btnHoverSpeed']=='trans1s'?'selected="selected"':'' ?>>较慢</option>
					<option value="trans2s" <?=$_POST['btnHoverSpeed']=='trans2s'?'selected="selected"':'' ?>>慢速</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">宝贝收藏按钮</span><em></em></li>
			<li>
				<label for="hb3">按钮背景图片：</label>
				<input id="hb3" class="setinput " type="text" title="" junezx_vali_pic="true" name="btn1Src" value="<?=$_POST['btn1Src']?>" />
							</li>
			<li>
				<label for="hb4">按钮变换图片：</label>
				<input id="hb4" class="setinput " type="text" title="" junezx_vali_pic="true" name="btn1HoverSrc" value="<?=$_POST['btn1HoverSrc']?>" />
							</li>
			<li>
				<label for="hrd2">鼠标经过何处变换：</label>
				<div id="hrd2">
					<input type="radio" id="hr3" name="btn1HoverMode" value="bhm_btn" <?=$_POST['btn1HoverMode']=='bhm_btn'?'checked="checked"':'' ?> />
					<label for="hr3" title="鼠标经过当前按钮时显示变换图片" style="width:90px;">当前按钮</label>
					<input type="radio" id="hr4" name="btn1HoverMode" value="bhm_item" <?=$_POST['btn1HoverMode']=='bhm_item'?'checked="checked"':'' ?> />
					<label for="hr4" title="鼠标经过当前宝贝时显示变换图片" style="width:90px;">当前宝贝</label>
				</div>
			</li>
			<li class="bhm_item1">
				<label for="btn1Style">鼠标经过切换方式：</label>
				<select id="btn1Style" name="btn1Style">
					<option value="" <?=$_POST['btn1Style']==''?'selected="selected"':'' ?>>无效果切换</option>
					<option value="june-box-fadeout" <?=$_POST['btn1Style']=='june-box-fadeout'?'selected="selected"':'' ?>>淡入淡出切换</option>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverStyleX">变换图片横向移动：</label>
				<select id="btn1HoverStyleX" name="btn1HoverStyleX">
					<option value="" <? if($_POST['btn1HoverStyleX']==''){echo'selected="selected"';} ?>>无效果</option>
						<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($_POST['btn1HoverStyleX']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverStyleY">变换图片纵向移动：</label>
				<select id="btn1HoverStyleY" name="btn1HoverStyleY">
					<option value="" <? if($_POST['btn1HoverStyleY']==''){echo'selected="selected"';} ?>>无效果</option>
                    <?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($_POST['btn1HoverStyleY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverStyle">变换图片CSS3效果：</label>
				<select id="btn1HoverStyle" name="btn1HoverStyle">
					<option value="" <? if($_POST['btn1HoverStyle']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($_POST['btn1HoverStyle']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($_POST['btn1HoverStyle']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($_POST['btn1HoverStyle']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-box-sf" <? if($_POST['btn1HoverStyle']=='june-box-sf'){echo'selected="selected"';} ?>>放大显示</option>
					<option value="june-box-sf0" <? if($_POST['btn1HoverStyle']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小消失</option>
					<option value="june-box-sfr360" <? if($_POST['btn1HoverStyle']=='june-box-sfr360'){echo'selected="selected"';} ?>>顺时针旋转一周放大显示</option>
					<option value="june-box-sfr720" <? if($_POST['btn1HoverStyle']=='june-box-sfr720'){echo'selected="selected"';} ?>>顺时针旋转二周放大显示</option>
					<option value="june-box-sffr360" <? if($_POST['btn1HoverStyle']=='june-box-sffr360'){echo'selected="selected"';} ?>>逆时针旋转一周放大显示</option>
					<option value="june-box-sffr720" <? if($_POST['btn1HoverStyle']=='june-box-sffr720'){echo'selected="selected"';} ?>>逆时针旋转二周放大显示</option>
					
					<option value="june-box-sf0r360" <? if($_POST['btn1HoverStyle']=='june-box-sf0r360'){echo'selected="selected"';} ?>>顺时针旋转一周缩小消失</option>
					<option value="june-box-sf0r720" <? if($_POST['btn1HoverStyle']=='june-box-sf0r720'){echo'selected="selected"';} ?>>顺时针旋转二周缩小消失</option>
					<option value="june-box-sf0fr360" <? if($_POST['btn1HoverStyle']=='june-box-sf0fr360'){echo'selected="selected"';} ?>>逆时针旋转一周缩小消失</option>
					<option value="june-box-sf0fr720" <? if($_POST['btn1HoverStyle']=='june-box-sf0fr720'){echo'selected="selected"';} ?>>逆时针旋转二周缩小消失</option>
					
					<option value="june-box-fxr360" <? if($_POST['btn1HoverStyle']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
					<option value="june-box-fxr720" <? if($_POST['btn1HoverStyle']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
					<option value="june-box-fxfr360" <? if($_POST['btn1HoverStyle']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
					<option value="june-box-fxfr720" <? if($_POST['btn1HoverStyle']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
					
					<option value="june-box-fyr360" <? if($_POST['btn1HoverStyle']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
					<option value="june-box-fyr720" <? if($_POST['btn1HoverStyle']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
					<option value="june-box-fyfr360" <? if($_POST['btn1HoverStyle']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
					<option value="june-box-fyfr720" <? if($_POST['btn1HoverStyle']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
					
					<option value="june-box-sf02" <? if($_POST['btn1HoverStyle']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($_POST['btn1HoverStyle']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($_POST['btn1HoverStyle']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($_POST['btn1HoverStyle']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($_POST['btn1HoverStyle']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($_POST['btn1HoverStyle']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($_POST['btn1HoverStyle']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($_POST['btn1HoverStyle']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf102" <? if($_POST['btn1HoverStyle']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($_POST['btn1HoverStyle']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($_POST['btn1HoverStyle']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($_POST['btn1HoverStyle']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($_POST['btn1HoverStyle']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($_POST['btn1HoverStyle']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($_POST['btn1HoverStyle']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
										<option value="june-box-r10" <? if($_POST['btn1HoverStyle']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
										<option value="june-box-r20" <? if($_POST['btn1HoverStyle']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
										<option value="june-box-r30" <? if($_POST['btn1HoverStyle']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
										<option value="june-box-r40" <? if($_POST['btn1HoverStyle']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
										<option value="june-box-r50" <? if($_POST['btn1HoverStyle']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
										<option value="june-box-r60" <? if($_POST['btn1HoverStyle']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
										<option value="june-box-r70" <? if($_POST['btn1HoverStyle']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
										<option value="june-box-r80" <? if($_POST['btn1HoverStyle']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
										<option value="june-box-r90" <? if($_POST['btn1HoverStyle']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
										<option value="june-box-r120" <? if($_POST['btn1HoverStyle']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-box-r180" <? if($_POST['btn1HoverStyle']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-box-r270" <? if($_POST['btn1HoverStyle']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-box-r360" <? if($_POST['btn1HoverStyle']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-box-r720" <? if($_POST['btn1HoverStyle']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
										<option value="june-box-fr10" <? if($_POST['btn1HoverStyle']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
										<option value="june-box-fr20" <? if($_POST['btn1HoverStyle']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
										<option value="june-box-fr30" <? if($_POST['btn1HoverStyle']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
										<option value="june-box-fr40" <? if($_POST['btn1HoverStyle']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
										<option value="june-box-fr50" <? if($_POST['btn1HoverStyle']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
										<option value="june-box-fr60" <? if($_POST['btn1HoverStyle']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
										<option value="june-box-fr70" <? if($_POST['btn1HoverStyle']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
										<option value="june-box-fr80" <? if($_POST['btn1HoverStyle']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
										<option value="june-box-fr90" <? if($_POST['btn1HoverStyle']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
										<option value="june-box-fr120" <? if($_POST['btn1HoverStyle']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-box-fr180" <? if($_POST['btn1HoverStyle']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-box-fr270" <? if($_POST['btn1HoverStyle']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-box-fr360" <? if($_POST['btn1HoverStyle']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-box-fr720" <? if($_POST['btn1HoverStyle']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverSpeed">变换图片的动画速度：</label>
				<select id="btn1HoverSpeed" name="btn1HoverSpeed">
					<option value="trans01s" <? if($_POST['btn1HoverSpeed']=='trans01s'){echo'selected="selected"';} ?> >快速</option>
					<option value="trans02s" <? if($_POST['btn1HoverSpeed']=='trans02s'){echo'selected="selected"';} ?> >较快</option>
					<option value="trans05s" <? if($_POST['btn1HoverSpeed']=='trans05s'){echo'selected="selected"';} ?> >中等</option>
					<option value="trans1s" <? if($_POST['btn1HoverSpeed']=='trans1s'){echo'selected="selected"';} ?> >较慢</option>
					<option value="trans2s" <? if($_POST['btn1HoverSpeed']=='trans2s'){echo'selected="selected"';} ?> >慢速</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
			<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">加入购物车按钮</span><em></em></li>
			<li>
				<label for="hb5">按钮背景图片：</label>
				<input id="hb5" class="setinput " type="text" title="" junezx_vali_pic="true" name="btn2Src" value="<?=$_POST['btn2Src']?>" />
							</li>
			<li>
				<label for="hb6">按钮变换图片：</label>
				<input id="hb6" class="setinput " type="text" title="" junezx_vali_pic="true" name="btn2HoverSrc" value="<?=$_POST['btn2HoverSrc']?>" />
							</li>
			<li>
				<label for="hrd3">鼠标经过何处变换：</label>
				<div id="hrd3">
					<input type="radio" id="hr5" name="btn2HoverMode" value="bhm_btn" <?=$_POST['btn2HoverMode']=='bhm_btn'?'checked="checked"':'' ?> />
					<label for="hr5" title="鼠标经过当前按钮时显示变换图片" style="width:90px;">当前按钮</label>
					<input type="radio" id="hr6" name="btn2HoverMode" value="bhm_item" <?=$_POST['btn2HoverMode']=='bhm_item'?'checked="checked"':'' ?> />
					<label for="hr6" title="鼠标经过当前宝贝时显示变换图片" style="width:90px;">当前宝贝</label>
				</div>
			</li>
			<li class="bhm_item2">
				<label for="btn2Style">鼠标经过切换方式：</label>
				<select id="btn2Style" name="btn2Style">
					<option value="" <?=$_POST['btn2Style']==''?'selected="selected"':'' ?>>无效果切换</option>
					<option value="june-box-fadeout" <?=$_POST['btn2Style']=='june-box-fadeout'?'selected="selected"':'' ?>>淡入淡出切换</option>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverStyleX">变换图片横向移动：</label>
				<select id="btn2HoverStyleX" name="btn2HoverStyleX">
					<option value="" <? if($_POST['btn2HoverStyleX']==''){echo'selected="selected"';} ?>>无效果</option>
						<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($_POST['btn2HoverStyleX']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverStyleY">变换图片纵向移动：</label>
				<select id="btn2HoverStyleY" name="btn2HoverStyleY">
					<option value="" <? if($_POST['btn2HoverStyleY']==''){echo'selected="selected"';} ?>>无效果</option>
                    <?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($_POST['btn2HoverStyleY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverStyle">变换图片CSS3效果：</label>
				<select id="btn2HoverStyle" name="btn2HoverStyle">
					<option value="" <? if($_POST['btn2HoverStyle']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($_POST['btn2HoverStyle']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($_POST['btn2HoverStyle']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($_POST['btn2HoverStyle']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-box-sf" <? if($_POST['btn2HoverStyle']=='june-box-sf'){echo'selected="selected"';} ?>>放大显示</option>
					<option value="june-box-sf0" <? if($_POST['btn2HoverStyle']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小消失</option>
					<option value="june-box-sfr360" <? if($_POST['btn2HoverStyle']=='june-box-sfr360'){echo'selected="selected"';} ?>>顺时针旋转一周放大显示</option>
					<option value="june-box-sfr720" <? if($_POST['btn2HoverStyle']=='june-box-sfr720'){echo'selected="selected"';} ?>>顺时针旋转二周放大显示</option>
					<option value="june-box-sffr360" <? if($_POST['btn2HoverStyle']=='june-box-sffr360'){echo'selected="selected"';} ?>>逆时针旋转一周放大显示</option>
					<option value="june-box-sffr720" <? if($_POST['btn2HoverStyle']=='june-box-sffr720'){echo'selected="selected"';} ?>>逆时针旋转二周放大显示</option>
					
					<option value="june-box-sf0r360" <? if($_POST['btn2HoverStyle']=='june-box-sf0r360'){echo'selected="selected"';} ?>>顺时针旋转一周缩小消失</option>
					<option value="june-box-sf0r720" <? if($_POST['btn2HoverStyle']=='june-box-sf0r720'){echo'selected="selected"';} ?>>顺时针旋转二周缩小消失</option>
					<option value="june-box-sf0fr360" <? if($_POST['btn2HoverStyle']=='june-box-sf0fr360'){echo'selected="selected"';} ?>>逆时针旋转一周缩小消失</option>
					<option value="june-box-sf0fr720" <? if($_POST['btn2HoverStyle']=='june-box-sf0fr720'){echo'selected="selected"';} ?>>逆时针旋转二周缩小消失</option>
					
					<option value="june-box-fxr360" <? if($_POST['btn2HoverStyle']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
					<option value="june-box-fxr720" <? if($_POST['btn2HoverStyle']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
					<option value="june-box-fxfr360" <? if($_POST['btn2HoverStyle']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
					<option value="june-box-fxfr720" <? if($_POST['btn2HoverStyle']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
					
					<option value="june-box-fyr360" <? if($_POST['btn2HoverStyle']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
					<option value="june-box-fyr720" <? if($_POST['btn2HoverStyle']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
					<option value="june-box-fyfr360" <? if($_POST['btn2HoverStyle']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
					<option value="june-box-fyfr720" <? if($_POST['btn2HoverStyle']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
					
					<option value="june-box-sf02" <? if($_POST['btn2HoverStyle']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($_POST['btn2HoverStyle']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($_POST['btn2HoverStyle']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($_POST['btn2HoverStyle']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($_POST['btn2HoverStyle']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($_POST['btn2HoverStyle']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($_POST['btn2HoverStyle']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($_POST['btn2HoverStyle']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf102" <? if($_POST['btn2HoverStyle']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($_POST['btn2HoverStyle']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($_POST['btn2HoverStyle']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($_POST['btn2HoverStyle']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($_POST['btn2HoverStyle']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($_POST['btn2HoverStyle']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($_POST['btn2HoverStyle']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
										<option value="june-box-r10" <? if($_POST['btn2HoverStyle']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
										<option value="june-box-r20" <? if($_POST['btn2HoverStyle']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
										<option value="june-box-r30" <? if($_POST['btn2HoverStyle']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
										<option value="june-box-r40" <? if($_POST['btn2HoverStyle']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
										<option value="june-box-r50" <? if($_POST['btn2HoverStyle']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
										<option value="june-box-r60" <? if($_POST['btn2HoverStyle']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
										<option value="june-box-r70" <? if($_POST['btn2HoverStyle']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
										<option value="june-box-r80" <? if($_POST['btn2HoverStyle']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
										<option value="june-box-r90" <? if($_POST['btn2HoverStyle']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
										<option value="june-box-r120" <? if($_POST['btn2HoverStyle']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-box-r180" <? if($_POST['btn2HoverStyle']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-box-r270" <? if($_POST['btn2HoverStyle']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-box-r360" <? if($_POST['btn2HoverStyle']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-box-r720" <? if($_POST['btn2HoverStyle']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
										<option value="june-box-fr10" <? if($_POST['btn2HoverStyle']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
										<option value="june-box-fr20" <? if($_POST['btn2HoverStyle']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
										<option value="june-box-fr30" <? if($_POST['btn2HoverStyle']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
										<option value="june-box-fr40" <? if($_POST['btn2HoverStyle']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
										<option value="june-box-fr50" <? if($_POST['btn2HoverStyle']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
										<option value="june-box-fr60" <? if($_POST['btn2HoverStyle']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
										<option value="june-box-fr70" <? if($_POST['btn2HoverStyle']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
										<option value="june-box-fr80" <? if($_POST['btn2HoverStyle']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
										<option value="june-box-fr90" <? if($_POST['btn2HoverStyle']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
										<option value="june-box-fr120" <? if($_POST['btn2HoverStyle']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-box-fr180" <? if($_POST['btn2HoverStyle']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-box-fr270" <? if($_POST['btn2HoverStyle']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-box-fr360" <? if($_POST['btn2HoverStyle']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-box-fr720" <? if($_POST['btn2HoverStyle']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverSpeed">变换图片的动画速度：</label>
				<select id="btn2HoverSpeed" name="btn2HoverSpeed">
					<option value="trans01s" <? if($_POST['btn2HoverSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans02s" <? if($_POST['btn2HoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
					<option value="trans05s" <? if($_POST['btn2HoverSpeed']=='trans05s'){echo'selected="selected"';} ?>>中等</option>
					<option value="trans1s" <? if($_POST['btn2HoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>较慢</option>
					<option value="trans2s" <? if($_POST['btn2HoverSpeed']=='trans2s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li class="inputAccording-end"></li>
		</ul>
	</div>
	 <?
   
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
	?>
    <div id="tabs-12">
		<ul class="setform">
			<li>
				<label>扩展图片(1)：</label>
				<button class="tItemDialog" type="button" name="itemSubScriptSrc">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScriptSrc" value="<?=$subScriptSrc?>" />
			</li>
			<li>
				<label>扩展图片(2)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript1Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript1Src" value="<?=$subScript1Src?>" />
			</li>
			<li>
				<label>扩展图片(3)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript2Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript2Src" value="<?=$subScript2Src?>" />
			</li>
			<li>
				<label>扩展图片(4)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript3Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript3Src" value="<?=$subScript3Src?>" />
			</li>
			<li>
				<label>扩展图片(5)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript4Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript4Src" value="<?=$subScript4Src?>" />
			</li>
			<li>
				<label>扩展文字(1)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText" style="margin-bottom:18px;">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText" value="<?=$expandText?>" />
				<textarea name="expandTextSet" style="display:none;"><?=$_POST['expandTextSet']?></textarea>
			</li>
			<li>
				<label>扩展文字(2)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText1" style="margin-bottom:18px;">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText1" value="<?=$expandText1?>" />
				<textarea name="expandText1Set" style="display:none;"><?=$_POST['expandText1Set']?></textarea>
			</li>
			<li>
				<label>扩展文字(3)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText2" style="margin-bottom:18px;">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText2" value="<?=$expandText2?>" />
				<textarea name="expandText2Set" style="display:none;"><?=$_POST['expandText2Set']?></textarea>
			</li>
			<li>
				<label>扩展文字(4)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText3" style="margin-bottom:18px;">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText3" value="<?=$expandText3?>" />
				<textarea name="expandText3Set" style="display:none;"><?=$_POST['expandText3Set']?></textarea>
			</li>
			<li>
				<label>扩展文字(5)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText4" style="margin-bottom:18px;">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText4" value="<?=$expandText4?>" />
				<textarea name="expandText4Set" style="display:none;"><?=$_POST['expandText4Set']?></textarea>
			</li>
		</ul>
	</div>
	<div id="tabs-13">
		<ul class="setform">
			<li>
				<label>二维码：</label>
				<button class="tItemDialog" type="button" name="itemErWeiMaSrc">设置二维码</button>
				<input class="setbtn" type="hidden" title="" name="erWeiMaSrc" value="<?=$_POST['erWeiMaSrc']?>" />
			</li>
			<li>
				<label for="erWeiMaSize">二维码尺寸：</label>
				<select id="erWeiMaSize" name="erWeiMaSize">
					<option value="30" <? if($_POST['erWeiMaSize']=='30'){echo'selected="selected"';} ?>>30</option>
                    <option value="40" <? if($_POST['erWeiMaSize']=='40'){echo'selected="selected"';} ?>>40</option>
                    <option value="45"  <? if($_POST['erWeiMaSize']=='45'){echo'selected="selected"';} ?>>45</option>
					<option value="50"  <? if($_POST['erWeiMaSize']=='50'){echo'selected="selected"';} ?>>50</option>
					<option value="60"  <? if($_POST['erWeiMaSize']=='60'){echo'selected="selected"';} ?>>60</option>
					<option value="70"  <? if($_POST['erWeiMaSize']=='70'){echo'selected="selected"';} ?>>70</option>
					<option value="80"  <? if($_POST['erWeiMaSize']=='80'){echo'selected="selected"';} ?>>80</option>
                    <option value="85"  <? if($_POST['erWeiMaSize']=='80'){echo'selected="selected"';} ?>>85</option>
					<option value="90"  <? if($_POST['erWeiMaSize']=='90'){echo'selected="selected"';} ?>>90</option>
					<option value="100"  <? if($_POST['erWeiMaSize']=='100'){echo'selected="selected"';} ?>>100</option>
                    <option value="110" <? if($_POST['erWeiMaSize']=='110'){echo'selected="selected"';} ?>>110</option>
					<option value="120" <? if($_POST['erWeiMaSize']=='120'){echo'selected="selected"';} ?>>120</option>
					<option value="125" <? if($_POST['erWeiMaSize']=='125'){echo'selected="selected"';} ?>>125</option>
					<option value="130" <? if($_POST['erWeiMaSize']=='130'){echo'selected="selected"';} ?>>130</option>
					<option value="140"  <? if($_POST['erWeiMaSize']=='140'){echo'selected="selected"';} ?>>140</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-9">
		<ul class="setform">
			<li>
				<label for="bcd1">默认显示：</label>
				<div id="bcd1">
					<input type="checkbox" id="bc2" name="borderControl1" value="hborder1" <?=$_POST['borderControl1']=='hborder1'?'checked="checked"':'' ?> />
					<label for="bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="bc3" name="shadowControl1" value="shadowShow1" <?=$_POST['shadowControl1']=='shadowShow1'?'checked="checked"':'' ?> />
					<label for="bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
				</div>
			</li>
			<li class="hborder1 borderControl1">
				<label for="sdtzBorderColor1">边框->边框颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['borderColor1']?>;"></div></div></div>
					<input id="sdtzBorderColor1" class="setinputcolor tColorPicker" type="text" title="" name="borderColor1" value="<?=$_POST['borderColor1']?>" />
				</div>
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi6">边框粗细：</label>
				<input id="bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$_POST['borderWidth1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi7">圆角弧度：</label>
				<input id="bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$_POST['borderRadius1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="sdtzShadowColor1">阴影->阴影颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['shadowColor1']?>;"></div></div></div>
					<input id="sdtzShadowColor1" class="setinputcolor tColorPicker" type="text" title="" name="shadowColor1" value="<?=$_POST['shadowColor1']?>" />
				</div>
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy3">模糊距离：</label>
				<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$_POST['shadowBlur1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy5">阴影尺寸：</label>
				<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$_POST['shadowSize1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy1">水平距离：</label>
				<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$_POST['shadowLeft1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="by2">垂直距离：</label>
				<input id="by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$_POST['shadowTop1']?>" />
			</li>
			<input id="bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="<?=$_POST['shadowStyle1']?>" />
		</ul>
	</div>
	<div id="tabs-10">
		<ul class="setform">
			<li>
				<label for="hcd1">鼠标经过时显示：</label>
				<div id="hcd1">
					<input type="checkbox" id="hc2" name="borderControl" value="hborder" <?=$_POST['borderControl']=='hborder'?'checked="checked"':'' ?> />
					<label for="hc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="hc3" name="shadowControl" value="shadowShow" <?=$_POST['shadowControl']=='shadowShow'?'checked="checked"':'' ?> />
					<label for="hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
					<input type="checkbox" id="hc4" name="outlineControl" value="outlineShow" <?=$_POST['outlineControl']=='outlineShow'?'checked="checked"':'' ?> />
					<label for="hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
				</div>
			</li>
			<li class="hborder borderControl">
				<label for="sdtzBorderColor">边框->边框颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['borderColor']?>;"></div></div></div>
					<input id="sdtzBorderColor" class="setinputcolor tColorPicker" type="text" title="" name="borderColor" value="<?=$_POST['borderColor']?>" />
				</div>
			</li>
			<li class="hborder borderControl">
				<label for="hi6">边框粗细：</label>
				<input id="hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=$_POST['borderWidth']?>" />
			</li>
			<li style="display:none;">
				<label for="hi7">圆角弧度：</label>
				<input id="hi7" class="setinput" type="hidden" title="" name="borderRadius" value="<?=$_POST['borderRadius']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="sdtzShadowColor">阴影->阴影颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['shadowColor']?>;"></div></div></div>
					<input id="sdtzShadowColor" class="setinputcolor tColorPicker" type="text" title="" name="shadowColor" value="<?=$_POST['shadowColor']?>" />
				</div>
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy3">模糊距离：</label>
				<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$_POST['shadowBlur']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy5">阴影尺寸：</label>
				<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$_POST['shadowSize']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy1">水平距离：</label>
				<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$_POST['shadowLeft']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy2">垂直距离：</label>
				<input id="hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$_POST['shadowTop']?>" />
			</li>
			<input id="hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=$_POST['shadowStyle']?>" />
			<li class="outlineShow outlineControl">
				<label for="sdtzOutlineColor">扩展->外框颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['outlineColor']?>;"></div></div></div>
					<input id="sdtzOutlineColor" class="setinputcolor tColorPicker" type="text" title="" name="outlineColor" value="<?=$_POST['outlineColor']?>" />
				</div>
			</li>
			<li class="outlineShow outlineControl">
				<label for="outlineWidth">外框粗细：</label>
				<select id="outlineWidth" name="outlineWidth">
					<option value="juneol2" <?=$_POST['outlineWidth']=='juneol2'?'selected="selected"':'' ?>>细</option>
					<option value="juneol1" <?=$_POST['outlineWidth']=='juneol1'?'selected="selected"':'' ?>>中等</option>
					<option value="juneol" <?=$_POST['outlineWidth']=='juneol'?'selected="selected"':'' ?>>粗</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="outlineSpeed">动画速度：</label>
				<select id="outlineSpeed" name="outlineSpeed">
					<option value="" <?=$_POST['outlineSpeed']==''?'selected="selected"':'' ?>>立即显示</option>
					<option value="trans01s" <?=$_POST['outlineSpeed']=='trans01s'?'selected="selected"':'' ?>>快速</option>
					<option value="trans02s" <?=$_POST['outlineSpeed']=='trans02s'?'selected="selected"':'' ?>>较快</option>
					<option value="trans05s" <?=$_POST['outlineSpeed']=='trans05s'?'selected="selected"':'' ?>>较慢</option>
					<option value="trans1s" <?=$_POST['outlineSpeed']=='trans1s'?'selected="selected"':'' ?>>慢速</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="sdtzOutlineShadowColor">阴影颜色：</label>
				<div class="setcolorpanel">
					<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['outlineShadowColor']?>;"></div></div></div>
					<input id="sdtzOutlineShadowColor" class="setinputcolor tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$_POST['outlineShadowColor']?>" />
				</div>
			</li>
		</ul>
	</div>
	</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({
		active: <?=$active?>,
		activate: function( event, ui ) {
			var curtab = ui.newTab, oldtab = ui.oldTab, href = curtab.children("a").attr("href"), oldHref = oldtab.children("a").attr("href");
			if(href == "#tabs-95") {
				if("<?=$_POST['itemCount']?>" != $("#itemCountShow").html()) {
					$.ajax({
						url: "quickitemlist.php",
						type: "POST",
						data: {itemCount: $("#itemCountShow").html()},
						success: function(m) {
							$(href).html(m);
							itemQuickSet("enter", "#tabs-95");
						}
					});
				} else {
					itemQuickSet("enter", "#tabs-95");
				}
			}
			if(oldHref == "#tabs-95"){
				itemQuickSet("leave", "#tabs-95");
			}
		}
	});
	$("#tabs-95").off("click.syncData").on("click.syncData", function(event) {
		var _t = $(event.target), _ele =  _t.parent().parent().parent().parent(), _boxLeft = _ele.children(".qmleft"), index = _ele.index();
		var itemMode, _itemPicTemp, tval, aUrl = "";
		itemMode = $("input[type='radio'][name='itemMode']:checked").val();
		_itemPicTemp = $("#itemPicTemp"); tVal = _itemPicTemp.val();
		if(itemMode == "ptitem") { aUrl = "giiforp.php"; }
		else if(itemMode == "pptitem") { aUrl = "giiforp_ppt.php"; }
		if(_t.hasClass("lj-sync-icon")) {
			var jurl=_t.prev().val();
			var patt1 = new RegExp("http");
			var result = patt1.test(jurl);
			if(!result){
				jurl='https:'+jurl;
			}
			$.ajax({
				url: "gii.php",
				data: {item: [jurl], ewmSize: $("#erWeiMaSize").val(), random: Math.random()*10000},
				type: "POST",
				dataType: "JSON",
				success: function(m) {
					var data = m[1], temp;
					data.splice(1, 1);
					temp = data[2];
					data[2] = data[3];
					data[3] = temp;
					_t.parent().parent().find(".qmeleval").each(function(i, e) {
						if(i > 0) {
							$(this).val(data[i-1]);
						}
					});
					if(data[0] != "") {
						_boxLeft.children(".qmpicpreview").children("img").attr("src", data[0]);
						_boxLeft.children(".qmpicselect").attr("data-pPos", "1");
					}
				}
			});
			$.ajax({
				url: aUrl,
				type: "POST",
				dataType: "JSON",
				data: { item: jurl.split(","), random: Math.random()*10000 },
				success: function(m) {
					if(m[0] == "yes") {
						for(var j=1;j<m.length;j++) {
							if(m[j]) {
								if(m[j]["colorImg"] && m[j]["colorImg"] != "") {
									var colorImg = m[j]["colorImg"];
									for(var i = 0; i<colorImg.length;i++) {
										m[j][ colorImg[i].valueId] = colorImg[i].imgUrl;
									}
								}
							}
						}
						if(_itemPicTemp.html()!= "") {
							var oldm = JSON.parse(_itemPicTemp.html());
							oldm[index+1] = m[1];
							_itemPicTemp.html(JSON.stringify(oldm));
						} else {
							_itemPicTemp.html(JSON.stringify(m));
						}
					}
				}
			});
		} else if(_t.hasClass("bt-sync-icon") || _t.hasClass("xj-sync-icon") || _t.hasClass("yj-sync-icon")) {
			_t.hasClass("active") ? 
			(_t.removeClass("active"), _t.prev().prop("readonly", false).removeClass("disabled")) : 
			(_t.addClass("active"), _t.prev().prop("readonly", true).addClass("disabled"));
		}
	});
	$("#tabs-95").off("click.catchSelect").on("click.catchSelect", ".qmpicselect", function(event) {
		var _t  = $(this), offs = _t.offset(), _cipb = $("#catchItemPicBox"), index = _t.parent().parent().index(), _oldselect = _cipb.data("whichsel"), _selectVal = _t.attr("data-pPos"), id = "", itemMode = $("input[name='itemMode']:checked").val() || "ptitem";
		_cipb.show().offset({
			top: offs.top + 28,
			left: offs.left
		});
		_cipb.data("whichsel", _t).attr("data-qm", "yes");
		itempiccatchboxQuick(_selectVal, index, _cipb);
	});
	$(".ui-dialog-content input[type='text'],.ui-dialog-content input[type='radio'],.ui-dialog-content .setform > li > div").buttonset();
	$("#tForm select").fontselectmenu();
	$(".setform").tooltip({
		position: {
			my: "left top",
			at: "left bottom+5"
		},
		show: {
			duration: "fast"
		},
		hide: {
			effect: "hide"
		}
	});
	
	$("#panelPos").off("change").on("change", function() {
		var _t = $(this), v = _t.val(), _label = $("#itemPanelHeightLabel");
		if(v == "right") {
			_label.html("面板宽度：");
		} else {
			_label.html("面板高度：");
		}
	});
	
	$(".borderControl, .shadowControl, .outlineControl").hide();
	
	$(".borderControl1, .shadowControl1").hide();
	
	"<?=$_POST['borderControl']?>"=="hborder" && $(".borderControl").show();
	"<?=$_POST['shadowControl']?>"=="shadowShow" && $(".shadowControl").show();
	"<?=$_POST['outlineControl']?>"=="outlineShow" && $(".outlineControl").show();
	
	
	"<?=$_POST['borderControl1']?>"=="hborder1" && $(".borderControl1").show();
	"<?=$_POST['shadowControl1']?>"=="shadowShow1" && $(".shadowControl1").show();
	$("#hc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl").show();
		} else {
			$(".borderControl").hide();
		}
	});
	$("#hc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl").show();
		} else {
			$(".shadowControl").hide();
		}
	});
	$("#hc4").click(function() {
		if(!!$(this).prop("checked")) {
			$(".outlineControl").show();
		} else {
			$(".outlineControl").hide();
		}
	});
	$("#bc2").click(function() {
		if(!!$(this).prop("checked")) {
			$(".borderControl1").show();
		} else {
			$(".borderControl1").hide();
		}
	});
	$("#bc3").click(function() {
		if(!!$(this).prop("checked")) {
			$(".shadowControl1").show();
		} else {
			$(".shadowControl1").hide();
		}
	});
	
	$(".bhm_item, .bhm_item1, .bhm_item2").hide();
	"<?=$_POST['btnHoverMode']?>"=="bhm_item" && $(".bhm_item").show();
	"<?=$_POST['btn1HoverMode']?>"=="bhm_item" && $(".bhm_item1").show();
	"<?=$_POST['btn2HoverMode']?>"=="bhm_item" && $(".bhm_item2").show();
	$("#hrd1").on("click", "input[name='btnHoverMode']", function() {
		var val = $(this).val();
		if(val == "bhm_item") {
			$(".bhm_item").show();
		} else {
			$(".bhm_item").hide();
		}
	});
	$("#hrd2").on("click", "input[name='btn1HoverMode']", function() {
		var val = $(this).val();
		if(val == "bhm_item") {
			$(".bhm_item1").show();
		} else {
			$(".bhm_item1").hide();
		}
	});
	$("#hrd3").on("click", "input[name='btn2HoverMode']", function() {
		var val = $(this).val();
		if(val == "bhm_item") {
			$(".bhm_item2").show();
		} else {
			$(".bhm_item2").hide();
		}
	});
	
	$(".itemMode").hide();
	$(".<?=$_POST['itemMode']?>").show();
	var lastMode = "<?=$_POST['itemMode']?>";
	$("#imrd1").on("change", "input[name='itemMode']", function() {
		var val = $(this).val(), D = require("scripts/D");
		$(".itemMode").hide();
		if(val == "ptitem") {
			var pptHref = $("input[name='pptHref']").val();
			if(pptHref != "") {
				D.tConfirm("切换为普通宝贝模式时，品牌团所选宝贝链接将全部清空， 图片、标题、价格等信息仍然保留", function() {
					var href = $("input[name='href']").val(),
						arr_href = href.split(","),
						readVal_x = [];
					for(var i=0;i<arr_href.length;i++) {
						arr_href[i] = "";
						readVal_x[i] = "1";
					}
					$("input[name='href']").val(arr_href.join(","));
					$("input[name='readVal']").val(readVal_x.join(","));
					$("#itemPicTemp").html("");
					$("input[name='pptCount']").val(0);
					$("#itemCountShow1").html(0);
					$(".ptitem").show();
					lastMode = val;
				}, function() {
					$("input[name='itemMode'][value='"+lastMode+"']").trigger("click");
				});
			} else {
				lastMode = val;
				$(".ptitem").show();
			}
		} else {
			$(".pptitem").show();
			if(val == "lrgitem") {
				$("#pptl1").html("俪人购首页地址：");
				$("#pptl2").html("俪人购宝贝选择：");
			} else {
				$("#pptl1").html("品牌团首页地址：");
				$("#pptl2").html("品牌团宝贝选择：");
			}
			lastMode = val;
		}
	});
	
	$(".inputAccording").nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide(); });
	$("#tabs").off("click").on("click", ".inputAccording", function(event) {
		var _t = $(this), _curTab = _t.parent().parent();
		if(_t.hasClass("opened")) {
			_t.removeClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.is(":hidden") ? _tt.addClass("inputAccording-hided") : _tt.slideUp(200); });
		} else {
			_t.addClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.hasClass("inputAccording-hided") ? _tt.removeClass("inputAccording-hided") : _tt.slideDown(200); });
		}
	});
	$(".qmitembox:odd").css("background","#f9f9f9");


	$("#lj-sync-iconAll").click(function(){
		 $(".lj-sync-icon").trigger('click');	
	})
	$("#itemGxAll").click( function () { 
		if($(this).hasClass("itemarrManagerReadIcon-1")){
			$(this).removeClass("itemarrManagerReadIcon-1").addClass("itemarrManagerReadIcon-0");
			$(".qmcheckicon").removeClass("active");
			$(".update").removeClass("disabled").removeAttr("readonly");
		}else{
			$(this).removeClass("itemarrManagerReadIcon-0").addClass("itemarrManagerReadIcon-1");
			$(".qmcheckicon").addClass("active");
			$(".update").addClass("disabled").attr("readonly","readonly");
		}
	});

});
$("#dialogForm").click(function(){
	if($("#qset").attr("aria-expanded")=="true"){
		$("#getinfo").show();
	}else{
		$("#getinfo").hide();
	}
});
</script>