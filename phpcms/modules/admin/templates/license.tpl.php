<?php
defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header');?>
<style>
#main { padding:20px}

#list li{ height:30px; line-height:30px; border-bottom:1px solid #fff; width:700px; float:left; background:#b9d8f8; }
#list .xi { float:left;text-align:center; border-right:1px solid #fff; overflow:hidden; height:30px}
#list .id{ width:30px; height:30px; line-height:30px; background:#fbe6d1}
#list .id input{ position:relative; top:8px;}
#list .idx{ width:50px}
#list .name{ width:160px; text-align:left; padding:0 15px}
#list .Pic{ width:80px; text-align:left; padding:0 15px}
#list .Title{width:180px; text-align:left; padding:0 15px}
#list .time{ width:104px; text-align:center;overflow:hidden;word-break:keep-all;white-space:nowrap; }
#main #pages{ text-align:left}
</style>

<div id="main">
   <div style="text-align: left; height: 100px; line-height: 100px; font-size: 24px; font-family: 微软雅黑; padding-left:50px">注册码:<?=$enc_text?></div> 
</div>

</body>
</html>