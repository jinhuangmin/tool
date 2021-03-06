<?php
add_filter('pre_option_link_manager_enabled','__return_true');
add_theme_support('post-thumbnails');
set_post_thumbnail_size(360,225,true);
remove_action('pre_post_update','wp_save_post_revision');
add_action('wp_print_scripts','disable_autosave');
function disable_autosave(){wp_deregister_script('autosave');}
register_nav_menus(array('mainmenu'=>'主菜单'));
register_nav_menus(array('footmenu'=>'底部菜单'));
add_filter('nav_menu_css_class','my_css_attributes_filter',100,1);
add_filter('nav_menu_item_id','my_css_attributes_filter',100,1);
add_filter('page_css_class','my_css_attributes_filter',100,1);
function my_css_attributes_filter($var){return is_array($var)?array_intersect($var,array('current-menu-item','current-menu-ancestor','current-post-ancestor')):'';}
add_filter('the_author_posts_link','cis_nofollow_the_author_posts_link');
function cis_nofollow_the_author_posts_link($link){return str_replace('<a href=','<a rel="external nofollow" href=',$link);}
remove_filter('the_content','wptexturize');
function par_pagenavi($range=9){
  global $paged,$wp_query;
  if(!$max_page){$max_page=$wp_query->max_num_pages;}
  if($max_page>1){echo"<div class=\"page\"><ul>";
  if(!$paged){$paged=1;}
  echo"<li class=\"maxpage\">共 $max_page 页</li>";
  if($paged!=1){echo"<li><a href=\"".get_pagenum_link(1)."\" title=\"首页\"><<</a></li>";}
  if($max_page >1){
  if($paged!=1){echo"<li><a href=\"".get_pagenum_link($paged-1)."\" title=\"上一页\"><</a></li>";}
  if($max_page>$range){
  if($paged<$range){for($i=1;$i<=($range+1);$i++){echo"<li";
  if($i==$paged)echo" class=\"pagecur\"";echo "><a href=\"".get_pagenum_link($i)."\" title=\"第 $i 页\">$i</a></li>";}}
  elseif($paged>=($max_page-ceil(($range/2)))){
  for($i=$max_page-$range;$i<=$max_page;$i++){echo"<li";
  if($i==$paged)echo" class=\"pagecur\"";echo"><a href=\"".get_pagenum_link($i)."\" title=\"第 $i 页\">$i</a></li>";}}
  elseif($paged>=$range&&$paged<($max_page-ceil(($range/2)))){
  for($i=($paged-ceil($range/2));$i<=($paged+ceil(($range/2)));$i++){echo"<li";
  if($i==$paged)echo" class=\"pagecur\"";echo"><a href=\"".get_pagenum_link($i)."\" title=\"第 $i 页\">$i</a></li>";}}}
  else{for($i=1;$i<=$max_page;$i++){echo"<li";
  if($i==$paged)echo" class=\"pagecur\"";echo"><a href=\"" . get_pagenum_link($i) ."\" title=\"第 $i 页\">$i</a></li>";}}
  if($paged!=$max_page){echo"<li><a href=\"" . get_pagenum_link($paged+1) . "\" title=\"下一页\">></a></li>";}}
  if($paged!=$max_page){echo"<li><a href=\"" . get_pagenum_link($max_page) . "\" title=\"末页\">>></a></li>";}
  echo"</ul></div>";}}
function getPostViews($postID){
  $count_key='post_views_count';
  $count=get_post_meta($postID,$count_key,true);
  if($count==''){delete_post_meta($postID,$count_key);add_post_meta($postID,$count_key,'0');return "0";}
  return''.$count.'';}
function setPostViews($postID){
  $count_key='post_views_count';
  $count=get_post_meta($postID,$count_key,true);
  if($count==''){$count=0;delete_post_meta($postID,$count_key);add_post_meta($postID,$count_key,'0');
  }else{$count++;update_post_meta($postID,$count_key,$count);}}
