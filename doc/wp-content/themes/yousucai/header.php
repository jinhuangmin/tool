<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php if(is_home()){ ?><title><?php bloginfo('name'); ?><?php if(get_option('blog_title_suffix')!=""){ ?>_<?php echo get_option('blog_title_suffix'); ?><?php } ?></title><?php } ?>
<?php if(is_search()){ ?><title><?php echo trim(wp_title("",0)); ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_single()){ ?><title><?php echo trim(wp_title("",0)); ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_page()){ ?><title><?php echo trim(wp_title("",0)); ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_category()){ ?><title><?php single_cat_title(); ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_tag()){ ?><title><?php single_tag_title("",true); ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_year()){ ?><title><?php the_time("Y年"); ?>发布的<?php if(get_option('blog_article_nickname')!=""){echo get_option('blog_article_nickname');}else{ ?>内容<?php } ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_month()){ ?><title><?php the_time("Y年m月"); ?>发布的<?php if(get_option('blog_article_nickname')!=""){echo get_option('blog_article_nickname');}else{ ?>内容<?php } ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_day()){ ?><title><?php the_time("Y年m月d日"); ?>发布的<?php if(get_option('blog_article_nickname')!=""){echo get_option('blog_article_nickname');}else{ ?>内容<?php } ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_author()){ ?><title><?php the_author(); ?>发布的<?php if(get_option('blog_article_nickname')!=""){echo get_option('blog_article_nickname');}else{ ?>内容<?php } ?>_<?php bloginfo('name'); ?></title><?php } ?>
<?php if(is_404()){ ?><title>404错误_<?php bloginfo('name'); ?></title><?php } ?>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php if(is_home()){
$description=get_option('blog_description');
$keywords=get_option('blog_keywords');}
elseif(is_page()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_search()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_tag()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_year()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_month()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_day()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_author()){
$description=wp_title("",false);
$keywords=wp_title("",false);}
elseif(is_404()){
$description="找不到相关页面";
$keywords="404错误";}
elseif
(is_single()){
if($post->post_excerpt){$description=$post->post_excerpt;}
elseif(function_exists('wp_thumbnails_excerpt')){
$description=wp_thumbnails_excerpt($post->post_content, true);}
else{$description=$post->post_title;}
$keywords="";
$tags=wp_get_post_tags($post->ID);
foreach($tags as $tag){
$keywords=$keywords.",".$tag->name;}}
elseif(is_category()){
$description=category_description();
$description=strip_tags($description);
$description=trim($description);
$keywords=single_cat_title("",false);
}
echo"<meta name=\"keywords\" content=\"$keywords\" />
<meta name=\"description\" content=\"$description\" />";
?>
<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="<?php if(get_option('blog_logo_ico')!=""){echo get_option('blog_logo_ico');}else{bloginfo('template_url'); ?>/images/link.ico<?php } ?>" type="image/x-icon" />
<link rel="bookmark" href="<?php if(get_option('blog_logo_ico')!=""){echo get_option('blog_logo_ico');}else{bloginfo('template_url'); ?>/images/link.ico<?php } ?>" type="image/x-icon" />
<link rel="icon" href="<?php if(get_option('blog_logo_ico')!=""){echo get_option('blog_logo_ico');}else{bloginfo('template_url'); ?>/images/link.ico<?php } ?>" type="image/x-icon" />
</head>
<body>

<div class="header" style="display:none;">
  <div class="common">
    <div class="logo"><a href="<?php echo esc_url(home_url('')); ?>" title="<?php bloginfo('name'); ?>" <?php if(get_option('blog_logo_png')!=""){ ?>style="width:<?php echo get_option('blog_logo_width'); ?>px;height:<?php echo get_option('blog_logo_height'); ?>px;background:url(<?php echo get_option('blog_logo_png'); ?>) no-repeat;_background:url(<?php echo get_option('blog_logo_gif'); ?>) no-repeat;"<?php }else{ ?>style="width:150px;height:38px;background:url(<?php bloginfo('template_url'); ?>/images/yousucai_logo.png) no-repeat;_background:url(<?php bloginfo('template_url'); ?>/images/yousucai_logo_ie6.gif) no-repeat;"<?php } ?>></a></div>
    <div id="submenu" class="nav">
      <ul>
<li<?php if(is_home()){echo' class="current-menu-item"';} ?>><a href="<?php echo esc_url(home_url('')); ?>">首页</a></li>
<?php if(function_exists('wp_nav_menu')) wp_nav_menu(array('container'=>false,'items_wrap'=>'%3$s','theme_location'=>'mainmenu')); ?>
      </ul>
    </div>
    <?php global $user_ID,$user_identity,$user_level ?><?php if(is_user_logged_in()){ ?>
    <div class="reg"><a href="<?php echo wp_logout_url(home_url()); ?>"><?php _e('退出'); ?></a></div>
	<div class="login"><a href="<?php echo get_option('siteurl'); ?>/wp-admin" target="_blank">后台</a></div>
	<?php }else{ ?>
    <div class="reg"><a href="<?php echo esc_url(home_url('/')); ?>wp-login.php?action=register" target="_blank">注册</a></div>
	<div class="login"><a href="<?php echo esc_url(home_url('/')); ?>wp-login.php" target="_blank">登录</a></div>
	<?php } ?>
  </div>
