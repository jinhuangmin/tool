<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header');?>
<style>
.userfxlist{ margin:30px; border:1px solid #ddd}
.userfxlist .top{ color:#fff}
.userfxlist .item{  line-height:30px; border-bottom:1px solid #ddd; width:100%; text-align:center; min-width:900px}
.userfxlist .item .left1{ float:left;height:30px; border-left:1px solid #ddd; width:200px; border-left:none}
.userfxlist .item .right1{float:left; min-width:500px}
.userfxlist .item .id{ width:100px; float:left}
.userfxlist .top{ height:30px}
.userfxlist .item .xi{ float:left; height:30px; border-left:1px solid #ddd;}
.userfxlist .item .name{ width:200px; border:none}
.userfxlist .xiax{ height:35px}
.userfxlist .ixi{ padding:6px 0 0 20px}
.userfxlist .val{ padding:0 20px}
</style>
 <div class="g6" style="overflow:hidden; margin-left:50px; margin-top:0px;">本功能需浏览器支持HTML5</div>
<div class="grid userfxlist radius5" style="overflow:hidden">
 
  <?


echo'<div class="item top" style="background-color: #A5948A;">
	   <div class="name xi wi" id="ces5">用户</div>
	   <div class="val xi">列表</div>
	 </div>';

  foreach($data as $k=>$user){

echo'<div class="item clear">
       <div class="left1 ">'.$k.'</div>
	  <div class="right1 ">';
	  foreach($user as $id){echo'<div class="id xi"><input type="checkbox" name="chkItem" value="'.$id.'">'.$id.'(<a href="/index.php?m=admin&c=zxn&a=tbfxsh&id='.$id.'" target="_blank">审核</a>)</div>';}
	  
	  echo'</div>
	   

	 </div>';
	  }//<div class="id xi"><input type="checkbox" name="chkItem" value="'.$item['ID'].'"></div>
	echo'<div class="xiax" style="">
       <div class="ixi">
	    <input id="btnCheckAll" type="button" class="udann" value="全选" />
        <input id="btnCheckNone" type="button" class="udann" value="全不选" />
        <input id="btnCheckReverse" type="button" class="udann" value="反选" />
        <input id="btnSubmit" type="button" class="udann" value="删除选中项" />
	 </div>

	 </div>';
	  

  ?>
  

 
    <script type="text/javascript">
        $(function () {
			
            // 全选
            $("#btnCheckAll").bind("click", function () {
                $("[name = chkItem]:checkbox").attr("checked", true);
            });
 
            // 全不选
            $("#btnCheckNone").bind("click", function () {
                $("[name = chkItem]:checkbox").attr("checked", false);
            });
 
            // 反选
            $("#btnCheckReverse").bind("click", function () {
                $("[name = chkItem]:checkbox").each(function () {
                    $(this).attr("checked", !$(this).attr("checked"));
                });
            });
 
            // 全不选
            $("#btnSubmit").bind("click", function () {
                var result = new Array();var text="";  
                $("[name = chkItem]:checkbox").each(function () {
                    if ($(this).is(":checked")) {
                        result.push($(this).attr("value"));
						 text += ","+$(this).attr("value");
                    }
					
                });
 
    data=result.join(",");
	var k={},copyjson;
	k.ids=data;
	$.ajax({
		   type: "POST",
		   url: 'fxdeluser.php',
		   data: k,
		   success: function(msg){
			   if(msg==1){
			//window.location.reload();
				   }
		}	
		});
		
            });
			
		 
			
        });
    </script>
</div>

</body>
</html>