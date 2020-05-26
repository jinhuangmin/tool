<form id="tForm" form-data="jvb" method="post" >
<div id="tabs" class="form-tabs-title">
	<ul>
		<li><a href="#tabs-1">内容设置</a></li>
		<li><a href="#tabs-2">样式设置</a></li>

	</ul>
	<div class="formlayout">
		<div class="form-tabs-content">
			<div id="tabs-1">
				<ul class="setform">
					<li style="display:none;">
						<label for="i1">应用ID：</label>
						<input id="i1" class="setinput disabled" type="text" title="自动生成，无需填写" readonly="readonly" name="appID" value="<?=$_POST['appID']?>" />
					</li>
					<li>
						<label for="ibeli1">应用名称：</label>
						<input id="ibeli1" class="setinput " type="text" title="该应用的名称，允许修改，用于在图层面板中标识应用" junezx_vali_str="true" name="appLabel" value="<?=$_POST['appLabel']?>" />
					</li>
					<li>
						<label for="rd2">是否自动播放：</label>
						<div id="rd2">
							<input type="radio" id="r3" name="forcePlayMode" value="1" <? if($_POST['forcePlayMode']=='1'){echo'checked="checked"';} ?>/>
							<label for="r3" title="">自动</label>
							<input type="radio" id="r4" name="forcePlayMode" value="2" <? if($_POST['forcePlayMode']=='2'){echo'checked="checked"';} ?> />
							<label for="r4" title="">手动</label>
						</div>
					</li>
					<li>
						<label for="i2">视频/FLASH链接：</label>
						<input id="i2" class="setinput" type="text" title="请输入视频链接" junezx_vali_url="true" name="videoSrc" value="<?=$_POST['videoSrc']?>" />
					</li>
					<li class="hnborder borderControl inputSpaceline" style="display: list-item;"><i></i><span style="padding:0 10px;">预置FLASH</span><em></em></li>
					<li>
						<div id="flashdsSet">
						<span class="flashds-span flashds-active" data-flashurl="">无</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T1lmk2Fk8bXXXtxVjX.swf">小雪点</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img2.tbcdn.cn/tfscom/T1svNgFBxdXXXtxVjX.swf">大雪花</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-59/7fb0222f5561a152f70b598e8e3a85b7536d128b.swf">水墨雪花</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-50/edcce8454ad0efff5e611c653559ea946f2b0334.swf">下雨</span><br />
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img2.tbcdn.cn/tfscom/T1CRkMFh0hXXXtxVjX.swf">烟花</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/bc4f1f08f8d66ad53643cb613eb67fdebaff5ff9.swf">大烟花</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-01-08/1d3810ee0029a4fb3d2644483991e5a620009cff.swf">超大烟花</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/e6dc61e0ebfe8dfa75ec2f8c4135c6e908982afc.swf">冲天炮</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/15-19/4d41d1aad2dafd34ce02dcd397097c22c4cd1ff5.swf">飘彩纸</span><br />
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://gbm.alicdn.com/tfscom/T1xpNiFFpcXXXtxVjX.swf">白色荧光</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T16yTGFedeXXXtxVjX.swf">金色荧光</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img3.tbcdn.cn/tfscom/T1elFJFBlEXXXtxVjX.swf">上飘荧光</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-00/ec85f82ef216281311c63132b121b27edb83352a.swf">上飘小花</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/16-32/9d5b1300af4a27ae7c06c3219c6941470a79a023.swf">上飘气泡</span><br />
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-11/c04a23ec4dff501df4432b9c9fd461354a09b970.swf">黑色桃心</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-22/4a3d12d9145e73fe259d387e7fc6bc38a04661f6.swf">黑色星星</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T1colyFDhgXXXtxVjX.swf">蝴蝶</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/15-57/dcfb99fbaae36a531a65433fc745609d3d02286d.swf">蝴蝶飞舞</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-58/e9d91a47a34eee4b0de6b8cb49caa3e8b472c527.swf">水墨蝴蝶</span><br />
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img2.tbcdn.cn/tfscom/T1R13qFcxcXXXtxVjX.swf">花瓣1</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-04/81ed97180243159b92aa75d550016d81a28a6916.swf">花瓣2</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-02/80ad40a2ea91c0a9ec9a3cc642c7d8e3a84335ea.swf">绿叶</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img3.tbcdn.cn/tfscom/T1wXoBFh0eXXXtxVjX.swf">元宝</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-23/98dca44e2f8377ed36d78282a014d50bc08d5b63.swf">火焰</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/18-01/89e92f828c396da51f4a1d559fdf7dfa3d1ababa.swf">鞭炮</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-17/10-00/96290cee2620d303c8847da8eda61bb04fa079c0.swf">舞狮子</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-14/e8937178979f0e2b47e059c052d44dabf532aaba.swf">桃心</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-09/35025955ec296a6c17476b0a8e1f6c5562bc9d2f.swf">五角星</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-03/720e80489353b5bd937a046d84a1ede1b11eeb39.swf">枫叶</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-23/b7e3cfc999900598733970280d0409f6d99e684f.swf">热汽球</span>
						<span class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2008-12-07/d5b57c2408791eb4e3e32fa362334f666eef0301.swf" title="需预览查看效果">鼠标跟随</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img1.tbcdn.cn/tfscom/T1HVJvFp0bXXXtxVjX.swf">雪人</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/f03ff06e27860434fac22c485f2350cea97fef86.swf">礼盒1</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-39/39c4ac701c8b2053311c813bcbaee980334f36f7.swf">礼盒2</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/18-03/d6f19419bcb2b3d986b6ae2de9e94bdf5e9d4803.swf">灯笼</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/17-57/2556028b2272d10aee8320296ea1148abf9953cc.swf">铃铛</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-36/4bdd6df3198c2509dc9d12277013bbba729cf383.swf">流沙</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-30/da9ac8a807169d52da4d3ad31e108f7769115ce2.swf">飘金币</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-31/03d4fb77a706ca63cab28bd6a184a8905b06003d.swf">飘金币</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-54/2da7caa83a699e211e7b7d8af966f67fe90fbcb8.swf">光耀</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-41/de893ceb98ee760c65fb4a7effb67f0b9f02bf62.swf">声/水波</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-51/97c714a5ea7831017e107f30930472267cbeeffc.swf">闪动圆点</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-50/b76036d902521eb80af3eb031f611ecfeb672c02.swf">闪烁光圈</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-49/d316263f4576570f92975950bc141dc89a062f70.swf">舞台灯束</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-49/533a7835e3d43979df08d60cf09be6fd879b21b5.swf">金光照耀</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-48/c60c4c29d8c8ce8df26dd830e5ee2447d1cc88c1.swf">黑光照耀</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-43/bd11f9f62ecadc9b440001854c05c301bf0a312b.swf">抖动光圈</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-12-14/13-52/2b1f9dd00b16b6ef0c09366af873e5cc1fd9da79.swf">彩果</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-12-14/13-50/29b5920af715a49c72a88279c1efd92fc5c64087.swf">圣诞树2</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-12-14/13-49/1c90f831a086f8e03e875cfd608791659b9d83eb.swf">圣诞老人2</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-12-14/13-48/4fe417ad9f3632803b6b616f3642276ec863f882.swf">彩球</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-12-14/13-47/0c81e9fa8fec722a1949809e9326e284a1039a78.swf">星星棒</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-18/14-23/1610d4ae3c6e12ca28a978b1383b777335cb4709.swf">爱心</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/17-55/e11d4b6dfc26a31cfe8de74c33fac18308bc507d.swf">铃铛领结</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-10/663d2438456164879d4a80e7261c09eb98ac2a5b.swf">圣诞树1</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-09/186336914c87057be553d2d966deef3ed521fb97.swf">圣诞麋鹿</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-09/4fc27af0935dac46e9a2ebd9ccee4f6f9fa09657.swf">圣诞老人1</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-21/d640c3855e71a4b8ac1d83bd15ff135ad5e4dc00.swf">喇叭</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-18/9fba2236a07a7e82faf114fe5cd2413aa9c96a96.swf">摩天轮</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/18-02/5457c1f14022ae3db3b1992f91026986f49f5735.swf">爆竹</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-15/3c5a659d30c0d1a96ab065a8c8da0a60e10d2591.swf">鞭炮</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/09-20/4db815b03a99b453ec7750e4f172b22202118615.swf">招财挂饰</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-18/14-16/42e34f72c30fccc23ecfb03357831c5b2bb825df.swf">闹钟</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-18/11-44/a0431c09d8a68e5a354ddaa027d4123554c2cdb5.swf">点击提示</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-18/11-43/2333ebcf5578d110a51a1648a2da79de921e71d5.swf">Q & A</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-20/366c1144816445a497235482b6731a5b9e257690.swf">心动</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-26/894efe11355fb237e46c21cacd8e3c98495d0f7d.swf">皇冠</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-30/16-30/c60d93a95695e56e7b25f6afed764010b17171a5.swf">黄色风车</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-30/16-38/3feb2adb00474a06a712b9ba08712d8f1f1f4389.swf">彩色风车</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/e6e3ff620dab808bac072a1075e1d402c1db8fe4.swf">青云</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-22/9e00078695663e9655f6046b1537350a19fb7386.swf">太阳2</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-26/a82c83bd459466956b52bb658197f69eb4b577ea.swf">天使爱心</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-28/2508e3a8f1ddd552878f310c9b17124ee4db7836.swf">太阳1</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-31/faad9195079db807555d6049f1c781d9d3fdd8a7.swf">蜡烛</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-29/6993a53cda4d73346e7931472767d70f66438964.swf">喷珠子</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-30/85d1339d4da8b6f5d76e831cf20fe98027e78b24.swf">红纸闪烁</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/3b727581cc65ff4b3f180b9f22eee5436f26503a.swf">飘纸片</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-28/7db335668b2bcd942b5c330390aab12daee0eda3.swf">装饰彩灯</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/53e6e8162e25937352a2c52e34204d404851dcab.swf">纸片礼炮</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2009-06-29/8a19ece66e05cf404385bfd435689987e4e15ee6.swf">彩片</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-52/fe68e69073e2ba0276dda81e8fe0ad78b7a62219.swf">电光束</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-08-31/16-35/1a06ef68f92d0b13477a12f4de2aad2515815cb9.swf">旋转圆点</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/17-57/94805e3fcb62111056a947a5b8674331a1ea84d6.swf">移动竖线</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-00/ac0e291cda2c61490edaf88b5f6884098ecdbd2d.swf">方格</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-10-11/10-00/605a559c68414615805dc84e82919c4a0b1b3897.swf">闪电</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-37/bc58aefed98b3c115725c2b6f4117d3133382e73.swf">海浪</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-40/b19adf56478be026fcb303c2861aa34b1f1d1fa7.swf">小云彩</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-47/892359dcd888337e405c3f8dac9fb7f67ede155c.swf">水流</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-48/0563c8676aa1599b2d0ec221ea7235558ae05e66.swf">大雨</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-51/589d4581c43c59cc48d70e485aa3d295db126735.swf">蝴蝶</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-51/a9fcee791430a71c97918a64646c04ffdf1d29aa.swf">横飘枫叶</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-52/754183e4b3092dbe9dbb56e84e9b22c55069373a.swf">云彩</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-57/eea2fdc9ae04b99de00b0e81835062815e823a40.swf">水珠</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-59/d2af960fece413e85624733da74c2656b999a04a.swf">黑色雪点</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-12/2fb47edc9a706365febbca091f96c9c3600dd0e1.swf">青黄螺旋</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-13/bb806c82ab4378e09048400e07d1e56ea27395fc.swf">青蓝螺旋</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-13/cefd5abce30642a51a91aacd7aadd02c8e06fb8b.swf">黑色螺旋</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-14/94b372c9008c8becb2937cb4ac5caec059b51fce.swf">黑色唇印</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-14/e8937178979f0e2b47e059c052d44dabf532aaba.swf">红心</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/19-15/d1b63488861fd437f1a2a43863edfe2885c5cea7.swf">黑桃</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2011-01-18/14-20/953431c64db093757427ed8a125b9e8b5abadef5.swf">马赛克</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-10/831efe0d047dcea0de26847fe98dbcd878d7cfa4.swf">红点矩阵</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-11/e3bd94dce6875b630ade6b33c31dae3ef98e35a5.swf">波浪黑点</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-14/47d760db1d649268ecdd20ebe05a9a1acd89544d.swf">金光闪闪</span>
						<span data-tipcls="c1" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-16/c16665fb7169fec27756caa77a679225acf75f56.swf">彩色泡泡</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-19/21fec781f23f512759b1371763b332f1a8a3e80f.swf">星星</span>
						<span data-tipcls="c1 b2" data-swfpreview="true" title class="flashds-span" data-flashurl="http://img.uu1001.cn/materials/original/2010-09-01/18-20/c25640301cc8b11609fdb64c4469f0df873f3cb4.swf">月亮</span>
						</div>
					</li>
				</ul>
			</div>
			<div id="tabs-2">
				<ul class="setform">
					<li>
						<label for="ii1">应用宽度：</label>
						<input id="ii1" class="setinput" type="text" title="应用的宽度，如需精确调整，请在此处输入数值。" name="width" value="<?=$_POST['width']?>" />
					</li>
					<li>
						<label for="ii2">应用高度：</label>
						<input id="ii2" class="setinput" type="text" title="应用的高度，如需精确调整，请在此处输入数值。" name="height" value="<?=$_POST['height']?>" />
					</li>
					<li>
						<label for="ii3">应用上边距：</label>
						<input id="ii3" class="setinput" type="text" title="应用的上边距，如需精确调整，请在此处输入数值。" name="top" value="<?=$_POST['top']?>" />
					</li>
					<li>
						<label for="ii4">应用左边距：</label>
						<input id="ii4" class="setinput" type="text" title="应用的左边距，如需精确调整，请在此处输入数值。" name="left" value="<?=$_POST['left']?>" />
					</li>
				</ul>
			</div>


		</div>
	</div>
</div>
</form>
<script type="text/javascript">
$(function() {
//加载表单样式
	$("#tabs").tabs();
	$(".ui-dialog-content input,.ui-dialog-content .setform > li > div").buttonset();
	$(".setform").tooltip({
		content: function() {
			var _t = $(this),
				swfpreview = _t.attr("data-swfpreview"),
				title = _t.attr("title");
			if(swfpreview == "true") {
				return '<div style="position:relative;width:540px;height:330px;overflow:hidden;">'+
						'<embed allowscriptaccess="never" flashvars="scene=taobao_shop" style="position:absolute;left:-0%;top:0px;" width="540" height="330" src="'+_t.attr("data-flashurl")+'" type="application/x-shockwave-flash" allowfullscreen="true" wmode="transparent">'+
						'</div>';
			} else {
				return title;
			}
		},
		position: function() {
			var _t = $(this),
				swfpreview = _t.attr("data-swfpreview");
			if(swfpreview == "true") {
				return {
					my: "center bottom",
					at: "center top-5"
				};
			} else {
				return {
					my: "left top",
					at: "left bottom+5"
				};
			}
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