</div>

<div class="header">
<div class="common">
    <div class="logo"><a href="http://cnzoom.com/" title="沃姆设计"><img src="https://img.alicdn.com/imgextra/i3/800803731/TB2UkM7nyRnpuFjSZFCXXX2DXXa_!!800803731.png" style="display:block;float:left;" /></a></div>
    <div id="submenu" class="nav">
        <ul>
            <li><a href="http://cnzoom.com/">首页</a></li>
            <li>
                <a target="_blank" href="http://cnzoom.com/3.0" style="color:#ea3838;">装修工具</a>
                <ul class="sub-menu">
                    <li><a target="_blank" href="http://cnzoom.com/3.0" style="font-size: 12px;">新版工具3.0</a></li>
                    <li><a target="_blank" href="http://cnzoom.com/new" style="font-size: 12px;">旧版工具2.0</a></li>
                </ul>
            </li>
            <li><a target="_blank" href="http://www.cnzoom.com/guide/tool.html">教程帮助</a></li>
            <li>
                <a class="icon">其他工具</a>
                <ul class="sub-menu">
                    <li><a target="_blank" href="http://www.cnzoom.com/gm" style="font-size: 12px;">手机端链接转换工具</a></li>
                    <li><a target="_blank" href="http://www.cnzoom.com/shouji" style="font-size: 12px;">手机端装修工具</a></li>
                    <li><a target="_blank" href="http://www.cnzoom.com/tool/gif" style="font-size: 12px;">手机端Gif转换工具</a></li>
                    <li><a target="_blank" href="http://www.cnzoom.com/tool/nav" style="font-size: 12px;">导航样式修改工具</a></li>
                    <li><a target="_blank" href="http://www.cnzoom.com/zxn/color" style="font-size: 12px;">色码值获取工具</a></li>
                    <li><a target="_blank" href="http://www.cnzoom.com/tool/bgfixed.html" style="font-size: 12px;">固定背景生成工具</a></li>
                    <li><a target="_blank" href="http://www.cnzoom.com/zxd/index.php" style="font-size: 12px;">京东装修工具</a></li>
                </ul>
            </li>           
            <li style="border-right: 1px solid #313030;">
                <a class="icon" target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.Oo0wVD&designerId=1016893">全部模板</a>
                <ul class="sub-menu">
                    <li><a target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.1998546510.2.4fcSGt&designerId=1016893&productType=0&site=3"  style="font-size: 12px;">天猫模板</a></li>
                    <li><a target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.1998546510.1.85fVhm&designerId=1016893&productType=0&site=2"  style="font-size: 12px;">C店模板</a></li>
                    <li><a target="_blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.1998546510.6.qvSIcI&designerId=1016893&productType=0&site=1003"  style="font-size: 12px;">手机模板</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</div>





<div class="clear"></div>
<div class="position" style="margin-top:10px;">
  <div class="common">
	<?php if(get_option('blog_weibo')!=""){ ?><div class="weibo"><a href="<?php bloginfo('template_url'); ?>/go?<?php echo get_option('blog_weibo'); ?>" rel="external nofollow" target="_blank">关注微博</a></div><?php } ?>
	<?php if(get_option('blog_qqqun')!=""){ ?><div class="qun"><a href="<?php bloginfo('template_url'); ?>/go?<?php echo get_option('blog_qqqun'); ?>" rel="external nofollow" target="_blank">加入QQ群</a></div><?php } ?>
	<?php if(get_option('blog_rss')!=""){ ?><div class="feed"><a href="<?php echo get_option('blog_rss'); ?>" rel="external nofollow" target="_blank">订阅本站</a></div><?php } ?>
    <?php if(is_home()){ ?>
	<div class="counts" style="display:none;"><?php if(get_option('blog_build_time')!=""){ ?>运行天数：<span><?php echo floor((time()-strtotime(get_option('blog_build_time')))/86400); ?></span>　<?php }if(get_option('blog_article_nickname')!=""){echo get_option('blog_article_nickname');}else{ ?>文章<?php } ?>总数：<span><?php $count_posts=wp_count_posts();echo $published_posts=$count_posts->publish; ?></span>　评论总数：<span><?php echo $wpdb->get_var("SELECT COUNT(*) FROM $wpdb->comments"); ?></span>　标签总数：<span><?php echo $count_tags=wp_count_terms('post_tag'); ?></span>　用户总数：<span><?php $myusers=$wpdb->get_var("SELECT COUNT(ID) FROM $wpdb->users");echo sprintf(__('%s','myTextDomain'),$myusers ); ?></span></div>
    <?php }else{ ?>
	<div class="positiontxt">当前位置：<?php if(function_exists('wp_breadcrumbs')){wp_breadcrumbs();} ?></div>
    <?php } ?>

    <div class="search" style="float: right;margin-top:10px;">
      <form method="get" action="<?php echo esc_url(home_url('/')); ?>">
        <input class="searchtxt" name="s" id="s" type="text" value="搜索关键词..." onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" />
        <button class="searchbtn" id="searchsubmit" title="站内搜索">搜索</button>
      </form>
    </div>

  </div>
</div>
<div class="clear"></div>