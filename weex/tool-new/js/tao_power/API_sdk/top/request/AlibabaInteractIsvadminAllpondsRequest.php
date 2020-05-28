<?php
/**
 * TOP API: alibaba.interact.isvadmin.allponds request
 * 
 * @author auto create
 * @since 1.0, 2018.07.26
 */
class AlibabaInteractIsvadminAllpondsRequest
{
	
	private $apiParas = array();
	
	public function getApiMethodName()
	{
		return "alibaba.interact.isvadmin.allponds";
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
