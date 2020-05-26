<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header','admin');?>


<div class="pad-10">
<div class="content-menu ib-a blue line-x">
<a class="add fb" href="javascript:;" onclick=javascript:openwinx('?m=admin&c=zxd&a=add&menuid=&pc_hash=<?php echo $_SESSION['pc_hash'];?>','')><em><?php echo L('add_content');?></em></a>　
<span ID="tongbu" class="tongbu" style=" color:#0409E1; cursor:pointer; margin-left:20px; display:none">写入初始数据</span>
<span ID="delcj" class="delann" style=" color:#f00; cursor:pointer; margin-left:50px">删除初始数据</span><span ID="deldiy" class="deldiy" style=" color:#f00; cursor:pointer">删除自加数据</span><span ID="delall" class="delann" style=" color:#f00; cursor:pointer">删除所有数据</span><span style=" color:#999;"> | 一点即删,绝不犹豫</span>
</div>
<form name="myform" id="myform" action="" method="post" >
<div class="table-list" id="list">
    <table width="100%">
        <thead>
            <tr>
			 <th width="16"><input type="checkbox" value="" id="check_box" onclick="selectall('ids[]');"></th>
            <th width="37">排序</th>
            <th width="40">ID</th>
			<th>标题</th>
            <th width="40">点击量</th>
            <th width="170">发布人</th>
            <th width="210">更新时间</th>
			<th width="72">管理操作</th>
            </tr>
        </thead>
<tbody id="listul">

     </tbody>
     </table>
    <div class="btn"><label for="check_box">全选/取消</label>
		<input type="hidden" value="<?php echo $_SESSION['pc_hash'];?>" name="pc_hash">
    	<input type="button" class="button" value="排序" onclick="myform.action='?m=admin&c=zxd&a=listorder&dosubmit=1';myform.submit();"/>
		<input type="button" class="button" value="删除" onclick="myform.action='?m=admin&c=zxd&a=tbylDEL&dosubmit=1';return confirm_delete()"/>
			</div>
    <div id="pages"></div>
</div>
</form>
</div>
<script language="javascript" type="text/javascript" src="/statics/js/cookie.js"></script>



<script type="text/javascript">

$("#tongbu").click(function(){
  $.ajax({
	 type: "post",
	 url: "?m=admin&c=complex&a=yldatajd&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {dosubmit:"dosubmit",type:'all'},
	 dataType: "json",
	 success: function(data){
		 if(data=='ok'){window.location.reload();}
	 }
})
});


$("#delcj").click(function(){
  $.ajax({
	 type: "post",
	 url: "?m=admin&c=zxd&a=ddd&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {dosubmit:"dosubmit",type:'1'},
	 dataType: "json",
	 success: function(data){
		 if(data[0]==true){window.location.reload();}
	 }
})
});
$("#deldiy").click(function(){
  $.ajax({
	 type: "post",
	 url: "?m=admin&c=zxd&a=ddd&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {dosubmit:"dosubmit",type:'0'},
	 dataType: "json",
	 success: function(data){
		 if(data[0]==true){window.location.reload();}
	 }
})
});
$("#delall").click(function(){
  $.ajax({
	 type: "post",
	 url: "?m=admin&c=zxd&a=ddd&pc_hash=<?php echo $_SESSION['pc_hash'];?>",
	 data: {dosubmit:"dosubmit",type:'all'},
	 dataType: "json",
	 success: function(data){
		 if(data=='ok'){window.location.reload();}
	 }
})
});


var $_GET = (function(){
    var url = window.document.location.href.toString();
    if( url.indexOf('.html') >=0 ){
	 var u = url.split("-");
		return u[1];
		}else{
	var u = url.split("pc_hash=");
      return u[1];
	}
	
})();

function hasImage(imgUrl) {
    var flag = false;

    $.ajax({
    url: imgUrl,
    type:"GET",
    async:false,
    success:function(){flag = true;}
    });
    return flag;
}

