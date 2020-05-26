<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header');?>
<script type="text/javascript">
<!--
	$(function(){
		SwapTab('setting','on','',5,<?php echo $_GET['tab'] ? $_GET['tab'] : '1'?>);
		$.formValidator.initConfig({formid:"myform",autotip:true,onerror:function(msg,obj){window.top.art.dialog({content:msg,lock:true,width:'200',height:'50'}, function(){this.close();$(obj).focus();})}});		
		$("#js_path").formValidator({onshow:"<?php echo L('setting_input').L('setting_js_path')?>",onfocus:"<?php echo L('setting_js_path').L('setting_end_with_x')?>"}).inputValidator({onerror:"<?php echo L('setting_js_path').L('setting_input_error')?>"}).regexValidator({regexp:"(.+)\/$",onerror:"<?php echo L('setting_js_path').L('setting_end_with_x')?>"});
		$("#css_path").formValidator({onshow:"<?php echo L('setting_input').L('setting_css_path')?>",onfocus:"<?php echo L('setting_css_path').L('setting_end_with_x')?>"}).inputValidator({onerror:"<?php echo L('setting_css_path').L('setting_input_error')?>"}).regexValidator({regexp:"(.+)\/$",onerror:"<?php echo L('setting_css_path').L('setting_end_with_x')?>"});
		
		$("#img_path").formValidator({onshow:"<?php echo L('setting_input').L('setting_img_path')?>",onfocus:"<?php echo L('setting_img_path').L('setting_end_with_x')?>"}).inputValidator({onerror:"<?php echo L('setting_img_path').L('setting_input_error')?>"}).regexValidator({regexp:"(.+)\/$",onerror:"<?php echo L('setting_img_path').L('setting_end_with_x')?>"});
			
		$("#upload_url").formValidator({onshow:"<?php echo L('setting_input').L('setting_upload_url')?>",onfocus:"<?php echo L('setting_upload_url').L('setting_end_with_x')?>"}).inputValidator({onerror:"<?php echo L('setting_upload_url').L('setting_input_error')?>"}).regexValidator({regexp:"(.+)\/$",onerror:"<?php echo L('setting_upload_url').L('setting_end_with_x')?>"});
		
		$("#errorlog_size").formValidator({onshow:"<?php echo L('setting_errorlog_hint')?>",onfocus:"<?php echo L('setting_input').L('setting_error_log_size')?>"}).inputValidator({onerror:"<?php echo L('setting_error_log_size').L('setting_input_error')?>"}).regexValidator({regexp:"num",datatype:"enum",onerror:"<?php echo L('setting_errorlog_type')?>"});	
			
		$("#phpsso_api_url").formValidator({onshow:"<?php echo L('setting_phpsso_type')?>",onfocus:"<?php echo L('setting_phpsso_type')?>",tipcss:{width:'300px'},empty:false}).inputValidator({onerror:"<?php echo L('setting_phpsso_type')?>"}).regexValidator({regexp:"http:\/\/(.+)[^/]$",onerror:"<?php echo L('setting_phpsso_type')?>"});
		
		$("#phpsso_appid").formValidator({onshow:"<?php echo L('input').L('setting_phpsso_appid')?>",onfocus:"<?php echo L('input').L('setting_phpsso_appid')?>"}).regexValidator({regexp:"^\\d{1,8}$",onerror:"<?php echo L('setting_phpsso_appid').L('must_be_number')?>"});
		$("#phpsso_version").formValidator({onshow:"<?php echo L('input').L('setting_phpsso_version')?>",onfocus:"<?php echo L('input').L('setting_phpsso_version')?>"}).regexValidator({regexp:"^\\d{1,8}$",onerror:"<?php echo L('setting_phpsso_version').L('must_be_number')?>"});
		$("#phpsso_auth_key").formValidator({onshow:"<?php echo L('input').L('setting_phpsso_auth_key')?>",onfocus:"<?php echo L('input').L('setting_phpsso_auth_key')?>"}).regexValidator({regexp:"^\\w{32}$",onerror:"<?php echo L('setting_phpsso_auth_key').L('must_be_32_w')?>"});
	})
//-->
</script>


