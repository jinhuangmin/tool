<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header');?>
<style>
#main { padding:20px}

#list li{ height:30px; line-height:30px; border-bottom:1px solid #fff; width:700px; float:left; background:#b9d8f8; }
#list .xi { float:left;text-align:center; border-right:1px solid #fff; overflow:hidden; height:30px}
#list .id{ width:30px; height:30px; line-height:30px; background:#fbe6d1}
#list .id input{ position:relative; top:8px;}
#list .idx{ width:50px}
#list .name{ width:160px; text-align:left; padding:0 15px}
#list .Pic{ width:80px; text-align:left; padding:0 15px}
#list .Title{width:180px; text-align:left; padding:0 15px}
#list .time{ width:104px; text-align:center;overflow:hidden;word-break:keep-all;white-space:nowrap; }
#main #pages{ text-align:left}
</style>

<div id="main">
  	
   	<div id="list">
    	<ul class="list clear"></ul>
    </div>
   	<div id="pages"></div>
</div>

</body>

<script type="text/javascript">

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
			$("#list ul").append("<li id='loading'>loading...</li>");
		},
		success:function(json){
			$("#list ul").empty();
			total = json.total; //总记录数
			pageSize = json.pageSize; //每页显示条数
			curPage = page; //当前页
			totalPage = json.totalPage; //总页数
			var li = "";
			var list = json.list;
			$.each(list,function(index,array){ //遍历json数据列
				 if((array['Pic'])==1){
				   var picdiv='<a href="/zxn/previewI.php?id='+array['ID']+'" target="_blank" style="max-width:160px;overflow: hidden; display:block; margin:0 auto">点击预览</a>';
				 }else{
				   var picdiv='<a href="/zxn/previewI.php?id='+array['ID']+'" target="_blank" style="color:#f00">缩略图不存在!</a>';
				   }
				 
				li += "<li class='clear'><div class='id xi'><input type='checkbox' name='chkItem' value='"+array['ID']+"'></div><div class='idx xi'>"+array['ID']+"</div><div class='name xi wi'>"+array['UserName']+"</div><div class='Pic xi'>"+picdiv+"</div><div class='Title xi wi'>"+array['Title']+"</div><div class='time xi wi'>"+array['CreaTime']+"</div></li>";
			});
			$("#list ul").append(li);
		},
		complete:function(){ //生成分页条
			getPageBar();
		},
		error:function(){
			$("#list ul").html("数据加载失败")
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

</html>