add_action('phpmailer_init','mail_smtp');
function mail_smtp($phpmailer){
  $phpmailer->FromName=''.get_option("blogname").'';
  $phpmailer->Host=''.get_option("blog_mail_host").'';
  $phpmailer->Port=''.get_option("blog_mail_port").'';
  $phpmailer->Username=''.get_option("blog_mail_username").'';
  $phpmailer->Password=''.get_option("blog_mail_password").'';
  $phpmailer->From=''.get_option("blog_mail_from").'';
  $phpmailer->SMTPAuth=true;
  $phpmailer->SMTPSecure='';
  $phpmailer->IsSMTP();}
function comment_mail_notify($comment_id){
  $admin_email=get_bloginfo('admin_email');
  $comment=get_comment($comment_id);
  $comment_author_email=trim($comment->comment_author_email);
  $parent_id=$comment->comment_parent?$comment->comment_parent:'';
  $to=$parent_id?trim(get_comment($parent_id)->comment_author_email):'';
  $spam_confirmed=$comment->comment_approved;
  if(($parent_id!='')&&($spam_confirmed!='spam')&&($to!=$admin_email)&&($comment_author_email==$admin_email)){
    $wp_email='no-reply@'.preg_replace('#^www\.#','',strtolower($_SERVER['SERVER_NAME']));
    $subject='您在【'.get_option("blogname").'】的评论有了新的回复';
    $message='
    <div style="font:14px 宋体;padding:0px 20px;border:1px solid #ccc;max-width:600px;margin:0 auto;">
      <p>'.trim(get_comment($parent_id)->comment_author).'，您好！</p>
      <p>您曾在【'.get_option("blogname").'】中的《'.get_the_title($comment->comment_post_ID).'》上发表了评论：<br /><br /><font color="#eb5753">'.nl2br(get_comment($parent_id)->comment_content).'</font></p>
      <p>'.trim($comment->comment_author).' 给您的回复如下：<br /><br /><font color="#eb5753">'.nl2br($comment->comment_content).'</font></p>
      <p>您可以点击 <a href="'.htmlspecialchars(get_comment_link($parent_id,array('type'=>'comment'))).'" target="_blank">查看回复的完整內容</a></p>
      <p>欢迎再次光临 <a href="'.get_option('home').'" target="_blank">'.get_option('blogname').'</a></p>
      <p style="color:#999">（此邮件由系统自动发出，请勿回复！）</p>
    </div>';
  $message=convert_smilies($message);
  $from="From: \"".get_option('blogname')."\" <$wp_email>";
  $headers="$from\nContent-Type:text/html; charset=".get_option('blog_charset')."\n";
  wp_mail($to,$subject,$message,$headers);}}
add_action('comment_post','comment_mail_notify');
function zlphp_usecheck($incoming_comment){
  $isSpam=0;
  if(trim($incoming_comment['comment_author'])==''.get_option("blog_protection_name").'')
    $isSpam=1;
  if(trim($incoming_comment['comment_author_email'])==''.get_option("blog_protection_mail").'')
    $isSpam=1;
  if(!$isSpam)
    return $incoming_comment;
  wp_die('请勿冒充站长发表评论！');}
  if(!is_user_logged_in())
