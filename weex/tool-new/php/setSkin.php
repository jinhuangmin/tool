
<?php
	




	/**
	 * 令牌校验
	 */
    // $GLOBALS['_DIR'] = "../../acs/";  //线下
    $GLOBALS['_DIR'] = "/acs/";  //if( !strstr( $_SERVER['HTTP_REFERER'], 'dashi51.ews.m.jaeapp.com') || !$_SERVER['REMOTE_ADDR'] ){ die(0); }  //线上
    
    $type = $_POST["type"];
	$json = $_POST["json"];
	$_sjdz_token_ = trim($_POST["_sjdz_token_"]);
	session_start();
	if( !$_sjdz_token_ || $_sjdz_token_ != trim(strval($_SESSION["_sjdz_token_"]))  ){
        echo -1;
        exit();
    }

    //判定,保存
	if($type=="saveskin"){
        if(!$json){
            echo -1;
            exit();
        }
        try {
            $json = json_decode($json,true);
            $name = $json["name"];
            $uid = $_COOKIE["uid"];
            $skindir = $GLOBALS['_DIR']."userskin";
            $skindir_user = $GLOBALS['_DIR']."userskin/".$uid;
            $skindir_user_f = $GLOBALS['_DIR']."userskin/".$uid."/".$name;
            if(!$uid){
                echo -1;
                exit();
            }
            /**
             * 开始处理数据
             * apwx_jbblb
             */
            if( $name=="apwx_jbblb" ){
                if(!is_dir($skindir)){
                    mkdir($skindir);
                }
                if(!is_dir($skindir_user)){
                    mkdir($skindir_user);
                }
                echo file_put_contents($skindir_user_f.".json", json_encode($json));
            }else{
                echo -1;
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    //获取
    if($type=="getskin"){
        $uid = $_COOKIE["uid"];
        //apwx_jbblb，宝贝列表数据
        $skindir_user_f = $GLOBALS['_DIR']."userskin/".$uid."/apwx_jbblb.json";
        if(is_file( $skindir_user_f )){
            $f = file_get_contents($skindir_user_f);
            echo $f;
        }else{
            echo -1;
        }
    }