var curPage = 1; //当前页码
var hash = $_GET;
var total,pageSize,totalPage;
//获取数据
function getData(page){ 
	$.ajax({
		type: 'POST',
		url: '/index.php?m=admin&c=zxd&a=list_jdyl',
		data: {'pageNum':page-1,'pc_hash':hash},
		dataType:'json',
		beforeSend:function(){
			$("#list #listul").append("<li id='loading'>loading...</li>");
		},
		success:function(json){
			$("#list #listul").empty();
			total = json.total; //总记录数
			pageSize = json.pageSize; //每页显示条数
			curPage = page; //当前页
			totalPage = json.totalPage; //总页数
			var li = "";
			var list = json.list;
			$.each(list,function(index,array){ //遍历json数据列
				 if(hasImage(array['Pic'])){
				   var picdiv='<img src="/statics/images/icon/small_img.gif" title="缩略图存在">';
				 }else{
				   var picdiv='<a style="color:#f00">缩略图不存在!</a>';
				   }
				 vimg=array['version']=='3'?' <img src="/statics/images/icon/v30.png" title="3.0版适用">':'';
				 vcj=array['cj']=='1'?' <img src="/statics/images/icon/m_1.png" title="来源:云图设计">':'';
				edtjs="javascript:openwinx('index.php?m=admin&c=zxd&a=edit&id="+array['ID']+"&pc_hash=','')";
				li += "<tr><td align='center'><input class='inputcheckbox ' name='ids[]' value='"+array['ID']+"' type='checkbox'></td><td align='center'><input name='listorders["+array['ID']+"]' type='text' size='3' value='"+array['listorder']+"' class='input-text-c'></td><td align='center' >"+array['ID']+"</td><td><a href='/zxd/previewP"+array['ID']+"' target='_blank'><span>"+array['Title']+"</span></a> "+picdiv+" "+vcj+vimg+"</td><td align='center' title='总计收藏："+array['Cang']+"&#10;总计点击："+array['Hot']+"&#10;'>"+array['Hot']+"</td><td align='center'>"+array['UserName']+"</td><td align='center'>"+array['dtime']+"</td><td align='center'><a href='javascript:;' onclick="+edtjs+">修改</a> | <a title='预留占位,以后开发'>评论</a></td></tr>";
				
		
			});
			$("#list #listul").append(li);
		},
		complete:function(){ //生成分页条
			getPageBar();
		},
		error:function(){
			$("#list #listul").html("数据加载失败")
		}
	});
}

//获取分页条
function getPageBar(){
	//页码大于最大页数
	if(curPage>totalPage) curPage=totalPage;
	//页码小于1
	if(curPage<1) curPage=1;
	pageStr = "<a>共"+total+"条</a><a>"+curPage+"/"+totalPage+"</a>";
	
	//如果是第一页
	if(curPage==1){
		pageStr += "<a class='chud a1'>首页</a><a class='chud a1'>上一页</a>";
	}else{
		pageStr += "<a href='javascript:void(0)' rel='1' class='chud'>首页</a><a href='javascript:void(0)' rel='"+(curPage-1)+"' class='chud a1'>上一页</a>";
	}
	
	//如果是最后页
	if(curPage>=totalPage){
		pageStr += "<a class='chud'>下一页</a><a class='chud a1'>尾页</a>";
	}else{
		pageStr += "<a href='javascript:void(0)' rel='"+(parseInt(curPage)+1)+"' class='chud a1'>下一页</a><a href='javascript:void(0)' rel='"+totalPage+"' class='chud a1'>尾页</a>";
	}
		
	$("#pages").html(pageStr);
}

$(function(){
	getData(1);
	$(document).on('click','a.chud',function(){
		var rel = $(this).attr("rel");
		if(rel){
			getData(rel);
		}
	});
});
</script>




<script type="text/javascript"> 
<!--
function confirm_delete(){
	if(confirm('确认删除吗？')) $('#myform').submit();
}
function view_comment(id, name) {
	window.top.art.dialog({id:'view_comment'}).close();
	window.top.art.dialog({yesText:'关闭',title:'查看评论：'+name,id:'view_comment',iframe:'index.php?m=comment&c=comment_admin&a=lists&show_center_id=1&commentid='+id,width:'800',height:'500'}, function(){window.top.art.dialog({id:'edit'}).close()});
}
function reject_check(type) {
	if(type==1) {
		var str = 0;
		$("input[name='ids[]']").each(function() {
			if($(this).attr('checked')=='checked') {
				str = 1;
			}
		});
		if(str==0) {
			alert('您没有勾选信息');
			return false;
		}
		document.getElementById('myform').action='?m=content&c=content&a=pass&catid=9&steps=0&reject=1';
		document.getElementById('myform').submit();
	} else {
		$('#reject_content').css('display','');
		return false;
	}	
}
setcookie('refersh_time', 0);
function refersh_window() {
	var refersh_time = getcookie('refersh_time');
	if(refersh_time==1) {
		window.location.reload();
	}
}
setInterval("refersh_window()", 3000);
//-->
</script>
</body>
</html>