add_filter('preprocess_comment','zlphp_usecheck');
function search_filter($query){
if($query->is_search){$query->set('post_type','post');}
return $query;}
add_filter('pre_get_posts','search_filter');
function zlphp_comment_post($incoming_comment){
$pattern='/[一-龥]/u';
if(!preg_match($pattern,$incoming_comment['comment_content'])){
wp_die("请用中文发表评论！");}
return($incoming_comment);}
add_filter('preprocess_comment','zlphp_comment_post');
function mytheme_comment($comment,$args,$depth){
  $GLOBALS['comment']=$comment; ?>
  <div class="acommentmsg" data-id="<?php comment_ID() ?>" id="comment-<?php comment_ID() ?>">
    <div class="fl clistavatar"><?php echo get_avatar($comment,$size='50'); ?></div>
	<div class="fr" style="font-size:20px;color:#eb5753;"><?php global $comment_ids;$comment_floor=$comment_ids[get_comment_id()];echo $comment_floor.'#'; ?></div>
    <div class="clistcontent" style="margin-left:60px;">
      <div class="athead"><span class="light"><?php echo get_comment_author_link() ?></span><?php echo get_comment_date().get_comment_time() ?>　<span class="light"><?php comment_reply_link(array_merge($args,array('depth'=>$depth,'max_depth'=>$args['max_depth']))) ?></span></div>
      <div class="atcontent">
        <div class="replycontent"><?php comment_text(); ?><?php if($comment->comment_approved=='0')echo'<font color="#f60"><b>您的评论正在审核！</b></font>'; ?></div>
        </div>
    </div>
  </div>
<?php
}include_once TEMPLATEPATH.'/options.php';
function hu_popuplinks($text){$text=preg_replace('/<a (.+?)>/i',"<a $1 target='_blank'>",$text);return $text;}
add_filter('get_comment_author_link','hu_popuplinks');
function wp_breadcrumbs(){
  $delimiter=' >> ';
  $home='教程帮助';
  $search_result=get_option('op_search_result');
  $posts_tagged=get_option('op_posts_tagged');
  $posted_author=get_option('op_posted_author');
  $error_404=get_option('op_error_404');
  $page_navi=get_option('op_page_navi');
  $before='';
  $after='';
  if(!is_home()&&!is_front_page()||is_paged()){;
    global $post;
    $homeLink=home_url();
    echo'<a href="http://www.cnzoom.com/guide/tool.html">'.$home.'</a>'.$delimiter.'';
    if(is_category()){
      global $wp_query;
      $cat_obj=$wp_query->get_queried_object();
      $thisCat=$cat_obj->term_id;
      $thisCat=get_category($thisCat);
      $parentCat=get_category($thisCat->parent);
      if($thisCat->parent!=0)echo(get_category_parents($parentCat,TRUE,''.$delimiter.''));
      echo $before.single_cat_title('',false).$after;}
      elseif(is_day()){
      echo''.get_the_time('Y').'年'.get_the_time('m').'月'.get_the_time('d').'日发布的'.get_option('blog_article_nickname').''.$after.'';}
      elseif(is_month()){
      echo''.get_the_time('Y').'年'.get_the_time('m').'月发布的'.get_option('blog_article_nickname').''.$after.'';}
      elseif(is_year()){
      echo''.get_the_time('Y').'年发布的'.get_option('blog_article_nickname').''.$after.'';}
      elseif(is_single()&&!is_attachment()){
      if(get_post_type()!='post'){
        $post_type=get_post_type_object(get_post_type());
        $slug=$post_type->rewrite;
        echo'<a href="'.$homeLink.'/'.$slug['slug'].'/">'.$post_type->labels->singular_name.'</a>'.$delimiter.'';
        echo $before.get_the_title().$after;}
        else{$cat=get_the_category();$cat=$cat[0];
        echo get_category_parents($cat,TRUE,''.$delimiter.'');
        echo $before.get_the_title().$after;}}
        elseif(!is_single()&&!is_page()&&get_post_type()!='post'&&!is_404()){
      $post_type=get_post_type_object(get_post_type());
      echo $before.$post_type->labels->singular_name.$after;}
      elseif(is_attachment()){
      $parent=get_post($post->post_parent);
      $cat=get_the_category($parent->ID);$cat=$cat[0];
      echo get_category_parents($cat,TRUE,''.$delimiter.'');
      echo'<a href="'.get_permalink($parent).'">'.$parent->post_title.'</a>'.$delimiter.'';
      echo $before.get_the_title().$after;}
      elseif(is_page()&&!$post->post_parent){
      echo $before.get_the_title().$after;}
      elseif(is_page()&&$post->post_parent ){
      $parent_id=$post->post_parent;
      $breadcrumbs=array();
      while($parent_id){
        $page=get_page($parent_id);
        $breadcrumbs[]='<a href="'.get_permalink($page->ID).'">'.get_the_title($page->ID).'</a>';
        $parent_id=$page->post_parent;}
      $breadcrumbs=array_reverse($breadcrumbs);
      foreach($breadcrumbs as $crumb)echo $crumb.''.$delimiter.'';
      echo $before.get_the_title().$after;}
      elseif(is_search()){
      echo $before.''.$search_result.''.get_search_query().'（搜索结果）'.$after;}
      elseif(is_tag()){
      echo $before.''.$posts_tagged.''.single_tag_title('',false).'（标签）'.$after;}
      elseif(is_author()){
       global $author;
      $userdata=get_userdata($author);
      echo $before.''.$posted_author.''.$userdata->display_name.'发布的'.get_option('blog_article_nickname').''.$after;}
      elseif(is_404()){
      echo $before.''.$error_404.'404错误'.$after;}
    if(get_query_var('paged')){
      if(is_category()||is_day()||is_month()||is_year()||is_search()||is_tag()||is_author())echo'（第';
      echo __(''.$page_navi.'').''.get_query_var('paged');
      if(is_category()||is_day()||is_month()||is_year()||is_search()||is_tag()||is_author())echo'页）';};}}
