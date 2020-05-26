<?php
function themeoptions_admin_menu()
{add_theme_page("主题选项","主题选项",'edit_themes',basename(__FILE__),'themeoptions_page');}
if($_POST['update_themeoptions']=='true'){themeoptions_update();}
function themeoptions_update(){
    update_option('blog_title_suffix',$_POST['blog_title_suffix']);
    update_option('blog_keywords',$_POST['blog_keywords']);
    update_option('blog_description',$_POST['blog_description']);
    update_option('blog_logo_png',$_POST['blog_logo_png']);
    update_option('blog_logo_gif',$_POST['blog_logo_gif']);
    update_option('blog_logo_width',$_POST['blog_logo_width']);
    update_option('blog_logo_height',$_POST['blog_logo_height']);
    update_option('blog_logo_ico',$_POST['blog_logo_ico']);
    update_option('blog_build_time',$_POST['blog_build_time']);
    update_option('blog_article_nickname',$_POST['blog_article_nickname']);
    update_option('blog_article_unit',$_POST['blog_article_unit']);
    update_option('blog_tag_num',$_POST['blog_tag_num']);
    update_option('blog_weibo',$_POST['blog_weibo']);
    update_option('blog_qqqun',$_POST['blog_qqqun']);
    update_option('blog_qq',$_POST['blog_qq']);
    update_option('blog_sponsor',$_POST['blog_sponsor']);
    update_option('blog_rss',$_POST['blog_rss']);
	update_option('blog_statement',$_POST['blog_statement']);
	update_option('blog_nothing',$_POST['blog_nothing']);
	update_option('blog_copyright',stripslashes($_POST['blog_copyright']));
	update_option('blog_stats',stripslashes($_POST['blog_stats']));
    update_option('blog_mail_host',$_POST['blog_mail_host']);
    update_option('blog_mail_port',$_POST['blog_mail_port']);
    update_option('blog_mail_username',$_POST['blog_mail_username']);
    update_option('blog_mail_password',$_POST['blog_mail_password']);
    update_option('blog_mail_from',$_POST['blog_mail_from']);
    update_option('blog_protection_name',$_POST['blog_protection_name']);
    update_option('blog_protection_mail',$_POST['blog_protection_mail']);
    update_option('blog_link_home',$_POST['blog_link_home']);
    update_option('blog_link_page',$_POST['blog_link_page']);
    update_option('blog_slider_name1',$_POST['blog_slider_name1']);
    update_option('blog_slider_img1',$_POST['blog_slider_img1']);
    update_option('blog_slider_url1',$_POST['blog_slider_url1']);
    update_option('blog_slider_name2',$_POST['blog_slider_name2']);
    update_option('blog_slider_img2',$_POST['blog_slider_img2']);
    update_option('blog_slider_url2',$_POST['blog_slider_url2']);
    update_option('blog_slider_name3',$_POST['blog_slider_name3']);
    update_option('blog_slider_img3',$_POST['blog_slider_img3']);
    update_option('blog_slider_url3',$_POST['blog_slider_url3']);
    update_option('blog_slider_name4',$_POST['blog_slider_name4']);
    update_option('blog_slider_img4',$_POST['blog_slider_img4']);
    update_option('blog_slider_url4',$_POST['blog_slider_url4']);
    update_option('blog_slider_name5',$_POST['blog_slider_name5']);
    update_option('blog_slider_img5',$_POST['blog_slider_img5']);
    update_option('blog_slider_url5',$_POST['blog_slider_url5']);
    update_option('blog_slider_name6',$_POST['blog_slider_name6']);
    update_option('blog_slider_img6',$_POST['blog_slider_img6']);
    update_option('blog_slider_url6',$_POST['blog_slider_url6']);
	update_option('blog_ads',stripslashes($_POST['blog_ads']));
   }
