<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header','admin');?>


<div class="pad-10">
    <div class="content-menu ib-a blue line-x">
        <div id="dversion">当前版本<?=$version['version']?>;版本时间<?=$time2?>;</div>
        <div id="sversion" style="margin-bottom:5px"></div>
        <a id="upann" style=" cursor:pointer;display:none" class="add fb"><em>立即升级</em></a>
        <div id="upinfo" style="display:block"></div>
    </div>
</div>
<input type="hidden" value="" name="svn"  id="svn"/>
<input type="hidden" value="" name="svnt"  id="svnt"/>
<input type="hidden" value="<?=$version['version']?>" name="dvn" id="dvn"/>
<input type="hidden" value="<?=$version['version_time']?>" name="dvnt" id="dvnt"/>
<script language="javascript" type="text/javascript" src="/statics/js/cookie.js"></script>



<script type="text/javascript">
 
$(function(){
	getversion();
});

$("#upann").click(function(){
	if(($("#svn").val()>$("#dvn").val())){
  $.ajax({
	 type: "post",
	 url: "http://v.guop.cn/u/uplist",
	 data: {dosubmit:"dosubmit",type:'list'},
	 dataType: "json",
	 success: function(data){
		 if(data['success']=='1'){$("#upinfo").html('请等待');ids=chkdata(data);}
	 }
  });
	}
});
<!--
function getversion(){
	$.ajax({
	 type: "post",
	 url: "http://v.guop.cn/u/version",
	 data: {dosubmit:"dosubmit",type:'version'},
	 dataType: "json",
	 success: function(data){
		 if(data['success']=='1'){
			 $("#sversion").html(data['info']);
			 $("#svn").val(data['v']);
			 $("#svnt").val(data['t']);
			 $("#svn").val()>$("#dvn").val()?$("#upann").show():$("#upann").hide();
		 
		 }
	 }
	})
}

function getdata(a){
	$.ajax({
	 type: "post",
	 url: "http://v.guop.cn/u/version",
	 data: {dosubmit:"dosubmit",type:'updata',id:a},
	 dataType: "json",
	 success: function(data){
		 if(data['success']=='1'){
			$("#upinfo").append('.');
			wdata(data);
		 }
	 }
	})
}

function wdata(a){
	$.ajax({
	 type: "post",
	 url: "index.php?m=admin&c=complex&a=wdt&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {updata:a},
	 dataType: "json",
	 success: function(data){
		 if(data['success']=='1'){ $("#upinfo").append('-v-'); }else{$("#upinfo").append('-x-');}
	 }
	})
}
function upov(){
	$.ajax({
	 type: "post",
	 url: "index.php?m=admin&c=complex&a=upov&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {svn:$("#svn").val(),svnt:$("#svnt").val()},
	 dataType: "json",
	 success: function(data){
		 if(data[0]=='ok'){ $("#upinfo").html('已经是最新版,刷新页面'); }
	 }
	})
}

function chkdata(a){
	$.ajax({
	 type: "post",
	 url: "index.php?m=admin&c=complex&a=chk&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {data:a},
	 dataType: "json",
	 success: function(data){
		 if(data==""){
			 upov();
			 }else{
		 data.forEach(function(val,index){
			$("#upinfo").append('.');
			gdata=getdata(val);
				})}

	 }
	})
}


function view_comment(id, name) {
	window.top.art.dialog({id:'view_comment'}).close();
	window.top.art.dialog({yesText:'关闭',title:'查看评论：'+name,id:'view_comment',iframe:'index.php?m=comment&c=comment_admin&a=lists&show_center_id=1&commentid='+id,width:'800',height:'500'}, function(){window.top.art.dialog({id:'edit'}).close()});
}

//-->
</script>



</body>
</html>