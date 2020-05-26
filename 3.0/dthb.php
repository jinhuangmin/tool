<form id="tForm" form-data="jdhb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">基础设置</a></li>
		<li><a href="#tabs-2">内容设置</a></li>
		<li><a href="#tabs-3">样式设置</a></li>
	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="rd1">链接类型：</label>
                        <div id="rd1">
							<input type="radio" id="r1" name="linkMode" value="ptlink" <? if($_POST['linkMode']=='ptlink'){echo'checked="checked"';} ?> />
							<label for="r1" title="普通链接，请在下方输入链接地址">普通</label>
							<input type="radio" id="r3" name="linkMode" value="wwlink" <? if($_POST['linkMode']=='wwlink'){echo'checked="checked"';} ?>>
							<label for="r3" title="阿里旺旺链接，请在下方输入旺旺账号">旺旺</label>
							<input type="radio" id="r4" name="linkMode" value="mdlink" <? if($_POST['linkMode']=='mdlink'){echo'checked="checked"';} ?> />
							<label for="r4" title="锚点链接，请在下方选择需要跳转到的锚点" style="display: none;">锚点</label>
							<input type="radio" id="gr1" name="linkMode" value="gwlink" <? if($_POST['linkMode']=='gwlink'){echo'checked="checked"';} ?> />
							<label for="gr1" title="购物车链接，请直接输入宝贝链接地址">购物车</label>
						</div>
					</li>
					<li class="ptlink gwlink linkMode">
						<label id="gwlabel1" for="i2">链接地址：</label>
						<input id="i2" class="setinput" type="text" title="请输入链接地址，如：某个宝贝的页面地址。" junezx_vali_url="true" name="href" value="<?=$_POST['href']?>" />
						<input id="hrefMode" class="chkBox" type="checkbox" name="hrefMode" value="_blank" <? if($_POST['hrefMode']=='_blank'){echo'checked="checked"';} ?> />
						<label for="hrefMode" class="chkLabel" style="width:64px;">新窗口打开</label>
					</li>
					<li class="wwlink linkMode">
						<label for="i4">旺旺ID：</label>
						<input id="i4" class="setinput" type="text" title="请输入旺旺的登录ID。重要提醒：开启分流时，不能填写子旺旺ID！只有主旺旺才可自动分流。" junezx_vali_str="true" name="wangID" value="<?=$_POST['wangID']?>" />
					</li>
					<li class="wwlink linkMode">
						<label for="shuntMode">分流方式：</label>
						<select id="shuntMode" name="shuntMode">
							<option value="no" <? if($_POST['shuntMode']=='no'){echo'selected="selected"';} ?>>不分流</option>
							<option value="yes" <? if($_POST['shuntMode']=='yes'){echo'selected="selected"';} ?>>分流</option>
						</select>
					</li>
					<li class="mdlink linkMode">
						<label for="anchorSelect">点击后跳转至：</label>
						<select id="anchorSelect" name="anchorSelect">
							<?
					$anchorName = explode(',',$_POST['anchorName']);
					if($_POST['anchorName']==''){echo'<option value="">请在左侧应用面版中至少添加一个锚点</option>';}
					else{
					foreach($anchorName as $item){
                       if($item==$_POST['anchorSelect']){$sct='selected="selected"';}else{$sct='selected="selected"';}
					   echo'<option value="'.$item.'" '.$sct.'> 锚点：'.$item.'</option>';				
						}}
					?>
						</select>
					</li>
					<li>
						<label for="dtMode">灵敏度：</label>
						<select id="dtMode" name="dtMode">
							<option value="1" <? if($_POST['dtMode']=='1'){echo'selected="selected"';} ?>>普通</option>
							<option value="2" <? if($_POST['dtMode']=='2'){echo'selected="selected"';} ?>>较灵敏</option>
							<option value="3" <? if($_POST['dtMode']=='3'){echo'selected="selected"';} ?>>灵敏</option>
							<option value="4" <? if($_POST['dtMode']=='4'){echo'selected="selected"';} ?>>极灵敏</option>
						</select>
					</li>
					<li>
						<label for="dtHtml">固定层：</label>
						<textarea id="dtHtml" name="dtHtml"><?=stripslashes($_POST['dtHtml'])?></textarea>
						<label type="button" class="btnLabel t-kshbj-btn" data-target="zdy-clicked" data-zdyName="dtHtml" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label>
						<span style="    margin-left:140px;margin-top:-20px;display:block;color: #ff0000;transform: scale(0.88, 0.88);-webkit-transform: scale(0.88, 0.88);">注：固定层的内容无法使用鼠标经过效果</span>
					</li>
					<li>
						<label for="tt_i1">提示文字：</label>
						<input id="tt_i1" class="setinput" type="text" title="鼠标经过应用时的提示文字" junezx_vali_str="true" name="tipText" value="<?=$_POST['tipText']?>" />
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li style="height:auto;">
						<ul id="sliderContentUl" style="padding-left:0px;list-style:none;">
							
                       	  <? $n=0;  foreach($_POST['childConfig'] as $i=>$item){$n=$n+1;  ?> 
        
        
        <li class="sliderContent" style="clear:both;height:auto;">
            <label for="sc<?=$i?>rd1">动态层内容：</label>
            <div id="sc<?=$i?>rd1" class="contentTypeDiv" style="padding-bottom:20px;float:left;">
                <input type="radio" id="sc<?=$i?>_r1" name="contentType[<?=$i?>]" value="imgContent" <? if($_POST['contentType'][$i]=='imgContent'){echo'checked="checked"';} ?> />
                <label for="sc<?=$i?>_r1" title="动态层内容为图片加链接" style="width:100px;">图片</label>
                <input type="radio" id="sc<?=$i?>_r2" name="contentType[<?=$i?>]" value="customContent" <? if($_POST['contentType'][$i]=='customContent'){echo'checked="checked"';} ?> />
                <label for="sc<?=$i?>_r2" title="动态层内容为自定义内容" style="width:100px;">自定义</label>
            </div>
            <ul style="padding-left:0px;list-style:none;">
                <li class="imgContent contentType" style="clear:both;">
                    <label for="sc<?=$i?>jdhi_src">动态层图片<?=$n?>：</label>
                    <input id="sc<?=$i?>jdhi_src" class="setinput " type="text" title="请输入图片空间里的图片链接" junezx_vali_pic="true" name="sliderSrc[]" value="<?=$_POST['sliderSrc'][$i]?>" />
                </li>
                 <?
$bgp=$_POST['sliderImgBgp'][$i];
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
                <li class="imgContent contentType">
                    <label>动态层图片<?=$n?>位置：</label>
                    <span id="sc<?=$i?>imgBgp_text" class="jDragSelect"><val><?=$bgptxt?></val><span class="ui-icon ui-icon-triangle-1-s"></span></span>
                    <input id="sc<?=$i?>imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="sliderImgBgp[]" value="<?=$bgp?>" />
                    <label class="btnLabel jDragHandleImg" data-ids="<?=$_POST['appID']?>,tForm,jdhi_src" data-isn="sc<?=$i?>">手动调整<i class="popsd"></i></label>
                </li>
                <li class="customContent contentType" style="clear:both;height:auto;">
                    <label for="sc<?=$i?>_i6">自定义内容<?=$n?>：</label>
                    <textarea id="sc<?=$i?>_i6" name="customContent[]"><?=stripslashes($_POST['customContent'][$i])?></textarea>
                    <label type="button" class="btnLabel t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="<?=$_POST['appID']?>">可视化编辑</label><!-- data-zdyAttachID=""-->
                </li>
                <li>
                    <label for="sc<?=$i?>dtType">动态类型：</label>
                    <select id="sc<?=$i?>dtType" name="childConfig[<?=$i?>].dtType">
                        <option value="1" <? if($item['dtType']=='1'){echo'selected="selected"';} ?>>全方位</option>
                        <option value="2" <? if($item['dtType']=='2'){echo'selected="selected"';} ?>>仅横向</option>
                        <option value="3" <? if($item['dtType']=='3'){echo'selected="selected"';} ?>>仅纵向</option>
                    </select>
                </li>
                <li>
                    <label for="sc<?=$i?>dtRange">动态幅度：</label>
                    <select id="sc<?=$i?>dtRange" name="childConfig[<?=$i?>].dtRange">
                        <option value="1" <? if($item['dtRange']=='1'){echo'selected="selected"';} ?>>小</option>
                        <option value="2" <? if($item['dtRange']=='2'){echo'selected="selected"';} ?>>较小</option>
                        <option value="3" <? if($item['dtRange']=='3'){echo'selected="selected"';} ?>>中</option>
                        <option value="4" <? if($item['dtRange']=='4'){echo'selected="selected"';} ?>>较大</option>
                        <option value="5" <? if($item['dtRange']=='5'){echo'selected="selected"';} ?>>大</option>
                    </select>
                </li>
                <li>
                    <label for="sc<?=$i?>dtDirection">动态方向：</label>
                    <select id="sc<?=$i?>dtDirection" name="childConfig[<?=$i?>].dtDirection">
                        <option value="1" <? if($item['dtDirection']=='1'){echo'selected="selected"';} ?>>随鼠标方向</option>
                        <option value="2" <? if($item['dtDirection']=='2'){echo'selected="selected"';} ?>>随鼠标相反方向</option>
                    </select>
                </li>
                <li>
                    <label for="sc<?=$i?>dtDelay">动态延迟：</label>
                    <select id="sc<?=$i?>dtDelay" name="childConfig[<?=$i?>].dtDelay">
                        <?
			for($s=0.1;$s<7.1;$s=$s+0.1){ $sx=''.$s.'s';
				if($item['dtDelay']==$sx){$sel='selected';}else{$sel='';}
			echo'<option value="'.$s.'s" '.$sel.'>'.$s.'秒</option>';
				}
			
			?>
                        <option value="8s" <? if($item['dtDelay']=='8'){echo'selected="selected"';} ?>>8秒</option>
                        <option value="9s" <? if($item['dtDelay']=='9'){echo'selected="selected"';} ?>>9秒</option>
                        <option value="10s" <? if($item['dtDelay']=='10'){echo'selected="selected"';} ?>>10秒</option>
                    </select>
                </li>
            </ul>
        </li>
    
    <? } ?>
				</ul>
					</li>
					<li>
						<div id="contentPage" style="margin: 0 auto;">
						</div>
						<div id="slidersortbox" style="display:none;position:absolute;width:120px;background:#eee;right:65px;bottom:70px;">
							<ul id="slidersortlist">
							</ul>
							<div>
								<span id="slidersortok"><i class="ui-icon ui-icon-circle-check" style="display:inline-block;"></i> 确定</span>
								<span id="slidersortcancel"><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 取消</span>
							</div>
						</div>
					</li>
					<li>
						<div id="pageManager" style="width:480px;margin:0 auto;">
							<span><i class="ui-icon ui-icon-circle-plus" style="display:inline-block;"></i> 添加一层</span>
							<span><i class="ui-icon ui-icon-circle-close" style="display:inline-block;"></i> 删除当前层</span>
							<span><i class="ui-icon ui-icon-pencil" style="display:inline-block;"></i> 顺序调整</span>
						</div>
					</li>
					
				</ul>
			</div>
			<div id="tabs-3">
				<ul class="setform">
					<li>
						<label for="ii1">自定义宽度：</label>
						<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$_POST['width']?>" />
					</li>
					<li>
						<label for="ii2">应用高度：</label>
						<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$_POST['height']?>" />
					</li>
					<li>
						<label for="ii3">应用上边距：</label>
						<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$_POST['top']?>" />
					</li>
					<li>
						<label for="ii4">应用左边距：</label>
						<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$_POST['left']?>" />
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
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div,.ui-dialog-content .sliderContent > div").buttonset();
	$("#tForm select").selectmenu();
	$(".linkMode").hide();
	$(".<?=$_POST['linkMode']?>").show();
	$("#rd1").children("input[name='linkMode']").click(function() {
		var val = $(this).val();
		$(".linkMode").hide();
		$("."+val).show();
		if(val == "gwlink") {
			$("#gwlabel1").html("宝贝地址：");
		} else {
			$("#gwlabel1").html("链接地址：");
		}
	});
	$(".contentType").hide();
	$(".sliderContent").hide();
	$("#sliderContentUl .sliderContent:eq(0)").show();
	var contentType = "imgContent";
	$(".sliderContent:eq(0)").find("."+contentType).show();
	$("#sliderContentUl").on("click", ".contentTypeDiv input[type='radio']", function(event) {
		var val = $(this).val();
		$(this).parent().parent().find(".contentType").hide();
		$(this).parent().parent().find("."+val).show();
	});
	
	setPage(document.getElementById("contentPage"),<?=$n?>, 1, ["上一层", "下一层"]);
	$("#contentPage").click(function() {
		var num = parseInt($(this).children("a.on").html(), 10) - 1, 
		contentType = $(".sliderContent:eq("+num+")").find(".contentTypeDiv input:checked").val();
		$(".contentType").hide();
		$(".sliderContent").hide();
		$("#sliderContentUl .sliderContent:eq("+num+")").show();
		$(".sliderContent:eq("+num+")").find("."+contentType).show();
	});
	var startNum = <?=$n?>;
	$("#pageManager").on("click", "span", function(event) {
		var t = $(this),
		num = parseInt($("#contentPage").children("a.on").html(), 10) - 1,
		len,
		index = t.index();
		if(index == 0) {
			$('<li class="sliderContent" style="clear:both;height:auto;">'+
				'<label for="sc'+startNum+'rd1">动态层内容：</label>'+
				'<div id="sc'+startNum+'rd1" class="contentTypeDiv" style="padding-bottom:20px;float:left;">'+
					'<input type="radio" id="sc'+startNum+'_r1" name="contentType['+startNum+']" value="imgContent" checked="checked"/>'+
					'<label for="sc'+startNum+'_r1" title="动态层内容为图片加链接" style="width:100px;">图片</label>'+
					'<input type="radio" id="sc'+startNum+'_r2" name="contentType['+startNum+']" value="customContent" />'+
					'<label for="sc'+startNum+'_r2" title="动态层内容为自定义HTML" style="width:100px;">自定义内容</label>'+
				'</div>'+
				'<ul style="padding-left:0px;list-style:none;">'+
					'<li class="imgContent contentType" style="clear:both;">'+
						'<label for="sc'+startNum+'jdhi_src">动态层图片：</label>'+
						'<input id="sc'+startNum+'jdhi_src" class="setinput " type="text" title="请输入图片空间里的图片链接" junezx_vali_pic="true" name="sliderSrc[]" value="" />'+
													'</li>'+
					'<li class="imgContent contentType">'+
						'<label>动态层图片位置：</label>'+
						'<span id="sc'+startNum+'imgBgp_text" class="jDragSelect"><val>居中</val><span class="ui-icon ui-icon-triangle-1-s"></span></span>'+
						'<input id="sc'+startNum+'imgBgp" class="setinput " type="hidden" title="请选择背景图片的位置" name="sliderImgBgp[]" value="50% 50%" />'+
						'<label class="btnLabel jDragHandleImg" data-ids="a8sHk-pWji,tForm,jdhi_src" data-isn="sc'+startNum+'">手动调整<i class="popsd"></i></label>'+
					'</li>'+
					'<li class="customContent contentType" style="clear:both;height:auto;display:none;">'+
						'<label for="sc'+startNum+'_i6">自定义内容：</label>'+
						'<textarea id="sc'+startNum+'_i6" name="customContent[]"></textarea>'+
						'<label type="button" class="btnLabel t-kshbj-btn tkb3" data-target="zdy-clicked" data-zdyName="customContent[]" data-zdyAppID="a8sHk-pWji">可视化编辑</label>'+
					'</li>'+
					'<li>'+
						'<label for="sc'+startNum+'dtRange">动态幅度：</label>'+
						'<select id="sc'+startNum+'dtRange" name="childConfig['+startNum+'].dtRange">'+
							'<option value="1" selected="selected">小</option>'+
							'<option value="2">较小</option>'+
							'<option value="3">中</option>'+
							'<option value="4">较大</option>'+
							'<option value="5">大</option>'+
						'</select>'+
					'</li>'+
					'<li>'+
						'<label for="sc'+startNum+'dtDirection">动态方向：</label>'+
						'<select id="sc'+startNum+'dtDirection" name="childConfig['+startNum+'].dtDirection">'+
							'<option value="1" selected="selected">随鼠标方向</option>'+
							'<option value="2">随鼠标相反方向</option>'+
						'</select>'+
					'</li>'+
				'</ul>'+
			'</li>').appendTo($("#sliderContentUl"));
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				var ul = $(this).children("ul");
				ul.children("label:eq(0)").html("链接地址"+(i+1)+"：");
				ul.children("label:eq(1)").html("动态层图片"+(i+1)+"：");
				ul.children("label:eq(2)").html("动态层图片"+(i+1)+"位置：");
				ul.children("label:eq(3)").html("自定义内容"+(i+1)+"：");
			});
			$(".ui-dialog-content input,.ui-dialog-content .setform > li > div,.ui-dialog-content .sliderContent > div").buttonset();
			$("#tForm select").selectmenu();
			len = $("#sliderContentUl").children("li").length;
			$("#contentPage").html("");
			setPage(document.getElementById("contentPage"), len, len, ["上一层", "下一层"]);
			$("#contentPage").children("a.on").trigger("click");
			startNum++;
		} else if(index == 1) {
			if($("#sliderContentUl").children("li").length == 1) {
				return;
			}
			$("#sliderContentUl").children("li.sliderContent:eq("+num+")").remove();
			
			$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
				var ul = $(this).children("ul");
				ul.children("label:eq(0)").html("链接地址"+(i+1)+"：");
				ul.children("label:eq(1)").html("动态层图片"+(i+1)+"：");
				ul.children("label:eq(2)").html("动态层图片"+(i+1)+"位置：");
				ul.children("label:eq(3)").html("自定义内容"+(i+1)+"：");
			});
			len = $("#sliderContentUl").children("li").length;
			if(num+1 > len) { num = len - 1;}
			$("#contentPage").html("");
			setPage(document.getElementById("contentPage"), len, num+1, ["上一层", "下一层"]);
			$("#contentPage").children("a.on").trigger("click");
		} else if(index == 2) {
			$("#slidersortbox").show();
			var c = $("#sliderContentUl"), cl = c.children("li").length;
			$("#slidersortbox").children("ul").html("");
			for(var i = 0;i<cl;i++) {
				$("#slidersortbox").children("ul").append('<li data-sort="'+i+'">动态层'+(i+1)+'</li>');
			}
		}
		var contentlength = $(".sliderContent").length, tempVal = $("#sliderActive").val();
		$("#sliderActive").selectmenu("destroy").html("");
		for(var i = 0; i<contentlength;i++ ) {
			var selected = "";
			if(tempVal == (i+1)) {selected = ' selected="selected"'}
			$("#sliderActive").append('<option '+selected+' value="'+(i+1)+'">第'+(i+1)+'页</option>');
		}
		$("#sliderActive").selectmenu();
	});
	
	
	$("#slidersortok").on("click", function() {
		var arr = [];
		$("#slidersortbox").children("ul").children("li").each(function() {
			var _t = $(this), sort = _t.attr("data-sort");
			arr.push(sort);
		});
		var c = $("#sliderContentUl");
		var tempDom = $("<div></div>");
		for(var i = 0;i<arr.length; i++) {
			c.children("li:eq("+arr[i]+")").children("div:eq(0)").find("input").attr("name", "contentType["+i+"]");
			var tempClone = c.children("li:eq("+arr[i]+")").clone();
			tempClone.appendTo(tempDom);
		}
		$("#sliderContentUl").html(tempDom.html());
		$("#sliderContentUl").children("li.sliderContent").each(function(i, e) {
			var ul = $(this).children("ul");
			ul.children("label:eq(0)").html("链接地址"+(i+1)+"：");
			ul.children("label:eq(1)").html("轮播图片"+(i+1)+"：");
			ul.children("label:eq(2)").html("轮播图片"+(i+1)+"位置：");
			ul.children("label:eq(3)").html("自定义内容"+(i+1)+"：");
		});
		$("#contentPage").children("a.on").trigger("click");
		$("#slidersortbox").hide();
	});
			
	$("#slidersortcancel").on("click", function() {
		$("#slidersortbox").hide();
	});
	
	$("#slidersortlist").sortable({
		placeholder: "ui-state-highlight"
	}).disableSelection();
	var activePage = "", activeLen = $("#sliderContentUl").children("li").length;
	if(activePage!="") {
		activePage = parseInt(activePage.substr(1), 10) + 1;
		setPage(document.getElementById("contentPage"), activeLen, activePage, ["上一层", "下一层"]);
		$("#contentPage").children("a[rel='"+activePage+"']").trigger("click");
	}
});
</script>