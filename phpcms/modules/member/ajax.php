<?php
/**
 * ajax
 */

defined('IN_PHPCMS') or exit('No permission resources.');
//pc_base::load_app_class('foreground');
pc_base::load_sys_class('format', '', 0);
pc_base::load_sys_class('form', '', 0);
pc_base::load_app_func('license','member');

class ajax {

        private $times_db;
        
        function __construct() {
                $this->http_user_agent = $_SERVER['HTTP_USER_AGENT'];
                $this->db = pc_base::load_model('member_model');
        }


public function register() {
		$this->_session_start();
		//获取用户siteid
		$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
		//定义站点id常量
		if (!defined('SITEID')) {
		   define('SITEID', $siteid);
		}
		$emls=rand(1000000,99999999);
		//加载用户模块配置
		$member_setting = getcache('member_setting');
		if(!$member_setting['allowregister']) {
			showmessage(L('deny_register'), 'index.php?m=member&c=index&a=login');
		}
		//加载短信模块配置
 		$sms_setting_arr = getcache('sms','sms');
		$sms_setting = $sms_setting_arr[$siteid];		
		
		header("Cache-control: private");
		if(isset($_POST)) {
			if($member_setting['enablcodecheck']=='1'){//开启验证码
				if ((empty($_SESSION['connectid']) && $_SESSION['code'] != strtolower($_POST['code']) && $_POST['code']!==NULL) || empty($_SESSION['code'])) {
					showmessage(L('code_error'));
				} else {
					$_SESSION['code'] = '';
				}
			}
		$member_detail = pc_base::load_model('member_model');
		$zxn_set_db = pc_base::load_model('zxn_set_model');
		$rk = $zxn_set_db->get_one(array('Web'=>'tbtool'));
		$userinfo['license'] = isset($_POST['license']) &&(preg_match("/^[a-z0-9A-Z_]{3,40}$/u",$_POST['license'])) ? $_POST['license'] : exit('注册码格式不正确');
		$key = $rk['CopyRight']; 
		$dec_text = decrypt($_POST['license'],$key); 
		if($dec_text!='gNo'){exit('注册码错误');}
			$userinfo = array();
			$userinfo['encrypt'] = create_randomstr(6);
			$userinfo['license']=$_POST['license'] ;
			if($_POST['info']['qq']==""){exit('QQ不能为空');}

			$userinfo['username'] = (isset($_POST['username']) ) ? $_POST['username'] : exit('用户名不正确，容许小写字母、数字（2-20位）');

			$userinfo['nickname'] = empty($_POST['nickname'])?$_POST['username']:((isset($_POST['nickname'])) ? $_POST['nickname'] :  exit('昵称不正确，容许汉字、字母、数字（2-20位）'));
			$userinfo['email'] = empty($_POST['email'])?$_POST['info']['qq'].'@qq.com':((isset($_POST['email']) && is_email($_POST['email'])) ? $_POST['email'] : exit('邮箱不正确'));
			$password2=$_POST['password2']?$_POST['password2']:$_POST['password'];
			$userinfo['password'] = $_POST['password']===$password2 ? $_POST['password'] : exit('密码不一致');

			$userinfo['modelid'] = isset($_POST['modelid']) ? intval($_POST['modelid']) : 10;
			$userinfo['regip'] = ip();
			$userinfo['point'] = $member_setting['defualtpoint'] ? $member_setting['defualtpoint'] : 0;
			$userinfo['amount'] = $member_setting['defualtamount'] ? $member_setting['defualtamount'] : 0;
			$userinfo['regdate'] = $userinfo['lastdate'] = SYS_TIME;
			$userinfo['siteid'] = $siteid;
			$userinfo['connectid'] = isset($_SESSION['connectid']) ? $_SESSION['connectid'] : '';
			$userinfo['from'] = isset($_SESSION['from']) ? $_SESSION['from'] : '';
			
			
			$this->verify_db = pc_base::load_model('member_verify_model');
		   if($member_detail->get_one(array('license'=>$userinfo['license']))) {exit('注册码已过期');}
			if($this->verify_db->get_one(array('username'=>$userinfo['username']))) {exit('用户名已存在');}
			if($this->verify_db->get_one(array('nickname'=>$userinfo['nickname']))) {exit('昵称已存在');}
			if($this->verify_db->get_one(array('email'=>$userinfo['email']))) {exit('QQ已存在,一个QQ只能绑定一个账号');}
			
			$memberbd = pc_base::load_model('member_model');
		    if($memberbd->get_one(array('username'=>$userinfo['username']))) {exit('用户名已存在');}
			if($memberbd->get_one(array('nickname'=>$userinfo['nickname']))) {exit('昵称已存在');}
			if($memberbd->get_one(array('email'=>$userinfo['email']))) {exit('QQ已存在,一个QQ只能绑定一个账号');}
			
			//手机强制验证
			
			if($member_setting[mobile_checktype]=='1'){
				//取用户手机号
				$mobile_verify = $_POST['mobile_verify'] ? intval($_POST['mobile_verify']) : '';
				if($mobile_verify=='') showmessage('请提供正确的手机验证码！', HTTP_REFERER);
 				$sms_report_db = pc_base::load_model('sms_report_model');
				$posttime = SYS_TIME-360;
				$where = "`id_code`='$mobile_verify' AND `posttime`>'$posttime'";
				$r = $sms_report_db->get_one($where,'*','id DESC');
 				if(!empty($r)){
					$userinfo['mobile'] = $r['mobile'];
				}else{
					exit('未检测到正确的手机号码！');
				}
 			}elseif($member_setting[mobile_checktype]=='2'){
				//获取验证码，直接通过POST，取mobile值
				$userinfo['mobile'] = isset($_POST['mobile']) ? $_POST['mobile'] : '';
			} 
			if($userinfo['mobile']!=""){
				if(!preg_match('/^1([0-9]{10})$/',$userinfo['mobile'])) {
					exit('请提供正确的手机号码！');
				}
			} 
 			unset($_SESSION['connectid'], $_SESSION['from']);
			
			if($member_setting['enablemailcheck']) {	//是否需要邮件验证
				$userinfo['groupid'] = 7;
			} elseif($member_setting['registerverify']) {	//是否需要管理员审核
				$modelinfo_str = $userinfo['modelinfo'] = isset($_POST['info']) ? array2string(array_map("safe_replace", new_html_special_chars($_POST['info']))) : '';
				$this->verify_db = pc_base::load_model('member_verify_model');
				unset($userinfo['lastdate'],$userinfo['connectid'],$userinfo['from']);
				$userinfo['modelinfo'] = $modelinfo_str;
				$this->verify_db->insert($userinfo);
				//showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=3');
				exit('409');
			} else {
				//查看当前模型是否开启了短信验证功能
				$model_field_cache = getcache('model_field_'.$userinfo['modelid'],'model');
				if(isset($model_field_cache['mobile']) && $model_field_cache['mobile']['disabled']==0) {
					$mobile = $_POST['info']['mobile'];
					if(!preg_match('/^1([0-9]{10})$/',$mobile)) showmessage(L('input_right_mobile'));
					$sms_report_db = pc_base::load_model('sms_report_model');
					$posttime = SYS_TIME-300;
					$where = "`mobile`='$mobile' AND `posttime`>'$posttime'";
					$r = $sms_report_db->get_one($where);
					if(!$r || $r['id_code']!=$_POST['mobile_verify']) exit('error_sms_code');//showmessage(L('error_sms_code'));
				}
				$userinfo['groupid'] = $this->_get_usergroup_bypoint($userinfo['point']);
			}
			//附表信息验证 通过模型获取会员信息
			if($member_setting['choosemodel']) {
				require_once CACHE_MODEL_PATH.'member_input.class.php';
		        require_once CACHE_MODEL_PATH.'member_update.class.php';
				$member_input = new member_input($userinfo['modelid']);		
				$_POST['info'] = array_map('new_html_special_chars',$_POST['info']);
				$user_model_info = $member_input->get($_POST['info']);				        				
			}
			if(pc_base::load_config('system', 'phpsso')) {
				$this->_init_phpsso();
				$status = $this->client->ps_member_register($userinfo['username'], $userinfo['password'], $userinfo['email'], $userinfo['regip'], $userinfo['encrypt']);
				if($status<=0){echo $status;}
				if($status > 0) {
					$userinfo['phpssouid'] = $status;
					//传入phpsso为明文密码，加密后存入phpcms_v9
					$password = $userinfo['password'];
					$userinfo['password'] = password($userinfo['password'], $userinfo['encrypt']);
					$userid = $this->db->insert($userinfo, 1);
					if($member_setting['choosemodel']) {	//如果开启选择模型
						$user_model_info['userid'] = $userid;
						//插入会员模型数据
						$this->db->set_model($userinfo['modelid']);
						$this->db->insert($user_model_info);
					}
					
					if($userid > 0) {
						//执行登陆操作
						if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
						$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
						$cookietime = $_cookietime ? TIME + $_cookietime : 0;
						
						if($userinfo['groupid'] == 7) {
							param::set_cookie('_username', $userinfo['username'], $cookietime);
							param::set_cookie('email', $userinfo['email'], $cookietime);							
						} else {
							$phpcms_auth = sys_auth($userid."\t".$userinfo['password'], 'ENCODE', get_auth_key('login'));
							
							param::set_cookie('auth', $phpcms_auth, $cookietime);
							param::set_cookie('_userid', $userid, $cookietime);
							param::set_cookie('_username', $userinfo['username'], $cookietime);
							param::set_cookie('_nickname', $userinfo['nickname'], $cookietime);
							param::set_cookie('_groupid', $userinfo['groupid'], $cookietime);
							param::set_cookie('cookietime', $_cookietime, $cookietime);
						}
					}
					//如果需要邮箱认证
					if($member_setting['enablemailcheck']) {
						pc_base::load_sys_func('mail');
						$code = sys_auth($userid.'|'.microtime(true), 'ENCODE', get_auth_key('email'));
						$url = APP_PATH."index.php?m=member&c=index&a=register&code=$code&verify=1";
						$message = $member_setting['registerverifymessage'];
						$message = str_replace(array('{click}','{url}','{username}','{email}','{password}'), array('<a href="'.$url.'">'.L('please_click').'</a>',$url,$userinfo['username'],$userinfo['email'],$password), $message);
 						sendmail($userinfo['email'], L('reg_verify_email'), $message);
						//设置当前注册账号COOKIE，为第二步重发邮件所用
						param::set_cookie('_regusername', $userinfo['username'], $cookietime);
						param::set_cookie('_reguserid', $userid, $cookietime);
						param::set_cookie('_reguseruid', $userinfo['phpssouid'], $cookietime);
						//showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=2');
						//header('Content-Type:application/json;charset=utf-8');
						//$zzz=true;
	                  //  echo json_encode($zzz);
						exit('true');
					} else {
						//如果不需要邮箱认证、直接登录其他应用
						$synloginstr = $this->client->ps_member_synlogin($userinfo['phpssouid']);
						//showmessage(L('operation_success').$synloginstr, 'index.php?m=member&c=index&a=init');
					//	header('Content-Type:application/json;charset=utf-8');
					//	$zzz=true;
	                   // echo json_encode($zzz);
						exit('true');
					}
					
				}
			} else {
				//showmessage(L('enable_register').L('enable_phpsso'), 'index.php?m=member&c=index&a=login');
				exit('注册功能需开启PHPSSO');
			}
			//showmessage(L('operation_failure'), HTTP_REFERER);
			exit('操作失败！');
		} 
	}
 	




public function getLogin(){
	$this->message_db = pc_base::load_model('message_model');
	$_username = param::get_cookie('_username');
	if($_POST['type']) {
		if(param::get_cookie('_userid')){
			$msgdatas = $this->message_db->select(array('send_to_id'=>$_username,'status'=>1));
			$arr[0] = true;
			$arr[1] = param::get_cookie('_username');
			$arr[2] = '登录成功';
			$arr['success'] = 1;
			$arr['userid'] = param::get_cookie('_userid');
			$arr['username'] = param::get_cookie('_username');
			$arr['nickname'] =param::get_cookie('_nickname');
			$arr['msgnum'] = count($msgdatas);
			}else{$arr['success'] = 0;}
			header('Content-Type:application/json;charset=utf-8');
			echo json_encode($arr);
		}
	
}

public function loginorout() {
	echo 'ok';
	
	
	} 
  
  
        
public function login(){
                $this->_session_start();
                //$member_setting = getcache('member_setting');
                //获取用户siteid
                $siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
                //定义站点id常量
                if (!defined('SITEID')) {define('SITEID', $siteid);}
                
                if(isset($_POST)) {
                        
                        //if(empty($_SESSION['connectid']) && $member_setting['logincode']==1) {
                                //判断验证码
                                //$code = trim($_POST['code']);
                                //if ($_SESSION['code'] != strtolower($code)) {echo json_encode(-5); exit;}
                        //}
                        $username = isset($_POST['username']) && trim(iconv("UTF-8","gb2312",$_POST['username'])) ? trim(iconv("UTF-8","gb2312",$_POST['username'])) : exit('0');
                        $password = isset($_POST['password']) && trim($_POST['password']) ? trim($_POST['password']) : exit('0');
                        $cookietime = intval($_POST['cookietime']);
                        
                        $synloginstr = ''; //同步登陆js代码
                        
                        if(pc_base::load_config('system', 'phpsso')) {
                                $this->_init_phpsso();
                                $status = $this->client->ps_member_login($username, $password);
                                $memberinfo = unserialize($status);
                                
                                if(isset($memberinfo['uid'])) {
                                        //查询帐号
                                        $r = $this->db->get_one(array('phpssouid'=>$memberinfo['uid']));
                                        if(!$r) {
                                                //插入会员详细信息，会员不存在 插入会员
                                                $info = array(
                                                                        'phpssouid'=>$memberinfo['uid'],
                                                                         'username'=>$memberinfo['username'],
                                                                         'password'=>$memberinfo['password'],
                                                                         'encrypt'=>$memberinfo['random'],
                                                                         'email'=>$memberinfo['email'],
                                                                         'regip'=>$memberinfo['regip'],
                                                                         'regdate'=>$memberinfo['regdate'],
                                                                         'lastip'=>$memberinfo['lastip'],
                                                                         'lastdate'=>$memberinfo['lastdate'],
                                                                         'groupid'=>$this->_get_usergroup_bypoint(),        //会员默认组
                                                                         'modelid'=>10,        //普通会员
                                                                        );
                                                                        
                                                //如果是connect用户
                                                if(!empty($_SESSION['connectid'])) {
                                                        $userinfo['connectid'] = $_SESSION['connectid'];
                                                }
                                                if(!empty($_SESSION['from'])) {
                                                        $userinfo['from'] = $_SESSION['from'];
                                                }
                                                unset($_SESSION['connectid'], $_SESSION['from']);
                                                
                                                $this->db->insert($info);
                                                unset($info);
                                                $r = $this->db->get_one(array('phpssouid'=>$memberinfo['uid']));
                                        }
                                        $password = $r['password'];
                                        $synloginstr = $this->client->ps_member_synlogin($r['phpssouid']);
                                 } else { 
                                if($status == -1) {
                                        echo json_encode(-1);exit; 
                                        } elseif($status == -2) {
                                         echo json_encode(-2);exit;        
                                         } else {
                                        echo json_encode(-3);exit; 
                                        }
                                 }
                                
                        } else {
                                //密码错误剩余重试次数
                                $this->times_db = pc_base::load_model('times_model');
                                $rtime = $this->times_db->get_one(array('username'=>$username));
                                if($rtime['times'] > 4) {
                                        $minute = 60 - floor((SYS_TIME - $rtime['logintime']) / 60);
                                        echo json_encode(-4);exit;
                                }
                                
                                //查询帐号
                                $r = $this->db->get_one(array('username'=>$username));

                                if(!$r) {echo json_encode(-1);exit;}
                                
                                //验证用户密码
                                $password = md5(md5(trim($password)).$r['encrypt']);
                                if($r['password'] != $password) {                                
                                        $ip = ip();
                                        if($rtime && $rtime['times'] < 5) {
                                                $times = 5 - intval($rtime['times']);
                                                $this->times_db->update(array('ip'=>$ip, 'times'=>'+=1'), array('username'=>$username));
                                        } else {
                                                $this->times_db->insert(array('username'=>$username, 'ip'=>$ip, 'logintime'=>SYS_TIME, 'times'=>1));
                                                $times = 5;
                                        }
                                        echo json_encode(-2);exit;
                                }
                                $this->times_db->delete(array('username'=>$username));
                        }
                        
                        //如果用户被锁定
                        if($r['islock']) {
                        echo json_encode(2);exit;
                        }
                        
                        $userid = $r['userid'];
                        $groupid = $r['groupid'];
                        $username = $r['username'];
                        $nickname = empty($r['nickname']) ? $username : $r['nickname'];
                        
                        $updatearr = array('lastip'=>ip(), 'lastdate'=>SYS_TIME);
                        //vip过期，更新vip和会员组
                        if($r['overduedate'] < SYS_TIME) {
                                $updatearr['vip'] = 0;
                        }                

                        //检查用户积分，更新新用户组，除去邮箱认证、禁止访问、游客组用户、vip用户，如果该用户组不允许自助升级则不进行该操作                
                        if($r['point'] >= 0 && !in_array($r['groupid'], array('1', '7', '8')) && empty($r[vip])) {
                                $grouplist = getcache('grouplist');
                                if(!empty($grouplist[$r['groupid']]['allowupgrade'])) {        
                                        $check_groupid = $this->_get_usergroup_bypoint($r['point']);
        
                                        if($check_groupid != $r['groupid']) {
                                                $updatearr['groupid'] = $groupid = $check_groupid;
                                        }
                                }
                        }

                        //如果是connect用户
                        if(!empty($_SESSION['connectid'])) {
                                $updatearr['connectid'] = $_SESSION['connectid'];
                        }
                        if(!empty($_SESSION['from'])) {
                                $updatearr['from'] = $_SESSION['from'];
                        }
                        unset($_SESSION['connectid'], $_SESSION['from']);
                                                
                        $this->db->update($updatearr, array('userid'=>$userid));
                        
                        if(!isset($cookietime)) {
                                $get_cookietime = param::get_cookie('cookietime');
                        }
                        $_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
                        $cookietime = $_cookietime ? SYS_TIME + $_cookietime : 0;
                        
                        $phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$_SERVER['HTTP_USER_AGENT']);
                        $phpcms_auth = sys_auth($userid."\t".$password, 'ENCODE', $phpcms_auth_key);
                        $this->db->set_model($r['modelid']);
                        $member_modelinfo_arr = $this->db->get_one(array('userid'=>$r['userid']));
                        $restrstar = '<script type="text/javascript" src="';
                        $restrend = '" reload="1"></script>';
                        $restr = '';
                        $pattern = '/src="(.*?)"/';
                        $synloginstr = str_replace('&quot;','"',$synloginstr);
                        preg_match_all($pattern,$synloginstr,$result);
                        foreach($result[1] as $r){
                                $synurl = @file_get_contents($r); //读取链接
                                if (preg_match('/src=/',$synurl)){//检查链接是否含有连接，如果有 打开
                                                $synurl = str_replace('&quot;','"',$synurl);
                                                $synurl = str_replace('\\','',$synurl); 
                                                        preg_match_all($pattern,$synurl,$result2);
                                                                foreach($result2[1] as $v){
                                                                        $restr .= $restrstar.$v.$restrend;        
                                                                        }
                                }else{
                                        $restr .= $restrstar.$r.$restrend;//没有的话 使用当前连接
                                        }
                        }
						$cookietime= 3600+SYS_TIME;
                        param::set_cookie('auth', $phpcms_auth, $cookietime);
                        param::set_cookie('_userid', $userid, $cookietime);
                        param::set_cookie('_username', $username, $cookietime);
                        param::set_cookie('_groupid', $groupid, $cookietime);
                        param::set_cookie('_nickname', $nickname, $cookietime);
                       // param::set_cookie('_area', $member_modelinfo_arr['area'], $cookietime);
                       // param::set_cookie('_chexi', $member_modelinfo_arr['chexi'], $cookietime);
                        param::set_cookie('cookietime', $cookietime, $cookietime);
                        $arr[0] = 1;
						$arr[1] = $username;
						$arr[2] = '登录成功';
						$arr['success'] = 1;
						$arr['username'] = $username;
						$arr['nickname'] = $nickname;
                        $arr['msg'] = iconv("gb2312","UTF-8",$restr);//urlencode($synloginstr);
                        echo json_encode($arr);
                } else {
                                if(param::get_cookie('_userid')){
                                        $arr['success'] = 1;
                                $arr['userid'] = param::get_cookie('_userid');
                                $arr['username'] = param::get_cookie('_username');
                                $arr['area'] = param::get_cookie('_area');
                                $arr['chexi'] = param::get_cookie('_chexi');
                                $arr['nickname'] =param::get_cookie('_nickname');
                                }else{$arr['success'] = 0;}
                                echo json_encode($arr);
                                
                                }
                                }
        
        public function logout() {
                $setting = pc_base::load_config('system');
                //snda退出
                if($setting['snda_enable'] && param::get_cookie('_from')=='snda') {
                        param::set_cookie('_from', '');
                        $forward = isset($_GET['forward']) && trim($_GET['forward']) ? urlencode($_GET['forward']) : '';
                        $logouturl = 'https://cas.sdo.com/cas/logout?url='.urlencode(APP_PATH.'index.php?m=member&c=index&a=logout&forward='.$forward);
                        header('Location: '.$logouturl);
                } else {
                        $synlogoutstr = '';        //同步退出js代码
                        if(pc_base::load_config('system', 'phpsso')) {
                                $this->_init_phpsso();
                                $synlogoutstr = $this->client->ps_member_synlogout();                        
                        }
                        param::set_cookie('auth', '');
                        param::set_cookie('_userid', '');
                        param::set_cookie('_username', '');
                        param::set_cookie('_groupid', '');
                        param::set_cookie('_nickname', '');
                        param::set_cookie('cookietime', '');
                        param::set_cookie('_area', '');
                        param::set_cookie('_chexi', '');
                        $restrstar = '<script type="text/javascript" src="';
                        $restrend = '" reload="1"></script>';
                        $restr = '';
                        $pattern = '/src="(.*?)"/';
                        preg_match_all($pattern,$synlogoutstr,$result);
                        foreach($result[1] as $r){
                                $synurl = @file_get_contents($r); //读取链接
                                if (preg_match('/src=/',$synurl)){//检查链接是否含有连接，如果有 打开
                                                $synurl = str_replace('&quot;','"',$synurl);
                                                $synurl = str_replace('\\','',$synurl); 
                                                        preg_match_all($pattern,$synurl,$result2);
                                                                foreach($result2[1] as $v){
                                                                        $restr .= $restrstar.$v.$restrend;        
                                                                        }
                                }else{
                                        $restr .= $restrstar.$r.$restrend;//没有的话 使用当前连接
                                        }
                        }
                        $arr['success'] = 1;
                        $arr['msg'] = iconv("gb2312","UTF-8",$restr);
                        echo json_encode($arr);
                }
                }


        
        /**
         * 初始化phpsso
         * about phpsso, include client and client configure
         * @return string phpsso_api_url phpsso地址
         */
        private function _init_phpsso() {
                pc_base::load_app_class('client', '', 0);
                define('APPID', pc_base::load_config('system', 'phpsso_appid'));
                $phpsso_api_url = pc_base::load_config('system', 'phpsso_api_url');
                $phpsso_auth_key = pc_base::load_config('system', 'phpsso_auth_key');
                $this->client = new client($phpsso_api_url, $phpsso_auth_key);
                return $phpsso_api_url;
        }
        

        
        private function _session_start() {
                $session_storage = 'session_'.pc_base::load_config('system','session_storage');
                pc_base::load_sys_class($session_storage);
        }
        

        /**
         *根据积分算出用户组
         * @param $point int 积分数
         */
        protected function _get_usergroup_bypoint($point=0) {
                $groupid = 2;
                if(empty($point)) {
                        $member_setting = getcache('member_setting');
                        $point = $member_setting['defualtpoint'] ? $member_setting['defualtpoint'] : 0;
                }
                $grouplist = getcache('grouplist');
                
                foreach ($grouplist as $k=>$v) {
                        $grouppointlist[$k] = $v['point'];
                }
                arsort($grouppointlist);

                //如果超出用户组积分设置则为积分最高的用户组
                if($point > max($grouppointlist)) {
                        $groupid = key($grouppointlist);
                } else {
                        foreach ($grouppointlist as $k=>$v) {
                                if($point >= $v) {
                                        $groupid = $tmp_k;
                                        break;
                                }
                                $tmp_k = $k;
                        }
                }
                return $groupid;
        }
        
    
	
	
	
	
	public function olduser() {
		
		$ajaxdd=$_POST['data'];
		
		$this->_session_start();
		//获取用户siteid
		$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
		//定义站点id常量
		if (!defined('SITEID')) {
		   define('SITEID', $siteid);
		}
		
		//加载用户模块配置
		$member_setting = getcache('member_setting');
		if(!$member_setting['allowregister']) {
			showmessage(L('deny_register'), 'index.php?m=member&c=index&a=login');
		}
		//加载短信模块配置
 		$sms_setting_arr = getcache('sms','sms');
		$sms_setting = $sms_setting_arr[$siteid];		
		
		header("Cache-control: private");
		if(isset($_POST)) {
			
			
			$userinfo = array();
			$userinfo['encrypt'] = create_randomstr(6);

			$userinfo['username'] = $ajaxdd['UserName'];
			$userinfo['nickname'] = $ajaxdd['UserName'];
			
			$userinfo['email'] = 'user8526@guop.com';
			$userinfo['password'] = $ajaxdd['PassWord'];

			$userinfo['modelid'] =  10;
			$userinfo['regip'] = $ajaxdd['CreaIP'];
			$userinfo['point'] = $member_setting['defualtpoint'] ? $member_setting['defualtpoint'] : 0;
			$userinfo['amount'] = $member_setting['defualtamount'] ? $member_setting['defualtamount'] : 0;
			$userinfo['regdate'] = $userinfo['lastdate'] = SYS_TIME;
			$userinfo['siteid'] = $siteid;
			$userinfo['connectid'] = isset($_SESSION['connectid']) ? $_SESSION['connectid'] : '';
			$userinfo['from'] = isset($_SESSION['from']) ? $_SESSION['from'] : '';
			

			
			//手机强制验证
			
			if($member_setting[mobile_checktype]=='1'){
				//取用户手机号
				$mobile_verify = $_POST['mobile_verify'] ? intval($_POST['mobile_verify']) : '';
				if($mobile_verify=='') showmessage('请提供正确的手机验证码！', HTTP_REFERER);
 				$sms_report_db = pc_base::load_model('sms_report_model');
				$posttime = SYS_TIME-360;
				$where = "`id_code`='$mobile_verify' AND `posttime`>'$posttime'";
				$r = $sms_report_db->get_one($where,'*','id DESC');
 				if(!empty($r)){
					$userinfo['mobile'] = $r['mobile'];
				}else{
					exit('未检测到正确的手机号码！');
				}
 			}elseif($member_setting[mobile_checktype]=='2'){
				//获取验证码，直接通过POST，取mobile值
				$userinfo['mobile'] = isset($_POST['mobile']) ? $_POST['mobile'] : '';
			} 
			if($userinfo['mobile']!=""){
				if(!preg_match('/^1([0-9]{10})$/',$userinfo['mobile'])) {
					exit('请提供正确的手机号码！');
				}
			} 
 			unset($_SESSION['connectid'], $_SESSION['from']);
			
			if($member_setting['enablemailcheck']) {	//是否需要邮件验证
				$userinfo['groupid'] = 7;
			} elseif($member_setting['registerverify']) {	//是否需要管理员审核
				$modelinfo_str = $userinfo['modelinfo'] = isset($_POST['info']) ? array2string(array_map("safe_replace", new_html_special_chars($_POST['info']))) : '';
				$this->verify_db = pc_base::load_model('member_verify_model');
				unset($userinfo['lastdate'],$userinfo['connectid'],$userinfo['from']);
				$userinfo['modelinfo'] = $modelinfo_str;
				$this->verify_db->insert($userinfo);
				//showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=3');
				exit('409');
			} else {
				//查看当前模型是否开启了短信验证功能
				$model_field_cache = getcache('model_field_'.$userinfo['modelid'],'model');
				if(isset($model_field_cache['mobile']) && $model_field_cache['mobile']['disabled']==0) {
					$mobile = $_POST['info']['mobile'];
					if(!preg_match('/^1([0-9]{10})$/',$mobile)) showmessage(L('input_right_mobile'));
					$sms_report_db = pc_base::load_model('sms_report_model');
					$posttime = SYS_TIME-300;
					$where = "`mobile`='$mobile' AND `posttime`>'$posttime'";
					$r = $sms_report_db->get_one($where);
					if(!$r || $r['id_code']!=$_POST['mobile_verify']) exit('error_sms_code');//showmessage(L('error_sms_code'));
				}
				$userinfo['groupid'] = $this->_get_usergroup_bypoint($userinfo['point']);
			}
			//附表信息验证 通过模型获取会员信息
			if($member_setting['choosemodel']) {
				require_once CACHE_MODEL_PATH.'member_input.class.php';
		        require_once CACHE_MODEL_PATH.'member_update.class.php';
				$member_input = new member_input($userinfo['modelid']);		
				$_POST['info'] = array_map('new_html_special_chars',$_POST['info']);
				$user_model_info = $member_input->get($_POST['info']);				        				
			}
			if(pc_base::load_config('system', 'phpsso')) {
				$this->_init_phpsso();
				$status = $this->client->ps_member_register($userinfo['username'], $userinfo['password'], $userinfo['email'], $userinfo['regip'], $userinfo['encrypt']);
				if($status > 0) {
					$userinfo['phpssouid'] = $status;
					//传入phpsso为明文密码，加密后存入phpcms_v9
					$password = $userinfo['password'];
					$userinfo['password'] = password($userinfo['password'], $userinfo['encrypt']);
					$userid = $this->db->insert($userinfo, 1);
					if($member_setting['choosemodel']) {	//如果开启选择模型
						$user_model_info['userid'] = $userid;
						//插入会员模型数据
						$this->db->set_model($userinfo['modelid']);
						$this->db->insert($user_model_info);
					}
					
					if($userid > 0) {
						//执行登陆操作
						if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
						$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
						$cookietime = $_cookietime ? TIME + $_cookietime : 0;
						
						if($userinfo['groupid'] == 7) {
							param::set_cookie('_username', $userinfo['username'], $cookietime);
							param::set_cookie('email', $userinfo['email'], $cookietime);							
						} else {
							$phpcms_auth = sys_auth($userid."\t".$userinfo['password'], 'ENCODE', get_auth_key('login'));
							
							param::set_cookie('auth', $phpcms_auth, $cookietime);
							param::set_cookie('_userid', $userid, $cookietime);
							param::set_cookie('_username', $userinfo['username'], $cookietime);
							param::set_cookie('_nickname', $userinfo['nickname'], $cookietime);
							param::set_cookie('_groupid', $userinfo['groupid'], $cookietime);
							param::set_cookie('cookietime', $_cookietime, $cookietime);
						}
					}
					//如果需要邮箱认证
					if($member_setting['enablemailcheck']) {
						pc_base::load_sys_func('mail');
						$code = sys_auth($userid.'|'.microtime(true), 'ENCODE', get_auth_key('email'));
						$url = APP_PATH."index.php?m=member&c=index&a=register&code=$code&verify=1";
						$message = $member_setting['registerverifymessage'];
						$message = str_replace(array('{click}','{url}','{username}','{email}','{password}'), array('<a href="'.$url.'">'.L('please_click').'</a>',$url,$userinfo['username'],$userinfo['email'],$password), $message);
 						sendmail($userinfo['email'], L('reg_verify_email'), $message);
						//设置当前注册账号COOKIE，为第二步重发邮件所用
						param::set_cookie('_regusername', $userinfo['username'], $cookietime);
						param::set_cookie('_reguserid', $userid, $cookietime);
						param::set_cookie('_reguseruid', $userinfo['phpssouid'], $cookietime);
						//showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=2');
						header('Content-Type:application/json;charset=utf-8');
						$zzz=true;
	                    echo json_encode($zzz);exit();
					} else {
						//如果不需要邮箱认证、直接登录其他应用
						$synloginstr = $this->client->ps_member_synlogin($userinfo['phpssouid']);
						//showmessage(L('operation_success').$synloginstr, 'index.php?m=member&c=index&a=init');
						header('Content-Type:application/json;charset=utf-8');
						$zzz=true;
	                    echo json_encode($zzz);exit();
					}
					
				}
			} else {
				//showmessage(L('enable_register').L('enable_phpsso'), 'index.php?m=member&c=index&a=login');
				exit('注册功能需开启PHPSSO');
			}
			//showmessage(L('operation_failure'), HTTP_REFERER);
			exit('操作失败！');
		} 
	}
 	

	
	    
}
?>