<?php if(is_home()&&!is_paged()){ ?>
<div class="footertop">
  <div class="common">
    <div class="footertoplist">
      <ul>
        <li class="footertoplistbox" style="width:100%;">
          <div class="tagtitle">热门标签</div>
          <div class="taglist">
		    <div class="tagcloud"><?php wp_tag_cloud('smallest=12&largest=12&number='.get_option("blog_tag_num").'&unit=px&orderby=count&order=DESC'); ?></div>
		  </div>
        </li>
        <li class="footertoplistbox" style="display:none;">
          <div class="commenttitle">最新评论</div>
          <div class="commentlist">
            <?php global $wpdb;$sql="SELECT DISTINCT ID,post_title,post_password,comment_ID,comment_post_ID,comment_author,comment_date,comment_approved,comment_type,comment_author_url,SUBSTRING(comment_content,1,300) AS com_excerpt FROM $wpdb->comments LEFT OUTER JOIN $wpdb->posts ON ($wpdb->comments.comment_post_ID=$wpdb->posts.ID) WHERE comment_approved='1' AND comment_type='' AND comment_author!='admin' AND post_password='' ORDER BY comment_date DESC LIMIT 10";$comments=$wpdb->get_results($sql);$output=$pre_HTML;foreach($comments as $comment){$output.="\n<p><a href=\"".get_permalink($comment->ID)."#comment-".$comment->comment_ID."\" title=\"".strip_tags($comment->comment_author)."在《".$comment->post_title."》上发表的评论：".strip_tags($comment->com_excerpt)." [".strip_tags($comment->comment_date)."]\" target=\"_blank\">".strip_tags($comment->com_excerpt)."</a></p>";} $output.=$post_HTML;echo $output; ?>
          </div>
        </li>
        <li class="footertoplistbox" style="margin-right:0;display:none;">
          <ul>
		    <?php wp_list_bookmarks('orderby=id&category='.get_option("blog_link_home").''); ?>
		  </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="clear"></div>
<?php } ?>
<div class="footer" style="height:120px;text-align:center;color:#888;line-height:28px;">

  <div class="fcontent" style="padding:20px 0;">
    <div>专注天猫淘宝模板创意设计与开发,用心做好模板&nbsp;—&nbsp;沃姆设计</div>
    <div>
      <a href="http://www.cnzoom.com/" target="_blank" rel="nofollow" style="color:#888;">沃姆设计</a>
      <a href="http://www.tencent.com/zh-cn/le/copyrightstatement.shtml" target="_blank" rel="nofollow" style="color:#888;">版权所有</a>
    </div>
    <div style="width:300px;margin:0 auto; padding:3px 0;">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802005272" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <img src="" style="float:left;">
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33010802005272号</p>
        </a>
    </div>
  </div>

  <div class="common" style="display:none;">
    <div class="left"><?php $footmenu=array('container'=>false,'echo'=>false,'items_wrap'=>'%3$s','depth'=>0,'theme_location'=>'footmenu');echo strip_tags(wp_nav_menu($footmenu),'<a>');if(get_option('blog_qq')!=""){ ?><a href="<?php bloginfo('template_url'); ?>/go?http://wpa.qq.com/msgrd?v=3&uin=<?php echo get_option('blog_qq'); ?>&site=qq&menu=yes" target="_blank">联系站长</a> <?php }echo get_option('blog_stats'); ?></div>
    <div class="right">Powered by <a href="<?php bloginfo('template_url'); ?>/go?http://wordpress.org" rel="external nofollow" target="_blank">WordPress</a>,　Theme by <a href="http://www.zlphp.com" target="_blank">郑力</a>,　<?php echo get_option('blog_copyright'); ?></div>
  </div>
</div>

<div class="sidebar">
    <div class="tel">
        <div class="icon"></div>
        <p class="title">问题未解决<span style="padding-left:5px;display: block;">？</span></p>
        <div class="sub-nav">
            <div class="list">
                <div class="sub_icon f1"></div>
                <p><a href="http://www.taobao.com/webww/ww.php?ver=3&amp;touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&amp;siteid=cntaobao&amp;status=1&amp;charset=utf-8" target="_blank" rel="noopener"><img class="tb" src="http://amos.alicdn.com/realonline.aw?v=2&amp;uid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&amp;site=cntaobao&amp;s=1&amp;charset=utf-8" alt="点这里给我发消息"></a></p>
            </div>
            <div class="list">
                <div class="sub_icon f2"></div>
                <p><a target="blank" href="tencent://message/?uin=11627067&amp;Site=点击这里给我发消息&amp;Menu=yes"><img class="tb" src="http://wpa.qq.com/pa?p=1:11627067:1" alt="点击这里给我发消息"></a></p>
            </div>
            <div class="list">
                <div class="sub_icon f3"></div>
                <p>业务咨询</p>
                <p class="number">15355003615</p>
            </div>
            <div class="list">
                <div class="sub_icon f3"></div>
                <p>售后服务</p>
                <p class="number">18072803854</p>
            </div>
            <div class="list">
                <div class="sub_icon f4"></div>
                <img src="http://www.cnzoom.com/en/images/weixin.jpg" />
            </div>
            <div class="list">
                <div class="sub_icon f5"></div>
                <p>杭州市滨江区江南岸艺术园区A幢-1215室</p>
            </div>
        </div>
    </div>
    <a href="#top" class="gotop"><i></i></a>
</div>


<script type="text/javascript">/*<![CDATA[*/document.write("<scr"+"ipt src=\"<?php bloginfo('template_url'); ?>/include/jquery.1.4.2.min.js\"></sc"+"ript>")/*]]>*/</script>
<script type="text/javascript">/*<![CDATA[*/document.write("<scr"+"ipt src=\"<?php bloginfo('template_url'); ?>/include/custom.js\"></sc"+"ript>")/*]]>*/</script>
<?php if(!is_single()&&!is_page()&&!is_404()){ ?>
<script type="text/javascript">/*<![CDATA[*/document.write("<scr"+"ipt src=\"<?php bloginfo('template_url'); ?>/include/index.js\"></sc"+"ript>")/*]]>*/</script>
<?php } if(is_home()&&!is_paged()){ ?>
<script type="text/javascript">/*<![CDATA[*/document.write("<scr"+"ipt src=\"<?php bloginfo('template_url'); ?>/include/home.js\"></sc"+"ript>")/*]]>*/</script>
<?php } if(is_single()){ ?>
<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=89860593" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000)</script>
<?php } ?>


<script type="text/javascript" src="http://tajs.qq.com/stats?sId=35094907" charset="UTF-8"></script>

</body>
</html>