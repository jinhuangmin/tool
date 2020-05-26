Date.prototype.Format = function(fmt, addMonth, addDay) { 

	addMonth = addMonth || 0;

	addDay = addDay || 0;

	var thisMonth = (this.getMonth()+1+addMonth) % 12, addYear = 0;

	if( (this.getMonth()+1+addMonth) / 12 > 1) {

		addYear = 1;

	}

	if(thisMonth == 0) {

		thisMonth = 12;

	}

	if(addDay != 0) {

		return new Date(this.getTime()+ addDay*86400000).Format(fmt);

	}

	var o = { 

		"M+" : thisMonth,                 //月份 

		"d+" : this.getDate(),                    //日 

		"h+" : this.getHours(),                   //小时 

		"m+" : this.getMinutes(),                 //分 

		"s+" : this.getSeconds(),                 //秒 

		"q+" : Math.floor((this.getMonth()+3)/3), //季度 

		"S"  : this.getMilliseconds()             //毫秒 

	}; 

	if(/(y+)/.test(fmt)) 

		fmt=fmt.replace(RegExp.$1, ((this.getFullYear()+addYear)+"").substr(4 - RegExp.$1.length)); 

	for(var k in o) 

		if(new RegExp("("+ k +")").test(fmt)) 

			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 

	return fmt; 

}

	

$(function() {

	var toolType = $("#moretools").attr("data-tools");

	var toolShow = ["", "", "", "", "", "", "", ""];

	switch(toolType) {

		case "taobao": 

			toolShow[0] = ' style="display:none;"'

			break;

		case "nav": 

			toolShow[1] = ' style="display:none;"'

			break;

		case "color": 

			toolShow[2] = ' style="display:none;"'

			break;

		case "jdtool": 

			toolShow[3] = ' style="display:none;"'

			break;

		case "bgfixed": 

			toolShow[4] = ' style="display:none;"'

			break;

		case "side": 

			toolShow[5] = ' style="display:none;"'

			break;

		case "mobileUrl": 

			toolShow[6] = ' style="display:none;"'

			break;

		default:

			//toolShow[0] = ' style="display:none;"'

	}

	var dqml=window.location.href.split('index');

	var morepannel = '<div id="morepannel" class="ui-dialog" style="display:none;position:absolute;z-index:1102;width:180px;background:#fff;left:11px;;top:60px;border:1px #e0e0e0 solid;">'+

		'<ul>'+
			'<li><a class="june-preview" target="_blank" href="http://cnzoom.com/tool/nav">导航样式修改工具</a></li>'+
			'<li><a class="june-preview" target="_blank" href="http://cnzoom.com/zxn/color">色码值获取工具</a></li>'+
			'<li><a class="june-preview" target="_blank" href="http://cnzoom.com/tool/bgfixed.html">固定背景生成工具</a></li>'+
			'<li><a class="june-preview" target="_blank" href="http://cnzoom.com/zxn/gm">手机端链接转换工具</a></li>'+
			'<li><a class="june-preview" target="_blank" href="http://cnzoom.com/shouji">手机端装修工具</a></li>'+			
		'</ul>'+

	'</div>';

	var oldhtml = "";

	

 	$("#moretools").html(morepannel + oldhtml);

	$("#moretools").on("click", function(){

		if($("#morepannel").css("display")=="none"){

			if($("#xifupannel").css("display")!="none"){

				$("#xifupannel").hide();

			}

			if($("#keyboardpannel").css("display")!="none"){

				$("#keyboardpannel").hide();

			}

			$("#morepannel").show();

		}else{

			$("#morepannel").hide();

		}

	});

});





	