<div class="pad-10">
<div class="col-tab">
<ul class="tabBut cu-li">
            <li id="tab_setting_1" class="on" onclick="SwapTab('setting','on','',5,1);">基本配置</li>
            <li id="tab_setting_2" onclick="SwapTab('setting','on','',5,2);"  style="display:none">公告设置</li>
            <li id="tab_setting_3" onclick="SwapTab('setting','on','',5,3);">修改路径</li>
            <li id="tab_setting_4" onclick="SwapTab('setting','on','',5,4);">工具路径</li>
			<li id="tab_setting_5" onclick="SwapTab('setting','on','',5,5);" style="display:none"><?php echo L('setting_connect')?></li>
</ul>
<div id="div_setting_1" class="contentList pad-10">
<form action="?m=admin&c=setting&a=zxtsave" method="post" id="myform">
<table width="100%"  class="table_form">
  <tr>
    <th width="120">页面标题</th>
    <td class="y-bg"><input type="text" class="input-text" name="setting[zx_title]" id="zex_title" size="30" value="<?=$r['Title']?>"/>&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">辅助工具的浏览器标题</font></td>
  </tr>
  <tr>
    <th width="120">设计师旺旺</th>
    <td class="y-bg"><input type="text" class="input-text" name="setting[zx_wang]" id="zex_wang" size="30" value="<?=$r['Wang']?>"/>&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">旺旺ID</font></td>
  </tr>
  <tr>
    <th width="120">注册密钥</th>
    <td class="y-bg"><input type="text" class="input-text" name="setting[zx_copy]" id="zex_copy" size="30" value="<?=$r['CopyRight']?>"/>&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">注册码生成密钥(大小写英文,数字)</font></td>
  </tr>
  <tr>
    <th width="120">默认风格</th>
    <td class="y-bg">
    <input name="setting[zx_style]" value="1"  type="radio"  <?php echo ($r['Style']!=='2'||!$r['Style']=='3'||!$r['Style']=='4') ? ' checked' : ''?>> 深邃&nbsp;&nbsp;&nbsp;&nbsp;
	<input name="setting[zx_style]" value="2" type="radio"  <?php echo ($r['Style']=='2') ? ' checked' : ''?>> 经典&nbsp;&nbsp;&nbsp;&nbsp;
	<input name="setting[zx_style]" value="3" type="radio"  <?php echo ($r['Style']=='3') ? ' checked' : ''?>> 深灰&nbsp;&nbsp;&nbsp;&nbsp;
	<input name="setting[zx_style]" value="4" type="radio"  <?php echo ($r['Style']=='4') ? ' checked' : ''?>> 浅灰</td>
  </tr> 
  <tr>
    <th width="120">可用</th>
    <td class="y-bg">
    <input name="setting[zx_open]" value="1"  type="radio"  <?php echo ($r['Open']!=='0') ? ' checked' : ''?>> 游客可用&nbsp;&nbsp;&nbsp;&nbsp;
	<input  name="setting[zx_open]" value="0" type="radio"  <?php echo ($r['Open']=='0') ? ' checked' : ''?>> 登录可用&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">不登录是否可以使用工具(功能开发中,暂不可用)</font></td>
  </tr> 
  <tr>
    <th width="120">主动升级</th>
    <td class="y-bg">
    <input name="setting[zx_updata]" value="1"  type="radio"  <?php echo ($r['updata']!=='0') ? ' checked' : ''?>> 启用&nbsp;&nbsp;&nbsp;&nbsp;
	<input  name="setting[zx_updata]" value="0" type="radio"  <?php echo ($r['updata']=='0') ? ' checked' : ''?>> 不启用&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">服务器分发更新(仅主文件)(早期不可关闭,省了我做增量包的麻烦,后续会提供关闭功能)</font></td>
  </tr> 	
  <tr>
    <th width="120">工具CSS</th>
    <td class="y-bg"><textarea type="text" class="input-text" name="setting[zx_code]" id="zx_code" size="5" style=" min-width:200px; min-height:100px;" ><?=$r['Code']?></textarea>&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">内联</font></td>
  </tr>

