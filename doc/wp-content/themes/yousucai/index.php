<!--

<?php get_header(); ?>

<div class="main">
  <div class="common">
    <?php if(is_home()&&!is_paged()){ ?>
	<div class="homeslidertoppost">
	  <div class="sliderbox">
        <div class="slideshow">
		  <ul>
            <?php if(get_option('blog_slider_img1')!=""){ ?>
		    <li><a href="<?php echo get_option('blog_slider_url1'); ?>" title="<?php echo get_option('blog_slider_name1'); ?>" target="_blank"><img src="<?php echo get_option('blog_slider_img1'); ?>" alt="<?php echo get_option('blog_slider_name1'); ?>" width="760" height="384" /></a></li>
		    <?php } ?>
            <?php if(get_option('blog_slider_img2')!=""){ ?>
		    <li><a href="<?php echo get_option('blog_slider_url2'); ?>" title="<?php echo get_option('blog_slider_name2'); ?>" target="_blank"><img src="<?php echo get_option('blog_slider_img2'); ?>" alt="<?php echo get_option('blog_slider_name2'); ?>" width="760" height="384" /></a></li>
		    <?php } ?>
            <?php if(get_option('blog_slider_img3')!=""){ ?>
		    <li><a href="<?php echo get_option('blog_slider_url3'); ?>" title="<?php echo get_option('blog_slider_name3'); ?>" target="_blank"><img src="<?php echo get_option('blog_slider_img3'); ?>" alt="<?php echo get_option('blog_slider_name3'); ?>" width="760" height="384" /></a></li>
		    <?php } ?>
            <?php if(get_option('blog_slider_img4')!=""){ ?>
		    <li><a href="<?php echo get_option('blog_slider_url4'); ?>" title="<?php echo get_option('blog_slider_name4'); ?>" target="_blank"><img src="<?php echo get_option('blog_slider_img4'); ?>" alt="<?php echo get_option('blog_slider_name4'); ?>" width="760" height="384" /></a></li>
		    <?php } ?>
            <?php if(get_option('blog_slider_img5')!=""){ ?>
		    <li><a href="<?php echo get_option('blog_slider_url5'); ?>" title="<?php echo get_option('blog_slider_name5'); ?>" target="_blank"><img src="<?php echo get_option('blog_slider_img5'); ?>" alt="<?php echo get_option('blog_slider_name5'); ?>" width="760" height="384" /></a></li>
		    <?php } ?>
            <?php if(get_option('blog_slider_img6')!=""){ ?>
		    <li><a href="<?php echo get_option('blog_slider_url6'); ?>" title="<?php echo get_option('blog_slider_name6'); ?>" target="_blank"><img src="<?php echo get_option('blog_slider_img6'); ?>" alt="<?php echo get_option('blog_slider_name6'); ?>" width="760" height="384" /></a></li>
		    <?php } ?>
          </ul>
		  <a href="javascript:;" class="btnprev"></a><a href="javascript:;" class="btnnext"></a>
        </div>
      </div>
      <div class="toppostbox">
	    <ul>
          <?php $popular=new WP_Query('orderby=comment_count&showposts=5');$i=1;if(have_posts()):while($popular->have_posts()):$popular->the_post(); ?>
	      <li>
		    <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>" target="_blank"><?php if(has_post_thumbnail()){ ?><?php the_post_thumbnail('thumbnail'); ?><?php }else{ ?><img src="<?php bloginfo('template_url'); ?>/images/nopic.jpg" alt="<?php the_title(); ?>" width="96" height="60" /><?php } ?></a>
			<div class="toppostinfo">
			  <div class="topposttitle"><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>" target="_blank"><?php the_title(); ?></a></div>
			  <div class="toppostdate">日期：<?php the_time('Y-m-d') ?></div>
			  <div class="toppostdate">浏览：<?php echo getPostViews(get_the_ID()); ?>　评论：<?php comments_number('0','1','%');if(get_post_meta($post->ID,'demo_url',true)): ?>　<a class="light" href="<?php bloginfo('template_url'); ?>/go?<?php echo get_post_meta($post->ID,'demo_url',true) ?>" rel="external nofollow" target="_blank">演示</a><?php endif; ?></div>
			</div>
			<div class="toppostrank"><?php echo $i++ ?></div>
		  </li>
		  <?php endwhile;endif; ?>
	    </ul>
	  </div>
	</div>	
	<div class="clear"></div>
    <?php } ?>
	<div class="homelistbox">
	  <ul>
        <?php global $query_string;query_posts($query_string.'&ignore_sticky_posts=1');$postnun=1;$i=1;if(have_posts()):while(have_posts()):the_post();?>
		<li class="listbox<?php if($i%4!=0){ ?> mr20<?php }$i++; ?>">
		  <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>" target="_blank"><?php if(has_post_thumbnail()){ ?><?php the_post_thumbnail('thumbnail'); ?><?php }else{ ?><img src="<?php bloginfo('template_url'); ?>/images/nopic.jpg" alt="<?php the_title(); ?>" width="260" height="165" /><?php } ?></a>
          <div class="summary">
            <div class="summarytxt">
              <?php the_excerpt(); ?>
            </div>
          </div>
          <div class="listinfo">
            <div class="listtitle"><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>" target="_blank"><?php the_title(); ?></a></div>
			<div class="listdate"><?php the_time('Y-m-d') ?></div>
            <div class="listtag"><div class="seenum"><?php echo getPostViews(get_the_ID()); ?></div><?php the_tags('','',''); ?></div>
            <div class="listcategory">
            <div style="float:left;">分类：<?php the_category('&nbsp;&nbsp;') ?></div>　
			<span style="padding-right:5px;float:right;">浏览：<?php echo getPostViews(get_the_ID()); ?></span>
			

            评论：<?php comments_number('0','1','%');if(get_post_meta($post->ID,'demo_url',true)): ?>　<a class="light" href="<?php bloginfo('template_url'); ?>/go?<?php echo get_post_meta($post->ID,'demo_url',true) ?>" rel="external nofollow" target="_blank">演示</a><?php endif; ?>
			
			
            </div>
          </div>
        </li>
		<?php $postnun++;endwhile;else: ?>
		<li class="nothing"><?php if(get_option('blog_nothing')!=""){echo get_option('blog_nothing');}else{ ?>抱歉，暂无相关文章！<?php } ?></li>
		<?php endif; ?>
      </ul>
	</div>
	<div class="clear"></div>
    <?php par_pagenavi(); ?>
  </div>
