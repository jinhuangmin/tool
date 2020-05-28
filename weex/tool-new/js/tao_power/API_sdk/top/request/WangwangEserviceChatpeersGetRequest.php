<?php
/**
 * TOP API: taobao.wangwang.eservice.chatpeers.get request
 * 
 * @author auto create
 * @since 1.0, 2018.11.29
 */
class WangwangEserviceChatpeersGetRequest
{
	
	private $apiParas = array();
	
	public function getApiMethodName()
	{
		return "taobao.wangwang.eservice.chatpeers.get";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
