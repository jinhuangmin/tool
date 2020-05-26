<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta name="data-spm" content="a1z10"/>
<meta charset="utf-8">
<meta name="description" content="淘宝, 店铺, 旺铺"/>
<meta name="keywords" content="欢迎前来淘宝网旺铺，众多商品任你选购"/>
<meta name="microscope-data" content="pageId=118032775;prototypeId=1;siteCategory=2;siteInstanceId=121775989;shopId=104189144;userId=31737"/>
<link rel="dns-prefetch" href="http://a.tbcdn.cn">
<link rel="dns-prefetch" href="http://img01.taobaocdn.com">
<link rel="dns-prefetch" href="http://img02.taobaocdn.com">
<link rel="dns-prefetch" href="http://img03.taobaocdn.com">
<link rel="dns-prefetch" href="http://img04.taobaocdn.com">
<link rel="dns-prefetch" href="http://log.mmstat.com">
<link rel="dns-prefetch" href="http://item.taobao.com">
<title>自定义预览-淘宝网</title>
<link rel="shortcut icon" href="http://www.taobao.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="http://a.tbcdn.cn/??p/global/1.0/global-min.css?t=20130228.css"/>
<link rel="stylesheet"   href="http://a.tbcdn.cn/apps/taesite/platinum/stylesheet/??view/footer-min.css,view/copyright-min.css,view/layout-min.css,common/mods/header/header-min.css,/common/mods/ww-hover/default-min.css,common/modules-sys-default-min.css,common/modules-other-default-min.css,common/mods/new-signboard/default-min.css?t=20130524.css"/>
<link rel="stylesheet" href="http://a.tbcdn.cn/??/apps/taesite/platinum/stylesheet/common/templates/fengxun/black/skin-new.css?t=20121031.css"/>
<link rel="stylesheet" type="text/css" href="css/preview.css">
<script>
window.g_config = {appId: 2, assetsHost: "http://a.tbcdn.cn/", toolbar: false,  pageType:  "wangpu" };
window.shop_config = {};
</script>
<script src="http://a.tbcdn.cn/??s/kissy/1.3.0/seed-min.js,p/global/1.0/global-min.js?t=20130228.js"></script>
<script src="http://a.tbcdn.cn/apps/taesite/platinum/scripts/wangpu/init-min.js?t=20130524.js"></script>
<script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript">
function firm()
{
	window.close();
    /*if(confirm("您确定要关闭当前页面？"))
    {
        window.close();
     }*/
}
</script>
<style>
body {
  margin: 0 auto;
  overflow-x: visible;
}
#page #content #bd { width:100%; overflow:visible }
.diyedit{ width:100%; text-align:center; }
.diyedit a{  margin:0 auto;width:100px; height:32px; line-height:32px; text-align:center; display:inline-block; background-color:#c51b00; color:#ffffff; font-size:16px;-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px; margin-right:10px;}
.diyedit a:hover{ background:#d51e01;}

.top{ width:100%; background:#FFF; overflow:hidden;}
.top_c{ width:950px; height:60px; margin:0px auto; overflow:hidden;}
.top_cl{ float:left; height:60px; overflow:hidden;}
.top_cl a{ float:left; width:54px; height:30px; line-height:30px; text-align:center; color:#444444; margin:6px 10px 0px 0px; background:url(images/top_zc.gif) no-repeat top left; display:inline;}
.top_cl02{ float:left; height:42px; margin-top:10px; overflow:hidden;}
.top_cl02 a{ color:#444444; margin:6px 10px 0px 0px; line-height:22px; display:inline;}
.top_cr{ float:right; height:42px; overflow:hidden;}
.top_cr span{ float:left; width:373px; height:42px; background:url(images/top_l.gif) no-repeat top left;}
.top_cr span a{ float:left; height:42px; display:inline;}
.top_cr span .a1{ width:122px;}
.top_cr span .a2{ width:131px;}
.top_cr span .a3{ width:120px;}
.tshop-pbsm-shop-self-defined .skin-box-bd{ overflow:visible}
#site-nav{margin-bottom:10px;}

</style>
</head>
<body data-spm="1">
<div class="top">
	<div class="top_c">
    	<div class="top_cl">
        	
        	
        </div>
        <?php
		error_reporting(E_ALL ^ E_DEPRECATED);
		 @$id=$_GET['ID'];
		 if($id){
		 ?>
        <div class="bd_top" style="width:250px; margin:14px auto; overflow:hidden;"><div class="diyedit"><a href="index.php#s_<?=$id?>" title="立即编辑">立即编辑</a><a href="javascript:void(window.close());">关闭</a></div></div>
        <? } ?>
        <div class="top_cr">
        	<span style="display:none">
            	<a class="a1" href="#" title="xx" target="_blank"></a>
                <a class="a2" href="#" title="xx" target="_blank"></a>
            </span>
        </div>
    </div>
</div>
<div id="site-nav"></div>
<div id="page">
	<div id="header"></div>
	<div id="content" class="eshop head-expand tb-shop">
		
 <?    
require_once "../config.php";

     @$id=$_GET['ID'];
		 if($id!==''){
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from june WHERE ID='$id'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
 $arr=array(); 
 $arr['0'] =$row['Value'];
  }
  $code=$arr['0'] ;
  $code = json_decode($code,true); 
 print_r($code['snapCode']);
mysql_close($con); 
			 
		 }else{
        $data=$_POST;$shuchu= stripslashes($data['code']) ;
	//	print_r($data['code']);
		 echo''.$shuchu.'';}
		 ?>

	</div>
	<div id="footer" style="border-top:none;"></div>
</div>

<script type="text/javascript">
$(function() {

	moduleWidth=$("div.rel").width();
	var code = $("#content").html()

	//$(".codebox").css({"width":$("div.rel").width()+"px","margin":"0px auto"});
     $("div.rel").css({"margin-left":"50%","left":"-"+ moduleWidth/2 +"px"});
//$("#content").html("123");
});
</script>
</body>
</html>
