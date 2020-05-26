<?php
defined('IN_ADMIN') or exit('No permission resources.');$addbg=1;
include $this->admin_tpl('header','admin');?>
<script type="text/javascript">
<!--
	var charset = '<?php echo CHARSET;?>';
	var uploadurl = '<?php echo pc_base::load_config('system','upload_url')?>';
//-->
</script>
<script language="javascript" type="text/javascript" src="<?php echo JS_PATH?>content_addtop.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo JS_PATH?>colorpicker.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo JS_PATH?>hotkeys.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo JS_PATH?>cookie.js"></script>
<script type="text/javascript">var catid=<?php echo $catid;?></script>
<form name="myform" id="myform" action="?m=admin&c=zxn&a=adddata" method="post">
<div class="addContent">
<div class="crumbs">发布新样例</div>

    <div class="col-auto">
    	<div class="col-1">
        	<div class="content pad-6">
<table width="100%" cellspacing="0" class="table_form">
	<tbody>	

	<tr>
      <th width="80"> <font color="red">*</font> 标题	  </th>
      <td><input type="text" style="width:400px;" name="info[title]" id="title" value="" class="measure-input  input-text"></td>
    </tr>
	<tr>
      <th width="80"> 关键词	  </th>
      <td><input type="text" name="info[keywords]" id="keywords" value="" style="width:280px" class="input-text">  多关键词之间用空格或者“,”隔开</td>
    </tr>
    <tr>
      <th width="80"> 缩略图	  </th>
      <td><input type="text" name="info[img]" id="imgs" value="" style="width:280px" class="input-text">  传图片空间复制链接过来</td>
    </tr>
    <tr>
      <th width="80"> <font color="red">*</font> 来源	  </th>
      <td><input type="text" name="info[copyfrom]" id="copyfrom" value="Admin" style="width:280px" class="input-text">  来源,比如 Admin</td>
    </tr>
	<tr>
      <th width="80"> <font color="red">*</font> 内容	  </th>
      <td><textarea name="info[Value]" id="Value" style="width:98%;height:400px;"></textarea>  </td>
    </tr>
    <tr>
      <th width="80"> <font color="red">*</font> PSD	  </th>
      <td><input type="text" name="info[Psd]" id="Psd" value="" style="width:280px" class="input-text">  Psd下载地址</td>
    </tr>      
      
     
      
      </tbody></table>
                </div>
        	</div>
        </div>
        
    </div>
</div>

<div class="fixed-bottom">
	<div class="fixed-but text-c">
    <div class="button"><input value="保存后自动关闭" type="submit" name="dosubmit" class="cu" style="width:145px;" onclick="refersh_window()"></div>
    <div class="button"><input value="保存并继续发布" type="submit" name="dosubmit_continue" class="cu" style="width:130px;" title="Alt+X" onclick="refersh_window()"></div>
    <div class="button"><input value="关闭" type="button" name="close" onclick="refersh_window();close_window();" class="cu" style="width:70px;"></div>
      </div>
</div>
</form>

</body>
</html>
<script type="text/javascript"> 
<!--
//只能放到最下面
var openClose = $("#RopenClose"), rh = $(".addContent .col-auto").height(),colRight = $(".addContent .col-right"),valClose = getcookie('openClose');
$(function(){
	if(valClose==1){
		colRight.hide();
		openClose.addClass("r-open");
		openClose.removeClass("r-close");
	}else{
		colRight.show();
	}
	openClose.height(rh);
	$.formValidator.initConfig({formid:"myform",autotip:true,onerror:function(msg,obj){window.top.art.dialog({id:'check_content_id',content:msg,lock:true,width:'200',height:'50'}, 	function(){$(obj).focus();
	boxid = $(obj).attr('id');
	if($('#'+boxid).attr('boxid')!=undefined) {
		check_content(boxid);
	}
	})}});
	<?php echo $formValidator;?>
	
/*
 * 加载禁用外边链接
 */

	$('#linkurl').attr('disabled',true);
	$('#islink').attr('checked',false);
	$('.edit_content').hide();
	jQuery(document).bind('keydown', 'Alt+x', function (){close_window();});
})
document.title='<?php echo L('add_content');?>';
self.moveTo(-4, -4);
function refersh_window() {
	setcookie('refersh_time', 1);
}
openClose.click(
	  function (){
		if(colRight.css("display")=="none"){
			setcookie('openClose',0,1);
			openClose.addClass("r-close");
			openClose.removeClass("r-open");
			colRight.show();
		}else{
			openClose.addClass("r-open");
			openClose.removeClass("r-close");
			colRight.hide();
			setcookie('openClose',1,1);
		}
	}
)
//-->
</script>