<?php
/*
Template Name:友情链接
*/
?>
<?php get_header(); ?>

<?php setPostViews(get_the_ID()); ?>
<div class="main">
  <div class="common">
    <?php if(have_posts()):while(have_posts()):the_post(); ?>
	<div class="contentbox">
      <div class="contenttitle">
        <h1><?php the_title(); ?></h1>
	  </div>
      <div class="contentview">浏览次数<span><?php echo getPostViews(get_the_ID()); ?></span></div>
      <div class="contenttxt">
        <div class="clear"></div>
        <?php the_content(); ?>
		<div class="linkpage">
          <ul>
            <?php $default_ico=get_template_directory_uri().'/images/link.ico';$bookmarks=get_bookmarks('title_li=&orderby=id&category='.get_option("blog_link_page").'');if(!empty($bookmarks)){foreach($bookmarks as $bookmark){echo'<li><img src="',$bookmark->link_url,'/favicon.ico" onerror="javascript:this.src=\'',$default_ico,'\'" width="16" height="16" /><a href="',$bookmark->link_url,'" title="',$bookmark->link_description,'"',$bookmark->link_notes,' target="_blank">',$bookmark->link_name,'</a></li>';}}?>
	      </ul>
	    </div>
      </div>
    </div>
    <div class="commentsbox" style="display:none;">
      <div class="commentsnum">全部留言：<?php comments_number('<span>0</span>条','<span>1</span>条','<span>%</span>条','','留言已关闭'); ?></div>
      <?php comments_template('/guestbooks.php',true); ?>
    </div>
    <div class="clear"></div>
	<?php endwhile;endif; ?>
  </div>
</div>
<div class="clear"></div>
<?php get_footer(); ?>