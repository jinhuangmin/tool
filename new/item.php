<?
$data=$_POST;
if($data['active']==-1){$active=2;}else{$active=$data['active'];}
?>
<form id="tForm" form-data="jib" method="post" >
<div id="tabs">
	<ul>
		<li id="liebiaodianji"><a href="#tabs-1">列表设置</a></li>
		<li><a href="#tabs-2">宝贝图片</a></li>
		<li><a href="#tabs-3">信息面板</a></li>
		<li><a href="#tabs-4">标题</a></li>
		<li><a href="#tabs-11">副标题</a></li>
		<li><a href="#tabs-5">现价</a></li>
		<li><a href="#tabs-6">原价</a></li>
		<li><a href="#tabs-7">销量</a></li>
		<li><a href="#tabs-8">按钮</a></li>
		<li><a href="#tabs-12">扩展</a></li>
		<li><a href="#tabs-13">二维码</a></li>
		<li><a href="#tabs-9">边框</a></li>
		<li><a href="#tabs-10">鼠标经过</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<textarea id="itemPicTemp" name="itemPicTemp" style="display:none;"><?=$data['itemPicTemp']?></textarea>
			</li>
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
				<input class="setbtn" type="hidden" title="" name="readVal" value="<?=$data['readVal']?>" />
				<input class="setbtn" type="hidden" title="" name="titleAuto" value="<?=$data['titleAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="priceAuto" value="<?=$data['priceAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="_priceAuto" value="<?=$data['_priceAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="saleAuto" value="<?=$data['saleAuto']?>" />
				<input class="setbtn" type="hidden" title="" name="pSrcPos" value="<?=$data['pSrcPos']?>" />
				<input class="setbtn" type="hidden" title="" name="oSrcPos" value="<?=$data['oSrcPos']?>" />
				<input class="setbtn" type="hidden" title="" name="catchChoose" id="catchChooseWM" value="<?=$data['catchChoose']?>" />
				
			</li>
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li style="display:none;">
				<label for="imrd1">宝贝获取模式：</label>
				<div id="imrd1">
					<input type="radio" id="imr1" name="itemMode" value="ptitem" checked="checked" />
					<label for="imr1" style="width:85px;">普通宝贝</label>
					<input type="radio" id="imr2" name="itemMode" value="pptitem"  />
					<label for="imr2" style="width:70px;">品牌团</label>
					<input type="radio" id="imr3" name="itemMode" value="lrgitem"  />
					<label for="imr3" style="width:70px;">俪人购</label>
				</div>
			</li>
			<li class="itemMode pptitem lrgitem">
				<label id="pptl1">品牌团首页地址：</label>
				<input id="ppti1" class="setinput" type="text" title="请输入首页地址。" name="pptHref" value="<?=$data['pptHref']?>" />
			</li>
			<li class="itemMode pptitem lrgitem">
				<input class="setinput" type="hidden" title="" name="pptCount" value="0" />
				<label id="pptl2">品牌团宝贝选择：</label>
				<button class="tItemDialog" type="button" name="pptItem">选择宝贝</button>
				<span >您已选择了<i id="itemCountShow1">0</i>个宝贝</span>
			</li>
			<li class="itemMode ptitem"><!-- class="itemMode ptitem"-->
				<label>宝贝链接：</label>
				<input class="setinput" type="hidden" title="" name="itemCount" value="<?=$data['itemCount']?>" />
				<button class="tItemDialog" type="button" name="itemLink">设置宝贝链接</button>
				<input class="setbtn" type="hidden" title="" name="href" value="<?=$data['href']?>" />
				<span >您已设置了<strong id="itemCountShow"><?=$data['itemCount']?></strong>个宝贝</span>
				
			</li>
                        
		<li>
				<label for="cd1">显示开关：</label>
				<span id="cd1" style="width:320px;float:left;display:block;">
					<input type="checkbox" id="c1" name="oppoSwitch" value="yes"  <? if($data['oppoSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c1" style="width:auto;float:none;line-height: 24px;">宝贝变换图片</label>
					<input type="checkbox" id="c2" name="titleSwitch" value="yes"  <? if($data['titleSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c2" style="width:auto;float:none;line-height: 24px;">标题</label>
					<input type="checkbox" id="c12" name="subTitleSwitch" value="yes"  <? if($data['subTitleSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c12" style="width:auto;float:none;line-height: 24px;">副标题</label>
					<br>
					<input type="checkbox" id="c5" name="_prefixSwitch" value="yes"  <? if($data['_prefixSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c5" style="width:auto;float:none;line-height: 24px;">现价前缀</label>
					<input type="checkbox" id="c6" name="_priceSwitch" value="yes"  <? if($data['_priceSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c6" style="width:auto;float:none;line-height: 24px;">现价</label>
					<input type="checkbox" id="c3" name="prefixSwitch" value="yes"  <? if($data['prefixSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c3" style="width:auto;float:none;line-height: 24px;">原价前缀</label>
					<input type="checkbox" id="c4" name="priceSwitch" value="yes"  <? if($data['priceSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c4" style="width:auto;float:none;line-height: 24px;">原价</label>
					<br>
					<input type="checkbox" id="c7" name="salePrefixSwitch" value="yes"  <? if($data['salePrefixSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c7" style="width:auto;float:none;line-height: 24px;">销量前缀</label>
					<input type="checkbox" id="c8" name="saleSwitch" value="yes"  <? if($data['saleSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c8" style="width:auto;float:none;line-height: 24px;">销量</label>
					<input type="checkbox" id="c14" name="erWeiMaSwitch" value="yes"  <? if($data['erWeiMaSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c14" style="width:auto;float:none;line-height: 24px;">二维码</label>
					<br>
					<input type="checkbox" id="c9" name="btnSwitch" value="yes"  <? if($data['btnSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c9" style="width:auto;float:none;line-height: 24px;">购买按钮</label>
					<input type="checkbox" id="c10" name="btn1Switch" value="yes"  <? if($data['btn1Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c10" style="width:auto;float:none;line-height: 24px;">收藏按钮</label>
					<input type="checkbox" id="c11" name="btn2Switch" value="yes"  <? if($data['btn2Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c11" style="width:auto;float:none;line-height: 24px;">购物车按钮</label>
					<br>
					<input type="checkbox" id="c13" name="subScriptSwitch" value="yes"  <? if($data['subScriptSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c13" style="width:auto;float:none;line-height: 24px;">扩展图片(1)</label>
					<input type="checkbox" id="c15" name="subScript1Switch" value="yes"  <? if($data['subScript1Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c15" style="width:auto;float:none;line-height: 24px;">扩展图片(2)</label>
					<input type="checkbox" id="c16" name="subScript2Switch" value="yes"  <? if($data['subScript2Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c16" style="width:auto;float:none;line-height: 24px;">扩展图片(3)</label>
					<br>
					<!--
					<input type="checkbox" id="c17" name="subScript3Switch" value="yes"  <? if($data['subScript3Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c17" style="width:auto;float:none;line-height: 24px;">扩展图片(4)</label>
					<input type="checkbox" id="c18" name="subScript4Switch" value="yes"  <? if($data['subScript4Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c18" style="width:auto;float:none;line-height: 24px;">扩展图片(5)</label>
					<br>
					-->
					<input type="checkbox" id="c19" name="expandTextSwitch" value="yes"  <? if($data['expandTextSwitch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c19" style="width:auto;float:none;line-height: 24px;">扩展文字(1)</label>
					<input type="checkbox" id="c20" name="expandText1Switch" value="yes"  <? if($data['expandText1Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c20" style="width:auto;float:none;line-height: 24px;">扩展文字(2)</label>
					<input type="checkbox" id="c21" name="expandText2Switch" value="yes"  <? if($data['expandText2Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c21" style="width:auto;float:none;line-height: 24px;">扩展文字(3)</label>
					<!--
					<input type="checkbox" id="c22" name="expandText3Switch" value="yes"  <? if($data['expandText3Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c22" style="width:auto;float:none;line-height: 24px;">扩展文字(4)</label>
					<input type="checkbox" id="c23" name="expandText4Switch" value="yes"  <? if($data['expandText4Switch']=='yes'){echo'checked="checked"';} ?> />
					<label for="c23" style="width:auto;float:none;line-height: 24px;">扩展文字(5)</label>
					-->
				</span>
			</li>
            
            
            
            <li style="clear:both;">
				<label for="itemColumn">每行显示数量：</label>
				<select id="itemColumn" name="itemColumn">
                       <?
                       for($i=1;$i<31;$i++){if($data['itemColumn']==$i){$ks='selected="selected"';}else{$ks='';} echo'<option value="'.$i.'" '.$ks.'>'.$i.'</option>';}
					   ?>
				</select>
			</li>
            

			<li>
				<label for="i4">宝贝行间距：</label>
				<input id="i4" class="setinput" type="text" title="设置宝贝之间的距离，每行距离" name="lineSpace" value="<?=$data['lineSpace']?>" />
			</li>
			<li>
				<label for="i5">宝贝列间距：</label>
				<input id="i5" class="setinput" type="text" title="设置宝贝之间的距离，每列距离" name="columnSpace" value="<?=$data['columnSpace']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="自动生成，无需填写" name="top" value="<?=$data['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="自动生成，无需填写" name="left" value="<?=$data['left']?>" />
			</li>
			
            <li>
				<label for="hrefMode">链接打开方式：</label>
				<select id="hrefMode" name="hrefMode">
					<option value="_self" <? if($data['hrefMode']=='_self'){echo'selected="selected"';} ?> >原窗口打开</option>
					<option value="_blank" <? if($data['hrefMode']=='_blank'){echo'selected="selected"';} ?> >新窗口打开</option>
				</select>
			</li>
			<li>
				<label for="panelArea">链接覆盖范围：</label>
				<select id="panelArea" name="panelArea">
					<option value="no" <? if($data['panelArea']=='_blank'){echo'selected="selected"';} ?>>链接不覆盖面板</option>
					<option value="yes" <? if($data['panelArea']=='_blank'){echo'selected="selected"';} ?>>链接覆盖面板</option>
				</select>
			</li>

		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label>宝贝主图：</label>
				<button class="tItemDialog" type="button" name="itemPic">设置宝贝主图</button>
				<input class="setbtn" type="hidden" title="" name="pSrc" value="<?=$data['pSrc']?>" />
			</li>
			<li>
				<label>宝贝变换图片：</label>
				<button class="tItemDialog" type="button" name="itemPicHover">设置宝贝变换图片</button>
				<input class="setbtn" type="hidden" title="" name="oppoSrc" value="<?=$data['oppoSrc']?>" />
			</li>
			<li>
				<label for="i20">宝贝图片填充色：</label>
				<input id="i20" class="setinput tColorPicker" type="text" title="" name="itemBgColor" value="<?=$data['itemBgColor']?>" />
			</li>
			<li>
				<label for="pSrcSize">宝贝主图尺寸：</label>
				<select id="pSrcSize" name="pSrcSize">
					<option value="" <? if($data['pSrcSize']==''){echo'selected="selected"';} ?>>原始尺寸</option>
					<?
                     $arraySize = array(20,30,40,50,60,70,80,90,100,110,120,130,145,160,170,180,190,200,210,220,230,234,240,250,270,290,300,310,320,350,360,400,430,460,480,490,540,560,570,580,600,640);
					 foreach($arraySize as $i=>$Size){
						 if($data['pSrcSize']==$Size){$ks='selected="selected"';}else{$ks='';}
						 echo'<option value="'.$Size.'" '.$ks.'>'.$Size.'X'.$Size.'</option>';
						 }
					?>
				</select>
			</li>
			<li>
				<label for="pSrcSize1">变换图片尺寸：</label>
				<select id="pSrcSize1" name="pSrcSize1">
					<option value="" selected="selected">填充整个格子</option>
					<option value="" <? if($data['pSrcSize1']==''){echo'selected="selected"';} ?>>填充整个格子</option>
					<?
                     $arraySize = array(20,30,40,50,60,70,80,90,100,110,120,130,145,160,170,180,190,200,210,220,230,234,240,250,270,290,300,310,320,350,360,400,430,460,480,490,540,560,570,580,600,640);
					 foreach($arraySize as $i=>$Size){
						 if($data['pSrcSize1']==$Size){$ks='selected="selected"';}else{$ks='';}
						 echo'<option value="'.$Size.'" '.$ks.'>'.$Size.'X'.$Size.'</option>';
						 }
					?>
				</select>
			</li>
			<li>
				<label for="i8">图片显示宽度：</label>
				<input id="i8" class="setinput" type="text" title="" name="sWidth" value="<?=$data['sWidth']?>" />
			</li>
			<li>
				<label for="i9">图片显示高度：</label>
				<input id="i9" class="setinput" type="text" title="" name="sHeight" value="<?=$data['sHeight']?>" />
			</li>
			<li>
				<label for="oppoEffect">切换图片动画：</label>
				<select id="oppoEffect" name="oppoEffect">
					<option value="none" selected="selected">无动画</option>
					<option value="june-box-fadein" >淡入淡出</option>
					<option value="uptodown" >从上方进入</option>
					<option value="downtoup" >从下方进入</option>
					<option value="lefttoright" >从左方进入</option>
					<option value="righttoleft" >从右方进入</option>
					<option value="rotation30" >旋转30度</option>
					<option value="rotation60" >旋转60度</option>
					<option value="rotation90" >旋转90度</option>
					<option value="rotation180" >旋转180度</option>
					<option value="rotation270" >旋转270度</option>
					<option value="rotation360" >旋转360度</option>
					<option value="rotation720" >旋转720度</option>
				</select>
			</li>
			<li>
				<label for="oppoSpeed">切换图片速度：</label>
				<select id="oppoSpeed" name="oppoSpeed">
					<option value="" selected="selected">立即显示</option>
					<option value="trans01s" >0.1秒</option>
					<option value="trans02s" >0.2秒</option>
					<option value="trans05s" >0.5秒</option>
					<option value="trans1s" >1秒</option>
					<option value="trans2s" >2秒</option>
					<option value="trans3s" >3秒</option>
					<option value="trans4s" >4秒</option>
					<option value="trans5s" >5秒</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-3">
		<ul class="setform">
			<li>
				<label for="i10">背景颜色：</label>
				<input id="i10" class="setinput tColorPicker" type="text" title="" name="bgColor" value="<?=$data['bgColor']?>" />
			</li>
			<li>
				<label for="i11">背景图片：</label>
				<input id="i11" class="setinput tItisImg" type="text" title="" name="bgImage" value="<?=$data['bgImage']?>" />
			</li>
			<li>
				<label for="i12">面板高度：</label>
				<input id="i12" class="setinput" type="text" title="" name="mHeight" value="<?=$data['mHeight']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-4">
			<ul class="setform">
			<li>
				<label>标题内容：</label>
				<button class="tItemDialog" type="button" name="itemTitle">设置宝贝标题</button>
				<input class="setbtn" type="hidden" title="" name="titleInfo" value="<?=$data['titleInfo']?>" />
			</li>
			<li>
				<label for="t2">标题宽度：</label>
				<input id="t2" class="setinput" type="text" title="" name="titleWidth" value="<?=$data['titleWidth']?>" />
			</li>
			<li>
				<label for="t3">标题高度：</label>
				<input id="t3" class="setinput" type="text" title="" name="titleHeight" value="<?=$data['titleHeight']?>" />
			</li>
			<li>
				<label for="t4">标题背景图片：</label>
				<input id="t4" class="setinput tItisImg" type="text" title="" name="titleBgImage" value="<?=$data['titleBgImage']?>" />
			</li>
			<li>
				<label for="t5">标题背景颜色：</label>
				<input id="t5" class="setinput tColorPicker" type="text" title="" name="titleBgColor" value="<?=$data['titleBgColor']?>" />
			</li>
			<li>
				<label for="t6">标题文字颜色：</label>
				<input id="t6" class="setinput tColorPicker" type="text" title="" name="titleColor" value="<?=$data['titleColor']?>" />
			</li>
			<li>
				<label for="trd1">标题文字对齐：</label>
				<div id="trd1">
					<input type="radio" id="tr1" name="titleAlign" value="left" <? if($data['titleAlign']=='left'){echo'checked="checked"';} ?> />
					<label for="tr1" style="width:80px;">居左</label>
					<input type="radio" id="tr2" name="titleAlign" value="center" <? if($data['titleAlign']=='center'){echo'checked="checked"';} ?> />
					<label for="tr2" style="width:80px;">居中</label>
					<input type="radio" id="tr3" name="titleAlign" value="right" <? if($data['titleAlign']=='right'){echo'checked="checked"';} ?> />
					<label for="tr3" style="width:80px;">居右</label>
				</div>
			</li>
			<li>
				<label for="titleFont">标题文字字体：</label>
				<select id="titleFont" title="" name="titleFont">
					<option value="宋体" <? if($data['titleFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['titleFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['titleFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['titleFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['titleFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['titleFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['titleFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['titleFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['titleFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['titleFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['titleFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['titleFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['titleFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['titleFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['titleFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['titleFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="t8">标题文字大小：</label>
				<input id="t8" class="setinput" type="text" title="" name="titleSize" value="12" />
			</li>
			<li>
				<label for="titleWeight">标题文字粗细：</label>
				<select id="titleWeight" name="titleWeight">
					<option value="normal" <? if($data['titleWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['titleWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="t10">标题文字行高：</label>
				<input id="t10" class="setinput" type="text" title="" name="titleLineHeight" value="<?=$data['subTitleInfo']?>" />
			</li>
			<li>
				<label for="t11">标题文字缩进：</label>
				<input id="t11" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="titleSpace" value="<?=$data['titleSpace']?>" />
			</li>
			<li>
				<label for="t12">标题文字间隔：</label>
				<input id="t12" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="titleSpacing" value="<?=$data['titleSpacing']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-11">
		<ul class="setform">
			<li>
				<label>副标题内容：</label>
				<button class="tItemDialog" type="button" name="itemSubTitle">设置宝贝副标题</button>
				<input class="setbtn" type="hidden" title="" name="subTitleInfo" value="<?=$data['subTitleInfo']?>" />
			</li>
			<li>
				<label for="st2">副标题宽度：</label>
				<input id="st2" class="setinput" type="text" title="" name="subTitleWidth" value="<?=$data['subTitleWidth']?>" />
			</li>
			<li>
				<label for="st3">副标题高度：</label>
				<input id="st3" class="setinput" type="text" title="" name="subTitleHeight" value="<?=$data['subTitleHeight']?>" />
			</li>
			<li>
				<label for="st4">副标题背景图片：</label>
				<input id="st4" class="setinput" type="text" title="" name="subTitleBgImage" value="<?=$data['subTitleBgImage']?>" />
			</li>
			<li>
				<label for="st5">副标题背景颜色：</label>
				<input id="st5" class="setinput tColorPicker" type="text" title="" name="subTitleBgColor" value="<?=$data['subTitleBgColor']?>" />
			</li>
			<li>
				<label for="st6">副标题文字颜色：</label>
				<input id="st6" class="setinput tColorPicker" type="text" title="" name="subTitleColor" value="<?=$data['subTitleColor']?>" />
			</li>
			<li>
				<label for="trd2">副标题文字对齐：</label>
				<div id="trd2">
					<input type="radio" id="tr4" name="subTitleAlign" value="left" <? if($data['subTitleAlign']=='left'){echo'checked="checked"';} ?> />
					<label for="tr4" style="width:80px;">居左</label>
					<input type="radio" id="tr5" name="subTitleAlign" value="center" <? if($data['subTitleAlign']=='center'){echo'checked="checked"';} ?> />
					<label for="tr5" style="width:80px;">居中</label>
					<input type="radio" id="tr6" name="subTitleAlign" value="right" <? if($data['subTitleAlign']=='right'){echo'checked="checked"';} ?> />
					<label for="tr6" style="width:80px;">居右</label>
				</div>
			</li>
			<li>
				<label for="subTitleFont">副标题文字字体：</label>
				<select id="subTitleFont" title="" name="subTitleFont">
					<option value="宋体" <? if($data['subTitleFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['subTitleFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['subTitleFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['subTitleFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['subTitleFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['subTitleFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['subTitleFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['subTitleFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['subTitleFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['subTitleFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['subTitleFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['subTitleFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['subTitleFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['subTitleFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['subTitleFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['subTitleFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="st8">副标题文字大小：</label>
				<input id="st8" class="setinput" type="text" title="" name="subTitleSize" value="<?=$data['subTitleSize']?>" />
			</li>
			<li>
				<label for="subTitleWeight">副标题文字粗细：</label>
				<select id="subTitleWeight" name="subTitleWeight">
					<option value="normal" <? if($data['subTitleWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['subTitleWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="st10">副标题文字行高：</label>
				<input id="st10" class="setinput" type="text" title="" name="subTitleLineHeight" value="<?=$data['subTitleLineHeight']?>" />
			</li>
			<li>
				<label for="st11">副标题文字缩进：</label>
				<input id="st11" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="subTitleSpace" value="<?=$data['subTitleSpace']?>" />
			</li>
			<li>
				<label for="st12">副标题文字间隔：</label>
				<input id="st12" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="subTitleSpacing" value="<?=$data['subTitleSpacing']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-5">
		<ul class="setform">
			<li>
				<label>现价：</label>
				<button class="tItemDialog" type="button" name="itemDiscountPrice">设置宝贝现价</button>
				<input class="setbtn" type="hidden" title="" name="_priceInfo" value="<?=$data['_priceInfo']?>" />
			</li>
			<li>
				<label for="d1">现价文字颜色：</label>
				<input id="d1" class="setinput tColorPicker" type="text" title="" name="_priceColor" value="<?=$data['_priceColor']?>" />
			</li>
			<li>
				<label for="_priceFont">现价文字字体：</label>
				<select id="_priceFont" title="" name="_priceFont">
					<option value="宋体" <? if($data['_priceFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['_priceFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['_priceFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['_priceFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['_priceFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['_priceFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['_priceFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['_priceFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['_priceFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['_priceFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['_priceFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['_priceFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['_priceFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['_priceFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['_priceFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['_priceFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="d3">现价文字大小：</label>
				<input id="d3" class="setinput" type="text" title="" name="_priceSize" value="<?=$data['_priceSize']?>" />
			</li>
			<li>
				<label for="d4">现价文字间隔：</label>
				<input id="d4" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="_priceSpacing" value="<?=$data['_priceSpacing']?>" />
			</li>
			<li>
				<label for="_priceWeight">现价文字粗细：</label>
				<select id="_priceWeight" name="_priceWeight">
					<option value="normal" <? if($data['_priceWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['_priceWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="_priceFixed">现价保留小数：</label>
				<select id="_priceFixed" name="_priceFixed">
					<option value="0" <? if($data['_priceFixed']=='0'){echo'selected="selected"';} ?>>0</option>
					<option value="1" <? if($data['_priceFixed']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if($data['_priceFixed']=='2'){echo'selected="selected"';} ?>>2</option>
				</select>
			</li>
			<li>
				<label for="_priceAlign">现价对齐方式：</label>
				<select id="_priceAlign" name="_priceAlign">
					<option value="auto" <? if($data['_priceAlign']=='auto'){echo'selected="selected"';} ?>>自动对齐</option>
					<option value="qleft" <? if($data['_priceAlign']=='qleft'){echo'selected="selected"';} ?>>左对齐</option>
					<option value="qright" <? if($data['_priceAlign']=='qright'){echo'selected="selected"';} ?>>右对齐</option>
				</select>
			</li>
			<li class="setshousuo">----------------------- 现价前缀 -----------------------------------------</li>			
			<li>
				<label id="d5">前缀：</label>
				<input id="d5" class="setinput" type="text" title="" name="_prefixInfo" value="<?=$data['_prefixInfo']?>" />
			</li>
			<li>
				<label for="d6">前缀文字颜色：</label>
				<input id="d6" class="setinput tColorPicker" type="text" title="" name="_prefixColor" value="<?=$data['_prefixColor']?>" />
			</li>
			<li>
				<label for="_prefixFont">前缀文字字体：</label>
				<select id="_prefixFont" title="" name="_prefixFont">
					<option value="宋体" <? if($data['_prefixFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['_prefixFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['_prefixFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['_prefixFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['_prefixFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['_prefixFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['_prefixFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['_prefixFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['_prefixFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['_prefixFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['_prefixFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['_prefixFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['_prefixFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['_prefixFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['_prefixFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['_prefixFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="d8">前缀文字大小：</label>
				<input id="d8" class="setinput" type="text" title="" name="_prefixSize" value="<?=$data['_prefixSize']?>" />
			</li>
			<li>
				<label for="d9">前缀文字间隔：</label>
				<input id="d9" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="_prefixSpacing" value="<?=$data['_prefixSpacing']?>" />
			</li>
			<li>
				<label for="_prefixWeight">前缀文字粗细：</label>
				<select id="_prefixWeight" name="_prefixWeight">
					<option value="normal" <? if($data['_prefixWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['_prefixWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-6">
		<ul class="setform">
			<li>
				<label>原价：</label>
				<button class="tItemDialog" type="button" name="itemPrice">设置宝贝原价</button>
				<input class="setbtn" type="hidden" title="" name="priceInfo" value="<?=$data['priceInfo']?>" />
			</li>
			<li>
				<label for="p1">原价文字颜色：</label>
				<input id="p1" class="setinput tColorPicker" type="text" title="" name="priceColor" value="<?=$data['priceColor']?>" />
			</li>
			<li>
				<label for="priceFont">原价文字字体：</label>
				<select id="priceFont" title="" name="priceFont">
					<option value="宋体" <? if($data['priceFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['priceFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['priceFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['priceFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['priceFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['priceFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['priceFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['priceFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['priceFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['priceFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['priceFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['priceFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['priceFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['priceFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['priceFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['priceFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="p3">原价文字大小：</label>
				<input id="p3" class="setinput" type="text" title="" name="priceSize" value="<?=$data['priceSize']?>" />
			</li>
			<li>
				<label for="p4">原价文字间隔：</label>
				<input id="p4" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="priceSpacing" value="<?=$data['priceSpacing']?>" />
			</li>
			<li>
				<label for="priceWeight">原价文字粗细：</label>
				<select id="priceWeight" name="priceWeight">
					<option value="normal" <? if($data['priceWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['priceWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="priceDecoration">原价文字中划线：</label>
				<select id="priceDecoration" name="priceDecoration">
					<option value="line-through" <? if($data['priceDecoration']=='line-through'){echo'selected="selected"';} ?>>显示</option>
					<option value="none" <? if($data['priceDecoration']=='none'){echo'selected="selected"';} ?>>不显示</option>
				</select>
			</li>

			<li>
				<label for="priceFixed">原价保留小数：</label>
				<select id="priceFixed" name="priceFixed">
					<option value="0" <? if($data['priceFixed']=='0'){echo'selected="selected"';} ?>>0</option>
					<option value="1" <? if($data['priceFixed']=='1'){echo'selected="selected"';} ?>>1</option>
					<option value="2" <? if($data['priceFixed']=='2'){echo'selected="selected"';} ?>>2</option>
				</select>
			</li>
			<li>
				<label for="priceAlign">原价对齐方式：</label>
				<select id="priceAlign" name="priceAlign">
					<option value="auto" <? if($data['hrefMode']=='auto'){echo'selected="selected"';} ?>>自动对齐</option>
					<option value="qleft" <? if($data['hrefMode']=='qleft'){echo'selected="selected"';} ?>>左对齐</option>
					<option value="qright" <? if($data['hrefMode']=='qright'){echo'selected="selected"';} ?>>右对齐</option>
				</select>
			</li>
			<li class="setshousuo">----------------------- 原价前缀 -----------------------------------------</li>			
			<li>
				<label id="p5">前缀：</label>
				<input id="p5" class="setinput" type="text" title="" name="prefixInfo" value="<?=$data['prefixInfo']?>" />
			</li>
			<li>
				<label for="p6">前缀文字颜色：</label>
				<input id="p6" class="setinput tColorPicker" type="text" title="" name="prefixColor" value="<?=$data['prefixColor']?>" />
			</li>
			<li>
				<label for="prefixFont">前缀文字字体：</label>
				<select id="prefixFont" title="" name="prefixFont">
					<option value="宋体" <? if($data['prefixFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['prefixFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['prefixFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['prefixFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['prefixFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['prefixFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['prefixFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['prefixFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['prefixFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['prefixFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['prefixFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['prefixFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['prefixFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['prefixFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['prefixFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['prefixFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="p8">前缀文字大小：</label>
				<input id="p8" class="setinput" type="text" title="" name="prefixSize" value="<?=$data['prefixSize']?>" />
			</li>
			<li>
				<label for="p9">前缀文字间隔：</label>
				<input id="p9" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="prefixSpacing" value="<?=$data['prefixSpacing']?>" />
			</li>
			<li>
				<label for="prefixWeight">前缀文字粗细：</label>
				<select id="prefixWeight" name="prefixWeight">
					<option value="normal" <? if($data['prefixWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['prefixWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="prefixDecoration">前缀文字中划线：</label>
				<select id="prefixDecoration" name="prefixDecoration">
					<option value="line-through" <? if($data['prefixDecoration']=='line-through'){echo'selected="selected"';} ?>>显示</option>
					<option value="none" <? if($data['prefixDecoration']=='bold'){echo'selected="selected"';} ?>>不显示</option>
				</select>
			</li>
		</ul>
	</div>	
	<div id="tabs-7">
		<ul class="setform">
			<li>
				<label>销量：</label>
				<button class="tItemDialog" type="button" name="itemSale">设置宝贝销量</button>
				<input class="setbtn" type="hidden" title="" name="saleInfo" value="<?=$data['saleInfo']?>" />
			</li>
			<li>
				<label for="s1">销量文字颜色：</label>
				<input id="s1" class="setinput tColorPicker" type="text" title="" name="saleColor" value="<?=$data['saleColor']?>" />
			</li>
			<li>
				<label for="saleFont">销量文字字体：</label>
				<select id="saleFont" title="" name="saleFont">
					<option value="宋体" <? if($data['saleFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['saleFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['saleFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['saleFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['saleFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['saleFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['saleFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['saleFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['saleFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['saleFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['saleFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['saleFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['saleFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['saleFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['saleFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['saleFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="s3">销量文字大小：</label>
				<input id="s3" class="setinput" type="text" title="" name="saleSize" value="<?=$data['saleSize']?>" />
			</li>
			<li>
				<label for="s4">销量文字间隔：</label>
				<input id="s4" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="saleSpacing" value="<?=$data['saleSpacing']?>" />
			</li>
			<li>
				<label for="saleWeight">销量文字粗细：</label>
				<select id="saleWeight" name="saleWeight">
					<option value="normal" <? if($data['saleWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['saleWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
			<li>
				<label for="saleAlign">销量对齐方式：</label>
				<select id="saleAlign" name="saleAlign">
					<option value="auto" <? if($data['saleAlign']=='auto'){echo'selected="selected"';} ?>>自动对齐</option>
					<option value="qleft" <? if($data['saleAlign']=='qleft'){echo'selected="selected"';} ?>>左对齐</option>
					<option value="qright" <? if($data['saleAlign']=='qright'){echo'selected="selected"';} ?>>右对齐</option>
				</select>
			</li>
			<li class="setshousuo">----------------------- 销量前缀 -----------------------------------------</li>			
			<li>
				<label id="s5">前缀：</label>
				<input id="s5" class="setinput" type="text" title="" name="salePrefixInfo" value="<?=$data['salePrefixInfo']?>" />
			</li>
			<li>
				<label for="s6">前缀文字颜色：</label>
				<input id="s6" class="setinput tColorPicker" type="text" title="" name="salePrefixColor" value="<?=$data['salePrefixColor']?>" />
			</li>
			<li>
				<label for="salePrefixFont">前缀文字字体：</label>
				<select id="salePrefixFont" title="" name="salePrefixFont">
					<option value="宋体" <? if($data['salePrefixFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['salePrefixFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['salePrefixFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['salePrefixFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['salePrefixFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['salePrefixFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['salePrefixFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['salePrefixFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['salePrefixFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['salePrefixFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['salePrefixFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['salePrefixFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['salePrefixFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['salePrefixFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['salePrefixFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['salePrefixFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
				</select>
			</li>
			<li>
				<label for="s8">前缀文字大小：</label>
				<input id="s8" class="setinput" type="text" title="" name="salePrefixSize" value="<?=$data['salePrefixSize']?>" />
			</li>
			<li>
				<label for="s9">前缀文字间隔：</label>
				<input id="s9" class="setinput" type="text" title="请输入数值，无需加px, 可为负数；如：10或-2。" name="salePrefixSpacing" value="<?=$data['salePrefixSpacing']?>" />
			</li>
			<li>
				<label for="salePrefixWeight">前缀文字粗细：</label>
				<select id="salePrefixWeight" name="salePrefixWeight">
					<option value="normal" <? if($data['salePrefixWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
					<option value="bold" <? if($data['salePrefixWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-8">
		<ul class="setform">
			<li class="setshousuo">----------------------- 立即购买按钮 -----------------------------------------</li>			
			<li>
				<label for="hb1">按钮背景图片：</label>
				<input id="hb1" class="setinput" type="text" title="" name="btnSrc" value="<?=$data['btnSrc']?>" />
			</li>
			<li>
				<label for="hb2">按钮变换图片：</label>
				<input id="hb2" class="setinput" type="text" title="" name="btnHoverSrc" value="<?=$data['btnHoverSrc']?>" />
			</li>
			<li>
				<label for="hrd1">鼠标经过何处变换：</label>
				<div id="hrd1">
					<input type="radio" id="hr1" name="btnHoverMode" value="bhm_btn" <? if($data['btnHoverMode']=='bhm_btn'){echo'checked="checked"';} ?> />
					<label for="hr1" title="鼠标经过当前按钮时显示变换图片" style="width:90px;">当前按钮</label>
					<input type="radio" id="hr2" name="btnHoverMode" value="bhm_item"  <? if($data['btnHoverMode']=='bhm_item'){echo'checked="checked"';} ?>/>
					<label for="hr2" title="鼠标经过当前宝贝时显示变换图片" style="width:90px;">当前宝贝</label>
				</div>
			</li>
			<li class="bhm_item">
				<label for="btnStyle">鼠标经过切换方式：</label>
				<select id="btnStyle" name="btnStyle">
					<option value="" <? if($data['btnStyle']==''){echo'selected="selected"';} ?>>无效果切换</option>
					<option value="june-box-fadeout" <? if($data['btnStyle']=='june-box-fadeout'){echo'selected="selected"';} ?>>淡入淡出切换</option>
				</select>
			</li>
			
            
            <li class="bhm_item">
				<label for="btnHoverStyleX">变换图片横向移动：</label>
				<select id="btnHoverStyleX" name="btnHoverStyleX">
					<option value="" <? if($item['btnHoverStyleX']==''){echo'selected="selected"';} ?>>无效果</option>
						<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['btnHoverStyleX']==$sx){$select='selected="selected"';}else{$select='';}
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
                    <option value="" <? if($item['btnHoverStyleY']==''){echo'selected="selected"';} ?>>无效果</option>
                    <?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['btnHoverStyleY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item">
				<label for="btnHoverStyle">变换图片效果：</label>
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
				<label for="btnHoverSpeed">变换图片速度：</label>
				<select id="btnHoverSpeed" name="btnHoverSpeed">
					<option value="trans01s" >快速</option>
					<option value="trans02s" >较快</option>
					<option value="trans05s" selected="selected">中等</option>
					<option value="trans1s" >较慢</option>
					<option value="trans2s" >慢速</option>
				</select>
			</li>
			<li class="setshousuo">----------------------- 收藏宝贝按钮 -----------------------------------------</li>			
			<li>
				<label for="hb3">按钮背景图片：</label>
				<input id="hb3" class="setinput" type="text" title="" name="btn1Src" value="<?=$data['btn1Src']?>" />
			</li>
			<li>
				<label for="hb4">按钮变换图片：</label>
				<input id="hb4" class="setinput" type="text" title="" name="btn1HoverSrc" value="<?=$data['btn1HoverSrc']?>" />
			</li>
			<li>
				<label for="hrd2">鼠标经过何处变换：</label>
				<div id="hrd2">
					<input type="radio" id="hr3" name="btn1HoverMode" value="bhm_btn" <? if($data['btn1HoverMode']=='bhm_btn'){echo'checked="checked"';} ?> />
					<label for="hr3" title="鼠标经过当前按钮时显示变换图片" style="width:90px;">当前按钮</label>
					<input type="radio" id="hr4" name="btn1HoverMode" value="bhm_item" <? if($data['btn1HoverMode']=='bhm_item'){echo'checked="checked"';} ?> />
					<label for="hr4" title="鼠标经过当前宝贝时显示变换图片" style="width:90px;">当前宝贝</label>
				</div>
			</li>
			<li class="bhm_item1">
				<label for="btn1Style">鼠标经过切换方式：</label>
				<select id="btn1Style" name="btn1Style">
					<option value="" <? if($data['btn1Style']==''){echo'selected="selected"';} ?>>无效果切换</option>
					<option value="june-box-fadeout" <? if($data['btn1Style']=='june-box-fadeout'){echo'selected="selected"';} ?> >淡入淡出切换</option>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverStyleX">变换图片横向移动：</label>
				<select id="btn1HoverStyleX" name="btn1HoverStyleX">
					<option value="" <? if($item['btn1HoverStyleX']==''){echo'selected="selected"';} ?>>无效果</option>
						<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['btn1HoverStyleX']==$sx){$select='selected="selected"';}else{$select='';}
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
					<option value="" <? if($item['btn1HoverStyleY']==''){echo'selected="selected"';} ?>>无效果</option>
                    <?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['btn1HoverStyleY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverStyle">变换图片效果：</label>
				<select id="btn1HoverStyle" name="btn1HoverStyle">
					<option value="" <? if($item['btn1HoverStyle']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($item['btn1HoverStyle']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($item['btn1HoverStyle']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($item['btn1HoverStyle']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-box-sf" <? if($item['btn1HoverStyle']=='june-box-sf'){echo'selected="selected"';} ?>>放大显示</option>
					<option value="june-box-sf0" <? if($item['btn1HoverStyle']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小消失</option>
					<option value="june-box-sfr360" <? if($item['btn1HoverStyle']=='june-box-sfr360'){echo'selected="selected"';} ?>>顺时针旋转一周放大显示</option>
					<option value="june-box-sfr720" <? if($item['btn1HoverStyle']=='june-box-sfr720'){echo'selected="selected"';} ?>>顺时针旋转二周放大显示</option>
					<option value="june-box-sffr360" <? if($item['btn1HoverStyle']=='june-box-sffr360'){echo'selected="selected"';} ?>>逆时针旋转一周放大显示</option>
					<option value="june-box-sffr720" <? if($item['btn1HoverStyle']=='june-box-sffr720'){echo'selected="selected"';} ?>>逆时针旋转二周放大显示</option>
					
					<option value="june-box-sf0r360" <? if($item['btn1HoverStyle']=='june-box-sf0r360'){echo'selected="selected"';} ?>>顺时针旋转一周缩小消失</option>
					<option value="june-box-sf0r720" <? if($item['btn1HoverStyle']=='june-box-sf0r720'){echo'selected="selected"';} ?>>顺时针旋转二周缩小消失</option>
					<option value="june-box-sf0fr360" <? if($item['btn1HoverStyle']=='june-box-sf0fr360'){echo'selected="selected"';} ?>>逆时针旋转一周缩小消失</option>
					<option value="june-box-sf0fr720" <? if($item['btn1HoverStyle']=='june-box-sf0fr720'){echo'selected="selected"';} ?>>逆时针旋转二周缩小消失</option>
					
					<option value="june-box-fxr360" <? if($item['btn1HoverStyle']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
					<option value="june-box-fxr720" <? if($item['btn1HoverStyle']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
					<option value="june-box-fxfr360" <? if($item['btn1HoverStyle']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
					<option value="june-box-fxfr720" <? if($item['btn1HoverStyle']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
					
					<option value="june-box-fyr360" <? if($item['btn1HoverStyle']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
					<option value="june-box-fyr720" <? if($item['btn1HoverStyle']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
					<option value="june-box-fyfr360" <? if($item['btn1HoverStyle']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
					<option value="june-box-fyfr720" <? if($item['btn1HoverStyle']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
					
					<option value="june-box-sf02" <? if($item['btn1HoverStyle']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($item['btn1HoverStyle']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($item['btn1HoverStyle']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($item['btn1HoverStyle']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($item['btn1HoverStyle']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($item['btn1HoverStyle']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($item['btn1HoverStyle']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($item['btn1HoverStyle']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf102" <? if($item['btn1HoverStyle']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($item['btn1HoverStyle']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($item['btn1HoverStyle']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($item['btn1HoverStyle']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($item['btn1HoverStyle']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($item['btn1HoverStyle']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($item['btn1HoverStyle']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
										<option value="june-box-r10" <? if($item['btn1HoverStyle']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
										<option value="june-box-r20" <? if($item['btn1HoverStyle']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
										<option value="june-box-r30" <? if($item['btn1HoverStyle']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
										<option value="june-box-r40" <? if($item['btn1HoverStyle']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
										<option value="june-box-r50" <? if($item['btn1HoverStyle']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
										<option value="june-box-r60" <? if($item['btn1HoverStyle']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
										<option value="june-box-r70" <? if($item['btn1HoverStyle']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
										<option value="june-box-r80" <? if($item['btn1HoverStyle']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
										<option value="june-box-r90" <? if($item['btn1HoverStyle']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
										<option value="june-box-r120" <? if($item['btn1HoverStyle']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-box-r180" <? if($item['btn1HoverStyle']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-box-r270" <? if($item['btn1HoverStyle']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-box-r360" <? if($item['btn1HoverStyle']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-box-r720" <? if($item['btn1HoverStyle']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
										<option value="june-box-fr10" <? if($item['btn1HoverStyle']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
										<option value="june-box-fr20" <? if($item['btn1HoverStyle']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
										<option value="june-box-fr30" <? if($item['btn1HoverStyle']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
										<option value="june-box-fr40" <? if($item['btn1HoverStyle']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
										<option value="june-box-fr50" <? if($item['btn1HoverStyle']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
										<option value="june-box-fr60" <? if($item['btn1HoverStyle']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
										<option value="june-box-fr70" <? if($item['btn1HoverStyle']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
										<option value="june-box-fr80" <? if($item['btn1HoverStyle']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
										<option value="june-box-fr90" <? if($item['btn1HoverStyle']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
										<option value="june-box-fr120" <? if($item['btn1HoverStyle']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-box-fr180" <? if($item['btn1HoverStyle']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-box-fr270" <? if($item['btn1HoverStyle']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-box-fr360" <? if($item['btn1HoverStyle']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-box-fr720" <? if($item['btn1HoverStyle']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
				</select>
			</li>
			<li class="bhm_item1">
				<label for="btn1HoverSpeed">变换图片速度：</label>
				<select id="btn1HoverSpeed" name="btn1HoverSpeed">
					<option value="trans01s" <? if($data['btn1HoverSpeed']=='trans01s'){echo'selected="selected"';} ?> >快速</option>
					<option value="trans02s" <? if($data['btn1HoverSpeed']=='trans02s'){echo'selected="selected"';} ?> >较快</option>
					<option value="trans05s" <? if($data['btn1HoverSpeed']=='trans05s'){echo'selected="selected"';} ?> >中等</option>
					<option value="trans1s" <? if($data['btn1HoverSpeed']=='trans1s'){echo'selected="selected"';} ?> >较慢</option>
					<option value="trans2s" <? if($data['btn1HoverSpeed']=='trans2s'){echo'selected="selected"';} ?> >慢速</option>
				</select>
			</li>
			<li class="setshousuo">----------------------- 加入购物车按钮 -----------------------------------------</li>			
			<li>
				<label for="hb5">按钮背景图片：</label>
				<input id="hb5" class="setinput" type="text" title="" name="btn2Src" value="<?=$data['btn2Src']?>" />
			</li>
			<li>
				<label for="hb6">按钮变换图片：</label>
				<input id="hb6" class="setinput" type="text" title="" name="btn2HoverSrc" value="<?=$data['btn2HoverSrc']?>" />
			</li>
			<li>
				<label for="hrd3">鼠标经过何处变换：</label>
				<div id="hrd3">
					<input type="radio" id="hr5" name="btn2HoverMode" value="bhm_btn" <? if($data['btn2HoverMode']=='bhm_btn'){echo'checked="checked"';} ?> />
					<label for="hr5" title="鼠标经过当前按钮时显示变换图片" style="width:90px;">当前按钮</label>
					<input type="radio" id="hr6" name="btn2HoverMode" value="bhm_item" <? if($data['btn2HoverMode']=='bhm_item'){echo'checked="checked"';} ?> />
					<label for="hr6" title="鼠标经过当前宝贝时显示变换图片" style="width:90px;">当前宝贝</label>
				</div>
			</li>
			<li class="bhm_item2">
				<label for="btn2Style">鼠标经过切换方式：</label>
				<select id="btn2Style" name="btn2Style">
					<option value="" <? if($data['btn2Style']==''){echo'selected="selected"';} ?>>无效果切换</option>
					<option value="june-box-fadeout" <? if($data['btn2Style']=='june-box-fadeout'){echo'selected="selected"';} ?>>淡入淡出切换</option>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverStyleX">变换图片横向移动：</label>
				<select id="btn2HoverStyleX" name="btn2HoverStyleX">
					<option value="" <? if($item['btn2HoverStyleX']==''){echo'selected="selected"';} ?>>无效果</option>
						<?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-lx';$text='向左移动';}
				   if($k==2){$type='june-box-rx';$text='向右移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['btn2HoverStyleX']==$sx){$select='selected="selected"';}else{$select='';}
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
					<option value="" <? if($item['btn2HoverStyleY']==''){echo'selected="selected"';} ?>>无效果</option>
                    <?
				for($k=1;$k<=2;$k++){
				   if($k==1){$type='june-box-uy';$text='向上移动';}
				   if($k==2){$type='june-box-dy';$text='向下移动';}
				   for($n=1;$n<=62;$n++){ $f=$n*10;
				   $sx=''.$type.''.$f.'';
				   if($item['btn2HoverStyleY']==$sx){$select='selected="selected"';}else{$select='';}
				   echo'<option value="'.$sx.'" '.$select.'>'.$text.''.$f.'像素</option>
				   ';
				   }
				 }
				?>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverStyle">变换图片效果：</label>
				<select id="btn2HoverStyle" name="btn2HoverStyle">
					<option value="" <? if($item['btn2HoverStyle']==''){echo'selected="selected"';} ?>>无效果</option>
					<option value="june-box-fx" <? if($item['btn2HoverStyle']=='june-box-fx'){echo'selected="selected"';} ?>>横向翻转</option>
					<option value="june-box-fy" <? if($item['btn2HoverStyle']=='june-box-fy'){echo'selected="selected"';} ?>>纵向翻转</option>
					<option value="june-box-fxy" <? if($item['btn2HoverStyle']=='june-box-fxy'){echo'selected="selected"';} ?>>横向纵向同时翻转</option>
					<option value="june-box-sf" <? if($item['btn2HoverStyle']=='june-box-sf'){echo'selected="selected"';} ?>>放大显示</option>
					<option value="june-box-sf0" <? if($item['btn2HoverStyle']=='june-box-sf0'){echo'selected="selected"';} ?>>缩小消失</option>
					<option value="june-box-sfr360" <? if($item['btn2HoverStyle']=='june-box-sfr360'){echo'selected="selected"';} ?>>顺时针旋转一周放大显示</option>
					<option value="june-box-sfr720" <? if($item['btn2HoverStyle']=='june-box-sfr720'){echo'selected="selected"';} ?>>顺时针旋转二周放大显示</option>
					<option value="june-box-sffr360" <? if($item['btn2HoverStyle']=='june-box-sffr360'){echo'selected="selected"';} ?>>逆时针旋转一周放大显示</option>
					<option value="june-box-sffr720" <? if($item['btn2HoverStyle']=='june-box-sffr720'){echo'selected="selected"';} ?>>逆时针旋转二周放大显示</option>
					
					<option value="june-box-sf0r360" <? if($item['btn2HoverStyle']=='june-box-sf0r360'){echo'selected="selected"';} ?>>顺时针旋转一周缩小消失</option>
					<option value="june-box-sf0r720" <? if($item['btn2HoverStyle']=='june-box-sf0r720'){echo'selected="selected"';} ?>>顺时针旋转二周缩小消失</option>
					<option value="june-box-sf0fr360" <? if($item['btn2HoverStyle']=='june-box-sf0fr360'){echo'selected="selected"';} ?>>逆时针旋转一周缩小消失</option>
					<option value="june-box-sf0fr720" <? if($item['btn2HoverStyle']=='june-box-sf0fr720'){echo'selected="selected"';} ?>>逆时针旋转二周缩小消失</option>
					
					<option value="june-box-fxr360" <? if($item['btn2HoverStyle']=='june-box-fxr360'){echo'selected="selected"';} ?>>顺时针旋转一周横向翻转</option>
					<option value="june-box-fxr720" <? if($item['btn2HoverStyle']=='june-box-fxr720'){echo'selected="selected"';} ?>>顺时针旋转二周横向翻转</option>
					<option value="june-box-fxfr360" <? if($item['btn2HoverStyle']=='june-box-fxfr360'){echo'selected="selected"';} ?>>逆时针旋转一周横向翻转</option>
					<option value="june-box-fxfr720" <? if($item['btn2HoverStyle']=='june-box-fxfr720'){echo'selected="selected"';} ?>>逆时针旋转二周横向翻转</option>
					
					<option value="june-box-fyr360" <? if($item['btn2HoverStyle']=='june-box-fyr360'){echo'selected="selected"';} ?>>顺时针旋转一周纵向翻转</option>
					<option value="june-box-fyr720" <? if($item['btn2HoverStyle']=='june-box-fyr720'){echo'selected="selected"';} ?>>顺时针旋转二周纵向翻转</option>
					<option value="june-box-fyfr360" <? if($item['btn2HoverStyle']=='june-box-fyfr360'){echo'selected="selected"';} ?>>逆时针旋转一周纵向翻转</option>
					<option value="june-box-fyfr720" <? if($item['btn2HoverStyle']=='june-box-fyfr720'){echo'selected="selected"';} ?>>逆时针旋转二周纵向翻转</option>
					
					<option value="june-box-sf02" <? if($item['btn2HoverStyle']=='june-box-sf02'){echo'selected="selected"';} ?>>缩小至0.2倍</option>
					<option value="june-box-sf04" <? if($item['btn2HoverStyle']=='june-box-sf04'){echo'selected="selected"';} ?>>缩小至0.4倍</option>
					<option value="june-box-sf05" <? if($item['btn2HoverStyle']=='june-box-sf05'){echo'selected="selected"';} ?>>缩小至0.5倍</option>
					<option value="june-box-sf06" <? if($item['btn2HoverStyle']=='june-box-sf06'){echo'selected="selected"';} ?>>缩小至0.6倍</option>
					<option value="june-box-sf08" <? if($item['btn2HoverStyle']=='june-box-sf08'){echo'selected="selected"';} ?>>缩小至0.8倍</option>
					<option value="june-box-sf09" <? if($item['btn2HoverStyle']=='june-box-sf09'){echo'selected="selected"';} ?>>缩小至0.9倍</option>
					<option value="june-box-sf095" <? if($item['btn2HoverStyle']=='june-box-sf095'){echo'selected="selected"';} ?>>缩小至0.95倍</option>
					<option value="june-box-sf098" <? if($item['btn2HoverStyle']=='june-box-sf098'){echo'selected="selected"';} ?>>缩小至0.98倍</option>
					<option value="june-box-sf102" <? if($item['btn2HoverStyle']=='june-box-sf102'){echo'selected="selected"';} ?>>放大至1.02倍</option>
					<option value="june-box-sf105" <? if($item['btn2HoverStyle']=='june-box-sf105'){echo'selected="selected"';} ?>>放大至1.05倍</option>
					<option value="june-box-sf110" <? if($item['btn2HoverStyle']=='june-box-sf110'){echo'selected="selected"';} ?>>放大至1.1倍</option>
					<option value="june-box-sf120" <? if($item['btn2HoverStyle']=='june-box-sf120'){echo'selected="selected"';} ?>>放大至1.2倍</option>
					<option value="june-box-sf150" <? if($item['btn2HoverStyle']=='june-box-sf150'){echo'selected="selected"';} ?>>放大至1.5倍</option>
					<option value="june-box-sf180" <? if($item['btn2HoverStyle']=='june-box-sf180'){echo'selected="selected"';} ?>>放大至1.8倍</option>
					<option value="june-box-sf200" <? if($item['btn2HoverStyle']=='june-box-sf200'){echo'selected="selected"';} ?>>放大至2倍</option>
										<option value="june-box-r10" <? if($item['btn2HoverStyle']=='june-box-r10'){echo'selected="selected"';} ?>>顺时针旋转10度</option>
										<option value="june-box-r20" <? if($item['btn2HoverStyle']=='june-box-r20'){echo'selected="selected"';} ?>>顺时针旋转20度</option>
										<option value="june-box-r30" <? if($item['btn2HoverStyle']=='june-box-r30'){echo'selected="selected"';} ?>>顺时针旋转30度</option>
										<option value="june-box-r40" <? if($item['btn2HoverStyle']=='june-box-r40'){echo'selected="selected"';} ?>>顺时针旋转40度</option>
										<option value="june-box-r50" <? if($item['btn2HoverStyle']=='june-box-r50'){echo'selected="selected"';} ?>>顺时针旋转50度</option>
										<option value="june-box-r60" <? if($item['btn2HoverStyle']=='june-box-r60'){echo'selected="selected"';} ?>>顺时针旋转60度</option>
										<option value="june-box-r70" <? if($item['btn2HoverStyle']=='june-box-r70'){echo'selected="selected"';} ?>>顺时针旋转70度</option>
										<option value="june-box-r80" <? if($item['btn2HoverStyle']=='june-box-r80'){echo'selected="selected"';} ?>>顺时针旋转80度</option>
										<option value="june-box-r90" <? if($item['btn2HoverStyle']=='june-box-r90'){echo'selected="selected"';} ?>>顺时针旋转90度</option>
										<option value="june-box-r120" <? if($item['btn2HoverStyle']=='june-box-r120'){echo'selected="selected"';} ?>>顺时针旋转120度</option>
					<option value="june-box-r180" <? if($item['btn2HoverStyle']=='june-box-r180'){echo'selected="selected"';} ?>>顺时针旋转180度</option>
					<option value="june-box-r270" <? if($item['btn2HoverStyle']=='june-box-r270'){echo'selected="selected"';} ?>>顺时针旋转270度</option>
					<option value="june-box-r360" <? if($item['btn2HoverStyle']=='june-box-r360'){echo'selected="selected"';} ?>>顺时针旋转360度</option>
					<option value="june-box-r720" <? if($item['btn2HoverStyle']=='june-box-r720'){echo'selected="selected"';} ?>>顺时针旋转720度</option>
										<option value="june-box-fr10" <? if($item['btn2HoverStyle']=='june-box-fr10'){echo'selected="selected"';} ?>>逆时针旋转10度</option>
										<option value="june-box-fr20" <? if($item['btn2HoverStyle']=='june-box-fr20'){echo'selected="selected"';} ?>>逆时针旋转20度</option>
										<option value="june-box-fr30" <? if($item['btn2HoverStyle']=='june-box-fr30'){echo'selected="selected"';} ?>>逆时针旋转30度</option>
										<option value="june-box-fr40" <? if($item['btn2HoverStyle']=='june-box-fr40'){echo'selected="selected"';} ?>>逆时针旋转40度</option>
										<option value="june-box-fr50" <? if($item['btn2HoverStyle']=='june-box-fr50'){echo'selected="selected"';} ?>>逆时针旋转50度</option>
										<option value="june-box-fr60" <? if($item['btn2HoverStyle']=='june-box-fr60'){echo'selected="selected"';} ?>>逆时针旋转60度</option>
										<option value="june-box-fr70" <? if($item['btn2HoverStyle']=='june-box-fr70'){echo'selected="selected"';} ?>>逆时针旋转70度</option>
										<option value="june-box-fr80" <? if($item['btn2HoverStyle']=='june-box-fr80'){echo'selected="selected"';} ?>>逆时针旋转80度</option>
										<option value="june-box-fr90" <? if($item['btn2HoverStyle']=='june-box-fr90'){echo'selected="selected"';} ?>>逆时针旋转90度</option>
										<option value="june-box-fr120" <? if($item['btn2HoverStyle']=='june-box-fr120'){echo'selected="selected"';} ?>>逆时针旋转120度</option>
					<option value="june-box-fr180" <? if($item['btn2HoverStyle']=='june-box-fr180'){echo'selected="selected"';} ?>>逆时针旋转180度</option>
					<option value="june-box-fr270" <? if($item['btn2HoverStyle']=='june-box-fr270'){echo'selected="selected"';} ?>>逆时针旋转270度</option>
					<option value="june-box-fr360" <? if($item['btn2HoverStyle']=='june-box-fr360'){echo'selected="selected"';} ?>>逆时针旋转360度</option>
					<option value="june-box-fr720" <? if($item['btn2HoverStyle']=='june-box-fr720'){echo'selected="selected"';} ?>>逆时针旋转720度</option>
				</select>
			</li>
			<li class="bhm_item2">
				<label for="btn2HoverSpeed">变换图片速度：</label>
				<select id="btn2HoverSpeed" name="btn2HoverSpeed">
					<option value="trans01s" <? if($data['btn2HoverSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans02s" <? if($data['btn2HoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
					<option value="trans05s" <? if($data['btn2HoverSpeed']=='trans05s'){echo'selected="selected"';} ?>>中等</option>
					<option value="trans1s" <? if($data['btn2HoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>较慢</option>
					<option value="trans2s" <? if($data['btn2HoverSpeed']=='trans2s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-12">
		<ul class="setform">
			<li>
				<label>扩展图片(1)：</label>
				<button class="tItemDialog" type="button" name="itemSubScriptSrc">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScriptSrc" value="<?=$data['subScriptSrc']?>" />
			</li>
			<li>
				<label>扩展图片(2)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript1Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript1Src" value="<?=$data['subScript1Src']?>" />
			</li>
			<li>
				<label>扩展图片(3)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript2Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript2Src" value="<?=$data['subScript2Src']?>" />
			</li>
			<li style="display:none;">
				<label>扩展图片(4)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript3Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript3Src" value="<?=$data['subScript3Src']?>" />
			</li>
			<li style="display:none;">
				<label>扩展图片(5)：</label>
				<button class="tItemDialog" type="button" name="itemSubScript4Src">设置扩展图片</button>
				<input class="setbtn" type="hidden" title="" name="subScript4Src" value="<?=$data['subScript4Src']?>" />
			</li>
			<br>
			<li>
				<label>扩展文字(1)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText" value="<?=$data['expandText']?>" />
				<textarea name="expandTextSet" style="display:none;"><?=$data['expandTextSet']?></textarea>
			</li>
			<li>
				<label>扩展文字(2)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText1">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText1" value="<?=$data['expandText1']?>" />
				<textarea name="expandText1Set" style="display:none;"><?=$data['expandText1Set']?></textarea>
			</li>
			<li>
				<label>扩展文字(3)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText2">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText2" value="<?=$data['expandText2']?>" />
				<textarea name="expandText2Set" style="display:none;"><?=$data['expandText2Set']?></textarea>
			</li>
			<li style="display:none;">
				<label>扩展文字(4)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText3">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText3" value="<?=$data['expandText3']?>" />
				<textarea name="expandText3Set" style="display:none;"><?=$data['expandText3Set']?></textarea>
			</li>
			<li style="display:none;">
				<label>扩展文字(5)：</label>
				<button class="tItemDialog" type="button" name="itemExpandText4">设置扩展文字</button>
				<input class="setbtn" type="hidden" title="" name="expandText4" value="<?=$data['expandText4']?>" />
				<textarea name="expandText4Set" style="display:none;"><?=$data['expandText4Set']?></textarea>
			</li>
		</ul>
	</div>
    <div id="tabs-13">
		<ul class="setform">
			<li>
				<label>二维码：</label>
				<button class="tItemDialog" type="button" name="itemErWeiMaSrc">设置二维码</button>
				<input class="setbtn" type="hidden" title="" name="erWeiMaSrc" value="<?=$data['erWeiMaSrc']?>" />
			</li>
			<li>
				<label for="erWeiMaSize">二维码尺寸：</label>
				<select id="erWeiMaSize" name="erWeiMaSize">
					<option value="30" <? if($data['erWeiMaSize']=='30'){echo'selected="selected"';} ?>>30</option>
                    <option value="45"  <? if($data['erWeiMaSize']=='45'){echo'selected="selected"';} ?>>45</option>
					<option value="50"  <? if($data['erWeiMaSize']=='50'){echo'selected="selected"';} ?>>50</option>
					<option value="60"  <? if($data['erWeiMaSize']=='60'){echo'selected="selected"';} ?>>60</option>
					<option value="70"  <? if($data['erWeiMaSize']=='70'){echo'selected="selected"';} ?>>70</option>
					<option value="80"  <? if($data['erWeiMaSize']=='80'){echo'selected="selected"';} ?>>80</option>
					<option value="90"  <? if($data['erWeiMaSize']=='90'){echo'selected="selected"';} ?>>90</option>
					<option value="100"  <? if($data['erWeiMaSize']=='100'){echo'selected="selected"';} ?>>100</option>
                    <option value="110" <? if($data['erWeiMaSize']=='110'){echo'selected="selected"';} ?>>110</option>
					<option value="120" <? if($data['erWeiMaSize']=='120'){echo'selected="selected"';} ?>>120</option>
					<option value="125" <? if($data['erWeiMaSize']=='125'){echo'selected="selected"';} ?>>125</option>
					<option value="130" <? if($data['erWeiMaSize']=='130'){echo'selected="selected"';} ?>>130</option>
					<option value="140"  <? if($data['erWeiMaSize']=='140'){echo'selected="selected"';} ?>>140</option>
				</select>
			</li>
		</ul>
	</div>
	<div id="tabs-9">
		<ul class="setform">
			<li>
				<label for="bcd1">默认显示：</label>
				<div id="bcd1">
					<input type="checkbox" id="bc2" name="borderControl1" value="hborder1" <? if($data['borderControl1']=='hborder1'){echo'checked="checked"';} ?> />
					<label for="bc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="bc3" name="shadowControl1" value="shadowShow1" <? if($data['borderControl1']=='shadowShow1'){echo'checked="checked"';} ?>/>
					<label for="bc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
				</div>
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi5">边框颜色：</label>
				<input id="bi5" class="setinput tColorPicker" type="text" title="" name="borderColor1" value="<?=$data['borderColor1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi6">边框粗细：</label>
				<input id="bi6" class="setinput" type="text" title="" name="borderWidth1" value="<?=$data['borderWidth1']?>" />
			</li>
			<li class="hborder1 borderControl1">
				<label for="bi7">边框圆角弧度：</label>
				<input id="bi7" class="setinput" type="text" title="" name="borderRadius1" value="<?=$data['borderRadius1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy4">阴影颜色：</label>
				<input id="hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor1" value="<?=$data['shadowColor1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy3">阴影模糊距离：</label>
				<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur1" value="<?=$data['shadowBlur1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy5">阴影尺寸：</label>
				<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize1" value="<?=$data['shadowSize1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="hy1">水平阴影距离：</label>
				<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft1" value="<?=$data['shadowLeft1']?>" />
			</li>
			<li class="shadowShow1 shadowControl1">
				<label for="by2">垂直阴影距离：</label>
				<input id="by2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop1" value="<?=$data['shadowTop1']?>" />
			</li>
			<input id="bh2" class="setinput" type="hidden" title="" name="shadowStyle1" value="<?=$data['shadowStyle1']?>" />
		</ul>
	</div>
	<div id="tabs-10">
		<ul class="setform">
			<li>
				<label for="hcd1">鼠标经过时显示：</label>
				<div id="hcd1">
					<input type="checkbox" id="hc2" name="borderControl" value="hborder" <? if($data['borderControl']=='hborder'){echo'checked="checked"';} ?> />
					<label for="hc2" title="鼠标经过热区时会显示边框，可设置边框颜色">边框</label>
					<input type="checkbox" id="hc3" name="shadowControl" value="shadowShow" <? if($data['shadowControl']=='shadowShow'){echo'checked="checked"';} ?> />
					<label for="hc3" title="鼠标经过热区时会显示阴影，可设置阴影颜色">阴影</label>
					<input type="checkbox" id="hc4" name="outlineControl" value="outlineShow" <? if($data['shadowControl']=='outlineShow'){echo'checked="checked"';} ?> />
					<label for="hc4" title="鼠标经过热区时会显示扩展边框，可设置边框颜色粗细" style="width:85px;">扩展外框</label>
				</div>
			</li>
			<li class="hborder borderControl">
				<label for="hi5">边框->边框颜色：</label>
				<input id="hi5" class="setinput tColorPicker" type="text" title="" name="borderColor" value="<?=$data['borderColor']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="hi6">边框粗细：</label>
				<input id="hi6" class="setinput" type="text" title="" name="borderWidth" value="<?=$data['borderWidth']?>" />
			</li>
			<li class="hborder borderControl">
				<label for="hi7">圆角弧度：</label>
				<input id="hi7" class="setinput" type="text" title="" name="borderRadius" value="<?=$data['borderRadius']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy4">阴影->阴影颜色：</label>
				<input id="hy4" class="setinput tColorPicker" type="text" title="" name="shadowColor" value="<?=$data['shadowColor']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy3">模糊距离：</label>
				<input id="hy3" class="setinput" type="text" title="阴影的羽化范围" name="shadowBlur" value="<?=$data['shadowBlur']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy5">阴影尺寸：</label>
				<input id="hy5" class="setinput" type="text" title="阴影的实体大小" name="shadowSize" value="<?=$data['shadowSize']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy1">水平距离：</label>
				<input id="hy1" class="setinput" type="text" title="阴影的距离外框的水平距离，正数为向右，负数为向左。" name="shadowLeft" value="<?=$data['shadowLeft']?>" />
			</li>
			<li class="shadowShow shadowControl">
				<label for="hy2">垂直距离：</label>
				<input id="hy2" class="setinput" type="text" title="阴影的距离外框的垂直距离，正数为向下，负数为向上。" name="shadowTop" value="<?=$data['shadowTop']?>" />
			</li>
			<input id="hh2" class="setinput" type="hidden" title="" name="shadowStyle" value="<?=$data['shadowStyle']?>" />
			<li class="outlineShow outlineControl">
				<label for="hi9">扩展->外框颜色：</label>
				<input id="hi9" class="setinput tColorPicker" type="text" title="" name="outlineColor" value="<?=$data['outlineColor']?>" />
			</li>
			<li class="outlineShow outlineControl">
				<label for="outlineWidth">外框粗细：</label>
				<select id="outlineWidth" name="outlineWidth">
					<option value="juneol2" <? if($data['outlineWidth']=='juneol2'){echo'selected="selected"';} ?>>细</option>
					<option value="juneol1" <? if($data['outlineWidth']=='juneol1'){echo'selected="selected"';} ?>>中等</option>
					<option value="juneol" <? if($data['outlineWidth']=='juneol'){echo'selected="selected"';} ?>>粗</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="outlineSpeed">动画速度：</label>
				<select id="outlineSpeed" name="outlineSpeed">
					<option value="" <? if($data['outlineSpeed']==''){echo'selected="selected"';} ?>>立即显示</option>
					<option value="trans01s" <? if($data['outlineSpeed']=='trans01s'){echo'selected="selected"';} ?>>快速</option>
					<option value="trans02s" <? if($data['outlineSpeed']=='trans02s'){echo'selected="selected"';} ?>>较快</option>
					<option value="trans05s" <? if($data['outlineSpeed']=='trans05s'){echo'selected="selected"';} ?>>较慢</option>
					<option value="trans1s" <? if($data['outlineSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
				</select>
			</li>
			<li class="outlineShow outlineControl">
				<label for="hi8">阴影颜色：</label>
				<input id="hi8" class="setinput tColorPicker" type="text" title="" name="outlineShadowColor" value="<?=$data['outlineShadowColor']?>" />
			</li>
		</ul>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs({active: <?=$active?>});
	$("input[type='text'], input[type='radio'], .setform > li > div").buttonset();
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
	
	$(".borderControl, .shadowControl, .outlineControl").hide();
	
	$(".borderControl1, .shadowControl1").hide();
	"<?=$data['borderControl']?>"=="hborder" && $(".borderControl").show();
	"<?=$data['shadowControl']?>"=="shadowShow" && $(".shadowControl").show();
	"<?=$data['shadowControl']?>"=="outlineShow" && $(".outlineControl").show();
	
	
	"<?=$data['borderControl1']?>"=="hborder1" && $(".borderControl1").show();
	"<?=$data['borderControl1']?>"=="shadowShow1" && $(".shadowControl1").show();
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
	"<?=$data['btnHoverMode']?>"=="bhm_item" && $(".bhm_item").show();
	"<?=$data['btn1HoverMode']?>"=="bhm_item" && $(".bhm_item1").show();
	"<?=$data['btn2HoverMode']?>"=="bhm_item" && $(".bhm_item2").show();
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
	$(".<?=$data['itemMode']?>").show();
	var lastMode = "<?=$data['itemMode']?>";
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
	
});
</script>