</table>
<div class="bk15"></div>
<input name="dosubmit" type="submit" value="<?php echo L('submit')?>" class="button" style="width:80px; margin-left:135px">
</form>
</div>
<div id="div_setting_2" class="contentList pad-10 hidden" style="display:none">
	<table width="100%"  class="table_form">
  <tr>
    <th width="120">公告开启</th>
    <td class="y-bg">
	  <input name="setconfig[admin_log]" value="1" type="radio" <?php echo ($admin_log=='1') ? ' checked' : ''?>> 开启&nbsp;&nbsp;&nbsp;&nbsp;
	  <input name="setconfig[admin_log]" value="0" type="radio" <?php echo ($admin_log=='0') ? ' checked' : ''?>> 关闭
     </td>
  </tr>
  <tr>
    <th width="120">样式</th>
    <td class="y-bg">
	  <input name="setconfig[errorlog]" value="1" type="radio" <?php echo ($errorlog=='1') ? ' checked' : ''?>> 默认&nbsp;&nbsp;&nbsp;&nbsp;
	  <input name="setconfig[errorlog]" value="0" type="radio" <?php echo ($errorlog=='0') ? ' checked' : ''?>> 整体自定义
     </td>
  </tr> 
  <tr>
    <th>默认风格</th>
    <td class="y-bg"><textarea type="text" class="input-text" name="setting[errorlog_size]" id="errorlog_size" size="5" style=" min-width:40%; min-height:100px;"></textarea> <font color="gray">HTML</font></td>
  </tr>     

  <tr>
    <th>整体自定义</th>
    <td class="y-bg"><textarea type="text" class="input-text" name="setting[errorlog_size]" id="errorlog_size" size="5" style=" min-width:40%; min-height:100px;"></textarea> <font color="gray">整个框体也自定义</font></td>
  </tr>


</table>
</div>
<div id="div_setting_3" class="contentList pad-10 hidden">

<table width="100%"  class="table_form">
 <tr>
    <th>说明</th>
    <td class="y-bg"><font color="gray">HTML/css+div/JQ不教学,有能力自己改,没能力请保持原样,如果改出错,请自行覆盖原文件,只管修复BUG</font></td>
  </tr>
  
  <tr>
    <th></th>
    <td class="y-bg"><font color="gray">工具路径为/3.0/ 不可修改,修改很麻烦,相关问题不回复</font></td>
  </tr>
  
  <tr>
    <th></th>
    <td class="y-bg"><font color="gray">后台修改问题不回复,参阅phpcms开发文档</font></td>
  </tr>
 
 <tr>
    <th>工具首页</th>
    <td class="y-bg"><font color="gray">路径:\phpcms\templates\default\zxn\content.html</font></td>
  </tr>
  <tr>
    <th>网站首页</th>
    <td class="y-bg"><font color="gray">路径:\phpcms\templates\default\content\index.html</font></td>
  </tr>
  <tr>
    <th>生成代码</th>
    <td class="y-bg"><font color="gray">路径:\3.0\codeforgen.php 改生成版权标识也在这里</font></td>
  </tr>
  <tr>
    <th>弹出公告</th>
    <td class="y-bg"><font color="gray">路径:\3.0\js\3x.js</font></td>
  </tr>
   <tr>
    <th>预览代码</th>
    <td class="y-bg"><font color="gray">路径:\3.0\preview.php</font></td>
  </tr>
  <tr>
    <th>样例预览</th>
    <td class="y-bg"><font color="gray">路径:\phpcms\templates\default\zxn\previewI.html,previewP.html</font></td>
  </tr>
  <tr  style="display:none">
    <th></th>
    <td class="y-bg"><textarea type="text" class="input-text" name="setting[zx_index]" id="errorlog_size" size="5" style=" min-width:80%; min-height:500px;"><?=$IndexHtml?></textarea> <font color="gray"></font></td>
  </tr> 
    <tr  style="display:none">
    <th width="120">还原初始</th>
    <td class="y-bg">
    <input name="setting[zx_syhf]" value="2"  type="radio" > 还原&nbsp;&nbsp;&nbsp;&nbsp;
	<input  name="setting[zx_syhf]" value="10" type="radio"  checked > 不&nbsp;&nbsp;&nbsp;&nbsp;<font color="gray">不可逆,恢复初始</font></td>
  </tr> 
  </table>
  <div class="bk15"></div>

</div>
<div id="div_setting_4" class="contentList pad-10 hidden" style="display:none">
<table width="100%"  class="table_form">
 <tr>
    <th>说明</th>
    <td class="y-bg"><font color="gray">其他工具的路径</font></td>
  </tr>
  
  <tr>
    <th></th>
    <td class="y-bg"><font color="gray">路径不可修改!路径不可修改!路径不可修改!</font></td>
  </tr>
  
  <tr>
    <th></th>
    <td class="y-bg"><font color="gray">修改路径很麻烦,也不影响使用,所以不协助</font></td>
  </tr>
 <tr>
    <th>样例首页</th>
    <td class="y-bg"><font color="gray">路径:/zxn</font></td>
  </tr>
 <tr>
    <th>工具首页</th>
    <td class="y-bg"><font color="gray">路径:/3.0/</font></td>
  </tr>
  <tr>
    <th>导航工具</th>
    <td class="y-bg"><font color="gray">路径:/zxn/nav</font></td>
  </tr>
  <tr>
    <th>色值工具</th>
    <td class="y-bg"><font color="gray">路径:/zxn/color</font></td>
  </tr>
  <tr>
    <th>固定背景</th>
    <td class="y-bg"><font color="gray">路径:/zxn/gdbg</font></td>
  </tr>


  </table>
