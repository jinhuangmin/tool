<?
$nestConfigs=$_POST['nestConfig'];
$num=count($nestConfigs);
?>
<form id="tForm" form-data="jadb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基本设置</a></li>
		<li><a href="#tabs-2">内容</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="rd2ac">切换效果：</label>
						<div id="rd2ac" style="height:55px;">
							<input type="radio" id="rdac1" name="adCssMode" value="no" <? if($_POST['adCssMode']=='no'){echo'checked="checked"';} ?> />
							<label for="rdac1" title="">普通切换</label>
							<input type="radio" id="rdac2" name="adCssMode" value="yes" <? if($_POST['adCssMode']=='yes'){echo'checked="checked"';} ?> />
							<label for="rdac2" title="" style="width:100px;">动画切换<i class="popsd"></i></label>
						</div>
					</li>
					<li class="adCssModeYes">
						<label for="adCssSpeed">动画速度：</label>
						<select id="adCssSpeed" name="adCssSpeed">
                    <?
                    for($i=0.1;$i<7.1;$i=$i+0.1){ $sx=''.$i.'s';
						if($_POST['adCssSpeed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=8;$i<=20;$i=$i+1){ $sx=''.$i.'s';
						if($_POST['adCssSpeed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=30;$i<=300;$i=$i+10){ $sx=''.$i.'s';
						if($_POST['adCssSpeed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					for($i=320;$i<=600;$i=$i+20){ $sx=''.$i.'s';
						if($_POST['adCssSpeed']==$sx){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'s" '.$sel.'>'.$i.'秒</option>';
						}
					?>   
					</select>
					</li>
					<li class="adCssModeYes">
						<label for="adCssEffect">动画特效：</label>
						<select id="adCssEffect" name="adCssEffect">
                            <option value="" <? if($_POST['adCssEffect']==''){echo'selected="selected"';} ?>>匀速平滑</option>
                            <option value="bs" <? if($_POST['adCssEffect']=='bs'){echo'selected="selected"';} ?>>由慢到快</option>
                            <option value="bq" <? if($_POST['adCssEffect']=='bq'){echo'selected="selected"';} ?>>由快到慢</option>
                            <option value="bt" <? if($_POST['adCssEffect']=='bt'){echo'selected="selected"';} ?>>跑过回头</option>
                            <option value="bc" <? if($_POST['adCssEffect']=='bc'){echo'selected="selected"';} ?>>起步后撤</option>
                            <option value="bd" <? if($_POST['adCssEffect']=='bd'){echo'selected="selected"';} ?>>中间停顿</option>
                            <option value="bx" <? if($_POST['adCssEffect']=='bx'){echo'selected="selected"';} ?>>弹性抖动</option>
						</select>
						<label for="adCssWeight" class="chkLabel" style="margin-top:-20px;width:40px;">程度：</label>
						<select id="adCssWeight" name="adCssWeight" style="width:51px;">
							<option value="1" <? if($_POST['adCssWeight']=='1'){echo'selected="selected"';} ?>>强</option>
                            <option value="2" <? if($_POST['adCssWeight']=='2'){echo'selected="selected"';} ?>>中</option>
                            <option value="3" <? if($_POST['adCssWeight']=='3'){echo'selected="selected"';} ?>>弱</option>
						</select>
					</li>
					<li class="adCssModeYes">
						<label for="adHideTitle">是否显示标题：</label>
						<select id="adHideTitle" name="adHideTitle">
							<option value="no" <? if($_POST['adHideTitle']=='no'){echo'selected="selected"';} ?>> 显示标题</option>
							<option value="yes" <? if($_POST['adHideTitle']=='yes'){echo'selected="selected"';} ?>>隐藏标题</option>
						</select>
					</li>
					<li>
						<label for="adDirection">手风琴展开方向：</label>
						<select id="adDirection" name="adDirection">
							<option value="left" <? if($_POST['adDirection']=='left'){echo'selected="selected"';} ?>> 横向从左至右</option>
							<option value="right" <? if($_POST['adDirection']=='right'){echo'selected="selected"';} ?>>横向从右至左</option>
							<option value="up" <? if($_POST['adDirection']=='up'){echo'selected="selected"';} ?>>纵向从上至下</option>
							<option value="down" <? if($_POST['adDirection']=='down'){echo'selected="selected"';} ?>>纵向从下至上</option>
						</select>
					</li>
					<li>
						<label for="adTrigger">展开/收起触发方式：</label>
						<select id="adTrigger" name="adTrigger">
							<option value="click" <? if($_POST['adTrigger']=='click'){echo'selected="selected"';} ?>> 鼠标点击触发</option>
							<option value="mouse" <? if($_POST['adTrigger']=='mouse'){echo'selected="selected"';} ?>>鼠标经过触发</option>
						</select>
					</li>
					<li>
						<label for="adMode">面板控制：</label>
						<select id="adMode" name="adMode">
							<option value="no" <? if($_POST['adMode']=='no'){echo'selected="selected"';} ?>> 不支持多面板同时展开</option>
							<option value="yes" <? if($_POST['adMode']=='yes'){echo'selected="selected"';} ?>>支持多面板同时展开</option>
						</select>
					</li>
					<li class="ad1fp">
						<label for="adHideMode">面板展开后：</label>
						<select id="adHideMode" name="adHideMode">
							<option value="no" <? if($_POST['adHideMode']=='no'){echo'selected="selected"';} ?>> 显示标题</option>
							<option value="yes" <? if($_POST['adHideMode']=='yes'){echo'selected="selected"';} ?>>隐藏标题</option>
						</select>
					</li>
					<li class="ad2fp">
						<label for="adActive">默认展开：</label>
						<select id="adActive" name="adActive">
                            <option value="1" <? if($_POST['adActive']=='1'){echo'selected="selected"';} ?>>第1个面板</option>
                            <option value="2" <? if($_POST['adActive']=='2'){echo'selected="selected"';} ?>>第2个面板</option>
                            <option value="3" <? if($_POST['adActive']=='3'){echo'selected="selected"';} ?>>第3个面板</option>
                            <option value="4" <? if($_POST['adActive']=='4'){echo'selected="selected"';} ?>>第4个面板</option>
                            <option value="5" <? if($_POST['adActive']=='5'){echo'selected="selected"';} ?>>第5个面板</option>
                        </select>
					</li>
					<li>
						<label for="adPlay">自动播放：</label>
						<select id="adPlay" name="adPlay">
							<option value="yes" <? if($_POST['adPlay']=='yes'){echo'selected="selected"';} ?>> 开启自动播放</option>
							<option value="no" <? if($_POST['adPlay']!=='yes'){echo'selected="selected"';} ?>>关闭自动播放</option>
						</select>
					</li>
					<li class="ad3fp">
						<label for="adTime">停留时间：</label>
						<select id="adTime" name="adTime">
							 <?
                    for($i=1;$i<11;$i++){
						if($_POST['adTime']==$i){$sel='selected="selected"';}else{$sel='';}
					echo'<option value="'.$i.'" '.$sel.'>'.$i.'秒</option>';
						}
						?>
						</select>
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li class="adCssModeNo">
						<label for="titleBHControl">是否使用标题变换：</label>
						<select id="titleBHControl" name="titleBHControl">
							<option value="yes" <? if($_POST['titleBHControl']=='yes'){echo'selected="selected"';} ?>> 鼠标点击(经过)变换</option>
							<option value="no" <? if($_POST['titleBHControl']!=='yes'){echo'selected="selected"';} ?>>鼠标点击(经过)无变化</option>
						</select>
					</li>
					<li style="height:auto;">
						<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">

                        <?  foreach($nestConfigs as $i=>$nestConfig){ $k=$i+1; ?>
                             
                            <li class="sliderContent" style="clear:both;height:auto;">
								<span class="adHideTitleYes inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">标题<?=$k?>设置</span><em></em></span>
								<label for="sc<?=$i?>rd1">标题内容：</label>
								<div id="sc<?=$i?>rd1" style="height:55px;">
									<input type="radio" id="child<?=$i?>ra" name="nestConfig[<?=$i?>].cType" data-choose="title" value="imgContent" <? if($nestConfig['cType']=='imgContent'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>ra" title="">图片</label>
									<input type="radio" id="child<?=$i?>rb" name="nestConfig[<?=$i?>].cType" data-choose="title" value="textContent" <? if($nestConfig['cType']=='textContent'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>rb" title="" style="display:none;">文字</label>
									<input type="radio" id="child<?=$i?>rc" name="nestConfig[<?=$i?>].cType" data-choose="title" value="customContent" <? if($nestConfig['cType']=='customContent'){echo'checked="checked"';} ?> />
									<label for="child<?=$i?>rc" title="" style="width:100px;">自定义内容</label>
								</div>
								<ul style="padding-left:0px;list-style:none;">
									<li class="imgContent contentType" style="clear:both;">
										<label for="child<?=$i?>jdhi_src">背景图片：</label>
										<input id="child<?=$i?>jdhi_src" class="setinput " type="text" title="" junezx_vali_pic="true" name="nestConfig[<?=$i?>].pSrc" value="<?=$nestConfig['pSrc']?>" />
									</li>
									<?
		                            $bgp=$nestConfig['imgBgp'];
		                            if($bgp=='50% 50%'){$bgptxt='居中';}
		                            else if($bgp=='0 0'){$bgptxt='左上';}
		                            else if($bgp=='0 50%'){$bgptxt='左中';}
		                            else if($bgp=='0 100%'){$bgptxt='左下';}
		                            else if($bgp=='50% 0'){$bgptxt='中上';}
		                            else if($bgp=='50% 50%'){$bgptxt='居中';}
		                            else if($bgp=='50% 100%'){$bgptxt='中下';}
		                            else if($bgp=='100% 0%'){$bgptxt='右上';}
		                            else if($bgp=='100% 50%'){$bgptxt='右中';}
		                            else if($bgp=='100% 100%'){$bgptxt='右下';}
		                            else{$bgptxt='自定义';}
		                            ?>
									<li class="contentType" style="display: none;">
										<label>对齐位置：</label>
										<span id="child<?=$i?>imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
										<input id="child<?=$i?>imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="nestConfig[<?=$i?>].imgBgp" value="<?=$bgp?>" />
										<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src,imgBgp,,,.t-jadb-title:eq(<?=$i?>)" data-isn="child<?=$i?>">手动调整<i class="popsd"></i></label>
									</li>
									<li class="textContent contentType" style="clear:both;">
										<label for="child<?=$i?>i3">文字内容：</label>
										<input id="child<?=$i?>i3" class="setinput" type="text" title="" junezx_vali_str="true" name="nestConfig[<?=$i?>].textContent" value="<?=$nestConfig['textContent']?>" />
									</li>
									<li class="imgContent textContent contentType" style="clear:both;">
										<label for="child<?=$i?>i2">链接地址：</label>
										<input id="child<?=$i?>i2" class="setinput" type="text" title="" junezx_vali_url="true" name="nestConfig[<?=$i?>].href" value="<?=$nestConfig['href']?>" />
										<input id="child<?=$i?>hrefMode" class="chkBox" type="checkbox" name="nestConfig[<?=$i?>].hrefMode" value="_blank" <? if($nestConfig['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
										<label for="child<?=$i?>hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
									</li>
									<li class="textContent contentType">
										<label for="child<?=$i?>rd3">文字对齐方式：</label>
										<div id="child<?=$i?>rd3">
											<input type="radio" id="child<?=$i?>r5" name="nestConfig[<?=$i?>].characterAlign" value="left" <? if($nestConfig['characterAlign']=='left'){echo'checked="checked"';} ?> />
											<label for="child<?=$i?>r5">居左</label>
											<input type="radio" id="child<?=$i?>r6" name="nestConfig[<?=$i?>].characterAlign" value="center" <? if($nestConfig['characterAlign']=='center'){echo'checked="checked"';} ?> />
											<label for="child<?=$i?>r6">居中</label>
											<input type="radio" id="child<?=$i?>r7" name="nestConfig[<?=$i?>].characterAlign" value="right" <? if($nestConfig['characterAlign']=='right'){echo'checked="checked"';} ?> />
											<label for="child<?=$i?>r7">居右</label>
										</div>
									</li>
									<li class="textContent contentType">
										<label for="sdtzCharacterColor">文字颜色：</label>
										<div class="setcolorpanel">
											<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$nestConfig['characterColor']?>;"></div></div></div>
											<input id="sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterColor" value="<?=$nestConfig['characterColor']?>" />
										</div>
									</li>
									<li class="textContent contentType">
										<label for="sdtzCharacterBgColor">文字背景颜色：</label>
										<div class="setcolorpanel">
											<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$nestConfig['characterBgColor']?>;"></div></div></div>
											<input id="sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterBgColor" value="<?=$nestConfig['characterBgColor']?>" />
										</div>
									</li>
									
									<li class="textContent contentType">
										<label for="child<?=$i?>i5">文字大小：</label>
										<input id="child<?=$i?>i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig[<?=$i?>].characterSize" value="<?=$nestConfig['characterSize']?>" />
									</li>
									<li class="textContent contentType">
										<label for="child<?=$i?>characterFont">文字字体：</label>
										<select id="child<?=$i?>characterFont" name="nestConfig[<?=$i?>].characterFont">
				<option value="宋体" <? if($nestConfig['characterFont']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
                <option value="黑体" <? if($nestConfig['characterFont']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
                <option value="微软雅黑" <? if($nestConfig['characterFont']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
                <option value="楷体" <? if($nestConfig['characterFont']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
                <option value="Arial" <? if($nestConfig['characterFont']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
                <option value="Verdana" <? if($nestConfig['characterFont']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
                <option value="Georgia" <? if($nestConfig['characterFont']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
                <option value="Times New Roman" <? if($nestConfig['characterFont']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
                <option value="Trebuchet MS" <? if($nestConfig['characterFont']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
                <option value="Courier" <? if($nestConfig['characterFont']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
                <option value="Impact" <? if($nestConfig['characterFont']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
                <option value="Comic Sans MS" <? if($nestConfig['characterFont']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
                <option value="Tahoma" <? if($nestConfig['characterFont']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
                <option value="Symbol" <? if($nestConfig['characterFont']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
                <option value="Palatino Linotype" <? if($nestConfig['characterFont']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
                <option value="Bookman Old Style" <? if($nestConfig['characterFont']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
										</select>
									</li>
									<li class="textContent contentType">
										<label for="child<?=$i?>characterWeight">文字粗细：</label>
										<select id="child<?=$i?>characterWeight" name="nestConfig[<?=$i?>].characterWeight">
											<option value="normal" <? if($nestConfig['characterWeight']=='normal'){echo'selected="selected"';} ?>>正常</option>
											<option value="bold" <? if($nestConfig['characterWeight']=='bold'){echo'selected="selected"';} ?>>粗体</option>
										</select>
									</li>
									<li class="customContent contentType" style="clear:both;height:auto;">
										<label for="child<?=$i?>_ta1">自定义内容：</label>
										<textarea id="child<?=$i?>_ta1" name="nestConfig[<?=$i?>].cContent"><?=stripslashes($nestConfig['cContent'])?></textarea>
										<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$i?>].cContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
									</li>
								</ul>
								<span class="inputAccording-end"></span>
								<span class="titleBH inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">标题5变换设置</span><em></em></span>
                        <label class="titleBH" for="sc<?=$i?>rd1">标题内容：</label>
                        <div class="titleBH" id="sc<?=$i?>rd1" style="height:55px;">
                        <input type="radio" id="child<?=$i?>bh_ra" name="nestConfig[<?=$i?>].cTypeBH" data-choose="titleBH" value="imgContentBH" <? if($nestConfig['cTypeBH']=='imgContentBH'){echo'checked="checked"';} ?> />
                        <label for="child<?=$i?>bh_ra" title="">图片</label>
                        <input type="radio" id="child<?=$i?>bh_rb" name="nestConfig[<?=$i?>].cTypeBH" data-choose="titleBH" value="textContentBH" <? if($nestConfig['cTypeBH']=='textContentBH'){echo'checked="checked"';} ?> />
                        <label for="child<?=$i?>bh_rb" title="" style="display:none;">文字</label>
                        <input type="radio" id="child<?=$i?>bh_rc" name="nestConfig[<?=$i?>].cTypeBH" data-choose="titleBH" value="customContentBH" <? if($nestConfig['cTypeBH']=='customContentBH'){echo'checked="checked"';} ?> />
						<label for="child<?=$i?>bh_rc" title="" style="width:100px;">自定义内容</label>
						</div>
								<ul class="titleBH" style="padding-left:0px;list-style:none;">
									<li class="imgContentBH contentTypeBH" style="clear:both;">
										<label for="child<?=$i?>jdhi_src_bh">背景图片：</label>
										<input id="child<?=$i?>jdhi_src_bh" class="setinput " type="text" title="" junezx_vali_pic="true" name="nestConfig[<?=$i?>].pSrcBH" value="<?=$nestConfig['pSrcBH']?>" />
                                    </li>
									 <?
									$bgp=$nestConfig['imgBgpBH'];
									if($bgp=='50% 50%'){$bgptxt='居中';}
									else if($bgp=='0 0'){$bgptxt='左上';}
									else if($bgp=='0 50%'){$bgptxt='左中';}
									else if($bgp=='0 100%'){$bgptxt='左下';}
									else if($bgp=='50% 0'){$bgptxt='中上';}
									else if($bgp=='50% 50%'){$bgptxt='居中';}
									else if($bgp=='50% 100%'){$bgptxt='中下';}
									else if($bgp=='100% 0%'){$bgptxt='右上';}
									else if($bgp=='100% 50%'){$bgptxt='右中';}
									else if($bgp=='100% 100%'){$bgptxt='右下';}
									else{$bgptxt='自定义';}
									?>
									<li class=" contentTypeBH" style="display: none;">
										<label>对齐位置：</label>
										<span id="child<?=$i?>imgBgp_bh_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
										<input id="child<?=$i?>imgBgp_bh" class="setinput " type="hidden" title="请选择背景图片的位置" name="nestConfig[<?=$i?>].imgBgpBH" value="<?=$bgp?>" />
										<label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src_bh,imgBgp_bh,,,.t-jadb-title:eq(<?=$i?>)" data-isn="child<?=$i?>">手动调整<i class="popsd"></i></label>
									</li>
									<li class="textContentBH contentTypeBH" style="clear:both;">
										<label for="child<?=$i?>bh_i3">文字内容：</label>
										<input id="child<?=$i?>bh_i3" class="setinput" type="text" title="" junezx_vali_str="true" name="nestConfig[<?=$i?>].textContentBH" value="<?=$nestConfig['textContentBH']?>" />
									</li>
									<li class="imgContentBH textContentBH contentTypeBH" style="clear:both;">
                                    <label for="child<?=$i?>bh_i2">链接地址：</label>
                                    <input id="child<?=$i?>bh_i2" class="setinput" type="text" title="" junezx_vali_url="true" name="nestConfig[<?=$i?>].hrefBH" value="<?=$nestConfig['hrefBH']?>" />
                                    <input id="child<?=$i?>hrefMode" class="chkBox" type="checkbox" name="nestConfig[<?=$i?>].hrefModeBH" value="_blank" <? if($nestConfig['hrefModeBH']=='_blank'){echo'checked="checked"';} ?> />
                                    <label for="child<?=$i?>hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
									</li>
									<li class="textContentBH contentTypeBH">
										<label for="child<?=$i?>bh_rd3">文字对齐方式：</label>
										<div id="child<?=$i?>bh_rd3">
											<input type="radio" id="child<?=$i?>bh_r5" name="nestConfig[<?=$i?>].characterAlignBH" value="left" <? if($nestConfig['characterAlignBH']=='left'){echo'checked="checked"';} ?> />
											<label for="child<?=$i?>bh_r5">居左</label>
											<input type="radio" id="child<?=$i?>bh_r6" name="nestConfig[<?=$i?>].characterAlignBH" value="center" <? if($nestConfig['characterAlignBH']=='center'){echo'checked="checked"';} ?> />
											<label for="child<?=$i?>bh_r6">居中</label>
											<input type="radio" id="child<?=$i?>bh_r7" name="nestConfig[<?=$i?>].characterAlignBH" value="right" <? if($nestConfig['characterAlignBH']=='right'){echo'checked="checked"';} ?> />
											<label for="child<?=$i?>bh_r7">居右</label>
										</div>
									</li>
									<li class="textContentBH contentTypeBH">
										<label for="sdtzCharacterColorBH">文字颜色：</label>
										<div class="setcolorpanel">
											<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$nestConfig['characterColorBH']?>;"></div></div></div>
											<input id="sdtzCharacterColorBH" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterColorBH" value="<?=$nestConfig['characterColorBH']?>" />
										</div>
									</li>
									<li class="textContentBH contentTypeBH">
										<label for="sdtzCharacterBgColorBH">文字背景颜色：</label>
										<div class="setcolorpanel">
											<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:<?=$nestConfig['characterBgColorBH']?>;"></div></div></div>
										<input id="sdtzCharacterBgColorBH" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig[<?=$i?>].characterBgColorBH" value="<?=$nestConfig['characterBgColorBH']?>" />
										</div>
									</li>
									<li class="textContentBH contentTypeBH">
										<label for="child<?=$i?>bh_i5">文字大小：</label>
										<input id="child<?=$i?>bh_i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig[<?=$i?>].characterSizeBH" value="<?=$nestConfig['characterSizeBH']?>" />
									</li>
									<li class="textContentBH contentTypeBH">
										<label for="child<?=$i?>characterFontBH">文字字体：</label>
										<select id="child<?=$i?>characterFontBH" name="nestConfig[<?=$i?>].characterFontBH">
					<option value="宋体" <? if($nestConfig['characterFontBH']=='宋体'){echo'selected="selected"';} ?> data-style="font-family:宋体;">宋体</option>
					<option value="黑体" <? if($nestConfig['characterFontBH']=='黑体'){echo'selected="selected"';} ?> data-style="font-family:黑体;">黑体</option>
					<option value="微软雅黑" <? if($nestConfig['characterFontBH']=='微软雅黑'){echo'selected="selected"';} ?> data-style="font-family:微软雅黑;">雅黑</option>
					<option value="楷体" <? if($nestConfig['characterFontBH']=='楷体'){echo'selected="selected"';} ?> data-style="font-family:楷体;">楷体</option>
					<option value="Arial" <? if($nestConfig['characterFontBH']=='Arial'){echo'selected="selected"';} ?> data-style="font-family:Arial;">Arial</option>
					<option value="Verdana" <? if($nestConfig['characterFontBH']=='Verdana'){echo'selected="selected"';} ?> data-style="font-family:Verdana;">Verdana</option>
					<option value="Georgia" <? if($nestConfig['characterFontBH']=='Georgia'){echo'selected="selected"';} ?> data-style="font-family:Georgia;">Georgia</option>
					<option value="Times New Roman" <? if($nestConfig['characterFontBH']=='Times New Roman'){echo'selected="selected"';} ?> data-style="font-family:Times New Roman;">Times New Roman</option>
					<option value="Trebuchet MS" <? if($nestConfig['characterFontBH']=='Trebuchet MS'){echo'selected="selected"';} ?> data-style="font-family:Trebuchet MS;">Trebuchet MS</option>
					<option value="Courier" <? if($nestConfig['characterFontBH']=='Courier'){echo'selected="selected"';} ?> data-style="font-family:Courier;">Courier</option>
					<option value="Impact" <? if($nestConfig['characterFontBH']=='Impact'){echo'selected="selected"';} ?> data-style="font-family:Impact;">Impact</option>
					<option value="Comic Sans MS" <? if($nestConfig['characterFontBH']=='Comic Sans MS'){echo'selected="selected"';} ?> data-style="font-family:Comic Sans MS;">Comic Sans MS</option>
					<option value="Tahoma" <? if($nestConfig['characterFontBH']=='Tahoma'){echo'selected="selected"';} ?> data-style="font-family:Tahoma;">Tahoma</option>
					<option value="Symbol" <? if($nestConfig['characterFontBH']=='Symbol'){echo'selected="selected"';} ?> data-style="font-family:Symbol;">Symbol</option>
					<option value="Palatino Linotype" <? if($nestConfig['characterFontBH']=='Palatino Linotype'){echo'selected="selected"';} ?> data-style="font-family:Palatino Linotype;">Palatino Linotype</option>
					<option value="Bookman Old Style" <? if($nestConfig['characterFontBH']=='Bookman Old Style'){echo'selected="selected"';} ?> data-style="font-family:Bookman Old Style;">Bookman Old Style</option>
										</select>
									</li>
									<li class="textContentBH contentTypeBH">
										<label for="child<?=$i?>characterWeightBH">文字粗细：</label>
										<select id="child<?=$i?>characterWeightBH" name="nestConfig[<?=$i?>].characterWeightBH">
											<option value="normal" <? if($nestConfig['characterWeightBH']=='normal'){echo'selected="selected"';} ?>>正常</option>
											<option value="bold" <? if($nestConfig['characterWeightBH']=='bold'){echo'selected="selected"';} ?>>粗体</option>
										</select>
									</li>
									<li class="customContentBH contentTypeBH" style="clear:both;height:auto;">
										<label for="child<?=$i?>bh__ta1">自定义内容：</label>
										<textarea id="child<?=$i?>bh__ta1" name="nestConfig[<?=$i?>].cContentBH"><?=stripslashes($nestConfig['cContentBH'])?></textarea>
										<label  type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$i?>].cContentBH" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label >
									</li>
								</ul>
								<span class="titleBH inputAccording-end"></span>
								<span class="inputAccording" style="display: list-item;"><i></i><span style="padding:0 10px;">面板<?=$k?>设置</span><em></em></span>
								<label for="sc<?=$i?>rd2">面板内容：</label>
								<div id="sc<?=$i?>rd2" style="height:55px;">
								  <input type="radio" id="child<?=$i?>rd" name="nestConfig[<?=$i?>].cType1" data-choose="panel" value="imgContent" <? if($nestConfig['cType1']=='imgContent'){echo'checked="checked"';} ?> />
								  <label for="child<?=$i?>rd" title="">图片</label>
								  <input type="radio" id="child<?=$i?>rf" name="nestConfig[<?=$i?>].cType1" data-choose="panel" value="customContent" <? if($nestConfig['cType1']=='customContent'){echo'checked="checked"';} ?> />
								  <label for="child<?=$i?>rf" title="" style="width:100px;">自定义内容</label>
								</div>
								<ul style="padding-left:0px;list-style:none;">
									<li class="imgContent1 contentType1" style="clear:both;">
										<label for="child<?=$i?>jdhi_src1">背景图片：</label>
										<input id="child<?=$i?>jdhi_src1" class="setinput " type="text" junezx_vali_pic="true" title="" name="nestConfig[<?=$i?>].pSrc1" value="<?=$nestConfig['pSrc1']?>" />
									</li>
<?
$bgp=$nestConfig['imgBgp1'];
if($bgp=='50% 50%'){$bgptxt='居中';}
else if($bgp=='0 0'){$bgptxt='左上';}
else if($bgp=='0 50%'){$bgptxt='左中';}
else if($bgp=='0 100%'){$bgptxt='左下';}
else if($bgp=='50% 0'){$bgptxt='中上';}
else if($bgp=='50% 50%'){$bgptxt='居中';}
else if($bgp=='50% 100%'){$bgptxt='中下';}
else if($bgp=='100% 0%'){$bgptxt='右上';}
else if($bgp=='100% 50%'){$bgptxt='右中';}
else if($bgp=='100% 100%'){$bgptxt='右下';}
else{$bgptxt='自定义';}
?>
                        <li class=" contentType1" style="display: none;">
                            <label>对齐位置：</label>
                            <span id="child<?=$i?>imgBgp1_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
                            <input id="child<?=$i?>imgBgp1" class="setinput " type="hidden" title="请选择背景图片的位置" name="nestConfig[<?=$i?>].imgBgp1" value="<?=$bgp?>" />
                            <label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src1,imgBgp1,,,.t-jadb-panel:eq(<?=$i?>)" data-isn="child<?=$i?>">手动调整<i class="popsd"></i></label>
                        </li>
                        <li class="imgContent1 contentType1">
                            <label for="child<?=$i?>i8">链接地址：</label>
                            <input id="child<?=$i?>i8" class="setinput" type="text" title="" junezx_vali_url="true" name="nestConfig[<?=$i?>].href1" value="<?=$nestConfig['href1']?>" />
                            <input id="child<?=$i?>hrefMode1" class="chkBox" type="checkbox" name="nestConfig[<?=$i?>].hrefMode1" value="_blank" <? if($nestConfig['hrefMode1']=='_blank'){echo'checked="checked"';} ?> />
                            <label for="child<?=$i?>hrefMode1" class="chkLabel" style="width:64px;">新窗口打开</label>
                        </li>
                        <li class="customContent1 contentType1" style="clear:both;height:auto;">
                            <label for="child<?=$i?>_ta2">自定义内容：</label>
                            <textarea id="child<?=$i?>_ta2" name="nestConfig[<?=$i?>].cContent1"><?=stripslashes($nestConfig['cContent1'])?></textarea>
                            <label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig[<?=$i?>].cContent1" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
                        </li>
                    </ul>
                    <span class="inputAccording-end"></span>
                </li>
						
                        
                        <? } ?>
                        
                        
                        
                        
                        
                        </ul>
					</li>
					<li style="height:auto;">
						<div id="contentPage" style="width:480px;margin:0 auto;">
						</div>
					</li>
					<li>
						<div id="pageManager" style="width:480px;margin:15px auto;">
							<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一页</span>
							<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前页</span>
						</div>
					</li>
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
					<li style="text-align:center;font-size:14px;color:#333;background:url(http://img03.taobaocdn.com/imgextra/i3/39767794/TB2RPU4apXXXXcLXXXXXXXXXXXX_!!39767794.png);"><span style="background:#fff;padding:0 10px;">标题面板宽高设置</span></li>
					<li>
						<label for="ii5">标题宽度：</label>
						<input id="ii5" class="setinput" type="text" title="确定后统一设置标题宽度，无需统一设置时请留空" name="tWidth" value="<?=$_POST['tWidth']?>" />
					</li>
					<li>
						<label for="ii6">标题高度：</label>
						<input id="ii6" class="setinput" type="text" title="确定后统一设置标题高度，无需统一设置时请留空" name="tHeight" value="<?=$_POST['tHeight']?>" />
					</li>
					<li>
						<label for="ii7">面板宽度：</label>
						<input id="ii7" class="setinput" type="text" title="确定后统一设置面板宽度，无需统一设置时请留空" name="pWidth" value="<?=$_POST['pWidth']?>" />
					</li>
					<li>
						<label for="ii8">面板高度：</label>
						<input id="ii8" class="setinput" type="text" title="确定后统一设置面板高度，无需统一设置时请留空" name="pHeight" value="<?=$_POST['pHeight']?>" />
					</li>
					<li>
						<label for="ii9">每组间距：</label>
						<input id="ii9" class="setinput" type="text" title="每组之间的间隔距离" name="gSpace" value="<?=$_POST['gSpace']?>" />
					</li>
					<li class="adCssModeNo">
						<label for="rrd1">鼠标拉动时标题宽高：</label>
						<div id="rrd1">
							<input type="radio" id="rr1" name="titleUnity" value="yes" <? if($_POST['titleUnity']=='yes'){echo'checked="checked"';} ?> />
							<label for="rr1" title="">统一</label>
							<input type="radio" id="rr2" name="titleUnity" value="no" <? if($_POST['titleUnity']=='no'){echo'checked="checked"';} ?> />
							<label for="rr2" title="">不统一</label>
						</div>
					</li>
					<li class="adCssModeNo">
						<label for="rrd1">鼠标拉动时面板宽高：</label>
						<div id="rrd1">
							<input type="radio" id="rr3" name="panelUnity" value="yes" <? if($_POST['panelUnity']=='yes'){echo'checked="checked"';} ?> />
							<label for="rr3" title="">统一</label>
							<input type="radio" id="rr4" name="panelUnity" value="no" <? if($_POST['panelUnity']=='no'){echo'checked="checked"';} ?> />
							<label for="rr4" title="">不统一</label>
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
	$("#tabs").tabs({active: <?=$_POST['active']?>});
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
	
	var j_adDirection = $("#adDirection");
	$("#ii5").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii7").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii7").val(v);
			}
		}
	});
	$("#ii6").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii8").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii8").val(v);
			}
		}
	});
	$("#ii7").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii5").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "up" || j_adDirection.val() == "down") {
				$("#ii5").val(v);
			}
		}
	});
	
	$("#ii8").on({
		"change": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii6").val(v);
			}
		},
		"keyup": function() {
			var v = $(this).val();
			if(j_adDirection.val() == "left" || j_adDirection.val() == "right") {
				$("#ii6").val(v);
			}
		}
	});
	
	$("#adMode").selectmenu({
		change: function() {
			var v = $(this).val(), v1 = $("input[name='adCssMode']:checked").val();
			if(v == "yes") {
				$(".ad1fp").hide();
				$(".ad2fp").hide();
			} else {
				v1 != "yes" && $(".ad1fp").show();
				$(".ad2fp").show();
			}
		}
	});
	$("#adPlay").selectmenu({
		change: function() {
			var v = $(this).val();
			if(v == "yes") {
				$(".ad3fp").show();
			} else {
				$(".ad3fp").hide();
			}
		}
	});
	"<?=$_POST['adCssMode']?>" != "yes" && $(".adCssModeYes").hide();
	"<?=$_POST['adCssMode']?>" == "yes" && (
		$(".adCssModeYes").show(),
		$(".adCssModeNo").hide(),
		$(".ad1fp").hide(),
		$(".titleBH").hide()
	);
	"<?=$_POST['adCssMode']?>" == "yes" && "<?=$_POST['adHideTitle']?>" == "yes" && ($(".adHideTitleYes").hide(), $(".adHideTitleYes").nextUntil(".inputAccording-end").hide());
	$("#adHideTitle").selectmenu({
		change: function() {
			var v = $(this).val(), v1 = $("input[name='adCssMode']:checked").val();
			if(v == "yes" && v1 == "yes") {
				$(".adHideTitleYes").hide();
				$(".adHideTitleYes").nextUntil(".inputAccording-end").hide();
			} else {
				$(".adHideTitleYes").show();
				$(".adHideTitleYes").nextUntil(".inputAccording-end").show();
			}
		}
	});
	// $("#adCssMode").selectmenu({
		// change: function() {
			// var v = $(this).val(), tempDirection = $("#adDirection").val(), titleBHControlVal = $("#titleBHControl").val(), adModeVal = $("#adMode").val();
			// if(tempDirection == "right") {
				// tempDirection = "left";
			// }
			// if(tempDirection == "down") {
				// tempDirection = "up";
			// }
			// if(v == "yes") {
				// $(".adCssModeYes").show();
				// $(".adCssModeNo").hide();
				// $(".ad1fp").hide();
				// $(".titleBH").hide();
				// $("#adDirection").selectmenu("destroy").html('<option value="left"> 横向从左至右</option><option value="up">纵向从上至下</option>').val(tempDirection).selectmenu();
			// } else {
				// $(".adCssModeYes").hide();
				// $(".adCssModeNo").show();
				// if(adModeVal != "yes") {$(".ad1fp").show();}
				// if(titleBHControlVal == "yes") {$(".titleBH").show();}
				// $("#adDirection").selectmenu("destroy").html('<option value="left"> 横向从左至右</option><option value="right">横向从右至左</option><option value="up">纵向从上至下</option><option value="down">纵向从下至上</option>').val(tempDirection).selectmenu();
			// }
		// }
	// });
	
	$("#rd2ac").on("change", "input", function(event) {
		var v = $(this).val(), tempDirection = $("#adDirection").val(), titleBHControlVal = $("#titleBHControl").val(), adModeVal = $("#adMode").val();
		if(tempDirection == "right") {
			tempDirection = "left";
		}
		if(tempDirection == "down") {
			tempDirection = "up";
		}
		if(v == "yes") {
			$(".adCssModeYes").show();
			$(".adCssModeNo").hide();
			$(".ad1fp").hide();
			$(".titleBH").hide();
			$("#adDirection").selectmenu("destroy").html('<option value="left"> 横向从左至右</option><option value="up">纵向从上至下</option>').val(tempDirection).selectmenu();
		} else {
			$(".adCssModeYes").hide();
			$(".adCssModeNo").show();
			if(adModeVal != "yes") {$(".ad1fp").show();}
			if(titleBHControlVal == "yes") {$(".titleBH").css("display","list-item");}
			$("#adDirection").selectmenu("destroy").html('<option value="left"> 横向从左至右</option><option value="right">横向从右至左</option><option value="up">纵向从上至下</option><option value="down">纵向从下至上</option>').val(tempDirection).selectmenu();
		}
	});
	
	"<?=$_POST['titleBHControl']?>" != "yes" && $(".titleBH").hide();
	$("#titleBHControl").selectmenu({
		change: function() {
			var v = $(this).val(), v1 = $("input[name='adCssMode']:checked").val();
			if(v == "yes" && v1 != "yes") {
				$(".titleBH").css("display","list-item");
			} else {
				$(".titleBH").hide();
			}
		}
	});
	"<?=$_POST['adMode']?>" == "yes" && ($(".ad1fp").hide(), $(".ad2fp").hide());
	$(".ad3fp").hide();
	"no" == "yes" && ($(".ad3fp").show());
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div,.ui-dialog-content .sliderContent > div,.ui-dialog-content .textContent > div,.ui-dialog-content .textContentBH > div,.ui-dialog-content textarea").buttonset();
	$("#tForm select").selectmenu();
	$(".contentType").hide();
	$(".contentTypeBH").hide();
	$(".contentType1").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var nestConfigCount = "<?=$num?>";
	for(var i = 0; i<nestConfigCount;i++ ) {
		var contentType = $(".sliderContent:eq("+i+")").find("input[type='radio']:checked:eq(0)").val();
		$(".sliderContent:eq("+i+")").find("."+contentType).show();
		var contentTypeBH = $(".sliderContent:eq("+i+")").find("input[type='radio']:checked:eq(2)").val();
		$(".sliderContent:eq("+i+")").find("."+contentTypeBH).show();
		var contentType1 = $(".sliderContent:eq("+i+")").find("input[type='radio']:checked:eq(4)").val();
		$(".sliderContent:eq("+i+")").find("."+contentType1+"1").show();
	}
	
	$("#sliderContentUl").on("click", "input[type='radio']", function(event) {
		var val = $(this).val(), choose = $(this).attr("data-choose");
		if(choose == "title") {
			$(this).parent().parent().find(".contentType").hide();
			$(this).parent().parent().find("."+val).show();
		} else if(choose == "titleBH") {
			$(this).parent().parent().find(".contentTypeBH").hide();
			$(this).parent().parent().find("."+val).show();
		} else if(choose == "panel"){
			$(this).parent().parent().find(".contentType1").hide();
			$(this).parent().parent().find("."+val+"1").show();
		}
	});
	
	setPage(document.getElementById("contentPage"),<?=$num?>, 1);
	$("#contentPage").on("click", function() {
		var num = parseInt($(this).children("a.on").html(), 10) - 1,
		contentType = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked:eq(0)").val(),
		contentTypeBH = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked:eq(2)").val(),
		contentType1 = $(".sliderContent:eq("+num+")").find("input[type='radio']:checked:eq(4)").val();
		$(".contentType").hide();
		$(".contentTypeBH").hide();
		$(".contentType1").hide();
		$(".sliderContent").hide();
		$("#sliderContentUl .sliderContent:eq("+num+")").show();
		$(".sliderContent:eq("+num+")").find("."+contentType).show();
		$(".sliderContent:eq("+num+")").find("."+contentTypeBH).show();
		$(".sliderContent:eq("+num+")").find("."+contentType1+"1").show();
	});
	var startNum = <?=$num?>;
	$("#pageManager").on("click", "span", function(event) {
		var t = $(this),
		num = parseInt($("#contentPage").children("a.on").html(), 10) - 1,
		len,
		index = t.index();
		if(index == 0) {
			$('<li class="sliderContent" style="clear:both;height:auto;">'+
						'<span class="adHideTitleYes inputAccording opened" style="display: list-item;"><i></i><span style="padding:0 10px;">标题<?=$startNum?>设置</span><em></em></span>'+
						'<label for="sc'+startNum+'rd1">标题内容：</label>'+
						
						'<div id="sc'+startNum+'rd1" style="height:55px;">'+
							'<input type="radio" id="child'+startNum+'ra" name="nestConfig['+startNum+'].cType" data-choose="title" value="imgContent" checked="checked" />'+
							'<label for="child'+startNum+'ra" title="">图片</label>'+
							'<input type="radio" id="child'+startNum+'rb" name="nestConfig['+startNum+'].cType" data-choose="title" value="textContent" />'+
							'<label for="child'+startNum+'rb" title="" style="display:none;">文字</label>'+
							'<input type="radio" id="child'+startNum+'rc" name="nestConfig['+startNum+'].cType" data-choose="title" value="customContent" />'+
							'<label for="child'+startNum+'rc" title="" style="width:100px;">自定义内容</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<li class="imgContent contentType" style="clear:both;">'+
								'<label for="child'+startNum+'i1">背景图片：</label>'+
								'<input id="child'+startNum+'i1" class="setinput" type="text" title="" junezx_vali_pic="true" name="nestConfig['+startNum+'].pSrc" value="" />'+
							'</li>'+
							'<li class="textContent contentType" style="clear:both;">'+
								'<label for="child'+startNum+'i3">文字内容：</label>'+
								'<input id="child'+startNum+'i3" class="setinput" type="text" title="" junezx_vali_str="true" name="nestConfig['+startNum+'].textContent" value="" />'+
							'</li>'+
							'<li class="imgContent textContent contentType">'+
								'<label for="child'+startNum+'i2">链接地址：</label>'+
								'<input id="child'+startNum+'i2" class="setinput" type="text" title="" junezx_vali_url="true" name="nestConfig['+startNum+'].href" value="" />'+
								'<input id="child'+startNum+'hrefMode" class="chkBox" type="checkbox" name="nestConfig['+startNum+'].hrefMode" value="_blank" checked="checked" />'+
								'<label for="child'+startNum+'hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>'+
							'</li>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'rd3">文字对齐方式：</label>'+
								'<div id="child'+startNum+'rd3">'+
									'<input type="radio" id="child'+startNum+'r5" name="nestConfig['+startNum+'].characterAlign" value="left" checked="checked" />'+
									'<label for="child'+startNum+'r5">居左</label>'+
									'<input type="radio" id="child'+startNum+'r6" name="nestConfig['+startNum+'].characterAlign" value="center" />'+
									'<label for="child'+startNum+'r6">居中</label>'+
									'<input type="radio" id="child'+startNum+'r7" name="nestConfig['+startNum+'].characterAlign" value="right" />'+
									'<label for="child'+startNum+'r7">居右</label>'+
								'</div>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="sdtzCharacterColor">文字颜色：</label>'+
								'<div class="setcolorpanel">'+
									'<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
									'<input id="sdtzCharacterColor" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterColor" value="" />'+
								'</div>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="sdtzCharacterBgColor">文字背景颜色：</label>'+
								'<div class="setcolorpanel">'+
									'<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
									'<input id="sdtzCharacterBgColor" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterBgColor" value="" />'+
								'</div>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'i4">文字颜色：</label>'+
								'<input id="child'+startNum+'i4" class="setinput tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterColor" value="" />'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'i5">文字大小：</label>'+
								'<input id="child'+startNum+'i5" class="setinput" type="text" title="请输入数字的大小，无需加px" name="nestConfig['+startNum+'].characterSize" value="" />'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'characterFont">文字字体：</label>'+
								'<select id="child'+startNum+'characterFont" name="nestConfig['+startNum+'].characterFont">'+
									'<option value="宋体" selected="selected" data-style="font-family:宋体;">宋体</option>'+
									'<option value="黑体" data-style="font-family:黑体;">黑体</option>'+
									'<option value="微软雅黑" data-style="font-family:微软雅黑;">雅黑</option>'+
									'<option value="楷体" data-style="font-family:楷体;">楷体</option>'+
									'<option value="Arial" data-style="font-family:Arial;">Arial</option>'+
									'<option value="Verdana" data-style="font-family:Verdana;">Verdana</option>'+
									'<option value="Georgia" data-style="font-family:Georgia;">Georgia</option>'+
									'<option value="Times New Roman" data-style="font-family:Times New Roman;">Times New Roman</option>'+
									'<option value="Trebuchet MS" data-style="font-family:Trebuchet MS;">Trebuchet MS</option>'+
									'<option value="Courier" data-style="font-family:Courier;">Courier</option>'+
									'<option value="Impact" data-style="font-family:Impact;">Impact</option>'+
									'<option value="Comic Sans MS" data-style="font-family:Comic Sans MS;">Comic Sans MS</option>'+
									'<option value="Tahoma" data-style="font-family:Tahoma;">Tahoma</option>'+
									'<option value="Symbol" data-style="font-family:Symbol;">Symbol</option>'+
									'<option value="Palatino Linotype" data-style="font-family:Palatino Linotype;">Palatino Linotype</option>'+
									'<option value="Bookman Old Style" data-style="font-family:Bookman Old Style;">Bookman Old Style</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContent contentType">'+
								'<label for="child'+startNum+'characterWeight">文字粗细：</label>'+
								'<select id="child'+startNum+'characterWeight" name="nestConfig['+startNum+'].characterWeight">'+
									'<option value="normal" selected="selected">正常</option>'+
									'<option value="bold">粗体</option>'+
								'</select>'+
							'</li>'+
							'<li class="customContent contentType" style="clear:both;height:auto;">'+
								'<label for="child'+startNum+'_ta1">自定义内容：</label>'+
								'<textarea id="child'+startNum+'_ta1" name="nestConfig['+startNum+'].cContent"></textarea>'+
								'<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+startNum+'].cContent" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
							'</li>'+
						'</ul>'+
						'<span class="inputAccording-end"></span>'+
						
						'<span class="titleBH inputAccording opened" style="display:none;"><i></i><span style="padding:0 10px;">标题'+startNum+'变换设置</span><em></em></span>'+
						'<label class="titleBH" for="sc'+startNum+'rd1" style="display:none;">标题内容：</label>'+
						'<div class="titleBH" id="sc'+startNum+'rd1" style="height:55px;display:none;">'+
							'<input type="radio" id="child'+startNum+'bh_ra" name="nestConfig['+startNum+'].cTypeBH" data-choose="titleBH" value="imgContentBH" checked="checked" />'+
							'<label for="child'+startNum+'bh_ra" title="">图片</label>'+
							'<input type="radio" id="child'+startNum+'bh_rb" name="nestConfig['+startNum+'].cTypeBH" data-choose="titleBH" value="textContentBH" />'+
							'<label for="child'+startNum+'bh_rb" title="" style="display:none;">文字</label>'+
							'<input type="radio" id="child'+startNum+'bh_rc" name="nestConfig['+startNum+'].cTypeBH" data-choose="titleBH" value="customContentBH" />'+
							'<label for="child'+startNum+'bh_rc" title="" style="width:100px;">自定义内容</label>'+
						'</div>'+
						'<ul class="titleBH" style="padding-left:0px;list-style:none;display:none;">'+
							'<li class="imgContentBH contentTypeBH" style="clear:both;">'+
								'<label for="child'+startNum+'bh_i1">背景图片：</label>'+
								'<input id="child'+startNum+'bh_i1" class="setinput" type="text" title="" junezx_vali_pic="true" name="nestConfig['+startNum+'].pSrcBH" value="" />'+
							'</li>'+
							'<li class="textContentBH contentTypeBH" style="clear:both;">'+
								'<label for="child'+startNum+'bh_i3">文字内容：</label>'+
								'<input id="child'+startNum+'bh_i3" class="setinput" type="text" title="" junezx_vali_str="true" name="nestConfig['+startNum+'].textContentBH" value="" />'+
							'</li>'+
							'<li class="imgContentBH textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_i2">链接地址：</label>'+
								'<input id="child'+startNum+'bh_i2" class="setinput" type="text" title="" junezx_vali_url="true" name="nestConfig['+startNum+'].hrefBH" value="" />'+
								'<input id="child'+startNum+'hrefMode" class="chkBox" type="checkbox" name="nestConfig['+startNum+'].hrefModeBH" value="_blank" checked="checked" />'+
								'<label for="child'+startNum+'hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'bh_rd3">文字对齐方式：</label>'+
								'<div id="child'+startNum+'bh_rd3">'+
									'<input type="radio" id="child'+startNum+'bh_r5" name="nestConfig['+startNum+'].characterAlignBH" value="left" checked="checked" />'+
									'<label for="child'+startNum+'bh_r5">居左</label>'+
									'<input type="radio" id="child'+startNum+'bh_r6" name="nestConfig['+startNum+'].characterAlignBH" value="center" />'+
									'<label for="child'+startNum+'bh_r6">居中</label>'+
									'<input type="radio" id="child'+startNum+'bh_r7" name="nestConfig['+startNum+'].characterAlignBH" value="right" />'+
									'<label for="child'+startNum+'bh_r7">居右</label>'+
								'</div>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="sdtzCharacterColorBH">文字颜色：</label>'+
								'<div class="setcolorpanel">'+
									'<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
									'<input id="sdtzCharacterColorBH" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterColorBH" value="" />'+
								'</div>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="sdtzCharacterBgColorBH">文字背景颜色：</label>'+
								'<div class="setcolorpanel">'+
									'<div class="sp-replacer sp-light"><div class="sp-preview"><div class="sp-preview-inner" style="background-color:transparent;"></div></div></div>'+
									'<input id="sdtzCharacterBgColorBH" class="setinputcolor tColorPicker" type="text" title="" name="nestConfig['+startNum+'].characterBgColorBH" value="" />'+
								'</div>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'characterFontBH">文字字体：</label>'+
								'<select id="child'+startNum+'characterFontBH" name="nestConfig['+startNum+'].characterFontBH">'+
									'<option value="宋体" selected="selected" data-style="font-family:宋体;">宋体</option>'+
									'<option value="黑体" data-style="font-family:黑体;">黑体</option>'+
									'<option value="微软雅黑" data-style="font-family:微软雅黑;">雅黑</option>'+
									'<option value="楷体" data-style="font-family:楷体;">楷体</option>'+
									'<option value="Arial" data-style="font-family:Arial;">Arial</option>'+
									'<option value="Verdana" data-style="font-family:Verdana;">Verdana</option>'+
									'<option value="Georgia" data-style="font-family:Georgia;">Georgia</option>'+
									'<option value="Times New Roman" data-style="font-family:Times New Roman;">Times New Roman</option>'+
									'<option value="Trebuchet MS" data-style="font-family:Trebuchet MS;">Trebuchet MS</option>'+
									'<option value="Courier" data-style="font-family:Courier;">Courier</option>'+
									'<option value="Impact" data-style="font-family:Impact;">Impact</option>'+
									'<option value="Comic Sans MS" data-style="font-family:Comic Sans MS;">Comic Sans MS</option>'+
									'<option value="Tahoma" data-style="font-family:Tahoma;">Tahoma</option>'+
									'<option value="Symbol" data-style="font-family:Symbol;">Symbol</option>'+
									'<option value="Palatino Linotype" data-style="font-family:Palatino Linotype;">Palatino Linotype</option>'+
									'<option value="Bookman Old Style" data-style="font-family:Bookman Old Style;">Bookman Old Style</option>'+
								'</select>'+
							'</li>'+
							'<li class="textContentBH contentTypeBH">'+
								'<label for="child'+startNum+'characterWeightBH">文字粗细：</label>'+
								'<select id="child'+startNum+'characterWeightBH" name="nestConfig['+startNum+'].characterWeightBH">'+
									'<option value="normal" selected="selected">正常</option>'+
									'<option value="bold">粗体</option>'+
								'</select>'+
							'</li>'+
							'<li class="customContentBH contentTypeBH" style="clear:both;height:auto;">'+
								'<label for="child'+startNum+'bh__ta1">自定义内容：</label>'+
								'<textarea id="child'+startNum+'bh__ta1" name="nestConfig['+startNum+'].cContentBH"></textarea>'+
								'<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+startNum+'].cContentBH" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
							'</li>'+
						'</ul>'+
						'<span class="titleBH inputAccording-end" style="display:none;"></span>'+
						'<span class="inputAccording opened" style="display: list-item;"><i></i><span style="padding:0 10px;">面板<?=$startNum?>设置</span><em></em></span>'+
						'<label for="sc'+startNum+'rd2">面板内容：</label>'+
						'<div id="sc'+startNum+'rd2" style="height:55px;">'+
							'<input type="radio" id="child'+startNum+'rd" name="nestConfig['+startNum+'].cType1" data-choose="panel" value="imgContent" checked="checked" />'+
							'<label for="child'+startNum+'rd" title="">图片</label>'+
							'<input type="radio" id="child'+startNum+'rf" name="nestConfig['+startNum+'].cType1" data-choose="panel" value="customContent" />'+
							'<label for="child'+startNum+'rf" title="" style="width:100px;">自定义内容</label>'+
						'</div>'+
						'<ul style="padding-left:0px;list-style:none;">'+
							'<li class="imgContent1 contentType1" style="clear:both;">'+
								'<label for="child'+startNum+'i7">背景图片：</label>'+
								'<input id="child'+startNum+'i7" class="setinput" type="text" title="" junezx_vali_pic="true" name="nestConfig['+startNum+'].pSrc1" value="" />'+
								'<input id="child'+startNum+'autoSize1" class="chkBox" type="checkbox" name="nestConfig['+startNum+'].autoSize1" value="yes" checked="checked" />'+
								'<label for="child'+startNum+'autoSize1" class="chkLabel">自动高宽</label>'+
							'</li>'+
							'<li class="imgContent1 contentType1">'+
								'<label for="child'+startNum+'i8">链接地址：</label>'+
								'<input id="child'+startNum+'i8" class="setinput" type="text" title="" junezx_vali_url="true" name="nestConfig['+startNum+'].href1" value="" />'+
								'<input id="child'+startNum+'hrefMode1" class="chkBox" type="checkbox" name="nestConfig['+startNum+'].hrefMode1" value="_blank" checked="checked" />'+
								'<label for="child'+startNum+'hrefMode1" class="chkLabel" style="width:64px;">新窗口打开</label>'+
							'</li>'+
							'<li class="customContent1 contentType1" style="clear:both;height:auto;">'+
								'<label for="child'+startNum+'_ta2">自定义内容：</label>'+
								'<textarea id="child'+startNum+'_ta2" name="nestConfig['+startNum+'].cContent1"></textarea>'+
								'<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="nestConfig['+startNum+'].cContent1" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>'+
							'</li>'+
						'</ul>'+
						'<span class="inputAccording-end"></span>'+
					'</li>').appendTo($("#sliderContentUl"));
					$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
						$(this).children("span:eq(0)").children("span:eq(0)").html("标题"+(i+1)+"设置");
						$(this).children("span:eq(2)").children("span:eq(0)").html("标题"+(i+1)+"变换设置");
						$(this).children("span:eq(4)").children("span:eq(0)").html("面板"+(i+1)+"设置");
						var ul = $(this).children("ul");
						//ul.find("label:eq(0)").html("轮播图片"+(i+1)+"：");
					});
					$("input, .setform > li > div, .sliderContent > div, .textContent > div, textarea").buttonset();
					$("#tForm select").selectmenu();
					$(".contentType").hide();
					$(".sliderContent").hide();
					len = $("#sliderContentUl").children("li").length;
					$("#contentPage").html("");
					setPage(document.getElementById("contentPage"), len, len);
					$("#contentPage").children("a.on").trigger("click");
					startNum++;
		} else if(index == 1) {
			if($("#sliderContentUl").children("li").length == 1) {
				return;
			}
			$("#sliderContentUl").children("li.sliderContent:eq("+num+")").remove();
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				$(this).children("span:eq(0)").children("span:eq(0)").html("标题"+(i+1)+"设置");
				$(this).children("span:eq(1)").children("span:eq(0)").html("标题"+(i+1)+"变换设置");
				$(this).children("span:eq(2)").children("span:eq(0)").html("面板"+(i+1)+"设置");
				var ul = $(this).children("ul");
				//ul.find("label:eq(0)").html("轮播图片"+(i+1)+"：");
			});
			len = $("#sliderContentUl").children("li").length;
			if(num+1 > len) { num = len - 1;}
			$("#contentPage").html("");
			setPage(document.getElementById("contentPage"), len, num+1);
			$("#contentPage").children("a.on").trigger("click");
		}
		var contentlength = $(".sliderContent").length, tempVal = $("#adActive").val();
		$("#adActive").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if(tempVal == (i+1)) {selected = ' selected="selected"'}
			$("#adActive").append('<option '+selected+' value="'+(i+1)+'">第'+(i+1)+'个面板</option>');
		}
		$("#adActive").selectmenu();
	});
	
	
	$(".inputAccording").each(function() {
		var _ia = $(this), checkNeedHide = true;
		_ia.nextUntil(".inputAccording-end").each(function() {
			var _tt = $(this), _select = _tt.find("select:eq(0)"), _input = _tt.find("input:eq(0)");
			if(_select.length > 0 && _select.children("option:selected").index() > 0) {
				checkNeedHide = false;
			}
			if(_input.length > 0 && _input.val() != "") {
				checkNeedHide = false;
			}
		});
		_ia.nextUntil(".inputAccording-end").each(function() {	
			var _tt = $(this)
			if(checkNeedHide) {
				_tt.css("display") == "none" ? _tt.addClass("inputAccording-hided") : _tt.hide();
			}
		});
		if(!checkNeedHide) {
			_ia.addClass("opened");
		}
	})
	$("#tabs").off("click.iac").on("click.iac", ".inputAccording", function(event) {
		var _t = $(this), _curTab = _t.parent().parent();
		if(_t.hasClass("opened")) {
			_t.removeClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.is(":hidden") ? _tt.addClass("inputAccording-hided") : _tt.slideUp(200); });
		} else {
			_t.addClass("opened");
			_t.nextUntil(".inputAccording-end").each(function() { var _tt = $(this); _tt.hasClass("inputAccording-hided") ? _tt.removeClass("inputAccording-hided") : _tt.slideDown(200); });
		}
		// setTimeout(function() {
			// $(".form-tabs-content").scrollTop(_t.offset().top - _curTab.offset().top);
		// }, 300);
	});
	
	var activePage = "", activeLen = $("#sliderContentUl").children("li").length;
	if(activePage!="") {
		activePage = parseInt(activePage.substr(1), 10) + 1;
		setPage(document.getElementById("contentPage"), activeLen, activePage);
		$("#contentPage").children("a[rel='"+activePage+"']").trigger("click");
	}
});
</script>