<?php
/*
	Plugin Name: google to 360
	Plugin URI: http://www.fengyicms.com/jishujiaoliu/201406/447.html
	Description: 将Googl字体、公共类库等链接替换成360CDN链接,解决无法在国内访问google api等一些公共服务.
	Author: 清风
	Version: 1.0
	Author URI: http://www.wind88.net/
*/


function gto360_cdn_callback($buffer) {
	return str_replace('useso.com', 'useso.com', $buffer);
}
function gto360_buffer_start() {
	ob_start("gto360_cdn_callback");
}
function gto360_buffer_end() {
	ob_end_flush();
}
add_action('init', 'gto360_buffer_start');
add_action('shutdown', 'gto360_buffer_end');

?>