$new_meta_boxes=array(
	"demo_url"=>array("name"=>"demo_url","std"=>"","title"=>"演示地址："),
	"download_url"=>array("name"=>"download_url","std"=>"","title"=>"会员下载地址："));
function new_meta_boxes(){
    global $post,$new_meta_boxes;
	foreach($new_meta_boxes as $meta_box){
	    $meta_box_value=get_post_meta($post->ID,$meta_box['name'].'',true);
		if($meta_box_value=="")
		    $meta_box_value=$meta_box['std'];
		echo'<input type="hidden" name="'.$meta_box['name'].'_noncename" id="'.$meta_box['name'].'_noncename" value="'.wp_create_nonce(plugin_basename(__FILE__)).'" />';
		echo'<p>'.$meta_box['title'].'<input type="text" name="'.$meta_box['name'].'" size="80" value="'.$meta_box_value.'"/></p>';}} 
function create_meta_box(){
    global $theme_name;
	if (function_exists('add_meta_box')){add_meta_box('new-meta-boxes','自定义选项','new_meta_boxes','post','normal','high');}} 
function save_postdata($post_id){
    global $post,$new_meta_boxes;
	foreach($new_meta_boxes as $meta_box){
	    if(!wp_verify_nonce($_POST[$meta_box['name'].'_noncename'],plugin_basename(__FILE__))){return $post_id;}
		if('page'==$_POST['post_type']){if(!current_user_can('edit_page',$post_id))return $post_id;}
		else{if(!current_user_can('edit_post',$post_id))return $post_id;}
		$data=$_POST[$meta_box['name'].''];
		if(get_post_meta($post_id,$meta_box['name'].'')=="")
		    add_post_meta($post_id,$meta_box['name'].'',$data,true);
		elseif($data!=get_post_meta($post_id,$meta_box['name'].'',true))
		    update_post_meta($post_id,$meta_box['name'].'',$data);
		elseif($data=="")
		    delete_post_meta($post_id,$meta_box['name'].'',get_post_meta($post_id,$meta_box['name'].'',true));}} 
add_action('admin_menu','create_meta_box');
add_action('save_post','save_postdata'); 
function remove_meta_boxes(){
remove_meta_box('postcustom','post','normal');
remove_meta_box('trackbacksdiv','post','normal');
remove_meta_box('postcustom','page','normal');
remove_meta_box('trackbacksdiv','page','normal');}
add_action('admin_init','remove_meta_boxes');
?>