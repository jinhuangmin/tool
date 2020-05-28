<?php 


/**
 * 授权通过了，获取基本信息
 */
class oauth{
    
    public $uid;                            //userid
    public $nick;                           // nick
    public $sid;                            //shopid
    public $title;                          //shoptitle
    public $logoUrl;                     //shoplogo店铺logo地址
    public $shopMsg;                    //店铺信息，用于判断用户是否存在店铺
    public $skey;                              //sessionkey
    public $rkey;                            //refresh
    public $picClaId;                       //图片空间里的ID
    public $childrenClaId;                  //图片空间子级的ID
    //通过授权获取code
    function get_code($url,$view="web",$state=1212) {
        header("Location:https://oauth.taobao.com/authorize?response_type=code&state=$state&view=$view&client_id=23337523&redirect_uri=$url");
    }
    
    //通过get_code()得到的code来获取userid,nick,access_token,refresh_token
    function gets($code,$url) {
            $url2="https://oauth.taobao.com/token?";
            $postfields= array('grant_type'=>'authorization_code',
            
                'client_id'=>'23337523',
            
                'client_secret'=>'28ee4a54a12b89c48afeac1e1c8365d5',
            
                'code'=>$code,
            
                'redirect_uri'=>$url);
             
            $post_data = '';
            
            foreach($postfields as $key=>$value){
            
                $post_data .="$key=".urlencode($value)."&";
            }
            
            $ch2 = curl_init();
            
            curl_setopt($ch2, CURLOPT_URL, $url2);
            
            curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
            
            curl_setopt ($ch2, CURLOPT_SSL_VERIFYPEER, 0);
            
            curl_setopt ($ch2, CURLOPT_SSL_VERIFYHOST, 0);
            
            //指定post数据
            
            curl_setopt($ch2, CURLOPT_POST, true);
            
            //添加变量
            
            curl_setopt($ch2, CURLOPT_POSTFIELDS, substr($post_data,0,-1));
            
            $output2 = curl_exec($ch2);
            
            $httpStatusCode2 = curl_getinfo($ch2, CURLINFO_HTTP_CODE);
             
            curl_close($ch2);
            
			
            $a = json_decode($output2);
            
            $this->uid=$a->taobao_user_id;
            $this->nick=urldecode($a->taobao_user_nick);
            $this->skey=$a->access_token;
            $this->rkey=$a->refresh_token;
    }
    
    /**
     * 获取店铺信息
     */
    function getShopInfos(){
        if($this->nick != ""){
            $c = new TopClient;
            $c->appkey = "23337523";
            $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
            
            $req = new ShopSellerGetRequest;
            $req->setFields("sid,title,pic_path");
            $resp = $c->execute($req, $this->skey);
            
            $this->sid=$resp->shop->sid;
            $this->title=$resp->shop->title;
            $this->logoUrl=$resp->shop->pic_path;
            $this->shopMsg=$resp->msg;
        }else{
//         die("不存在");
        }  
    }
    /**
     * 给用户图片空间添加分类
     * @param unknown $parentId
     * @param unknown $fl_name
     */
    function addPicZoneClass($parentId, $fl_name, $skey){
        if( $skey ){
            $c = new TopClient;
            $c->appkey = "23337523";
            $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
            $req = new PictureCategoryAddRequest;
            $req->setPictureCategoryName( $fl_name );
            $req->setParentId( $parentId );
            $resp = $c->execute($req,$skey );
            $this->picClaId = $resp->picture_category->picture_category_id;
            return $this->picClaId;
//             echo '<pre>';
//             var_dump($resp);
//             echo '</pre>';
        }
    }
    function has_FL( $name,$skey ){
        if( $skey ){
            $c = new TopClient;
            $c->appkey = "23337523";
            $c->secretKey = "28ee4a54a12b89c48afeac1e1c8365d5";
            $req = new PictureCategoryGetRequest;
            $req->setPictureCategoryName( $name );
            $resp = $c->execute($req, $skey);
         
            if( !empty($resp) ){
            	 return  $resp->picture_categories->picture_category->picture_category_id;
            }else{
            	return 0;
            }
        }
    }
}
?>