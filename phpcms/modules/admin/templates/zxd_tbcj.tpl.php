<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header');?>


<div class="mwin" id="page">
    <div class="hd radius5tr clearfix">
        <h3>当前位置:样例库管理</h3>
    </div>
    <div class="bd">
<div class="commonform">
    
        <fieldset class="radius5">
            <legend>添加新样例(后台永远不支持ie)</legend>
            <div class="item">
                <label>填入任意字符</label>
                <input class="txt" type="text" id="link" name="link" value="">
            </div>
            
            <div class="item">
                <label>&nbsp;</label>
                <button class="btn" id="submituser">保存</button>
                <span style="color:#f00; padding-left:50px;display:none" id="usaddjg"></span>
                <span style="color:#5CA312; padding-left:50px; display:none" id="usaddscc"></span>
            </div>
              <div style="padding:50px;" id="fxaddinfo"></div> 
        </fieldset>

</div>
    </div>
</div>


<script language="JavaScript">

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

$(document).ready(function(){
  $("#submituser").click(function(){
	  $('#fxaddinfo').html("读取中,请稍后");
    getinfo();
  });
});

function getinfo() {
    var b={},copyjson;
	b.url=$('#link').val();
	$.ajax({
		   type: "POST",
		   url: '/index.php?m=admin&c=zxd&a=list_ajaxjson',
		   data: {'url':$('#link').val(),'pc_hash':$_GET},
		   success: function(msg){
		//	 var dataObj=jQuery.parseJSON( msg );//转换为json对象
			 $('#fxaddinfo').html("进行中,共"+msg.num+"个");
			 json=msg.data;
			 m=msg.num;
			 n=0;
            fxcun(json,n,m);
		}	
		});}

function fxcun(json,n,m) {
	if(n<m){
	v=n+1;
	json[n].key=v;
	$.ajax({
		   type: "POST",
		   url: '/index.php?m=admin&c=zxd&a=list_cjaddx',
		   data:  {'data':json[n],'pc_hash':$_GET},
		   success: function(msg2){
			  $('#fxaddinfo').append(msg2);
			  n++;
			  fxcun(json,n,m);

		}	
		});
	}
}


</script>


</body>
</html>