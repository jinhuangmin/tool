<?
$post=$_POST; 
 $type=!empty($post['styletype'])?$post['styletype']:'jib';
 
 require_once "../config.php";

if($type){


$con=mysql_connect($config['sql_host'], $config['sql_user'],$config['sql_pass']);
if (!$con)  {  die('Could not connect: ' . mysql_error());  }
mysql_query("SET NAMES UTF8");
mysql_query("set character_set_client=utf8"); 
mysql_query("set character_set_results=utf8");
mysql_select_db($config['sql_data'], $con);
$sql = "SELECT * from guopcn_style WHERE styletype='$type'";
$result = mysql_query($sql);
  $i=0;
  $arrlist = array();
while($row = mysql_fetch_array($result))
  {
 $arrlist[]=$row;
  }
mysql_close($con);


?>
<form id="tForm" form-data="defaultStyle" method="post" >
<div id="tabs-1">
	<ul class="setform">
		<li>
			<label for="itemStyle">排版：</label>
			<select id="itemStyle" name="itemStyle">
							
            <?
     foreach($arrlist as $item){ echo'<option value="'.$item['ID'].'">'.$item['styletext'].'</option>'; }
			?>           
          </select>
		</li>
 <?
  foreach($arrlist as $item){ echo'<textarea id="'.$item['ID'].'_code" style="display:none;">'.$item['stylecode'].'</textarea><textarea id="'.$item['ID'].'_code1" style="display:none;">'.$item['stylecode1'].'</textarea>'; }
	?>  
<ul id="carouselForItemStyle" class="elastislide-list">
   
  <?
  foreach($arrlist as $item){ 
  
  echo'<li data-selectedID="'.$item['ID'].'" data-preview="'.$item['styleurl'].'" data-username="" data-text="'.$item['styletext'].'" style="overflow:visible">
				<a class="june-preview" href="javascript:void(0);">
					<img src="'.$item['styleurl'].'" title="'.$item['styletext'].'" />
				</a>
				</li>'; }
	?>   

				</ul>
		<div class="image-preview">
			<img id="previewForItemStyle" style="max-height:320px;max-width:480px;" src="<?=$arrlist[0]['styleurl']?>"/>
		</div>
			</ul>
</div>
</form>
<div id="styledialogedit" style="display:none;">
	<ul class="setform">
		<input type="hidden" id="styleID" class="setinput" name="styleID" value="" />
		<li>
			<label for="setitemstylename">预设样式缩略图：</label>
			<input type="text" id="styleUrl" class="setinput" name="styleUrl" value="" />
		</li>
		<li>
			<label for="setitemstyletext">预设样式名称：</label>
			<input type="text" id="styleText" class="setinput" name="styleText" value="" />
		</li>
	</ul>
</div>
<? } ?>
<?
if($type=='jbob'){ 
	?>
	<script type="text/javascript">
$(function() {
//加载表单样式
	//$("#tForm select").selectmenu();
	
	var current = 0,
	$preview = $( '#previewForItemStyle' ),
	$carouselEl = $( '#carouselForItemStyle' ),
	$carouselItems = $carouselEl.children(),
	carousel = $carouselEl.elastislide( {
		current : current,
		minItems : 3,
		onReady : function() {
			changeImage( $carouselItems.eq( current ), current );
		}
	} );
	
	$carouselEl.off("click").on("click.elasti", "li", function() {
		var index = $(this).index();
		changeImage( $(this), index );
	});
	function changeImage( el, pos ) {
		$("#itemStyle").children(":eq("+pos+")").prop("selected", true);
		$( "#itemStyle" ).selectmenu( "refresh" )
		$preview.attr( 'src', el.data( 'preview' ) );
		$carouselItems.removeClass( 'current-img' );
		el.addClass( 'current-img' );
		carousel.setCurrent( pos );
	}
	$("#itemStyle").selectmenu({
		change: function( event, ui ) {
			var v = $(this).val();
			$("#carouselForItemStyle").children("li[data-selectedID='"+v+"']").trigger("click");
		}
	});
});
</script>
	<?
	}
else if($type=='jfsb'){
	?>
	<script type="text/javascript">
$(function() {
//加载表单样式
	//$("#tForm select").selectmenu();
	
	var current = 0,
	$preview = $( '#previewForItemStyle' ),
	$carouselEl = $( '#carouselForItemStyle' ),
	$carouselItems = $carouselEl.children(),
	carousel = $carouselEl.elastislide( {
		current : current,
		minItems : 3,
		onReady : function() {
			changeImage( $carouselItems.eq( current ), current );
		}
	} );
	
	$carouselEl.off("click").on("click.elasti", "li", function() {
		var index = $(this).index();
		changeImage( $(this), index );
	});
	function changeImage( el, pos ) {
		$("#itemStyle").children(":eq("+pos+")").prop("selected", true);
		$( "#itemStyle" ).selectmenu( "refresh" )
		$preview.attr( 'src', el.data( 'preview' ) );
		$carouselItems.removeClass( 'current-img' );
		el.addClass( 'current-img' );
		carousel.setCurrent( pos );
	}
	$("#itemStyle").selectmenu({
		change: function( event, ui ) {
			var v = $(this).val();
			$("#carouselForItemStyle").children("li[data-selectedID='"+v+"']").trigger("click");
		}
	});
});
</script>
	
	<?
	}
else if($type=='jsfb'){//分类
	?>
	<script type="text/javascript">
$(function() {
//加载表单样式
	//$("#tForm select").selectmenu();
	$("#styledialogedit").dialog({
		autoOpen: false,
		resizable: true,
		modal: true,
		width: 520,
		title: "修改预设样式",
		buttons:{
			"确定": function(event) {
				var styleID = $("#styleID").val(),
					styleUrl = $("#styleUrl").val(),
					styleText = $("#styleText").val();
				if(styleText == "" || !checkUrl(styleUrl)) {
					D.tMessage("请输入正确的预设样式名和缩略图！");
					return;
				}
				$.ajax({
					url: "styleexamine.php",
					type: "POST",
					data: {
						ID: styleID,
						styleurl: styleUrl,
						styletext: styleText,
						type: "edit1"
					},
					dataType: "json",
					success: function(m) {
						if(m[0]) {
							$("#itemStyle").children("option[value='"+styleID+"']").text(styleText);
							$("#itemStyle").selectmenu("refresh");
							$carouselEl.children("li[data-selectedID='"+styleID+"']").attr("data-text", styleText).attr("data-preview", styleUrl);
							$carouselEl.children("li[data-selectedID='"+styleID+"']").children("a").children("img").attr("src", styleUrl).attr("title", styleText);
							$preview.attr("src", styleUrl);
							D.tMessage("修改成功！");
						} else {
							if(m[1]) {
								D.tMessage(m[1]);
							} else {
								D.tMessage("修改失败！请稍后重试！");
							}
						}
					}
				});
				$(this).dialog( "close" );$(".ui-tooltip").hide();
			},
			"取消": function() {
				$(this).dialog( "close" );$(".ui-tooltip").hide();
			}
		}
	});
	
	var current = 0,
	$preview = $( '#previewForItemStyle' ),
	$previewAuthor = $( '#previewForItemStyleAuthor' ),
	$previewBox = $( '#previewForItemStyleExamBox' ),
	$carouselEl = $( '#carouselForItemStyle' ),
	
	$carouselItems = $carouselEl.children(),
	carousel = $carouselEl.elastislide( {
		current : current,
		minItems : 3,
		onReady : function() {
			changeImage( $carouselItems.eq( current ), current );
		}
	} );
	var D = require("scripts/D");
	
	$carouselEl.off("click").on("click.elasti", "li", function() {
		var index = $(this).index();
		changeImage( $(this), index );
	}).on("click.deletestyle", "span.style-delete-btn", function() {
		var _li = $(this).parent(), ID = _li.attr("data-selectedID");
		D.tConfirm("您正在进行删除预设样式的操作，是否确认删除该预设样式？", function() {
			$.ajax({
				url: "styleexamine.php",
				type: "POST",
				data: {
					ID: ID,
					type: "delete"
				},
				dataType: "json",
				success: function(m) {
					if(m[0]) {
						$("#itemStyle").children("option[value='"+ID+"']").remove();
						$("#itemStyle").selectmenu("refresh");
						$carouselEl.children("li[data-selectedID='"+ID+"']").remove();
						$preview.attr("src", "");
						$("#carouselForItemStyle").children("li:eq(0)").trigger("click");
					}
				}
			});
		});
	}).on("click.editstyle", "span.style-edit-btn", function() {
		var _li = $(this).parent(), url = _li.attr("data-preview"), text = _li.attr("data-text"), ID = _li.attr("data-selectedID") || "";
		if(ID != "") {
			$("#styleUrl").val(url);
			$("#styleText").val(text);
			$("#styleID").val(ID);
			$("#styledialogedit").dialog("open");
		} else {
			D.tMessage("该预设样式处于异常状态，可能已经不存在！请刷新重试或联系管理员！");
		}
	});
	function changeImage( el, pos ) {
		$("#itemStyle").children(":eq("+pos+")").prop("selected", true);
		$( "#itemStyle" ).selectmenu( "refresh" )
		$preview.attr( 'src', el.data( 'preview' ) );
		if($previewAuthor.length > 0) {
			$previewAuthor.html("作者："+ el.attr( 'data-username' ))
		}
		if($previewBox.length > 0) {
			$previewBox.attr('data-styleID', el.attr( 'data-selectedID' ));
		}
		$carouselItems.removeClass( 'current-img' );
		el.addClass( 'current-img' );
		carousel.setCurrent( pos );
	}
	$("#itemStyle").selectmenu({
		change: function( event, ui ) {
			var v = $(this).val();
			$("#carouselForItemStyle").children("li[data-selectedID='"+v+"']").trigger("click");
		}
	});
	$("#previewForItemStyleExam").on("click", function(event) {
		var _t = $(this), ID = _t.parent().attr("data-styleID");
		$.ajax({
			url: "styleexamine.php",
			type: "POST",
			data: {
				ID: ID,
				type: "examine"
			},
			dataType: "json",
			success: function(m) {
				if(m[0]) {
					$("#itemStyle").children("option[value='"+ID+"']").remove();
					$("#itemStyle").selectmenu("refresh");
					$carouselEl.children("li[data-selectedID='"+ID+"']").remove();
					$preview.attr("src", "");
					$("#carouselForItemStyle").children("li:eq(0)").trigger("click");
				}
			}
		});
	});
	
	$("#previewForItemStyleNoExam").on("click", function(event) {
		var _t = $(this), ID = _t.parent().attr("data-styleID");
		$.ajax({
			url: "styleexamine.php",
			type: "POST",
			data: {
				ID: ID,
				type: "noexamine"
			},
			dataType: "json",
			success: function(m) {
				if(m[0]) {
					$("#itemStyle").children("option[value='"+ID+"']").remove();
					$("#itemStyle").selectmenu("refresh");
					$carouselEl.children("li[data-selectedID='"+ID+"']").remove();
					$preview.attr("src", "");
					$("#carouselForItemStyle").children("li:eq(0)").trigger("click");
				}
			}
		});
	});
	
	$("#previewForItemStyleEdit").on("click", function(event) {
		var _t = $(this), ID = _t.parent().attr("data-styleID"),
		src = $("#previewForItemStyleSrcInput").val();
		$.ajax({
			url: "styleexamine.php",
			type: "POST",
			data: {
				ID: ID,
				styleurl: src,
				type: "edit"
			},
			dataType: "json",
			success: function(m) {
				if(m[0]) {
					$carouselEl.children("li[data-selectedID='"+ID+"']").children("a").children("img").attr("src", src);
					$preview.attr("src", src);
				}
			}
		});
	});
});
</script>
	
	<?
	}
	
else{  //宝贝列表
	
?>

<script type="text/javascript">
$(function() {
//加载表单样式
	//$("#tForm select").selectmenu();
	$("#styledialogedit").dialog({
		autoOpen: false,
		resizable: true,
		modal: true,
		width: 520,
		title: "修改预设样式",
		buttons:{
			"确定": function(event) {
				var styleID = $("#styleID").val(),
					styleUrl = $("#styleUrl").val(),
					styleText = $("#styleText").val();
				if(styleText == "" || !checkUrl(styleUrl)) {
					D.tMessage("请输入正确的预设样式名和缩略图！");
					return;
				}
				$.ajax({
					url: "styleexamine.php",
					type: "POST",
					data: {
						ID: styleID,
						styleurl: styleUrl,
						styletext: styleText,
						type: "edit1"
					},
					dataType: "json",
					success: function(m) {
						if(m[0]) {
							$("#itemStyle").children("option[value='"+styleID+"']").text(styleText);
							$("#itemStyle").selectmenu("refresh");
							$carouselEl.children("li[data-selectedID='"+styleID+"']").attr("data-text", styleText).attr("data-preview", styleUrl);
							$carouselEl.children("li[data-selectedID='"+styleID+"']").children("a").children("img").attr("src", styleUrl).attr("title", styleText);
							$preview.attr("src", styleUrl);
							D.tMessage("修改成功！");
						} else {
							if(m[1]) {
								D.tMessage(m[1]);
							} else {
								D.tMessage("修改失败！请稍后重试！");
							}
						}
					}
				});
				$(this).dialog( "close" );$(".ui-tooltip").hide();
			},
			"取消": function() {
				$(this).dialog( "close" );$(".ui-tooltip").hide();
			}
		}
	});
	
	var current = 0,
	$preview = $( '#previewForItemStyle' ),
	$previewAuthor = $( '#previewForItemStyleAuthor' ),
	$previewBox = $( '#previewForItemStyleExamBox' ),
	$carouselEl = $( '#carouselForItemStyle' ),
	
	$carouselItems = $carouselEl.children(),
	carousel = $carouselEl.elastislide( {
		current : current,
		minItems : 3,
		onReady : function() {
			changeImage( $carouselItems.eq( current ), current );
		}
	} );
	var D = require("scripts/D");
	
	$carouselEl.off("click").on("click.elasti", "li", function() {
		var index = $(this).index();
		changeImage( $(this), index );
	}).on("click.deletestyle", "span.style-delete-btn", function() {
		var _li = $(this).parent(), ID = _li.attr("data-selectedID");
		D.tConfirm("您正在进行删除预设样式的操作，是否确认删除该预设样式？", function() {
			$.ajax({
				url: "styleexamine.php",
				type: "POST",
				data: {
					ID: ID,
					type: "delete"
				},
				dataType: "json",
				success: function(m) {
					if(m[0]) {
						$("#itemStyle").children("option[value='"+ID+"']").remove();
						$("#itemStyle").selectmenu("refresh");
						$carouselEl.children("li[data-selectedID='"+ID+"']").remove();
						$preview.attr("src", "");
						$("#carouselForItemStyle").children("li:eq(0)").trigger("click");
					}
				}
			});
		});
	}).on("click.editstyle", "span.style-edit-btn", function() {
		var _li = $(this).parent(), url = _li.attr("data-preview"), text = _li.attr("data-text"), ID = _li.attr("data-selectedID") || "";
		if(ID != "") {
			$("#styleUrl").val(url);
			$("#styleText").val(text);
			$("#styleID").val(ID);
			$("#styledialogedit").dialog("open");
		} else {
			D.tMessage("该预设样式处于异常状态，可能已经不存在！请刷新重试或联系管理员！");
		}
	});
	function changeImage( el, pos ) {
		$("#itemStyle").children(":eq("+pos+")").prop("selected", true);
		$( "#itemStyle" ).selectmenu( "refresh" )
		$preview.attr( 'src', el.data( 'preview' ) );
		if($previewAuthor.length > 0) {
			$previewAuthor.html("作者："+ el.attr( 'data-username' ))
		}
		if($previewBox.length > 0) {
			$previewBox.attr('data-styleID', el.attr( 'data-selectedID' ));
		}
		$carouselItems.removeClass( 'current-img' );
		el.addClass( 'current-img' );
		carousel.setCurrent( pos );
	}
	$("#itemStyle").selectmenu({
		change: function( event, ui ) {
			var v = $(this).val();
			$("#carouselForItemStyle").children("li[data-selectedID='"+v+"']").trigger("click");
		}
	});
	$("#previewForItemStyleExam").on("click", function(event) {
		var _t = $(this), ID = _t.parent().attr("data-styleID");
		$.ajax({
			url: "styleexamine.php",
			type: "POST",
			data: {
				ID: ID,
				type: "examine"
			},
			dataType: "json",
			success: function(m) {
				if(m[0]) {
					$("#itemStyle").children("option[value='"+ID+"']").remove();
					$("#itemStyle").selectmenu("refresh");
					$carouselEl.children("li[data-selectedID='"+ID+"']").remove();
					$preview.attr("src", "");
					$("#carouselForItemStyle").children("li:eq(0)").trigger("click");
				}
			}
		});
	});
	
	$("#previewForItemStyleNoExam").on("click", function(event) {
		var _t = $(this), ID = _t.parent().attr("data-styleID");
		$.ajax({
			url: "styleexamine.php",
			type: "POST",
			data: {
				ID: ID,
				type: "noexamine"
			},
			dataType: "json",
			success: function(m) {
				if(m[0]) {
					$("#itemStyle").children("option[value='"+ID+"']").remove();
					$("#itemStyle").selectmenu("refresh");
					$carouselEl.children("li[data-selectedID='"+ID+"']").remove();
					$preview.attr("src", "");
					$("#carouselForItemStyle").children("li:eq(0)").trigger("click");
				}
			}
		});
	});
	
	$("#previewForItemStyleEdit").on("click", function(event) {
		var _t = $(this), ID = _t.parent().attr("data-styleID"),
		src = $("#previewForItemStyleSrcInput").val();
		$.ajax({
			url: "styleexamine.php",
			type: "POST",
			data: {
				ID: ID,
				styleurl: src,
				type: "edit"
			},
			dataType: "json",
			success: function(m) {
				if(m[0]) {
					$carouselEl.children("li[data-selectedID='"+ID+"']").children("a").children("img").attr("src", src);
					$preview.attr("src", src);
				}
			}
		});
	});
});
</script>



<?
	
	
	}
	
	
?>