</div>

<div id="div_setting_5" class="contentList pad-10 hidden" style="display:none">
<table width="100%"  class="table_form">


  <tr>
    <th width="120"><?php echo L('setting_snda_enable')?></th>
    <td class="y-bg">
	 APP key <input type="text" class="input-text" name="setconfig[snda_akey]" id="snda_akey" size="20" value="<?php echo $snda_akey ?>"/>
	 APP secret key <input type="text" class="input-text" name="setconfig[snda_skey]" id="snda_skey" size="40" value="<?php echo $snda_skey ?>"/> <a href="http://code.snda.com/index/oauth" target="_blank"><?php echo L('click_register')?></a>
    </td>
  </tr>

  <tr>
    <th><?php echo L('setting_connect_sina')?></th>
    <td class="y-bg">
	App key <input type="text" class="input-text" name="setconfig[sina_akey]" id="sina_akey" size="20" value="<?php echo $sina_akey ?>"/>
	App secret key <input type="text" class="input-text" name="setconfig[sina_skey]" id="sina_skey" size="40" value="<?php echo $sina_skey ?>"/> <a href="http://open.t.sina.com.cn/wiki/index.php/<?php echo L('connect_micro')?>" target="_blank"><?php echo L('click_register')?></a>
	</td>
  </tr>

  <tr>
    <th><?php echo L('setting_connect_qq')?></th>
    <td class="y-bg">
	App key <input type="text" class="input-text" name="setconfig[qq_akey]" id="qq_akey" size="20" value="<?php echo $qq_akey ?>"/>
	App secret key <input type="text" class="input-text" name="setconfig[qq_skey]" id="qq_skey" size="40" value="<?php echo $qq_skey ?>"/> <a href="http://open.t.qq.com/" target="_blank"><?php echo L('click_register')?></a>
	</td>
  </tr> 
  <tr>
    <th><?php echo L('setting_connect_qqnew')?></th>
    <td class="y-bg">
	App I D  &nbsp;<input type="text" class="input-text" name="setconfig[qq_appid]" id="qq_appid" size="20" value="<?php echo $qq_appid;?>"/>
	App key <input type="text" class="input-text" name="setconfig[qq_appkey]" id="qq_appkey" size="40" value="<?php echo $qq_appkey;?>"/> 
	<?php echo L('setting_connect_qqcallback')?> <input type="text" class="input-text" name="setconfig[qq_callback]" id="qq_callback" size="40" value="<?php echo $qq_callback;?>"/>
	<a href="http://connect.qq.com" target="_blank"><?php echo L('click_register')?></a>
	</td>
  </tr> 

  </table>
</div>



</div>
</div>

</body>
<script type="text/javascript">

function SwapTab(name,cls_show,cls_hide,cnt,cur){
    for(i=1;i<=cnt;i++){
		if(i==cur){
			 $('#div_'+name+'_'+i).show();
			 $('#tab_'+name+'_'+i).attr('class',cls_show);
		}else{
			 $('#div_'+name+'_'+i).hide();
			 $('#tab_'+name+'_'+i).attr('class',cls_hide);
		}
	}
}

function showsmtp(obj,hiddenid){
	hiddenid = hiddenid ? hiddenid : 'smtpcfg';
	var status = $(obj).val();
	if(status == 1) $("#"+hiddenid).show();
	else  $("#"+hiddenid).hide();
}
function test_mail() {
	var mail_type = $('input[checkbox=mail_type][checked]').val();
	var mail_auth = $('input[checkbox=mail_auth][checked]').val();
    $.post('?m=admin&c=setting&a=public_test_mail&mail_to='+$('#mail_to').val(),{mail_type:mail_type,mail_server:$('#mail_server').val(),mail_port:$('#mail_port').val(),mail_user:$('#mail_user').val(),mail_password:$('#mail_password').val(),mail_auth:mail_auth,mail_from:$('#mail_from').val()}, function(data){
	alert(data);
	});
}

</script>
</html>