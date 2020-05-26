<?
$data=$_POST;
$cats=$data['catsConfig'];
$catsArray=$data['catsArray'];
$childConfig=$data['childConfig'];
$childConfig0=$childConfig['0'];
if($data['active']==-1){$active=2;}else{$active=$data['active'];}
?>
<form id="tForm" form-data="jsfb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">分类选择</a></li>
		<li><a href="#tabs-2">全部主分类设置</a></li>
		<li><a href="#tabs-3">全部子分类设置</a></li>
	<? if($_POST['active']!=='0'){ ?><li><a href="#tabs-4">当前所选分类</a></li><? } ?>
		
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
						<input id="h1" class="setinput" type="hidden" title="" name="formatName" value="<?=$_POST['formatName']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="fd_is1">店铺链接：</label>
						<input id="fd_is1" class="setinput" type="text" title="更改后请点击获取" junezx_vali_url="true" name="shopHref" value="<?=$_POST['shopHref']?>" />
												<button type="button" class="tThumbSet" data-target="otherset-clicked" data-oths="categorychange;fd_is1;tree-content;<?=$_POST['appID']?>">获取分类</button>
					</li>
				</ul>	
				<div class="J_DialogBody">
					<p class="nav-head desc">请选择要添加的分类<span id="treeCheckall" style="float:right;cursor:pointer;color:#007FF4;">一键全选</span></p>
					<div id="tree-content" data-catsConfig="" style="height:180px;">
                      <ul class="cat-list J_catList">
                      
                        <?
   $ls=rand(1000,9999);
    foreach($cats as $cat){
		if(in_array($cat['id'],$catsArray)){$checked='checked="checked"';}else{$checked='';}
		echo'<li class="cat fst-cat"><i class="cat-icon collapse"></i><input data-id="'.$cat['id'].'" id="subcats_'.$cat['id'].'_'.$ls.'" data-name="'.$cat['name'].'" '.$checked.' name="catsArray[]" value="'.$cat['id'].'" class="J_TFstCat" type="checkbox"><label for="subcats_'.$cat['id'].'_'.$ls.'">'.$cat['name'].'</label>';
		echo'<ul class="fst-cat-bd">'; 
		if($cat['subCats']){
	foreach($cat['subCats'] as $sub){
		if(in_array($sub['id'],$catsArray)){$checked2='checked="checked"';}else{$checked2='';}
		 echo'<li class="cat snd-cat"><input data-id="'.$sub['id'].'" id="subcats_'.$sub['id'].'_'.$ls.'" data-sname="'.$sub['name'].'" '.$checked2.' name="catsArray[]" value="'.$sub['id'].'"  class="J_TSndCat" type="checkbox"><label for="subcats_'.$sub['id'].'_'.$ls.'">'.$sub['name'].'</label></li>'; } 
	}
	echo'</ul>'; 
	echo'</li>';
		
		}

	?>
                      
                      </div>
				</div>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="catsi1">主分类宽度：</label>
						<input id="catsi1" class="setinput" type="text" title="请输入数值，无需加px；如：100。" name="catsWidth" value="<?=$_POST['catsWidth']?>" />
					</li>
					<li>
						<label for="catsi2">主分类高度：</label>
						<input id="catsi2" class="setinput" type="text" title="请输入数值，无需加px；如：100。" name="catsHeight" value="<?=$_POST['catsHeight']?>" />
					</li>
					<li>
						<label for="catsi5">主分类背景图片：</label>
						<input id="catsi5" class="setinput " type="text" title="" junezx_vali_pic="true" name="characterBgSrc" value="<?=$_POST['characterBgSrc']?>" />
											</li>
					<li>
						<label for="rd3">文字对齐方式：</label>
						<div id="rd3">
							<input type="radio" id="r5" name="characterAlign" value="left" <? if($_POST['characterAlign']=='left'){echo'checked="checked"';} ?> />
							<label for="r5">居左</label>
							<input type="radio" id="r6" name="characterAlign" value="center" <? if($_POST['characterAlign']=='center'){echo'checked="checked"';} ?> />
							<label for="r6">居中</label>
							<input type="radio" id="r7" name="characterAlign" value="right" <? if($_POST['characterAlign']=='right'){echo'checked="checked"';} ?> />
							<label for="r7">居右</label>
						</div>
					</li>
					<li>
						<label for="catss1">文字缩进距离：</label>
						<input id="catss1" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="catsSpace" value="<?=$_POST['catsSpace']?>" />
					</li>
					<li>
						<label for="hrefMode">链接打开方式：</label>
						<select id="hrefMode" name="hrefMode">
							<option value="_self" <? if($_POST['hrefMode']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
							<option value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
						</select>
					</li>
					<li>
						<label for="i4">文字大小：</label>
						<input id="i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize" value="<?=$_POST['characterSize']?>" />
					</li>
					<li>
						<label for="characterWeight">文字粗细：</label>
						<select id="characterWeight" name="characterWeight">
							 <option value="normal" <? if($data['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($data['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="characterFont">文字字体：</label>
						<select id="characterFont" name="characterFont">
							<option value="宋体" <? if($data['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($data['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($data['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($data['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($data['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($data['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($data['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($data['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($data['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($data['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($data['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($data['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($data['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($data['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($data['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($data['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="sdtzCharacterColor">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor']?>;"></div></div></div>
							<input id="sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="characterColor" value="<?=$_POST['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColor">文字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColor']?>;"></div></div></div>
							<input id="sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColor" value="<?=$_POST['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="characterDash">文字中划线：</label>
						<select id="characterDash" name="characterDash">
							<option value="off" <? if($data['characterDash']=='off'){echo'checked="checked"';} ?>>不显示</option>
							<option value="on" <? if($data['characterDash']=='on'){echo'checked="checked"';} ?>>显示</option>
						</select>
					</li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过时</span><em></em></li>
					<li>
						<label for="rd1">鼠标经过变换开关：</label>
						<div id="rd1">
							<input type="radio" id="r1" name="characterHoverMode" value="on" <? if($_POST['characterHoverMode']=='on'){echo'checked="checked"';} ?> />
							<label for="r1">开启</label>
							<input type="radio" id="r2" name="characterHoverMode" value="off" <? if($_POST['characterHoverMode']=='off'){echo'checked="checked"';} ?> />
							<label for="r2">关闭</label>
						</div>
					</li>
					<li>
						<label for="characterHoverSpeed">切换动画速度：</label>
						<select id="characterHoverSpeed" name="characterHoverSpeed">
							<option value="" <? if($data['characterHoverSpeed']==''){echo'selected="selected"';} ?>>无效果</option>
                            <option value="trans02s" <? if($data['characterHoverSpeed']=='trans02s'){echo'selected="selected"';} ?>>快速</option>
                            <option value="trans05s" <? if($data['characterHoverSpeed']=='trans05s'){echo'selected="selected"';} ?>>中速</option>
                            <option value="trans1s" <? if($data['characterHoverSpeed']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li>
						<label for="catsi6">主分类背景图片：</label>
						<input id="catsi6" class="setinput " type="text" title="" junezx_vali_pic="true" name="characterBgSrcHover" value="<?=$_POST['characterBgSrcHover']?>" />
											</li>
					<li>
						<label for="i6">文字大小：</label>
						<input id="i6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSizeHover" value="<?=$_POST['characterSizeHover']?>" />
					</li>
					<li>
						<label for="characterWeightHover">文字粗细：</label>
						<select id="characterWeightHover" name="characterWeightHover">
							<option value="normal" <? if($data['characterWeightHover']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($data['characterWeightHover']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="characterFontHover">文字字体：</label>
						<select id="characterFontHover" name="characterFontHover">
							<option value="宋体" <? if($data['characterFontHover']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                            <option value="黑体" <? if($data['characterFontHover']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                            <option value="微软雅黑" <? if($data['characterFontHover']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                            <option value="楷体" <? if($data['characterFontHover']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                            <option value="Arial" <? if($data['characterFontHover']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                            <option value="Verdana" <? if($data['characterFontHover']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                            <option value="Georgia" <? if($data['characterFontHover']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                            <option value="Times New Roman" <? if($data['characterFontHover']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                            <option value="Trebuchet MS" <? if($data['characterFontHover']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                            <option value="Courier" <? if($data['characterFontHover']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                            <option value="Impact" <? if($data['characterFontHover']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                            <option value="Comic Sans MS" <? if($data['characterFontHover']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                            <option value="Tahoma" <? if($data['characterFontHover']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                            <option value="Symbol" <? if($data['characterFontHover']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                            <option value="Palatino Linotype" <? if($data['characterFontHover']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                            <option value="Bookman Old Style" <? if($data['characterFontHover']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="sdtzCharacterColorHover">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColorHover']?>;"></div></div></div>
							<input id="sdtzCharacterColorHover" class="setinputcolor tColorPicker" type="text" title="" name="characterColorHover" value="<?=$_POST['characterColorHover']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColorHover">文字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColorHover']?>;"></div></div></div>
							<input id="sdtzCharacterBgColorHover" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColorHover" value="<?=$_POST['characterBgColorHover']?>" />
						</div>
					</li>
					<li class="inputAccording-end"></li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">文字下边线</span><em></em></li>
					<li>
						<label for="rd2">文字下边线：</label>
						<div id="rd2">
							<input type="radio" id="r3" name="characterUnderLine" value="on" <? if($_POST['characterUnderLine']=='on'){echo'checked="checked"';} ?> />
							<label for="r3">显示</label>
							<input type="radio" id="r4" name="characterUnderLine" value="off" <? if($_POST['characterUnderLine']=='off'){echo'checked="checked"';} ?> />
							<label for="r4" style="width: 70px;">不显示</label>
						</div>
					</li>
					<li>
						<label for="characterUnderLineStyle">下划线样式：</label>
						<select id="characterUnderLineStyle" name="characterUnderLineStyle">
							<option value="solid" <? if($_POST['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
							<option value="dotted" <? if($_POST['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
						</select>
					</li>
					<li>
						<label for="characterUnderLineWeight">下划线粗细：</label>
						<select id="characterUnderLineWeight" name="characterUnderLineWeight">
							<option value="1" <? if($data['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
                            <option value="2" <? if($data['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
                            <option value="3" <? if($data['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
                            <option value="4" <? if($data['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
                            <option value="5" <? if($data['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
						</select>
					</li>
					<li>
						<label for="sdtzCharacterUnderLineColor">下划线颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterUnderLineColor']?>;"></div></div></div>
							<input id="sdtzCharacterUnderLineColor" class="setinputcolor tColorPicker" type="text" title="" name="characterUnderLineColor" value="<?=$_POST['characterUnderLineColor']?>" />
						</div>
					</li>
					<li class="inputAccording-end"></li>
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
					<li>
						<label for="catsi3">子分类宽度：</label>
						<input id="catsi3" class="setinput" type="text" title="请输入数值，无需加px；如：100。" name="subCatsWidth" value="<?=$_POST['subCatsWidth']?>" />
					</li>
					<li>
						<label for="catsi4">子分类高度：</label>
						<input id="catsi4" class="setinput" type="text" title="请输入数值，无需加px；如：100。" name="subCatsHeight" value="<?=$_POST['subCatsHeight']?>" />
					</li>
					<li>
						<label for="catsi7">子分类背景图片：</label>
						<input id="catsi7" class="setinput " type="text" title="" junezx_vali_pic="true" name="characterBgSrc1" value="<?=$_POST['characterBgSrc1']?>" />
											</li>
					<li>
						<label for="zrd3">文字对齐方式：</label>
						<div id="zrd3">
							<input type="radio" id="zr5" name="characterAlign1" value="left" <? if($data['characterAlign1']=='left'){echo'checked="checked"';} ?> />
							<label for="zr5">居左</label>
							<input type="radio" id="zr6" name="characterAlign1" value="center" <? if($data['characterAlign1']=='center'){echo'checked="checked"';} ?> />
							<label for="zr6">居中</label>
							<input type="radio" id="zr7" name="characterAlign1" value="right" <? if($data['characterAlign1']=='right'){echo'checked="checked"';} ?> />
							<label for="zr7">居右</label>
						</div>
					</li>
					<li>
						<label for="catss2">文字缩进距离：</label>
						<input id="catss2" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="catsSpace1" value="<?=$_POST['catsSpace1']?>" />
					</li>
					<li>
						<label for="hrefMode1">链接打开方式：</label>
						<select id="hrefMode1" name="hrefMode1">
							<option value="_self" <? if($_POST['hrefMode1']=='_self'){echo'selected="selected"';} ?>>原窗口打开</option>
							<option value="_blank" <? if($_POST['hrefMode1']=='_blank'){echo'selected="selected"';} ?>>新窗口打开</option>
						</select>
					</li>
					<li>
						<label for="zi4">文字大小：</label>
						<input id="zi4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSize1" value="<?=$_POST['characterSize1']?>" />
					</li>
					<li>
						<label for="characterWeight1">文字粗细：</label>
						<select id="characterWeight1" name="characterWeight1">
							<option value="normal" <? if($_POST['characterWeight1']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($_POST['characterWeight1']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="characterFont1">文字字体：</label>
						<select id="characterFont1" name="characterFont1">
							<option value="宋体" <? if($data['characterFont1']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                            <option value="黑体" <? if($data['characterFont1']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                            <option value="微软雅黑" <? if($data['characterFont1']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                            <option value="楷体" <? if($data['characterFont1']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                            <option value="Arial" <? if($data['characterFont1']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                            <option value="Verdana" <? if($data['characterFont1']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                            <option value="Georgia" <? if($data['characterFont1']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                            <option value="Times New Roman" <? if($data['characterFont1']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                            <option value="Trebuchet MS" <? if($data['characterFont1']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                            <option value="Courier" <? if($data['characterFont1']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                            <option value="Impact" <? if($data['characterFont1']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                            <option value="Comic Sans MS" <? if($data['characterFont1']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                            <option value="Tahoma" <? if($data['characterFont1']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                            <option value="Symbol" <? if($data['characterFont1']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                            <option value="Palatino Linotype" <? if($data['characterFont1']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                            <option value="Bookman Old Style" <? if($data['characterFont1']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="sdtzCharacterColor1">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColor1']?>;"></div></div></div>
							<input id="sdtzCharacterColor1" class="setinputcolor tColorPicker" type="text" title="" name="characterColor1" value="<?=$_POST['characterColor1']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColor1">文字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColor1']?>;"></div></div></div>
							<input id="sdtzCharacterBgColor1" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColor1" value="<?=$_POST['characterBgColor1']?>" />
						</div>
					</li>
					<li>
						<label for="characterDash1">文字中划线：</label>
						<select id="characterDash1" name="characterDash1">
							<option value="off" <? if($_POST['characterDash1']=='off'){echo'selected="selected"';} ?>>不显示</option>
							<option value="on" <? if($_POST['characterDash1']=='on'){echo'selected="selected"';} ?>>显示</option>
						</select>
					</li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过时</span><em></em></li>
					<li>
						<label for="zrd1">鼠标经过变换开关：</label>
						<div id="zrd1">
							<input type="radio" id="zr1" name="characterHoverMode1" value="on" <? if($_POST['characterHoverMode1']=='on'){echo'checked="checked"';} ?> />
							<label for="zr1">开启</label>
							<input type="radio" id="zr2" name="characterHoverMode1" value="off" <? if($_POST['characterHoverMode1']=='off'){echo'checked="checked"';} ?> />
							<label for="zr2">关闭</label>
						</div>
					</li>
					<li>
						<label for="characterHoverSpeed1">切换动画速度：</label>
						<select id="characterHoverSpeed1" name="characterHoverSpeed1">
							<option value="" <? if($data['characterHoverSpeed1']==''){echo'selected="selected"';} ?>>无效果</option>
                            <option value="trans02s" <? if($data['characterHoverSpeed1']=='trans02s'){echo'selected="selected"';} ?>>快速</option>
                            <option value="trans05s" <? if($data['characterHoverSpeed1']=='trans05s'){echo'selected="selected"';} ?>>中速</option>
                            <option value="trans1s" <? if($data['characterHoverSpeed1']=='trans1s'){echo'selected="selected"';} ?>>慢速</option>
						</select>
					</li>
					<li>
						<label for="catsi8">子分类背景图片：</label>
						<input id="catsi8" class="setinput " type="text" title="" junezx_vali_pic="true" name="characterBgSrcHover1" value="<?=$_POST['characterBgSrcHover1']?>" />
											</li>
					<li>
						<label for="zi6">文字大小：</label>
						<input id="zi6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="characterSizeHover1" value="<?=$_POST['characterSizeHover1']?>" />
					</li>
					<li>
						<label for="characterWeightHover1">文字粗细：</label>
						<select id="characterWeightHover1" name="characterWeightHover1">
							<option value="normal" <? if($data['characterWeightHover1']=='normal'){echo'selected="selected"';} ?>>正常</option>
							<option value="bold" <? if($data['characterWeightHover1']=='bold'){echo'selected="selected"';} ?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="characterFontHover1">文字字体：</label>
						<select id="characterFontHover1" name="characterFontHover1">
							<option value="宋体" <? if($data['characterFontHover1']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                            <option value="黑体" <? if($data['characterFontHover1']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                            <option value="微软雅黑" <? if($data['characterFontHover1']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                            <option value="楷体" <? if($data['characterFontHover1']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                            <option value="Arial" <? if($data['characterFontHover1']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                            <option value="Verdana" <? if($data['characterFontHover1']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                            <option value="Georgia" <? if($data['characterFontHover1']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                            <option value="Times New Roman" <? if($data['characterFontHover1']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                            <option value="Trebuchet MS" <? if($data['characterFontHover1']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                            <option value="Courier" <? if($data['characterFontHover1']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                            <option value="Impact" <? if($data['characterFontHover1']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                            <option value="Comic Sans MS" <? if($data['characterFontHover1']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                            <option value="Tahoma" <? if($data['characterFontHover1']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                            <option value="Symbol" <? if($data['characterFontHover1']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                            <option value="Palatino Linotype" <? if($data['characterFontHover1']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                            <option value="Bookman Old Style" <? if($data['characterFontHover1']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="sdtzCharacterColorHover1">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterColorHover1']?>;"></div></div></div>
							<input id="sdtzCharacterColorHover1" class="setinputcolor tColorPicker" type="text" title="" name="characterColorHover1" value="<?=$_POST['characterColorHover1']?>" />
						</div>
					</li>
					<li>
						<label for="sdtzCharacterBgColorHover1">文字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterBgColorHover1']?>;"></div></div></div>
							<input id="sdtzCharacterBgColorHover1" class="setinputcolor tColorPicker" type="text" title="" name="characterBgColorHover1" value="<?=$_POST['characterBgColorHover1']?>" />
						</div>
					</li>
					<li class="inputAccording-end"></li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">文字下边线</span><em></em></li>
					<li>
						<label for="zrd2">文字下边线：</label>
						<div id="zrd2">
							<input type="radio" id="zr3" name="characterUnderLine1" value="on" <? if($_POST['characterUnderLine1']=='on'){echo'checked="checked"';} ?> />
							<label for="zr3">显示</label>
							<input type="radio" id="zr4" name="characterUnderLine1" value="off" <? if($_POST['characterUnderLine1']=='off'){echo'checked="checked"';} ?> />
							<label for="zr4" style="width: 70px;">不显示</label>
						</div>
					</li>
					<li>
						<label for="characterUnderLineStyle1">下划线样式：</label>
						<select id="characterUnderLineStyle1" name="characterUnderLineStyle1">
							<option value="solid" <? if($_POST['characterUnderLineStyle1']=='solid'){echo'selected="selected"';} ?>>实线</option>
							<option value="dotted" <? if($_POST['characterUnderLineStyle1']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
						</select>
					</li>
					<li>
						<label for="characterUnderLineWeight1">下划线粗细：</label>
						<select id="characterUnderLineWeight1" name="characterUnderLineWeight1">
							<option value="1" <? if($data['characterUnderLineWeight1']=='1'){echo'selected="selected"';} ?>>1</option>
                            <option value="2" <? if($data['characterUnderLineWeight1']=='2'){echo'selected="selected"';} ?>>2</option>
                            <option value="3" <? if($data['characterUnderLineWeight1']=='3'){echo'selected="selected"';} ?>>3</option>
                            <option value="4" <? if($data['characterUnderLineWeight1']=='4'){echo'selected="selected"';} ?>>4</option>
                            <option value="5" <? if($data['characterUnderLineWeight1']=='5'){echo'selected="selected"';} ?>>5</option>
						</select>
					</li>
					<li>
						<label for="sdtzCharacterUnderLineColor1">下划线颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$_POST['characterUnderLineColor1']?>;"></div></div></div>
							<input id="sdtzCharacterUnderLineColor1" class="setinputcolor tColorPicker" type="text" title="" name="characterUnderLineColor1" value="<?=$_POST['characterUnderLineColor1']?>" />
						</div>
					</li>
					<li class="inputAccording-end"></li>
				</ul>
			</div>
			
		<? if($_POST['active']!=='0'){ ?>	
			<div id="tabs-4">
				<ul class="setform">
					<input id="child0h1" class="setinput" type="hidden" title="" name="childConfig[0].attachID" value="<?=$childConfig0['attachID']?>" />
					<input id="child0h3" class="setinput" type="hidden" title="" name="childConfig[0].hrefID" value="<?=$childConfig0['hrefID']?>" />
					<input id="child0h4" class="setinput" type="hidden" title="" name="childConfig[0].catsType" value="<?=$childConfig0['catsType']?>" />
					<li>
						<label for="child0i1">文字内容：</label>
						<input id="child0i1" class="setinput" type="text" title="" junezx_vali_str="true" name="childConfig[0].characterContent" value="<?=$childConfig0['characterContent']?>" />
					</li>
					<li>
						<label for="child0i1">链接：</label>
						<input id="child0h2" class="setinput" type="text" title="" junezx_vali_url="true" name="childConfig[0].href" value="<?=$childConfig0['href']?>" />
					</li>
					<li>
						<label for="child0catsic1">背景图片：</label>
						<input id="child0catsic1" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[0].characterBgSrc" value="<?=$childConfig0['characterBgSrc']?>" />
											</li>
					<li>
						<label for="child0rd3">文字对齐方式：</label>
						<div id="child0rd3">
							<input type="radio" id="child0r5" name="childConfig[0].characterAlign" value="left" <? if($childConfig0['characterAlign']=='left'){echo'checked="checked"';}?> />
							<label for="child0r5">居左</label>
							<input type="radio" id="child0r6" name="childConfig[0].characterAlign" value="center" <? if($childConfig0['characterAlign']=='center'){echo'checked="checked"';}?> />
							<label for="child0r6">居中</label>
							<input type="radio" id="child0r7" name="childConfig[0].characterAlign" value="right" <? if($childConfig0['characterAlign']=='right'){echo'checked="checked"';}?> />
							<label for="child0r7">居右</label>
						</div>
					</li>
					<li>
						<label for="child0catss1">文字缩进距离：</label>
						<input id="child0catss1" class="setinput" type="text" title="请输入数值，无需加px；如：10。" name="childConfig[0].catsSpace" value="<?=$childConfig0['catsSpace']?>" />
					</li>
					<li>
						<label for="child0hrefMode">链接打开方式：</label>
						<select id="child0hrefMode" name="childConfig[0].hrefMode">
							<option value="_self" <? if($childConfig0['hrefMode']=='_self'){echo'selected="selected"';}?>>原窗口打开</option>
							<option value="_blank" <? if($childConfig0['hrefMode']=='_blank'){echo'selected="selected"';}?>>新窗口打开</option>
						</select>
					</li>
					<li>
						<label for="child0i4">文字大小：</label>
						<input id="child0i4" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="childConfig[0].characterSize" value="<?=$childConfig0['characterSize']?>" />
					</li>
					<li>
						<label for="child0characterWeight">文字粗细：</label>
						<select id="child0characterWeight" name="childConfig[0].characterWeight">
							<option value="normal" <? if($childConfig0['characterWeight']=='normal'){echo'selected="selected"';}?>>正常</option>
							<option value="bold" <? if($childConfig0['characterWeight']=='bold'){echo'selected="selected"';}?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child0characterFont">文字字体：</label>
						<select id="child0characterFont" name="childConfig[0].characterFont">
							<option value="宋体" <? if($childConfig0['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                            <option value="黑体" <? if($childConfig0['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                            <option value="微软雅黑" <? if($childConfig0['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                            <option value="楷体" <? if($childConfig0['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                            <option value="Arial" <? if($childConfig0['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                            <option value="Verdana" <? if($childConfig0['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                            <option value="Georgia" <? if($childConfig0['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                            <option value="Times New Roman" <? if($childConfig0['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                            <option value="Trebuchet MS" <? if($childConfig0['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                            <option value="Courier" <? if($childConfig0['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                            <option value="Impact" <? if($childConfig0['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                            <option value="Comic Sans MS" <? if($childConfig0['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                            <option value="Tahoma" <? if($childConfig0['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                            <option value="Symbol" <? if($childConfig0['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                            <option value="Palatino Linotype" <? if($childConfig0['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                            <option value="Bookman Old Style" <? if($childConfig0['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child0sdtzCharacterColor">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig0['characterColor']?>;"></div></div></div>
							<input id="child0sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterColor" value="<?=$childConfig0['characterColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0sdtzCharacterBgColor">文字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig0['characterBgColor']?>;"></div></div></div>
							<input id="child0sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterBgColor" value="<?=$childConfig0['characterBgColor']?>" />
						</div>
					</li>
					<li>
						<label for="child0characterDash">文字中划线：</label>
						<select id="child0characterDash" name="childConfig[0].characterDash">
							<option value="off" <? if($childConfig0['characterWeight']=='off'){echo'selected="selected"';}?>>不显示</option>
							<option value="on" <? if($childConfig0['characterWeight']=='on'){echo'selected="selected"';}?>>显示</option>
						</select>
					</li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">鼠标经过时</span><em></em></li>
					<li>
						<label for="child0rd1">鼠标经过变换开关：</label>
						<div id="child0rd1">
							<input type="radio" id="child0r1" name="childConfig[0].characterHoverMode" value="on" <? if($childConfig0['characterHoverMode']=='on'){echo'checked="checked"';}?> />
							<label for="child0r1">开启</label>
							<input type="radio" id="child0r2" name="childConfig[0].characterHoverMode" value="off" <? if($childConfig0['characterHoverMode']=='off'){echo'checked="checked"';}?> />
							<label for="child0r2">关闭</label>
						</div>
					</li>
					<li>
						<label for="child0characterHoverSpeed">切换动画速度：</label>
						<select id="child0characterHoverSpeed" name="childConfig[0].characterHoverSpeed">
							<option value="" <? if($childConfig0['characterHoverSpeed']==''){echo'selected="selected"';}?>>无效果</option>
                            <option value="trans02s" <? if($childConfig0['characterHoverSpeed']=='trans02s'){echo'selected="selected"';}?>>快速</option>
                            <option value="trans05s" <? if($childConfig0['characterHoverSpeed']=='trans05s'){echo'selected="selected"';}?>>中速</option>
                            <option value="trans1s" <? if($childConfig0['characterHoverSpeed']=='trans1s'){echo'selected="selected"';}?>>慢速</option>
						</select>
					</li>
					<li>
						<label for="child0catsic2">背景图片：</label>
						<input id="child0catsic2" class="setinput " type="text" title="" junezx_vali_pic="true" name="childConfig[0].characterBgSrcHover" value="<?=$childConfig0['characterBgSrcHover']?>" />
											</li>
					<li>
						<label for="child0i6">文字大小：</label>
						<input id="child0i6" class="setinput" type="text" title="请输入文字的大小，无需加px；如：12。" name="childConfig[0].characterSizeHover" value="<?=$childConfig0['characterSizeHover']?>" />
					</li>
					<li>
						<label for="child0characterWeightHover">文字粗细：</label>
						<select id="child0characterWeightHover" name="childConfig[0].characterWeightHover">
							<option value="normal" <? if($childConfig0['characterWeightHover']=='normal'){echo'selected="selected"';}?>>正常</option>
							<option value="bold" <? if($childConfig0['characterWeightHover']=='bold'){echo'selected="selected"';}?>>粗体</option>
						</select>
					</li>
					<li>
						<label for="child0characterFontHover">文字字体：</label>
						<select id="child0characterFontHover" name="childConfig[0].characterFontHover">
							<option value="宋体" <? if($childConfig0['characterFontHover']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                            <option value="黑体" <? if($childConfig0['characterFontHover']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                            <option value="微软雅黑" <? if($childConfig0['characterFontHover']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                            <option value="楷体" <? if($childConfig0['characterFontHover']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                            <option value="Arial" <? if($childConfig0['characterFontHover']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                            <option value="Verdana" <? if($childConfig0['characterFontHover']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                            <option value="Georgia" <? if($childConfig0['characterFontHover']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                            <option value="Times New Roman" <? if($childConfig0['characterFontHover']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                            <option value="Trebuchet MS" <? if($childConfig0['characterFontHover']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                            <option value="Courier" <? if($childConfig0['characterFontHover']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                            <option value="Impact" <? if($childConfig0['characterFontHover']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                            <option value="Comic Sans MS" <? if($childConfig0['characterFontHover']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                            <option value="Tahoma" <? if($childConfig0['characterFontHover']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                            <option value="Symbol" <? if($childConfig0['characterFontHover']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                            <option value="Palatino Linotype" <? if($childConfig0['characterFontHover']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                            <option value="Bookman Old Style" <? if($childConfig0['characterFontHover']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
						</select>
					</li>
					<li>
						<label for="child0sdtzCharacterColorHover">文字颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig0['characterColorHover']?>;"></div></div></div>
							<input id="child0sdtzCharacterColorHover" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterColorHover" value="<?=$childConfig0['characterColorHover']?>" />
						</div>
					</li>
					<li>
						<label for="child0sdtzCharacterBgColorHover">文字背景颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig0['characterBgColorHover']?>;"></div></div></div>
							<input id="child0sdtzCharacterBgColorHover" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterBgColorHover" value="<?=$childConfig0['characterBgColorHover']?>" />
						</div>
					</li>
					<li class="inputAccording-end"></li>
					<li class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">文字下边线</span><em></em></li>
					<li>
						<label for="child0rd2">文字下边线：</label>
						<div id="child0rd2">
							<input type="radio" id="child0r3" name="childConfig[0].characterUnderLine" value="on" <? if($childConfig0['characterUnderLine']=='on'){echo'checked="checked"';}?> />
							<label for="child0r3">显示</label>
							<input type="radio" id="child0r4" name="childConfig[0].characterUnderLine" value="off" <? if($childConfig0['characterUnderLine']=='off'){echo'checked="checked"';}?> />
							<label for="child0r4" style="width: 70px;">不显示</label>
						</div>
					</li>
					<li>
						<label for="child0characterUnderLineStyle">下划线样式：</label>
						<select id="child0characterUnderLineStyle" name="childConfig[0].characterUnderLineStyle">
							<option value="solid" <? if($childConfig0['characterUnderLineStyle']=='solid'){echo'selected="selected"';} ?>>实线</option>
							<option value="dotted" <? if($childConfig0['characterUnderLineStyle']=='dotted'){echo'selected="selected"';} ?>>虚线</option>
						</select>
					</li>
					<li>
						<label for="child0characterUnderLineWeight">下划线粗细：</label>
						<select id="child0characterUnderLineWeight" name="childConfig[0].characterUnderLineWeight">
							<option value="1" <? if($childConfig0['characterUnderLineWeight']=='1'){echo'selected="selected"';} ?>>1</option>
                            <option value="2" <? if($childConfig0['characterUnderLineWeight']=='2'){echo'selected="selected"';} ?>>2</option>
                            <option value="3" <? if($childConfig0['characterUnderLineWeight']=='3'){echo'selected="selected"';} ?>>3</option>
                            <option value="4" <? if($childConfig0['characterUnderLineWeight']=='4'){echo'selected="selected"';} ?>>4</option>
                            <option value="5" <? if($childConfig0['characterUnderLineWeight']=='5'){echo'selected="selected"';} ?>>5</option>
						</select>
					</li>
					<li>
						<label for="child0sdtzCharacterUnderLineColor">下划线颜色：</label>
						<div class="setcolorpanel">
							<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$childConfig0['characterUnderLineColor']?>;"></div></div></div>
							<input id="child0sdtzCharacterUnderLineColor" class="setinputcolor tColorPicker" type="text" title="" name="childConfig[0].characterUnderLineColor" value="<?=$childConfig0['characterUnderLineColor']?>" />
						</div>
					</li>
					<li class="inputAccording-end"></li>
				</ul>
			</div>
			<? } ?>
					</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
	//加载树
	$("#tree-content").on("click.forinput", "input", function() {
		var _t = $(this), status = _t.prop("checked");
		if(_t.hasClass("J_TFstCat")) {
			//_t.prop("checked", !status);
			!status && _t.siblings("ul").find("input").prop("checked", false);
		}
		if(_t.hasClass("J_TSndCat")) {
			//_t.prop("checked", !status);
			!!status && _t.parent().parent().siblings("input").prop("checked", true);
		}
	}).on("click.fori", "i", function() {
		var _t = $(this);
		if(_t.hasClass("collapse")) {
			_t.removeClass("collapse");
			_t.siblings("ul").hide();
		} else {
			_t.addClass("collapse");
			_t.siblings("ul").show();
		}
	});
	$("#treeCheckall").on("click", function() {
		$("#tree-content").find("input").prop("checked", true);
	});


//加载表单样式
	$("#tabs").tabs({active: <?=$_POST['active']?>});
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
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
});
</script>