</div>
<div class="clear"></div>
<?php get_footer(); ?>

-->


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>你访问的页面可能不存在 返回沃姆装修辅助工具首页</title>
<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,
fieldset,input,textarea,p,blockquote,th,td{margin:0;padding:0}
body{color:#000;background:#fd7572;font-size:12px;font-family:tahoma,arial,\5b8b\4f53,sans-serif;padding-top:50px;}
th,td{text-align:left;vertical-align:top}
h1,h2,h3,h4,h5,h6{font-size:1em;font-weight:normal}
a{color:#14647d;text-decoration:none;font-family:tahoma,arial,\5b8b\4f53,sans-serif;_font-family:arial,sans-serif}
a:hover{text-decoration:underline}
.main{width:630px;background: #fff;margin:0px auto;border-radius: 10px;padding-top:40px;box-sizing:border-box;overflow: hidden;}
.main_box{text-align: center;}
.main_box img{display: inline-block;margin:0 auto;}
.main_box .title{font-size:108px;font-weight: bold;color:#333;}
.main_box .hint{font-size:18px;color:#9299a8;}
.main_box .link{margin:60px 0 30px;text-align: center;overflow: hidden;}
.main_box .link a{padding:0 20px;color: #f00;font-size: 18px;}
.main_box .return{font-size:32px ;color:#9299a8;}
.lianxi{overflow: hidden;line-height: 30px;}
.lianxi img{vertical-align: middle;}

</style>
</head>

<body>

<div class="main">
	<div class="main_box">
		<img src="https://img.alicdn.com/imgextra/i4/800803731/TB2z4nfkvNNTKJjSspeXXaSwpXa_!!800803731.png" />
		<div class="title">404</div>
		<div class="hint">你访问的页面不存在，请检查您的网址或联系我们</div>
		<div class="link">
			<a target="_self" href="https://zxn.taobao.com/designer_detail.htm?&designerId=1016893&productType=0&site=3">天猫模板</a>
			<a target="_self" href="https://zxn.taobao.com/designer_detail.htm?&designerId=1016893&productType=0&site=2">淘宝模板</a>
			<a target="_self" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.1998546510.6.qvSIcI&designerId=1016893&productType=0&site=1003">无线模板</a>
			<a target="_self"  href="http://cnzoom.com/#j_ties">模块秀</a>
		</div>
		<hr />
		<p class="lianxi">
			<span>旺旺联系：</span><a target="_blank" href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=1&charset=utf-8"><img border="0" src="http://amos.alicdn.com/realonline.aw?v=2&uid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&site=cntaobao&s=1&charset=utf-8" alt="点这里给我发消息" /></a>
			<span style="padding-left:20px;">QQ联系：</span><a target="blank" href="tencent://message/?uin=11627067&amp;Site=点击这里给我发消息&amp;Menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=1:11627067:1" alt="点击这里给我发消息"></a>
		</p>
		<div style="margin:30px 0 20px;"><a class="return" href="http://www.cnzoom.com/">返回沃姆设计首页</a></div>
	</div>
</div>
</body>
</html>

