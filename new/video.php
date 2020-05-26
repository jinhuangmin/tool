<?
$data=$_POST;
?>
<form id="tForm" form-data="jvb" method="post" >
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>
		<li><a href="#tabs-99">视频教程</a></li>
	</ul>
	<div id="tabs-1">
		<ul class="setform">
			<li style="display:none;">
				<label for="i1">应用ID：</label>
				<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$data['appID']?>" />
			</li>
			<li>
				<label for="i2">视频/FLASH链接：</label>
				<input id="i2" class="setinput" type="text" title="请输入视频链接" name="videoSrc" value="<?=$data['videoSrc']?>" />
			</li>
			<li>
				<label>预置FLASH链接：</label>
				<div id="flashdsSet" style="margin-left:110px;">
				<span class="flashds-span flashds-active" data-flashurl="">无</span>
				<span class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T1lmk2Fk8bXXXtxVjX.swf">小雪点</span>
				<span class="flashds-span" data-flashurl="http://img2.tbcdn.cn/tfscom/T1svNgFBxdXXXtxVjX.swf">大雪花</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-59/7fb0222f5561a152f70b598e8e3a85b7536d128b.swf">水墨雪花</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-50/edcce8454ad0efff5e611c653559ea946f2b0334.swf">下雨</span><br />
				<span class="flashds-span" data-flashurl="http://img2.tbcdn.cn/tfscom/T1CRkMFh0hXXXtxVjX.swf">烟花</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/bc4f1f08f8d66ad53643cb613eb67fdebaff5ff9.swf">大烟花</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-01-08/1d3810ee0029a4fb3d2644483991e5a620009cff.swf">超大烟花</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/e6dc61e0ebfe8dfa75ec2f8c4135c6e908982afc.swf">冲天炮</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/15-19/4d41d1aad2dafd34ce02dcd397097c22c4cd1ff5.swf">飘彩纸</span><br />
				<span class="flashds-span" data-flashurl="http://gbm.alicdn.com/tfscom/T1xpNiFFpcXXXtxVjX.swf">白色荧光</span>
				<span class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T16yTGFedeXXXtxVjX.swf">金色荧光</span>
				<span class="flashds-span" data-flashurl="http://img3.tbcdn.cn/tfscom/T1elFJFBlEXXXtxVjX.swf">上飘荧光</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-00/ec85f82ef216281311c63132b121b27edb83352a.swf">上飘小花</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/16-32/9d5b1300af4a27ae7c06c3219c6941470a79a023.swf">上飘气泡</span><br />
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-11/c04a23ec4dff501df4432b9c9fd461354a09b970.swf">黑色桃心</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-22/4a3d12d9145e73fe259d387e7fc6bc38a04661f6.swf">黑色星星</span>
				<span class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T1colyFDhgXXXtxVjX.swf">蝴蝶</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/15-57/dcfb99fbaae36a531a65433fc745609d3d02286d.swf">蝴蝶飞舞</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-58/e9d91a47a34eee4b0de6b8cb49caa3e8b472c527.swf">水墨蝴蝶</span><br />
				<span class="flashds-span" data-flashurl="http://img2.tbcdn.cn/tfscom/T1R13qFcxcXXXtxVjX.swf">花瓣</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-02/80ad40a2ea91c0a9ec9a3cc642c7d8e3a84335ea.swf">绿叶</span>
				<span class="flashds-span" data-flashurl="http://img3.tbcdn.cn/tfscom/T1wXoBFh0eXXXtxVjX.swf">元宝</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-23/98dca44e2f8377ed36d78282a014d50bc08d5b63.swf">火焰</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/18-01/89e92f828c396da51f4a1d559fdf7dfa3d1ababa.swf">鞭炮</span><br />
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-17/10-00/96290cee2620d303c8847da8eda61bb04fa079c0.swf">舞狮子</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-14/e8937178979f0e2b47e059c052d44dabf532aaba.swf">桃心</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-09/35025955ec296a6c17476b0a8e1f6c5562bc9d2f.swf">五角星</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-03/720e80489353b5bd937a046d84a1ede1b11eeb39.swf">枫叶</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-23/b7e3cfc999900598733970280d0409f6d99e684f.swf">热汽球</span><br />
				<span class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T1HVJvFp0bXXXtxVjX.swf">雪人</span>
				<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2008-12-07/d5b57c2408791eb4e3e32fa362334f666eef0301.swf">鼠标跟随</span>

				</div>
			</li>
		</ul>
	</div>
	<div id="tabs-2">
		<ul class="setform">
			<li>
				<label for="ibeli1">应用名称：</label>
				<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改" name="appLabel" value="<?=$data['appLabel']?>" />
			</li>
			<li>
				<label for="ii1">应用宽度：</label>
				<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$data['width']?>" />
			</li>
			<li>
				<label for="ii2">应用高度：</label>
				<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$data['height']?>" />
			</li>
			<li>
				<label for="ii3">应用上边距：</label>
				<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$data['top']?>" />
			</li>
			<li>
				<label for="ii4">应用左边距：</label>
				<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$data['left']?>" />
			</li>
		</ul>
	</div>
	<div id="tabs-99">
		<div style="padding:15px 10px 0;width:488px;height:348px;overflow:hidden;">
			<embed allowScriptAccess="never" flashvars="scene=taobao_shop" width="488" height="348" src="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435203.swf#tb_videoid=6184010" type="application/x-shockwave-flash" wmode="opaque">
		</embed>
		</div>
		<a class="june-preview" style="display:block;margin:22px auto 0;text-align:center;" href="https://cloud.video.taobao.com/play/u/800803731/p/2/e/1/t/3/32435203.swf#tb_videoid=6184010" target="_blank">新窗口全屏观看</a>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$(".setform").tooltip({
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
	$("#flashdsSet").on("click", "span", function() {
		$("#flashdsSet").children(".flashds-active").removeClass("flashds-active");
		$(this).addClass("flashds-active");
		var index = $(this).index(), flashurl = $(this).attr("data-flashurl");
		if(index == 0) {
			$("#i2").removeClass("disabled").prop("readonly", false);
		} else {
			$("#i2").val(flashurl).addClass("disabled").prop("readonly", true);
		}
	});
});
</script>