function themeoptions_page(){ ?>
<link href="<?php bloginfo('template_url'); ?>/include/admin.css" rel="stylesheet" type="text/css" />
<div class="wrap">
  <div id="icon-themes" class="icon32"><br /></div>
  <h2>主题选项</h2>
  <div class="themeoptions">
  <form method="POST" action="">
    <input type="hidden" name="update_themeoptions" value="true" />
	<br />
	<h3>基本信息</h3>
    <p><span class="txt1">标题后缀：</span><input type="text" name="blog_title_suffix" id="blog_title_suffix" value="<?php echo get_option('blog_title_suffix'); ?>"/>　首页Title标题后缀词</p>
    <p><span class="txt1">关键词：</span><input type="text" name="blog_keywords" id="blog_keywords" value="<?php echo get_option('blog_keywords'); ?>"/></p>
    <p><span class="txt1">网站描述：</span><input type="text" name="blog_description" id="blog_description" value="<?php echo get_option('blog_description'); ?>"/></p>
    <p><span class="txt1">LOGO PNG：</span><input type="text" name="blog_logo_png" id="blog_logo_png" value="<?php echo get_option('blog_logo_png'); ?>"/>　如：/wp-content/themes/yousucai/images/logo.png</p>
    <p><span class="txt1">LOGO GIF：</span><input type="text" name="blog_logo_gif" id="blog_logo_gif" value="<?php echo get_option('blog_logo_gif'); ?>"/>　如：/wp-content/themes/yousucai/images/logo_ie6.gif</p>
    <p><span class="txt1">LOGO宽度：</span><input type="text" name="blog_logo_width" id="blog_logo_width" value="<?php echo get_option('blog_logo_width'); ?>"/>　如：150</p>
    <p><span class="txt1">LOGO高度：</span><input type="text" name="blog_logo_height" id="blog_logo_height" value="<?php echo get_option('blog_logo_height'); ?>"/>　如：38</p>
    <p><span class="txt1">ICO图标：</span><input type="text" name="blog_logo_ico" id="blog_logo_ico" value="<?php echo get_option('blog_logo_ico'); ?>"/>　如：/wp-content/themes/yousucai/images/favicon.ico</p>
    <p><span class="txt1">建站时间：</span><input type="text" name="blog_build_time" id="blog_build_time" value="<?php echo get_option('blog_build_time'); ?>"/>　格式：2013-11-01</p>
    <p><span class="txt1">文章别称：</span><input type="text" name="blog_article_nickname" id="blog_article_nickname" value="<?php echo get_option('blog_article_nickname'); ?>"/>　如：素材</p>
    <p><span class="txt1">文章单位：</span><input type="text" name="blog_article_unit" id="blog_article_unit" value="<?php echo get_option('blog_article_unit'); ?>"/>　如：组</p>
    <p><span class="txt1">标签个数：</span><input type="text" name="blog_tag_num" id="blog_tag_num" value="<?php echo get_option('blog_tag_num'); ?>"/>　首页底部标签显示个数，如：35</p>
    <p><span class="txt1">关注微博：</span><input type="text" name="blog_weibo" id="blog_weibo" value="<?php echo get_option('blog_weibo'); ?>"/>　如：http://t.qq.com/youzhuti</p>
    <p><span class="txt1">QQ群链接：</span><input type="text" name="blog_qqqun" id="blog_qqqun" value="<?php echo get_option('blog_qqqun'); ?>"/>　如：http://url.cn/M71aJj</p>
    <p><span class="txt1">联系QQ：</span><input type="text" name="blog_qq" id="blog_qq" value="<?php echo get_option('blog_qq'); ?>"/>　如：422900296</p>
    <p><span class="txt1">赞助付款：</span><input type="text" name="blog_sponsor" id="blog_sponsor" value="<?php echo get_option('blog_sponsor'); ?>"/>　如：https://me.alipay.com/sqfy168</p>
    <p><span class="txt1">RSS地址：</span><input type="text" name="blog_rss" id="blog_rss" value="<?php echo get_option('blog_rss'); ?>"/>　如：http://www.youzhuti.com/feed</p>
    <p><span class="txt1">特别声明：</span><input type="text" name="blog_statement" id="blog_statement" value="<?php echo get_option('blog_statement'); ?>"/>　显示在内容页</p>
    <p><span class="txt1">暂无内容：</span><input type="text" name="blog_nothing" id="blog_nothing" value="<?php echo get_option('blog_nothing'); ?>"/>　如：抱歉，暂无相关素材</p>
    <p><span class="txt2">版权信息：<br />支持HTML</span><textarea name="blog_copyright" id="blog_copyright"><?php echo get_option('blog_copyright'); ?></textarea></p>
    <p><span class="txt2">统计代码：<br />支持HTML</span><textarea name="blog_stats" id="blog_stats"><?php echo get_option('blog_stats'); ?></textarea></p>
	<p><input type="submit" class="button-primary" name="bcn_admin_options" value="保存设置" style="width:100px;margin-left:80px;"/></p>
	<br />
	<h3>评论/回复自动发送邮件</h3>
    <p><span class="txt1">邮箱主机：</span><input type="text" name="blog_mail_host" id="blog_mail_host" value="<?php echo get_option('blog_mail_host'); ?>"/>　如：hwsmtp.exmail.qq.com</p>
    <p><span class="txt1">邮箱端口：</span><input type="text" name="blog_mail_port" id="blog_mail_port" value="<?php echo get_option('blog_mail_port'); ?>"/>　如：25</p>
    <p><span class="txt1">邮箱用户：</span><input type="text" name="blog_mail_username" id="blog_mail_username" value="<?php echo get_option('blog_mail_username'); ?>"/>　如：admin@youzhuti.com</p>
    <p><span class="txt1">邮箱密码：</span><input type="text" name="blog_mail_password" id="blog_mail_password" value="<?php echo get_option('blog_mail_password'); ?>"/>　邮箱登录密码</p>
    <p><span class="txt1">来源邮箱：</span><input type="text" name="blog_mail_from" id="blog_mail_from" value="<?php echo get_option('blog_mail_from'); ?>"/>　如：admin@youzhuti.com</p>
	<p><input type="submit" class="button-primary" name="bcn_admin_options" value="保存设置" style="width:100px;margin-left:80px;"/></p>
	<br />
	<h3>防止冒充站长评论</h3>
    <p><span class="txt1">评论用户：</span><input type="text" name="blog_protection_name" id="blog_protection_name" value="<?php echo get_option('blog_protection_name'); ?>"/>　如：admin</p>
    <p><span class="txt1">评论邮箱：</span><input type="text" name="blog_protection_mail" id="blog_protection_mail" value="<?php echo get_option('blog_protection_mail'); ?>"/>　如：admin@youzhuti.com</p>
	<p><input type="submit" class="button-primary" name="bcn_admin_options" value="保存设置" style="width:100px;margin-left:80px;"/></p>
	<br />
	<h3>友情链接分类ID<font color="#ff6600">（直接填写要显示的分类ID号，多个ID号之间用半角逗号间隔，不填则显示全部链接）</font></h3>
    <p><span class="txt1">首页链接：</span><input type="text" name="blog_link_home" id="blog_link_home" value="<?php echo get_option('blog_link_home'); ?>"/>　如：1</p>
    <p><span class="txt1">内页链接：</span><input type="text" name="blog_link_page" id="blog_link_page" value="<?php echo get_option('blog_link_page'); ?>"/>　如：1,2</p>
	<p><input type="submit" class="button-primary" name="bcn_admin_options" value="保存设置" style="width:100px;margin-left:80px;"/></p>
	<br />
	<h3>幻灯片<font color="#ff6600">（图片宽度：760px　图片高度：384px）</font></h3>
    <p><span class="txt1">图片名称1：</span><input type="text" name="blog_slider_name1" id="blog_slider_name1" value="<?php echo get_option('blog_slider_name1'); ?>"/></p>
    <p><span class="txt1">图片路径1：</span><input type="text" name="blog_slider_img1" id="blog_slider_img1" value="<?php echo get_option('blog_slider_img1'); ?>"/></p>
    <p><span class="txt1">链接地址1：</span><input type="text" name="blog_slider_url1" id="blog_slider_url1" value="<?php echo get_option('blog_slider_url1'); ?>"/></p>
    <p><span class="txt1">图片名称2：</span><input type="text" name="blog_slider_name2" id="blog_slider_name2" value="<?php echo get_option('blog_slider_name2'); ?>"/></p>
    <p><span class="txt1">图片路径2：</span><input type="text" name="blog_slider_img2" id="blog_slider_img2" value="<?php echo get_option('blog_slider_img2'); ?>"/></p>
    <p><span class="txt1">链接地址2：</span><input type="text" name="blog_slider_url2" id="blog_slider_url2" value="<?php echo get_option('blog_slider_url2'); ?>"/></p>
    <p><span class="txt1">图片名称3：</span><input type="text" name="blog_slider_name3" id="blog_slider_name3" value="<?php echo get_option('blog_slider_name3'); ?>"/></p>
    <p><span class="txt1">图片路径3：</span><input type="text" name="blog_slider_img3" id="blog_slider_img3" value="<?php echo get_option('blog_slider_img3'); ?>"/></p>
    <p><span class="txt1">链接地址3：</span><input type="text" name="blog_slider_url3" id="blog_slider_url3" value="<?php echo get_option('blog_slider_url3'); ?>"/></p>
    <p><span class="txt1">图片名称4：</span><input type="text" name="blog_slider_name4" id="blog_slider_name4" value="<?php echo get_option('blog_slider_name4'); ?>"/></p>
    <p><span class="txt1">图片路径4：</span><input type="text" name="blog_slider_img4" id="blog_slider_img4" value="<?php echo get_option('blog_slider_img4'); ?>"/></p>
    <p><span class="txt1">链接地址4：</span><input type="text" name="blog_slider_url4" id="blog_slider_url4" value="<?php echo get_option('blog_slider_url4'); ?>"/></p>
    <p><span class="txt1">图片名称5：</span><input type="text" name="blog_slider_name5" id="blog_slider_name5" value="<?php echo get_option('blog_slider_name5'); ?>"/></p>
    <p><span class="txt1">图片路径5：</span><input type="text" name="blog_slider_img5" id="blog_slider_img5" value="<?php echo get_option('blog_slider_img5'); ?>"/></p>
    <p><span class="txt1">链接地址5：</span><input type="text" name="blog_slider_url5" id="blog_slider_url5" value="<?php echo get_option('blog_slider_url5'); ?>"/></p>
    <p><span class="txt1">图片名称6：</span><input type="text" name="blog_slider_name6" id="blog_slider_name6" value="<?php echo get_option('blog_slider_name6'); ?>"/></p>
    <p><span class="txt1">图片路径6：</span><input type="text" name="blog_slider_img6" id="blog_slider_img6" value="<?php echo get_option('blog_slider_img6'); ?>"/></p>
    <p><span class="txt1">链接地址6：</span><input type="text" name="blog_slider_url6" id="blog_slider_url6" value="<?php echo get_option('blog_slider_url6'); ?>"/></p>
	<p><input type="submit" class="button-primary" name="bcn_admin_options" value="保存设置" style="width:100px;margin-left:80px;"/></p>
	<br />
	<h3>内容页广告<font color="#ff6600">（位于“特别声明”下方）</font></h3>
    <p><span class="txt2">广告代码：<br />支持HTML</span><textarea name="blog_ads" id="blog_ads"><?php echo get_option('blog_ads'); ?></textarea></p>
	<p><input type="submit" class="button-primary" name="bcn_admin_options" value="保存设置" style="width:100px;margin-left:80px;"/></p>
  </form>
  </div>
</div>
<?php } add_action('admin_menu','themeoptions_admin_menu'); ?>