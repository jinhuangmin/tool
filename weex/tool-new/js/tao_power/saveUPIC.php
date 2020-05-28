



<?php
	
	/**
	 * 处理和记录用户生成的图片信息
	 * 当达到一定数量会自动清除
	 */
	ini_set('date.timezone','Asia/Shanghai');	
	
	
	
	//用户和图片
	$uname = $_POST["uname"];
	$pic = $_POST["pic"];
	$source = $_POST["source"];
	$pictype = $_POST['pictype'];
	
	//记录
	if($uname&&$pic&&$source){
		$sdir = '../userMake';
		if(!is_dir($sdir)){
		         mkdir($sdir);
		  }
		if($source==2){
			    //记录用户生成的图片，并保存到服务器
			    //保存图片
				$spicdir = '../userMake/pic';
				if(!is_dir($spicdir)){
			            mkdir($spicdir);
			    }
			    $t = "t".time().rand(0,1000);
				$fh = "$spicdir/$t.$pictype";
				$pic = substr($pic, 22); // 要把[data:image/png;base64,]这22个字符去掉，否则解码出来的图片是被损坏的
        		$pic = base64_decode($pic);
				$a = file_put_contents($fh,$pic);//返回图片大小
				//记录图片
				addpic($uname,$fh,$source);
		}elseif($source==1){//图片已上传到图片空间
			addpic($uname,$pic,$source);
		}
		
	}
	
	

	
	function addpic($uname,$pic,$source){
			//记录xml
			$sdir_xml = '../userMake/umake.xml';
			if(is_file($sdir_xml)){
					$xml = simplexml_load_file($sdir_xml);
					
					//超出1000张清除1张
					if(count($xml)>1000){
						for($i=0; $i<count($xml);$i++){
							if( $i<1 ){
								unset($xml->p[$i]);
								if((string)$xml->p[$i]["source"]=="2"){
									$dpic = (string)$xml->p[$i]["pic"];
									if(is_file($dpic)){
										unlink($dpic);
									}
								}  
							}else{
								break;
							}
						}
					}
					
					$newpage = $xml->addChild('p');
					$newpage->addAttribute("uname",$uname); //ID
					$newpage->addAttribute("pic",$pic); //名称
					$newpage->addAttribute("source",$source); //头像
					$newpage->addAttribute("d",date("Y/m/d-H:i:s")); //头像
					
					$xml->asXML($sdir_xml);
			}else{
				$xmldata = '<?xml version="1.0" encoding="UTF-8"?><pics></pics>';
				file_put_contents($sdir_xml,$xmldata);
				addpic($uname,$pic,$source);
			}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

?>