<?

error_reporting(E_ALL ^ E_DEPRECATED);
$content=$_POST; //接收POST
require_once "../config.php";

$user=$content['userName'];
if($user){
?>
<div id="tabs-1">
	<ul class="setform">
		<li>
			<label for="saveText">保存名称：</label>
			<input id="saveText" class="setinput" type="text" title="请输入需要保存的名称，单击下方保存列表选择使用已保存的文档名" name="saveText" value="未标题自定义代码" />
		</li>
	</ul>
</div>
<div class="save-list-title-forinput">历史保存列表</div>
<?
if('list'=='list'){  //列表
$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from june WHERE UserName='$user'";
$result = mysql_query($sql);
  $i=0;
  $arrlist = array();
while($row = mysql_fetch_array($result))
  {
 // $arr[$i]='{"ID":"'.$row['ID'].'","saveName":"'.$row['Title'].'","saveTime":"'.$row['SaveTime'].'","userName":"'.$row['UserName'].'"}';
 // $i++;
 $items = array();
 $items['ID']=$row['ID'];
 $items['saveName']=$row['Title'];
 $items['saveTime']=$row['SaveTime'];
 $arrlist[]=$items;
  }

mysql_close($con);
 }
?>
<div class="save-list-forinput" id="saveListForInput"><ul>
<? $s=0; foreach($arrlist as $i=>$items){
	           if($items['saveName']!=="系统自动保存"){
	 $dshu=fmod($s,2)==0?'0':'1';$ks=$dshu==0?'ogg':'';$s=$s+1;
	
	echo'<li class="'.$ks.'" title="" data-save="'.$items['ID'].'" data-savename="'.$items['saveName'].'" data-savetime="'.$items['saveTime'].'" style="display: list-item;"><span class="t-save-text">'.$items['saveName'].'</span><span class="t-save-time">'.$items['saveTime'].'</span></li>';
	
	}
} ?>


</ul></div>
<? } ?>
<script type="text/javascript">
$(function() {
//加载表单样式
	$(".setform, .save-list-forinput").tooltip({
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
	$("#saveListForInput").on("click", "li", function() {
		var _li = $(this);
		$("#saveListForInput").find("ul").children("li.selected").removeClass("selected");
		_li.addClass("selected");
		$("#saveText").attr("data-choosesavename", _li.attr("data-savename")).val(_li.attr("data-savename")).attr("data-choosesaveid", _li.attr("data-save"));
	});
	$("#saveListForInput ul").slimScroll({
		height:"320px",
		color: "#999"
	});
});
</script>