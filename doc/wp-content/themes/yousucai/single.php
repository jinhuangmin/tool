<?php get_header(); ?>

<?php setPostViews(get_the_ID()); ?>
<div class="main">
  <div class="common">
    <?php if(have_posts()):while(have_posts()):the_post(); ?>
	<div class="contentbox">
      <div class="contenttitle">
        <h1><?php the_title(); ?></h1>
        <span class="info">日期：<?php the_time('Y-m-d') ?>　评论：<?php comments_number('0','1','%');?></span>
	  </div>
      <div class="contentview">浏览次数<span><?php echo getPostViews(get_the_ID()); ?></span></div>
      <div class="demodownload"><?php if(get_post_meta($post->ID,'demo_url',true)): ?><a href="<?php bloginfo('template_url'); ?>/go?<?php echo get_post_meta($post->ID,'demo_url',true) ?>" rel="external nofollow" target="_blank">在线演示</a><?php endif;if(get_post_meta($post->ID,'download_url',true)): ?><a href="<?php bloginfo('template_url'); ?>/go?<?php echo get_post_meta($post->ID,'download_url',true) ?>" rel="external nofollow" target="_blank">百度网盘 会员下载</a><?php endif;if(get_option('blog_sponsor')!=""){ ?><a href="<?php bloginfo('template_url'); ?>/go?<?php echo get_option('blog_sponsor'); ?>" rel="external nofollow" target="_blank">赞助本站</a><?php } ?></div>
      <div class="contenttxt">
        <div class="clear"></div>
        <?php the_content(); ?>
        <p>&nbsp;</p>
      </div>
    </div>
    <div class="contenttagbox">
      <div class="contenttaglist"><span>标签</span><?php the_tags('','',''); ?></div>
      <div class="contentbdshare">
        <div id="bdshare" class="bdshare_t bds_tools_32 get-codes-bdshare">
		  <a class="bds_sqq"></a>
		  <a class="bds_qzone"></a>
		  <a class="bds_tqq"></a>
		  <a class="bds_tsina"></a>
		  <a class="bds_mshare"></a>
		  <span class="bds_more"></span>
		  <a class="shareCount"></a>
		</div>
      </div>
    </div>
    <div class="contentprevnextbox">
      <div class="contentprev"><?php if(get_option('blog_article_unit')!=""){ ?><?php previous_post_link('上一'.get_option("blog_article_unit").get_option("blog_article_nickname").'：%link'); ?><?php }else{ ?><?php previous_post_link('上一篇'.get_option("blog_article_nickname").'：%link'); ?><?php } ?></div>
      <div class="contentnext"><?php if(get_option('blog_article_unit')!=""){ ?><?php next_post_link('下一'.get_option("blog_article_unit").get_option("blog_article_nickname").'：%link'); ?><?php }else{ ?><?php next_post_link('下一篇'.get_option("blog_article_nickname").'：%link'); ?><?php } ?></div>
    </div>
    <?php if(get_option('blog_statement')!=""){ ?><div class="declarationbox"><b>特别声明：</b><?php echo get_option('blog_statement'); ?></div><?php } ?>
    <?php if(get_option('blog_ads')!=""){ ?><div class="adsbox"><?php echo get_option('blog_ads'); ?></div><?php } ?>
    
    <div class="commentsbox" style="display:none;">
      <div class="commentsnum">全部评论：<?php comments_number('<span>0</span>条','<span>1</span>条','<span>%</span>条','','评论已关闭'); ?></div>
      <?php comments_template('',true); ?>
    </div>

    <div class="clear"></div>
	<?php endwhile;endif; ?>
  </div>
</div>
<div class="clear"></div>
<?php get_footer(); ?>